import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Check, X, ArrowRight, RotateCcw, Trophy, Lightbulb } from 'lucide-react';

interface SentencePrompt {
  words: string[];          // e.g. ["she", "like", "chocolate"]
  wordsEs: string[];        // e.g. ["ella", "gustar", "chocolate"]
  acceptedAnswers: string[]; // e.g. ["She likes chocolate.", "She likes chocolate"]
  hint?: string;
  hintEs?: string;
  grammar: string;          // e.g. "Present Simple – 3rd person singular: add -s"
  grammarEs: string;
}

interface SimpleSentenceWriterProps {
  level?: 'A1' | 'A2' | 'B1' | 'B2';
  onComplete?: (score: number, total: number) => void;
  onXPGain?: (xp: number) => void;
  onBack?: () => void;
}

// Built-in A1 exercises
const a1Prompts: SentencePrompt[] = [
  {
    words: ['she', 'like', 'chocolate'],
    wordsEs: ['ella', 'gustar', 'chocolate'],
    acceptedAnswers: ['She likes chocolate.', 'She likes chocolate'],
    hint: 'Third person singular → add -s',
    hintEs: 'Tercera persona singular → añade -s',
    grammar: 'Present Simple – 3rd person singular',
    grammarEs: 'Presente Simple – 3ª persona del singular',
  },
  {
    words: ['they', 'be', 'happy'],
    wordsEs: ['ellos', 'estar', 'feliz'],
    acceptedAnswers: ['They are happy.', 'They are happy'],
    hint: 'they + are',
    hintEs: 'they + are',
    grammar: 'TO BE – plural',
    grammarEs: 'TO BE – plural',
  },
  {
    words: ['I', 'not / have', 'a car'],
    wordsEs: ['yo', 'no / tener', 'un coche'],
    acceptedAnswers: ["I don't have a car.", "I don't have a car", "I do not have a car.", "I do not have a car"],
    hint: "Negative: I + don't + verb",
    hintEs: "Negativo: I + don't + verbo",
    grammar: 'Present Simple – negative',
    grammarEs: 'Presente Simple – negativo',
  },
  {
    words: ['there', 'be', 'two cats'],
    wordsEs: ['haber', 'dos gatos'],
    acceptedAnswers: ['There are two cats.', 'There are two cats'],
    hint: 'Plural → there are',
    hintEs: 'Plural → there are',
    grammar: 'There is / There are',
    grammarEs: 'There is / There are',
  },
  {
    words: ['he', 'not / be', 'a teacher'],
    wordsEs: ['él', 'no / ser', 'profesor'],
    acceptedAnswers: ["He isn't a teacher.", "He isn't a teacher", "He is not a teacher.", "He is not a teacher", "He's not a teacher.", "He's not a teacher"],
    hint: "He + isn't / is not",
    hintEs: "He + isn't / is not",
    grammar: 'TO BE – negative',
    grammarEs: 'TO BE – negativo',
  },
  {
    words: ['we', 'play', 'football / every Saturday'],
    wordsEs: ['nosotros', 'jugar', 'fútbol / cada sábado'],
    acceptedAnswers: ['We play football every Saturday.', 'We play football every Saturday'],
    hint: 'First person plural → no -s',
    hintEs: 'Primera persona plural → sin -s',
    grammar: 'Present Simple + time expression',
    grammarEs: 'Presente Simple + expresión temporal',
  },
  {
    words: ['my sister', 'have', 'blue eyes'],
    wordsEs: ['mi hermana', 'tener', 'ojos azules'],
    acceptedAnswers: ['My sister has blue eyes.', 'My sister has blue eyes'],
    hint: '3rd person: have → has',
    hintEs: '3ª persona: have → has',
    grammar: 'Present Simple – irregular 3rd person',
    grammarEs: 'Presente Simple – 3ª persona irregular',
  },
  {
    words: ['the children', 'be', 'in the park'],
    wordsEs: ['los niños', 'estar', 'en el parque'],
    acceptedAnswers: ['The children are in the park.', 'The children are in the park'],
    hint: 'children = plural → are',
    hintEs: 'children = plural → are',
    grammar: 'TO BE – location',
    grammarEs: 'TO BE – ubicación',
  },
];

