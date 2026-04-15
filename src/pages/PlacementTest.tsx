import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target,
  ArrowRight,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  BookOpen,
  GraduationCap,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

// Placement test questions organized by CEFR level
const placementQuestions = [
  // A1 Level Questions (1-10)
  {
    id: 1, level: 'A1', question: 'She ___ a student.',
    options: ['am', 'is', 'are', 'be'], correct: 'is',
    explanation: '"She" requires the verb "is" (third person singular of "to be")'
  },
  {
    id: 2, level: 'A1', question: 'I ___ from Spain.',
    options: ['is', 'am', 'are', 'be'], correct: 'am',
    explanation: '"I" always uses "am" with the verb "to be"'
  },
  {
    id: 3, level: 'A1', question: 'They ___ my friends.',
    options: ['is', 'am', 'are', 'be'], correct: 'are',
    explanation: '"They" requires "are" (plural form of "to be")'
  },
  {
    id: 4, level: 'A1', question: '___ is your name?',
    options: ['Who', 'What', 'Where', 'When'], correct: 'What',
    explanation: 'We use "What" to ask about names and things'
  },
  {
    id: 5, level: 'A1', question: 'I have ___ apple.',
    options: ['a', 'an', 'the', '-'], correct: 'an',
    explanation: 'We use "an" before words starting with vowel sounds'
  },
  // A2 Level Questions (6-15)
  {
    id: 6, level: 'A2', question: 'She ___ to work every day.',
    options: ['go', 'goes', 'going', 'gone'], correct: 'goes',
    explanation: 'Third person singular (she/he/it) adds -es to "go" in Present Simple'
  },
  {
    id: 7, level: 'A2', question: 'I ___ TV when the phone rang.',
    options: ['watch', 'watched', 'was watching', 'am watching'], correct: 'was watching',
    explanation: 'Past Continuous describes an action in progress when another action happened'
  },
  {
    id: 8, level: 'A2', question: 'There are ___ books on the table.',
    options: ['any', 'some', 'a', 'much'], correct: 'some',
    explanation: '"Some" is used in affirmative sentences with countable plurals'
  },
  {
    id: 9, level: 'A2', question: 'She is ___ than her sister.',
    options: ['tall', 'taller', 'tallest', 'more tall'], correct: 'taller',
    explanation: 'Comparatives of short adjectives add -er'
  },
  {
    id: 10, level: 'A2', question: 'I ___ never been to Japan.',
    options: ['has', 'have', 'had', 'having'], correct: 'have',
    explanation: '"I" uses "have" in Present Perfect'
  },
  // B1 Level Questions (11-20)
  {
    id: 11, level: 'B1', question: 'If it rains, I ___ at home.',
    options: ['stay', 'will stay', 'would stay', 'stayed'], correct: 'will stay',
    explanation: 'First conditional: If + present, will + infinitive'
  },
  {
    id: 12, level: 'B1', question: 'The book ___ by millions of people.',
    options: ['has read', 'has been read', 'is reading', 'reads'], correct: 'has been read',
    explanation: 'Passive voice in Present Perfect: has/have been + past participle'
  },
  {
    id: 13, level: 'B1', question: 'I wish I ___ more money.',
    options: ['have', 'had', 'would have', 'having'], correct: 'had',
    explanation: '"I wish" for present situations uses Past Simple'
  },
  {
    id: 14, level: 'B1', question: 'She asked me where I ___.',
    options: ['live', 'lived', 'living', 'am living'], correct: 'lived',
    explanation: 'Reported questions use past tense (backshift)'
  },
  {
    id: 15, level: 'B1', question: 'He ___ working here for five years.',
    options: ['is', 'has been', 'was', 'had'], correct: 'has been',
    explanation: 'Present Perfect Continuous for actions that started in the past and continue'
  },
  // B2 Level Questions (16-25)
  {
    id: 16, level: 'B2', question: 'If I had studied harder, I ___ the exam.',
    options: ['passed', 'would pass', 'would have passed', 'will pass'], correct: 'would have passed',
    explanation: 'Third conditional: If + past perfect, would have + past participle'
  },
  {
    id: 17, level: 'B2', question: 'Not only ___ late, but he also forgot the documents.',
    options: ['he was', 'was he', 'he is', 'is he'], correct: 'was he',
    explanation: 'Inversion after "Not only" - auxiliary before subject'
  },
  {
    id: 18, level: 'B2', question: 'I\'d rather you ___ smoking.',
    options: ['stop', 'stopped', 'would stop', 'to stop'], correct: 'stopped',
    explanation: '"I\'d rather + person" uses Past Simple for present/future meaning'
  },
  {
    id: 19, level: 'B2', question: 'The project ___ by next Friday.',
    options: ['will complete', 'will be completed', 'completes', 'is completing'], correct: 'will be completed',
    explanation: 'Future passive: will be + past participle'
  },
  {
    id: 20, level: 'B2', question: '___ the weather, we\'ll go for a picnic.',
    options: ['Despite', 'Although', 'Provided', 'Unless'], correct: 'Provided',
    explanation: '"Provided" means "if" or "on condition that"'
  },
  // C1 Level Questions (21-30)
  {
    id: 21, level: 'C1', question: 'Little ___ he know what awaited him.',
    options: ['does', 'did', 'had', 'would'], correct: 'did',
    explanation: 'Inversion with negative adverbs: Little did + subject + verb'
  },
  {
    id: 22, level: 'C1', question: 'She spoke ___ if she knew everything.',
    options: ['as', 'like', 'as though', 'as if'], correct: 'as though',
    explanation: '"As though" or "as if" introduce unreal comparisons'
  },
  {
    id: 23, level: 'C1', question: 'The company is said ___ thousands of employees.',
    options: ['to lay off', 'to have laid off', 'laying off', 'to be laying off'], correct: 'to have laid off',
    explanation: 'Passive reporting structure with perfect infinitive for past actions'
  },
  {
    id: 24, level: 'C1', question: 'By the time you arrive, I ___ for two hours.',
    options: ['will wait', 'will have been waiting', 'am waiting', 'would wait'], correct: 'will have been waiting',
    explanation: 'Future Perfect Continuous for duration up to a future point'
  },
  {
    id: 25, level: 'C1', question: 'Hard ___ it may seem, success is achievable.',
    options: ['as', 'though', 'however', 'despite'], correct: 'as',
    explanation: 'Concessive "as" clause with inversion: Adjective + as + subject + verb'
  },
  // C2 Level Questions (26-30)
  {
    id: 26, level: 'C2', question: 'Never before ___ such a magnificent performance.',
    options: ['I have witnessed', 'have I witnessed', 'I witnessed', 'did I witness'], correct: 'have I witnessed',
    explanation: 'Emphatic inversion with "Never before" + present perfect'
  },
  {
    id: 27, level: 'C2', question: 'It is imperative that she ___ immediately.',
    options: ['leaves', 'leave', 'left', 'will leave'], correct: 'leave',
    explanation: 'Subjunctive mood after "it is imperative that" - base form of verb'
  },
  {
    id: 28, level: 'C2', question: 'So ___ was the evidence that the case was dismissed.',
    options: ['flimsy', 'flimsily', 'flimsier', 'the flimsy'], correct: 'flimsy',
    explanation: 'Inversion with "So + adjective" for emphasis'
  },
  {
    id: 29, level: 'C2', question: 'The proposal, ___ merits, was ultimately rejected.',
    options: ['whatever its', 'however its', 'whichever its', 'wherever its'], correct: 'whatever its',
    explanation: '"Whatever its" means "regardless of its" in formal contexts'
  },
  {
    id: 30, level: 'C2', question: '___ for the intervention, the situation would have deteriorated.',
    options: ['Had it not been', 'If it was not', 'Were it not', 'Should it not be'], correct: 'Had it not been',
    explanation: 'Formal third conditional with inversion, omitting "if"'
  },
];

