import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PenLine,
  Send,
  RotateCcw,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Timer,
} from 'lucide-react';
import textAnalyzer from '../../services/textAnalyzer';
import type { AnalysisResult } from '../../services/textAnalyzer';

interface FreeWritingProps {
  prompt: string;
  promptEs?: string;
  minWords?: number;
  maxWords?: number;
  timeLimit?: number; // seconds
  hints?: string[];
  level?: string;
  onComplete?: (result: AnalysisResult, text: string) => void;
}

export default function FreeWriting({
  prompt,
  promptEs,
  minWords = 30,
  maxWords = 200,
  timeLimit,
  hints = [],
  level = 'B1',
  onComplete,
}: FreeWritingProps) {
  const [text, setText] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [timeLeft, setTimeLeft] = useState(timeLimit || 0);
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
  const complexity = textAnalyzer.analyzeComplexity(text);

  const startTimer = () => {
    if (!timeLimit || timerActive) return;
    setTimerActive(true);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = () => {
    if (wordCount < minWords) return;
    if (timerRef.current) clearInterval(timerRef.current);
    
    setIsAnalyzing(true);
    
    // Simulate analysis delay for better UX
    setTimeout(() => {
      const analysis = textAnalyzer.analyzeText(text);
      setResult(analysis);
      setIsAnalyzing(false);
      
      if (onComplete) {
        onComplete(analysis, text);
      }
    }, 1000);
  };

  const handleReset = () => {
    setText('');
    setResult(null);
    setTimeLeft(timeLimit || 0);
    setTimerActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (result) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Score */}
        <div className="card text-center">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-bold ${
            result.score >= 80 ? 'bg-green-500/20 text-green-400' :
            result.score >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {result.score}
          </div>
          <p className="text-gray-400 mt-2">Puntuación</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="card text-center">
            <p className="text-2xl font-bold text-white">{complexity.wordCount}</p>
            <p className="text-xs text-gray-400">Palabras</p>
          </div>
          <div className="card text-center">
            <p className="text-2xl font-bold text-white">{complexity.sentenceCount}</p>
            <p className="text-xs text-gray-400">Oraciones</p>
          </div>
          <div className="card text-center">
            <p className="text-2xl font-bold text-white">{complexity.uniqueWords}</p>
            <p className="text-xs text-gray-400">Palabras únicas</p>
          </div>
          <div className="card text-center">
            <p className="text-2xl font-bold text-white">
              {Math.round(complexity.lexicalDiversity * 100)}%
            </p>
            <p className="text-xs text-gray-400">Diversidad léxica</p>
          </div>
        </div>

        {/* Feedback */}
        <div className="card">
          <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent-primary" />
            Retroalimentación
          </h3>
          <div className="space-y-2">
            {result.feedback.map((fb, i) => (
              <p key={i} className="text-gray-300">{fb}</p>
            ))}
          </div>
        </div>

        {/* Corrections */}
        {result.corrections.length > 0 && (
          <div className="card">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              Correcciones
            </h3>
            <div className="space-y-3">
              {result.corrections.map((correction, i) => (
                <div key={i} className="p-3 bg-dark-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-red-400 line-through">{correction.original}</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">{correction.corrected}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      correction.type === 'spelling' ? 'bg-blue-500/20 text-blue-400' :
                      correction.type === 'grammar' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {correction.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{correction.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Suggestions */}
        {result.suggestions.length > 0 && (
          <div className="card bg-accent-primary/10 border-accent-primary/30">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-accent-primary" />
              Sugerencias para mejorar
            </h3>
            <ul className="space-y-2">
              {result.suggestions.map((suggestion, i) => (
                <li key={i} className="text-gray-300 text-sm">{suggestion}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Your text */}
        <div className="card">
          <h3 className="font-semibold text-white mb-3">Tu texto</h3>
          <p className="text-gray-300 whitespace-pre-wrap">{text}</p>
        </div>

        <button onClick={handleReset} className="btn-primary w-full">
          <RotateCcw className="w-5 h-5" />
          Intentar de nuevo
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Prompt */}
      <div className="card bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-accent-primary/30">
        <div className="flex items-start gap-3">
          <PenLine className="w-6 h-6 text-accent-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-white mb-1">Escribe sobre:</h3>
            <p className="text-gray-200">{prompt}</p>
            {promptEs && <p className="text-sm text-gray-400 mt-1">{promptEs}</p>}
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="flex flex-wrap gap-3 text-sm">
        <span className={`px-3 py-1 rounded-full ${
          wordCount >= minWords ? 'bg-green-500/20 text-green-400' : 'bg-dark-600 text-gray-400'
        }`}>
          Mínimo: {minWords} palabras
        </span>
        <span className="px-3 py-1 rounded-full bg-dark-600 text-gray-400">
          Máximo: {maxWords} palabras
        </span>
        <span className="px-3 py-1 rounded-full bg-accent-primary/20 text-accent-primary">
          Nivel: {level}
        </span>
        {timeLimit && (
          <span className={`px-3 py-1 rounded-full flex items-center gap-1 ${
            timerActive ? 'bg-amber-500/20 text-amber-400' : 'bg-dark-600 text-gray-400'
          }`}>
            <Timer className="w-4 h-4" />
            {formatTime(timeLeft || timeLimit)}
          </span>
        )}
      </div>

      {/* Hints toggle */}
      {hints.length > 0 && (
        <button
          onClick={() => setShowHints(!showHints)}
          className="text-sm text-accent-primary hover:underline flex items-center gap-1"
        >
          <Lightbulb className="w-4 h-4" />
          {showHints ? 'Ocultar pistas' : 'Mostrar pistas'}
        </button>
      )}

      {/* Hints */}
      <AnimatePresence>
        {showHints && hints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 bg-dark-700 rounded-xl"
          >
            <p className="text-sm text-gray-400 mb-2">Palabras útiles:</p>
            <div className="flex flex-wrap gap-2">
              {hints.map((hint, i) => (
                <span key={i} className="px-2 py-1 bg-dark-600 text-gray-300 text-sm rounded">
                  {hint}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text area */}
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (!timerActive && timeLimit && e.target.value.length > 0) {
              startTimer();
            }
          }}
          placeholder="Escribe tu respuesta aquí..."
          className="input-field h-48 resize-none"
          disabled={isAnalyzing}
        />
        
        {/* Word counter */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 text-sm">
          <span className={`${
            wordCount < minWords ? 'text-gray-500' :
            wordCount > maxWords ? 'text-red-400' : 'text-green-400'
          }`}>
            {wordCount}/{minWords}-{maxWords}
          </span>
        </div>
      </div>

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={wordCount < minWords || isAnalyzing}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isAnalyzing ? (
          <>
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            Analizando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar ({wordCount < minWords ? `faltan ${minWords - wordCount} palabras` : 'listo'})
          </>
        )}
      </button>
    </div>
  );
}
