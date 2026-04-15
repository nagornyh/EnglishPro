// Fun Facts about English language and motivational content

export interface FunFact {
  id: string;
  category: 'etymology' | 'trivia' | 'history' | 'comparison' | 'tip';
  fact: string;
  relatedWord?: string;
  source?: string;
}

export const FUN_FACTS: FunFact[] = [
  // Etymology
  {
    id: 'etym-1',
    category: 'etymology',
    fact: '"Salary" viene del latín "salarium", que era la porción de sal que recibían los soldados romanos como pago.',
    relatedWord: 'salary',
  },
  {
    id: 'etym-2',
    category: 'etymology',
    fact: '"Muscle" viene del latín "musculus" (ratoncito), porque los romanos pensaban que los músculos parecían ratones corriendo bajo la piel.',
    relatedWord: 'muscle',
  },
  {
    id: 'etym-3',
    category: 'etymology',
    fact: '"Butterfly" (mariposa) podría venir de la creencia medieval de que las brujas se transformaban en mariposas para robar mantequilla (butter).',
    relatedWord: 'butterfly',
  },
  {
    id: 'etym-4',
    category: 'etymology',
    fact: '"Nightmare" viene del inglés antiguo donde "mare" era un demonio que se sentaba en el pecho mientras dormías.',
    relatedWord: 'nightmare',
  },
  {
    id: 'etym-5',
    category: 'etymology',
    fact: '"Disaster" viene del griego "dis" (malo) + "astron" (estrella), significando "mala estrella" o mal augurio.',
    relatedWord: 'disaster',
  },
  {
    id: 'etym-6',
    category: 'etymology',
    fact: '"Goodbye" es una contracción de "God be with ye" (Dios esté contigo).',
    relatedWord: 'goodbye',
  },
  {
    id: 'etym-7',
    category: 'etymology',
    fact: '"Whiskey" viene del gaélico "uisce beatha" que significa "agua de vida".',
    relatedWord: 'whiskey',
  },
  {
    id: 'etym-8',
    category: 'etymology',
    fact: '"Companion" viene del latín "com" (con) + "panis" (pan): alguien con quien compartes el pan.',
    relatedWord: 'companion',
  },

  // Trivia
  {
    id: 'trivia-1',
    category: 'trivia',
    fact: '"Set" es la palabra con más definiciones en inglés: ¡más de 430 en el Oxford English Dictionary!',
  },
  {
    id: 'trivia-2',
    category: 'trivia',
    fact: 'La oración "The quick brown fox jumps over the lazy dog" usa todas las letras del alfabeto inglés.',
  },
  {
    id: 'trivia-3',
    category: 'trivia',
    fact: '"Rhythm" es la palabra más larga en inglés sin vocales (a, e, i, o, u).',
  },
  {
    id: 'trivia-4',
    category: 'trivia',
    fact: '"Bookkeeper" y "bookkeeping" son las únicas palabras con tres letras dobles consecutivas.',
  },
  {
    id: 'trivia-5',
    category: 'trivia',
    fact: 'El inglés agrega aproximadamente 1,000 palabras nuevas cada año.',
  },
  {
    id: 'trivia-6',
    category: 'trivia',
    fact: '"I" es la palabra más usada en inglés hablado, mientras que "the" es la más usada en texto escrito.',
  },
  {
    id: 'trivia-7',
    category: 'trivia',
    fact: 'El 11% de todo el inglés está formado por solo la letra "E".',
  },
  {
    id: 'trivia-8',
    category: 'trivia',
    fact: '"Queue" es la única palabra donde puedes quitar las últimas 4 letras y aún suena igual.',
  },
  {
    id: 'trivia-9',
    category: 'trivia',
    fact: '"Pronunciation" es una de las palabras más frecuentemente mal pronunciadas por hablantes nativos.',
  },
  {
    id: 'trivia-10',
    category: 'trivia',
    fact: 'Shakespeare inventó más de 1,700 palabras, incluyendo "lonely", "generous" y "bedroom".',
  },

  // History
  {
    id: 'history-1',
    category: 'history',
    fact: 'El inglés tiene influencias del latín, francés, alemán, nórdico antiguo y griego, lo que lo hace excepcionalmente rico en sinónimos.',
  },
  {
    id: 'history-2',
    category: 'history',
    fact: 'Después de la conquista normanda (1066), el inglés tomó palabras francesas para carne cocinada (beef, pork, mutton) mientras las palabras germánicas quedaron para los animales vivos (cow, pig, sheep).',
  },
  {
    id: 'history-3',
    category: 'history',
    fact: 'El inglés moderno comenzó alrededor de 1500 con el "Great Vowel Shift", un cambio masivo en la pronunciación de vocales.',
  },
  {
    id: 'history-4',
    category: 'history',
    fact: 'Antes de la imprenta, no había ortografía estándar. La misma persona podía escribir su nombre de diferentes maneras.',
  },

  // Comparison (English vs Spanish)
  {
    id: 'comp-1',
    category: 'comparison',
    fact: 'El inglés no tiene género gramatical para objetos, mientras que el español sí. ¡Una cosa menos de qué preocuparse!',
  },
  {
    id: 'comp-2',
    category: 'comparison',
    fact: 'El español tiene más tiempos verbales que el inglés. Los anglohablantes usan auxiliares y contexto donde el español usa conjugaciones.',
  },
  {
    id: 'comp-3',
    category: 'comparison',
    fact: 'Muchas palabras similares en inglés y español vienen del latín: "hospital", "animal", "color", "horrible".',
  },
  {
    id: 'comp-4',
    category: 'comparison',
    fact: 'El orden de adjetivos en inglés es estricto (opinión-tamaño-edad-forma-color-origen-material-propósito), pero nativo hablantes lo hacen intuitivamente.',
  },

  // Learning tips
  {
    id: 'tip-1',
    category: 'tip',
    fact: 'Estudiar 10 minutos al día es más efectivo que 1 hora a la semana. La consistencia vence a la intensidad.',
  },
  {
    id: 'tip-2',
    category: 'tip',
    fact: 'Cometer errores es esencial para aprender. Cada error crea una oportunidad de memoria más fuerte cuando se corrige.',
  },
  {
    id: 'tip-3',
    category: 'tip',
    fact: 'Hablar en voz alta, aunque sea a ti mismo, activa más áreas del cerebro que solo leer o escribir.',
  },
  {
    id: 'tip-4',
    category: 'tip',
    fact: 'Dormir después de estudiar mejora la retención. Tu cerebro consolida el aprendizaje mientras duermes.',
  },
  {
    id: 'tip-5',
    category: 'tip',
    fact: 'Ver series con subtítulos en inglés es más efectivo que con subtítulos en español para mejorar comprensión.',
  },
  {
    id: 'tip-6',
    category: 'tip',
    fact: 'Aprender palabras en contexto (frases) es 10 veces más efectivo que aprender palabras aisladas.',
  },
];

// Get a random fun fact
export function getRandomFunFact(category?: FunFact['category']): FunFact {
  const filtered = category 
    ? FUN_FACTS.filter(f => f.category === category)
    : FUN_FACTS;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

// Get fun fact related to a word
export function getRelatedFunFact(word: string): FunFact | null {
  const lowercaseWord = word.toLowerCase();
  return FUN_FACTS.find(f => 
    f.relatedWord?.toLowerCase() === lowercaseWord
  ) || null;
}

// Get facts by category
export function getFactsByCategory(category: FunFact['category']): FunFact[] {
  return FUN_FACTS.filter(f => f.category === category);
}
