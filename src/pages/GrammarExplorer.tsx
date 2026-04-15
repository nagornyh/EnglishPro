// Grammar Explorer Page Component
// Interactive grammar learning hub

import { useState } from 'react';
import GrammarTree from '../components/activities/GrammarTree';
import { GRAMMAR_TREES } from '../data/grammar-trees';
import type { GrammarTree as GrammarTreeType } from '../data/grammar-trees';
import { grammarEssentials } from '../data/grammar-essentials';
import type { GrammarEssential } from '../data/grammar-essentials';

export default function GrammarExplorer() {
  const [selectedStructureId, setSelectedStructureId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'trees' | 'essentials'>('trees');
  const [selectedEssential, setSelectedEssential] = useState<GrammarEssential | null>(null);

  // If a structure is selected, show GrammarTree component
  if (selectedStructureId) {
    return (
      <GrammarTree 
        structureId={selectedStructureId}
        onBack={() => setSelectedStructureId(null)}
      />
    );
  }

  // If a grammar essential is selected, show its detail
  if (selectedEssential) {
    const priorityColors: Record<string, string> = {
      critical: 'text-red-400 bg-red-500/10 border-red-500/30',
      high: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
      medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
      low: 'text-green-400 bg-green-500/10 border-green-500/30',
    };
    return (
      <div className="w-full p-4 space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => setSelectedEssential(null)}
            className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
          >
            ← Volver
          </button>
        </div>
        <div className="bg-dark-800 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold text-white">{selectedEssential.nameEs}</h1>
              <p className="text-gray-500 text-sm">{selectedEssential.name}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${priorityColors[selectedEssential.priority]}`}>
              {selectedEssential.priority === 'critical' ? '🔴 Crítico'
                : selectedEssential.priority === 'high' ? '🟠 Alto'
                : selectedEssential.priority === 'medium' ? '🟡 Medio' : '🟢 Bajo'}
            </span>
          </div>
          <p className="text-gray-300 text-sm">{selectedEssential.explanationEs}</p>
        </div>
        {selectedEssential.rules.map((rule, i) => (
          <div key={i} className="bg-dark-800 rounded-xl p-5 space-y-3">
            <h3 className="text-white font-semibold">📌 {rule.ruleEs}</h3>
            <div className="space-y-2">
              {rule.examples.map((ex, j) => (
                <div key={j} className="bg-dark-700 rounded-lg p-3">
                  <p className="text-white font-mono text-sm">{ex.english}</p>
                  <p className="text-gray-500 text-xs mt-1">{ex.spanish}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {selectedEssential.commonMistakes.length > 0 && (
          <div className="bg-dark-800 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-3">⚠️ Errores Comunes</h3>
            <div className="space-y-3">
              {selectedEssential.commonMistakes.map((m, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-red-400 text-sm font-mono">❌ {m.wrong}</p>
                  <p className="text-green-400 text-sm font-mono">✅ {m.correct}</p>
                  <p className="text-gray-500 text-xs">{m.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Group structures by category
  const groupedStructures = GRAMMAR_TREES.reduce((acc: Record<string, GrammarTreeType[]>, structure) => {
    if (!acc[structure.category]) {
      acc[structure.category] = [];
    }
    acc[structure.category].push(structure);
    return acc;
  }, {});

  const categoryInfo: Record<string, { name: string; icon: string; description: string }> = {
    tenses: { 
      name: 'Tiempos Verbales', 
      icon: '⏰',
      description: 'Aprende cuándo usar cada tiempo verbal en inglés'
    },
    conditionals: { 
      name: 'Condicionales', 
      icon: '🔄',
      description: 'Estructuras if/then para hablar de posibilidades'
    },
    modals: { 
      name: 'Verbos Modales', 
      icon: '💪',
      description: 'Can, could, should, must y más'
    },
    clauses: {
      name: 'Cláusulas',
      icon: '🔗',
      description: 'Relative clauses, reported speech y más'
    },
    structures: {
      name: 'Estructuras',
      icon: '📐',
      description: 'Estructuras gramaticales especiales'
    },
    passive: { 
      name: 'Voz Pasiva', 
      icon: '🔃',
      description: 'Cuando el sujeto recibe la acción'
    },
    questions: { 
      name: 'Preguntas', 
      icon: '❓',
      description: 'Cómo formar preguntas correctamente'
    },
    other: { 
      name: 'Otros', 
      icon: '📚',
      description: 'Otras estructuras gramaticales importantes'
    },
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">🌳 Explorador de Gramática</h1>
        <p className="text-gray-400">
          Visualiza y comprende las estructuras gramaticales del inglés de forma interactiva
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('trees')}
          className={`flex-1 py-2 rounded-xl font-medium text-sm transition-colors ${
            activeTab === 'trees' ? 'bg-primary-600 text-white' : 'bg-dark-800 text-gray-400 hover:text-white'
          }`}
        >
          🌳 Árboles Gramaticales ({GRAMMAR_TREES.length})
        </button>
        <button
          onClick={() => setActiveTab('essentials')}
          className={`flex-1 py-2 rounded-xl font-medium text-sm transition-colors ${
            activeTab === 'essentials' ? 'bg-accent-600 text-white' : 'bg-dark-800 text-gray-400 hover:text-white'
          }`}
        >
          📋 Referencia CEFR ({grammarEssentials.length})
        </button>
      </div>

      {/* Trees Tab */}
      {activeTab === 'trees' && (
        <>
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-dark-800 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-primary-400">{GRAMMAR_TREES.length}</p>
              <p className="text-gray-500 text-sm">Estructuras</p>
            </div>
            <div className="bg-dark-800 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-accent-400">{Object.keys(groupedStructures).length}</p>
              <p className="text-gray-500 text-sm">Categorías</p>
            </div>
            <div className="bg-dark-800 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-yellow-400">
                {GRAMMAR_TREES.reduce((sum: number, s) => sum + s.examples.length, 0)}
              </p>
              <p className="text-gray-500 text-sm">Ejemplos</p>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            {Object.entries(groupedStructures).map(([category, structures]) => (
              <div key={category} className="bg-dark-800 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-dark-700 rounded-xl flex items-center justify-center text-3xl">
                    {categoryInfo[category]?.icon || '📖'}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {categoryInfo[category]?.name || category}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {categoryInfo[category]?.description || `${structures.length} estructuras`}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {structures.map((structure: GrammarTreeType) => (
                    <button
                      key={structure.id}
                      onClick={() => setSelectedStructureId(structure.id)}
                      className="p-4 bg-dark-700 rounded-xl hover:bg-dark-600 transition-colors text-left group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-white group-hover:text-primary-400">
                          {structure.name}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-primary-600/30 text-primary-300 rounded">
                          Level {structure.level}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-2">{structure.nameEs}</p>
                      <p className="text-gray-400 text-sm font-mono bg-dark-600 px-2 py-1 rounded">
                        {structure.structure.formula}
                      </p>
                      <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                        <span>📝 {structure.examples.length} ejemplos</span>
                        <span>⚠️ {structure.commonMistakes.length} errores comunes</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-8 bg-gradient-to-r from-primary-900/30 to-accent-900/30 rounded-2xl p-6 border border-primary-800/50">
            <h3 className="text-lg font-bold text-white mb-4">💡 Consejos de Estudio</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="text-white font-medium">Enfócate en una estructura</p>
                  <p className="text-gray-400 text-sm">No intentes aprender todo a la vez</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <p className="text-white font-medium">Crea tus propios ejemplos</p>
                  <p className="text-gray-400 text-sm">Practica con situaciones reales</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="text-white font-medium">Aprende los errores comunes</p>
                  <p className="text-gray-400 text-sm">Evita los mismos errores que otros</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="text-white font-medium">Compara estructuras similares</p>
                  <p className="text-gray-400 text-sm">Entiende cuándo usar cada una</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Essentials Tab */}
      {activeTab === 'essentials' && (() => {
        const grouped = grammarEssentials.reduce<Record<string, GrammarEssential[]>>(
          (acc, e) => { (acc[e.category] ??= []).push(e); return acc; }, {}
        );
        const categoryNames: Record<string, string> = {
          articles: '📌 Artículos',
          nouns: '🏷️ Sustantivos',
          pronouns: '👤 Pronombres',
          adjectives: '🎨 Adjetivos',
          adverbs: '⚡ Adverbios',
          prepositions: '🔗 Preposiciones',
          questions: '❓ Preguntas',
          clauses: '🔀 Cláusulas',
          verbs: '🏃 Verbos',
          determiners: '📋 Determinantes',
          conjunctions: '🔱 Conjunciones',
          structure: '📐 Estructura',
        };
        const priorityBadge: Record<string, string> = {
          critical: '🔴',
          high: '🟠',
          medium: '🟡',
          low: '🟢',
        };
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4 mb-2">
              <div className="bg-dark-800 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-accent-400">{grammarEssentials.length}</p>
                <p className="text-gray-500 text-sm">Temas</p>
              </div>
              <div className="bg-dark-800 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary-400">{Object.keys(grouped).length}</p>
                <p className="text-gray-500 text-sm">Categorías</p>
              </div>
              <div className="bg-dark-800 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-yellow-400">
                  {grammarEssentials.filter(e => e.priority === 'critical').length}
                </p>
                <p className="text-gray-500 text-sm">Críticos</p>
              </div>
            </div>
            {Object.entries(grouped).map(([cat, items]) => (
              <div key={cat} className="bg-dark-800 rounded-2xl p-5">
                <h2 className="text-lg font-bold text-white mb-3">
                  {categoryNames[cat] ?? cat}
                </h2>
                <div className="grid md:grid-cols-2 gap-2">
                  {items.map(e => (
                    <button
                      key={e.id}
                      onClick={() => setSelectedEssential(e)}
                      className="p-3 bg-dark-700 rounded-xl hover:bg-dark-600 transition-colors text-left group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-white text-sm group-hover:text-accent-400">
                          {e.nameEs}
                        </h3>
                        <span className="text-sm">{priorityBadge[e.priority]}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{e.name}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                        <span>📌 {e.rules.length} reglas</span>
                        <span>⚠️ {e.commonMistakes.length} errores</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  );
}
