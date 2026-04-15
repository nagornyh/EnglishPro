import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, BookOpen, Table2 } from 'lucide-react';
import { getVerbsByLevel } from '../data/irregular-verbs';
import type { GrammarTheoryModule } from '../data/grammar-theory';
import { PronunciationHint } from './PronunciationHint';
import TheorySnippetModal from './TheorySnippetModal';

interface IrregularVerbsPracticeProps {
  level: number;
  theoryModule?: GrammarTheoryModule | null;
  onComplete: () => void;
  onBack: () => void;
}

function normalizeAnswer(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/\/.*$/, '')
    .trim();
}

function isCorrect(user: string, correct: string): boolean {
  const u = normalizeAnswer(user);
  const variants = correct.split('/').map(v => normalizeAnswer(v.trim()));
  return variants.some(v => u === v);
}

export default function IrregularVerbsPractice({
  level,
  theoryModule = null,
  onComplete,
  onBack,
}: IrregularVerbsPracticeProps) {
  const verbs = useMemo(
    () => [...getVerbsByLevel(level)].sort(() => Math.random() - 0.5).slice(0, 10),
    [level]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pastSimpleInput, setPastSimpleInput] = useState('');
  const [pastParticipleInput, setPastParticipleInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showTheory, setShowTheory] = useState(false);
  const [showVerbTable, setShowVerbTable] = useState(false);

  if (verbs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center w-full max-w-6xl mx-auto px-2">
        <p className="text-gray-400 mb-4">No hay verbos irregulares disponibles para este nivel.</p>
        <button onClick={onComplete} className="btn-primary">
          Continuar
        </button>
        <button onClick={onBack} className="btn-secondary mt-3">
          Atrás
        </button>
      </div>
    );
  }

  const current = verbs[currentIndex];
  const progress = ((currentIndex + 1) / verbs.length) * 100;

  const handleCheck = () => {
    const pastOk = isCorrect(pastSimpleInput, current.pastSimple);
    const ppOk = isCorrect(pastParticipleInput, current.pastParticiple);
    const bothCorrect = pastOk && ppOk;
    if (bothCorrect) setCorrectCount(c => c + 1);
    setShowResult(true);
  };

  const handleNext = () => {
    setPastSimpleInput('');
    setPastParticipleInput('');
    setShowResult(false);
    if (currentIndex + 1 >= verbs.length) {
      onComplete();
    } else {
      setCurrentIndex(i => i + 1);
    }
  };

  const pastOk = showResult && isCorrect(pastSimpleInput, current.pastSimple);
  const ppOk = showResult && isCorrect(pastParticipleInput, current.pastParticiple);

  return (
    <div className="w-full flex flex-col gap-6 lg:gap-8">
      {/* Cabecera: título + progreso + teoría */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">Verbos irregulares</h2>
          <p className="text-gray-400 text-sm lg:text-base mt-2 max-w-3xl">
            Escribe en inglés el pasado simple y el participio pasado: infinitivo → pasado simple → participio.
          </p>
          <div className="h-2 bg-dark-700 rounded-full overflow-hidden mt-4 max-w-xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {currentIndex + 1} / {verbs.length} · Correctas: {correctCount}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setShowVerbTable(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-700 border border-dark-600 text-gray-200 hover:bg-dark-600 text-sm font-medium antialiased"
          >
            <Table2 className="w-4 h-4 text-violet-400" />
            Ver verbos
          </button>
          {theoryModule && (
            <button
              type="button"
              onClick={() => setShowTheory(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-700 border border-dark-600 text-gray-200 hover:bg-dark-600 text-sm font-medium antialiased"
            >
              <BookOpen className="w-4 h-4 text-accent-primary" />
              Ver teoría
            </button>
          )}
        </div>
      </div>

      {/* Tarjeta principal: usa todo el ancho del contenedor */}
      <div className="bg-dark-700/80 rounded-2xl border border-dark-600 p-5 sm:p-8 lg:p-10 w-full shadow-lg">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10">
          {/* Columna verbo */}
          <div className="xl:col-span-5 space-y-4 border-b xl:border-b-0 xl:border-r border-dark-600 pb-8 xl:pb-0 xl:pr-10">
            <p className="text-xs font-medium uppercase tracking-wide text-accent-primary">
              Forma base (infinitivo)
            </p>
            <p className="text-4xl sm:text-5xl font-bold text-white break-words">
              {current.infinitive}
            </p>
            <p className="text-base text-emerald-300/95">
              <PronunciationHint word={current.infinitive} className="text-base" />
            </p>
            <p className="text-lg text-gray-400">{current.translation}</p>
          </div>

          {/* Columna ejercicio */}
          <div className="xl:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="min-w-0">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pasado simple (inglés)
                </label>
                <input
                  type="text"
                  value={pastSimpleInput}
                  onChange={e => setPastSimpleInput(e.target.value)}
                  disabled={showResult}
                  placeholder="Escribe en inglés…"
                  className={`w-full min-h-[52px] text-lg bg-dark-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 border focus:outline-none focus:ring-2 focus:ring-accent-primary ${
                    showResult
                      ? pastOk
                        ? 'border-green-500'
                        : 'border-red-500'
                      : 'border-dark-600'
                  }`}
                />
                {showResult && (
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    {pastOk ? (
                      <span className="text-green-400 flex items-center gap-1">
                        <Check className="w-4 h-4" /> Correcto
                      </span>
                    ) : (
                      <span className="text-red-400 flex items-center gap-1">
                        <X className="w-4 h-4" /> Correcto: {current.pastSimple}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Participio pasado (inglés)
                </label>
                <input
                  type="text"
                  value={pastParticipleInput}
                  onChange={e => setPastParticipleInput(e.target.value)}
                  disabled={showResult}
                  placeholder="Escribe en inglés…"
                  className={`w-full min-h-[52px] text-lg bg-dark-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 border focus:outline-none focus:ring-2 focus:ring-accent-primary ${
                    showResult
                      ? ppOk
                        ? 'border-green-500'
                        : 'border-red-500'
                      : 'border-dark-600'
                  }`}
                />
                {showResult && (
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    {ppOk ? (
                      <span className="text-green-400 flex items-center gap-1">
                        <Check className="w-4 h-4" /> Correcto
                      </span>
                    ) : (
                      <span className="text-red-400 flex items-center gap-1">
                        <X className="w-4 h-4" /> Correcto: {current.pastParticiple}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* No examples here — they would reveal the answer. Use "Ver verbos" instead. */}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between sm:items-center pt-2">
        <button
          type="button"
          onClick={onBack}
          className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Atrás
        </button>
        {!showResult ? (
          <button
            type="button"
            onClick={handleCheck}
            disabled={!pastSimpleInput.trim() || !pastParticipleInput.trim()}
            className="btn-primary px-8 py-3 w-full sm:w-auto disabled:opacity-40"
          >
            Comprobar
          </button>
        ) : (
          <button type="button" onClick={handleNext} className="btn-primary px-8 py-3 w-full sm:w-auto">
            {currentIndex + 1 >= verbs.length ? 'Continuar' : 'Siguiente'}
          </button>
        )}
      </div>

      {showTheory && theoryModule && (
        <TheorySnippetModal modules={[theoryModule]} onClose={() => setShowTheory(false)} />
      )}

      {showVerbTable && createPortal(
        <div
          className="modal-overlay overflow-y-auto overscroll-contain items-start md:items-center md:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Tabla de verbos irregulares"
          onClick={() => setShowVerbTable(false)}
        >
          <div
            className="relative w-full md:w-[min(100%,calc(100vw-2rem))] lg:max-w-4xl bg-dark-800 border-0 md:border md:border-dark-600 md:rounded-2xl shadow-2xl overflow-hidden md:my-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 p-5 md:p-6 border-b border-dark-600 bg-dark-900/80">
              <div className="flex items-center gap-3">
                <Table2 className="w-6 h-6 text-violet-400 shrink-0" />
                <div>
                  <h2 className="text-lg font-bold text-white">Verbos de este quiz</h2>
                  <p className="text-xs text-gray-400">Consulta las 3 formas y ejemplos de cada verbo</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowVerbTable(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-dark-700 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto p-4 md:p-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-dark-600">
                    <th className="text-left py-2 px-3 text-accent-primary font-semibold text-xs uppercase tracking-wide">Infinitivo</th>
                    <th className="text-left py-2 px-3 text-amber-400 font-semibold text-xs uppercase tracking-wide">Past Simple</th>
                    <th className="text-left py-2 px-3 text-violet-400 font-semibold text-xs uppercase tracking-wide">Past Participle</th>
                    <th className="text-left py-2 px-3 text-gray-400 font-semibold text-xs uppercase tracking-wide">Traducción</th>
                  </tr>
                </thead>
                <tbody>
                  {verbs.map((verb, i) => (
                    <tr
                      key={verb.id}
                      className={`border-b border-dark-700/50 ${
                        i === currentIndex ? 'bg-accent-primary/10' : 'hover:bg-dark-700/40'
                      } transition-colors`}
                    >
                      <td className="py-3 px-3 align-top">
                        <span className="font-bold text-white">{verb.infinitive}</span>
                        <div className="text-emerald-300/80 text-xs mt-0.5">
                          <PronunciationHint word={verb.infinitive} forceShow className="text-xs" />
                        </div>
                        {verb.example?.infinitive && (
                          <p className="text-gray-500 text-xs mt-1 italic">{verb.example.infinitive}</p>
                        )}
                      </td>
                      <td className="py-3 px-3 align-top">
                        <span className="font-semibold text-amber-300">{verb.pastSimple}</span>
                        <div className="text-emerald-300/80 text-xs mt-0.5">
                          <PronunciationHint word={verb.pastSimple.split('/')[0]} forceShow className="text-xs" />
                        </div>
                        {verb.example?.pastSimple && (
                          <p className="text-gray-500 text-xs mt-1 italic">{verb.example.pastSimple}</p>
                        )}
                      </td>
                      <td className="py-3 px-3 align-top">
                        <span className="font-semibold text-violet-300">{verb.pastParticiple}</span>
                        <div className="text-emerald-300/80 text-xs mt-0.5">
                          <PronunciationHint word={verb.pastParticiple.split('/')[0]} forceShow className="text-xs" />
                        </div>
                        {verb.example?.pastParticiple && (
                          <p className="text-gray-500 text-xs mt-1 italic">{verb.example.pastParticiple}</p>
                        )}
                      </td>
                      <td className="py-3 px-3 align-top text-gray-400">
                        {verb.translation}
                        {i === currentIndex && (
                          <span className="ml-1 text-xs text-accent-primary">◄ actual</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
