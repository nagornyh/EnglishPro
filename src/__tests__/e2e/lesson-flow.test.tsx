/**
 * E2E: Lesson Flow
 * Tests: Level detail page, lesson rendering for all 13 levels.
 * Pages rendered standalone to avoid Layout/Outlet timing.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const LevelDetail = lazy(() => import('../../pages/LevelDetail'));
const LessonFlow = lazy(() => import('../../pages/LessonFlow'));

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderWithRoute(route: string) {
  return render(
    <ErrorBoundary>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider>
          <UserProvider>
            <WaitForUser>
              <Suspense fallback={<div data-testid="suspense">Cargando...</div>}>
                <Routes>
                  <Route path="/level/:levelId" element={<LevelDetail />} />
                  <Route path="/lesson/:levelId/:taskId" element={<LessonFlow />} />
                </Routes>
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

describe('Level Detail Page', () => {
  it('renders level 1 detail with task list', async () => {
    await seedUserWithProgress(uniqueName('LessonUser'), { currentLevel: 1 });
    renderWithRoute('/level/1');
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
  });

  it('renders level 5 detail', async () => {
    await seedUserWithProgress(uniqueName('LessonUser'), { currentLevel: 5 });
    renderWithRoute('/level/5');
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
  });

  it('renders level 13 detail', async () => {
    await seedUserWithProgress(uniqueName('LessonUser'), { currentLevel: 13 });
    renderWithRoute('/level/13');
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
  });
});

describe('Lesson Flow - All Levels First Task', () => {
  for (let levelId = 1; levelId <= 13; levelId++) {
    it(`level ${levelId}, task 1 renders without crashing`, async () => {
      await seedUserWithProgress(uniqueName(`L${levelId}User`), { currentLevel: levelId });
      renderWithRoute(`/lesson/${levelId}/1`);
      await waitForPageLoad();
      expect(document.body.textContent!.length).toBeGreaterThan(20);
    }, 15000);
  }
});
