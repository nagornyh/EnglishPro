import { motion } from 'framer-motion';
import { Trophy, Lock, Star, Flame, BookOpen, Zap, Target, Sparkles } from 'lucide-react';
import { useUser } from '../context/UserContext';
import CollectiblesGallery from '../components/CollectiblesGallery';

const allAchievements = [
  // Streak achievements
  { id: 'streak_3', name: 'Primer Impulso', description: '3 días de racha', icon: '🔥', category: 'streak', requirement: 3 },
  { id: 'streak_7', name: 'Semana Perfecta', description: '7 días de racha', icon: '⚡', category: 'streak', requirement: 7 },
  { id: 'streak_30', name: 'Mes Imparable', description: '30 días de racha', icon: '🏆', category: 'streak', requirement: 30 },
  { id: 'streak_100', name: 'Centenario', description: '100 días de racha', icon: '👑', category: 'streak', requirement: 100 },
  { id: 'streak_365', name: 'Año Completo', description: '365 días de racha', icon: '🌟', category: 'streak', requirement: 365 },
  
  // XP achievements
  { id: 'xp_100', name: 'Primeros Pasos', description: 'Obtén 100 XP', icon: '⭐', category: 'xp', requirement: 100 },
  { id: 'xp_500', name: 'Aprendiz', description: 'Obtén 500 XP', icon: '🌟', category: 'xp', requirement: 500 },
  { id: 'xp_1000', name: 'Estudiante Dedicado', description: 'Obtén 1,000 XP', icon: '💫', category: 'xp', requirement: 1000 },
  { id: 'xp_5000', name: 'Experto', description: 'Obtén 5,000 XP', icon: '✨', category: 'xp', requirement: 5000 },
  { id: 'xp_10000', name: 'Maestro', description: 'Obtén 10,000 XP', icon: '🎯', category: 'xp', requirement: 10000 },
  { id: 'xp_25000', name: 'Leyenda', description: 'Obtén 25,000 XP', icon: '👑', category: 'xp', requirement: 25000 },
  
  // Lesson achievements
  { id: 'lessons_1', name: 'Primera Lección', description: 'Completa tu primera lección', icon: '📚', category: 'lessons', requirement: 1 },
  { id: 'lessons_10', name: 'Diez y Contando', description: 'Completa 10 lecciones', icon: '📖', category: 'lessons', requirement: 10 },
  { id: 'lessons_50', name: 'Medio Centenar', description: 'Completa 50 lecciones', icon: '📕', category: 'lessons', requirement: 50 },
  { id: 'lessons_100', name: 'Centenar de Lecciones', description: 'Completa 100 lecciones', icon: '📗', category: 'lessons', requirement: 100 },
  { id: 'lessons_130', name: 'Completista', description: 'Completa las 130 lecciones', icon: '📘', category: 'lessons', requirement: 130 },
  
  // Level achievements
  { id: 'level_3', name: 'Elemental', description: 'Alcanza el nivel A2', icon: '🎒', category: 'level', requirement: 3 },
  { id: 'level_5', name: 'Intermedio', description: 'Alcanza el nivel B1', icon: '🎓', category: 'level', requirement: 5 },
  { id: 'level_8', name: 'Intermedio Alto', description: 'Alcanza el nivel B2', icon: '🎖️', category: 'level', requirement: 8 },
  { id: 'level_11', name: 'Avanzado', description: 'Alcanza el nivel C1', icon: '🏆', category: 'level', requirement: 11 },
  { id: 'level_13', name: 'Graduado', description: 'Completa todos los niveles (C2)', icon: '🏅', category: 'level', requirement: 13 },
  
  // Vocabulary achievements
  { id: 'words_50', name: 'Vocabulario Básico', description: 'Aprende 50 palabras', icon: '📝', category: 'vocabulary', requirement: 50 },
  { id: 'words_200', name: 'Vocabulario Amplio', description: 'Aprende 200 palabras', icon: '📋', category: 'vocabulary', requirement: 200 },
  { id: 'words_500', name: 'Diccionario Andante', description: 'Aprende 500 palabras', icon: '📓', category: 'vocabulary', requirement: 500 },
  { id: 'words_1000', name: 'Políglota', description: 'Aprende 1,000 palabras', icon: '📖', category: 'vocabulary', requirement: 1000 },
  { id: 'words_2000', name: 'Enciclopedia Viviente', description: 'Aprende 2,000 palabras', icon: '📚', category: 'vocabulary', requirement: 2000 },
  
  // Special achievements
  { id: 'first_perfect', name: 'Perfección', description: '100% en una actividad', icon: '💯', category: 'special', requirement: 1 },
  { id: 'night_owl', name: 'Búho Nocturno', description: 'Estudia después de medianoche', icon: '🦉', category: 'special', requirement: 1 },
  { id: 'early_bird', name: 'Madrugador', description: 'Estudia antes de las 6 AM', icon: '🐦', category: 'special', requirement: 1 },
  { id: 'weekend_warrior', name: 'Guerrero del Fin de Semana', description: 'Estudia sábado y domingo', icon: '⚔️', category: 'special', requirement: 1 },
  { id: 'speed_demon', name: 'Velocista', description: 'Completa una actividad en menos de 1 minuto', icon: '🚀', category: 'special', requirement: 1 },
  
  // Skills achievements (new)
  { id: 'speaker_10', name: 'Primeras Palabras', description: 'Completa 10 ejercicios de pronunciación', icon: '🎤', category: 'skills', requirement: 10 },
  { id: 'speaker_50', name: 'Orador', description: 'Completa 50 ejercicios de pronunciación', icon: '🗣️', category: 'skills', requirement: 50 },
  { id: 'writer_10', name: 'Escritor Novato', description: 'Completa 10 ejercicios de escritura', icon: '✏️', category: 'skills', requirement: 10 },
  { id: 'writer_50', name: 'Autor', description: 'Completa 50 ejercicios de escritura', icon: '✍️', category: 'skills', requirement: 50 },
  { id: 'grammar_master', name: 'Maestro de Gramática', description: 'Completa todos los quizzes con 90%+', icon: '📐', category: 'skills', requirement: 1 },
  { id: 'cultural_explorer', name: 'Explorador Cultural', description: 'Lee 20 notas culturales', icon: '🌍', category: 'skills', requirement: 20 },
  { id: 'dialogue_pro', name: 'Conversador', description: 'Completa 25 diálogos interactivos', icon: '💬', category: 'skills', requirement: 25 },
];

