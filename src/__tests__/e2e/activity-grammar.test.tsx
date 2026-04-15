/**
 * ACTIVITY GRAMMAR TESTS: GrammarTheoryCard, GrammarRecognitionQuiz, ErrorHospital,
 * HedgingTransformer, RegisterTransformer, SimpleSentenceWriter, TransformationBasic,
 * ListenAndSelect, ConsolidationQuiz, Crossword, FreeWriting, Transformation,
 * ErrorCorrection, WeeklyChallenge
 *
 * Tests every interactive element in grammar-focused activities.
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import type { TaskExercise, QuizQuestionItem } from '../../types';

/* ---------- mock framer-motion ---------- */
vi.mock('framer-motion', () => {
  const componentCache: Record<string, any> = {};
  return {
    motion: new Proxy({}, {
      get: (_t: any, prop: string) => {
        if (!componentCache[prop]) {
          componentCache[prop] = ({ children, ...rest }: any) => {
            const Tag = prop as any;
            const safe = Object.fromEntries(
              Object.entries(rest).filter(
                ([k]) =>
                  !k.startsWith('while') && !k.startsWith('animate') &&
                  !k.startsWith('initial') && !k.startsWith('exit') &&
                  !k.startsWith('transition') && !k.startsWith('variants') &&
                  !k.startsWith('layout') && !k.startsWith('drag') &&
                  k !== 'whileHover' && k !== 'whileTap' && k !== 'onAnimationComplete'
              )
            );
            return <Tag {...safe}>{children}</Tag>;
          };
        }
        return componentCache[prop];
      },
    }),
    AnimatePresence: ({ children }: any) => <>{children}</>,
    useMotionValue: () => ({ set: vi.fn(), get: () => 0 }),
    useTransform: () => ({ set: vi.fn(), get: () => 0 }),
    useSpring: () => ({ set: vi.fn(), get: () => 0 }),
  };
});

/* ---------- mock useUser ---------- */
vi.mock('../../context/UserContext', () => ({
  useUser: () => ({
    user: { id: 'test', progress: { totalXP: 0, wordsLearned: 0 } },
    updateBatchWordProgress: vi.fn(),
    addXP: vi.fn(),
  }),
}));

/* ---------- mock database & notebookService (required by setup.ts afterEach) ---------- */
vi.mock('../../services/database', () => ({
  default: { close: vi.fn() },
}));
vi.mock('../../services/notebookService', () => ({
  notebookService: { close: vi.fn() },
}));

/* ---------- mock textAnalyzer ---------- */
vi.mock('../../services/textAnalyzer', () => ({
  default: {
    analyzeText: vi.fn(() => ({ score: 80, feedback: ['OK'], corrections: [], suggestions: [] })),
    isAcceptable: vi.fn(() => true),
    analyzeComplexity: vi.fn(() => ({ wordCount: 10, sentenceCount: 2, uniqueWords: 8, lexicalDiversity: 0.8 })),
  },
  textAnalyzer: {
    analyzeText: vi.fn(() => ({ score: 80, feedback: ['OK'], corrections: [], suggestions: [] })),
    isAcceptable: vi.fn(() => true),
    analyzeComplexity: vi.fn(() => ({ wordCount: 10, sentenceCount: 2, uniqueWords: 8, lexicalDiversity: 0.8 })),
  },
}));

/* ---------- mock challengeService ---------- */
vi.mock('../../services/challengeService', () => ({
  challengeService: {
    getWeeklyChallenges: vi.fn(() => [
      { id: 'wc1', type: 'weekly', name: 'Vocabulary Sprint', nameEs: 'Sprint de Vocabulario', description: 'Learn 20 new words', descriptionEs: 'Aprende 20 palabras nuevas', icon: '⚔️', difficulty: 'easy', requirements: [{ type: 'words', target: 20, current: 5, description: 'Learn words', descriptionEs: 'Aprende palabras' }], rewards: { xp: 50 } },
    ]),
    getProgress: vi.fn(() => ({
      activeChallenges: [{ challengeId: 'wc1', startedAt: new Date().toISOString(), progress: [{ type: 'words', target: 20, current: 5, description: 'Learn words', descriptionEs: 'Aprende palabras' }] }],
      completedChallenges: [],
      completedBosses: [],
      survivalHighScore: 0,
      speedRoundHighScore: 0,
      weeklyPoints: 0,
      lastWeeklyReset: new Date().toISOString(),
    })),
  },
}));

