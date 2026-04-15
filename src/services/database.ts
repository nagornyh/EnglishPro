import { openDB } from 'idb';
import type { DBSchema, IDBPDatabase } from 'idb';
import type { User, VocabularyProgress, CompletedLesson, DailyStats } from '../types';
import { getLevelAwareSRSIntervals } from './skillMetrics';

interface EnglishLearningDB extends DBSchema {
  users: {
    key: string;
    value: User;
    indexes: { 'by-name': string };
  };
  vocabularyProgress: {
    key: string;
    value: VocabularyProgress;
    indexes: { 'by-user': string; 'by-next-review': string };
  };
  completedLessons: {
    key: string;
    value: CompletedLesson & { odId: string; odUserId: string };
    indexes: { 'by-user': string };
  };
  dailyStats: {
    key: string;
    value: DailyStats & { odId: string; odUserId: string };
    indexes: { 'by-user': string; 'by-date': string };
  };
  taskIntroSeen: {
    key: string;
    value: { odId: string; odUserId: string; levelId: number; taskId: number; seenAt: string };
    indexes: { 'by-user': string };
  };
}

const DB_NAME = 'EnglishLearningDB';
const DB_VERSION = 3;

class DatabaseService {
  private db: IDBPDatabase<EnglishLearningDB> | null = null;
  /** Set to true when IndexedDB is unavailable (e.g. private-browsing quota). */
  private unavailable = false;

  async init(): Promise<void> {
    if (this.db || this.unavailable) return;

    try {
      this.db = await openDB<EnglishLearningDB>(DB_NAME, DB_VERSION, {
      async upgrade(db, oldVersion, _newVersion, transaction) {
        if (!db.objectStoreNames.contains('users')) {
          const userStore = db.createObjectStore('users', { keyPath: 'id' });
          userStore.createIndex('by-name', 'name');
        }

        if (!db.objectStoreNames.contains('vocabularyProgress')) {
          const vocabStore = db.createObjectStore('vocabularyProgress', { keyPath: 'wordId' });
          vocabStore.createIndex('by-user', 'userId');
          vocabStore.createIndex('by-next-review', 'nextReview');
        }

        if (!db.objectStoreNames.contains('completedLessons')) {
          const lessonsStore = db.createObjectStore('completedLessons', { keyPath: 'odId' });
          lessonsStore.createIndex('by-user', 'odUserId');
        }

        if (!db.objectStoreNames.contains('dailyStats')) {
          const statsStore = db.createObjectStore('dailyStats', { keyPath: 'odId' });
          statsStore.createIndex('by-user', 'odUserId');
          statsStore.createIndex('by-date', 'date');
        }

        if (!db.objectStoreNames.contains('taskIntroSeen')) {
          const introStore = db.createObjectStore('taskIntroSeen', { keyPath: 'odId' });
          introStore.createIndex('by-user', 'odUserId');
        }

        // Migrate vocabularyProgress to include userId/baseWordId (DB v2)
        // Uses the implicit versionchange transaction instead of creating a new one
        if (oldVersion < 2 && db.objectStoreNames.contains('vocabularyProgress')) {
          const store = transaction.objectStore('vocabularyProgress');
          let cursor = await store.openCursor();
          while (cursor) {
            const value: any = cursor.value;
            if (!value.userId || !value.baseWordId) {
              const composite: string = value.wordId;
              const underscoreIdx = composite.indexOf('_');
              if (underscoreIdx > 0) {
                value.userId = composite.slice(0, underscoreIdx);
                value.baseWordId = composite.slice(underscoreIdx + 1);
              } else {
                value.userId = value.userId ?? '';
                value.baseWordId = value.baseWordId ?? composite;
              }
              await cursor.update(value);
            }
            cursor = await cursor.continue();
          }
        }
      },
    });
    } catch (err) {
      // IndexedDB is unavailable (private browsing, storage quota, corrupted)
      console.error('[DB] IndexedDB init failed — running in degraded mode:', err);
      this.unavailable = true;
    }
  }

