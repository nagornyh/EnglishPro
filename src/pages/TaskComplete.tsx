import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Trophy,
  Star,
  BookOpen,
  Globe,
  Zap,
  Target,
  Award,
  TrendingUp,
  Brain,
  MessageCircle
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getLevelById } from '../data/levels';
import { getCanDoByLevel } from '../data/can-do-statements';

// Import activity components
import CulturalNote from '../components/activities/CulturalNote';
import type { CulturalNote as CulturalNoteType } from '../types';

interface TaskCompleteProps {
  levelId: number;
  taskId: number;
  xpEarned: number;
  accuracy: number;
  timeSpent: number;
  wordsLearned: number;
  isFirstCompletion: boolean;
}

interface SelfEvaluationData {
  confidence: number;
  difficulty: number | null;
  accuracy: number;
  taskTitle: string;
}

export default function TaskComplete() {
  const { levelId, taskId } = useParams();
  const navigate = useNavigate();
  const { user, updateStreak, updateGrammarMastery } = useUser(); // Ensure user context is available
  const [showCulturalNote, setShowCulturalNote] = useState(false);
  const [stats, setStats] = useState<TaskCompleteProps | null>(null);
  const [selfEval, setSelfEval] = useState<SelfEvaluationData | null>(null);

  const level = getLevelById(Number(levelId));
  const task = level?.tasks.find(t => t.id === Number(taskId));
  // L3: Find previous task for connectionToPrevious
  const prevTask = level?.tasks.find((_, idx) => level.tasks[idx + 1]?.id === Number(taskId));

  useEffect(() => {
    // Get task completion stats from session storage or calculate
    const savedStats = sessionStorage.getItem('taskCompleteStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
      sessionStorage.removeItem('taskCompleteStats');
    } else {
      setStats({
        levelId: Number(levelId),
        taskId: Number(taskId),
        xpEarned: 50,
        accuracy: 85,
        timeSpent: 300,
        wordsLearned: 10,
        isFirstCompletion: true,
      });
    }

    // Load self-evaluation if available
    const savedEval = sessionStorage.getItem('selfEvaluation');
    if (savedEval) {
      setSelfEval(JSON.parse(savedEval));
      sessionStorage.removeItem('selfEvaluation');
    }

    // Check if task has cultural note
    if (task?.culturalNote) {
      setShowCulturalNote(true);
    }
  }, [levelId, taskId, task]);

  const handleContinue = () => {
    if (showCulturalNote) {
      setShowCulturalNote(false);
      return;
    }

    // Navigate to next task or level
    if (level && task) {
      const nextTaskIndex = level.tasks.findIndex(t => t.id === task.id) + 1;
      if (nextTaskIndex < level.tasks.length) {
        const nextTask = level.tasks[nextTaskIndex];
        navigate(`/practice/${levelId}/${nextTask.id}`);
      } else {
        navigate(`/level/${levelId}`);
      }
    } else {
      navigate('/levels');
    }
  };

  const handleBackToLevel = () => {
    navigate(`/level/${levelId}`);
  };

  if (!level || !task || !stats) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="spinner" />
      </div>
    );
  }

  // Show cultural note if available
  if (showCulturalNote && task.culturalNote) {
    return (
      <CulturalNote
        note={task.culturalNote as CulturalNoteType}
        taskTitle={task.title}
        onContinue={() => setShowCulturalNote(false)}
      />
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[80vh] py-8"
    >
      <div className="w-full space-y-6">
        {/* Celebration Header */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-500/30 flex items-center justify-center mx-auto mb-4"
          >
            <Trophy className="w-12 h-12 text-yellow-400" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {stats.isFirstCompletion ? '¡Tarea Completada!' : '¡Bien Hecho!'}
          </h1>
          <p className="text-gray-400">
            {task.title}
          </p>
        </motion.div>

        {/* XP Earned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-accent-primary/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent-primary/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">XP Ganados</p>
                <p className="text-2xl font-bold text-white">+{stats.xpEarned} XP</p>
              </div>
            </div>
            {stats.isFirstCompletion && (
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                <Star className="w-4 h-4 fill-green-400" />
                Primera vez
              </div>
            )}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4"
        >
          <div className="card text-center">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{stats.accuracy}%</p>
            <p className="text-sm text-gray-400">Precisión</p>
          </div>
          <div className="card text-center">
            <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{stats.wordsLearned}</p>
            <p className="text-sm text-gray-400">Palabras</p>
          </div>
          <div className="card text-center">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{formatTime(stats.timeSpent)}</p>
            <p className="text-sm text-gray-400">Tiempo</p>
          </div>
        </motion.div>

        {/* Stars Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <div className="text-center">
            <p className="text-gray-400 mb-3">Tu desempeño</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3].map((star) => {
                const earned = stats.accuracy >= star * 30;
                return (
                  <motion.div
                    key={star}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + star * 0.1, type: 'spring' }}
                  >
                    <Star 
                      className={`w-12 h-12 ${
                        earned 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-600'
                      }`}
                    />
                  </motion.div>
                );
              })}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {stats.accuracy >= 90 
                ? '¡Excelente! Dominas este tema.' 
                : stats.accuracy >= 70 
                ? '¡Muy bien! Sigue practicando.' 
                : 'Buen intento. Repasa el tema para mejorar.'}
            </p>
          </div>
        </motion.div>

        {/* L2: What You Learned Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="card bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border-blue-500/20"
        >
          <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Lo que aprendiste
          </h3>
          <div className="space-y-2 text-sm text-gray-300">
            {task.grammarTheoryIds && task.grammarTheoryIds.length > 0 && (
              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>
                  Estudiaste {task.grammarTheoryIds.length} tema{task.grammarTheoryIds.length > 1 ? 's' : ''} de gramática
                </span>
              </div>
            )}
            {stats.wordsLearned > 0 && (
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span>
                  Practicaste {stats.wordsLearned} palabra{stats.wordsLearned > 1 ? 's' : ''}
                </span>
              </div>
            )}
            <div className="flex items-start gap-2">
              <Target className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
              <span>
                {stats.accuracy >= 80
                  ? 'Tu precisión es alta — ¡estás listo/a para avanzar!'
                  : stats.accuracy >= 60
                  ? 'Buen progreso — repasa los errores para consolidar.'
                  : 'Practica más este tema. Cada intento fortalece tu aprendizaje.'}
              </span>
            </div>
            {selfEval && (
              <div className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                <span>
                  Tu confianza: {selfEval.confidence}/5
                  {selfEval.confidence <= 2 && ' — ¡Te recomendamos repasar!'}
                  {selfEval.confidence >= 4 && ' — ¡Gran seguridad!'}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* L3: Connection from Previous */}
        {prevTask?.connectionToNext && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.47 }}
            className="card bg-dark-700/50"
          >
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400 mb-1">Conexión con la lección anterior</p>
                <p className="text-gray-300 text-sm">{prevTask.connectionToNext}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Can-Do Statements */}
        {(() => {
          // Map lesson level (1-13) to can-do level (1-4)
          const cdLevel: 1 | 2 | 3 | 4 =
            level.id <= 3 ? 1 : level.id <= 7 ? 2 : level.id <= 10 ? 3 : 4;
          const statements = getCanDoByLevel(cdLevel).slice(0, 3);
          if (statements.length === 0) return null;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card bg-gradient-to-r from-green-900/20 to-teal-900/20 border-green-500/20"
            >
              <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                ¡Ahora puedes...
              </h3>
              <ul className="space-y-2">
                {statements.map(cd => (
                  <li key={cd.id} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    {cd.statementEs}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })()}

        {/* Connection to Next */}
        {task.connectionToNext && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card bg-dark-700/50"
          >
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400 mb-1">Próximo paso</p>
                <p className="text-gray-300">{task.connectionToNext}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <button
            onClick={handleBackToLevel}
            className="flex-1 btn-secondary flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Ver Nivel
          </button>
          <button
            onClick={handleContinue}
            className="flex-1 btn-primary flex items-center justify-center gap-2"
          >
            Continuar
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
