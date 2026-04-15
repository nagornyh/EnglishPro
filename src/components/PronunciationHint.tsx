import { spanishApproxForPhrase } from '../utils/pronunciationApproxEs';

function lettersKey(s: string): string {
  return s
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z]/g, '');
}

interface PronunciationHintProps {
  /** Palabra o frase en inglés (una o varias palabras) */
  word: string;
  className?: string;
  /** Cuando true, siempre muestra algo aunque no haya aproximación disponible */
  forceShow?: boolean;
}

export function PronunciationHint({ word, className = '', forceShow = false }: PronunciationHintProps) {
  const trimmed = word.trim();
  if (!trimmed) return null;
  const approx = spanishApproxForPhrase(trimmed);

  if (forceShow) {
    const display = approx ?? trimmed.toLowerCase();
    return (
      <span
        className={`text-emerald-300/90 text-sm font-normal ${className}`.trim()}
        title="Aproximación con letras familiares en español (orientación)"
      >
        ≈ «{display}»
      </span>
    );
  }

  if (!approx) return null;
  // Para palabras sueltas, ocultar si no hay diferencia real con el original
  const trimmedWords = trimmed.trim().split(/\s+/);
  if (trimmedWords.length === 1 && lettersKey(trimmed) && lettersKey(approx) === lettersKey(trimmed)) return null;
  return (
    <span
      className={`text-emerald-300/90 text-sm font-normal ${className}`.trim()}
      title="Aproximación con letras familiares en español (orientación)"
    >
      ≈ «{approx}»
    </span>
  );
}
