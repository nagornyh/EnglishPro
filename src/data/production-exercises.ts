// Production exercises data for active learning
// These exercises require the user to produce text, not just select answers

export interface FreeWritingPrompt {
  id: string;
  prompt: string;
  promptEs: string;
  minWords: number;
  maxWords: number;
  hints: string[];
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: string;
}

export interface TranslationExercise {
  id: string;
  spanish: string;
  english: string;
  alternativeAnswers?: string[];
  hints?: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  category?: string;
}

export interface OpenBlankExercise {
  id: string;
  sentence: string;
  answers: string[][];
  hints?: string[];
  context?: string;
  translation?: string;
}

export interface DictationSentence {
  id: string;
  text: string;
  translation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category?: string;
}

// Free Writing Prompts
export const freeWritingPrompts: FreeWritingPrompt[] = [
  // A1 Level
  {
    id: 'fw-a1-1',
    prompt: 'Describe your daily routine. What do you do every day?',
    promptEs: 'Describe tu rutina diaria. ¿Qué haces todos los días?',
    minWords: 20,
    maxWords: 60,
    hints: ['wake up', 'breakfast', 'work', 'lunch', 'dinner', 'sleep', 'morning', 'afternoon'],
    level: 'A1',
    category: 'Daily Life',
  },
  {
    id: 'fw-a1-2',
    prompt: 'Describe your family. How many people are in your family?',
    promptEs: 'Describe tu familia. ¿Cuántas personas hay en tu familia?',
    minWords: 20,
    maxWords: 60,
    hints: ['mother', 'father', 'brother', 'sister', 'old', 'young', 'live', 'name'],
    level: 'A1',
    category: 'Family',
  },
  {
    id: 'fw-a1-3',
    prompt: 'What is your favorite food? Why do you like it?',
    promptEs: '¿Cuál es tu comida favorita? ¿Por qué te gusta?',
    minWords: 15,
    maxWords: 50,
    hints: ['delicious', 'taste', 'eat', 'like', 'because', 'favorite'],
    level: 'A1',
    category: 'Food',
  },

  // A2 Level
  {
    id: 'fw-a2-1',
    prompt: 'Describe your last vacation. Where did you go and what did you do?',
    promptEs: 'Describe tus últimas vacaciones. ¿A dónde fuiste y qué hiciste?',
    minWords: 30,
    maxWords: 80,
    hints: ['went', 'visited', 'saw', 'enjoyed', 'stayed', 'traveled', 'beach', 'mountain'],
    level: 'A2',
    category: 'Travel',
  },
  {
    id: 'fw-a2-2',
    prompt: 'What do you like to do in your free time? Describe your hobbies.',
    promptEs: '¿Qué te gusta hacer en tu tiempo libre? Describe tus hobbies.',
    minWords: 30,
    maxWords: 80,
    hints: ['enjoy', 'spend time', 'hobby', 'fun', 'relax', 'weekend', 'usually'],
    level: 'A2',
    category: 'Hobbies',
  },
  {
    id: 'fw-a2-3',
    prompt: 'Describe your home. What rooms does it have?',
    promptEs: 'Describe tu casa. ¿Qué habitaciones tiene?',
    minWords: 30,
    maxWords: 80,
    hints: ['bedroom', 'kitchen', 'bathroom', 'living room', 'garden', 'big', 'small', 'comfortable'],
    level: 'A2',
    category: 'Home',
  },

  // B1 Level
  {
    id: 'fw-b1-1',
    prompt: 'What are the advantages and disadvantages of working from home?',
    promptEs: '¿Cuáles son las ventajas y desventajas de trabajar desde casa?',
    minWords: 50,
    maxWords: 120,
    hints: ['flexibility', 'productivity', 'isolation', 'commute', 'balance', 'however', 'on the other hand'],
    level: 'B1',
    category: 'Work',
  },
  {
    id: 'fw-b1-2',
    prompt: 'Describe a memorable experience from your childhood.',
    promptEs: 'Describe una experiencia memorable de tu infancia.',
    minWords: 50,
    maxWords: 120,
    hints: ['remember', 'when I was', 'happened', 'felt', 'learned', 'never forget', 'childhood'],
    level: 'B1',
    category: 'Memories',
  },
  {
    id: 'fw-b1-3',
    prompt: 'What changes would you make to improve your city or town?',
    promptEs: '¿Qué cambios harías para mejorar tu ciudad o pueblo?',
    minWords: 50,
    maxWords: 120,
    hints: ['should', 'would', 'improve', 'public transport', 'parks', 'pollution', 'infrastructure'],
    level: 'B1',
    category: 'Society',
  },

  // B2 Level
  {
    id: 'fw-b2-1',
    prompt: 'Do you think social media has a positive or negative impact on society? Explain your view.',
    promptEs: '¿Crees que las redes sociales tienen un impacto positivo o negativo en la sociedad? Explica tu opinión.',
    minWords: 80,
    maxWords: 180,
    hints: ['furthermore', 'nevertheless', 'impact', 'influence', 'connectivity', 'privacy', 'mental health'],
    level: 'B2',
    category: 'Technology',
  },
  {
    id: 'fw-b2-2',
    prompt: 'Describe a challenge you faced and how you overcame it.',
    promptEs: 'Describe un desafío que enfrentaste y cómo lo superaste.',
    minWords: 80,
    maxWords: 180,
    hints: ['challenge', 'overcame', 'struggled', 'eventually', 'persevered', 'learned', 'experience'],
    level: 'B2',
    category: 'Personal Growth',
  },

  // C1 Level
  {
    id: 'fw-c1-1',
    prompt: 'Discuss the ethical implications of artificial intelligence in the workplace.',
    promptEs: 'Discute las implicaciones éticas de la inteligencia artificial en el lugar de trabajo.',
    minWords: 100,
    maxWords: 250,
    hints: ['automation', 'unemployment', 'efficiency', 'ethical considerations', 'furthermore', 'conversely'],
    level: 'C1',
    category: 'Technology & Ethics',
  },
  {
    id: 'fw-c1-2',
    prompt: 'Write a formal complaint about a service.',
    promptEs: 'Escribe una queja formal sobre un servicio.',
    minWords: 100,
    maxWords: 250,
    hints: ['Dear Sir/Madam', 'I am writing to express', 'dissatisfied', 'expect', 'resolution', 'Yours faithfully'],
    level: 'C1',
    category: 'Formal Writing',
  },
  {
    id: 'fw-c1-3',
    prompt: 'Discuss the ethical implications of AI in education.',
    promptEs: 'Discute las implicaciones éticas de la IA en la educación.',
    minWords: 100,
    maxWords: 250,
    hints: ['personalized learning', 'cheating', 'privacy', 'accessibility', 'bias', 'critical thinking'],
    level: 'C1',
    category: 'Technology & Ethics',
  },
  {
    id: 'fw-c1-4',
    prompt: 'Compare two different approaches to solving climate change.',
    promptEs: 'Compara dos enfoques diferentes para resolver el cambio climático.',
    minWords: 100,
    maxWords: 250,
    hints: ['renewable energy', 'policy', 'individual action', 'technology', 'whereas', 'on the one hand'],
    level: 'C1',
    category: 'Environment',
  },
  {
    id: 'fw-c1-5',
    prompt: 'Write a policy recommendation for improving employee well-being in remote work environments.',
    promptEs: 'Escribe una recomendación de política para mejorar el bienestar de los empleados en entornos de trabajo remoto.',
    minWords: 300,
    maxWords: 400,
    hints: ['flexibility', 'mental health', 'boundaries', 'communication', 'work-life balance', 'furthermore', 'it is recommended that'],
    level: 'C1',
    category: 'Work & Policy',
  },
  {
    id: 'fw-c1-6',
    prompt: 'Analyze the impact of social media on democratic processes.',
    promptEs: 'Analiza el impacto de las redes sociales en los procesos democráticos.',
    minWords: 300,
    maxWords: 400,
    hints: ['misinformation', 'polarization', 'engagement', 'transparency', 'whereas', 'nevertheless', 'it could be argued'],
    level: 'C1',
    category: 'Society & Politics',
  },
  {
    id: 'fw-c1-7',
    prompt: 'Compare and contrast two leadership styles using real-world examples.',
    promptEs: 'Compara y contrasta dos estilos de liderazgo usando ejemplos del mundo real.',
    minWords: 300,
    maxWords: 400,
    hints: ['transformational', 'transactional', 'autocratic', 'democratic', 'for instance', 'on the one hand', 'conversely'],
    level: 'C1',
    category: 'Leadership',
  },
  {
    id: 'fw-c1-8',
    prompt: 'Write a formal proposal for a community development project.',
    promptEs: 'Escribe una propuesta formal para un proyecto de desarrollo comunitario.',
    minWords: 300,
    maxWords: 400,
    hints: ['objectives', 'stakeholders', 'budget', 'timeline', 'I am writing to propose', 'in light of', 'Yours faithfully'],
    level: 'C1',
    category: 'Formal Writing',
  },

  // C2 Level
  {
    id: 'fw-c2-1',
    prompt: 'Write a satirical piece about modern technology dependence.',
    promptEs: 'Escribe un texto satírico sobre la dependencia moderna de la tecnología.',
    minWords: 120,
    maxWords: 300,
    hints: ['irony', 'exaggeration', 'smartphone', 'social media', 'ironic tone', 'mock-serious'],
    level: 'C2',
    category: 'Creative Writing',
  },
  {
    id: 'fw-c2-2',
    prompt: 'Analyze the relationship between language and thought.',
    promptEs: 'Analiza la relación entre el lenguaje y el pensamiento.',
    minWords: 120,
    maxWords: 300,
    hints: ['Sapir-Whorf', 'linguistic relativity', 'cognition', 'vocabulary', 'perception', 'nuance'],
    level: 'C2',
    category: 'Academic',
  },
  {
    id: 'fw-c2-3',
    prompt: 'Craft a nuanced argument for and against universal basic income.',
    promptEs: 'Elabora un argumento matizado a favor y en contra de la renta básica universal.',
    minWords: 120,
    maxWords: 300,
    hints: ['pros and cons', 'economic feasibility', 'incentives', 'poverty alleviation', 'nevertheless', 'albeit'],
    level: 'C2',
    category: 'Society & Economics',
  },
  {
    id: 'fw-c2-4',
    prompt: "Write a critical review of a TED talk you've watched, analyzing the speaker's rhetorical strategies, use of evidence, and persuasive techniques.",
    promptEs: "Escribe una reseña crítica de una charla TED que hayas visto, analizando las estrategias retóricas del orador, el uso de evidencia y las técnicas persuasivas.",
    minWords: 350,
    maxWords: 450,
    hints: ['ethos', 'pathos', 'logos', 'rhetorical devices', 'evidence', 'persuasion', 'structure', 'audience'],
    level: 'C2',
    category: 'Academic',
  },
  {
    id: 'fw-c2-5',
    prompt: 'Compose a satirical opinion piece about a modern social phenomenon, using irony, understatement, and cultural references.',
    promptEs: 'Redacta un artículo de opinión satírico sobre un fenómeno social moderno, usando ironía, lítote y referencias culturales.',
    minWords: 300,
    maxWords: 400,
    hints: ['irony', 'understatement', 'litotes', 'cultural references', 'mock-serious', 'exaggeration', 'tongue-in-cheek'],
    level: 'C2',
    category: 'Creative Writing',
  },
  {
    id: 'fw-c2-6',
    prompt: "Write a philosophical reflection on the concept of 'progress' — does technological advancement necessarily mean human advancement?",
    promptEs: "Escribe una reflexión filosófica sobre el concepto de 'progreso' — ¿el avance tecnológico implica necesariamente el avance humano?",
    minWords: 350,
    maxWords: 450,
    hints: ['progress', 'technology', 'human flourishing', 'trade-offs', 'philosophical', 'nuance', 'nevertheless', 'whereas'],
    level: 'C2',
    category: 'Academic',
  },
  {
    id: 'fw-c2-7',
    prompt: 'Draft a formal response to an academic article you disagree with, using hedging, concession, and counterargument.',
    promptEs: 'Redacta una respuesta formal a un artículo académico con el que no estés de acuerdo, usando hedging, concesión y contraargumentación.',
    minWords: 300,
    maxWords: 400,
    hints: ['hedging', 'concession', 'counterargument', 'formal register', 'whereas', 'nevertheless', 'it could be argued', 'however'],
    level: 'C2',
    category: 'Academic',
  },
  {
    id: 'fw-c2-8',
    prompt: 'Write a literary analysis of symbolism in a short story or poem you know well, using academic register.',
    promptEs: 'Escribe un análisis literario del simbolismo en un cuento o poema que conozcas bien, usando registro académico.',
    minWords: 350,
    maxWords: 450,
    hints: ['symbolism', 'motif', 'metaphor', 'theme', 'academic register', 'close reading', 'evidence', 'interpretation'],
    level: 'C2',
    category: 'Academic',
  },

  // Additional A1, A2, B1, B2
  {
    id: 'fw-a1-4',
    prompt: 'Write about your family.',
    promptEs: 'Escribe sobre tu familia.',
    minWords: 20,
    maxWords: 60,
    hints: ['mother', 'father', 'siblings', 'grandparents', 'live', 'love', 'names'],
    level: 'A1',
    category: 'Family',
  },
  {
    id: 'fw-a2-4',
    prompt: 'Describe your best holiday.',
    promptEs: 'Describe tus mejores vacaciones.',
    minWords: 30,
    maxWords: 80,
    hints: ['best', 'memorable', 'went', 'did', 'enjoyed', 'weather', 'people', 'activities'],
    level: 'A2',
    category: 'Travel',
  },
  {
    id: 'fw-b1-4',
    prompt: 'Write about a goal you want to achieve.',
    promptEs: 'Escribe sobre una meta que quieres lograr.',
    minWords: 50,
    maxWords: 120,
    hints: ['goal', 'achieve', 'plan', 'steps', 'motivation', 'future', 'hope', 'will'],
    level: 'B1',
    category: 'Personal Growth',
  },
  {
    id: 'fw-b2-3',
    prompt: 'Describe a time you had to adapt to a different culture.',
    promptEs: 'Describe una vez que tuviste que adaptarte a una cultura diferente.',
    minWords: 80,
    maxWords: 180,
    hints: ['adapt', 'culture shock', 'customs', 'challenges', 'learned', 'experience', 'different'],
    level: 'B2',
    category: 'Culture',
  },
  {
    id: 'fw-b2-4',
    prompt: 'Write a review of a book or film you recently enjoyed.',
    promptEs: 'Escribe una reseña de un libro o película que disfrutaste recientemente.',
    minWords: 80,
    maxWords: 180,
    hints: ['plot', 'characters', 'recommend', 'enjoyed', 'rating', 'would recommend', 'highlights'],
    level: 'B2',
    category: 'Reviews',
  },
  {
    id: 'fw-b2-5',
    prompt: 'Describe the advantages and disadvantages of remote work.',
    promptEs: 'Describe las ventajas y desventajas del trabajo remoto.',
    minWords: 80,
    maxWords: 180,
    hints: ['flexibility', 'work-life balance', 'isolation', 'productivity', 'however', 'on the other hand'],
    level: 'B2',
    category: 'Work',
  },

  // Additional B1-B2 free writing prompts
  {
    id: 'fw-b1-5',
    prompt: 'What role does music play in your life? Describe how it affects your mood and daily activities.',
    promptEs: '¿Qué papel juega la música en tu vida? Describe cómo afecta tu estado de ánimo y actividades diarias.',
    minWords: 50,
    maxWords: 120,
    hints: ['relax', 'motivate', 'memories', 'genres', 'favourite', 'listen', 'when'],
    level: 'B1',
    category: 'Lifestyle',
  },
  {
    id: 'fw-b1-6',
    prompt: 'If you could live in another country for a year, which would you choose and why?',
    promptEs: 'Si pudieras vivir en otro país durante un año, ¿cuál elegirías y por qué?',
    minWords: 50,
    maxWords: 120,
    hints: ['culture', 'language', 'food', 'climate', 'opportunities', 'would', 'because'],
    level: 'B1',
    category: 'Travel',
  },
  {
    id: 'fw-b2-6',
    prompt: 'Do you think schools should teach students about financial literacy? Why or why not?',
    promptEs: '¿Crees que las escuelas deberían enseñar a los estudiantes sobre educación financiera? ¿Por qué sí o por qué no?',
    minWords: 80,
    maxWords: 180,
    hints: ['budget', 'debt', 'savings', 'essential', 'adult life', 'furthermore', 'nevertheless'],
    level: 'B2',
    category: 'Education',
  },
  {
    id: 'fw-b2-7',
    prompt: 'Describe the impact of environmental awareness on consumer behaviour. How have people changed their habits?',
    promptEs: 'Describe el impacto de la conciencia ambiental en el comportamiento del consumidor. ¿Cómo han cambiado las personas sus hábitos?',
    minWords: 80,
    maxWords: 180,
    hints: ['sustainable', 'recycling', 'plastic', 'organic', 'trend', 'awareness', 'consequently'],
    level: 'B2',
    category: 'Environment',
  },
  {
    id: 'fw-b2-8',
    prompt: 'What qualities do you think make someone a good leader? Support your arguments with examples.',
    promptEs: '¿Qué cualidades crees que hacen a alguien un buen líder? Apoya tus argumentos con ejemplos.',
    minWords: 80,
    maxWords: 180,
    hints: ['communication', 'empathy', 'decision-making', 'integrity', 'inspire', 'for instance', 'moreover'],
    level: 'B2',
    category: 'Leadership',
  },
];

