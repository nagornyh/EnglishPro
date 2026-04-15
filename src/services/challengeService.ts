// Challenge Service - Weekly challenges, boss battles, survival mode
// All data stored in localStorage

export interface Challenge {
  id: string;
  type: 'weekly' | 'daily' | 'boss' | 'special';
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  icon: string;
  requirements: ChallengeRequirement[];
  rewards: ChallengeReward;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  timeLimit?: number; // minutes, for timed challenges
  expiresAt?: string; // ISO date string
}

export interface ChallengeRequirement {
  type: 'xp' | 'words' | 'accuracy' | 'streak' | 'activities' | 'time' | 'perfect';
  target: number;
  current: number;
  description: string;
  descriptionEs: string;
}

export interface ChallengeReward {
  xp: number;
  collectibleId?: string;
  themeId?: string;
  avatarId?: string;
  badge?: string;
}

export interface BossBattle {
  id: string;
  levelId: number;
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  bossEmoji: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  questions: BossQuestion[];
  timeLimit: number; // seconds
  requiredScore: number; // percentage
  rewards: ChallengeReward;
}

export interface BossQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'translation' | 'listening';
  question: string;
  questionEs?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  explanationEs: string;
  points: number;
  timeBonus: number; // extra seconds for quick answer
}

export interface SurvivalState {
  isActive: boolean;
  currentQuestion: number;
  lives: number;
  score: number;
  streak: number;
  maxStreak: number;
  startTime: number;
  questions: BossQuestion[];
}

export interface UserChallengeProgress {
  activeChallenges: {
    challengeId: string;
    startedAt: string;
    progress: ChallengeRequirement[];
  }[];
  completedChallenges: string[];
  completedBosses: string[];
  survivalHighScore: number;
  speedRoundHighScore: number;
  weeklyPoints: number;
  lastWeeklyReset: string;
}

// ==================== WEEKLY CHALLENGES ====================
const WEEKLY_CHALLENGES: Omit<Challenge, 'expiresAt'>[] = [
  {
    id: 'word-warrior',
    type: 'weekly',
    name: 'Word Warrior',
    nameEs: 'Guerrero de Palabras',
    description: 'Learn 50 new words this week',
    descriptionEs: 'Aprende 50 palabras nuevas esta semana',
    icon: '⚔️',
    requirements: [
      { type: 'words', target: 50, current: 0, description: 'Learn new words', descriptionEs: 'Aprende palabras nuevas' },
    ],
    rewards: { xp: 500, badge: 'word-warrior' },
    difficulty: 'medium',
  },
  {
    id: 'streak-master',
    type: 'weekly',
    name: 'Streak Master',
    nameEs: 'Maestro de Rachas',
    description: 'Maintain a 7-day streak',
    descriptionEs: 'Mantén una racha de 7 días',
    icon: '🔥',
    requirements: [
      { type: 'streak', target: 7, current: 0, description: 'Days in a row', descriptionEs: 'Días seguidos' },
    ],
    rewards: { xp: 400, collectibleId: 'sapphire' },
    difficulty: 'medium',
  },
  {
    id: 'xp-hunter',
    type: 'weekly',
    name: 'XP Hunter',
    nameEs: 'Cazador de XP',
    description: 'Earn 1000 XP this week',
    descriptionEs: 'Gana 1000 XP esta semana',
    icon: '🎯',
    requirements: [
      { type: 'xp', target: 1000, current: 0, description: 'Earn XP', descriptionEs: 'Gana XP' },
    ],
    rewards: { xp: 300 },
    difficulty: 'hard',
  },
  {
    id: 'perfectionist',
    type: 'weekly',
    name: 'Perfectionist',
    nameEs: 'Perfeccionista',
    description: 'Get 10 perfect scores in any activity',
    descriptionEs: 'Obtén 10 puntuaciones perfectas en cualquier actividad',
    icon: '💯',
    requirements: [
      { type: 'perfect', target: 10, current: 0, description: 'Perfect scores', descriptionEs: 'Puntuaciones perfectas' },
    ],
    rewards: { xp: 600, badge: 'perfectionist' },
    difficulty: 'hard',
  },
  {
    id: 'activity-variety',
    type: 'weekly',
    name: 'Activity Explorer',
    nameEs: 'Explorador de Actividades',
    description: 'Complete 5 different activity types',
    descriptionEs: 'Completa 5 tipos diferentes de actividades',
    icon: '🗺️',
    requirements: [
      { type: 'activities', target: 5, current: 0, description: 'Different activities', descriptionEs: 'Actividades diferentes' },
    ],
    rewards: { xp: 300 },
    difficulty: 'easy',
  },
  {
    id: 'time-dedication',
    type: 'weekly',
    name: 'Dedicated Student',
    nameEs: 'Estudiante Dedicado',
    description: 'Study for 120 minutes total',
    descriptionEs: 'Estudia 120 minutos en total',
    icon: '⏰',
    requirements: [
      { type: 'time', target: 120, current: 0, description: 'Minutes studied', descriptionEs: 'Minutos estudiados' },
    ],
    rewards: { xp: 400 },
    difficulty: 'medium',
  },
];

