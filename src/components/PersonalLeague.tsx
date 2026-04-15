import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown,
  Crown,
  Target,
  Zap,
  Calendar
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import db from '../services/database';

interface WeeklySnapshot {
  weekStart: string;
  weekEnd: string;
  totalXP: number;
  lessonsCompleted: number;
  wordsLearned: number;
  avgAccuracy: number;
  daysActive: number;
  bestStreak: number;
}

interface LeagueRank {
  title: string;
  titleEs: string;
  icon: string;
  minXP: number;
  color: string;
}

const leagueRanks: LeagueRank[] = [
  { title: 'Bronze', titleEs: 'Bronce', icon: '🥉', minXP: 0, color: '#cd7f32' },
  { title: 'Silver', titleEs: 'Plata', icon: '🥈', minXP: 200, color: '#c0c0c0' },
  { title: 'Gold', titleEs: 'Oro', icon: '🥇', minXP: 500, color: '#ffd700' },
  { title: 'Platinum', titleEs: 'Platino', icon: '💎', minXP: 1000, color: '#e5e4e2' },
  { title: 'Diamond', titleEs: 'Diamante', icon: '💠', minXP: 2000, color: '#b9f2ff' },
  { title: 'Master', titleEs: 'Maestro', icon: '👑', minXP: 3500, color: '#9b59b6' },
  { title: 'Legend', titleEs: 'Leyenda', icon: '🔥', minXP: 5000, color: '#e74c3c' },
];

function getLeagueRank(weeklyXP: number): LeagueRank {
  for (let i = leagueRanks.length - 1; i >= 0; i--) {
    if (weeklyXP >= leagueRanks[i].minXP) {
      return leagueRanks[i];
    }
  }
  return leagueRanks[0];
}

function getNextRank(currentRank: LeagueRank): LeagueRank | null {
  const currentIndex = leagueRanks.findIndex(r => r.title === currentRank.title);
  if (currentIndex < leagueRanks.length - 1) {
    return leagueRanks[currentIndex + 1];
  }
  return null;
}

