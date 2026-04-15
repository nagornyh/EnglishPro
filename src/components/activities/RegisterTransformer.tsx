import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  RotateCcw,
  Trophy,
  Shuffle,
  CheckCircle,
  XCircle,
  Eye,
  MessageSquare,
  GraduationCap,
} from 'lucide-react';

/* ─── Data: register transformation exercises ─── */
interface RegisterExercise {
  id: string;
  level: 'B2' | 'C1' | 'C2';
  direction: 'informal-to-formal' | 'formal-to-informal' | 'spoken-to-academic';
  sourceText: string;
  sourceTextEs: string;
  acceptedOutputs: string[];        // lowercase, no trailing punct
  keyTransformations: string[];     // highlight what changes
  context: string;
  contextEs: string;
  explanationEs: string;
}

const REGISTER_EXERCISES: RegisterExercise[] = [
  {
    id: 'reg-1',
    level: 'B2',
    direction: 'informal-to-formal',
    sourceText: "Hey, I can't come to the meeting cos I'm sick. Can someone fill me in later?",
    sourceTextEs: 'Oye, no puedo ir a la reunión porque estoy enfermo. ¿Alguien me puede poner al día después?',
    acceptedOutputs: [
      "i am writing to inform you that i will be unable to attend the meeting due to illness. i would be grateful if someone could update me on the key points",
      "i regret to inform you that i will not be able to attend today's meeting due to illness. could someone kindly provide me with a summary afterwards",
      "i am afraid i will be unable to attend the meeting owing to illness. i would appreciate it if a colleague could brief me on the main points",
    ],
    keyTransformations: ['can\'t → will be unable to', 'cos → due to/owing to', 'fill me in → update/brief me', 'Hey → Dear [name] / I am writing to...'],
    context: 'Email to manager',
    contextEs: 'Email a tu jefe',
    explanationEs: 'En comunicación profesional formal: "can\'t" → "will be unable to", "cos" → "due to / owing to", "fill me in" → "update me / brief me on". El tono cambia de coloquial a cortés y profesional.',
  },
  {
    id: 'reg-2',
    level: 'C1',
    direction: 'spoken-to-academic',
    sourceText: "Basically, kids who use phones a lot don't do as well in school. It's like, the more time they spend on it, the worse their grades get.",
    sourceTextEs: 'Básicamente, los niños que usan mucho el teléfono no les va tan bien en clase. Es como que cuanto más tiempo pasan, peores son las notas.',
    acceptedOutputs: [
      'research indicates that excessive smartphone usage among young people correlates negatively with academic performance. a positive correlation has been observed between screen time and declining grades',
      'there appears to be a negative correlation between frequency of smartphone use and academic achievement in young people. increased screen time tends to be associated with lower academic performance',
      'studies suggest that high levels of mobile phone usage among children are associated with poorer academic outcomes. evidence points to a negative relationship between screen time and scholastic achievement',
    ],
    keyTransformations: ['kids → young people/children', 'don\'t do as well → correlates negatively', 'a lot → excessive/high levels', 'It\'s like → research indicates/evidence suggests', 'worse grades → declining academic performance'],
    context: 'Academic essay paragraph',
    contextEs: 'Párrafo de ensayo académico',
    explanationEs: 'El registro académico requiere: vocabulario formal ("young people" no "kids"), construcciones impersonales ("research indicates" no "It\'s like"), nominalización ("academic performance" no "doing well"), y hedging ("tends to", "appears to").',
  },
  {
    id: 'reg-3',
    level: 'C1',
    direction: 'informal-to-formal',
    sourceText: "I think we should totally scrap the old system. It's rubbish and everyone hates it.",
    sourceTextEs: 'Creo que deberíamos eliminar completamente el sistema antiguo. Es una basura y todo el mundo lo odia.',
    acceptedOutputs: [
      'i would recommend that serious consideration be given to replacing the current system. user feedback has been overwhelmingly negative and the system appears to no longer meet operational requirements',
      'it is my recommendation that we consider phasing out the existing system. feedback from stakeholders strongly suggests that it no longer serves its intended purpose',
      'i would suggest that the current system be discontinued. the overwhelming consensus among users appears to be that it does not adequately meet their needs',
    ],
    keyTransformations: ['I think → I would recommend/suggest', 'totally scrap → consider phasing out/discontinuing', 'It\'s rubbish → no longer meets requirements', 'everyone hates it → feedback has been overwhelmingly negative'],
    context: 'Proposal to senior management',
    contextEs: 'Propuesta a la dirección',
    explanationEs: '"Scrap" → "phase out / discontinue"; "rubbish" → "no longer meets requirements"; "everyone hates" → "feedback has been overwhelmingly negative". El registro formal transforma opiniones emotivas en evaluaciones objetivas respaldadas por datos.',
  },
  {
    id: 'reg-4',
    level: 'C2',
    direction: 'spoken-to-academic',
    sourceText: "So basically Shakespeare was saying that power messes people up. Like, Macbeth was a good guy but then he got greedy and it all went wrong.",
    sourceTextEs: 'Básicamente Shakespeare decía que el poder arruina a la gente. O sea, Macbeth era buen tipo pero se volvió codicioso y todo salió mal.',
    acceptedOutputs: [
      'shakespeare explores the corrupting influence of unchecked ambition on the human psyche. macbeth functions as a study in moral deterioration whereby an initially virtuous protagonist is progressively consumed by avarice and the pursuit of power',
      'through the trajectory of macbeth shakespeare examines the extent to which the acquisition of power can precipitate moral decline. the protagonist whose initial characterisation suggests virtue undergoes a profound transformation driven by insatiable ambition',
    ],
    keyTransformations: ['messes people up → corrupting influence / precipitate moral decline', 'good guy → initially virtuous protagonist', 'got greedy → consumed by avarice', 'went wrong → moral deterioration / trajectory of decline'],
    context: 'Literary criticism essay',
    contextEs: 'Ensayo de crítica literaria',
    explanationEs: 'La crítica literaria C2 exige: nominalización ("moral deterioration" no "went wrong"), vocabulario especializado ("avarice, psyche, trajectory"), construcciones complejas ("whereby", "the extent to which"), y tono analítico impersonal.',
  },
  {
    id: 'reg-5',
    level: 'B2',
    direction: 'informal-to-formal',
    sourceText: "Sorry but I need to complain about the stuff I bought. It broke after like two days and I want my money back.",
    sourceTextEs: 'Perdona pero necesito quejarme sobre lo que compré. Se rompió como a los dos días y quiero que me devuelvan el dinero.',
    acceptedOutputs: [
      'i am writing to express my dissatisfaction with a recent purchase. the product became defective within two days of purchase and i would like to request a full refund',
      'i wish to lodge a formal complaint regarding a product purchased on [date]. the item malfunctioned within 48 hours and i am requesting a refund in accordance with your returns policy',
    ],
    keyTransformations: ['Sorry but → I am writing to', 'complain about → express my dissatisfaction / lodge a formal complaint', 'stuff I bought → a recent purchase / the product', 'broke → became defective / malfunctioned', 'money back → full refund'],
    context: 'Formal complaint letter',
    contextEs: 'Carta de reclamación formal',
    explanationEs: '"Stuff" → "product/purchase"; "broke" → "became defective/malfunctioned"; "money back" → "full refund". En una reclamación formal se usa vocabulario preciso, se evitan coloquialismos, y se cita la política de devoluciones si es posible.',
  },
];

