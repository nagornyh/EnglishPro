import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Theater,
  Play,
  Volume2,
  MapPin,
  ArrowRight,
  RotateCcw,
  Trophy,
  Star,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { scenarios } from '../data/scenarios';
import type { Scenario, Choice } from '../data/scenarios';

interface DialogueState {
  currentLineIndex: number;
  score: number;
  correctChoices: number;
  totalChoices: number;
  visitedNodes: string[];
  selectedChoices: string[];
  startTime: number;
}

export default function ScenarioMode() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [dialogueState, setDialogueState] = useState<DialogueState | null>(null);
  const [, setShowChoice] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const currentLine = selectedScenario && dialogueState
    ? selectedScenario.dialogue[dialogueState.currentLineIndex]
    : null;

  // Text-to-speech for dialogue
  const speak = useCallback((text: string, voice: 'male' | 'female' = 'male') => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    
    // Try to select appropriate voice
    const voices = speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => 
      v.lang.startsWith('en') && 
      (voice === 'female' ? v.name.toLowerCase().includes('female') || v.name.includes('Samantha') : true)
    );
    if (preferredVoice) utterance.voice = preferredVoice;
    
    speechSynthesis.speak(utterance);
  }, []);

  // Handle dialogue progression
  const nextLine = useCallback(() => {
    if (!selectedScenario || !dialogueState) return;

    const nextIndex = dialogueState.currentLineIndex + 1;
    
    if (nextIndex >= selectedScenario.dialogue.length) {
      setIsComplete(true);
      return;
    }

    const nextDialogue = selectedScenario.dialogue[nextIndex];
    
    setDialogueState(prev => ({
      ...prev!,
      currentLineIndex: nextIndex,
      visitedNodes: [...prev!.visitedNodes, nextDialogue.id],
    }));

    setFeedback(null);

    if (nextDialogue.type === 'choice') {
      setShowChoice(true);
    } else {
      setShowChoice(false);
      if (autoPlay && nextDialogue.speaker !== 'you' && nextDialogue.text) {
        speak(nextDialogue.text, nextDialogue.speaker === 'other' ? 'female' : 'male');
      }
    }
  }, [selectedScenario, dialogueState, autoPlay, speak]);

  // Handle choice selection
  const handleChoice = (choice: Choice) => {
    if (!dialogueState) return;

    const isCorrect = choice.isCorrect || choice.points > 0;
    
    setDialogueState(prev => ({
      ...prev!,
      score: prev!.score + choice.points,
      correctChoices: prev!.correctChoices + (isCorrect ? 1 : 0),
      totalChoices: prev!.totalChoices + 1,
      selectedChoices: [...prev!.selectedChoices, choice.id],
    }));

    if (choice.feedback) {
      setFeedback({
        isCorrect,
        message: choice.feedback,
      });
    }

    // Auto advance after feedback
    setTimeout(() => {
      if (choice.nextLineId) {
        const targetIndex = selectedScenario!.dialogue.findIndex(d => d.id === choice.nextLineId);
        if (targetIndex !== -1) {
          setDialogueState(prev => ({
            ...prev!,
            currentLineIndex: targetIndex,
          }));
          setShowChoice(false);
          setFeedback(null);
        } else {
          nextLine();
        }
      } else {
        nextLine();
      }
    }, 1500);
  };

  // Start a scenario
  const startScenario = (scenario: Scenario) => {
    setSelectedScenario(scenario);
    setDialogueState({
      currentLineIndex: 0,
      score: 0,
      correctChoices: 0,
      totalChoices: 0,
      visitedNodes: [scenario.dialogue[0].id],
      selectedChoices: [],
      startTime: Date.now(),
    });
    setIsComplete(false);
    setShowChoice(scenario.dialogue[0].type === 'choice');
    setFeedback(null);

    if (autoPlay && scenario.dialogue[0].speaker !== 'you' && scenario.dialogue[0].text) {
      setTimeout(() => speak(scenario.dialogue[0].text!), 500);
    }
  };

  // Reset scenario
  const resetScenario = () => {
    if (selectedScenario) {
      startScenario(selectedScenario);
    }
  };

  // Go back to scenario list
  const exitScenario = () => {
    setSelectedScenario(null);
    setDialogueState(null);
    setIsComplete(false);
    speechSynthesis.cancel();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => speechSynthesis.cancel();
  }, []);

  // Render completion screen
  if (isComplete && dialogueState && selectedScenario) {
    const totalTime = Math.round((Date.now() - dialogueState.startTime) / 1000);
    const percentage = dialogueState.totalChoices > 0
      ? Math.round((dialogueState.correctChoices / dialogueState.totalChoices) * 100)
      : 100;
    const stars = percentage >= 90 ? 3 : percentage >= 70 ? 2 : percentage >= 50 ? 1 : 0;

    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full text-center space-y-6"
        >
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <Star
                key={i}
                className={`w-12 h-12 ${
                  i <= stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                }`}
              />
            ))}
          </div>

          <h1 className="text-2xl font-bold text-white">
            {percentage >= 90 ? '¡Excelente actuación!' :
             percentage >= 70 ? '¡Buen trabajo!' :
             percentage >= 50 ? 'No está mal' : 'Sigue practicando'}
          </h1>

          <p className="text-gray-400">
            Completaste: {selectedScenario.title}
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="card">
              <Trophy className="w-6 h-6 mx-auto text-yellow-400 mb-2" />
              <p className="text-2xl font-bold text-white">{dialogueState.score}</p>
              <p className="text-xs text-gray-400">Puntos</p>
            </div>
            <div className="card">
              <CheckCircle className="w-6 h-6 mx-auto text-green-400 mb-2" />
              <p className="text-2xl font-bold text-white">{percentage}%</p>
              <p className="text-xs text-gray-400">Precisión</p>
            </div>
            <div className="card">
              <Clock className="w-6 h-6 mx-auto text-blue-400 mb-2" />
              <p className="text-2xl font-bold text-white">{totalTime}s</p>
              <p className="text-xs text-gray-400">Tiempo</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={resetScenario} className="flex-1 btn-secondary">
              <RotateCcw className="w-5 h-5" />
              Repetir
            </button>
            <button onClick={exitScenario} className="flex-1 btn-primary">
              Más escenarios
            </button>
          </div>
        </motion.div>
      </>
    );
  }

  // Render dialogue view
  if (selectedScenario && dialogueState && currentLine) {
    return (
      <>
        <div className="w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button onClick={exitScenario} className="text-gray-400 hover:text-white">
              ← Salir
            </button>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                Puntos: <span className="text-accent-primary font-bold">{dialogueState.score}</span>
              </span>
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className={`p-2 rounded-lg ${autoPlay ? 'bg-accent-primary/20 text-accent-primary' : 'bg-dark-600 text-gray-400'}`}
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scenario context */}
          <div className="card bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/30 mb-4">
            <div className="flex items-center gap-2 text-purple-400 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{selectedScenario.setting}</span>
            </div>
            <h2 className="text-lg font-semibold text-white">{selectedScenario.title}</h2>
          </div>

          {/* Progress */}
          <div className="h-1 bg-dark-600 rounded-full mb-6 overflow-hidden">
            <motion.div
              className="h-full bg-accent-primary"
              initial={{ width: 0 }}
              animate={{ width: `${((dialogueState.currentLineIndex + 1) / selectedScenario.dialogue.length) * 100}%` }}
            />
          </div>

          {/* Dialogue */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {currentLine.type === 'dialogue' && (
                <div className={`flex ${currentLine.speaker === 'you' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    currentLine.speaker === 'you'
                      ? 'bg-accent-primary text-white rounded-br-sm'
                      : 'bg-dark-600 text-gray-200 rounded-bl-sm'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs opacity-70">
                        {currentLine.speaker === 'you' ? 'Tú' : currentLine.character || 'Interlocutor'}
                      </span>
                      <button
                        onClick={() => currentLine.text && speak(currentLine.text)}
                        className="p-1 hover:bg-white/10 rounded-full"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm md:text-base">{currentLine.text}</p>
                    {currentLine.translation && (
                      <p className="text-xs opacity-60 mt-2 italic">{currentLine.translation}</p>
                    )}
                  </div>
                </div>
              )}

              {currentLine.type === 'narration' && (
                <div className="text-center p-4 bg-dark-700/50 rounded-xl italic text-gray-400">
                  {currentLine.text}
                </div>
              )}

              {currentLine.type === 'choice' && (
                <div className="space-y-3">
                  <p className="text-center text-gray-400 mb-4">¿Qué respondes?</p>
                  {currentLine.choices?.map((choice) => (
                    <motion.button
                      key={choice.id}
                      onClick={() => handleChoice(choice)}
                      disabled={feedback !== null}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full p-4 text-left rounded-xl transition-all ${
                        dialogueState.selectedChoices.includes(choice.id)
                          ? choice.isCorrect
                            ? 'bg-green-500/20 border border-green-500/50'
                            : 'bg-red-500/20 border border-red-500/50'
                          : 'bg-dark-600 hover:bg-dark-500 border border-dark-500'
                      }`}
                    >
                      <p className="text-white">{choice.text}</p>
                      {choice.translation && (
                        <p className="text-xs text-gray-400 mt-1">{choice.translation}</p>
                      )}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Feedback */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`p-4 rounded-xl flex items-start gap-3 ${
                      feedback.isCorrect
                        ? 'bg-green-500/10 border border-green-500/30'
                        : 'bg-amber-500/10 border border-amber-500/30'
                    }`}
                  >
                    {feedback.isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    )}
                    <p className={feedback.isCorrect ? 'text-green-400' : 'text-amber-400'}>
                      {feedback.message}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* Continue button */}
          {currentLine.type !== 'choice' && (
            <button
              onClick={nextLine}
              className="btn-primary w-full mt-6"
            >
              Continuar
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </>
    );
  }

  // Render scenario selection
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <Theater className="w-7 h-7 text-purple-400" />
          Escenarios Interactivos
        </h1>
        <p className="text-gray-400 mt-1">
          Practica inglés en situaciones reales con diálogos interactivos
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {scenarios.map((scenario) => (
          <motion.button
            key={scenario.id}
            onClick={() => startScenario(scenario)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="card text-left hover:border-accent-primary/50 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl">
                {scenario.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{scenario.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{scenario.description}</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1 text-purple-400">
                    <MapPin className="w-3 h-3" />
                    {scenario.setting}
                  </span>
                  <span className={`px-2 py-0.5 rounded ${
                    scenario.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                    scenario.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {scenario.difficulty === 'easy' ? 'Fácil' :
                     scenario.difficulty === 'medium' ? 'Medio' : 'Difícil'}
                  </span>
                  <span className="text-gray-500">
                    ~{Math.round(scenario.dialogue.length * 0.5)} min
                  </span>
                </div>
              </div>
              <Play className="w-5 h-5 text-accent-primary" />
            </div>
          </motion.button>
        ))}
      </div>

      {scenarios.length === 0 && (
        <div className="text-center py-12">
          <Theater className="w-16 h-16 mx-auto text-gray-600 mb-4" />
          <p className="text-gray-400">No hay escenarios disponibles aún</p>
        </div>
      )}
    </>
  );
}
