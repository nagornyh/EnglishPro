import type React from 'react';

// User Types
export interface User {
  id: string;
  name: string;
  isAdmin?: boolean;
  createdAt: string;
  lastSession: string;
  settings: UserSettings;
  progress: UserProgress;
  achievements: Achievement[];
  streakData: StreakData;
}

export interface UserSettings {
  soundEnabled: boolean;
  autoPlayAudio: boolean;
  showTranslations: boolean;
  dailyGoal: number; // XP per day
  preferredActivities: ActivityType[];
}

export interface UserProgress {
  currentLevel: number;
  currentTask: number;
  completedLessons: CompletedLesson[];
  vocabularyProgress: VocabularyProgress[];
  totalXP: number;
  timeSpentMinutes: number;
  lessonsCompleted: number;
  wordsLearned: number;
  accuracy: number;
  /** Grammar theory module IDs the user has studied at least once */
  masteredGrammarIds: string[];
}

export interface CompletedLesson {
  levelId: number;
  taskId: number;
  completedAt: string;
  xpEarned: number;
  accuracy: number;
  timeSpentSeconds: number;
}

export interface VocabularyProgress {
  wordId: string;
  userId: string;
  baseWordId: string;
  levelId: number;
  taskId: number;
  masteryLevel: 0 | 1 | 2 | 3 | 4 | 5;
  nextReview: string;
  correctCount: number;
  incorrectCount: number;
  lastReviewed: string;
}

// Activity session result (used to persist progress/stats)
export interface ActivitySessionResult {
  activityId:
    | 'flashcards'
    | 'quiz'
    | 'match'
    | 'fill'
    | 'scramble'
    | 'sentence'
    | 'translation'
    | 'listening'
    | 'hangman'
    | 'error-correction'
    | 'transformation'
    | 'writing'
    | 'speaking'
    | 'dialogue'
    | 'sentence-writing'
    | 'basic-transformation'
    | 'listen-select';
  xpEarned: number;
  correct: number;
  incorrect: number;
  skipped: number;
  accuracy: number; // 0-100
  timeSpentSeconds: number;
  wordsReviewed: string[]; // Word ids
  correctWordIds: string[];
  incorrectWordIds: string[];
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string;
  streakHistory: string[]; // Array of dates
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
  category: 'streak' | 'xp' | 'vocabulary' | 'lessons' | 'accuracy' | 'special';
}

// Content Types
export interface Level {
  id: number;
  name: string;
  cefrLevel: string;
  description: string;
  totalTasks: number;
  estimatedHours: number;
  color: string;
  icon: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  title: string;
  titleEs: string;
  objectives: string[];
  introduction?: TaskIntroduction;
  vocabulary: Vocabulary;
  estimatedMinutes: number;
  // Enhanced pedagogical content - flexible types for varied content structures
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commonMistakes?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exercises?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelDialogue?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pronunciationFocus?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  culturalNote?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  consolidationQuiz?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  guidedProduction?: any;
  connectionToPrevious?: string;
  connectionToNext?: string;
  // Link to grammar theory modules from src/data/grammar-theory.ts
  grammarTheoryIds?: string[];
}

// ============================================
// ENHANCED PEDAGOGICAL STRUCTURES
// ============================================

export interface TaskIntroduction {
  title: string;
  explanation: string;
  keyPoints: string[];
  examples?: { english: string; spanish: string; explanation?: string }[];
  tips?: string[];
  grammarTableHtml?: string; // For grammar tasks - visual table
  whenToUse?: string[]; // Situational guidance
  whenNotToUse?: string[]; // Common misuse cases
}

export interface CommonMistakeItem {
  id: string;
  wrong: string;
  correct: string;
  explanation: string;
  explanationEs: string;
  category: 'grammar' | 'vocabulary' | 'pronunciation' | 'usage' | 'false-friend';
}

export interface TaskExercise {
  id: string;
  type: 'transformation' | 'error-correction' | 'situational' | 'gap-fill' | 'reorder' | 'matching' | 'translation' | 'free-response';
  title: string;
  titleEs: string;
  instruction: string;
  instructionEs: string;
  items: ExerciseItem[];
  difficulty: 1 | 2 | 3;
}

export interface ExerciseItem {
  id: string;
  prompt: string;
  promptEs?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  explanationEs?: string;
  hint?: string;
  hintEs?: string;
}

export interface ModelDialogue {
  id: string;
  title: string;
  titleEs: string;
  context: string;
  contextEs: string;
  speakers: { id: string; name: string; role: string }[];
  lines: DialogueLine[];
  keyPhrases: { phrase: string; translation: string; usage: string }[];
  variations?: { original: string; alternative: string; note: string }[];
}

export interface DialogueLine {
  speakerId: string;
  text: string;
  textEs: string;
  note?: string;
  noteEs?: string;
  audioUrl?: string;
}

