// Word Families - Relationships between words through roots, prefixes, suffixes
// Helps learners understand word formation patterns

export interface WordFamily {
  id: string;
  root: string;
  rootMeaning: string;
  rootMeaningEs: string;
  origin: 'latin' | 'greek' | 'germanic' | 'other';
  words: WordMember[];
}

export interface WordMember {
  word: string;
  type: 'noun' | 'verb' | 'adjective' | 'adverb' | 'other';
  definition: string;
  definitionEs: string;
  example: string;
  exampleEs: string;
  prefix?: string;
  suffix?: string;
}

export interface Prefix {
  prefix: string;
  meaning: string;
  meaningEs: string;
  examples: string[];
}

export interface Suffix {
  suffix: string;
  meaning: string;
  meaningEs: string;
  changesTo: string;
  examples: string[];
}

// Common prefixes
export const prefixes: Prefix[] = [
  { prefix: 'un-', meaning: 'not, opposite', meaningEs: 'no, opuesto', examples: ['unhappy', 'unclear', 'unfair'] },
  { prefix: 'dis-', meaning: 'not, opposite', meaningEs: 'no, opuesto', examples: ['disagree', 'disappear', 'disconnect'] },
  { prefix: 're-', meaning: 'again, back', meaningEs: 'de nuevo, atrás', examples: ['return', 'rewrite', 'rebuild'] },
  { prefix: 'pre-', meaning: 'before', meaningEs: 'antes', examples: ['preview', 'predict', 'prepare'] },
  { prefix: 'mis-', meaning: 'wrongly, badly', meaningEs: 'mal, incorrectamente', examples: ['mistake', 'misunderstand', 'mislead'] },
  { prefix: 'over-', meaning: 'too much, above', meaningEs: 'demasiado, encima', examples: ['overwork', 'overcome', 'overlook'] },
  { prefix: 'under-', meaning: 'below, not enough', meaningEs: 'debajo, insuficiente', examples: ['understand', 'underestimate', 'underwater'] },
  { prefix: 'inter-', meaning: 'between, among', meaningEs: 'entre', examples: ['international', 'interact', 'interview'] },
  { prefix: 'sub-', meaning: 'under, below', meaningEs: 'debajo, bajo', examples: ['submarine', 'subtract', 'suburb'] },
  { prefix: 'super-', meaning: 'above, beyond', meaningEs: 'encima, más allá', examples: ['superman', 'supervisor', 'supernatural'] },
  { prefix: 'anti-', meaning: 'against', meaningEs: 'contra', examples: ['antisocial', 'antibody', 'antibiotic'] },
  { prefix: 'auto-', meaning: 'self', meaningEs: 'propio, auto', examples: ['automatic', 'autobiography', 'automobile'] },
  { prefix: 'bi-', meaning: 'two', meaningEs: 'dos', examples: ['bicycle', 'bilingual', 'biweekly'] },
  { prefix: 'co-', meaning: 'together, with', meaningEs: 'junto, con', examples: ['cooperate', 'coworker', 'coexist'] },
  { prefix: 'ex-', meaning: 'out, former', meaningEs: 'fuera, antiguo', examples: ['export', 'exclude', 'ex-president'] },
];

