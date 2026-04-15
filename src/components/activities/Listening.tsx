import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, Volume2, RotateCcw, Ear } from 'lucide-react';
import type { Word } from '../../types';
import type { ActivitySessionResult } from '../../types';
import { useUser } from '../../context/UserContext';

interface ListeningProps {
  words: Word[];
  onComplete: (result: ActivitySessionResult) => void;
  onBack: () => void;
  levelId?: number;
  taskId?: number;
}

export default function Listening({ words, onComplete, onBack, levelId, taskId }: ListeningProps) {
  const { updateBatchWordProgress, user } = useUser();
  const isAdmin = user?.isAdmin === true;
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [correctWordIds, setCorrectWordIds] = useState<string[]>([]);
  const [incorrectWordIds, setIncorrectWordIds] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, 10);
    setSelectedWords(shuffled);
    setStartedAt(Date.now());
    setCorrectWordIds([]);
    setIncorrectWordIds([]);
  }, [words]);

  const speak = useCallback((text: string, rate: number = 0.9) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      speechSynthesis.speak(utterance);
      setHasPlayed(true);
      setPlayCount(prev => prev + 1);
    }
  }, []);

  const currentWord = selectedWords[currentIndex];

  const checkAnswer = () => {
    if (!currentWord) return;
    
    const normalizedUser = userAnswer.toLowerCase().trim();
    const normalizedWord = currentWord.word.toLowerCase().trim();
    
    const correct = normalizedUser === normalizedWord;
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
      setUserAnswer('');
      setShowResult(false);
      setHasPlayed(false);
      setPlayCount(0);
    } else {
      setShowFinalResults(true);
    }
  };

  const finish = () => {
    // Bonus for fewer replays
    const replayBonus = Math.max(0, 10 - Math.floor(playCount / selectedWords.length) * 2);
    const xpEarned = score.correct * 25 + score.incorrect * 5 + replayBonus;
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
      activityId: 'listening',
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
    const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, 10);
    setSelectedWords(shuffled);
    setStartedAt(Date.now());
    setCurrentIndex(0);
    setUserAnswer('');
    setShowResult(false);
    setHasPlayed(false);
    setPlayCount(0);
    setScore({ correct: 0, incorrect: 0 });
    setCorrectWordIds([]);
    setIncorrectWordIds([]);
    setShowFinalResults(false);
  };

  if (selectedWords.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner" />
      </div>
    );
  }

  if (showFinalResults) {
    const accuracy = Math.round((score.correct / selectedWords.length) * 100);
    const replayBonus = Math.max(0, 10 - Math.floor(playCount / selectedWords.length) * 2);
    const xpEarned = score.correct * 25 + score.incorrect * 5 + replayBonus;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh]"
      >
        <div className="w-full max-w-2xl text-center">
          <div className="text-6xl mb-6">👂</div>
          <h2 className="heading-2 text-white mb-4">¡Dictado Completado!</h2>
          
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
              {replayBonus > 0 && <span className="text-sm text-gray-400 ml-2">(+{replayBonus} bonus)</span>}
            </p>
          </div>

          {(accuracy < 70 && !isAdmin) && (
            <p className="text-sm text-orange-400 font-medium">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3 justify-center">
            <button onClick={restart} className="btn-secondary flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              Jugar de Nuevo
            </button>
            {(accuracy >= 70 || isAdmin) && (
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
            <p className="text-sm text-gray-400">Dictado</p>
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

        {/* Main Content - Centered */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Ear className="w-6 h-6 text-accent-primary" />
            <h3 className="text-lg font-semibold text-white">
              Escucha y escribe la palabra en <span className="text-blue-400">inglés</span>
            </h3>
          </div>

          {/* Audio Button */}
          <div className="flex flex-col items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => speak(currentWord.word)}
              className="w-24 h-24 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center mb-4 shadow-lg shadow-accent-primary/30"
            >
              <Volume2 className="w-10 h-10 text-white" />
            </motion.button>
            
            <div className="flex gap-2">
              <button
                onClick={() => speak(currentWord.word, 0.7)}
                className="px-3 py-1 text-sm bg-dark-600 rounded-lg text-gray-300 hover:bg-dark-500 transition-colors"
              >
                🐢 Lento
              </button>
              <button
                onClick={() => speak(currentWord.word, 1)}
                className="px-3 py-1 text-sm bg-dark-600 rounded-lg text-gray-300 hover:bg-dark-500 transition-colors"
              >
                🐇 Normal
              </button>
            </div>

            {!hasPlayed && (
              <p className="text-sm text-amber-400 mt-4">
                👆 Presiona para escuchar
              </p>
            )}
          </div>

          {/* Hints - Bilingual */}
          <div className="p-4 bg-dark-700/50 rounded-lg mb-6">
            <p className="text-sm text-gray-400 mb-2">Pista en español:</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-yellow-400 font-bold text-sm">ES</span>
              <span className="text-white text-lg font-medium">{currentWord.translation}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">({currentWord.type})</p>
          </div>

          {!showResult ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Escribe la palabra que escuchaste en <span className="text-blue-400 font-bold">inglés</span>:
                </label>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && userAnswer.trim() && hasPlayed && checkAnswer()}
                  placeholder="Escribe la palabra en inglés..."
                  className="input-field text-lg text-center"
                  disabled={!hasPlayed}
                  autoFocus
                />
              </div>
              <button
                onClick={checkAnswer}
                disabled={!userAnswer.trim() || !hasPlayed}
                className="btn-primary w-full text-lg py-3"
              >
                Comprobar
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={`
                p-4 rounded-lg mb-4 
                ${isCorrect ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}
              `}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {isCorrect ? <Check className="w-6 h-6 text-green-400" /> : <X className="w-6 h-6 text-red-400" />}
                  <p className={`font-semibold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {isCorrect ? '¡Excelente oído!' : 'Incorrecto'}
                  </p>
                </div>
                
                {/* Answer reveal */}
                <div className="flex items-center justify-center gap-3 text-white">
                  <span className="text-blue-400 font-bold">EN</span>
                  <span className="text-xl font-bold">{currentWord.word}</span>
                  <span className="text-gray-500">=</span>
                  <span className="text-yellow-400 font-bold">ES</span>
                  <span className="text-lg">{currentWord.translation}</span>
                </div>
              </div>

              {/* Full word info - Bilingual */}
              <div className="p-4 bg-dark-700/50 rounded-lg mb-4 text-left">
                <p className="text-xs text-accent-primary uppercase font-bold mb-2 tracking-wider">Información:</p>
                
                <div className="mb-2">
                  <p className="text-sm">
                    <span className="text-blue-400 font-bold">EN:</span>{' '}
                    <span className="text-gray-300">{currentWord.definition}</span>
                  </p>
                  {currentWord.definitionEs && (
                    <p className="text-sm">
                      <span className="text-yellow-400 font-bold">ES:</span>{' '}
                      <span className="text-gray-500">{currentWord.definitionEs}</span>
                    </p>
                  )}
                </div>
                
                <div className="p-3 bg-dark-600/50 rounded-lg mt-2">
                  <p className="text-sm">
                    <span className="text-blue-400 font-bold">EN:</span>{' '}
                    <span className="text-white italic">"{currentWord.example}"</span>
                  </p>
                  {currentWord.exampleEs && (
                    <p className="text-sm mt-1">
                      <span className="text-yellow-400 font-bold">ES:</span>{' '}
                      <span className="text-gray-400 italic">"{currentWord.exampleEs}"</span>
                    </p>
                  )}
                </div>
              </div>

              <button onClick={nextWord} className="btn-primary w-full text-lg py-3">
                {currentIndex < selectedWords.length - 1 ? 'Siguiente' : 'Ver Resultados'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
