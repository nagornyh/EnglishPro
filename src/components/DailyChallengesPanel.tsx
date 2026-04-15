import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Zap, 
  BookOpen, 
  Clock, 
  Flame,
  Trophy,
  Gift,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import db from '../services/database';
import type { DailyChallenge } from '../types';

interface DailyChallengesPanelProps {
  onChallengeComplete?: (challenge: DailyChallenge) => void;
}

// Personalized challenge generation based on user weaknesses
async function generatePersonalizedChallenges(_userId: string, userStats: {
  avgAccuracy: number;
  lessonsPerDay: number;
  wordsLearned: number;
  weakSkills: string[];
}): Promise<DailyChallenge[]> {
  const today = new Date().toISOString().split('T')[0];
  const challenges: DailyChallenge[] = [];
  
  // Challenge 1: Based on typical activity level (slightly above)
  const lessonTarget = Math.max(1, Math.ceil(userStats.lessonsPerDay * 1.2));
  challenges.push({
    id: `${today}_lessons_${lessonTarget}`,
    type: 'lessons',
    target: lessonTarget,
    progress: 0,
    xpReward: lessonTarget * 25,
    description: `Complete ${lessonTarget} lesson${lessonTarget > 1 ? 's' : ''}`,
    descriptionEs: `Completa ${lessonTarget} lección${lessonTarget > 1 ? 'es' : ''}`,
    claimed: false,
  });

  // Challenge 2: Accuracy challenge (based on user's typical accuracy)
  const accuracyTarget = Math.min(100, Math.ceil(userStats.avgAccuracy + 5));
  challenges.push({
    id: `${today}_accuracy_${accuracyTarget}`,
    type: 'accuracy',
    target: accuracyTarget,
    progress: 0,
    xpReward: accuracyTarget >= 90 ? 75 : 50,
    description: `Achieve ${accuracyTarget}% accuracy`,
    descriptionEs: `Alcanza ${accuracyTarget}% de precisión`,
    claimed: false,
  });

  // Challenge 3: Words or XP based on weak areas
  if (userStats.wordsLearned < 50 || userStats.weakSkills.includes('vocabulary')) {
    challenges.push({
      id: `${today}_words_15`,
      type: 'words',
      target: 15,
      progress: 0,
      xpReward: 40,
      description: 'Review 15 vocabulary words',
      descriptionEs: 'Repasa 15 palabras de vocabulario',
      claimed: false,
    });
  } else {
    const xpTarget = 100;
    challenges.push({
      id: `${today}_xp_${xpTarget}`,
      type: 'xp',
      target: xpTarget,
      progress: 0,
      xpReward: 50,
      description: `Earn ${xpTarget} XP today`,
      descriptionEs: `Gana ${xpTarget} XP hoy`,
      claimed: false,
    });
  }

  return challenges;
}

