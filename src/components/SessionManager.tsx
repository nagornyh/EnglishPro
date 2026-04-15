import { useState, useEffect, useCallback } from 'react';
import sessionTimingService from '../services/sessionTimingService';
import type { TimingRecommendation, SessionSummary } from '../services/sessionTimingService';

interface SessionManagerProps {
  onSessionEnd?: (summary: SessionSummary) => void;
  onExerciseHandler?: (handler: (wasCorrect: boolean, responseTime: number) => TimingRecommendation) => void;
}

export default function SessionManager({ onSessionEnd, onExerciseHandler }: SessionManagerProps) {
  const [recommendation, setRecommendation] = useState<TimingRecommendation | null>(null);
  const [showBreakModal, setShowBreakModal] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);
  const [breakTimeLeft, setBreakTimeLeft] = useState(0);

  // Handler for exercise completion - exposed via onExerciseHandler prop
  const handleExerciseComplete = useCallback((wasCorrect: boolean, responseTime: number) => {
    const rec = sessionTimingService.recordExercise(wasCorrect, responseTime);
    setRecommendation(rec);
    
    if (rec.action !== 'continue') {
      setShowBreakModal(true);
    }

    return rec;
  }, []);

  useEffect(() => {
    onExerciseHandler?.(handleExerciseComplete);
  }, [onExerciseHandler, handleExerciseComplete]);

  useEffect(() => {
    // Countdown for break
    if (isBreaking && breakTimeLeft > 0) {
      const interval = setInterval(() => {
        setBreakTimeLeft(prev => {
          if (prev <= 1) {
            setIsBreaking(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isBreaking, breakTimeLeft]);

  const handleTakeBreak = (minutes: number) => {
    setBreakTimeLeft(minutes * 60);
    setIsBreaking(true);
    sessionTimingService.recordBreak(minutes * 60 * 1000);
    setShowBreakModal(false);
  };

  const handleEndSession = () => {
    const summary = sessionTimingService.endSession();
    onSessionEnd?.(summary);
    setShowBreakModal(false);
  };

  const handleDismissBreak = () => {
    setShowBreakModal(false);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Break countdown overlay */}
      {isBreaking && (
        <div className="modal-overlay modal-overlay-strong">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">☕</div>
            <h2 className="text-2xl font-bold mb-2">Tiempo de descanso</h2>
            <p className="text-gray-400 mb-6">Relaja tu mente y descansa los ojos</p>
            
            <div className="text-6xl font-mono font-bold text-blue-400 mb-8">
              {formatTime(breakTimeLeft)}
            </div>

            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 text-left">
                <p className="text-sm text-gray-400 mb-2">Sugerencias:</p>
                <ul className="text-sm space-y-1">
                  <li>• Mira algo a lo lejos por 20 segundos</li>
                  <li>• Estira el cuello y los hombros</li>
                  <li>• Toma un poco de agua</li>
                  <li>• Respira profundo</li>
                </ul>
              </div>

              <button
                onClick={() => setIsBreaking(false)}
                className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Volver antes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Break recommendation modal */}
      {showBreakModal && recommendation && (
        <div className="modal-overlay p-4">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">
                {recommendation.action === 'end-session' ? '🏆' :
                 recommendation.action === 'long-break' ? '🧘' : '☕'}
              </div>
              <h2 className="text-xl font-bold mb-2">
                {recommendation.action === 'end-session' ? '¡Gran sesión!' :
                 recommendation.action === 'long-break' ? 'Tiempo de un descanso largo' :
                 '¿Tomamos un descanso?'}
              </h2>
              <p className="text-gray-400">{recommendation.reason}</p>
              {recommendation.encouragement && (
                <p className="text-blue-400 mt-2">{recommendation.encouragement}</p>
              )}
            </div>

            <div className="space-y-3">
              {recommendation.action === 'end-session' ? (
                <button
                  onClick={handleEndSession}
                  className="w-full py-3 bg-green-600 rounded-lg font-bold hover:bg-green-700 transition-colors"
                >
                  Terminar sesión
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleTakeBreak(recommendation.breakDuration || 2)}
                    className="w-full py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Tomar descanso ({recommendation.breakDuration} min)
                  </button>
                  <button
                    onClick={handleDismissBreak}
                    className="w-full py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Continuar sin descanso
                  </button>
                </>
              )}

              <button
                onClick={handleEndSession}
                className="w-full py-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terminar sesión ahora
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Session summary component
export function SessionSummaryView({ summary }: { summary: SessionSummary }) {
  const getGrade = (focusScore: number): { letter: string; color: string } => {
    if (focusScore >= 90) return { letter: 'A+', color: 'text-green-400' };
    if (focusScore >= 80) return { letter: 'A', color: 'text-green-400' };
    if (focusScore >= 70) return { letter: 'B', color: 'text-blue-400' };
    if (focusScore >= 60) return { letter: 'C', color: 'text-yellow-400' };
    return { letter: 'D', color: 'text-red-400' };
  };

  const grade = getGrade(summary.focusScore);

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4 text-center">📊 Resumen de la sesión</h3>

      {/* Focus score */}
      <div className="text-center mb-6">
        <div className={`text-6xl font-bold ${grade.color}`}>{grade.letter}</div>
        <div className="text-gray-400">Puntuación de enfoque: {summary.focusScore}%</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-blue-400">
            {Math.round(summary.duration)} min
          </div>
          <div className="text-sm text-gray-400">Duración</div>
        </div>

        <div className="bg-gray-700/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-green-400">
            {summary.exercisesCompleted}
          </div>
          <div className="text-sm text-gray-400">Ejercicios</div>
        </div>

        <div className="bg-gray-700/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {Math.round(summary.accuracy * 100)}%
          </div>
          <div className="text-sm text-gray-400">Precisión</div>
        </div>

        <div className="bg-gray-700/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-purple-400">
            {summary.longestStreak}
          </div>
          <div className="text-sm text-gray-400">Mejor racha</div>
        </div>
      </div>

      {summary.fatigueEvents > 0 && (
        <div className="mt-4 text-center text-sm text-gray-400">
          ⚠️ Detectamos {summary.fatigueEvents} momento(s) de fatiga durante la sesión
        </div>
      )}
    </div>
  );
}

// Export the exercise complete handler for use in activities
export { sessionTimingService };
