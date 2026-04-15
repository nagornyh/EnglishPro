// Vocabulario General - General Vocabulary
// Collocations, False Friends, Word Formation, and more

// === COLLOCATIONS ===
export interface Collocation {
  id: string;
  verb: string;
  collocations: {
    phrase: string;
    translation: string;
    example: string;
    wrongAlternative?: string; // Common mistake
  }[];
  level: number;
}

export const collocations: Collocation[] = [
  {
    id: 'coll-make',
    verb: 'MAKE',
    level: 2,
    collocations: [
      { phrase: 'make a decision', translation: 'tomar una decisión', example: 'We need to make a decision soon.', wrongAlternative: 'do a decision' },
      { phrase: 'make a mistake', translation: 'cometer un error', example: 'Everyone makes mistakes.', wrongAlternative: 'do a mistake' },
      { phrase: 'make money', translation: 'ganar dinero', example: 'She makes a lot of money.', wrongAlternative: 'win money' },
      { phrase: 'make progress', translation: 'hacer progreso', example: 'We\'re making good progress.', wrongAlternative: 'do progress' },
      { phrase: 'make an effort', translation: 'hacer un esfuerzo', example: 'Make an effort to arrive on time.' },
      { phrase: 'make a phone call', translation: 'hacer una llamada', example: 'I need to make a quick phone call.' },
      { phrase: 'make a reservation', translation: 'hacer una reservación', example: 'Did you make a reservation?' },
      { phrase: 'make an appointment', translation: 'hacer una cita', example: 'I made an appointment with the doctor.' },
      { phrase: 'make a difference', translation: 'marcar la diferencia', example: 'Your help makes a difference.' },
      { phrase: 'make a plan', translation: 'hacer un plan', example: 'Let\'s make a plan for the weekend.' },
      { phrase: 'make friends', translation: 'hacer amigos', example: 'It\'s hard to make friends in a new city.' },
      { phrase: 'make sense', translation: 'tener sentido', example: 'Does this make sense to you?' },
      { phrase: 'make sure', translation: 'asegurarse', example: 'Make sure you lock the door.' },
      { phrase: 'make time', translation: 'hacer tiempo', example: 'I\'ll try to make time for exercise.' },
      { phrase: 'make a promise', translation: 'hacer una promesa', example: 'Don\'t make promises you can\'t keep.' }
    ]
  },
  {
    id: 'coll-do',
    verb: 'DO',
    level: 2,
    collocations: [
      { phrase: 'do homework', translation: 'hacer tarea', example: 'Have you done your homework?', wrongAlternative: 'make homework' },
      { phrase: 'do the dishes', translation: 'lavar los platos', example: 'I\'ll do the dishes after dinner.' },
      { phrase: 'do the laundry', translation: 'hacer la colada', example: 'I need to do the laundry today.' },
      { phrase: 'do business', translation: 'hacer negocios', example: 'We do business with many countries.' },
      { phrase: 'do your best', translation: 'hacer lo mejor posible', example: 'Just do your best.' },
      { phrase: 'do a favor', translation: 'hacer un favor', example: 'Can you do me a favor?' },
      { phrase: 'do exercise', translation: 'hacer ejercicio', example: 'I do exercise every morning.' },
      { phrase: 'do research', translation: 'hacer investigación', example: 'We\'re doing research on this topic.' },
      { phrase: 'do harm', translation: 'hacer daño', example: 'This won\'t do any harm.' },
      { phrase: 'do good', translation: 'hacer bien', example: 'Exercise does you good.' },
      { phrase: 'do your hair', translation: 'arreglarse el pelo', example: 'She\'s doing her hair.' },
      { phrase: 'do nothing', translation: 'no hacer nada', example: 'I did nothing all weekend.' }
    ]
  },
  {
    id: 'coll-take',
    verb: 'TAKE',
    level: 2,
    collocations: [
      { phrase: 'take a break', translation: 'tomar un descanso', example: 'Let\'s take a break.', wrongAlternative: 'make a break' },
      { phrase: 'take a shower', translation: 'ducharse', example: 'I take a shower every morning.' },
      { phrase: 'take a photo', translation: 'tomar una foto', example: 'Can you take a photo of us?' },
      { phrase: 'take a walk', translation: 'dar un paseo', example: 'Let\'s take a walk in the park.' },
      { phrase: 'take a nap', translation: 'tomar una siesta', example: 'I\'ll take a quick nap.' },
      { phrase: 'take notes', translation: 'tomar notas', example: 'I always take notes in class.' },
      { phrase: 'take a risk', translation: 'tomar un riesgo', example: 'Sometimes you have to take risks.' },
      { phrase: 'take time', translation: 'tomar tiempo', example: 'Good things take time.' },
      { phrase: 'take turns', translation: 'turnarse', example: 'We took turns driving.' },
      { phrase: 'take a test', translation: 'hacer un examen', example: 'I\'m taking a test tomorrow.' },
      { phrase: 'take a seat', translation: 'tomar asiento', example: 'Please take a seat.' },
      { phrase: 'take responsibility', translation: 'asumir responsabilidad', example: 'You should take responsibility for your actions.' },
      { phrase: 'take advice', translation: 'aceptar consejo', example: 'She never takes my advice.' },
      { phrase: 'take medicine', translation: 'tomar medicina', example: 'Take this medicine twice a day.' }
    ]
  },
  {
    id: 'coll-have',
    verb: 'HAVE',
    level: 2,
    collocations: [
      { phrase: 'have breakfast/lunch/dinner', translation: 'desayunar/almorzar/cenar', example: 'I had breakfast at 8.' },
      { phrase: 'have a drink', translation: 'tomar algo', example: 'Let\'s have a drink.' },
      { phrase: 'have a good time', translation: 'pasarla bien', example: 'We had a good time at the party.' },
      { phrase: 'have a problem', translation: 'tener un problema', example: 'I\'m having a problem with my computer.' },
      { phrase: 'have a meeting', translation: 'tener una reunión', example: 'We have a meeting at 10.' },
      { phrase: 'have an accident', translation: 'tener un accidente', example: 'He had an accident last week.' },
      { phrase: 'have a conversation', translation: 'tener una conversación', example: 'We had a long conversation.' },
      { phrase: 'have fun', translation: 'divertirse', example: 'Have fun at the party!' },
      { phrase: 'have a headache', translation: 'tener dolor de cabeza', example: 'I have a terrible headache.' },
      { phrase: 'have a look', translation: 'echar un vistazo', example: 'Can I have a look?' },
      { phrase: 'have a chat', translation: 'charlar', example: 'Let\'s have a chat later.' }
    ]
  },
  {
    id: 'coll-get',
    verb: 'GET',
    level: 3,
    collocations: [
      { phrase: 'get married', translation: 'casarse', example: 'They\'re getting married next month.' },
      { phrase: 'get divorced', translation: 'divorciarse', example: 'They got divorced last year.' },
      { phrase: 'get lost', translation: 'perderse', example: 'We got lost in the city.' },
      { phrase: 'get ready', translation: 'prepararse', example: 'I\'m getting ready for work.' },
      { phrase: 'get started', translation: 'empezar', example: 'Let\'s get started.' },
      { phrase: 'get better', translation: 'mejorar', example: 'I hope you get better soon.' },
      { phrase: 'get worse', translation: 'empeorar', example: 'The situation is getting worse.' },
      { phrase: 'get angry', translation: 'enojarse', example: 'Don\'t get angry.' },
      { phrase: 'get tired', translation: 'cansarse', example: 'I\'m getting tired.' },
      { phrase: 'get a job', translation: 'conseguir trabajo', example: 'She got a job at Google.' },
      { phrase: 'get permission', translation: 'obtener permiso', example: 'You need to get permission first.' }
    ]
  },
  {
    id: 'coll-adjectives',
    verb: 'ADJECTIVE COLLOCATIONS',
    level: 3,
    collocations: [
      { phrase: 'heavy rain', translation: 'lluvia fuerte', example: 'There\'s heavy rain expected.', wrongAlternative: 'strong rain' },
      { phrase: 'heavy traffic', translation: 'tráfico pesado', example: 'There\'s heavy traffic on the highway.', wrongAlternative: 'strong traffic' },
      { phrase: 'strong coffee', translation: 'café fuerte', example: 'I like strong coffee.', wrongAlternative: 'heavy coffee' },
      { phrase: 'strong wind', translation: 'viento fuerte', example: 'There\'s a strong wind today.' },
      { phrase: 'fast food', translation: 'comida rápida', example: 'I don\'t eat fast food often.', wrongAlternative: 'quick food' },
      { phrase: 'high speed', translation: 'alta velocidad', example: 'The train travels at high speed.', wrongAlternative: 'fast speed' },
      { phrase: 'high price', translation: 'precio alto', example: 'That\'s a very high price.' },
      { phrase: 'low price', translation: 'precio bajo', example: 'I found it at a low price.' },
      { phrase: 'big mistake', translation: 'gran error', example: 'That was a big mistake.', wrongAlternative: 'large mistake' },
      { phrase: 'large family', translation: 'familia grande', example: 'She comes from a large family.', wrongAlternative: 'big family (acceptable but less common)' },
      { phrase: 'fully aware', translation: 'completamente consciente', example: 'I\'m fully aware of the risks.' },
      { phrase: 'deeply concerned', translation: 'profundamente preocupado', example: 'We\'re deeply concerned about this.' },
      { phrase: 'highly unlikely', translation: 'muy improbable', example: 'That\'s highly unlikely.' }
    ]
  },
  // ACADEMIC COLLOCATIONS (B2-C1)
  {
    id: 'coll-academic',
    verb: 'ACADEMIC COLLOCATIONS',
    level: 4,
    collocations: [
      { phrase: 'conduct research', translation: 'realizar investigación', example: 'They conducted research on climate change.', wrongAlternative: 'do research (acceptable informally)' },
      { phrase: 'draw conclusions', translation: 'sacar conclusiones', example: 'We can draw several conclusions from these results.', wrongAlternative: 'take conclusions' },
      { phrase: 'raise awareness', translation: 'crear conciencia', example: 'The campaign aims to raise awareness about pollution.' },
      { phrase: 'meet a deadline', translation: 'cumplir un plazo', example: 'I need to meet the deadline for this project.' },
      { phrase: 'reach an agreement', translation: 'llegar a un acuerdo', example: 'Both parties reached an agreement.' },
      { phrase: 'play a role', translation: 'desempeñar un papel', example: 'Technology plays a key role in education.', wrongAlternative: 'make a role' },
      { phrase: 'pose a threat', translation: 'representar una amenaza', example: 'Climate change poses a serious threat.', wrongAlternative: 'put a threat' },
      { phrase: 'address an issue', translation: 'abordar un tema', example: 'We need to address this issue immediately.' },
      { phrase: 'bear in mind', translation: 'tener en cuenta', example: 'Bear in mind that deadlines are firm.' },
      { phrase: 'take into account', translation: 'tener en cuenta', example: 'You should take all factors into account.' },
      { phrase: 'carry out an experiment', translation: 'realizar un experimento', example: 'Scientists carried out an experiment.', wrongAlternative: 'do an experiment (acceptable informally)' },
      { phrase: 'face a challenge', translation: 'enfrentar un desafío', example: 'The company faces many challenges.' },
    ]
  },
  // ADVERB + ADJECTIVE COLLOCATIONS (B1-B2)
  {
    id: 'coll-adverb-adj',
    verb: 'ADVERB + ADJECTIVE PAIRS',
    level: 3,
    collocations: [
      { phrase: 'absolutely essential', translation: 'absolutamente esencial', example: 'Practice is absolutely essential for learning.', wrongAlternative: 'very essential' },
      { phrase: 'bitterly disappointed', translation: 'amargamente decepcionado', example: 'She was bitterly disappointed with the result.', wrongAlternative: 'very disappointed (weaker)' },
      { phrase: 'utterly ridiculous', translation: 'completamente ridículo', example: 'That idea is utterly ridiculous.', wrongAlternative: 'very ridiculous' },
      { phrase: 'wildly exaggerated', translation: 'tremendamente exagerado', example: 'The claims were wildly exaggerated.' },
      { phrase: 'perfectly acceptable', translation: 'perfectamente aceptable', example: 'Your pronunciation is perfectly acceptable.' },
      { phrase: 'seriously injured', translation: 'gravemente herido', example: 'Two people were seriously injured in the accident.' },
      { phrase: 'deeply offended', translation: 'profundamente ofendido', example: 'He was deeply offended by the comment.' },
      { phrase: 'heavily influenced', translation: 'enormemente influenciado', example: 'His work was heavily influenced by Spanish art.' },
    ]
  },
  // BINOMIALS (B2)
  {
    id: 'coll-binomials',
    verb: 'BINOMIALS (FIXED PAIRS)',
    level: 3,
    collocations: [
      { phrase: 'pros and cons', translation: 'pros y contras', example: 'We discussed the pros and cons of moving.' },
      { phrase: 'give and take', translation: 'toma y daca', example: 'A good relationship requires give and take.' },
      { phrase: 'trial and error', translation: 'ensayo y error', example: 'We learned by trial and error.' },
      { phrase: 'peace and quiet', translation: 'paz y tranquilidad', example: 'I need some peace and quiet.' },
      { phrase: 'bread and butter', translation: 'pan de cada día / sustento', example: 'Teaching is my bread and butter.' },
      { phrase: 'sooner or later', translation: 'tarde o temprano', example: 'Sooner or later, you\'ll understand.' },
      { phrase: 'safe and sound', translation: 'sano y salvo', example: 'They arrived safe and sound.' },
      { phrase: 'sick and tired', translation: 'harto', example: 'I\'m sick and tired of waiting.' },
      { phrase: 'ups and downs', translation: 'altibajos', example: 'Every business has its ups and downs.' },
      { phrase: 'back and forth', translation: 'de un lado a otro', example: 'We went back and forth on the decision.' },
    ]
  }
];

