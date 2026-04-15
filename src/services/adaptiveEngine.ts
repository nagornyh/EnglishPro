/**
 * Adaptive Difficulty Engine
 * Calculates optimal difficulty per skill using a sliding window of recent attempts.
 * Feeds into exercise selection, scaffolding levels, and study recommendations.
 *
 * Fully offline — stores state in localStorage keyed by userId.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AttemptRecord {
  skill: string;
  correct: boolean;
  timestamp: number;
  responseTimeMs?: number;
  activityType?: string;
}

export interface SkillDifficulty {
  skill: string;
  level: 1 | 2 | 3 | 4 | 5;
  accuracy: number;       // 0-100, from sliding window
  trend: 'improving' | 'stable' | 'declining';
  totalAttempts: number;
  windowSize: number;
  lastPracticed: number | null;
  /** Days since last practice; null if never practiced */
  daysSinceLastPractice: number | null;
}

export interface DifficultySnapshot {
  userId: string;
  skills: SkillDifficulty[];
  overallLevel: number;  // weighted average 1-5
  weakestSkill: string | null;
  strongestSkill: string | null;
  recommendedFocus: string[];
  updatedAt: number;
}

export interface WordOfTheDay {
  word: string;
  translation: string;
  example: string;
  phonetic?: string;
  level: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const WINDOW_SIZE = 20;
const SKILL_IDS = ['speaking', 'listening', 'reading', 'writing', 'grammar', 'pronunciation', 'vocabulary'];

/** Accuracy thresholds for difficulty transitions */
const THRESHOLDS = {
  DOWN: 55,   // below this → decrease difficulty
  UP: 85,     // above this → increase difficulty
  STABLE_LOW: 55,
  STABLE_HIGH: 85,
};

/** Decay: effective level drops by 1 after this many days without practice */
const DECAY_DAYS = 14;

const STORAGE_KEY_PREFIX = 'adaptive_engine_';

// ─── Engine ───────────────────────────────────────────────────────────────────

class AdaptiveEngine {
  private attempts: Map<string, AttemptRecord[]> = new Map(); // userId -> records
  private difficulties: Map<string, Record<string, SkillDifficulty>> = new Map();

  // ── Persistence ──────────────────────────────────────────────────────────

  private getKey(userId: string): string {
    return `${STORAGE_KEY_PREFIX}${userId}`;
  }

  private load(userId: string): void {
    if (this.attempts.has(userId)) return;
    try {
      const raw = localStorage.getItem(this.getKey(userId));
      if (raw) {
        const data = JSON.parse(raw);
        this.attempts.set(userId, data.attempts ?? []);
        this.difficulties.set(userId, data.difficulties ?? {});
      } else {
        this.attempts.set(userId, []);
        this.difficulties.set(userId, {});
      }
    } catch {
      this.attempts.set(userId, []);
      this.difficulties.set(userId, {});
    }
  }

  private save(userId: string): void {
    const data = {
      attempts: this.attempts.get(userId) ?? [],
      difficulties: this.difficulties.get(userId) ?? {},
    };
    localStorage.setItem(this.getKey(userId), JSON.stringify(data));
  }

  // ── Core API ────────────────────────────────────────────────────────────

  /**
   * Record an attempt and recalculate difficulty for the affected skill.
   */
  recordAttempt(userId: string, attempt: Omit<AttemptRecord, 'timestamp'>): SkillDifficulty {
    this.load(userId);

    const record: AttemptRecord = { ...attempt, timestamp: Date.now() };
    const attempts = this.attempts.get(userId)!;
    attempts.push(record);

    // Keep only last 500 records total to bound storage
    if (attempts.length > 500) {
      this.attempts.set(userId, attempts.slice(-500));
    }

    const difficulty = this.recalculate(userId, attempt.skill);
    this.save(userId);
    return difficulty;
  }

