import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import adaptiveEngine from '../services/adaptiveEngine';

const USER = 'test-user';

/** Helper: record N correct/incorrect attempts for a skill. */
function recordMany(
  skill: string,
  total: number,
  correctCount: number,
  userId = USER,
) {
  for (let i = 0; i < total; i++) {
    adaptiveEngine.recordAttempt(userId, {
      skill,
      correct: i < correctCount,
    });
  }
}

describe('AdaptiveEngine', () => {
  beforeEach(() => {
    localStorage.clear();
    adaptiveEngine.reset(USER);
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // ─── Initial State ────────────────────────────────────────────────────

  it('returns level 1 for all skills when no data exists', () => {
    const snap = adaptiveEngine.getSnapshot(USER);
    expect(snap.skills).toHaveLength(7);
    for (const s of snap.skills) {
      expect(s.level).toBe(1);
      expect(s.accuracy).toBe(0);
      expect(s.totalAttempts).toBe(0);
      expect(s.trend).toBe('stable');
    }
    expect(snap.overallLevel).toBe(1);
    expect(snap.weakestSkill).toBeNull();
    expect(snap.strongestSkill).toBeNull();
    expect(snap.recommendedFocus).toEqual([]);
  });

  it('getSkillLevel returns 1 for an unpracticed skill', () => {
    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(1);
  });

  // ─── Level Increase ───────────────────────────────────────────────────

  it('increases level after 5+ correct attempts with >85% accuracy', () => {
    // 5 correct out of 5 → 100% accuracy, window = 5 → level bumps once
    recordMany('grammar', 5, 5);
    const level = adaptiveEngine.getSkillLevel(USER, 'grammar');
    expect(level).toBe(2);
  });

  it('does NOT increase level if window is less than 5 even at high accuracy', () => {
    recordMany('grammar', 4, 4); // 100% but only 4 attempts
    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(1);
  });

  // ─── Level Decrease ───────────────────────────────────────────────────

  it('decreases level after 5+ attempts with <55% accuracy', () => {
    // Push level to 2 with exactly 5 correct
    recordMany('grammar', 5, 5);
    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(2);

    // Flood with wrong answers — at attempt 10, window acc drops below 55%
    recordMany('grammar', 20, 0);
    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(1);
  });

  // ─── Level Bounds ─────────────────────────────────────────────────────

  it('never goes below level 1', () => {
    // All wrong, many attempts
    recordMany('listening', 20, 0);
    expect(adaptiveEngine.getSkillLevel(USER, 'listening')).toBe(1);
  });

  it('never exceeds level 5', () => {
    // Push level up repeatedly: each cycle of high-accuracy window bumps +1
    for (let cycle = 0; cycle < 6; cycle++) {
      recordMany('reading', 20, 20); // 100% window each time
    }
    expect(adaptiveEngine.getSkillLevel(USER, 'reading')).toBeLessThanOrEqual(5);
  });

  // ─── Scaffold Level ───────────────────────────────────────────────────

  it('returns scaffold 4 for difficulty 1 (max help)', () => {
    expect(adaptiveEngine.getScaffoldLevel(USER, 'grammar')).toBe(4);
  });

  it('returns scaffold 0 for difficulty 5 (no help)', () => {
    // 8 consecutive correct → level reaches 5 (bumps at attempts 5,6,7,8)
    recordMany('grammar', 8, 8);
    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(5);
    expect(adaptiveEngine.getScaffoldLevel(USER, 'grammar')).toBe(0);
  });

  it('scaffold level = 5 - difficulty for intermediate levels', () => {
    // 5 correct → level 2
    recordMany('grammar', 5, 5);
    const diff = adaptiveEngine.getSkillLevel(USER, 'grammar');
    expect(diff).toBe(2);
    expect(adaptiveEngine.getScaffoldLevel(USER, 'grammar')).toBe(3); // 5 - 2
  });

  // ─── Trend Detection ──────────────────────────────────────────────────

  it('detects "improving" trend when second half is 10%+ better', () => {
    // First half bad, second half good — need ≥6 attempts
    const attempts: boolean[] = [false, false, false, true, true, true, true, true];
    for (const correct of attempts) {
      adaptiveEngine.recordAttempt(USER, { skill: 'writing', correct });
    }
    const snap = adaptiveEngine.getSnapshot(USER);
    const writing = snap.skills.find(s => s.skill === 'writing')!;
    expect(writing.trend).toBe('improving');
  });

  it('detects "declining" trend when second half is 10%+ worse', () => {
    const attempts: boolean[] = [true, true, true, true, false, false, false, false];
    for (const correct of attempts) {
      adaptiveEngine.recordAttempt(USER, { skill: 'speaking', correct });
    }
    const snap = adaptiveEngine.getSnapshot(USER);
    const speaking = snap.skills.find(s => s.skill === 'speaking')!;
    expect(speaking.trend).toBe('declining');
  });

  it('reports "stable" trend when halves are within 10%', () => {
    // 3 correct, 3 correct — both halves identical
    recordMany('vocabulary', 6, 6);
    const snap = adaptiveEngine.getSnapshot(USER);
    const vocab = snap.skills.find(s => s.skill === 'vocabulary')!;
    expect(vocab.trend).toBe('stable');
  });

  // ─── Decay ────────────────────────────────────────────────────────────

  it('applies decay after 14+ days without practice', () => {
    // 6 correct → level 3 (bumps at attempts 5,6)
    recordMany('grammar', 6, 6);
    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(3);

    // Fast-forward 15 days
    vi.useFakeTimers();
    vi.setSystemTime(Date.now() + 15 * 86400000);

    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(2); // decayed by 1
    vi.useRealTimers();
  });

  it('applies multiple decay steps for long absence', () => {
    // 8 correct → level 5
    recordMany('reading', 8, 8);
    expect(adaptiveEngine.getSkillLevel(USER, 'reading')).toBe(5);

    vi.useFakeTimers();
    vi.setSystemTime(Date.now() + 45 * 86400000); // 45 days → 3 decay steps

    // 5 - 3 = 2
    expect(adaptiveEngine.getSkillLevel(USER, 'reading')).toBe(2);
    vi.useRealTimers();
  });

  // ─── Recommended Focus ────────────────────────────────────────────────

  it('includes skills with accuracy <65% in recommendedFocus', () => {
    // Record low accuracy on grammar
    recordMany('grammar', 10, 4); // 40%
    const snap = adaptiveEngine.getSnapshot(USER);
    expect(snap.recommendedFocus).toContain('grammar');
  });

  it('includes skills not practiced in 7+ days in recommendedFocus', () => {
    recordMany('writing', 6, 6);

    vi.useFakeTimers();
    vi.setSystemTime(Date.now() + 8 * 86400000);

    const snap = adaptiveEngine.getSnapshot(USER);
    expect(snap.recommendedFocus).toContain('writing');
    vi.useRealTimers();
  });

  // ─── Storage / Persistence ────────────────────────────────────────────

  it('persists data in localStorage with correct key', () => {
    recordMany('grammar', 3, 3);
    const stored = localStorage.getItem(`adaptive_engine_${USER}`);
    expect(stored).not.toBeNull();

    const data = JSON.parse(stored!);
    expect(data.attempts).toHaveLength(3);
    expect(data.difficulties).toHaveProperty('grammar');
  });

  it('loads persisted data across engine resets of in-memory cache', () => {
    recordMany('grammar', 5, 5);
    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(2);

    // Force in-memory cache clear but keep localStorage
    adaptiveEngine.reset(USER);

    // Manually re-seed localStorage as if another session saved it
    const data = {
      attempts: Array.from({ length: 6 }, () => ({
        skill: 'grammar',
        correct: true,
        timestamp: Date.now(),
      })),
      difficulties: {
        grammar: {
          skill: 'grammar',
          level: 2,
          accuracy: 100,
          trend: 'stable',
          totalAttempts: 6,
          windowSize: 6,
          lastPracticed: Date.now(),
          daysSinceLastPractice: 0,
        },
      },
    };
    localStorage.setItem(`adaptive_engine_${USER}`, JSON.stringify(data));

    // Engine should load from localStorage
    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(2);
  });

  // ─── reset() ──────────────────────────────────────────────────────────

  it('reset() clears all data for the user', () => {
    recordMany('grammar', 10, 10);
    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(5);

    adaptiveEngine.reset(USER);

    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(1);
    expect(localStorage.getItem(`adaptive_engine_${USER}`)).toBeNull();
  });

  // ─── getWordOfTheDay ──────────────────────────────────────────────────

  it('returns the same word all day (deterministic)', () => {
    const vocab = [
      { word: 'apple', translation: 'manzana', example: 'I eat an apple.', level: 'A1' },
      { word: 'house', translation: 'casa', example: 'This is my house.', level: 'A1' },
      { word: 'journey', translation: 'viaje', example: 'What a long journey.', level: 'B1' },
    ];
    const first = adaptiveEngine.getWordOfTheDay(USER, vocab);
    const second = adaptiveEngine.getWordOfTheDay(USER, vocab);
    expect(first).toEqual(second);
  });

  it('returns null for empty vocabulary', () => {
    expect(adaptiveEngine.getWordOfTheDay(USER, [])).toBeNull();
  });

  // ─── recordBatch ──────────────────────────────────────────────────────

  it('records multiple attempts and recalculates affected skills', () => {
    const results = [
      ...Array.from({ length: 6 }, () => ({ skill: 'grammar', correct: true })),
      ...Array.from({ length: 6 }, () => ({ skill: 'listening', correct: true })),
    ];
    adaptiveEngine.recordBatch(USER, results);

    expect(adaptiveEngine.getSkillLevel(USER, 'grammar')).toBe(2);
    expect(adaptiveEngine.getSkillLevel(USER, 'listening')).toBe(2);
  });

  // ─── Total Attempts Cap ───────────────────────────────────────────────

  it('caps total attempts at 500', () => {
    // Record 510 attempts
    for (let i = 0; i < 510; i++) {
      adaptiveEngine.recordAttempt(USER, { skill: 'grammar', correct: true });
    }
    const stored = JSON.parse(localStorage.getItem(`adaptive_engine_${USER}`)!);
    expect(stored.attempts.length).toBeLessThanOrEqual(500);
  });

  // ─── getMiniReviewTopics ──────────────────────────────────────────────

  it('returns skills with accuracy <70% and 3+ attempts', () => {
    recordMany('grammar', 10, 5);    // 50%
    recordMany('vocabulary', 10, 6); // 60%
    recordMany('reading', 10, 10);   // 100% — should NOT appear

    const topics = adaptiveEngine.getMiniReviewTopics(USER);
    expect(topics).toContain('grammar');
    expect(topics).toContain('vocabulary');
    expect(topics).not.toContain('reading');
  });

  it('returns empty array when no weak skills exist', () => {
    recordMany('grammar', 10, 10);
    expect(adaptiveEngine.getMiniReviewTopics(USER)).toEqual([]);
  });

  // ─── Snapshot Aggregation ─────────────────────────────────────────────

  it('identifies weakest and strongest skills correctly', () => {
    recordMany('grammar', 10, 3);   // 30%
    recordMany('reading', 10, 9);   // 90%

    const snap = adaptiveEngine.getSnapshot(USER);
    expect(snap.weakestSkill).toBe('grammar');
    expect(snap.strongestSkill).toBe('reading');
  });

  it('computes overallLevel as average of practiced skills', () => {
    // grammar → level 2 (5 correct)
    recordMany('grammar', 5, 5);
    // reading stays at level 1 (low accuracy)
    recordMany('reading', 6, 1);

    const snap = adaptiveEngine.getSnapshot(USER);
    // Only grammar and reading are practiced: (2 + 1) / 2 = 1.5
    expect(snap.overallLevel).toBe(1.5);
  });

  // ─── Multi-user isolation ─────────────────────────────────────────────

  it('keeps data isolated between different users', () => {
    recordMany('grammar', 5, 5, 'user-a');
    recordMany('grammar', 6, 0, 'user-b');

    expect(adaptiveEngine.getSkillLevel('user-a', 'grammar')).toBe(2);
    expect(adaptiveEngine.getSkillLevel('user-b', 'grammar')).toBe(1);

    // Clean up
    adaptiveEngine.reset('user-a');
    adaptiveEngine.reset('user-b');
  });
});