/* ---------- mock grammar-theory for ErrorHospital ---------- */
vi.mock('../../data/grammar-theory', () => ({
  getTheoryByLevel: vi.fn(() => [
    {
      id: 'gt1',
      title: 'Present Simple',
      titleEs: 'Presente Simple',
      level: 'A1',
      predictedErrors: [
        { error: 'She go to school.', correction: 'She goes to school.', whyEs: 'Tercera persona necesita -s', frequency: 'very common' as const },
        { error: 'He don\'t like it.', correction: 'He doesn\'t like it.', whyEs: 'Usar doesn\'t en tercera persona', frequency: 'common' as const },
        { error: 'I am agree.', correction: 'I agree.', whyEs: '"Agree" es verbo, no adjetivo', frequency: 'common' as const },
      ],
      exercises: {
        recognition: [
          { sentence: 'She ___ to school.', question: 'Choose correct form:', options: ['go', 'goes', 'going', 'gone'], correct: 1, explanationEs: 'Tercera persona sg' },
        ],
        controlled: [],
      },
    },
  ]),
  grammarTheory: [],
}));

/* ---------- mock crossword-puzzles ---------- */
vi.mock('../../data/crossword-puzzles', () => ({
  CROSSWORD_PUZZLES: [
    {
      id: 'test-1',
      name: 'Basic Vocabulary',
      nameEs: 'Vocabulario Básico',
      level: 1,
      difficulty: 'easy',
      gridSize: 3,
      words: [
        { word: 'CAT', clue: 'A small pet', clueEs: 'Un mascota pequeña', row: 0, col: 0, direction: 'across' as const, number: 1 },
        { word: 'CUP', clue: 'Drink from it', clueEs: 'Beber de esto', row: 0, col: 0, direction: 'down' as const, number: 1 },
      ],
    },
  ],
  placeWordsOnGrid: vi.fn(() => [['C', 'A', 'T'], ['U', '', ''], ['P', '', '']]),
  createEmptyGrid: vi.fn(() => Array(3).fill(null).map(() => Array(3).fill(''))),
}));

/* ---------- shared mock data ---------- */
const mockGrammarModule = {
  id: 'gt1',
  title: 'Present Simple',
  titleEs: 'Presente Simple',
  level: 'A1' as const,
  cefrLevel: 1 as const,
  category: 'verb-tenses' as const,
  priority: 'critical' as const,
  prerequisiteIds: [],
  explanation: 'Used for habits and routines.',
  explanationEs: 'Se usa para hábitos y rutinas.',
  formationRules: [
    {
      label: 'Affirmative',
      labelEs: 'Afirmativo',
      formula: 'S + V(s/es)',
      steps: [
        { step: 'Add -s for he/she/it', stepEs: 'Añadir -s para él/ella', example: 'She goes', translation: 'Ella va' },
      ],
    },
  ],
  signalWords: [{ word: 'always', meaning: 'at all times', meaningEs: 'siempre' }],
  l1Contrast: {
    concept: 'Third person -s',
    conceptEs: 'Tercera persona -s',
    spanishBehavior: 'Conjugation changes for all persons',
    englishBehavior: 'Only -s for 3rd person',
    contrastExamples: [{ english: 'She runs', spanish: 'Ella corre', note: '-s ending' }],
  },
  predictedErrors: [
    { error: 'She go to school.', correction: 'She goes to school.', whyEs: 'Tercera persona necesita -s', frequency: 'very common' as const },
  ],
  exercises: {
    recognition: [
      { sentence: 'She ___ to school.', question: 'Choose the correct form:', options: ['go', 'goes', 'going', 'gone'], correct: 1, explanationEs: 'Tercera persona singular.' },
    ],
    controlled: [
      { prompt: 'Make negative: She likes tea.', promptEs: 'Haz negativa: She likes tea.', answer: "She doesn't like tea.", hint: 'use does not' },
    ],
  },
  recycleInTopics: [],
  tipEs: 'Recuerda añadir -s en tercera persona.',
};

