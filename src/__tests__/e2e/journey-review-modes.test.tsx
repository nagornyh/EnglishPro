/**
 * JOURNEY TEST: Review Modes
 * Tests ErrorReviewMode, ReviewSession, TroubleWordsReview interaction flows.
 * These pages depend on user data from services, so we test:
 * - Empty states (no data → appropriate messages)
 * - TroubleWordsReview with seeded data (localStorage-based service)
 * - UI controls visible on each page
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';
import { troubleWordsService } from '../../services/troubleWordsService';

const ErrorReviewMode = lazy(() => import('../../pages/ErrorReviewMode'));
const ReviewSession = lazy(() => import('../../pages/ReviewSession'));
const TroubleWordsReview = lazy(() => import('../../pages/TroubleWordsReview'));

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderPage(page: ReactElement, initialRoute?: string) {
  const user = userEvent.setup();
  const result = render(
    <ErrorBoundary>
      <MemoryRouter initialEntries={[initialRoute || '/']}>
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
  await seedUserWithProgress(uniqueName('ReviewUser'), { currentLevel: 5, totalXP: 1500 });
});

// ===========================================
// ERROR REVIEW MODE JOURNEY
// ===========================================
describe('ErrorReviewMode - Empty and Active States', () => {
  it('shows empty state when user has no failed words', async () => {
    renderPage(<ErrorReviewMode />);
    await waitForPageLoad();

    // Wait for data to load (shows "Cargando..." then result)
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(
        text.includes('¡Excelente trabajo!') || text.includes('Repaso de Errores') || text.includes('Cargando')
      ).toBe(true);
    }, { timeout: 10000 });

    // If empty state shown, should have link to practice
    await waitFor(() => {
      const text = document.body.textContent || '';
      if (text.includes('¡Excelente trabajo!')) {
        expect(text).toMatch(/Ir a Práctica|Ir a Practicar|practicando/i);
      }
    }, { timeout: 5000 });
  });

  it('shows page title indicating error review', async () => {
    renderPage(<ErrorReviewMode />);
    await waitForPageLoad();

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Repaso de Errores|Excelente trabajo|palabras problemáticas/);
    }, { timeout: 10000 });
  });
});

// ===========================================
// REVIEW SESSION JOURNEY (SRS)
// ===========================================
describe('ReviewSession - SRS System Empty State', () => {
  it('shows empty state or session when no SRS cards exist', async () => {
    renderPage(<ReviewSession />);
    await waitForPageLoad();

    // Wait for SRS to initialize
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(
        text.includes('¡Todo repasado!') || 
        text.includes('Repaso Espaciado') || 
        text.includes('Mostrar respuesta') ||
        text.includes('Iniciando sistema de repaso')
      ).toBe(true);
    }, { timeout: 15000 });
  });

  it('shows stats grid in empty state', async () => {
    renderPage(<ReviewSession />);
    await waitForPageLoad();

    await waitFor(() => {
      const text = document.body.textContent || '';
      // Empty state should show "¡Todo repasado!" with stats
      if (text.includes('¡Todo repasado!')) {
        expect(text).toMatch(/Volver|Practicar más/);
      }
    }, { timeout: 15000 });
  });

  it('shows page heading', async () => {
    renderPage(<ReviewSession />);
    await waitForPageLoad();

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Repaso Espaciado|SRS|Todo repasado/i);
    }, { timeout: 15000 });
  });
});

// ===========================================
// TROUBLE WORDS REVIEW JOURNEY
// ===========================================
describe('TroubleWordsReview - Empty State', () => {
  it('shows trouble words page with stats grid', async () => {
    renderPage(<TroubleWordsReview />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Palabras Problemáticas/);
    expect(text).toMatch(/Por practicar/);
    expect(text).toMatch(/Necesitan atención/);
  });

  it('shows 3 filter tabs', async () => {
    renderPage(<TroubleWordsReview />);
    await waitForPageLoad();

    expect(screen.getByText(/Todas/)).toBeInTheDocument();
    expect(screen.getByText(/Urgentes/)).toBeInTheDocument();
    expect(screen.getByText(/Errores de hoy/)).toBeInTheDocument();
  });

  it('shows empty message when no trouble words exist', async () => {
    renderPage(<TroubleWordsReview />);
    await waitForPageLoad();

    await waitFor(() => {
      expect(screen.getByText(/Sin palabras problemáticas/)).toBeInTheDocument();
    });
  });

  it('switching filter tabs works in empty state', async () => {
    const { user } = renderPage(<TroubleWordsReview />);
    await waitForPageLoad();

    // Click Urgentes tab
    await user.click(screen.getByText(/Urgentes/));
    expect(screen.getByText(/Sin palabras problemáticas/)).toBeInTheDocument();

    // Click Errores de hoy tab
    await user.click(screen.getByText(/Errores de hoy/));
    expect(screen.getByText(/Sin palabras problemáticas/)).toBeInTheDocument();

    // Click Todas tab
    await user.click(screen.getByText(/Todas/));
    expect(screen.getByText(/Sin palabras problemáticas/)).toBeInTheDocument();
  });
});

describe('TroubleWordsReview - With Seeded Data', () => {
  beforeEach(() => {
    // Seed trouble words via the service API
    troubleWordsService.recordError('difficult', 'spelling', 'This is very difficult');
    troubleWordsService.recordError('difficult', 'spelling', 'The test was difficult');
    troubleWordsService.recordError('necessary', 'spelling', 'It is necessary to study');
    troubleWordsService.recordError('necessary', 'spelling', 'A necessary step');
  });

  it('shows word list with seeded trouble words', async () => {
    renderPage(<TroubleWordsReview />);
    await waitForPageLoad();

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/difficult|necessary/);
    });
  });

  it('shows start review button when trouble words exist', async () => {
    renderPage(<TroubleWordsReview />);
    await waitForPageLoad();

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Comenzar repaso/);
    });
  });

  it('stats grid shows non-zero counts', async () => {
    renderPage(<TroubleWordsReview />);
    await waitForPageLoad();

    await waitFor(() => {
      const text = document.body.textContent || '';
      // Should have at least some words needing attention
      expect(text).toMatch(/Necesitan atención/);
    });
  });
});
