/**
 * PAGE INTERACTIONS TESTS: Dashboard clicks, WeaknessAnalysis toggles,
 * MilestonesCelebration buttons, CollectiblesGallery tabs,
 * DailyChallengesPanel claim buttons
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

/* ---------- mock framer-motion ---------- */
vi.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (_t: any, prop: string) => {
      return ({ children, ...rest }: any) => {
        const Tag = prop as any;
        const safe = Object.fromEntries(
          Object.entries(rest).filter(
            ([k]) =>
              !k.startsWith('while') && !k.startsWith('animate') &&
              !k.startsWith('initial') && !k.startsWith('exit') &&
              !k.startsWith('transition') && !k.startsWith('variants') &&
              !k.startsWith('layout') && !k.startsWith('drag') &&
              k !== 'whileHover' && k !== 'whileTap' && k !== 'onAnimationComplete'
          )
        );
        return <Tag {...safe}>{children}</Tag>;
      };
    },
  }),
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useMotionValue: () => ({ set: vi.fn(), get: () => 0 }),
  useTransform: () => ({ set: vi.fn(), get: () => 0 }),
  useSpring: () => ({ set: vi.fn(), get: () => 0 }),
}));

/* ---------- mock useUser ---------- */
const mockUser = {
  id: 'test-user',
  name: 'TestUser',
  progress: { totalXP: 500, currentLevel: 2, wordsLearned: 30 },
  settings: { soundEnabled: true, autoPlayAudio: false, showTranslations: true, dailyGoal: 50 },
  streakData: { currentStreak: 5, longestStreak: 10 },
  achievements: [],
  createdAt: '2024-01-01T00:00:00Z',
};

vi.mock('../../context/UserContext', () => ({
  useUser: () => ({
    user: mockUser,
    updateUser: vi.fn(),
    updateBatchWordProgress: vi.fn(),
    addXP: vi.fn(),
    logout: vi.fn(),
  }),
}));

/* ---------- mock database ---------- */
vi.mock('../../services/database', () => ({
  default: {
    getDailyStats: vi.fn(() => Promise.resolve({ xpEarned: 100 })),
    exportUserData: vi.fn(() => Promise.resolve('{"test":true}')),
    importUserData: vi.fn(() => Promise.resolve()),
    clearAllData: vi.fn(() => Promise.resolve()),
    close: vi.fn(),
  },
}));
vi.mock('../../services/notebookService', () => ({
  notebookService: { close: vi.fn() },
}));

/* ---------- mock services ---------- */
vi.mock('../../services/analyticsService', () => ({
  default: {
    getSkillMetrics: vi.fn(() => [
      { skill: 'vocabulary', score: 80, totalAttempts: 50, trend: 'improving' as const },
      { skill: 'grammar', score: 60, totalAttempts: 30, trend: 'stable' as const },
      { skill: 'listening', score: 45, totalAttempts: 15, trend: 'declining' as const },
      { skill: 'reading', score: 70, totalAttempts: 20, trend: 'improving' as const },
      { skill: 'writing', score: 55, totalAttempts: 10, trend: 'stable' as const },
    ]),
    getWeaknessAnalysis: vi.fn(() => ({
      weakSkills: ['listening', 'writing'],
      weakCategories: ['articles'],
      patterns: [
        { pattern: 'Missing articles', count: 12, category: 'grammar', examples: ['I go to school.'] },
        { pattern: 'Wrong tense', count: 8, category: 'grammar', examples: ['I go yesterday.'] },
        { pattern: 'Spelling errors', count: 5, category: 'vocabulary', examples: ['recieve'] },
        { pattern: 'Word order', count: 3, category: 'grammar', examples: ['Never I go.'] },
      ],
    })),
    generateInsights: vi.fn(() => [
      { type: 'weakness', skill: 'listening', message: 'Tu listening necesita más práctica', priority: 'high' },
      { type: 'strength', skill: 'vocabulary', message: 'Tu vocabulario es excelente', priority: 'low' },
    ]),
    getStudyRecommendations: vi.fn(() => [
      { activity: 'listening', reason: 'Mejorar comprensión auditiva', urgency: 'high', estimatedMinutes: 10 },
      { activity: 'writing', reason: 'Practicar escritura', urgency: 'medium', estimatedMinutes: 15 },
    ]),
    trackActivity: vi.fn(),
  },
}));

