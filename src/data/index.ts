// Central export file for all English learning data
// Este archivo centraliza todos los datos de aprendizaje de inglés

// Local imports used by helper functions below (re-exports don't create local bindings)
import { grammarTopics, getGrammarByLevel } from './grammar';
import { grammarEssentials, getEssentialsByLevel } from './grammar-essentials';
import { additionalGrammar, getAdditionalGrammarByLevel } from './grammar-additional';
import { modalsExtended, getModalsByLevel } from './modals-extended';
import { semiModals, getSemiModalsByLevel } from './modals-semi';
import { phrasalVerbs, getPhrasalVerbsByLevel } from './phrasal-verbs';
import { irregularVerbs, getVerbsByLevel } from './irregular-verbs';
import { idioms, getIdiomsByLevel } from './idioms';
import { techTerms, getTechTermsByLevel } from './tech-vocabulary';
import { communicativeFunctions, getFunctionsByLevel } from './communicative-functions';
import { extendedFunctions, getExtendedFunctionsByLevel } from './communicative-functions-extended';
import {
  collocations,
  falseFriends,
  wordFormation,
  synonymsAntonyms,
  formalInformal,
  numberExpressions,
  getFalseFriendsByLevel,
} from './vocabulary-general';
import { everydayVocabulary, getVocabularyByLevel } from './vocabulary-everyday';
import {
  phoneticSounds,
  wordStressRules,
  sentenceStressPatterns,
  intonationPatterns,
  connectedSpeech,
  silentLetters,
  getContentByLevel,
} from './pronunciation';
import { writingSkills, getWritingByLevel } from './writing-skills';
import { grammarContrastPairs, getContrastPairsByLevel } from './grammar-contrast-pairs';
import { grammaticalFalseFriends, getGrammaticalFalseFriendsByLevel } from './grammatical-false-friends';
import { vocabScenarios, getScenariosByLevel } from './contextual-vocabulary';
import { writingScaffolds, getWritingScaffoldsByLevel } from './writing-scaffolds';
import { readingStrategies, getReadingStrategiesByLevel } from './reading-strategies';
import { errorClassifications, getErrorsByLevel } from './error-classification';
import { l1InterferenceRules, getL1RulesByLevel } from './l1-interference';
import { canDoStatements, getCanDoByLevel } from './can-do-statements';
import { grammarTheory, getTheoryByLevel } from './grammar-theory';
import { symbolNames, getSymbolsByLevel } from './symbol-names';
import { readingTexts, getReadingTextsByLevel as getReadingTextsByLevelHelper } from './reading-texts';
import { advancedVocabulary, getAdvancedVocabByLevel } from './vocabulary-advanced';
import { productiveActivities, getActivitiesByCefrLevel } from './productive-activities';
import { collocationsByLevel, getCollocationsByLevel as getCollocationsByCefrLevel } from './collocations-by-level';
import {
  vocabularyIntermediate,
  getVocabularyIntermediateByLevel,
} from './vocabulary-intermediate';
import { conversationScenarios } from './conversations';
import {
  freeWritingPrompts,
  dictationSentences,
  translationExercises,
  openBlankExercises,
  getExercisesByLevel,
} from './production-exercises';

// Levels
export * from './levels';

// Grammar (Verb Tenses, Conditionals, etc.)
export { 
  grammarTopics, 
  getGrammarByLevel, 
  getGrammarByCategory 
} from './grammar';
export type { GrammarTopic } from './grammar';

// Grammar Essentials (Articles, Pronouns, Prepositions, etc.)
export {
  grammarEssentials,
  getEssentialsByCategory,
  getEssentialsByLevel,
  getEssentialsByPriority
} from './grammar-essentials';
export type { GrammarEssential } from './grammar-essentials';

// Grammar Additional (Comparatives, Tag Questions, Indirect Questions, etc.)
export {
  additionalGrammar,
  getAdditionalGrammarByCategory,
  getAdditionalGrammarByLevel,
  getAdditionalGrammarByPriority
} from './grammar-additional';
export type { AdditionalGrammar } from './grammar-additional';

// Modals Extended (May, Might, Shall, Modal Perfects, etc.)
export {
  modalsExtended,
  getModalsByLevel
} from './modals-extended';
export type { ModalVerb } from './modals-extended';

