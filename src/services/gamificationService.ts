// Gamification Service - Advanced rewards, avatars, themes, and collectibles
// All data stored in localStorage

export interface Avatar {
  id: string;
  name: string;
  nameEs: string;
  emoji: string;
  description: string;
  descriptionEs: string;
  unlockCondition: UnlockCondition;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

export interface Theme {
  id: string;
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  unlockCondition: UnlockCondition;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

export interface Collectible {
  id: string;
  name: string;
  nameEs: string;
  emoji: string;
  category: 'badge' | 'trophy' | 'medal' | 'star' | 'gem' | 'special';
  description: string;
  descriptionEs: string;
  unlockCondition: UnlockCondition;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  xpBonus?: number; // Bonus XP while equipped
}

export interface UnlockCondition {
  type: 'xp' | 'streak' | 'words' | 'accuracy' | 'challenges' | 'level' | 'special';
  value: number;
  description: string;
  descriptionEs: string;
}

export interface UserGamificationData {
  unlockedAvatars: string[];
  unlockedThemes: string[];
  unlockedCollectibles: string[];
  currentAvatar: string;
  currentTheme: string;
  equippedCollectibles: string[]; // Max 3
  totalCollectibles: number;
  rarityCount: Record<string, number>;
}

// ==================== AVATARS ====================
export const AVATARS: Avatar[] = [
  {
    id: 'default',
    name: 'Student',
    nameEs: 'Estudiante',
    emoji: '👤',
    description: 'Your starting avatar',
    descriptionEs: 'Tu avatar inicial',
    unlockCondition: { type: 'xp', value: 0, description: 'Start learning', descriptionEs: 'Empieza a aprender' },
    rarity: 'common',
  },
  {
    id: 'bookworm',
    name: 'Bookworm',
    nameEs: 'Ratón de Biblioteca',
    emoji: '📚',
    description: 'Loves to read and learn',
    descriptionEs: 'Ama leer y aprender',
    unlockCondition: { type: 'words', value: 100, description: 'Learn 100 words', descriptionEs: 'Aprende 100 palabras' },
    rarity: 'common',
  },
  {
    id: 'owl',
    name: 'Wise Owl',
    nameEs: 'Búho Sabio',
    emoji: '🦉',
    description: 'Knowledge is power',
    descriptionEs: 'El conocimiento es poder',
    unlockCondition: { type: 'xp', value: 1000, description: 'Earn 1000 XP', descriptionEs: 'Gana 1000 XP' },
    rarity: 'uncommon',
  },
  {
    id: 'rocket',
    name: 'Rocket Learner',
    nameEs: 'Aprendiz Cohete',
    emoji: '🚀',
    description: 'Learning at lightning speed',
    descriptionEs: 'Aprendiendo a velocidad luz',
    unlockCondition: { type: 'streak', value: 7, description: '7-day streak', descriptionEs: 'Racha de 7 días' },
    rarity: 'uncommon',
  },
  {
    id: 'brain',
    name: 'Big Brain',
    nameEs: 'Gran Cerebro',
    emoji: '🧠',
    description: 'Your neurons are firing',
    descriptionEs: 'Tus neuronas están funcionando',
    unlockCondition: { type: 'accuracy', value: 90, description: '90% accuracy overall', descriptionEs: '90% de precisión total' },
    rarity: 'rare',
  },
  {
    id: 'crown',
    name: 'Word King',
    nameEs: 'Rey de Palabras',
    emoji: '👑',
    description: 'Master of vocabulary',
    descriptionEs: 'Maestro del vocabulario',
    unlockCondition: { type: 'words', value: 500, description: 'Learn 500 words', descriptionEs: 'Aprende 500 palabras' },
    rarity: 'rare',
  },
  {
    id: 'dragon',
    name: 'Grammar Dragon',
    nameEs: 'Dragón Gramatical',
    emoji: '🐉',
    description: 'Breathing fire on mistakes',
    descriptionEs: 'Escupe fuego a los errores',
    unlockCondition: { type: 'level', value: 3, description: 'Reach Level 3', descriptionEs: 'Alcanza el Nivel 3' },
    rarity: 'epic',
  },
  {
    id: 'wizard',
    name: 'English Wizard',
    nameEs: 'Mago del Inglés',
    emoji: '🧙',
    description: 'Master of linguistic arts',
    descriptionEs: 'Maestro de las artes lingüísticas',
    unlockCondition: { type: 'xp', value: 5000, description: 'Earn 5000 XP', descriptionEs: 'Gana 5000 XP' },
    rarity: 'epic',
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    nameEs: 'Fénix',
    emoji: '🔥',
    description: 'Rising from every mistake',
    descriptionEs: 'Renace de cada error',
    unlockCondition: { type: 'streak', value: 30, description: '30-day streak', descriptionEs: 'Racha de 30 días' },
    rarity: 'legendary',
  },
  {
    id: 'galaxy',
    name: 'Galaxy Brain',
    nameEs: 'Cerebro Galáctico',
    emoji: '🌌',
    description: 'Universal knowledge',
    descriptionEs: 'Conocimiento universal',
    unlockCondition: { type: 'xp', value: 10000, description: 'Earn 10000 XP', descriptionEs: 'Gana 10000 XP' },
    rarity: 'legendary',
  },
];

// ==================== THEMES ====================
export const THEMES: Theme[] = [
  {
    id: 'default',
    name: 'Midnight',
    nameEs: 'Medianoche',
    description: 'The classic dark theme',
    descriptionEs: 'El tema oscuro clásico',
    primaryColor: '#6366f1',
    secondaryColor: '#8b5cf6',
    accentColor: '#a855f7',
    gradientFrom: '#1e1b4b',
    gradientTo: '#312e81',
    unlockCondition: { type: 'xp', value: 0, description: 'Default theme', descriptionEs: 'Tema predeterminado' },
    rarity: 'common',
  },
  {
    id: 'ocean',
    name: 'Ocean Deep',
    nameEs: 'Océano Profundo',
    description: 'Calming blue tones',
    descriptionEs: 'Tonos azules calmantes',
    primaryColor: '#0ea5e9',
    secondaryColor: '#06b6d4',
    accentColor: '#22d3ee',
    gradientFrom: '#0c4a6e',
    gradientTo: '#155e75',
    unlockCondition: { type: 'words', value: 50, description: 'Learn 50 words', descriptionEs: 'Aprende 50 palabras' },
    rarity: 'common',
  },
  {
    id: 'forest',
    name: 'Forest',
    nameEs: 'Bosque',
    description: 'Nature-inspired greens',
    descriptionEs: 'Verdes inspirados en la naturaleza',
    primaryColor: '#22c55e',
    secondaryColor: '#16a34a',
    accentColor: '#4ade80',
    gradientFrom: '#14532d',
    gradientTo: '#166534',
    unlockCondition: { type: 'streak', value: 3, description: '3-day streak', descriptionEs: 'Racha de 3 días' },
    rarity: 'common',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    nameEs: 'Atardecer',
    description: 'Warm orange and red',
    descriptionEs: 'Naranja y rojo cálidos',
    primaryColor: '#f97316',
    secondaryColor: '#ef4444',
    accentColor: '#fbbf24',
    gradientFrom: '#7c2d12',
    gradientTo: '#991b1b',
    unlockCondition: { type: 'xp', value: 500, description: 'Earn 500 XP', descriptionEs: 'Gana 500 XP' },
    rarity: 'uncommon',
  },
  {
    id: 'sakura',
    name: 'Sakura',
    nameEs: 'Sakura',
    description: 'Cherry blossom pink',
    descriptionEs: 'Rosa flor de cerezo',
    primaryColor: '#ec4899',
    secondaryColor: '#f472b6',
    accentColor: '#fb7185',
    gradientFrom: '#831843',
    gradientTo: '#9d174d',
    unlockCondition: { type: 'accuracy', value: 80, description: '80% accuracy', descriptionEs: '80% de precisión' },
    rarity: 'uncommon',
  },
  {
    id: 'neon',
    name: 'Neon Nights',
    nameEs: 'Noches de Neón',
    description: 'Cyberpunk vibes',
    descriptionEs: 'Vibras cyberpunk',
    primaryColor: '#d946ef',
    secondaryColor: '#8b5cf6',
    accentColor: '#06ffc7',
    gradientFrom: '#3b0764',
    gradientTo: '#4c1d95',
    unlockCondition: { type: 'challenges', value: 5, description: 'Complete 5 challenges', descriptionEs: 'Completa 5 desafíos' },
    rarity: 'rare',
  },
  {
    id: 'gold',
    name: 'Golden Age',
    nameEs: 'Era Dorada',
    description: 'Luxurious gold accents',
    descriptionEs: 'Acentos dorados lujosos',
    primaryColor: '#fbbf24',
    secondaryColor: '#f59e0b',
    accentColor: '#fcd34d',
    gradientFrom: '#451a03',
    gradientTo: '#78350f',
    unlockCondition: { type: 'xp', value: 3000, description: 'Earn 3000 XP', descriptionEs: 'Gana 3000 XP' },
    rarity: 'rare',
  },
  {
    id: 'aurora',
    name: 'Aurora Borealis',
    nameEs: 'Aurora Boreal',
    description: 'Northern lights magic',
    descriptionEs: 'Magia de las luces del norte',
    primaryColor: '#10b981',
    secondaryColor: '#06b6d4',
    accentColor: '#8b5cf6',
    gradientFrom: '#042f2e',
    gradientTo: '#134e4a',
    unlockCondition: { type: 'streak', value: 14, description: '14-day streak', descriptionEs: 'Racha de 14 días' },
    rarity: 'epic',
  },
  {
    id: 'cosmos',
    name: 'Cosmic',
    nameEs: 'Cósmico',
    description: 'Stars and galaxies',
    descriptionEs: 'Estrellas y galaxias',
    primaryColor: '#a78bfa',
    secondaryColor: '#c084fc',
    accentColor: '#e879f9',
    gradientFrom: '#0f0f23',
    gradientTo: '#1e1b4b',
    unlockCondition: { type: 'level', value: 4, description: 'Reach Level 4', descriptionEs: 'Alcanza el Nivel 4' },
    rarity: 'epic',
  },
  {
    id: 'rainbow',
    name: 'Rainbow',
    nameEs: 'Arcoíris',
    description: 'All colors combined',
    descriptionEs: 'Todos los colores combinados',
    primaryColor: '#ef4444',
    secondaryColor: '#3b82f6',
    accentColor: '#22c55e',
    gradientFrom: '#1e1b4b',
    gradientTo: '#312e81',
    unlockCondition: { type: 'special', value: 1, description: 'Unlock all other themes', descriptionEs: 'Desbloquea todos los demás temas' },
    rarity: 'legendary',
  },
];

// ==================== COLLECTIBLES ====================
export const COLLECTIBLES: Collectible[] = [
  // Badges
  {
    id: 'first-steps',
    name: 'First Steps',
    nameEs: 'Primeros Pasos',
    emoji: '👣',
    category: 'badge',
    description: 'Complete your first lesson',
    descriptionEs: 'Completa tu primera lección',
    unlockCondition: { type: 'xp', value: 10, description: 'Complete first activity', descriptionEs: 'Completa primera actividad' },
    rarity: 'common',
  },
  {
    id: 'word-collector',
    name: 'Word Collector',
    nameEs: 'Coleccionista',
    emoji: '📖',
    category: 'badge',
    description: 'Started building vocabulary',
    descriptionEs: 'Empezaste a construir vocabulario',
    unlockCondition: { type: 'words', value: 25, description: 'Learn 25 words', descriptionEs: 'Aprende 25 palabras' },
    rarity: 'common',
  },
  {
    id: 'consistency',
    name: 'Consistent',
    nameEs: 'Consistente',
    emoji: '📅',
    category: 'badge',
    description: 'Practiced 5 days in a row',
    descriptionEs: 'Practicaste 5 días seguidos',
    unlockCondition: { type: 'streak', value: 5, description: '5-day streak', descriptionEs: 'Racha de 5 días' },
    rarity: 'uncommon',
  },
  // Trophies
  {
    id: 'vocabulary-master',
    name: 'Vocabulary Master',
    nameEs: 'Maestro del Vocabulario',
    emoji: '🏆',
    category: 'trophy',
    description: 'Learned 200 words',
    descriptionEs: 'Aprendiste 200 palabras',
    unlockCondition: { type: 'words', value: 200, description: 'Learn 200 words', descriptionEs: 'Aprende 200 palabras' },
    rarity: 'rare',
    xpBonus: 5,
  },
  {
    id: 'perfectionist',
    name: 'Perfectionist',
    nameEs: 'Perfeccionista',
    emoji: '🏆',
    category: 'trophy',
    description: 'Achieved 95% accuracy',
    descriptionEs: 'Alcanzaste 95% de precisión',
    unlockCondition: { type: 'accuracy', value: 95, description: '95% accuracy', descriptionEs: '95% de precisión' },
    rarity: 'epic',
    xpBonus: 10,
  },
  // Medals
  {
    id: 'bronze-learner',
    name: 'Bronze Learner',
    nameEs: 'Aprendiz Bronce',
    emoji: '🥉',
    category: 'medal',
    description: 'Reached 500 XP',
    descriptionEs: 'Alcanzaste 500 XP',
    unlockCondition: { type: 'xp', value: 500, description: 'Earn 500 XP', descriptionEs: 'Gana 500 XP' },
    rarity: 'uncommon',
  },
  {
    id: 'silver-scholar',
    name: 'Silver Scholar',
    nameEs: 'Erudito Plata',
    emoji: '🥈',
    category: 'medal',
    description: 'Reached 2000 XP',
    descriptionEs: 'Alcanzaste 2000 XP',
    unlockCondition: { type: 'xp', value: 2000, description: 'Earn 2000 XP', descriptionEs: 'Gana 2000 XP' },
    rarity: 'rare',
    xpBonus: 5,
  },
  {
    id: 'gold-genius',
    name: 'Gold Genius',
    nameEs: 'Genio Dorado',
    emoji: '🥇',
    category: 'medal',
    description: 'Reached 5000 XP',
    descriptionEs: 'Alcanzaste 5000 XP',
    unlockCondition: { type: 'xp', value: 5000, description: 'Earn 5000 XP', descriptionEs: 'Gana 5000 XP' },
    rarity: 'epic',
    xpBonus: 10,
  },
  // Stars
  {
    id: 'rising-star',
    name: 'Rising Star',
    nameEs: 'Estrella Emergente',
    emoji: '⭐',
    category: 'star',
    description: 'Completed Level 1',
    descriptionEs: 'Completaste el Nivel 1',
    unlockCondition: { type: 'level', value: 1, description: 'Complete Level 1', descriptionEs: 'Completa el Nivel 1' },
    rarity: 'uncommon',
  },
  {
    id: 'superstar',
    name: 'Superstar',
    nameEs: 'Superestrella',
    emoji: '🌟',
    category: 'star',
    description: 'Completed Level 2',
    descriptionEs: 'Completaste el Nivel 2',
    unlockCondition: { type: 'level', value: 2, description: 'Complete Level 2', descriptionEs: 'Completa el Nivel 2' },
    rarity: 'rare',
    xpBonus: 5,
  },
  // Gems
  {
    id: 'sapphire',
    name: 'Sapphire',
    nameEs: 'Zafiro',
    emoji: '💎',
    category: 'gem',
    description: '10-day streak',
    descriptionEs: 'Racha de 10 días',
    unlockCondition: { type: 'streak', value: 10, description: '10-day streak', descriptionEs: 'Racha de 10 días' },
    rarity: 'rare',
    xpBonus: 5,
  },
  {
    id: 'ruby',
    name: 'Ruby',
    nameEs: 'Rubí',
    emoji: '❤️‍🔥',
    category: 'gem',
    description: '20-day streak',
    descriptionEs: 'Racha de 20 días',
    unlockCondition: { type: 'streak', value: 20, description: '20-day streak', descriptionEs: 'Racha de 20 días' },
    rarity: 'epic',
    xpBonus: 10,
  },
  {
    id: 'diamond',
    name: 'Diamond',
    nameEs: 'Diamante',
    emoji: '💠',
    category: 'gem',
    description: '30-day streak',
    descriptionEs: 'Racha de 30 días',
    unlockCondition: { type: 'streak', value: 30, description: '30-day streak', descriptionEs: 'Racha de 30 días' },
    rarity: 'legendary',
    xpBonus: 15,
  },
  // Special
  {
    id: 'night-owl',
    name: 'Night Owl',
    nameEs: 'Búho Nocturno',
    emoji: '🌙',
    category: 'special',
    description: 'Study after midnight',
    descriptionEs: 'Estudia después de medianoche',
    unlockCondition: { type: 'special', value: 1, description: 'Study at night', descriptionEs: 'Estudia de noche' },
    rarity: 'rare',
  },
  {
    id: 'early-bird',
    name: 'Early Bird',
    nameEs: 'Madrugador',
    emoji: '🌅',
    category: 'special',
    description: 'Study before 7am',
    descriptionEs: 'Estudia antes de las 7am',
    unlockCondition: { type: 'special', value: 1, description: 'Study early', descriptionEs: 'Estudia temprano' },
    rarity: 'rare',
  },
  {
    id: 'marathon',
    name: 'Marathon',
    nameEs: 'Maratón',
    emoji: '🏃',
    category: 'special',
    description: '60+ minutes in one session',
    descriptionEs: '60+ minutos en una sesión',
    unlockCondition: { type: 'special', value: 60, description: '60 min session', descriptionEs: 'Sesión de 60 min' },
    rarity: 'epic',
    xpBonus: 10,
  },
];

const STORAGE_KEY = 'user_gamification_data';

class GamificationService {
  private data: UserGamificationData;

