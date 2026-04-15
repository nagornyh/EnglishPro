import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import type { Word } from '../../types';
import type { ActivitySessionResult } from '../../types';
import { useUser } from '../../context/UserContext';

interface MatchPairsProps {
  words: Word[];
  onComplete: (result: ActivitySessionResult) => void;
  onBack: () => void;
  levelId?: number;
  taskId?: number;
}

interface Card {
  id: string;
  content: string;
  type: 'word' | 'translation';
  wordId: string;
  matched: boolean;
}

export default function MatchPairs({ words, onComplete, onBack, levelId, taskId }: MatchPairsProps) {
  const { updateBatchWordProgress } = useUser();
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [attempts, setAttempts] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [roundWordIds, setRoundWordIds] = useState<string[]>([]);

  useEffect(() => {
    initializeGame();
  }, [words]);

  const initializeGame = () => {
    setStartedAt(Date.now());
    const selectedWords = words.slice(0, 6); // 6 pairs = 12 cards
    setRoundWordIds(selectedWords.map(w => w.id));
    const gameCards: Card[] = [];

    selectedWords.forEach(word => {
      gameCards.push({
        id: `word-${word.id}`,
        content: word.word,
        type: 'word',
        wordId: word.id,
        matched: false,
      });
      gameCards.push({
        id: `trans-${word.id}`,
        content: word.translation,
        type: 'translation',
        wordId: word.id,
        matched: false,
      });
    });

    setCards(gameCards.sort(() => Math.random() - 0.5));
    setSelectedCards([]);
    setMatchedPairs(new Set());
    setAttempts(0);
    setShowResults(false);
  };

  const handleCardClick = (cardId: string) => {
    if (isChecking) return;
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.matched || selectedCards.includes(cardId)) return;

    const newSelected = [...selectedCards, cardId];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setIsChecking(true);
      setAttempts(prev => prev + 1);

      const [first, second] = newSelected.map(id => cards.find(c => c.id === id)!);

      setTimeout(() => {
        if (first.wordId === second.wordId && first.type !== second.type) {
          // Match found
          setMatchedPairs(prev => new Set(prev).add(first.wordId));
          setCards(prev => 
            prev.map(c => 
              c.wordId === first.wordId ? { ...c, matched: true } : c
            )
          );

          // Check if game is complete
          if (matchedPairs.size + 1 === roundWordIds.length) {
            setTimeout(() => setShowResults(true), 500);
          }
        }

        setSelectedCards([]);
        setIsChecking(false);
      }, 800);
    }
  };

  const finish = () => {
    const maxAttempts = 6 * 3; // 6 pairs, max 3 attempts each for decent score
    const efficiency = Math.max(0, 1 - (attempts - 6) / maxAttempts);
    const xpEarned = Math.round(matchedPairs.size * 20 * efficiency) + 10;
    const incorrect = Math.max(0, attempts - matchedPairs.size);
    const total = matchedPairs.size + incorrect;
    const accuracy = total > 0 ? Math.round((matchedPairs.size / total) * 100) : 0;
    const timeSpentSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

    // Update vocabulary progress (all matched pairs are correct)
    const results = roundWordIds.map(wordId => ({
      wordId,
      correct: true,
    }));
    updateBatchWordProgress(results, { levelId, taskId });

    onComplete({
      activityId: 'match',
      xpEarned,
      correct: matchedPairs.size,
      incorrect,
      skipped: 0,
      accuracy,
      timeSpentSeconds,
      wordsReviewed: roundWordIds,
      correctWordIds: roundWordIds,
      incorrectWordIds: [],
    });
  };

  if (showResults) {
    const efficiency = Math.round(((6 / attempts) * 100));
    const xpEarned = Math.round(matchedPairs.size * 20 * (efficiency / 100)) + 10;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh]"
      >
        <div className="w-full max-w-2xl text-center">
          <div className="text-6xl mb-6">🧩</div>
          <h2 className="heading-2 text-white mb-4">¡Emparejamiento Completado!</h2>
          
          <div className="card mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-green-400">{matchedPairs.size}</p>
                <p className="text-sm text-gray-400">Parejas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">{attempts}</p>
                <p className="text-sm text-gray-400">Intentos</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">{Math.min(100, efficiency)}%</p>
                <p className="text-sm text-gray-400">Eficiencia</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 mb-6">
            <p className="text-lg text-white">
              <span className="text-2xl font-bold gradient-text">+{xpEarned}</span> XP ganados
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <button onClick={initializeGame} className="btn-secondary flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              Jugar de Nuevo
            </button>
            <button onClick={finish} className="btn-primary">
              Continuar
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
          
          <div className="text-center">
            <p className="text-sm text-gray-400">Emparejamiento</p>
            <p className="font-bold text-white">{matchedPairs.size} / 6 parejas</p>
          </div>

          <div className="text-sm text-gray-400">
            Intentos: {attempts}
          </div>
        </div>

        {/* Progress */}
        <div className="h-2 bg-dark-700 rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(matchedPairs.size / 6) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Instruction Card */}
        <div className="card bg-dark-700/50 mb-6 text-center">
          <p className="text-gray-300">
            Conecta cada palabra en <span className="text-blue-400 font-bold">inglés (EN)</span> con su traducción en <span className="text-yellow-400 font-bold">español (ES)</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {cards.map((card, index) => {
            const isSelected = selectedCards.includes(card.id);
            const isMatched = card.matched;
            const isEnglish = card.type === 'word';

            return (
              <motion.button
                key={card.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleCardClick(card.id)}
                disabled={isMatched || isChecking}
                className={`
                  p-4 rounded-xl text-center min-h-[100px] flex flex-col items-center justify-center transition-all
                  ${isMatched 
                    ? 'bg-green-500/20 border-2 border-green-500' 
                    : isSelected
                      ? 'bg-accent-primary/30 border-2 border-accent-primary'
                      : 'bg-dark-600 border-2 border-dark-500 hover:border-accent-primary/50'
                  }
                  ${isMatched || isChecking ? 'cursor-default' : 'cursor-pointer'}
                `}
              >
                {/* Language tag */}
                <span className={`
                  text-xs font-bold mb-2 px-2 py-0.5 rounded
                  ${isEnglish 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                  }
                `}>
                  {isEnglish ? 'EN' : 'ES'}
                </span>
                
                {/* Content */}
                <span className={`
                  text-base font-medium
                  ${isMatched ? 'text-green-400' : 'text-white'}
                  ${!isEnglish ? 'italic' : ''}
                `}>
                  {card.content}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Help text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          💡 Selecciona una carta EN y una carta ES que sean traducciones
        </p>
      </div>
    </div>
  );
}
