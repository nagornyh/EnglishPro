import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Volume2,
  Globe,
  BookOpen,
  Filter,
  Headphones,
  Pencil,
  MessageCircle,
} from 'lucide-react';
import { useUser } from '../context/UserContext';

type VariantType = 'spelling' | 'vocabulary' | 'pronunciation' | 'grammar' | 'expression';

interface Variant {
  id: string;
  category: string;
  type: VariantType;
  uk: string;
  us: string;
  meaning?: string;
  ukPronunciation?: string;
  usPronunciation?: string;
  example?: {
    uk: string;
    us: string;
  };
  note?: string;
}

const variants: Variant[] = [
  // Spelling differences
  {
    id: '1',
    category: 'Spelling',
    type: 'spelling',
    uk: 'colour',
    us: 'color',
    meaning: 'Color',
    note: '-our vs -or: Muchas palabras en UK usan -our mientras que US usa -or'
  },
  {
    id: '2',
    category: 'Spelling',
    type: 'spelling',
    uk: 'favourite',
    us: 'favorite',
    meaning: 'Favorito'
  },
  {
    id: '3',
    category: 'Spelling',
    type: 'spelling',
    uk: 'behaviour',
    us: 'behavior',
    meaning: 'Comportamiento'
  },
  {
    id: '4',
    category: 'Spelling',
    type: 'spelling',
    uk: 'centre',
    us: 'center',
    meaning: 'Centro',
    note: '-re vs -er: En UK se usa -re, en US -er'
  },
  {
    id: '5',
    category: 'Spelling',
    type: 'spelling',
    uk: 'theatre',
    us: 'theater',
    meaning: 'Teatro'
  },
  {
    id: '6',
    category: 'Spelling',
    type: 'spelling',
    uk: 'metre',
    us: 'meter',
    meaning: 'Metro'
  },
  {
    id: '7',
    category: 'Spelling',
    type: 'spelling',
    uk: 'organise',
    us: 'organize',
    meaning: 'Organizar',
    note: '-ise vs -ize: UK prefiere -ise, US usa -ize'
  },
  {
    id: '8',
    category: 'Spelling',
    type: 'spelling',
    uk: 'realise',
    us: 'realize',
    meaning: 'Darse cuenta'
  },
  {
    id: '9',
    category: 'Spelling',
    type: 'spelling',
    uk: 'travelling',
    us: 'traveling',
    meaning: 'Viajando',
    note: 'Consonante doble en UK vs simple en US'
  },
  {
    id: '10',
    category: 'Spelling',
    type: 'spelling',
    uk: 'cancelled',
    us: 'canceled',
    meaning: 'Cancelado'
  },
  {
    id: '11',
    category: 'Spelling',
    type: 'spelling',
    uk: 'programme',
    us: 'program',
    meaning: 'Programa'
  },
  {
    id: '12',
    category: 'Spelling',
    type: 'spelling',
    uk: 'defence',
    us: 'defense',
    meaning: 'Defensa',
    note: '-ce vs -se: UK usa -ce, US usa -se'
  },
  {
    id: '13',
    category: 'Spelling',
    type: 'spelling',
    uk: 'licence',
    us: 'license',
    meaning: 'Licencia'
  },
  
  // Vocabulary differences
  {
    id: '14',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'flat',
    us: 'apartment',
    meaning: 'Apartamento',
    example: {
      uk: 'I live in a flat in London.',
      us: 'I live in an apartment in New York.'
    }
  },
  {
    id: '15',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'lift',
    us: 'elevator',
    meaning: 'Ascensor'
  },
  {
    id: '16',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'lorry',
    us: 'truck',
    meaning: 'Camión'
  },
  {
    id: '17',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'petrol',
    us: 'gas/gasoline',
    meaning: 'Gasolina'
  },
  {
    id: '18',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'motorway',
    us: 'highway/freeway',
    meaning: 'Autopista'
  },
  {
    id: '19',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'boot (car)',
    us: 'trunk',
    meaning: 'Maletero (del coche)'
  },
  {
    id: '20',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'bonnet (car)',
    us: 'hood',
    meaning: 'Capó (del coche)'
  },
  {
    id: '21',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'pavement',
    us: 'sidewalk',
    meaning: 'Acera'
  },
  {
    id: '22',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'queue',
    us: 'line',
    meaning: 'Cola/Fila',
    example: {
      uk: 'Please queue here.',
      us: 'Please wait in line here.'
    }
  },
  {
    id: '23',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'rubbish',
    us: 'garbage/trash',
    meaning: 'Basura'
  },
  {
    id: '24',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'biscuit',
    us: 'cookie',
    meaning: 'Galleta'
  },
  {
    id: '25',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'chips',
    us: 'fries',
    meaning: 'Patatas fritas',
    note: 'En UK, "chips" son patatas fritas. En US, "chips" son patatas de bolsa.'
  },
  {
    id: '26',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'crisps',
    us: 'chips',
    meaning: 'Patatas de bolsa'
  },
  {
    id: '27',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'football',
    us: 'soccer',
    meaning: 'Fútbol',
    note: 'En US, "football" se refiere al fútbol americano'
  },
  {
    id: '28',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'holiday',
    us: 'vacation',
    meaning: 'Vacaciones'
  },
  {
    id: '29',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'mobile (phone)',
    us: 'cell (phone)',
    meaning: 'Teléfono móvil'
  },
  {
    id: '30',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'post',
    us: 'mail',
    meaning: 'Correo'
  },
  {
    id: '31',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'postcode',
    us: 'zip code',
    meaning: 'Código postal'
  },
  {
    id: '32',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'chemist',
    us: 'pharmacy/drugstore',
    meaning: 'Farmacia'
  },
  {
    id: '33',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'trainers',
    us: 'sneakers',
    meaning: 'Zapatillas deportivas'
  },
  {
    id: '34',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'trousers',
    us: 'pants',
    meaning: 'Pantalones'
  },
  {
    id: '35',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'wardrobe',
    us: 'closet',
    meaning: 'Armario'
  },
  {
    id: '36',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'torch',
    us: 'flashlight',
    meaning: 'Linterna'
  },
  {
    id: '37',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'nappy',
    us: 'diaper',
    meaning: 'Pañal'
  },
  {
    id: '38',
    category: 'Vocabulary',
    type: 'vocabulary',
    uk: 'autumn',
    us: 'fall',
    meaning: 'Otoño'
  },
  
  // Pronunciation differences
  {
    id: '39',
    category: 'Pronunciation',
    type: 'pronunciation',
    uk: 'tomato',
    us: 'tomato',
    meaning: 'Tomate',
    ukPronunciation: '/təˈmɑːtəʊ/',
    usPronunciation: '/təˈmeɪtoʊ/',
    note: 'La "a" suena diferente'
  },
  {
    id: '40',
    category: 'Pronunciation',
    type: 'pronunciation',
    uk: 'schedule',
    us: 'schedule',
    meaning: 'Horario',
    ukPronunciation: '/ˈʃedjuːl/',
    usPronunciation: '/ˈskedʒuːl/',
  },
  {
    id: '41',
    category: 'Pronunciation',
    type: 'pronunciation',
    uk: 'aluminium',
    us: 'aluminum',
    meaning: 'Aluminio',
    ukPronunciation: '/ˌæljuˈmɪniəm/',
    usPronunciation: '/əˈluːmɪnəm/',
    note: 'Incluso se escriben diferente'
  },
  {
    id: '42',
    category: 'Pronunciation',
    type: 'pronunciation',
    uk: 'water',
    us: 'water',
    meaning: 'Agua',
    ukPronunciation: '/ˈwɔːtə/',
    usPronunciation: '/ˈwɔːtər/',
    note: 'La "t" en US suena más como "d"'
  },
  {
    id: '43',
    category: 'Pronunciation',
    type: 'pronunciation',
    uk: 'advertisement',
    us: 'advertisement',
    meaning: 'Anuncio',
    ukPronunciation: '/ədˈvɜːtɪsmənt/',
    usPronunciation: '/ˌædvərˈtaɪzmənt/',
  },
  {
    id: '44',
    category: 'Pronunciation',
    type: 'pronunciation',
    uk: 'leisure',
    us: 'leisure',
    meaning: 'Ocio',
    ukPronunciation: '/ˈleʒə/',
    usPronunciation: '/ˈliːʒər/',
  },
  
  // Grammar differences
  {
    id: '45',
    category: 'Grammar',
    type: 'grammar',
    uk: 'Have you got a pen?',
    us: 'Do you have a pen?',
    meaning: '¿Tienes un bolígrafo?',
    note: 'UK prefiere "have got", US prefiere "have"'
  },
  {
    id: '46',
    category: 'Grammar',
    type: 'grammar',
    uk: 'I\'ve just eaten.',
    us: 'I just ate.',
    meaning: 'Acabo de comer.',
    note: 'UK usa present perfect, US prefiere past simple con "just"'
  },
  {
    id: '47',
    category: 'Grammar',
    type: 'grammar',
    uk: 'At the weekend',
    us: 'On the weekend',
    meaning: 'En el fin de semana',
    note: 'Diferente preposición'
  },
  {
    id: '48',
    category: 'Grammar',
    type: 'grammar',
    uk: 'The team are playing well.',
    us: 'The team is playing well.',
    meaning: 'El equipo está jugando bien.',
    note: 'UK trata sustantivos colectivos como plural, US como singular'
  },
  {
    id: '49',
    category: 'Grammar',
    type: 'grammar',
    uk: 'I\'ll write to you.',
    us: 'I\'ll write you.',
    meaning: 'Te escribiré.',
    note: 'US omite la preposición "to"'
  },
  
  // Expressions
  {
    id: '50',
    category: 'Expressions',
    type: 'expression',
    uk: 'Cheers!',
    us: 'Thanks!',
    meaning: '¡Gracias!',
    note: 'En UK "Cheers" es informal para agradecer'
  },
  {
    id: '51',
    category: 'Expressions',
    type: 'expression',
    uk: 'Brilliant!',
    us: 'Awesome!',
    meaning: '¡Genial!',
  },
  {
    id: '52',
    category: 'Expressions',
    type: 'expression',
    uk: 'I\'m knackered.',
    us: 'I\'m beat/exhausted.',
    meaning: 'Estoy agotado.'
  },
  {
    id: '53',
    category: 'Expressions',
    type: 'expression',
    uk: 'That\'s rubbish!',
    us: 'That\'s garbage!/That sucks!',
    meaning: '¡Eso es basura!/¡Eso apesta!'
  },
];

