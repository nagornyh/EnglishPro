/**
 * E2E: Services Tests
 * Tests core service logic: SM-2 algorithm, text analyzer, gamification functions
 */

import {
  calculateSM2, getQualityFromResponse, getReviewPriority,
  initializeSM2Item, convertToSM2Item, calculateRetentionStats,
  type SM2Item
} from '../../services/sm2-algorithm';
import { textAnalyzer } from '../../services/textAnalyzer';

// ─── SM-2 Algorithm ─────────────────────────────────────────────
describe('SM-2 Algorithm', () => {
  function makeItem(overrides: Partial<SM2Item> = {}): SM2Item {
    return {
      wordId: 'test-1',
      easeFactor: 2.5,
      interval: 1,
      repetitions: 0,
      nextReview: new Date(),
      lastReviewed: new Date(),
      ...overrides,
    };
  }

  describe('calculateSM2', () => {
    it('resets on failed response (quality < 3)', () => {
      const item = makeItem({ repetitions: 3, interval: 10 });
      const result = calculateSM2(item, { quality: 2 });

      expect(result.wasSuccessful).toBe(false);
      expect(result.newRepetitions).toBe(0);
      expect(result.newInterval).toBe(1);
    });

    it('increments repetitions on successful response', () => {
      const item = makeItem({ repetitions: 0, interval: 0 });
      const result = calculateSM2(item, { quality: 4 });

      expect(result.wasSuccessful).toBe(true);
      expect(result.newRepetitions).toBe(1);
      expect(result.newInterval).toBe(1);
    });

    it('sets interval to 6 for second successful review', () => {
      const item = makeItem({ repetitions: 1, interval: 1 });
      const result = calculateSM2(item, { quality: 4 });

      expect(result.wasSuccessful).toBe(true);
      expect(result.newRepetitions).toBe(2);
      expect(result.newInterval).toBe(6);
    });

    it('multiplies interval by ease factor for 3rd+ review', () => {
      const item = makeItem({ repetitions: 2, interval: 6, easeFactor: 2.5 });
      const result = calculateSM2(item, { quality: 5 });

      expect(result.wasSuccessful).toBe(true);
      expect(result.newRepetitions).toBe(3);
      expect(result.newInterval).toBe(15); // round(6 * 2.5)
    });

    it('ease factor never drops below 1.3', () => {
      const item = makeItem({ easeFactor: 1.3 });
      const result = calculateSM2(item, { quality: 0 });

      expect(result.newEaseFactor).toBeGreaterThanOrEqual(1.3);
    });

    it('perfect quality (5) increases ease factor', () => {
      const item = makeItem({ easeFactor: 2.5 });
      const result = calculateSM2(item, { quality: 5 });

      expect(result.newEaseFactor).toBeGreaterThan(2.5);
    });

    it('low quality (3) decreases ease factor', () => {
      const item = makeItem({ easeFactor: 2.5 });
      const result = calculateSM2(item, { quality: 3 });

      expect(result.newEaseFactor).toBeLessThan(2.5);
    });

    it('returns a future nextReviewDate', () => {
      const item = makeItem();
      const result = calculateSM2(item, { quality: 4 });
      const now = new Date();

      expect(result.nextReviewDate.getTime()).toBeGreaterThanOrEqual(now.getTime());
    });
  });

  describe('getQualityFromResponse', () => {
    it('returns 0 for slow incorrect answer', () => {
      expect(getQualityFromResponse(false, 10000, 5000)).toBe(0);
    });

    it('returns 1 for normal-speed incorrect answer', () => {
      expect(getQualityFromResponse(false, 3000, 5000)).toBe(1);
    });

    it('returns 2 for quick incorrect answer', () => {
      expect(getQualityFromResponse(false, 1000, 5000)).toBe(2);
    });

    it('returns 5 for very fast correct answer', () => {
      expect(getQualityFromResponse(true, 500, 5000)).toBe(5);
    });

    it('returns 4 for fast correct answer', () => {
      expect(getQualityFromResponse(true, 2000, 5000)).toBe(4);
    });

    it('returns 3 for slow correct answer', () => {
      expect(getQualityFromResponse(true, 4500, 5000)).toBe(3);
    });

    it('returns 4 as default for correct with no time', () => {
      expect(getQualityFromResponse(true)).toBe(4);
    });

    it('returns 0 as default for incorrect with no time', () => {
      expect(getQualityFromResponse(false)).toBe(0);
    });
  });

  describe('getReviewPriority', () => {
    it('returns only items due for review', () => {
      const past = new Date('2020-01-01');
      const future = new Date('2090-01-01');

      const items: SM2Item[] = [
        makeItem({ wordId: 'due', nextReview: past }),
        makeItem({ wordId: 'not-due', nextReview: future }),
      ];

      const result = getReviewPriority(items);
      expect(result.length).toBe(1);
      expect(result[0].wordId).toBe('due');
    });

    it('sorts by overdue time (most overdue first)', () => {
      const items: SM2Item[] = [
        makeItem({ wordId: 'old', nextReview: new Date('2020-01-01') }),
        makeItem({ wordId: 'older', nextReview: new Date('2019-01-01') }),
      ];

      const result = getReviewPriority(items);
      expect(result[0].wordId).toBe('older');
    });

    it('returns empty array when nothing is due', () => {
      const items = [makeItem({ nextReview: new Date('2090-01-01') })];
      expect(getReviewPriority(items)).toHaveLength(0);
    });
  });

  describe('initializeSM2Item', () => {
    it('creates item with default values', () => {
      const item = initializeSM2Item('word-abc');

      expect(item.wordId).toBe('word-abc');
      expect(item.easeFactor).toBe(2.5);
      expect(item.interval).toBe(0);
      expect(item.repetitions).toBe(0);
    });
  });

  describe('convertToSM2Item', () => {
    it('converts vocabulary progress to SM2Item', () => {
      const vocab = {
        wordId: 'vocab-1',
        masteryLevel: 2,
        nextReview: '2025-01-01T00:00:00Z',
        lastReviewed: '2024-12-25T00:00:00Z',
        correctCount: 8,
        incorrectCount: 2,
      };

      const item = convertToSM2Item(vocab);
      expect(item.wordId).toBe('vocab-1');
      expect(item.easeFactor).toBeGreaterThanOrEqual(1.3);
      expect(item.easeFactor).toBeLessThanOrEqual(2.5);
      expect(item.interval).toBeGreaterThan(0);
      expect(item.repetitions).toBe(8);
    });

    it('handles zero history', () => {
      const vocab = {
        wordId: 'new-word',
        masteryLevel: 0,
        nextReview: new Date().toISOString(),
        lastReviewed: new Date().toISOString(),
        correctCount: 0,
        incorrectCount: 0,
      };

      const item = convertToSM2Item(vocab);
      expect(item.wordId).toBe('new-word');
      expect(item.easeFactor).toBeGreaterThanOrEqual(1.3);
    });
  });

  describe('calculateRetentionStats', () => {
    it('handles empty array', () => {
      const stats = calculateRetentionStats([]);
      expect(stats.totalItems).toBe(0);
      expect(stats.dueNow).toBe(0);
      expect(stats.averageEaseFactor).toBe(2.5);
    });

    it('counts due items correctly', () => {
      const past = new Date('2020-01-01');
      const future = new Date('2090-01-01');

      const items = [
        makeItem({ nextReview: past }),
        makeItem({ nextReview: past }),
        makeItem({ nextReview: future }),
      ];

      const stats = calculateRetentionStats(items);
      expect(stats.totalItems).toBe(3);
      expect(stats.dueNow).toBe(2);
    });

    it('identifies mastered and struggling items', () => {
      const items = [
        makeItem({ easeFactor: 2.5, interval: 30 }), // mastered
        makeItem({ easeFactor: 1.5, interval: 1 }), // struggling
        makeItem({ easeFactor: 2.0, interval: 10 }), // middle
      ];

      const stats = calculateRetentionStats(items);
      expect(stats.masteredCount).toBe(1);
      expect(stats.strugglingCount).toBe(1);
    });
  });
});

