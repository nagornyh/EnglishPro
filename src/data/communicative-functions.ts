// Funciones Comunicativas - Communicative Functions
// Essential phrases for real-world communication

export interface CommunicativeFunction {
  id: string;
  function: string;
  functionEs: string;
  level: number;
  category: 'opinions' | 'suggestions' | 'complaints' | 'apologies' | 'clarification' | 'probability' | 'agreeing' | 'requests' | 'introductions' | 'phone' | 'social';
  formal: string[];
  informal: string[];
  examples: {
    context: string;
    contextEs: string;
    dialogue: { speaker: string; text: string; textEs: string }[];
  }[];
  tips: string[];
}

export const communicativeFunctions: CommunicativeFunction[] = [
  // === ASKING AND GIVING OPINIONS ===
  {
    id: 'func-opinions',
    function: 'Asking for and Giving Opinions',
    functionEs: 'Pedir y Dar Opiniones',
    level: 3,
    category: 'opinions',
    formal: [
      'What do you think about...?',
      'What\'s your opinion on...?',
      'How do you feel about...?',
      'What are your thoughts on...?',
      'I\'d be interested to hear your views on...',
      'In my opinion...',
      'From my point of view...',
      'I believe that...',
      'It seems to me that...',
      'I\'m of the opinion that...'
    ],
    informal: [
      'What do you reckon?',
      'What do you think?',
      'How about you?',
      'I think...',
      'I feel...',
      'If you ask me...',
      'The way I see it...',
      'Personally...',
      'To be honest...',
      'I\'d say...'
    ],
    examples: [
      {
        context: 'Discussing a movie',
        contextEs: 'Discutiendo una película',
        dialogue: [
          { speaker: 'A', text: 'What did you think of the movie?', textEs: '¿Qué te pareció la película?' },
          { speaker: 'B', text: 'Personally, I thought it was amazing. The acting was incredible.', textEs: 'Personalmente, pensé que fue increíble. La actuación fue impresionante.' },
          { speaker: 'A', text: 'I\'d have to disagree. I found it a bit boring.', textEs: 'Tendría que discrepar. Me pareció un poco aburrida.' }
        ]
      }
    ],
    tips: [
      'Use "I think" for general opinions',
      'Use "I believe" for stronger convictions',
      'Add "personally" to emphasize it\'s your own view',
      'Use "In my opinion" in formal contexts'
    ]
  },

  // === AGREEING AND DISAGREEING ===
  {
    id: 'func-agreeing',
    function: 'Agreeing and Disagreeing',
    functionEs: 'Estar de Acuerdo y en Desacuerdo',
    level: 3,
    category: 'agreeing',
    formal: [
      'I completely agree with you.',
      'I couldn\'t agree more.',
      'That\'s exactly how I feel.',
      'You\'ve got a point there.',
      'I\'m afraid I disagree.',
      'I see your point, but...',
      'I\'m not sure I agree with that.',
      'With all due respect, I think...',
      'I beg to differ.',
      'I\'m not entirely convinced.'
    ],
    informal: [
      'Exactly!',
      'Absolutely!',
      'You\'re right.',
      'I know, right?',
      'Same here.',
      'No way!',
      'I don\'t think so.',
      'Not really.',
      'I\'m not so sure about that.',
      'Yeah, but...'
    ],
    examples: [
      {
        context: 'Work discussion',
        contextEs: 'Discusión de trabajo',
        dialogue: [
          { speaker: 'A', text: 'I think we should postpone the launch.', textEs: 'Creo que deberíamos posponer el lanzamiento.' },
          { speaker: 'B', text: 'I see your point, but I\'m not sure that\'s the best approach.', textEs: 'Entiendo tu punto, pero no estoy seguro de que sea el mejor enfoque.' },
          { speaker: 'A', text: 'What would you suggest instead?', textEs: '¿Qué sugerirías en su lugar?' }
        ]
      }
    ],
    tips: [
      'Soften disagreement with "I see your point, but..."',
      'Never say "You\'re wrong" directly in professional settings',
      'Use partial agreement: "Yes, but..." or "That\'s true, however..."',
      'In British English, "I\'m afraid" softens disagreement'
    ]
  },

  // === MAKING SUGGESTIONS ===
  {
    id: 'func-suggestions',
    function: 'Making Suggestions',
    functionEs: 'Hacer Sugerencias',
    level: 2,
    category: 'suggestions',
    formal: [
      'I would suggest that...',
      'May I suggest...?',
      'Perhaps we could...',
      'It might be a good idea to...',
      'Have you considered...?',
      'I would recommend...',
      'One option would be to...',
      'You might want to consider...'
    ],
    informal: [
      'Why don\'t we...?',
      'How about...?',
      'What about...?',
      'Let\'s...',
      'We could...',
      'Why not...?',
      'You should try...',
      'Have you thought about...?'
    ],
    examples: [
      {
        context: 'Planning a trip',
        contextEs: 'Planeando un viaje',
        dialogue: [
          { speaker: 'A', text: 'Where should we go for vacation?', textEs: '¿A dónde deberíamos ir de vacaciones?' },
          { speaker: 'B', text: 'How about going to the beach? The weather should be perfect.', textEs: '¿Qué tal ir a la playa? El clima debería estar perfecto.' },
          { speaker: 'A', text: 'Good idea! Let\'s look at some options.', textEs: '¡Buena idea! Veamos algunas opciones.' }
        ]
      }
    ],
    tips: [
      '"Why don\'t we" is very common in everyday conversation',
      '"How about" is followed by a noun or gerund',
      '"Let\'s" is direct but friendly',
      'Use "I would suggest" in business contexts'
    ]
  },

  // === COMPLAINING ===
  {
    id: 'func-complaining',
    function: 'Making Complaints',
    functionEs: 'Hacer Quejas',
    level: 4,
    category: 'complaints',
    formal: [
      'I\'m afraid I have to complain about...',
      'I\'m writing to express my dissatisfaction with...',
      'I would like to make a formal complaint about...',
      'I\'m not satisfied with...',
      'This is unacceptable.',
      'I must insist that...',
      'I demand an explanation for...',
      'I would appreciate it if you could resolve this matter.'
    ],
    informal: [
      'I\'m not happy about...',
      'This isn\'t good enough.',
      'I\'ve had enough of...',
      'This is ridiculous!',
      'What\'s going on with...?',
      'I can\'t believe...',
      'Something needs to be done about...',
      'This is getting on my nerves.'
    ],
    examples: [
      {
        context: 'Restaurant complaint',
        contextEs: 'Queja en restaurante',
        dialogue: [
          { speaker: 'Customer', text: 'Excuse me, I\'m afraid there\'s a problem with my order.', textEs: 'Disculpe, me temo que hay un problema con mi pedido.' },
          { speaker: 'Waiter', text: 'I\'m terribly sorry. What seems to be the issue?', textEs: 'Lo siento mucho. ¿Cuál parece ser el problema?' },
          { speaker: 'Customer', text: 'I ordered the chicken, but this is fish.', textEs: 'Pedí el pollo, pero esto es pescado.' }
        ]
      }
    ],
    tips: [
      'Stay calm and polite, even when complaining',
      'Explain the problem clearly',
      'Say what you expect as a solution',
      '"I\'m afraid" softens a complaint in British English'
    ]
  },

  // === APOLOGIZING ===
  {
    id: 'func-apologizing',
    function: 'Apologizing',
    functionEs: 'Disculparse',
    level: 2,
    category: 'apologies',
    formal: [
      'I apologize for...',
      'I\'m terribly sorry for...',
      'Please accept my sincere apologies.',
      'I deeply regret...',
      'I take full responsibility for...',
      'It was entirely my fault.',
      'I assure you it won\'t happen again.',
      'Please forgive me for...'
    ],
    informal: [
      'Sorry!',
      'I\'m (so/really) sorry.',
      'My bad.',
      'Oops, sorry about that.',
      'I didn\'t mean to...',
      'Sorry, I wasn\'t thinking.',
      'I feel terrible about...',
      'I owe you an apology.'
    ],
    examples: [
      {
        context: 'Being late for a meeting',
        contextEs: 'Llegar tarde a una reunión',
        dialogue: [
          { speaker: 'A', text: 'I\'m so sorry I\'m late. The traffic was terrible.', textEs: 'Lamento mucho llegar tarde. El tráfico estaba terrible.' },
          { speaker: 'B', text: 'No problem, we just started.', textEs: 'No hay problema, recién empezamos.' },
          { speaker: 'A', text: 'It won\'t happen again, I promise.', textEs: 'No volverá a pasar, lo prometo.' }
        ]
      }
    ],
    tips: [
      'A sincere apology acknowledges what you did wrong',
      'Don\'t make excuses immediately after apologizing',
      '"My bad" is very informal (American English)',
      'In formal contexts, offer to fix the problem'
    ]
  },

  // === ASKING FOR CLARIFICATION ===
  {
    id: 'func-clarification',
    function: 'Asking for Clarification',
    functionEs: 'Pedir Aclaración',
    level: 3,
    category: 'clarification',
    formal: [
      'Could you clarify what you mean by...?',
      'I\'m not sure I understand. Could you explain...?',
      'What exactly do you mean?',
      'Could you elaborate on that?',
      'I\'m afraid I don\'t quite follow.',
      'Would you mind explaining that in more detail?',
      'I\'d appreciate it if you could clarify...',
      'Could you be more specific?'
    ],
    informal: [
      'What do you mean?',
      'Sorry, I don\'t get it.',
      'Can you say that again?',
      'Huh?',
      'Come again?',
      'What was that?',
      'I didn\'t catch that.',
      'Could you run that by me again?'
    ],
    examples: [
      {
        context: 'In a meeting',
        contextEs: 'En una reunión',
        dialogue: [
          { speaker: 'A', text: 'So we need to leverage our synergies to maximize ROI.', textEs: 'Entonces necesitamos apalancar nuestras sinergias para maximizar el ROI.' },
          { speaker: 'B', text: 'I\'m sorry, could you clarify what you mean by "leverage our synergies"?', textEs: 'Disculpa, ¿podrías aclarar qué quieres decir con "apalancar nuestras sinergias"?' },
          { speaker: 'A', text: 'Of course. I mean we should work together across departments.', textEs: 'Por supuesto. Me refiero a que deberíamos trabajar juntos entre departamentos.' }
        ]
      }
    ],
    tips: [
      'Don\'t be afraid to ask for clarification - it shows engagement',
      '"I don\'t quite follow" is polite and professional',
      'Repeat what you understood to confirm',
      '"Could you give me an example?" is helpful'
    ]
  },

  // === EXPRESSING PROBABILITY ===
  {
    id: 'func-probability',
    function: 'Expressing Probability',
    functionEs: 'Expresar Probabilidad',
    level: 4,
    category: 'probability',
    formal: [
      'It\'s highly likely that...',
      'There\'s a strong possibility that...',
      'In all probability...',
      'It\'s probable/improbable that...',
      'The chances are that...',
      'It\'s virtually certain that...',
      'There\'s little doubt that...',
      'It\'s conceivable that...'
    ],
    informal: [
      'It\'ll probably...',
      'I bet...',
      'I doubt it.',
      'Maybe.',
      'Probably not.',
      'I\'m pretty sure...',
      'Most likely...',
      'There\'s no way...'
    ],
    examples: [
      {
        context: 'Weather discussion',
        contextEs: 'Discusión sobre el clima',
        dialogue: [
          { speaker: 'A', text: 'Do you think it will rain tomorrow?', textEs: '¿Crees que lloverá mañana?' },
          { speaker: 'B', text: 'It\'s highly likely. The forecast says 90% chance.', textEs: 'Es muy probable. El pronóstico dice 90% de probabilidad.' },
          { speaker: 'A', text: 'I doubt we\'ll be able to have the picnic then.', textEs: 'Dudo que podamos hacer el picnic entonces.' }
        ]
      }
    ],
    tips: [
      'Use "definitely" for 100% certainty',
      'Use "probably" for high probability (70-80%)',
      'Use "might/may" for possibility (50%)',
      'Use "unlikely" or "doubt" for low probability'
    ]
  },

  // === MAKING REQUESTS ===
  {
    id: 'func-requests',
    function: 'Making Requests',
    functionEs: 'Hacer Peticiones',
    level: 2,
    category: 'requests',
    formal: [
      'Would you mind...?',
      'Could you possibly...?',
      'I was wondering if you could...',
      'Would it be possible to...?',
      'I would appreciate it if you could...',
      'Would you be so kind as to...?',
      'Might I ask you to...?',
      'I\'d be grateful if you could...'
    ],
    informal: [
      'Can you...?',
      'Could you...?',
      'Will you...?',
      'Do you mind...?',
      'Any chance you could...?',
      'Would you...?',
      'Is it okay if...?',
      'Do me a favor and...'
    ],
    examples: [
      {
        context: 'At work',
        contextEs: 'En el trabajo',
        dialogue: [
          { speaker: 'A', text: 'Would you mind helping me with this report?', textEs: '¿Te importaría ayudarme con este informe?' },
          { speaker: 'B', text: 'Not at all. What do you need?', textEs: 'Para nada. ¿Qué necesitas?' },
          { speaker: 'A', text: 'Could you check the figures in section two?', textEs: '¿Podrías revisar las cifras en la sección dos?' }
        ]
      }
    ],
    tips: [
      '"Would you mind" is followed by -ing',
      '"Could you" is more polite than "Can you"',
      'Adding "please" always helps',
      'The more words, the more polite (generally)'
    ]
  },

  // === INTERRUPTING POLITELY ===
  {
    id: 'func-interrupting',
    function: 'Interrupting Politely',
    functionEs: 'Interrumpir Cortésmente',
    level: 4,
    category: 'social',
    formal: [
      'Sorry to interrupt, but...',
      'Excuse me for interrupting...',
      'May I just say something?',
      'If I may interject...',
      'Before you continue, I\'d like to add...',
      'Pardon me, but...',
      'I\'d like to come in here if I may.',
      'Could I just make a point?'
    ],
    informal: [
      'Sorry, but...',
      'Wait, wait...',
      'Hang on a second...',
      'Can I just say...?',
      'Actually...',
      'Hold on...',
      'Quick question...',
      'Just a sec...'
    ],
    examples: [
      {
        context: 'During a presentation',
        contextEs: 'Durante una presentación',
        dialogue: [
          { speaker: 'Presenter', text: 'And as you can see from these numbers...', textEs: 'Y como pueden ver en estos números...' },
          { speaker: 'Participant', text: 'Sorry to interrupt, but could you go back to the previous slide?', textEs: 'Disculpe la interrupción, pero ¿podría volver a la diapositiva anterior?' },
          { speaker: 'Presenter', text: 'Of course, no problem.', textEs: 'Por supuesto, no hay problema.' }
        ]
      }
    ],
    tips: [
      'Always apologize before interrupting',
      'In meetings, raise your hand or make eye contact first',
      'Keep your interruption brief',
      'Thank the person for letting you speak'
    ]
  },

  // === PHONE CONVERSATIONS ===
  {
    id: 'func-phone',
    function: 'Phone Conversations',
    functionEs: 'Conversaciones Telefónicas',
    level: 3,
    category: 'phone',
    formal: [
      'Good morning, [Company name], how may I help you?',
      'May I speak to Mr./Ms. [name], please?',
      'I\'m calling regarding...',
      'Could you put me through to...?',
      'I\'m afraid he/she is not available at the moment.',
      'Would you like to leave a message?',
      'Could I take a message?',
      'Thank you for calling.'
    ],
    informal: [
      'Hello?',
      'Hey, it\'s [name].',
      'Is [name] there?',
      'Can I speak to...?',
      'Hold on, I\'ll get them.',
      'They\'re not here right now.',
      'I\'ll call back later.',
      'Talk to you later!'
    ],
    examples: [
      {
        context: 'Business call',
        contextEs: 'Llamada de negocios',
        dialogue: [
          { speaker: 'Receptionist', text: 'Good afternoon, ABC Company, how may I help you?', textEs: 'Buenas tardes, Compañía ABC, ¿en qué puedo ayudarle?' },
          { speaker: 'Caller', text: 'Hello, I\'d like to speak to someone in customer service, please.', textEs: 'Hola, me gustaría hablar con alguien de servicio al cliente, por favor.' },
          { speaker: 'Receptionist', text: 'Certainly. May I ask who\'s calling?', textEs: 'Por supuesto. ¿Puedo preguntar quién llama?' }
        ]
      }
    ],
    tips: [
      'Speak clearly and at a moderate pace',
      'Identify yourself at the beginning',
      'Summarize the purpose of your call',
      'End with a clear next step or goodbye'
    ]
  },

  // === CONVERSATIONAL FILLERS ===
  {
    id: 'func-fillers',
    function: 'Conversational Fillers',
    functionEs: 'Muletillas Conversacionales',
    level: 3,
    category: 'social',
    formal: [
      'Well...',
      'Let me see...',
      'Let me think about that.',
      'How shall I put this...',
      'To be honest...',
      'As a matter of fact...',
      'The thing is...',
      'So to speak...'
    ],
    informal: [
      'Um...',
      'Uh...',
      'Like...',
      'You know...',
      'I mean...',
      'Basically...',
      'Actually...',
      'So...',
      'Anyway...',
      'Kind of...',
      'Sort of...'
    ],
    examples: [
      {
        context: 'Thinking while speaking',
        contextEs: 'Pensando mientras se habla',
        dialogue: [
          { speaker: 'A', text: 'What do you think about the new policy?', textEs: '¿Qué piensas sobre la nueva política?' },
          { speaker: 'B', text: 'Well, let me think... I mean, it\'s kind of complicated, you know?', textEs: 'Bueno, déjame pensar... O sea, es algo complicado, ¿sabes?' }
        ]
      }
    ],
    tips: [
      'Use fillers to sound natural, but don\'t overuse them',
      '"You know" and "like" are very common in American English',
      '"Well" is a good way to start thinking',
      'In formal contexts, minimize filler use'
    ]
  },

  // === INTRODUCTIONS ===
  {
    id: 'func-introductions',
    function: 'Introductions',
    functionEs: 'Presentaciones',
    level: 1,
    category: 'introductions',
    formal: [
      'Allow me to introduce myself. I\'m...',
      'I\'d like to introduce you to...',
      'May I introduce...?',
      'It\'s a pleasure to meet you.',
      'Pleased to meet you.',
      'How do you do?',
      'I don\'t believe we\'ve met. I\'m...',
      'I\'ve heard so much about you.'
    ],
    informal: [
      'Hi, I\'m...',
      'Hey, nice to meet you!',
      'This is my friend...',
      'Have you two met?',
      'What\'s your name?',
      'Great to meet you!',
      'Call me [nickname].',
      'Everyone calls me...'
    ],
    examples: [
      {
        context: 'Meeting new colleagues',
        contextEs: 'Conociendo nuevos colegas',
        dialogue: [
          { speaker: 'A', text: 'Hi, I\'m Sarah. I just started in marketing.', textEs: 'Hola, soy Sarah. Acabo de empezar en marketing.' },
          { speaker: 'B', text: 'Nice to meet you, Sarah! I\'m Tom from sales.', textEs: '¡Mucho gusto, Sarah! Soy Tom de ventas.' },
          { speaker: 'A', text: 'Great to meet you! Have you been here long?', textEs: '¡Encantada de conocerte! ¿Llevas mucho tiempo aquí?' }
        ]
      }
    ],
    tips: [
      'Make eye contact and smile',
      'Shake hands firmly (in Western cultures)',
      'Repeat the person\'s name to remember it',
      '"How do you do?" is very formal British English'
    ]
  }
];

// Helper functions
export const getFunctionsByCategory = (category: CommunicativeFunction['category']): CommunicativeFunction[] => {
  return communicativeFunctions.filter(f => f.category === category);
};

export const getFunctionsByLevel = (level: number): CommunicativeFunction[] => {
  return communicativeFunctions.filter(f => f.level <= level);
};

export default communicativeFunctions;
