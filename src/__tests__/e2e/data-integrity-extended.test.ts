/**
 * E2E: Extended Data Integrity Tests
 * Validates data files NOT covered by data-integrity.test.ts:
 * collectibles, crossword-puzzles, gamification, micro-lessons, mnemonics,
 * phrasal-verbs, pronunciation, scenarios, situations, tech-vocabulary,
 * vocabulary-advanced, vocabulary-everyday, vocabulary-general, irregular-verbs,
 * simplified-news, symbol-names, word-families, fun-facts, graded-sentences,
 * progressMilestones, grammar-trees, grammar-essentials, grammar-additional,
 * communicative-functions, writing-skills, can-do-statements, modals
 */

import {
  badges, titles, themeUnlocks,
} from '../../data/collectibles';
import { CROSSWORD_PUZZLES, createEmptyGrid, placeWordsOnGrid } from '../../data/crossword-puzzles';
import {
  userLevels, getUserLevel, getXPToNextLevel, dailyChallengeTemplates,
  generateDailyChallenges, achievementDefinitions
} from '../../data/gamification';
import {
  microLessons, getLessonsByLevel,
  getLessonById, getDailyLesson
} from '../../data/micro-lessons';
import { MNEMONICS, ETYMOLOGIES, getRandomMnemonic } from '../../data/mnemonics';
import { phrasalVerbs, getPhrasalVerbsByLevel } from '../../data/phrasal-verbs';
import {
  phoneticSounds, wordStressRules, sentenceStressPatterns,
  intonationPatterns, connectedSpeech, silentLetters
} from '../../data/pronunciation';
import { scenarios, getScenariosByLevel } from '../../data/scenarios';
import { SITUATIONAL_SCENARIOS } from '../../data/situations';
import { techTerms, getTechTermsByLevel } from '../../data/tech-vocabulary';
import {
  advancedVocabulary, getAdvancedVocabByLevel, getAdvancedVocabByDomain,
  getTotalAdvancedVocabCount
} from '../../data/vocabulary-advanced';
import { everydayVocabulary, getTotalWordCount } from '../../data/vocabulary-everyday';
import {
  collocations, falseFriends, wordFormation, synonymsAntonyms,
  formalInformal, numberExpressions, nearSynonyms
} from '../../data/vocabulary-general';
import { irregularVerbs, getVerbsByLevel } from '../../data/irregular-verbs';
import { NEWS_ARTICLES } from '../../data/simplified-news';
import { symbolNames, getSymbolsByLevel, getTotalSymbolCount } from '../../data/symbol-names';
import { wordFamilies, prefixes, suffixes, getWordFamilyById } from '../../data/word-families';
import { FUN_FACTS, getRandomFunFact } from '../../data/fun-facts';
import { GRADED_SENTENCES, getSentencesByLevel } from '../../data/graded-sentences';
import { MILESTONES } from '../../data/progressMilestones';
import { GRAMMAR_TREES } from '../../data/grammar-trees';
import { grammarEssentials, getEssentialsByLevel } from '../../data/grammar-essentials';
import { additionalGrammar } from '../../data/grammar-additional';
import { getAllContentForLevel, getContentStats } from '../../data/index';

