import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle, Check, X, ArrowRight, RotateCcw, Trophy, Lightbulb } from 'lucide-react';

type TransformType = 'negative' | 'question' | 'short-answer' | 'passive' | 'rewrite';

interface TransformExercise {
  type: TransformType;
  original: string;
  originalEs: string;
  acceptedAnswers: string[];
  hint: string;
  hintEs: string;
  explanation: string;
  explanationEs: string;
}

interface TransformationBasicProps {
  level?: 'A1' | 'A2' | 'B1' | 'B2';
  onComplete?: (score: number, total: number) => void;
  onXPGain?: (xp: number) => void;
  onBack?: () => void;
}

const typeLabels: Record<TransformType, { en: string; es: string; color: string }> = {
  negative: { en: 'Make it Negative', es: 'Hazlo negativo', color: 'bg-red-500/20 text-red-400' },
  question: { en: 'Make a Question', es: 'Haz una pregunta', color: 'bg-blue-500/20 text-blue-400' },
  'short-answer': { en: 'Short Answer', es: 'Respuesta corta', color: 'bg-purple-500/20 text-purple-400' },
  passive: { en: 'Make it Passive', es: 'Hazlo pasivo', color: 'bg-orange-500/20 text-orange-400' },
  rewrite: { en: 'Rewrite / Transform', es: 'Reescribe / Transforma', color: 'bg-teal-500/20 text-teal-400' },
};

const a1Exercises: TransformExercise[] = [
  // Present Simple - negatives
  {
    type: 'negative',
    original: 'She likes coffee.',
    originalEs: 'A ella le gusta el café.',
    acceptedAnswers: ["She doesn't like coffee.", "She does not like coffee.", "She doesn't like coffee", "She does not like coffee"],
    hint: "doesn't + base verb (no -s!)",
    hintEs: "doesn't + verbo base (¡sin -s!)",
    explanation: '3rd person negative: She + doesn\'t + LIKE (not "likes")',
    explanationEs: 'Negativo 3ª persona: She + doesn\'t + LIKE (no "likes")',
  },
  {
    type: 'negative',
    original: 'I have a dog.',
    originalEs: 'Tengo un perro.',
    acceptedAnswers: ["I don't have a dog.", "I do not have a dog.", "I don't have a dog", "I do not have a dog"],
    hint: "I + don't + base verb",
    hintEs: "I + don't + verbo base",
    explanation: "Negative: subject + don't/doesn't + base verb",
    explanationEs: "Negativo: sujeto + don't/doesn't + verbo base",
  },
  {
    type: 'negative',
    original: 'They are happy.',
    originalEs: 'Están contentos.',
    acceptedAnswers: ["They aren't happy.", "They are not happy.", "They aren't happy", "They are not happy", "They're not happy.", "They're not happy"],
    hint: "are + not = aren't",
    hintEs: "are + not = aren't",
    explanation: "TO BE negative: subject + be + not",
    explanationEs: "TO BE negativo: sujeto + be + not",
  },
  // Present Simple - questions
  {
    type: 'question',
    original: 'He plays tennis.',
    originalEs: 'Él juega tenis.',
    acceptedAnswers: ['Does he play tennis?', 'Does he play tennis'],
    hint: 'Does + subject + base verb?',
    hintEs: 'Does + sujeto + verbo base?',
    explanation: '3rd person question: Does + he + PLAY (not "plays")',
    explanationEs: 'Pregunta 3ª persona: Does + he + PLAY (no "plays")',
  },
  {
    type: 'question',
    original: 'You like music.',
    originalEs: 'Te gusta la música.',
    acceptedAnswers: ['Do you like music?', 'Do you like music'],
    hint: 'Do + subject + base verb?',
    hintEs: 'Do + sujeto + verbo base?',
    explanation: 'Question: Do/Does + subject + base verb',
    explanationEs: 'Pregunta: Do/Does + sujeto + verbo base',
  },
  {
    type: 'question',
    original: 'She is a nurse.',
    originalEs: 'Ella es enfermera.',
    acceptedAnswers: ['Is she a nurse?', 'Is she a nurse'],
    hint: 'TO BE questions: move BE before subject',
    hintEs: 'Preguntas con TO BE: pon BE antes del sujeto',
    explanation: 'TO BE question: invert subject and verb',
    explanationEs: 'Pregunta con TO BE: invierte sujeto y verbo',
  },
  // Short answers
  {
    type: 'short-answer',
    original: 'Do you like pizza? (Yes)',
    originalEs: '¿Te gusta la pizza? (Sí)',
    acceptedAnswers: ['Yes, I do.', 'Yes, I do'],
    hint: 'Yes, + subject + auxiliary',
    hintEs: 'Yes, + sujeto + auxiliar',
    explanation: 'Short answer: Yes + pronoun + auxiliary (do/does/am/is/are)',
    explanationEs: 'Respuesta corta: Yes + pronombre + auxiliar',
  },
  {
    type: 'short-answer',
    original: 'Is he from Spain? (No)',
    originalEs: '¿Es él de España? (No)',
    acceptedAnswers: ["No, he isn't.", "No, he isn't", "No, he is not.", "No, he is not", "No, he's not.", "No, he's not"],
    hint: "No, + subject + auxiliary + not",
    hintEs: "No, + sujeto + auxiliar + not",
    explanation: "Short answer with BE: No, he isn't / No, he's not",
    explanationEs: "Respuesta corta con BE: No, he isn't / No, he's not",
  },
  {
    type: 'question',
    original: 'There are two parks.',
    originalEs: 'Hay dos parques.',
    acceptedAnswers: ['Are there two parks?', 'Are there two parks'],
    hint: 'Invert: There are → Are there?',
    hintEs: 'Invierte: There are → Are there?',
    explanation: 'There is/are questions: invert be and there',
    explanationEs: 'Preguntas con there is/are: invierte be y there',
  },
  {
    type: 'negative',
    original: 'It is cold today.',
    originalEs: 'Hace frío hoy.',
    acceptedAnswers: ["It isn't cold today.", "It is not cold today.", "It isn't cold today", "It is not cold today", "It's not cold today.", "It's not cold today"],
    hint: "is + not = isn't",
    hintEs: "is + not = isn't",
    explanation: "TO BE negative: It + isn't/is not",
    explanationEs: "TO BE negativo: It + isn't/is not",
  },
];

