import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { levels, getLevelById } from '../data/levels';
import db from '../services/database';
import type { Word, Task, ActivitySessionResult, TaskExercise, GuidedProduction } from '../types';

// Import all activity components
import Flashcards from '../components/activities/Flashcards';
import MultipleChoice from '../components/activities/MultipleChoice';
import MatchPairs from '../components/activities/MatchPairs';
import FillBlanks from '../components/activities/FillBlanks';
import WordScramble from '../components/activities/WordScramble';
import SentenceBuilder from '../components/activities/SentenceBuilder';
import Translation from '../components/activities/Translation';
import Listening from '../components/activities/Listening';
import Hangman from '../components/activities/Hangman';
import TaskIntroduction from '../components/activities/TaskIntroduction';
import ErrorCorrection from '../components/activities/ErrorCorrection';
import Transformation from '../components/activities/Transformation';
import GuidedWriting from '../components/activities/GuidedWriting';
import SpeakingPractice from '../components/activities/SpeakingPractice';
import DialoguePractice from '../components/activities/DialoguePractice';
import type { ModelDialogue } from '../types';
import { recordActivityForSkills } from '../services/skillMetrics';

type ActivityMode = 'intro' | 'select' | 'flashcards' | 'quiz' | 'match' | 'fill' | 'scramble' | 'sentence' | 'translation' | 'listening' | 'hangman' | 'error-correction' | 'transformation' | 'writing' | 'speaking' | 'dialogue';

const activities = [
  { id: 'flashcards', emoji: '🎴', title: 'Flashcards', description: 'Aprende vocabulario con tarjetas interactivas', color: '#6366f1', difficulty: 1, category: 'vocabulary' },
  { id: 'quiz', emoji: '❓', title: 'Quiz', description: 'Pon a prueba tus conocimientos con preguntas', color: '#8b5cf6', difficulty: 1, category: 'vocabulary' },
  { id: 'match', emoji: '🔗', title: 'Emparejamiento', description: 'Conecta palabras con sus significados', color: '#06b6d4', difficulty: 1, category: 'vocabulary' },
  { id: 'translation', emoji: '🌐', title: 'Traducción', description: 'Practica traduciendo palabras', color: '#10b981', difficulty: 2, category: 'vocabulary' },
  { id: 'fill', emoji: '✏️', title: 'Completar', description: 'Rellena los espacios en las oraciones', color: '#f59e0b', difficulty: 2, category: 'grammar' },
  { id: 'scramble', emoji: '🔀', title: 'Ordenar Letras', description: 'Descifra las palabras desordenadas', color: '#ef4444', difficulty: 2, category: 'vocabulary' },
  { id: 'sentence', emoji: '🏗️', title: 'Constructor', description: 'Ordena palabras para formar oraciones', color: '#ec4899', difficulty: 3, category: 'grammar' },
  { id: 'listening', emoji: '👂', title: 'Dictado', description: 'Escucha y escribe lo que oyes', color: '#14b8a6', difficulty: 3, category: 'listening' },
  { id: 'hangman', emoji: '🎯', title: 'Ahorcado', description: 'Adivina la palabra letra por letra', color: '#f97316', difficulty: 2, category: 'vocabulary' },
  { id: 'error-correction', emoji: '🔧', title: 'Corregir Errores', description: 'Encuentra y corrige errores gramaticales', color: '#dc2626', difficulty: 3, category: 'grammar', requiresExercises: true },
  { id: 'transformation', emoji: '🔄', title: 'Transformación', description: 'Transforma oraciones a diferentes formas', color: '#7c3aed', difficulty: 3, category: 'grammar', requiresExercises: true },
  { id: 'writing', emoji: '✍️', title: 'Escritura Guiada', description: 'Practica escribir con prompts guiados', color: '#059669', difficulty: 3, category: 'writing', requiresGuidedProduction: true },
  { id: 'speaking', emoji: '🎤', title: 'Pronunciación', description: 'Practica tu pronunciación con reconocimiento de voz', color: '#8b5cf6', difficulty: 2, category: 'speaking' },
  { id: 'dialogue', emoji: '💬', title: 'Diálogo', description: 'Practica conversaciones interactivas', color: '#0891b2', difficulty: 3, category: 'speaking', requiresDialogue: true },
];