// Translation Exercises (Spanish to English)
export const translationExercises: TranslationExercise[] = [
  // Easy
  {
    id: 'trans-easy-1',
    spanish: 'Tengo hambre.',
    english: "I'm hungry.",
    alternativeAnswers: ['I am hungry.'],
    hints: ['Think about how to express feeling hungry in English'],
    difficulty: 'easy',
    category: 'Basic Expressions',
  },
  {
    id: 'trans-easy-2',
    spanish: '¿Dónde está el baño?',
    english: 'Where is the bathroom?',
    alternativeAnswers: ["Where's the bathroom?", 'Where is the restroom?'],
    hints: ['Question word + verb to be + place'],
    difficulty: 'easy',
    category: 'Questions',
  },
  {
    id: 'trans-easy-3',
    spanish: 'Me gusta el café.',
    english: 'I like coffee.',
    alternativeAnswers: ['I enjoy coffee.'],
    hints: ['Subject + like + noun'],
    difficulty: 'easy',
    category: 'Preferences',
  },
  {
    id: 'trans-easy-4',
    spanish: 'Ella es mi hermana.',
    english: 'She is my sister.',
    alternativeAnswers: ["She's my sister."],
    difficulty: 'easy',
    category: 'Family',
  },
  {
    id: 'trans-easy-5',
    spanish: 'Hoy hace calor.',
    english: "It's hot today.",
    alternativeAnswers: ['It is hot today.', 'Today is hot.'],
    difficulty: 'easy',
    category: 'Weather',
  },

  // Medium
  {
    id: 'trans-med-1',
    spanish: 'Si tuviera más tiempo, viajaría más.',
    english: 'If I had more time, I would travel more.',
    alternativeAnswers: ["If I had more time, I'd travel more."],
    hints: ['Second conditional: If + past simple, would + verb'],
    difficulty: 'medium',
    category: 'Conditionals',
  },
  {
    id: 'trans-med-2',
    spanish: 'Llevo tres años aprendiendo inglés.',
    english: 'I have been learning English for three years.',
    alternativeAnswers: ["I've been learning English for three years."],
    hints: ['Present perfect continuous for duration'],
    difficulty: 'medium',
    category: 'Verb Tenses',
  },
  {
    id: 'trans-med-3',
    spanish: 'Me gustaría que vinieras a la fiesta.',
    english: 'I would like you to come to the party.',
    alternativeAnswers: ["I'd like you to come to the party."],
    hints: ['Would like + object + to + infinitive'],
    difficulty: 'medium',
    category: 'Wishes',
  },
  {
    id: 'trans-med-4',
    spanish: 'Cuanto más estudio, más aprendo.',
    english: 'The more I study, the more I learn.',
    hints: ['Double comparative structure'],
    difficulty: 'medium',
    category: 'Comparatives',
  },
  {
    id: 'trans-med-5',
    spanish: 'Debería haber llegado antes.',
    english: 'I should have arrived earlier.',
    alternativeAnswers: ['I should have arrived sooner.'],
    hints: ['Modal + have + past participle for past regret'],
    difficulty: 'medium',
    category: 'Modals',
  },

  // Additional medium translation exercises
  {
    id: 'trans-med-6',
    spanish: 'No me importa si llueve mañana.',
    english: "I don't mind if it rains tomorrow.",
    alternativeAnswers: ['I do not mind if it rains tomorrow.'],
    hints: ['Don\'t mind + if + present simple for future'],
    difficulty: 'medium',
    category: 'Expressions',
  },
  {
    id: 'trans-med-7',
    spanish: 'Ella es la persona más amable que he conocido.',
    english: "She is the kindest person I've ever met.",
    alternativeAnswers: ['She is the kindest person I have ever met.'],
    hints: ['Superlative + present perfect with ever'],
    difficulty: 'medium',
    category: 'Superlatives',
  },
  {
    id: 'trans-med-8',
    spanish: 'Me gustaría que vinieras a mi fiesta de cumpleaños.',
    english: "I'd like you to come to my birthday party.",
    alternativeAnswers: ['I would like you to come to my birthday party.'],
    hints: ['Would like + object + to + infinitive'],
    difficulty: 'medium',
    category: 'Invitations',
  },
  {
    id: 'trans-med-9',
    spanish: 'Aunque estaba cansado, terminó el trabajo.',
    english: 'Although he was tired, he finished the work.',
    alternativeAnswers: ['Though he was tired, he finished the work.', 'Even though he was tired, he finished the work.'],
    hints: ['Although/Though/Even though + clause for concession'],
    difficulty: 'medium',
    category: 'Concession',
  },
  {
    id: 'trans-med-10',
    spanish: 'Se cree que el edificio fue construido en el siglo XVIII.',
    english: 'The building is believed to have been built in the eighteenth century.',
    alternativeAnswers: ['It is believed that the building was built in the eighteenth century.'],
    hints: ['Passive reporting structure: is believed to have been + past participle'],
    difficulty: 'medium',
    category: 'Passive Voice',
  },

  // Hard
  {
    id: 'trans-hard-1',
    spanish: 'No es que no me guste, sino que no tengo tiempo.',
    english: "It's not that I don't like it, but that I don't have time.",
    alternativeAnswers: ["It's not that I don't like it, it's just that I don't have time."],
    hints: ["Structure: It's not that... but/rather..."],
    difficulty: 'hard',
    category: 'Complex Structures',
  },
  {
    id: 'trans-hard-2',
    spanish: 'Por mucho que lo intente, no logro entenderlo.',
    english: "No matter how hard I try, I can't understand it.",
    alternativeAnswers: ["However hard I try, I can't understand it.", "However much I try, I can't understand it."],
    hints: ['No matter how + adjective/adverb'],
    difficulty: 'hard',
    category: 'Concession',
  },
  {
    id: 'trans-hard-3',
    spanish: 'Se cree que la empresa cerrará el próximo mes.',
    english: 'The company is believed to close next month.',
    alternativeAnswers: ['It is believed that the company will close next month.'],
    hints: ['Passive reporting structure'],
    difficulty: 'hard',
    category: 'Passive Voice',
  },
  // Additional hard (C1-C2)
  {
    id: 'trans-hard-4',
    spanish: 'De no ser por tu intervención, el acuerdo habría fracasado.',
    english: 'Had it not been for your intervention, the agreement would have failed.',
    alternativeAnswers: ['Were it not for your intervention, the agreement would have failed.'],
    hints: ['Inverted conditional: Had it not been for'],
    difficulty: 'hard',
    category: 'Conditionals',
  },
  {
    id: 'trans-hard-5',
    spanish: 'Lo que más me preocupa es que no se hayan tenido en cuenta las consecuencias.',
    english: "What concerns me most is that the consequences were not taken into account.",
    alternativeAnswers: ["What worries me most is that the consequences weren't taken into consideration."],
    hints: ['Cleft sentence: What concerns me most is...', 'Passive voice'],
    difficulty: 'hard',
    category: 'Complex Structures',
  },
  {
    id: 'trans-hard-6',
    spanish: 'Por muy convincentes que sean sus argumentos, sigo sin estar de acuerdo.',
    english: "However convincing their arguments may be, I still disagree.",
    alternativeAnswers: ["No matter how convincing their arguments may be, I still disagree.", "However convincing their arguments might be, I still disagree."],
    hints: ['However + adjective + subject + verb'],
    difficulty: 'hard',
    category: 'Concession',
  },
  {
    id: 'trans-hard-7',
    spanish: 'No fue hasta que llegó a casa cuando se dio cuenta del error.',
    english: "It was not until she arrived home that she realized the mistake.",
    alternativeAnswers: ["Not until she arrived home did she realize the mistake."],
    hints: ['Cleft sentence with not until', 'Inversion possible'],
    difficulty: 'hard',
    category: 'Emphasis',
  },
  {
    id: 'trans-hard-8',
    spanish: 'Tanto si llueve como si hace sol, el evento tendrá lugar.',
    english: "Whether it rains or shines, the event will take place.",
    alternativeAnswers: ["Whether it rains or not, the event will take place.", "Come rain or shine, the event will take place."],
    hints: ['Whether... or...', 'Come rain or shine (idiom)'],
    difficulty: 'hard',
    category: 'Conditionals',
  },
  {
    id: 'trans-hard-9',
    spanish: 'Lejos de mejorar la situación, la nueva política la ha empeorado.',
    english: "Far from improving the situation, the new policy has made it worse.",
    alternativeAnswers: ["Far from improving the situation, the new policy has worsened it."],
    hints: ['Far from + -ing = Lejos de'],
    difficulty: 'hard',
    category: 'Complex Structures',
  },
  {
    id: 'trans-hard-10',
    spanish: 'Dado que no se presentaron objeciones, se procedió a la votación.',
    english: "Given that no objections were raised, the vote proceeded.",
    alternativeAnswers: ["Seeing as no objections were raised, the vote proceeded.", "In view of the fact that no objections were raised, the vote proceeded."],
    hints: ['Given that = Dado que', 'Passive: were raised'],
    difficulty: 'hard',
    category: 'Formal Writing',
  },
];

