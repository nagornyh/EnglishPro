import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle,
  Send,
  ArrowRight,
  ArrowLeft,
  User,
  Bot,
  Lightbulb,
  Volume2,
  CheckCircle,
  RotateCcw,
  Eye,
  EyeOff
} from 'lucide-react';
import type { ModelDialogue as ModelDialogueType } from '../../types';

interface DialoguePracticeProps {
  dialogue: ModelDialogueType;
  taskTitle?: string;
  onComplete: (score: number) => void;
  onBack?: () => void;
}

interface Message {
  id: number;
  speaker: 'user' | 'bot';
  text: string;
  expected?: string;
  isCorrect?: boolean;
}

export default function DialoguePractice({ 
  dialogue, 
  taskTitle: _taskTitle,
  onComplete,
  onBack
}: DialoguePracticeProps) {
  void _taskTitle; // Reserved for future use
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showTranslation, setShowTranslation] = useState(true);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Determine which lines the user should complete (every other line or specific role)
  const userRole = dialogue.speakers[1]; // Assume second speaker is user
  const userLineIndices = dialogue.lines
    .map((line, idx) => ({ line, idx }))
    .filter(({ line }) => line.speakerId === userRole?.id)
    .map(({ idx }) => idx);

  const currentLine = dialogue.lines[currentLineIndex];
  const isUserTurn = userLineIndices.includes(currentLineIndex);
  const _currentSpeaker = dialogue.speakers.find(s => s.id === currentLine?.speakerId);
  void _currentSpeaker; // Reserved for future use

  // Auto-add bot messages
  const addBotMessage = (lineIndex: number) => {
    const line = dialogue.lines[lineIndex];
    const _speaker = dialogue.speakers.find(s => s.id === line.speakerId);
    void _speaker; // Reserved for future use
    
    setMessages(prev => [...prev, {
      id: Date.now(),
      speaker: 'bot',
      text: line.text,
    }]);

    // Speak the line
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(line.text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Initialize with first bot message if needed
  useState(() => {
    if (currentLineIndex === 0 && !isUserTurn && messages.length === 0) {
      setTimeout(() => addBotMessage(0), 500);
      setCurrentLineIndex(1);
    }
  });

  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[.,!?;:'"]/g, '')
      .replace(/\s+/g, ' ');
  };

  const checkSimilarity = (input: string, expected: string): boolean => {
    const normalizedInput = normalizeText(input);
    const normalizedExpected = normalizeText(expected);
    
    // Exact match
    if (normalizedInput === normalizedExpected) return true;
    
    // Word-based similarity
    const inputWords = normalizedInput.split(' ');
    const expectedWords = normalizedExpected.split(' ');
    
    let matches = 0;
    expectedWords.forEach(word => {
      if (inputWords.includes(word)) matches++;
    });
    
    return matches / expectedWords.length >= 0.6;
  };

  const handleSubmit = () => {
    if (!userInput.trim() || !isUserTurn) return;

    const expected = currentLine.text;
    const isCorrect = checkSimilarity(userInput, expected);

    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      speaker: 'user',
      text: userInput,
      expected: isCorrect ? undefined : expected,
      isCorrect,
    }]);

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    }

    setUserInput('');
    setShowHint(false);

    // Move to next line
    const nextIndex = currentLineIndex + 1;
    if (nextIndex < dialogue.lines.length) {
      setCurrentLineIndex(nextIndex);
      
      // If next is bot turn, add bot message
      if (!userLineIndices.includes(nextIndex)) {
        setTimeout(() => {
          addBotMessage(nextIndex);
          // Check if there's another line after bot
          if (nextIndex + 1 < dialogue.lines.length) {
            setCurrentLineIndex(nextIndex + 1);
          } else {
            setIsComplete(true);
          }
        }, 1000);
      }
    } else {
      setIsComplete(true);
    }

    // Scroll to bottom
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleComplete = () => {
    const totalUserLines = userLineIndices.length;
    const score = totalUserLines > 0 ? Math.round((correctCount / totalUserLines) * 100) : 100;
    onComplete(score);
  };

  const handleRestart = () => {
    setMessages([]);
    setCurrentLineIndex(0);
    setCorrectCount(0);
    setIsComplete(false);
    setUserInput('');
    setShowHint(false);
    
    // Re-initialize
    if (!userLineIndices.includes(0)) {
      setTimeout(() => {
        addBotMessage(0);
        setCurrentLineIndex(1);
      }, 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-[80vh] py-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
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
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`p-2 rounded-lg transition-colors ${
              showTranslation ? 'bg-accent-primary/20 text-accent-primary' : 'bg-dark-600 text-gray-400'
            }`}
            title={showTranslation ? 'Ocultar traducciones' : 'Mostrar traducciones'}
          >
            {showTranslation ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 mb-2">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Práctica de Diálogo</span>
        </div>
        <h2 className="text-xl font-bold text-white">
          {dialogue.titleEs || dialogue.title}
        </h2>
        <p className="text-sm text-gray-400">{dialogue.contextEs || dialogue.context}</p>
      </div>

      {/* Speakers Legend */}
      <div className="flex justify-center gap-4 mb-4">
        {dialogue.speakers.map((speaker, idx) => (
          <div 
            key={speaker.id}
            className={`flex items-center gap-2 px-3 py-1 rounded-full ${
              idx === 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
            }`}
          >
            {idx === 0 ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
            <span className="text-sm">{speaker.name}</span>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-2 space-y-4 mb-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.speaker === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${message.speaker === 'user' ? 'order-1' : ''}`}>
                <div 
                  className={`p-4 rounded-2xl ${
                    message.speaker === 'user'
                      ? message.isCorrect
                        ? 'bg-green-500/20 border border-green-500/30'
                        : message.isCorrect === false
                        ? 'bg-orange-500/20 border border-orange-500/30'
                        : 'bg-accent-primary/20 border border-accent-primary/30'
                      : 'bg-dark-700 border border-dark-500'
                  }`}
                >
                  <p className="text-white">{message.text}</p>
                  {message.expected && (
                    <div className="mt-2 pt-2 border-t border-white/10">
                      <p className="text-xs text-gray-400">Sugerido:</p>
                      <p className="text-sm text-green-400">{message.expected}</p>
                    </div>
                  )}
                </div>
                {message.speaker === 'bot' && (
                  <button
                    onClick={() => speakText(message.text)}
                    className="mt-1 text-xs text-gray-500 hover:text-gray-400 flex items-center gap-1"
                  >
                    <Volume2 className="w-3 h-3" /> Escuchar
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>

      {/* Completion Screen */}
      {isComplete ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20"
        >
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">¡Diálogo Completado!</h3>
            <p className="text-gray-400 mb-4">
              Respondiste correctamente {correctCount} de {userLineIndices.length} líneas
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleRestart}
                className="btn-secondary flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Repetir
              </button>
              <button
                onClick={handleComplete}
                className="btn-primary flex items-center gap-2"
              >
                Continuar
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Input Area */
        isUserTurn && (
          <div className="space-y-3">
            {/* Current expected line hint */}
            {showHint && currentLine && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex items-start gap-2 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20"
              >
                <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-yellow-300">{currentLine.text}</p>
                  {showTranslation && currentLine.textEs && (
                    <p className="text-xs text-gray-400 mt-1">({currentLine.textEs})</p>
                  )}
                </div>
              </motion.div>
            )}

            <div className="flex items-center gap-2">
              {!showHint && (
                <button
                  onClick={() => setShowHint(true)}
                  className="p-3 rounded-xl bg-dark-700 text-yellow-400 hover:bg-dark-600 transition-colors"
                  title="Ver pista"
                >
                  <Lightbulb className="w-5 h-5" />
                </button>
              )}
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder={`Tu turno como ${userRole?.name || 'participante'}...`}
                className="flex-1 px-4 py-3 rounded-xl bg-dark-700 border border-dark-500 text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors"
              />
              <button
                onClick={handleSubmit}
                disabled={!userInput.trim()}
                className="p-3 rounded-xl bg-accent-primary text-white hover:bg-accent-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            {showTranslation && currentLine?.textEs && !showHint && (
              <p className="text-sm text-gray-500 text-center">
                Pista: "{currentLine.textEs}"
              </p>
            )}
          </div>
        )
      )}
    </motion.div>
  );
}
