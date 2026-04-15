import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  ArrowLeft,
  PenTool,
  CheckCircle,
  Lightbulb,
  FileText,
  Target,
  Clock,
  Award,
  Eye,
  Save
} from 'lucide-react';
import type { GuidedProduction } from '../../types';

interface GuidedWritingProps {
  production: GuidedProduction;
  taskTitle?: string;
  onComplete: (response: string) => void;
  onBack?: () => void;
}

export default function GuidedWriting({ 
  production, 
  taskTitle,
  onComplete,
  onBack
}: GuidedWritingProps) {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [showModelResponse, setShowModelResponse] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selfEvaluation, setSelfEvaluation] = useState<Record<string, boolean>>({});

  const currentPrompt = production.prompts[currentPromptIndex];
  const wordCount = userResponse.trim().split(/\s+/).filter(w => w).length;
  const minWords = currentPrompt?.minWords || 0;
  const maxWords = currentPrompt?.maxWords || 500;

  const handleSubmit = () => {
    if (wordCount < minWords) return;
    setIsSubmitted(true);
  };

  const handleSelfEvaluate = (criterion: string, met: boolean) => {
    setSelfEvaluation(prev => ({ ...prev, [criterion]: met }));
  };

  const handleComplete = () => {
    onComplete(userResponse);
  };

  const handleNextPrompt = () => {
    if (currentPromptIndex < production.prompts.length - 1) {
      setCurrentPromptIndex(prev => prev + 1);
      setUserResponse('');
      setIsSubmitted(false);
      setShowHints(false);
      setShowModelResponse(false);
      setSelfEvaluation({});
    } else {
      handleComplete();
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
        {production.prompts.length > 1 && (
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">{currentPromptIndex + 1} / {production.prompts.length}</span>
          </div>
        )}
      </div>

      {/* Title and Scenario */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
          <PenTool className="w-5 h-5" />
          <span className="text-sm font-medium">Escritura Guiada</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          {production.titleEs || production.title}
        </h1>
        {taskTitle && (
          <p className="text-gray-500 text-sm">{taskTitle}</p>
        )}
      </div>

      {/* Scenario Card */}
      <div className="card bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20 mb-6">
        <div className="flex items-start gap-3">
          <FileText className="w-6 h-6 text-emerald-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-emerald-400 uppercase tracking-wide mb-2">Escenario</p>
            <p className="text-gray-200">
              {production.scenarioEs || production.scenario}
            </p>
          </div>
        </div>
      </div>

      {!isSubmitted ? (
        // Writing Phase
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPromptIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-1 space-y-6"
          >
            {/* Instruction */}
            <div className="card">
              <p className="text-lg text-white">
                {currentPrompt.instructionEs || currentPrompt.instruction}
              </p>
              
              {/* Requirements */}
              <div className="flex flex-wrap gap-3 mt-4">
                {currentPrompt.minWords && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-dark-600 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    Mín: {currentPrompt.minWords} palabras
                  </span>
                )}
                {currentPrompt.maxWords && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-dark-600 text-sm text-gray-400">
                    Máx: {currentPrompt.maxWords} palabras
                  </span>
                )}
              </div>

              {/* Required Elements */}
              {currentPrompt.requiredElements && currentPrompt.requiredElements.length > 0 && (
                <div className="mt-4 pt-4 border-t border-dark-500">
                  <p className="text-sm text-gray-400 mb-2">Incluye estos elementos:</p>
                  <div className="flex flex-wrap gap-2">
                    {currentPrompt.requiredElements.map((element, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full bg-accent-primary/20 text-accent-primary text-sm"
                      >
                        {element}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Hints Toggle */}
            {currentPrompt.hints && currentPrompt.hints.length > 0 && (
              <div>
                {!showHints ? (
                  <button
                    onClick={() => setShowHints(true)}
                    className="text-sm text-accent-primary hover:underline flex items-center gap-1"
                  >
                    <Lightbulb className="w-4 h-4" />
                    Ver pistas ({currentPrompt.hints.length})
                  </button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="card bg-yellow-500/10 border-yellow-500/20"
                  >
                    <h4 className="flex items-center gap-2 text-yellow-400 font-medium mb-3">
                      <Lightbulb className="w-5 h-5" />
                      Pistas para ayudarte
                    </h4>
                    <ul className="space-y-2">
                      {(currentPrompt.hintsEs || currentPrompt.hints).map((hint, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-yellow-400">•</span>
                          {hint}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setShowHints(false)}
                      className="text-sm text-gray-500 mt-3"
                    >
                      Ocultar pistas
                    </button>
                  </motion.div>
                )}
              </div>
            )}

            {/* Writing Area */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-400">Tu respuesta:</label>
                <span className={`text-sm ${
                  wordCount < minWords 
                    ? 'text-red-400' 
                    : wordCount > maxWords 
                    ? 'text-orange-400' 
                    : 'text-green-400'
                }`}>
                  {wordCount} {wordCount === 1 ? 'palabra' : 'palabras'}
                </span>
              </div>
              <textarea
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                placeholder="Escribe aquí tu respuesta..."
                className="w-full p-4 rounded-xl bg-dark-700 border-2 border-dark-500 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-accent-primary transition-colors"
                rows={8}
              />
              {wordCount < minWords && (
                <p className="text-sm text-red-400">
                  Necesitas al menos {minWords - wordCount} palabras más
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        // Self-Evaluation Phase
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 space-y-6"
        >
          {/* User's Response */}
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">Tu respuesta</h3>
              <span className="text-sm text-gray-400">{wordCount} palabras</span>
            </div>
            <p className="text-gray-300 whitespace-pre-wrap">{userResponse}</p>
          </div>

          {/* Self-Evaluation Criteria */}
          <div className="card">
            <h3 className="flex items-center gap-2 font-semibold text-white mb-4">
              <Award className="w-5 h-5 text-yellow-400" />
              Autoevaluación
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Marca los criterios que crees haber cumplido:
            </p>
            <div className="space-y-3">
              {(production.evaluationCriteriaEs || production.evaluationCriteria).map((criterion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelfEvaluate(criterion, !selfEvaluation[criterion])}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                    selfEvaluation[criterion]
                      ? 'bg-green-500/20 border border-green-500/30'
                      : 'bg-dark-700 border border-dark-500 hover:border-gray-400'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    selfEvaluation[criterion]
                      ? 'bg-green-500'
                      : 'bg-dark-600'
                  }`}>
                    {selfEvaluation[criterion] && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className={selfEvaluation[criterion] ? 'text-green-300' : 'text-gray-300'}>
                    {criterion}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Model Response Toggle */}
          {production.modelResponse && (
            <div>
              {!showModelResponse ? (
                <button
                  onClick={() => setShowModelResponse(true)}
                  className="btn-secondary flex items-center gap-2 w-full justify-center"
                >
                  <Eye className="w-5 h-5" />
                  Ver respuesta modelo
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="card bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20"
                >
                  <h4 className="flex items-center gap-2 text-blue-400 font-medium mb-3">
                    <FileText className="w-5 h-5" />
                    Respuesta Modelo
                  </h4>
                  <p className="text-gray-300 whitespace-pre-wrap">
                    {production.modelResponseEs || production.modelResponse}
                  </p>
                  <button
                    onClick={() => setShowModelResponse(false)}
                    className="text-sm text-gray-500 mt-3"
                  >
                    Ocultar
                  </button>
                </motion.div>
              )}
            </div>
          )}

          {/* Evaluation Summary */}
          <div className="card bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Criterios cumplidos</p>
                <p className="text-2xl font-bold text-white">
                  {Object.values(selfEvaluation).filter(Boolean).length} / {production.evaluationCriteria.length}
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-dark-700 flex items-center justify-center">
                <span className="text-2xl">
                  {Object.values(selfEvaluation).filter(Boolean).length >= production.evaluationCriteria.length * 0.7
                    ? '🌟'
                    : Object.values(selfEvaluation).filter(Boolean).length >= production.evaluationCriteria.length * 0.5
                    ? '👍'
                    : '📝'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Actions */}
      <div className="mt-8 flex justify-end gap-3">
        {!isSubmitted ? (
          <>
            <button
              onClick={() => {
                // Save draft functionality could be added here
              }}
              className="btn-secondary flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              Guardar borrador
            </button>
            <button
              onClick={handleSubmit}
              disabled={wordCount < minWords}
              className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar
              <CheckCircle className="w-5 h-5" />
            </button>
          </>
        ) : (
          <button
            onClick={handleNextPrompt}
            className="btn-primary flex items-center gap-2"
          >
            {currentPromptIndex < production.prompts.length - 1 ? 'Siguiente Ejercicio' : 'Completar'}
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