  /**
   * Record multiple attempts at once (e.g., after completing an activity).
   */
  recordBatch(userId: string, results: Array<{ skill: string; correct: boolean; responseTimeMs?: number; activityType?: string }>): void {
    this.load(userId);
    const attempts = this.attempts.get(userId)!;
    const now = Date.now();
    const affectedSkills = new Set<string>();

    for (const r of results) {
      attempts.push({ ...r, timestamp: now });
      affectedSkills.add(r.skill);
    }

    if (attempts.length > 500) {
      this.attempts.set(userId, attempts.slice(-500));
    }

    for (const skill of affectedSkills) {
      this.recalculate(userId, skill);
    }
    this.save(userId);
  }

  /**
   * Get the current difficulty snapshot for a user.
   */
  getSnapshot(userId: string): DifficultySnapshot {
    this.load(userId);
    const diffs = this.difficulties.get(userId) ?? {};
    const now = Date.now();

    const skills: SkillDifficulty[] = SKILL_IDS.map(skill => {
      if (diffs[skill]) {
        return this.applyDecay({ ...diffs[skill] }, now);
      }
      return {
        skill,
        level: 1 as const,
        accuracy: 0,
        trend: 'stable' as const,
        totalAttempts: 0,
        windowSize: 0,
        lastPracticed: null,
        daysSinceLastPractice: null,
      };
    });

    const practiced = skills.filter(s => s.totalAttempts > 0);
    const overallLevel = practiced.length > 0
      ? Math.round(practiced.reduce((sum, s) => sum + s.level, 0) / practiced.length * 10) / 10
      : 1;

    const weakest = practiced.length > 0
      ? practiced.reduce((a, b) => a.accuracy < b.accuracy ? a : b).skill
      : null;

    const strongest = practiced.length > 0
      ? practiced.reduce((a, b) => a.accuracy > b.accuracy ? a : b).skill
      : null;

    // Recommend focus: weak skills + skills not practiced in 7+ days
    const recommendedFocus = skills
      .filter(s =>
        (s.totalAttempts > 0 && s.accuracy < 65) ||
        (s.daysSinceLastPractice !== null && s.daysSinceLastPractice > 7)
      )
      .sort((a, b) => (a.accuracy || 0) - (b.accuracy || 0))
      .slice(0, 3)
      .map(s => s.skill);

    return {
      userId,
      skills,
      overallLevel,
      weakestSkill: weakest,
      strongestSkill: strongest,
      recommendedFocus,
      updatedAt: now,
    };
  }

  /**
   * Get difficulty level for a specific skill (convenience method).
   */
  getSkillLevel(userId: string, skill: string): number {
    this.load(userId);
    const diffs = this.difficulties.get(userId) ?? {};
    if (diffs[skill]) {
      const decayed = this.applyDecay({ ...diffs[skill] }, Date.now());
      return decayed.level;
    }
    return 1;
  }

  /**
   * Get recommended scaffold level (0-4) based on adaptive difficulty.
   * Maps difficulty 1-5 inversely to scaffold 4-0 (high difficulty → less scaffolding).
   */
  getScaffoldLevel(userId: string, skill: string): number {
    const diffLevel = this.getSkillLevel(userId, skill);
    // difficulty 1 → scaffold 4 (max help)
    // difficulty 5 → scaffold 0 (no help)
    return Math.max(0, Math.min(4, 5 - diffLevel));
  }

  /**
   * Generate a "Word of the Day" based on user's current level.
   * Uses a deterministic daily seed so the same word shows all day.
   */
  getWordOfTheDay(userId: string, vocabulary: Array<{ word: string; translation: string; example: string; phonetic?: string; level: string }>): WordOfTheDay | null {
    if (vocabulary.length === 0) return null;

    // Check if already shown today
    const todayKey = `wotd_${userId}_${new Date().toISOString().split('T')[0]}`;
    const cached = localStorage.getItem(todayKey);
    if (cached) {
      try { return JSON.parse(cached); } catch { /* fallthrough */ }
    }

    // Deterministic daily index
    const daysSinceEpoch = Math.floor(Date.now() / 86400000);
    const index = daysSinceEpoch % vocabulary.length;
    const word = vocabulary[index];

    localStorage.setItem(todayKey, JSON.stringify(word));
    return word;
  }

