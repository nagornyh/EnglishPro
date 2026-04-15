// Notebook Service - Personal notes and vocabulary lists using IndexedDB
// Allows users to create custom study materials

import { openDB } from 'idb';
import type { DBSchema, IDBPDatabase } from 'idb';

// Types
export interface NotebookEntry {
  id: string;
  userId: string;
  type: 'note' | 'vocabulary' | 'sentence' | 'rule';
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
  reviewCount: number;
  lastReviewed?: string;
}

export interface VocabList {
  id: string;
  userId: string;
  name: string;
  description: string;
  words: CustomWord[];
  createdAt: string;
  updatedAt: string;
  isPublic: boolean;
  color: string;
}

export interface CustomWord {
  id: string;
  word: string;
  translation: string;
  example?: string;
  notes?: string;
  mastered: boolean;
  addedAt: string;
}

export interface StudySession {
  id: string;
  userId: string;
  date: string;
  duration: number; // minutes
  activitiesCompleted: string[];
  wordsReviewed: number;
  accuracy: number;
  notes?: string;
}

// Database Schema
interface NotebookDB extends DBSchema {
  entries: {
    key: string;
    value: NotebookEntry;
    indexes: { 'by-user': string; 'by-type': string; 'by-date': string };
  };
  vocabLists: {
    key: string;
    value: VocabList;
    indexes: { 'by-user': string };
  };
  studySessions: {
    key: string;
    value: StudySession;
    indexes: { 'by-user': string; 'by-date': string };
  };
}

const DB_NAME = 'NotebookDB';
const DB_VERSION = 1;

class NotebookService {
  private db: IDBPDatabase<NotebookDB> | null = null;

