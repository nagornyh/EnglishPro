import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft,
  BookOpen,
  CheckCircle,
  MessageCircle,
  Headphones,
  PenTool,
  Trophy,
  XCircle,
  Target,
  Lightbulb,
  Link2,
  AlertTriangle,
  Brain,
  HelpCircle,
  Scale,
  Map,
} from 'lucide-react';
import { useParams, useNavigate, type NavigateFunction } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getLevelById } from '../data/levels';
import { getTheoryById, type GrammarTheoryModule } from '../data/grammar-theory';
import { getContrastPairsByLevel } from '../data/grammar-contrast-pairs';
import { getReadingTextsByLevel } from '../data/reading-texts';
import { getCollocationsByLevel } from '../data/collocations-by-level';
import { productiveActivities } from '../data/productive-activities';
import { getScenariosByDifficulty } from '../data/conversations';
import { getExercisesByLevel } from '../data/production-exercises';
import { getWritingScaffoldsByLevel } from '../data/writing-scaffolds';
import { vocabularyIntermediate } from '../data/vocabulary-intermediate';
import { getAdvancedVocabByLevel } from '../data/vocabulary-advanced';
import { getVerbsByLevel } from '../data/irregular-verbs';
import { getGrammaticalFalseFriendsByLevel } from '../data/grammatical-false-friends';
import { getCulturalNotesByLevel } from '../data/cultural-notes';
import { CROSSWORD_PUZZLES } from '../data/crossword-puzzles';
import { NEWS_ARTICLES } from '../data/simplified-news';
import { SITUATIONAL_SCENARIOS } from '../data/situations';
import { getListeningByLevel } from '../data/listening-exercises';
import { hasGeneratorTemplates } from '../data/exercise-generator';
import { getIdiomsByLevel } from '../data/idioms';
import { getPhrasalVerbsByLevel } from '../data/phrasal-verbs';
import db from '../services/database';
import adaptiveEngine from '../services/adaptiveEngine';
import { stepRegistry, type LessonStep } from './lessonStepRenderers';
import TheorySnippetModal from '../components/TheorySnippetModal';
import { normalizeCommonMistakes } from '../utils/normalizeCommonMistakes';
import { getContextualTheoryModules } from '../utils/lessonStepTheory';
import {
  clearLessonFlowDraft,
  loadLessonFlowDraft,
  saveLessonFlowDraft,
  orderWordsFromTask,
  type LessonFlowDraftV1,
} from '../utils/lessonFlowDraftStorage';
import type { Level, Task, Word, ActivitySessionResult, QuizQuestionItem } from '../types';

interface StepConfig {
  id: LessonStep;
  title: string;
  icon: React.ReactNode;
  available: boolean;
}

export default function LessonFlow() {
  const { levelId, taskId } = useParams();
  const navigate = useNavigate();
  const level = getLevelById(Number(levelId));
  const [task, setTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!levelId || !taskId || !level) {
      setIsLoading(false);
      return;
    }

    const foundTask = level.tasks.find(t => t.id === Number(taskId));
    if (foundTask) {
      setTask(foundTask);
    } else {
      setTask(null);
    }

    setIsLoading(false);
  }, [levelId, taskId, level]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="spinner" />
      </div>
    );
  }

  if (!task || !level || !levelId || !taskId) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Tarea no encontrada</p>
        <button onClick={() => navigate('/levels')} className="btn-primary mt-4">
          Volver a Niveles
        </button>
      </div>
    );
  }

  return (
    <LessonFlowSession
      key={`${level.id}-${task.id}`}
      level={level}
      task={task}
      levelId={levelId}
      taskId={taskId}
      navigate={navigate}
    />
  );
}

type LessonFlowSessionProps = {
  level: Level;
  task: Task;
  levelId: string;
  taskId: string;
  navigate: NavigateFunction;
};

const STEP_SCORE_PASS_THRESHOLD = 70;

/** Map lesson step to the primary skill it trains, for the adaptive engine. */
function mapStepToSkill(step: LessonStep): string | null {
  const map: Partial<Record<LessonStep, string>> = {
    'vocabulary': 'vocabulary',
    'collocation-practice': 'vocabulary',
    'vocabulary-explorer': 'vocabulary',
    'practice': 'grammar',
    'recognition-quiz': 'grammar',
    'controlled-practice': 'grammar',
    'grammar-contrast': 'grammar',
    'generated-practice': 'grammar',
    'common-mistakes': 'grammar',
    'quiz': 'grammar',
    'dialogue': 'speaking',
    'conversation-practice': 'speaking',
    'situations': 'speaking',
    'pronunciation': 'pronunciation',
    'pronunciation-lab': 'pronunciation',
    'reading-comprehension': 'reading',
    'news-reader': 'reading',
    'sentence-writing': 'writing',
    'production': 'writing',
    'free-writing': 'writing',
    'writing-workshop': 'writing',
    'listen-select': 'listening',
    'enhanced-listening': 'listening',
    'dictation': 'listening',
    'irregular-verbs': 'grammar',
    'false-friends': 'vocabulary',
    'idioms': 'vocabulary',
    'phrasal-verbs': 'vocabulary',
    'word-families': 'vocabulary',
  };
  return map[step] ?? null;
}

