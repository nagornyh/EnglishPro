/**
 * Error Tracking Service
 * Tracks user mistakes for targeted practice and analysis
 */

import type { UserError, ErrorAnalysis, CommonMistake, ActivityType } from '../types';

export interface ErrorRecord {
  id: string;
  odUserId: string;
  wordId: string;
  activityType: ActivityType;
  errorType: UserError['errorType'];
  userAnswer: string;
  correctAnswer: string;
  timestamp: string;
  context?: {
    levelId: number;
    taskId: number;
    sentence?: string;
  };
  reviewed: boolean;
  masteredAfterError: boolean;
}

/**
 * Analyze error patterns to identify common mistakes
 */
export function analyzeErrors(errors: ErrorRecord[]): ErrorAnalysis {
  const errorsByType: Record<string, number> = {};
  const errorsByWord: Record<string, number> = {};
  const wordErrorDetails: Map<string, ErrorRecord[]> = new Map();

  for (const error of errors) {
    // Count by type
    errorsByType[error.errorType] = (errorsByType[error.errorType] || 0) + 1;

    // Count by word
    errorsByWord[error.wordId] = (errorsByWord[error.wordId] || 0) + 1;

    // Collect details for pattern analysis
    if (!wordErrorDetails.has(error.wordId)) {
      wordErrorDetails.set(error.wordId, []);
    }
    wordErrorDetails.get(error.wordId)!.push(error);
  }

  // Find most problematic words (sorted by error count)
  const mostProblematicWords = Object.entries(errorsByWord)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([wordId]) => wordId);

  // Detect common mistakes patterns
  const commonMistakes = detectCommonMistakes(errors);

  // Calculate improvement rate
  const reviewedErrors = errors.filter(e => e.reviewed);
  const masteredAfter = errors.filter(e => e.masteredAfterError);
  const improvementRate = reviewedErrors.length > 0 
    ? (masteredAfter.length / reviewedErrors.length) * 100 
    : 0;

  return {
    totalErrors: errors.length,
    errorsByType,
    errorsByWord,
    mostProblematicWords,
    commonMistakes,
    improvementRate,
  };
}

/**
 * Detect common mistake patterns
 */
function detectCommonMistakes(errors: ErrorRecord[]): CommonMistake[] {
  const patterns: Map<string, { count: number; examples: string[]; tip: string; tipEs: string }> = new Map();

  for (const error of errors) {
    const pattern = identifyMistakePattern(error);
    if (pattern) {
      if (!patterns.has(pattern.key)) {
        patterns.set(pattern.key, {
          count: 0,
          examples: [],
          tip: pattern.tip,
          tipEs: pattern.tipEs,
        });
      }
      const p = patterns.get(pattern.key)!;
      p.count++;
      if (p.examples.length < 3) {
        p.examples.push(`${error.userAnswer} → ${error.correctAnswer}`);
      }
    }
  }

  return Array.from(patterns.entries())
    .filter(([, data]) => data.count >= 2) // Only patterns that occur more than once
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 5)
    .map(([pattern, data]) => ({
      pattern,
      frequency: data.count,
      examples: data.examples,
      tip: data.tip,
      tipEs: data.tipEs,
    }));
}

/**
 * Identify specific mistake patterns
 */
function identifyMistakePattern(error: ErrorRecord): { key: string; tip: string; tipEs: string } | null {
  const user = error.userAnswer.toLowerCase().trim();
  const correct = error.correctAnswer.toLowerCase().trim();

  // Spelling patterns
  if (error.errorType === 'spelling') {
    // Double letter mistakes
    if (hasMissingDoubleLetter(user, correct)) {
      return {
        key: 'missing_double_letter',
        tip: 'Remember to double certain consonants (ll, mm, nn, ss, etc.)',
        tipEs: 'Recuerda duplicar ciertas consonantes (ll, mm, nn, ss, etc.)',
      };
    }

    // Silent letters
    if (hasMissingSilentLetter(user, correct)) {
      return {
        key: 'missing_silent_letter',
        tip: 'Watch out for silent letters in English (k in know, b in climb, etc.)',
        tipEs: 'Cuidado con las letras mudas en inglés (k en know, b en climb, etc.)',
      };
    }

    // -tion vs -sion
    if (user.includes('sion') && correct.includes('tion') || user.includes('tion') && correct.includes('sion')) {
      return {
        key: 'tion_sion_confusion',
        tip: 'Words ending in -tion are more common than -sion',
        tipEs: 'Las palabras que terminan en -tion son más comunes que -sion',
      };
    }

    // ie vs ei
    if ((user.includes('ie') && correct.includes('ei')) || (user.includes('ei') && correct.includes('ie'))) {
      return {
        key: 'ie_ei_confusion',
        tip: 'Remember: I before E, except after C (receive, believe)',
        tipEs: 'Recuerda: I antes de E, excepto después de C',
      };
    }
  }

  // Grammar patterns
  if (error.errorType === 'grammar') {
    // Third person -s
    if (!user.endsWith('s') && correct.endsWith('s')) {
      return {
        key: 'missing_third_person_s',
        tip: 'Don\'t forget the -s for third person singular (he/she/it)',
        tipEs: 'No olvides la -s para tercera persona singular (he/she/it)',
      };
    }

    // Past tense -ed
    if (!user.endsWith('ed') && correct.endsWith('ed')) {
      return {
        key: 'missing_past_tense',
        tip: 'Regular past tense verbs need -ed ending',
        tipEs: 'Los verbos regulares en pasado necesitan terminación -ed',
      };
    }
  }

  // Meaning patterns
  if (error.errorType === 'meaning' || error.errorType === 'translation') {
    // False friends (common Spanish-English confusions)
    const falseFriends: Record<string, { tip: string; tipEs: string }> = {
      'actually': {
        tip: '"Actually" means "in fact", not "currently"',
        tipEs: '"Actually" significa "de hecho", no "actualmente"',
      },
      'embarrassed': {
        tip: '"Embarrassed" means "ashamed", not "pregnant"',
        tipEs: '"Embarrassed" significa "avergonzado", no "embarazada"',
      },
      'sensible': {
        tip: '"Sensible" means "reasonable", not "sensitive"',
        tipEs: '"Sensible" significa "razonable/sensato", no "sensible"',
      },
      'library': {
        tip: '"Library" is for books, not a "bookstore"',
        tipEs: '"Library" es biblioteca, no librería',
      },
    };

    for (const [word, tips] of Object.entries(falseFriends)) {
      if (correct.includes(word) || user.includes(word)) {
        return { key: `false_friend_${word}`, ...tips };
      }
    }
  }

  return null;
}

