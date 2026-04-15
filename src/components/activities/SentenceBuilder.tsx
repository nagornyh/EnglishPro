import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, RotateCcw, Volume2 } from 'lucide-react';
import type { Word } from '../../types';
import type { ActivitySessionResult } from '../../types';
import { useUser } from '../../context/UserContext';

interface SentenceBuilderProps {
  words: Word[];
  onComplete: (result: ActivitySessionResult) => void;
  onBack: () => void;
  levelId?: number;
  taskId?: number;
}

interface Sentence {
  original: string;
  translationEs: string;
  words: string[];
  wordData: Word;
}

export default function SentenceBuilder({ words, onComplete, onBack, levelId, taskId }: SentenceBuilderProps) {
  const { updateBatchWordProgress, user } = useUser();
  const isAdmin = user?.isAdmin === true;
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<number[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [correctWordIds, setCorrectWordIds] = useState<string[]>([]);
  const [incorrectWordIds, setIncorrectWordIds] = useState<string[]>([]);

  useEffect(() => {
    generateSentences();
  }, [words]);

  const generateSentences = () => {
    setStartedAt(Date.now());
    setCorrectWordIds([]);
    setIncorrectWordIds([]);
    const wordsWithExamples = words.filter(w => w.example && w.example.length > 10);
    const shuffled = wordsWithExamples.sort(() => Math.random() - 0.5).slice(0, 8);
    
    const generated: Sentence[] = shuffled.map(word => {
      // Clean and prepare the example sentence
      let sentence = word.example.replace(/["']/g, '').trim();
      // Remove punctuation at the end for word splitting
      const punctuation = sentence.match(/[.!?]$/)?.[0] || '.';
      sentence = sentence.replace(/[.!?]$/, '');
      
      const sentenceWords = sentence.split(' ').filter(w => w.length > 0);
      
      return {
        original: sentence + punctuation,
        translationEs: word.exampleEs || word.translation,
        words: sentenceWords,
        wordData: word
      };
    });

    setSentences(generated);
    if (generated.length > 0) {
      initializeRound(generated[0]);
    }
  };

  const initializeRound = (sentence: Sentence) => {
    const shuffledWords = [...sentence.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffledWords);
    setSelectedWords([]);
    setShowResult(false);
  };

  const handleWordClick = (index: number) => {
    if (showResult) return;
    
    if (selectedWords.includes(index)) {
      // Remove word
      setSelectedWords(selectedWords.filter(i => i !== index));
    } else {
      // Add word
      setSelectedWords([...selectedWords, index]);
    }
  };

  const checkAnswer = () => {
    const currentSentence = sentences[currentIndex];
    const userSentence = selectedWords.map(i => availableWords[i]).join(' ');
    const originalWords = currentSentence.words.join(' ');
    
    const correct = userSentence.toLowerCase() === originalWords.toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      setCorrectWordIds(prev => [...prev, currentSentence.wordData.id]);
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setIncorrectWordIds(prev => [...prev, currentSentence.wordData.id]);
    }
  };

  const nextSentence = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
      initializeRound(sentences[currentIndex + 1]);
    } else {
      setShowFinalResults(true);
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const finish = () => {
    const xpEarned = score.correct * 25 + score.incorrect * 5;
    const total = sentences.length;
    const accuracy = total > 0 ? Math.round((score.correct / total) * 100) : 0;
    const timeSpentSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

    // Update vocabulary progress
    const results = sentences.map(s => ({
      wordId: s.wordData.id,
      correct: correctWordIds.includes(s.wordData.id),
    }));
    updateBatchWordProgress(results, { levelId, taskId });

    onComplete({
      activityId: 'sentence',
      xpEarned,
      correct: score.correct,
      incorrect: score.incorrect,
      skipped: 0,
      accuracy,
      timeSpentSeconds,
      wordsReviewed: sentences.map(s => s.wordData.id),
      correctWordIds,
      incorrectWordIds,
    });
  };

  const restart = () => {
    generateSentences();
    setCurrentIndex(0);
    setScore({ correct: 0, incorrect: 0 });
    setShowFinalResults(false);
  };

  if (sentences.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <p className="text-gray-400 mb-4">No hay suficientes oraciones para esta actividad.</p>
        <button onClick={onBack} className="btn-secondary">Volver</button>
      </div>
    );
  }

  if (showFinalResults) {
    const accuracy = Math.round((score.correct / sentences.length) * 100);
    const xpEarned = score.correct * 25 + score.incorrect * 5;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh]"
      >
        <div className="w-full max-w-2xl text-center">
          <div className="text-6xl mb-6">🏗️</div>
          <h2 className="heading-2 text-white mb-4">¡Constructor Completado!</h2>
          
          <div className="card mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-green-400">{score.correct}</p>
                <p className="text-sm text-gray-400">Correctas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-400">{score.incorrect}</p>
                <p className="text-sm text-gray-400">Incorrectas</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">{accuracy}%</p>
                <p className="text-sm text-gray-400">Precisión</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 mb-6">
            <p className="text-lg text-white">
              <span className="text-2xl font-bold gradient-text">+{xpEarned}</span> XP ganados
            </p>
          </div>

          {(accuracy < 70 && !isAdmin) && (
            <p className="text-sm text-orange-400 font-medium">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3 justify-center">
            <button onClick={restart} className="btn-secondary flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              Jugar de Nuevo
            </button>
            {(accuracy >= 70 || isAdmin) && (
              <button onClick={finish} className="btn-primary">Continuar</button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  const currentSentence = sentences[currentIndex];
  const progress = ((currentIndex + 1) / sentences.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-6xl">
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
            <p className="text-sm text-gray-400">Constructor de Oraciones</p>
            <p className="font-bold text-white">{currentIndex + 1} / {sentences.length}</p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-green-400">{score.correct} ✓</span>
            <span className="text-red-400">{score.incorrect} ✗</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-dark-700 rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Instructions - Bilingual */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-6 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Ordena las palabras para formar la oración en <span className="text-blue-400">inglés</span>
          </h3>
          
          {/* Spanish hint */}
          <div className="p-4 bg-dark-700/50 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-yellow-400 font-bold text-sm">ES</span>
              <span className="text-gray-400 text-sm">Traducción:</span>
            </div>
            <p className="text-white text-lg italic">"{currentSentence.translationEs}"</p>
          </div>
          
          {/* Audio button */}
          <button
            onClick={() => speak(currentSentence.original)}
            className="mt-4 px-4 py-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2 mx-auto"
          >
            <Volume2 className="w-5 h-5" />
            <span className="text-sm">Escuchar pronunciación</span>
          </button>
        </motion.div>

        {/* User's sentence area */}
        <div className="min-h-[80px] p-4 bg-dark-700/50 rounded-xl mb-6 border-2 border-dashed border-dark-500">
          <div className="flex items-center gap-2 mb-2 justify-center">
            <span className="text-blue-400 font-bold text-sm">EN</span>
            <span className="text-gray-500 text-sm">Tu oración:</span>
          </div>
          {selectedWords.length > 0 ? (
            <div className="flex flex-wrap gap-2 justify-center">
              {selectedWords.map((wordIndex, i) => (
                <motion.button
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  onClick={() => handleWordClick(wordIndex)}
                  className="px-4 py-2 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/80 transition-colors"
                >
                  {availableWords[wordIndex]}
                </motion.button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">Toca las palabras abajo para construir la oración</p>
          )}
        </div>

        {/* Available words */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {availableWords.map((word, index) => {
            const isSelected = selectedWords.includes(index);
            
            return (
              <motion.button
                key={index}
                whileHover={{ scale: isSelected ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWordClick(index)}
                disabled={showResult}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all
                  ${isSelected 
                    ? 'bg-dark-700 text-dark-500 cursor-not-allowed' 
                    : 'bg-dark-600 text-white hover:bg-dark-500 cursor-pointer'
                  }
                `}
              >
                {word}
              </motion.button>
            );
          })}
        </div>

        {/* Actions */}
        {!showResult ? (
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                setSelectedWords([]);
              }}
              disabled={selectedWords.length === 0}
              className="btn-secondary"
            >
              Limpiar
            </button>
            <button
              onClick={checkAnswer}
              disabled={selectedWords.length !== availableWords.length}
              className="btn-primary"
            >
              Comprobar
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className={`
              p-4 rounded-xl mb-6 
              ${isCorrect ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}
            `}>
              <div className="flex items-center justify-center gap-2 mb-3">
                {isCorrect ? <Check className="w-6 h-6 text-green-400" /> : <X className="w-6 h-6 text-red-400" />}
                <p className={`font-semibold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect ? '¡Perfecto!' : 'Incorrecto'}
                </p>
              </div>
              
              {/* Show correct answer */}
              <div className="space-y-2">
                <p className="text-white">
                  <span className="text-blue-400 font-bold">EN:</span> {currentSentence.original}
                </p>
                <p className="text-gray-400">
                  <span className="text-yellow-400 font-bold">ES:</span> {currentSentence.translationEs}
                </p>
              </div>
            </div>

            <button onClick={nextSentence} className="btn-primary text-lg py-3 px-8">
              {currentIndex < sentences.length - 1 ? 'Siguiente' : 'Ver Resultados'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
