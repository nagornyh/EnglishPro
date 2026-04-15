/**
 * SM-2 Spaced Repetition Algorithm Implementation
 * Based on the SuperMemo SM-2 algorithm by Piotr Wozniak
 * 
 * Quality ratings:
 * 0 - Complete blackout
 * 1 - Incorrect; correct answer remembered
 * 2 - Incorrect; correct answer seemed easy to recall
 * 3 - Correct with serious difficulty
 * 4 - Correct after hesitation
 * 5 - Perfect response
 */

export interface SM2Item {
  wordId: string;
  easeFactor: number; // 1.3 - 2.5, starts at 2.5
  interval: number; // Days until next review
  repetitions: number; // Successful reviews in a row
  nextReview: Date;
  lastReviewed: Date;
}

export interface SM2Response {
  quality: 0 | 1 | 2 | 3 | 4 | 5;
  responseTimeMs?: number;
}

export interface SM2Result {
  newInterval: number;
  newEaseFactor: number;
  newRepetitions: number;
  nextReviewDate: Date;
  wasSuccessful: boolean;
}

/**
 * Calculate the new interval and ease factor based on SM-2 algorithm
 */
export function calculateSM2(
  item: SM2Item,
  response: SM2Response
): SM2Result {
  const { quality } = response;
  let { easeFactor, interval, repetitions } = item;

  // Quality < 3 means incorrect answer - reset repetitions
  const wasSuccessful = quality >= 3;

  if (!wasSuccessful) {
    // Failed review - reset
    repetitions = 0;
    interval = 1;
  } else {
    // Successful review
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions++;
  }

  // Update ease factor (always, even on failure)
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  const efDelta = 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
  easeFactor = Math.max(1.3, easeFactor + efDelta);

  // Calculate next review date
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);

  return {
    newInterval: interval,
    newEaseFactor: easeFactor,
    newRepetitions: repetitions,
    nextReviewDate,
    wasSuccessful,
  };
}

/**
 * Convert binary correct/incorrect to SM-2 quality rating
 * Takes into account response time for more nuanced ratings
 */
export function getQualityFromResponse(
  isCorrect: boolean,
  responseTimeMs?: number,
  expectedTimeMs: number = 5000
): 0 | 1 | 2 | 3 | 4 | 5 {
  if (!isCorrect) {
    // Incorrect responses
    if (responseTimeMs && responseTimeMs < expectedTimeMs * 0.5) {
      return 2; // Quick wrong answer - probably knew but made mistake
    } else if (responseTimeMs && responseTimeMs < expectedTimeMs) {
      return 1; // Normal wrong answer
    }
    return 0; // Slow wrong answer - complete blackout
  }

  // Correct responses
  if (!responseTimeMs) return 4; // Default correct

  const ratio = responseTimeMs / expectedTimeMs;
  if (ratio < 0.3) return 5; // Very fast - perfect
  if (ratio < 0.6) return 4; // Fast - good
  if (ratio < 1.0) return 3; // Normal - with difficulty
  return 3; // Slow but correct - serious difficulty
}

/**
 * Get words that are due for review, sorted by priority
 */
export function getReviewPriority(items: SM2Item[]): SM2Item[] {
  const now = new Date();
  
  return items
    .filter(item => item.nextReview <= now)
    .sort((a, b) => {
      // Priority: overdue items first, then by ease factor (harder first)
      const aOverdue = now.getTime() - a.nextReview.getTime();
      const bOverdue = now.getTime() - b.nextReview.getTime();
      
      // If both are overdue, prioritize the more overdue one
      if (aOverdue > 0 && bOverdue > 0) {
        return bOverdue - aOverdue;
      }
      
      // Then by ease factor (lower = harder = higher priority)
      return a.easeFactor - b.easeFactor;
    });
}

/**
 * Initialize a new SM-2 item for a word
 */
export function initializeSM2Item(wordId: string): SM2Item {
  return {
    wordId,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: new Date(),
    lastReviewed: new Date(),
  };
}

/**
 * Convert existing VocabularyProgress to SM2Item
 */
export function convertToSM2Item(vocab: {
  wordId: string;
  masteryLevel: number;
  nextReview: string;
  lastReviewed: string;
  correctCount: number;
  incorrectCount: number;
}): SM2Item {
  // Estimate ease factor based on correct/incorrect ratio
  const total = vocab.correctCount + vocab.incorrectCount;
  const ratio = total > 0 ? vocab.correctCount / total : 0.5;
  const easeFactor = Math.max(1.3, Math.min(2.5, 1.3 + ratio * 1.2));

  // Estimate interval based on mastery level
  const intervals = [1, 3, 7, 14, 30, 90];
  const interval = intervals[Math.min(vocab.masteryLevel, 5)];

  return {
    wordId: vocab.wordId,
    easeFactor,
    interval,
    repetitions: vocab.correctCount,
    nextReview: new Date(vocab.nextReview),
    lastReviewed: new Date(vocab.lastReviewed),
  };
}

/**
 * Calculate retention statistics
 */
export function calculateRetentionStats(items: SM2Item[]): {
  totalItems: number;
  dueNow: number;
  dueToday: number;
  dueThisWeek: number;
  averageEaseFactor: number;
  masteredCount: number; // Items with high ease factor and long intervals
  strugglingCount: number; // Items with low ease factor
} {
  const now = new Date();
  const endOfToday = new Date(now);
  endOfToday.setHours(23, 59, 59, 999);
  const endOfWeek = new Date(now);
  endOfWeek.setDate(endOfWeek.getDate() + 7);

  let totalEF = 0;
  let dueNow = 0;
  let dueToday = 0;
  let dueThisWeek = 0;
  let masteredCount = 0;
  let strugglingCount = 0;

  for (const item of items) {
    totalEF += item.easeFactor;

    if (item.nextReview <= now) dueNow++;
    if (item.nextReview <= endOfToday) dueToday++;
    if (item.nextReview <= endOfWeek) dueThisWeek++;

    // Mastered: high ease factor and long interval
    if (item.easeFactor >= 2.3 && item.interval >= 21) {
      masteredCount++;
    }

    // Struggling: low ease factor
    if (item.easeFactor < 1.8) {
      strugglingCount++;
    }
  }

  return {
    totalItems: items.length,
    dueNow,
    dueToday,
    dueThisWeek,
    averageEaseFactor: items.length > 0 ? totalEF / items.length : 2.5,
    masteredCount,
    strugglingCount,
  };
}

export default {
  calculateSM2,
  getQualityFromResponse,
  getReviewPriority,
  initializeSM2Item,
  convertToSM2Item,
  calculateRetentionStats,
};