// === FALSE FRIENDS ===
export interface FalseFriend {
  id: string;
  english: string;
  wrongMeaning: string; // What Spanish speakers think it means
  correctMeaning: string;
  correctMeaningEs: string;
  spanish: string; // The Spanish word that looks similar
  spanishMeaning: string; // What the Spanish word actually means in English
  example: string;
  level: number;
}

export const falseFriends: FalseFriend[] = [
  {
    id: 'ff-001',
    english: 'actually',
    wrongMeaning: 'actualmente (currently)',
    correctMeaning: 'in fact, really',
    correctMeaningEs: 'en realidad, de hecho',
    spanish: 'actualmente',
    spanishMeaning: 'currently, nowadays',
    example: 'Actually, I don\'t agree with you. (En realidad, no estoy de acuerdo contigo.)',
    level: 2
  },
  {
    id: 'ff-002',
    english: 'library',
    wrongMeaning: 'librería (bookstore)',
    correctMeaning: 'a place where you borrow books',
    correctMeaningEs: 'biblioteca',
    spanish: 'librería',
    spanishMeaning: 'bookstore/bookshop',
    example: 'I borrowed this book from the library. (Tomé prestado este libro de la biblioteca.)',
    level: 1
  },
  {
    id: 'ff-003',
    english: 'embarrassed',
    wrongMeaning: 'embarazada (pregnant)',
    correctMeaning: 'feeling ashamed or shy',
    correctMeaningEs: 'avergonzado',
    spanish: 'embarazada',
    spanishMeaning: 'pregnant',
    example: 'I was so embarrassed when I fell. (Me sentí muy avergonzado cuando me caí.)',
    level: 2
  },
  {
    id: 'ff-004',
    english: 'sensible',
    wrongMeaning: 'sensible (sensitive)',
    correctMeaning: 'practical, reasonable',
    correctMeaningEs: 'sensato, prudente',
    spanish: 'sensible',
    spanishMeaning: 'sensitive',
    example: 'That\'s a sensible decision. (Esa es una decisión sensata.)',
    level: 3
  },
  {
    id: 'ff-005',
    english: 'sympathetic',
    wrongMeaning: 'simpático (nice, friendly)',
    correctMeaning: 'showing understanding of others\' feelings',
    correctMeaningEs: 'comprensivo, compasivo',
    spanish: 'simpático',
    spanishMeaning: 'nice, friendly, likeable',
    example: 'She was very sympathetic when I told her my problems. (Fue muy comprensiva cuando le conté mis problemas.)',
    level: 3
  },
  {
    id: 'ff-006',
    english: 'realize',
    wrongMeaning: 'realizar (to do, accomplish)',
    correctMeaning: 'to become aware of',
    correctMeaningEs: 'darse cuenta de',
    spanish: 'realizar',
    spanishMeaning: 'to carry out, accomplish',
    example: 'I didn\'t realize it was so late. (No me di cuenta de que era tan tarde.)',
    level: 2
  },
  {
    id: 'ff-007',
    english: 'assist',
    wrongMeaning: 'asistir (to attend)',
    correctMeaning: 'to help',
    correctMeaningEs: 'ayudar',
    spanish: 'asistir',
    spanishMeaning: 'to attend',
    example: 'Can I assist you with your bags? (¿Puedo ayudarle con sus maletas?)',
    level: 3
  },
  {
    id: 'ff-008',
    english: 'attend',
    wrongMeaning: 'atender (to serve)',
    correctMeaning: 'to be present at an event',
    correctMeaningEs: 'asistir a',
    spanish: 'atender',
    spanishMeaning: 'to serve, pay attention to',
    example: 'I will attend the meeting tomorrow. (Asistiré a la reunión mañana.)',
    level: 3
  },
  {
    id: 'ff-009',
    english: 'pretend',
    wrongMeaning: 'pretender (to intend, aspire)',
    correctMeaning: 'to act as if something is true when it isn\'t',
    correctMeaningEs: 'fingir, aparentar',
    spanish: 'pretender',
    spanishMeaning: 'to intend, aspire, expect',
    example: 'Don\'t pretend you didn\'t hear me. (No finjas que no me oíste.)',
    level: 3
  },
  {
    id: 'ff-010',
    english: 'eventually',
    wrongMeaning: 'eventualmente (possibly)',
    correctMeaning: 'finally, after a long time',
    correctMeaningEs: 'finalmente, al final',
    spanish: 'eventualmente',
    spanishMeaning: 'possibly, occasionally',
    example: 'Eventually, we found the restaurant. (Al final, encontramos el restaurante.)',
    level: 3
  },
  {
    id: 'ff-011',
    english: 'constipated',
    wrongMeaning: 'constipado (having a cold)',
    correctMeaning: 'unable to empty your bowels',
    correctMeaningEs: 'estreñido',
    spanish: 'constipado',
    spanishMeaning: 'having a cold',
    example: 'I\'ve been constipated for days. (He estado estreñido por días.)',
    level: 4
  },
  {
    id: 'ff-012',
    english: 'fabric',
    wrongMeaning: 'fábrica (factory)',
    correctMeaning: 'cloth, material',
    correctMeaningEs: 'tela, tejido',
    spanish: 'fábrica',
    spanishMeaning: 'factory',
    example: 'This fabric is very soft. (Esta tela es muy suave.)',
    level: 3
  },
  {
    id: 'ff-013',
    english: 'exit',
    wrongMeaning: 'éxito (success)',
    correctMeaning: 'the way out',
    correctMeaningEs: 'salida',
    spanish: 'éxito',
    spanishMeaning: 'success',
    example: 'Where is the exit? (¿Dónde está la salida?)',
    level: 2
  },
  {
    id: 'ff-014',
    english: 'carpet',
    wrongMeaning: 'carpeta (folder)',
    correctMeaning: 'floor covering',
    correctMeaningEs: 'alfombra',
    spanish: 'carpeta',
    spanishMeaning: 'folder',
    example: 'We need a new carpet for the living room. (Necesitamos una nueva alfombra para la sala.)',
    level: 2
  },
  {
    id: 'ff-015',
    english: 'lecture',
    wrongMeaning: 'lectura (reading)',
    correctMeaning: 'educational talk/class',
    correctMeaningEs: 'conferencia, clase magistral',
    spanish: 'lectura',
    spanishMeaning: 'reading',
    example: 'The professor gave an interesting lecture. (El profesor dio una conferencia interesante.)',
    level: 3
  },
  {
    id: 'ff-016',
    english: 'support',
    wrongMeaning: 'soportar (to tolerate)',
    correctMeaning: 'to help, encourage',
    correctMeaningEs: 'apoyar',
    spanish: 'soportar',
    spanishMeaning: 'to tolerate, bear',
    example: 'I support your decision. (Apoyo tu decisión.)',
    level: 3
  },
  {
    id: 'ff-017',
    english: 'resume',
    wrongMeaning: 'resumir (to summarize)',
    correctMeaning: 'CV, or to continue after stopping',
    correctMeaningEs: 'currículum, o continuar',
    spanish: 'resumir',
    spanishMeaning: 'to summarize',
    example: 'Please send your resume. (Por favor envía tu currículum.)',
    level: 4
  },
  {
    id: 'ff-018',
    english: 'argument',
    wrongMeaning: 'argumento (plot)',
    correctMeaning: 'disagreement, debate, or a reason',
    correctMeaningEs: 'discusión, argumento (razonamiento)',
    spanish: 'argumento',
    spanishMeaning: 'plot (of a story), reasoning',
    example: 'They had a big argument about money. (Tuvieron una gran discusión sobre dinero.)',
    level: 3
  }
];

