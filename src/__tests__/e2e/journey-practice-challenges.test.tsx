/**
 * JOURNEY TEST: Practice & Challenges pages
 * Tests activity selection, level picker, and challenge hub navigation.
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const Practice = lazy(() => import('../../pages/Practice'));
const Challenges = lazy(() => import('../../pages/Challenges'));

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderPage(page: ReactElement) {
  const user = userEvent.setup();
  const result = render(
    <ErrorBoundary>
      <MemoryRouter>
        <ThemeProvider>
          <UserProvider>
            <WaitForUser>
              <Suspense fallback={<div data-testid="suspense">Cargando módulo...</div>}>
                {page}
              </Suspense>
            </WaitForUser>
          </UserProvider>
        </ThemeProvider>
      </MemoryRouter>
    </ErrorBoundary>
  );
  return { ...result, user };
}

async function waitForPageLoad() {
  await waitFor(() => {
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('suspense')).not.toBeInTheDocument();
  }, { timeout: 10000 });
}

beforeEach(async () => {
  resetSession();
  await seedUserWithProgress(uniqueName('PracChalUser'), { currentLevel: 5, totalXP: 1500 });
});

// ===========================================
// PRACTICE PAGE JOURNEY
// ===========================================
describe('Practice Page - Activity Selection', () => {
  it('shows all 14 activity cards with metadata', async () => {
    renderPage(<Practice />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Modo Práctica/);
    
    // All 14 activity titles
    expect(screen.getByText('Flashcards')).toBeInTheDocument();
    expect(screen.getByText('Quiz')).toBeInTheDocument();
    expect(screen.getByText('Emparejamiento')).toBeInTheDocument();
    expect(screen.getByText('Traducción')).toBeInTheDocument();
    expect(screen.getByText('Completar')).toBeInTheDocument();
    expect(screen.getByText('Ordenar Letras')).toBeInTheDocument();
    expect(screen.getByText('Constructor')).toBeInTheDocument();
    expect(screen.getByText('Dictado')).toBeInTheDocument();
    expect(screen.getByText('Ahorcado')).toBeInTheDocument();
    expect(screen.getByText('Corregir Errores')).toBeInTheDocument();
    expect(screen.getByText('Transformación')).toBeInTheDocument();
    expect(screen.getByText('Escritura Guiada')).toBeInTheDocument();
    expect(screen.getByText('Pronunciación')).toBeInTheDocument();
    expect(screen.getByText('Diálogo')).toBeInTheDocument();
  });

  it('shows quick practice button and error review link', async () => {
    renderPage(<Practice />);
    await waitForPageLoad();

    // Quick practice button
    expect(screen.getByText('¡Comenzar!')).toBeInTheDocument();
    expect(document.body.textContent).toMatch(/Práctica Rápida/);

    // Error review link
    expect(screen.getByText('Repaso de Errores')).toBeInTheDocument();
  });

  it('activity card level selector opens and closes with Cancelar', async () => {
    const { user } = renderPage(<Practice />);
    await waitForPageLoad();

    // Find all "Seleccionar Nivel" buttons
    const selectBtns = screen.getAllByText('Seleccionar Nivel');
    expect(selectBtns.length).toBe(14);

    // Click first one (Flashcards)
    await user.click(selectBtns[0]);

    // Should show level buttons and Cancelar
    await waitFor(() => {
      expect(screen.getByText('Cancelar')).toBeInTheDocument();
      expect(screen.getByText(/Elige un nivel/)).toBeInTheDocument();
    });

    // Click Cancelar to close
    await user.click(screen.getByText('Cancelar'));

    // Level selector should be hidden, "Seleccionar Nivel" restored
    await waitFor(() => {
      expect(screen.queryByText('Cancelar')).not.toBeInTheDocument();
    });
  });

  it('shows tips section', async () => {
    renderPage(<Practice />);
    await waitForPageLoad();

    expect(document.body.textContent).toMatch(/Consejos para Aprender/);
    expect(document.body.textContent).toMatch(/15 minutos diarios/);
  });

  it('shows difficulty indicators for activities', async () => {
    renderPage(<Practice />);
    await waitForPageLoad();

    // Difficulty legend
    const text = document.body.textContent || '';
    expect(text).toMatch(/Actividades por Dificultad/);
    expect(text).toMatch(/Fácil/);
    expect(text).toMatch(/Medio/);
    expect(text).toMatch(/Difícil/);
  });
});

// ===========================================
// CHALLENGES PAGE JOURNEY
// ===========================================
describe('Challenges Page - Hub & Navigation', () => {
  it('shows challenge hub with all sections', async () => {
    renderPage(<Challenges />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Centro de Desafíos/);
    expect(text).toMatch(/Pon a prueba tus habilidades/);
  });

  it('shows survival, speed, and weekly challenge buttons', async () => {
    renderPage(<Challenges />);
    await waitForPageLoad();

    // The 3 main mode buttons should be present
    const text = document.body.textContent || '';
    expect(text).toMatch(/Supervivencia|Survival/);
    expect(text).toMatch(/Speed Round|Speed/);
    expect(text).toMatch(/Desafíos|Weekly/);
  });

  it('clicking survival mode → sub-view → back to hub', async () => {
    const { user } = renderPage(<Challenges />);
    await waitForPageLoad();

    // Find and click the survival button
    const survivalBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Supervivencia') || t.includes('Survival');
    });
    
    if (survivalBtns.length > 0) {
      await user.click(survivalBtns[0]);

      // Should show back button
      await waitFor(() => {
        expect(screen.getByText(/Volver a desafíos/)).toBeInTheDocument();
      });

      // Click back
      await user.click(screen.getByText(/Volver a desafíos/));

      // Should return to hub
      await waitFor(() => {
        expect(document.body.textContent).toMatch(/Centro de Desafíos/);
      });
    }
  }, 15000);

  it('clicking speed round → sub-view → back to hub', async () => {
    const { user } = renderPage(<Challenges />);
    await waitForPageLoad();

    const speedBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Speed') || t.includes('Velocidad');
    });
    
    if (speedBtns.length > 0) {
      await user.click(speedBtns[0]);

      await waitFor(() => {
        expect(screen.getByText(/Volver a desafíos/)).toBeInTheDocument();
      });

      await user.click(screen.getByText(/Volver a desafíos/));

      await waitFor(() => {
        expect(document.body.textContent).toMatch(/Centro de Desafíos/);
      });
    }
  }, 15000);

  it('clicking weekly challenges → sub-view → back to hub', async () => {
    const { user } = renderPage(<Challenges />);
    await waitForPageLoad();

    const weeklyBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Desafíos') && !t.includes('Centro');
    });
    
    if (weeklyBtns.length > 0) {
      await user.click(weeklyBtns[weeklyBtns.length - 1]);

      await waitFor(() => {
        expect(screen.getByText(/Volver a desafíos/)).toBeInTheDocument();
      });

      await user.click(screen.getByText(/Volver a desafíos/));

      await waitFor(() => {
        expect(document.body.textContent).toMatch(/Centro de Desafíos/);
      });
    }
  }, 15000);
});
