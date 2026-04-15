import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GitBranch,
  Search,
  Volume2,
  BookOpen,
  ChevronRight,
  ChevronDown,
  Lightbulb,
  ArrowRight,
  Star,
  Hash,
} from 'lucide-react';
import {
  wordFamilies,
  prefixes,
  suffixes,
  findWordInFamilies,
} from '../data/word-families';
import type { WordFamily, WordMember, Prefix, Suffix } from '../data/word-families';

type TabType = 'families' | 'prefixes' | 'suffixes' | 'search';

export default function WordExplorer() {
  const [activeTab, setActiveTab] = useState<TabType>('families');
  const [expandedFamilies, setExpandedFamilies] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{
    family: WordFamily;
    member: WordMember;
  } | null>(null);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  const toggleFamily = (familyId: string) => {
    const newExpanded = new Set(expandedFamilies);
    if (newExpanded.has(familyId)) {
      newExpanded.delete(familyId);
    } else {
      newExpanded.add(familyId);
    }
    setExpandedFamilies(newExpanded);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }
    const result = findWordInFamilies(searchQuery.trim());
    setSearchResult(result || null);
  };

  useEffect(() => {
    if (searchQuery) {
      const timer = setTimeout(handleSearch, 300);
      return () => clearTimeout(timer);
    } else {
      setSearchResult(null);
    }
  }, [searchQuery]);

  const renderWordMember = (word: WordMember, showDetails = false) => (
    <div className="p-3 bg-dark-700 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">{word.word}</span>
          <span className={`text-xs px-2 py-0.5 rounded ${
            word.type === 'noun' ? 'bg-blue-500/20 text-blue-400' :
            word.type === 'verb' ? 'bg-green-500/20 text-green-400' :
            word.type === 'adjective' ? 'bg-purple-500/20 text-purple-400' :
            word.type === 'adverb' ? 'bg-orange-500/20 text-orange-400' :
            'bg-gray-500/20 text-gray-400'
          }`}>
            {word.type}
          </span>
          <button
            onClick={() => speak(word.word)}
            className="p-1 hover:bg-dark-600 rounded-full"
          >
            <Volume2 className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div className="flex gap-1">
          {word.prefix && (
            <span className="text-xs px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded">
              {word.prefix}-
            </span>
          )}
          {word.suffix && (
            <span className="text-xs px-1.5 py-0.5 bg-teal-500/20 text-teal-400 rounded">
              -{word.suffix}
            </span>
          )}
        </div>
      </div>
      {showDetails && (
        <>
          <p className="text-sm text-gray-300 mb-1">{word.definition}</p>
          <p className="text-xs text-gray-500 mb-2">{word.definitionEs}</p>
          <div className="p-2 bg-dark-600 rounded text-sm">
            <p className="text-gray-300 italic">"{word.example}"</p>
            <p className="text-xs text-gray-500 mt-1">{word.exampleEs}</p>
          </div>
        </>
      )}
    </div>
  );

  const renderFamilyTree = (family: WordFamily) => {
    const isExpanded = expandedFamilies.has(family.id);
    
    // Group words by type
    const nouns = family.words.filter(w => w.type === 'noun');
    const verbs = family.words.filter(w => w.type === 'verb');
    const adjectives = family.words.filter(w => w.type === 'adjective');
    const adverbs = family.words.filter(w => w.type === 'adverb');

    return (
      <div key={family.id} className="card">
        <button
          onClick={() => toggleFamily(family.id)}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-accent-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-white">{family.root}</h3>
              <p className="text-xs text-gray-400">{family.rootMeaning}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{family.words.length} palabras</span>
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-dark-600">
                {/* Root info */}
                <div className="mb-4 p-3 bg-dark-700 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                    <Hash className="w-4 h-4" />
                    Raíz: <span className="text-accent-primary font-medium">{family.root}</span>
                    <span className="text-xs bg-dark-600 px-2 py-0.5 rounded">{family.origin}</span>
                  </div>
                  <p className="text-sm text-gray-300">{family.rootMeaning}</p>
                  <p className="text-xs text-gray-500">{family.rootMeaningEs}</p>
                </div>

                {/* Words by type */}
                {verbs.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs text-green-400 font-medium mb-2 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      Verbos
                    </h4>
                    <div className="grid gap-2">
                      {verbs.map((word) => (
                        <div key={word.word}>{renderWordMember(word, true)}</div>
                      ))}
                    </div>
                  </div>
                )}

                {nouns.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs text-blue-400 font-medium mb-2 flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full" />
                      Sustantivos
                    </h4>
                    <div className="grid gap-2">
                      {nouns.map((word) => (
                        <div key={word.word}>{renderWordMember(word, true)}</div>
                      ))}
                    </div>
                  </div>
                )}

                {adjectives.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs text-purple-400 font-medium mb-2 flex items-center gap-1">
                      <span className="w-2 h-2 bg-purple-400 rounded-full" />
                      Adjetivos
                    </h4>
                    <div className="grid gap-2">
                      {adjectives.map((word) => (
                        <div key={word.word}>{renderWordMember(word, true)}</div>
                      ))}
                    </div>
                  </div>
                )}

                {adverbs.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs text-orange-400 font-medium mb-2 flex items-center gap-1">
                      <span className="w-2 h-2 bg-orange-400 rounded-full" />
                      Adverbios
                    </h4>
                    <div className="grid gap-2">
                      {adverbs.map((word) => (
                        <div key={word.word}>{renderWordMember(word, true)}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const renderPrefixCard = (prefix: Prefix) => (
    <div key={prefix.prefix} className="card">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
          <span className="text-amber-400 font-bold text-lg">{prefix.prefix}</span>
        </div>
        <div>
          <p className="text-white font-medium">{prefix.meaning}</p>
          <p className="text-xs text-gray-400">{prefix.meaningEs}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {prefix.examples.map((ex) => (
          <span
            key={ex}
            className="px-2 py-1 bg-dark-600 rounded text-sm text-gray-300 cursor-pointer hover:bg-dark-500"
            onClick={() => {
              setSearchQuery(ex);
              setActiveTab('search');
            }}
          >
            {ex}
          </span>
        ))}
      </div>
    </div>
  );

  const renderSuffixCard = (suffix: Suffix) => (
    <div key={suffix.suffix} className="card">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center">
          <span className="text-teal-400 font-bold text-lg">{suffix.suffix}</span>
        </div>
        <div className="flex-1">
          <p className="text-white font-medium">{suffix.meaning}</p>
          <p className="text-xs text-gray-400">{suffix.meaningEs}</p>
        </div>
        <span className="text-xs px-2 py-1 bg-dark-600 rounded text-gray-400">
          → {suffix.changesTo}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {suffix.examples.map((ex) => (
          <span
            key={ex}
            className="px-2 py-1 bg-dark-600 rounded text-sm text-gray-300 cursor-pointer hover:bg-dark-500"
            onClick={() => {
              setSearchQuery(ex);
              setActiveTab('search');
            }}
          >
            {ex}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <GitBranch className="w-7 h-7 text-accent-primary" />
          Explorador de Palabras
        </h1>
        <p className="text-gray-400 mt-1">
          Descubre cómo las palabras se conectan a través de raíces, prefijos y sufijos
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {[
          { id: 'families', label: 'Familias', icon: GitBranch },
          { id: 'prefixes', label: 'Prefijos', icon: ArrowRight },
          { id: 'suffixes', label: 'Sufijos', icon: Star },
          { id: 'search', label: 'Buscar', icon: Search },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as TabType)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
              activeTab === id
                ? 'bg-accent-primary text-white'
                : 'bg-dark-600 text-gray-400 hover:bg-dark-500'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'families' && (
          <motion.div
            key="families"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="card bg-accent-primary/10 border-accent-primary/30">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">
                    Las familias de palabras comparten una raíz común. Aprender una raíz te ayuda
                    a entender muchas palabras relacionadas.
                  </p>
                </div>
              </div>
            </div>

            {wordFamilies.map(renderFamilyTree)}
          </motion.div>
        )}

        {activeTab === 'prefixes' && (
          <motion.div
            key="prefixes"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="card bg-amber-500/10 border-amber-500/30">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">
                    Los prefijos se añaden al inicio de una palabra y cambian su significado.
                    Por ejemplo, "un-" significa "no" (happy → unhappy).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {prefixes.map(renderPrefixCard)}
            </div>
          </motion.div>
        )}

        {activeTab === 'suffixes' && (
          <motion.div
            key="suffixes"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="card bg-teal-500/10 border-teal-500/30">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">
                    Los sufijos se añaden al final de una palabra y a menudo cambian su tipo
                    gramatical. Por ejemplo, "-ness" convierte adjetivos en sustantivos
                    (happy → happiness).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {suffixes.map(renderSuffixCard)}
            </div>
          </motion.div>
        )}

        {activeTab === 'search' && (
          <motion.div
            key="search"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            {/* Search input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar una palabra (ej: creative, transportation)..."
                className="w-full pl-12 pr-4 py-3 bg-dark-700 rounded-xl text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-accent-primary"
              />
            </div>

            {/* Search results */}
            {searchResult ? (
              <div className="space-y-4">
                <div className="card bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-accent-primary/30">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-accent-primary" />
                    {searchResult.member.word}
                  </h3>
                  {renderWordMember(searchResult.member, true)}
                </div>

                <div className="card">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">
                    Pertenece a la familia:
                  </h4>
                  {renderFamilyTree(searchResult.family)}
                </div>
              </div>
            ) : searchQuery ? (
              <div className="text-center py-12">
                <Search className="w-12 h-12 mx-auto text-gray-600 mb-3" />
                <p className="text-gray-400">
                  No se encontró "{searchQuery}" en las familias de palabras
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Prueba con palabras como: create, act, form, port, spect
                </p>
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-12 h-12 mx-auto text-gray-600 mb-3" />
                <p className="text-gray-400">Escribe una palabra para buscar</p>
                <p className="text-sm text-gray-500 mt-1">
                  Descubre su familia, raíz, prefijos y sufijos
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