// Semi-Modals (Be able to, Be supposed to, etc.)
export {
  semiModals,
  getSemiModalsByLevel
} from './modals-semi';
export type { SemiModal } from './modals-semi';

// Phrasal Verbs
export { 
  phrasalVerbs, 
  getPhrasalVerbsByCategory, 
  getPhrasalVerbsByLevel, 
  getPhrasalVerbsByVerb 
} from './phrasal-verbs';
export type { PhrasalVerb } from './phrasal-verbs';

// Irregular Verbs
export { 
  irregularVerbs, 
  getVerbsByFrequency, 
  getVerbsByLevel as getIrregularVerbsByLevel, 
  getVerbsByCategory as getIrregularVerbsByCategory,
  searchVerb 
} from './irregular-verbs';
export type { IrregularVerb } from './irregular-verbs';

// Idioms & Expressions
export { 
  idioms, 
  getIdiomsByCategory, 
  getIdiomsByLevel, 
  getIdiomsByContext,
  searchIdiom 
} from './idioms';
export type { Idiom } from './idioms';

// Technical & Workplace Vocabulary
export { 
  techTerms, 
  getTechTermsByCategory, 
  getTechTermsByLevel,
  searchTechTerm 
} from './tech-vocabulary';
export type { TechTerm } from './tech-vocabulary';

// Communicative Functions
export {
  communicativeFunctions,
  getFunctionsByCategory,
  getFunctionsByLevel
} from './communicative-functions';
export type { CommunicativeFunction } from './communicative-functions';

// Extended Communicative Functions
export {
  extendedFunctions,
  getExtendedFunctionsByCategory,
  getExtendedFunctionsByLevel
} from './communicative-functions-extended';
export type { ExtendedFunction } from './communicative-functions-extended';

// General Vocabulary (Collocations, False Friends, Word Formation, etc.)
export {
  collocations,
  falseFriends,
  wordFormation,
  synonymsAntonyms,
  formalInformal,
  numberExpressions,
  nearSynonyms,
  getCollocationsByVerb,
  getFalseFriendsByLevel,
  getWordFormationByType,
  getNearSynonymsByLevel
} from './vocabulary-general';
export type { 
  Collocation, 
  FalseFriend, 
  WordFormation, 
  SynonymAntonym, 
  FormalInformal, 
  NumberExpression,
  NearSynonymSet,
  NearSynonymWord
} from './vocabulary-general';

// Cultural Notes
export {
  culturalNotes,
  getCulturalNotesByLevel,
  getCulturalNotesByCategory,
  getCulturalNotesByRegion,
  getRandomCulturalNote,
  getCulturalNoteById
} from './cultural-notes';
export type { CulturalNoteData } from './cultural-notes';

// Everyday Vocabulary by Topics (with Spanish pronunciation)
export {
  everydayVocabulary,
  getVocabularyByTopic,
  getVocabularyByLevel,
  searchWord,
  getTotalWordCount
} from './vocabulary-everyday';
export type { VocabularyTopic, EverydayWord } from './vocabulary-everyday';

// Pronunciation (Phonetics, Stress, Intonation, etc.)
export {
  phoneticSounds,
  wordStressRules,
  sentenceStressPatterns,
  intonationPatterns,
  connectedSpeech,
  silentLetters,
  getSoundsByType,
  getSoundsByCategory,
  getContentByLevel as getPronunciationByLevel
} from './pronunciation';
export type {
  PhoneticSound,
  WordStressRule,
  SentenceStressPattern,
  IntonationPattern,
  ConnectedSpeech,
  SilentLetter
} from './pronunciation';

// Writing Skills (Emails, Punctuation, Paragraphs, etc.)
export {
  writingSkills,
  getWritingByCategory,
  getWritingByLevel
} from './writing-skills';
export type { WritingTopic } from './writing-skills';

// Grammar Contrast Pairs (Present Simple vs Continuous, etc.)
export {
  grammarContrastPairs,
  getContrastPairsByLevel,
  getContrastPairById
} from './grammar-contrast-pairs';
export type { ContrastPair } from './grammar-contrast-pairs';

