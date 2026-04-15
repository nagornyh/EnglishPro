// Semi-Modals / Modal-like Expressions
// Be able to, Be supposed to, Be allowed to, Be going to, Have to, etc.

export interface SemiModal {
  id: string;
  expression: string;
  nameEs: string;
  level: number;
  equivalentModal?: string;
  uses: {
    use: string;
    useEs: string;
    examples: { english: string; spanish: string }[];
  }[];
  tenses: {
    tense: string;
    form: string;
    example: string;
  }[];
  commonMistakes: {
    wrong: string;
    correct: string;
    explanation: string;
  }[];
}

export const semiModals: SemiModal[] = [
  // === BE ABLE TO ===
  {
    id: 'be-able-to',
    expression: 'Be able to',
    nameEs: 'Ser capaz de / Poder',
    level: 2,
    equivalentModal: 'can/could',
    uses: [
      {
        use: 'Ability (alternative to can)',
        useEs: 'Habilidad (alternativa a can)',
        examples: [
          { english: 'I am able to swim. (= I can swim)', spanish: 'Puedo nadar.' },
          { english: 'She isn\'t able to come. (= She can\'t come)', spanish: 'Ella no puede venir.' }
        ]
      },
      {
        use: 'Used in tenses where "can" can\'t be used',
        useEs: 'Usado en tiempos donde "can" no se puede usar',
        examples: [
          { english: 'I will be able to help you tomorrow. (future)', spanish: 'Podré ayudarte mañana.' },
          { english: 'I have been able to finish early. (present perfect)', spanish: 'He podido terminar temprano.' },
          { english: 'I want to be able to speak French. (infinitive)', spanish: 'Quiero poder hablar francés.' }
        ]
      },
      {
        use: 'Managed to do (in the past)',
        useEs: 'Lograr hacer (en el pasado)',
        examples: [
          { english: 'I was able to escape. (= I managed to escape)', spanish: 'Pude escapar. (lo logré)' },
          { english: 'Were you able to find it?', spanish: '¿Pudiste encontrarlo?' }
        ]
      }
    ],
    tenses: [
      { tense: 'Present', form: 'am/is/are able to', example: 'I am able to help.' },
      { tense: 'Past', form: 'was/were able to', example: 'I was able to finish.' },
      { tense: 'Future', form: 'will be able to', example: 'I will be able to come.' },
      { tense: 'Present Perfect', form: 'have/has been able to', example: 'I have been able to save money.' },
      { tense: 'Infinitive', form: 'to be able to', example: 'I hope to be able to help.' }
    ],
    commonMistakes: [
      { wrong: 'I will can help.', correct: 'I will be able to help.', explanation: 'Can\'t be used with "will". Use "be able to".' },
      { wrong: 'I have could do it.', correct: 'I have been able to do it.', explanation: 'Can/could can\'t be used in perfect tenses.' }
    ]
  },

  // === BE SUPPOSED TO ===
  {
    id: 'be-supposed-to',
    expression: 'Be supposed to',
    nameEs: 'Se supone que / Deber',
    level: 3,
    uses: [
      {
        use: 'Expectations (what should happen)',
        useEs: 'Expectativas (lo que debería pasar)',
        examples: [
          { english: 'You\'re supposed to be at work at 9.', spanish: 'Se supone que debes estar en el trabajo a las 9.' },
          { english: 'This is supposed to be the best restaurant.', spanish: 'Se supone que este es el mejor restaurante.' }
        ]
      },
      {
        use: 'Rules or obligations',
        useEs: 'Reglas u obligaciones',
        examples: [
          { english: 'You\'re not supposed to smoke here.', spanish: 'Se supone que no debes fumar aquí.' },
          { english: 'Students are supposed to wear uniforms.', spanish: 'Se supone que los estudiantes deben usar uniforme.' }
        ]
      },
      {
        use: 'Something didn\'t happen as expected',
        useEs: 'Algo no pasó como se esperaba',
        examples: [
          { english: 'He was supposed to call me. (but he didn\'t)', spanish: 'Se suponía que me llamaría. (pero no lo hizo)' },
          { english: 'It was supposed to rain today.', spanish: 'Se suponía que llovería hoy.' }
        ]
      },
      {
        use: 'Reputation or belief',
        useEs: 'Reputación o creencia',
        examples: [
          { english: 'She\'s supposed to be very rich.', spanish: 'Se supone que es muy rica.' },
          { english: 'This drug is supposed to help with pain.', spanish: 'Se supone que esta medicina ayuda con el dolor.' }
        ]
      }
    ],
    tenses: [
      { tense: 'Present', form: 'am/is/are supposed to', example: 'I\'m supposed to work late.' },
      { tense: 'Past', form: 'was/were supposed to', example: 'He was supposed to be here.' },
      { tense: 'Present Perfect', form: 'have/has been supposed to', example: 'rare usage' }
    ],
    commonMistakes: [
      { wrong: 'I supposed to go.', correct: 'I\'m supposed to go.', explanation: 'Don\'t forget the verb "be".' },
      { wrong: 'You\'re suppose to call.', correct: 'You\'re supposed to call.', explanation: '"Supposed" needs the -d.' }
    ]
  },

  // === BE ALLOWED TO ===
  {
    id: 'be-allowed-to',
    expression: 'Be allowed to',
    nameEs: 'Tener permiso para / Poder',
    level: 2,
    equivalentModal: 'can/may (permission)',
    uses: [
      {
        use: 'Permission (formal)',
        useEs: 'Permiso (formal)',
        examples: [
          { english: 'You are allowed to leave early.', spanish: 'Tienes permiso para irte temprano.' },
          { english: 'Smoking is not allowed here.', spanish: 'No está permitido fumar aquí.' }
        ]
      },
      {
        use: 'Rules and regulations',
        useEs: 'Reglas y regulaciones',
        examples: [
          { english: 'Visitors are allowed to stay until 8 PM.', spanish: 'Los visitantes pueden quedarse hasta las 8 PM.' },
          { english: 'Children aren\'t allowed to watch this movie.', spanish: 'Los niños no tienen permiso para ver esta película.' }
        ]
      },
      {
        use: 'Past permission',
        useEs: 'Permiso pasado',
        examples: [
          { english: 'We were allowed to use the pool.', spanish: 'Se nos permitió usar la piscina.' },
          { english: 'They weren\'t allowed to enter.', spanish: 'No se les permitió entrar.' }
        ]
      }
    ],
    tenses: [
      { tense: 'Present', form: 'am/is/are allowed to', example: 'You are allowed to park here.' },
      { tense: 'Past', form: 'was/were allowed to', example: 'We were allowed to leave.' },
      { tense: 'Future', form: 'will be allowed to', example: 'You will be allowed to vote at 18.' },
      { tense: 'Present Perfect', form: 'have/has been allowed to', example: 'They have never been allowed to do that.' }
    ],
    commonMistakes: [
      { wrong: 'I allowed to go.', correct: 'I\'m allowed to go.', explanation: 'Don\'t forget the verb "be".' },
      { wrong: 'You\'re allowed smoke here.', correct: 'You\'re allowed to smoke here.', explanation: 'Don\'t forget "to".' }
    ]
  },

  // === BE ABOUT TO ===
  {
    id: 'be-about-to',
    expression: 'Be about to',
    nameEs: 'Estar a punto de',
    level: 3,
    uses: [
      {
        use: 'Something happening very soon',
        useEs: 'Algo que pasará muy pronto',
        examples: [
          { english: 'The movie is about to start.', spanish: 'La película está a punto de empezar.' },
          { english: 'I\'m about to leave.', spanish: 'Estoy a punto de irme.' },
          { english: 'She was about to cry.', spanish: 'Ella estaba a punto de llorar.' }
        ]
      },
      {
        use: 'Something almost happened (past)',
        useEs: 'Algo que casi pasó (pasado)',
        examples: [
          { english: 'I was about to call you when you arrived.', spanish: 'Estaba a punto de llamarte cuando llegaste.' },
          { english: 'He was about to give up when he found the answer.', spanish: 'Estaba a punto de rendirse cuando encontró la respuesta.' }
        ]
      }
    ],
    tenses: [
      { tense: 'Present', form: 'am/is/are about to', example: 'We\'re about to eat.' },
      { tense: 'Past', form: 'was/were about to', example: 'I was about to say that.' }
    ],
    commonMistakes: [
      { wrong: 'I\'m about leaving.', correct: 'I\'m about to leave.', explanation: 'Use "to + base verb", not gerund.' }
    ]
  },

  // === BE DUE TO ===
  {
    id: 'be-due-to',
    expression: 'Be due to',
    nameEs: 'Estar previsto para / Deber',
    level: 4,
    uses: [
      {
        use: 'Scheduled to happen',
        useEs: 'Programado para suceder',
        examples: [
          { english: 'The train is due to arrive at 3 PM.', spanish: 'El tren debe llegar a las 3 PM.' },
          { english: 'She\'s due to give birth next month.', spanish: 'Debe dar a luz el próximo mes.' },
          { english: 'The report is due to be published tomorrow.', spanish: 'El informe debe publicarse mañana.' }
        ]
      },
      {
        use: 'Expected or owed',
        useEs: 'Esperado o debido',
        examples: [
          { english: 'The payment is due next week.', spanish: 'El pago vence la próxima semana.' },
          { english: 'You\'re due a raise.', spanish: 'Te corresponde un aumento.' }
        ]
      }
    ],
    tenses: [
      { tense: 'Present', form: 'am/is/are due to', example: 'The bus is due to arrive soon.' },
      { tense: 'Past', form: 'was/were due to', example: 'He was due to retire last year.' }
    ],
    commonMistakes: [
      { wrong: 'The train due to arrive.', correct: 'The train is due to arrive.', explanation: 'Don\'t forget "is/are".' }
    ]
  },

  // === BE BOUND TO ===
  {
    id: 'be-bound-to',
    expression: 'Be bound to',
    nameEs: 'Seguro que / Destinado a',
    level: 4,
    uses: [
      {
        use: 'Something certain to happen',
        useEs: 'Algo seguro que pasará',
        examples: [
          { english: 'It\'s bound to rain. (very likely)', spanish: 'Seguro que llueve.' },
          { english: 'She\'s bound to succeed.', spanish: 'Seguro que tendrá éxito.' },
          { english: 'There are bound to be problems.', spanish: 'Seguro que habrá problemas.' }
        ]
      },
      {
        use: 'Obligated (formal)',
        useEs: 'Obligado (formal)',
        examples: [
          { english: 'I\'m bound by the contract.', spanish: 'Estoy obligado por el contrato.' },
          { english: 'He feels bound to help.', spanish: 'Se siente obligado a ayudar.' }
        ]
      }
    ],
    tenses: [
      { tense: 'Present', form: 'am/is/are bound to', example: 'You\'re bound to love it.' },
      { tense: 'Past', form: 'was/were bound to', example: 'It was bound to happen.' }
    ],
    commonMistakes: [
      { wrong: 'It\'s bound raining.', correct: 'It\'s bound to rain.', explanation: 'Use "to + base verb".' }
    ]
  },

  // === BE LIKELY TO ===
  {
    id: 'be-likely-to',
    expression: 'Be likely to',
    nameEs: 'Es probable que / Probablemente',
    level: 3,
    uses: [
      {
        use: 'Probability',
        useEs: 'Probabilidad',
        examples: [
          { english: 'It\'s likely to rain.', spanish: 'Es probable que llueva.' },
          { english: 'She\'s likely to agree.', spanish: 'Es probable que esté de acuerdo.' },
          { english: 'He\'s unlikely to come. (negative)', spanish: 'Es poco probable que venga.' }
        ]
      }
    ],
    tenses: [
      { tense: 'Present', form: 'am/is/are likely to', example: 'They\'re likely to win.' },
      { tense: 'Past', form: 'was/were likely to', example: 'It was likely to fail.' }
    ],
    commonMistakes: [
      { wrong: 'It\'s likely raining.', correct: 'It\'s likely to rain.', explanation: 'Use "to + base verb".' }
    ]
  },

  // === USED TO (vs BE USED TO vs GET USED TO) ===
  {
    id: 'used-to-forms',
    expression: 'Used to / Be used to / Get used to',
    nameEs: 'Solía / Estar acostumbrado a / Acostumbrarse a',
    level: 3,
    uses: [
      {
        use: 'USED TO + base verb: past habits (no longer true)',
        useEs: 'USED TO + verbo base: hábitos pasados (ya no verdad)',
        examples: [
          { english: 'I used to smoke. (I don\'t anymore)', spanish: 'Yo fumaba. / Solía fumar.' },
          { english: 'She used to live here.', spanish: 'Ella vivía aquí.' },
          { english: 'Did you use to play sports?', spanish: '¿Practicabas deportes?' }
        ]
      },
      {
        use: 'BE USED TO + noun/gerund: accustomed to',
        useEs: 'BE USED TO + sustantivo/gerundio: acostumbrado a',
        examples: [
          { english: 'I\'m used to the noise. (accustomed)', spanish: 'Estoy acostumbrado al ruido.' },
          { english: 'She\'s used to working late.', spanish: 'Está acostumbrada a trabajar tarde.' },
          { english: 'He isn\'t used to the cold.', spanish: 'No está acostumbrado al frío.' }
        ]
      },
      {
        use: 'GET USED TO + noun/gerund: becoming accustomed',
        useEs: 'GET USED TO + sustantivo/gerundio: acostumbrarse',
        examples: [
          { english: 'I\'m getting used to the new job.', spanish: 'Me estoy acostumbrando al nuevo trabajo.' },
          { english: 'You\'ll get used to it.', spanish: 'Te acostumbrarás.' },
          { english: 'I can\'t get used to waking up early.', spanish: 'No me acostumbro a levantarme temprano.' }
        ]
      }
    ],
    tenses: [
      { tense: 'Past (used to)', form: 'used to + base verb', example: 'I used to live there.' },
      { tense: 'Present (be used to)', form: 'am/is/are used to + noun/-ing', example: 'I\'m used to it.' },
      { tense: 'Process (get used to)', form: 'get used to + noun/-ing', example: 'I\'m getting used to it.' }
    ],
    commonMistakes: [
      { wrong: 'I\'m used to smoke.', correct: 'I used to smoke. OR I\'m used to smoking.', explanation: '"Be used to" needs gerund, "used to" needs base verb.' },
      { wrong: 'I used to working here.', correct: 'I\'m used to working here. OR I used to work here.', explanation: 'Different structures with different meanings.' },
      { wrong: 'I\'m getting used to work late.', correct: 'I\'m getting used to working late.', explanation: '"Get used to" needs gerund.' }
    ]
  }
];

// Helper functions
export const getSemiModalsByLevel = (level: number): SemiModal[] => {
  return semiModals.filter(m => m.level <= level);
};

export default semiModals;
