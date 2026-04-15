// Error Classification System
// Classifies learner errors by cause to provide targeted feedback
// Categories: L1 interference, overgeneralization, simplification, avoidance, developmental

export interface ErrorClassification {
  id: string;
  errorType: 'l1-interference' | 'overgeneralization' | 'simplification' | 'avoidance' | 'developmental' | 'fossilization';
  label: string;
  labelEs: string;
  description: string;
  descriptionEs: string;
  level: 1 | 2 | 3 | 4;
  category: 'grammar' | 'vocabulary' | 'pronunciation' | 'pragmatics';
  errorPattern: {
    wrong: string;
    correct: string;
    context?: string;
  };
  explanation: string;
  explanationEs: string;
  remediation: {
    strategy: string;
    strategyEs: string;
    exercises: string[];
  };
}

export const errorClassifications: ErrorClassification[] = [
  // === L1 INTERFERENCE (Spanish → English transfer errors) ===
  {
    id: 'ec-l1-ser-estar',
    errorType: 'l1-interference',
    label: 'Ser/Estar → Be confusion',
    labelEs: 'Confusión ser/estar → be',
    description: 'Using "be" incorrectly because Spanish has two verbs (ser/estar) for one English verb.',
    descriptionEs: 'Usar "be" incorrectamente porque el español tiene dos verbos (ser/estar) para un verbo inglés.',
    level: 1,
    category: 'grammar',
    errorPattern: { wrong: 'I am agree', correct: 'I agree', context: 'Spanish: "Estoy de acuerdo" uses estar (to be)' },
    explanation: 'In Spanish "estar de acuerdo" uses the verb "to be", but in English "agree" is a standalone verb.',
    explanationEs: 'En español "estar de acuerdo" usa el verbo "estar", pero en inglés "agree" es un verbo independiente.',
    remediation: {
      strategy: 'Learn which English expressions do NOT use "be" even though Spanish does.',
      strategyEs: 'Aprende qué expresiones inglesas NO usan "be" aunque el español sí.',
      exercises: ['I am agree → I agree', 'I am have → I have', 'She is have 25 years → She is 25 years old'],
    }
  },
  {
    id: 'ec-l1-articles',
    errorType: 'l1-interference',
    label: 'Article misuse from Spanish',
    labelEs: 'Uso incorrecto de artículos desde el español',
    description: 'Adding/omitting articles where Spanish and English differ.',
    descriptionEs: 'Añadir/omitir artículos donde el español y el inglés difieren.',
    level: 1,
    category: 'grammar',
    errorPattern: { wrong: 'The life is beautiful / I like the music', correct: 'Life is beautiful / I like music', context: 'Spanish uses articles with abstract nouns; English often doesn\'t' },
    explanation: 'Spanish requires articles before abstract/general nouns ("La vida es bella"). English omits them for general concepts.',
    explanationEs: 'El español requiere artículos antes de sustantivos abstractos/generales ("La vida es bella"). El inglés los omite para conceptos generales.',
    remediation: {
      strategy: 'Rule: No article with general/abstract nouns in English. Article = specific reference only.',
      strategyEs: 'Regla: Sin artículo con sustantivos generales/abstractos en inglés. Artículo = referencia específica solamente.',
      exercises: ['The happiness is important → Happiness is important', 'I study the English → I study English', 'The water is essential for the life → Water is essential for life'],
    }
  },
  {
    id: 'ec-l1-prepositions',
    errorType: 'l1-interference',
    label: 'Preposition transfer from Spanish',
    labelEs: 'Transferencia de preposiciones del español',
    description: 'Using Spanish preposition equivalents that don\'t match English patterns.',
    descriptionEs: 'Usar equivalentes de preposiciones españolas que no coinciden con patrones ingleses.',
    level: 2,
    category: 'grammar',
    errorPattern: { wrong: 'I dream with you / It depends of the weather', correct: 'I dream about you / It depends on the weather', context: '"soñar con" → "dream about", "depender de" → "depend on"' },
    explanation: 'Prepositions rarely translate directly. Each verb + preposition combination must be learned as a unit.',
    explanationEs: 'Las preposiciones rara vez se traducen directamente. Cada combinación verbo + preposición debe aprenderse como unidad.',
    remediation: {
      strategy: 'Create a personal "preposition collocations" list: learn VERB + PREPOSITION together, never separately.',
      strategyEs: 'Crea una lista personal de "colocaciones de preposiciones": aprende VERBO + PREPOSICIÓN juntos, nunca por separado.',
      exercises: ['consist in → consist of', 'married with → married to', 'arrive to → arrive at/in', 'listen the music → listen to the music'],
    }
  },
  // === OVERGENERALIZATION ===
  {
    id: 'ec-over-past-ed',
    errorType: 'overgeneralization',
    label: 'Regular past tense applied to irregular verbs',
    labelEs: 'Pasado regular aplicado a verbos irregulares',
    description: 'Adding -ed to irregular verbs because the learner knows the regular pattern.',
    descriptionEs: 'Añadir -ed a verbos irregulares porque el estudiante conoce el patrón regular.',
    level: 1,
    category: 'grammar',
    errorPattern: { wrong: 'I goed / She buyed / He thinked', correct: 'I went / She bought / He thought' },
    explanation: 'The learner has learned the past tense rule (-ed) and applies it too broadly. This is actually a sign of progress!',
    explanationEs: 'El estudiante ha aprendido la regla del pasado (-ed) y la aplica demasiado ampliamente. ¡Esto es en realidad una señal de progreso!',
    remediation: {
      strategy: 'Learn the 50 most common irregular verbs as fixed phrases. Practice them in context, not isolation.',
      strategyEs: 'Aprende los 50 verbos irregulares más comunes como frases fijas. Practícalos en contexto, no aislados.',
      exercises: ['goed → went (go-went-gone)', 'buyed → bought (buy-bought-bought)', 'thinked → thought (think-thought-thought)'],
    }
  },
  {
    id: 'ec-over-third-person',
    errorType: 'overgeneralization',
    label: 'Third person -s applied inconsistently',
    labelEs: 'Tercera persona -s aplicada inconsistentemente',
    description: 'Forgetting or misapplying the third person -s in present simple.',
    descriptionEs: 'Olvidar o aplicar mal la -s de tercera persona en presente simple.',
    level: 1,
    category: 'grammar',
    errorPattern: { wrong: 'She go to work / He don\'t like it / Does she goes?', correct: 'She goes to work / He doesn\'t like it / Does she go?' },
    explanation: 'The -s appears on the main verb in affirmative, but moves to the auxiliary (does) in negatives and questions.',
    explanationEs: 'La -s aparece en el verbo principal en afirmativas, pero se mueve al auxiliar (does) en negativas y preguntas.',
    remediation: {
      strategy: 'Rule: In questions/negatives with does/doesn\'t, the main verb is BASE FORM (no -s).',
      strategyEs: 'Regla: En preguntas/negativas con does/doesn\'t, el verbo principal es FORMA BASE (sin -s).',
      exercises: ['Does she goes? → Does she go?', 'He don\'t → He doesn\'t', 'She have → She has'],
    }
  },
  // === SIMPLIFICATION ===
  {
    id: 'ec-simp-relative',
    errorType: 'simplification',
    label: 'Avoiding relative clauses',
    labelEs: 'Evitar oraciones de relativo',
    description: 'Using simple sentences instead of combining with who/which/that.',
    descriptionEs: 'Usar oraciones simples en lugar de combinar con who/which/that.',
    level: 2,
    category: 'grammar',
    errorPattern: { wrong: 'I have a friend. She lives in London.', correct: 'I have a friend who lives in London.' },
    explanation: 'Learners avoid complex structures by using multiple simple sentences. This limits writing quality at B1+.',
    explanationEs: 'Los estudiantes evitan estructuras complejas usando múltiples oraciones simples. Esto limita la calidad de escritura en B1+.',
    remediation: {
      strategy: 'Practice combining simple sentences. Start with "who" for people and "which/that" for things.',
      strategyEs: 'Practica combinar oraciones simples. Empieza con "who" para personas y "which/that" para cosas.',
      exercises: [
        'The book is interesting. I am reading it. → The book that I am reading is interesting.',
        'My brother lives in Madrid. He is a doctor. → My brother, who is a doctor, lives in Madrid.',
      ],
    }
  },
  {
    id: 'ec-simp-tense-reduce',
    errorType: 'simplification',
    label: 'Tense simplification',
    labelEs: 'Simplificación de tiempos verbales',
    description: 'Using present simple for everything instead of appropriate tenses.',
    descriptionEs: 'Usar presente simple para todo en lugar de los tiempos apropiados.',
    level: 2,
    category: 'grammar',
    errorPattern: { wrong: 'Yesterday I go to the shop and I buy milk.', correct: 'Yesterday I went to the shop and bought milk.' },
    explanation: 'Learners default to present simple when they\'re unsure of the correct tense. This is a communication strategy.',
    explanationEs: 'Los estudiantes usan presente simple por defecto cuando no están seguros del tiempo correcto. Es una estrategia de comunicación.',
    remediation: {
      strategy: 'Use time markers as triggers: yesterday → past, tomorrow → future, right now → present continuous.',
      strategyEs: 'Usa marcadores temporales como disparadores: yesterday → pasado, tomorrow → futuro, right now → presente continuo.',
      exercises: ['Yesterday I go → Yesterday I went', 'Tomorrow I go → Tomorrow I will go / I\'m going to go', 'Right now I study → Right now I am studying'],
    }
  },
  // === AVOIDANCE ===
  {
    id: 'ec-avoid-phrasal',
    errorType: 'avoidance',
    label: 'Avoiding phrasal verbs',
    labelEs: 'Evitar phrasal verbs',
    description: 'Using formal/Latinate words instead of common phrasal verbs because they feel more familiar to Spanish speakers.',
    descriptionEs: 'Usar palabras formales/latinas en lugar de phrasal verbs comunes porque son más familiares para hispanohablantes.',
    level: 2,
    category: 'vocabulary',
    errorPattern: { wrong: 'I need to discover the truth (always)', correct: 'I need to find out the truth', context: 'Spanish speakers prefer "discover" (descubrir) over "find out" because it\'s transparent' },
    explanation: 'Spanish speakers often avoid phrasal verbs because they feel difficult, but English natives use them constantly in everyday speech.',
    explanationEs: 'Los hispanohablantes a menudo evitan phrasal verbs porque parecen difíciles, pero los nativos ingleses los usan constantemente en el habla cotidiana.',
    remediation: {
      strategy: 'Learn the 20 most common phrasal verbs. Practice using them in context — they\'ll make your English more natural.',
      strategyEs: 'Aprende los 20 phrasal verbs más comunes. Practícalos en contexto — harán tu inglés más natural.',
      exercises: ['discover → find out', 'tolerate → put up with', 'extinguish → put out', 'postpone → put off', 'continue → carry on'],
    }
  },
  {
    id: 'ec-avoid-passive',
    errorType: 'avoidance',
    label: 'Avoiding passive voice',
    labelEs: 'Evitar voz pasiva',
    description: 'Always using active voice even when passive is more natural or appropriate.',
    descriptionEs: 'Siempre usar voz activa incluso cuando la pasiva es más natural o apropiada.',
    level: 3,
    category: 'grammar',
    errorPattern: { wrong: 'Someone built this castle in 1200.', correct: 'This castle was built in 1200.', context: 'When the doer is unknown/unimportant, passive is more natural' },
    explanation: 'The passive voice is essential in academic writing, news, and formal contexts. Avoiding it makes B2+ writing sound unnatural.',
    explanationEs: 'La voz pasiva es esencial en escritura académica, noticias y contextos formales. Evitarla hace que la escritura B2+ suene antinatural.',
    remediation: {
      strategy: 'Use passive when: the doer is unknown, the doer is obvious, or the action is more important than the doer.',
      strategyEs: 'Usa pasiva cuando: el agente es desconocido, es obvio, o la acción es más importante que el agente.',
      exercises: ['Someone stole my car → My car was stolen', 'People speak English everywhere → English is spoken everywhere', 'They will announce the results tomorrow → The results will be announced tomorrow'],
    }
  },
  // === DEVELOPMENTAL ===
  {
    id: 'ec-dev-question-form',
    errorType: 'developmental',
    label: 'Question formation errors',
    labelEs: 'Errores en formación de preguntas',
    description: 'Incorrect word order in questions — a natural stage in language development.',
    descriptionEs: 'Orden incorrecto de palabras en preguntas — una etapa natural en el desarrollo lingüístico.',
    level: 1,
    category: 'grammar',
    errorPattern: { wrong: 'Where you are going? / You like coffee?', correct: 'Where are you going? / Do you like coffee?' },
    explanation: 'Question formation requires inversion (aux + subject) which takes time to automatize. Using statement word order is a common developmental stage.',
    explanationEs: 'La formación de preguntas requiere inversión (aux + sujeto) que toma tiempo en automatizarse. Usar el orden de declaraciones es una etapa de desarrollo común.',
    remediation: {
      strategy: 'Formula: Question Word + Auxiliary + Subject + Verb. Always check: did I invert the subject and auxiliary?',
      strategyEs: 'Fórmula: Palabra interrogativa + Auxiliar + Sujeto + Verbo. Siempre verifica: ¿invertí el sujeto y el auxiliar?',
      exercises: ['Where you are? → Where are you?', 'What you think? → What do you think?', 'Why she is crying? → Why is she crying?'],
    }
  },
  // === FOSSILIZATION ===
  {
    id: 'ec-fossil-make-do',
    errorType: 'fossilization',
    label: 'Make vs. Do fossilization',
    labelEs: 'Fosilización de make vs. do',
    description: 'Persistent confusion between "make" and "do" that persists even at advanced levels.',
    descriptionEs: 'Confusión persistente entre "make" y "do" que persiste incluso a niveles avanzados.',
    level: 2,
    category: 'vocabulary',
    errorPattern: { wrong: 'make homework / do a mistake', correct: 'do homework / make a mistake', context: 'Spanish uses "hacer" for both, causing persistent confusion' },
    explanation: 'Since Spanish uses "hacer" for both make and do, this error often fossilizes — it persists despite knowing the rule.',
    explanationEs: 'Como el español usa "hacer" para ambos, este error a menudo se fosiliza — persiste a pesar de conocer la regla.',
    remediation: {
      strategy: 'General rule: DO = activities, routines, tasks. MAKE = creating/producing something. But many are collocations to memorize.',
      strategyEs: 'Regla general: DO = actividades, rutinas, tareas. MAKE = crear/producir algo. Pero muchas son colocaciones para memorizar.',
      exercises: [
        'DO: homework, the dishes, exercise, business, a favour, your best',
        'MAKE: a mistake, a decision, money, progress, an effort, a promise',
      ],
    }
  },
  {
    id: 'ec-fossil-since-for',
    errorType: 'fossilization',
    label: 'Since vs. For fossilization',
    labelEs: 'Fosilización de since vs. for',
    description: 'Confusing "since" (point in time) and "for" (duration) in present perfect.',
    descriptionEs: 'Confundir "since" (punto en el tiempo) y "for" (duración) en presente perfecto.',
    level: 2,
    category: 'grammar',
    errorPattern: { wrong: 'I have lived here since 3 years / for 2020', correct: 'I have lived here for 3 years / since 2020' },
    explanation: 'Spanish uses "desde" for both concepts, and "desde hace" adds more confusion. This error persists at B2+.',
    explanationEs: 'El español usa "desde" para ambos conceptos, y "desde hace" añade más confusión. Este error persiste en B2+.',
    remediation: {
      strategy: 'SINCE + specific point (2020, Monday, I was a child). FOR + duration (3 years, a long time, ages).',
      strategyEs: 'SINCE + punto específico (2020, lunes, era niño). FOR + duración (3 años, mucho tiempo, siglos).',
      exercises: ['since 3 years → for 3 years', 'for 2018 → since 2018', 'since a long time → for a long time'],
    }
  },
];

// Helper functions
export const getErrorsByType = (errorType: ErrorClassification['errorType']): ErrorClassification[] => {
  return errorClassifications.filter(e => e.errorType === errorType);
};

export const getErrorsByLevel = (level: number): ErrorClassification[] => {
  return errorClassifications.filter(e => e.level <= level);
};

export const getErrorsByCategory = (category: ErrorClassification['category']): ErrorClassification[] => {
  return errorClassifications.filter(e => e.category === category);
};

// Diagnose a learner error — returns the most likely classification
export const classifyError = (errorText: string): ErrorClassification | undefined => {
  const lower = errorText.toLowerCase();
  return errorClassifications.find(ec => {
    const wrongLower = ec.errorPattern.wrong.toLowerCase();
    return lower.includes(wrongLower) || wrongLower.includes(lower);
  });
};
