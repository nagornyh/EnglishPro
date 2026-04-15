import { useState, useEffect } from 'react';
import { ArrowLeft, Globe, ChevronRight } from 'lucide-react';
import { getCulturalNotesByLevel, type CulturalNoteData } from '../data/cultural-notes';

interface CulturalDeepDiveProps {
  level: number;
  onComplete: () => void;
  onBack?: () => void;
  /** Si vienen ambos, el índice lo controla el padre (persistencia en el flujo). */
  noteIndex?: number;
  onNoteIndexChange?: (index: number) => void;
}

const levelToCefr = (level: number): string => {
  if (level <= 2) return 'A1';
  if (level === 3) return 'A2';
  if (level <= 5) return 'B1';
  if (level <= 7) return 'B2';
  if (level <= 10) return 'C1';
  return 'C2';
};

export default function CulturalDeepDive({
  level,
  onComplete,
  onBack,
  noteIndex: controlledIndex,
  onNoteIndexChange,
}: CulturalDeepDiveProps) {
  const cefr = levelToCefr(level) as CulturalNoteData['level'];
  const notes = getCulturalNotesByLevel(cefr);
  const [internalIndex, setInternalIndex] = useState(0);
  const controlled = controlledIndex !== undefined && onNoteIndexChange !== undefined;
  const rawIndex = controlled ? controlledIndex! : internalIndex;

  const setIndex = (next: number) => {
    const cap = Math.max(0, notes.length - 1);
    const clamped = Math.max(0, Math.min(next, cap));
    if (controlled) onNoteIndexChange!(clamped);
    else setInternalIndex(clamped);
  };

  useEffect(() => {
    if (notes.length === 0) return;
    const cap = notes.length - 1;
    const clamped = Math.max(0, Math.min(rawIndex, cap));
    if (clamped !== rawIndex) {
      if (controlled) onNoteIndexChange!(clamped);
      else setInternalIndex(clamped);
    }
  }, [notes.length, rawIndex, controlled, onNoteIndexChange]);

  if (notes.length === 0) {
    return (
      <div className="max-w-6xl mx-auto text-center py-12">
        <p className="text-gray-400">No hay notas culturales para este nivel.</p>
        <button onClick={onComplete} className="btn-primary mt-4">Continuar</button>
      </div>
    );
  }

  const cap = notes.length - 1;
  const currentIndex = Math.max(0, Math.min(rawIndex, cap));
  const note = notes[currentIndex];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe className="w-6 h-6 text-accent-primary" />
          <h2 className="text-xl font-bold text-white">Cultural Deep Dive</h2>
        </div>
        <span className="text-sm text-gray-400">{currentIndex + 1} / {notes.length}</span>
      </div>

      <div className="bg-dark-700 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-xs font-medium bg-accent-primary/20 text-accent-primary">
            {note.level}
          </span>
          <span className="px-2 py-0.5 rounded text-xs font-medium bg-dark-600 text-gray-300">
            {note.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-white">{note.title}</h3>

        {note.titleEs && (
          <p className="text-sm text-gray-400 italic">{note.titleEs}</p>
        )}

        <p className="text-gray-300 leading-relaxed">{note.content}</p>

        {note.contentEs && (
          <div className="bg-dark-600 rounded-lg p-4 mt-3">
            <p className="text-sm text-gray-400 leading-relaxed">{note.contentEs}</p>
          </div>
        )}

        {note.regions && note.regions.length > 0 && (
          <div className="flex gap-2 mt-3">
            <span className="text-sm text-gray-500">Regiones:</span>
            {note.regions.map(r => (
              <span key={r} className="px-2 py-0.5 rounded text-xs bg-dark-600 text-gray-300">{r}</span>
            ))}
          </div>
        )}

        {note.relatedTopics && note.relatedTopics.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-3">
            <span className="text-sm text-gray-500">Temas relacionados:</span>
            {note.relatedTopics.map(t => (
              <span key={t} className="px-2 py-0.5 rounded text-xs bg-accent-primary/10 text-accent-primary">{t}</span>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-3">
        {onBack && (
          <button onClick={onBack} className="btn-secondary flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Atrás
          </button>
        )}
        {currentIndex < notes.length - 1 ? (
          <button onClick={() => setIndex(currentIndex + 1)} className="btn-primary flex items-center gap-2">
            Siguiente nota <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button onClick={onComplete} className="btn-primary">Continuar</button>
        )}
      </div>
    </div>
  );
}
