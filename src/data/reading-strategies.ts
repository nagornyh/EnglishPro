// Reading Strategies - Explicit strategy instruction by CEFR level
// Estrategias de lectura - Instrucción explícita por nivel CEFR

export interface ReadingStrategy {
  id: string;
  name: string;
  nameEs: string;
  level: 1 | 2 | 3 | 4;
  description: string;
  descriptionEs: string;
  steps: { step: string; stepEs: string }[];
  exampleText: string;
  exampleApplication: {
    instruction: string;
    instructionEs: string;
    modelAnswer: string;
  };
  practiceExercise: {
    text: string;
    task: string;
    taskEs: string;
    hints?: string[];
  };
}

export const readingStrategies: ReadingStrategy[] = [
  // === A1-A2: BASIC STRATEGIES ===
  {
    id: 'rs-scanning',
    name: 'Scanning for Specific Information',
    nameEs: 'Escaneo para información específica',
    level: 1,
    description: 'Move your eyes quickly over the text to find specific details (dates, names, numbers) WITHOUT reading every word.',
    descriptionEs: 'Mueve los ojos rápidamente por el texto para encontrar detalles específicos (fechas, nombres, números) SIN leer cada palabra.',
    steps: [
      { step: 'Read the question first — know what you\'re looking for.', stepEs: 'Lee la pregunta primero — sabe qué estás buscando.' },
      { step: 'Look for key words: numbers, names, capital letters.', stepEs: 'Busca palabras clave: números, nombres, mayúsculas.' },
      { step: 'Move your finger quickly down the text.', stepEs: 'Mueve el dedo rápidamente por el texto.' },
      { step: 'When you find the key word, read that sentence carefully.', stepEs: 'Cuando encuentres la palabra clave, lee esa oración con cuidado.' },
    ],
    exampleText: 'The London Eye is open every day from 10:00 AM to 8:30 PM. Adult tickets cost £30 and children under 15 pay £24. The ride takes approximately 30 minutes. It is located on the South Bank of the River Thames, near Westminster Bridge.',
    exampleApplication: {
      instruction: 'How much is a ticket for a 12-year-old?',
      instructionEs: '¿Cuánto cuesta una entrada para un niño de 12 años?',
      modelAnswer: '£24 — I scanned for numbers and found "children under 15 pay £24". A 12-year-old is under 15.',
    },
    practiceExercise: {
      text: 'York Castle Museum is open Monday to Saturday, 9:30 AM to 5:00 PM, and Sundays from 11:00 AM to 4:00 PM. Admission is £13.50 for adults, £9.50 for seniors, and free for children under 5. The museum has free parking and a café.',
      task: 'You arrive on Sunday at 10:00 AM. Can you enter? What time does it open?',
      taskEs: 'Llegas un domingo a las 10:00 AM. ¿Puedes entrar? ¿A qué hora abre?',
      hints: ['Look for "Sunday"', 'Find the time next to it'],
    }
  },
  {
    id: 'rs-skimming',
    name: 'Skimming for the Main Idea',
    nameEs: 'Lectura rápida para la idea principal',
    level: 1,
    description: 'Read quickly to understand the GENERAL topic and main idea. Don\'t worry about unknown words.',
    descriptionEs: 'Lee rápidamente para entender el TEMA GENERAL y la idea principal. No te preocupes por palabras desconocidas.',
    steps: [
      { step: 'Read the title and any headings.', stepEs: 'Lee el título y los subtítulos.' },
      { step: 'Read the first sentence of each paragraph.', stepEs: 'Lee la primera oración de cada párrafo.' },
      { step: 'Read the last paragraph (conclusion).', stepEs: 'Lee el último párrafo (conclusión).' },
      { step: 'Ask yourself: "What is this text about in one sentence?"', stepEs: 'Pregúntate: "¿De qué trata este texto en una oración?"' },
    ],
    exampleText: 'The Benefits of Walking\n\nWalking is one of the simplest forms of exercise. You don\'t need special equipment — just comfortable shoes. Doctors recommend walking at least 30 minutes a day.\n\nRegular walking improves your heart health and helps you maintain a healthy weight. It also reduces stress and improves your mood.\n\nIn addition, walking is free and you can do it anywhere. You can walk in a park, around your neighborhood, or even inside a shopping center on rainy days.',
    exampleApplication: {
      instruction: 'What is the main idea of this text?',
      instructionEs: '¿Cuál es la idea principal de este texto?',
      modelAnswer: 'Walking is a simple, free, and healthy form of exercise that anyone can do.',
    },
    practiceExercise: {
      text: 'Electric Cars: A Growing Trend\n\nMore people are buying electric cars every year. In 2023, electric car sales increased by 35% worldwide. Many governments offer tax benefits to encourage people to switch.\n\nElectric cars are better for the environment because they produce zero emissions. They are also cheaper to maintain than traditional cars.\n\nHowever, some challenges remain. Charging stations are not available everywhere, and batteries are still expensive to replace.',
      task: 'After skimming (30 seconds max!), what is this text about? Is the author positive or negative about electric cars?',
      taskEs: 'Después de escanear (¡máximo 30 segundos!), ¿de qué trata este texto? ¿El autor es positivo o negativo sobre los coches eléctricos?',
    }
  },
  // === B1: INTERMEDIATE STRATEGIES ===
  {
    id: 'rs-inferring',
    name: 'Inferring Meaning from Context',
    nameEs: 'Inferir significado por contexto',
    level: 2,
    description: 'Guess the meaning of unknown words using clues from the surrounding text, instead of using a dictionary.',
    descriptionEs: 'Adivina el significado de palabras desconocidas usando pistas del texto circundante, en lugar de usar diccionario.',
    steps: [
      { step: 'Identify the unknown word. Is it a noun, verb, adjective, or adverb?', stepEs: 'Identifica la palabra desconocida. ¿Es sustantivo, verbo, adjetivo o adverbio?' },
      { step: 'Read the whole sentence. What is the general meaning?', stepEs: 'Lee toda la oración. ¿Cuál es el significado general?' },
      { step: 'Look at the words before and after. Are there synonyms, opposites, or examples?', stepEs: 'Mira las palabras antes y después. ¿Hay sinónimos, antónimos o ejemplos?' },
      { step: 'Make a guess. Does your guess make sense in the sentence?', stepEs: 'Haz una suposición. ¿Tu suposición tiene sentido en la oración?' },
      { step: 'If not, try again. If yes, continue reading!', stepEs: 'Si no, intenta de nuevo. Si sí, ¡sigue leyendo!' },
    ],
    exampleText: 'The village was so remote that it took us three hours to drive there on narrow, winding mountain roads. There were no shops, no restaurants — just a handful of stone houses and a small church.',
    exampleApplication: {
      instruction: 'What does "remote" mean here?',
      instructionEs: '¿Qué significa "remote" aquí?',
      modelAnswer: '"Remote" means far away and difficult to reach. Clues: "three hours to drive", "narrow, winding mountain roads", "no shops, no restaurants" — all suggest an isolated place.',
    },
    practiceExercise: {
      text: 'After the long drought, the farmers were overjoyed when they saw dark clouds forming on the horizon. The rain would save their crops, which had been wilting in the scorching heat for weeks.',
      task: 'What do "drought", "wilting", and "scorching" mean? Use context clues to guess.',
      taskEs: '¿Qué significan "drought", "wilting" y "scorching"? Usa pistas del contexto para adivinar.',
      hints: ['drought: What weather condition makes farmers want rain desperately?', 'wilting: What happens to plants without water?', 'scorching: An adjective describing "heat" — is it mild or extreme?'],
    }
  },
  {
    id: 'rs-predicting',
    name: 'Predicting Content',
    nameEs: 'Predecir contenido',
    level: 2,
    description: 'Before reading, use the title, images, and your knowledge to predict what the text will say. This activates your brain and makes reading easier.',
    descriptionEs: 'Antes de leer, usa el título, imágenes y tu conocimiento para predecir qué dirá el texto. Esto activa tu cerebro y facilita la lectura.',
    steps: [
      { step: 'Read just the title. What do you already know about this topic?', stepEs: 'Lee solo el título. ¿Qué sabes ya sobre este tema?' },
      { step: 'Write 3 things you expect the text to mention.', stepEs: 'Escribe 3 cosas que esperas que el texto mencione.' },
      { step: 'Read the text and check your predictions.', stepEs: 'Lee el texto y comprueba tus predicciones.' },
      { step: 'After reading, note what was different from your expectations.', stepEs: 'Después de leer, anota qué fue diferente de tus expectativas.' },
    ],
    exampleText: 'Why Do We Dream?\n\nScientists have been studying dreams for centuries, yet we still don\'t have a definitive answer. Some researchers believe dreams help us process emotions from the day. Others think dreams are the brain\'s way of organizing memories.\n\nInterestingly, we dream during a phase of sleep called REM (Rapid Eye Movement). During REM, our brain is almost as active as when we are awake.\n\nRecent studies suggest that people who get enough REM sleep perform better on memory tests the next day.',
    exampleApplication: {
      instruction: 'Before reading, what did you predict from the title "Why Do We Dream?"',
      instructionEs: 'Antes de leer, ¿qué predijiste del título "Why Do We Dream?"',
      modelAnswer: 'I predicted the text would talk about: 1) scientific explanations for dreams, 2) what happens in the brain when we dream, 3) common types of dreams. My predictions #1 and #2 were correct! #3 wasn\'t covered.',
    },
    practiceExercise: {
      text: '',
      task: 'Title: "The Hidden Cost of Fast Fashion" — Write 3 predictions about what this article will discuss. Then search for an article with this title and check your predictions.',
      taskEs: 'Título: "The Hidden Cost of Fast Fashion" — Escribe 3 predicciones sobre qué tratará este artículo. Luego busca un artículo con este título y comprueba tus predicciones.',
    }
  },
  // === B2-C1: ADVANCED STRATEGIES ===
  {
    id: 'rs-critical',
    name: 'Critical Reading',
    nameEs: 'Lectura crítica',
    level: 3,
    description: 'Analyze the author\'s purpose, bias, and persuasion techniques. Don\'t just read WHAT they say — think about WHY and HOW.',
    descriptionEs: 'Analiza el propósito del autor, su sesgo y técnicas de persuasión. No solo leas QUÉ dice — piensa en POR QUÉ y CÓMO.',
    steps: [
      { step: 'Who wrote this? What is their perspective or possible bias?', stepEs: '¿Quién escribió esto? ¿Cuál es su perspectiva o posible sesgo?' },
      { step: 'What is the author\'s purpose? To inform, persuade, entertain?', stepEs: '¿Cuál es el propósito del autor? ¿Informar, persuadir, entretener?' },
      { step: 'Does the author use emotional language or loaded words?', stepEs: '¿El autor usa lenguaje emocional o palabras cargadas?' },
      { step: 'Are the arguments supported by evidence? What evidence is missing?', stepEs: '¿Los argumentos están respaldados por evidencia? ¿Qué evidencia falta?' },
      { step: 'What is the author NOT saying? What opposing views are omitted?', stepEs: '¿Qué NO dice el autor? ¿Qué opiniones opuestas se omiten?' },
    ],
    exampleText: 'Organic food is the only responsible choice for health-conscious consumers. Studies have conclusively shown that organic produce contains significantly higher levels of antioxidants. Furthermore, conventional farming\'s reckless use of pesticides is poisoning our children. Every parent who cares about their family\'s health should switch to organic immediately.',
    exampleApplication: {
      instruction: 'Identify the persuasion techniques in this text.',
      instructionEs: 'Identifica las técnicas de persuasión en este texto.',
      modelAnswer: 'Loaded language: "reckless", "poisoning our children". Appeal to emotion: "Every parent who cares". False binary: "the only responsible choice" (implies non-organic = irresponsible). Overgeneralization: "conclusively shown" — most studies show small differences. Missing: cost comparison, availability issues, that "conventional" can also be safe.',
    },
    practiceExercise: {
      text: 'A recent survey by the National Coffee Association found that 64% of Americans drink coffee daily. Coffee boosts productivity, improves mood, and has been linked to reduced risk of certain diseases. Isn\'t it time you started your morning with a cup of excellence?',
      task: 'Analyze: Who funded this survey? What persuasion techniques are used? What negative effects of coffee are NOT mentioned?',
      taskEs: 'Analiza: ¿Quién financió esta encuesta? ¿Qué técnicas de persuasión se usan? ¿Qué efectos negativos del café NO se mencionan?',
      hints: ['Consider who the "National Coffee Association" represents', 'Notice the rhetorical question at the end', 'Think about caffeine addiction, sleep disruption, anxiety'],
    }
  },
  {
    id: 'rs-discourse',
    name: 'Understanding Text Structure & Cohesion',
    nameEs: 'Entender estructura y cohesión del texto',
    level: 3,
    description: 'Recognize how texts are organized and how linking devices create coherence. This helps you follow complex arguments.',
    descriptionEs: 'Reconoce cómo se organizan los textos y cómo los conectores crean coherencia. Esto te ayuda a seguir argumentos complejos.',
    steps: [
      { step: 'Identify the text structure: chronological, cause-effect, problem-solution, or compare-contrast?', stepEs: 'Identifica la estructura: cronológica, causa-efecto, problema-solución o comparación-contraste.' },
      { step: 'Underline all linking words (however, therefore, in addition, etc.)', stepEs: 'Subraya todos los conectores (however, therefore, in addition, etc.)' },
      { step: 'Notice reference words (this, these, it, such) — what do they refer to?', stepEs: 'Nota palabras de referencia (this, these, it, such) — ¿a qué se refieren?' },
      { step: 'Map the argument flow: claim → evidence → conclusion', stepEs: 'Mapea el flujo del argumento: afirmación → evidencia → conclusión' },
    ],
    exampleText: 'The government introduced a sugar tax in 2018. As a result, soft drink companies reformulated their products to reduce sugar content. Consequently, the average sugar content per drink dropped by 29%. However, critics argue that this merely shifted consumption to other unhealthy snacks. Nevertheless, public health officials maintain that the policy has been a net positive.',
    exampleApplication: {
      instruction: 'Map the argument flow using the linking words.',
      instructionEs: 'Mapea el flujo del argumento usando los conectores.',
      modelAnswer: 'Cause: sugar tax introduced → "As a result": companies changed recipes → "Consequently": sugar dropped 29% → "However": counterargument (shifted to snacks) → "Nevertheless": rebuttal (still net positive). Structure: cause-effect with counterargument pattern.',
    },
    practiceExercise: {
      text: 'Despite initial resistance, many European cities have implemented car-free zones in their centres. These measures have led to a 40% reduction in air pollution. Furthermore, local businesses, which initially feared a decline in footfall, have reported increased sales. This suggests that pedestrianization benefits both the environment and the economy.',
      task: 'Identify: 1) What does "These measures" refer to? 2) What does "This" in the last sentence refer to? 3) What is the text structure?',
      taskEs: 'Identifica: 1) ¿A qué se refiere "These measures"? 2) ¿A qué se refiere "This" en la última oración? 3) ¿Cuál es la estructura del texto?',
    }
  },
  // === C1: ADVANCED ===
  {
    id: 'rs-synthesizing',
    name: 'Synthesizing Information from Multiple Sources',
    nameEs: 'Sintetizar información de múltiples fuentes',
    level: 4,
    description: 'Combine information from different parts of a text (or multiple texts) to form a comprehensive understanding.',
    descriptionEs: 'Combina información de diferentes partes de un texto (o múltiples textos) para formar una comprensión completa.',
    steps: [
      { step: 'Read each source/section separately and summarize the key point in one sentence.', stepEs: 'Lee cada fuente/sección por separado y resume el punto clave en una oración.' },
      { step: 'Compare: Where do the sources agree? Where do they disagree?', stepEs: 'Compara: ¿Dónde coinciden las fuentes? ¿Dónde discrepan?' },
      { step: 'Evaluate: Which source provides stronger evidence? Why?', stepEs: 'Evalúa: ¿Qué fuente proporciona evidencia más fuerte? ¿Por qué?' },
      { step: 'Synthesize: Create a new understanding that integrates multiple perspectives.', stepEs: 'Sintetiza: Crea una comprensión nueva que integre múltiples perspectivas.' },
    ],
    exampleText: 'Source A (Medical journal): "Screen time exceeding 4 hours daily is associated with a 20% increase in anxiety symptoms among adolescents."\n\nSource B (Tech company blog): "Our platform provides essential social connections. 85% of teen users report feeling more connected to friends."\n\nSource C (Education report): "Moderate screen time (1-2 hours) shows no negative effects and may improve digital literacy, but effects vary significantly by content type."',
    exampleApplication: {
      instruction: 'Synthesize these three sources into a balanced paragraph.',
      instructionEs: 'Sintetiza estas tres fuentes en un párrafo equilibrado.',
      modelAnswer: 'While excessive screen time (4+ hours) is linked to increased anxiety (Source A), moderate use (1-2 hours) appears harmless and may build digital skills (Source C). Social platforms do facilitate connection (Source B), though this claim comes from an interested party. The key variable appears to be not screen time itself, but its duration and the nature of the content consumed.',
    },
    practiceExercise: {
      text: 'Source 1: "AI will eliminate 85 million jobs by 2025." (World Economic Forum)\nSource 2: "AI will create 97 million new roles by 2025." (World Economic Forum, same report)\nSource 3: "The jobs AI creates require different skills than the jobs it eliminates, creating a skills gap." (McKinsey)',
      task: 'Synthesize these sources. What is the real picture? What question remains unanswered?',
      taskEs: 'Sintetiza estas fuentes. ¿Cuál es la imagen real? ¿Qué pregunta queda sin responder?',
    }
  },
];

// Helper functions
export const getReadingStrategiesByLevel = (level: number): ReadingStrategy[] => {
  return readingStrategies.filter(rs => rs.level <= level);
};

export const getReadingStrategyById = (id: string): ReadingStrategy | undefined => {
  return readingStrategies.find(rs => rs.id === id);
};
