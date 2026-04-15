// Graded Sentences - Input Comprensible
// Sentences organized by difficulty level for reading practice

export interface GradedSentence {
  id: string;
  text: string;
  translation: string;
  level: 1 | 2 | 3 | 4 | 5; // 1 = easiest, 5 = most complex
  grammarPoints: string[];
  vocabulary: { word: string; translation: string }[];
  audioSpeed?: 'slow' | 'normal' | 'fast';
}

export const GRADED_SENTENCES: GradedSentence[] = [
  // Level 1 - Simple present, basic vocabulary
  {
    id: 'gs-1-1',
    text: 'I like coffee.',
    translation: 'Me gusta el café.',
    level: 1,
    grammarPoints: ['simple present', 'subject pronoun'],
    vocabulary: [
      { word: 'like', translation: 'gustar' },
      { word: 'coffee', translation: 'café' },
    ],
  },
  {
    id: 'gs-1-2',
    text: 'She has a cat.',
    translation: 'Ella tiene un gato.',
    level: 1,
    grammarPoints: ['simple present', 'third person singular', 'indefinite article'],
    vocabulary: [
      { word: 'has', translation: 'tiene' },
      { word: 'cat', translation: 'gato' },
    ],
  },
  {
    id: 'gs-1-3',
    text: 'The book is red.',
    translation: 'El libro es rojo.',
    level: 1,
    grammarPoints: ['definite article', 'verb to be', 'adjective'],
    vocabulary: [
      { word: 'book', translation: 'libro' },
      { word: 'red', translation: 'rojo' },
    ],
  },
  {
    id: 'gs-1-4',
    text: 'They eat breakfast.',
    translation: 'Ellos desayunan.',
    level: 1,
    grammarPoints: ['simple present', 'plural subject'],
    vocabulary: [
      { word: 'eat', translation: 'comer' },
      { word: 'breakfast', translation: 'desayuno' },
    ],
  },
  {
    id: 'gs-1-5',
    text: 'My house is big.',
    translation: 'Mi casa es grande.',
    level: 1,
    grammarPoints: ['possessive adjective', 'verb to be', 'adjective'],
    vocabulary: [
      { word: 'house', translation: 'casa' },
      { word: 'big', translation: 'grande' },
    ],
  },

  // Level 2 - Present continuous, past simple
  {
    id: 'gs-2-1',
    text: 'She is reading a book right now.',
    translation: 'Ella está leyendo un libro ahora mismo.',
    level: 2,
    grammarPoints: ['present continuous', 'time expression'],
    vocabulary: [
      { word: 'reading', translation: 'leyendo' },
      { word: 'right now', translation: 'ahora mismo' },
    ],
  },
  {
    id: 'gs-2-2',
    text: 'I went to the store yesterday.',
    translation: 'Fui a la tienda ayer.',
    level: 2,
    grammarPoints: ['past simple', 'irregular verb', 'time expression'],
    vocabulary: [
      { word: 'went', translation: 'fui' },
      { word: 'store', translation: 'tienda' },
      { word: 'yesterday', translation: 'ayer' },
    ],
  },
  {
    id: 'gs-2-3',
    text: 'We are learning English together.',
    translation: 'Estamos aprendiendo inglés juntos.',
    level: 2,
    grammarPoints: ['present continuous', 'adverb'],
    vocabulary: [
      { word: 'learning', translation: 'aprendiendo' },
      { word: 'together', translation: 'juntos' },
    ],
  },
  {
    id: 'gs-2-4',
    text: 'He worked late last night.',
    translation: 'Él trabajó hasta tarde anoche.',
    level: 2,
    grammarPoints: ['past simple', 'adverb', 'time expression'],
    vocabulary: [
      { word: 'worked', translation: 'trabajó' },
      { word: 'late', translation: 'tarde' },
      { word: 'last night', translation: 'anoche' },
    ],
  },

  // Level 3 - Present perfect, comparatives, modals
  {
    id: 'gs-3-1',
    text: 'I have lived here for five years.',
    translation: 'He vivido aquí durante cinco años.',
    level: 3,
    grammarPoints: ['present perfect', 'for + duration'],
    vocabulary: [
      { word: 'have lived', translation: 'he vivido' },
      { word: 'for', translation: 'durante' },
    ],
  },
  {
    id: 'gs-3-2',
    text: 'This book is more interesting than that one.',
    translation: 'Este libro es más interesante que ese.',
    level: 3,
    grammarPoints: ['comparative', 'demonstrative pronouns'],
    vocabulary: [
      { word: 'more interesting', translation: 'más interesante' },
      { word: 'than', translation: 'que' },
    ],
  },
  {
    id: 'gs-3-3',
    text: 'You should see a doctor.',
    translation: 'Deberías ver a un médico.',
    level: 3,
    grammarPoints: ['modal verb', 'advice'],
    vocabulary: [
      { word: 'should', translation: 'deberías' },
      { word: 'doctor', translation: 'médico' },
    ],
  },
  {
    id: 'gs-3-4',
    text: 'She has already finished her homework.',
    translation: 'Ella ya ha terminado su tarea.',
    level: 3,
    grammarPoints: ['present perfect', 'adverb already'],
    vocabulary: [
      { word: 'already', translation: 'ya' },
      { word: 'finished', translation: 'terminado' },
      { word: 'homework', translation: 'tarea' },
    ],
  },
  {
    id: 'gs-3-5',
    text: 'If it rains, we will stay home.',
    translation: 'Si llueve, nos quedaremos en casa.',
    level: 3,
    grammarPoints: ['first conditional', 'future simple'],
    vocabulary: [
      { word: 'if', translation: 'si' },
      { word: 'rains', translation: 'llueve' },
      { word: 'will stay', translation: 'nos quedaremos' },
    ],
  },

  // Level 4 - Past perfect, passives, relative clauses
  {
    id: 'gs-4-1',
    text: 'By the time I arrived, she had already left.',
    translation: 'Para cuando llegué, ella ya se había ido.',
    level: 4,
    grammarPoints: ['past perfect', 'time clause', 'adverb already'],
    vocabulary: [
      { word: 'by the time', translation: 'para cuando' },
      { word: 'arrived', translation: 'llegué' },
      { word: 'had left', translation: 'se había ido' },
    ],
  },
  {
    id: 'gs-4-2',
    text: 'The book was written by a famous author.',
    translation: 'El libro fue escrito por un autor famoso.',
    level: 4,
    grammarPoints: ['passive voice', 'past simple passive'],
    vocabulary: [
      { word: 'was written', translation: 'fue escrito' },
      { word: 'author', translation: 'autor' },
    ],
  },
  {
    id: 'gs-4-3',
    text: 'The woman who lives next door is a teacher.',
    translation: 'La mujer que vive al lado es profesora.',
    level: 4,
    grammarPoints: ['relative clause', 'who for people'],
    vocabulary: [
      { word: 'who', translation: 'que/quien' },
      { word: 'next door', translation: 'al lado' },
    ],
  },
  {
    id: 'gs-4-4',
    text: 'If I had known, I would have helped you.',
    translation: 'Si lo hubiera sabido, te habría ayudado.',
    level: 4,
    grammarPoints: ['third conditional', 'past perfect', 'would have'],
    vocabulary: [
      { word: 'had known', translation: 'hubiera sabido' },
      { word: 'would have helped', translation: 'habría ayudado' },
    ],
  },

  // Level 5 - Complex structures, idiomatic expressions
  {
    id: 'gs-5-1',
    text: 'Not only did she finish the project, but she also exceeded expectations.',
    translation: 'No solo terminó el proyecto, sino que también superó las expectativas.',
    level: 5,
    grammarPoints: ['inversion', 'correlative conjunctions'],
    vocabulary: [
      { word: 'not only...but also', translation: 'no solo...sino también' },
      { word: 'exceeded', translation: 'superó' },
      { word: 'expectations', translation: 'expectativas' },
    ],
  },
  {
    id: 'gs-5-2',
    text: 'Had I realized the consequences, I never would have agreed.',
    translation: 'Si me hubiera dado cuenta de las consecuencias, nunca habría aceptado.',
    level: 5,
    grammarPoints: ['inverted conditional', 'formal register'],
    vocabulary: [
      { word: 'had I realized', translation: 'si me hubiera dado cuenta' },
      { word: 'consequences', translation: 'consecuencias' },
      { word: 'agreed', translation: 'aceptado' },
    ],
  },
  {
    id: 'gs-5-3',
    text: 'The more you practice, the better you become at speaking English.',
    translation: 'Cuanto más practicas, mejor te vuelves hablando inglés.',
    level: 5,
    grammarPoints: ['double comparative', 'gerund'],
    vocabulary: [
      { word: 'the more...the better', translation: 'cuanto más...mejor' },
      { word: 'become at', translation: 'volverse en' },
    ],
  },
  {
    id: 'gs-5-4',
    text: 'Despite having studied all night, she failed the exam.',
    translation: 'A pesar de haber estudiado toda la noche, reprobó el examen.',
    level: 5,
    grammarPoints: ['despite + gerund', 'perfect gerund'],
    vocabulary: [
      { word: 'despite', translation: 'a pesar de' },
      { word: 'having studied', translation: 'haber estudiado' },
      { word: 'failed', translation: 'reprobó' },
    ],
  },
  {
    id: 'gs-5-5',
    text: 'It is essential that everyone be present at the meeting.',
    translation: 'Es esencial que todos estén presentes en la reunión.',
    level: 5,
    grammarPoints: ['subjunctive mood', 'formal demand'],
    vocabulary: [
      { word: 'essential', translation: 'esencial' },
      { word: 'be present', translation: 'estar presente (subjuntivo)' },
    ],
  },
];

