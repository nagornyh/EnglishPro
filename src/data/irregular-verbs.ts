// Verbos Irregulares en Inglés - Lista completa
// Essential for mastering English past tenses and perfect forms

export interface IrregularVerb {
  id: string;
  infinitive: string;
  pastSimple: string;
  pastParticiple: string;
  translation: string;
  example: {
    infinitive: string;
    pastSimple: string;
    pastParticiple: string;
  };
  frequency: 'very_common' | 'common' | 'less_common' | 'rare';
  level: number; // 1-13
  category: 'movement' | 'communication' | 'senses' | 'thinking' | 'actions' | 'states' | 'creation' | 'emotions' | 'other';
}

export const irregularVerbs: IrregularVerb[] = [
  // === MUY COMUNES (Nivel 1-2) ===
  {
    id: 'iv-001',
    infinitive: 'be',
    pastSimple: 'was/were',
    pastParticiple: 'been',
    translation: 'ser/estar',
    example: {
      infinitive: 'I want to be happy.',
      pastSimple: 'I was tired yesterday.',
      pastParticiple: 'I have been to Paris.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'states'
  },
  {
    id: 'iv-002',
    infinitive: 'have',
    pastSimple: 'had',
    pastParticiple: 'had',
    translation: 'tener/haber',
    example: {
      infinitive: 'I have a car.',
      pastSimple: 'I had breakfast at 8.',
      pastParticiple: 'I have had enough.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'states'
  },
  {
    id: 'iv-003',
    infinitive: 'do',
    pastSimple: 'did',
    pastParticiple: 'done',
    translation: 'hacer',
    example: {
      infinitive: 'I do my homework.',
      pastSimple: 'I did the dishes.',
      pastParticiple: 'I have done my best.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'actions'
  },
  {
    id: 'iv-004',
    infinitive: 'go',
    pastSimple: 'went',
    pastParticiple: 'gone',
    translation: 'ir',
    example: {
      infinitive: 'I go to work every day.',
      pastSimple: 'I went to the store.',
      pastParticiple: 'She has gone home.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'movement'
  },
  {
    id: 'iv-005',
    infinitive: 'come',
    pastSimple: 'came',
    pastParticiple: 'come',
    translation: 'venir',
    example: {
      infinitive: 'Please come here.',
      pastSimple: 'He came to my party.',
      pastParticiple: 'Has she come yet?'
    },
    frequency: 'very_common',
    level: 1,
    category: 'movement'
  },
  {
    id: 'iv-006',
    infinitive: 'say',
    pastSimple: 'said',
    pastParticiple: 'said',
    translation: 'decir',
    example: {
      infinitive: 'What did you say?',
      pastSimple: 'She said hello.',
      pastParticiple: 'It has been said before.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'communication'
  },
  {
    id: 'iv-007',
    infinitive: 'get',
    pastSimple: 'got',
    pastParticiple: 'got/gotten',
    translation: 'obtener/conseguir',
    example: {
      infinitive: 'I need to get a new phone.',
      pastSimple: 'I got your message.',
      pastParticiple: 'Have you gotten the results?'
    },
    frequency: 'very_common',
    level: 1,
    category: 'actions'
  },
  {
    id: 'iv-008',
    infinitive: 'make',
    pastSimple: 'made',
    pastParticiple: 'made',
    translation: 'hacer/fabricar',
    example: {
      infinitive: 'I make breakfast every day.',
      pastSimple: 'She made a cake.',
      pastParticiple: 'This was made in Italy.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'creation'
  },
  {
    id: 'iv-009',
    infinitive: 'see',
    pastSimple: 'saw',
    pastParticiple: 'seen',
    translation: 'ver',
    example: {
      infinitive: 'I can see the mountains.',
      pastSimple: 'I saw a movie yesterday.',
      pastParticiple: 'Have you seen my keys?'
    },
    frequency: 'very_common',
    level: 1,
    category: 'senses'
  },
  {
    id: 'iv-010',
    infinitive: 'know',
    pastSimple: 'knew',
    pastParticiple: 'known',
    translation: 'saber/conocer',
    example: {
      infinitive: 'I know the answer.',
      pastSimple: 'I knew it was you.',
      pastParticiple: 'I have known him for years.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'thinking'
  },
  {
    id: 'iv-011',
    infinitive: 'take',
    pastSimple: 'took',
    pastParticiple: 'taken',
    translation: 'tomar/llevar',
    example: {
      infinitive: 'Take an umbrella.',
      pastSimple: 'She took my hand.',
      pastParticiple: 'The car has been taken.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'actions'
  },
  {
    id: 'iv-012',
    infinitive: 'think',
    pastSimple: 'thought',
    pastParticiple: 'thought',
    translation: 'pensar',
    example: {
      infinitive: 'I think you\'re right.',
      pastSimple: 'I thought about it.',
      pastParticiple: 'I have thought of a solution.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'thinking'
  },
  {
    id: 'iv-013',
    infinitive: 'give',
    pastSimple: 'gave',
    pastParticiple: 'given',
    translation: 'dar',
    example: {
      infinitive: 'Give me a hand.',
      pastSimple: 'She gave me a gift.',
      pastParticiple: 'I have given him the money.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'actions'
  },
  {
    id: 'iv-014',
    infinitive: 'find',
    pastSimple: 'found',
    pastParticiple: 'found',
    translation: 'encontrar',
    example: {
      infinitive: 'Can you find my keys?',
      pastSimple: 'I found a solution.',
      pastParticiple: 'The wallet has been found.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'actions'
  },
  {
    id: 'iv-015',
    infinitive: 'tell',
    pastSimple: 'told',
    pastParticiple: 'told',
    translation: 'contar/decir',
    example: {
      infinitive: 'Tell me about yourself.',
      pastSimple: 'He told me the truth.',
      pastParticiple: 'You have been told before.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'communication'
  },
  {
    id: 'iv-016',
    infinitive: 'put',
    pastSimple: 'put',
    pastParticiple: 'put',
    translation: 'poner',
    example: {
      infinitive: 'Put it on the table.',
      pastSimple: 'She put the book down.',
      pastParticiple: 'The money has been put away.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'actions'
  },
  {
    id: 'iv-017',
    infinitive: 'read',
    pastSimple: 'read',
    pastParticiple: 'read',
    translation: 'leer',
    example: {
      infinitive: 'I like to read books.',
      pastSimple: 'I read the article yesterday.',
      pastParticiple: 'Have you read the news?'
    },
    frequency: 'very_common',
    level: 1,
    category: 'actions'
  },
  {
    id: 'iv-018',
    infinitive: 'write',
    pastSimple: 'wrote',
    pastParticiple: 'written',
    translation: 'escribir',
    example: {
      infinitive: 'Write your name here.',
      pastSimple: 'She wrote a letter.',
      pastParticiple: 'The book was written in 1950.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'communication'
  },
  {
    id: 'iv-019',
    infinitive: 'eat',
    pastSimple: 'ate',
    pastParticiple: 'eaten',
    translation: 'comer',
    example: {
      infinitive: 'Let\'s eat something.',
      pastSimple: 'We ate at a restaurant.',
      pastParticiple: 'I have eaten already.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'actions'
  },
  {
    id: 'iv-020',
    infinitive: 'drink',
    pastSimple: 'drank',
    pastParticiple: 'drunk',
    translation: 'beber',
    example: {
      infinitive: 'I drink coffee every morning.',
      pastSimple: 'She drank too much water.',
      pastParticiple: 'The milk has been drunk.'
    },
    frequency: 'very_common',
    level: 1,
    category: 'actions'
  },

  // === COMUNES (Nivel 2-3) ===
  {
    id: 'iv-021',
    infinitive: 'speak',
    pastSimple: 'spoke',
    pastParticiple: 'spoken',
    translation: 'hablar',
    example: {
      infinitive: 'Do you speak Spanish?',
      pastSimple: 'He spoke to the manager.',
      pastParticiple: 'Has she spoken to you?'
    },
    frequency: 'very_common',
    level: 2,
    category: 'communication'
  },
  {
    id: 'iv-022',
    infinitive: 'buy',
    pastSimple: 'bought',
    pastParticiple: 'bought',
    translation: 'comprar',
    example: {
      infinitive: 'I want to buy a new car.',
      pastSimple: 'She bought a dress.',
      pastParticiple: 'The tickets have been bought.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-023',
    infinitive: 'sell',
    pastSimple: 'sold',
    pastParticiple: 'sold',
    translation: 'vender',
    example: {
      infinitive: 'We sell electronics.',
      pastSimple: 'They sold their house.',
      pastParticiple: 'The car has been sold.'
    },
    frequency: 'common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-024',
    infinitive: 'bring',
    pastSimple: 'brought',
    pastParticiple: 'brought',
    translation: 'traer',
    example: {
      infinitive: 'Bring your books to class.',
      pastSimple: 'He brought flowers.',
      pastParticiple: 'The supplies have been brought.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'movement'
  },
  {
    id: 'iv-025',
    infinitive: 'begin',
    pastSimple: 'began',
    pastParticiple: 'begun',
    translation: 'empezar',
    example: {
      infinitive: 'Let\'s begin the meeting.',
      pastSimple: 'The concert began at 8.',
      pastParticiple: 'Work has begun on the project.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-026',
    infinitive: 'break',
    pastSimple: 'broke',
    pastParticiple: 'broken',
    translation: 'romper',
    example: {
      infinitive: 'Don\'t break the glass.',
      pastSimple: 'She broke the vase.',
      pastParticiple: 'The window has been broken.'
    },
    frequency: 'common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-027',
    infinitive: 'build',
    pastSimple: 'built',
    pastParticiple: 'built',
    translation: 'construir',
    example: {
      infinitive: 'They will build a new school.',
      pastSimple: 'They built a bridge.',
      pastParticiple: 'The house was built in 1990.'
    },
    frequency: 'common',
    level: 2,
    category: 'creation'
  },
  {
    id: 'iv-028',
    infinitive: 'catch',
    pastSimple: 'caught',
    pastParticiple: 'caught',
    translation: 'atrapar/coger',
    example: {
      infinitive: 'Catch the ball!',
      pastSimple: 'I caught a cold.',
      pastParticiple: 'The thief has been caught.'
    },
    frequency: 'common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-029',
    infinitive: 'choose',
    pastSimple: 'chose',
    pastParticiple: 'chosen',
    translation: 'elegir',
    example: {
      infinitive: 'Choose your favorite color.',
      pastSimple: 'I chose the blue one.',
      pastParticiple: 'A winner has been chosen.'
    },
    frequency: 'common',
    level: 2,
    category: 'thinking'
  },
  {
    id: 'iv-030',
    infinitive: 'cut',
    pastSimple: 'cut',
    pastParticiple: 'cut',
    translation: 'cortar',
    example: {
      infinitive: 'Cut the paper in half.',
      pastSimple: 'She cut her finger.',
      pastParticiple: 'The grass has been cut.'
    },
    frequency: 'common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-031',
    infinitive: 'drive',
    pastSimple: 'drove',
    pastParticiple: 'driven',
    translation: 'conducir',
    example: {
      infinitive: 'Can you drive a car?',
      pastSimple: 'He drove to work.',
      pastParticiple: 'The car has been driven 50,000 miles.'
    },
    frequency: 'common',
    level: 2,
    category: 'movement'
  },
  {
    id: 'iv-032',
    infinitive: 'fall',
    pastSimple: 'fell',
    pastParticiple: 'fallen',
    translation: 'caer',
    example: {
      infinitive: 'Be careful not to fall.',
      pastSimple: 'The tree fell down.',
      pastParticiple: 'Snow has fallen overnight.'
    },
    frequency: 'common',
    level: 2,
    category: 'movement'
  },
  {
    id: 'iv-033',
    infinitive: 'feel',
    pastSimple: 'felt',
    pastParticiple: 'felt',
    translation: 'sentir',
    example: {
      infinitive: 'I feel happy today.',
      pastSimple: 'She felt sad.',
      pastParticiple: 'I have felt this way before.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'senses'
  },
  {
    id: 'iv-034',
    infinitive: 'fly',
    pastSimple: 'flew',
    pastParticiple: 'flown',
    translation: 'volar',
    example: {
      infinitive: 'Birds fly south in winter.',
      pastSimple: 'We flew to Paris.',
      pastParticiple: 'I have flown many times.'
    },
    frequency: 'common',
    level: 2,
    category: 'movement'
  },
  {
    id: 'iv-035',
    infinitive: 'forget',
    pastSimple: 'forgot',
    pastParticiple: 'forgotten',
    translation: 'olvidar',
    example: {
      infinitive: 'Don\'t forget your keys.',
      pastSimple: 'I forgot her name.',
      pastParticiple: 'That mistake has not been forgotten.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'thinking'
  },
  {
    id: 'iv-036',
    infinitive: 'grow',
    pastSimple: 'grew',
    pastParticiple: 'grown',
    translation: 'crecer/cultivar',
    example: {
      infinitive: 'Plants grow fast in summer.',
      pastSimple: 'She grew up in Spain.',
      pastParticiple: 'The company has grown a lot.'
    },
    frequency: 'common',
    level: 2,
    category: 'states'
  },
  {
    id: 'iv-037',
    infinitive: 'hear',
    pastSimple: 'heard',
    pastParticiple: 'heard',
    translation: 'oír',
    example: {
      infinitive: 'Can you hear me?',
      pastSimple: 'I heard a noise.',
      pastParticiple: 'Have you heard the news?'
    },
    frequency: 'very_common',
    level: 2,
    category: 'senses'
  },
  {
    id: 'iv-038',
    infinitive: 'hold',
    pastSimple: 'held',
    pastParticiple: 'held',
    translation: 'sostener/celebrar',
    example: {
      infinitive: 'Hold my hand.',
      pastSimple: 'They held a meeting.',
      pastParticiple: 'The event has been held annually.'
    },
    frequency: 'common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-039',
    infinitive: 'keep',
    pastSimple: 'kept',
    pastParticiple: 'kept',
    translation: 'guardar/mantener',
    example: {
      infinitive: 'Keep the change.',
      pastSimple: 'She kept the secret.',
      pastParticiple: 'The tradition has been kept.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'states'
  },
  {
    id: 'iv-040',
    infinitive: 'leave',
    pastSimple: 'left',
    pastParticiple: 'left',
    translation: 'dejar/irse',
    example: {
      infinitive: 'I\'m going to leave now.',
      pastSimple: 'He left the building.',
      pastParticiple: 'She has left for the airport.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'movement'
  },

  // === NIVEL 3-4 ===
  {
    id: 'iv-041',
    infinitive: 'lend',
    pastSimple: 'lent',
    pastParticiple: 'lent',
    translation: 'prestar',
    example: {
      infinitive: 'Can you lend me some money?',
      pastSimple: 'She lent me her car.',
      pastParticiple: 'The book has been lent to someone.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-042',
    infinitive: 'let',
    pastSimple: 'let',
    pastParticiple: 'let',
    translation: 'dejar/permitir',
    example: {
      infinitive: 'Let me help you.',
      pastSimple: 'They let us in.',
      pastParticiple: 'She has never let me down.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-043',
    infinitive: 'lie',
    pastSimple: 'lay',
    pastParticiple: 'lain',
    translation: 'yacer/acostarse',
    example: {
      infinitive: 'I like to lie on the beach.',
      pastSimple: 'She lay on the grass.',
      pastParticiple: 'He has lain in bed all day.'
    },
    frequency: 'common',
    level: 4,
    category: 'movement'
  },
  {
    id: 'iv-044',
    infinitive: 'lose',
    pastSimple: 'lost',
    pastParticiple: 'lost',
    translation: 'perder',
    example: {
      infinitive: 'Don\'t lose your keys.',
      pastSimple: 'I lost my wallet.',
      pastParticiple: 'The game has been lost.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-045',
    infinitive: 'mean',
    pastSimple: 'meant',
    pastParticiple: 'meant',
    translation: 'significar/querer decir',
    example: {
      infinitive: 'What does this word mean?',
      pastSimple: 'I meant to call you.',
      pastParticiple: 'It was never meant to happen.'
    },
    frequency: 'very_common',
    level: 3,
    category: 'communication'
  },
  {
    id: 'iv-046',
    infinitive: 'meet',
    pastSimple: 'met',
    pastParticiple: 'met',
    translation: 'conocer/reunirse',
    example: {
      infinitive: 'Nice to meet you.',
      pastSimple: 'We met at a party.',
      pastParticiple: 'All requirements have been met.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'communication'
  },
  {
    id: 'iv-047',
    infinitive: 'pay',
    pastSimple: 'paid',
    pastParticiple: 'paid',
    translation: 'pagar',
    example: {
      infinitive: 'I need to pay the bill.',
      pastSimple: 'She paid for dinner.',
      pastParticiple: 'The employees have been paid.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-048',
    infinitive: 'run',
    pastSimple: 'ran',
    pastParticiple: 'run',
    translation: 'correr',
    example: {
      infinitive: 'I run every morning.',
      pastSimple: 'He ran to catch the bus.',
      pastParticiple: 'The marathon has been run.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'movement'
  },
  {
    id: 'iv-049',
    infinitive: 'send',
    pastSimple: 'sent',
    pastParticiple: 'sent',
    translation: 'enviar',
    example: {
      infinitive: 'Send me an email.',
      pastSimple: 'I sent the package yesterday.',
      pastParticiple: 'The letter has been sent.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'communication'
  },
  {
    id: 'iv-050',
    infinitive: 'set',
    pastSimple: 'set',
    pastParticiple: 'set',
    translation: 'establecer/poner',
    example: {
      infinitive: 'Set the table for dinner.',
      pastSimple: 'She set a new record.',
      pastParticiple: 'The date has been set.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-051',
    infinitive: 'show',
    pastSimple: 'showed',
    pastParticiple: 'shown',
    translation: 'mostrar',
    example: {
      infinitive: 'Show me your ID.',
      pastSimple: 'He showed me the way.',
      pastParticiple: 'The movie has been shown.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'communication'
  },
  {
    id: 'iv-052',
    infinitive: 'shut',
    pastSimple: 'shut',
    pastParticiple: 'shut',
    translation: 'cerrar',
    example: {
      infinitive: 'Please shut the door.',
      pastSimple: 'She shut the window.',
      pastParticiple: 'The store has been shut down.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-053',
    infinitive: 'sing',
    pastSimple: 'sang',
    pastParticiple: 'sung',
    translation: 'cantar',
    example: {
      infinitive: 'She can sing beautifully.',
      pastSimple: 'They sang the national anthem.',
      pastParticiple: 'That song has been sung millions of times.'
    },
    frequency: 'common',
    level: 2,
    category: 'communication'
  },
  {
    id: 'iv-054',
    infinitive: 'sit',
    pastSimple: 'sat',
    pastParticiple: 'sat',
    translation: 'sentarse',
    example: {
      infinitive: 'Please sit down.',
      pastSimple: 'She sat on the bench.',
      pastParticiple: 'I have sat here for hours.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'movement'
  },
  {
    id: 'iv-055',
    infinitive: 'sleep',
    pastSimple: 'slept',
    pastParticiple: 'slept',
    translation: 'dormir',
    example: {
      infinitive: 'I need to sleep more.',
      pastSimple: 'I slept for 8 hours.',
      pastParticiple: 'I haven\'t slept well lately.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'states'
  },
  {
    id: 'iv-056',
    infinitive: 'spend',
    pastSimple: 'spent',
    pastParticiple: 'spent',
    translation: 'gastar/pasar (tiempo)',
    example: {
      infinitive: 'Don\'t spend too much money.',
      pastSimple: 'We spent the weekend at the beach.',
      pastParticiple: 'A lot of money has been spent.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-057',
    infinitive: 'stand',
    pastSimple: 'stood',
    pastParticiple: 'stood',
    translation: 'estar de pie/pararse',
    example: {
      infinitive: 'Please stand up.',
      pastSimple: 'She stood in line.',
      pastParticiple: 'I have stood here waiting for an hour.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'movement'
  },
  {
    id: 'iv-058',
    infinitive: 'swim',
    pastSimple: 'swam',
    pastParticiple: 'swum',
    translation: 'nadar',
    example: {
      infinitive: 'I like to swim in the ocean.',
      pastSimple: 'She swam across the lake.',
      pastParticiple: 'I have never swum here before.'
    },
    frequency: 'common',
    level: 2,
    category: 'movement'
  },
  {
    id: 'iv-059',
    infinitive: 'teach',
    pastSimple: 'taught',
    pastParticiple: 'taught',
    translation: 'enseñar',
    example: {
      infinitive: 'I teach English.',
      pastSimple: 'She taught me to cook.',
      pastParticiple: 'The lesson has been taught.'
    },
    frequency: 'common',
    level: 2,
    category: 'communication'
  },
  {
    id: 'iv-060',
    infinitive: 'throw',
    pastSimple: 'threw',
    pastParticiple: 'thrown',
    translation: 'lanzar/tirar',
    example: {
      infinitive: 'Throw the ball!',
      pastSimple: 'He threw the trash away.',
      pastParticiple: 'The ball has been thrown.'
    },
    frequency: 'common',
    level: 2,
    category: 'actions'
  },

  // === NIVEL 4-5 ===
  {
    id: 'iv-061',
    infinitive: 'understand',
    pastSimple: 'understood',
    pastParticiple: 'understood',
    translation: 'entender',
    example: {
      infinitive: 'I understand the problem.',
      pastSimple: 'She understood the instructions.',
      pastParticiple: 'The concept has been understood.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'thinking'
  },
  {
    id: 'iv-062',
    infinitive: 'wake',
    pastSimple: 'woke',
    pastParticiple: 'woken',
    translation: 'despertar',
    example: {
      infinitive: 'I usually wake up early.',
      pastSimple: 'The noise woke me up.',
      pastParticiple: 'I have woken up late today.'
    },
    frequency: 'common',
    level: 2,
    category: 'states'
  },
  {
    id: 'iv-063',
    infinitive: 'wear',
    pastSimple: 'wore',
    pastParticiple: 'worn',
    translation: 'llevar puesto/usar',
    example: {
      infinitive: 'I wear a uniform to work.',
      pastSimple: 'She wore a beautiful dress.',
      pastParticiple: 'These shoes have been worn out.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'states'
  },
  {
    id: 'iv-064',
    infinitive: 'win',
    pastSimple: 'won',
    pastParticiple: 'won',
    translation: 'ganar',
    example: {
      infinitive: 'I hope we win the game.',
      pastSimple: 'They won the championship.',
      pastParticiple: 'The prize has been won.'
    },
    frequency: 'common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-065',
    infinitive: 'bite',
    pastSimple: 'bit',
    pastParticiple: 'bitten',
    translation: 'morder',
    example: {
      infinitive: 'Don\'t bite your nails.',
      pastSimple: 'The dog bit me.',
      pastParticiple: 'I have been bitten by a mosquito.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-066',
    infinitive: 'blow',
    pastSimple: 'blew',
    pastParticiple: 'blown',
    translation: 'soplar',
    example: {
      infinitive: 'Blow out the candles.',
      pastSimple: 'The wind blew hard.',
      pastParticiple: 'The papers have been blown away.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-067',
    infinitive: 'beat',
    pastSimple: 'beat',
    pastParticiple: 'beaten',
    translation: 'golpear/vencer',
    example: {
      infinitive: 'My heart beats fast.',
      pastSimple: 'Our team beat them 3-0.',
      pastParticiple: 'The record has been beaten.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-068',
    infinitive: 'become',
    pastSimple: 'became',
    pastParticiple: 'become',
    translation: 'convertirse/llegar a ser',
    example: {
      infinitive: 'I want to become a doctor.',
      pastSimple: 'She became famous overnight.',
      pastParticiple: 'It has become a tradition.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'states'
  },
  {
    id: 'iv-069',
    infinitive: 'bend',
    pastSimple: 'bent',
    pastParticiple: 'bent',
    translation: 'doblar/inclinarse',
    example: {
      infinitive: 'Bend your knees.',
      pastSimple: 'She bent to pick it up.',
      pastParticiple: 'The rules have been bent.'
    },
    frequency: 'common',
    level: 4,
    category: 'movement'
  },
  {
    id: 'iv-070',
    infinitive: 'bleed',
    pastSimple: 'bled',
    pastParticiple: 'bled',
    translation: 'sangrar',
    example: {
      infinitive: 'My finger is bleeding.',
      pastSimple: 'The wound bled a lot.',
      pastParticiple: 'It has bled for hours.'
    },
    frequency: 'less_common',
    level: 4,
    category: 'states'
  },
  {
    id: 'iv-071',
    infinitive: 'broadcast',
    pastSimple: 'broadcast',
    pastParticiple: 'broadcast',
    translation: 'transmitir',
    example: {
      infinitive: 'They broadcast live.',
      pastSimple: 'The show was broadcast yesterday.',
      pastParticiple: 'The news has been broadcast.'
    },
    frequency: 'common',
    level: 5,
    category: 'communication'
  },
  {
    id: 'iv-072',
    infinitive: 'burn',
    pastSimple: 'burnt/burned',
    pastParticiple: 'burnt/burned',
    translation: 'quemar',
    example: {
      infinitive: 'Don\'t burn the food.',
      pastSimple: 'I burnt my hand.',
      pastParticiple: 'The documents have been burnt.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-073',
    infinitive: 'burst',
    pastSimple: 'burst',
    pastParticiple: 'burst',
    translation: 'estallar/reventar',
    example: {
      infinitive: 'The balloon will burst.',
      pastSimple: 'The pipe burst.',
      pastParticiple: 'The bubble has burst.'
    },
    frequency: 'less_common',
    level: 4,
    category: 'actions'
  },
  {
    id: 'iv-074',
    infinitive: 'cast',
    pastSimple: 'cast',
    pastParticiple: 'cast',
    translation: 'lanzar/emitir/moldear',
    example: {
      infinitive: 'Cast your vote.',
      pastSimple: 'They cast him in the movie.',
      pastParticiple: 'Doubts have been cast.'
    },
    frequency: 'less_common',
    level: 5,
    category: 'actions'
  },
  {
    id: 'iv-075',
    infinitive: 'cost',
    pastSimple: 'cost',
    pastParticiple: 'cost',
    translation: 'costar',
    example: {
      infinitive: 'How much does this cost?',
      pastSimple: 'It cost me $50.',
      pastParticiple: 'It has cost a fortune.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'states'
  },
  {
    id: 'iv-076',
    infinitive: 'creep',
    pastSimple: 'crept',
    pastParticiple: 'crept',
    translation: 'arrastrarse/deslizarse',
    example: {
      infinitive: 'The cat creeps towards the bird.',
      pastSimple: 'He crept out of bed.',
      pastParticiple: 'Doubt has crept in.'
    },
    frequency: 'less_common',
    level: 5,
    category: 'movement'
  },
  {
    id: 'iv-077',
    infinitive: 'deal',
    pastSimple: 'dealt',
    pastParticiple: 'dealt',
    translation: 'tratar/repartir',
    example: {
      infinitive: 'I deal with customers.',
      pastSimple: 'She dealt the cards.',
      pastParticiple: 'The problem has been dealt with.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-078',
    infinitive: 'dig',
    pastSimple: 'dug',
    pastParticiple: 'dug',
    translation: 'cavar/excavar',
    example: {
      infinitive: 'Let\'s dig a hole.',
      pastSimple: 'They dug a tunnel.',
      pastParticiple: 'A grave has been dug.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-079',
    infinitive: 'draw',
    pastSimple: 'drew',
    pastParticiple: 'drawn',
    translation: 'dibujar/atraer',
    example: {
      infinitive: 'I like to draw pictures.',
      pastSimple: 'She drew a portrait.',
      pastParticiple: 'Conclusions have been drawn.'
    },
    frequency: 'common',
    level: 2,
    category: 'creation'
  },
  {
    id: 'iv-080',
    infinitive: 'dream',
    pastSimple: 'dreamt/dreamed',
    pastParticiple: 'dreamt/dreamed',
    translation: 'soñar',
    example: {
      infinitive: 'I dream of traveling.',
      pastSimple: 'I dreamt about you.',
      pastParticiple: 'I have dreamt of this day.'
    },
    frequency: 'common',
    level: 3,
    category: 'thinking'
  },

  // === NIVEL 5-6 (MENOS COMUNES) ===
  {
    id: 'iv-081',
    infinitive: 'feed',
    pastSimple: 'fed',
    pastParticiple: 'fed',
    translation: 'alimentar',
    example: {
      infinitive: 'I feed my cat twice a day.',
      pastSimple: 'She fed the baby.',
      pastParticiple: 'The animals have been fed.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-082',
    infinitive: 'fight',
    pastSimple: 'fought',
    pastParticiple: 'fought',
    translation: 'luchar/pelear',
    example: {
      infinitive: 'Don\'t fight with your brother.',
      pastSimple: 'They fought in the war.',
      pastParticiple: 'The battle has been fought.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-083',
    infinitive: 'forbid',
    pastSimple: 'forbade',
    pastParticiple: 'forbidden',
    translation: 'prohibir',
    example: {
      infinitive: 'I forbid you to go.',
      pastSimple: 'They forbade smoking.',
      pastParticiple: 'Smoking is forbidden here.'
    },
    frequency: 'less_common',
    level: 5,
    category: 'communication'
  },
  {
    id: 'iv-084',
    infinitive: 'forgive',
    pastSimple: 'forgave',
    pastParticiple: 'forgiven',
    translation: 'perdonar',
    example: {
      infinitive: 'Please forgive me.',
      pastSimple: 'She forgave him.',
      pastParticiple: 'You have been forgiven.'
    },
    frequency: 'common',
    level: 3,
    category: 'emotions'
  },
  {
    id: 'iv-085',
    infinitive: 'freeze',
    pastSimple: 'froze',
    pastParticiple: 'frozen',
    translation: 'congelar',
    example: {
      infinitive: 'Water freezes at 0°C.',
      pastSimple: 'The lake froze.',
      pastParticiple: 'The pipes have frozen.'
    },
    frequency: 'common',
    level: 3,
    category: 'states'
  },
  {
    id: 'iv-086',
    infinitive: 'hang',
    pastSimple: 'hung',
    pastParticiple: 'hung',
    translation: 'colgar',
    example: {
      infinitive: 'Hang your coat there.',
      pastSimple: 'She hung the picture.',
      pastParticiple: 'The decorations have been hung.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-087',
    infinitive: 'hide',
    pastSimple: 'hid',
    pastParticiple: 'hidden',
    translation: 'esconder',
    example: {
      infinitive: 'Where should I hide?',
      pastSimple: 'She hid behind the tree.',
      pastParticiple: 'The treasure has been hidden.'
    },
    frequency: 'common',
    level: 3,
    category: 'movement'
  },
  {
    id: 'iv-088',
    infinitive: 'hit',
    pastSimple: 'hit',
    pastParticiple: 'hit',
    translation: 'golpear',
    example: {
      infinitive: 'Don\'t hit the ball too hard.',
      pastSimple: 'The car hit a tree.',
      pastParticiple: 'The target has been hit.'
    },
    frequency: 'common',
    level: 2,
    category: 'actions'
  },
  {
    id: 'iv-089',
    infinitive: 'hurt',
    pastSimple: 'hurt',
    pastParticiple: 'hurt',
    translation: 'doler/lastimar',
    example: {
      infinitive: 'My leg hurts.',
      pastSimple: 'I hurt my back.',
      pastParticiple: 'No one has been hurt.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'senses'
  },
  {
    id: 'iv-090',
    infinitive: 'kneel',
    pastSimple: 'knelt',
    pastParticiple: 'knelt',
    translation: 'arrodillarse',
    example: {
      infinitive: 'Kneel down, please.',
      pastSimple: 'He knelt before the king.',
      pastParticiple: 'I have knelt here for hours.'
    },
    frequency: 'less_common',
    level: 5,
    category: 'movement'
  },

  // === NIVEL 6+ (AVANZADOS) ===
  {
    id: 'iv-091',
    infinitive: 'lay',
    pastSimple: 'laid',
    pastParticiple: 'laid',
    translation: 'poner/colocar',
    example: {
      infinitive: 'Lay the book on the table.',
      pastSimple: 'She laid the baby in the crib.',
      pastParticiple: 'The foundation has been laid.'
    },
    frequency: 'common',
    level: 4,
    category: 'actions'
  },
  {
    id: 'iv-092',
    infinitive: 'lead',
    pastSimple: 'led',
    pastParticiple: 'led',
    translation: 'liderar/conducir',
    example: {
      infinitive: 'She leads the team.',
      pastSimple: 'He led the expedition.',
      pastParticiple: 'The project has been led by her.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-093',
    infinitive: 'leap',
    pastSimple: 'leapt/leaped',
    pastParticiple: 'leapt/leaped',
    translation: 'saltar',
    example: {
      infinitive: 'Look before you leap.',
      pastSimple: 'The cat leapt onto the roof.',
      pastParticiple: 'Technology has leapt forward.'
    },
    frequency: 'less_common',
    level: 5,
    category: 'movement'
  },
  {
    id: 'iv-094',
    infinitive: 'learn',
    pastSimple: 'learnt/learned',
    pastParticiple: 'learnt/learned',
    translation: 'aprender',
    example: {
      infinitive: 'I want to learn English.',
      pastSimple: 'She learnt to drive.',
      pastParticiple: 'The lesson has been learnt.'
    },
    frequency: 'very_common',
    level: 2,
    category: 'thinking'
  },
  {
    id: 'iv-095',
    infinitive: 'light',
    pastSimple: 'lit',
    pastParticiple: 'lit',
    translation: 'encender/iluminar',
    example: {
      infinitive: 'Light the candle.',
      pastSimple: 'She lit a match.',
      pastParticiple: 'The room has been lit.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-096',
    infinitive: 'overcome',
    pastSimple: 'overcame',
    pastParticiple: 'overcome',
    translation: 'superar/vencer',
    example: {
      infinitive: 'You can overcome this challenge.',
      pastSimple: 'She overcame her fears.',
      pastParticiple: 'The obstacle has been overcome.'
    },
    frequency: 'common',
    level: 5,
    category: 'actions'
  },
  {
    id: 'iv-097',
    infinitive: 'prove',
    pastSimple: 'proved',
    pastParticiple: 'proven/proved',
    translation: 'probar/demostrar',
    example: {
      infinitive: 'Can you prove it?',
      pastSimple: 'He proved his innocence.',
      pastParticiple: 'The theory has been proven.'
    },
    frequency: 'common',
    level: 4,
    category: 'thinking'
  },
  {
    id: 'iv-098',
    infinitive: 'quit',
    pastSimple: 'quit',
    pastParticiple: 'quit',
    translation: 'dejar/renunciar',
    example: {
      infinitive: 'I want to quit smoking.',
      pastSimple: 'She quit her job.',
      pastParticiple: 'He has quit the team.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-099',
    infinitive: 'rid',
    pastSimple: 'rid',
    pastParticiple: 'rid',
    translation: 'librar/deshacerse',
    example: {
      infinitive: 'I need to rid myself of bad habits.',
      pastSimple: 'They rid the house of pests.',
      pastParticiple: 'We have rid ourselves of debt.'
    },
    frequency: 'less_common',
    level: 6,
    category: 'actions'
  },
  {
    id: 'iv-100',
    infinitive: 'ride',
    pastSimple: 'rode',
    pastParticiple: 'ridden',
    translation: 'montar/viajar',
    example: {
      infinitive: 'I ride my bike to work.',
      pastSimple: 'She rode a horse.',
      pastParticiple: 'Have you ever ridden a motorcycle?'
    },
    frequency: 'common',
    level: 2,
    category: 'movement'
  },
  {
    id: 'iv-101',
    infinitive: 'ring',
    pastSimple: 'rang',
    pastParticiple: 'rung',
    translation: 'sonar/llamar',
    example: {
      infinitive: 'Ring the bell.',
      pastSimple: 'The phone rang.',
      pastParticiple: 'The alarm has rung.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-102',
    infinitive: 'rise',
    pastSimple: 'rose',
    pastParticiple: 'risen',
    translation: 'subir/elevarse',
    example: {
      infinitive: 'The sun rises in the east.',
      pastSimple: 'Prices rose sharply.',
      pastParticiple: 'Temperatures have risen.'
    },
    frequency: 'common',
    level: 3,
    category: 'movement'
  },
  {
    id: 'iv-103',
    infinitive: 'seek',
    pastSimple: 'sought',
    pastParticiple: 'sought',
    translation: 'buscar/perseguir',
    example: {
      infinitive: 'I seek adventure.',
      pastSimple: 'She sought help.',
      pastParticiple: 'Justice has been sought.'
    },
    frequency: 'less_common',
    level: 5,
    category: 'actions'
  },
  {
    id: 'iv-104',
    infinitive: 'shake',
    pastSimple: 'shook',
    pastParticiple: 'shaken',
    translation: 'sacudir/agitar',
    example: {
      infinitive: 'Shake the bottle.',
      pastSimple: 'He shook my hand.',
      pastParticiple: 'I was shaken by the news.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-105',
    infinitive: 'shine',
    pastSimple: 'shone',
    pastParticiple: 'shone',
    translation: 'brillar',
    example: {
      infinitive: 'The sun shines brightly.',
      pastSimple: 'Her eyes shone with joy.',
      pastParticiple: 'The light has shone through.'
    },
    frequency: 'common',
    level: 3,
    category: 'states'
  },
  {
    id: 'iv-106',
    infinitive: 'shoot',
    pastSimple: 'shot',
    pastParticiple: 'shot',
    translation: 'disparar/filmar',
    example: {
      infinitive: 'Don\'t shoot!',
      pastSimple: 'She shot the arrow.',
      pastParticiple: 'The movie was shot in Paris.'
    },
    frequency: 'common',
    level: 4,
    category: 'actions'
  },
  {
    id: 'iv-107',
    infinitive: 'shrink',
    pastSimple: 'shrank',
    pastParticiple: 'shrunk',
    translation: 'encoger',
    example: {
      infinitive: 'This shirt might shrink.',
      pastSimple: 'The economy shrank.',
      pastParticiple: 'The market has shrunk.'
    },
    frequency: 'less_common',
    level: 5,
    category: 'states'
  },
  {
    id: 'iv-108',
    infinitive: 'sink',
    pastSimple: 'sank',
    pastParticiple: 'sunk',
    translation: 'hundir',
    example: {
      infinitive: 'Ships can sink.',
      pastSimple: 'The boat sank.',
      pastParticiple: 'The Titanic has sunk.'
    },
    frequency: 'common',
    level: 4,
    category: 'movement'
  },
  {
    id: 'iv-109',
    infinitive: 'slide',
    pastSimple: 'slid',
    pastParticiple: 'slid',
    translation: 'deslizar',
    example: {
      infinitive: 'Slide the card through.',
      pastSimple: 'She slid across the ice.',
      pastParticiple: 'The door has slid open.'
    },
    frequency: 'common',
    level: 4,
    category: 'movement'
  },
  {
    id: 'iv-110',
    infinitive: 'smell',
    pastSimple: 'smelt/smelled',
    pastParticiple: 'smelt/smelled',
    translation: 'oler',
    example: {
      infinitive: 'I can smell flowers.',
      pastSimple: 'Something smelt bad.',
      pastParticiple: 'I have never smelt anything so good.'
    },
    frequency: 'common',
    level: 3,
    category: 'senses'
  },
  {
    id: 'iv-111',
    infinitive: 'spell',
    pastSimple: 'spelt/spelled',
    pastParticiple: 'spelt/spelled',
    translation: 'deletrear',
    example: {
      infinitive: 'How do you spell your name?',
      pastSimple: 'She spelt her name wrong.',
      pastParticiple: 'The word has been spelt incorrectly.'
    },
    frequency: 'common',
    level: 3,
    category: 'communication'
  },
  {
    id: 'iv-112',
    infinitive: 'spill',
    pastSimple: 'spilt/spilled',
    pastParticiple: 'spilt/spilled',
    translation: 'derramar',
    example: {
      infinitive: 'Don\'t spill the milk.',
      pastSimple: 'I spilt coffee on my shirt.',
      pastParticiple: 'Oil has been spilt.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-113',
    infinitive: 'split',
    pastSimple: 'split',
    pastParticiple: 'split',
    translation: 'dividir/partir',
    example: {
      infinitive: 'Let\'s split the bill.',
      pastSimple: 'They split up.',
      pastParticiple: 'The group has split.'
    },
    frequency: 'common',
    level: 4,
    category: 'actions'
  },
  {
    id: 'iv-114',
    infinitive: 'spread',
    pastSimple: 'spread',
    pastParticiple: 'spread',
    translation: 'esparcir/propagar',
    example: {
      infinitive: 'Spread butter on the bread.',
      pastSimple: 'The news spread quickly.',
      pastParticiple: 'The virus has spread.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-115',
    infinitive: 'steal',
    pastSimple: 'stole',
    pastParticiple: 'stolen',
    translation: 'robar',
    example: {
      infinitive: 'Don\'t steal.',
      pastSimple: 'Someone stole my wallet.',
      pastParticiple: 'The painting has been stolen.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-116',
    infinitive: 'stick',
    pastSimple: 'stuck',
    pastParticiple: 'stuck',
    translation: 'pegar/atascar',
    example: {
      infinitive: 'Stick the poster on the wall.',
      pastSimple: 'The door stuck.',
      pastParticiple: 'I\'ve been stuck in traffic.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-117',
    infinitive: 'sting',
    pastSimple: 'stung',
    pastParticiple: 'stung',
    translation: 'picar',
    example: {
      infinitive: 'Bees can sting.',
      pastSimple: 'A bee stung me.',
      pastParticiple: 'I\'ve been stung twice.'
    },
    frequency: 'less_common',
    level: 4,
    category: 'actions'
  },
  {
    id: 'iv-118',
    infinitive: 'stink',
    pastSimple: 'stank',
    pastParticiple: 'stunk',
    translation: 'apestar',
    example: {
      infinitive: 'This cheese stinks.',
      pastSimple: 'The garbage stank.',
      pastParticiple: 'The room has stunk all day.'
    },
    frequency: 'less_common',
    level: 5,
    category: 'senses'
  },
  {
    id: 'iv-119',
    infinitive: 'strike',
    pastSimple: 'struck',
    pastParticiple: 'struck',
    translation: 'golpear/atacar',
    example: {
      infinitive: 'Strike while the iron is hot.',
      pastSimple: 'Lightning struck the tree.',
      pastParticiple: 'A deal has been struck.'
    },
    frequency: 'common',
    level: 4,
    category: 'actions'
  },
  {
    id: 'iv-120',
    infinitive: 'swear',
    pastSimple: 'swore',
    pastParticiple: 'sworn',
    translation: 'jurar/maldecir',
    example: {
      infinitive: 'I swear I didn\'t do it.',
      pastSimple: 'She swore to tell the truth.',
      pastParticiple: 'I have sworn an oath.'
    },
    frequency: 'common',
    level: 4,
    category: 'communication'
  },
  {
    id: 'iv-121',
    infinitive: 'sweep',
    pastSimple: 'swept',
    pastParticiple: 'swept',
    translation: 'barrer',
    example: {
      infinitive: 'Sweep the floor.',
      pastSimple: 'She swept the room.',
      pastParticiple: 'The floor has been swept.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-122',
    infinitive: 'swing',
    pastSimple: 'swung',
    pastParticiple: 'swung',
    translation: 'balancear/oscilar',
    example: {
      infinitive: 'The children swing in the park.',
      pastSimple: 'The door swung open.',
      pastParticiple: 'The pendulum has swung.'
    },
    frequency: 'common',
    level: 4,
    category: 'movement'
  },
  {
    id: 'iv-123',
    infinitive: 'tear',
    pastSimple: 'tore',
    pastParticiple: 'torn',
    translation: 'rasgar/romper',
    example: {
      infinitive: 'Don\'t tear the paper.',
      pastSimple: 'She tore the letter.',
      pastParticiple: 'My shirt has been torn.'
    },
    frequency: 'common',
    level: 3,
    category: 'actions'
  },
  {
    id: 'iv-124',
    infinitive: 'upset',
    pastSimple: 'upset',
    pastParticiple: 'upset',
    translation: 'molestar/trastornar',
    example: {
      infinitive: 'I don\'t want to upset you.',
      pastSimple: 'The news upset her.',
      pastParticiple: 'He has been upset all day.'
    },
    frequency: 'common',
    level: 3,
    category: 'emotions'
  },
  {
    id: 'iv-125',
    infinitive: 'weave',
    pastSimple: 'wove',
    pastParticiple: 'woven',
    translation: 'tejer',
    example: {
      infinitive: 'She can weave baskets.',
      pastSimple: 'They wove the fabric by hand.',
      pastParticiple: 'The carpet has been woven.'
    },
    frequency: 'less_common',
    level: 6,
    category: 'creation'
  },
  {
    id: 'iv-126',
    infinitive: 'withdraw',
    pastSimple: 'withdrew',
    pastParticiple: 'withdrawn',
    translation: 'retirar',
    example: {
      infinitive: 'I need to withdraw money.',
      pastSimple: 'She withdrew from the competition.',
      pastParticiple: 'The offer has been withdrawn.'
    },
    frequency: 'common',
    level: 5,
    category: 'actions'
  },
  {
    id: 'iv-127',
    infinitive: 'withstand',
    pastSimple: 'withstood',
    pastParticiple: 'withstood',
    translation: 'resistir/soportar',
    example: {
      infinitive: 'This building can withstand earthquakes.',
      pastSimple: 'They withstood the attack.',
      pastParticiple: 'The pressure has been withstood.'
    },
    frequency: 'less_common',
    level: 7,
    category: 'states'
  },
  {
    id: 'iv-128',
    infinitive: 'wring',
    pastSimple: 'wrung',
    pastParticiple: 'wrung',
    translation: 'retorcer/escurrir',
    example: {
      infinitive: 'Wring out the wet towel.',
      pastSimple: 'She wrung her hands nervously.',
      pastParticiple: 'The cloth has been wrung.'
    },
    frequency: 'less_common',
    level: 6,
    category: 'actions'
  },

  // === ADVANCED / LITERARY VERBS (Level 8-10) ===
  // Level 8—9—10: less common but appear in academic, literary, and C1/C2 texts
  {
    id: 'iv-a01',
    infinitive: 'abide',
    pastSimple: 'abode/abided',
    pastParticiple: 'abode/abided',
    translation: 'soportar / tolerar (en expresión "can\'t abide")',
    example: {
      infinitive: 'I cannot abide rudeness.',
      pastSimple: 'He abode by the decision.',
      pastParticiple: 'She has abided by the rules.'
    },
    frequency: 'rare',
    level: 9,
    category: 'states'
  },
  {
    id: 'iv-a02',
    infinitive: 'befall',
    pastSimple: 'befell',
    pastParticiple: 'befallen',
    translation: 'ocurrirle (algo malo) a alguien',
    example: {
      infinitive: 'Whatever may befall us, we face it together.',
      pastSimple: 'Misfortune befell the traveller.',
      pastParticiple: 'No harm has befallen him.'
    },
    frequency: 'rare',
    level: 10,
    category: 'other'
  },
  {
    id: 'iv-a03',
    infinitive: 'beseech',
    pastSimple: 'besought/beseeched',
    pastParticiple: 'besought/beseeched',
    translation: 'implorar / suplicar (literary)',
    example: {
      infinitive: 'I beseech you to reconsider.',
      pastSimple: 'She besought him for mercy.',
      pastParticiple: 'He had besought the court for leniency.'
    },
    frequency: 'rare',
    level: 10,
    category: 'communication'
  },
  {
    id: 'iv-a04',
    infinitive: 'cleave',
    pastSimple: 'cleft/cleaved/clove',
    pastParticiple: 'cleft/cleaved/cloven',
    translation: 'hender / dividir (literary/archaic)',
    example: {
      infinitive: 'The axe will cleave the log in two.',
      pastSimple: 'The ship clove through the waves.',
      pastParticiple: 'The rock had been cleft by lightning.'
    },
    frequency: 'rare',
    level: 10,
    category: 'actions'
  },
  {
    id: 'iv-a05',
    infinitive: 'forsake',
    pastSimple: 'forsook',
    pastParticiple: 'forsaken',
    translation: 'abandonar / renunciar (literary)',
    example: {
      infinitive: 'He refuses to forsake his principles.',
      pastSimple: 'She forsook her homeland.',
      pastParticiple: 'He felt utterly forsaken.'
    },
    frequency: 'rare',
    level: 9,
    category: 'emotions'
  },
  {
    id: 'iv-a06',
    infinitive: 'smite',
    pastSimple: 'smote',
    pastParticiple: 'smitten',
    translation: 'golpear / enamorar ("smitten with" = enamorado de)',
    example: {
      infinitive: 'He was about to smite his enemy.',
      pastSimple: 'He smote the dragon with his sword.',
      pastParticiple: 'She was completely smitten with him.'
    },
    frequency: 'rare',
    level: 9,
    category: 'emotions'
  },
  {
    id: 'iv-a07',
    infinitive: 'stave (off)',
    pastSimple: 'staved/stove',
    pastParticiple: 'staved/stove',
    translation: 'evitar / contener ("stave off" = retrasar, prevenir)',
    example: {
      infinitive: 'We need to stave off the crisis.',
      pastSimple: 'They staved off bankruptcy for a year.',
      pastParticiple: 'The disaster has been staved off, but only temporarily.'
    },
    frequency: 'less_common',
    level: 8,
    category: 'actions'
  },
  {
    id: 'iv-a08',
    infinitive: 'strew',
    pastSimple: 'strewed',
    pastParticiple: 'strewn/strewed',
    translation: 'esparcir / sembrar (scattered)',
    example: {
      infinitive: 'They plan to strew rose petals on the path.',
      pastSimple: 'She strewed documents over the desk.',
      pastParticiple: 'Papers were strewn everywhere.'
    },
    frequency: 'rare',
    level: 8,
    category: 'actions'
  },
  {
    id: 'iv-a10',
    infinitive: 'beset',
    pastSimple: 'beset',
    pastParticiple: 'beset',
    translation: 'acosar / asediar (formal)',
    example: {
      infinitive: 'Problems continue to beset the project.',
      pastSimple: 'Doubts beset him throughout the campaign.',
      pastParticiple: 'The expedition was beset by difficulties.'
    },
    frequency: 'less_common',
    level: 8,
    category: 'other'
  },

  // === NIVEL 10 (C1 — verbos de uso académico y profesional) ===
  {
    id: 'iv-c1-01',
    infinitive: 'arise',
    pastSimple: 'arose',
    pastParticiple: 'arisen',
    translation: 'surgir / aparecer',
    example: {
      infinitive: 'Problems can arise at any time.',
      pastSimple: 'A serious issue arose during the meeting.',
      pastParticiple: 'Several questions have arisen from the report.'
    },
    frequency: 'common',
    level: 10,
    category: 'other'
  },
  {
    id: 'iv-c1-05',
    infinitive: 'grind',
    pastSimple: 'ground',
    pastParticiple: 'ground',
    translation: 'moler / rechinar',
    example: {
      infinitive: 'They grind the coffee beans fresh every morning.',
      pastSimple: 'The machine ground to a halt.',
      pastParticiple: 'The spices have been ground into a fine powder.'
    },
    frequency: 'less_common',
    level: 10,
    category: 'actions'
  },
  {
    id: 'iv-c1-08',
    infinitive: 'mow',
    pastSimple: 'mowed',
    pastParticiple: 'mown',
    translation: 'cortar (césped)',
    example: {
      infinitive: 'I mow the lawn every weekend.',
      pastSimple: 'He mowed the grass before the party.',
      pastParticiple: 'The lawn has just been mown.'
    },
    frequency: 'less_common',
    level: 10,
    category: 'actions'
  },
  {
    id: 'iv-c1-09',
    infinitive: 'slay',
    pastSimple: 'slew',
    pastParticiple: 'slain',
    translation: 'matar (literario)',
    example: {
      infinitive: 'The hero must slay the dragon.',
      pastSimple: 'The knight slew the beast in battle.',
      pastParticiple: 'Thousands were slain in the conflict.'
    },
    frequency: 'rare',
    level: 10,
    category: 'actions'
  },
  {
    id: 'iv-c1-10',
    infinitive: 'sow',
    pastSimple: 'sowed',
    pastParticiple: 'sown',
    translation: 'sembrar',
    example: {
      infinitive: 'Farmers sow seeds in spring.',
      pastSimple: 'She sowed doubt in the minds of the committee.',
      pastParticiple: 'The fields have been sown with wheat.'
    },
    frequency: 'less_common',
    level: 10,
    category: 'creation'
  },
  {
    id: 'iv-c1-11',
    infinitive: 'strive',
    pastSimple: 'strove',
    pastParticiple: 'striven',
    translation: 'esforzarse / luchar por',
    example: {
      infinitive: 'We strive for excellence in everything we do.',
      pastSimple: 'She strove to improve her language skills.',
      pastParticiple: 'He has always striven to be honest.'
    },
    frequency: 'common',
    level: 10,
    category: 'thinking'
  },
  {
    id: 'iv-c1-12',
    infinitive: 'thrive',
    pastSimple: 'throve',
    pastParticiple: 'thrived',
    translation: 'prosperar / florecer',
    example: {
      infinitive: 'Some plants thrive in direct sunlight.',
      pastSimple: 'The business throve under new management.',
      pastParticiple: 'The community has thrived since the new investment.'
    },
    frequency: 'common',
    level: 10,
    category: 'states'
  },

  // === NIVEL 11 (C1+ — verbos de registro formal y literario) ===
  {
    id: 'iv-c1plus-02',
    infinitive: 'behold',
    pastSimple: 'beheld',
    pastParticiple: 'beheld',
    translation: 'contemplar / ver (literario)',
    example: {
      infinitive: 'Behold the beauty of the landscape.',
      pastSimple: 'They beheld a breathtaking sunrise.',
      pastParticiple: 'A sight such as this has rarely been beheld.'
    },
    frequency: 'rare',
    level: 11,
    category: 'senses'
  },
  {
    id: 'iv-c1plus-03',
    infinitive: 'bereave',
    pastSimple: 'bereft',
    pastParticiple: 'bereft',
    translation: 'dejar en duelo / privar de',
    example: {
      infinitive: 'The accident could bereave many families.',
      pastSimple: 'The war bereft countless children of their parents.',
      pastParticiple: 'She was bereft of hope after the diagnosis.'
    },
    frequency: 'rare',
    level: 11,
    category: 'emotions'
  },
  {
    id: 'iv-c1plus-05',
    infinitive: 'fling',
    pastSimple: 'flung',
    pastParticiple: 'flung',
    translation: 'lanzar / arrojar con fuerza',
    example: {
      infinitive: 'She tends to fling her coat on the sofa.',
      pastSimple: 'He flung the documents across the table in anger.',
      pastParticiple: 'The door was flung open by the wind.'
    },
    frequency: 'less_common',
    level: 11,
    category: 'actions'
  },
  {
    id: 'iv-c1plus-06',
    infinitive: 'hew',
    pastSimple: 'hewed',
    pastParticiple: 'hewn',
    translation: 'cortar / tallar (con hacha)',
    example: {
      infinitive: 'Lumberjacks hew wood with great precision.',
      pastSimple: 'They hewed a path through the forest.',
      pastParticiple: 'The statue was hewn from a single block of marble.'
    },
    frequency: 'rare',
    level: 11,
    category: 'creation'
  },
  {
    id: 'iv-c1plus-07',
    infinitive: 'plead',
    pastSimple: 'pled',
    pastParticiple: 'pled',
    translation: 'suplicar / declararse (culpable/inocente)',
    example: {
      infinitive: 'The defendant will plead not guilty.',
      pastSimple: 'She pled for mercy from the court.',
      pastParticiple: 'He has pled guilty to all charges.'
    },
    frequency: 'less_common',
    level: 11,
    category: 'communication'
  },
  {
    id: 'iv-c1plus-08',
    infinitive: 'reave',
    pastSimple: 'reft',
    pastParticiple: 'reft',
    translation: 'arrebatar / despojar (arcaico)',
    example: {
      infinitive: 'Invaders would reave villages of their goods.',
      pastSimple: 'The storm reft the sailors of their vessel.',
      pastParticiple: 'They were reft of everything they owned.'
    },
    frequency: 'rare',
    level: 11,
    category: 'other'
  },
  {
    id: 'iv-c1plus-09',
    infinitive: 'shear',
    pastSimple: 'sheared',
    pastParticiple: 'shorn',
    translation: 'esquilar / cortar',
    example: {
      infinitive: 'Farmers shear sheep once a year.',
      pastSimple: 'They sheared the flock in a single day.',
      pastParticiple: 'His head was shorn as punishment.'
    },
    frequency: 'rare',
    level: 11,
    category: 'actions'
  },
  {
    id: 'iv-c1plus-11',
    infinitive: 'stride',
    pastSimple: 'strode',
    pastParticiple: 'stridden',
    translation: 'andar a zancadas',
    example: {
      infinitive: 'She likes to stride through the park each morning.',
      pastSimple: 'He strode into the room with great confidence.',
      pastParticiple: 'She has stridden ahead of her rivals in the field.'
    },
    frequency: 'less_common',
    level: 11,
    category: 'movement'
  },
  {
    id: 'iv-c1plus-12',
    infinitive: 'tread',
    pastSimple: 'trod',
    pastParticiple: 'trodden',
    translation: 'pisar / caminar sobre',
    example: {
      infinitive: 'Tread carefully on the wet floor.',
      pastSimple: 'We trod the same path our ancestors had walked.',
      pastParticiple: 'The grass has been trodden flat by the crowd.'
    },
    frequency: 'less_common',
    level: 11,
    category: 'movement'
  },

  // === NIVEL 12 (C2 — verbos raros, arcaicos y de registro muy elevado) ===
  {
    id: 'iv-c2-02',
    infinitive: 'betide',
    pastSimple: 'betided',
    pastParticiple: 'betided',
    translation: 'suceder / acontecer (arcaico)',
    example: {
      infinitive: 'Woe betide anyone who breaks the rules.',
      pastSimple: 'Strange things betided the village that winter.',
      pastParticiple: 'No evil has betided them so far.'
    },
    frequency: 'rare',
    level: 12,
    category: 'other'
  },
  {
    id: 'iv-c2-03',
    infinitive: 'chide',
    pastSimple: 'chid',
    pastParticiple: 'chidden',
    translation: 'reprender / regañar (literario)',
    example: {
      infinitive: 'Parents sometimes chide their children harshly.',
      pastSimple: 'The teacher chid the student for his carelessness.',
      pastParticiple: 'The servant was chidden for his impertinence.'
    },
    frequency: 'rare',
    level: 12,
    category: 'communication'
  },
  {
    id: 'iv-c2-04',
    infinitive: 'gird',
    pastSimple: 'girt',
    pastParticiple: 'girt',
    translation: 'ceñir / rodear (literario)',
    example: {
      infinitive: 'Warriors gird themselves before battle.',
      pastSimple: 'He girt his sword tightly around his waist.',
      pastParticiple: 'The city was girt by high stone walls.'
    },
    frequency: 'rare',
    level: 12,
    category: 'actions'
  },
  {
    id: 'iv-c2-05',
    infinitive: 'hoist',
    pastSimple: 'hoisted',
    pastParticiple: 'hoisted',
    translation: 'izar / elevar',
    example: {
      infinitive: 'They hoist the flag at sunrise every day.',
      pastSimple: 'The sailors hoisted the sails as the wind picked up.',
      pastParticiple: 'The trophy has been hoisted by the captain.'
    },
    frequency: 'less_common',
    level: 12,
    category: 'actions'
  },
  {
    id: 'iv-c2-06',
    infinitive: 'knit',
    pastSimple: 'knit',
    pastParticiple: 'knit',
    translation: 'tejer (punto) / unir estrechamente',
    example: {
      infinitive: 'She likes to knit scarves in winter.',
      pastSimple: 'The community knit itself together after the disaster.',
      pastParticiple: 'Their fates were closely knit together.'
    },
    frequency: 'less_common',
    level: 12,
    category: 'creation'
  },
  {
    id: 'iv-c2-07',
    infinitive: 'pen',
    pastSimple: 'penned',
    pastParticiple: 'penned',
    translation: 'redactar / escribir (formal)',
    example: {
      infinitive: 'Great authors pen masterpieces over many years.',
      pastSimple: 'She penned a heartfelt letter to her mentor.',
      pastParticiple: 'The manifesto has been penned by a group of scholars.'
    },
    frequency: 'less_common',
    level: 12,
    category: 'creation'
  },
  {
    id: 'iv-c2-08',
    infinitive: 'rend',
    pastSimple: 'rent',
    pastParticiple: 'rent',
    translation: 'desgarrar / partir (literario)',
    example: {
      infinitive: 'Grief can rend a family apart.',
      pastSimple: 'The explosion rent the building into rubble.',
      pastParticiple: 'The nation was rent by civil war.'
    },
    frequency: 'rare',
    level: 12,
    category: 'actions'
  },
  {
    id: 'iv-c2-09',
    infinitive: 'smelt',
    pastSimple: 'smelted',
    pastParticiple: 'smelted',
    translation: 'fundir (metal)',
    example: {
      infinitive: 'Workers smelt ore to extract pure metal.',
      pastSimple: 'Craftsmen smelted bronze thousands of years ago.',
      pastParticiple: 'The iron has been smelted at very high temperatures.'
    },
    frequency: 'rare',
    level: 12,
    category: 'creation'
  },

  // === NIVEL 13 (C2+ — verbos arcaicos, poéticos y de especialidad) ===
  {
    id: 'iv-c2plus-01',
    infinitive: 'bide',
    pastSimple: 'bode',
    pastParticiple: 'bided',
    translation: 'aguardar / esperar (arcaico)',
    example: {
      infinitive: 'You must bide your time until the moment is right.',
      pastSimple: 'He bode his time patiently in exile.',
      pastParticiple: 'She has always bided her time wisely.'
    },
    frequency: 'rare',
    level: 13,
    category: 'other'
  },
  {
    id: 'iv-c2plus-02',
    infinitive: 'dwell',
    pastSimple: 'dwelt',
    pastParticiple: 'dwelt',
    translation: 'morar / habitar (formal/literario)',
    example: {
      infinitive: 'Ancient tribes used to dwell in these caves.',
      pastSimple: 'The monks dwelt in silence for decades.',
      pastParticiple: 'Few people have dwelt in such isolation.'
    },
    frequency: 'less_common',
    level: 13,
    category: 'states'
  },
  {
    id: 'iv-c2plus-03',
    infinitive: 'gainsay',
    pastSimple: 'gainsaid',
    pastParticiple: 'gainsaid',
    translation: 'contradecir / negar (formal/arcaico)',
    example: {
      infinitive: 'No one can gainsay the evidence presented.',
      pastSimple: 'The minister gainsaid the official report.',
      pastParticiple: 'The truth cannot be gainsaid.'
    },
    frequency: 'rare',
    level: 13,
    category: 'communication'
  },
  {
    id: 'iv-c2plus-04',
    infinitive: 'stave',
    pastSimple: 'stove',
    pastParticiple: 'stove',
    translation: 'aplastar / romper a golpes',
    example: {
      infinitive: 'The rocks can stave in the hull of a boat.',
      pastSimple: 'The waves stove in the side of the ship.',
      pastParticiple: 'The barrel had been stove in by the impact.'
    },
    frequency: 'rare',
    level: 13,
    category: 'actions'
  },
  {
    id: 'iv-c2plus-06',
    infinitive: 'thaw',
    pastSimple: 'thawed',
    pastParticiple: 'thawed',
    translation: 'descongelar / deshelarse',
    example: {
      infinitive: 'Snow and ice thaw in spring.',
      pastSimple: 'Relations between the countries thawed after years of tension.',
      pastParticiple: 'The frozen river has thawed completely.'
    },
    frequency: 'less_common',
    level: 13,
    category: 'states'
  },
  {
    id: 'iv-c2plus-07',
    infinitive: 'vex',
    pastSimple: 'vexed',
    pastParticiple: 'vexed',
    translation: 'irritar / molestar / desconcertar',
    example: {
      infinitive: 'These questions continue to vex philosophers.',
      pastSimple: 'The bureaucratic delays vexed the whole team.',
      pastParticiple: 'Scholars have long been vexed by this paradox.'
    },
    frequency: 'less_common',
    level: 13,
    category: 'emotions'
  },
  {
    id: 'iv-c2plus-08',
    infinitive: 'wax',
    pastSimple: 'waxed',
    pastParticiple: 'waxed',
    translation: 'crecer / aumentar (literario) / encerar',
    example: {
      infinitive: 'The moon will wax and then wane.',
      pastSimple: 'His influence waxed as the empire expanded.',
      pastParticiple: 'The floor has been waxed to a high shine.'
    },
    frequency: 'rare',
    level: 13,
    category: 'states'
  },
  {
    id: 'iv-c2plus-09',
    infinitive: 'wend',
    pastSimple: 'wended',
    pastParticiple: 'wended',
    translation: 'ir / dirigirse (arcaico)',
    example: {
      infinitive: 'Pilgrims wend their way to holy sites.',
      pastSimple: 'They wended their way home through the forest.',
      pastParticiple: 'We have wended our way through every obstacle.'
    },
    frequency: 'rare',
    level: 13,
    category: 'movement'
  },
  {
    id: 'iv-c2plus-10',
    infinitive: 'whet',
    pastSimple: 'whetted',
    pastParticiple: 'whetted',
    translation: 'afilar / agudizar / estimular',
    example: {
      infinitive: 'A good trailer can whet your appetite for a film.',
      pastSimple: 'The short excerpt whetted our curiosity.',
      pastParticiple: 'Our interest has been whetted by the preview.'
    },
    frequency: 'rare',
    level: 13,
    category: 'other'
  },
];

// Helper functions
export const getVerbsByFrequency = (frequency: IrregularVerb['frequency']): IrregularVerb[] => {
  return irregularVerbs.filter(v => v.frequency === frequency);
};

export const getVerbsByLevel = (level: number): IrregularVerb[] => {
  return irregularVerbs.filter(v => v.level <= level);
};

export const getVerbsByCategory = (category: IrregularVerb['category']): IrregularVerb[] => {
  return irregularVerbs.filter(v => v.category === category);
};

export const searchVerb = (term: string): IrregularVerb[] => {
  const searchTerm = term.toLowerCase();
  return irregularVerbs.filter(v => 
    v.infinitive.toLowerCase().includes(searchTerm) ||
    v.pastSimple.toLowerCase().includes(searchTerm) ||
    v.pastParticiple.toLowerCase().includes(searchTerm) ||
    v.translation.toLowerCase().includes(searchTerm)
  );
};

export default irregularVerbs;
