import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  ChevronRight,
  CheckCircle,
  Play,
  Lightbulb,
  AlertTriangle,
  Volume2,
  Copy,
  Check,
} from 'lucide-react';
import { useUser } from '../context/UserContext';

interface GrammarLesson {
  id: string;
  title: string;
  titleEs: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: string;
  sections: Array<{
    type: 'explanation' | 'examples' | 'tip' | 'warning' | 'practice';
    title?: string;
    content: string;
    examples?: Array<{ en: string; es: string }>;
  }>;
  exercises: Array<{
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }>;
}

const grammarLessons: GrammarLesson[] = [
  {
    id: 'present-simple',
    title: 'Present Simple',
    titleEs: 'Presente Simple',
    level: 'A1',
    category: 'Verb Tenses',
    sections: [
      {
        type: 'explanation',
        title: '¿Qué es el Present Simple?',
        content: 'El Present Simple se usa para hablar de **hábitos**, **rutinas**, **hechos generales** y **verdades universales**. Es uno de los tiempos verbales más importantes en inglés.',
      },
      {
        type: 'examples',
        title: 'Estructura',
        content: '**Afirmativo:** Sujeto + verbo (+ s/es en tercera persona)\n**Negativo:** Sujeto + do/does + not + verbo\n**Pregunta:** Do/Does + sujeto + verbo?',
        examples: [
          { en: 'I work every day.', es: 'Trabajo todos los días.' },
          { en: 'She works in a hospital.', es: 'Ella trabaja en un hospital.' },
          { en: 'They don\'t like coffee.', es: 'A ellos no les gusta el café.' },
          { en: 'Does he speak English?', es: '¿Habla él inglés?' },
        ],
      },
      {
        type: 'tip',
        title: 'Regla de la tercera persona',
        content: 'Añade **-s** o **-es** al verbo cuando el sujeto es he, she, it:\n• work → works\n• go → goes\n• watch → watches\n• study → studies',
      },
      {
        type: 'warning',
        title: 'Error común',
        content: '❌ "She don\'t like pizza."\n✅ "She doesn\'t like pizza."\n\nRecuerda usar "does" con la tercera persona en negativo y preguntas.',
      },
      {
        type: 'examples',
        title: 'Marcadores temporales',
        content: 'Palabras que suelen acompañar al Present Simple:',
        examples: [
          { en: 'always, usually, often', es: 'siempre, usualmente, a menudo' },
          { en: 'sometimes, rarely, never', es: 'a veces, rara vez, nunca' },
          { en: 'every day/week/month/year', es: 'cada día/semana/mes/año' },
          { en: 'on Mondays, in the morning', es: 'los lunes, por la mañana' },
        ],
      },
    ],
    exercises: [
      {
        question: 'She ___ to school every day.',
        options: ['go', 'goes', 'going', 'gone'],
        correct: 1,
        explanation: 'Con "she" (tercera persona), el verbo lleva -es: "goes".',
      },
      {
        question: 'They ___ coffee in the morning.',
        options: ['drinks', 'drink', 'drinking', 'drinked'],
        correct: 1,
        explanation: 'Con "they" (plural), el verbo va en forma base: "drink".',
      },
      {
        question: '___ your brother work here?',
        options: ['Do', 'Does', 'Is', 'Are'],
        correct: 1,
        explanation: 'Con "your brother" (tercera persona singular), usamos "Does".',
      },
    ],
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous',
    titleEs: 'Presente Continuo',
    level: 'A1',
    category: 'Verb Tenses',
    sections: [
      {
        type: 'explanation',
        title: '¿Cuándo usamos el Present Continuous?',
        content: 'El Present Continuous se usa para acciones que **están ocurriendo ahora mismo** o para **planes futuros confirmados**.',
      },
      {
        type: 'examples',
        title: 'Estructura',
        content: '**Afirmativo:** Sujeto + am/is/are + verbo-ing\n**Negativo:** Sujeto + am/is/are + not + verbo-ing\n**Pregunta:** Am/Is/Are + sujeto + verbo-ing?',
        examples: [
          { en: 'I am working now.', es: 'Estoy trabajando ahora.' },
          { en: 'She is reading a book.', es: 'Ella está leyendo un libro.' },
          { en: 'They aren\'t watching TV.', es: 'Ellos no están viendo la tele.' },
          { en: 'Are you coming tomorrow?', es: '¿Vienes mañana?' },
        ],
      },
      {
        type: 'tip',
        title: 'Reglas del -ing',
        content: '• Verbos que terminan en -e: quita la e → make → making\n• Verbos CVC cortos: dobla la consonante → run → running\n• Verbos que terminan en -ie: cambia a -y → lie → lying',
      },
      {
        type: 'warning',
        title: 'Verbos de estado',
        content: 'Algunos verbos **NO se usan** en presente continuo:\n❌ "I am knowing the answer."\n✅ "I know the answer."\n\nOtros: like, love, hate, want, need, believe, understand',
      },
    ],
    exercises: [
      {
        question: 'Look! It ___ outside.',
        options: ['rains', 'is raining', 'rain', 'rained'],
        correct: 1,
        explanation: '"Look!" indica una acción en este momento → Present Continuous.',
      },
      {
        question: 'I ___ to the gym tomorrow.',
        options: ['go', 'goes', 'am going', 'went'],
        correct: 2,
        explanation: 'Para planes futuros confirmados usamos Present Continuous.',
      },
    ],
  },
  {
    id: 'past-simple',
    title: 'Past Simple',
    titleEs: 'Pasado Simple',
    level: 'A2',
    category: 'Verb Tenses',
    sections: [
      {
        type: 'explanation',
        title: '¿Cuándo usamos el Past Simple?',
        content: 'El Past Simple se usa para hablar de **acciones completadas en el pasado** en un momento específico.',
      },
      {
        type: 'examples',
        title: 'Estructura',
        content: '**Afirmativo:** Sujeto + verbo en pasado (-ed o irregular)\n**Negativo:** Sujeto + did not + verbo base\n**Pregunta:** Did + sujeto + verbo base?',
        examples: [
          { en: 'I worked yesterday.', es: 'Trabajé ayer.' },
          { en: 'She went to Paris last year.', es: 'Ella fue a París el año pasado.' },
          { en: 'They didn\'t see the movie.', es: 'Ellos no vieron la película.' },
          { en: 'Did you call your mom?', es: '¿Llamaste a tu mamá?' },
        ],
      },
      {
        type: 'tip',
        title: 'Verbos regulares vs irregulares',
        content: '**Regulares:** añadir -ed (work → worked, play → played)\n**Irregulares:** memorizar (go → went, eat → ate, see → saw)',
      },
      {
        type: 'examples',
        title: 'Marcadores temporales',
        content: 'Palabras que indican Past Simple:',
        examples: [
          { en: 'yesterday, last night/week/year', es: 'ayer, anoche/semana pasada/año pasado' },
          { en: 'ago (two days ago)', es: 'hace (hace dos días)' },
          { en: 'in 2010, on Monday', es: 'en 2010, el lunes' },
          { en: 'when I was young', es: 'cuando era joven' },
        ],
      },
    ],
    exercises: [
      {
        question: 'I ___ to the beach last summer.',
        options: ['go', 'goes', 'went', 'going'],
        correct: 2,
        explanation: '"Last summer" indica pasado → "went" (pasado de go).',
      },
      {
        question: 'She ___ her homework yesterday.',
        options: ['didn\'t do', 'doesn\'t do', 'don\'t do', 'isn\'t doing'],
        correct: 0,
        explanation: '"Yesterday" indica pasado → negativo con "didn\'t do".',
      },
    ],
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect',
    titleEs: 'Presente Perfecto',
    level: 'B1',
    category: 'Verb Tenses',
    sections: [
      {
        type: 'explanation',
        title: '¿Cuándo usamos el Present Perfect?',
        content: 'El Present Perfect conecta el pasado con el presente. Se usa para:\n• **Experiencias** de vida\n• Acciones con **resultados visibles ahora**\n• Acciones que **empezaron en el pasado y continúan**',
      },
      {
        type: 'examples',
        title: 'Estructura',
        content: '**Afirmativo:** Sujeto + have/has + participio pasado\n**Negativo:** Sujeto + have/has + not + participio pasado\n**Pregunta:** Have/Has + sujeto + participio pasado?',
        examples: [
          { en: 'I have visited Paris.', es: 'He visitado París.' },
          { en: 'She has worked here for 5 years.', es: 'Ella ha trabajado aquí por 5 años.' },
          { en: 'They haven\'t finished yet.', es: 'Ellos no han terminado todavía.' },
          { en: 'Have you ever tried sushi?', es: '¿Alguna vez has probado sushi?' },
        ],
      },
      {
        type: 'tip',
        title: 'For vs Since',
        content: '**FOR** + período de tiempo (for 3 years, for a long time)\n**SINCE** + punto en el tiempo (since 2020, since Monday)',
      },
      {
        type: 'warning',
        title: 'Present Perfect vs Past Simple',
        content: '❌ "I have seen him yesterday."\n✅ "I saw him yesterday."\n\nNo uses Present Perfect con tiempos específicos del pasado.',
      },
    ],
    exercises: [
      {
        question: 'I ___ never ___ to Japan.',
        options: ['have / been', 'has / been', 'have / went', 'did / go'],
        correct: 0,
        explanation: 'Experiencias de vida → have + participio pasado (been).',
      },
      {
        question: 'She has worked here ___ 2018.',
        options: ['for', 'since', 'from', 'during'],
        correct: 1,
        explanation: '2018 es un punto en el tiempo → usamos "since".',
      },
    ],
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    titleEs: 'Condicionales',
    level: 'B2',
    category: 'Complex Structures',
    sections: [
      {
        type: 'explanation',
        title: 'Los Cuatro Condicionales',
        content: 'Los condicionales expresan situaciones hipotéticas y sus consecuencias.',
      },
      {
        type: 'examples',
        title: 'Zero Conditional (hechos)',
        content: 'If + presente simple, presente simple\nPara verdades generales y hechos científicos.',
        examples: [
          { en: 'If you heat water to 100°C, it boils.', es: 'Si calientas agua a 100°C, hierve.' },
          { en: 'If it rains, the grass gets wet.', es: 'Si llueve, el pasto se moja.' },
        ],
      },
      {
        type: 'examples',
        title: 'First Conditional (probable)',
        content: 'If + presente simple, will + verbo\nPara situaciones probables en el futuro.',
        examples: [
          { en: 'If it rains tomorrow, I will stay home.', es: 'Si llueve mañana, me quedaré en casa.' },
          { en: 'If you study hard, you will pass.', es: 'Si estudias duro, aprobarás.' },
        ],
      },
      {
        type: 'examples',
        title: 'Second Conditional (hipotético)',
        content: 'If + pasado simple, would + verbo\nPara situaciones improbables o imaginarias.',
        examples: [
          { en: 'If I won the lottery, I would travel.', es: 'Si ganara la lotería, viajaría.' },
          { en: 'If I were you, I would accept.', es: 'Si yo fuera tú, aceptaría.' },
        ],
      },
      {
        type: 'examples',
        title: 'Third Conditional (pasado irreal)',
        content: 'If + past perfect, would have + participio\nPara situaciones imposibles (ya pasaron).',
        examples: [
          { en: 'If I had studied, I would have passed.', es: 'Si hubiera estudiado, habría aprobado.' },
          { en: 'If she had called, I would have helped.', es: 'Si ella hubiera llamado, habría ayudado.' },
        ],
      },
      {
        type: 'tip',
        title: 'If I were...',
        content: 'En el segundo condicional, usamos "were" para todos los sujetos (incluyendo I, he, she, it). Es más formal y correcto.',
      },
    ],
    exercises: [
      {
        question: 'If I ___ rich, I would buy a yacht.',
        options: ['am', 'was', 'were', 'be'],
        correct: 2,
        explanation: 'Segundo condicional → if + pasado simple. Con "I" usamos "were".',
      },
      {
        question: 'If you heat ice, it ___.',
        options: ['melts', 'will melt', 'would melt', 'melted'],
        correct: 0,
        explanation: 'Verdad científica → Zero conditional → presente simple.',
      },
      {
        question: 'If I had known, I ___ you.',
        options: ['will tell', 'would tell', 'would have told', 'told'],
        correct: 2,
        explanation: 'Tercer condicional (pasado irreal) → would have + participio.',
      },
    ],
  },
];

