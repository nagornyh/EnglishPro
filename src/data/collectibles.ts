// ============================================
// COLLECTIBLE DEFINITIONS
// ============================================

export interface Collectible {
  id: string;
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  icon: string;
  category: 'badge' | 'title' | 'theme' | 'avatar-frame';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  unlockCondition: {
    type: 'xp' | 'streak' | 'lessons' | 'words' | 'accuracy' | 'level' | 'achievement' | 'special';
    value: number;
    achievementId?: string;
  };
}

export interface UserTitle {
  id: string;
  name: string;
  nameEs: string;
  color: string;
  unlockCondition: {
    type: 'xp' | 'streak' | 'lessons' | 'level' | 'special';
    value: number;
  };
}

export interface ThemeUnlock {
  id: string;
  name: string;
  nameEs: string;
  preview: {
    primary: string;
    secondary: string;
    accent: string;
  };
  unlockCondition: {
    type: 'xp' | 'streak' | 'level' | 'special';
    value: number;
  };
}

// ============================================
// BADGES
// ============================================

export const badges: Collectible[] = [
  // XP Badges
  {
    id: 'badge_xp_100',
    name: 'First Steps',
    nameEs: 'Primeros Pasos',
    description: 'Earned 100 XP',
    descriptionEs: 'Ganaste 100 XP',
    icon: '⭐',
    category: 'badge',
    rarity: 'common',
    unlockCondition: { type: 'xp', value: 100 },
  },
  {
    id: 'badge_xp_500',
    name: 'Rising Star',
    nameEs: 'Estrella en Ascenso',
    description: 'Earned 500 XP',
    descriptionEs: 'Ganaste 500 XP',
    icon: '🌟',
    category: 'badge',
    rarity: 'common',
    unlockCondition: { type: 'xp', value: 500 },
  },
  {
    id: 'badge_xp_1000',
    name: 'XP Hunter',
    nameEs: 'Cazador de XP',
    description: 'Earned 1,000 XP',
    descriptionEs: 'Ganaste 1,000 XP',
    icon: '💫',
    category: 'badge',
    rarity: 'uncommon',
    unlockCondition: { type: 'xp', value: 1000 },
  },
  {
    id: 'badge_xp_5000',
    name: 'XP Master',
    nameEs: 'Maestro de XP',
    description: 'Earned 5,000 XP',
    descriptionEs: 'Ganaste 5,000 XP',
    icon: '✨',
    category: 'badge',
    rarity: 'rare',
    unlockCondition: { type: 'xp', value: 5000 },
  },
  {
    id: 'badge_xp_10000',
    name: 'XP Legend',
    nameEs: 'Leyenda de XP',
    description: 'Earned 10,000 XP',
    descriptionEs: 'Ganaste 10,000 XP',
    icon: '👑',
    category: 'badge',
    rarity: 'epic',
    unlockCondition: { type: 'xp', value: 10000 },
  },
  {
    id: 'badge_xp_25000',
    name: 'XP God',
    nameEs: 'Dios de XP',
    description: 'Earned 25,000 XP',
    descriptionEs: 'Ganaste 25,000 XP',
    icon: '🔱',
    category: 'badge',
    rarity: 'legendary',
    unlockCondition: { type: 'xp', value: 25000 },
  },

  // Streak Badges
  {
    id: 'badge_streak_7',
    name: 'Week Warrior',
    nameEs: 'Guerrero Semanal',
    description: '7-day streak',
    descriptionEs: 'Racha de 7 días',
    icon: '🔥',
    category: 'badge',
    rarity: 'common',
    unlockCondition: { type: 'streak', value: 7 },
  },
  {
    id: 'badge_streak_30',
    name: 'Monthly Champion',
    nameEs: 'Campeón Mensual',
    description: '30-day streak',
    descriptionEs: 'Racha de 30 días',
    icon: '💪',
    category: 'badge',
    rarity: 'uncommon',
    unlockCondition: { type: 'streak', value: 30 },
  },
  {
    id: 'badge_streak_100',
    name: 'Centurion',
    nameEs: 'Centurión',
    description: '100-day streak',
    descriptionEs: 'Racha de 100 días',
    icon: '🏆',
    category: 'badge',
    rarity: 'epic',
    unlockCondition: { type: 'streak', value: 100 },
  },
  {
    id: 'badge_streak_365',
    name: 'Year Master',
    nameEs: 'Maestro del Año',
    description: '365-day streak',
    descriptionEs: 'Racha de 365 días',
    icon: '🌌',
    category: 'badge',
    rarity: 'legendary',
    unlockCondition: { type: 'streak', value: 365 },
  },

  // Vocabulary Badges
  {
    id: 'badge_words_100',
    name: 'Vocabulary Builder',
    nameEs: 'Constructor de Vocabulario',
    description: 'Learned 100 words',
    descriptionEs: 'Aprendiste 100 palabras',
    icon: '📚',
    category: 'badge',
    rarity: 'common',
    unlockCondition: { type: 'words', value: 100 },
  },
  {
    id: 'badge_words_500',
    name: 'Word Collector',
    nameEs: 'Coleccionista de Palabras',
    description: 'Learned 500 words',
    descriptionEs: 'Aprendiste 500 palabras',
    icon: '📖',
    category: 'badge',
    rarity: 'rare',
    unlockCondition: { type: 'words', value: 500 },
  },
  {
    id: 'badge_words_1000',
    name: 'Lexicon Master',
    nameEs: 'Maestro del Léxico',
    description: 'Learned 1,000 words',
    descriptionEs: 'Aprendiste 1,000 palabras',
    icon: '🎓',
    category: 'badge',
    rarity: 'epic',
    unlockCondition: { type: 'words', value: 1000 },
  },

  // Level Badges
  {
    id: 'badge_level_5',
    name: 'Intermediate',
    nameEs: 'Intermedio',
    description: 'Reached level 5',
    descriptionEs: 'Alcanzaste nivel 5',
    icon: '🎯',
    category: 'badge',
    rarity: 'uncommon',
    unlockCondition: { type: 'level', value: 5 },
  },
  {
    id: 'badge_level_10',
    name: 'Advanced',
    nameEs: 'Avanzado',
    description: 'Reached level 10',
    descriptionEs: 'Alcanzaste nivel 10',
    icon: '🚀',
    category: 'badge',
    rarity: 'rare',
    unlockCondition: { type: 'level', value: 10 },
  },
  {
    id: 'badge_level_13',
    name: 'Ultimate Learner',
    nameEs: 'Aprendiz Definitivo',
    description: 'Completed all levels',
    descriptionEs: 'Completaste todos los niveles',
    icon: '🏅',
    category: 'badge',
    rarity: 'legendary',
    unlockCondition: { type: 'level', value: 13 },
  },

  // Accuracy Badges
  {
    id: 'badge_accuracy_90',
    name: 'Sharp Mind',
    nameEs: 'Mente Aguda',
    description: 'Achieved 90% accuracy in a session',
    descriptionEs: 'Lograste 90% de precisión en una sesión',
    icon: '🎯',
    category: 'badge',
    rarity: 'uncommon',
    unlockCondition: { type: 'accuracy', value: 90 },
  },
  {
    id: 'badge_accuracy_100',
    name: 'Perfectionist',
    nameEs: 'Perfeccionista',
    description: 'Achieved 100% accuracy in a session',
    descriptionEs: 'Lograste 100% de precisión en una sesión',
    icon: '💯',
    category: 'badge',
    rarity: 'rare',
    unlockCondition: { type: 'accuracy', value: 100 },
  },

  // Lessons Badges
  {
    id: 'badge_lessons_50',
    name: 'Dedicated Student',
    nameEs: 'Estudiante Dedicado',
    description: 'Completed 50 lessons',
    descriptionEs: 'Completaste 50 lecciones',
    icon: '📝',
    category: 'badge',
    rarity: 'uncommon',
    unlockCondition: { type: 'lessons', value: 50 },
  },
  {
    id: 'badge_lessons_100',
    name: 'Scholar',
    nameEs: 'Erudito',
    description: 'Completed 100 lessons',
    descriptionEs: 'Completaste 100 lecciones',
    icon: '🎒',
    category: 'badge',
    rarity: 'rare',
    unlockCondition: { type: 'lessons', value: 100 },
  },
];

