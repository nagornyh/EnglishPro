import { useState, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, Check, X, ArrowRight, RotateCcw, Trophy, Volume2, Play } from 'lucide-react';
import { PronunciationHint } from '../PronunciationHint';

interface ListenItem {
  text: string;
  textEs: string;
  options: string[];
  correct: number; // index into options
  audioRate?: number; // speech rate, lower = slower
  category: 'word' | 'sentence' | 'minimal-pair';
}

interface ListenAndSelectProps {
  level?: 'A1' | 'A2' | 'B1' | 'B2';
  onComplete?: (score: number, total: number) => void;
  onXPGain?: (xp: number) => void;
  onBack?: () => void;
}

// A1 items — simple words and very short sentences
const a1Items: ListenItem[] = [
  // Minimal pairs — common pronunciation traps for Spanish speakers
  { text: 'ship', textEs: 'barco', options: ['ship', 'sheep', 'chip', 'cheap'], correct: 0, category: 'minimal-pair' },
  { text: 'bed', textEs: 'cama', options: ['bed', 'bad', 'bat', 'bet'], correct: 0, category: 'minimal-pair' },
  { text: 'cat', textEs: 'gato', options: ['cat', 'cut', 'cot', 'kit'], correct: 0, category: 'minimal-pair' },
  { text: 'live', textEs: 'vivir', options: ['live', 'leave', 'love', 'life'], correct: 0, category: 'minimal-pair' },
  { text: 'full', textEs: 'lleno', options: ['full', 'fool', 'fall', 'few'], correct: 0, category: 'minimal-pair' },
  { text: 'hat', textEs: 'sombrero', options: ['hat', 'hot', 'hit', 'hut'], correct: 0, category: 'minimal-pair' },
  { text: 'sheep', textEs: 'oveja', options: ['ship', 'sheep', 'shape', 'shop'], correct: 1, category: 'minimal-pair' },
  { text: 'think', textEs: 'pensar', options: ['think', 'sink', 'thing', 'thin'], correct: 0, category: 'minimal-pair' },
  // Short sentences
  { text: 'She is a teacher.', textEs: 'Ella es profesora.', options: ['She is a teacher.', 'She is a teenager.', 'She is a preacher.', 'She has a teacher.'], correct: 0, category: 'sentence', audioRate: 0.85 },
  { text: 'I like coffee.', textEs: 'Me gusta el café.', options: ['I like coffee.', 'I like toffee.', "I'd like coffee.", 'I like copies.'], correct: 0, category: 'sentence', audioRate: 0.85 },
  { text: 'There are two cats.', textEs: 'Hay dos gatos.', options: ['There are two cats.', 'There are two cups.', 'There are two cars.', 'There is a cat.'], correct: 0, category: 'sentence', audioRate: 0.85 },
  { text: 'He has blue eyes.', textEs: 'Tiene ojos azules.', options: ['He has blue eyes.', 'He has new eyes.', 'He has blue ice.', 'He had blue eyes.'], correct: 0, category: 'sentence', audioRate: 0.85 },
  { text: "They don't play football.", textEs: 'No juegan fútbol.', options: ["They don't play football.", "They don't like football.", "They can't play football.", "We don't play football."], correct: 0, category: 'sentence', audioRate: 0.85 },
  // Single words — vocabulary
  { text: 'breakfast', textEs: 'desayuno', options: ['breakfast', 'briefcase', 'broadcast', 'buckfast'], correct: 0, category: 'word' },
  { text: 'comfortable', textEs: 'cómodo', options: ['comfortable', 'compatible', 'comparable', 'considerable'], correct: 0, category: 'word' },
  { text: 'Wednesday', textEs: 'miércoles', options: ['Wednesday', 'Winterday', 'Yesterday', 'Wonderday'], correct: 0, category: 'word' },
];

