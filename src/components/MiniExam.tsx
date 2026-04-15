import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle, XCircle, Trophy, RotateCcw, Clock } from 'lucide-react';
import adaptiveEngine from '../services/adaptiveEngine';
import type { DifficultySnapshot } from '../services/adaptiveEngine';

interface MiniExamProps {
  userId: string;
  onClose: () => void;
}

interface ExamQuestion {
  id: number;
  question: string;
  questionEs: string;
  options: string[];
  correctAnswer: string;
  skill: string;
  difficulty: number;
}

/** Check if user is due for a biweekly mini-exam */
export function isMiniExamDue(userId: string): boolean {
  const key = `mini_exam_last_${userId}`;
  const last = localStorage.getItem(key);
  if (!last) return true;
  const daysSince = Math.floor((Date.now() - Number(last)) / 86400000);
  return daysSince >= 14;
}

function markMiniExamDone(userId: string) {
  localStorage.setItem(`mini_exam_last_${userId}`, String(Date.now()));
}

/** Generate exam questions based on user's adaptive profile */
function generateExamQuestions(snapshot: DifficultySnapshot): ExamQuestion[] {
  const questions: ExamQuestion[] = [];
  let id = 1;

  // Grammar questions based on difficulty
  const grammarQuestions: ExamQuestion[] = [
    { id: id++, question: 'She ___ to the store yesterday.', questionEs: 'Ella ___ a la tienda ayer.', options: ['go', 'went', 'goes', 'going'], correctAnswer: 'went', skill: 'grammar', difficulty: 1 },
    { id: id++, question: 'If I ___ rich, I would travel the world.', questionEs: 'Si yo ___ rico, viajaría por el mundo.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', skill: 'grammar', difficulty: 2 },
    { id: id++, question: 'The book ___ on the table since morning.', questionEs: 'El libro ___ en la mesa desde la mañana.', options: ['is', 'has been', 'was', 'been'], correctAnswer: 'has been', skill: 'grammar', difficulty: 2 },
    { id: id++, question: 'By next year, she ___ her degree.', questionEs: 'Para el próximo año, ella ___ su título.', options: ['finishes', 'will finish', 'will have finished', 'finished'], correctAnswer: 'will have finished', skill: 'grammar', difficulty: 3 },
    { id: id++, question: 'Had I known, I ___ earlier.', questionEs: 'Si lo hubiera sabido, ___ antes.', options: ['would come', 'would have come', 'came', 'had come'], correctAnswer: 'would have come', skill: 'grammar', difficulty: 4 },
  ];

  // Vocabulary questions
  const vocabQuestions: ExamQuestion[] = [
    { id: id++, question: 'What does "reliable" mean?', questionEs: '¿Qué significa "reliable"?', options: ['caro', 'confiable', 'rápido', 'difícil'], correctAnswer: 'confiable', skill: 'vocabulary', difficulty: 1 },
    { id: id++, question: 'Choose the synonym of "enormous":', questionEs: 'Elige el sinónimo de "enormous":', options: ['tiny', 'huge', 'narrow', 'shallow'], correctAnswer: 'huge', skill: 'vocabulary', difficulty: 1 },
    { id: id++, question: '"Break down" most commonly means:', questionEs: '"Break down" más comúnmente significa:', options: ['construir', 'descomponerse/averiarse', 'correr', 'dormir'], correctAnswer: 'descomponerse/averiarse', skill: 'vocabulary', difficulty: 2 },
    { id: id++, question: 'What does "take for granted" mean?', questionEs: '¿Qué significa "take for granted"?', options: ['agradecer', 'dar por sentado', 'tomar prestado', 'ignorar'], correctAnswer: 'dar por sentado', skill: 'vocabulary', difficulty: 3 },
    { id: id++, question: '"Ubiquitous" means:', questionEs: '"Ubiquitous" significa:', options: ['raro', 'omnipresente', 'invisible', 'antiguo'], correctAnswer: 'omnipresente', skill: 'vocabulary', difficulty: 4 },
  ];

  // Select questions based on user's level in each skill
  const grammarLevel = snapshot.skills.find(s => s.skill === 'grammar')?.level ?? 1;
  const vocabLevel = snapshot.skills.find(s => s.skill === 'vocabulary')?.level ?? 1;

  // Pick 3 grammar and 3 vocab questions around user's level
  const pickAround = (pool: ExamQuestion[], level: number, count: number) => {
    const sorted = pool.sort((a, b) => Math.abs(a.difficulty - level) - Math.abs(b.difficulty - level));
    return sorted.slice(0, count);
  };

  questions.push(...pickAround(grammarQuestions, grammarLevel, 3));
  questions.push(...pickAround(vocabQuestions, vocabLevel, 3));

  // Listening comprehension (text-based since we're offline)
  questions.push({
    id: id++,
    question: 'In the sentence "She couldn\'t help but laugh", what is the meaning?',
    questionEs: 'En la oración "She couldn\'t help but laugh", ¿cuál es el significado?',
    options: ['No podía ayudar a reír', 'No pudo evitar reírse', 'No quería reírse', 'Ayudó a alguien a reír'],
    correctAnswer: 'No pudo evitar reírse',
    skill: 'reading',
    difficulty: 2,
  });

  // Reading comprehension
  questions.push({
    id: id++,
    question: '"Despite the rain, they carried on." What does "carried on" mean?',
    questionEs: '"Despite the rain, they carried on." ¿Qué significa "carried on"?',
    options: ['se detuvieron', 'continuaron', 'cargaron algo', 'se quejaron'],
    correctAnswer: 'continuaron',
    skill: 'reading',
    difficulty: 2,
  });

  // Writing / Production
  questions.push({
    id: id++,
    question: 'Which sentence is grammatically correct?',
    questionEs: '¿Cuál oración es gramaticalmente correcta?',
    options: [
      'Me and him went to the park.',
      'He and I went to the park.',
      'Him and I went to the park.',
      'Me and he went to the park.'
    ],
    correctAnswer: 'He and I went to the park.',
    skill: 'writing',
    difficulty: 2,
  });

  // Re-number
  return questions.map((q, i) => ({ ...q, id: i + 1 }));
}

