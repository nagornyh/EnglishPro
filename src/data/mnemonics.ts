// Mnemonics and Visual Associations Data
// Memory aids to help remember difficult words

export interface Mnemonic {
  word: string;
  translation: string;
  mnemonic: string;
  visualImage?: string; // Emoji representation
  association: string;
  category: 'sound-alike' | 'visual' | 'story' | 'acronym' | 'rhyme';
}

export interface Etymology {
  word: string;
  origin: string;
  meaning: string;
  relatedWords: string[];
  funFact?: string;
}

export const MNEMONICS: Mnemonic[] = [
  // Sound-alike (Spanish sounds)
  {
    word: 'breakfast',
    translation: 'desayuno',
    mnemonic: '"Break" (romper) + "fast" (ayuno): romper el ayuno de la noche',
    visualImage: '🍳',
    association: 'Rompes el ayuno con el desayuno',
    category: 'story',
  },
  {
    word: 'newspaper',
    translation: 'periódico',
    mnemonic: '"News" (noticias) + "paper" (papel): papel de noticias',
    visualImage: '📰',
    association: 'Un papel lleno de noticias',
    category: 'visual',
  },
  {
    word: 'butterfly',
    translation: 'mariposa',
    mnemonic: 'Imagina una mariposa hecha de MANTEQUILLA (butter) que VUELA (fly)',
    visualImage: '🦋',
    association: 'Una mariposa amarilla como la mantequilla',
    category: 'visual',
  },
  {
    word: 'schedule',
    translation: 'horario',
    mnemonic: 'Suena como "eschedulo" - tu horario que EDULAS (organizas)',
    visualImage: '📅',
    association: 'Organizar tu horario',
    category: 'sound-alike',
  },
  {
    word: 'through',
    translation: 'a través de',
    mnemonic: '"TH-rough" - imagina atravesando algo RUGOSO',
    visualImage: '🚪',
    association: 'Pasar a través de una puerta',
    category: 'sound-alike',
  },
  {
    word: 'thought',
    translation: 'pensamiento',
    mnemonic: '"Thought" suena como un suspiro pensativo... "thooo"',
    visualImage: '💭',
    association: 'El sonido de alguien pensando profundamente',
    category: 'sound-alike',
  },
  {
    word: 'although',
    translation: 'aunque',
    mnemonic: '"All-though" - AUNQUE todos pensaran diferente',
    visualImage: '🤔',
    association: 'Aunque todos piensen igual, tú piensas diferente',
    category: 'story',
  },
  {
    word: 'knowledge',
    translation: 'conocimiento',
    mnemonic: '"Know" (saber) + "ledge" (repisa): el saber en una repisa de tu mente',
    visualImage: '📚',
    association: 'Una repisa llena de libros de conocimiento',
    category: 'visual',
  },
  {
    word: 'Wednesday',
    translation: 'miércoles',
    mnemonic: 'WED-NES-DAY: el día que se casó (wed) Néstor',
    visualImage: '💒',
    association: 'La boda de Néstor fue un miércoles',
    category: 'story',
  },
  {
    word: 'February',
    translation: 'febrero',
    mnemonic: 'FEB-RU-ARY: "Febrero es FRío y BReve"',
    visualImage: '❄️',
    association: 'El mes frío y corto',
    category: 'rhyme',
  },
  {
    word: 'necessary',
    translation: 'necesario',
    mnemonic: 'Una Camisa (C) tiene un Cuello (1C) y dos Mangas (2S): neCeSSary',
    visualImage: '👔',
    association: 'Una camisa necesita un cuello y dos mangas',
    category: 'visual',
  },
  {
    word: 'separate',
    translation: 'separar',
    mnemonic: 'Hay una RATA (A-RAT) en sepARATE',
    visualImage: '🐀',
    association: 'Una rata separa las palabras',
    category: 'visual',
  },
  {
    word: 'receive',
    translation: 'recibir',
    mnemonic: '"I before E, except after C" - recEIve tiene C antes',
    visualImage: '📬',
    association: 'Recibes cartas después de la C',
    category: 'rhyme',
  },
  {
    word: 'believe',
    translation: 'creer',
    mnemonic: 'Hay una LIE (mentira) en beLIEve - no creas en mentiras',
    visualImage: '🤥',
    association: 'No creas en las mentiras',
    category: 'visual',
  },
  {
    word: 'friend',
    translation: 'amigo',
    mnemonic: 'Un FRIEND es FIEL hasta el END (fin)',
    visualImage: '🤝',
    association: 'Un amigo fiel hasta el final',
    category: 'rhyme',
  },
  {
    word: 'island',
    translation: 'isla',
    mnemonic: 'Una ISLAND es tierra (LAND) - la S es silenciosa como el mar tranquilo',
    visualImage: '🏝️',
    association: 'Una isla silenciosa en el mar',
    category: 'visual',
  },
  {
    word: 'queue',
    translation: 'cola/fila',
    mnemonic: 'Solo la Q trabaja, las demás letras hacen COLA esperando',
    visualImage: '🧑‍🤝‍🧑',
    association: 'Las letras haciendo fila',
    category: 'visual',
  },
  {
    word: 'dessert',
    translation: 'postre',
    mnemonic: 'Postre tiene doble S porque SIEMPRE quieres más (SS = Super Sweet)',
    visualImage: '🍰',
    association: 'Dos porciones de postre',
    category: 'visual',
  },
  {
    word: 'desert',
    translation: 'desierto',
    mnemonic: 'El desierto tiene una S porque hay poca agua (menos letras)',
    visualImage: '🏜️',
    association: 'Menos agua, menos letras',
    category: 'visual',
  },
  {
    word: 'rhythm',
    translation: 'ritmo',
    mnemonic: 'R-H-Y-T-H-M: Rhythm Helps Your Two Hips Move',
    visualImage: '💃',
    association: 'El ritmo mueve tus caderas',
    category: 'acronym',
  },
];