// Get sentences by level
export function getSentencesByLevel(level: 1 | 2 | 3 | 4 | 5): GradedSentence[] {
  return GRADED_SENTENCES.filter(s => s.level === level);
}

// Get sentences containing specific grammar point
export function getSentencesByGrammar(grammarPoint: string): GradedSentence[] {
  return GRADED_SENTENCES.filter(s => 
    s.grammarPoints.some(g => g.toLowerCase().includes(grammarPoint.toLowerCase()))
  );
}

// Get sentences containing specific vocabulary
export function getSentencesByVocabulary(word: string): GradedSentence[] {
  return GRADED_SENTENCES.filter(s =>
    s.vocabulary.some(v => 
      v.word.toLowerCase().includes(word.toLowerCase()) ||
      v.translation.toLowerCase().includes(word.toLowerCase())
    )
  );
}

// Get next appropriate sentence based on user level
export function getNextSentence(
  userLevel: 1 | 2 | 3 | 4 | 5,
  recentIds: string[]
): GradedSentence | null {
  // First try current level
  const currentLevelSentences = getSentencesByLevel(userLevel)
    .filter(s => !recentIds.includes(s.id));
  
  if (currentLevelSentences.length > 0) {
    return currentLevelSentences[Math.floor(Math.random() * currentLevelSentences.length)];
  }

  // Try one level below (review)
  if (userLevel > 1) {
    const lowerLevelSentences = getSentencesByLevel((userLevel - 1) as 1 | 2 | 3 | 4 | 5)
      .filter(s => !recentIds.includes(s.id));
    
    if (lowerLevelSentences.length > 0) {
      return lowerLevelSentences[Math.floor(Math.random() * lowerLevelSentences.length)];
    }
  }

  // Reset recent and try again
  return getSentencesByLevel(userLevel)[0] || null;
}

// Get random sentence for quick practice
export function getRandomSentence(maxLevel: 1 | 2 | 3 | 4 | 5 = 5): GradedSentence {
  const eligible = GRADED_SENTENCES.filter(s => s.level <= maxLevel);
  return eligible[Math.floor(Math.random() * eligible.length)];
}