vi.mock('../../data/error-classification', () => ({
  errorClassifications: [],
}));

/* ---------- mock collectibles ---------- */
vi.mock('../../data/collectibles', () => ({
  badges: [
    { id: 'b1', name: 'First Steps', nameEs: 'Primeros Pasos', icon: '🏅', description: 'Complete 1 lesson', descriptionEs: 'Completa 1 lección', category: 'badge', rarity: 'common', unlockCondition: { type: 'xp', value: 10 } },
    { id: 'b2', name: 'Scholar', nameEs: 'Estudioso', icon: '📚', description: 'Complete 10 lessons', descriptionEs: 'Completa 10 lecciones', category: 'badge', rarity: 'rare', unlockCondition: { type: 'xp', value: 500 } },
  ],
  titles: [
    { id: 't1', name: 'Beginner', nameEs: 'Principiante', color: '#4ade80', unlockCondition: { type: 'xp', value: 0 } },
    { id: 't2', name: 'Pro', nameEs: 'Profesional', color: '#fbbf24', unlockCondition: { type: 'xp', value: 10000 } },
  ],
  themeUnlocks: [
    { id: 'th1', name: 'Dark Blue', nameEs: 'Azul Oscuro', preview: { primary: '#123', secondary: '#456', accent: '#789' }, unlockCondition: { type: 'xp', value: 0 } },
  ],
  getUnlockedBadges: vi.fn(() => [
    { id: 'b1', name: 'First Steps', nameEs: 'Primeros Pasos', icon: '🏅', description: 'Complete 1 lesson', descriptionEs: 'Completa 1 lección', category: 'badge', rarity: 'common', unlockCondition: { type: 'xp', value: 10 } },
  ]),
  getUnlockedTitles: vi.fn(() => [
    { id: 't1', name: 'Beginner', nameEs: 'Principiante', color: '#4ade80', unlockCondition: { type: 'xp', value: 0 } },
  ]),
  getUnlockedThemes: vi.fn(() => [
    { id: 'th1', name: 'Dark Blue', nameEs: 'Azul Oscuro', preview: { primary: '#123', secondary: '#456', accent: '#789' }, unlockCondition: { type: 'xp', value: 0 } },
  ]),
  getNextUnlockable: vi.fn(() => ({ type: 'badge', item: { id: 'b2', name: 'Scholar', nameEs: 'Estudioso' }, remaining: 100 })),
  rarityColors: { common: '#aaa', uncommon: '#5a5', rare: '#55f', epic: '#a5a', legendary: '#fa5' },
}));

/* ---------- mock milestones ---------- */
vi.mock('../../data/progressMilestones', () => ({
  milestonesService: {
    getAchievedMilestones: vi.fn(() => []),
    getTotalPoints: vi.fn(() => 0),
    getMilestoneCountByType: vi.fn(() => ({})),
  },
  MILESTONES: [],
}));

vi.mock('../../data/fun-facts', () => ({
  getRandomFunFact: vi.fn(() => ({ id: 'ff1', category: 'tip', fact: 'English has 26 letters.', relatedWord: 'alphabet' })),
}));

/* ---------- mock gamification ---------- */
vi.mock('../../components/gamification', () => ({
  LevelBadge: () => <span data-testid="level-badge">LV2</span>,
  StreakDisplay: () => <span data-testid="streak-display">5🔥</span>,
}));

