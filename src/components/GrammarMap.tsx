import { useState, useMemo } from 'react';
import { grammarTheory, type GrammarTheoryModule } from '../data/grammar-theory';
import { Map as MapIcon, ArrowLeft, CheckCircle2, X, AlertTriangle } from 'lucide-react';

const CEFR_ORDER: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function levelToCefr(level: number): string {
  if (level <= 2) return 'A1';
  if (level === 3) return 'A2';
  if (level <= 5) return 'B1';
  if (level <= 7) return 'B2';
  if (level <= 10) return 'C1';
  return 'C2';
}

function getPreviousCefr(cefr: string): string | null {
  const idx = CEFR_ORDER.indexOf(cefr);
  return idx > 0 ? CEFR_ORDER[idx - 1] : null;
}

interface GrammarMapProps {
  currentLevel: number;
  grammarTheoryIds?: string[];
  masteredGrammarIds?: string[];
  onSelectModule?: (module: GrammarTheoryModule) => void;
  onBack?: () => void;
}

const PRIORITY_COLOR: Record<string, string> = {
  critical: 'bg-red-500',
  high: 'bg-amber-500',
  medium: 'bg-gray-500',
  low: 'bg-gray-600',
};

const PRIORITY_LABEL: Record<string, string> = {
  critical: 'Crítico',
  high: 'Alto',
  medium: 'Medio',
  low: 'Bajo',
};

