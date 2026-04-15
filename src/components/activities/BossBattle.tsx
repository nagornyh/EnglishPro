// BossBattle Activity Component
// Epic level-end battles with grammar and vocabulary challenges

import { useState, useEffect, useRef } from 'react';
import { challengeService } from '../../services/challengeService';
import type { BossBattle as BossBattleType } from '../../services/challengeService';

interface BossBattleProps {
  levelId: number;
  onComplete?: (victory: boolean, rewards: { xp: number }) => void;
  onXPGain?: (xp: number) => void;
}

export default function BossBattle({ levelId, onComplete, onXPGain }: BossBattleProps) {
  const [battle, setBattle] = useState<BossBattleType | null>(null);
  const [gameState, setGameState] = useState<'intro' | 'fighting' | 'victory' | 'defeat'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [bossHealth, setBossHealth] = useState(100);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [shakeScreen, setShakeScreen] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Load battle for level
  useEffect(() => {
    const bossBattle = challengeService.getBossBattleForLevel(levelId);
    if (bossBattle) {
      setBattle(bossBattle);
      setTimeLeft(bossBattle.timeLimit);
    }
  }, [levelId]);

  // Timer
  useEffect(() => {
    if (gameState !== 'fighting') return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleDefeat();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  // Start battle
  const startBattle = () => {
    setGameState('fighting');
    setCurrentQuestionIndex(0);
    setScore(0);
    setBossHealth(100);
    setPlayerHealth(100);
    setTimeLeft(battle?.timeLimit || 180);
  };

  // Handle answer for multiple choice
  const handleAnswer = (answer: string) => {
    if (showFeedback || !battle) return;

    const currentQuestion = battle.questions[currentQuestionIndex];
    const isCorrect = answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    
    setSelectedAnswer(answer);
    setShowFeedback(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      // Damage boss
      const damage = Math.ceil(100 / battle.questions.length);
      setBossHealth(prev => Math.max(0, prev - damage));
      setScore(prev => prev + currentQuestion.points);
      setTimeLeft(prev => prev + currentQuestion.timeBonus);
    } else {
      // Take damage
      setPlayerHealth(prev => Math.max(0, prev - 20));
      setShakeScreen(true);
      setTimeout(() => setShakeScreen(false), 500);
    }

    // Next question or end
    setTimeout(() => {
      if (playerHealth <= 20 && !isCorrect) {
        handleDefeat();
      } else if (currentQuestionIndex + 1 >= battle.questions.length || bossHealth <= 0) {
        handleVictoryCheck();
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
        setShowFeedback(null);
        setSelectedAnswer(null);
        setUserAnswer('');
      }
    }, 1500);
  };

  // Handle fill-blank answer
  const handleFillBlankSubmit = () => {
    if (!userAnswer.trim()) return;
    handleAnswer(userAnswer.trim());
  };

  // Check for victory
  const handleVictoryCheck = () => {
    if (!battle) return;
    
    const percentage = (score / battle.questions.reduce((sum, q) => sum + q.points, 0)) * 100;
    
    if (percentage >= battle.requiredScore) {
      handleVictory();
    } else {
      handleDefeat();
    }
  };

  // Victory
  const handleVictory = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('victory');
    
    if (battle) {
      const rewards = challengeService.recordBossVictory(battle.id);
      if (rewards) {
        onXPGain?.(rewards.xp);
      }
      onComplete?.(true, { xp: battle.rewards.xp });
    }
  };

  // Defeat
  const handleDefeat = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('defeat');
    onComplete?.(false, { xp: 0 });
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!battle) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-center">
        <div className="bg-dark-800 rounded-2xl p-8">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-xl font-bold text-white mb-2">No Boss Available</h2>
          <p className="text-gray-400">No hay batalla de jefe para este nivel</p>
        </div>
      </div>
    );
  }

  const currentQuestion = battle.questions[currentQuestionIndex];
  const isAlreadyDefeated = challengeService.isBossDefeated(battle.id);

  // Intro screen
  if (gameState === 'intro') {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-gradient-to-b from-dark-800 to-dark-900 rounded-2xl p-8 text-center border border-red-900/50">
          <div className="text-8xl mb-4 animate-bounce">{battle.bossEmoji}</div>
          
          <h2 className="text-3xl font-bold text-red-400 mb-2">{battle.name}</h2>
          <p className="text-gray-400 mb-2">{battle.nameEs}</p>
          
          <p className="text-gray-300 my-6">{battle.description}</p>
          
          <div className="bg-dark-700 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Dificultad</p>
                <p className="text-xl font-bold text-red-400">
                  {'💀'.repeat(battle.difficulty)}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Tiempo</p>
                <p className="text-xl font-bold text-white">{formatTime(battle.timeLimit)}</p>
              </div>
              <div>
                <p className="text-gray-500">Requerido</p>
                <p className="text-xl font-bold text-yellow-400">{battle.requiredScore}%</p>
              </div>
            </div>
          </div>

          <div className="mb-6 text-left">
            <h4 className="text-sm font-bold text-gray-400 mb-2">🎁 Recompensas:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                +{battle.rewards.xp} XP
              </span>
              {battle.rewards.badge && (
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  🏅 {battle.rewards.badge}
                </span>
              )}
              {battle.rewards.themeId && (
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  🎨 Tema especial
                </span>
              )}
            </div>
          </div>

          {isAlreadyDefeated ? (
            <div className="bg-green-900/30 border border-green-700 rounded-xl p-4 mb-4">
              <span className="text-green-400">✓ ¡Ya derrotaste a este jefe!</span>
            </div>
          ) : null}

          <button
            onClick={startBattle}
            className="btn-danger btn-lg w-full"
          >
            ⚔️ ¡COMENZAR BATALLA!
          </button>
        </div>
      </div>
    );
  }

  // Victory screen
  if (gameState === 'victory') {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-gradient-to-b from-yellow-900/30 to-dark-900 rounded-2xl p-8 text-center border border-yellow-500/50">
          <div className="text-8xl mb-4">🏆</div>
          
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">¡VICTORIA!</h2>
          <p className="text-gray-400 mb-6">Has derrotado a {battle.name}</p>
          
          <div className="bg-dark-700 rounded-xl p-6 mb-6">
            <p className="text-gray-400 mb-2">Puntuación final</p>
            <p className="text-4xl font-bold text-white">{score} pts</p>
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
              <span className="text-gray-400">XP ganado</span>
              <span className="text-yellow-400 font-bold">+{battle.rewards.xp}</span>
            </div>
            {battle.rewards.badge && (
              <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                <span className="text-gray-400">Insignia</span>
                <span className="text-purple-400 font-bold">🏅 {battle.rewards.badge}</span>
              </div>
            )}
          </div>

          <button
            onClick={() => setGameState('intro')}
            className="w-full py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-colors"
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }

  // Defeat screen
  if (gameState === 'defeat') {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-gradient-to-b from-red-900/30 to-dark-900 rounded-2xl p-8 text-center border border-red-500/50">
          <div className="text-8xl mb-4">💀</div>
          
          <h2 className="text-3xl font-bold text-red-400 mb-2">DERROTA</h2>
          <p className="text-gray-400 mb-6">{battle.name} te ha vencido...</p>
          
          <div className="bg-dark-700 rounded-xl p-6 mb-6">
            <p className="text-gray-400 mb-2">Puntuación alcanzada</p>
            <p className="text-4xl font-bold text-white">{score} pts</p>
            <p className="text-gray-500 text-sm mt-2">
              Necesitabas {battle.requiredScore}% para ganar
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={startBattle}
              className="flex-1 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-colors"
            >
              🔄 Reintentar
            </button>
            <button
              onClick={() => setGameState('intro')}
              className="flex-1 py-3 bg-dark-600 text-gray-300 rounded-xl hover:bg-dark-500 transition-colors"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Battle screen
  return (
    <div className={`max-w-2xl mx-auto p-4 ${shakeScreen ? 'animate-shake' : ''}`}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>

      {/* Timer */}
      <div className="mb-4 text-center">
        <span className={`text-2xl font-bold ${timeLeft <= 30 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
          ⏱️ {formatTime(timeLeft)}
        </span>
      </div>

      {/* Health bars */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Player health */}
        <div className="bg-dark-800 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧑</span>
            <span className="text-white font-bold">Tú</span>
          </div>
          <div className="h-4 bg-dark-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
              style={{ width: `${playerHealth}%` }}
            />
          </div>
          <p className="text-right text-sm text-gray-400 mt-1">{playerHealth}%</p>
        </div>

        {/* Boss health */}
        <div className="bg-dark-800 rounded-xl p-3">
          <div className="flex items-center justify-end gap-2 mb-2">
            <span className="text-white font-bold">{battle.name}</span>
            <span className="text-2xl">{battle.bossEmoji}</span>
          </div>
          <div className="h-4 bg-dark-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-red-400 transition-all duration-500"
              style={{ width: `${bossHealth}%` }}
            />
          </div>
          <p className="text-right text-sm text-gray-400 mt-1">{bossHealth}%</p>
        </div>
      </div>

      {/* Question */}
      <div className="bg-dark-800 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Pregunta {currentQuestionIndex + 1}/{battle.questions.length}
          </span>
          <span className="text-sm text-yellow-400">
            +{currentQuestion.points} pts
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-6">{currentQuestion.question}</h3>

        {/* Multiple choice */}
        {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              const showResult = showFeedback !== null;

              return (
                <button
                  key={index}
                  onClick={() => !showFeedback && handleAnswer(option)}
                  disabled={showFeedback !== null}
                  className={`
                    w-full p-4 rounded-xl text-left font-medium transition-all
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
        )}

        {/* Fill blank */}
        {currentQuestion.type === 'fill-blank' && (
          <div className="space-y-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={showFeedback !== null}
              placeholder="Escribe tu respuesta..."
              className={`
                w-full p-4 rounded-xl bg-dark-700 border-2 text-white
                ${showFeedback === 'correct' ? 'border-green-500' : ''}
                ${showFeedback === 'wrong' ? 'border-red-500' : 'border-dark-600'}
              `}
              onKeyDown={(e) => e.key === 'Enter' && !showFeedback && handleFillBlankSubmit()}
            />
            {!showFeedback && (
              <button
                onClick={handleFillBlankSubmit}
                className="w-full py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500"
              >
                Enviar
              </button>
            )}
          </div>
        )}

        {/* Translation */}
        {currentQuestion.type === 'translation' && currentQuestion.options && (
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              const showResult = showFeedback !== null;

              return (
                <button
                  key={index}
                  onClick={() => !showFeedback && handleAnswer(option)}
                  disabled={showFeedback !== null}
                  className={`
                    w-full p-4 rounded-xl text-left font-medium transition-all
                    ${!showResult ? 'bg-dark-700 hover:bg-dark-600 text-white' : ''}
                    ${showResult && isCorrect ? 'bg-green-600 text-white' : ''}
                    ${showResult && isSelected && !isCorrect ? 'bg-red-600 text-white' : ''}
                    ${showResult && !isSelected && !isCorrect ? 'bg-dark-700 text-gray-500' : ''}
                  `}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}

        {/* Feedback */}
        {showFeedback && (
          <div className={`mt-4 p-4 rounded-xl ${
            showFeedback === 'correct' ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'
          }`}>
            <p className="text-sm text-gray-300">{currentQuestion.explanation}</p>
            <p className="text-sm text-gray-500 mt-1">{currentQuestion.explanationEs}</p>
          </div>
        )}
      </div>

      {/* Score */}
      <div className="mt-4 text-center">
        <span className="text-gray-400">Puntuación: </span>
        <span className="text-white font-bold">{score}</span>
      </div>
    </div>
  );
}
