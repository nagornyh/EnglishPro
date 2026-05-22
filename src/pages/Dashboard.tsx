import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Flame, 
  Zap, 
  BookOpen, 
  Clock, 
  Target,
  ArrowRight,
  Play,
  Trophy,
  RotateCcw,
  Brain,
  TrendingUp
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { levels } from '../data/levels';
import db from '../services/database';
import adaptiveEngine from '../services/adaptiveEngine';
import type { DifficultySnapshot } from '../services/adaptiveEngine';
import { LevelBadge, StreakDisplay } from '../components/gamification';
import DailyChallengesPanel from '../components/DailyChallengesPanel';
import PersonalLeague from '../components/PersonalLeague';
import WordOfTheDay from '../components/WordOfTheDay';
import MiniExam, { isMiniExamDue } from '../components/MiniExam';

export default function Dashboard() {
  const { user } = useUser();
  const [todayXP, setTodayXP] = useState(0);
  const [snapshot, setSnapshot] = useState<DifficultySnapshot | null>(null);
  const [showMiniExam, setShowMiniExam] = useState(false);
  const [miniExamAvailable, setMiniExamAvailable] = useState(false);
  // useEffect must be called BEFORE any conditional returns (Rules of Hooks)
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    const run = async () => {
      const stats = await db.getDailyStats(user.id);
      if (!cancelled) {
        setTodayXP(stats?.xpEarned ?? 0);
        setSnapshot(adaptiveEngine.getSnapshot(user.id));
        setMiniExamAvailable(isMiniExamDue(user.id));
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [user?.id, user?.progress.totalXP, user?.progress.lessonsCompleted, user?.streakData.currentStreak]);

  if (!user) return null;

  const currentLevel = levels.find(l => l.id === user.progress.currentLevel) || levels[0];
  const progressPercent = currentLevel ? 
    Math.round((user.progress.currentTask / currentLevel.totalTasks) * 100) : 0;

  const dailyGoalProgress = Math.min(todayXP, user.settings.dailyGoal);
  const dailyGoalPercent = user.settings.dailyGoal > 0 ? Math.round((dailyGoalProgress / user.settings.dailyGoal) * 100) : 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 max-w-5xl mx-auto"
      >
        {/* Welcome Header */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="heading-2 text-white mb-2">
              ¡Hola, <span className="gradient-text">{user.name}</span>! 👋
            </h1>
            <p className="text-gray-400">Continúa aprendiendo y mejora tu inglés cada día</p>
          </div>
        
          <Link to="/practice" className="btn-primary inline-flex items-center gap-2 self-start">
            <Play className="w-5 h-5" />
            <span>Práctica Rápida</span>
          </Link>
        </motion.div>

      {/* User Level & Streak Row */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <LevelBadge totalXP={user.progress.totalXP} size="lg" showProgress />
        </div>
        <div className="card flex items-center">
          <StreakDisplay 
            currentStreak={user.streakData.currentStreak} 
            longestStreak={user.streakData.longestStreak}
            size="lg"
          />
        </div>
      </motion.div>

      {/* Word of the Day */}
      <motion.div variants={itemVariants}>
        <WordOfTheDay userId={user.id} />
      </motion.div>

      {/* Mini-Exam Banner */}
      {miniExamAvailable && (
        <motion.div variants={itemVariants}>
          <button
            type="button"
            onClick={() => setShowMiniExam(true)}
            className="w-full card bg-gradient-to-r from-teal-900/30 to-purple-900/30 border-teal-500/30 hover:border-teal-500/50 transition-all text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                <Brain className="w-6 h-6 text-teal-400" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">Mini-Examen Disponible</p>
                <p className="text-sm text-gray-400">Evalúa tu progreso con un examen rápido de 10 preguntas</p>
              </div>
              <ArrowRight className="w-5 h-5 text-teal-400" />
            </div>
          </button>
        </motion.div>
      )}

      {/* Adaptive Skills Overview */}
      {snapshot && snapshot.skills.some(s => s.totalAttempts > 0) && (
        <motion.div variants={itemVariants}>
          <h2 className="heading-4 text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent-primary" />
            Tu Perfil de Habilidades
          </h2>
          <div className="card space-y-3">
            {snapshot.skills
              .filter(s => s.totalAttempts > 0)
              .sort((a, b) => b.accuracy - a.accuracy)
              .map(skill => {
                const skillNames: Record<string, string> = {
                  speaking: 'Habla', listening: 'Escucha', reading: 'Lectura',
                  writing: 'Escritura', grammar: 'Gramática', pronunciation: 'Pronunciación',
                  vocabulary: 'Vocabulario',
                };
                const trendIcon = skill.trend === 'improving' ? '📈' : skill.trend === 'declining' ? '📉' : '➡️';
                return (
                  <div key={skill.skill} className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 w-28">{skillNames[skill.skill] ?? skill.skill}</span>
                    <div className="flex-1 h-2 bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          skill.accuracy >= 70 ? 'bg-green-500' : skill.accuracy >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${skill.accuracy}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-10 text-right">{skill.accuracy}%</span>
                    <span className="text-xs" title={skill.trend}>{trendIcon}</span>
                    <span className="text-xs text-gray-500 w-8">Nv.{skill.level}</span>
                  </div>
                );
              })}
            {snapshot.recommendedFocus.length > 0 && (
              <p className="text-xs text-gray-400 pt-2 border-t border-dark-700">
                💡 Enfócate en: {snapshot.recommendedFocus.map(s => {
                  const names: Record<string, string> = {
                    speaking: 'habla', listening: 'escucha', reading: 'lectura',
                    writing: 'escritura', grammar: 'gramática', pronunciation: 'pronunciación',
                    vocabulary: 'vocabulario',
                  };
                  return names[s] ?? s;
                }).join(', ')}
              </p>
            )}
          </div>
        </motion.div>
      )}

      {/* Daily Challenges - Personalized */}
      <motion.div variants={itemVariants}>
        <h2 className="heading-4 text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-accent-primary" />
          Desafíos del Día
        </h2>
        <DailyChallengesPanel />
      </motion.div>

      {/* Personal League */}
      <motion.div variants={itemVariants}>
        <h2 className="heading-4 text-white mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          Tu Liga Personal
        </h2>
        <PersonalLeague />
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          icon={<Flame className="w-6 h-6" />}
          label="Racha"
          value={`${user.streakData.currentStreak} días`}
          color="amber"
          animate
        />
        <StatsCard
          icon={<Zap className="w-6 h-6" />}
          label="XP Hoy"
          value={todayXP.toLocaleString()}
          color="indigo"
        />
        <StatsCard
          icon={<BookOpen className="w-6 h-6" />}
          label="Palabras"
          value={user.progress.wordsLearned.toString()}
          color="emerald"
        />
        <StatsCard
          icon={<Clock className="w-6 h-6" />}
          label="Tiempo"
          value={`${Math.floor(user.progress.timeSpentMinutes / 60)}h`}
          color="cyan"
        />
      </motion.div>

      {/* Current Level Progress */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${currentLevel.color}20` }}
            >
              {currentLevel.icon}
            </div>
            <div>
              <p className="text-sm text-gray-400">Nivel Actual</p>
              <h3 className="text-xl font-bold text-white">{currentLevel.name}</h3>
              <p className="text-sm text-gray-400">{currentLevel.cefrLevel} • {currentLevel.description}</p>
            </div>
          </div>
          <span 
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ 
              backgroundColor: `${currentLevel.color}20`,
              color: currentLevel.color
            }}
          >
            {progressPercent}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar mb-4">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Tarea {user.progress.currentTask} de {currentLevel.totalTasks}
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/change-level"
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Cambiar nivel</span>
            </Link>
            <Link 
              to={`/level/${currentLevel.id}`}
              className="flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors"
            >
              <span className="font-medium">Continuar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <h2 className="heading-4 text-white mb-4">Actividades Recomendadas</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          <QuickActionCard
            emoji="🎴"
            title="Flashcards"
            description="Repasa vocabulario con tarjetas"
            to="/practice/flashcards"
            color="#6366f1"
          />
          <QuickActionCard
            emoji="❓"
            title="Quiz"
            description="Pon a prueba tus conocimientos"
            to="/practice/quiz"
            color="#8b5cf6"
          />
          <QuickActionCard
            emoji="🔗"
            title="Emparejamiento"
            description="Conecta palabras con significados"
            to="/practice/match"
            color="#06b6d4"
          />
          <QuickActionCard
            emoji="💬"
            title="Conversación"
            description="Practica diálogos reales"
            to="/practice/roleplay"
            color="#10b981"
          />
          <QuickActionCard
            emoji="🎧"
            title="Listening"
            description="Mejora tu comprensión auditiva"
            to="/practice/listening"
            color="#f59e0b"
          />
        </div>
      </motion.div>

      {/* Levels Preview */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="heading-4 text-white">Todos los Niveles</h2>
          <Link to="/levels" className="text-accent-primary hover:text-accent-secondary transition-colors flex items-center gap-1">
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {levels.slice(0, 7).map((level) => {
            const isCurrentLevel = level.id === user.progress.currentLevel;
            const isCompleted = level.id < user.progress.currentLevel;
            const isLocked = level.id > user.progress.currentLevel;

            return (
              <Link
                key={level.id}
                to={isLocked ? '#' : `/level/${level.id}`}
                className={`
                  p-4 rounded-xl text-center transition-all
                  ${isCurrentLevel ? 'gradient-border ring-2 ring-accent-primary/50' : 'card'}
                  ${isLocked ? 'opacity-50 cursor-not-allowed' : 'card-hover'}
                `}
              >
                <div className="text-2xl mb-2">{level.icon}</div>
                <p className="font-bold text-white text-sm">{level.id}</p>
                <p className="text-xs text-gray-400">{level.cefrLevel}</p>
                {isCompleted && <span className="text-green-400 text-xs">✓</span>}
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Daily Goal */}
      <motion.div variants={itemVariants} className="card py-3 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-accent-primary/30 flex items-center justify-center">
              <Target className="w-4 h-4 text-accent-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">Meta Diaria</h3>
              <p className="text-xs text-gray-400">
                {dailyGoalProgress} / {user.settings.dailyGoal} XP
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold gradient-text">
              {dailyGoalPercent}%
            </p>
          </div>
        </div>
      </motion.div>
      </motion.div>

      {/* Mini-Exam Modal */}
      {showMiniExam && (
        <MiniExam
          userId={user.id}
          onClose={() => {
            setShowMiniExam(false);
            setMiniExamAvailable(false);
          }}
        />
      )}
    </>
  );
}

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: 'amber' | 'indigo' | 'emerald' | 'cyan';
  animate?: boolean;
}

function StatsCard({ icon, label, value, color, animate }: StatsCardProps) {
  const colors = {
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
    indigo: { bg: 'bg-teal-500/20', text: 'text-teal-400' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
  };

  return (
    <div className="card">
      <div className={`w-10 h-10 rounded-lg ${colors[color].bg} ${colors[color].text} flex items-center justify-center mb-3`}>
        {animate ? <span className="streak-fire">{icon}</span> : icon}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

interface QuickActionCardProps {
  emoji: string;
  title: string;
  description: string;
  to: string;
  color: string;
}

function QuickActionCard({ emoji, title, description, to, color }: QuickActionCardProps) {
  return (
    <Link
      to={to}
      className="card card-hover group"
    >
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}20` }}
      >
        {emoji}
      </div>
      <h3 className="font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </Link>
  );
}
