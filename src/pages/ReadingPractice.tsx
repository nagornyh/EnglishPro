import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Volume2,
  Check,
  X,
  Award,
  ArrowRight,
  Home,
  BookMarked,
  Zap,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { useUser } from '../context/UserContext';

interface ReadingPassage {
  id: string;
  title: string;
  titleEs: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  topic: string;
  readingTime: number; // minutes
  wordCount: number;
  content: string;
  vocabulary: Array<{ word: string; definition: string; translation: string }>;
  questions: Array<{
    type: 'multiple-choice' | 'true-false' | 'fill-blank';
    question: string;
    questionEs?: string;
    options?: string[];
    answer: string | boolean;
    explanation: string;
  }>;
  xpReward: number;
}

const passages: ReadingPassage[] = [
  {
    id: 'daily-routine',
    title: 'My Daily Routine',
    titleEs: 'Mi Rutina Diaria',
    level: 'A1',
    topic: '🏠 Daily Life',
    readingTime: 2,
    wordCount: 120,
    xpReward: 30,
    content: `I wake up at seven o'clock every morning. First, I take a shower and brush my teeth. Then, I have breakfast. I usually eat toast and drink coffee.

At eight o'clock, I go to work. I take the bus because my office is far from my house. I work from nine to five. At lunchtime, I eat a sandwich in the park.

After work, I go to the gym. I exercise for one hour. Then, I go home and cook dinner. I like to watch TV in the evening. I go to bed at eleven o'clock.

On weekends, I relax. I sleep late and spend time with my friends and family.`,
    vocabulary: [
      { word: 'wake up', definition: 'to stop sleeping', translation: 'despertar(se)' },
      { word: 'brush', definition: 'to clean with a brush', translation: 'cepillar' },
      { word: 'usually', definition: 'most of the time', translation: 'usualmente' },
      { word: 'far', definition: 'not close', translation: 'lejos' },
      { word: 'relax', definition: 'to rest and feel calm', translation: 'relajarse' },
    ],
    questions: [
      {
        type: 'multiple-choice',
        question: 'What time does the person wake up?',
        questionEs: '¿A qué hora se despierta la persona?',
        options: ['6:00', '7:00', '8:00', '9:00'],
        answer: '7:00',
        explanation: 'The text says "I wake up at seven o\'clock every morning."',
      },
      {
        type: 'true-false',
        question: 'The person drives to work.',
        questionEs: 'La persona maneja al trabajo.',
        answer: false,
        explanation: 'The text says "I take the bus because my office is far."',
      },
      {
        type: 'multiple-choice',
        question: 'Where does the person eat lunch?',
        questionEs: '¿Dónde come la persona el almuerzo?',
        options: ['At home', 'In the office', 'In the park', 'At a restaurant'],
        answer: 'In the park',
        explanation: 'The text says "I eat a sandwich in the park."',
      },
      {
        type: 'fill-blank',
        question: 'On weekends, the person sleeps ___.',
        questionEs: 'Los fines de semana, la persona duerme ___.',
        answer: 'late',
        explanation: 'The text says "I sleep late."',
      },
    ],
  },
  {
    id: 'climate-change',
    title: 'Understanding Climate Change',
    titleEs: 'Entendiendo el Cambio Climático',
    level: 'B1',
    topic: '🌍 Environment',
    readingTime: 5,
    wordCount: 280,
    xpReward: 60,
    content: `Climate change is one of the biggest challenges facing our planet today. The Earth's temperature has been rising due to human activities, particularly the burning of fossil fuels like coal, oil, and gas.

When we burn these fuels, we release carbon dioxide and other greenhouse gases into the atmosphere. These gases trap heat from the sun, causing the planet to warm up. This is known as the greenhouse effect.

The consequences of climate change are already visible. Glaciers are melting, sea levels are rising, and extreme weather events are becoming more frequent. Many animal species are struggling to adapt to these rapid changes.

However, there are things we can do to help. We can reduce our carbon footprint by using public transportation, eating less meat, and saving energy at home. Governments and companies also need to invest in renewable energy sources like solar and wind power.

The fight against climate change requires everyone to work together. Small actions can make a big difference when millions of people participate. By changing our habits today, we can protect the planet for future generations.`,
    vocabulary: [
      { word: 'challenge', definition: 'a difficult task or problem', translation: 'desafío' },
      { word: 'fossil fuels', definition: 'oil, coal, and natural gas', translation: 'combustibles fósiles' },
      { word: 'atmosphere', definition: 'the layer of gases around Earth', translation: 'atmósfera' },
      { word: 'consequences', definition: 'results or effects', translation: 'consecuencias' },
      { word: 'renewable', definition: 'can be used again and again', translation: 'renovable' },
      { word: 'carbon footprint', definition: 'amount of CO2 we produce', translation: 'huella de carbono' },
    ],
    questions: [
      {
        type: 'multiple-choice',
        question: 'What is the main cause of climate change mentioned in the text?',
        options: ['Natural disasters', 'Burning fossil fuels', 'Volcanic eruptions', 'Deforestation'],
        answer: 'Burning fossil fuels',
        explanation: 'The text states that climate change is caused by "the burning of fossil fuels."',
      },
      {
        type: 'true-false',
        question: 'The greenhouse effect is when gases trap heat from the sun.',
        answer: true,
        explanation: 'The text explains that greenhouse gases "trap heat from the sun."',
      },
      {
        type: 'multiple-choice',
        question: 'Which is NOT mentioned as a consequence of climate change?',
        options: ['Melting glaciers', 'Rising sea levels', 'Earthquakes', 'Extreme weather'],
        answer: 'Earthquakes',
        explanation: 'The text mentions melting glaciers, rising sea levels, and extreme weather, but not earthquakes.',
      },
      {
        type: 'multiple-choice',
        question: 'What does the author suggest we can do to help?',
        options: ['Move to another country', 'Use public transportation', 'Build more factories', 'Ignore the problem'],
        answer: 'Use public transportation',
        explanation: 'The text suggests "using public transportation" to reduce our carbon footprint.',
      },
    ],
  },
  {
    id: 'artificial-intelligence',
    title: 'The Rise of Artificial Intelligence',
    titleEs: 'El Auge de la Inteligencia Artificial',
    level: 'B2',
    topic: '💻 Technology',
    readingTime: 6,
    wordCount: 350,
    xpReward: 80,
    content: `Artificial Intelligence (AI) has transformed from science fiction into everyday reality. From voice assistants on our phones to recommendation algorithms on streaming platforms, AI is woven into the fabric of modern life.

At its core, AI refers to computer systems designed to perform tasks that typically require human intelligence. These include recognizing speech, making decisions, translating languages, and identifying patterns in data. Machine learning, a subset of AI, enables computers to learn from experience without being explicitly programmed.

The potential benefits of AI are enormous. In healthcare, AI can analyze medical images to detect diseases earlier than human doctors. In transportation, self-driving vehicles promise to reduce accidents caused by human error. In education, personalized learning systems can adapt to each student's needs and pace.

However, AI also raises significant concerns. Privacy becomes increasingly difficult to maintain as AI systems collect and analyze vast amounts of personal data. There are worries about job displacement as automation replaces human workers in various industries. Additionally, bias in AI systems can perpetuate and amplify existing societal inequalities.

The ethical implications of AI require careful consideration. As these systems become more powerful, questions arise about accountability and transparency. Who is responsible when an AI makes a harmful decision? How can we ensure AI systems are fair and unbiased?

As we continue to develop and deploy AI technologies, striking the right balance between innovation and responsible use will be crucial for society's future.`,
    vocabulary: [
      { word: 'transformed', definition: 'changed completely', translation: 'transformado' },
      { word: 'woven', definition: 'integrated closely', translation: 'entrelazado' },
      { word: 'subset', definition: 'a part of a larger group', translation: 'subconjunto' },
      { word: 'explicitly', definition: 'clearly and directly', translation: 'explícitamente' },
      { word: 'displacement', definition: 'being moved from the usual place', translation: 'desplazamiento' },
      { word: 'perpetuate', definition: 'make something continue', translation: 'perpetuar' },
      { word: 'accountability', definition: 'responsibility for actions', translation: 'responsabilidad' },
    ],
    questions: [
      {
        type: 'multiple-choice',
        question: 'What is machine learning?',
        options: [
          'A type of computer hardware',
          'A subset of AI that learns from experience',
          'A programming language',
          'A type of robot',
        ],
        answer: 'A subset of AI that learns from experience',
        explanation: 'The text defines machine learning as "a subset of AI" that "enables computers to learn from experience."',
      },
      {
        type: 'true-false',
        question: 'The article suggests AI has no potential negative effects.',
        answer: false,
        explanation: 'The article discusses several concerns including privacy, job displacement, and bias.',
      },
      {
        type: 'multiple-choice',
        question: 'Which benefit of AI in healthcare is mentioned?',
        options: ['Performing surgery', 'Detecting diseases in images', 'Creating medicines', 'Replacing doctors'],
        answer: 'Detecting diseases in images',
        explanation: 'The text mentions AI can "analyze medical images to detect diseases earlier."',
      },
      {
        type: 'fill-blank',
        question: 'Self-driving vehicles promise to reduce accidents caused by human ___.',
        answer: 'error',
        explanation: 'The text states self-driving vehicles can "reduce accidents caused by human error."',
      },
      {
        type: 'multiple-choice',
        question: 'What ethical question does the author raise about AI?',
        options: [
          'How much should AI cost?',
          'Who is responsible when AI makes harmful decisions?',
          'Should AI be allowed to vote?',
          'Can AI have emotions?',
        ],
        answer: 'Who is responsible when AI makes harmful decisions?',
        explanation: 'The text asks "Who is responsible when an AI makes a harmful decision?"',
      },
    ],
  },
];

