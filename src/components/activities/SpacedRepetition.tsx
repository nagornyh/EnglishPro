import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Check, 
  X, 
  Volume2, 
  Flame,
  Trophy,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import type { Word, VocabularyProgress } from '../../types';

interface SpacedRepetitionProps {
  words: Word[];
  vocabularyProgress: VocabularyProgress[];
  onComplete: (results: ReviewResults) => void;
  onUpdateProgress: (wordId: string, correct: boolean) => void;
}

interface ReviewResults {
  totalReviewed: number;
  correctCount: number;
  incorrectCount: number;
  xpEarned: number;
  masteryGained: string[];
}

interface ReviewCard {
  word: Word;
  progress: VocabularyProgress | null;
  dueForReview: boolean;
  priority: number;
}

// Spaced Repetition intervals in days
const SR_INTERVALS = [0, 1, 3, 7, 14, 30]; // Based on mastery level 0-5

export default function SpacedRepetition({
  words,
  vocabularyProgress,
  onComplete,
  onUpdateProgress
}: SpacedRepetitionProps) {
  const [reviewCards, setReviewCards] = useState<ReviewCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [reviewMode, setReviewMode] = useState<'front' | 'back'>('front');
  const [results, setResults] = useState<ReviewResults>({
    totalReviewed: 0,
    correctCount: 0,
    incorrectCount: 0,
    xpEarned: 0,
    masteryGained: []
  });
  const [isComplete, setIsComplete] = useState(false);

  // Calculate which words are due for review
  useEffect(() => {
    const today = new Date();
    
    const cards: ReviewCard[] = words.map(word => {
      const progress = vocabularyProgress.find(p => p.wordId === word.id) || null;
      
      let dueForReview = true;
      let priority = 100;

      if (progress) {
        const nextReviewDate = new Date(progress.nextReview);
        dueForReview = nextReviewDate <= today;
        
        // Priority: overdue > due today > learning > new
        if (dueForReview) {
          const daysOverdue = Math.floor((today.getTime() - nextReviewDate.getTime()) / (1000 * 60 * 60 * 24));
          priority = Math.min(100, 50 + daysOverdue * 10);
        } else {
          priority = 10 - progress.masteryLevel;
        }
      } else {
        // New word - high priority
        priority = 80;
      }

      return { word, progress, dueForReview, priority };
    });

    // Sort by priority (higher first) and take words due for review
    const dueCards = cards
      .filter(c => c.dueForReview)
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 20); // Limit to 20 cards per session

    setReviewCards(dueCards.length > 0 ? dueCards : cards.slice(0, 10));
  }, [words, vocabularyProgress]);

  const currentCard = reviewCards[currentIndex];

  const speak = useCallback((text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }, []);

  const handleResponse = (correct: boolean) => {
    if (!currentCard) return;

    // Update progress for this word
    onUpdateProgress(currentCard.word.id, correct);

    // Update session results
    setResults(prev => ({
      ...prev,
      totalReviewed: prev.totalReviewed + 1,
      correctCount: prev.correctCount + (correct ? 1 : 0),
      incorrectCount: prev.incorrectCount + (correct ? 0 : 1),
      xpEarned: prev.xpEarned + (correct ? 10 : 2)
    }));

    // Move to next card
    if (currentIndex < reviewCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
      setReviewMode('front');
    } else {
      setIsComplete(true);
    }
  };

  const handleComplete = () => {
    onComplete(results);
  };

  if (reviewCards.length === 0) {
    return (
      <div className="card text-center py-12">
        <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">¡Todo al día!</h3>
        <p className="text-gray-400 mb-4">
          No tienes palabras pendientes de repaso. Vuelve más tarde.
        </p>
        <button onClick={handleComplete} className="btn-primary">
          Continuar
        </button>
      </div>
    );
  }

  if (isComplete) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card text-center py-8"
      >
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
          <Trophy className="w-10 h-10 text-green-400" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">¡Repaso Completado!</h3>
        
        <div className="grid grid-cols-3 gap-4 my-6 max-w-md mx-auto">
          <div className="p-4 bg-dark-700/50 rounded-xl">
            <p className="text-2xl font-bold text-white">{results.totalReviewed}</p>
            <p className="text-xs text-gray-400">Revisadas</p>
          </div>
          <div className="p-4 bg-green-500/20 rounded-xl">
            <p className="text-2xl font-bold text-green-400">{results.correctCount}</p>
            <p className="text-xs text-gray-400">Correctas</p>
          </div>
          <div className="p-4 bg-amber-500/20 rounded-xl">
            <p className="text-2xl font-bold text-amber-400">+{results.xpEarned}</p>
            <p className="text-xs text-gray-400">XP</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <Check className="w-5 h-5 text-green-400" />
          <span className="text-gray-300">
            Precisión: {Math.round((results.correctCount / results.totalReviewed) * 100)}%
          </span>
        </div>

        {Math.round((results.correctCount / results.totalReviewed) * 100) < 70 && (
          <p className="text-sm text-orange-400 font-medium mb-4">
            Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
          </p>
        )}
        <div className="flex gap-3 justify-center">
          {Math.round((results.correctCount / results.totalReviewed) * 100) < 70 && (
            <button
              onClick={() => {
                setCurrentIndex(0);
                setIsComplete(false);
                setResults({
                  totalReviewed: 0,
                  correctCount: 0,
                  incorrectCount: 0,
                  xpEarned: 0,
                  masteryGained: [],
                });
                setShowAnswer(false);
                setReviewMode('front');
              }}
              className="btn-secondary flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Reintentar
            </button>
          )}
          {Math.round((results.correctCount / results.totalReviewed) * 100) >= 70 && (
            <button onClick={handleComplete} className="btn-primary">
              <ArrowRight className="w-5 h-5 mr-2" />
              Continuar
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  const progress = ((currentIndex + 1) / reviewCards.length) * 100;
  const masteryLevel = currentCard.progress?.masteryLevel || 0;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Brain className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-bold text-white">Repaso Espaciado</h3>
            <p className="text-sm text-gray-400">
              Tarjeta {currentIndex + 1} de {reviewCards.length}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-green-400">
            <Check className="w-4 h-4" />
            <span>{results.correctCount}</span>
          </div>
          <div className="flex items-center gap-2 text-red-400">
            <X className="w-4 h-4" />
            <span>{results.incorrectCount}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      {/* Flashcard */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.word.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="card min-h-[300px] flex flex-col"
        >
          {/* Mastery indicator */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Dominio:</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4, 5].map(level => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded-full ${
                      level <= masteryLevel 
                        ? 'bg-purple-500' 
                        : 'bg-dark-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            {currentCard.word.difficulty !== undefined && (
              <span className={`text-xs px-2 py-1 rounded-full ${
                currentCard.word.difficulty === 1 ? 'bg-green-500/20 text-green-400' :
                currentCard.word.difficulty === 2 ? 'bg-amber-500/20 text-amber-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {currentCard.word.difficulty === 1 ? 'Básico' : currentCard.word.difficulty === 2 ? 'Intermedio' : 'Avanzado'}
              </span>
            )}
          </div>

          {/* Card content */}
          <div 
            className="flex-1 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => !showAnswer && setShowAnswer(true)}
          >
            {!showAnswer ? (
              // Front of card
              <div className="text-center">
                <motion.p 
                  className="text-3xl font-bold text-white mb-4"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {reviewMode === 'front' ? currentCard.word.word : currentCard.word.translation}
                </motion.p>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(currentCard.word.word);
                  }}
                  className="p-2 rounded-full bg-accent-primary/20 text-accent-primary hover:bg-accent-primary/30 transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                
                <p className="text-sm text-gray-500 mt-6">
                  Toca para ver la respuesta
                </p>
              </div>
            ) : (
              // Back of card
              <motion.div 
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                className="text-center w-full"
              >
                <p className="text-2xl font-bold text-white mb-2">
                  {reviewMode === 'front' ? currentCard.word.translation : currentCard.word.word}
                </p>
                
                {currentCard.word.example && (
                  <div className="mt-4 p-4 bg-dark-700/50 rounded-lg text-left">
                    <p className="text-sm text-gray-400 mb-1">Ejemplo:</p>
                    <p className="text-gray-300 italic">"{currentCard.word.example}"</p>
                  </div>
                )}

                {currentCard.word.definition && (
                  <p className="mt-3 text-sm text-gray-400">
                    {currentCard.word.definition}
                  </p>
                )}
              </motion.div>
            )}
          </div>

          {/* Response buttons */}
          {showAnswer && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 mt-4"
            >
              <button
                onClick={() => handleResponse(false)}
                className="flex-1 py-4 rounded-xl bg-red-500/20 text-red-400 font-medium hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-5 h-5" />
                <span>No la sabía</span>
              </button>
              <button
                onClick={() => handleResponse(true)}
                className="flex-1 py-4 rounded-xl bg-green-500/20 text-green-400 font-medium hover:bg-green-500/30 transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                <span>¡La sabía!</span>
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Mode toggle */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setReviewMode('front')}
          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
            reviewMode === 'front' 
              ? 'bg-accent-primary text-white' 
              : 'bg-dark-700 text-gray-400 hover:text-white'
          }`}
        >
          Inglés → Español
        </button>
        <button
          onClick={() => setReviewMode('back')}
          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
            reviewMode === 'back' 
              ? 'bg-accent-primary text-white' 
              : 'bg-dark-700 text-gray-400 hover:text-white'
          }`}
        >
          Español → Inglés
        </button>
      </div>

      {/* Study tips */}
      <div className="p-4 bg-dark-700/50 rounded-xl">
        <p className="text-sm text-gray-400">
          <Flame className="w-4 h-4 inline mr-2 text-amber-400" />
          <strong className="text-white">Tip:</strong> El repaso espaciado te ayuda a recordar mejor. 
          Las palabras que aciertes aparecerán menos frecuentemente.
        </p>
      </div>
    </div>
  );
}

// Helper function to calculate next review date
export function calculateNextReview(masteryLevel: number, correct: boolean): Date {
  const now = new Date();
  let newLevel = masteryLevel;
  
  if (correct) {
    newLevel = Math.min(5, masteryLevel + 1);
  } else {
    newLevel = Math.max(0, masteryLevel - 1);
  }
  
  const daysUntilReview = SR_INTERVALS[newLevel];
  const nextReview = new Date(now.getTime() + daysUntilReview * 24 * 60 * 60 * 1000);
  
  return nextReview;
}
