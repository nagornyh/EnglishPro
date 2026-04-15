import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  XCircle,
  Lightbulb,
  BookOpen,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import analyticsService from '../services/analyticsService';
import { l1InterferenceRules } from '../data/l1-interference';

export interface FeedbackData {
  isCorrect: boolean;
  userAnswer: string;
  correctAnswer: string;
  questionType: string;
  category?: string;
  explanation?: string;
  relatedTip?: string;
  timeSpent?: number;
  attempts?: number;
}

interface EnhancedFeedbackProps {
  feedback: FeedbackData;
  onContinue: () => void;
  onRetry?: () => void;
  showRetry?: boolean;
}

export default function EnhancedFeedback({ 
  feedback, 
  onContinue, 
  onRetry,
  showRetry = true 
}: EnhancedFeedbackProps) {
  const { user } = useUser();
  const [showExplanation, setShowExplanation] = useState(false);
  const [rated, setRated] = useState<'helpful' | 'not-helpful' | null>(null);
  const [xpAwarded, setXpAwarded] = useState(0);

  useEffect(() => {
    // Calculate XP based on performance
    if (feedback.isCorrect) {
      let xp = 10;
      if (feedback.attempts === 1) xp += 5; // First try bonus
      if (feedback.timeSpent && feedback.timeSpent < 10) xp += 3; // Speed bonus
      setXpAwarded(xp);
    }

    // Track to analytics
    if (user) {
      analyticsService.trackActivity(
        user.id,
        feedback.questionType,
        feedback.category || 'general',
        feedback.isCorrect ? 1 : 0,
        1,
        feedback.timeSpent || 0,
        {
          mistakes: feedback.isCorrect ? [] : [{
            type: feedback.questionType,
            expected: feedback.correctAnswer,
            actual: feedback.userAnswer,
          }],
        }
      );
    }
  }, [feedback, user]);

  // Generate tip based on question type and mistake
  const generateTip = (): string => {
    if (feedback.relatedTip) return feedback.relatedTip;

    const tips: Record<string, string[]> = {
      vocabulary: [
        '💡 Usa la palabra en una oración para recordarla mejor.',
        '💡 Asocia la palabra con una imagen mental.',
        '💡 Repite la palabra en voz alta varias veces.',
        '💡 Busca cognados en español para recordar el significado.',
      ],
      grammar: [
        '💡 Identifica el patrón gramatical en otras oraciones.',
        '💡 Practica con frases similares para reforzar la regla.',
        '💡 Escribe 3 oraciones usando la misma estructura.',
        '💡 Memoriza frases modelo en lugar de reglas abstractas.',
      ],
      translation: [
        '💡 No traduzcas palabra por palabra, busca el significado general.',
        '💡 Presta atención a las expresiones idiomáticas.',
        '💡 Piensa en cómo se diría naturalmente en inglés.',
        '💡 Aprende frases completas, no palabras aisladas.',
      ],
      listening: [
        '💡 Escucha varias veces prestando atención a diferentes detalles.',
        '💡 Enfócate en las palabras clave, no en cada palabra.',
        '💡 Practica con diferentes acentos y velocidades.',
      ],
      speaking: [
        '💡 Grábate y compara tu pronunciación con el audio original.',
        '💡 Practica los sonidos difíciles de forma aislada.',
        '💡 Lee en voz alta durante 10 minutos al día.',
      ],
    };

    const categoryTips = tips[feedback.questionType] || tips.vocabulary;
    return categoryTips[Math.floor(Math.random() * categoryTips.length)];
  };

  const handleRate = (rating: 'helpful' | 'not-helpful') => {
    setRated(rating);
    // Could track this for improving feedback quality
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`modal-overlay p-4`}
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className={`w-full max-w-md rounded-2xl overflow-hidden shadow-2xl ${
          feedback.isCorrect 
            ? 'bg-gradient-to-br from-green-900/80 to-dark-800' 
            : 'bg-gradient-to-br from-red-900/80 to-dark-800'
        }`}
      >
        {/* Header */}
        <div className={`p-6 text-center ${
          feedback.isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'
        }`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
            className="mb-4"
          >
            {feedback.isCorrect ? (
              <div className="relative inline-block">
                <CheckCircle className="w-20 h-20 text-green-400" />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                >
                  +{xpAwarded} XP
                </motion.div>
              </div>
            ) : (
              <XCircle className="w-20 h-20 text-red-400 mx-auto" />
            )}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-2xl font-bold ${
              feedback.isCorrect ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {feedback.isCorrect 
              ? ['¡Excelente!', '¡Correcto!', '¡Muy bien!', '¡Genial!'][Math.floor(Math.random() * 4)]
              : ['Casi...', 'No exactamente', 'Inténtalo de nuevo'][Math.floor(Math.random() * 3)]
            }
          </motion.h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Answer comparison */}
          <div className="space-y-3">
            {!feedback.isCorrect && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-xs text-red-400 mb-1">Tu respuesta:</p>
                <p className="text-white font-medium">{feedback.userAnswer}</p>
              </div>
            )}
            
            <div className={`${
              feedback.isCorrect ? 'bg-green-500/10 border-green-500/20' : 'bg-green-500/10 border-green-500/20'
            } border rounded-lg p-3`}>
              <p className="text-xs text-green-400 mb-1">
                {feedback.isCorrect ? 'Tu respuesta:' : 'Respuesta correcta:'}
              </p>
              <p className="text-white font-medium">{feedback.correctAnswer}</p>
            </div>
          </div>

          {/* Explanation toggle */}
          {(feedback.explanation || !feedback.isCorrect) && (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="w-full flex items-center justify-between py-2 px-3 bg-dark-700/50 rounded-lg hover:bg-dark-700 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm text-gray-300">
                <BookOpen className="w-4 h-4" />
                Ver explicación
              </span>
              <motion.span
                animate={{ rotate: showExplanation ? 180 : 0 }}
              >
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
              </motion.span>
            </button>
          )}

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-dark-700/30 rounded-lg p-3 space-y-2">
                  {feedback.explanation ? (
                    <p className="text-sm text-gray-300">{feedback.explanation}</p>
                  ) : (
                    <p className="text-sm text-gray-300">
                      Revisa la diferencia entre tu respuesta y la correcta. 
                      Presta atención a los detalles como la ortografía, gramática o significado.
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tip */}
          <div className="flex items-start gap-3 bg-accent-primary/10 border border-accent-primary/20 rounded-lg p-3">
            <Lightbulb className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">{generateTip()}</p>
          </div>

          {/* L1 Interference hint for Spanish speakers */}
          {!feedback.isCorrect && (() => {
            const areaMap: Record<string, string> = {
              grammar: 'syntax',
              vocabulary: 'lexis',
              listening: 'phonology',
              speaking: 'phonology',
              translation: 'lexis',
            };
            const targetArea = areaMap[feedback.questionType] ?? 'syntax';
            const levelNum = user?.progress?.currentLevel ?? 1;
            const ecLevel: 1 | 2 | 3 | 4 = levelNum <= 3 ? 1 : levelNum <= 5 ? 2 : levelNum <= 9 ? 3 : 4;
            const rules = l1InterferenceRules.filter(r => r.area === targetArea && r.level <= ecLevel);
            if (rules.length === 0) return null;
            const rule = rules[Math.floor(Math.random() * rules.length)];
            return (
              <div className="flex items-start gap-3 bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                <span className="text-lg shrink-0">🇪🇸</span>
                <div>
                  <p className="text-xs text-orange-400 font-medium mb-1">
                    Error típico de hablantes de español:
                  </p>
                  <p className="text-sm text-gray-300">{rule.explanationEs}</p>
                  {rule.examples.length > 0 && (
                    <p className="text-xs text-gray-500 mt-1 font-mono">
                      ❌ {rule.examples[0].wrongEnglish} → ✅ {rule.examples[0].correctEnglish}
                    </p>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Rating */}
          {!feedback.isCorrect && (
            <div className="flex items-center justify-center gap-4">
              <span className="text-xs text-gray-500">¿Te fue útil esta explicación?</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleRate('helpful')}
                  className={`p-2 rounded-lg transition-colors ${
                    rated === 'helpful' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'hover:bg-dark-700 text-gray-400'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleRate('not-helpful')}
                  className={`p-2 rounded-lg transition-colors ${
                    rated === 'not-helpful' 
                      ? 'bg-red-500/20 text-red-400' 
                      : 'hover:bg-dark-700 text-gray-400'
                  }`}
                >
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="p-4 bg-dark-800/50 flex gap-3">
          {showRetry && !feedback.isCorrect && onRetry && (
            <button
              onClick={onRetry}
              className="flex-1 py-3 px-4 bg-dark-700 hover:bg-dark-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reintentar
            </button>
          )}
          
          <button
            onClick={onContinue}
            className={`flex-1 py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors ${
              feedback.isCorrect
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-accent-primary hover:bg-accent-secondary text-white'
            }`}
          >
            Continuar
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Simplified inline feedback for quick responses
export function InlineFeedback({ 
  isCorrect, 
  message,
  onDismiss 
}: { 
  isCorrect: boolean; 
  message?: string;
  onDismiss?: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss?.();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
        isCorrect 
          ? 'bg-green-500/20 text-green-400' 
          : 'bg-red-500/20 text-red-400'
      }`}
    >
      {isCorrect ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <XCircle className="w-5 h-5" />
      )}
      <span className="text-sm font-medium">
        {message || (isCorrect ? '¡Correcto!' : 'Incorrecto')}
      </span>
    </motion.div>
  );
}

// Streak celebration for consecutive correct answers
export function StreakCelebration({ streak }: { streak: number }) {
  if (streak < 3) return null;

  const messages = [
    { min: 3, message: '¡Racha de 3! 🔥', color: 'from-orange-500 to-amber-500' },
    { min: 5, message: '¡5 seguidas! 🚀', color: 'from-purple-500 to-pink-500' },
    { min: 10, message: '¡IMPARABLE! 💥', color: 'from-yellow-400 to-orange-500' },
    { min: 15, message: '¡LEGENDARIO! 👑', color: 'from-cyan-400 to-blue-500' },
  ];

  const currentMessage = [...messages].reverse().find(m => streak >= m.min);
  if (!currentMessage) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-gradient-to-r ${currentMessage.color} text-white font-bold text-lg shadow-lg`}
    >
      {currentMessage.message}
    </motion.div>
  );
}
