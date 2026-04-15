/**
 * JOURNEY TEST: StoryMode & GrammarLessons
 * Tests full multi-stage user flows through stories and grammar lessons.
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const StoryMode = lazy(() => import('../../pages/StoryMode'));
const GrammarLessons = lazy(() => import('../../pages/GrammarLessons'));

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
  await seedUserWithProgress(uniqueName('StoryGramUser'), { currentLevel: 5, totalXP: 1500 });
});

// ===========================================
// STORY MODE JOURNEY
// ===========================================
describe('Story Mode - Complete Journey', () => {
  it('shows story selection with two stories and metadata', async () => {
    renderPage(<StoryMode />);
    await waitForPageLoad();

    expect(screen.getByText('📚 Modo Historia')).toBeInTheDocument();
    expect(screen.getByText('The Coffee Shop Adventure')).toBeInTheDocument();
    expect(screen.getByText('The Mystery Letter')).toBeInTheDocument();

    // CEFR level badges
    const text = document.body.textContent || '';
    expect(text).toMatch(/A1/);
    expect(text).toMatch(/A2/);
    expect(text).toMatch(/capítulos/);
    expect(text).toMatch(/XP/);
  });

  it('select story → read paragraphs → navigate next/prev', async () => {
    const { user } = renderPage(<StoryMode />);
    await waitForPageLoad();

    // Click "The Coffee Shop Adventure"
    await user.click(screen.getByText('The Coffee Shop Adventure'));

    // Should show first paragraph of chapter 1
    await waitFor(() => {
      expect(screen.getByText(/Monday morning/)).toBeInTheDocument();
    });

    // Should show chapter header
    expect(document.body.textContent).toMatch(/Capítulo 1/);
    expect(screen.getByText(/Entering the Shop/)).toBeInTheDocument();

    // Click "Siguiente" to next paragraph
    await user.click(screen.getByText('Siguiente'));
    await waitFor(() => {
      expect(screen.getByText(/Good morning/)).toBeInTheDocument();
    });

    // Click "Anterior" to go back
    await user.click(screen.getByText(/Anterior/));
    await waitFor(() => {
      expect(screen.getByText(/Monday morning/)).toBeInTheDocument();
    });
  }, 20000);

  it('read all paragraphs → vocabulary → questions → complete chapter', async () => {
    const { user } = renderPage(<StoryMode />);
    await waitForPageLoad();

    // Select story
    await user.click(screen.getByText('The Coffee Shop Adventure'));
    await waitFor(() => {
      expect(screen.getByText(/Monday morning/)).toBeInTheDocument();
    });

    // Navigate through all 7 paragraphs (click Siguiente 6 times)
    for (let i = 0; i < 6; i++) {
      const nextBtn = screen.queryByText('Siguiente');
      if (nextBtn) {
        await user.click(nextBtn);
        await waitFor(() => {
          expect(document.body.textContent!.length).toBeGreaterThan(50);
        });
      }
    }

    // At end of paragraphs, should show "Ver Vocabulario"
    await waitFor(() => {
      expect(screen.getByText(/Ver Vocabulario/)).toBeInTheDocument();
    });

    // Click "Ver Vocabulario"
    await user.click(screen.getByText(/Ver Vocabulario/));

    // Should show vocabulary words
    await waitFor(() => {
      expect(screen.getAllByText('barista').length).toBeGreaterThan(0);
      expect(screen.getByText('size')).toBeInTheDocument();
      expect(screen.getByText('muffin')).toBeInTheDocument();
    });

    // Click "Continuar a Preguntas"
    await user.click(screen.getByText(/Continuar a Preguntas/));

    // Should show comprehension questions
    await waitFor(() => {
      expect(screen.getByText(/What day is it/)).toBeInTheDocument();
    });

    // Answer question 1: Monday (index 1)
    const mondayBtns = screen.getAllByText('Monday');
    await user.click(mondayBtns[0]);

    // Answer question 2: Medium (index 1)
    await user.click(screen.getByText('Medium'));

    // Complete chapter
    await user.click(screen.getByText('Completar Capítulo'));

    // Should show chapter completion
    await waitFor(() => {
      expect(screen.getByText(/Capítulo Completado/)).toBeInTheDocument();
      expect(document.body.textContent).toMatch(/XP/);
    });
  }, 30000);

  it('complete chapter → next chapter available', async () => {
    const { user } = renderPage(<StoryMode />);
    await waitForPageLoad();

    await user.click(screen.getByText('The Coffee Shop Adventure'));
    await waitFor(() => {
      expect(screen.getByText(/Monday morning/)).toBeInTheDocument();
    });

    // Quick navigate to end of chapter
    for (let i = 0; i < 6; i++) {
      const nextBtn = screen.queryByText('Siguiente');
      if (nextBtn) await user.click(nextBtn);
    }

    await waitFor(() => { expect(screen.getByText(/Ver Vocabulario/)).toBeInTheDocument(); });
    await user.click(screen.getByText(/Ver Vocabulario/));
    await waitFor(() => { expect(screen.getAllByText('barista').length).toBeGreaterThan(0); });
    await user.click(screen.getByText(/Continuar a Preguntas/));
    await waitFor(() => { expect(screen.getByText(/What day is it/)).toBeInTheDocument(); });

    // Answer both
    await user.click(screen.getAllByText('Monday')[0]);
    await user.click(screen.getByText('Medium'));
    await user.click(screen.getByText('Completar Capítulo'));

    await waitFor(() => {
      expect(screen.getByText(/Capítulo Completado/)).toBeInTheDocument();
    });

    // Click "Siguiente Capítulo"
    await user.click(screen.getByText(/Siguiente Capítulo/));

    // Should show chapter 2
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/Capítulo 2/);
      expect(screen.getByText(/A New Friend/)).toBeInTheDocument();
    });
  }, 30000);

  it('back button from story returns to selection', async () => {
    const { user } = renderPage(<StoryMode />);
    await waitForPageLoad();

    await user.click(screen.getByText('The Coffee Shop Adventure'));
    await waitFor(() => {
      expect(screen.getByText(/Monday morning/)).toBeInTheDocument();
    });

    // Find and click back button (ChevronLeft)
    const backBtns = screen.getAllByRole('button').filter(btn => {
      const svg = btn.querySelector('.lucide-chevron-left');
      return svg !== null;
    });
    if (backBtns.length > 0) {
      await user.click(backBtns[0]);
    }

    await waitFor(() => {
      expect(screen.getByText('📚 Modo Historia')).toBeInTheDocument();
    });
  }, 15000);

  it('vocabulary quick access button opens vocab from reading view', async () => {
    const { user } = renderPage(<StoryMode />);
    await waitForPageLoad();

    await user.click(screen.getByText('The Coffee Shop Adventure'));
    await waitFor(() => {
      expect(screen.getByText(/Monday morning/)).toBeInTheDocument();
    });

    // Click quick vocabulary access
    const vocabQuickBtn = screen.getByText(/Ver vocabulario de este capítulo/);
    expect(vocabQuickBtn).toBeInTheDocument();
    await user.click(vocabQuickBtn);

    await waitFor(() => {
      expect(screen.getAllByText('barista').length).toBeGreaterThan(0);
    });

    // Return to story
    await user.click(screen.getByText('Volver a la historia'));
    await waitFor(() => {
      expect(screen.getByText(/Monday morning/)).toBeInTheDocument();
    });
  }, 15000);
});

// ===========================================
// GRAMMAR LESSONS JOURNEY
// ===========================================
describe('Grammar Lessons - Complete Journey', () => {
  it('shows lesson list grouped by category', async () => {
    renderPage(<GrammarLessons />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Lecciones de Gramática/);
    expect(text).toMatch(/Verb Tenses|Tiempos Verbales/);
    expect(text).toMatch(/Present Simple/);
    expect(text).toMatch(/Present Continuous/);
    expect(text).toMatch(/Past Simple/);
  });

  it('select lesson → navigate through sections → reach exercises', async () => {
    const { user } = renderPage(<GrammarLessons />);
    await waitForPageLoad();

    // Click "Present Simple"
    await user.click(screen.getByText('Present Simple'));

    // Should show lesson content with sections
    await waitFor(() => {
      expect(screen.getAllByText(/Present Simple/).length).toBeGreaterThan(0);
      expect(screen.getByText(/Presente Simple/)).toBeInTheDocument();
    });

    // Progress dots should be visible
    const text = document.body.textContent || '';
    expect(text).toMatch(/Siguiente|Anterior|Practicar/);

    // Navigate through sections (Present Simple has 5 sections)
    for (let i = 0; i < 4; i++) {
      const nextBtn = screen.queryByText('Siguiente');
      if (nextBtn) {
        await user.click(nextBtn);
        await waitFor(() => {
          expect(document.body.textContent!.length).toBeGreaterThan(50);
        });
      }
    }

    // At last section, should show "Practicar" button
    await waitFor(() => {
      expect(screen.getByText(/Practicar/)).toBeInTheDocument();
    });
  }, 20000);

  it('full flow: lesson → sections → exercises → results → return', async () => {
    const { user } = renderPage(<GrammarLessons />);
    await waitForPageLoad();

    // Select lesson
    await user.click(screen.getByText('Present Simple'));
    await waitFor(() => {
      expect(screen.getByText(/Presente Simple/)).toBeInTheDocument();
    });

    // Navigate to last section
    for (let i = 0; i < 10; i++) {
      const nextBtn = screen.queryByText('Siguiente');
      if (nextBtn) {
        await user.click(nextBtn);
      } else break;
    }

    // Click "Practicar"
    await waitFor(() => {
      expect(screen.getByText(/Practicar/)).toBeInTheDocument();
    });
    await user.click(screen.getByText(/Practicar/));

    // Exercises view - Present Simple has 3 exercises
    await waitFor(() => {
      expect(screen.getByText(/Ejercicios/)).toBeInTheDocument();
      expect(screen.getByText(/She ___ to school every day/)).toBeInTheDocument();
    });

    // Answer exercise 1: "goes"
    await user.click(screen.getByText('goes'));

    // Answer exercise 2: "drink"
    await user.click(screen.getByText('drink'));

    // Answer exercise 3: "Does"
    await user.click(screen.getByText('Does'));

    // Click "Ver Resultados"
    await user.click(screen.getByText('Ver Resultados'));

    // Results view
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Bien hecho|Sigue practicando/);
      expect(text).toMatch(/de 3 correctas/);
    });

    // "Volver a Lecciones"
    await user.click(screen.getByText('Volver a Lecciones'));

    // Back to list
    await waitFor(() => {
      expect(screen.getByText('Present Simple')).toBeInTheDocument();
      expect(screen.getByText('Present Continuous')).toBeInTheDocument();
    });
  }, 25000);

  it('"← Volver" from lesson returns to list', async () => {
    const { user } = renderPage(<GrammarLessons />);
    await waitForPageLoad();

    await user.click(screen.getByText('Present Simple'));
    await waitFor(() => {
      expect(screen.getByText(/Presente Simple/)).toBeInTheDocument();
    });

    await user.click(screen.getByText('← Volver'));

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Lecciones de Gramática/);
    });
  }, 15000);

  it('"Repetir Lección" resets to first section', async () => {
    const { user } = renderPage(<GrammarLessons />);
    await waitForPageLoad();

    // Go through lesson + exercises + results quickly
    await user.click(screen.getByText('Present Simple'));
    await waitFor(() => { expect(screen.getByText(/Presente Simple/)).toBeInTheDocument(); });

    for (let i = 0; i < 10; i++) {
      const nextBtn = screen.queryByText('Siguiente');
      if (nextBtn) await user.click(nextBtn); else break;
    }

    await waitFor(() => { expect(screen.getByText(/Practicar/)).toBeInTheDocument(); });
    await user.click(screen.getByText(/Practicar/));
    await waitFor(() => { expect(screen.getByText(/Ejercicios/)).toBeInTheDocument(); });

    await user.click(screen.getByText('goes'));
    await user.click(screen.getByText('drink'));
    await user.click(screen.getByText('Does'));
    await user.click(screen.getByText('Ver Resultados'));

    await waitFor(() => { expect(screen.getByText(/correctas/)).toBeInTheDocument(); });

    // Click "Repetir Lección"
    await user.click(screen.getByText('Repetir Lección'));

    // Should be back to first section
    await waitFor(() => {
      expect(screen.getAllByText(/Present Simple/).length).toBeGreaterThan(0);
      // Should show the explanation section
      expect(document.body.textContent).toMatch(/hábitos|rutinas/);
    });
  }, 25000);

  it('"Anterior" disabled on first section, navigates back on later sections', async () => {
    const { user } = renderPage(<GrammarLessons />);
    await waitForPageLoad();

    await user.click(screen.getByText('Present Simple'));
    await waitFor(() => { expect(screen.getByText(/Presente Simple/)).toBeInTheDocument(); });

    // "Anterior" should be disabled on first section
    const prevBtn = screen.getByText('Anterior');
    expect(prevBtn).toBeDisabled();

    // Navigate forward
    await user.click(screen.getByText('Siguiente'));

    // "Anterior" should now be enabled
    await waitFor(() => {
      expect(screen.getByText('Anterior')).toBeEnabled();
    });

    // Navigate back
    await user.click(screen.getByText('Anterior'));
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/hábitos|rutinas/);
    });
  }, 15000);
});