  async init(): Promise<void> {
    if (this.db) return;

    this.db = await openDB<NotebookDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        // Entries store
        if (!db.objectStoreNames.contains('entries')) {
          const entriesStore = db.createObjectStore('entries', { keyPath: 'id' });
          entriesStore.createIndex('by-user', 'userId');
          entriesStore.createIndex('by-type', 'type');
          entriesStore.createIndex('by-date', 'createdAt');
        }

        // Vocab lists store
        if (!db.objectStoreNames.contains('vocabLists')) {
          const listsStore = db.createObjectStore('vocabLists', { keyPath: 'id' });
          listsStore.createIndex('by-user', 'userId');
        }

        // Study sessions store
        if (!db.objectStoreNames.contains('studySessions')) {
          const sessionsStore = db.createObjectStore('studySessions', { keyPath: 'id' });
          sessionsStore.createIndex('by-user', 'userId');
          sessionsStore.createIndex('by-date', 'date');
        }
      },
    });
  }

  /** Close the database connection. Used by tests to avoid InvalidStateError. */
  close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  // ==================== NOTEBOOK ENTRIES ====================

  async createEntry(
    userId: string,
    type: NotebookEntry['type'],
    title: string,
    content: string,
    tags: string[] = []
  ): Promise<NotebookEntry> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const entry: NotebookEntry = {
      id: this.generateId(),
      userId,
      type,
      title,
      content,
      tags,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isFavorite: false,
      reviewCount: 0,
    };

    await this.db.put('entries', entry);
    return entry;
  }

  async updateEntry(id: string, updates: Partial<NotebookEntry>): Promise<NotebookEntry | null> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const entry = await this.db.get('entries', id);
    if (!entry) return null;

    const updated = {
      ...entry,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    await this.db.put('entries', updated);
    return updated;
  }

  async deleteEntry(id: string): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');
    await this.db.delete('entries', id);
  }

  async getEntriesByUser(userId: string): Promise<NotebookEntry[]> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');
    return this.db.getAllFromIndex('entries', 'by-user', userId);
  }

  async getEntriesByType(userId: string, type: NotebookEntry['type']): Promise<NotebookEntry[]> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');
    const all = await this.db.getAllFromIndex('entries', 'by-user', userId);
    return all.filter(e => e.type === type);
  }

  async getFavoriteEntries(userId: string): Promise<NotebookEntry[]> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');
    const all = await this.db.getAllFromIndex('entries', 'by-user', userId);
    return all.filter(e => e.isFavorite);
  }

  async toggleFavorite(id: string): Promise<NotebookEntry | null> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const entry = await this.db.get('entries', id);
    if (!entry) return null;

    entry.isFavorite = !entry.isFavorite;
    entry.updatedAt = new Date().toISOString();
    await this.db.put('entries', entry);
    return entry;
  }

  async incrementReviewCount(id: string): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const entry = await this.db.get('entries', id);
    if (entry) {
      entry.reviewCount++;
      entry.lastReviewed = new Date().toISOString();
      await this.db.put('entries', entry);
    }
  }

  async searchEntries(userId: string, query: string): Promise<NotebookEntry[]> {
    const entries = await this.getEntriesByUser(userId);
    const lowerQuery = query.toLowerCase();
    return entries.filter(
      e =>
        e.title.toLowerCase().includes(lowerQuery) ||
        e.content.toLowerCase().includes(lowerQuery) ||
        e.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
  }

  // ==================== VOCABULARY LISTS ====================

  async createVocabList(
    userId: string,
    name: string,
    description: string = '',
    color: string = '#6366f1'
  ): Promise<VocabList> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const list: VocabList = {
      id: this.generateId(),
      userId,
      name,
      description,
      words: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isPublic: false,
      color,
    };

    await this.db.put('vocabLists', list);
    return list;
  }

  async getVocabListsByUser(userId: string): Promise<VocabList[]> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');
    return this.db.getAllFromIndex('vocabLists', 'by-user', userId);
  }

  async getVocabList(id: string): Promise<VocabList | undefined> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');
    return this.db.get('vocabLists', id);
  }

  async updateVocabList(id: string, updates: Partial<VocabList>): Promise<VocabList | null> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const list = await this.db.get('vocabLists', id);
    if (!list) return null;

    const updated = {
      ...list,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    await this.db.put('vocabLists', updated);
    return updated;
  }

  async deleteVocabList(id: string): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');
    await this.db.delete('vocabLists', id);
  }

  async addWordToList(listId: string, word: Omit<CustomWord, 'id' | 'addedAt' | 'mastered'>): Promise<VocabList | null> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const list = await this.db.get('vocabLists', listId);
    if (!list) return null;

    const newWord: CustomWord = {
      ...word,
      id: this.generateId(),
      addedAt: new Date().toISOString(),
      mastered: false,
    };

    list.words.push(newWord);
    list.updatedAt = new Date().toISOString();
    await this.db.put('vocabLists', list);
    return list;
  }

  async removeWordFromList(listId: string, wordId: string): Promise<VocabList | null> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const list = await this.db.get('vocabLists', listId);
    if (!list) return null;

    list.words = list.words.filter(w => w.id !== wordId);
    list.updatedAt = new Date().toISOString();
    await this.db.put('vocabLists', list);
    return list;
  }

  async toggleWordMastered(listId: string, wordId: string): Promise<VocabList | null> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const list = await this.db.get('vocabLists', listId);
    if (!list) return null;

    const word = list.words.find(w => w.id === wordId);
    if (word) {
      word.mastered = !word.mastered;
      list.updatedAt = new Date().toISOString();
      await this.db.put('vocabLists', list);
    }
    return list;
  }

  // ==================== STUDY SESSIONS ====================

  async recordStudySession(
    userId: string,
    duration: number,
    activitiesCompleted: string[],
    wordsReviewed: number,
    accuracy: number,
    notes?: string
  ): Promise<StudySession> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const session: StudySession = {
      id: this.generateId(),
      userId,
      date: new Date().toISOString(),
      duration,
      activitiesCompleted,
      wordsReviewed,
      accuracy,
      notes,
    };

    await this.db.put('studySessions', session);
    return session;
  }

  async getStudySessionsByUser(userId: string): Promise<StudySession[]> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');
    return this.db.getAllFromIndex('studySessions', 'by-user', userId);
  }

  async getStudySessionsForDateRange(
    userId: string,
    startDate: Date,
    endDate: Date
  ): Promise<StudySession[]> {
    const sessions = await this.getStudySessionsByUser(userId);
    return sessions.filter(s => {
      const date = new Date(s.date);
      return date >= startDate && date <= endDate;
    });
  }

  async getStudyStats(userId: string): Promise<{
    totalSessions: number;
    totalMinutes: number;
    totalWordsReviewed: number;
    averageAccuracy: number;
    thisWeekMinutes: number;
    thisMonthMinutes: number;
  }> {
    const sessions = await this.getStudySessionsByUser(userId);
    
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const totalMinutes = sessions.reduce((sum, s) => sum + s.duration, 0);
    const totalWordsReviewed = sessions.reduce((sum, s) => sum + s.wordsReviewed, 0);
    const avgAccuracy = sessions.length > 0
      ? sessions.reduce((sum, s) => sum + s.accuracy, 0) / sessions.length
      : 0;

    const thisWeekMinutes = sessions
      .filter(s => new Date(s.date) >= weekAgo)
      .reduce((sum, s) => sum + s.duration, 0);

    const thisMonthMinutes = sessions
      .filter(s => new Date(s.date) >= monthAgo)
      .reduce((sum, s) => sum + s.duration, 0);

    return {
      totalSessions: sessions.length,
      totalMinutes,
      totalWordsReviewed,
      averageAccuracy: Math.round(avgAccuracy),
      thisWeekMinutes,
      thisMonthMinutes,
    };
  }

  // ==================== EXPORT/IMPORT ====================

  async exportAllData(userId: string): Promise<{
    entries: NotebookEntry[];
    vocabLists: VocabList[];
    studySessions: StudySession[];
    exportedAt: string;
  }> {
    const entries = await this.getEntriesByUser(userId);
    const vocabLists = await this.getVocabListsByUser(userId);
    const studySessions = await this.getStudySessionsByUser(userId);

    return {
      entries,
      vocabLists,
      studySessions,
      exportedAt: new Date().toISOString(),
    };
  }

  async importData(
    userId: string,
    data: {
      entries?: NotebookEntry[];
      vocabLists?: VocabList[];
      studySessions?: StudySession[];
    }
  ): Promise<{ entriesImported: number; listsImported: number; sessionsImported: number }> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    let entriesImported = 0;
    let listsImported = 0;
    let sessionsImported = 0;

    // Import entries
    if (data.entries) {
      for (const entry of data.entries) {
        const newEntry = { ...entry, id: this.generateId(), userId };
        await this.db.put('entries', newEntry);
        entriesImported++;
      }
    }

    // Import vocab lists
    if (data.vocabLists) {
      for (const list of data.vocabLists) {
        const newList = { ...list, id: this.generateId(), userId };
        await this.db.put('vocabLists', newList);
        listsImported++;
      }
    }

    // Import study sessions
    if (data.studySessions) {
      for (const session of data.studySessions) {
        const newSession = { ...session, id: this.generateId(), userId };
        await this.db.put('studySessions', newSession);
        sessionsImported++;
      }
    }

    return { entriesImported, listsImported, sessionsImported };
  }
}

export const notebookService = new NotebookService();
export default notebookService;