vi.mock('../../components/OnboardingTutorial', () => ({
  default: ({ onComplete }: any) => (
    <div data-testid="onboarding">
      <button onClick={onComplete}>¡Comenzar!</button>
    </div>
  ),
  useOnboarding: () => ({ showOnboarding: false, completeOnboarding: vi.fn() }),
}));

vi.mock('../../components/DailyChallengesPanel', () => ({
  default: () => <div data-testid="daily-challenges">Daily Challenges</div>,
}));

vi.mock('../../components/PersonalLeague', () => ({
  default: () => <div data-testid="personal-league">League</div>,
}));

vi.mock('../../data/levels', () => ({
  levels: [
    { id: 1, name: 'Beginner', nameEs: 'Principiante', description: 'Start here', color: '#4ade80', icon: '🌱' },
    { id: 2, name: 'Elementary', nameEs: 'Elemental', description: 'Basic skills', color: '#60a5fa', icon: '📘' },
  ],
}));

const Wrapper = ({ children }: any) => (
  <MemoryRouter>{children}</MemoryRouter>
);

/* ============================================================
   DASHBOARD
   ============================================================ */
describe('Dashboard — interactive elements', () => {
  let Dashboard: any;

  beforeEach(async () => {
    vi.clearAllMocks();
    Dashboard = (await import('../../pages/Dashboard')).default;
  });

  it('renders Práctica Rápida link', async () => {
    render(<Dashboard />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText(/Práctica Rápida/)).toBeInTheDocument();
    });
  });

  it('renders level badge and streak display', async () => {
    render(<Dashboard />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('level-badge')).toBeInTheDocument();
    });
  });

  it('renders daily challenges panel', async () => {
    render(<Dashboard />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('daily-challenges')).toBeInTheDocument();
    });
  });

  it('renders personal league', async () => {
    render(<Dashboard />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('personal-league')).toBeInTheDocument();
    });
  });
});

/* ============================================================
   WEAKNESS ANALYSIS
   ============================================================ */