// Common suffixes
export const suffixes: Suffix[] = [
  { suffix: '-tion/-sion', meaning: 'state, action', meaningEs: 'estado, acción', changesTo: 'noun', examples: ['creation', 'decision', 'education'] },
  { suffix: '-ment', meaning: 'state, result', meaningEs: 'estado, resultado', changesTo: 'noun', examples: ['movement', 'agreement', 'development'] },
  { suffix: '-ness', meaning: 'quality, state', meaningEs: 'cualidad, estado', changesTo: 'noun', examples: ['happiness', 'darkness', 'kindness'] },
  { suffix: '-ity', meaning: 'quality, state', meaningEs: 'cualidad, estado', changesTo: 'noun', examples: ['creativity', 'simplicity', 'activity'] },
  { suffix: '-able/-ible', meaning: 'capable of', meaningEs: 'capaz de', changesTo: 'adjective', examples: ['readable', 'possible', 'visible'] },
  { suffix: '-ful', meaning: 'full of', meaningEs: 'lleno de', changesTo: 'adjective', examples: ['beautiful', 'careful', 'helpful'] },
  { suffix: '-less', meaning: 'without', meaningEs: 'sin', changesTo: 'adjective', examples: ['homeless', 'careless', 'hopeless'] },
  { suffix: '-ly', meaning: 'in a manner', meaningEs: 'de manera', changesTo: 'adverb', examples: ['quickly', 'happily', 'carefully'] },
  { suffix: '-ize/-ise', meaning: 'to make', meaningEs: 'hacer', changesTo: 'verb', examples: ['organize', 'realize', 'specialize'] },
  { suffix: '-er/-or', meaning: 'one who does', meaningEs: 'quien hace', changesTo: 'noun', examples: ['teacher', 'actor', 'writer'] },
  { suffix: '-ist', meaning: 'one who practices', meaningEs: 'quien practica', changesTo: 'noun', examples: ['artist', 'scientist', 'pianist'] },
  { suffix: '-ous/-ious', meaning: 'having quality', meaningEs: 'que tiene cualidad', changesTo: 'adjective', examples: ['dangerous', 'curious', 'famous'] },
];