export default function GrammarLessons() {
  const { user } = useUser();
  const [selectedLesson, setSelectedLesson] = useState<GrammarLesson | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [showExercises, setShowExercises] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Filter by level
  const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const userLevelIndex = Math.min(Math.floor((user?.progress.currentLevel || 1) / 2), 5);

  const availableLessons = grammarLessons.filter(l => 
    levelOrder.indexOf(l.level) <= userLevelIndex + 1
  );

  // Group lessons by category
  const groupedLessons = availableLessons.reduce((acc, lesson) => {
    if (!acc[lesson.category]) acc[lesson.category] = [];
    acc[lesson.category].push(lesson);
    return acc;
  }, {} as Record<string, GrammarLesson[]>);

  // Text-to-Speech
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  // Copy text
  const copyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Render markdown-like content
  const renderContent = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-accent-primary">$1</strong>')
      .replace(/\n/g, '<br />');
  };

  if (!user) return null;

  // Lesson list view
  if (!selectedLesson) {
    return (
      <div className="w-full space-y-6">
        <div className="text-center mb-8">
          <h1 className="heading-2 text-white mb-2">📚 Lecciones de Gramática</h1>
          <p className="text-gray-400">
            Aprende las reglas gramaticales del inglés con explicaciones claras
          </p>
        </div>

        {Object.entries(groupedLessons).map(([category, lessons]) => (
          <div key={category} className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent-primary" />
              {category}
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {lessons.map(lesson => (
                <motion.button
                  key={lesson.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedLesson(lesson);
                    setCurrentSection(0);
                    setShowExercises(false);
                    setAnswers([]);
                    setShowResults(false);
                  }}
                  className="card card-hover text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="px-2 py-0.5 bg-accent-primary/20 text-accent-primary text-xs rounded mb-2 inline-block">
                        {lesson.level}
                      </span>
                      <h3 className="font-bold text-white">{lesson.title}</h3>
                      <p className="text-sm text-gray-400">{lesson.titleEs}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const section = selectedLesson.sections[currentSection];

  // Exercise results view
  if (showResults) {
    const correctCount = answers.filter((a, i) => a === selectedLesson.exercises[i].correct).length;
    
    return (
      <div className="w-full space-y-6">
        <div className="card text-center">
          <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${
            correctCount >= selectedLesson.exercises.length / 2 ? 'text-green-400' : 'text-amber-400'
          }`} />
          <h2 className="text-xl font-bold text-white mb-2">
            {correctCount >= selectedLesson.exercises.length / 2 ? '¡Bien hecho!' : 'Sigue practicando'}
          </h2>
          <p className="text-gray-400">
            {correctCount} de {selectedLesson.exercises.length} correctas
          </p>
        </div>

        <div className="space-y-3">
          {selectedLesson.exercises.map((ex, idx) => (
            <div
              key={idx}
              className={`card ${
                answers[idx] === ex.correct 
                  ? 'border-green-500/20' 
                  : 'border-red-500/20'
              }`}
            >
              <p className="text-white mb-2">{ex.question}</p>
              <p className={`text-sm ${
                answers[idx] === ex.correct ? 'text-green-400' : 'text-red-400'
              }`}>
                {answers[idx] === ex.correct ? '✓ Correcto' : `✗ Incorrecto - Respuesta: ${ex.options[ex.correct]}`}
              </p>
              <p className="text-xs text-gray-500 mt-1">{ex.explanation}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setSelectedLesson(null)}
            className="btn-secondary flex-1"
          >
            Volver a Lecciones
          </button>
          <button
            onClick={() => {
              setShowExercises(false);
              setShowResults(false);
              setAnswers([]);
              setCurrentSection(0);
            }}
            className="btn-primary flex-1"
          >
            Repetir Lección
          </button>
        </div>
      </div>
    );
  }

  // Exercises view
  if (showExercises) {
    return (
      <div className="w-full space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">
            Ejercicios - {selectedLesson.titleEs}
          </h2>
          <button
            onClick={() => setShowExercises(false)}
            className="text-sm text-accent-primary"
          >
            Volver a la lección
          </button>
        </div>

        <div className="space-y-4">
          {selectedLesson.exercises.map((ex, idx) => (
            <div key={idx} className="card">
              <p className="font-medium text-white mb-3">{ex.question}</p>
              <div className="grid gap-2">
                {ex.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => {
                      const newAnswers = [...answers];
                      newAnswers[idx] = oIdx;
                      setAnswers(newAnswers);
                    }}
                    className={`p-3 rounded-lg text-left transition-all ${
                      answers[idx] === oIdx
                        ? 'bg-accent-primary text-white'
                        : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowResults(true)}
          disabled={answers.length < selectedLesson.exercises.length || answers.includes(undefined as any)}
          className="btn-primary w-full disabled:opacity-50"
        >
          Ver Resultados
        </button>
      </div>
    );
  }

  // Lesson content view
  return (
    <div className="w-full space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedLesson(null)}
          className="text-gray-400 hover:text-white"
        >
          ← Volver
        </button>
        <span className="px-2 py-1 bg-accent-primary/20 text-accent-primary text-xs rounded">
          {selectedLesson.level}
        </span>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-white">{selectedLesson.title}</h1>
        <p className="text-gray-400">{selectedLesson.titleEs}</p>
      </div>

      {/* Progress */}
      <div className="flex gap-1">
        {selectedLesson.sections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSection(idx)}
            className={`flex-1 h-1.5 rounded-full transition-colors ${
              idx === currentSection
                ? 'bg-accent-primary'
                : idx < currentSection
                ? 'bg-green-500'
                : 'bg-dark-600'
            }`}
          />
        ))}
      </div>

      {/* Section content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="card"
        >
          {section.type === 'tip' && (
            <div className="flex items-start gap-3 text-amber-400 mb-3">
              <Lightbulb className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">{section.title}</span>
            </div>
          )}

          {section.type === 'warning' && (
            <div className="flex items-start gap-3 text-red-400 mb-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">{section.title}</span>
            </div>
          )}

          {(section.type === 'explanation' || section.type === 'examples') && section.title && (
            <h3 className="font-bold text-white mb-3">{section.title}</h3>
          )}

          <div
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderContent(section.content) }}
          />

          {section.examples && (
            <div className="mt-4 space-y-2">
              {section.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg group"
                >
                  <div>
                    <p className="text-white">{ex.en}</p>
                    <p className="text-sm text-gray-500">{ex.es}</p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => speak(ex.en)}
                      className="p-1.5 rounded hover:bg-dark-600"
                    >
                      <Volume2 className="w-4 h-4 text-gray-400" />
                    </button>
                    <button
                      onClick={() => copyText(ex.en, idx)}
                      className="p-1.5 rounded hover:bg-dark-600"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
          disabled={currentSection === 0}
          className="btn-secondary flex-1 disabled:opacity-50"
        >
          Anterior
        </button>
        
        {currentSection < selectedLesson.sections.length - 1 ? (
          <button
            onClick={() => setCurrentSection(prev => prev + 1)}
            className="btn-primary flex-1"
          >
            Siguiente
          </button>
        ) : (
          <button
            onClick={() => setShowExercises(true)}
            className="btn-primary flex-1 flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" />
            Practicar
          </button>
        )}
      </div>
    </div>
  );
}
