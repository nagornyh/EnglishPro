import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, Volume2 } from 'lucide-react';
import type { Word } from '../../types';
import type { ActivitySessionResult } from '../../types';
import { useUser } from '../../context/UserContext';
import { PronunciationHint } from '../PronunciationHint';

interface MultipleChoiceProps {
  words: Word[];
  onComplete: (result: ActivitySessionResult) => void;
  onBack: () => void;
  levelId?: number;
  taskId?: number;
}

interface Question {
  word: Word;
  options: string[];
  correctAnswer: string;
  type: 'word-to-translation' | 'translation-to-word' | 'definition';
}

export default function MultipleChoice({ words, onComplete, onBack, levelId, taskId }: MultipleChoiceProps) {
  const { updateBatchWordProgress, user } = useUser();
  const isAdmin = user?.isAdmin === true;
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showResults, setShowResults] = useState(false);
  const [correctWordIds, setCorrectWordIds] = useState<string[]>([]);
  const [incorrectWordIds, setIncorrectWordIds] = useState<string[]>([]);

  useEffect(() => {
    generateQuestions();
  }, [words]);

  const generateQuestions = () => {
    setStartedAt(Date.now());
    setCorrectWordIds([]);
    setIncorrectWordIds([]);
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    const generatedQuestions: Question[] = shuffledWords.slice(0, 10).map((word, index) => {
      const types: Question['type'][] = ['word-to-translation', 'translation-to-word', 'definition'];
      const type = types[index % 3];

      let correctAnswer: string;
      let wrongAnswers: string[];

      switch (type) {
        case 'word-to-translation':
          correctAnswer = word.translation;
          wrongAnswers = words
            .filter(w => w.id !== word.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(w => w.translation);
          break;
        case 'translation-to-word':
          correctAnswer = word.word;
          wrongAnswers = words
            .filter(w => w.id !== word.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(w => w.word);
          break;
        case 'definition':
          correctAnswer = word.word;
          wrongAnswers = words
            .filter(w => w.id !== word.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(w => w.word);
          break;
      }

      const options = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);

      return { word, options, correctAnswer, type };
    });

    setQuestions(generatedQuestions);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;

    const currentQuestion = questions[currentIndex];
    const correct = answer === currentQuestion.correctAnswer;

    setSelectedAnswer(answer);
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      setCorrectWordIds(prev => [...prev, currentQuestion.word.id]);
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setIncorrectWordIds(prev => [...prev, currentQuestion.word.id]);
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResults(true);
      }
    }, 1500);
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const finish = () => {
    const xpEarned = score.correct * 15 + score.incorrect * 3;
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
      activityId: 'quiz',
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
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore({ correct: 0, incorrect: 0 });
    setShowResults(false);
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner" />
      </div>
    );
  }

  if (showResults) {
    const accuracy = Math.round((score.correct / questions.length) * 100);
    const xpEarned = score.correct * 15 + score.incorrect * 3;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh]"
      >
        <div className="w-full max-w-4xl text-center">
          <div className="text-6xl mb-6">
            {accuracy >= 80 ? '🏆' : accuracy >= 50 ? '🎯' : '📚'}
          </div>
          <h2 className="heading-2 text-white mb-4">¡Quiz Completado!</h2>
          
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

  const getQuestionContent = () => {
    switch (currentQuestion.type) {
      case 'word-to-translation':
        return {
          label: 'Inglés → Español',
          labelColor: 'text-blue-400',
          prompt: '¿Cuál es la traducción?',
          mainWord: currentQuestion.word.word,
          mainLang: 'EN',
          isEnglish: true
        };
      case 'translation-to-word':
        return {
          label: 'Español → Inglés',
          labelColor: 'text-yellow-400',
          prompt: '¿Cuál es la palabra en inglés?',
          mainWord: currentQuestion.word.translation,
          mainLang: 'ES',
          isEnglish: false
        };
      case 'definition':
        return {
          label: 'Definición',
          labelColor: 'text-purple-400',
          prompt: '¿Qué palabra significa esto?',
          mainWord: currentQuestion.word.definition,
          mainLang: 'EN',
          secondaryWord: currentQuestion.word.definitionEs,
          isEnglish: true
        };
    }
  };

  const questionContent = getQuestionContent();
  const englishOptionHints =
    currentQuestion.type === 'translation-to-word' || currentQuestion.type === 'definition';

  return (
    <div className="flex flex-col py-4">
      <div className="w-full max-w-6xl mx-auto pb-28">
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
            <p className="text-sm text-gray-400">Quiz</p>
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
            initial={{ width: 0 }}
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
          {/* Type Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-dark-600 ${questionContent.labelColor}`}>
              {questionContent.label}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/20 text-accent-primary">
              {currentQuestion.word.type}
            </span>
          </div>

          {/* Question Prompt */}
          <p className="text-gray-400 mb-4">{questionContent.prompt}</p>

          {/* Main Word Display */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className={`text-sm font-bold ${questionContent.isEnglish ? 'text-blue-400' : 'text-yellow-400'}`}>
              {questionContent.mainLang}
            </span>
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-3xl font-bold text-white">{questionContent.mainWord}</h2>
              {currentQuestion.type === 'word-to-translation' && (
                <PronunciationHint word={currentQuestion.word.word} />
              )}
            </div>
            {questionContent.isEnglish && (
              <button
                onClick={() => speak(currentQuestion.word.word)}
                className="p-2 text-gray-400 hover:text-white transition-colors self-start"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Secondary Word (for definitions) */}
          {questionContent.secondaryWord && (
            <p className="text-gray-400 mt-2 flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-sm font-bold">ES</span>
              {questionContent.secondaryWord}
            </p>
          )}
        </motion.div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrectOption = option === currentQuestion.correctAnswer;
            const showFeedback = selectedAnswer !== null;

            let bgColor = 'bg-dark-600 hover:bg-dark-500';
            let borderColor = 'border-dark-500';

            if (showFeedback) {
              if (isCorrectOption) {
                bgColor = 'bg-green-500/20';
                borderColor = 'border-green-500';
              } else if (isSelected && !isCorrectOption) {
                bgColor = 'bg-red-500/20';
                borderColor = 'border-red-500';
              }
            }

            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
                className={`
                  w-full p-4 rounded-xl text-center border-2 transition-all
                  ${bgColor} ${borderColor}
                  ${selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'}
                `}
              >
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="text-white font-medium text-lg">{option}</span>
                    {englishOptionHints && (
                      <span className="block min-h-[1.25rem]">
                        {showFeedback && <PronunciationHint word={option} forceShow className="text-xs opacity-90" />}
                      </span>
                    )}
                  </div>
                  {showFeedback && isCorrectOption && (
                    <Check className="w-5 h-5 text-green-400" />
                  )}
                  {showFeedback && isSelected && !isCorrectOption && (
                    <X className="w-5 h-5 text-red-400" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Feedback */}
        {selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`
              mt-6 p-4 rounded-xl text-center
              ${isCorrect ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}
            `}
          >
            {isCorrect ? (
              <p className="font-semibold text-green-400">¡Correcto! 🎉</p>
            ) : (
              <div>
                <p className="font-semibold text-red-400 mb-2">Incorrecto 😕</p>
                <p className="text-gray-300">
                  La respuesta correcta era: <span className="text-white font-bold">{currentQuestion.correctAnswer}</span>
                </p>
                {currentQuestion.type === 'word-to-translation' && (
                  <p className="text-gray-400 text-sm mt-1">
                    <span className="text-blue-400">EN</span> {currentQuestion.word.word} → <span className="text-yellow-400">ES</span> {currentQuestion.word.translation}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
