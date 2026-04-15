import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Volume2,
  CheckCircle,
  Star,
  Award,
  ArrowRight,
  Home,
  RotateCcw,
  MessageCircle,
  Zap,
} from 'lucide-react';
import { useUser } from '../context/UserContext';

interface StoryChapter {
  id: number;
  title: string;
  titleEs: string;
  content: string[];
  vocabulary: Array<{ word: string; translation: string; example: string }>;
  questions: Array<{
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }>;
  xpReward: number;
}

interface Story {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  genre: string;
  chapters: StoryChapter[];
  totalXP: number;
  estimatedTime: number; // minutes
  image: string;
}

// Sample stories
const stories: Story[] = [
  {
    id: 'coffee-shop-adventure',
    title: 'The Coffee Shop Adventure',
    titleEs: 'La Aventura de la Cafetería',
    description: 'A simple story about ordering coffee and making friends',
    descriptionEs: 'Una historia simple sobre pedir café y hacer amigos',
    level: 'A1',
    genre: '☕ Daily Life',
    estimatedTime: 10,
    image: '☕',
    totalXP: 100,
    chapters: [
      {
        id: 1,
        title: 'Entering the Shop',
        titleEs: 'Entrando a la Tienda',
        content: [
          "It's Monday morning. Emma walks into a coffee shop.",
          '"Good morning!" says the barista. "How can I help you?"',
          '"Hello," Emma says. "I would like a coffee, please."',
          '"What size? Small, medium, or large?"',
          '"Medium, please. And a muffin too."',
          '"That will be five dollars and fifty cents."',
          'Emma pays and sits at a table by the window.',
        ],
        vocabulary: [
          { word: 'barista', translation: 'barista', example: 'The barista made my coffee.' },
          { word: 'size', translation: 'tamaño', example: 'What size do you want?' },
          { word: 'muffin', translation: 'muffin/magdalena', example: 'I love chocolate muffins.' },
        ],
        questions: [
          {
            question: 'What day is it?',
            options: ['Sunday', 'Monday', 'Tuesday', 'Friday'],
            correct: 1,
            explanation: 'The story starts with "It\'s Monday morning."',
          },
          {
            question: 'What size coffee does Emma order?',
            options: ['Small', 'Medium', 'Large', 'Extra large'],
            correct: 1,
            explanation: 'Emma says "Medium, please."',
          },
        ],
        xpReward: 30,
      },
      {
        id: 2,
        title: 'A New Friend',
        titleEs: 'Un Nuevo Amigo',
        content: [
          'A man sits at the next table. He looks lost.',
          '"Excuse me," he says. "Do you speak English?"',
          '"Yes, I do. Can I help you?"',
          '"I am looking for the train station. Is it far?"',
          '"No, it\'s very close. Turn left outside and walk straight for five minutes."',
          '"Thank you very much! My name is Tom, by the way."',
          '"Nice to meet you, Tom. I\'m Emma."',
        ],
        vocabulary: [
          { word: 'lost', translation: 'perdido', example: 'I am lost. Can you help me?' },
          { word: 'train station', translation: 'estación de tren', example: 'The train station is near here.' },
          { word: 'straight', translation: 'recto/derecho', example: 'Walk straight for two blocks.' },
        ],
        questions: [
          {
            question: 'What is Tom looking for?',
            options: ['A coffee shop', 'The train station', 'A restaurant', 'A hotel'],
            correct: 1,
            explanation: 'Tom asks "I am looking for the train station."',
          },
          {
            question: 'Is the train station far?',
            options: ['Yes, very far', 'No, it\'s close', 'Tom doesn\'t know', 'Emma doesn\'t know'],
            correct: 1,
            explanation: 'Emma says "No, it\'s very close."',
          },
        ],
        xpReward: 35,
      },
      {
        id: 3,
        title: 'Making Plans',
        titleEs: 'Haciendo Planes',
        content: [
          'Tom and Emma talk for an hour.',
          '"I really enjoyed our conversation," says Tom.',
          '"Me too! Do you have WhatsApp?"',
          '"Yes, here is my number." Tom writes it on a napkin.',
          '"Great! Maybe we can have coffee again next week?"',
          '"I would like that very much. Same place, same time?"',
          '"Perfect! See you next Monday, Tom!"',
          '"Goodbye, Emma. Have a nice day!"',
        ],
        vocabulary: [
          { word: 'enjoyed', translation: 'disfruté', example: 'I enjoyed the movie.' },
          { word: 'conversation', translation: 'conversación', example: 'We had a long conversation.' },
          { word: 'napkin', translation: 'servilleta', example: 'Can I have a napkin, please?' },
        ],
        questions: [
          {
            question: 'How long did they talk?',
            options: ['10 minutes', '30 minutes', '1 hour', '2 hours'],
            correct: 2,
            explanation: 'The story says "Tom and Emma talk for an hour."',
          },
          {
            question: 'When will they meet again?',
            options: ['Tomorrow', 'Next week', 'Next month', 'They won\'t meet'],
            correct: 1,
            explanation: 'Emma says "Maybe we can have coffee again next week?"',
          },
        ],
        xpReward: 35,
      },
    ],
  },
  {
    id: 'mystery-letter',
    title: 'The Mystery Letter',
    titleEs: 'La Carta Misteriosa',
    description: 'A suspenseful story about a mysterious letter',
    descriptionEs: 'Una historia de suspenso sobre una carta misteriosa',
    level: 'A2',
    genre: '🔍 Mystery',
    estimatedTime: 15,
    image: '📧',
    totalXP: 150,
    chapters: [
      {
        id: 1,
        title: 'The Letter Arrives',
        titleEs: 'La Carta Llega',
        content: [
          'Sarah checked her mailbox like she did every afternoon.',
          'Today, there was something unusual: a letter with no return address.',
          'The handwriting was elegant but unfamiliar.',
          '"Strange," she thought. "Who would send me a handwritten letter these days?"',
          'She opened it carefully. Inside was a single sheet of paper.',
          'It read: "Your grandmother\'s secret lies in the garden. Look under the old oak tree."',
          'Sarah\'s heart beat faster. Her grandmother had passed away last year.',
        ],
        vocabulary: [
          { word: 'mailbox', translation: 'buzón', example: 'I check my mailbox every day.' },
          { word: 'handwriting', translation: 'letra/caligrafía', example: 'Her handwriting is beautiful.' },
          { word: 'unfamiliar', translation: 'desconocido', example: 'The voice was unfamiliar to me.' },
          { word: 'passed away', translation: 'falleció', example: 'My grandfather passed away in 2020.' },
        ],
        questions: [
          {
            question: 'What was unusual about the letter?',
            options: ['It was very big', 'It had no return address', 'It was in Spanish', 'It was wet'],
            correct: 1,
            explanation: 'The story mentions "a letter with no return address."',
          },
          {
            question: 'What happened to Sarah\'s grandmother?',
            options: ['She moved away', 'She is on vacation', 'She passed away', 'She wrote the letter'],
            correct: 2,
            explanation: 'The story says "Her grandmother had passed away last year."',
          },
        ],
        xpReward: 50,
      },
      {
        id: 2,
        title: 'The Discovery',
        titleEs: 'El Descubrimiento',
        content: [
          'The next morning, Sarah drove to her grandmother\'s old house.',
          'The garden was overgrown but beautiful in its wild way.',
          'She found the old oak tree at the back of the garden.',
          'With a shovel from the shed, she started digging.',
          'After thirty minutes, she hit something hard.',
          'It was a metal box, rusted but intact.',
          'Her hands trembled as she opened it.',
          'Inside were old photographs and a leather journal.',
        ],
        vocabulary: [
          { word: 'overgrown', translation: 'cubierto de maleza', example: 'The abandoned house was overgrown with ivy.' },
          { word: 'shovel', translation: 'pala', example: 'I need a shovel to dig the hole.' },
          { word: 'rusted', translation: 'oxidado', example: 'The old bicycle was rusted.' },
          { word: 'trembled', translation: 'temblaron', example: 'Her voice trembled with emotion.' },
        ],
        questions: [
          {
            question: 'Where did Sarah dig?',
            options: ['In her garden', 'Under the old oak tree', 'Next to the house', 'In the shed'],
            correct: 1,
            explanation: 'The letter said to look under the old oak tree.',
          },
          {
            question: 'What did Sarah find in the box?',
            options: ['Money', 'Jewelry', 'Photos and a journal', 'Letters'],
            correct: 2,
            explanation: 'The story says "Inside were old photographs and a leather journal."',
          },
        ],
        xpReward: 50,
      },
      {
        id: 3,
        title: 'The Secret',
        titleEs: 'El Secreto',
        content: [
          'Sarah sat under the tree and opened the journal.',
          'It was her grandmother\'s diary from 1960.',
          'As she read, tears filled her eyes.',
          'Her grandmother had been a resistance fighter during the war.',
          'She had saved many lives but never told anyone.',
          'The photographs showed her grandmother with other brave young people.',
          'Sarah finally understood why her grandmother always said, "Be brave, my dear."',
          'She would keep her grandmother\'s secret and her spirit alive.',
        ],
        vocabulary: [
          { word: 'diary', translation: 'diario', example: 'I write in my diary every night.' },
          { word: 'resistance fighter', translation: 'combatiente de la resistencia', example: 'The resistance fighters were very brave.' },
          { word: 'brave', translation: 'valiente', example: 'The firefighters are very brave.' },
          { word: 'spirit', translation: 'espíritu', example: 'Her spirit lives on in our hearts.' },
        ],
        questions: [
          {
            question: 'What was Sarah\'s grandmother during the war?',
            options: ['A nurse', 'A teacher', 'A resistance fighter', 'A soldier'],
            correct: 2,
            explanation: 'The journal revealed she "had been a resistance fighter."',
          },
          {
            question: 'Why did Sarah cry?',
            options: ['She was sad', 'She was proud of her grandmother', 'She was scared', 'She was angry'],
            correct: 1,
            explanation: 'Sarah was moved by discovering her grandmother\'s heroic past.',
          },
        ],
        xpReward: 50,
      },
    ],
  },
];

