// SpeedRound Activity Component
// Fast-paced vocabulary and grammar challenges with timer

import { useState, useEffect, useCallback, useRef } from 'react';
import { challengeService } from '../../services/challengeService';

interface Question {
  id: string;
  type: 'vocabulary' | 'grammar' | 'translation';
  question: string;
  questionEs?: string;
  options: string[];
  correctAnswer: string;
  difficulty: 1 | 2 | 3;
}

interface SpeedRoundProps {
  difficulty?: 1 | 2 | 3;
  timePerQuestion?: number; // seconds
  totalQuestions?: number;
  onComplete?: (score: number, total: number, timeBonus: number) => void;
  onXPGain?: (xp: number) => void;
}

// Sample questions pool
const QUESTIONS_POOL: Question[] = [
  // Vocabulary - Level 1
  { id: 'v1', type: 'vocabulary', question: 'What is the opposite of "happy"?', options: ['sad', 'angry', 'tired', 'hungry'], correctAnswer: 'sad', difficulty: 1 },
  { id: 'v2', type: 'vocabulary', question: 'Choose the synonym of "big":', options: ['small', 'large', 'tiny', 'short'], correctAnswer: 'large', difficulty: 1 },
  { id: 'v3', type: 'vocabulary', question: '"Fast" means:', options: ['lento', 'rápido', 'fuerte', 'débil'], correctAnswer: 'rápido', difficulty: 1 },
  { id: 'v4', type: 'vocabulary', question: 'The opposite of "hot" is:', options: ['warm', 'cold', 'cool', 'heat'], correctAnswer: 'cold', difficulty: 1 },
  { id: 'v5', type: 'vocabulary', question: '"Beautiful" in Spanish is:', options: ['feo', 'bonito', 'hermoso', 'alto'], correctAnswer: 'hermoso', difficulty: 1 },
  
  // Grammar - Level 1
  { id: 'g1', type: 'grammar', question: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'gone'], correctAnswer: 'goes', difficulty: 1 },
  { id: 'g2', type: 'grammar', question: 'They ___ TV right now.', options: ['watch', 'watches', 'are watching', 'watched'], correctAnswer: 'are watching', difficulty: 1 },
  { id: 'g3', type: 'grammar', question: 'I ___ breakfast at 7 AM.', options: ['have', 'has', 'having', 'had'], correctAnswer: 'have', difficulty: 1 },
  { id: 'g4', type: 'grammar', question: 'He ___ a student.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'is', difficulty: 1 },
  { id: 'g5', type: 'grammar', question: 'We ___ English.', options: ['speak', 'speaks', 'speaking', 'spoke'], correctAnswer: 'speak', difficulty: 1 },

  // Translation - Level 1
  { id: 't1', type: 'translation', question: '"Casa" in English is:', options: ['car', 'house', 'dog', 'cat'], correctAnswer: 'house', difficulty: 1 },
  { id: 't2', type: 'translation', question: '"Libro" in English is:', options: ['book', 'library', 'paper', 'pen'], correctAnswer: 'book', difficulty: 1 },
  { id: 't3', type: 'translation', question: '"Agua" in English is:', options: ['fire', 'air', 'water', 'earth'], correctAnswer: 'water', difficulty: 1 },

  // Level 2
  { id: 'v6', type: 'vocabulary', question: 'Choose the correct meaning of "although":', options: ['porque', 'aunque', 'cuando', 'mientras'], correctAnswer: 'aunque', difficulty: 2 },
  { id: 'v7', type: 'vocabulary', question: '"Accomplish" means:', options: ['fail', 'achieve', 'start', 'stop'], correctAnswer: 'achieve', difficulty: 2 },
  { id: 'g6', type: 'grammar', question: 'I ___ to Paris twice.', options: ['went', 'have been', 'was', 'go'], correctAnswer: 'have been', difficulty: 2 },
  { id: 'g7', type: 'grammar', question: 'If I ___ rich, I would travel.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', difficulty: 2 },
  { id: 'g8', type: 'grammar', question: 'She ___ here for 5 years.', options: ['lives', 'lived', 'has lived', 'is living'], correctAnswer: 'has lived', difficulty: 2 },
  { id: 't4', type: 'translation', question: '"Nevertheless" means:', options: ['sin embargo', 'además', 'porque', 'entonces'], correctAnswer: 'sin embargo', difficulty: 2 },

  // Level 3
  { id: 'v8', type: 'vocabulary', question: '"Ubiquitous" means:', options: ['rare', 'everywhere', 'old', 'new'], correctAnswer: 'everywhere', difficulty: 3 },
  { id: 'v9', type: 'vocabulary', question: '"Ephemeral" means:', options: ['eternal', 'short-lived', 'strong', 'weak'], correctAnswer: 'short-lived', difficulty: 3 },
  { id: 'g9', type: 'grammar', question: 'Had I known, I ___ differently.', options: ['acted', 'would act', 'would have acted', 'act'], correctAnswer: 'would have acted', difficulty: 3 },
  { id: 'g10', type: 'grammar', question: 'The report ___ by tomorrow.', options: ['will finish', 'will be finished', 'finishes', 'finished'], correctAnswer: 'will be finished', difficulty: 3 },
];

