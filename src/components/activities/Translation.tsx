import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, Volume2, ArrowRightLeft } from 'lucide-react';
import type { Word } from '../../types';
import type { ActivitySessionResult } from '../../types';
import { useUser } from '../../context/UserContext';

interface TranslationProps {
  words: Word[];
  onComplete: (result: ActivitySessionResult) => void;
  onBack: () => void;
  levelId?: number;
  taskId?: number;
}

interface TranslationQuestion {
  word: Word;
  direction: 'en-to-es' | 'es-to-en';
  answer: string;
}

export default function Translation({ words, onComplete, onBack, levelId, taskId }: TranslationProps) {
  const { updateBatchWordProgress } = useUser();
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [questions, setQuestions] = useState<TranslationQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [correctWordIds, setCorrectWordIds] = useState<string[]>([]);
  const [incorrectWordIds, setIncorrectWordIds] = useState<string[]>([]);

  useEffect(() => {
    generateQuestions();
  }, [words]);

  const generateQuestions = () => {
    setStartedAt(Date.now());
    setCorrectWordIds([]);
    setIncorrectWordIds([]);
    const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, 10);
    const generated: TranslationQuestion[] = shuffled.map((word, index) => {
      const direction = index % 2 === 0 ? 'en-to-es' : 'es-to-en';
      return {
        word,
        direction,
        answer: direction === 'en-to-es' ? word.translation : word.word
      };
    });
    setQuestions(generated);
  };

  const normalizeAnswer = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/[.,!?;:'"]/g, ''); // Remove punctuation
  };

  const checkAnswer = () => {
    const currentQuestion = questions[currentIndex];
    const normalizedUser = normalizeAnswer(userAnswer);
    
    // Check if answer matches (allowing for some flexibility)
    const possibleAnswers = currentQuestion.answer.split(/[,/]/).map(a => normalizeAnswer(a.trim()));
    const correct = possibleAnswers.some(ans => 
      normalizedUser === ans || 
      normalizedUser.includes(ans) || 
      ans.includes(normalizedUser)
    );

    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      setCorrectWordIds(prev => [...prev, currentQuestion.word.id]);
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setIncorrectWordIds(prev => [...prev, currentQuestion.word.id]);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setShowResult(false);
    } else {
      setShowFinalResults(true);
    }
  };

  const speak = (text: string, lang: string = 'en-US') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      speechSynthesis.speak(utterance);
    }
  };

  const finish = () => {
    const xpEarned = score.correct * 20 + score.incorrect * 5;
    const total = questions.length;
    const accuracy = total > 0 ? Math.round((score.correct / total) * 100) : 0;
    const timeSpentSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

    // Update vocabulary progress
    const results = questions.map(q => ({
      wordId: q.word.id,
      correct: correctWordIds.includes(q.word.id),
    }));
    updateBatchWordProgress(results, { levelId, taskId });

    onComplete({
      activityId: 'translation',
      xpEarned,
      correct: score.correct,
      incorrect: score.incorrect,
      skipped: 0,
      accuracy,
      timeSpentSeconds,
      wordsReviewed: questions.map(q => q.word.id),
      correctWordIds,
      incorrectWordIds,
    });
  };

  const restart = () => {
    generateQuestions();
    setCurrentIndex(0);
    setUserAnswer('');
    setShowResult(false);
    setScore({ correct: 0, incorrect: 0 });
    setShowFinalResults(false);
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner" />
      </div>
    );
  }

  if (showFinalResults) {
    const accuracy = Math.round((score.correct / questions.length) * 100);
    const xpEarned = score.correct * 20 + score.incorrect * 5;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh]"
      >
        <div className="w-full max-w-2xl text-center">
          <div className="text-6xl mb-6">🌐</div>
          <h2 className="heading-2 text-white mb-4">¡Traducción Completada!</h2>
          
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

          {accuracy < 70 && (
            <p className="text-sm text-orange-400 font-medium">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3 justify-center">
            <button onClick={restart} className="btn-secondary">Intentar de Nuevo</button>
            {accuracy >= 70 && (
              <button onClick={finish} className="btn-primary">Continuar</button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const sourceText = currentQuestion.direction === 'en-to-es' 
    ? currentQuestion.word.word 
    : currentQuestion.word.translation;
  const isEnglishSource = currentQuestion.direction === 'en-to-es';

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
            <p className="text-sm text-gray-400">Traducción</p>
            <p className="font-bold text-white">{currentIndex + 1} / {questions.length}</p>
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

        {/* Question Card - Centered */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-6 text-center"
        >
          {/* Direction indicator */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
              isEnglishSource ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'
            }`}>
              {isEnglishSource ? 'EN' : 'ES'}
            </span>
            <ArrowRightLeft className="w-5 h-5 text-gray-500" />
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
              isEnglishSource ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'
            }`}>
              {isEnglishSource ? 'ES' : 'EN'}
            </span>
          </div>

          {/* Word to translate */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-4xl font-bold text-white">{sourceText}</h2>
              {isEnglishSource && (
                <button
                  onClick={() => speak(currentQuestion.word.word)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
              )}
            </div>
            <p className="text-sm text-gray-400 mt-2">
              ({currentQuestion.word.type})
            </p>
          </div>

          {!showResult ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Escribe la traducción en <span className={isEnglishSource ? 'text-yellow-400 font-bold' : 'text-blue-400 font-bold'}>
                    {isEnglishSource ? 'español' : 'inglés'}
                  </span>:
                </label>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && userAnswer.trim() && checkAnswer()}
                  placeholder={isEnglishSource ? 'Traducción en español...' : 'Translation in English...'}
                  className="input-field text-lg text-center"
                  autoFocus
                />
              </div>
              <button
                onClick={checkAnswer}
                disabled={!userAnswer.trim()}
                className="btn-primary w-full text-lg py-4"
              >
                Comprobar Respuesta
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Result */}
              <div className={`
                p-4 rounded-lg mb-4 flex items-center justify-center gap-3
                ${isCorrect ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}
              `}>
                {isCorrect ? <Check className="w-6 h-6 text-green-400" /> : <X className="w-6 h-6 text-red-400" />}
                <div>
                  <p className={`font-semibold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                  </p>
                  {!isCorrect && (
                    <p className="text-gray-300">
                      Respuesta correcta: <strong className="text-white">{currentQuestion.answer}</strong>
                    </p>
                  )}
                </div>
              </div>

              {/* Word info - bilingual */}
              <div className="p-4 bg-dark-700/50 rounded-lg mb-4 text-left">
                <p className="text-xs text-accent-primary uppercase font-bold mb-3 tracking-wider">Información adicional:</p>
                
                {/* Definition */}
                <div className="mb-3">
                  <p className="text-sm">
                    <span className="text-blue-400 font-bold">EN:</span>{' '}
                    <span className="text-white">{currentQuestion.word.definition}</span>
                  </p>
                  {currentQuestion.word.definitionEs && (
                    <p className="text-sm">
                      <span className="text-yellow-400 font-bold">ES:</span>{' '}
                      <span className="text-gray-400">{currentQuestion.word.definitionEs}</span>
                    </p>
                  )}
                </div>

                {/* Example */}
                <div className="p-3 bg-dark-600/50 rounded-lg">
                  <p className="text-sm">
                    <span className="text-blue-400 font-bold">EN:</span>{' '}
                    <span className="text-white italic">"{currentQuestion.word.example}"</span>
                  </p>
                  {currentQuestion.word.exampleEs && (
                    <p className="text-sm mt-1">
                      <span className="text-yellow-400 font-bold">ES:</span>{' '}
                      <span className="text-gray-400 italic">"{currentQuestion.word.exampleEs}"</span>
                    </p>
                  )}
                </div>
              </div>

              <button onClick={nextQuestion} className="btn-primary w-full text-lg py-4">
                {currentIndex < questions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
