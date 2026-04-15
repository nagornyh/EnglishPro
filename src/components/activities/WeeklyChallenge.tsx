// WeeklyChallenge Component
// Weekly challenge tracking and display

import { useState, useEffect } from 'react';
import { challengeService } from '../../services/challengeService';
import type { Challenge, UserChallengeProgress } from '../../services/challengeService';

interface WeeklyChallengeProps {
  onComplete?: () => void;
}

export default function WeeklyChallenge({ onComplete }: WeeklyChallengeProps) {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [progress, setProgress] = useState<UserChallengeProgress | null>(null);
  const [expandedChallenge, setExpandedChallenge] = useState<string | null>(null);

  // Load challenges and progress
  useEffect(() => {
    const weekly = challengeService.getWeeklyChallenges();
    setChallenges(weekly);
    setProgress(challengeService.getProgress());
  }, []);

  // Get challenge progress from activeChallenges
  const getActiveChallenge = (challengeId: string) => {
    return progress?.activeChallenges.find(ac => ac.challengeId === challengeId);
  };

  // Check if challenge is completed
  const isChallengeCompleted = (challengeId: string): boolean => {
    return progress?.completedChallenges.includes(challengeId) || false;
  };

  // Get requirement progress percentage
  const getRequirementProgress = (challenge: Challenge): number => {
    const active = getActiveChallenge(challenge.id);
    if (!active || challenge.requirements.length === 0) return 0;
    
    // Sum up all requirements progress
    let totalTarget = 0;
    let totalCurrent = 0;
    
    challenge.requirements.forEach((req, idx) => {
      const activeReq = active.progress[idx];
      totalTarget += req.target;
      totalCurrent += activeReq?.current || 0;
    });
    
    return totalTarget > 0 ? (totalCurrent / totalTarget) * 100 : 0;
  };

  // Calculate time remaining
  const getTimeRemaining = (): string => {
    const now = new Date();
    const endOfWeek = new Date();
    endOfWeek.setDate(now.getDate() + (7 - now.getDay()));
    endOfWeek.setHours(23, 59, 59, 999);
    
    const diff = endOfWeek.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) {
      return `${days}d ${hours}h restantes`;
    }
    return `${hours}h restantes`;
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400 bg-green-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'hard': return 'text-red-400 bg-red-500/20';
      case 'extreme': return 'text-purple-400 bg-purple-500/20';
    }
  };

  // Calculate total XP available
  const totalXPAvailable = challenges.reduce((sum, c) => sum + c.rewards.xp, 0);
  const earnedXP = challenges
    .filter(c => isChallengeCompleted(c.id))
    .reduce((sum, c) => sum + c.rewards.xp, 0);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 to-accent-900 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">🏆 Desafíos Semanales</h2>
            <p className="text-gray-300 text-sm">{getTimeRemaining()}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-yellow-400">{earnedXP}</p>
            <p className="text-gray-400 text-sm">de {totalXPAvailable} XP</p>
          </div>
        </div>

        {/* Overall progress */}
        <div className="bg-dark-900/50 rounded-xl p-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Progreso semanal</span>
            <span className="text-white">
              {challenges.filter(c => isChallengeCompleted(c.id)).length} / {challenges.length} completados
            </span>
          </div>
          <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all"
              style={{ 
                width: `${challenges.length > 0 ? (challenges.filter(c => isChallengeCompleted(c.id)).length / challenges.length) * 100 : 0}%` 
              }}
            />
          </div>
        </div>
      </div>

      {/* Challenge list */}
      <div className="space-y-4">
        {challenges.map(challenge => {
          const isComplete = isChallengeCompleted(challenge.id);
          const progressPercent = isComplete ? 100 : getRequirementProgress(challenge);

          return (
            <div
              key={challenge.id}
              className={`
                bg-dark-800 rounded-xl overflow-hidden transition-all
                ${isComplete ? 'ring-2 ring-green-500/50' : ''}
              `}
            >
              <button
                onClick={() => setExpandedChallenge(
                  expandedChallenge === challenge.id ? null : challenge.id
                )}
                className="w-full p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center text-2xl
                    ${isComplete ? 'bg-green-600' : 'bg-dark-700'}
                  `}>
                    {isComplete ? '✓' : challenge.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-bold ${isComplete ? 'text-green-400' : 'text-white'}`}>
                        {challenge.name}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{challenge.nameEs}</p>

                    {/* Progress bar */}
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">{challenge.description}</span>
                        <span className={isComplete ? 'text-green-400' : 'text-gray-400'}>
                          {Math.round(progressPercent)}%
                        </span>
                      </div>
                      <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all ${
                            isComplete ? 'bg-green-500' : 'bg-primary-500'
                          }`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Reward */}
                  <div className="text-right">
                    <span className={`text-lg font-bold ${isComplete ? 'text-green-400' : 'text-yellow-400'}`}>
                      +{challenge.rewards.xp}
                    </span>
                    <p className="text-gray-500 text-xs">XP</p>
                  </div>
                </div>
              </button>

              {/* Expanded details */}
              {expandedChallenge === challenge.id && (
                <div className="px-5 pb-5 pt-2 border-t border-dark-700">
                  {/* Requirements */}
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm mb-2">Requisitos:</p>
                    <div className="space-y-2">
                      {challenge.requirements.map((req, idx) => {
                        const activeChallenge = getActiveChallenge(challenge.id);
                        const current = activeChallenge?.progress[idx]?.current || 0;
                        const reqComplete = current >= req.target;
                        
                        return (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <span className={reqComplete ? 'text-green-400' : 'text-gray-400'}>
                              {reqComplete ? '✓' : '○'}
                            </span>
                            <span className={reqComplete ? 'text-green-400' : 'text-gray-300'}>
                              {req.description} ({current}/{req.target})
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-dark-700 rounded-lg p-3">
                      <p className="text-gray-500 mb-1">Tipo</p>
                      <p className="text-white capitalize">{challenge.type.replace('-', ' ')}</p>
                    </div>
                    <div className="bg-dark-700 rounded-lg p-3">
                      <p className="text-gray-500 mb-1">Dificultad</p>
                      <p className={getDifficultyColor(challenge.difficulty).split(' ')[0]}>
                        {challenge.difficulty === 'easy' ? 'Fácil' :
                         challenge.difficulty === 'medium' ? 'Medio' : 
                         challenge.difficulty === 'hard' ? 'Difícil' : 'Extremo'}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mt-4">
                    {challenge.descriptionEs}
                  </p>

                  {isComplete && (
                    <div className="mt-4 p-3 bg-green-900/30 border border-green-700 rounded-lg text-center">
                      <span className="text-green-400 font-medium">
                        ✓ ¡Desafío completado! +{challenge.rewards.xp} XP
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tips */}
      <div className="mt-8 bg-dark-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">💡 Consejos</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li>• Completa desafíos para ganar XP bonus</li>
          <li>• Los desafíos se reinician cada semana</li>
          <li>• Tu progreso cuenta automáticamente al completar actividades</li>
          <li>• Desafíos más difíciles dan más XP</li>
        </ul>
      </div>

      {/* Complete button if all done */}
      {challenges.length > 0 && challenges.every(c => isChallengeCompleted(c.id)) && (
        <div className="mt-6 text-center">
          <button
            onClick={onComplete}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl"
          >
            🎉 ¡Todos los desafíos completados!
          </button>
        </div>
      )}
    </div>
  );
}
