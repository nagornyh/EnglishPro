import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RotateCcw, Volume2 } from 'lucide-react';
import type { Word } from '../../types';
import type { ActivitySessionResult } from '../../types';
import { useUser } from '../../context/UserContext';

interface HangmanProps {
  words: Word[];
  onComplete: (result: ActivitySessionResult) => void;
  onBack: () => void;
  levelId?: number;
  taskId?: number;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const MAX_MISTAKES = 6;

export default function Hangman({ words, onComplete, onBack, levelId, taskId }: HangmanProps) {
  const { updateBatchWordProgress } = useUser();
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [mistakes, setMistakes] = useState(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [score, setScore] = useState({ wins: 0, losses: 0 });
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [correctWordIds, setCorrectWordIds] = useState<string[]>([]);
  const [incorrectWordIds, setIncorrectWordIds] = useState<string[]>([]);

  useEffect(() => {
    const filtered = words.filter(w => w.word.length >= 4 && w.word.length <= 12 && /^[a-zA-Z]+$/.test(w.word));
    const shuffled = filtered.sort(() => Math.random() - 0.5).slice(0, 8);
    setSelectedWords(shuffled);
    setStartedAt(Date.now());
    setCorrectWordIds([]);
    setIncorrectWordIds([]);
  }, [words]);

  const currentWord = selectedWords[currentIndex];

  const resetRound = () => {
    setGuessedLetters(new Set());
    setMistakes(0);
    setGameStatus('playing');
  };

  const handleGuess = (letter: string) => {
    if (gameStatus !== 'playing' || guessedLetters.has(letter)) return;

    const newGuessed = new Set(guessedLetters);
    newGuessed.add(letter);
    setGuessedLetters(newGuessed);

    if (!currentWord.word.toUpperCase().includes(letter)) {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      
      if (newMistakes >= MAX_MISTAKES) {
        setGameStatus('lost');
        setScore(prev => ({ ...prev, losses: prev.losses + 1 }));
        setIncorrectWordIds(prev => [...prev, currentWord.id]);
      }
    } else {
      // Check if won
      const wordLetters = new Set(currentWord.word.toUpperCase().split(''));
      const allGuessed = [...wordLetters].every(l => newGuessed.has(l));
      
      if (allGuessed) {
        setGameStatus('won');
        setScore(prev => ({ ...prev, wins: prev.wins + 1 }));
        setCorrectWordIds(prev => [...prev, currentWord.id]);
      }
    }
  };

  const nextWord = () => {
    if (currentIndex < selectedWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetRound();
    } else {
      setShowFinalResults(true);
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const finish = () => {
    const xpEarned = score.wins * 30 + score.losses * 5;
    const total = selectedWords.length;
    const accuracy = total > 0 ? Math.round((score.wins / total) * 100) : 0;
    const timeSpentSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

    // Update vocabulary progress
    const results = selectedWords.map(w => ({
      wordId: w.id,
      correct: correctWordIds.includes(w.id),
    }));
    updateBatchWordProgress(results, { levelId, taskId });

    onComplete({
      activityId: 'hangman',
      xpEarned,
      correct: score.wins,
      incorrect: score.losses,
      skipped: 0,
      accuracy,
      timeSpentSeconds,
      wordsReviewed: selectedWords.map(w => w.id),
      correctWordIds,
      incorrectWordIds,
    });
  };

  const restart = () => {
    const filtered = words.filter(w => w.word.length >= 4 && w.word.length <= 12 && /^[a-zA-Z]+$/.test(w.word));
    const shuffled = filtered.sort(() => Math.random() - 0.5).slice(0, 8);
    setSelectedWords(shuffled);
    setStartedAt(Date.now());
    setCurrentIndex(0);
    resetRound();
    setScore({ wins: 0, losses: 0 });
    setCorrectWordIds([]);
    setIncorrectWordIds([]);
    setShowFinalResults(false);
  };

  if (selectedWords.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <p className="text-gray-400 mb-4">No hay suficientes palabras para esta actividad.</p>
        <button onClick={onBack} className="btn-secondary">Volver</button>
      </div>
    );
  }

  if (showFinalResults) {
    const winRate = Math.round((score.wins / selectedWords.length) * 100);
    const xpEarned = score.wins * 30 + score.losses * 5;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh]"
      >
        <div className="w-full max-w-2xl text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h2 className="heading-2 text-white mb-4">¡Ahorcado Completado!</h2>
          
          <div className="card mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-green-400">{score.wins}</p>
                <p className="text-sm text-gray-400">Ganadas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-400">{score.losses}</p>
                <p className="text-sm text-gray-400">Perdidas</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">{winRate}%</p>
                <p className="text-sm text-gray-400">Victorias</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 mb-6">
            <p className="text-lg text-white">
              <span className="text-2xl font-bold gradient-text">+{xpEarned}</span> XP ganados
            </p>
          </div>

          {winRate < 70 && (
            <p className="text-sm text-orange-400 font-medium">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3 justify-center">
            <button onClick={restart} className="btn-secondary flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              Jugar de Nuevo
            </button>
            {winRate >= 70 && (
              <button onClick={finish} className="btn-primary">Continuar</button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  const displayWord = currentWord.word
    .toUpperCase()
    .split('')
    .map(letter => guessedLetters.has(letter) ? letter : '_')
    .join(' ');

  const progress = ((currentIndex + 1) / selectedWords.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
          
          <div className="text-center">
            <p className="text-sm text-gray-400">Ahorcado</p>
            <p className="font-bold text-white">{currentIndex + 1} / {selectedWords.length}</p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-green-400">{score.wins} ✓</span>
            <span className="text-red-400">{score.losses} ✗</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-dark-700 rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Game Area - Centered */}
        <div className="card mb-6 text-center">
          {/* Hangman Visual */}
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-40">
              {/* Base */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-500" />
              {/* Pole */}
              <div className="absolute bottom-0 left-4 w-1 h-full bg-gray-500" />
              {/* Top */}
              <div className="absolute top-0 left-4 w-20 h-1 bg-gray-500" />
              {/* Rope */}
              <div className="absolute top-0 left-20 w-1 h-6 bg-gray-500" />
              
              {/* Head */}
              {mistakes >= 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-6 left-16 w-8 h-8 rounded-full border-2 border-white"
                />
              )}
              {/* Body */}
              {mistakes >= 2 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  className="absolute top-14 left-[76px] w-1 h-10 bg-white origin-top"
                />
              )}
              {/* Left Arm */}
              {mistakes >= 3 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="absolute top-16 left-12 w-8 h-1 bg-white origin-right rotate-[-30deg]"
                />
              )}
              {/* Right Arm */}
              {mistakes >= 4 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="absolute top-16 left-[76px] w-8 h-1 bg-white origin-left rotate-[30deg]"
                />
              )}
              {/* Left Leg */}
              {mistakes >= 5 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  className="absolute top-24 left-14 w-1 h-8 bg-white origin-top rotate-[-20deg]"
                />
              )}
              {/* Right Leg */}
              {mistakes >= 6 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  className="absolute top-24 left-[76px] w-1 h-8 bg-white origin-top rotate-[20deg]"
                />
              )}
            </div>
          </div>

          {/* Mistakes Counter */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: MAX_MISTAKES }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < mistakes ? 'bg-red-500' : 'bg-dark-600'
                }`}
              />
            ))}
          </div>

          {/* Word Display */}
          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-2">Adivina la palabra en <span className="text-blue-400 font-bold">inglés</span>:</p>
            <motion.p
              key={displayWord}
              className="text-4xl font-mono font-bold text-white tracking-widest mb-4"
            >
              {displayWord}
            </motion.p>
          </div>

          {/* Hint - Bilingual */}
          <div className="p-4 bg-dark-700/50 rounded-lg mb-6">
            <p className="text-sm text-gray-400 mb-2">Pista en español:</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-yellow-400 font-bold text-sm">ES</span>
              <span className="text-white text-lg font-medium">{currentWord.translation}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">({currentWord.type})</p>
          </div>

          {/* Game Status */}
          {gameStatus !== 'playing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`
                p-4 rounded-xl mb-6
                ${gameStatus === 'won' ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}
              `}
            >
              <p className={`text-2xl font-bold mb-2 ${gameStatus === 'won' ? 'text-green-400' : 'text-red-400'}`}>
                {gameStatus === 'won' ? '🎉 ¡Ganaste!' : '💀 ¡Perdiste!'}
              </p>
              
              {/* Answer reveal - bilingual */}
              <div className="flex items-center justify-center gap-3 text-white mb-2">
                <span className="text-blue-400 font-bold">EN</span>
                <span className="text-xl font-bold">{currentWord.word}</span>
                <button
                  onClick={() => speak(currentWord.word)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <span className="text-gray-500">=</span>
                <span className="text-yellow-400 font-bold">ES</span>
                <span className="text-lg">{currentWord.translation}</span>
              </div>

              {/* Definition */}
              {currentWord.definition && (
                <p className="text-sm text-gray-400 mt-2">
                  {currentWord.definitionEs || currentWord.definition}
                </p>
              )}
            </motion.div>
          )}

          {/* Keyboard */}
          {gameStatus === 'playing' ? (
            <div className="flex flex-wrap justify-center gap-2">
              {ALPHABET.map(letter => {
                const isGuessed = guessedLetters.has(letter);
                const isCorrect = currentWord.word.toUpperCase().includes(letter);
                
                return (
                  <motion.button
                    key={letter}
                    whileHover={{ scale: isGuessed ? 1 : 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleGuess(letter)}
                    disabled={isGuessed}
                    className={`
                      w-10 h-10 rounded-lg font-bold transition-all
                      ${isGuessed
                        ? isCorrect
                          ? 'bg-green-500/30 text-green-400'
                          : 'bg-red-500/30 text-red-400'
                        : 'bg-dark-600 text-white hover:bg-dark-500'
                      }
                      ${isGuessed ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    {letter}
                  </motion.button>
                );
              })}
            </div>
          ) : (
            <button onClick={nextWord} className="btn-primary text-lg py-3 px-8">
              {currentIndex < selectedWords.length - 1 ? 'Siguiente Palabra' : 'Ver Resultados'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
