import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RotateCcw,
  Volume2,
  Check,
  Clock,
  Trophy,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import srsService from '../services/spacedRepetition';
import type { ReviewCard } from '../types/srs';
import { REVIEW_QUALITIES } from '../types/srs';

export default function ReviewSession() {
  const { user, addXP } = useUser();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionStats, setSessionStats] = useState({
    reviewed: 0,
    correct: 0,
    startTime: Date.now(),
  });
  const [isComplete, setIsComplete] = useState(false);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    loadCards();
    loadStats();
  }, [user?.id]);

  const loadCards = async () => {
    if (!user?.id) return;
    setLoading(true);
    await srsService.init();
    
    // Get due cards and new cards
    const dueCards = await srsService.getDueCards(user.id);
    const newCards = await srsService.getNewCards(10);
    
    // Combine, deduplicate
    const allCards = [...dueCards, ...newCards.filter(
      nc => !dueCards.some(dc => dc.id === nc.id)
    )];
    
    // Fisher-Yates shuffle for uniform random distribution
    for (let i = allCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
    }
    setCards(allCards);
    setLoading(false);
  };

  const loadStats = async () => {
    const s = await srsService.getStats();
    setStats(s);
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const handleQualityRating = async (quality: number) => {
    const currentCard = cards[currentIndex];
    if (!currentCard) return;
    
    // Update card with SRS algorithm
    await srsService.reviewCard(currentCard.id, quality);
    
    // Update session stats
    setSessionStats(prev => ({
      ...prev,
      reviewed: prev.reviewed + 1,
      correct: quality >= 3 ? prev.correct + 1 : prev.correct,
    }));
    
    // Move to next card
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      // Session complete
      completeSession();
    }
  };

  const completeSession = async () => {
    setIsComplete(true);
    
    // Calculate XP earned
    const xpEarned = sessionStats.reviewed * 5 + sessionStats.correct * 3;
    if (user) {
      await addXP(xpEarned);
    }
    
    // Refresh stats
    await loadStats();
  };

  const currentCard = cards[currentIndex];
  const progress = cards.length > 0 ? ((currentIndex) / cards.length) * 100 : 0;
  const accuracy = sessionStats.reviewed > 0 
    ? Math.round((sessionStats.correct / sessionStats.reviewed) * 100) 
    : 0;

  if (loading) {
    return (
      <div className="w-full">
        <div className="card animate-pulse">
          <div className="h-8 bg-dark-600 rounded w-1/3 mb-6"></div>
          <div className="h-48 bg-dark-600 rounded mb-4"></div>
          <div className="h-12 bg-dark-600 rounded"></div>
        </div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="w-full">
        <div className="card text-center py-12">
          <Sparkles className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">¡Todo repasado!</h2>
          <p className="text-gray-400 mb-6">
            No tienes tarjetas pendientes de repasar hoy.
          </p>
          
          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-dark-700 rounded-xl">
                <p className="text-2xl font-bold text-accent-primary">{stats.totalCards}</p>
                <p className="text-sm text-gray-400">Total tarjetas</p>
              </div>
              <div className="p-4 bg-dark-700 rounded-xl">
                <p className="text-2xl font-bold text-green-400">{stats.mature}</p>
                <p className="text-sm text-gray-400">Aprendidas</p>
              </div>
              <div className="p-4 bg-dark-700 rounded-xl">
                <p className="text-2xl font-bold text-amber-400">{stats.learning}</p>
                <p className="text-sm text-gray-400">Aprendiendo</p>
              </div>
              <div className="p-4 bg-dark-700 rounded-xl">
                <p className="text-2xl font-bold text-blue-400">{Math.round(stats.retention)}%</p>
                <p className="text-sm text-gray-400">Retención</p>
              </div>
            </div>
          )}
          
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate('/')}
              className="btn-secondary"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>
            <button
              onClick={() => navigate('/practice')}
              className="btn-primary"
            >
              Practicar más
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const duration = Math.round((Date.now() - sessionStats.startTime) / 1000 / 60);
    const xpEarned = sessionStats.reviewed * 5 + sessionStats.correct * 3;
    
    return (
      <div className="w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="card text-center py-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-white mb-2">¡Sesión completada!</h2>
          <p className="text-gray-400 mb-6">Excelente trabajo repasando tu vocabulario</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-dark-700 rounded-xl">
              <p className="text-2xl font-bold text-white">{sessionStats.reviewed}</p>
              <p className="text-sm text-gray-400">Repasadas</p>
            </div>
            <div className="p-4 bg-dark-700 rounded-xl">
              <p className="text-2xl font-bold text-green-400">{accuracy}%</p>
              <p className="text-sm text-gray-400">Precisión</p>
            </div>
            <div className="p-4 bg-dark-700 rounded-xl">
              <p className="text-2xl font-bold text-purple-400">{duration}m</p>
              <p className="text-sm text-gray-400">Duración</p>
            </div>
            <div className="p-4 bg-dark-700 rounded-xl">
              <p className="text-2xl font-bold text-yellow-400">+{xpEarned}</p>
              <p className="text-sm text-gray-400">XP ganados</p>
            </div>
          </div>
          
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate('/')}
              className="btn-secondary"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>
            <button
              onClick={() => {
                setIsComplete(false);
                setCurrentIndex(0);
                setShowAnswer(false);
                setSessionStats({ reviewed: 0, correct: 0, startTime: Date.now() });
                loadCards();
              }}
              className="btn-primary"
            >
              <RotateCcw className="w-5 h-5" />
              Otra sesión
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="p-2 rounded-lg hover:bg-dark-700 text-gray-400"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-gray-400">
              {Math.round((Date.now() - sessionStats.startTime) / 1000 / 60)}m
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-500" />
            <span className="text-gray-400">{sessionStats.correct}/{sessionStats.reviewed}</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="text-center text-sm text-gray-500">
        {currentIndex + 1} de {cards.length}
      </p>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.id}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          className="card min-h-[300px] flex flex-col"
        >
          {/* Card type badge */}
          <div className="flex justify-between items-center mb-4">
            <span className={`px-2 py-1 rounded text-xs ${
              currentCard.type === 'vocabulary' ? 'bg-blue-500/20 text-blue-400' :
              currentCard.type === 'grammar' ? 'bg-purple-500/20 text-purple-400' :
              currentCard.type === 'phrase' ? 'bg-green-500/20 text-green-400' :
              'bg-amber-500/20 text-amber-400'
            }`}>
              {currentCard.type}
            </span>
            
            <button
              onClick={() => speak(currentCard.front.text)}
              className="p-2 rounded-lg hover:bg-dark-600 text-gray-400"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          {/* Front of card */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {currentCard.front.text}
            </h2>
            
            {!showAnswer && (
              <button
                onClick={() => setShowAnswer(true)}
                className="btn-primary mt-4"
              >
                Mostrar respuesta
              </button>
            )}
          </div>

          {/* Back of card (answer) */}
          <AnimatePresence>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-dark-600 pt-4 mt-4"
              >
                <p className="text-xl text-accent-primary text-center mb-2">
                  {currentCard.back.translation}
                </p>
                
                {currentCard.back.example && (
                  <p className="text-gray-400 text-center italic">
                    "{currentCard.back.example}"
                  </p>
                )}
                
                {currentCard.back.notes && (
                  <p className="text-sm text-gray-500 text-center mt-2">
                    💡 {currentCard.back.notes}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Quality rating buttons */}
      {showAnswer && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <p className="text-center text-gray-400 text-sm">¿Qué tan bien lo recordaste?</p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {REVIEW_QUALITIES.map((quality) => (
              <button
                key={quality.value}
                onClick={() => handleQualityRating(quality.value)}
                className={`p-3 rounded-xl border-2 transition-all hover:scale-105 ${
                  quality.value < 3 
                    ? 'border-red-500/30 bg-red-500/10 hover:bg-red-500/20' 
                    : quality.value < 4
                    ? 'border-yellow-500/30 bg-yellow-500/10 hover:bg-yellow-500/20'
                    : 'border-green-500/30 bg-green-500/10 hover:bg-green-500/20'
                }`}
              >
                <p className={`text-lg font-bold ${
                  quality.value < 3 ? 'text-red-400' :
                  quality.value < 4 ? 'text-yellow-400' : 'text-green-400'
                }`}>
                  {quality.value}
                </p>
                <p className="text-xs text-gray-400 mt-1 hidden md:block">
                  {quality.label}
                </p>
              </button>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 text-xs text-gray-500">
            <span>0-2: Olvidé / Difícil</span>
            <span>3-5: Recordé / Fácil</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
