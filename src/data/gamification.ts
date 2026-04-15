import type { AchievementDefinition, UserLevel, DailyChallenge, GamificationConfig } from '../types';

// ============================================
// USER LEVELS CONFIGURATION
// ============================================

export const userLevels: UserLevel[] = [
  { level: 1, name: 'Novice', title: 'Novice', titleEs: 'Novato', descriptionEs: 'Empezando tu viaje', minXP: 0, maxXP: 100, badge: '🌱', color: '#9ca3af' },
  { level: 2, name: 'Beginner', title: 'Beginner', titleEs: 'Principiante', descriptionEs: 'Dando tus primeros pasos', minXP: 100, maxXP: 300, badge: '🌿', color: '#84cc16' },
  { level: 3, name: 'Learner', title: 'Learner', titleEs: 'Aprendiz', descriptionEs: 'Creciendo con cada lección', minXP: 300, maxXP: 600, badge: '🌳', color: '#22c55e' },
  { level: 4, name: 'Student', title: 'Student', titleEs: 'Estudiante', descriptionEs: 'Comprometido con el aprendizaje', minXP: 600, maxXP: 1000, badge: '📚', color: '#14b8a6' },
  { level: 5, name: 'Apprentice', title: 'Apprentice', titleEs: 'Aprendiz Avanzado', descriptionEs: 'Dominando las bases', minXP: 1000, maxXP: 1500, badge: '📖', color: '#06b6d4' },
  { level: 6, name: 'Scholar', title: 'Scholar', titleEs: 'Erudito', descriptionEs: 'Conocimiento en expansión', minXP: 1500, maxXP: 2200, badge: '🎓', color: '#3b82f6' },
  { level: 7, name: 'Adept', title: 'Adept', titleEs: 'Adepto', descriptionEs: 'Habilidades pulidas', minXP: 2200, maxXP: 3000, badge: '⭐', color: '#6366f1' },
  { level: 8, name: 'Expert', title: 'Expert', titleEs: 'Experto', descriptionEs: 'Dominio demostrado', minXP: 3000, maxXP: 4000, badge: '🌟', color: '#8b5cf6' },
  { level: 9, name: 'Master', title: 'Master', titleEs: 'Maestro', descriptionEs: 'Excelencia alcanzada', minXP: 4000, maxXP: 5500, badge: '💫', color: '#a855f7' },
  { level: 10, name: 'Grandmaster', title: 'Grandmaster', titleEs: 'Gran Maestro', descriptionEs: 'Sabiduría excepcional', minXP: 5500, maxXP: 7500, badge: '✨', color: '#d946ef' },
  { level: 11, name: 'Champion', title: 'Champion', titleEs: 'Campeón', descriptionEs: 'Entre los mejores', minXP: 7500, maxXP: 10000, badge: '🏆', color: '#ec4899' },
  { level: 12, name: 'Legend', title: 'Legend', titleEs: 'Leyenda', descriptionEs: 'Tu nombre será recordado', minXP: 10000, maxXP: 15000, badge: '👑', color: '#f43f5e' },
  { level: 13, name: 'Immortal', title: 'Immortal', titleEs: 'Inmortal', descriptionEs: 'Más allá de los límites', minXP: 15000, maxXP: 25000, badge: '💎', color: '#ef4444' },
  { level: 14, name: 'Transcendent', title: 'Transcendent', titleEs: 'Trascendente', descriptionEs: 'Alcanzando lo imposible', minXP: 25000, maxXP: 50000, badge: '🔮', color: '#f97316' },
  { level: 15, name: 'Enlightened', title: 'Enlightened', titleEs: 'Iluminado', descriptionEs: 'Maestría absoluta', minXP: 50000, maxXP: Infinity, badge: '🌌', color: '#eab308' },
];

export function getUserLevel(totalXP: number): UserLevel {
  return userLevels.find(l => totalXP >= l.minXP && totalXP < (l.maxXP ?? Infinity)) || userLevels[userLevels.length - 1];
}

export function getXPToNextLevel(totalXP: number): number {
  const level = getUserLevel(totalXP);
  if (!level.maxXP || level.maxXP === Infinity) return 0;
  return level.maxXP - totalXP;
}

// ============================================
// GAMIFICATION CONFIG
// ============================================

export const gamificationConfig: GamificationConfig = {
  xpMultipliers: {
    streak: 0.1, // +10% per 7-day streak milestone
    accuracy: 0.25, // +25% for 90%+ accuracy
    speed: 0.15, // +15% for fast completion
    firstTry: 0.2, // +20% for perfect first attempt
  },
  levelThresholds: userLevels.map(l => l.minXP),
  dailyChallenges: [],
};

