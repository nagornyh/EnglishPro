import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Volume2,
  Copy,
  Check,
  Filter,
  MessageCircle,
  Heart,
  Sparkles,
} from 'lucide-react';
import { useUser } from '../context/UserContext';

interface Phrase {
  id: string;
  en: string;
  es: string;
  category: string;
  situation: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  isFavorite?: boolean;
  example?: string;
  note?: string;
}

const phraseBank: Phrase[] = [
  // Greetings & Introductions
  { id: '1', en: 'How are you doing?', es: '¿Cómo te va?', category: 'Greetings', situation: 'Casual', level: 'A1' },
  { id: '2', en: 'Nice to meet you!', es: '¡Mucho gusto!', category: 'Greetings', situation: 'Formal', level: 'A1' },
  { id: '3', en: 'Long time no see!', es: '¡Cuánto tiempo sin verte!', category: 'Greetings', situation: 'Casual', level: 'A2' },
  { id: '4', en: 'How have you been?', es: '¿Cómo has estado?', category: 'Greetings', situation: 'Casual', level: 'A2' },
  { id: '5', en: 'It\'s a pleasure to meet you.', es: 'Es un placer conocerle.', category: 'Greetings', situation: 'Formal', level: 'B1' },
  
  // Small Talk
  { id: '6', en: 'What do you do for a living?', es: '¿A qué te dedicas?', category: 'Small Talk', situation: 'Casual', level: 'A2' },
  { id: '7', en: 'How was your weekend?', es: '¿Qué tal tu fin de semana?', category: 'Small Talk', situation: 'Casual', level: 'A2' },
  { id: '8', en: 'Have you been here before?', es: '¿Has estado aquí antes?', category: 'Small Talk', situation: 'Casual', level: 'A2' },
  { id: '9', en: 'What brings you here?', es: '¿Qué te trae por aquí?', category: 'Small Talk', situation: 'Casual', level: 'B1' },
  { id: '10', en: 'I couldn\'t agree more.', es: 'Estoy totalmente de acuerdo.', category: 'Small Talk', situation: 'Formal', level: 'B1' },
  
  // Restaurant
  { id: '11', en: 'Can I have the menu, please?', es: '¿Me puede traer la carta, por favor?', category: 'Restaurant', situation: 'Formal', level: 'A1' },
  { id: '12', en: 'I\'d like to order...', es: 'Quisiera pedir...', category: 'Restaurant', situation: 'Formal', level: 'A1' },
  { id: '13', en: 'Could we have the bill, please?', es: '¿Nos puede traer la cuenta?', category: 'Restaurant', situation: 'Formal', level: 'A2' },
  { id: '14', en: 'Is there anything you recommend?', es: '¿Hay algo que recomiende?', category: 'Restaurant', situation: 'Formal', level: 'A2' },
  { id: '15', en: 'I\'m allergic to...', es: 'Soy alérgico/a a...', category: 'Restaurant', situation: 'Important', level: 'A2' },
  
  // Shopping
  { id: '16', en: 'How much does this cost?', es: '¿Cuánto cuesta esto?', category: 'Shopping', situation: 'Casual', level: 'A1' },
  { id: '17', en: 'Do you have this in another size?', es: '¿Tiene esto en otra talla?', category: 'Shopping', situation: 'Casual', level: 'A2' },
  { id: '18', en: 'Can I try this on?', es: '¿Puedo probarme esto?', category: 'Shopping', situation: 'Casual', level: 'A2' },
  { id: '19', en: 'I\'m just looking, thanks.', es: 'Solo estoy mirando, gracias.', category: 'Shopping', situation: 'Casual', level: 'A2' },
  { id: '20', en: 'Do you accept credit cards?', es: '¿Aceptan tarjetas de crédito?', category: 'Shopping', situation: 'Formal', level: 'A2' },
  
  // Travel
  { id: '21', en: 'Where is the nearest...?', es: '¿Dónde está el/la... más cercano/a?', category: 'Travel', situation: 'Casual', level: 'A1' },
  { id: '22', en: 'How do I get to...?', es: '¿Cómo llego a...?', category: 'Travel', situation: 'Casual', level: 'A2' },
  { id: '23', en: 'Is this seat taken?', es: '¿Está ocupado este asiento?', category: 'Travel', situation: 'Formal', level: 'A2' },
  { id: '24', en: 'What time does the train leave?', es: '¿A qué hora sale el tren?', category: 'Travel', situation: 'Formal', level: 'A2' },
  { id: '25', en: 'I\'d like to book a room.', es: 'Quisiera reservar una habitación.', category: 'Travel', situation: 'Formal', level: 'B1' },
  
  // Work
  { id: '26', en: 'I\'ll get back to you on that.', es: 'Te respondo sobre eso.', category: 'Work', situation: 'Formal', level: 'B1' },
  { id: '27', en: 'Let me know if you need anything.', es: 'Avísame si necesitas algo.', category: 'Work', situation: 'Formal', level: 'B1' },
  { id: '28', en: 'Could you clarify that, please?', es: '¿Podría aclarar eso, por favor?', category: 'Work', situation: 'Formal', level: 'B1' },
  { id: '29', en: 'I\'ll follow up with you later.', es: 'Te contacto más tarde.', category: 'Work', situation: 'Formal', level: 'B2' },
  { id: '30', en: 'We\'re on the same page.', es: 'Estamos en la misma sintonía.', category: 'Work', situation: 'Formal', level: 'B2' },
  
  // Expressing Opinions
  { id: '31', en: 'In my opinion...', es: 'En mi opinión...', category: 'Opinions', situation: 'Formal', level: 'A2' },
  { id: '32', en: 'I think that...', es: 'Creo que...', category: 'Opinions', situation: 'Casual', level: 'A1' },
  { id: '33', en: 'As far as I\'m concerned...', es: 'En lo que a mí respecta...', category: 'Opinions', situation: 'Formal', level: 'B2' },
  { id: '34', en: 'I see your point, but...', es: 'Entiendo tu punto, pero...', category: 'Opinions', situation: 'Formal', level: 'B1' },
  { id: '35', en: 'That\'s a good point.', es: 'Es un buen punto.', category: 'Opinions', situation: 'Formal', level: 'B1' },
  
  // Emotions
  { id: '36', en: 'I\'m so happy for you!', es: '¡Me alegro mucho por ti!', category: 'Emotions', situation: 'Casual', level: 'A2' },
  { id: '37', en: 'That\'s a relief!', es: '¡Qué alivio!', category: 'Emotions', situation: 'Casual', level: 'B1' },
  { id: '38', en: 'I can\'t believe it!', es: '¡No puedo creerlo!', category: 'Emotions', situation: 'Casual', level: 'A2' },
  { id: '39', en: 'I\'m over the moon!', es: '¡Estoy en las nubes!', category: 'Emotions', situation: 'Casual', level: 'B1' },
  { id: '40', en: 'That\'s a shame.', es: 'Qué pena.', category: 'Emotions', situation: 'Casual', level: 'A2' },
  
  // Help & Emergencies
  { id: '41', en: 'Could you help me, please?', es: '¿Podría ayudarme, por favor?', category: 'Help', situation: 'Formal', level: 'A1' },
  { id: '42', en: 'I need help!', es: '¡Necesito ayuda!', category: 'Help', situation: 'Emergency', level: 'A1' },
  { id: '43', en: 'Is there a doctor nearby?', es: '¿Hay un médico cerca?', category: 'Help', situation: 'Emergency', level: 'A2' },
  { id: '44', en: 'I\'ve lost my wallet.', es: 'He perdido mi cartera.', category: 'Help', situation: 'Emergency', level: 'A2' },
  { id: '45', en: 'Please call the police.', es: 'Por favor, llame a la policía.', category: 'Help', situation: 'Emergency', level: 'A2' },
  
  // Polite Expressions
  { id: '46', en: 'Excuse me.', es: 'Disculpe.', category: 'Polite', situation: 'Formal', level: 'A1' },
  { id: '47', en: 'I\'m sorry to bother you.', es: 'Siento molestarte.', category: 'Polite', situation: 'Formal', level: 'B1' },
  { id: '48', en: 'Would you mind if...?', es: '¿Te importaría si...?', category: 'Polite', situation: 'Formal', level: 'B1' },
  { id: '49', en: 'I appreciate your help.', es: 'Agradezco tu ayuda.', category: 'Polite', situation: 'Formal', level: 'B1' },
  { id: '50', en: 'That\'s very kind of you.', es: 'Es muy amable de tu parte.', category: 'Polite', situation: 'Formal', level: 'B1' },
];

