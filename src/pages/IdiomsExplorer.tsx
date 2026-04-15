import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Volume2,
  Copy,
  Check,
  Heart,
  Filter,
  Lightbulb,
  BookOpen,
  Globe,
  ChevronRight,
} from 'lucide-react';
import { useUser } from '../context/UserContext';

interface Idiom {
  id: string;
  en: string;
  meaning: string;
  es: string;
  esEquivalent?: string;
  example: string;
  category: string;
  level: 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  origin?: string;
}

const idiomBank: Idiom[] = [
  // Animals
  {
    id: '1',
    en: 'The elephant in the room',
    meaning: 'An obvious problem that no one wants to discuss',
    es: 'Un problema obvio que nadie quiere discutir',
    esEquivalent: 'El elefante en la habitación',
    example: 'We need to address the elephant in the room - our budget is running out.',
    category: 'Animals',
    level: 'B2',
  },
  {
    id: '2',
    en: 'Let the cat out of the bag',
    meaning: 'To accidentally reveal a secret',
    es: 'Revelar un secreto accidentalmente',
    esEquivalent: 'Irse de la lengua',
    example: 'She let the cat out of the bag about the surprise party.',
    category: 'Animals',
    level: 'B1',
  },
  {
    id: '3',
    en: 'When pigs fly',
    meaning: 'Something that will never happen',
    es: 'Algo que nunca sucederá',
    esEquivalent: 'Cuando las vacas vuelen',
    example: "He'll clean his room when pigs fly.",
    category: 'Animals',
    level: 'B1',
  },
  {
    id: '4',
    en: 'A fish out of water',
    meaning: 'Someone uncomfortable in a situation',
    es: 'Alguien incómodo en una situación',
    esEquivalent: 'Como pez fuera del agua',
    example: 'I felt like a fish out of water at the opera.',
    category: 'Animals',
    level: 'B1',
  },
  {
    id: '5',
    en: 'Kill two birds with one stone',
    meaning: 'Accomplish two things at once',
    es: 'Lograr dos cosas a la vez',
    esEquivalent: 'Matar dos pájaros de un tiro',
    example: 'By cycling to work, I kill two birds with one stone - exercise and commuting.',
    category: 'Animals',
    level: 'B1',
  },
  
  // Body Parts
  {
    id: '6',
    en: 'Cost an arm and a leg',
    meaning: 'To be very expensive',
    es: 'Ser muy caro',
    esEquivalent: 'Costar un ojo de la cara',
    example: 'That new car cost me an arm and a leg.',
    category: 'Body',
    level: 'B1',
  },
  {
    id: '7',
    en: 'Break a leg',
    meaning: 'Good luck (in theater)',
    es: 'Buena suerte (en teatro)',
    esEquivalent: 'Mucha mierda',
    example: "You're performing tonight? Break a leg!",
    category: 'Body',
    level: 'A2',
  },
  {
    id: '8',
    en: 'Keep your chin up',
    meaning: 'Stay positive despite difficulties',
    es: 'Mantente positivo pese a las dificultades',
    esEquivalent: 'No te rindas',
    example: "Things will get better. Keep your chin up!",
    category: 'Body',
    level: 'B1',
  },
  {
    id: '9',
    en: 'Get something off your chest',
    meaning: 'To tell something that has been bothering you',
    es: 'Contar algo que te ha estado molestando',
    esEquivalent: 'Desahogarse',
    example: 'I need to get something off my chest - I broke your vase.',
    category: 'Body',
    level: 'B2',
  },
  {
    id: '10',
    en: 'Pull someone\'s leg',
    meaning: 'To joke or tease someone',
    es: 'Bromear o burlarse de alguien',
    esEquivalent: 'Tomar el pelo',
    example: "Don't take him seriously, he's just pulling your leg.",
    category: 'Body',
    level: 'B1',
  },
  
  // Weather
  {
    id: '11',
    en: 'It\'s raining cats and dogs',
    meaning: 'It\'s raining very heavily',
    es: 'Está lloviendo mucho',
    esEquivalent: 'Llueve a cántaros',
    example: "Take an umbrella, it's raining cats and dogs out there.",
    category: 'Weather',
    level: 'A2',
  },
  {
    id: '12',
    en: 'Under the weather',
    meaning: 'Feeling slightly ill',
    es: 'Sentirse un poco enfermo',
    esEquivalent: 'Estar pachucho',
    example: "I'm feeling a bit under the weather today.",
    category: 'Weather',
    level: 'B1',
  },
  {
    id: '13',
    en: 'Every cloud has a silver lining',
    meaning: 'Every bad situation has a positive aspect',
    es: 'Toda situación mala tiene algo positivo',
    esEquivalent: 'No hay mal que por bien no venga',
    example: 'I lost my job but found a better one. Every cloud has a silver lining.',
    category: 'Weather',
    level: 'B2',
  },
  {
    id: '14',
    en: 'A storm in a teacup',
    meaning: 'Making a big deal out of nothing',
    es: 'Hacer un gran problema de nada',
    esEquivalent: 'Una tempestad en un vaso de agua',
    example: 'The argument was just a storm in a teacup.',
    category: 'Weather',
    level: 'B2',
  },
  
  // Food
  {
    id: '15',
    en: 'A piece of cake',
    meaning: 'Something very easy',
    es: 'Algo muy fácil',
    esEquivalent: 'Pan comido',
    example: 'The test was a piece of cake.',
    category: 'Food',
    level: 'A2',
  },
  {
    id: '16',
    en: 'Spill the beans',
    meaning: 'To reveal secret information',
    es: 'Revelar información secreta',
    esEquivalent: 'Soltar la sopa',
    example: 'Come on, spill the beans! What happened?',
    category: 'Food',
    level: 'B1',
  },
  {
    id: '17',
    en: 'Have your cake and eat it too',
    meaning: 'Want the best of both situations',
    es: 'Querer lo mejor de ambas situaciones',
    esEquivalent: 'Quedarse con todo',
    example: "You can't have your cake and eat it too.",
    category: 'Food',
    level: 'B2',
  },
  {
    id: '18',
    en: 'The best thing since sliced bread',
    meaning: 'An excellent innovation',
    es: 'Una excelente innovación',
    esEquivalent: 'Lo mejor desde el pan rebanado',
    example: 'This new app is the best thing since sliced bread.',
    category: 'Food',
    level: 'B2',
  },
  
  // Time & Work
  {
    id: '19',
    en: 'Better late than never',
    meaning: 'It\'s better to do something late than not at all',
    es: 'Es mejor hacerlo tarde que nunca',
    esEquivalent: 'Más vale tarde que nunca',
    example: 'You finally finished the project? Better late than never!',
    category: 'Time',
    level: 'A2',
  },
  {
    id: '20',
    en: 'Time flies',
    meaning: 'Time passes very quickly',
    es: 'El tiempo pasa muy rápido',
    esEquivalent: 'El tiempo vuela',
    example: 'Time flies when you\'re having fun.',
    category: 'Time',
    level: 'A2',
  },
  {
    id: '21',
    en: 'Burn the midnight oil',
    meaning: 'To work late into the night',
    es: 'Trabajar hasta tarde',
    esEquivalent: 'Quemarse las pestañas',
    example: 'I had to burn the midnight oil to finish the report.',
    category: 'Time',
    level: 'B2',
  },
  {
    id: '22',
    en: 'Call it a day',
    meaning: 'Stop working for the day',
    es: 'Terminar de trabajar por hoy',
    esEquivalent: 'Dejarlo por hoy',
    example: "It's 6 PM, let's call it a day.",
    category: 'Time',
    level: 'B1',
  },
  
  // Money
  {
    id: '23',
    en: 'Break the bank',
    meaning: 'To be very expensive or use all your money',
    es: 'Ser muy caro o gastar todo tu dinero',
    esEquivalent: 'Fundirse la cartera',
    example: 'This restaurant won\'t break the bank.',
    category: 'Money',
    level: 'B1',
  },
  {
    id: '24',
    en: 'A penny for your thoughts',
    meaning: 'Asking what someone is thinking about',
    es: 'Preguntar en qué está pensando alguien',
    example: 'You look thoughtful. A penny for your thoughts?',
    category: 'Money',
    level: 'B2',
  },
  {
    id: '25',
    en: 'Money doesn\'t grow on trees',
    meaning: 'Money is limited and must be earned',
    es: 'El dinero es limitado y hay que ganarlo',
    esEquivalent: 'El dinero no crece en los árboles',
    example: "I can't buy you everything. Money doesn't grow on trees!",
    category: 'Money',
    level: 'B1',
  },
  
  // Feelings
  {
    id: '26',
    en: 'Over the moon',
    meaning: 'Extremely happy',
    es: 'Extremadamente feliz',
    esEquivalent: 'En las nubes',
    example: 'She was over the moon when she got the job.',
    category: 'Feelings',
    level: 'B1',
  },
  {
    id: '27',
    en: 'On cloud nine',
    meaning: 'Very happy',
    es: 'Muy feliz',
    esEquivalent: 'En el séptimo cielo',
    example: "Since their wedding, they've been on cloud nine.",
    category: 'Feelings',
    level: 'B1',
  },
  {
    id: '28',
    en: 'Hit rock bottom',
    meaning: 'Reach the lowest point',
    es: 'Llegar al punto más bajo',
    esEquivalent: 'Tocar fondo',
    example: 'After losing everything, he hit rock bottom.',
    category: 'Feelings',
    level: 'B2',
  },
  {
    id: '29',
    en: 'Butterflies in your stomach',
    meaning: 'Feeling nervous or excited',
    es: 'Sentirse nervioso o emocionado',
    esEquivalent: 'Tener mariposas en el estómago',
    example: 'I always get butterflies in my stomach before presentations.',
    category: 'Feelings',
    level: 'B1',
  },
  
  // Actions
  {
    id: '30',
    en: 'Bite the bullet',
    meaning: 'To do something difficult that you\'ve been avoiding',
    es: 'Hacer algo difícil que has estado evitando',
    esEquivalent: 'Morder la bala',
    example: 'I finally bit the bullet and went to the dentist.',
    category: 'Actions',
    level: 'B2',
  },
  {
    id: '31',
    en: 'Hit the nail on the head',
    meaning: 'To be exactly right about something',
    es: 'Dar en el clavo',
    esEquivalent: 'Dar en el clavo',
    example: 'You hit the nail on the head with that analysis.',
    category: 'Actions',
    level: 'B1',
  },
  {
    id: '32',
    en: 'Miss the boat',
    meaning: 'To miss an opportunity',
    es: 'Perder una oportunidad',
    esEquivalent: 'Perder el tren',
    example: 'If you don\'t apply now, you\'ll miss the boat.',
    category: 'Actions',
    level: 'B1',
  },
  {
    id: '33',
    en: 'Get the ball rolling',
    meaning: 'To start something',
    es: 'Empezar algo',
    esEquivalent: 'Poner las cosas en marcha',
    example: "Let's get the ball rolling on this project.",
    category: 'Actions',
    level: 'B2',
  },
  {
    id: '34',
    en: 'Take it with a grain of salt',
    meaning: 'Don\'t take it too seriously',
    es: 'No te lo tomes muy en serio',
    esEquivalent: 'No te lo tomes al pie de la letra',
    example: 'Take his advice with a grain of salt.',
    category: 'Actions',
    level: 'B2',
  },
  {
    id: '35',
    en: 'Sleep on it',
    meaning: 'To think about something overnight before deciding',
    es: 'Pensarlo antes de decidir',
    esEquivalent: 'Consultarlo con la almohada',
    example: "It's a big decision. Why don't you sleep on it?",
    category: 'Actions',
    level: 'B1',
  },
];

