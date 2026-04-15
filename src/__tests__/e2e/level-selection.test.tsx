/**
 * E2E: Level Selection
 * Tests: Initial level selection, level confirmation, changing levels.
 */

import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { renderWithProviders, seedTestUser, seedUserWithProgress, waitForAppReady, resetSession, uniqueName, screen, waitFor } from './test-helpers';
import { useUser } from '../../context/UserContext';

const LevelSelector = lazy(() => import('../../pages/LevelSelector'));
const Dashboard = lazy(() => import('../../pages/Dashboard'));
import Layout from '../../components/Layout';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div>Cargando...</div>;
  if (!user) return <Navigate to="/welcome" replace />;
  return <>{children}</>;
}

function TestApp({ initialSetup = false }: { initialSetup?: boolean }) {
  const { isLoading } = useUser();
  if (isLoading) return <div>Cargando EnglishPro...</div>;
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/select-level" element={
          <ProtectedRoute><LevelSelector isInitialSetup={initialSetup} /></ProtectedRoute>
        } />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/change-level" element={
          <ProtectedRoute><Layout /><LevelSelector /></ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

beforeEach(() => {
  resetSession();
});

describe('Initial Level Selection', () => {
  it('renders the level selection page with CEFR groups', async () => {
    await seedTestUser(uniqueName('Learner'));

    renderWithProviders(<TestApp initialSetup />, { initialRoute: '/select-level' });
    await waitForAppReady();

    await waitFor(() => {
      expect(screen.getByText('¿Cuál es tu nivel de inglés?')).toBeInTheDocument();
    });

    expect(screen.getByText('Principiante')).toBeInTheDocument();
    expect(screen.getByText('Básico')).toBeInTheDocument();
    expect(screen.getByText('Intermedio')).toBeInTheDocument();
    expect(screen.getByText('Avanzado')).toBeInTheDocument();
    expect(screen.getByText('Experto')).toBeInTheDocument();
    expect(screen.getByText('Maestría')).toBeInTheDocument();
  });

  it('shows helpful tip about changing levels later', async () => {
    await seedTestUser(uniqueName('Learner'));

    renderWithProviders(<TestApp initialSetup />, { initialRoute: '/select-level' });
    await waitForAppReady();

    await waitFor(() => {
      expect(screen.getByText(/puedes cambiar de nivel en cualquier momento/)).toBeInTheDocument();
    });
  });

  it('clicking a level shows confirmation view', async () => {
    await seedTestUser(uniqueName('Learner'));

    const { user: userEvent } = renderWithProviders(<TestApp initialSetup />, { initialRoute: '/select-level' });
    await waitForAppReady();

    await waitFor(() => {
      expect(screen.getByText('Principiante')).toBeInTheDocument();
    });

    // Click the first level (level 1)
    const levelButtons = screen.getAllByRole('button');
    const firstLevel = levelButtons.find(btn => btn.textContent?.includes('A1'));
    expect(firstLevel).toBeTruthy();
    await userEvent.click(firstLevel!);

    await waitFor(() => {
      expect(screen.getByText('Confirmar')).toBeInTheDocument();
      expect(screen.getByText('Elegir otro')).toBeInTheDocument();
    });
  });

  it('"Elegir otro" returns to the level grid', async () => {
    await seedTestUser(uniqueName('Learner'));

    const { user: userEvent } = renderWithProviders(<TestApp initialSetup />, { initialRoute: '/select-level' });
    await waitForAppReady();

    await waitFor(() => {
      expect(screen.getByText('Principiante')).toBeInTheDocument();
    });

    const levelButtons = screen.getAllByRole('button');
    const firstLevel = levelButtons.find(btn => btn.textContent?.includes('A1'));
    await userEvent.click(firstLevel!);

    await waitFor(() => {
      expect(screen.getByText('Elegir otro')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByText('Elegir otro'));

    await waitFor(() => {
      expect(screen.getByText('Principiante')).toBeInTheDocument();
      expect(screen.queryByText('Confirmar')).not.toBeInTheDocument();
    });
  });

  it('confirming a level navigates to dashboard', async () => {
    await seedTestUser(uniqueName('Learner'));

    const { user: userEvent } = renderWithProviders(<TestApp initialSetup />, { initialRoute: '/select-level' });
    await waitForAppReady();

    await waitFor(() => {
      expect(screen.getByText('Principiante')).toBeInTheDocument();
    });

    const levelButtons = screen.getAllByRole('button');
    const firstLevel = levelButtons.find(btn => btn.textContent?.includes('A1'));
    await userEvent.click(firstLevel!);

    await waitFor(() => {
      expect(screen.getByText('Confirmar')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByText('Confirmar'));

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});

describe('Change Level (non-initial)', () => {
  it('shows "Cambiar Nivel" title when not in initial setup', async () => {
    await seedUserWithProgress(uniqueName('AdvancedUser'), { currentLevel: 5 });

    renderWithProviders(
      <Suspense fallback={<div>Cargando...</div>}>
        <LevelSelector />
      </Suspense>,
      { initialRoute: '/change-level' }
    );

    // Need to wait for the component to load
    await waitFor(() => {
      // Since this is not initial setup, it should show "Cambiar Nivel"
      expect(screen.getByText('Cambiar Nivel')).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it('highlights the current level', async () => {
    await seedUserWithProgress(uniqueName('AdvancedUser'), { currentLevel: 3 });

    renderWithProviders(
      <Suspense fallback={<div>Cargando...</div>}>
        <LevelSelector />
      </Suspense>,
      { initialRoute: '/change-level' }
    );

    await waitFor(() => {
      expect(screen.getByText('Actual')).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});
