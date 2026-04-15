import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  BookOpen
} from 'lucide-react';
import type { CommonMistakeItem } from '../../types';

interface CommonMistakesProps {
  mistakes: CommonMistakeItem[];
  taskTitle: string;
  onContinue: () => void;
  compact?: boolean;
}

const categoryIcons: Record<string, string> = {
  grammar: '📝',
  vocabulary: '📚',
  pronunciation: '🗣️',
  usage: '💬',
  'false-friend': '⚠️',
};

const categoryNames: Record<string, string> = {
  grammar: 'Gramática',
  vocabulary: 'Vocabulario',
  pronunciation: 'Pronunciación',
  usage: 'Uso',
  'false-friend': 'Falso Amigo',
};

const categoryColors: Record<string, string> = {
  grammar: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
  vocabulary: 'from-green-500/20 to-green-600/20 border-green-500/30',
  pronunciation: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
  usage: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30',
  'false-friend': 'from-red-500/20 to-red-600/20 border-red-500/30',
};

export default function CommonMistakes({ 
  mistakes, 
  taskTitle, 
  onContinue,
  compact = false 
}: CommonMistakesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [viewedMistakes, setViewedMistakes] = useState<Set<string>>(new Set());

  const handleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    setViewedMistakes(prev => new Set(prev).add(id));
  };

  // Group mistakes by category
  const groupedMistakes = mistakes.reduce((acc, mistake) => {
    const cat = mistake.category || 'usage';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(mistake);
    return acc;
  }, {} as Record<string, CommonMistakeItem[]>);

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="card bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20"
      >
        <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          Errores Comunes a Evitar
        </h3>
        <div className="space-y-3">
          {mistakes.slice(0, 3).map((mistake) => (
            <div key={mistake.id} className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-300 line-through">{mistake.wrong}</p>
                <p className="text-green-300 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> {mistake.correct}
                </p>
              </div>
            </div>
          ))}
        </div>
        {mistakes.length > 3 && (
          <p className="text-sm text-gray-400 mt-3">
            +{mistakes.length - 3} errores más para revisar
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[70vh] py-8"
    >
      <div className="w-full max-w-5xl space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-medium">Errores Comunes</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            ¡Evita Estos Errores!
          </h1>
          <p className="text-gray-400">
            {taskTitle} • {mistakes.length} errores típicos de hispanohablantes
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card bg-gradient-to-br from-dark-700/50 to-dark-800/50"
        >
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <p className="text-gray-300">
              Antes de empezar a practicar, revisa estos errores frecuentes. 
              Conocerlos te ayudará a evitarlos y hablar con más naturalidad.
            </p>
          </div>
        </motion.div>

        {/* Mistakes by Category */}
        {Object.entries(groupedMistakes).map(([category, categoryMistakes], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + catIndex * 0.1 }}
            className="space-y-3"
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <span>{categoryIcons[category] || '📌'}</span>
              {categoryNames[category] || category}
              <span className="text-sm text-gray-500 font-normal">
                ({categoryMistakes.length})
              </span>
            </h3>

            {categoryMistakes.map((mistake, idx) => {
              const isExpanded = expandedId === mistake.id;
              const isViewed = viewedMistakes.has(mistake.id);

              return (
                <motion.div
                  key={mistake.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className={`card border bg-gradient-to-br ${categoryColors[category] || 'from-dark-700 to-dark-800 border-dark-500'} overflow-hidden`}
                >
                  <button
                    onClick={() => handleExpand(mistake.id)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                      {/* Wrong */}
                      <div className="flex items-center gap-3">
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-red-400 uppercase tracking-wide">Incorrecto</p>
                          <p className="text-white font-medium line-through decoration-red-400">
                            {mistake.wrong}
                          </p>
                        </div>
                      </div>
                      {/* Correct */}
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-green-400 uppercase tracking-wide">Correcto</p>
                          <p className="text-white font-medium">
                            {mistake.correct}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex items-center gap-2">
                      {isViewed && (
                        <span className="text-xs text-gray-500">Visto</span>
                      )}
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/10">
                          <div className="flex items-start gap-3">
                            <BookOpen className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-gray-400 mb-2">
                                {mistake.explanationEs || mistake.explanation}
                              </p>
                              {mistake.explanationEs && mistake.explanation && (
                                <p className="text-xs text-gray-500 italic">
                                  {mistake.explanation}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        ))}

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500"
        >
          Has revisado {viewedMistakes.size} de {mistakes.length} errores
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={onContinue}
            className="btn-primary flex items-center gap-2 px-8"
          >
            <span>Continuar a la Práctica</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
