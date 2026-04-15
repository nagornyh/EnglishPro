// Gramática Adicional - Additional Grammar Topics
// Topics not covered in main grammar files

export interface AdditionalGrammar {
  id: string;
  name: string;
  nameEs: string;
  level: number;
  category: 'comparatives' | 'questions' | 'conditionals' | 'structures' | 'agreement' | 'advanced';
  priority: 'critical' | 'high' | 'medium' | 'low';
  explanation: string;
  explanationEs: string;
  structure?: {
    affirmative?: string;
    negative?: string;
    question?: string;
  };
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

export const additionalGrammar: AdditionalGrammar[] = [
  // === COMPARATIVES & SUPERLATIVES (EXPANDED) ===
  {
    id: 'comparatives-superlatives-full',
    name: 'Comparatives & Superlatives (Complete)',
    nameEs: 'Comparativos y Superlativos (Completo)',
    level: 2,
    category: 'comparatives',
    priority: 'critical',
    explanation: 'Comparatives compare two things. Superlatives compare three or more things.',
    explanationEs: 'Los comparativos comparan dos cosas. Los superlativos comparan tres o más.',
    rules: [
      {
        rule: 'Short adjectives (1 syllable): add -er / -est',
        ruleEs: 'Adjetivos cortos (1 sílaba): agregar -er / -est',
        examples: [
          { english: 'tall → taller → the tallest', spanish: 'alto → más alto → el más alto' },
          { english: 'big → bigger → the biggest', spanish: 'grande → más grande → el más grande' },
          { english: 'fast → faster → the fastest', spanish: 'rápido → más rápido → el más rápido' }
        ]
      },
      {
        rule: '2-syllable adjectives ending in -y: change y to i, add -er/-est',
        ruleEs: 'Adjetivos de 2 sílabas terminados en -y: cambiar y por i, agregar -er/-est',
        examples: [
          { english: 'happy → happier → the happiest', spanish: 'feliz → más feliz → el más feliz' },
          { english: 'easy → easier → the easiest', spanish: 'fácil → más fácil → el más fácil' },
          { english: 'funny → funnier → the funniest', spanish: 'gracioso → más gracioso → el más gracioso' }
        ]
      },
      {
        rule: 'Long adjectives (2+ syllables): use more / most',
        ruleEs: 'Adjetivos largos (2+ sílabas): usar more / most',
        examples: [
          { english: 'beautiful → more beautiful → the most beautiful', spanish: 'hermoso → más hermoso → el más hermoso' },
          { english: 'expensive → more expensive → the most expensive', spanish: 'caro → más caro → el más caro' },
          { english: 'interesting → more interesting → the most interesting', spanish: 'interesante → más interesante → el más interesante' }
        ]
      },
      {
        rule: 'Irregular comparatives',
        ruleEs: 'Comparativos irregulares',
        examples: [
          { english: 'good → better → the best', spanish: 'bueno → mejor → el mejor' },
          { english: 'bad → worse → the worst', spanish: 'malo → peor → el peor' },
          { english: 'far → farther/further → the farthest/furthest', spanish: 'lejos → más lejos → el más lejos' },
          { english: 'little → less → the least', spanish: 'poco → menos → el menos' },
          { english: 'much/many → more → the most', spanish: 'mucho → más → el más' }
        ]
      },
      {
        rule: 'Spelling rules: double consonant after short vowel',
        ruleEs: 'Reglas de ortografía: doblar consonante después de vocal corta',
        examples: [
          { english: 'big → bigger (not biger)', spanish: 'grande → más grande' },
          { english: 'hot → hotter, thin → thinner, sad → sadder', spanish: 'caliente → más caliente, delgado → más delgado, triste → más triste' }
        ]
      },
      {
        rule: 'Use "than" with comparatives',
        ruleEs: 'Usar "than" con comparativos',
        examples: [
          { english: 'She is taller than me/I am.', spanish: 'Ella es más alta que yo.' },
          { english: 'This is more expensive than that.', spanish: 'Esto es más caro que eso.' }
        ]
      },
      {
        rule: 'Use "the" with superlatives',
        ruleEs: 'Usar "the" con superlativos',
        examples: [
          { english: 'He is the tallest in the class.', spanish: 'Él es el más alto de la clase.' },
          { english: 'This is the best movie I\'ve ever seen.', spanish: 'Esta es la mejor película que he visto.' }
        ]
      },
      {
        rule: 'As...as for equality, not as...as for inequality',
        ruleEs: 'As...as para igualdad, not as...as para desigualdad',
        examples: [
          { english: 'She is as tall as her brother.', spanish: 'Ella es tan alta como su hermano.' },
          { english: 'He is not as smart as his sister.', spanish: 'Él no es tan inteligente como su hermana.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'She is more tall than me.', correct: 'She is taller than me.', explanation: 'Use -er for short adjectives.' },
      { wrong: 'This is the most big house.', correct: 'This is the biggest house.', explanation: 'Use -est for short adjectives.' },
      { wrong: 'He is gooder.', correct: 'He is better.', explanation: '"Good" is irregular.' },
      { wrong: 'She is the more beautiful.', correct: 'She is the most beautiful.', explanation: 'Use "most" for superlatives.' }
    ]
  },

  // === DOUBLE COMPARATIVES ===
  {
    id: 'double-comparatives',
    name: 'Double Comparatives (The more... the more...)',
    nameEs: 'Comparativos Dobles (Cuanto más... más...)',
    level: 4,
    category: 'comparatives',
    priority: 'high',
    explanation: 'Used to show that two things change together - when one increases, the other does too.',
    explanationEs: 'Se usa para mostrar que dos cosas cambian juntas - cuando una aumenta, la otra también.',
    rules: [
      {
        rule: 'Structure: The + comparative + subject + verb, the + comparative + subject + verb',
        ruleEs: 'Estructura: The + comparativo + sujeto + verbo, the + comparativo + sujeto + verbo',
        examples: [
          { english: 'The more you practice, the better you get.', spanish: 'Cuanto más practicas, mejor te vuelves.' },
          { english: 'The harder you work, the more you earn.', spanish: 'Cuanto más trabajas, más ganas.' },
          { english: 'The sooner, the better.', spanish: 'Cuanto antes, mejor.' }
        ]
      },
      {
        rule: 'Common expressions',
        ruleEs: 'Expresiones comunes',
        examples: [
          { english: 'The more, the merrier.', spanish: 'Cuantos más, mejor.' },
          { english: 'The bigger, the better.', spanish: 'Cuanto más grande, mejor.' },
          { english: 'The less said, the better.', spanish: 'Cuanto menos se diga, mejor.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'More you practice, better you get.', correct: 'The more you practice, the better you get.', explanation: 'Don\'t forget "the" before both comparatives.' }
    ]
  },

  // === TAG QUESTIONS ===
  {
    id: 'tag-questions',
    name: 'Tag Questions',
    nameEs: 'Preguntas Coletilla (Question Tags)',
    level: 3,
    category: 'questions',
    priority: 'critical',
    explanation: 'Short questions at the end of sentences to confirm information or invite agreement.',
    explanationEs: 'Preguntas cortas al final de oraciones para confirmar información o invitar a estar de acuerdo.',
    structure: {
      affirmative: 'Positive statement + negative tag?',
      negative: 'Negative statement + positive tag?'
    },
    rules: [
      {
        rule: 'Positive statement → negative tag',
        ruleEs: 'Afirmación positiva → tag negativo',
        examples: [
          { english: 'You are coming, aren\'t you?', spanish: 'Vienes, ¿verdad?' },
          { english: 'She likes coffee, doesn\'t she?', spanish: 'A ella le gusta el café, ¿no?' },
          { english: 'They have finished, haven\'t they?', spanish: 'Han terminado, ¿no?' }
        ]
      },
      {
        rule: 'Negative statement → positive tag',
        ruleEs: 'Afirmación negativa → tag positivo',
        examples: [
          { english: 'You aren\'t tired, are you?', spanish: 'No estás cansado, ¿verdad?' },
          { english: 'He doesn\'t work here, does he?', spanish: 'Él no trabaja aquí, ¿no?' },
          { english: 'They can\'t swim, can they?', spanish: 'No saben nadar, ¿verdad?' }
        ]
      },
      {
        rule: 'Use the same auxiliary/modal in the tag',
        ruleEs: 'Usa el mismo auxiliar/modal en el tag',
        examples: [
          { english: 'You can drive, can\'t you?', spanish: 'Sabes manejar, ¿no?' },
          { english: 'She will come, won\'t she?', spanish: 'Ella vendrá, ¿verdad?' },
          { english: 'They should help, shouldn\'t they?', spanish: 'Deberían ayudar, ¿no?' }
        ]
      },
      {
        rule: 'Special cases',
        ruleEs: 'Casos especiales',
        examples: [
          { english: 'I am right, aren\'t I? (NOT amn\'t I)', spanish: 'Tengo razón, ¿no?' },
          { english: 'Let\'s go, shall we?', spanish: 'Vamos, ¿sí?' },
          { english: 'Don\'t be late, will you?', spanish: 'No llegues tarde, ¿vale?' },
          { english: 'There is a problem, isn\'t there?', spanish: 'Hay un problema, ¿no?' }
        ]
      },
      {
        rule: 'Intonation changes meaning',
        ruleEs: 'La entonación cambia el significado',
        examples: [
          { english: 'You\'re coming, aren\'t you? ↗ (real question)', spanish: '¿Vienes, verdad? (pregunta real)' },
          { english: 'You\'re coming, aren\'t you? ↘ (expecting yes)', spanish: 'Vienes, ¿no? (esperando sí)' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'You are coming, isn\'t it?', correct: 'You are coming, aren\'t you?', explanation: 'The tag must match the subject.' },
      { wrong: 'She likes coffee, doesn\'t her?', correct: 'She likes coffee, doesn\'t she?', explanation: 'Use subject pronoun, not possessive.' },
      { wrong: 'I am late, amn\'t I?', correct: 'I am late, aren\'t I?', explanation: '"Aren\'t I" is the correct form.' }
    ]
  },

  // === INDIRECT QUESTIONS ===
  {
    id: 'indirect-questions',
    name: 'Indirect Questions',
    nameEs: 'Preguntas Indirectas',
    level: 4,
    category: 'questions',
    priority: 'critical',
    explanation: 'More polite way to ask questions. Word order changes to statement order.',
    explanationEs: 'Forma más cortés de hacer preguntas. El orden de palabras cambia al orden de afirmación.',
    rules: [
      {
        rule: 'Common introductions for indirect questions',
        ruleEs: 'Introducciones comunes para preguntas indirectas',
        examples: [
          { english: 'Could you tell me...?', spanish: '¿Podría decirme...?' },
          { english: 'Do you know...?', spanish: '¿Sabes...?' },
          { english: 'I wonder...', spanish: 'Me pregunto...' },
          { english: 'I\'d like to know...', spanish: 'Me gustaría saber...' },
          { english: 'Can you tell me...?', spanish: '¿Puedes decirme...?' }
        ]
      },
      {
        rule: 'Wh- questions: Wh-word + subject + verb (statement order)',
        ruleEs: 'Preguntas Wh-: Wh-word + sujeto + verbo (orden de afirmación)',
        examples: [
          { english: 'Direct: Where is the bank? → Indirect: Could you tell me where the bank is?', spanish: 'Directo: ¿Dónde está el banco? → Indirecto: ¿Podría decirme dónde está el banco?' },
          { english: 'Direct: What time does it open? → Indirect: Do you know what time it opens?', spanish: 'Directo: ¿A qué hora abre? → Indirecto: ¿Sabes a qué hora abre?' },
          { english: 'Direct: Why did she leave? → Indirect: I wonder why she left.', spanish: 'Directo: ¿Por qué se fue? → Indirecto: Me pregunto por qué se fue.' }
        ]
      },
      {
        rule: 'Yes/No questions: use "if" or "whether"',
        ruleEs: 'Preguntas Sí/No: usar "if" o "whether"',
        examples: [
          { english: 'Direct: Is he coming? → Indirect: Do you know if/whether he is coming?', spanish: 'Directo: ¿Viene él? → Indirecto: ¿Sabes si viene?' },
          { english: 'Direct: Does she speak English? → Indirect: Could you tell me if/whether she speaks English?', spanish: 'Directo: ¿Habla inglés? → Indirecto: ¿Podrías decirme si habla inglés?' }
        ]
      },
      {
        rule: 'No question mark if the intro is a statement',
        ruleEs: 'Sin signo de interrogación si la introducción es una afirmación',
        examples: [
          { english: 'I wonder where she lives. (no ?)', spanish: 'Me pregunto dónde vive.' },
          { english: 'I don\'t know if he\'s coming. (no ?)', spanish: 'No sé si viene.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'Could you tell me where is the bank?', correct: 'Could you tell me where the bank is?', explanation: 'Use statement word order after Wh-word.' },
      { wrong: 'Do you know what time does it open?', correct: 'Do you know what time it opens?', explanation: 'No auxiliary inversion in indirect questions.' },
      { wrong: 'I wonder where is she.', correct: 'I wonder where she is.', explanation: 'Statement order: subject before verb.' }
    ]
  },

  // === ECHO QUESTIONS ===
  {
    id: 'echo-questions',
    name: 'Echo Questions',
    nameEs: 'Preguntas Eco',
    level: 4,
    category: 'questions',
    priority: 'medium',
    explanation: 'Questions that repeat part of what someone said, usually to express surprise or ask for clarification.',
    explanationEs: 'Preguntas que repiten parte de lo que alguien dijo, usualmente para expresar sorpresa o pedir aclaración.',
    rules: [
      {
        rule: 'Repeat the statement with rising intonation',
        ruleEs: 'Repetir la afirmación con entonación ascendente',
        examples: [
          { english: 'A: I quit my job. B: You quit your job?!', spanish: 'A: Renuncié. B: ¿¡Renunciaste!?' },
          { english: 'A: She\'s getting married. B: She\'s getting married?!', spanish: 'A: Se va a casar. B: ¿¡Se va a casar!?' }
        ]
      },
      {
        rule: 'Use Wh-word to ask about specific part',
        ruleEs: 'Usar Wh-word para preguntar sobre parte específica',
        examples: [
          { english: 'A: I met someone famous. B: You met who?', spanish: 'A: Conocí a alguien famoso. B: ¿Conociste a quién?' },
          { english: 'A: I went to Paris. B: You went where?', spanish: 'A: Fui a París. B: ¿Fuiste a dónde?' },
          { english: 'A: I paid $500. B: You paid how much?!', spanish: 'A: Pagué $500. B: ¿¡Pagaste cuánto!?' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'Where did you go? (as echo)', correct: 'You went where?', explanation: 'Echo questions keep statement structure with Wh-word at the end.' }
    ]
  },

  // === NEGATIVE SENTENCES ===
  {
    id: 'negative-sentences',
    name: 'Negative Sentences Formation',
    nameEs: 'Formación de Oraciones Negativas',
    level: 1,
    category: 'structures',
    priority: 'critical',
    explanation: 'How to form negative sentences in English using do/does/did and other auxiliaries.',
    explanationEs: 'Cómo formar oraciones negativas en inglés usando do/does/did y otros auxiliares.',
    rules: [
      {
        rule: 'Present Simple: don\'t / doesn\'t + base verb',
        ruleEs: 'Presente Simple: don\'t / doesn\'t + verbo base',
        examples: [
          { english: 'I don\'t like coffee.', spanish: 'No me gusta el café.' },
          { english: 'She doesn\'t work here.', spanish: 'Ella no trabaja aquí.' },
          { english: 'They don\'t understand.', spanish: 'No entienden.' }
        ]
      },
      {
        rule: 'Past Simple: didn\'t + base verb',
        ruleEs: 'Pasado Simple: didn\'t + verbo base',
        examples: [
          { english: 'I didn\'t go yesterday.', spanish: 'No fui ayer.' },
          { english: 'She didn\'t call me.', spanish: 'Ella no me llamó.' }
        ]
      },
      {
        rule: 'With BE: am/is/are/was/were + not',
        ruleEs: 'Con BE: am/is/are/was/were + not',
        examples: [
          { english: 'I am not tired. / I\'m not tired.', spanish: 'No estoy cansado.' },
          { english: 'She isn\'t / is not here.', spanish: 'Ella no está aquí.' },
          { english: 'They weren\'t / were not happy.', spanish: 'No estaban felices.' }
        ]
      },
      {
        rule: 'With modals: modal + not',
        ruleEs: 'Con modales: modal + not',
        examples: [
          { english: 'I can\'t swim.', spanish: 'No sé nadar.' },
          { english: 'You shouldn\'t eat that.', spanish: 'No deberías comer eso.' },
          { english: 'They won\'t come.', spanish: 'No vendrán.' }
        ]
      },
      {
        rule: 'With have/has (Perfect): haven\'t / hasn\'t',
        ruleEs: 'Con have/has (Perfecto): haven\'t / hasn\'t',
        examples: [
          { english: 'I haven\'t finished yet.', spanish: 'No he terminado todavía.' },
          { english: 'She hasn\'t called.', spanish: 'Ella no ha llamado.' }
        ]
      },
      {
        rule: 'Common contractions',
        ruleEs: 'Contracciones comunes',
        examples: [
          { english: 'do not → don\'t, does not → doesn\'t, did not → didn\'t', spanish: 'no (presente/pasado)' },
          { english: 'is not → isn\'t, are not → aren\'t, was not → wasn\'t', spanish: 'no es/está' },
          { english: 'cannot → can\'t, will not → won\'t, would not → wouldn\'t', spanish: 'no puede, no va a' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I no like coffee.', correct: 'I don\'t like coffee.', explanation: 'English uses auxiliary + not, not just "no".' },
      { wrong: 'She doesn\'t likes coffee.', correct: 'She doesn\'t like coffee.', explanation: 'Use base verb after doesn\'t.' },
      { wrong: 'I didn\'t went.', correct: 'I didn\'t go.', explanation: 'Use base verb after didn\'t.' },
      { wrong: 'He not is here.', correct: 'He is not here. / He isn\'t here.', explanation: '"Not" comes after the verb BE.' }
    ]
  },

  // === EMPHATIC DO/DOES/DID ===
  {
    id: 'emphatic-do',
    name: 'Emphatic Structures (do/does/did)',
    nameEs: 'Estructuras Enfáticas (do/does/did)',
    level: 4,
    category: 'structures',
    priority: 'high',
    explanation: 'Using do/does/did in affirmative sentences to add emphasis.',
    explanationEs: 'Usar do/does/did en oraciones afirmativas para agregar énfasis.',
    rules: [
      {
        rule: 'Add DO/DOES/DID before base verb for emphasis',
        ruleEs: 'Agregar DO/DOES/DID antes del verbo base para énfasis',
        examples: [
          { english: 'I DO understand. (I really understand)', spanish: 'SÍ entiendo. (de verdad)' },
          { english: 'She DOES like you. (contrary to what you think)', spanish: 'Ella SÍ te quiere.' },
          { english: 'I DID call you! (I really did)', spanish: '¡SÍ te llamé!' }
        ]
      },
      {
        rule: 'Used to contradict or confirm',
        ruleEs: 'Usado para contradecir o confirmar',
        examples: [
          { english: 'A: You don\'t care. B: I DO care!', spanish: 'A: No te importa. B: ¡SÍ me importa!' },
          { english: 'A: You didn\'t try. B: I DID try!', spanish: 'A: No lo intentaste. B: ¡SÍ lo intenté!' }
        ]
      },
      {
        rule: 'Stressed in speech',
        ruleEs: 'Se enfatiza al hablar',
        examples: [
          { english: 'I really DO appreciate your help.', spanish: 'De verdad SÍ aprecio tu ayuda.' },
          { english: 'Please DO sit down.', spanish: 'Por favor, siéntate.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I do understand. (flat tone)', correct: 'I DO understand. (stressed)', explanation: 'Emphatic do must be stressed.' }
    ]
  },

  // === SO/NEITHER/NOR (AGREEMENT) ===
  {
    id: 'so-neither-nor',
    name: 'So/Neither/Nor (Agreement)',
    nameEs: 'So/Neither/Nor (Acuerdo)',
    level: 3,
    category: 'agreement',
    priority: 'critical',
    explanation: 'Used to say "me too" or "me neither" more naturally.',
    explanationEs: 'Usado para decir "yo también" o "yo tampoco" de forma más natural.',
    rules: [
      {
        rule: 'SO + auxiliary + subject (agreeing with positive)',
        ruleEs: 'SO + auxiliar + sujeto (de acuerdo con positivo)',
        examples: [
          { english: 'A: I like pizza. B: So do I. (= I like pizza too)', spanish: 'A: Me gusta la pizza. B: A mí también.' },
          { english: 'A: She\'s tired. B: So am I.', spanish: 'A: Ella está cansada. B: Yo también.' },
          { english: 'A: They can swim. B: So can we.', spanish: 'A: Ellos saben nadar. B: Nosotros también.' },
          { english: 'A: He went home. B: So did she.', spanish: 'A: Él se fue a casa. B: Ella también.' }
        ]
      },
      {
        rule: 'NEITHER/NOR + auxiliary + subject (agreeing with negative)',
        ruleEs: 'NEITHER/NOR + auxiliar + sujeto (de acuerdo con negativo)',
        examples: [
          { english: 'A: I don\'t like fish. B: Neither do I. / Nor do I.', spanish: 'A: No me gusta el pescado. B: A mí tampoco.' },
          { english: 'A: She can\'t drive. B: Neither can I.', spanish: 'A: Ella no sabe manejar. B: Yo tampoco.' },
          { english: 'A: They haven\'t finished. B: Neither have we.', spanish: 'A: No han terminado. B: Nosotros tampoco.' }
        ]
      },
      {
        rule: 'Match the auxiliary/tense',
        ruleEs: 'Usa el mismo auxiliar/tiempo',
        examples: [
          { english: 'A: I am hungry. B: So am I. (be)', spanish: 'A: Tengo hambre. B: Yo también.' },
          { english: 'A: I have been there. B: So have I. (have)', spanish: 'A: He estado allí. B: Yo también.' },
          { english: 'A: I will help. B: So will I. (will)', spanish: 'A: Ayudaré. B: Yo también.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'So I do.', correct: 'So do I.', explanation: 'Invert auxiliary and subject after So/Neither.' },
      { wrong: 'Neither I do.', correct: 'Neither do I.', explanation: 'Invert auxiliary and subject.' },
      { wrong: 'A: I like it. B: Neither do I.', correct: 'A: I like it. B: So do I.', explanation: 'Use "So" for positive, "Neither" for negative.' }
    ]
  },

  // === BOTH/EITHER/NEITHER ===
  {
    id: 'both-either-neither',
    name: 'Both / Either / Neither',
    nameEs: 'Both / Either / Neither (Ambos/Cualquiera/Ninguno)',
    level: 3,
    category: 'structures',
    priority: 'high',
    explanation: 'Words used to talk about two things or people.',
    explanationEs: 'Palabras usadas para hablar de dos cosas o personas.',
    rules: [
      {
        rule: 'BOTH = the two (positive)',
        ruleEs: 'BOTH = los dos (positivo)',
        examples: [
          { english: 'Both students passed. (= the two students)', spanish: 'Ambos estudiantes aprobaron.' },
          { english: 'I like both options.', spanish: 'Me gustan ambas opciones.' },
          { english: 'Both of them are nice.', spanish: 'Los dos son amables.' }
        ]
      },
      {
        rule: 'EITHER = one or the other (positive context)',
        ruleEs: 'EITHER = uno u otro (contexto positivo)',
        examples: [
          { english: 'You can take either bus. (= any of the two)', spanish: 'Puedes tomar cualquiera de los dos buses.' },
          { english: 'Either day works for me.', spanish: 'Cualquier día me funciona.' },
          { english: 'I don\'t like either of them. (= not one, not the other)', spanish: 'No me gusta ninguno de los dos.' }
        ]
      },
      {
        rule: 'NEITHER = not one, not the other (negative meaning)',
        ruleEs: 'NEITHER = ni uno ni otro (significado negativo)',
        examples: [
          { english: 'Neither answer is correct.', spanish: 'Ninguna respuesta es correcta.' },
          { english: 'Neither of us knows.', spanish: 'Ninguno de nosotros sabe.' },
          { english: 'I like neither option.', spanish: 'No me gusta ninguna opción.' }
        ]
      },
      {
        rule: 'BOTH...AND / EITHER...OR / NEITHER...NOR',
        ruleEs: 'BOTH...AND / EITHER...OR / NEITHER...NOR',
        examples: [
          { english: 'Both John and Mary came.', spanish: 'Tanto John como Mary vinieron.' },
          { english: 'Either you apologize or I leave.', spanish: 'O te disculpas o me voy.' },
          { english: 'Neither he nor she knows.', spanish: 'Ni él ni ella saben.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'Both of them doesn\'t know.', correct: 'Neither of them knows.', explanation: 'Both is positive, use neither for negative.' },
      { wrong: 'Neither students passed.', correct: 'Neither student passed. / Neither of the students passed.', explanation: 'Neither + singular noun, or neither of + plural.' }
    ]
  },

  // === ARTICLES WITH PROPER NOUNS ===
  {
    id: 'articles-proper-nouns',
    name: 'Articles with Proper Nouns',
    nameEs: 'Artículos con Nombres Propios',
    level: 4,
    category: 'structures',
    priority: 'high',
    explanation: 'Rules for using "the" with countries, mountains, rivers, etc.',
    explanationEs: 'Reglas para usar "the" con países, montañas, ríos, etc.',
    rules: [
      {
        rule: 'Use THE with: rivers, oceans, seas, mountain ranges, deserts, groups of islands',
        ruleEs: 'Usa THE con: ríos, océanos, mares, cadenas montañosas, desiertos, grupos de islas',
        examples: [
          { english: 'the Amazon, the Pacific Ocean, the Mediterranean Sea', spanish: 'el Amazonas, el Océano Pacífico, el Mar Mediterráneo' },
          { english: 'the Alps, the Rockies, the Himalayas', spanish: 'los Alpes, las Rocosas, el Himalaya' },
          { english: 'the Sahara, the Gobi Desert', spanish: 'el Sahara, el Desierto de Gobi' },
          { english: 'the Philippines, the Canary Islands', spanish: 'las Filipinas, las Islas Canarias' }
        ]
      },
      {
        rule: 'Use THE with: countries with Republic/Kingdom/States, plural countries',
        ruleEs: 'Usa THE con: países con República/Reino/Estados, países plurales',
        examples: [
          { english: 'the United States, the United Kingdom, the Czech Republic', spanish: 'los Estados Unidos, el Reino Unido, la República Checa' },
          { english: 'the Netherlands, the Philippines', spanish: 'los Países Bajos, las Filipinas' }
        ]
      },
      {
        rule: 'NO article with: most countries, cities, continents, single mountains, lakes, single islands',
        ruleEs: 'SIN artículo con: la mayoría de países, ciudades, continentes, montañas individuales, lagos, islas individuales',
        examples: [
          { english: 'Spain, Japan, Brazil (NOT the Spain)', spanish: 'España, Japón, Brasil' },
          { english: 'Paris, Tokyo, New York (NOT the Paris)', spanish: 'París, Tokio, Nueva York' },
          { english: 'Europe, Asia, Africa (NOT the Europe)', spanish: 'Europa, Asia, África' },
          { english: 'Mount Everest, Mount Fuji (NOT the Mount Everest)', spanish: 'Monte Everest, Monte Fuji' },
          { english: 'Lake Titicaca, Lake Michigan', spanish: 'Lago Titicaca, Lago Michigan' },
          { english: 'Cuba, Hawaii (single island)', spanish: 'Cuba, Hawái' }
        ]
      },
      {
        rule: 'Use THE with: buildings, museums, theaters, hotels, newspapers',
        ruleEs: 'Usa THE con: edificios, museos, teatros, hoteles, periódicos',
        examples: [
          { english: 'the Empire State Building, the Louvre, the Ritz', spanish: 'el Empire State, el Louvre, el Ritz' },
          { english: 'the New York Times, the Guardian', spanish: 'el New York Times, el Guardian' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I visited the France.', correct: 'I visited France.', explanation: 'Most countries don\'t take "the".' },
      { wrong: 'He climbed the Mount Everest.', correct: 'He climbed Mount Everest.', explanation: 'Single mountains don\'t take "the".' },
      { wrong: 'I swam in Amazon River.', correct: 'I swam in the Amazon River.', explanation: 'Rivers take "the".' }
    ]
  },

  // === MIXED CONDITIONALS ===
  {
    id: 'mixed-conditionals',
    name: 'Mixed Conditionals',
    nameEs: 'Condicionales Mixtos',
    level: 7,
    category: 'conditionals',
    priority: 'medium',
    explanation: 'Combining different conditional types when the time in the if-clause is different from the main clause.',
    explanationEs: 'Combinando diferentes tipos condicionales cuando el tiempo en la cláusula if es diferente de la cláusula principal.',
    rules: [
      {
        rule: 'Type 1: Past condition → Present result (If + past perfect → would + base verb)',
        ruleEs: 'Tipo 1: Condición pasada → Resultado presente',
        examples: [
          { english: 'If I had studied medicine, I would be a doctor now.', spanish: 'Si hubiera estudiado medicina, sería doctor ahora.' },
          { english: 'If she hadn\'t moved, she would still live here.', spanish: 'Si no se hubiera mudado, todavía viviría aquí.' },
          { english: 'If I had saved money, I wouldn\'t be broke now.', spanish: 'Si hubiera ahorrado, no estaría en quiebra ahora.' }
        ]
      },
      {
        rule: 'Type 2: Present/general condition → Past result (If + past simple → would have + past participle)',
        ruleEs: 'Tipo 2: Condición presente/general → Resultado pasado',
        examples: [
          { english: 'If I were rich, I would have bought that house.', spanish: 'Si fuera rico, habría comprado esa casa.' },
          { english: 'If she spoke English, she would have gotten the job.', spanish: 'Si hablara inglés, habría conseguido el trabajo.' },
          { english: 'If I weren\'t so lazy, I would have finished by now.', spanish: 'Si no fuera tan perezoso, ya habría terminado.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'If I would have studied, I would be a doctor.', correct: 'If I had studied, I would be a doctor.', explanation: 'Don\'t use "would" in the if-clause.' }
    ]
  },

  // === INVERSION (ADVANCED) ===
  {
    id: 'inversion',
    name: 'Inversion (Formal/Literary)',
    nameEs: 'Inversión (Formal/Literario)',
    level: 8,
    category: 'advanced',
    priority: 'low',
    explanation: 'Inverting subject and auxiliary for emphasis, common in formal writing.',
    explanationEs: 'Invertir sujeto y auxiliar para énfasis, común en escritura formal.',
    rules: [
      {
        rule: 'After negative adverbs at the start: Never, Rarely, Seldom, Hardly, Scarcely, No sooner, Not only',
        ruleEs: 'Después de adverbios negativos al inicio',
        examples: [
          { english: 'Never have I seen such beauty.', spanish: 'Nunca he visto tal belleza.' },
          { english: 'Rarely do we get such opportunities.', spanish: 'Raramente tenemos tales oportunidades.' },
          { english: 'Hardly had I arrived when it started raining.', spanish: 'Apenas había llegado cuando empezó a llover.' },
          { english: 'Not only did he win, but he also broke the record.', spanish: 'No solo ganó, sino que también rompió el récord.' }
        ]
      },
      {
        rule: 'After "Only" expressions',
        ruleEs: 'Después de expresiones con "Only"',
        examples: [
          { english: 'Only then did I realize the truth.', spanish: 'Solo entonces me di cuenta de la verdad.' },
          { english: 'Only by working hard can you succeed.', spanish: 'Solo trabajando duro puedes tener éxito.' }
        ]
      },
      {
        rule: 'In conditional sentences (formal)',
        ruleEs: 'En oraciones condicionales (formal)',
        examples: [
          { english: 'Had I known, I would have helped. (= If I had known)', spanish: 'De haberlo sabido, habría ayudado.' },
          { english: 'Were she here, she would agree. (= If she were here)', spanish: 'Si ella estuviera aquí, estaría de acuerdo.' },
          { english: 'Should you need help, call me. (= If you should need)', spanish: 'Si necesitaras ayuda, llámame.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'Never I have seen...', correct: 'Never have I seen...', explanation: 'Invert auxiliary and subject after negative adverb.' }
    ]
  },

  // === CLEFT SENTENCES ===
  {
    id: 'cleft-sentences',
    name: 'Cleft Sentences',
    nameEs: 'Oraciones Hendidas (Cleft)',
    level: 7,
    category: 'advanced',
    priority: 'low',
    explanation: 'Sentences split into two parts to emphasize a particular element.',
    explanationEs: 'Oraciones divididas en dos partes para enfatizar un elemento particular.',
    rules: [
      {
        rule: 'It-cleft: It + be + focus + who/that + clause',
        ruleEs: 'It-cleft: It + be + foco + who/that + cláusula',
        examples: [
          { english: 'It was John who called you. (emphasizing John)', spanish: 'Fue John quien te llamó.' },
          { english: 'It\'s the price that worries me. (emphasizing price)', spanish: 'Es el precio lo que me preocupa.' },
          { english: 'It was in Paris that they met. (emphasizing place)', spanish: 'Fue en París donde se conocieron.' }
        ]
      },
      {
        rule: 'What-cleft: What + clause + be + focus',
        ruleEs: 'What-cleft: What + cláusula + be + foco',
        examples: [
          { english: 'What I need is a vacation. (emphasizing vacation)', spanish: 'Lo que necesito es unas vacaciones.' },
          { english: 'What she said was true.', spanish: 'Lo que dijo era verdad.' },
          { english: 'What happened was a disaster.', spanish: 'Lo que pasó fue un desastre.' }
        ]
      },
      {
        rule: 'All-cleft: All + clause + be + focus',
        ruleEs: 'All-cleft: All + cláusula + be + foco',
        examples: [
          { english: 'All I want is peace.', spanish: 'Todo lo que quiero es paz.' },
          { english: 'All you need to do is ask.', spanish: 'Todo lo que necesitas hacer es preguntar.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'It was John that called you. (for people)', correct: 'It was John who called you.', explanation: 'Use "who" for people (though "that" is accepted).' }
    ]
  },

  // === SUBJUNCTIVE ===
  {
    id: 'subjunctive',
    name: 'Subjunctive Mood',
    nameEs: 'Modo Subjuntivo',
    level: 6,
    category: 'advanced',
    priority: 'high',
    explanation: 'Used for wishes, demands, suggestions, and hypothetical situations.',
    explanationEs: 'Usado para deseos, demandas, sugerencias y situaciones hipotéticas.',
    rules: [
      {
        rule: 'After verbs of demand/suggestion: use base verb (no -s)',
        ruleEs: 'Después de verbos de demanda/sugerencia: usar verbo base (sin -s)',
        examples: [
          { english: 'I suggest (that) he go. (NOT goes)', spanish: 'Sugiero que vaya.' },
          { english: 'She demanded (that) he leave immediately.', spanish: 'Ella exigió que se fuera inmediatamente.' },
          { english: 'It\'s important (that) she be there.', spanish: 'Es importante que ella esté allí.' },
          { english: 'I recommend (that) the report be revised.', spanish: 'Recomiendo que el informe sea revisado.' }
        ]
      },
      {
        rule: 'Common verbs/expressions: suggest, recommend, demand, insist, request, propose, ask, it\'s essential/important/vital',
        ruleEs: 'Verbos/expresiones comunes: suggest, recommend, demand, insist, request, propose, ask, it\'s essential/important/vital',
        examples: [
          { english: 'The doctor insisted (that) she rest.', spanish: 'El doctor insistió en que descansara.' },
          { english: 'It\'s vital (that) he attend the meeting.', spanish: 'Es vital que asista a la reunión.' }
        ]
      },
      {
        rule: 'Fixed expressions with "be"',
        ruleEs: 'Expresiones fijas con "be"',
        examples: [
          { english: 'If I were you... (NOT was)', spanish: 'Si yo fuera tú...' },
          { english: 'If need be... (= if necessary)', spanish: 'Si es necesario...' },
          { english: 'Be that as it may... (= nevertheless)', spanish: 'Sea como sea...' },
          { english: 'Long live the King!', spanish: '¡Viva el Rey!' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'I suggest that he goes.', correct: 'I suggest that he go.', explanation: 'Subjunctive uses base verb, no -s.' },
      { wrong: 'If I was you...', correct: 'If I were you...', explanation: '"Were" is used for all persons in subjunctive.' }
    ]
  },

  // === PARTICIPLE CLAUSES ===
  {
    id: 'participle-clauses',
    name: 'Participle Clauses',
    nameEs: 'Cláusulas de Participio',
    level: 6,
    category: 'advanced',
    priority: 'high',
    explanation: 'Using participles (-ing or -ed) to combine sentences more elegantly.',
    explanationEs: 'Usar participios (-ing o -ed) para combinar oraciones más elegantemente.',
    rules: [
      {
        rule: 'Present participle (-ing): for actions happening at the same time or reason',
        ruleEs: 'Participio presente (-ing): para acciones simultáneas o razón',
        examples: [
          { english: 'Walking down the street, I saw an accident.', spanish: 'Caminando por la calle, vi un accidente.' },
          { english: 'Not knowing what to do, she called her mother.', spanish: 'Sin saber qué hacer, llamó a su madre.' },
          { english: 'Being tired, I went to bed early.', spanish: 'Estando cansado, me fui a dormir temprano.' }
        ]
      },
      {
        rule: 'Past participle (-ed): for passive meaning or completed action',
        ruleEs: 'Participio pasado (-ed): para significado pasivo o acción completada',
        examples: [
          { english: 'Written in 1605, the play is still popular.', spanish: 'Escrita en 1605, la obra sigue siendo popular.' },
          { english: 'Surprised by the news, she sat down.', spanish: 'Sorprendida por la noticia, se sentó.' },
          { english: 'Exhausted from the trip, we fell asleep immediately.', spanish: 'Agotados del viaje, nos dormimos inmediatamente.' }
        ]
      },
      {
        rule: 'Perfect participle (having + past participle): for action before main clause',
        ruleEs: 'Participio perfecto (having + participio pasado): para acción antes de la cláusula principal',
        examples: [
          { english: 'Having finished the work, I went home.', spanish: 'Habiendo terminado el trabajo, me fui a casa.' },
          { english: 'Having been warned, they were careful.', spanish: 'Habiendo sido advertidos, fueron cuidadosos.' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'Walking down the street, an accident happened.', correct: 'Walking down the street, I saw an accident.', explanation: 'The subject of the participle must match the subject of the main clause.' }
    ]
  },

  // === HEDGING LANGUAGE ===
  {
    id: 'hedging-language',
    name: 'Hedging Language',
    nameEs: 'Lenguaje Atenuador (Hedging)',
    level: 5,
    category: 'structures',
    priority: 'high',
    explanation: 'Language used to make statements less direct or more cautious.',
    explanationEs: 'Lenguaje usado para hacer declaraciones menos directas o más cautelosas.',
    rules: [
      {
        rule: 'Modal verbs for uncertainty',
        ruleEs: 'Verbos modales para incertidumbre',
        examples: [
          { english: 'This might be the problem.', spanish: 'Esto podría ser el problema.' },
          { english: 'It could be true.', spanish: 'Podría ser verdad.' },
          { english: 'That may explain it.', spanish: 'Eso puede explicarlo.' }
        ]
      },
      {
        rule: 'Adverbs of probability',
        ruleEs: 'Adverbios de probabilidad',
        examples: [
          { english: 'Perhaps/Maybe we should wait.', spanish: 'Quizás deberíamos esperar.' },
          { english: 'Probably the best option.', spanish: 'Probablemente la mejor opción.' },
          { english: 'It\'s possibly a mistake.', spanish: 'Posiblemente es un error.' }
        ]
      },
      {
        rule: 'Expressions of opinion',
        ruleEs: 'Expresiones de opinión',
        examples: [
          { english: 'It seems/appears that...', spanish: 'Parece que...' },
          { english: 'I tend to think...', spanish: 'Tiendo a pensar...' },
          { english: 'As far as I know...', spanish: 'Hasta donde sé...' },
          { english: 'From my perspective...', spanish: 'Desde mi perspectiva...' }
        ]
      },
      {
        rule: 'Softeners',
        ruleEs: 'Atenuadores',
        examples: [
          { english: 'It\'s kind of/sort of expensive.', spanish: 'Es algo/un poco caro.' },
          { english: 'I was wondering if...', spanish: 'Me preguntaba si...' },
          { english: 'Would you mind...?', spanish: '¿Te importaría...?' },
          { english: 'I\'m not entirely sure, but...', spanish: 'No estoy del todo seguro, pero...' }
        ]
      }
    ],
    commonMistakes: [
      { wrong: 'This is the problem.', correct: 'This might be the problem.', explanation: 'Use hedging when you\'re not 100% certain.' }
    ]
  },

  // === DISCOURSE MARKERS ===
  {
    id: 'discourse-markers',
    name: 'Discourse Markers & Linking Words',
    nameEs: 'Marcadores del Discurso y Conectores',
    level: 3,
    category: 'structures',
    priority: 'critical',
    explanation: 'Discourse markers are words and phrases that connect ideas, signal relationships between sentences, and guide the listener or reader through a text. They are essential for coherent, natural-sounding English.',
    explanationEs: 'Los marcadores del discurso son palabras y frases que conectan ideas, señalan relaciones entre oraciones y guían al oyente o lector a través de un texto. Son esenciales para un inglés coherente y natural.',
    rules: [
      {
        rule: 'Adding information',
        ruleEs: 'Añadir información',
        examples: [
          { english: 'Furthermore, the data supports this claim.', spanish: 'Además, los datos apoyan esta afirmación.' },
          { english: 'Moreover, the results were consistent.', spanish: 'Es más, los resultados fueron consistentes.' },
          { english: 'In addition, we should consider the cost.', spanish: 'Además, deberíamos considerar el coste.' },
          { english: "What's more, the experiment was repeatable.", spanish: 'Es más, el experimento era repetible.' }
        ]
      },
      {
        rule: 'Contrasting ideas',
        ruleEs: 'Contrastar ideas',
        examples: [
          { english: 'However, the results were unexpected.', spanish: 'Sin embargo, los resultados fueron inesperados.' },
          { english: 'Nevertheless, we continued with the plan.', spanish: 'No obstante, continuamos con el plan.' },
          { english: 'On the other hand, costs remain high.', spanish: 'Por otro lado, los costes siguen siendo altos.' },
          { english: 'That said, some progress was made.', spanish: 'Dicho esto, se hizo algún progreso.' },
          { english: 'Yet, there are alternatives.', spanish: 'Sin embargo, hay alternativas.' }
        ]
      },
      {
        rule: 'Cause and effect',
        ruleEs: 'Causa y efecto',
        examples: [
          { english: 'Therefore, we decided to stop.', spanish: 'Por lo tanto, decidimos parar.' },
          { english: 'As a result, the project was delayed.', spanish: 'Como resultado, el proyecto se retrasó.' },
          { english: 'Consequently, new rules were introduced.', spanish: 'En consecuencia, se introdujeron nuevas normas.' },
          { english: 'Hence, the need for better training.', spanish: 'De ahí la necesidad de una mejor formación.' },
          { english: 'Thus, the theory was proven.', spanish: 'Así, la teoría fue probada.' }
        ]
      },
      {
        rule: 'Sequencing',
        ruleEs: 'Secuenciar',
        examples: [
          { english: 'Firstly, we need to agree on the goals.', spanish: 'En primer lugar, necesitamos ponernos de acuerdo en los objetivos.' },
          { english: 'Subsequently, a report was published.', spanish: 'Posteriormente, se publicó un informe.' },
          { english: 'In the meantime, prepare your notes.', spanish: 'Mientras tanto, prepara tus notas.' },
          { english: 'Finally, the decision was announced.', spanish: 'Finalmente, se anunció la decisión.' }
        ]
      },
      {
        rule: 'Giving examples',
        ruleEs: 'Poner ejemplos',
        examples: [
          { english: 'For instance, many students struggle with articles.', spanish: 'Por ejemplo, muchos estudiantes tienen dificultad con los artículos.' },
          { english: 'Such as phonics, grammar, and vocabulary.', spanish: 'Como fonética, gramática y vocabulario.' },
          { english: 'Namely, the three key skills.', spanish: 'A saber, las tres habilidades clave.' },
          { english: 'To illustrate, consider the following case.', spanish: 'Para ilustrar, considera el siguiente caso.' }
        ]
      },
      {
        rule: 'Conceding a point',
        ruleEs: 'Conceder un punto',
        examples: [
          { english: 'Although it is expensive, the quality is excellent.', spanish: 'Aunque es caro, la calidad es excelente.' },
          { english: 'Despite the rain, the match continued.', spanish: 'A pesar de la lluvia, el partido continuó.' },
          { english: 'Even though he was tired, he finished the report.', spanish: 'A pesar de que estaba cansado, terminó el informe.' },
          { english: 'Admittedly, the plan has some weaknesses.', spanish: 'Es cierto que el plan tiene algunas debilidades.' }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: 'However I disagree.',
        correct: 'However, I disagree.',
        explanation: 'Discourse markers at the start of a sentence are always followed by a comma.'
      },
      {
        wrong: 'Despite that he was tired.',
        correct: 'Despite being tired. / Despite the fact that he was tired.',
        explanation: '"Despite" is followed by a noun phrase or "the fact that," not a clause directly.'
      },
      {
        wrong: 'Although she was late, but she apologised.',
        correct: 'Although she was late, she apologised.',
        explanation: 'Do not use "but" after "although" — they both introduce contrast.'
      },
      {
        wrong: 'Furthermore it adds clarity.',
        correct: 'Furthermore, it adds clarity.',
        explanation: 'Always use a comma after a sentence-initial discourse marker.'
      }
    ]
  }
];

// Helper functions
export const getAdditionalGrammarByCategory = (category: AdditionalGrammar['category']): AdditionalGrammar[] => {
  return additionalGrammar.filter(g => g.category === category);
};

export const getAdditionalGrammarByLevel = (level: number): AdditionalGrammar[] => {
  return additionalGrammar.filter(g => g.level <= level);
};

export const getAdditionalGrammarByPriority = (priority: AdditionalGrammar['priority']): AdditionalGrammar[] => {
  return additionalGrammar.filter(g => g.priority === priority);
};

export default additionalGrammar;