const categories = ['All', 'Greetings', 'Small Talk', 'Restaurant', 'Shopping', 'Travel', 'Work', 'Opinions', 'Emotions', 'Help', 'Polite'];
const levels = ['All', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const situations = ['All', 'Casual', 'Formal', 'Emergency', 'Important'];

export default function PhrasesBank() {
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedSituation, setSelectedSituation] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    if (!user) return new Set();
    const saved = localStorage.getItem(`phrases_favorites_${user.id}`);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Filter phrases
  const filteredPhrases = useMemo(() => {
    return phraseBank.filter(phrase => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!phrase.en.toLowerCase().includes(query) && 
            !phrase.es.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'All' && phrase.category !== selectedCategory) {
        return false;
      }

      // Level filter
      if (selectedLevel !== 'All' && phrase.level !== selectedLevel) {
        return false;
      }

      // Situation filter
      if (selectedSituation !== 'All' && phrase.situation !== selectedSituation) {
        return false;
      }

      // Favorites filter
      if (showOnlyFavorites && !favorites.has(phrase.id)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedLevel, selectedSituation, showOnlyFavorites, favorites]);

  // Group by category
  const groupedPhrases = useMemo(() => {
    if (selectedCategory !== 'All') {
      return { [selectedCategory]: filteredPhrases };
    }
    return filteredPhrases.reduce((acc, phrase) => {
      if (!acc[phrase.category]) acc[phrase.category] = [];
      acc[phrase.category].push(phrase);
      return acc;
    }, {} as Record<string, Phrase[]>);
  }, [filteredPhrases, selectedCategory]);

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
    localStorage.setItem(`phrases_favorites_${user.id}`, JSON.stringify([...newFavorites]));
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

  // Copy phrase
  const copyPhrase = (phrase: Phrase) => {
    navigator.clipboard.writeText(phrase.en);
    setCopiedId(phrase.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!user) return null;

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="heading-2 text-white mb-2">💬 Banco de Frases</h1>
        <p className="text-gray-400">
          Frases útiles para situaciones cotidianas
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
              placeholder="Buscar frases..."
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
              <div className="grid md:grid-cols-3 gap-4">
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

                {/* Situation */}
                <div>
                  <label className="form-label">Situación</label>
                  <select
                    value={selectedSituation}
                    onChange={(e) => setSelectedSituation(e.target.value)}
                    className="input-field"
                  >
                    {situations.map(sit => (
                      <option key={sit} value={sit}>{sit === 'All' ? 'Todas' : sit}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500">
        {filteredPhrases.length} frase{filteredPhrases.length !== 1 ? 's' : ''} encontrada{filteredPhrases.length !== 1 ? 's' : ''}
      </p>

      {/* Phrases by category */}
      {filteredPhrases.length === 0 ? (
        <div className="card text-center py-12">
          <MessageCircle className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">No se encontraron frases</p>
          <p className="text-sm text-gray-500">Intenta ajustar los filtros</p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedPhrases).map(([category, phrases]) => (
            <div key={category}>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-primary" />
                {category}
                <span className="text-sm font-normal text-gray-500">({phrases.length})</span>
              </h2>
              
              <div className="space-y-2">
                {phrases.map((phrase) => (
                  <motion.div
                    key={phrase.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card group hover:border-accent-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-white font-medium">{phrase.en}</p>
                        <p className="text-gray-400 text-sm">{phrase.es}</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-2 py-0.5 bg-accent-primary/20 text-accent-primary text-xs rounded">
                            {phrase.level}
                          </span>
                          <span className={`px-2 py-0.5 text-xs rounded ${
                            phrase.situation === 'Emergency' ? 'bg-red-500/20 text-red-400' :
                            phrase.situation === 'Formal' ? 'bg-blue-500/20 text-blue-400' :
                            phrase.situation === 'Important' ? 'bg-amber-500/20 text-amber-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {phrase.situation}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => speak(phrase.en)}
                          className="p-2 rounded-lg hover:bg-dark-600 text-gray-400 hover:text-white"
                          title="Escuchar"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => copyPhrase(phrase)}
                          className="p-2 rounded-lg hover:bg-dark-600 text-gray-400 hover:text-white"
                          title="Copiar"
                        >
                          {copiedId === phrase.id ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => toggleFavorite(phrase.id)}
                          className={`p-2 rounded-lg hover:bg-dark-600 ${
                            favorites.has(phrase.id) ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                          }`}
                          title={favorites.has(phrase.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                        >
                          <Heart className={`w-4 h-4 ${favorites.has(phrase.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