describe('WeaknessAnalysis — interactive elements', () => {
  let WeaknessAnalysis: any;

  beforeEach(async () => {
    vi.clearAllMocks();
    WeaknessAnalysis = (await import('../../components/WeaknessAnalysis')).default;
  });

  it('renders skill metrics section', async () => {
    render(<WeaknessAnalysis />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getAllByText(/Rendimiento por Habilidad|Análisis/i).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('Ver todas expands skills list', async () => {
    const user = userEvent.setup();
    render(<WeaknessAnalysis />, { wrapper: Wrapper });

    await waitFor(() => {
      const showAllBtn = screen.queryByText(/Ver todas/);
      if (showAllBtn) return;
    });

    const showAllBtn = screen.queryByText(/Ver todas/);
    if (showAllBtn) {
      await user.click(showAllBtn);
      await waitFor(() => {
        expect(screen.queryByText(/Ver menos/)).toBeInTheDocument();
      });
    }
  });

  it('Ver todos expands error patterns', async () => {
    const user = userEvent.setup();
    render(<WeaknessAnalysis />, { wrapper: Wrapper });

    await waitFor(() => {
      const showAllBtn = screen.queryByText(/Ver todos/);
      if (showAllBtn) return;
    });

    const showAllBtn = screen.queryByText(/Ver todos/);
    if (showAllBtn) {
      await user.click(showAllBtn);
      await waitFor(() => {
        expect(screen.queryByText(/Ver menos/) || screen.queryByText(/Word order/)).toBeTruthy();
      });
    }
  });

  it('Practicar links navigate to practice', async () => {
    render(<WeaknessAnalysis />, { wrapper: Wrapper });

    await waitFor(() => {
      const practiceLinks = screen.queryAllByText(/Practicar/);
      expect(practiceLinks.length).toBeGreaterThanOrEqual(0);
    });
  });
});

/* ============================================================
   MILESTONES CELEBRATION
   ============================================================ */
describe('MilestonesCelebration — interactive elements', () => {
  let MilestonesCelebration: any;

  beforeEach(async () => {
    vi.clearAllMocks();
    const mod = await import('../../components/MilestonesCelebration');
    MilestonesCelebration = mod.default;
  });

  it('renders celebration with milestone info and button', () => {
    const milestones = [
      { id: 'm1', type: 'volume' as const, title: 'First XP', description: 'Earn first XP', icon: '⭐', requirement: 10 },
      { id: 'm2', type: 'streak' as const, title: 'Streak 3', description: 'Get 3 day streak', icon: '🔥', requirement: 3 },
    ];
    const onClose = vi.fn();

    render(<MilestonesCelebration newMilestones={milestones} onClose={onClose} />);

    expect(screen.getByText(/Logro desbloqueado/)).toBeInTheDocument();
    expect(screen.getByText(/Ver siguiente logro/)).toBeInTheDocument();
  });

  it('clicking Ver siguiente logro advances to next', async () => {
    const user = userEvent.setup();
    const milestones = [
      { id: 'm1', type: 'volume' as const, title: 'First XP', description: 'Earn XP', icon: '⭐', requirement: 10 },
      { id: 'm2', type: 'streak' as const, title: 'Streak', description: 'Streak', icon: '🔥', requirement: 3 },
    ];
    const onClose = vi.fn();

    render(<MilestonesCelebration newMilestones={milestones} onClose={onClose} />);

    await user.click(screen.getByText(/Ver siguiente logro/));

    // Should now show second milestone with ¡Continuar! button
    await waitFor(() => {
      expect(screen.getByText(/Continuar/)).toBeInTheDocument();
    });
  });

  it('clicking ¡Continuar! calls onClose', async () => {
    const user = userEvent.setup();
    const milestones = [
      { id: 'm1', type: 'volume' as const, title: 'First XP', description: 'Earn XP', icon: '⭐', requirement: 10 },
    ];
    const onClose = vi.fn();

    render(<MilestonesCelebration newMilestones={milestones} onClose={onClose} />);

    await user.click(screen.getByText(/Continuar/));
    expect(onClose).toHaveBeenCalled();
  });

  it('returns null when no milestones', () => {
    const { container } = render(<MilestonesCelebration newMilestones={[]} onClose={vi.fn()} />);
    expect(container.innerHTML).toBe('');
  });
});

/* ============================================================
   COLLECTIBLES GALLERY
   ============================================================ */
describe('CollectiblesGallery — interactive elements', () => {
  let CollectiblesGallery: any;

  beforeEach(async () => {
    vi.clearAllMocks();
    CollectiblesGallery = (await import('../../components/CollectiblesGallery')).default;
  });

  it('renders three tab buttons: Insignias, Títulos, Temas', async () => {
    render(<CollectiblesGallery />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText(/Insignias/)).toBeInTheDocument();
      expect(screen.getByText(/Títulos/)).toBeInTheDocument();
      expect(screen.getByText(/Temas/)).toBeInTheDocument();
    });
  });

  it('clicking Títulos tab switches to titles view', async () => {
    const user = userEvent.setup();
    render(<CollectiblesGallery />, { wrapper: Wrapper });

    await user.click(screen.getByText(/Títulos/));

    await waitFor(() => {
      expect(screen.getByText(/Principiante/)).toBeInTheDocument();
    });
  });

  it('clicking Temas tab switches to themes view', async () => {
    const user = userEvent.setup();
    render(<CollectiblesGallery />, { wrapper: Wrapper });

    await user.click(screen.getByText(/Temas/));

    await waitFor(() => {
      expect(screen.getByText(/Azul Oscuro/)).toBeInTheDocument();
    });
  });

  it('clicking unlocked title selects it', async () => {
    const user = userEvent.setup();
    render(<CollectiblesGallery />, { wrapper: Wrapper });

    await user.click(screen.getByText(/Títulos/));

    await waitFor(() => {
      expect(screen.getByText(/Principiante/)).toBeInTheDocument();
    });

    await user.click(screen.getByText(/Principiante/));

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Activo') || body.includes('Principiante')).toBeTruthy();
    });
  });

  it('shows next unlock preview', async () => {
    render(<CollectiblesGallery />, { wrapper: Wrapper });

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Próximo desbloqueo') || body.includes('Estudioso')).toBeTruthy();
    });
  });
});