  /** Close the database connection. Used by tests to avoid InvalidStateError between runs. */
  close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }

  /** Guard used internally: throws a descriptive error when DB is unavailable. */
  private requireDB(): IDBPDatabase<EnglishLearningDB> {
    if (this.unavailable) {
      throw new Error(
        'IndexedDB no está disponible en este navegador o modo de navegación. ' +
        'El progreso no se guardará en esta sesión.'
      );
    }
    if (!this.db) {
      throw new Error('La base de datos no ha sido inicializada. Llama a init() primero.');
    }
    return this.db;
  }

  // Task Introduction Operations
  async hasSeenTaskIntro(userId: string, levelId: number, taskId: number): Promise<boolean> {
    await this.init();
    if (this.unavailable) return false;
    const odId = `${userId}_${levelId}_${taskId}`;
    const record = await this.requireDB().get('taskIntroSeen', odId);
    return Boolean(record);
  }

  async markTaskIntroSeen(userId: string, levelId: number, taskId: number): Promise<void> {
    await this.init();
    if (this.unavailable) return;
    const odId = `${userId}_${levelId}_${taskId}`;
    await this.requireDB().put('taskIntroSeen', {
      odId,
      odUserId: userId,
      levelId,
      taskId,
      seenAt: new Date().toISOString(),
    });
  }

  // User Operations
  /** Crea el usuario Admin fijo si no existe todavía. */
  async ensureAdminUser(): Promise<void> {
    await this.init();
    if (this.unavailable) return;
    const existing = await this.requireDB().get('users', 'admin');
    if (existing) return;
    const adminUser: User = {
      id: 'admin',
      name: '⚙ Admin',
      isAdmin: true,
      createdAt: new Date().toISOString(),
      lastSession: new Date().toISOString(),
      settings: {
        soundEnabled: true,
        autoPlayAudio: true,
        showTranslations: true,
        dailyGoal: 50,
        preferredActivities: ['flashcard', 'multipleChoice', 'matchPairs'],
      },
      progress: {
        currentLevel: 1,
        currentTask: 1,
        completedLessons: [],
        vocabularyProgress: [],
        totalXP: 0,
        timeSpentMinutes: 0,
        lessonsCompleted: 0,
        wordsLearned: 0,
        accuracy: 0,
        masteredGrammarIds: [],
      },
      achievements: [],
      streakData: {
        currentStreak: 0,
        longestStreak: 0,
        lastActivityDate: '',
        streakHistory: [],
      },
    };
    await this.requireDB().put('users', adminUser);
  }

  async createUser(name: string): Promise<User> {
    await this.init();
    if (this.unavailable) {
      throw new Error(
        'No se puede crear el usuario: IndexedDB no está disponible en este modo de navegación.'
      );
    }
    
    const user: User = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date().toISOString(),
      lastSession: new Date().toISOString(),
      settings: {
        soundEnabled: true,
        autoPlayAudio: true,
        showTranslations: true,
        dailyGoal: 50,
        preferredActivities: ['flashcard', 'multipleChoice', 'matchPairs'],
      },
      progress: {
        currentLevel: 1,
        currentTask: 1,
        completedLessons: [],
        vocabularyProgress: [],
        totalXP: 0,
        timeSpentMinutes: 0,
        lessonsCompleted: 0,
        wordsLearned: 0,
        accuracy: 0,
        masteredGrammarIds: [],
      },
      achievements: [],
      streakData: {
        currentStreak: 0,
        longestStreak: 0,
        lastActivityDate: '',
        streakHistory: [],
      },
    };

    await this.requireDB().put('users', user);
    return user;
  }

  async getUser(id: string): Promise<User | undefined> {
    await this.init();
    if (this.unavailable) return undefined;
    return this.requireDB().get('users', id);
  }

  async getUserByName(name: string): Promise<User | undefined> {
    await this.init();
    if (this.unavailable) return undefined;
    return this.requireDB().getFromIndex('users', 'by-name', name);
  }

  async getAllUsers(): Promise<User[]> {
    await this.init();
    if (this.unavailable) return [];
    return this.requireDB().getAll('users');
  }

  async updateUser(user: User): Promise<void> {
    await this.init();
    if (this.unavailable) return;
    user.lastSession = new Date().toISOString();
    await this.requireDB().put('users', user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.init();
    if (this.unavailable) return;
    await this.requireDB().delete('users', id);
  }

  // Progress Operations
  async updateVocabularyProgress(
    userId: string,
    wordId: string,
    correct: boolean,
    context?: { levelId?: number; taskId?: number; cefrLevel?: string }
  ): Promise<VocabularyProgress> {
    await this.init();
    
    const SRS_INTERVALS = getLevelAwareSRSIntervals(context?.cefrLevel);
    
    const compositeId = `${userId}_${wordId}`;
    if (this.unavailable) {
      // Return a transient progress record without persisting
      const transient: VocabularyProgress = {
        wordId: `${userId}_${wordId}`,
        userId,
        baseWordId: wordId,
        levelId: context?.levelId ?? 0,
        taskId: context?.taskId ?? 0,
        masteryLevel: 0,
        nextReview: new Date().toISOString(),
        correctCount: correct ? 1 : 0,
        incorrectCount: correct ? 0 : 1,
        lastReviewed: new Date().toISOString(),
      };
      return transient;
    }
    // Use an explicit transaction for atomicity (read + modify + write)
    const tx = this.requireDB().transaction('vocabularyProgress', 'readwrite');
    const store = tx.objectStore('vocabularyProgress');
    let progress = await store.get(compositeId);
    
    if (!progress) {
      progress = {
        wordId: compositeId,
        userId,
        baseWordId: wordId,
        levelId: context?.levelId ?? 0,
        taskId: context?.taskId ?? 0,
        masteryLevel: 0,
        nextReview: new Date().toISOString(),
        correctCount: 0,
        incorrectCount: 0,
        lastReviewed: new Date().toISOString(),
      };
    } else {
      // Backfill in case of old records
      (progress as any).userId = (progress as any).userId ?? userId;
      (progress as any).baseWordId = (progress as any).baseWordId ?? wordId;
      // Optionally store latest context
      if (context?.levelId != null) progress.levelId = context.levelId;
      if (context?.taskId != null) progress.taskId = context.taskId;
    }

    if (correct) {
      progress.masteryLevel = Math.min(5, progress.masteryLevel + 1) as 0 | 1 | 2 | 3 | 4 | 5;
      progress.correctCount++;
    } else {
      progress.masteryLevel = Math.max(0, progress.masteryLevel - 1) as 0 | 1 | 2 | 3 | 4 | 5;
      progress.incorrectCount++;
    }

    const nextReviewDate = new Date();
    nextReviewDate.setDate(nextReviewDate.getDate() + SRS_INTERVALS[progress.masteryLevel]);
    progress.nextReview = nextReviewDate.toISOString();
    progress.lastReviewed = new Date().toISOString();

    await store.put(progress);
    await tx.done;
    return progress;
  }

  async getWordsForReview(userId: string, limit: number = 20): Promise<VocabularyProgress[]> {
    await this.init();
    if (this.unavailable) return [];
    const now = new Date().toISOString();
    const allProgress = await this.requireDB().getAllFromIndex('vocabularyProgress', 'by-user', userId);
    
    return allProgress
      .filter(p => p.nextReview <= now)
      .slice(0, limit);
  }

  async getVocabularyProgressByUser(userId: string): Promise<VocabularyProgress[]> {
    await this.init();
    if (this.unavailable) return [];
    return await this.requireDB().getAllFromIndex('vocabularyProgress', 'by-user', userId);
  }

  // Daily Stats Operations
  private getTodayISODate(): string {
    return new Date().toISOString().split('T')[0];
  }

  async getDailyStats(userId: string, date: string = this.getTodayISODate()): Promise<DailyStats | undefined> {
    await this.init();
    if (this.unavailable) return undefined;
    const odId = `${userId}_${date}`;
    const record = await this.requireDB().get('dailyStats', odId);
    if (!record) return undefined;
    const { odId: _odId, odUserId: _odUserId, ...stats } = record as any;
    return stats as DailyStats;
  }

  async upsertDailyStats(
    userId: string,
    delta: Partial<Pick<DailyStats, 'xpEarned' | 'lessonsCompleted' | 'wordsReviewed' | 'timeSpentMinutes'>> & {
      date?: string;
      accuracy?: number; // last known accuracy for the day
    }
  ): Promise<void> {
    await this.init();
    const date = delta.date ?? this.getTodayISODate();
    const odId = `${userId}_${date}`;

    if (this.unavailable) return;
    const tx = this.requireDB().transaction('dailyStats', 'readwrite');
    const store = tx.objectStore('dailyStats');
    const existing = await store.get(odId);

    const base: DailyStats = existing
      ? ({ ...existing } as any)
      : {
          date,
          xpEarned: 0,
          lessonsCompleted: 0,
          wordsReviewed: 0,
          timeSpentMinutes: 0,
          accuracy: 0,
        };

    const next: any = {
      ...base,
      xpEarned: base.xpEarned + (delta.xpEarned ?? 0),
      lessonsCompleted: base.lessonsCompleted + (delta.lessonsCompleted ?? 0),
      wordsReviewed: base.wordsReviewed + (delta.wordsReviewed ?? 0),
      timeSpentMinutes: base.timeSpentMinutes + (delta.timeSpentMinutes ?? 0),
      accuracy: typeof delta.accuracy === 'number' ? delta.accuracy : base.accuracy,
      odId,
      odUserId: userId,
    };

    await store.put(next);
    await tx.done;
  }

  // Streak Operations
  async updateStreak(userId: string): Promise<number> {
    await this.init();
    const user = await this.getUser(userId);
    if (!user) return 0;

    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (user.streakData.lastActivityDate === today) {
      return user.streakData.currentStreak;
    }

    if (user.streakData.lastActivityDate === yesterday) {
      user.streakData.currentStreak++;
    } else if (user.streakData.lastActivityDate !== today) {
      user.streakData.currentStreak = 1;
    }

    user.streakData.lastActivityDate = today;
    user.streakData.longestStreak = Math.max(
      user.streakData.longestStreak,
      user.streakData.currentStreak
    );
    
    if (!user.streakData.streakHistory.includes(today)) {
      user.streakData.streakHistory.push(today);
    }

    await this.updateUser(user);
    return user.streakData.currentStreak;
  }

  // XP Operations
  async addXP(userId: string, xp: number): Promise<number> {
    await this.init();
    const user = await this.getUser(userId);
    if (!user) return 0;

    user.progress.totalXP += xp;
    await this.updateUser(user);
    await this.upsertDailyStats(userId, { xpEarned: xp });
    return user.progress.totalXP;
  }

  // Lesson Completion
  async completeLesson(
    userId: string,
    levelId: number,
    taskId: number,
    xpEarned: number,
    accuracy: number,
    timeSpentSeconds: number
  ): Promise<void> {
    await this.init();
    const user = await this.getUser(userId);
    if (!user) return;

    const alreadyCompleted = user.progress.completedLessons.some(
      l => l.levelId === levelId && l.taskId === taskId
    );
    const isFirstCompletion = !alreadyCompleted;

    const lesson: CompletedLesson = {
      levelId,
      taskId,
      completedAt: new Date().toISOString(),
      xpEarned,
      accuracy,
      timeSpentSeconds,
    };

    if (isFirstCompletion) {
      user.progress.completedLessons.push(lesson);
      user.progress.lessonsCompleted++;
    }
    user.progress.totalXP += xpEarned;
    user.progress.timeSpentMinutes += Math.round(timeSpentSeconds / 60);

    // Update current position
    if (isFirstCompletion) {
      if (levelId === user.progress.currentLevel && taskId >= user.progress.currentTask) {
        user.progress.currentTask = taskId + 1;
      }
    }

    await this.updateUser(user);
    await this.updateStreak(userId);

    if (isFirstCompletion && !this.unavailable) {
      const odId = `${userId}_${levelId}_${taskId}_${lesson.completedAt}`;
      await this.requireDB().put('completedLessons', {
        ...lesson,
        odId,
        odUserId: userId,
      });
    }

    await this.upsertDailyStats(userId, {
      xpEarned,
      lessonsCompleted: isFirstCompletion ? 1 : 0,
      timeSpentMinutes: Math.round(timeSpentSeconds / 60),
      accuracy,
    });
  }

  // Export/Import
  async exportUserData(userId: string): Promise<string> {
    await this.init();
    const user = await this.getUser(userId);
    if (!user) throw new Error('User not found');

    if (this.unavailable) throw new Error('IndexedDB no está disponible — no se puede exportar.');
    const vocabProgress = await this.requireDB().getAllFromIndex('vocabularyProgress', 'by-user', userId);
    const allDailyStats = await this.requireDB().getAllFromIndex('dailyStats', 'by-user', userId);
    const allCompletedLessons = await this.requireDB().getAllFromIndex('completedLessons', 'by-user', userId);
    const allTaskIntros = await this.requireDB().getAllFromIndex('taskIntroSeen', 'by-user', userId);

    // Collect in-progress lesson drafts from localStorage
    const DRAFT_PREFIX = `englishpro:lesson-flow-draft:${userId}:`;
    const lessonDrafts: Array<{ key: string; data: unknown }> = [];
    if (typeof localStorage !== 'undefined') {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(DRAFT_PREFIX)) {
          try {
            lessonDrafts.push({ key: k, data: JSON.parse(localStorage.getItem(k)!) });
          } catch { /* skip malformed */ }
        }
      }
    }
    
    const exportData = {
      user,
      vocabularyProgress: vocabProgress,
      dailyStats: allDailyStats,
      completedLessons: allCompletedLessons,
      taskIntroSeen: allTaskIntros,
      lessonDrafts,
      exportedAt: new Date().toISOString(),
      version: '1.0',
    };

    return JSON.stringify(exportData, null, 2);
  }

  async importUserData(jsonData: string): Promise<User> {
    await this.init();
    const data = JSON.parse(jsonData);

    if (this.unavailable) throw new Error('IndexedDB no está disponible — no se puede importar.');

    // Restore with the original user ID and name — no new UUID, no "(imported)" suffix.
    // put() overwrites any existing record with the same key, so re-importing is idempotent.
    const restoredUser: User = { ...data.user };
    const userId = restoredUser.id;
    await this.requireDB().put('users', restoredUser);

    // Since userId is unchanged, composite keys are identical to the original —
    // put() will overwrite existing records with the same key cleanly.
    const importedVocab: any[] = Array.isArray(data.vocabularyProgress) ? data.vocabularyProgress : [];
    for (const vp of importedVocab) {
      const baseWordId = vp.baseWordId ?? (typeof vp.wordId === 'string' ? vp.wordId.split('_').slice(1).join('_') : vp.wordId);
      await this.requireDB().put('vocabularyProgress', {
        ...vp,
        wordId: `${userId}_${baseWordId}`,
        userId,
        baseWordId,
      });
    }

    const importedDaily: any[] = Array.isArray(data.dailyStats) ? data.dailyStats : [];
    for (const ds of importedDaily) {
      if (!ds.date) continue;
      await this.requireDB().put('dailyStats', {
        ...ds,
        odId: `${userId}_${ds.date}`,
        odUserId: userId,
      });
    }

    const importedLessons: any[] = Array.isArray(data.completedLessons) ? data.completedLessons : [];
    for (const cl of importedLessons) {
      const odId = `${userId}_${cl.levelId}_${cl.taskId}_${cl.completedAt || crypto.randomUUID()}`;
      await this.requireDB().put('completedLessons', {
        ...cl,
        odId,
        odUserId: userId,
      });
    }

    const importedIntros: any[] = Array.isArray(data.taskIntroSeen) ? data.taskIntroSeen : [];
    for (const ti of importedIntros) {
      if (ti.levelId == null || ti.taskId == null) continue;
      await this.requireDB().put('taskIntroSeen', {
        ...ti,
        odId: `${userId}_${ti.levelId}_${ti.taskId}`,
        odUserId: userId,
      });
    }

    // Restore in-progress lesson drafts — keys already contain the original userId,
    // so they can be written directly without re-keying.
    const importedDrafts: any[] = Array.isArray(data.lessonDrafts) ? data.lessonDrafts : [];
    if (typeof localStorage !== 'undefined') {
      for (const { key, data: draftData } of importedDrafts) {
        if (typeof key !== 'string' || !draftData) continue;
        try {
          localStorage.setItem(key, JSON.stringify(draftData));
        } catch { /* ignore quota */ }
      }
    }

    return restoredUser;
  }

  // Clear all data
  async clearAllData(): Promise<void> {
    await this.init();
    if (this.unavailable) return;
    const db = this.requireDB();
    await db.clear('users');
    await db.clear('vocabularyProgress');
    await db.clear('completedLessons');
    await db.clear('dailyStats');
    await db.clear('taskIntroSeen');
  }
}

export const db = new DatabaseService();
export default db;