export default function MiniExam({ userId, onClose }: MiniExamProps) {
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const snapshot = adaptiveEngine.getSnapshot(userId);
    setQuestions(generateExamQuestions(snapshot));
  }, [userId]);

  const currentQ = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const selectedAnswer = currentQ ? answers[currentQ.id] : undefined;
  const isCorrect = selectedAnswer === currentQ?.correctAnswer;

  const handleAnswer = useCallback((answer: string) => {
    if (!currentQ || showFeedback) return;
    setAnswers(prev => ({ ...prev, [currentQ.id]: answer }));
    setShowFeedback(true);
  }, [currentQ, showFeedback]);

  const handleNext = useCallback(() => {
    setShowFeedback(false);
    if (isLastQuestion) {
      // Record results in adaptive engine
      for (const q of questions) {
        const userAnswer = answers[q.id];
        adaptiveEngine.recordAttempt(userId, {
          skill: q.skill,
          correct: userAnswer === q.correctAnswer,
          activityType: 'mini-exam',
        });
      }
      markMiniExamDone(userId);
      setShowResult(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }, [isLastQuestion, questions, answers, userId]);

  const totalCorrect = questions.filter(q => answers[q.id] === q.correctAnswer).length;
  const totalQuestions = questions.length;
  const score = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const elapsed = Math.round((Date.now() - startTime) / 1000);

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div className="card max-w-md w-full text-center">
          <div className="spinner mx-auto" />
          <p className="text-gray-400 mt-4">Preparando examen...</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="card max-w-md w-full space-y-6"
        >
          <div className="text-center">
            <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
              score >= 70 ? 'bg-green-500/20' : 'bg-orange-500/20'
            }`}>
              <Trophy className={`w-10 h-10 ${score >= 70 ? 'text-green-400' : 'text-orange-400'}`} />
            </div>
            <h2 className="text-2xl font-bold text-white">Mini-Examen Completado</h2>
            <p className="text-gray-400 mt-1">
              {score >= 80 ? '¡Excelente progreso!' : score >= 60 ? 'Buen trabajo, sigue practicando.' : 'Necesitas más práctica en algunas áreas.'}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-dark-700 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-accent-primary">{score}%</p>
              <p className="text-xs text-gray-400">Puntuación</p>
            </div>
            <div className="bg-dark-700 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-green-400">{totalCorrect}/{totalQuestions}</p>
              <p className="text-xs text-gray-400">Correctas</p>
            </div>
            <div className="bg-dark-700 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-400">{elapsed}s</p>
              <p className="text-xs text-gray-400">Tiempo</p>
            </div>
          </div>

          {/* Per-skill breakdown */}
          <div className="space-y-2">
            {['grammar', 'vocabulary', 'reading', 'writing'].map(skill => {
              const skillQs = questions.filter(q => q.skill === skill);
              if (skillQs.length === 0) return null;
              const correct = skillQs.filter(q => answers[q.id] === q.correctAnswer).length;
              const pct = Math.round((correct / skillQs.length) * 100);
              return (
                <div key={skill} className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 w-24 capitalize">{skill}</span>
                  <div className="flex-1 h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-12 text-right">{correct}/{skillQs.length}</span>
                </div>
              );
            })}
          </div>

          <button onClick={onClose} className="btn-primary w-full py-3">
            Cerrar
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="card max-w-lg w-full space-y-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-accent-primary" />
            <span className="text-sm font-medium text-white">Mini-Examen Bisemanal</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{currentIndex + 1}/{totalQuestions}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            className="h-full bg-accent-primary rounded-full"
          />
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div>
              <p className="text-white font-medium">{currentQ.question}</p>
              <p className="text-sm text-gray-400 mt-1">{currentQ.questionEs}</p>
            </div>

            <div className="space-y-2">
              {currentQ.options.map((option) => {
                let optClass = 'border-dark-600 bg-dark-700/50 hover:border-dark-500 text-gray-300';
                if (showFeedback && option === currentQ.correctAnswer) {
                  optClass = 'border-green-500 bg-green-500/10 text-green-400';
                } else if (showFeedback && option === selectedAnswer && !isCorrect) {
                  optClass = 'border-red-500 bg-red-500/10 text-red-400';
                } else if (!showFeedback && option === selectedAnswer) {
                  optClass = 'border-accent-primary bg-accent-primary/10 text-white';
                }

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleAnswer(option)}
                    disabled={showFeedback}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${optClass} disabled:cursor-default`}
                  >
                    <div className="flex items-center gap-2">
                      {showFeedback && option === currentQ.correctAnswer && <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />}
                      {showFeedback && option === selectedAnswer && !isCorrect && <XCircle className="w-4 h-4 text-red-400 shrink-0" />}
                      <span>{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Feedback + Next */}
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <p className={`text-sm font-medium ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {isCorrect ? '¡Correcto!' : 'Incorrecto'}
            </p>
            <button onClick={handleNext} className="btn-primary px-6 py-2 text-sm flex items-center gap-2">
              {isLastQuestion ? 'Ver Resultados' : 'Siguiente'}
              <RotateCcw className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
