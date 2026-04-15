import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RotateCcw, Check, X, Volume2 } from 'lucide-react';
import type { Word } from '../../types';
import type { ActivitySessionResult } from '../../types';
import { useUser } from '../../context/UserContext';
import { PronunciationHint } from '../PronunciationHint';

interface FlashcardsProps {
  words: Word[];
  onComplete: (result: ActivitySessionResult) => void;
  onBack: () => void;
  levelId?: number;
  taskId?: number;
}

export default function Flashcards({ words, onComplete, onBack, levelId, taskId }: FlashcardsProps) {
  const { updateBatchWordProgress } = useUser();
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState<Set<string>>(new Set());
  const [unknown, setUnknown] = useState<Set<string>>(new Set());
  const [showResults, setShowResults] = useState(false);

  const currentWord = words[currentIndex];
  const progress = ((currentIndex + 1) / words.length) * 100;

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleKnown = () => {
    setKnown(prev => new Set(prev).add(currentWord.id));
    nextCard();
  };

  const handleUnknown = () => {
    setUnknown(prev => new Set(prev).add(currentWord.id));
    nextCard();
  };

  const nextCard = () => {
    setIsFlipped(false);
    if (currentIndex < words.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
    } else {
      setShowResults(true);
    }
  };

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  }, []);

  const restart = () => {
    setStartedAt(Date.now());
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnown(new Set());
    setUnknown(new Set());
    setShowResults(false);
  };

  const finish = () => {
    const xpEarned = known.size * 10 + unknown.size * 2;
    const total = words.length;
    const correct = known.size;
    const incorrect = unknown.size;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    const timeSpentSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

    // Update vocabulary progress for each word
    const results = words.map(w => ({
      wordId: w.id,
      correct: known.has(w.id),
    }));
    updateBatchWordProgress(results, { levelId, taskId });

    onComplete({
      activityId: 'flashcards',
      xpEarned,
      correct,
      incorrect,
      skipped: 0,
      accuracy,
      timeSpentSeconds,
      wordsReviewed: words.map(w => w.id),
      correctWordIds: Array.from(known),
      incorrectWordIds: Array.from(unknown),
    });
  };

  if (showResults) {
    const accuracy = Math.round((known.size / words.length) * 100);
    const xpEarned = known.size * 10 + unknown.size * 2;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-[70vh] flex flex-col items-center justify-center w-full py-8"
      >
        <div className="w-full max-w-6xl mx-auto text-center space-y-6">
          <div className="text-6xl">
            {accuracy >= 80 ? '🎉' : accuracy >= 50 ? '👍' : '💪'}
          </div>
          <h2 className="heading-2 text-white">¡Sesión Completada!</h2>

          <div className="card">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-green-400">{known.size}</p>
                <p className="text-sm text-gray-400 mt-1">Conocidas</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-400">{unknown.size}</p>
                <p className="text-sm text-gray-400 mt-1">Por repasar</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text">{accuracy}%</p>
                <p className="text-sm text-gray-400 mt-1">Precisión</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20">
            <p className="text-xl text-white">
              <span className="text-3xl font-bold gradient-text">+{xpEarned}</span> XP ganados
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button onClick={restart} className="btn-secondary flex items-center gap-2 px-6">
              <RotateCcw className="w-5 h-5" />
              Repetir
            </button>
            <button onClick={finish} className="btn-primary px-8">
              Continuar
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver</span>
        </button>
        
        <div className="text-center">
          <p className="text-sm text-gray-400">Flashcards</p>
          <p className="font-bold text-white">{currentIndex + 1} / {words.length}</p>
        </div>

        <div className="w-20" /> {/* Spacer */}
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-dark-700 rounded-full mb-6 overflow-hidden w-full">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Flashcard - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div 
          className="w-full max-w-6xl cursor-pointer mb-8 relative h-80 rounded-2xl p-8 flex flex-col items-center justify-center"
          onClick={handleFlip}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={{ 
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{
            transformStyle: 'preserve-3d',
            background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-tertiary) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          {/* Front side */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl"
            style={{ 
              backfaceVisibility: 'hidden',
              background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-tertiary) 100%)',
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                speak(currentWord.word);
              }}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
            >
              <Volume2 className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)', color: '#6366f1' }}
              >
                {currentWord.type}
              </span>
              <h2 className="text-4xl font-bold text-white mb-2">{currentWord.word}</h2>
              <div className="mb-4 flex justify-center">
                <PronunciationHint word={currentWord.word} forceShow />
              </div>
              <p className="text-gray-400">Toca para ver la traducción</p>
            </div>
          </div>

          {/* Back side */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-2xl overflow-y-auto"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: 'linear-gradient(135deg, #1e1e3f 0%, #2a2a4a 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            <div className="text-center w-full max-w-md space-y-4">
              {/* Palabra en inglés y traducción */}
              <div>
                <p className="text-lg text-gray-400 mb-1 flex flex-wrap items-center justify-center gap-2">
                  {currentWord.word}
                  <PronunciationHint word={currentWord.word} forceShow className="text-base" />
                </p>
                <h2 className="text-3xl font-bold gradient-text">{currentWord.translation}</h2>
              </div>

              {/* Definición bilingüe */}
              <div className="text-left space-y-2">
                <p className="text-xs text-accent-primary font-medium uppercase tracking-wider">Definición / Definition</p>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="text-blue-400 font-medium">EN:</span>{' '}
                    <span className="text-gray-200">{currentWord.definition}</span>
                  </p>
                  {currentWord.definitionEs && (
                    <p className="text-sm">
                      <span className="text-yellow-400 font-medium">ES:</span>{' '}
                      <span className="text-gray-400">{currentWord.definitionEs}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Ejemplo bilingüe */}
              <div className="p-3 bg-dark-700/50 rounded-lg text-left space-y-2">
                <p className="text-xs text-accent-secondary font-medium uppercase tracking-wider">Ejemplo / Example</p>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="text-blue-400 font-medium">EN:</span>{' '}
                    <span className="text-white italic">"{currentWord.example}"</span>
                  </p>
                  {currentWord.exampleEs && (
                    <p className="text-sm">
                      <span className="text-yellow-400 font-medium">ES:</span>{' '}
                      <span className="text-gray-400 italic">"{currentWord.exampleEs}"</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleUnknown}
            className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center hover:bg-red-500/30 transition-colors"
          >
            <X className="w-8 h-8" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleFlip}
            className="w-16 h-16 rounded-full bg-dark-500 text-gray-400 flex items-center justify-center hover:bg-dark-400 transition-colors"
          >
            <RotateCcw className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleKnown}
            className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center hover:bg-green-500/30 transition-colors"
          >
            <Check className="w-8 h-8" />
          </motion.button>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <X className="w-4 h-4 text-red-400" /> No lo sé
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" /> Lo sé
          </span>
        </div>
      </div>
    </div>
  );
}
