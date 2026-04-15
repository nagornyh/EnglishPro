// L1 Interference Layer (Spanish → English)
// Cross-cutting layer: modifies hints and feedback based on common
// Spanish speaker error patterns. Connects to grammatical-false-friends
// and error-classification for a comprehensive transfer-error approach.

export interface L1InterferenceRule {
  id: string;
  area: 'phonology' | 'morphology' | 'syntax' | 'lexis' | 'pragmatics';
  title: string;
  titleEs: string;
  level: 1 | 2 | 3 | 4;
  spanishPattern: string;
  englishTarget: string;
  explanation: string;
  explanationEs: string;
  examples: { spanish: string; wrongEnglish: string; correctEnglish: string }[];
  awarenessActivity: {
    prompt: string;
    promptEs: string;
    expectedInsight: string;
  };
  practiceItems: string[];
  relatedFalseFriendIds?: string[];  // Links to grammatical-false-friends.ts
  relatedErrorClassIds?: string[];   // Links to error-classification.ts
}

export const l1InterferenceRules: L1InterferenceRule[] = [
  // === PHONOLOGY ===
  {
    id: 'l1-phon-initial-s',
    area: 'phonology',
    title: 'Initial /s/ + consonant clusters',
    titleEs: 'Grupos /s/ + consonante iniciales',
    level: 1,
    spanishPattern: 'Spanish adds /e/ before initial s+consonant: "school" → "eschool"',
    englishTarget: 'Start directly with /s/: school, speak, start, study, snow',
    explanation: 'Spanish doesn\'t allow s+consonant at the start of a word (escuela, España, estudiar), so speakers add /e/.',
    explanationEs: 'El español no permite s+consonante al inicio de palabra (escuela, España, estudiar), así que los hablantes añaden /e/.',
    examples: [
      { spanish: 'escuela', wrongEnglish: 'eschool', correctEnglish: 'school' },
      { spanish: 'España', wrongEnglish: 'eSpain', correctEnglish: 'Spain' },
      { spanish: 'especial', wrongEnglish: 'especial', correctEnglish: 'special (/sp/)' },
    ],
    awarenessActivity: {
      prompt: 'Record yourself saying: "Spanish students study special subjects in school." Listen back — do you hear an /e/ before any s+consonant?',
      promptEs: 'Grábate diciendo: "Spanish students study special subjects in school." Escúchalo — ¿oyes una /e/ antes de algún s+consonante?',
      expectedInsight: 'Many Spanish speakers add /e/ before "Spanish", "students", "study", "special", "subjects", and "school".',
    },
    practiceItems: ['start', 'speak', 'snow', 'smile', 'strict', 'strength', 'splash', 'screen'],
  },
  {
    id: 'l1-phon-vowel-length',
    area: 'phonology',
    title: 'Short vs. Long vowels',
    titleEs: 'Vocales cortas vs. largas',
    level: 1,
    spanishPattern: 'Spanish has 5 simple vowels with no length distinction',
    englishTarget: 'English distinguishes short/long vowels: ship ≠ sheep, bit ≠ beat',
    explanation: 'Spanish vowels don\'t change meaning based on length. English has minimal pairs where length changes meaning.',
    explanationEs: 'Las vocales españolas no cambian significado según duración. El inglés tiene pares mínimos donde la duración cambia significado.',
    examples: [
      { spanish: 'No distinction', wrongEnglish: 'ship = sheep', correctEnglish: 'ship /ɪ/ ≠ sheep /iː/' },
      { spanish: 'No distinction', wrongEnglish: 'full = fool', correctEnglish: 'full /ʊ/ ≠ fool /uː/' },
      { spanish: 'No distinction', wrongEnglish: 'hit = heat', correctEnglish: 'hit /ɪ/ ≠ heat /iː/' },
    ],
    awarenessActivity: {
      prompt: 'Can you hear the difference? Say: "The ship carried sheep." Now: "He lives on this beach." (Not "bitch"!) Vowel length matters!',
      promptEs: '¿Puedes oír la diferencia? Di: "The ship carried sheep." Ahora: "He lives on this beach." La duración de vocal importa.',
      expectedInsight: 'If ship/sheep sound the same, focus on holding the /iː/ longer for "sheep".',
    },
    practiceItems: ['ship/sheep', 'bit/beat', 'full/fool', 'pull/pool', 'live/leave', 'hit/heat'],
  },
  // === SYNTAX ===
  {
    id: 'l1-syn-adjective-order',
    area: 'syntax',
    title: 'Adjective placement (post-nominal)',
    titleEs: 'Posición del adjetivo (post-nominal)',
    level: 1,
    spanishPattern: 'Spanish: noun + adjective ("coche rojo")',
    englishTarget: 'English: adjective + noun ("red car")',
    explanation: 'Spanish normally places adjectives after the noun. English places them before. This is one of the most basic but persistent transfer errors.',
    explanationEs: 'El español normalmente coloca adjetivos después del sustantivo. El inglés los coloca antes. Es uno de los errores de transferencia más básicos pero persistentes.',
    examples: [
      { spanish: 'un coche rojo', wrongEnglish: 'a car red', correctEnglish: 'a red car' },
      { spanish: 'una casa grande', wrongEnglish: 'a house big', correctEnglish: 'a big house' },
      { spanish: 'una persona interesante', wrongEnglish: 'a person interesting', correctEnglish: 'an interesting person' },
    ],
    awarenessActivity: {
      prompt: 'Translate quickly: niño pequeño, perro negro, comida deliciosa, idea brillante. Did you put the adjective BEFORE the noun every time?',
      promptEs: 'Traduce rápido: niño pequeño, perro negro, comida deliciosa, idea brillante. ¿Pusiste el adjetivo ANTES del sustantivo cada vez?',
      expectedInsight: 'small child, black dog, delicious food, brilliant idea — adjective always comes first in English.',
    },
    practiceItems: ['a tall building', 'cold weather', 'an old friend', 'fresh bread', 'heavy rain'],
    relatedErrorClassIds: ['ec-l1-ser-estar'],
  },
  {
    id: 'l1-syn-null-subject',
    area: 'syntax',
    title: 'Subject pronoun dropping',
    titleEs: 'Omisión del pronombre sujeto',
    level: 1,
    spanishPattern: 'Spanish is pro-drop: "Soy profesor" (no need for "yo")',
    englishTarget: 'English REQUIRES a subject: "I am a teacher" (cannot omit "I")',
    explanation: 'Spanish verb conjugations contain subject information, making pronouns optional. English verbs don\'t, so the subject pronoun is mandatory.',
    explanationEs: 'Las conjugaciones españolas contienen información del sujeto, haciendo los pronombres opcionales. Los verbos ingleses no, así que el pronombre sujeto es obligatorio.',
    examples: [
      { spanish: 'Es importante', wrongEnglish: 'Is important', correctEnglish: 'It is important' },
      { spanish: 'Llueve', wrongEnglish: 'Rains', correctEnglish: 'It rains / It\'s raining' },
      { spanish: 'Parece que sí', wrongEnglish: 'Seems so', correctEnglish: 'It seems so' },
    ],
    awarenessActivity: {
      prompt: 'In these sentences, what subject must you add in English? "__ is raining." "__ seems difficult." "__ is 3 o\'clock."',
      promptEs: 'En estas oraciones, ¿qué sujeto debes añadir en inglés? "__ is raining." "__ seems difficult." "__ is 3 o\'clock."',
      expectedInsight: 'All need "It" — English uses a "dummy subject" when there\'s no real subject.',
    },
    practiceItems: ['It is cold', 'It seems that...', 'It takes two hours', 'It doesn\'t matter', 'It is worth it'],
    relatedFalseFriendIds: ['gff-dummy-it'],
  },
  // === LEXIS ===
  {
    id: 'l1-lex-false-cognates',
    area: 'lexis',
    title: 'False cognates (false friends)',
    titleEs: 'Falsos cognados (false friends)',
    level: 2,
    spanishPattern: 'Words that look similar but have different meanings in Spanish and English',
    englishTarget: 'Learn the correct English equivalent for each false cognate',
    explanation: 'Many Spanish-English words look similar due to Latin roots but have different meanings. These "false friends" cause frequent misunderstandings.',
    explanationEs: 'Muchas palabras español-inglés parecen similares por raíces latinas pero tienen significados diferentes. Estos "falsos amigos" causan malentendidos frecuentes.',
    examples: [
      { spanish: 'actualmente (= ahora)', wrongEnglish: 'actually (= en realidad)', correctEnglish: 'currently / at present' },
      { spanish: 'embarazada (= pregnant)', wrongEnglish: 'embarrassed (= avergonzado)', correctEnglish: 'pregnant' },
      { spanish: 'sensible (= sensitive)', wrongEnglish: 'sensible (= sensato)', correctEnglish: 'sensitive' },
      { spanish: 'realizar (= hacer/llevar a cabo)', wrongEnglish: 'realize (= darse cuenta)', correctEnglish: 'carry out / do' },
      { spanish: 'pretender (= intend/try)', wrongEnglish: 'pretend (= fingir/simular)', correctEnglish: 'intend to / try to' },
    ],
    awarenessActivity: {
      prompt: 'Match: 1. "I\'m embarrassed" — a) Estoy embarazada b) Estoy avergonzado. 2. "She\'s sensitive" — a) Es sensible b) Es sensata.',
      promptEs: 'Empareja: 1. "I\'m embarrassed" — a) Estoy embarazada b) Estoy avergonzado. 2. "She\'s sensitive" — a) Es sensible b) Es sensata.',
      expectedInsight: '1=b, 2=a. These are some of the most famous false friends between Spanish and English.',
    },
    practiceItems: [
      'actually ≠ actualmente → currently',
      'pretend ≠ pretender → intend to / try to',
      'actual ≠ actual (real) → current',
      'assist ≠ asistir (attend) → help',
      'carpet ≠ carpeta (folder) → rug/carpet',
      'constipated ≠ constipado (cold) → estreñido',
      'exit ≠ éxito (success) → salida',
      'fabric ≠ fábrica (factory) → tela',
      'library ≠ librería (bookshop) → biblioteca',
      'sympathetic ≠ simpático (nice) → comprensivo',
    ],
  },
  // === MORPHOLOGY ===
  {
    id: 'l1-morph-gender',
    area: 'morphology',
    title: 'Grammatical gender transfer',
    titleEs: 'Transferencia de género gramatical',
    level: 1,
    spanishPattern: 'Spanish assigns gender to all nouns and matches adjectives',
    englishTarget: 'English has no grammatical gender for objects — only natural gender (he/she/it)',
    explanation: 'Spanish speakers sometimes say "she" for a car because "coche" doesn\'t feel neuter, or struggle with possessives (his/her vs. su).',
    explanationEs: 'Los hispanohablantes a veces dicen "she" para un coche porque "coche" no se siente neutro, o luchan con posesivos (his/her vs. su).',
    examples: [
      { spanish: 'La mesa... ella', wrongEnglish: 'The table... she', correctEnglish: 'The table... it' },
      { spanish: 'Su libro (de él/ella)', wrongEnglish: 'Her book (when the owner is male)', correctEnglish: 'His book / her book (depends on owner\'s gender)' },
      { spanish: 'El agua está fría', wrongEnglish: 'He water is cold', correctEnglish: 'The water is cold (it)' },
    ],
    awarenessActivity: {
      prompt: 'In English, which things are "it"? A car, a computer, a country, a baby, a ship. (Trick question: ships are sometimes "she" in traditional usage!)',
      promptEs: 'En inglés, ¿qué cosas son "it"? Un coche, un ordenador, un país, un bebé, un barco. (Pregunta trampa: ¡los barcos a veces son "she" en uso tradicional!)',
      expectedInsight: 'Almost everything except people (and sometimes pets/ships) is "it" in English.',
    },
    practiceItems: [
      'Possessives: his (de él) vs. her (de ella) vs. its (de ello)',
      'The house → it, not she',
      'The sun → it (el sol no es "he")',
      'The computer → it (el ordenador no es "he")',
      'The country → it (el país no es "she")',
      'The baby → it or he/she (depending on context; "it" is common when gender is unknown)',
    ],
  },
  // === PRAGMATICS ===
  {
    id: 'l1-prag-directness',
    area: 'pragmatics',
    title: 'Request politeness level',
    titleEs: 'Nivel de cortesía en peticiones',
    level: 2,
    spanishPattern: 'Spanish requests can be more direct: "Dame el agua" / "Quiero un café"',
    englishTarget: 'English requires more hedging: "Could I have some water, please?" / "I\'d like a coffee, please"',
    explanation: 'What sounds normal in Spanish can sound rude in English. English uses more indirect forms, modals, and "please".',
    explanationEs: 'Lo que suena normal en español puede sonar grosero en inglés. El inglés usa formas más indirectas, modales y "please".',
    examples: [
      { spanish: 'Dame la sal', wrongEnglish: 'Give me the salt', correctEnglish: 'Could you pass the salt, please?' },
      { spanish: 'Quiero un café', wrongEnglish: 'I want a coffee', correctEnglish: 'I\'d like a coffee, please / Could I have a coffee?' },
      { spanish: 'Abre la ventana', wrongEnglish: 'Open the window', correctEnglish: 'Would you mind opening the window?' },
    ],
    awarenessActivity: {
      prompt: 'Rate these from polite to rude: "Give me a coffee." / "Could I have a coffee, please?" / "I want a coffee." / "I\'d like a coffee, please."',
      promptEs: 'Ordena de más educado a más grosero: "Give me a coffee." / "Could I have a coffee, please?" / "I want a coffee." / "I\'d like a coffee, please."',
      expectedInsight: 'Most polite → least: Could I have... please? > I\'d like... please > I want... > Give me... The last two can sound rude in English.',
    },
    practiceItems: [
      'Could you...? / Would you mind...? (requests)',
      'I\'d like... / Could I have...? (ordering)',
      'Would it be possible to...? (formal requests)',
      'I was wondering if... (very polite)',
    ],
  },
  {
    id: 'l1-prag-disagreement',
    area: 'pragmatics',
    title: 'Softening disagreement',
    titleEs: 'Suavizar el desacuerdo',
    level: 3,
    spanishPattern: 'Spanish disagreement can be direct: "No, estás equivocado" / "No estoy de acuerdo"',
    englishTarget: 'English uses hedging: "I see your point, but..." / "I\'m not sure I agree entirely..."',
    explanation: 'Direct disagreement in English can seem confrontational. Native speakers use hedging and partial agreement before disagreeing.',
    explanationEs: 'El desacuerdo directo en inglés puede parecer confrontativo. Los nativos usan moderadores y acuerdo parcial antes de disentir.',
    examples: [
      { spanish: 'No, estás equivocado', wrongEnglish: 'No, you are wrong', correctEnglish: 'I see what you mean, but I think...' },
      { spanish: 'No estoy de acuerdo', wrongEnglish: 'I don\'t agree', correctEnglish: 'I take your point, however...' },
      { spanish: 'Eso es ridículo', wrongEnglish: 'That\'s ridiculous', correctEnglish: 'I\'m not entirely convinced that...' },
    ],
    awarenessActivity: {
      prompt: 'Your colleague says "We should cancel the project." You disagree. Write 3 responses from least to most diplomatic.',
      promptEs: 'Tu compañero dice "Deberíamos cancelar el proyecto." No estás de acuerdo. Escribe 3 respuestas de menos a más diplomática.',
      expectedInsight: 'Blunt: "No, that\'s a bad idea." → Moderate: "I\'m not sure that\'s the best approach." → Diplomatic: "I understand the concern, but perhaps we could consider alternatives first?"',
    },
    practiceItems: [
      'I see your point, but...',
      'That\'s an interesting perspective, however...',
      'I\'m not entirely sure about that...',
      'With all due respect, I think...',
      'I take your point, although...',
    ],
  },
  // === ARTICLES (abstract nouns) ===
  {
    id: 'l1-syn-article-abstract',
    area: 'syntax',
    title: 'Articles with abstract nouns',
    titleEs: 'Artículos con sustantivos abstractos',
    level: 2,
    spanishPattern: 'Spanish uses articles with abstract nouns and languages: "la vida", "el amor", "el inglés"',
    englishTarget: 'English omits "the" with abstract nouns in general statements: "life", "love", "English"',
    explanation: 'Spanish requires articles with abstract nouns and languages. English omits "the" when referring to general concepts (life, love, time, happiness, music) and languages.',
    explanationEs: 'El español requiere artículos con sustantivos abstractos e idiomas. El inglés omite "the" al referirse a conceptos generales (vida, amor, tiempo, felicidad, música) e idiomas.',
    examples: [
      { spanish: 'La vida es bella.', wrongEnglish: 'The life is beautiful.', correctEnglish: 'Life is beautiful.' },
      { spanish: 'El amor es ciego.', wrongEnglish: 'The love is blind.', correctEnglish: 'Love is blind.' },
      { spanish: 'El inglés es difícil.', wrongEnglish: 'The English is difficult.', correctEnglish: 'English is difficult.' },
    ],
    awarenessActivity: {
      prompt: 'Translate: "La música es importante para la vida." Check: did you use "the" before music or life?',
      promptEs: 'Traduce: "La música es importante para la vida." ¿Usaste "the" antes de music o life?',
      expectedInsight: 'Correct: "Music is important for life." — no article with abstract nouns in general statements.',
    },
    practiceItems: ['Life is short.', 'Time flies.', 'Money isn\'t everything.', 'English is useful.', 'Happiness matters.'],
    relatedFalseFriendIds: ['gff-extra-article'],
  },
  // === PREPOSITIONS ===
  {
    id: 'l1-syn-preposition-transfer',
    area: 'syntax',
    title: 'Preposition transfer errors',
    titleEs: 'Errores de transferencia de preposiciones',
    level: 2,
    spanishPattern: 'Spanish "depender de" → learners say "depend of"',
    englishTarget: 'English: depend ON, not "depend of". Verb + preposition combinations must be learned.',
    explanation: 'Spanish prepositions don\'t map directly to English. "Depender de" becomes "depend on". "Soñar con" becomes "dream about/of".',
    explanationEs: 'Las preposiciones del español no se traducen directamente al inglés. "Depender de" becomes "depend on". "Soñar con" becomes "dream about/of".',
    examples: [
      { spanish: 'Depende de ti.', wrongEnglish: 'It depends of you.', correctEnglish: 'It depends on you.' },
      { spanish: 'Soñé con ella.', wrongEnglish: 'I dreamed with her.', correctEnglish: 'I dreamed about/of her.' },
      { spanish: 'Pienso en mi familia.', wrongEnglish: 'I think in my family.', correctEnglish: 'I think about my family.' },
    ],
    awarenessActivity: {
      prompt: 'Translate: "La decisión depende del tiempo." Which preposition?',
      promptEs: 'Traduce: "La decisión depende del tiempo." ¿Qué preposición?',
      expectedInsight: 'The decision depends ON the weather. — not "of".',
    },
    practiceItems: ['depend on', 'dream about/of', 'think about', 'listen to', 'wait for', 'consist of'],
    relatedFalseFriendIds: ['gff-depend-on', 'gff-preposition-differences'],
  },
  // === PRONOUN PLACEMENT ===
  {
    id: 'l1-syn-pronoun-placement',
    area: 'syntax',
    title: 'Reflexive/emphatic pronoun placement',
    titleEs: 'Posición de pronombres reflexivos/énfasis',
    level: 2,
    spanishPattern: 'Spanish: "Yo mismo preparo" — word order can place "mismo" after subject',
    englishTarget: 'English: "I prepare it myself" — emphatic pronoun (myself) goes after the verb or at end',
    explanation: 'Spanish "yo mismo preparo" can lead to "I myself prepare" instead of "I prepare it myself". In English, emphatic/reflexive pronouns typically follow the verb or object.',
    explanationEs: 'El español "yo mismo preparo" puede llevar a "I myself prepare" en lugar de "I prepare it myself". En inglés, los pronombres de énfasis suelen ir después del verbo u objeto.',
    examples: [
      { spanish: 'Yo mismo lo preparo.', wrongEnglish: 'I myself prepare.', correctEnglish: 'I prepare it myself.' },
      { spanish: 'Ella misma lo hizo.', wrongEnglish: 'She herself did.', correctEnglish: 'She did it herself.' },
      { spanish: 'El jefe mismo lo firmó.', wrongEnglish: 'The boss himself signed.', correctEnglish: 'The boss signed it himself.' },
    ],
    awarenessActivity: {
      prompt: 'Translate: "Yo mismo preparé la cena." Where does "myself" go in English?',
      promptEs: 'Traduce: "Yo mismo preparé la cena." ¿Dónde va "myself" en inglés?',
      expectedInsight: 'I prepared dinner myself. / I myself prepared dinner. — "myself" at end or after subject for emphasis; never "I myself prepare" without the object.',
    },
    practiceItems: ['I did it myself.', 'She made it herself.', 'We fixed it ourselves.', 'The president himself signed.', 'You yourself said that.'],
  },
  // === DOUBLE NEGATION ===
  {
    id: 'l1-syn-double-negation',
    area: 'syntax',
    title: 'Double negation transfer',
    titleEs: 'Transferencia de doble negación',
    level: 2,
    spanishPattern: 'Spanish uses double negatives: "No tengo nada", "No conozco a nadie"',
    englishTarget: 'English uses ONE negative: "I don\'t have anything" OR "I have nothing"',
    explanation: 'In Spanish, the negative is reinforced (no + nada = correct). In English, two negatives cancel out or sound non-standard. Use either don\'t + anything OR nothing alone.',
    explanationEs: 'En español la negación se refuerza (no + nada = correcto). En inglés, dos negaciones se anulan o suenan incorrectas. Usa don\'t + anything O nothing solo.',
    examples: [
      { spanish: 'No tengo nada.', wrongEnglish: 'I don\'t have nothing.', correctEnglish: 'I don\'t have anything. / I have nothing.' },
      { spanish: 'No conozco a nadie.', wrongEnglish: 'I don\'t know nobody.', correctEnglish: 'I don\'t know anybody. / I know nobody.' },
      { spanish: 'No fui a ningún sitio.', wrongEnglish: 'I didn\'t go to nowhere.', correctEnglish: 'I didn\'t go anywhere. / I went nowhere.' },
    ],
    awarenessActivity: {
      prompt: 'Translate: "No quiero nada de comer." Which option is correct?',
      promptEs: 'Traduce: "No quiero nada de comer." ¿Cuál es correcto?',
      expectedInsight: 'I don\'t want anything to eat. OR I want nothing to eat. — never both "don\'t" and "nothing".',
    },
    practiceItems: ['I don\'t have anything.', 'I have nothing.', 'I don\'t know anybody.', 'I know nobody.', 'She didn\'t go anywhere.'],
    relatedFalseFriendIds: ['gff-double-negative'],
  },
  // === PRESENT PERFECT vs PRESENT ===
  {
    id: 'l1-syn-present-perfect-overuse',
    area: 'syntax',
    title: 'Present tense overuse (desde hace)',
    titleEs: 'Uso excesivo del presente (desde hace)',
    level: 2,
    spanishPattern: 'Spanish: "Vivo aquí desde hace 3 años" / "Trabajo aquí desde 2020" uses present tense',
    englishTarget: 'English requires Present Perfect for ongoing duration: "I have lived here for 3 years"',
    explanation: 'Spanish uses present tense with "desde hace" or "desde" for actions that started in the past and continue. English requires Present Perfect + for/since.',
    explanationEs: 'El español usa presente con "desde hace" o "desde" para acciones que empezaron en el pasado y continúan. El inglés requiere Presente Perfecto + for/since.',
    examples: [
      { spanish: 'Vivo aquí desde hace 3 años.', wrongEnglish: 'I live here since 3 years.', correctEnglish: 'I have lived here for 3 years.' },
      { spanish: 'Trabajo aquí desde 2020.', wrongEnglish: 'I work here since 2020.', correctEnglish: 'I have worked here since 2020.' },
      { spanish: '¿Cuánto tiempo estudias inglés?', wrongEnglish: 'How long do you study English?', correctEnglish: 'How long have you been studying English?' },
    ],
    awarenessActivity: {
      prompt: 'Translate: "Estudio inglés desde hace 2 años." Which tense?',
      promptEs: 'Traduce: "Estudio inglés desde hace 2 años." ¿Qué tiempo verbal?',
      expectedInsight: 'I have been studying English for 2 years. — Present Perfect (Continuous), not Present Simple.',
    },
    practiceItems: ['I have lived here for 5 years.', 'She has worked there since 2019.', 'How long have you known him?', 'We have been married since June.'],
    relatedFalseFriendIds: ['gff-hace-tiempo'],
  },
  // === C1-C2 LEVEL 4 RULES ===
  {
    id: 'l1-prag-register-transfer',
    area: 'pragmatics',
    title: 'Formal register transfer',
    titleEs: 'Transferencia de registro formal',
    level: 4,
    spanishPattern: 'Spanish formal register doesn\'t map to English: "estimado señor" → "Dear Sir" but "le saludo atentamente" ≠ "I greet you attentively"',
    englishTarget: 'Use conventional English formal formulas: "Yours faithfully", "I look forward to hearing from you"',
    explanation: 'Spanish formal closings and formulas (le saludo atentamente, quedo a la espera de su respuesta) translate literally into awkward or incorrect English. English has its own set of formal conventions that must be learned.',
    explanationEs: 'Las fórmulas formales españolas (le saludo atentamente, quedo a la espera de su respuesta) se traducen literalmente a un inglés incómodo o incorrecto. El inglés tiene sus propias convenciones formales que deben aprenderse.',
    examples: [
      { spanish: 'Le saludo atentamente', wrongEnglish: 'I greet you attentively', correctEnglish: 'Yours faithfully / Sincerely yours' },
      { spanish: 'Quedo a la espera de su respuesta', wrongEnglish: 'I remain awaiting your response', correctEnglish: 'I look forward to hearing from you' },
      { spanish: 'Estimado señor', wrongEnglish: 'Estimated sir', correctEnglish: 'Dear Sir' },
      { spanish: 'Sin otro particular', wrongEnglish: 'Without other particular', correctEnglish: '(Omit — no equivalent; just close the letter)' },
      { spanish: 'Le comunico que...', wrongEnglish: 'I communicate to you that...', correctEnglish: 'I am writing to inform you that...' },
    ],
    awarenessActivity: {
      prompt: 'Translate the Spanish formal closing "Le saludo atentamente" into English. Is a literal translation appropriate?',
      promptEs: 'Traduce el cierre formal español "Le saludo atentamente" al inglés. ¿Es apropiada una traducción literal?',
      expectedInsight: 'No. English uses "Yours faithfully", "Sincerely", or "Best regards" — not literal translations of Spanish formulas.',
    },
    practiceItems: [
      'Yours faithfully (formal, unknown recipient)',
      'Yours sincerely (formal, known recipient)',
      'I look forward to hearing from you',
      'I am writing to inform you that...',
      'Please do not hesitate to contact me',
    ],
  },
  {
    id: 'l1-syn-subjunctive-transfer',
    area: 'syntax',
    title: 'Subjunctive overuse transfer',
    titleEs: 'Transferencia de uso excesivo del subjuntivo',
    level: 4,
    spanishPattern: 'Spanish requires subjunctive after "sugerir", "recomendar", "insistir" — learners use indicative in English',
    englishTarget: 'English uses base form (subjunctive) after suggest, recommend, insist: "I suggest that he go" (not "goes")',
    explanation: 'Spanish speakers often use indicative ("he goes") in English because the subjunctive is not visible in English. After verbs like suggest, recommend, insist, demand, English requires the base form: "I suggest that he go" not "he goes".',
    explanationEs: 'Los hispanohablantes suelen usar indicativo ("he goes") en inglés porque el subjuntivo no es visible. Tras verbos como suggest, recommend, insist, demand, el inglés requiere la forma base: "I suggest that he go" no "he goes".',
    examples: [
      { spanish: 'Sugiero que vaya', wrongEnglish: 'I suggest that he goes', correctEnglish: 'I suggest that he go' },
      { spanish: 'Recomiendo que llegue temprano', wrongEnglish: 'I recommend that she arrives early', correctEnglish: 'I recommend that she arrive early' },
      { spanish: 'Es importante que esté listo', wrongEnglish: 'It is important that he is ready', correctEnglish: 'It is important that he be ready' },
      { spanish: 'Insistieron en que firmara', wrongEnglish: 'They insisted that he signed', correctEnglish: 'They insisted that he sign' },
      { spanish: 'Exijo que me escuche', wrongEnglish: 'I demand that he listens to me', correctEnglish: 'I demand that he listen to me' },
    ],
    awarenessActivity: {
      prompt: 'Complete: "I suggest that she ___ (go) to the doctor." Is it "goes" or "go"?',
      promptEs: 'Completa: "I suggest that she ___ (go) to the doctor." ¿Es "goes" o "go"?',
      expectedInsight: 'It is "go" — the base form. English uses mandative subjunctive (invisible) after suggest, recommend, insist, demand.',
    },
    practiceItems: [
      'I suggest that he apply for the job',
      'We recommend that she see a specialist',
      'It is essential that they be informed',
      'They demanded that he resign',
      'I insist that you stay for dinner',
    ],
  },
  {
    id: 'l1-lex-academic-false-friends',
    area: 'lexis',
    title: 'Academic false cognates',
    titleEs: 'Falsos cognados académicos',
    level: 4,
    spanishPattern: 'Academic Spanish words that look like English but mean something different',
    englishTarget: 'Learn correct English equivalents: eventual ≠ eventual, compromiso ≠ compromise, realizar ≠ realize',
    explanation: 'In academic and formal contexts, Spanish speakers often use false cognates. "Eventual" in Spanish means "possible" or "contingent", not "final". "Compromiso" means "commitment", not "compromise". "Realizar" means "carry out", not "realize" (become aware).',
    explanationEs: 'En contextos académicos y formales, los hispanohablantes suelen usar falsos cognados. "Eventual" en español significa "posible" o "contingente", no "final". "Compromiso" significa "commitment", no "compromise". "Realizar" significa "llevar a cabo", no "realize" (darse cuenta).',
    examples: [
      { spanish: 'eventual (= posible, contingente)', wrongEnglish: 'eventual (= final)', correctEnglish: 'possible / contingent / potential' },
      { spanish: 'compromiso (= commitment)', wrongEnglish: 'compromise (= acuerdo mutuo)', correctEnglish: 'commitment / obligation' },
      { spanish: 'realizar (= llevar a cabo)', wrongEnglish: 'realize (= darse cuenta)', correctEnglish: 'carry out / conduct / perform' },
      { spanish: 'actualmente (= ahora)', wrongEnglish: 'actually (= en realidad)', correctEnglish: 'currently / at present' },
      { spanish: 'asistir (= attend)', wrongEnglish: 'assist (= ayudar)', correctEnglish: 'attend / be present at' },
    ],
    awarenessActivity: {
      prompt: 'Translate: "El compromiso del investigador es realizar el estudio." What are the correct English words for "compromiso" and "realizar"?',
      promptEs: 'Traduce: "El compromiso del investigador es realizar el estudio." ¿Cuáles son las palabras correctas en inglés para "compromiso" y "realizar"?',
      expectedInsight: '"Commitment" (not compromise) and "carry out" or "conduct" (not realize). The researcher\'s commitment is to carry out the study.',
    },
    practiceItems: [
      'eventual → possible / contingent (not eventual)',
      'compromiso → commitment (not compromise)',
      'realizar → carry out / conduct (not realize)',
      'actualmente → currently (not actually)',
      'asistir → attend (not assist)',
    ],
  },
];

// Helper functions
export const getL1RulesByArea = (area: L1InterferenceRule['area']): L1InterferenceRule[] => {
  return l1InterferenceRules.filter(r => r.area === area);
};

export const getL1RulesByLevel = (level: number): L1InterferenceRule[] => {
  return l1InterferenceRules.filter(r => r.level <= level);
};

export const getL1RuleById = (id: string): L1InterferenceRule | undefined => {
  return l1InterferenceRules.find(r => r.id === id);
};
