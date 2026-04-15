import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, Headphones, CheckCircle } from 'lucide-react';
import { spanishApproxForWord } from '../utils/pronunciationApproxEs';
import {
  getContentByLevel,
  type PhoneticSound,
  type WordStressRule,
  type SentenceStressPattern,
  type IntonationPattern,
  type ConnectedSpeech,
  type SilentLetter,
} from '../data/pronunciation';

export type PronunciationLabTab =
  | 'sounds'
  | 'word-stress'
  | 'sentence-stress'
  | 'intonation'
  | 'connected-speech'
  | 'silent-letters';

interface PronunciationLabProps {
  level: number;
  onComplete: () => void;
  onBack?: () => void;
}

const TAB_LABELS: Record<PronunciationLabTab, string> = {
  sounds: 'Sonidos (AFI)',
  'word-stress': 'Acento en palabra',
  'sentence-stress': 'Acento en la frase',
  intonation: 'Entonación',
  'connected-speech': 'Habla encadenada',
  'silent-letters': 'Letras mudas',
};

export default function PronunciationLab({ level, onComplete, onBack }: PronunciationLabProps) {
  const content = getContentByLevel(level);

  // Determine which tabs to show based on level
  // A1-A2 (1-3): Sounds, Word Stress
  // B1-B2 (4-7): + Sentence Stress, Intonation
  // C1-C2+ (8-13): + Connected Speech, Silent Letters
  const showSentenceStress = level >= 4;
  const showIntonation = level >= 4;
  const showConnectedSpeech = level >= 8;
  const showSilentLetters = level >= 8;

  const tabs: PronunciationLabTab[] = [
    'sounds',
    'word-stress',
    ...(showSentenceStress ? ['sentence-stress' as const] : []),
    ...(showIntonation ? ['intonation' as const] : []),
    ...(showConnectedSpeech ? ['connected-speech' as const] : []),
    ...(showSilentLetters ? ['silent-letters' as const] : []),
  ];

  const [activeTab, setActiveTab] = useState<PronunciationLabTab>(tabs[0]);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number | null>>({});
  const [quizFeedback, setQuizFeedback] = useState<Record<string, boolean | null>>({});

  const speak = (text: string, rate = 0.85) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    }
  };

  const vowels = content.sounds.filter((s) => s.type === 'vowel');
  const consonants = content.sounds.filter((s) => s.type === 'consonant');

  // Mini-quiz for Word Stress: "Which word has stress on the second syllable?"
  const nounRule = content.stressRules.find((r) =>
    r.rule.toLowerCase().includes('noun') && r.rule.toLowerCase().includes('first')
  );
  const verbRule = content.stressRules.find((r) =>
    r.rule.toLowerCase().includes('verb') && r.rule.toLowerCase().includes('second')
  );
  const nounExamples = nounRule?.examples.slice(0, 2).map((e) => e.word) ?? ['table', 'water'];
  const verbExamples = verbRule?.examples.slice(0, 2).map((e) => e.word) ?? ['begin', 'decide'];
  const wordStressQuizOptions = [...nounExamples, ...verbExamples];
  const wordStressQuizCorrectIdx = wordStressQuizOptions.length >= 4 ? 2 : 0; // Verbs (begin, decide) have stress on second syllable

  const handleWordStressQuiz = (idx: number) => {
    const verbsSecondStress =
      wordStressQuizOptions.length >= 4 ? [2, 3] : [wordStressQuizCorrectIdx];
    const ok = verbsSecondStress.includes(idx);
    setQuizAnswers((prev) => ({ ...prev, 'word-stress': idx }));
    setQuizFeedback((prev) => ({ ...prev, 'word-stress': ok }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-[70vh] py-4 w-full max-w-7xl mx-auto px-1 sm:px-2"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 gap-2 flex-wrap">
        {onBack ? (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Atrás</span>
          </button>
        ) : (
          <div />
        )}
        <div className="flex-1 text-center min-w-[10rem]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400">
            <Headphones className="w-5 h-5" />
            <span className="text-sm font-medium">Laboratorio de pronunciación</span>
          </div>
        </div>
        <div className="w-16" />
      </div>

      {/* Section tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-accent-primary text-white'
                : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'
            }`}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6">
        <AnimatePresence mode="wait">
          {activeTab === 'sounds' && (
            <motion.div
              key="sounds"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">Sonidos del AFI</h3>

              {vowels.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-accent-primary mb-3">Vocales</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {vowels.map((s) => (
                      <SoundCard key={s.id} sound={s} onSpeak={speak} />
                    ))}
                  </div>
                </div>
              )}

              {consonants.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-accent-primary mb-3">Consonantes</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {consonants.map((s) => (
                      <SoundCard key={s.id} sound={s} onSpeak={speak} />
                    ))}
                  </div>
                </div>
              )}

              <MiniQuiz
                question="¿Qué palabra lleva el sonido de la «th» interdental sorda (como en «think»)?"
                options={['think', 'tank', 'sink', 'thing']}
                correctIndex={0}
                quizKey="sounds-th"
                quizAnswers={quizAnswers}
                quizFeedback={quizFeedback}
                onSelect={(idx) => {
                  const ok = idx === 0 || idx === 3; // think / thing (θ); tank/sink no
                  setQuizAnswers((p) => ({ ...p, 'sounds-th': idx }));
                  setQuizFeedback((p) => ({ ...p, 'sounds-th': ok }));
                }}
              />
            </motion.div>
          )}

          {activeTab === 'word-stress' && (
            <motion.div
              key="word-stress"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">Reglas del acento en la palabra</h3>
              {content.stressRules.map((rule) => (
                <WordStressCard key={rule.id} rule={rule} onSpeak={speak} />
              ))}
              <MiniQuiz
                question="¿Qué palabra lleva el acento (énfasis) en la segunda sílaba?"
                options={wordStressQuizOptions.length >= 4 ? wordStressQuizOptions : ['begin', 'table', 'water', 'window']}
                correctIndex={wordStressQuizOptions.length >= 4 ? wordStressQuizCorrectIdx : 0}
                quizKey="word-stress"
                quizAnswers={quizAnswers}
                quizFeedback={quizFeedback}
                onSelect={handleWordStressQuiz}
              />
            </motion.div>
          )}

          {activeTab === 'sentence-stress' && (
            <motion.div
              key="sentence-stress"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">Acento en la frase</h3>
              {content.sentenceStress.map((p) => (
                <SentenceStressCard key={p.id} pattern={p} onSpeak={speak} />
              ))}
              <MiniQuiz
                question="¿Qué palabras suelen llevar más acento en una frase?"
                options={[
                  'Palabras de contenido (sustantivos, verbos principales…)',
                  'Palabras gramaticales (the, a, to…)',
                  'Todas por igual',
                  'Solo la primera palabra',
                ]}
                correctIndex={0}
                quizKey="sentence-stress"
                quizAnswers={quizAnswers}
                quizFeedback={quizFeedback}
                onSelect={(idx) => {
                  setQuizAnswers((p) => ({ ...p, 'sentence-stress': idx }));
                  setQuizFeedback((p) => ({ ...p, 'sentence-stress': idx === 0 }));
                }}
              />
            </motion.div>
          )}

          {activeTab === 'intonation' && (
            <motion.div
              key="intonation"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">Patrones de entonación</h3>
              {content.intonation.map((p) => (
                <IntonationCard key={p.id} pattern={p} onSpeak={speak} />
              ))}
              <MiniQuiz
                question="La entonación ascendente ↗ suele usarse en:"
                options={[
                  'Preguntas de sí / no',
                  'Preguntas con palabra interrogativa (wh-)',
                  'Afirmaciones',
                  'Órdenes directas',
                ]}
                correctIndex={0}
                quizKey="intonation"
                quizAnswers={quizAnswers}
                quizFeedback={quizFeedback}
                onSelect={(idx) => {
                  setQuizAnswers((p) => ({ ...p, intonation: idx }));
                  setQuizFeedback((p) => ({ ...p, intonation: idx === 0 }));
                }}
              />
            </motion.div>
          )}

          {activeTab === 'connected-speech' && (
            <motion.div
              key="connected-speech"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">Habla encadenada</h3>
              {content.connectedSpeech.map((c) => (
                <ConnectedSpeechCard key={c.id} item={c} onSpeak={speak} />
              ))}
              <MiniQuiz
                question="El encadenamiento (linking) ocurre cuando:"
                options={[
                  'Una palabra termina en consonante y la siguiente empieza en vocal',
                  'Las dos palabras terminan en vocal',
                  'Se habla muy despacio',
                  'Solo en registros formales',
                ]}
                correctIndex={0}
                quizKey="connected-speech"
                quizAnswers={quizAnswers}
                quizFeedback={quizFeedback}
                onSelect={(idx) => {
                  setQuizAnswers((p) => ({ ...p, 'connected-speech': idx }));
                  setQuizFeedback((p) => ({ ...p, 'connected-speech': idx === 0 }));
                }}
              />
            </motion.div>
          )}

          {activeTab === 'silent-letters' && (
            <motion.div
              key="silent-letters"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">Letras mudas</h3>
              {content.silentLetters.map((s) => (
                <SilentLetterCard key={s.id} item={s} onSpeak={speak} />
              ))}
              <MiniQuiz
                question="En «knife», ¿qué letra es muda?"
                options={['k', 'n', 'i', 'e']}
                correctIndex={0}
                quizKey="silent-letters"
                quizAnswers={quizAnswers}
                quizFeedback={quizFeedback}
                onSelect={(idx) => {
                  setQuizAnswers((p) => ({ ...p, 'silent-letters': idx }));
                  setQuizFeedback((p) => ({ ...p, 'silent-letters': idx === 0 }));
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer buttons */}
      <div className="flex gap-3 mt-8 pt-6 border-t border-dark-600">
        {onBack && (
          <button onClick={onBack} className="btn-secondary">
            Atrás
          </button>
        )}
        <button onClick={onComplete} className="btn-primary flex-1 flex items-center justify-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Continuar
        </button>
      </div>
    </motion.div>
  );
}

function SoundCard({
  sound,
  onSpeak,
}: {
  sound: PhoneticSound;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="bg-dark-700 rounded-lg p-4 border border-dark-600">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-2xl font-mono text-accent-primary">/{sound.symbol}/</span>
          <p className="text-sm text-gray-300 mt-1">{sound.description}</p>
          {sound.descriptionEs && (
            <p className="text-xs text-gray-500">{sound.descriptionEs}</p>
          )}
        </div>
        <button
          onClick={() => onSpeak(sound.examples[0]?.word ?? '')}
          className="p-2 rounded-lg bg-dark-600 hover:bg-dark-500 text-gray-400 hover:text-white transition-colors"
          aria-label="Play sound"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {sound.examples.slice(0, 4).map((ex) => {
          const approx = spanishApproxForWord(ex.word);
          return (
            <button
              key={ex.word}
              onClick={() => onSpeak(ex.word)}
              className="text-xs px-2 py-1 rounded bg-dark-800 text-gray-300 hover:text-white hover:bg-dark-600 transition-colors text-left"
            >
              <span className="text-white">{ex.word}</span>
              {approx && <span className="text-emerald-300/90 ml-1">≈{approx}</span>}
              <span className="text-gray-500 ml-1">{ex.ipa}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WordStressCard({
  rule,
  onSpeak,
}: {
  rule: WordStressRule;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="bg-dark-700 rounded-lg p-4 border border-dark-600">
      <h4 className="text-sm font-medium text-accent-primary">{rule.rule}</h4>
      <p className="text-xs text-gray-500 mt-0.5">{rule.ruleEs}</p>
      <p className="text-sm text-gray-300 mt-2">{rule.explanation}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {rule.examples.map((ex) => (
          <button
            key={ex.word}
            onClick={() => onSpeak(ex.word)}
            className="text-sm px-3 py-1.5 rounded bg-dark-800 text-gray-200 hover:text-white hover:bg-dark-600 transition-colors"
          >
            <span className="text-amber-400">{ex.stress}</span>
            <span className="text-gray-500 ml-1">{ex.ipa}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SentenceStressCard({
  pattern,
  onSpeak,
}: {
  pattern: SentenceStressPattern;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="bg-dark-700 rounded-lg p-4 border border-dark-600">
      <h4 className="text-sm font-medium text-accent-primary">{pattern.concept}</h4>
      <p className="text-xs text-gray-500 mt-0.5">{pattern.conceptEs}</p>
      <p className="text-sm text-gray-300 mt-2">{pattern.explanation}</p>
      <div className="mt-3 space-y-2">
        {pattern.examples.map((ex, i) => (
          <div key={i} className="bg-dark-800 rounded p-3">
            <p className="text-gray-200">{ex.stressed}</p>
            {ex.meaning && <p className="text-xs text-gray-500 mt-1">{ex.meaning}</p>}
            <button
              onClick={() => onSpeak(ex.sentence)}
              className="mt-2 text-xs text-accent-primary hover:text-accent-primary/80 flex items-center gap-1"
            >
              <Volume2 className="w-3 h-3" /> Listen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntonationCard({
  pattern,
  onSpeak,
}: {
  pattern: IntonationPattern;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="bg-dark-700 rounded-lg p-4 border border-dark-600">
      <h4 className="text-sm font-medium text-accent-primary">{pattern.pattern}</h4>
      <p className="text-xs text-gray-500 mt-0.5">{pattern.patternEs}</p>
      <ul className="text-sm text-gray-300 mt-2 list-disc list-inside space-y-0.5">
        {pattern.usage.slice(0, 4).map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
      <div className="mt-3 space-y-2">
        {pattern.examples.slice(0, 2).map((ex, i) => (
          <div key={i} className="bg-dark-800 rounded p-3">
            <p className="text-gray-200">{ex.intonation}</p>
            <button
              onClick={() => onSpeak(ex.sentence)}
              className="mt-2 text-xs text-accent-primary hover:text-accent-primary/80 flex items-center gap-1"
            >
              <Volume2 className="w-3 h-3" /> Listen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectedSpeechCard({
  item,
  onSpeak,
}: {
  item: ConnectedSpeech;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="bg-dark-700 rounded-lg p-4 border border-dark-600">
      <h4 className="text-sm font-medium text-accent-primary">{item.phenomenon}</h4>
      <p className="text-xs text-gray-500 mt-0.5">{item.phenomenonEs}</p>
      <p className="text-sm text-gray-300 mt-2">{item.explanation}</p>
      <div className="mt-3 space-y-2">
        {item.examples.slice(0, 4).map((ex, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">{ex.written}</span>
            <span className="text-gray-500">→</span>
            <span className="text-accent-primary">{ex.spoken}</span>
            {ex.ipa && <span className="text-gray-500 text-xs">{ex.ipa}</span>}
            <button
              onClick={() => onSpeak(ex.written)}
              className="p-1 rounded hover:bg-dark-600 text-gray-400 hover:text-white"
              aria-label="Play"
            >
              <Volume2 className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SilentLetterCard({
  item,
  onSpeak,
}: {
  item: SilentLetter;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="bg-dark-700 rounded-lg p-4 border border-dark-600">
      <h4 className="text-sm font-medium text-accent-primary">
        Silent {item.letter}: {item.pattern}
      </h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.examples.map((ex) => (
          <button
            key={ex.word}
            onClick={() => onSpeak(ex.word)}
            className="text-sm px-3 py-1.5 rounded bg-dark-800 text-gray-200 hover:text-white hover:bg-dark-600 transition-colors"
          >
            <span className="text-gray-200">{ex.word}</span>
            <span className="text-gray-500 ml-1">({ex.pronunciation})</span>
            <span className="text-accent-primary/80 ml-1">{ex.ipa}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MiniQuiz({
  question,
  options,
  quizKey,
  quizAnswers,
  quizFeedback,
  onSelect,
}: {
  question: string;
  options: string[];
  correctIndex?: number;
  quizKey: string;
  quizAnswers: Record<string, number | null>;
  quizFeedback: Record<string, boolean | null>;
  onSelect: (idx: number) => void;
}) {
  const selected = quizAnswers[quizKey];
  const feedback = quizFeedback[quizKey];
  const answered = typeof selected === 'number';

  return (
    <div className="bg-dark-700 rounded-lg p-4 border border-dark-600">
      <p className="text-sm font-medium text-white mb-3">{question}</p>
      <div className="flex flex-col gap-2">
        {options.map((opt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              if (!answered) onSelect(idx);
            }}
            disabled={answered}
            className={`text-left px-4 py-2 rounded-lg border transition-colors cursor-pointer disabled:cursor-default ${
              selected === idx
                ? feedback
                  ? 'border-green-500 bg-green-500/20 text-green-400'
                  : 'border-red-500 bg-red-500/20 text-red-400'
                : 'border-dark-600 bg-dark-800 text-gray-300 hover:border-accent-primary'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
