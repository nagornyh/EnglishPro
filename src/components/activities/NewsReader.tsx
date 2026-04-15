// NewsReader Activity Component
// Simplified news articles with comprehension exercises

import { useState } from 'react';
import { NEWS_ARTICLES } from '../../data/simplified-news';
import type { NewsArticle } from '../../data/simplified-news';

interface NewsReaderProps {
  level?: number;
  onComplete?: (score: number, total: number) => void;
  onXPGain?: (xp: number) => void;
}

export default function NewsReader({ level = 1, onComplete, onXPGain }: NewsReaderProps) {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [readArticles, setReadArticles] = useState<Set<string>>(new Set());

  // Filter articles by level
  const availableArticles = NEWS_ARTICLES.filter(a => a.level <= level);

  // Handle article selection
  const handleSelectArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
    setShowQuiz(false);
    setAnswers({});
    setShowResults(false);
    setShowVocabulary(false);
  };

  // Handle answer selection
  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  };

  // Check quiz answers
  const checkAnswers = () => {
    if (!selectedArticle) return;
    
    setShowResults(true);
    setReadArticles(prev => new Set([...prev, selectedArticle.id]));
    
    const correct = selectedArticle.comprehensionQuestions.filter(
      (q, i) => answers[i] === q.correctAnswer
    ).length;
    
    const total = selectedArticle.comprehensionQuestions.length;
    const xp = correct * 15 + selectedArticle.readingTime * 5;
    
    onXPGain?.(xp);
    onComplete?.(correct, total);
  };

  // Get category icon
  const getCategoryIcon = (category: NewsArticle['category']) => {
    const icons: Record<NewsArticle['category'], string> = {
      technology: '💻',
      science: '🔬',
      culture: '🎭',
      environment: '🌍',
      health: '🏥',
      sports: '⚽',
      world: '🌐',
      business: '💼',
      education: '📚',
    };
    return icons[category];
  };

  // Article list view
  if (!selectedArticle) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">📰 News Reader</h2>
          <p className="text-gray-400">Lee artículos de noticias simplificados y practica comprensión</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {availableArticles.map(article => (
            <div
              key={article.id}
              onClick={() => handleSelectArticle(article)}
              className={`
                bg-dark-800 rounded-xl p-5 cursor-pointer transition-all hover:scale-[1.02] hover:bg-dark-700
                ${readArticles.has(article.id) ? 'ring-2 ring-green-500/50' : ''}
              `}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{getCategoryIcon(article.category)}</span>
                <div className="flex items-center gap-2">
                  {readArticles.has(article.id) && (
                    <span className="text-green-400 text-sm">✓ Leído</span>
                  )}
                  <span className="px-2 py-1 bg-primary-600/30 text-primary-300 rounded text-xs">
                    Nivel {article.level}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1">{article.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{article.titleEs}</p>
              
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>📖 {article.readingTime} min</span>
                <span>❓ {article.comprehensionQuestions.length} preguntas</span>
                <span>📝 {article.vocabulary.length} palabras</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Calculate score if results shown
  const score = showResults
    ? selectedArticle.comprehensionQuestions.filter((q, i) => answers[i] === q.correctAnswer).length
    : 0;

  // Article reading view
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Back button */}
      <button
        onClick={() => setSelectedArticle(null)}
        className="mb-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        ← Volver a artículos
      </button>

      {/* Article header */}
      <div className="bg-dark-800 rounded-xl p-6 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{getCategoryIcon(selectedArticle.category)}</span>
          <div>
            <span className="px-2 py-1 bg-primary-600/30 text-primary-300 rounded text-xs">
              Nivel {selectedArticle.level}
            </span>
            <span className="ml-2 text-gray-500 text-xs">{selectedArticle.datePublished}</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-2">{selectedArticle.title}</h1>
        <p className="text-gray-400 mb-4">{selectedArticle.titleEs}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>📖 {selectedArticle.readingTime} min de lectura</span>
        </div>
      </div>

      {/* Article content */}
      {!showQuiz && (
        <div className="bg-dark-800 rounded-xl p-6 mb-4">
          <div className="prose prose-invert max-w-none">
            {selectedArticle.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image description */}
          {selectedArticle.imageDescription && (
            <div className="mt-4 p-4 bg-dark-700 rounded-lg">
              <p className="text-gray-500 text-sm italic">
                📷 {selectedArticle.imageDescription}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Vocabulary section */}
      <div className="bg-dark-800 rounded-xl p-6 mb-4">
        <button
          onClick={() => setShowVocabulary(!showVocabulary)}
          className="flex items-center justify-between w-full"
        >
          <h3 className="text-lg font-bold text-white">
            📚 Vocabulario ({selectedArticle.vocabulary.length} palabras)
          </h3>
          <span className="text-gray-400">{showVocabulary ? '▲' : '▼'}</span>
        </button>
        
        {showVocabulary && (
          <div className="mt-4 space-y-3">
            {selectedArticle.vocabulary.map((word, index) => (
              <div key={index} className="bg-dark-700 rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <span className="font-bold text-primary-400">{word.word}</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">{word.definition}</p>
                <p className="text-gray-500 text-sm">{word.definitionEs}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      {!showQuiz && (
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setShowQuiz(true)}
            className="flex-1 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-colors"
          >
            📝 Comenzar Quiz de Comprensión
          </button>
        </div>
      )}

      {/* Quiz section */}
      {showQuiz && (
        <div className="bg-dark-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">
            📝 Comprensión de Lectura
          </h3>

          <div className="space-y-6">
            {selectedArticle.comprehensionQuestions.map((question, qIndex) => (
              <div key={qIndex} className="border-b border-dark-600 pb-6 last:border-0">
                <p className="text-white font-medium mb-2">
                  {qIndex + 1}. {question.question}
                </p>
                <p className="text-gray-500 text-sm mb-4">{question.questionEs}</p>

                <div className="space-y-2">
                  {question.options.map((option, oIndex) => {
                    const isSelected = answers[qIndex] === oIndex;
                    const isCorrect = oIndex === question.correctAnswer;
                    const showCorrectness = showResults;

                    return (
                      <button
                        key={oIndex}
                        onClick={() => handleAnswer(qIndex, oIndex)}
                        disabled={showResults}
                        className={`
                          w-full p-3 rounded-lg text-left transition-colors
                          ${!showCorrectness && isSelected ? 'bg-primary-600 text-white' : ''}
                          ${!showCorrectness && !isSelected ? 'bg-dark-700 text-gray-300 hover:bg-dark-600' : ''}
                          ${showCorrectness && isCorrect ? 'bg-green-600 text-white' : ''}
                          ${showCorrectness && isSelected && !isCorrect ? 'bg-red-600 text-white' : ''}
                          ${showCorrectness && !isSelected && !isCorrect ? 'bg-dark-700 text-gray-500' : ''}
                        `}
                      >
                        <span className="mr-2">{String.fromCharCode(65 + oIndex)}.</span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showResults && (
                  <div className={`mt-3 p-3 rounded-lg ${
                    answers[qIndex] === question.correctAnswer
                      ? 'bg-green-900/30 border border-green-700'
                      : 'bg-red-900/30 border border-red-700'
                  }`}>
                    <p className="text-gray-300 text-sm">{question.explanation}</p>
                    <p className="text-gray-500 text-sm mt-1">{question.explanationEs}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quiz results */}
          {showResults ? (
            <div className="mt-6 text-center">
              <div className="text-4xl mb-2">
                {score === selectedArticle.comprehensionQuestions.length ? '🎉' : score >= selectedArticle.comprehensionQuestions.length / 2 ? '👍' : '💪'}
              </div>
              <p className="text-xl font-bold text-white">
                {score} / {selectedArticle.comprehensionQuestions.length} correctas
              </p>
              <p className="text-gray-400 mb-4">
                {Math.round((score / selectedArticle.comprehensionQuestions.length) * 100)}% de precisión
              </p>
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-500 transition-colors"
              >
                Leer otro artículo
              </button>
            </div>
          ) : (
            <button
              onClick={checkAnswers}
              disabled={Object.keys(answers).length < selectedArticle.comprehensionQuestions.length}
              className={`
                w-full mt-6 py-3 rounded-xl font-bold transition-colors
                ${Object.keys(answers).length >= selectedArticle.comprehensionQuestions.length
                  ? 'bg-primary-600 text-white hover:bg-primary-500'
                  : 'bg-dark-700 text-gray-500 cursor-not-allowed'}
              `}
            >
              Verificar Respuestas ({Object.keys(answers).length}/{selectedArticle.comprehensionQuestions.length})
            </button>
          )}

          {/* Discussion questions */}
          {showResults && (
            <div className="mt-8 pt-6 border-t border-dark-600">
              <h4 className="text-lg font-bold text-white mb-4">💬 Preguntas de Discusión</h4>
              <div className="space-y-3">
                {selectedArticle.discussionQuestions.map((q, index) => (
                  <div key={index} className="bg-dark-700 rounded-lg p-4">
                    <p className="text-gray-300">{q.english}</p>
                    <p className="text-gray-500 text-sm mt-1">{q.spanish}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