export const ETYMOLOGIES: Etymology[] = [
  {
    word: 'salary',
    origin: 'Latín: salarium',
    meaning: 'Pago en sal que recibían los soldados romanos',
    relatedWords: ['salt', 'saline'],
    funFact: 'De aquí viene la expresión "worth his salt" (vale su sal)',
  },
  {
    word: 'companion',
    origin: 'Latín: com (con) + panis (pan)',
    meaning: 'Alguien con quien compartes el pan',
    relatedWords: ['company', 'accompany', 'pantry'],
    funFact: 'Una compañía es literalmente gente que come junta',
  },
  {
    word: 'disaster',
    origin: 'Griego: dis (malo) + astron (estrella)',
    meaning: 'Mala estrella, mal augurio',
    relatedWords: ['astronomy', 'asteroid', 'astronaut'],
    funFact: 'Los antiguos creían que los desastres eran causados por las estrellas',
  },
  {
    word: 'muscle',
    origin: 'Latín: musculus (ratoncito)',
    meaning: 'Los romanos pensaban que los músculos parecían ratones',
    relatedWords: ['mussel'],
    funFact: 'El mejillón (mussel) tiene el mismo origen porque su forma es similar',
  },
  {
    word: 'trivial',
    origin: 'Latín: trivium (cruce de tres caminos)',
    meaning: 'Información común que se comentaba en los cruces',
    relatedWords: ['trivia'],
    funFact: 'Lo trivial era lo que todos sabían en los cruces de caminos',
  },
  {
    word: 'sincere',
    origin: 'Latín: sine (sin) + cera (cera)',
    meaning: 'Sin cera - esculturas auténticas sin relleno de cera',
    relatedWords: ['sincerity', 'ceramic'],
    funFact: 'Los escultores usaban cera para ocultar defectos en mármol barato',
  },
  {
    word: 'candidate',
    origin: 'Latín: candidatus (vestido de blanco)',
    meaning: 'Los candidatos romanos vestían togas blancas',
    relatedWords: ['candid', 'candle'],
    funFact: 'El blanco representaba pureza e intenciones honestas',
  },
  {
    word: 'mortgage',
    origin: 'Francés: mort (muerte) + gage (promesa)',
    meaning: 'Promesa que muere cuando pagas la deuda',
    relatedWords: ['mortal', 'engage'],
    funFact: 'La hipoteca literalmente significa "promesa de muerte"',
  },
  {
    word: 'window',
    origin: 'Nórdico: vindauga (ojo del viento)',
    meaning: 'Abertura por donde entra el viento',
    relatedWords: ['wind', 'eye'],
    funFact: 'Las primeras ventanas no tenían vidrio, solo dejaban pasar el viento',
  },
  {
    word: 'gossip',
    origin: 'Inglés antiguo: godsibb (padrino/madrina)',
    meaning: 'Los padrinos hablaban de todo en los bautizos',
    relatedWords: ['god', 'sibling'],
    funFact: 'El chisme nació de las conversaciones en bautizos',
  },
];

// Get mnemonic for a word
export function getMnemonic(word: string): Mnemonic | undefined {
  return MNEMONICS.find(m => m.word.toLowerCase() === word.toLowerCase());
}

// Get etymology for a word
export function getEtymology(word: string): Etymology | undefined {
  return ETYMOLOGIES.find(e => e.word.toLowerCase() === word.toLowerCase());
}

// Get random mnemonic
export function getRandomMnemonic(): Mnemonic {
  return MNEMONICS[Math.floor(Math.random() * MNEMONICS.length)];
}

// Get mnemonics by category
export function getMnemonicsByCategory(category: Mnemonic['category']): Mnemonic[] {
  return MNEMONICS.filter(m => m.category === category);
}

// Search related words by etymology
export function findRelatedByEtymology(word: string): string[] {
  const etymology = ETYMOLOGIES.find(e => 
    e.word.toLowerCase() === word.toLowerCase() ||
    e.relatedWords.some(r => r.toLowerCase() === word.toLowerCase())
  );
  return etymology ? [etymology.word, ...etymology.relatedWords] : [];
}
