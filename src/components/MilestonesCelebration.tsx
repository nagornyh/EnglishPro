import { useState, useEffect } from 'react';
import { milestonesService, MILESTONES } from '../data/progressMilestones';
import type { Milestone } from '../data/progressMilestones';
import { getRandomFunFact } from '../data/fun-facts';
import type { FunFact } from '../data/fun-facts';

interface MilestonesCelebrationProps {
  newMilestones?: Milestone[];
  onClose?: () => void;
}

export default function MilestonesCelebration({ newMilestones, onClose }: MilestonesCelebrationProps) {
  const [showCelebration, setShowCelebration] = useState(!!newMilestones?.length);
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);
  const [funFact, setFunFact] = useState<FunFact | null>(null);

  useEffect(() => {
    if (newMilestones && newMilestones.length > 0) {
      setShowCelebration(true);
      setFunFact(getRandomFunFact('tip'));
    }
  }, [newMilestones]);

  const handleNext = () => {
    if (newMilestones && currentMilestoneIndex < newMilestones.length - 1) {
      setCurrentMilestoneIndex(prev => prev + 1);
    } else {
      setShowCelebration(false);
      onClose?.();
    }
  };

  if (!showCelebration || !newMilestones || newMilestones.length === 0) {
    return null;
  }

  const currentMilestone = newMilestones[currentMilestoneIndex];

  return (
    <div className="modal-overlay p-4">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center animate-bounce-in">
        {/* Confetti effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][i % 5],
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Badge */}
        <div className="text-8xl mb-4 animate-pulse">
          {currentMilestone.icon}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2 text-yellow-400">
          ¡Logro desbloqueado!
        </h2>

        <h3 className="text-xl font-bold mb-2">
          {currentMilestone.title}
        </h3>

        <p className="text-gray-400 mb-6">
          {currentMilestone.description}
        </p>

        {/* Points earned */}
        <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
          <div className="text-3xl font-bold text-yellow-400">
            +{currentMilestone.requirement * (
              currentMilestone.type === 'streak' ? 2 :
              currentMilestone.type === 'mastery' ? 1 :
              currentMilestone.type === 'volume' ? 0.1 : 0.5
            )} puntos
          </div>
        </div>

        {/* Fun fact */}
        {funFact && (
          <div className="bg-blue-500/10 rounded-lg p-4 mb-6 text-left">
            <div className="text-sm text-blue-400 mb-1">💡 Dato curioso:</div>
            <div className="text-sm text-gray-300">{funFact.fact}</div>
          </div>
        )}

        {/* Progress indicator */}
        {newMilestones.length > 1 && (
          <div className="flex justify-center gap-2 mb-4">
            {newMilestones.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === currentMilestoneIndex ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}

        {/* Action button */}
        <button
          onClick={handleNext}
          className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl text-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all"
        >
          {currentMilestoneIndex < newMilestones.length - 1 
            ? '¡Ver siguiente logro!' 
            : '¡Continuar!'}
        </button>
      </div>

      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 3s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Component to show all milestones
export function AllMilestones() {
  const achievedMilestones = milestonesService.getAchievedMilestones();
  const totalPoints = milestonesService.getTotalPoints();
  const countByType = milestonesService.getMilestoneCountByType();

  const typeIcons: Record<Milestone['type'], string> = {
    streak: '🔥',
    mastery: '🧠',
    volume: '📝',
    improvement: '💪',
    exploration: '🗺️',
    special: '⭐',
  };

  const typeNames: Record<Milestone['type'], string> = {
    streak: 'Constancia',
    mastery: 'Dominio',
    volume: 'Volumen',
    improvement: 'Mejora',
    exploration: 'Exploración',
    special: 'Especiales',
  };

  return (
    <div className="space-y-6">
      {/* Total points */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 text-center">
        <div className="text-4xl font-bold text-yellow-400">{totalPoints}</div>
        <div className="text-gray-400">Puntos totales</div>
      </div>

      {/* Summary by type */}
      <div className="grid grid-cols-3 gap-3">
        {(Object.keys(countByType) as Milestone['type'][]).map(type => (
          <div key={type} className="bg-gray-800 rounded-lg p-3 text-center">
            <div className="text-2xl mb-1">{typeIcons[type]}</div>
            <div className="text-lg font-bold">{countByType[type]}</div>
            <div className="text-xs text-gray-500">{typeNames[type]}</div>
          </div>
        ))}
      </div>

      {/* All milestones */}
      <div>
        <h3 className="text-lg font-bold mb-4">Todos los logros</h3>
        <div className="space-y-3">
          {MILESTONES.map(milestone => {
            const achieved = achievedMilestones.find(m => m.id === milestone.id);
            return (
              <div 
                key={milestone.id}
                className={`flex items-center gap-4 p-4 rounded-lg ${
                  achieved ? 'bg-gray-800' : 'bg-gray-800/30'
                }`}
              >
                <div className={`text-3xl ${!achieved && 'grayscale opacity-50'}`}>
                  {milestone.icon}
                </div>
                <div className="flex-1">
                  <div className={`font-bold ${!achieved && 'text-gray-500'}`}>
                    {milestone.title}
                  </div>
                  <div className="text-sm text-gray-400">{milestone.description}</div>
                  {achieved && (
                    <div className="text-xs text-green-400 mt-1">
                      ✓ Conseguido el {new Date(achieved.achievedAt).toLocaleDateString()}
                    </div>
                  )}
                </div>
                {achieved ? (
                  <div className="text-green-400">✓</div>
                ) : (
                  <div className="text-gray-600">🔒</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
