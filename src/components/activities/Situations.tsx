// Situations Component
// Real-life situational conversation practice

import { useState } from 'react';
import { SITUATIONAL_SCENARIOS } from '../../data/situations';
import type { SituationalScenario } from '../../data/situations';

interface SituationsProps {
  level?: number;
  onXPGain?: (xp: number) => void;
}

export default function Situations({ level = 3, onXPGain }: SituationsProps) {
  const [selectedScenario, setSelectedScenario] = useState<SituationalScenario | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [completedPhrases, setCompletedPhrases] = useState<Set<string>>(new Set());
  const [practiceMode, setPracticeMode] = useState(false);

  // Filter scenarios by difficulty (using difficulty as level)
  const availableScenarios = SITUATIONAL_SCENARIOS.filter(s => s.difficulty <= level);

  // Group by category
  const groupedScenarios = availableScenarios.reduce((acc, scenario) => {
    if (!acc[scenario.category]) {
      acc[scenario.category] = [];
    }
    acc[scenario.category].push(scenario);
    return acc;
  }, {} as Record<string, SituationalScenario[]>);

  const categoryInfo: Record<string, { name: string; icon: string }> = {
    emergency: { name: 'Emergencias', icon: '🚨' },
    travel: { name: 'Viajes', icon: '✈️' },
    'job-interview': { name: 'Entrevistas', icon: '💼' },
    technology: { name: 'Tecnología', icon: '💻' },
    healthcare: { name: 'Salud', icon: '🏥' },
    social: { name: 'Social', icon: '👋' },
    business: { name: 'Negocios', icon: '📊' },
    shopping: { name: 'Compras', icon: '🛒' },
  };

  // Mark phrase as practiced
  const markPhraseComplete = (phraseId: string) => {
    setCompletedPhrases(prev => new Set([...prev, phraseId]));
  };

  // Scenario list view
  if (!selectedScenario) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">🎭 Situaciones Reales</h2>
          <p className="text-gray-400">Practica frases útiles para situaciones de la vida real</p>
        </div>

        <div className="space-y-6">
          {Object.entries(groupedScenarios).map(([category, scenarios]) => (
            <div key={category} className="bg-dark-800 rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>{categoryInfo[category]?.icon || '📌'}</span>
                {categoryInfo[category]?.name || category}
              </h3>

              <div className="grid md:grid-cols-2 gap-3">
                {scenarios.map(scenario => (
                  <button
                    key={scenario.id}
                    onClick={() => setSelectedScenario(scenario)}
                    className="p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors text-left group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl">{scenario.icon}</span>
                      <span className="text-xs px-2 py-1 bg-primary-600/30 text-primary-300 rounded">
                        Level {scenario.difficulty}
                      </span>
                    </div>
                    <h4 className="font-bold text-white group-hover:text-primary-400">
                      {scenario.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{scenario.nameEs}</p>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {scenario.description}
                    </p>
                    <div className="mt-3 flex gap-2 text-xs text-gray-500">
                      {scenario.dialogue && <span>💬 Diálogo</span>}
                      <span>📝 {scenario.phrases.length} frases</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Scenario detail view
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Back button */}
      <button
        onClick={() => {
          setSelectedScenario(null);
          setPracticeMode(false);
        }}
        className="mb-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        ← Volver a situaciones
      </button>

      {/* Header */}
      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{selectedScenario.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-white">{selectedScenario.name}</h1>
            <p className="text-gray-500">{selectedScenario.nameEs}</p>
          </div>
        </div>
        <p className="text-gray-400">{selectedScenario.description}</p>
        <p className="text-gray-500 text-sm mt-1">{selectedScenario.descriptionEs}</p>
      </div>

      {/* Mode toggle */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setPracticeMode(false)}
          className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
            !practiceMode 
              ? 'bg-primary-600 text-white' 
              : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
          }`}
        >
          📖 Aprender
        </button>
        <button
          onClick={() => setPracticeMode(true)}
          className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
            practiceMode 
              ? 'bg-primary-600 text-white' 
              : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
          }`}
        >
          🎯 Practicar
        </button>
      </div>

      {/* Learning mode */}
      {!practiceMode && (
        <>
          {/* Key Phrases */}
          <div className="bg-dark-800 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">🔑 Frases Clave</h3>
            
            <div className="space-y-3">
              {selectedScenario.phrases.map((phrase) => (
                <div
                  key={phrase.id}
                  className={`p-4 rounded-lg transition-colors ${
                    completedPhrases.has(phrase.id)
                      ? 'bg-green-900/20 border border-green-700'
                      : 'bg-dark-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-white font-medium">{phrase.phrase}</p>
                      <p className="text-gray-500 text-sm">{phrase.translation}</p>
                      {phrase.pronunciation && (
                        <p className="text-primary-400 text-sm mt-1">🔊 {phrase.pronunciation}</p>
                      )}
                      <p className="text-gray-400 text-sm mt-2 italic">💡 {phrase.usage}</p>
                      <p className="text-gray-500 text-xs">{phrase.usageEs}</p>
                      
                      {/* Examples */}
                      {phrase.examples && phrase.examples.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-dark-600">
                          {phrase.examples.map((ex, i) => (
                            <div key={i} className="text-sm">
                              <span className="text-gray-400">"{ex.english}"</span>
                              <span className="text-gray-600 ml-2">- {ex.spanish}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        markPhraseComplete(phrase.id);
                        onXPGain?.(5);
                      }}
                      className={`ml-3 p-2 rounded-lg transition-colors ${
                        completedPhrases.has(phrase.id)
                          ? 'bg-green-600 text-white'
                          : 'bg-dark-600 text-gray-400 hover:bg-dark-500'
                      }`}
                    >
                      ✓
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dialogue (singular) */}
          {selectedScenario.dialogue && (
            <div className="bg-dark-800 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">💬 Diálogo</h3>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {showTranslation ? '🙈 Ocultar' : '👀 Ver'} traducciones
                </button>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-medium">{selectedScenario.dialogue.title}</h4>
                <p className="text-gray-500 text-sm">{selectedScenario.dialogue.titleEs}</p>
                <p className="text-gray-400 text-sm mt-2">{selectedScenario.dialogue.context}</p>
                <p className="text-gray-500 text-xs">{selectedScenario.dialogue.contextEs}</p>
              </div>

              {/* Dialogue lines */}
              <div className="space-y-3">
                {selectedScenario.dialogue.lines.map((line, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      index % 2 === 0 ? '' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`
                      flex-1 max-w-[80%] p-4 rounded-2xl
                      ${index % 2 === 0 
                        ? 'bg-dark-700 rounded-tl-none' 
                        : 'bg-primary-600/20 rounded-tr-none'}
                    `}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-sm font-bold ${
                          index % 2 === 0 ? 'text-blue-400' : 'text-green-400'
                        }`}>
                          {line.speaker}
                        </span>
                      </div>
                      <p className="text-white">{line.text}</p>
                      {showTranslation && (
                        <p className="text-gray-500 text-sm mt-1">{line.textEs}</p>
                      )}
                      {line.note && (
                        <p className="text-yellow-400/70 text-xs mt-2 italic">📝 {line.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          {selectedScenario.tips && selectedScenario.tips.length > 0 && (
            <div className="bg-dark-800 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">💡 Tips</h3>
              <div className="space-y-2">
                {selectedScenario.tips.map((tip, index) => (
                  <div key={index} className="flex gap-3 p-3 bg-dark-700 rounded-lg">
                    <span className="text-yellow-400">•</span>
                    <div>
                      <p className="text-gray-300">{tip.english}</p>
                      <p className="text-gray-500 text-sm">{tip.spanish}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cultural Notes */}
          {selectedScenario.culturalNotes && selectedScenario.culturalNotes.length > 0 && (
            <div className="bg-dark-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">🌍 Notas Culturales</h3>
              <div className="space-y-2">
                {selectedScenario.culturalNotes.map((note, index) => (
                  <div key={index} className="flex gap-3 p-3 bg-dark-700 rounded-lg">
                    <span className="text-blue-400">ℹ️</span>
                    <div>
                      <p className="text-gray-300">{note.english}</p>
                      <p className="text-gray-500 text-sm">{note.spanish}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Practice mode */}
      {practiceMode && (
        <PracticeMode 
          scenario={selectedScenario} 
          onXPGain={onXPGain}
        />
      )}
    </div>
  );
}

// Practice mode component
interface PracticeModeProps {
  scenario: SituationalScenario;
  onXPGain?: (xp: number) => void;
}

function PracticeMode({ scenario, onXPGain }: PracticeModeProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [result, setResult] = useState<'correct' | 'partial' | 'wrong' | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentPhrase = scenario.phrases[currentPhraseIndex];

  const checkAnswer = () => {
    const normalized = userInput.toLowerCase().trim();
    const expected = currentPhrase.phrase.toLowerCase().trim();
    
    if (normalized === expected) {
      setResult('correct');
      setScore(prev => prev + 10);
      onXPGain?.(10);
    } else if (expected.includes(normalized) || normalized.includes(expected.split(' ').slice(0, 3).join(' '))) {
      setResult('partial');
      setScore(prev => prev + 5);
      onXPGain?.(5);
    } else {
      setResult('wrong');
    }
  };

  const nextPhrase = () => {
    if (currentPhraseIndex + 1 >= scenario.phrases.length) {
      setCompleted(true);
    } else {
      setCurrentPhraseIndex(prev => prev + 1);
      setUserInput('');
      setShowHint(false);
      setResult(null);
    }
  };

  const reset = () => {
    setCurrentPhraseIndex(0);
    setUserInput('');
    setShowHint(false);
    setResult(null);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="bg-dark-800 rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-2">¡Práctica Completada!</h3>
        <p className="text-gray-400 mb-6">
          Has practicado todas las frases de "{scenario.name}"
        </p>
        <div className="bg-dark-700 rounded-xl p-4 mb-6">
          <p className="text-gray-500">Puntuación</p>
          <p className="text-3xl font-bold text-primary-400">{score} pts</p>
        </div>
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-500"
        >
          Practicar de nuevo
        </button>
      </div>
    );
  }

  return (
    <div className="bg-dark-800 rounded-xl p-6">
      {/* Progress */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500">
          Frase {currentPhraseIndex + 1} de {scenario.phrases.length}
        </span>
        <span className="text-primary-400 font-bold">{score} pts</span>
      </div>
      <div className="h-2 bg-dark-600 rounded-full mb-6">
        <div
          className="h-full bg-primary-500 rounded-full transition-all"
          style={{ width: `${((currentPhraseIndex + 1) / scenario.phrases.length) * 100}%` }}
        />
      </div>

      {/* Spanish prompt */}
      <div className="bg-dark-700 rounded-lg p-4 mb-4">
        <p className="text-gray-500 text-sm mb-2">Traduce al inglés:</p>
        <p className="text-xl text-white">{currentPhrase.translation}</p>
        <p className="text-gray-500 text-sm mt-2">💡 Contexto: {currentPhrase.usage}</p>
      </div>

      {/* Input */}
      <div className="mb-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !result && checkAnswer()}
          disabled={result !== null}
          placeholder="Escribe la frase en inglés..."
          className={`
            w-full p-4 rounded-xl bg-dark-700 border-2 text-white
            ${result === 'correct' ? 'border-green-500' : ''}
            ${result === 'partial' ? 'border-yellow-500' : ''}
            ${result === 'wrong' ? 'border-red-500' : 'border-dark-600'}
          `}
        />
      </div>

      {/* Hint */}
      {showHint && !result && (
        <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/50 rounded-lg">
          <p className="text-yellow-400 text-sm">
            💡 Pista: {currentPhrase.phrase.split(' ').slice(0, 3).join(' ')}...
          </p>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className={`mb-4 p-4 rounded-lg ${
          result === 'correct' ? 'bg-green-900/30 border border-green-700' :
          result === 'partial' ? 'bg-yellow-900/30 border border-yellow-700' :
          'bg-red-900/30 border border-red-700'
        }`}>
          <p className={`font-bold ${
            result === 'correct' ? 'text-green-400' :
            result === 'partial' ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {result === 'correct' ? '✓ ¡Perfecto!' :
             result === 'partial' ? '≈ ¡Casi!' : '✗ No exactamente'}
          </p>
          <p className="text-gray-300 mt-2">
            Respuesta correcta: <span className="text-white font-medium">{currentPhrase.phrase}</span>
          </p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        {!result ? (
          <>
            <button
              onClick={() => setShowHint(true)}
              disabled={showHint}
              className="px-4 py-3 bg-dark-600 text-gray-300 rounded-xl hover:bg-dark-500 disabled:opacity-50"
            >
              💡 Pista
            </button>
            <button
              onClick={checkAnswer}
              disabled={!userInput.trim()}
              className="flex-1 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 disabled:opacity-50"
            >
              Verificar
            </button>
          </>
        ) : (
          <button
            onClick={nextPhrase}
            className="flex-1 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500"
          >
            {currentPhraseIndex + 1 >= scenario.phrases.length ? 'Ver resultados' : 'Siguiente →'}
          </button>
        )}
      </div>
    </div>
  );
}
