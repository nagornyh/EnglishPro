// Spaced Repetition Service - SM-2 Algorithm Implementation
import type { ReviewCard, SRSSettings } from '../types/srs';

const DB_NAME = 'englishapp_srs';
const STORE_NAME = 'review_cards';

class SpacedRepetitionService {
  private db: IDBDatabase | null = null;
  private settings: SRSSettings = {
    newCardsPerDay: 20,
    reviewsPerDay: 100,
    learnSteps: [1, 10],
    graduatingInterval: 1,
    easyInterval: 4,
    lapseNewInterval: 0.5,
  };

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('nextReview', 'nextReview', { unique: false });
          store.createIndex('type', 'type', { unique: false });
          store.createIndex('lessonId', 'lessonId', { unique: false });
        }
      };
    });
  }

  // SM-2 Algorithm Implementation
  calculateNextReview(card: ReviewCard, quality: number): ReviewCard {
    let { easeFactor, interval, repetitions, lapses } = card;
    
    // Quality: 0-5
    // 0 - Complete blackout
    // 1 - Incorrect, but recognized
    // 2 - Correct with serious difficulty
    // 3 - Correct with some difficulty
    // 4 - Correct with little difficulty
    // 5 - Perfect response
    
    if (quality < 3) {
      // Failed - reset repetitions
      repetitions = 0;
      interval = 1;
      lapses++;
    } else {
      // Passed
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions++;
    }
    
    // Adjust ease factor
    easeFactor = Math.max(
      1.3,
      easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );
    
    // Calculate next review date
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);
    
    return {
      ...card,
      easeFactor,
      interval,
      repetitions,
      lapses,
      nextReview: nextReview.toISOString().split('T')[0],
      lastReview: new Date().toISOString().split('T')[0],
      totalReviews: card.totalReviews + 1,
      correctReviews: quality >= 3 ? card.correctReviews + 1 : card.correctReviews,
    };
  }

  // Add a new card to the SRS system
  async addCard(card: Omit<ReviewCard, 'easeFactor' | 'interval' | 'repetitions' | 'nextReview' | 'totalReviews' | 'correctReviews' | 'lapses' | 'createdAt'>): Promise<ReviewCard> {
    await this.ensureDb();
    
    const newCard: ReviewCard = {
      ...card,
      easeFactor: 2.5,
      interval: 0,
      repetitions: 0,
      nextReview: new Date().toISOString().split('T')[0],
      totalReviews: 0,
      correctReviews: 0,
      lapses: 0,
      createdAt: new Date().toISOString(),
    };
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(newCard);
      
      request.onsuccess = () => resolve(newCard);
      request.onerror = () => reject(request.error);
    });
  }

  // Get cards due for review today
  async getDueCards(_userId: string, limit?: number): Promise<ReviewCard[]> {
    await this.ensureDb();
    
    const today = new Date().toISOString().split('T')[0];
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const index = store.index('nextReview');
      const range = IDBKeyRange.upperBound(today);
      const request = index.getAll(range, limit || this.settings.reviewsPerDay);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Get new cards (never reviewed)
  async getNewCards(limit?: number): Promise<ReviewCard[]> {
    await this.ensureDb();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      
      request.onsuccess = () => {
        const newCards = request.result.filter(
          (card: ReviewCard) => card.repetitions === 0
        );
        resolve(newCards.slice(0, limit || this.settings.newCardsPerDay));
      };
      request.onerror = () => reject(request.error);
    });
  }

  // Update card after review
  async updateCard(card: ReviewCard): Promise<void> {
    await this.ensureDb();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(card);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // Review a card with quality rating
  async reviewCard(cardId: string, quality: number): Promise<ReviewCard | null> {
    await this.ensureDb();
    
    const card = await this.getCard(cardId);
    if (!card) return null;
    
    const updatedCard = this.calculateNextReview(card, quality);
    await this.updateCard(updatedCard);
    
    return updatedCard;
  }

  // Get a specific card
  async getCard(cardId: string): Promise<ReviewCard | null> {
    await this.ensureDb();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(cardId);
      
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  // Get all cards
  async getAllCards(): Promise<ReviewCard[]> {
    await this.ensureDb();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Get cards by type
  async getCardsByType(type: ReviewCard['type']): Promise<ReviewCard[]> {
    await this.ensureDb();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const index = store.index('type');
      const request = index.getAll(type);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Get review statistics
  async getStats(): Promise<{
    totalCards: number;
    dueToday: number;
    newCards: number;
    mature: number;
    learning: number;
    averageEase: number;
    retention: number;
  }> {
    const allCards = await this.getAllCards();
    const today = new Date().toISOString().split('T')[0];
    
    const dueToday = allCards.filter(c => c.nextReview <= today).length;
    const newCards = allCards.filter(c => c.repetitions === 0).length;
    const mature = allCards.filter(c => c.interval >= 21).length;
    const learning = allCards.filter(c => c.repetitions > 0 && c.interval < 21).length;
    
    const totalReviews = allCards.reduce((sum, c) => sum + c.totalReviews, 0);
    const correctReviews = allCards.reduce((sum, c) => sum + c.correctReviews, 0);
    const averageEase = allCards.length > 0 
      ? allCards.reduce((sum, c) => sum + c.easeFactor, 0) / allCards.length 
      : 2.5;
    const retention = totalReviews > 0 ? (correctReviews / totalReviews) * 100 : 0;
    
    return {
      totalCards: allCards.length,
      dueToday,
      newCards,
      mature,
      learning,
      averageEase,
      retention,
    };
  }

  // Import vocabulary from lesson data
  async importFromVocabulary(vocabulary: Array<{
    word: string;
    translation: string;
    example?: string;
    lessonId?: string;
  }>): Promise<number> {
    let imported = 0;
    
    for (const item of vocabulary) {
      const existingCards = await this.getAllCards();
      const exists = existingCards.some(c => c.front.text.toLowerCase() === item.word.toLowerCase());
      
      if (!exists) {
        await this.addCard({
          id: `vocab_${item.word.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}`,
          lessonId: item.lessonId,
          type: 'vocabulary',
          front: { text: item.word },
          back: {
            text: item.word,
            translation: item.translation,
            example: item.example,
          },
        });
        imported++;
      }
    }
    
    return imported;
  }

  // Delete a card
  async deleteCard(cardId: string): Promise<void> {
    await this.ensureDb();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(cardId);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // Update settings
  updateSettings(newSettings: Partial<SRSSettings>): void {
    this.settings = { ...this.settings, ...newSettings };
    localStorage.setItem('srs_settings', JSON.stringify(this.settings));
  }

  // Load settings
  loadSettings(): void {
    const saved = localStorage.getItem('srs_settings');
    if (saved) {
      this.settings = { ...this.settings, ...JSON.parse(saved) };
    }
  }

  getSettings(): SRSSettings {
    return { ...this.settings };
  }

  private async ensureDb(): Promise<void> {
    if (!this.db) {
      await this.init();
    }
  }
}

export const srsService = new SpacedRepetitionService();
export default srsService;
