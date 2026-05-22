import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  BookOpen, 
  Target, 
  Award,
  Calendar,
  Zap,
  Mic,
  PenTool,
  Headphones,
  MessageSquare,
  Volume2,
  BarChart3
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { levels } from '../data/levels';
import { SkillsProgress } from '../components/SkillsProgress';
import WeeklyProgressChart from '../components/WeeklyProgressChart';
import WeaknessAnalysis from '../components/WeaknessAnalysis';
import { getSkillMetrics, calculateOverallProficiency, type SkillMetrics } from '../services/skillMetrics';

export default function Progress() {
  const { user } = useUser();
  const [skillMetrics, setSkillMetrics] = useState<SkillMetrics[]>([]);
  const [loadingSkills, setLoadingSkills] = useState(true);

  useEffect(() => {
    if (user) {
      loadSkillMetrics();
    }
  }, [user?.id, user?.progress.lessonsCompleted]);

  const loadSkillMetrics = async () => {
    if (!user) return;
    setLoadingSkills(true);
    const metrics = await getSkillMetrics(user.id);
    setSkillMetrics(metrics);
    setLoadingSkills(false);
  };

  if (!user) return null;

  const currentLevel = levels.find(l => l.id === user.progress.currentLevel) || levels[0];
  const totalLevels = levels.length;
  const overallProgress = Math.round(((user.progress.currentLevel - 1) / totalLevels) * 100);
  const proficiency = calculateOverallProficiency(skillMetrics);

  // Convert skill metrics to format expected by SkillsProgress component
  const skillIcons: Record<string, React.ReactNode> = {
    speaking: <Mic className="w-5 h-5" />,
    listening: <Headphones className="w-5 h-5" />,
    reading: <BookOpen className="w-5 h-5" />,
    writing: <PenTool className="w-5 h-5" />,
    grammar: <MessageSquare className="w-5 h-5" />,
    pronunciation: <Volume2 className="w-5 h-5" />,
  };

  const skillColors: Record<string, string> = {
    speaking: '#f59e0b',
    listening: '#6366f1',
    reading: '#10b981',
    writing: '#8b5cf6',
    grammar: '#06b6d4',
    pronunciation: '#ec4899',
  };

  const skills = skillMetrics.map(metric => ({
    id: metric.id,
    name: metric.name,
    icon: skillIcons[metric.id] || <BookOpen className="w-5 h-5" />,
    color: skillColors[metric.id] || '#6366f1',
    progress: metric.progress,
    activitiesCompleted: metric.activitiesCompleted,
    totalActivities: Math.max(metric.activitiesCompleted + 10, 50), // Dynamic total
    level: metric.level,
    accuracy: metric.accuracy,
    totalXP: metric.totalXP,
  }));

  const stats = [
    { 
      icon: <Zap className="w-6 h-6" />, 
      label: 'XP Total', 
      value: user.progress.totalXP.toLocaleString(),
      color: 'indigo'
    },
    { 
      icon: <BookOpen className="w-6 h-6" />, 
      label: 'Lecciones', 
      value: user.progress.lessonsCompleted.toString(),
      color: 'emerald'
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      label: 'Tiempo Total', 
      value: `${Math.floor(user.progress.timeSpentMinutes / 60)}h ${user.progress.timeSpentMinutes % 60}m`,
      color: 'cyan'
    },
    { 
      icon: <Target className="w-6 h-6" />, 
      label: 'Palabras', 
      value: user.progress.wordsLearned.toString(),
      color: 'amber'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
      className="space-y-8 max-w-5xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="heading-2 text-white mb-2">Tu Progreso</h1>
        <p className="text-gray-400">Resumen de tu aprendizaje de inglés</p>
      </motion.div>

      {/* Proficiency Level Badge */}
      {!loadingSkills && proficiency && (
        <motion.div variants={itemVariants} className="card bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">Nivel de Proficiencia Estimado</p>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-accent-primary">{proficiency.level}</span>
                <span className="text-lg text-white">{proficiency.description}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Basado en tus actividades</p>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5, 6].map((lvl) => (
                  <div
                    key={lvl}
                    className={`w-4 h-4 rounded-sm ${
                      lvl <= proficiency.numericLevel 
                        ? 'bg-accent-primary' 
                        : 'bg-dark-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Overall Progress */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Progreso General</h2>
            <p className="text-gray-400">Nivel {user.progress.currentLevel} de {totalLevels}</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold gradient-text">{overallProgress}%</p>
            <p className="text-sm text-gray-400">completado</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-4 bg-dark-700 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {/* Level Indicators */}
        <div className="flex justify-between text-xs text-gray-500">
          {levels.filter((_, i) => i % 3 === 0 || i === levels.length - 1).map((level) => (
            <span 
              key={level.id}
              className={user.progress.currentLevel >= level.id ? 'text-accent-primary' : ''}
            >
              {level.id}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Skills Progress */}
      <motion.div variants={itemVariants}>
        <SkillsProgress skills={skills} />
      </motion.div>

      {/* Weakness Analysis */}
      <motion.div variants={itemVariants}>
        <h2 className="heading-4 text-white mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-accent-primary" />
          Análisis Inteligente
        </h2>
        <WeaknessAnalysis />
      </motion.div>

      {/* Weekly Progress Chart */}
      <motion.div variants={itemVariants}>
        <WeeklyProgressChart />
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </motion.div>

      {/* Current Level Details */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
            style={{ backgroundColor: `${currentLevel.color}20` }}
          >
            {currentLevel.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{currentLevel.name}</h3>
            <p className="text-gray-400">{currentLevel.cefrLevel} • {currentLevel.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-dark-700/50 rounded-xl">
            <p className="text-sm text-gray-400 mb-1">Tarea Actual</p>
            <p className="text-xl font-bold text-white">{user.progress.currentTask} / {currentLevel.totalTasks}</p>
          </div>
          <div className="p-4 bg-dark-700/50 rounded-xl">
            <p className="text-sm text-gray-400 mb-1">Tiempo Estimado</p>
            <p className="text-xl font-bold text-white">{currentLevel.estimatedHours}h</p>
          </div>
          <div className="p-4 bg-dark-700/50 rounded-xl">
            <p className="text-sm text-gray-400 mb-1">Progreso del Nivel</p>
            <p className="text-xl font-bold text-white">
              {Math.round((user.progress.currentTask / currentLevel.totalTasks) * 100)}%
            </p>
          </div>
        </div>
      </motion.div>

      {/* Streak Calendar */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-accent-primary" />
          <h3 className="text-xl font-bold text-white">Racha de Aprendizaje</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-amber-500/10 rounded-xl text-center">
            <p className="text-3xl font-bold text-amber-400 mb-1">
              {user.streakData.currentStreak}
            </p>
            <p className="text-sm text-gray-400">Racha Actual</p>
          </div>
          <div className="p-4 bg-purple-500/10 rounded-xl text-center">
            <p className="text-3xl font-bold text-purple-400 mb-1">
              {user.streakData.longestStreak}
            </p>
            <p className="text-sm text-gray-400">Mejor Racha</p>
          </div>
          <div className="p-4 bg-green-500/10 rounded-xl text-center">
            <p className="text-3xl font-bold text-green-400 mb-1">
              {user.streakData.streakHistory.length}
            </p>
            <p className="text-sm text-gray-400">Días Activos</p>
          </div>
          <div className="p-4 bg-cyan-500/10 rounded-xl text-center">
            <p className="text-3xl font-bold text-cyan-400 mb-1">
              {user.settings.dailyGoal}
            </p>
            <p className="text-sm text-gray-400">Meta Diaria XP</p>
          </div>
        </div>

        {/* Week View */}
        <div className="flex justify-between">
          {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, index) => {
            const date = new Date();
            date.setDate(date.getDate() - date.getDay() + index + 1);
            const dateStr = date.toISOString().split('T')[0];
            const isActive = user.streakData.streakHistory.includes(dateStr);
            const isToday = dateStr === new Date().toISOString().split('T')[0];

            return (
              <div key={day} className="text-center">
                <p className="text-xs text-gray-500 mb-2">{day}</p>
                <div 
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${isActive 
                      ? 'bg-green-500 text-white' 
                      : isToday 
                        ? 'bg-accent-primary/30 text-accent-primary border-2 border-accent-primary' 
                        : 'bg-dark-700 text-gray-500'
                    }
                  `}
                >
                  {isActive ? '✓' : date.getDate()}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Achievements Preview */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-accent-primary" />
            <h3 className="text-xl font-bold text-white">Logros Recientes</h3>
          </div>
          <a href="/achievements" className="text-accent-primary hover:text-accent-secondary transition-colors">
            Ver todos →
          </a>
        </div>

        {user.achievements.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-4">
            {user.achievements.slice(-3).map((achievement) => (
              <div 
                key={achievement.id}
                className="p-4 bg-dark-700/50 rounded-xl flex items-center gap-3"
              >
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <p className="font-medium text-white">{achievement.name}</p>
                  <p className="text-xs text-gray-400">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center py-8">
            ¡Completa actividades para desbloquear logros! 🏆
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

function StatsCard({ icon, label, value, color }: StatsCardProps) {
  const colors: Record<string, { bg: string; text: string }> = {
    indigo: { bg: 'bg-teal-500/20', text: 'text-teal-400' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
  };

  return (
    <div className="card">
      <div className={`w-12 h-12 rounded-xl ${colors[color]?.bg} ${colors[color]?.text} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}
