import { useState, useMemo } from 'react';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { vocabularyIntermediate } from '../data/vocabulary-intermediate';
import { getAdvancedVocabByLevel } from '../data/vocabulary-advanced';
import type { VocabularyEntry } from '../data/vocabulary-intermediate';
import type { AdvancedWord } from '../data/vocabulary-advanced';
import { PronunciationHint } from './PronunciationHint';

const POS_LABELS: Record<string, string> = {
  noun: 'sustantivo',
  verb: 'verbo',
  adjective: 'adjetivo',
  adverb: 'adverbio',
  phrase: 'frase',
  'phrasal-verb': 'phrasal verb',
  n: 'sustantivo',
  v: 'verbo',
  adj: 'adjetivo',
  adv: 'adverbio',
  conj: 'conjunción',
};

interface VocabularyExplorerProps {
  level: number;
  onComplete: () => void;
  onBack?: () => void;
}

type VocabSource = 'intermediate' | 'advanced';

interface FieldGroup {
  id: string;
  name: string;
  nameEs: string;
  words: (VocabularyEntry | AdvancedWord)[];
  source: VocabSource;
}

function getFieldsForLevel(level: number): FieldGroup[] {
  if (level >= 4 && level <= 5) {
    return vocabularyIntermediate.map((f) => ({
      id: f.id,
      name: f.name,
      nameEs: f.nameEs,
      words: f.words,
      source: 'intermediate' as VocabSource,
    }));
  }
  if (level >= 6) {
    const cefrLevel = level <= 7 ? 'B2' : level <= 10 ? 'C1' : 'C2';
    const words = getAdvancedVocabByLevel(cefrLevel);
    const domainMap = new Map<string, AdvancedWord[]>();
    for (const w of words) {
      const domain = w.domain || 'other';
      if (!domainMap.has(domain)) domainMap.set(domain, []);
      domainMap.get(domain)!.push(w);
    }
    return Array.from(domainMap.entries()).map(([domain, ws]) => ({
      id: domain,
      name: domain.charAt(0).toUpperCase() + domain.slice(1),
      nameEs: domain,
      words: ws,
      source: 'advanced' as VocabSource,
    }));
  }
  return [];
}

function isAdvancedWord(w: VocabularyEntry | AdvancedWord): w is AdvancedWord {
  return 'domain' in w && 'definition' in w;
}

