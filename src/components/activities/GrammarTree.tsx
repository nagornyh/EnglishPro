import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GRAMMAR_TREES } from '../../data/grammar-trees';
import type { GrammarTree as GrammarTreeType } from '../../data/grammar-trees';

interface GrammarTreeProps {
  structureId?: string;
  onBack?: () => void;
}

const CATEGORY_NAMES: Record<string, { name: string; icon: string }> = {
  tenses:      { name: 'Tiempos Verbales',  icon: '⏰' },
  conditionals:{ name: 'Condicionales',     icon: '🔄' },
  modals:      { name: 'Verbos Modales',    icon: '💪' },
  clauses:     { name: 'Cláusulas',         icon: '🔗' },
  structures:  { name: 'Estructuras',       icon: '📐' },
  passive:     { name: 'Voz Pasiva',        icon: '🔃' },
  questions:   { name: 'Preguntas',         icon: '❓' },
  other:       { name: 'Otros',             icon: '📚' },
};

export default function GrammarTree({ structureId, onBack }: GrammarTreeProps) {
  const [selectedStructure, setSelectedStructure] = useState<GrammarTreeType | null>(
    structureId ? GRAMMAR_TREES.find(s => s.id === structureId) ?? null : null
  );
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [showExample, setShowExample] = useState<number | null>(null);

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) next.delete(nodeId);
      else next.add(nodeId);
      return next;
    });
  };

  const groupedStructures = GRAMMAR_TREES.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, GrammarTreeType[]>);

  // ─── List view ───────────────────────────────────────────────────────────────
  if (!selectedStructure) {
    return (
      <div className="w-full space-y-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <h2 className="text-2xl font-bold text-white">🌳 Explorador Gramatical</h2>
            <p className="text-gray-400 text-sm">Explora estructuras gramaticales de forma visual e interactiva</p>
          </div>
        </div>

        <div className="space-y-5">
          {Object.entries(groupedStructures).map(([category, structures]) => (
            <div key={category} className="bg-dark-800 rounded-xl p-5">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <span>{CATEGORY_NAMES[category]?.icon ?? '📖'}</span>
                {CATEGORY_NAMES[category]?.name ?? category}
              </h3>

              <div className="grid md:grid-cols-2 gap-3">
                {structures.map(structure => (
                  <button
                    key={structure.id}
                    onClick={() => {
                      setSelectedStructure(structure);
                      setExpandedNodes(new Set());
                      setShowExample(null);
                    }}
                    className="p-4 bg-dark-700 rounded-lg hover:bg-dark-600 border border-dark-500 hover:border-accent-primary/40 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-white group-hover:text-accent-primary transition-colors">
                        {structure.name}
                      </h4>
                      <span className="text-xs px-2 py-0.5 bg-accent-primary/20 text-accent-primary rounded-full">
                        Nivel {structure.level}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{structure.nameEs}</p>
                    <p className="text-gray-400 text-xs mt-2 font-mono truncate">
                      {structure.structure.formula}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ─── Detail view ─────────────────────────────────────────────────────────────
  const cat = CATEGORY_NAMES[selectedStructure.category];

  return (
    <div className="w-full space-y-5">
      {/* Back to list (NOT back to lesson) */}
      <button
        onClick={() => setSelectedStructure(null)}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver a estructuras
      </button>

      {/* Header */}
      <div className="bg-dark-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-sm font-medium">
            {cat?.icon} {cat?.name}
          </span>
          <span className="text-gray-500 text-sm">Nivel {selectedStructure.level}</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">{selectedStructure.name}</h1>
        <p className="text-gray-400 text-sm mb-4">{selectedStructure.nameEs}</p>
        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Fórmula:</p>
          <p className="text-lg font-mono text-accent-primary">{selectedStructure.structure.formula}</p>
        </div>
      </div>

      {/* Interactive Tree */}
      <div className="bg-dark-800 rounded-xl p-6">
        <h3 className="text-base font-bold text-white mb-4">🌲 Estructura Visual</h3>
        <div className="space-y-2">
          {selectedStructure.structure.components.map((component, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <div className="absolute left-6 -top-2 w-0.5 h-4 bg-dark-500" />
              )}
              <button
                onClick={() => toggleNode(component.name)}
                className={`w-full p-4 rounded-lg text-left transition-all border ${
                  expandedNodes.has(component.name)
                    ? 'bg-accent-primary/10 border-accent-primary/50'
                    : 'bg-dark-700 border-dark-500 hover:border-accent-primary/30 hover:bg-dark-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    !component.optional
                      ? 'bg-accent-primary'
                      : 'bg-transparent border-2 border-dashed border-gray-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{component.name}</span>
                      {component.optional && (
                        <span className="text-xs text-gray-500">(opcional)</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{component.nameEs}</p>
                  </div>
                  <span className="text-gray-500 text-xs">
                    {expandedNodes.has(component.name) ? '▼' : '▶'}
                  </span>
                </div>

                {expandedNodes.has(component.name) && component.examples && (
                  <div className="mt-3 pl-6 space-y-1">
                    <p className="text-xs text-gray-500 mb-1">Ejemplos:</p>
                    {component.examples.map((ex, i) => (
                      <p key={i} className="text-accent-primary/90 text-sm">• {ex}</p>
                    ))}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Examples with breakdown */}
      <div className="bg-dark-800 rounded-xl p-6">
        <h3 className="text-base font-bold text-white mb-4">📝 Ejemplos con Desglose</h3>
        <div className="space-y-3">
          {selectedStructure.examples.map((example, index) => (
            <div key={index} className="bg-dark-700 rounded-lg p-4">
              <button
                onClick={() => setShowExample(showExample === index ? null : index)}
                className="w-full flex items-center justify-between gap-4"
              >
                <div className="text-left">
                  <p className="text-white font-medium">{example.sentence}</p>
                  <p className="text-gray-500 text-sm">{example.translation}</p>
                </div>
                <span className="text-gray-500 flex-shrink-0 text-xs">
                  {showExample === index ? '▲' : '▼'}
                </span>
              </button>

              {showExample === index && (
                <div className="mt-4 pt-4 border-t border-dark-500">
                  <p className="text-xs text-gray-500 mb-2">Desglose:</p>
                  <div className="flex flex-wrap gap-2">
                    {example.breakdown.map((part, i) => (
                      <div key={i} className="px-3 py-2 bg-dark-600 rounded-lg border border-dark-500">
                        <span className="text-accent-primary font-bold text-sm">{part.part}</span>
                        <span className="text-gray-500 text-xs ml-2">({part.role})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Common Mistakes */}
      {selectedStructure.commonMistakes.length > 0 && (
        <div className="bg-dark-800 rounded-xl p-6">
          <h3 className="text-base font-bold text-white mb-4">⚠️ Errores Comunes</h3>
          <div className="space-y-3">
            {selectedStructure.commonMistakes.map((mistake, index) => (
              <div key={index} className="bg-dark-700 rounded-lg p-4 space-y-1">
                <p className="text-red-400 text-sm line-through">✗ {mistake.wrong}</p>
                <p className="text-green-400 text-sm">✓ {mistake.correct}</p>
                <p className="text-gray-500 text-xs">{mistake.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Timeline */}
      {selectedStructure.timeline && selectedStructure.timeline.length > 0 && (
        <div className="bg-dark-800 rounded-xl p-6">
          <h3 className="text-base font-bold text-white mb-4">📅 Línea Temporal</h3>
          <div className="relative py-10">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-dark-500 -translate-y-1/2 rounded-full" />
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <span className="px-2 py-1 bg-dark-600 text-gray-400 rounded text-xs border border-dark-500">Pasado</span>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mx-auto" />
              <p className="text-xs text-gray-500 mt-1">Ahora</p>
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <span className="px-2 py-1 bg-dark-600 text-gray-400 rounded text-xs border border-dark-500">Futuro</span>
            </div>
            {selectedStructure.timeline[0] && (
              <div
                className="absolute top-1/2 -translate-y-1/2"
                style={{
                  left: selectedStructure.timeline[0].position === 'past' ? '15%' :
                        selectedStructure.timeline[0].position === 'present' ? '50%' :
                        selectedStructure.timeline[0].position === 'future' ? '85%' : '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center text-white text-sm font-bold border-4 border-dark-800">
                  ★
                </div>
              </div>
            )}
          </div>
          {selectedStructure.timeline[0] && (
            <div className="text-center mt-2 space-y-0.5">
              <p className="text-gray-300 text-sm">{selectedStructure.timeline[0].descriptionEs || selectedStructure.timeline[0].description}</p>
              {selectedStructure.timeline[0].descriptionEs && (
                <p className="text-gray-500 text-xs">{selectedStructure.timeline[0].description}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Comparison */}
      {selectedStructure.comparison && selectedStructure.comparison.length > 0 && (
        <div className="bg-dark-800 rounded-xl p-6">
          <h3 className="text-base font-bold text-white mb-4">🔄 Comparación</h3>
          {selectedStructure.comparison.map((comp, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-dark-700 rounded-lg p-4 border-l-4 border-accent-primary">
                <h4 className="font-bold text-accent-primary mb-2 text-sm">{comp.tense1}</h4>
                <p className="text-gray-400 text-sm">{comp.difference}</p>
                <p className="text-white text-sm mt-2 italic">"{comp.example1}"</p>
              </div>
              <div className="bg-dark-700 rounded-lg p-4 border-l-4 border-accent-secondary">
                <h4 className="font-bold text-accent-secondary mb-2 text-sm">{comp.tense2}</h4>
                <p className="text-gray-400 text-sm">{comp.differenceEs}</p>
                <p className="text-white text-sm mt-2 italic">"{comp.example2}"</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
