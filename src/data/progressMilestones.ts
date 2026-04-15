// Progress Milestones and Achievement System
// Meaningful achievements that celebrate learning progress

export interface Milestone {
  id: string;
  type: 'streak' | 'mastery' | 'volume' | 'improvement' | 'exploration' | 'special';
  title: string;
  description: string;
  icon: string;
  requirement: number;
  category?: string;
}

export interface UserMilestone {
  milestoneId: string;
  achievedAt: number;
  value: number; // The value that triggered achievement
}

// All possible milestones
export const MILESTONES: Milestone[] = [
  // Streak milestones
  {
    id: 'streak-3',
    type: 'streak',
    title: '¡Tres días seguidos!',
    description: 'Practicaste 3 días consecutivos',
    icon: '🔥',
    requirement: 3,
  },
  {
    id: 'streak-7',
    type: 'streak',
    title: 'Una semana completa',
    description: 'Practicaste 7 días consecutivos',
    icon: '⭐',
    requirement: 7,
  },
  {
    id: 'streak-14',
    type: 'streak',
    title: 'Dos semanas de dedicación',
    description: 'Practicaste 14 días consecutivos',
    icon: '🌟',
    requirement: 14,
  },
  {
    id: 'streak-30',
    type: 'streak',
    title: 'Un mes de constancia',
    description: 'Practicaste 30 días consecutivos',
    icon: '🏆',
    requirement: 30,
  },
  {
    id: 'streak-100',
    type: 'streak',
    title: '¡100 días!',
    description: 'Practicaste 100 días consecutivos',
    icon: '💎',
    requirement: 100,
  },

  // Volume milestones (exercises completed)
  {
    id: 'exercises-50',
    type: 'volume',
    title: 'Calentando motores',
    description: 'Completaste 50 ejercicios',
    icon: '📝',
    requirement: 50,
  },
  {
    id: 'exercises-100',
    type: 'volume',
    title: 'Cien ejercicios',
    description: 'Completaste 100 ejercicios',
    icon: '💯',
    requirement: 100,
  },
  {
    id: 'exercises-500',
    type: 'volume',
    title: 'Medio millar',
    description: 'Completaste 500 ejercicios',
    icon: '🎯',
    requirement: 500,
  },
  {
    id: 'exercises-1000',
    type: 'volume',
    title: 'Mil ejercicios',
    description: '¡Un hito importante!',
    icon: '🎊',
    requirement: 1000,
  },

  // Mastery milestones (words mastered)
  {
    id: 'words-25',
    type: 'mastery',
    title: 'Vocabulario inicial',
    description: 'Dominaste 25 palabras',
    icon: '📚',
    requirement: 25,
  },
  {
    id: 'words-50',
    type: 'mastery',
    title: 'Vocabulario básico',
    description: 'Dominaste 50 palabras',
    icon: '📖',
    requirement: 50,
  },
  {
    id: 'words-100',
    type: 'mastery',
    title: 'Vocabulario sólido',
    description: 'Dominaste 100 palabras',
    icon: '🧠',
    requirement: 100,
  },
  {
    id: 'words-250',
    type: 'mastery',
    title: 'Vocabulario avanzado',
    description: 'Dominaste 250 palabras',
    icon: '🎓',
    requirement: 250,
  },
  {
    id: 'words-500',
    type: 'mastery',
    title: 'Experto en vocabulario',
    description: 'Dominaste 500 palabras',
    icon: '👑',
    requirement: 500,
  },

  // Improvement milestones
  {
    id: 'trouble-5',
    type: 'improvement',
    title: 'Superando obstáculos',
    description: 'Dominaste 5 palabras problemáticas',
    icon: '💪',
    requirement: 5,
  },
  {
    id: 'trouble-20',
    type: 'improvement',
    title: 'Venciendo dificultades',
    description: 'Dominaste 20 palabras problemáticas',
    icon: '🦸',
    requirement: 20,
  },
  {
    id: 'accuracy-90',
    type: 'improvement',
    title: 'Alta precisión',
    description: 'Mantuviste 90%+ de precisión en una sesión',
    icon: '🎯',
    requirement: 90,
  },
  {
    id: 'perfect-session',
    type: 'improvement',
    title: 'Sesión perfecta',
    description: 'Completaste una sesión sin errores (10+ ejercicios)',
    icon: '✨',
    requirement: 100,
  },

  // Exploration milestones
  {
    id: 'levels-3',
    type: 'exploration',
    title: 'Explorador',
    description: 'Probaste 3 niveles diferentes',
    icon: '🗺️',
    requirement: 3,
  },
  {
    id: 'activities-5',
    type: 'exploration',
    title: 'Variedad',
    description: 'Usaste 5 tipos de ejercicios diferentes',
    icon: '🎨',
    requirement: 5,
  },
  {
    id: 'scenarios-3',
    type: 'exploration',
    title: 'Actor',
    description: 'Completaste 3 escenarios de conversación',
    icon: '🎭',
    requirement: 3,
  },

  // Special milestones
  {
    id: 'first-day',
    type: 'special',
    title: '¡Bienvenido!',
    description: 'Completaste tu primer día de práctica',
    icon: '🌱',
    requirement: 1,
  },
  {
    id: 'night-owl',
    type: 'special',
    title: 'Búho nocturno',
    description: 'Practicaste después de las 10pm',
    icon: '🦉',
    requirement: 1,
  },
  {
    id: 'early-bird',
    type: 'special',
    title: 'Madrugador',
    description: 'Practicaste antes de las 7am',
    icon: '🐦',
    requirement: 1,
  },
  {
    id: 'comeback',
    type: 'special',
    title: 'Regreso triunfal',
    description: 'Volviste después de 7+ días sin practicar',
    icon: '🔄',
    requirement: 1,
  },
  {
    id: 'weekend-warrior',
    type: 'special',
    title: 'Guerrero de fin de semana',
    description: 'Practicaste sábado y domingo',
    icon: '⚔️',
    requirement: 1,
  },
];

