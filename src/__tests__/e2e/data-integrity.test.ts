/**
 * E2E: Data Integrity Tests
 * Verifies all data files are correctly structured and consistent.
 * These tests validate the data that powers the entire application.
 */

import { levels } from '../../data/levels';
import { grammarTheory } from '../../data/grammar-theory';
import { idioms } from '../../data/idioms';
import { conversationScenarios } from '../../data/conversations';
import { readingTexts } from '../../data/reading-texts';
import { listeningExercises } from '../../data/listening-exercises';
import { writingScaffolds } from '../../data/writing-scaffolds';
import { grammarContrastPairs } from '../../data/grammar-contrast-pairs';
import { l1InterferenceRules } from '../../data/l1-interference';
import { freeWritingPrompts, dictationSentences } from '../../data/production-exercises';
import { productiveActivities } from '../../data/productive-activities';
import { generateErrorCorrections, hasGeneratorTemplates } from '../../data/exercise-generator';

// ─── Levels Data ────────────────────────────────────────────────────────────

describe('Levels Data Integrity', () => {
  it('has exactly 13 levels', () => {
    expect(levels).toHaveLength(13);
  });

  it('all levels have unique IDs', () => {
    const ids = levels.map(l => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all tasks within levels have unique IDs per level', () => {
    for (const level of levels) {
      const taskIds = level.tasks.map(t => t.id);
      expect(new Set(taskIds).size).toBe(taskIds.length);
    }
  });

  it('all tasks have introduction with whenToUse', () => {
    const missingTasks: string[] = [];

    for (const level of levels) {
      for (const task of level.tasks) {
        if (!task.introduction?.whenToUse || task.introduction.whenToUse.length === 0) {
          missingTasks.push(`Level ${level.id}, Task ${task.id}: ${task.title}`);
        }
      }
    }

    expect(missingTasks).toEqual([]);
  });

  it('all commonMistakes use the standardized format (wrong/correct/id)', () => {
    const nonStandard: string[] = [];

    for (const level of levels) {
      for (const task of level.tasks) {
        if (task.commonMistakes) {
          for (const cm of task.commonMistakes) {
            if (!cm.wrong || !cm.correct) {
              nonStandard.push(`Level ${level.id}, Task ${task.id}: missing wrong/correct`);
            }
            if (!cm.id) {
              nonStandard.push(`Level ${level.id}, Task ${task.id}: missing id`);
            }
          }
        }
      }
    }

    expect(nonStandard).toEqual([]);
  });

  it('all vocabulary words have required fields', () => {
    for (const level of levels) {
      for (const task of level.tasks) {
        const allWords = [
          ...task.vocabulary.nouns,
          ...task.vocabulary.verbs,
          ...task.vocabulary.adjectives,
          ...task.vocabulary.adverbs,
          ...task.vocabulary.expressions,
          ...task.vocabulary.prepositions,
        ];
        for (const word of allWords) {
          expect(word.id).toBeTruthy();
          expect(word.word).toBeTruthy();
          expect(word.translation).toBeTruthy();
          expect(word.definition).toBeTruthy();
          expect(word.example).toBeTruthy();
        }
      }
    }
  });

  it('every level has at least 5 tasks', () => {
    for (const level of levels) {
      expect(level.tasks.length).toBeGreaterThanOrEqual(5);
    }
  });

  it('levels are numbered sequentially 1-13', () => {
    for (let i = 0; i < levels.length; i++) {
      expect(levels[i].id).toBe(i + 1);
    }
    expect(levels.length).toBe(13);
  });

  it('every level has valid CEFR designation', () => {
    const validCefr = ['A1', 'A1+', 'A2', 'B1', 'B1+', 'B2', 'B2+', 'B2+/C1', 'C1', 'C1+', 'C2', 'C2+'];
    for (const level of levels) {
      expect(validCefr).toContain(level.cefrLevel);
    }
  });
});

// ─── Grammar Theory ─────────────────────────────────────────────────────────

describe('Grammar Theory Data', () => {
  it('has modules for all CEFR levels (A1-C2)', () => {
    const stringLevels = new Set(grammarTheory.map(m => m.level));
    expect(stringLevels.has('A1')).toBe(true);
    expect(stringLevels.has('A2')).toBe(true);
    expect(stringLevels.has('B1')).toBe(true);
    expect(stringLevels.has('B2')).toBe(true);
    expect(stringLevels.has('C1')).toBe(true);
    expect(stringLevels.has('C2')).toBe(true);
  });

  it('all modules have unique IDs', () => {
    const ids = grammarTheory.map(m => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all modules have title, explanation, and formationRules', () => {
    for (const mod of grammarTheory) {
      expect(mod.title).toBeTruthy();
      expect(mod.explanation).toBeTruthy();
      expect(mod.formationRules.length).toBeGreaterThan(0);
    }
  });

  it('all modules have exercises with recognition items', () => {
    for (const mod of grammarTheory) {
      expect(mod.exercises).toBeDefined();
      expect(mod.exercises.recognition.length).toBeGreaterThan(0);
    }
  });

  it('has at least 30 modules total', () => {
    expect(grammarTheory.length).toBeGreaterThanOrEqual(30);
  });

  it('all modules have l1Contrast for Spanish speakers', () => {
    for (const mod of grammarTheory) {
      expect(mod.l1Contrast).toBeDefined();
      expect(mod.l1Contrast.concept).toBeTruthy();
      expect(mod.l1Contrast.contrastExamples.length).toBeGreaterThan(0);
    }
  });

  it('all modules have predictedErrors', () => {
    for (const mod of grammarTheory) {
      expect(mod.predictedErrors.length).toBeGreaterThan(0);
    }
  });
});

// ─── Idioms ─────────────────────────────────────────────────────────────────

describe('Idioms Data', () => {
  it('has at least 80 idioms', () => {
    expect(idioms.length).toBeGreaterThanOrEqual(80);
  });

  it('all idioms have unique IDs', () => {
    const ids = idioms.map(i => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all idioms have unique phrases (no duplicates)', () => {
    const phrases = idioms.map(i => i.idiom.toLowerCase());
    const duplicates = phrases.filter((p, i) => phrases.indexOf(p) !== i);
    expect(duplicates).toEqual([]);
  });

  it('all idioms have required fields', () => {
    for (const idiom of idioms) {
      expect(idiom.idiom).toBeTruthy();
      expect(idiom.actualMeaning).toBeTruthy();
      expect(idiom.meaningEs).toBeTruthy();
      expect(idiom.example).toBeTruthy();
      expect(idiom.level).toBeGreaterThanOrEqual(1);
      expect(idiom.level).toBeLessThanOrEqual(10);
    }
  });

  it('most idioms have origin field (>= 70)', () => {
    const withOrigin = idioms.filter(i => i.origin && i.origin.length > 0);
    expect(withOrigin.length).toBeGreaterThanOrEqual(70);
  });

  it('idioms cover a wide range of levels', () => {
    const coveredLevels = new Set(idioms.map(i => i.level));
    expect(coveredLevels.size).toBeGreaterThanOrEqual(5);
  });

  it('idioms cover multiple categories', () => {
    const categories = new Set(idioms.map(i => i.category));
    expect(categories.size).toBeGreaterThanOrEqual(5);
  });
});

// ─── Conversations ──────────────────────────────────────────────────────────

describe('Conversations Data', () => {
  it('has at least 20 scenarios', () => {
    expect(conversationScenarios.length).toBeGreaterThanOrEqual(20);
  });

  it('all scenarios have unique IDs', () => {
    const ids = conversationScenarios.map(c => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all scenarios have dialogue turns', () => {
    for (const conv of conversationScenarios) {
      expect(conv.dialogue.length).toBeGreaterThan(0);
    }
  });

  it('difficulty 3 scenarios have at least 8 turns', () => {
    const hard = conversationScenarios.filter(c => c.difficulty === 3);
    const tooShort: string[] = [];
    for (const conv of hard) {
      if (conv.dialogue.length < 8) {
        tooShort.push(`${conv.id}: ${conv.dialogue.length} turns`);
      }
    }
    expect(tooShort).toEqual([]);
  });

  it('covers all difficulty levels (1, 2, 3)', () => {
    const diffs = new Set(conversationScenarios.map(c => c.difficulty));
    expect(diffs.has(1)).toBe(true);
    expect(diffs.has(2)).toBe(true);
    expect(diffs.has(3)).toBe(true);
  });

  it('covers multiple categories', () => {
    const cats = new Set(conversationScenarios.map(c => c.category));
    expect(cats.size).toBeGreaterThanOrEqual(3);
  });

  it('user turns include dialogue options', () => {
    let totalUserOptions = 0;
    for (const conv of conversationScenarios) {
      for (const turn of conv.dialogue) {
        if (turn.userOptions && turn.userOptions.length > 0) {
          totalUserOptions++;
        }
      }
    }
    expect(totalUserOptions).toBeGreaterThan(0);
  });
});

// ─── Reading Texts ──────────────────────────────────────────────────────────

describe('Reading Texts Data', () => {
  it('has at least 15 texts', () => {
    expect(readingTexts.length).toBeGreaterThanOrEqual(15);
  });

  it('all texts have unique IDs', () => {
    const ids = readingTexts.map(r => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all texts have text content and questions', () => {
    const missing: string[] = [];
    for (const rt of readingTexts) {
      if (!rt.text) missing.push(`${rt.id}: missing text`);
      if (!rt.questions || rt.questions.length === 0) missing.push(`${rt.id}: missing questions`);
    }
    expect(missing).toEqual([]);
  });

  it('covers multiple genres', () => {
    const genres = new Set(readingTexts.map(r => r.genre));
    expect(genres.size).toBeGreaterThanOrEqual(4);
  });

  it('covers multiple CEFR levels', () => {
    const levels = new Set(readingTexts.map(r => r.level));
    expect(levels.size).toBeGreaterThanOrEqual(4);
  });
});

// ─── Listening Exercises ────────────────────────────────────────────────────

describe('Listening Exercises Data', () => {
  it('has at least 10 exercises', () => {
    expect(listeningExercises.length).toBeGreaterThanOrEqual(10);
  });

  it('all exercises have unique IDs', () => {
    const ids = listeningExercises.map(e => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all exercises have audioText and questions', () => {
    for (const ex of listeningExercises) {
      expect(ex.audioText).toBeTruthy();
      expect(ex.questions.length).toBeGreaterThan(0);
    }
  });
});

// ─── Writing Scaffolds ──────────────────────────────────────────────────────

describe('Writing Scaffolds Data', () => {
  it('has at least 8 scaffolds', () => {
    expect(writingScaffolds.length).toBeGreaterThanOrEqual(8);
  });

  it('all scaffolds have unique IDs', () => {
    const ids = writingScaffolds.map(w => w.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ─── Grammar Contrast Pairs ────────────────────────────────────────────────

describe('Grammar Contrast Pairs Data', () => {
  it('has at least 10 pairs', () => {
    expect(grammarContrastPairs.length).toBeGreaterThanOrEqual(10);
  });

  it('all pairs have unique IDs', () => {
    const ids = grammarContrastPairs.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all pairs have tense1 and tense2 with required fields', () => {
    for (const pair of grammarContrastPairs) {
      expect(pair.tense1).toBeDefined();
      expect(pair.tense1.name).toBeTruthy();
      expect(pair.tense1.formula).toBeTruthy();
      expect(pair.tense2).toBeDefined();
      expect(pair.tense2.name).toBeTruthy();
      expect(pair.tense2.formula).toBeTruthy();
    }
  });

  it('all pairs have conceptual difference explanation', () => {
    for (const pair of grammarContrastPairs) {
      expect(pair.conceptualDifference).toBeTruthy();
    }
  });
});

// ─── L1 Interference Rules ─────────────────────────────────────────────────

describe('L1 Interference Rules Data', () => {
  it('has at least 10 rules', () => {
    expect(l1InterferenceRules.length).toBeGreaterThanOrEqual(10);
  });

  it('all rules have unique IDs', () => {
    const ids = l1InterferenceRules.map(r => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all rules have practiceItems', () => {
    const missing: string[] = [];
    for (const rule of l1InterferenceRules) {
      if (!rule.practiceItems || rule.practiceItems.length === 0) {
        missing.push(rule.id);
      }
    }
    expect(missing).toEqual([]);
  });

  it('l1-morph-gender has at least 5 practice items', () => {
    const genderRule = l1InterferenceRules.find(r => r.id === 'l1-morph-gender');
    expect(genderRule).toBeDefined();
    expect(genderRule!.practiceItems.length).toBeGreaterThanOrEqual(5);
  });

  it('all rules have examples with wrongEnglish and correctEnglish', () => {
    for (const rule of l1InterferenceRules) {
      expect(rule.examples.length).toBeGreaterThan(0);
      for (const ex of rule.examples) {
        expect(ex.wrongEnglish).toBeTruthy();
        expect(ex.correctEnglish).toBeTruthy();
      }
    }
  });
});

// ─── Production Exercises ───────────────────────────────────────────────────

describe('Production Exercises Data', () => {
  it('has free-writing prompts', () => {
    expect(freeWritingPrompts.length).toBeGreaterThan(0);
  });

  it('has dictation sentences', () => {
    expect(dictationSentences.length).toBeGreaterThan(0);
  });

  it('has C1 free-writing prompts', () => {
    const c1Prompts = freeWritingPrompts.filter(
      (p: any) => p.level === 'C1' || p.cefrLevel === 'C1'
    );
    expect(c1Prompts.length).toBeGreaterThanOrEqual(3);
  });

  it('has hard dictation sentences', () => {
    const hardSentences = dictationSentences.filter(
      (s: any) => s.difficulty === 'hard'
    );
    expect(hardSentences.length).toBeGreaterThanOrEqual(3);
  });
});

// ─── Productive Activities ──────────────────────────────────────────────────

describe('Productive Activities Data', () => {
  it('has at least 10 activities', () => {
    expect(productiveActivities.length).toBeGreaterThanOrEqual(10);
  });

  it('all activities have unique IDs', () => {
    const ids = productiveActivities.map(a => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ─── Exercise Generator ─────────────────────────────────────────────────────

describe('Exercise Generator', () => {
  it('c1-cleft-sentences has error correction templates', () => {
    const results = generateErrorCorrections('c1-cleft-sentences', 3);
    expect(results.length).toBeGreaterThan(0);
  });

  it('c1-passive-reporting has error correction templates', () => {
    const results = generateErrorCorrections('c1-passive-reporting', 3);
    expect(results.length).toBeGreaterThan(0);
  });

  it('hasGeneratorTemplates returns true for known grammar points', () => {
    expect(hasGeneratorTemplates('a1-present-simple')).toBe(true);
    expect(hasGeneratorTemplates('b1-present-perfect')).toBe(true);
  });

  it('generates exercises for various levels', () => {
    const a1 = generateErrorCorrections('a1-present-simple', 3);
    expect(a1.length).toBeGreaterThan(0);
  });
});

// ─── Cross-Data Consistency ─────────────────────────────────────────────────

describe('Cross-Data Consistency', () => {
  it('grammar theory modules referenced in tasks exist', () => {
    const theoryIds = new Set(grammarTheory.map(m => m.id));
    const missingRefs: string[] = [];

    for (const level of levels) {
      for (const task of level.tasks) {
        if (task.grammarTheoryIds) {
          for (const ref of task.grammarTheoryIds) {
            if (!theoryIds.has(ref)) {
              missingRefs.push(`Level ${level.id}, Task ${task.id} refs "${ref}"`);
            }
          }
        }
      }
    }

    expect(missingRefs).toEqual([]);
  });
});