// ==================== BOSS BATTLES ====================
const BOSS_BATTLES: BossBattle[] = [
  {
    id: 'boss-level-1',
    levelId: 1,
    name: 'The Grammar Goblin',
    nameEs: 'El Duende Gramático',
    description: 'Defeat the goblin by answering questions about basic grammar!',
    descriptionEs: '¡Derrota al duende respondiendo preguntas de gramática básica!',
    bossEmoji: '👺',
    difficulty: 1,
    timeLimit: 180,
    requiredScore: 70,
    rewards: { xp: 200, badge: 'goblin-slayer' },
    questions: [
      {
        id: 'b1q1',
        type: 'multiple-choice',
        question: 'Choose the correct verb: She ___ to school every day.',
        options: ['go', 'goes', 'going', 'gone'],
        correctAnswer: 'goes',
        explanation: 'Third person singular (she/he/it) uses the verb with -s in present simple.',
        explanationEs: 'La tercera persona singular (she/he/it) usa el verbo con -s en presente simple.',
        points: 10,
        timeBonus: 5,
      },
      {
        id: 'b1q2',
        type: 'multiple-choice',
        question: 'Which sentence is correct?',
        options: ['I am student.', 'I am a student.', 'I a student.', 'I student am.'],
        correctAnswer: 'I am a student.',
        explanation: 'We need the article "a" before singular countable nouns.',
        explanationEs: 'Necesitamos el artículo "a" antes de sustantivos contables singulares.',
        points: 10,
        timeBonus: 5,
      },
      {
        id: 'b1q3',
        type: 'fill-blank',
        question: 'Complete: They ___ watching TV right now.',
        correctAnswer: 'are',
        explanation: 'Present continuous: subject + be (am/is/are) + verb-ing',
        explanationEs: 'Presente continuo: sujeto + be (am/is/are) + verbo-ing',
        points: 15,
        timeBonus: 5,
      },
      {
        id: 'b1q4',
        type: 'multiple-choice',
        question: 'What is the plural of "child"?',
        options: ['childs', 'childes', 'children', 'childrens'],
        correctAnswer: 'children',
        explanation: '"Child" has an irregular plural form: children.',
        explanationEs: '"Child" tiene un plural irregular: children.',
        points: 10,
        timeBonus: 5,
      },
      {
        id: 'b1q5',
        type: 'translation',
        question: 'Translate: "¿Cómo estás?"',
        questionEs: 'Translate to English',
        correctAnswer: 'How are you?',
        explanation: 'Basic greeting question using "How + be + subject"',
        explanationEs: 'Pregunta de saludo básica usando "How + be + sujeto"',
        points: 15,
        timeBonus: 5,
      },
    ],
  },
  {
    id: 'boss-level-2',
    levelId: 2,
    name: 'The Vocabulary Vampire',
    nameEs: 'El Vampiro del Vocabulario',
    description: 'Destroy the vampire with your knowledge of vocabulary!',
    descriptionEs: '¡Destruye al vampiro con tu conocimiento de vocabulario!',
    bossEmoji: '🧛',
    difficulty: 2,
    timeLimit: 240,
    requiredScore: 75,
    rewards: { xp: 350, badge: 'vampire-hunter' },
    questions: [
      {
        id: 'b2q1',
        type: 'multiple-choice',
        question: 'What is the opposite of "expensive"?',
        options: ['cheap', 'dear', 'costly', 'rich'],
        correctAnswer: 'cheap',
        explanation: 'Cheap means low in price, the opposite of expensive.',
        explanationEs: 'Cheap significa bajo precio, lo opuesto a expensive.',
        points: 10,
        timeBonus: 5,
      },
      {
        id: 'b2q2',
        type: 'fill-blank',
        question: 'I need to ___ a decision. (make/do)',
        correctAnswer: 'make',
        explanation: 'We "make" decisions, not "do" decisions.',
        explanationEs: 'Usamos "make" con decisions, no "do".',
        points: 15,
        timeBonus: 5,
      },
      {
        id: 'b2q3',
        type: 'multiple-choice',
        question: '"Actually" in English means...',
        options: ['actualmente', 'en realidad', 'actual', 'ahora'],
        correctAnswer: 'en realidad',
        explanation: '"Actually" is a false friend - it means "in reality", not "currently".',
        explanationEs: '"Actually" es un falso amigo - significa "en realidad", no "actualmente".',
        points: 15,
        timeBonus: 5,
      },
      {
        id: 'b2q4',
        type: 'multiple-choice',
        question: 'Choose the correct word: Can I ___ your pen?',
        options: ['borrow', 'lend', 'give', 'take'],
        correctAnswer: 'borrow',
        explanation: 'You "borrow" something from someone (take temporarily).',
        explanationEs: 'Usas "borrow" para tomar algo prestado de alguien.',
        points: 10,
        timeBonus: 5,
      },
      {
        id: 'b2q5',
        type: 'translation',
        question: 'What does "embarrassed" mean?',
        options: ['embarazada', 'avergonzado', 'feliz', 'emocionado'],
        correctAnswer: 'avergonzado',
        explanation: '"Embarrassed" means feeling ashamed, not pregnant!',
        explanationEs: '"Embarrassed" significa avergonzado, ¡no embarazada!',
        points: 15,
        timeBonus: 5,
      },
    ],
  },
  {
    id: 'boss-level-3',
    levelId: 3,
    name: 'The Tense Titan',
    nameEs: 'El Titán de los Tiempos',
    description: 'Master all tenses to defeat this mighty foe!',
    descriptionEs: '¡Domina todos los tiempos verbales para derrotar a este poderoso enemigo!',
    bossEmoji: '🗿',
    difficulty: 3,
    timeLimit: 300,
    requiredScore: 80,
    rewards: { xp: 500, badge: 'titan-slayer', themeId: 'gold' },
    questions: [
      {
        id: 'b3q1',
        type: 'multiple-choice',
        question: 'I ___ to Paris twice. (experience)',
        options: ['went', 'have been', 'was', 'had been'],
        correctAnswer: 'have been',
        explanation: 'Present Perfect for life experiences (unspecified time).',
        explanationEs: 'Present Perfect para experiencias de vida (tiempo no especificado).',
        points: 15,
        timeBonus: 5,
      },
      {
        id: 'b3q2',
        type: 'fill-blank',
        question: 'By the time you arrive, I ___ already ___ (leave).',
        correctAnswer: 'will have left',
        explanation: 'Future Perfect for actions completed before a future point.',
        explanationEs: 'Future Perfect para acciones completadas antes de un punto futuro.',
        points: 20,
        timeBonus: 10,
      },
      {
        id: 'b3q3',
        type: 'multiple-choice',
        question: 'If I ___ rich, I would travel the world.',
        options: ['am', 'was', 'were', 'will be'],
        correctAnswer: 'were',
        explanation: 'Second conditional uses "were" for all subjects (hypothetical).',
        explanationEs: 'El segundo condicional usa "were" para todos los sujetos (hipotético).',
        points: 15,
        timeBonus: 5,
      },
      {
        id: 'b3q4',
        type: 'multiple-choice',
        question: 'She said she ___ tired.',
        options: ['is', 'was', 'were', 'be'],
        correctAnswer: 'was',
        explanation: 'Reported speech: present becomes past.',
        explanationEs: 'Reported speech: presente se convierte en pasado.',
        points: 15,
        timeBonus: 5,
      },
      {
        id: 'b3q5',
        type: 'fill-blank',
        question: 'I wish I ___ speak Chinese. (hypothetical ability)',
        correctAnswer: 'could',
        explanation: '"Wish + could" expresses a desire for an ability you don\'t have.',
        explanationEs: '"Wish + could" expresa un deseo de una habilidad que no tienes.',
        points: 20,
        timeBonus: 10,
      },
    ],
  },
];