// ============================================
// DAILY CHALLENGES
// ============================================

type DailyChallengeTemplate = Omit<DailyChallenge, 'id' | 'progress' | 'claimed'>;

export const dailyChallengeTemplates: DailyChallengeTemplate[] = [
  // XP Challenges
  { type: 'xp', target: 50, xpReward: 25, description: 'Earn 50 XP today', descriptionEs: 'Gana 50 XP hoy' },
  { type: 'xp', target: 100, xpReward: 50, description: 'Earn 100 XP today', descriptionEs: 'Gana 100 XP hoy' },
  { type: 'xp', target: 200, xpReward: 100, description: 'Earn 200 XP today', descriptionEs: 'Gana 200 XP hoy' },
  
  // Lesson Challenges
  { type: 'lessons', target: 1, xpReward: 20, description: 'Complete 1 lesson', descriptionEs: 'Completa 1 lección' },
  { type: 'lessons', target: 3, xpReward: 50, description: 'Complete 3 lessons', descriptionEs: 'Completa 3 lecciones' },
  { type: 'lessons', target: 5, xpReward: 100, description: 'Complete 5 lessons', descriptionEs: 'Completa 5 lecciones' },
  
  // Words Challenges
  { type: 'words', target: 10, xpReward: 15, description: 'Review 10 words', descriptionEs: 'Repasa 10 palabras' },
  { type: 'words', target: 25, xpReward: 35, description: 'Review 25 words', descriptionEs: 'Repasa 25 palabras' },
  { type: 'words', target: 50, xpReward: 75, description: 'Review 50 words', descriptionEs: 'Repasa 50 palabras' },
  
  // Accuracy Challenges
  { type: 'accuracy', target: 80, xpReward: 30, description: 'Maintain 80% accuracy', descriptionEs: 'Mantén 80% de precisión' },
  { type: 'accuracy', target: 90, xpReward: 60, description: 'Achieve 90% accuracy', descriptionEs: 'Alcanza 90% de precisión' },
  { type: 'accuracy', target: 100, xpReward: 100, description: 'Perfect accuracy session!', descriptionEs: '¡Sesión con precisión perfecta!' },
  
  // Time Challenges
  { type: 'time', target: 15, xpReward: 25, description: 'Study for 15 minutes', descriptionEs: 'Estudia por 15 minutos' },
  { type: 'time', target: 30, xpReward: 50, description: 'Study for 30 minutes', descriptionEs: 'Estudia por 30 minutos' },
  { type: 'time', target: 60, xpReward: 100, description: 'Study for 1 hour', descriptionEs: 'Estudia por 1 hora' },
];

export function generateDailyChallenges(count: number = 3): DailyChallenge[] {
  const today = new Date().toISOString().split('T')[0];
  const shuffled = [...dailyChallengeTemplates].sort(() => Math.random() - 0.5);
  
  // Pick challenges of different types
  const types = new Set<string>();
  const selected: DailyChallenge[] = [];
  
  for (const template of shuffled) {
    if (!types.has(template.type) && selected.length < count) {
      types.add(template.type);
      selected.push({
        ...template,
        id: `${today}_${template.type}_${template.target}`,
        progress: 0,
        claimed: false,
      });
    }
  }
  
  return selected;
}

// ============================================
// ACHIEVEMENTS DEFINITIONS
// ============================================

