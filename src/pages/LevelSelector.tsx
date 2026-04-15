import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { levels } from '../data/levels';

const cefrGroups = [
  { label: 'Principiante', levels: ['A1', 'A1+'], color: '#10b981', description: 'Primeros pasos: saludos, vocabulario básico, frases simples' },
  { label: 'Básico', levels: ['A2'], color: '#06b6d4', description: 'Viajes, pasado, situaciones cotidianas' },
  { label: 'Intermedio', levels: ['B1', 'B1+'], color: '#f59e0b', description: 'Comunicación fluida, opiniones, condicionales' },
  { label: 'Avanzado', levels: ['B2', 'B2+', 'B2+/C1'], color: '#ec4899', description: 'Textos complejos, negociación, presentaciones' },
  { label: 'Experto', levels: ['C1', 'C1+'], color: '#a78bfa', description: 'Uso flexible del idioma, argumentación sofisticada' },
  { label: 'Maestría', levels: ['C2', 'C2+'], color: '#f472b6', description: 'Nivel nativo: idioms, humor, sutilezas culturales' },
];

interface Props {
  isInitialSetup?: boolean;
}

export default function LevelSelector({ isInitialSetup = false }: Props) {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [confirming, setConfirming] = useState(false);

  if (!user) return null;

  const handleSelectLevel = async () => {
    if (selectedLevel === null) return;

    await updateUser({
      progress: {
        ...user.progress,
        currentLevel: selectedLevel,
        currentTask: 1,
      }
    });
    navigate('/');
  };

  const selectedLevelData = selectedLevel !== null ? levels.find(l => l.id === selectedLevel) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 p-4">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {!isInitialSetup && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
          )}

          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary mb-4"
            >
              <span className="text-3xl">{isInitialSetup ? '🎯' : '🔄'}</span>
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {isInitialSetup ? '¿Cuál es tu nivel de inglés?' : 'Cambiar Nivel'}
            </h1>
            <p className="text-gray-400">
              {isInitialSetup
                ? 'Selecciona el nivel en el que quieres comenzar. Puedes cambiarlo después si lo necesitas.'
                : 'Selecciona un nuevo nivel. Tu progreso anterior se conserva.'}
            </p>
          </div>
        </motion.div>

        {/* Confirmation View */}
        {confirming && selectedLevelData ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-6 text-center"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4"
              style={{ backgroundColor: `${selectedLevelData.color}20` }}
            >
              {selectedLevelData.icon}
            </div>
            <h2 className="text-xl font-bold text-white mb-1">
              Nivel {selectedLevelData.id}: {selectedLevelData.name}
            </h2>
            <p className="text-accent-primary font-medium mb-2">{selectedLevelData.cefrLevel}</p>
            <p className="text-gray-400 mb-1">{selectedLevelData.description}</p>
            <p className="text-sm text-gray-500 mb-6">
              {selectedLevelData.totalTasks} tareas · ~{selectedLevelData.estimatedHours}h estimadas
            </p>

            <div className="bg-dark-700/50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-300">
                {isInitialSetup
                  ? '¿Seguro que quieres empezar aquí? Si el nivel es muy fácil o difícil, puedes cambiarlo en cualquier momento desde el menú.'
                  : '¿Quieres cambiar a este nivel? Tu progreso en otros niveles se conserva.'}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setConfirming(false)}
                className="btn-secondary flex-1 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Elegir otro
              </button>
              <button
                onClick={handleSelectLevel}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Confirmar
              </button>
            </div>
          </motion.div>
        ) : (
          /* Level Selection Grid */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {cefrGroups.map((group, gi) => {
              const groupLevels = levels.filter(l => group.levels.includes(l.cefrLevel));
              if (groupLevels.length === 0) return null;

              return (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + gi * 0.05 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: group.color }}
                    />
                    <h3 className="font-semibold text-white">{group.label}</h3>
                    <span className="text-xs text-gray-500">{group.description}</span>
                  </div>

                  <div className="space-y-2">
                    {groupLevels.map(level => {
                      const isCurrent = level.id === user.progress.currentLevel;
                      const isSelected = level.id === selectedLevel;

                      return (
                        <button
                          key={level.id}
                          onClick={() => {
                            setSelectedLevel(level.id);
                            setConfirming(true);
                          }}
                          className={`
                            w-full p-4 rounded-xl flex items-center gap-4 transition-all text-left
                            ${isSelected
                              ? 'ring-2 ring-accent-primary bg-dark-600'
                              : 'bg-dark-800/80 hover:bg-dark-700 hover:ring-1 hover:ring-gray-600'}
                            ${isCurrent ? 'ring-1 ring-accent-secondary/50' : ''}
                          `}
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                            style={{ backgroundColor: `${level.color}20` }}
                          >
                            {level.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-white">{level.name}</span>
                              <span
                                className="px-1.5 py-0.5 rounded text-xs font-medium"
                                style={{ backgroundColor: `${level.color}20`, color: level.color }}
                              >
                                {level.cefrLevel}
                              </span>
                              {isCurrent && (
                                <span className="px-1.5 py-0.5 rounded text-xs bg-accent-primary/20 text-accent-primary">
                                  Actual
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-400 truncate">{level.description}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}

            {/* Quick tip */}
            <div className="bg-dark-800/50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-500">
                <RotateCcw className="w-4 h-4 inline mr-1" />
                No te preocupes por elegir "mal" — puedes cambiar de nivel en cualquier momento
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
