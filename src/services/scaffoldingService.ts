// Scaffolding Service - Provides gradual help reduction as user improves
// Implements adaptive assistance based on performance history

interface UserPerformance {
  topicId: string;
  attempts: number;
  correctAttempts: number;
  lastAttemptDate: number;
  scaffoldLevel: number; // 0-4 (0 = max help, 4 = no help)
  streak: number;
}

interface ScaffoldConfig {
  showTranslation: boolean;
  showHints: boolean;
  showWordBank: boolean;
  showFirstLetter: boolean;
  showExamples: boolean;
  timeLimit?: number;
  attemptsAllowed: number;
}

const SCAFFOLD_LEVELS: ScaffoldConfig[] = [
  // Level 0: Maximum support
  {
    showTranslation: true,
    showHints: true,
    showWordBank: true,
    showFirstLetter: true,
    showExamples: true,
    attemptsAllowed: 5,
  },
  // Level 1: High support
  {
    showTranslation: true,
    showHints: true,
    showWordBank: true,
    showFirstLetter: false,
    showExamples: true,
    attemptsAllowed: 4,
  },
  // Level 2: Medium support
  {
    showTranslation: true,
    showHints: true,
    showWordBank: false,
    showFirstLetter: false,
    showExamples: false,
    attemptsAllowed: 3,
  },
  // Level 3: Low support
  {
    showTranslation: false,
    showHints: true,
    showWordBank: false,
    showFirstLetter: false,
    showExamples: false,
    attemptsAllowed: 2,
  },
  // Level 4: No support (mastery)
  {
    showTranslation: false,
    showHints: false,
    showWordBank: false,
    showFirstLetter: false,
    showExamples: false,
    timeLimit: 30,
    attemptsAllowed: 1,
  },
];

const DB_NAME = 'englishapp_scaffolding';
const STORE_NAME = 'performance';

