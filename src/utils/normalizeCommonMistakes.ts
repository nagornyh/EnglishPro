import type { CommonMistakeItem } from '../types';

/**
 * Normalizes the various commonMistakes formats used across levels
 * into the canonical CommonMistakeItem shape.
 *
 * Level formats found:
 *   A) levels 1–2:  { id, wrong, correct, explanation, explanationEs, category }
 *   B) levels 3–6:  { wrong, correct, explanation }
 *   C) levels 7–11: { mistake, correction, explanation }
 *   D) levels 12–13: { incorrect, correct, explanation }
 */

interface RawMistake {
  id?: string;
  wrong?: string;
  correct?: string;
  correction?: string;
  mistake?: string;
  incorrect?: string;
  explanation?: string;
  explanationEs?: string;
  category?: CommonMistakeItem['category'];
}

export function normalizeCommonMistakes(raw: RawMistake[]): CommonMistakeItem[] {
  return raw.map((item, index) => ({
    id: item.id || `cm_${index}`,
    wrong: item.wrong || item.mistake || item.incorrect || '',
    correct: item.correct || item.correction || '',
    explanation: item.explanation || '',
    explanationEs: item.explanationEs || item.explanation || '',
    category: item.category || inferCategory(item.explanation || ''),
  }));
}

function inferCategory(explanation: string): CommonMistakeItem['category'] {
  const lower = explanation.toLowerCase();
  if (lower.includes('grammar') || lower.includes('gramática') || lower.includes('tense') || lower.includes('verb') || lower.includes('-s ') || lower.includes('auxiliar')) return 'grammar';
  if (lower.includes('vocab') || lower.includes('word') || lower.includes('palabra') || lower.includes('significa') || lower.includes('synonym')) return 'vocabulary';
  if (lower.includes('pronun') || lower.includes('sound') || lower.includes('sonido')) return 'pronunciation';
  if (lower.includes('false friend') || lower.includes('falso amigo')) return 'false-friend';
  return 'usage';
}