/* ─── Component ─── */
interface RegisterTransformerProps {
  level?: 'B2' | 'C1' | 'C2';
  onComplete?: (score: number, total: number) => void;
  onXPGain?: (xp: number) => void;
  onBack?: () => void;
}

export default function RegisterTransformer({
  level,
  onComplete,
  onXPGain,
  onBack,
}: RegisterTransformerProps) {
  const exercises = level
    ? REGISTER_EXERCISES.filter((e) => e.level === level)
    : REGISTER_EXERCISES;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showTransformations, setShowTransformations] = useState(false);

  const currentEx = exercises[currentIndex];

  const directionLabel: Record<string, string> = {
    'informal-to-formal': '🔄 Informal → Formal',
    'formal-to-informal': '🔄 Formal → Informal',
    'spoken-to-academic': '🔄 Oral → Académico',
  };

  const evaluateAnswer = useCallback(() => {
    if (!currentEx) return;
    const normalized = userAnswer.trim().toLowerCase().replace(/[.!?]+$/g, '');

    // Exact match
    const exactMatch = currentEx.acceptedOutputs.some(
      (v) => v.toLowerCase() === normalized
    );

    // Partial: check key vocabulary presence
    const keyWords = currentEx.keyTransformations.flatMap((t) => {
      const after = t.split('→')[1];
      return after
        ? after
            .trim()
            .toLowerCase()
            .split(/[/,]/)
            .map((w) => w.trim())
            .filter((w) => w.length > 3)
        : [];
    });
    const matchedKeys = keyWords.filter((w) => normalized.includes(w));
    const partialMatch = matchedKeys.length >= 2;

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
      setShowTransformations(false);
    }
  }, [currentIndex, exercises.length, score, onXPGain]);

  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setUserAnswer('');
    setShowFeedback(false);
    setIsAccepted(false);
    setFinished(false);
    setShowTransformations(false);
  }, []);

  if (exercises.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No hay ejercicios de registro para este nivel.</p>
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
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-indigo-500/20">
            <Trophy className="w-10 h-10 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Register Transformer — Resultados</h2>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 mb-2">
            <Shuffle className="w-5 h-5" />
            <span className="text-sm font-medium">Register Transformer</span>
            <span className="text-xs bg-indigo-500/30 px-2 py-0.5 rounded-full">{currentEx.level}</span>
          </div>
          <p className="text-gray-400 text-sm">
            Transforma el registro del texto — {currentIndex + 1} / {exercises.length}
          </p>
        </div>

        {/* Progress */}
        <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${((currentIndex + (showFeedback ? 1 : 0)) / exercises.length) * 100}%` }}
            className="h-full bg-indigo-500 rounded-full"
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
            {/* Direction + context */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3 h-3" />
                <span>{currentEx.contextEs}</span>
              </div>
              <span className="bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-full">
                {directionLabel[currentEx.direction]}
              </span>
            </div>

            {/* Source text */}
            <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20">
              <p className="text-xs text-orange-400 mb-1">Texto original:</p>
              <p className="text-orange-300 text-base leading-relaxed">"{currentEx.sourceText}"</p>
              <p className="text-gray-500 text-sm mt-2">{currentEx.sourceTextEs}</p>
            </div>

            {/* Hint toggle */}
            <button
              onClick={() => setShowTransformations((v) => !v)}
              className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <Eye className="w-4 h-4" />
              {showTransformations ? 'Ocultar transformaciones clave' : 'Ver transformaciones clave'}
            </button>

            <AnimatePresence>
              {showTransformations && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1"
                >
                  {currentEx.keyTransformations.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm bg-dark-800/60 rounded-lg px-3 py-1.5">
                      <GraduationCap className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                      <span className="text-gray-300">{t}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* User input */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Tu versión transformada:</label>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={showFeedback}
                rows={4}
                className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                placeholder="Rewrite in the target register..."
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
                    {isAccepted ? '¡Excelente cambio de registro!' : 'Tu respuesta necesita más ajustes de registro.'}
                  </div>

                  <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                    <p className="text-xs text-green-400 mb-2">Versiones modelo:</p>
                    <ul className="space-y-2">
                      {currentEx.acceptedOutputs.map((v, i) => (
                        <li key={i} className="text-green-300 text-sm leading-relaxed">• {v}</li>
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
