import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import adaptiveEngine from '../services/adaptiveEngine';

interface WordOfTheDayProps {
  userId: string;
}

const DAILY_WORDS = [
  { word: 'serendipity', translation: 'serendipia', example: 'Finding that bookshop was pure serendipity.', phonetic: '/ˌserənˈdɪpɪti/', level: 'C1' },
  { word: 'resilient', translation: 'resiliente', example: 'She proved to be incredibly resilient after the setback.', phonetic: '/rɪˈzɪliənt/', level: 'B2' },
  { word: 'straightforward', translation: 'sencillo/directo', example: 'The instructions were straightforward and easy to follow.', phonetic: '/ˌstreɪtˈfɔːrwərd/', level: 'B1' },
  { word: 'overwhelm', translation: 'abrumar', example: 'Don\'t let the amount of work overwhelm you.', phonetic: '/ˌoʊvərˈwelm/', level: 'B2' },
  { word: 'meanwhile', translation: 'mientras tanto', example: 'I\'ll cook dinner. Meanwhile, you can set the table.', phonetic: '/ˈmiːnwaɪl/', level: 'B1' },
  { word: 'subtle', translation: 'sutil', example: 'There\'s a subtle difference between the two words.', phonetic: '/ˈsʌtl/', level: 'B2' },
  { word: 'thoroughly', translation: 'a fondo', example: 'Make sure to read the document thoroughly.', phonetic: '/ˈθʌrəli/', level: 'B2' },
  { word: 'acknowledge', translation: 'reconocer', example: 'She refused to acknowledge her mistake.', phonetic: '/əkˈnɒlɪdʒ/', level: 'B2' },
  { word: 'glimpse', translation: 'vistazo', example: 'I caught a glimpse of the sunset through the trees.', phonetic: '/ɡlɪmps/', level: 'B1' },
  { word: 'daunting', translation: 'intimidante', example: 'Starting a new job can be a daunting experience.', phonetic: '/ˈdɔːntɪŋ/', level: 'B2' },
  { word: 'cozy', translation: 'acogedor', example: 'The café had a warm, cozy atmosphere.', phonetic: '/ˈkoʊzi/', level: 'A2' },
  { word: 'breakthrough', translation: 'avance', example: 'Scientists made a major breakthrough in the research.', phonetic: '/ˈbreɪkθruː/', level: 'B2' },
  { word: 'hesitate', translation: 'dudar/titubear', example: 'Don\'t hesitate to ask if you need help.', phonetic: '/ˈhezɪteɪt/', level: 'B1' },
  { word: 'elaborate', translation: 'elaborar/detallado', example: 'Could you elaborate on that point?', phonetic: '/ɪˈlæbərət/', level: 'B2' },
  { word: 'quirky', translation: 'peculiar', example: 'She has a quirky sense of humour.', phonetic: '/ˈkwɜːrki/', level: 'C1' },
  { word: 'endeavour', translation: 'esfuerzo/empeño', example: 'Learning a language is a worthwhile endeavour.', phonetic: '/ɪnˈdevər/', level: 'C1' },
  { word: 'keen', translation: 'entusiasta/ávido', example: 'She\'s very keen on learning new things.', phonetic: '/kiːn/', level: 'B1' },
  { word: 'remarkable', translation: 'notable/extraordinario', example: 'Her progress has been truly remarkable.', phonetic: '/rɪˈmɑːrkəbl/', level: 'B2' },
  { word: 'stumble', translation: 'tropezar', example: 'I stumbled upon an interesting article online.', phonetic: '/ˈstʌmbl/', level: 'B1' },
  { word: 'nurture', translation: 'cultivar/nutrir', example: 'It\'s important to nurture your talents.', phonetic: '/ˈnɜːrtʃər/', level: 'C1' },
  { word: 'awkward', translation: 'incómodo/torpe', example: 'There was an awkward silence after his joke.', phonetic: '/ˈɔːkwərd/', level: 'B1' },
  { word: 'thrive', translation: 'prosperar', example: 'Plants thrive in warm, sunny conditions.', phonetic: '/θraɪv/', level: 'B2' },
  { word: 'genuine', translation: 'genuino/auténtico', example: 'She showed genuine interest in the topic.', phonetic: '/ˈdʒenjuɪn/', level: 'B2' },
  { word: 'meadow', translation: 'prado', example: 'We had a picnic in a beautiful meadow.', phonetic: '/ˈmedoʊ/', level: 'B1' },
  { word: 'compelling', translation: 'convincente', example: 'The speaker made a compelling argument.', phonetic: '/kəmˈpelɪŋ/', level: 'C1' },
  { word: 'bliss', translation: 'dicha/felicidad', example: 'Ignorance is bliss, as they say.', phonetic: '/blɪs/', level: 'C1' },
  { word: 'wander', translation: 'deambular', example: 'We wandered through the old streets of the city.', phonetic: '/ˈwɒndər/', level: 'B1' },
  { word: 'fierce', translation: 'feroz/intenso', example: 'There was fierce competition for the job.', phonetic: '/fɪrs/', level: 'B2' },
  { word: 'wholesome', translation: 'saludable/sano', example: 'It\'s a wholesome family movie.', phonetic: '/ˈhoʊlsəm/', level: 'B2' },
  { word: 'ponder', translation: 'reflexionar', example: 'She sat by the window, pondering her next move.', phonetic: '/ˈpɒndər/', level: 'C1' },
  { word: 'swift', translation: 'rápido/veloz', example: 'The company took swift action to resolve the issue.', phonetic: '/swɪft/', level: 'B2' },
];

export default function WordOfTheDay({ userId }: WordOfTheDayProps) {
  const [word, setWord] = useState<typeof DAILY_WORDS[0] | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const wotd = adaptiveEngine.getWordOfTheDay(userId, DAILY_WORDS);
    setWord(wotd as typeof DAILY_WORDS[0] | null);
  }, [userId]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      speechSynthesis.speak(utterance);
    }
  };

  if (!word) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="card bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/20"
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-left">
            <p className="text-xs text-purple-400 font-medium">Palabra del Día</p>
            <p className="text-lg font-bold text-white">{word.word}</p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-3 overflow-hidden"
          >
            <div className="flex items-center gap-3">
              {word.phonetic && (
                <span className="text-sm text-gray-400">{word.phonetic}</span>
              )}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); speak(word.word); }}
                className="p-1.5 rounded-lg bg-dark-600 hover:bg-dark-500 transition-colors"
              >
                <Volume2 className="w-4 h-4 text-accent-primary" />
              </button>
              <span className="text-xs px-2 py-0.5 rounded-full bg-dark-600 text-gray-400">{word.level}</span>
            </div>
            <p className="text-gray-300 text-sm">
              <span className="text-gray-500">Traducción: </span>
              {word.translation}
            </p>
            <div className="bg-dark-700/50 rounded-lg p-3">
              <p className="text-sm text-gray-300 italic">"{word.example}"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