const a2Exercises: TransformExercise[] = [
  {
    type: 'negative',
    original: 'She went to the cinema.',
    originalEs: 'Ella fue al cine.',
    acceptedAnswers: ["She didn't go to the cinema.", "She did not go to the cinema.", "She didn't go to the cinema", "She did not go to the cinema"],
    hint: "didn't + BASE verb (not went!)",
    hintEs: "didn't + verbo BASE (¡no went!)",
    explanation: 'Past Simple negative: subject + didn\'t + BASE form (go, not went)',
    explanationEs: 'Pasado Simple negativo: sujeto + didn\'t + forma BASE (go, no went)',
  },
  {
    type: 'question',
    original: 'They bought a new car.',
    originalEs: 'Compraron un coche nuevo.',
    acceptedAnswers: ['Did they buy a new car?', 'Did they buy a new car'],
    hint: 'Did + subject + BASE verb?',
    hintEs: 'Did + sujeto + verbo BASE?',
    explanation: 'Past Simple question: Did + subject + base form',
    explanationEs: 'Pasado Simple pregunta: Did + sujeto + forma base',
  },
  {
    type: 'question',
    original: 'He is reading a book.',
    originalEs: 'Él está leyendo un libro.',
    acceptedAnswers: ['Is he reading a book?', 'Is he reading a book'],
    hint: 'Move "is" before the subject',
    hintEs: 'Mueve "is" antes del sujeto',
    explanation: 'Present Continuous question: BE + subject + verb-ing',
    explanationEs: 'Presente Continuo pregunta: BE + sujeto + verbo-ing',
  },
  {
    type: 'negative',
    original: 'We can swim here.',
    originalEs: 'Podemos nadar aquí.',
    acceptedAnswers: ["We can't swim here.", "We cannot swim here.", "We can't swim here", "We cannot swim here"],
    hint: "can + not = can't",
    hintEs: "can + not = can't",
    explanation: "Modal negative: subject + can't/cannot + verb",
    explanationEs: "Modal negativo: sujeto + can't/cannot + verbo",
  },
  {
    type: 'short-answer',
    original: 'Did you see the film? (Yes)',
    originalEs: '¿Viste la película? (Sí)',
    acceptedAnswers: ['Yes, I did.', 'Yes, I did'],
    hint: 'Yes + pronoun + did',
    hintEs: 'Yes + pronombre + did',
    explanation: 'Past Simple short answer: Yes, I did / No, I didn\'t',
    explanationEs: 'Respuesta corta Pasado Simple: Yes, I did / No, I didn\'t',
  },
];

