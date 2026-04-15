import { motion, AnimatePresence } from 'framer-motion';
import { Star, Zap, Flame, Target, Gift } from 'lucide-react';
import { getUserLevel, getXPToNextLevel, userLevels } from '../../data/gamification';
import type { UserLevel, DailyChallenge } from '../../types';

interface LevelBadgeProps {
  totalXP: number;
  size?: 'sm' | 'md' | 'lg';
  showXP?: boolean;
  showProgress?: boolean;
}

export function LevelBadge({ totalXP, size = 'md', showXP = true, showProgress = true }: LevelBadgeProps) {
  const level = getUserLevel(totalXP);
  const xpToNext = getXPToNextLevel(totalXP);
  const nextLevel = userLevels.find(l => l.level === level.level + 1);
  
  const progressPercent = nextLevel 
    ? ((totalXP - level.minXP) / (nextLevel.minXP - level.minXP)) * 100
    : 100;

  const sizes = {
    sm: { badge: 'w-8 h-8', text: 'text-xs', icon: 'w-4 h-4' },
    md: { badge: 'w-12 h-12', text: 'text-sm', icon: 'w-5 h-5' },
    lg: { badge: 'w-16 h-16', text: 'text-base', icon: 'w-6 h-6' },
  };

  return (
    <div className="flex items-center gap-3">
      <motion.div
        className={`${sizes[size].badge} rounded-full flex items-center justify-center relative`}
        style={{ 
          background: `linear-gradient(135deg, ${level.color}40, ${level.color}80)`,
          border: `2px solid ${level.color}`,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={`${sizes[size].text} font-bold text-white`}>{level.level}</span>
        <Star 
          className={`${sizes[size].icon} absolute -top-1 -right-1 text-yellow-400 fill-yellow-400`}
        />
      </motion.div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white" style={{ color: level.color }}>
            {level.name}
          </span>
          {level.badge && <span>{level.badge}</span>}
        </div>
        
        {showXP && (
          <p className="text-xs text-gray-400">
            {totalXP.toLocaleString()} XP total
          </p>
        )}
        
        {showProgress && nextLevel && (
          <div className="mt-1">
            <div className="h-1.5 bg-dark-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: level.color }}
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              {xpToNext.toLocaleString()} XP para nivel {level.level + 1}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

interface StreakDisplayProps {
  currentStreak: number;
  longestStreak: number;
  size?: 'sm' | 'md' | 'lg';
}

export function StreakDisplay({ currentStreak, longestStreak, size = 'md' }: StreakDisplayProps) {
  const isOnFire = currentStreak >= 7;
  const isMilestone = currentStreak > 0 && currentStreak % 7 === 0;

  const sizes = {
    sm: { icon: 'w-5 h-5', text: 'text-lg', subtext: 'text-xs' },
    md: { icon: 'w-7 h-7', text: 'text-2xl', subtext: 'text-sm' },
    lg: { icon: 'w-10 h-10', text: 'text-4xl', subtext: 'text-base' },
  };

  return (
    <div className="flex items-center gap-3">
      <motion.div
        className={`relative ${isOnFire ? 'streak-fire' : ''}`}
        animate={isOnFire ? { 
          scale: [1, 1.1, 1],
          rotate: [0, -5, 5, 0],
        } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Flame 
          className={`${sizes[size].icon} ${currentStreak > 0 ? 'text-orange-500' : 'text-gray-500'}`}
          fill={currentStreak > 0 ? '#f97316' : 'none'}
        />
        {isMilestone && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        )}
      </motion.div>
      
      <div>
        <div className="flex items-baseline gap-1">
          <span className={`${sizes[size].text} font-bold text-white`}>
            {currentStreak}
          </span>
          <span className={`${sizes[size].subtext} text-gray-400`}>días</span>
        </div>
        <p className={`${sizes[size].subtext} text-gray-500`}>
          Mejor: {longestStreak} días
        </p>
      </div>
    </div>
  );
}

interface DailyChallengesProps {
  challenges: DailyChallenge[];
  onClaimReward?: (challengeId: string) => void;
}

export function DailyChallenges({ challenges, onClaimReward }: DailyChallengesProps) {
  if (challenges.length === 0) return null;

  return (
    <div className="card">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-5 h-5 text-accent-primary" />
        <h3 className="font-semibold text-white">Desafíos del Día</h3>
      </div>
      
      <div className="space-y-3">
        {challenges.map((challenge) => (
          <ChallengeCard 
            key={challenge.id} 
            challenge={challenge} 
            onClaimReward={onClaimReward}
          />
        ))}
      </div>
    </div>
  );
}

interface ChallengeCardProps {
  challenge: DailyChallenge;
  onClaimReward?: (challengeId: string) => void;
}

function ChallengeCard({ challenge, onClaimReward }: ChallengeCardProps) {
  const progressPercent = Math.min((challenge.progress / challenge.target) * 100, 100);
  const isComplete = challenge.progress >= challenge.target;

  const icons = {
    xp: <Zap className="w-4 h-4" />,
    lessons: <Target className="w-4 h-4" />,
    words: <span className="text-sm">📚</span>,
    streak: <Flame className="w-4 h-4" />,
    accuracy: <span className="text-sm">🎯</span>,
    time: <span className="text-sm">⏱️</span>,
  };

  return (
    <motion.div 
      className={`p-3 rounded-xl transition-all ${
        isComplete ? 'bg-green-500/20 border border-green-500/30' : 'bg-dark-200'
      }`}
      layout
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            isComplete ? 'bg-green-500/30 text-green-400' : 'bg-dark-300 text-gray-400'
          }`}>
            {icons[challenge.type]}
          </div>
          <div>
            <p className="font-medium text-white text-sm">{challenge.description}</p>
            <p className="text-xs text-gray-400">{challenge.descriptionEs}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-bold text-sm flex items-center gap-1">
            <Gift className="w-3 h-3" />
            {challenge.xpReward}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex-1 h-2 bg-dark-300 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${isComplete ? 'bg-green-500' : 'bg-accent-primary'}`}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-xs text-gray-400 min-w-[50px] text-right">
          {challenge.progress}/{challenge.target}
        </span>
      </div>
      
      {isComplete && !challenge.claimed && onClaimReward && (
        <motion.button
          className="mt-2 w-full py-1.5 rounded-lg bg-green-500 text-white font-medium text-sm hover:bg-green-600 transition-colors"
          onClick={() => onClaimReward(challenge.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ¡Reclamar recompensa!
        </motion.button>
      )}
      
      {challenge.claimed && (
        <p className="mt-2 text-center text-xs text-green-400">✓ Completado</p>
      )}
    </motion.div>
  );
}

interface AchievementPopupProps {
  achievement: {
    id: string;
    name: string;
    nameEs: string;
    description: string;
    descriptionEs: string;
    icon: string;
    xpReward: number;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
  } | null;
  onClose: () => void;
}

export function AchievementPopup({ achievement, onClose }: AchievementPopupProps) {
  if (!achievement) return null;

  const rarityColors = {
    common: 'from-gray-500 to-gray-600',
    rare: 'from-blue-500 to-blue-600',
    epic: 'from-purple-500 to-purple-600',
    legendary: 'from-amber-500 to-orange-500',
  };

  const rarityGlow = {
    common: 'shadow-gray-500/50',
    rare: 'shadow-blue-500/50',
    epic: 'shadow-purple-500/50',
    legendary: 'shadow-amber-500/50',
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`relative bg-dark-100 rounded-2xl p-8 text-center max-w-sm shadow-2xl ${rarityGlow[achievement.rarity]}`}
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 15 }}
        >
          {/* Confetti effect placeholder */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🎉
            </motion.div>
          </div>
          
          <p className="text-sm text-gray-400 mb-2">¡Logro Desbloqueado!</p>
          
          <motion.div
            className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${rarityColors[achievement.rarity]} flex items-center justify-center text-5xl mb-4 shadow-lg`}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 1 }}
          >
            {achievement.icon}
          </motion.div>
          
          <h3 className="text-xl font-bold text-white mb-1">{achievement.nameEs}</h3>
          <p className="text-gray-400 text-sm mb-4">{achievement.descriptionEs}</p>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-bold">+{achievement.xpReward} XP</span>
          </div>
          
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${rarityColors[achievement.rarity]} text-white`}>
            {achievement.rarity.toUpperCase()}
          </span>
          
          <motion.button
            className="mt-6 w-full py-3 rounded-xl bg-accent-primary text-white font-semibold hover:bg-accent-secondary transition-colors"
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ¡Genial!
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

interface XPGainAnimationProps {
  amount: number;
  position?: { x: number; y: number };
  onComplete?: () => void;
}

export function XPGainAnimation({ amount, position, onComplete }: XPGainAnimationProps) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 flex items-center gap-1"
      style={{ 
        left: position?.x ?? '50%', 
        top: position?.y ?? '50%',
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ opacity: 0, y: -50, scale: 1.5 }}
      transition={{ duration: 1 }}
      onAnimationComplete={onComplete}
    >
      <Zap className="w-5 h-5 text-amber-400" />
      <span className="text-amber-400 font-bold text-lg">+{amount} XP</span>
    </motion.div>
  );
}

interface LevelUpPopupProps {
  newLevel: UserLevel;
  onClose: () => void;
}

export function LevelUpPopup({ newLevel, onClose }: LevelUpPopupProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-dark-100 rounded-2xl p-8 text-center max-w-sm"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🎊
          </motion.div>
          
          <p className="text-lg text-gray-400 mb-2">¡Subiste de Nivel!</p>
          
          <motion.div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{ 
              background: `linear-gradient(135deg, ${newLevel.color}40, ${newLevel.color}80)`,
              border: `3px solid ${newLevel.color}`,
            }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 1 }}
          >
            <span className="text-3xl font-bold text-white">{newLevel.level}</span>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white mb-1">{newLevel.name}</h3>
          {newLevel.badge && <span className="text-2xl mb-2 block">{newLevel.badge}</span>}
          <p className="text-gray-400 text-sm mb-4">{newLevel.descriptionEs}</p>
          
          <div className="bg-dark-200 rounded-xl p-3 mb-4">
            <p className="text-xs text-gray-400 mb-1">Beneficios desbloqueados</p>
            <p className="text-sm text-white">{newLevel.benefits?.join(' • ') || 'Nuevos desafíos disponibles'}</p>
          </div>
          
          <motion.button
            className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold"
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ¡Continuar!
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
