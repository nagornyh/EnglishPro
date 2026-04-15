import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  Trophy,
  RefreshCw,
  Clock,
  Target,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import type { QuizQuestionItem } from '../../types';
import { useUser } from '../../context/UserContext';

interface ConsolidationQuizProps {
  questions: QuizQuestionItem[];
  taskTitle: string;
  passingScore?: number;
  timeLimit?: number;
  onComplete: (passed: boolean, score: number, totalPoints: number) => void;
  onBack: () => void;
}

export default function ConsolidationQuiz({
  questions,
  taskTitle: _taskTitle,
  passingScore = 70,
  timeLimit,
  onComplete,
  onBack
}: ConsolidationQuizProps) {
  void _taskTitle; // Reserved for future use
  const { user } = useUser();
  const isAdmin = user?.isAdmin === true;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [answers, setAnswers] = useState<{ questionId: string; answer: string; correct: boolean; points: number }[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit || 0);
  const [showReview, setShowReview] = useState(false);
  const [orderedItems, setOrderedItems] = useState<string[]>([]);
  // matching: { leftItem -> rightItem } map
  const [matchingPairs, setMatchingPairs] = useState<Record<string, string>>({});
  const [matchingLeftSelected, setMatchingLeftSelected] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];
  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
  const earnedPoints = answers.reduce((sum, a) => sum + (a.correct ? a.points : 0), 0);
  const scorePercentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
  const passed = scorePercentage >= passingScore;

  // Timer effect
  useEffect(() => {
    if (!timeLimit || showResults) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLimit, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Sync orderedItems → selectedAnswer for ordering questions
  useEffect(() => {
    if (currentQuestion?.type !== 'ordering') return;
    const total = currentQuestion.options?.length ?? 0;
    if (orderedItems.length === total && total > 0) {
      setSelectedAnswer(orderedItems.join('|||'));
    } else {
      setSelectedAnswer(null);
    }
  }, [orderedItems, currentIndex]);

  // Sync matchingPairs → selectedAnswer for matching questions
  useEffect(() => {
    if (currentQuestion?.type !== 'matching') return;
    const total = currentQuestion.options?.length ?? 0;
    const paired = Object.keys(matchingPairs).length;
    if (paired === total && total > 0) {
      // encode as "left:::right|||left:::right|||"
      setSelectedAnswer(
        Object.entries(matchingPairs).map(([l, r]) => `${l}:::${r}`).join('|||')
      );
    } else {
      setSelectedAnswer(null);
    }
  }, [matchingPairs, currentIndex]);

  const checkAnswer = (answer: string): boolean => {
    if (currentQuestion.type === 'ordering') {
      const userOrder = answer.split('|||');
      const correct = Array.isArray(currentQuestion.correctAnswer)
        ? currentQuestion.correctAnswer
        : [currentQuestion.correctAnswer];
      return (
        userOrder.length === correct.length &&
        userOrder.every((item, i) => item.trim().toLowerCase() === correct[i].trim().toLowerCase())
      );
    }
    if (currentQuestion.type === 'matching') {
      const pairs = answer.split('|||').map(p => p.split(':::'));
      const correctAnswers = Array.isArray(currentQuestion.correctAnswer)
        ? currentQuestion.correctAnswer
        : [currentQuestion.correctAnswer];
      const opts = currentQuestion.options ?? [];
      return pairs.length === opts.length && pairs.every(([l, r]) => {
        const idx = opts.indexOf(l);
        return idx !== -1 && correctAnswers[idx]?.trim().toLowerCase() === r.trim().toLowerCase();
      });
    }
    const correct = currentQuestion.correctAnswer;
    if (Array.isArray(correct)) return correct.includes(answer);
    return answer.toLowerCase() === correct.toLowerCase();
  };

  const handleSelectAnswer = (answer: string) => {
    if (hasAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleConfirmAnswer = () => {
    if (!selectedAnswer || hasAnswered) return;
    
    const isCorrect = checkAnswer(selectedAnswer);
    setHasAnswered(true);
    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      answer: selectedAnswer,
      correct: isCorrect,
      points: isCorrect ? currentQuestion.points : 0
    }]);
  };

  const handleNext = () => {
    setOrderedItems([]);
    setMatchingPairs({});
    setMatchingLeftSelected(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    setShowResults(true);
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setAnswers([]);
    setShowResults(false);
    setShowReview(false);
    if (timeLimit) setTimeRemaining(timeLimit);
  };

  const handleComplete = () => {
    onComplete(passed, earnedPoints, totalPoints);
  };

  // Results screen
  if (showResults) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-[70vh] py-8"
      >
        <div className="w-full max-w-6xl space-y-6">
          {/* Result Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="text-center"
          >
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
              passed ? 'bg-green-500/20' : 'bg-red-500/20'
            }`}>
              {passed ? (
                <Trophy className="w-12 h-12 text-green-400" />
              ) : (
                <RefreshCw className="w-12 h-12 text-red-400" />
              )}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {passed ? '¡Felicidades!' : 'Sigue Practicando'}
            </h1>
            <p className="text-gray-400">
              {passed 
                ? 'Has aprobado el quiz de consolidación'
                : `Necesitas ${passingScore}% para aprobar`
              }
            </p>
          </motion.div>

          {/* Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400">Tu puntuación</span>
              <span className={`text-4xl font-bold ${passed ? 'text-green-400' : 'text-red-400'}`}>
                {scorePercentage}%
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="h-4 bg-dark-600 rounded-full overflow-hidden mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${scorePercentage}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className={`h-full rounded-full ${passed ? 'bg-green-500' : 'bg-red-500'}`}
              />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">{earnedPoints}</p>
                <p className="text-sm text-gray-400">Puntos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">
                  {answers.filter(a => a.correct).length}
                </p>
                <p className="text-sm text-gray-400">Correctas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-400">
                  {answers.filter(a => !a.correct).length}
                </p>
                <p className="text-sm text-gray-400">Incorrectas</p>
              </div>
            </div>
          </motion.div>

          {/* Review Section */}
          {showReview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="card space-y-4"
            >
              <h3 className="font-semibold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Revisión de Respuestas
              </h3>
              {questions.map((q, idx) => {
                const userAnswer = answers.find(a => a.questionId === q.id);
                return (
                  <div 
                    key={q.id}
                    className={`p-4 rounded-xl border ${
                      userAnswer?.correct 
                        ? 'bg-green-500/10 border-green-500/30' 
                        : 'bg-red-500/10 border-red-500/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                        userAnswer?.correct ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-white font-medium mb-2">{q.question}</p>
                        <p className="text-sm text-gray-400 mb-1">
                          Tu respuesta: <span className={userAnswer?.correct ? 'text-green-400' : 'text-red-400'}>
                            {userAnswer?.answer || 'Sin respuesta'}
                          </span>
                        </p>
                        {!userAnswer?.correct && (
                          <p className="text-sm text-gray-400">
                            Correcta: <span className="text-green-400">
                              {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(' / ') : q.correctAnswer}
                            </span>
                          </p>
                        )}
                        <p className="text-sm text-gray-500 mt-2 italic">
                          {q.explanationEs || q.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {(!passed && !isAdmin) && (
            <p className="text-sm text-orange-400 font-medium text-center">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {!showReview && (
              <button
                onClick={() => setShowReview(true)}
                className="flex-1 btn-secondary flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Ver Respuestas
              </button>
            )}
            {(!passed && !isAdmin) && (
              <button
                onClick={handleRetry}
                className="flex-1 btn-secondary flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Reintentar
              </button>
            )}
            {(passed || isAdmin) && (
              <button
                onClick={handleComplete}
                className="flex-1 btn-primary flex items-center justify-center gap-2"
              >
                Continuar
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Quiz question screen
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-[70vh] py-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Salir</span>
        </button>
        
        <div className="flex items-center gap-4">
          {timeLimit && timeRemaining > 0 && (
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
              timeRemaining < 60 ? 'bg-red-500/20 text-red-400' : 'bg-dark-600 text-gray-400'
            }`}>
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatTime(timeRemaining)}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-gray-400">
            <Target className="w-4 h-4" />
            <span>{currentIndex + 1} / {questions.length}</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-dark-600 rounded-full mb-8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + (hasAnswered ? 1 : 0)) / questions.length) * 100}%` }}
          className="h-full bg-accent-primary rounded-full"
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex-1 space-y-6"
        >
          {/* Question text */}
          <div className="card bg-gradient-to-br from-dark-700/50 to-dark-800/50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-primary/20 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-accent-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Pregunta {currentIndex + 1} ��� {currentQuestion.points} {currentQuestion.points === 1 ? 'punto' : 'puntos'}
                </p>
                <p className="text-xl text-white font-medium">
                  {currentQuestion.questionEs || currentQuestion.question}
                </p>
              </div>
            </div>
          </div>

          {/* Matching */}
          {currentQuestion.type === 'matching' && (() => {
            const opts = currentQuestion.options ?? [];
            const correctAnswers = Array.isArray(currentQuestion.correctAnswer)
              ? currentQuestion.correctAnswer
              : [currentQuestion.correctAnswer];
            // right-side pool: items not yet paired
            const usedRight = new Set(Object.values(matchingPairs));
            const rightPool = correctAnswers.filter(r => !usedRight.has(r));

            return (
              <div className="space-y-3">
                {!hasAnswered && (
                  <p className="text-xs text-gray-400">
                    {matchingLeftSelected
                      ? <>Seleccionado: <strong className="text-accent-primary">{matchingLeftSelected}</strong> — ahora elige su par de la derecha…</>
                      : 'Haz clic en un elemento de la izquierda, luego en su par de la derecha.'}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-3">
                  {/* Left column */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wide text-center mb-1">Saludos</p>
                    {opts.map((left, i) => {
                      const paired = matchingPairs[left];
                      const isActive = matchingLeftSelected === left;
                      const isCorrectPair = hasAnswered && correctAnswers[i]?.trim().toLowerCase() === paired?.trim().toLowerCase();
                      const isWrongPair = hasAnswered && paired && !isCorrectPair;
                      return (
                        <button
                          key={i}
                          disabled={hasAnswered || !!paired}
                          onClick={() => !hasAnswered && !paired && setMatchingLeftSelected(left)}
                          className={`w-full p-3 rounded-xl border-2 text-sm text-left transition-all ${
                            hasAnswered
                              ? isCorrectPair ? 'border-green-500 bg-green-500/10 text-white'
                                : isWrongPair  ? 'border-red-500 bg-red-500/10 text-white'
                                : 'border-dark-500 bg-dark-700 text-gray-400'
                            : isActive ? 'border-accent-primary bg-accent-primary/20 text-white'
                            : paired   ? 'border-dark-400 bg-dark-600 text-gray-500 cursor-default'
                            : 'border-dark-500 bg-dark-700 text-gray-300 hover:border-accent-primary/60'
                          }`}
                        >
                          {left}
                          {paired && !hasAnswered && (
                            <span className="block text-xs text-accent-primary/70 mt-0.5 truncate">→ {paired}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right column */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wide text-center mb-1">Momento</p>
                    {hasAnswered ? (
                      // Show correct pairs after answering
                      correctAnswers.map((right, i) => {
                        const left = opts[i];
                        const userRight = matchingPairs[left];
                        const isOk = userRight?.trim().toLowerCase() === right.trim().toLowerCase();
                        return (
                          <div key={i} className={`p-3 rounded-xl border-2 text-sm ${
                            isOk ? 'border-green-500 bg-green-500/10 text-white' : 'border-red-500 bg-red-500/10 text-white'
                          }`}>
                            {right}
                          </div>
                        );
                      })
                    ) : (
                      rightPool.map((right, i) => (
                        <button
                          key={i}
                          disabled={!matchingLeftSelected}
                          onClick={() => {
                            if (!matchingLeftSelected) return;
                            setMatchingPairs(prev => ({ ...prev, [matchingLeftSelected]: right }));
                            setMatchingLeftSelected(null);
                          }}
                          className={`w-full p-3 rounded-xl border-2 text-sm text-left transition-all ${
                            matchingLeftSelected
                              ? 'border-dark-400 bg-dark-700 text-gray-300 hover:border-accent-primary/60 hover:bg-dark-600 cursor-pointer'
                              : 'border-dark-500 bg-dark-700 text-gray-500 cursor-default opacity-60'
                          }`}
                        >
                          {right}
                        </button>
                      ))
                    )}
                  </div>
                </div>

                {/* Unpair button */}
                {!hasAnswered && Object.keys(matchingPairs).length > 0 && (
                  <button
                    onClick={() => {
                      const keys = Object.keys(matchingPairs);
                      const last = keys[keys.length - 1];
                      setMatchingPairs(prev => { const n = {...prev}; delete n[last]; return n; });
                      setMatchingLeftSelected(null);
                    }}
                    className="text-xs text-gray-500 hover:text-red-400 transition-colors"
                  >
                    ↩ Deshacer último par
                  </button>
                )}
              </div>
            );
          })()}

          {/* Ordering */}
          {currentQuestion.type === 'ordering' && (
            <div className="space-y-4">
              {/* Sequence built so far */}
              <div className="space-y-2">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Tu orden:</p>
                {orderedItems.length === 0 ? (
                  <p className="text-sm text-gray-500 italic">Haz clic en las frases de abajo para ordenarlas…</p>
                ) : (() => {
                  const correctOrder = Array.isArray(currentQuestion.correctAnswer)
                    ? currentQuestion.correctAnswer
                    : [currentQuestion.correctAnswer];
                  return orderedItems.map((item, i) => {
                    const isCorrectPos = hasAnswered && item.trim().toLowerCase() === correctOrder[i]?.trim().toLowerCase();
                    const isWrongPos   = hasAnswered && !isCorrectPos;
                    return (
                      <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border-2 ${
                        isCorrectPos ? 'bg-green-500/10 border-green-500/60'
                        : isWrongPos ? 'bg-red-500/10 border-red-500/60'
                        : 'bg-accent-primary/10 border-accent-primary/40'
                      }`}>
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${
                          isCorrectPos ? 'bg-green-600' : isWrongPos ? 'bg-red-600' : 'bg-accent-primary'
                        }`}>{i + 1}</span>
                        <span className="flex-1 text-white text-sm">{item}</span>
                        {!hasAnswered && i === orderedItems.length - 1 && (
                          <button
                            onClick={() => setOrderedItems(prev => prev.slice(0, -1))}
                            className="text-gray-500 hover:text-red-400 transition-colors text-lg leading-none"
                          >×</button>
                        )}
                      </div>
                    );
                  });
                })()}
              </div>

              {/* Available pool */}
              {!hasAnswered && (currentQuestion.options ?? []).filter(opt => !orderedItems.includes(opt)).length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Frases disponibles:</p>
                  {(currentQuestion.options ?? [])
                    .filter(opt => !orderedItems.includes(opt))
                    .map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setOrderedItems(prev => [...prev, opt])}
                        className="w-full p-3 rounded-xl border-2 border-dark-500 bg-dark-700 text-gray-300 text-left text-sm hover:border-accent-primary/60 hover:bg-dark-600 transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                </div>
              )}

              {/* Correct order revealed after answering */}
              {hasAnswered && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Orden correcto:</p>
                  {(Array.isArray(currentQuestion.correctAnswer)
                    ? currentQuestion.correctAnswer
                    : [currentQuestion.correctAnswer]
                  ).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/30">
                      <span className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Options — multiple-choice */}
          {currentQuestion.type !== 'ordering' && currentQuestion.type !== 'matching' && (currentQuestion.type === 'multiple-choice' || (currentQuestion.options && currentQuestion.options.length > 0)) && (
            <div className="space-y-3">
              {currentQuestion.options?.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = hasAnswered && checkAnswer(option);
                const isWrong = hasAnswered && isSelected && !isCorrect;

                return (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => handleSelectAnswer(option)}
                    disabled={hasAnswered}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      hasAnswered
                        ? isCorrect
                          ? 'bg-green-500/20 border-green-500 text-white'
                          : isWrong
                          ? 'bg-red-500/20 border-red-500 text-white'
                          : 'bg-dark-700 border-dark-500 text-gray-400'
                        : isSelected
                        ? 'bg-accent-primary/20 border-accent-primary text-white'
                        : 'bg-dark-700 border-dark-500 text-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        hasAnswered
                          ? isCorrect
                            ? 'bg-green-500 text-white'
                            : isWrong
                            ? 'bg-red-500 text-white'
                            : 'bg-dark-600 text-gray-400'
                          : isSelected
                          ? 'bg-accent-primary text-white'
                          : 'bg-dark-600 text-gray-400'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {hasAnswered && isCorrect && <CheckCircle className="w-6 h-6 text-green-400" />}
                      {hasAnswered && isWrong && <XCircle className="w-6 h-6 text-red-400" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* True / False */}
          {currentQuestion.type === 'true-false' && !currentQuestion.options?.length && (
            <div className="flex gap-3">
              {(['True', 'False'] as const).map(val => {
                const isSelected = selectedAnswer === val;
                const isCorrect = hasAnswered && checkAnswer(val);
                const isWrong = hasAnswered && isSelected && !isCorrect;
                return (
                  <button
                    key={val}
                    onClick={() => handleSelectAnswer(val)}
                    disabled={hasAnswered}
                    className={`flex-1 py-3 rounded-xl border-2 font-semibold transition-all ${
                      hasAnswered
                        ? isCorrect ? 'bg-green-500/20 border-green-500 text-white'
                          : isWrong ? 'bg-red-500/20 border-red-500 text-white'
                          : 'bg-dark-700 border-dark-500 text-gray-400'
                        : isSelected ? 'bg-accent-primary/20 border-accent-primary text-white'
                        : 'bg-dark-700 border-dark-500 text-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {val === 'True' ? 'Verdadero' : 'Falso'}
                  </button>
                );
              })}
            </div>
          )}

          {/* Fill blank */}
          {currentQuestion.type === 'fill-blank' && !currentQuestion.options?.length && (
            <div className="space-y-2">
              <input
                type="text"
                value={selectedAnswer ?? ''}
                onChange={e => !hasAnswered && setSelectedAnswer(e.target.value)}
                disabled={hasAnswered}
                placeholder="Escribe tu respuesta..."
                className={`w-full p-4 rounded-xl border-2 bg-dark-700 text-white placeholder-gray-500 outline-none transition-all ${
                  hasAnswered
                    ? checkAnswer(selectedAnswer ?? '')
                      ? 'border-green-500'
                      : 'border-red-500'
                    : 'border-dark-500 focus:border-accent-primary'
                }`}
              />
              {hasAnswered && !checkAnswer(selectedAnswer ?? '') && (
                <p className="text-sm text-gray-400">
                  Respuesta correcta: <strong className="text-green-300">
                    {Array.isArray(currentQuestion.correctAnswer)
                      ? currentQuestion.correctAnswer.join(' / ')
                      : currentQuestion.correctAnswer}
                  </strong>
                </p>
              )}
            </div>
          )}

          {/* Explanation (shown after answering) */}
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl ${
                answers[answers.length - 1]?.correct
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-yellow-500/10 border border-yellow-500/30'
              }`}
            >
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">Explicación: </span>
                {currentQuestion.explanationEs || currentQuestion.explanation}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      <div className="mt-8 flex justify-end">
        {!hasAnswered ? (
          <button
            onClick={handleConfirmAnswer}
            disabled={!selectedAnswer}
            className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirmar
            <CheckCircle className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="btn-primary flex items-center gap-2"
          >
            {currentIndex < questions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
