/**
 * JOURNEY TEST: Scenario Mode
 * Tests full interactive scenario flow: selection → dialogue → choices → completion.
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const ScenarioMode = lazy(() => import('../../pages/ScenarioMode'));

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
  await seedUserWithProgress(uniqueName('ScenarioUser'), { currentLevel: 5, totalXP: 1500 });
});

describe('ScenarioMode - Selection Screen', () => {
  it('shows scenario selection with title and description', async () => {
    renderPage(<ScenarioMode />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Escenarios Interactivos/);
    expect(text).toMatch(/situaciones reales/);
  });

  it('shows scenario cards with title, description, setting, and difficulty', async () => {
    renderPage(<ScenarioMode />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    // First scenario: "Ordering at a Restaurant"
    expect(text).toMatch(/Ordering at a Restaurant/);
    expect(text).toMatch(/A casual restaurant/);
    expect(text).toMatch(/Fácil/);
    // Second scenario should also be visible
    expect(text).toMatch(/min/);
  });

  it('shows scenario level badges', async () => {
    renderPage(<ScenarioMode />);
    await waitForPageLoad();

    // Scenarios have difficulty badges
    const text = document.body.textContent || '';
    expect(text).toMatch(/Fácil|Medio|Difícil/);
  });
});

describe('ScenarioMode - Dialogue Flow', () => {
  it('clicking a scenario starts the dialogue', async () => {
    const { user } = renderPage(<ScenarioMode />);
    await waitForPageLoad();

    // Click the first scenario (Restaurant)
    const restaurantBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Ordering at a Restaurant');
    });
    expect(restaurantBtns.length).toBeGreaterThan(0);
    await user.click(restaurantBtns[0]);

    // Should show the scenario context and first dialogue line
    await waitFor(() => {
      const text = document.body.textContent || '';
      // First line is narration: "You enter a restaurant..."
      expect(text).toMatch(/You enter a restaurant/);
      expect(text).toMatch(/A casual restaurant/);
    });
  });

  it('shows "← Salir" button to exit scenario', async () => {
    const { user } = renderPage(<ScenarioMode />);
    await waitForPageLoad();

    // Start scenario
    const restaurantBtns = screen.getAllByRole('button').filter(btn =>
      (btn.textContent || '').includes('Ordering at a Restaurant')
    );
    await user.click(restaurantBtns[0]);

    await waitFor(() => {
      expect(screen.getByText('← Salir')).toBeInTheDocument();
    });
  });

  it('shows score counter in dialogue header', async () => {
    const { user } = renderPage(<ScenarioMode />);
    await waitForPageLoad();

    const restaurantBtns = screen.getAllByRole('button').filter(btn =>
      (btn.textContent || '').includes('Ordering at a Restaurant')
    );
    await user.click(restaurantBtns[0]);

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Puntos/);
    });
  });

  it('"Continuar" advances to the next dialogue line', async () => {
    const { user } = renderPage(<ScenarioMode />);
    await waitForPageLoad();

    const restaurantBtns = screen.getAllByRole('button').filter(btn =>
      (btn.textContent || '').includes('Ordering at a Restaurant')
    );
    await user.click(restaurantBtns[0]);

    // First line: narration "You enter a restaurant..."
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/You enter a restaurant/);
    });

    // Click Continuar to advance
    await user.click(screen.getByText(/Continuar/));

    // Second line: waiter dialogue
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Good evening|Welcome to The Golden Fork/);
    });
  });

  it('choice dialogue shows options with "¿Qué respondes?"', async () => {
    const { user } = renderPage(<ScenarioMode />);
    await waitForPageLoad();

    const restaurantBtns = screen.getAllByRole('button').filter(btn =>
      (btn.textContent || '').includes('Ordering at a Restaurant')
    );
    await user.click(restaurantBtns[0]);

    // Advance through narration and dialogue to reach the choice
    // Line 1: narration → Continuar
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/You enter a restaurant/);
    });
    await user.click(screen.getByText(/Continuar/));

    // Line 2: waiter dialogue → Continuar
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/Good evening/);
    });
    await user.click(screen.getByText(/Continuar/));

    // Line 3: choice  
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/¿Qué respondes\?/);
      // Should show the 3 choices
      expect(text).toMatch(/Yes, please/);
      expect(text).toMatch(/Table\. Window\./);
      expect(text).toMatch(/I want food now/);
    });
  });

  it('selecting a choice shows feedback', async () => {
    const { user } = renderPage(<ScenarioMode />);
    await waitForPageLoad();

    const restaurantBtns = screen.getAllByRole('button').filter(btn =>
      (btn.textContent || '').includes('Ordering at a Restaurant')
    );
    await user.click(restaurantBtns[0]);

    // Navigate through narration and dialogue to choice
    await waitFor(() => expect(document.body.textContent).toMatch(/You enter a restaurant/));
    await user.click(screen.getByText(/Continuar/));
    await waitFor(() => expect(document.body.textContent).toMatch(/Good evening/));
    await user.click(screen.getByText(/Continuar/));

    // Wait for choices
    await waitFor(() => expect(document.body.textContent).toMatch(/¿Qué respondes\?/));

    // Click the correct choice
    const correctChoice = screen.getAllByRole('button').filter(btn =>
      (btn.textContent || '').includes('Yes, please')
    );
    expect(correctChoice.length).toBeGreaterThan(0);
    await user.click(correctChoice[0]);

    // Should show feedback "Perfect! Polite and specific."
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Perfect|Polite/);
    });
  });

  it('"← Salir" returns to scenario selection', async () => {
    const { user } = renderPage(<ScenarioMode />);
    await waitForPageLoad();

    // Start scenario
    const restaurantBtns = screen.getAllByRole('button').filter(btn =>
      (btn.textContent || '').includes('Ordering at a Restaurant')
    );
    await user.click(restaurantBtns[0]);

    await waitFor(() => {
      expect(screen.getByText('← Salir')).toBeInTheDocument();
    });

    // Click exit
    await user.click(screen.getByText('← Salir'));

    // Should return to selection view
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/Escenarios Interactivos/);
    });
  });
});