const levelThresholds = [
  { level: 1, cefr: 'A1', minScore: 0, name: 'Principiante' },
  { level: 3, cefr: 'A2', minScore: 5, name: 'Elemental' },
  { level: 5, cefr: 'B1', minScore: 10, name: 'Intermedio' },
  { level: 8, cefr: 'B2', minScore: 15, name: 'Intermedio Alto' },
  { level: 11, cefr: 'C1', minScore: 22, name: 'Avanzado' },
  { level: 13, cefr: 'C2', minScore: 27, name: 'Experto' },
];

export default function PlacementTest() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [answers, setAnswers] = useState<{ questionId: number; correct: boolean }[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes
  const [consecutiveErrors, setConsecutiveErrors] = useState(0);

  const currentQuestion = placementQuestions[currentIndex];
  const progress = ((currentIndex + 1) / placementQuestions.length) * 100;
  const correctCount = answers.filter(a => a.correct).length;

  // Timer
  useEffect(() => {
    if (showResults) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setShowResults(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (answer: string) => {
    if (hasAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleConfirmAnswer = () => {
    if (!selectedAnswer) return;
    
    const isCorrect = selectedAnswer === currentQuestion.correct;
    setHasAnswered(true);
    setAnswers(prev => [...prev, { questionId: currentQuestion.id, correct: isCorrect }]);

    if (!isCorrect) {
      setConsecutiveErrors(prev => prev + 1);
    } else {
      setConsecutiveErrors(0);
    }
  };

  const handleNext = () => {
    // Early termination if too many consecutive errors at higher levels
    if (consecutiveErrors >= 3 && currentIndex >= 15) {
      setShowResults(true);
      return;
    }

    if (currentIndex < placementQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const determineLevel = (): typeof levelThresholds[0] => {
    const score = correctCount;
    // Find the highest level the user qualifies for
    for (let i = levelThresholds.length - 1; i >= 0; i--) {
      if (score >= levelThresholds[i].minScore) {
        return levelThresholds[i];
      }
    }
    return levelThresholds[0];
  };

  const handleStartLearning = async () => {
    if (!user) return;
    
    const recommendedLevel = determineLevel();
    
    // Update user's level in database
    await updateUser({
      progress: {
        ...user.progress,
        currentLevel: recommendedLevel.level,
      }
    });
    
    navigate('/levels');
  };

  // Results screen
  if (showResults) {
    const recommendedLevel = determineLevel();
    const scorePercentage = Math.round((correctCount / placementQuestions.length) * 100);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center p-4"
      >
        <div className="w-full space-y-6">
          {/* Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-12 h-12 text-accent-primary" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              ¡Test Completado!
            </h1>
            <p className="text-gray-400">
              Hemos determinado tu nivel de inglés
            </p>
          </motion.div>

          {/* Recommended Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border-accent-primary/30"
          >
            <div className="text-center py-6">
              <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
                Tu nivel recomendado
              </p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-6xl font-bold text-white">
                  {recommendedLevel.cefr}
                </span>
                <div className="text-left">
                  <p className="text-xl text-accent-primary font-semibold">
                    {recommendedLevel.name}
                  </p>
                  <p className="text-gray-400">
                    Nivel {recommendedLevel.level} de 13
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.ceil(recommendedLevel.level / 3) 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Score Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <h3 className="font-semibold text-white mb-4">Detalles del Test</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-green-400">{correctCount}</p>
                <p className="text-sm text-gray-400">Correctas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{scorePercentage}%</p>
                <p className="text-sm text-gray-400">Puntuación</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">
                  {formatTime(30 * 60 - timeRemaining)}
                </p>
                <p className="text-sm text-gray-400">Tiempo</p>
              </div>
            </div>

            {/* Level breakdown */}
            <div className="mt-6 pt-6 border-t border-dark-500">
              <p className="text-sm text-gray-400 mb-3">Rendimiento por nivel:</p>
              <div className="space-y-2">
                {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(level => {
                  const levelAnswered = answers.filter(a => {
                    const q = placementQuestions.find(pq => pq.id === a.questionId);
                    return q?.level === level;
                  });
                  const levelCorrect = levelAnswered.filter(a => a.correct).length;
                  const percentage = levelAnswered.length > 0 
                    ? Math.round((levelCorrect / levelAnswered.length) * 100) 
                    : 0;

                  return (
                    <div key={level} className="flex items-center gap-3">
                      <span className="text-sm text-gray-400 w-8">{level}</span>
                      <div className="flex-1 h-2 bg-dark-600 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            percentage >= 70 ? 'bg-green-500' : 
                            percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400 w-12 text-right">
                        {levelCorrect}/{levelAnswered.length}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card bg-blue-500/10 border-blue-500/20"
          >
            <div className="flex items-start gap-3">
              <BookOpen className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Recomendación</h4>
                <p className="text-gray-300 text-sm">
                  {recommendedLevel.level <= 3 
                    ? 'Comienza con las bases del inglés. Enfócate en vocabulario básico, verbos comunes y estructuras simples.'
                    : recommendedLevel.level <= 7
                    ? 'Tienes una buena base. Trabaja en expandir tu vocabulario y dominar tiempos verbales más complejos.'
                    : recommendedLevel.level <= 10
                    ? 'Tu nivel es avanzado. Perfecciona estructuras complejas, expresiones idiomáticas y matices del idioma.'
                    : '¡Excelente nivel! Enfócate en pulir detalles, vocabulario especializado y expresiones nativas.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Start Learning Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <button
              onClick={handleStartLearning}
              className="btn-primary flex items-center gap-2 px-8 py-4 text-lg"
            >
              <Zap className="w-6 h-6" />
              Comenzar a Aprender
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // Quiz screen
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-4"
    >
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-accent-primary" />
            <span className="font-medium text-white">Test de Ubicación</span>
          </div>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
              timeRemaining < 300 ? 'bg-red-500/20 text-red-400' : 'bg-dark-600 text-gray-400'
            }`}>
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatTime(timeRemaining)}</span>
            </div>
            <span className="text-sm text-gray-500">
              Nivel: {currentQuestion.level}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-dark-600 rounded-full mb-8 overflow-hidden">
          <motion.div
            animate={{ width: `${progress}%` }}
            className="h-full bg-accent-primary rounded-full"
          />
        </div>

        {/* Question Counter */}
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-white">{currentIndex + 1}</span>
          <span className="text-xl text-gray-500">/{placementQuestions.length}</span>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Question Card */}
            <div className="card bg-gradient-to-br from-dark-700/50 to-dark-800/50">
              <p className="text-2xl text-white text-center">
                {currentQuestion.question}
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = hasAnswered && option === currentQuestion.correct;
                const isWrong = hasAnswered && isSelected && option !== currentQuestion.correct;

                return (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => handleSelectAnswer(option)}
                    disabled={hasAnswered}
                    className={`p-4 rounded-xl border-2 text-center text-lg font-medium transition-all ${
                      hasAnswered
                        ? isCorrect
                          ? 'bg-green-500/20 border-green-500 text-green-400'
                          : isWrong
                          ? 'bg-red-500/20 border-red-500 text-red-400'
                          : 'bg-dark-700 border-dark-500 text-gray-500'
                        : isSelected
                        ? 'bg-accent-primary/20 border-accent-primary text-white'
                        : 'bg-dark-700 border-dark-500 text-white hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {option}
                      {hasAnswered && isCorrect && <CheckCircle className="w-5 h-5" />}
                      {hasAnswered && isWrong && <XCircle className="w-5 h-5" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation (after answering) */}
            {hasAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="card bg-blue-500/10 border-blue-500/20"
              >
                <p className="text-sm text-blue-300">
                  <span className="font-semibold">💡 </span>
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Actions */}
        <div className="mt-8 flex justify-center">
          {!hasAnswered ? (
            <button
              onClick={handleConfirmAnswer}
              disabled={!selectedAnswer}
              className="btn-primary flex items-center gap-2 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirmar
              <CheckCircle className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="btn-primary flex items-center gap-2 px-8"
            >
              {currentIndex < placementQuestions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Score indicator */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Correctas: {correctCount} / {answers.length}
        </div>
      </div>
    </motion.div>
  );
}
