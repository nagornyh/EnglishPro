import db from './database';

// ─── Weights ─────────────────────────────────────────────────────────────────

/** XP multiplier per skill (reflects real-world difficulty) */
const SKILL_WEIGHTS: Record<string, number> = {
  speaking:      1.2,
  listening:     1.0,
  reading:       0.8,
  writing:       1.1,
  grammar:       0.9,
  pronunciation: 1.0,
  vocabulary:    0.8,
};

/**
 * Maps each activityId (from ActivitySessionResult) to a skill breakdown.
 * Values are proportional weights representing each skill's contribution.
 */
const ACTIVITY_TO_SKILL: Record<string, Partial<Record<string, number>>> = {
  flashcards:          { vocabulary: 0.70, reading:       0.30 },
  quiz:                { vocabulary: 0.55, grammar:       0.30, reading:  0.15 },
  match:               { vocabulary: 0.80, reading:       0.20 },
  fill:                { grammar:    0.60, vocabulary:    0.25, writing:  0.15 },
  scramble:            { vocabulary: 0.65, writing:       0.35 },
  sentence:            { grammar:    0.50, writing:       0.35, vocabulary: 0.15 },
  translation:         { vocabulary: 0.35, reading:       0.30, writing:  0.35 },
  listening:           { listening:  0.80, vocabulary:    0.20 },
  hangman:             { vocabulary: 0.75, reading:       0.25 },
  'error-correction':  { grammar:    0.70, vocabulary:    0.30 },
  transformation:      { grammar:    0.75, writing:       0.25 },
  writing:             { writing:    0.65, grammar:       0.35 },
  speaking:            { speaking:   0.65, pronunciation: 0.35 },
  dialogue:            { speaking:   0.45, listening:     0.30, vocabulary: 0.25 },
};

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SkillMetrics {
  id: string;
  name: string;
  totalXP: number;
  activitiesCompleted: number;
  correctAnswers: number;
  totalAnswers: number;
  accuracy: number;
  progress: number;   // 0-100 within current skill level
  level: number;      // 1-10
  lastPracticed: string | null;
}

/** Shape stored in localStorage per user */
interface StoredSkillData {
  xp: number;
  activitiesCompleted: number;
  correctAnswers: number;
  totalAnswers: number;
  lastPracticed: string | null;
}
type SkillStore = Record<string, StoredSkillData>;

// ─── Constants ────────────────────────────────────────────────────────────────

const XP_PER_LEVEL = 500;
const MAX_SKILL_LEVEL = 10;
const SKILL_IDS = ['speaking', 'listening', 'reading', 'writing', 'grammar', 'pronunciation', 'vocabulary'];
const SKILL_NAMES: Record<string, string> = {
  speaking:      'Speaking',
  listening:     'Listening',
  reading:       'Reading',
  writing:       'Writing',
  grammar:       'Grammar',
  pronunciation: 'Pronunciation',
  vocabulary:    'Vocabulary',
};

// ─── localStorage helpers ─────────────────────────────────────────────────────

function getSkillStoreKey(userId: string) {
  return `skill_data_${userId}`;
}

function loadSkillStore(userId: string): SkillStore {
  try {
    const raw = localStorage.getItem(getSkillStoreKey(userId));
    if (!raw) return buildEmptySkillStore();
    return JSON.parse(raw) as SkillStore;
  } catch {
    return buildEmptySkillStore();
  }
}

function saveSkillStore(userId: string, store: SkillStore): void {
  try {
    localStorage.setItem(getSkillStoreKey(userId), JSON.stringify(store));
  } catch (e) {
    console.warn('[skillMetrics] Could not save to localStorage:', e);
  }
}

