// Modales Extendidos - Extended Modal Verbs
// Modales adicionales no cubiertos en gramática principal

export interface ModalVerb {
  id: string;
  modal: string;
  nameEs: string;
  level: number;
  uses: {
    use: string;
    useEs: string;
    examples: { english: string; spanish: string }[];
  }[];
  structure: {
    affirmative: string;
    negative: string;
    question: string;
  };
  commonMistakes: {
    wrong: string;
    correct: string;
    explanation: string;
  }[];
}

export const modalsExtended: ModalVerb[] = [
  // === MAY / MIGHT ===
  {
    id: 'modal-may-might',
    modal: 'May / Might',
    nameEs: 'May / Might (Posibilidad)',
    level: 3,
    uses: [
      {
        use: 'Possibility (present/future)',
        useEs: 'Posibilidad (presente/futuro)',
        examples: [
          { english: 'It may rain tomorrow.', spanish: 'Puede que llueva mañana.' },
          { english: 'She might be at home.', spanish: 'Puede que esté en casa.' },
          { english: 'They may/might come to the party.', spanish: 'Puede que vengan a la fiesta.' }
        ]
      },
      {
        use: 'Formal permission (may)',
        useEs: 'Permiso formal (may)',
        examples: [
          { english: 'May I use your phone?', spanish: '¿Puedo usar tu teléfono?' },
          { english: 'You may leave now.', spanish: 'Puede retirarse ahora.' },
          { english: 'May I ask a question?', spanish: '¿Puedo hacer una pregunta?' }
        ]
      },
      {
        use: 'Wish/Hope (may)',
        useEs: 'Deseo/Esperanza (may)',
        examples: [
          { english: 'May you have a wonderful day!', spanish: '¡Que tengas un día maravilloso!' },
          { english: 'May all your dreams come true.', spanish: 'Que todos tus sueños se hagan realidad.' }
        ]
      },
      {
        use: 'Might is slightly less certain than may',
        useEs: 'Might es ligeramente menos seguro que may',
        examples: [
          { english: 'It may rain. (50% chance) It might rain. (40% chance)', spanish: 'Puede llover. (50%) Podría llover. (40%)' }
        ]
      }
    ],
    structure: {
      affirmative: 'Subject + may/might + base verb',
      negative: 'Subject + may not / might not + base verb',
      question: 'May/Might + subject + base verb? (May is more common in questions)'
    },
    commonMistakes: [
      { wrong: 'She mays come.', correct: 'She may come.', explanation: 'Modals don\'t add -s.' },
      { wrong: 'I may to go.', correct: 'I may go.', explanation: 'No "to" after modals.' },
      { wrong: 'Might I use your phone? (unless very formal)', correct: 'May I use your phone?', explanation: '"May I" is more natural for permission.' }
    ]
  },

  // === WILL / WOULD (Extended uses) ===
  {
    id: 'modal-will-would-extended',
    modal: 'Will / Would (Extended)',
    nameEs: 'Will / Would (Usos Extendidos)',
    level: 3,
    uses: [
      {
        use: 'Polite requests (would)',
        useEs: 'Peticiones corteses (would)',
        examples: [
          { english: 'Would you help me, please?', spanish: '¿Me ayudarías, por favor?' },
          { english: 'Would you mind closing the window?', spanish: '¿Te importaría cerrar la ventana?' },
          { english: 'Would you like some coffee?', spanish: '¿Te gustaría un café?' }
        ]
      },
      {
        use: 'Past habits (would)',
        useEs: 'Hábitos pasados (would)',
        examples: [
          { english: 'When I was a child, I would play in the park every day.', spanish: 'Cuando era niño, jugaba en el parque todos los días.' },
          { english: 'My grandmother would tell us stories.', spanish: 'Mi abuela nos contaba historias.' }
        ]
      },
      {
        use: 'Willingness (will)',
        useEs: 'Disposición (will)',
        examples: [
          { english: 'Will you marry me?', spanish: '¿Te casarías conmigo?' },
          { english: 'I will help you with that.', spanish: 'Te ayudaré con eso.' }
        ]
      },
      {
        use: 'Refusal (won\'t)',
        useEs: 'Rechazo (won\'t)',
        examples: [
          { english: 'He won\'t listen to me.', spanish: 'No me escucha. / No quiere escucharme.' },
          { english: 'The car won\'t start.', spanish: 'El carro no arranca.' }
        ]
      },
      {
        use: 'Characteristic behavior (will)',
        useEs: 'Comportamiento característico (will)',
        examples: [
          { english: 'She will talk for hours on the phone.', spanish: 'Ella suele hablar horas por teléfono.' },
          { english: 'Boys will be boys.', spanish: 'Los niños serán niños.' }
        ]
      }
    ],
    structure: {
      affirmative: 'Subject + will/would + base verb',
      negative: 'Subject + won\'t/wouldn\'t + base verb',
      question: 'Will/Would + subject + base verb?'
    },
    commonMistakes: [
      { wrong: 'Would you mind to close the door?', correct: 'Would you mind closing the door?', explanation: '"Mind" is followed by gerund.' },
      { wrong: 'When I was young, I would be shy.', correct: 'When I was young, I was shy. / I used to be shy.', explanation: '"Would" is not used for past states.' }
    ]
  },

  // === SHALL ===
  {
    id: 'modal-shall',
    modal: 'Shall',
    nameEs: 'Shall',
    level: 4,
    uses: [
      {
        use: 'Suggestions/Offers (with I/we)',
        useEs: 'Sugerencias/Ofertas (con I/we)',
        examples: [
          { english: 'Shall I open the window?', spanish: '¿Abro la ventana?' },
          { english: 'Shall we go to the cinema?', spanish: '¿Vamos al cine?' },
          { english: 'Shall I help you?', spanish: '¿Te ayudo?' }
        ]
      },
      {
        use: 'Future (formal British English)',
        useEs: 'Futuro (inglés británico formal)',
        examples: [
          { english: 'I shall return tomorrow.', spanish: 'Regresaré mañana.' },
          { english: 'We shall see what happens.', spanish: 'Veremos qué pasa.' }
        ]
      },
      {
        use: 'Rules/Laws (formal)',
        useEs: 'Reglas/Leyes (formal)',
        examples: [
          { english: 'You shall not pass!', spanish: '¡No pasarás!' },
          { english: 'Members shall pay their dues on time.', spanish: 'Los miembros pagarán sus cuotas a tiempo.' }
        ]
      }
    ],
    structure: {
      affirmative: 'I/We + shall + base verb',
      negative: 'I/We + shall not (shan\'t) + base verb',
      question: 'Shall + I/we + base verb?'
    },
    commonMistakes: [
      { wrong: 'Shall you go?', correct: 'Will you go?', explanation: '"Shall" is mainly used with I/we in modern English.' },
      { wrong: 'He shall come.', correct: 'He will come. (unless very formal/legal)', explanation: '"Shall" with he/she/they is only in very formal contexts.' }
    ]
  },

  // === NEED TO / NEEDN'T ===
  {
    id: 'modal-need',
    modal: 'Need to / Needn\'t',
    nameEs: 'Need to / Needn\'t (Necesidad)',
    level: 3,
    uses: [
      {
        use: 'Necessity (need to)',
        useEs: 'Necesidad (need to)',
        examples: [
          { english: 'I need to finish this report.', spanish: 'Necesito terminar este informe.' },
          { english: 'You need to see a doctor.', spanish: 'Necesitas ver a un doctor.' },
          { english: 'Do we need to bring anything?', spanish: '¿Necesitamos traer algo?' }
        ]
      },
      {
        use: 'No necessity (needn\'t / don\'t need to)',
        useEs: 'No necesidad (needn\'t / don\'t need to)',
        examples: [
          { english: 'You needn\'t worry.', spanish: 'No necesitas preocuparte.' },
          { english: 'She doesn\'t need to come.', spanish: 'Ella no necesita venir.' },
          { english: 'We needn\'t hurry.', spanish: 'No necesitamos apurarnos.' }
        ]
      },
      {
        use: 'Needn\'t vs Don\'t have to (same meaning)',
        useEs: 'Needn\'t vs Don\'t have to (mismo significado)',
        examples: [
          { english: 'You needn\'t wait. = You don\'t have to wait.', spanish: 'No necesitas esperar.' }
        ]
      },
      {
        use: 'Needn\'t have (unnecessary past action)',
        useEs: 'Needn\'t have (acción pasada innecesaria)',
        examples: [
          { english: 'You needn\'t have bought so much food. (but you did)', spanish: 'No necesitabas comprar tanta comida. (pero lo hiciste)' }
        ]
      }
    ],
    structure: {
      affirmative: 'Subject + need to / needs to + base verb',
      negative: 'Subject + needn\'t + base verb OR don\'t/doesn\'t need to + base verb',
      question: 'Do/Does + subject + need to + base verb? OR Need + subject + base verb? (formal)'
    },
    commonMistakes: [
      { wrong: 'She needs go.', correct: 'She needs to go.', explanation: '"Need" as a normal verb requires "to".' },
      { wrong: 'You needn\'t to come.', correct: 'You needn\'t come.', explanation: 'Modal "needn\'t" doesn\'t take "to".' },
      { wrong: 'He didn\'t need to come. (meaning he came anyway)', correct: 'He needn\'t have come.', explanation: 'Use "needn\'t have" for unnecessary actions that were done.' }
    ]
  },

  // === HAD BETTER ===
  {
    id: 'modal-had-better',
    modal: 'Had Better',
    nameEs: 'Had Better (Más Vale)',
    level: 4,
    uses: [
      {
        use: 'Strong advice/Warning',
        useEs: 'Consejo fuerte/Advertencia',
        examples: [
          { english: 'You\'d better hurry or you\'ll be late.', spanish: 'Más vale que te apures o llegarás tarde.' },
          { english: 'I\'d better go now.', spanish: 'Más vale que me vaya ahora.' },
          { english: 'We\'d better not tell her.', spanish: 'Más vale que no le digamos.' }
        ]
      },
      {
        use: 'Implies negative consequence if not followed',
        useEs: 'Implica consecuencia negativa si no se sigue',
        examples: [
          { english: 'You\'d better study, or you\'ll fail.', spanish: 'Más vale que estudies, o reprobarás.' },
          { english: 'He\'d better apologize.', spanish: 'Más vale que se disculpe.' }
        ]
      }
    ],
    structure: {
      affirmative: 'Subject + had better (\'d better) + base verb',
      negative: 'Subject + had better not (\'d better not) + base verb',
      question: 'Had + subject + better + base verb? (rare)'
    },
    commonMistakes: [
      { wrong: 'You better go.', correct: 'You\'d better go.', explanation: 'Don\'t drop "had" in formal writing.' },
      { wrong: 'You had better to go.', correct: 'You had better go.', explanation: 'No "to" after "had better".' },
      { wrong: 'You\'d not better go.', correct: 'You\'d better not go.', explanation: '"Not" comes after "better".' }
    ]
  },

  // === MODAL PERFECTS ===
  {
    id: 'modal-perfects',
    modal: 'Modal Perfects',
    nameEs: 'Modales Perfectos',
    level: 6,
    uses: [
      {
        use: 'Could have: past possibility/ability not used',
        useEs: 'Could have: posibilidad/habilidad pasada no usada',
        examples: [
          { english: 'She could have won, but she gave up.', spanish: 'Ella podría haber ganado, pero se rindió.' },
          { english: 'I could have told you, but I forgot.', spanish: 'Te lo podría haber dicho, pero lo olvidé.' }
        ]
      },
      {
        use: 'Should have: past advice/regret',
        useEs: 'Should have: consejo pasado/arrepentimiento',
        examples: [
          { english: 'You should have told me earlier.', spanish: 'Deberías habérmelo dicho antes.' },
          { english: 'I should have studied harder.', spanish: 'Debería haber estudiado más.' }
        ]
      },
      {
        use: 'Would have: hypothetical past (third conditional)',
        useEs: 'Would have: pasado hipotético (tercer condicional)',
        examples: [
          { english: 'I would have helped if I had known.', spanish: 'Te habría ayudado si hubiera sabido.' },
          { english: 'She would have come, but she was sick.', spanish: 'Ella habría venido, pero estaba enferma.' }
        ]
      },
      {
        use: 'Must have: past deduction (certain)',
        useEs: 'Must have: deducción pasada (segura)',
        examples: [
          { english: 'He must have forgotten. (I\'m sure)', spanish: 'Debe haberse olvidado. (Estoy seguro)' },
          { english: 'They must have arrived by now.', spanish: 'Ya deben haber llegado.' }
        ]
      },
      {
        use: 'Might have / May have: past possibility',
        useEs: 'Might have / May have: posibilidad pasada',
        examples: [
          { english: 'She might have missed the bus.', spanish: 'Puede que haya perdido el bus.' },
          { english: 'They may have already left.', spanish: 'Puede que ya se hayan ido.' }
        ]
      },
      {
        use: 'Can\'t have / Couldn\'t have: past impossibility',
        useEs: 'Can\'t have / Couldn\'t have: imposibilidad pasada',
        examples: [
          { english: 'He can\'t have said that! (impossible)', spanish: '¡No puede haber dicho eso!' },
          { english: 'She couldn\'t have known.', spanish: 'Ella no podía haberlo sabido.' }
        ]
      }
    ],
    structure: {
      affirmative: 'Subject + modal + have + past participle',
      negative: 'Subject + modal + not + have + past participle',
      question: 'Modal + subject + have + past participle?'
    },
    commonMistakes: [
      { wrong: 'I should have went.', correct: 'I should have gone.', explanation: 'Use past participle, not past simple.' },
      { wrong: 'He must have be tired.', correct: 'He must have been tired.', explanation: 'Use past participle "been".' },
      { wrong: 'She should had told me.', correct: 'She should have told me.', explanation: 'Always "have" (not "had") after modals.' }
    ]
  }
];

// Helper functions
export const getModalsByLevel = (level: number): ModalVerb[] => {
  return modalsExtended.filter(m => m.level <= level);
};

export default modalsExtended;
