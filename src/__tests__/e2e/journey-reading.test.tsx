/**
 * JOURNEY TEST: Reading Practice Complete Flow
 * Tests: Select passage → Read text → Vocabulary interaction → Answer questions → Verify → Results
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const ReadingPractice = lazy(() => import('../../pages/ReadingPractice'));

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderReading() {
  const user = userEvent.setup();
  const result = render(
    <ErrorBoundary>
      <MemoryRouter initialEntries={['/reading']}>
        <ThemeProvider>
          <UserProvider>
            <WaitForUser>
              <Suspense fallback={<div data-testid="suspense">Cargando módulo...</div>}>
                <ReadingPractice />
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
  // Level 3 (B1) so we can see multiple passages
  await seedUserWithProgress(uniqueName('ReadingUser'), { currentLevel: 3, totalXP: 500 });
});

describe('Reading Practice - Complete Journey', () => {
  it('shows passage selection with available readings', async () => {
    renderReading();
    await waitForPageLoad();

    // Title
    expect(screen.getByText(/Lectura Graduada/)).toBeInTheDocument();

    // At least the A1 passage should be available
    expect(screen.getByText('My Daily Routine')).toBeInTheDocument();
    expect(screen.getByText('Mi Rutina Diaria')).toBeInTheDocument();

    // Level badges visible
    expect(screen.getByText('A1')).toBeInTheDocument();

    // Metadata visible
    const text = document.body.textContent || '';
    expect(text).toMatch(/min/);
    expect(text).toMatch(/palabras/);
    expect(text).toMatch(/XP/);
  });

  it('select passage → read text → answer questions → see results', async () => {
    const { user } = renderReading();
    await waitForPageLoad();

    // Step 1: Select the A1 passage
    await user.click(screen.getByText('My Daily Routine'));

    // Step 2: Reading stage - text is displayed
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/wake up at seven/i);
    });

    // The passage content should be visible
    const bodyText = document.body.textContent || '';
    expect(bodyText).toMatch(/breakfast/i);
    expect(bodyText).toMatch(/bus/i);

    // "Volver" button visible
    expect(screen.getByText('← Volver')).toBeInTheDocument();

    // "Responder Preguntas" button to move to questions
    const questionsBtn = screen.getByText('Responder Preguntas');
    expect(questionsBtn).toBeInTheDocument();

    // Step 3: Go to questions stage
    await user.click(questionsBtn);

    // Step 4: Questions are displayed
    await waitFor(() => {
      expect(screen.getByText(/What time does the person wake up?/)).toBeInTheDocument();
    });

    // Answer Q1: multiple choice - "7:00"
    await user.click(screen.getByText('7:00'));

    // Answer Q2: true-false - "The person drives to work" -> False
    const falseButtons = screen.getAllByRole('button').filter(btn =>
      btn.textContent?.trim() === 'False' || btn.textContent?.trim() === 'Falso'
    );
    if (falseButtons.length > 0) {
      await user.click(falseButtons[0]);
    }

    // Answer Q3: multiple choice - "In the park"
    await user.click(screen.getByText('In the park'));

    // Answer Q4: fill-blank - "late"
    const inputs = document.querySelectorAll('input[type="text"]');
    if (inputs.length > 0) {
      const fillInput = inputs[0] as HTMLInputElement;
      await user.type(fillInput, 'late');
    }

    // Step 5: Verify answers
    const verifyBtn = screen.getByText('Verificar Respuestas');
    expect(verifyBtn).toBeInTheDocument();
    await user.click(verifyBtn);

    // Step 6: Results stage
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Bien hecho|Sigue practicando/);
    });

    // Score should be displayed
    expect(screen.getByText(/%/)).toBeInTheDocument();

    // Correct count visible
    const resultText = document.body.textContent || '';
    expect(resultText).toMatch(/correctas/i);

    // Action buttons
    expect(screen.getByText(/Inicio/)).toBeInTheDocument();
    expect(screen.getByText(/Más Lecturas/)).toBeInTheDocument();
  }, 30000);

  it('go back from reading to passage selection', async () => {
    const { user } = renderReading();
    await waitForPageLoad();

    // Select a passage
    await user.click(screen.getByText('My Daily Routine'));

    await waitFor(() => {
      expect(screen.getByText('← Volver')).toBeInTheDocument();
    });

    // Go back
    await user.click(screen.getByText('← Volver'));

    // Back to selection
    await waitFor(() => {
      expect(screen.getByText(/Lectura Graduada/)).toBeInTheDocument();
      expect(screen.getByText('My Daily Routine')).toBeInTheDocument();
    });
  }, 15000);

  it('results → "Más Lecturas" returns to passage selection', async () => {
    const { user } = renderReading();
    await waitForPageLoad();

    // Quick path: select passage → skip reading → answer all randomly → verify
    await user.click(screen.getByText('My Daily Routine'));

    await waitFor(() => {
      expect(screen.getByText('Responder Preguntas')).toBeInTheDocument();
    });

    await user.click(screen.getByText('Responder Preguntas'));

    await waitFor(() => {
      expect(screen.getByText(/What time does the person wake up?/)).toBeInTheDocument();
    });

    // Answer all questions (some correctly, some wrong doesn't matter)
    // Q1 multiple choice
    await user.click(screen.getByText('7:00'));

    // Q2 true-false
    const boolButtons = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent?.trim() || '';
      return t === 'True' || t === 'False' || t === 'Verdadero' || t === 'Falso';
    });
    if (boolButtons.length > 0) await user.click(boolButtons[0]);

    // Q3 multiple choice
    const parkBtn = screen.queryByText('In the park');
    if (parkBtn) await user.click(parkBtn);

    // Q4 fill-blank
    const inputs = document.querySelectorAll('input[type="text"]');
    if (inputs.length > 0) {
      await user.type(inputs[0] as HTMLInputElement, 'late');
    }

    // Verify
    const verify = screen.getByText('Verificar Respuestas');
    await user.click(verify);

    // Wait for results
    await waitFor(() => {
      expect(screen.getByText(/Más Lecturas/)).toBeInTheDocument();
    }, { timeout: 10000 });

    // Click "Más Lecturas"
    await user.click(screen.getByText(/Más Lecturas/));

    // Back to selection
    await waitFor(() => {
      expect(screen.getByText(/Lectura Graduada/)).toBeInTheDocument();
      expect(screen.getByText('My Daily Routine')).toBeInTheDocument();
    });
  }, 30000);
});