// Word families
export const wordFamilies: WordFamily[] = [
  // CREATE family
  {
    id: 'create',
    root: 'creat-',
    rootMeaning: 'to make, to produce',
    rootMeaningEs: 'hacer, producir',
    origin: 'latin',
    words: [
      {
        word: 'create',
        type: 'verb',
        definition: 'to bring something into existence',
        definitionEs: 'traer algo a la existencia',
        example: 'Artists create beautiful paintings.',
        exampleEs: 'Los artistas crean pinturas hermosas.',
      },
      {
        word: 'creation',
        type: 'noun',
        definition: 'the act of making something or the thing made',
        definitionEs: 'el acto de hacer algo o lo que se hizo',
        example: 'The creation of the website took three months.',
        exampleEs: 'La creación del sitio web tomó tres meses.',
        suffix: '-tion',
      },
      {
        word: 'creative',
        type: 'adjective',
        definition: 'having the ability to create original things',
        definitionEs: 'que tiene la habilidad de crear cosas originales',
        example: 'She has a very creative mind.',
        exampleEs: 'Ella tiene una mente muy creativa.',
        suffix: '-ive',
      },
      {
        word: 'creativity',
        type: 'noun',
        definition: 'the use of imagination to produce original ideas',
        definitionEs: 'el uso de la imaginación para producir ideas originales',
        example: 'Creativity is important in problem-solving.',
        exampleEs: 'La creatividad es importante en la resolución de problemas.',
        suffix: '-ivity',
      },
      {
        word: 'creatively',
        type: 'adverb',
        definition: 'in a creative manner',
        definitionEs: 'de manera creativa',
        example: 'She solved the problem creatively.',
        exampleEs: 'Ella resolvió el problema creativamente.',
        suffix: '-ly',
      },
      {
        word: 'creator',
        type: 'noun',
        definition: 'a person who creates',
        definitionEs: 'una persona que crea',
        example: 'The creator of the app became famous.',
        exampleEs: 'El creador de la app se volvió famoso.',
        suffix: '-or',
      },
      {
        word: 'recreation',
        type: 'noun',
        definition: 'activity done for enjoyment',
        definitionEs: 'actividad hecha por disfrute',
        example: 'Swimming is my favorite recreation.',
        exampleEs: 'Nadar es mi recreación favorita.',
        prefix: 're-',
        suffix: '-tion',
      },
    ],
  },

  // ACT family
  {
    id: 'act',
    root: 'act-',
    rootMeaning: 'to do, to drive',
    rootMeaningEs: 'hacer, impulsar',
    origin: 'latin',
    words: [
      {
        word: 'act',
        type: 'verb',
        definition: 'to do something, to take action',
        definitionEs: 'hacer algo, tomar acción',
        example: 'We need to act quickly.',
        exampleEs: 'Necesitamos actuar rápidamente.',
      },
      {
        word: 'action',
        type: 'noun',
        definition: 'the process of doing something',
        definitionEs: 'el proceso de hacer algo',
        example: 'The action movie was exciting.',
        exampleEs: 'La película de acción fue emocionante.',
        suffix: '-ion',
      },
      {
        word: 'active',
        type: 'adjective',
        definition: 'engaging in physical activity; lively',
        definitionEs: 'que participa en actividad física; animado',
        example: 'She leads an active lifestyle.',
        exampleEs: 'Ella lleva un estilo de vida activo.',
        suffix: '-ive',
      },
      {
        word: 'activity',
        type: 'noun',
        definition: 'a thing that a person does',
        definitionEs: 'una cosa que una persona hace',
        example: 'Reading is a relaxing activity.',
        exampleEs: 'Leer es una actividad relajante.',
        suffix: '-ity',
      },
      {
        word: 'actor',
        type: 'noun',
        definition: 'a person who performs in plays or movies',
        definitionEs: 'una persona que actúa en obras o películas',
        example: 'The actor won an award.',
        exampleEs: 'El actor ganó un premio.',
        suffix: '-or',
      },
      {
        word: 'react',
        type: 'verb',
        definition: 'to respond to something',
        definitionEs: 'responder a algo',
        example: 'How did she react to the news?',
        exampleEs: '¿Cómo reaccionó ella a las noticias?',
        prefix: 're-',
      },
      {
        word: 'reaction',
        type: 'noun',
        definition: 'a response to something',
        definitionEs: 'una respuesta a algo',
        example: 'His reaction was unexpected.',
        exampleEs: 'Su reacción fue inesperada.',
        prefix: 're-',
        suffix: '-ion',
      },
      {
        word: 'interactive',
        type: 'adjective',
        definition: 'allowing two-way communication',
        definitionEs: 'que permite comunicación bidireccional',
        example: 'The app has interactive features.',
        exampleEs: 'La app tiene características interactivas.',
        prefix: 'inter-',
        suffix: '-ive',
      },
      {
        word: 'inactive',
        type: 'adjective',
        definition: 'not active; idle',
        definitionEs: 'no activo; inactivo',
        example: 'The account has been inactive.',
        exampleEs: 'La cuenta ha estado inactiva.',
        prefix: 'in-',
        suffix: '-ive',
      },
    ],
  },

  // FORM family
  {
    id: 'form',
    root: 'form-',
    rootMeaning: 'shape, structure',
    rootMeaningEs: 'forma, estructura',
    origin: 'latin',
    words: [
      {
        word: 'form',
        type: 'noun',
        definition: 'the shape or structure of something',
        definitionEs: 'la forma o estructura de algo',
        example: 'Please fill out this form.',
        exampleEs: 'Por favor complete este formulario.',
      },
      {
        word: 'formal',
        type: 'adjective',
        definition: 'following established conventions',
        definitionEs: 'siguiendo convenciones establecidas',
        example: 'The meeting was very formal.',
        exampleEs: 'La reunión fue muy formal.',
        suffix: '-al',
      },
      {
        word: 'format',
        type: 'noun',
        definition: 'the arrangement or layout of something',
        definitionEs: 'el arreglo o diseño de algo',
        example: 'What format is the file in?',
        exampleEs: '¿En qué formato está el archivo?',
      },
      {
        word: 'formation',
        type: 'noun',
        definition: 'the act of forming or creating',
        definitionEs: 'el acto de formar o crear',
        example: 'The formation of clouds is fascinating.',
        exampleEs: 'La formación de nubes es fascinante.',
        suffix: '-ation',
      },
      {
        word: 'transform',
        type: 'verb',
        definition: 'to change completely',
        definitionEs: 'cambiar completamente',
        example: 'Technology can transform our lives.',
        exampleEs: 'La tecnología puede transformar nuestras vidas.',
        prefix: 'trans-',
      },
      {
        word: 'transformation',
        type: 'noun',
        definition: 'a complete change',
        definitionEs: 'un cambio completo',
        example: 'The city underwent a transformation.',
        exampleEs: 'La ciudad experimentó una transformación.',
        prefix: 'trans-',
        suffix: '-ation',
      },
      {
        word: 'inform',
        type: 'verb',
        definition: 'to give information to someone',
        definitionEs: 'dar información a alguien',
        example: 'Please inform me of any changes.',
        exampleEs: 'Por favor infórmeme de cualquier cambio.',
        prefix: 'in-',
      },
      {
        word: 'information',
        type: 'noun',
        definition: 'facts or knowledge about something',
        definitionEs: 'hechos o conocimiento sobre algo',
        example: 'I need more information.',
        exampleEs: 'Necesito más información.',
        prefix: 'in-',
        suffix: '-ation',
      },
      {
        word: 'reform',
        type: 'verb',
        definition: 'to make changes to improve something',
        definitionEs: 'hacer cambios para mejorar algo',
        example: 'They want to reform the education system.',
        exampleEs: 'Quieren reformar el sistema educativo.',
        prefix: 're-',
      },
      {
        word: 'perform',
        type: 'verb',
        definition: 'to carry out an action or entertainment',
        definitionEs: 'llevar a cabo una acción o entretenimiento',
        example: 'The band will perform tonight.',
        exampleEs: 'La banda actuará esta noche.',
        prefix: 'per-',
      },
      {
        word: 'performance',
        type: 'noun',
        definition: 'an act of performing; how well someone does',
        definitionEs: 'un acto de actuar; qué tan bien alguien lo hace',
        example: 'Her performance was amazing.',
        exampleEs: 'Su actuación fue increíble.',
        prefix: 'per-',
        suffix: '-ance',
      },
    ],
  },

  // PORT family
  {
    id: 'port',
    root: 'port-',
    rootMeaning: 'to carry',
    rootMeaningEs: 'llevar, transportar',
    origin: 'latin',
    words: [
      {
        word: 'port',
        type: 'noun',
        definition: 'a harbor; a place for ships',
        definitionEs: 'un puerto; un lugar para barcos',
        example: 'The ship arrived at the port.',
        exampleEs: 'El barco llegó al puerto.',
      },
      {
        word: 'portable',
        type: 'adjective',
        definition: 'able to be carried easily',
        definitionEs: 'que puede ser transportado fácilmente',
        example: 'I have a portable charger.',
        exampleEs: 'Tengo un cargador portátil.',
        suffix: '-able',
      },
      {
        word: 'transport',
        type: 'verb',
        definition: 'to carry from one place to another',
        definitionEs: 'llevar de un lugar a otro',
        example: 'Trucks transport goods across the country.',
        exampleEs: 'Los camiones transportan productos por el país.',
        prefix: 'trans-',
      },
      {
        word: 'transportation',
        type: 'noun',
        definition: 'the movement of people or goods',
        definitionEs: 'el movimiento de personas o bienes',
        example: 'Public transportation is convenient.',
        exampleEs: 'El transporte público es conveniente.',
        prefix: 'trans-',
        suffix: '-ation',
      },
      {
        word: 'export',
        type: 'verb',
        definition: 'to send goods to another country',
        definitionEs: 'enviar productos a otro país',
        example: 'They export coffee to Europe.',
        exampleEs: 'Ellos exportan café a Europa.',
        prefix: 'ex-',
      },
      {
        word: 'import',
        type: 'verb',
        definition: 'to bring goods from another country',
        definitionEs: 'traer productos de otro país',
        example: 'We import electronics from Asia.',
        exampleEs: 'Importamos electrónicos de Asia.',
        prefix: 'im-',
      },
      {
        word: 'report',
        type: 'noun',
        definition: 'an account of something observed',
        definitionEs: 'un relato de algo observado',
        example: 'The report was very detailed.',
        exampleEs: 'El informe fue muy detallado.',
        prefix: 're-',
      },
      {
        word: 'support',
        type: 'verb',
        definition: 'to hold up; to give assistance',
        definitionEs: 'sostener; dar asistencia',
        example: 'I will always support you.',
        exampleEs: 'Siempre te apoyaré.',
        prefix: 'sup-',
      },
      {
        word: 'supportive',
        type: 'adjective',
        definition: 'giving help and encouragement',
        definitionEs: 'que da ayuda y ánimo',
        example: 'My family is very supportive.',
        exampleEs: 'Mi familia es muy solidaria.',
        prefix: 'sup-',
        suffix: '-ive',
      },
    ],
  },

  // SPECT family
  {
    id: 'spect',
    root: 'spect-',
    rootMeaning: 'to look, to see',
    rootMeaningEs: 'mirar, ver',
    origin: 'latin',
    words: [
      {
        word: 'spectacle',
        type: 'noun',
        definition: 'an impressive display; eyeglasses',
        definitionEs: 'una exhibición impresionante; anteojos',
        example: 'The fireworks were a spectacle.',
        exampleEs: 'Los fuegos artificiales fueron un espectáculo.',
      },
      {
        word: 'spectacular',
        type: 'adjective',
        definition: 'beautiful or impressive',
        definitionEs: 'hermoso o impresionante',
        example: 'The view was spectacular.',
        exampleEs: 'La vista fue espectacular.',
        suffix: '-ular',
      },
      {
        word: 'spectator',
        type: 'noun',
        definition: 'a person who watches an event',
        definitionEs: 'una persona que mira un evento',
        example: 'The spectators cheered loudly.',
        exampleEs: 'Los espectadores aplaudieron fuertemente.',
        suffix: '-ator',
      },
      {
        word: 'inspect',
        type: 'verb',
        definition: 'to look at something carefully',
        definitionEs: 'mirar algo cuidadosamente',
        example: 'The police will inspect the building.',
        exampleEs: 'La policía inspeccionará el edificio.',
        prefix: 'in-',
      },
      {
        word: 'inspection',
        type: 'noun',
        definition: 'the act of examining something',
        definitionEs: 'el acto de examinar algo',
        example: 'The car passed the inspection.',
        exampleEs: 'El auto pasó la inspección.',
        prefix: 'in-',
        suffix: '-ion',
      },
      {
        word: 'respect',
        type: 'noun',
        definition: 'admiration for someone or something',
        definitionEs: 'admiración por alguien o algo',
        example: 'I have great respect for teachers.',
        exampleEs: 'Tengo gran respeto por los profesores.',
        prefix: 're-',
      },
      {
        word: 'respectful',
        type: 'adjective',
        definition: 'showing respect',
        definitionEs: 'que muestra respeto',
        example: 'Please be respectful to others.',
        exampleEs: 'Por favor sé respetuoso con los demás.',
        prefix: 're-',
        suffix: '-ful',
      },
      {
        word: 'expect',
        type: 'verb',
        definition: 'to believe something will happen',
        definitionEs: 'creer que algo pasará',
        example: 'I expect him to arrive soon.',
        exampleEs: 'Espero que él llegue pronto.',
        prefix: 'ex-',
      },
      {
        word: 'expectation',
        type: 'noun',
        definition: 'a belief about what will happen',
        definitionEs: 'una creencia sobre lo que pasará',
        example: 'The movie exceeded my expectations.',
        exampleEs: 'La película superó mis expectativas.',
        prefix: 'ex-',
        suffix: '-ation',
      },
      {
        word: 'suspect',
        type: 'verb',
        definition: 'to believe someone is guilty',
        definitionEs: 'creer que alguien es culpable',
        example: 'I suspect he is lying.',
        exampleEs: 'Sospecho que él está mintiendo.',
        prefix: 'sus-',
      },
      {
        word: 'perspective',
        type: 'noun',
        definition: 'a point of view',
        definitionEs: 'un punto de vista',
        example: 'Try to see it from my perspective.',
        exampleEs: 'Intenta verlo desde mi perspectiva.',
        prefix: 'per-',
        suffix: '-ive',
      },
    ],
  },

  // DUCT family
  {
    id: 'duct',
    root: 'duct-/duc-',
    rootMeaning: 'to lead, to guide',
    rootMeaningEs: 'guiar, conducir',
    origin: 'latin',
    words: [
      {
        word: 'conduct',
        type: 'verb',
        definition: 'to lead or guide; to behave',
        definitionEs: 'guiar o conducir; comportarse',
        example: 'She will conduct the meeting.',
        exampleEs: 'Ella conducirá la reunión.',
        prefix: 'con-',
      },
      {
        word: 'conductor',
        type: 'noun',
        definition: 'one who leads; material that conducts',
        definitionEs: 'quien guía; material que conduce',
        example: 'The orchestra conductor was talented.',
        exampleEs: 'El director de orquesta era talentoso.',
        prefix: 'con-',
        suffix: '-or',
      },
      {
        word: 'produce',
        type: 'verb',
        definition: 'to make or create',
        definitionEs: 'hacer o crear',
        example: 'Factories produce many goods.',
        exampleEs: 'Las fábricas producen muchos bienes.',
        prefix: 'pro-',
      },
      {
        word: 'product',
        type: 'noun',
        definition: 'something that is made',
        definitionEs: 'algo que se hace',
        example: 'This is our best product.',
        exampleEs: 'Este es nuestro mejor producto.',
        prefix: 'pro-',
      },
      {
        word: 'production',
        type: 'noun',
        definition: 'the process of making something',
        definitionEs: 'el proceso de hacer algo',
        example: 'Production increased this year.',
        exampleEs: 'La producción aumentó este año.',
        prefix: 'pro-',
        suffix: '-ion',
      },
      {
        word: 'productive',
        type: 'adjective',
        definition: 'producing good results',
        definitionEs: 'que produce buenos resultados',
        example: 'It was a productive meeting.',
        exampleEs: 'Fue una reunión productiva.',
        prefix: 'pro-',
        suffix: '-ive',
      },
      {
        word: 'reduce',
        type: 'verb',
        definition: 'to make smaller or less',
        definitionEs: 'hacer más pequeño o menos',
        example: 'We need to reduce costs.',
        exampleEs: 'Necesitamos reducir costos.',
        prefix: 're-',
      },
      {
        word: 'reduction',
        type: 'noun',
        definition: 'the act of making less',
        definitionEs: 'el acto de hacer menos',
        example: 'There was a price reduction.',
        exampleEs: 'Hubo una reducción de precio.',
        prefix: 're-',
        suffix: '-ion',
      },
      {
        word: 'introduce',
        type: 'verb',
        definition: 'to present someone or something new',
        definitionEs: 'presentar a alguien o algo nuevo',
        example: 'Let me introduce you to my friend.',
        exampleEs: 'Déjame presentarte a mi amigo.',
        prefix: 'intro-',
      },
      {
        word: 'introduction',
        type: 'noun',
        definition: 'the act of introducing',
        definitionEs: 'el acto de introducir',
        example: 'The introduction was brief.',
        exampleEs: 'La introducción fue breve.',
        prefix: 'intro-',
        suffix: '-ion',
      },
      {
        word: 'educate',
        type: 'verb',
        definition: 'to teach or train',
        definitionEs: 'enseñar o entrenar',
        example: 'Schools educate children.',
        exampleEs: 'Las escuelas educan a los niños.',
        prefix: 'e-',
      },
      {
        word: 'education',
        type: 'noun',
        definition: 'the process of teaching and learning',
        definitionEs: 'el proceso de enseñar y aprender',
        example: 'Education is very important.',
        exampleEs: 'La educación es muy importante.',
        prefix: 'e-',
        suffix: '-ion',
      },
    ],
  },
];

