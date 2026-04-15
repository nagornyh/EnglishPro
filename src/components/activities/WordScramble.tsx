import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RotateCcw, Check, X, Shuffle, Volume2 } from 'lucide-react';
import type { Word } from '../../types';
import type { ActivitySessionResult } from '../../types';
import { useUser } from '../../context/UserContext';

interface WordScrambleProps {
  words: Word[];
  onComplete: (result: ActivitySessionResult) => void;
  onBack: () => void;
  levelId?: number;
  taskId?: number;
}

export default function WordScramble({ words, onComplete, onBack, levelId, taskId }: WordScrambleProps) {
  const { updateBatchWordProgress } = useUser();
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambledLetters, setScrambledLetters] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<number[]>([]);
  const [userWord, setUserWord] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [correctWordIds, setCorrectWordIds] = useState<string[]>([]);
  const [incorrectWordIds, setIncorrectWordIds] = useState<string[]>([]);

  const selectedWords = words.slice(0, 10);
  const currentWord = selectedWords[currentIndex];

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    scrambleWord();
  }, [currentIndex]);

  const scrambleWord = () => {
    const letters = currentWord.word.toUpperCase().split('');
    let scrambled = [...letters];
    
    // Shuffle until different from original
    let attempts = 0;
    while (scrambled.join('') === letters.join('') && attempts < 10) {
      scrambled = [...letters].sort(() => Math.random() - 0.5);
      attempts++;
    }
    
    setScrambledLetters(scrambled);
    setSelectedLetters([]);
    setUserWord('');
    setShowResult(false);
  };

  const handleLetterClick = (index: number) => {
    if (selectedLetters.includes(index) || showResult) return;

    setSelectedLetters([...selectedLetters, index]);
    setUserWord(userWord + scrambledLetters[index]);
  };

  const handleRemoveLetter = () => {
    if (selectedLetters.length === 0 || showResult) return;

    setSelectedLetters(selectedLetters.slice(0, -1));
    setUserWord(userWord.slice(0, -1));
  };

  const checkAnswer = () => {
    const correct = userWord.toLowerCase() === currentWord.word.toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      setCorrectWordIds(prev => [...prev, currentWord.id]);
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setIncorrectWordIds(prev => [...prev, currentWord.id]);
    }
  };

  const nextWord = () => {
    if (currentIndex < selectedWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowFinalResults(true);
    }
  };

  const finish = () => {
    const xpEarned = score.correct * 15 + score.incorrect * 3;
    const total = selectedWords.length;
    const accuracy = total > 0 ? Math.round((score.correct / total) * 100) : 0;
    const timeSpentSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

    // Update vocabulary progress
    const results = selectedWords.map(w => ({
      wordId: w.id,
      correct: correctWordIds.includes(w.id),
    }));
    updateBatchWordProgress(results, { levelId, taskId });

    onComplete({
      activityId: 'scramble',
      xpEarned,
      correct: score.correct,
      incorrect: score.incorrect,
      skipped: 0,
      accuracy,
      timeSpentSeconds,
      wordsReviewed: selectedWords.map(w => w.id),
      correctWordIds,
      incorrectWordIds,
    });
  };

  const restart = () => {
    setStartedAt(Date.now());
    setCurrentIndex(0);
    setScore({ correct: 0, incorrect: 0 });
    setCorrectWordIds([]);
    setIncorrectWordIds([]);
    setShowFinalResults(false);
    scrambleWord();
  };

  if (showFinalResults) {
    const accuracy = Math.round((score.correct / selectedWords.length) * 100);
    const xpEarned = score.correct * 15 + score.incorrect * 3;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh]"
      >
        <div className="w-full max-w-2xl text-center">
          <div className="text-6xl mb-6">🔀</div>
          <h2 className="heading-2 text-white mb-4">¡Juego Completado!</h2>
          
          <div className="card mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-green-400">{score.correct}</p>
                <p className="text-sm text-gray-400">Correctas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-400">{score.incorrect}</p>
                <p className="text-sm text-gray-400">Incorrectas</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">{accuracy}%</p>
                <p className="text-sm text-gray-400">Precisión</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 mb-6">
            <p className="text-lg text-white">
              <span className="text-2xl font-bold gradient-text">+{xpEarned}</span> XP ganados
            </p>
          </div>

          {accuracy < 70 && (
            <p className="text-sm text-orange-400 font-medium">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3 justify-center">
            <button onClick={restart} className="btn-secondary flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              Jugar de Nuevo
            </button>
            {accuracy >= 70 && (
              <button onClick={finish} className="btn-primary">Continuar</button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

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
            <p className="text-sm text-gray-400">Ordenar Letras</p>
            <p className="font-bold text-white">{currentIndex + 1} / {selectedWords.length}</p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-green-400">{score.correct} ✓</span>
            <span className="text-red-400">{score.incorrect} ✗</span>
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

        {/* Word Info - Centered */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-6 text-center"
        >
          {/* Type badge */}
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/20 text-accent-primary mb-4 inline-block">
            {currentWord.type}
          </span>
          
          {/* Spanish word - clue */}
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-1">Ordena las letras para escribir en inglés:</p>
            <h3 className="text-2xl font-semibold text-white flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-sm font-bold">ES</span>
              {currentWord.translation}
            </h3>
          </div>
          
          {/* Definition bilingual */}
          <div className="p-3 bg-dark-700/50 rounded-lg text-sm">
            <p className="text-gray-400">
              <span className="text-blue-400 font-bold">EN:</span> {currentWord.definition}
            </p>
            {currentWord.definitionEs && (
              <p className="text-gray-500 mt-1">
                <span className="text-yellow-400 font-bold">ES:</span> {currentWord.definitionEs}
              </p>
            )}
          </div>
        </motion.div>

        {/* User's Word - Centered */}
        <div className="flex justify-center items-center gap-2 mb-8 min-h-[60px]">
          {userWord.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-12 h-12 flex items-center justify-center bg-accent-primary text-white text-xl font-bold rounded-lg"
            >
              {letter}
            </motion.span>
          ))}
          {userWord.length < currentWord.word.length && !showResult && (
            <span className="w-12 h-12 flex items-center justify-center border-2 border-dashed border-dark-500 rounded-lg text-gray-500">
              _
            </span>
          )}
        </div>

        {/* Scrambled Letters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {scrambledLetters.map((letter, index) => {
            const isSelected = selectedLetters.includes(index);
            
            return (
              <motion.button
                key={index}
                whileHover={{ scale: isSelected ? 1 : 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleLetterClick(index)}
                disabled={isSelected || showResult}
                className={`
                  w-14 h-14 flex items-center justify-center text-xl font-bold rounded-xl transition-all
                  ${isSelected 
                    ? 'bg-dark-700 text-dark-500 cursor-not-allowed' 
                    : 'bg-dark-600 text-white hover:bg-dark-500 cursor-pointer'
                  }
                `}
              >
                {letter}
              </motion.button>
            );
          })}
        </div>

        {/* Actions */}
        {!showResult ? (
          <div className="flex justify-center gap-4">
            <button
              onClick={handleRemoveLetter}
              disabled={selectedLetters.length === 0}
              className="btn-secondary flex items-center gap-2"
            >
              <X className="w-5 h-5" />
              Borrar
            </button>
            
            <button
              onClick={scrambleWord}
              className="btn-secondary flex items-center gap-2"
            >
              <Shuffle className="w-5 h-5" />
              Mezclar
            </button>

            <button
              onClick={checkAnswer}
              disabled={userWord.length !== currentWord.word.length}
              className="btn-primary flex items-center gap-2"
            >
              <Check className="w-5 h-5" />
              Comprobar
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className={`
              p-4 rounded-xl mb-6 flex flex-col items-center gap-3
              ${isCorrect ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}
            `}>
              <div className="flex items-center gap-2">
                {isCorrect ? <Check className="w-6 h-6 text-green-400" /> : <X className="w-6 h-6 text-red-400" />}
                <p className={`font-semibold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                </p>
              </div>
              
              {/* Answer reveal */}
              <div className="flex items-center gap-3 text-white">
                <span className="text-blue-400 font-bold">EN</span>
                <span className="text-xl font-bold">{currentWord.word.toUpperCase()}</span>
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
            </div>

            <button onClick={nextWord} className="btn-primary text-lg py-3 px-8">
              {currentIndex < selectedWords.length - 1 ? 'Siguiente Palabra' : 'Ver Resultados'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