export default function ReadingPractice() {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();
  
  const [selectedPassage, setSelectedPassage] = useState<ReadingPassage | null>(null);
  const [stage, setStage] = useState<'reading' | 'questions' | 'results'>('reading');
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string | boolean>>({});
  const [results, setResults] = useState<Array<{ correct: boolean; explanation: string }>>([]);
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);

  // Filter passages by user level
  const availablePassages = passages.filter(p => {
    const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const userLevelIndex = Math.min(Math.floor(user?.progress.currentLevel || 1 / 2), 5);
    const passageLevelIndex = levelOrder.indexOf(p.level);
    return passageLevelIndex <= userLevelIndex + 1;
  });

  // Text-to-Speech
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      speechSynthesis.speak(utterance);
    }
  };

  // Check answers
  const checkAnswers = async () => {
    if (!selectedPassage || !user) return;

    const questionResults = selectedPassage.questions.map((q, idx) => {
      const userAnswer = answers[idx];
      let correct = false;

      if (q.type === 'true-false') {
        correct = userAnswer === q.answer;
      } else if (q.type === 'fill-blank') {
        correct = String(userAnswer).toLowerCase().trim() === String(q.answer).toLowerCase().trim();
      } else {
        correct = userAnswer === q.answer;
      }

      return { correct, explanation: q.explanation };
    });

    setResults(questionResults);
    setStage('results');

    // Calculate XP
    const correctCount = questionResults.filter(r => r.correct).length;
    const accuracy = correctCount / selectedPassage.questions.length;
    const xpEarned = Math.round(selectedPassage.xpReward * accuracy);

    // Update user progress
    await updateUser({
      progress: {
        ...user.progress,
        totalXP: user.progress.totalXP + xpEarned,
      },
    });
  };

  // Highlight vocabulary in text
  const renderContent = (content: string) => {
    if (!selectedPassage) return content;

    let highlightedContent = content;
    selectedPassage.vocabulary.forEach(v => {
      const regex = new RegExp(`\\b${v.word}\\b`, 'gi');
      highlightedContent = highlightedContent.replace(
        regex,
        `<span class="vocab-highlight" data-word="${v.word.toLowerCase()}">${v.word}</span>`
      );
    });

    return (
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: highlightedContent.replace(/\n\n/g, '</p><p class="mb-4">') }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.classList.contains('vocab-highlight')) {
            setHighlightedWord(target.dataset.word || null);
          }
        }}
      />
    );
  };

  if (!user) return null;

  // Passage selection
  if (!selectedPassage) {
    return (
      <div className="w-full space-y-6">
        <div className="text-center mb-8">
          <h1 className="heading-2 text-white mb-2">📖 Lectura Graduada</h1>
          <p className="text-gray-400">
            Mejora tu comprensión lectora con textos adaptados a tu nivel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {availablePassages.map(passage => (
            <motion.button
              key={passage.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPassage(passage)}
              className="card card-hover text-left"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-2 py-1 bg-accent-primary/20 text-accent-primary text-xs rounded">
                  {passage.level}
                </span>
                <span className="text-xs text-gray-500">{passage.topic}</span>
              </div>

              <h3 className="font-bold text-white mb-1">{passage.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{passage.titleEs}</p>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {passage.readingTime} min
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  {passage.wordCount} palabras
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {passage.xpReward} XP
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Results view
  if (stage === 'results') {
    const correctCount = results.filter(r => r.correct).length;
    const accuracy = Math.round((correctCount / results.length) * 100);

    return (
      <div className="w-full space-y-6">
        <div className="card text-center">
          <Award className={`w-16 h-16 mx-auto mb-4 ${
            accuracy >= 70 ? 'text-amber-400' : 'text-gray-400'
          }`} />
          <h2 className="text-xl font-bold text-white mb-2">
            {accuracy >= 70 ? '¡Bien hecho!' : 'Sigue practicando'}
          </h2>
          <p className="text-3xl font-bold text-accent-primary mb-2">{accuracy}%</p>
          <p className="text-gray-400">
            {correctCount} de {results.length} correctas
          </p>
        </div>

        <div className="space-y-3">
          {selectedPassage.questions.map((q, idx) => (
            <div
              key={idx}
              className={`card ${
                results[idx].correct 
                  ? 'border-green-500/20 bg-green-500/5' 
                  : 'border-red-500/20 bg-red-500/5'
              }`}
            >
              <div className="flex items-start gap-3">
                {results[idx].correct ? (
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                )}
                <div>
                  <p className="text-white text-sm">{q.question}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {results[idx].explanation}
                  </p>
                  {!results[idx].correct && (
                    <p className="text-xs text-green-400 mt-1">
                      Respuesta correcta: {String(q.answer)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate('/dashboard')}
            className="btn-secondary flex-1"
          >
            <Home className="w-4 h-4 mr-2" />
            Inicio
          </button>
          <button
            onClick={() => {
              setSelectedPassage(null);
              setStage('reading');
              setAnswers({});
              setResults([]);
            }}
            className="btn-primary flex-1"
          >
            <BookMarked className="w-4 h-4 mr-2" />
            Más Lecturas
          </button>
        </div>
      </div>
    );
  }

  // Questions view
  if (stage === 'questions') {
    return (
      <div className="w-full space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">
            Comprensión de Lectura
          </h2>
          <button
            onClick={() => setStage('reading')}
            className="text-sm text-accent-primary"
          >
            Volver al texto
          </button>
        </div>

        <div className="space-y-4">
          {selectedPassage.questions.map((q, idx) => (
            <div key={idx} className="card">
              <p className="font-medium text-white mb-1">{q.question}</p>
              {q.questionEs && (
                <p className="text-sm text-gray-500 mb-3">{q.questionEs}</p>
              )}

              {q.type === 'multiple-choice' && (
                <div className="grid gap-2">
                  {q.options?.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => setAnswers({ ...answers, [idx]: opt })}
                      className={`p-3 rounded-lg text-left transition-all ${
                        answers[idx] === opt
                          ? 'bg-accent-primary text-white'
                          : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {q.type === 'true-false' && (
                <div className="flex gap-3">
                  <button
                    onClick={() => setAnswers({ ...answers, [idx]: true })}
                    className={`flex-1 p-3 rounded-lg transition-all ${
                      answers[idx] === true
                        ? 'bg-green-500/20 text-green-400 border-2 border-green-500'
                        : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                    }`}
                  >
                    True
                  </button>
                  <button
                    onClick={() => setAnswers({ ...answers, [idx]: false })}
                    className={`flex-1 p-3 rounded-lg transition-all ${
                      answers[idx] === false
                        ? 'bg-red-500/20 text-red-400 border-2 border-red-500'
                        : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                    }`}
                  >
                    False
                  </button>
                </div>
              )}

              {q.type === 'fill-blank' && (
                <input
                  type="text"
                  value={String(answers[idx] || '')}
                  onChange={(e) => setAnswers({ ...answers, [idx]: e.target.value })}
                  placeholder="Escribe tu respuesta..."
                  className="w-full p-3 bg-dark-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-accent-primary outline-none"
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={checkAnswers}
          disabled={Object.keys(answers).length < selectedPassage.questions.length}
          className="btn-primary w-full disabled:opacity-50"
        >
          Verificar Respuestas
        </button>
      </div>
    );
  }

  // Reading view
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedPassage(null)}
          className="text-gray-400 hover:text-white"
        >
          ← Volver
        </button>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-accent-primary/20 text-accent-primary text-xs rounded">
            {selectedPassage.level}
          </span>
        </div>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-white">{selectedPassage.title}</h1>
        <p className="text-gray-400">{selectedPassage.titleEs}</p>
      </div>

      {/* Content */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => speak(selectedPassage.content)}
            className="flex items-center gap-2 text-sm text-accent-primary hover:text-accent-secondary"
          >
            <Volume2 className="w-4 h-4" />
            Escuchar texto completo
          </button>
          <span className="text-xs text-gray-500">
            {selectedPassage.wordCount} palabras
          </span>
        </div>

        <div className="text-gray-300 leading-relaxed">
          {renderContent(selectedPassage.content)}
        </div>

        {/* Highlighted word tooltip */}
        <AnimatePresence>
          {highlightedWord && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 p-3 bg-accent-primary/10 border border-accent-primary/20 rounded-lg"
            >
              {selectedPassage.vocabulary
                .filter(v => v.word.toLowerCase() === highlightedWord)
                .map(v => (
                  <div key={v.word}>
                    <p className="font-bold text-white">{v.word}</p>
                    <p className="text-sm text-accent-primary">{v.translation}</p>
                    <p className="text-sm text-gray-400">{v.definition}</p>
                  </div>
                ))}
              <button
                onClick={() => setHighlightedWord(null)}
                className="text-xs text-gray-500 mt-2"
              >
                Cerrar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Vocabulary Panel */}
      <div className="card">
        <button
          onClick={() => setShowVocabulary(!showVocabulary)}
          className="w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2 font-medium text-white">
            <MessageCircle className="w-4 h-4" />
            Vocabulario ({selectedPassage.vocabulary.length})
          </span>
          {showVocabulary ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>

        <AnimatePresence>
          {showVocabulary && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 space-y-2 overflow-hidden"
            >
              {selectedPassage.vocabulary.map((v, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 bg-dark-700/50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-white">{v.word}</p>
                    <p className="text-xs text-gray-500">{v.definition}</p>
                  </div>
                  <p className="text-sm text-accent-primary">{v.translation}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Continue button */}
      <button
        onClick={() => setStage('questions')}
        className="btn-primary w-full"
      >
        Responder Preguntas
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>

      {/* Vocabulary highlight styles */}
      <style>{`
        .vocab-highlight {
          background: rgba(99, 102, 241, 0.2);
          padding: 0 4px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .vocab-highlight:hover {
          background: rgba(99, 102, 241, 0.4);
        }
      `}</style>
    </div>
  );
}