// Grammatical False Friends (Spanish → English transfer errors)
export {
  grammaticalFalseFriends,
  getGrammaticalFalseFriendsByLevel,
  getGrammaticalFalseFriendsByCategory
} from './grammatical-false-friends';
export type { GrammaticalFalseFriend } from './grammatical-false-friends';

// Contextual Vocabulary Scenarios
export {
  vocabScenarios,
  getScenariosByLevel,
  getScenarioById
} from './contextual-vocabulary';
export type { VocabScenario } from './contextual-vocabulary';

// Writing Scaffolds (progressive writing tasks by CEFR level)
export {
  writingScaffolds,
  getWritingScaffoldsByLevel,
  getWritingScaffoldsByGenre
} from './writing-scaffolds';
export type { WritingScaffold } from './writing-scaffolds';

// Reading Strategies
export {
  readingStrategies,
  getReadingStrategiesByLevel,
  getReadingStrategyById
} from './reading-strategies';
export type { ReadingStrategy } from './reading-strategies';

// Error Classification System
export {
  errorClassifications,
  getErrorsByType,
  getErrorsByLevel,
  getErrorsByCategory,
  classifyError
} from './error-classification';
export type { ErrorClassification } from './error-classification';

// L1 Interference Layer (Spanish → English)
export {
  l1InterferenceRules,
  getL1RulesByArea,
  getL1RulesByLevel,
  getL1RuleById
} from './l1-interference';
export type { L1InterferenceRule } from './l1-interference';

// Can-Do Statements (CEFR-aligned)
export {
  canDoStatements,
  getCanDoByLevel,
  getCanDoBySkill,
  getCanDoByLevelAndSkill,
  getLevelCompletionPercentage
} from './can-do-statements';
export type { CanDoStatement } from './can-do-statements';

// Grammar Theory (Progressive A1→C1 modules with L1 contrast and exercises)
export {
  grammarTheory,
  getTheoryByLevel,
  getTheoryByCefrLevel,
  getTheoryByCategory,
  getTheoryById,
  getTheoryByPriority,
  getPrerequisiteChain
} from './grammar-theory';
export type { GrammarTheoryModule } from './grammar-theory';

// Symbol Names (Punctuation and keyboard symbols with Spanish phonetics)
export {
  symbolNames,
  getSymbolsByLevel,
  getSymbolsByCategory,
  searchSymbol,
  getSymbolByName,
  getTotalSymbolCount
} from './symbol-names';
export type { SymbolEntry, SymbolCategory } from './symbol-names';

// Graduated Reading Texts (A1→C1 with comprehension questions and strategies)
export {
  readingTexts,
  getReadingTextsByLevel,
  getReadingTextsByCefrLevel,
  getReadingTextsByGenre,
  getReadingTextById,
  getReadingTextsByTopic
} from './reading-texts';
export type { ReadingText } from './reading-texts';

// Advanced Vocabulary C1–C2
export {
  advancedVocabulary,
  getAdvancedVocabByLevel,
  getAdvancedVocabByDomain,
  getAdvancedVocabByPartOfSpeech,
  getAdvancedVocabByRegister,
  searchAdvancedVocab,
  getAdvancedVocabById,
  getAdvancedVocabWithErrors,
  getTotalAdvancedVocabCount
} from './vocabulary-advanced';
export type { AdvancedWord } from './vocabulary-advanced';

// Exercise Generator (parametric unlimited exercises from templates)
export {
  generateFillBlanks,
  generateTransformations,
  generateErrorCorrections,
  generateMultipleChoice,
  generateMixedPractice,
  hasGeneratorTemplates,
  getModulesWithGenerators
} from './exercise-generator';
export type { GeneratedExercise, ExerciseType } from './exercise-generator';

// Productive Activities (picture-labelling, sentence-ordering, paraphrase, register-swap, argument-builder)
export {
  productiveActivities,
  getActivitiesByType,
  getActivitiesByLevel,
  getActivitiesByCefrLevel,
  getActivitiesBySkill,
  getActivityById,
  getActivitiesByTopic,
  getTotalProductiveActivityCount
} from './productive-activities';
export type {
  ProductiveActivity,
  ProductiveActivityType,
  PictureLabellingActivity,
  SentenceOrderingActivity,
  ParaphraseChallengeActivity,
  RegisterSwapActivity,
  ArgumentBuilderActivity
} from './productive-activities';