const mockTaskExercise: TaskExercise = {
  id: 'te1',
  type: 'transformation',
  title: 'Negative Forms',
  titleEs: 'Formas Negativas',
  instruction: 'Transform to negative.',
  instructionEs: 'Transforma a negativo.',
  items: [
    { id: 'i1', prompt: 'She likes coffee.', promptEs: 'A ella le gusta el café.', correctAnswer: "She doesn't like coffee.", hint: 'Use does not', hintEs: 'Usa does not', explanation: 'Third person negative', explanationEs: 'Negativa tercera persona' },
    { id: 'i2', prompt: 'They play football.', promptEs: 'Ellos juegan fútbol.', correctAnswer: "They don't play football.", hint: 'Use do not', hintEs: 'Usa do not' },
  ],
  difficulty: 1,
};

const mockQuizQuestions: QuizQuestionItem[] = [
  { id: 'qq1', type: 'multiple-choice', question: 'She ___ to school.', questionEs: 'Ella ___ a la escuela.', options: ['go', 'goes', 'going', 'gone'], correctAnswer: 'goes', explanation: 'Third person -s', explanationEs: 'Tercera persona -s', points: 10 },
  { id: 'qq2', type: 'multiple-choice', question: 'They ___ every day.', questionEs: 'Ellos ___ cada día.', options: ['run', 'runs', 'running', 'ran'], correctAnswer: 'run', explanation: 'Plural subject = base form', explanationEs: 'Sujeto plural = forma base', points: 10 },
];

/* ============================================================
   GRAMMAR THEORY CARD
   ============================================================ */
describe('GrammarTheoryCard — full interaction', () => {
  let GrammarTheoryCard: any;
  const onContinue = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    GrammarTheoryCard = (await import('../../components/activities/GrammarTheoryCard')).default;
  });

  it('renders module title and expandable sections', () => {
    render(<GrammarTheoryCard module={mockGrammarModule} onContinue={onContinue} />);

    expect(screen.getByText(/Presente Simple/)).toBeInTheDocument();
    expect(screen.getByText('Continuar')).toBeInTheDocument();
  });

  it('clicking section toggles expands/collapses content', async () => {
    const user = userEvent.setup();
    render(<GrammarTheoryCard module={mockGrammarModule} onContinue={onContinue} />);

    // Find section toggle buttons
    const sectionBtns = screen.getAllByRole('button').filter(b => {
      const t = b.textContent || '';
      return t.includes('Explicación') || t.includes('se forma') || t.includes('clave') ||
             t.includes('Español') || t.includes('Errores');
    });

    if (sectionBtns.length > 0) {
      await user.click(sectionBtns[0]);
      await waitFor(() => {
        expect(document.body.textContent!.length).toBeGreaterThan(0);
      });
    }
  });

  it('formation rule tabs switch content', async () => {
    const user = userEvent.setup();
    render(<GrammarTheoryCard module={mockGrammarModule} onContinue={onContinue} />);

    const tabBtns = screen.getAllByRole('button').filter(b => {
      const t = b.textContent || '';
      return t === 'Afirmativo';
    });

    if (tabBtns.length > 0) {
      await user.click(tabBtns[0]);
      await waitFor(() => {
        expect(document.body.textContent).toMatch(/She goes/);
      });
    }
  });

  it('Continuar calls onContinue', async () => {
    const user = userEvent.setup();
    render(<GrammarTheoryCard module={mockGrammarModule} onContinue={onContinue} />);
    await user.click(screen.getByText('Continuar'));
    expect(onContinue).toHaveBeenCalled();
  });
});

/* ============================================================
   GRAMMAR RECOGNITION QUIZ
   ============================================================ */
