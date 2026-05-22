import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, 
  MicOff,
  Volume2,
  Pause,
  RefreshCw,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Target,
  Headphones,
  MessageCircle
} from 'lucide-react';

// Web Speech API type declarations
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

interface SpeechRecognitionConstructor {
  new(): SpeechRecognitionInstance;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

interface SpeakingPracticeProps {
  phrases: { text: string; translation: string; phonetic?: string }[];
  taskTitle?: string;
  onComplete: (results: { phrase: string; attempts: number; completed: boolean }[]) => void;
  onBack?: () => void;
}

export default function SpeakingPractice({ 
  phrases, 
  taskTitle: _taskTitle,
  onComplete,
  onBack
}: SpeakingPracticeProps) {
  void _taskTitle; // Reserved for future use
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [results, setResults] = useState<{ phrase: string; attempts: number; completed: boolean }[]>([]);
  const [showPhonetic, setShowPhonetic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(true);

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const currentPhrase = phrases[currentIndex];
  const progress = ((currentIndex) / phrases.length) * 100;

  // Check for speech recognition support
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSpeechSupported(false);
    }
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const current = event.resultIndex;
        const result = event.results[current];
        const text = result[0].transcript;
        setTranscript(text);

        if (result.isFinal) {
          checkPronunciation(text);
        }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [currentIndex]);

  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[.,!?;:'"]/g, '')
      .replace(/\s+/g, ' ');
  };