// ACT-2 fix: B1 exercises
const b1Exercises: TransformExercise[] = [
  {
    type: 'passive',
    original: 'Shakespeare wrote Hamlet.',
    originalEs: 'Shakespeare escribió Hamlet.',
    acceptedAnswers: ['Hamlet was written by Shakespeare.', 'Hamlet was written by Shakespeare'],
    hint: 'Object + was/were + past participle + by + agent',
    hintEs: 'Objeto + was/were + participio pasado + by + agente',
    explanation: 'Passive: object becomes subject, was/were + past participle',
    explanationEs: 'Pasiva: el objeto se convierte en sujeto, was/were + participio pasado',
  },
  {
    type: 'rewrite',
    original: 'She said: "I am tired."',
    originalEs: 'Ella dijo: "Estoy cansada."',
    acceptedAnswers: ['She said that she was tired.', 'She said that she was tired'],
    hint: 'say + that + backshift: am → was',
    hintEs: 'say + that + retroceso temporal: am → was',
    explanation: 'Reported speech: am/is → was (backshift)',
    explanationEs: 'Discurso indirecto: am/is → was (retroceso temporal)',
  },
  {
    type: 'rewrite',
    original: 'I worked in Madrid for two years. (I no longer work there)',
    originalEs: 'Trabajé en Madrid dos años. (Ya no trabajo allí)',
    acceptedAnswers: ['I used to work in Madrid.', 'I used to work in Madrid'],
    hint: 'used to + base verb for past habits/states no longer true',
    hintEs: 'used to + verbo base para hábitos/estados pasados ya no vigentes',
    explanation: 'used to: past habit or state that no longer exists',
    explanationEs: 'used to: hábito o estado del pasado que ya no existe',
  },
  {
    type: 'passive',
    original: 'They build new houses every year.',
    originalEs: 'Construyen casas nuevas cada año.',
    acceptedAnswers: ['New houses are built every year.', 'New houses are built every year'],
    hint: 'Present passive: object + is/are + past participle',
    hintEs: 'Pasiva presente: objeto + is/are + participio pasado',
    explanation: 'Present Simple passive: is/are + past participle',
    explanationEs: 'Pasiva Presente Simple: is/are + participio pasado',
  },
  {
    type: 'rewrite',
    original: 'Despite the rain, they went swimming. (Although...)',
    originalEs: 'A pesar de la lluvia, fueron a nadar. (Although...)',
    acceptedAnswers: ['Although it was raining, they went swimming.', 'Although it rained, they went swimming.', 'Although it was raining, they went swimming', 'Although it rained, they went swimming'],
    hint: 'Although / Even though + full clause + contrast',
    hintEs: 'Although / Even though + cláusula completa + contraste',
    explanation: 'Concession: although + clause vs. despite + noun/gerund',
    explanationEs: 'Concesión: although + cláusula vs. despite + sustantivo/gerundio',
  },
];