// Open Fill-in-the-Blanks
export const openBlankExercises: OpenBlankExercise[] = [
  {
    id: 'blank-1',
    sentence: 'I ___ to the gym every morning before work.',
    answers: [['go', 'went']],
    hints: ['Present simple for routines'],
    context: 'Talking about daily habits',
    translation: 'Voy al gimnasio todas las mañanas antes del trabajo.',
  },
  {
    id: 'blank-2',
    sentence: 'She ___ working on this project since January.',
    answers: [['has been']],
    hints: ['Present perfect continuous'],
    translation: 'Ella ha estado trabajando en este proyecto desde enero.',
  },
  {
    id: 'blank-3',
    sentence: 'If I ___ you, I ___ accept the job offer.',
    answers: [['were', 'was'], ['would', "would've", 'would have']],
    hints: ['Second conditional structure'],
    translation: 'Si fuera tú, aceptaría la oferta de trabajo.',
  },
  {
    id: 'blank-4',
    sentence: 'The meeting ___ cancelled because the manager ___ sick.',
    answers: [['was', 'got'], ['was', 'fell', 'became']],
    translation: 'La reunión fue cancelada porque el gerente estaba enfermo.',
  },
  {
    id: 'blank-5',
    sentence: 'By the time we arrived, the movie ___ already ___.',
    answers: [['had'], ['started', 'begun']],
    hints: ['Past perfect for action before another past action'],
    translation: 'Para cuando llegamos, la película ya había empezado.',
  },
  {
    id: 'blank-6',
    sentence: 'You ___ better hurry up, or you ___ miss the train.',
    answers: [["had", "'d"], ['will', "'ll", 'might']],
    hints: ["'Had better' for strong advice"],
    translation: 'Será mejor que te apures, o perderás el tren.',
  },
  {
    id: 'blank-7',
    sentence: 'Not only ___ she smart, but she ___ also very kind.',
    answers: [['is', 'was'], ['is', 'was']],
    hints: ['Inverted structure with "not only"'],
    translation: 'No solo es inteligente, sino que también es muy amable.',
  },
  {
    id: 'blank-8',
    sentence: 'I wish I ___ speak French fluently.',
    answers: [['could', 'can']],
    hints: ['Wish + past simple for present wishes'],
    translation: 'Ojalá pudiera hablar francés con fluidez.',
  },
  {
    id: 'blank-9',
    sentence: "It's high time you ___ looking for a new job.",
    answers: [['started', 'began']],
    hints: ["It's high time + past simple"],
    translation: 'Ya es hora de que empieces a buscar un nuevo trabajo.',
  },
  {
    id: 'blank-10',
    sentence: 'The more you practice, the ___ you will become.',
    answers: [['better', 'more skilled', 'more proficient']],
    hints: ['Double comparative structure'],
    translation: 'Cuanto más practiques, mejor te volverás.',
  },
];