const MILESTONES_KEY = 'user_milestones';

class MilestonesService {
  private userMilestones: UserMilestone[] = [];

  constructor() {
    this.loadMilestones();
  }

  private loadMilestones(): void {
    const saved = localStorage.getItem(MILESTONES_KEY);
    if (saved) {
      this.userMilestones = JSON.parse(saved);
    }
  }

  private saveMilestones(): void {
    localStorage.setItem(MILESTONES_KEY, JSON.stringify(this.userMilestones));
  }

  // Check if milestone is achieved
  isAchieved(milestoneId: string): boolean {
    return this.userMilestones.some(m => m.milestoneId === milestoneId);
  }

  // Record a milestone achievement
  recordMilestone(milestoneId: string, value: number): Milestone | null {
    if (this.isAchieved(milestoneId)) {
      return null;
    }

    const milestone = MILESTONES.find(m => m.id === milestoneId);
    if (!milestone) return null;

    this.userMilestones.push({
      milestoneId,
      achievedAt: Date.now(),
      value,
    });
    this.saveMilestones();

    return milestone;
  }

  // Check and award milestones based on current stats
  checkMilestones(stats: {
    streak?: number;
    exercisesCompleted?: number;
    wordsMastered?: number;
    troubleWordsMastered?: number;
    accuracy?: number;
    levelsExplored?: number;
    activitiesUsed?: number;
    scenariosCompleted?: number;
    hour?: number;
    dayOfWeek?: number;
    daysSinceLastPractice?: number;
  }): Milestone[] {
    const newMilestones: Milestone[] = [];

    // Check streak milestones
    if (stats.streak !== undefined) {
      const streakMilestones = MILESTONES.filter(m => 
        m.type === 'streak' && stats.streak! >= m.requirement
      );
      streakMilestones.forEach(m => {
        const achieved = this.recordMilestone(m.id, stats.streak!);
        if (achieved) newMilestones.push(achieved);
      });
    }

    // Check volume milestones
    if (stats.exercisesCompleted !== undefined) {
      const volumeMilestones = MILESTONES.filter(m => 
        m.type === 'volume' && stats.exercisesCompleted! >= m.requirement
      );
      volumeMilestones.forEach(m => {
        const achieved = this.recordMilestone(m.id, stats.exercisesCompleted!);
        if (achieved) newMilestones.push(achieved);
      });
    }

    // Check mastery milestones
    if (stats.wordsMastered !== undefined) {
      const masteryMilestones = MILESTONES.filter(m => 
        m.type === 'mastery' && stats.wordsMastered! >= m.requirement
      );
      masteryMilestones.forEach(m => {
        const achieved = this.recordMilestone(m.id, stats.wordsMastered!);
        if (achieved) newMilestones.push(achieved);
      });
    }

    // Check improvement milestones
    if (stats.troubleWordsMastered !== undefined) {
      const improvementMilestones = MILESTONES.filter(m => 
        m.id.startsWith('trouble-') && stats.troubleWordsMastered! >= m.requirement
      );
      improvementMilestones.forEach(m => {
        const achieved = this.recordMilestone(m.id, stats.troubleWordsMastered!);
        if (achieved) newMilestones.push(achieved);
      });
    }

    if (stats.accuracy !== undefined && stats.accuracy >= 90) {
      const achieved = this.recordMilestone('accuracy-90', stats.accuracy);
      if (achieved) newMilestones.push(achieved);
    }

    if (stats.accuracy !== undefined && stats.accuracy === 100) {
      const achieved = this.recordMilestone('perfect-session', stats.accuracy);
      if (achieved) newMilestones.push(achieved);
    }

    // Check exploration milestones
    if (stats.levelsExplored !== undefined) {
      const achieved = this.recordMilestone('levels-3', stats.levelsExplored);
      if (achieved) newMilestones.push(achieved);
    }

    if (stats.activitiesUsed !== undefined) {
      const achieved = this.recordMilestone('activities-5', stats.activitiesUsed);
      if (achieved) newMilestones.push(achieved);
    }

    if (stats.scenariosCompleted !== undefined) {
      const achieved = this.recordMilestone('scenarios-3', stats.scenariosCompleted);
      if (achieved) newMilestones.push(achieved);
    }

    // Check special milestones
    if (stats.hour !== undefined) {
      if (stats.hour >= 22 || stats.hour < 5) {
        const achieved = this.recordMilestone('night-owl', stats.hour);
        if (achieved) newMilestones.push(achieved);
      }
      if (stats.hour >= 5 && stats.hour < 7) {
        const achieved = this.recordMilestone('early-bird', stats.hour);
        if (achieved) newMilestones.push(achieved);
      }
    }

    if (stats.daysSinceLastPractice !== undefined && stats.daysSinceLastPractice >= 7) {
      const achieved = this.recordMilestone('comeback', stats.daysSinceLastPractice);
      if (achieved) newMilestones.push(achieved);
    }

    return newMilestones;
  }