export const achievementDefinitions: AchievementDefinition[] = [
  // Streak Achievements
  {
    id: 'streak_3',
    name: 'Getting Started',
    nameEs: 'Comenzando',
    description: 'Maintain a 3-day streak',
    descriptionEs: 'Mantén una racha de 3 días',
    icon: '🔥',
    category: 'streak',
    requirement: { type: 'streak', value: 3, comparison: 'gte' },
    xpReward: 50,
    rarity: 'common',
  },
  {
    id: 'streak_7',
    name: 'Week Warrior',
    nameEs: 'Guerrero Semanal',
    description: 'Maintain a 7-day streak',
    descriptionEs: 'Mantén una racha de 7 días',
    icon: '🔥',
    category: 'streak',
    requirement: { type: 'streak', value: 7, comparison: 'gte' },
    xpReward: 100,
    rarity: 'uncommon',
  },
  {
    id: 'streak_14',
    name: 'Two Week Champion',
    nameEs: 'Campeón de Dos Semanas',
    description: 'Maintain a 14-day streak',
    descriptionEs: 'Mantén una racha de 14 días',
    icon: '🔥',
    category: 'streak',
    requirement: { type: 'streak', value: 14, comparison: 'gte' },
    xpReward: 200,
    rarity: 'rare',
  },
  {
    id: 'streak_30',
    name: 'Monthly Master',
    nameEs: 'Maestro Mensual',
    description: 'Maintain a 30-day streak',
    descriptionEs: 'Mantén una racha de 30 días',
    icon: '💪',
    category: 'streak',
    requirement: { type: 'streak', value: 30, comparison: 'gte' },
    xpReward: 500,
    rarity: 'epic',
  },
  {
    id: 'streak_100',
    name: 'Centurion',
    nameEs: 'Centurión',
    description: 'Maintain a 100-day streak',
    descriptionEs: 'Mantén una racha de 100 días',
    icon: '🏆',
    category: 'streak',
    requirement: { type: 'streak', value: 100, comparison: 'gte' },
    xpReward: 1000,
    rarity: 'legendary',
  },
  {
    id: 'streak_365',
    name: 'Year of Dedication',
    nameEs: 'Año de Dedicación',
    description: 'Maintain a 365-day streak',
    descriptionEs: 'Mantén una racha de 365 días',
    icon: '👑',
    category: 'streak',
    requirement: { type: 'streak', value: 365, comparison: 'gte' },
    xpReward: 5000,
    rarity: 'legendary',
  },

  // XP Achievements
  {
    id: 'xp_100',
    name: 'First Steps',
    nameEs: 'Primeros Pasos',
    description: 'Earn 100 XP',
    descriptionEs: 'Gana 100 XP',
    icon: '⚡',
    category: 'xp',
    requirement: { type: 'xp', value: 100, comparison: 'gte' },
    xpReward: 25,
    rarity: 'common',
  },
  {
    id: 'xp_500',
    name: 'Rising Star',
    nameEs: 'Estrella en Ascenso',
    description: 'Earn 500 XP',
    descriptionEs: 'Gana 500 XP',
    icon: '⭐',
    category: 'xp',
    requirement: { type: 'xp', value: 500, comparison: 'gte' },
    xpReward: 75,
    rarity: 'common',
  },
  {
    id: 'xp_1000',
    name: 'XP Hunter',
    nameEs: 'Cazador de XP',
    description: 'Earn 1,000 XP',
    descriptionEs: 'Gana 1,000 XP',
    icon: '🌟',
    category: 'xp',
    requirement: { type: 'xp', value: 1000, comparison: 'gte' },
    xpReward: 150,
    rarity: 'uncommon',
  },
  {
    id: 'xp_5000',
    name: 'XP Master',
    nameEs: 'Maestro de XP',
    description: 'Earn 5,000 XP',
    descriptionEs: 'Gana 5,000 XP',
    icon: '💫',
    category: 'xp',
    requirement: { type: 'xp', value: 5000, comparison: 'gte' },
    xpReward: 500,
    rarity: 'rare',
  },
  {
    id: 'xp_10000',
    name: 'XP Legend',
    nameEs: 'Leyenda de XP',
    description: 'Earn 10,000 XP',
    descriptionEs: 'Gana 10,000 XP',
    icon: '✨',
    category: 'xp',
    requirement: { type: 'xp', value: 10000, comparison: 'gte' },
    xpReward: 1000,
    rarity: 'epic',
  },

  // Vocabulary Achievements
  {
    id: 'words_25',
    name: 'Vocabulary Starter',
    nameEs: 'Iniciando Vocabulario',
    description: 'Learn 25 words',
    descriptionEs: 'Aprende 25 palabras',
    icon: '📝',
    category: 'vocabulary',
    requirement: { type: 'words', value: 25, comparison: 'gte' },
    xpReward: 50,
    rarity: 'common',
  },
  {
    id: 'words_100',
    name: 'Word Collector',
    nameEs: 'Coleccionista de Palabras',
    description: 'Learn 100 words',
    descriptionEs: 'Aprende 100 palabras',
    icon: '📖',
    category: 'vocabulary',
    requirement: { type: 'words', value: 100, comparison: 'gte' },
    xpReward: 150,
    rarity: 'uncommon',
  },
  {
    id: 'words_250',
    name: 'Vocabulary Builder',
    nameEs: 'Constructor de Vocabulario',
    description: 'Learn 250 words',
    descriptionEs: 'Aprende 250 palabras',
    icon: '📚',
    category: 'vocabulary',
    requirement: { type: 'words', value: 250, comparison: 'gte' },
    xpReward: 300,
    rarity: 'rare',
  },
  {
    id: 'words_500',
    name: 'Lexicon Master',
    nameEs: 'Maestro del Léxico',
    description: 'Learn 500 words',
    descriptionEs: 'Aprende 500 palabras',
    icon: '🎯',
    category: 'vocabulary',
    requirement: { type: 'words', value: 500, comparison: 'gte' },
    xpReward: 500,
    rarity: 'epic',
  },
  {
    id: 'words_1000',
    name: 'Walking Dictionary',
    nameEs: 'Diccionario Ambulante',
    description: 'Learn 1,000 words',
    descriptionEs: 'Aprende 1,000 palabras',
    icon: '📕',
    category: 'vocabulary',
    requirement: { type: 'words', value: 1000, comparison: 'gte' },
    xpReward: 1000,
    rarity: 'legendary',
  },

  // Lesson Achievements
  {
    id: 'lessons_5',
    name: 'Getting into It',
    nameEs: 'Entrando en Ritmo',
    description: 'Complete 5 lessons',
    descriptionEs: 'Completa 5 lecciones',
    icon: '📋',
    category: 'lessons',
    requirement: { type: 'lessons', value: 5, comparison: 'gte' },
    xpReward: 50,
    rarity: 'common',
  },
  {
    id: 'lessons_25',
    name: 'Dedicated Student',
    nameEs: 'Estudiante Dedicado',
    description: 'Complete 25 lessons',
    descriptionEs: 'Completa 25 lecciones',
    icon: '🎒',
    category: 'lessons',
    requirement: { type: 'lessons', value: 25, comparison: 'gte' },
    xpReward: 200,
    rarity: 'uncommon',
  },
  {
    id: 'lessons_50',
    name: 'Halfway Hero',
    nameEs: 'Héroe de Medio Camino',
    description: 'Complete 50 lessons',
    descriptionEs: 'Completa 50 lecciones',
    icon: '🏅',
    category: 'lessons',
    requirement: { type: 'lessons', value: 50, comparison: 'gte' },
    xpReward: 400,
    rarity: 'rare',
  },
  {
    id: 'lessons_100',
    name: 'Century Learner',
    nameEs: 'Aprendiz Centenario',
    description: 'Complete 100 lessons',
    descriptionEs: 'Completa 100 lecciones',
    icon: '🎖️',
    category: 'lessons',
    requirement: { type: 'lessons', value: 100, comparison: 'gte' },
    xpReward: 750,
    rarity: 'epic',
  },

  // Accuracy Achievements
  {
    id: 'accuracy_perfect_session',
    name: 'Perfect Round',
    nameEs: 'Ronda Perfecta',
    description: 'Complete a session with 100% accuracy',
    descriptionEs: 'Completa una sesión con 100% de precisión',
    icon: '🎯',
    category: 'accuracy',
    requirement: { type: 'accuracy', value: 100, comparison: 'eq' },
    xpReward: 50,
    rarity: 'uncommon',
  },
  {
    id: 'accuracy_90_week',
    name: 'Consistent Excellence',
    nameEs: 'Excelencia Consistente',
    description: 'Maintain 90% accuracy for a week',
    descriptionEs: 'Mantén 90% de precisión por una semana',
    icon: '🏹',
    category: 'accuracy',
    requirement: { type: 'accuracy', value: 90, comparison: 'consecutive' },
    xpReward: 200,
    rarity: 'rare',
  },

  // Special Achievements
  {
    id: 'special_first_lesson',
    name: 'First Step',
    nameEs: 'Primer Paso',
    description: 'Complete your first lesson',
    descriptionEs: 'Completa tu primera lección',
    icon: '🎉',
    category: 'special',
    requirement: { type: 'lessons', value: 1, comparison: 'gte' },
    xpReward: 25,
    rarity: 'common',
  },
  {
    id: 'special_level_complete',
    name: 'Level Cleared',
    nameEs: 'Nivel Completado',
    description: 'Complete all tasks in a level',
    descriptionEs: 'Completa todas las tareas de un nivel',
    icon: '🌟',
    category: 'special',
    requirement: { type: 'level', value: 1, comparison: 'gte' },
    xpReward: 200,
    rarity: 'uncommon',
  },
  {
    id: 'special_early_bird',
    name: 'Early Bird',
    nameEs: 'Madrugador',
    description: 'Study before 7 AM',
    descriptionEs: 'Estudia antes de las 7 AM',
    icon: '🌅',
    category: 'special',
    requirement: { type: 'special', value: 7, comparison: 'eq' },
    xpReward: 50,
    rarity: 'uncommon',
  },
  {
    id: 'special_night_owl',
    name: 'Night Owl',
    nameEs: 'Búho Nocturno',
    description: 'Study after 11 PM',
    descriptionEs: 'Estudia después de las 11 PM',
    icon: '🦉',
    category: 'special',
    requirement: { type: 'special', value: 23, comparison: 'eq' },
    xpReward: 50,
    rarity: 'uncommon',
  },
  {
    id: 'special_weekend_warrior',
    name: 'Weekend Warrior',
    nameEs: 'Guerrero de Fin de Semana',
    description: 'Study on both Saturday and Sunday',
    descriptionEs: 'Estudia tanto sábado como domingo',
    icon: '🗓️',
    category: 'special',
    requirement: { type: 'special', value: 2, comparison: 'eq' },
    xpReward: 75,
    rarity: 'uncommon',
  },
];