// ==================== SURVIVAL MODE QUESTIONS ====================
const SURVIVAL_QUESTIONS: BossQuestion[] = [
  {
    id: 'surv1',
    type: 'multiple-choice',
    question: 'She ___ very well.',
    options: ['sing', 'sings', 'singing', 'sang'],
    correctAnswer: 'sings',
    explanation: 'Third person singular present simple',
    explanationEs: 'Presente simple tercera persona singular',
    points: 10,
    timeBonus: 2,
  },
  {
    id: 'surv2',
    type: 'multiple-choice',
    question: 'I ___ my homework yesterday.',
    options: ['do', 'did', 'done', 'doing'],
    correctAnswer: 'did',
    explanation: 'Past simple with "yesterday"',
    explanationEs: 'Pasado simple con "yesterday"',
    points: 10,
    timeBonus: 2,
  },
  {
    id: 'surv3',
    type: 'multiple-choice',
    question: 'They ___ TV right now.',
    options: ['watch', 'watches', 'are watching', 'watched'],
    correctAnswer: 'are watching',
    explanation: 'Present continuous for actions happening now',
    explanationEs: 'Presente continuo para acciones que ocurren ahora',
    points: 10,
    timeBonus: 2,
  },
  {
    id: 'surv4',
    type: 'multiple-choice',
    question: 'The opposite of "hot" is...',
    options: ['warm', 'cold', 'cool', 'heat'],
    correctAnswer: 'cold',
    explanation: 'Cold is the direct opposite of hot',
    explanationEs: 'Cold es el opuesto directo de hot',
    points: 10,
    timeBonus: 2,
  },
  {
    id: 'surv5',
    type: 'multiple-choice',
    question: 'I have ___ been to Japan.',
    options: ['ever', 'never', 'always', 'yet'],
    correctAnswer: 'never',
    explanation: 'Never = not at any time (negative experience)',
    explanationEs: 'Never = nunca (experiencia negativa)',
    points: 10,
    timeBonus: 2,
  },
  {
    id: 'surv6',
    type: 'multiple-choice',
    question: 'How ___ water do you drink?',
    options: ['many', 'much', 'lot', 'few'],
    correctAnswer: 'much',
    explanation: '"Much" for uncountable nouns like water',
    explanationEs: '"Much" para sustantivos incontables como agua',
    points: 10,
    timeBonus: 2,
  },
  {
    id: 'surv7',
    type: 'multiple-choice',
    question: 'He is ___ than his brother.',
    options: ['tall', 'taller', 'tallest', 'more tall'],
    correctAnswer: 'taller',
    explanation: 'Comparative form: adjective + -er (for short adjectives)',
    explanationEs: 'Forma comparativa: adjetivo + -er (para adjetivos cortos)',
    points: 10,
    timeBonus: 2,
  },
  {
    id: 'surv8',
    type: 'multiple-choice',
    question: 'I ___ go to the party if I finish work early.',
    options: ['will', 'would', 'could', 'am'],
    correctAnswer: 'will',
    explanation: 'First conditional: If + present, will + base verb',
    explanationEs: 'Primer condicional: If + presente, will + verbo base',
    points: 10,
    timeBonus: 2,
  },
  {
    id: 'surv9',
    type: 'multiple-choice',
    question: 'The movie was ___ than I expected.',
    options: ['good', 'better', 'best', 'more better'],
    correctAnswer: 'better',
    explanation: 'Better is the comparative of good',
    explanationEs: 'Better es el comparativo de good',
    points: 10,
    timeBonus: 2,
  },
  {
    id: 'surv10',
    type: 'multiple-choice',
    question: 'She ___ to music when I called.',
    options: ['listens', 'listened', 'was listening', 'has listened'],
    correctAnswer: 'was listening',
    explanation: 'Past continuous for interrupted action',
    explanationEs: 'Pasado continuo para acción interrumpida',
    points: 10,
    timeBonus: 2,
  },
];

