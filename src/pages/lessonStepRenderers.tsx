import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { getContrastPairsByLevel } from '../data/grammar-contrast-pairs';
import { getReadingTextsByLevel } from '../data/reading-texts';
import TaskIntroduction from '../components/activities/TaskIntroduction';
import CommonMistakes from '../components/activities/CommonMistakes';
import ModelDialogue from '../components/activities/ModelDialogue';
import PronunciationGuide from '../components/activities/PronunciationGuide';
import PronunciationLab from '../components/PronunciationLab';
import ConsolidationQuiz from '../components/activities/ConsolidationQuiz';
import CulturalNote from '../components/activities/CulturalNote';
import CollocationPractice from '../components/CollocationPractice';
import WritingWorkshop from '../components/WritingWorkshop';
import VocabularyExplorer from '../components/VocabularyExplorer';
import Flashcards from '../components/activities/Flashcards';
import MultipleChoice from '../components/activities/MultipleChoice';
import GrammarTheoryCard from '../components/activities/GrammarTheoryCard';
import GrammarRecognitionQuiz from '../components/activities/GrammarRecognitionQuiz';
import GrammarMap from '../components/GrammarMap';
import SimpleSentenceWriter from '../components/activities/SimpleSentenceWriter';
import TransformationBasic from '../components/activities/TransformationBasic';
import ListenAndSelect from '../components/activities/ListenAndSelect';
import IrregularVerbsPractice from '../components/IrregularVerbsPractice';
import FalseFriendsPractice from '../components/FalseFriendsPractice';
import CulturalDeepDive from '../components/CulturalDeepDive';
import GrammarTree from '../components/activities/GrammarTree';
import NewsReader from '../components/activities/NewsReader';
import Crossword from '../components/activities/Crossword';
import Situations from '../components/activities/Situations';
import EnhancedListening from '../components/activities/EnhancedListening';
import MnemonicExplorer from '../components/MnemonicCard';
import { getListeningByLevel } from '../data/listening-exercises';
import { generateMixedPractice, hasGeneratorTemplates } from '../data/exercise-generator';
import { getIdiomsByLevel } from '../data/idioms';
import { getPhrasalVerbsByLevel } from '../data/phrasal-verbs';
import { wordFamilies, prefixes } from '../data/word-families';
import { getRandomFunFact } from '../data/fun-facts';
import type { GeneratedExercise } from '../data/exercise-generator';
import type {
  Task,
  Word,
  ActivitySessionResult,
  ModelDialogue as ModelDialogueType,
  PronunciationFocus,
  QuizQuestionItem,
  CulturalNote as CulturalNoteType,
  Level,
  CommonMistakeItem,
  ConversationScenario,
  ListeningExercise,
} from '../types';
import type { GrammarTheoryModule } from '../data/grammar-theory';
import type { ProductiveActivity } from '../data/productive-activities';

export type LessonStep =
  | 'intro'
  | 'theory'
  | 'grammar-map'
  | 'grammar-tree'
  | 'recognition-quiz'
  | 'controlled-practice'
  | 'grammar-contrast'
  | 'common-mistakes'
  | 'vocabulary'
  | 'collocation-practice'
  | 'practice'
  | 'dialogue'
  | 'conversation-practice'
  | 'reading-comprehension'
  | 'pronunciation'
  | 'pronunciation-lab'
  | 'sentence-writing'
  | 'production'
  | 'free-writing'
  | 'writing-workshop'
  | 'vocabulary-explorer'
  | 'basic-transformation'
  | 'listen-select'
  | 'enhanced-listening'
  | 'dictation'
  | 'quiz' 
  | 'cultural-note'
  | 'irregular-verbs'
  | 'false-friends'
  | 'cultural-deep-dive'
  | 'news-reader'
  | 'crossword'
  | 'situations'
  | 'mnemonics'
  | 'generated-practice'
  | 'idioms'
  | 'phrasal-verbs'
  | 'word-families'
  | 'fun-fact'
  | 'self-evaluation'
  | 'complete';

export type StepRendererProps = {
  task: Task;
  level: Level;
  words: Word[];
  theoryModule: GrammarTheoryModule | null;
  theoryModules: GrammarTheoryModule[];
  /** Theory aligned with the current step (e.g. irregular verbs → three forms), for FAB + activity modals */
  contextualTheoryModules: GrammarTheoryModule[];
  normalizedMistakes: CommonMistakeItem[];
  currentStep: LessonStep;
  /** Llamada desde botones (evento) o con un 0–100 para colorear el paso (quiz / accuracy). */
  goToNextStep: (arg?: unknown) => void;
  getPreviousStep: (step: string) => LessonStep;
  setCurrentStep: (step: LessonStep) => void;
  navigate: (path: string) => void;
  levelId: string | undefined;
  sessionStats: { xpEarned: number; wordsLearned: number; accuracy: number; timeStarted: number };
  setSessionStats: (fn: (prev: { xpEarned: number; wordsLearned: number; accuracy: number; timeStarted: number }) => { xpEarned: number; wordsLearned: number; accuracy: number; timeStarted: number }) => void;
  handleActivityComplete: (result: ActivitySessionResult) => void;
  handleQuizComplete: (passed: boolean, score: number, total: number) => void;
  handleLessonComplete: () => void;
  activeTheoryTab: number;
  setActiveTheoryTab: (n: number) => void;
  grammarContrastSelected: 1 | 2 | null;
  setGrammarContrastSelected: (v: 1 | 2 | null) => void;
  conversationState: { scenarioIndex: number; currentTurnId: string | null; showFeedback: boolean };
  setConversationState: (fn: (prev: { scenarioIndex: number; currentTurnId: string | null; showFeedback: boolean }) => { scenarioIndex: number; currentTurnId: string | null; showFeedback: boolean }) => void;
  readingAnswers: Record<string, string | number>;
  setReadingAnswers: (fn: (prev: Record<string, string | number>) => Record<string, string | number>) => void;
  productionText: string;
  setProductionText: (v: string) => void;
  freeWritingText: string;
  setFreeWritingText: (v: string) => void;
  freeWritingPromptIndex: number | null;
  dictationState: { sentenceIndex: number; input: string; showSentence: boolean; completed: boolean; checked: boolean };
  setDictationState: (fn: (prev: { sentenceIndex: number; input: string; showSentence: boolean; completed: boolean; checked: boolean }) => { sentenceIndex: number; input: string; showSentence: boolean; completed: boolean; checked: boolean }) => void;
  productionExercises: { freeWriting: { prompt: string; promptEs?: string; minWords: number; hints?: string[] }[]; dictation: { text: string; translation?: string }[]; translations: unknown[]; blanks: unknown[] };
  productionActivity: ProductiveActivity | undefined;
  readingCefr: string;
  conversationScenariosForLevel: ConversationScenario[];
  hasQuizContent: boolean;
  normalizedQuizQuestions: QuizQuestionItem[];
  quizPassingScore: number;
  masteredGrammarIds: string[];
  culturalDeepDiveNoteIndex: number;
  setCulturalDeepDiveNoteIndex: (n: number) => void;
};

export type StepRenderer = (props: StepRendererProps) => React.ReactNode;