const a2Prompts: SentencePrompt[] = [
  {
    words: ['she', 'go / yesterday', 'to the supermarket'],
    wordsEs: ['ella', 'ir / ayer', 'al supermercado'],
    acceptedAnswers: ['She went to the supermarket yesterday.', 'She went to the supermarket yesterday', 'Yesterday she went to the supermarket.', 'Yesterday she went to the supermarket'],
    hint: 'go → went (irregular past)',
    hintEs: 'go → went (pasado irregular)',
    grammar: 'Past Simple – irregular',
    grammarEs: 'Pasado Simple – irregular',
  },
  {
    words: ['I', 'be going to', 'study / tonight'],
    wordsEs: ['yo', 'ir a', 'estudiar / esta noche'],
    acceptedAnswers: ["I'm going to study tonight.", "I'm going to study tonight", "I am going to study tonight.", "I am going to study tonight"],
    hint: "I + am going to + verb",
    hintEs: "I + am going to + verbo",
    grammar: 'Going to – future plans',
    grammarEs: 'Going to – planes futuros',
  },
  {
    words: ['he', 'be -ing', 'read / now'],
    wordsEs: ['él', 'estar + gerundio', 'leer / ahora'],
    acceptedAnswers: ['He is reading now.', 'He is reading now', "He's reading now.", "He's reading now"],
    hint: 'He + is + verb-ing',
    hintEs: 'He + is + verbo-ing',
    grammar: 'Present Continuous',
    grammarEs: 'Presente Continuo',
  },
  {
    words: ['this restaurant', 'be', 'better / than that one'],
    wordsEs: ['este restaurante', 'ser', 'mejor / que aquel'],
    acceptedAnswers: ['This restaurant is better than that one.', 'This restaurant is better than that one'],
    hint: 'good → better (irregular comparative)',
    hintEs: 'good → better (comparativo irregular)',
    grammar: 'Comparatives – irregular',
    grammarEs: 'Comparativos – irregular',
  },
  {
    words: ['they', 'not / can', 'swim'],
    wordsEs: ['ellos', 'no / poder', 'nadar'],
    acceptedAnswers: ["They can't swim.", "They can't swim", "They cannot swim.", "They cannot swim"],
    hint: "can + not = can't / cannot",
    hintEs: "can + not = can't / cannot",
    grammar: 'Modal can – negative',
    grammarEs: 'Modal can – negativo',
  },
];

// ACT-2 fix: B1 exercises
const b1Prompts: SentencePrompt[] = [
  {
    words: ['she', 'already / finish', 'the report'],
    wordsEs: ['ella', 'ya / terminar', 'el informe'],
    acceptedAnswers: ['She has already finished the report.', 'She has already finished the report'],
    hint: 'Present Perfect: have/has + past participle | already goes before the PP',
    hintEs: 'Present Perfect: have/has + participio | already va antes del PP',
    grammar: 'Present Perfect with already',
    grammarEs: 'Present Perfect con already',
  },
  {
    words: ['if / it / rain', 'tomorrow', 'we / cancel / the trip'],
    wordsEs: ['si / llover', 'mañana', 'nosotros / cancelar / el viaje'],
    acceptedAnswers: ["If it rains tomorrow, we'll cancel the trip.", "If it rains tomorrow, we will cancel the trip.", "If it rains tomorrow, we'll cancel the trip", "If it rains tomorrow, we will cancel the trip"],
    hint: '1st conditional: if + present simple, will + base verb',
    hintEs: '1er condicional: if + presente simple, will + verbo base',
    grammar: 'First Conditional',
    grammarEs: 'Primer Condicional',
  },
  {
    words: ['I', 'not / see', 'him / since Monday'],
    wordsEs: ['yo', 'no / ver', 'a él / desde el lunes'],
    acceptedAnswers: ["I haven't seen him since Monday.", "I haven't seen him since Monday", "I have not seen him since Monday.", "I have not seen him since Monday"],
    hint: 'Present Perfect + since + point in time',
    hintEs: 'Present Perfect + since + punto en el tiempo',
    grammar: 'Present Perfect + since',
    grammarEs: 'Present Perfect + since',
  },
  {
    words: ['the letter', 'send / by', 'the manager / last week'],
    wordsEs: ['la carta', 'enviar / por', 'el director / la semana pasada'],
    acceptedAnswers: ['The letter was sent by the manager last week.', 'The letter was sent by the manager last week'],
    hint: 'Passive voice: was/were + past participle',
    hintEs: 'Voz pasiva: was/were + participio pasado',
    grammar: 'Past Simple Passive',
    grammarEs: 'Pasiva en Pasado Simple',
  },
  {
    words: ['she / be studying', 'for three hours'],
    wordsEs: ['ella / llevar estudiando', 'tres horas'],
    acceptedAnswers: ['She has been studying for three hours.', 'She has been studying for three hours'],
    hint: 'Present Perfect Continuous: have/has + been + verb-ing',
    hintEs: 'Present Perfect Continuo: have/has + been + verbo-ing',
    grammar: 'Present Perfect Continuous',
    grammarEs: 'Present Perfect Continuo',
  },
  {
    words: ['if / I / be / you', 'I / apologize'],
    wordsEs: ['si / yo / ser / tú', 'yo / pedir disculpas'],
    acceptedAnswers: ["If I were you, I'd apologize.", "If I were you, I would apologize.", "If I were you, I'd apologize", "If I were you, I would apologize"],
    hint: '2nd conditional (unreal): if + past simple, would + base verb',
    hintEs: '2do condicional (irreal): if + pasado simple, would + verbo base',
    grammar: 'Second Conditional',
    grammarEs: 'Segundo Condicional',
  },
];

