import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, HelpCircle, Volume2 } from 'lucide-react';
import type { Word } from '../../types';
import type { ActivitySessionResult } from '../../types';
import { useUser } from '../../context/UserContext';

interface FillBlanksProps {
  words: Word[];
  onComplete: (result: ActivitySessionResult) => void;
  onBack: () => void;
  levelId?: number;
  taskId?: number;
}

interface Question {
  word: Word;
  sentence: string;
  sentenceEs?: string;
  blank: string;
  hint: string;
}

export default function FillBlanks({ words, onComplete, onBack, levelId, taskId }: FillBlanksProps) {
  const { updateBatchWordProgress, user } = useUser();
  const isAdmin = user?.isAdmin === true;
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showHint, setShowHint] = useState(false);
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
    const wordsWithExamples = words.filter(w => w.example && w.example.length > 0);
    const shuffled = wordsWithExamples.sort(() => Math.random() - 0.5).slice(0, 8);

    const generated: Question[] = shuffled.map(word => {
      // Create blank in the example sentence
      const sentence = word.example;
      const sentenceEs = word.exampleEs;
      const blank = word.word;
      
      // Create hint (first letter + underscores)
      const hint = blank.charAt(0) + '_'.repeat(blank.length - 1);

      return { word, sentence, sentenceEs, blank, hint };
    });

    setQuestions(generated);
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const checkAnswer = () => {
    const currentQuestion = questions[currentIndex];
    const correct = userAnswer.toLowerCase().trim() === currentQuestion.blank.toLowerCase();

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
      setShowHint(false);
    } else {
      setShowFinalResults(true);
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
      activityId: 'fill',
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
    setShowHint(false);
    setScore({ correct: 0, incorrect: 0 });
    setShowFinalResults(false);
  };

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <p className="text-gray-400 mb-4">No hay suficientes palabras con ejemplos para esta actividad.</p>
        <button onClick={onBack} className="btn-secondary">Volver</button>
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
          <div className="text-6xl mb-6">✏️</div>
          <h2 className="heading-2 text-white mb-4">¡Completado!</h2>
          
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
            <button onClick={restart} className="btn-secondary">Intentar de Nuevo</button>
            {(accuracy >= 70 || isAdmin) && (
              <button onClick={finish} className="btn-primary">Continuar</button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  // Create display sentence with blank
  const displaySentence = currentQuestion.sentence.replace(
    new RegExp(currentQuestion.blank, 'gi'),
    '_____'
  );

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
            <p className="text-sm text-gray-400">Completar Oraciones</p>
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
          {/* Type and translation */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/20 text-accent-primary">
              {currentQuestion.word.type}
            </span>
            <span className="text-gray-400">→</span>
            <span className="text-yellow-400 font-medium">{currentQuestion.word.translation}</span>
          </div>

          <p className="text-xl text-white mb-6">
            Completa la oración con la palabra correcta en <span className="text-blue-400 font-bold">inglés</span>:
          </p>

          {/* Sentence to complete */}
          <div className="bg-dark-700/50 p-4 rounded-lg mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-blue-400 text-sm font-bold">EN</span>
              <button
                onClick={() => speak(currentQuestion.sentence)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-lg text-white italic">
              "{displaySentence}"
            </p>
            {currentQuestion.sentenceEs && (
              <div className="mt-3 pt-3 border-t border-dark-500">
                <span className="text-yellow-400 text-sm font-bold">ES</span>
                <p className="text-gray-400 text-sm italic mt-1">
                  "{currentQuestion.sentenceEs}"
                </p>
              </div>
            )}
          </div>

          {!showResult ? (
            <div className="space-y-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && userAnswer.trim() && checkAnswer()}
                placeholder="Escribe la palabra que falta..."
                className="input-field text-lg text-center"
                autoFocus
              />

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <HelpCircle className="w-5 h-5" />
                  <span className="text-sm">Pista</span>
                </button>

                <button
                  onClick={checkAnswer}
                  disabled={!userAnswer.trim()}
                  className="btn-primary"
                >
                  Comprobar
                </button>
              </div>

              {showHint && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-accent-primary"
                >
                  💡 Pista: La palabra comienza con "{currentQuestion.hint}"
                </motion.p>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
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
                      La respuesta correcta era: <strong className="text-white">{currentQuestion.blank}</strong>
                    </p>
                  )}
                </div>
              </div>

              {/* Full word info */}
              <div className="p-4 bg-dark-700/50 rounded-lg mb-4 text-left">
                <div className="mb-2">
                  <span className="text-blue-400 font-bold">EN:</span>{' '}
                  <span className="text-white font-medium">{currentQuestion.word.word}</span>
                  <span className="text-gray-500"> → </span>
                  <span className="text-yellow-400 font-bold">ES:</span>{' '}
                  <span className="text-gray-300">{currentQuestion.word.translation}</span>
                </div>
                <p className="text-sm text-gray-400">{currentQuestion.word.definition}</p>
              </div>

              <button onClick={nextQuestion} className="btn-primary w-full text-lg py-3">
                {currentIndex < questions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