// Dictation Sentences
export const dictationSentences: DictationSentence[] = [
  // Easy
  {
    id: 'dict-easy-1',
    text: 'The weather is nice today.',
    translation: 'El clima está agradable hoy.',
    difficulty: 'easy',
    category: 'Weather',
  },
  {
    id: 'dict-easy-2',
    text: 'I have two brothers and one sister.',
    translation: 'Tengo dos hermanos y una hermana.',
    difficulty: 'easy',
    category: 'Family',
  },
  {
    id: 'dict-easy-3',
    text: 'She works at a hospital.',
    translation: 'Ella trabaja en un hospital.',
    difficulty: 'easy',
    category: 'Work',
  },
  {
    id: 'dict-easy-4',
    text: 'Can you help me, please?',
    translation: '¿Puedes ayudarme, por favor?',
    difficulty: 'easy',
    category: 'Requests',
  },
  {
    id: 'dict-easy-5',
    text: 'I usually wake up at seven.',
    translation: 'Usualmente me despierto a las siete.',
    difficulty: 'easy',
    category: 'Daily Routine',
  },

  // Medium
  {
    id: 'dict-med-1',
    text: 'I have been waiting for over an hour.',
    translation: 'He estado esperando por más de una hora.',
    difficulty: 'medium',
    category: 'Time Expressions',
  },
  {
    id: 'dict-med-2',
    text: 'If it rains tomorrow, we will cancel the picnic.',
    translation: 'Si llueve mañana, cancelaremos el picnic.',
    difficulty: 'medium',
    category: 'Conditionals',
  },
  {
    id: 'dict-med-3',
    text: 'The report must be submitted by Friday.',
    translation: 'El informe debe ser entregado para el viernes.',
    difficulty: 'medium',
    category: 'Business',
  },
  {
    id: 'dict-med-4',
    text: "She asked me whether I had finished the project.",
    translation: 'Ella me preguntó si había terminado el proyecto.',
    difficulty: 'medium',
    category: 'Reported Speech',
  },
  {
    id: 'dict-med-5',
    text: 'Despite the rain, we decided to go hiking.',
    translation: 'A pesar de la lluvia, decidimos ir de excursión.',
    difficulty: 'medium',
    category: 'Linking Words',
  },

  // Additional medium dictation sentences
  {
    id: 'dict-med-6',
    text: 'She suggested that we should meet at the cinema at eight.',
    translation: 'Ella sugirió que deberíamos reunirnos en el cine a las ocho.',
    difficulty: 'medium',
    category: 'Suggestions',
  },
  {
    id: 'dict-med-7',
    text: 'The project has been delayed due to unforeseen circumstances.',
    translation: 'El proyecto se ha retrasado debido a circunstancias imprevistas.',
    difficulty: 'medium',
    category: 'Business',
  },
  {
    id: 'dict-med-8',
    text: 'I would like to apologise for the inconvenience caused.',
    translation: 'Me gustaría disculparme por el inconveniente causado.',
    difficulty: 'medium',
    category: 'Formal Expressions',
  },
  {
    id: 'dict-med-9',
    text: 'Neither of the candidates has enough experience for the position.',
    translation: 'Ninguno de los candidatos tiene suficiente experiencia para el puesto.',
    difficulty: 'medium',
    category: 'Grammar',
  },
  {
    id: 'dict-med-10',
    text: 'The conference will take place next month in Barcelona.',
    translation: 'La conferencia tendrá lugar el próximo mes en Barcelona.',
    difficulty: 'medium',
    category: 'Events',
  },

  // Hard
  {
    id: 'dict-hard-1',
    text: 'Had I known about the meeting, I would have prepared a presentation.',
    translation: 'Si hubiera sabido de la reunión, habría preparado una presentación.',
    difficulty: 'hard',
    category: 'Conditionals',
  },
  {
    id: 'dict-hard-2',
    text: 'The phenomenon, which scientists have been studying for decades, remains largely unexplained.',
    translation: 'El fenómeno, que los científicos han estado estudiando durante décadas, permanece en gran parte sin explicación.',
    difficulty: 'hard',
    category: 'Academic',
  },
  {
    id: 'dict-hard-3',
    text: 'Not until she arrived home did she realize she had left her keys at the office.',
    translation: 'No fue hasta que llegó a casa que se dio cuenta de que había dejado sus llaves en la oficina.',
    difficulty: 'hard',
    category: 'Inversion',
  },
  {
    id: 'dict-hard-4',
    text: "The committee's decision, albeit controversial, was ultimately accepted by most stakeholders.",
    translation: 'La decisión del comité, aunque controvertida, fue finalmente aceptada por la mayoría de las partes interesadas.',
    difficulty: 'hard',
    category: 'Business',
  },
  {
    id: 'dict-hard-5',
    text: 'Were it not for your assistance, the project would have failed.',
    translation: 'De no ser por tu asistencia, el proyecto habría fracasado.',
    difficulty: 'hard',
    category: 'Formal English',
  },
  {
    id: 'dict-hard-6',
    text: 'It has been suggested that the findings, although preliminary, may indicate a correlation between the variables under investigation.',
    translation: 'Se ha sugerido que los hallazgos, aunque preliminares, pueden indicar una correlación entre las variables bajo investigación.',
    difficulty: 'hard',
    category: 'Academic',
  },
  {
    id: 'dict-hard-7',
    text: 'Notwithstanding the aforementioned reservations, the board deemed it prudent to proceed with the merger, subject to the completion of due diligence.',
    translation: 'No obstante las reservas mencionadas anteriormente, la junta consideró prudente proceder con la fusión, sujeto a la finalización de la debida diligencia.',
    difficulty: 'hard',
    category: 'Business',
  },
  {
    id: 'dict-hard-8',
    text: 'The extent to which such measures would prove effective remains a matter of considerable debate among policymakers and academics alike.',
    translation: 'El grado en que tales medidas resultarían efectivas sigue siendo objeto de considerable debate entre legisladores y académicos por igual.',
    difficulty: 'hard',
    category: 'Academic',
  },
  {
    id: 'dict-hard-9',
    text: 'Had the committee been apprised of the full implications at the outset, it is conceivable that a different course of action might have been adopted.',
    translation: 'Si el comité hubiera sido informado de las implicaciones completas desde el principio, es concebible que se hubiera adoptado un curso de acción diferente.',
    difficulty: 'hard',
    category: 'Formal English',
  },
  {
    id: 'dict-hard-10',
    text: 'The proliferation of such practices, whilst ostensibly beneficial to short-term profitability, may nevertheless entail significant long-term reputational risks.',
    translation: 'La proliferación de tales prácticas, aunque aparentemente beneficiosas para la rentabilidad a corto plazo, puede no obstante conllevar riesgos reputacionales significativos a largo plazo.',
    difficulty: 'hard',
    category: 'Business',
  },
];