const categories = ['All', 'Spelling', 'Vocabulary', 'Pronunciation', 'Grammar', 'Expressions'];

const typeIcons: Record<VariantType, React.ReactNode> = {
  spelling: <Pencil className="w-4 h-4" />,
  vocabulary: <BookOpen className="w-4 h-4" />,
  pronunciation: <Headphones className="w-4 h-4" />,
  grammar: <BookOpen className="w-4 h-4" />,
  expression: <MessageCircle className="w-4 h-4" />,
};

export default function RegionalVariants() {
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filter variants
  const filteredVariants = useMemo(() => {
    return variants.filter(variant => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!variant.uk.toLowerCase().includes(query) && 
            !variant.us.toLowerCase().includes(query) &&
            !(variant.meaning && variant.meaning.toLowerCase().includes(query))) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'All' && variant.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  // Group by category
  const groupedVariants = useMemo(() => {
    if (selectedCategory !== 'All') {
      return { [selectedCategory]: filteredVariants };
    }
    return filteredVariants.reduce((acc, variant) => {
      if (!acc[variant.category]) acc[variant.category] = [];
      acc[variant.category].push(variant);
      return acc;
    }, {} as Record<string, Variant[]>);
  }, [filteredVariants, selectedCategory]);

  // Text-to-Speech
  const speak = (text: string, accent: 'uk' | 'us') => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = accent === 'uk' ? 'en-GB' : 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  if (!user) return null;

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="heading-2 text-white mb-2">🇬🇧 vs 🇺🇸 Variantes Regionales</h1>
        <p className="text-gray-400">
          Diferencias entre inglés británico y americano
        </p>
      </div>

      {/* Quick legend */}
      <div className="flex justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇬🇧</span>
          <span className="text-gray-400">British English</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇺🇸</span>
          <span className="text-gray-400">American English</span>
        </div>
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
              placeholder="Buscar palabras o diferencias..."
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
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="card overflow-hidden"
            >
              <div>
                <label className="text-xs text-gray-500 mb-2 block">Categoría</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat
                          ? 'bg-accent-primary text-white'
                          : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
                      }`}
                    >
                      {cat === 'All' ? 'Todas' : cat}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500">
        {filteredVariants.length} diferencia{filteredVariants.length !== 1 ? 's' : ''} encontrada{filteredVariants.length !== 1 ? 's' : ''}
      </p>

      {/* Variants by category */}
      {filteredVariants.length === 0 ? (
        <div className="card text-center py-12">
          <Globe className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">No se encontraron diferencias</p>
          <p className="text-sm text-gray-500">Intenta ajustar los filtros</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedVariants).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                {typeIcons[items[0].type]}
                {category}
                <span className="text-sm font-normal text-gray-500">({items.length})</span>
              </h2>
              
              <div className="space-y-2">
                {items.map((variant) => (
                  <motion.div
                    key={variant.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card hover:border-accent-primary/30 transition-colors cursor-pointer"
                    onClick={() => setExpandedId(expandedId === variant.id ? null : variant.id)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* UK */}
                      <div className="flex-1 flex items-center gap-3">
                        <span className="text-xl">🇬🇧</span>
                        <div>
                          <p className="text-white font-medium">{variant.uk}</p>
                          {variant.ukPronunciation && (
                            <p className="text-xs text-gray-500">{variant.ukPronunciation}</p>
                          )}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speak(variant.uk, 'uk');
                          }}
                          className="p-1 rounded hover:bg-dark-600 text-gray-500 hover:text-white ml-auto sm:ml-0"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Arrow */}
                      <div className="hidden sm:block text-gray-600">↔️</div>

                      {/* US */}
                      <div className="flex-1 flex items-center gap-3">
                        <span className="text-xl">🇺🇸</span>
                        <div>
                          <p className="text-white font-medium">{variant.us}</p>
                          {variant.usPronunciation && (
                            <p className="text-xs text-gray-500">{variant.usPronunciation}</p>
                          )}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speak(variant.us, 'us');
                          }}
                          className="p-1 rounded hover:bg-dark-600 text-gray-500 hover:text-white ml-auto sm:ml-0"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Meaning */}
                      {variant.meaning && (
                        <div className="sm:w-32 text-right">
                          <p className="text-gray-500 text-sm">{variant.meaning}</p>
                        </div>
                      )}
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {expandedId === variant.id && (variant.note || variant.example) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-dark-600 space-y-3">
                            {variant.note && (
                              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                                <p className="text-amber-400 text-sm">💡 {variant.note}</p>
                              </div>
                            )}
                            
                            {variant.example && (
                              <div className="grid md:grid-cols-2 gap-3">
                                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span>🇬🇧</span>
                                    <span className="text-xs text-blue-400">British</span>
                                  </div>
                                  <p className="text-gray-300 italic text-sm">"{variant.example.uk}"</p>
                                </div>
                                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span>🇺🇸</span>
                                    <span className="text-xs text-red-400">American</span>
                                  </div>
                                  <p className="text-gray-300 italic text-sm">"{variant.example.us}"</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Info box */}
      <div className="card bg-gradient-to-r from-blue-500/10 to-red-500/10 border-purple-500/30">
        <div className="flex gap-3">
          <Globe className="w-6 h-6 text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-white mb-2">¿Cuál debo aprender?</h3>
            <p className="text-gray-400 text-sm mb-2">
              Ambas variantes son correctas y ampliamente entendidas. Lo importante es ser consistente: 
              si eliges escribir en inglés británico, mantén esa consistencia en todo tu texto.
            </p>
            <p className="text-gray-500 text-xs">
              Tip: Los exámenes internacionales (IELTS, TOEFL, Cambridge) aceptan ambas variantes 
              mientras seas consistente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
