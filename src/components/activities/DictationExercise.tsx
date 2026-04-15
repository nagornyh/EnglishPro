import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Headphones,
  Play,
  Pause,
  Volume2,
  Send,
  CheckCircle,
  XCircle,
  RotateCcw,
  ArrowRight,
  Turtle,
  Rabbit,
  Trophy,
  Eye,
  EyeOff,
} from 'lucide-react';
import textAnalyzer from '../../services/textAnalyzer';

interface DictationSentence {
  id: string;
  text: string;
  translation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category?: string;
}

interface DictationExerciseProps {
  sentences: DictationSentence[];
  onComplete?: (results: { correct: number; total: number; accuracy: number }) => void;
  maxListens?: number;
  showTranslation?: boolean;
}

export default function DictationExercise({
  sentences,
  onComplete,
  maxListens = 5,
  showTranslation = true,
}: DictationExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userText, setUserText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [listenCount, setListenCount] = useState(0);
  const [speed, setSpeed] = useState<'slow' | 'normal'>('normal');
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean;
    similarity: number;
    corrections: Array<{ original: string; corrected: string }>;
  } | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [results, setResults] = useState<{ correct: boolean; similarity: number }[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const currentSentence = sentences[currentIndex];
  const progress = ((currentIndex + (feedback ? 1 : 0)) / sentences.length) * 100;

  const speak = (rate: number = 1) => {
    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(currentSentence.text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
    setListenCount((prev) => prev + 1);
  };

  const playAudio = () => {
    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      speak(speed === 'slow' ? 0.6 : 0.9);
    }
  };

  const toggleSpeed = () => {
    setSpeed((prev) => (prev === 'slow' ? 'normal' : 'slow'));
  };

  const checkAnswer = () => {
    const analysis = textAnalyzer.analyzeText(userText.trim(), currentSentence.text);
    const isCorrect = textAnalyzer.isAcceptable(userText.trim(), [currentSentence.text], 0.9);

    setFeedback({
      isCorrect,
      similarity: analysis.similarity,
      corrections: analysis.corrections.map((c) => ({
        original: c.original,
        corrected: c.corrected,
      })),
    });

    if (isCorrect) {
      // Play the correct sentence as confirmation
      const utterance = new SpeechSynthesisUtterance(currentSentence.text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const nextSentence = () => {
    setResults([
      ...results,
      {
        correct: feedback?.isCorrect || false,
        similarity: feedback?.similarity || 0,
      },
    ]);

    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserText('');
      setFeedback(null);
      setListenCount(0);
      setShowAnswer(false);
    } else {
      const finalResults = [
        ...results,
        {
          correct: feedback?.isCorrect || false,
          similarity: feedback?.similarity || 0,
        },
      ];
      setResults(finalResults);
      setIsComplete(true);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  // Highlight differences
  const renderDifferences = () => {
    const words = currentSentence.text.split(' ');
    const userWords = userText.trim().split(' ');

    return (
      <div className="space-y-2">
        <p className="text-xs text-gray-500">Tu respuesta vs. correcta:</p>
        <div className="flex flex-wrap gap-1">
          {words.map((word, i) => {
            const userWord = userWords[i] || '';
            const isMatch = word.toLowerCase() === userWord.toLowerCase();
            return (
              <span
                key={i}
                className={`px-1 rounded ${
                  isMatch ? 'text-green-400' : 'text-red-400 bg-red-500/20'
                }`}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  if (isComplete) {
    const correctCount = results.filter((r) => r.correct).length;
    const avgAccuracy = Math.round(
      (results.reduce((sum, r) => sum + r.similarity, 0) / results.length) * 100
    );
    const percentage = Math.round((correctCount / sentences.length) * 100);

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
              ? '¡Excelente oído!'
              : percentage >= 60
              ? '¡Buen trabajo!'
              : 'Sigue practicando'}
          </h2>
          <p className="text-gray-400">
            {correctCount} de {sentences.length} dictados perfectos
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="card">
            <p className="text-3xl font-bold text-accent-primary">{percentage}%</p>
            <p className="text-xs text-gray-400">Dictados perfectos</p>
          </div>
          <div className="card">
            <p className="text-3xl font-bold text-white">{avgAccuracy}%</p>
            <p className="text-xs text-gray-400">Precisión promedio</p>
          </div>
        </div>

        {percentage < 70 && (
          <p className="text-sm text-orange-400 font-medium text-center">
            Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
          </p>
        )}
        <div className="flex gap-3">
          <button
            onClick={() => {
              setCurrentIndex(0);
              setUserText('');
              setFeedback(null);
              setResults([]);
              setListenCount(0);
              setShowAnswer(false);
              setIsComplete(false);
            }}
            className="flex-1 btn-secondary flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Practicar de nuevo
          </button>
          {percentage >= 70 && onComplete && (
            <button
              onClick={() => onComplete({ correct: results.filter(r => r.correct).length, total: sentences.length, accuracy: avgAccuracy })}
              className="flex-1 btn-primary"
            >
              Continuar
            </button>
          )}
        </div>
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
          {currentIndex + 1}/{sentences.length}
        </span>
      </div>

      {/* Audio player card */}
      <div className="card bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/30">
        <div className="flex items-center gap-4">
          <button
            onClick={playAudio}
            disabled={listenCount >= maxListens && !feedback}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
              isPlaying
                ? 'bg-accent-primary text-white'
                : listenCount >= maxListens && !feedback
                ? 'bg-dark-600 text-gray-500 cursor-not-allowed'
                : 'bg-dark-600 hover:bg-accent-primary/20 text-accent-primary'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </button>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Headphones className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Dictado</span>
              <span
                className={`px-2 py-0.5 rounded text-xs ${
                  currentSentence.difficulty === 'easy'
                    ? 'bg-green-500/20 text-green-400'
                    : currentSentence.difficulty === 'medium'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {currentSentence.difficulty === 'easy'
                  ? 'Fácil'
                  : currentSentence.difficulty === 'medium'
                  ? 'Medio'
                  : 'Difícil'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleSpeed}
                className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${
                  speed === 'slow'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-dark-600 text-gray-400'
                }`}
              >
                {speed === 'slow' ? (
                  <Turtle className="w-4 h-4" />
                ) : (
                  <Rabbit className="w-4 h-4" />
                )}
                {speed === 'slow' ? 'Lento' : 'Normal'}
              </button>

              <div className="text-xs text-gray-500">
                Escuchas: {listenCount}/{maxListens}
              </div>

              {currentSentence.category && (
                <span className="text-xs text-gray-500 bg-dark-600 px-2 py-1 rounded">
                  {currentSentence.category}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Translation hint */}
        {showTranslation && currentSentence.translation && !feedback && (
          <div className="mt-4 pt-3 border-t border-dark-600">
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300"
            >
              {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAnswer ? 'Ocultar traducción' : 'Ver traducción'}
            </button>
            <AnimatePresence>
              {showAnswer && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-sm text-gray-400 italic mt-2"
                >
                  {currentSentence.translation}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Text input */}
      <div className="relative">
        <textarea
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          placeholder="Escribe lo que escuchas..."
          className="input-field h-28 resize-none"
          disabled={feedback !== null}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey && !feedback && userText.trim()) {
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
            className={`p-4 rounded-xl ${
              feedback.isCorrect
                ? 'bg-green-500/10 border border-green-500/30'
                : 'bg-red-500/10 border border-red-500/30'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              {feedback.isCorrect ? (
                <>
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="font-semibold text-green-400">¡Perfecto!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-red-400" />
                  <span className="font-semibold text-red-400">
                    {Math.round(feedback.similarity * 100)}% de precisión
                  </span>
                </>
              )}
            </div>

            {!feedback.isCorrect && renderDifferences()}

            <div className="mt-3 pt-3 border-t border-dark-600">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Respuesta correcta:</span>
                <button
                  onClick={() => {
                    const utterance = new SpeechSynthesisUtterance(currentSentence.text);
                    utterance.lang = 'en-US';
                    utterance.rate = 0.9;
                    speechSynthesis.speak(utterance);
                  }}
                  className="p-1 hover:bg-dark-600 rounded-full"
                >
                  <Volume2 className="w-4 h-4 text-accent-primary" />
                </button>
              </div>
              <p className="text-white mt-1">{currentSentence.text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="flex gap-3">
        {!feedback ? (
          <button
            onClick={checkAnswer}
            disabled={!userText.trim()}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            Comprobar
          </button>
        ) : (
          <button onClick={nextSentence} className="flex-1 btn-primary">
            {currentIndex < sentences.length - 1 ? (
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
