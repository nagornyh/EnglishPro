import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Globe,
  Layers,
  Zap,
} from 'lucide-react';
import type { GrammarTheoryModule } from '../../data/grammar-theory';

interface GrammarTheoryCardProps {
  module: GrammarTheoryModule;
  onContinue: () => void;
  taskTitle?: string;
  compact?: boolean;
}

export default function GrammarTheoryCard({
  module,
  onContinue,
  taskTitle,
  compact = false,
}: GrammarTheoryCardProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['explanation'])
  );
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });
  };

  const levelColors: Record<string, string> = {
    A1: 'from-green-500/20 to-green-600/10 border-green-500/30',
    A2: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
    B1: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
    B2: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/30',
    C1: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
    C2: 'from-rose-500/20 to-rose-600/10 border-rose-500/30',
  };

  const colorClass = levelColors[module.level] ?? levelColors.A1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-start min-h-[60vh] py-6 md:py-8"
    >
      <div className="w-full max-w-6xl lg:max-w-7xl space-y-6 md:space-y-8 px-2 sm:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent-primary/20 text-accent-primary mb-3 md:mb-4">
            <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base font-medium">Teoría Gramatical</span>
            <span className="text-xs md:text-sm bg-accent-primary/30 px-2 py-0.5 rounded-full">
              {module.level}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            {module.title}
          </h1>
          <p className="text-gray-400 text-base md:text-lg">{module.titleEs}</p>
          {taskTitle && (
            <p className="text-gray-500 text-xs mt-1">{taskTitle}</p>
          )}
        </motion.div>

        {/* Explanation */}
        <SectionToggle
          id="explanation"
          title="Explicación"
          icon={<Lightbulb className="w-4 h-4" />}
          expanded={expandedSections.has('explanation')}
          onToggle={toggleSection}
          colorClass={colorClass}
        >
          <p className="text-gray-200 text-base md:text-lg leading-relaxed md:leading-relaxed whitespace-pre-line">
            {module.explanationEs}
          </p>
          <div className="mt-4 md:mt-5 p-4 md:p-5 rounded-xl bg-dark-800/60 border border-white/5">
            <p className="text-gray-300 text-sm md:text-base italic leading-relaxed">
              {module.explanation}
            </p>
          </div>
        </SectionToggle>

        {/* Formation Rules */}
        {module.formationRules.length > 0 && (
          <SectionToggle
            id="formation"
            title="Cómo se forma"
            icon={<Layers className="w-4 h-4" />}
            expanded={expandedSections.has('formation')}
            onToggle={toggleSection}
            colorClass={colorClass}
          >
            {/* Rule tabs if multiple */}
            {module.formationRules.length > 1 && (
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {module.formationRules.map((rule, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentRuleIndex(i)}
                    className={`px-4 py-2 rounded-lg text-sm md:text-base whitespace-nowrap transition-colors ${
                      currentRuleIndex === i
                        ? 'bg-accent-primary text-white'
                        : 'bg-dark-700 text-gray-400 hover:text-white'
                    }`}
                  >
                    {rule.labelEs}
                  </button>
                ))}
              </div>
            )}

            {(() => {
              const rule = module.formationRules[currentRuleIndex];
              return (
                <div className="space-y-4 md:space-y-5">
                  <h4 className="text-white text-lg md:text-xl font-semibold">{rule.labelEs}</h4>
                  {rule.formula && (
                    <div className="bg-dark-800 rounded-xl p-4 font-mono text-accent-primary text-sm md:text-base text-center break-all">
                      {rule.formula}
                    </div>
                  )}
                  <div className="space-y-3 md:space-y-4">
                    {rule.steps.map((step, si) => (
                      <motion.div
                        key={si}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: si * 0.1 }}
                        className="flex gap-3 md:gap-4 items-start"
                      >
                        <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent-primary/20 text-accent-primary text-sm flex items-center justify-center font-bold mt-0.5">
                          {si + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="text-gray-300 text-base md:text-lg leading-relaxed">{step.stepEs}</p>
                          <p className="text-gray-500 text-sm md:text-base italic leading-relaxed mt-0.5">
                            {step.step}
                          </p>
                          <div className="mt-2 p-3 rounded-lg bg-dark-800/80 border border-white/5">
                            <p className="text-accent-primary font-medium text-base md:text-lg break-words">
                              {step.example}
                            </p>
                            <p className="text-gray-400 text-sm md:text-base mt-1">
                              {step.translation}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </SectionToggle>
        )}

        {/* Signal Words */}
        {module.signalWords && module.signalWords.length > 0 && !compact && (
          <SectionToggle
            id="signals"
            title="Palabras clave"
            icon={<Zap className="w-4 h-4" />}
            expanded={expandedSections.has('signals')}
            onToggle={toggleSection}
            colorClass={colorClass}
          >
            <div className="flex flex-wrap gap-2">
              {module.signalWords.map((sw, i) => (
                <div
                  key={i}
                  className="bg-dark-800 rounded-lg px-3 py-2 border border-white/5"
                >
                  <span className="text-accent-primary font-medium text-sm">
                    {sw.word}
                  </span>
                  <p className="text-gray-400 text-xs">{sw.meaningEs}</p>
                </div>
              ))}
            </div>
          </SectionToggle>
        )}

        {/* L1 Contrast */}
        <SectionToggle
          id="contrast"
          title="Español vs. Inglés"
          icon={<Globe className="w-4 h-4" />}
          expanded={expandedSections.has('contrast')}
          onToggle={toggleSection}
          colorClass={colorClass}
        >
          <div className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-red-500/10 rounded-xl p-4 md:p-5 border border-red-500/20">
                <p className="text-red-400 text-xs md:text-sm font-medium mb-2">
                  🇪🇸 En español:
                </p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {module.l1Contrast.spanishBehavior}
                </p>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 md:p-5 border border-blue-500/20">
                <p className="text-blue-400 text-xs md:text-sm font-medium mb-2">
                  🇬🇧 En inglés:
                </p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {module.l1Contrast.englishBehavior}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {module.l1Contrast.contrastExamples.map((ex, i) => (
                <div
                  key={i}
                  className="bg-dark-800/60 rounded-xl p-4 md:p-5 border border-white/5"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 text-sm font-semibold shrink-0">
                      EN:
                    </span>
                    <span className="text-gray-200 text-sm md:text-base leading-relaxed">{ex.english}</span>
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <span className="text-red-400 text-sm font-semibold shrink-0">
                      ES:
                    </span>
                    <span className="text-gray-200 text-sm md:text-base leading-relaxed">{ex.spanish}</span>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm mt-2 italic">{ex.note}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionToggle>

        {/* Predicted Errors */}
        {module.predictedErrors.length > 0 && (
          <SectionToggle
            id="errors"
            title="Errores frecuentes de hispanohablantes"
            icon={<AlertTriangle className="w-4 h-4" />}
            expanded={expandedSections.has('errors')}
            onToggle={toggleSection}
            colorClass={colorClass}
          >
            <div className="space-y-3">
              {module.predictedErrors.map((err, i) => (
                <div
                  key={i}
                  className="bg-dark-800/60 rounded-xl p-4 md:p-5 border border-white/5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs md:text-sm px-2 py-0.5 rounded-full ${
                        err.frequency === 'very common'
                          ? 'bg-red-500/20 text-red-400'
                          : err.frequency === 'common'
                          ? 'bg-orange-500/20 text-orange-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {err.frequency === 'very common'
                        ? 'Muy frecuente'
                        : err.frequency === 'common'
                        ? 'Frecuente'
                        : 'Ocasional'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                    <span className="text-red-400 line-through break-words">
                      {err.error}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 shrink-0" />
                    <span className="text-green-400 break-words">{err.correction}</span>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm mt-2 leading-relaxed">{err.whyEs}</p>
                </div>
              ))}
            </div>
          </SectionToggle>
        )}

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-5 md:p-6 border border-yellow-500/20"
        >
          <p className="text-yellow-200 text-base md:text-lg leading-relaxed">
            {module.tipEs}
          </p>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center pt-4"
        >
          <button
            onClick={onContinue}
            className="btn-primary px-8 py-3 flex items-center gap-2"
          >
            Continuar
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* Collapsible section helper */
function SectionToggle({
  id,
  title,
  icon,
  expanded,
  onToggle,
  colorClass,
  children,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  expanded: boolean;
  onToggle: (id: string) => void;
  colorClass: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border bg-gradient-to-br ${colorClass} overflow-hidden`}
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left gap-3"
      >
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <span className="shrink-0 [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-5 md:[&_svg]:h-5">{icon}</span>
          <span className="font-medium text-white text-base md:text-lg">{title}</span>
        </div>
        {expanded ? (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-400" />
        )}
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-4 pb-4 md:px-5 md:pb-5"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
