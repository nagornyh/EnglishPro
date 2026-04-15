/**
 * E2E: Content Pages
 * Tests that all major content pages render without errors when accessed by a logged-in user.
 * Each page is rendered standalone (not inside Layout) to avoid Outlet timing issues.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const GrammarLessons = lazy(() => import('../../pages/GrammarLessons'));
const GrammarExplorer = lazy(() => import('../../pages/GrammarExplorer'));
const IdiomsExplorer = lazy(() => import('../../pages/IdiomsExplorer'));
const ReadingPractice = lazy(() => import('../../pages/ReadingPractice'));
const PhrasesBank = lazy(() => import('../../pages/PhrasesBank'));
const ScenarioMode = lazy(() => import('../../pages/ScenarioMode'));
const WordExplorer = lazy(() => import('../../pages/WordExplorer'));
const StoryMode = lazy(() => import('../../pages/StoryMode'));
const SentenceBank = lazy(() => import('../../pages/SentenceBank'));
const Practice = lazy(() => import('../../pages/Practice'));
const Challenges = lazy(() => import('../../pages/Challenges'));
const Collection = lazy(() => import('../../pages/Collection'));
const Notebook = lazy(() => import('../../pages/Notebook'));
const StudyPlan = lazy(() => import('../../pages/StudyPlan'));
const RegionalVariants = lazy(() => import('../../pages/RegionalVariants'));

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

async function waitForPageLoad() {
  await waitFor(() => {
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('suspense')).not.toBeInTheDocument();
  }, { timeout: 10000 });
}

beforeEach(async () => {
  resetSession();
  await seedUserWithProgress(uniqueName('ContentUser'), { currentLevel: 5, totalXP: 1000 });
});

describe('Grammar Lessons Page', () => {
  it('renders without crashing and shows grammar content', async () => {
    renderPage(<GrammarLessons />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
  });
});

describe('Grammar Explorer Page', () => {
  it('renders without crashing', async () => {
    renderPage(<GrammarExplorer />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
  });
});

describe('Idioms Explorer Page', () => {
  it('renders without crashing', async () => {
    renderPage(<IdiomsExplorer />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
  });
});

describe('Reading Practice Page', () => {
  it('renders without crashing', async () => {
    renderPage(<ReadingPractice />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
  });
});

describe('Phrases Bank Page', () => {
  it('renders without crashing', async () => {
    renderPage(<PhrasesBank />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
  });
});

describe('Scenario Mode Page', () => {
  it('renders without crashing', async () => {
    renderPage(<ScenarioMode />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
  });
});

describe('Word Explorer Page', () => {
  it('renders without crashing', async () => {
    renderPage(<WordExplorer />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
  });
});

describe('Story Mode Page', () => {
  it('renders without crashing', async () => {
    renderPage(<StoryMode />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
  });
});

describe('Sentence Bank Page', () => {
  it('renders without crashing', async () => {
    renderPage(<SentenceBank />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
  });
});

describe('Practice Page', () => {
  it('renders without crashing', async () => {
    renderPage(<Practice />, '/practice');
    await waitForPageLoad();
    // Practice page renders activity selector; even empty state is valid
    expect(document.querySelector('[role="alert"]')).toBeNull();
  }, 15000);
});

describe('Challenges Page', () => {
  it('renders without crashing', async () => {
    renderPage(<Challenges />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
  });
});

describe('Collection Page', () => {
  it('renders without crashing', async () => {
    renderPage(<Collection />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
  });
});

describe('Notebook Page', () => {
  it('renders without crashing', async () => {
    renderPage(<Notebook />);
    await waitForPageLoad();
    // Notebook may be empty for a new user with no saved notes
    expect(document.querySelector('[role="alert"]')).toBeNull();
  });
});

describe('Study Plan Page', () => {
  it('renders without crashing', async () => {
    renderPage(<StudyPlan />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
  });
});

describe('Regional Variants Page', () => {
  it('renders without crashing', async () => {
    renderPage(<RegionalVariants />);
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(30);
  });
});
