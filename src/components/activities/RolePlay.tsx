import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  User, 
  Check, 
  X, 
  Volume2, 
  ChevronRight,
  RotateCcw,
  Award
} from 'lucide-react';
import type { ConversationScenario, UserDialogueOption } from '../../types';

interface RolePlayProps {
  scenario: ConversationScenario;
  onComplete: (score: number, totalPossible: number, mistakes: string[]) => void;
  onExit?: () => void;
}

export default function RolePlay({ scenario, onComplete, onExit }: RolePlayProps) {
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const [completedTurns, setCompletedTurns] = useState<{
    turnId: string;
    selectedOption?: UserDialogueOption;
    wasCorrect: boolean;
    wasBest: boolean;
  }[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState<{
    option: UserDialogueOption;
    wasCorrect: boolean;
  } | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState<string[]>([]);

  const currentTurn = scenario.dialogue[currentTurnIndex];
  const npcRole = scenario.roles.find(r => !r.isUser);

  const speakText = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleOptionSelect = (option: UserDialogueOption) => {
    const wasCorrect = option.isCorrect;
    const wasBest = option.isBest || false;
    
    // Track the response
    setCompletedTurns(prev => [...prev, {
      turnId: currentTurn.id,
      selectedOption: option,
      wasCorrect,
      wasBest,
    }]);

    // Update score
    if (wasCorrect) {
      setScore(prev => prev + (wasBest ? 10 : 5));
    } else {
      setMistakes(prev => [...prev, option.text]);
    }

    // Show feedback
    setCurrentFeedback({ option, wasCorrect });
    setShowFeedback(true);
  };

  const handleContinue = () => {
    setShowFeedback(false);
    setCurrentFeedback(null);

    const nextTurnId = currentFeedback?.option.nextTurnId;
    
    if (nextTurnId) {
      const nextIndex = scenario.dialogue.findIndex(t => t.id === nextTurnId);
      if (nextIndex !== -1) {
        setCurrentTurnIndex(nextIndex);
        return;
      }
    }

    // Move to next turn
    const nextIndex = currentTurnIndex + 1;
    if (nextIndex < scenario.dialogue.length) {
      setCurrentTurnIndex(nextIndex);
    } else {
      // Conversation complete
      finishConversation();
    }
  };

  const finishConversation = () => {
    setIsComplete(true);
    const totalPossible = scenario.dialogue.filter(t => t.userOptions && t.userOptions.length > 0).length * 10;
    onComplete(score, totalPossible, mistakes);
  };

  const handleRestart = () => {
    setCurrentTurnIndex(0);
    setCompletedTurns([]);
    setShowFeedback(false);
    setCurrentFeedback(null);
    setIsComplete(false);
    setScore(0);
    setMistakes([]);
  };

  // Check if current turn is the final turn (no user options)
  const isFinalTurn = !currentTurn.userOptions || currentTurn.userOptions.length === 0;

  if (isComplete) {
    const totalPossible = scenario.dialogue.filter(t => t.userOptions && t.userOptions.length > 0).length * 10;
    const percentage = Math.round((score / totalPossible) * 100);
    
    return (
      <motion.div
        className="p-6 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
          <Award className="w-10 h-10 text-green-400" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">¡Conversación Completada!</h2>
        <p className="text-gray-400 mb-4">{scenario.titleEs}</p>
        
        <div className="bg-dark-200 rounded-xl p-4 mb-6">
          <div className="text-4xl font-bold text-white mb-1">{percentage}%</div>
          <p className="text-gray-400 text-sm">{score} / {totalPossible} puntos</p>
        </div>
        
        {currentTurn.feedback && (
          <div className="bg-dark-200 rounded-xl p-4 mb-6 text-left">
            <p className="text-gray-400 text-sm">{currentTurn.feedbackEs || currentTurn.feedback}</p>
          </div>
        )}
        
        <div className="flex gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 py-3 rounded-xl bg-dark-200 text-white font-semibold hover:bg-dark-300 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Repetir
          </button>
          <button
            onClick={onExit}
            className="flex-1 py-3 rounded-xl bg-accent-primary text-white font-semibold hover:bg-accent-secondary transition-colors"
          >
            Continuar
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-dark-200">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-white">{scenario.titleEs}</h2>
          <span className="text-sm text-gray-400">
            Puntos: <span className="text-accent-primary font-bold">{score}</span>
          </span>
        </div>
        <p className="text-sm text-gray-400">{scenario.contextEs}</p>
      </div>

      {/* Conversation History */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {completedTurns.map((completed, index) => {
          const turn = scenario.dialogue.find(t => t.id === completed.turnId);
          if (!turn) return null;
          
          return (
            <div key={index} className="space-y-3">
              {/* NPC message */}
              {turn.text && (
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="bg-dark-200 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                    <p className="text-white text-sm">{turn.text}</p>
                    <p className="text-gray-500 text-xs mt-1">{turn.textEs}</p>
                  </div>
                </motion.div>
              )}
              
              {/* User response */}
              {completed.selectedOption && (
                <motion.div
                  className="flex gap-3 justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className={`rounded-2xl rounded-tr-sm p-3 max-w-[80%] ${
                    completed.wasBest 
                      ? 'bg-green-500/20 border border-green-500/30' 
                      : completed.wasCorrect 
                        ? 'bg-accent-primary/20 border border-accent-primary/30'
                        : 'bg-red-500/20 border border-red-500/30'
                  }`}>
                    <p className="text-white text-sm">{completed.selectedOption.text}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {completed.wasCorrect ? (
                        <Check className="w-3 h-3 text-green-400" />
                      ) : (
                        <X className="w-3 h-3 text-red-400" />
                      )}
                      <span className={`text-xs ${completed.wasCorrect ? 'text-green-400' : 'text-red-400'}`}>
                        {completed.wasBest ? 'Excelente' : completed.wasCorrect ? 'Correcto' : 'Incorrecto'}
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent-primary/30 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-accent-primary" />
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}

        {/* Current Turn */}
        <AnimatePresence mode="wait">
          {!showFeedback && (
            <motion.div
              key={currentTurn.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* NPC message for current turn */}
              {currentTurn.text && (
                <div className="flex gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="bg-dark-200 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">{npcRole?.name}</p>
                        <p className="text-white text-sm">{currentTurn.text}</p>
                        <p className="text-gray-500 text-xs mt-1">{currentTurn.textEs}</p>
                      </div>
                      <button
                        onClick={() => speakText(currentTurn.text)}
                        className="p-1 hover:bg-dark-300 rounded transition-colors"
                      >
                        <Volume2 className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Final turn message */}
              {isFinalTurn && currentTurn.feedback && (
                <motion.div
                  className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-white mb-2">{currentTurn.feedbackEs || currentTurn.feedback}</p>
                  <button
                    onClick={finishConversation}
                    className="px-6 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
                  >
                    Finalizar Conversación
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Response Options */}
      {!isFinalTurn && !showFeedback && currentTurn.userOptions && (
        <div className="p-4 border-t border-dark-200 space-y-2">
          <p className="text-xs text-gray-500 mb-2">Elige tu respuesta:</p>
          {currentTurn.userOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => handleOptionSelect(option)}
              className="w-full text-left p-3 rounded-xl bg-dark-200 hover:bg-dark-300 transition-colors group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm">{option.text}</p>
                  <p className="text-gray-500 text-xs">{option.textEs}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-accent-primary transition-colors" />
              </div>
            </motion.button>
          ))}
        </div>
      )}

      {/* Feedback Modal */}
      <AnimatePresence>
        {showFeedback && currentFeedback && (
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`w-full p-6 rounded-t-3xl ${
                currentFeedback.wasCorrect ? 'bg-green-900/90' : 'bg-red-900/90'
              }`}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
            >
              <div className="flex items-center gap-3 mb-3">
                {currentFeedback.wasCorrect ? (
                  <>
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="font-semibold text-green-400">
                      {currentFeedback.option.isBest ? '¡Excelente!' : '¡Correcto!'}
                    </span>
                  </>
                ) : (
                  <>
                    <X className="w-6 h-6 text-red-400" />
                    <span className="font-semibold text-red-400">Casi...</span>
                  </>
                )}
              </div>
              
              <p className="text-white/90 text-sm mb-4">
                {currentFeedback.option.feedbackEs || currentFeedback.option.feedback}
              </p>
              
              <button
                onClick={handleContinue}
                className={`w-full py-3 rounded-xl font-semibold ${
                  currentFeedback.wasCorrect 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-red-500 text-white hover:bg-red-600'
                } transition-colors`}
              >
                Continuar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