// ============================================
// TITLES
// ============================================

export const titles: UserTitle[] = [
  { id: 'title_beginner', name: 'Beginner', nameEs: 'Principiante', color: '#9ca3af', unlockCondition: { type: 'xp', value: 0 } },
  { id: 'title_learner', name: 'Learner', nameEs: 'Aprendiz', color: '#84cc16', unlockCondition: { type: 'xp', value: 100 } },
  { id: 'title_student', name: 'Student', nameEs: 'Estudiante', color: '#22c55e', unlockCondition: { type: 'xp', value: 500 } },
  { id: 'title_scholar', name: 'Scholar', nameEs: 'Erudito', color: '#06b6d4', unlockCondition: { type: 'xp', value: 1500 } },
  { id: 'title_expert', name: 'Expert', nameEs: 'Experto', color: '#6366f1', unlockCondition: { type: 'xp', value: 3000 } },
  { id: 'title_master', name: 'Master', nameEs: 'Maestro', color: '#8b5cf6', unlockCondition: { type: 'xp', value: 5000 } },
  { id: 'title_grandmaster', name: 'Grandmaster', nameEs: 'Gran Maestro', color: '#a855f7', unlockCondition: { type: 'xp', value: 10000 } },
  { id: 'title_legend', name: 'Legend', nameEs: 'Leyenda', color: '#f43f5e', unlockCondition: { type: 'xp', value: 20000 } },
  { id: 'title_immortal', name: 'Immortal', nameEs: 'Inmortal', color: '#eab308', unlockCondition: { type: 'xp', value: 50000 } },
  
  // Special titles
  { id: 'title_streak_master', name: 'Streak Master', nameEs: 'Maestro de Rachas', color: '#f97316', unlockCondition: { type: 'streak', value: 30 } },
  { id: 'title_perfectionist', name: 'Perfectionist', nameEs: 'Perfeccionista', color: '#ec4899', unlockCondition: { type: 'special', value: 10 } }, // 10 perfect sessions
  { id: 'title_early_bird', name: 'Early Bird', nameEs: 'Madrugador', color: '#fbbf24', unlockCondition: { type: 'special', value: 1 } },
  { id: 'title_night_owl', name: 'Night Owl', nameEs: 'Búho Nocturno', color: '#3b82f6', unlockCondition: { type: 'special', value: 2 } },
];