// Collocations by CEFR level
export {
  collocationsByLevel,
  getCollocationsByLevel,
  getAllCollocations,
  searchCollocations
} from './collocations-by-level';
export type { CollocationEntry, CollocationLevel } from './collocations-by-level';

// B1 Intermediate Vocabulary by Semantic Fields
export {
  vocabularyIntermediate,
  getVocabularyIntermediateByLevel
} from './vocabulary-intermediate';
export type { VocabularyEntry, SemanticField } from './vocabulary-intermediate';

// Conversation Scenarios (role-play dialogues)
export {
  conversationScenarios,
  getScenariosByCategory,
  getScenariosByDifficulty,
  getScenarioById as getConversationScenarioById
} from './conversations';
export type { ConversationScenario } from '../types';

// Production Exercises (free-writing, dictation, etc.)
export {
  freeWritingPrompts,
  dictationSentences,
  translationExercises,
  openBlankExercises,
  getExercisesByLevel,
  getRandomExercises
} from './production-exercises';
export type {
  FreeWritingPrompt,
  DictationSentence,
  TranslationExercise,
  OpenBlankExercise
} from './production-exercises';

// Grammar Trees (visual interactive grammar structure visualization)
export {
  GRAMMAR_TREES
} from './grammar-trees';
export type {
  GrammarTree,
  GrammarStructure,
  GrammarExample,
  GrammarMistake,
  TimelinePoint,
  GrammarComparison
} from './grammar-trees';

// Micro-Lessons (short, daily vocabulary and grammar micro-content)
export {
  microLessons,
  getLessonsByCategory,
  getLessonsByLevel as getMicroLessonsByLevel,
  getRandomLesson,
  getLessonById,
  getDailyLesson
} from './micro-lessons';
export type { MicroLesson, LessonContent, QuickQuizItem } from './micro-lessons';

// Mnemonics & Etymology (memory aids and word roots)
export {
  MNEMONICS,
  ETYMOLOGIES,
  getMnemonic,
  getEtymology,
  getRandomMnemonic,
  getMnemonicsByCategory,
  findRelatedByEtymology
} from './mnemonics';
export type { Mnemonic, Etymology } from './mnemonics';

// Fun Facts (engaging English language facts and trivia)
export {
  FUN_FACTS,
  getRandomFunFact,
  getRelatedFunFact,
  getFactsByCategory
} from './fun-facts';
export type { FunFact } from './fun-facts';

// Graded Sentences (CEFR-leveled example sentences for patterns)
export {
  GRADED_SENTENCES,
  getSentencesByLevel,
  getSentencesByGrammar,
  getSentencesByVocabulary,
  getNextSentence,
  getRandomSentence
} from './graded-sentences';
export type { GradedSentence } from './graded-sentences';

// Listening Exercises (audio-based comprehension with TTS support)
export {
  availableAccents,
  speechSpeeds,
  listeningExercises,
  getListeningByLevel,
  getListeningByDifficulty,
  getListeningByType,
  getListeningById,
  speakText,
  checkTTSSupport
} from './listening-exercises';

// Simplified News (graded news articles A2–B2)
export {
  NEWS_ARTICLES
} from './simplified-news';
export type { NewsArticle } from './simplified-news';

// Situational Scenarios (real-world language situations)
export {
  SITUATIONAL_SCENARIOS
} from './situations';
export type {
  SituationalScenario,
  SituationalPhrase,
  SituationalDialogue
} from './situations';

// Interactive Scenarios (branching dialogues with user choices)
export {
  scenarios as interactiveScenarios,
  getScenariosByDifficulty as getInteractiveScenariosByDifficulty,
  getScenariosByLevel as getInteractiveScenariosByLevel,
  getScenariosByTag
} from './scenarios';
export type {
  Scenario as InteractiveScenario,
  Choice as ScenarioChoice,
  DialogueLine
} from './scenarios';

// Word Families (prefixes, suffixes, derivational morphology)
export {
  prefixes,
  suffixes,
  wordFamilies,
  getWordFamilyById,
  getWordsByType,
  findWordInFamilies
} from './word-families';
export type { WordFamily, WordMember, Prefix, Suffix } from './word-families';

