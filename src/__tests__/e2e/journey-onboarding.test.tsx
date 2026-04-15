/**
 * JOURNEY TEST: Complete Onboarding Flow
 * Tests the full user journey: Welcome → Create Profile → Select Level → Confirm → Dashboard
 * This verifies the app works end-to-end from first visit to landing on the dashboard.
 */

import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { renderWithProviders, resetSession, uniqueName, screen, waitFor } from './test-helpers';
import { useUser } from '../../context/UserContext';

const Welcome = lazy(() => import('../../pages/Welcome'));
const Dashboard = lazy(() => import('../../pages/Dashboard'));
const LevelSelector = lazy(() => import('../../pages/LevelSelector'));
import Layout from '../../components/Layout';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div>Cargando...</div>;
  if (!user) return <Navigate to="/welcome" replace />;
  return <>{children}</>;
}

function FullApp() {
  const { user, isLoading } = useUser();
  if (isLoading) return <div>Cargando EnglishPro...</div>;
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/welcome" element={user ? <Navigate to="/" replace /> : <Welcome />} />
        <Route path="/select-level" element={<ProtectedRoute><LevelSelector isInitialSetup /></ProtectedRoute>} />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to={user ? "/" : "/welcome"} replace />} />
      </Routes>
    </Suspense>
  );
}

beforeEach(() => {
  resetSession();
});

describe('Complete Onboarding Journey', () => {
  it('new user: Welcome → Create Profile → Select Level → Confirm → Dashboard', async () => {
    const name = uniqueName('NewUser');
    const { user: userEvent } = renderWithProviders(<FullApp />, { initialRoute: '/welcome' });

    // Step 1: Welcome page renders
    await waitFor(() => {
      expect(screen.getByText('EnglishPro')).toBeInTheDocument();
      expect(screen.getByText('Tu camino hacia el dominio del inglés')).toBeInTheDocument();
    }, { timeout: 5000 });

    // Step 2: Click "Crear Nuevo Perfil"
    await userEvent.click(screen.getByText('Crear Nuevo Perfil'));

    // Step 3: Fill in name
    const nameInput = screen.getByPlaceholderText('Tu nombre');
    expect(nameInput).toBeInTheDocument();
    await userEvent.type(nameInput, name);

    // Step 4: Click "Comenzar" to create profile
    await userEvent.click(screen.getByText('Comenzar'));

    // Step 5: Arrive at level selector
    await waitFor(() => {
      expect(screen.getByText('¿Cuál es tu nivel de inglés?')).toBeInTheDocument();
    }, { timeout: 5000 });

    // Step 6: Verify CEFR groups are displayed
    expect(screen.getByText('Principiante')).toBeInTheDocument();
    expect(screen.getByText('Básico')).toBeInTheDocument();

    // Step 7: Select A1 level
    const levelButtons = screen.getAllByRole('button');
    const a1Button = levelButtons.find(btn => btn.textContent?.includes('A1'));
    expect(a1Button).toBeTruthy();
    await userEvent.click(a1Button!);

    // Step 8: Confirmation view appears
    await waitFor(() => {
      expect(screen.getByText('Confirmar')).toBeInTheDocument();
      expect(screen.getByText('Elegir otro')).toBeInTheDocument();
    });

    // Step 9: Confirm the selection
    await userEvent.click(screen.getByText('Confirmar'));

    // Step 10: Arrive at Dashboard with greeting
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/¡Hola,/);
    }, { timeout: 10000 });

    // Step 11: Dashboard elements are present
    expect(screen.getByText('Racha')).toBeInTheDocument();
    expect(screen.getByText('Meta Diaria')).toBeInTheDocument();
  }, 30000);

  it('new user: Cancel profile creation and try again', async () => {
    const { user: userEvent } = renderWithProviders(<FullApp />, { initialRoute: '/welcome' });

    await waitFor(() => {
      expect(screen.getByText('EnglishPro')).toBeInTheDocument();
    }, { timeout: 5000 });

    // Open creation form
    await userEvent.click(screen.getByText('Crear Nuevo Perfil'));
    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument();

    // Cancel
    await userEvent.click(screen.getByText('Cancelar'));
    expect(screen.queryByPlaceholderText('Tu nombre')).not.toBeInTheDocument();

    // Try again with a name
    await userEvent.click(screen.getByText('Crear Nuevo Perfil'));
    await userEvent.type(screen.getByPlaceholderText('Tu nombre'), uniqueName('RetryUser'));
    await userEvent.click(screen.getByText('Comenzar'));

    await waitFor(() => {
      expect(screen.getByText('¿Cuál es tu nivel de inglés?')).toBeInTheDocument();
    }, { timeout: 5000 });
  }, 20000);

  it('new user: Select level → "Elegir otro" → pick different level → Confirm', async () => {
    const { user: userEvent } = renderWithProviders(<FullApp />, { initialRoute: '/welcome' });

    await waitFor(() => {
      expect(screen.getByText('EnglishPro')).toBeInTheDocument();
    }, { timeout: 5000 });

    // Create profile
    await userEvent.click(screen.getByText('Crear Nuevo Perfil'));
    await userEvent.type(screen.getByPlaceholderText('Tu nombre'), uniqueName('SwitchUser'));
    await userEvent.click(screen.getByText('Comenzar'));

    await waitFor(() => {
      expect(screen.getByText('¿Cuál es tu nivel de inglés?')).toBeInTheDocument();
    }, { timeout: 5000 });

    // Select A1 first
    const buttons1 = screen.getAllByRole('button');
    const a1 = buttons1.find(btn => btn.textContent?.includes('A1'));
    await userEvent.click(a1!);

    await waitFor(() => {
      expect(screen.getByText('Elegir otro')).toBeInTheDocument();
    });

    // Change mind - go back
    await userEvent.click(screen.getByText('Elegir otro'));

    await waitFor(() => {
      expect(screen.getByText('Principiante')).toBeInTheDocument();
      expect(screen.queryByText('Confirmar')).not.toBeInTheDocument();
    });

    // Select A2 instead
    const buttons2 = screen.getAllByRole('button');
    const a2 = buttons2.find(btn => btn.textContent?.includes('A2'));
    await userEvent.click(a2!);

    await waitFor(() => {
      expect(screen.getByText('Confirmar')).toBeInTheDocument();
    });

    // Confirm A2
    await userEvent.click(screen.getByText('Confirmar'));

    // Dashboard loads
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/¡Hola,/);
    }, { timeout: 10000 });
  }, 30000);

  it('validation: empty name shows error', async () => {
    const { user: userEvent } = renderWithProviders(<FullApp />, { initialRoute: '/welcome' });

    await waitFor(() => {
      expect(screen.getByText('EnglishPro')).toBeInTheDocument();
    }, { timeout: 5000 });

    await userEvent.click(screen.getByText('Crear Nuevo Perfil'));
    // Click "Comenzar" without entering a name
    await userEvent.click(screen.getByText('Comenzar'));

    expect(screen.getByText('Por favor ingresa un nombre')).toBeInTheDocument();
    // Should still be on the welcome page
    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument();
  }, 15000);
});