function buildEmptySkillStore(): SkillStore {
  return Object.fromEntries(
    SKILL_IDS.map(id => [id, { xp: 0, activitiesCompleted: 0, correctAnswers: 0, totalAnswers: 0, lastPracticed: null }])
  );
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Records XP and accuracy for a completed activity, distributing the
 * contribution to the appropriate skills based on activity type.
 * Call this whenever an ActivitySessionResult is handled.
 */
export function recordActivityForSkills(
  userId: string,
  activityId: string,
  xpEarned: number,
  correct: number,
  total: number,
): void {
  if (!userId || xpEarned < 0) return;

  const store = loadSkillStore(userId);
  const now = new Date().toISOString();

  // Distribution for this activity (fallback: even split)
  const distribution = ACTIVITY_TO_SKILL[activityId] ?? buildEvenDistribution();
  const totalWeight = Object.values(distribution).reduce<number>((s, w) => s + (w ?? 0), 0);

  for (const [skillId, weight] of Object.entries(distribution)) {
    if (!store[skillId]) {
      store[skillId] = { xp: 0, activitiesCompleted: 0, correctAnswers: 0, totalAnswers: 0, lastPracticed: null };
    }
    const share = (weight ?? 0) / totalWeight;
    const skill = store[skillId]!;
    skill.xp += (xpEarned * share) * (SKILL_WEIGHTS[skillId] ?? 1.0);
    skill.activitiesCompleted += share;
    skill.correctAnswers += correct * share;
    skill.totalAnswers += total * share;
    skill.lastPracticed = now;
  }

  saveSkillStore(userId, store);
}

/**
 * Returns per-skill metrics for the given user.
 * Reads from localStorage (precise, activity-type-aware) and augments with
 * vocabulary mastery data from IndexedDB.
 */
export async function getSkillMetrics(userId: string): Promise<SkillMetrics[]> {
  const [user, store] = await Promise.all([
    db.getUser(userId),
    Promise.resolve(loadSkillStore(userId)),
  ]);

  if (user) {
    const vocabProgress = user.progress.vocabularyProgress ?? [];
    const masteredWords = vocabProgress.filter(v => v.masteryLevel >= 3).length;

    if (masteredWords > 0) {
      const vocabBoost = masteredWords * 10 * SKILL_WEIGHTS.vocabulary;
      const readingBoost = masteredWords * 5 * SKILL_WEIGHTS.reading;

      store.vocabulary.xp = Math.max(store.vocabulary.xp, vocabBoost);
      store.vocabulary.activitiesCompleted = Math.max(
        store.vocabulary.activitiesCompleted, vocabProgress.length,
      );
      store.vocabulary.correctAnswers = Math.max(
        store.vocabulary.correctAnswers,
        vocabProgress.reduce((s, v) => s + v.correctCount, 0),
      );
      store.vocabulary.totalAnswers = Math.max(
        store.vocabulary.totalAnswers,
        vocabProgress.reduce((s, v) => s + v.correctCount + v.incorrectCount, 0),
      );
      store.reading.xp = Math.max(store.reading.xp, readingBoost);
    }

    // First-run seed: if no tracked activity XP yet, seed from completedLessons
    const hasAnyXP = Object.values(store).some(s => s.xp > 0);
    if (!hasAnyXP && user.progress.completedLessons.length > 0) {
      _seedFromCompletedLessons(user.progress.completedLessons, store);
      saveSkillStore(userId, store);
    }
  }

  return SKILL_IDS.map(id => {
    const data = store[id] ?? { xp: 0, activitiesCompleted: 0, correctAnswers: 0, totalAnswers: 0, lastPracticed: null };
    const totalXP = Math.round(data.xp);
    const level = Math.min(Math.floor(totalXP / XP_PER_LEVEL) + 1, MAX_SKILL_LEVEL);
    const xpInLevel = totalXP % XP_PER_LEVEL;
    const progress = level >= MAX_SKILL_LEVEL ? 100 : Math.round((xpInLevel / XP_PER_LEVEL) * 100);
    const totalAnswers = Math.round(data.totalAnswers);
    const correctAnswers = Math.round(data.correctAnswers);
    const accuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;

    return {
      id,
      name: SKILL_NAMES[id] ?? id,
      totalXP,
      activitiesCompleted: Math.round(data.activitiesCompleted),
      correctAnswers,
      totalAnswers,
      accuracy,
      progress,
      level,
      lastPracticed: data.lastPracticed,
    };
  });
}

/** Clears cached skill data for a user (call on account reset/delete) */
export function clearSkillStore(userId: string): void {
  try {
    localStorage.removeItem(getSkillStoreKey(userId));
  } catch {
    // ignore
  }
}

// ─── Private helpers ─────────────────────────────────────────────────────────

/** Fallback seeding for users with historical data before this system existed */
function _seedFromCompletedLessons(
  completedLessons: { xpEarned: number; accuracy: number; completedAt: string }[],
  store: SkillStore,
): void {
  const skillCount = SKILL_IDS.length;
  for (const lesson of completedLessons) {
    const xpPerSkill = lesson.xpEarned / skillCount;
    const estimatedAnswers = 10;
    for (const id of SKILL_IDS) {
      const skill = store[id];
      skill.xp += xpPerSkill * (SKILL_WEIGHTS[id] ?? 1.0);
      skill.activitiesCompleted += 1 / skillCount;
      skill.totalAnswers += estimatedAnswers / skillCount;
      skill.correctAnswers += (lesson.accuracy / 100) * estimatedAnswers / skillCount;
      if (!skill.lastPracticed || lesson.completedAt > skill.lastPracticed) {
        skill.lastPracticed = lesson.completedAt;
      }
    }
  }
}

function buildEvenDistribution(): Partial<Record<string, number>> {
  return Object.fromEntries(SKILL_IDS.map(id => [id, 1 / SKILL_IDS.length]));
}

// ─── Proficiency calculation ─────────────────────────────────────────────────

/** Calculate an overall CEFR-mapped proficiency from all skill metrics */
export function calculateOverallProficiency(skills: SkillMetrics[]): {
  level: string;
  description: string;
  numericLevel: number;
} {
  if (skills.length === 0) {
    return { level: 'A0', description: 'Principiante absoluto', numericLevel: 0 };
  }

  const avgLevel    = skills.reduce((sum, s) => sum + s.level, 0) / skills.length;
  const avgAccuracy = skills.reduce((sum, s) => sum + s.accuracy, 0) / skills.length;

  if (avgLevel >= 9 && avgAccuracy >= 85) return { level: 'C2', description: 'Maestría',         numericLevel: 6 };
  if (avgLevel >= 7 && avgAccuracy >= 80) return { level: 'C1', description: 'Avanzado',          numericLevel: 5 };
  if (avgLevel >= 5 && avgAccuracy >= 70) return { level: 'B2', description: 'Intermedio alto',   numericLevel: 4 };
  if (avgLevel >= 4 && avgAccuracy >= 60) return { level: 'B1', description: 'Intermedio',        numericLevel: 3 };
  if (avgLevel >= 2 && avgAccuracy >= 50) return { level: 'A2', description: 'Elemental',         numericLevel: 2 };
  if (avgLevel >= 1)                      return { level: 'A1', description: 'Principiante',      numericLevel: 1 };
  return { level: 'A0', description: 'Principiante absoluto', numericLevel: 0 };
}

/**
 * Returns SRS review intervals (in days) tuned for CEFR level.
 * Beginners need more frequent repetition; advanced learners retain longer.
 */
export function getLevelAwareSRSIntervals(cefrLevel?: string): [number, number, number, number, number, number] {
  switch (cefrLevel) {
    case 'A1': return [1, 2,  5,  10, 21,  60];
    case 'A2': return [1, 3,  6,  12, 25,  70];
    case 'B1': return [1, 3,  7,  14, 30,  90]; // default
    case 'B2': return [1, 4,  9,  18, 40, 100];
    case 'C1': return [2, 5, 12,  25, 60, 120];
    case 'C2': return [3, 7, 14,  30, 90, 180];
    default:   return [1, 3,  7,  14, 30,  90];
  }
}

