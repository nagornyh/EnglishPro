/**
 * JOURNEY TEST: Exam Mode Complete Flow
 * Tests the full exam journey: Select level → Answer questions → Navigate → Finish → Results
 * Verifies: question generation, answering, navigation, grading, XP award, results display
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const ExamMode = lazy(() => import('../../pages/ExamMode'));

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderExam() {
  const user = userEvent.setup();
  const result = render(
    <ErrorBoundary>
      <MemoryRouter initialEntries={['/exam']}>
        <ThemeProvider>
          <UserProvider>
            <WaitForUser>
              <Suspense fallback={<div data-testid="suspense">Cargando módulo...</div>}>
                <ExamMode />
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
  await seedUserWithProgress(uniqueName('ExamUser'), { currentLevel: 3, totalXP: 500 });
});

describe('Exam Mode - Complete Journey', () => {
  it('displays exam selection with all 6 CEFR levels', async () => {
    renderExam();
    await waitForPageLoad();

    // Title
    expect(screen.getByText(/Modo Examen/)).toBeInTheDocument();
    expect(screen.getByText(/Pon a prueba tus conocimientos/)).toBeInTheDocument();

    // All 6 level buttons
    for (const level of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
      expect(screen.getByText(level)).toBeInTheDocument();
    }

    // Each level shows question count, time, pass %
    expect(screen.getAllByText(/preguntas/).length).toBeGreaterThanOrEqual(6);
    expect(screen.getAllByText(/minutos/).length).toBeGreaterThanOrEqual(6);
    expect(screen.getAllByText(/para aprobar/).length).toBeGreaterThanOrEqual(6);

    // Advice card
    expect(screen.getByText('Consejo')).toBeInTheDocument();
  });

  it('select A1 → exam starts with questions, timer, and progress', async () => {
    const { user } = renderExam();
    await waitForPageLoad();

    // Click A1 level
    await user.click(screen.getByText('A1'));

    // Exam stage loads
    await waitFor(() => {
      expect(screen.getByText(/Pregunta 1 de/)).toBeInTheDocument();
    }, { timeout: 5000 });

    // Timer visible
    const timerText = document.body.textContent || '';
    expect(timerText).toMatch(/\d+:\d+/); // MM:SS format

    // Level label
    expect(screen.getByText(/Nivel A1/)).toBeInTheDocument();

    // Questions should be generated (at least 15 for A1)
    const questionNav = screen.getAllByRole('button').filter(btn => {
      const text = btn.textContent?.trim() || '';
      return /^\d+$/.test(text);
    });
    expect(questionNav.length).toBeGreaterThanOrEqual(15);

    // Navigation buttons present
    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Siguiente')).toBeInTheDocument();
  }, 20000);

  it('answer multiple-choice → navigate → answer more → finish → see results', async () => {
    const { user } = renderExam();
    await waitForPageLoad();

    // Start A1 exam
    await user.click(screen.getByText('A1'));

    await waitFor(() => {
      expect(screen.getByText(/Pregunta 1 de/)).toBeInTheDocument();
    }, { timeout: 5000 });

    // Find the question text
    const questionText = screen.getByText(/Pregunta 1 de/).textContent;
    const totalMatch = questionText?.match(/de (\d+)/);
    const totalQuestions = totalMatch ? parseInt(totalMatch[1]) : 15;

    // Answer all questions by clicking through them
    for (let i = 0; i < totalQuestions; i++) {
      await waitFor(() => {
        expect(screen.getByText(`Pregunta ${i + 1} de ${totalQuestions}`)).toBeInTheDocument();
      });

      // Get the current question's type by checking what's rendered
      const currentQ = screen.getByText(`Pregunta ${i + 1} de ${totalQuestions}`);
      expect(currentQ).toBeInTheDocument();

      // Try to find option buttons (multiple-choice) - they have pattern "A.", "B.", etc
      const allButtons = screen.getAllByRole('button');
      const optionButtons = allButtons.filter(btn => {
        const t = btn.textContent || '';
        return /^[A-D]\./.test(t.trim());
      });

      if (optionButtons.length > 0) {
        // Multiple choice - click first option
        await user.click(optionButtons[0]);
      } else {
        // Fill-blank or translation - type an answer
        const input = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (input) {
          await user.clear(input);
          await user.type(input, 'test answer');
        }
      }

      // Navigate to next question
      if (i < totalQuestions - 1) {
        await user.click(screen.getByText('Siguiente'));
      }
    }

    // On last question, click "Terminar Examen"
    await waitFor(() => {
      expect(screen.getByText('Terminar Examen')).toBeInTheDocument();
    });
    await user.click(screen.getByText('Terminar Examen'));

    // Results stage appears
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Aprobado|Sigue Practicando/);
    }, { timeout: 10000 });

    // Grade is displayed
    const gradeMatch = document.body.textContent?.match(/Calificación/);
    expect(gradeMatch).toBeTruthy();

    // Precision shown
    expect(screen.getByText('Precisión')).toBeInTheDocument();

    // Stats grid
    expect(screen.getByText('Correctas')).toBeInTheDocument();
    expect(screen.getByText('Incorrectas')).toBeInTheDocument();
    expect(screen.getByText('Tiempo usado')).toBeInTheDocument();
    expect(screen.getByText('XP ganados')).toBeInTheDocument();

    // Action buttons
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Otro Examen')).toBeInTheDocument();
  }, 60000);

  it('question navigation: jump to specific question and back', async () => {
    const { user } = renderExam();
    await waitForPageLoad();

    // Start A1 exam
    await user.click(screen.getByText('A1'));

    await waitFor(() => {
      expect(screen.getByText(/Pregunta 1 de/)).toBeInTheDocument();
    }, { timeout: 5000 });

    // Navigate to question 3 directly by clicking the number
    const navButtons = screen.getAllByRole('button').filter(btn => btn.textContent?.trim() === '3');
    if (navButtons.length > 0) {
      await user.click(navButtons[0]);
      await waitFor(() => {
        expect(screen.getByText(/Pregunta 3 de/)).toBeInTheDocument();
      });
    }

    // Navigate back to question 1
    const backButtons = screen.getAllByRole('button').filter(btn => btn.textContent?.trim() === '1');
    if (backButtons.length > 0) {
      await user.click(backButtons[0]);
      await waitFor(() => {
        expect(screen.getByText(/Pregunta 1 de/)).toBeInTheDocument();
      });
    }

    // Use "Anterior" button (should be disabled on Q1)
    const prevBtn = screen.getByText('Anterior');
    expect(prevBtn).toBeDisabled();
  }, 20000);

  it('results → "Otro Examen" returns to level selection', async () => {
    const { user } = renderExam();
    await waitForPageLoad();

    // Start and immediately finish A1 exam (answer nothing)
    await user.click(screen.getByText('A1'));

    await waitFor(() => {
      expect(screen.getByText(/Pregunta 1 de/)).toBeInTheDocument();
    }, { timeout: 5000 });

    // Navigate to last question
    const totalMatch = screen.getByText(/Pregunta 1 de/).textContent?.match(/de (\d+)/);
    const total = totalMatch ? parseInt(totalMatch[1]) : 15;

    // Jump to last question directly
    const lastNavBtn = screen.getAllByRole('button').filter(
      btn => btn.textContent?.trim() === String(total)
    );
    if (lastNavBtn.length > 0) {
      await user.click(lastNavBtn[0]);
    }

    // Finish exam
    await waitFor(() => {
      expect(screen.getByText('Terminar Examen')).toBeInTheDocument();
    });
    await user.click(screen.getByText('Terminar Examen'));

    // Results appear
    await waitFor(() => {
      expect(screen.getByText('Otro Examen')).toBeInTheDocument();
    }, { timeout: 10000 });

    // Click "Otro Examen"
    await user.click(screen.getByText('Otro Examen'));

    // Back to level selection
    await waitFor(() => {
      expect(screen.getByText(/Modo Examen/)).toBeInTheDocument();
      expect(screen.getByText('A1')).toBeInTheDocument();
      expect(screen.getByText('B2')).toBeInTheDocument();
    });
  }, 40000);

  it('review answers: toggle detailed answers view', async () => {
    const { user } = renderExam();
    await waitForPageLoad();

    // Quick exam: start A1, jump to last, finish
    await user.click(screen.getByText('A1'));
    await waitFor(() => {
      expect(screen.getByText(/Pregunta 1 de/)).toBeInTheDocument();
    }, { timeout: 5000 });

    const totalMatch = screen.getByText(/Pregunta 1 de/).textContent?.match(/de (\d+)/);
    const total = totalMatch ? parseInt(totalMatch[1]) : 15;

    const lastNav = screen.getAllByRole('button').filter(
      btn => btn.textContent?.trim() === String(total)
    );
    if (lastNav.length > 0) await user.click(lastNav[0]);

    await waitFor(() => {
      expect(screen.getByText('Terminar Examen')).toBeInTheDocument();
    });
    await user.click(screen.getByText('Terminar Examen'));

    await waitFor(() => {
      expect(screen.getByText('Ver respuestas detalladas')).toBeInTheDocument();
    }, { timeout: 10000 });

    // Click to expand detailed answers
    await user.click(screen.getByText('Ver respuestas detalladas'));

    // Detailed answers should show question texts and "(vacío)" for unanswered
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/vacío|Correcta/);
    });
  }, 40000);
});