const categories = ['All', 'Animals', 'Body', 'Weather', 'Food', 'Time', 'Money', 'Feelings', 'Actions'];
const levels = ['All', 'A2', 'B1', 'B2', 'C1', 'C2'];

export default function IdiomsExplorer() {
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    if (!user) return new Set();
    const saved = localStorage.getItem(`idioms_favorites_${user.id}`);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Filter idioms
  const filteredIdioms = useMemo(() => {
    return idiomBank.filter(idiom => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!idiom.en.toLowerCase().includes(query) && 
            !idiom.meaning.toLowerCase().includes(query) &&
            !idiom.es.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'All' && idiom.category !== selectedCategory) {
        return false;
      }

      // Level filter
      if (selectedLevel !== 'All' && idiom.level !== selectedLevel) {
        return false;
      }

      // Favorites filter
      if (showOnlyFavorites && !favorites.has(idiom.id)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedLevel, showOnlyFavorites, favorites]);

  // Toggle favorite
  const toggleFavorite = (id: string) => {
    if (!user) return;
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
    localStorage.setItem(`idioms_favorites_${user.id}`, JSON.stringify([...newFavorites]));
  };

  // Text-to-Speech
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  // Copy idiom
  const copyIdiom = (idiom: Idiom) => {
    navigator.clipboard.writeText(`${idiom.en} - ${idiom.meaning}`);
    setCopiedId(idiom.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!user) return null;

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="heading-2 text-white mb-2">🎭 Explorador de Modismos</h1>
        <p className="text-gray-400">
          Expresiones idiomáticas en inglés con sus equivalentes en español
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar modismos..."
              className="w-full pl-10 pr-4 py-3 bg-dark-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-accent-primary outline-none"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-3 rounded-xl flex items-center gap-2 transition-colors ${
              showFilters ? 'bg-accent-primary text-white' : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
            }`}
          >
            <Filter className="w-5 h-5" />
            <span className="hidden sm:inline">Filtros</span>
          </button>
          <button
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={`px-4 py-3 rounded-xl flex items-center gap-2 transition-colors ${
              showOnlyFavorites ? 'bg-red-500/20 text-red-400' : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
            }`}
          >
            <Heart className={`w-5 h-5 ${showOnlyFavorites ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{favorites.size}</span>
          </button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="card overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {/* Category */}
                <div>
                  <label className="form-label">Categoría</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="input-field"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat === 'All' ? 'Todas' : cat}</option>
                    ))}
                  </select>
                </div>

                {/* Level */}
                <div>
                  <label className="form-label">Nivel</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="input-field"
                  >
                    {levels.map(lvl => (
                      <option key={lvl} value={lvl}>{lvl === 'All' ? 'Todos' : lvl}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-sm text-gray-500">
        <span>{filteredIdioms.length} modismo{filteredIdioms.length !== 1 ? 's' : ''}</span>
        <span>•</span>
        <span>{favorites.size} favorito{favorites.size !== 1 ? 's' : ''}</span>
      </div>

      {/* Idioms list */}
      {filteredIdioms.length === 0 ? (
        <div className="card text-center py-12">
          <Lightbulb className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">No se encontraron modismos</p>
          <p className="text-sm text-gray-500">Intenta ajustar los filtros</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredIdioms.map((idiom) => (
            <motion.div
              key={idiom.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card hover:border-accent-primary/30 transition-colors cursor-pointer"
              onClick={() => setExpandedId(expandedId === idiom.id ? null : idiom.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: expandedId === idiom.id ? 90 : 0 }}
                    >
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    </motion.div>
                    <p className="text-white font-medium text-lg">{idiom.en}</p>
                  </div>
                  
                  <p className="text-gray-400 ml-6">{idiom.meaning}</p>
                  
                  <div className="flex items-center gap-2 mt-2 ml-6">
                    <span className="px-2 py-0.5 bg-accent-primary/20 text-accent-primary text-xs rounded">
                      {idiom.level}
                    </span>
                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded">
                      {idiom.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => speak(idiom.en)}
                    className="p-2 rounded-lg hover:bg-dark-600 text-gray-400 hover:text-white"
                    title="Escuchar"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => copyIdiom(idiom)}
                    className="p-2 rounded-lg hover:bg-dark-600 text-gray-400 hover:text-white"
                    title="Copiar"
                  >
                    {copiedId === idiom.id ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => toggleFavorite(idiom.id)}
                    className={`p-2 rounded-lg hover:bg-dark-600 ${
                      favorites.has(idiom.id) ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                    }`}
                    title={favorites.has(idiom.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                  >
                    <Heart className={`w-4 h-4 ${favorites.has(idiom.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {expandedId === idiom.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-dark-600 space-y-4 ml-6">
                      {/* Spanish translation */}
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <Globe className="w-4 h-4" />
                          <span>Traducción</span>
                        </div>
                        <p className="text-gray-300">{idiom.es}</p>
                      </div>

                      {/* Spanish equivalent */}
                      {idiom.esEquivalent && (
                        <div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                            <Globe className="w-4 h-4 text-amber-500" />
                            <span>Equivalente en español</span>
                          </div>
                          <p className="text-amber-400 italic">"{idiom.esEquivalent}"</p>
                        </div>
                      )}

                      {/* Example */}
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <BookOpen className="w-4 h-4" />
                          <span>Ejemplo</span>
                        </div>
                        <div className="p-3 bg-dark-700 rounded-lg">
                          <p className="text-gray-200 italic">"{idiom.example}"</p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speak(idiom.example);
                            }}
                            className="mt-2 text-sm text-accent-primary hover:underline flex items-center gap-1"
                          >
                            <Volume2 className="w-3 h-3" />
                            Escuchar ejemplo
                          </button>
                        </div>
                      </div>

                      {/* Origin if available */}
                      {idiom.origin && (
                        <div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                            <Lightbulb className="w-4 h-4" />
                            <span>Origen</span>
                          </div>
                          <p className="text-gray-400 text-sm">{idiom.origin}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )}

      {/* Learning tip */}
      <div className="card bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/30">
        <div className="flex gap-3">
          <Lightbulb className="w-6 h-6 text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-white mb-1">💡 Tip de aprendizaje</h3>
            <p className="text-gray-400 text-sm">
              Los modismos no se traducen literalmente. Intenta memorizarlos con ejemplos
              y sus equivalentes en español para recordarlos mejor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