export interface PronunciationFocus {
  sounds: PronunciationSound[];
  commonProblems: { word: string; wrong: string; correct: string; tip: string }[];
  minimalPairs?: { word1: string; word2: string; soundDifference: string }[];
  intonationPatterns?: { pattern: string; example: string; meaning: string }[];
}

export interface PronunciationSound {
  symbol: string; // IPA symbol
  description: string;
  descriptionEs: string;
  examples: { word: string; transcription: string; approximationEs?: string }[];
  tips: string[];
  /** Si existe, sustituye a `tips` en la interfaz (español) */
  tipsEs?: string[];
}

export interface CulturalNote {
  title: string;
  titleEs: string;
  content: string;
  contentEs: string;
  regions?: string[]; // UK, US, Australia, etc.
  formalityLevel?: 'formal' | 'neutral' | 'informal';
}

export interface ConsolidationQuiz {
  id: string;
  title: string;
  titleEs: string;
  passingScore: number; // Percentage
  questions: QuizQuestionItem[];
  timeLimit?: number; // seconds
}

export interface QuizQuestionItem {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'true-false' | 'ordering' | 'matching';
  question: string;
  questionEs: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  explanationEs: string;
  points: number;
}

export interface GuidedProduction {
  id: string;
  title: string;
  titleEs: string;
  type: 'writing' | 'speaking' | 'both';
  scenario: string;
  scenarioEs: string;
  prompts: ProductionPrompt[];
  modelResponse?: string;
  modelResponseEs?: string;
  evaluationCriteria: string[];
  evaluationCriteriaEs: string[];
}

export interface ProductionPrompt {
  id: string;
  instruction: string;
  instructionEs: string;
  hints?: string[];
  hintsEs?: string[];
  requiredElements?: string[];
  minWords?: number;
  maxWords?: number;
}

export interface Vocabulary {
  nouns: Word[];
  verbs: Word[];
  adjectives: Word[];
  adverbs: Word[];
  expressions: Word[];
  prepositions: Word[];
}

export interface Word {
  id: string;
  word: string;
  translation: string;
  type: 'noun' | 'verb' | 'adjective' | 'adverb' | 'expression' | 'preposition' | 'phrase';
  definition: string;
  definitionEs?: string; // Definición en español
  example: string;
  exampleEs?: string; // Ejemplo traducido al español
  related: string[];
  difficulty: 1 | 2 | 3;
  countable?: boolean;
  audio?: string;
  image?: string;
}

// Activity Types
export type ActivityType = 
  | 'flashcard'
  | 'multipleChoice'
  | 'fillBlanks'
  | 'matchPairs'
  | 'wordScramble'
  | 'sentenceBuilder'
  | 'dictation'
  | 'translation'
  | 'speedRound'
  | 'imageMatch'
  | 'hangman'
  | 'writingPrompt';

export interface ActivityConfig {
  type: ActivityType;
  title: string;
  description: string;
  icon: string;
  minLevel: number;
  maxLevel: number;
  xpReward: number;
  timeLimit?: number;
}

export interface ActivityResult {
  activityType: ActivityType;
  correct: number;
  incorrect: number;
  skipped: number;
  timeSpentSeconds: number;
  xpEarned: number;
  wordsReviewed: string[];
}

// Quiz Types
export interface QuizQuestion {
  id: string;
  type: 'definition' | 'translation' | 'example' | 'audio';
  word: Word;
  options: string[];
  correctAnswer: string;
}

export interface FlashcardData {
  word: Word;
  showFront: boolean;
}

export interface MatchPair {
  id: string;
  left: string;
  right: string;
  matched: boolean;
}

// UI Types
export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

// Navigation
export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

// Statistics
export interface DailyStats {
  date: string;
  xpEarned: number;
  lessonsCompleted: number;
  wordsReviewed: number;
  timeSpentMinutes: number;
  accuracy: number;
}

export interface WeeklyStats {
  weekStart: string;
  totalXP: number;
  averageAccuracy: number;
  daysActive: number;
  lessonsCompleted: number;
}

// ============================================
// ENHANCED GAMIFICATION SYSTEM
// ============================================

export interface GamificationConfig {
  xpMultipliers: {
    streak: number; // Bonus XP based on streak
    accuracy: number; // Bonus for high accuracy
    speed: number; // Bonus for fast completion
    firstTry: number; // Bonus for getting it right first time
  };
  levelThresholds: number[]; // XP needed for each user level
  dailyChallenges: DailyChallenge[];
}