// Helper function to get exercises by level
export const getExercisesByLevel = (level: string) => {
  const levelMap: Record<string, string[]> = {
    '1': ['A1'],
    '2': ['A2'],
    '3': ['B1'],
    '4': ['B2'],
    '5': ['C1'],
    '6': ['C2'],
  };

  const levels = levelMap[level] || ['A1', 'A2'];

  return {
    freeWriting: freeWritingPrompts.filter((p) => levels.includes(p.level)),
    translations: translationExercises.filter((e) => {
      if (levels.includes('A1') || levels.includes('A2')) return e.difficulty === 'easy';
      if (levels.includes('B1')) return e.difficulty === 'easy' || e.difficulty === 'medium';
      return true;
    }),
    blanks: openBlankExercises,
    dictation: dictationSentences.filter((s) => {
      if (levels.includes('A1') || levels.includes('A2')) return s.difficulty === 'easy';
      if (levels.includes('B1')) return s.difficulty === 'easy' || s.difficulty === 'medium';
      return true;
    }),
  };
};

// Get random exercises
export const getRandomExercises = (type: 'freeWriting' | 'translations' | 'blanks' | 'dictation', count: number, level?: string) => {
  let pool: any[];

  switch (type) {
    case 'freeWriting':
      pool = level ? freeWritingPrompts.filter((p) => p.level.startsWith(level.charAt(0))) : freeWritingPrompts;
      break;
    case 'translations':
      pool = translationExercises;
      break;
    case 'blanks':
      pool = openBlankExercises;
      break;
    case 'dictation':
      pool = dictationSentences;
      break;
    default:
      pool = [];
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
