/**
 * E2E: Dashboard
 * Tests: Dashboard rendering, user greeting, stats display, navigation links.
 */

import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { renderWithProviders, seedUserWithProgress, resetSession, uniqueName, screen, waitFor } from './test-helpers';
import { useUser } from '../../context/UserContext';

const Dashboard = lazy(() => import('../../pages/Dashboard'));
const Levels = lazy(() => import('../../pages/Levels'));
const Settings = lazy(() => import('../../pages/Settings'));
const Progress = lazy(() => import('../../pages/Progress'));
const Achievements = lazy(() => import('../../pages/Achievements'));
const GrammarExplorer = lazy(() => import('../../pages/GrammarExplorer'));
const IdiomsExplorer = lazy(() => import('../../pages/IdiomsExplorer'));
import Layout from '../../components/Layout';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div>Cargando...</div>;
  if (!user) return <Navigate to="/welcome" replace />;
  return <>{children}</>;
}

function TestApp() {
  const { isLoading } = useUser();
  if (isLoading) return <div>Cargando EnglishPro...</div>;
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/grammar-explorer" element={<GrammarExplorer />} />
          <Route path="/idioms" element={<IdiomsExplorer />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

beforeEach(() => {
  resetSession();
});

describe('Dashboard Rendering', () => {
  it('displays personalized greeting with user name', async () => {
    await seedUserWithProgress(uniqueName('Laura'), { currentLevel: 2, totalXP: 750 });

    renderWithProviders(<TestApp />);

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it('displays user streak', async () => {
    await seedUserWithProgress(uniqueName('Laura'), { currentLevel: 2 });

    renderWithProviders(<TestApp />);

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText('Racha')).toBeInTheDocument();
  });

  it('displays XP stats', async () => {
    await seedUserWithProgress(uniqueName('Laura'), { currentLevel: 2, totalXP: 750 });

    renderWithProviders(<TestApp />);

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText('XP Hoy')).toBeInTheDocument();
  });

  it('shows daily goal section', async () => {
    await seedUserWithProgress(uniqueName('Laura'), { currentLevel: 2 });

    renderWithProviders(<TestApp />);

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText('Meta Diaria')).toBeInTheDocument();
  });

  it('shows quick action buttons', async () => {
    await seedUserWithProgress(uniqueName('Laura'), { currentLevel: 2 });

    renderWithProviders(<TestApp />);

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText('Práctica Rápida')).toBeInTheDocument();
    expect(screen.getByText('Continuar')).toBeInTheDocument();
  });
});

describe('Dashboard Navigation', () => {
  it('sidebar contains all main navigation items', async () => {
    await seedUserWithProgress(uniqueName('NavUser'), { currentLevel: 1 });

    renderWithProviders(<TestApp />);

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });

    // Check navigation items
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

  it('sidebar shows Settings and Logout options', async () => {
    await seedUserWithProgress(uniqueName('NavUser'), { currentLevel: 1 });

    renderWithProviders(<TestApp />);

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText('Configuración')).toBeInTheDocument();
    expect(screen.getByText('Cerrar Sesión')).toBeInTheDocument();
  });

  it('navigating to Levels page works', async () => {
    await seedUserWithProgress(uniqueName('NavUser'), { currentLevel: 1 });

    const { user: userEvent } = renderWithProviders(<TestApp />);

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });

    const nivelesLinks = screen.getAllByText('Niveles');
    const sidebarLink = nivelesLinks.find(el => el.closest('nav[aria-label="Navegación principal"]'));
    await userEvent.click(sidebarLink || nivelesLinks[0]);

    await waitFor(() => {
      expect(screen.getByText('Niveles de Aprendizaje')).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it('navigating to Progress page works', async () => {
    await seedUserWithProgress(uniqueName('NavUser'), { currentLevel: 1 });

    const { user: userEvent } = renderWithProviders(<TestApp />);

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });

    const progresoLinks = screen.getAllByText('Progreso');
    const sidebarLink = progresoLinks.find(el => el.closest('nav[aria-label="Navegación principal"]'));
    await userEvent.click(sidebarLink || progresoLinks[0]);

    await waitFor(() => {
      expect(screen.getByText(/Tu Progreso/i)).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it('navigating to Achievements page works', async () => {
    await seedUserWithProgress(uniqueName('NavUser'), { currentLevel: 1 });

    const { user: userEvent } = renderWithProviders(<TestApp />);

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });

    const logrosLinks = screen.getAllByText('Logros');
    const sidebarLink = logrosLinks.find(el => el.closest('nav[aria-label="Navegación principal"]'));
    await userEvent.click(sidebarLink || logrosLinks[0]);

    await waitFor(() => {
      expect(screen.getByText(/Logros y Coleccionables/)).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});
