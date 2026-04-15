// SurvivalMode Activity Component
// Endless mode with lives - how far can you go?

import { useState, useEffect, useRef, useCallback } from 'react';
import { challengeService } from '../../services/challengeService';
import type { BossQuestion } from '../../services/challengeService';

interface SurvivalModeProps {
  onComplete?: (score: number, questionsAnswered: number) => void;
  onXPGain?: (xp: number) => void;
}

export default function SurvivalMode({ onComplete, onXPGain }: SurvivalModeProps) {
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'gameover'>('ready');
  const [questions, setQuestions] = useState<BossQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [difficulty, setDifficulty] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load questions
  const loadMoreQuestions = useCallback(() => {
    const newQuestions = challengeService.getSurvivalQuestions(30);
    setQuestions(prev => [...prev, ...newQuestions]);
  }, []);

  // Start game
  const startGame = () => {
    setQuestions(challengeService.getSurvivalQuestions(30));
    setCurrentIndex(0);
    setLives(3);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(15);
    setDifficulty(1);
    setShowFeedback(null);
    setSelectedAnswer(null);
    setGameState('playing');
  };

  // Timer
  useEffect(() => {
    if (gameState !== 'playing' || showFeedback) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout();
          return 15 - Math.min(difficulty - 1, 5); // Faster at higher difficulty
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, showFeedback, difficulty]);

  // Handle timeout
  const handleTimeout = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    setShowFeedback('wrong');
    setLives(prev => prev - 1);
    setStreak(0);

    feedbackTimeoutRef.current = setTimeout(() => {
      if (lives <= 1) {
        endGame();
      } else {
        nextQuestion();
      }
    }, 1000);
  };

  // Handle answer
  const handleAnswer = (answer: string) => {
    if (showFeedback) return;
    
    if (timerRef.current) clearInterval(timerRef.current);

    const currentQuestion = questions[currentIndex];
    const isCorrect = answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();

    setSelectedAnswer(answer);
    setShowFeedback(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      const basePoints = 10;
      const streakBonus = Math.min(streak * 2, 20);
      const difficultyBonus = (difficulty - 1) * 5;
      const timeBonus = Math.floor(timeLeft);
      const totalPoints = basePoints + streakBonus + difficultyBonus + timeBonus;

      setScore(prev => prev + totalPoints);
      setStreak(prev => {
        const newStreak = prev + 1;
        setMaxStreak(current => Math.max(current, newStreak));
        
        // Increase difficulty every 5 correct answers
        if (newStreak % 5 === 0 && difficulty < 5) {
          setDifficulty(d => d + 1);
        }
        
        return newStreak;
      });
    } else {
      setLives(prev => prev - 1);
      setStreak(0);
    }

    feedbackTimeoutRef.current = setTimeout(() => {
      if (!isCorrect && lives <= 1) {
        endGame();
      } else {
        nextQuestion();
      }
    }, 1000);
  };

  // Next question
  const nextQuestion = () => {
    // Load more questions if needed
    if (currentIndex >= questions.length - 5) {
      loadMoreQuestions();
    }

    setCurrentIndex(prev => prev + 1);
    setTimeLeft(15 - Math.min(difficulty - 1, 5));
    setShowFeedback(null);
    setSelectedAnswer(null);
  };

  // End game
  const endGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('gameover');
    
    // Update high score
    const isNewHighScore = challengeService.updateSurvivalHighScore(score);
    
    // Calculate XP
    const xp = Math.floor(score / 10) + (maxStreak >= 10 ? 50 : maxStreak >= 5 ? 25 : 0);
    onXPGain?.(xp);
    onComplete?.(score, currentIndex);
    
    return isNewHighScore;
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    };
  }, []);

  const currentQuestion = questions[currentIndex];
  const highScore = challengeService.getSurvivalHighScore();

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-gradient-to-b from-dark-800 to-dark-900 rounded-2xl p-8 text-center border border-purple-900/50">
          <div className="text-6xl mb-4">🎮</div>
          <h2 className="text-2xl font-bold text-white mb-2">Survival Mode</h2>
          <p className="text-gray-400 mb-6">
            ¡Responde preguntas hasta agotar tus vidas! La dificultad aumenta con cada racha.
          </p>
          
          <div className="bg-dark-700 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Vidas</p>
                <p className="text-2xl">❤️❤️❤️</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Mejor puntuación</p>
                <p className="text-2xl font-bold text-yellow-400">{highScore}</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-700 rounded-xl p-4 mb-6 text-left">
            <h4 className="text-white font-bold mb-2">Reglas:</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Tienes 3 vidas</li>
              <li>• Cada error = -1 vida</li>
              <li>• Rachas aumentan puntos</li>
              <li>• Cada 5 aciertos = más difícil</li>
              <li>• Responde antes de que acabe el tiempo</li>
            </ul>
          </div>

          <button
            onClick={startGame}
            className="btn-primary btn-lg w-full"
          >
            🎯 ¡COMENZAR!
          </button>
        </div>
      </div>
    );
  }

  // Game over screen
  if (gameState === 'gameover') {
    const isNewHighScore = score > highScore - (score === highScore ? 1 : 0);

    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-gradient-to-b from-dark-800 to-dark-900 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">
            {isNewHighScore ? '🏆' : '💀'}
          </div>
          
          {isNewHighScore && (
            <div className="mb-4 py-2 px-4 bg-yellow-500/20 border border-yellow-500 rounded-lg inline-block">
              <span className="text-yellow-400 font-bold">🎉 ¡Nuevo récord!</span>
            </div>
          )}
          
          <h2 className="text-2xl font-bold text-white mb-2">Game Over</h2>
          
          <div className="bg-dark-700 rounded-xl p-6 my-6">
            <div className="text-4xl font-bold text-primary-400 mb-2">{score}</div>
            <p className="text-gray-400">puntos</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-dark-700 rounded-lg p-3">
              <p className="text-2xl font-bold text-white">{currentIndex}</p>
              <p className="text-xs text-gray-500">Preguntas</p>
            </div>
            <div className="bg-dark-700 rounded-lg p-3">
              <p className="text-2xl font-bold text-orange-400">{maxStreak}</p>
              <p className="text-xs text-gray-500">Racha máx</p>
            </div>
            <div className="bg-dark-700 rounded-lg p-3">
              <p className="text-2xl font-bold text-purple-400">Nivel {difficulty}</p>
              <p className="text-xs text-gray-500">Dificultad</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-colors"
          >
            🔄 Jugar de nuevo
          </button>
        </div>
      </div>
    );
  }

  // Playing screen
  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {/* Lives */}
        <div className="flex gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className={`text-2xl transition-all ${i < lives ? '' : 'grayscale opacity-30'}`}
            >
              ❤️
            </span>
          ))}
        </div>
        
        {/* Score */}
        <div className="text-white font-bold">
          <span className="text-gray-500">Puntuación: </span>
          <span className="text-xl">{score}</span>
        </div>
      </div>

      {/* Streak and difficulty */}
      <div className="flex justify-between items-center mb-4">
        {streak > 0 && (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
            🔥 Racha: {streak}
          </span>
        )}
        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
          Nivel {difficulty}
        </span>
      </div>

      {/* Timer */}
      <div className="mb-4">
        <div className="flex items-center gap-3">
          <span className={`text-2xl font-bold ${
            timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-white'
          }`}>
            {timeLeft}s
          </span>
          <div className="flex-1 h-3 bg-dark-700 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft <= 5 ? 'bg-red-500' : timeLeft <= 8 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${(timeLeft / (15 - Math.min(difficulty - 1, 5))) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question counter */}
      <div className="text-center mb-4">
        <span className="text-gray-500 text-sm">Pregunta #{currentIndex + 1}</span>
      </div>

      {/* Question */}
      <div className="bg-dark-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">
          {currentQuestion.question}
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {currentQuestion.options?.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;
            const showResult = showFeedback !== null;

            return (
              <button
                key={index}
                onClick={() => !showFeedback && handleAnswer(option)}
                disabled={showFeedback !== null}
                className={`
                  p-4 rounded-xl text-left font-medium transition-all
                  ${!showResult ? 'bg-dark-700 hover:bg-dark-600 text-white' : ''}
                  ${showResult && isCorrect ? 'bg-green-600 text-white scale-105' : ''}
                  ${showResult && isSelected && !isCorrect ? 'bg-red-600 text-white' : ''}
                  ${showResult && !isSelected && !isCorrect ? 'bg-dark-700 text-gray-500' : ''}
                `}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`mt-4 text-center text-2xl font-bold ${
            showFeedback === 'correct' ? 'text-green-400' : 'text-red-400'
          }`}>
            {showFeedback === 'correct' ? '✓ ¡Correcto!' : '✗ Incorrecto'}
          </div>
        )}
      </div>
    </div>
  );
}
