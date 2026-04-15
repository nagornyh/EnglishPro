import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Calendar, 
  Zap, 
  Clock, 
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import db from '../services/database';

interface DayData {
  date: string;
  dayName: string;
  xp: number;
  lessons: number;
  words: number;
  minutes: number;
  isToday: boolean;
}

function WeeklyProgressChart() {
  const { user } = useUser();
  const [weekData, setWeekData] = useState<DayData[]>([]);
  const [weekOffset, setWeekOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [maxXP, setMaxXP] = useState(100);

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  useEffect(() => {
    loadWeekData();
  }, [user?.id, weekOffset]);

  const loadWeekData = async () => {
    if (!user) return;
    setLoading(true);

    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    // Get start of week (Sunday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() - (weekOffset * 7));
    
    const days: DayData[] = [];
    let max = 100;

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      
      const stats = await db.getDailyStats(user.id, dateStr);
      
      const dayData: DayData = {
        date: dateStr,
        dayName: dayNames[date.getDay()],
        xp: stats?.xpEarned || 0,
        lessons: stats?.lessonsCompleted || 0,
        words: stats?.wordsReviewed || 0,
        minutes: stats?.timeSpentMinutes || 0,
        isToday: dateStr === todayStr,
      };
      
      days.push(dayData);
      if (dayData.xp > max) max = dayData.xp;
    }

    setWeekData(days);
    setMaxXP(Math.max(max, user.settings.dailyGoal));
    setLoading(false);
  };

  const goToPreviousWeek = () => setWeekOffset(weekOffset + 1);
  const goToNextWeek = () => {
    if (weekOffset > 0) setWeekOffset(weekOffset - 1);
  };

  const totalXP = weekData.reduce((sum, d) => sum + d.xp, 0);
  const totalLessons = weekData.reduce((sum, d) => sum + d.lessons, 0);
  const totalMinutes = weekData.reduce((sum, d) => sum + d.minutes, 0);
  const activeDays = weekData.filter(d => d.xp > 0).length;

  if (loading) {
    return (
      <div className="card">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-dark-600 rounded w-1/3"></div>
          <div className="h-32 bg-dark-600 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="card space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-accent-primary" />
          <h3 className="font-semibold text-white">Progreso Semanal</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={goToPreviousWeek}
            className="p-1 hover:bg-dark-600 rounded transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <span className="text-sm text-gray-400 min-w-[120px] text-center">
            {weekOffset === 0 ? 'Esta semana' : weekOffset === 1 ? 'Semana pasada' : `Hace ${weekOffset} semanas`}
          </span>
          <button
            onClick={goToNextWeek}
            disabled={weekOffset === 0}
            className={`p-1 rounded transition-colors ${
              weekOffset === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-600'
            }`}
          >
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-40">
        {/* Goal line */}
        {user && (
          <div 
            className="absolute w-full border-t border-dashed border-accent-primary/30"
            style={{ bottom: `${(user.settings.dailyGoal / maxXP) * 100}%` }}
          >
            <span className="absolute right-0 -top-3 text-xs text-accent-primary">
              Meta: {user.settings.dailyGoal} XP
            </span>
          </div>
        )}
        
        {/* Bars */}
        <div className="flex items-end justify-between h-full gap-2">
          {weekData.map((day, index) => {
            const height = maxXP > 0 ? (day.xp / maxXP) * 100 : 0;
            const reachedGoal = user && day.xp >= user.settings.dailyGoal;
            
            return (
              <div key={day.date} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.max(height, 2)}%` }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className={`w-full rounded-t-lg ${
                    day.isToday 
                      ? 'bg-gradient-to-t from-accent-primary to-accent-secondary' 
                      : reachedGoal 
                      ? 'bg-green-500' 
                      : day.xp > 0 
                      ? 'bg-dark-500' 
                      : 'bg-dark-700'
                  }`}
                  title={`${day.xp} XP`}
                />
                <span className={`text-xs ${day.isToday ? 'text-accent-primary font-bold' : 'text-gray-500'}`}>
                  {day.dayName}
                </span>
                {day.xp > 0 && (
                  <span className="text-xs text-gray-400">{day.xp}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-4 gap-4 pt-4 border-t border-dark-600">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
            <Zap className="w-4 h-4" />
          </div>
          <p className="text-lg font-bold text-white">{totalXP}</p>
          <p className="text-xs text-gray-500">XP Total</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-green-400 mb-1">
            <BookOpen className="w-4 h-4" />
          </div>
          <p className="text-lg font-bold text-white">{totalLessons}</p>
          <p className="text-xs text-gray-500">Lecciones</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-blue-400 mb-1">
            <Calendar className="w-4 h-4" />
          </div>
          <p className="text-lg font-bold text-white">{activeDays}/7</p>
          <p className="text-xs text-gray-500">Días activos</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
            <Clock className="w-4 h-4" />
          </div>
          <p className="text-lg font-bold text-white">{totalMinutes}</p>
          <p className="text-xs text-gray-500">Minutos</p>
        </div>
      </div>

      {/* Encouragement */}
      {activeDays >= 5 && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
          <span className="text-green-400 text-sm">🎉 ¡Excelente semana! Has practicado {activeDays} días.</span>
        </div>
      )}
      {activeDays < 3 && weekOffset === 0 && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-center">
          <span className="text-yellow-400 text-sm">💪 ¡Vamos! Aún puedes mejorar esta semana.</span>
        </div>
      )}
    </div>
  );
}

// Memoized export to prevent unnecessary re-renders
export default memo(WeeklyProgressChart);