// === WORD FORMATION ===
export interface WordFormation {
  id: string;
  type: 'prefix' | 'suffix';
  affix: string;
  meaning: string;
  meaningEs: string;
  examples: {
    base: string;
    formed: string;
    translation: string;
  }[];
  level: number;
}

export const wordFormation: WordFormation[] = [
  // PREFIXES
  {
    id: 'wf-un',
    type: 'prefix',
    affix: 'un-',
    meaning: 'not, opposite of',
    meaningEs: 'no, opuesto de',
    examples: [
      { base: 'happy', formed: 'unhappy', translation: 'infeliz' },
      { base: 'do', formed: 'undo', translation: 'deshacer' },
      { base: 'fair', formed: 'unfair', translation: 'injusto' },
      { base: 'usual', formed: 'unusual', translation: 'inusual' },
      { base: 'certain', formed: 'uncertain', translation: 'incierto' }
    ],
    level: 2
  },
  {
    id: 'wf-re',
    type: 'prefix',
    affix: 're-',
    meaning: 'again, back',
    meaningEs: 'otra vez, de nuevo',
    examples: [
      { base: 'do', formed: 'redo', translation: 'rehacer' },
      { base: 'write', formed: 'rewrite', translation: 'reescribir' },
      { base: 'build', formed: 'rebuild', translation: 'reconstruir' },
      { base: 'start', formed: 'restart', translation: 'reiniciar' },
      { base: 'consider', formed: 'reconsider', translation: 'reconsiderar' }
    ],
    level: 2
  },
  {
    id: 'wf-dis',
    type: 'prefix',
    affix: 'dis-',
    meaning: 'not, opposite, away',
    meaningEs: 'no, opuesto, separar',
    examples: [
      { base: 'agree', formed: 'disagree', translation: 'no estar de acuerdo' },
      { base: 'appear', formed: 'disappear', translation: 'desaparecer' },
      { base: 'honest', formed: 'dishonest', translation: 'deshonesto' },
      { base: 'like', formed: 'dislike', translation: 'no gustar' },
      { base: 'connect', formed: 'disconnect', translation: 'desconectar' }
    ],
    level: 2
  },
  {
    id: 'wf-mis',
    type: 'prefix',
    affix: 'mis-',
    meaning: 'wrongly, badly',
    meaningEs: 'mal, incorrectamente',
    examples: [
      { base: 'understand', formed: 'misunderstand', translation: 'malentender' },
      { base: 'spell', formed: 'misspell', translation: 'escribir mal' },
      { base: 'lead', formed: 'mislead', translation: 'engañar' },
      { base: 'behave', formed: 'misbehave', translation: 'portarse mal' },
      { base: 'take', formed: 'mistake', translation: 'error' }
    ],
    level: 3
  },
  {
    id: 'wf-pre',
    type: 'prefix',
    affix: 'pre-',
    meaning: 'before',
    meaningEs: 'antes de',
    examples: [
      { base: 'view', formed: 'preview', translation: 'vista previa' },
      { base: 'historic', formed: 'prehistoric', translation: 'prehistórico' },
      { base: 'pay', formed: 'prepay', translation: 'pagar por adelantado' },
      { base: 'heat', formed: 'preheat', translation: 'precalentar' },
      { base: 'school', formed: 'preschool', translation: 'preescolar' }
    ],
    level: 3
  },
  {
    id: 'wf-over',
    type: 'prefix',
    affix: 'over-',
    meaning: 'too much, above',
    meaningEs: 'demasiado, encima de',
    examples: [
      { base: 'work', formed: 'overwork', translation: 'trabajar demasiado' },
      { base: 'sleep', formed: 'oversleep', translation: 'dormir de más' },
      { base: 'eat', formed: 'overeat', translation: 'comer en exceso' },
      { base: 'look', formed: 'overlook', translation: 'pasar por alto' },
      { base: 'come', formed: 'overcome', translation: 'superar' }
    ],
    level: 3
  },
  {
    id: 'wf-under',
    type: 'prefix',
    affix: 'under-',
    meaning: 'too little, below',
    meaningEs: 'muy poco, debajo de',
    examples: [
      { base: 'estimate', formed: 'underestimate', translation: 'subestimar' },
      { base: 'pay', formed: 'underpay', translation: 'pagar poco' },
      { base: 'ground', formed: 'underground', translation: 'subterráneo' },
      { base: 'stand', formed: 'understand', translation: 'entender' },
      { base: 'line', formed: 'underline', translation: 'subrayar' }
    ],
    level: 3
  },
  // SUFFIXES
  {
    id: 'wf-tion',
    type: 'suffix',
    affix: '-tion / -sion',
    meaning: 'forms nouns from verbs (action/state)',
    meaningEs: 'forma sustantivos de verbos (acción/estado)',
    examples: [
      { base: 'educate', formed: 'education', translation: 'educación' },
      { base: 'inform', formed: 'information', translation: 'información' },
      { base: 'decide', formed: 'decision', translation: 'decisión' },
      { base: 'discuss', formed: 'discussion', translation: 'discusión' },
      { base: 'create', formed: 'creation', translation: 'creación' }
    ],
    level: 2
  },
  {
    id: 'wf-ness',
    type: 'suffix',
    affix: '-ness',
    meaning: 'forms nouns from adjectives (quality)',
    meaningEs: 'forma sustantivos de adjetivos (cualidad)',
    examples: [
      { base: 'happy', formed: 'happiness', translation: 'felicidad' },
      { base: 'sad', formed: 'sadness', translation: 'tristeza' },
      { base: 'dark', formed: 'darkness', translation: 'oscuridad' },
      { base: 'kind', formed: 'kindness', translation: 'amabilidad' },
      { base: 'weak', formed: 'weakness', translation: 'debilidad' }
    ],
    level: 2
  },
  {
    id: 'wf-ly',
    type: 'suffix',
    affix: '-ly',
    meaning: 'forms adverbs from adjectives (manner)',
    meaningEs: 'forma adverbios de adjetivos (manera)',
    examples: [
      { base: 'quick', formed: 'quickly', translation: 'rápidamente' },
      { base: 'slow', formed: 'slowly', translation: 'lentamente' },
      { base: 'happy', formed: 'happily', translation: 'felizmente' },
      { base: 'easy', formed: 'easily', translation: 'fácilmente' },
      { base: 'careful', formed: 'carefully', translation: 'cuidadosamente' }
    ],
    level: 2
  },
  {
    id: 'wf-ful',
    type: 'suffix',
    affix: '-ful',
    meaning: 'full of (forms adjectives)',
    meaningEs: 'lleno de (forma adjetivos)',
    examples: [
      { base: 'help', formed: 'helpful', translation: 'útil' },
      { base: 'care', formed: 'careful', translation: 'cuidadoso' },
      { base: 'beauty', formed: 'beautiful', translation: 'hermoso' },
      { base: 'hope', formed: 'hopeful', translation: 'esperanzador' },
      { base: 'thank', formed: 'thankful', translation: 'agradecido' }
    ],
    level: 2
  },
  {
    id: 'wf-less',
    type: 'suffix',
    affix: '-less',
    meaning: 'without (forms adjectives)',
    meaningEs: 'sin (forma adjetivos)',
    examples: [
      { base: 'help', formed: 'helpless', translation: 'indefenso' },
      { base: 'care', formed: 'careless', translation: 'descuidado' },
      { base: 'hope', formed: 'hopeless', translation: 'desesperado' },
      { base: 'home', formed: 'homeless', translation: 'sin hogar' },
      { base: 'use', formed: 'useless', translation: 'inútil' }
    ],
    level: 2
  },
  {
    id: 'wf-able',
    type: 'suffix',
    affix: '-able / -ible',
    meaning: 'capable of being (forms adjectives)',
    meaningEs: 'capaz de ser (forma adjetivos)',
    examples: [
      { base: 'read', formed: 'readable', translation: 'legible' },
      { base: 'break', formed: 'breakable', translation: 'frágil' },
      { base: 'flex', formed: 'flexible', translation: 'flexible' },
      { base: 'response', formed: 'responsible', translation: 'responsable' },
      { base: 'comfort', formed: 'comfortable', translation: 'cómodo' }
    ],
    level: 3
  },
  {
    id: 'wf-er',
    type: 'suffix',
    affix: '-er / -or',
    meaning: 'person who does (forms nouns)',
    meaningEs: 'persona que hace (forma sustantivos)',
    examples: [
      { base: 'teach', formed: 'teacher', translation: 'profesor' },
      { base: 'work', formed: 'worker', translation: 'trabajador' },
      { base: 'act', formed: 'actor', translation: 'actor' },
      { base: 'write', formed: 'writer', translation: 'escritor' },
      { base: 'drive', formed: 'driver', translation: 'conductor' }
    ],
    level: 2
  },
  {
    id: 'wf-ment',
    type: 'suffix',
    affix: '-ment',
    meaning: 'result/action of (forms nouns)',
    meaningEs: 'resultado/acción de (forma sustantivos)',
    examples: [
      { base: 'develop', formed: 'development', translation: 'desarrollo' },
      { base: 'govern', formed: 'government', translation: 'gobierno' },
      { base: 'agree', formed: 'agreement', translation: 'acuerdo' },
      { base: 'improve', formed: 'improvement', translation: 'mejora' },
      { base: 'manage', formed: 'management', translation: 'gestión' }
    ],
    level: 3
  },
  // Additional productive patterns (B2-C1)
  {
    id: 'wf-in-im-ir-il',
    type: 'prefix',
    affix: 'in-/im-/ir-/il-',
    meaning: 'not (Latin-derived negation)',
    meaningEs: 'no (negación de origen latino)',
    examples: [
      { base: 'possible', formed: 'impossible', translation: 'imposible' },
      { base: 'patient', formed: 'impatient', translation: 'impaciente' },
      { base: 'regular', formed: 'irregular', translation: 'irregular' },
      { base: 'legal', formed: 'illegal', translation: 'ilegal' },
      { base: 'complete', formed: 'incomplete', translation: 'incompleto' },
      { base: 'dependent', formed: 'independent', translation: 'independiente' },
      { base: 'mature', formed: 'immature', translation: 'inmaduro' },
      { base: 'responsible', formed: 'irresponsible', translation: 'irresponsable' },
      { base: 'logical', formed: 'illogical', translation: 'ilógico' },
    ],
    level: 3
  },
  {
    id: 'wf-ous-ious',
    type: 'suffix',
    affix: '-ous / -ious / -eous',
    meaning: 'full of, having qualities of (forms adjectives)',
    meaningEs: 'lleno de, con cualidades de (forma adjetivos)',
    examples: [
      { base: 'danger', formed: 'dangerous', translation: 'peligroso' },
      { base: 'fame', formed: 'famous', translation: 'famoso' },
      { base: 'ambition', formed: 'ambitious', translation: 'ambicioso' },
      { base: 'courage', formed: 'courageous', translation: 'valiente' },
      { base: 'mystery', formed: 'mysterious', translation: 'misterioso' },
    ],
    level: 3
  },
  {
    id: 'wf-ity',
    type: 'suffix',
    affix: '-ity / -ty',
    meaning: 'state or quality (forms nouns from adjectives)',
    meaningEs: 'estado o cualidad (forma sustantivos de adjetivos)',
    examples: [
      { base: 'able', formed: 'ability', translation: 'habilidad' },
      { base: 'creative', formed: 'creativity', translation: 'creatividad' },
      { base: 'equal', formed: 'equality', translation: 'igualdad' },
      { base: 'curious', formed: 'curiosity', translation: 'curiosidad' },
      { base: 'responsible', formed: 'responsibility', translation: 'responsabilidad' },
    ],
    level: 3
  },
  {
    id: 'wf-ize-ise',
    type: 'suffix',
    affix: '-ize / -ise',
    meaning: 'to make or become (forms verbs)',
    meaningEs: 'hacer o convertirse en (forma verbos)',
    examples: [
      { base: 'modern', formed: 'modernize', translation: 'modernizar' },
      { base: 'real', formed: 'realize', translation: 'darse cuenta / realizar' },
      { base: 'organ', formed: 'organize', translation: 'organizar' },
      { base: 'apology', formed: 'apologize', translation: 'disculparse' },
      { base: 'special', formed: 'specialize', translation: 'especializarse' },
    ],
    level: 3
  },
  {
    id: 'wf-en',
    type: 'suffix',
    affix: '-en',
    meaning: 'to make or become (forms verbs from adjectives)',
    meaningEs: 'hacer o volverse (forma verbos de adjetivos)',
    examples: [
      { base: 'wide', formed: 'widen', translation: 'ensanchar' },
      { base: 'strength', formed: 'strengthen', translation: 'fortalecer' },
      { base: 'short', formed: 'shorten', translation: 'acortar' },
      { base: 'deep', formed: 'deepen', translation: 'profundizar' },
      { base: 'tight', formed: 'tighten', translation: 'apretar' },
    ],
    level: 3
  },
  {
    id: 'wf-anti',
    type: 'prefix',
    affix: 'anti-',
    meaning: 'against, opposing',
    meaningEs: 'contra, opuesto',
    examples: [
      { base: 'social', formed: 'antisocial', translation: 'antisocial' },
      { base: 'virus', formed: 'antivirus', translation: 'antivirus' },
      { base: 'biotic', formed: 'antibiotic', translation: 'antibiótico' },
      { base: 'clockwise', formed: 'anticlockwise', translation: 'en sentido contrario a las agujas del reloj' },
    ],
    level: 3
  },
  {
    id: 'wf-inter',
    type: 'prefix',
    affix: 'inter-',
    meaning: 'between, among',
    meaningEs: 'entre',
    examples: [
      { base: 'national', formed: 'international', translation: 'internacional' },
      { base: 'act', formed: 'interact', translation: 'interactuar' },
      { base: 'net', formed: 'internet', translation: 'internet' },
      { base: 'view', formed: 'interview', translation: 'entrevista' },
    ],
    level: 2
  }
];