// Progress Milestones (achievement system and milestone definitions)
export {
  MILESTONES,
  milestonesService
} from './progressMilestones';
export type { Milestone, UserMilestone } from './progressMilestones';

// Collectibles (badges, titles, themes for gamification)
export {
  badges,
  titles,
  themeUnlocks,
  getUnlockedBadges,
  getUnlockedTitles,
  getUnlockedThemes,
  getNextUnlockable
} from './collectibles';
export type { Collectible, UserTitle, ThemeUnlock } from './collectibles';

// Crossword Puzzles (vocabulary reinforcement through crosswords)
export {
  CROSSWORD_PUZZLES,
  createEmptyGrid,
  placeWordsOnGrid,
  checkCrosswordAnswer
} from './crossword-puzzles';
export type { CrosswordPuzzle, CrosswordWord } from './crossword-puzzles';

// Gamification (XP levels, achievements, daily challenges)
export {
  userLevels,
  getUserLevel,
  getXPToNextLevel,
  gamificationConfig,
  dailyChallengeTemplates,
  generateDailyChallenges,
  achievementDefinitions,
  checkAchievements,
  calculateBonusXP
} from './gamification';

// Utility function to get all content for a specific level
export const getAllContentForLevel = (level: number) => {
  return {
    grammar: getGrammarByLevel(level),
    grammarEssentials: getEssentialsByLevel(level),
    grammarAdditional: getAdditionalGrammarByLevel(level),
    modals: getModalsByLevel(level),
    semiModals: getSemiModalsByLevel(level),
    phrasalVerbs: getPhrasalVerbsByLevel(level),
    irregularVerbs: getVerbsByLevel(level),
    idioms: getIdiomsByLevel(level),
    techTerms: getTechTermsByLevel(level),
    communicativeFunctions: getFunctionsByLevel(level),
    extendedFunctions: getExtendedFunctionsByLevel(level),
    falseFriends: getFalseFriendsByLevel(level),
    everydayVocabulary: getVocabularyByLevel(level),
    pronunciation: getContentByLevel(level),
    writing: getWritingByLevel(level),
    grammarContrastPairs: getContrastPairsByLevel(level),
    grammaticalFalseFriends: getGrammaticalFalseFriendsByLevel(level),
    vocabScenarios: getScenariosByLevel(level),
    writingScaffolds: getWritingScaffoldsByLevel(level),
    readingStrategies: getReadingStrategiesByLevel(level),
    errorClassifications: getErrorsByLevel(level),
    l1Interference: getL1RulesByLevel(level),
    canDoStatements: getCanDoByLevel(level),
    grammarTheory: getTheoryByLevel(level === 1 ? 'A1' : level === 2 ? 'A2' : level === 3 ? 'B1' : level === 4 ? 'B2' : level === 5 ? 'C1' : 'C2'),
    symbolNames: getSymbolsByLevel(level === 1 ? 'A1' : level === 2 ? 'A2' : level === 3 ? 'B1' : level === 4 ? 'B2' : 'C1'),
    readingTexts: getReadingTextsByLevelHelper(level === 1 ? 'A1' : level === 2 ? 'A2' : level === 3 ? 'B1' : level === 4 ? 'B2' : level === 5 ? 'C1' : 'C2'),
    advancedVocabulary: level >= 4 ? getAdvancedVocabByLevel(level === 4 ? 'B2' : level === 5 ? 'C1' : 'C2') : [],
    productiveActivities: getActivitiesByCefrLevel(level as 1 | 2 | 3 | 4 | 5 | 6),
    collocationsByLevel: getCollocationsByCefrLevel(level === 1 ? 'A1' : level === 2 ? 'A2' : level === 3 ? 'B1' : level === 4 ? 'B2' : level === 5 ? 'C1' : 'C2'),
    vocabularyIntermediate: level === 3 ? getVocabularyIntermediateByLevel('B1') : [],
    conversationScenarios: conversationScenarios,
    productionExercises: getExercisesByLevel(
      level <= 2 ? '1' : level <= 3 ? '2' : level <= 5 ? '3' : level <= 7 ? '4' : '5'
    ),
  };
};