function LessonFlowSession({ level, task, levelId, taskId, navigate }: LessonFlowSessionProps) {
  const { user, isAdmin, updateStreak, updateGrammarMastery } = useUser();
  const draftUserKey = user?.id ?? 'guest';

  const [currentStep, setCurrentStep] = useState<LessonStep>('intro');
  const [completedSteps, setCompletedSteps] = useState<Set<LessonStep>>(new Set());
  const [stepScores, setStepScores] = useState<Partial<Record<LessonStep, number>>>({});
  const [words] = useState<Word[]>(() =>
    orderWordsFromTask(task, loadLessonFlowDraft(levelId, taskId, user?.id ?? 'guest')?.wordIds),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sessionStats, setSessionStats] = useState({
    xpEarned: 0,
    wordsLearned: 0,
    accuracy: 0,
    timeStarted: Date.now(),
  });
  const [readingAnswers, setReadingAnswers] = useState<Record<string, string | number>>({});
  const [productionText, setProductionText] = useState('');
  const [freeWritingText, setFreeWritingText] = useState('');
  const [freeWritingPromptIndex, setFreeWritingPromptIndex] = useState<number | null>(null);
  const [dictationState, setDictationState] = useState({ sentenceIndex: 0, input: '', showSentence: true, completed: false, checked: false });
  const [conversationState, setConversationState] = useState<{ scenarioIndex: number; currentTurnId: string | null; showFeedback: boolean }>({ scenarioIndex: 0, currentTurnId: null, showFeedback: false });
  const [grammarContrastSelected, setGrammarContrastSelected] = useState<1 | 2 | null>(null);
  const [activeTheoryTab, setActiveTheoryTab] = useState(0);
  const [culturalDeepDiveNoteIndex, setCulturalDeepDiveNoteIndex] = useState(0);
  const [showTheoryReview, setShowTheoryReview] = useState(false);

  const latestDraftRef = useRef<LessonFlowDraftV1 | null>(null);
  const draftUserKeyRef = useRef(draftUserKey);
  draftUserKeyRef.current = draftUserKey;

  const productionLevelStr = level.id <= 2 ? '1' : level.id <= 3 ? '2' : level.id <= 5 ? '3' : level.id <= 7 ? '4' : '5';
  const productionExercises = getExercisesByLevel(productionLevelStr);

  useEffect(() => {
    if (currentStep === 'free-writing' && productionExercises.freeWriting.length > 0 && freeWritingPromptIndex === null) {
      setFreeWritingPromptIndex(Math.floor(Math.random() * productionExercises.freeWriting.length));
    }
    if (currentStep !== 'free-writing') {
      setFreeWritingPromptIndex(null);
    }
  }, [currentStep, productionExercises.freeWriting.length, freeWritingPromptIndex]);

  // Resolve grammar theory modules (all linked theory IDs)
  const theoryModules = (task.grammarTheoryIds?.map(id => getTheoryById(id)).filter((m): m is GrammarTheoryModule => !!m)) ?? [];
  const theoryModule = theoryModules[0] ?? null;
  const contextualTheoryModules = getContextualTheoryModules(currentStep, theoryModules, {
    levelId: level.id,
    taskGrammarTheoryIds: task.grammarTheoryIds,
  });

  // Normalize common mistakes from any of the 4 legacy formats
  const normalizedMistakes = task.commonMistakes
    ? normalizeCommonMistakes(task.commonMistakes)
    : [];

  // Normalize consolidation quiz: support both array format and object format with .questions
  const rawQuiz = task.consolidationQuiz;
  const rawQuestions = Array.isArray(rawQuiz) ? rawQuiz : (rawQuiz?.questions ?? []);
  const normalizedQuizQuestions: QuizQuestionItem[] = rawQuestions.map((q: Record<string, unknown>, idx: number) => {
    const options = (q.options as string[]) ?? [];
    const correctAnswer = q.correctAnswer ?? q.correctIndex;
    const correctStr = typeof correctAnswer === 'number' && options[correctAnswer] !== undefined
      ? options[correctAnswer]
      : (correctAnswer as string | string[]);
    return {
      id: (q.id as string) ?? `q-${idx}`,
      type: (q.type as QuizQuestionItem['type']) ?? 'multiple-choice',
      question: (q.question as string) ?? '',
      questionEs: (q.questionEs as string) ?? (q.question as string) ?? '',
      options,
      correctAnswer: correctStr,
      explanation: (q.explanation as string) ?? '',
      explanationEs: (q.explanationEs as string) ?? (q.explanation as string) ?? '',
      points: (q.points as number) ?? 10,
    };
  });
  const hasQuizContent = normalizedQuizQuestions.length > 0;
  const quizPassingScore = !Array.isArray(rawQuiz) && rawQuiz?.passingScore != null ? rawQuiz.passingScore : 70;

  // Map level id to CEFR level for reading texts
  const levelToReading: Record<number, string> = { 1: 'A1', 2: 'A1', 3: 'A2', 4: 'B1', 5: 'B1', 6: 'B2', 7: 'B2', 8: 'B2', 9: 'C1', 10: 'C1', 11: 'C1', 12: 'C2', 13: 'C2' };
  const readingCefr = levelToReading[level.id] || 'A1';
  const hasReadingContent = getReadingTextsByLevel(readingCefr as 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2').length > 0;

  const levelToCollocationCefr: Record<number, 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'> = { 1: 'A1', 2: 'A1', 3: 'A2', 4: 'B1', 5: 'B1', 6: 'B2', 7: 'B2', 8: 'C1', 9: 'C1', 10: 'C1', 11: 'C2', 12: 'C2', 13: 'C2' };
  const collocationCefr = levelToCollocationCefr[level.id] || 'A1';
  const hasCollocations = getCollocationsByLevel(collocationCefr).length > 0;

  const levelToFalseFriendsTier = (lid: number) => (lid <= 3 ? 1 : lid <= 5 ? 2 : lid <= 7 ? 3 : 4);
  const hasIrregularVerbs = getVerbsByLevel(level.id).length > 0;
  const hasFalseFriends = getGrammaticalFalseFriendsByLevel(levelToFalseFriendsTier(level.id)).length > 0;
  const culturalCefr = levelToCollocationCefr[level.id];
  const hasCulturalDeepDive = getCulturalNotesByLevel(culturalCefr).length > 0;

  // Find productive activity for level range: B1-B2 (4-7) or C1-C2+ (8-13)
  const getProductionActivity = () => {
    if (level.id <= 3) return undefined;
    const cefrLevels = level.id <= 7 ? [3, 4] : [4, 5, 6]; // B1-B2 or B2-C2
    return productiveActivities.find(a => cefrLevels.includes(a.cefrLevel));
  };
  const productionActivity = getProductionActivity();
  const hasProductionContent = !!productionActivity;

  const hasFreeWritingContent = level.id >= 4 && productionExercises.freeWriting.length > 0;
  // BUG-3 fix: dictation available for ALL levels (medium/hard sentences for B1+)
  const hasDictationContent = productionExercises.dictation.length > 0;

  // Conversation scenarios for B1+ (levels 4+): difficulty 1 for B1-B2, 1+2 for C1-C2
  const conversationScenariosForLevel = level.id >= 4
    ? (level.id <= 7 ? getScenariosByDifficulty(1) : [...getScenariosByDifficulty(1), ...getScenariosByDifficulty(2)])
    : [];
  const hasConversationContent = conversationScenariosForLevel.length > 0;

  // Writing workshop: scaffold level 1-6 from lesson level 1-13
  const scaffoldLevelForWriting = level.id <= 2 ? 1 : level.id === 3 ? 2 : level.id <= 5 ? 3 : level.id <= 7 ? 4 : level.id <= 10 ? 5 : 6;
  const hasWritingWorkshopContent = getWritingScaffoldsByLevel(scaffoldLevelForWriting).length > 0;

  // Vocabulary explorer: B1 (4-5) = intermediate, B2+ (6+) = advanced
  const hasVocabularyExplorerContent = level.id >= 4 && (
    level.id <= 5
      ? vocabularyIntermediate.length > 0
      : getAdvancedVocabByLevel(level.id <= 7 ? 'B2' : level.id <= 10 ? 'C1' : 'C2').length > 0
  );

  // Step availability map (shared across all level ranges)
  const stepPool: Record<LessonStep, StepConfig> = {
    'intro': { id: 'intro', title: 'Introducción', icon: <BookOpen className="w-5 h-5" />, available: !!task.introduction },
    'theory': { id: 'theory', title: 'Teoría', icon: <Brain className="w-5 h-5" />, available: !!theoryModule },
    'grammar-map': { id: 'grammar-map', title: 'Mapa Gramatical', icon: <Map className="w-5 h-5" />, available: theoryModules.length > 0 },
    'recognition-quiz': { id: 'recognition-quiz', title: 'Reconocimiento', icon: <HelpCircle className="w-5 h-5" />, available: !!(theoryModule && theoryModule.exercises.recognition.length > 0) },
    'controlled-practice': { id: 'controlled-practice', title: 'Práctica Controlada', icon: <PenTool className="w-5 h-5" />, available: !!(theoryModule && theoryModule.exercises.controlled.length > 0) },
    'grammar-contrast': { id: 'grammar-contrast', title: 'Contraste Gramatical', icon: <Scale className="w-5 h-5" />, available: level.id >= 4 && getContrastPairsByLevel(level.id).length > 0 },
    'common-mistakes': { id: 'common-mistakes', title: 'Errores Comunes', icon: <AlertTriangle className="w-5 h-5" />, available: normalizedMistakes.length > 0 },
    'vocabulary': { id: 'vocabulary', title: 'Vocabulario', icon: <Target className="w-5 h-5" />, available: words.length > 0 },
    'collocation-practice': { id: 'collocation-practice', title: 'Collocations', icon: <Link2 className="w-5 h-5" />, available: hasCollocations },
    'vocabulary-explorer': { id: 'vocabulary-explorer', title: 'Explorador de Vocabulario', icon: <Target className="w-5 h-5" />, available: hasVocabularyExplorerContent },
    'practice': { id: 'practice', title: 'Práctica', icon: <Lightbulb className="w-5 h-5" />, available: words.length >= 4 },
    'dialogue': { id: 'dialogue', title: 'Diálogo', icon: <MessageCircle className="w-5 h-5" />, available: !!task.modelDialogue },
    'conversation-practice': { id: 'conversation-practice', title: 'Práctica de Conversación', icon: <MessageCircle className="w-5 h-5" />, available: hasConversationContent },
    'reading-comprehension': { id: 'reading-comprehension', title: 'Lectura', icon: <BookOpen className="w-5 h-5" />, available: hasReadingContent },
    'pronunciation': { id: 'pronunciation', title: 'Pronunciación', icon: <Headphones className="w-5 h-5" />, available: !!task.pronunciationFocus },
    'pronunciation-lab': { id: 'pronunciation-lab', title: 'Laboratorio de pronunciación', icon: <Headphones className="w-5 h-5" />, available: true },
    'sentence-writing': { id: 'sentence-writing', title: 'Escritura', icon: <PenTool className="w-5 h-5" />, available: level.id <= 6 },
    'production': { id: 'production', title: 'Producción', icon: <PenTool className="w-5 h-5" />, available: hasProductionContent },
    'free-writing': { id: 'free-writing', title: 'Escritura Libre', icon: <PenTool className="w-5 h-5" />, available: hasFreeWritingContent },
    'writing-workshop': { id: 'writing-workshop', title: 'Taller de Escritura', icon: <PenTool className="w-5 h-5" />, available: hasWritingWorkshopContent },
    'basic-transformation': { id: 'basic-transformation', title: 'Transformación', icon: <Target className="w-5 h-5" />, available: level.id <= 6 },
    'listen-select': { id: 'listen-select', title: 'Escucha', icon: <Headphones className="w-5 h-5" />, available: level.id <= 6 && typeof window !== 'undefined' && 'speechSynthesis' in window },
    'dictation': { id: 'dictation', title: 'Dictado', icon: <Headphones className="w-5 h-5" />, available: hasDictationContent },
    'quiz': { id: 'quiz', title: 'Quiz', icon: <PenTool className="w-5 h-5" />, available: hasQuizContent },
    'cultural-note': { id: 'cultural-note', title: 'Nota Cultural', icon: <CheckCircle className="w-5 h-5" />, available: !!task.culturalNote },
    'irregular-verbs': { id: 'irregular-verbs', title: 'Verbos Irregulares', icon: <PenTool className="w-5 h-5" />, available: hasIrregularVerbs },
    'false-friends': { id: 'false-friends', title: 'Falsos Amigos', icon: <AlertTriangle className="w-5 h-5" />, available: hasFalseFriends },
    'cultural-deep-dive': { id: 'cultural-deep-dive', title: 'Inmersión Cultural', icon: <CheckCircle className="w-5 h-5" />, available: hasCulturalDeepDive },
    'complete': { id: 'complete', title: 'Completado', icon: <Trophy className="w-5 h-5" />, available: true },
    // GRAM-4 / ACT-1 new step types
    'grammar-tree': { id: 'grammar-tree', title: 'Árbol Gramatical', icon: <Map className="w-5 h-5" />, available: theoryModules.length > 0 },
    'news-reader': { id: 'news-reader', title: 'Noticias', icon: <BookOpen className="w-5 h-5" />, available: level.id >= 3 && NEWS_ARTICLES.filter(a => a.level <= level.id).length > 0 },
    'crossword': { id: 'crossword', title: 'Crucigrama', icon: <Target className="w-5 h-5" />, available: CROSSWORD_PUZZLES.filter(p => p.level === level.id).length > 0 },
    'situations': { id: 'situations', title: 'Situaciones', icon: <MessageCircle className="w-5 h-5" />, available: level.id >= 2 && SITUATIONAL_SCENARIOS.filter(s => s.difficulty <= level.id).length > 0 },
    'enhanced-listening': { id: 'enhanced-listening', title: 'Escucha Avanzada', icon: <Headphones className="w-5 h-5" />, available: getListeningByLevel(level.id).length > 0 },
    'generated-practice': { id: 'generated-practice', title: 'Práctica Generativa', icon: <PenTool className="w-5 h-5" />, available: !!(task.grammarTheoryIds?.some(id => hasGeneratorTemplates(id))) },
    'mnemonics': { id: 'mnemonics', title: 'Nemotécnicos', icon: <Brain className="w-5 h-5" />, available: true },
    'idioms': { id: 'idioms', title: 'Frases Idiomáticas', icon: <Lightbulb className="w-5 h-5" />, available: getIdiomsByLevel(level.id).length > 0 },
    'phrasal-verbs': { id: 'phrasal-verbs', title: 'Verbos Frasales', icon: <BookOpen className="w-5 h-5" />, available: getPhrasalVerbsByLevel(level.id).length > 0 },
    'word-families': { id: 'word-families', title: 'Familias de Palabras', icon: <Brain className="w-5 h-5" />, available: level.id >= 3 },
    'fun-fact': { id: 'fun-fact', title: 'Dato Curioso', icon: <Lightbulb className="w-5 h-5" />, available: true },
    'self-evaluation': { id: 'self-evaluation', title: 'Autoevaluación', icon: <Target className="w-5 h-5" />, available: true },
  };

  // Different step sequences per level range for optimal pedagogy
  const getStepOrder = (levelId: number): LessonStep[] => {
    if (levelId <= 3) {
      // A1–A2: Vocabulary-first, heavy scaffolding, basic production
      // BUG-1 fix: irregular-verbs, false-friends, cultural-deep-dive now included
      return [
        'intro', 'theory', 'grammar-map', 'grammar-tree', 'vocabulary', 'collocation-practice', 'recognition-quiz',
        'controlled-practice', 'generated-practice', 'common-mistakes', 'practice', 'pronunciation', 'pronunciation-lab', 'dialogue',
        'situations', 'irregular-verbs', 'reading-comprehension', 'news-reader', 'sentence-writing', 'basic-transformation',
        'listen-select', 'enhanced-listening', 'dictation', 'crossword', 'mnemonics',
        'idioms', 'phrasal-verbs', 'word-families', 'fun-fact',
        'quiz', 'self-evaluation', 'false-friends', 'cultural-note', 'cultural-deep-dive',
      ];
    }
    if (levelId <= 7) {
      // B1–B2: Balanced, more production and dialogue emphasis
      return [
        'intro', 'theory', 'grammar-map', 'grammar-tree', 'recognition-quiz', 'controlled-practice', 'grammar-contrast', 'vocabulary',
        'collocation-practice', 'vocabulary-explorer', 'generated-practice', 'common-mistakes', 'practice', 'dialogue', 'conversation-practice',
        'situations', 'reading-comprehension', 'news-reader', 'basic-transformation', 'sentence-writing', 'production', 'free-writing', 'writing-workshop',
        'listen-select', 'enhanced-listening', 'dictation', 'irregular-verbs', 'pronunciation', 'pronunciation-lab',
        'crossword', 'mnemonics', 'idioms', 'phrasal-verbs', 'word-families', 'fun-fact',
        'quiz', 'self-evaluation', 'false-friends', 'cultural-note', 'cultural-deep-dive',
      ];
    }
    // C1–C2+: Analysis-first, less scaffolding, more advanced production
    return [
      'intro', 'theory', 'grammar-map', 'grammar-tree', 'recognition-quiz', 'controlled-practice', 'grammar-contrast', 'common-mistakes',
      'vocabulary', 'collocation-practice', 'vocabulary-explorer', 'generated-practice', 'practice', 'reading-comprehension', 'news-reader',
      'basic-transformation', 'listen-select', 'enhanced-listening', 'dictation', 'dialogue', 'conversation-practice', 'situations',
      'production', 'free-writing', 'writing-workshop', 'sentence-writing', 'irregular-verbs', 'pronunciation', 'pronunciation-lab',
      'crossword', 'mnemonics', 'idioms', 'phrasal-verbs', 'word-families', 'fun-fact',
      'quiz', 'self-evaluation', 'false-friends', 'cultural-note', 'cultural-deep-dive',
    ];
  };

  const steps: StepConfig[] = getStepOrder(level.id)
    .map(id => stepPool[id])
    .filter(step => step.available);

  const activeSteps = steps.map(s => s.id);

  const areAllLessonStepsCompleted = (completed: Set<LessonStep>) =>
    steps.length > 0 && steps.every(s => completed.has(s.id));

  const getPreviousStep = (currentStepId: string): LessonStep => {
    const currentIndex = activeSteps.findIndex(s => s === currentStepId);
    if (currentIndex <= 0) return activeSteps[0] as LessonStep;
    return activeSteps[currentIndex - 1] as LessonStep;
  };

  const stepListSignature = steps.map(s => s.id).join('|');
  const [draftHydrated, setDraftHydrated] = useState(false);

  useLayoutEffect(() => {
    if (!stepListSignature) {
      setDraftHydrated(true);
      return;
    }
    const d = loadLessonFlowDraft(levelId, taskId, draftUserKey);
    if (d && d.levelId === Number(levelId) && d.taskId === Number(taskId)) {
      const allowed = new Set<LessonStep>([...activeSteps, 'complete']);
      const completedFiltered = (d.completedSteps ?? []).filter(s => allowed.has(s));
      setCompletedSteps(new Set(completedFiltered));
      setSessionStats(d.sessionStats);
      setReadingAnswers(d.readingAnswers ?? {});
      setProductionText(d.productionText ?? '');
      setFreeWritingText(d.freeWritingText ?? '');
      setFreeWritingPromptIndex(d.freeWritingPromptIndex ?? null);
      setDictationState(
        d.dictationState ? { checked: false, ...d.dictationState } as typeof d.dictationState & { checked: boolean } : { sentenceIndex: 0, input: '', showSentence: true, completed: false, checked: false },
      );
      setConversationState(
        d.conversationState ?? { scenarioIndex: 0, currentTurnId: null, showFeedback: false },
      );
      setGrammarContrastSelected(d.grammarContrastSelected ?? null);
      setActiveTheoryTab(typeof d.activeTheoryTab === 'number' ? d.activeTheoryTab : 0);

      if (d.stepScores && typeof d.stepScores === 'object') {
        const nextScores: Partial<Record<LessonStep, number>> = {};
        for (const [k, v] of Object.entries(d.stepScores)) {
          if (allowed.has(k as LessonStep) && typeof v === 'number' && Number.isFinite(v)) {
            nextScores[k as LessonStep] = Math.round(Math.min(100, Math.max(0, v)));
          }
        }
        setStepScores(nextScores);
      } else {
        setStepScores({});
      }

      const completedSet = new Set(completedFiltered);
      let nextStep: LessonStep = d.currentStep;
      if (!allowed.has(nextStep)) {
        const firstOpen = activeSteps.find(s => !completedSet.has(s));
        nextStep =
          firstOpen ??
          activeSteps[activeSteps.length - 1] ??
          activeSteps[0];
      } else if (nextStep === 'complete') {
        if (!areAllLessonStepsCompleted(completedSet)) {
          nextStep =
            activeSteps.find(s => !completedSet.has(s)) ??
            activeSteps[0];
        }
      }
      setCurrentStep(nextStep);

      const noteIdx = d.culturalDeepDiveNoteIndex;
      setCulturalDeepDiveNoteIndex(
        typeof noteIdx === 'number' && noteIdx >= 0 ? Math.floor(noteIdx) : 0,
      );
    }
    setDraftHydrated(true);
  }, [stepListSignature, levelId, taskId, draftUserKey]);

  useEffect(() => {
    if (!draftHydrated) return;
    if (currentStep === 'complete') {
      latestDraftRef.current = null;
      return;
    }
    const draft: LessonFlowDraftV1 = {
      v: 1,
      levelId: Number(levelId),
      taskId: Number(taskId),
      currentStep,
      completedSteps: [...completedSteps],
      stepScores: Object.keys(stepScores).length ? { ...stepScores } : undefined,
      sessionStats,
      readingAnswers,
      productionText,
      freeWritingText,
      freeWritingPromptIndex,
      dictationState,
      conversationState,
      grammarContrastSelected,
      activeTheoryTab,
      culturalDeepDiveNoteIndex,
      wordIds: words.map(w => w.id),
      savedAt: Date.now(),
    };
    latestDraftRef.current = draft;
    const t = window.setTimeout(() => {
      saveLessonFlowDraft(draft, draftUserKey);
    }, 200);
    return () => window.clearTimeout(t);
  }, [
    draftHydrated,
    currentStep,
    completedSteps,
    stepScores,
    sessionStats,
    readingAnswers,
    productionText,
    freeWritingText,
    freeWritingPromptIndex,
    dictationState,
    conversationState,
    grammarContrastSelected,
    activeTheoryTab,
    culturalDeepDiveNoteIndex,
    words,
    levelId,
    taskId,
    draftUserKey,
  ]);

  /** Al salir de la lección el debounce a veces no llega a ejecutarse; guardamos lo último. */
  useEffect(() => {
    return () => {
      const d = latestDraftRef.current;
      if (d && d.currentStep !== 'complete') {
        saveLessonFlowDraft(d, draftUserKeyRef.current);
      }
    };
  }, []);

  // Guard: if no steps are available, show an informative message rather than
  // silently jumping to the "complete" screen.
  if (steps.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Esta tarea no tiene actividades disponibles.</p>
        <button onClick={() => navigate(`/levels/${levelId}`)} className="btn-primary mt-4">
          Volver al Nivel
        </button>
      </div>
    );
  }

  const progress = steps.length > 0 ? ((completedSteps.size) / steps.length) * 100 : 0;

  const canNavigateToStepIndex = (index: number) => {
    for (let j = 0; j < index; j++) {
      if (!completedSteps.has(steps[j].id)) return false;
    }
    return true;
  };

  const markStepComplete = (step: LessonStep) => {
    setCompletedSteps(prev => new Set(prev).add(step));
  };

  /** Acepta un porcentaje (quiz/actividad) o un evento de click en «Continuar» (solo avanza). */
  const goToNextStep = (arg?: unknown) => {
    const scorePercent = typeof arg === 'number' && Number.isFinite(arg) ? arg : undefined;
    const justCompleted = currentStep;
    markStepComplete(justCompleted);
    if (scorePercent !== undefined) {
      const clamped = Math.round(Math.min(100, Math.max(0, scorePercent)));
      setStepScores(prev => ({ ...prev, [justCompleted]: clamped }));
    }

    const completedAfter = new Set(completedSteps).add(justCompleted);
    const nextIndex = steps.findIndex(s => s.id === justCompleted) + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id);
    } else if (areAllLessonStepsCompleted(completedAfter)) {
      setCurrentStep('complete');
    } else {
      const firstMissing = steps.find(s => !completedAfter.has(s.id));
      if (firstMissing) setCurrentStep(firstMissing.id);
    }
  };

  const handleActivityComplete = async (result: ActivitySessionResult) => {
    if (!user) return;

    setSessionStats(prev => ({
      ...prev,
      xpEarned: prev.xpEarned + result.xpEarned,
      wordsLearned: prev.wordsLearned + result.correctWordIds.length,
      accuracy: Math.round((prev.accuracy + result.accuracy) / 2) || result.accuracy,
    }));

    // Update SRS
    const context = { levelId: Number(levelId), taskId: Number(taskId) };
    await Promise.all([
      ...result.correctWordIds.map(wordId => db.updateVocabularyProgress(user.id, wordId, true, context)),
      ...result.incorrectWordIds.map(wordId => db.updateVocabularyProgress(user.id, wordId, false, context)),
    ]);

    // Feed adaptive engine with results
    const skill = mapStepToSkill(currentStep);
    if (skill) {
      adaptiveEngine.recordBatch(user.id, [
        ...result.correctWordIds.map(() => ({ skill, correct: true })),
        ...result.incorrectWordIds.map(() => ({ skill, correct: false })),
      ]);
    }

    goToNextStep(result.accuracy);
  };

  const handleQuizComplete = async (passed: boolean, score: number, total: number) => {
    const xp = passed ? 30 : 10;
    const pct = total > 0 ? (score / total) * 100 : undefined;
    setSessionStats(prev => ({
      ...prev,
      xpEarned: prev.xpEarned + xp,
      accuracy:
        pct !== undefined
          ? Math.round((prev.accuracy + pct) / 2) || Math.round(pct)
          : prev.accuracy,
    }));
    goToNextStep(pct);
  };

  const handleLessonComplete = async () => {
    if (!user || isSubmitting) return;
    if (!areAllLessonStepsCompleted(completedSteps)) {
      const firstMissing = steps.find(s => !completedSteps.has(s.id));
      if (firstMissing) setCurrentStep(firstMissing.id);
      return;
    }
    setIsSubmitting(true);

    try {
      const timeSpent = Math.round((Date.now() - sessionStats.timeStarted) / 1000);
      
      // Complete the lesson
      await db.completeLesson(
        user.id,
        Number(levelId),
        Number(taskId),
        sessionStats.xpEarned,
        sessionStats.accuracy,
        timeSpent
      );

      await updateStreak();

      // Record grammar modules as studied (TEOR-1/2)
      if (task.grammarTheoryIds && task.grammarTheoryIds.length > 0) {
        await updateGrammarMastery(task.grammarTheoryIds);
      }

      latestDraftRef.current = null;
      clearLessonFlowDraft(levelId, taskId, draftUserKey);

      // Save stats for TaskComplete page
      sessionStorage.setItem('taskCompleteStats', JSON.stringify({
        levelId: Number(levelId),
        taskId: Number(taskId),
        xpEarned: sessionStats.xpEarned,
        accuracy: sessionStats.accuracy,
        timeSpent,
        wordsLearned: sessionStats.wordsLearned,
        isFirstCompletion: true,
    }));

      navigate(`/task-complete/${levelId}/${taskId}`);
    } catch (error) {
      console.error('Error completing lesson:', error);
      setIsSubmitting(false);
    }
  };

  const renderCurrentStep = () => {
    const renderer = stepRegistry[currentStep];
    if (!renderer) return null;
    return renderer({
      task,
      level,
      words,
      theoryModule,
      theoryModules,
      contextualTheoryModules,
      normalizedMistakes,
      currentStep,
      goToNextStep,
      getPreviousStep,
      setCurrentStep,
      navigate,
      levelId,
      sessionStats,
      setSessionStats,
      handleActivityComplete,
      handleQuizComplete,
      handleLessonComplete,
      activeTheoryTab,
      setActiveTheoryTab,
      grammarContrastSelected,
      setGrammarContrastSelected,
      conversationState,
      setConversationState,
      readingAnswers,
      setReadingAnswers,
      productionText,
      setProductionText,
      freeWritingText,
      setFreeWritingText,
      freeWritingPromptIndex,
      dictationState,
      setDictationState,
      productionExercises,
      productionActivity,
      readingCefr,
      conversationScenariosForLevel,
      hasQuizContent,
      normalizedQuizQuestions,
      quizPassingScore,
      masteredGrammarIds: user?.progress?.masteredGrammarIds ?? [],
      culturalDeepDiveNoteIndex,
      setCulturalDeepDiveNoteIndex,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col flex-1 min-h-0 w-full h-full"
    >
      {/* Header with progress */}
      {currentStep !== 'complete' && (
        <div className="sticky top-0 z-10 bg-dark-900/95 backdrop-blur-sm pb-4 mb-6 shrink-0">
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <p className="text-sm text-gray-400">{level.name}</p>
              <p className="font-medium text-white">{task.title}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end gap-1">
                <p className="text-sm text-accent-primary">+{sessionStats.xpEarned} XP</p>
                {!['intro', 'theory', 'complete'].includes(currentStep) && contextualTheoryModules.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowTheoryReview(true)}
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-accent-primary transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Teoría</span>
                  </button>
                )}
              </div>
              <button
                onClick={() => navigate(`/level/${levelId}`)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Salir</span>
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
            />
          </div>

          {/* Pasos: varias filas si hace falta, sin barras elásticas */}
          <div className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-2 mt-3 px-1">
            {steps.map((step, index) => {
              const done = completedSteps.has(step.id);
              const pct = stepScores[step.id];
              const belowPass = done && pct !== undefined && pct < STEP_SCORE_PASS_THRESHOLD;
              const completedOk = done && !belowPass;
              const isCurrent = currentStep === step.id;
              const stepReachable =
                isAdmin || canNavigateToStepIndex(index) || isCurrent;

              let circleClass = 'bg-dark-700 text-gray-500';
              if (completedOk) circleClass = 'bg-green-500 text-white';
              else if (belowPass) circleClass = 'bg-red-600 text-white';
              else if (isCurrent) circleClass = 'bg-accent-primary text-white ring-2 ring-accent-primary/40 ring-offset-1 ring-offset-dark-900';

              let segmentClass = 'bg-dark-700';
              if (completedOk) segmentClass = 'bg-green-500';
              else if (belowPass) segmentClass = 'bg-red-600';

              return (
                <div key={step.id} className="flex items-center">
                  <button
                    type="button"
                    disabled={!stepReachable}
                    onClick={() => stepReachable && setCurrentStep(step.id)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none ${circleClass}`}
                    title={
                      stepReachable
                        ? step.title
                        : `${step.title} — completa las actividades anteriores`
                    }
                    aria-label={step.title}
                    aria-current={isCurrent ? 'step' : undefined}
                  >
                    {completedOk ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : belowPass ? (
                      <XCircle className="w-4 h-4" />
                    ) : (
                      step.icon
                    )}
                  </button>
                  {index < steps.length - 1 && (
                    <div className={`w-3 sm:w-5 h-0.5 mx-0.5 shrink-0 rounded-full ${segmentClass}`} />
                  )}
                </div>
              );
            })}
          </div>
          {/* Indicador del paso actual */}
          <p className="text-center text-xs text-gray-400 mt-2">
            {steps.find(s => s.id === currentStep)?.title}
            <span className="text-gray-600 ml-1">
              ({completedSteps.size}/{steps.length})
            </span>
          </p>
        </div>
      )}

      {/* Step Content: ocupa el alto restante; actividades cortas centradas; largas con scroll */}
      <div className="flex-1 min-h-0 w-full flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full flex-1 min-h-0 overflow-y-auto overflow-x-hidden flex flex-col"
          >
            <div className="flex-1 min-h-[calc(100dvh-15rem)] lg:min-h-[calc(100dvh-11rem)] flex flex-col justify-center py-4">
              <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 pb-28">
                {renderCurrentStep()}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {showTheoryReview && contextualTheoryModules.length > 0 && (
        <TheorySnippetModal modules={contextualTheoryModules} onClose={() => setShowTheoryReview(false)} />
      )}
    </motion.div>
  );
}
