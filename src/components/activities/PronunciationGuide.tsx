import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  Play,
  ArrowRight,
  ArrowLeft,
  Mic,
  AlertCircle,
  CheckCircle,
  RefreshCw,
  Headphones,
} from 'lucide-react';
import type { PronunciationFocus } from '../../types';
import { spanishApproxForWord } from '../../utils/pronunciationApproxEs';
import { pronunciationTipDisplayEs } from '../../utils/pronunciationTipsEs';

interface PronunciationGuideProps {
  pronunciation: PronunciationFocus;
  taskTitle?: string;
  onComplete: () => void;
  onBack?: () => void;
}

export default function PronunciationGuide({ 
  pronunciation, 
  taskTitle: _taskTitle,
  onComplete,
  onBack
}: PronunciationGuideProps) {
  void _taskTitle; // Reserved for future use
  const [activeTab, setActiveTab] = useState<'sounds' | 'problems' | 'pairs' | 'intonation'>('sounds');
  const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
  const [_isPlaying, setIsPlaying] = useState(false);
  void _isPlaying; // Used for animation state

  const currentSound = pronunciation.sounds[currentSoundIndex];

  const speak = (text: string, rate: number = 0.8) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const tabs = [
    { id: 'sounds', label: 'Sonidos', icon: '🔊', count: pronunciation.sounds.length },
    { id: 'problems', label: 'Errores Comunes', icon: '⚠️', count: pronunciation.commonProblems.length },
    { id: 'pairs', label: 'Pares Mínimos', icon: '🔄', count: pronunciation.minimalPairs?.length || 0, show: pronunciation.minimalPairs && pronunciation.minimalPairs.length > 0 },
    { id: 'intonation', label: 'Entonación', icon: '📈', count: pronunciation.intonationPatterns?.length || 0, show: pronunciation.intonationPatterns && pronunciation.intonationPatterns.length > 0 },
  ].filter(tab => tab.show !== false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-[70vh] py-4 w-full max-w-7xl mx-auto px-1 sm:px-2"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 gap-2 flex-wrap">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
        )}
        <div className="flex-1 text-center min-w-[12rem]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400">
            <Headphones className="w-5 h-5" />
            <span className="text-sm font-medium">Guía de Pronunciación</span>
          </div>
        </div>
        <div className="w-20" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              activeTab === tab.id
                ? 'bg-accent-primary text-white'
                : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === tab.id ? 'bg-white/20' : 'bg-dark-600'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {/* Sounds Tab */}
          {activeTab === 'sounds' && (
            <motion.div
              key="sounds"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Sound Navigation */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={() => setCurrentSoundIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentSoundIndex === 0}
                  className="p-2 rounded-lg bg-dark-700 text-gray-400 hover:text-white disabled:opacity-50"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <span className="text-gray-400">
                  {currentSoundIndex + 1} / {pronunciation.sounds.length}
                </span>
                <button
                  onClick={() => setCurrentSoundIndex(prev => Math.min(pronunciation.sounds.length - 1, prev + 1))}
                  disabled={currentSoundIndex === pronunciation.sounds.length - 1}
                  className="p-2 rounded-lg bg-dark-700 text-gray-400 hover:text-white disabled:opacity-50"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Current Sound Card */}
              <div className="card bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 mb-4">
                    <span className="text-5xl font-mono text-white">{currentSound.symbol}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {currentSound.descriptionEs || currentSound.description}
                  </h2>
                </div>

                {/* Examples */}
                <div className="space-y-3">
                  <h3 className="text-sm text-gray-400 uppercase tracking-wide">Ejemplos</h3>
                  {currentSound.examples.map((example, idx) => {
                    const approx =
                      example.approximationEs?.trim() ||
                      spanishApproxForWord(example.word) ||
                      '';
                    return (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-dark-700/50"
                    >
                      <div>
                        <span className="text-white font-medium">{example.word}</span>
                        {approx && (
                          <span className="ml-2 text-emerald-300/95 text-sm" title="Aproximación para hispanohablantes">
                            (≈ «{approx}»)
                          </span>
                        )}
                        {example.transcription && (
                          <span className="text-gray-500 ml-2 font-mono text-xs">
                            AFI /{String(example.transcription).replace(/^\//, '').replace(/\/$/, '')}/
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => speak(example.word)}
                        className="p-2 rounded-lg bg-dark-600 hover:bg-dark-500 text-white transition-colors"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>
                  );
                  })}
                </div>

                {/* Tips */}
                {((currentSound.tipsEs?.length ?? 0) > 0 || (currentSound.tips?.length ?? 0) > 0) && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h3 className="flex items-center gap-2 text-sm text-gray-400 uppercase tracking-wide mb-3">
                      <Mic className="w-4 h-4" />
                      Consejos para pronunciar
                    </h3>
                    <ul className="space-y-2">
                      {(currentSound.tipsEs?.length ? currentSound.tipsEs : currentSound.tips).map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-purple-400">•</span>
                          {currentSound.tipsEs?.length ? tip : pronunciationTipDisplayEs(tip)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Quick Sound Selector */}
              <div className="flex flex-wrap justify-center gap-2">
                {pronunciation.sounds.map((sound, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSoundIndex(idx)}
                    className={`w-12 h-12 rounded-xl font-mono text-lg transition-all ${
                      idx === currentSoundIndex
                        ? 'bg-accent-primary text-white'
                        : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
                    }`}
                  >
                    {sound.symbol}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Common Problems Tab */}
          {activeTab === 'problems' && (
            <motion.div
              key="problems"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="card bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20 mb-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <p className="text-gray-300">
                    Estos son errores de pronunciación comunes entre hispanohablantes. 
                    Practica escuchando la diferencia entre la forma incorrecta y correcta.
                  </p>
                </div>
              </div>

              {pronunciation.commonProblems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="card"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-lg font-medium text-white mb-3">{problem.word}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-400" />
                          <div>
                            <p className="text-xs text-red-400 uppercase">Incorrecto</p>
                            <p className="text-red-300 line-through">{problem.wrong}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <div>
                            <p className="text-xs text-green-400 uppercase">Correcto</p>
                            <p className="text-green-300">{problem.correct}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mt-3">💡 {pronunciationTipDisplayEs(problem.tip)}</p>
                    </div>
                    <button
                      onClick={() => speak(problem.word)}
                      className="p-3 rounded-xl bg-dark-600 hover:bg-dark-500 text-white transition-colors"
                    >
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Minimal Pairs Tab */}
          {activeTab === 'pairs' && pronunciation.minimalPairs && (
            <motion.div
              key="pairs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="card bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20 mb-4">
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <p className="text-gray-300">
                    Los pares mínimos son palabras que difieren en solo un sonido. 
                    Practicarlos te ayuda a distinguir y producir sonidos similares.
                  </p>
                </div>
              </div>

              {pronunciation.minimalPairs.map((pair, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="card"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => speak(pair.word1)}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-dark-700 hover:bg-dark-600 transition-colors"
                      >
                        <span className="text-xl font-medium text-white">{pair.word1}</span>
                        <Volume2 className="w-5 h-5 text-gray-400" />
                      </button>
                      <div className="text-center">
                        <RefreshCw className="w-6 h-6 text-gray-500 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">vs</p>
                      </div>
                      <button
                        onClick={() => speak(pair.word2)}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-dark-700 hover:bg-dark-600 transition-colors"
                      >
                        <span className="text-xl font-medium text-white">{pair.word2}</span>
                        <Volume2 className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Diferencia:</p>
                      <p className="text-accent-primary font-medium">{pair.soundDifference}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Intonation Tab */}
          {activeTab === 'intonation' && pronunciation.intonationPatterns && (
            <motion.div
              key="intonation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <p className="text-gray-300">
                    La entonación correcta es clave para sonar natural. 
                    Cada patrón transmite un significado diferente.
                  </p>
                </div>
              </div>

              {pronunciation.intonationPatterns.map((pattern, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="card"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">{pattern.pattern}</h3>
                      <p className="text-gray-400 mb-3">{pattern.meaning}</p>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-700/50">
                        <span className="text-accent-primary">"</span>
                        <p className="text-white italic">{pattern.example}</p>
                        <span className="text-accent-primary">"</span>
                      </div>
                    </div>
                    <button
                      onClick={() => speak(pattern.example, 0.7)}
                      className="p-3 rounded-xl bg-dark-600 hover:bg-dark-500 text-white transition-colors"
                    >
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Complete Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={onComplete}
          className="btn-primary flex items-center gap-2 px-8"
        >
          <span>Completar Guía</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
