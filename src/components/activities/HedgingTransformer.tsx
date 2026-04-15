import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  RotateCcw,
  Trophy,
  Shield,
  Feather,
  CheckCircle,
  XCircle,
  Eye,
} from 'lucide-react';

/* ─── Data: hedging exercises ─── */
interface HedgingExercise {
  id: string;
  level: 'C1' | 'C2';
  directStatement: string;
  directStatementEs: string;
  hedgedVersions: string[];          // acceptable answers (lowercase, no trailing punct)
  hedgingDevices: string[];           // devices to use: "might", "tend to", "It could be argued"
  context: string;
  contextEs: string;
  explanationEs: string;
}

const HEDGING_EXERCISES: HedgingExercise[] = [
  {
    id: 'hedge-1',
    level: 'C1',
    directStatement: 'Social media causes depression in teenagers.',
    directStatementEs: 'Las redes sociales causan depresión en los adolescentes.',
    hedgedVersions: [
      'social media may contribute to depression in teenagers',
      'social media might contribute to depression in teenagers',
      'it could be argued that social media contributes to depression in teenagers',
      'social media tends to be associated with depression in teenagers',
    ],
    hedgingDevices: ['may', 'might', 'it could be argued', 'tends to', 'contribute to'],
    context: 'Academic essay about digital wellbeing',
    contextEs: 'Ensayo académico sobre bienestar digital',
    explanationEs: 'En un ensayo académico, afirmaciones directas de causa-efecto ("causes") suenan dogmáticas. El hedging ("may contribute to", "tends to be associated with") muestra pensamiento crítico y reconoce que la relación es compleja.',
  },
  {
    id: 'hedge-2',
    level: 'C1',
    directStatement: 'Working from home is more productive than office work.',
    directStatementEs: 'Trabajar desde casa es más productivo que la oficina.',
    hedgedVersions: [
      'working from home can be more productive than office work in certain contexts',
      'working from home appears to be more productive than office work for some roles',
      'evidence suggests that working from home may be more productive than office work',
      'it seems that working from home tends to be more productive for certain types of work',
    ],
    hedgingDevices: ['can be', 'appears to', 'evidence suggests', 'in certain contexts', 'for some'],
    context: 'Business report on remote work policies',
    contextEs: 'Informe empresarial sobre políticas de trabajo remoto',
    explanationEs: 'Generalizar sin matices ("is more productive") ignora variables. El hedging ("can be", "appears to", "in certain contexts") permite que la afirmación sea precisa y no excluyente.',
  },
  {
    id: 'hedge-3',
    level: 'C1',
    directStatement: 'This theory is wrong.',
    directStatementEs: 'Esta teoría está equivocada.',
    hedgedVersions: [
      'this theory may not fully account for all the evidence',
      'this theory appears to have some limitations',
      'there seem to be certain weaknesses in this theory',
      'this theory does not appear to be entirely supported by the evidence',
    ],
    hedgingDevices: ['may not', 'appears to', 'there seem to be', 'not entirely', 'limitations'],
    context: 'Peer review of a research paper',
    contextEs: 'Revisión por pares de un artículo científico',
    explanationEs: '"Is wrong" es una evaluación binaria inaceptable en contexto académico. "May not fully account for" o "appears to have limitations" son formas diplomáticas que permiten diálogo constructivo.',
  },
  {
    id: 'hedge-4',
    level: 'C2',
    directStatement: 'Immigration always benefits the economy.',
    directStatementEs: 'La inmigración siempre beneficia a la economía.',
    hedgedVersions: [
      'on balance immigration tends to benefit the economy',
      'the available evidence would suggest that immigration generally benefits the economy',
      'it would appear that immigration is broadly beneficial to the economy',
      'there is considerable evidence to suggest that immigration tends to benefit the economy',
    ],
    hedgingDevices: ['on balance', 'tends to', 'would suggest', 'generally', 'considerable evidence'],
    context: 'Policy briefing document',
    contextEs: 'Documento informativo de política pública',
    explanationEs: '"Always" es una cuantificación absoluta. En un policy brief, "on balance", "the available evidence would suggest" y "generally" permiten matizar sin debilitar el argumento central.',
  },
  {
    id: 'hedge-5',
    level: 'C2',
    directStatement: 'The author fails to consider cultural factors.',
    directStatementEs: 'El autor no considera los factores culturales.',
    hedgedVersions: [
      'the author could perhaps have devoted more attention to cultural factors',
      'one might argue that cultural factors deserve greater consideration in this analysis',
      'it could be suggested that cultural factors have been somewhat overlooked',
      'the analysis might have been strengthened by a more thorough consideration of cultural factors',
    ],
    hedgingDevices: ['could perhaps', 'one might argue', 'it could be suggested', 'somewhat', 'might have been strengthened'],
    context: 'Book review for an academic journal',
    contextEs: 'Reseña de libro para revista académica',
    explanationEs: '"Fails to" es una crítica directa. En una reseña académica se prefiere "could perhaps have devoted more attention to" o "might have been strengthened by" — critica constructivamente sin atacar al autor.',
  },
  {
    id: 'hedge-6',
    level: 'C2',
    directStatement: 'Climate change will make coastal cities uninhabitable.',
    directStatementEs: 'El cambio climático hará inhabitables las ciudades costeras.',
    hedgedVersions: [
      'current projections suggest that climate change could render some coastal cities increasingly vulnerable',
      'if present trends continue coastal cities may face significant habitability challenges',
      'there is growing evidence that climate change could pose existential risks to certain coastal cities',
    ],
    hedgingDevices: ['current projections suggest', 'could render', 'increasingly vulnerable', 'if present trends continue', 'may face'],
    context: 'Environmental policy paper',
    contextEs: 'Documento de política medioambiental',
    explanationEs: '"Will make uninhabitable" es categórico e ignora incertidumbre. "Current projections suggest... could render... increasingly vulnerable" mantiene la urgencia pero reconoce que hay variables y matices.',
  },
];

