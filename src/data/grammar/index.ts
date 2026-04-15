export interface GrammarTopic {
  id: string;
  name: string;
  nameEs: string;
  level: number;
  category: 'tenses' | 'modals' | 'conditionals' | 'passive' | 'reported' | 'other';
  explanation: string;
  explanationEs: string;
  structure: {
    affirmative: string;
    negative: string;
    question: string;
  };
  examples: {
    english: string;
    spanish: string;
  }[];
  uses: string[];
  timeExpressions: string[];
  commonMistakes: {
    wrong: string;
    correct: string;
    explanation: string;
  }[];
}

export const grammarTopics: GrammarTopic[] = [
  // === VERB TO BE (FUNDAMENTAL) ===
  {
    id: 'verb-to-be-present',
    name: 'Verb TO BE (Present)',
    nameEs: 'Verbo TO BE (Presente)',
    level: 1,
    category: 'tenses',
    explanation: 'The most important verb in English. Used to identify, describe, and express states.',
    explanationEs: 'El verbo más importante en inglés. Se usa para identificar, describir y expresar estados.',
    structure: {
      affirmative: 'I am / You are / He-She-It is / We-They are',
      negative: 'I am not / You aren\'t / He-She-It isn\'t / We-They aren\'t',
      question: 'Am I? / Are you? / Is he-she-it? / Are we-they?'
    },
    examples: [
      { english: 'I am a student.', spanish: 'Soy estudiante.' },
      { english: 'She is happy.', spanish: 'Ella está feliz.' },
      { english: 'They are from Mexico.', spanish: 'Ellos son de México.' },
      { english: 'It is cold today.', spanish: 'Hace frío hoy.' },
      { english: 'We are at home.', spanish: 'Estamos en casa.' },
      { english: 'Are you ready?', spanish: '¿Estás listo?' },
      { english: 'He isn\'t here.', spanish: 'Él no está aquí.' }
    ],
    uses: [
      'Identity: I am John. She is a doctor.',
      'Nationality/Origin: We are from Spain.',
      'Age: He is 25 years old.',
      'Feelings/States: I am tired. They are happy.',
      'Location: The book is on the table.',
      'Weather: It is sunny. It is hot.',
      'Time: It is 5 o\'clock.',
      'Descriptions: The car is red. She is tall.',
      'Professions: He is an engineer.'
    ],
    timeExpressions: ['now', 'today', 'at the moment', 'currently'],
    commonMistakes: [
      { wrong: 'I is happy.', correct: 'I am happy.', explanation: 'Use "am" with I.' },
      { wrong: 'She are a teacher.', correct: 'She is a teacher.', explanation: 'Use "is" with he/she/it.' },
      { wrong: 'They is here.', correct: 'They are here.', explanation: 'Use "are" with they/we/you.' },
      { wrong: 'I am have a car.', correct: 'I have a car.', explanation: 'Don\'t use "am" with other verbs.' }
    ]
  },
  {
    id: 'verb-to-be-past',
    name: 'Verb TO BE (Past)',
    nameEs: 'Verbo TO BE (Pasado)',
    level: 1,
    category: 'tenses',
    explanation: 'The past form of TO BE. Used to describe past states, identities, and locations.',
    explanationEs: 'La forma pasada de TO BE. Se usa para describir estados, identidades y ubicaciones pasadas.',
    structure: {
      affirmative: 'I-He-She-It was / You-We-They were',
      negative: 'I-He-She-It wasn\'t / You-We-They weren\'t',
      question: 'Was I-he-she-it? / Were you-we-they?'
    },
    examples: [
      { english: 'I was tired yesterday.', spanish: 'Estaba cansado ayer.' },
      { english: 'She was a student in 2020.', spanish: 'Ella era estudiante en 2020.' },
      { english: 'They were at the party.', spanish: 'Ellos estaban en la fiesta.' },
      { english: 'It was cold last night.', spanish: 'Hacía frío anoche.' },
      { english: 'Were you happy?', spanish: '¿Estabas feliz?' },
      { english: 'We weren\'t ready.', spanish: 'No estábamos listos.' },
      { english: 'The movie was great!', spanish: '¡La película estuvo genial!' }
    ],
    uses: [
      'Past states: I was sick last week.',
      'Past locations: She was at school.',
      'Past descriptions: The weather was beautiful.',
      'Past identity: He was my teacher.',
      'Age in the past: I was 10 years old then.',
      'Past feelings: They were excited.'
    ],
    timeExpressions: ['yesterday', 'last week/month/year', 'ago', 'in 2020', 'when I was young'],
    commonMistakes: [
      { wrong: 'I were happy.', correct: 'I was happy.', explanation: 'Use "was" with I/he/she/it.' },
      { wrong: 'They was at home.', correct: 'They were at home.', explanation: 'Use "were" with they/we/you.' },
      { wrong: 'She was be tired.', correct: 'She was tired.', explanation: 'Don\'t use "be" after was/were.' }
    ]
  },
  
  // === PRESENT TENSES ===
  {
    id: 'present-simple',
    name: 'Present Simple',
    nameEs: 'Presente Simple',
    level: 1,
    category: 'tenses',
    explanation: 'Used for habits, routines, general truths, and permanent situations.',
    explanationEs: 'Se usa para hábitos, rutinas, verdades generales y situaciones permanentes.',
    structure: {
      affirmative: 'Subject + verb (+ s/es for he/she/it)',
      negative: 'Subject + do/does + not + verb',
      question: 'Do/Does + subject + verb?'
    },
    examples: [
      { english: 'I work every day.', spanish: 'Trabajo todos los días.' },
      { english: 'She plays tennis on Sundays.', spanish: 'Ella juega tenis los domingos.' },
      { english: 'The sun rises in the east.', spanish: 'El sol sale por el este.' },
      { english: 'Do you speak English?', spanish: '¿Hablas inglés?' },
      { english: 'He doesn\'t like coffee.', spanish: 'A él no le gusta el café.' }
    ],
    uses: [
      'Habits and routines: I wake up at 7 AM.',
      'General truths: Water boils at 100°C.',
      'Permanent situations: She lives in Madrid.',
      'Schedules and timetables: The train leaves at 9 PM.',
      'Instructions and directions: You turn left at the corner.'
    ],
    timeExpressions: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never', 'every day/week/month', 'on Mondays', 'in the morning'],
    commonMistakes: [
      { wrong: 'He work every day.', correct: 'He works every day.', explanation: 'Add -s to the verb for he/she/it.' },
      { wrong: 'She don\'t like it.', correct: 'She doesn\'t like it.', explanation: 'Use "doesn\'t" for he/she/it.' },
      { wrong: 'Do she speak English?', correct: 'Does she speak English?', explanation: 'Use "Does" for he/she/it questions.' }
    ]
  },
  {
    id: 'present-continuous',
    name: 'Present Continuous',
    nameEs: 'Presente Continuo',
    level: 2,
    category: 'tenses',
    explanation: 'Used for actions happening now or around now, and temporary situations.',
    explanationEs: 'Se usa para acciones que ocurren ahora o alrededor de ahora, y situaciones temporales.',
    structure: {
      affirmative: 'Subject + am/is/are + verb-ing',
      negative: 'Subject + am/is/are + not + verb-ing',
      question: 'Am/Is/Are + subject + verb-ing?'
    },
    examples: [
      { english: 'I am working right now.', spanish: 'Estoy trabajando ahora mismo.' },
      { english: 'She is studying for her exam.', spanish: 'Ella está estudiando para su examen.' },
      { english: 'They are living in London temporarily.', spanish: 'Están viviendo en Londres temporalmente.' },
      { english: 'Are you listening to me?', spanish: '¿Me estás escuchando?' },
      { english: 'He isn\'t sleeping.', spanish: 'Él no está durmiendo.' }
    ],
    uses: [
      'Actions happening now: I\'m reading a book.',
      'Temporary situations: She\'s staying with her parents.',
      'Changing situations: The weather is getting warmer.',
      'Future arrangements: We\'re meeting tomorrow.',
      'Annoying habits (with always): He\'s always complaining!'
    ],
    timeExpressions: ['now', 'right now', 'at the moment', 'currently', 'today', 'this week', 'these days'],
    commonMistakes: [
      { wrong: 'I working now.', correct: 'I am working now.', explanation: 'Always include am/is/are.' },
      { wrong: 'She is work.', correct: 'She is working.', explanation: 'Add -ing to the verb.' },
      { wrong: 'I am knowing the answer.', correct: 'I know the answer.', explanation: 'Don\'t use continuous with stative verbs (know, like, want, etc.).' }
    ]
  },
  {
    id: 'present-perfect',
    name: 'Present Perfect',
    nameEs: 'Presente Perfecto',
    level: 4,
    category: 'tenses',
    explanation: 'Used for past actions with present relevance, experiences, and unfinished time periods.',
    explanationEs: 'Se usa para acciones pasadas con relevancia presente, experiencias y períodos de tiempo no terminados.',
    structure: {
      affirmative: 'Subject + have/has + past participle',
      negative: 'Subject + have/has + not + past participle',
      question: 'Have/Has + subject + past participle?'
    },
    examples: [
      { english: 'I have finished my homework.', spanish: 'He terminado mi tarea.' },
      { english: 'She has visited Paris three times.', spanish: 'Ella ha visitado París tres veces.' },
      { english: 'Have you ever eaten sushi?', spanish: '¿Alguna vez has comido sushi?' },
      { english: 'They haven\'t arrived yet.', spanish: 'Todavía no han llegado.' },
      { english: 'He has lived here for 10 years.', spanish: 'Ha vivido aquí por 10 años.' }
    ],
    uses: [
      'Life experiences: I have been to Japan.',
      'Recent actions with present results: I\'ve lost my keys.',
      'Unfinished time periods: I\'ve read two books this week.',
      'Duration with for/since: She has worked here for 5 years.',
      'With just, already, yet: I\'ve just finished.'
    ],
    timeExpressions: ['ever', 'never', 'already', 'yet', 'just', 'recently', 'lately', 'so far', 'since', 'for', 'this week/month/year'],
    commonMistakes: [
      { wrong: 'I have went there.', correct: 'I have gone there.', explanation: 'Use the past participle, not past simple.' },
      { wrong: 'I have seen him yesterday.', correct: 'I saw him yesterday.', explanation: 'Don\'t use present perfect with specific past times.' },
      { wrong: 'She has living here.', correct: 'She has lived here.', explanation: 'Use past participle, not -ing form.' }
    ]
  },
  {
    id: 'present-perfect-continuous',
    name: 'Present Perfect Continuous',
    nameEs: 'Presente Perfecto Continuo',
    level: 6,
    category: 'tenses',
    explanation: 'Used for actions that started in the past and continue to the present, emphasizing duration.',
    explanationEs: 'Se usa para acciones que comenzaron en el pasado y continúan hasta el presente, enfatizando la duración.',
    structure: {
      affirmative: 'Subject + have/has + been + verb-ing',
      negative: 'Subject + have/has + not + been + verb-ing',
      question: 'Have/Has + subject + been + verb-ing?'
    },
    examples: [
      { english: 'I have been waiting for an hour.', spanish: 'He estado esperando por una hora.' },
      { english: 'She has been studying all day.', spanish: 'Ella ha estado estudiando todo el día.' },
      { english: 'It has been raining since morning.', spanish: 'Ha estado lloviendo desde la mañana.' },
      { english: 'Have you been working here long?', spanish: '¿Has estado trabajando aquí mucho tiempo?' },
      { english: 'They haven\'t been sleeping well.', spanish: 'No han estado durmiendo bien.' }
    ],
    uses: [
      'Duration of ongoing action: I\'ve been learning English for 2 years.',
      'Recent continuous action with visible result: You\'ve been crying (your eyes are red).',
      'Temporary situations in progress: He\'s been living with his parents.',
      'Emphasis on the activity itself: I\'ve been reading (focus on the action, not completion).'
    ],
    timeExpressions: ['for', 'since', 'all day/week', 'lately', 'recently', 'how long'],
    commonMistakes: [
      { wrong: 'I have been knowing him for years.', correct: 'I have known him for years.', explanation: 'Don\'t use continuous with stative verbs.' },
      { wrong: 'She has been studied all day.', correct: 'She has been studying all day.', explanation: 'Use verb-ing after "been".' }
    ]
  },
  
  // === PRESENT FOR FUTURE ===
  {
    id: 'present-for-future',
    name: 'Present Tenses for Future',
    nameEs: 'Presente para Futuro',
    level: 4,
    category: 'tenses',
    explanation: 'Present Simple and Present Continuous can be used to talk about future events.',
    explanationEs: 'El Presente Simple y Presente Continuo pueden usarse para hablar de eventos futuros.',
    structure: {
      affirmative: 'Present Simple: Subject + verb (schedules) | Present Continuous: Subject + am/is/are + verb-ing (arrangements)',
      negative: 'Present Simple: Subject + don\'t/doesn\'t + verb | Present Continuous: Subject + am/is/are + not + verb-ing',
      question: 'Present Simple: Do/Does + subject + verb? | Present Continuous: Am/Is/Are + subject + verb-ing?'
    },
    examples: [
      { english: 'The train leaves at 9 AM tomorrow.', spanish: 'El tren sale a las 9 AM mañana.' },
      { english: 'The movie starts at 8 PM.', spanish: 'La película empieza a las 8 PM.' },
      { english: 'I\'m meeting John tomorrow.', spanish: 'Me reúno con John mañana.' },
      { english: 'We\'re flying to Paris next week.', spanish: 'Volamos a París la próxima semana.' },
      { english: 'She\'s getting married in June.', spanish: 'Ella se casa en junio.' },
      { english: 'What time does the bus arrive?', spanish: '¿A qué hora llega el autobús?' },
      { english: 'Are you coming to the party tonight?', spanish: '¿Vienes a la fiesta esta noche?' }
    ],
    uses: [
      'Present Simple for schedules/timetables: The plane departs at 6 PM.',
      'Present Simple for fixed events: The concert is on Friday.',
      'Present Continuous for personal arrangements: I\'m having dinner with my boss.',
      'Present Continuous for planned events: They\'re visiting us next month.',
      'Present Continuous for near future plans: I\'m leaving soon.'
    ],
    timeExpressions: ['tomorrow', 'next week', 'tonight', 'this evening', 'on Monday', 'soon', 'later'],
    commonMistakes: [
      { wrong: 'The train will leave at 9 AM (for timetables).', correct: 'The train leaves at 9 AM.', explanation: 'Use Present Simple for schedules and timetables.' },
      { wrong: 'I meet John tomorrow (for arrangements).', correct: 'I\'m meeting John tomorrow.', explanation: 'Use Present Continuous for personal arrangements.' }
    ]
  },
  
  // === PAST TENSES ===
  {
    id: 'past-simple',
    name: 'Past Simple',
    nameEs: 'Pasado Simple',
    level: 2,
    category: 'tenses',
    explanation: 'Used for completed actions in the past at a specific time.',
    explanationEs: 'Se usa para acciones completadas en el pasado en un momento específico.',
    structure: {
      affirmative: 'Subject + verb-ed (regular) / irregular form',
      negative: 'Subject + did + not + base verb',
      question: 'Did + subject + base verb?'
    },
    examples: [
      { english: 'I worked yesterday.', spanish: 'Trabajé ayer.' },
      { english: 'She went to Paris last year.', spanish: 'Ella fue a París el año pasado.' },
      { english: 'Did you see the movie?', spanish: '¿Viste la película?' },
      { english: 'They didn\'t come to the party.', spanish: 'No vinieron a la fiesta.' },
      { english: 'He bought a new car.', spanish: 'Él compró un carro nuevo.' }
    ],
    uses: [
      'Completed actions: I finished the book.',
      'Series of completed actions: I woke up, had breakfast, and left.',
      'Past habits: When I was young, I played soccer.',
      'Past states: She was happy.',
      'Specific time in the past: I met him in 2015.'
    ],
    timeExpressions: ['yesterday', 'last week/month/year', 'ago', 'in 2020', 'when I was young', 'at that time'],
    commonMistakes: [
      { wrong: 'I did went there.', correct: 'I went there.', explanation: 'Don\'t use "did" with the past form in affirmative.' },
      { wrong: 'She didn\'t went.', correct: 'She didn\'t go.', explanation: 'Use base verb after "didn\'t".' },
      { wrong: 'I goed to school.', correct: 'I went to school.', explanation: '"Go" is irregular: go-went-gone.' }
    ]
  },
  {
    id: 'past-continuous',
    name: 'Past Continuous',
    nameEs: 'Pasado Continuo',
    level: 3,
    category: 'tenses',
    explanation: 'Used for actions in progress at a specific time in the past.',
    explanationEs: 'Se usa para acciones en progreso en un momento específico en el pasado.',
    structure: {
      affirmative: 'Subject + was/were + verb-ing',
      negative: 'Subject + was/were + not + verb-ing',
      question: 'Was/Were + subject + verb-ing?'
    },
    examples: [
      { english: 'I was sleeping at midnight.', spanish: 'Estaba durmiendo a medianoche.' },
      { english: 'They were watching TV when I arrived.', spanish: 'Estaban viendo TV cuando llegué.' },
      { english: 'What were you doing at 5 PM?', spanish: '¿Qué estabas haciendo a las 5 PM?' },
      { english: 'She wasn\'t listening.', spanish: 'Ella no estaba escuchando.' },
      { english: 'While I was cooking, he was cleaning.', spanish: 'Mientras yo cocinaba, él limpiaba.' }
    ],
    uses: [
      'Action in progress at a past time: At 8 PM, I was studying.',
      'Background action interrupted: I was walking when it started to rain.',
      'Parallel actions: While she was reading, he was writing.',
      'Setting the scene: The sun was shining and birds were singing.',
      'Temporary past situations: I was living in Spain at that time.'
    ],
    timeExpressions: ['while', 'when', 'as', 'at that moment', 'at [time] yesterday', 'all day yesterday'],
    commonMistakes: [
      { wrong: 'I was work when you called.', correct: 'I was working when you called.', explanation: 'Always use verb-ing.' },
      { wrong: 'When I was seeing him, I waved.', correct: 'When I saw him, I waved.', explanation: 'Use past simple for quick completed actions.' }
    ]
  },
  {
    id: 'past-perfect',
    name: 'Past Perfect',
    nameEs: 'Pasado Perfecto',
    level: 5,
    category: 'tenses',
    explanation: 'Used for actions completed before another past action.',
    explanationEs: 'Se usa para acciones completadas antes de otra acción pasada.',
    structure: {
      affirmative: 'Subject + had + past participle',
      negative: 'Subject + had + not + past participle',
      question: 'Had + subject + past participle?'
    },
    examples: [
      { english: 'I had finished before he arrived.', spanish: 'Había terminado antes de que él llegara.' },
      { english: 'She had never seen snow before.', spanish: 'Nunca había visto nieve antes.' },
      { english: 'Had you eaten before the meeting?', spanish: '¿Habías comido antes de la reunión?' },
      { english: 'They hadn\'t met before the party.', spanish: 'No se habían conocido antes de la fiesta.' },
      { english: 'By the time I arrived, the movie had started.', spanish: 'Para cuando llegué, la película había empezado.' }
    ],
    uses: [
      'Earlier of two past actions: When I arrived, she had left.',
      'Experience up to a past point: I had never tried sushi before that day.',
      'Third conditional: If I had known, I would have helped.',
      'Reported speech: She said she had finished.',
      'Cause of a past situation: I was tired because I hadn\'t slept.'
    ],
    timeExpressions: ['before', 'after', 'by the time', 'already', 'yet', 'never', 'just', 'until then'],
    commonMistakes: [
      { wrong: 'After I had ate, I left.', correct: 'After I had eaten, I left.', explanation: 'Use past participle, not past simple.' },
      { wrong: 'I had went there before.', correct: 'I had gone there before.', explanation: '"Go" participle is "gone".' }
    ]
  },
  {
    id: 'past-perfect-continuous',
    name: 'Past Perfect Continuous',
    nameEs: 'Pasado Perfecto Continuo',
    level: 7,
    category: 'tenses',
    explanation: 'Used for actions that were in progress before another past action, emphasizing duration.',
    explanationEs: 'Se usa para acciones que estaban en progreso antes de otra acción pasada, enfatizando la duración.',
    structure: {
      affirmative: 'Subject + had + been + verb-ing',
      negative: 'Subject + had + not + been + verb-ing',
      question: 'Had + subject + been + verb-ing?'
    },
    examples: [
      { english: 'I had been waiting for two hours when she arrived.', spanish: 'Había estado esperando dos horas cuando ella llegó.' },
      { english: 'They had been working all day before the meeting.', spanish: 'Habían estado trabajando todo el día antes de la reunión.' },
      { english: 'She was tired because she had been running.', spanish: 'Estaba cansada porque había estado corriendo.' },
      { english: 'Had you been studying before I called?', spanish: '¿Habías estado estudiando antes de que llamara?' },
      { english: 'It had been raining for hours.', spanish: 'Había estado lloviendo por horas.' }
    ],
    uses: [
      'Duration before a past event: He had been sleeping for 10 hours when I woke him.',
      'Cause of a past situation: Her eyes were red because she had been crying.',
      'Actions in progress until a past point: They had been dating for years before they got married.',
      'Emphasis on the ongoing nature: I had been thinking about the problem all week.'
    ],
    timeExpressions: ['for', 'since', 'all day', 'all morning', 'before', 'when', 'until'],
    commonMistakes: [
      { wrong: 'I had been wait for hours.', correct: 'I had been waiting for hours.', explanation: 'Use verb-ing after "had been".' },
      { wrong: 'She had been knowing him for years.', correct: 'She had known him for years.', explanation: 'Don\'t use continuous with stative verbs.' }
    ]
  },
  
  // === FUTURE TENSES ===
  {
    id: 'future-simple',
    name: 'Future Simple (Will)',
    nameEs: 'Futuro Simple (Will)',
    level: 3,
    category: 'tenses',
    explanation: 'Used for predictions, spontaneous decisions, promises, and future facts.',
    explanationEs: 'Se usa para predicciones, decisiones espontáneas, promesas y hechos futuros.',
    structure: {
      affirmative: 'Subject + will + base verb',
      negative: 'Subject + will + not (won\'t) + base verb',
      question: 'Will + subject + base verb?'
    },
    examples: [
      { english: 'I will help you.', spanish: 'Te ayudaré.' },
      { english: 'It will rain tomorrow.', spanish: 'Lloverá mañana.' },
      { english: 'Will you come to the party?', spanish: '¿Vendrás a la fiesta?' },
      { english: 'She won\'t forget this.', spanish: 'Ella no olvidará esto.' },
      { english: 'I think he will win.', spanish: 'Creo que él ganará.' }
    ],
    uses: [
      'Predictions: It will be sunny tomorrow.',
      'Spontaneous decisions: I\'ll answer the phone.',
      'Promises: I will always love you.',
      'Offers: I\'ll carry that for you.',
      'Threats/Warnings: You\'ll regret this!',
      'Future facts: The sun will rise at 6 AM.'
    ],
    timeExpressions: ['tomorrow', 'next week/month/year', 'in the future', 'soon', 'later', 'in 2030'],
    commonMistakes: [
      { wrong: 'I will to go.', correct: 'I will go.', explanation: 'Don\'t use "to" after "will".' },
      { wrong: 'He wills help us.', correct: 'He will help us.', explanation: '"Will" doesn\'t change for he/she/it.' }
    ]
  },
  {
    id: 'going-to',
    name: 'Going to Future',
    nameEs: 'Futuro con Going to',
    level: 3,
    category: 'tenses',
    explanation: 'Used for plans, intentions, and predictions based on evidence.',
    explanationEs: 'Se usa para planes, intenciones y predicciones basadas en evidencia.',
    structure: {
      affirmative: 'Subject + am/is/are + going to + base verb',
      negative: 'Subject + am/is/are + not + going to + base verb',
      question: 'Am/Is/Are + subject + going to + base verb?'
    },
    examples: [
      { english: 'I am going to study medicine.', spanish: 'Voy a estudiar medicina.' },
      { english: 'Look at those clouds! It\'s going to rain.', spanish: '¡Mira esas nubes! Va a llover.' },
      { english: 'Are you going to travel this summer?', spanish: '¿Vas a viajar este verano?' },
      { english: 'She isn\'t going to accept the offer.', spanish: 'Ella no va a aceptar la oferta.' },
      { english: 'We\'re going to buy a house.', spanish: 'Vamos a comprar una casa.' }
    ],
    uses: [
      'Plans and intentions: I\'m going to learn French.',
      'Predictions with evidence: She\'s going to have a baby (she\'s pregnant).',
      'Inevitable future events: The building is going to collapse!',
      'Decisions already made: We\'re going to get married.'
    ],
    timeExpressions: ['tomorrow', 'next week', 'soon', 'this weekend', 'in the future'],
    commonMistakes: [
      { wrong: 'I going to study.', correct: 'I am going to study.', explanation: 'Always include am/is/are.' },
      { wrong: 'She is going study.', correct: 'She is going to study.', explanation: 'Don\'t forget "to".' }
    ]
  },
  {
    id: 'future-continuous',
    name: 'Future Continuous',
    nameEs: 'Futuro Continuo',
    level: 6,
    category: 'tenses',
    explanation: 'Used for actions in progress at a specific time in the future.',
    explanationEs: 'Se usa para acciones en progreso en un momento específico en el futuro.',
    structure: {
      affirmative: 'Subject + will + be + verb-ing',
      negative: 'Subject + will + not + be + verb-ing',
      question: 'Will + subject + be + verb-ing?'
    },
    examples: [
      { english: 'This time tomorrow, I will be flying to Paris.', spanish: 'Mañana a esta hora, estaré volando a París.' },
      { english: 'Will you be working at 9 PM?', spanish: '¿Estarás trabajando a las 9 PM?' },
      { english: 'They won\'t be sleeping when we arrive.', spanish: 'No estarán durmiendo cuando lleguemos.' },
      { english: 'I will be waiting for you.', spanish: 'Estaré esperándote.' }
    ],
    uses: [
      'Actions in progress at future time: At 8 PM, I\'ll be having dinner.',
      'Polite inquiries: Will you be using the car tonight?',
      'Parallel future actions: While I\'m working, she\'ll be studying.',
      'Planned future actions: I\'ll be seeing him tomorrow (it\'s arranged).'
    ],
    timeExpressions: ['this time tomorrow', 'at [time] tomorrow', 'next week at this time', 'while'],
    commonMistakes: [
      { wrong: 'I will be work.', correct: 'I will be working.', explanation: 'Use verb-ing after "be".' }
    ]
  },
  {
    id: 'future-perfect',
    name: 'Future Perfect',
    nameEs: 'Futuro Perfecto',
    level: 7,
    category: 'tenses',
    explanation: 'Used for actions that will be completed before a future time.',
    explanationEs: 'Se usa para acciones que estarán completadas antes de un momento futuro.',
    structure: {
      affirmative: 'Subject + will + have + past participle',
      negative: 'Subject + will + not + have + past participle',
      question: 'Will + subject + have + past participle?'
    },
    examples: [
      { english: 'By 2025, I will have graduated.', spanish: 'Para 2025, me habré graduado.' },
      { english: 'Will you have finished by tomorrow?', spanish: '¿Habrás terminado para mañana?' },
      { english: 'She will have left by the time you arrive.', spanish: 'Ella se habrá ido para cuando llegues.' },
      { english: 'They won\'t have completed the project.', spanish: 'No habrán completado el proyecto.' }
    ],
    uses: [
      'Completion before future time: By Friday, I\'ll have finished the report.',
      'Duration up to future point: By next year, I\'ll have lived here for 10 years.',
      'Assumptions about past: He\'ll have received my email by now.'
    ],
    timeExpressions: ['by [time/date]', 'by the time', 'before', 'by then', 'by next week'],
    commonMistakes: [
      { wrong: 'I will have went.', correct: 'I will have gone.', explanation: 'Use past participle.' }
    ]
  },
  {
    id: 'future-perfect-continuous',
    name: 'Future Perfect Continuous',
    nameEs: 'Futuro Perfecto Continuo',
    level: 8,
    category: 'tenses',
    explanation: 'Used for actions that will be in progress for a duration before a specific future time.',
    explanationEs: 'Se usa para acciones que estarán en progreso durante un tiempo antes de un momento futuro específico.',
    structure: {
      affirmative: 'Subject + will + have + been + verb-ing',
      negative: 'Subject + will + not + have + been + verb-ing',
      question: 'Will + subject + have + been + verb-ing?'
    },
    examples: [
      { english: 'By next month, I will have been working here for 5 years.', spanish: 'Para el próximo mes, habré estado trabajando aquí por 5 años.' },
      { english: 'She will have been studying for 3 hours by the time you arrive.', spanish: 'Ella habrá estado estudiando por 3 horas para cuando llegues.' },
      { english: 'Will you have been waiting long?', spanish: '¿Habrás estado esperando mucho tiempo?' },
      { english: 'By 2030, they will have been living in that house for 20 years.', spanish: 'Para 2030, habrán estado viviendo en esa casa por 20 años.' },
      { english: 'I won\'t have been sleeping long when the alarm rings.', spanish: 'No habré estado durmiendo mucho cuando suene la alarma.' }
    ],
    uses: [
      'Duration up to a future point: By December, I\'ll have been learning English for 2 years.',
      'Emphasis on continuity: They\'ll have been traveling for 24 hours by the time they land.',
      'Cause of future situation: You\'ll be tired because you\'ll have been driving all day.',
      'Projected ongoing actions: Next year, we\'ll have been married for 25 years.'
    ],
    timeExpressions: ['by [future time]', 'by the time', 'for [duration]', 'by next year'],
    commonMistakes: [
      { wrong: 'I will have been work.', correct: 'I will have been working.', explanation: 'Use verb-ing after "have been".' }
    ]
  },
  
  // === CONDITIONALS ===
  {
    id: 'zero-conditional',
    name: 'Zero Conditional',
    nameEs: 'Condicional Cero',
    level: 4,
    category: 'conditionals',
    explanation: 'Used for general truths and scientific facts - if/when this happens, that always happens.',
    explanationEs: 'Se usa para verdades generales y hechos científicos - si/cuando esto pasa, eso siempre pasa.',
    structure: {
      affirmative: 'If/When + present simple, present simple',
      negative: 'If/When + present simple, present simple (negative)',
      question: 'What happens if/when...?'
    },
    examples: [
      { english: 'If you heat water, it boils.', spanish: 'Si calientas agua, hierve.' },
      { english: 'When the sun sets, it gets dark.', spanish: 'Cuando el sol se pone, oscurece.' },
      { english: 'If you mix red and blue, you get purple.', spanish: 'Si mezclas rojo y azul, obtienes morado.' },
      { english: 'Plants die if they don\'t get water.', spanish: 'Las plantas mueren si no reciben agua.' }
    ],
    uses: [
      'Scientific facts: If you freeze water, it becomes ice.',
      'General truths: If you don\'t eat, you get hungry.',
      'Instructions: If the light is red, stop.'
    ],
    timeExpressions: ['if', 'when', 'whenever', 'every time'],
    commonMistakes: [
      { wrong: 'If you will heat water, it boils.', correct: 'If you heat water, it boils.', explanation: 'Don\'t use "will" in the if-clause.' }
    ]
  },
  {
    id: 'first-conditional',
    name: 'First Conditional',
    nameEs: 'Primer Condicional',
    level: 4,
    category: 'conditionals',
    explanation: 'Used for real/possible situations in the future.',
    explanationEs: 'Se usa para situaciones reales/posibles en el futuro.',
    structure: {
      affirmative: 'If + present simple, will + base verb',
      negative: 'If + present simple, won\'t + base verb',
      question: 'What will happen if...?'
    },
    examples: [
      { english: 'If it rains, I will stay home.', spanish: 'Si llueve, me quedaré en casa.' },
      { english: 'If you study hard, you will pass.', spanish: 'Si estudias duro, aprobarás.' },
      { english: 'I won\'t go if you don\'t come.', spanish: 'No iré si tú no vienes.' },
      { english: 'What will you do if you fail?', spanish: '¿Qué harás si repruebas?' }
    ],
    uses: [
      'Predictions: If he arrives late, the boss will be angry.',
      'Warnings: If you touch that, you\'ll get burned.',
      'Promises: If you help me, I\'ll pay you.',
      'Threats: If you don\'t stop, I\'ll call the police.'
    ],
    timeExpressions: ['if', 'unless', 'as soon as', 'when', 'before', 'after'],
    commonMistakes: [
      { wrong: 'If it will rain, I will stay.', correct: 'If it rains, I will stay.', explanation: 'Use present simple in the if-clause.' }
    ]
  },
  {
    id: 'second-conditional',
    name: 'Second Conditional',
    nameEs: 'Segundo Condicional',
    level: 5,
    category: 'conditionals',
    explanation: 'Used for unreal/hypothetical situations in the present or future.',
    explanationEs: 'Se usa para situaciones irreales/hipotéticas en el presente o futuro.',
    structure: {
      affirmative: 'If + past simple, would + base verb',
      negative: 'If + past simple, wouldn\'t + base verb',
      question: 'What would you do if...?'
    },
    examples: [
      { english: 'If I won the lottery, I would travel the world.', spanish: 'Si ganara la lotería, viajaría por el mundo.' },
      { english: 'If I were you, I would accept the job.', spanish: 'Si yo fuera tú, aceptaría el trabajo.' },
      { english: 'She would be happy if she had more time.', spanish: 'Ella sería feliz si tuviera más tiempo.' },
      { english: 'What would you do if you could fly?', spanish: '¿Qué harías si pudieras volar?' }
    ],
    uses: [
      'Hypothetical situations: If I lived in Paris, I would speak French.',
      'Advice: If I were you, I would study more.',
      'Imaginary situations: If animals could talk, what would they say?',
      'Unlikely future: If he called me, I would answer.'
    ],
    timeExpressions: ['if', 'what if', 'suppose', 'imagine'],
    commonMistakes: [
      { wrong: 'If I would have money...', correct: 'If I had money...', explanation: 'Use past simple in the if-clause, not "would".' },
      { wrong: 'If I was you...', correct: 'If I were you...', explanation: 'Use "were" for all subjects in formal/traditional grammar.' }
    ]
  },
  {
    id: 'third-conditional',
    name: 'Third Conditional',
    nameEs: 'Tercer Condicional',
    level: 7,
    category: 'conditionals',
    explanation: 'Used for unreal/hypothetical situations in the past.',
    explanationEs: 'Se usa para situaciones irreales/hipotéticas en el pasado.',
    structure: {
      affirmative: 'If + past perfect, would + have + past participle',
      negative: 'If + past perfect, wouldn\'t + have + past participle',
      question: 'What would have happened if...?'
    },
    examples: [
      { english: 'If I had studied, I would have passed.', spanish: 'Si hubiera estudiado, habría aprobado.' },
      { english: 'If she had known, she would have helped.', spanish: 'Si ella hubiera sabido, habría ayudado.' },
      { english: 'I wouldn\'t have been late if I had left earlier.', spanish: 'No habría llegado tarde si hubiera salido antes.' },
      { english: 'What would you have done if you had won?', spanish: '¿Qué habrías hecho si hubieras ganado?' }
    ],
    uses: [
      'Imagining different past outcomes: If I had taken the job, I would have moved to London.',
      'Regrets: If I had known, I would have acted differently.',
      'Criticism: If you had listened, this wouldn\'t have happened.'
    ],
    timeExpressions: ['if', 'if only', 'what if'],
    commonMistakes: [
      { wrong: 'If I would have known...', correct: 'If I had known...', explanation: 'Use past perfect in the if-clause.' }
    ]
  },
  
  // === MODALS ===
  {
    id: 'modal-can-could',
    name: 'Can / Could',
    nameEs: 'Can / Could',
    level: 2,
    category: 'modals',
    explanation: 'Used for ability, possibility, permission, and requests.',
    explanationEs: 'Se usa para habilidad, posibilidad, permiso y peticiones.',
    structure: {
      affirmative: 'Subject + can/could + base verb',
      negative: 'Subject + can\'t/couldn\'t + base verb',
      question: 'Can/Could + subject + base verb?'
    },
    examples: [
      { english: 'I can swim.', spanish: 'Puedo nadar.' },
      { english: 'She could play piano when she was five.', spanish: 'Ella podía tocar piano cuando tenía cinco años.' },
      { english: 'Can you help me?', spanish: '¿Puedes ayudarme?' },
      { english: 'Could you open the window, please?', spanish: '¿Podrías abrir la ventana, por favor?' },
      { english: 'You can\'t park here.', spanish: 'No puedes estacionar aquí.' }
    ],
    uses: [
      'Present ability: I can speak English.',
      'Past ability: I could run fast when I was young.',
      'Permission: Can I leave early?',
      'Polite requests: Could you repeat that?',
      'Possibility: This could be the answer.'
    ],
    timeExpressions: [],
    commonMistakes: [
      { wrong: 'I can to swim.', correct: 'I can swim.', explanation: 'Don\'t use "to" after modals.' },
      { wrong: 'She cans speak French.', correct: 'She can speak French.', explanation: 'Modals don\'t change form.' }
    ]
  },
  {
    id: 'modal-must-have-to',
    name: 'Must / Have to',
    nameEs: 'Must / Have to',
    level: 3,
    category: 'modals',
    explanation: 'Used for obligation, necessity, and logical conclusions.',
    explanationEs: 'Se usa para obligación, necesidad y conclusiones lógicas.',
    structure: {
      affirmative: 'Subject + must/have to + base verb',
      negative: 'Subject + mustn\'t / don\'t have to + base verb',
      question: 'Must/Do...have to + subject + base verb?'
    },
    examples: [
      { english: 'You must wear a seatbelt.', spanish: 'Debes usar cinturón de seguridad.' },
      { english: 'I have to work tomorrow.', spanish: 'Tengo que trabajar mañana.' },
      { english: 'You mustn\'t smoke here.', spanish: 'No debes fumar aquí.' },
      { english: 'You don\'t have to come early.', spanish: 'No tienes que venir temprano.' },
      { english: 'She must be tired (logical conclusion).', spanish: 'Ella debe estar cansada.' }
    ],
    uses: [
      'Strong obligation: You must finish by Friday.',
      'External obligation: I have to pay taxes.',
      'Prohibition (mustn\'t): You mustn\'t tell anyone.',
      'No obligation (don\'t have to): You don\'t have to wait.',
      'Logical deduction: He must be the new teacher.'
    ],
    timeExpressions: [],
    commonMistakes: [
      { wrong: 'You don\'t must go.', correct: 'You mustn\'t go. / You don\'t have to go.', explanation: '"Don\'t must" doesn\'t exist. Use mustn\'t (prohibition) or don\'t have to (no obligation).' }
    ]
  },
  {
    id: 'modal-should',
    name: 'Should / Ought to',
    nameEs: 'Should / Ought to',
    level: 4,
    category: 'modals',
    explanation: 'Used for advice, recommendations, and expectations.',
    explanationEs: 'Se usa para consejos, recomendaciones y expectativas.',
    structure: {
      affirmative: 'Subject + should/ought to + base verb',
      negative: 'Subject + shouldn\'t + base verb',
      question: 'Should + subject + base verb?'
    },
    examples: [
      { english: 'You should see a doctor.', spanish: 'Deberías ver a un doctor.' },
      { english: 'She shouldn\'t eat so much sugar.', spanish: 'Ella no debería comer tanta azúcar.' },
      { english: 'Should I call him?', spanish: '¿Debería llamarlo?' },
      { english: 'You ought to apologize.', spanish: 'Deberías disculparte.' },
      { english: 'The train should arrive at 10.', spanish: 'El tren debería llegar a las 10.' }
    ],
    uses: [
      'Advice: You should exercise more.',
      'Opinion: I think you should accept.',
      'Expectation: They should be here by now.',
      'Criticism of past action: You should have told me!'
    ],
    timeExpressions: [],
    commonMistakes: [
      { wrong: 'You should to go.', correct: 'You should go.', explanation: 'Don\'t use "to" after should.' }
    ]
  },
  
  // === PASSIVE VOICE ===
  {
    id: 'passive-voice',
    name: 'Passive Voice',
    nameEs: 'Voz Pasiva',
    level: 6,
    category: 'passive',
    explanation: 'Used when the action is more important than who/what performs it.',
    explanationEs: 'Se usa cuando la acción es más importante que quién/qué la realiza.',
    structure: {
      affirmative: 'Object + be + past participle (+ by + agent)',
      negative: 'Object + be + not + past participle',
      question: 'Be + object + past participle?'
    },
    examples: [
      { english: 'The book was written by Shakespeare.', spanish: 'El libro fue escrito por Shakespeare.' },
      { english: 'English is spoken worldwide.', spanish: 'El inglés se habla en todo el mundo.' },
      { english: 'The window was broken.', spanish: 'La ventana fue rota.' },
      { english: 'Is coffee grown in Colombia?', spanish: '¿Se cultiva café en Colombia?' },
      { english: 'The project will be completed tomorrow.', spanish: 'El proyecto será completado mañana.' }
    ],
    uses: [
      'Unknown agent: My car was stolen.',
      'Unimportant agent: The building was constructed in 1990.',
      'Obvious agent: The criminal was arrested.',
      'Formal/scientific writing: The experiment was conducted.',
      'News reports: Three people were injured.'
    ],
    timeExpressions: [],
    commonMistakes: [
      { wrong: 'The letter was wrote by me.', correct: 'The letter was written by me.', explanation: 'Use past participle, not past simple.' }
    ]
  },
  
  // === REPORTED SPEECH ===
  {
    id: 'reported-speech',
    name: 'Reported Speech',
    nameEs: 'Estilo Indirecto',
    level: 8,
    category: 'reported',
    explanation: 'Used to report what someone said without using their exact words.',
    explanationEs: 'Se usa para reportar lo que alguien dijo sin usar sus palabras exactas.',
    structure: {
      affirmative: 'Subject + said/told + (that) + reported clause (tense shift)',
      negative: 'Subject + said/told + (that) + negative reported clause',
      question: 'Subject + asked + if/whether/wh- + reported clause'
    },
    examples: [
      { english: '"I am tired" → She said (that) she was tired.', spanish: '"Estoy cansada" → Ella dijo que estaba cansada.' },
      { english: '"I will help" → He said he would help.', spanish: '"Ayudaré" → Él dijo que ayudaría.' },
      { english: '"Did you finish?" → She asked if I had finished.', spanish: '"¿Terminaste?" → Ella preguntó si había terminado.' },
      { english: '"Where do you live?" → He asked where I lived.', spanish: '"¿Dónde vives?" → Él preguntó dónde vivía.' }
    ],
    uses: [
      'Reporting statements: She said she was busy.',
      'Reporting questions: He asked if I could help.',
      'Reporting commands: She told me to wait.',
      'Reporting suggestions: He suggested that we leave.'
    ],
    timeExpressions: ['said', 'told', 'asked', 'wondered', 'explained', 'mentioned'],
    commonMistakes: [
      { wrong: 'He said me that...', correct: 'He said (that)... / He told me (that)...', explanation: '"Say" doesn\'t take a person object directly.' }
    ]
  }
];

export const getGrammarByLevel = (level: number): GrammarTopic[] => {
  return grammarTopics.filter(topic => topic.level <= level);
};

export const getGrammarByCategory = (category: GrammarTopic['category']): GrammarTopic[] => {
  return grammarTopics.filter(topic => topic.category === category);
};

export default grammarTopics;