// ACT-2 fix: B2 exercises
const b2Exercises: TransformExercise[] = [
  {
    type: 'rewrite',
    original: 'If I had known, I would have helped. (Had...)',
    originalEs: 'Si hubiera sabido, habría ayudado. (Had...)',
    acceptedAnswers: ['Had I known, I would have helped.', 'Had I known, I would have helped'],
    hint: 'Formal inversion: Had + subject + past participle (remove "if")',
    hintEs: 'Inversión formal: Had + sujeto + participio (quita "if")',
    explanation: 'Formal conditional inversion: Had I known = If I had known',
    explanationEs: 'Inversión condicional formal: Had I known = If I had known',
  },
  {
    type: 'rewrite',
    original: 'I regret not learning to play the piano. (I wish...)',
    originalEs: 'Me arrepiento de no haber aprendido piano. (I wish...)',
    acceptedAnswers: ["I wish I had learned to play the piano.", "I wish I had learnt to play the piano.", "I wish I had learned to play the piano", "I wish I had learnt to play the piano"],
    hint: 'Wish + past perfect for past regrets',
    hintEs: 'Wish + past perfect para lamentos pasados',
    explanation: 'Wish + past perfect: regret about the past',
    explanationEs: 'Wish + past perfect: lamento sobre el pasado',
  },
  {
    type: 'rewrite',
    original: 'The manager will sign the contract. (The contract...)',
    originalEs: 'El director firmará el contrato. (The contract...)',
    acceptedAnswers: ['The contract will be signed by the manager.', 'The contract will be signed by the manager'],
    hint: 'Future passive: will be + past participle',
    hintEs: 'Pasiva de futuro: will be + participio pasado',
    explanation: 'Future passive: subject + will be + past participle',
    explanationEs: 'Pasiva de futuro: sujeto + will be + participio pasado',
  },
  {
    type: 'rewrite',
    original: 'She told me: "I will call you tomorrow."',
    originalEs: 'Ella me dijo: "Te llamaré mañana."',
    acceptedAnswers: ['She told me that she would call me the next day.', 'She told me she would call me the next day.', 'She told me that she would call me the following day.', 'She told me that she would call me the next day'],
    hint: 'will → would; I → she; tomorrow → the next day/the following day',
    hintEs: 'will → would; I → she; tomorrow → the next day/the following day',
    explanation: 'Reported speech: backshift will→would, I→she, tomorrow→next day',
    explanationEs: 'Discurso indirecto: retroceso will→would, I→she, tomorrow→next day',
  },
  {
    type: 'rewrite',
    original: 'It is Maria who solved the mystery. (Cleft — what-cleft version)',
    originalEs: 'Fue María quien resolvió el misterio. (What-cleft)',
    acceptedAnswers: ['What Maria did was solve the mystery.', 'What Maria did was solve the mystery'],
    hint: 'What-cleft: What + subject + did + was + base verb',
    hintEs: 'What-cleft: What + sujeto + did + was + verbo base',
    explanation: 'What-cleft for emphasis: What Maria did was...',
    explanationEs: 'What-cleft para énfasis: What Maria did was...',
  },
];

