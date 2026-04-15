import { getTheoryById, type GrammarTheoryModule } from '../data/grammar-theory';
import { getContrastPairsByLevel } from '../data/grammar-contrast-pairs';
import { hasGeneratorTemplates } from '../data/exercise-generator';

const IRREGULAR_VERBS_STEP_THEORY_ID = 'practice-irregular-verb-forms';
const IRREGULAR_VERBS_FALLBACK_ID = 'a2-past-simple';

/** Practice-hook IDs from practice-activity-theory-modules.ts, prepended before task grammar for these steps */
const STEP_PREPEND_PRACTICE_IDS: Record<string, string[]> = {
  pronunciation: ['practice-aural-communication'],
  'pronunciation-lab': ['practice-aural-communication'],
  'listen-select': ['practice-aural-communication'],
  'enhanced-listening': ['practice-aural-communication'],
  dictation: ['practice-aural-communication'],
  'reading-comprehension': ['practice-reading-long-texts'],
  'news-reader': ['practice-reading-long-texts'],
  vocabulary: ['practice-lexical-collocation'],
  'vocabulary-explorer': ['practice-lexical-collocation'],
  'collocation-practice': ['practice-lexical-collocation'],
  crossword: ['practice-lexical-collocation'],
  mnemonics: ['practice-lexical-collocation'],
  'word-families': ['practice-lexical-collocation'],
  practice: ['practice-lexical-collocation'],
  dialogue: ['practice-spoken-interaction'],
  'conversation-practice': ['practice-spoken-interaction'],
  situations: ['practice-spoken-interaction'],
  'sentence-writing': ['practice-written-output-activities'],
  production: ['practice-written-output-activities'],
  'free-writing': ['practice-written-output-activities'],
  'writing-workshop': ['practice-written-output-activities'],
  'basic-transformation': ['practice-written-output-activities'],
  'false-friends': ['practice-false-cognates'],
  idioms: ['practice-formulaic-expressions'],
  'phrasal-verbs': ['practice-formulaic-expressions'],
  'cultural-note': ['practice-culture-and-context'],
  'cultural-deep-dive': ['practice-culture-and-context'],
  'fun-fact': ['practice-culture-and-context'],
};

/**
 * First contrast pair shown per level → grammar theory tabs to surface first in the FAB.
 * Keys = ContrastPair.id from grammar-contrast-pairs.ts
 */
const CONTRAST_PAIR_TO_THEORY_IDS: Record<string, string[]> = {
  'present-simple-vs-continuous': ['a2-present-simple-vs-continuous', 'a2-present-continuous', 'a1-present-simple'],
  'past-simple-vs-present-perfect': ['b1-present-perfect-vs-past-simple', 'a2-past-simple'],
  'past-simple-vs-past-continuous': ['a2-past-continuous', 'a2-past-simple'],
  'present-perfect-vs-present-perfect-continuous': ['b1-present-perfect-continuous', 'b1-present-perfect-vs-past-simple'],
  'will-vs-going-to': ['a2-going-to-vs-will'],
  'first-vs-second-conditional': ['b1-first-conditional', 'b1-second-conditional'],
  'past-perfect-vs-past-simple': ['b1-past-perfect', 'a2-past-simple'],
  'used-to-vs-would-vs-past-simple': ['b1-used-to-would', 'a2-past-simple'],
  'b2-wish-past-vs-pastperfect': ['b1-wish-past', 'b1-past-perfect'],
  'b2-conditional-types': ['b2-conditionals-all'],
  'b2-gerund-infinitive-meaning': ['b1-gerund-vs-infinitive'],
  'b2-passive-active-formal': ['b2-passive-advanced', 'b1-passive-voice'],
  'c1-inversion-vs-standard': ['c1-inversion', 'b2-inversion-after-negatives'],
  'c1-nominal-vs-verbal': ['c1-nominalization'],
  'c1-hedging-vs-boosting': ['c1-hedging'],
  'c2-formal-informal-register': ['c2-register-shift'],
  'c2-literal-figurative': ['c2-pragmatic-implicature'],
  'c2-direct-indirect-pragmatics': ['c2-pragmatic-implicature'],
  'level7-will-vs-going-to-future': ['a2-going-to-vs-will', 'b1-future-forms'],
  'level7-gerund-vs-infinitive': ['b1-gerund-vs-infinitive'],
  'level8-reported-speech-say-vs-tell': ['b1-reported-speech'],
  'level8-wish-past-vs-past-perfect': ['b1-wish-past', 'b1-past-perfect'],
  'level9-active-vs-passive-academic': ['b2-passive-advanced', 'b1-passive-voice'],
  'level10-formal-vs-informal-register': ['c2-register-shift'],
  'level9-hedging-vs-asserting': ['c1-hedging'],
  'level9-nominalization-vs-verbal': ['c1-nominalization'],
  'level10-cleft-vs-standard': ['c1-cleft-sentences', 'b2-emphasis-cleft-sentences'],
  'level10-ellipsis-vs-full-form': ['c1-ellipsis-substitution'],
};

function resolveIds(ids: string[]): GrammarTheoryModule[] {
  return ids.map(id => getTheoryById(id)).filter((m): m is GrammarTheoryModule => !!m);
}

/** Put practice/ contrast modules first; dedupe by id; keep remaining task modules in original order */
function prependDedupe(preferred: GrammarTheoryModule[], taskMods: GrammarTheoryModule[]): GrammarTheoryModule[] {
  const seen = new Set<string>();
  const out: GrammarTheoryModule[] = [];
  for (const m of [...preferred, ...taskMods]) {
    if (seen.has(m.id)) continue;
    seen.add(m.id);
    out.push(m);
  }
  return out;
}

export interface ContextualTheoryOptions {
  levelId?: number;
  taskGrammarTheoryIds?: string[];
}

/**
 * Módulos para el FAB «Repasar teoría» y modales «Ver teoría» acordes al paso actual.
 */
export function getContextualTheoryModules(
  currentStep: string,
  taskTheoryModules: GrammarTheoryModule[],
  options?: ContextualTheoryOptions,
): GrammarTheoryModule[] {
  const taskIds = options?.taskGrammarTheoryIds;

  if (currentStep === 'irregular-verbs') {
    const dedicated = getTheoryById(IRREGULAR_VERBS_STEP_THEORY_ID);
    if (dedicated) return [dedicated];
    const fallback = getTheoryById(IRREGULAR_VERBS_FALLBACK_ID);
    if (fallback) return [fallback];
    return taskTheoryModules;
  }

  if (currentStep === 'generated-practice' && taskIds?.length) {
    const templateIds = taskIds.filter(hasGeneratorTemplates);
    const templateMods = resolveIds(templateIds);
    const rest = taskTheoryModules.filter(m => !templateIds.includes(m.id));
    if (templateMods.length > 0) return [...templateMods, ...rest];
  }

  const levelId = options?.levelId;
  if (currentStep === 'grammar-contrast' && levelId != null) {
    const pairs = getContrastPairsByLevel(levelId);
    const first = pairs[0];
    if (first) {
      const ids = CONTRAST_PAIR_TO_THEORY_IDS[first.id];
      if (ids?.length) {
        const contrastMods = resolveIds(ids);
        if (contrastMods.length > 0) return prependDedupe(contrastMods, taskTheoryModules);
      }
    }
  }

  const prepend = STEP_PREPEND_PRACTICE_IDS[currentStep];
  if (prepend?.length) {
    const extra = resolveIds(prepend);
    if (extra.length > 0) return prependDedupe(extra, taskTheoryModules);
  }

  return taskTheoryModules;
}
