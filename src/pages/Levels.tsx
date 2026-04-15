import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, BookOpen, SkipForward } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { levels, getCefrDescription } from '../data/levels';

export default function Levels() {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();
  const [jumpingTo, setJumpingTo] = useState<number | null>(null);

  if (!user) return null;

  const handleJumpToLevel = async (levelId: number) => {
    setJumpingTo(levelId);
    await updateUser({
      progress: {
        ...user.progress,
        currentLevel: levelId,
        currentTask: 1,
      }
    });
    setJumpingTo(null);
    navigate(`/level/${levelId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
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
      className="space-y-8 max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="heading-2 text-white mb-2">Niveles de Aprendizaje</h1>
        <p className="text-gray-400">
          Progresa desde principiante absoluto hasta nivel nativo
        </p>
      </motion.div>

      {/* Levels Grid */}
      <div className="space-y-4">
        {levels.map((level) => {
          const completedTasksCount = new Set(
            user.progress.completedLessons
              .filter(cl => cl.levelId === level.id)
              .map(cl => cl.taskId)
          ).size;
          const isCurrentLevel = level.id === user.progress.currentLevel;
          const isCompleted = completedTasksCount >= level.totalTasks;
          const isLocked = level.id > user.progress.currentLevel;
          const progress = isCompleted
            ? 100
            : Math.round((completedTasksCount / level.totalTasks) * 100);

          return (
            <motion.div
              key={level.id}
              variants={itemVariants}
            >
              <Link
                to={`/level/${level.id}`}
                className={`
                  block p-6 rounded-2xl transition-all
                  ${isCurrentLevel 
                    ? 'gradient-border ring-2 ring-accent-primary/30 bg-dark-600/90' 
                    : 'card'
                  }
                  ${isLocked 
                    ? 'opacity-75 hover:opacity-100' 
                    : 'hover:border-accent-primary/30 hover:shadow-lg hover:shadow-accent-primary/10'
                  }
                `}
                onClick={e => {
                  if (isLocked) {
                    e.preventDefault();
                    handleJumpToLevel(level.id);
                  }
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Level Icon & Number */}
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl relative"
                      style={{ backgroundColor: `${level.color}20` }}
                    >
                      {isLocked ? (
                        jumpingTo === level.id ? (
                          <div className="spinner w-8 h-8" />
                        ) : (
                          <SkipForward className="w-8 h-8 text-gray-400" />
                        )
                      ) : isCompleted ? (
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      ) : (
                        level.icon
                      )}
                      {isCurrentLevel && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-primary rounded-full animate-pulse" />
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span 
                          className="px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{ 
                            backgroundColor: `${level.color}20`,
                            color: level.color
                          }}
                        >
                          Nivel {level.id}
                        </span>
                        <span className="text-xs text-gray-500">
                          {level.cefrLevel}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{level.name}</h3>
                      <p className="text-sm text-gray-400">{level.description}</p>
                    </div>
                  </div>

                  {/* Progress & Stats */}
                  <div className="md:ml-auto flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {level.totalTasks} tareas
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {level.estimatedHours}h
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full md:w-48">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Progreso</span>
                        <span className="text-gray-400">{progress}%</span>
                      </div>
                      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: level.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CEFR Description */}
                <div className="mt-4 pt-4 border-t border-dark-500 flex items-center justify-between gap-4">
                  <p className="text-sm text-gray-500">
                    {getCefrDescription(level.cefrLevel)}
                  </p>
                  {isLocked && (
                    <span className="text-xs text-accent-primary whitespace-nowrap flex items-center gap-1">
                      <SkipForward className="w-3 h-3" />
                      Saltar aquí
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