export default function StoryMode() {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();
  
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [questionAnswers, setQuestionAnswers] = useState<number[]>([]);
  const [chapterComplete, setChapterComplete] = useState(false);
  const [storyComplete, setStoryComplete] = useState(false);
  const [totalXPEarned, setTotalXPEarned] = useState(0);

  // Load story progress from localStorage
  useEffect(() => {
    if (user && selectedStory) {
      const progress = localStorage.getItem(`story_${user.id}_${selectedStory.id}`);
      if (progress) {
        const { chapter, xp } = JSON.parse(progress);
        setCurrentChapter(chapter);
        setTotalXPEarned(xp);
      }
    }
  }, [user?.id, selectedStory?.id]);

  // Save progress
  const saveProgress = (chapter: number, xp: number) => {
    if (!user || !selectedStory) return;
    localStorage.setItem(`story_${user.id}_${selectedStory.id}`, JSON.stringify({
      chapter,
      xp,
    }));
  };

  // Text-to-Speech
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  // Complete chapter
  const completeChapter = async () => {
    if (!user || !selectedStory) return;

    const chapter = selectedStory.chapters[currentChapter];
    const correct = questionAnswers.filter((a, i) => a === chapter.questions[i].correct).length;
    const bonus = Math.round((correct / chapter.questions.length) * 20);
    const xpEarned = chapter.xpReward + bonus;

    setTotalXPEarned(prev => prev + xpEarned);
    setChapterComplete(true);

    // Update user XP
    await updateUser({
      progress: {
        ...user.progress,
        totalXP: user.progress.totalXP + xpEarned,
      },
    });

    // Check if story is complete
    if (currentChapter >= selectedStory.chapters.length - 1) {
      setStoryComplete(true);
      // Save completion
      saveProgress(selectedStory.chapters.length, totalXPEarned + xpEarned);
    } else {
      saveProgress(currentChapter + 1, totalXPEarned + xpEarned);
    }
  };

  // Next chapter
  const nextChapter = () => {
    if (!selectedStory) return;
    if (currentChapter < selectedStory.chapters.length - 1) {
      setCurrentChapter(prev => prev + 1);
      setCurrentParagraph(0);
      setShowVocabulary(false);
      setShowQuestions(false);
      setQuestionAnswers([]);
      setChapterComplete(false);
    }
  };

  // Answer question
  const answerQuestion = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...questionAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuestionAnswers(newAnswers);
  };

  if (!user) return null;

  // Story selection view
  if (!selectedStory) {
    return (
      <div className="w-full space-y-6">
        <div className="text-center mb-8">
          <h1 className="heading-2 text-white mb-2">📚 Modo Historia</h1>
          <p className="text-gray-400">
            Aprende inglés a través de historias interactivas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {stories.map(story => {
            const progress = localStorage.getItem(`story_${user.id}_${story.id}`);
            const completed = progress ? JSON.parse(progress).chapter >= story.chapters.length : false;

            return (
              <motion.button
                key={story.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStory(story)}
                className="card card-hover text-left relative overflow-hidden"
              >
                {completed && (
                  <div className="absolute top-2 right-2 bg-green-500/20 p-1 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="text-4xl">{story.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-accent-primary/20 text-accent-primary text-xs rounded">
                        {story.level}
                      </span>
                      <span className="text-xs text-gray-500">{story.genre}</span>
                    </div>
                    <h3 className="font-bold text-white">{story.title}</h3>
                    <p className="text-sm text-gray-400">{story.titleEs}</p>
                    <p className="text-xs text-gray-500 mt-2">{story.descriptionEs}</p>
                    
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {story.chapters.length} capítulos
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {story.totalXP} XP
                      </span>
                      <span>~{story.estimatedTime} min</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  const chapter = selectedStory.chapters[currentChapter];

  // Guard: if currentChapter is out of bounds, reset to last valid chapter
  if (!chapter) {
    const lastValidIndex = selectedStory.chapters.length - 1;
    if (lastValidIndex >= 0) {
      setCurrentChapter(lastValidIndex);
    }
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="spinner" />
      </div>
    );
  }

  // Story complete view
  if (storyComplete) {
    return (
      <div className="w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="card bg-gradient-to-br from-amber-900/50 to-dark-800"
        >
          <Award className="w-20 h-20 text-amber-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">
            ¡Historia Completada!
          </h1>
          <p className="text-gray-400 mb-6">
            Has terminado "{selectedStory.titleEs}"
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">+{totalXPEarned}</p>
              <p className="text-xs text-gray-500">XP Total</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">{selectedStory.chapters.length}</p>
              <p className="text-xs text-gray-500">Capítulos</p>
            </div>
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
                setSelectedStory(null);
                setStoryComplete(false);
                setCurrentChapter(0);
                setTotalXPEarned(0);
              }}
              className="btn-primary flex-1"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Más Historias
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Chapter complete view
  if (chapterComplete) {
    return (
      <div className="w-full text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="card"
        >
          <Star className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">
            ¡Capítulo Completado!
          </h2>
          <p className="text-gray-400 mb-4">{chapter.titleEs}</p>

          <div className="bg-dark-700/50 rounded-lg p-4 mb-6">
            <p className="text-2xl font-bold text-amber-400">
              +{chapter.xpReward} XP
            </p>
          </div>

          <button
            onClick={nextChapter}
            className="btn-primary w-full"
          >
            {currentChapter < selectedStory.chapters.length - 1 
              ? 'Siguiente Capítulo' 
              : 'Ver Resultados'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    );
  }

  // Questions view
  if (showQuestions) {
    const allAnswered = questionAnswers.length === chapter.questions.length &&
      questionAnswers.every(a => a !== undefined);

    return (
      <div className="w-full space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">
            Preguntas - {chapter.titleEs}
          </h2>
          <span className="text-sm text-gray-400">
            {questionAnswers.filter(a => a !== undefined).length}/{chapter.questions.length}
          </span>
        </div>

        <div className="space-y-4">
          {chapter.questions.map((q, qIdx) => (
            <div key={qIdx} className="card">
              <p className="font-medium text-white mb-3">{q.question}</p>
              <div className="grid gap-2">
                {q.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => answerQuestion(qIdx, oIdx)}
                    className={`p-3 rounded-lg text-left transition-all ${
                      questionAnswers[qIdx] === oIdx
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
          onClick={completeChapter}
          disabled={!allAnswered}
          className="btn-primary w-full disabled:opacity-50"
        >
          Completar Capítulo
        </button>
      </div>
    );
  }

  // Vocabulary view
  if (showVocabulary) {
    return (
      <div className="w-full space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">
            Vocabulario - {chapter.titleEs}
          </h2>
          <button
            onClick={() => setShowVocabulary(false)}
            className="text-sm text-accent-primary"
          >
            Volver a la historia
          </button>
        </div>

        <div className="space-y-3">
          {chapter.vocabulary.map((word, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-white">{word.word}</p>
                  <p className="text-sm text-accent-primary">{word.translation}</p>
                  <p className="text-sm text-gray-400 mt-2 italic">"{word.example}"</p>
                </div>
                <button
                  onClick={() => speak(word.word)}
                  className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600"
                >
                  <Volume2 className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => {
            setShowVocabulary(false);
            setShowQuestions(true);
          }}
          className="btn-primary w-full"
        >
          Continuar a Preguntas
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    );
  }

  // Story reading view
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedStory(null)}
          className="text-gray-400 hover:text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="text-center">
          <h2 className="font-bold text-white">{selectedStory.title}</h2>
          <p className="text-sm text-gray-400">
            Capítulo {currentChapter + 1}: {chapter.title}
          </p>
        </div>
        <span className="text-sm text-accent-primary">
          {currentChapter + 1}/{selectedStory.chapters.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent-primary"
          animate={{ 
            width: `${((currentParagraph + 1) / chapter.content.length) * 100}%` 
          }}
        />
      </div>

      {/* Story content */}
      <div className="card min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentParagraph}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <p className="text-xl text-white leading-relaxed">
              {chapter.content[currentParagraph]}
            </p>
            
            <button
              onClick={() => speak(chapter.content[currentParagraph])}
              className="flex items-center gap-2 text-sm text-accent-primary hover:text-accent-secondary"
            >
              <Volume2 className="w-4 h-4" />
              Escuchar
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentParagraph(prev => Math.max(0, prev - 1))}
          disabled={currentParagraph === 0}
          className="btn-secondary flex-1 disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Anterior
        </button>
        
        {currentParagraph < chapter.content.length - 1 ? (
          <button
            onClick={() => setCurrentParagraph(prev => prev + 1)}
            className="btn-primary flex-1"
          >
            Siguiente
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        ) : (
          <button
            onClick={() => setShowVocabulary(true)}
            className="btn-primary flex-1"
          >
            Ver Vocabulario
            <BookOpen className="w-4 h-4 ml-2" />
          </button>
        )}
      </div>

      {/* Quick vocabulary access */}
      <button
        onClick={() => setShowVocabulary(true)}
        className="w-full p-3 rounded-lg bg-dark-700/50 text-gray-400 hover:bg-dark-700 transition-colors text-sm flex items-center justify-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        Ver vocabulario de este capítulo ({chapter.vocabulary.length} palabras)
      </button>
    </div>
  );
}
