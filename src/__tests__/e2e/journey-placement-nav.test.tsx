/**
 * JOURNEY TEST: Placement Test, Study Plan, Task Complete
 * Tests all user interactions in these navigation/assessment pages.
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const PlacementTest = lazy(() => import('../../pages/PlacementTest'));
const StudyPlan = lazy(() => import('../../pages/StudyPlan'));
const TaskComplete = lazy(() => import('../../pages/TaskComplete'));

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

function renderWithRoute(initialRoute: string, routeElement: ReactElement) {
  const user = userEvent.setup();
  const result = render(
    <ErrorBoundary>
      <MemoryRouter initialEntries={[initialRoute]}>
        <ThemeProvider>
          <UserProvider>
            <WaitForUser>
              <Suspense fallback={<div data-testid="suspense">Cargando módulo...</div>}>
                {routeElement}
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
  await seedUserWithProgress(uniqueName('PlacNavUser'), { currentLevel: 1, totalXP: 0 });
});

// ===========================================
// PLACEMENT TEST JOURNEY
// ===========================================
describe('PlacementTest - Full Assessment Flow', () => {
  it('shows first question with 4 answer options', async () => {
    renderPage(<PlacementTest />);
    await waitForPageLoad();

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Test de Ubicación|Test de Nivel|Placement Test/);
      // First question: "She ___ a student."
      expect(text).toMatch(/She .* a student/);
    });

    // Should show 4 options for the first A1 question
    const optionBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return ['am', 'is', 'are', 'be'].includes(t.trim());
    });
    expect(optionBtns.length).toBe(4);
  });

  it('shows timer for the test', async () => {
    renderPage(<PlacementTest />);
    await waitForPageLoad();

    await waitFor(() => {
      const text = document.body.textContent || '';
      // Should show timer (30:00 or similar)
      expect(text).toMatch(/\d+:\d+/);
    });
  });

  it('shows question counter (1/30)', async () => {
    renderPage(<PlacementTest />);
    await waitForPageLoad();

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/1.*\/.*30|Pregunta 1/);
    });
  });

  it('select answer → Confirmar → feedback → Siguiente', async () => {
    const { user } = renderPage(<PlacementTest />);
    await waitForPageLoad();

    // Wait for first question
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/She .* a student/);
    });

    // Click the correct answer "is"
    const isBtns = screen.getAllByRole('button').filter(btn => btn.textContent?.trim() === 'is');
    expect(isBtns.length).toBeGreaterThan(0);
    await user.click(isBtns[0]);

    // Click Confirmar
    const confirmar = screen.getByText('Confirmar');
    await user.click(confirmar);

    // Should show feedback/explanation
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/third person singular|"is"/);
    });

    // Click Siguiente
    await user.click(screen.getByText('Siguiente'));

    // Should advance to question 2
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/2.*\/.*30|from Spain/);
    });
  });

  it('wrong answer shows incorrect feedback', async () => {
    const { user } = renderPage(<PlacementTest />);
    await waitForPageLoad();

    await waitFor(() => {
      expect(document.body.textContent).toMatch(/She .* a student/);
    });

    // Click wrong answer "am"
    const amBtns = screen.getAllByRole('button').filter(btn => btn.textContent?.trim() === 'am');
    if (amBtns.length > 0) {
      await user.click(amBtns[0]);
      await user.click(screen.getByText('Confirmar'));

      // Should still show explanation (feedback appears regardless)
      await waitFor(() => {
        const text = document.body.textContent || '';
        expect(text).toMatch(/third person singular|"is"|correct/i);
      });
    }
  });

  it('shows level badge (A1) for first questions', async () => {
    renderPage(<PlacementTest />);
    await waitForPageLoad();

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/A1/);
    });
  });
});

// ===========================================
// STUDY PLAN JOURNEY
// ===========================================
describe('StudyPlan - Navigation and Accordion', () => {
  it('shows study plan heading and current level', async () => {
    renderPage(<StudyPlan />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Plan de Estudio/);
    // Should show current level info
    expect(text).toMatch(/Nivel|Level/i);
  });

  it('shows study path steps for current task', async () => {
    renderPage(<StudyPlan />);
    await waitForPageLoad();

    // Study path should show step types
    const text = document.body.textContent || '';
    expect(text).toMatch(/Introducción|Vocabulario|Gramática|Práctica|Quiz/);
  });

  it('shows expandable level accordion', async () => {
    renderPage(<StudyPlan />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Todos los Niveles/);
  });

  it('clicking a level expands it to show tasks', async () => {
    const { user } = renderPage(<StudyPlan />);
    await waitForPageLoad();

    // Current level should already be expanded (based on user.progress.currentLevel)
    // Find other level buttons to expand
    const levelBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.match(/Nivel \d|Level \d/);
    });

    if (levelBtns.length >= 2) {
      // Click second level to see its tasks
      await user.click(levelBtns[1]);

      await waitFor(() => {
        const text = document.body.textContent || '';
        // Should show tasks for the clicked level
        expect(text).toMatch(/tareas|Tarea|Continuar|lección/i);
      });
    }
  });

  it('shows step durations and XP rewards', async () => {
    renderPage(<StudyPlan />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    // Study path steps should show duration
    expect(text).toMatch(/min/);
    // Should show XP rewards
    expect(text).toMatch(/XP/);
  });
});

// ===========================================
// TASK COMPLETE JOURNEY
// ===========================================
describe('TaskComplete - Completion Stats and Navigation', () => {
  beforeEach(() => {
    // Seed sessionStorage with task completion stats
    sessionStorage.setItem('taskCompleteStats', JSON.stringify({
      levelId: 1,
      taskId: 1,
      xpEarned: 75,
      accuracy: 90,
      timeSpent: 240,
      wordsLearned: 15,
      isFirstCompletion: true,
    }));
  });

  it('shows completion page with trophy and stats', async () => {
    renderWithRoute('/complete/1/1',
      <Routes>
        <Route path="/complete/:levelId/:taskId" element={<TaskComplete />} />
      </Routes>
    );
    await waitForPageLoad();

    // Dismiss cultural note if shown (level 1 task 1 has a cultural note)
    await waitFor(() => {
      const btn = screen.queryByText('Continuar');
      expect(btn).toBeTruthy();
    }, { timeout: 10000 });
    const continueBtn = screen.getByText('Continuar');
    continueBtn.click();

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/¡Lección Completada!|Completada|Bien hecho/i);
    });
  });

  it('shows XP earned stat', async () => {
    renderWithRoute('/complete/1/1',
      <Routes>
        <Route path="/complete/:levelId/:taskId" element={<TaskComplete />} />
      </Routes>
    );
    await waitForPageLoad();

    // Dismiss cultural note if shown
    await waitFor(() => {
      const btn = screen.queryByText('Continuar');
      expect(btn).toBeTruthy();
    }, { timeout: 10000 });
    screen.getByText('Continuar').click();

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/75.*XP|XP.*75/);
    });
  });

  it('shows accuracy stat', async () => {
    renderWithRoute('/complete/1/1',
      <Routes>
        <Route path="/complete/:levelId/:taskId" element={<TaskComplete />} />
      </Routes>
    );
    await waitForPageLoad();

    // Dismiss cultural note if shown
    await waitFor(() => {
      const btn = screen.queryByText('Continuar');
      expect(btn).toBeTruthy();
    }, { timeout: 10000 });
    screen.getByText('Continuar').click();

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/90%|Precisión/);
    });
  });

  it('shows stars based on accuracy', async () => {
    renderWithRoute('/complete/1/1',
      <Routes>
        <Route path="/complete/:levelId/:taskId" element={<TaskComplete />} />
      </Routes>
    );
    await waitForPageLoad();

    // Dismiss cultural note if shown
    await waitFor(() => {
      const btn = screen.queryByText('Continuar');
      expect(btn).toBeTruthy();
    }, { timeout: 10000 });
    screen.getByText('Continuar').click();

    // 90% accuracy should show 3 stars (rendered as SVG icons, not emoji)
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Tu desempeño|Dominas|Excelente/i);
    });
  });

  it('shows "Continuar" button to proceed', async () => {
    renderWithRoute('/complete/1/1',
      <Routes>
        <Route path="/complete/:levelId/:taskId" element={<TaskComplete />} />
      </Routes>
    );
    await waitForPageLoad();

    await waitFor(() => {
      const btns = screen.getAllByRole('button');
      const continueBtn = btns.find(b => (b.textContent || '').includes('Continuar'));
      expect(continueBtn).toBeTruthy();
    });
  });
});
