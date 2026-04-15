import { useState } from 'react';
import { getMnemonic, getEtymology, getRandomMnemonic, MNEMONICS, ETYMOLOGIES } from '../data/mnemonics';
import { getRandomFunFact, getFactsByCategory } from '../data/fun-facts';
import type { FunFact } from '../data/fun-facts';

interface MnemonicCardProps {
  word?: string;
  showRandom?: boolean;
}

export function MnemonicCard({ word, showRandom = false }: MnemonicCardProps) {
  const [currentMnemonic, setCurrentMnemonic] = useState(() => 
    word ? getMnemonic(word) : showRandom ? getRandomMnemonic() : null
  );

  const getNewRandom = () => {
    setCurrentMnemonic(getRandomMnemonic());
  };

  if (!currentMnemonic) return null;

  return (
    <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{currentMnemonic.visualImage || '🧠'}</div>
        {showRandom && (
          <button
            onClick={getNewRandom}
            className="text-gray-400 hover:text-white text-sm"
          >
            🔄 Otro
          </button>
        )}
      </div>

      <div className="text-2xl font-bold mb-1">{currentMnemonic.word}</div>
      <div className="text-blue-400 mb-4">{currentMnemonic.translation}</div>

      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="text-sm text-gray-400 mb-1">Mnemotécnica:</div>
        <div className="text-white">{currentMnemonic.mnemonic}</div>
      </div>

      <div className="mt-3 text-sm">
        <span className="text-purple-400">💡 Asociación: </span>
        <span className="text-gray-300">{currentMnemonic.association}</span>
      </div>

      <div className="mt-2">
        <span className={`text-xs px-2 py-1 rounded-full ${
          currentMnemonic.category === 'visual' ? 'bg-green-500/20 text-green-400' :
          currentMnemonic.category === 'sound-alike' ? 'bg-blue-500/20 text-blue-400' :
          currentMnemonic.category === 'story' ? 'bg-purple-500/20 text-purple-400' :
          currentMnemonic.category === 'rhyme' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-gray-500/20 text-gray-400'
        }`}>
          {currentMnemonic.category === 'visual' ? '👁️ Visual' :
           currentMnemonic.category === 'sound-alike' ? '🔊 Sonido' :
           currentMnemonic.category === 'story' ? '📖 Historia' :
           currentMnemonic.category === 'rhyme' ? '🎵 Rima' :
           '🔤 Acrónimo'}
        </span>
      </div>
    </div>
  );
}

interface EtymologyCardProps {
  word?: string;
}

export function EtymologyCard({ word }: EtymologyCardProps) {
  const etymology = word ? getEtymology(word) : null;

  if (!etymology) return null;

  return (
    <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl p-6">
      <div className="text-4xl mb-4">📜</div>

      <div className="text-2xl font-bold mb-4">{etymology.word}</div>

      <div className="space-y-3">
        <div>
          <div className="text-sm text-gray-400">Origen:</div>
          <div className="text-amber-400">{etymology.origin}</div>
        </div>

        <div>
          <div className="text-sm text-gray-400">Significado original:</div>
          <div className="text-white">{etymology.meaning}</div>
        </div>

        {etymology.funFact && (
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-sm text-yellow-400">💡 {etymology.funFact}</div>
          </div>
        )}

        <div>
          <div className="text-sm text-gray-400 mb-2">Palabras relacionadas:</div>
          <div className="flex flex-wrap gap-2">
            {etymology.relatedWords.map((w, i) => (
              <span 
                key={i}
                className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded text-sm"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface FunFactCardProps {
  category?: FunFact['category'];
}

export function FunFactCard({ category }: FunFactCardProps) {
  const [fact, setFact] = useState<FunFact>(() => getRandomFunFact(category));

  const getNewFact = () => {
    setFact(getRandomFunFact(category));
  };

  const categoryColors: Record<string, string> = {
    etymology: 'from-amber-500/20 to-orange-500/20',
    trivia: 'from-blue-500/20 to-cyan-500/20',
    history: 'from-purple-500/20 to-pink-500/20',
    comparison: 'from-green-500/20 to-emerald-500/20',
    tip: 'from-yellow-500/20 to-lime-500/20',
  };

  const categoryIcons: Record<string, string> = {
    etymology: '📜',
    trivia: '🎲',
    history: '🏛️',
    comparison: '🔄',
    tip: '💡',
  };

  return (
    <div className={`bg-gradient-to-br ${categoryColors[fact.category]} rounded-xl p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{categoryIcons[fact.category]}</div>
        <button
          onClick={getNewFact}
          className="text-gray-400 hover:text-white text-sm"
        >
          🔄 Otro dato
        </button>
      </div>

      <div className="text-white leading-relaxed">{fact.fact}</div>

      {fact.relatedWord && (
        <div className="mt-4 text-sm text-gray-400">
          Palabra relacionada: <span className="text-white">{fact.relatedWord}</span>
        </div>
      )}
    </div>
  );
}

// Full page component for exploring mnemonics and fun facts
export default function MnemonicExplorer() {
  const [tab, setTab] = useState<'mnemonics' | 'etymology' | 'facts'>('mnemonics');
  const [search, setSearch] = useState('');

  const filteredMnemonics = search 
    ? MNEMONICS.filter(m => 
        m.word.toLowerCase().includes(search.toLowerCase()) ||
        m.translation.toLowerCase().includes(search.toLowerCase())
      )
    : MNEMONICS;

  const filteredEtymologies = search
    ? ETYMOLOGIES.filter(e =>
        e.word.toLowerCase().includes(search.toLowerCase())
      )
    : ETYMOLOGIES;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">🧠 Ayudas de Memoria</h2>
      <p className="text-gray-400">
        Técnicas mnemotécnicas, etimologías y datos curiosos para recordar mejor
      </p>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setTab('mnemonics')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            tab === 'mnemonics' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🔗 Mnemotécnicas
        </button>
        <button
          onClick={() => setTab('etymology')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            tab === 'etymology' 
              ? 'bg-amber-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          📜 Etimologías
        </button>
        <button
          onClick={() => setTab('facts')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            tab === 'facts' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🎲 Datos curiosos
        </button>
      </div>

      {/* Search */}
      {tab !== 'facts' && (
        <input
          type="text"
          placeholder={`Buscar ${tab === 'mnemonics' ? 'mnemotécnicas' : 'etimologías'}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      )}

      {/* Content */}
      {tab === 'mnemonics' && (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredMnemonics.map((m, i) => (
            <MnemonicCard key={i} word={m.word} />
          ))}
          {filteredMnemonics.length === 0 && (
            <div className="col-span-2 text-center text-gray-500 py-8">
              No se encontraron mnemotécnicas para "{search}"
            </div>
          )}
        </div>
      )}

      {tab === 'etymology' && (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredEtymologies.map((e, i) => (
            <EtymologyCard key={i} word={e.word} />
          ))}
          {filteredEtymologies.length === 0 && (
            <div className="col-span-2 text-center text-gray-500 py-8">
              No se encontraron etimologías para "{search}"
            </div>
          )}
        </div>
      )}

      {tab === 'facts' && (
        <div className="space-y-4">
          <FunFactCard />
          
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <div>
              <h3 className="text-lg font-bold mb-3">📜 Etimología</h3>
              <div className="space-y-2">
                {getFactsByCategory('etymology').slice(0, 3).map((f, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-3 text-sm">
                    {f.fact}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">💡 Consejos</h3>
              <div className="space-y-2">
                {getFactsByCategory('tip').slice(0, 3).map((f, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-3 text-sm">
                    {f.fact}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
