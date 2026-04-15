import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import troubleWordsService from '../services/troubleWordsService';
import type { TroubleWord, TroubleWordStats } from '../services/troubleWordsService';

export default function TroubleWordsReview() {
  const [troubleWords, setTroubleWords] = useState<TroubleWord[]>([]);
  const [stats, setStats] = useState<TroubleWordStats | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [mode, setMode] = useState<'review' | 'list'>('list');
  const [filter, setFilter] = useState<'all' | 'urgent' | 'today'>('all');

  useEffect(() => {
    loadData();
  }, [filter]);

  const loadData = () => {
    let words: TroubleWord[];
    switch (filter) {
      case 'urgent':
        words = troubleWordsService.getUrgentWords(20);
        break;
      case 'today':
        words = troubleWordsService.getNightReviewWords();
        break;
      default:
        words = troubleWordsService.getTroubleWords();
    }
    setTroubleWords(words);
    setStats(troubleWordsService.getStats());
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const handleMarkSuccess = () => {
    if (troubleWords[currentIndex]) {
      troubleWordsService.recordSuccess(troubleWords[currentIndex].word);
      nextWord();
    }
  };

  const handleMarkError = () => {
    if (troubleWords[currentIndex]) {
      troubleWordsService.recordError(
        troubleWords[currentIndex].word,
        'review-error',
        undefined,
        troubleWords[currentIndex].translation
      );
      nextWord();
    }
  };

  const nextWord = () => {
    if (currentIndex < troubleWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      loadData();
      setMode('list');
    }
  };

  const currentWord = troubleWords[currentIndex];

  return (
    <>
      <div className="mb-6">
        <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
          ← Volver al inicio
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">🎯 Palabras Problemáticas</h1>
      <p className="text-gray-400 mb-6">
        Practica las palabras que te han dado problemas para dominarlas
      </p>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-400">{stats.totalTroubleWords}</div>
            <div className="text-sm text-gray-400">Por practicar</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{stats.needsAttention}</div>
            <div className="text-sm text-gray-400">Necesitan atención</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{stats.improvedThisWeek}</div>
            <div className="text-sm text-gray-400">Mejoraron esta semana</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{stats.masteredFromTrouble}</div>
            <div className="text-sm text-gray-400">Dominadas</div>
          </div>
        </div>
      )}

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          Todas ({troubleWordsService.getTroubleWords().length})
        </button>
        <button
          onClick={() => setFilter('urgent')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'urgent' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🔴 Urgentes
        </button>
        <button
          onClick={() => setFilter('today')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'today' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🌙 Errores de hoy
        </button>
      </div>

      {troubleWords.length === 0 ? (
        <div className="bg-gray-800 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-xl font-bold mb-2">¡Sin palabras problemáticas!</h2>
          <p className="text-gray-400">
            {filter === 'today' 
              ? 'No has cometido errores hoy. ¡Excelente trabajo!'
              : 'No tienes palabras que necesiten práctica extra.'}
          </p>
          <Link 
            to="/practice"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Ir a practicar
          </Link>
        </div>
      ) : mode === 'list' ? (
        <>
          {/* Start review button */}
          <button
            onClick={() => setMode('review')}
            className="w-full mb-6 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            🚀 Comenzar repaso ({troubleWords.length} palabras)
          </button>

          {/* Word list */}
          <div className="space-y-3">
            {troubleWords.map((word) => {
              const improvement = troubleWordsService.getImprovementPercentage(word.word);
              return (
                <div 
                  key={word.word}
                  className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold">{word.word}</span>
                      {word.translation && (
                        <span className="text-gray-400">→ {word.translation}</span>
                      )}
                    </div>
                    <div className="flex gap-4 mt-1 text-sm">
                      <span className="text-red-400">❌ {word.errorCount} errores</span>
                      <span className="text-green-400">✅ {word.successCount} aciertos</span>
                      {word.errorTypes.length > 0 && (
                        <span className="text-gray-500">
                          Tipo: {word.errorTypes.join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${
                      improvement >= 50 ? 'text-green-400' : 
                      improvement >= 25 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {improvement}%
                    </div>
                    <div className="text-xs text-gray-500">mejora</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        /* Review mode */
        <div className="w-full">
          {/* Progress */}
          <div className="mb-4 flex justify-between items-center">
            <span className="text-gray-400">
              Palabra {currentIndex + 1} de {troubleWords.length}
            </span>
            <button
              onClick={() => setMode('list')}
              className="text-gray-400 hover:text-white"
            >
              Salir
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-gray-700 rounded-full mb-6">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${((currentIndex + 1) / troubleWords.length) * 100}%` }}
            />
          </div>

          {/* Flashcard */}
          {currentWord && (
            <div 
              className="bg-gray-800 rounded-xl p-8 text-center cursor-pointer min-h-[300px] flex flex-col justify-center"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              <div className="text-3xl font-bold mb-4">{currentWord.word}</div>
              
              {showAnswer ? (
                <>
                  <div className="text-xl text-blue-400 mb-4">
                    {currentWord.translation || 'Sin traducción'}
                  </div>
                  
                  {currentWord.contexts.length > 0 && (
                    <div className="mt-4 text-left bg-gray-700/50 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">Contextos donde erraste:</div>
                      {currentWord.contexts.slice(0, 2).map((ctx, i) => (
                        <div key={i} className="text-sm text-gray-300 italic">
                          "{ctx}"
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Error types */}
                  {currentWord.errorTypes.length > 0 && (
                    <div className="mt-4 text-sm text-gray-400">
                      Tipos de error: {currentWord.errorTypes.join(', ')}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-gray-500">Toca para ver la respuesta</div>
              )}
            </div>
          )}

          {/* Action buttons */}
          {showAnswer && (
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleMarkError}
                className="flex-1 py-4 bg-red-600 rounded-xl text-lg font-bold hover:bg-red-700 transition-colors"
              >
                ❌ Aún me cuesta
              </button>
              <button
                onClick={handleMarkSuccess}
                className="flex-1 py-4 bg-green-600 rounded-xl text-lg font-bold hover:bg-green-700 transition-colors"
              >
                ✅ ¡Lo recordé!
              </button>
            </div>
          )}

          {!showAnswer && (
            <button
              onClick={() => setShowAnswer(true)}
              className="w-full mt-6 py-4 bg-blue-600 rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Mostrar respuesta
            </button>
          )}
        </div>
      )}

      {/* Tips */}
      {troubleWords.length > 0 && mode === 'list' && (
        <div className="mt-8 bg-gray-800/50 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-3">💡 Consejos para dominar estas palabras:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Repasa las palabras urgentes primero - son las que más errores tienen</li>
            <li>• Haz el repaso nocturno para consolidar lo aprendido hoy</li>
            <li>• Intenta crear oraciones con las palabras difíciles</li>
            <li>• Asocia cada palabra con una imagen o historia</li>
          </ul>
        </div>
      )}
    </>
  );
}
