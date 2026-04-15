// Challenges Page Component
// Hub for all challenge activities

import { useState, useEffect } from 'react';
import { challengeService } from '../services/challengeService';
import type { BossBattle, UserChallengeProgress } from '../services/challengeService';
import BossBattleComponent from '../components/activities/BossBattle';
import SurvivalMode from '../components/activities/SurvivalMode';
import WeeklyChallenge from '../components/activities/WeeklyChallenge';
import SpeedRound from '../components/activities/SpeedRound';
import { useUser } from '../context/UserContext';

type ViewType = 'hub' | 'boss-battle' | 'survival' | 'weekly' | 'speed-round';

export default function Challenges() {
  const { user, addXP } = useUser();
  const [currentView, setCurrentView] = useState<ViewType>('hub');
  const [selectedBossLevel, setSelectedBossLevel] = useState<number>(1);
  const [progress, setProgress] = useState<UserChallengeProgress | null>(null);
  const [bossBattles, setBossBattles] = useState<BossBattle[]>([]);

  // Load data
  useEffect(() => {
    setProgress(challengeService.getProgress());
    setBossBattles([
      challengeService.getBossBattleForLevel(1),
      challengeService.getBossBattleForLevel(2),
      challengeService.getBossBattleForLevel(3),
    ].filter(Boolean) as BossBattle[]);
  }, [currentView]);

  // Handle XP gain
  const handleXPGain = async (xp: number) => {
    await addXP(xp);
  };

  // Check boss availability (based on user level)
  const isBossAvailable = (bossLevelId: number) => {
    // User must have at least reached the boss level
    return (user?.progress?.currentLevel || 1) >= bossLevelId;
  };

  // Check if boss is defeated
  const isBossDefeated = (bossId: string) => {
    return progress?.completedBosses.includes(bossId) || false;
  };

  // Hub view
  if (currentView === 'hub') {
    return (
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">⚔️ Centro de Desafíos</h1>
          <p className="text-gray-400">Pon a prueba tus habilidades con actividades especiales</p>
        </div>

        {/* Challenge modes */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Boss Battles */}
          <div className="bg-gradient-to-br from-red-900/30 to-dark-800 rounded-2xl p-6 border border-red-900/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-red-900/50 rounded-xl flex items-center justify-center text-4xl">
                👹
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Batallas de Jefe</h2>
                <p className="text-gray-400 text-sm">Desafíos épicos al final de cada nivel</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              {bossBattles.map((boss) => {
                const available = isBossAvailable(boss.levelId);
                const defeated = isBossDefeated(boss.id);

                return (
                  <button
                    key={boss.id}
                    onClick={() => {
                      if (available) {
                        setSelectedBossLevel(boss.levelId);
                        setCurrentView('boss-battle');
                      }
                    }}
                    disabled={!available}
                    className={`
                      w-full p-3 rounded-lg flex items-center justify-between transition-colors
                      ${available 
                        ? defeated 
                          ? 'bg-green-900/30 hover:bg-green-900/50' 
                          : 'bg-dark-700 hover:bg-dark-600'
                        : 'bg-dark-800 opacity-50 cursor-not-allowed'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{boss.bossEmoji}</span>
                      <div className="text-left">
                        <p className={`font-medium ${defeated ? 'text-green-400' : 'text-white'}`}>
                          {boss.name}
                        </p>
                        <p className="text-gray-500 text-xs">Nivel {boss.levelId}</p>
                      </div>
                    </div>
                    {defeated ? (
                      <span className="text-green-400">✓ Derrotado</span>
                    ) : !available ? (
                      <span className="text-gray-500">🔒</span>
                    ) : (
                      <span className="text-red-400">⚔️</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Survival Mode */}
          <div className="bg-gradient-to-br from-purple-900/30 to-dark-800 rounded-2xl p-6 border border-purple-900/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-purple-900/50 rounded-xl flex items-center justify-center text-4xl">
                ❤️
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Modo Supervivencia</h2>
                <p className="text-gray-400 text-sm">¿Cuánto tiempo puedes sobrevivir?</p>
              </div>
            </div>
            
            <div className="bg-dark-700 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-gray-500 text-sm">Mejor puntuación</p>
                  <p className="text-2xl font-bold text-purple-400">
                    {progress?.survivalHighScore || 0}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Vidas</p>
                  <p className="text-2xl">❤️❤️❤️</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('survival')}
              className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-colors"
            >
              🎮 Jugar Supervivencia
            </button>
          </div>

          {/* Speed Round */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-dark-800 rounded-2xl p-6 border border-yellow-900/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-yellow-900/50 rounded-xl flex items-center justify-center text-4xl">
                ⚡
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Speed Round</h2>
                <p className="text-gray-400 text-sm">Respuestas rápidas contra el reloj</p>
              </div>
            </div>
            
            <div className="bg-dark-700 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-gray-500 text-sm">Mejor puntuación</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {progress?.speedRoundHighScore || 0}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Tiempo/pregunta</p>
                  <p className="text-2xl font-bold text-white">10s</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('speed-round')}
              className="w-full py-3 bg-yellow-600 text-white font-bold rounded-xl hover:bg-yellow-500 transition-colors"
            >
              ⚡ Jugar Speed Round
            </button>
          </div>

          {/* Weekly Challenges */}
          <div className="bg-gradient-to-br from-blue-900/30 to-dark-800 rounded-2xl p-6 border border-blue-900/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-900/50 rounded-xl flex items-center justify-center text-4xl">
                🏆
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Desafíos Semanales</h2>
                <p className="text-gray-400 text-sm">Metas especiales con recompensas</p>
              </div>
            </div>
            
            <div className="bg-dark-700 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Progreso esta semana</span>
                <span className="text-blue-400 font-bold">
                  {progress?.completedChallenges.length || 0} completados
                </span>
              </div>
              <div className="mt-2 h-2 bg-dark-600 rounded-full">
                <div 
                  className="h-full bg-blue-500 rounded-full" 
                  style={{ 
                    width: `${Math.min((progress?.completedChallenges.length || 0) * 20, 100)}%` 
                  }} 
                />
              </div>
            </div>

            <button
              onClick={() => setCurrentView('weekly')}
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors"
            >
              📋 Ver Desafíos
            </button>
          </div>
        </div>

        {/* Stats summary */}
        <div className="mt-8 bg-dark-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">📊 Estadísticas de Desafíos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">
                {progress?.completedBosses.length || 0}
              </p>
              <p className="text-gray-500 text-sm">Jefes derrotados</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">
                {progress?.survivalHighScore || 0}
              </p>
              <p className="text-gray-500 text-sm">Récord supervivencia</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">
                {progress?.speedRoundHighScore || 0}
              </p>
              <p className="text-gray-500 text-sm">Récord speed round</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">
                {progress?.completedChallenges.length || 0}
              </p>
              <p className="text-gray-500 text-sm">Desafíos completados</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Boss Battle view
  if (currentView === 'boss-battle') {
    return (
      <div>
        <button
          onClick={() => setCurrentView('hub')}
          className="m-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          ← Volver a desafíos
        </button>
        <BossBattleComponent 
          levelId={selectedBossLevel} 
          onXPGain={handleXPGain}
          onComplete={() => setProgress(challengeService.getProgress())}
        />
      </div>
    );
  }

  // Survival view
  if (currentView === 'survival') {
    return (
      <div>
        <button
          onClick={() => setCurrentView('hub')}
          className="m-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          ← Volver a desafíos
        </button>
        <SurvivalMode 
          onXPGain={handleXPGain}
          onComplete={() => setProgress(challengeService.getProgress())}
        />
      </div>
    );
  }

  // Speed Round view
  if (currentView === 'speed-round') {
    return (
      <div>
        <button
          onClick={() => setCurrentView('hub')}
          className="m-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          ← Volver a desafíos
        </button>
        <SpeedRound 
          onXPGain={handleXPGain}
          onComplete={() => setProgress(challengeService.getProgress())}
        />
      </div>
    );
  }

  // Weekly view
  if (currentView === 'weekly') {
    return (
      <div>
        <button
          onClick={() => setCurrentView('hub')}
          className="m-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          ← Volver a desafíos
        </button>
        <WeeklyChallenge onComplete={() => setCurrentView('hub')} />
      </div>
    );
  }

  return null;
}