export interface DailyChallenge {
  id: string;
  type: 'xp' | 'lessons' | 'words' | 'accuracy' | 'streak' | 'time';
  target: number;
  xpReward: number;
  description: string;
  descriptionEs: string;
  progress: number;
  claimed: boolean;
}
export interface UserLevel {
  level: number;
  name: string;
  title?: string;
  titleEs?: string;
  description?: string;
  descriptionEs?: string;
  minXP: number;
  maxXP?: number;
  badge?: string;
  color: string;
  benefits?: string[];
}

export interface ChallengeProgress {
  odId: string;
  odUserId: string;
  challengeId: string;
  date: string;
  currentProgress: number;
  target: number;
  completed: boolean;
  completedAt?: string;
  xpRewarded: boolean;
}

// ============================================
// SM-2 SPACED REPETITION SYSTEM
// ============================================

export interface SM2VocabularyProgress extends VocabularyProgress {
  // SM-2 specific fields
  easeFactor: number; // 1.3 - 2.5, default 2.5
  interval: number; // Days until next review
  repetitions: number; // Successful reviews in a row
  quality: number; // Last response quality 0-5
}

export interface ReviewSession {
  id: string;
  odUserId: string;
  startedAt: string;
  completedAt?: string;
  wordsReviewed: string[];
  correctCount: number;
  incorrectCount: number;
  averageResponseTime: number;
}

// ============================================
// ERROR TRACKING SYSTEM
// ============================================

export interface UserError {
  id: string;
  odUserId: string;
  wordId: string;
  activityType: ActivityType;
  errorType: 'spelling' | 'meaning' | 'grammar' | 'translation' | 'listening' | 'other';
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

export interface ErrorAnalysis {
  totalErrors: number;
  errorsByType: Record<string, number>;
  errorsByWord: Record<string, number>;
  mostProblematicWords: string[];
  commonMistakes: CommonMistake[];
  improvementRate: number; // Percentage
}

export interface CommonMistake {
  pattern: string;
  frequency: number;
  examples: string[];
  tip: string;
  tipEs: string;
}

// ============================================
// ENHANCED LISTENING SYSTEM
// ============================================

export interface ListeningExercise {
  id: string;
  type: 'dictation' | 'comprehension' | 'fill-audio' | 'conversation';
  title: string;
  titleEs: string;
  audioUrl?: string;
  audioText: string;
  translation: string;
  hints?: string[];
  hintsEs?: string[];
  keywords?: string[];
  accent?: 'american' | 'british' | 'australian' | 'indian' | 'neutral';
  speed?: 'slow' | 'normal' | 'fast';
  difficulty: 1 | 2 | 3;
  duration?: number;
  questions: ListeningQuestion[];
  levelId?: number;
  vocabularyIds?: string[];
}

export interface ListeningQuestion {
  id: string;
  question: string;
  questionEs: string;
  type: 'multipleChoice' | 'trueFalse' | 'shortAnswer' | 'dictation' | 'fill-blank' | 'multiple-choice';
  options?: string[];
  correctAnswer: string;
  points: number;
}

// ============================================
// ROLE-PLAY / CONVERSATION SYSTEM
// ============================================

export interface ConversationScenario {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  context: string;
  contextEs: string;
  difficulty: 1 | 2 | 3;
  category: 'business' | 'travel' | 'social' | 'academic' | 'everyday';
  roles: ConversationRole[];
  dialogue: DialogueTurn[];
  vocabulary: string[]; // Word IDs relevant to this scenario
  grammarPoints: string[];
}

export interface ConversationRole {
  id: string;
  name: string;
  description: string;
  isUser: boolean;
}

export interface DialogueTurn {
  id: string;
  roleId: string;
  text: string;
  textEs: string;
  userOptions?: UserDialogueOption[];
  feedback?: string;
  feedbackEs?: string;
  audioUrl?: string;
}

export interface UserDialogueOption {
  id: string;
  text: string;
  textEs: string;
  isCorrect: boolean;
  isBest?: boolean;
  feedback: string;
  feedbackEs: string;
  nextTurnId?: string;
}

// ============================================
// ACHIEVEMENT DEFINITIONS
// ============================================

export interface AchievementDefinition {
  id: string;
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  icon: string;
  category: Achievement['category'];
  requirement: {
    type: 'streak' | 'xp' | 'words' | 'lessons' | 'accuracy' | 'level' | 'challenge' | 'special';
    value: number;
    comparison: 'gte' | 'eq' | 'consecutive';
  };
  xpReward: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

// ============================================
// NOTIFICATION / REMINDER SYSTEM
// ============================================

export interface StudyReminder {
  id: string;
  odUserId: string;
  time: string; // HH:mm format
  days: number[]; // 0-6 (Sunday-Saturday)
  enabled: boolean;
  message: string;
}

export interface Notification {
  id: string;
  type: 'achievement' | 'streak' | 'challenge' | 'reminder' | 'milestone' | 'review';
  title: string;
  titleEs: string;
  message: string;
  messageEs: string;
  icon: string;
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}
