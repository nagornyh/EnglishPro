// Micro-lessons for quick learning sessions (3-5 minutes)
// Each lesson focuses on one specific concept

export interface MicroLesson {
  id: string;
  title: string;
  titleEs: string;
  category: 'grammar' | 'vocabulary' | 'pronunciation' | 'phrases' | 'tips';
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  duration: number; // in seconds
  content: LessonContent[];
  quickQuiz?: QuickQuizItem[];
  keyTakeaway: string;
  keyTakeawayEs: string;
}

export interface LessonContent {
  type: 'text' | 'example' | 'tip' | 'comparison' | 'audio';
  content: string;
  contentEs?: string;
  highlight?: string;
}

export interface QuickQuizItem {
  question: string;
  questionEs?: string;
  options: string[];
  correct: number;
  explanation: string;
  explanationEs?: string;
}

export const microLessons: MicroLesson[] = [
  // GRAMMAR LESSONS
  // A1 Lessons
  {
    id: 'ml-a1-greetings',
    title: 'Common Greetings Around the World',
    titleEs: 'Saludos comunes alrededor del mundo',
    category: 'phrases',
    level: 'A1',
    duration: 180,
    content: [
      {
        type: 'text',
        content: 'Greetings vary by time of day and formality. Learn the most common ones used in English-speaking countries.',
        contentEs: 'Los saludos varían según la hora del día y la formalidad. Aprende los más comunes en países de habla inglesa.',
      },
      {
        type: 'example',
        content: 'FORMAL:\n• Good morning (until noon)\n• Good afternoon (noon–evening)\n• Good evening (evening)\n• Good night (when leaving or going to bed)\n\nINFORMAL:\n• Hi / Hello\n• Hey\n• How are you? / How\'s it going?',
        highlight: 'Good morning, Good afternoon, Hi, Hello',
      },
      {
        type: 'tip',
        content: "🔑 'Good night' is NOT a greeting — use it when saying goodbye at night or before sleep.",
        contentEs: "🔑 'Good night' NO es un saludo — úsalo al despedirte por la noche o antes de dormir.",
      },
      {
        type: 'comparison',
        content: "GREETING: 'Good morning! How are you?'\nGOODBYE: 'Good night! Sleep well.'",
      },
    ],
    quickQuiz: [
      {
        question: "Which is correct when meeting someone at 3pm?",
        questionEs: "¿Cuál es correcto al encontrarte con alguien a las 3pm?",
        options: ['Good morning', 'Good afternoon', 'Good night', 'Good evening'],
        correct: 1,
        explanation: "3pm is afternoon — use 'Good afternoon'.",
        explanationEs: "Las 3pm es por la tarde — usa 'Good afternoon'.",
      },
    ],
    keyTakeaway: 'Use Good morning/afternoon/evening for formal greetings. Hi and Hello work anytime.',
    keyTakeawayEs: 'Usa Good morning/afternoon/evening para saludos formales. Hi y Hello funcionan en cualquier momento.',
  },
  {
    id: 'ml-a1-verb-be',
    title: 'The Verb BE - Am, Is, Are',
    titleEs: 'El verbo BE - Am, Is, Are',
    category: 'grammar',
    level: 'A1',
    duration: 200,
    content: [
      {
        type: 'text',
        content: "The verb BE is the most important verb in English. It has three forms in the present: am, is, are.",
        contentEs: "El verbo BE es el verbo más importante en inglés. Tiene tres formas en presente: am, is, are.",
      },
      {
        type: 'example',
        content: "I am (I'm) — yo soy/estoy\nYou are (You're) — tú eres/estás\nHe/She/It is (He's/She's/It's) — él/ella/eso es/está\nWe are (We're) — nosotros somos/estamos\nThey are (They're) — ellos son/están",
        highlight: 'am, is, are',
      },
      {
        type: 'tip',
        content: "🎯 Memorize: I → am, He/She/It → is, You/We/They → are",
        contentEs: "🎯 Memoriza: I → am, He/She/It → is, You/We/They → are",
      },
      {
        type: 'comparison',
        content: "✓ I am a student. / I'm a student.\n✓ She is from Spain. / She's from Spain.\n❌ I is a student.\n❌ She am from Spain.",
      },
    ],
    quickQuiz: [
      {
        question: "Complete: 'She ___ a teacher.'",
        options: ['am', 'is', 'are'],
        correct: 1,
        explanation: "She/He/It takes 'is'.",
        explanationEs: "She/He/It lleva 'is'.",
      },
      {
        question: "Complete: 'We ___ happy.'",
        options: ['am', 'is', 'are'],
        correct: 2,
        explanation: "We/You/They take 'are'.",
        explanationEs: "We/You/They llevan 'are'.",
      },
    ],
    keyTakeaway: 'I am, he/she/it is, you/we/they are. BE is different from other verbs!',
    keyTakeawayEs: 'I am, he/she/it is, you/we/they are. BE es diferente de otros verbos.',
  },
  {
    id: 'ml-a1-counting',
    title: 'Counting 1-20 in English',
    titleEs: 'Contar del 1 al 20 en inglés',
    category: 'vocabulary',
    level: 'A1',
    duration: 180,
    content: [
      {
        type: 'text',
        content: 'Numbers 1-20 are essential for everyday communication. Some have tricky spelling!',
        contentEs: 'Los números del 1 al 20 son esenciales para la comunicación cotidiana. ¡Algunos tienen ortografía difícil!',
      },
      {
        type: 'example',
        content: "1 one, 2 two, 3 three, 4 four, 5 five\n6 six, 7 seven, 8 eight, 9 nine, 10 ten\n11 eleven, 12 twelve, 13 thirteen, 14 fourteen, 15 fifteen\n16 sixteen, 17 seventeen, 18 eighteen, 19 nineteen, 20 twenty",
        highlight: 'eleven, twelve, thirteen, fifteen',
      },
      {
        type: 'tip',
        content: "⚠️ Watch the spelling: eleven (not 'oneteen'), twelve (not 'twoteen'), thirteen (not 'threeteen')",
        contentEs: "⚠️ Cuidado con la ortografía: eleven (no 'oneteen'), twelve (no 'twoteen'), thirteen (no 'threeteen')",
      },
      {
        type: 'comparison',
        content: "13 = thirteen (with 'th')\n30 = thirty (different from thirteen)\n\n14 = fourteen\n40 = forty (note: no 'u' in forty!)",
      },
    ],
    quickQuiz: [
      {
        question: "How do you spell the number 12?",
        options: ['twelv', 'twelve', 'twelbe', 'twelf'],
        correct: 1,
        explanation: "12 is spelled 'twelve' — one of the irregular numbers.",
        explanationEs: "12 se escribe 'twelve' — uno de los números irregulares.",
      },
    ],
    keyTakeaway: 'Learn 1-20 by heart. Pay special attention to eleven, twelve, thirteen, fifteen, and forty.',
    keyTakeawayEs: 'Aprende del 1 al 20 de memoria. Presta especial atención a eleven, twelve, thirteen, fifteen y forty.',
  },
  {
    id: 'ml-grammar-1',
    title: "When to Use 'A' vs 'An'",
    titleEs: "Cuándo usar 'A' vs 'An'",
    category: 'grammar',
    level: 'A1',
    duration: 180,
    content: [
      {
        type: 'text',
        content: "Use 'a' before consonant SOUNDS and 'an' before vowel SOUNDS.",
        contentEs: "Usa 'a' antes de SONIDOS consonantes y 'an' antes de SONIDOS vocálicos.",
      },
      {
        type: 'tip',
        content: "🔑 Key: It's about the SOUND, not the letter!",
        contentEs: "🔑 Clave: ¡Se trata del SONIDO, no de la letra!",
      },
      {
        type: 'example',
        content: "✓ a university (sounds like 'yoo') \n✓ an hour (the 'h' is silent) \n✓ a European (sounds like 'yoo')",
        highlight: 'university, hour, European',
      },
      {
        type: 'comparison',
        content: "❌ an university → ✓ a university\n❌ a honest person → ✓ an honest person",
      },
    ],
    quickQuiz: [
      {
        question: "I saw ___ elephant at the zoo.",
        options: ['a', 'an'],
        correct: 1,
        explanation: "'Elephant' starts with a vowel sound.",
        explanationEs: "'Elephant' comienza con un sonido vocálico.",
      },
      {
        question: "She is ___ honest woman.",
        options: ['a', 'an'],
        correct: 1,
        explanation: "The 'h' in 'honest' is silent, so it starts with a vowel sound.",
        explanationEs: "La 'h' en 'honest' es muda, así que comienza con sonido vocálico.",
      },
    ],
    keyTakeaway: "Listen to the first SOUND of the word, not just look at the first letter.",
    keyTakeawayEs: "Escucha el primer SONIDO de la palabra, no solo mires la primera letra.",
  },

  {
    id: 'ml-grammar-2',
    title: "Present Simple vs Present Continuous",
    titleEs: "Presente Simple vs Presente Continuo",
    category: 'grammar',
    level: 'A2',
    duration: 240,
    content: [
      {
        type: 'text',
        content: "Present Simple = habits, routines, facts\nPresent Continuous = right now, temporary",
        contentEs: "Presente Simple = hábitos, rutinas, hechos\nPresente Continuo = ahora mismo, temporal",
      },
      {
        type: 'example',
        content: "I work in an office. (my job - permanent)\nI'm working from home today. (temporary)",
        highlight: 'work, working',
      },
      {
        type: 'tip',
        content: "🕐 Time markers help:\n• Simple: always, usually, every day\n• Continuous: now, right now, at the moment",
      },
      {
        type: 'comparison',
        content: "She speaks Spanish. (ability/fact)\nShe's speaking Spanish. (right now)",
      },
    ],
    quickQuiz: [
      {
        question: "I usually ___ coffee in the morning.",
        options: ['drink', 'am drinking'],
        correct: 0,
        explanation: "'Usually' indicates a habit → Present Simple",
        explanationEs: "'Usually' indica un hábito → Presente Simple",
      },
      {
        question: "Shh! The baby ___.",
        options: ['sleeps', 'is sleeping'],
        correct: 1,
        explanation: "Right now, at this moment → Present Continuous",
        explanationEs: "Ahora mismo, en este momento → Presente Continuo",
      },
    ],
    keyTakeaway: "Simple = always true or repeated. Continuous = happening now or temporary.",
    keyTakeawayEs: "Simple = siempre verdad o repetido. Continuo = pasando ahora o temporal.",
  },

  {
    id: 'ml-grammar-3',
    title: "Much vs Many vs A lot of",
    titleEs: "Much vs Many vs A lot of",
    category: 'grammar',
    level: 'A2',
    duration: 180,
    content: [
      {
        type: 'text',
        content: "MUCH = uncountable (water, time, money)\nMANY = countable (books, people, cars)\nA LOT OF = both!",
        contentEs: "MUCH = incontable (agua, tiempo, dinero)\nMANY = contable (libros, personas, autos)\nA LOT OF = ¡ambos!",
      },
      {
        type: 'tip',
        content: "💡 'A lot of' works in any situation - use it when unsure!",
        contentEs: "💡 'A lot of' funciona en cualquier situación - ¡úsalo si no estás seguro!",
      },
      {
        type: 'example',
        content: "I don't have much time. (uncountable)\nI don't have many friends. (countable)\nI have a lot of work/a lot of emails. (both)",
      },
      {
        type: 'comparison',
        content: "❌ many money → ✓ much money\n❌ much books → ✓ many books",
      },
    ],
    quickQuiz: [
      {
        question: "How ___ sugar do you want?",
        options: ['much', 'many'],
        correct: 0,
        explanation: "Sugar is uncountable → much",
        explanationEs: "Sugar es incontable → much",
      },
      {
        question: "There aren't ___ students today.",
        options: ['much', 'many'],
        correct: 1,
        explanation: "Students is countable → many",
        explanationEs: "Students es contable → many",
      },
    ],
    keyTakeaway: "Can you count it? Many. Can't count it? Much. Not sure? A lot of!",
    keyTakeawayEs: "¿Puedes contarlo? Many. ¿No puedes? Much. ¿No estás seguro? A lot of!",
  },

  {
    id: 'ml-grammar-4',
    title: "The Zero Article",
    titleEs: "El artículo cero",
    category: 'grammar',
    level: 'B1',
    duration: 200,
    content: [
      {
        type: 'text',
        content: "Sometimes we don't use 'the' or 'a/an'. This is called the zero article.",
        contentEs: "A veces no usamos 'the' o 'a/an'. Esto se llama el artículo cero.",
      },
      {
        type: 'example',
        content: "✓ I love music. (in general)\n✓ Water is essential. (in general)\n✓ She's at work. (institution)\n✓ They go to school. (institution)",
        highlight: 'music, Water, work, school',
      },
      {
        type: 'tip',
        content: "No article for:\n• General concepts (love, life, music)\n• Meals (breakfast, lunch)\n• Institutions as purpose (school, work, bed)\n• Languages and sports",
      },
      {
        type: 'comparison',
        content: "I go to school. (student)\nI went to the school. (visited the building)\n\nLet's have dinner. (meal in general)\nThe dinner was delicious. (specific dinner)",
      },
    ],
    quickQuiz: [
      {
        question: "___ life is beautiful.",
        options: ['The', 'A', '(nothing)'],
        correct: 2,
        explanation: "General concept → no article",
        explanationEs: "Concepto general → sin artículo",
      },
    ],
    keyTakeaway: "No article for general concepts and institutions used for their purpose.",
    keyTakeawayEs: "Sin artículo para conceptos generales e instituciones usadas para su propósito.",
  },

  // VOCABULARY LESSONS
  {
    id: 'ml-vocab-1',
    title: "False Friends: Spanish-English",
    titleEs: "Falsos amigos: Español-Inglés",
    category: 'vocabulary',
    level: 'A2',
    duration: 200,
    content: [
      {
        type: 'text',
        content: "False friends are words that look similar but have different meanings.",
        contentEs: "Los falsos amigos son palabras que parecen similares pero tienen significados diferentes.",
      },
      {
        type: 'comparison',
        content: "ACTUAL ≠ actual\nactual (EN) = real, verdadero\nactualmente (ES) = currently\n\nEMBARRASSED ≠ embarazada\nembarrassed = avergonzado\nembarazada = pregnant",
      },
      {
        type: 'example',
        content: "More false friends:\n• sensible (EN) = sensato, NOT sensible\n• library (EN) = biblioteca, NOT librería\n• carpet (EN) = alfombra, NOT carpeta\n• exit (EN) = salida, NOT éxito",
      },
      {
        type: 'tip',
        content: "💡 When in doubt, check! These words trick even advanced learners.",
        contentEs: "💡 En caso de duda, ¡verifica! Estas palabras engañan incluso a estudiantes avanzados.",
      },
    ],
    quickQuiz: [
      {
        question: "She's very sensible about money.",
        questionEs: "Ella es muy _____ con el dinero.",
        options: ['sensible', 'sensata'],
        correct: 1,
        explanation: "Sensible (EN) = sensato/prudente, not sensitive",
        explanationEs: "Sensible (EN) = sensato/prudente, no sensible",
      },
    ],
    keyTakeaway: "Don't assume Spanish-looking words mean the same in English!",
    keyTakeawayEs: "¡No asumas que palabras que parecen españolas significan lo mismo en inglés!",
  },

  {
    id: 'ml-vocab-2',
    title: "Make vs Do",
    titleEs: "Make vs Do",
    category: 'vocabulary',
    level: 'A2',
    duration: 180,
    content: [
      {
        type: 'text',
        content: "MAKE = create, produce, construct\nDO = perform, complete, work on",
        contentEs: "MAKE = crear, producir, construir\nDO = realizar, completar, trabajar en",
      },
      {
        type: 'example',
        content: "MAKE:\nmake breakfast, make money, make a decision, make a mistake, make friends, make noise\n\nDO:\ndo homework, do exercise, do the dishes, do a favor, do business, do your best",
      },
      {
        type: 'tip',
        content: "🎯 General rule:\nMAKE = you create something new\nDO = you perform an activity",
        contentEs: "🎯 Regla general:\nMAKE = creas algo nuevo\nDO = realizas una actividad",
      },
      {
        type: 'comparison',
        content: "❌ do a mistake → ✓ make a mistake\n❌ make the dishes → ✓ do the dishes\n❌ do money → ✓ make money",
      },
    ],
    quickQuiz: [
      {
        question: "I need to ___ my homework.",
        options: ['make', 'do'],
        correct: 1,
        explanation: "Homework is an activity you perform → do",
        explanationEs: "Homework es una actividad que realizas → do",
      },
      {
        question: "She ___ a lot of mistakes on the test.",
        options: ['made', 'did'],
        correct: 0,
        explanation: "Mistakes are something you create (unfortunately) → make",
        explanationEs: "Los errores son algo que creas (desafortunadamente) → make",
      },
    ],
    keyTakeaway: "MAKE = create something. DO = perform an action.",
    keyTakeawayEs: "MAKE = crear algo. DO = realizar una acción.",
  },

  // PHRASES LESSONS
  {
    id: 'ml-phrases-1',
    title: "Agreeing and Disagreeing Politely",
    titleEs: "Estar de acuerdo y en desacuerdo cortésmente",
    category: 'phrases',
    level: 'B1',
    duration: 200,
    content: [
      {
        type: 'text',
        content: "Being polite when disagreeing is crucial in professional settings.",
        contentEs: "Ser cortés al estar en desacuerdo es crucial en entornos profesionales.",
      },
      {
        type: 'example',
        content: "AGREEING:\n• I completely agree.\n• That's a good point.\n• I think you're right.\n• I couldn't agree more.\n\nDISAGREEING POLITELY:\n• I see your point, but...\n• That's true, however...\n• I'm not sure I agree...\n• I understand what you mean, but...",
      },
      {
        type: 'tip',
        content: "🤝 Always acknowledge the other person's view before disagreeing:\n'That's an interesting point, but I think...'\n'I see where you're coming from, however...'",
      },
      {
        type: 'comparison',
        content: "❌ You're wrong. → ✓ I see it differently.\n❌ That's a bad idea. → ✓ I'm not sure that would work.\n❌ No! → ✓ I'm afraid I disagree.",
      },
    ],
    quickQuiz: [
      {
        question: "Which is the most polite way to disagree?",
        options: ["That's wrong.", "I see your point, but...", "No, I disagree."],
        correct: 1,
        explanation: "Acknowledging their view first makes disagreement more polite.",
        explanationEs: "Reconocer su punto de vista primero hace que el desacuerdo sea más cortés.",
      },
    ],
    keyTakeaway: "Acknowledge + BUT + Your opinion = Polite disagreement",
    keyTakeawayEs: "Reconocer + PERO + Tu opinión = Desacuerdo cortés",
  },

  {
    id: 'ml-phrases-2',
    title: "Giving Opinions in Meetings",
    titleEs: "Dar opiniones en reuniones",
    category: 'phrases',
    level: 'B1',
    duration: 180,
    content: [
      {
        type: 'text',
        content: "Professional opinion phrases for work meetings.",
        contentEs: "Frases profesionales para dar opiniones en reuniones de trabajo.",
      },
      {
        type: 'example',
        content: "EXPRESSING OPINIONS:\n• In my opinion, ...\n• I think/believe that...\n• From my point of view, ...\n• As I see it, ...\n• It seems to me that...\n\nSTRONGER:\n• I'm convinced that...\n• I firmly believe...\n• There's no doubt in my mind that...",
      },
      {
        type: 'tip',
        content: "💼 For professional settings, softer phrases are often better:\n'I would suggest that...'\n'Perhaps we could consider...'\n'One option might be...'",
      },
    ],
    keyTakeaway: "Use 'In my opinion' and 'I believe' for professional, confident opinions.",
    keyTakeawayEs: "Usa 'In my opinion' e 'I believe' para opiniones profesionales y seguras.",
  },

  // PRONUNCIATION LESSONS
  {
    id: 'ml-pron-1',
    title: "The Silent Letters",
    titleEs: "Las letras mudas",
    category: 'pronunciation',
    level: 'A2',
    duration: 180,
    content: [
      {
        type: 'text',
        content: "English has many silent letters. Here are the most common patterns.",
        contentEs: "El inglés tiene muchas letras mudas. Aquí están los patrones más comunes.",
      },
      {
        type: 'example',
        content: "Silent K: knife, know, knock, knee\nSilent W: write, wrong, answer, two\nSilent B: climb, comb, debt, doubt\nSilent G: sign, design, foreign\nSilent H: honest, hour, honor",
        highlight: 'knife, know, write, climb, sign, honest',
      },
      {
        type: 'tip',
        content: "🔇 Remember:\n• K before N is silent: KNOW, KNIFE\n• B after M is silent: CLIMB, THUMB\n• W before R is silent: WRITE, WRAP",
      },
      {
        type: 'audio',
        content: "Practice: know (no), write (rite), honest (onest)",
      },
    ],
    quickQuiz: [
      {
        question: "How is 'knight' pronounced?",
        options: ['/knaɪt/', '/naɪt/'],
        correct: 1,
        explanation: "The K is silent. It sounds like 'night'.",
        explanationEs: "La K es muda. Suena como 'night'.",
      },
    ],
    keyTakeaway: "Many silent letters follow patterns. Learn the patterns, not just individual words.",
    keyTakeawayEs: "Muchas letras mudas siguen patrones. Aprende los patrones, no solo palabras individuales.",
  },

  // TIPS LESSONS
  {
    id: 'ml-tips-1',
    title: "How to Sound More Natural",
    titleEs: "Cómo sonar más natural",
    category: 'tips',
    level: 'B1',
    duration: 200,
    content: [
      {
        type: 'text',
        content: "Native speakers use contractions and linking. You should too!",
        contentEs: "Los hablantes nativos usan contracciones y enlace. ¡Tú también deberías!",
      },
      {
        type: 'example',
        content: "USE CONTRACTIONS:\n• I am → I'm\n• I will → I'll\n• I would → I'd\n• Do not → Don't\n• Cannot → Can't",
      },
      {
        type: 'tip',
        content: "🎯 Link words together:\n'What are you doing?' → 'Whatcha doing?'\n'Going to' → 'Gonna' (informal)\n'Want to' → 'Wanna' (informal)",
        contentEs: "🎯 Enlaza palabras:\n'What are you doing?' → 'Whatcha doing?'\n'Going to' → 'Gonna' (informal)\n'Want to' → 'Wanna' (informal)",
      },
      {
        type: 'comparison',
        content: "Too formal:\n'I am going to the store. Do you want to come?'\n\nMore natural:\n'I'm going to the store. Wanna come?'",
      },
    ],
    keyTakeaway: "Use contractions in speaking. Full forms sound too formal or robotic.",
    keyTakeawayEs: "Usa contracciones al hablar. Las formas completas suenan muy formales o robóticas.",
  },

  {
    id: 'ml-tips-2',
    title: "Filler Words Like a Native",
    titleEs: "Palabras de relleno como un nativo",
    category: 'tips',
    level: 'B1',
    duration: 180,
    content: [
      {
        type: 'text',
        content: "Filler words give you time to think and sound more natural.",
        contentEs: "Las palabras de relleno te dan tiempo para pensar y suenan más naturales.",
      },
      {
        type: 'example',
        content: "COMMON FILLERS:\n• Well... (to start answering)\n• You know... (checking understanding)\n• I mean... (to clarify)\n• Like... (very informal)\n• Actually... (to add information)\n• Basically... (to simplify)",
      },
      {
        type: 'tip',
        content: "💬 Use them, but don't overuse them!\nGood: 'Well, I think we should...'\nBad: 'Well, like, you know, I mean, basically...'",
      },
      {
        type: 'comparison',
        content: "Without fillers (sounds robotic):\n'I disagree. The project is too expensive.'\n\nWith fillers (sounds natural):\n'Well, actually, I think the project might be too expensive.'",
      },
    ],
    keyTakeaway: "Fillers like 'well' and 'actually' make speech more natural.",
    keyTakeawayEs: "Rellenos como 'well' y 'actually' hacen el habla más natural.",
  },

  // === NEW LESSONS ===

  {
    id: 'ml-grammar-5',
    category: 'grammar',
    level: 'B1',
    title: 'Discourse Markers: Linking Your Ideas',
    titleEs: 'Marcadores del Discurso: Conecta tus Ideas',
    duration: 240,
    content: [
      {
        type: 'text',
        content: 'Discourse markers connect your ideas and make your English sound more academic and natural. They signal the relationship between sentences.',
        contentEs: 'Los marcadores del discurso conectan tus ideas y hacen que tu inglés suene más académico y natural.',
      },
      {
        type: 'example',
        content: 'ADDING → Furthermore, Moreover, In addition, What\'s more\nCONTRASTING → However, Nevertheless, On the other hand, That said\nCAUSE/EFFECT → Therefore, As a result, Consequently, Hence\nEXAMPLE → For instance, Such as, Namely, To illustrate',
      },
      {
        type: 'tip',
        content: '⚠️ PUNCTUATION RULE: Always put a comma after a discourse marker at the start of a sentence.\n✅ However, I disagree.\n❌ However I disagree.',
      },
      {
        type: 'comparison',
        content: 'WITHOUT markers (choppy):\n"The project was expensive. We continued with it. The results were mixed."\n\nWITH markers (fluent):\n"The project was expensive. Nevertheless, we continued with it. As a result, the outcomes were mixed."',
      },
    ],
    quickQuiz: [
      {
        question: 'Choose the correct discourse marker: "I studied all night. _____, I felt confident during the exam."',
        options: ['Despite', 'Therefore', 'Although', 'In spite of'],
        correct: 1,
        explanation: '"Therefore" introduces a result/consequence — the confidence is the result of studying all night.',
      },
    ],
    keyTakeaway: 'Discourse markers like "however" and "therefore" connect your ideas and show their relationship.',
    keyTakeawayEs: 'Los marcadores del discurso como "however" y "therefore" conectan tus ideas y muestran su relación.',
  },

  {
    id: 'ml-grammar-6',
    category: 'grammar',
    level: 'B2',
    title: 'Past Simple vs. Present Perfect: Still Confused?',
    titleEs: '¿Pasado simple vs. Present Perfect?: ¿Todavía confundido?',
    duration: 300,
    content: [
      {
        type: 'text',
        content: 'This is one of the most common mistakes for Spanish speakers. The key difference is CONNECTION TO THE PRESENT.\n\n• Past Simple: action finished, no link to now.\n• Present Perfect: action has a link to the present (result, experience, or ongoing relevance).',
        contentEs: 'Este es uno de los errores más comunes para los hispanohablantes. La diferencia clave es LA CONEXIÓN CON EL PRESENTE.',
      },
      {
        type: 'example',
        content: 'PAST SIMPLE (finished):\n"I lost my keys yesterday." (that\'s done)\n"She worked there from 2010 to 2018." (specific period, closed)\n\nPRESENT PERFECT (connected to now):\n"I have lost my keys." (I still can\'t find them — relevant now!)\n"She has worked there since 2010." (she still works there)',
      },
      {
        type: 'tip',
        content: '🚨 TIME WORD CLUES:\n→ yesterday / last year / in 2005 → Past Simple\n→ already / yet / ever / just / since / for → Present Perfect\n\n❌ "I have seen him yesterday."\n✅ "I saw him yesterday."',
      },
      {
        type: 'comparison',
        content: 'British vs American English:\nBrE: "Have you eaten yet?" → Present Perfect preferred\nAmE: "Did you eat yet?" → Past Simple also acceptable\n\nFor exams (IELTS, Cambridge), use British rules.',
      },
    ],
    quickQuiz: [
      {
        question: '"I ___ him last Tuesday." Which tense is correct?',
        options: ['have seen', 'saw', 'have been seeing', 'see'],
        correct: 1,
        explanation: '"Last Tuesday" is a specific finished time — Past Simple is required: "I saw him last Tuesday."',
      },
    ],
    keyTakeaway: 'Past Simple is for finished actions. Present Perfect links past actions to the present.',
    keyTakeawayEs: 'El Past Simple es para acciones terminadas. El Present Perfect conecta acciones pasadas con el presente.',
  },

  {
    id: 'ml-vocab-3',
    category: 'vocabulary',
    level: 'C1',
    title: 'Connotations: Thin, Slim, or Skinny?',
    titleEs: 'Connotaciones: ¿Thin, Slim o Skinny?',
    duration: 240,
    content: [
      {
        type: 'text',
        content: 'Near-synonyms share a core meaning but carry different emotional charges (connotations). Choosing the wrong one can be offensive or sound unnatural.\n\nConnotation types:\n✅ Positive — sounds like a compliment\n⚫ Neutral — just a description\n❌ Negative — can sound rude or critical',
        contentEs: 'Los cuasi-sinónimos comparten un significado central pero tienen diferentes cargas emocionales (connotaciones). Elegir el incorrecto puede ser ofensivo o sonar poco natural.',
      },
      {
        type: 'example',
        content: 'All mean "not large/not fat" but with different feel:\n\n✅ SLIM — neutral/positive: healthy, attractive ("You look slim!")\n✅ SLENDER — positive, formal/literary: gracefully thin\n⚫ THIN — neutral: no particular compliment or insult\n❌ SKINNY — slightly negative: unhealthily thin, can be rude\n❌ GAUNT — very negative: thin from illness or suffering',
      },
      {
        type: 'comparison',
        content: 'Same logic for HAPPY:\n\n"I feel content." → calm, peacefully satisfied (medium)\n"I\'m pleased." → satisfied about something specific (formal)\n"I\'m delighted!" → very happy (strong, enthusiastic)\n"I\'m ecstatic!" → overwhelmingly happy (very strong, informal)',
      },
      {
        type: 'tip',
        content: '💡 Strategy: When in doubt, choose the NEUTRAL or POSITIVE word, not the strongest one. Overusing strong words (livid, ecstatic, furious) can sound unnatural or dramatic.\n\nGolden rule: save strong connotation words for genuinely strong situations.',
      },
    ],
    quickQuiz: [
      {
        question: 'Your friend has lost weight and looks healthy. Which is the best compliment?',
        options: ['You look skinny!', 'You look slim!', 'You look gaunt!', 'You look thin!'],
        correct: 1,
        explanation: '"Slim" has a positive connotation. "Skinny" can be offensive, and "gaunt" implies unhealthy thinness.',
      },
    ],
    keyTakeaway: 'Near-synonyms have different connotations — always check the emotional charge before using them.',
    keyTakeawayEs: 'Los cuasi-sinónimos tienen connotaciones diferentes — siempre verifica la carga emocional antes de usarlos.',
  },

  {
    id: 'ml-tips-3',
    category: 'tips',
    level: 'B2',
    title: 'Register Switching: Sound Natural in Any Context',
    titleEs: 'Cambio de Registro: Suena Natural en Cualquier Contexto',
    duration: 180,
    content: [
      {
        type: 'text',
        content: 'Register = the level of formality you choose for a situation.\n\nNative speakers switch register automatically. Advanced learners must learn this deliberately.\n\n4 registers:\n1. Formal/Written — essays, emails to strangers, reports\n2. Professional — workplace, meetings, interviews\n3. Neutral/Conversational — friends, family, informal chat\n4. Slang/Casual — close friends, social media',
        contentEs: 'Registro = el nivel de formalidad que eliges para una situación.',
      },
      {
        type: 'comparison',
        content: 'SAME IDEA, 4 registers:\n\n1. Formal: "I would like to request a meeting at your earliest convenience."\n2. Professional: "Could we schedule a meeting this week?"\n3. Neutral: "Can we meet up sometime this week?"\n4. Casual: "Let\'s catch up soon!"',
      },
      {
        type: 'example',
        content: 'COMMON REGISTER MISTAKES:\n❌ Formal email: "Hey! Just wanted to say the report is done. Cheers!"\n❌ Job interview: "Yeah, I\'m well good at teamwork, like."\n\nFIXES:\n✅ Email: "Dear Ms. Chen, Please find attached the completed report."\n✅ Interview: "I have strong collaborative skills and enjoy working within a team."',
      },
      {
        type: 'tip',
        content: '🎯 QUICK REGISTER CHECK: Before speaking or writing, ask:\n• Who am I talking to? (boss / friend / stranger)\n• What\'s the situation? (email / chat / formal presentation)\n• What\'s THEIR register? (mirror it, don\'t mismatch)',
      },
    ],
    keyTakeaway: 'Register is choosing the RIGHT level of formality for each situation — crucial for sounding truly fluent.',
    keyTakeawayEs: 'El registro es elegir el nivel CORRECTO de formalidad para cada situación — crucial para sonar verdaderamente fluido.',
  },
  {
    id: 'ml-grammar-7',
    category: 'grammar',
    level: 'B2',
    title: 'Wish and If Only - Expressing Regret',
    titleEs: 'Wish e If Only - Expresar arrepentimiento',
    duration: 260,
    content: [
      {
        type: 'text',
        content: "Wish and If only express regret about the present or past. The grammar is tricky: we use PAST tenses to talk about UNREAL present situations.",
        contentEs: "Wish e If only expresan arrepentimiento sobre el presente o el pasado. La gramática es complicada: usamos tiempos PASADOS para hablar de situaciones presentes IRREALES.",
      },
      {
        type: 'example',
        content: "PRESENT REGRET (wish things were different now):\n• I wish I had more time. (I don't have enough time)\n• I wish I could speak French. (I can't)\n• If only I knew the answer! (I don't know)\n\nUse: wish/if only + past simple or could",
        highlight: 'wish, If only, past simple, could',
      },
      {
        type: 'example',
        content: "PAST REGRET (wish something in the past had been different):\n• I wish I had studied harder. (I didn't)\n• If only I hadn't said that! (I did say it)\n• She wishes she had taken the job. (She didn't)\n\nUse: wish/if only + past perfect (had + past participle)",
        highlight: 'had studied, hadn\'t said, had taken',
      },
      {
        type: 'tip',
        content: "🚨 Common mistake: 'I wish I would...' is WRONG for yourself. Use 'I wish I could...' or 'I wish I + past tense'.",
        contentEs: "🚨 Error común: 'I wish I would...' es INCORRECTO para ti mismo. Usa 'I wish I could...' o 'I wish I + pasado'.",
      },
      {
        type: 'comparison',
        content: "❌ I wish I would have more time.\n✅ I wish I had more time.\n\n❌ I wish I didn't say that.\n✅ I wish I hadn't said that. (past regret)",
      },
    ],
    quickQuiz: [
      {
        question: "Complete: 'I wish I ___ play the piano.' (I can't)",
        options: ['can', 'could', 'would', 'will'],
        correct: 1,
        explanation: "For present ability we don't have, use 'could' after wish.",
        explanationEs: "Para habilidad presente que no tenemos, usa 'could' después de wish.",
      },
      {
        question: "Complete: 'She wishes she ___ to the party.' (She didn't go)",
        options: ['went', 'had gone', 'would go', 'goes'],
        correct: 1,
        explanation: "Past regret → past perfect: 'had gone'.",
        explanationEs: "Arrepentimiento pasado → past perfect: 'had gone'.",
      },
    ],
    keyTakeaway: 'Wish + past = present regret. Wish + past perfect = past regret.',
    keyTakeawayEs: 'Wish + pasado = arrepentimiento presente. Wish + past perfect = arrepentimiento pasado.',
  },
  {
    id: 'ml-grammar-8',
    category: 'grammar',
    level: 'B2',
    title: 'Narrative Tenses for Storytelling',
    titleEs: 'Tiempos narrativos para contar historias',
    duration: 280,
    content: [
      {
        type: 'text',
        content: 'When telling stories, we use a mix of past tenses to show the order of events and create atmosphere. The main tenses are Past Simple, Past Continuous, and Past Perfect.',
        contentEs: 'Al contar historias, usamos una mezcla de tiempos pasados para mostrar el orden de los eventos y crear atmósfera. Los principales son Past Simple, Past Continuous y Past Perfect.',
      },
      {
        type: 'example',
        content: "PAST SIMPLE — main events:\n'I woke up, had breakfast, and left the house.'\n\nPAST CONTINUOUS — background/setting:\n'The sun was shining and birds were singing when I left.'\n\nPAST PERFECT — before another past event:\n'I had already finished breakfast when the phone rang.'",
        highlight: 'woke, was shining, had already finished',
      },
      {
        type: 'tip',
        content: "🎯 Story structure: Set the scene (Past Continuous) → Main events (Past Simple) → Earlier background (Past Perfect when needed)",
        contentEs: "🎯 Estructura de historia: Establece la escena (Past Continuous) → Eventos principales (Past Simple) → Fondo anterior (Past Perfect cuando haga falta)",
      },
      {
        type: 'comparison',
        content: "FLAT: 'I went to the shop. I bought milk. I went home.'\n\nVIVID: 'I was walking to the shop when I bumped into an old friend. I had forgotten how funny she was. We talked for an hour before I finally bought the milk.'",
      },
    ],
    quickQuiz: [
      {
        question: "Which tense sets the scene? 'It ___ (rain) when the accident happened.'",
        options: ['rained', 'was raining', 'had rained', 'has rained'],
        correct: 1,
        explanation: "Past Continuous describes the background situation when something happened.",
        explanationEs: "El Past Continuous describe la situación de fondo cuando algo ocurrió.",
      },
      {
        question: "For an action BEFORE another past action, we use:",
        options: ['Past Simple', 'Past Continuous', 'Past Perfect', 'Present Perfect'],
        correct: 2,
        explanation: "Past Perfect = had + past participle, for 'before' another past event.",
        explanationEs: "Past Perfect = had + participio pasado, para 'antes de' otro evento pasado.",
      },
    ],
    keyTakeaway: 'Past Simple = main events. Past Continuous = background. Past Perfect = before another past action.',
    keyTakeawayEs: 'Past Simple = eventos principales. Past Continuous = fondo. Past Perfect = antes de otra acción pasada.',
  },

  // === C1 LESSONS ===
  {
    id: 'ml-c1-nominalization',
    category: 'grammar',
    level: 'C1',
    title: 'Nominalization in Academic Writing',
    titleEs: 'Nominalización en escritura académica',
    duration: 280,
    content: [
      {
        type: 'text',
        content: 'Nominalization = turning verbs or adjectives into nouns. It makes academic writing more formal, concise, and objective. Common in research papers and reports.',
        contentEs: 'Nominalización = convertir verbos o adjetivos en sustantivos. Hace la escritura académica más formal, concisa y objetiva. Común en artículos de investigación e informes.',
      },
      {
        type: 'example',
        content: "VERB → NOUN:\n• analyze → analysis\n• investigate → investigation\n• conclude → conclusion\n• demonstrate → demonstration\n• explain → explanation\n\nADJECTIVE → NOUN:\n• accurate → accuracy\n• possible → possibility\n• significant → significance\n• efficient → efficiency",
        highlight: 'analyze, analysis, accurate, accuracy',
      },
      {
        type: 'comparison',
        content: "VERBAL (less formal): 'The researchers analyzed the data and found that...'\n\nNOMINALIZED (academic): 'The analysis of the data revealed that...'\n\n'The government decided to reduce emissions.' → 'The government's decision to reduce emissions...'",
      },
      {
        type: 'tip',
        content: "💡 Over-nominalizing can make writing heavy. Balance is key. Use nominalization for key concepts; keep verbs for actions.",
        contentEs: "💡 La sobre-nominalización puede hacer la escritura pesada. El equilibrio es clave. Usa nominalización para conceptos clave; mantén verbos para acciones.",
      },
    ],
    quickQuiz: [
      {
        question: "Convert to nominalized form: 'The team investigated the cause.'",
        options: ['The team\'s investigation of the cause', 'The team investigated the cause', 'The team was investigating the cause', 'The team had investigated the cause'],
        correct: 0,
        explanation: "'Investigation' (noun) replaces 'investigated' (verb) for more formal academic style.",
        explanationEs: "'Investigation' (sustantivo) reemplaza 'investigated' (verbo) para un estilo académico más formal.",
      },
    ],
    keyTakeaway: 'Nominalization = verbs/adjectives → nouns. Makes academic writing more formal and concise.',
    keyTakeawayEs: 'Nominalización = verbos/adjetivos → sustantivos. Hace la escritura académica más formal y concisa.',
  },
  {
    id: 'ml-c1-hedging',
    category: 'tips',
    level: 'C1',
    title: 'Hedging Language for Research Papers',
    titleEs: 'Lenguaje de atenuación para artículos de investigación',
    duration: 260,
    content: [
      {
        type: 'text',
        content: "Hedging = using cautious language to show you're not claiming 100% certainty. Essential in academic writing to sound credible and avoid overgeneralization.",
        contentEs: "Hedging = usar lenguaje cauteloso para mostrar que no afirmas certeza absoluta. Esencial en escritura académica para sonar creíble y evitar sobre-generalización.",
      },
      {
        type: 'example',
        content: "HEDGING VERBS: suggest, indicate, appear, seem, tend, may, might, could\nHEDGING ADVERBS: possibly, probably, generally, typically, often, somewhat\nHEDGING PHRASES: It appears that..., The evidence suggests..., It is likely that..., To some extent...",
        highlight: 'suggest, indicate, appear, possibly, The evidence suggests',
      },
      {
        type: 'comparison',
        content: "TOO STRONG (avoid): 'This proves that climate change is caused by humans.'\n\nHEDGED (academic): 'The evidence suggests that human activity may contribute significantly to climate change.'\n\n'Children learn faster.' → 'Children tend to learn more quickly in certain conditions.'",
      },
      {
        type: 'tip',
        content: "🎯 Use hedging when: stating conclusions, generalizing, or when evidence isn't 100%. Don't over-hedge — it can sound weak. Balance confidence with caution.",
        contentEs: "🎯 Usa hedging cuando: afirmes conclusiones, generalices, o cuando la evidencia no sea 100%. No sobre-atenúes — puede sonar débil. Equilibra confianza con cautela.",
      },
    ],
    quickQuiz: [
      {
        question: "Which is better for academic writing?",
        options: ['This proves the theory.', 'The results suggest that the theory may be supported.', 'Everybody knows this.', 'It is absolutely certain.'],
        correct: 1,
        explanation: "Hedged language ('suggest', 'may be supported') is appropriate for academic conclusions.",
        explanationEs: "El lenguaje atenuado ('suggest', 'may be supported') es apropiado para conclusiones académicas.",
      },
    ],
    keyTakeaway: 'Use hedging (suggest, may, tend to, appear) to show appropriate caution in academic writing.',
    keyTakeawayEs: 'Usa hedging (suggest, may, tend to, appear) para mostrar cautela apropiada en escritura académica.',
  },
  {
    id: 'ml-c1-linking',
    category: 'grammar',
    level: 'C1',
    title: 'Advanced Linking Devices',
    titleEs: 'Conectores avanzados',
    duration: 260,
    content: [
      {
        type: 'text',
        content: 'Advanced linking devices create sophisticated connections between ideas. They go beyond basic connectors (however, therefore) to show precise relationships.',
        contentEs: 'Los conectores avanzados crean conexiones sofisticadas entre ideas. Van más allá de los básicos (however, therefore) para mostrar relaciones precisas.',
      },
      {
        type: 'example',
        content: "ADDITION (beyond 'also'): Furthermore, Moreover, In addition to this, What is more, Not only... but also\n\nCONTRAST (nuanced): Nevertheless, Nonetheless, Notwithstanding, Albeit, Albeit + adjective\n\nCAUSE-EFFECT: Consequently, Thus, Hence, Thereby, As a consequence\n\nEXEMPLIFICATION: To illustrate, By way of example, A case in point is",
        highlight: 'Furthermore, Nevertheless, Consequently, To illustrate',
      },
      {
        type: 'comparison',
        content: "BASIC: 'The project was expensive. However, we continued.'\n\nADVANCED: 'The project was expensive. Notwithstanding the cost, we proceeded with the implementation.'\n\n'He was tired. He finished the work.' → 'Albeit tired, he completed the work.'",
      },
      {
        type: 'tip',
        content: "🔑 'Albeit' = although, but more formal. Use before adjective: 'The solution, albeit imperfect, was accepted.' Never 'albeit + clause'.",
        contentEs: "🔑 'Albeit' = aunque, pero más formal. Usa antes de adjetivo: 'The solution, albeit imperfect, was accepted.' Nunca 'albeit + cláusula'.",
      },
    ],
    quickQuiz: [
      {
        question: "Complete: 'The plan was risky. ___, we decided to proceed.'",
        options: ['However', 'Nevertheless', 'Because', 'So'],
        correct: 1,
        explanation: "'Nevertheless' = despite that, formal contrast. Both 'however' and 'nevertheless' work; 'nevertheless' is more formal.",
        explanationEs: "'Nevertheless' = a pesar de eso, contraste formal. Tanto 'however' como 'nevertheless' funcionan; 'nevertheless' es más formal.",
      },
      {
        question: "Which is correct?",
        options: ['Albeit he was tired, he continued.', 'He continued, albeit tired.', 'Albeit tired, but he continued.', 'He albeit continued.'],
        correct: 1,
        explanation: "'Albeit' is followed by an adjective or noun phrase, not a full clause.",
        explanationEs: "'Albeit' va seguido de adjetivo o frase nominal, no de cláusula completa.",
      },
    ],
    keyTakeaway: 'Advanced linkers: Furthermore, Nevertheless, Consequently, Albeit. Use for sophisticated academic writing.',
    keyTakeawayEs: 'Conectores avanzados: Furthermore, Nevertheless, Consequently, Albeit. Úsalos para escritura académica sofisticada.',
  },

  // === C2 LESSONS ===

  {
    id: 'ml-c2-pragmatics',
    title: "British Understatement: What They Really Mean",
    titleEs: "La subestimación británica: Lo que realmente quieren decir",
    category: 'grammar',
    level: 'C2',
    duration: 300,
    content: [
      {
        type: 'text',
        content: "British English often uses understatement — saying less than you mean. What sounds modest or lukewarm can actually express strong approval or serious concern. Spanish tends to be more direct.",
        contentEs: "El inglés británico usa frecuentemente la subestimación — decir menos de lo que se quiere expresar. Lo que suena modesto o tibio puede expresar en realidad una fuerte aprobación o preocupación seria. El español tiende a ser más directo.",
      },
      {
        type: 'example',
        content: "BRITISH UNDERSTATEMENT → REAL MEANING:\n• 'Not bad at all' → Excellent!\n• 'A bit of a problem' → Serious issue\n• 'Quite good' → Mediocre (in BrE!)\n• 'I hear what you're saying' → I disagree\n• 'Interesting' → I don't like it\n• 'We might have a slight issue' → We have a big problem",
        highlight: 'Not bad at all, A bit of a problem, Quite good, I hear what you\'re saying',
      },
      {
        type: 'comparison',
        content: "SPANISH (direct): '¡Esto es excelente!'\nBRITISH (understated): 'Not bad at all.'\n\nSPANISH (direct): 'Esto es un desastre.'\nBRITISH (understated): 'It's a bit of a mess.'\n\n⚠️ 'Quite good' in British English often means 'mediocre' — the opposite of American usage!",
      },
      {
        type: 'tip',
        content: "🔑 When a British person says 'I hear what you're saying,' they often mean they disagree but are being polite. Don't assume agreement!",
        contentEs: "🔑 Cuando un británico dice 'I hear what you're saying,' a menudo significa que no está de acuerdo pero es cortés. ¡No asumas que está de acuerdo!",
      },
    ],
    quickQuiz: [
      {
        question: "A British colleague says 'We might have a slight issue with the deadline.' What do they likely mean?",
        questionEs: "Un colega británico dice 'We might have a slight issue with the deadline.' ¿Qué probablemente quiere decir?",
        options: ['A minor delay is possible', 'We have a serious problem', 'Everything is fine', 'They are unsure'],
        correct: 1,
        explanation: "British understatement: 'slight issue' often means a serious problem. They're softening the bad news.",
        explanationEs: "Subestimación británica: 'slight issue' a menudo significa un problema serio. Están suavizando las malas noticias.",
      },
      {
        question: "What does 'I hear what you're saying' typically imply in British English?",
        options: ['I agree completely', 'I disagree but am being polite', 'I didn\'t understand', 'I need more information'],
        correct: 1,
        explanation: "It's a polite way to disagree. The speaker acknowledges your point but doesn't accept it.",
        explanationEs: "Es una forma cortés de estar en desacuerdo. El hablante reconoce tu punto pero no lo acepta.",
      },
    ],
    keyTakeaway: "British understatement often means the opposite of what it sounds like — 'not bad' can mean excellent, 'a bit of a problem' can mean serious.",
    keyTakeawayEs: "La subestimación británica a menudo significa lo contrario de lo que suena — 'not bad' puede significar excelente, 'a bit of a problem' puede significar serio.",
  },

  {
    id: 'ml-c2-register',
    title: "Frozen Register: Legal & Ceremonial Language",
    titleEs: "Registro congelado: Lenguaje legal y ceremonial",
    category: 'tips',
    level: 'C2',
    duration: 240,
    content: [
      {
        type: 'text',
        content: "The frozen register is the highest, most formal level of language. It is fixed, unchanging, and used in legal documents, oaths, and ceremonial contexts. Never use it casually — it would sound absurd.",
        contentEs: "El registro congelado es el nivel más alto y formal del lenguaje. Es fijo, inmutable y se usa en documentos legales, juramentos y contextos ceremoniales. Nunca lo uses de forma casual — sonaría absurdo.",
      },
      {
        type: 'example',
        content: "LEGAL LANGUAGE:\n• hereinafter (en adelante)\n• aforementioned (mencionado anteriormente)\n• notwithstanding (no obstante)\n• pursuant to (conforme a)\n• herein (en el presente documento)\n\nCEREMONIAL LANGUAGE:\n• I do solemnly swear...\n• May it please the court...\n• We hereby declare...\n• By virtue of the power vested in me...",
        highlight: 'hereinafter, aforementioned, notwithstanding, I do solemnly swear, May it please the court',
      },
      {
        type: 'tip',
        content: "⚠️ NEVER use frozen register casually. Saying 'I hereby declare that I'm going to the shop' would make you sound ridiculous. Reserve it for legal, religious, or official ceremonies only.",
        contentEs: "⚠️ NUNCA uses el registro congelado de forma casual. Decir 'I hereby declare that I'm going to the shop' te haría sonar ridículo. Resérvalo solo para ceremonias legales, religiosas u oficiales.",
      },
      {
        type: 'comparison',
        content: "FROZEN: 'The aforementioned party shall hereinafter be referred to as the Lessee.'\nFORMAL: 'The tenant will be referred to as the Lessee in this document.'\nNEUTRAL: 'We'll call the tenant the Lessee.'",
      },
    ],
    quickQuiz: [
      {
        question: "Which sentence belongs to the frozen register?",
        questionEs: "¿Qué oración pertenece al registro congelado?",
        options: ['Could you please send me the report?', 'I do solemnly swear to tell the truth.', 'We need to discuss the project.', 'Let\'s meet tomorrow.'],
        correct: 1,
        explanation: "'I do solemnly swear' is ceremonial/oath language — the frozen register. The others are formal, professional, or casual.",
        explanationEs: "'I do solemnly swear' es lenguaje ceremonial/juramento — el registro congelado. Las demás son formales, profesionales o casuales.",
      },
      {
        question: "Identify the frozen register phrase:",
        options: ['in my opinion', 'hereinafter', 'as a result', 'for example'],
        correct: 1,
        explanation: "'Hereinafter' is legal/formal document language — frozen register. The others are discourse markers or common phrases.",
        explanationEs: "'Hereinafter' es lenguaje legal/formal de documentos — registro congelado. Las demás son marcadores del discurso o frases comunes.",
      },
    ],
    keyTakeaway: "Frozen register is for legal documents and ceremonies only. Using it in everyday speech sounds absurd.",
    keyTakeawayEs: "El registro congelado es solo para documentos legales y ceremonias. Usarlo en el habla cotidiana suena absurdo.",
  },

  {
    id: 'ml-c2-cohesion',
    title: "Advanced Cohesion: Substitution and Ellipsis",
    titleEs: "Cohesión avanzada: Sustitución y elipsis",
    category: 'grammar',
    level: 'C2',
    duration: 300,
    content: [
      {
        type: 'text',
        content: "Cohesion makes writing flow. Substitution replaces repeated words with shorter forms ('do so', 'that of', 'the former/the latter'). Ellipsis omits words that can be understood from context.",
        contentEs: "La cohesión hace que la escritura fluya. La sustitución reemplaza palabras repetidas con formas más cortas ('do so', 'that of', 'the former/the latter'). La elipsis omite palabras que se pueden entender por contexto.",
      },
      {
        type: 'example',
        content: "SUBSTITUTION:\n• 'She asked him to leave. He did so.' (did so = left)\n• 'The cost of living here exceeds that of London.' (that of = the cost of)\n• 'We have two options. The former is cheaper; the latter is faster.'\n\nELLIPSIS:\n• 'Can you finish?' 'I'll try [to finish].'\n• 'She might come. I hope [she does].'\n• 'He's taller than I [am].'",
        highlight: 'did so, that of, The former, the latter, I\'ll try',
      },
      {
        type: 'comparison',
        content: "CHOPPY (repetitive):\n'The study was conducted in 2020. The study found significant results. The study was published in Nature.'\n\nCOHESIVE (substitution/ellipsis):\n'The study was conducted in 2020. It found significant results and was published in Nature.'",
      },
      {
        type: 'tip',
        content: "🔑 Use 'the former' for the first of two things, 'the latter' for the second. Never use them for more than two items.",
        contentEs: "🔑 Usa 'the former' para la primera de dos cosas, 'the latter' para la segunda. Nunca los uses para más de dos elementos.",
      },
    ],
    quickQuiz: [
      {
        question: "Complete with the best cohesive device: 'The population of Tokyo exceeds ___ of New York.'",
        options: ['it', 'that of', 'the one', 'this'],
        correct: 1,
        explanation: "'That of' substitutes for 'the population of' — standard in formal/academic writing.",
        explanationEs: "'That of' sustituye a 'the population of' — estándar en escritura formal/académica.",
      },
      {
        question: "What does 'He did so' substitute for in: 'She asked him to apologise. He did so.'?",
        options: ['asked', 'she', 'apologise', 'apologised'],
        correct: 3,
        explanation: "'Did so' substitutes for the verb phrase 'apologised' — avoiding repetition.",
        explanationEs: "'Did so' sustituye a la frase verbal 'apologised' — evitando la repetición.",
      },
    ],
    keyTakeaway: "Use 'do so', 'that of', and 'the former/the latter' to avoid repetition. Ellipsis omits recoverable words for smoother text.",
    keyTakeawayEs: "Usa 'do so', 'that of' y 'the former/the latter' para evitar repetición. La elipsis omite palabras recuperables para un texto más fluido.",
  },

  {
    id: 'ml-c2-collocations',
    title: "Academic Collocations You Must Know",
    titleEs: "Colocaciones académicas que debes conocer",
    category: 'vocabulary',
    level: 'C2',
    duration: 240,
    content: [
      {
        type: 'text',
        content: "Academic writing relies on fixed word partnerships (collocations). Using the wrong verb with a noun sounds unnatural and can lower your grade. Learn these high-frequency academic collocations.",
        contentEs: "La escritura académica depende de asociaciones fijas de palabras (colocaciones). Usar el verbo equivocado con un sustantivo suena poco natural y puede bajar tu nota. Aprende estas colocaciones académicas de alta frecuencia.",
      },
      {
        type: 'example',
        content: "CORRECT ACADEMIC COLLOCATIONS:\n• carry out research (NOT make/do research)\n• draw conclusions (NOT do/make conclusions)\n• pose a challenge (NOT make a challenge)\n• yield results (NOT give/produce results)\n• address concerns (NOT solve concerns)\n• raise questions (NOT make questions)\n• shed light on (NOT give light on)",
        highlight: 'carry out research, draw conclusions, pose a challenge, yield results, shed light on',
      },
      {
        type: 'comparison',
        content: "❌ COMMON ERRORS → ✅ CORRECT:\n• make research → carry out research\n• do conclusions → draw conclusions\n• give results → yield results\n• solve concerns → address concerns\n• make a question → raise a question",
      },
      {
        type: 'tip',
        content: "💡 'Shed light on' = clarify or explain. 'The study sheds light on the causes of climate change.' Use it in introductions and conclusions.",
        contentEs: "💡 'Shed light on' = aclarar o explicar. 'The study sheds light on the causes of climate change.' Úsalo en introducciones y conclusiones.",
      },
    ],
    quickQuiz: [
      {
        question: "Which collocation is correct?",
        options: ['make research', 'carry out research', 'do research', 'create research'],
        correct: 1,
        explanation: "'Carry out research' is the standard academic collocation. 'Make' and 'do' research are common errors.",
        explanationEs: "'Carry out research' es la colocación académica estándar. 'Make' y 'do' research son errores comunes.",
      },
      {
        question: "Complete: 'The findings ___ light on the issue.'",
        options: ['give', 'shed', 'put', 'make'],
        correct: 1,
        explanation: "'Shed light on' is the fixed collocation meaning 'clarify' or 'explain'.",
        explanationEs: "'Shed light on' es la colocación fija que significa 'aclarar' o 'explicar'.",
      },
    ],
    keyTakeaway: "Academic collocations are fixed: carry out research, draw conclusions, shed light on. Avoid common errors like 'make research' or 'do conclusions'.",
    keyTakeawayEs: "Las colocaciones académicas son fijas: carry out research, draw conclusions, shed light on. Evita errores comunes como 'make research' o 'do conclusions'.",
  },

  {
    id: 'ml-c2-irony',
    title: "Irony, Sarcasm, and Deadpan Humour",
    titleEs: "Ironía, sarcasmo y humor muerto",
    category: 'tips',
    level: 'C2',
    duration: 240,
    content: [
      {
        type: 'text',
        content: "Irony = saying the opposite of what you mean. Sarcasm = ironic criticism, often sharp. Deadpan = delivering ironic or absurd lines with a straight face. British sarcasm tends to be drier and subtler than American.",
        contentEs: "Ironía = decir lo contrario de lo que quieres decir. Sarcasmo = crítica irónica, a menudo mordaz. Deadpan = entregar líneas irónicas o absurdas con cara seria. El sarcasmo británico tiende a ser más seco y sutil que el americano.",
      },
      {
        type: 'example',
        content: "COMMON IRONIC PHRASES:\n• 'Oh, wonderful!' (when something goes wrong)\n• 'Thanks for nothing.' (when someone didn't help)\n• 'That went well.' (after a disaster)\n• 'Brilliant.' (sarcastic — meaning the opposite)\n• 'Oh, great.' (disappointed, not pleased)\n\nDeadpan: saying something absurd with no change in tone or expression.",
        highlight: 'Oh wonderful, Thanks for nothing, That went well, Brilliant',
      },
      {
        type: 'comparison',
        content: "BRITISH: drier, understated, often with 'lovely' or 'brilliant' said flatly\nAMERICAN: more obvious tone shift, 'Oh, reeeally?' with exaggerated emphasis\n\nContext is key: the same words can be sincere or ironic depending on situation and tone.",
      },
      {
        type: 'tip',
        content: "🔑 Context is key. 'Oh, wonderful!' with a smile after good news = sincere. 'Oh, wonderful!' with a sigh after a spill = sarcastic. Watch facial expressions and tone.",
        contentEs: "🔑 El contexto es clave. 'Oh, wonderful!' con una sonrisa tras buenas noticias = sincero. 'Oh, wonderful!' con un suspiro tras un derrame = sarcástico. Observa las expresiones faciales y el tono.",
      },
    ],
    quickQuiz: [
      {
        question: "Someone spills coffee on your laptop and says 'Oh, wonderful!' What do they mean?",
        questionEs: "Alguien derrama café en tu portátil y dice 'Oh, wonderful!' ¿Qué quieren decir?",
        options: ['They are genuinely pleased', 'They are being sarcastic', 'They are confused', 'They are apologising'],
        correct: 1,
        explanation: "In this context, 'wonderful' is ironic — they mean the opposite. The situation (spilled coffee) makes the sarcasm clear.",
        explanationEs: "En este contexto, 'wonderful' es irónico — quieren decir lo contrario. La situación (café derramado) hace claro el sarcasmo.",
      },
      {
        question: "What does 'Thanks for nothing' typically express?",
        options: ['Genuine gratitude', 'Sarcastic disappointment', 'Neutral thanks', 'A request for help'],
        correct: 1,
        explanation: "'Thanks for nothing' is a fixed ironic phrase — it expresses that the person did NOT help when they could have.",
        explanationEs: "'Thanks for nothing' es una frase irónica fija — expresa que la persona NO ayudó cuando pudo haberlo hecho.",
      },
    ],
    keyTakeaway: "Irony and sarcasm say the opposite of what they mean. Context and tone are essential — 'Oh, wonderful!' can be sincere or sarcastic.",
    keyTakeawayEs: "La ironía y el sarcasmo dicen lo contrario de lo que significan. El contexto y el tono son esenciales — 'Oh, wonderful!' puede ser sincero o sarcástico.",
  },
];

// Helper functions
export const getLessonsByCategory = (category: MicroLesson['category']) => {
  return microLessons.filter(l => l.category === category);
};

export const getLessonsByLevel = (level: MicroLesson['level']) => {
  return microLessons.filter(l => l.level === level);
};

export const getRandomLesson = (excludeIds: string[] = []) => {
  const available = microLessons.filter(l => !excludeIds.includes(l.id));
  return available[Math.floor(Math.random() * available.length)];
};

export const getLessonById = (id: string) => {
  return microLessons.find(l => l.id === id);
};

export const getDailyLesson = () => {
  // Get lesson based on day of year for consistency
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % microLessons.length;
  return microLessons[index];
};
