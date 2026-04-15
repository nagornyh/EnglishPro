import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RefreshCw, 
  Check,
  X,
  Settings,
  Globe,
  Gauge
} from 'lucide-react';
import type { ListeningExercise, ListeningQuestion } from '../../types';
import { availableAccents, speechSpeeds, speakText } from '../../data/listening-exercises';

interface EnhancedListeningProps {
  exercise: ListeningExercise;
  onComplete: (score: number, totalPossible: number, mistakes: string[]) => void;
  onExit?: () => void;
}

export default function EnhancedListening({ exercise, onComplete, onExit }: EnhancedListeningProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // -1 = listening phase
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState<string[]>([]);
  const [questionChecked, setQuestionChecked] = useState(false);
  
  // Settings
  const [showSettings, setShowSettings] = useState(false);
  const [selectedAccent, setSelectedAccent] = useState('en-US');
  const [selectedSpeed, setSelectedSpeed] = useState(1.0);
  const [showHints, setShowHints] = useState(false);
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlay = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta síntesis de voz');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = speakText(exercise.audioText, {
      accent: selectedAccent,
      rate: selectedSpeed,
      onEnd: () => {
        setIsPlaying(false);
        setPlayCount(prev => prev + 1);
      },
      onError: (error) => {
        console.error('Speech error:', error);
        setIsPlaying(false);
      },
    });

    if (utterance) {
      utteranceRef.current = utterance;
      setIsPlaying(true);
    }
  }, [exercise.audioText, selectedAccent, selectedSpeed, isPlaying]);

  const handleStartQuestions = () => {
    if (playCount === 0) {
      alert('Escucha el audio al menos una vez antes de responder');
      return;
    }
    setCurrentQuestionIndex(0);
  };

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleDictationInput = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNextQuestion = () => {
    setQuestionChecked(false);
    if (currentQuestionIndex < exercise.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    const newMistakes: string[] = [];

    exercise.questions.forEach(question => {
      const userAnswer = answers[question.id]?.toLowerCase().trim() || '';
      const correctAnswer = question.correctAnswer.toLowerCase().trim();
      
      if (question.type === 'dictation') {
        // For dictation, allow some flexibility
        const similarity = calculateSimilarity(userAnswer, correctAnswer);
        if (similarity >= 0.8) {
          totalScore += question.points;
        } else if (similarity >= 0.6) {
          totalScore += Math.round(question.points * 0.5);
          newMistakes.push(`Dictation: "${userAnswer}" (should be "${question.correctAnswer}")`);
        } else {
          newMistakes.push(`Dictation: "${userAnswer}" (should be "${question.correctAnswer}")`);
        }
      } else {
        if (userAnswer === correctAnswer) {
          totalScore += question.points;
        } else {
          newMistakes.push(`${question.question}: "${userAnswer}" (correct: "${question.correctAnswer}")`);
        }
      }
    });

    setScore(totalScore);
    setMistakes(newMistakes);
    setShowResults(true);

    const totalPossible = exercise.questions.reduce((sum, q) => sum + q.points, 0);
    onComplete(totalScore, totalPossible, newMistakes);
  };

  // Simple similarity calculation for dictation
  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = levenshteinDistance(str1, str2);
    return (longer.length - editDistance) / longer.length;
  };

  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix: number[][] = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  const totalPossible = exercise.questions.reduce((sum, q) => sum + q.points, 0);
  const currentQuestion = exercise.questions[currentQuestionIndex];
  const currentAccent = availableAccents.find(a => a.code === selectedAccent);

  if (showResults) {
    const percentage = Math.round((score / totalPossible) * 100);
    
    return (
      <motion.div
        className="p-6 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
          percentage >= 80 ? 'bg-green-500/20' : percentage >= 50 ? 'bg-amber-500/20' : 'bg-red-500/20'
        }`}>
          {percentage >= 80 ? (
            <Check className="w-10 h-10 text-green-400" />
          ) : percentage >= 50 ? (
            <span className="text-4xl">👂</span>
          ) : (
            <RefreshCw className="w-10 h-10 text-red-400" />
          )}
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">
          {percentage >= 80 ? '¡Excelente!' : percentage >= 50 ? '¡Buen intento!' : 'Sigue practicando'}
        </h2>
        <p className="text-gray-400 mb-4">{exercise.titleEs}</p>
        
        <div className="bg-dark-200 rounded-xl p-4 mb-6">
          <div className="text-4xl font-bold text-white mb-1">{percentage}%</div>
          <p className="text-gray-400 text-sm">{score} / {totalPossible} puntos</p>
        </div>
        
        {/* Show transcript */}
        <div className="bg-dark-200 rounded-xl p-4 mb-4 text-left">
          <p className="text-xs text-gray-500 mb-2">Transcripción:</p>
          <p className="text-white text-sm">{exercise.audioText}</p>
          <p className="text-gray-400 text-xs mt-2">{exercise.translation}</p>
        </div>
        
        {mistakes.length > 0 && (
          <div className="bg-red-500/10 rounded-xl p-4 mb-4 text-left">
            <p className="text-xs text-red-400 mb-2">Errores:</p>
            {mistakes.map((mistake, i) => (
              <p key={i} className="text-sm text-gray-300">{mistake}</p>
            ))}
          </div>
        )}
        
        {percentage < 70 && (
          <p className="text-sm text-orange-400 font-medium">
            Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
          </p>
        )}
        <div className="flex gap-3">
          <button
            onClick={() => {
              setCurrentQuestionIndex(-1);
              setAnswers({});
              setShowResults(false);
              setPlayCount(0);
              setScore(0);
              setMistakes([]);
            }}
            className="flex-1 py-3 rounded-xl bg-dark-200 text-white font-semibold hover:bg-dark-300 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Repetir
          </button>
          {percentage >= 70 && (
            <button
              onClick={onExit}
              className="flex-1 py-3 rounded-xl bg-accent-primary text-white font-semibold hover:bg-accent-secondary transition-colors"
            >
              Continuar
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-dark-200">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-white">{exercise.titleEs}</h2>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-lg hover:bg-dark-200 transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <p className="text-sm text-gray-400">
          Dificultad: {['⭐', '⭐⭐', '⭐⭐⭐'][exercise.difficulty - 1]}
        </p>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            className="p-4 bg-dark-200 border-b border-dark-300"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="space-y-4">
              {/* Accent Selection */}
              <div>
                <label className="text-xs text-gray-400 mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Acento
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableAccents.map(accent => (
                    <button
                      key={accent.id}
                      onClick={() => setSelectedAccent(accent.code)}
                      className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 transition-colors ${
                        selectedAccent === accent.code 
                          ? 'bg-accent-primary text-white' 
                          : 'bg-dark-300 text-gray-400 hover:bg-dark-400'
                      }`}
                    >
                      <span>{accent.flag}</span>
                      <span>{accent.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Speed Selection */}
              <div>
                <label className="text-xs text-gray-400 mb-2 flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  Velocidad
                </label>
                <div className="flex gap-2">
                  {speechSpeeds.map(speed => (
                    <button
                      key={speed.id}
                      onClick={() => setSelectedSpeed(speed.rate)}
                      className={`flex-1 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedSpeed === speed.rate 
                          ? 'bg-accent-primary text-white' 
                          : 'bg-dark-300 text-gray-400 hover:bg-dark-400'
                      }`}
                    >
                      {speed.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {currentQuestionIndex === -1 ? (
          // Listening Phase
          <div className="flex flex-col items-center justify-center h-full">
            <motion.div
              className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 cursor-pointer transition-colors ${
                isPlaying ? 'bg-accent-primary' : 'bg-dark-200 hover:bg-dark-300'
              }`}
              onClick={handlePlay}
              animate={isPlaying ? { scale: [1, 1.05, 1] } : {}}
              transition={{ repeat: isPlaying ? Infinity : 0, duration: 1.5 }}
            >
              {isPlaying ? (
                <Pause className="w-16 h-16 text-white" />
              ) : (
                <Play className="w-16 h-16 text-white ml-2" />
              )}
            </motion.div>
            
            <p className="text-gray-400 text-center mb-2">
              {isPlaying ? 'Reproduciendo...' : 'Toca para escuchar'}
            </p>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{currentAccent?.flag}</span>
              <span>{currentAccent?.name}</span>
              <span>•</span>
              <span>{speechSpeeds.find(s => s.rate === selectedSpeed)?.name}</span>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              Reproducciones: {playCount}
            </p>
            
            {/* Hints Toggle */}
            <button
              onClick={() => setShowHints(!showHints)}
              className="mt-4 text-accent-primary text-sm hover:underline"
            >
              {showHints ? 'Ocultar pistas' : 'Mostrar pistas'}
            </button>
            
            <AnimatePresence>
              {showHints && (
                <motion.div
                  className="mt-4 p-3 bg-dark-200 rounded-xl max-w-sm"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p className="text-xs text-gray-400 mb-2">Pistas:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {exercise.hintsEs?.map((hint, i) => (
                      <li key={i}>• {hint}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            
            {playCount > 0 && (
              <motion.button
                className="mt-8 px-8 py-3 rounded-xl bg-accent-primary text-white font-semibold hover:bg-accent-secondary transition-colors"
                onClick={handleStartQuestions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Responder Preguntas
              </motion.button>
            )}
          </div>
        ) : (
          // Question Phase
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Pregunta {currentQuestionIndex + 1} de {exercise.questions.length}
              </span>
              <button
                onClick={handlePlay}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-200 hover:bg-dark-300 transition-colors"
              >
                {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="text-sm">Escuchar</span>
              </button>
            </div>
            
            <QuestionCard
              question={currentQuestion}
              answer={answers[currentQuestion.id] || ''}
              onAnswerSelect={(answer) => handleAnswerSelect(currentQuestion.id, answer)}
              onDictationInput={(value) => handleDictationInput(currentQuestion.id, value)}
              checked={questionChecked}
            />
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      {currentQuestionIndex >= 0 && (
        <div className="p-4 border-t border-dark-200">
          {!questionChecked ? (
            <button
              onClick={() => setQuestionChecked(true)}
              disabled={!answers[currentQuestion.id]}
              className="w-full py-3 rounded-xl bg-accent-primary text-white font-semibold hover:bg-accent-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Comprobar
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="w-full py-3 rounded-xl bg-accent-primary text-white font-semibold hover:bg-accent-secondary transition-colors"
            >
              {currentQuestionIndex < exercise.questions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

interface QuestionCardProps {
  question: ListeningQuestion;
  answer: string;
  onAnswerSelect: (answer: string) => void;
  onDictationInput: (value: string) => void;
  checked?: boolean;
}

function QuestionCard({ question, answer, onAnswerSelect, onDictationInput, checked }: QuestionCardProps) {
  const isAnswerCorrect = checked && answer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();

  return (
    <motion.div
      className="bg-dark-200 rounded-xl p-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <p className="text-white mb-1">{question.question}</p>
      <p className="text-gray-400 text-sm mb-4">{question.questionEs}</p>
      
      {question.type === 'dictation' ? (
        <textarea
          value={answer}
          onChange={(e) => onDictationInput(e.target.value)}
          disabled={!!checked}
          placeholder="Escribe lo que escuchaste..."
          className="w-full p-3 rounded-lg bg-dark-300 text-white placeholder-gray-500 border border-dark-400 focus:border-accent-primary outline-none resize-none"
          rows={3}
        />
      ) : question.type === 'fill-blank' || question.type === 'multiple-choice' ? (
        <div className="space-y-2">
          {question.options?.map((option) => {
            const isSelected = answer === option;
            const isCorrectOption = checked && option === question.correctAnswer;
            const isWrongOption = checked && isSelected && option !== question.correctAnswer;
            return (
              <button
                key={option}
                onClick={() => checked ? undefined : onAnswerSelect(option)}
                disabled={!!checked}
                className={`w-full p-3 rounded-lg text-left transition-colors ${
                  isCorrectOption ? 'bg-green-600/30 border border-green-500/50 text-green-300' :
                  isWrongOption  ? 'bg-red-600/30 border border-red-500/50 text-red-300' :
                  isSelected     ? 'bg-accent-primary text-white' :
                  'bg-dark-300 text-gray-300 hover:bg-dark-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {isCorrectOption && <Check className="w-4 h-4 text-green-400 flex-shrink-0" />}
                  {isWrongOption  && <X className="w-4 h-4 text-red-400 flex-shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>
      ) : null}

      {checked && (
        <div className={`mt-3 text-sm flex items-center gap-2 ${isAnswerCorrect ? 'text-green-400' : 'text-red-400'}`}>
          <span>{isAnswerCorrect ? '✓ Correcto' : '✗ Incorrecto'}</span>
          {!isAnswerCorrect && question.type !== 'dictation' && (
            <span className="text-gray-400">— Respuesta correcta: <strong className="text-green-300">{question.correctAnswer}</strong></span>
          )}
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <span className="text-xs text-gray-500">{question.points} puntos</span>
      </div>
    </motion.div>
  );
}