// ============================================
// THEME UNLOCKS
// ============================================

export const themeUnlocks: ThemeUnlock[] = [
  {
    id: 'theme_default',
    name: 'Dark',
    nameEs: 'Oscuro',
    preview: { primary: '#0a0a0f', secondary: '#12121a', accent: '#6366f1' },
    unlockCondition: { type: 'xp', value: 0 },
  },
  {
    id: 'theme_ocean',
    name: 'Ocean',
    nameEs: 'Océano',
    preview: { primary: '#0a192f', secondary: '#112240', accent: '#64ffda' },
    unlockCondition: { type: 'xp', value: 500 },
  },
  {
    id: 'theme_forest',
    name: 'Forest',
    nameEs: 'Bosque',
    preview: { primary: '#0d1f0d', secondary: '#1a2f1a', accent: '#4ade80' },
    unlockCondition: { type: 'xp', value: 1500 },
  },
  {
    id: 'theme_sunset',
    name: 'Sunset',
    nameEs: 'Atardecer',
    preview: { primary: '#1f0f0f', secondary: '#2f1a1a', accent: '#f97316' },
    unlockCondition: { type: 'xp', value: 3000 },
  },
  {
    id: 'theme_aurora',
    name: 'Aurora',
    nameEs: 'Aurora',
    preview: { primary: '#0f0f1f', secondary: '#1a1a2f', accent: '#a78bfa' },
    unlockCondition: { type: 'streak', value: 30 },
  },
  {
    id: 'theme_golden',
    name: 'Golden',
    nameEs: 'Dorado',
    preview: { primary: '#1a1500', secondary: '#2f2600', accent: '#fbbf24' },
    unlockCondition: { type: 'level', value: 10 },
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getUnlockedBadges(user: {
  progress: { totalXP: number; wordsLearned: number; lessonsCompleted: number; accuracy: number; currentLevel: number };
  streakData: { currentStreak: number; longestStreak: number };
}): Collectible[] {
  return badges.filter(badge => {
    const { type, value } = badge.unlockCondition;
    switch (type) {
      case 'xp':
        return user.progress.totalXP >= value;
      case 'streak':
        return user.streakData.longestStreak >= value;
      case 'words':
        return user.progress.wordsLearned >= value;
      case 'lessons':
        return user.progress.lessonsCompleted >= value;
      case 'accuracy':
        return user.progress.accuracy >= value;
      case 'level':
        return user.progress.currentLevel >= value;
      default:
        return false;
    }
  });
}

export function getUnlockedTitles(user: {
  progress: { totalXP: number; currentLevel: number };
  streakData: { longestStreak: number };
}): UserTitle[] {
  return titles.filter(title => {
    const { type, value } = title.unlockCondition;
    switch (type) {
      case 'xp':
        return user.progress.totalXP >= value;
      case 'streak':
        return user.streakData.longestStreak >= value;
      case 'level':
        return user.progress.currentLevel >= value;
      default:
        return false;
    }
  });
}

export function getUnlockedThemes(user: {
  progress: { totalXP: number; currentLevel: number };
  streakData: { longestStreak: number };
}): ThemeUnlock[] {
  return themeUnlocks.filter(theme => {
    const { type, value } = theme.unlockCondition;
    switch (type) {
      case 'xp':
        return user.progress.totalXP >= value;
      case 'streak':
        return user.streakData.longestStreak >= value;
      case 'level':
        return user.progress.currentLevel >= value;
      default:
        return false;
    }
  });
}

export function getNextUnlockable(user: {
  progress: { totalXP: number; wordsLearned: number; lessonsCompleted: number; currentLevel: number };
  streakData: { longestStreak: number };
}): { type: 'badge' | 'title' | 'theme'; item: any; progressPercent: number; remaining: number } | null {
  // Find closest unlockable
  const allItems = [
    ...badges.map(b => ({ ...b, itemType: 'badge' as const })),
    ...titles.map(t => ({ ...t, itemType: 'title' as const })),
    ...themeUnlocks.map(th => ({ ...th, itemType: 'theme' as const })),
  ];

  let closest: any = null;
  let closestProgress = 0;
  let closestRemaining = Infinity;

  for (const item of allItems) {
    const { type, value } = item.unlockCondition;
    let current = 0;
    
    switch (type) {
      case 'xp':
        current = user.progress.totalXP;
        break;
      case 'streak':
        current = user.streakData.longestStreak;
        break;
      case 'words':
        current = user.progress.wordsLearned;
        break;
      case 'lessons':
        current = user.progress.lessonsCompleted;
        break;
      case 'level':
        current = user.progress.currentLevel;
        break;
    }

    if (current < value) {
      const remaining = value - current;
      const progress = (current / value) * 100;
      
      if (remaining < closestRemaining) {
        closestRemaining = remaining;
        closestProgress = progress;
        closest = item;
      }
    }
  }

  if (closest) {
    return {
      type: closest.itemType,
      item: closest,
      progressPercent: closestProgress,
      remaining: closestRemaining,
    };
  }

  return null;
}

export const rarityColors = {
  common: 'from-gray-500 to-gray-600',
  uncommon: 'from-green-500 to-green-600',
  rare: 'from-blue-500 to-blue-600',
  epic: 'from-purple-500 to-purple-600',
  legendary: 'from-yellow-500 to-orange-500',
};

export default {
  badges,
  titles,
  themeUnlocks,
  getUnlockedBadges,
  getUnlockedTitles,
  getUnlockedThemes,
  getNextUnlockable,
  rarityColors,
};