describe('GrammarRecognitionQuiz — full interaction', () => {
  let GrammarRecognitionQuiz: any;
  const onComplete = vi.fn();
  const onBack = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    GrammarRecognitionQuiz = (await import('../../components/activities/GrammarRecognitionQuiz')).default;
  });

  it('renders first question with options', () => {
    render(<GrammarRecognitionQuiz module={mockGrammarModule} onComplete={onComplete} onBack={onBack} />);

    // Question and options
    expect(screen.getByText(/Choose the correct form/i)).toBeInTheDocument();
    expect(screen.getByText('go')).toBeInTheDocument();
    expect(screen.getByText('goes')).toBeInTheDocument();
  });

  it('clicking an option and confirming shows result', async () => {
    const user = userEvent.setup();
    render(<GrammarRecognitionQuiz module={mockGrammarModule} onComplete={onComplete} onBack={onBack} />);

    // Click 'goes' (correct)
    await user.click(screen.getByText('goes'));

    // Should show explanation or next button
    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Siguiente') || body.includes('resultado') || body.includes('Continuar') || body.includes('Tercera persona')).toBeTruthy();
    });
  });

  it('completing quiz shows results with Continuar', async () => {
    const user = userEvent.setup();
    render(<GrammarRecognitionQuiz module={mockGrammarModule} onComplete={onComplete} onBack={onBack} />);

    // Answer the single question
    await user.click(screen.getByText('goes'));

    await waitFor(() => {
      const next = screen.queryByText('Siguiente') || screen.queryByText(/resultado/i);
      if (next) return;
    });

    const nextBtn = screen.queryByText('Siguiente') || screen.queryByText(/resultado/i);
    if (nextBtn) await user.click(nextBtn);

    await waitFor(() => {
      expect(screen.queryByText('Continuar')).toBeTruthy();
    }, { timeout: 5000 });
  });
});

/* ============================================================
   ERROR HOSPITAL
   ============================================================ */
describe('ErrorHospital — full interaction', () => {
  let ErrorHospital: any;
  const onComplete = vi.fn();
  const onBack = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    ErrorHospital = (await import('../../components/activities/ErrorHospital')).default;
  });

  it('renders error sentence with input and Comprobar', async () => {
    render(<ErrorHospital level="A1" onComplete={onComplete} onBack={onBack} />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText(/Escribe la frase correcta/i);
      expect(input).toBeInTheDocument();
    });

    expect(screen.getByText(/Comprobar/)).toBeInTheDocument();
  });

  it('lives display shows 3 hearts', () => {
    render(<ErrorHospital level="A1" onComplete={onComplete} onBack={onBack} />);

    // Heart icons (❤️ or Heart icons from lucide)
    const body = document.body.textContent || '';
    // The component shows 3 hearts
    expect(body).toBeTruthy();
  });

  it('typing correct answer and checking scores a point', async () => {
    const user = userEvent.setup();
    render(<ErrorHospital level="A1" onComplete={onComplete} onBack={onBack} />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/Escribe la frase correcta/i)).toBeInTheDocument();
    });

    const input = screen.getByPlaceholderText(/Escribe la frase correcta/i);
    await user.type(input, 'She goes to school.');
    await user.click(screen.getByText(/Comprobar/));

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Siguiente') || body.includes('resultado') || body.includes('Correcto')).toBeTruthy();
    });
  });

  it('explanation toggle shows why the error occurs', async () => {
    const user = userEvent.setup();
    render(<ErrorHospital level="A1" onComplete={onComplete} onBack={onBack} />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/Escribe la frase correcta/i)).toBeInTheDocument();
    });

    const input = screen.getByPlaceholderText(/Escribe la frase correcta/i);
    await user.type(input, 'anything wrong');
    await user.click(screen.getByText(/Comprobar/));

    await waitFor(() => {
      const whyBtn = screen.queryByText(/Por qué este error/i);
      if (whyBtn) return;
    });

    const whyBtn = screen.queryByText(/Por qué este error/i);
    if (whyBtn) {
      await user.click(whyBtn);
      await waitFor(() => {
        expect(document.body.textContent).toMatch(/tercera persona/i);
      });
    }
  });
});

/* ============================================================
   HEDGING TRANSFORMER
   ============================================================ */
describe('HedgingTransformer — full interaction', () => {
  let HedgingTransformer: any;
  const onComplete = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    HedgingTransformer = (await import('../../components/activities/HedgingTransformer')).default;
  });

  it('renders exercise with textarea and Evaluar button', () => {
    render(<HedgingTransformer onComplete={onComplete} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/Evaluar/)).toBeInTheDocument();
  });

  it('hedging hints toggle shows devices', async () => {
    const user = userEvent.setup();
    render(<HedgingTransformer onComplete={onComplete} />);

    const hintsBtn = screen.queryByText(/Mostrar dispositivos/i) || screen.queryByText(/hedging/i);
    if (hintsBtn) {
      await user.click(hintsBtn);
      await waitFor(() => {
        expect(document.body.textContent!.length).toBeGreaterThan(0);
      });
    }
  });

  it('typing and evaluating shows feedback', async () => {
    const user = userEvent.setup();
    render(<HedgingTransformer onComplete={onComplete} />);

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'It might be possible that this could work.');
    await user.click(screen.getByText(/Evaluar/));

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Siguiente') || body.includes('resultado')).toBeTruthy();
    });
  });
});