/* ─── Component ─── */
interface HedgingTransformerProps {
  level?: 'C1' | 'C2';
  onComplete?: (score: number, total: number) => void;
  onXPGain?: (xp: number) => void;
  onBack?: () => void;
}

export default function HedgingTransformer({
  level,
  onComplete,
  onXPGain,
  onBack,
}: HedgingTransformerProps) {
  const exercises = level
    ? HEDGING_EXERCISES.filter((e) => e.level === level)
    : HEDGING_EXERCISES;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentEx = exercises[currentIndex];

  const evaluateAnswer = useCallback(() => {
    if (!currentEx) return;
    const normalized = userAnswer.trim().toLowerCase().replace(/[.!?]+$/g, '');

    // Check exact match with any accepted version
    const exactMatch = currentEx.hedgedVersions.some(
      (v) => v.toLowerCase() === normalized
    );

    // Check partial: user used at least 2 hedging devices
    const devicesUsed = currentEx.hedgingDevices.filter((d) =>
      normalized.includes(d.toLowerCase())
    );
    const partialMatch = devicesUsed.length >= 2;

    const accepted = exactMatch || partialMatch;
    setIsAccepted(accepted);
    if (accepted) setScore((s) => s + 1);
    setShowFeedback(true);
  }, [currentEx, userAnswer]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= exercises.length) {
      setFinished(true);
      onXPGain?.(score * 10);
    } else {
      setCurrentIndex((i) => i + 1);
      setUserAnswer('');
      setShowFeedback(false);
      setIsAccepted(false);
      setShowHint(false);
    }
  }, [currentIndex, exercises.length, score, onXPGain]);

  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setUserAnswer('');
    setShowFeedback(false);
    setIsAccepted(false);
    setFinished(false);
    setShowHint(false);
  }, []);

  if (exercises.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No hay ejercicios de hedging para este nivel.</p>
        {onBack && <button onClick={onBack} className="btn-primary mt-4">Volver</button>}
      </div>
    );
  }

  // Results
  if (finished) {
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh] py-8"
      >
        <div className="w-full max-w-md text-center space-y-6">
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-purple-500/20">
            <Trophy className="w-10 h-10 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Hedging Transformer — Resultados</h2>
          <p className="text-gray-400">{score} / {exercises.length} transformaciones aceptadas ({pct}%)</p>
          <p className="text-accent-primary text-sm">+{score * 10} XP</p>
          {pct < 70 && (
            <p className="text-sm text-orange-400 font-medium">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3 justify-center pt-2">
            <button onClick={handleRetry} className="btn-secondary">
              <RotateCcw className="w-4 h-4" />
              Reintentar
            </button>
            {pct >= 70 && (
              <button onClick={() => onComplete?.(score, exercises.length)} className="btn-primary px-6 py-2.5 flex items-center gap-2">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 mb-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Hedging Transformer</span>
            <span className="text-xs bg-purple-500/30 px-2 py-0.5 rounded-full">{currentEx.level}</span>
          </div>
          <p className="text-gray-400 text-sm">
            Transforma afirmaciones directas en lenguaje matizado — {currentIndex + 1} / {exercises.length}
          </p>
        </div>

        {/* Progress */}
        <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${((currentIndex + (showFeedback ? 1 : 0)) / exercises.length) * 100}%` }}
            className="h-full bg-purple-500 rounded-full"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="card bg-gradient-to-br from-dark-700/50 to-dark-800/50 space-y-4"
          >
            {/* Context */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Feather className="w-3 h-3" />
              <span>{currentEx.contextEs}</span>
            </div>

            {/* Direct statement */}
            <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20 text-center">
              <p className="text-xs text-orange-400 mb-1">Afirmación directa:</p>
              <p className="text-orange-300 text-lg font-medium">{currentEx.directStatement}</p>
              <p className="text-gray-500 text-sm mt-1">{currentEx.directStatementEs}</p>
            </div>

            {/* Hint toggle */}
            <button
              onClick={() => setShowHint((v) => !v)}
              className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Eye className="w-4 h-4" />
              {showHint ? 'Ocultar pistas' : 'Mostrar dispositivos de hedging'}
            </button>

            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-wrap gap-2"
                >
                  {currentEx.hedgingDevices.map((d, i) => (
                    <span key={i} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-lg text-sm border border-purple-500/20">
                      {d}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* User input */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Reescribe con hedging apropiado:
              </label>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={showFeedback}
                rows={3}
                className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Rewrite using hedging language..."
              />
            </div>

            {/* Check */}
            {!showFeedback && (
              <button
                onClick={evaluateAnswer}
                disabled={!userAnswer.trim()}
                className="btn-primary w-full py-3 disabled:opacity-50"
              >
                Evaluar
              </button>
            )}

            {/* Feedback */}
            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3"
                >
                  <div className={`flex items-center gap-2 text-sm ${isAccepted ? 'text-green-400' : 'text-orange-400'}`}>
                    {isAccepted ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {isAccepted ? '¡Buen uso de hedging!' : 'Tu respuesta podría ser más matizada.'}
                  </div>

                  <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                    <p className="text-xs text-green-400 mb-2">Versiones modelo:</p>
                    <ul className="space-y-1">
                      {currentEx.hedgedVersions.map((v, i) => (
                        <li key={i} className="text-green-300 text-sm">• {v}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                    <p className="text-blue-200 text-sm">{currentEx.explanationEs}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Next */}
        {showFeedback && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
            <button onClick={handleNext} className="btn-primary px-8 py-3 flex items-center gap-2">
              {currentIndex + 1 >= exercises.length ? 'Ver resultados' : 'Siguiente'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
