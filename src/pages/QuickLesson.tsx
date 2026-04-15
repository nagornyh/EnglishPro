import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Volume2,
  BookOpen,
  Lightbulb,
  AlertCircle,
  Trophy,
  RotateCcw,
  Star,
  ArrowRight,
} from 'lucide-react';
import {
  microLessons,
  getDailyLesson,
  getLessonsByCategory,
} from '../data/micro-lessons';
import type { MicroLesson, LessonContent } from '../data/micro-lessons';

type ViewMode = 'list' | 'lesson' | 'quiz' | 'complete';

export default function QuickLesson() {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [currentLesson, setCurrentLesson] = useState<MicroLesson | null>(null);
  const [contentIndex, setContentIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>([]);
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  // Load completed lessons from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('completed_micro_lessons');
    if (saved) {
      setCompletedLessons(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save completed lessons
  const markLessonComplete = (lessonId: string) => {
    const newCompleted = new Set(completedLessons);
    newCompleted.add(lessonId);
    setCompletedLessons(newCompleted);
    localStorage.setItem('completed_micro_lessons', JSON.stringify([...newCompleted]));
  };

  const startLesson = (lesson: MicroLesson) => {
    setCurrentLesson(lesson);
    setContentIndex(0);
    setQuizIndex(0);
    setQuizAnswers([]);
    setShowQuizFeedback(false);
    setViewMode('lesson');
  };

  const nextContent = () => {
    if (!currentLesson) return;

    if (contentIndex < currentLesson.content.length - 1) {
      setContentIndex(contentIndex + 1);
    } else if (currentLesson.quickQuiz && currentLesson.quickQuiz.length > 0) {
      setViewMode('quiz');
      setQuizAnswers(new Array(currentLesson.quickQuiz.length).fill(null));
    } else {
      setViewMode('complete');
      markLessonComplete(currentLesson.id);
    }
  };

  const prevContent = () => {
    if (contentIndex > 0) {
      setContentIndex(contentIndex - 1);
    }
  };

  const handleQuizAnswer = (optionIndex: number) => {
    if (!currentLesson || showQuizFeedback) return;

    const newAnswers = [...quizAnswers];
    newAnswers[quizIndex] = optionIndex;
    setQuizAnswers(newAnswers);
    setShowQuizFeedback(true);
  };

  const nextQuizQuestion = () => {
    if (!currentLesson?.quickQuiz) return;

    setShowQuizFeedback(false);
    if (quizIndex < currentLesson.quickQuiz.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setViewMode('complete');
      markLessonComplete(currentLesson.id);
    }
  };

  const exitLesson = () => {
    setViewMode('list');
    setCurrentLesson(null);
  };

  const speak = (text: string) => {
    const cleanText = text.replace(/[✓❌🔑💡🎯🕐💬🤝💼🔇→]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  const filteredLessons = selectedCategory === 'all'
    ? microLessons
    : getLessonsByCategory(selectedCategory as MicroLesson['category']);

  const dailyLesson = getDailyLesson();

  const renderContent = (content: LessonContent) => {
    return (
      <motion.div
        key={contentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-4"
      >
        {content.type === 'text' && (
          <div className="p-4 bg-dark-700 rounded-xl">
            <p className="text-white whitespace-pre-line">{content.content}</p>
            {content.contentEs && (
              <p className="text-gray-400 text-sm mt-2 italic">{content.contentEs}</p>
            )}
          </div>
        )}

        {content.type === 'example' && (
          <div className="p-4 bg-accent-primary/10 rounded-xl border border-accent-primary/30">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-accent-primary" />
              <span className="text-sm font-medium text-accent-primary">Ejemplos</span>
              <button onClick={() => speak(content.content)} className="ml-auto p-1 hover:bg-dark-600 rounded">
                <Volume2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <p className="text-gray-200 whitespace-pre-line">{content.content}</p>
            {content.highlight && (
              <div className="mt-2 flex flex-wrap gap-2">
                {content.highlight.split(', ').map((word, i) => (
                  <span key={i} className="px-2 py-1 bg-accent-primary/20 text-accent-primary text-sm rounded">
                    {word}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {content.type === 'tip' && (
          <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Tip</span>
            </div>
            <p className="text-gray-200 whitespace-pre-line">{content.content}</p>
            {content.contentEs && (
              <p className="text-gray-400 text-sm mt-2 italic">{content.contentEs}</p>
            )}
          </div>
        )}

        {content.type === 'comparison' && (
          <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">Comparación</span>
            </div>
            <p className="text-gray-200 whitespace-pre-line font-mono text-sm">{content.content}</p>
          </div>
        )}

        {content.type === 'audio' && (
          <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
            <div className="flex items-center gap-2">
              <button
                onClick={() => speak(content.content)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30"
              >
                <Volume2 className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400">Escuchar pronunciación</span>
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2">{content.content}</p>
          </div>
        )}
      </motion.div>
    );
  };

  // List view
  if (viewMode === 'list') {
    return (
      <>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <Zap className="w-7 h-7 text-yellow-400" />
            Lecciones Rápidas
          </h1>
          <p className="text-gray-400 mt-1">
            Micro-lecciones de 3-5 minutos para aprender algo nuevo cada día
          </p>
        </div>

        {/* Daily lesson */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-gray-400 mb-3">📅 Lección del día</h2>
          <motion.button
            onClick={() => startLesson(dailyLesson)}
            whileHover={{ scale: 1.02 }}
            className="w-full card bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">{dailyLesson.title}</h3>
                <p className="text-sm text-gray-400">{dailyLesson.titleEs}</p>
                <div className="flex items-center gap-3 mt-2 text-xs">
                  <span className="flex items-center gap-1 text-yellow-400">
                    <Clock className="w-3 h-3" />
                    {Math.round(dailyLesson.duration / 60)} min
                  </span>
                  <span className="px-2 py-0.5 bg-dark-600 rounded text-gray-400">
                    {dailyLesson.level}
                  </span>
                </div>
              </div>
              {completedLessons.has(dailyLesson.id) && (
                <CheckCircle className="w-6 h-6 text-green-400" />
              )}
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </motion.button>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {['all', 'grammar', 'vocabulary', 'phrases', 'pronunciation', 'tips'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-accent-primary text-white'
                  : 'bg-dark-600 text-gray-400'
              }`}
            >
              {cat === 'all' ? 'Todas' :
               cat === 'grammar' ? 'Gramática' :
               cat === 'vocabulary' ? 'Vocabulario' :
               cat === 'phrases' ? 'Frases' :
               cat === 'pronunciation' ? 'Pronunciación' : 'Tips'}
            </button>
          ))}
        </div>

        {/* Lesson list */}
        <div className="space-y-3">
          {filteredLessons.map((lesson) => (
            <motion.button
              key={lesson.id}
              onClick={() => startLesson(lesson)}
              whileHover={{ scale: 1.01 }}
              className="w-full card text-left hover:border-accent-primary/30"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  lesson.category === 'grammar' ? 'bg-blue-500/20 text-blue-400' :
                  lesson.category === 'vocabulary' ? 'bg-green-500/20 text-green-400' :
                  lesson.category === 'phrases' ? 'bg-purple-500/20 text-purple-400' :
                  lesson.category === 'pronunciation' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-pink-500/20 text-pink-400'
                }`}>
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">{lesson.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-xs">
                    <span className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-3 h-3" />
                      {Math.round(lesson.duration / 60)} min
                    </span>
                    <span className="px-2 py-0.5 bg-dark-600 rounded text-gray-400">
                      {lesson.level}
                    </span>
                    <span className={`px-2 py-0.5 rounded ${
                      lesson.category === 'grammar' ? 'bg-blue-500/20 text-blue-400' :
                      lesson.category === 'vocabulary' ? 'bg-green-500/20 text-green-400' :
                      lesson.category === 'phrases' ? 'bg-purple-500/20 text-purple-400' :
                      lesson.category === 'pronunciation' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-pink-500/20 text-pink-400'
                    }`}>
                      {lesson.category}
                    </span>
                  </div>
                </div>
                {completedLessons.has(lesson.id) && (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </motion.button>
          ))}
        </div>
      </>
    );
  }

  // Lesson view
  if (viewMode === 'lesson' && currentLesson) {
    const content = currentLesson.content[contentIndex];
    const progress = ((contentIndex + 1) / currentLesson.content.length) * 100;

    return (
      <>
        <div className="w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={exitLesson} className="text-gray-400 hover:text-white">
              ← Salir
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              {Math.round(currentLesson.duration / 60)} min
            </div>
          </div>

          {/* Progress */}
          <div className="h-1 bg-dark-600 rounded-full mb-6 overflow-hidden">
            <motion.div
              className="h-full bg-accent-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>

          {/* Title */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-white">{currentLesson.title}</h1>
            <p className="text-sm text-gray-400">{currentLesson.titleEs}</p>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {renderContent(content)}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevContent}
              disabled={contentIndex === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                contentIndex === 0
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-gray-400 hover:bg-dark-600'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>
            <button
              onClick={nextContent}
              className="btn-primary"
            >
              {contentIndex === currentLesson.content.length - 1
                ? currentLesson.quickQuiz ? 'Quiz rápido' : 'Finalizar'
                : 'Siguiente'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </>
    );
  }

  // Quiz view
  if (viewMode === 'quiz' && currentLesson?.quickQuiz) {
    const question = currentLesson.quickQuiz[quizIndex];
    const isCorrect = quizAnswers[quizIndex] === question.correct;

    return (
      <>
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Quick Quiz</h2>
            <span className="text-sm text-gray-400">
              {quizIndex + 1}/{currentLesson.quickQuiz.length}
            </span>
          </div>

          {/* Question */}
          <div className="card mb-6">
            <p className="text-lg text-white mb-2">{question.question}</p>
            {question.questionEs && (
              <p className="text-sm text-gray-400">{question.questionEs}</p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleQuizAnswer(i)}
                disabled={showQuizFeedback}
                className={`w-full p-4 text-left rounded-xl transition-all ${
                  showQuizFeedback
                    ? i === question.correct
                      ? 'bg-green-500/20 border border-green-500/50'
                      : quizAnswers[quizIndex] === i
                      ? 'bg-red-500/20 border border-red-500/50'
                      : 'bg-dark-600 border border-dark-500'
                    : 'bg-dark-600 hover:bg-dark-500 border border-dark-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                    showQuizFeedback && i === question.correct
                      ? 'bg-green-500 text-white'
                      : showQuizFeedback && quizAnswers[quizIndex] === i
                      ? 'bg-red-500 text-white'
                      : 'bg-dark-500 text-gray-400'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-white">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Feedback */}
          <AnimatePresence>
            {showQuizFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-xl ${
                  isCorrect
                    ? 'bg-green-500/10 border border-green-500/30'
                    : 'bg-amber-500/10 border border-amber-500/30'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-amber-400" />
                  )}
                  <span className={isCorrect ? 'text-green-400' : 'text-amber-400'}>
                    {isCorrect ? '¡Correcto!' : 'No exactamente'}
                  </span>
                </div>
                <p className="text-gray-300">{question.explanation}</p>
                {question.explanationEs && (
                  <p className="text-sm text-gray-500 mt-1">{question.explanationEs}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Continue */}
          {showQuizFeedback && (
            <button onClick={nextQuizQuestion} className="btn-primary w-full mt-6">
              {quizIndex < currentLesson.quickQuiz.length - 1 ? 'Siguiente pregunta' : 'Finalizar'}
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </>
    );
  }

  // Complete view
  if (viewMode === 'complete' && currentLesson) {
    const quizScore = currentLesson.quickQuiz
      ? quizAnswers.filter((a, i) => a === currentLesson.quickQuiz![i].correct).length
      : 0;
    const totalQuiz = currentLesson.quickQuiz?.length || 0;

    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full text-center"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-6">
            <Trophy className="w-10 h-10 text-green-400" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-2">¡Lección completada!</h1>
          <p className="text-gray-400 mb-6">{currentLesson.title}</p>

          {totalQuiz > 0 && (
            <div className="card mb-6">
              <p className="text-sm text-gray-400 mb-2">Resultado del quiz</p>
              <p className="text-3xl font-bold text-accent-primary">
                {quizScore}/{totalQuiz}
              </p>
            </div>
          )}

          {/* Key takeaway */}
          <div className="card bg-accent-primary/10 border-accent-primary/30 text-left mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-accent-primary" />
              <span className="text-sm font-medium text-accent-primary">Recuerda</span>
            </div>
            <p className="text-white">{currentLesson.keyTakeaway}</p>
            <p className="text-sm text-gray-400 mt-1">{currentLesson.keyTakeawayEs}</p>
          </div>

          <div className="flex gap-3">
            <button onClick={exitLesson} className="flex-1 btn-secondary">
              <RotateCcw className="w-5 h-5" />
              Más lecciones
            </button>
            <button
              onClick={() => startLesson(currentLesson)}
              className="flex-1 btn-primary"
            >
              Repetir
            </button>
          </div>
        </motion.div>
      </>
    );
  }

  return null;
}
