/**
 * E2E: Levels Page
 * Tests: Levels listing, level details, data validation.
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';
import { levels } from '../../data/levels';

const Levels = lazy(() => import('../../pages/Levels'));
const LevelDetail = lazy(() => import('../../pages/LevelDetail'));

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderLevelsPage(route = '/levels') {
  const user = userEvent.setup();
  const result = render(
    <ErrorBoundary>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider>
          <UserProvider>
            <WaitForUser>
              <Suspense fallback={<div data-testid="suspense">Cargando...</div>}>
                <Routes>
                  <Route path="/levels" element={<Levels />} />
                  <Route path="/level/:levelId" element={<LevelDetail />} />
                </Routes>
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

beforeEach(() => {
  resetSession();
});

describe('Levels Page', () => {
  it('renders all 13 levels', async () => {
    await seedUserWithProgress(uniqueName('Tester'), { currentLevel: 1 });
    renderLevelsPage();
    await waitForPageLoad();

    await waitFor(() => {
      expect(screen.getByText('Niveles de Aprendizaje')).toBeInTheDocument();
    });

    for (const level of levels) {
      expect(screen.getByText(level.name)).toBeInTheDocument();
    }
  });

  it('shows CEFR labels for each level', async () => {
    await seedUserWithProgress(uniqueName('Tester'), { currentLevel: 1 });
    renderLevelsPage();
    await waitForPageLoad();

    await waitFor(() => {
      expect(screen.getByText('Niveles de Aprendizaje')).toBeInTheDocument();
    });

    expect(screen.getAllByText('A1').length).toBeGreaterThan(0);
    expect(screen.getAllByText('B1').length).toBeGreaterThan(0);
  });

  it('can navigate to level detail', async () => {
    await seedUserWithProgress(uniqueName('Tester'), { currentLevel: 1 });
    const { user } = renderLevelsPage();
    await waitForPageLoad();

    await waitFor(() => {
      expect(screen.getByText('Niveles de Aprendizaje')).toBeInTheDocument();
    });

    await user.click(screen.getByText(levels[0].name));

    await waitFor(() => {
      expect(document.body.textContent!.length).toBeGreaterThan(50);
    }, { timeout: 5000 });
  });
});

describe('Level Data Integrity', () => {
  it('every level has at least 5 tasks', () => {
    for (const level of levels) {
      expect(level.tasks.length).toBeGreaterThanOrEqual(5);
    }
  });

  it('every level has valid CEFR designation', () => {
    const validCefr = ['A1', 'A1+', 'A2', 'B1', 'B1+', 'B2', 'B2+', 'B2+/C1', 'C1', 'C1+', 'C2', 'C2+'];
    for (const level of levels) {
      expect(validCefr).toContain(level.cefrLevel);
    }
  });

  it('levels are numbered sequentially 1-13', () => {
    for (let i = 0; i < levels.length; i++) {
      expect(levels[i].id).toBe(i + 1);
    }
    expect(levels.length).toBe(13);
  });

  it('every task has vocabulary', () => {
    for (const level of levels) {
      for (const task of level.tasks) {
        const totalWords = task.vocabulary.nouns.length +
          task.vocabulary.verbs.length +
          task.vocabulary.adjectives.length +
          task.vocabulary.adverbs.length +
          task.vocabulary.expressions.length +
          task.vocabulary.prepositions.length;
        expect(totalWords).toBeGreaterThan(0);
      }
    }
  });

  it('every task has an introduction with explanation', () => {
    for (const level of levels) {
      for (const task of level.tasks) {
        expect(task.introduction).toBeDefined();
        expect(task.introduction!.explanation).toBeTruthy();
        expect(task.introduction!.keyPoints.length).toBeGreaterThan(0);
      }
    }
  });
});
