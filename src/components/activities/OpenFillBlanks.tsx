import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Edit3,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Volume2,
  HelpCircle,
  Trophy,
} from 'lucide-react';
import textAnalyzer from '../../services/textAnalyzer';

interface BlankExercise {
  id: string;
  sentence: string; // Use ___ for blanks
  answers: string[][]; // Array of acceptable answers for each blank
  hints?: string[];
  context?: string;
  translation?: string;
}

interface OpenFillBlanksProps {
  exercises: BlankExercise[];
  onComplete?: (results: { correct: number; total: number; blanksCorrect: number; blanksTotal: number }) => void;
  allowPartialCredit?: boolean;
}

export default function OpenFillBlanks({
  exercises,
  onComplete,
  allowPartialCredit = true,
}: OpenFillBlanksProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{
    blanksCorrect: boolean[];
    isFullyCorrect: boolean;
  } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [results, setResults] = useState<{ correct: number; total: number }[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const currentExercise = exercises[currentIndex];
  const blanksCount = (currentExercise.sentence.match(/___/g) || []).length;

  useEffect(() => {
    // Initialize empty answers for current exercise
    setUserAnswers(new Array(blanksCount).fill(''));
    setFeedback(null);
    setShowHint(false);
  }, [currentIndex, blanksCount]);

  // Focus first input when exercise changes
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [currentIndex]);

  const speak = (text: string) => {
    const fullSentence = text.replace(/___/g, '...');
    const utterance = new SpeechSynthesisUtterance(fullSentence);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    speechSynthesis.speak(utterance);
  };

  const speakComplete = () => {
    let sentence = currentExercise.sentence;
    currentExercise.answers.forEach((answers) => {
      sentence = sentence.replace('___', answers[0]);
    });
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  const checkAnswers = () => {
    const blanksCorrect = userAnswers.map((answer, index) => {
      const acceptableAnswers = currentExercise.answers[index] || [];
      return acceptableAnswers.some((acceptable) =>
        textAnalyzer.isAcceptable(answer.trim().toLowerCase(), [acceptable.toLowerCase()], 0.9)
      );
    });

    const isFullyCorrect = blanksCorrect.every((c) => c);
    setFeedback({ blanksCorrect, isFullyCorrect });

    if (isFullyCorrect) {
      speakComplete();
    }
  };

  const nextExercise = () => {
    const correctBlanks = feedback?.blanksCorrect.filter((c) => c).length || 0;
    setResults([...results, { correct: correctBlanks, total: blanksCount }]);

    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const finalResults = [...results, { correct: correctBlanks, total: blanksCount }];
      setResults(finalResults);
      setIsComplete(true);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (index < blanksCount - 1) {
        inputRefs.current[index + 1]?.focus();
      } else if (!feedback) {
        checkAnswers();
      }
    } else if (e.key === 'Tab' && !e.shiftKey && index === blanksCount - 1) {
      e.preventDefault();
      if (!feedback) checkAnswers();
    }
  };

  const renderSentence = () => {
    const parts = currentExercise.sentence.split('___');
    return parts.map((part, index) => (
      <span key={index}>
        <span className="text-gray-200">{part}</span>
        {index < parts.length - 1 && (
          <span className="inline-block mx-1 align-middle">
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={userAnswers[index] || ''}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              disabled={feedback !== null}
              className={`w-24 md:w-32 px-2 py-1 bg-dark-600 rounded text-center text-white outline-none transition-all ${
                feedback
                  ? feedback.blanksCorrect[index]
                    ? 'ring-2 ring-green-500 bg-green-500/20'
                    : 'ring-2 ring-red-500 bg-red-500/20'
                  : 'focus:ring-2 focus:ring-accent-primary'
              }`}
              placeholder={`(${index + 1})`}
            />
            {feedback && !feedback.blanksCorrect[index] && (
              <span className="ml-1 text-green-400 text-sm">
                ({currentExercise.answers[index]?.[0]})
              </span>
            )}
          </span>
        )}
      </span>
    ));
  };

  if (isComplete) {
    const totalBlanksCorrect = results.reduce((sum, r) => sum + r.correct, 0);
    const totalBlanks = results.reduce((sum, r) => sum + r.total, 0);
    const percentage = Math.round((totalBlanksCorrect / totalBlanks) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div
          className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
            percentage >= 80
              ? 'bg-green-500/20'
              : percentage >= 60
              ? 'bg-yellow-500/20'
              : 'bg-red-500/20'
          }`}
        >
          <Trophy
            className={`w-12 h-12 ${
              percentage >= 80
                ? 'text-green-400'
                : percentage >= 60
                ? 'text-yellow-400'
                : 'text-red-400'
            }`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {percentage >= 80
              ? '¡Excelente trabajo!'
              : percentage >= 60
              ? '¡Buen intento!'
              : 'Necesitas más práctica'}
          </h2>
          <p className="text-gray-400">
            {totalBlanksCorrect} de {totalBlanks} espacios correctos
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="card">
            <p className="text-3xl font-bold text-accent-primary">{percentage}%</p>
            <p className="text-xs text-gray-400">Precisión</p>
          </div>
          <div className="card">
            <p className="text-3xl font-bold text-white">{exercises.length}</p>
            <p className="text-xs text-gray-400">Ejercicios</p>
          </div>
        </div>

        <button
          onClick={() => {
            setCurrentIndex(0);
            setUserAnswers([]);
            setFeedback(null);
            setResults([]);
            setIsComplete(false);
          }}
          className="btn-primary w-full"
        >
          <RotateCcw className="w-5 h-5" />
          Practicar de nuevo
        </button>
        {percentage < 70 && (
          <p className="text-sm text-orange-400 font-medium text-center">
            Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
          </p>
        )}
        {percentage >= 70 && onComplete && (
          <button
            onClick={() => {
              const tb = results.reduce((s, r) => s + r.correct, 0);
              const tot = results.reduce((s, r) => s + r.total, 0);
              onComplete({ correct: results.filter(r => allowPartialCredit ? r.correct > 0 : r.correct === r.total).length, total: exercises.length, blanksCorrect: tb, blanksTotal: tot });
            }}
            className="btn-primary w-full"
          >
            Continuar
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-dark-600 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + (feedback ? 1 : 0)) / exercises.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-gray-400">
          {currentIndex + 1}/{exercises.length}
        </span>
      </div>

      {/* Context */}
      {currentExercise.context && (
        <div className="p-3 bg-dark-700 rounded-lg">
          <p className="text-sm text-gray-400">{currentExercise.context}</p>
        </div>
      )}

      {/* Sentence with blanks */}
      <div className="card">
        <div className="flex items-start gap-3">
          <Edit3 className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-2">Completa los espacios:</p>
            <p className="text-lg leading-relaxed">{renderSentence()}</p>
          </div>
          <button
            onClick={() => speak(currentExercise.sentence)}
            className="p-2 hover:bg-dark-600 rounded-full"
          >
            <Volume2 className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Translation hint */}
        {currentExercise.translation && (
          <p className="mt-3 pt-3 border-t border-dark-600 text-sm text-gray-400 italic">
            {currentExercise.translation}
          </p>
        )}
      </div>

      {/* Hints */}
      <AnimatePresence>
        {showHint && currentExercise.hints && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3 bg-accent-primary/10 rounded-xl border border-accent-primary/30"
          >
            <ul className="space-y-1">
              {currentExercise.hints.map((hint, i) => (
                <li key={i} className="text-sm text-gray-300">
                  • {hint}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl flex items-center gap-3 ${
              feedback.isFullyCorrect
                ? 'bg-green-500/10 border border-green-500/30'
                : 'bg-amber-500/10 border border-amber-500/30'
            }`}
          >
            {feedback.isFullyCorrect ? (
              <>
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-green-400 font-medium">¡Perfecto!</span>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-amber-400" />
                <span className="text-amber-400 font-medium">
                  {feedback.blanksCorrect.filter((c) => c).length} de {blanksCount} correctos
                </span>
              </>
            )}
            <button
              onClick={speakComplete}
              className="ml-auto p-2 hover:bg-dark-600 rounded-full"
            >
              <Volume2 className="w-5 h-5 text-accent-primary" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="flex gap-3">
        {!feedback ? (
          <>
            {currentExercise.hints && !showHint && (
              <button
                onClick={() => setShowHint(true)}
                className="px-4 py-2 bg-dark-600 hover:bg-dark-500 rounded-lg text-gray-300 flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                Pista
              </button>
            )}
            <button
              onClick={checkAnswers}
              disabled={userAnswers.some((a) => !a.trim())}
              className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CheckCircle className="w-5 h-5" />
              Comprobar
            </button>
          </>
        ) : (
          <button onClick={nextExercise} className="flex-1 btn-primary">
            {currentIndex < exercises.length - 1 ? (
              <>
                Siguiente
                <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              <>
                Ver resultados
                <Trophy className="w-5 h-5" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
