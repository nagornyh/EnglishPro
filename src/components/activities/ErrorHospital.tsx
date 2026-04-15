import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  Heart,
  ArrowRight,
  ChevronRight,
  Eye,
  EyeOff,
  RotateCcw,
  Trophy,
  Stethoscope,
} from 'lucide-react';
import { getTheoryByLevel, type GrammarTheoryModule } from '../../data/grammar-theory';

interface ErrorHospitalProps {
  level: GrammarTheoryModule['level'];
  onComplete?: (score: number, total: number) => void;
  onBack?: () => void;
  onXPGain?: (xp: number) => void;
  maxErrors?: number;
}

interface ErrorCase {
  moduleTitle: string;
  moduleTitleEs: string;
  moduleId: string;
  error: string;
  correction: string;
  whyEs: string;
  frequency: 'very common' | 'common' | 'occasional';
}

export default function ErrorHospital({
  level,
  onComplete,
  onBack,
  onXPGain,
  maxErrors = 10,
}: ErrorHospitalProps) {
  // Collect all predictedErrors from modules at this level, sorted by frequency
  const errorCases = useMemo<ErrorCase[]>(() => {
    const modules = getTheoryByLevel(level);
    const cases: ErrorCase[] = [];
    for (const mod of modules) {
      for (const err of mod.predictedErrors) {
        cases.push({
          moduleTitle: mod.title,
          moduleTitleEs: mod.titleEs,
          moduleId: mod.id,
          ...err,
        });
      }
    }
    // Sort: very common first, then common, then occasional
    const order = { 'very common': 0, common: 1, occasional: 2 };
    cases.sort((a, b) => order[a.frequency] - order[b.frequency]);
    return cases.slice(0, maxErrors);
  }, [level, maxErrors]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCorrection, setShowCorrection] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);
  const [lives, setLives] = useState(3);

  const currentCase = errorCases[currentIndex];

  const checkAnswer = useCallback(() => {
    if (!currentCase) return;
    const normalized = userAnswer.trim().toLowerCase().replace(/[.!?]+$/g, '');
    const correctNormalized = currentCase.correction
      .trim()
      .toLowerCase()
      .replace(/[.!?]+$/g, '');

    if (normalized === correctNormalized) {
      setScore((s) => s + 1);
      setShowCorrection(true);
      setShowExplanation(true);
    } else {
      setLives((l) => l - 1);
      setShowCorrection(true);
      setShowExplanation(true);
    }
  }, [currentCase, userAnswer]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= errorCases.length || lives <= 0) {
      setFinished(true);
      const xp = score * 5;
      onXPGain?.(xp);
    } else {
      setCurrentIndex((i) => i + 1);
      setShowCorrection(false);
      setShowExplanation(false);
      setUserAnswer('');
    }
  }, [currentIndex, errorCases.length, lives, score, onXPGain]);

  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setLives(3);
    setShowCorrection(false);
    setShowExplanation(false);
    setUserAnswer('');
    setFinished(false);
  }, []);

  if (errorCases.length === 0) {
    return (
      <div className="text-center py-12 space-y-4">
        <Stethoscope className="w-12 h-12 text-gray-500 mx-auto" />
        <p className="text-gray-400">
          No hay errores registrados para el nivel {level}.
        </p>
        {onBack && (
          <button onClick={onBack} className="btn-primary">
            Volver
          </button>
        )}
      </div>
    );
  }

  // Results screen
  if (finished) {
    const pct = Math.round((score / errorCases.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh] py-8"
      >
        <div className="w-full max-w-md text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
            className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-green-500/20"
          >
            <Trophy className="w-10 h-10 text-green-400" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white">
            Hospital de Errores — Resultados
          </h2>
          <p className="text-gray-400">
            Corregiste {score} de {errorCases.length} errores ({pct}%)
          </p>
          <p className="text-accent-primary text-sm">+{score * 5} XP</p>

          {pct < 70 && (
            <p className="text-sm text-orange-400 font-medium">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3 justify-center pt-2">
            <button
              onClick={handleRetry}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-700 text-gray-300 hover:text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reintentar
            </button>
            {pct >= 70 && (
              <button
                onClick={() => onComplete?.(score, errorCases.length)}
                className="btn-primary px-6 py-2.5 flex items-center gap-2"
              >
                Continuar <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-start min-h-[60vh] py-6"
    >
      <div className="w-full max-w-6xl space-y-5">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 mb-2">
            <Stethoscope className="w-5 h-5" />
            <span className="text-sm font-medium">Hospital de Errores</span>
            <span className="text-xs bg-red-500/30 px-2 py-0.5 rounded-full">
              {level}
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Corrige errores típicos de hispanohablantes — Error{' '}
            {currentIndex + 1} de {errorCases.length}
          </p>
        </div>

        {/* Lives & Progress */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <Heart
                key={i}
                className={`w-5 h-5 ${
                  i < lives ? 'text-red-400 fill-red-400' : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="text-green-400">{score}</span>
            <span>/</span>
            <span>{errorCases.length}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            animate={{
              width: `${((currentIndex + (showCorrection ? 1 : 0)) / errorCases.length) * 100}%`,
            }}
            className="h-full bg-red-500 rounded-full"
          />
        </div>

        {/* Error Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="card bg-gradient-to-br from-dark-700/50 to-dark-800/50 space-y-4"
          >
            {/* Module reference */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <AlertTriangle className="w-3 h-3" />
              <span>{currentCase.moduleTitleEs}</span>
              <span
                className={`px-2 py-0.5 rounded-full ${
                  currentCase.frequency === 'very common'
                    ? 'bg-red-500/20 text-red-400'
                    : currentCase.frequency === 'common'
                    ? 'bg-orange-500/20 text-orange-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}
              >
                {currentCase.frequency === 'very common'
                  ? 'Muy frecuente'
                  : currentCase.frequency === 'common'
                  ? 'Frecuente'
                  : 'Ocasional'}
              </span>
            </div>

            {/* The error sentence */}
            <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20 text-center">
              <p className="text-xs text-red-400 mb-1">
                Frase con error:
              </p>
              <p className="text-red-300 text-lg font-medium">
                {currentCase.error}
              </p>
            </div>

            {/* Input area */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Escribe la corrección:
              </label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !showCorrection && userAnswer.trim()) {
                    checkAnswer();
                  }
                }}
                disabled={showCorrection}
                className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors"
                placeholder="Escribe la frase correcta..."
                autoFocus
              />
            </div>

            {/* Check button */}
            {!showCorrection && (
              <button
                onClick={checkAnswer}
                disabled={!userAnswer.trim()}
                className="btn-primary w-full py-3 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                Comprobar
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {/* Correction feedback */}
            <AnimatePresence>
              {showCorrection && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3"
                >
                  <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20 text-center">
                    <p className="text-xs text-green-400 mb-1">
                      Corrección:
                    </p>
                    <p className="text-green-300 text-lg font-medium">
                      {currentCase.correction}
                    </p>
                  </div>

                  {/* Toggle explanation */}
                  <button
                    onClick={() => setShowExplanation((v) => !v)}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {showExplanation ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                    {showExplanation
                      ? 'Ocultar explicación'
                      : '¿Por qué este error?'}
                  </button>

                  <AnimatePresence>
                    {showExplanation && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20"
                      >
                        <p className="text-blue-200 text-sm">
                          {currentCase.whyEs}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Next button */}
        {showCorrection && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <button
              onClick={handleNext}
              className="btn-primary px-8 py-3 flex items-center gap-2"
            >
              {currentIndex + 1 >= errorCases.length || lives <= 0
                ? 'Ver resultados'
                : 'Siguiente error'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