const STORAGE_KEY = 'user_challenge_progress';

class ChallengeService {
  private progress: UserChallengeProgress;

  constructor() {
    this.progress = this.loadProgress();
    this.checkWeeklyReset();
  }

  private loadProgress(): UserChallengeProgress {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      activeChallenges: [],
      completedChallenges: [],
      completedBosses: [],
      survivalHighScore: 0,
      speedRoundHighScore: 0,
      weeklyPoints: 0,
      lastWeeklyReset: new Date().toISOString(),
    };
  }

  private saveProgress(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
  }

  private checkWeeklyReset(): void {
    const lastReset = new Date(this.progress.lastWeeklyReset);
    const now = new Date();
    const daysSinceReset = Math.floor((now.getTime() - lastReset.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysSinceReset >= 7) {
      // Reset weekly progress
      this.progress.weeklyPoints = 0;
      this.progress.activeChallenges = this.progress.activeChallenges.filter(c => {
        const challenge = WEEKLY_CHALLENGES.find(wc => wc.id === c.challengeId);
        return challenge?.type !== 'weekly';
      });
      this.progress.lastWeeklyReset = now.toISOString();
      this.saveProgress();
    }
  }

  // ==================== WEEKLY CHALLENGES ====================
  
  getWeeklyChallenges(): Challenge[] {
    const weekEnd = new Date();
    weekEnd.setDate(weekEnd.getDate() + (7 - weekEnd.getDay()));
    
    return WEEKLY_CHALLENGES.map(c => ({
      ...c,
      expiresAt: weekEnd.toISOString(),
    }));
  }

  getActiveChallenges(): { challenge: Challenge; progress: ChallengeRequirement[] }[] {
    return this.progress.activeChallenges.map(ac => {
      const challenge = WEEKLY_CHALLENGES.find(c => c.id === ac.challengeId);
      if (!challenge) return null;
      return {
        challenge: { ...challenge, expiresAt: ac.startedAt },
        progress: ac.progress,
      };
    }).filter(Boolean) as { challenge: Challenge; progress: ChallengeRequirement[] }[];
  }

  startChallenge(challengeId: string): boolean {
    if (this.progress.activeChallenges.some(c => c.challengeId === challengeId)) {
      return false; // Already active
    }
    if (this.progress.completedChallenges.includes(challengeId)) {
      return false; // Already completed
    }

    const challenge = WEEKLY_CHALLENGES.find(c => c.id === challengeId);
    if (!challenge) return false;

    this.progress.activeChallenges.push({
      challengeId,
      startedAt: new Date().toISOString(),
      progress: challenge.requirements.map(r => ({ ...r, current: 0 })),
    });
    this.saveProgress();
    return true;
  }

  updateChallengeProgress(type: ChallengeRequirement['type'], amount: number): Challenge[] {
    const completedChallenges: Challenge[] = [];

    for (const active of this.progress.activeChallenges) {
      let allComplete = true;
      
      for (const req of active.progress) {
        if (req.type === type) {
          req.current = Math.min(req.current + amount, req.target);
        }
        if (req.current < req.target) {
          allComplete = false;
        }
      }

      if (allComplete) {
        const challenge = WEEKLY_CHALLENGES.find(c => c.id === active.challengeId);
        if (challenge) {
          completedChallenges.push({ ...challenge, expiresAt: active.startedAt });
          this.progress.completedChallenges.push(active.challengeId);
          this.progress.weeklyPoints += challenge.rewards.xp;
        }
      }
    }

    // Remove completed from active
    this.progress.activeChallenges = this.progress.activeChallenges.filter(
      ac => !completedChallenges.some(cc => cc.id === ac.challengeId)
    );

    this.saveProgress();
    return completedChallenges;
  }

  // ==================== BOSS BATTLES ====================
  
  getBossBattles(): BossBattle[] {
    return BOSS_BATTLES;
  }

  getBossBattle(bossId: string): BossBattle | undefined {
    return BOSS_BATTLES.find(b => b.id === bossId);
  }

  getBossBattleForLevel(levelId: number): BossBattle | undefined {
    return BOSS_BATTLES.find(b => b.levelId === levelId);
  }

  isBossDefeated(bossId: string): boolean {
    return this.progress.completedBosses.includes(bossId);
  }

  recordBossVictory(bossId: string): ChallengeReward | null {
    if (this.progress.completedBosses.includes(bossId)) {
      return null;
    }

    const boss = BOSS_BATTLES.find(b => b.id === bossId);
    if (!boss) return null;

    this.progress.completedBosses.push(bossId);
    this.saveProgress();
    return boss.rewards;
  }

  // ==================== SURVIVAL MODE ====================
  
  getSurvivalQuestions(count: number = 20): BossQuestion[] {
    // Shuffle and return questions
    const shuffled = [...SURVIVAL_QUESTIONS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  updateSurvivalHighScore(score: number): boolean {
    if (score > this.progress.survivalHighScore) {
      this.progress.survivalHighScore = score;
      this.saveProgress();
      return true;
    }
    return false;
  }

  getSurvivalHighScore(): number {
    return this.progress.survivalHighScore;
  }

  // ==================== SPEED ROUND ====================
  
  updateSpeedRoundHighScore(score: number): boolean {
    if (score > this.progress.speedRoundHighScore) {
      this.progress.speedRoundHighScore = score;
      this.saveProgress();
      return true;
    }
    return false;
  }

  getSpeedRoundHighScore(): number {
    return this.progress.speedRoundHighScore;
  }

  // ==================== STATS ====================
  
  getProgress(): UserChallengeProgress {
    return { ...this.progress };
  }

  getWeeklyPoints(): number {
    return this.progress.weeklyPoints;
  }

  getTotalCompletedChallenges(): number {
    return this.progress.completedChallenges.length;
  }

  getTotalDefeatedBosses(): number {
    return this.progress.completedBosses.length;
  }

  // Export for backup
  exportProgress(): string {
    return JSON.stringify(this.progress);
  }

  importProgress(jsonData: string): boolean {
    try {
      const parsed = JSON.parse(jsonData);
      this.progress = { ...this.loadProgress(), ...parsed };
      this.saveProgress();
      return true;
    } catch {
      return false;
    }
  }
}

export const challengeService = new ChallengeService();
export default challengeService;
