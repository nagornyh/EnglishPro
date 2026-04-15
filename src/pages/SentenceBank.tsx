import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSentencesByLevel } from '../data/graded-sentences';
import type { GradedSentence } from '../data/graded-sentences';

export default function SentenceBank() {
  const [selectedLevel, setSelectedLevel] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [sentences, setSentences] = useState<GradedSentence[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<'browse' | 'practice'>('browse');
  const [showTranslation, setShowTranslation] = useState(false);
  const [showVocabulary, setShowVocabulary] = useState(false);

  useEffect(() => {
    setSentences(getSentencesByLevel(selectedLevel));
    setCurrentIndex(0);
    setShowTranslation(false);
    setShowVocabulary(false);
  }, [selectedLevel]);

  const currentSentence = sentences[currentIndex];

  const nextSentence = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
    setShowTranslation(false);
    setShowVocabulary(false);
  };

  const prevSentence = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(sentences.length - 1);
    }
    setShowTranslation(false);
    setShowVocabulary(false);
  };

  const levelDescriptions: Record<number, string> = {
    1: 'Presente simple, vocabulario básico',
    2: 'Presente continuo, pasado simple',
    3: 'Presente perfecto, comparativos, modales',
    4: 'Pasado perfecto, voz pasiva, cláusulas relativas',
    5: 'Estructuras complejas, expresiones idiomáticas',
  };

  const levelColors: Record<number, string> = {
    1: 'from-green-500 to-green-600',
    2: 'from-blue-500 to-blue-600',
    3: 'from-yellow-500 to-yellow-600',
    4: 'from-orange-500 to-orange-600',
    5: 'from-red-500 to-red-600',
  };

  return (
    <>
      <div className="mb-6">
        <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
          ← Volver al inicio
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">📖 Banco de Oraciones</h1>
      <p className="text-gray-400 mb-6">
        Oraciones graduadas por dificultad para practicar lectura y comprensión
      </p>

      {/* Level selector */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level as 1 | 2 | 3 | 4 | 5)}
            className={`py-3 rounded-lg font-bold transition-all ${
              selectedLevel === level
                ? `bg-gradient-to-r ${levelColors[level]} text-white`
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Nivel {level}
          </button>
        ))}
      </div>

      {/* Level description */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${levelColors[selectedLevel]}`} />
          <span className="font-medium">Nivel {selectedLevel}:</span>
          <span className="text-gray-400">{levelDescriptions[selectedLevel]}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {sentences.length} oraciones disponibles
        </div>
      </div>

      {/* Mode toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMode('browse')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            mode === 'browse' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          📋 Ver lista
        </button>
        <button
          onClick={() => setMode('practice')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            mode === 'practice' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🎯 Practicar
        </button>
      </div>

      {mode === 'browse' ? (
        /* Browse mode - list all sentences */
        <div className="space-y-4">
          {sentences.map((sentence) => (
            <div 
              key={sentence.id}
              className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-colors"
            >
              <div className="text-lg font-medium mb-2">{sentence.text}</div>
              <div className="text-gray-400 mb-3">{sentence.translation}</div>
              
              <div className="flex flex-wrap gap-2">
                {sentence.grammarPoints.map((point, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"
                  >
                    {point}
                  </span>
                ))}
              </div>

              {/* Vocabulary */}
              {sentence.vocabulary.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <div className="flex flex-wrap gap-3">
                    {sentence.vocabulary.map((v, i) => (
                      <span key={i} className="text-sm">
                        <span className="text-yellow-400">{v.word}</span>
                        <span className="text-gray-500"> = </span>
                        <span className="text-gray-400">{v.translation}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Practice mode - flashcard style */
        <div className="w-full">
          {/* Progress */}
          <div className="flex justify-between items-center mb-4 text-gray-400">
            <span>Oración {currentIndex + 1} de {sentences.length}</span>
            <div className="flex gap-2">
              <button 
                onClick={prevSentence}
                className="p-2 bg-gray-700 rounded hover:bg-gray-600"
              >
                ←
              </button>
              <button 
                onClick={nextSentence}
                className="p-2 bg-gray-700 rounded hover:bg-gray-600"
              >
                →
              </button>
            </div>
          </div>

          {currentSentence && (
            <div className="bg-gray-800 rounded-xl p-8">
              {/* English sentence */}
              <div className="text-2xl font-medium mb-6 leading-relaxed">
                {currentSentence.text}
              </div>

              {/* Translation toggle */}
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="w-full py-3 bg-gray-700 rounded-lg mb-4 hover:bg-gray-600 transition-colors"
              >
                {showTranslation ? '🙈 Ocultar traducción' : '👁️ Ver traducción'}
              </button>

              {showTranslation && (
                <div className="text-xl text-blue-400 mb-6 p-4 bg-blue-500/10 rounded-lg">
                  {currentSentence.translation}
                </div>
              )}

              {/* Grammar points */}
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">Puntos gramaticales:</div>
                <div className="flex flex-wrap gap-2">
                  {currentSentence.grammarPoints.map((point, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vocabulary toggle */}
              <button
                onClick={() => setShowVocabulary(!showVocabulary)}
                className="w-full py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                {showVocabulary ? '🙈 Ocultar vocabulario' : '📚 Ver vocabulario clave'}
              </button>

              {showVocabulary && currentSentence.vocabulary.length > 0 && (
                <div className="mt-4 p-4 bg-yellow-500/10 rounded-lg">
                  <div className="grid gap-2">
                    {currentSentence.vocabulary.map((v, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="font-medium text-yellow-400">{v.word}</span>
                        <span className="text-gray-400">{v.translation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevSentence}
              className="flex-1 py-4 bg-gray-700 rounded-xl text-lg font-bold hover:bg-gray-600 transition-colors"
            >
              ← Anterior
            </button>
            <button
              onClick={nextSentence}
              className="flex-1 py-4 bg-blue-600 rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="mt-8 bg-gray-800/50 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-3">💡 Consejos de uso:</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Lee la oración en voz alta para practicar pronunciación</li>
          <li>• Intenta traducir mentalmente antes de ver la respuesta</li>
          <li>• Presta atención a los puntos gramaticales señalados</li>
          <li>• Crea tus propias oraciones usando la misma estructura</li>
        </ul>
      </div>
    </>
  );
}
