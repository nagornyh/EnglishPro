// Cultural Notes - Notas Culturales
// Context-rich cultural notes attached to vocabulary and grammar topics
// Covers formality norms, British vs American English, regional usage, and social conventions

import type { CulturalNote } from '../types';

export interface CulturalNoteData extends CulturalNote {
  id: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category:
    | 'greetings'
    | 'formality'
    | 'british-american'
    | 'social-norms'
    | 'workplace'
    | 'small-talk'
    | 'politeness'
    | 'humor'
    | 'regional';
  relatedTopics?: string[]; // grammar/vocab topic IDs this note relates to
}

export const culturalNotes: CulturalNoteData[] = [

  // ===== A1 LEVEL =====
  {
    id: 'cn-001',
    level: 'A1',
    category: 'greetings',
    title: '"How are you?" is not a real question',
    titleEs: '"How are you?" no es una pregunta real',
    content:
      'In English-speaking countries, "How are you?" is a greeting, not a genuine inquiry. The expected answer is "Fine, thanks!" or "Good, thanks!" — not a detailed description of your health. Responding with a long answer can make people uncomfortable.',
    contentEs:
      'En los países de habla inglesa, "How are you?" es un saludo, no una pregunta genuina. La respuesta esperada es "Fine, thanks!" o "Good, thanks!" — no una descripción detallada de tu salud. Responder con una respuesta larga puede incomodar a las personas.',
    regions: ['UK', 'US', 'Australia', 'Canada'],
    formalityLevel: 'neutral',
    relatedTopics: ['verb-to-be-present'],
  },
  {
    id: 'cn-002',
    level: 'A1',
    category: 'british-american',
    title: 'First Floor: UK vs US',
    titleEs: 'Primer piso: UK vs US',
    content:
      'In the UK, the "ground floor" is what Americans call the "first floor." The British "first floor" is the American "second floor." This causes frequent confusion in hotels and buildings.',
    contentEs:
      'En el Reino Unido, el "ground floor" (planta baja) es lo que los americanos llaman "first floor" (primer piso). El "first floor" británico es el "second floor" americano. Esto causa confusión frecuente en hoteles y edificios.',
    regions: ['UK', 'US'],
    formalityLevel: 'neutral',
    relatedTopics: [],
  },
  {
    id: 'cn-003',
    level: 'A1',
    category: 'social-norms',
    title: 'Saying "please" and "thank you"',
    titleEs: 'Decir "please" y "thank you"',
    content:
      'In English-speaking cultures, "please" and "thank you" are used far more frequently than in Spanish. Omitting them — even in casual contexts — can come across as rude. Always say "please" when ordering food or making requests.',
    contentEs:
      'En las culturas de habla inglesa, "please" y "thank you" se usan con mucha más frecuencia que en español. Omitirlos — incluso en contextos informales — puede parecer grosero. Siempre di "please" al pedir comida o hacer peticiones.',
    regions: ['UK', 'US', 'Australia'],
    formalityLevel: 'neutral',
    relatedTopics: [],
  },

  // ===== A2 LEVEL =====
  {
    id: 'cn-004',
    level: 'A2',
    category: 'british-american',
    title: 'Biscuit, Cookie, or Scone?',
    titleEs: '¿Biscuit, Cookie o Scone?',
    content:
      'In British English, "biscuit" is what Americans call a "cookie" (sweet, flat baked good). An American "biscuit" is a fluffy bread roll — the British would call this a "scone." Ordering the wrong thing can be a tasty (but surprising) experience!',
    contentEs:
      'En inglés británico, "biscuit" es lo que los americanos llaman "cookie" (galleta). Un "biscuit" americano es un panecillo esponjoso — los británicos lo llamarían "scone." ¡Pedir lo incorrecto puede ser una experiencia sabrosa pero sorprendente!',
    regions: ['UK', 'US'],
    formalityLevel: 'informal',
    relatedTopics: ['vocabulary-food'],
  },
  {
    id: 'cn-005',
    level: 'A2',
    category: 'formality',
    title: 'When to use first names vs titles',
    titleEs: 'Cuándo usar nombres de pila vs títulos',
    content:
      'Americans switch to first names almost immediately, even in professional settings ("Call me John!"). British culture is more formal — you may be introduced by title (Mr./Ms.) and wait to be invited to use a first name. In Australia, first names are used quickly and informally.',
    contentEs:
      'Los americanos cambian a nombres de pila casi de inmediato, incluso en entornos profesionales ("¡Llámame John!"). La cultura británica es más formal — puedes ser presentado con título (Mr./Ms.) y esperar a ser invitado a usar el nombre de pila. En Australia, los nombres de pila se usan rápidamente e informalmente.',
    regions: ['UK', 'US', 'Australia'],
    formalityLevel: 'formal',
    relatedTopics: [],
  },
  {
    id: 'cn-006',
    level: 'A2',
    category: 'small-talk',
    title: 'Talking about the weather',
    titleEs: 'Hablar del clima',
    content:
      'Weather small talk is a genuine British cultural ritual — not just a cliché. It\'s a safe, neutral way to start conversations. In the US, people are more likely to open with "How\'s it going?" or a compliment. In Australia, weather talk is also common, especially about extreme heat.',
    contentEs:
      'Hablar del clima es un ritual cultural británico genuino — no solo un cliché. Es una forma segura y neutral de iniciar conversaciones. En EE.UU., es más común empezar con "How\'s it going?" o un cumplido. En Australia, también es habitual hablar del clima, especialmente del calor extremo.',
    regions: ['UK', 'US', 'Australia'],
    formalityLevel: 'informal',
    relatedTopics: [],
  },
  {
    id: 'cn-007',
    level: 'A2',
    category: 'british-american',
    title: 'Spelling differences: British vs American',
    titleEs: 'Diferencias de ortografía: Británico vs Americano',
    content:
      'Many words are spelled differently in British and American English. Both are correct — just be consistent. Key patterns: British -our → American -or (colour/color, favour/favor); British -re → American -er (centre/center, theatre/theater); British -ise → American -ize (organise/organize).',
    contentEs:
      'Muchas palabras se escriben de forma diferente en inglés británico y americano. Ambas son correctas — solo sé consistente. Patrones clave: Británico -our → Americano -or (colour/color); Británico -re → Americano -er (centre/center); Británico -ise → Americano -ize (organise/organize).',
    regions: ['UK', 'US'],
    formalityLevel: 'neutral',
    relatedTopics: [],
  },

  // ===== B1 LEVEL =====
  {
    id: 'cn-008',
    level: 'B1',
    category: 'politeness',
    title: 'Queuing culture in the UK',
    titleEs: 'La cultura de hacer fila en el Reino Unido',
    content:
      'Britons take queuing (standing in line) very seriously. Cutting in line is considered one of the rudest things you can do. The phrase "Are you in the queue?" is used to check, and pushing past someone will draw disapproving looks or a very polite but icy comment.',
    contentEs:
      'Los británicos se toman muy en serio hacer fila. Colarse en una fila se considera una de las cosas más groseras que puedes hacer. La frase "Are you in the queue?" se usa para verificar, y adelantarse a alguien provocará miradas desaprobadoras o un comentario muy educado pero frío.',
    regions: ['UK'],
    formalityLevel: 'neutral',
    relatedTopics: [],
  },
  {
    id: 'cn-009',
    level: 'B1',
    category: 'workplace',
    title: 'Direct vs. indirect communication styles',
    titleEs: 'Estilos de comunicación directa vs. indirecta',
    content:
      'Americans tend to communicate directly: "I disagree with this plan." British communication is often more indirect: "I\'m not sure this plan would work in all cases." Both mean the same thing. Misinterpreting British understatement as agreement is a very common cross-cultural mistake.',
    contentEs:
      'Los americanos tienden a comunicarse directamente: "Estoy en desacuerdo con este plan." La comunicación británica suele ser más indirecta: "No estoy seguro de que este plan funcione en todos los casos." Ambos significan lo mismo. Malinterpretar el eufemismo británico como acuerdo es un error intercultural muy común.',
    regions: ['UK', 'US'],
    formalityLevel: 'formal',
    relatedTopics: ['hedging-language'],
  },
  {
    id: 'cn-010',
    level: 'B1',
    category: 'humor',
    title: 'British irony and sarcasm',
    titleEs: 'La ironía y el sarcasmo británico',
    content:
      'British humor relies heavily on irony and understatement. "That was fun" said with a flat tone means the opposite. "Not bad" is a strong compliment. "Quite good" is lukewarm praise. Learning to read tone is essential — getting British humor wrong can lead to genuine confusion.',
    contentEs:
      'El humor británico se basa en la ironía y el eufemismo. "That was fun" dicho con tono plano significa lo contrario. "Not bad" es un cumplido sólido. "Quite good" es una alabanza tibia. Aprender a leer el tono es esencial — no captar el humor británico puede causar verdadera confusión.',
    regions: ['UK'],
    formalityLevel: 'informal',
    relatedTopics: [],
  },
  {
    id: 'cn-011',
    level: 'B1',
    category: 'british-american',
    title: 'Petrol, petrol station, and the boot',
    titleEs: 'Petrol, gasolinera y el maletero',
    content:
      'British English has many unique words for everyday things: "petrol" (US: gas), "petrol station" (US: gas station), "boot" (US: trunk of car), "bonnet" (US: hood of car), "motorway" (US: highway/freeway), "lorry" (US: truck). When in the UK, using the wrong word will often get an amused smile.',
    contentEs:
      'El inglés británico tiene muchas palabras únicas para cosas cotidianas: "petrol" (EE.UU.: gas), "petrol station" (EE.UU.: gas station), "boot" (EE.UU.: trunk del coche), "bonnet" (EE.UU.: hood del coche), "motorway" (EE.UU.: highway), "lorry" (EE.UU.: truck).',
    regions: ['UK', 'US'],
    formalityLevel: 'neutral',
    relatedTopics: [],
  },
  {
    id: 'cn-012',
    level: 'B1',
    category: 'social-norms',
    title: 'Tipping culture',
    titleEs: 'La cultura de dejar propina',
    content:
      'Tipping norms vary dramatically. In the US, 15–20% is expected at restaurants — not tipping is offensive. In the UK, tipping 10–12% is appreciated but optional. In Australia, tipping is not traditionally expected. In Canada, US norms apply. Always check local customs when traveling.',
    contentEs:
      'Las normas de propina varían mucho. En EE.UU., se espera un 15-20% en restaurantes — no dejar propina es ofensivo. En el Reino Unido, un 10-12% se agradece pero es opcional. En Australia, la propina no se espera tradicionalmente. En Canadá, aplican las normas de EE.UU.',
    regions: ['UK', 'US', 'Australia', 'Canada'],
    formalityLevel: 'neutral',
    relatedTopics: [],
  },

  // ===== B2 LEVEL =====
  {
    id: 'cn-013',
    level: 'B2',
    category: 'formality',
    title: 'Polite refusals: "I\'m fine" doesn\'t mean satisfied',
    titleEs: '"I\'m fine" no significa satisfecho',
    content:
      'In British culture, "I\'m fine, thank you" when offered a second helping of food often means "No, I\'m done." Americans are more likely to say "No, thank you" directly. The British reflexive use of "fine" and "lovely" to deflect is a learned register — not linguistic laziness.',
    contentEs:
      'En la cultura británica, "I\'m fine, thank you" cuando te ofrecen una segunda ración de comida a menudo significa "No, gracias." Los americanos son más propensos a decir "No, thank you" directamente. El uso reflexivo británico de "fine" y "lovely" para declinar es un registro aprendido.',
    regions: ['UK', 'US'],
    formalityLevel: 'neutral',
    relatedTopics: ['hedging-language'],
  },
  {
    id: 'cn-014',
    level: 'B2',
    category: 'workplace',
    title: 'Email register: formal vs. informal in British workplaces',
    titleEs: 'Registro en emails: formal vs. informal en el lugar de trabajo británico',
    content:
      'British workplace emails start more formally than American ones. "Dear Ms. Smith," is standard for first contact; "Hi Sarah," emerges only after a working relationship is established. Ending with "Kind regards" is professional-neutral; "Best" is casual; "Yours faithfully" is reserved for letters to unknown recipients.',
    contentEs:
      'Los emails en el lugar de trabajo británico empiezan de forma más formal que los americanos. "Dear Ms. Smith," es estándar para el primer contacto; "Hi Sarah," surge solo después de establecer una relación laboral. Terminar con "Kind regards" es profesional-neutral; "Best" es informal; "Yours faithfully" se reserva para cartas a destinatarios desconocidos.',
    regions: ['UK'],
    formalityLevel: 'formal',
    relatedTopics: ['email-structure'],
  },
  {
    id: 'cn-015',
    level: 'B2',
    category: 'regional',
    title: 'Australian English: diminutives and -ie/-o endings',
    titleEs: 'Inglés australiano: diminutivos y terminaciones -ie/-o',
    content:
      'Australians shorten almost everything and add -ie or -o: "brekkie" (breakfast), "arvo" (afternoon), "servo" (service station), "sunnies" (sunglasses), "tradie" (tradesman), "footy" (football). This is a strong cultural marker — using it shows cultural awareness, not just language skill.',
    contentEs:
      'Los australianos acortan casi todo y añaden -ie o -o: "brekkie" (breakfast), "arvo" (afternoon, tarde), "servo" (service station, gasolinera), "sunnies" (sunglasses, gafas de sol), "tradie" (tradesman, obrero), "footy" (football). Esto es un marcador cultural fuerte.',
    regions: ['Australia'],
    formalityLevel: 'informal',
    relatedTopics: [],
  },
  {
    id: 'cn-016',
    level: 'B2',
    category: 'social-norms',
    title: 'Personal questions: what\'s off-limits',
    titleEs: 'Preguntas personales: qué está prohibido',
    content:
      'In Anglo-American culture, asking someone\'s age, salary, weight, or relationship status directly is considered intrusive unless you know them well. Compare this to many Latin American cultures where these are normal conversation topics. A safe alternative: wait for the other person to bring it up.',
    contentEs:
      'En la cultura angloamericana, preguntar directamente la edad, el salario, el peso o el estado civil de alguien se considera intrusivo a menos que lo conozcas bien. Contrasta con muchas culturas latinoamericanas donde estos son temas normales de conversación. Una alternativa segura: espera a que la otra persona lo saque.',
    regions: ['UK', 'US', 'Australia'],
    formalityLevel: 'neutral',
    relatedTopics: [],
  },

  // ===== C1 LEVEL =====
  {
    id: 'cn-017',
    level: 'C1',
    category: 'formality',
    title: 'The subjunctive in formal written English',
    titleEs: 'El subjuntivo en inglés escrito formal',
    content:
      'The English subjunctive ("I suggest he go," "It\'s essential she be present") is considered formal or literary. In everyday speech, most native speakers use the indicative ("I suggest he goes"). However, using the subjunctive correctly in writing marks you as an especially proficient writer.',
    contentEs:
      'El subjuntivo en inglés ("I suggest he go," "It\'s essential she be present") se considera formal o literario. En el habla cotidiana, la mayoría de los hablantes nativos usan el indicativo ("I suggest he goes"). Sin embargo, usar el subjuntivo correctamente en la escritura te distingue como un escritor especialmente competente.',
    regions: ['UK', 'US'],
    formalityLevel: 'formal',
    relatedTopics: ['subjunctive'],
  },
  {
    id: 'cn-018',
    level: 'C1',
    category: 'humor',
    title: 'Deadpan humor and literal interpretation',
    titleEs: 'Humor inexpresivo e interpretación literal',
    content:
      'Deadpan humor (saying something absurd with a straight face) is central to British comedy culture. If someone tells you something implausible with complete seriousness, it may be a joke. Non-native speakers often miss this entirely. A safe response is a slight smile while awaiting a cue — never explain the joke back to them.',
    contentEs:
      'El humor inexpresivo (decir algo absurdo con cara seria) es central en la cultura cómica británica. Si alguien te cuenta algo implausible con total seriedad, puede ser un chiste. Los no nativos a menudo lo pierden por completo. Una respuesta segura es una ligera sonrisa mientras esperas una señal.',
    regions: ['UK'],
    formalityLevel: 'informal',
    relatedTopics: [],
  },
  {
    id: 'cn-019',
    level: 'C1',
    category: 'workplace',
    title: 'Overpromising: a cultural difference',
    titleEs: 'Prometer demasiado: una diferencia cultural',
    content:
      'American business culture values enthusiasm and confident promises ("I\'ll absolutely get that done by Friday!"). British professional culture is more cautious ("I should be able to have that ready by Friday" or "I\'ll do my best"). Over-promising in a British context can damage trust when deadlines are missed.',
    contentEs:
      'La cultura empresarial americana valora el entusiasmo y las promesas seguras ("¡Absolutamente lo tendré listo el viernes!"). La cultura profesional británica es más cautelosa ("Debería poder tenerlo listo el viernes" o "Haré lo posible"). Prometer demasiado en un contexto británico puede dañar la confianza cuando se incumplen los plazos.',
    regions: ['UK', 'US'],
    formalityLevel: 'formal',
    relatedTopics: ['hedging-language'],
  },
  {
    id: 'cn-020',
    level: 'C1',
    category: 'regional',
    title: 'South African English: unique vocabulary',
    titleEs: 'Inglés sudafricano: vocabulario único',
    content:
      'South African English has borrowed from Afrikaans and local languages: "braai" (barbecue), "robot" (traffic light), "bakkie" (pickup truck), "lekker" (nice, great), "now now" (soon, not immediately), "just now" (even later than "now now"). South Africa has 11 official languages, giving its English a rich multicultural flavour.',
    contentEs:
      'El inglés sudafricano ha tomado prestado del afrikáans y las lenguas locales: "braai" (barbacoa), "robot" (semáforo), "bakkie" (camioneta), "lekker" (genial), "now now" (pronto, no de inmediato), "just now" (todavía más tarde). Sudáfrica tiene 11 idiomas oficiales, dando a su inglés un sabor multicultural rico.',
    regions: ['South Africa'],
    formalityLevel: 'informal',
    relatedTopics: [],
  },

  // ===== C2 LEVEL =====
  {
    id: 'cn-021',
    level: 'C2',
    category: 'formality',
    title: 'Register-shifting: the hallmark of mastery',
    titleEs: 'Cambio de registro: el sello de la maestría',
    content:
      'Native-level speakers seamlessly shift register depending on context: contractions in speech, full forms in formal writing; "kids" with friends but "children" in professional reports; "I\'d like to..." in interviews vs. "I wanna..." with peers. True mastery isn\'t about knowing more words — it\'s about knowing which word belongs where.',
    contentEs:
      'Los hablantes a nivel nativo cambian fluidamente de registro según el contexto: contracciones en el habla, formas completas en la escritura formal; "kids" con amigos pero "children" en informes profesionales; "I\'d like to..." en entrevistas vs. "I wanna..." con compañeros. La verdadera maestría no es conocer más palabras — es saber qué palabra va dónde.',
    regions: ['Global'],
    formalityLevel: 'formal',
    relatedTopics: ['participle-clauses', 'inversion'],
  },
  {
    id: 'cn-022',
    level: 'C2',
    category: 'humor',
    title: 'Wit, wordplay, and puns in English',
    titleEs: 'Ingenio, juegos de palabras y calambures en inglés',
    content:
      'English\'s large vocabulary and phonetic structure make it exceptionally fertile for puns. The ability to produce and appreciate puns is a sign of deep linguistic knowledge. British culture particularly celebrates clever wordplay; groan-worthy puns ("dad jokes") are delivered with pride. A good pun requires native-level control of both meaning and sound.',
    contentEs:
      'El amplio vocabulario del inglés y su estructura fonética lo hacen especialmente fértil para los juegos de palabras. La capacidad de producir y apreciar los calambures es una señal de conocimiento lingüístico profundo. La cultura británica celebra especialmente el juego de palabras inteligente; los calambures ("dad jokes") se sueltan con orgullo.',
    regions: ['UK', 'US'],
    formalityLevel: 'informal',
    relatedTopics: [],
  },
  {
    id: 'cn-023',
    level: 'C2',
    category: 'regional',
    title: 'Irish English: unique expressions',
    titleEs: 'Inglés irlandés: expresiones únicas',
    content:
      '"Grand" in Irish English means "fine/okay" — not magnificent. "Craic" (pronounced "crack") means fun or entertaining conversation. "I will yeah" (sarcastic) means "absolutely not." "She\'s gone to the shops, so she has" uses a reinforcing echo construction unique to Irish syntax influenced by the Irish language.',
    contentEs:
      '"Grand" en inglés irlandés significa "bien/okay" — no magnífico. "Craic" (pronunciado "crack") significa diversión o conversación entretenida. "I will yeah" (sarcástico) significa "de ninguna manera." "She\'s gone to the shops, so she has" usa una construcción de eco reforzada única de la sintaxis irlandesa influenciada por el idioma irlandés.',
    regions: ['Ireland'],
    formalityLevel: 'informal',
    relatedTopics: [],
  },

  // ===== A1 ADDITIONAL (CONT-6) =====
  {
    id: 'cn-a1-extra1',
    level: 'A1',
    category: 'social-norms',
    title: 'Queuing: The British national sport',
    titleEs: 'La cola: el deporte nacional británico',
    content:
      'In the UK, queuing (waiting in line) is taken extremely seriously. Cutting in front of someone in a queue is considered very rude — possibly one of the worst social offences. Always join at the back and wait your turn, even if there\'s no one watching.',
    contentEs:
      'En el Reino Unido, hacer cola se toma muy en serio. Colarse delante de alguien es considerado muy grosero — posiblemente uno de los peores delitos sociales. Siempre únete al final y espera tu turno, aunque no haya nadie mirando.',
    regions: ['UK'],
    formalityLevel: 'neutral',
    relatedTopics: [],
  },
  {
    id: 'cn-a1-extra2',
    level: 'A1',
    category: 'small-talk',
    title: 'The Weather as Small Talk',
    titleEs: 'El tiempo como tema de conversación',
    content:
      'Talking about the weather is the most common form of small talk in British culture. It\'s not just about information — it\'s a way of opening a conversation with strangers or acquaintances. Common openers: "Lovely day, isn\'t it?" / "Terrible weather we\'re having!" / "It gets dark so early in winter, doesn\'t it?"',
    contentEs:
      'Hablar del tiempo es la forma más común de charla informal en la cultura británica. No es solo información — es una manera de iniciar conversación con desconocidos o conocidos. Frases comunes: "Lovely day, isn\'t it?" / "Terrible weather we\'re having!" / "It gets dark so early in winter, doesn\'t it?"',
    regions: ['UK'],
    formalityLevel: 'informal',
    relatedTopics: [],
  },
  {
    id: 'cn-a1-extra3',
    level: 'A1',
    category: 'politeness',
    title: 'Sorry: The British multipurpose word',
    titleEs: '"Sorry": la palabra británica multiusos',
    content:
      'British people use "sorry" far more than other English speakers. It can mean: (1) genuine apology, (2) excuse me (when passing someone), (3) I didn\'t hear you (= pardon?), (4) a softener before disagreeing. You might even hear someone apologise to an object they\'ve bumped into!',
    contentEs:
      'Los británicos usan "sorry" mucho más que otros hablantes de inglés. Puede significar: (1) disculpa genuina, (2) perdón/permiso (al pasar), (3) no te he oído (= \u00bfcómo?), (4) suavizador antes de disentir. ¡Incluso puedes oír a alguien disculparse con un objeto contra el que ha chocado!',
    regions: ['UK'],
    formalityLevel: 'neutral',
    relatedTopics: [],
  },

  // ===== C2 ADDITIONAL (CONT-6) =====
  {
    id: 'cn-c2-extra1',
    level: 'C2',
    category: 'humor',
    title: 'British Understatement as High Art',
    titleEs: 'El understatement británico como arte',
    content:
      'British understatement is a defining feature of the culture. It means the deliberate use of a weaker expression than the reality warrants, often for ironic or humorous effect. Classic examples: "It\'s not ideal" (= it\'s a disaster), "I\'m not entirely convinced" (= I think you\'re completely wrong), "He\'s not unattractive" (double negative = he\'s quite good looking). The gap between what is said and what is meant is the essence of British wit.',
    contentEs:
      'El understatement británico es un rasgo definitorio de su cultura. Significa el uso deliberado de una expresión más suave que la realidad, a menudo con efecto irónico o humorístico. Ejemplos clásicos: "It\'s not ideal" (= es un desastre), "I\'m not entirely convinced" (= creo que estás totalmente equivocado), "He\'s not unattractive" (doble negativo = es bastante atractivo). La brecha entre lo que se dice y lo que se quiere decir es la esencia del humor británico.',
    regions: ['UK'],
    formalityLevel: 'neutral',
    relatedTopics: ['c2-pragmatic-implicature'],
  },
  {
    id: 'cn-c2-extra2',
    level: 'C2',
    category: 'formality',
    title: 'Oxbridge Interview Language',
    titleEs: 'El lenguaje de las entrevistas de Oxford y Cambridge',
    content:
      'Oxford and Cambridge interviews use highly specific register conventions. Interviewers expect candidates to "think aloud": "That\'s a fascinating question; let me work through that..." Hedging is valued over false certainty: "It seems to me that...", "One might argue that...", "I\'m inclined to think...". Interrupting with a reframing is acceptable: "Actually, I want to reconsider what I said earlier." This register is increasingly used in high-level academic and professional discussions.',
    contentEs:
      'Las entrevistas de Oxford y Cambridge usan convenciones de registro muy específicas. Los entrevistadores esperan que los candidatos "piensen en voz alta": "That\'s a fascinating question; let me work through that..." El hedging se valora sobre la falsa certeza: "It seems to me that...", "One might argue that...", "I\'m inclined to think...". Interrumpir con una reformulación es aceptable: "Actually, I want to reconsider what I said earlier." Este registro se usa cada vez más en discusiones académicas y profesionales de alto nivel.',
    regions: ['UK'],
    formalityLevel: 'formal',
    relatedTopics: ['c1-hedging', 'c2-metalinguistic-hedging'],
  },
  {
    id: 'cn-c2-extra3',
    level: 'C2',
    category: 'regional',
    title: 'Register in UK Legal and Parliamentary Language',
    titleEs: 'El registro en el lenguaje legal y parlamentario británico',
    content:
      'UK legal and parliamentary English preserves archaic structures: "Whereas" (formal preamble), "notwithstanding" (despite), "hereinafter referred to as" (from now on called), "the parties agree" (always plural, never "company agrees"). Parliamentary debate uses "My Right Honourable Friend" for allies and "The Honourable Member" for opponents. "I beg to move" starts a formal motion. These forms appear in real professional texts and C2 learners should recognise them.',
    contentEs:
      'El inglés legal y parlamentario británico conserva estructuras arcaicas: "Whereas" (preámbulo formal), "notwithstanding" (a pesar de), "hereinafter referred to as" (en adelante llamado), "the parties agree" (siempre plural). El debate parlamentario usa "My Right Honourable Friend" para aliados y "The Honourable Member" para opositores. "I beg to move" inicia una moción formal. Estas formas aparecen en textos profesionales reales y los estudiantes C2 deben reconocerlas.',
    regions: ['UK'],
    formalityLevel: 'formal',
    relatedTopics: ['c2-register-shift', 'c1-distancing-language'],
  },
];

// ── Helper functions ────────────────────────────────────────────────────────

export const getCulturalNotesByLevel = (level: CulturalNoteData['level']): CulturalNoteData[] =>
  culturalNotes.filter(n => n.level === level);

export const getCulturalNotesByCategory = (
  category: CulturalNoteData['category']
): CulturalNoteData[] =>
  culturalNotes.filter(n => n.category === category);

export const getCulturalNotesByRegion = (region: string): CulturalNoteData[] =>
  culturalNotes.filter(n => n.regions?.includes(region));

export const getRandomCulturalNote = (
  excludeIds: string[] = [],
  cefrLevel?: CulturalNoteData['level']
): CulturalNoteData | undefined => {
  const pool = culturalNotes.filter(
    n => !excludeIds.includes(n.id) && (!cefrLevel || n.level === cefrLevel)
  );
  return pool[Math.floor(Math.random() * pool.length)];
};

export const getCulturalNoteById = (id: string): CulturalNoteData | undefined =>
  culturalNotes.find(n => n.id === id);

export default culturalNotes;