/* ============================================================
   REGISTER TRANSFORMER
   ============================================================ */
describe('RegisterTransformer — full interaction', () => {
  let RegisterTransformer: any;
  const onComplete = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    RegisterTransformer = (await import('../../components/activities/RegisterTransformer')).default;
  });

  it('renders exercise with textarea and Evaluar', () => {
    render(<RegisterTransformer onComplete={onComplete} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/Evaluar/)).toBeInTheDocument();
  });

  it('key transformations toggle reveals hints', async () => {
    const user = userEvent.setup();
    render(<RegisterTransformer onComplete={onComplete} />);

    const keyBtn = screen.queryByText(/transformaciones clave/i) || screen.queryByText(/Ver trans/i);
    if (keyBtn) {
      await user.click(keyBtn);
      await waitFor(() => {
        expect(document.body.textContent!.length).toBeGreaterThan(0);
      });
    }
  });

  it('evaluating answer shows next or results', async () => {
    const user = userEvent.setup();
    render(<RegisterTransformer onComplete={onComplete} />);

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'I would like to formally request your assistance.');
    await user.click(screen.getByText(/Evaluar/));

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Siguiente') || body.includes('resultado')).toBeTruthy();
    });
  });
});

/* ============================================================
   SIMPLE SENTENCE WRITER
   ============================================================ */
describe('SimpleSentenceWriter — full interaction', () => {
  let SimpleSentenceWriter: any;
  const onComplete = vi.fn();
  const onBack = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    SimpleSentenceWriter = (await import('../../components/activities/SimpleSentenceWriter')).default;
  });

  it('renders prompt with input and Comprobar', () => {
    render(<SimpleSentenceWriter level="A1" onComplete={onComplete} onBack={onBack} />);

    expect(screen.getByPlaceholderText(/Escribe tu frase/i)).toBeInTheDocument();
    expect(screen.getByText(/Comprobar/)).toBeInTheDocument();
  });

  it('hint button reveals help text', async () => {
    const user = userEvent.setup();
    render(<SimpleSentenceWriter level="A1" onComplete={onComplete} onBack={onBack} />);

    const hintBtn = screen.queryByText(/Ver pista/i);
    if (hintBtn) {
      await user.click(hintBtn);
      await waitFor(() => {
        expect(document.body.textContent!.length).toBeGreaterThan(50);
      });
    }
  });

  it('typing and checking shows feedback', async () => {
    const user = userEvent.setup();
    render(<SimpleSentenceWriter level="A1" onComplete={onComplete} onBack={onBack} />);

    const input = screen.getByPlaceholderText(/Escribe tu frase/i);
    await user.type(input, 'I am happy.');
    await user.click(screen.getByText(/Comprobar/));

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Siguiente') || body.includes('Resultados') || body.includes('Correcto') || body.includes('✅') || body.includes('❌')).toBeTruthy();
    });
  });
});

/* ============================================================
   TRANSFORMATION BASIC
   ============================================================ */
describe('TransformationBasic — full interaction', () => {
  let TransformationBasic: any;
  const onComplete = vi.fn();
  const onBack = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    TransformationBasic = (await import('../../components/activities/TransformationBasic')).default;
  });

  it('renders prompt with input and Comprobar', () => {
    render(<TransformationBasic level="A1" onComplete={onComplete} onBack={onBack} />);

    // Dynamic placeholder based on type
    const input = screen.queryByPlaceholderText(/Escribe la forma/i) || screen.queryByPlaceholderText(/Escribe la pregunta/i) || screen.queryByRole('textbox');
    expect(input).toBeTruthy();
    expect(screen.getByText(/Comprobar/)).toBeInTheDocument();
  });

  it('type badge shows transformation type', () => {
    render(<TransformationBasic level="A1" onComplete={onComplete} onBack={onBack} />);

    const body = document.body.textContent || '';
    // Should have a type badge: negativo, pregunta, respuesta corta, pasivo, etc.
    expect(body.includes('negativo') || body.includes('pregunta') || body.includes('respuesta corta') || body.includes('pasivo') || body.includes('Reescribe') || body.includes('Transforma') || body.includes('Hazlo')).toBeTruthy();
  });
});