// ACT-2 fix: B2 exercises
const b2Prompts: SentencePrompt[] = [
  {
    words: ['if / she / study harder', 'she / pass / the exam'],
    wordsEs: ['si / ella / haber estudiado más', 'ella / aprobar / el examen'],
    acceptedAnswers: ["If she had studied harder, she would have passed the exam.", "If she had studied harder, she would have passed the exam"],
    hint: '3rd conditional: if + past perfect, would have + past participle',
    hintEs: '3er condicional: if + past perfect, would have + participio',
    grammar: 'Third Conditional',
    grammarEs: 'Tercer Condicional',
  },
  {
    words: ['she / tell me / that / she / finish / the project / the week before'],
    wordsEs: ['ella / decirme / que / ella / terminar / el proyecto / la semana anterior'],
    acceptedAnswers: ['She told me that she had finished the project the week before.', 'She told me that she had finished the project the week before'],
    hint: 'Reported speech: verb + that + past perfect (backshift)',
    hintEs: 'Discurso indirecto: verbo + that + past perfect (retroceso temporal)',
    grammar: 'Reported Speech – backshift',
    grammarEs: 'Discurso Indirecto – retroceso temporal',
  },
  {
    words: ['I / wish / I / speak', 'Japanese'],
    wordsEs: ['yo / ojalá / yo / hablar', 'japonés'],
    acceptedAnswers: ['I wish I spoke Japanese.', 'I wish I spoke Japanese'],
    hint: 'Wish + past simple (for present regrets)',
    hintEs: 'Wish + pasado simple (para lamentos presentes)',
    grammar: 'Wish – present regret',
    grammarEs: 'Wish – lamento presente',
  },
  {
    words: ['the car / get / service', 'every six months'],
    wordsEs: ['el coche', 'hacer / revisar', 'cada seis meses'],
    acceptedAnswers: ['The car gets serviced every six months.', 'The car gets serviced every six months', 'The car is serviced every six months.', 'The car is serviced every six months'],
    hint: 'Causative or passive: get/have + object + past participle',
    hintEs: 'Causativa o pasiva: get/have + objeto + participio',
    grammar: 'Causative – get/have something done',
    grammarEs: 'Causativa – get/have something done',
  },
  {
    words: ['it / be / Maria / who / solve', 'the problem'],
    wordsEs: ['fue / María / quien / resolver', 'el problema'],
    acceptedAnswers: ['It was Maria who solved the problem.', 'It was Maria who solved the problem'],
    hint: 'Cleft sentence for emphasis: It was + X + who/that...',
    hintEs: 'Oración escindida: It was + X + who/that...',
    grammar: 'It-cleft for emphasis',
    grammarEs: 'It-cleft para énfasis',
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
    .replace(/isn't/g, 'is not')
    .replace(/aren't/g, 'are not')
    .replace(/can't/g, 'cannot')
    .replace(/won't/g, 'will not');
}

function checkAnswer(userInput: string, accepted: string[]): boolean {
  const normalized = normalizeAnswer(userInput);
  return accepted.some(a => normalizeAnswer(a) === normalized);
}

export default function SimpleSentenceWriter({
  level = 'A1',
  onComplete,
  onXPGain,
  onBack,
}: SimpleSentenceWriterProps) {
  const prompts = useMemo(() => {
    // ACT-2 fix: use level-appropriate pool
    const pool =
      level === 'A1' ? a1Prompts
      : level === 'A2' ? [...a1Prompts, ...a2Prompts]
      : level === 'B1' ? b1Prompts
      : [...b1Prompts, ...b2Prompts]; // B2
    return [...pool].sort(() => Math.random() - 0.5).slice(0, 8);
  }, [level]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentPrompt = prompts[currentIndex];

  const handleSubmit = () => {
    if (!userInput.trim()) return;

    const isCorrect = checkAnswer(userInput, currentPrompt.acceptedAnswers);
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

    if (currentIndex + 1 >= prompts.length) {
      setFinished(true);
      onComplete?.(score + (feedback === 'correct' ? 0 : 0), prompts.length);
    } else {
      setCurrentIndex(i => i + 1);
    }
  };

  if (finished) {
    const pct = Math.round((score / prompts.length) * 100);
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
          <h2 className="text-2xl font-bold text-white">¡Escritura Completada!</h2>
          <p className="text-gray-400">
            {score}/{prompts.length} correctas ({pct}%)
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
            <PenTool className="w-5 h-5" />
            <span className="text-sm font-medium">Escribe la Frase</span>
            <span className="text-xs bg-accent-primary/30 px-2 py-0.5 rounded-full">
              {level}
            </span>
          </div>
          <div className="text-gray-400 text-sm">
            {currentIndex + 1} / {prompts.length}
          </div>
          <div className="w-full bg-dark-700 rounded-full h-2 mt-2">
            <div
              className="h-2 rounded-full bg-accent-primary transition-all"
              style={{ width: `${((currentIndex) / prompts.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Grammar label */}
        <div className="text-center">
          <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
            {currentPrompt.grammarEs}
          </span>
        </div>

        {/* Word prompts */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl p-6 border border-white/10"
          >
            <p className="text-gray-400 text-sm mb-3">
              Forma una frase correcta con estas palabras:
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {currentPrompt.words.map((w, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-accent-primary/20 text-accent-primary rounded-lg text-lg font-medium"
                >
                  {w}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {currentPrompt.wordsEs.map((w, i) => (
                <span
                  key={i}
                  className="text-gray-500 text-sm"
                >
                  ({w})
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hint */}
        {!feedback && (
          <button
            onClick={() => setShowHint(true)}
            className="text-sm text-gray-500 hover:text-yellow-400 flex items-center gap-1 mx-auto"
          >
            <Lightbulb className="w-4 h-4" />
            {showHint ? currentPrompt.hintEs || currentPrompt.hint : 'Ver pista'}
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
              placeholder="Escribe tu frase aquí..."
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
                <p className={`font-medium ${
                  feedback === 'correct' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {feedback === 'correct' ? '¡Correcto!' : 'No exactamente'}
                </p>
                {feedback === 'incorrect' && (
                  <div className="mt-1">
                    <p className="text-gray-400 text-sm">Tu respuesta: <span className="text-red-300">{userInput}</span></p>
                    <p className="text-gray-400 text-sm">Respuesta correcta: <span className="text-green-300">{currentPrompt.acceptedAnswers[0]}</span></p>
                  </div>
                )}
                <p className="text-gray-500 text-xs mt-1">{currentPrompt.grammarEs}</p>
              </div>
            </div>
            <button onClick={handleNext} className="btn-primary w-full py-3 flex items-center justify-center gap-2">
              {currentIndex + 1 < prompts.length ? 'Siguiente' : 'Ver Resultados'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