export default function DailyChallengesPanel({ onChallengeComplete }: DailyChallengesPanelProps) {
  const { user, addXP } = useUser();
  const [challenges, setChallenges] = useState<DailyChallenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [claimingId, setClaimingId] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    if (user) {
      loadChallenges();
    }
  }, [user?.id]);

  // Update challenge progress when user stats change
  useEffect(() => {
    if (user && challenges.length > 0) {
      updateChallengeProgress();
    }
  }, [user?.progress.totalXP, user?.progress.lessonsCompleted, user?.progress.wordsLearned]);

  const loadChallenges = async () => {
    if (!user) return;
    setLoading(true);

    const today = new Date().toISOString().split('T')[0];
    
    // Check for saved challenges
    const savedChallenges = localStorage.getItem(`dailyChallenges_${user.id}_${today}`);
    
    if (savedChallenges) {
      const parsed = JSON.parse(savedChallenges);
      setChallenges(parsed);
      checkAllCompleted(parsed);
    } else {
      // Generate new personalized challenges
      const stats = await db.getDailyStats(user.id);
      const weeklyStats = await getWeeklyAverages(user.id);
      
      const newChallenges = await generatePersonalizedChallenges(user.id, {
        avgAccuracy: weeklyStats.avgAccuracy || 70,
        lessonsPerDay: weeklyStats.lessonsPerDay || 1,
        wordsLearned: user.progress.wordsLearned,
        weakSkills: [], // Could be calculated from skill metrics
      });
      
      // Update with current progress
      const todayStats = stats || { xpEarned: 0, lessonsCompleted: 0, wordsReviewed: 0, accuracy: 0 };
      const updatedChallenges = newChallenges.map(c => ({
        ...c,
        progress: getChallengeProgress(c.type, todayStats, user),
      }));
      
      setChallenges(updatedChallenges);
      saveChallenges(updatedChallenges);
    }
    
    setLoading(false);
  };

  const getWeeklyAverages = async (userId: string) => {
    const stats = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayStat = await db.getDailyStats(userId, dateStr);
      if (dayStat) stats.push(dayStat);
    }
    
    if (stats.length === 0) return { avgAccuracy: 70, lessonsPerDay: 1 };
    
    return {
      avgAccuracy: stats.reduce((sum, s) => sum + (s.accuracy || 0), 0) / stats.length,
      lessonsPerDay: stats.reduce((sum, s) => sum + (s.lessonsCompleted || 0), 0) / stats.length,
    };
  };

  const getChallengeProgress = (type: string, stats: any, user: any) => {
    switch (type) {
      case 'xp': return stats.xpEarned || 0;
      case 'lessons': return stats.lessonsCompleted || 0;
      case 'words': return stats.wordsReviewed || 0;
      case 'time': return stats.timeSpentMinutes || 0;
      case 'streak': return user.streakData.currentStreak;
      case 'accuracy': return stats.accuracy || 0;
      default: return 0;
    }
  };

  const updateChallengeProgress = async () => {
    if (!user) return;
    
    const stats = await db.getDailyStats(user.id);
    const todayStats = stats || { xpEarned: 0, lessonsCompleted: 0, wordsReviewed: 0, accuracy: 0, timeSpentMinutes: 0 };
    
    const updatedChallenges = challenges.map(c => ({
      ...c,
      progress: c.claimed ? c.progress : getChallengeProgress(c.type, todayStats, user),
    }));
    
    setChallenges(updatedChallenges);
    saveChallenges(updatedChallenges);
    checkAllCompleted(updatedChallenges);
  };

  const saveChallenges = (challengesToSave: DailyChallenge[]) => {
    if (!user) return;
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`dailyChallenges_${user.id}_${today}`, JSON.stringify(challengesToSave));
  };

  const checkAllCompleted = (challengeList: DailyChallenge[]) => {
    const allDone = challengeList.every(c => c.progress >= c.target && c.claimed);
    setAllCompleted(allDone);
  };

  const claimReward = async (challenge: DailyChallenge) => {
    if (challenge.claimed || challenge.progress < challenge.target) return;
    
    setClaimingId(challenge.id);
    
    // Add XP
    await addXP(challenge.xpReward);
    
    // Update challenge as claimed
    const updatedChallenges = challenges.map(c => 
      c.id === challenge.id ? { ...c, claimed: true } : c
    );
    setChallenges(updatedChallenges);
    saveChallenges(updatedChallenges);
    
    // Check if all completed
    const allDone = updatedChallenges.every(c => c.progress >= c.target && c.claimed);
    if (allDone) {
      setShowConfetti(true);
      setAllCompleted(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    
    setTimeout(() => setClaimingId(null), 500);
    
    if (onChallengeComplete) {
      onChallengeComplete(challenge);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'xp': return <Zap className="w-5 h-5" />;
      case 'lessons': return <BookOpen className="w-5 h-5" />;
      case 'words': return <Target className="w-5 h-5" />;
      case 'time': return <Clock className="w-5 h-5" />;
      case 'streak': return <Flame className="w-5 h-5" />;
      case 'accuracy': return <Trophy className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'xp': return 'text-yellow-400 bg-yellow-400/20';
      case 'lessons': return 'text-blue-400 bg-blue-400/20';
      case 'words': return 'text-green-400 bg-green-400/20';
      case 'time': return 'text-purple-400 bg-purple-400/20';
      case 'streak': return 'text-orange-400 bg-orange-400/20';
      case 'accuracy': return 'text-cyan-400 bg-cyan-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  if (loading) {
    return (
      <div className="card animate-pulse">
        <div className="h-6 bg-dark-600 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-16 bg-dark-600 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  const completedCount = challenges.filter(c => c.progress >= c.target).length;

  return (
    <div className="card relative overflow-hidden">
      {/* Confetti effect */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-10"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  backgroundColor: ['#f59e0b', '#10b981', '#6366f1', '#ec4899'][i % 4],
                }}
                initial={{ top: -10, opacity: 1 }}
                animate={{ 
                  top: '100%', 
                  opacity: 0,
                  rotate: Math.random() * 360,
                }}
                transition={{ 
                  duration: 1.5 + Math.random(), 
                  delay: Math.random() * 0.5,
                  ease: 'easeOut'
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-accent-primary" />
          <h3 className="font-semibold text-white">Desafíos del Día</h3>
          <span className="text-xs bg-accent-primary/20 text-accent-primary px-2 py-0.5 rounded-full">
            {completedCount}/{challenges.length}
          </span>
        </div>
        {allCompleted && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-1 text-green-400 text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>¡Completado!</span>
          </motion.div>
        )}
      </div>

      {/* Challenges */}
      <div className="space-y-3">
        {challenges.map((challenge, index) => {
          const isComplete = challenge.progress >= challenge.target;
          const progressPercent = Math.min((challenge.progress / challenge.target) * 100, 100);
          
          return (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-3 rounded-xl border transition-all ${
                challenge.claimed 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : isComplete 
                  ? 'bg-accent-primary/10 border-accent-primary/30' 
                  : 'bg-dark-700/50 border-dark-600'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(challenge.type)}`}>
                  {challenge.claimed ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    getIcon(challenge.type)
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${challenge.claimed ? 'text-green-400' : 'text-white'}`}>
                    {challenge.descriptionEs}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-dark-600 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          challenge.claimed ? 'bg-green-500' : isComplete ? 'bg-accent-primary' : 'bg-gray-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {challenge.progress}/{challenge.target}
                    </span>
                  </div>
                </div>

                {/* Reward/Claim */}
                <div className="flex items-center gap-2">
                  {challenge.claimed ? (
                    <span className="text-green-400 text-sm font-medium">
                      +{challenge.xpReward} XP
                    </span>
                  ) : isComplete ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => claimReward(challenge)}
                      disabled={claimingId === challenge.id}
                      className="flex items-center gap-1 px-3 py-1.5 bg-accent-primary text-white text-sm font-medium rounded-lg hover:bg-accent-secondary transition-colors"
                    >
                      <Gift className="w-4 h-4" />
                      <span>{challenge.xpReward} XP</span>
                    </motion.button>
                  ) : (
                    <span className="text-gray-500 text-sm">
                      {challenge.xpReward} XP
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bonus for completing all */}
      {challenges.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-4 p-3 rounded-xl border-2 border-dashed ${
            allCompleted 
              ? 'border-yellow-500/50 bg-yellow-500/10' 
              : 'border-dark-500 bg-dark-700/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className={`w-5 h-5 ${allCompleted ? 'text-yellow-400' : 'text-gray-500'}`} />
              <span className={`text-sm font-medium ${allCompleted ? 'text-yellow-400' : 'text-gray-500'}`}>
                Bonus por completar todo
              </span>
            </div>
            <span className={`text-sm font-bold ${allCompleted ? 'text-yellow-400' : 'text-gray-500'}`}>
              +50 XP
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
