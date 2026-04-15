import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X } from 'lucide-react';
import { getGrammaticalFalseFriendsByLevel } from '../data/grammatical-false-friends';
import { PronunciationHint } from './PronunciationHint';
import type { GrammaticalFalseFriend } from '../data/grammatical-false-friends';

interface FalseFriendsPracticeProps {
  level: number;
  onComplete: () => void;
  onBack: () => void;
}

function levelToFalseFriendsTier(level: number): number {
  if (level <= 3) return 1;
  if (level <= 5) return 2;
  if (level <= 7) return 3;
  return 4;
}

function buildOptions(item: GrammaticalFalseFriend): string[] {
  // correctEnglish y wrongEnglish siempre deben aparecer
  const critical = [item.correctEnglish, item.wrongEnglish].filter(Boolean);
  const distractors: string[] = [];
  item.moreExamples?.forEach(ex => {
    if (ex.correct && !critical.includes(ex.correct)) distractors.push(ex.correct);
    if (ex.wrong && !critical.includes(ex.wrong)) distractors.push(ex.wrong);
  });
  // Rellena hasta 4 con distractores aleatorios, pero critical siempre entra
  const shuffledDistractors = distractors.sort(() => Math.random() - 0.5).slice(0, 4 - critical.length);
  return [...critical, ...shuffledDistractors].sort(() => Math.random() - 0.5);
}

// Construye un mapa opción inglesa → significado en español para mostrar durante corrección
function buildContextMap(item: GrammaticalFalseFriend): Record<string, string> {
  const map: Record<string, string> = {
    [item.correctEnglish]: `"${item.spanishExample}"`,
    [item.wrongEnglish]: `Trampa: "${item.spanishExample}"`,
  };
  item.moreExamples?.forEach(ex => {
    const label = ex.context ? `"${ex.context}"` : null;
    if (ex.correct && !map[ex.correct]) {
      map[ex.correct] = label ?? 'Traducción correcta';
    }
    if (ex.wrong && !map[ex.wrong]) {
      map[ex.wrong] = label ? `Trampa: ${label}` : 'Traducción incorrecta';
    }
  });
  return map;
}

export default function FalseFriendsPractice({ level, onComplete, onBack }: FalseFriendsPracticeProps) {
  const tier = levelToFalseFriendsTier(level);
  const allItems = useMemo(() => getGrammaticalFalseFriendsByLevel(tier), [tier]);
  const items = useMemo(
    () => [...allItems].sort(() => Math.random() - 0.5).slice(0, 6),
    [allItems]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-6xl mx-auto">
        <p className="text-gray-400 mb-4">No hay falsos amigos gramaticales para este nivel.</p>
        <button onClick={onComplete} className="btn-primary">
          Continuar
        </button>
        <button onClick={onBack} className="btn-secondary mt-3">
          Atrás
        </button>
      </div>
    );
  }

  const current = items[currentIndex];
  const options = useMemo(() => buildOptions(current), [current]);
  const contextMap = useMemo(() => buildContextMap(current), [current]);
  const progress = ((currentIndex + 1) / items.length) * 100;

  const handleSelect = (opt: string) => {
    if (showResult) return;
    setSelectedOption(opt);
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    const correct = selectedOption.trim() === current.correctEnglish.trim();
    if (correct) setCorrectCount(c => c + 1);
    setShowResult(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowResult(false);
    if (currentIndex + 1 >= items.length) {
      onComplete();
    } else {
      setCurrentIndex(i => i + 1);
    }
  };

  const isCorrect = selectedOption?.trim() === current.correctEnglish.trim();

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <h2 className="text-xl font-bold text-white">Falsos Amigos Gramaticales</h2>
      <p className="text-gray-400 text-sm">
        Elige la traducción correcta al inglés. Evita la trampa del español.
      </p>

      {/* Progress bar */}
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
        />
      </div>
      <p className="text-sm text-gray-400">
        {currentIndex + 1} / {items.length} • Correctas: {correctCount}
      </p>

      <div className="bg-dark-700 rounded-xl p-6 space-y-6">
        <div className="border-b border-dark-600 pb-4">
          <p className="text-xs text-accent-primary mb-1">¿Cómo se dice en inglés?</p>
          <p className="text-xl font-bold text-white">{current.spanishExample}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-300 mb-3">Elige la opción correcta:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {options.map(opt => {
              const selected = selectedOption === opt;
              const showCorrect = showResult && opt === current.correctEnglish;
              const showWrong = showResult && selected && !isCorrect;
              return (
                <button
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  disabled={showResult}
                  className={`text-left py-3 px-4 rounded-lg border transition-colors ${
                    showCorrect
                      ? 'border-green-500 bg-green-500/20 text-green-400'
                      : showWrong
                      ? 'border-red-500 bg-red-500/20 text-red-400'
                      : selected
                      ? 'border-accent-primary bg-accent-primary/20 text-white'
                      : 'border-dark-600 bg-dark-800 text-gray-300 hover:border-accent-primary'
                  }`}
                >
                  <span className="flex flex-col items-start gap-1">
                    <span className="flex items-center gap-2">
                      {showResult && (showCorrect ? <Check className="w-4 h-4" /> : showWrong ? <X className="w-4 h-4" /> : null)}
                      {opt}
                    </span>
                    {/* Fonética solo durante corrección */}
                    {showResult && <PronunciationHint word={opt} className="text-xs opacity-70" />}
                    {/* Significado en español solo tras corregir */}
                    {showResult && contextMap[opt] && (
                      <span className={`text-xs mt-0.5 ${showCorrect ? 'text-green-300/80' : showWrong ? 'text-red-300/80' : 'text-gray-500'}`}>
                        {showCorrect ? '✓ ' : showWrong ? '✗ ' : ''}{contextMap[opt]}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {showResult && (
          <div className="bg-dark-800 rounded-lg p-4 space-y-2">
            <p className="text-sm text-accent-primary font-medium">Explicación</p>
            <p className="text-sm text-gray-300">{current.explanationEs || current.explanation}</p>
            <p className="text-xs text-gray-400 bg-dark-700 rounded px-3 py-2 font-mono">
              {current.ruleEs || current.rule}
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button onClick={onBack} className="btn-secondary flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Atrás
        </button>
        {!showResult ? (
          <button
            onClick={handleCheck}
            disabled={selectedOption === null}
            className="btn-primary"
          >
            Comprobar
          </button>
        ) : (
          <button onClick={handleNext} className="btn-primary">
            {currentIndex + 1 >= items.length ? 'Continuar' : 'Siguiente'}
          </button>
        )}
      </div>
    </div>
  );
}