const a2Items: ListenItem[] = [
  { text: 'She was reading when the phone rang.', textEs: 'Estaba leyendo cuando sonó el teléfono.', options: ['She was reading when the phone rang.', 'She was leaving when the phone rang.', 'She was reading when the phone broke.', 'She has been reading when the phone rang.'], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: "I'm going to visit my grandmother.", textEs: 'Voy a visitar a mi abuela.', options: ["I'm going to visit my grandmother.", "I'm going to visit my grandfather.", "I went to visit my grandmother.", "I'm going to miss my grandmother."], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'This hotel is more expensive than that one.', textEs: 'Este hotel es más caro que aquel.', options: ['This hotel is more expensive than that one.', 'This hotel is more expansive than that one.', 'This hotel is less expensive than that one.', 'This hotel is as expensive as that one.'], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'bought', textEs: 'compré', options: ['bought', 'brought', 'boat', 'but'], correct: 0, category: 'minimal-pair' },
  { text: 'through', textEs: 'a través de', options: ['through', 'throw', 'though', 'three'], correct: 0, category: 'minimal-pair' },
  { text: "She couldn't find her keys.", textEs: 'No podía encontrar sus llaves.', options: ["She couldn't find her keys.", "She couldn't find her keys?", "She didn't find her keys.", "She won't find her keys."], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'recipe', textEs: 'receta', options: ['recipe', 'receipt', 'receive', 'recite'], correct: 0, category: 'word' },
  { text: 'vegetable', textEs: 'verdura', options: ['vegetable', 'vulnerable', 'variable', 'veritable'], correct: 0, category: 'word' },
];

// ACT-2 fix: B1 items
const b1Items: ListenItem[] = [
  { text: 'She has been working here since 2018.', textEs: 'Lleva trabajando aquí desde 2018.', options: ['She has been working here since 2018.', 'She had been working here since 2018.', 'She has worked here since 2018.', 'She has been working there since 2018.'], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: "If it rains, we'll stay inside.", textEs: 'Si llueve, nos quedaremos dentro.', options: ["If it rains, we'll stay inside.", "If it rained, we'd stay inside.", "If it rain, we'll stay inside.", "If it rains, we stayed inside."], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'The report has already been submitted.', textEs: 'El informe ya ha sido enviado.', options: ['The report has already been submitted.', 'The report had already been submitted.', 'The report has already been committed.', 'The report is already been submitted.'], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'I suggested that he should take a break.', textEs: 'Sugerí que descansara.', options: ['I suggested that he should take a break.', 'I suggested that he took a break.', 'I suggested him to take a break.', 'I suggested that he shall take a break.'], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'archaeology', textEs: 'arqueología', options: ['archaeology', 'archology', 'archeaology', 'orchaeology'], correct: 0, category: 'word' },
  { text: 'inevitably', textEs: 'inevitablemente', options: ['inevitably', 'inevidably', 'inivitably', 'inevitibly'], correct: 0, category: 'word' },
  { text: 'The man who called was very polite.', textEs: 'El hombre que llamó era muy educado.', options: ['The man who called was very polite.', 'The man who called is very polite.', 'The man that called was very police.', 'The woman who called was very polite.'], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'thorough', textEs: 'minucioso', options: ['thorough', 'through', 'though', 'thought'], correct: 0, category: 'minimal-pair' },
];