// Helper functions
export const getWordFamilyById = (id: string): WordFamily | undefined => {
  return wordFamilies.find(wf => wf.id === id);
};

export const getWordsByType = (familyId: string, type: WordMember['type']): WordMember[] => {
  const family = getWordFamilyById(familyId);
  return family?.words.filter(w => w.type === type) || [];
};

export const findWordInFamilies = (word: string): { family: WordFamily; member: WordMember } | undefined => {
  for (const family of wordFamilies) {
    const member = family.words.find(w => w.word.toLowerCase() === word.toLowerCase());
    if (member) {
      return { family, member };
    }
  }
  return undefined;
};

export const getPrefixInfo = (prefix: string): Prefix | undefined => {
  return prefixes.find(p => p.prefix === prefix || p.prefix === prefix + '-');
};

export const getSuffixInfo = (suffix: string): Suffix | undefined => {
  return suffixes.find(s => s.suffix === suffix || s.suffix === '-' + suffix);
};

export const getWordsByPrefix = (prefix: string): WordMember[] => {
  const results: WordMember[] = [];
  for (const family of wordFamilies) {
    for (const word of family.words) {
      if (word.prefix === prefix || word.prefix === prefix.replace('-', '')) {
        results.push(word);
      }
    }
  }
  return results;
};

export const getWordsBySuffix = (suffix: string): WordMember[] => {
  const results: WordMember[] = [];
  for (const family of wordFamilies) {
    for (const word of family.words) {
      if (word.suffix === suffix || word.suffix === suffix.replace('-', '')) {
        results.push(word);
      }
    }
  }
  return results;
};