export function checkAchievements(
  user: { 
    progress: { totalXP: number; wordsLearned: number; lessonsCompleted: number; accuracy: number };
    streakData: { currentStreak: number; longestStreak: number };
    achievements: { id: string }[];
  }
): AchievementDefinition[] {
  const newAchievements: AchievementDefinition[] = [];
  const earnedIds = new Set(user.achievements.map(a => a.id));

  for (const def of achievementDefinitions) {
    if (earnedIds.has(def.id)) continue;

    let earned = false;
    const { type, value, comparison } = def.requirement;

    switch (type) {
      case 'streak':
        if (comparison === 'gte' && user.streakData.currentStreak >= value) earned = true;
        break;
      case 'xp':
        if (comparison === 'gte' && user.progress.totalXP >= value) earned = true;
        break;
      case 'words':
        if (comparison === 'gte' && user.progress.wordsLearned >= value) earned = true;
        break;
      case 'lessons':
        if (comparison === 'gte' && user.progress.lessonsCompleted >= value) earned = true;
        break;
      case 'accuracy':
        if (comparison === 'eq' && user.progress.accuracy === value) earned = true;
        if (comparison === 'gte' && user.progress.accuracy >= value) earned = true;
        break;
    }

    if (earned) {
      newAchievements.push(def);
    }
  }

  return newAchievements;
}