export default function Practice() {
  const { levelId, taskId } = useParams();
  const navigate = useNavigate();
  const { user, addXP, updateStreak } = useUser();
  const [mode, setMode] = useState<ActivityMode>('select');
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [words, setWords] = useState<Word[]>([]);
  const [taskInfo, setTaskInfo] = useState<{ levelName: string; taskName: string } | null>(null);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [isLoadingTask, setIsLoadingTask] = useState(!!levelId && !!taskId);

  // Load task-specific words if levelId and taskId are provided
  useEffect(() => {
    if (!levelId || !taskId || !user) {
      setIsLoadingTask(false);
      return;
    }

    let cancelled = false;
    const run = async () => {
      setIsLoadingTask(true);
      const level = getLevelById(Number(levelId));
      if (!level) {
        if (!cancelled) setIsLoadingTask(false);
        return;
      }

      const task = level.tasks.find(t => t.id === Number(taskId));
      if (!task) {
        if (!cancelled) setIsLoadingTask(false);
        return;
      }

      const taskWords: Word[] = [
        ...task.vocabulary.nouns,
        ...task.vocabulary.verbs,
        ...task.vocabulary.adjectives,
        ...task.vocabulary.expressions,
        ...task.vocabulary.adverbs,
        ...task.vocabulary.prepositions,
      ];

      const seen = await db.hasSeenTaskIntro(user.id, Number(levelId), Number(taskId));

      if (cancelled) return;
      setWords(taskWords.sort(() => Math.random() - 0.5));
      setSelectedLevel(Number(levelId));
      setTaskInfo({ levelName: level.name, taskName: task.title });
      setCurrentTask(task);

      // Show intro if task has one and user hasn't seen it
      if (task.introduction && !seen) {
        setMode('intro');
      }

      setIsLoadingTask(false);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [levelId, taskId, user?.id]);

  if (!user) return null;
  
  // Show loading while task data is being loaded
  if (isLoadingTask) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="spinner" />
      </div>
    );
  }

  const getWordsFromLevel = (levelId: number): Word[] => {
    const level = getLevelById(levelId);
    if (!level) return [];

    const allWords: Word[] = [];
    level.tasks.forEach(task => {
      allWords.push(...task.vocabulary.nouns);
      allWords.push(...task.vocabulary.verbs);
      allWords.push(...task.vocabulary.adjectives);
      allWords.push(...task.vocabulary.expressions);
      allWords.push(...task.vocabulary.adverbs);
      allWords.push(...task.vocabulary.prepositions);
    });

    // Fisher-Yates shuffle
    for (let i = allWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
    }
    return allWords.slice(0, 25);
  };

  const startActivity = (activityId: string, levelId: number) => {
    const levelWords = getWordsFromLevel(levelId);
    if (levelWords.length < 5) {
      alert('Este nivel no tiene suficiente vocabulario. Prueba otro nivel.');
      return;
    }
    setWords(levelWords);
    setSelectedLevel(levelId);
    setMode(activityId as ActivityMode);
  };

  const handleActivityComplete = async (result: ActivitySessionResult) => {
    if (!user) return;

    // Record skill-specific XP (real attribution by activity type)
    recordActivityForSkills(
      user.id,
      result.activityId,
      result.xpEarned,
      result.correct,
      result.correct + result.incorrect,
    );

    const isTaskRoute = Boolean(levelId && taskId);
    const resolvedLevelId = isTaskRoute ? Number(levelId) : (selectedLevel ?? user.progress.currentLevel);
    const resolvedTaskId = isTaskRoute ? Number(taskId) : 0;
    const context = { levelId: resolvedLevelId, taskId: resolvedTaskId };

    const uniqueWordsReviewed = new Set(result.wordsReviewed);
    const correctWordIds = Array.from(new Set(result.correctWordIds));
    const incorrectWordIds = Array.from(new Set(result.incorrectWordIds));

    // Update SRS
    await Promise.all([
      ...correctWordIds.map(wordId => db.updateVocabularyProgress(user.id, wordId, true, context)),
      ...incorrectWordIds.map(wordId => db.updateVocabularyProgress(user.id, wordId, false, context)),
    ]);

    const alreadyCompleted =
      isTaskRoute &&
      user.progress.completedLessons.some(l => l.levelId === resolvedLevelId && l.taskId === resolvedTaskId);

    if (isTaskRoute && !alreadyCompleted) {
      await db.completeLesson(
        user.id,
        resolvedLevelId,
        resolvedTaskId,
        result.xpEarned,
        result.accuracy,
        result.timeSpentSeconds
      );

      // completeLesson handles XP + streak + dailyStats (except wordsReviewed)
      await db.upsertDailyStats(user.id, {
        wordsReviewed: uniqueWordsReviewed.size,
        accuracy: result.accuracy,
      });

      // Refresh user in context (also safe if streak already updated today)
      await updateStreak();
    } else {
      await addXP(result.xpEarned);
      await updateStreak();
      await db.upsertDailyStats(user.id, {
        wordsReviewed: uniqueWordsReviewed.size,
        timeSpentMinutes: Math.round(result.timeSpentSeconds / 60),
        accuracy: result.accuracy,
      });
    }

    setMode('select');
    if (!isTaskRoute) {
      setWords([]);
      setSelectedLevel(null);
    }
  };

  const handleBack = () => {
    if (levelId && taskId) {
      // If coming from a specific task, go back to activity selection for that task
      setMode('select');
    } else {
      setMode('select');
      setWords([]);
      setSelectedLevel(null);
    }
  };

  // Render activity based on mode
  const renderActivity = () => {
    if (words.length === 0 && !['error-correction', 'transformation', 'writing', 'dialogue'].includes(mode)) return null;

    switch (mode) {
      case 'flashcards':
        return <Flashcards words={words} onComplete={handleActivityComplete} onBack={handleBack} />;
      case 'quiz':
        return <MultipleChoice words={words} onComplete={handleActivityComplete} onBack={handleBack} />;
      case 'match':
        return <MatchPairs words={words} onComplete={handleActivityComplete} onBack={handleBack} />;
      case 'fill':
        return <FillBlanks words={words} onComplete={handleActivityComplete} onBack={handleBack} />;
      case 'scramble':
        return <WordScramble words={words} onComplete={handleActivityComplete} onBack={handleBack} />;
      case 'sentence':
        return <SentenceBuilder words={words} onComplete={handleActivityComplete} onBack={handleBack} />;
      case 'translation':
        return <Translation words={words} onComplete={handleActivityComplete} onBack={handleBack} />;
      case 'listening':
        return <Listening words={words} onComplete={handleActivityComplete} onBack={handleBack} />;
      case 'hangman':
        return <Hangman words={words} onComplete={handleActivityComplete} onBack={handleBack} />;
      case 'error-correction':
        if (currentTask?.exercises) {
          const errorExercises = currentTask.exercises.filter(e => e.type === 'error-correction');
          if (errorExercises.length > 0) {
            return (
              <ErrorCorrection
                exercise={errorExercises[0] as TaskExercise}
                onComplete={(score, total) => {
                  handleActivityComplete({
                    activityId: 'error-correction',
                    accuracy: Math.round((score / total) * 100),
                    xpEarned: score * 10,
                    wordsReviewed: [],
                    correctWordIds: [],
                    incorrectWordIds: [],
                    timeSpentSeconds: 0,
                    correct: score,
                    incorrect: total - score,
                    skipped: 0,
                  });
                }}
                onBack={handleBack}
              />
            );
          }
        }
        return <div className="text-center text-gray-400 py-12">No hay ejercicios de corrección disponibles para esta tarea.</div>;
      case 'transformation':
        if (currentTask?.exercises) {
          const transformExercises = currentTask.exercises.filter(e => e.type === 'transformation');
          if (transformExercises.length > 0) {
            return (
              <Transformation
                exercise={transformExercises[0] as TaskExercise}
                onComplete={(score, total) => {
                  handleActivityComplete({
                    activityId: 'transformation',
                    accuracy: Math.round((score / total) * 100),
                    xpEarned: score * 10,
                    wordsReviewed: [],
                    correctWordIds: [],
                    incorrectWordIds: [],
                    timeSpentSeconds: 0,
                    correct: score,
                    incorrect: total - score,
                    skipped: 0,
                  });
                }}
                onBack={handleBack}
              />
            );
          }
        }
        return <div className="text-center text-gray-400 py-12">No hay ejercicios de transformación disponibles para esta tarea.</div>;
      case 'writing':
        if (currentTask?.guidedProduction) {
          return (
            <GuidedWriting
              production={currentTask.guidedProduction as GuidedProduction}
              onComplete={() => {
                handleActivityComplete({
                  activityId: 'writing',
                  accuracy: 100,
                  xpEarned: 30,
                  wordsReviewed: [],
                  correctWordIds: [],
                  incorrectWordIds: [],
                  timeSpentSeconds: 0,
                  correct: 1,
                  incorrect: 0,
                  skipped: 0,
                });
              }}
              onBack={handleBack}
            />
          );
        }
        return <div className="text-center text-gray-400 py-12">No hay ejercicios de escritura guiada disponibles para esta tarea.</div>;
      case 'speaking':
        const phrases = words.slice(0, 10).map(w => ({
          text: w.word,
          translation: w.translation,
          phonetic: undefined,
        }));
        return (
          <SpeakingPractice
            phrases={phrases}
            onComplete={(results) => {
              const completed = results.filter(r => r.completed).length;
              handleActivityComplete({
                activityId: 'speaking',
                accuracy: Math.round((completed / results.length) * 100),
                xpEarned: completed * 5,
                wordsReviewed: words.slice(0, 10).map(w => w.id),
                correctWordIds: results.filter(r => r.completed).map((_, i) => words[i]?.id).filter(Boolean),
                incorrectWordIds: results.filter(r => !r.completed).map((_, i) => words[i]?.id).filter(Boolean),
                timeSpentSeconds: 0,
                correct: completed,
                incorrect: results.length - completed,
                skipped: 0,
              });
            }}
            onBack={handleBack}
          />
        );
      case 'dialogue':
        if (currentTask?.modelDialogue) {
          return (
            <DialoguePractice
              dialogue={currentTask.modelDialogue as ModelDialogue}
              onComplete={(score) => {
                handleActivityComplete({
                  activityId: 'dialogue',
                  accuracy: score,
                  xpEarned: Math.round(score / 10) * 5,
                  wordsReviewed: [],
                  correctWordIds: [],
                  incorrectWordIds: [],
                  timeSpentSeconds: 0,
                  correct: Math.round(score / 10),
                  incorrect: 10 - Math.round(score / 10),
                  skipped: 0,
                });
              }}
              onBack={handleBack}
            />
          );
        }
        return <div className="text-center text-gray-400 py-12">No hay diálogo disponible para esta tarea.</div>;
      default:
        return null;
    }
  };

  // Show introduction if mode is 'intro'
  if (mode === 'intro' && currentTask?.introduction) {
    return (
      <TaskIntroduction
        introduction={currentTask.introduction}
        taskTitle={taskInfo?.taskName || ''}
        onContinue={async () => {
          if (user && levelId && taskId) {
            await db.markTaskIntroSeen(user.id, Number(levelId), Number(taskId));
          }
          setMode('select');
        }}
      />
    );
  }

  if (mode !== 'select' && mode !== 'intro') {
    return renderActivity();
  }

  // Task-specific activity selection (when coming from a level/task route)
  if (levelId && taskId && taskInfo) {
    // If no words found for this task
    if (words.length === 0) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <button
            onClick={() => navigate(`/level/${levelId}`)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Nivel</span>
          </button>
          <div className="text-center py-12">
            <p className="text-gray-400">Esta tarea no tiene vocabulario disponible aún.</p>
          </div>
        </motion.div>
      );
    }
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(`/level/${levelId}`)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al Nivel</span>
        </button>

        {/* Header */}
        <div>
          <h1 className="heading-2 text-white mb-2">{taskInfo.taskName}</h1>
          <p className="text-gray-400">
            {taskInfo.levelName} • {words.length} palabras disponibles
          </p>
        </div>

        {/* Activities Grid for this task */}
        <div>
          <h2 className="heading-4 text-white mb-4">Elige una actividad</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities
              .filter(activity => {
                // Filter activities based on available task content
                if (activity.requiresExercises && !currentTask?.exercises?.some(e => e.type === activity.id.replace('-', ''))) {
                  // Check for error-correction and transformation
                  if (activity.id === 'error-correction' && !currentTask?.exercises?.some(e => e.type === 'error-correction')) return false;
                  if (activity.id === 'transformation' && !currentTask?.exercises?.some(e => e.type === 'transformation')) return false;
                }
                if (activity.requiresGuidedProduction && !currentTask?.guidedProduction) return false;
                if (activity.requiresDialogue && !currentTask?.modelDialogue) return false;
                return true;
              })
              .map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card card-hover cursor-pointer"
                onClick={() => setMode(activity.id as ActivityMode)}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4"
                  style={{ backgroundColor: `${activity.color}20` }}
                >
                  {activity.emoji}
                </div>
                <h3 className="font-semibold text-white mb-1">{activity.title}</h3>
                <p className="text-sm text-gray-400">{activity.description}</p>
                {activity.category && (
                  <span className={`mt-2 inline-block text-xs px-2 py-1 rounded-full ${
                    activity.category === 'vocabulary' ? 'bg-blue-500/20 text-blue-400' :
                    activity.category === 'grammar' ? 'bg-purple-500/20 text-purple-400' :
                    activity.category === 'listening' ? 'bg-teal-500/20 text-teal-400' :
                    activity.category === 'speaking' ? 'bg-violet-500/20 text-violet-400' :
                    activity.category === 'writing' ? 'bg-green-500/20 text-green-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {activity.category === 'vocabulary' ? 'Vocabulario' :
                     activity.category === 'grammar' ? 'Gramática' :
                     activity.category === 'listening' ? 'Escucha' :
                     activity.category === 'speaking' ? 'Habla' :
                     activity.category === 'writing' ? 'Escritura' : activity.category}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // General activity selection view
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div>
        <h1 className="heading-2 text-white mb-2">Modo Práctica</h1>
        <p className="text-gray-400">
          Elige una actividad y un nivel para comenzar a practicar. ¡Tenemos {activities.length} actividades diferentes!
        </p>
      </div>

      {/* Quick Practice */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-accent-primary/30"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
              🚀 Práctica Rápida
            </h3>
            <p className="text-gray-400 text-sm">
              Actividad aleatoria con tu nivel actual (Nivel {user.progress.currentLevel})
            </p>
          </div>
          <button
            onClick={() => {
              const randomActivity = activities[Math.floor(Math.random() * activities.length)];
              startActivity(randomActivity.id, user.progress.currentLevel);
            }}
            className="btn-primary whitespace-nowrap"
          >
            ¡Comenzar!
          </button>
        </div>
      </motion.div>

      {/* Error Review Mode */}
      <Link to="/error-review">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          className="card bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-500/40 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">Repaso de Errores</h3>
              <p className="text-gray-400 text-sm">
                Practica las palabras que más te cuestan. Refuerza tu vocabulario débil.
              </p>
            </div>
          </div>
        </motion.div>
      </Link>

      {/* Activity Categories */}
      <div>
        <h2 className="heading-4 text-white mb-2">Actividades por Dificultad</h2>
        <p className="text-sm text-gray-400 mb-4">
          🟢 Fácil | 🟡 Medio | 🔴 Difícil
        </p>
      </div>

      {/* Activities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((activity, index) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            index={index}
            availableLevels={levels.filter(l => l.id <= user.progress.currentLevel)}
            onSelect={(levelId) => startActivity(activity.id, levelId)}
          />
        ))}
      </div>

      {/* Tips Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="card"
      >
        <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
          💡 Consejos para Aprender
        </h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-accent-primary">•</span>
            <span>Practica al menos 15 minutos diarios para mantener tu racha</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-primary">•</span>
            <span>Combina diferentes tipos de actividades para un aprendizaje completo</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-primary">•</span>
            <span>El dictado y el constructor de oraciones son excelentes para mejorar tu gramática</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-primary">•</span>
            <span>Usa el audio para mejorar tu pronunciación y comprensión auditiva</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

interface ActivityCardProps {
  activity: typeof activities[0];
  index: number;
  availableLevels: typeof levels;
  onSelect: (levelId: number) => void;
}

function ActivityCard({ activity, index, availableLevels, onSelect }: ActivityCardProps) {
  const [showLevels, setShowLevels] = useState(false);

  const difficultyColors = {
    1: 'bg-green-500',
    2: 'bg-yellow-500',
    3: 'bg-red-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="card card-hover relative overflow-hidden"
    >
      {/* Difficulty indicator */}
      <div className={`absolute top-0 right-0 w-2 h-full ${difficultyColors[activity.difficulty as keyof typeof difficultyColors]}`} />
      
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4 transition-transform hover:scale-110"
        style={{ backgroundColor: `${activity.color}20` }}
      >
        {activity.emoji}
      </div>
      <h3 className="font-semibold text-white mb-1">{activity.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{activity.description}</p>

      {!showLevels ? (
        <button
          onClick={() => setShowLevels(true)}
          className="btn-primary w-full text-sm"
        >
          Seleccionar Nivel
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-2"
        >
          <p className="text-xs text-gray-400">Elige un nivel:</p>
          <div className="grid grid-cols-5 gap-1 max-h-24 overflow-y-auto">
            {availableLevels.map(level => (
              <button
                key={level.id}
                onClick={() => {
                  onSelect(level.id);
                  setShowLevels(false);
                }}
                className="p-2 rounded-lg bg-dark-500 hover:bg-dark-400 text-white text-xs font-medium transition-colors"
                style={{ borderColor: level.color, borderWidth: 1 }}
                title={`${level.name} (${level.cefrLevel})`}
              >
                {level.id}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowLevels(false)}
            className="text-xs text-gray-500 hover:text-gray-400 w-full mt-1"
          >
            Cancelar
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
