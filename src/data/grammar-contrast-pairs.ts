// Grammar Contrast Pairs - Tense discrimination exercises
// Pares contrastivos de gramática para discriminar tiempos verbales similares

export interface ContrastPair {
  id: string;
  tense1: {
    name: string;
    nameEs: string;
    formula: string;
    keySignals: string[]; // time markers
  };
  tense2: {
    name: string;
    nameEs: string;
    formula: string;
    keySignals: string[];
  };
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  conceptualDifference: string;
  conceptualDifferenceEs: string;
  timeline: string; // ASCII art timeline
  discriminationExercises: {
    sentence: string;
    correctTense: 1 | 2;
    explanation: string;
    explanationEs: string;
  }[];
  productionExercises: {
    prompt: string;
    promptEs: string;
    expectedTense: 1 | 2;
    sampleAnswer: string;
    hint: string;
  }[];
  errorHospital: {
    wrong: string;
    correct: string;
    l1Cause: string; // Why Spanish speakers make this error
    l1CauseEs: string;
  }[];
  minimalPairs: {
    sentence1: string;
    meaning1: string;
    meaning1Es: string;
    sentence2: string;
    meaning2: string;
    meaning2Es: string;
  }[];
}

export const grammarContrastPairs: ContrastPair[] = [
  // === A1-A2 CONTRASTS ===
  {
    id: 'present-simple-vs-continuous',
    tense1: {
      name: 'Present Simple',
      nameEs: 'Presente Simple',
      formula: 'S + V(base/-s)',
      keySignals: ['always', 'usually', 'often', 'sometimes', 'never', 'every day', 'on Mondays']
    },
    tense2: {
      name: 'Present Continuous',
      nameEs: 'Presente Continuo',
      formula: 'S + am/is/are + V-ing',
      keySignals: ['now', 'right now', 'at the moment', 'currently', 'today', 'this week']
    },
    level: 1,
    conceptualDifference: 'Simple = habits/routines/permanent. Continuous = happening now/temporary.',
    conceptualDifferenceEs: 'Simple = hábitos/rutinas/permanente. Continuo = ocurriendo ahora/temporal.',
    timeline: '[---habit---] vs [>>NOW>>]',
    discriminationExercises: [
      { sentence: 'I ___ (work) from home every Friday.', correctTense: 1, explanation: 'Routine → Present Simple', explanationEs: 'Rutina → Presente Simple' },
      { sentence: 'She ___ (talk) on the phone right now.', correctTense: 2, explanation: 'Happening now → Present Continuous', explanationEs: 'Ocurriendo ahora → Presente Continuo' },
      { sentence: 'Water ___ (boil) at 100°C.', correctTense: 1, explanation: 'Scientific fact → Present Simple', explanationEs: 'Hecho científico → Presente Simple' },
      { sentence: 'Look! It ___ (rain) outside.', correctTense: 2, explanation: '"Look!" signals something happening now → Continuous', explanationEs: '"¡Mira!" señala algo ocurriendo ahora → Continuo' },
      { sentence: 'He ___ (usually/get up) at 7 AM.', correctTense: 1, explanation: '"Usually" signals habit → Present Simple', explanationEs: '"Usually" señala hábito → Presente Simple' },
      { sentence: 'We ___ (stay) at a hotel this week.', correctTense: 2, explanation: 'Temporary situation → Present Continuous', explanationEs: 'Situación temporal → Presente Continuo' },
    ],
    productionExercises: [
      { prompt: 'Describe your daily morning routine', promptEs: 'Describe tu rutina matutina', expectedTense: 1, sampleAnswer: 'I wake up at 7. I brush my teeth and have breakfast.', hint: 'Use verbs without -ing' },
      { prompt: 'Describe what your family is doing right now', promptEs: 'Describe qué está haciendo tu familia ahora mismo', expectedTense: 2, sampleAnswer: 'My mom is cooking dinner. My brother is watching TV.', hint: 'Use am/is/are + -ing' },
    ],
    errorHospital: [
      { wrong: 'I am working here every day.', correct: 'I work here every day.', l1Cause: 'In Spanish, "estoy trabajando" can be used for both habits and current actions', l1CauseEs: 'En español, "estoy trabajando" se usa tanto para hábitos como para acciones actuales' },
      { wrong: 'She is knowing the answer.', correct: 'She knows the answer.', l1Cause: 'Spanish uses "-ando/-iendo" with stative verbs (está sabiendo), but English stative verbs (know, believe, love) don\'t take -ing', l1CauseEs: 'El español usa "-ando/-iendo" con verbos de estado, pero en inglés verbos como know, believe, love no llevan -ing' },
    ],
    minimalPairs: [
      { sentence1: 'He works in a bank.', meaning1: 'His permanent job is at a bank', meaning1Es: 'Su trabajo permanente es en un banco', sentence2: 'He is working in a bank.', meaning2: 'Temporarily, right now (maybe a summer job)', meaning2Es: 'Temporalmente, ahora mismo (quizás un trabajo de verano)' },
      { sentence1: 'I think it\'s a good idea.', meaning1: 'My opinion (stative - no -ing)', meaning1Es: 'Mi opinión (estativo - sin -ing)', sentence2: 'I\'m thinking about the problem.', meaning2: 'Active mental process right now', meaning2Es: 'Proceso mental activo ahora mismo' },
    ]
  },
  {
    id: 'past-simple-vs-present-perfect',
    tense1: {
      name: 'Past Simple',
      nameEs: 'Pasado Simple',
      formula: 'S + V-ed / irregular',
      keySignals: ['yesterday', 'last week', 'in 2019', 'ago', 'when I was young']
    },
    tense2: {
      name: 'Present Perfect',
      nameEs: 'Presente Perfecto',
      formula: 'S + have/has + past participle',
      keySignals: ['already', 'yet', 'just', 'ever', 'never', 'since', 'for', 'so far', 'recently']
    },
    level: 2,
    conceptualDifference: 'Past Simple = finished time period. Present Perfect = connected to now / time not specified.',
    conceptualDifferenceEs: 'Pasado Simple = periodo de tiempo terminado. Presente Perfecto = conectado al presente / tiempo no especificado.',
    timeline: '[X---past---] vs [---past--->>NOW]',
    discriminationExercises: [
      { sentence: 'I ___ (visit) Paris in 2018.', correctTense: 1, explanation: 'Specific past time (2018) → Past Simple', explanationEs: 'Tiempo pasado específico (2018) → Pasado Simple' },
      { sentence: 'I ___ (visit) Paris three times.', correctTense: 2, explanation: 'Life experience (no specific time) → Present Perfect', explanationEs: 'Experiencia de vida (sin tiempo específico) → Presente Perfecto' },
      { sentence: 'She ___ (already/finish) her homework.', correctTense: 2, explanation: '"Already" → Present Perfect', explanationEs: '"Already" → Presente Perfecto' },
      { sentence: 'They ___ (move) to London last year.', correctTense: 1, explanation: '"Last year" = specific past time → Past Simple', explanationEs: '"Last year" = tiempo pasado específico → Pasado Simple' },
      { sentence: 'I ___ (not/eat) sushi yet.', correctTense: 2, explanation: '"Yet" → Present Perfect', explanationEs: '"Yet" → Presente Perfecto' },
      { sentence: 'He ___ (lose) his keys yesterday.', correctTense: 1, explanation: '"Yesterday" = specific past → Past Simple', explanationEs: '"Yesterday" = pasado específico → Pasado Simple' },
    ],
    productionExercises: [
      { prompt: 'Tell about your last vacation', promptEs: 'Cuenta sobre tus últimas vacaciones', expectedTense: 1, sampleAnswer: 'I went to the beach. I swam every day. I ate seafood.', hint: 'Use past forms: went, saw, ate, etc.' },
      { prompt: 'List things you have done in your life', promptEs: 'Enumera cosas que has hecho en tu vida', expectedTense: 2, sampleAnswer: 'I have traveled to 5 countries. I have learned two languages.', hint: 'Use have/has + past participle' },
    ],
    errorHospital: [
      { wrong: 'I have visited Paris in 2018.', correct: 'I visited Paris in 2018.', l1Cause: 'In Spanish, "he visitado París en 2018" is acceptable. English requires Past Simple with specific time markers.', l1CauseEs: 'En español, "he visitado París en 2018" es aceptable. El inglés requiere Pasado Simple con marcadores de tiempo específicos.' },
      { wrong: 'Did you ever eat sushi?', correct: 'Have you ever eaten sushi?', l1Cause: 'Spanish "¿Alguna vez comiste...?" uses past. English uses Present Perfect with "ever" for life experience.', l1CauseEs: 'En español "¿Alguna vez comiste...?" usa pasado. El inglés usa Presente Perfecto con "ever" para experiencia de vida.' },
      { wrong: 'I have seen that movie yesterday.', correct: 'I saw that movie yesterday.', l1Cause: '"Yesterday" is a finished time → must use Past Simple', l1CauseEs: '"Yesterday" es un tiempo terminado → debe usar Pasado Simple' },
    ],
    minimalPairs: [
      { sentence1: 'I lost my keys.', meaning1: 'I lost them (maybe I found them later)', meaning1Es: 'Las perdí (quizás ya las encontré)', sentence2: 'I have lost my keys.', meaning2: 'I lost them and I still don\'t have them now', meaning2Es: 'Las perdí y todavía no las tengo ahora' },
      { sentence1: 'She lived in London.', meaning1: 'She lived there but doesn\'t now', meaning1Es: 'Vivió allí pero ya no', sentence2: 'She has lived in London.', meaning2: 'She may still live there now', meaning2Es: 'Posiblemente todavía vive allí' },
    ]
  },
  {
    id: 'past-simple-vs-past-continuous',
    tense1: {
      name: 'Past Simple',
      nameEs: 'Pasado Simple',
      formula: 'S + V-ed / irregular',
      keySignals: ['yesterday', 'last night', 'then', 'suddenly', 'after that']
    },
    tense2: {
      name: 'Past Continuous',
      nameEs: 'Pasado Continuo',
      formula: 'S + was/were + V-ing',
      keySignals: ['while', 'when', 'at 8 PM yesterday', 'at that time', 'all day']
    },
    level: 2,
    conceptualDifference: 'Simple = completed action. Continuous = background action in progress when something else happened.',
    conceptualDifferenceEs: 'Simple = acción completada. Continuo = acción de fondo en progreso cuando algo más ocurrió.',
    timeline: '[background ~~~~] + [X interruption]',
    discriminationExercises: [
      { sentence: 'I ___ (watch) TV when the phone ___ (ring).', correctTense: 2, explanation: 'Background action (was watching) interrupted by short action (rang)', explanationEs: 'Acción de fondo (was watching) interrumpida por acción corta (rang)' },
      { sentence: 'She ___ (arrive) at 9 o\'clock.', correctTense: 1, explanation: 'Completed action at specific time → Past Simple', explanationEs: 'Acción completada en tiempo específico → Pasado Simple' },
      { sentence: 'While we ___ (have) dinner, the lights went out.', correctTense: 2, explanation: '"While" + background action → Past Continuous', explanationEs: '"While" + acción de fondo → Pasado Continuo' },
      { sentence: 'He ___ (break) his leg last summer.', correctTense: 1, explanation: 'Completed event → Past Simple', explanationEs: 'Evento completado → Pasado Simple' },
    ],
    productionExercises: [
      { prompt: 'Describe what you were doing at 8 PM yesterday', promptEs: 'Describe qué estabas haciendo a las 8 PM ayer', expectedTense: 2, sampleAnswer: 'I was watching a movie. My wife was reading a book.', hint: 'Use was/were + -ing' },
      { prompt: 'Tell a story where something interrupted what you were doing', promptEs: 'Cuenta una historia donde algo interrumpió lo que hacías', expectedTense: 2, sampleAnswer: 'I was taking a shower when someone knocked on the door.', hint: 'background action + when + interruption' },
    ],
    errorHospital: [
      { wrong: 'When I walked to work, I saw an accident.', correct: 'While I was walking to work, I saw an accident.', l1Cause: 'Spanish "cuando caminaba" uses imperfect, which maps to English Past Continuous for background actions', l1CauseEs: 'El español "cuando caminaba" usa imperfecto, que se traduce al Pasado Continuo en inglés para acciones de fondo' },
    ],
    minimalPairs: [
      { sentence1: 'When she arrived, I made dinner.', meaning1: 'She arrived first, then I started cooking', meaning1Es: 'Ella llegó primero, luego empecé a cocinar', sentence2: 'When she arrived, I was making dinner.', meaning2: 'I was already cooking when she arrived', meaning2Es: 'Ya estaba cocinando cuando ella llegó' },
    ]
  },
  // === B1-B2 CONTRASTS ===
  {
    id: 'present-perfect-vs-present-perfect-continuous',
    tense1: {
      name: 'Present Perfect',
      nameEs: 'Presente Perfecto',
      formula: 'S + have/has + past participle',
      keySignals: ['already', 'just', 'yet', 'ever', 'never', 'times']
    },
    tense2: {
      name: 'Present Perfect Continuous',
      nameEs: 'Presente Perfecto Continuo',
      formula: 'S + have/has been + V-ing',
      keySignals: ['for', 'since', 'all day', 'all morning', 'how long']
    },
    level: 3,
    conceptualDifference: 'Perfect = result/completion. Perfect Continuous = duration/process (often still ongoing).',
    conceptualDifferenceEs: 'Perfecto = resultado/completado. Perfecto Continuo = duración/proceso (a menudo aún en curso).',
    timeline: '[result ✓] vs [process ~~~>>NOW]',
    discriminationExercises: [
      { sentence: 'I ___ (read) three books this month.', correctTense: 1, explanation: 'Focus on result (3 books completed) → Present Perfect', explanationEs: 'Foco en resultado (3 libros completados) → Presente Perfecto' },
      { sentence: 'I ___ (read) this book for two hours.', correctTense: 2, explanation: 'Focus on duration (ongoing) → Present Perfect Continuous', explanationEs: 'Foco en duración (en curso) → Presente Perfecto Continuo' },
      { sentence: 'She ___ (work) here since 2020.', correctTense: 2, explanation: '"Since" with ongoing action → Perfect Continuous', explanationEs: '"Since" con acción en curso → Perfecto Continuo' },
      { sentence: 'They ___ (finish) the project.', correctTense: 1, explanation: 'Completed result → Present Perfect', explanationEs: 'Resultado completado → Presente Perfecto' },
      { sentence: 'Why are your eyes red? ___ you ___ (cry)?', correctTense: 2, explanation: 'Visible evidence of recent process → Perfect Continuous', explanationEs: 'Evidencia visible de proceso reciente → Perfecto Continuo' },
    ],
    productionExercises: [
      { prompt: 'Tell your achievements this year', promptEs: 'Cuenta tus logros este año', expectedTense: 1, sampleAnswer: 'I have passed three exams. I have saved €500.', hint: 'Focus on completed results' },
      { prompt: 'Explain why you look tired', promptEs: 'Explica por qué pareces cansado/a', expectedTense: 2, sampleAnswer: 'I have been working all day. I have been studying for my exam.', hint: 'Focus on the process that caused your state' },
    ],
    errorHospital: [
      { wrong: 'I have been finishing the report.', correct: 'I have finished the report.', l1Cause: 'Spanish "he terminado" and "he estado terminando" blur the line. Use Perfect for completed results.', l1CauseEs: 'En español "he terminado" y "he estado terminando" se confunden. Usa Perfecto para resultados completados.' },
    ],
    minimalPairs: [
      { sentence1: 'She has painted the room.', meaning1: 'The room is now painted (result)', meaning1Es: 'La habitación ahora está pintada (resultado)', sentence2: 'She has been painting the room.', meaning2: 'She started and may not be finished yet (process)', meaning2Es: 'Empezó y quizás no ha terminado aún (proceso)' },
    ]
  },
  {
    id: 'will-vs-going-to',
    tense1: {
      name: 'Will',
      nameEs: 'Will',
      formula: 'S + will + V(base)',
      keySignals: ['I think...', 'probably', 'spontaneous decision', 'promise', 'prediction (opinion)']
    },
    tense2: {
      name: 'Going to',
      nameEs: 'Going to',
      formula: 'S + am/is/are + going to + V(base)',
      keySignals: ['plan', 'intention', 'evidence-based prediction', 'Look!']
    },
    level: 2,
    conceptualDifference: 'Will = spontaneous decision/promise/opinion prediction. Going to = pre-planned intention/evidence-based prediction.',
    conceptualDifferenceEs: 'Will = decisión espontánea/promesa/predicción por opinión. Going to = intención pre-planificada/predicción basada en evidencia.',
    timeline: '[NOW → spontaneous] vs [PLAN >>> future]',
    discriminationExercises: [
      { sentence: 'Look at those clouds! It ___ (rain).', correctTense: 2, explanation: 'Evidence-based prediction → going to', explanationEs: 'Predicción basada en evidencia → going to' },
      { sentence: 'A: "The phone is ringing!" B: "I ___ (get) it."', correctTense: 1, explanation: 'Spontaneous decision → will', explanationEs: 'Decisión espontánea → will' },
      { sentence: 'We ___ (travel) to Japan next summer. We already bought tickets.', correctTense: 2, explanation: 'Pre-planned intention → going to', explanationEs: 'Intención pre-planificada → going to' },
      { sentence: 'I ___ (help) you with your homework, I promise.', correctTense: 1, explanation: 'Promise → will', explanationEs: 'Promesa → will' },
      { sentence: 'I think the economy ___ (improve) next year.', correctTense: 1, explanation: 'Opinion/belief about future → will', explanationEs: 'Opinión/creencia sobre el futuro → will' },
    ],
    productionExercises: [
      { prompt: 'Someone drops their papers. Offer to help on the spot.', promptEs: 'Alguien se le caen sus papeles. Ofrece ayuda en el momento.', expectedTense: 1, sampleAnswer: 'I\'ll help you pick those up!', hint: 'Spontaneous offer = will' },
      { prompt: 'Tell about your plans for next weekend', promptEs: 'Cuenta tus planes para el próximo fin de semana', expectedTense: 2, sampleAnswer: 'I\'m going to visit my parents. I\'m going to cook a big dinner.', hint: 'Pre-made plans = going to' },
    ],
    errorHospital: [
      { wrong: 'I will go to the dentist tomorrow. (already planned)', correct: 'I\'m going to go to the dentist tomorrow.', l1Cause: 'Spanish uses "voy a ir" (going to) and "iré" (will) somewhat interchangeably. English differentiates planned vs spontaneous.', l1CauseEs: 'El español usa "voy a ir" y "iré" de forma intercambiable. El inglés diferencia planificado vs espontáneo.' },
    ],
    minimalPairs: [
      { sentence1: 'I\'ll have the fish, please.', meaning1: 'Spontaneous decision (at a restaurant)', meaning1Es: 'Decisión espontánea (en un restaurante)', sentence2: 'I\'m going to have the fish.', meaning2: 'I already decided before arriving', meaning2Es: 'Ya decidí antes de llegar' },
    ]
  },
  {
    id: 'first-vs-second-conditional',
    tense1: {
      name: 'First Conditional',
      nameEs: 'Primer Condicional',
      formula: 'If + present simple, will + V(base)',
      keySignals: ['real possibility', 'likely future', 'if...will']
    },
    tense2: {
      name: 'Second Conditional',
      nameEs: 'Segundo Condicional',
      formula: 'If + past simple, would + V(base)',
      keySignals: ['hypothetical', 'unlikely', 'imaginary', 'if...would']
    },
    level: 3,
    conceptualDifference: 'First = real/possible future situation. Second = unreal/hypothetical present or unlikely future.',
    conceptualDifferenceEs: 'Primero = situación futura real/posible. Segundo = presente irreal/hipotético o futuro improbable.',
    timeline: '[possible future] vs [imaginary world]',
    discriminationExercises: [
      { sentence: 'If it ___ (rain) tomorrow, I ___ (take) an umbrella.', correctTense: 1, explanation: 'Possible real situation → First Conditional', explanationEs: 'Situación real posible → Primer Condicional' },
      { sentence: 'If I ___ (be) the president, I ___ (change) the education system.', correctTense: 2, explanation: 'Hypothetical (I\'m not the president) → Second Conditional', explanationEs: 'Hipotético (no soy el presidente) → Segundo Condicional' },
      { sentence: 'If you ___ (study) hard, you ___ (pass) the exam.', correctTense: 1, explanation: 'Real advice/possibility → First Conditional', explanationEs: 'Consejo/posibilidad real → Primer Condicional' },
      { sentence: 'If I ___ (win) the lottery, I ___ (buy) a house by the sea.', correctTense: 2, explanation: 'Very unlikely (hypothetical) → Second Conditional', explanationEs: 'Muy improbable (hipotético) → Segundo Condicional' },
    ],
    productionExercises: [
      { prompt: 'Give real advice to a friend about an exam next week', promptEs: 'Da consejo real a un amigo sobre un examen la próxima semana', expectedTense: 1, sampleAnswer: 'If you study every day, you will pass easily.', hint: 'if + present → will + base' },
      { prompt: 'Describe what you would do if you were a millionaire', promptEs: 'Describe qué harías si fueras millonario/a', expectedTense: 2, sampleAnswer: 'If I were a millionaire, I would travel the world.', hint: 'if + past → would + base' },
    ],
    errorHospital: [
      { wrong: 'If I would have more time, I would study more.', correct: 'If I had more time, I would study more.', l1Cause: 'Spanish "si tendría" (conditional in if-clause) is colloquial but wrong in English. Never use "would" in the if-clause.', l1CauseEs: 'El español "si tendría" es coloquial. En inglés NUNCA se usa "would" en la cláusula con "if".' },
      { wrong: 'If I was the president...', correct: 'If I were the president...', l1Cause: 'English uses subjunctive "were" for hypothetical (for all persons). Spanish also has subjunctive "fuera/fuese".', l1CauseEs: 'El inglés usa subjuntivo "were" para hipotéticos (para todas las personas). Similar al "fuera/fuese" del español.' },
    ],
    minimalPairs: [
      { sentence1: 'If I have time, I will help you.', meaning1: 'I might have time (real possibility)', meaning1Es: 'Puede que tenga tiempo (posibilidad real)', sentence2: 'If I had time, I would help you.', meaning2: 'I don\'t have time (hypothetical/unlikely)', meaning2Es: 'No tengo tiempo (hipotético/improbable)' },
    ]
  },
  // === B2-C1 CONTRASTS ===
  {
    id: 'past-perfect-vs-past-simple',
    tense1: {
      name: 'Past Simple',
      nameEs: 'Pasado Simple',
      formula: 'S + V-ed / irregular',
      keySignals: ['then', 'after that', 'next']
    },
    tense2: {
      name: 'Past Perfect',
      nameEs: 'Pasado Perfecto (Pluscuamperfecto)',
      formula: 'S + had + past participle',
      keySignals: ['before', 'after', 'by the time', 'already', 'just', 'never...before']
    },
    level: 3,
    conceptualDifference: 'Past Simple = event in sequence. Past Perfect = earlier event looking back from a past reference point.',
    conceptualDifferenceEs: 'Pasado Simple = evento en secuencia. Pasado Perfecto = evento anterior visto desde un punto de referencia pasado.',
    timeline: '[had done X] <<< [past reference point]',
    discriminationExercises: [
      { sentence: 'When I ___ (arrive), the movie ___ (already/start).', correctTense: 2, explanation: 'The movie started BEFORE arriving → Past Perfect for earlier event', explanationEs: 'La película empezó ANTES de llegar → Pasado Perfecto para evento anterior' },
      { sentence: 'I ___ (go) to the supermarket and ___ (buy) some food.', correctTense: 1, explanation: 'Sequential actions → Past Simple for both', explanationEs: 'Acciones secuenciales → Pasado Simple para ambas' },
      { sentence: 'She was angry because he ___ (forget) their anniversary.', correctTense: 2, explanation: 'Forgetting happened before being angry → Past Perfect', explanationEs: 'Olvidar ocurrió antes de estar enojada → Pasado Perfecto' },
      { sentence: 'By the time I got home, my family ___ (eat) dinner.', correctTense: 2, explanation: '"By the time" + earlier completed action → Past Perfect', explanationEs: '"By the time" + acción anterior completada → Pasado Perfecto' },
    ],
    productionExercises: [
      { prompt: 'Tell a story where you arrived late and something had already happened', promptEs: 'Cuenta una historia donde llegaste tarde y algo ya había ocurrido', expectedTense: 2, sampleAnswer: 'When I arrived at the party, most guests had already left.', hint: 'Use "had + past participle" for the earlier action' },
    ],
    errorHospital: [
      { wrong: 'When I arrived, the movie already started.', correct: 'When I arrived, the movie had already started.', l1Cause: 'Spanish "ya empezó" uses simple past. English requires Past Perfect for the earlier of two past events.', l1CauseEs: 'El español "ya empezó" usa pasado simple. El inglés requiere Pasado Perfecto para el más antiguo de dos eventos pasados.' },
    ],
    minimalPairs: [
      { sentence1: 'When I arrived, she left.', meaning1: 'She left after I arrived (sequence)', meaning1Es: 'Ella se fue después de que llegué (secuencia)', sentence2: 'When I arrived, she had left.', meaning2: 'She was already gone before I arrived', meaning2Es: 'Ella ya se había ido antes de que yo llegara' },
    ]
  },
  {
    id: 'used-to-vs-would-vs-past-simple',
    tense1: {
      name: 'Used to',
      nameEs: 'Used to (solía)',
      formula: 'S + used to + V(base)',
      keySignals: ['in the past', 'when I was young', 'past habit that is no longer true']
    },
    tense2: {
      name: 'Would (past habit)',
      nameEs: 'Would (hábito pasado)',
      formula: 'S + would + V(base)',
      keySignals: ['repeated past action', 'every summer', 'on Sundays (in the past)']
    },
    level: 3,
    conceptualDifference: '"Used to" = past habits AND states no longer true. "Would" = only repeated past ACTIONS (not states). Both contrast with past simple for one-time events.',
    conceptualDifferenceEs: '"Used to" = hábitos Y estados pasados que ya no son verdad. "Would" = solo ACCIONES repetidas pasadas (no estados). Ambos contrastan con pasado simple para eventos únicos.',
    timeline: '[used to = habits+states] vs [would = actions only]',
    discriminationExercises: [
      { sentence: 'I ___ (used to / live) in Madrid when I was a child.', correctTense: 1, explanation: 'Past state (living somewhere) → "used to" (NOT "would")', explanationEs: 'Estado pasado (vivir en un lugar) → "used to" (NO "would")' },
      { sentence: 'Every summer, we ___ (would / go) to the beach.', correctTense: 2, explanation: 'Repeated past action → "would" is natural here', explanationEs: 'Acción repetida pasada → "would" es natural aquí' },
      { sentence: 'She ___ (used to / have) long hair.', correctTense: 1, explanation: 'Past state (appearance) → "used to" only', explanationEs: 'Estado pasado (apariencia) → solo "used to"' },
      { sentence: 'My grandfather ___ (would / tell) us stories every night.', correctTense: 2, explanation: 'Repeated past action → "would" is perfect', explanationEs: 'Acción repetida pasada → "would" es perfecto' },
    ],
    productionExercises: [
      { prompt: 'Describe how your life was different 10 years ago', promptEs: 'Describe cómo era diferente tu vida hace 10 años', expectedTense: 1, sampleAnswer: 'I used to live with my parents. I used to be a student.', hint: 'Use "used to" for states that changed' },
    ],
    errorHospital: [
      { wrong: 'I would have a dog when I was young.', correct: 'I used to have a dog when I was young.', l1Cause: '"Have" is a state verb. "Would" can only replace "used to" for repeated actions, not states.', l1CauseEs: '"Have" es un verbo de estado. "Would" solo puede reemplazar "used to" para acciones repetidas, no estados.' },
    ],
    minimalPairs: [
      { sentence1: 'I used to play tennis.', meaning1: 'I played tennis regularly in the past, but not anymore', meaning1Es: 'Jugaba tenis regularmente antes, pero ya no', sentence2: 'I played tennis.', meaning2: 'One-time event (e.g., yesterday)', meaning2Es: 'Evento único (ej. ayer)' },
    ]
  },
  // === B2 CONTRASTS (Level 4) ===
  {
    id: 'b2-wish-past-vs-pastperfect',
    tense1: {
      name: 'Wish + Past Simple',
      nameEs: 'Wish + Pasado Simple',
      formula: 'I wish + subject + past simple',
      keySignals: ['now', 'at the moment', 'currently']
    },
    tense2: {
      name: 'Wish + Past Perfect',
      nameEs: 'Wish + Pasado Perfecto',
      formula: 'I wish + subject + had + past participle',
      keySignals: ['yesterday', 'last year', 'when I was young']
    },
    level: 4,
    conceptualDifference: 'Past Simple after wish = presente irreal. Past Perfect after wish = pasado irreal.',
    conceptualDifferenceEs: 'Pasado Simple tras wish = presente irreal. Pasado Perfecto tras wish = pasado irreal.',
    timeline: '[wish + past = NOW unreal] vs [wish + had done = PAST regret]',
    discriminationExercises: [
      { sentence: 'I wish I ___ (speak) French. (I don\'t speak it now)', correctTense: 1, explanation: 'Deseo sobre el presente → Wish + Past Simple', explanationEs: 'Deseo sobre el presente → Wish + Past Simple' },
      { sentence: 'I wish I ___ (study) harder when I was at university.', correctTense: 2, explanation: 'Arrepentimiento sobre el pasado → Wish + Past Perfect', explanationEs: 'Arrepentimiento sobre el pasado → Wish + Past Perfect' },
      { sentence: 'She wishes she ___ (have) more free time right now.', correctTense: 1, explanation: '"Right now" = presente → Wish + Past Simple', explanationEs: '"Right now" = presente → Wish + Past Simple' },
    ],
    productionExercises: [
      { prompt: 'Express a regret about something you did or didn\'t do in the past', promptEs: 'Expresa un arrepentimiento sobre algo que hiciste o no hiciste en el pasado', expectedTense: 2, sampleAnswer: 'I wish I had learned to play the piano when I was young.', hint: 'Use wish + had + past participle for past regrets' },
      { prompt: 'Express something you want to be different in your life right now', promptEs: 'Expresa algo que quieres que sea diferente en tu vida ahora mismo', expectedTense: 1, sampleAnswer: 'I wish I lived closer to the beach.', hint: 'Use wish + past simple for present unreal' },
    ],
    errorHospital: [
      { wrong: 'I wish I have studied more.', correct: 'I wish I had studied more.', l1Cause: 'Spanish "ojalá hubiera estudiado" uses subjunctive. English uses Past Perfect after wish for past regrets.', l1CauseEs: 'El español usa subjuntivo. El inglés usa Past Perfect tras wish para arrepentimientos pasados.' },
    ],
    minimalPairs: [
      { sentence1: 'I wish I had more money.', meaning1: 'Present unreal — I want more money NOW', meaning1Es: 'Presente irreal — quiero más dinero AHORA', sentence2: 'I wish I had had more money.', meaning2: 'Past regret — I didn\'t have enough money back then', meaning2Es: 'Arrepentimiento pasado — no tenía suficiente dinero entonces' },
      { sentence1: 'I wish she lived here.', meaning1: 'Present — I want her to live here now', meaning1Es: 'Presente — quiero que viva aquí ahora', sentence2: 'I wish she had lived here.', meaning2: 'Past — she didn\'t live here and I regret it', meaning2Es: 'Pasado — no vivió aquí y lo lamento' },
      { sentence1: 'He wishes he knew the answer.', meaning1: 'Present — he doesn\'t know it now', meaning1Es: 'Presente — no lo sabe ahora', sentence2: 'He wishes he had known the answer.', meaning2: 'Past — he didn\'t know it when it mattered', meaning2Es: 'Pasado — no lo sabía cuando importaba' },
    ]
  },
  {
    id: 'b2-conditional-types',
    tense1: {
      name: 'Zero & First Conditional',
      nameEs: 'Condicional Cero y Primero',
      formula: 'If + present, present/will + base',
      keySignals: ['real possibility', 'facts', 'likely future']
    },
    tense2: {
      name: 'Second & Third Conditional',
      nameEs: 'Condicional Segundo y Tercero',
      formula: 'If + past, would + base / If + past perfect, would have + pp',
      keySignals: ['hypothetical', 'unreal', 'impossible', 'regret']
    },
    level: 4,
    conceptualDifference: 'Zero & First = real situations: universal facts (zero) or future possibilities (first). Second & Third = unreal: hypothetical present (second) or impossible past (third).',
    conceptualDifferenceEs: 'Cero y Primero = situaciones reales: hechos universales (cero) o posibilidades futuras (primero). Segundo y Tercero = irreales: hipótesis presente (segundo) o pasado imposible (tercero).',
    timeline: '[REAL: if present → will/present] vs [UNREAL: if past → would / if had done → would have]',
    discriminationExercises: [
      { sentence: 'If you ___ (heat) water to 100°C, it ___ (boil).', correctTense: 1, explanation: 'Universal fact → Zero Conditional', explanationEs: 'Hecho universal → Condicional Cero' },
      { sentence: 'If I ___ (be) you, I ___ (apologize) to her.', correctTense: 2, explanation: 'Hypothetical present (I\'m not you) → Second Conditional', explanationEs: 'Hipótesis presente (no soy tú) → Segundo Condicional' },
      { sentence: 'If I ___ (know) about the party, I ___ (come).', correctTense: 2, explanation: 'Past impossible (I didn\'t know) → Third Conditional', explanationEs: 'Pasado imposible (no lo sabía) → Tercer Condicional' },
    ],
    productionExercises: [
      { prompt: 'Give advice using a hypothetical situation', promptEs: 'Da un consejo usando una situación hipotética', expectedTense: 2, sampleAnswer: 'If I were you, I would talk to your boss about it.', hint: 'Second conditional for hypothetical advice' },
      { prompt: 'Express regret about a past decision', promptEs: 'Expresa arrepentimiento sobre una decisión pasada', expectedTense: 2, sampleAnswer: 'If I had known, I would have stayed longer.', hint: 'Third conditional for past regrets' },
    ],
    errorHospital: [
      { wrong: 'If I would have known, I would have come.', correct: 'If I had known, I would have come.', l1Cause: 'Never use "would" in the if-clause. Third conditional: If + had + pp, would have + pp.', l1CauseEs: 'Nunca uses "would" en la cláusula con if. Tercer condicional: If + had + pp, would have + pp.' },
    ],
    minimalPairs: [
      { sentence1: 'If it rains, I will stay home.', meaning1: 'Real possibility — might rain', meaning1Es: 'Posibilidad real — puede que llueva', sentence2: 'If it rained, I would stay home.', meaning2: 'Hypothetical — unlikely to rain', meaning2Es: 'Hipotético — improbable que llueva' },
      { sentence1: 'If you study, you will pass.', meaning1: 'Real advice — you can still study', meaning1Es: 'Consejo real — aún puedes estudiar', sentence2: 'If you had studied, you would have passed.', meaning2: 'Past regret — too late now', meaning2Es: 'Arrepentimiento pasado — ya es tarde' },
      { sentence1: 'If he calls, tell him I\'m out.', meaning1: 'Real future — he might call', meaning1Es: 'Futuro real — puede que llame', sentence2: 'If he called, I would tell him.', meaning2: 'Hypothetical — he probably won\'t call', meaning2Es: 'Hipotético — probablemente no llamará' },
    ]
  },
  {
    id: 'b2-gerund-infinitive-meaning',
    tense1: {
      name: 'Verb + Gerund',
      nameEs: 'Verbo + Gerundio',
      formula: 'V + -ing',
      keySignals: ['stop doing', 'remember doing', 'try doing', 'forget doing']
    },
    tense2: {
      name: 'Verb + Infinitive',
      nameEs: 'Verbo + Infinitivo',
      formula: 'V + to + base',
      keySignals: ['stop to do', 'remember to do', 'try to do', 'forget to do']
    },
    level: 4,
    conceptualDifference: 'Gerund: stop doing = dejar de hacer, remember doing = recordar haber hecho, try doing = probar. Infinitive: stop to do = parar para hacer, remember to do = acordarse de hacer, try to do = intentar.',
    conceptualDifferenceEs: 'Gerundio: stop doing = dejar de hacer, remember doing = recordar haber hecho, try doing = probar. Infinitivo: stop to do = parar para hacer, remember to do = acordarse de hacer, try to do = intentar.',
    timeline: '[V-ing = the action itself] vs [V + to = purpose/intention]',
    discriminationExercises: [
      { sentence: 'I stopped ___ (smoke) five years ago.', correctTense: 1, explanation: 'Stop doing = dejar de hacer (quit the habit)', explanationEs: 'Stop doing = dejar de fumar (dejar el hábito)' },
      { sentence: 'We stopped ___ (rest) for a few minutes.', correctTense: 2, explanation: 'Stop to do = parar para hacer algo', explanationEs: 'Stop to do = parar para descansar' },
      { sentence: 'I remember ___ (lock) the door. I\'m sure I did it.', correctTense: 1, explanation: 'Remember doing = recordar haber hecho (past action)', explanationEs: 'Remember doing = recordar haber cerrado (acción pasada)' },
    ],
    productionExercises: [
      { prompt: 'Say you need to remind yourself to do something', promptEs: 'Di que necesitas recordarte hacer algo', expectedTense: 2, sampleAnswer: 'I must remember to buy milk.', hint: 'remember to do = acordarse de hacer' },
      { prompt: 'Describe a childhood memory you have', promptEs: 'Describe un recuerdo de infancia que tienes', expectedTense: 1, sampleAnswer: 'I remember visiting my grandparents every summer.', hint: 'remember doing = recordar haber hecho' },
    ],
    errorHospital: [
      { wrong: 'I stopped to smoke.', correct: 'I stopped smoking.', l1Cause: '"Stop to smoke" = parar para fumar. "Stop smoking" = dejar de fumar. Spanish "dejar de" maps to verb + gerund.', l1CauseEs: '"Stop to smoke" = parar para fumar. "Stop smoking" = dejar de fumar.' },
    ],
    minimalPairs: [
      { sentence1: 'He stopped smoking.', meaning1: 'He quit the habit — no longer smokes', meaning1Es: 'Dejó el hábito — ya no fuma', sentence2: 'He stopped to smoke.', meaning2: 'He paused his activity in order to smoke', meaning2Es: 'Se detuvo para fumar' },
      { sentence1: 'I remember meeting her.', meaning1: 'I have a memory of meeting her (past)', meaning1Es: 'Tengo un recuerdo de haberla conocido (pasado)', sentence2: 'I remember to meet her.', meaning2: 'I don\'t forget to meet her (obligation)', meaning2Es: 'No olvido quedar con ella (obligación)' },
      { sentence1: 'Try using a different key.', meaning1: 'Experiment — use a different key as a solution', meaning1Es: 'Probar — usa otra llave como solución', sentence2: 'Try to use a different key.', meaning2: 'Attempt — make an effort to use it', meaning2Es: 'Intentar — haz un esfuerzo por usarla' },
    ]
  },
  {
    id: 'b2-passive-active-formal',
    tense1: {
      name: 'Active Voice',
      nameEs: 'Voz Activa',
      formula: 'Subject + verb + object',
      keySignals: ['informal', 'direct', 'spoken']
    },
    tense2: {
      name: 'Passive Voice',
      nameEs: 'Voz Pasiva',
      formula: 'Object + be + past participle (+ by agent)',
      keySignals: ['formal', 'academic', 'written', 'doer unknown']
    },
    level: 4,
    conceptualDifference: 'Active = emphasis on the DOER — informal, direct, spoken. Passive = emphasis on the ACTION/RESULT — formal, written, academic, when doer is unknown or unimportant.',
    conceptualDifferenceEs: 'Activa = énfasis en QUIÉN hace — informal, directo, hablado. Pasiva = énfasis en la ACCIÓN/RESULTADO — formal, escrito, académico, cuando el agente es desconocido o irrelevante.',
    timeline: '[WHO does it] vs [WHAT happens / to whom]',
    discriminationExercises: [
      { sentence: 'In academic writing, results ___ (often/present) in tables.', correctTense: 2, explanation: 'Formal/academic context, focus on results → Passive', explanationEs: 'Contexto formal/académico, foco en resultados → Pasiva' },
      { sentence: 'Hey, who ___ (break) the window?', correctTense: 1, explanation: 'Informal, direct question about who did it → Active', explanationEs: 'Informal, pregunta directa sobre quién lo hizo → Activa' },
      { sentence: 'The new policy ___ (implement) last month.', correctTense: 2, explanation: 'Formal context, doer unimportant → Passive', explanationEs: 'Contexto formal, agente irrelevante → Pasiva' },
    ],
    productionExercises: [
      { prompt: 'Rewrite this formally for a report: "Someone stole the equipment."', promptEs: 'Reescribe esto formalmente para un informe', expectedTense: 2, sampleAnswer: 'The equipment was stolen.', hint: 'Passive emphasizes the action, not who did it' },
      { prompt: 'Say informally what happened to your phone', promptEs: 'Di informalmente qué le pasó a tu móvil', expectedTense: 1, sampleAnswer: 'Someone broke my phone.', hint: 'Active is more direct for informal speech' },
    ],
    errorHospital: [
      { wrong: 'The report was wrote by the team.', correct: 'The report was written by the team.', l1Cause: 'Passive always uses past participle (written), not past simple (wrote).', l1CauseEs: 'La pasiva siempre usa participio pasado (written), no pasado simple (wrote).' },
    ],
    minimalPairs: [
      { sentence1: 'The police arrested the suspect.', meaning1: 'Active — focus on who did the action', meaning1Es: 'Activa — foco en quién hizo la acción', sentence2: 'The suspect was arrested.', meaning2: 'Passive — focus on what happened to the suspect', meaning2Es: 'Pasiva — foco en qué le pasó al sospechoso' },
      { sentence1: 'Someone has cleaned the room.', meaning1: 'Active — we know/care who did it', meaning1Es: 'Activa — sabemos/nos importa quién lo hizo', sentence2: 'The room has been cleaned.', meaning2: 'Passive — result matters, doer unknown/unimportant', meaning2Es: 'Pasiva — importa el resultado, agente desconocido/irrelevante' },
      { sentence1: 'They built this house in 1920.', meaning1: 'Active — emphasis on the builders', meaning1Es: 'Activa — énfasis en los constructores', sentence2: 'This house was built in 1920.', meaning2: 'Passive — emphasis on the house and when', meaning2Es: 'Pasiva — énfasis en la casa y cuándo' },
    ]
  },
  // === C1 CONTRASTS (Level 5) ===
  {
    id: 'c1-inversion-vs-standard',
    tense1: {
      name: 'Standard Word Order',
      nameEs: 'Orden Estándar',
      formula: 'Subject + Verb + Object',
      keySignals: ['neutral', 'everyday', 'unmarked']
    },
    tense2: {
      name: 'Inverted Word Order',
      nameEs: 'Orden Invertido',
      formula: 'Negative adverb + auxiliary + subject + verb',
      keySignals: ['never', 'seldom', 'rarely', 'hardly', 'only', 'not only', 'no sooner']
    },
    level: 5,
    conceptualDifference: 'Standard = neutral, everyday, unmarked. Inversion = emphasis, dramatic effect, formal writing, literary style.',
    conceptualDifferenceEs: 'Estándar = neutro, cotidiano, no marcado. Inversión = énfasis, efecto dramático, escritura formal, estilo literario.',
    timeline: '[SVO = default] vs [Adv + aux + S + V = emphasis]',
    discriminationExercises: [
      { sentence: '___ (Never / I see) such a beautiful sunset.', correctTense: 2, explanation: 'Inversion for emphasis after "never" → Never have I seen', explanationEs: 'Inversión para énfasis tras "never" → Never have I seen' },
      { sentence: 'I ___ (never/see) such a beautiful sunset before.', correctTense: 1, explanation: 'Standard order for neutral statement', explanationEs: 'Orden estándar para afirmación neutra' },
      { sentence: '___ (Only when / he arrive) did we start the meeting.', correctTense: 2, explanation: '"Only when" at start triggers inversion', explanationEs: '"Only when" al inicio provoca inversión' },
    ],
    productionExercises: [
      { prompt: 'Write a dramatic opening line using inversion', promptEs: 'Escribe una frase de apertura dramática usando inversión', expectedTense: 2, sampleAnswer: 'Never had I felt so alive.', hint: 'Negative adverb + auxiliary + subject + verb' },
      { prompt: 'Say the same thing in neutral, everyday language', promptEs: 'Di lo mismo en lenguaje neutro y cotidiano', expectedTense: 1, sampleAnswer: 'I had never felt so alive.', hint: 'Standard SVO order' },
    ],
    errorHospital: [
      { wrong: 'Never I have seen such a thing.', correct: 'Never have I seen such a thing.', l1Cause: 'Inversion requires auxiliary + subject after the negative adverb. Spanish "Nunca he visto" keeps standard order.', l1CauseEs: 'La inversión requiere auxiliar + sujeto tras el adverbio negativo.' },
    ],
    minimalPairs: [
      { sentence1: 'I had never been so scared.', meaning1: 'Standard — neutral statement', meaning1Es: 'Estándar — afirmación neutra', sentence2: 'Never had I been so scared.', meaning2: 'Inverted — dramatic emphasis', meaning2Es: 'Invertido — énfasis dramático' },
      { sentence1: 'She rarely makes mistakes.', meaning1: 'Standard word order', meaning1Es: 'Orden estándar', sentence2: 'Rarely does she make mistakes.', meaning2: 'Inversion — more formal/emphatic', meaning2Es: 'Inversión — más formal/enfático' },
      { sentence1: 'We only realized the problem then.', meaning1: 'Standard — "only" in mid position', meaning1Es: 'Estándar — "only" en posición media', sentence2: 'Only then did we realize the problem.', meaning2: 'Inversion — "only" at start triggers it', meaning2Es: 'Inversión — "only" al inicio lo provoca' },
    ]
  },
  {
    id: 'c1-nominal-vs-verbal',
    tense1: {
      name: 'Verbal Style',
      nameEs: 'Estilo Verbal',
      formula: 'Subject + verb + object',
      keySignals: ['direct', 'conversational', 'clear']
    },
    tense2: {
      name: 'Nominal Style',
      nameEs: 'Estilo Nominal',
      formula: 'Nominalized subject + BE + complement',
      keySignals: ['academic', 'formal', 'impersonal', 'reports']
    },
    level: 5,
    conceptualDifference: 'Verbal = direct, conversational, clear for general audiences. Nominal = academic, formal reports, impersonal tone, hides the agent.',
    conceptualDifferenceEs: 'Verbal = directo, conversacional, claro para el público general. Nominal = académico, informes formales, tono impersonal, oculta el agente.',
    timeline: '[S + V + O = dynamic] vs [N + BE + C = static/formal]',
    discriminationExercises: [
      { sentence: 'The government ___ (implement) new policies last year.', correctTense: 1, explanation: 'Verbal style — direct, clear', explanationEs: 'Estilo verbal — directo, claro' },
      { sentence: 'The ___ (implement) of new policies took place last year.', correctTense: 2, explanation: 'Nominal style — implementation (noun) + took place', explanationEs: 'Estilo nominal — implementation (sustantivo) + took place' },
      { sentence: 'For your essay, prefer: "The ___ (analyze) of data reveals..." over "We analyzed data and found..."', correctTense: 2, explanation: 'Academic writing favors nominalization', explanationEs: 'La escritura académica favorece la nominalización' },
    ],
    productionExercises: [
      { prompt: 'Rewrite for academic style: "We investigated the causes."', promptEs: 'Reescribe para estilo académico', expectedTense: 2, sampleAnswer: 'An investigation of the causes was conducted.', hint: 'Nominalize the verb (investigate → investigation)' },
      { prompt: 'Explain the same idea to a friend informally', promptEs: 'Explica la misma idea a un amigo informalmente', expectedTense: 1, sampleAnswer: 'We looked into what caused it.', hint: 'Verbal style is more direct' },
    ],
    errorHospital: [
      { wrong: 'The analysis of the data were conducted.', correct: 'The analysis of the data was conducted.', l1Cause: 'Nominal subject "analysis" is singular — verb must agree. Spanish "datos" is plural but "análisis" is singular.', l1CauseEs: 'El sujeto nominal "analysis" es singular — el verbo debe concordar.' },
    ],
    minimalPairs: [
      { sentence1: 'The company decided to expand.', meaning1: 'Verbal — direct, who decided is clear', meaning1Es: 'Verbal — directo, quién decidió está claro', sentence2: 'A decision was made to expand.', meaning2: 'Nominal — impersonal, agent hidden', meaning2Es: 'Nominal — impersonal, agente oculto' },
      { sentence1: 'Researchers discovered a new species.', meaning1: 'Verbal — active, clear agent', meaning1Es: 'Verbal — activo, agente claro', sentence2: 'The discovery of a new species was announced.', meaning2: 'Nominal — focus on the discovery, not who found it', meaning2Es: 'Nominal — foco en el descubrimiento, no quién lo encontró' },
      { sentence1: 'We evaluated the results.', meaning1: 'Verbal — we did it', meaning1Es: 'Verbal — nosotros lo hicimos', sentence2: 'An evaluation of the results was carried out.', meaning2: 'Nominal — formal, impersonal', meaning2Es: 'Nominal — formal, impersonal' },
    ]
  },
  {
    id: 'c1-hedging-vs-boosting',
    tense1: {
      name: 'Hedging',
      nameEs: 'Matización',
      formula: 'seems, appears, might, could, tends to, is likely to',
      keySignals: ['perhaps', 'possibly', 'may', 'might', 'seems', 'appears', 'tends to']
    },
    tense2: {
      name: 'Boosting',
      nameEs: 'Refuerzo',
      formula: 'clearly, undoubtedly, obviously, certainly, proves that',
      keySignals: ['clearly', 'obviously', 'certainly', 'undoubtedly', 'proves', 'definitely']
    },
    level: 5,
    conceptualDifference: 'Hedging = softens claims: seems, appears, might, could, tends to, is likely to. Boosting = strengthens claims: clearly, undoubtedly, obviously, certainly, proves that.',
    conceptualDifferenceEs: 'Matización = suaviza afirmaciones. Refuerzo = fortalece afirmaciones: clearly, undoubtedly, obviously, certainly.',
    timeline: '[cautious/qualified] vs [confident/assertive]',
    discriminationExercises: [
      { sentence: 'The results ___ (suggest) that further research is needed.', correctTense: 1, explanation: 'Hedging — "suggest" softens the claim', explanationEs: 'Matización — "suggest" suaviza la afirmación' },
      { sentence: 'The evidence ___ (prove) beyond doubt that the theory is correct.', correctTense: 2, explanation: 'Boosting — "proves" strengthens the claim', explanationEs: 'Refuerzo — "proves" fortalece la afirmación' },
      { sentence: 'In academic writing, it is better to say "The data ___ (appear to indicate)" rather than "The data show" when you want to be cautious.', correctTense: 1, explanation: 'Hedging is preferred when evidence is not 100%', explanationEs: 'La matización se prefiere cuando la evidencia no es al 100%' },
    ],
    productionExercises: [
      { prompt: 'Rewrite with hedging: "This proves that climate change is real."', promptEs: 'Reescribe con matización', expectedTense: 1, sampleAnswer: 'This appears to suggest that climate change may be real.', hint: 'Use seems, appears, might, could, tends to' },
      { prompt: 'Rewrite with boosting: "It might be important."', promptEs: 'Reescribe con refuerzo', expectedTense: 2, sampleAnswer: 'It is clearly important.', hint: 'Use clearly, obviously, certainly, undoubtedly' },
    ],
    errorHospital: [
      { wrong: 'The study obviously proves that X. (when evidence is weak)', correct: 'The study appears to suggest that X.', l1Cause: 'Over-boosting weak claims sounds unscientific. Use hedging when evidence is not conclusive.', l1CauseEs: 'Reforzar afirmaciones débiles suena poco científico. Usa matización cuando la evidencia no es concluyente.' },
    ],
    minimalPairs: [
      { sentence1: 'The findings suggest a link.', meaning1: 'Hedging — cautious, qualified', meaning1Es: 'Matización — cauteloso, cualificado', sentence2: 'The findings prove a link.', meaning2: 'Boosting — strong, definitive', meaning2Es: 'Refuerzo — fuerte, definitivo' },
      { sentence1: 'He might be right.', meaning1: 'Hedging — uncertain', meaning1Es: 'Matización — incierto', sentence2: 'He is certainly right.', meaning2: 'Boosting — confident', meaning2Es: 'Refuerzo — confiado' },
      { sentence1: 'The data tend to support this view.', meaning1: 'Hedging — not absolute', meaning1Es: 'Matización — no absoluto', sentence2: 'The data clearly support this view.', meaning2: 'Boosting — emphatic', meaning2Es: 'Refuerzo — enfático' },
    ]
  },
  // === C2 CONTRASTS (Level 6) ===
  {
    id: 'c2-formal-informal-register',
    tense1: {
      name: 'Formal Register',
      nameEs: 'Registro Formal',
      formula: 'Latinate vocabulary, passive, complex sentences',
      keySignals: ['commence', 'utilize', 'approximately', 'furthermore', 'nevertheless']
    },
    tense2: {
      name: 'Informal Register',
      nameEs: 'Registro Informal',
      formula: 'Germanic vocabulary, active, short sentences, contractions',
      keySignals: ['start', 'use', 'about', 'also', 'but', 'gonna', 'wanna']
    },
    level: 6,
    conceptualDifference: 'Formal = Latinate vocabulary, passive voice, complex sentences, impersonal tone. Informal = Germanic vocabulary, active voice, short sentences, contractions, phrasal verbs.',
    conceptualDifferenceEs: 'Formal = vocabulario latino, voz pasiva, oraciones complejas, tono impersonal. Informal = vocabulario germánico, voz activa, oraciones cortas, contracciones, phrasal verbs.',
    timeline: '[academic/legal/official] vs [conversational/casual]',
    discriminationExercises: [
      { sentence: 'We need to ___ (commence / start) the meeting.', correctTense: 2, explanation: 'Informal context — "start" is more natural', explanationEs: 'Contexto informal — "start" es más natural' },
      { sentence: 'The committee ___ (decided / reached a decision) to postpone.', correctTense: 1, explanation: 'Formal — "reached a decision" is more formal than "decided"', explanationEs: 'Formal — "reached a decision" es más formal que "decided"' },
      { sentence: 'In a job application: "I ___ (would like to / wanna) discuss my qualifications."', correctTense: 1, explanation: 'Formal context requires formal phrasing', explanationEs: 'Contexto formal requiere fraseo formal' },
    ],
    productionExercises: [
      { prompt: 'Rewrite informally: "Please ensure that you submit the documentation."', promptEs: 'Reescribe informalmente', expectedTense: 2, sampleAnswer: 'Make sure you hand in the docs.', hint: 'Use phrasal verbs, contractions, shorter words' },
      { prompt: 'Rewrite formally: "We got the results and they look good."', promptEs: 'Reescribe formalmente', expectedTense: 1, sampleAnswer: 'The results were obtained and appear satisfactory.', hint: 'Use Latinate vocabulary, passive where appropriate' },
    ],
    errorHospital: [
      { wrong: 'Utilize "utilize" in informal emails.', correct: 'Use "use" in informal emails.', l1Cause: 'Latinate words (utilize, commence, facilitate) sound stiff in casual contexts. Germanic equivalents (use, start, help) are preferred.', l1CauseEs: 'Las palabras latinas suenan rígidas en contextos casuales. Se prefieren equivalentes germánicos.' },
    ],
    minimalPairs: [
      { sentence1: 'The investigation was commenced.', meaning1: 'Formal — Latinate, passive', meaning1Es: 'Formal — latino, pasiva', sentence2: 'They started looking into it.', meaning2: 'Informal — Germanic, active, phrasal verb', meaning2Es: 'Informal — germánico, activa, phrasal verb' },
      { sentence1: 'I would like to inquire about the matter.', meaning1: 'Formal — polite, Latinate', meaning1Es: 'Formal — cortés, latino', sentence2: 'I wanna ask about it.', meaning2: 'Informal — contraction, casual', meaning2Es: 'Informal — contracción, casual' },
      { sentence1: 'Furthermore, it is necessary to consider.', meaning1: 'Formal — complex connector', meaning1Es: 'Formal — conector complejo', sentence2: 'Also, we need to think about it.', meaning2: 'Informal — simple, direct', meaning2Es: 'Informal — simple, directo' },
    ]
  },
  {
    id: 'c2-literal-figurative',
    tense1: {
      name: 'Literal Language',
      nameEs: 'Lenguaje Literal',
      formula: 'Direct meaning, factual, clear',
      keySignals: ['exact words', 'factual', 'unambiguous']
    },
    tense2: {
      name: 'Figurative Language',
      nameEs: 'Lenguaje Figurado',
      formula: 'Metaphor, irony, understatement, hyperbole',
      keySignals: ['like', 'as', 'metaphor', 'it\'s raining cats and dogs', 'piece of cake']
    },
    level: 6,
    conceptualDifference: 'Literal = direct meaning, factual, clear, unambiguous. Figurative = metaphor, irony, understatement, hyperbole — requires cultural knowledge.',
    conceptualDifferenceEs: 'Literal = significado directo, factual, claro, inequívoco. Figurado = metáfora, ironía, atenuación, hipérbole — requiere conocimiento cultural.',
    timeline: '[says what it means] vs [means more than it says]',
    discriminationExercises: [
      { sentence: '"It\'s a piece of cake" means the task is ___.', correctTense: 2, explanation: 'Figurative — idiom meaning "very easy"', explanationEs: 'Figurado — modismo que significa "muy fácil"' },
      { sentence: '"The meeting lasted three hours" is ___.', correctTense: 1, explanation: 'Literal — factual statement', explanationEs: 'Literal — afirmación factual' },
      { sentence: '"That\'s not bad" (when something is excellent) is ___.', correctTense: 2, explanation: 'Figurative — British understatement', explanationEs: 'Figurado — atenuación británica' },
    ],
    productionExercises: [
      { prompt: 'Describe the weather literally', promptEs: 'Describe el tiempo literalmente', expectedTense: 1, sampleAnswer: 'It is raining heavily. There is a lot of water falling.', hint: 'Factual, direct description' },
      { prompt: 'Describe the same weather figuratively', promptEs: 'Describe el mismo tiempo de forma figurada', expectedTense: 2, sampleAnswer: 'It\'s raining cats and dogs.', hint: 'Use idiom or metaphor' },
    ],
    errorHospital: [
      { wrong: 'Taking idioms literally: "Break a leg" = injure yourself', correct: '"Break a leg" = good luck (theatre idiom)', l1Cause: 'Idioms must be learned as chunks. Literal translation from L1 causes misunderstanding.', l1CauseEs: 'Los modismos deben aprenderse como bloques. La traducción literal desde L1 causa malentendidos.' },
    ],
    minimalPairs: [
      { sentence1: 'He runs very fast.', meaning1: 'Literal — he runs at high speed', meaning1Es: 'Literal — corre a alta velocidad', sentence2: 'He runs like the wind.', meaning2: 'Figurative — metaphor for very fast', meaning2Es: 'Figurado — metáfora de muy rápido' },
      { sentence1: 'She was very angry.', meaning1: 'Literal — direct statement', meaning1Es: 'Literal — afirmación directa', sentence2: 'She was boiling with rage.', meaning2: 'Figurative — metaphor (heat = anger)', meaning2Es: 'Figurado — metáfora (calor = ira)' },
      { sentence1: 'That cost a lot of money.', meaning1: 'Literal — factual', meaning1Es: 'Literal — factual', sentence2: 'That cost an arm and a leg.', meaning2: 'Figurative — idiom for very expensive', meaning2Es: 'Figurado — modismo para muy caro' },
    ]
  },
  {
    id: 'c2-direct-indirect-pragmatics',
    tense1: {
      name: 'Direct Communication',
      nameEs: 'Comunicación Directa',
      formula: 'Says exactly what is meant',
      keySignals: ['explicit', 'clear', 'to the point', 'efficient']
    },
    tense2: {
      name: 'Indirect Communication',
      nameEs: 'Comunicación Indirecta',
      formula: 'Implies meaning through context, politeness',
      keySignals: ['perhaps', 'might', 'I was wondering', 'would it be possible', 'British']
    },
    level: 6,
    conceptualDifference: 'Direct = says exactly what is meant, preferred in some cultures, efficient. Indirect = implies meaning through context, politeness, hedging — typical of British English.',
    conceptualDifferenceEs: 'Directo = dice exactamente lo que significa, preferido en algunas culturas, eficiente. Indirecto = implica significado mediante contexto, cortesía, matización — típico del inglés británico.',
    timeline: '[explicit request] vs [implied request]',
    discriminationExercises: [
      { sentence: '"Close the window" is ___.', correctTense: 1, explanation: 'Direct — explicit command', explanationEs: 'Directo — orden explícita' },
      { sentence: '"It\'s a bit chilly in here, isn\'t it?" (meaning: please close the window) is ___.', correctTense: 2, explanation: 'Indirect — implies request through observation', explanationEs: 'Indirecto — implica petición mediante observación' },
      { sentence: 'In British English, "I\'m not sure that\'s a good idea" often means ___.', correctTense: 2, explanation: 'Indirect — polite way of saying "No, that\'s wrong"', explanationEs: 'Indirecto — forma cortés de decir "No, eso está mal"' },
    ],
    productionExercises: [
      { prompt: 'Ask someone to turn down the music — directly', promptEs: 'Pide que bajen la música — directamente', expectedTense: 1, sampleAnswer: 'Turn down the music, please.', hint: 'Explicit, clear request' },
      { prompt: 'Ask the same thing — indirectly (British style)', promptEs: 'Pide lo mismo — indirectamente (estilo británico)', expectedTense: 2, sampleAnswer: 'Would it be possible to have the music a bit lower?', hint: 'Hedging, politeness, implied request' },
    ],
    errorHospital: [
      { wrong: 'Interpreting British "That\'s interesting" as praise.', correct: 'Often means "I disagree" or "I\'m not convinced" — indirect.', l1Cause: 'British English uses understatement and indirectness. "Interesting" can be negative. Spanish speakers may expect direct feedback.', l1CauseEs: 'El inglés británico usa atenuación e indirectez. "Interesting" puede ser negativo.' },
    ],
    minimalPairs: [
      { sentence1: 'I need you to finish this by Friday.', meaning1: 'Direct — explicit demand', meaning1Es: 'Directo — demanda explícita', sentence2: 'It would be helpful if this could be finished by Friday.', meaning2: 'Indirect — polite, softened request', meaning2Es: 'Indirecto — petición cortés, suavizada' },
      { sentence1: 'No, I disagree.', meaning1: 'Direct — clear rejection', meaning1Es: 'Directo — rechazo claro', sentence2: 'I\'m not sure I see it that way.', meaning2: 'Indirect — polite disagreement', meaning2Es: 'Indirecto — desacuerdo cortés' },
      { sentence1: 'Give me the report.', meaning1: 'Direct — command', meaning1Es: 'Directo — orden', sentence2: 'I was wondering if you might be able to pass me the report.', meaning2: 'Indirect — very polite request', meaning2Es: 'Indirecto — petición muy cortés' },
    ]
  },
  // === B2+ CONTRASTS (Level 7) ===
  {
    id: 'level7-will-vs-going-to-future',
    tense1: {
      name: 'Will',
      nameEs: 'Will',
      formula: 'S + will + V(base)',
      keySignals: ['I think...', 'probably', 'spontaneous', 'promise', 'offer', 'opinion prediction', 'when/if/as soon as (future time clause)']
    },
    tense2: {
      name: 'Going to',
      nameEs: 'Going to',
      formula: 'S + am/is/are + going to + V(base)',
      keySignals: ['plan', 'intention', 'evidence-based prediction', 'Look!', 'already decided', 'arrangement']
    },
    level: 7,
    conceptualDifference: 'Will = spontaneous decisions, promises, offers, opinion-based predictions, or in future time clauses (when/as soon as + present). Going to = pre-planned intentions, evidence-based predictions, arrangements already made.',
    conceptualDifferenceEs: 'Will = decisiones espontáneas, promesas, ofertas, predicciones por opinión, o en cláusulas de tiempo futuro. Going to = intenciones pre-planificadas, predicciones con evidencia, planes ya hechos.',
    timeline: '[NOW → spontaneous/opinion] vs [PLAN/evidence >>> future]',
    discriminationExercises: [
      { sentence: 'When I ___ (see) him tomorrow, I ___ (give) him the message.', correctTense: 1, explanation: 'Future time clause: when + present, main clause uses will for the future action', explanationEs: 'Cláusula de tiempo futuro: when + presente, la cláusula principal usa will' },
      { sentence: 'Look at the queue! We ___ (wait) for ages.', correctTense: 2, explanation: 'Evidence-based prediction (visible queue) → going to', explanationEs: 'Predicción basada en evidencia (cola visible) → going to' },
      { sentence: 'I ___ (probably/be) late — the traffic is terrible.', correctTense: 1, explanation: '"Probably" + opinion-based prediction → will', explanationEs: '"Probably" + predicción por opinión → will' },
      { sentence: 'We ___ (get) married in June. We\'ve set the date.', correctTense: 2, explanation: 'Arrangement already made → going to', explanationEs: 'Plan ya fijado → going to' },
      { sentence: 'As soon as I ___ (finish), I ___ (call) you.', correctTense: 1, explanation: 'Future time clause (as soon as + present) → will in main clause', explanationEs: 'Cláusula de tiempo futuro → will en la cláusula principal' },
    ],
    productionExercises: [
      { prompt: 'Make a spontaneous offer to help a colleague who looks overwhelmed', promptEs: 'Haz una oferta espontánea para ayudar a un compañero que parece agobiado', expectedTense: 1, sampleAnswer: 'I\'ll help you with that report.', hint: 'Spontaneous offer = will' },
      { prompt: 'Describe your holiday plans (already booked)', promptEs: 'Describe tus planes de vacaciones (ya reservados)', expectedTense: 2, sampleAnswer: 'We\'re going to fly to Greece. We\'re going to stay for two weeks.', hint: 'Pre-made plans = going to' },
      { prompt: 'Predict the outcome of a football match based on the current score', promptEs: 'Predice el resultado del partido según el marcador actual', expectedTense: 2, sampleAnswer: 'They\'re going to win — they\'re 3-0 up.', hint: 'Evidence-based prediction = going to' },
    ],
    errorHospital: [
      { wrong: 'When I will see him, I will tell him.', correct: 'When I see him, I will tell him.', l1Cause: 'In Spanish "Cuando lo veré" uses future. English: after when/as soon as/until, use present, not will.', l1CauseEs: 'En español "Cuando lo veré" usa futuro. En inglés: tras when/as soon as/until, usa presente, no will.' },
      { wrong: 'I will go to the gym tomorrow. (already planned)', correct: 'I\'m going to go to the gym tomorrow.', l1Cause: 'Spanish "iré" and "voy a ir" are often interchangeable. English distinguishes: planned = going to.', l1CauseEs: 'En español "iré" y "voy a ir" se usan igual. En inglés: plan = going to.' },
      { wrong: 'Look at those clouds! It will rain.', correct: 'Look at those clouds! It\'s going to rain.', l1Cause: 'With visible evidence (clouds), use going to. Will is for opinion-based predictions.', l1CauseEs: 'Con evidencia visible (nubes), usa going to. Will es para predicciones por opinión.' },
    ],
    minimalPairs: [
      { sentence1: 'I\'ll have the steak.', meaning1: 'Spontaneous decision (just decided at the restaurant)', meaning1Es: 'Decisión espontánea (acabo de decidir)', sentence2: 'I\'m going to have the steak.', meaning2: 'I decided before arriving', meaning2Es: 'Ya lo había decidido antes de llegar' },
      { sentence1: 'I think it will be sunny tomorrow.', meaning1: 'Opinion-based prediction (no evidence)', meaning1Es: 'Predicción por opinión (sin evidencia)', sentence2: 'Look at the sky — it\'s going to be sunny.', meaning2: 'Evidence-based (clear sky visible)', meaning2Es: 'Basada en evidencia (cielo despejado visible)' },
      { sentence1: 'When I retire, I will travel.', meaning1: 'Future time clause — correct use of present + will', meaning1Es: 'Cláusula de tiempo futuro — uso correcto', sentence2: 'When I will retire, I will travel.', meaning2: 'Wrong — never use will after when in time clauses', meaning2Es: 'Incorrecto — nunca uses will tras when en cláusulas de tiempo' },
    ]
  },
  {
    id: 'level7-gerund-vs-infinitive',
    tense1: {
      name: 'Verb + Gerund',
      nameEs: 'Verbo + Gerundio',
      formula: 'V + -ing',
      keySignals: ['enjoy', 'avoid', 'finish', 'mind', 'consider', 'suggest', 'recommend', 'risk', 'miss', 'practise', 'give up', 'keep on']
    },
    tense2: {
      name: 'Verb + Infinitive',
      nameEs: 'Verbo + Infinitivo',
      formula: 'V + to + base',
      keySignals: ['want', 'hope', 'expect', 'decide', 'plan', 'agree', 'refuse', 'promise', 'manage', 'afford', 'choose', 'learn']
    },
    level: 7,
    conceptualDifference: 'Some verbs take only gerund (enjoy, avoid, finish). Some take only infinitive (want, hope, decide). Some take both but with different meaning (remember, forget, stop, try). Adjectives: interested in -ing vs ready to do.',
    conceptualDifferenceEs: 'Algunos verbos solo gerundio (enjoy, avoid). Otros solo infinitivo (want, hope). Algunos ambos con distinto significado. Adjetivos: interested in -ing vs ready to do.',
    timeline: '[V-ing = the action as object] vs [V + to = intention/purpose]',
    discriminationExercises: [
      { sentence: 'I enjoy ___ (read) in the evenings.', correctTense: 1, explanation: 'Enjoy + gerund only (never enjoy to read)', explanationEs: 'Enjoy + solo gerundio' },
      { sentence: 'She hopes ___ (get) the job.', correctTense: 2, explanation: 'Hope + infinitive only', explanationEs: 'Hope + solo infinitivo' },
      { sentence: 'We decided ___ (postpone) the meeting.', correctTense: 2, explanation: 'Decide + infinitive only', explanationEs: 'Decide + solo infinitivo' },
      { sentence: 'He avoided ___ (answer) the question.', correctTense: 1, explanation: 'Avoid + gerund only', explanationEs: 'Avoid + solo gerundio' },
      { sentence: 'I can\'t afford ___ (buy) a new car.', correctTense: 2, explanation: 'Afford + infinitive only', explanationEs: 'Afford + solo infinitivo' },
    ],
    productionExercises: [
      { prompt: 'Say you are considering a career change', promptEs: 'Di que estás considerando un cambio de carrera', expectedTense: 1, sampleAnswer: 'I\'m considering changing my job.', hint: 'Consider + gerund' },
      { prompt: 'Say you have decided to learn a new skill', promptEs: 'Di que has decidido aprender una nueva habilidad', expectedTense: 2, sampleAnswer: 'I\'ve decided to learn Portuguese.', hint: 'Decide + infinitive' },
      { prompt: 'Describe something you gave up doing', promptEs: 'Describe algo que dejaste de hacer', expectedTense: 1, sampleAnswer: 'I gave up smoking last year.', hint: 'Give up + gerund' },
    ],
    errorHospital: [
      { wrong: 'I enjoy to read.', correct: 'I enjoy reading.', l1Cause: 'Spanish "disfruto leer" uses infinitive. English: enjoy, avoid, finish, mind always take -ing.', l1CauseEs: 'En español "disfruto leer" usa infinitivo. En inglés: enjoy, avoid, finish siempre llevan -ing.' },
      { wrong: 'I want going home.', correct: 'I want to go home.', l1Cause: 'Spanish "quiero ir" uses infinitive. English: want, hope, decide, expect always take to + base.', l1CauseEs: 'En español "quiero ir" usa infinitivo. En inglés: want, hope, decide siempre llevan to + base.' },
      { wrong: 'I look forward to see you.', correct: 'I look forward to seeing you.', l1Cause: '"Look forward to" is a phrasal verb — the "to" is a preposition, so it takes -ing (like "I\'m used to doing").', l1CauseEs: '"Look forward to" es phrasal verb — el "to" es preposición, así que lleva -ing.' },
    ],
    minimalPairs: [
      { sentence1: 'I remember locking the door.', meaning1: 'I have a memory of doing it (past action)', meaning1Es: 'Tengo recuerdo de haberlo hecho', sentence2: 'I remember to lock the door.', meaning2: 'I don\'t forget to do it (obligation)', meaning2Es: 'No olvido hacerlo (obligación)' },
      { sentence1: 'He stopped smoking.', meaning1: 'He quit the habit', meaning1Es: 'Dejó el hábito', sentence2: 'He stopped to smoke.', meaning2: 'He paused in order to smoke', meaning2Es: 'Se detuvo para fumar' },
      { sentence1: 'I\'m interested in learning more.', meaning1: 'Interested in + -ing (preposition)', meaning1Es: 'Interested in + -ing (preposición)', sentence2: 'I\'m ready to learn more.', meaning2: 'Ready + to infinitive', meaning2Es: 'Ready + infinitivo' },
    ]
  },
  // === C1 CONTRASTS (Level 8) ===
  {
    id: 'level8-reported-speech-say-vs-tell',
    tense1: {
      name: 'Say',
      nameEs: 'Say',
      formula: 'say + (that) + clause / say + to + person',
      keySignals: ['say (that)', 'say to someone', 'direct quote: "..."']
    },
    tense2: {
      name: 'Tell',
      nameEs: 'Tell',
      formula: 'tell + person + (that) + clause',
      keySignals: ['tell someone', 'tell the truth', 'tell a lie', 'tell a story', 'tell the time']
    },
    level: 8,
    conceptualDifference: 'Say = focus on the words/content; no direct object (person) required; say (that) or say to someone. Tell = requires a person as object; tell someone (that); also used in fixed phrases: tell the truth, tell a lie, tell a story.',
    conceptualDifferenceEs: 'Say = foco en las palabras; no requiere objeto (persona); say (that) o say to alguien. Tell = requiere persona como objeto; tell alguien (that); también en frases fijas: tell the truth, tell a lie.',
    timeline: '[say = words/content] vs [tell = inform someone]',
    discriminationExercises: [
      { sentence: 'She ___ (say/tell) me that she was leaving.', correctTense: 2, explanation: 'Person as object (me) → tell', explanationEs: 'Persona como objeto (me) → tell' },
      { sentence: 'He ___ (say/tell) that he would be late.', correctTense: 1, explanation: 'No person object, just the clause → say', explanationEs: 'Sin objeto persona, solo la cláusula → say' },
      { sentence: 'I need to ___ (say/tell) you something important.', correctTense: 2, explanation: 'tell + person (you) + something', explanationEs: 'tell + persona (you) + algo' },
      { sentence: 'Don\'t ___ (say/tell) a lie.', correctTense: 2, explanation: 'Fixed phrase: tell a lie', explanationEs: 'Frase fija: tell a lie' },
      { sentence: 'She ___ (say/tell) goodbye and left.', correctTense: 1, explanation: 'Say + direct words (goodbye); no person object', explanationEs: 'Say + palabras directas; sin objeto persona' },
    ],
    productionExercises: [
      { prompt: 'Report what your boss said to you (indirect speech)', promptEs: 'Reporta lo que tu jefe te dijo', expectedTense: 2, sampleAnswer: 'She told me that the meeting was postponed.', hint: 'tell + person + (that) + clause' },
      { prompt: 'Report something someone said (no specific listener)', promptEs: 'Reporta algo que alguien dijo (sin oyente específico)', expectedTense: 1, sampleAnswer: 'He said that he was tired.', hint: 'say + (that) + clause' },
      { prompt: 'Use the fixed phrase for not lying', promptEs: 'Usa la frase fija para no mentir', expectedTense: 2, sampleAnswer: 'You should always tell the truth.', hint: 'tell the truth' },
    ],
    errorHospital: [
      { wrong: 'She said me that she was busy.', correct: 'She told me that she was busy.', l1Cause: 'Spanish "me dijo" uses "decir" with indirect object. English: say cannot take a person as direct object — use tell + person.', l1CauseEs: 'En español "me dijo" usa objeto indirecto. En inglés: say no lleva persona como objeto — usa tell + persona.' },
      { wrong: 'He told that he was leaving.', correct: 'He said that he was leaving.', l1Cause: 'Tell always needs a person: tell someone (that). Say can stand alone: say (that).', l1CauseEs: 'Tell siempre necesita persona: tell alguien (that). Say puede ir solo: say (that).' },
      { wrong: 'Can you say me the time?', correct: 'Can you tell me the time?', l1Cause: 'Fixed phrase: tell the time, tell someone the time. "Say" is never used with "the time".', l1CauseEs: 'Frase fija: tell the time. "Say" nunca se usa con "the time".' },
    ],
    minimalPairs: [
      { sentence1: 'She said she was tired.', meaning1: 'Reported speech — no listener specified', meaning1Es: 'Estilo indirecto — sin oyente especificado', sentence2: 'She told me she was tired.', meaning2: 'Reported speech — listener (me) specified', meaning2Es: 'Estilo indirecto — oyente (me) especificado' },
      { sentence1: 'He said to her that he loved her.', meaning1: 'Say + to + person (less common)', meaning1Es: 'Say + to + persona (menos común)', sentence2: 'He told her that he loved her.', meaning2: 'Tell + person (more natural)', meaning2Es: 'Tell + persona (más natural)' },
      { sentence1: 'Say "hello" to your mother.', meaning1: 'Say + direct words (imperative)', meaning1Es: 'Say + palabras directas', sentence2: 'Tell your mother I said hello.', meaning2: 'Tell + person + message', meaning2Es: 'Tell + persona + mensaje' },
    ]
  },
  {
    id: 'level8-wish-past-vs-past-perfect',
    tense1: {
      name: 'Wish + Past Simple',
      nameEs: 'Wish + Pasado Simple',
      formula: 'I wish + subject + past simple',
      keySignals: ['present unreal', 'now', 'currently', 'would like to be different now']
    },
    tense2: {
      name: 'Wish + Past Perfect',
      nameEs: 'Wish + Pasado Perfecto',
      formula: 'I wish + subject + had + past participle',
      keySignals: ['past regret', 'yesterday', 'last year', 'would have done differently']
    },
    level: 8,
    conceptualDifference: 'Wish + Past Simple = desire about the present (unreal). Wish + Past Perfect = regret about the past (impossible to change). Wish + would = complaint about present habit/behavior (someone else).',
    conceptualDifferenceEs: 'Wish + Past Simple = deseo sobre el presente (irreal). Wish + Past Perfect = arrepentimiento sobre el pasado. Wish + would = queja sobre hábito actual (otra persona).',
    timeline: '[wish + past = NOW unreal] vs [wish + had done = PAST regret]',
    discriminationExercises: [
      { sentence: 'I wish I ___ (speak) Japanese. (I don\'t speak it now)', correctTense: 1, explanation: 'Present unreal — desire about now → Past Simple', explanationEs: 'Presente irreal — deseo sobre ahora → Past Simple' },
      { sentence: 'I wish I ___ (not/say) that to her yesterday.', correctTense: 2, explanation: 'Past regret — something already done → Past Perfect', explanationEs: 'Arrepentimiento pasado — algo ya hecho → Past Perfect' },
      { sentence: 'She wishes she ___ (have) more time right now.', correctTense: 1, explanation: '"Right now" = present → Wish + Past Simple', explanationEs: '"Right now" = presente → Wish + Past Simple' },
      { sentence: 'We wish we ___ (visit) them when we were in Paris.', correctTense: 2, explanation: 'Past regret — we didn\'t visit (missed opportunity)', explanationEs: 'Arrepentimiento pasado — no los visitamos' },
      { sentence: 'He wishes he ___ (be) taller. (He\'s short now)', correctTense: 1, explanation: 'Present unreal — current state', explanationEs: 'Presente irreal — estado actual' },
    ],
    productionExercises: [
      { prompt: 'Express regret about a past mistake', promptEs: 'Expresa arrepentimiento sobre un error pasado', expectedTense: 2, sampleAnswer: 'I wish I had listened to your advice.', hint: 'wish + had + past participle' },
      { prompt: 'Express something you want to be different in your life now', promptEs: 'Expresa algo que quieres que sea diferente en tu vida ahora', expectedTense: 1, sampleAnswer: 'I wish I had more free time.', hint: 'wish + past simple for present unreal' },
      { prompt: 'Express regret about not studying for an exam', promptEs: 'Expresa arrepentimiento por no haber estudiado para un examen', expectedTense: 2, sampleAnswer: 'I wish I had studied harder for that exam.', hint: 'Past regret = had + past participle' },
    ],
    errorHospital: [
      { wrong: 'I wish I have more time.', correct: 'I wish I had more time.', l1Cause: 'Spanish "ojalá tenga" uses subjunctive. English uses Past Simple (subjunctive form) after wish for present unreal.', l1CauseEs: 'El español usa subjuntivo. El inglés usa Past Simple tras wish para presente irreal.' },
      { wrong: 'I wish I studied more. (past regret)', correct: 'I wish I had studied more.', l1Cause: 'For past regrets, must use Past Perfect. Past Simple after wish = present unreal, not past.', l1CauseEs: 'Para arrepentimientos pasados, usa Past Perfect. Past Simple = presente irreal.' },
      { wrong: 'I wish I would have known.', correct: 'I wish I had known.', l1Cause: 'Never "would have" in the wish-clause. Use "had + past participle" only.', l1CauseEs: 'Nunca "would have" en la cláusula de wish. Solo "had + participio".' },
    ],
    minimalPairs: [
      { sentence1: 'I wish I had more money.', meaning1: 'Present — I want more money NOW', meaning1Es: 'Presente — quiero más dinero AHORA', sentence2: 'I wish I had had more money.', meaning2: 'Past — I didn\'t have enough back then', meaning2Es: 'Pasado — no tenía suficiente entonces' },
      { sentence1: 'She wishes she lived in Madrid.', meaning1: 'Present — she wants to live there now', meaning1Es: 'Presente — quiere vivir allí ahora', sentence2: 'She wishes she had lived in Madrid.', meaning2: 'Past — she never lived there, regrets it', meaning2Es: 'Pasado — nunca vivió allí, lo lamenta' },
      { sentence1: 'He wishes he knew the answer.', meaning1: 'Present — he doesn\'t know it now', meaning1Es: 'Presente — no lo sabe ahora', sentence2: 'He wishes he had known the answer.', meaning2: 'Past — he didn\'t know it when it mattered', meaning2Es: 'Pasado — no lo sabía cuando importaba' },
    ]
  },
  // === C1+ CONTRASTS (Level 9) ===
  {
    id: 'level9-active-vs-passive-academic',
    tense1: {
      name: 'Active Voice (Academic)',
      nameEs: 'Voz Activa (Académica)',
      formula: 'Researcher/We + verb + object',
      keySignals: ['we found', 'the study shows', 'researchers discovered', 'direct attribution']
    },
    tense2: {
      name: 'Passive Voice (Academic)',
      nameEs: 'Voz Pasiva (Académica)',
      formula: 'Object + be + past participle (+ by agent)',
      keySignals: ['it was found', 'data were collected', 'the sample was selected', 'impersonal', 'methodology']
    },
    level: 9,
    conceptualDifference: 'Academic active = emphasizes who did the research (we, the author). Academic passive = emphasizes the process/results, impersonal tone, common in Methods section. Choice depends on discipline and emphasis.',
    conceptualDifferenceEs: 'Activa académica = énfasis en quién investigó. Pasiva académica = énfasis en proceso/resultados, tono impersonal, común en sección Métodos.',
    timeline: '[WHO did it — author visibility] vs [WHAT was done — object focus]',
    discriminationExercises: [
      { sentence: 'In the Methods section: "Participants ___ (select) using random sampling."', correctTense: 2, explanation: 'Methods often use passive — focus on process, not who selected', explanationEs: 'Métodos suelen usar pasiva — foco en proceso' },
      { sentence: 'In the Discussion: "We ___ (find) that the results support our hypothesis."', correctTense: 1, explanation: 'Discussion often uses active "we" to claim ownership of findings', explanationEs: 'Discusión suele usar "we" para reclamar autoría' },
      { sentence: 'The data ___ (collect) over a period of six months.', correctTense: 2, explanation: 'Impersonal, focus on the data — passive', explanationEs: 'Impersonal, foco en los datos — pasiva' },
      { sentence: 'This paper ___ (argue) that climate policy needs reform.', correctTense: 1, explanation: 'Academic "this paper argues" is active (paper as agent)', explanationEs: '"This paper argues" es activa (paper como agente)' },
      { sentence: 'Three experiments ___ (conduct) to test the theory.', correctTense: 2, explanation: 'Impersonal description of methodology → passive', explanationEs: 'Descripción impersonal de metodología → pasiva' },
    ],
    productionExercises: [
      { prompt: 'Rewrite for Methods section: "We interviewed 50 participants."', promptEs: 'Reescribe para la sección Métodos', expectedTense: 2, sampleAnswer: 'Fifty participants were interviewed.', hint: 'Passive emphasizes the participants, not the researchers' },
      { prompt: 'State a finding in first person (Discussion)', promptEs: 'Enuncia un hallazgo en primera persona', expectedTense: 1, sampleAnswer: 'We found that the intervention significantly improved outcomes.', hint: 'Active "we" for author visibility' },
      { prompt: 'Describe a procedure impersonally', promptEs: 'Describe un procedimiento de forma impersonal', expectedTense: 2, sampleAnswer: 'The solution was heated to 100°C and then cooled.', hint: 'Passive for lab procedures' },
    ],
    errorHospital: [
      { wrong: 'The data was collected.', correct: 'The data were collected.', l1Cause: 'In formal/academic English, "data" is plural (datum/data). Use "were" not "was".', l1CauseEs: 'En inglés formal, "data" es plural. Usa "were" no "was".' },
      { wrong: 'Participants was recruited from...', correct: 'Participants were recruited from...', l1Cause: 'Passive: be + past participle. "Participants" is plural → were recruited.', l1CauseEs: 'Pasiva: be + participio. "Participants" es plural → were recruited.' },
      { wrong: 'The study was conducted by us.', correct: 'We conducted the study. / The study was conducted.', l1Cause: '"By us" is redundant — if you want to mention yourself, use active. Otherwise omit the agent.', l1CauseEs: '"By us" es redundante. Si quieres mencionarte, usa activa.' },
    ],
    minimalPairs: [
      { sentence1: 'We analyzed the data.', meaning1: 'Active — researchers as agents', meaning1Es: 'Activa — investigadores como agentes', sentence2: 'The data were analyzed.', meaning2: 'Passive — focus on data, impersonal', meaning2Es: 'Pasiva — foco en datos, impersonal' },
      { sentence1: 'The team identified three key factors.', meaning1: 'Active — attribution to team', meaning1Es: 'Activa — atribución al equipo', sentence2: 'Three key factors were identified.', meaning2: 'Passive — focus on findings', meaning2Es: 'Pasiva — foco en hallazgos' },
      { sentence1: 'Smith (2020) demonstrated that...', meaning1: 'Active — citation with active verb', meaning1Es: 'Activa — cita con verbo activo', sentence2: 'It was demonstrated by Smith (2020) that...', meaning2: 'Passive — less common in citations', meaning2Es: 'Pasiva — menos común en citas' },
    ]
  },
  // === C2 CONTRASTS (Level 10) ===
  {
    id: 'level10-formal-vs-informal-register',
    tense1: {
      name: 'Formal Register',
      nameEs: 'Registro Formal',
      formula: 'Latinate vocabulary, passive, complex sentences, no contractions',
      keySignals: ['commence', 'utilize', 'approximately', 'furthermore', 'nevertheless', 'subsequently', 'prior to', 'in regard to']
    },
    tense2: {
      name: 'Informal Register',
      nameEs: 'Registro Informal',
      formula: 'Germanic vocabulary, active, short sentences, contractions, phrasal verbs',
      keySignals: ['start', 'use', 'about', 'also', 'but', 'gonna', 'wanna', 'kind of', 'sort of', 'stuff']
    },
    level: 10,
    conceptualDifference: 'Formal = Latinate vocabulary, complex syntax, passive where appropriate, no contractions, hedging/boosting for academic tone. Informal = Germanic roots, phrasal verbs, contractions, simple syntax, colloquial expressions.',
    conceptualDifferenceEs: 'Formal = vocabulario latino, sintaxis compleja, pasiva cuando convenga. Informal = raíces germánicas, phrasal verbs, contracciones, sintaxis simple.',
    timeline: '[academic/legal/official/diplomatic] vs [conversational/casual/social]',
    discriminationExercises: [
      { sentence: 'In a formal report: "The project ___ (commence / get started) in January."', correctTense: 1, explanation: 'Formal context — "commence" is appropriate', explanationEs: 'Contexto formal — "commence" es apropiado' },
      { sentence: 'In an email to a friend: "I ___ (would like to / wanna) catch up soon."', correctTense: 2, explanation: 'Informal — "wanna" is acceptable with friends', explanationEs: 'Informal — "wanna" es aceptable con amigos' },
      { sentence: 'Legal document: "The parties ___ (agree to / are gonna) the following terms."', correctTense: 1, explanation: 'Legal requires formal "agree to"', explanationEs: 'Legal requiere "agree to" formal' },
      { sentence: 'Casual chat: "We need to ___ (discuss / talk about) this."', correctTense: 2, explanation: 'Informal — phrasal verb "talk about" is natural', explanationEs: 'Informal — phrasal verb "talk about" es natural' },
      { sentence: 'Academic writing: "The findings ___ (suggest / point to) a correlation."', correctTense: 1, explanation: 'Formal academic — "suggest" preferred over "point to"', explanationEs: 'Académico formal — "suggest" preferido' },
    ],
    productionExercises: [
      { prompt: 'Rewrite formally: "We gotta figure out what went wrong."', promptEs: 'Reescribe formalmente', expectedTense: 1, sampleAnswer: 'It is necessary to determine the cause of the failure.', hint: 'Replace contractions, use Latinate vocabulary' },
      { prompt: 'Rewrite informally: "I would like to inquire regarding the matter."', promptEs: 'Reescribe informalmente', expectedTense: 2, sampleAnswer: 'I wanna ask about it.', hint: 'Use contractions, simpler words' },
      { prompt: 'Write a formal request for a deadline extension', promptEs: 'Escribe una petición formal de prórroga', expectedTense: 1, sampleAnswer: 'I am writing to request an extension of the deadline. I would be grateful if you could consider my application.', hint: 'Formal register: full forms, polite structures' },
    ],
    errorHospital: [
      { wrong: 'Utilize "utilize" in text messages.', correct: 'Use "use" in text messages.', l1Cause: 'Latinate words sound stiff in casual contexts. Spanish uses many Latinate words (utilizar) in both registers — English differentiates more.', l1CauseEs: 'Las palabras latinas suenan rígidas en contextos casuales.' },
      { wrong: 'Formal: "I\'m gonna submit the report."', correct: 'I am going to submit the report.', l1Cause: 'Contractions and "gonna" are informal. Formal writing uses full forms.', l1CauseEs: 'Las contracciones y "gonna" son informales.' },
      { wrong: 'Informal: "Furthermore, I reckon we should..."', correct: 'Also, I think we should...', l1Cause: '"Furthermore" is formal. "Also" or "And" + "I think" is more natural for informal register.', l1CauseEs: '"Furthermore" es formal. "Also" + "I think" es más natural informal.' },
    ],
    minimalPairs: [
      { sentence1: 'The meeting will commence at 9 a.m.', meaning1: 'Formal — Latinate, full form', meaning1Es: 'Formal — latino, forma completa', sentence2: 'The meeting\'s gonna start at 9.', meaning2: 'Informal — contraction, Germanic', meaning2Es: 'Informal — contracción, germánico' },
      { sentence1: 'I would like to inform you that...', meaning1: 'Formal — polite, indirect', meaning1Es: 'Formal — cortés, indirecto', sentence2: 'I wanna let you know that...', meaning2: 'Informal — casual, direct', meaning2Es: 'Informal — casual, directo' },
      { sentence1: 'Subsequently, the matter was resolved.', meaning1: 'Formal — Latinate connector', meaning1Es: 'Formal — conector latino', sentence2: 'Then we sorted it out.', meaning2: 'Informal — phrasal verb, simple', meaning2Es: 'Informal — phrasal verb, simple' },
    ]
  },

  // === LEVEL 9 CONTRASTS (C1) ===
  {
    id: 'level9-hedging-vs-asserting',
    tense1: {
      name: 'Hedged Language',
      nameEs: 'Lenguaje Atenuado',
      formula: 'It could be argued / One might suggest / There appears to be',
      keySignals: ['could', 'might', 'may', 'appears to', 'seems', 'tends to', 'arguably', 'somewhat']
    },
    tense2: {
      name: 'Assertive Language',
      nameEs: 'Lenguaje Asertivo',
      formula: 'It is clear / This proves / Obviously / Certainly',
      keySignals: ['clearly', 'obviously', 'certainly', 'undoubtedly', 'proves', 'demonstrates', 'always', 'never']
    },
    level: 9 as const,
    conceptualDifference: 'Hedging expresses uncertainty or caution, common in academic writing. Assertive language expresses strong conviction. Spanish academic writing is more direct; English academia strongly prefers hedging.',
    conceptualDifferenceEs: 'El hedging expresa incertidumbre o cautela, común en escritura académica. El lenguaje asertivo expresa convicción fuerte. La escritura académica en español es más directa; la inglesa prefiere atenuar.',
    timeline: 'HEDGED: ----?????----  (uncertainty zone)\nASSERTIVE: ====!!!!=====  (certainty zone)',
    discriminationExercises: [
      { sentence: 'The evidence _____ that climate change affects biodiversity. (suggests / proves)', correctTense: 1, explanation: 'In academic English, "suggests" is preferred over "proves" unless the evidence is absolutely conclusive.', explanationEs: 'En inglés académico, "suggests" es preferible a "proves" a menos que la evidencia sea absolutamente concluyente.' },
      { sentence: 'This _____ demonstrates a correlation between the variables. (clearly / arguably)', correctTense: 2, explanation: '"Clearly demonstrates" is assertive and appropriate when the evidence is strong and direct.', explanationEs: '"Clearly demonstrates" es asertivo y apropiado cuando la evidencia es fuerte y directa.' },
      { sentence: 'The results _____ indicate a trend towards improvement. (appear to / definitely)', correctTense: 1, explanation: '"Appear to indicate" hedges the claim, which is appropriate for preliminary findings.', explanationEs: '"Appear to indicate" atenúa la afirmación, apropiado para hallazgos preliminares.' },
      { sentence: 'Unemployment _____ the primary cause of social unrest. (is arguably / is undoubtedly)', correctTense: 1, explanation: '"Arguably" acknowledges that other interpretations are possible.', explanationEs: '"Arguably" reconoce que otras interpretaciones son posibles.' },
    ],
    productionExercises: [
      { prompt: 'Rewrite assertively: "It could be suggested that social media affects mental health."', promptEs: 'Reescribe de forma asertiva: "It could be suggested that social media affects mental health."', expectedTense: 2, sampleAnswer: 'Social media clearly affects mental health.', hint: 'Remove hedging words and add boosters like "clearly" or "certainly".' },
      { prompt: 'Hedge this claim: "Homework improves student performance."', promptEs: 'Atenúa esta afirmación: "Homework improves student performance."', expectedTense: 1, sampleAnswer: 'Homework may contribute to improved student performance.', hint: 'Add modals (may, might, could) or verbs (suggest, appear, tend).' },
    ],
    errorHospital: [
      { wrong: 'This proves that the theory is correct.', correct: 'This suggests that the theory may be correct.', l1Cause: 'Spanish academic style uses direct assertions ("esto demuestra que"), while English prefers hedging.', l1CauseEs: 'El estilo académico en español usa afirmaciones directas ("esto demuestra que"), mientras que el inglés prefiere atenuar.' },
      { wrong: 'Obviously, poverty causes crime.', correct: 'It could be argued that poverty contributes to crime.', l1Cause: 'Spanish speakers transfer the directness of "obviamente" to English, which sounds dogmatic in academic writing.', l1CauseEs: 'Los hispanohablantes transfieren la franqueza de "obviamente", que suena dogmática en escritura académica inglesa.' },
    ],
    minimalPairs: [
      { sentence1: 'The data suggests a possible correlation.', meaning1: 'Hedged — cautious, acknowledges uncertainty', meaning1Es: 'Atenuado — cauteloso, reconoce incertidumbre', sentence2: 'The data proves a direct correlation.', meaning2: 'Assertive — strong, claims certainty', meaning2Es: 'Asertivo — fuerte, afirma certeza' },
      { sentence1: 'This approach may lead to better outcomes.', meaning1: 'Hedged — possibility, not guaranteed', meaning1Es: 'Atenuado — posibilidad, no garantizado', sentence2: 'This approach will lead to better outcomes.', meaning2: 'Assertive — guaranteed, certain', meaning2Es: 'Asertivo — garantizado, seguro' },
    ]
  },
  {
    id: 'level9-nominalization-vs-verbal',
    tense1: {
      name: 'Nominalized Style',
      nameEs: 'Estilo Nominalizado',
      formula: 'Noun phrase + of + noun (The investigation of the phenomenon)',
      keySignals: ['investigation', 'implementation', 'development', 'establishment', 'reduction', 'examination']
    },
    tense2: {
      name: 'Verbal Style',
      nameEs: 'Estilo Verbal',
      formula: 'Subject + verb + object (We investigated the phenomenon)',
      keySignals: ['investigate', 'implement', 'develop', 'establish', 'reduce', 'examine']
    },
    level: 9 as const,
    conceptualDifference: 'Nominalized style packs information densely and is typical of formal/academic writing. Verbal style is clearer and more dynamic, preferred in general communication. Over-nominalization makes text harder to read.',
    conceptualDifferenceEs: 'El estilo nominalizado condensa información y es típico de escritura formal/académica. El estilo verbal es más claro y dinámico, preferido en comunicación general. La sobre-nominalización dificulta la lectura.',
    timeline: 'NOMINAL: [The implementation] of [the strategy]...\nVERBAL:  [We] implemented [the strategy]...',
    discriminationExercises: [
      { sentence: '_____ of the new policy resulted in widespread changes. (The implementation / Implementing)', correctTense: 1, explanation: 'Nominalized form is more formal and appropriate for written reports.', explanationEs: 'La forma nominalizada es más formal y apropiada para informes escritos.' },
      { sentence: 'We need to _____ the problem before it escalates. (investigate / carry out an investigation of)', correctTense: 2, explanation: 'The verbal form is more natural and direct for spoken communication.', explanationEs: 'La forma verbal es más natural y directa para comunicación oral.' },
      { sentence: 'A thorough _____ of the data revealed significant trends. (examination / examining)', correctTense: 1, explanation: 'Nominalized form fits academic register in a formal sentence.', explanationEs: 'La forma nominalizada se ajusta al registro académico en una oración formal.' },
    ],
    productionExercises: [
      { prompt: 'Nominalize: "We developed the software and then tested it."', promptEs: 'Nominaliza: "We developed the software and then tested it."', expectedTense: 1, sampleAnswer: 'The development and subsequent testing of the software...', hint: 'Convert verbs to their noun forms: develop → development, test → testing.' },
      { prompt: 'De-nominalize: "The reduction of costs led to an improvement in profitability."', promptEs: 'Des-nominaliza: "The reduction of costs led to an improvement in profitability."', expectedTense: 2, sampleAnswer: 'We reduced costs, which improved profitability.', hint: 'Convert nouns back to verbs: reduction → reduced, improvement → improved.' },
    ],
    errorHospital: [
      { wrong: 'The carrying out of the analysis of the data was done.', correct: 'We analysed the data. / The data analysis was completed.', l1Cause: 'Spanish allows dense nominal chains (la realización del análisis de los datos), but English over-nominalization creates unreadable text.', l1CauseEs: 'El español permite cadenas nominales densas, pero en inglés la sobre-nominalización crea texto ilegible.' },
      { wrong: 'There was an establishment of a committee for the investigation.', correct: 'A committee was established to investigate.', l1Cause: 'Direct translation of "hubo un establecimiento de un comité" produces awkward English.', l1CauseEs: 'La traducción directa de "hubo un establecimiento de un comité" produce inglés torpe.' },
    ],
    minimalPairs: [
      { sentence1: 'The implementation of the policy was successful.', meaning1: 'Nominalized — formal, dense, academic', meaning1Es: 'Nominalizado — formal, denso, académico', sentence2: 'We implemented the policy successfully.', meaning2: 'Verbal — clear, dynamic, conversational', meaning2Es: 'Verbal — claro, dinámico, conversacional' },
      { sentence1: 'An examination of the evidence is required.', meaning1: 'Nominalized — impersonal, bureaucratic', meaning1Es: 'Nominalizado — impersonal, burocrático', sentence2: 'We need to examine the evidence.', meaning2: 'Verbal — direct, active, engaging', meaning2Es: 'Verbal — directo, activo, atractivo' },
    ]
  },

  // === LEVEL 10 CONTRASTS (C1+) ===
  {
    id: 'level10-cleft-vs-standard',
    tense1: {
      name: 'Cleft Sentences',
      nameEs: 'Oraciones Escindidas',
      formula: 'It is/was X that... / What X is/was...',
      keySignals: ['It is', 'It was', 'What', 'The thing that', 'The reason why', 'All I want']
    },
    tense2: {
      name: 'Standard Word Order',
      nameEs: 'Orden Estándar',
      formula: 'Subject + Verb + Object',
      keySignals: ['(neutral)', '(no fronting)', '(no emphasis marker)']
    },
    level: 10 as const,
    conceptualDifference: 'Cleft sentences split a simple sentence to emphasize one particular element. They are used for contrast, correction, or focus. Standard order is neutral and doesn\'t highlight any element.',
    conceptualDifferenceEs: 'Las oraciones escindidas dividen una oración simple para enfatizar un elemento particular. Se usan para contraste, corrección o foco. El orden estándar es neutro y no resalta ningún elemento.',
    timeline: 'STANDARD: John broke the window yesterday.\nCLEFT:    It was John who broke the window.\n          What John broke was the window.\n          It was yesterday that John broke the window.',
    discriminationExercises: [
      { sentence: '_____ the marketing team that proposed the new strategy. (It was / The)', correctTense: 1, explanation: 'The cleft "It was X that" emphasizes who proposed the strategy.', explanationEs: 'La estructura escindida "It was X that" enfatiza quién propuso la estrategia.' },
      { sentence: '_____ we need is more time to complete the project. (What / The thing)', correctTense: 1, explanation: '"What we need is..." is a pseudo-cleft that emphasizes the object of need.', explanationEs: '"What we need is..." es una pseudo-escindida que enfatiza el objeto de la necesidad.' },
      { sentence: 'The team completed the project ahead of schedule. (Standard or Cleft?)', correctTense: 2, explanation: 'No emphasis marker — this is standard neutral word order.', explanationEs: 'Sin marcador de énfasis — este es orden estándar neutro.' },
      { sentence: '_____ the lack of funding that caused the project to fail. (It was / The reason was)', correctTense: 1, explanation: '"It was X that" focuses blame on the specific cause.', explanationEs: '"It was X that" focaliza la culpa en la causa específica.' },
    ],
    productionExercises: [
      { prompt: 'Emphasize "the CEO" in: "The CEO approved the merger."', promptEs: 'Enfatiza "the CEO" en: "The CEO approved the merger."', expectedTense: 1, sampleAnswer: 'It was the CEO who approved the merger.', hint: 'Use "It was + focus element + who/that + rest of sentence".' },
      { prompt: 'Write a neutral version of: "What concerns me is the deadline."', promptEs: 'Escribe una versión neutra de: "What concerns me is the deadline."', expectedTense: 2, sampleAnswer: 'The deadline concerns me.', hint: 'Remove the cleft structure and use standard SVO order.' },
    ],
    errorHospital: [
      { wrong: 'It was the meeting what started late.', correct: 'It was the meeting that started late.', l1Cause: 'Spanish uses "lo que" for clefts, leading to "what" instead of "that" in English cleft sentences.', l1CauseEs: 'El español usa "lo que" en escindidas, causando "what" en vez de "that" en inglés.' },
      { wrong: 'What I want is that you come.', correct: 'What I want is for you to come.', l1Cause: 'Spanish "Lo que quiero es que vengas" uses subjunctive "que", but English uses "for + pronoun + to infinitive".', l1CauseEs: 'El español "Lo que quiero es que vengas" usa subjuntivo, pero el inglés usa "for + pronoun + to infinitive".' },
    ],
    minimalPairs: [
      { sentence1: 'It was Sarah who solved the problem.', meaning1: 'Cleft — emphatic, highlights Sarah', meaning1Es: 'Escindida — enfática, resalta a Sarah', sentence2: 'Sarah solved the problem.', meaning2: 'Standard — neutral, no emphasis', meaning2Es: 'Estándar — neutro, sin énfasis' },
      { sentence1: 'What we need is a complete restructuring.', meaning1: 'Pseudo-cleft — emphasizes the solution', meaning1Es: 'Pseudo-escindida — enfatiza la solución', sentence2: 'We need a complete restructuring.', meaning2: 'Standard — factual, no special emphasis', meaning2Es: 'Estándar — factual, sin énfasis especial' },
    ]
  },
  {
    id: 'level10-ellipsis-vs-full-form',
    tense1: {
      name: 'Ellipsis and Substitution',
      nameEs: 'Elipsis y Sustitución',
      formula: 'Omit repeated elements / Use "so", "do", "one"',
      keySignals: ['so', 'not', 'do so', 'one', 'ones', 'neither', 'nor', 'too', 'either']
    },
    tense2: {
      name: 'Full Explicit Form',
      nameEs: 'Forma Explícita Completa',
      formula: 'Repeat all elements in full',
      keySignals: ['(full repetition)', '(no omission)', '(explicit)']
    },
    level: 10 as const,
    conceptualDifference: 'Ellipsis omits recoverable elements to avoid redundancy, creating more natural-sounding English. Full forms are clearer but can sound repetitive and non-native. Spanish tolerates more repetition than English.',
    conceptualDifferenceEs: 'La elipsis omite elementos recuperables para evitar redundancia, creando inglés más natural. Las formas completas son más claras pero suenan repetitivas y no nativas. El español tolera más repetición que el inglés.',
    timeline: 'FULL:     "I like coffee and she likes coffee too."\nELLIPSIS: "I like coffee and she does too."',
    discriminationExercises: [
      { sentence: '"Can you help me?" — "I\'d like _____, but I\'m too busy." (to / to help you)', correctTense: 1, explanation: 'Ellipsis: "I\'d like to" is sufficient — repeating "help you" is redundant.', explanationEs: 'Elipsis: "I\'d like to" es suficiente — repetir "help you" es redundante.' },
      { sentence: '"She passed the exam and he _____ too." (did / passed the exam)', correctTense: 1, explanation: '"did" substitutes the entire verb phrase, which is more natural English.', explanationEs: '"did" sustituye toda la frase verbal, que es más natural en inglés.' },
      { sentence: '"I don\'t think it will rain." — "I hope _____." (not / it will not rain)', correctTense: 1, explanation: '"I hope not" uses ellipsis with "not" substituting the whole clause.', explanationEs: '"I hope not" usa elipsis con "not" sustituyendo toda la cláusula.' },
    ],
    productionExercises: [
      { prompt: 'Use ellipsis: "She wanted to travel and he also wanted to travel."', promptEs: 'Usa elipsis: "She wanted to travel and he also wanted to travel."', expectedTense: 1, sampleAnswer: 'She wanted to travel and so did he.', hint: 'Replace the repeated phrase with "so did he" or "he did too".' },
      { prompt: 'Expand to full form: "A: Will it work? B: I believe so."', promptEs: 'Expande a forma completa: "A: Will it work? B: I believe so."', expectedTense: 2, sampleAnswer: 'A: Will it work? B: I believe it will work.', hint: '"So" substitutes the clause "it will work".' },
    ],
    errorHospital: [
      { wrong: '"Do you want to come?" — "Yes, I want to come."', correct: '"Do you want to come?" — "Yes, I\'d love to."', l1Cause: 'Spanish repeats full forms naturally ("Sí, quiero ir"), but English uses ellipsis after "to" for naturalness.', l1CauseEs: 'El español repite formas completas naturalmente ("Sí, quiero ir"), pero el inglés usa elipsis después de "to".' },
      { wrong: 'She can speak French and he can speak French also.', correct: 'She can speak French and so can he.', l1Cause: 'Spanish "él también puede" translates literally with full repetition, but English prefers "so can he" inversion.', l1CauseEs: 'El español "él también puede" se traduce literalmente con repetición, pero el inglés prefiere la inversión "so can he".' },
    ],
    minimalPairs: [
      { sentence1: 'I think so.', meaning1: 'Ellipsis — natural, concise', meaning1Es: 'Elipsis — natural, conciso', sentence2: 'I think that it is correct.', meaning2: 'Full form — explicit, somewhat redundant', meaning2Es: 'Forma completa — explícita, algo redundante' },
      { sentence1: '"Are you coming?" — "I hope to."', meaning1: 'Ellipsis — elegant, native-sounding', meaning1Es: 'Elipsis — elegante, suena nativo', sentence2: '"Are you coming?" — "I hope to come."', meaning2: 'Full form — clear but slightly unnatural', meaning2Es: 'Forma completa — clara pero ligeramente no natural' },
    ]
  },
];

// Helper functions
export const getContrastPairsByLevel = (level: number): ContrastPair[] => {
  return grammarContrastPairs.filter(pair => pair.level <= level);
};

export const getContrastPairById = (id: string): ContrastPair | undefined => {
  return grammarContrastPairs.find(pair => pair.id === id);
};
