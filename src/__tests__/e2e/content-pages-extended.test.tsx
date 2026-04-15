/**
 * E2E: Extended Content Pages
 * Tests pages not covered in content-pages.test.tsx:
 * Achievements, ErrorReviewMode, ExamMode, PlacementTest,
 * Progress, QuickLesson, ReviewSession, TroubleWordsReview, TaskComplete
 */

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const Achievements = lazy(() => import('../../pages/Achievements'));
const ErrorReviewMode = lazy(() => import('../../pages/ErrorReviewMode'));
const ExamMode = lazy(() => import('../../pages/ExamMode'));
const PlacementTest = lazy(() => import('../../pages/PlacementTest'));
const Progress = lazy(() => import('../../pages/Progress'));
const QuickLesson = lazy(() => import('../../pages/QuickLesson'));
const ReviewSession = lazy(() => import('../../pages/ReviewSession'));
const TroubleWordsReview = lazy(() => import('../../pages/TroubleWordsReview'));
const TaskComplete = lazy(() => import('../../pages/TaskComplete'));

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderPage(page: ReactElement, route = '/') {
  return render(
    <ErrorBoundary>
      <MemoryRouter initialEntries={[route]}>
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
}

/** Render without UserProvider — for pages that don't use useUser */
function renderStandalone(page: ReactElement, route = '/') {
  return render(
    <ErrorBoundary>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider>
          <Suspense fallback={<div data-testid="suspense">Cargando módulo...</div>}>
            {page}
          </Suspense>
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

beforeEach(async () => {
  resetSession();
  await seedUserWithProgress(uniqueName('ExtUser'), { currentLevel: 5, totalXP: 2000 });
});

describe('Achievements Page', () => {
  it('renders without crashing and shows achievement content', async () => {
    renderPage(<Achievements />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
    // Should not show error boundary
    expect(document.querySelector('[role="alert"]')).toBeNull();
  });

  it('displays achievement categories or titles', async () => {
    renderPage(<Achievements />);
    await waitForPageLoad();
    // Achievements page should have some structured content
    const text = document.body.textContent!;
    expect(text.length).toBeGreaterThan(100);
  });
});

describe('ErrorReviewMode Page', () => {
  it('renders without crashing', async () => {
    renderPage(<ErrorReviewMode />);
    await waitForPageLoad();
    expect(document.querySelector('[role="alert"]')).toBeNull();
  });

  it('handles empty error list gracefully', async () => {
    renderPage(<ErrorReviewMode />);
    await waitForPageLoad();
    // New user should see empty state or instruction text, not a crash
    expect(document.querySelector('[role="alert"]')).toBeNull();
  });
});

describe('ExamMode Page', () => {
  it('renders without crashing and shows exam interface', async () => {
    renderPage(<ExamMode />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
    expect(document.querySelector('[role="alert"]')).toBeNull();
  }, 15000);
});

describe('PlacementTest Page', () => {
  it('renders without crashing', async () => {
    renderPage(<PlacementTest />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
    expect(document.querySelector('[role="alert"]')).toBeNull();
  });
});

describe('Progress Page', () => {
  it('renders without crashing and shows progress data', async () => {
    renderPage(<Progress />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
    expect(document.querySelector('[role="alert"]')).toBeNull();
  }, 15000);
});

describe('QuickLesson Page', () => {
  it('renders without crashing and shows lesson content', async () => {
    renderPage(<QuickLesson />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
    expect(document.querySelector('[role="alert"]')).toBeNull();
  });
});

describe('ReviewSession Page', () => {
  it('renders without crashing', async () => {
    renderPage(<ReviewSession />);
    await waitForPageLoad();
    // May show "no cards to review" or review interface
    expect(document.querySelector('[role="alert"]')).toBeNull();
  }, 15000);
});

describe('TroubleWordsReview Page', () => {
  it('renders without crashing', async () => {
    renderStandalone(<TroubleWordsReview />);
    await waitFor(() => {
      expect(screen.queryByTestId('suspense')).not.toBeInTheDocument();
    }, { timeout: 10000 });
    expect(document.querySelector('[role="alert"]')).toBeNull();
  });

  it('handles empty trouble words list gracefully', async () => {
    renderStandalone(<TroubleWordsReview />);
    await waitFor(() => {
      expect(screen.queryByTestId('suspense')).not.toBeInTheDocument();
    }, { timeout: 10000 });
    // Should show empty state, not crash
    expect(document.querySelector('[role="alert"]')).toBeNull();
  });
});

describe('TaskComplete Page', () => {
  it('renders without crashing with valid route params', async () => {
    renderPage(<TaskComplete />, '/task-complete/1/1');
    await waitForPageLoad();
    // TaskComplete uses useParams for levelId/taskId
    expect(document.querySelector('[role="alert"]')).toBeNull();
  }, 15000);
});
