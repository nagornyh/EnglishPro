/**
 * E2E: Settings Page
 * Tests: Settings rendering, sections, user profile display.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const Settings = lazy(() => import('../../pages/Settings'));

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderSettings() {
  return render(
    <ErrorBoundary>
      <MemoryRouter initialEntries={['/settings']}>
        <ThemeProvider>
          <UserProvider>
            <WaitForUser>
              <Suspense fallback={<div data-testid="suspense">Cargando módulo...</div>}>
                <Settings />
              </Suspense>
            </WaitForUser>
          </UserProvider>
        </ThemeProvider>
      </MemoryRouter>
    </ErrorBoundary>
  );
}

async function waitForPageLoad() {
  await waitFor(() => {
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('suspense')).not.toBeInTheDocument();
  }, { timeout: 10000 });
}

beforeEach(() => {
  resetSession();
});

describe('Settings Page', () => {
  it('renders settings with main sections', async () => {
    await seedUserWithProgress(uniqueName('SettingsUser'), { currentLevel: 2 });
    renderSettings();
    await waitForPageLoad();

    expect(screen.getByText('Configuración')).toBeInTheDocument();
    expect(screen.getByText('Perfil')).toBeInTheDocument();
    expect(screen.getByText('Apariencia')).toBeInTheDocument();
  });

  it('shows the user name in profile section', async () => {
    const name = uniqueName('SettingsUser');
    await seedUserWithProgress(name, { currentLevel: 2 });
    renderSettings();
    await waitForPageLoad();

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('has theme options', async () => {
    await seedUserWithProgress(uniqueName('ThemeUser'), { currentLevel: 1 });
    renderSettings();
    await waitForPageLoad();

    expect(screen.getByText('Oscuro')).toBeInTheDocument();
  });

  it('has sound section', async () => {
    await seedUserWithProgress(uniqueName('SoundUser'), { currentLevel: 1 });
    renderSettings();
    await waitForPageLoad();

    expect(screen.getByText('Sonido')).toBeInTheDocument();
  });

  it('has learning section with change level option', async () => {
    await seedUserWithProgress(uniqueName('LevelUser'), { currentLevel: 3 });
    renderSettings();
    await waitForPageLoad();

    expect(screen.getByText('Aprendizaje')).toBeInTheDocument();
    expect(screen.getByText('Cambiar nivel')).toBeInTheDocument();
  });

  it('has data management section', async () => {
    await seedUserWithProgress(uniqueName('DataUser'), { currentLevel: 1 });
    renderSettings();
    await waitForPageLoad();

    expect(screen.getByText('Gestión de Datos')).toBeInTheDocument();
  });
});