  constructor() {
    this.data = this.loadData();
  }

  private loadData(): UserGamificationData {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      unlockedAvatars: ['default'],
      unlockedThemes: ['default'],
      unlockedCollectibles: [],
      currentAvatar: 'default',
      currentTheme: 'default',
      equippedCollectibles: [],
      totalCollectibles: 0,
      rarityCount: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 0 },
    };
  }

  private saveData(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }

  // Check and unlock items based on user stats
  checkUnlocks(stats: {
    xp: number;
    streak: number;
    wordsLearned: number;
    accuracy: number;
    challengesCompleted: number;
    currentLevel: number;
  }): { avatars: Avatar[]; themes: Theme[]; collectibles: Collectible[] } {
    const newAvatars: Avatar[] = [];
    const newThemes: Theme[] = [];
    const newCollectibles: Collectible[] = [];

    // Use Sets for O(1) lookups and deduplication
    const unlockedAvatarSet = new Set(this.data.unlockedAvatars);
    const unlockedThemeSet = new Set(this.data.unlockedThemes);
    const unlockedCollectibleSet = new Set(this.data.unlockedCollectibles);

    // Check avatars
    for (const avatar of AVATARS) {
      if (!unlockedAvatarSet.has(avatar.id)) {
        if (this.meetsCondition(avatar.unlockCondition, stats)) {
          unlockedAvatarSet.add(avatar.id);
          this.data.unlockedAvatars.push(avatar.id);
          newAvatars.push(avatar);
        }
      }
    }

    // Check themes
    for (const theme of THEMES) {
      if (!unlockedThemeSet.has(theme.id)) {
        if (this.meetsCondition(theme.unlockCondition, stats)) {
          unlockedThemeSet.add(theme.id);
          this.data.unlockedThemes.push(theme.id);
          newThemes.push(theme);
        }
      }
    }

    // Check collectibles
    for (const collectible of COLLECTIBLES) {
      if (!unlockedCollectibleSet.has(collectible.id)) {
        if (this.meetsCondition(collectible.unlockCondition, stats)) {
          unlockedCollectibleSet.add(collectible.id);
          this.data.unlockedCollectibles.push(collectible.id);
          newCollectibles.push(collectible);
          this.data.totalCollectibles++;
          this.data.rarityCount[collectible.rarity]++;
        }
      }
    }

    if (newAvatars.length || newThemes.length || newCollectibles.length) {
      this.saveData();
    }

    return { avatars: newAvatars, themes: newThemes, collectibles: newCollectibles };
  }

