import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Lock, CheckCircle, Clock, BookOpen } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { getLevelById } from '../data/levels';

export default function LevelDetail() {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();

  const level = getLevelById(Number(levelId));

  if (!level || !user) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-gray-400">Nivel no encontrado</p>
      </div>
    );
  }

  const isLocked = level.id > user.progress.currentLevel;
  const isCurrentLevel = level.id === user.progress.currentLevel;

  if (isLocked) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <Lock className="w-16 h-16 text-gray-500 mb-4" />
        <h2 className="text-xl font-bold text-white mb-2">Nivel Bloqueado</h2>
        <p className="text-gray-400 mb-4">Completa el nivel anterior para desbloquear este nivel</p>
        <button onClick={() => navigate('/levels')} className="btn-primary">
          Ver Niveles
        </button>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-4xl mx-auto"
    >
      {/* Back Button */}
      <motion.div variants={itemVariants}>
        <button
          onClick={() => navigate('/levels')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a Niveles</span>
        </button>
      </motion.div>

      {/* Level Header */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
            style={{ backgroundColor: `${level.color}20` }}
          >
            {level.icon}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: `${level.color}20`, color: level.color }}
              >
                Nivel {level.id}
              </span>
              <span className="text-sm text-gray-500">{level.cefrLevel}</span>
            </div>
            <h1 className="heading-2 text-white mb-2">{level.name}</h1>
            <p className="text-gray-400">{level.description}</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {level.totalTasks} tareas
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                ~{level.estimatedHours}h
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tasks Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="heading-4 text-white mb-4">Tareas del Nivel</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {level.tasks.map((task, index) => {
            const taskNumber = index + 1;
            const isCompleted = user.progress.completedLessons.some(
              cl => cl.levelId === level.id && cl.taskId === taskNumber
            );
            const priorTasksAllDone = level.tasks.slice(0, index).every((_, i) =>
              user.progress.completedLessons.some(
                cl => cl.levelId === level.id && cl.taskId === i + 1,
              ),
            );
            const firstIncompleteIdx = level.tasks.findIndex((_, i) =>
              !user.progress.completedLessons.some(
                cl => cl.levelId === level.id && cl.taskId === i + 1,
              ),
            );
            const nextTaskNumber =
              firstIncompleteIdx === -1 ? level.tasks.length : firstIncompleteIdx + 1;
            const isCurrentTask = isCurrentLevel && taskNumber === nextTaskNumber;
            const isTaskLocked = isCurrentLevel && !priorTasksAllDone;

            const totalWords = 
              task.vocabulary.nouns.length +
              task.vocabulary.verbs.length +
              task.vocabulary.adjectives.length +
              task.vocabulary.expressions.length +
              task.vocabulary.adverbs.length +
              task.vocabulary.prepositions.length;

            return (
              <motion.div
                key={task.id}
                variants={itemVariants}
                className={`
                  card transition-all
                  ${isCurrentTask ? 'ring-2 ring-accent-primary gradient-border' : ''}
                  ${isTaskLocked ? 'opacity-60' : 'card-hover'}
                `}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                        ${isCompleted 
                          ? 'bg-green-500/20 text-green-400' 
                          : isCurrentTask 
                            ? 'bg-accent-primary text-white'
                            : 'bg-dark-500 text-gray-400'
                        }
                      `}
                    >
                      {isCompleted ? <CheckCircle className="w-5 h-5" /> : taskNumber}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{task.title}</h3>
                      <p className="text-sm text-gray-400">{task.titleEs}</p>
                    </div>
                  </div>
                  
                  {isTaskLocked && <Lock className="w-5 h-5 text-gray-500" />}
                </div>

                {/* Objectives */}
                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  {task.objectives.slice(0, 3).map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-primary">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-dark-500">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{totalWords} palabras</span>
                    <span>~{task.estimatedMinutes} min</span>
                  </div>

                  {!isTaskLocked && (
                    <Link
                      to={`/lesson/${level.id}/${task.id}`}
                      className={`
                        px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all
                        ${isCurrentTask 
                          ? 'bg-accent-primary text-white hover:bg-accent-primary/80' 
                          : isCompleted
                            ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                            : 'bg-dark-500 text-gray-300 hover:bg-dark-400'
                        }
                      `}
                    >
                      <Play className="w-4 h-4" />
                      {isCompleted ? 'Repasar' : isCurrentTask ? 'Continuar' : 'Empezar'}
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
