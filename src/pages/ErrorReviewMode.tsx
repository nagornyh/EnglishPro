import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, 
  Volume2,
  X,
  CheckCircle,
  ArrowLeft,
  Brain
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import db from '../services/database';
import { levels } from '../data/levels';
import type { VocabularyProgress, Word } from '../types';

interface MistakeWord extends VocabularyProgress {
  wordData?: Word;
}

// Helper to get all words from all levels
function getAllWordsFromLevels(): Word[] {
  const words: Word[] = [];
  for (const level of levels) {
    for (const task of level.tasks) {
      if (task.vocabulary) {
        const vocab = task.vocabulary;
        // Vocabulary is an object with arrays for each word type
        words.push(...(vocab.nouns || []));
        words.push(...(vocab.verbs || []));
        words.push(...(vocab.adjectives || []));
        words.push(...(vocab.adverbs || []));
        words.push(...(vocab.expressions || []));
        words.push(...(vocab.prepositions || []));
      }
    }
  }
  return words;
}

export default function ErrorReviewMode() {
  const { user, updateBatchWordProgress } = useUser();
  const [mistakes, setMistakes] = useState<MistakeWord[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ correct: number; incorrect: number }>({ correct: 0, incorrect: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [mode, setMode] = useState<'review' | 'quiz'>('review');

  useEffect(() => {
    loadMistakes();
  }, [user?.id]);

  const loadMistakes = async () => {
    if (!user) return;
    setLoading(true);
    
    try {
      const allProgress = await db.getVocabularyProgressByUser(user.id);
      const allWords = getAllWordsFromLevels();
      
      // Get words with low mastery or recent mistakes
      const problemWords = allProgress.filter((p: VocabularyProgress) => 
        p.masteryLevel < 3 || 
        (p.incorrectCount > 0 && p.incorrectCount >= p.correctCount * 0.3)
      ).sort((a: VocabularyProgress, b: VocabularyProgress) => {
        // Prioritize by: mastery level (low first), then by incorrect ratio
        const ratioA = a.incorrectCount / Math.max(1, a.correctCount + a.incorrectCount);
        const ratioB = b.incorrectCount / Math.max(1, b.correctCount + b.incorrectCount);
        if (a.masteryLevel !== b.masteryLevel) {
          return a.masteryLevel - b.masteryLevel;
        }
        return ratioB - ratioA;
      }).slice(0, 20);

      // Enrich with word data
      const enriched = problemWords.map((p: VocabularyProgress) => ({
        ...p,
        wordData: allWords.find((w: Word) => w.id === p.baseWordId),
      })).filter((p: MistakeWord) => p.wordData);

      setMistakes(enriched);
    } catch (error) {
      console.error('Error loading mistakes:', error);
    }
    
    setLoading(false);
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const handleKnow = () => {
    setSessionResults(prev => ({ ...prev, correct: prev.correct + 1 }));
    goToNext(true);
  };

  const handleDontKnow = () => {
    setSessionResults(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    goToNext(false);
  };

  const goToNext = (wasCorrect: boolean) => {
    const currentMistake = mistakes[currentIndex];
    if (currentMistake?.wordData) {
      updateBatchWordProgress([{ wordId: currentMistake.wordData.id, correct: wasCorrect }], {});
    }

    setShowAnswer(false);
    if (currentIndex < mistakes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setSessionResults({ correct: 0, incorrect: 0 });
    setIsComplete(false);
    loadMistakes();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="spinner mx-auto mb-4" />
          <p className="text-gray-400">Analizando palabras problemáticas...</p>
        </div>
      </div>
    );
  }

  if (mistakes.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh] text-center"
      >
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-400" />
        </div>
        <h2 className="heading-2 text-white mb-4">¡Excelente trabajo!</h2>
        <p className="text-gray-400 mb-6 max-w-md">
          No tienes palabras problemáticas por repasar. Sigue practicando para mantener tu nivel.
        </p>
        <Link to="/practice" className="btn-primary">
          Ir a Práctica
        </Link>
      </motion.div>
    );
  }

  if (isComplete) {
    const accuracy = Math.round((sessionResults.correct / (sessionResults.correct + sessionResults.incorrect)) * 100);
    const xpEarned = sessionResults.correct * 15 + sessionResults.incorrect * 5;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh] text-center"
      >
        <div className="text-6xl mb-6">
          {accuracy >= 80 ? '🎉' : accuracy >= 50 ? '👍' : '💪'}
        </div>
        <h2 className="heading-2 text-white mb-4">¡Repaso Completado!</h2>
        
        <div className="card max-w-md w-full mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-green-400">{sessionResults.correct}</p>
              <p className="text-sm text-gray-400">Recordadas</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-400">{sessionResults.incorrect}</p>
              <p className="text-sm text-gray-400">Olvidadas</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">{accuracy}%</p>
              <p className="text-sm text-gray-400">Precisión</p>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 max-w-md w-full mb-6">
          <p className="text-lg text-white">
            <span className="text-2xl font-bold gradient-text">+{xpEarned}</span> XP ganados
          </p>
        </div>

        <div className="flex gap-3">
          <button onClick={restart} className="btn-secondary flex items-center gap-2">
            <RefreshCw className="w-5 h-5" />
            Repasar Más
          </button>
          <Link to="/practice" className="btn-primary">
            Continuar
          </Link>
        </div>
      </motion.div>
    );
  }

  const currentMistake = mistakes[currentIndex];
  const word = currentMistake.wordData;

  if (!word) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link 
          to="/practice"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300">Repaso de Errores</span>
          </div>
          <span className="text-gray-400">
            {currentIndex + 1} / {mistakes.length}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-dark-700 rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / mistakes.length) * 100}%` }}
        />
      </div>

      {/* Mode Toggle */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setMode('review')}
          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
            mode === 'review' 
              ? 'bg-accent-primary text-white' 
              : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
          }`}
        >
          Modo Repaso
        </button>
        <button
          onClick={() => setMode('quiz')}
          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
            mode === 'quiz' 
              ? 'bg-accent-primary text-white' 
              : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
          }`}
        >
          Modo Quiz
        </button>
      </div>

      {/* Card */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="card text-center"
      >
        {/* Mastery indicator */}
        <div className="flex justify-between items-center mb-4">
          <span className={`text-xs px-2 py-1 rounded-full ${
            currentMistake.masteryLevel <= 1 
              ? 'bg-red-500/20 text-red-400' 
              : currentMistake.masteryLevel <= 2 
              ? 'bg-yellow-500/20 text-yellow-400'
              : 'bg-green-500/20 text-green-400'
          }`}>
            Nivel {currentMistake.masteryLevel}/5
          </span>
          <span className="text-xs text-gray-500">
            {currentMistake.correctCount}✓ / {currentMistake.incorrectCount}✗
          </span>
        </div>

        {mode === 'review' ? (
          <>
            {/* Word */}
            <div className="mb-6">
              <button
                onClick={() => speak(word.word)}
                className="text-4xl font-bold text-white hover:text-accent-primary transition-colors inline-flex items-center gap-2"
              >
                {word.word}
                <Volume2 className="w-6 h-6 opacity-50" />
              </button>
            </div>

            {/* Show/Hide Translation */}
            <AnimatePresence>
              {showAnswer ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 mb-6"
                >
                  <div className="bg-dark-700/50 rounded-xl p-4">
                    <p className="text-xl text-white mb-2">{word.translation}</p>
                    {word.example && (
                      <p className="text-sm text-gray-400 italic">"{word.example}"</p>
                    )}
                    {word.exampleEs && (
                      <p className="text-xs text-gray-500 mt-1">{word.exampleEs}</p>
                    )}
                  </div>
                </motion.div>
              ) : (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="w-full py-4 border-2 border-dashed border-dark-500 rounded-xl text-gray-400 hover:border-accent-primary hover:text-accent-primary transition-colors mb-6"
                >
                  Mostrar traducción
                </button>
              )}
            </AnimatePresence>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleDontKnow}
                className="flex-1 py-4 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-5 h-5" />
                No la sé
              </button>
              <button
                onClick={handleKnow}
                className="flex-1 py-4 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                ¡La sé!
              </button>
            </div>
          </>
        ) : (
          /* Quiz mode */
          <>
            <div className="mb-6">
              <p className="text-gray-400 mb-2">¿Cuál es la traducción de:</p>
              <button
                onClick={() => speak(word.word)}
                className="text-3xl font-bold text-white hover:text-accent-primary transition-colors inline-flex items-center gap-2"
              >
                {word.word}
                <Volume2 className="w-5 h-5 opacity-50" />
              </button>
            </div>

            <AnimatePresence>
              {showAnswer ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4"
                >
                  <div className="bg-accent-primary/20 rounded-xl p-4">
                    <p className="text-xl text-white font-semibold">{word.translation}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleDontKnow}
                      className="flex-1 btn-secondary flex items-center justify-center gap-2"
                    >
                      <X className="w-5 h-5" />
                      Fallé
                    </button>
                    <button
                      onClick={handleKnow}
                      className="flex-1 btn-primary flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Acerté
                    </button>
                  </div>
                </motion.div>
              ) : (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="w-full btn-primary py-4"
                >
                  Ver Respuesta
                </button>
              )}
            </AnimatePresence>
          </>
        )}
      </motion.div>

      {/* Stats */}
      <div className="flex justify-center gap-8 mt-6 text-sm">
        <div className="text-center">
          <p className="text-green-400 font-bold text-xl">{sessionResults.correct}</p>
          <p className="text-gray-500">Recordadas</p>
        </div>
        <div className="text-center">
          <p className="text-red-400 font-bold text-xl">{sessionResults.incorrect}</p>
          <p className="text-gray-500">Olvidadas</p>
        </div>
      </div>
    </div>
  );
}