// === SYNONYMS AND ANTONYMS ===
export interface SynonymAntonym {
  id: string;
  word: string;
  translation: string;
  synonyms: { word: string; register: 'formal' | 'neutral' | 'informal' }[];
  antonyms: string[];
  level: number;
}

export const synonymsAntonyms: SynonymAntonym[] = [
  {
    id: 'sa-big',
    word: 'big',
    translation: 'grande',
    synonyms: [
      { word: 'large', register: 'neutral' },
      { word: 'huge', register: 'neutral' },
      { word: 'enormous', register: 'formal' },
      { word: 'massive', register: 'neutral' },
      { word: 'gigantic', register: 'neutral' }
    ],
    antonyms: ['small', 'tiny', 'little'],
    level: 2
  },
  {
    id: 'sa-happy',
    word: 'happy',
    translation: 'feliz',
    synonyms: [
      { word: 'glad', register: 'neutral' },
      { word: 'pleased', register: 'neutral' },
      { word: 'delighted', register: 'formal' },
      { word: 'thrilled', register: 'neutral' },
      { word: 'joyful', register: 'formal' }
    ],
    antonyms: ['sad', 'unhappy', 'miserable', 'depressed'],
    level: 2
  },
  {
    id: 'sa-good',
    word: 'good',
    translation: 'bueno',
    synonyms: [
      { word: 'great', register: 'neutral' },
      { word: 'excellent', register: 'formal' },
      { word: 'wonderful', register: 'neutral' },
      { word: 'fantastic', register: 'informal' },
      { word: 'outstanding', register: 'formal' }
    ],
    antonyms: ['bad', 'terrible', 'awful', 'poor'],
    level: 2
  },
  {
    id: 'sa-said',
    word: 'said',
    translation: 'dijo',
    synonyms: [
      { word: 'stated', register: 'formal' },
      { word: 'mentioned', register: 'neutral' },
      { word: 'exclaimed', register: 'neutral' },
      { word: 'declared', register: 'formal' },
      { word: 'replied', register: 'neutral' }
    ],
    antonyms: [],
    level: 3
  },
  {
    id: 'sa-beautiful',
    word: 'beautiful',
    translation: 'hermoso',
    synonyms: [
      { word: 'gorgeous', register: 'neutral' },
      { word: 'stunning', register: 'neutral' },
      { word: 'lovely', register: 'neutral' },
      { word: 'attractive', register: 'neutral' },
      { word: 'pretty', register: 'informal' }
    ],
    antonyms: ['ugly', 'unattractive', 'hideous'],
    level: 2
  },
  {
    id: 'sa-interesting',
    word: 'interesting',
    translation: 'interesante',
    synonyms: [
      { word: 'fascinating', register: 'formal' },
      { word: 'captivating', register: 'formal' },
      { word: 'engaging', register: 'neutral' },
      { word: 'intriguing', register: 'formal' },
      { word: 'compelling', register: 'formal' }
    ],
    antonyms: ['boring', 'dull', 'uninteresting', 'tedious'],
    level: 3
  },
  {
    id: 'sa-start',
    word: 'start',
    translation: 'empezar',
    synonyms: [
      { word: 'begin', register: 'neutral' },
      { word: 'commence', register: 'formal' },
      { word: 'initiate', register: 'formal' },
      { word: 'launch', register: 'neutral' },
      { word: 'kick off', register: 'informal' }
    ],
    antonyms: ['end', 'finish', 'stop', 'conclude'],
    level: 2
  },
  {
    id: 'sa-buy',
    word: 'buy',
    translation: 'comprar',
    synonyms: [
      { word: 'purchase', register: 'formal' },
      { word: 'acquire', register: 'formal' },
      { word: 'get', register: 'informal' },
      { word: 'obtain', register: 'formal' }
    ],
    antonyms: ['sell'],
    level: 2
  }
];