function normalizeAnswer(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:'"]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/i'm/g, 'i am')
    .replace(/he's/g, 'he is')
    .replace(/she's/g, 'she is')
    .replace(/it's/g, 'it is')
    .replace(/we're/g, 'we are')
    .replace(/they're/g, 'they are')
    .replace(/don't/g, 'do not')
    .replace(/doesn't/g, 'does not')
    .replace(/didn't/g, 'did not')
    .replace(/isn't/g, 'is not')
    .replace(/aren't/g, 'are not')
    .replace(/can't/g, 'cannot')
    .replace(/won't/g, 'will not')
    .replace(/wasn't/g, 'was not')
    .replace(/weren't/g, 'were not');
}

function checkAnswer(userInput: string, accepted: string[]): boolean {
  const normalized = normalizeAnswer(userInput);
  return accepted.some(a => normalizeAnswer(a) === normalized);
}

export default function TransformationBasic({
  level = 'A1',
  onComplete,
  onXPGain,
  onBack,
}: TransformationBasicProps) {
  const exercises = useMemo(() => {
    const pool = level === 'A1' ? a1Exercises
      : level === 'A2' ? [...a1Exercises, ...a2Exercises]
      : level === 'B1' ? [...a1Exercises, ...a2Exercises, ...b1Exercises]
      : [...a1Exercises, ...a2Exercises, ...b1Exercises, ...b2Exercises];
    return [...pool].sort(() => Math.random() - 0.5).slice(0, 8);
  }, [level]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = exercises[currentIndex];

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    const isCorrect = checkAnswer(userInput, current.acceptedAnswers);
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
      setScore(s => s + 1);
      onXPGain?.(15);
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setUserInput('');
    setShowHint(false);
    if (currentIndex + 1 >= exercises.length) {
      setFinished(true);
      onComplete?.(score, exercises.length);
    } else {
      setCurrentIndex(i => i + 1);
    }
  };

  if (finished) {
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh] py-8"
      >
        <div className="text-center space-y-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-500/30 flex items-center justify-center mx-auto">
            <Trophy className="w-10 h-10 text-yellow-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">¡Transformaciones Completas!</h2>
          <p className="text-gray-400">
            {score}/{exercises.length} correctas ({pct}%)
          </p>
          <div className="w-48 mx-auto bg-dark-700 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all ${
                pct >= 70 ? 'bg-green-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
          {pct < 70 && (
            <p className="text-sm text-orange-400 font-medium text-center">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3 justify-center pt-2">
            {pct < 70 && (
              <button
                onClick={() => {
                  setCurrentIndex(0);
                  setScore(0);
                  setFinished(false);
                  setFeedback(null);
                  setUserInput('');
                }}
                className="px-5 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Reintentar
              </button>
            )}
            {onBack && pct >= 70 && (
              <button onClick={onBack} className="btn-primary px-6 py-2 flex items-center gap-2">
                Continuar <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  const typeInfo = typeLabels[current.type];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-start min-h-[60vh] py-6"
    >
      <div className="w-full max-w-6xl space-y-5">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/20 text-accent-primary mb-3">
            <Shuffle className="w-5 h-5" />
            <span className="text-sm font-medium">Transforma la Frase</span>
            <span className="text-xs bg-accent-primary/30 px-2 py-0.5 rounded-full">{level}</span>
          </div>
          <div className="text-gray-400 text-sm">{currentIndex + 1} / {exercises.length}</div>
          <div className="w-full bg-dark-700 rounded-full h-2 mt-2">
            <div
              className="h-2 rounded-full bg-accent-primary transition-all"
              style={{ width: `${(currentIndex / exercises.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Type badge */}
        <div className="text-center">
          <span className={`text-xs px-3 py-1 rounded-full ${typeInfo.color}`}>
            {typeInfo.es}
          </span>
        </div>

        {/* Sentence to transform */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl p-6 border border-white/10"
          >
            <p className="text-white text-xl font-medium text-center">
              {current.original}
            </p>
            <p className="text-gray-500 text-sm text-center mt-2">
              {current.originalEs}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Hint */}
        {!feedback && (
          <button
            onClick={() => setShowHint(true)}
            className="text-sm text-gray-500 hover:text-yellow-400 flex items-center gap-1 mx-auto"
          >
            <Lightbulb className="w-4 h-4" />
            {showHint ? current.hintEs : 'Ver pista'}
          </button>
        )}

        {/* Input */}
        {!feedback ? (
          <div className="space-y-3">
            <input
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder={
                current.type === 'negative'
                  ? 'Escribe la forma negativa...'
                  : current.type === 'question'
                  ? 'Escribe la pregunta...'
                  : 'Escribe la respuesta corta...'
              }
              className="input-field text-lg"
              autoFocus
            />
            <button
              onClick={handleSubmit}
              disabled={!userInput.trim()}
              className="btn-primary w-full py-3 disabled:opacity-40"
            >
              Comprobar
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div
              className={`flex items-center gap-3 p-4 rounded-lg border ${
                feedback === 'correct'
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}
            >
              {feedback === 'correct' ? (
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
              ) : (
                <X className="w-6 h-6 text-red-400 flex-shrink-0" />
              )}
              <div>
                <p className={`font-medium ${feedback === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
                  {feedback === 'correct' ? '¡Correcto!' : 'No exactamente'}
                </p>
                {feedback === 'incorrect' && (
                  <div className="mt-1">
                    <p className="text-gray-400 text-sm">Tu respuesta: <span className="text-red-300">{userInput}</span></p>
                    <p className="text-gray-400 text-sm">Correcto: <span className="text-green-300">{current.acceptedAnswers[0]}</span></p>
                  </div>
                )}
                <p className="text-gray-500 text-xs mt-1">{current.explanationEs}</p>
              </div>
            </div>
            <button onClick={handleNext} className="btn-primary w-full py-3 flex items-center justify-center gap-2">
              {currentIndex + 1 < exercises.length ? 'Siguiente' : 'Ver Resultados'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
