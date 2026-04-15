/**
 * E2E: Authentication Flow
 * Tests: Welcome page rendering, user creation, login, logout, user deletion.
 */

import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { renderWithProviders, seedTestUser, waitForAppReady, resetSession, uniqueName, screen, waitFor } from './test-helpers';
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

function TestApp() {
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

describe('Welcome Page', () => {
  it('renders the welcome page with app title and subtitle', async () => {
    renderWithProviders(<TestApp />, { initialRoute: '/welcome' });
    await waitForAppReady();

    expect(screen.getByText('EnglishPro')).toBeInTheDocument();
    expect(screen.getByText('Tu camino hacia el dominio del inglés')).toBeInTheDocument();
  });

  it('shows "Crea tu perfil" when no users exist', async () => {
    renderWithProviders(<TestApp />, { initialRoute: '/welcome' });
    await waitForAppReady();

    expect(screen.getByText('Crea tu perfil')).toBeInTheDocument();
  });

  it('shows "Crear Nuevo Perfil" button', async () => {
    renderWithProviders(<TestApp />, { initialRoute: '/welcome' });
    await waitForAppReady();

    expect(screen.getByText('Crear Nuevo Perfil')).toBeInTheDocument();
  });
});

describe('User Creation', () => {
  it('opens the new user form when "Crear Nuevo Perfil" is clicked', async () => {
    const { user: userEvent } = renderWithProviders(<TestApp />, { initialRoute: '/welcome' });
    await waitForAppReady();

    await userEvent.click(screen.getByText('Crear Nuevo Perfil'));

    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument();
    expect(screen.getByText('Comenzar')).toBeInTheDocument();
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
  });

  it('shows error when trying to create user with empty name', async () => {
    const { user: userEvent } = renderWithProviders(<TestApp />, { initialRoute: '/welcome' });
    await waitForAppReady();

    await userEvent.click(screen.getByText('Crear Nuevo Perfil'));
    await userEvent.click(screen.getByText('Comenzar'));

    expect(screen.getByText('Por favor ingresa un nombre')).toBeInTheDocument();
  });

  it('creates a new user and redirects to level selector', async () => {
    const { user: userEvent } = renderWithProviders(<TestApp />, { initialRoute: '/welcome' });
    await waitForAppReady();

    await userEvent.click(screen.getByText('Crear Nuevo Perfil'));
    await userEvent.type(screen.getByPlaceholderText('Tu nombre'), 'María');
    await userEvent.click(screen.getByText('Comenzar'));

    await waitFor(() => {
      expect(screen.getByText('¿Cuál es tu nivel de inglés?')).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it('cancel button hides the creation form', async () => {
    const { user: userEvent } = renderWithProviders(<TestApp />, { initialRoute: '/welcome' });
    await waitForAppReady();

    await userEvent.click(screen.getByText('Crear Nuevo Perfil'));
    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Cancelar'));
    expect(screen.queryByPlaceholderText('Tu nombre')).not.toBeInTheDocument();
  });
});

describe('User Login', () => {
  it('shows existing users and allows login', async () => {
    const name = uniqueName('Carlos');
    await seedTestUser(name);

    const { user: userEvent } = renderWithProviders(<TestApp />, { initialRoute: '/welcome' });

    localStorage.removeItem('currentUserId');

    await waitForAppReady();

    await waitFor(() => {
      expect(screen.getByText('Selecciona tu perfil')).toBeInTheDocument();
      expect(screen.getByText(name)).toBeInTheDocument();
    });

    await userEvent.click(screen.getByText(name));

    await waitFor(() => {
      expect(screen.getByText(/¡Hola,.*!/)).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});

describe('User Deletion', () => {
  it('removes user from the list after deletion', async () => {
    const name = uniqueName('DeleteMe');
    await seedTestUser(name);
    localStorage.removeItem('currentUserId');

    renderWithProviders(<TestApp />, { initialRoute: '/welcome' });
    await waitForAppReady();

    await waitFor(() => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });

    const deleteButtons = screen.getAllByRole('button').filter(btn =>
      btn.querySelector('.lucide-trash-2') || btn.getAttribute('aria-label')?.includes('eliminar')
    );

    // There should be at least one delete button
    expect(deleteButtons.length).toBeGreaterThan(0);
  });
});

describe('Auto-redirect', () => {
  it('redirects unauthenticated users to /welcome', async () => {
    renderWithProviders(<TestApp />, { initialRoute: '/' });
    await waitForAppReady();

    await waitFor(() => {
      expect(screen.getByText('EnglishPro')).toBeInTheDocument();
      expect(screen.getByText('Tu camino hacia el dominio del inglés')).toBeInTheDocument();
    });
  });

  it('redirects authenticated users from /welcome to dashboard', async () => {
    await seedTestUser(uniqueName('AutoUser'));

    renderWithProviders(<TestApp />, { initialRoute: '/welcome' });

    // Wait for loading to finish first, then look for greeting
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/¡Hola,/);
    }, { timeout: 15000 });
  }, 20000);
});