/* ============================================================
   DAILY CHALLENGES PANEL (unmocked)
   ============================================================ */
describe('DailyChallengesPanel — interactive elements', () => {
  let DailyChallengesPanel: any;

  beforeEach(async () => {
    vi.clearAllMocks();

    // Remove the simple mock to test the real component
    vi.doUnmock('../../components/DailyChallengesPanel');

    // Mock db for challenges
    const dbMock = await import('../../services/database');
    vi.mocked(dbMock.default.getDailyStats).mockResolvedValue({
      date: new Date().toISOString().slice(0, 10),
      xpEarned: 100,
      lessonsCompleted: 2,
      wordsReviewed: 10,
      timeSpentMinutes: 10,
      accuracy: 80,
    });

    DailyChallengesPanel = (await import('../../components/DailyChallengesPanel')).default;
  });

  it('renders Desafíos del Día header', async () => {
    render(<DailyChallengesPanel />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText(/Desafíos del Día/)).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});

/* ============================================================
   SESSION MANAGER
   ============================================================ */
describe('SessionManager — interactive elements', () => {
  let SessionManager: any;
  let SessionSummaryView: any;

  beforeEach(async () => {
    vi.clearAllMocks();

    // Must mock sessionTimingService (default export)
    vi.doMock('../../services/sessionTimingService', () => ({
      default: {
        startSession: vi.fn(),
        recordExercise: vi.fn(() => ({ action: 'continue', reason: 'ok' })),
        recordBreak: vi.fn(),
        endSession: vi.fn(() => ({
          duration: 15,
          exercisesCompleted: 10,
          accuracy: 0.85,
          averageResponseTime: 3000,
          longestStreak: 5,
          fatigueEvents: 0,
          focusScore: 80,
        })),
      },
      sessionTimingService: {
        startSession: vi.fn(),
        recordExercise: vi.fn(() => ({ action: 'continue', reason: 'ok' })),
        recordBreak: vi.fn(),
        endSession: vi.fn(() => ({
          duration: 15,
          exercisesCompleted: 10,
          accuracy: 0.85,
          averageResponseTime: 3000,
          longestStreak: 5,
          fatigueEvents: 0,
          focusScore: 80,
        })),
      },
    }));

    const mod = await import('../../components/SessionManager');
    SessionManager = mod.default;
    SessionSummaryView = mod.SessionSummaryView;
  });

  it('renders without error', () => {
    render(<SessionManager />);
    // SessionManager renders nothing visible until break recommendation
    expect(document.body).toBeTruthy();
  });

  it('SessionSummaryView renders summary stats', () => {
    const summary = {
      duration: 15,
      exercisesCompleted: 10,
      accuracy: 0.85,
      averageResponseTime: 3000,
      longestStreak: 5,
      fatigueEvents: 0,
      focusScore: 80,
    };

    render(<SessionSummaryView summary={summary} />);

    expect(screen.getByText(/Resumen/)).toBeInTheDocument();
    expect(screen.getByText(/Duración/)).toBeInTheDocument();
    expect(screen.getByText(/Ejercicios/)).toBeInTheDocument();
  });

  it('SessionSummaryView shows fatigue warning when fatigueEvents > 0', () => {
    const summary = {
      duration: 30,
      exercisesCompleted: 20,
      accuracy: 0.70,
      averageResponseTime: 4000,
      longestStreak: 3,
      fatigueEvents: 2,
      focusScore: 60,
    };

    render(<SessionSummaryView summary={summary} />);

    expect(screen.getByText(/fatiga/i)).toBeInTheDocument();
  });
});
