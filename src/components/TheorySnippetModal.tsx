import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, BookOpen, Lightbulb } from 'lucide-react';
import type { GrammarTheoryModule } from '../data/grammar-theory';

interface TheorySnippetModalProps {
  /** Uno o varios módulos (pestañas si hay más de uno) */
  modules: GrammarTheoryModule[];
  onClose: () => void;
}

export default function TheorySnippetModal({ modules, onClose }: TheorySnippetModalProps) {
  const [idx, setIdx] = useState(0);
  const module = modules[idx];
  if (!module) return null;

  /**
   * Portal a document.body: si el modal vive bajo un ancestro con transform (p. ej. motion.div),
   * position:fixed se ancla a esa caja y el overlay parece un recuadro pequeño. El portal evita eso.
   */
  const root =
    typeof document !== 'undefined' ? document.body : null;
  if (!root) return null;

  return createPortal(
    <div
      className="modal-overlay overflow-y-auto overscroll-contain items-stretch sm:items-stretch md:items-center md:p-3 lg:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="theory-snippet-title"
      onClick={onClose}
    >
      <div
        className="relative w-full md:w-[min(100%,calc(100vw-1.5rem))] lg:w-[min(92rem,calc(100vw-2.5rem))] h-[100dvh] md:h-[96dvh] md:max-h-[96dvh] flex flex-col bg-dark-800 border-0 md:border md:border-dark-600 md:rounded-2xl shadow-2xl overflow-hidden md:my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera fija */}
        <div className="flex-shrink-0 flex justify-between items-start gap-4 md:gap-6 p-5 md:p-7 lg:p-8 border-b border-dark-600 bg-dark-900/80 sm:rounded-t-2xl">
          <div className="flex items-start gap-3 md:gap-4 min-w-0 flex-1">
            <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-accent-primary shrink-0 mt-1" />
            <div className="min-w-0 space-y-1">
              <p className="text-xs md:text-sm font-medium text-accent-primary/90 uppercase tracking-wide">
                {module.level}
              </p>
              <h2
                id="theory-snippet-title"
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight break-words"
              >
                {module.titleEs}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-snug break-words">{module.title}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 md:p-3 rounded-xl text-gray-400 hover:text-white hover:bg-dark-700 shrink-0 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>

        {/* Pestañas */}
        {modules.length > 1 && (
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-5 md:px-7 lg:px-8 pt-4 md:pt-5 pb-3 border-b border-dark-600 bg-dark-800/95">
            {modules.map((m, i) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setIdx(i)}
                className={`px-4 py-2.5 md:px-5 md:py-3 rounded-xl text-sm md:text-base font-medium transition-colors text-left max-w-full ${
                  i === idx
                    ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/20'
                    : 'bg-dark-700 text-gray-300 hover:text-white hover:bg-dark-600'
                }`}
              >
                <span className="line-clamp-2">{m.titleEs}</span>
              </button>
            ))}
          </div>
        )}

        {/* Cuerpo con scroll: una columna ancha en pantallas grandes */}
        <div className="overflow-y-auto flex-1 min-h-0 overscroll-y-contain">
          <div className="px-5 md:px-8 lg:px-10 xl:px-12 py-6 md:py-8 lg:py-10 space-y-8 md:space-y-10 lg:space-y-12 pb-28 sm:pb-10">
            {/* Explicación principal */}
            <section aria-label="Explicación">
              <h3 className="text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wider mb-3 md:mb-4">
                Explicación
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed md:leading-relaxed whitespace-pre-wrap">
                {module.explanationEs}
              </p>
              {module.explanation && module.explanation !== module.explanationEs && (
                <div className="mt-5 md:mt-6 p-4 md:p-5 rounded-xl bg-dark-900/70 border border-dark-600/80">
                  <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">English</p>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed whitespace-pre-wrap">{module.explanation}</p>
                </div>
              )}
            </section>

            {/* Reglas de formación: todas, con aire */}
            {module.formationRules.length > 0 && (
              <section aria-label="Formación" className="space-y-6 md:space-y-8">
                <h3 className="text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wider">
                  Formación y ejemplos
                </h3>
                <div className="space-y-6 md:space-y-8">
                  {module.formationRules.map((rule, ri) => (
                    <div
                      key={ri}
                      className="rounded-2xl border border-dark-600 bg-dark-900/40 p-5 md:p-7 lg:p-8 space-y-4 md:space-y-5"
                    >
                      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-accent-primary leading-snug">
                        {rule.labelEs}
                      </h4>
                      <p className="text-sm md:text-base text-gray-500">{rule.label}</p>
                      {rule.formula && (
                        <div className="rounded-xl bg-dark-800 border border-dark-600 px-4 py-3 md:px-5 md:py-4 font-mono text-accent-primary text-sm md:text-base text-center break-all">
                          {rule.formula}
                        </div>
                      )}
                      <ol className="space-y-4 md:space-y-5 list-none">
                        {rule.steps.map((s, si) => (
                          <li key={si} className="flex gap-3 md:gap-4">
                            <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-accent-primary/25 text-accent-primary text-sm md:text-base font-bold flex items-center justify-center mt-0.5">
                              {si + 1}
                            </span>
                            <div className="min-w-0 space-y-2 flex-1 pt-0.5">
                              <p className="text-base md:text-lg text-gray-200 leading-relaxed">{s.stepEs}</p>
                              <p className="text-sm md:text-base text-gray-500 leading-relaxed">{s.step}</p>
                              <div className="rounded-lg bg-dark-800/80 border border-white/5 px-3 py-2.5 md:px-4 md:py-3 mt-2">
                                <p className="text-base md:text-lg font-medium text-white leading-snug break-words">
                                  {s.example}
                                </p>
                                <p className="text-sm md:text-base text-gray-400 mt-1 leading-relaxed">{s.translation}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Palabras señal */}
            {module.signalWords && module.signalWords.length > 0 && (
              <section aria-label="Palabras clave">
                <h3 className="text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wider mb-3 md:mb-4">
                  Palabras clave
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {module.signalWords.map((sw, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-dark-900/60 border border-dark-600 px-3 py-2 md:px-4 md:py-3 max-w-full"
                    >
                      <span className="text-accent-primary font-semibold text-sm md:text-base">{sw.word}</span>
                      <p className="text-xs md:text-sm text-gray-400 mt-0.5">{sw.meaningEs}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tip */}
            {module.tipEs && (
              <aside className="flex gap-3 md:gap-4 rounded-2xl bg-amber-500/10 border border-amber-500/35 p-4 md:p-6 lg:p-7 text-amber-100/95">
                <Lightbulb className="w-6 h-6 md:w-7 md:h-7 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">{module.tipEs}</p>
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>,
    root,
  );
}
