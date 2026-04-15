import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { User } from '../types';
import db from '../services/database';
import { clearSkillStore } from '../services/skillMetrics';

// Force a full-page reload when this module (or any of its dependencies) is
// invalidated by Vite HMR. Without this, the createContext() call below would
// produce a NEW context object while already-mounted components still hold a
// reference to the old one — causing "useUser must be used within a UserProvider".
if (import.meta.hot) {
  import.meta.hot.decline();
}

interface UserContextType {
  user: User | null;
  users: User[];
  isLoading: boolean;
  error: string | null;
  isAdmin: boolean;
  login: (userId: string) => Promise<void>;
  logout: () => void;
  createUser: (name: string) => Promise<User>;
  updateUser: (updates: Partial<User>) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
  refreshUsers: () => Promise<void>;
  addXP: (xp: number) => Promise<void>;
  updateStreak: () => Promise<number>;
  updateWordProgress: (wordId: string, correct: boolean, context?: { levelId?: number; taskId?: number }) => Promise<void>;
  updateBatchWordProgress: (results: { wordId: string; correct: boolean }[], context?: { levelId?: number; taskId?: number }) => Promise<void>;
  updateGrammarMastery: (grammarIds: string[]) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshUsers = useCallback(async () => {
    try {
      const allUsers = await db.getAllUsers();
      setUsers(allUsers);
    } catch (err) {
      setError('Error loading users');
      console.error(err);
    }
  }, []);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await db.init();
        await db.ensureAdminUser();
        await refreshUsers();
        
        // Check for saved session
        const savedUserId = localStorage.getItem('currentUserId');
        if (savedUserId) {
          const savedUser = await db.getUser(savedUserId);
          if (savedUser) {
            setUser(savedUser);
          } else {
            // Clean up stale session — user was deleted from DB
            localStorage.removeItem('currentUserId');
          }
        }
      } catch (err) {
        setError('Error initializing app');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, [refreshUsers]);

  const login = async (userId: string) => {
    setIsLoading(true);
    try {
      const foundUser = await db.getUser(userId);
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('currentUserId', userId);
        await db.updateStreak(userId);
      } else {
        throw new Error('User not found');
      }
    } catch (err) {
      setError('Error logging in');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUserId');
  };

  const createUser = async (name: string): Promise<User> => {
    try {
      // Check if name already exists
      const existingUser = await db.getUserByName(name);
      if (existingUser) {
        throw new Error('A user with this name already exists');
      }

      const newUser = await db.createUser(name);
      await refreshUsers();
      return newUser;
    } catch (err) {
      setError('Error creating user');
      throw err;
    }
  };

  const updateUser = async (updates: Partial<User>) => {
    if (!user) return;

    try {
      const updatedUser = { ...user, ...updates };
      await db.updateUser(updatedUser);
      setUser(updatedUser);
    } catch (err) {
      setError('Error updating user');
      throw err;
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      await db.deleteUser(userId);
      clearSkillStore(userId);
      if (user?.id === userId) {
        logout();
      }
      await refreshUsers();
    } catch (err) {
      setError('Error deleting user');
      throw err;
    }
  };

  const addXP = async (xp: number) => {
    if (!user) return;

    try {
      const newTotalXP = await db.addXP(user.id, xp);
      setUser(prev => prev ? {
        ...prev,
        progress: { ...prev.progress, totalXP: newTotalXP }
      } : null);
      // Dispatch event for save tracking
      window.dispatchEvent(new CustomEvent('xpGained'));
    } catch (err) {
      console.error('Error adding XP:', err);
    }
  };

  const updateStreak = async (): Promise<number> => {
    if (!user) return 0;

    try {
      const newStreak = await db.updateStreak(user.id);
      const updatedUser = await db.getUser(user.id);
      if (updatedUser) {
        setUser(updatedUser);
      }
      // Dispatch event for save tracking
      window.dispatchEvent(new CustomEvent('activityComplete'));
      return newStreak;
    } catch (err) {
      console.error('Error updating streak:', err);
      return 0;
    }
  };

  // Update vocabulary progress for a word
  const updateWordProgress = async (wordId: string, correct: boolean, context?: { levelId?: number; taskId?: number }) => {
    if (!user) return;
    try {
      await db.updateVocabularyProgress(user.id, wordId, correct, context);
    } catch (err) {
      console.error('Error updating word progress:', err);
    }
  };

  // Batch update vocabulary progress for multiple words
  const updateBatchWordProgress = async (
    results: { wordId: string; correct: boolean }[],
    context?: { levelId?: number; taskId?: number }
  ) => {
    if (!user) return;
    try {
      for (const result of results) {
        await db.updateVocabularyProgress(user.id, result.wordId, result.correct, context);
      }
      // Update words learned count — simply add the newly-correct words
      const correctWords = results.filter(r => r.correct).length;
      if (correctWords > 0) {
        const updatedUser = await db.getUser(user.id);
        if (updatedUser) {
          updatedUser.progress.wordsLearned = updatedUser.progress.wordsLearned + correctWords;
          await db.updateUser(updatedUser);
          setUser(updatedUser);
        }
      }
      window.dispatchEvent(new CustomEvent('activityComplete'));
    } catch (err) {
      console.error('Error updating batch word progress:', err);
    }
  };

  // Record grammar theory modules as studied/mastered (TEOR-1/2)
  const updateGrammarMastery = async (grammarIds: string[]) => {
    if (!user) return;
    try {
      const currentMastered: string[] = user.progress.masteredGrammarIds ?? [];
      const newIds = grammarIds.filter(id => !currentMastered.includes(id));
      if (newIds.length === 0) return;
      const updated = { ...user };
      updated.progress = {
        ...updated.progress,
        masteredGrammarIds: [...currentMastered, ...newIds],
      };
      await db.updateUser(updated);
      setUser(updated);
      // Persist to localStorage as lightweight fallback
      localStorage.setItem(`grammarMastery_${user.id}`, JSON.stringify(updated.progress.masteredGrammarIds));
    } catch (err) {
      console.error('Error updating grammar mastery:', err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        isLoading,
        error,
        isAdmin: user?.isAdmin === true,
        login,
        logout,
        createUser,
        updateUser,
        deleteUser,
        refreshUsers,
        addXP,
        updateStreak,
        updateWordProgress,
        updateBatchWordProgress,
        updateGrammarMastery,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export default UserContext;