function renderIntro(props: StepRendererProps): React.ReactNode {
  const { task, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  if (!task.introduction) return null;
  const prevStep = getPreviousStep(currentStep);
  const hasPrev = prevStep !== currentStep;
  return (
    <div className="space-y-6 w-full">
      <TaskIntroduction
        introduction={task.introduction}
        taskTitle={task.title}
        onContinue={goToNextStep}
      />
      {hasPrev && (
        <button onClick={() => setCurrentStep(prevStep)} className="btn-secondary text-sm">
          Atrás
        </button>
      )}
    </div>
  );
}

function renderTheory(props: StepRendererProps): React.ReactNode {
  const { task, theoryModules, activeTheoryTab, setActiveTheoryTab, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  if (theoryModules.length === 0) return null;
  const content = theoryModules.length === 1 ? (
    <GrammarTheoryCard
      module={theoryModules[0]}
      onContinue={goToNextStep}
      taskTitle={task.title}
    />
  ) : (
    <div className="space-y-6 w-full">
      <div className="flex gap-2 border-b border-dark-600 pb-2">
        {theoryModules.map((mod, i) => (
          <button
            key={mod.id}
            onClick={() => setActiveTheoryTab(i)}
            className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
              activeTheoryTab === i
                ? 'bg-accent-primary text-white'
                : 'bg-dark-700 text-gray-400 hover:text-white'
            }`}
          >
            {mod.title}
          </button>
        ))}
      </div>
      <GrammarTheoryCard
        module={theoryModules[activeTheoryTab]}
        onContinue={goToNextStep}
        taskTitle={task.title}
      />
    </div>
  );
  return (
    <div className="space-y-6 w-full">
      {content}
      <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary text-sm">
        Atrás
      </button>
    </div>
  );
}

function renderGrammarMap(props: StepRendererProps): React.ReactNode {
  const { task, level, currentStep, getPreviousStep, setCurrentStep, goToNextStep, masteredGrammarIds } = props;
  return (
    <div className="space-y-6 w-full">
      <GrammarMap
        currentLevel={level.id}
        grammarTheoryIds={task.grammarTheoryIds}
        masteredGrammarIds={masteredGrammarIds}
        onBack={() => setCurrentStep(getPreviousStep(currentStep))}
      />
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep(getPreviousStep(currentStep))}
          className="btn-secondary"
        >
          Atrás
        </button>
        <button onClick={goToNextStep} className="btn-primary">
          Continuar
        </button>
      </div>
    </div>
  );
}

function renderRecognitionQuiz(props: StepRendererProps): React.ReactNode {
  const { task, theoryModule, setSessionStats, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  if (!theoryModule) return null;
  return (
    <GrammarRecognitionQuiz
      module={theoryModule}
      onComplete={(score, total) => {
        const xp = Math.round((score / Math.max(total, 1)) * 15);
        setSessionStats(prev => ({
          ...prev,
          xpEarned: prev.xpEarned + xp,
          accuracy: Math.round((prev.accuracy + (score / Math.max(total, 1) * 100)) / 2) || Math.round(score / Math.max(total, 1) * 100),
        }));
        goToNextStep();
      }}
      taskTitle={task.title}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

// GRAM-2 / ACT-7: Controlled practice — productive exercises with model answers
function ControlledPracticeStep({ theoryModule, setSessionStats, goToNextStep, currentStep, getPreviousStep, setCurrentStep }: StepRendererProps) {
  const [idx, setIdx] = React.useState(0);
  const [input, setInput] = React.useState('');
  const [revealed, setRevealed] = React.useState(false);
  const controlled = theoryModule!.exercises.controlled;
  const current = controlled[idx % controlled.length];
  const total = Math.min(controlled.length, 5);
  const isLast = idx >= total - 1;

  const handleNext = () => {
    const xp = revealed ? 10 : 5;
    setSessionStats(prev => ({ ...prev, xpEarned: prev.xpEarned + xp }));
    if (isLast) {
      goToNextStep();
    } else {
      setIdx(prev => prev + 1);
      setInput('');
      setRevealed(false);
    }
  };

  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Práctica Controlada</h2>
        <span className="text-sm text-gray-400">{idx + 1} / {total}</span>
      </div>
      <p className="text-sm text-gray-400">Escribe tu respuesta y compárala con la respuesta modelo.</p>

      <div className="bg-dark-700 rounded-xl p-5 space-y-4">
        <div>
          <p className="text-sm text-accent-primary font-medium mb-1">Ejercicio</p>
          <p className="text-white text-lg">{current.prompt}</p>
          {current.promptEs && current.promptEs !== current.prompt && (
            <p className="text-sm text-gray-500 mt-1">{current.promptEs}</p>
          )}
          {current.hint && (
            <p className="text-xs text-gray-400 mt-2">💡 Pista: {current.hint}</p>
          )}
        </div>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={revealed}
          placeholder="Escribe tu respuesta aquí..."
          className="w-full min-h-[80px] bg-dark-800 rounded-lg p-3 text-white placeholder-gray-500 border border-dark-600 focus:border-accent-primary outline-none resize-y"
          rows={3}
        />
        {!revealed ? (
          <button onClick={() => setRevealed(true)} disabled={input.trim().length === 0} className="btn-secondary w-full disabled:opacity-40">
            Ver respuesta modelo
          </button>
        ) : (
          <div className="space-y-3">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-xs text-green-400 font-medium mb-1">✓ Respuesta modelo</p>
              <p className="text-white font-mono text-sm">{current.answer}</p>
            </div>
            <button onClick={handleNext} className="btn-primary w-full">
              {isLast ? 'Continuar' : 'Siguiente ejercicio'}
            </button>
          </div>
        )}
      </div>
      <div className="flex gap-3">
        <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary">Atrás</button>
      </div>
    </div>
  );
}

function renderControlledPractice(props: StepRendererProps): React.ReactNode {
  if (!props.theoryModule || props.theoryModule.exercises.controlled.length === 0) return null;
  return <ControlledPracticeStep {...props} />;
}

function renderGrammarContrast(props: StepRendererProps): React.ReactNode {
  const {
    level,
    currentStep,
    grammarContrastSelected,
    setGrammarContrastSelected,
    getPreviousStep,
    setCurrentStep,
    goToNextStep,
  } = props;
  const contrastPairs = getContrastPairsByLevel(level.id);
  if (contrastPairs.length === 0) return null;
  const practicePair = contrastPairs[0];
  const practiceEx = practicePair.discriminationExercises[0];
  const isCorrect = grammarContrastSelected === practiceEx.correctTense;
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-xl font-bold text-white">Grammar Contrast / Contraste Gramatical</h2>
      {contrastPairs.map((pair) => (
        <div key={pair.id} className="bg-dark-700 rounded-lg p-5 space-y-4">
          <div className="flex items-center justify-between gap-4 border-b border-dark-600 pb-3">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-accent-primary">{pair.tense1.name}</h3>
              <p className="text-xs text-gray-400">{pair.tense1.nameEs}</p>
              <p className="text-sm text-gray-300 mt-1 font-mono">{pair.tense1.formula}</p>
              <p className="text-xs text-gray-400 mt-1">When to use: {pair.tense1.keySignals.join(', ')}</p>
            </div>
            <span className="text-gray-500">vs</span>
            <div className="flex-1 text-right">
              <h3 className="text-sm font-medium text-accent-primary">{pair.tense2.name}</h3>
              <p className="text-xs text-gray-400">{pair.tense2.nameEs}</p>
              <p className="text-sm text-gray-300 mt-1 font-mono">{pair.tense2.formula}</p>
              <p className="text-xs text-gray-400 mt-1">When to use: {pair.tense2.keySignals.join(', ')}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-800 rounded p-3">
              <p className="text-xs text-accent-primary mb-1">Example ({pair.tense1.name})</p>
              <p className="text-sm text-white">{pair.minimalPairs[0]?.sentence1 || pair.discriminationExercises.find(e => e.correctTense === 1)?.sentence || '—'}</p>
            </div>
            <div className="bg-dark-800 rounded p-3">
              <p className="text-xs text-accent-primary mb-1">Example ({pair.tense2.name})</p>
              <p className="text-sm text-white">{pair.minimalPairs[0]?.sentence2 || pair.discriminationExercises.find(e => e.correctTense === 2)?.sentence || '—'}</p>
            </div>
          </div>
          <p className="text-sm text-gray-300">{pair.conceptualDifferenceEs || pair.conceptualDifference}</p>
          {pair.errorHospital.length > 0 && (
            <div className="bg-dark-800 rounded p-3">
              <p className="text-xs text-amber-400 mb-1">Common confusion / Confusión común</p>
              <p className="text-sm text-gray-300">
                <span className="line-through text-red-400">{pair.errorHospital[0].wrong}</span>
                {' → '}
                <span className="text-green-400">{pair.errorHospital[0].correct}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">{pair.errorHospital[0].l1CauseEs || pair.errorHospital[0].l1Cause}</p>
            </div>
          )}
        </div>
      ))}
      <div className="bg-dark-700 rounded-lg p-5">
        <h3 className="text-sm font-medium text-accent-primary mb-3">Which is correct in this context? / ¿Cuál es correcto en este contexto?</h3>
        <p className="text-white mb-4">{practiceEx.sentence}</p>
        <div className="flex gap-3">
          <button
            onClick={() => setGrammarContrastSelected(1)}
            className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
              grammarContrastSelected === 1
                ? isCorrect
                  ? 'border-green-500 bg-green-500/20 text-green-400'
                  : 'border-red-500 bg-red-500/20 text-red-400'
                : 'border-dark-600 bg-dark-800 text-gray-300 hover:border-accent-primary'
            }`}
          >
            {practicePair.tense1.name}
          </button>
          <button
            onClick={() => setGrammarContrastSelected(2)}
            className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
              grammarContrastSelected === 2
                ? isCorrect
                  ? 'border-green-500 bg-green-500/20 text-green-400'
                  : 'border-red-500 bg-red-500/20 text-red-400'
                : 'border-dark-600 bg-dark-800 text-gray-300 hover:border-accent-primary'
            }`}
          >
            {practicePair.tense2.name}
          </button>
        </div>
        {grammarContrastSelected !== null && (
          <p className={`mt-3 text-sm ${isCorrect ? 'text-green-400' : 'text-amber-400'}`}>
            {practiceEx.explanationEs || practiceEx.explanation}
          </p>
        )}
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep(getPreviousStep(currentStep))}
          className="btn-secondary"
        >
          Atrás
        </button>
        <button onClick={goToNextStep} className="btn-primary">
          Continuar
        </button>
      </div>
    </div>
  );
}

function renderCommonMistakes(props: StepRendererProps): React.ReactNode {
  const { task, normalizedMistakes, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  if (normalizedMistakes.length === 0) return null;
  return (
    <div className="space-y-6 w-full">
      <CommonMistakes
        mistakes={normalizedMistakes}
        taskTitle={task.title}
        onContinue={goToNextStep}
      />
      <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary text-sm">
        Atrás
      </button>
    </div>
  );
}

function renderVocabulary(props: StepRendererProps): React.ReactNode {
  const { words, handleActivityComplete, currentStep, getPreviousStep, setCurrentStep } = props;
  return (
    <Flashcards
      words={words.slice(0, 15)}
      onComplete={handleActivityComplete}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderCollocationPractice(props: StepRendererProps): React.ReactNode {
  const { level, currentStep, getPreviousStep, setCurrentStep, goToNextStep } = props;
  return (
    <CollocationPractice
      level={level.id}
      onComplete={goToNextStep}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderVocabularyExplorer(props: StepRendererProps): React.ReactNode {
  const { level, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  return (
    <VocabularyExplorer
      level={level.id}
      onComplete={goToNextStep}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderPractice(props: StepRendererProps): React.ReactNode {
  const { words, handleActivityComplete, currentStep, getPreviousStep, setCurrentStep } = props;
  return (
    <MultipleChoice
      words={words.slice(0, 10)}
      onComplete={handleActivityComplete}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderDialogue(props: StepRendererProps): React.ReactNode {
  const { task, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  if (!task.modelDialogue) return null;
  return (
    <ModelDialogue
      dialogue={task.modelDialogue as ModelDialogueType}
      taskTitle={task.title}
      onComplete={goToNextStep}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderConversationPractice(props: StepRendererProps): React.ReactNode {
  const {
    currentStep,
    conversationScenariosForLevel,
    conversationState,
    setConversationState,
    getPreviousStep,
    setCurrentStep,
    goToNextStep,
  } = props;
  if (conversationScenariosForLevel.length === 0) return null;
  const scenario = conversationScenariosForLevel[conversationState.scenarioIndex % conversationScenariosForLevel.length];
  const firstTurnId = scenario.dialogue[0]?.id ?? null;
  const currentTurnId = conversationState.currentTurnId ?? firstTurnId;
  const currentTurn = currentTurnId ? scenario.dialogue.find(t => t.id === currentTurnId) : null;

  const handleConversationOptionSelect = (nextTurnId: string | undefined) => {
    if (!nextTurnId) {
      goToNextStep();
      return;
    }
    const nextTurn = scenario.dialogue.find(t => t.id === nextTurnId);
    if (nextTurn?.feedback && !nextTurn.userOptions?.length) {
      goToNextStep();
      return;
    }
    setConversationState(prev => ({ ...prev, currentTurnId: nextTurnId, showFeedback: false }));
  };

  if (!currentTurn) return null;

  const isUserTurn = currentTurn.userOptions && currentTurn.userOptions.length > 0;
  const isFinalTurn = currentTurn.feedback && !isUserTurn;

  return (
    <div className="space-y-6 w-full">
      <h2 className="text-xl font-bold text-white">{scenario.titleEs}</h2>
      <p className="text-gray-300">{scenario.descriptionEs || scenario.description}</p>
      <div className="bg-dark-700 rounded-lg p-4">
        <p className="text-sm text-accent-primary mb-1">Contexto</p>
        <p className="text-gray-200">{scenario.contextEs || scenario.context}</p>
      </div>
      <div className="space-y-4">
        {currentTurn.text && (
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-xs text-accent-primary mb-1">{scenario.roles.find(r => r.id === currentTurn.roleId)?.name}</p>
            <p className="text-white">{currentTurn.text}</p>
          </div>
        )}
        {isUserTurn && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-300">Elige tu respuesta:</p>
            <div className="flex flex-col gap-2">
              {currentTurn.userOptions!.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleConversationOptionSelect(opt.nextTurnId)}
                  className="text-left py-3 px-4 rounded-lg bg-dark-700 hover:bg-dark-600 text-gray-200 border border-dark-600 hover:border-accent-primary transition-colors"
                >
                  {opt.textEs || opt.text}
                </button>
              ))}
            </div>
          </div>
        )}
        {isFinalTurn && (
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-sm text-accent-primary mb-1">¡Completado!</p>
            <p className="text-gray-200">{currentTurn.feedbackEs || currentTurn.feedback}</p>
          </div>
        )}
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep(getPreviousStep(currentStep))}
          className="btn-secondary"
        >
          Atrás
        </button>
        {isFinalTurn ? (
          <button onClick={goToNextStep} className="btn-primary">Continuar</button>
        ) : !isUserTurn && currentTurn.text ? (
          <button
            onClick={() => {
              const nextIdx = scenario.dialogue.findIndex(t => t.id === currentTurnId) + 1;
              const next = scenario.dialogue[nextIdx];
              if (next) setConversationState(prev => ({ ...prev, currentTurnId: next.id }));
              else goToNextStep();
            }}
            className="btn-primary"
          >
            Continuar
          </button>
        ) : null}
      </div>
    </div>
  );
}

function ReadingComprehensionStep({ props }: { props: StepRendererProps }) {
  const {
    readingCefr,
    readingAnswers,
    setReadingAnswers,
    currentStep,
    getPreviousStep,
    setCurrentStep,
    goToNextStep,
  } = props;

  const [checked, setChecked] = useState(false);

  const texts = getReadingTextsByLevel(readingCefr as 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2');
  const readingText = texts[0];
  if (!readingText) return null;

  const answerableQs = readingText.questions.filter(
    q => (q.type === 'multiple-choice' && q.options) || q.type === 'true-false'
  );
  const allAnswered = answerableQs.length === 0 || answerableQs.every(q => readingAnswers[q.id] !== undefined);

  const getIsCorrect = (q: (typeof answerableQs)[number]): boolean => {
    const ans = readingAnswers[q.id];
    if (q.type === 'multiple-choice') return ans === q.correct;
    if (q.type === 'true-false') return String(ans) === String(q.correct);
    return false;
  };

  const score =
    checked && answerableQs.length > 0
      ? Math.round((answerableQs.filter(q => getIsCorrect(q)).length / answerableQs.length) * 100)
      : 0;

  const handleCheck = () => setChecked(true);

  const handleContinue = () => goToNextStep(checked ? score : undefined);

  return (
    <div className="space-y-6 w-full">
      <h2 className="text-xl font-bold text-white">{readingText.title}</h2>
      <div className="bg-dark-700 rounded-lg p-4 text-gray-200 whitespace-pre-wrap">{readingText.text}</div>

      {readingText.vocabulary.length > 0 && (
        <div className="bg-dark-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-accent-primary mb-2">Vocabulario útil</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            {readingText.vocabulary.map(v => (
              <li key={v.word}><strong>{v.word}</strong> — {v.translation}</li>
            ))}
          </ul>
        </div>
      )}

      {answerableQs.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-accent-primary">Preguntas de comprensión</h3>
          {answerableQs.map(q => {
            const isCorrect = checked ? getIsCorrect(q) : null;
            const borderClass = checked
              ? isCorrect
                ? 'border border-green-500'
                : 'border border-red-500'
              : 'border border-transparent';
            return (
              <div key={q.id} className={`bg-dark-700 rounded-lg p-4 ${borderClass}`}>
                <p className="text-white mb-3">{q.questionEs || q.question}</p>

                {q.type === 'multiple-choice' && q.options && (
                  <div className="flex flex-col gap-2">
                    {q.options.map((opt, i) => {
                      const isSelected = readingAnswers[q.id] === i;
                      const isThisCorrect = checked && i === q.correct;
                      const isThisWrong = checked && isSelected && i !== q.correct;
                      return (
                        <label
                          key={i}
                          className={`flex items-center gap-2 cursor-pointer rounded px-2 py-1 ${
                            isThisCorrect ? 'bg-green-900/40 text-green-300' :
                            isThisWrong  ? 'bg-red-900/40 text-red-300' :
                            'text-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            disabled={checked}
                            checked={isSelected}
                            onChange={() => setReadingAnswers(prev => ({ ...prev, [q.id]: i }))}
                            className="accent-accent-primary"
                          />
                          <span>{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                )}

                {q.type === 'true-false' && (
                  <div className="flex gap-3">
                    {(['true', 'false'] as const).map(val => {
                      const label = val === 'true' ? 'Verdadero' : 'Falso';
                      const isSelected = String(readingAnswers[q.id]) === val;
                      const isThisCorrect = checked && String(q.correct) === val;
                      const isThisWrong = checked && isSelected && String(q.correct) !== val;
                      return (
                        <button
                          key={val}
                          disabled={checked}
                          onClick={() => setReadingAnswers(prev => ({ ...prev, [q.id]: val }))}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isThisCorrect ? 'bg-green-700 text-white' :
                            isThisWrong  ? 'bg-red-700 text-white' :
                            isSelected   ? 'bg-accent-primary text-white' :
                            'bg-dark-600 text-gray-300 hover:bg-dark-500'
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {checked && (
                  <div className={`mt-3 text-sm flex items-start gap-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    <span>{isCorrect ? '✓ Correcto' : '✗ Incorrecto'}</span>
                    {q.explanationEs && (
                      <span className="text-gray-400">— {q.explanationEs}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {checked && answerableQs.length > 0 && (
        <div className="bg-dark-800 rounded-lg p-4 text-center">
          <p className="text-white font-semibold text-lg">
            Resultado: {answerableQs.filter(q => getIsCorrect(q)).length} / {answerableQs.length}
            <span className="ml-2 text-accent-primary">({score}%)</span>
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary">
          Atrás
        </button>
        {!checked && answerableQs.length > 0 ? (
          <button
            onClick={handleCheck}
            disabled={!allAnswered}
            className={`btn-primary ${!allAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Comprobar
          </button>
        ) : (
          <button onClick={handleContinue} className="btn-primary">
            Continuar
          </button>
        )}
      </div>
    </div>
  );
}

function renderReadingComprehension(props: StepRendererProps): React.ReactNode {
  return <ReadingComprehensionStep props={props} />;
}

function renderProduction(props: StepRendererProps): React.ReactNode {
  const {
    productionActivity,
    productionText,
    setProductionText,
    currentStep,
    getPreviousStep,
    setCurrentStep,
    goToNextStep,
  } = props;
  if (!productionActivity) return null;
  const usefulPhrases = 'usefulLanguage' in productionActivity ? productionActivity.usefulLanguage : [];
  const prompt = productionActivity.instructionEn || productionActivity.instructionEs;
  const motionText = 'motion' in productionActivity ? productionActivity.motion : null;
  const scaffoldSteps = 'scaffoldSteps' in productionActivity ? productionActivity.scaffoldSteps ?? [] : [];
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-xl font-bold text-white">{productionActivity.title || productionActivity.titleEs}</h2>
      <p className="text-gray-300">{prompt}</p>
      {productionActivity.instructionEn && productionActivity.instructionEs && productionActivity.instructionEn !== productionActivity.instructionEs && (
        <p className="text-sm text-gray-500">{productionActivity.instructionEs}</p>
      )}
      {motionText && (
        <div className="bg-dark-700 rounded-lg p-4">
          <p className="text-sm text-accent-primary mb-1">Proposición</p>
          <p className="text-white italic">&quot;{motionText}&quot;</p>
        </div>
      )}
      {scaffoldSteps.length > 0 && (
        <div className="bg-dark-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-accent-primary mb-2">Pasos sugeridos</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
            {scaffoldSteps.map((s: { step: number; prompt: string; promptEs: string }) => (
              <li key={s.step}>
                <span className="text-white">{s.prompt}</span>
                {s.promptEs && s.promptEs !== s.prompt && (
                  <span className="block text-gray-500 text-xs mt-0.5">{s.promptEs}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
      {usefulPhrases.length > 0 && (
        <div className="bg-dark-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-accent-primary mb-2">Frases útiles</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {usefulPhrases.map((uf: { function: string; functionEs: string; phrases: string[] }, i: number) => (
              <li key={i}>
                <strong className="text-white">{uf.function}</strong>
                {uf.functionEs && uf.functionEs !== uf.function && (
                  <span className="text-gray-500"> ({uf.functionEs})</span>
                )}
                : {uf.phrases.slice(0, 2).join(' / ')}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Tu respuesta</label>
        <textarea
          value={productionText}
          onChange={e => setProductionText(e.target.value)}
          placeholder="Escribe tu respuesta aquí..."
          className="w-full min-h-[120px] bg-dark-700 rounded-lg p-4 text-white placeholder-gray-500 border border-dark-600 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none resize-y"
          rows={5}
        />
        <p className="text-xs text-gray-400 mt-1">
          {productionText.trim().split(/\s+/).filter(Boolean).length} palabras
        </p>
      </div>
      {productionText.trim().split(/\s+/).filter(Boolean).length >= 10 && (
        <div className="rounded-lg p-3 bg-green-500/10 border border-green-500/30">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-lg">✓</span>
            <span className="text-green-400 text-sm font-medium">¡Buen trabajo! Tu respuesta tiene suficiente contenido.</span>
          </div>
        </div>
      )}
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep(getPreviousStep(currentStep))}
          className="btn-secondary"
        >
          Atrás
        </button>
        <button
          onClick={goToNextStep}
          disabled={productionText.trim().split(/\s+/).filter(Boolean).length < 5}
          className="btn-primary disabled:opacity-50"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

function renderFreeWriting(props: StepRendererProps): React.ReactNode {
  const {
    productionExercises,
    freeWritingPromptIndex,
    freeWritingText,
    setFreeWritingText,
    currentStep,
    getPreviousStep,
    setCurrentStep,
    goToNextStep,
  } = props;
  const prompts = productionExercises.freeWriting;
  if (prompts.length === 0) return null;
  const prompt = prompts[freeWritingPromptIndex ?? 0];
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-xl font-bold text-white">Escritura Libre</h2>
      <p className="text-gray-200 text-lg">{prompt.prompt}</p>
      {prompt.promptEs && prompt.promptEs !== prompt.prompt && (
        <p className="text-sm text-gray-500">{prompt.promptEs}</p>
      )}
      <div className="bg-dark-700 rounded-lg p-4">
        <p className="text-sm text-accent-primary mb-1">Mínimo {prompt.minWords} palabras</p>
        {prompt.hints && prompt.hints.length > 0 && (
          <div className="mt-2">
            <p className="text-xs text-gray-400 mb-1">Frases útiles:</p>
            <p className="text-sm text-gray-300">{prompt.hints.join(' • ')}</p>
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Tu texto</label>
        <textarea
          value={freeWritingText}
          onChange={e => setFreeWritingText(e.target.value)}
          placeholder="Escribe tu respuesta aquí..."
          className="w-full min-h-[160px] bg-dark-700 rounded-lg p-4 text-white placeholder-gray-500 border border-dark-600 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none resize-y"
          rows={6}
        />
        {(() => {
          const wc = freeWritingText.trim().split(/\s+/).filter(Boolean).length;
          const meetsMin = wc >= prompt.minWords;
          return (
            <p className={`text-xs mt-1 ${meetsMin ? 'text-green-400' : 'text-gray-400'}`}>
              {wc} / {prompt.minWords} palabras {meetsMin ? '✓' : ''}
            </p>
          );
        })()}
      </div>
      {freeWritingText.trim().split(/\s+/).filter(Boolean).length >= prompt.minWords && (
        <div className="rounded-lg p-3 bg-green-500/10 border border-green-500/30">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-lg">✓</span>
            <span className="text-green-400 text-sm font-medium">¡Has alcanzado el mínimo de palabras!</span>
          </div>
        </div>
      )}
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep(getPreviousStep(currentStep))}
          className="btn-secondary"
        >
          Atrás
        </button>
        <button
          onClick={goToNextStep}
          disabled={freeWritingText.trim().split(/\s+/).filter(Boolean).length < prompt.minWords}
          className="btn-primary disabled:opacity-50"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

function renderWritingWorkshop(props: StepRendererProps): React.ReactNode {
  const { level, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  return (
    <WritingWorkshop
      level={level.id}
      onComplete={goToNextStep}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function normalizePronunciationFocus(raw: any): PronunciationFocus {
  // Handle array format used in levels 12-13: [{word, phonetic, tip}]
  if (Array.isArray(raw)) {
    return {
      sounds: raw.map((item: any) => ({
        symbol: item.phonetic ?? '🔊',
        description: item.word ?? '',
        descriptionEs: item.word ?? '',
        examples: [{ word: item.word ?? '', transcription: item.phonetic ?? '' }],
        tips: item.tip ? [item.tip] : [],
        tipsEs: item.tipsEs,
      })),
      commonProblems: [],
    };
  }
  const mapExample = (ex: any) =>
    typeof ex === 'string'
      ? { word: ex, transcription: '' }
      : {
          word: ex.word ?? '',
          transcription: ex.transcription ?? ex.phonetic ?? '',
          approximationEs: ex.approximationEs,
        };

  const sounds: PronunciationFocus['sounds'] = (raw.sounds ?? []).map((s: any) => {
    // Niveles altos: { symbol, word, tip } sin array examples
    if (typeof s.word === 'string' && (!Array.isArray(s.examples) || s.examples.length === 0)) {
      const tipList = Array.isArray(s.tips) ? s.tips : s.tip ? [s.tip] : [];
      const tr = String(s.symbol ?? '').replace(/^\//, '').replace(/\/$/, '');
      return {
        symbol: s.symbol ?? '/?/',
        description: typeof s.description === 'string' ? s.description : s.word,
        descriptionEs:
          typeof s.descriptionEs === 'string'
            ? s.descriptionEs
            : typeof s.description === 'string'
              ? s.description
              : s.word,
        examples: [{ word: s.word, transcription: tr, approximationEs: s.approximationEs }],
        tips: tipList,
        tipsEs: s.tipsEs,
      };
    }
    if (Array.isArray(s.examples) && s.examples.length > 0 && typeof s.examples[0] === 'object') {
      return {
        symbol: s.symbol ?? s.sound ?? '🔊',
        description: s.description ?? s.sound ?? '',
        descriptionEs: s.descriptionEs ?? s.description ?? s.sound ?? '',
        examples: (s.examples as any[]).map(mapExample),
        tips: Array.isArray(s.tips) ? s.tips : [],
        tipsEs: s.tipsEs,
      };
    }
    return {
      symbol: s.sound ?? s.symbol ?? '🔊',
      description: s.sound ?? '',
      descriptionEs: s.sound ?? '',
      examples: (s.examples ?? []).map((ex: string) => mapExample(ex)),
      tips: s.tip ? [s.tip] : [],
      tipsEs: s.tipsEs,
    };
  });

  const commonProblems: PronunciationFocus['commonProblems'] = (
    raw.commonProblems ?? raw.commonErrors ?? []
  ).map((p: any) => ({
    word: p.word ?? '',
    wrong: p.wrong ?? '',
    correct: p.correct ?? p.right ?? '',
    tip: p.tip ?? p.note ?? '',
  }));

  return {
    sounds,
    commonProblems,
    minimalPairs: raw.minimalPairs,
    intonationPatterns: raw.intonationPatterns,
  };
}

function renderPronunciation(props: StepRendererProps): React.ReactNode {
  const { task, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  if (!task.pronunciationFocus) return null;
  const normalized = normalizePronunciationFocus(task.pronunciationFocus);
  return (
    <PronunciationGuide
      pronunciation={normalized}
      taskTitle={task.title}
      onComplete={goToNextStep}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderPronunciationLab(props: StepRendererProps): React.ReactNode {
  const { level, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  return (
    <PronunciationLab
      level={level.id}
      onComplete={goToNextStep}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderSentenceWriting(props: StepRendererProps): React.ReactNode {
  const { level, setSessionStats, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  // ACT-2 fix: pass correct CEFR level
  const writerLevel = level.id <= 2 ? 'A1' : level.id <= 4 ? 'A2' : level.id <= 7 ? 'B1' : 'B2';
  return (
    <SimpleSentenceWriter
      level={writerLevel as 'A1' | 'A2' | 'B1' | 'B2'}
      onComplete={(score, total) => {
        const xp = Math.round((score / Math.max(total, 1)) * 20);
        setSessionStats(prev => ({
          ...prev,
          xpEarned: prev.xpEarned + xp,
          accuracy: Math.round((prev.accuracy + (score / Math.max(total, 1) * 100)) / 2) || Math.round(score / Math.max(total, 1) * 100),
        }));
        goToNextStep();
      }}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderBasicTransformation(props: StepRendererProps): React.ReactNode {
  const { level, setSessionStats, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  // ACT-2 fix: pass correct CEFR level  
  const transformLevel = level.id <= 2 ? 'A1' : level.id <= 4 ? 'A2' : level.id <= 7 ? 'B1' : 'B2';
  return (
    <TransformationBasic
      level={transformLevel as 'A1' | 'A2' | 'B1' | 'B2'}
      onComplete={(score, total) => {
        const xp = Math.round((score / Math.max(total, 1)) * 20);
        setSessionStats(prev => ({
          ...prev,
          xpEarned: prev.xpEarned + xp,
          accuracy: Math.round((prev.accuracy + (score / Math.max(total, 1) * 100)) / 2) || Math.round(score / Math.max(total, 1) * 100),
        }));
        goToNextStep();
      }}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderListenSelect(props: StepRendererProps): React.ReactNode {
  const { level, setSessionStats, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  // ACT-2 fix: pass correct CEFR level instead of always A2 for B1+
  const listenLevel = level.id <= 2 ? 'A1' : level.id <= 4 ? 'A2' : level.id <= 7 ? 'B1' : 'B2';
  return (
    <ListenAndSelect
      level={listenLevel as 'A1' | 'A2' | 'B1' | 'B2'}
      onComplete={(score, total) => {
        const xp = Math.round((score / Math.max(total, 1)) * 20);
        setSessionStats(prev => ({
          ...prev,
          xpEarned: prev.xpEarned + xp,
          accuracy: Math.round((prev.accuracy + (score / Math.max(total, 1) * 100)) / 2) || Math.round(score / Math.max(total, 1) * 100),
        }));
        goToNextStep();
      }}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderDictation(props: StepRendererProps): React.ReactNode {
  const {
    productionExercises,
    dictationState,
    setDictationState,
    currentStep,
    getPreviousStep,
    setCurrentStep,
    goToNextStep,
  } = props;
  const dictationList = productionExercises.dictation;
  if (dictationList.length === 0) return null;
  const sentence = dictationList[dictationState.sentenceIndex % dictationList.length];
  const { showSentence, checked } = dictationState;

  const normalize = (s: string) => s.trim().toLowerCase().replace(/[.,!?;:'"]/g, '').replace(/\s+/g, ' ');
  const isCorrect = checked && normalize(dictationState.input) === normalize(sentence.text);

  return (
    <div className="space-y-6 w-full">
      <h2 className="text-xl font-bold text-white">Dictado</h2>
      <p className="text-gray-300">Lee la oración, memorízala y escríbela de memoria.</p>
      {showSentence ? (
        <div className="space-y-4">
          <div className="bg-dark-700 rounded-lg p-6 text-center">
            <p className="text-xl text-white font-medium">{sentence.text}</p>
            {sentence.translation && (
              <p className="text-sm text-gray-400 mt-2">{sentence.translation}</p>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setCurrentStep(getPreviousStep(currentStep))}
              className="btn-secondary"
            >
              Atrás
            </button>
            <button
              onClick={() => setDictationState(prev => ({ ...prev, showSentence: false, checked: false, input: '' }))}
              className="btn-primary"
            >
              Ya la memorizé
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Escribe lo que recuerdas:</label>
            <textarea
              value={dictationState.input}
              onChange={e => { if (!checked) setDictationState(prev => ({ ...prev, input: e.target.value })); }}
              placeholder="Escribe la oración aquí..."
              className={`w-full min-h-[80px] bg-dark-700 rounded-lg p-4 text-white placeholder-gray-500 border outline-none resize-y ${checked ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-dark-600 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary'}`}
              rows={3}
              readOnly={checked}
            />
          </div>
          {checked && (
            <div className={`rounded-lg p-4 ${isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <><span className="text-green-400 text-lg">✓</span><span className="text-green-400 font-medium">¡Correcto!</span></>
                ) : (
                  <><span className="text-red-400 text-lg">✗</span><span className="text-red-400 font-medium">Incorrecto</span></>
                )}
              </div>
              {!isCorrect && (
                <div className="mt-2">
                  <p className="text-sm text-gray-400">Respuesta correcta:</p>
                  <p className="text-white font-medium">{sentence.text}</p>
                  {sentence.translation && (
                    <p className="text-sm text-gray-500 mt-1">{sentence.translation}</p>
                  )}
                </div>
              )}
            </div>
          )}
          <div className="flex gap-3">
            <button
              onClick={() => setDictationState(prev => ({ ...prev, showSentence: true, input: '', checked: false }))}
              className="btn-secondary"
            >
              Ver de nuevo
            </button>
            {!checked ? (
              <button
                onClick={() => setDictationState(prev => ({ ...prev, checked: true }))}
                disabled={!dictationState.input.trim()}
                className="btn-primary disabled:opacity-50"
              >
                Comprobar
              </button>
            ) : (
              <button onClick={goToNextStep} className="btn-primary">
                Continuar
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function renderQuiz(props: StepRendererProps): React.ReactNode {
  const {
    task,
    hasQuizContent,
    normalizedQuizQuestions,
    quizPassingScore,
    handleQuizComplete,
    currentStep,
    getPreviousStep,
    setCurrentStep,
  } = props;
  if (!hasQuizContent) return null;
  return (
    <ConsolidationQuiz
      questions={normalizedQuizQuestions}
      taskTitle={task.title}
      passingScore={quizPassingScore}
      onComplete={handleQuizComplete}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderCulturalNote(props: StepRendererProps): React.ReactNode {
  const { task, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  if (!task.culturalNote) return null;
  return (
    <div className="space-y-6 w-full">
      <CulturalNote
        note={task.culturalNote as CulturalNoteType}
        taskTitle={task.title}
        onContinue={goToNextStep}
      />
      <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary text-sm">
        Atrás
      </button>
    </div>
  );
}

function renderIrregularVerbs(props: StepRendererProps): React.ReactNode {
  const { level, contextualTheoryModules, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  const theoryForStep = contextualTheoryModules[0] ?? null;
  return (
    <IrregularVerbsPractice
      level={level.id}
      theoryModule={theoryForStep}
      onComplete={goToNextStep}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderFalseFriends(props: StepRendererProps): React.ReactNode {
  const { level, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  return (
    <FalseFriendsPractice
      level={level.id}
      onComplete={goToNextStep}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

function renderCulturalDeepDive(props: StepRendererProps): React.ReactNode {
  const {
    level,
    goToNextStep,
    currentStep,
    getPreviousStep,
    setCurrentStep,
    culturalDeepDiveNoteIndex,
    setCulturalDeepDiveNoteIndex,
  } = props;
  return (
    <CulturalDeepDive
      level={level.id}
      onComplete={goToNextStep}
      onBack={() => setCurrentStep(getPreviousStep(currentStep))}
      noteIndex={culturalDeepDiveNoteIndex}
      onNoteIndexChange={setCulturalDeepDiveNoteIndex}
    />
  );
}

// L1: Self-evaluation — students rate their own confidence before completing the lesson
function SelfEvaluationStep(props: StepRendererProps): React.ReactElement {
  const { task, goToNextStep, sessionStats } = props;
  const [confidence, setConfidence] = React.useState<number | null>(null);
  const [difficulty, setDifficulty] = React.useState<number | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  const confidenceLevels = [
    { value: 1, label: 'Nada seguro/a', emoji: '😟', color: 'text-red-400' },
    { value: 2, label: 'Poco seguro/a', emoji: '😕', color: 'text-orange-400' },
    { value: 3, label: 'Algo seguro/a', emoji: '😐', color: 'text-yellow-400' },
    { value: 4, label: 'Bastante seguro/a', emoji: '🙂', color: 'text-green-400' },
    { value: 5, label: 'Muy seguro/a', emoji: '😊', color: 'text-emerald-400' },
  ];

  const difficultyLevels = [
    { value: 1, label: 'Muy fácil', color: 'bg-emerald-500/20 border-emerald-500/40' },
    { value: 2, label: 'Fácil', color: 'bg-green-500/20 border-green-500/40' },
    { value: 3, label: 'Adecuado', color: 'bg-blue-500/20 border-blue-500/40' },
    { value: 4, label: 'Difícil', color: 'bg-orange-500/20 border-orange-500/40' },
    { value: 5, label: 'Muy difícil', color: 'bg-red-500/20 border-red-500/40' },
  ];

  const handleSubmit = () => {
    if (confidence === null) return;
    sessionStorage.setItem('selfEvaluation', JSON.stringify({
      confidence,
      difficulty,
      accuracy: sessionStats.accuracy,
      taskTitle: task.title,
    }));
    setSubmitted(true);
    setTimeout(() => goToNextStep(), 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 w-full max-w-lg mx-auto"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">¿Cómo te sientes?</h2>
        <p className="text-gray-400">Evalúa tu confianza con el tema de esta lección</p>
      </div>

      <div className="card space-y-4">
        <p className="text-sm text-gray-300 font-medium">
          ¿Qué tan seguro/a te sientes usando lo que aprendiste hoy?
        </p>
        <div className="flex justify-between gap-2">
          {confidenceLevels.map(level => (
            <button
              key={level.value}
              type="button"
              onClick={() => setConfidence(level.value)}
              className={`flex-1 flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all ${
                confidence === level.value
                  ? 'border-accent-primary bg-accent-primary/10 scale-105'
                  : 'border-dark-600 bg-dark-700/50 hover:border-dark-500'
              }`}
            >
              <span className="text-2xl">{level.emoji}</span>
              <span className={`text-[10px] leading-tight text-center ${confidence === level.value ? level.color : 'text-gray-500'}`}>
                {level.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="card space-y-4">
        <p className="text-sm text-gray-300 font-medium">
          ¿Qué tan difícil fue esta lección para ti?
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {difficultyLevels.map(level => (
            <button
              key={level.value}
              type="button"
              onClick={() => setDifficulty(level.value)}
              className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                difficulty === level.value
                  ? `${level.color} font-semibold`
                  : 'border-dark-600 bg-dark-700/50 text-gray-400 hover:border-dark-500'
              }`}
            >
              {level.label}
            </button>
          ))}
        </div>
      </div>

      {confidence !== null && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="card bg-dark-700/50"
        >
          <p className="text-sm text-gray-300">
            {confidence <= 2
              ? '¡No te preocupes! Puedes repasar esta lección en cualquier momento. La práctica constante es la clave. 💪'
              : confidence <= 3
              ? 'Vas por buen camino. Repasa los puntos que te cuestan más y verás la mejora pronto. 📈'
              : '¡Excelente! Tu confianza demuestra progreso real. ¡Sigue así! 🌟'}
          </p>
        </motion.div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={confidence === null || submitted}
        className="btn-primary w-full py-3 text-lg disabled:opacity-40"
      >
        {submitted ? '✓ Guardado' : 'Continuar'}
      </button>
    </motion.div>
  );
}

function renderSelfEvaluation(props: StepRendererProps): React.ReactNode {
  return <SelfEvaluationStep {...props} />;
}

function renderComplete(props: StepRendererProps): React.ReactNode {
  const { sessionStats, handleLessonComplete } = props;
  const timeSpentSeconds = Math.round((Date.now() - sessionStats.timeStarted) / 1000);
  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-[70vh] flex flex-col items-center justify-center w-full py-8"
    >
      <div className="w-full text-center space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-500/30 flex items-center justify-center mx-auto"
        >
          <Trophy className="w-12 h-12 text-yellow-400" />
        </motion.div>
        <h1 className="text-3xl font-bold text-white">¡Lección Completada!</h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-dark-700 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-yellow-400">+{sessionStats.xpEarned}</p>
            <p className="text-sm text-gray-400 mt-1">XP ganados</p>
          </div>
          <div className="bg-dark-700 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-green-400">{sessionStats.accuracy > 0 ? `${sessionStats.accuracy}%` : '—'}</p>
            <p className="text-sm text-gray-400 mt-1">Precisión</p>
          </div>
          <div className="bg-dark-700 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-blue-400">{timeStr}</p>
            <p className="text-sm text-gray-400 mt-1">Tiempo</p>
          </div>
        </div>
        {sessionStats.wordsLearned > 0 && (
          <p className="text-sm text-gray-300">
            <span className="text-accent-primary font-semibold">{sessionStats.wordsLearned}</span> palabra{sessionStats.wordsLearned !== 1 ? 's' : ''} practicada{sessionStats.wordsLearned !== 1 ? 's' : ''}
          </p>
        )}

        <button onClick={handleLessonComplete} className="btn-primary px-10 py-3 text-lg">
          Continuar
        </button>
      </div>
    </motion.div>
  );
}

// GRAM-4: Grammar Tree — visual interactive grammar structure (connects grammar-trees.ts)
function renderGrammarTree(props: StepRendererProps): React.ReactNode {
  const { task, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  const structureId = (task as any).grammarTreeId as string | undefined;
  return (
    <div className="flex flex-col min-h-[70vh]">
      <GrammarTree
        structureId={structureId}
        onBack={() => setCurrentStep(getPreviousStep(currentStep))}
      />
      <div className="mt-6 flex justify-center gap-3">
        <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary">
          Atrás
        </button>
        <button onClick={goToNextStep} className="btn-primary px-8">
          Continuar
        </button>
      </div>
    </div>
  );
}

// ACT-1: News Reader — graded news articles with comprehension (connects simplified-news.ts)
function renderNewsReader(props: StepRendererProps): React.ReactNode {
  const { level, setSessionStats, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  return (
    <div className="space-y-6 w-full">
      <NewsReader
        level={level.id}
        onComplete={(score, total) => {
          const xp = Math.round((score / Math.max(total, 1)) * 25);
          setSessionStats(prev => ({
            ...prev,
            xpEarned: prev.xpEarned + xp,
            accuracy: Math.round((prev.accuracy + (score / Math.max(total, 1) * 100)) / 2) || Math.round(score / Math.max(total, 1) * 100),
          }));
          goToNextStep();
        }}
        onXPGain={xp => setSessionStats(prev => ({ ...prev, xpEarned: prev.xpEarned + xp }))}
      />
      <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary text-sm">
        Atrás
      </button>
    </div>
  );
}

// ACT-1: Crossword — vocabulary crossword puzzles (connects crossword-puzzles.ts)
function renderCrossword(props: StepRendererProps): React.ReactNode {
  const { level, setSessionStats, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  return (
    <div className="space-y-6 w-full">
      <Crossword
        levelId={level.id}
        onComplete={(score, total) => {
          const xp = Math.round((score / Math.max(total, 1)) * 30);
          setSessionStats(prev => ({
            ...prev,
            xpEarned: prev.xpEarned + xp,
            accuracy: Math.round((prev.accuracy + (score / Math.max(total, 1) * 100)) / 2) || Math.round(score / Math.max(total, 1) * 100),
          }));
          goToNextStep();
        }}
        onXPGain={xp => setSessionStats(prev => ({ ...prev, xpEarned: prev.xpEarned + xp }))}
      />
      <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary text-sm">
        Atrás
      </button>
    </div>
  );
}

// ACT-1: Situations — real-world situational conversation practice (connects situations.ts)
function renderSituations(props: StepRendererProps): React.ReactNode {
  const { level, setSessionStats, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  return (
    <div className="flex flex-col min-h-[70vh]">
      <Situations
        level={level.id}
        onXPGain={xp => setSessionStats(prev => ({ ...prev, xpEarned: prev.xpEarned + xp }))}
      />
      <div className="mt-6 flex justify-center gap-3">
        <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary">
          Atrás
        </button>
        <button onClick={goToNextStep} className="btn-primary px-8">
          Continuar
        </button>
      </div>
    </div>
  );
}

// ACT-1: Enhanced Listening — audio exercises with TTS (connects listening-exercises.ts)
function renderEnhancedListening(props: StepRendererProps): React.ReactNode {
  const { level, setSessionStats, goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  const exercises = getListeningByLevel(level.id);
  if (exercises.length === 0) return null;
  const exercise = exercises[Math.floor(Math.random() * exercises.length)] as ListeningExercise;
  return (
    <EnhancedListening
      exercise={exercise}
      onComplete={(score, total) => {
        const xp = Math.round((score / Math.max(total, 1)) * 25);
        setSessionStats(prev => ({
          ...prev,
          xpEarned: prev.xpEarned + xp,
          accuracy: Math.round((prev.accuracy + (score / Math.max(total, 1) * 100)) / 2) || Math.round(score / Math.max(total, 1) * 100),
        }));
        goToNextStep();
      }}
      onExit={() => setCurrentStep(getPreviousStep(currentStep))}
    />
  );
}

// ACT-1: Mnemonics — memory aids, etymologies and fun facts (connects mnemonics.ts)
function renderMnemonics(props: StepRendererProps): React.ReactNode {
  const { goToNextStep, currentStep, getPreviousStep, setCurrentStep } = props;
  return (
    <div className="flex flex-col min-h-[70vh]">
      <MnemonicExplorer />
      <div className="mt-6 flex justify-center gap-3">
        <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary">
          Atrás
        </button>
        <button onClick={goToNextStep} className="btn-primary px-8">
          Continuar
        </button>
      </div>
    </div>
  );
}

// ACT-4: Generated Practice — uses exercise-generator.ts to produce unlimited exercises
function GeneratedPracticeStep({ task, setSessionStats, goToNextStep, currentStep, getPreviousStep, setCurrentStep }: StepRendererProps) {
  const moduleId = task.grammarTheoryIds?.[0] ?? '';
  const [exercises] = React.useState<GeneratedExercise[]>(() => generateMixedPractice(moduleId, 8));
  const [idx, setIdx] = React.useState(0);
  const [input, setInput] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [revealed, setRevealed] = React.useState(false);

  const ex = exercises[idx];
  const total = exercises.length;
  const isLast = idx >= total - 1;

  const handleNext = () => {
    const correct = ex.type === 'multiple-choice'
      ? selectedOption === ex.correctIndex
      : input.trim().toLowerCase() === ex.answer.toLowerCase();
    const xp = correct ? 12 : 5;
    setSessionStats(prev => ({
      ...prev,
      xpEarned: prev.xpEarned + xp,
      accuracy: Math.round((prev.accuracy + (correct ? 100 : 0)) / 2),
    }));
    if (isLast) {
      goToNextStep();
    } else {
      setIdx(prev => prev + 1);
      setInput('');
      setSelectedOption(null);
      setRevealed(false);
    }
  };

  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Práctica Generativa</h2>
        <span className="text-sm text-gray-400">{idx + 1} / {total}</span>
      </div>
      <p className="text-xs text-accent-primary font-medium uppercase tracking-wide">{ex.grammarPoint}</p>
      {ex.grammarPointEs && ex.grammarPointEs !== ex.grammarPoint && (
        <p className="text-xs text-gray-500">{ex.grammarPointEs}</p>
      )}

      <div className="bg-dark-700 rounded-xl p-5 space-y-4">
        <p className="text-white text-lg">{ex.prompt}</p>
        {ex.promptEs && ex.promptEs !== ex.prompt && (
          <p className="text-sm text-gray-500">{ex.promptEs}</p>
        )}
        {(ex.hint || ex.hintEs) && (
          <p className="text-xs text-gray-400">💡 {ex.hint ?? ex.hintEs}</p>
        )}
        {ex.hint && ex.hintEs && ex.hint !== ex.hintEs && (
          <p className="text-xs text-gray-500">{ex.hintEs}</p>
        )}

        {ex.type === 'multiple-choice' && ex.options ? (
          <div className="space-y-2">
            {ex.options.map((opt, i) => (
              <button
                key={i}
                disabled={revealed}
                onClick={() => setSelectedOption(i)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                  selectedOption === i
                    ? 'border-accent-primary bg-accent-primary/10 text-white'
                    : 'border-dark-600 bg-dark-800 text-gray-300 hover:border-gray-500'
                } ${revealed && i === ex.correctIndex ? 'border-green-400 bg-green-400/10 text-green-300' : ''}
                  ${revealed && selectedOption === i && i !== ex.correctIndex ? 'border-red-400 bg-red-400/10 text-red-300' : ''}`}
              >
                {opt}
              </button>
            ))}
          </div>
        ) : (
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={revealed}
            placeholder="Escribe tu respuesta..."
            className="w-full min-h-[70px] bg-dark-800 rounded-lg p-3 text-white placeholder-gray-500 border border-dark-600 focus:border-accent-primary outline-none resize-y"
            rows={2}
          />
        )}

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            disabled={ex.type === 'multiple-choice' ? selectedOption === null : input.trim().length === 0}
            className="btn-secondary w-full disabled:opacity-40"
          >
            Comprobar
          </button>
        ) : (
          <div className="space-y-3">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-xs text-green-400 font-medium mb-1">✓ Respuesta correcta</p>
              <p className="text-white font-mono text-sm">{ex.answer}</p>
            </div>
            <button onClick={handleNext} className="btn-primary w-full">
              {isLast ? 'Continuar' : 'Siguiente'}
            </button>
          </div>
        )}
      </div>

      <button
        onClick={() => setCurrentStep(getPreviousStep(currentStep))}
        className="btn-secondary text-sm"
      >
        Atrás
      </button>
    </div>
  );
}

function renderGeneratedPractice(props: StepRendererProps): React.ReactNode {
  const moduleId = props.task.grammarTheoryIds?.[0] ?? '';
  if (!moduleId || !hasGeneratorTemplates(moduleId)) return null;
  return <GeneratedPracticeStep {...props} />;
}

function IdiomsStep({ level, goToNextStep, currentStep, getPreviousStep, setCurrentStep }: StepRendererProps) {
  const items = getIdiomsByLevel(level.id);
  const [index, setIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const idiom = items[index % items.length];
  return (
    <div className="space-y-6 w-full">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-1">🎭 Frases Idiomáticas</h2>
        <p className="text-gray-400 text-sm">{index + 1} / {items.length}</p>
      </div>
      <div
        className="card cursor-pointer select-none min-h-[200px] flex flex-col items-center justify-center gap-4 border-accent-primary/30 hover:border-accent-primary/60 transition-colors"
        onClick={() => setFlipped(f => !f)}
      >
        {!flipped ? (
          <>
            <p className="text-2xl font-bold text-accent-primary text-center">"{idiom.idiom}"</p>
            <p className="text-sm text-gray-500 italic text-center">Traducción literal: {idiom.literalMeaning ?? idiom.idiom}</p>
            <p className="text-xs text-gray-600 mt-2">Toca para ver el significado →</p>
          </>
        ) : (
          <>
            <p className="text-lg text-white font-semibold text-center">{idiom.meaningEs}</p>
            <p className="text-sm text-gray-400 italic text-center">"{idiom.example}"</p>
            <p className="text-xs text-gray-500 text-center">{idiom.exampleEs}</p>
          </>
        )}
      </div>
      <div className="flex gap-3">
        <button className="btn-secondary flex-1" onClick={() => { setIndex(i => (i > 0 ? i - 1 : items.length - 1)); setFlipped(false); }}>Anterior</button>
        {index < items.length - 1 ? (
          <button className="btn-primary flex-1" onClick={() => { setIndex(i => i + 1); setFlipped(false); }}>Siguiente</button>
        ) : (
          <button className="btn-primary flex-1" onClick={goToNextStep}>Continuar</button>
        )}
      </div>
      <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary text-sm w-full">Atrás</button>
    </div>
  );
}

function renderIdioms(props: StepRendererProps): React.ReactNode {
  if (getIdiomsByLevel(props.level.id).length === 0) return null;
  return <IdiomsStep {...props} />;
}

function PhrasalVerbsStep({ level, goToNextStep, currentStep, getPreviousStep, setCurrentStep }: StepRendererProps) {
  const items = getPhrasalVerbsByLevel(level.id);
  const [index, setIndex] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const pv = items[index % items.length];
  return (
    <div className="space-y-6 w-full">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-1">🔗 Verbos Frasales</h2>
        <p className="text-gray-400 text-sm">{index + 1} / {items.length}</p>
      </div>
      <div className="card border-blue-500/30 space-y-3">
        <p className="text-2xl font-bold text-blue-400 text-center">
          {pv.verb} <span className="text-blue-300">{pv.particle}</span>
        </p>
        {!showAnswer ? (
          <button className="btn-secondary w-full mt-2" onClick={() => setShowAnswer(true)}>Ver significado</button>
        ) : (
          <>
            <p className="text-white text-center font-medium">{pv.meaningEs}</p>
            <p className="text-sm text-gray-400 italic text-center">"{pv.example}"</p>
            <p className="text-xs text-gray-500 text-center">{pv.exampleEs}</p>
          </>
        )}
      </div>
      <div className="flex gap-3">
        <button className="btn-secondary flex-1" onClick={() => { setIndex(i => (i > 0 ? i - 1 : items.length - 1)); setShowAnswer(false); }}>Anterior</button>
        {index < items.length - 1 ? (
          <button className="btn-primary flex-1" onClick={() => { setIndex(i => i + 1); setShowAnswer(false); }}>Siguiente</button>
        ) : (
          <button className="btn-primary flex-1" onClick={goToNextStep}>Continuar</button>
        )}
      </div>
      <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary text-sm w-full">Atrás</button>
    </div>
  );
}

function renderPhrasalVerbs(props: StepRendererProps): React.ReactNode {
  if (getPhrasalVerbsByLevel(props.level.id).length === 0) return null;
  return <PhrasalVerbsStep {...props} />;
}

function WordFamiliesStep({ goToNextStep, currentStep, getPreviousStep, setCurrentStep }: StepRendererProps) {
  const [family] = React.useState(() => wordFamilies[Math.floor(Math.random() * wordFamilies.length)]);
  const shownPrefixes = prefixes.slice(0, 4);
  const [tab, setTab] = React.useState<'family' | 'prefixes'>('family');
  return (
    <div className="space-y-6 w-full">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-1">🌿 Familias de Palabras</h2>
        <p className="text-gray-400 text-sm">Aprende cómo se forman las palabras en inglés</p>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${tab === 'family' ? 'bg-accent-primary text-dark-900' : 'bg-dark-700 text-gray-400'}`}
          onClick={() => setTab('family')}
        >Familia de Palabras</button>
        <button
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${tab === 'prefixes' ? 'bg-accent-primary text-dark-900' : 'bg-dark-700 text-gray-400'}`}
          onClick={() => setTab('prefixes')}
        >Prefijos Comunes</button>
      </div>
      {tab === 'family' ? (
        <div className="card border-green-500/30 space-y-3">
          <div className="text-center">
            <p className="text-xl font-bold text-green-400">Raíz: "{family.root}"</p>
            <p className="text-sm text-gray-400">{family.rootMeaningEs} · origen {family.origin}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            {family.words.slice(0, 6).map(w => (
              <div key={w.word} className="bg-dark-700 rounded-lg p-2">
                <p className="font-semibold text-white text-sm">{w.word}</p>
                <p className="text-xs text-gray-500">{w.type} — {w.definitionEs}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {shownPrefixes.map(p => (
            <div key={p.prefix} className="card border-purple-500/20 flex items-start gap-3">
              <span className="text-purple-400 font-bold text-lg w-16 shrink-0">{p.prefix}</span>
              <div>
                <p className="text-white text-sm font-medium">{p.meaningEs}</p>
                <p className="text-xs text-gray-500">{p.examples.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <button className="btn-primary w-full" onClick={goToNextStep}>Continuar</button>
      <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary text-sm w-full">Atrás</button>
    </div>
  );
}

function renderWordFamilies(props: StepRendererProps): React.ReactNode {
  return <WordFamiliesStep {...props} />;
}

function renderFunFact({ goToNextStep, currentStep, getPreviousStep, setCurrentStep }: StepRendererProps): React.ReactNode {
  const fact = getRandomFunFact();
  const categoryEmoji: Record<string, string> = {
    etymology: '📖',
    trivia: '🎯',
    history: '🏛️',
    comparison: '🔍',
    tip: '💡',
  };
  return (
    <div className="space-y-6 w-full">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-1">
          {categoryEmoji[fact?.category ?? 'tip'] ?? '💡'} Dato Curioso
        </h2>
        <p className="text-gray-400 text-sm">¿Sabías esto sobre el inglés?</p>
      </div>
      <div className="card border-yellow-500/30 bg-yellow-500/5">
        <p className="text-white text-lg leading-relaxed text-center">
          {fact?.fact ?? 'El inglés tiene más de 170,000 palabras en uso activo.'}
        </p>
        {fact?.relatedWord && (
          <p className="text-yellow-400 text-sm text-center mt-3 font-medium">
            Palabra relacionada: <em>{fact.relatedWord}</em>
          </p>
        )}
      </div>
      <button className="btn-primary w-full" onClick={goToNextStep}>¡Interesante! Continuar</button>
      <button onClick={() => setCurrentStep(getPreviousStep(currentStep))} className="btn-secondary text-sm w-full">Atrás</button>
    </div>
  );
}

export const stepRegistry: Record<string, StepRenderer> = {
  'intro': renderIntro,
  'theory': renderTheory,
  'grammar-map': renderGrammarMap,
  'grammar-tree': renderGrammarTree,
  'recognition-quiz': renderRecognitionQuiz,
  'controlled-practice': renderControlledPractice,
  'grammar-contrast': renderGrammarContrast,
  'common-mistakes': renderCommonMistakes,
  'vocabulary': renderVocabulary,
  'collocation-practice': renderCollocationPractice,
  'vocabulary-explorer': renderVocabularyExplorer,
  'practice': renderPractice,
  'dialogue': renderDialogue,
  'conversation-practice': renderConversationPractice,
  'reading-comprehension': renderReadingComprehension,
  'pronunciation': renderPronunciation,
  'pronunciation-lab': renderPronunciationLab,
  'sentence-writing': renderSentenceWriting,
  'production': renderProduction,
  'free-writing': renderFreeWriting,
  'writing-workshop': renderWritingWorkshop,
  'basic-transformation': renderBasicTransformation,
  'listen-select': renderListenSelect,
  'enhanced-listening': renderEnhancedListening,
  'dictation': renderDictation,
  'quiz': renderQuiz,
  'cultural-note': renderCulturalNote,
  'irregular-verbs': renderIrregularVerbs,
  'false-friends': renderFalseFriends,
  'cultural-deep-dive': renderCulturalDeepDive,
  'news-reader': renderNewsReader,
  'crossword': renderCrossword,
  'situations': renderSituations,
  'mnemonics': renderMnemonics,
  'generated-practice': renderGeneratedPractice,
  'idioms': renderIdioms,
  'phrasal-verbs': renderPhrasalVerbs,
  'word-families': renderWordFamilies,
  'fun-fact': renderFunFact,
  'self-evaluation': renderSelfEvaluation,
  'complete': renderComplete,
};
