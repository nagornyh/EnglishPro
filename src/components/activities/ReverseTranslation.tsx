import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Languages,
  Send,
  CheckCircle,
  XCircle,
  RotateCcw,
  Volume2,
  Lightbulb,
  ArrowRight,
  Star,
} from 'lucide-react';
import textAnalyzer from '../../services/textAnalyzer';

interface TranslationExercise {
  id: string;
  spanish: string;
  english: string;
  alternativeAnswers?: string[];
  hints?: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  category?: string;
}

interface ReverseTranslationProps {
  exercises: TranslationExercise[];
  onComplete?: (results: { correct: number; total: number; time: number }) => void;
  showHints?: boolean;
}

export default function ReverseTranslation({
  exercises,
  onComplete,
  showHints = true,
}: ReverseTranslationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean;
    similarity: number;
    corrections: Array<{ original: string; corrected: string; explanation: string }>;
    acceptableAnswer: string;
  } | null>(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [startTime] = useState(Date.now());
  const [showHintPanel, setShowHintPanel] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentExercise = exercises[currentIndex];
  const progress = ((currentIndex + (feedback ? 1 : 0)) / exercises.length) * 100;

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  const checkAnswer = () => {
    if (!userAnswer.trim()) return;

    const allPossibleAnswers = [
      currentExercise.english,
      ...(currentExercise.alternativeAnswers || []),
    ];

    // Check against all possible answers
    let bestMatch = { similarity: 0, answer: currentExercise.english };
    
    for (const answer of allPossibleAnswers) {
      const analysis = textAnalyzer.analyzeText(userAnswer.trim(), answer);
      if (analysis.similarity > bestMatch.similarity) {
        bestMatch = { similarity: analysis.similarity, answer };
      }
    }

    const analysis = textAnalyzer.analyzeText(userAnswer.trim(), bestMatch.answer);
    const isCorrect = textAnalyzer.isAcceptable(userAnswer.trim(), [bestMatch.answer], 0.85);

    setFeedback({
      isCorrect,
      similarity: bestMatch.similarity,
      corrections: analysis.corrections,
      acceptableAnswer: bestMatch.answer,
    });

    // Play sound
    if (isCorrect) {
      speak(bestMatch.answer);
    }
  };

  const nextExercise = () => {
    setResults([...results, feedback?.isCorrect || false]);
    
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setFeedback(null);
      setShowHintPanel(false);
    } else {
      const finalResults = [...results, feedback?.isCorrect || false];
      setResults(finalResults);
      setIsComplete(true);
    }
  };

  const useHint = () => {
    if (!showHints || !currentExercise.hints || hintsUsed >= currentExercise.hints.length) return;
    setShowHintPanel(true);
    setHintsUsed(hintsUsed + 1);
  };

  if (isComplete) {
    const correctCount = results.filter(r => r).length;
    const percentage = Math.round((correctCount / exercises.length) * 100);
    const totalTime = Math.round((Date.now() - startTime) / 1000);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
          percentage >= 80 ? 'bg-green-500/20' :
          percentage >= 60 ? 'bg-yellow-500/20' :
          'bg-red-500/20'
        }`}>
          {percentage >= 80 ? (
            <Star className="w-12 h-12 text-green-400" />
          ) : percentage >= 60 ? (
            <CheckCircle className="w-12 h-12 text-yellow-400" />
          ) : (
            <RotateCcw className="w-12 h-12 text-red-400" />
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {percentage >= 80 ? '¡Excelente!' :
             percentage >= 60 ? '¡Buen trabajo!' :
             'Sigue practicando'}
          </h2>
          <p className="text-gray-400">
            {correctCount} de {exercises.length} traducciones correctas
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="card">
            <p className="text-3xl font-bold text-accent-primary">{percentage}%</p>
            <p className="text-xs text-gray-400">Precisión</p>
          </div>
          <div className="card">
            <p className="text-3xl font-bold text-white">{totalTime}s</p>
            <p className="text-xs text-gray-400">Tiempo</p>
          </div>
          <div className="card">
            <p className="text-3xl font-bold text-yellow-400">{hintsUsed}</p>
            <p className="text-xs text-gray-400">Pistas usadas</p>
          </div>
        </div>

        <button
          onClick={() => {
            setCurrentIndex(0);
            setUserAnswer('');
            setFeedback(null);
            setResults([]);
            setHintsUsed(0);
            setShowHintPanel(false);
            setIsComplete(false);
          }}
          className="btn-secondary w-full flex items-center justify-center gap-2"
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
            onClick={() => onComplete({ correct: results.filter(r => r).length, total: exercises.length, time: Math.round((Date.now() - startTime) / 1000) })}
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
            animate={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm text-gray-400">
          {currentIndex + 1}/{exercises.length}
        </span>
      </div>

      {/* Source sentence (Spanish) */}
      <div className="card bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30">
        <div className="flex items-start gap-3">
          <Languages className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <p className="text-xs text-amber-400/70 mb-1">Traduce al inglés:</p>
            <p className="text-lg text-white font-medium">{currentExercise.spanish}</p>
            {currentExercise.category && (
              <span className="inline-block mt-2 text-xs px-2 py-1 bg-dark-600 rounded-full text-gray-400">
                {currentExercise.category}
              </span>
            )}
          </div>
          <span className={`px-2 py-1 rounded text-xs ${
            currentExercise.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
            currentExercise.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {currentExercise.difficulty === 'easy' ? 'Fácil' :
             currentExercise.difficulty === 'medium' ? 'Medio' : 'Difícil'}
          </span>
        </div>
      </div>

      {/* Hints */}
      <AnimatePresence>
        {showHintPanel && currentExercise.hints && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3 bg-accent-primary/10 rounded-xl border border-accent-primary/30"
          >
            <p className="text-xs text-accent-primary mb-2 flex items-center gap-1">
              <Lightbulb className="w-4 h-4" />
              Pistas:
            </p>
            <ul className="space-y-1">
              {currentExercise.hints.slice(0, hintsUsed).map((hint, i) => (
                <li key={i} className="text-sm text-gray-300">• {hint}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Answer input */}
      <div className="relative">
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Escribe la traducción en inglés..."
          className="input-field h-24 resize-none"
          disabled={feedback !== null}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey && !feedback) {
              e.preventDefault();
              checkAnswer();
            }
          }}
        />
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-xl ${
              feedback.isCorrect
                ? 'bg-green-500/10 border border-green-500/30'
                : 'bg-red-500/10 border border-red-500/30'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {feedback.isCorrect ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-green-400">¡Correcto!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-400">Casi...</span>
                  <span className="text-xs text-gray-400">
                    ({Math.round(feedback.similarity * 100)}% similar)
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 mb-2">
              <p className="text-gray-300">
                <span className="text-gray-500">Respuesta correcta: </span>
                <span className="text-white font-medium">{feedback.acceptableAnswer}</span>
              </p>
              <button
                onClick={() => speak(feedback.acceptableAnswer)}
                className="p-1 hover:bg-dark-600 rounded-full"
              >
                <Volume2 className="w-4 h-4 text-accent-primary" />
              </button>
            </div>

            {feedback.corrections.length > 0 && !feedback.isCorrect && (
              <div className="mt-3 pt-3 border-t border-dark-500">
                <p className="text-xs text-gray-400 mb-2">Errores encontrados:</p>
                {feedback.corrections.slice(0, 3).map((correction, i) => (
                  <div key={i} className="text-sm mb-1">
                    <span className="text-red-400 line-through">{correction.original}</span>
                    <span className="text-gray-500 mx-2">→</span>
                    <span className="text-green-400">{correction.corrected}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="flex gap-3">
        {!feedback ? (
          <>
            {showHints && currentExercise.hints && currentExercise.hints.length > hintsUsed && (
              <button
                onClick={useHint}
                className="px-4 py-2 bg-dark-600 hover:bg-dark-500 rounded-lg text-gray-300 flex items-center gap-2"
              >
                <Lightbulb className="w-4 h-4" />
                Pista
              </button>
            )}
            <button
              onClick={checkAnswer}
              disabled={!userAnswer.trim()}
              className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
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
                <Star className="w-5 h-5" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