// Content statistics
export const getContentStats = () => {
  const everydayWordsCount = everydayVocabulary.reduce((acc: number, topic: any) => acc + topic.words.length, 0);
  
  return {
    // Grammar
    grammarTopics: grammarTopics.length,
    grammarEssentials: grammarEssentials.length,
    grammarAdditional: additionalGrammar.length,
    modalsExtended: modalsExtended.length,
    semiModals: semiModals.length,
    
    // Vocabulary
    phrasalVerbs: phrasalVerbs.length,
    irregularVerbs: irregularVerbs.length,
    idioms: idioms.length,
    techTerms: techTerms.length,
    collocations: collocations.reduce((acc: number, c: any) => acc + c.collocations.length, 0),
    falseFriends: falseFriends.length,
    wordFormationRules: wordFormation.length,
    synonymsAntonyms: synonymsAntonyms.length,
    formalInformal: formalInformal.length,
    numberExpressions: numberExpressions.length,
    everydayWords: everydayWordsCount,
    everydayTopics: everydayVocabulary.length,
    
    // Communication
    communicativeFunctions: communicativeFunctions.length,
    extendedFunctions: extendedFunctions.length,
    
    // Pronunciation
    phoneticSounds: phoneticSounds.length,
    wordStressRules: wordStressRules.length,
    sentenceStressPatterns: sentenceStressPatterns.length,
    intonationPatterns: intonationPatterns.length,
    connectedSpeechRules: connectedSpeech.length,
    silentLetterRules: silentLetters.length,
    
    // Writing
    writingTopics: writingSkills.length,
    
    // New pedagogical content
    grammarContrastPairs: grammarContrastPairs.length,
    grammaticalFalseFriends: grammaticalFalseFriends.length,
    vocabScenarios: vocabScenarios.length,
    writingScaffolds: writingScaffolds.length,
    readingStrategies: readingStrategies.length,
    errorClassifications: errorClassifications.length,
    l1InterferenceRules: l1InterferenceRules.length,
    canDoStatements: canDoStatements.length,
    grammarTheoryModules: grammarTheory.length,
    symbolNames: symbolNames.length,
    readingTexts: readingTexts.length,
    advancedVocabulary: advancedVocabulary.length,
    productiveActivities: productiveActivities.length,
    collocationsByLevel: collocationsByLevel.reduce((acc: number, l: any) => acc + l.collocations.length, 0),
    vocabularyIntermediate: vocabularyIntermediate.reduce((acc: number, f: any) => acc + f.words.length, 0),
    conversationScenarios: conversationScenarios.length,
    freeWritingPrompts: freeWritingPrompts.length,
    dictationSentences: dictationSentences.length,
    translationExercises: translationExercises.length,
    openBlankExercises: openBlankExercises.length,
    
    // Totals
    get grammarTotal() {
      return this.grammarTopics + this.grammarEssentials + this.grammarAdditional + this.modalsExtended + this.semiModals;
    },
    get vocabularyTotal() {
      return this.phrasalVerbs + this.irregularVerbs + this.idioms + this.techTerms + 
             this.collocations + this.falseFriends + this.synonymsAntonyms + this.formalInformal +
             this.everydayWords;
    },
    get pronunciationTotal() {
      return this.phoneticSounds + this.wordStressRules + this.sentenceStressPatterns + 
             this.intonationPatterns + this.connectedSpeechRules + this.silentLetterRules;
    },
    get communicationTotal() {
      return this.communicativeFunctions + this.extendedFunctions;
    },
    get total() {
      return this.grammarTotal + this.vocabularyTotal + this.pronunciationTotal + 
             this.communicationTotal + this.writingTopics + this.grammarContrastPairs +
             this.grammaticalFalseFriends + this.vocabScenarios + this.writingScaffolds +
             this.readingStrategies + this.errorClassifications + this.l1InterferenceRules +
             this.canDoStatements + this.grammarTheoryModules + this.symbolNames + this.readingTexts +
             this.advancedVocabulary + this.productiveActivities + this.vocabularyIntermediate +
             this.conversationScenarios + this.freeWritingPrompts + this.dictationSentences +
             this.translationExercises + this.openBlankExercises;
    }
  };
};