// === FORMAL VS INFORMAL ===
export interface FormalInformal {
  id: string;
  formal: string;
  informal: string;
  translation: string;
  example: {
    formal: string;
    informal: string;
  };
  level: number;
}

export const formalInformal: FormalInformal[] = [
  { id: 'fi-001', formal: 'commence', informal: 'start/begin', translation: 'empezar', example: { formal: 'The meeting will commence at 9 AM.', informal: 'The meeting starts at 9.' }, level: 4 },
  { id: 'fi-002', formal: 'purchase', informal: 'buy', translation: 'comprar', example: { formal: 'I wish to purchase this item.', informal: 'I want to buy this.' }, level: 3 },
  { id: 'fi-003', formal: 'require', informal: 'need', translation: 'necesitar', example: { formal: 'We require further information.', informal: 'We need more info.' }, level: 3 },
  { id: 'fi-004', formal: 'assist', informal: 'help', translation: 'ayudar', example: { formal: 'May I assist you?', informal: 'Can I help?' }, level: 3 },
  { id: 'fi-005', formal: 'enquire/inquire', informal: 'ask', translation: 'preguntar', example: { formal: 'I\'d like to enquire about...', informal: 'I want to ask about...' }, level: 4 },
  { id: 'fi-006', formal: 'terminate', informal: 'end/finish', translation: 'terminar', example: { formal: 'The contract will terminate.', informal: 'The contract will end.' }, level: 5 },
  { id: 'fi-007', formal: 'obtain', informal: 'get', translation: 'obtener', example: { formal: 'How can I obtain a copy?', informal: 'How can I get a copy?' }, level: 4 },
  { id: 'fi-008', formal: 'sufficient', informal: 'enough', translation: 'suficiente', example: { formal: 'Is this sufficient?', informal: 'Is this enough?' }, level: 4 },
  { id: 'fi-009', formal: 'attempt', informal: 'try', translation: 'intentar', example: { formal: 'I will attempt to resolve this.', informal: 'I\'ll try to fix this.' }, level: 4 },
  { id: 'fi-010', formal: 'inform', informal: 'tell', translation: 'informar', example: { formal: 'Please inform me of any changes.', informal: 'Let me know if anything changes.' }, level: 3 },
  { id: 'fi-011', formal: 'request', informal: 'ask for', translation: 'solicitar', example: { formal: 'I request a refund.', informal: 'I\'d like my money back.' }, level: 3 },
  { id: 'fi-012', formal: 'reside', informal: 'live', translation: 'residir', example: { formal: 'Where do you reside?', informal: 'Where do you live?' }, level: 4 },
  { id: 'fi-013', formal: 'I regret to inform you', informal: 'I\'m sorry to tell you', translation: 'Lamento informarle', example: { formal: 'I regret to inform you that...', informal: 'Sorry, but...' }, level: 4 },
  { id: 'fi-014', formal: 'approximately', informal: 'about/around', translation: 'aproximadamente', example: { formal: 'It costs approximately $100.', informal: 'It\'s about $100.' }, level: 3 },
  { id: 'fi-015', formal: 'however', informal: 'but', translation: 'sin embargo', example: { formal: 'However, there is an issue.', informal: 'But there\'s a problem.' }, level: 3 }
];

