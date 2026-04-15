import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Brain,
} from 'lucide-react';
import type { GrammarTheoryModule } from '../../data/grammar-theory';
import { useUser } from '../../context/UserContext';

interface GrammarRecognitionQuizProps {
  module: GrammarTheoryModule;
  onComplete: (score: number, total: number) => void;
  onBack?: () => void;
  taskTitle?: string;
}

interface QuestionState {
  selectedOption: number | null;
  revealed: boolean;
}

export default function GrammarRecognitionQuiz({
  module,
  onComplete,
  onBack,
  taskTitle,
}: GrammarRecognitionQuizProps) {
  const { user } = useUser();
  const isAdmin = user?.isAdmin === true;
  const questions = module.exercises.recognition;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionState, setQuestionState] = useState<QuestionState>({
    selectedOption: null,
    revealed: false,
  });
  const [finished, setFinished] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelect = useCallback(
    (optionIdx: number) => {
      if (questionState.revealed) return;
      const isCorrect = optionIdx === currentQ.correct;
      if (isCorrect) setScore((s) => s + 1);
      setQuestionState({ selectedOption: optionIdx, revealed: true });
    },
    [questionState.revealed, currentQ]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setQuestionState({ selectedOption: null, revealed: false });
    }
  }, [currentIndex, questions.length]);

  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setQuestionState({ selectedOption: null, revealed: false });
    setFinished(false);
  }, []);

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No hay ejercicios de reconocimiento para este módulo.</p>
        {onBack && (
          <button onClick={onBack} className="btn-primary mt-4">
            Volver
          </button>
        )}
      </div>
    );
  }

  // Results screen
  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 70;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-[60vh] flex flex-col items-center justify-center w-full py-8"
      >
        <div className="w-full max-w-4xl text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.15 }}
            className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
              passed
                ? 'bg-green-500/20 text-green-400'
                : 'bg-orange-500/20 text-orange-400'
            }`}
          >
            {passed ? (
              <Trophy className="w-10 h-10" />
            ) : (
              <Brain className="w-10 h-10" />
            )}
          </motion.div>

          <h2 className="text-2xl font-bold text-white">
            {passed ? '¡Buen trabajo!' : 'Sigue practicando'}
          </h2>
          <p className="text-gray-400">
            {score} / {questions.length} correctas ({pct}%)
          </p>

          <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`h-full rounded-full ${
                passed
                  ? 'bg-gradient-to-r from-green-500 to-emerald-400'
                  : 'bg-gradient-to-r from-orange-500 to-yellow-400'
              }`}
            />
          </div>

          {(!passed && !isAdmin) && (
            <p className="text-sm text-orange-400 font-medium">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3 justify-center pt-2">
            {(!passed && !isAdmin) && (
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-700 text-gray-300 hover:text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reintentar
              </button>
            )}
            {(passed || isAdmin) && (
              <button
                onClick={() => onComplete(score, questions.length)}
                className="btn-primary px-6 py-2.5 flex items-center gap-2"
              >
                Continuar
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Quiz screen
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-start min-h-[60vh] py-6"
    >
      <div className="w-full max-w-6xl space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/20 text-accent-primary mb-2">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">
              Reconocimiento Gramatical
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            {module.title}
            {module.titleEs && module.titleEs !== module.title && (
              <span className="text-gray-500"> ({module.titleEs})</span>
            )}
            {' '}— Pregunta {currentIndex + 1} de {questions.length}
          </p>
          {taskTitle && (
            <p className="text-gray-500 text-xs mt-0.5">{taskTitle}</p>
          )}
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            animate={{
              width: `${((currentIndex + (questionState.revealed ? 1 : 0)) / questions.length) * 100}%`,
            }}
            className="h-full bg-accent-primary rounded-full"
          />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="card bg-gradient-to-br from-dark-700/50 to-dark-800/50"
          >
            {/* Sentence */}
            <div className="bg-dark-800 rounded-lg p-4 mb-4 border border-white/5">
              <p className="text-gray-200 text-lg leading-relaxed text-center font-medium">
                "{currentQ.sentence}"
              </p>
            </div>

            {/* Question */}
            <p className="text-white font-medium mb-4 text-center">
              {currentQ.question}
            </p>

            {/* Options */}
            <div className="space-y-2">
              {currentQ.options.map((opt, i) => {
                const isSelected = questionState.selectedOption === i;
                const isCorrect = i === currentQ.correct;
                const revealed = questionState.revealed;

                let optionClass =
                  'bg-dark-700 border-dark-600 text-gray-300 hover:border-accent-primary/50 hover:text-white cursor-pointer';

                if (revealed) {
                  if (isCorrect) {
                    optionClass =
                      'bg-green-500/10 border-green-500/40 text-green-300';
                  } else if (isSelected && !isCorrect) {
                    optionClass =
                      'bg-red-500/10 border-red-500/40 text-red-300';
                  } else {
                    optionClass =
                      'bg-dark-700/50 border-dark-600/50 text-gray-500';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={revealed}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${optionClass}`}
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm">{opt}</span>
                    {revealed && isCorrect && (
                      <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />
                    )}
                    {revealed && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-red-400 ml-auto" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation after answer */}
            <AnimatePresence>
              {questionState.revealed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20"
                >
                  <p className="text-blue-200 text-sm">
                    {currentQ.explanationEs}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Next button */}
        {questionState.revealed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <button
              onClick={handleNext}
              className="btn-primary px-8 py-3 flex items-center gap-2"
            >
              {currentIndex + 1 >= questions.length
                ? 'Ver resultado'
                : 'Siguiente'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