export default function SpeedRound({
  difficulty = 1,
  timePerQuestion = 10,
  totalQuestions = 10,
  onComplete,
  onXPGain,
}: SpeedRoundProps) {
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [totalTimeBonus, setTotalTimeBonus] = useState(0);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize questions
  const initGame = useCallback(() => {
    const filtered = QUESTIONS_POOL.filter(q => q.difficulty <= difficulty);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, totalQuestions));
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(timePerQuestion);
    setTotalTimeBonus(0);
    setShowFeedback(null);
    setSelectedAnswer(null);
    setGameState('playing');
  }, [difficulty, totalQuestions, timePerQuestion]);

  // Timer
  useEffect(() => {
    if (gameState !== 'playing' || showFeedback) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAnswer(null); // Time's up
          return timePerQuestion;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, showFeedback, timePerQuestion]);

  // Handle answer
  const handleAnswer = useCallback((answer: string | null) => {
    if (showFeedback) return;
    
    if (timerRef.current) clearInterval(timerRef.current);
    
    const currentQuestion = questions[currentIndex];
    const isCorrect = answer === currentQuestion?.correctAnswer;
    
    setSelectedAnswer(answer);
    setShowFeedback(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      const timeBonus = Math.floor(timeLeft * 2); // 2 points per second remaining
      setScore(prev => prev + 10 + timeBonus);
      setTotalTimeBonus(prev => prev + timeBonus);
      setStreak(prev => {
        const newStreak = prev + 1;
        setMaxStreak(current => Math.max(current, newStreak));
        return newStreak;
      });
    } else {
      setStreak(0);
    }

    // Move to next question after delay
    feedbackTimeoutRef.current = setTimeout(() => {
      if (currentIndex + 1 >= questions.length) {
        finishGame(isCorrect);
      } else {
        setCurrentIndex(prev => prev + 1);
        setTimeLeft(timePerQuestion);
        setShowFeedback(null);
        setSelectedAnswer(null);
      }
    }, 1000);
  }, [questions, currentIndex, showFeedback, timeLeft, timePerQuestion]);

  // Finish game
  const finishGame = (lastCorrect: boolean) => {
    setGameState('finished');
    
    const finalScore = score + (lastCorrect ? 10 + Math.floor(timeLeft * 2) : 0);
    const correctAnswers = Math.floor((finalScore - totalTimeBonus) / 10);
    
    // Update high score
    challengeService.updateSpeedRoundHighScore(finalScore);
    
    // Calculate XP
    const baseXP = correctAnswers * 5;
    const streakBonus = maxStreak >= 5 ? 20 : maxStreak >= 3 ? 10 : 0;
    const difficultyBonus = difficulty * 10;
    const totalXP = baseXP + streakBonus + difficultyBonus;
    
    onXPGain?.(totalXP);
    onComplete?.(correctAnswers, totalQuestions, totalTimeBonus);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    };
  }, []);

  const currentQuestion = questions[currentIndex];
  const highScore = challengeService.getSpeedRoundHighScore();

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-dark-800 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">⚡</div>
          <h2 className="text-2xl font-bold text-white mb-2">Speed Round</h2>
          <p className="text-gray-400 mb-6">
            ¡Responde {totalQuestions} preguntas lo más rápido posible!
          </p>
          
          <div className="bg-dark-700 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Tiempo por pregunta</p>
                <p className="text-xl font-bold text-white">{timePerQuestion}s</p>
              </div>
              <div>
                <p className="text-gray-500">Dificultad</p>
                <p className="text-xl font-bold text-primary-400">
                  {'⭐'.repeat(difficulty)}
                </p>
              </div>
            </div>
          </div>

          {highScore > 0 && (
            <div className="mb-6">
              <p className="text-gray-500 text-sm">Mejor puntuación</p>
              <p className="text-2xl font-bold text-yellow-400">{highScore} pts</p>
            </div>
          )}

          <button
            onClick={initGame}
            className="btn-primary btn-lg w-full"
          >
            ¡COMENZAR!
          </button>
        </div>
      </div>
    );
  }

  // Finished screen
  if (gameState === 'finished') {
    const correctAnswers = Math.floor((score - totalTimeBonus) / 10);
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
    const isNewHighScore = score > highScore - (score === highScore ? 1 : 0);

    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-dark-800 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">
            {accuracy >= 80 ? '🏆' : accuracy >= 60 ? '🎯' : '💪'}
          </div>
          
          {isNewHighScore && (
            <div className="mb-4 py-2 px-4 bg-yellow-500/20 border border-yellow-500 rounded-lg inline-block">
              <span className="text-yellow-400 font-bold">🎉 ¡Nueva mejor puntuación!</span>
            </div>
          )}
          
          <h2 className="text-2xl font-bold text-white mb-2">¡Ronda Completada!</h2>
          
          <div className="bg-dark-700 rounded-xl p-6 my-6">
            <div className="text-4xl font-bold text-primary-400 mb-2">{score}</div>
            <p className="text-gray-400">puntos totales</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-dark-700 rounded-lg p-3">
              <p className="text-2xl font-bold text-green-400">{correctAnswers}</p>
              <p className="text-xs text-gray-500">Correctas</p>
            </div>
            <div className="bg-dark-700 rounded-lg p-3">
              <p className="text-2xl font-bold text-yellow-400">{maxStreak}</p>
              <p className="text-xs text-gray-500">Racha máx</p>
            </div>
            <div className="bg-dark-700 rounded-lg p-3">
              <p className="text-2xl font-bold text-blue-400">+{totalTimeBonus}</p>
              <p className="text-xs text-gray-500">Bonus tiempo</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={initGame}
              className="flex-1 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-colors"
            >
              Jugar de nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Playing screen
  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>Pregunta {currentIndex + 1} de {totalQuestions}</span>
          <span>Puntuación: {score}</span>
        </div>
        <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Timer */}
      <div className="mb-6">
        <div className="flex items-center justify-center gap-3">
          <div
            className={`text-4xl font-bold ${
              timeLeft <= 3 ? 'text-red-500 animate-pulse' : 'text-white'
            }`}
          >
            {timeLeft}
          </div>
          <div className="w-full h-3 bg-dark-700 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft <= 3 ? 'bg-red-500' : timeLeft <= 5 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${(timeLeft / timePerQuestion) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Streak indicator */}
      {streak > 0 && (
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
            🔥 Racha: {streak}
          </span>
        </div>
      )}

      {/* Question */}
      <div className="bg-dark-800 rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-2 py-1 rounded text-xs ${
            currentQuestion?.type === 'vocabulary' ? 'bg-blue-500/20 text-blue-400' :
            currentQuestion?.type === 'grammar' ? 'bg-purple-500/20 text-purple-400' :
            'bg-green-500/20 text-green-400'
          }`}>
            {currentQuestion?.type === 'vocabulary' ? '📚 Vocabulario' :
             currentQuestion?.type === 'grammar' ? '📝 Gramática' : '🌐 Traducción'}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-6">
          {currentQuestion?.question}
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {currentQuestion?.options.map((option, index) => {
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
                  ${showResult && isCorrect ? 'bg-green-600 text-white' : ''}
                  ${showResult && isSelected && !isCorrect ? 'bg-red-600 text-white' : ''}
                  ${showResult && !isSelected && !isCorrect ? 'bg-dark-700 text-gray-500' : ''}
                `}
              >
                <span className="text-gray-500 mr-2">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback overlay */}
      {showFeedback && (
        <div className={`fixed inset-x-0 top-1/4 flex justify-center pointer-events-none z-50`}>
          <div className={`
            px-8 py-4 rounded-2xl text-2xl font-bold animate-bounce
            ${showFeedback === 'correct' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}
          `}>
            {showFeedback === 'correct' ? '✓ ¡Correcto!' : '✗ Incorrecto'}
          </div>
        </div>
      )}
    </div>
  );
}