// ============================================
// XP CALCULATION HELPERS
// ============================================

export function calculateBonusXP(
  baseXP: number,
  options: {
    streak?: number;
    accuracy?: number;
    timeSpentSeconds?: number;
    expectedTimeSeconds?: number;
    isFirstTry?: boolean;
  }
): { totalXP: number; bonuses: { type: string; amount: number }[] } {
  const bonuses: { type: string; amount: number }[] = [];
  let totalXP = baseXP;

  // Streak bonus (every 7 days)
  if (options.streak && options.streak >= 7) {
    const streakMultiplier = Math.floor(options.streak / 7) * gamificationConfig.xpMultipliers.streak;
    const streakBonus = Math.round(baseXP * Math.min(streakMultiplier, 0.5)); // Cap at 50%
    if (streakBonus > 0) {
      bonuses.push({ type: 'streak', amount: streakBonus });
      totalXP += streakBonus;
    }
  }

  // Accuracy bonus (90%+)
  if (options.accuracy && options.accuracy >= 90) {
    const accuracyBonus = Math.round(baseXP * gamificationConfig.xpMultipliers.accuracy);
    bonuses.push({ type: 'accuracy', amount: accuracyBonus });
    totalXP += accuracyBonus;
  }

  // Speed bonus (completed in less than expected time)
  if (options.timeSpentSeconds && options.expectedTimeSeconds) {
    if (options.timeSpentSeconds < options.expectedTimeSeconds * 0.7) {
      const speedBonus = Math.round(baseXP * gamificationConfig.xpMultipliers.speed);
      bonuses.push({ type: 'speed', amount: speedBonus });
      totalXP += speedBonus;
    }
  }

  // First try bonus
  if (options.isFirstTry) {
    const firstTryBonus = Math.round(baseXP * gamificationConfig.xpMultipliers.firstTry);
    bonuses.push({ type: 'firstTry', amount: firstTryBonus });
    totalXP += firstTryBonus;
  }

  return { totalXP, bonuses };
}

export default {
  userLevels,
  getUserLevel,
  getXPToNextLevel,
  gamificationConfig,
  dailyChallengeTemplates,
  generateDailyChallenges,
  achievementDefinitions,
  checkAchievements,
  calculateBonusXP,
};