// === NUMBERS, DATES, TIME ===
export interface NumberExpression {
  id: string;
  category: 'cardinals' | 'ordinals' | 'fractions' | 'dates' | 'time' | 'money' | 'measurements';
  expressions: {
    written: string;
    spoken: string;
    translation: string;
  }[];
  tips: string[];
  level: number;
}

export const numberExpressions: NumberExpression[] = [
  {
    id: 'num-ordinals',
    category: 'ordinals',
    level: 2,
    expressions: [
      { written: '1st', spoken: 'first', translation: 'primero' },
      { written: '2nd', spoken: 'second', translation: 'segundo' },
      { written: '3rd', spoken: 'third', translation: 'tercero' },
      { written: '4th', spoken: 'fourth', translation: 'cuarto' },
      { written: '5th', spoken: 'fifth', translation: 'quinto' },
      { written: '21st', spoken: 'twenty-first', translation: 'vigésimo primero' },
      { written: '100th', spoken: 'hundredth', translation: 'centésimo' }
    ],
    tips: [
      'Use ordinals for dates: "January 1st" (the first of January)',
      'Use ordinals for floors: "on the 3rd floor"',
      'Use ordinals for rankings: "She finished 2nd"'
    ]
  },
  {
    id: 'num-fractions',
    category: 'fractions',
    level: 3,
    expressions: [
      { written: '1/2', spoken: 'half / one half', translation: 'medio / una mitad' },
      { written: '1/3', spoken: 'one third / a third', translation: 'un tercio' },
      { written: '1/4', spoken: 'one quarter / a quarter / one fourth', translation: 'un cuarto' },
      { written: '3/4', spoken: 'three quarters / three fourths', translation: 'tres cuartos' },
      { written: '2/3', spoken: 'two thirds', translation: 'dos tercios' },
      { written: '1.5', spoken: 'one and a half / one point five', translation: 'uno y medio' }
    ],
    tips: [
      '"Half" doesn\'t need "a" before it: "half an hour" (not "a half hour" - though acceptable in US)',
      'Use "quarter" for 1/4 in everyday speech, "fourth" in math'
    ]
  },
  {
    id: 'num-dates',
    category: 'dates',
    level: 2,
    expressions: [
      { written: '01/15/2024 (US)', spoken: 'January fifteenth, twenty twenty-four', translation: '15 de enero de 2024' },
      { written: '15/01/2024 (UK)', spoken: 'the fifteenth of January, twenty twenty-four', translation: '15 de enero de 2024' },
      { written: '2024', spoken: 'twenty twenty-four', translation: '2024' },
      { written: '1999', spoken: 'nineteen ninety-nine', translation: '1999' },
      { written: '2000', spoken: 'two thousand / the year two thousand', translation: '2000' },
      { written: '2010', spoken: 'twenty ten / two thousand and ten', translation: '2010' }
    ],
    tips: [
      'US format: Month/Day/Year (MM/DD/YYYY)',
      'UK format: Day/Month/Year (DD/MM/YYYY)',
      'Years 2000-2009: say "two thousand and..." (2005 = two thousand and five)',
      'Years 2010+: say "twenty..." or "two thousand and..." (2015 = twenty fifteen OR two thousand and fifteen)'
    ]
  },
  {
    id: 'num-time',
    category: 'time',
    level: 2,
    expressions: [
      { written: '7:00', spoken: 'seven o\'clock', translation: 'siete en punto' },
      { written: '7:15', spoken: 'seven fifteen / quarter past seven', translation: 'siete y cuarto' },
      { written: '7:30', spoken: 'seven thirty / half past seven', translation: 'siete y media' },
      { written: '7:45', spoken: 'seven forty-five / quarter to eight', translation: 'ocho menos cuarto' },
      { written: '9:05', spoken: 'nine oh five / five past nine', translation: 'nueve y cinco' },
      { written: '12:00 PM', spoken: 'noon / midday', translation: 'mediodía' },
      { written: '12:00 AM', spoken: 'midnight', translation: 'medianoche' }
    ],
    tips: [
      'US prefers digital format (7:15), UK often uses "quarter past/to"',
      'Use "o\'clock" only for exact hours',
      'AM = morning, PM = afternoon/evening',
      '"Half past" is more British, "thirty" is more American'
    ]
  },
  {
    id: 'num-money',
    category: 'money',
    level: 2,
    expressions: [
      { written: '$5.00', spoken: 'five dollars', translation: 'cinco dólares' },
      { written: '$5.50', spoken: 'five dollars and fifty cents / five fifty', translation: 'cinco dólares con cincuenta' },
      { written: '$0.25', spoken: 'twenty-five cents / a quarter', translation: 'veinticinco centavos' },
      { written: '£10', spoken: 'ten pounds', translation: 'diez libras' },
      { written: '€15.99', spoken: 'fifteen euros ninety-nine', translation: 'quince euros con noventa y nueve' },
      { written: '$1,000,000', spoken: 'one million dollars / a million bucks (informal)', translation: 'un millón de dólares' }
    ],
    tips: [
      'In casual speech, drop "dollars" and "cents": "It\'s five fifty"',
      '"Buck" = informal for dollar',
      '"Quid" = informal for pound (UK)',
      'Large amounts: use "K" for thousand ($50K = fifty thousand dollars)'
    ]
  }
];

