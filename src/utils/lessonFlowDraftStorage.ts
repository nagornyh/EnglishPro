import type { LessonStep } from '../pages/lessonStepRenderers';
import type { Task, Word } from '../types';

export const LESSON_FLOW_DRAFT_STORAGE_KEY = 'englishpro:lesson-flow-draft';

export type LessonFlowDraftV1 = {
  v: 1;
  levelId: number;
  taskId: number;
  currentStep: LessonStep;
  completedSteps: LessonStep[];
  /** Porcentaje 0–100 por paso cuando aplica (quiz, actividades con accuracy). Menor de 70 = rojo en la barra. */
  stepScores?: Partial<Record<LessonStep, number>>;
  sessionStats: {
    xpEarned: number;
    wordsLearned: number;
    accuracy: number;
    timeStarted: number;
  };
  readingAnswers: Record<string, string | number>;
  productionText: string;
  freeWritingText: string;
  freeWritingPromptIndex: number | null;
  dictationState: { sentenceIndex: number; input: string; showSentence: boolean; completed: boolean };
  conversationState: {
    scenarioIndex: number;
    currentTurnId: string | null;
    showFeedback: boolean;
  };
  grammarContrastSelected: 1 | 2 | null;
  activeTheoryTab: number;
  /** Tarjeta actual en el paso «cultural-deep-dive» (0-based). */
  culturalDeepDiveNoteIndex?: number;
  wordIds: string[];
  savedAt: number;
};

function draftKey(levelId: string, taskId: string, userKey: string): string {
  return `${LESSON_FLOW_DRAFT_STORAGE_KEY}:${userKey}:${levelId}:${taskId}`;
}

export function loadLessonFlowDraft(
  levelId: string | undefined,
  taskId: string | undefined,
  userKey: string = 'guest',
): LessonFlowDraftV1 | null {
  if (typeof localStorage === 'undefined' || !levelId || !taskId) return null;
  try {
    const raw = localStorage.getItem(draftKey(levelId, taskId, userKey));
    if (!raw) return null;
    const data = JSON.parse(raw) as LessonFlowDraftV1;
    if (data.v !== 1 || data.levelId !== Number(levelId) || data.taskId !== Number(taskId)) return null;
    return data;
  } catch {
    return null;
  }
}

export function saveLessonFlowDraft(draft: LessonFlowDraftV1, userKey: string = 'guest'): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(
      draftKey(String(draft.levelId), String(draft.taskId), userKey),
      JSON.stringify(draft),
    );
  } catch {
    /* ignore quota */
  }
}

export function clearLessonFlowDraft(
  levelId: string | undefined,
  taskId: string | undefined,
  userKey: string = 'guest',
): void {
  if (typeof localStorage === 'undefined' || !levelId || !taskId) return;
  try {
    localStorage.removeItem(draftKey(levelId, taskId, userKey));
  } catch {
    /* ignore */
  }
}

/** Mantiene el orden guardado y añade al final palabras nuevas de la tarea. */
export function orderWordsFromTask(task: Task, savedIds: string[] | null | undefined): Word[] {
  const all: Word[] = [
    ...task.vocabulary.nouns,
    ...task.vocabulary.verbs,
    ...task.vocabulary.adjectives,
    ...task.vocabulary.expressions,
    ...task.vocabulary.adverbs,
    ...task.vocabulary.prepositions,
  ];
  const byId = new Map(all.map(w => [w.id, w]));
  if (savedIds?.length) {
    const seen = new Set<string>();
    const ordered: Word[] = [];
    for (const id of savedIds) {
      const w = byId.get(id);
      if (w) {
        ordered.push(w);
        seen.add(id);
      }
    }
    const rest = all.filter(w => !seen.has(w.id)).sort(() => Math.random() - 0.5);
    return [...ordered, ...rest];
  }
  return all.sort(() => Math.random() - 0.5);
}
