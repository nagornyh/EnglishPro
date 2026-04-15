import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { getWritingScaffoldsByLevel } from '../data/writing-scaffolds';

/** Map lesson level (1-13) to scaffold level (1-13) */
function levelToScaffoldLevel(level: number): number {
  if (level <= 2) return 1;
  if (level === 3) return 2;
  if (level <= 5) return 3;
  if (level <= 7) return 4;
  if (level <= 9) return 5;
  // Levels 10-13: pass through so users see scaffolds for their level
  return Math.min(level, 13);
}

interface WritingWorkshopProps {
  level: number;
  onComplete: () => void;
  onBack?: () => void;
}

export default function WritingWorkshop({ level, onComplete, onBack }: WritingWorkshopProps) {
  const scaffoldLevel = levelToScaffoldLevel(level);
  const allScaffolds = getWritingScaffoldsByLevel(scaffoldLevel);
  const scaffold = allScaffolds.find((s) => s.level === scaffoldLevel) ?? allScaffolds[allScaffolds.length - 1];
  const [studentText, setStudentText] = useState('');
  const [showModel, setShowModel] = useState(false);

  if (!scaffold) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-6xl mx-auto">
        <p className="text-gray-400 mb-4">No hay plantillas de escritura disponibles para este nivel.</p>
        <div className="flex gap-3">
          {onBack && (
            <button onClick={onBack} className="btn-secondary flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
          )}
          <button onClick={onComplete} className="btn-primary">
            Continuar
          </button>
        </div>
      </div>
    );
  }

  const wordCount = studentText.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold text-white">{scaffold.title}</h2>
      <p className="text-sm text-gray-400">{scaffold.titleEs}</p>

      {/* a. Writing task / prompt */}
      <div className="bg-dark-700 rounded-lg p-4">
        <h3 className="text-sm font-medium text-accent-primary mb-2">Objetivo</h3>
        <p className="text-gray-200">{scaffold.objective}</p>
        <p className="text-sm text-gray-400 mt-1">{scaffold.objectiveEs}</p>
      </div>

      {/* b. Scaffold structure (model text sections) */}
      <div className="bg-dark-800 rounded-lg p-4">
        <h3 className="text-sm font-medium text-accent-primary mb-3">Estructura sugerida</h3>
        <div className="space-y-3">
          {scaffold.template.map((section, i) => (
            <div key={i} className="border-l-2 border-accent-primary/50 pl-3">
              <p className="font-medium text-white">{section.section}</p>
              <p className="text-xs text-gray-400">{section.sectionEs}</p>
              <p className="text-sm text-gray-300 mt-1">{section.guidance}</p>
              {section.minWords != null && (
                <p className="text-xs text-amber-400 mt-1">Mín. {section.minWords} palabras</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* c. Useful phrases and connectors */}
      <div className="bg-dark-800 rounded-lg p-4">
        <h3 className="text-sm font-medium text-accent-primary mb-2">Frases y conectores útiles</h3>
        <div className="flex flex-wrap gap-2">
          {scaffold.template.flatMap((s) => s.usefulPhrases).map((phrase, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded bg-dark-700 text-gray-300 text-sm"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>

      {/* d. Checklist / criteria */}
      <div className="bg-dark-800 rounded-lg p-4">
        <h3 className="text-sm font-medium text-accent-primary mb-2">Criterios de evaluación</h3>
        <ul className="space-y-1">
          {scaffold.checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-accent-primary">•</span>
              <span>{item.item}</span>
              <span className="text-gray-500">({item.itemEs})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* e. Textarea for student */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Tu texto</label>
        <textarea
          value={studentText}
          onChange={(e) => setStudentText(e.target.value)}
          placeholder="Escribe tu respuesta aquí..."
          className="input-field min-h-[180px] resize-y"
          rows={8}
        />
      </div>

      {/* f. Word counter */}
      <p className="text-xs text-gray-400">
        {wordCount} palabra{wordCount !== 1 ? 's' : ''}
      </p>

      {/* g. Show Model button */}
      <div>
        <button
          onClick={() => setShowModel(!showModel)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-gray-300 border border-dark-600 transition-colors"
        >
          {showModel ? (
            <>
              <EyeOff className="w-4 h-4" />
              Ocultar modelo
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              Mostrar modelo
            </>
          )}
        </button>
        {showModel && (
          <div className="mt-3 bg-dark-800 rounded-lg p-4 border border-dark-600">
            <h4 className="text-sm font-medium text-accent-primary mb-2">Texto modelo</h4>
            <pre className="text-sm text-gray-200 whitespace-pre-wrap font-sans">
              {scaffold.modelText.text}
            </pre>
          </div>
        )}
      </div>

      {/* h. Back and Continue buttons */}
      <div className="flex gap-3">
        {onBack && (
          <button onClick={onBack} className="btn-secondary flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        )}
        <button onClick={onComplete} className="btn-primary">
          Continuar
        </button>
      </div>
    </div>
  );
}
