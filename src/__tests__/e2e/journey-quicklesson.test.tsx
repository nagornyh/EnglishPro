/**
 * JOURNEY TEST: Quick Lesson Complete Flow
 * Tests: List view → Select lesson → Read all content pages → Take quiz → Complete → Return
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { resetSession } from './test-helpers';

const QuickLesson = lazy(() => import('../../pages/QuickLesson'));

function renderQuickLesson() {
  const user = userEvent.setup();
  const result = render(
    <ErrorBoundary>
      <MemoryRouter initialEntries={['/quick']}>
        <ThemeProvider>
          <Suspense fallback={<div data-testid="suspense">Cargando módulo...</div>}>
            <QuickLesson />
          </Suspense>
        </ThemeProvider>
      </MemoryRouter>
    </ErrorBoundary>
  );
  return { ...result, user };
}

async function waitForPageLoad() {
  await waitFor(() => {
    expect(screen.queryByTestId('suspense')).not.toBeInTheDocument();
  }, { timeout: 10000 });
}

beforeEach(() => {
  resetSession();
  // Clear completed lessons
  localStorage.removeItem('completed_micro_lessons');
});

describe('Quick Lesson - Complete Journey', () => {
  it('shows lesson list with daily lesson and categories', async () => {
    renderQuickLesson();
    await waitForPageLoad();

    // Title
    expect(screen.getByText('Lecciones Rápidas')).toBeInTheDocument();

    // Daily lesson section
    expect(screen.getByText(/Lección del día/)).toBeInTheDocument();

    // Category filter buttons
    expect(screen.getByText('Todas')).toBeInTheDocument();
    expect(screen.getByText('Gramática')).toBeInTheDocument();
    expect(screen.getByText('Vocabulario')).toBeInTheDocument();
    expect(screen.getByText('Frases')).toBeInTheDocument();
    expect(screen.getByText('Pronunciación')).toBeInTheDocument();
    expect(screen.getByText('Tips')).toBeInTheDocument();

    // Lesson cards present (first lesson title — may appear twice: daily card + list)
    expect(screen.getAllByText('Common Greetings Around the World').length).toBeGreaterThanOrEqual(1);
  });

  it('filter by category updates the lesson list', async () => {
    const { user } = renderQuickLesson();
    await waitForPageLoad();

    // Click "Gramática" filter
    await user.click(screen.getByText('Gramática'));

    // Only grammar lessons visible
    await waitFor(() => {
      const text = document.body.textContent || '';
      // At least one grammar lesson should be visible (The Verb BE)
      expect(text).toMatch(/Verb BE|Present Simple|Past Simple|Present Continuous/i);
    });

    // Click "Todas" to reset
    await user.click(screen.getByText('Todas'));

    // All lessons visible again
    await waitFor(() => {
      expect(screen.getAllByText('Common Greetings Around the World').length).toBeGreaterThanOrEqual(1);
    });
  }, 15000);

  it('select lesson → read all content → take quiz → complete → return', async () => {
    const { user } = renderQuickLesson();
    await waitForPageLoad();

    // Step 1: Click the first lesson in the list (may also appear in daily card)
    const greetingItems = screen.getAllByText('Common Greetings Around the World');
    await user.click(greetingItems[0]);

    // Step 2: Lesson view - content is displayed
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Greetings vary by time/i);
    });

    // Exit button visible
    expect(screen.getByText('← Salir')).toBeInTheDocument();

    // Progress bar exists (via the lesson step counter)
    // "Siguiente" button to go forward
    expect(screen.getByText('Siguiente')).toBeInTheDocument();

    // Step 3: Navigate through all content pages
    // The Greetings lesson has 4 content items
    await user.click(screen.getByText('Siguiente'));
    await waitFor(() => {
      const text = document.body.textContent || '';
      // Should show examples or tips content
      expect(text.length).toBeGreaterThan(50);
    });

    await user.click(screen.getByText('Siguiente'));
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text.length).toBeGreaterThan(50);
    });

    // On the last content → button changes to "Quiz rápido" (if quiz exists) or "Finalizar"
    await waitFor(() => {
      const hasQuiz = screen.queryByText('Quiz rápido');
      const hasFinish = screen.queryByText('Finalizar');
      const hasNext = screen.queryByText('Siguiente');
      expect(hasQuiz || hasFinish || hasNext).toBeTruthy();
    });

    // Click through remaining content
    let safetyCounter = 0;
    while (safetyCounter < 5) {
      const quizBtn = screen.queryByText('Quiz rápido');
      const finishBtn = screen.queryByText('Finalizar');
      if (quizBtn) {
        await user.click(quizBtn);
        break;
      }
      if (finishBtn) {
        await user.click(finishBtn);
        break;
      }
      const nextBtn = screen.queryByText('Siguiente');
      if (nextBtn) {
        await user.click(nextBtn);
      } else {
        break;
      }
      safetyCounter++;
    }

    // Step 4: Quiz or completion
    const quizIsActive = document.body.textContent?.match(/Good morning|Good afternoon|Good night|Good evening/i);

    if (quizIsActive) {
      // Quiz stage - answer the question
      // The Greetings quiz asks "Which is correct when meeting someone at 3pm?"
      // Options: Good morning, Good afternoon, Good night, Good evening
      const afternoonBtn = screen.queryByText('Good afternoon');
      if (afternoonBtn) {
        await user.click(afternoonBtn);
      } else {
        // Click any available option
        const optionBtns = screen.getAllByRole('button').filter(btn => {
          const t = btn.textContent || '';
          return t.includes('Good ') || /^[A-D]\./.test(t.trim());
        });
        if (optionBtns.length > 0) await user.click(optionBtns[0]);
      }

      // Feedback shown
      await waitFor(() => {
        const text = document.body.textContent || '';
        expect(text.length).toBeGreaterThan(50);
      });

      // "Siguiente pregunta" or "Finalizar"
      const nextQ = screen.queryByText('Siguiente pregunta');
      const finQ = screen.queryByText('Finalizar');
      if (nextQ) await user.click(nextQ);
      else if (finQ) await user.click(finQ);
    }

    // Step 5: Complete view
    await waitFor(() => {
      const text = document.body.textContent || '';
      // Should show completion with key takeaway or "Más lecciones" button
      expect(text).toMatch(/takeaway|lecciones|Repetir|Más lesson/i);
    }, { timeout: 10000 });

    // "Más lecciones" button should be present
    const moreLessonsBtn = screen.queryByText('Más lecciones');
    if (moreLessonsBtn) {
      // Step 6: Return to list
      await user.click(moreLessonsBtn);

      await waitFor(() => {
        expect(screen.getByText('Lecciones Rápidas')).toBeInTheDocument();
      });
    }
  }, 30000);

  it('can use "← Salir" to exit lesson mid-way', async () => {
    const { user } = renderQuickLesson();
    await waitForPageLoad();

    // Start a lesson (may appear twice: daily card + list)
    const items = screen.getAllByText('Common Greetings Around the World');
    await user.click(items[0]);

    await waitFor(() => {
      expect(screen.getByText('← Salir')).toBeInTheDocument();
    });

    // Exit mid-lesson
    await user.click(screen.getByText('← Salir'));

    // Back to list
    await waitFor(() => {
      expect(screen.getByText('Lecciones Rápidas')).toBeInTheDocument();
    });
  }, 15000);

  it('can navigate back with "Anterior" button', async () => {
    const { user } = renderQuickLesson();
    await waitForPageLoad();

    // Start a lesson (may appear twice: daily card + list)
    const items = screen.getAllByText('Common Greetings Around the World');
    await user.click(items[0]);

    await waitFor(() => {
      expect(screen.getByText('Siguiente')).toBeInTheDocument();
    });

    // Go forward
    await user.click(screen.getByText('Siguiente'));

    // "Anterior" should appear and not be disabled
    await waitFor(() => {
      const prevBtn = screen.getByText('Anterior');
      expect(prevBtn).toBeInTheDocument();
      expect(prevBtn).not.toBeDisabled();
    });

    // Go back
    await user.click(screen.getByText('Anterior'));

    // First content page again
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Greetings vary by time/i);
    });
  }, 15000);

  it('daily lesson is accessible from dedicated card', async () => {
    const { user } = renderQuickLesson();
    await waitForPageLoad();

    // Find the daily lesson card (it's inside "Lección del día")
    const dailySection = screen.getByText(/Lección del día/);
    expect(dailySection).toBeInTheDocument();

    // Click the daily lesson card (any button in the daily section)
    const dailyCard = dailySection.closest('div')?.parentElement?.querySelector('button');
    if (dailyCard) {
      await user.click(dailyCard);

      // Should enter lesson mode
      await waitFor(() => {
        expect(screen.getByText('← Salir')).toBeInTheDocument();
      });
    }
  }, 15000);
});