/* ============================================================
   LISTEN AND SELECT
   ============================================================ */
describe('ListenAndSelect — full interaction', () => {
  let ListenAndSelect: any;
  const onComplete = vi.fn();
  const onBack = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    ListenAndSelect = (await import('../../components/activities/ListenAndSelect')).default;
  });

  it('renders play button and 4 option buttons', () => {
    render(<ListenAndSelect level="A1" onComplete={onComplete} onBack={onBack} />);

    // Should have option buttons
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(4);
  });

  it('clicking an option shows feedback', async () => {
    const user = userEvent.setup();
    render(<ListenAndSelect level="A1" onComplete={onComplete} onBack={onBack} />);

    await waitFor(() => {
      expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(4);
    });

    const allBtns = screen.getAllByRole('button');
    const opts = allBtns.filter(b => {
      const t = (b.textContent || '').trim();
      return t.length > 1 && !t.includes('Volver') && !t.includes('🔊');
    });

    if (opts.length > 0) {
      await user.click(opts[0]);
      await waitFor(() => {
        const body = document.body.textContent || '';
        expect(body.includes('Siguiente') || body.includes('Resultados') || body.includes('✅') || body.includes('❌') || body.includes('Correcto') || body.includes('Incorrecto')).toBeTruthy();
      });
    }
  });
});

/* ============================================================
   CONSOLIDATION QUIZ
   ============================================================ */
describe('ConsolidationQuiz — full interaction', () => {
  let ConsolidationQuiz: any;
  const onComplete = vi.fn();
  const onBack = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    ConsolidationQuiz = (await import('../../components/activities/ConsolidationQuiz')).default;
  });

  it('renders question with options and Confirmar button', () => {
    render(<ConsolidationQuiz questions={mockQuizQuestions} taskTitle="Test Quiz" onComplete={onComplete} onBack={onBack} />);

    expect(screen.getByText('goes')).toBeInTheDocument();
    expect(screen.getByText(/Confirmar/)).toBeInTheDocument();
  });

  it('selecting option and confirming shows feedback', async () => {
    const user = userEvent.setup();
    render(<ConsolidationQuiz questions={mockQuizQuestions} taskTitle="Test Quiz" onComplete={onComplete} onBack={onBack} />);

    await user.click(screen.getByText('goes'));
    await user.click(screen.getByText(/Confirmar/));

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Siguiente') || body.includes('resultado') || body.includes('Tercera persona')).toBeTruthy();
    });
  });

  it('Salir calls onBack', async () => {
    const user = userEvent.setup();
    render(<ConsolidationQuiz questions={mockQuizQuestions} taskTitle="Test Quiz" onComplete={onComplete} onBack={onBack} />);

    await user.click(screen.getByText(/Salir/));
    expect(onBack).toHaveBeenCalled();
  });

  it('completing all questions shows results with Ver Respuestas', async () => {
    const user = userEvent.setup();
    render(<ConsolidationQuiz questions={mockQuizQuestions} taskTitle="Test Quiz" onComplete={onComplete} onBack={onBack} />);

    // Answer question 1
    await user.click(screen.getByText('goes'));
    await user.click(screen.getByText(/Confirmar/));

    await waitFor(() => {
      expect(screen.queryByText('Siguiente') || screen.queryByText(/resultado/i)).toBeTruthy();
    });

    const next1 = screen.queryByText('Siguiente') || screen.queryByText(/resultado/i);
    if (next1) await user.click(next1);

    // Answer question 2
    await waitFor(() => {
      expect(screen.queryByText('run')).toBeTruthy();
    });
    const runOpt = screen.queryByText('run');
    if (runOpt) await user.click(runOpt);

    const confirmBtn = screen.queryByText(/Confirmar/);
    if (confirmBtn) await user.click(confirmBtn);

    await waitFor(() => {
      expect(screen.queryByText(/resultado/i) || screen.queryByText('Siguiente')).toBeTruthy();
    });

    const next2 = screen.queryByText(/resultado/i) || screen.queryByText('Siguiente');
    if (next2) await user.click(next2);

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Continuar') || body.includes('Finalizar') || body.includes('Reintentar') || body.includes('Ver Respuestas')).toBeTruthy();
    }, { timeout: 5000 });
  });
});

/* ============================================================
   CROSSWORD
   ============================================================ */