  private meetsCondition(condition: UnlockCondition, stats: {
    xp: number;
    streak: number;
    wordsLearned: number;
    accuracy: number;
    challengesCompleted: number;
    currentLevel: number;
  }): boolean {
    switch (condition.type) {
      case 'xp':
        return stats.xp >= condition.value;
      case 'streak':
        return stats.streak >= condition.value;
      case 'words':
        return stats.wordsLearned >= condition.value;
      case 'accuracy':
        return stats.accuracy >= condition.value;
      case 'challenges':
        return stats.challengesCompleted >= condition.value;
      case 'level':
        return stats.currentLevel >= condition.value;
      case 'special':
        return false; // Special conditions are checked elsewhere
      default:
        return false;
    }
  }

  // Check special time-based unlocks
  checkTimeBasedUnlocks(): Collectible[] {
    const newCollectibles: Collectible[] = [];
    const hour = new Date().getHours();

    // Night owl: after midnight, before 5am
    if (hour >= 0 && hour < 5) {
      const nightOwl = COLLECTIBLES.find(c => c.id === 'night-owl');
      if (nightOwl && !this.data.unlockedCollectibles.includes('night-owl')) {
        this.data.unlockedCollectibles.push('night-owl');
        newCollectibles.push(nightOwl);
        this.data.totalCollectibles++;
        this.data.rarityCount[nightOwl.rarity]++;
      }
    }

    // Early bird: before 7am
    if (hour >= 5 && hour < 7) {
      const earlyBird = COLLECTIBLES.find(c => c.id === 'early-bird');
      if (earlyBird && !this.data.unlockedCollectibles.includes('early-bird')) {
        this.data.unlockedCollectibles.push('early-bird');
        newCollectibles.push(earlyBird);
        this.data.totalCollectibles++;
        this.data.rarityCount[earlyBird.rarity]++;
      }
    }

    if (newCollectibles.length) {
      this.saveData();
    }

    return newCollectibles;
  }