function ModuleDetail({ mod, onClose }: { mod: GrammarTheoryModule; onClose: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-accent-primary/20 text-accent-primary">
              {mod.level}
            </span>
            <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
              mod.priority === 'critical' ? 'bg-red-500/20 text-red-400' :
              mod.priority === 'high' ? 'bg-amber-500/20 text-amber-400' :
              'bg-gray-600/40 text-gray-400'
            }`}>
              {PRIORITY_LABEL[mod.priority] ?? mod.priority}
            </span>
          </div>
          <h3 className="text-base font-bold text-white leading-snug">
            {mod.titleEs || mod.title}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">{mod.title}</p>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-dark-600 hover:bg-dark-500 text-gray-400 hover:text-white transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {/* Explanation */}
        <div>
          <p className="text-xs font-semibold text-accent-primary uppercase tracking-wider mb-1.5">
            Explicación
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            {mod.explanationEs || mod.explanation}
          </p>
        </div>

        {/* Formation rules */}
        {mod.formationRules?.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-accent-primary uppercase tracking-wider mb-1.5">
              Formación
            </p>
            <div className="space-y-2">
              {mod.formationRules.slice(0, 3).map((rule, i) => (
                <div key={i} className="bg-dark-700 rounded-lg p-3">
                  <p className="text-xs font-medium text-white mb-1">
                    {rule.labelEs || rule.label}
                  </p>
                  {rule.formula && (
                    <p className="text-xs font-mono text-accent-primary bg-dark-900 rounded px-2 py-1 mb-1">
                      {rule.formula}
                    </p>
                  )}
                  {rule.steps?.slice(0, 2).map((step, j) => (
                    <div key={j} className="text-xs text-gray-400 mt-1">
                      <span className="text-white">{step.example}</span>
                      {step.translation && (
                        <span className="text-gray-500"> — {step.translation}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* L1 contrast */}
        {mod.l1Contrast && (
          <div>
            <p className="text-xs font-semibold text-accent-primary uppercase tracking-wider mb-1.5">
              Español vs Inglés
            </p>
            <div className="bg-dark-700 rounded-lg p-3 space-y-2">
              {/* Concept description in Spanish */}
              {(mod.l1Contrast.conceptEs || mod.l1Contrast.concept) && (
                <p className="text-xs text-gray-300 leading-relaxed">
                  {mod.l1Contrast.conceptEs || mod.l1Contrast.concept}
                </p>
              )}
              {/* Contrast examples: English vs Spanish */}
              {mod.l1Contrast.contrastExamples?.slice(0, 3).map((ex, i) => (
                <div key={i} className="pt-1.5 border-t border-dark-600 space-y-0.5">
                  <p className="text-xs text-white font-mono">🇬🇧 {ex.english}</p>
                  <p className="text-xs text-yellow-400/80 font-mono">🇪🇸 {ex.spanish}</p>
                  {ex.note && (
                    <p className="text-xs text-gray-500 italic">{ex.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Predicted errors */}
        {mod.predictedErrors?.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-accent-primary uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3 text-amber-400" /> Errores frecuentes
            </p>
            <div className="space-y-2">
              {mod.predictedErrors.slice(0, 2).map((err, i) => (
                <div key={i} className="bg-dark-700 rounded-lg p-3 space-y-1">
                  <p className="text-xs text-red-400 line-through font-mono">{err.error}</p>
                  <p className="text-xs text-green-400 font-mono">✓ {err.correction}</p>
                  <p className="text-xs text-gray-500">{err.whyEs}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GrammarMap({
  currentLevel,
  grammarTheoryIds = [],
  masteredGrammarIds = [],
  onSelectModule,
  onBack,
}: GrammarMapProps) {
  const [activeModule, setActiveModule] = useState<GrammarTheoryModule | null>(null);

  const cefr = levelToCefr(currentLevel);
  const prevCefr = getPreviousCefr(cefr);

  const { modulePositions, connections, bounds } = useMemo(() => {
    const cefrLevels = prevCefr ? [prevCefr, cefr] : [cefr];

    const modulesByCefr: Record<string, GrammarTheoryModule[]> = {};
    cefrLevels.forEach(c => {
      modulesByCefr[c] = grammarTheory.filter(m => m.level === c);
    });

    const allModuleIds = new Set<string>();
    cefrLevels.forEach(c => {
      modulesByCefr[c].forEach(m => allModuleIds.add(m.id));
    });

    const nodeWidth = 200;
    const nodeHeight = 80;
    const gapX = 32;
    const gapY = 140;
    const cefrLevelGap = 60;
    const nodesPerRow = 4;
    const positions: Record<string, { x: number; y: number }> = {};
    let y = 0;

    cefrLevels.forEach((c, cefrIdx) => {
      const mods = modulesByCefr[c];
      const rows = Math.ceil(mods.length / nodesPerRow);
      for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
        const rowMods = mods.slice(rowIdx * nodesPerRow, (rowIdx + 1) * nodesPerRow);
        const rowTotalW = rowMods.length * nodeWidth + (rowMods.length - 1) * gapX;
        const startX = -rowTotalW / 2 + nodeWidth / 2;
        rowMods.forEach((m, colIdx) => {
          positions[m.id] = { x: startX + colIdx * (nodeWidth + gapX), y };
        });
        if (rowIdx < rows - 1) y += gapY;
      }
      y += gapY + (cefrIdx < cefrLevels.length - 1 ? cefrLevelGap : 0);
    });

    const prereqConnections: { from: string; to: string }[] = [];
    const recycleConnections: { from: string; to: string }[] = [];
    cefrLevels.forEach(c => {
      modulesByCefr[c].forEach(m => {
        m.prerequisiteIds.forEach(pid => {
          if (allModuleIds.has(pid) && positions[pid] && positions[m.id]) {
            prereqConnections.push({ from: pid, to: m.id });
          }
        });
        m.recycleInTopics.forEach(rid => {
          if (allModuleIds.has(rid) && positions[rid] && positions[m.id]) {
            recycleConnections.push({ from: m.id, to: rid });
          }
        });
      });
    });

    let minX = 0, maxX = 0, minY = 0, maxY = 0;
    Object.values(positions).forEach(({ x, y: py }) => {
      minX = Math.min(minX, x - nodeWidth / 2);
      maxX = Math.max(maxX, x + nodeWidth / 2);
      minY = Math.min(minY, py - nodeHeight / 2);
      maxY = Math.max(maxY, py + nodeHeight / 2);
    });
    const pad = 48;
    const bounds = {
      minX: minX - pad,
      maxX: maxX + pad,
      minY: minY - pad,
      maxY: maxY + pad,
      width: maxX - minX + pad * 2,
      height: maxY - minY + pad * 2,
    };

    return {
      modulePositions: positions,
      connections: { prereq: prereqConnections, recycle: recycleConnections },
      bounds,
    };
  }, [cefr, prevCefr]);

  const highlightedIds = useMemo(() => new Set(grammarTheoryIds), [grammarTheoryIds]);
  const masteredIds = useMemo(() => new Set(masteredGrammarIds), [masteredGrammarIds]);

  const svgHeight = Math.max(400, bounds?.height ?? 400);
  const viewBox = bounds
    ? `${bounds.minX} ${bounds.minY} ${bounds.width} ${bounds.height}`
    : '-400 -50 800 450';

  const handleNodeClick = (mod: GrammarTheoryModule) => {
    setActiveModule(prev => prev?.id === mod.id ? null : mod);
    onSelectModule?.(mod);
  };

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="flex items-center gap-2">
            <MapIcon className="w-6 h-6 text-accent-primary" />
            <h2 className="text-xl font-bold text-white">Mapa Gramatical</h2>
          </div>
        </div>
        <span className="text-sm text-gray-400">
          Nivel {currentLevel} → {cefr}
          {prevCefr && ` (incluye ${prevCefr})`}
          {masteredGrammarIds.length > 0 && (
            <span className="ml-2 text-green-400">· {masteredIds.size} módulos estudiados</span>
          )}
        </span>
      </div>

      <p className="text-gray-400 text-sm">
        Módulos que necesitas antes de esta lección (flechas sólidas) y dónde se reciclan (flechas punteadas).
        {grammarTheoryIds.length > 0 && (
          <span className="text-accent-primary ml-1">Los módulos de esta tarea están resaltados.</span>
        )}
        <span className="text-gray-500 ml-1">Haz clic en cualquier módulo para ver su explicación.</span>
      </p>

      {/* Map + Detail panel */}
      <div className="flex gap-4" style={{ minHeight: `${svgHeight + 48}px` }}>
        {/* SVG map */}
        <div className={`bg-dark-800 rounded-xl overflow-auto transition-all ${activeModule ? 'flex-1' : 'w-full'}`}>
          <svg
            width="100%"
            height={svgHeight}
            viewBox={viewBox}
            preserveAspectRatio="xMidYMin meet"
            style={{ display: 'block', minHeight: `${svgHeight}px` }}
          >
            {/* Prerequisites (solid) */}
            <g stroke="#6b7280" strokeWidth="2" fill="none">
              {connections.prereq.map(({ from, to }) => {
                const fp = modulePositions[from];
                const tp = modulePositions[to];
                if (!fp || !tp) return null;
                const midY = (fp.y + tp.y) / 2;
                return (
                  <path
                    key={`prereq-${from}-${to}`}
                    d={`M ${fp.x} ${fp.y + 40} C ${fp.x} ${midY}, ${tp.x} ${midY}, ${tp.x} ${tp.y - 40}`}
                  />
                );
              })}
            </g>
            {/* Recycle (dotted) */}
            <g stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="5 5" fill="none">
              {connections.recycle.map(({ from, to }) => {
                const fp = modulePositions[from];
                const tp = modulePositions[to];
                if (!fp || !tp) return null;
                const midY = (fp.y + tp.y) / 2;
                return (
                  <path
                    key={`recycle-${from}-${to}`}
                    d={`M ${fp.x} ${fp.y + 40} C ${fp.x} ${midY}, ${tp.x} ${midY}, ${tp.x} ${tp.y - 40}`}
                  />
                );
              })}
            </g>

            {/* Nodes */}
            {Object.entries(modulePositions).map(([id, pos]) => {
              const mod = grammarTheory.find(m => m.id === id);
              if (!mod) return null;
              const isHighlighted = highlightedIds.has(id);
              const isMastered = masteredIds.has(id);
              const isActive = activeModule?.id === id;
              return (
                <g key={id} transform={`translate(${pos.x}, ${pos.y})`}>
                  <foreignObject x={-100} y={-40} width={200} height={80}>
                    <div
                      onClick={() => handleNodeClick(mod)}
                      className={`h-full rounded-lg border-2 px-3 py-2 cursor-pointer transition-all select-none ${
                        isActive
                          ? 'bg-accent-primary/30 border-accent-primary shadow-lg shadow-accent-primary/20'
                          : isMastered
                          ? 'bg-green-900/30 border-green-500 hover:bg-green-900/50'
                          : isHighlighted
                          ? 'bg-accent-primary/20 border-accent-primary hover:bg-accent-primary/30'
                          : 'bg-dark-700 border-dark-600 hover:border-accent-primary/60 hover:bg-dark-600'
                      }`}
                    >
                      <div className="flex items-start gap-2 h-full">
                        <span
                          className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${PRIORITY_COLOR[mod.priority] ?? 'bg-gray-500'}`}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-accent-primary/80">{mod.level}</p>
                          <p className="text-sm font-semibold text-white leading-tight" title={mod.titleEs || mod.title}>
                            {mod.titleEs || mod.title}
                          </p>
                        </div>
                        {isMastered && (
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        )}
                      </div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Detail panel */}
        {activeModule && (
          <div className="w-80 flex-shrink-0 bg-dark-800 rounded-xl p-5 overflow-y-auto">
            <ModuleDetail mod={activeModule} onClose={() => setActiveModule(null)} />
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-0.5 bg-gray-500 inline-block" /> Prerrequisito
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 border-t border-dashed border-gray-400 inline-block" /> Reciclado en
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" /> Crítico
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Alto
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-500 inline-block" /> Medio/Bajo
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> Estudiado
        </span>
      </div>
    </div>
  );
}
