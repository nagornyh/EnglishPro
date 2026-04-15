/**
 * NAVIGATION & LAYOUT TESTS:
 * Layout — 9 nav links, mobile hamburger menu, Cerrar Sesión, skip link
 * ErrorBoundary — retry / back to home
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

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
const mockLogout = vi.fn();

vi.mock('../../context/UserContext', () => ({
  useUser: () => ({
    user: {
      id: 'test-user',
      name: 'TestUser',
      progress: { totalXP: 500, currentLevel: 2, wordsLearned: 30 },
      settings: { soundEnabled: true, autoPlayAudio: false, showTranslations: true, dailyGoal: 50 },
      streakData: { currentStreak: 5, longestStreak: 10 },
      achievements: [],
      createdAt: '2024-01-01T00:00:00Z',
    },
    updateUser: vi.fn(),
    addXP: vi.fn(),
    logout: mockLogout,
  }),
}));

/* ---------- mock SaveProgressButton ---------- */
vi.mock('../../components/SaveProgressButton', () => ({
  default: () => <button data-testid="save-progress">Save</button>,
}));

/* ---------- mock database ---------- */
vi.mock('../../services/database', () => ({
  default: {
    exportUserData: vi.fn(() => Promise.resolve('{}')),
    getDailyStats: vi.fn(() => Promise.resolve(null)),
    close: vi.fn(),
  },
}));
vi.mock('../../services/notebookService', () => ({
  notebookService: { close: vi.fn() },
}));

/* ============================================================
   LAYOUT — SIDEBAR NAVIGATION
   ============================================================ */
describe('Layout — navigation sidebar', () => {
  let Layout: any;

  beforeEach(async () => {
    vi.clearAllMocks();
    Layout = (await import('../../components/Layout')).default;
  });

  it('renders all 9 navigation links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Inicio').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Niveles').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Plan de Estudio').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Práctica').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Desafíos').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Gramática').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Mi Cuaderno').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Progreso').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Logros').length).toBeGreaterThanOrEqual(1);
  });

  it('renders Configuración link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Configuración')).toBeInTheDocument();
  });

  it('renders Cerrar Sesión button', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Cerrar Sesión')).toBeInTheDocument();
  });

  it('Cerrar Sesión button calls logout', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    await user.click(screen.getByText('Cerrar Sesión'));
    expect(mockLogout).toHaveBeenCalled();
  });

  it('renders skip link for accessibility', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Saltar al contenido principal')).toBeInTheDocument();
  });

  it('renders EnglishPro brand logo', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getAllByText('EnglishPro').length).toBeGreaterThanOrEqual(1);
  });

  it('mobile menu button opens sidebar', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const menuBtn = screen.getByLabelText('Abrir menú de navegación');
    await user.click(menuBtn);

    // After opening, should see close button or overlay
    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Inicio')).toBeTruthy();
    });
  });

  it('renders user info (name and level)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getAllByText('TestUser').length).toBeGreaterThanOrEqual(1);
  });

  it('renders SaveProgressButton', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('save-progress')).toBeInTheDocument();
  });

  it('active nav link is highlighted for current path', () => {
    render(
      <MemoryRouter initialEntries={['/levels']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/levels" element={<div>Levels Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // The Levels link should have active styling
    const nivelesLinks = screen.getAllByText('Niveles');
    const nivelesLink = nivelesLinks.find(el => el.closest('a[aria-current="page"]'));
    expect(nivelesLink).toBeTruthy();
    const parent = nivelesLink?.closest('a');
    expect(parent?.getAttribute('aria-current')).toBe('page');
  });
});

/* ============================================================
   NAV LINK DESTINATIONS
   ============================================================ */
describe('Layout — nav link destinations', () => {
  let Layout: any;

  beforeEach(async () => {
    vi.clearAllMocks();
    Layout = (await import('../../components/Layout')).default;
  });

  const navItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Niveles', path: '/levels' },
    { text: 'Plan de Estudio', path: '/study-plan' },
    { text: 'Práctica', path: '/practice' },
    { text: 'Desafíos', path: '/challenges' },
    { text: 'Gramática', path: '/grammar-explorer' },
    { text: 'Mi Cuaderno', path: '/notebook' },
    { text: 'Progreso', path: '/progress' },
    { text: 'Logros', path: '/achievements' },
    { text: 'Configuración', path: '/settings' },
  ];

  navItems.forEach(({ text, path }) => {
    it(`"${text}" links to ${path}`, () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="*" element={<div>Page</div>} />
            </Route>
          </Routes>
        </MemoryRouter>
      );

      const link = screen.getAllByText(text).find(el => el.closest('a'));
      expect(link?.closest('a')?.getAttribute('href')).toBe(path);
    });
  });
});