  // Check marathon session
  checkMarathonSession(sessionMinutes: number): Collectible | null {
    if (sessionMinutes >= 60 && !this.data.unlockedCollectibles.includes('marathon')) {
      const marathon = COLLECTIBLES.find(c => c.id === 'marathon');
      if (marathon) {
        this.data.unlockedCollectibles.push('marathon');
        this.data.totalCollectibles++;
        this.data.rarityCount[marathon.rarity]++;
        this.saveData();
        return marathon;
      }
    }
    return null;
  }

  // Getters
  getData(): UserGamificationData {
    return { ...this.data };
  }

  getUnlockedAvatars(): Avatar[] {
    return AVATARS.filter(a => this.data.unlockedAvatars.includes(a.id));
  }

  getLockedAvatars(): Avatar[] {
    return AVATARS.filter(a => !this.data.unlockedAvatars.includes(a.id));
  }

  getUnlockedThemes(): Theme[] {
    return THEMES.filter(t => this.data.unlockedThemes.includes(t.id));
  }

  getLockedThemes(): Theme[] {
    return THEMES.filter(t => !this.data.unlockedThemes.includes(t.id));
  }

  getUnlockedCollectibles(): Collectible[] {
    return COLLECTIBLES.filter(c => this.data.unlockedCollectibles.includes(c.id));
  }