const categories = [
  { id: 'all', label: 'Todos', icon: Trophy },
  { id: 'streak', label: 'Racha', icon: Flame },
  { id: 'xp', label: 'XP', icon: Zap },
  { id: 'lessons', label: 'Lecciones', icon: BookOpen },
  { id: 'level', label: 'Nivel', icon: Target },
  { id: 'vocabulary', label: 'Vocabulario', icon: BookOpen },
  { id: 'skills', label: 'Habilidades', icon: Star },
  { id: 'special', label: 'Especiales', icon: Star },
];

export default function Achievements() {
  const { user } = useUser();

  if (!user) return null;

  const isAchievementUnlocked = (achievement: typeof allAchievements[0]): boolean => {
    switch (achievement.category) {
      case 'streak':
        return user.streakData.longestStreak >= achievement.requirement;
      case 'xp':
        return user.progress.totalXP >= achievement.requirement;
      case 'lessons':
        return user.progress.lessonsCompleted >= achievement.requirement;
      case 'level':
        return user.progress.currentLevel >= achievement.requirement;
      case 'vocabulary':
        return user.progress.wordsLearned >= achievement.requirement;
      case 'special':
        return user.achievements.some(a => a.id === achievement.id);
      default:
        return false;
    }
  };

  const getProgress = (achievement: typeof allAchievements[0]): number => {
    let current = 0;
    switch (achievement.category) {
      case 'streak':
        current = user.streakData.longestStreak;
        break;
      case 'xp':
        current = user.progress.totalXP;
        break;
      case 'lessons':
        current = user.progress.lessonsCompleted;
        break;
      case 'level':
        current = user.progress.currentLevel;
        break;
      case 'vocabulary':
        current = user.progress.wordsLearned;
        break;
    }
    return Math.min(100, Math.round((current / achievement.requirement) * 100));
  };

  const unlockedCount = allAchievements.filter(isAchievementUnlocked).length;

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
      className="space-y-8 max-w-5xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="heading-2 text-white mb-2">Logros y Coleccionables</h1>
        <p className="text-gray-400">
          Has desbloqueado {unlockedCount} de {allAchievements.length} logros
        </p>
      </motion.div>

      {/* Collectibles Gallery */}
      <motion.div variants={itemVariants}>
        <h2 className="heading-4 text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          Tu Colección
        </h2>
        <CollectiblesGallery />
      </motion.div>

      {/* Progress Overview */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-amber-400" />
            <div>
              <p className="text-xl font-bold text-white">Progreso de Logros</p>
              <p className="text-sm text-gray-400">{unlockedCount} / {allAchievements.length}</p>
            </div>
          </div>
          <p className="text-3xl font-bold gradient-text">
            {Math.round((unlockedCount / allAchievements.length) * 100)}%
          </p>
        </div>
        <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(unlockedCount / allAchievements.length) * 100}%` }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Category Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.slice(1).map((category) => {
          const categoryAchievements = allAchievements.filter(a => a.category === category.id);
          const unlockedInCategory = categoryAchievements.filter(isAchievementUnlocked).length;
          const Icon = category.icon;

          return (
            <div key={category.id} className="card text-center">
              <Icon className="w-6 h-6 mx-auto mb-2 text-accent-primary" />
              <p className="text-lg font-bold text-white">{unlockedInCategory}/{categoryAchievements.length}</p>
              <p className="text-xs text-gray-400">{category.label}</p>
            </div>
          );
        })}
      </motion.div>

      {/* Achievements Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="heading-4 text-white mb-4">Todos los Logros</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allAchievements.map((achievement) => {
            const unlocked = isAchievementUnlocked(achievement);
            const progress = getProgress(achievement);

            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className={`
                  card transition-all
                  ${unlocked 
                    ? 'bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-500/30' 
                    : 'opacity-70'
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center text-2xl
                    ${unlocked ? 'bg-amber-500/20' : 'bg-dark-700'}
                  `}>
                    {unlocked ? achievement.icon : <Lock className="w-6 h-6 text-gray-500" />}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-semibold ${unlocked ? 'text-white' : 'text-gray-400'}`}>
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                    
                    {!unlocked && (
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Progreso</span>
                          <span className="text-gray-400">{progress}%</span>
                        </div>
                        <div className="progress-bar !h-1.5">
                          <div 
                            className="progress-bar-fill"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {unlocked && (
                      <p className="text-xs text-amber-400 mt-2">✓ Desbloqueado</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
