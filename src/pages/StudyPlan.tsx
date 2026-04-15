import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Target, 
  Clock, 
  CheckCircle2, 
  Circle,
  ChevronDown,
  ChevronRight,
  Play,
  Star,
  Flame,
  Brain
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { levels } from '../data/levels';
import type { Task } from '../types';

interface LearningStep {
  id: string;
  type: 'intro' | 'vocabulary' | 'grammar' | 'practice' | 'quiz' | 'review';
  title: string;
  description: string;
  duration: number; // minutes
  completed: boolean;
  xpReward: number;
  link?: string;
}

export default function StudyPlan() {
  const { user } = useUser();
  const [expandedLevel, setExpandedLevel] = useState<number | null>(
    user?.progress.currentLevel || 1
  );

  if (!user) return null;

  const currentLevel = levels.find(l => l.id === user.progress.currentLevel) || levels[0];
  const currentTask = currentLevel.tasks[user.progress.currentTask - 1];

  // Generate recommended study path
  const generateStudyPath = (task: Task): LearningStep[] => {
    const steps: LearningStep[] = [];
    const baseCompleted = false; // Would check actual completion from DB

    // Count total words in vocabulary
    const totalWords = Object.values(task.vocabulary).reduce(
      (sum, words) => sum + (Array.isArray(words) ? words.length : 0), 
      0
    );

    // 1. Introduction
    if (task.introduction) {
      steps.push({
        id: `${task.id}-intro`,
        type: 'intro',
        title: 'Introducción',
        description: 'Aprende los conceptos básicos de esta lección',
        duration: 5,
        completed: baseCompleted,
        xpReward: 10
      });
    }

    // 2. Vocabulary
    if (totalWords > 0) {
      steps.push({
        id: `${task.id}-vocab`,
        type: 'vocabulary',
        title: `Vocabulario (${totalWords} palabras)`,
        description: 'Aprende el vocabulario clave',
        duration: 10,
        completed: baseCompleted,
        xpReward: 20,
        link: `/practice/${currentLevel.id}/${task.id}?activity=flashcards`
      });
    }

    // 3. Grammar exercises
    if (task.exercises && task.exercises.length > 0) {
      steps.push({
        id: `${task.id}-grammar`,
        type: 'grammar',
        title: 'Ejercicios de Gramática',
        description: 'Practica las estructuras gramaticales',
        duration: 15,
        completed: baseCompleted,
        xpReward: 30,
        link: `/practice/${currentLevel.id}/${task.id}?activity=fill`
      });
    }

    // 4. Practice activities
    steps.push({
      id: `${task.id}-practice`,
      type: 'practice',
      title: 'Práctica Interactiva',
      description: 'Refuerza lo aprendido con actividades variadas',
      duration: 15,
      completed: baseCompleted,
      xpReward: 25,
      link: `/practice/${currentLevel.id}/${task.id}`
    });

    // 5. Quiz/Consolidation
    if (task.consolidationQuiz) {
      steps.push({
        id: `${task.id}-quiz`,
        type: 'quiz',
        title: 'Quiz de Consolidación',
        description: 'Evalúa tu comprensión de la lección',
        duration: 10,
        completed: baseCompleted,
        xpReward: 40,
        link: `/lesson/${currentLevel.id}/${task.id}?step=quiz`
      });
    }

    // 6. Review
    steps.push({
      id: `${task.id}-review`,
      type: 'review',
      title: 'Repaso Espaciado',
      description: 'Repasa el vocabulario para memorización a largo plazo',
      duration: 5,
      completed: baseCompleted,
      xpReward: 15,
      link: `/practice/${currentLevel.id}/${task.id}?activity=flashcards&mode=review`
    });

    return steps;
  };

  const studyPath = currentTask ? generateStudyPath(currentTask) : [];
  const totalXP = studyPath.reduce((sum, step) => sum + step.xpReward, 0);
  const totalDuration = studyPath.reduce((sum, step) => sum + step.duration, 0);

  const getStepIcon = (type: LearningStep['type']) => {
    switch (type) {
      case 'intro': return <BookOpen className="w-5 h-5" />;
      case 'vocabulary': return <Star className="w-5 h-5" />;
      case 'grammar': return <Target className="w-5 h-5" />;
      case 'practice': return <Play className="w-5 h-5" />;
      case 'quiz': return <CheckCircle2 className="w-5 h-5" />;
      case 'review': return <Brain className="w-5 h-5" />;
      default: return <Circle className="w-5 h-5" />;
    }
  };

  const getStepColor = (type: LearningStep['type']) => {
    switch (type) {
      case 'intro': return '#6366f1';
      case 'vocabulary': return '#f59e0b';
      case 'grammar': return '#10b981';
      case 'practice': return '#8b5cf6';
      case 'quiz': return '#ef4444';
      case 'review': return '#06b6d4';
      default: return '#6b7280';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="heading-2 text-white mb-2">Plan de Estudio</h1>
          <p className="text-gray-400">Tu ruta de aprendizaje personalizada</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-dark-700 rounded-lg">
            <Clock className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">{totalDuration} min hoy</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-lg">
            <Flame className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400">+{totalXP} XP</span>
          </div>
        </div>
      </div>

      {/* Current Task Study Path */}
      {currentTask && (
        <div className="card">
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${currentLevel.color}20` }}
            >
              {currentLevel.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-400">Lección actual</p>
              <h2 className="text-xl font-bold text-white">{currentTask.title}</h2>
              <p className="text-sm text-gray-400">{currentTask.titleEs}</p>
            </div>
            <Link 
              to={`/lesson/${currentLevel.id}/${currentTask.id}`}
              className="btn-primary"
            >
              Continuar
            </Link>
          </div>

          {/* Study Path Steps */}
          <div className="space-y-3">
            {studyPath.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                  step.completed 
                    ? 'bg-green-500/10' 
                    : 'bg-dark-700/50 hover:bg-dark-700'
                }`}
              >
                {/* Step indicator */}
                <div className="relative">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-green-500' : ''
                    }`}
                    style={{ 
                      backgroundColor: step.completed ? undefined : `${getStepColor(step.type)}20`,
                      color: step.completed ? 'white' : getStepColor(step.type)
                    }}
                  >
                    {step.completed ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      getStepIcon(step.type)
                    )}
                  </div>
                  {/* Connector line */}
                  {index < studyPath.length - 1 && (
                    <div 
                      className={`absolute top-10 left-1/2 w-0.5 h-8 -translate-x-1/2 ${
                        step.completed ? 'bg-green-500' : 'bg-dark-600'
                      }`}
                    />
                  )}
                </div>

                {/* Step content */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium ${step.completed ? 'text-green-400' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 truncate">{step.description}</p>
                </div>

                {/* Duration & XP */}
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-400">{step.duration} min</span>
                  <span 
                    className="px-2 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${getStepColor(step.type)}20`,
                      color: getStepColor(step.type)
                    }}
                  >
                    +{step.xpReward} XP
                  </span>
                </div>

                {/* Action button */}
                {step.link && !step.completed && (
                  <Link
                    to={step.link}
                    className="p-2 rounded-lg bg-accent-primary/20 text-accent-primary hover:bg-accent-primary/30 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* All Levels Overview */}
      <div className="card">
        <h2 className="heading-4 text-white mb-4">Todos los Niveles</h2>
        
        <div className="space-y-2">
          {levels.map((level) => {
            const isExpanded = expandedLevel === level.id;
            const isCompleted = level.id < user.progress.currentLevel;
            const isCurrent = level.id === user.progress.currentLevel;
            const isLocked = level.id > user.progress.currentLevel;
            
            const tasksCompleted = isCurrent 
              ? user.progress.currentTask - 1
              : isCompleted 
                ? level.totalTasks 
                : 0;

            return (
              <div key={level.id}>
                <button
                  onClick={() => !isLocked && setExpandedLevel(isExpanded ? null : level.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-colors ${
                    isLocked 
                      ? 'opacity-50 cursor-not-allowed bg-dark-700/30' 
                      : isExpanded 
                        ? 'bg-dark-600' 
                        : 'bg-dark-700/50 hover:bg-dark-700'
                  }`}
                  disabled={isLocked}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${level.color}20` }}
                  >
                    {level.icon}
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white">{level.name}</h3>
                      <span 
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${level.color}20`, color: level.color }}
                      >
                        {level.cefrLevel}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      {tasksCompleted}/{level.totalTasks} lecciones
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="w-24 h-2 bg-dark-600 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${(tasksCompleted / level.totalTasks) * 100}%`,
                        backgroundColor: level.color
                      }}
                    />
                  </div>

                  {!isLocked && (
                    isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )
                  )}
                </button>

                {/* Expanded tasks list */}
                <AnimatePresence>
                  {isExpanded && !isLocked && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 py-2 space-y-1">
                        {level.tasks.slice(0, 5).map((task, idx) => {
                          const taskCompleted = isCurrent 
                            ? idx < user.progress.currentTask - 1
                            : isCompleted;
                          const isCurrentTask = isCurrent && idx === user.progress.currentTask - 1;

                          return (
                            <Link
                              key={task.id}
                              to={taskCompleted || isCurrentTask ? `/lesson/${level.id}/${task.id}` : '#'}
                              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                isCurrentTask 
                                  ? 'bg-accent-primary/20 border border-accent-primary/30'
                                  : taskCompleted
                                    ? 'bg-green-500/10 hover:bg-green-500/20'
                                    : 'bg-dark-700/30 opacity-60 cursor-not-allowed'
                              }`}
                            >
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                taskCompleted 
                                  ? 'bg-green-500 text-white' 
                                  : isCurrentTask
                                    ? 'bg-accent-primary text-white'
                                    : 'bg-dark-600 text-gray-500'
                              }`}>
                                {taskCompleted ? (
                                  <CheckCircle2 className="w-4 h-4" />
                                ) : (
                                  <span className="text-xs">{idx + 1}</span>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm truncate ${
                                  isCurrentTask ? 'text-accent-primary font-medium' : 
                                  taskCompleted ? 'text-green-400' : 'text-gray-400'
                                }`}>
                                  {task.title}
                                </p>
                              </div>
                              {isCurrentTask && (
                                <span className="text-xs bg-accent-primary/30 text-accent-primary px-2 py-0.5 rounded">
                                  En curso
                                </span>
                              )}
                            </Link>
                          );
                        })}
                        {level.tasks.length > 5 && (
                          <Link
                            to={`/level/${level.id}`}
                            className="block text-sm text-accent-primary hover:text-accent-secondary p-3"
                          >
                            Ver todas las {level.totalTasks} lecciones →
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