// ACT-2 fix: B2 items
const b2Items: ListenItem[] = [
  { text: 'Were I in your position, I would accept the offer.', textEs: 'Si estuviera en tu lugar, aceptaría la oferta.', options: ['Were I in your position, I would accept the offer.', 'Was I in your position, I would accept the offer.', 'Were I in your position, I would accepted the offer.', 'Were I in your position, I will accept the offer.'], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'She denied having taken the money.', textEs: 'Ella negó haber tomado el dinero.', options: ['She denied having taken the money.', 'She denied to take the money.', 'She denied that she takes the money.', 'She denied taking the money.'], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'The research has been widely acknowledged.', textEs: 'La investigación ha sido ampliamente reconocida.', options: ['The research has been widely acknowledged.', 'The research had been widely acknowledged.', 'The research has been widly acknowledged.', 'The research has been widely acknowledging.'], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'Not only did she win, she broke the record.', textEs: 'No solo ganó, sino que batió el récord.', options: ['Not only did she win, she broke the record.', 'Not only she won, she broke the record.', 'Not only had she won, she broke the record.', 'Not only did she win, she had broken the record.'], correct: 0, category: 'sentence', audioRate: 0.9 },
  { text: 'conscientious', textEs: 'concienzudo', options: ['conscientious', 'consciousness', 'conscientous', 'concientious'], correct: 0, category: 'word' },
  { text: 'entrepreneurial', textEs: 'emprendedor', options: ['entrepreneurial', 'entreprenurial', 'entreprenerial', 'entrepreneureal'], correct: 0, category: 'word' },
];

