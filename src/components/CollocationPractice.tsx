import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X } from 'lucide-react';
import { getCollocationsByLevel } from '../data/collocations-by-level';
import { PronunciationHint } from './PronunciationHint';
import type { CollocationEntry } from '../data/collocations-by-level';

type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

function levelToCefr(level: number): CefrLevel {
  if (level <= 2) return 'A1';
  if (level === 3) return 'A2';
  if (level <= 5) return 'B1';
  if (level <= 7) return 'B2';
  if (level <= 10) return 'C1';
  return 'C2';
}

function isMatchMode(cefr: CefrLevel): boolean {
  return cefr === 'A1' || cefr === 'A2' || cefr === 'B1';
}

/** Reemplaza el collocation en el ejemplo con _____, con fallback por stem de palabras clave. */
const COLLOCATION_STOP = new Set(['a', 'an', 'the', 'to', 'of', 'in', 'on', 'at', 'for', 'with', 'by', 'up', 'out', 'into', 'about', 'and']);
function blankCollocation(example: string, collocation: string): string {
  const esc = collocation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const exact = example.replace(new RegExp(esc, 'gi'), '_____');
  if (exact !== example) return exact;
  // Fallback: stem-match cada palabra de contenido (maneja -s/-es/-ed/-ing regulares)
  const contentWords = collocation
    .split(/\s+/)
    .filter(w => !COLLOCATION_STOP.has(w.toLowerCase()) && w.length > 1);
  let result = example;
  for (const word of contentWords) {
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(`\\b${escapedWord}\\w*\\b`, 'gi'), '_____');
  }
  return result;
}

interface CollocationPracticeProps {
  level: number;
  onComplete: () => void;
  onBack?: () => void;
}

export default function CollocationPractice({ level, onComplete, onBack }: CollocationPracticeProps) {
  const cefr = levelToCefr(level);
  const allCollocations = useMemo(() => getCollocationsByLevel(cefr), [cefr]);
  const collocations = useMemo(
    () => [...allCollocations].sort(() => Math.random() - 0.5).slice(0, 8),
    [allCollocations]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const matchMode = isMatchMode(cefr);

  if (collocations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-6xl mx-auto">
        <p className="text-gray-400 mb-4">No hay collocations disponibles para este nivel.</p>
        <button onClick={onComplete} className="btn-primary">
          Continuar
        </button>
      </div>
    );
  }

  const current = collocations[currentIndex];
  const progress = ((currentIndex + 1) / collocations.length) * 100;

  const buildOptions = (entry: CollocationEntry): string[] => {
    const correct = entry.collocation;
    const options = new Set<string>([correct]);

    if (entry.commonError) {
      const err = entry.commonError.split('(')[0].trim();
      if (err && err !== correct) options.add(err);
    }

    const others = collocations
      .filter(c => c.id !== entry.id && c.collocation !== correct)
      .map(c => c.collocation)
      .sort(() => Math.random() - 0.5);

    for (const o of others) {
      if (options.size >= 4) break;
      options.add(o);
    }

    return [...options].sort(() => Math.random() - 0.5);
  };

  const options = useMemo(() => buildOptions(current), [current, collocations]);

  // Map collocation text → Spanish translation for all collocations in this quiz
  const translationMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const c of collocations) {
      map.set(c.collocation, c.translation);
    }
    return map;
  }, [collocations]);

  const displaySentence = blankCollocation(current.example, current.collocation);

  const handleSelect = (opt: string) => {
    if (showResult) return;
    setSelectedOption(opt);
    setShowResult(true);
    if (opt === current.collocation) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < collocations.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      onComplete();
    }
  };

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack ?? (() => window.history.back())}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Salir</span>
        </button>
        <div className="text-center">
          <p className="text-sm text-gray-400">
            {matchMode ? 'Emparejar collocation' : 'Usar en contexto'}
          </p>
          <p className="font-bold text-white">
            {currentIndex + 1} / {collocations.length}
          </p>
        </div>
        <div className="text-sm text-gray-400">
          {correctCount} ✓
        </div>
      </div>

      <div className="h-2 bg-dark-700 rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800 rounded-lg p-6 mb-6"
      >
        <div className="mb-4">
          {(!matchMode || showResult) && (
            <p className="text-sm text-accent-primary mb-1">{current.translation}</p>
          )}
          {(!matchMode || showResult) && (
            <p className="text-lg text-white font-medium flex flex-wrap items-baseline gap-2">
              {current.collocation}
              <PronunciationHint word={current.collocation} className="text-sm font-normal" />
            </p>
          )}
        </div>

        <p className="text-gray-300 mb-6">{displaySentence}</p>

        <p className="text-sm text-gray-400 mb-3">
          {matchMode ? 'Elige la collocation correcta:' : 'Completa la oración:'}
        </p>

        <div className="space-y-2">
          {options.map(opt => {
            const selected = selectedOption === opt;
            const correct = opt === current.collocation;
            const showCorrect = showResult && correct;
            const showWrong = showResult && selected && !correct;

            return (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={showResult}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                  showCorrect
                    ? 'border-green-500 bg-green-500/20 text-green-300'
                    : showWrong
                    ? 'border-red-500 bg-red-500/20 text-red-300'
                    : selected
                    ? 'border-accent-primary bg-accent-primary/20 text-white'
                    : 'border-dark-600 bg-dark-700 text-gray-300 hover:border-dark-500'
                }`}
              >
                <span className="flex flex-col gap-1 w-full">
                  <span className="flex items-center gap-2">
                    {showCorrect && <Check className="w-4 h-4 flex-shrink-0" />}
                    {showWrong && <X className="w-4 h-4 flex-shrink-0" />}
                    {opt}
                  </span>
                  <span className="block min-h-[1.25rem]">
                    {showResult && (
                      <span className="flex items-center gap-2 flex-wrap">
                        {translationMap.get(opt) && (
                          <span className="text-xs text-gray-400 italic">{translationMap.get(opt)}</span>
                        )}
                        <PronunciationHint word={opt} forceShow className="text-xs opacity-90" />
                      </span>
                    )}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {showResult && (
        <div className="flex justify-end">
          <button onClick={handleNext} className="btn-primary">
            {currentIndex < collocations.length - 1 ? 'Siguiente' : 'Continuar'}
          </button>
        </div>
      )}
    </div>
  );
}