export default function PersonalLeague() {
  const { user } = useUser();
  const [currentWeek, setCurrentWeek] = useState<WeeklySnapshot | null>(null);
  const [lastWeek, setLastWeek] = useState<WeeklySnapshot | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadWeeklyData() {
      if (!user) return;
      setLoading(true);

      const today = new Date();
      const dayOfWeek = today.getDay();

      const currentWeekStart = new Date(today);
      currentWeekStart.setDate(today.getDate() - dayOfWeek);
      currentWeekStart.setHours(0, 0, 0, 0);

      const lastWeekStart = new Date(currentWeekStart);
      lastWeekStart.setDate(lastWeekStart.getDate() - 7);

      const currentWeekData = await loadWeekStats(user.id, currentWeekStart);
      if (cancelled) return;
      setCurrentWeek(currentWeekData);

      const lastWeekData = await loadWeekStats(user.id, lastWeekStart);
      if (cancelled) return;
      setLastWeek(lastWeekData);

      saveWeeklySnapshot(user.id, currentWeekData);

      if (!cancelled) setLoading(false);
    }

    if (user) {
      loadWeeklyData();
    }

    return () => { cancelled = true; };
  }, [user?.id, user?.progress.totalXP]);

  const loadWeekStats = async (userId: string, weekStart: Date): Promise<WeeklySnapshot> => {
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    
    let totalXP = 0;
    let lessonsCompleted = 0;
    let wordsReviewed = 0;
    let totalAccuracy = 0;
    let daysActive = 0;
    let accuracyDays = 0;
    let bestStreak = 0;
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      
      const stats = await db.getDailyStats(userId, dateStr);
      if (stats) {
        totalXP += stats.xpEarned || 0;
        lessonsCompleted += stats.lessonsCompleted || 0;
        wordsReviewed += stats.wordsReviewed || 0;
        if (stats.accuracy) {
          totalAccuracy += stats.accuracy;
          accuracyDays++;
        }
        if (stats.xpEarned > 0) {
          daysActive++;
        }
      }
    }
    
    return {
      weekStart: weekStart.toISOString().split('T')[0],
      weekEnd: weekEnd.toISOString().split('T')[0],
      totalXP,
      lessonsCompleted,
      wordsLearned: wordsReviewed,
      avgAccuracy: accuracyDays > 0 ? Math.round(totalAccuracy / accuracyDays) : 0,
      daysActive,
      bestStreak,
    };
  };

  const saveWeeklySnapshot = (userId: string, snapshot: WeeklySnapshot) => {
    const key = `weeklySnapshot_${userId}_${snapshot.weekStart}`;
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(snapshot));
    }
  };

  const getComparison = (current: number, previous: number) => {
    if (current > previous) return { trend: 'up', diff: current - previous };
    if (current < previous) return { trend: 'down', diff: previous - current };
    return { trend: 'same', diff: 0 };
  };

  if (loading || !currentWeek) {
    return (
      <div className="card animate-pulse">
        <div className="h-6 bg-dark-600 rounded w-1/3 mb-4"></div>
        <div className="h-32 bg-dark-600 rounded"></div>
      </div>
    );
  }

  const currentRank = getLeagueRank(currentWeek.totalXP);
  const nextRank = getNextRank(currentRank);
  const xpToNextRank = nextRank ? nextRank.minXP - currentWeek.totalXP : 0;
  const rankProgress = nextRank 
    ? ((currentWeek.totalXP - currentRank.minXP) / (nextRank.minXP - currentRank.minXP)) * 100
    : 100;

  const xpComparison = lastWeek ? getComparison(currentWeek.totalXP, lastWeek.totalXP) : null;
  const lessonsComparison = lastWeek ? getComparison(currentWeek.lessonsCompleted, lastWeek.lessonsCompleted) : null;

  return (
    <div className="card space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-yellow-400" />
          <h3 className="font-semibold text-white">Liga Personal</h3>
        </div>
        <span className="text-xs text-gray-400">
          {new Date(currentWeek.weekStart).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })} - {new Date(currentWeek.weekEnd).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}
        </span>
      </div>

      {/* Current Rank */}
      <div className="relative p-4 rounded-xl bg-gradient-to-r from-dark-700 to-dark-600 border border-dark-500">
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
            style={{ 
              background: `linear-gradient(135deg, ${currentRank.color}40, ${currentRank.color}20)`,
              border: `2px solid ${currentRank.color}`,
            }}
          >
            {currentRank.icon}
          </motion.div>
          
          <div className="flex-1">
            <p className="text-sm text-gray-400">Tu Rango</p>
            <p className="text-xl font-bold text-white" style={{ color: currentRank.color }}>
              {currentRank.titleEs}
            </p>
            {nextRank && (
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span>Próximo: {nextRank.titleEs}</span>
                  <span>{xpToNextRank} XP</span>
                </div>
                <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: currentRank.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${rankProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Weekly XP with Comparison */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-dark-700/50 border border-dark-600">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-xs text-gray-400">XP Esta Semana</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">{currentWeek.totalXP}</span>
            {xpComparison && xpComparison.trend !== 'same' && (
              <span className={`text-xs flex items-center gap-0.5 ${
                xpComparison.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {xpComparison.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {xpComparison.diff}
              </span>
            )}
          </div>
          {lastWeek && (
            <p className="text-xs text-gray-500 mt-1">
              Semana pasada: {lastWeek.totalXP} XP
            </p>
          )}
        </div>

        <div className="p-3 rounded-xl bg-dark-700/50 border border-dark-600">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-gray-400">Lecciones</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">{currentWeek.lessonsCompleted}</span>
            {lessonsComparison && lessonsComparison.trend !== 'same' && (
              <span className={`text-xs flex items-center gap-0.5 ${
                lessonsComparison.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {lessonsComparison.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {lessonsComparison.diff}
              </span>
            )}
          </div>
          {lastWeek && (
            <p className="text-xs text-gray-500 mt-1">
              Semana pasada: {lastWeek.lessonsCompleted}
            </p>
          )}
        </div>
      </div>

      {/* Days Active */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-dark-700/50 border border-dark-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-400">Días Activos</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                i < currentWeek.daysActive
                  ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                  : 'bg-dark-600 text-gray-600'
              }`}
            >
              {i < currentWeek.daysActive ? '✓' : (i + 1)}
            </div>
          ))}
        </div>
      </div>

      {/* Motivation Message */}
      {xpComparison && (
        <div className={`p-3 rounded-xl text-center text-sm ${
          xpComparison.trend === 'up' 
            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
            : xpComparison.trend === 'down'
            ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
            : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
        }`}>
          {xpComparison.trend === 'up' ? (
            <>🎉 ¡Vas mejor que la semana pasada! +{xpComparison.diff} XP</>
          ) : xpComparison.trend === 'down' ? (
            <>💪 ¡Puedes superar tu récord! Te faltan {xpComparison.diff} XP</>
          ) : (
            <>⚡ ¡Mantén el ritmo! Igualaste tu semana anterior</>
          )}
        </div>
      )}
    </div>
  );
}