  /**
   * Generate a mini-review quiz from recent weak areas.
   * Returns question specs that can be fed to activity components.
   */
  getMiniReviewTopics(userId: string, count: number = 10): string[] {
    this.load(userId);
    const diffs = this.difficulties.get(userId) ?? {};

    return Object.values(diffs)
      .filter(d => d.accuracy < 70 && d.totalAttempts >= 3)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, count)
      .map(d => d.skill);
  }

  /**
   * Reset all data for a user.
   */
  reset(userId: string): void {
    this.attempts.delete(userId);
    this.difficulties.delete(userId);
    localStorage.removeItem(this.getKey(userId));
  }

  // ── Internal ────────────────────────────────────────────────────────────

  private recalculate(userId: string, skill: string): SkillDifficulty {
    const allAttempts = this.attempts.get(userId) ?? [];
    const skillAttempts = allAttempts.filter(a => a.skill === skill);
    const window = skillAttempts.slice(-WINDOW_SIZE);

    const totalAttempts = skillAttempts.length;
    const windowCorrect = window.filter(a => a.correct).length;
    const accuracy = window.length > 0 ? Math.round((windowCorrect / window.length) * 100) : 0;

    // Determine trend from two halves of window
    let trend: 'improving' | 'stable' | 'declining' = 'stable';
    if (window.length >= 6) {
      const mid = Math.floor(window.length / 2);
      const firstHalf = window.slice(0, mid);
      const secondHalf = window.slice(mid);
      const firstAcc = firstHalf.filter(a => a.correct).length / firstHalf.length;
      const secondAcc = secondHalf.filter(a => a.correct).length / secondHalf.length;
      const diff = secondAcc - firstAcc;
      if (diff > 0.1) trend = 'improving';
      else if (diff < -0.1) trend = 'declining';
    }

    // Current level
    const diffs = this.difficulties.get(userId) ?? {};
    const prev = diffs[skill];
    let level: 1 | 2 | 3 | 4 | 5 = prev?.level ?? 1;

    // Adjust level based on accuracy thresholds
    if (window.length >= 5) {
      if (accuracy < THRESHOLDS.DOWN && level > 1) {
        level = (level - 1) as 1 | 2 | 3 | 4 | 5;
      } else if (accuracy > THRESHOLDS.UP && level < 5) {
        level = (level + 1) as 1 | 2 | 3 | 4 | 5;
      }
    }

    const lastPracticed = window.length > 0 ? window[window.length - 1].timestamp : prev?.lastPracticed ?? null;
    const daysSinceLastPractice = lastPracticed
      ? Math.floor((Date.now() - lastPracticed) / 86400000)
      : null;

    const difficulty: SkillDifficulty = {
      skill,
      level,
      accuracy,
      trend,
      totalAttempts,
      windowSize: window.length,
      lastPracticed,
      daysSinceLastPractice,
    };

    diffs[skill] = difficulty;
    this.difficulties.set(userId, diffs);
    return difficulty;
  }

  private applyDecay(difficulty: SkillDifficulty, now: number): SkillDifficulty {
    if (!difficulty.lastPracticed) return difficulty;

    const daysSince = Math.floor((now - difficulty.lastPracticed) / 86400000);
    difficulty.daysSinceLastPractice = daysSince;

    if (daysSince >= DECAY_DAYS) {
      const decaySteps = Math.floor(daysSince / DECAY_DAYS);
      const decayed = Math.max(1, difficulty.level - decaySteps);
      difficulty.level = decayed as 1 | 2 | 3 | 4 | 5;
    }

    return difficulty;
  }
}

const adaptiveEngine = new AdaptiveEngine();
export default adaptiveEngine;