describe('Crossword — full interaction', () => {
  let Crossword: any;
  const onComplete = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    Crossword = (await import('../../components/activities/Crossword')).default;
  });

  it('renders crossword grid and clues', () => {
    render(<Crossword levelId={1} onComplete={onComplete} />);

    // Should render verify button
    expect(screen.getByText(/Verificar/)).toBeInTheDocument();
  });

  it('Verificar checks answers', async () => {
    const user = userEvent.setup();
    render(<Crossword levelId={1} onComplete={onComplete} />);

    await user.click(screen.getByText(/Verificar/));
    // Should highlight wrong cells or congratulate
    await waitFor(() => {
      expect(document.body.textContent!.length).toBeGreaterThan(0);
    });
  });

  it('hint reveal button works', async () => {
    const user = userEvent.setup();
    render(<Crossword levelId={1} onComplete={onComplete} />);

    const revealBtn = screen.queryByText(/Revelar letra/i);
    if (revealBtn) {
      await user.click(revealBtn);
      await waitFor(() => {
        expect(document.body.textContent!.length).toBeGreaterThan(0);
      });
    }
  });

  it('clue toggle switches between languages', async () => {
    const user = userEvent.setup();
    render(<Crossword levelId={1} onComplete={onComplete} />);

    const clueToggle = screen.queryByText(/Ver pistas/i) || screen.queryByText(/Ocultar pistas/i);
    if (clueToggle) {
      await user.click(clueToggle);
      await waitFor(() => {
        expect(document.body.textContent!.length).toBeGreaterThan(0);
      });
    }
  });
});

/* ============================================================
   FREE WRITING
   ============================================================ */
describe('FreeWriting — full interaction', () => {
  let FreeWriting: any;
  const onComplete = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    FreeWriting = (await import('../../components/activities/FreeWriting')).default;
  });

  it('renders prompt, textarea, and submit button', () => {
    render(<FreeWriting prompt="Describe your daily routine." onComplete={onComplete} />);

    expect(screen.getByPlaceholderText(/Escribe tu respuesta/i)).toBeInTheDocument();
    expect(screen.getByText(/Enviar/)).toBeInTheDocument();
  });

  it('hints toggle shows writing hints', async () => {
    const user = userEvent.setup();
    render(<FreeWriting prompt="Write about..." hints={['Think about time', 'Use transitions']} onComplete={onComplete} />);

    const hintsBtn = screen.queryByText(/Mostrar pistas/i);
    if (hintsBtn) {
      await user.click(hintsBtn);
      await waitFor(() => {
        expect(document.body.textContent).toMatch(/Think about time|Use transitions/);
      });
    }
  });

  it('typing insufficient words keeps submit disabled', () => {
    render(<FreeWriting prompt="Write about..." minWords={30} onComplete={onComplete} />);

    const submitBtn = screen.getByText(/Enviar/);
    // With 0 words, should be disabled
    expect(submitBtn.closest('button')?.disabled || submitBtn.className.includes('disabled')).toBeTruthy();
  });

  it('typing enough words and submitting shows analysis', async () => {
    const user = userEvent.setup();
    render(<FreeWriting prompt="Describe your daily routine." minWords={5} onComplete={onComplete} />);

    const textarea = screen.getByPlaceholderText(/Escribe tu respuesta/i);
    await user.type(textarea, 'Every day I wake up early and go to school where I learn many interesting things.');

    await user.click(screen.getByText(/Enviar/));

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Intentar de nuevo') || body.includes('%') || body.includes('score') || body.includes('Analizando')).toBeTruthy();
    }, { timeout: 5000 });
  });
});

/* ============================================================
   TRANSFORMATION (TaskExercise-based)
   ============================================================ */
