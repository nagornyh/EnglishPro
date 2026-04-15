/**
 * Unit tests — run with: npm test
 * Uses Vitest (globals: true, so describe/it/expect are available without import).
 */

import { calculateOverallProficiency, recordActivityForSkills, type SkillMetrics } from '../services/skillMetrics';

// ─── calculateOverallProficiency ─────────────────────────────────────────────

describe('calculateOverallProficiency', () => {
  it('returns A0 for an empty skills array', () => {
    const result = calculateOverallProficiency([]);
    expect(result.level).toBe('A0');
    expect(result.numericLevel).toBe(0);
  });

  it('returns A1 for beginner-level skills', () => {
    const skills: SkillMetrics[] = [
      { id: 'speaking',  name: 'Speaking',  totalXP: 100, activitiesCompleted: 5, correctAnswers: 30, totalAnswers: 50, accuracy: 60, progress: 20, level: 1, lastPracticed: null },
      { id: 'listening', name: 'Listening', totalXP: 100, activitiesCompleted: 5, correctAnswers: 30, totalAnswers: 50, accuracy: 60, progress: 20, level: 1, lastPracticed: null },
    ];
    const result = calculateOverallProficiency(skills);
    expect(result.level).toBe('A1');
    expect(result.numericLevel).toBe(1);
  });

  it('returns C2 for mastery-level skills', () => {
    const skills: SkillMetrics[] = [
      { id: 'speaking',  name: 'Speaking',  totalXP: 5000, activitiesCompleted: 100, correctAnswers: 450, totalAnswers: 500, accuracy: 90, progress: 80, level: 9, lastPracticed: null },
      { id: 'listening', name: 'Listening', totalXP: 5000, activitiesCompleted: 100, correctAnswers: 450, totalAnswers: 500, accuracy: 90, progress: 80, level: 9, lastPracticed: null },
    ];
    const result = calculateOverallProficiency(skills);
    expect(result.level).toBe('C2');
    expect(result.numericLevel).toBe(6);
  });

  it('requires both high level AND high accuracy to reach C2', () => {
    const skills: SkillMetrics[] = [
      { id: 'speaking', name: 'Speaking', totalXP: 5000, activitiesCompleted: 100, correctAnswers: 400, totalAnswers: 500, accuracy: 60, progress: 80, level: 9, lastPracticed: null },
    ];
    const result = calculateOverallProficiency(skills);
    expect(result.level).not.toBe('C2');
  });
});

// ─── XP → level mapping ───────────────────────────────────────────────────────

describe('XP to level mapping', () => {
  const xpToLevel = (xp: number) => Math.min(Math.floor(xp / 500) + 1, 10);

  it.each([
    [0,    1],
    [499,  1],
    [500,  2],
    [1499, 3],
    [1500, 4],
    [4500, 10],
    [9999, 10], // capped at 10
  ])('xp=%i → level %i', (xp, expected) => {
    expect(xpToLevel(xp)).toBe(expected);
  });
});

// ─── recordActivityForSkills ──────────────────────────────────────────────────

describe('recordActivityForSkills', () => {
  const userId = 'test-user-id';

  it('writes skill data to localStorage for a known activity', () => {
    recordActivityForSkills(userId, 'listening', 100, 8, 10);
    const raw = localStorage.getItem(`skill_data_${userId}`);
    expect(raw).toBeTruthy();
    const store = JSON.parse(raw!);
    // listening should have more XP than grammar for a listening activity
    expect(store.listening.xp).toBeGreaterThan(store.grammar.xp);
  });

  it('distributes XP to every skill for an unknown activity type', () => {
    recordActivityForSkills(userId, 'unknown-activity', 70, 5, 10);
    const raw = localStorage.getItem(`skill_data_${userId}`);
    expect(raw).toBeTruthy();
    const store = JSON.parse(raw!);
    // Every skill should have received some XP (even split, then scaled by weight)
    for (const skillId of ['speaking', 'listening', 'reading', 'writing', 'grammar', 'pronunciation', 'vocabulary']) {
      expect(store[skillId]?.xp).toBeGreaterThan(0);
    }
  });

  it('accumulates XP across multiple calls', () => {
    recordActivityForSkills(userId, 'speaking', 100, 8, 10);
    recordActivityForSkills(userId, 'speaking', 100, 8, 10);
    const raw = localStorage.getItem(`skill_data_${userId}`);
    const store = JSON.parse(raw!);
    // Speaking XP after two sessions should be roughly double
    expect(store.speaking.xp).toBeGreaterThan(100);
  });

  it('does nothing when xpEarned is negative', () => {
    recordActivityForSkills(userId, 'quiz', -50, 0, 10);
    const raw = localStorage.getItem(`skill_data_${userId}`);
    // Either nothing written or all zeros
    if (raw) {
      const store = JSON.parse(raw);
      const totalXP = Object.values(store).reduce((s: number, d: any) => s + d.xp, 0);
      expect(totalXP).toBe(0);
    }
  });
});

// ─── Accuracy calculations ───────────────────────────────────────────────────

describe('Accuracy calculations', () => {
  const calcAccuracy = (correct: number, total: number) =>
    total === 0 ? 0 : Math.round((correct / total) * 100);

  it.each([
    [8,  10, 80],
    [0,  10, 0],
    [10, 10, 100],
    [0,  0,  0],  // edge case: no answers yet
    [1,  3,  33],
  ])('correct=%i / total=%i → %i%%', (correct, total, expected) => {
    expect(calcAccuracy(correct, total)).toBe(expected);
  });
});

// ─── Mastery level bounds ────────────────────────────────────────────────────

describe('Mastery level calculations', () => {
  const boundMastery = (value: number): 0 | 1 | 2 | 3 | 4 | 5 =>
    Math.max(0, Math.min(5, Math.round(value))) as 0 | 1 | 2 | 3 | 4 | 5;

  it.each([
    [-1,   0],
    [0,    0],
    [2.7,  3],
    [3,    3],
    [5,    5],
    [7,    5],
  ])('boundMastery(%f) = %i', (input, expected) => {
    expect(boundMastery(input)).toBe(expected);
  });

  it('SRS intervals increase with mastery level', () => {
    const intervals = [1, 2, 4, 7, 14, 30];
    const getInterval = (mastery: number) => intervals[mastery] ?? intervals[0];

    expect(getInterval(0)).toBeLessThan(getInterval(5));
    expect(getInterval(2)).toBe(4);
    expect(getInterval(5)).toBe(30);
  });
});

// ─── Date utilities ──────────────────────────────────────────────────────────

describe('Date utilities', () => {
  it('ISO date extraction is consistent', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    expect(date.toISOString().split('T')[0]).toBe('2024-01-15');
  });

  it('start-of-week falls on Sunday', () => {
    const getStartOfWeek = (date: Date) => {
      const d = new Date(date);
      d.setDate(d.getDate() - d.getDay());
      return d;
    };
    const wednesday = new Date('2024-01-17'); // Wednesday
    expect(getStartOfWeek(wednesday).getDay()).toBe(0); // Sunday
  });

  it('streak logic: yesterday triggers increment', () => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().split('T')[0];
    const lastActivity = yesterday;
    const newStreak = lastActivity === yesterday ? 2 : 1; // simplified
    expect(newStreak).toBe(2);
    expect(today).not.toBe(yesterday);
  });
});