export default function VocabularyExplorer({ level, onComplete, onBack }: VocabularyExplorerProps) {
  const fields = useMemo(() => getFieldsForLevel(level), [level]);
  const [activeFieldId, setActiveFieldId] = useState<string | null>(fields[0]?.id ?? null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizRevealed, setQuizRevealed] = useState(false);
  const [reviewedIds, setReviewedIds] = useState<Set<string>>(new Set());

  if (fields.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-6xl mx-auto">
        <p className="text-gray-400 mb-4">El explorador de vocabulario no está disponible para niveles A1-A2.</p>
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

  const activeField = fields.find((f) => f.id === activeFieldId) ?? fields[0];
  const words = activeField?.words ?? [];
  const totalWords = fields.reduce((sum, f) => sum + f.words.length, 0);

  const currentQuizWord = quizMode && words[quizIndex]
    ? words[quizIndex]
    : null;

  const getWordId = (w: VocabularyEntry | AdvancedWord) =>
    isAdvancedWord(w) ? w.id : w.word;

  const getWord = (w: VocabularyEntry | AdvancedWord) =>
    isAdvancedWord(w) ? w.word : w.word;

  const getPronunciation = (w: VocabularyEntry | AdvancedWord) =>
    isAdvancedWord(w) ? w.pronunciationEs || w.pronunciation : w.pronunciation;

  const getTranslation = (w: VocabularyEntry | AdvancedWord) =>
    isAdvancedWord(w) ? w.translation : w.translation;

  const getPartOfSpeech = (w: VocabularyEntry | AdvancedWord) =>
    isAdvancedWord(w) ? w.partOfSpeech : w.partOfSpeech;

  const getExample = (w: VocabularyEntry | AdvancedWord) =>
    isAdvancedWord(w)
      ? w.examples?.[0]
        ? { en: w.examples[0].sentence, es: w.examples[0].translationEs }
        : null
      : { en: w.exampleEn, es: w.exampleEs };

  const getCollocations = (w: VocabularyEntry | AdvancedWord) =>
    isAdvancedWord(w) ? w.collocations : w.collocations;

  const posLabel = (pos: string) =>
    POS_LABELS[pos] ?? pos;

  const handleQuizReveal = () => {
    if (currentQuizWord) {
      setReviewedIds((prev) => new Set(prev).add(getWordId(currentQuizWord)));
      setQuizRevealed(true);
    }
  };

  const handleQuizNext = () => {
    if (quizIndex < words.length - 1) {
      setQuizIndex(quizIndex + 1);
      setQuizRevealed(false);
    } else {
      setQuizMode(false);
      setQuizIndex(0);
      setQuizRevealed(false);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Explorador de Vocabulario</h2>
        <p className="text-sm text-gray-400">
          {reviewedIds.size} / {totalWords} revisadas
        </p>
      </div>

      {/* a. Semantic field selector */}
      <div className="flex flex-wrap gap-2">
        {fields.map((f) => (
          <button
            key={f.id}
            onClick={() => {
              setActiveFieldId(f.id);
              setQuizMode(false);
              setQuizIndex(0);
              setQuizRevealed(false);
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeFieldId === f.id
                ? 'bg-accent-primary text-white'
                : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
            }`}
          >
            {f.name}
          </button>
        ))}
      </div>

      {quizMode && currentQuizWord ? (
        /* Quiz mode */
        <div className="bg-dark-700 rounded-lg p-6 space-y-4">
          <h3 className="text-sm font-medium text-accent-primary">Quiz: ¿Cuál es la traducción?</h3>
          <p className="text-2xl font-bold text-white flex flex-wrap items-baseline gap-2">
            {getWord(currentQuizWord)}
            <PronunciationHint word={getWord(currentQuizWord)} className="text-base font-normal" />
          </p>
          <p className="text-sm text-gray-400">{getPronunciation(currentQuizWord)}</p>
          <p className="text-xs text-gray-500">{posLabel(getPartOfSpeech(currentQuizWord))}</p>

          {quizRevealed ? (
            <>
              <div className="pt-3 border-t border-dark-600">
                <p className="text-green-400 font-medium">{getTranslation(currentQuizWord)}</p>
                {getExample(currentQuizWord) && (
                  <p className="text-sm text-gray-300 mt-2">
                    {getExample(currentQuizWord)!.en}
                  </p>
                )}
                {getExample(currentQuizWord) && (
                  <p className="text-xs text-gray-400">{getExample(currentQuizWord)!.es}</p>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleQuizNext}
                  className="btn-primary flex items-center gap-2"
                >
                  {quizIndex < words.length - 1 ? 'Siguiente' : 'Terminar quiz'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <button onClick={handleQuizReveal} className="btn-primary">
              Mostrar respuesta
            </button>
          )}
        </div>
      ) : (
        /* Browse mode: word cards */
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">{activeField?.nameEs}</p>
            <button
              onClick={() => {
                setQuizMode(true);
                setQuizIndex(0);
                setQuizRevealed(false);
              }}
              className="text-sm text-accent-primary hover:underline"
            >
              Quiz yourself
            </button>
          </div>

          {words.map((w) => {
            const wordId = getWordId(w);
            const reviewed = reviewedIds.has(wordId);
            return (
              <div
                key={wordId}
                className={`bg-dark-700 rounded-lg p-4 border ${
                  reviewed ? 'border-green-500/30' : 'border-dark-600'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-white flex flex-wrap items-baseline gap-2">
                      {getWord(w)}
                      <PronunciationHint word={getWord(w)} className="text-sm font-normal" />
                    </p>
                    <p className="text-sm text-gray-400">{getPronunciation(w)}</p>
                    <p className="text-xs text-accent-primary">{posLabel(getPartOfSpeech(w))}</p>
                  </div>
                  {reviewed && <Check className="w-5 h-5 text-green-400 flex-shrink-0" />}
                </div>
                <p className="text-gray-300 mt-2">{getTranslation(w)}</p>
                {getExample(w) && (
                  <div className="mt-3 pt-3 border-t border-dark-600">
                    <p className="text-sm text-gray-200">{getExample(w)!.en}</p>
                    <p className="text-xs text-gray-400">{getExample(w)!.es}</p>
                  </div>
                )}
                {getCollocations(w).length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs text-gray-500 mb-1">Collocations:</p>
                    <div className="flex flex-wrap gap-1">
                      {getCollocations(w).slice(0, 5).map((c, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-dark-800 text-gray-400 text-xs"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <button
                  onClick={() =>
                    setReviewedIds((prev) =>
                      prev.has(wordId) ? new Set([...prev].filter((x) => x !== wordId)) : new Set(prev).add(wordId)
                    )
                  }
                  className="mt-2 text-xs text-accent-primary hover:underline"
                >
                  {reviewed ? 'Marcar como no revisada' : 'Marcar como revisada'}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Back and Continue */}
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