class ScaffoldingService {
  private db: IDBDatabase | null = null;
  private cache: Map<string, UserPerformance> = new Map();

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        this.loadCache().then(resolve);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'topicId' });
        }
      };
    });
  }

  private async loadCache(): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve) => {
      const transaction = this.db!.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        const performances = request.result as UserPerformance[];
        performances.forEach((p) => this.cache.set(p.topicId, p));
        resolve();
      };

      request.onerror = () => resolve();
    });
  }

  private async savePerformance(performance: UserPerformance): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve) => {
      const transaction = this.db!.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      store.put(performance);
      transaction.oncomplete = () => {
        this.cache.set(performance.topicId, performance);
        resolve();
      };
    });
  }

  // Get the current scaffold configuration for a topic
  getScaffoldConfig(topicId: string): ScaffoldConfig {
    const performance = this.cache.get(topicId);
    const level = performance?.scaffoldLevel ?? 0;
    return { ...SCAFFOLD_LEVELS[level] };
  }

  // Get the scaffold level (0-4)
  getScaffoldLevel(topicId: string): number {
    return this.cache.get(topicId)?.scaffoldLevel ?? 0;
  }

  // Get performance data for a topic
  getPerformance(topicId: string): UserPerformance | null {
    return this.cache.get(topicId) || null;
  }

  // Record an attempt and potentially adjust scaffold level
  async recordAttempt(topicId: string, isCorrect: boolean): Promise<{
    newLevel: number;
    levelChanged: boolean;
    message?: string;
  }> {
    let performance = this.cache.get(topicId);

    if (!performance) {
      performance = {
        topicId,
        attempts: 0,
        correctAttempts: 0,
        lastAttemptDate: Date.now(),
        scaffoldLevel: 0,
        streak: 0,
      };
    }

    const oldLevel = performance.scaffoldLevel;
    performance.attempts++;
    performance.lastAttemptDate = Date.now();

    if (isCorrect) {
      performance.correctAttempts++;
      performance.streak++;

      // Check if we should level up (reduce help)
      const shouldLevelUp = this.checkLevelUp(performance);
      if (shouldLevelUp && performance.scaffoldLevel < 4) {
        performance.scaffoldLevel++;
      }
    } else {
      performance.streak = 0;

      // Check if we should level down (increase help)
      const shouldLevelDown = this.checkLevelDown(performance);
      if (shouldLevelDown && performance.scaffoldLevel > 0) {
        performance.scaffoldLevel--;
      }
    }

    await this.savePerformance(performance);

    const levelChanged = oldLevel !== performance.scaffoldLevel;
    let message: string | undefined;

    if (levelChanged) {
      if (performance.scaffoldLevel > oldLevel) {
        message = this.getLevelUpMessage(performance.scaffoldLevel);
      } else {
        message = this.getLevelDownMessage(performance.scaffoldLevel);
      }
    }

    return {
      newLevel: performance.scaffoldLevel,
      levelChanged,
      message,
    };
  }

  private checkLevelUp(performance: UserPerformance): boolean {
    // Requirements to reduce scaffolding:
    // - At least 5 attempts at current level
    // - At least 80% accuracy
    // - Current streak of at least 3

    const recentAccuracy = performance.attempts > 0
      ? performance.correctAttempts / performance.attempts
      : 0;

    return (
      performance.attempts >= 5 &&
      recentAccuracy >= 0.8 &&
      performance.streak >= 3
    );
  }

  private checkLevelDown(performance: UserPerformance): boolean {
    // Requirements to increase scaffolding:
    // - Less than 50% accuracy in recent attempts
    // - Failed streak of 3 or more

    const recentAccuracy = performance.attempts > 0
      ? performance.correctAttempts / performance.attempts
      : 0;

    return recentAccuracy < 0.5 || performance.streak <= -3;
  }

  private getLevelUpMessage(newLevel: number): string {
    const messages = [
      '',
      '¡Bien! Estás mejorando. Te mostraremos menos ayuda.',
      '¡Excelente progreso! Ahora sin banco de palabras.',
      '¡Impresionante! Ya no necesitas las traducciones.',
      '¡Felicitaciones! Has alcanzado el nivel de dominio. Sin ayuda adicional.',
    ];
    return messages[newLevel] || '';
  }

  private getLevelDownMessage(newLevel: number): string {
    const messages = [
      'No te preocupes, te daremos más apoyo para ayudarte.',
      'Vamos a añadir algunas pistas extra.',
      'Te mostraremos el banco de palabras de nuevo.',
      'Añadimos las traducciones para ayudarte.',
    ];
    return messages[newLevel] || '';
  }

  // Get a summary of scaffolding progress across all topics
  getProgressSummary(): {
    topicsByLevel: Record<number, number>;
    averageLevel: number;
    totalTopics: number;
    masteredTopics: number;
  } {
    const performances = Array.from(this.cache.values());
    const topicsByLevel: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };

    performances.forEach((p) => {
      topicsByLevel[p.scaffoldLevel] = (topicsByLevel[p.scaffoldLevel] || 0) + 1;
    });

    const totalTopics = performances.length;
    const totalLevel = performances.reduce((sum, p) => sum + p.scaffoldLevel, 0);
    const averageLevel = totalTopics > 0 ? totalLevel / totalTopics : 0;
    const masteredTopics = topicsByLevel[4] || 0;

    return {
      topicsByLevel,
      averageLevel,
      totalTopics,
      masteredTopics,
    };
  }

  // Reset scaffolding for a topic (for practice purposes)
  async resetTopic(topicId: string): Promise<void> {
    const performance = this.cache.get(topicId);
    if (performance) {
      performance.scaffoldLevel = 0;
      performance.streak = 0;
      await this.savePerformance(performance);
    }
  }

  // Get topics that need review (not practiced recently or struggling)
  getTopicsForReview(): string[] {
    const now = Date.now();
    const dayInMs = 24 * 60 * 60 * 1000;

    return Array.from(this.cache.values())
      .filter((p) => {
        const daysSinceLastAttempt = (now - p.lastAttemptDate) / dayInMs;
        const accuracy = p.attempts > 0 ? p.correctAttempts / p.attempts : 0;

        // Review if: not practiced in 3+ days OR accuracy below 60%
        return daysSinceLastAttempt > 3 || accuracy < 0.6;
      })
      .map((p) => p.topicId);
  }

  // Export all data (for backup)
  exportData(): UserPerformance[] {
    return Array.from(this.cache.values());
  }

  // Import data (for restore)
  async importData(data: UserPerformance[]): Promise<void> {
    for (const performance of data) {
      await this.savePerformance(performance);
    }
  }
}

// Singleton instance
const scaffoldingService = new ScaffoldingService();
export default scaffoldingService;

// Export types
export type { UserPerformance, ScaffoldConfig };
export { SCAFFOLD_LEVELS };