function speak(text: string, rate: number = 0.85): Promise<void> {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      resolve();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1;

    // Try to find an English voice
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en-') && v.localService);
    if (enVoice) utterance.voice = enVoice;

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

export default function ListenAndSelect({
  level = 'A1',
  onComplete,
  onXPGain,
  onBack,
}: ListenAndSelectProps) {
  const items = useMemo(() => {
    const pool = level === 'A1' ? a1Items
      : level === 'A2' ? [...a1Items, ...a2Items]
      : level === 'B1' ? [...a1Items, ...a2Items, ...b1Items]
      : [...a1Items, ...a2Items, ...b1Items, ...b2Items];
    return [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
  }, [level]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const hasAutoPlayed = useRef(false);

  const current = items[currentIndex];

  const handlePlay = useCallback(async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    await speak(current.text, current.audioRate ?? 0.85);
    setIsPlaying(false);
    setPlayCount(c => c + 1);
  }, [current, isPlaying]);

  // Auto-play on new question
  useMemo(() => {
    hasAutoPlayed.current = false;
  }, [currentIndex]);

  // We use a timeout so the component renders before speech starts
  useMemo(() => {
    if (!hasAutoPlayed.current) {
      hasAutoPlayed.current = true;
      setTimeout(() => {
        speak(items[currentIndex].text, items[currentIndex].audioRate ?? 0.85).then(() => {
          setPlayCount(1);
        });
      }, 400);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleSelect = (index: number) => {
    if (feedback) return;
    setSelectedOption(index);
    const isCorrect = index === current.correct;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
      setScore(s => s + 1);
      onXPGain?.(12);
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setSelectedOption(null);
    setPlayCount(0);
    if (currentIndex + 1 >= items.length) {
      setFinished(true);
      onComplete?.(score, items.length);
    } else {
      setCurrentIndex(i => i + 1);
    }
  };

  if (finished) {
    const pct = Math.round((score / items.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh] py-8"
      >
        <div className="text-center space-y-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-500/30 flex items-center justify-center mx-auto">
            <Trophy className="w-10 h-10 text-yellow-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">¡Escucha Completada!</h2>
          <p className="text-gray-400">{score}/{items.length} correctas ({pct}%)</p>
          <div className="w-48 mx-auto bg-dark-700 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all ${
                pct >= 70 ? 'bg-green-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
          {pct < 70 && (
            <p className="text-sm text-orange-400 font-medium text-center">
              Necesitas al menos 70% para continuar. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex gap-3 justify-center pt-2">
            {pct < 70 && (
              <button
                onClick={() => {
                  setCurrentIndex(0);
                  setScore(0);
                  setFinished(false);
                  setFeedback(null);
                  setSelectedOption(null);
                }}
                className="px-5 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Reintentar
              </button>
            )}
            {onBack && pct >= 70 && (
              <button onClick={onBack} className="btn-primary px-6 py-2 flex items-center gap-2">
                Continuar <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  const categoryLabel =
    current.category === 'minimal-pair'
      ? 'Par mínimo'
      : current.category === 'word'
      ? 'Palabra'
      : 'Frase';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-start min-h-[60vh] py-6"
    >
      <div className="w-full max-w-6xl space-y-5">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/20 text-accent-primary mb-3">
            <Headphones className="w-5 h-5" />
            <span className="text-sm font-medium">Escucha y Selecciona</span>
            <span className="text-xs bg-accent-primary/30 px-2 py-0.5 rounded-full">{level}</span>
          </div>
          <div className="text-gray-400 text-sm">{currentIndex + 1} / {items.length}</div>
          <div className="w-full bg-dark-700 rounded-full h-2 mt-2">
            <div
              className="h-2 rounded-full bg-accent-primary transition-all"
              style={{ width: `${(currentIndex / items.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Category badge */}
        <div className="text-center">
          <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">
            {categoryLabel}
          </span>
        </div>

        {/* Audio player */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl p-8 border border-white/10 flex flex-col items-center gap-4"
          >
            <p className="text-gray-400 text-sm">Escucha y elige lo que oyes:</p>
            <button
              onClick={handlePlay}
              disabled={isPlaying}
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                isPlaying
                  ? 'bg-accent-primary/40 animate-pulse'
                  : 'bg-accent-primary/20 hover:bg-accent-primary/30 hover:scale-105'
              }`}
            >
              {isPlaying ? (
                <Volume2 className="w-10 h-10 text-accent-primary animate-pulse" />
              ) : (
                <Play className="w-10 h-10 text-accent-primary ml-1" />
              )}
            </button>
            <p className="text-gray-500 text-xs">
              {playCount === 0
                ? 'Reproduciendo...'
                : `Escuchado ${playCount} ${playCount === 1 ? 'vez' : 'veces'} — pulsa para repetir`}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Options */}
        <div className="grid grid-cols-2 gap-3">
          {current.options.map((option, i) => {
            const showOptionHint =
              current.category !== 'sentence' && option.trim().length > 0 && !option.includes(' ');
            let borderClass = 'border-white/10 hover:border-accent-primary/50';
            let bgClass = 'bg-dark-700';
            if (feedback) {
              if (i === current.correct) {
                borderClass = 'border-green-500/50';
                bgClass = 'bg-green-500/10';
              } else if (i === selectedOption && feedback === 'incorrect') {
                borderClass = 'border-red-500/50';
                bgClass = 'bg-red-500/10';
              }
            } else if (i === selectedOption) {
              borderClass = 'border-accent-primary';
              bgClass = 'bg-accent-primary/10';
            }

            return (
              <motion.button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={!!feedback}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`p-4 rounded-xl border text-left transition-all ${borderClass} ${bgClass} disabled:cursor-default`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-dark-600 flex items-center justify-center text-sm text-gray-400 flex-shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-white text-sm flex flex-col gap-0.5 min-w-0">
                    <span>{option}</span>
                    {showOptionHint && <PronunciationHint word={option} forceShow className="text-xs opacity-90" />}
                  </span>
                  {feedback && i === current.correct && (
                    <Check className="w-5 h-5 text-green-400 ml-auto" />
                  )}
                  {feedback === 'incorrect' && i === selectedOption && (
                    <X className="w-5 h-5 text-red-400 ml-auto" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Feedback + Next */}
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div
              className={`p-3 rounded-lg border text-center ${
                feedback === 'correct'
                  ? 'bg-green-500/10 border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}
            >
              {feedback === 'correct' ? '¡Correcto!' : 'Incorrecto'}
              {feedback === 'incorrect' && (
                <p className="text-gray-400 text-xs mt-1">
                  La respuesta era: <strong className="text-green-300">{current.options[current.correct]}</strong>
                </p>
              )}
            </div>
            <button onClick={handleNext} className="btn-primary w-full py-3 flex items-center justify-center gap-2">
              {currentIndex + 1 < items.length ? 'Siguiente' : 'Ver Resultados'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
