// Grammar Trees - Visual representations of grammar structures
// Interactive grammar explanations with examples

export interface GrammarTree {
  id: string;
  name: string;
  nameEs: string;
  category: 'tenses' | 'conditionals' | 'modals' | 'clauses' | 'structures';
  level: 1 | 2 | 3 | 4;
  description: string;
  descriptionEs: string;
  structure: GrammarStructure;
  examples: GrammarExample[];
  commonMistakes: GrammarMistake[];
  relatedTopics: string[];
  timeline?: TimelinePoint[]; // For tenses
  comparison?: GrammarComparison[]; // For comparing similar structures
}

export interface GrammarStructure {
  formula: string;
  formulaEs: string;
  components: {
    name: string;
    nameEs: string;
    examples: string[];
    optional?: boolean;
  }[];
  negativeFormula?: string;
  questionFormula?: string;
}

export interface GrammarExample {
  sentence: string;
  translation: string;
  breakdown: {
    part: string;
    role: string;
    roleEs: string;
  }[];
  context?: string;
  contextEs?: string;
}

export interface GrammarMistake {
  wrong: string;
  correct: string;
  explanation: string;
  explanationEs: string;
}

export interface TimelinePoint {
  position: 'past' | 'present' | 'future';
  label: string;
  labelEs: string;
  description: string;
  descriptionEs: string;
}

export interface GrammarComparison {
  tense1: string;
  tense2: string;
  difference: string;
  differenceEs: string;
  example1: string;
  example2: string;
}