// Helper functions
function hasMissingDoubleLetter(user: string, correct: string): boolean {
  const doubleLetterRegex = /(.)\1/g;
  const correctDoubles = correct.match(doubleLetterRegex) || [];
  
  for (const double of correctDoubles) {
    if (!user.includes(double) && user.includes(double[0])) {
      return true;
    }
  }
  return false;
}

function hasMissingSilentLetter(user: string, correct: string): boolean {
  const silentPatterns = ['kn', 'wr', 'gn', 'mb', 'mn', 'ps', 'pn'];
  
  for (const pattern of silentPatterns) {
    if (correct.includes(pattern) && !user.includes(pattern)) {
      return true;
    }
  }
  return false;
}

/**
 * Get words that need extra practice based on error history
 */
export function getWordsNeedingPractice(
  errors: ErrorRecord[],
  limit: number = 20
): string[] {
  const errorCounts = new Map<string, { count: number; lastError: Date }>();

  for (const error of errors) {
    const existing = errorCounts.get(error.wordId);
    const errorDate = new Date(error.timestamp);
    
    if (!existing || errorDate > existing.lastError) {
      errorCounts.set(error.wordId, {
        count: (existing?.count || 0) + 1,
        lastError: errorDate,
      });
    }
  }

  // Sort by error count (desc) and recency
  return Array.from(errorCounts.entries())
    .sort((a, b) => {
      // Primary: error count
      if (b[1].count !== a[1].count) {
        return b[1].count - a[1].count;
      }
      // Secondary: most recent error first
      return b[1].lastError.getTime() - a[1].lastError.getTime();
    })
    .slice(0, limit)
    .map(([wordId]) => wordId);
}

/**
 * Generate personalized practice suggestions based on errors
 */
export function generatePracticeSuggestions(analysis: ErrorAnalysis): {
  activityType: ActivityType;
  reason: string;
  reasonEs: string;
  wordIds: string[];
}[] {
  const suggestions: {
    activityType: ActivityType;
    reason: string;
    reasonEs: string;
    wordIds: string[];
  }[] = [];

  // Suggest flashcards for meaning errors
  if (analysis.errorsByType['meaning'] > 0 || analysis.errorsByType['translation'] > 0) {
    suggestions.push({
      activityType: 'flashcard',
      reason: 'Practice word meanings with flashcards',
      reasonEs: 'Practica significados de palabras con tarjetas',
      wordIds: analysis.mostProblematicWords.slice(0, 10),
    });
  }

  // Suggest fill-in-blanks for spelling errors
  if (analysis.errorsByType['spelling'] > 0) {
    suggestions.push({
      activityType: 'fillBlanks',
      reason: 'Improve spelling with fill-in-the-blank exercises',
      reasonEs: 'Mejora la ortografía con ejercicios de completar',
      wordIds: analysis.mostProblematicWords.slice(0, 10),
    });
  }

  // Suggest listening for pronunciation issues
  if (analysis.errorsByType['listening'] > 0) {
    suggestions.push({
      activityType: 'dictation',
      reason: 'Practice listening comprehension',
      reasonEs: 'Practica comprensión auditiva',
      wordIds: analysis.mostProblematicWords.slice(0, 10),
    });
  }

  // Always suggest multiple choice for reinforcement
  if (analysis.mostProblematicWords.length > 0) {
    suggestions.push({
      activityType: 'multipleChoice',
      reason: 'Reinforce learning with quizzes',
      reasonEs: 'Refuerza el aprendizaje con cuestionarios',
      wordIds: analysis.mostProblematicWords,
    });
  }

  return suggestions;
}

export default {
  analyzeErrors,
  getWordsNeedingPractice,
  generatePracticeSuggestions,
};
