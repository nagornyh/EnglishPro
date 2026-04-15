// Gramática Esencial - Temas estructurales fundamentales
// Essential Grammar - Fundamental structural topics

export interface GrammarEssential {
  id: string;
  name: string;
  nameEs: string;
  level: number;
  category: 'articles' | 'nouns' | 'pronouns' | 'adjectives' | 'adverbs' | 'prepositions' | 'questions' | 'clauses' | 'verbs' | 'determiners' | 'conjunctions' | 'structure';
  priority: 'critical' | 'high' | 'medium' | 'low';
  explanation: string;
  explanationEs: string;
  rules: {
    rule: string;
    ruleEs: string;
    examples: { english: string; spanish: string }[];
  }[];
  commonMistakes: {
    wrong: string;
    correct: string;
    explanation: string;
  }[];
}

export const grammarEssentials: GrammarEssential[] = [
  // === ARTICLES ===
  {
    id: 'articles-a-an',
    name: 'Indefinite Articles (A / An)',
    nameEs: 'Artículos Indefinidos (A / An)',
    level: 1,
    category: 'articles',
    priority: 'critical',
    explanation: 'A and An are used before singular countable nouns when we mention something for the first time or when it\'s not specific.',
    explanationEs: 'A y An se usan antes de sustantivos contables singulares cuando mencionamos algo por primera vez o cuando no es específico.',
    rules: [
      {
        rule: 'Use "A" before consonant sounds',
        ruleEs: 'Usa "A" antes de sonidos consonantes',
        examples: [
          { english: 'a book, a car, a dog, a university (sounds like "yu")', spanish: 'un libro, un carro, un perro, una universidad' },
          { english: 'a European country', spanish: 'un país europeo' }
        ]
      },
      {
        rule: 'Use "An" before vowel sounds',
        ruleEs: 'Usa "An" antes de sonidos vocálicos',
        examples: [
          { english: 'an apple, an egg, an hour (silent h), an honest person', spanish: 'una manzana, un huevo, una hora, una persona honesta' },
          { english: 'an MBA, an FBI agent', spanish: 'un MBA, un agente del FBI' }
        ]
      },
      {
        rule: 'Use A/An for jobs and professions',
        ruleEs: 'Usa A/An para trabajos y profesiones',
        examples: [
          { english: 'She is a doctor. He is an engineer.', spanish: 'Ella es doctora. Él es ingeniero.' }
        ]
      },
      {
        rule: 'Use A/An for one of many (non-specific)',
        ruleEs: 'Usa A/An para uno de muchos (no específico)',
        examples: [
          { english: 'I need a pen. (any pen)', spanish: 'Necesito un bolígrafo. (cualquier bolígrafo)' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'She is doctor.', correct: 'She is a doctor.', explanation: 'Always use a/an before professions.' },
      { wrong: 'I have a umbrella.', correct: 'I have an umbrella.', explanation: 'Use "an" before vowel sounds.' },
      { wrong: 'He is an European.', correct: 'He is a European.', explanation: '"European" starts with a "yu" sound (consonant).' },
      { wrong: 'I waited a hour.', correct: 'I waited an hour.', explanation: '"Hour" has a silent H, so it sounds like a vowel.' }
    ]
  },
  {
    id: 'articles-the',
    name: 'Definite Article (The)',
    nameEs: 'Artículo Definido (The)',
    level: 2,
    category: 'articles',
    priority: 'critical',
    explanation: 'THE is used when both speaker and listener know which specific thing is being referred to.',
    explanationEs: 'THE se usa cuando tanto el hablante como el oyente saben a qué cosa específica se refiere.',
    rules: [
      {
        rule: 'Use THE for something already mentioned',
        ruleEs: 'Usa THE para algo ya mencionado',
        examples: [
          { english: 'I saw a dog. The dog was big.', spanish: 'Vi un perro. El perro era grande.' }
        ]
      },
      {
        rule: 'Use THE when there\'s only one',
        ruleEs: 'Usa THE cuando solo hay uno',
        examples: [
          { english: 'the sun, the moon, the internet, the president', spanish: 'el sol, la luna, el internet, el presidente' }
        ]
      },
      {
        rule: 'Use THE with superlatives and ordinals',
        ruleEs: 'Usa THE con superlativos y ordinales',
        examples: [
          { english: 'the best, the first, the tallest building', spanish: 'el mejor, el primero, el edificio más alto' }
        ]
      },
      {
        rule: 'Use THE with specific locations',
        ruleEs: 'Usa THE con ubicaciones específicas',
        examples: [
          { english: 'the bank on Main Street, the kitchen', spanish: 'el banco en la calle Main, la cocina' }
        ]
      },
      {
        rule: 'Use THE with rivers, oceans, mountain ranges, deserts',
        ruleEs: 'Usa THE con ríos, océanos, cadenas montañosas, desiertos',
        examples: [
          { english: 'the Amazon, the Pacific Ocean, the Alps, the Sahara', spanish: 'el Amazonas, el Océano Pacífico, los Alpes, el Sahara' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I love the nature.', correct: 'I love nature.', explanation: 'Don\'t use "the" with general concepts.' },
      { wrong: 'The life is beautiful.', correct: 'Life is beautiful.', explanation: 'Don\'t use "the" when talking about something in general.' },
      { wrong: 'I go to the school every day.', correct: 'I go to school every day.', explanation: 'Don\'t use "the" with institutions when talking about their purpose (school, church, hospital).' }
    ]
  },
  {
    id: 'articles-zero',
    name: 'Zero Article (No Article)',
    nameEs: 'Artículo Cero (Sin Artículo)',
    level: 3,
    category: 'articles',
    priority: 'critical',
    explanation: 'Sometimes no article is needed. This is called the "zero article".',
    explanationEs: 'A veces no se necesita artículo. Esto se llama "artículo cero".',
    rules: [
      {
        rule: 'No article with plural countable nouns (general)',
        ruleEs: 'Sin artículo con sustantivos contables plurales (general)',
        examples: [
          { english: 'Dogs are loyal. Books are expensive.', spanish: 'Los perros son leales. Los libros son caros.' }
        ]
      },
      {
        rule: 'No article with uncountable nouns (general)',
        ruleEs: 'Sin artículo con sustantivos incontables (general)',
        examples: [
          { english: 'Water is essential. Love is blind.', spanish: 'El agua es esencial. El amor es ciego.' }
        ]
      },
      {
        rule: 'No article with names, countries, cities, languages',
        ruleEs: 'Sin artículo con nombres, países, ciudades, idiomas',
        examples: [
          { english: 'John lives in Spain. She speaks English.', spanish: 'John vive en España. Ella habla inglés.' }
        ]
      },
      {
        rule: 'No article with meals, sports, academic subjects',
        ruleEs: 'Sin artículo con comidas, deportes, materias académicas',
        examples: [
          { english: 'I had breakfast. He plays tennis. I study math.', spanish: 'Desayuné. Él juega tenis. Estudio matemáticas.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I had the breakfast.', correct: 'I had breakfast.', explanation: 'Don\'t use articles with meals in general.' },
      { wrong: 'She speaks the Spanish.', correct: 'She speaks Spanish.', explanation: 'Don\'t use articles with languages.' },
      { wrong: 'The happiness is important.', correct: 'Happiness is important.', explanation: 'Don\'t use "the" with abstract nouns in general.' }
    ]
  },

  // === COUNTABLE / UNCOUNTABLE ===
  {
    id: 'countable-uncountable',
    name: 'Countable vs Uncountable Nouns',
    nameEs: 'Sustantivos Contables vs Incontables',
    level: 2,
    category: 'nouns',
    priority: 'critical',
    explanation: 'Countable nouns can be counted (1 apple, 2 apples). Uncountable nouns cannot be counted and have no plural form.',
    explanationEs: 'Los sustantivos contables se pueden contar (1 manzana, 2 manzanas). Los incontables no se pueden contar y no tienen forma plural.',
    rules: [
      {
        rule: 'Countable nouns have singular and plural forms',
        ruleEs: 'Los contables tienen forma singular y plural',
        examples: [
          { english: 'one book → two books, a cat → many cats', spanish: 'un libro → dos libros, un gato → muchos gatos' }
        ]
      },
      {
        rule: 'Uncountable nouns have no plural and use singular verbs',
        ruleEs: 'Los incontables no tienen plural y usan verbos singulares',
        examples: [
          { english: 'Water is cold. Information is important. (NOT: informations)', spanish: 'El agua está fría. La información es importante.' }
        ]
      },
      {
        rule: 'Common uncountable nouns',
        ruleEs: 'Sustantivos incontables comunes',
        examples: [
          { english: 'water, milk, bread, rice, money, furniture, advice, information, news, homework, luggage, weather, traffic', spanish: 'agua, leche, pan, arroz, dinero, muebles, consejo, información, noticias, tarea, equipaje, clima, tráfico' }
        ]
      },
      {
        rule: 'Use "a piece of", "a glass of", etc. to count uncountables',
        ruleEs: 'Usa "a piece of", "a glass of", etc. para contar incontables',
        examples: [
          { english: 'a piece of advice, a glass of water, a slice of bread, a piece of furniture', spanish: 'un consejo, un vaso de agua, una rebanada de pan, un mueble' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I have many furnitures.', correct: 'I have a lot of furniture.', explanation: '"Furniture" is uncountable.' },
      { wrong: 'She gave me an advice.', correct: 'She gave me some advice / a piece of advice.', explanation: '"Advice" is uncountable.' },
      { wrong: 'The news are good.', correct: 'The news is good.', explanation: '"News" is uncountable and takes singular verb.' },
      { wrong: 'I need informations.', correct: 'I need information.', explanation: '"Information" is uncountable.' }
    ]
  },

  // === PRONOUNS ===
  {
    id: 'pronouns-subject-object',
    name: 'Subject and Object Pronouns',
    nameEs: 'Pronombres de Sujeto y Objeto',
    level: 1,
    category: 'pronouns',
    priority: 'critical',
    explanation: 'Subject pronouns replace the subject. Object pronouns replace the object of a verb or preposition.',
    explanationEs: 'Los pronombres de sujeto reemplazan al sujeto. Los de objeto reemplazan al objeto de un verbo o preposición.',
    rules: [
      {
        rule: 'Subject pronouns: I, you, he, she, it, we, they',
        ruleEs: 'Pronombres de sujeto: I, you, he, she, it, we, they',
        examples: [
          { english: 'I am happy. She works here. They are coming.', spanish: 'Estoy feliz. Ella trabaja aquí. Ellos vienen.' }
        ]
      },
      {
        rule: 'Object pronouns: me, you, him, her, it, us, them',
        ruleEs: 'Pronombres de objeto: me, you, him, her, it, us, them',
        examples: [
          { english: 'Call me. I saw him. Give it to her. Help us.', spanish: 'Llámame. Lo vi. Dáselo a ella. Ayúdanos.' }
        ]
      },
      {
        rule: 'Object pronouns come after verbs and prepositions',
        ruleEs: 'Los pronombres de objeto van después de verbos y preposiciones',
        examples: [
          { english: 'She loves him. This is for you. Talk to me.', spanish: 'Ella lo ama. Esto es para ti. Habla conmigo.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'Me and John went to the store.', correct: 'John and I went to the store.', explanation: 'Use subject pronoun "I" as the subject.' },
      { wrong: 'Between you and I...', correct: 'Between you and me...', explanation: 'After prepositions, use object pronouns.' },
      { wrong: 'Him is tall.', correct: 'He is tall.', explanation: 'Use subject pronouns as the subject.' }
    ]
  },
  {
    id: 'pronouns-possessive',
    name: 'Possessive Pronouns and Adjectives',
    nameEs: 'Pronombres y Adjetivos Posesivos',
    level: 1,
    category: 'pronouns',
    priority: 'critical',
    explanation: 'Possessive adjectives come before nouns. Possessive pronouns replace the noun entirely.',
    explanationEs: 'Los adjetivos posesivos van antes de sustantivos. Los pronombres posesivos reemplazan el sustantivo.',
    rules: [
      {
        rule: 'Possessive adjectives: my, your, his, her, its, our, their',
        ruleEs: 'Adjetivos posesivos: my, your, his, her, its, our, their',
        examples: [
          { english: 'This is my book. Her car is red. Their house is big.', spanish: 'Este es mi libro. Su carro es rojo. Su casa es grande.' }
        ]
      },
      {
        rule: 'Possessive pronouns: mine, yours, his, hers, ours, theirs',
        ruleEs: 'Pronombres posesivos: mine, yours, his, hers, ours, theirs',
        examples: [
          { english: 'This book is mine. Is this pen yours? The decision is theirs.', spanish: 'Este libro es mío. ¿Este bolígrafo es tuyo? La decisión es de ellos.' }
        ]
      },
      {
        rule: '"Its" (possessive) vs "It\'s" (it is)',
        ruleEs: '"Its" (posesivo) vs "It\'s" (it is)',
        examples: [
          { english: 'The dog wagged its tail. It\'s (it is) a nice day.', spanish: 'El perro movió su cola. Es un buen día.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'This is mine book.', correct: 'This is my book.', explanation: 'Use possessive adjective before nouns.' },
      { wrong: 'The dog ate it\'s food.', correct: 'The dog ate its food.', explanation: '"Its" (no apostrophe) is possessive.' },
      { wrong: 'Is this yours pen?', correct: 'Is this your pen? / Is this pen yours?', explanation: 'Don\'t use possessive pronouns before nouns.' }
    ]
  },
  {
    id: 'pronouns-reflexive',
    name: 'Reflexive Pronouns',
    nameEs: 'Pronombres Reflexivos',
    level: 2,
    category: 'pronouns',
    priority: 'high',
    explanation: 'Reflexive pronouns are used when the subject and object are the same person.',
    explanationEs: 'Los pronombres reflexivos se usan cuando el sujeto y el objeto son la misma persona.',
    rules: [
      {
        rule: 'Reflexive pronouns: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves',
        ruleEs: 'Pronombres reflexivos: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves',
        examples: [
          { english: 'I cut myself. She taught herself Spanish. They enjoyed themselves.', spanish: 'Me corté. Ella aprendió español sola. Se divirtieron.' }
        ]
      },
      {
        rule: 'Use for emphasis',
        ruleEs: 'Usa para énfasis',
        examples: [
          { english: 'I made this cake myself. The president himself called me.', spanish: 'Yo mismo hice este pastel. El presidente mismo me llamó.' }
        ]
      },
      {
        rule: 'Use with "by" to mean "alone"',
        ruleEs: 'Usa con "by" para significar "solo"',
        examples: [
          { english: 'She lives by herself. I did it by myself.', spanish: 'Ella vive sola. Lo hice yo solo.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'He hurt hisself.', correct: 'He hurt himself.', explanation: 'The correct form is "himself".' },
      { wrong: 'They made it theirselves.', correct: 'They made it themselves.', explanation: 'The correct form is "themselves".' },
      { wrong: 'I and my friend went...', correct: 'My friend and I went...', explanation: 'Put yourself last.' }
    ]
  },

  // === POSSESSIVES ===
  {
    id: 'possessives-apostrophe',
    name: 'Possessives with \'s and of',
    nameEs: 'Posesivos con \'s y of',
    level: 1,
    category: 'pronouns',
    priority: 'high',
    explanation: 'Use \'s for people and animals, "of" for things. But there are exceptions!',
    explanationEs: 'Usa \'s para personas y animales, "of" para cosas. ¡Pero hay excepciones!',
    rules: [
      {
        rule: 'Use \'s for people and animals',
        ruleEs: 'Usa \'s para personas y animales',
        examples: [
          { english: 'John\'s car, the dog\'s tail, my mother\'s house', spanish: 'El carro de John, la cola del perro, la casa de mi madre' }
        ]
      },
      {
        rule: 'Use "of" for things and places',
        ruleEs: 'Usa "of" para cosas y lugares',
        examples: [
          { english: 'the door of the house, the end of the movie, the name of the street', spanish: 'la puerta de la casa, el final de la película, el nombre de la calle' }
        ]
      },
      {
        rule: 'Plural nouns ending in -s: add only apostrophe',
        ruleEs: 'Sustantivos plurales terminados en -s: solo agregar apóstrofe',
        examples: [
          { english: 'the students\' books, my parents\' house, the boys\' room', spanish: 'los libros de los estudiantes, la casa de mis padres, el cuarto de los niños' }
        ]
      },
      {
        rule: 'Names ending in -s: both forms accepted',
        ruleEs: 'Nombres terminados en -s: ambas formas aceptadas',
        examples: [
          { english: 'James\'s car OR James\' car', spanish: 'El carro de James' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'The car of John', correct: 'John\'s car', explanation: 'Use \'s for people, not "of".' },
      { wrong: 'The childrens\' toys', correct: 'The children\'s toys', explanation: '"Children" is already plural, so add \'s.' },
      { wrong: 'The dogs toys', correct: 'The dog\'s toys', explanation: 'Don\'t forget the apostrophe.' }
    ]
  },

  // === ADJECTIVES ===
  {
    id: 'adjectives-order',
    name: 'Adjective Order',
    nameEs: 'Orden de los Adjetivos',
    level: 3,
    category: 'adjectives',
    priority: 'high',
    explanation: 'When using multiple adjectives, they follow a specific order: Opinion-Size-Age-Shape-Color-Origin-Material-Purpose.',
    explanationEs: 'Al usar múltiples adjetivos, siguen un orden específico: Opinión-Tamaño-Edad-Forma-Color-Origen-Material-Propósito.',
    rules: [
      {
        rule: 'OSASCOMP order: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose',
        ruleEs: 'Orden OSASCOMP: Opinión, Tamaño, Edad, Forma, Color, Origen, Material, Propósito',
        examples: [
          { english: 'A beautiful big old rectangular brown Italian wooden dining table', spanish: 'Una hermosa gran vieja rectangular marrón italiana mesa de madera para comedor' },
          { english: 'A lovely little old round black Japanese plastic serving tray', spanish: 'Una encantadora pequeña vieja redonda negra japonesa bandeja de plástico para servir' }
        ]
      },
      {
        rule: 'Usually 2-3 adjectives maximum',
        ruleEs: 'Usualmente máximo 2-3 adjetivos',
        examples: [
          { english: 'A small red car. A beautiful old house.', spanish: 'Un pequeño carro rojo. Una hermosa casa vieja.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'A red big car', correct: 'A big red car', explanation: 'Size comes before color.' },
      { wrong: 'A wooden old table', correct: 'An old wooden table', explanation: 'Age comes before material.' },
      { wrong: 'A French delicious wine', correct: 'A delicious French wine', explanation: 'Opinion comes before origin.' }
    ]
  },
  {
    id: 'adjectives-comparative-superlative',
    name: 'Comparative and Superlative Adjectives',
    nameEs: 'Adjetivos Comparativos y Superlativos',
    level: 2,
    category: 'adjectives',
    priority: 'critical',
    explanation: 'Comparatives compare two things. Superlatives compare three or more things.',
    explanationEs: 'Los comparativos comparan dos cosas. Los superlativos comparan tres o más cosas.',
    rules: [
      {
        rule: 'Short adjectives (1-2 syllables): add -er / -est',
        ruleEs: 'Adjetivos cortos (1-2 sílabas): agregar -er / -est',
        examples: [
          { english: 'tall → taller → the tallest, big → bigger → the biggest', spanish: 'alto → más alto → el más alto, grande → más grande → el más grande' }
        ]
      },
      {
        rule: 'Long adjectives (3+ syllables): use more / most',
        ruleEs: 'Adjetivos largos (3+ sílabas): usar more / most',
        examples: [
          { english: 'beautiful → more beautiful → the most beautiful', spanish: 'hermoso → más hermoso → el más hermoso' }
        ]
      },
      {
        rule: 'Irregular comparatives and superlatives',
        ruleEs: 'Comparativos y superlativos irregulares',
        examples: [
          { english: 'good → better → the best, bad → worse → the worst, far → farther/further → the farthest/furthest', spanish: 'bueno → mejor → el mejor, malo → peor → el peor, lejos → más lejos → el más lejos' }
        ]
      },
      {
        rule: 'Use "than" with comparatives',
        ruleEs: 'Usa "than" con comparativos',
        examples: [
          { english: 'She is taller than me. This is more expensive than that.', spanish: 'Ella es más alta que yo. Esto es más caro que eso.' }
        ]
      },
      {
        rule: 'Use "the" with superlatives',
        ruleEs: 'Usa "the" con superlativos',
        examples: [
          { english: 'He is the tallest in the class. This is the best movie.', spanish: 'Él es el más alto de la clase. Esta es la mejor película.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'She is more tall than him.', correct: 'She is taller than him.', explanation: 'Use -er for short adjectives, not "more".' },
      { wrong: 'This is the most big house.', correct: 'This is the biggest house.', explanation: 'Use -est for short adjectives, not "most".' },
      { wrong: 'He is the goodest player.', correct: 'He is the best player.', explanation: '"Good" is irregular: good-better-best.' },
      { wrong: 'She runs more fast.', correct: 'She runs faster.', explanation: '"Fast" is a short adjective, use -er.' }
    ]
  },

  // === ADVERBS ===
  {
    id: 'adverbs-types',
    name: 'Types of Adverbs',
    nameEs: 'Tipos de Adverbios',
    level: 2,
    category: 'adverbs',
    priority: 'high',
    explanation: 'Adverbs modify verbs, adjectives, or other adverbs. They describe how, when, where, or to what degree.',
    explanationEs: 'Los adverbios modifican verbos, adjetivos u otros adverbios. Describen cómo, cuándo, dónde o en qué grado.',
    rules: [
      {
        rule: 'Adverbs of manner: describe HOW (usually end in -ly)',
        ruleEs: 'Adverbios de modo: describen CÓMO (usualmente terminan en -ly)',
        examples: [
          { english: 'She speaks quietly. He runs fast. They work hard.', spanish: 'Ella habla en voz baja. Él corre rápido. Trabajan duro.' }
        ]
      },
      {
        rule: 'Adverbs of frequency: describe HOW OFTEN',
        ruleEs: 'Adverbios de frecuencia: describen CON QUÉ FRECUENCIA',
        examples: [
          { english: 'always, usually, often, sometimes, rarely, never, seldom', spanish: 'siempre, usualmente, a menudo, a veces, raramente, nunca, rara vez' },
          { english: 'I always wake up early. She never eats meat.', spanish: 'Siempre me despierto temprano. Ella nunca come carne.' }
        ]
      },
      {
        rule: 'Adverbs of degree: describe HOW MUCH',
        ruleEs: 'Adverbios de grado: describen CUÁNTO',
        examples: [
          { english: 'very, really, quite, extremely, too, enough, almost', spanish: 'muy, realmente, bastante, extremadamente, demasiado, suficiente, casi' },
          { english: 'She is very tall. It\'s too hot. I\'m almost finished.', spanish: 'Ella es muy alta. Hace demasiado calor. Casi termino.' }
        ]
      },
      {
        rule: 'Position of frequency adverbs: before main verb, after BE',
        ruleEs: 'Posición de adverbios de frecuencia: antes del verbo principal, después de BE',
        examples: [
          { english: 'I always eat breakfast. She is always happy.', spanish: 'Siempre desayuno. Ella siempre está feliz.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'He speaks English good.', correct: 'He speaks English well.', explanation: '"Good" is an adjective, "well" is the adverb.' },
      { wrong: 'She runs fastly.', correct: 'She runs fast.', explanation: '"Fast" is both adjective and adverb (no -ly).' },
      { wrong: 'I go always to work early.', correct: 'I always go to work early.', explanation: 'Frequency adverbs go before the main verb.' },
      { wrong: 'She is happy very.', correct: 'She is very happy.', explanation: 'Degree adverbs go before adjectives.' }
    ]
  },

  // === PREPOSITIONS ===
  {
    id: 'prepositions-time',
    name: 'Prepositions of Time (in, on, at)',
    nameEs: 'Preposiciones de Tiempo (in, on, at)',
    level: 2,
    category: 'prepositions',
    priority: 'critical',
    explanation: 'IN for months/years/seasons/centuries, ON for days/dates, AT for specific times.',
    explanationEs: 'IN para meses/años/estaciones/siglos, ON para días/fechas, AT para horas específicas.',
    rules: [
      {
        rule: 'IN: months, years, seasons, centuries, parts of day',
        ruleEs: 'IN: meses, años, estaciones, siglos, partes del día',
        examples: [
          { english: 'in January, in 2024, in summer, in the 21st century, in the morning', spanish: 'en enero, en 2024, en verano, en el siglo 21, en la mañana' }
        ]
      },
      {
        rule: 'ON: days of week, specific dates, holidays with "day"',
        ruleEs: 'ON: días de la semana, fechas específicas, feriados con "day"',
        examples: [
          { english: 'on Monday, on July 4th, on Christmas Day, on my birthday', spanish: 'el lunes, el 4 de julio, el día de Navidad, en mi cumpleaños' }
        ]
      },
      {
        rule: 'AT: specific times, night, noon, midnight, weekends',
        ruleEs: 'AT: horas específicas, noche, mediodía, medianoche, fines de semana',
        examples: [
          { english: 'at 5 o\'clock, at noon, at midnight, at night, at the weekend (UK)', spanish: 'a las 5, al mediodía, a medianoche, en la noche, el fin de semana' }
        ]
      },
      {
        rule: 'No preposition: this, last, next, every',
        ruleEs: 'Sin preposición: this, last, next, every',
        examples: [
          { english: 'this morning, last week, next year, every day', spanish: 'esta mañana, la semana pasada, el próximo año, todos los días' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I was born in July 4th.', correct: 'I was born on July 4th.', explanation: 'Use ON for specific dates.' },
      { wrong: 'See you in Monday.', correct: 'See you on Monday.', explanation: 'Use ON for days of the week.' },
      { wrong: 'I wake up in 7 AM.', correct: 'I wake up at 7 AM.', explanation: 'Use AT for specific times.' },
      { wrong: 'I\'ll call you in tomorrow.', correct: 'I\'ll call you tomorrow.', explanation: 'No preposition with "tomorrow".' }
    ]
  },
  {
    id: 'prepositions-place',
    name: 'Prepositions of Place (in, on, at)',
    nameEs: 'Preposiciones de Lugar (in, on, at)',
    level: 2,
    category: 'prepositions',
    priority: 'critical',
    explanation: 'IN for enclosed spaces, ON for surfaces, AT for specific points/locations.',
    explanationEs: 'IN para espacios cerrados, ON para superficies, AT para puntos/ubicaciones específicas.',
    rules: [
      {
        rule: 'IN: enclosed spaces, cities, countries, rooms',
        ruleEs: 'IN: espacios cerrados, ciudades, países, habitaciones',
        examples: [
          { english: 'in the box, in New York, in Spain, in the bedroom, in the car', spanish: 'en la caja, en Nueva York, en España, en la habitación, en el carro' }
        ]
      },
      {
        rule: 'ON: surfaces, streets, floors, public transport',
        ruleEs: 'ON: superficies, calles, pisos, transporte público',
        examples: [
          { english: 'on the table, on Main Street, on the 3rd floor, on the bus', spanish: 'en la mesa, en la calle Main, en el 3er piso, en el autobús' }
        ]
      },
      {
        rule: 'AT: specific points, addresses, events, buildings (as locations)',
        ruleEs: 'AT: puntos específicos, direcciones, eventos, edificios (como ubicaciones)',
        examples: [
          { english: 'at the bus stop, at 123 Main St., at the party, at school, at home', spanish: 'en la parada del bus, en 123 Main St., en la fiesta, en la escuela, en casa' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I\'m at home.', correct: 'I\'m at home. (correct!)', explanation: '"At home" is an exception - we use AT not IN.' },
      { wrong: 'She is in the bus stop.', correct: 'She is at the bus stop.', explanation: 'Use AT for specific points/locations.' },
      { wrong: 'The book is in the table.', correct: 'The book is on the table.', explanation: 'Use ON for surfaces.' },
      { wrong: 'He lives at Paris.', correct: 'He lives in Paris.', explanation: 'Use IN for cities and countries.' }
    ]
  },
  {
    id: 'prepositions-movement',
    name: 'Prepositions of Movement',
    nameEs: 'Preposiciones de Movimiento',
    level: 3,
    category: 'prepositions',
    priority: 'high',
    explanation: 'Prepositions of movement show direction or motion from one place to another.',
    explanationEs: 'Las preposiciones de movimiento muestran dirección o movimiento de un lugar a otro.',
    rules: [
      {
        rule: 'TO: indicates destination or direction toward',
        ruleEs: 'TO: indica destino o dirección hacia',
        examples: [
          { english: 'I\'m going to work. She walked to the door.', spanish: 'Voy al trabajo. Ella caminó hacia la puerta.' }
        ]
      },
      {
        rule: 'INTO: entering an enclosed space',
        ruleEs: 'INTO: entrando a un espacio cerrado',
        examples: [
          { english: 'She walked into the room. He jumped into the pool.', spanish: 'Ella entró en la habitación. Él saltó a la piscina.' }
        ]
      },
      {
        rule: 'OUT OF: leaving an enclosed space',
        ruleEs: 'OUT OF: saliendo de un espacio cerrado',
        examples: [
          { english: 'He walked out of the building. She got out of the car.', spanish: 'Él salió del edificio. Ella salió del carro.' }
        ]
      },
      {
        rule: 'THROUGH: from one side to the other',
        ruleEs: 'THROUGH: de un lado al otro',
        examples: [
          { english: 'We walked through the park. The train goes through the tunnel.', spanish: 'Caminamos por el parque. El tren pasa por el túnel.' }
        ]
      },
      {
        rule: 'ACROSS: from one side to the other (on a surface)',
        ruleEs: 'ACROSS: de un lado al otro (en una superficie)',
        examples: [
          { english: 'She walked across the street. The bridge goes across the river.', spanish: 'Ella cruzó la calle. El puente cruza el río.' }
        ]
      },
      {
        rule: 'ALONG: following a line or path',
        ruleEs: 'ALONG: siguiendo una línea o camino',
        examples: [
          { english: 'We walked along the beach.', spanish: 'Caminamos a lo largo de la playa.' }
        ]
      },
      {
        rule: 'OVER / UNDER: above or below something',
        ruleEs: 'OVER / UNDER: encima o debajo de algo',
        examples: [
          { english: 'The plane flew over the city. The cat is under the table.', spanish: 'El avión voló sobre la ciudad. El gato está debajo de la mesa.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I\'m going to home.', correct: 'I\'m going home.', explanation: 'No "to" before "home".' },
      { wrong: 'She walked in the room.', correct: 'She walked into the room.', explanation: 'Use "into" for movement entering a space.' },
      { wrong: 'He jumped in the pool.', correct: 'He jumped into the pool.', explanation: 'Use "into" for movement entering a space.' }
    ]
  },

  // === QUESTIONS ===
  {
    id: 'questions-wh',
    name: 'Wh- Questions',
    nameEs: 'Preguntas Wh-',
    level: 1,
    category: 'questions',
    priority: 'critical',
    explanation: 'Wh- questions ask for information and start with what, where, when, who, why, which, whose, how.',
    explanationEs: 'Las preguntas Wh- piden información y empiezan con what, where, when, who, why, which, whose, how.',
    rules: [
      {
        rule: 'WHAT: asks about things or activities',
        ruleEs: 'WHAT: pregunta sobre cosas o actividades',
        examples: [
          { english: 'What is your name? What do you do?', spanish: '¿Cuál es tu nombre? ¿Qué haces?' }
        ]
      },
      {
        rule: 'WHERE: asks about place',
        ruleEs: 'WHERE: pregunta sobre lugar',
        examples: [
          { english: 'Where do you live? Where is the bank?', spanish: '¿Dónde vives? ¿Dónde está el banco?' }
        ]
      },
      {
        rule: 'WHEN: asks about time',
        ruleEs: 'WHEN: pregunta sobre tiempo',
        examples: [
          { english: 'When is the meeting? When did you arrive?', spanish: '¿Cuándo es la reunión? ¿Cuándo llegaste?' }
        ]
      },
      {
        rule: 'WHO: asks about people',
        ruleEs: 'WHO: pregunta sobre personas',
        examples: [
          { english: 'Who is she? Who called?', spanish: '¿Quién es ella? ¿Quién llamó?' }
        ]
      },
      {
        rule: 'WHY: asks about reason',
        ruleEs: 'WHY: pregunta sobre razón',
        examples: [
          { english: 'Why are you late? Why did he leave?', spanish: '¿Por qué llegas tarde? ¿Por qué se fue?' }
        ]
      },
      {
        rule: 'WHICH: asks about choice from options',
        ruleEs: 'WHICH: pregunta sobre elección entre opciones',
        examples: [
          { english: 'Which color do you prefer? Which book is yours?', spanish: '¿Qué color prefieres? ¿Cuál libro es tuyo?' }
        ]
      },
      {
        rule: 'WHOSE: asks about possession',
        ruleEs: 'WHOSE: pregunta sobre posesión',
        examples: [
          { english: 'Whose bag is this? Whose idea was it?', spanish: '¿De quién es esta bolsa? ¿De quién fue la idea?' }
        ]
      },
      {
        rule: 'HOW: asks about manner, degree, quantity',
        ruleEs: 'HOW: pregunta sobre modo, grado, cantidad',
        examples: [
          { english: 'How are you? How much does it cost? How many do you need?', spanish: '¿Cómo estás? ¿Cuánto cuesta? ¿Cuántos necesitas?' }
        ]
      },
      {
        rule: 'Question structure: Wh- + auxiliary + subject + verb?',
        ruleEs: 'Estructura: Wh- + auxiliar + sujeto + verbo?',
        examples: [
          { english: 'Where do you live? What did she say? Why are they here?', spanish: '¿Dónde vives? ¿Qué dijo ella? ¿Por qué están aquí?' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'Where you live?', correct: 'Where do you live?', explanation: 'Don\'t forget the auxiliary verb "do".' },
      { wrong: 'What means this word?', correct: 'What does this word mean?', explanation: 'Use "do/does" + base verb form.' },
      { wrong: 'Why you are sad?', correct: 'Why are you sad?', explanation: 'Invert subject and verb in questions.' }
    ]
  },
  {
    id: 'questions-yes-no',
    name: 'Yes/No Questions',
    nameEs: 'Preguntas de Sí/No',
    level: 1,
    category: 'questions',
    priority: 'critical',
    explanation: 'Yes/No questions can be answered with yes or no. They start with an auxiliary verb.',
    explanationEs: 'Las preguntas de Sí/No se responden con sí o no. Empiezan con un verbo auxiliar.',
    rules: [
      {
        rule: 'Structure: Auxiliary + Subject + Main verb?',
        ruleEs: 'Estructura: Auxiliar + Sujeto + Verbo principal?',
        examples: [
          { english: 'Do you like coffee? Are you tired? Can she swim?', spanish: '¿Te gusta el café? ¿Estás cansado? ¿Puede nadar?' }
        ]
      },
      {
        rule: 'With BE: Be + Subject + ...?',
        ruleEs: 'Con BE: Be + Sujeto + ...?',
        examples: [
          { english: 'Is she a doctor? Are they coming? Was it good?', spanish: '¿Es doctora? ¿Vienen ellos? ¿Estuvo bueno?' }
        ]
      },
      {
        rule: 'With DO/DOES/DID: Do/Does/Did + Subject + Base verb?',
        ruleEs: 'Con DO/DOES/DID: Do/Does/Did + Sujeto + Verbo base?',
        examples: [
          { english: 'Do you work here? Does she like pizza? Did they call?', spanish: '¿Trabajas aquí? ¿Le gusta la pizza? ¿Llamaron?' }
        ]
      },
      {
        rule: 'With modals: Modal + Subject + Base verb?',
        ruleEs: 'Con modales: Modal + Sujeto + Verbo base?',
        examples: [
          { english: 'Can you help me? Will you come? Should I wait?', spanish: '¿Puedes ayudarme? ¿Vendrás? ¿Debería esperar?' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'You like pizza?', correct: 'Do you like pizza?', explanation: 'Yes/No questions need an auxiliary verb first.' },
      { wrong: 'Does she likes coffee?', correct: 'Does she like coffee?', explanation: 'Use base verb after "does".' },
      { wrong: 'He is coming?', correct: 'Is he coming?', explanation: 'Invert subject and verb in questions.' }
    ]
  },

  // === THERE IS / THERE ARE ===
  {
    id: 'there-is-are',
    name: 'There is / There are',
    nameEs: 'There is / There are (Hay)',
    level: 1,
    category: 'structure',
    priority: 'high',
    explanation: 'There is/are is used to express that something exists. Use "is" for singular, "are" for plural.',
    explanationEs: 'There is/are se usa para expresar que algo existe (hay). Usa "is" para singular, "are" para plural.',
    rules: [
      {
        rule: 'There is + singular/uncountable noun',
        ruleEs: 'There is + sustantivo singular/incontable',
        examples: [
          { english: 'There is a book on the table. There is some water in the glass.', spanish: 'Hay un libro en la mesa. Hay agua en el vaso.' }
        ]
      },
      {
        rule: 'There are + plural noun',
        ruleEs: 'There are + sustantivo plural',
        examples: [
          { english: 'There are three books on the table. There are many people here.', spanish: 'Hay tres libros en la mesa. Hay mucha gente aquí.' }
        ]
      },
      {
        rule: 'Negative: There isn\'t / There aren\'t',
        ruleEs: 'Negativo: There isn\'t / There aren\'t',
        examples: [
          { english: 'There isn\'t any milk. There aren\'t any chairs.', spanish: 'No hay leche. No hay sillas.' }
        ]
      },
      {
        rule: 'Questions: Is there...? / Are there...?',
        ruleEs: 'Preguntas: Is there...? / Are there...?',
        examples: [
          { english: 'Is there a bathroom here? Are there any questions?', spanish: '¿Hay un baño aquí? ¿Hay alguna pregunta?' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'There is many people.', correct: 'There are many people.', explanation: 'Use "are" for plural nouns.' },
      { wrong: 'It has a book on the table.', correct: 'There is a book on the table.', explanation: 'Use "there is/are" to say something exists.' },
      { wrong: 'Have three books.', correct: 'There are three books.', explanation: 'Don\'t translate literally from Spanish "hay".' }
    ]
  },

  // === QUANTIFIERS ===
  {
    id: 'quantifiers',
    name: 'Quantifiers (some, any, much, many, few, little)',
    nameEs: 'Cuantificadores (some, any, much, many, few, little)',
    level: 2,
    category: 'determiners',
    priority: 'critical',
    explanation: 'Quantifiers express amount or quantity. Different quantifiers are used with countable and uncountable nouns.',
    explanationEs: 'Los cuantificadores expresan cantidad. Diferentes cuantificadores se usan con sustantivos contables e incontables.',
    rules: [
      {
        rule: 'SOME: affirmative sentences, offers, requests',
        ruleEs: 'SOME: oraciones afirmativas, ofertas, peticiones',
        examples: [
          { english: 'I have some friends. Would you like some coffee? Can I have some water?', spanish: 'Tengo algunos amigos. ¿Quieres café? ¿Puedo tener agua?' }
        ]
      },
      {
        rule: 'ANY: negative sentences, questions',
        ruleEs: 'ANY: oraciones negativas, preguntas',
        examples: [
          { english: 'I don\'t have any money. Do you have any questions?', spanish: 'No tengo dinero. ¿Tienes alguna pregunta?' }
        ]
      },
      {
        rule: 'MUCH: uncountable nouns (questions/negatives)',
        ruleEs: 'MUCH: sustantivos incontables (preguntas/negativos)',
        examples: [
          { english: 'I don\'t have much time. How much money do you need?', spanish: 'No tengo mucho tiempo. ¿Cuánto dinero necesitas?' }
        ]
      },
      {
        rule: 'MANY: countable nouns (questions/negatives)',
        ruleEs: 'MANY: sustantivos contables (preguntas/negativos)',
        examples: [
          { english: 'I don\'t have many friends. How many books do you have?', spanish: 'No tengo muchos amigos. ¿Cuántos libros tienes?' }
        ]
      },
      {
        rule: 'A LOT OF: countable and uncountable (affirmative)',
        ruleEs: 'A LOT OF: contables e incontables (afirmativo)',
        examples: [
          { english: 'I have a lot of friends. She has a lot of money.', spanish: 'Tengo muchos amigos. Ella tiene mucho dinero.' }
        ]
      },
      {
        rule: 'FEW / A FEW: countable (few = not many, a few = some)',
        ruleEs: 'FEW / A FEW: contables (few = no muchos, a few = algunos)',
        examples: [
          { english: 'Few people came. (negative meaning) A few people came. (positive meaning)', spanish: 'Pocas personas vinieron. Algunas personas vinieron.' }
        ]
      },
      {
        rule: 'LITTLE / A LITTLE: uncountable (little = not much, a little = some)',
        ruleEs: 'LITTLE / A LITTLE: incontables (little = no mucho, a little = algo)',
        examples: [
          { english: 'I have little time. (not enough) I have a little time. (some)', spanish: 'Tengo poco tiempo. Tengo algo de tiempo.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I don\'t have some money.', correct: 'I don\'t have any money.', explanation: 'Use "any" in negatives.' },
      { wrong: 'How many water do you need?', correct: 'How much water do you need?', explanation: '"Water" is uncountable, use "much".' },
      { wrong: 'I have much friends.', correct: 'I have many/a lot of friends.', explanation: '"Friends" is countable, use "many" or "a lot of".' }
    ]
  },

  // === DETERMINERS ===
  {
    id: 'demonstratives',
    name: 'Demonstratives (this, that, these, those)',
    nameEs: 'Demostrativos (this, that, these, those)',
    level: 1,
    category: 'determiners',
    priority: 'high',
    explanation: 'Demonstratives point to specific things. THIS/THESE for near, THAT/THOSE for far.',
    explanationEs: 'Los demostrativos señalan cosas específicas. THIS/THESE para cerca, THAT/THOSE para lejos.',
    rules: [
      {
        rule: 'THIS: singular, near',
        ruleEs: 'THIS: singular, cerca',
        examples: [
          { english: 'This is my book. This coffee is good.', spanish: 'Este es mi libro. Este café está bueno.' }
        ]
      },
      {
        rule: 'THAT: singular, far',
        ruleEs: 'THAT: singular, lejos',
        examples: [
          { english: 'That is his car. That building is tall.', spanish: 'Ese es su carro. Ese edificio es alto.' }
        ]
      },
      {
        rule: 'THESE: plural, near',
        ruleEs: 'THESE: plural, cerca',
        examples: [
          { english: 'These are my friends. These shoes are new.', spanish: 'Estos son mis amigos. Estos zapatos son nuevos.' }
        ]
      },
      {
        rule: 'THOSE: plural, far',
        ruleEs: 'THOSE: plural, lejos',
        examples: [
          { english: 'Those are beautiful flowers. I like those paintings.', spanish: 'Esas son flores hermosas. Me gustan esas pinturas.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'This books are mine.', correct: 'These books are mine.', explanation: 'Use "these" for plural near things.' },
      { wrong: 'That are my friends.', correct: 'Those are my friends.', explanation: 'Use "those" for plural far things.' }
    ]
  },

  // === RELATIVE CLAUSES ===
  {
    id: 'relative-clauses',
    name: 'Relative Clauses (who, which, that, whose, where)',
    nameEs: 'Oraciones Relativas (who, which, that, whose, where)',
    level: 4,
    category: 'clauses',
    priority: 'high',
    explanation: 'Relative clauses give more information about a noun. They start with relative pronouns.',
    explanationEs: 'Las oraciones relativas dan más información sobre un sustantivo. Empiezan con pronombres relativos.',
    rules: [
      {
        rule: 'WHO: for people',
        ruleEs: 'WHO: para personas',
        examples: [
          { english: 'The woman who called is my sister. I have a friend who lives in Paris.', spanish: 'La mujer que llamó es mi hermana. Tengo un amigo que vive en París.' }
        ]
      },
      {
        rule: 'WHICH: for things and animals',
        ruleEs: 'WHICH: para cosas y animales',
        examples: [
          { english: 'The book which I read was interesting. The cat which is on the roof is mine.', spanish: 'El libro que leí fue interesante. El gato que está en el techo es mío.' }
        ]
      },
      {
        rule: 'THAT: for people and things (informal)',
        ruleEs: 'THAT: para personas y cosas (informal)',
        examples: [
          { english: 'The man that called is here. The movie that we watched was great.', spanish: 'El hombre que llamó está aquí. La película que vimos estuvo genial.' }
        ]
      },
      {
        rule: 'WHOSE: for possession',
        ruleEs: 'WHOSE: para posesión',
        examples: [
          { english: 'The man whose car was stolen called the police.', spanish: 'El hombre cuyo carro fue robado llamó a la policía.' }
        ]
      },
      {
        rule: 'WHERE: for places',
        ruleEs: 'WHERE: para lugares',
        examples: [
          { english: 'The hotel where we stayed was nice.', spanish: 'El hotel donde nos quedamos era bonito.' }
        ]
      },
      {
        rule: 'WHEN: for times',
        ruleEs: 'WHEN: para tiempos',
        examples: [
          { english: 'I remember the day when we met.', spanish: 'Recuerdo el día cuando nos conocimos.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'The man which called...', correct: 'The man who called...', explanation: 'Use "who" for people.' },
      { wrong: 'The car who I bought...', correct: 'The car which/that I bought...', explanation: 'Use "which" or "that" for things.' },
      { wrong: 'The girl that her father is a doctor.', correct: 'The girl whose father is a doctor.', explanation: 'Use "whose" to show possession.' }
    ]
  },

  // === GERUNDS AND INFINITIVES ===
  {
    id: 'gerunds-infinitives',
    name: 'Gerunds vs Infinitives',
    nameEs: 'Gerundios vs Infinitivos',
    level: 3,
    category: 'verbs',
    priority: 'critical',
    explanation: 'Gerunds are verb+ing forms used as nouns. Infinitives are to+verb. Some verbs take gerunds, some take infinitives, some take both.',
    explanationEs: 'Los gerundios son formas verbo+ing usadas como sustantivos. Los infinitivos son to+verbo. Algunos verbos llevan gerundios, otros infinitivos, otros ambos.',
    rules: [
      {
        rule: 'Verbs followed by GERUND: enjoy, mind, finish, avoid, suggest, keep, consider, imagine, practice, quit',
        ruleEs: 'Verbos seguidos de GERUNDIO: enjoy, mind, finish, avoid, suggest, keep, consider, imagine, practice, quit',
        examples: [
          { english: 'I enjoy swimming. She finished eating. He avoided answering.', spanish: 'Disfruto nadar. Ella terminó de comer. Él evitó responder.' }
        ]
      },
      {
        rule: 'Verbs followed by INFINITIVE: want, need, decide, hope, plan, promise, agree, refuse, learn, expect, seem, pretend',
        ruleEs: 'Verbos seguidos de INFINITIVO: want, need, decide, hope, plan, promise, agree, refuse, learn, expect, seem, pretend',
        examples: [
          { english: 'I want to go. She decided to stay. He promised to help.', spanish: 'Quiero ir. Ella decidió quedarse. Él prometió ayudar.' }
        ]
      },
      {
        rule: 'Verbs that take BOTH (same meaning): like, love, hate, start, begin, continue',
        ruleEs: 'Verbos que llevan AMBOS (mismo significado): like, love, hate, start, begin, continue',
        examples: [
          { english: 'I like swimming / I like to swim. She started crying / She started to cry.', spanish: 'Me gusta nadar. Ella empezó a llorar.' }
        ]
      },
      {
        rule: 'Verbs that take BOTH (different meaning): stop, remember, forget, try',
        ruleEs: 'Verbos que llevan AMBOS (significado diferente): stop, remember, forget, try',
        examples: [
          { english: 'He stopped smoking. (quit) He stopped to smoke. (paused in order to)', spanish: 'Dejó de fumar. Paró para fumar.' },
          { english: 'I remember locking the door. (I have the memory) I remembered to lock the door. (I didn\'t forget)', spanish: 'Recuerdo haber cerrado. Me acordé de cerrar.' }
        ]
      },
      {
        rule: 'After prepositions: always use GERUND',
        ruleEs: 'Después de preposiciones: siempre usa GERUNDIO',
        examples: [
          { english: 'I\'m interested in learning. She\'s good at dancing. Thank you for coming.', spanish: 'Estoy interesado en aprender. Ella es buena bailando. Gracias por venir.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I enjoy to swim.', correct: 'I enjoy swimming.', explanation: '"Enjoy" is followed by gerund.' },
      { wrong: 'I want going home.', correct: 'I want to go home.', explanation: '"Want" is followed by infinitive.' },
      { wrong: 'Thank you for to help.', correct: 'Thank you for helping.', explanation: 'After prepositions, use gerund.' },
      { wrong: 'I\'m interested in to learn.', correct: 'I\'m interested in learning.', explanation: 'After prepositions, use gerund.' }
    ]
  },

  // === USED TO / WOULD ===
  {
    id: 'used-to-would',
    name: 'Used to / Would (Past Habits)',
    nameEs: 'Used to / Would (Hábitos Pasados)',
    level: 3,
    category: 'verbs',
    priority: 'high',
    explanation: 'USED TO and WOULD are used to talk about past habits or states that are no longer true.',
    explanationEs: 'USED TO y WOULD se usan para hablar de hábitos o estados pasados que ya no son verdad.',
    rules: [
      {
        rule: 'USED TO: past habits and past states (no longer true)',
        ruleEs: 'USED TO: hábitos pasados y estados pasados (ya no son verdad)',
        examples: [
          { english: 'I used to smoke. (habit - I don\'t now)', spanish: 'Yo fumaba / Solía fumar. (ya no)' },
          { english: 'She used to be shy. (state - she isn\'t now)', spanish: 'Ella era tímida. (ya no)' }
        ]
      },
      {
        rule: 'WOULD: past repeated actions only (not states)',
        ruleEs: 'WOULD: solo acciones repetidas pasadas (no estados)',
        examples: [
          { english: 'When I was young, I would play in the park every day.', spanish: 'Cuando era joven, jugaba en el parque todos los días.' }
        ]
      },
      {
        rule: 'Negative: didn\'t use to (NOT: didn\'t used to)',
        ruleEs: 'Negativo: didn\'t use to (NO: didn\'t used to)',
        examples: [
          { english: 'I didn\'t use to like vegetables.', spanish: 'No me gustaban las verduras.' }
        ]
      },
      {
        rule: 'Question: Did you use to...? (NOT: Did you used to...?)',
        ruleEs: 'Pregunta: Did you use to...? (NO: Did you used to...?)',
        examples: [
          { english: 'Did you use to play sports?', spanish: '¿Practicabas deportes?' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'She would be shy.', correct: 'She used to be shy.', explanation: 'Use "used to" for states, not "would".' },
      { wrong: 'I didn\'t used to smoke.', correct: 'I didn\'t use to smoke.', explanation: 'Use "use" (no -d) after "didn\'t".' },
      { wrong: 'I am used to smoke.', correct: 'I used to smoke.', explanation: 'Don\'t confuse "used to" (past habit) with "be used to" (accustomed).' }
    ]
  },

  // === WISH / IF ONLY ===
  {
    id: 'wish-if-only',
    name: 'Wish / If Only',
    nameEs: 'Wish / If Only (Deseos)',
    level: 5,
    category: 'clauses',
    priority: 'medium',
    explanation: 'WISH and IF ONLY express regrets or desires about unreal situations.',
    explanationEs: 'WISH e IF ONLY expresan arrepentimientos o deseos sobre situaciones irreales.',
    rules: [
      {
        rule: 'Wish + past simple: present regret/desire',
        ruleEs: 'Wish + pasado simple: arrepentimiento/deseo presente',
        examples: [
          { english: 'I wish I had more time. (I don\'t have enough now)', spanish: 'Ojalá tuviera más tiempo. (no tengo ahora)' },
          { english: 'I wish I were taller.', spanish: 'Ojalá fuera más alto.' }
        ]
      },
      {
        rule: 'Wish + past perfect: past regret',
        ruleEs: 'Wish + pasado perfecto: arrepentimiento pasado',
        examples: [
          { english: 'I wish I had studied harder. (I didn\'t)', spanish: 'Ojalá hubiera estudiado más. (no lo hice)' }
        ]
      },
      {
        rule: 'Wish + would: complaint about others / future desire',
        ruleEs: 'Wish + would: queja sobre otros / deseo futuro',
        examples: [
          { english: 'I wish you would stop making noise.', spanish: 'Ojalá dejaras de hacer ruido.' },
          { english: 'I wish it would stop raining.', spanish: 'Ojalá dejara de llover.' }
        ]
      },
      {
        rule: 'If only: stronger than wish',
        ruleEs: 'If only: más fuerte que wish',
        examples: [
          { english: 'If only I could fly!', spanish: '¡Si tan solo pudiera volar!' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I wish I have more money.', correct: 'I wish I had more money.', explanation: 'Use past tense after "wish" for present situations.' },
      { wrong: 'I wish I would be taller.', correct: 'I wish I were taller.', explanation: 'Don\'t use "would" for yourself after "wish".' }
    ]
  },

  // === CAUSATIVE ===
  {
    id: 'causative',
    name: 'Causative (have/get something done)',
    nameEs: 'Causativo (hacer que algo sea hecho)',
    level: 5,
    category: 'structure',
    priority: 'medium',
    explanation: 'The causative is used when someone else does something for you.',
    explanationEs: 'El causativo se usa cuando alguien hace algo por ti.',
    rules: [
      {
        rule: 'Have + object + past participle',
        ruleEs: 'Have + objeto + participio pasado',
        examples: [
          { english: 'I had my hair cut. (someone cut it for me)', spanish: 'Me corté el pelo. (alguien lo cortó por mí)' },
          { english: 'She had her car repaired.', spanish: 'Ella hizo reparar su carro.' }
        ]
      },
      {
        rule: 'Get + object + past participle (informal)',
        ruleEs: 'Get + objeto + participio pasado (informal)',
        examples: [
          { english: 'I got my phone fixed.', spanish: 'Hice arreglar mi teléfono.' }
        ]
      },
      {
        rule: 'All tenses possible',
        ruleEs: 'Todos los tiempos posibles',
        examples: [
          { english: 'I\'m having my house painted. I\'ll have my eyes checked.', spanish: 'Estoy haciendo pintar mi casa. Voy a hacer revisar mis ojos.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I cut my hair yesterday. (when someone else did it)', correct: 'I had my hair cut yesterday.', explanation: 'Use causative when someone does it for you.' },
      { wrong: 'I had repaired my car.', correct: 'I had my car repaired.', explanation: 'Object comes before past participle.' }
    ]
  },

  // === CONJUNCTIONS ===
  {
    id: 'conjunctions',
    name: 'Conjunctions (and, but, so, because, although)',
    nameEs: 'Conjunciones (and, but, so, because, although)',
    level: 2,
    category: 'conjunctions',
    priority: 'critical',
    explanation: 'Conjunctions connect words, phrases, or clauses.',
    explanationEs: 'Las conjunciones conectan palabras, frases u oraciones.',
    rules: [
      {
        rule: 'AND: addition',
        ruleEs: 'AND: adición',
        examples: [
          { english: 'I like coffee and tea. She is smart and beautiful.', spanish: 'Me gusta el café y el té. Ella es inteligente y hermosa.' }
        ]
      },
      {
        rule: 'BUT: contrast',
        ruleEs: 'BUT: contraste',
        examples: [
          { english: 'I\'m tired but happy. He tried but failed.', spanish: 'Estoy cansado pero feliz. Él intentó pero falló.' }
        ]
      },
      {
        rule: 'SO: result',
        ruleEs: 'SO: resultado',
        examples: [
          { english: 'I was hungry, so I ate. It was raining, so we stayed home.', spanish: 'Tenía hambre, así que comí. Estaba lloviendo, así que nos quedamos.' }
        ]
      },
      {
        rule: 'BECAUSE: reason',
        ruleEs: 'BECAUSE: razón',
        examples: [
          { english: 'I stayed home because I was sick.', spanish: 'Me quedé en casa porque estaba enfermo.' }
        ]
      },
      {
        rule: 'ALTHOUGH / THOUGH / EVEN THOUGH: concession',
        ruleEs: 'ALTHOUGH / THOUGH / EVEN THOUGH: concesión',
        examples: [
          { english: 'Although it was raining, we went out. I passed, even though I didn\'t study.', spanish: 'Aunque estaba lloviendo, salimos. Pasé, aunque no estudié.' }
        ]
      },
      {
        rule: 'OR: choice',
        ruleEs: 'OR: elección',
        examples: [
          { english: 'Do you want coffee or tea?', spanish: '¿Quieres café o té?' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'Because I was tired, so I went to bed.', correct: 'Because I was tired, I went to bed. OR I was tired, so I went to bed.', explanation: 'Don\'t use "because" and "so" together.' },
      { wrong: 'Although it was raining, but we went out.', correct: 'Although it was raining, we went out.', explanation: 'Don\'t use "although" and "but" together.' }
    ]
  },

  // === LINKING WORDS ===
  {
    id: 'linking-words',
    name: 'Linking Words / Connectors',
    nameEs: 'Palabras de Enlace / Conectores',
    level: 4,
    category: 'conjunctions',
    priority: 'high',
    explanation: 'Linking words connect ideas and show relationships between sentences.',
    explanationEs: 'Los conectores conectan ideas y muestran relaciones entre oraciones.',
    rules: [
      {
        rule: 'Addition: also, furthermore, moreover, in addition, besides',
        ruleEs: 'Adición: también, además, asimismo',
        examples: [
          { english: 'The hotel was cheap. Furthermore, it was clean.', spanish: 'El hotel era barato. Además, estaba limpio.' }
        ]
      },
      {
        rule: 'Contrast: however, nevertheless, on the other hand, in contrast',
        ruleEs: 'Contraste: sin embargo, no obstante, por otro lado',
        examples: [
          { english: 'The movie was long. However, it was interesting.', spanish: 'La película fue larga. Sin embargo, fue interesante.' }
        ]
      },
      {
        rule: 'Result: therefore, consequently, as a result, thus',
        ruleEs: 'Resultado: por lo tanto, en consecuencia, como resultado',
        examples: [
          { english: 'He didn\'t study. Therefore, he failed.', spanish: 'No estudió. Por lo tanto, reprobó.' }
        ]
      },
      {
        rule: 'Sequence: first, then, next, finally, after that',
        ruleEs: 'Secuencia: primero, luego, después, finalmente',
        examples: [
          { english: 'First, mix the ingredients. Then, bake for 30 minutes.', spanish: 'Primero, mezcla los ingredientes. Luego, hornea por 30 minutos.' }
        ]
      },
      {
        rule: 'Example: for example, for instance, such as',
        ruleEs: 'Ejemplo: por ejemplo, como',
        examples: [
          { english: 'Some fruits, such as apples and oranges, are healthy.', spanish: 'Algunas frutas, como manzanas y naranjas, son saludables.' }
        ]
      },
      {
        rule: 'Summary: in conclusion, to sum up, in short, overall',
        ruleEs: 'Resumen: en conclusión, en resumen, en general',
        examples: [
          { english: 'In conclusion, the project was a success.', spanish: 'En conclusión, el proyecto fue un éxito.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I like pizza. Also I like pasta.', correct: 'I like pizza. I also like pasta.', explanation: '"Also" usually goes before the main verb.' },
      { wrong: 'However I disagree.', correct: 'However, I disagree.', explanation: 'Use comma after sentence-initial connectors.' }
    ]
  },

  // === SUBJECT-VERB AGREEMENT ===
  {
    id: 'subject-verb-agreement',
    name: 'Subject-Verb Agreement',
    nameEs: 'Concordancia Sujeto-Verbo',
    level: 2,
    category: 'structure',
    priority: 'high',
    explanation: 'The verb must agree with the subject in number (singular or plural).',
    explanationEs: 'El verbo debe concordar con el sujeto en número (singular o plural).',
    rules: [
      {
        rule: 'Singular subject = singular verb, Plural subject = plural verb',
        ruleEs: 'Sujeto singular = verbo singular, Sujeto plural = verbo plural',
        examples: [
          { english: 'He works. They work. The dog is happy. The dogs are happy.', spanish: 'Él trabaja. Ellos trabajan. El perro está feliz. Los perros están felices.' }
        ]
      },
      {
        rule: 'Words between subject and verb don\'t change agreement',
        ruleEs: 'Las palabras entre sujeto y verbo no cambian la concordancia',
        examples: [
          { english: 'The box of chocolates is on the table. (box is singular)', spanish: 'La caja de chocolates está en la mesa.' }
        ]
      },
      {
        rule: 'Compound subjects with AND = plural verb',
        ruleEs: 'Sujetos compuestos con AND = verbo plural',
        examples: [
          { english: 'John and Mary are coming.', spanish: 'John y Mary vienen.' }
        ]
      },
      {
        rule: 'Either...or / Neither...nor: verb agrees with nearest subject',
        ruleEs: 'Either...or / Neither...nor: verbo concuerda con el sujeto más cercano',
        examples: [
          { english: 'Either the teacher or the students are wrong. Neither the students nor the teacher is wrong.', spanish: 'O el profesor o los estudiantes están equivocados.' }
        ]
      },
      {
        rule: 'Everyone, everybody, someone, nobody, each, every = singular',
        ruleEs: 'Everyone, everybody, someone, nobody, each, every = singular',
        examples: [
          { english: 'Everyone is here. Each student has a book.', spanish: 'Todos están aquí. Cada estudiante tiene un libro.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'The news are bad.', correct: 'The news is bad.', explanation: '"News" is uncountable and takes singular verb.' },
      { wrong: 'Everyone are happy.', correct: 'Everyone is happy.', explanation: '"Everyone" is singular.' },
      { wrong: 'The team are winning.', correct: 'The team is winning.', explanation: 'In American English, collective nouns take singular verbs.' }
    ]
  }
];

// Helper functions
export const getEssentialsByCategory = (category: GrammarEssential['category']): GrammarEssential[] => {
  return grammarEssentials.filter(e => e.category === category);
};

export const getEssentialsByLevel = (level: number): GrammarEssential[] => {
  return grammarEssentials.filter(e => e.level <= level);
};

export const getEssentialsByPriority = (priority: GrammarEssential['priority']): GrammarEssential[] => {
  return grammarEssentials.filter(e => e.priority === priority);
};

export default grammarEssentials;