  getLockedCollectibles(): Collectible[] {
    return COLLECTIBLES.filter(c => !this.data.unlockedCollectibles.includes(c.id));
  }

  getCurrentAvatar(): Avatar {
    return AVATARS.find(a => a.id === this.data.currentAvatar) || AVATARS[0];
  }

  getCurrentTheme(): Theme {
    return THEMES.find(t => t.id === this.data.currentTheme) || THEMES[0];
  }

  getEquippedCollectibles(): Collectible[] {
    return COLLECTIBLES.filter(c => this.data.equippedCollectibles.includes(c.id));
  }

  // Setters
  setAvatar(avatarId: string): boolean {
    if (this.data.unlockedAvatars.includes(avatarId)) {
      this.data.currentAvatar = avatarId;
      this.saveData();
      return true;
    }
    return false;
  }

  setTheme(themeId: string): boolean {
    if (this.data.unlockedThemes.includes(themeId)) {
      this.data.currentTheme = themeId;
      this.saveData();
      return true;
    }
    return false;
  }

  equipCollectible(collectibleId: string): boolean {
    if (
      this.data.unlockedCollectibles.includes(collectibleId) &&
      !this.data.equippedCollectibles.includes(collectibleId) &&
      this.data.equippedCollectibles.length < 3
    ) {
      this.data.equippedCollectibles.push(collectibleId);
      this.saveData();
      return true;
    }
    return false;
  }