  // Get all achieved milestones
  getAchievedMilestones(): (Milestone & { achievedAt: number })[] {
    return this.userMilestones
      .map(um => {
        const milestone = MILESTONES.find(m => m.id === um.milestoneId);
        if (!milestone) return null;
        return { ...milestone, achievedAt: um.achievedAt };
      })
      .filter((m): m is Milestone & { achievedAt: number } => m !== null)
      .sort((a, b) => b.achievedAt - a.achievedAt);
  }

  // Get next milestones to achieve
  getNextMilestones(currentStats: {
    streak: number;
    exercisesCompleted: number;
    wordsMastered: number;
  }): (Milestone & { progress: number })[] {
    const unachieved = MILESTONES.filter(m => !this.isAchieved(m.id));
    
    return unachieved
      .map(m => {
        let progress = 0;
        switch (m.type) {
          case 'streak':
            progress = (currentStats.streak / m.requirement) * 100;
            break;
          case 'volume':
            progress = (currentStats.exercisesCompleted / m.requirement) * 100;
            break;
          case 'mastery':
            progress = (currentStats.wordsMastered / m.requirement) * 100;
            break;
          default:
            progress = 0;
        }
        return { ...m, progress: Math.min(progress, 99) };
      })
      .filter(m => m.progress > 0 && m.progress < 100)
      .sort((a, b) => b.progress - a.progress)
      .slice(0, 3);
  }

  // Get total points (for gamification)
  getTotalPoints(): number {
    let points = 0;
    this.userMilestones.forEach(um => {
      const milestone = MILESTONES.find(m => m.id === um.milestoneId);
      if (milestone) {
        // Points based on type
        switch (milestone.type) {
          case 'streak':
            points += milestone.requirement * 2;
            break;
          case 'volume':
            points += Math.floor(milestone.requirement / 10);
            break;
          case 'mastery':
            points += milestone.requirement;
            break;
          case 'improvement':
            points += 50;
            break;
          case 'exploration':
            points += 25;
            break;
          case 'special':
            points += 15;
            break;
        }
      }
    });
    return points;
  }

  // Get milestone count by type
  getMilestoneCountByType(): Record<Milestone['type'], number> {
    const counts: Record<Milestone['type'], number> = {
      streak: 0,
      mastery: 0,
      volume: 0,
      improvement: 0,
      exploration: 0,
      special: 0,
    };

    this.userMilestones.forEach(um => {
      const milestone = MILESTONES.find(m => m.id === um.milestoneId);
      if (milestone) {
        counts[milestone.type]++;
      }
    });

    return counts;
  }
}

export const milestonesService = new MilestonesService();
export default milestonesService;
