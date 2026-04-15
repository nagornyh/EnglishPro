// False Friends Grammar - Grammatical transfer errors from Spanish to English
// Errores de transferencia gramatical del español al inglés
// Focused on structural patterns where Spanish grammar interferes with English

export interface GrammaticalFalseFriend {
  id: string;
  category: 'verb-patterns' | 'prepositions' | 'articles' | 'word-order' | 'tense-mapping' | 'structures' | 'gender-number';
  level: 1 | 2 | 3 | 4;
  spanishPattern: string;
  spanishExample: string;
  wrongEnglish: string;
  correctEnglish: string;
  explanation: string;
  explanationEs: string;
  rule: string;
  ruleEs: string;
  moreExamples: {
    wrong: string;
    correct: string;
    context?: string;
  }[];
  practice: {
    prompt: string;
    promptEs: string;
    answer: string;
  }[];
}

export const grammaticalFalseFriends: GrammaticalFalseFriend[] = [
  // === VERB PATTERNS ===
  {
    id: 'gff-have-cold',
    category: 'verb-patterns',
    level: 1,
    spanishPattern: 'Tengo frío / calor / hambre / sed / sueño / miedo',
    spanishExample: 'Tengo frío.',
    wrongEnglish: 'I have cold.',
    correctEnglish: 'I am cold.',
    explanation: 'Spanish uses TENER (to have) for physical sensations. English uses BE (to be).',
    explanationEs: 'El español usa TENER para sensaciones físicas. El inglés usa BE (ser/estar).',
    rule: 'I am + cold/hot/hungry/thirsty/sleepy/afraid/scared',
    ruleEs: 'I am + cold/hot/hungry/thirsty/sleepy/afraid/scared',
    moreExamples: [
      { wrong: 'I have hot.', correct: 'I am hot.', context: 'Tengo calor' },
      { wrong: 'She has hunger.', correct: 'She is hungry.', context: 'Ella tiene hambre' },
      { wrong: 'We have thirst.', correct: 'We are thirsty.', context: 'Tenemos sed' },
      { wrong: 'He has sleep.', correct: 'He is sleepy.', context: 'Él tiene sueño' },
      { wrong: 'I have fear.', correct: 'I am afraid / scared.', context: 'Tengo miedo' },
    ],
    practice: [
      { prompt: 'Translate: "Tengo mucha hambre."', promptEs: 'Traduce: "Tengo mucha hambre."', answer: 'I am very hungry.' },
      { prompt: 'Translate: "Mi hijo tiene miedo de la oscuridad."', promptEs: 'Traduce: "Mi hijo tiene miedo de la oscuridad."', answer: 'My son is afraid of the dark.' },
    ]
  },
  {
    id: 'gff-have-years',
    category: 'verb-patterns',
    level: 1,
    spanishPattern: 'Tengo 25 años.',
    spanishExample: 'Tengo 25 años.',
    wrongEnglish: 'I have 25 years.',
    correctEnglish: 'I am 25 (years old).',
    explanation: 'Spanish uses TENER for age. English uses BE.',
    explanationEs: 'El español usa TENER para la edad. El inglés usa BE.',
    rule: 'I am + number + (years old)',
    ruleEs: 'I am + número + (years old)',
    moreExamples: [
      { wrong: 'She has 30 years.', correct: 'She is 30 years old.' },
      { wrong: 'How many years do you have?', correct: 'How old are you?' },
      { wrong: 'The building has 100 years.', correct: 'The building is 100 years old.' },
    ],
    practice: [
      { prompt: 'Ask someone\'s age politely', promptEs: 'Pregunta la edad de alguien', answer: 'How old are you?' },
      { prompt: 'Say your friend is 28', promptEs: 'Di que tu amigo tiene 28 años', answer: 'My friend is 28 years old.' },
    ]
  },
  {
    id: 'gff-hace-tiempo',
    category: 'tense-mapping',
    level: 2,
    spanishPattern: 'Hace 3 años que vivo aquí / Vivo aquí desde hace 3 años',
    spanishExample: 'Vivo aquí desde hace 3 años.',
    wrongEnglish: 'I live here since 3 years. / I live here for 3 years.',
    correctEnglish: 'I have lived here for 3 years.',
    explanation: 'Spanish uses Present Tense with "desde hace" for ongoing duration. English requires Present Perfect + for/since.',
    explanationEs: 'El español usa Presente con "desde hace" para duración continua. El inglés requiere Presente Perfecto + for/since.',
    rule: 'for + duration (for 3 years) | since + point in time (since 2020)',
    ruleEs: 'for + duración (for 3 years) | since + punto en el tiempo (since 2020)',
    moreExamples: [
      { wrong: 'I work here since 2020.', correct: 'I have worked here since 2020.' },
      { wrong: 'She knows him for 10 years.', correct: 'She has known him for 10 years.' },
      { wrong: 'We are married since June.', correct: 'We have been married since June.' },
      { wrong: 'How long do you study English?', correct: 'How long have you been studying English?' },
    ],
    practice: [
      { prompt: 'Say: "Estudio inglés desde hace 2 años."', promptEs: 'Traduce: "Estudio inglés desde hace 2 años."', answer: 'I have been studying English for 2 years.' },
      { prompt: 'Say: "Vivimos en esta casa desde 2015."', promptEs: 'Traduce: "Vivimos en esta casa desde 2015."', answer: 'We have lived in this house since 2015.' },
    ]
  },
  {
    id: 'gff-agree',
    category: 'verb-patterns',
    level: 2,
    spanishPattern: 'Estoy de acuerdo.',
    spanishExample: 'Estoy de acuerdo contigo.',
    wrongEnglish: 'I am agree with you.',
    correctEnglish: 'I agree with you.',
    explanation: '"Agree" is a verb in English, not an adjective. Do not use "be + agree".',
    explanationEs: '"Agree" es un verbo en inglés, no un adjetivo. No uses "be + agree".',
    rule: 'I agree / I don\'t agree / Do you agree? (no "am/is/are")',
    ruleEs: 'I agree / I don\'t agree / Do you agree? (sin "am/is/are")',
    moreExamples: [
      { wrong: 'She is agree.', correct: 'She agrees.' },
      { wrong: 'Are you agree?', correct: 'Do you agree?' },
      { wrong: 'They are not agree.', correct: 'They don\'t agree. / They disagree.' },
    ],
    practice: [
      { prompt: 'Express agreement with a colleague', promptEs: 'Expresa acuerdo con un colega', answer: 'I agree with you.' },
      { prompt: 'Ask if someone agrees', promptEs: 'Pregunta si alguien está de acuerdo', answer: 'Do you agree?' },
    ]
  },
  {
    id: 'gff-depend-on',
    category: 'prepositions',
    level: 2,
    spanishPattern: 'Depende de ti.',
    spanishExample: 'Depende de ti.',
    wrongEnglish: 'It depends of you.',
    correctEnglish: 'It depends on you.',
    explanation: 'Spanish "depender de" → English "depend on", not "depend of".',
    explanationEs: 'El español "depender de" → inglés "depend on", no "depend of".',
    rule: 'depend ON something/someone',
    ruleEs: 'depend ON something/someone',
    moreExamples: [
      { wrong: 'It depends of the weather.', correct: 'It depends on the weather.' },
      { wrong: 'Don\'t depend of others.', correct: 'Don\'t depend on others.' },
    ],
    practice: [
      { prompt: 'Say that the decision depends on the boss', promptEs: 'Di que la decisión depende del jefe', answer: 'The decision depends on the boss.' },
    ]
  },
  {
    id: 'gff-preposition-differences',
    category: 'prepositions',
    level: 2,
    spanishPattern: 'Soñar con / Pensar en / Casarse con / Consistir en',
    spanishExample: 'Soñé con ella.',
    wrongEnglish: 'I dreamed with her.',
    correctEnglish: 'I dreamed about/of her.',
    explanation: 'Spanish prepositions don\'t map directly to English. Must learn verb + preposition combinations.',
    explanationEs: 'Las preposiciones del español no se traducen directamente al inglés. Hay que aprender combinaciones verbo + preposición.',
    rule: 'dream about/of | think about/of | marry (no preposition!) | consist of',
    ruleEs: 'dream about/of | think about/of | marry (¡sin preposición!) | consist of',
    moreExamples: [
      { wrong: 'I think in my family.', correct: 'I think about my family.', context: 'Pienso en mi familia' },
      { wrong: 'She married with him.', correct: 'She married him.', context: 'Se casó con él' },
      { wrong: 'The team consists in 5 members.', correct: 'The team consists of 5 members.', context: 'El equipo consiste en 5 miembros' },
      { wrong: 'I listen the music.', correct: 'I listen to the music.', context: 'Escucho la música (escuchar + obj → listen TO + obj)' },
      { wrong: 'Wait me!', correct: 'Wait for me!', context: 'Espérame (esperar + obj → wait FOR + obj)' },
    ],
    practice: [
      { prompt: 'Translate: "Pienso en ti todo el día."', promptEs: 'Traduce: "Pienso en ti todo el día."', answer: 'I think about you all day.' },
      { prompt: 'Translate: "Se casó con su mejor amigo."', promptEs: 'Traduce: "Se casó con su mejor amigo."', answer: 'She married her best friend.' },
    ]
  },
  // === ARTICLES ===
  {
    id: 'gff-missing-article',
    category: 'articles',
    level: 1,
    spanishPattern: 'Soy profesor. / Ella es doctora.',
    spanishExample: 'Es profesor.',
    wrongEnglish: 'He is professor.',
    correctEnglish: 'He is a professor.',
    explanation: 'Spanish drops the article before professions ("soy ingeniero"). English requires a/an.',
    explanationEs: 'El español omite el artículo antes de profesiones ("soy ingeniero"). El inglés requiere a/an.',
    rule: 'Subject + is/am + a/an + profession',
    ruleEs: 'Subject + is/am + a/an + profesión',
    moreExamples: [
      { wrong: 'She is doctor.', correct: 'She is a doctor.' },
      { wrong: 'I am student.', correct: 'I am a student.' },
      { wrong: 'He became engineer.', correct: 'He became an engineer.' },
    ],
    practice: [
      { prompt: 'Say your profession using "I am"', promptEs: 'Di tu profesión usando "I am"', answer: 'I am a/an [profession].' },
    ]
  },
  {
    id: 'gff-extra-article',
    category: 'articles',
    level: 2,
    spanishPattern: 'La vida es bella. / El amor es ciego.',
    spanishExample: 'El inglés es difícil.',
    wrongEnglish: 'The English is difficult. / The life is beautiful.',
    correctEnglish: 'English is difficult. / Life is beautiful.',
    explanation: 'Spanish uses articles with abstract nouns and languages. English omits them for general concepts.',
    explanationEs: 'El español usa artículos con sustantivos abstractos e idiomas. El inglés los omite para conceptos generales.',
    rule: 'No "the" with: languages, abstract nouns (love, life, time, happiness), general plurals (dogs are loyal)',
    ruleEs: 'Sin "the" con: idiomas, sustantivos abstractos (love, life, time, happiness), plurales generales (dogs are loyal)',
    moreExamples: [
      { wrong: 'The love is patient.', correct: 'Love is patient.' },
      { wrong: 'The dogs are loyal animals.', correct: 'Dogs are loyal animals.', context: 'generalizing about all dogs' },
      { wrong: 'I like the chocolate.', correct: 'I like chocolate.', context: 'chocolate in general' },
      { wrong: 'The water is important for health.', correct: 'Water is important for health.', context: 'water in general' },
    ],
    practice: [
      { prompt: 'Say that music makes people happy (in general)', promptEs: 'Di que la música hace feliz a la gente (en general)', answer: 'Music makes people happy.' },
    ]
  },
  // === WORD ORDER ===
  {
    id: 'gff-adjective-order',
    category: 'word-order',
    level: 1,
    spanishPattern: 'Un coche rojo / Una persona interesante',
    spanishExample: 'Un libro interesante.',
    wrongEnglish: 'A book interesting.',
    correctEnglish: 'An interesting book.',
    explanation: 'Spanish puts adjectives AFTER the noun. English puts them BEFORE.',
    explanationEs: 'El español pone adjetivos DESPUÉS del sustantivo. El inglés los pone ANTES.',
    rule: 'adjective + noun (big house, red car, beautiful day)',
    ruleEs: 'adjetivo + sustantivo (big house, red car, beautiful day)',
    moreExamples: [
      { wrong: 'A car red.', correct: 'A red car.' },
      { wrong: 'A person tall.', correct: 'A tall person.' },
      { wrong: 'Something important happened.', correct: 'Something important happened.', context: 'Exception: with something/anything/nothing, adjective goes AFTER' },
    ],
    practice: [
      { prompt: 'Describe a big white house', promptEs: 'Describe una casa grande y blanca', answer: 'A big white house.' },
    ]
  },
  {
    id: 'gff-question-word-order',
    category: 'word-order',
    level: 1,
    spanishPattern: '¿Dónde vives? / ¿Qué haces?',
    spanishExample: '¿Dónde trabaja ella?',
    wrongEnglish: 'Where works she? / Where she works?',
    correctEnglish: 'Where does she work?',
    explanation: 'English questions need auxiliary verbs (do/does/did/is/are). Spanish inverts subject-verb directly.',
    explanationEs: 'Las preguntas en inglés necesitan verbos auxiliares (do/does/did/is/are). El español invierte sujeto-verbo directamente.',
    rule: 'Wh- + auxiliary (do/does/did/is/are) + subject + base verb?',
    ruleEs: 'Wh- + auxiliar (do/does/did/is/are) + sujeto + verbo base?',
    moreExamples: [
      { wrong: 'What means this word?', correct: 'What does this word mean?' },
      { wrong: 'Where you live?', correct: 'Where do you live?' },
      { wrong: 'How much costs this?', correct: 'How much does this cost?' },
      { wrong: 'Why you are crying?', correct: 'Why are you crying?' },
    ],
    practice: [
      { prompt: 'Ask someone what they do for work', promptEs: 'Pregunta a alguien en qué trabaja', answer: 'What do you do for a living?' },
      { prompt: 'Ask where your friend lives', promptEs: 'Pregunta dónde vive tu amigo', answer: 'Where does your friend live?' },
    ]
  },
  // === TENSE MAPPING ERRORS ===
  {
    id: 'gff-subjunctive-mapping',
    category: 'tense-mapping',
    level: 3,
    spanishPattern: 'Quiero que vengas. / Espero que entiendas.',
    spanishExample: 'Quiero que vayas al médico.',
    wrongEnglish: 'I want that you go to the doctor.',
    correctEnglish: 'I want you to go to the doctor.',
    explanation: 'Spanish uses subjunctive clauses (que + subjuntivo). English uses infinitive constructions (someone + to + verb).',
    explanationEs: 'El español usa cláusulas de subjuntivo (que + subjuntivo). El inglés usa construcciones con infinitivo (someone + to + verb).',
    rule: 'want/need/expect/would like + SOMEONE + TO + VERB',
    ruleEs: 'want/need/expect/would like + ALGUIEN + TO + VERB',
    moreExamples: [
      { wrong: 'I need that you help me.', correct: 'I need you to help me.' },
      { wrong: 'She expects that I arrive early.', correct: 'She expects me to arrive early.' },
      { wrong: 'I would like that you come.', correct: 'I would like you to come.' },
      { wrong: 'He told that I go.', correct: 'He told me to go.' },
    ],
    practice: [
      { prompt: 'Translate: "Necesito que me ayudes."', promptEs: 'Traduce: "Necesito que me ayudes."', answer: 'I need you to help me.' },
      { prompt: 'Translate: "Me gustaría que vinieras a la fiesta."', promptEs: 'Traduce: "Me gustaría que vinieras a la fiesta."', answer: 'I would like you to come to the party.' },
    ]
  },
  {
    id: 'gff-ser-estar',
    category: 'verb-patterns',
    level: 2,
    spanishPattern: 'Ser vs Estar → both "to be" in English',
    spanishExample: 'Es aburrido. / Está aburrido.',
    wrongEnglish: 'Mixing up adjective meanings that depend on ser/estar distinction.',
    correctEnglish: 'He is boring. (personality) vs He is bored. (feeling)',
    explanation: 'Spanish distinguishes ser (permanent/inherent) vs estar (state/condition) with different adjective forms. English uses different adjective words: -ing (cause) vs -ed (feeling).',
    explanationEs: 'El español distingue ser (permanente/inherente) vs estar (estado/condición). El inglés usa diferentes adjetivos: -ing (causa) vs -ed (sentimiento).',
    rule: '-ing = the person/thing CAUSES the feeling | -ed = the person EXPERIENCES the feeling',
    ruleEs: '-ing = la persona/cosa CAUSA el sentimiento | -ed = la persona EXPERIMENTA el sentimiento',
    moreExamples: [
      { wrong: 'The movie was bored.', correct: 'The movie was boring.', context: 'The movie causes boredom' },
      { wrong: 'I am interesting in science.', correct: 'I am interested in science.', context: 'I experience interest' },
      { wrong: 'The news is surprised.', correct: 'The news is surprising.', context: 'The news causes surprise' },
      { wrong: 'She was very exciting about the trip.', correct: 'She was very excited about the trip.' },
    ],
    practice: [
      { prompt: 'Say: "La película fue aburrida" (the movie caused boredom)', promptEs: 'Di: "La película fue aburrida" (la película causó aburrimiento)', answer: 'The movie was boring.' },
      { prompt: 'Say: "Estoy emocionado por las vacaciones."', promptEs: 'Di: "Estoy emocionado por las vacaciones."', answer: 'I am excited about the vacation.' },
    ]
  },
  {
    id: 'gff-double-negative',
    category: 'structures',
    level: 2,
    spanishPattern: 'No tengo nada. / No conozco a nadie.',
    spanishExample: 'No quiero nada.',
    wrongEnglish: 'I don\'t want nothing.',
    correctEnglish: 'I don\'t want anything. / I want nothing.',
    explanation: 'Spanish uses double negatives (no...nada, no...nadie). Standard English uses only ONE negative.',
    explanationEs: 'El español usa doble negación (no...nada, no...nadie). El inglés estándar usa solo UNA negación.',
    rule: 'don\'t + anything/anyone/anywhere OR nothing/nobody/nowhere (choose ONE negative)',
    ruleEs: 'don\'t + anything/anyone/anywhere O nothing/nobody/nowhere (elige UNA negación)',
    moreExamples: [
      { wrong: 'I don\'t know nobody.', correct: 'I don\'t know anybody. / I know nobody.' },
      { wrong: 'She didn\'t go nowhere.', correct: 'She didn\'t go anywhere. / She went nowhere.' },
      { wrong: 'We don\'t have nothing to eat.', correct: 'We don\'t have anything to eat. / We have nothing to eat.' },
    ],
    practice: [
      { prompt: 'Translate: "No conozco a nadie aquí."', promptEs: 'Traduce: "No conozco a nadie aquí."', answer: 'I don\'t know anybody here. / I know nobody here.' },
    ]
  },
  {
    id: 'gff-it-is-necessary',
    category: 'structures',
    level: 2,
    spanishPattern: 'Es necesario / Es importante / Es posible (que...)',
    spanishExample: 'Es necesario estudiar más.',
    wrongEnglish: 'Is necessary to study more.',
    correctEnglish: 'It is necessary to study more.',
    explanation: 'Spanish allows subjectless impersonal sentences ("Es necesario"). English always requires a subject, often the dummy "it".',
    explanationEs: 'El español permite oraciones impersonales sin sujeto ("Es necesario"). El inglés siempre requiere un sujeto, a menudo el "it" expletivo.',
    rule: 'IT + is + adjective + to + verb (It is important to exercise)',
    ruleEs: 'IT + is + adjective + to + verb (It is important to exercise)',
    moreExamples: [
      { wrong: 'Is important to arrive on time.', correct: 'It is important to arrive on time.' },
      { wrong: 'Is raining.', correct: 'It is raining.' },
      { wrong: 'Is cold today.', correct: 'It is cold today.' },
      { wrong: 'Is possible to change the date?', correct: 'Is it possible to change the date?' },
    ],
    practice: [
      { prompt: 'Say: "Es difícil aprender un idioma."', promptEs: 'Traduce: "Es difícil aprender un idioma."', answer: 'It is difficult to learn a language.' },
    ]
  },
  {
    id: 'gff-people-is',
    category: 'gender-number',
    level: 2,
    spanishPattern: 'La gente es / La policía es (singular in Spanish)',
    spanishExample: 'La gente es amable.',
    wrongEnglish: 'People is nice. / The police is coming.',
    correctEnglish: 'People are nice. / The police are coming.',
    explanation: '"People" and "police" are always PLURAL in English (despite Spanish "gente" and "policía" being singular).',
    explanationEs: '"People" y "police" son siempre PLURALES en inglés (aunque "gente" y "policía" son singulares en español).',
    rule: 'people ARE / police ARE / children ARE (irregular plurals take plural verbs)',
    ruleEs: 'people ARE / police ARE / children ARE (plurales irregulares llevan verbos en plural)',
    moreExamples: [
      { wrong: 'People is worried.', correct: 'People are worried.' },
      { wrong: 'The police has arrived.', correct: 'The police have arrived.' },
      { wrong: 'Children is playing.', correct: 'Children are playing.' },
    ],
    practice: [
      { prompt: 'Say: "La gente está contenta."', promptEs: 'Traduce: "La gente está contenta."', answer: 'People are happy.' },
    ]
  },
  {
    id: 'gff-enjoy',
    category: 'verb-patterns',
    level: 2,
    spanishPattern: 'Disfruto + infinitivo / Me gusta + infinitivo',
    spanishExample: 'Disfruto nadar.',
    wrongEnglish: 'I enjoy to swim.',
    correctEnglish: 'I enjoy swimming.',
    explanation: 'Some English verbs take -ing (gerund), not infinitive. Spanish always uses infinitive after these verbs.',
    explanationEs: 'Algunos verbos en inglés requieren -ing (gerundio), no infinitivo. El español siempre usa infinitivo.',
    rule: 'enjoy/avoid/finish/suggest/mind/keep/practice + VERB-ING',
    ruleEs: 'enjoy/avoid/finish/suggest/mind/keep/practice + VERBO-ING',
    moreExamples: [
      { wrong: 'I avoid to eat sugar.', correct: 'I avoid eating sugar.' },
      { wrong: 'She finished to cook.', correct: 'She finished cooking.' },
      { wrong: 'He suggested to go out.', correct: 'He suggested going out.' },
      { wrong: 'Do you mind to wait?', correct: 'Do you mind waiting?' },
    ],
    practice: [
      { prompt: 'Translate: "Disfruto leyendo libros."', promptEs: 'Traduce: "Disfruto leyendo libros."', answer: 'I enjoy reading books.' },
      { prompt: 'Translate: "Evita comer comida rápida."', promptEs: 'Traduce: "Evita comer comida rápida."', answer: 'Avoid eating fast food.' },
    ]
  },
  {
    id: 'gff-possessive-with-body',
    category: 'structures',
    level: 1,
    spanishPattern: 'Me duele la cabeza. / Se lavó las manos.',
    spanishExample: 'Me duele la cabeza.',
    wrongEnglish: 'Me hurts the head. / I have pain in the head.',
    correctEnglish: 'My head hurts. / I have a headache.',
    explanation: 'Spanish uses reflexive + definite article for body parts. English uses possessive adjective (my/your/his).',
    explanationEs: 'El español usa reflexivo + artículo definido para partes del cuerpo. El inglés usa adjetivo posesivo (my/your/his).',
    rule: 'MY head / YOUR hand / HIS arm (not "the head / the hand / the arm")',
    ruleEs: 'MY head / YOUR hand / HIS arm (no "the head / the hand / the arm")',
    moreExamples: [
      { wrong: 'I broke the arm.', correct: 'I broke my arm.' },
      { wrong: 'She washed the hands.', correct: 'She washed her hands.' },
      { wrong: 'He raised the hand.', correct: 'He raised his hand.' },
    ],
    practice: [
      { prompt: 'Say: "Me duele la espalda."', promptEs: 'Traduce: "Me duele la espalda."', answer: 'My back hurts.' },
    ]
  },

  // === LEVEL 3 — B2 STRUCTURAL FALSE FRIENDS (additional entries) ===
  {
    id: 'gff-conditional-mapping',
    category: 'tense-mapping',
    level: 3,
    spanishPattern: 'Si tuviera dinero, compraría... / Condicional → would',
    spanishExample: 'Si tuviera más tiempo, estudiaría más.',
    wrongEnglish: 'If I would have more time, I would study more.',
    correctEnglish: 'If I had more time, I would study more.',
    explanation: 'In second conditional, the IF clause uses simple past — NOT "would". Spanish imperfect subjunctive maps to English simple past in the "if" clause only.',
    explanationEs: 'En el condicional 2, la cláusula IF usa pasado simple — NO "would". El subjuntivo imperfecto español se mapea al pasado simple en la cláusula "if".',
    rule: 'IF + past simple + WOULD + infinitive (second conditional)',
    ruleEs: 'IF + pasado simple + WOULD + infinitivo (condicional 2)',
    moreExamples: [
      { wrong: 'If I would be rich, I would travel.', correct: 'If I were rich, I would travel.' },
      { wrong: 'If she would know the answer, she would tell you.', correct: 'If she knew the answer, she would tell you.' },
      { wrong: 'If we would have a car, we would go.', correct: 'If we had a car, we would go.' },
    ],
    practice: [
      { prompt: 'Translate: "Si pudiera, viviría en el campo."', promptEs: 'Traduce: "Si pudiera, viviría en el campo."', answer: 'If I could, I would live in the countryside.' },
      { prompt: 'Translate: "¿Qué harías si ganaras la lotería?"', promptEs: 'Traduce: "¿Qué harías si ganaras la lotería?"', answer: 'What would you do if you won the lottery?' },
    ]
  },
  {
    id: 'gff-reported-speech',
    category: 'tense-mapping',
    level: 3,
    spanishPattern: 'Dijo que tenía hambre. (same tense backshift in both)',
    spanishExample: 'Dijo que estaba cansado.',
    wrongEnglish: 'He said that he is tired.',
    correctEnglish: 'He said that he was tired.',
    explanation: 'In reported speech, English obligatorily backshifts the tense (is→was, can→could, will→would). Spanish does the same but learners forget to apply it in English.',
    explanationEs: 'En el estilo indirecto, el inglés cambia el tiempo verbal obligatoriamente (is→was, can→could, will→would). El español hace lo mismo pero los estudiantes olvidan aplicarlo en inglés.',
    rule: 'said/told me + that + PAST tense (backshift: is→was, will→would, can→could)',
    ruleEs: 'said/told me + that + tiempo PASADO (retroceso: is→was, will→would, can→could)',
    moreExamples: [
      { wrong: 'She told me she will come.', correct: 'She told me she would come.' },
      { wrong: 'He said he can help.', correct: 'He said he could help.' },
      { wrong: 'They said the meeting is tomorrow.', correct: 'They said the meeting was tomorrow.' },
    ],
    practice: [
      { prompt: 'Report: He said "I will call you." → He said he ___', promptEs: 'Reporta: "Te llamaré" → He said he ___', answer: 'He said he would call me.' },
      { prompt: 'Report: She said "I can\'t come." → She said she ___', promptEs: 'Reporta: "No puedo venir." → She said she ___', answer: 'She said she couldn\'t come.' },
    ]
  },
  {
    id: 'gff-gerund-infinitive-B2',
    category: 'verb-patterns',
    level: 3,
    spanishPattern: 'Dejar de + infinitivo / Seguir + gerundio',
    spanishExample: 'Dejé de fumar. / Sigue lloviendo.',
    wrongEnglish: 'I stopped to smoke. / Continue to rain.',
    correctEnglish: 'I stopped smoking. / It keeps raining.',
    explanation: 'Verbs like stop, remember, regret, try change meaning with gerund vs infinitive. Spanish infinitivo maps to English gerund after "stop/quit".',
    explanationEs: 'Verbos como stop, remember, regret, try cambian de significado con gerundio vs infinitivo. El infinitivo español se mapea al gerundio después de "stop/quit".',
    rule: 'stop/quit/give up + GERUND (-ing) = stop the action | stop + INFINITIVE = stop in order to do sth',
    ruleEs: 'stop/quit/give up + GERUNDIO (-ing) = dejar la acción | stop + INFINITIVO = parar para hacer algo',
    moreExamples: [
      { wrong: 'I quit to eat junk food.', correct: 'I quit eating junk food.', context: 'Dejé de comer comida basura' },
      { wrong: 'She stopped to work here last year.', correct: 'She stopped working here last year.', context: 'Dejó de trabajar aquí' },
      { wrong: 'He gave up to play football.', correct: 'He gave up playing football.' },
    ],
    practice: [
      { prompt: 'Translate: "Dejé de beber café."', promptEs: 'Traduce: "Dejé de beber café."', answer: 'I stopped drinking coffee. / I gave up coffee.' },
      { prompt: 'Translate: "Siguió hablando por horas."', promptEs: 'Traduce: "Siguió hablando por horas."', answer: 'He kept talking for hours.' },
    ]
  },
  {
    id: 'gff-passive-agent',
    category: 'structures',
    level: 3,
    spanishPattern: 'Fue construido por los romanos. / El pasivo con "por"',
    spanishExample: 'El puente fue construido por los ingenieros.',
    wrongEnglish: 'The bridge was constructed for the engineers.',
    correctEnglish: 'The bridge was built by the engineers.',
    explanation: 'Spanish "por" in passive sentences maps to English "by", NOT "for". "For" indicates purpose or benefit, not the agent who performs the action.',
    explanationEs: 'El "por" español en oraciones pasivas se mapea a "by" en inglés, NO a "for". "For" indica propósito o beneficio, no el agente que realiza la acción.',
    rule: 'passive: was + past participle + BY + agent',
    ruleEs: 'pasiva: was + participio pasado + BY + agente',
    moreExamples: [
      { wrong: 'The letter was written for my mother.', correct: 'The letter was written by my mother.', context: 'La carta fue escrita por mi madre' },
      { wrong: 'The law was approved for the government.', correct: 'The law was approved by the government.' },
      { wrong: 'The painting was made for Picasso.', correct: 'The painting was made by Picasso.' },
    ],
    practice: [
      { prompt: 'Translate: "La película fue dirigida por Spielberg."', promptEs: 'Traduce: "La película fue dirigida por Spielberg."', answer: 'The film was directed by Spielberg.' },
      { prompt: 'Translate: "El edificio fue diseñado por arquitectos famosos."', promptEs: 'Traduce: "El edificio fue diseñado por arquitectos famosos."', answer: 'The building was designed by famous architects.' },
    ]
  },
  {
    id: 'gff-prepositional-verbs-B2',
    category: 'prepositions',
    level: 3,
    spanishPattern: 'Depender de / Casarse con / Soñar con / Confiar en',
    spanishExample: 'Me casé con ella. / Sueño con ser famoso.',
    wrongEnglish: 'I married with her. / I dream with being famous.',
    correctEnglish: 'I married her. / I dream of/about being famous.',
    explanation: 'Many Spanish verbs require prepositions that English verbs do NOT use, or use different ones. Verb complementation must be learned separately.',
    explanationEs: 'Muchos verbos españoles requieren preposiciones que los verbos ingleses NO usan, o usan diferentes. La complementación verbal debe aprenderse por separado.',
    rule: 'marry sb (no "with") | dream of/about | depend on | trust sb (no preposition) | consist of',
    ruleEs: 'marry sb (sin "with") | dream of/about | depend on | trust sb (sin preposición) | consist of',
    moreExamples: [
      { wrong: 'It depends of the weather.', correct: 'It depends on the weather.', context: 'Depende del tiempo' },
      { wrong: 'We arrived to Madrid.', correct: 'We arrived in Madrid. / We arrived at the station.', context: 'Llegamos a Madrid' },
      { wrong: 'He congratulated to her.', correct: 'He congratulated her.' },
      { wrong: 'I agree with go.', correct: 'I agree to go. / I agree with the idea.' },
    ],
    practice: [
      { prompt: 'Translate: "Eso depende de ti."', promptEs: 'Traduce: "Eso depende de ti."', answer: 'That depends on you.' },
      { prompt: 'Translate: "Me casé con mi mejor amigo."', promptEs: 'Traduce: "Me casé con mi mejor amigo."', answer: 'I married my best friend.' },
    ]
  },

  // === LEVEL 4 — C1/C2 ADVANCED STRUCTURAL FALSE FRIENDS ===
  {
    id: 'gff-subjunctive-wish',
    category: 'structures',
    level: 4,
    spanishPattern: 'Espero que él venga. / Quiero que ella haga...',
    spanishExample: 'Quiero que él estudie más.',
    wrongEnglish: 'I want that he studies more.',
    correctEnglish: 'I want him to study more.',
    explanation: 'Spanish uses a subjunctive clause (que + subjuntivo). English uses object + to-infinitive. The "that + subjunctive" pattern does NOT transfer.',
    explanationEs: 'El español usa cláusula de subjuntivo (que + subjuntivo). El inglés usa objeto + to-infinitivo. El patrón "that + subjuntivo" NO se traslada.',
    rule: 'want/need/expect/prefer + object + to + base verb',
    ruleEs: 'want/need/expect/prefer + objeto + to + verbo base',
    moreExamples: [
      { wrong: 'She needs that he finishes the report.', correct: 'She needs him to finish the report.' },
      { wrong: 'I prefer that you come early.', correct: 'I prefer you to come early. / I\'d prefer it if you came early.' },
      { wrong: 'They expect that we arrive on time.', correct: 'They expect us to arrive on time.' },
    ],
    practice: [
      { prompt: 'Translate: "Necesito que ella me llame."', promptEs: 'Traduce: "Necesito que ella me llame."', answer: 'I need her to call me.' },
      { prompt: 'Translate: "El jefe quiere que trabajemos los sábados."', promptEs: 'Traduce al inglés.', answer: 'The boss wants us to work on Saturdays.' },
    ]
  },
  {
    id: 'gff-hacer-causative',
    category: 'structures',
    level: 4,
    spanishPattern: 'Hacer + infinitivo (causativo)',
    spanishExample: 'Le hice limpiar la habitación.',
    wrongEnglish: 'I made him to clean the room.',
    correctEnglish: 'I made him clean the room.',
    explanation: 'Spanish "hacer" causative = English "make". But English causative make + object + BASE verb (NO to). Compare: "let" → no to; "get" → needs to.',
    explanationEs: '"Hacer" causativo en español = "make" en inglés. Pero make + objeto + BASE del verbo (SIN to). Comparar: "let" → sin to; "get" → con to.',
    rule: 'make + object + base verb (no to) | let + object + base verb (no to) | get + object + to-infinitive',
    ruleEs: 'make + objeto + base (sin to) | let + objeto + base (sin to) | get + objeto + to-infinitivo',
    moreExamples: [
      { wrong: 'She let me to borrow her car.', correct: 'She let me borrow her car.', context: 'let = sin to' },
      { wrong: 'He got her help him.', correct: 'He got her to help him.', context: 'get = con to' },
      { wrong: 'They made the students to wait.', correct: 'They made the students wait.', context: 'make = sin to' },
    ],
    practice: [
      { prompt: 'Translate: "Les hizo esperar dos horas."', promptEs: 'Traduce: "Les hizo esperar dos horas."', answer: 'She made them wait two hours.' },
      { prompt: 'Translate: "Conseguí que el cliente aceptara la propuesta."', promptEs: 'Traduce: "Conseguí que el cliente aceptara la propuesta."', answer: 'I got the client to accept the proposal.' },
    ]
  },
  {
    id: 'gff-inversion-negatives',
    category: 'word-order',
    level: 4,
    spanishPattern: 'Nunca he visto... / Apenas pude... (no inversión)',
    spanishExample: 'Nunca he visto algo tan impresionante.',
    wrongEnglish: 'Never I have seen anything so impressive.',
    correctEnglish: 'Never have I seen anything so impressive.',
    explanation: 'In formal/literary English, starting with negative adverbs (never, rarely, seldom, not only, hardly, scarcely) triggers SUBJECT-AUXILIARY INVERSION. Spanish does not have this inversion.',
    explanationEs: 'En inglés formal/literario, empezar con adverbios negativos (never, rarely, seldom, not only, hardly, scarcely) provoca INVERSIÓN SUJETO-AUXILIAR. El español no tiene esta inversión.',
    rule: 'Negative adverb + auxiliary + subject + main verb',
    ruleEs: 'Adverbio negativo + auxiliar + sujeto + verbo principal',
    moreExamples: [
      { wrong: 'Rarely she leaves the office before 8pm.', correct: 'Rarely does she leave the office before 8pm.' },
      { wrong: 'Not only he won, but he broke the record.', correct: 'Not only did he win, but he broke the record.' },
      { wrong: 'Hardly I had sat down when the phone rang.', correct: 'Hardly had I sat down when the phone rang.' },
    ],
    practice: [
      { prompt: 'Rewrite formally: "She rarely speaks in public."', promptEs: 'Reescribe: "She rarely speaks in public."', answer: 'Rarely does she speak in public.' },
      { prompt: 'Rewrite: "I had barely closed my eyes when the alarm went off."', promptEs: 'Reescribe con inversión.', answer: 'Barely had I closed my eyes when the alarm went off.' },
    ]
  },
  {
    id: 'gff-though-although',
    category: 'structures',
    level: 4,
    spanishPattern: 'Aunque + indicativo/subjuntivo',
    spanishExample: 'Aunque esté cansado, iré. / Aunque está cansado, va.',
    wrongEnglish: 'Although she being tired, she worked.',
    correctEnglish: 'Although she was tired, she worked. / Tired as she was, she worked.',
    explanation: 'Spanish "aunque" can use indicative or subjunctive. English uses "although + full clause" or the literary inversion "adjective + as + subject + verb" (known as "as-inversion").',
    explanationEs: '"Aunque" español puede usar indicativo o subjuntivo. El inglés usa "although + cláusula completa" o la inversión literaria "adjetivo + as + sujeto + verbo" (llamada "as-inversion").',
    rule: 'Although/even though + subject + verb | Adj + as + subject + verb (literary)',
    ruleEs: 'Although/even though + sujeto + verbo | Adj + as + sujeto + verbo (literario)',
    moreExamples: [
      { wrong: 'Although being expensive, I bought it.', correct: 'Although it was expensive, I bought it. / Expensive as it was, I bought it.' },
      { wrong: 'Even though being late, she finished the work.', correct: 'Even though she was late, she finished the work.' },
      { wrong: 'Tired although he was, he continued.', correct: 'Tired as he was, he continued. (as-inversion: adj first)' },
    ],
    practice: [
      { prompt: 'Complete: "_____ (though/tired), she refused to stop." (Use as-inversion)', promptEs: 'Completa con as-inversion.', answer: 'Tired as she was, she refused to stop.' },
      { prompt: 'Translate: "Aunque no tiene experiencia, es muy capaz."', promptEs: 'Traduce.', answer: 'Although she has no experience, she is very capable. / Inexperienced as she is, she is very capable.' },
    ]
  },
  {
    id: 'gff-it-seems',
    category: 'structures',
    level: 4,
    spanishPattern: 'Parece que... / Se dice que... / Se cree que...',
    spanishExample: 'Se dice que él es el mejor.',
    wrongEnglish: 'It is said that he is the best. (common) // He is said to be the best. (not known)',
    correctEnglish: 'He is said to be the best. / It is said that he is the best.',
    explanation: 'Both "It is said that" and "Subject + is said to be" are correct. However, C2 writers and academics prefer the "subject + reporting verb (passive) + to-infinitive" structure as it sounds more elegant and allows for complex nominal groups.',
    explanationEs: 'Tanto "It is said that" como "Subject + is said to be" son correctos. Sin embargo, escritores C2 y académicos prefieren la estructura "sujeto + verbo de reporte (pasiva) + to-infinitivo" por ser más elegante.',
    rule: 'Subject + is/are + reported/said/believed/known/considered + to-infinitive',
    ruleEs: 'Sujeto + is/are + reported/said/believed/known/considered + to-infinitivo',
    moreExamples: [
      { wrong: 'It is known that the economy will improve.', correct: 'The economy is known to be improving. (preferred in academic writing)' },
      { wrong: 'People believe that she is guilty.', correct: 'She is believed to be guilty.' },
      { wrong: 'They reported that the fire started at midnight.', correct: 'The fire is reported to have started at midnight.' },
    ],
    practice: [
      { prompt: 'Rewrite formally: "People say that the CEO resigned."', promptEs: 'Reescribe formalmente.', answer: 'The CEO is said to have resigned.' },
      { prompt: 'Rewrite: "Scientists believe that the drug is effective."', promptEs: 'Reescribe con sujeto + is believed + to-infinitive.', answer: 'The drug is believed to be effective.' },
    ]
  },
];

// Helper functions
export const getGrammaticalFalseFriendsByLevel = (level: number): GrammaticalFalseFriend[] => {
  return grammaticalFalseFriends.filter(gff => gff.level <= level);
};

export const getGrammaticalFalseFriendsByCategory = (category: GrammaticalFalseFriend['category']): GrammaticalFalseFriend[] => {
  return grammaticalFalseFriends.filter(gff => gff.category === category);
};