  unequipCollectible(collectibleId: string): boolean {
    const index = this.data.equippedCollectibles.indexOf(collectibleId);
    if (index > -1) {
      this.data.equippedCollectibles.splice(index, 1);
      this.saveData();
      return true;
    }
    return false;
  }

  // Calculate XP bonus from equipped collectibles
  getXPBonus(): number {
    return this.getEquippedCollectibles().reduce((sum, c) => sum + (c.xpBonus || 0), 0);
  }

  // Stats
  getCollectionProgress(): {
    avatars: { unlocked: number; total: number };
    themes: { unlocked: number; total: number };
    collectibles: { unlocked: number; total: number };
    rarityProgress: Record<string, { unlocked: number; total: number }>;
  } {
    const rarityProgress: Record<string, { unlocked: number; total: number }> = {};
    const rarities = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
    
    for (const rarity of rarities) {
      const totalAvatars = AVATARS.filter(a => a.rarity === rarity).length;
      const totalThemes = THEMES.filter(t => t.rarity === rarity).length;
      const totalCollectibles = COLLECTIBLES.filter(c => c.rarity === rarity).length;
      
      const unlockedAvatars = AVATARS.filter(a => a.rarity === rarity && this.data.unlockedAvatars.includes(a.id)).length;
      const unlockedThemes = THEMES.filter(t => t.rarity === rarity && this.data.unlockedThemes.includes(t.id)).length;
      const unlockedCollectibles = COLLECTIBLES.filter(c => c.rarity === rarity && this.data.unlockedCollectibles.includes(c.id)).length;
      
      rarityProgress[rarity] = {
        unlocked: unlockedAvatars + unlockedThemes + unlockedCollectibles,
        total: totalAvatars + totalThemes + totalCollectibles,
      };
    }

    return {
      avatars: { unlocked: this.data.unlockedAvatars.length, total: AVATARS.length },
      themes: { unlocked: this.data.unlockedThemes.length, total: THEMES.length },
      collectibles: { unlocked: this.data.unlockedCollectibles.length, total: COLLECTIBLES.length },
      rarityProgress,
    };
  }

  // Export data for backup
  exportData(): string {
    return JSON.stringify(this.data);
  }

  // Import data from backup
  importData(jsonData: string): boolean {
    try {
      const parsed = JSON.parse(jsonData);
      this.data = { ...this.loadData(), ...parsed };
      this.saveData();
      return true;
    } catch {
      return false;
    }
  }
}

export const gamificationService = new GamificationService();
export default gamificationService;