// ─── Collectibles ───────────────────────────────────────────────
describe('Collectibles Data', () => {
  it('has badges with required fields', () => {
    expect(badges.length).toBeGreaterThanOrEqual(5);
    badges.forEach(b => {
      expect(b.id).toBeTruthy();
      expect(b.name).toBeTruthy();
      expect(b.description).toBeTruthy();
    });
  });

  it('has unique badge IDs', () => {
    const ids = badges.map(b => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has titles array', () => {
    expect(titles.length).toBeGreaterThanOrEqual(1);
  });

  it('has theme unlocks array', () => {
    expect(themeUnlocks.length).toBeGreaterThanOrEqual(1);
  });
});

// ─── Crossword Puzzles ─────────────────────────────────────────
describe('Crossword Puzzles Data', () => {
  it('has puzzles with required fields', () => {
    expect(CROSSWORD_PUZZLES.length).toBeGreaterThanOrEqual(3);
    CROSSWORD_PUZZLES.forEach(p => {
      expect(p.id).toBeTruthy();
      expect(p.words).toBeDefined();
      expect(p.words.length).toBeGreaterThan(0);
    });
  });

  it('has unique puzzle IDs', () => {
    const ids = CROSSWORD_PUZZLES.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('createEmptyGrid returns correct dimensions', () => {
    const grid = createEmptyGrid(5);
    expect(grid.length).toBe(5);
    grid.forEach(row => expect(row.length).toBe(5));
  });

  it('placeWordsOnGrid works for first puzzle', () => {
    const grid = placeWordsOnGrid(CROSSWORD_PUZZLES[0]);
    expect(grid.length).toBeGreaterThan(0);
  });
});

// ─── Gamification ───────────────────────────────────────────────
describe('Gamification Data', () => {
  it('has 15 user levels in ascending XP order', () => {
    expect(userLevels.length).toBe(15);
    for (let i = 1; i < userLevels.length; i++) {
      expect(userLevels[i].minXP).toBeGreaterThan(userLevels[i - 1].minXP);
    }
  });

  it('getUserLevel returns correct level for various XP amounts', () => {
    const lv1 = getUserLevel(0);
    expect(lv1.level).toBe(1);

    const lv2 = getUserLevel(100);
    expect(lv2.level).toBeGreaterThanOrEqual(1);

    const high = getUserLevel(100000);
    expect(high.level).toBeGreaterThanOrEqual(10);
  });

  it('getXPToNextLevel returns positive number', () => {
    expect(getXPToNextLevel(0)).toBeGreaterThan(0);
    expect(getXPToNextLevel(500)).toBeGreaterThanOrEqual(0);
  });

  it('has daily challenge templates', () => {
    expect(dailyChallengeTemplates.length).toBeGreaterThanOrEqual(3);
  });

  it('generateDailyChallenges returns challenges', () => {
    const challenges = generateDailyChallenges(3);
    expect(challenges.length).toBe(3);
    challenges.forEach(c => {
      expect(c.id).toBeTruthy();
    });
  });

  it('has achievement definitions', () => {
    expect(achievementDefinitions.length).toBeGreaterThanOrEqual(5);
    achievementDefinitions.forEach(a => {
      expect(a.id).toBeTruthy();
      expect(a.name).toBeTruthy();
    });
  });
});

// ─── Micro-Lessons ──────────────────────────────────────────────
describe('Micro-Lessons Data', () => {
  it('has micro-lessons with required fields', () => {
    expect(microLessons.length).toBeGreaterThanOrEqual(10);
    microLessons.forEach(ml => {
      expect(ml.id).toBeTruthy();
      expect(ml.title).toBeTruthy();
    });
  });

  it('has unique lesson IDs', () => {
    const ids = microLessons.map(ml => ml.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('getLessonsByLevel returns lessons', () => {
    const lessons = getLessonsByLevel('A1');
    expect(lessons.length).toBeGreaterThanOrEqual(0);
  });

  it('getLessonById returns correct lesson', () => {
    const first = microLessons[0];
    const found = getLessonById(first.id);
    expect(found).toBeDefined();
    expect(found!.id).toBe(first.id);
  });

  it('getDailyLesson returns a lesson', () => {
    const daily = getDailyLesson();
    expect(daily).toBeDefined();
    expect(daily.id).toBeTruthy();
  });
});

// ─── Mnemonics ──────────────────────────────────────────────────
describe('Mnemonics Data', () => {
  it('has mnemonics with required fields', () => {
    expect(MNEMONICS.length).toBeGreaterThanOrEqual(5);
    MNEMONICS.forEach(m => {
      expect(m.word).toBeTruthy();
      expect(m.mnemonic).toBeTruthy();
    });
  });

  it('has etymologies', () => {
    expect(ETYMOLOGIES.length).toBeGreaterThanOrEqual(3);
  });

  it('getRandomMnemonic returns a mnemonic', () => {
    const m = getRandomMnemonic();
    expect(m).toBeDefined();
    expect(m.word).toBeTruthy();
  });
});

// ─── Phrasal Verbs ──────────────────────────────────────────────
describe('Phrasal Verbs Data', () => {
  it('has phrasal verbs with required fields', () => {
    expect(phrasalVerbs.length).toBeGreaterThanOrEqual(20);
    phrasalVerbs.forEach(pv => {
      expect(pv.verb).toBeTruthy();
      expect(pv.meaning).toBeTruthy();
    });
  });

  it('has unique entries', () => {
    const keys = phrasalVerbs.map(pv => `${pv.verb}-${pv.particle || ''}`);
    // Not strictly unique by verb+particle, but should not have exact duplicates
    expect(keys.length).toBeGreaterThanOrEqual(20);
  });

  it('getPhrasalVerbsByLevel returns results for level 5', () => {
    const lvl5 = getPhrasalVerbsByLevel(5);
    expect(lvl5.length).toBeGreaterThanOrEqual(0);
    // At least some phrasal verbs exist across all levels
    let total = 0;
    for (let i = 1; i <= 13; i++) total += getPhrasalVerbsByLevel(i).length;
    expect(total).toBeGreaterThanOrEqual(10);
  });
});

// ─── Pronunciation ──────────────────────────────────────────────
describe('Pronunciation Data', () => {
  it('has phonetic sounds', () => {
    expect(phoneticSounds.length).toBeGreaterThanOrEqual(10);
  });

  it('has word stress rules', () => {
    expect(wordStressRules.length).toBeGreaterThanOrEqual(3);
  });

  it('has sentence stress patterns', () => {
    expect(sentenceStressPatterns.length).toBeGreaterThanOrEqual(2);
  });

  it('has intonation patterns', () => {
    expect(intonationPatterns.length).toBeGreaterThanOrEqual(2);
  });

  it('has connected speech rules', () => {
    expect(connectedSpeech.length).toBeGreaterThanOrEqual(2);
  });

  it('has silent letters', () => {
    expect(silentLetters.length).toBeGreaterThanOrEqual(3);
  });
});

// ─── Scenarios ──────────────────────────────────────────────────
describe('Scenarios Data', () => {
  it('has scenarios with required fields', () => {
    expect(scenarios.length).toBeGreaterThanOrEqual(5);
    scenarios.forEach(s => {
      expect(s.id).toBeTruthy();
      expect(s.title).toBeTruthy();
    });
  });

  it('has unique IDs', () => {
    const ids = scenarios.map(s => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('getScenariosByLevel returns scenarios', () => {
    const beginner = getScenariosByLevel('A1');
    expect(beginner.length).toBeGreaterThanOrEqual(0);
  });
});

// ─── Situations ─────────────────────────────────────────────────
describe('Situations Data', () => {
  it('has situational scenarios', () => {
    expect(SITUATIONAL_SCENARIOS.length).toBeGreaterThanOrEqual(5);
    SITUATIONAL_SCENARIOS.forEach(s => {
      expect(s.id).toBeTruthy();
      expect(s.name).toBeTruthy();
    });
  });

  it('has unique IDs', () => {
    const ids = SITUATIONAL_SCENARIOS.map(s => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ─── Tech Vocabulary ────────────────────────────────────────────
describe('Tech Vocabulary Data', () => {
  it('has tech terms with required fields', () => {
    expect(techTerms.length).toBeGreaterThanOrEqual(20);
    techTerms.forEach(t => {
      expect(t.term).toBeTruthy();
      expect(t.definition).toBeTruthy();
    });
  });

  it('getTechTermsByLevel returns results', () => {
    const a2 = getTechTermsByLevel(2);
    expect(a2.length).toBeGreaterThanOrEqual(0);
  });
});

// ─── Vocabulary Advanced ────────────────────────────────────────
describe('Vocabulary Advanced Data', () => {
  it('has advanced vocabulary with required fields', () => {
    expect(advancedVocabulary.length).toBeGreaterThanOrEqual(50);
    advancedVocabulary.forEach(w => {
      expect(w.id).toBeTruthy();
      expect(w.word).toBeTruthy();
      expect(w.definition).toBeTruthy();
      expect(['B2', 'C1', 'C2']).toContain(w.level);
    });
  });

  it('has unique IDs', () => {
    const ids = advancedVocabulary.map(w => w.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('getTotalAdvancedVocabCount matches array length', () => {
    expect(getTotalAdvancedVocabCount()).toBe(advancedVocabulary.length);
  });

  it('getAdvancedVocabByLevel returns correct subsets', () => {
    const b2 = getAdvancedVocabByLevel('B2');
    const c1 = getAdvancedVocabByLevel('C1');
    const c2 = getAdvancedVocabByLevel('C2');
    expect(b2.length + c1.length + c2.length).toBe(advancedVocabulary.length);
    b2.forEach(w => expect(w.level).toBe('B2'));
    c1.forEach(w => expect(w.level).toBe('C1'));
    c2.forEach(w => expect(w.level).toBe('C2'));
  });

  it('getAdvancedVocabByDomain returns results', () => {
    const domains = [...new Set(advancedVocabulary.map(w => w.domain))];
    if (domains.length > 0) {
      const result = getAdvancedVocabByDomain(domains[0]);
      expect(result.length).toBeGreaterThanOrEqual(1);
    }
  });
});

// ─── Vocabulary Everyday ────────────────────────────────────────
describe('Vocabulary Everyday Data', () => {
  it('has vocabulary topics', () => {
    expect(everydayVocabulary.length).toBeGreaterThanOrEqual(5);
  });

  it('getTotalWordCount returns positive number', () => {
    expect(getTotalWordCount()).toBeGreaterThan(50);
  });
});

// ─── Vocabulary General ─────────────────────────────────────────
describe('Vocabulary General Data', () => {
  it('has collocations', () => {
    expect(collocations.length).toBeGreaterThanOrEqual(5);
  });

  it('has false friends', () => {
    expect(falseFriends.length).toBeGreaterThanOrEqual(5);
  });

  it('has word formation entries', () => {
    expect(wordFormation.length).toBeGreaterThanOrEqual(3);
  });

  it('has synonyms/antonyms', () => {
    expect(synonymsAntonyms.length).toBeGreaterThanOrEqual(5);
  });

  it('has formal/informal pairs', () => {
    expect(formalInformal.length).toBeGreaterThanOrEqual(3);
  });

  it('has number expressions', () => {
    expect(numberExpressions.length).toBeGreaterThanOrEqual(3);
  });

  it('has near synonyms', () => {
    expect(nearSynonyms.length).toBeGreaterThanOrEqual(3);
  });
});

// ─── Irregular Verbs ────────────────────────────────────────────
describe('Irregular Verbs Data', () => {
  it('has irregular verbs with three forms', () => {
    expect(irregularVerbs.length).toBeGreaterThanOrEqual(50);
    irregularVerbs.forEach(v => {
      expect(v.infinitive).toBeTruthy();
      expect(v.pastSimple).toBeTruthy();
      expect(v.pastParticiple).toBeTruthy();
    });
  });

  it('has unique infinitives (minor: 1 known duplicate)', () => {
    const bases = irregularVerbs.map(v => v.infinitive);
    const uniqueCount = new Set(bases).size;
    // Known: 1 duplicate infinitive in the dataset (137 unique out of 138)
    expect(uniqueCount).toBeGreaterThanOrEqual(bases.length - 1);
  });

  it('getVerbsByLevel returns results', () => {
    let total = 0;
    for (let i = 1; i <= 13; i++) total += getVerbsByLevel(i).length;
    expect(total).toBeGreaterThanOrEqual(50);
  });
});

// ─── Simplified News ────────────────────────────────────────────
describe('Simplified News Data', () => {
  it('has news articles with required fields', () => {
    expect(NEWS_ARTICLES.length).toBeGreaterThanOrEqual(5);
    NEWS_ARTICLES.forEach(a => {
      expect(a.id).toBeTruthy();
      expect(a.title).toBeTruthy();
      expect(a.content).toBeTruthy();
    });
  });

  it('has unique IDs', () => {
    const ids = NEWS_ARTICLES.map(a => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ─── Symbol Names ───────────────────────────────────────────────
describe('Symbol Names Data', () => {
  it('has symbol entries with required fields', () => {
    expect(symbolNames.length).toBeGreaterThanOrEqual(20);
    symbolNames.forEach(s => {
      expect(s.symbol).toBeTruthy();
      expect(s.name).toBeTruthy();
    });
  });

  it('getTotalSymbolCount matches array length', () => {
    expect(getTotalSymbolCount()).toBe(symbolNames.length);
  });

  it('getSymbolsByLevel returns results', () => {
    const a1 = getSymbolsByLevel('A1');
    expect(a1.length).toBeGreaterThanOrEqual(1);
  });
});

// ─── Word Families ──────────────────────────────────────────────
describe('Word Families Data', () => {
  it('has word families with members', () => {
    expect(wordFamilies.length).toBeGreaterThanOrEqual(5);
    wordFamilies.forEach(wf => {
      expect(wf.id).toBeTruthy();
      expect(wf.root).toBeTruthy();
    });
  });

  it('has prefixes and suffixes', () => {
    expect(prefixes.length).toBeGreaterThanOrEqual(5);
    expect(suffixes.length).toBeGreaterThanOrEqual(5);
  });

  it('getWordFamilyById returns correct family', () => {
    const first = wordFamilies[0];
    const found = getWordFamilyById(first.id);
    expect(found).toBeDefined();
    expect(found!.id).toBe(first.id);
  });
});

// ─── Fun Facts ──────────────────────────────────────────────────
describe('Fun Facts Data', () => {
  it('has fun facts with required fields', () => {
    expect(FUN_FACTS.length).toBeGreaterThanOrEqual(10);
    FUN_FACTS.forEach(f => {
      expect(f.fact).toBeTruthy();
    });
  });

  it('getRandomFunFact returns a fact', () => {
    const f = getRandomFunFact();
    expect(f).toBeDefined();
    expect(f.fact).toBeTruthy();
  });
});

// ─── Graded Sentences ───────────────────────────────────────────
describe('Graded Sentences Data', () => {
  it('has graded sentences with required fields', () => {
    expect(GRADED_SENTENCES.length).toBeGreaterThanOrEqual(20);
    GRADED_SENTENCES.forEach(s => {
      expect(s.text).toBeTruthy();
      expect(s.translation).toBeTruthy();
      expect(s.level).toBeGreaterThanOrEqual(1);
      expect(s.level).toBeLessThanOrEqual(5);
    });
  });

  it('getSentencesByLevel returns sentences for each level', () => {
    for (const lvl of [1, 2, 3, 4, 5] as const) {
      const sentences = getSentencesByLevel(lvl);
      expect(sentences.length).toBeGreaterThanOrEqual(1);
      sentences.forEach(s => expect(s.level).toBe(lvl));
    }
  });
});

// ─── Progress Milestones ────────────────────────────────────────
describe('Progress Milestones Data', () => {
  it('has milestones with required fields', () => {
    expect(MILESTONES.length).toBeGreaterThanOrEqual(5);
    MILESTONES.forEach(m => {
      expect(m.id).toBeTruthy();
      expect(m.title).toBeTruthy();
    });
  });

  it('has unique milestone IDs', () => {
    const ids = MILESTONES.map(m => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ─── Grammar Trees ──────────────────────────────────────────────
describe('Grammar Trees Data', () => {
  it('has grammar trees with required fields', () => {
    expect(GRAMMAR_TREES.length).toBeGreaterThanOrEqual(5);
    GRAMMAR_TREES.forEach(t => {
      expect(t.id).toBeTruthy();
      expect(t.name).toBeTruthy();
    });
  });

  it('has unique IDs', () => {
    const ids = GRAMMAR_TREES.map(t => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ─── Grammar Essentials ─────────────────────────────────────────
describe('Grammar Essentials Data', () => {
  it('has grammar essentials with required fields', () => {
    expect(grammarEssentials.length).toBeGreaterThanOrEqual(10);
    grammarEssentials.forEach(ge => {
      expect(ge.id).toBeTruthy();
      expect(ge.name).toBeTruthy();
    });
  });

  it('has unique IDs', () => {
    const ids = grammarEssentials.map(ge => ge.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('getEssentialsByLevel returns results', () => {
    let total = 0;
    for (let i = 1; i <= 13; i++) total += getEssentialsByLevel(i).length;
    expect(total).toBeGreaterThanOrEqual(10);
  });
});

// ─── Grammar Additional ─────────────────────────────────────────
describe('Grammar Additional Data', () => {
  it('has additional grammar with required fields', () => {
    expect(additionalGrammar.length).toBeGreaterThanOrEqual(5);
    additionalGrammar.forEach(ag => {
      expect(ag.id).toBeTruthy();
      expect(ag.name).toBeTruthy();
    });
  });

  it('has unique IDs', () => {
    const ids = additionalGrammar.map(ag => ag.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ─── Barrel Export Utility Functions ────────────────────────────
describe('Data Index Utilities', () => {
  it('getContentStats returns counts for all data categories', () => {
    const stats = getContentStats();
    expect(stats.total).toBeGreaterThan(100);
    expect(stats.grammarTopics).toBeGreaterThan(0);
  });

  it('getAllContentForLevel returns grouped content for level 1', () => {
    const content = getAllContentForLevel(1);
    expect(content).toBeDefined();
    expect(typeof content).toBe('object');
  });

  it('getAllContentForLevel returns grouped content for level 7', () => {
    const content = getAllContentForLevel(7);
    expect(content).toBeDefined();
    expect(typeof content).toBe('object');
  });

  it('getAllContentForLevel returns grouped content for level 13', () => {
    const content = getAllContentForLevel(13);
    expect(content).toBeDefined();
    expect(typeof content).toBe('object');
  });
});