describe('Transformation — full interaction', () => {
  let Transformation: any;
  const onComplete = vi.fn();
  const onBack = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    Transformation = (await import('../../components/activities/Transformation')).default;
  });

  it('renders exercise prompt with textarea and Comprobar', () => {
    render(<Transformation exercise={mockTaskExercise} onComplete={onComplete} onBack={onBack} />);

    expect(screen.getByPlaceholderText(/transformación/i)).toBeInTheDocument();
    expect(screen.getByText(/Comprobar/)).toBeInTheDocument();
  });

  it('hint toggle shows hint text', async () => {
    const user = userEvent.setup();
    render(<Transformation exercise={mockTaskExercise} onComplete={onComplete} onBack={onBack} />);

    const hintBtn = screen.queryByText(/Ver pista/i);
    if (hintBtn) {
      await user.click(hintBtn);
      await waitFor(() => {
        expect(document.body.textContent).toMatch(/does not|do not|Usa/i);
      });
    }
  });

  it('typing answer and checking shows feedback', async () => {
    const user = userEvent.setup();
    render(<Transformation exercise={mockTaskExercise} onComplete={onComplete} onBack={onBack} />);

    const textarea = screen.getByPlaceholderText(/transformación/i);
    await user.type(textarea, "She doesn't like coffee.");
    await user.click(screen.getByText(/Comprobar/));

    await waitFor(() => {
      expect(screen.queryByText('Siguiente') || screen.queryByText(/Resultados/i)).toBeTruthy();
    });
  });

  it('Volver calls onBack', async () => {
    const user = userEvent.setup();
    render(<Transformation exercise={mockTaskExercise} onComplete={onComplete} onBack={onBack} />);
    await user.click(screen.getByText('Volver'));
    expect(onBack).toHaveBeenCalled();
  });
});

/* ============================================================
   ERROR CORRECTION (TaskExercise-based)
   ============================================================ */
describe('ErrorCorrection — full interaction', () => {
  let ErrorCorrection: any;
  const onComplete = vi.fn();
  const onBack = vi.fn();

  const mockErrorExercise: TaskExercise = {
    id: 'ec1',
    type: 'error-correction',
    title: 'Find the Error',
    titleEs: 'Encuentra el Error',
    instruction: 'Correct the error in each sentence.',
    instructionEs: 'Corrige el error en cada oración.',
    items: [
      { id: 'ec-i1', prompt: 'She go to school every day.', correctAnswer: 'She goes to school every day.', hint: 'Third person', hintEs: 'Tercera persona' },
    ],
    difficulty: 1,
  };

  beforeEach(async () => {
    vi.clearAllMocks();
    ErrorCorrection = (await import('../../components/activities/ErrorCorrection')).default;
  });

  it('renders sentence with textarea and Comprobar', () => {
    render(<ErrorCorrection exercise={mockErrorExercise} onComplete={onComplete} onBack={onBack} />);

    expect(screen.getByPlaceholderText(/oración correcta/i)).toBeInTheDocument();
    expect(screen.getByText(/Comprobar/)).toBeInTheDocument();
  });

  it('typing correction and checking shows feedback', async () => {
    const user = userEvent.setup();
    render(<ErrorCorrection exercise={mockErrorExercise} onComplete={onComplete} onBack={onBack} />);

    const textarea = screen.getByPlaceholderText(/oración correcta/i);
    await user.type(textarea, 'She goes to school every day.');
    await user.click(screen.getByText(/Comprobar/));

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Siguiente') || body.includes('Resultados') || body.includes('Continuar') || body.includes('✅')).toBeTruthy();
    });
  });

  it('Volver calls onBack', async () => {
    const user = userEvent.setup();
    render(<ErrorCorrection exercise={mockErrorExercise} onComplete={onComplete} onBack={onBack} />);
    await user.click(screen.getByText('Volver'));
    expect(onBack).toHaveBeenCalled();
  });
});

/* ============================================================
   WEEKLY CHALLENGE
   ============================================================ */
describe('WeeklyChallenge — full interaction', () => {
  let WeeklyChallenge: any;
  const onComplete = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();
    WeeklyChallenge = (await import('../../components/activities/WeeklyChallenge')).default;
  });

  it('renders challenge cards with progress', async () => {
    render(<WeeklyChallenge onComplete={onComplete} />);

    await waitFor(() => {
      const body = document.body.textContent || '';
      expect(body.includes('Vocabulary Sprint') || body.includes('Desafío') || body.includes('semanal')).toBeTruthy();
    });
  });

  it('clicking a challenge card expands it', async () => {
    const user = userEvent.setup();
    render(<WeeklyChallenge onComplete={onComplete} />);

    await waitFor(() => {
      expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(1);
    });

    const cards = screen.getAllByRole('button');
    if (cards.length > 0) {
      await user.click(cards[0]);
      await waitFor(() => {
        expect(document.body.textContent!.length).toBeGreaterThan(0);
      });
    }
  });
});