  const checkPronunciation = (spokenText: string) => {
    const normalized = normalizeText(spokenText);
    const target = normalizeText(currentPhrase.text);
    
    // Calculate similarity (simple word-based comparison)
    const spokenWords = normalized.split(' ');
    const targetWords = target.split(' ');
    
    let matchedWords = 0;
    targetWords.forEach(targetWord => {
      if (spokenWords.includes(targetWord)) {
        matchedWords++;
      }
    });

    const similarity = targetWords.length > 0 ? matchedWords / targetWords.length : 0;
    
    if (similarity >= 0.7) {
      setFeedback('correct');
      setResults(prev => [...prev, { 
        phrase: currentPhrase.text, 
        attempts: attempts + 1, 
        completed: true 
      }]);
    } else {
      setFeedback('incorrect');
      setAttempts(prev => prev + 1);
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setTranscript('');
      setFeedback(null);
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speakPhrase = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentPhrase.text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNext = () => {
    if (currentIndex < phrases.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setTranscript('');
      setFeedback(null);
      setAttempts(0);
      setShowPhonetic(false);
    } else {
      // Add remaining incomplete phrases
      const finalResults = [...results];
      if (feedback !== 'correct') {
        finalResults.push({
          phrase: currentPhrase.text,
          attempts: attempts,
          completed: false
        });
      }
      onComplete(finalResults);
    }
  };

  const handleSkip = () => {
    setResults(prev => [...prev, {
      phrase: currentPhrase.text,
      attempts: attempts,
      completed: false
    }]);
    handleNext();
  };

  const handleRetry = () => {
    setTranscript('');
    setFeedback(null);
  };

  // Manual input for browsers without speech recognition
  const [manualInput, setManualInput] = useState('');
  
  const handleManualSubmit = () => {
    if (manualInput.trim()) {
      checkPronunciation(manualInput);
      setTranscript(manualInput);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-[70vh] py-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
        )}
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">{currentIndex + 1} / {phrases.length}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-dark-600 rounded-full mb-8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-accent-primary rounded-full"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 mb-3">
          <Mic className="w-5 h-5" />
          <span className="text-sm font-medium">Práctica de Pronunciación</span>
        </div>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex-1 space-y-6"
        >
          {/* Target Phrase */}
          <div className="card bg-gradient-to-br from-purple-500/10 to-purple-500/10 border-purple-500/20">
            <div className="text-center">
              <p className="text-xs text-purple-400 uppercase tracking-wide mb-3">
                Repite esta frase
              </p>
              <p className="text-2xl md:text-3xl text-white font-medium mb-3">
                {currentPhrase.text}
              </p>
              
              {/* Phonetic */}
              {currentPhrase.phonetic && (
                <div className="mb-3">
                  {!showPhonetic ? (
                    <button
                      onClick={() => setShowPhonetic(true)}
                      className="text-sm text-purple-400 hover:underline"
                    >
                      Ver pronunciación
                    </button>
                  ) : (
                    <p className="text-lg text-gray-400 font-mono">
                      /{currentPhrase.phonetic}/
                    </p>
                  )}
                </div>
              )}

              <p className="text-gray-400">{currentPhrase.translation}</p>

              {/* Listen Button */}
              <button
                onClick={speakPhrase}
                disabled={isPlaying}
                className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-700 hover:bg-dark-600 text-white transition-colors mx-auto"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-purple-400" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
                <span>Escuchar</span>
              </button>
            </div>
          </div>

          {/* Speech Recognition Area */}
          {isSpeechSupported ? (
            <div className="card">
              <div className="text-center">
                {/* Microphone Button */}
                <motion.button
                  onClick={isListening ? stopListening : startListening}
                  disabled={feedback === 'correct'}
                  whileTap={{ scale: 0.95 }}
                  className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 transition-all ${
                    isListening
                      ? 'bg-red-500 animate-pulse'
                      : feedback === 'correct'
                      ? 'bg-green-500'
                      : 'bg-purple-500 hover:bg-purple-600'
                  }`}
                >
                  {feedback === 'correct' ? (
                    <CheckCircle className="w-12 h-12 text-white" />
                  ) : isListening ? (
                    <MicOff className="w-12 h-12 text-white" />
                  ) : (
                    <Mic className="w-12 h-12 text-white" />
                  )}
                </motion.button>

                <p className="text-gray-400 mb-4">
                  {isListening 
                    ? 'Escuchando... Habla ahora' 
                    : feedback === 'correct'
                    ? '¡Excelente pronunciación!'
                    : 'Toca el micrófono y habla'}
                </p>

                {/* Transcript */}
                {transcript && (
                  <div className={`p-4 rounded-xl ${
                    feedback === 'correct'
                      ? 'bg-green-500/10 border border-green-500/30'
                      : feedback === 'incorrect'
                      ? 'bg-red-500/10 border border-red-500/30'
                      : 'bg-dark-700'
                  }`}>
                    <p className="text-sm text-gray-400 mb-1">Lo que dijiste:</p>
                    <p className={`text-lg ${
                      feedback === 'correct' ? 'text-green-400' : feedback === 'incorrect' ? 'text-red-400' : 'text-white'
                    }`}>
                      "{transcript}"
                    </p>
                  </div>
                )}

                {/* Feedback */}
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4"
                  >
                    {feedback === 'correct' ? (
                      <div className="flex items-center justify-center gap-2 text-green-400">
                        <CheckCircle className="w-5 h-5" />
                        <span>¡Correcto! Muy bien pronunciado.</span>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2 text-orange-400">
                          <AlertCircle className="w-5 h-5" />
                          <span>Inténtalo de nuevo</span>
                        </div>
                        <button
                          onClick={handleRetry}
                          className="btn-secondary flex items-center gap-2 mx-auto"
                        >
                          <RefreshCw className="w-4 h-4" />
                          Reintentar
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {attempts > 0 && feedback !== 'correct' && (
                  <p className="text-sm text-gray-500 mt-2">
                    Intentos: {attempts}
                  </p>
                )}
              </div>
            </div>
          ) : (
            // Fallback for browsers without speech recognition
            <div className="card">
              <div className="flex items-start gap-3 mb-4 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-300">
                  Tu navegador no soporta reconocimiento de voz. Escribe lo que dirías para practicar.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={manualInput}
                    onChange={(e) => setManualInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleManualSubmit()}
                    placeholder="Escribe la frase aquí..."
                    disabled={feedback === 'correct'}
                    className="flex-1 px-4 py-2 rounded-xl bg-dark-700 border border-dark-500 text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary"
                  />
                  <button
                    onClick={handleManualSubmit}
                    disabled={!manualInput.trim() || feedback === 'correct'}
                    className="btn-primary"
                  >
                    Verificar
                  </button>
                </div>

                {feedback && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`p-4 rounded-xl ${
                      feedback === 'correct'
                        ? 'bg-green-500/10 border border-green-500/30'
                        : 'bg-red-500/10 border border-red-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {feedback === 'correct' ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      )}
                      <span className={feedback === 'correct' ? 'text-green-400' : 'text-red-400'}>
                        {feedback === 'correct' ? '¡Correcto!' : 'Inténtalo de nuevo'}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {/* Tips */}
          <div className="card bg-dark-700/50">
            <h4 className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2">
              <Headphones className="w-4 h-4" />
              Consejos
            </h4>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Escucha la frase varias veces antes de intentar</li>
              <li>• Habla claro y a un ritmo normal</li>
              <li>• Presta atención a la entonación</li>
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={handleSkip}
          className="text-gray-500 hover:text-gray-400 transition-colors"
        >
          Saltar
        </button>
        
        {feedback === 'correct' && (
          <button
            onClick={handleNext}
            className="btn-primary flex items-center gap-2"
          >
            {currentIndex < phrases.length - 1 ? 'Siguiente' : 'Completar'}
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