export const GRAMMAR_TREES: GrammarTree[] = [
  // ==================== TENSES ====================
  {
    id: 'present-simple',
    name: 'Present Simple',
    nameEs: 'Presente Simple',
    category: 'tenses',
    level: 1,
    description: 'Used for habits, routines, general truths, and permanent states',
    descriptionEs: 'Se usa para hábitos, rutinas, verdades generales y estados permanentes',
    structure: {
      formula: 'Subject + Verb (base form / -s/-es for he/she/it)',
      formulaEs: 'Sujeto + Verbo (forma base / -s/-es para he/she/it)',
      components: [
        { name: 'Subject', nameEs: 'Sujeto', examples: ['I', 'You', 'He', 'She', 'We', 'They'] },
        { name: 'Verb', nameEs: 'Verbo', examples: ['work', 'works', 'study', 'studies'] },
        { name: 'Complement', nameEs: 'Complemento', examples: ['every day', 'at home', 'English'], optional: true },
      ],
      negativeFormula: 'Subject + do/does + not + Verb (base)',
      questionFormula: 'Do/Does + Subject + Verb (base)?',
    },
    examples: [
      {
        sentence: 'She works at a hospital.',
        translation: 'Ella trabaja en un hospital.',
        breakdown: [
          { part: 'She', role: 'Subject (3rd person singular)', roleEs: 'Sujeto (3ra persona singular)' },
          { part: 'works', role: 'Verb + s (because "she")', roleEs: 'Verbo + s (porque es "she")' },
          { part: 'at a hospital', role: 'Place complement', roleEs: 'Complemento de lugar' },
        ],
        context: 'Describing someone\'s job',
        contextEs: 'Describiendo el trabajo de alguien',
      },
      {
        sentence: 'Water boils at 100 degrees Celsius.',
        translation: 'El agua hierve a 100 grados Celsius.',
        breakdown: [
          { part: 'Water', role: 'Subject (3rd person singular)', roleEs: 'Sujeto (3ra persona singular)' },
          { part: 'boils', role: 'Verb + s', roleEs: 'Verbo + s' },
          { part: 'at 100 degrees', role: 'Temperature complement', roleEs: 'Complemento de temperatura' },
        ],
        context: 'Scientific fact / general truth',
        contextEs: 'Hecho científico / verdad general',
      },
    ],
    commonMistakes: [
      {
        wrong: 'She work at a hospital.',
        correct: 'She works at a hospital.',
        explanation: 'Third person singular (he/she/it) requires -s on the verb.',
        explanationEs: 'La tercera persona singular (he/she/it) requiere -s en el verbo.',
      },
      {
        wrong: 'He don\'t like coffee.',
        correct: 'He doesn\'t like coffee.',
        explanation: 'Use "doesn\'t" (not "don\'t") with he/she/it.',
        explanationEs: 'Usa "doesn\'t" (no "don\'t") con he/she/it.',
      },
    ],
    timeline: [
      { position: 'past', label: 'Past', labelEs: 'Pasado', description: 'Also applies to past', descriptionEs: 'También aplica al pasado' },
      { position: 'present', label: 'NOW', labelEs: 'AHORA', description: 'Regular/habitual action', descriptionEs: 'Acción regular/habitual' },
      { position: 'future', label: 'Future', labelEs: 'Futuro', description: 'Also applies to future', descriptionEs: 'También aplica al futuro' },
    ],
    relatedTopics: ['present-continuous', 'past-simple'],
  },
  {
    id: 'present-continuous',
    name: 'Present Continuous',
    nameEs: 'Presente Continuo',
    category: 'tenses',
    level: 1,
    description: 'Used for actions happening now or temporary situations',
    descriptionEs: 'Se usa para acciones que suceden ahora o situaciones temporales',
    structure: {
      formula: 'Subject + am/is/are + Verb-ing',
      formulaEs: 'Sujeto + am/is/are + Verbo-ing',
      components: [
        { name: 'Subject', nameEs: 'Sujeto', examples: ['I', 'You', 'He', 'She', 'We', 'They'] },
        { name: 'Be', nameEs: 'Ser/Estar', examples: ['am (I)', 'is (he/she/it)', 'are (you/we/they)'] },
        { name: 'Verb-ing', nameEs: 'Verbo-ing', examples: ['working', 'studying', 'eating'] },
      ],
      negativeFormula: 'Subject + am/is/are + not + Verb-ing',
      questionFormula: 'Am/Is/Are + Subject + Verb-ing?',
    },
    examples: [
      {
        sentence: 'I am studying English right now.',
        translation: 'Estoy estudiando inglés ahora mismo.',
        breakdown: [
          { part: 'I', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'am', role: 'Auxiliary verb (for "I")', roleEs: 'Verbo auxiliar (para "I")' },
          { part: 'studying', role: 'Main verb + ing', roleEs: 'Verbo principal + ing' },
          { part: 'English', role: 'Object', roleEs: 'Objeto' },
          { part: 'right now', role: 'Time expression', roleEs: 'Expresión de tiempo' },
        ],
      },
      {
        sentence: 'They are working on a new project this month.',
        translation: 'Están trabajando en un nuevo proyecto este mes.',
        breakdown: [
          { part: 'They', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'are', role: 'Auxiliary verb (for "they")', roleEs: 'Verbo auxiliar (para "they")' },
          { part: 'working', role: 'Main verb + ing', roleEs: 'Verbo principal + ing' },
          { part: 'on a new project', role: 'Complement', roleEs: 'Complemento' },
          { part: 'this month', role: 'Temporary time period', roleEs: 'Período temporal' },
        ],
        context: 'Temporary project',
        contextEs: 'Proyecto temporal',
      },
    ],
    commonMistakes: [
      {
        wrong: 'I studying English.',
        correct: 'I am studying English.',
        explanation: 'Present continuous requires the auxiliary verb "be" (am/is/are).',
        explanationEs: 'El presente continuo requiere el verbo auxiliar "be" (am/is/are).',
      },
      {
        wrong: 'She is work now.',
        correct: 'She is working now.',
        explanation: 'The main verb must have -ing ending.',
        explanationEs: 'El verbo principal debe tener terminación -ing.',
      },
    ],
    timeline: [
      { position: 'present', label: 'NOW', labelEs: 'AHORA', description: 'Action in progress', descriptionEs: 'Acción en progreso' },
    ],
    comparison: [
      {
        tense1: 'Present Simple',
        tense2: 'Present Continuous',
        difference: 'Simple = habit/routine. Continuous = happening now/temporary.',
        differenceEs: 'Simple = hábito/rutina. Continuo = sucediendo ahora/temporal.',
        example1: 'I work at a bank. (my job)',
        example2: 'I\'m working from home today. (temporary)',
      },
    ],
    relatedTopics: ['present-simple', 'past-continuous'],
  },
  {
    id: 'past-simple',
    name: 'Past Simple',
    nameEs: 'Pasado Simple',
    category: 'tenses',
    level: 1,
    description: 'Used for completed actions in the past with a specific time',
    descriptionEs: 'Se usa para acciones completadas en el pasado con un tiempo específico',
    structure: {
      formula: 'Subject + Verb (past form: -ed or irregular)',
      formulaEs: 'Sujeto + Verbo (forma pasada: -ed o irregular)',
      components: [
        { name: 'Subject', nameEs: 'Sujeto', examples: ['I', 'You', 'He', 'She', 'We', 'They'] },
        { name: 'Verb (past)', nameEs: 'Verbo (pasado)', examples: ['worked', 'studied', 'went', 'had'] },
        { name: 'Time expression', nameEs: 'Expresión de tiempo', examples: ['yesterday', 'last week', 'in 2020'], optional: true },
      ],
      negativeFormula: 'Subject + did + not + Verb (base)',
      questionFormula: 'Did + Subject + Verb (base)?',
    },
    examples: [
      {
        sentence: 'I visited Paris last summer.',
        translation: 'Visité París el verano pasado.',
        breakdown: [
          { part: 'I', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'visited', role: 'Regular verb + ed', roleEs: 'Verbo regular + ed' },
          { part: 'Paris', role: 'Place', roleEs: 'Lugar' },
          { part: 'last summer', role: 'Past time expression', roleEs: 'Expresión de tiempo pasado' },
        ],
      },
      {
        sentence: 'She went to the store and bought some milk.',
        translation: 'Ella fue a la tienda y compró leche.',
        breakdown: [
          { part: 'She', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'went', role: 'Irregular verb (go → went)', roleEs: 'Verbo irregular (go → went)' },
          { part: 'bought', role: 'Irregular verb (buy → bought)', roleEs: 'Verbo irregular (buy → bought)' },
        ],
        context: 'Sequence of past actions',
        contextEs: 'Secuencia de acciones pasadas',
      },
    ],
    commonMistakes: [
      {
        wrong: 'I goed to school.',
        correct: 'I went to school.',
        explanation: '"Go" is irregular: go → went → gone',
        explanationEs: '"Go" es irregular: go → went → gone',
      },
      {
        wrong: 'Did you went there?',
        correct: 'Did you go there?',
        explanation: 'After "did", use the base form of the verb (not past).',
        explanationEs: 'Después de "did", usa la forma base del verbo (no pasado).',
      },
    ],
    timeline: [
      { position: 'past', label: 'Action', labelEs: 'Acción', description: 'Completed action', descriptionEs: 'Acción completada' },
      { position: 'present', label: 'NOW', labelEs: 'AHORA', description: 'Speaking moment', descriptionEs: 'Momento de hablar' },
    ],
    relatedTopics: ['present-perfect', 'past-continuous'],
  },
  {
    id: 'present-perfect',
    name: 'Present Perfect',
    nameEs: 'Presente Perfecto',
    category: 'tenses',
    level: 2,
    description: 'Connects past to present: experiences, recent events, unfinished time',
    descriptionEs: 'Conecta pasado con presente: experiencias, eventos recientes, tiempo sin terminar',
    structure: {
      formula: 'Subject + have/has + Past Participle',
      formulaEs: 'Sujeto + have/has + Participio Pasado',
      components: [
        { name: 'Subject', nameEs: 'Sujeto', examples: ['I', 'You', 'He', 'She', 'We', 'They'] },
        { name: 'Have/Has', nameEs: 'Have/Has', examples: ['have (I/you/we/they)', 'has (he/she/it)'] },
        { name: 'Past Participle', nameEs: 'Participio Pasado', examples: ['worked', 'studied', 'gone', 'been'] },
      ],
      negativeFormula: 'Subject + have/has + not + Past Participle',
      questionFormula: 'Have/Has + Subject + Past Participle?',
    },
    examples: [
      {
        sentence: 'I have visited Japan twice.',
        translation: 'He visitado Japón dos veces.',
        breakdown: [
          { part: 'I', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'have', role: 'Auxiliary (for I/you/we/they)', roleEs: 'Auxiliar (para I/you/we/they)' },
          { part: 'visited', role: 'Past participle (regular)', roleEs: 'Participio pasado (regular)' },
          { part: 'Japan', role: 'Object', roleEs: 'Objeto' },
          { part: 'twice', role: 'Frequency', roleEs: 'Frecuencia' },
        ],
        context: 'Life experience (no specific time)',
        contextEs: 'Experiencia de vida (sin tiempo específico)',
      },
      {
        sentence: 'She has lived here for five years.',
        translation: 'Ella ha vivido aquí por cinco años.',
        breakdown: [
          { part: 'She', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'has', role: 'Auxiliary (for he/she/it)', roleEs: 'Auxiliar (para he/she/it)' },
          { part: 'lived', role: 'Past participle', roleEs: 'Participio pasado' },
          { part: 'here', role: 'Place', roleEs: 'Lugar' },
          { part: 'for five years', role: 'Duration (FOR + period)', roleEs: 'Duración (FOR + período)' },
        ],
        context: 'Unfinished time (still lives here)',
        contextEs: 'Tiempo sin terminar (todavía vive aquí)',
      },
    ],
    commonMistakes: [
      {
        wrong: 'I have visited Paris last year.',
        correct: 'I visited Paris last year.',
        explanation: 'Don\'t use Present Perfect with specific past times (yesterday, last year, in 2020).',
        explanationEs: 'No uses Presente Perfecto con tiempos pasados específicos (ayer, el año pasado, en 2020).',
      },
      {
        wrong: 'She has went to the store.',
        correct: 'She has gone to the store.',
        explanation: 'Use the past participle (gone), not the past simple (went).',
        explanationEs: 'Usa el participio pasado (gone), no el pasado simple (went).',
      },
    ],
    timeline: [
      { position: 'past', label: 'Started', labelEs: 'Comenzó', description: 'Action began', descriptionEs: 'Acción comenzó' },
      { position: 'present', label: 'NOW', labelEs: 'AHORA', description: 'Connection to present', descriptionEs: 'Conexión al presente' },
    ],
    comparison: [
      {
        tense1: 'Present Perfect',
        tense2: 'Past Simple',
        difference: 'Perfect = no specific time, connects to now. Simple = specific time, finished.',
        differenceEs: 'Perfecto = sin tiempo específico, conecta al ahora. Simple = tiempo específico, terminado.',
        example1: 'I have seen that movie. (sometime in my life)',
        example2: 'I saw that movie yesterday. (specific time)',
      },
    ],
    relatedTopics: ['past-simple', 'present-perfect-continuous'],
  },
  // ==================== CONDITIONALS ====================
  {
    id: 'first-conditional',
    name: 'First Conditional',
    nameEs: 'Primer Condicional',
    category: 'conditionals',
    level: 2,
    description: 'Real/possible situations in the future',
    descriptionEs: 'Situaciones reales/posibles en el futuro',
    structure: {
      formula: 'If + Present Simple, will + base verb',
      formulaEs: 'If + Presente Simple, will + verbo base',
      components: [
        { name: 'If clause', nameEs: 'Cláusula If', examples: ['If it rains', 'If you study', 'If they come'] },
        { name: 'Result clause', nameEs: 'Cláusula resultado', examples: ['I will stay home', 'you will pass', 'we will be happy'] },
      ],
      negativeFormula: 'If + Present Simple, will not + base verb',
      questionFormula: 'Will you... if + Present Simple?',
    },
    examples: [
      {
        sentence: 'If it rains tomorrow, I will stay at home.',
        translation: 'Si llueve mañana, me quedaré en casa.',
        breakdown: [
          { part: 'If', role: 'Condition introducer', roleEs: 'Introductor de condición' },
          { part: 'it rains', role: 'Present simple (condition)', roleEs: 'Presente simple (condición)' },
          { part: 'tomorrow', role: 'Future time', roleEs: 'Tiempo futuro' },
          { part: 'I will stay', role: 'Will + base (result)', roleEs: 'Will + base (resultado)' },
          { part: 'at home', role: 'Place', roleEs: 'Lugar' },
        ],
        context: 'Possible future event',
        contextEs: 'Evento futuro posible',
      },
    ],
    commonMistakes: [
      {
        wrong: 'If it will rain, I will stay home.',
        correct: 'If it rains, I will stay home.',
        explanation: 'Don\'t use "will" in the if-clause. Use present simple.',
        explanationEs: 'No uses "will" en la cláusula if. Usa presente simple.',
      },
    ],
    timeline: [
      { position: 'present', label: 'Condition', labelEs: 'Condición', description: 'If this happens...', descriptionEs: 'Si esto pasa...' },
      { position: 'future', label: 'Result', labelEs: 'Resultado', description: '...this will happen', descriptionEs: '...esto pasará' },
    ],
    relatedTopics: ['second-conditional', 'third-conditional'],
  },
  {
    id: 'second-conditional',
    name: 'Second Conditional',
    nameEs: 'Segundo Condicional',
    category: 'conditionals',
    level: 2,
    description: 'Hypothetical/unreal situations in the present or future',
    descriptionEs: 'Situaciones hipotéticas/irreales en el presente o futuro',
    structure: {
      formula: 'If + Past Simple, would + base verb',
      formulaEs: 'If + Pasado Simple, would + verbo base',
      components: [
        { name: 'If clause', nameEs: 'Cláusula If', examples: ['If I had money', 'If I were you', 'If she knew'] },
        { name: 'Result clause', nameEs: 'Cláusula resultado', examples: ['I would buy', 'I would tell him', 'she would help'] },
      ],
      negativeFormula: 'If + Past Simple, would not + base verb',
      questionFormula: 'Would you... if + Past Simple?',
    },
    examples: [
      {
        sentence: 'If I won the lottery, I would travel the world.',
        translation: 'Si ganara la lotería, viajaría por el mundo.',
        breakdown: [
          { part: 'If', role: 'Condition introducer', roleEs: 'Introductor de condición' },
          { part: 'I won', role: 'Past simple (hypothetical)', roleEs: 'Pasado simple (hipotético)' },
          { part: 'the lottery', role: 'Object', roleEs: 'Objeto' },
          { part: 'I would travel', role: 'Would + base (result)', roleEs: 'Would + base (resultado)' },
          { part: 'the world', role: 'Object', roleEs: 'Objeto' },
        ],
        context: 'Unlikely/imaginary situation',
        contextEs: 'Situación improbable/imaginaria',
      },
      {
        sentence: 'If I were you, I would accept the offer.',
        translation: 'Si yo fuera tú, aceptaría la oferta.',
        breakdown: [
          { part: 'If I were', role: '"Were" for all subjects (formal)', roleEs: '"Were" para todos los sujetos (formal)' },
          { part: 'you', role: 'Imagining being someone else', roleEs: 'Imaginando ser otra persona' },
          { part: 'I would accept', role: 'Would + base (advice)', roleEs: 'Would + base (consejo)' },
        ],
        context: 'Giving advice',
        contextEs: 'Dando consejo',
      },
    ],
    commonMistakes: [
      {
        wrong: 'If I would have money, I would buy a car.',
        correct: 'If I had money, I would buy a car.',
        explanation: 'Don\'t use "would" in the if-clause. Use past simple.',
        explanationEs: 'No uses "would" en la cláusula if. Usa pasado simple.',
      },
      {
        wrong: 'If I was you, I would go.',
        correct: 'If I were you, I would go.',
        explanation: 'In formal English, use "were" for all subjects in second conditional.',
        explanationEs: 'En inglés formal, usa "were" para todos los sujetos en el segundo condicional.',
      },
    ],
    comparison: [
      {
        tense1: 'First Conditional',
        tense2: 'Second Conditional',
        difference: 'First = possible. Second = unlikely/hypothetical.',
        differenceEs: 'Primero = posible. Segundo = improbable/hipotético.',
        example1: 'If it rains, I will take an umbrella. (possible)',
        example2: 'If it rained diamonds, I would be rich. (impossible)',
      },
    ],
    relatedTopics: ['first-conditional', 'third-conditional'],
  },
  // ==================== MODALS ====================
  {
    id: 'modal-can-could',
    name: 'Can / Could',
    nameEs: 'Can / Could',
    category: 'modals',
    level: 1,
    description: 'Express ability, permission, and possibility',
    descriptionEs: 'Expresan habilidad, permiso y posibilidad',
    structure: {
      formula: 'Subject + can/could + base verb',
      formulaEs: 'Sujeto + can/could + verbo base',
      components: [
        { name: 'Subject', nameEs: 'Sujeto', examples: ['I', 'You', 'He', 'She', 'We', 'They'] },
        { name: 'Modal', nameEs: 'Modal', examples: ['can', 'could'] },
        { name: 'Base verb', nameEs: 'Verbo base', examples: ['swim', 'speak', 'help'] },
      ],
      negativeFormula: 'Subject + can\'t/couldn\'t + base verb',
      questionFormula: 'Can/Could + Subject + base verb?',
    },
    examples: [
      {
        sentence: 'I can speak three languages.',
        translation: 'Puedo hablar tres idiomas.',
        breakdown: [
          { part: 'I', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'can', role: 'Modal (present ability)', roleEs: 'Modal (habilidad presente)' },
          { part: 'speak', role: 'Base verb (no "to")', roleEs: 'Verbo base (sin "to")' },
          { part: 'three languages', role: 'Object', roleEs: 'Objeto' },
        ],
        context: 'Present ability',
        contextEs: 'Habilidad presente',
      },
      {
        sentence: 'Could you help me, please?',
        translation: '¿Podrías ayudarme, por favor?',
        breakdown: [
          { part: 'Could', role: 'Modal (polite request)', roleEs: 'Modal (solicitud cortés)' },
          { part: 'you', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'help', role: 'Base verb', roleEs: 'Verbo base' },
          { part: 'me', role: 'Object', roleEs: 'Objeto' },
        ],
        context: 'Polite request',
        contextEs: 'Solicitud cortés',
      },
    ],
    commonMistakes: [
      {
        wrong: 'I can to swim.',
        correct: 'I can swim.',
        explanation: 'Don\'t use "to" after modal verbs.',
        explanationEs: 'No uses "to" después de verbos modales.',
      },
      {
        wrong: 'He cans speak English.',
        correct: 'He can speak English.',
        explanation: 'Modal verbs don\'t change form (no -s for he/she/it).',
        explanationEs: 'Los verbos modales no cambian de forma (sin -s para he/she/it).',
      },
    ],
    comparison: [
      {
        tense1: 'Can',
        tense2: 'Could',
        difference: 'Can = present ability/permission. Could = past ability, polite requests, possibility.',
        differenceEs: 'Can = habilidad/permiso presente. Could = habilidad pasada, solicitudes corteses, posibilidad.',
        example1: 'I can drive. (present ability)',
        example2: 'I could drive when I was 18. (past ability)',
      },
    ],
    relatedTopics: ['modal-must-have-to', 'modal-should-ought'],
  },

  // ==================== TENSES (Intermediate) ====================
  {
    id: 'past-continuous',
    name: 'Past Continuous',
    nameEs: 'Pasado Continuo',
    category: 'tenses',
    level: 2,
    description: 'Used for actions in progress at a specific past moment, or providing background for a narrative',
    descriptionEs: 'Se usa para acciones en progreso en un momento pasado específico o para dar el contexto de una narración',
    structure: {
      formula: 'Subject + was/were + Verb(-ing)',
      formulaEs: 'Sujeto + was/were + Verbo(-ing)',
      components: [
        { name: 'Subject', nameEs: 'Sujeto', examples: ['I', 'She', 'They'] },
        { name: 'was / were', nameEs: 'was / were', examples: ['was (I/he/she/it)', 'were (you/we/they)'] },
        { name: 'Verb-ing', nameEs: 'Verbo-ing', examples: ['working', 'reading', 'running'] },
      ],
      negativeFormula: 'Subject + was/were + not + Verb(-ing)',
      questionFormula: 'Was/Were + Subject + Verb(-ing)?',
    },
    examples: [
      {
        sentence: 'She was reading when the phone rang.',
        translation: 'Ella estaba leyendo cuando sonó el teléfono.',
        breakdown: [
          { part: 'She', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'was reading', role: 'Past Continuous (background action)', roleEs: 'Pasado Continuo (acción de fondo)' },
          { part: 'when the phone rang', role: 'Interrupting event (Past Simple)', roleEs: 'Evento interrumptor (Pasado Simple)' },
        ],
        context: 'Background action interrupted by a shorter past event.',
        contextEs: 'Acción de fondo interrumpida por un evento pasado más corto.',
      },
      {
        sentence: 'They were working on the project all afternoon.',
        translation: 'Estaban trabajando en el proyecto toda la tarde.',
        breakdown: [
          { part: 'They', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'were working', role: 'Past Continuous (extended duration)', roleEs: 'Pasado Continuo (duración extendida)' },
          { part: 'all afternoon', role: 'Time expression', roleEs: 'Expresión de tiempo' },
        ],
      },
    ],
    commonMistakes: [
      { wrong: 'I was knowing the answer.', correct: 'I knew the answer.', explanation: 'Stative verbs (know, believe, understand) do not use continuous forms.', explanationEs: 'Los verbos estativos (saber, creer, entender) no usan formas continuas.' },
      { wrong: 'She were working.', correct: 'She was working.', explanation: 'Use "was" with I / he / she / it.', explanationEs: 'Usa "was" con I / he / she / it.' },
    ],
    comparison: [
      { tense1: 'Past Simple', tense2: 'Past Continuous', difference: 'Past Simple = completed action. Past Continuous = ongoing background action.', differenceEs: 'Pasado Simple = acción completada. Pasado Continuo = acción de fondo en progreso.', example1: 'I read a book. (completed)', example2: 'I was reading a book. (in progress at a past moment)' },
    ],
    relatedTopics: ['past-simple', 'past-perfect'],
  },

  {
    id: 'past-perfect',
    name: 'Past Perfect',
    nameEs: 'Pasado Perfecto (Pluscuamperfecto)',
    category: 'tenses',
    level: 2,
    description: 'Used for actions completed before another past action or before a specific past time',
    descriptionEs: 'Se usa para acciones completadas antes de otra acción pasada o antes de un tiempo pasado específico',
    structure: {
      formula: 'Subject + had + Past Participle',
      formulaEs: 'Sujeto + had + Participio Pasado',
      components: [
        { name: 'Subject', nameEs: 'Sujeto', examples: ['I', 'He', 'They'] },
        { name: 'had', nameEs: 'had', examples: ['had (all persons)'] },
        { name: 'Past Participle', nameEs: 'Participio Pasado', examples: ['eaten', 'finished', 'gone', 'written'] },
      ],
      negativeFormula: 'Subject + had + not + Past Participle',
      questionFormula: 'Had + Subject + Past Participle?',
    },
    examples: [
      {
        sentence: 'By the time she arrived, he had already left.',
        translation: 'Para cuando ella llegó, él ya se había ido.',
        breakdown: [
          { part: 'By the time she arrived', role: 'Reference past time (Past Simple)', roleEs: 'Tiempo pasado de referencia (Pasado Simple)' },
          { part: 'he', role: 'Subject', roleEs: 'Sujeto' },
          { part: 'had already left', role: 'Earlier action (Past Perfect)', roleEs: 'Acción anterior (Pasado Perfecto)' },
        ],
        context: '"Left" happened before "arrived" — Past Perfect marks the earlier event.',
        contextEs: '"Se fue" ocurrió antes que "llegó" — el Pasado Perfecto marca el evento anterior.',
      },
    ],
    commonMistakes: [
      { wrong: 'When I arrived, she already left.', correct: 'When I arrived, she had already left.', explanation: 'Use Past Perfect for the action that happened first.', explanationEs: 'Usa el Pasado Perfecto para la acción que ocurrió primero.' },
      { wrong: 'I had went to the store.', correct: 'I had gone to the store.', explanation: '"Gone" is the past participle of "go", not "went".', explanationEs: '"Gone" es el participio pasado de "go", no "went".' },
    ],
    timeline: [
      { position: 'past', label: 'Earlier past action', labelEs: 'Acción pasada anterior', description: 'Expressed with Past Perfect (had + PP)', descriptionEs: 'Expresada con Pasado Perfecto (had + PP)' },
      { position: 'past', label: 'Later past action / reference point', labelEs: 'Acción pasada posterior / punto de referencia', description: 'Expressed with Past Simple', descriptionEs: 'Expresada con Pasado Simple' },
      { position: 'present', label: 'Now', labelEs: 'Ahora', description: 'Speaker\'s current point of view', descriptionEs: 'Punto de vista actual del hablante' },
    ],
    relatedTopics: ['past-simple', 'past-continuous', 'third-conditional'],
  },

  // ==================== CONDITIONALS (Advanced) ====================
  {
    id: 'third-conditional',
    name: 'Third Conditional',
    nameEs: 'Tercera Condicional',
    category: 'conditionals',
    level: 3,
    description: 'Used to speculate about impossible past situations — things that did not happen',
    descriptionEs: 'Se usa para especular sobre situaciones pasadas imposibles — cosas que no ocurrieron',
    structure: {
      formula: 'If + Past Perfect, would/could/might + have + Past Participle',
      formulaEs: 'If + Pasado Perfecto, would/could/might + have + Participio Pasado',
      components: [
        { name: 'If-clause (condition)', nameEs: 'Oración If (condición)', examples: ['If I had studied harder', 'If she had told me', 'If they had left earlier'] },
        { name: 'Modal', nameEs: 'Modal', examples: ['would have', 'could have', 'might have'] },
        { name: 'Main clause result', nameEs: 'Resultado (oración principal)', examples: ['I would have passed', 'I could have helped', 'they might have arrived'] },
      ],
    },
    examples: [
      {
        sentence: 'If I had studied harder, I would have passed the exam.',
        translation: 'Si hubiera estudiado más, habría aprobado el examen.',
        breakdown: [
          { part: 'If I had studied harder', role: 'Impossible past condition (Past Perfect)', roleEs: 'Condición pasada imposible (Pasado Perfecto)' },
          { part: 'I would have passed', role: 'Imaginary past result (would + have + PP)', roleEs: 'Resultado pasado imaginario (would + have + PP)' },
        ],
        context: 'The speaker did NOT study hard and did NOT pass — pure speculation about the past.',
        contextEs: 'El hablante NO estudió mucho y NO aprobó — especulación pura sobre el pasado.',
      },
      {
        sentence: 'If she had told me about the meeting, I could have attended.',
        translation: 'Si me hubiera dicho lo de la reunión, podría haber asistido.',
        breakdown: [
          { part: 'If she had told me', role: 'Unreal past condition', roleEs: 'Condición pasada irreal' },
          { part: 'I could have attended', role: 'Past possibility result', roleEs: 'Resultado de posibilidad pasada' },
        ],
      },
    ],
    commonMistakes: [
      { wrong: 'If I would have known, I would have told you.', correct: 'If I had known, I would have told you.', explanation: 'Never use "would have" in the if-clause of a third conditional.', explanationEs: 'Nunca uses "would have" en la oración if de una tercera condicional.' },
      { wrong: 'If I had knew, I would have come.', correct: 'If I had known, I would have come.', explanation: 'Use the past participle (known), not the past simple (knew).', explanationEs: 'Usa el participio pasado (known), no el pasado simple (knew).' },
    ],
    comparison: [
      { tense1: 'Second Conditional', tense2: 'Third Conditional', difference: 'Second = unreal present/future. Third = unreal past.', differenceEs: 'Segunda = presente/futuro irreal. Tercera = pasado irreal.', example1: 'If I had money, I would travel. (hypothetical now)', example2: 'If I had had money, I would have travelled. (impossible past)' },
    ],
    relatedTopics: ['second-conditional', 'past-perfect'],
  },

  // ==================== STRUCTURES ====================
  {
    id: 'passive-voice',
    name: 'Passive Voice',
    nameEs: 'Voz Pasiva',
    category: 'structures',
    level: 2,
    description: 'Used when the focus is on the action or the receiver of the action, rather than the agent',
    descriptionEs: 'Se usa cuando el foco está en la acción o el receptor de la acción, no en el agente',
    structure: {
      formula: 'Subject (receiver) + be (conjugated) + Past Participle [+ by + agent]',
      formulaEs: 'Sujeto (receptor) + be (conjugado) + Participio Pasado [+ by + agente]',
      components: [
        { name: 'Subject (receiver)', nameEs: 'Sujeto (receptor)', examples: ['The letter', 'The project', 'The report'] },
        { name: 'Auxiliary "be"', nameEs: 'Auxiliar "be"', examples: ['is / are (present)', 'was / were (past)', 'will be (future)', 'has/have been (present perfect)'] },
        { name: 'Past Participle', nameEs: 'Participio Pasado', examples: ['written', 'completed', 'sent', 'built'] },
        { name: 'by + agent', nameEs: 'by + agente', examples: ['by the manager', 'by the team'], optional: true },
      ],
      negativeFormula: 'Subject + be + not + Past Participle',
      questionFormula: 'Be + Subject + Past Participle?',
    },
    examples: [
      {
        sentence: 'The report was written by the research team.',
        translation: 'El informe fue escrito por el equipo de investigación.',
        breakdown: [
          { part: 'The report', role: 'Subject (receiver of action)', roleEs: 'Sujeto (receptor de la acción)' },
          { part: 'was written', role: 'Passive form (Past Simple passive)', roleEs: 'Forma pasiva (Pasado Simple pasivo)' },
          { part: 'by the research team', role: 'Agent (optional)', roleEs: 'Agente (opcional)' },
        ],
        context: 'Focus on the report, not who wrote it.',
        contextEs: 'El foco está en el informe, no en quién lo escribió.',
      },
      {
        sentence: 'The new bridge will be completed next year.',
        translation: 'El nuevo puente será completado el año que viene.',
        breakdown: [
          { part: 'The new bridge', role: 'Subject (receiver)', roleEs: 'Sujeto (receptor)' },
          { part: 'will be completed', role: 'Future passive', roleEs: 'Pasivo futuro' },
          { part: 'next year', role: 'Time expression', roleEs: 'Expresión de tiempo' },
        ],
      },
    ],
    commonMistakes: [
      { wrong: 'The letter was wrote yesterday.', correct: 'The letter was written yesterday.', explanation: 'Use the past participle (written), not the past simple (wrote).', explanationEs: 'Usa el participio pasado (written), no el pasado simple (wrote).' },
      { wrong: 'The cake is being eat.', correct: 'The cake is being eaten.', explanation: 'Past participle of "eat" is "eaten".', explanationEs: 'El participio pasado de "eat" es "eaten".' },
      { wrong: 'It was builded in 1900.', correct: 'It was built in 1900.', explanation: '"Build" has an irregular past participle: built.', explanationEs: '"Build" tiene un participio pasado irregular: built.' },
    ],
    relatedTopics: ['past-simple', 'present-perfect'],
  },

  {
    id: 'reported-speech',
    name: 'Reported Speech',
    nameEs: 'Estilo Indirecto',
    category: 'structures',
    level: 2,
    description: 'Used to report what someone said, thought, or asked — tenses typically shift back one step',
    descriptionEs: 'Se usa para reportar lo que alguien dijo, pensó o preguntó — los tiempos verbales suelen retroceder un paso',
    structure: {
      formula: 'Reporting verb + (that) + reported clause (backshifted tense)',
      formulaEs: 'Verbo de reporte + (that) + oración reportada (tiempo verbal retrocedido)',
      components: [
        { name: 'Reporting verb', nameEs: 'Verbo de reporte', examples: ['said', 'told me', 'explained', 'mentioned', 'claimed'] },
        { name: 'Conjunction (optional)', nameEs: 'Conjunción (opcional)', examples: ['that'], optional: true },
        { name: 'Reported clause (backshifted)', nameEs: 'Oración reportada (con retroceso temporal)', examples: ['he was tired → he said he was tired', 'she can help → she said she could help'] },
      ],
    },
    examples: [
      {
        sentence: '"I am tired." → She said (that) she was tired.',
        translation: '"Estoy cansada." → Dijo que estaba cansada.',
        breakdown: [
          { part: 'She said', role: 'Reporting clause', roleEs: 'Oración de reporte' },
          { part: 'that', role: 'Optional conjunction', roleEs: 'Conjunción opcional' },
          { part: 'she was tired', role: 'Backshifted reported clause (am → was)', roleEs: 'Oración reportada con retroceso (am → was)' },
        ],
        context: 'Present Simple → Past Simple in reported speech.',
        contextEs: 'Presente Simple → Pasado Simple en estilo indirecto.',
      },
      {
        sentence: '"Can you help me?" → He asked if I could help him.',
        translation: '"¿Puedes ayudarme?" → Preguntó si podía ayudarle.',
        breakdown: [
          { part: 'He asked', role: 'Reporting verb (question)', roleEs: 'Verbo de reporte (pregunta)' },
          { part: 'if', role: 'Conjunction for yes/no questions', roleEs: 'Conjunción para preguntas sí/no' },
          { part: 'I could help him', role: 'Backshifted (can → could), pronoun shift', roleEs: 'Con retroceso (can → could), cambio de pronombre' },
        ],
      },
    ],
    commonMistakes: [
      { wrong: 'She said me that she was tired.', correct: 'She told me that she was tired. / She said she was tired.', explanation: '"Say" does not take an indirect object. Use "tell" + person or "say" without.', explanationEs: '"Say" no lleva objeto indirecto. Usa "tell" + persona o "say" sin ella.' },
      { wrong: 'He asked where was she.', correct: 'He asked where she was.', explanation: 'In reported questions, use statement word order (subject before verb).', explanationEs: 'En preguntas reportadas, usa el orden de la oración declarativa (sujeto antes del verbo).' },
      { wrong: 'She said that she can help.', correct: 'She said that she could help.', explanation: 'Backshift: can → could in reported speech.', explanationEs: 'Retroceso temporal: can → could en estilo indirecto.' },
    ],
    relatedTopics: ['past-simple', 'modal-can-could'],
  },

  // ==================== CLAUSES ====================
  {
    id: 'relative-clauses',
    name: 'Relative Clauses',
    nameEs: 'Oraciones de Relativo',
    category: 'clauses',
    level: 2,
    description: 'Clauses that define or add information about a noun, introduced by who, which, that, whose, where, when',
    descriptionEs: 'Oraciones que definen o añaden información sobre un sustantivo, introducidas por who, which, that, whose, where, when',
    structure: {
      formula: 'Noun + Relative Pronoun (who/which/that/whose/where/when) + Clause',
      formulaEs: 'Sustantivo + Pronombre Relativo (who/which/that/whose/where/when) + Oración',
      components: [
        { name: 'Antecedent (noun)', nameEs: 'Antecedente (sustantivo)', examples: ['the woman', 'the book', 'the city'] },
        { name: 'Relative pronoun', nameEs: 'Pronombre relativo', examples: ['who (people)', 'which (things)', 'that (people/things — defining only)', 'whose (possession)', 'where (places)', 'when (time)'] },
        { name: 'Relative clause', nameEs: 'Oración relativa', examples: ['who helped me', 'which I borrowed', 'where I grew up'] },
      ],
    },
    examples: [
      {
        sentence: 'The woman who helped me at the desk was very kind.',
        translation: 'La mujer que me ayudó en el mostrador fue muy amable.',
        breakdown: [
          { part: 'The woman', role: 'Antecedent', roleEs: 'Antecedente' },
          { part: 'who helped me at the desk', role: 'Defining relative clause (identifies which woman)', roleEs: 'Oración relativa especificativa (identifica qué mujer)' },
          { part: 'was very kind', role: 'Main clause predicate', roleEs: 'Predicado de la oración principal' },
        ],
        context: 'Defining clause — no commas. Identifies the specific woman.',
        contextEs: 'Oración especificativa — sin comas. Identifica a la mujer en concreto.',
      },
      {
        sentence: 'My sister, who lives in London, is a doctor.',
        translation: 'Mi hermana, que vive en Londres, es médica.',
        breakdown: [
          { part: 'My sister', role: 'Antecedent (already identified)', roleEs: 'Antecedente (ya identificado)' },
          { part: ', who lives in London,', role: 'Non-defining relative clause (extra information, commas required)', roleEs: 'Oración relativa explicativa (información adicional, obligatorias las comas)' },
          { part: 'is a doctor', role: 'Main clause predicate', roleEs: 'Predicado de la oración principal' },
        ],
      },
    ],
    commonMistakes: [
      { wrong: 'The book which I read it was great.', correct: 'The book which I read was great.', explanation: 'Do not repeat the pronoun ("it") inside the relative clause.', explanationEs: 'No repitas el pronombre ("it") dentro de la oración relativa.' },
      { wrong: 'The woman which helped me.', correct: 'The woman who helped me.', explanation: 'Use "who" for people, "which" for things.', explanationEs: 'Usa "who" para personas, "which" para cosas.' },
      { wrong: 'My sister, that lives in London, is a doctor.', correct: 'My sister, who lives in London, is a doctor.', explanation: '"That" cannot be used in non-defining (extra-information) relative clauses.', explanationEs: '"That" no puede usarse en oraciones relativas explicativas.' },
    ],
    relatedTopics: ['reported-speech', 'passive-voice'],
  },
];

export default GRAMMAR_TREES;