// ─── Text Analyzer ──────────────────────────────────────────────
describe('Text Analyzer Service', () => {
  it('textAnalyzer is defined', () => {
    expect(textAnalyzer).toBeDefined();
  });

  it('analyzes a correct simple sentence', () => {
    const result = textAnalyzer.analyzeText('Hello world', 'Hello world');
    expect(result.isCorrect).toBe(true);
    expect(result.score).toBeGreaterThanOrEqual(80);
  });

  it('detects difference between expected and actual', () => {
    const result = textAnalyzer.analyzeText('I goes to school', 'I go to school');
    // Should identify the error
    expect(result.score).toBeLessThan(100);
  });

  it('handles empty input', () => {
    const result = textAnalyzer.analyzeText('', 'Expected text');
    expect(result.isCorrect).toBe(false);
    expect(result.score).toBe(0);
  });

  it('returns feedback array', () => {
    const result = textAnalyzer.analyzeText('This is a test', 'This is a test');
    expect(Array.isArray(result.feedback)).toBe(true);
  });

  it('returns corrections array', () => {
    const result = textAnalyzer.analyzeText('I recieve the goods', 'I receive the goods');
    expect(Array.isArray(result.corrections)).toBe(true);
  });

  it('isAcceptable returns true for exact match', () => {
    expect(textAnalyzer.isAcceptable('hello', ['hello', 'hi'])).toBe(true);
  });

  it('getWordCount returns correct count', () => {
    expect(textAnalyzer.getWordCount('the quick brown fox')).toBe(4);
  });

  it('getSentenceCount returns correct count', () => {
    expect(textAnalyzer.getSentenceCount('Hello. How are you? Fine.')).toBeGreaterThanOrEqual(2);
  });
});