// Helper functions
export const getCollocationsByVerb = (verb: string): Collocation | undefined => {
  return collocations.find(c => c.verb.toLowerCase().includes(verb.toLowerCase()));
};

export const getFalseFriendsByLevel = (level: number): FalseFriend[] => {
  return falseFriends.filter(ff => ff.level <= level);
};

export const getWordFormationByType = (type: 'prefix' | 'suffix'): WordFormation[] => {
  return wordFormation.filter(wf => wf.type === type);
};

// === NEAR SYNONYMS WITH CONNOTATION NUANCES ===

export interface NearSynonymWord {
  word: string;
  connotation: 'positive' | 'negative' | 'neutral';
  intensity: 'weak' | 'medium' | 'strong';
  register: 'formal' | 'neutral' | 'informal';
  nuance: string;
  nuanceEs: string;
  example: string;
}

export interface NearSynonymSet {
  id: string;
  baseWord: string;
  baseWordEs: string;
  level: number; // 1–6 (A1–C2)
  category: string;
  words: NearSynonymWord[];
  commonMistake?: string;
  commonMistakeEs?: string;
}

export const nearSynonyms: NearSynonymSet[] = [
  {
    id: 'ns-thin',
    baseWord: 'thin',
    baseWordEs: 'delgado/a',
    level: 5, // C1
    category: 'appearance',
    words: [
      {
        word: 'thin',
        connotation: 'neutral',
        intensity: 'medium',
        register: 'neutral',
        nuance: 'Neutral descriptor — no positive or negative charge.',
        nuanceEs: 'Descriptor neutro, sin carga positiva ni negativa.',
        example: 'The model was quite thin.'
      },
      {
        word: 'slim',
        connotation: 'positive',
        intensity: 'medium',
        register: 'neutral',
        nuance: 'Implies a healthy, attractive body shape. Often used as a compliment.',
        nuanceEs: 'Implica una figura sana y atractiva. Se usa a menudo como cumplido.',
        example: 'She looked slim and fit after her holiday.'
      },
      {
        word: 'slender',
        connotation: 'positive',
        intensity: 'medium',
        register: 'formal',
        nuance: 'Elegant and literary. Suggests graceful thinness.',
        nuanceEs: 'Elegante y literario. Sugiere delgadez grácil.',
        example: 'Her slender fingers moved across the piano keys.'
      },
      {
        word: 'skinny',
        connotation: 'negative',
        intensity: 'strong',
        register: 'informal',
        nuance: 'Suggests unattractively or unhealthily thin. Can be rude.',
        nuanceEs: 'Sugiere una delgadez poco atractiva o poco saludable. Puede ser grosero.',
        example: 'He looked skinny and pale after the illness.'
      },
      {
        word: 'lean',
        connotation: 'positive',
        intensity: 'medium',
        register: 'neutral',
        nuance: 'Thin but strong; muscular, athletic. Often used for athletic bodies.',
        nuanceEs: 'Delgado pero fuerte; musculoso, atlético.',
        example: 'Years of cycling had given him a lean physique.'
      },
      {
        word: 'gaunt',
        connotation: 'negative',
        intensity: 'strong',
        register: 'formal',
        nuance: 'Unpleasantly thin, especially from illness or suffering. Very negative.',
        nuanceEs: 'Delgado de forma desagradable, especialmente por enfermedad. Muy negativo.',
        example: 'He returned from hospital looking gaunt and exhausted.'
      }
    ],
    commonMistake: 'Calling someone "skinny" as a compliment — it is usually offensive. Use "slim" instead.',
    commonMistakeEs: 'Llamar a alguien "skinny" como cumplido — generalmente es ofensivo. Usa "slim" en su lugar.'
  },
  {
    id: 'ns-walk',
    baseWord: 'walk',
    baseWordEs: 'caminar',
    level: 4, // B2
    category: 'movement',
    words: [
      {
        word: 'walk',
        connotation: 'neutral',
        intensity: 'medium',
        register: 'neutral',
        nuance: 'Generic, neutral movement on foot.',
        nuanceEs: 'Movimiento a pie genérico y neutro.',
        example: 'We walked to the station.'
      },
      {
        word: 'stroll',
        connotation: 'positive',
        intensity: 'weak',
        register: 'neutral',
        nuance: 'A slow, relaxed, pleasant walk with no particular purpose.',
        nuanceEs: 'Un paseo lento, relajado y agradable sin propósito particular.',
        example: 'We strolled along the beach at sunset.'
      },
      {
        word: 'stride',
        connotation: 'positive',
        intensity: 'strong',
        register: 'neutral',
        nuance: 'Walk with long, confident, purposeful steps.',
        nuanceEs: 'Caminar con pasos largos, seguros y decididos.',
        example: 'She strode into the room and took charge immediately.'
      },
      {
        word: 'march',
        connotation: 'neutral',
        intensity: 'strong',
        register: 'neutral',
        nuance: 'Walk with determined, rhythmic, military steps — or in protest.',
        nuanceEs: 'Caminar con pasos decididos, rítmicos y militares, o en protesta.',
        example: 'The protesters marched through the city centre.'
      },
      {
        word: 'trudge',
        connotation: 'negative',
        intensity: 'strong',
        register: 'neutral',
        nuance: 'Walk slowly and heavily when exhausted or through difficult terrain.',
        nuanceEs: 'Caminar lenta y pesadamente cuando se está agotado o en terreno difícil.',
        example: 'We trudged through the mud for three hours.'
      },
      {
        word: 'creep',
        connotation: 'negative',
        intensity: 'medium',
        register: 'neutral',
        nuance: 'Move slowly and quietly, often to avoid being noticed.',
        nuanceEs: 'Moverse lenta y silenciosamente, a menudo para no ser notado.',
        example: 'The cat crept towards the bird.'
      }
    ]
  },
  {
    id: 'ns-say',
    baseWord: 'say',
    baseWordEs: 'decir',
    level: 4, // B2
    category: 'speaking',
    words: [
      {
        word: 'say',
        connotation: 'neutral',
        intensity: 'weak',
        register: 'neutral',
        nuance: 'The most general and neutral verb for speech.',
        nuanceEs: 'El verbo más general y neutro para el habla.',
        example: 'She said she would be late.'
      },
      {
        word: 'mention',
        connotation: 'neutral',
        intensity: 'weak',
        register: 'neutral',
        nuance: 'To say something briefly, in passing, without emphasis.',
        nuanceEs: 'Decir algo brevemente, de pasada, sin énfasis.',
        example: 'He mentioned that he might leave early.'
      },
      {
        word: 'claim',
        connotation: 'neutral',
        intensity: 'medium',
        register: 'formal',
        nuance: 'To say something as true, but the speaker may not believe it. Can imply doubt.',
        nuanceEs: 'Decir algo como si fuera verdad, pero el hablante puede no creerlo. Puede implicar duda.',
        example: 'He claimed he had never met her before.'
      },
      {
        word: 'assert',
        connotation: 'positive',
        intensity: 'strong',
        register: 'formal',
        nuance: 'State something confidently and forcefully as a definite fact.',
        nuanceEs: 'Afirmar algo con confianza y firmeza como un hecho definitivo.',
        example: 'She asserted that the data was incorrect.'
      },
      {
        word: 'insist',
        connotation: 'neutral',
        intensity: 'strong',
        register: 'neutral',
        nuance: 'Say something firmly and repeatedly, especially despite disagreement.',
        nuanceEs: 'Decir algo con firmeza y repetidamente, especialmente a pesar del desacuerdo.',
        example: 'He insisted that he had paid the bill.'
      },
      {
        word: 'mutter',
        connotation: 'negative',
        intensity: 'weak',
        register: 'informal',
        nuance: 'Speak quietly and unclearly, often when displeased or to oneself.',
        nuanceEs: 'Hablar en voz baja e indistintamente, a menudo cuando se está descontento o para uno mismo.',
        example: 'She muttered a complaint under her breath.'
      }
    ],
    commonMistake: '"Claim" sounds sceptical in English — avoid using it neutrally when describing your own beliefs. Use "maintain" or "argue" instead.',
    commonMistakeEs: '"Claim" suena escéptico en inglés — evita usarlo de forma neutra al describir tus propias creencias. Usa "maintain" o "argue" en su lugar.'
  },
  {
    id: 'ns-happy',
    baseWord: 'happy',
    baseWordEs: 'feliz / contento',
    level: 3, // B1
    category: 'emotions',
    words: [
      {
        word: 'pleased',
        connotation: 'positive',
        intensity: 'medium',
        register: 'formal',
        nuance: 'Satisfied and happy about a specific outcome.',
        nuanceEs: 'Satisfecho y contento con un resultado específico.',
        example: 'I\'m pleased with the test results.'
      },
      {
        word: 'content',
        connotation: 'positive',
        intensity: 'weak',
        register: 'neutral',
        nuance: 'Quietly satisfied; not seeking more. A calm, settled happiness.',
        nuanceEs: 'Tranquilamente satisfecho; no busca más. Una felicidad calmada y asentada.',
        example: 'She was content with her simple life.'
      },
      {
        word: 'delighted',
        connotation: 'positive',
        intensity: 'strong',
        register: 'neutral',
        nuance: 'Very happy and excited, often about something specific.',
        nuanceEs: 'Muy feliz y emocionado, a menudo por algo específico.',
        example: 'I\'m delighted to hear that you passed your exam!'
      },
      {
        word: 'ecstatic',
        connotation: 'positive',
        intensity: 'strong',
        register: 'informal',
        nuance: 'Overwhelmingly, almost uncontrollably happy.',
        nuanceEs: 'Abrumadoramente, casi descontroladamente feliz.',
        example: 'She was ecstatic when she won the gold medal.'
      },
      {
        word: 'elated',
        connotation: 'positive',
        intensity: 'strong',
        register: 'formal',
        nuance: 'Extremely proud and happy, often after an achievement.',
        nuanceEs: 'Extremadamente orgulloso y feliz, a menudo tras un logro.',
        example: 'He felt elated after finishing the marathon.'
      }
    ]
  },
  {
    id: 'ns-angry',
    baseWord: 'angry',
    baseWordEs: 'enfadado / molesto',
    level: 3, // B1
    category: 'emotions',
    words: [
      {
        word: 'annoyed',
        connotation: 'negative',
        intensity: 'weak',
        register: 'neutral',
        nuance: 'Mildly angry about something small.',
        nuanceEs: 'Ligeramente enfadado por algo pequeño.',
        example: 'I was annoyed by the noise.'
      },
      {
        word: 'irritated',
        connotation: 'negative',
        intensity: 'weak',
        register: 'neutral',
        nuance: 'Slightly more intense than annoyed; a nagging frustration.',
        nuanceEs: 'Ligeramente más intenso que annoy; una frustración molesta.',
        example: 'She was irritated by the constant interruptions.'
      },
      {
        word: 'angry',
        connotation: 'negative',
        intensity: 'medium',
        register: 'neutral',
        nuance: 'The standard, neutral word for the emotion.',
        nuanceEs: 'La palabra estándar y neutra para la emoción.',
        example: 'He was angry when he saw the broken window.'
      },
      {
        word: 'furious',
        connotation: 'negative',
        intensity: 'strong',
        register: 'neutral',
        nuance: 'Very angry; intense but may calm down.',
        nuanceEs: 'Muy enfadado; intenso pero puede calmarse.',
        example: 'She was furious when she found out they had lied.'
      },
      {
        word: 'livid',
        connotation: 'negative',
        intensity: 'strong',
        register: 'informal',
        nuance: 'Extremely angry, almost out of control. Very strong word.',
        nuanceEs: 'Extremadamente enfadado, casi descontrolado. Palabra muy fuerte.',
        example: 'He was absolutely livid about the decision.'
      }
    ]
  },
  {
    id: 'ns-look',
    baseWord: 'look at',
    baseWordEs: 'mirar',
    level: 4, // B2
    category: 'perception',
    words: [
      {
        word: 'glance',
        connotation: 'neutral',
        intensity: 'weak',
        register: 'neutral',
        nuance: 'Look quickly for a brief moment.',
        nuanceEs: 'Mirar rápidamente por un breve momento.',
        example: 'She glanced at her watch and frowned.'
      },
      {
        word: 'stare',
        connotation: 'negative',
        intensity: 'strong',
        register: 'neutral',
        nuance: 'Look fixedly for a long time — often considered rude.',
        nuanceEs: 'Mirar fijamente durante mucho tiempo, a menudo considerado grosero.',
        example: 'Stop staring — it\'s rude!'
      },
      {
        word: 'gaze',
        connotation: 'positive',
        intensity: 'medium',
        register: 'formal',
        nuance: 'Look steadily and with admiration, love, or wonder.',
        nuanceEs: 'Mirar fijamente con admiración, amor o asombro.',
        example: 'They gazed at the stars in silence.'
      },
      {
        word: 'peer',
        connotation: 'neutral',
        intensity: 'medium',
        register: 'neutral',
        nuance: 'Look with difficulty, as if straining to see something unclear.',
        nuanceEs: 'Mirar con dificultad, como esforzándose por ver algo poco claro.',
        example: 'She peered through the fog trying to see the road.'
      },
      {
        word: 'squint',
        connotation: 'neutral',
        intensity: 'medium',
        register: 'informal',
        nuance: 'Look with narrowed eyes — due to brightness, poor vision, or concentration.',
        nuanceEs: 'Mirar con los ojos entrecerrados debido al brillo, la mala visión o la concentración.',
        example: 'He squinted at the tiny print on the label.'
      }
    ]
  }
];

export const getNearSynonymsByLevel = (level: number): NearSynonymSet[] =>
  nearSynonyms.filter(s => s.level <= level);

export default {
  collocations,
  falseFriends,
  wordFormation,
  synonymsAntonyms,
  formalInformal,
  numberExpressions,
  nearSynonyms
};
