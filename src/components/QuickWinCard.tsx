import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Zap, Star, Target, Flame, Award, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export interface QuickWin {
  id: string;
  type: 'streak' | 'milestone' | 'perfect' | 'speed' | 'review' | 'lesson';
  title: string;
  message: string;
  xp?: number;
  icon?: 'trophy' | 'zap' | 'star' | 'target' | 'flame' | 'award';
}

interface QuickWinCardProps {
  win: QuickWin;
  onDismiss: () => void;
  autoHide?: boolean;
  hideDelay?: number;
}

export function QuickWinCard({ win, onDismiss, autoHide = true, hideDelay = 4000 }: QuickWinCardProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onDismiss, 300);
      }, hideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, hideDelay, onDismiss]);

  const getIcon = () => {
    switch (win.icon || win.type) {
      case 'trophy':
      case 'milestone':
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 'zap':
      case 'speed':
        return <Zap className="w-6 h-6 text-yellow-400" />;
      case 'star':
      case 'perfect':
        return <Star className="w-6 h-6 text-yellow-400" />;
      case 'target':
        return <Target className="w-6 h-6 text-green-400" />;
      case 'flame':
      case 'streak':
        return <Flame className="w-6 h-6 text-orange-400" />;
      case 'award':
      case 'lesson':
      case 'review':
        return <Award className="w-6 h-6 text-purple-400" />;
      default:
        return <Star className="w-6 h-6 text-yellow-400" />;
    }
  };

  const getBackgroundColor = () => {
    switch (win.type) {
      case 'streak':
        return 'from-orange-500/20 to-red-500/20 border-orange-500/40';
      case 'perfect':
        return 'from-yellow-500/20 to-amber-500/20 border-yellow-500/40';
      case 'speed':
        return 'from-blue-500/20 to-cyan-500/20 border-blue-500/40';
      case 'milestone':
        return 'from-purple-500/20 to-pink-500/20 border-purple-500/40';
      case 'review':
        return 'from-green-500/20 to-emerald-500/20 border-green-500/40';
      case 'lesson':
        return 'from-indigo-500/20 to-purple-500/20 border-indigo-500/40';
      default:
        return 'from-accent-primary/20 to-accent-secondary/20 border-accent-primary/40';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.9 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className={`
            px-5 py-3 rounded-xl shadow-2xl backdrop-blur-sm
            bg-gradient-to-r ${getBackgroundColor()}
            border flex items-center gap-4 min-w-[280px]
          `}>
            {/* Icon */}
            <motion.div
              initial={{ rotate: -20, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-12 h-12 rounded-full bg-dark-600/50 flex items-center justify-center"
            >
              {getIcon()}
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="font-semibold text-white"
              >
                {win.title}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-gray-300"
              >
                {win.message}
              </motion.p>
            </div>

            {/* XP badge */}
            {win.xp && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="flex items-center gap-1 px-2 py-1 bg-yellow-500/30 rounded-lg"
              >
                <span className="text-yellow-400 font-bold">+{win.xp}</span>
                <span className="text-yellow-400 text-xs">XP</span>
              </motion.div>
            )}

            {/* Close button */}
            <button
              onClick={() => {
                setIsVisible(false);
                setTimeout(onDismiss, 300);
              }}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Confetti effect for major wins */}
          {(win.type === 'milestone' || win.type === 'perfect') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 pointer-events-none overflow-visible"
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 100 - 50,
                    opacity: 0,
                    scale: 0,
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: 1 + Math.random(),
                    delay: Math.random() * 0.3,
                  }}
                  className="absolute top-1/2 left-1/2 w-3 h-3"
                  style={{
                    backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#9B59B6', '#F39C12'][
                      Math.floor(Math.random() * 5)
                    ],
                    borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook to manage quick wins
export function useQuickWins() {
  const [wins, setWins] = useState<QuickWin[]>([]);

  const showWin = (win: Omit<QuickWin, 'id'>) => {
    const id = `win-${Date.now()}-${Math.random()}`;
    setWins(prev => [...prev, { ...win, id }]);
  };

  const dismissWin = (id: string) => {
    setWins(prev => prev.filter(w => w.id !== id));
  };

  // Predefined win types
  const showStreakWin = (days: number) => {
    showWin({
      type: 'streak',
      title: `¡${days} días seguidos! 🔥`,
      message: '¡Sigue así, estás en racha!',
      xp: days * 5,
    });
  };

  const showPerfectWin = () => {
    showWin({
      type: 'perfect',
      title: '¡Perfecto! ⭐',
      message: '¡Sin errores, increíble!',
      xp: 25,
    });
  };

  const showSpeedWin = () => {
    showWin({
      type: 'speed',
      title: '¡Velocidad! ⚡',
      message: 'Completado más rápido de lo esperado',
      xp: 15,
    });
  };

  const showMilestoneWin = (milestone: string) => {
    showWin({
      type: 'milestone',
      title: '¡Logro desbloqueado! 🏆',
      message: milestone,
      xp: 50,
    });
  };

  const showReviewWin = (cardsReviewed: number) => {
    showWin({
      type: 'review',
      title: '¡Repaso completado! 📚',
      message: `${cardsReviewed} tarjetas repasadas`,
      xp: cardsReviewed * 2,
    });
  };

  const showLessonWin = () => {
    showWin({
      type: 'lesson',
      title: '¡Lección completada! 📖',
      message: 'Has aprendido algo nuevo hoy',
      xp: 20,
    });
  };

  return {
    wins,
    showWin,
    dismissWin,
    showStreakWin,
    showPerfectWin,
    showSpeedWin,
    showMilestoneWin,
    showReviewWin,
    showLessonWin,
  };
}

// Quick wins container component
interface QuickWinsContainerProps {
  wins: QuickWin[];
  onDismiss: (id: string) => void;
}

export function QuickWinsContainer({ wins, onDismiss }: QuickWinsContainerProps) {
  return (
    <>
      {wins.map((win) => (
        <QuickWinCard
          key={win.id}
          win={win}
          onDismiss={() => onDismiss(win.id)}
        />
      ))}
    </>
  );
}

export default QuickWinCard;
