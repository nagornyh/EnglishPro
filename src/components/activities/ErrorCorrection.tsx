import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  ArrowRight,
  ArrowLeft,
  Edit3,
  Lightbulb,
  Trophy,
  RefreshCw,
  Target
} from 'lucide-react';
import type { TaskExercise } from '../../types';
import { useUser } from '../../context/UserContext';

interface ErrorCorrectionProps {
  exercise: TaskExercise;
  onComplete: (score: number, total: number) => void;
  onBack?: () => void;
}

export default function ErrorCorrection({ 
  exercise, 
  onComplete,
  onBack
}: ErrorCorrectionProps) {
  const { user } = useUser();
  const isAdmin = user?.isAdmin === true;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [results, setResults] = useState<{ itemId: string; correct: boolean }[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentItem = exercise.items[currentIndex];
  const progress = ((currentIndex + 1) / exercise.items.length) * 100;
  const correctCount = results.filter(r => r.correct).length;

  const normalizeAnswer = (str: string): string => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[.,!?;:'"]/g, '')
      .replace(/\s+/g, ' ');
  };

  const checkAnswer = (): boolean => {
    const normalized = normalizeAnswer(userAnswer);
    const correctAnswers = Array.isArray(currentItem.correctAnswer) 
      ? currentItem.correctAnswer 
      : [currentItem.correctAnswer];
    
    return correctAnswers.some(answer => 
      normalizeAnswer(answer) === normalized
    );
  };

  const handleSubmit = () => {
    if (!userAnswer.trim() || hasSubmitted) return;
    
    const correct = checkAnswer();
    setIsCorrect(correct);
    setHasSubmitted(true);
    setResults(prev => [...prev, { itemId: currentItem.id, correct }]);
  };

  const handleNext = () => {
    if (currentIndex < exercise.items.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer('');
      setHasSubmitted(false);
      setIsCorrect(false);
      setShowHint(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setUserAnswer('');
    setHasSubmitted(false);
    setIsCorrect(false);
    setResults([]);
    setShowResults(false);
    setShowHint(false);
  };

  // Results screen
  if (showResults) {
    const percentage = Math.round((correctCount / exercise.items.length) * 100);
    const passed = percentage >= 70;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-[70vh] py-8"
      >
        <div className="w-full max-w-6xl space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
              passed ? 'bg-green-500/20' : 'bg-orange-500/20'
            }`}>
              {passed ? (
                <Trophy className="w-12 h-12 text-green-400" />
              ) : (
                <RefreshCw className="w-12 h-12 text-orange-400" />
              )}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {passed ? '¡Excelente trabajo!' : 'Sigue practicando'}
            </h1>
            <p className="text-gray-400">
              Has corregido {correctCount} de {exercise.items.length} oraciones correctamente
            </p>
          </motion.div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">Puntuación</span>
              <span className={`text-4xl font-bold ${passed ? 'text-green-400' : 'text-orange-400'}`}>
                {percentage}%
              </span>
            </div>
            <div className="h-4 bg-dark-600 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1 }}
                className={`h-full rounded-full ${passed ? 'bg-green-500' : 'bg-orange-500'}`}
              />
            </div>
          </div>

          {(!passed && !isAdmin) && (
            <p className="text-sm text-orange-400 font-medium text-center">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3">
            {(!passed && !isAdmin) && (
              <button
                onClick={handleRetry}
                className="flex-1 btn-secondary flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Reintentar
              </button>
            )}
            {(passed || isAdmin) && (
              <button
                onClick={() => onComplete(correctCount, exercise.items.length)}
                className="flex-1 btn-primary flex items-center justify-center gap-2"
              >
                Continuar
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-[70vh] py-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
        )}
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">{currentIndex + 1} / {exercise.items.length}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-dark-600 rounded-full mb-8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-accent-primary rounded-full"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 mb-3">
          <Edit3 className="w-5 h-5" />
          <span className="text-sm font-medium">Corrección de Errores</span>
        </div>
        <h2 className="text-xl font-bold text-white">
          {exercise.titleEs || exercise.title}
        </h2>
        <p className="text-gray-400 mt-2">
          {exercise.instructionEs || exercise.instruction}
        </p>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex-1 space-y-6"
        >
          {/* Sentence with error */}
          <div className="card bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-red-400 uppercase tracking-wide mb-2">
                  Oración con error
                </p>
                <p className="text-xl text-white">
                  {currentItem.prompt}
                </p>
                {currentItem.promptEs && (
                  <p className="text-gray-400 mt-2 text-sm">
                    ({currentItem.promptEs})
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* User Input */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400">
              Escribe la oración corregida:
            </label>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={hasSubmitted}
              placeholder="Escribe aquí la oración correcta..."
              className={`w-full p-4 rounded-xl bg-dark-700 border-2 text-white placeholder-gray-500 resize-none focus:outline-none transition-colors ${
                hasSubmitted
                  ? isCorrect
                    ? 'border-green-500 bg-green-500/10'
                    : 'border-red-500 bg-red-500/10'
                  : 'border-dark-500 focus:border-accent-primary'
              }`}
              rows={3}
            />
          </div>

          {/* Hint */}
          {currentItem.hint && !hasSubmitted && (
            <div>
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-sm text-accent-primary hover:underline flex items-center gap-1"
                >
                  <Lightbulb className="w-4 h-4" />
                  Ver pista
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20"
                >
                  <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <p className="text-sm text-yellow-300">
                    {currentItem.hintEs || currentItem.hint}
                  </p>
                </motion.div>
              )}
            </div>
          )}

          {/* Feedback after submission */}
          {hasSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl ${
                isCorrect 
                  ? 'bg-green-500/10 border border-green-500/30' 
                  : 'bg-red-500/10 border border-red-500/30'
              }`}
            >
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                )}
                <div>
                  <p className={`font-semibold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                  </p>
                  {!isCorrect && (
                    <p className="text-white mt-1">
                      Respuesta correcta: {Array.isArray(currentItem.correctAnswer) 
                        ? currentItem.correctAnswer[0] 
                        : currentItem.correctAnswer}
                    </p>
                  )}
                  {currentItem.explanation && (
                    <p className="text-sm text-gray-400 mt-2">
                      {currentItem.explanationEs || currentItem.explanation}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      <div className="mt-8 flex justify-end">
        {!hasSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!userAnswer.trim()}
            className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Comprobar
            <CheckCircle className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="btn-primary flex items-center gap-2"
          >
            {currentIndex < exercise.items.length - 1 ? 'Siguiente' : 'Ver Resultados'}
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
