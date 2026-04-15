import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause,
  Volume2,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Users,
  Lightbulb,
  RefreshCw,
  Eye,
  EyeOff,
  Bookmark
} from 'lucide-react';
import type { ModelDialogue as ModelDialogueType } from '../../types';

interface ModelDialogueProps {
  dialogue: ModelDialogueType;
  taskTitle?: string;
  onComplete: () => void;
  onBack?: () => void;
}

export default function ModelDialogue({ 
  dialogue, 
  taskTitle: _taskTitle,
  onComplete,
  onBack
}: ModelDialogueProps) {
  void _taskTitle; // Reserved for future use
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showAllLines, setShowAllLines] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playedLines, setPlayedLines] = useState<Set<number>>(new Set());
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const currentLine = dialogue.lines[currentLineIndex];
  const currentSpeaker = dialogue.speakers.find(s => s.id === currentLine?.speakerId);

  const speakerColors: Record<string, string> = {
    '0': 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
    '1': 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-400',
    '2': 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
    '3': 'from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400',
  };

  const getSpeakerColor = (speakerId: string) => {
    const index = dialogue.speakers.findIndex(s => s.id === speakerId);
    return speakerColors[String(index % 4)] || speakerColors['0'];
  };

  const speakLine = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setPlayedLines(prev => new Set(prev).add(currentLineIndex));
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (currentLineIndex < dialogue.lines.length - 1) {
      setCurrentLineIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentLineIndex > 0) {
      setCurrentLineIndex(prev => prev - 1);
    }
  };

  const handlePlayAll = () => {
    setShowAllLines(true);
    // Play all lines sequentially
    let index = 0;
    const playNext = () => {
      if (index < dialogue.lines.length) {
        const line = dialogue.lines[index];
        const utterance = new SpeechSynthesisUtterance(line.text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.onstart = () => {
          setCurrentLineIndex(index);
          setIsPlaying(true);
        };
        utterance.onend = () => {
          setPlayedLines(prev => new Set(prev).add(index));
          index++;
          setTimeout(playNext, 500); // Small pause between lines
        };
        window.speechSynthesis.speak(utterance);
      } else {
        setIsPlaying(false);
      }
    };
    playNext();
  };

  const progress = ((currentLineIndex + 1) / dialogue.lines.length) * 100;

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
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`p-2 rounded-lg transition-colors ${
              showTranslation ? 'bg-accent-primary/20 text-accent-primary' : 'bg-dark-600 text-gray-400'
            }`}
            title={showTranslation ? 'Ocultar traducciones' : 'Mostrar traducciones'}
          >
            {showTranslation ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setShowAllLines(!showAllLines)}
            className={`p-2 rounded-lg transition-colors ${
              showAllLines ? 'bg-accent-primary/20 text-accent-primary' : 'bg-dark-600 text-gray-400'
            }`}
            title={showAllLines ? 'Vista línea por línea' : 'Ver todo el diálogo'}
          >
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Title and Context */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/20 text-accent-primary mb-3">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">Diálogo Modelo</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          {dialogue.titleEs || dialogue.title}
        </h1>
        <p className="text-gray-400">{dialogue.contextEs || dialogue.context}</p>
      </motion.div>

      {/* Speakers Legend */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {dialogue.speakers.map((speaker) => (
          <div 
            key={speaker.id}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r border ${getSpeakerColor(speaker.id)}`}
          >
            <span className="font-medium">{speaker.name}</span>
            <span className="text-xs opacity-70">({speaker.role})</span>
          </div>
        ))}
      </div>

      {/* Progress bar (line-by-line mode) */}
      {!showAllLines && (
        <div className="h-2 bg-dark-600 rounded-full mb-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-accent-primary rounded-full"
          />
        </div>
      )}

      {/* Dialogue Content */}
      <div className="flex-1">
        {showAllLines ? (
          // Show all lines
          <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
            {dialogue.lines.map((line, idx) => {
              const speaker = dialogue.speakers.find(s => s.id === line.speakerId);
              const isActive = idx === currentLineIndex;
              const isPlayed = playedLines.has(idx);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex gap-3 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div 
                    className={`flex-1 max-w-[80%] p-4 rounded-2xl border bg-gradient-to-br ${getSpeakerColor(line.speakerId)} ${
                      isActive ? 'ring-2 ring-accent-primary' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">{speaker?.name}</span>
                      <button
                        onClick={() => {
                          setCurrentLineIndex(idx);
                          speakLine(line.text);
                        }}
                        className="p-1 rounded-full hover:bg-white/10 transition-colors"
                      >
                        <Volume2 className={`w-4 h-4 ${isPlayed ? 'text-green-400' : ''}`} />
                      </button>
                    </div>
                    <p className="text-white">{line.text}</p>
                    {showTranslation && (
                      <p className="text-sm text-gray-400 mt-1">{line.textEs}</p>
                    )}
                    {line.note && (
                      <p className="text-xs text-yellow-400 mt-2 italic">💡 {line.noteEs || line.note}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          // Line by line view
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLineIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col items-center"
            >
              <div className={`w-full max-w-6xl p-6 rounded-2xl border bg-gradient-to-br ${getSpeakerColor(currentLine.speakerId)}`}>
                {/* Speaker */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-xl">
                        {currentSpeaker?.role.includes('custom') ? '👤' : '🗣️'}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{currentSpeaker?.name}</p>
                      <p className="text-xs opacity-70">{currentSpeaker?.role}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">
                    {currentLineIndex + 1} / {dialogue.lines.length}
                  </span>
                </div>

                {/* Line content */}
                <div className="space-y-3">
                  <p className="text-xl text-white leading-relaxed">{currentLine.text}</p>
                  {showTranslation && (
                    <p className="text-gray-400">{currentLine.textEs}</p>
                  )}
                  {currentLine.note && (
                    <div className="flex items-start gap-2 pt-3 border-t border-white/10">
                      <Lightbulb className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-yellow-300">{currentLine.noteEs || currentLine.note}</p>
                    </div>
                  )}
                </div>

                {/* Audio button */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => isPlaying ? stopSpeaking() : speakLine(currentLine.text)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                      isPlaying 
                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-5 h-5" />
                        <span>Detener</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        <span>Escuchar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Key Phrases Section */}
      {dialogue.keyPhrases && dialogue.keyPhrases.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 card"
        >
          <h3 className="flex items-center gap-2 font-semibold text-white mb-4">
            <Bookmark className="w-5 h-5 text-accent-primary" />
            Frases Clave
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {dialogue.keyPhrases.slice(0, 4).map((phrase, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-dark-700/50">
                <p className="text-white font-medium">{phrase.phrase}</p>
                <p className="text-sm text-gray-400">{phrase.translation}</p>
                {phrase.usage && (
                  <p className="text-xs text-accent-primary mt-1">{phrase.usage}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        {!showAllLines ? (
          <>
            <button
              onClick={handlePrev}
              disabled={currentLineIndex === 0}
              className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
              Anterior
            </button>

            <button
              onClick={handlePlayAll}
              className="btn-secondary flex items-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Ver Todo
            </button>

            {currentLineIndex < dialogue.lines.length - 1 ? (
              <button
                onClick={handleNext}
                className="btn-primary flex items-center gap-2"
              >
                Siguiente
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={onComplete}
                className="btn-primary flex items-center gap-2"
              >
                Completar
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </>
        ) : (
          <button
            onClick={onComplete}
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            Completar Diálogo
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
