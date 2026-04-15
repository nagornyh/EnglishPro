import type { Level } from '../../types';

export const level6: Level = {
  id: 6,
  name: "Pre-Advanced",
  cefrLevel: "B2",
  description: "Presentaciones, voz pasiva y vocabulario de negocios",
  totalTasks: 12,
  estimatedHours: 15,
  color: "#ec4899",
  icon: "💎",
  tasks: [
    {
      id: 1,
      title: "Giving Presentations",
      titleEs: "Dando Presentaciones",
      introduction: {
        title: "📊 Dando Presentaciones Profesionales",
        explanation: "Las presentaciones efectivas siguen una estructura clara y usan lenguaje que mantiene la atención del público. Aprenderás a introducir, desarrollar y concluir presentaciones.",
        keyPoints: [
          "Introducción: 'Today I'm going to talk about...', 'The purpose of this presentation is...'",
          "Estructura: 'I've divided my presentation into three parts', 'First... Then... Finally...'",
          "Transiciones: 'Moving on to...', 'That brings me to my next point', 'Let's turn to...'",
          "Conclusión: 'To sum up...', 'In conclusion...', 'I'd be happy to answer any questions'"
        ],
        examples: [
          { english: "I'd like to start by giving you an overview.", spanish: "Me gustaría comenzar dándoles una visión general.", explanation: "Inicio de presentación" },
          { english: "As you can see from this graph...", spanish: "Como pueden ver en este gráfico...", explanation: "Refiriéndose a visuales" },
          { english: "That concludes my presentation. Any questions?", spanish: "Eso concluye mi presentación. ¿Alguna pregunta?", explanation: "Cerrando la presentación" }
        ],
        tips: [
          "💡 La regla de 3: presenta 3 puntos principales, la gente recuerda mejor en grupos de 3",
          "💡 Usa preguntas retóricas: 'Have you ever wondered why...?' captura atención",
          "💡 'Feel free to interrupt if you have questions' hace la presentación más interactiva"
        ],
        whenToUse: ["En presentaciones formales ante clientes, directivos o equipos", "En conferencias, seminarios o charlas académicas", "Al presentar resultados, propuestas o informes en reuniones", "En entrevistas donde te piden presentar un caso o idea"],
        whenNotToUse: ["No uses frases de presentación formal en conversaciones 1-a-1 casuales", "Evita 'As you can see from this graph...' si no tienes visual — suena artificial", "No uses 'To sum up...' al final de cada email — es para presentaciones orales"]
      },
      objectives: ["Estructurar una presentación", "Usar transiciones fluidas", "Manejar preguntas y respuestas"],
      grammarTheoryIds: ["b2-passive-advanced"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l6t1_n1", word: "presentation", translation: "presentación", type: "noun", definition: "a talk to inform or persuade", definitionEs: "una charla para informar o persuadir", example: "I'm giving a presentation tomorrow.", exampleEs: "Voy a dar una presentación mañana.", related: ["present"], difficulty: 1 },
          { id: "l6t1_n2", word: "audience", translation: "audiencia", type: "noun", definition: "the people watching a presentation", definitionEs: "las personas viendo una presentación", example: "Know your audience.", exampleEs: "Conoce a tu audiencia.", related: [], difficulty: 1 },
          { id: "l6t1_n3", word: "slide", translation: "diapositiva", type: "noun", definition: "a page in a presentation", definitionEs: "una página en una presentación", example: "Let's move to the next slide.", exampleEs: "Pasemos a la siguiente diapositiva.", related: [], difficulty: 1 },
          { id: "l6t1_n4", word: "overview", translation: "visión general", type: "noun", definition: "a summary of the main points", definitionEs: "un resumen de los puntos principales", example: "I'll give you an overview first.", exampleEs: "Les daré una visión general primero.", related: [], difficulty: 1 },
          { id: "l6t1_n5", word: "handout", translation: "material impreso", type: "noun", definition: "printed material for attendees", definitionEs: "material impreso para asistentes", example: "I've prepared handouts for everyone.", exampleEs: "He preparado material impreso para todos.", related: [], difficulty: 2 },
          { id: "l6t1_n6", word: "Q&A", translation: "preguntas y respuestas", type: "noun", definition: "question and answer session", definitionEs: "sesión de preguntas y respuestas", example: "We'll have Q&A at the end.", exampleEs: "Tendremos preguntas y respuestas al final.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l6t1_v1", word: "outline", translation: "resumir/esbozar", type: "verb", definition: "to give main points", definitionEs: "dar los puntos principales", example: "Let me outline the agenda.", exampleEs: "Permítanme esbozar la agenda.", related: [], difficulty: 2 },
          { id: "l6t1_v2", word: "emphasize", translation: "enfatizar", type: "verb", definition: "to give importance to", definitionEs: "dar importancia a", example: "I want to emphasize this point.", exampleEs: "Quiero enfatizar este punto.", related: ["emphasis"], difficulty: 2 },
          { id: "l6t1_v3", word: "summarize", translation: "resumir", type: "verb", definition: "to give a brief statement", definitionEs: "dar una declaración breve", example: "Let me summarize the key points.", exampleEs: "Permítanme resumir los puntos clave.", related: ["summary"], difficulty: 1 },
          { id: "l6t1_v4", word: "illustrate", translation: "ilustrar", type: "verb", definition: "to show with examples", definitionEs: "mostrar con ejemplos", example: "This chart illustrates the trend.", exampleEs: "Este gráfico ilustra la tendencia.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l6t1_a1", word: "brief", translation: "breve", type: "adjective", definition: "short in time", definitionEs: "corto en tiempo", example: "I'll keep this brief.", exampleEs: "Lo mantendré breve.", related: [], difficulty: 1 },
          { id: "l6t1_a2", word: "relevant", translation: "relevante", type: "adjective", definition: "related to the topic", definitionEs: "relacionado con el tema", example: "Is this relevant to your work?", exampleEs: "¿Es esto relevante para tu trabajo?", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l6t1_e1", word: "Today I'm going to talk about...", translation: "Hoy voy a hablar sobre...", type: "expression", definition: "introducing the topic", definitionEs: "introduciendo el tema", example: "Today I'm going to talk about marketing.", exampleEs: "Hoy voy a hablar sobre marketing.", related: [], difficulty: 1 },
          { id: "l6t1_e2", word: "Moving on to...", translation: "Pasando a...", type: "expression", definition: "transitioning to next point", definitionEs: "transición al siguiente punto", example: "Moving on to the budget...", exampleEs: "Pasando al presupuesto...", related: [], difficulty: 1 },
          { id: "l6t1_e3", word: "As you can see...", translation: "Como pueden ver...", type: "expression", definition: "referring to visual", definitionEs: "refiriéndose a un visual", example: "As you can see from this chart...", exampleEs: "Como pueden ver en este gráfico...", related: [], difficulty: 1 },
          { id: "l6t1_e4", word: "To sum up...", translation: "Para resumir...", type: "expression", definition: "concluding", definitionEs: "concluyendo", example: "To sum up, we need to act now.", exampleEs: "Para resumir, necesitamos actuar ahora.", related: [], difficulty: 1 },
          { id: "l6t1_e5", word: "Are there any questions?", translation: "¿Hay alguna pregunta?", type: "expression", definition: "opening Q&A", definitionEs: "abriendo preguntas y respuestas", example: "Are there any questions so far?", exampleEs: "¿Hay alguna pregunta hasta ahora?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t1_cm1",
          wrong: "I'm going to talk you about marketing.",
          correct: "I'm going to talk to you about marketing.",
          explanation: "'Talk' needs the preposition 'to' before the object: 'talk TO you ABOUT something'.",
          explanationEs: "'Talk' necesita preposición 'to' antes del objeto: 'talk TO you ABOUT something'.",
          category: "grammar"
        },
        {
          id: "l6t1_cm2",
          wrong: "Like you can see in this graph...",
          correct: "As you can see in this graph...",
          explanation: "In formal presentations, use 'as' not 'like' to introduce what you're showing.",
          explanationEs: "En presentaciones formales, usa 'as' no 'like' para introducir lo que muestras.",
          category: "usage"
        },
        {
          id: "l6t1_cm3",
          wrong: "I have divided my presentation in three parts.",
          correct: "I have divided my presentation into three parts.",
          explanation: "'Divide' goes with 'INTO', not 'in': divide INTO parts.",
          explanationEs: "'Divide' va con 'INTO', no 'in': divide INTO parts.",
          category: "grammar"
        },
        {
          id: "l6t1_cm4",
          wrong: "In the conclusion, sales increased.",
          correct: "In conclusion, sales increased.",
          explanation: "'In conclusion' (without the article 'the') is the correct form to close a presentation.",
          explanationEs: "'In conclusion' (sin artículo 'the') es la forma correcta para cerrar una presentación.",
          category: "usage"
        },
        {
          id: "l6t1_cm5",
          wrong: "Does anyone has any questions?",
          correct: "Does anyone have any questions?",
          explanation: "With 'does', the main verb goes in base form: 'Does anyone HAVE...?'",
          explanationEs: "Con 'does', el verbo principal va en forma base: 'Does anyone HAVE...?'",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las frases de presentación:",
          items: [
            { sentence: "Good morning, everyone. Today I'm going ___ talk about our Q3 results.", answer: "to", hint: "going TO talk" },
            { sentence: "I've divided my presentation ___ three main sections.", answer: "into", hint: "divide INTO" },
            { sentence: "Let me start ___ giving you some background.", answer: "by", hint: "start BY + gerund" },
            { sentence: "Moving ___ to our second point...", answer: "on", hint: "moving ON to" },
            { sentence: "___ you can see from this chart, sales have increased.", answer: "As", hint: "formal: AS you can see" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica las expresiones por momento de la presentación:",
          categories: [
            { name: "Introducción", items: ["Today I'm going to talk about...", "The purpose of this presentation is...", "I've divided my talk into three parts"] },
            { name: "Transiciones", items: ["Moving on to...", "That brings me to my next point", "Let's turn to...", "Now let's look at..."] },
            { name: "Conclusión", items: ["To sum up...", "In conclusion...", "To summarize the main points...", "Any questions?"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Haz las frases más formales:",
          items: [
            { original: "Now I'll talk about money stuff.", transformed: "Now I'd like to turn to the financial aspects." },
            { original: "Look at this picture.", transformed: "I'd like to draw your attention to this image." },
            { original: "That's it. Any questions?", transformed: "That concludes my presentation. I'd be happy to answer any questions." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa las transiciones:",
          items: [
            { sentence: "That ___ me to my next point about customer feedback.", answer: "brings", hint: "That BRINGS me to..." },
            { sentence: "Let me ___ on to the second part of my presentation.", answer: "move", hint: "MOVE on to" },
            { sentence: "Having looked at costs, I'd now ___ to discuss revenue.", answer: "like", hint: "I'd LIKE to discuss" },
            { sentence: "Before I ___, let me summarize the key points.", answer: "finish/conclude", hint: "antes de terminar" },
            { sentence: "I'd be happy ___ answer any questions you may have.", answer: "to", hint: "happy TO answer" }
          ]
        }
      ],
      modelDialogue: {
        title: "Una presentación de resultados trimestrales",
        dialogue: [
          { speaker: "Presenter", text: "Good morning, everyone. Thank you for joining me today. I'm going to present our Q3 results.", translation: "Buenos días a todos. Gracias por acompañarme hoy. Voy a presentar nuestros resultados del Q3." },
          { speaker: "Presenter", text: "I've divided my presentation into three parts: first, sales performance; then, customer feedback; and finally, our plans for Q4.", translation: "He dividido mi presentación en tres partes: primero, rendimiento de ventas; luego, retroalimentación de clientes; y finalmente, nuestros planes para Q4." },
          { speaker: "Presenter", text: "Let me start by giving you an overview of sales. As you can see from this graph, sales increased by 15% compared to last quarter.", translation: "Permítanme comenzar dándoles una visión general de ventas. Como pueden ver en este gráfico, las ventas aumentaron un 15% comparado con el trimestre pasado." },
          { speaker: "Presenter", text: "Moving on to customer feedback. We received over 500 responses to our survey, and 85% of customers reported being satisfied.", translation: "Pasando a la retroalimentación de clientes. Recibimos más de 500 respuestas a nuestra encuesta, y el 85% de los clientes reportaron estar satisfechos." },
          { speaker: "Presenter", text: "That brings me to my final point: our plans for Q4. We're planning to launch two new products.", translation: "Eso me lleva a mi punto final: nuestros planes para Q4. Planeamos lanzar dos productos nuevos." },
          { speaker: "Presenter", text: "To sum up, Q3 was a success. Sales are up, customers are happy, and we have exciting plans ahead.", translation: "Para resumir, Q3 fue un éxito. Las ventas subieron, los clientes están contentos, y tenemos planes emocionantes por delante." },
          { speaker: "Presenter", text: "That concludes my presentation. Are there any questions?", translation: "Eso concluye mi presentación. ¿Hay alguna pregunta?" },
          { speaker: "Audience", text: "Yes, could you elaborate on the new products you mentioned?", translation: "Sí, ¿podría elaborar sobre los nuevos productos que mencionó?" },
          { speaker: "Presenter", text: "Certainly. I'd be happy to give you more details on that.", translation: "Por supuesto. Con gusto les daré más detalles sobre eso." }
        ],
        keyPhrases: [
          "I've divided my presentation into...",
          "Let me start by...",
          "As you can see from this graph...",
          "Moving on to...",
          "That brings me to...",
          "To sum up...",
          "That concludes my presentation",
          "I'd be happy to..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación en presentaciones",
        sounds: [
          { sound: "Pausing /.../ ", examples: ["First (pause) we'll look at sales.", "To sum up (pause) our results are positive."], tip: "Las pausas estratégicas dan énfasis" },
          { sound: "Emphasis", examples: ["FIFTEEN percent increase", "The MAIN point is..."], tip: "Enfatiza números y puntos clave" },
          { sound: "Intonation ↗↘", examples: ["Any questions? ↗", "To summarize ↘"], tip: "Sube al final de preguntas, baja en afirmaciones" }
        ],
        commonErrors: [
          { word: "overview", wrong: "/oh-ver-viu/", right: "/ˈəʊvəvjuː/", note: "Acento en primera sílaba" },
          { word: "summarize", wrong: "/su-ma-raiz/", right: "/ˈsʌməraɪz/", note: "Primera sílaba acentuada" },
          { word: "audience", wrong: "/au-DI-ens/", right: "/ˈɔːdiəns/", note: "Acento en primera sílaba" }
        ]
      },
      culturalNote: {
        title: "Presentaciones en culturas anglosajonas",
        content: "En EE.UU. y UK, las presentaciones valoran ser conciso y directo. La 'regla de 3' es común: presenta 3 puntos principales porque la gente recuerda mejor en grupos de tres. Se espera contacto visual con la audiencia. Es común comenzar con una anécdota o dato sorprendente para captar atención ('hook'). Las presentaciones muy largas son mal vistas - 'less is more'. Preguntas durante la presentación pueden ser bienvenidas en culturas más informales (EE.UU.), mientras en otras se prefiere al final.",
        examples: [
          "'Hook' - algo al inicio para captar atención",
          "'Elevator pitch' - presentación de 30-60 segundos",
          "'Death by PowerPoint' - presentación aburrida con demasiadas diapositivas",
          "'Q&A session' - sesión de preguntas y respuestas",
          "'Takeaway' - punto principal que quieres que recuerden"
        ]
      },
      consolidationQuiz: [
        {
          question: "'I've divided my presentation ___ three parts':",
          questionEs: "'I've divided my presentation ___ three parts':",
          options: ["in", "on", "into", "at"],
          correctAnswer: 2,
          explanation: "'Divide INTO' es la combinación correcta: 'divided into three parts'.",
          explanationEs: "'Divide INTO' es la combinación correcta: 'divided into three parts'."
        },
        {
          question: "Para referirte a un gráfico, dices:",
          questionEs: "Para referirte a un gráfico, dices:",
          options: ["Like you can see...", "As you can see...", "How you can see...", "What you can see..."],
          correctAnswer: 1,
          explanation: "'As you can see...' es la forma formal correcta para presentaciones.",
          explanationEs: "'As you can see...' es la forma formal correcta para presentaciones."
        },
        {
          question: "Una transición correcta es:",
          questionEs: "Una transición correcta es:",
          options: ["Moving in to...", "Moving on to...", "Moving into to...", "Moving up to..."],
          correctAnswer: 1,
          explanation: "'Moving ON to...' es la frase de transición correcta.",
          explanationEs: "'Moving ON to...' es la frase de transición correcta."
        },
        {
          question: "'That ___ me to my next point' se completa con:",
          questionEs: "'That ___ me to my next point' se completa con:",
          options: ["takes", "brings", "gets", "moves"],
          correctAnswer: 1,
          explanation: "'That BRINGS me to...' es la expresión estándar para transiciones.",
          explanationEs: "'That BRINGS me to...' es la expresión estándar para transiciones."
        },
        {
          question: "Para cerrar formalmente, dices:",
          questionEs: "Para cerrar formalmente, dices:",
          options: ["That's all, thanks", "I'm done now", "That concludes my presentation", "OK, finished"],
          correctAnswer: 2,
          explanation: "'That concludes my presentation' es la forma más profesional de cerrar.",
          explanationEs: "'That concludes my presentation' es la forma más profesional de cerrar."
        }
      ],
      guidedProduction: [
        {
          task: "Escribir introducción de presentación",
          prompt: "Escribe la introducción de una presentación sobre el lanzamiento de un nuevo producto.",
          sampleAnswer: "Good morning, everyone. Thank you for taking the time to be here today. My name is [name], and I'm the Product Manager for our new line. Today, I'm going to present our exciting new product launch. I've divided my presentation into three parts: first, I'll explain the market research that led to this product; then, I'll demonstrate the key features; and finally, I'll outline our marketing strategy. Please feel free to ask questions at the end. Let's begin with the market research.",
          hints: ["Agradece la presencia", "Presenta el tema claramente", "Anuncia la estructura (3 partes)", "Menciona cuándo pueden preguntar"]
        },
        {
          task: "Escribir transiciones",
          prompt: "Escribe 5 transiciones diferentes para pasar de un punto a otro.",
          sampleAnswer: "1. That brings me to my next point, which is customer feedback.\n\n2. Moving on to the financial results...\n\n3. Now let's turn our attention to the marketing strategy.\n\n4. Having looked at the challenges, I'd now like to discuss the solutions.\n\n5. This leads me to the final section of my presentation: future plans.",
          hints: ["Usa 'That brings me to...'", "Usa 'Moving on to...'", "Usa 'Now let's turn to...'", "Varía las expresiones"]
        },
        {
          task: "Escribir conclusión",
          prompt: "Escribe el cierre de una presentación resumiendo 3 puntos principales.",
          sampleAnswer: "To sum up, I've covered three main points today. First, we saw that customer satisfaction has increased by 20% this year. Second, our new product line has exceeded sales expectations. And third, we have a clear roadmap for continued growth. In conclusion, I believe we are well-positioned for a successful year ahead. Thank you for your attention. I'd be happy to answer any questions you may have. Are there any questions?",
          hints: ["Resume los 3 puntos principales", "Usa 'To sum up' o 'In conclusion'", "Agradece la atención", "Invita a preguntas"]
        },
        {
          task: "Presentación completa corta",
          prompt: "Escribe una presentación completa de 2 minutos sobre los beneficios de trabajar remoto.",
          sampleAnswer: "Good afternoon, everyone. Today, I'd like to talk about the benefits of remote work for our company.\n\nI've divided my presentation into three parts: productivity, cost savings, and employee satisfaction.\n\nLet me start with productivity. Studies show that remote workers are often more productive because they have fewer distractions and can work during their most productive hours.\n\nMoving on to cost savings. By reducing office space, companies can save significantly on rent and utilities. We could potentially save up to $50,000 annually.\n\nThat brings me to my final point: employee satisfaction. Surveys indicate that 80% of workers prefer flexible arrangements. This leads to better retention and lower recruitment costs.\n\nTo sum up, remote work offers clear benefits: increased productivity, cost savings, and happier employees. I recommend we pilot a hybrid model starting next quarter.\n\nThat concludes my presentation. Are there any questions?",
          hints: ["Incluye introducción, 3 puntos, y conclusión", "Usa transiciones entre cada punto", "Termina con recomendación", "Invita a preguntas"]
        }
      ],
      connectionToPrevious: "En niveles anteriores aprendiste vocabulario de negocios. Ahora usarás esas palabras en contexto de presentaciones profesionales.",
      connectionToNext: "En la siguiente lección aprenderás la voz pasiva, muy útil en presentaciones formales: 'The project was completed...'"
    },
    {
      id: 2,
      title: "Passive Voice",
      titleEs: "Voz Pasiva",
      introduction: {
        title: "🔄 Voz Pasiva en Inglés",
        explanation: "La voz pasiva se usa cuando el receptor de la acción es más importante que quien la realiza, o cuando no sabemos/importa quién realizó la acción.",
        keyPoints: [
          "Estructura: sujeto + be + participio pasado (+ by + agente)",
          "Presente: 'is/are + done' - 'The report is written every month'",
          "Pasado: 'was/were + done' - 'The bridge was built in 1990'",
          "Presente perfecto: 'has/have been + done' - 'The work has been completed'",
          "Futuro: 'will be + done' - 'The results will be announced tomorrow'"
        ],
        examples: [
          { english: "The Mona Lisa was painted by Leonardo da Vinci.", spanish: "La Mona Lisa fue pintada por Leonardo da Vinci.", explanation: "Pasado pasivo con agente" },
          { english: "English is spoken in many countries.", spanish: "El inglés se habla en muchos países.", explanation: "Presente pasivo sin agente" },
          { english: "The project will be finished next week.", spanish: "El proyecto será terminado la próxima semana.", explanation: "Futuro pasivo" }
        ],
        tips: [
          "💡 Usa pasiva cuando: 1) no sabes quién hizo algo, 2) no importa quién, 3) es obvio quién",
          "💡 En textos formales y científicos, la pasiva es muy común",
          "💡 'By' introduce el agente solo si es información importante"
        ],
        whenToUse: [
          'En presentaciones formales: "The project was completed ahead of schedule"',
          'En reportes escritos y científicos: "Several issues were identified during the audit"',
          'Cuando el agente es desconocido: "My car was stolen last night"',
          'En descripciones de procesos: "The data is collected and then analyzed"'
        ],
        whenNotToUse: [
          'En conversación informal → prefiere voz activa: "I finished the project" (NO "The project was finished by me")',
          'Cuando el sujeto/agente es importante: "Einstein discovered relativity" (NO "Relativity was discovered")',
          'En instrucciones directas: "Press the button" (NO "The button should be pressed")'
        ]
      },
      objectives: ["Formar oraciones en voz pasiva", "Identificar cuándo usar pasiva", "Transformar activa a pasiva"],
      grammarTheoryIds: ["b2-passive-advanced"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l6t2_n1", word: "action", translation: "acción", type: "noun", definition: "something done", definitionEs: "algo hecho", example: "The action was completed.", exampleEs: "La acción fue completada.", related: [], difficulty: 1 },
          { id: "l6t2_n2", word: "agent", translation: "agente", type: "noun", definition: "the doer of the action", definitionEs: "el que hace la acción", example: "The agent is unknown.", exampleEs: "El agente es desconocido.", related: [], difficulty: 2 },
          { id: "l6t2_n3", word: "structure", translation: "estructura", type: "noun", definition: "how something is organized", definitionEs: "cómo algo está organizado", example: "Learn the passive structure.", exampleEs: "Aprende la estructura pasiva.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l6t2_v1", word: "manufacture", translation: "fabricar", type: "verb", definition: "to make in a factory", definitionEs: "hacer en una fábrica", example: "These cars are manufactured in Japan.", exampleEs: "Estos carros son fabricados en Japón.", related: [], difficulty: 2 },
          { id: "l6t2_v2", word: "discover", translation: "descubrir", type: "verb", definition: "to find something new", definitionEs: "encontrar algo nuevo", example: "America was discovered in 1492.", exampleEs: "América fue descubierta en 1492.", related: ["discovery"], difficulty: 1 },
          { id: "l6t2_v3", word: "construct", translation: "construir", type: "verb", definition: "to build", definitionEs: "edificar", example: "The building was constructed in 1920.", exampleEs: "El edificio fue construido en 1920.", related: ["construction"], difficulty: 2 },
          { id: "l6t2_v4", word: "establish", translation: "establecer", type: "verb", definition: "to start or create", definitionEs: "iniciar o crear", example: "The company was established in 1950.", exampleEs: "La empresa fue establecida en 1950.", related: [], difficulty: 2 },
          { id: "l6t2_v5", word: "announce", translation: "anunciar", type: "verb", definition: "to make something known", definitionEs: "hacer algo conocido", example: "The winner will be announced soon.", exampleEs: "El ganador será anunciado pronto.", related: ["announcement"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l6t2_a1", word: "active", translation: "activo", type: "adjective", definition: "doing the action", definitionEs: "haciendo la acción", example: "This is an active sentence.", exampleEs: "Esta es una oración activa.", related: [], difficulty: 1 },
          { id: "l6t2_a2", word: "passive", translation: "pasivo", type: "adjective", definition: "receiving the action", definitionEs: "recibiendo la acción", example: "This is a passive sentence.", exampleEs: "Esta es una oración pasiva.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l6t2_e1", word: "It is said that...", translation: "Se dice que...", type: "expression", definition: "reporting what people say", definitionEs: "reportando lo que dice la gente", example: "It is said that he's a genius.", exampleEs: "Se dice que él es un genio.", related: [], difficulty: 1 },
          { id: "l6t2_e2", word: "It is believed that...", translation: "Se cree que...", type: "expression", definition: "reporting beliefs", definitionEs: "reportando creencias", example: "It is believed that the Earth is 4.5 billion years old.", exampleEs: "Se cree que la Tierra tiene 4.5 mil millones de años.", related: [], difficulty: 1 },
          { id: "l6t2_e3", word: "It was reported that...", translation: "Se reportó que...", type: "expression", definition: "reporting news", definitionEs: "reportando noticias", example: "It was reported that sales increased.", exampleEs: "Se reportó que las ventas aumentaron.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [
          { id: "l6t2_p1", word: "by", translation: "por", type: "preposition", definition: "introduces the agent", definitionEs: "introduce al agente", example: "Written by Shakespeare.", exampleEs: "Escrito por Shakespeare.", related: [], difficulty: 1 },
        ],
      },
      commonMistakes: [
        {
          id: "l6t2_cm1",
          wrong: "The cake was ate by the children.",
          correct: "The cake was eaten by the children.",
          explanation: "After 'was/were' you need the PAST PARTICIPLE: 'eaten', not 'ate'.",
          explanationEs: "Después de 'was/were' necesitas el PARTICIPIO PASADO: 'eaten', no 'ate'.",
          category: "grammar"
        },
        {
          id: "l6t2_cm2",
          wrong: "The letter was send yesterday.",
          correct: "The letter was sent yesterday.",
          explanation: "'Send' has irregular past participle: send → sent → sent.",
          explanationEs: "'Send' tiene participio irregular: send → sent → sent.",
          category: "grammar"
        },
        {
          id: "l6t2_cm3",
          wrong: "The house was building in 1990.",
          correct: "The house was built in 1990.",
          explanation: "For passive voice use past participle: 'built', not 'building' (gerund).",
          explanationEs: "Para voz pasiva usa participio pasado: 'built', no 'building' (gerundio).",
          category: "grammar"
        },
        {
          id: "l6t2_cm4",
          wrong: "English is spoke in many countries.",
          correct: "English is spoken in many countries.",
          explanation: "'Speak' has irregular past participle: speak → spoke → spoken.",
          explanationEs: "'Speak' tiene participio irregular: speak → spoke → spoken.",
          category: "grammar"
        },
        {
          id: "l6t2_cm5",
          wrong: "The meeting has been cancel.",
          correct: "The meeting has been cancelled.",
          explanation: "Present perfect passive: has/have been + past participle: 'cancelled'.",
          explanationEs: "Presente perfecto pasivo: has/have been + participio pasado: 'cancelled'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con la forma pasiva correcta:",
          items: [
            { sentence: "The Eiffel Tower ___ (build) in 1889.", answer: "was built", hint: "pasado pasivo" },
            { sentence: "English ___ (speak) in over 50 countries.", answer: "is spoken", hint: "presente pasivo" },
            { sentence: "The new products ___ (launch) next month.", answer: "will be launched", hint: "futuro pasivo" },
            { sentence: "The report ___ (finish) yet?", answer: "Has... been finished", hint: "presente perfecto pasivo" },
            { sentence: "All employees ___ (inform) about the changes yesterday.", answer: "were informed", hint: "pasado pasivo plural" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma de activa a pasiva:",
          items: [
            { original: "Shakespeare wrote Hamlet.", transformed: "Hamlet was written by Shakespeare." },
            { original: "They manufacture cars in Japan.", transformed: "Cars are manufactured in Japan." },
            { original: "The company will announce the results tomorrow.", transformed: "The results will be announced tomorrow." },
            { original: "Someone has stolen my wallet.", transformed: "My wallet has been stolen." },
            { original: "They are building a new hospital.", transformed: "A new hospital is being built." }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica por tiempo verbal en pasiva:",
          categories: [
            { name: "Presente Simple Pasivo", items: ["is made", "are produced", "is spoken"] },
            { name: "Pasado Simple Pasivo", items: ["was built", "were discovered", "was written"] },
            { name: "Presente Perfecto Pasivo", items: ["has been completed", "have been informed", "has been cancelled"] },
            { name: "Futuro Pasivo", items: ["will be announced", "will be sent", "will be opened"] }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con pasiva impersonal (It is said/believed...):",
          items: [
            { sentence: "___ is said ___ he is very rich.", answer: "It/that", hint: "Se dice que..." },
            { sentence: "___ is believed ___ the company will close.", answer: "It/that", hint: "Se cree que..." },
            { sentence: "___ was reported ___ several people were injured.", answer: "It/that", hint: "Se reportó que..." },
            { sentence: "___ is thought ___ she left the country.", answer: "It/that", hint: "Se piensa que..." },
            { sentence: "___ is known ___ exercise is good for health.", answer: "It/that", hint: "Se sabe que..." }
          ]
        }
      ],
      modelDialogue: {
        title: "Tour por una fábrica",
        dialogue: [
          { speaker: "Guide", text: "Welcome to our chocolate factory. Here, over 10,000 chocolates are produced every day.", translation: "Bienvenidos a nuestra fábrica de chocolate. Aquí, más de 10,000 chocolates son producidos cada día." },
          { speaker: "Visitor", text: "Wow! When was this factory established?", translation: "¡Wow! ¿Cuándo fue establecida esta fábrica?" },
          { speaker: "Guide", text: "The factory was founded in 1920 by my great-grandfather. It was originally located in the city center.", translation: "La fábrica fue fundada en 1920 por mi bisabuelo. Originalmente estaba ubicada en el centro de la ciudad." },
          { speaker: "Visitor", text: "And when was it moved here?", translation: "¿Y cuándo fue trasladada aquí?" },
          { speaker: "Guide", text: "It was moved here in 1985. A larger facility was needed because demand had increased dramatically.", translation: "Fue trasladada aquí en 1985. Se necesitaba una instalación más grande porque la demanda había aumentado dramáticamente." },
          { speaker: "Visitor", text: "Are all the chocolates made by hand?", translation: "¿Todos los chocolates son hechos a mano?" },
          { speaker: "Guide", text: "No, most are produced by machines, but our premium line is still crafted by hand by our expert chocolatiers.", translation: "No, la mayoría son producidos por máquinas, pero nuestra línea premium todavía es elaborada a mano por nuestros chocolateros expertos." },
          { speaker: "Visitor", text: "Where are the chocolates sold?", translation: "¿Dónde son vendidos los chocolates?" },
          { speaker: "Guide", text: "They're sold in over 30 countries. Our biggest markets are in Europe, and new distribution deals have just been signed in Asia.", translation: "Son vendidos en más de 30 países. Nuestros mercados más grandes están en Europa, y nuevos acuerdos de distribución acaban de ser firmados en Asia." }
        ],
        keyPhrases: [
          "...are produced every day",
          "was founded in...",
          "It was originally located...",
          "It was moved here...",
          "...was needed because...",
          "...are made by hand",
          "...is crafted by...",
          "...have been signed"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de participios pasados",
        sounds: [
          { sound: "/t/", word: "worked", tip: "Después de sonidos sordos (p, k, f, s, sh, ch): -ed suena /t/. En español no hay este sonido final." },
          { sound: "/d/", word: "called", tip: "Después de sonidos sonoros (b, g, v, z, m, n, l, r): -ed suena /d/" },
          { sound: "/ɪd/", word: "wanted", tip: "Solo cuando el verbo termina en /t/ o /d/: wanted, needed. Se añade sílaba extra." }
        ],
        minimalPairs: [
          { word1: "established", word2: "establish", explanation: "El participio '-ed' en 'established' suena /t/, no /ed/ como en español" },
          { word1: "manufactured", word2: "manufacture", explanation: "Evita pronunciar 'manufactured' con acento en la última sílaba" }
        ],
        intonation: [
          { pattern: "Stress on past participle", example: "The report was WRITten", tip: "En pasiva, el participio pasado suele llevar énfasis" }
        ],
        commonErrors: [
          { word: "established", wrong: "/es-ta-BLI-shed/", right: "/ɪˈstæblɪʃt/", note: "-ed suena /t/" },
          { word: "manufactured", wrong: "/ma-nu-fac-tu-RED/", right: "/ˌmænjuˈfæktʃəd/", note: "-ed suena /d/" },
          { word: "constructed", wrong: "/con-STRUC-ted/", right: "/kənˈstrʌktɪd/", note: "-ed suena /ɪd/ después de /t/" }
        ]
      },
      culturalNote: {
        title: "Uso de la voz pasiva en inglés",
        titleEs: "Uso de la voz pasiva en inglés",
        content: "La voz pasiva es mucho más común en inglés escrito formal que en conversación casual. En textos científicos, reportes de negocios, y noticias, la pasiva es estándar: 'The experiment was conducted...' en lugar de 'We conducted the experiment...'. Esto da objetividad. Sin embargo, en comunicación empresarial moderna, hay una tendencia hacia la voz activa porque es más directa. En algunos casos, la pasiva puede parecer evasiva: 'Mistakes were made' evita decir quién los cometió.",
        contentEs: "La voz pasiva es mucho más común en inglés escrito formal que en conversación casual. En textos científicos, reportes de negocios y noticias, la pasiva es estándar. Esto da objetividad. Sin embargo, en comunicación empresarial moderna hay una tendencia hacia la voz activa porque es más directa. En algunos casos, la pasiva puede parecer evasiva: 'Mistakes were made' evita decir quién los cometió.",
        region: "General",
        examples: [
          "'Mistakes were made' - pasiva para evitar culpa",
          "'Your call is being recorded' - pasiva estándar en servicio al cliente",
          "'It has been decided that...' - decisiones corporativas",
          "'You are cordially invited' - invitaciones formales",
          "'Made in China' - etiquetas de productos"
        ]
      },
      consolidationQuiz: [
        {
          question: "La estructura de la voz pasiva es:",
          options: ["be + verbo base", "be + participio pasado", "have + participio", "will + verbo base"],
          correctAnswer: 1,
          explanation: "Voz pasiva = sujeto + be (conjugado) + participio pasado."
        },
        {
          question: "'The report ___ yesterday' (write):",
          options: ["was write", "was written", "was writing", "were written"],
          correctAnswer: 1,
          explanation: "'Write' tiene participio irregular: write → wrote → written."
        },
        {
          question: "¿Cuándo se usa 'by + agente'?",
          options: ["siempre", "cuando es información importante", "nunca", "solo en presente"],
          correctAnswer: 1,
          explanation: "'By + agente' solo se incluye cuando es información relevante o importante."
        },
        {
          question: "'It is believed that...' se usa para:",
          options: ["dar órdenes", "reportar opiniones generales", "hacer preguntas", "expresar emociones"],
          correctAnswer: 1,
          explanation: "'It is believed/said/thought that...' reporta opiniones o conocimiento general."
        },
        {
          question: "Presente perfecto pasivo es:",
          options: ["is + participio", "was + participio", "has/have been + participio", "will be + participio"],
          correctAnswer: 2,
          explanation: "Presente perfecto pasivo: has/have BEEN + participio pasado."
        },
        {
          question: "'Cars ___ in Japan' (manufacture):",
          options: ["is manufactured", "are manufactured", "was manufactured", "manufactured"],
          correctAnswer: 1,
          explanation: "'Cars' es plural, así que: 'Cars ARE manufactured...'."
        }
      ],
      guidedProduction: [
        {
          task: "Describir un proceso de producción",
          prompt: "Describe cómo se hace el pan usando voz pasiva.",
          sampleAnswer: "First, the ingredients are gathered: flour, water, yeast, and salt. The flour is measured and placed in a large bowl. Water is heated to the right temperature, and the yeast is dissolved in it. All ingredients are mixed together until a dough is formed. The dough is kneaded for about 10 minutes. Then it is left to rise for an hour. After that, the dough is shaped into loaves and placed in baking pans. Finally, the bread is baked in the oven at 180°C for 30 minutes. When it's ready, it is removed from the oven and left to cool.",
          hints: ["Usa 'is/are + participio' para cada paso", "Organiza cronológicamente: First, Then, Finally", "No necesitas incluir agente si es obvio"]
        },
        {
          task: "Escribir noticias en pasiva",
          prompt: "Escribe 5 titulares de noticias usando voz pasiva.",
          sampleAnswer: "1. New Hospital to Be Built Downtown - Construction will be completed by 2027.\n\n2. Three People Injured in Traffic Accident - They were taken to the hospital immediately.\n\n3. Local Company Acquired by International Corporation - 200 jobs are expected to be created.\n\n4. Ancient Artifact Discovered in Park - It is believed to be over 2,000 years old.\n\n5. City Budget Approved After Long Debate - $5 million has been allocated for education.",
          hints: ["Las noticias frecuentemente usan pasiva", "Incluye diferentes tiempos verbales", "Usa 'It is believed/reported that...'"]
        },
        {
          task: "Historia de una empresa",
          prompt: "Escribe la historia de una empresa ficticia usando voz pasiva.",
          sampleAnswer: "TechCorp was founded in 1995 by two college students. The company was originally established in a small garage. In the first year, only 100 products were sold. However, the company was noticed by investors, and $1 million was raised in funding. A larger office was opened in 2000. By 2005, TechCorp's products were being sold in 50 countries. In 2010, the company was acquired by a larger corporation for $500 million. Today, it is considered one of the most innovative tech companies, and its products are used by millions worldwide.",
          hints: ["Usa 'was founded/established' para inicio", "Varía tiempos: was, were, has been, is being", "Incluye 'is considered' para opiniones actuales"]
        },
        {
          task: "Transformar activa a pasiva",
          prompt: "Transforma estas oraciones activas a pasiva.",
          sampleAnswer: "1. Active: They build 500 cars every day. → Passive: 500 cars are built every day.\n\n2. Active: Someone stole my bike yesterday. → Passive: My bike was stolen yesterday.\n\n3. Active: The company will launch the product next month. → Passive: The product will be launched next month.\n\n4. Active: They have just completed the project. → Passive: The project has just been completed.\n\n5. Active: People speak English in many countries. → Passive: English is spoken in many countries.",
          hints: ["El objeto de activa → sujeto de pasiva", "Conjuga 'be' según el tiempo original", "Omite agente si no es importante"]
        }
      ],
      connectionToPrevious: "En la lección anterior sobre presentaciones, viste frases pasivas como 'The results will be announced'. Ahora dominarás completamente esta estructura.",
      connectionToNext: "En la siguiente lección aprenderás expresiones de cantidad, útiles con pasiva: 'A large number of products are manufactured...'"
    },
    {
      id: 3,
      title: "Expressing Quantity",
      titleEs: "Expresando Cantidad",
      introduction: {
        title: "📊 Expresando Cantidades",
        explanation: "Más allá de números específicos, hay muchas formas de expresar cantidades en inglés. Aprenderás expresiones para cantidades grandes, pequeñas y aproximadas.",
        keyPoints: [
          "Cantidades grandes: 'a great deal of', 'plenty of', 'a large number of'",
          "Cantidades pequeñas: 'a little', 'a few', 'hardly any', 'barely any'",
          "Cantidades aproximadas: 'approximately', 'roughly', 'about', 'around'",
          "Sin cantidad: 'none', 'no... at all', 'not... any'",
          "Contables vs Incontables: 'number of' (contables) vs 'amount of' (incontables)"
        ],
        examples: [
          { english: "There's plenty of food for everyone.", spanish: "Hay suficiente comida para todos.", explanation: "Cantidad abundante" },
          { english: "We have approximately 500 employees.", spanish: "Tenemos aproximadamente 500 empleados.", explanation: "Cantidad aproximada" },
          { english: "There's hardly any milk left.", spanish: "Casi no queda leche.", explanation: "Cantidad muy pequeña" }
        ],
        tips: [
          "💡 'Amount' + incontable, 'Number' + contable: 'the amount of water', 'the number of students'",
          "💡 'A few' es positivo (algunos), 'Few' es negativo (casi ninguno)",
          "💡 'Plenty of' implica más que suficiente"
        ],
        whenToUse: [
          'En reportes de negocios: "A significant number of employees attended"',
          'Al dar estimaciones: "We have approximately 500 clients"',
          'En presentaciones con datos: "A great deal of effort was required"',
          'Para expresar escasez o abundancia: "There\'s hardly any time left"'
        ],
        whenNotToUse: [
          '"A large amount of people" → usa "number": "A large number of people" (people = contable)',
          '"Less students" → usa "fewer": "Fewer students" (NO "less students")',
          '"Much options" → usa "many": "Many options" (NO "much options")'
        ]
      },
      objectives: ["Expresar cantidades precisas", "Usar cuantificadores avanzados", "Distinguir entre expresiones formales e informales"],
      grammarTheoryIds: ["b2-passive-advanced", "b2-conditionals-all"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l6t3_n1", word: "amount", translation: "cantidad (incontable)", type: "noun", definition: "how much of something", definitionEs: "cuánto de algo", example: "A large amount of money.", exampleEs: "Una gran cantidad de dinero.", related: [], difficulty: 1 },
          { id: "l6t3_n2", word: "number", translation: "número (contable)", type: "noun", definition: "how many of something", definitionEs: "cuántos de algo", example: "A large number of people.", exampleEs: "Un gran número de personas.", related: [], difficulty: 1 },
          { id: "l6t3_n3", word: "majority", translation: "mayoría", type: "noun", definition: "more than half", definitionEs: "más de la mitad", example: "The majority agreed.", exampleEs: "La mayoría estuvo de acuerdo.", related: [], difficulty: 1 },
          { id: "l6t3_n4", word: "minority", translation: "minoría", type: "noun", definition: "less than half", definitionEs: "menos de la mitad", example: "Only a minority disagreed.", exampleEs: "Solo una minoría estuvo en desacuerdo.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l6t3_v1", word: "estimate", translation: "estimar", type: "verb", definition: "to guess an approximate number", definitionEs: "adivinar un número aproximado", example: "We estimate about 1000 attendees.", exampleEs: "Estimamos alrededor de 1000 asistentes.", related: ["estimation"], difficulty: 2 },
          { id: "l6t3_v2", word: "exceed", translation: "exceder", type: "verb", definition: "to be more than", definitionEs: "ser más que", example: "Sales exceeded expectations.", exampleEs: "Las ventas excedieron las expectativas.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l6t3_a1", word: "numerous", translation: "numeroso", type: "adjective", definition: "many", definitionEs: "muchos", example: "There were numerous complaints.", exampleEs: "Hubo numerosas quejas.", related: [], difficulty: 2 },
          { id: "l6t3_a2", word: "significant", translation: "significativo", type: "adjective", definition: "large enough to be important", definitionEs: "lo suficientemente grande para ser importante", example: "A significant increase.", exampleEs: "Un aumento significativo.", related: [], difficulty: 2 },
          { id: "l6t3_a3", word: "substantial", translation: "sustancial", type: "adjective", definition: "large in amount", definitionEs: "grande en cantidad", example: "A substantial investment.", exampleEs: "Una inversión sustancial.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l6t3_e1", word: "a great deal of", translation: "una gran cantidad de", type: "expression", definition: "a lot of (formal, uncountable)", definitionEs: "mucho de (formal, incontable)", example: "A great deal of effort.", exampleEs: "Una gran cantidad de esfuerzo.", related: [], difficulty: 2 },
          { id: "l6t3_e2", word: "plenty of", translation: "mucho/suficiente", type: "expression", definition: "more than enough", definitionEs: "más que suficiente", example: "There's plenty of time.", exampleEs: "Hay tiempo suficiente.", related: [], difficulty: 1 },
          { id: "l6t3_e3", word: "hardly any", translation: "casi nada", type: "expression", definition: "very little or few", definitionEs: "muy poco", example: "There's hardly any water left.", exampleEs: "Casi no queda agua.", related: [], difficulty: 1 },
          { id: "l6t3_e4", word: "approximately / roughly / about", translation: "aproximadamente", type: "expression", definition: "not exact", definitionEs: "no exacto", example: "Approximately 100 people attended.", exampleEs: "Aproximadamente 100 personas asistieron.", related: [], difficulty: 1 },
          { id: "l6t3_e5", word: "a large/small proportion of", translation: "una gran/pequeña proporción de", type: "expression", definition: "part of a whole", definitionEs: "parte de un todo", example: "A large proportion of users prefer mobile.", exampleEs: "Una gran proporción de usuarios prefiere móvil.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t3_cm1",
          wrong: "A large amount of people attended.",
          correct: "A large number of people attended.",
          explanation: "'Amount' is for uncountables (money, water). 'Number' is for countables (people, cars).",
          explanationEs: "'Amount' es para incontables (money, water). 'Number' es para contables (people, cars).",
          category: "grammar"
        },
        {
          id: "l6t3_cm2",
          wrong: "I have few money left.",
          correct: "I have little money left.",
          explanation: "'Few' is for countables. 'Little' is for uncountables like 'money'.",
          explanationEs: "'Few' es para contables. 'Little' es para incontables como 'money'.",
          category: "grammar"
        },
        {
          id: "l6t3_cm3",
          wrong: "There are less students this year.",
          correct: "There are fewer students this year.",
          explanation: "'Fewer' is for countables (students). 'Less' is for uncountables (time, money).",
          explanationEs: "'Fewer' es para contables (students). 'Less' es para incontables (time, money).",
          category: "grammar"
        },
        {
          id: "l6t3_cm4",
          wrong: "Much people came to the event.",
          correct: "Many people came to the event.",
          explanation: "'Much' is for uncountables. 'Many' is for countables like 'people'.",
          explanationEs: "'Much' es para incontables. 'Many' es para contables como 'people'.",
          category: "grammar"
        },
        {
          id: "l6t3_cm5",
          wrong: "The majority of students is happy.",
          correct: "The majority of students are happy.",
          explanation: "'The majority of + plural noun' takes a plural verb: 'are', not 'is'.",
          explanationEs: "'The majority of + plural noun' toma verbo plural: 'are', no 'is'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con 'much', 'many', 'few', 'little', 'fewer' o 'less':",
          items: [
            { sentence: "How ___ people attended the meeting?", answer: "many", hint: "people = contable" },
            { sentence: "There's too ___ traffic today.", answer: "much", hint: "traffic = incontable" },
            { sentence: "We have ___ time than we thought.", answer: "less", hint: "time = incontable" },
            { sentence: "There are ___ options available now.", answer: "fewer", hint: "options = contable" },
            { sentence: "Very ___ students passed the exam.", answer: "few", hint: "students = contable, cantidad pequeña" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica: ¿Se usa con contables o incontables?",
          categories: [
            { name: "Solo Contables", items: ["many", "few", "a few", "several", "a number of", "fewer"] },
            { name: "Solo Incontables", items: ["much", "little", "a little", "an amount of", "less", "a great deal of"] },
            { name: "Ambos", items: ["some", "any", "a lot of", "plenty of", "most", "all"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Reescribe usando expresiones más formales:",
          items: [
            { original: "A lot of people came.", transformed: "A large number of people came." },
            { original: "We don't have much time.", transformed: "We have little time. / There's hardly any time." },
            { original: "Most workers agree.", transformed: "The majority of workers agree." },
            { original: "About 500 people attended.", transformed: "Approximately 500 people attended." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con expresiones de cantidad:",
          items: [
            { sentence: "There's ___ of food, so help yourself.", answer: "plenty", hint: "más que suficiente" },
            { sentence: "A great ___ of effort was required.", answer: "deal", hint: "a great DEAL of (incontable)" },
            { sentence: "A large ___ of employees are working remotely.", answer: "number/proportion", hint: "employees = contable" },
            { sentence: "There's ___ any coffee left.", answer: "hardly", hint: "casi nada" },
            { sentence: "The ___ of voters supported the change.", answer: "majority", hint: "más del 50%" }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentando resultados de una encuesta",
        dialogue: [
          { speaker: "Manager", text: "Let me share the results of our employee satisfaction survey.", translation: "Permítanme compartir los resultados de nuestra encuesta de satisfacción de empleados." },
          { speaker: "Manager", text: "The majority of employees - approximately 75% - said they enjoy their work.", translation: "La mayoría de los empleados - aproximadamente 75% - dijeron que disfrutan su trabajo." },
          { speaker: "Manager", text: "However, a significant number expressed concerns about work-life balance.", translation: "Sin embargo, un número significativo expresó preocupaciones sobre el equilibrio trabajo-vida." },
          { speaker: "Colleague", text: "How many people mentioned that specifically?", translation: "¿Cuántas personas mencionaron eso específicamente?" },
          { speaker: "Manager", text: "Roughly 40% mentioned it. That's a substantial proportion.", translation: "Aproximadamente el 40% lo mencionó. Esa es una proporción sustancial." },
          { speaker: "Colleague", text: "What about salary satisfaction?", translation: "¿Qué hay de la satisfacción salarial?" },
          { speaker: "Manager", text: "There was a great deal of variation here. A small minority - fewer than 10% - said they were very dissatisfied.", translation: "Hubo una gran variación aquí. Una pequeña minoría - menos del 10% - dijo estar muy insatisfecha." },
          { speaker: "Manager", text: "But plenty of employees said they felt fairly compensated.", translation: "Pero muchos empleados dijeron sentirse justamente compensados." },
          { speaker: "Colleague", text: "Are there hardly any who want to leave?", translation: "¿Casi no hay quienes quieran irse?" },
          { speaker: "Manager", text: "Correct. Only a few indicated they were looking for other opportunities.", translation: "Correcto. Solo unos pocos indicaron que estaban buscando otras oportunidades." }
        ],
        keyPhrases: [
          "The majority of...",
          "approximately 75%",
          "a significant number",
          "roughly 40%",
          "a substantial proportion",
          "a great deal of variation",
          "a small minority",
          "fewer than 10%",
          "plenty of...",
          "hardly any",
          "only a few"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de cuantificadores",
        sounds: [
          { sound: "/ə/", word: "approximately", tip: "La schwa /ə/ es muy común en inglés; en español tendemos a pronunciar todas las vocales. 'Approximately' tiene schwa en la primera y última sílaba" },
          { sound: "/ˈnjuː/", word: "numerous", tip: "Acento en primera sílaba; evita acentuar 'mer' como en español" },
          { sound: "/sɪɡˈnɪfɪkənt/", word: "significant", tip: "Acento en segunda sílaba: sig-NI-fi-cant" }
        ],
        minimalPairs: [
          { word1: "amount", word2: "a mount", explanation: "En 'amount' no hay pausa entre 'a' y 'mount'; es una sola palabra" },
          { word1: "majority", word2: "minority", explanation: "Ambas tienen acento en la segunda sílaba; diferencia en la vocal: /əˈ/ vs /aɪ/" }
        ],
        intonation: [
          { pattern: "Rise for approximations", example: "Approximately fifty↗", tip: "Al dar cifras aproximadas, el tono puede subir ligeramente" }
        ],
        commonErrors: [
          { word: "approximately", wrong: "/a-PROX-i-mat-ly/", right: "/əˈprɒksɪmətli/", note: "5 sílabas, acento en la segunda" },
          { word: "numerous", wrong: "/nu-ME-rus/", right: "/ˈnjuːmərəs/", note: "Acento en primera sílaba" },
          { word: "significant", wrong: "/SIG-ni-fi-cant/", right: "/sɪɡˈnɪfɪkənt/", note: "Acento en segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "Precisión vs. Aproximación en culturas anglosajonas",
        titleEs: "Precisión vs. Aproximación en culturas anglosajonas",
        content: "En contextos de negocios anglosajones, ser preciso con números es valorado, pero hay una preferencia por no exagerar. Usar 'approximately', 'roughly', o 'about' muestra honestidad cuando no tienes datos exactos. Sin embargo, en presentaciones formales, los números específicos dan credibilidad. 'The majority' implica más del 50% pero suena más profesional que 'most'. En informes, expresiones como 'a significant number' o 'a substantial proportion' son preferidas sobre 'a lot' porque suenan más precisas.",
        contentEs: "En contextos de negocios anglosajones, ser preciso con números es valorado, pero hay preferencia por no exagerar. Usar 'approximately', 'roughly' o 'about' muestra honestidad cuando no tienes datos exactos. En presentaciones formales, los números específicos dan credibilidad. 'The majority' suena más profesional que 'most'. Expresiones como 'a significant number' son preferidas sobre 'a lot'.",
        region: "General",
        examples: [
          "'Ballpark figure' - número aproximado (informal)",
          "'Give or take' - más o menos",
          "'In the region of' - alrededor de (formal)",
          "'Upwards of 100' - 100 o más",
          "'A handful of' - muy pocos (3-5)"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Amount' se usa con:",
          questionEs: "'Amount' se usa con:",
          options: ["contables", "incontables", "ambos", "ninguno"],
          correctAnswer: 1,
          explanation: "'Amount' es para incontables: 'amount of money'. Para contables usa 'number'.",
          explanationEs: "'Amount' es para incontables: 'amount of money'. Para contables usa 'number'."
        },
        {
          question: "'There are ___ students this year' (menos):",
          questionEs: "'There are ___ students this year' (menos):",
          options: ["less", "fewer", "little", "few"],
          correctAnswer: 1,
          explanation: "'Fewer' es para contables. 'Less' es para incontables.",
          explanationEs: "'Fewer' es para contables. 'Less' es para incontables."
        },
        {
          question: "'A few' vs 'few' - la diferencia es:",
          questionEs: "'A few' vs 'few' - la diferencia es:",
          options: ["ninguna", "'a few' es positivo, 'few' es negativo", "uno es formal", "'few' es más"],
          correctAnswer: 1,
          explanation: "'A few' = algunos (positivo). 'Few' = casi ninguno (negativo).",
          explanationEs: "'A few' = algunos (positivo). 'Few' = casi ninguno (negativo)."
        },
        {
          question: "'A great deal of' se usa con:",
          questionEs: "'A great deal of' se usa con:",
          options: ["contables", "incontables", "ambos", "números"],
          correctAnswer: 1,
          explanation: "'A great deal of' es para incontables: 'a great deal of effort/time/money'.",
          explanationEs: "'A great deal of' es para incontables: 'a great deal of effort/time/money'."
        },
        {
          question: "'The majority of students ___':",
          questionEs: "'The majority of students ___':",
          options: ["is", "are", "has", "have been"],
          correctAnswer: 1,
          explanation: "'The majority of + plural noun' toma verbo plural.",
          explanationEs: "'The majority of + plural noun' toma verbo plural."
        }
      ],
      guidedProduction: [
        {
          task: "Describir estadísticas",
          prompt: "Escribe un párrafo describiendo estadísticas de uso de redes sociales.",
          sampleAnswer: "A recent survey revealed interesting patterns in social media usage. The majority of respondents - approximately 85% - use social media daily. A significant number spend more than two hours per day on these platforms. Fewer than 10% reported using social media rarely. There was a great deal of variation by age group: a large proportion of young adults use Instagram, while a substantial number of older users prefer Facebook. Interestingly, only a few respondents had no social media accounts at all.",
          hints: ["Usa 'the majority of', 'approximately'", "Incluye 'a significant number', 'fewer than'", "Usa 'a great deal of', 'a large proportion'"]
        },
        {
          task: "Comparar cantidades",
          prompt: "Compara dos ciudades en términos de población, tráfico, y espacios verdes.",
          sampleAnswer: "City A has a much larger population than City B - approximately 5 million compared to 500,000. However, City A has significantly more traffic problems. A great deal of time is wasted in commuting. In contrast, City B has far fewer cars on the road. When it comes to green spaces, City B has a larger proportion of parks relative to its size. City A has hardly any parks in the downtown area, while City B has plenty of public gardens. The majority of City A residents complain about pollution, whereas only a few in City B mention this issue.",
          hints: ["Usa 'much larger', 'significantly more'", "Incluye 'a great deal of', 'far fewer'", "Contrasta con 'hardly any' vs 'plenty of'"]
        },
        {
          task: "Informe de ventas",
          prompt: "Escribe un breve informe de ventas usando expresiones de cantidad.",
          sampleAnswer: "Q3 Sales Report Summary:\n\nOverall, the majority of our products showed growth. Sales increased by approximately 15% compared to last quarter. A significant number of new customers were acquired - roughly 500. However, there were fewer repeat purchases than expected. A substantial proportion of sales - about 60% - came from our online store. We received a great deal of positive feedback, though a small minority of customers reported issues with delivery. There is plenty of room for improvement in customer service. Only a few products underperformed.",
          hints: ["Incluye porcentajes con 'approximately'", "Usa 'a significant number', 'a substantial proportion'", "Menciona 'a great deal of', 'a small minority'"]
        },
        {
          task: "Encuesta de clase",
          prompt: "Reporta los resultados de una encuesta ficticia sobre hábitos de estudio.",
          sampleAnswer: "Study Habits Survey Results:\n\nThe majority of students in our class - approximately 80% - study at least two hours per day. A large number prefer studying in the evening, while fewer than 20% study in the morning. There was a great deal of variation in study locations: a significant proportion study at home, but plenty of students use the library. Hardly any students reported studying with background music. Most students said they need little help with math, but a substantial number struggle with writing. Only a few students said they never need to study.",
          hints: ["Reporta con 'the majority of', 'approximately'", "Contrasta grupos: 'a large number' vs 'fewer than'", "Usa 'hardly any', 'a substantial number'"]
        }
      ],
      connectionToPrevious: "En la lección anterior sobre voz pasiva, viste expresiones como 'A large number of products are manufactured'. Ahora dominarás todas las expresiones de cantidad.",
      connectionToNext: "En la siguiente lección sobre negociaciones, usarás expresiones de cantidad: 'We can offer a significant discount...'"
    },
    {
      id: 4,
      title: "Business Negotiations",
      titleEs: "Negociaciones de Negocios",
      introduction: {
        title: "🤝 Negociaciones de Negocios",
        explanation: "Negociar efectivamente requiere un equilibrio entre ser firme y ser diplomático. Aprenderás expresiones para proponer, aceptar, rechazar y llegar a acuerdos.",
        keyPoints: [
          "Proponer: 'We'd like to propose...', 'How about if we...?'",
          "Aceptar: 'That seems reasonable', 'We can agree to that'",
          "Rechazar diplomáticamente: 'I'm afraid that's not possible', 'We can't accept those terms'",
          "Comprometer: 'We could meet you halfway', 'What if we...?'",
          "Cerrar: 'Let's shake on it', 'Do we have a deal?'"
        ],
        examples: [
          { english: "We'd like to propose a 10% discount.", spanish: "Nos gustaría proponer un 10% de descuento.", explanation: "Haciendo una propuesta" },
          { english: "I'm afraid we can't go lower than that.", spanish: "Me temo que no podemos ir más bajo que eso.", explanation: "Rechazando educadamente" },
          { english: "What if we extend the warranty instead?", spanish: "¿Y si extendemos la garantía en su lugar?", explanation: "Ofreciendo alternativa" }
        ],
        tips: [
          "💡 Nunca digas 'no' directamente; usa 'I'm afraid...', 'Unfortunately...'",
          "💡 'We' suena más colaborativo que 'I' en negociaciones",
          "💡 'Let me think about it' te da tiempo sin decir no"
        ],
        whenToUse: [
          'En negociaciones de trabajo: "I\'d like to propose a flexible schedule"',
          'En reuniones de equipo: "What if we extended the deadline?"',
          'Al responder a ofertas: "I\'m afraid we can\'t accept those terms"',
          'Para cerrar acuerdos: "So we\'re agreed on the price?"'
        ],
        whenNotToUse: [
          'Evita "No" directo → usa "I\'m afraid that won\'t work" (NO "No, we won\'t")',
          'En peticiones casuales entre amigos → sé directo: "Can you help me?" (NO "I\'d like to propose that you help me")',
          'No uses lenguaje de propuesta formal para rechazos simples: "Thanks but I\'ll pass" (NO "I regret to inform you I cannot accept")'
        ]
      },
      objectives: ["Hacer y responder a propuestas", "Negociar términos", "Cerrar acuerdos"],
      grammarTheoryIds: ["b2-conditionals-all"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l6t4_n1", word: "negotiation", translation: "negociación", type: "noun", definition: "discussion to reach agreement", definitionEs: "discusión para llegar a un acuerdo", example: "The negotiations are ongoing.", exampleEs: "Las negociaciones están en curso.", related: ["negotiate"], difficulty: 1 },
          { id: "l6t4_n2", word: "proposal", translation: "propuesta", type: "noun", definition: "a suggestion or offer", definitionEs: "una sugerencia u oferta", example: "We've reviewed your proposal.", exampleEs: "Hemos revisado su propuesta.", related: ["propose"], difficulty: 1 },
          { id: "l6t4_n3", word: "agreement", translation: "acuerdo", type: "noun", definition: "a deal between parties", definitionEs: "un trato entre partes", example: "We reached an agreement.", exampleEs: "Llegamos a un acuerdo.", related: ["agree"], difficulty: 1 },
          { id: "l6t4_n4", word: "compromise", translation: "compromiso/acuerdo mutuo", type: "noun", definition: "a middle ground", definitionEs: "un punto medio", example: "Let's find a compromise.", exampleEs: "Encontremos un compromiso.", related: [], difficulty: 2 },
          { id: "l6t4_n5", word: "terms", translation: "términos", type: "noun", definition: "conditions of an agreement", definitionEs: "condiciones de un acuerdo", example: "What are the terms?", exampleEs: "¿Cuáles son los términos?", related: [], difficulty: 1 },
          { id: "l6t4_n6", word: "deadline", translation: "fecha límite", type: "noun", definition: "the latest time something can be done", definitionEs: "el tiempo más tarde para hacer algo", example: "What's the deadline?", exampleEs: "¿Cuál es la fecha límite?", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l6t4_v1", word: "negotiate", translation: "negociar", type: "verb", definition: "to discuss to reach agreement", definitionEs: "discutir para llegar a un acuerdo", example: "We need to negotiate the price.", exampleEs: "Necesitamos negociar el precio.", related: ["negotiation"], difficulty: 1 },
          { id: "l6t4_v2", word: "propose", translation: "proponer", type: "verb", definition: "to suggest something", definitionEs: "sugerir algo", example: "I'd like to propose an alternative.", exampleEs: "Me gustaría proponer una alternativa.", related: ["proposal"], difficulty: 1 },
          { id: "l6t4_v3", word: "counter", translation: "contraofertar", type: "verb", definition: "to respond with a different offer", definitionEs: "responder con una oferta diferente", example: "They countered with a lower price.", exampleEs: "Ellos contraofertaron con un precio más bajo.", related: ["counteroffer"], difficulty: 2 },
          { id: "l6t4_v4", word: "concede", translation: "conceder", type: "verb", definition: "to give up a point", definitionEs: "ceder un punto", example: "We can concede on delivery time.", exampleEs: "Podemos conceder en el tiempo de entrega.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l6t4_a1", word: "reasonable", translation: "razonable", type: "adjective", definition: "fair and sensible", definitionEs: "justo y sensato", example: "That seems reasonable.", exampleEs: "Eso parece razonable.", related: [], difficulty: 1 },
          { id: "l6t4_a2", word: "flexible", translation: "flexible", type: "adjective", definition: "willing to change", definitionEs: "dispuesto a cambiar", example: "We can be flexible on dates.", exampleEs: "Podemos ser flexibles con las fechas.", related: [], difficulty: 1 },
          { id: "l6t4_a3", word: "firm", translation: "firme", type: "adjective", definition: "not willing to change", definitionEs: "no dispuesto a cambiar", example: "I'm firm on the price.", exampleEs: "Estoy firme en el precio.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l6t4_e1", word: "I'm afraid that's not possible", translation: "Me temo que eso no es posible", type: "expression", definition: "polite rejection", definitionEs: "rechazo educado", example: "I'm afraid that's not possible at this time.", exampleEs: "Me temo que eso no es posible en este momento.", related: [], difficulty: 1 },
          { id: "l6t4_e2", word: "We could meet you halfway", translation: "Podríamos encontrarnos a mitad de camino", type: "expression", definition: "offering compromise", definitionEs: "ofreciendo compromiso", example: "We could meet you halfway on price.", exampleEs: "Podríamos encontrarnos a mitad de camino en el precio.", related: [], difficulty: 2 },
          { id: "l6t4_e3", word: "Let me get back to you on that", translation: "Déjame responderte sobre eso", type: "expression", definition: "buying time", definitionEs: "ganando tiempo", example: "Let me get back to you on that tomorrow.", exampleEs: "Déjame responderte sobre eso mañana.", related: [], difficulty: 1 },
          { id: "l6t4_e4", word: "Do we have a deal?", translation: "¿Tenemos un trato?", type: "expression", definition: "closing negotiation", definitionEs: "cerrando negociación", example: "So, do we have a deal?", exampleEs: "Entonces, ¿tenemos un trato?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t4_cm1",
          wrong: "I don't agree with that at all.",
          correct: "I'm afraid I can't agree to that. / That's not something we can accept.",
          explanation: "In negotiations, direct rejection is aggressive. Use soft phrases: 'I'm afraid...', 'Unfortunately...'.",
          explanationEs: "En negociaciones, el rechazo directo es agresivo. Usa frases suaves: 'I'm afraid...', 'Unfortunately...'.",
          category: "usage"
        },
        {
          id: "l6t4_cm2",
          wrong: "No, that price is too high.",
          correct: "I'm afraid that price is a bit beyond our budget. Could you be more flexible?",
          explanation: "Reject politely and offer an alternative or ask for flexibility.",
          explanationEs: "Rechaza educadamente y ofrece una alternativa o pregunta por flexibilidad.",
          category: "usage"
        },
        {
          id: "l6t4_cm3",
          wrong: "I want a 20% discount.",
          correct: "We'd like to propose a 20% discount. / Would it be possible to discuss a discount?",
          explanation: "'I want' sounds demanding. Use 'We'd like to propose...' or polite questions.",
          explanationEs: "'I want' suena demandante. Usa 'We'd like to propose...' o preguntas educadas.",
          category: "usage"
        },
        {
          id: "l6t4_cm4",
          wrong: "That's my final offer, take it or leave it.",
          correct: "This is our best offer at this time. We hope you'll consider it.",
          explanation: "Ultimatums damage relationships. Keep a professional tone even in firm positions.",
          explanationEs: "Ultimátums dañan relaciones. Mantén el tono profesional incluso en posiciones firmes.",
          category: "usage"
        },
        {
          id: "l6t4_cm5",
          wrong: "Ok, deal.",
          correct: "That sounds acceptable. Let's confirm the details and put it in writing.",
          explanation: "When closing, confirm the details and suggest documenting the agreement.",
          explanationEs: "Al cerrar, confirma los detalles y sugiere documentar el acuerdo.",
          category: "usage"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las frases de negociación:",
          items: [
            { sentence: "We'd ___ to propose a different arrangement.", answer: "like", hint: "We'd LIKE to propose..." },
            { sentence: "I'm ___ that's not something we can accept.", answer: "afraid", hint: "rechazo educado" },
            { sentence: "Could you be more ___ on the delivery date?", answer: "flexible", hint: "pedir flexibilidad" },
            { sentence: "Let me ___ back to you on that.", answer: "get", hint: "ganar tiempo" },
            { sentence: "We could ___ you halfway on the price.", answer: "meet", hint: "ofrecer compromiso" }
          ]
        },
        {
          type: "transformation",
          instruction: "Haz estas frases más diplomáticas:",
          items: [
            { original: "No, we won't accept that.", transformed: "I'm afraid that's not something we can accept at this time." },
            { original: "I want a lower price.", transformed: "We were hoping you might be able to offer a more competitive price." },
            { original: "Your deadline is impossible.", transformed: "The proposed deadline would be challenging for us. Could we discuss an alternative?" },
            { original: "That's a bad deal for us.", transformed: "We feel the terms may not fully meet our needs. Perhaps we could explore other options?" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica las expresiones por función:",
          categories: [
            { name: "Hacer propuestas", items: ["We'd like to propose...", "How about if we...?", "What if we offered...?", "Would you consider...?"] },
            { name: "Rechazar educadamente", items: ["I'm afraid that's not possible", "Unfortunately, we can't accept...", "That's a bit beyond what we had in mind"] },
            { name: "Llegar a compromiso", items: ["We could meet you halfway", "What if we split the difference?", "Perhaps we could find a middle ground"] },
            { name: "Cerrar el trato", items: ["Do we have a deal?", "Let's shake on it", "I think we have an agreement"] }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa el diálogo de negociación:",
          items: [
            { sentence: "A: We'd like a 25% discount. B: I'm ___ we can't go that high.", answer: "afraid", hint: "rechazo suave" },
            { sentence: "B: But we ___ offer 15%. A: That's a bit less than we hoped.", answer: "could/can", hint: "contrapropuesta" },
            { sentence: "A: ___ if we met in the middle at 20%?", answer: "What", hint: "WHAT if..." },
            { sentence: "B: That ___ reasonable. Let me just confirm with my manager.", answer: "sounds/seems", hint: "aceptación tentativa" },
            { sentence: "B: Yes, we can do 20%. Do we have a ___?", answer: "deal", hint: "cerrar acuerdo" }
          ]
        }
      ],
      modelDialogue: {
        title: "Negociando un contrato de servicios",
        dialogue: [
          { speaker: "Client", text: "Thank you for meeting with us. We've reviewed your proposal, and while we're interested, we have some concerns about the price.", translation: "Gracias por reunirse con nosotros. Hemos revisado su propuesta, y aunque estamos interesados, tenemos algunas preocupaciones sobre el precio." },
          { speaker: "Vendor", text: "I understand. We'd be happy to discuss the terms. What did you have in mind?", translation: "Entiendo. Estaríamos encantados de discutir los términos. ¿Qué tenían en mente?" },
          { speaker: "Client", text: "We were hoping for a 25% discount on the annual contract.", translation: "Esperábamos un 25% de descuento en el contrato anual." },
          { speaker: "Vendor", text: "I'm afraid 25% would be difficult for us. However, we could offer 15% if you commit to a two-year contract.", translation: "Me temo que el 25% sería difícil para nosotros. Sin embargo, podríamos ofrecer 15% si se comprometen a un contrato de dos años." },
          { speaker: "Client", text: "Two years is a long commitment. What if we met halfway at 20% for one year?", translation: "Dos años es un compromiso largo. ¿Y si nos encontramos a mitad de camino en 20% por un año?" },
          { speaker: "Vendor", text: "Let me think about that. Could we perhaps do 18% for 18 months? That way, both sides give a little.", translation: "Déjeme pensarlo. ¿Podríamos tal vez hacer 18% por 18 meses? De esa manera, ambas partes ceden un poco." },
          { speaker: "Client", text: "That sounds reasonable. We could agree to that.", translation: "Eso suena razonable. Podríamos aceptar eso." },
          { speaker: "Vendor", text: "Excellent. And regarding the payment terms, would quarterly payments work for you?", translation: "Excelente. Y respecto a los términos de pago, ¿les funcionarían pagos trimestrales?" },
          { speaker: "Client", text: "We'd prefer monthly, but quarterly could work if we get a small additional discount.", translation: "Preferiríamos mensual, pero trimestral podría funcionar si obtenemos un pequeño descuento adicional." },
          { speaker: "Vendor", text: "How about an extra 2% for quarterly payment? So 20% total discount.", translation: "¿Qué tal un 2% extra por pago trimestral? Así 20% de descuento total." },
          { speaker: "Client", text: "That works for us. Do we have a deal?", translation: "Eso nos funciona. ¿Tenemos un trato?" },
          { speaker: "Vendor", text: "Yes, I believe we do. Let's put it in writing.", translation: "Sí, creo que sí. Pongámoslo por escrito." }
        ],
        keyPhrases: [
          "We've reviewed your proposal",
          "We were hoping for...",
          "I'm afraid... would be difficult",
          "However, we could offer...",
          "What if we met halfway?",
          "Let me think about that",
          "Could we perhaps...?",
          "Both sides give a little",
          "That sounds reasonable",
          "Do we have a deal?",
          "Let's put it in writing"
        ]
      },
      pronunciationFocus: {
        title: "Entonación en negociaciones",
        sounds: [
          { sound: "Downward intonation ↘", examples: ["I'm afraid that's not possible ↘", "This is our final offer ↘"], tip: "Baja para declaraciones firmes" },
          { sound: "Upward intonation ↗", examples: ["Could you consider...? ↗", "What if we...? ↗"], tip: "Sube para preguntas y propuestas" },
          { sound: "Level intonation →", examples: ["Let me think about that →", "I see your point →"], tip: "Nivel para ganar tiempo" }
        ],
        commonErrors: [
          { word: "negotiate", wrong: "/ne-GO-ti-at/", right: "/nɪˈɡəʊʃieɪt/", note: "La 't' suena como 'sh'" },
          { word: "compromise", wrong: "/com-pro-MISE/", right: "/ˈkɒmprəmaɪz/", note: "Acento en primera sílaba" },
          { word: "proposal", wrong: "/pro-PO-sal/", right: "/prəˈpəʊzl/", note: "Acento en segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "Estilos de negociación en diferentes culturas",
        content: "En EE.UU. y UK, las negociaciones tienden a ser directas pero educadas. Se valora llegar al punto rápidamente, pero siempre con cortesía. 'Win-win' es el ideal. Nunca digas 'no' directamente - usa 'I'm afraid...', 'Unfortunately...', 'That might be challenging'. El silencio puede ser incómodo; los anglosajones tienden a llenar los silencios. Estrechar las manos al cerrar un trato es importante. 'Let's put it in writing' es estándar - los acuerdos verbales no son suficientes en negocios formales.",
        examples: [
          "'Win-win situation' - ambas partes ganan",
          "'Bargaining chip' - algo que ofrecer a cambio",
          "'Deal-breaker' - algo que haría imposible el acuerdo",
          "'Bottom line' - el punto mínimo aceptable",
          "'Put it in writing' - documentar el acuerdo"
        ]
      },
      consolidationQuiz: [
        {
          question: "Para rechazar educadamente, dices:",
          questionEs: "Para rechazar educadamente, dices:",
          options: ["No, I can't", "I'm afraid that's not possible", "That's a bad idea", "Never"],
          correctAnswer: 1,
          explanation: "'I'm afraid...' suaviza el rechazo y mantiene el profesionalismo.",
          explanationEs: "'I'm afraid...' suaviza el rechazo y mantiene el profesionalismo."
        },
        {
          question: "'We could meet you halfway' significa:",
          questionEs: "'We could meet you halfway' significa:",
          options: ["Rechazar", "Terminar la negociación", "Ofrecer un compromiso", "Pedir más tiempo"],
          correctAnswer: 2,
          explanation: "'Meet halfway' = encontrar un punto medio, llegar a un compromiso.",
          explanationEs: "'Meet halfway' = encontrar un punto medio, llegar a un compromiso."
        },
        {
          question: "'Let me get back to you on that' se usa para:",
          questionEs: "'Let me get back to you on that' se usa para:",
          options: ["Aceptar inmediatamente", "Rechazar definitivamente", "Ganar tiempo para pensar", "Cerrar el trato"],
          correctAnswer: 2,
          explanation: "Esta frase te da tiempo para considerar la propuesta sin decir sí o no.",
          explanationEs: "Esta frase te da tiempo para considerar la propuesta sin decir sí o no."
        },
        {
          question: "¿Cuál es más diplomática?",
          questionEs: "¿Cuál es más diplomática?",
          options: ["I want a discount", "Give me a discount", "We'd like to propose a discount", "Discount now"],
          correctAnswer: 2,
          explanation: "'We'd like to propose...' es formal y colaborativo.",
          explanationEs: "'We'd like to propose...' es formal y colaborativo."
        },
        {
          question: "'Do we have a deal?' se usa para:",
          questionEs: "'Do we have a deal?' se usa para:",
          options: ["Empezar la negociación", "Rechazar una oferta", "Confirmar el acuerdo", "Pedir descuento"],
          correctAnswer: 2,
          explanation: "Esta frase confirma que ambas partes están de acuerdo.",
          explanationEs: "Esta frase confirma que ambas partes están de acuerdo."
        }
      ],
      guidedProduction: [
        {
          task: "Negociar un precio",
          prompt: "Escribe un diálogo negociando el precio de un servicio. El proveedor pide $10,000, pero tu presupuesto es $8,000.",
          sampleAnswer: "Client: Thank you for the proposal. We're very interested in your services, but the price is a bit beyond our budget. We were hoping for something closer to $8,000.\n\nVendor: I understand your position. $8,000 would be difficult for us given the scope of work. However, we could perhaps meet you halfway at $9,000.\n\nClient: That's still a bit high for us. What if we reduced the scope slightly to bring it to $8,500?\n\nVendor: Let me see what we can do. If we remove the optional add-ons, we could offer $8,500. Would that work?\n\nClient: That sounds reasonable. Do we have a deal?\n\nVendor: Yes, I believe we do. Let's put it in writing.",
          hints: ["Empieza con algo positivo: 'We're very interested'", "Usa 'I'm afraid' o 'unfortunately' para rechazos", "Propón alternativas: 'What if we...'"]
        },
        {
          task: "Contrapropuesta",
          prompt: "Tu cliente quiere un plazo de 2 semanas, pero necesitas 4. Escribe cómo negociarías.",
          sampleAnswer: "Client: We need the project completed in two weeks.\n\nMe: I appreciate the urgency. However, I'm afraid two weeks wouldn't allow us to deliver the quality you deserve. We'd need at least four weeks to ensure everything is done properly.\n\nClient: Four weeks is too long. We have a deadline to meet.\n\nMe: I understand your concern. What if we delivered the first phase in two weeks, with the complete project finished in three weeks? That way, you'd have something to work with while we finalize the rest.\n\nClient: That could work. But we'd need the critical features in that first phase.\n\nMe: Absolutely. Let's agree on which features are most critical, and we'll prioritize those. Does that sound acceptable?\n\nClient: Yes, I think we can make that work.",
          hints: ["Explica por qué tu contrapropuesta es razonable", "Ofrece una solución intermedia", "Usa preguntas para involucrar al cliente"]
        },
        {
          task: "Manejar un ultimátum",
          prompt: "El cliente dice: 'This is our final offer. Take it or leave it.' Responde diplomáticamente.",
          sampleAnswer: "I appreciate your directness, and I understand you've made your position clear. This is an important decision for both of us, so I'd like to make sure we explore all options before finalizing.\n\nCould I ask what flexibility there might be in other areas? For example, if the price is firm, perhaps we could discuss the payment terms or the delivery schedule? Sometimes finding the right balance in other aspects can help us reach an agreement that works for everyone.\n\nI'm committed to finding a solution that works for both of us. Would you be open to discussing these alternatives?",
          hints: ["No reacciones emocionalmente", "Busca flexibilidad en otras áreas", "Muestra compromiso con encontrar una solución"]
        },
        {
          task: "Cerrar una negociación",
          prompt: "Han llegado a un acuerdo verbal. Escribe cómo cerrarías formalmente la negociación.",
          sampleAnswer: "So, let me summarize what we've agreed on: we'll provide the full service package at $9,500, with delivery in three weeks, and payment in two installments - 50% upfront and 50% upon completion.\n\nDoes that accurately reflect our agreement? [Client confirms]\n\nExcellent. I believe we have a deal. Thank you for your flexibility in working with us on this.\n\nI'll have our legal team draft the contract with these terms and send it to you by tomorrow. Please review it and let me know if there are any questions.\n\nI'm looking forward to a successful partnership. Shall we shake on it?",
          hints: ["Resume todos los puntos acordados", "Confirma que ambos están de acuerdo", "Menciona los próximos pasos (contrato)", "Termina positivamente"]
        }
      ],
      connectionToPrevious: "En la lección anterior sobre cantidades, viste expresiones como 'a significant discount'. Ahora las usarás en contexto de negociaciones reales.",
      connectionToNext: "En la siguiente lección sobre cláusulas relativas, aprenderás estructuras útiles en negociaciones: 'The price which we discussed...'"
    },
    {
      id: 5,
      title: "Relative Clauses",
      titleEs: "Cláusulas Relativas",
      introduction: {
        title: "🔗 Cláusulas Relativas",
        explanation: "Las cláusulas relativas nos permiten añadir información sobre personas, cosas y lugares sin crear oraciones separadas. Hacen el lenguaje más fluido.",
        keyPoints: [
          "Who/that: para personas - 'The woman who called...'",
          "Which/that: para cosas - 'The book which I read...'",
          "Where: para lugares - 'The restaurant where we met...'",
          "Whose: para posesión - 'The man whose car was stolen...'",
          "When: para tiempo - 'The day when we arrived...'"
        ],
        examples: [
          { english: "The colleague who helped me is very kind.", spanish: "El colega que me ayudó es muy amable.", explanation: "Defining relative clause" },
          { english: "My laptop, which I bought last year, broke.", spanish: "Mi laptop, la cual compré el año pasado, se rompió.", explanation: "Non-defining clause" },
          { english: "The hotel where we stayed was amazing.", spanish: "El hotel donde nos quedamos fue increíble.", explanation: "Clause de lugar" }
        ],
        tips: [
          "💡 'That' puede reemplazar 'who/which' en cláusulas definitorias pero NO después de coma",
          "💡 Se pueden omitir 'who/which/that' si son objeto: 'The movie (that) I saw'",
          "💡 Cláusulas entre comas añaden info extra; sin comas definen qué persona/cosa"
        ],
        whenToUse: [
          'Para identificar personas/cosas: "The person who called left a message"',
          'Para añadir información extra: "My boss, who is from London, travels often"',
          'En descripciones formales: "The report which was submitted yesterday"',
          'Cuando el relativo es objeto (se puede omitir): "The project (that) we discussed"'
        ],
        whenNotToUse: [
          '"That" después de coma → usa "who/which": "My sister, who lives abroad" (NO "My sister, that lives abroad")',
          'No uses "what" para personas/cosas → "The thing that/which I need" (NO "The thing what I need")',
          'Evita doble relativo: "The man who I met" (NO "The man who I met him")'
        ]
      },
      objectives: ["Usar pronombres relativos", "Distinguir cláusulas definitorias y no definitorias", "Combinar oraciones con cláusulas relativas"],
      grammarTheoryIds: ["b1-relative-clauses", "b1-defining-vs-nondefining-relative"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l6t5_n1", word: "clause", translation: "cláusula", type: "noun", definition: "a group of words with subject and verb", definitionEs: "un grupo de palabras con sujeto y verbo", example: "This is a relative clause.", exampleEs: "Esta es una cláusula relativa.", related: [], difficulty: 2 },
          { id: "l6t5_n2", word: "pronoun", translation: "pronombre", type: "noun", definition: "a word that replaces a noun", definitionEs: "una palabra que reemplaza un sustantivo", example: "'Who' is a relative pronoun.", exampleEs: "'Quien' es un pronombre relativo.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l6t5_v1", word: "define", translation: "definir", type: "verb", definition: "to give the meaning", definitionEs: "dar el significado", example: "The clause defines which person.", exampleEs: "La cláusula define qué persona.", related: ["definition"], difficulty: 1 },
          { id: "l6t5_v2", word: "combine", translation: "combinar", type: "verb", definition: "to join together", definitionEs: "unir", example: "Combine these two sentences.", exampleEs: "Combina estas dos oraciones.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l6t5_a1", word: "defining", translation: "definitorio", type: "adjective", definition: "essential information", definitionEs: "información esencial", example: "This is a defining clause.", exampleEs: "Esta es una cláusula definitoria.", related: [], difficulty: 2 },
          { id: "l6t5_a2", word: "non-defining", translation: "no definitorio", type: "adjective", definition: "extra information", definitionEs: "información extra", example: "This is non-defining.", exampleEs: "Esta es no definitoria.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l6t5_e1", word: "The person who...", translation: "La persona que...", type: "expression", definition: "introducing info about a person", definitionEs: "introduciendo info sobre una persona", example: "The person who called left a message.", exampleEs: "La persona que llamó dejó un mensaje.", related: [], difficulty: 1 },
          { id: "l6t5_e2", word: "The thing which...", translation: "La cosa que...", type: "expression", definition: "introducing info about a thing", definitionEs: "introduciendo info sobre una cosa", example: "The thing which surprised me was...", exampleEs: "Lo que me sorprendió fue...", related: [], difficulty: 1 },
          { id: "l6t5_e3", word: "The place where...", translation: "El lugar donde...", type: "expression", definition: "introducing info about a place", definitionEs: "introduciendo info sobre un lugar", example: "The place where I grew up...", exampleEs: "El lugar donde crecí...", related: [], difficulty: 1 },
          { id: "l6t5_e4", word: "The reason why...", translation: "La razón por la cual...", type: "expression", definition: "explaining a reason", definitionEs: "explicando una razón", example: "The reason why I'm calling...", exampleEs: "La razón por la cual llamo...", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t5_cm1",
          wrong: "The man which called is my boss.",
          correct: "The man who called is my boss.",
          explanation: "For people use 'who' (or 'that'), NOT 'which'. 'Which' is only for things.",
          explanationEs: "Para personas usa 'who' (o 'that'), NO 'which'. 'Which' es solo para cosas.",
          category: "grammar"
        },
        {
          id: "l6t5_cm2",
          wrong: "The book who I read was interesting.",
          correct: "The book which/that I read was interesting.",
          explanation: "For things use 'which' or 'that', NOT 'who'. 'Who' is only for people.",
          explanationEs: "Para cosas usa 'which' o 'that', NO 'who'. 'Who' es solo para personas.",
          category: "grammar"
        },
        {
          id: "l6t5_cm3",
          wrong: "My sister, that lives in Paris, is a doctor.",
          correct: "My sister, who lives in Paris, is a doctor.",
          explanation: "In non-defining clauses (with commas), don't use 'that'. Use 'who' for people.",
          explanationEs: "En cláusulas NO definitorias (con comas), no uses 'that'. Usa 'who' para personas.",
          category: "grammar"
        },
        {
          id: "l6t5_cm4",
          wrong: "The hotel where we stayed there was excellent.",
          correct: "The hotel where we stayed was excellent.",
          explanation: "'Where' already means 'in that place'. Don't add 'there' - it's redundant.",
          explanationEs: "'Where' ya significa 'en ese lugar'. No añadas 'there' - es redundante.",
          category: "grammar"
        },
        {
          id: "l6t5_cm5",
          wrong: "That's the reason because I left.",
          correct: "That's the reason why I left. / That's why I left.",
          explanation: "Use 'the reason why' or simply 'why', not 'the reason because'.",
          explanationEs: "Usa 'the reason why' o simplemente 'why', no 'the reason because'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con el pronombre relativo correcto (who, which, where, whose, when):",
          items: [
            { sentence: "The woman ___ lives next door is a teacher.", answer: "who", hint: "persona" },
            { sentence: "The car ___ I bought last year is very reliable.", answer: "which/that", hint: "cosa" },
            { sentence: "The restaurant ___ we had dinner was excellent.", answer: "where", hint: "lugar" },
            { sentence: "The man ___ daughter won the prize is very proud.", answer: "whose", hint: "posesión" },
            { sentence: "Do you remember the day ___ we first met?", answer: "when", hint: "tiempo" }
          ]
        },
        {
          type: "transformation",
          instruction: "Combina las oraciones usando cláusulas relativas:",
          items: [
            { original: "I met a woman. She works at Google.", transformed: "I met a woman who works at Google." },
            { original: "The book is on the table. I bought it yesterday.", transformed: "The book which/that I bought yesterday is on the table." },
            { original: "This is the hotel. We stayed here last summer.", transformed: "This is the hotel where we stayed last summer." },
            { original: "I have a friend. His father is a famous actor.", transformed: "I have a friend whose father is a famous actor." }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica: ¿Cláusula definitoria o no definitoria?",
          categories: [
            { name: "Definitoria (sin comas, esencial)", items: ["The man who called is here", "The car that I want is expensive", "People who exercise live longer"] },
            { name: "No definitoria (con comas, extra info)", items: ["My father, who is 70, still works", "London, which is the capital, is expensive", "Tom, whose car broke down, called a taxi"] }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa. Decide si necesitas comas o no:",
          items: [
            { sentence: "My brother ___ lives in London ___ is a doctor.", answer: ", who / ,", hint: "solo tengo un hermano = extra info = comas" },
            { sentence: "Students ___ don't study ___ usually fail.", answer: "who / (no comma)", hint: "define QUÉ estudiantes = sin comas" },
            { sentence: "The Eiffel Tower ___ is in Paris ___ was built in 1889.", answer: ", which / ,", hint: "solo hay una Torre Eiffel = extra info" },
            { sentence: "The report ___ you sent ___ was very helpful.", answer: "which/that / (no comma)", hint: "define QUÉ reporte = sin comas" }
          ]
        }
      ],
      modelDialogue: {
        title: "Describiendo experiencias de viaje",
        dialogue: [
          { speaker: "Anna", text: "How was your trip to Italy?", translation: "¿Cómo estuvo tu viaje a Italia?" },
          { speaker: "Tom", text: "Amazing! Rome, which was our first stop, was incredible.", translation: "¡Increíble! Roma, que fue nuestra primera parada, fue increíble." },
          { speaker: "Anna", text: "What did you like most?", translation: "¿Qué te gustó más?" },
          { speaker: "Tom", text: "The Colosseum, which is over 2,000 years old, was breathtaking. And there's a restaurant where we had the best pasta ever.", translation: "El Coliseo, que tiene más de 2,000 años, fue impresionante. Y hay un restaurante donde comimos la mejor pasta de nuestras vidas." },
          { speaker: "Anna", text: "Do you remember the name?", translation: "¿Recuerdas el nombre?" },
          { speaker: "Tom", text: "It's called Trattoria Mario. The owner, whose family has run it for generations, was so friendly.", translation: "Se llama Trattoria Mario. El dueño, cuya familia lo ha manejado por generaciones, fue muy amable." },
          { speaker: "Anna", text: "That sounds lovely. Who did you travel with?", translation: "Eso suena encantador. ¿Con quién viajaste?" },
          { speaker: "Tom", text: "With my friend Sarah, who I met at university. She's someone who loves history as much as I do.", translation: "Con mi amiga Sarah, a quien conocí en la universidad. Ella es alguien que ama la historia tanto como yo." },
          { speaker: "Anna", text: "Is she the one whose photos I saw on Instagram?", translation: "¿Es ella cuyas fotos vi en Instagram?" },
          { speaker: "Tom", text: "Yes! The photos that she posted don't do it justice though. You really need to see it in person.", translation: "¡Sí! Las fotos que publicó no le hacen justicia. Realmente necesitas verlo en persona." }
        ],
        keyPhrases: [
          "Rome, which was our first stop...",
          "The Colosseum, which is over 2,000 years old...",
          "a restaurant where we had...",
          "The owner, whose family has run it...",
          "my friend Sarah, who I met at university",
          "someone who loves history",
          "the one whose photos I saw",
          "The photos that she posted..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de pronombres relativos",
        sounds: [
          { sound: "Who /huː/", examples: ["The person who called", "someone who knows"], tip: "Suena como 'hoo'" },
          { sound: "Whose /huːz/", examples: ["whose car", "whose idea"], tip: "Como 'who' + /z/" },
          { sound: "Which /wɪtʃ/", examples: ["which one", "the book which"], tip: "Sonido 'ch' al final" }
        ],
        commonErrors: [
          { word: "whose", wrong: "/hoos/ (confundido con 'who's')", right: "/huːz/", note: "'Whose' = posesivo, 'Who's' = who is" },
          { word: "which", wrong: "/wich/ (rima con 'witch')", right: "/wɪtʃ/", note: "Sí, suena igual que 'witch'" },
          { word: "where", wrong: "/wer/ (muy corto)", right: "/weə/", note: "El sonido /eə/ es más largo" }
        ]
      },
      culturalNote: {
        title: "Cláusulas relativas en inglés formal vs informal",
        content: "En inglés formal escrito, se prefiere 'whom' cuando el pronombre es objeto: 'the person WHOM I met' (aunque 'who' es aceptable). En inglés hablado, a menudo omitimos el pronombre cuando es objeto: 'The man (who/that) I saw' → 'The man I saw'. En textos académicos y legales, las cláusulas relativas son muy comunes y a menudo largas. En conversación casual, se prefieren oraciones más cortas. 'That' suena más informal que 'which' en cláusulas definitorias.",
        examples: [
          "'The man (who) I met' - omisión casual del pronombre objeto",
          "'The person whom I spoke to' - muy formal",
          "'The reason why' vs 'The reason that' vs 'Why' - todos correctos",
          "'The restaurant we went to' - omisión común en habla",
          "'Which is why...' - conectando ideas"
        ]
      },
      consolidationQuiz: [
        {
          question: "Para personas usamos:",
          options: ["which", "who", "where", "when"],
          correctAnswer: 1,
          explanation: "'Who' es para personas. 'Which' es para cosas."
        },
        {
          question: "'The book ___ I bought' - el pronombre puede ser:",
          options: ["who", "which o that", "where", "whose"],
          correctAnswer: 1,
          explanation: "Para cosas: 'which' o 'that' (o se puede omitir: 'the book I bought')."
        },
        {
          question: "Las cláusulas con comas son:",
          options: ["definitorias", "no definitorias", "incorrectas", "opcionales"],
          correctAnswer: 1,
          explanation: "Cláusulas no definitorias (entre comas) dan información extra, no esencial."
        },
        {
          question: "'Whose' indica:",
          options: ["lugar", "tiempo", "posesión", "razón"],
          correctAnswer: 2,
          explanation: "'Whose' = de quién: 'The man whose car was stolen'."
        },
        {
          question: "En cláusulas no definitorias, NO puedes usar:",
          options: ["who", "which", "that", "whose"],
          correctAnswer: 2,
          explanation: "'That' NO se usa en cláusulas no definitorias (con comas)."
        },
        {
          question: "'The hotel where we stayed there' es:",
          options: ["correcta", "incorrecta - 'there' sobra", "formal", "informal"],
          correctAnswer: 1,
          explanation: "'Where' ya significa 'en ese lugar'. 'There' es redundante."
        }
      ],
      guidedProduction: [
        {
          task: "Describir personas que conoces",
          prompt: "Describe a 5 personas usando cláusulas relativas.",
          sampleAnswer: "1. My mother, who is a retired teacher, now spends her time gardening.\n\n2. I have a colleague whose ideas are always innovative.\n\n3. My best friend is someone who I can always count on.\n\n4. The person who influenced me most was my grandfather.\n\n5. I know a man whose daughter won an Olympic medal.",
          hints: ["Usa 'who' para características", "Usa 'whose' para posesión", "Incluye cláusulas definitorias y no definitorias"]
        },
        {
          task: "Describir lugares",
          prompt: "Describe 4 lugares importantes en tu vida usando 'where'.",
          sampleAnswer: "1. The house where I grew up was a small cottage in the countryside.\n\n2. My university, where I studied for four years, is in the capital city.\n\n3. There's a café where I always go to work on my laptop.\n\n4. I'll never forget the beach where my husband proposed to me.",
          hints: ["Usa 'where' para lugares", "Incluye detalles sobre por qué el lugar es importante", "Varía entre definitorias y no definitorias"]
        },
        {
          task: "Combinar información sobre cosas",
          prompt: "Escribe 5 oraciones sobre objetos/cosas usando 'which' o 'that'.",
          sampleAnswer: "1. The laptop which I use for work is five years old but still works perfectly.\n\n2. The Mona Lisa, which is the world's most famous painting, is surprisingly small.\n\n3. I finally found the book that I had been looking for.\n\n4. Climate change, which affects the entire planet, is our greatest challenge.\n\n5. The gift that he gave me was exactly what I wanted.",
          hints: ["Usa 'which' después de comas (no definitoria)", "Usa 'which' o 'that' sin comas (definitoria)", "'That' puede reemplazar 'which' en definitorias"]
        },
        {
          task: "Párrafo complejo",
          prompt: "Escribe un párrafo de 5-6 oraciones sobre tu trabajo o estudios usando diferentes tipos de cláusulas relativas.",
          sampleAnswer: "I work for a company which specializes in software development. My manager, who has been in the industry for 20 years, is an excellent mentor. I sit next to a colleague whose knowledge of programming languages is impressive. The office where we work is located in the city center. The project that I'm currently working on is challenging but interesting. The reason why I love my job is that I learn something new every day.",
          hints: ["Incluye who, which, where, whose", "Mezcla definitorias y no definitorias", "Usa 'the reason why' para explicar"]
        }
      ],
      connectionToPrevious: "En negociaciones, usaste frases como 'The price that we discussed'. Ahora dominarás todas las cláusulas relativas.",
      connectionToNext: "En la siguiente lección sobre reported speech, combinarás cláusulas: 'He said that the person who called...'"
    },
    {
      id: 6,
      title: "Reporting What Others Said",
      titleEs: "Reportando lo que Otros Dijeron",
      introduction: {
        title: "💬 Reported Speech (Estilo Indirecto)",
        explanation: "El reported speech se usa para contar lo que otras personas dijeron. Requiere cambios en tiempos verbales, pronombres y expresiones de tiempo.",
        keyPoints: [
          "Cambio de tiempos: presente → pasado, pasado → pasado perfecto",
          "Cambio de pronombres: 'I' → 'he/she', 'my' → 'his/her'",
          "Cambio de tiempo: 'today' → 'that day', 'tomorrow' → 'the next day'",
          "Verbos de reporte: said, told, explained, mentioned, claimed, admitted"
        ],
        examples: [
          { english: "She said (that) she was tired.", spanish: "Ella dijo que estaba cansada.", explanation: "Directo: 'I am tired'" },
          { english: "He told me he had finished the report.", spanish: "Me dijo que había terminado el reporte.", explanation: "Directo: 'I have finished'" },
          { english: "They explained that the meeting would be postponed.", spanish: "Explicaron que la reunión sería pospuesta.", explanation: "Directo: 'will be postponed'" }
        ],
        tips: [
          "💡 'Tell' necesita objeto: 'She told ME...' 'Say' no: 'She said...'",
          "💡 Si la información sigue siendo verdadera, el cambio de tiempo es opcional",
          "💡 Para preguntas usa 'asked': 'He asked if I was coming'"
        ],
        whenToUse: [
          'En reuniones: "She said the report would be ready by Friday"',
          'Al reportar decisiones: "He told me they had chosen another candidate"',
          'En emails formales: "The client asked whether we could extend the deadline"',
          'Para resumir conversaciones: "They mentioned that sales had increased"'
        ],
        whenNotToUse: [
          'En conversación en vivo → usa directo: "She says she\'s coming" (NO "She said she was coming" si acaba de decirlo)',
          'No uses "said" con objeto indirecto: "He told me" (NO "He said me")',
          'Evita backshift innecesario en verdades generales: "She said the Earth is round" (NO "was round")'
        ]
      },
      objectives: ["Transformar discurso directo a indirecto", "Usar verbos de reporte variados", "Reportar preguntas"],
      grammarTheoryIds: ["b1-reported-speech"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l6t6_n1", word: "statement", translation: "declaración", type: "noun", definition: "something someone says", definitionEs: "algo que alguien dice", example: "He made a statement.", exampleEs: "Él hizo una declaración.", related: ["state"], difficulty: 1 },
          { id: "l6t6_n2", word: "quotation", translation: "cita", type: "noun", definition: "someone's exact words", definitionEs: "las palabras exactas de alguien", example: "I included a quotation.", exampleEs: "Incluí una cita.", related: ["quote"], difficulty: 2 },
        ],
        verbs: [
          { id: "l6t6_v1", word: "claim", translation: "afirmar/reclamar", type: "verb", definition: "to say something is true", definitionEs: "decir que algo es verdad", example: "He claimed he was innocent.", exampleEs: "Afirmó que era inocente.", related: [], difficulty: 2 },
          { id: "l6t6_v2", word: "admit", translation: "admitir", type: "verb", definition: "to accept as true", definitionEs: "aceptar como verdad", example: "She admitted she was wrong.", exampleEs: "Ella admitió que estaba equivocada.", related: [], difficulty: 1 },
          { id: "l6t6_v3", word: "deny", translation: "negar", type: "verb", definition: "to say something is not true", definitionEs: "decir que algo no es verdad", example: "He denied taking the money.", exampleEs: "Negó haber tomado el dinero.", related: ["denial"], difficulty: 1 },
          { id: "l6t6_v4", word: "mention", translation: "mencionar", type: "verb", definition: "to speak about briefly", definitionEs: "hablar brevemente sobre", example: "She mentioned that she was leaving.", exampleEs: "Mencionó que se iba.", related: [], difficulty: 1 },
          { id: "l6t6_v5", word: "explain", translation: "explicar", type: "verb", definition: "to make clear", definitionEs: "aclarar", example: "He explained why he was late.", exampleEs: "Explicó por qué llegó tarde.", related: ["explanation"], difficulty: 1 },
          { id: "l6t6_v6", word: "promise", translation: "prometer", type: "verb", definition: "to say you will do something", definitionEs: "decir que harás algo", example: "She promised she would help.", exampleEs: "Prometió que ayudaría.", related: [], difficulty: 1 },
          { id: "l6t6_v7", word: "warn", translation: "advertir", type: "verb", definition: "to tell about danger", definitionEs: "decir sobre un peligro", example: "He warned me not to go.", exampleEs: "Me advirtió que no fuera.", related: ["warning"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l6t6_a1", word: "direct", translation: "directo", type: "adjective", definition: "using exact words", definitionEs: "usando palabras exactas", example: "Direct speech uses quotation marks.", exampleEs: "El discurso directo usa comillas.", related: [], difficulty: 1 },
          { id: "l6t6_a2", word: "indirect", translation: "indirecto", type: "adjective", definition: "reporting what was said", definitionEs: "reportando lo que se dijo", example: "This is indirect speech.", exampleEs: "Esto es discurso indirecto.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l6t6_e1", word: "She said (that)...", translation: "Ella dijo que...", type: "expression", definition: "reporting statement", definitionEs: "reportando declaración", example: "She said that she was busy.", exampleEs: "Ella dijo que estaba ocupada.", related: [], difficulty: 1 },
          { id: "l6t6_e2", word: "He told me (that)...", translation: "Me dijo que...", type: "expression", definition: "reporting to someone", definitionEs: "reportando a alguien", example: "He told me that he would come.", exampleEs: "Me dijo que vendría.", related: [], difficulty: 1 },
          { id: "l6t6_e3", word: "She asked if/whether...", translation: "Preguntó si...", type: "expression", definition: "reporting yes/no questions", definitionEs: "reportando preguntas sí/no", example: "She asked if I was coming.", exampleEs: "Preguntó si yo vendría.", related: [], difficulty: 1 },
          { id: "l6t6_e4", word: "He asked me what/where/when...", translation: "Me preguntó qué/dónde/cuándo...", type: "expression", definition: "reporting wh-questions", definitionEs: "reportando preguntas con wh-", example: "He asked me where I lived.", exampleEs: "Me preguntó dónde vivía.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t6_cm1",
          wrong: "She said me that she was tired.",
          correct: "She told me that she was tired. / She said (that) she was tired.",
          explanation: "'Say' does NOT take a direct object for the person. Use 'tell' + person or 'say' without person.",
          explanationEs: "'Say' NO lleva objeto directo de persona. Usa 'tell' + persona o 'say' sin persona.",
          category: "grammar"
        },
        {
          id: "l6t6_cm2",
          wrong: "He told that he was leaving.",
          correct: "He said (that) he was leaving. / He told me (that) he was leaving.",
          explanation: "'Tell' ALWAYS needs an object: 'told me/him/her'. Without object, use 'said'.",
          explanationEs: "'Tell' SIEMPRE necesita objeto: 'told me/him/her'. Sin objeto, usa 'said'.",
          category: "grammar"
        },
        {
          id: "l6t6_cm3",
          wrong: "She asked where was I going.",
          correct: "She asked where I was going.",
          explanation: "In reported questions, the word order is AFFIRMATIVE (subject + verb), not question order.",
          explanationEs: "En reported questions, el orden es AFIRMATIVO (sujeto + verbo), no de pregunta.",
          category: "grammar"
        },
        {
          id: "l6t6_cm4",
          wrong: "He said he will come tomorrow.",
          correct: "He said he would come the next day.",
          explanation: "Change 'will' → 'would' and 'tomorrow' → 'the next day' in reported speech.",
          explanationEs: "Cambia 'will' → 'would' y 'tomorrow' → 'the next day' en reported speech.",
          category: "grammar"
        },
        {
          id: "l6t6_cm5",
          wrong: "She asked did I want coffee.",
          correct: "She asked if/whether I wanted coffee.",
          explanation: "For Yes/No questions, use 'if' or 'whether', without 'did'.",
          explanationEs: "Para preguntas Yes/No, usa 'if' o 'whether', sin 'did'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Transforma de discurso directo a indirecto:",
          items: [
            { original: "'I am very busy,' she said.", transformed: "She said (that) she was very busy." },
            { original: "'I have finished the report,' he said.", transformed: "He said (that) he had finished the report." },
            { original: "'We will help you,' they promised.", transformed: "They promised (that) they would help me/us." },
            { original: "'I can't come to the meeting,' she explained.", transformed: "She explained (that) she couldn't come to the meeting." },
            { original: "'I saw John yesterday,' he mentioned.", transformed: "He mentioned (that) he had seen John the day before." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con el verbo de reporte más apropiado:",
          items: [
            { sentence: "She ___ that she would be late. (inform formally)", answer: "explained/informed/stated", hint: "declaración formal" },
            { sentence: "He ___ that he had taken the money. (confess)", answer: "admitted", hint: "confesar" },
            { sentence: "They ___ taking the last cookie. (say it wasn't true)", answer: "denied", hint: "negar" },
            { sentence: "She ___ to help me with the project. (commit)", answer: "promised", hint: "comprometerse" },
            { sentence: "He ___ me not to invest in that company. (alert to danger)", answer: "warned", hint: "alertar de peligro" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma las preguntas a reported questions:",
          items: [
            { original: "'Where do you live?' he asked me.", transformed: "He asked me where I lived." },
            { original: "'Are you coming to the party?' she asked.", transformed: "She asked if/whether I was coming to the party." },
            { original: "'What time does the train leave?' I asked.", transformed: "I asked what time the train left." },
            { original: "'Have you seen my keys?' he asked me.", transformed: "He asked me if/whether I had seen his keys." },
            { original: "'Why didn't you call me?' she asked.", transformed: "She asked why I hadn't called her." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Cambia las expresiones de tiempo:",
          items: [
            { sentence: "'I saw her today' → He said he had seen her ___.", answer: "that day", hint: "today → ?" },
            { sentence: "'I'll call you tomorrow' → She said she would call me ___.", answer: "the next day / the following day", hint: "tomorrow → ?" },
            { sentence: "'I met him yesterday' → He said he had met him ___.", answer: "the day before / the previous day", hint: "yesterday → ?" },
            { sentence: "'I'm leaving now' → She said she was leaving ___.", answer: "then / at that moment", hint: "now → ?" },
            { sentence: "'I came here last week' → He said he had come ___ the week ___.", answer: "there / before", hint: "here → ?, last week → ?" }
          ]
        }
      ],
      modelDialogue: {
        title: "Reportando una reunión de trabajo",
        dialogue: [
          { speaker: "Lisa", text: "How was the meeting with the new client?", translation: "¿Cómo estuvo la reunión con el nuevo cliente?" },
          { speaker: "Mark", text: "It went well. They said they were very interested in our proposal.", translation: "Fue bien. Dijeron que estaban muy interesados en nuestra propuesta." },
          { speaker: "Lisa", text: "Did they mention anything about the budget?", translation: "¿Mencionaron algo sobre el presupuesto?" },
          { speaker: "Mark", text: "Yes, the CFO explained that they had allocated $50,000 for the project.", translation: "Sí, el director financiero explicó que habían asignado $50,000 para el proyecto." },
          { speaker: "Lisa", text: "That's great! What about the timeline?", translation: "¡Genial! ¿Qué hay del cronograma?" },
          { speaker: "Mark", text: "They asked if we could deliver by December. I told them it would be challenging but possible.", translation: "Preguntaron si podríamos entregar para diciembre. Les dije que sería desafiante pero posible." },
          { speaker: "Lisa", text: "Did they have any concerns?", translation: "¿Tuvieron alguna preocupación?" },
          { speaker: "Mark", text: "The project manager mentioned that they had had issues with vendors before. He asked whether we could provide references.", translation: "El gerente de proyecto mencionó que habían tenido problemas con proveedores antes. Preguntó si podríamos proporcionar referencias." },
          { speaker: "Lisa", text: "And what did you say?", translation: "¿Y qué dijiste?" },
          { speaker: "Mark", text: "I assured them that we would send references the next day. I also promised that we would maintain regular communication throughout the project.", translation: "Les aseguré que enviaríamos referencias al día siguiente. También prometí que mantendríamos comunicación regular a lo largo del proyecto." },
          { speaker: "Lisa", text: "Perfect. Did they say when they would make a decision?", translation: "Perfecto. ¿Dijeron cuándo tomarían una decisión?" },
          { speaker: "Mark", text: "They said they needed to discuss it internally and would get back to us within a week.", translation: "Dijeron que necesitaban discutirlo internamente y que nos responderían en una semana." }
        ],
        keyPhrases: [
          "They said they were very interested...",
          "The CFO explained that they had allocated...",
          "They asked if we could deliver...",
          "I told them it would be...",
          "He mentioned that they had had issues...",
          "He asked whether we could provide...",
          "I assured them that we would...",
          "I promised that we would...",
          "They said they needed to discuss...",
          "...would get back to us"
        ]
      },
      pronunciationFocus: {
        title: "Verbos de reporte y sus formas",
        sounds: [
          { sound: "Said /sed/", examples: ["She said", "He said that"], tip: "Pasado de 'say', NO /seɪd/" },
          { sound: "Asked /ɑːskt/", examples: ["She asked", "He asked if"], tip: "La 'k' casi no se oye" },
          { sound: "Told /təʊld/", examples: ["She told me", "He told them"], tip: "Rima con 'old'" }
        ],
        commonErrors: [
          { word: "said", wrong: "/seɪd/ (como 'say' + d)", right: "/sed/", note: "Cambio de vocal: /eɪ/ → /e/" },
          { word: "explained", wrong: "/ex-PLAIN-ed/", right: "/ɪkˈspleɪnd/", note: "La 'ed' suena /d/" },
          { word: "mentioned", wrong: "/men-TION-ed/", right: "/ˈmenʃnd/", note: "'tion' suena /ʃn/" }
        ]
      },
      culturalNote: {
        title: "Reported speech en comunicación profesional",
        content: "En el mundo profesional anglosajon, el reported speech es esencial para emails, minutas de reuniones, y comunicación corporativa. Se espera que reportes con precisión lo que otros dijeron, usando verbos apropiados: 'stated' para declaraciones formales, 'suggested' para propuestas, 'agreed' para consensos, 'emphasized' para puntos importantes. En emails, frases como 'As discussed...' o 'As per our conversation...' introducen reported speech de forma profesional. En contextos legales, la precisión del reported speech es crítica.",
        examples: [
          "'As discussed in our meeting...' - inicio común de email",
          "'The client stated that...' - muy formal",
          "'Per your request...' - reportando una petición",
          "'It was agreed that...' - reportando consenso",
          "'Management has indicated that...' - jerga corporativa"
        ]
      },
      consolidationQuiz: [
        {
          question: "'She ___ me that she was leaving.' Completa:",
          options: ["said", "told", "asked", "explained"],
          correctAnswer: 1,
          explanation: "'Told' necesita objeto (me/him/her). 'Said' no lleva objeto de persona directamente."
        },
        {
          question: "Direct: 'I am tired.' → Reported: She said she ___ tired.",
          options: ["is", "was", "has been", "were"],
          correctAnswer: 1,
          explanation: "Present simple 'am' → Past simple 'was' en reported speech."
        },
        {
          question: "Para reportar preguntas Yes/No usamos:",
          options: ["what", "if/whether", "do", "that"],
          correctAnswer: 1,
          explanation: "Para Yes/No questions: 'She asked IF/WHETHER I was coming.'"
        },
        {
          question: "'Tomorrow' en reported speech se convierte en:",
          options: ["tomorrow", "the next day", "yesterday", "today"],
          correctAnswer: 1,
          explanation: "'Tomorrow' → 'the next day' / 'the following day'."
        },
        {
          question: "Reported question: 'Where do you live?' → He asked where I ___.",
          options: ["do live", "did live", "lived", "live"],
          correctAnswer: 2,
          explanation: "En reported questions, el orden es afirmativo y el tiempo cambia."
        },
        {
          question: "'She asked did I want coffee' es:",
          options: ["correcta", "incorrecta", "formal", "informal"],
          correctAnswer: 1,
          explanation: "Incorrecto. No uses 'did' en reported questions. Di: 'She asked if I wanted coffee.'"
        }
      ],
      guidedProduction: [
        {
          task: "Reportar una conversación",
          prompt: "Reporta esta conversación: A: 'Where are you going?' B: 'I'm going to the store. Do you need anything?' A: 'Yes, I need milk.'",
          sampleAnswer: "A asked B where he/she was going. B replied that he/she was going to the store and asked if A needed anything. A said that he/she needed milk.",
          hints: ["Cambia los tiempos verbales", "Cambia los pronombres", "'Where are you going?' → asked where he/she was going"]
        },
        {
          task: "Reportar noticias",
          prompt: "Imagina que leíste estas declaraciones. Repórtalas: CEO: 'We will hire 500 new employees.' Union Leader: 'We are demanding better conditions.'",
          sampleAnswer: "The CEO announced/stated that they would hire 500 new employees. The union leader claimed/declared that they were demanding better conditions.",
          hints: ["Usa verbos formales: 'announced', 'stated', 'claimed'", "Cambia 'will' → 'would'", "Cambia 'we are' → 'they were'"]
        },
        {
          task: "Minuta de reunión",
          prompt: "Escribe una minuta reportando estos puntos: John: 'The project is on track.' Sarah: 'Can we increase the budget?' Manager: 'I'll consider it.'",
          sampleAnswer: "Meeting Minutes:\n\n1. John reported that the project was on track.\n\n2. Sarah asked if/whether they could increase the budget.\n\n3. The manager stated that he/she would consider it.",
          hints: ["Usa formato de minuta", "Verbos: 'reported', 'asked', 'stated'", "Mantén un tono formal y objetivo"]
        },
        {
          task: "Email reportando una llamada",
          prompt: "Escribe un email breve reportando una llamada con un cliente que dijo: 'I'm very happy with the service. I'll recommend you to my colleagues.'",
          sampleAnswer: "Subject: Client Feedback - Positive\n\nDear Team,\n\nI wanted to share some positive feedback from my call with Mr. Johnson today.\n\nHe said that he was very happy with our service and mentioned that he would recommend us to his colleagues.\n\nThis is excellent news for our client retention efforts.\n\nBest regards,\n[Name]",
          hints: ["Usa formato de email profesional", "Empieza con contexto", "'I'm happy' → 'he was happy'", "'I'll recommend' → 'he would recommend'"]
        }
      ],
      connectionToPrevious: "En cláusulas relativas, aprendiste estructuras como 'the person who said...'. Ahora aprenderás a reportar exactamente lo que esa persona dijo.",
      connectionToNext: "En la siguiente lección sobre causa y efecto, combinarás estructuras: 'He explained that, due to the delay, they had to...'"
    },
    {
      id: 7,
      title: "Cause and Effect",
      titleEs: "Causa y Efecto",
      introduction: {
        title: "↔️ Causa y Efecto",
        explanation: "Expresar relaciones de causa y efecto es crucial para explicar razones y consecuencias. Aprenderás conectores y estructuras para expresar estas relaciones.",
        keyPoints: [
          "Causa: 'because (of)', 'due to', 'since', 'as', 'owing to'",
          "Efecto: 'therefore', 'as a result', 'consequently', 'so', 'thus'",
          "Propósito: 'in order to', 'so that', 'so as to'",
          "Diferencia: 'because' + cláusula, 'because of' + sustantivo"
        ],
        examples: [
          { english: "The flight was cancelled due to bad weather.", spanish: "El vuelo fue cancelado debido al mal clima.", explanation: "Causa con 'due to' + sustantivo" },
          { english: "Sales increased; therefore, we hired more staff.", spanish: "Las ventas aumentaron; por lo tanto, contratamos más personal.", explanation: "Efecto con 'therefore'" },
          { english: "I studied hard so that I could pass the exam.", spanish: "Estudié duro para poder pasar el examen.", explanation: "Propósito con 'so that'" }
        ],
        tips: [
          "💡 'Due to' y 'Owing to' son más formales que 'because of'",
          "💡 'Therefore', 'consequently', 'thus' van al inicio de oración o después de ';'",
          "💡 'So' informal, 'Therefore' formal"
        ],
        whenToUse: [
          'En reportes escritos: "Sales decreased. Consequently, we had to cut costs"',
          'Para explicar razones formales: "The delay was due to unforeseen circumstances"',
          'En presentaciones: "We invested in training. As a result, productivity increased"',
          'Para expresar propósito: "We hired more staff in order to meet demand"'
        ],
        whenNotToUse: [
          '"Due to" + oración completa → "because of": "We were late because of the traffic" (NO "due to we had traffic")',
          'No uses "so" al inicio en escritura formal → "Therefore" o "Consequently"',
          '"The reason is because" → redundante: "The reason is that..." (NO "the reason is because")'
        ]
      },
      objectives: ["Expresar causas de diferentes formas", "Expresar efectos y resultados", "Expresar propósito"],
      grammarTheoryIds: ["b2-participle-clauses"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l6t7_n1", word: "cause", translation: "causa", type: "noun", definition: "what makes something happen", definitionEs: "lo que hace que algo suceda", example: "What was the cause?", exampleEs: "¿Cuál fue la causa?", related: [], difficulty: 1 },
          { id: "l6t7_n2", word: "effect", translation: "efecto", type: "noun", definition: "what happens as a result", definitionEs: "lo que sucede como resultado", example: "The effect was significant.", exampleEs: "El efecto fue significativo.", related: [], difficulty: 1 },
          { id: "l6t7_n3", word: "reason", translation: "razón", type: "noun", definition: "why something happens", definitionEs: "por qué algo sucede", example: "What's the reason for this?", exampleEs: "¿Cuál es la razón para esto?", related: [], difficulty: 1 },
          { id: "l6t7_n4", word: "consequence", translation: "consecuencia", type: "noun", definition: "something that follows from an action", definitionEs: "algo que sigue de una acción", example: "Consider the consequences.", exampleEs: "Considera las consecuencias.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l6t7_v1", word: "cause", translation: "causar", type: "verb", definition: "to make something happen", definitionEs: "hacer que algo suceda", example: "What caused the delay?", exampleEs: "¿Qué causó el retraso?", related: [], difficulty: 1 },
          { id: "l6t7_v2", word: "result (in)", translation: "resultar (en)", type: "verb", definition: "to have as a consequence", definitionEs: "tener como consecuencia", example: "This resulted in higher sales.", exampleEs: "Esto resultó en mayores ventas.", related: [], difficulty: 1 },
          { id: "l6t7_v3", word: "lead to", translation: "conducir a", type: "verb", definition: "to cause", definitionEs: "causar", example: "Stress can lead to health problems.", exampleEs: "El estrés puede conducir a problemas de salud.", related: [], difficulty: 1 },
          { id: "l6t7_v4", word: "contribute to", translation: "contribuir a", type: "verb", definition: "to be part of the cause", definitionEs: "ser parte de la causa", example: "Many factors contributed to the success.", exampleEs: "Muchos factores contribuyeron al éxito.", related: [], difficulty: 2 },
        ],
        adjectives: [],
        expressions: [
          { id: "l6t7_e1", word: "due to / owing to", translation: "debido a", type: "expression", definition: "because of (formal)", definitionEs: "por causa de (formal)", example: "Due to the rain, the event was cancelled.", exampleEs: "Debido a la lluvia, el evento fue cancelado.", related: [], difficulty: 1 },
          { id: "l6t7_e2", word: "as a result", translation: "como resultado", type: "expression", definition: "because of this", definitionEs: "por esto", example: "As a result, we had to postpone.", exampleEs: "Como resultado, tuvimos que posponer.", related: [], difficulty: 1 },
          { id: "l6t7_e3", word: "therefore / consequently", translation: "por lo tanto", type: "expression", definition: "for this reason", definitionEs: "por esta razón", example: "Therefore, we need to act now.", exampleEs: "Por lo tanto, necesitamos actuar ahora.", related: [], difficulty: 1 },
          { id: "l6t7_e4", word: "in order to / so as to", translation: "para / con el fin de", type: "expression", definition: "with the purpose of", definitionEs: "con el propósito de", example: "He left early in order to avoid traffic.", exampleEs: "Se fue temprano para evitar el tráfico.", related: [], difficulty: 2 },
          { id: "l6t7_e5", word: "so that", translation: "para que", type: "expression", definition: "with the purpose that", definitionEs: "con el propósito de que", example: "I saved money so that I could travel.", exampleEs: "Ahorré dinero para poder viajar.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t7_cm1",
          wrong: "Because of I was sick, I stayed home.",
          correct: "Because I was sick, I stayed home. / Because of my illness, I stayed home.",
          explanation: "'Because' + clause (subject + verb). 'Because of' + noun/gerund.",
          explanationEs: "'Because' + cláusula (sujeto + verbo). 'Because of' + sustantivo/gerundio.",
          category: "grammar"
        },
        {
          id: "l6t7_cm2",
          wrong: "Due to I arrived late, I missed the meeting.",
          correct: "Due to arriving late, I missed the meeting. / Because I arrived late, I missed the meeting.",
          explanation: "'Due to' needs a noun or gerund, not a full clause.",
          explanationEs: "'Due to' necesita sustantivo o gerundio, no una cláusula completa.",
          category: "grammar"
        },
        {
          id: "l6t7_cm3",
          wrong: "I studied hard, therefore I passed.",
          correct: "I studied hard; therefore, I passed. / I studied hard. Therefore, I passed.",
          explanation: "'Therefore' cannot connect clauses with just a comma. Use semicolon or period.",
          explanationEs: "'Therefore' no puede conectar cláusulas con solo coma. Usa punto y coma o punto.",
          category: "grammar"
        },
        {
          id: "l6t7_cm4",
          wrong: "I went to the store for buy milk.",
          correct: "I went to the store to buy milk. / I went to the store in order to buy milk.",
          explanation: "For purpose use 'to + infinitive' or 'in order to + infinitive', not 'for + infinitive'.",
          explanationEs: "Para propósito usa 'to + infinitivo' o 'in order to + infinitivo', no 'for + infinitivo'.",
          category: "grammar"
        },
        {
          id: "l6t7_cm5",
          wrong: "So that I could sleep better, I took a pill.",
          correct: "I took a pill so that I could sleep better.",
          explanation: "'So that' normally goes in the second part of the sentence, indicating purpose.",
          explanationEs: "'So that' normalmente va en la segunda parte de la oración, indicando el propósito.",
          category: "usage"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con 'because', 'because of', 'due to', 'owing to':",
          items: [
            { sentence: "The flight was delayed ___ bad weather.", answer: "due to / because of / owing to", hint: "+ sustantivo" },
            { sentence: "___ it was raining, we stayed indoors.", answer: "Because", hint: "+ cláusula" },
            { sentence: "The event was cancelled ___ low attendance.", answer: "due to / because of / owing to", hint: "+ sustantivo" },
            { sentence: "She was tired ___ she had worked all night.", answer: "because", hint: "+ cláusula" },
            { sentence: "___ the pandemic, many businesses closed.", answer: "Due to / Because of / Owing to", hint: "formal + sustantivo" }
          ]
        },
        {
          type: "transformation",
          instruction: "Reescribe usando el conector indicado:",
          items: [
            { original: "It was raining. The game was cancelled. (due to)", transformed: "Due to the rain, the game was cancelled. / The game was cancelled due to the rain." },
            { original: "He wanted to lose weight. He started exercising. (in order to)", transformed: "He started exercising in order to lose weight." },
            { original: "Sales dropped. The company laid off workers. (as a result)", transformed: "Sales dropped. As a result, the company laid off workers." },
            { original: "She didn't want to be late. She left early. (so that)", transformed: "She left early so that she wouldn't be late." },
            { original: "The traffic was heavy. We arrived late. (consequently)", transformed: "The traffic was heavy; consequently, we arrived late." }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica los conectores por función:",
          categories: [
            { name: "Expresar causa", items: ["because", "because of", "due to", "owing to", "since", "as"] },
            { name: "Expresar efecto/resultado", items: ["therefore", "consequently", "as a result", "thus", "hence", "so"] },
            { name: "Expresar propósito", items: ["in order to", "so as to", "so that", "to", "for the purpose of"] }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con el conector de resultado apropiado:",
          items: [
            { sentence: "The product was defective; ___, we issued a recall.", answer: "therefore / consequently / thus", hint: "resultado formal" },
            { sentence: "Costs increased significantly. ___, we had to raise prices.", answer: "As a result / Therefore / Consequently", hint: "inicio de oración" },
            { sentence: "The evidence was insufficient, ___ the case was dismissed.", answer: "so / therefore", hint: "casual o formal" },
            { sentence: "There was no demand; ___, production was stopped.", answer: "consequently / therefore / hence", hint: "después de ;" },
            { sentence: "The team worked overtime and, ___, met the deadline.", answer: "as a result / consequently / thus", hint: "resultado positivo" }
          ]
        }
      ],
      modelDialogue: {
        title: "Analizando un problema empresarial",
        dialogue: [
          { speaker: "Manager", text: "Our sales have dropped 20% this quarter. Can someone explain why?", translation: "Nuestras ventas han bajado 20% este trimestre. ¿Alguien puede explicar por qué?" },
          { speaker: "Analyst", text: "There are several factors. First, due to the economic downturn, consumer spending has decreased.", translation: "Hay varios factores. Primero, debido a la recesión económica, el gasto del consumidor ha disminuido." },
          { speaker: "Manager", text: "What else?", translation: "¿Qué más?" },
          { speaker: "Analyst", text: "Also, because our main competitor launched a similar product at a lower price, we lost market share.", translation: "También, porque nuestro competidor principal lanzó un producto similar a menor precio, perdimos cuota de mercado." },
          { speaker: "Manager", text: "So what's the impact?", translation: "¿Entonces cuál es el impacto?" },
          { speaker: "Analyst", text: "As a result, our revenue is down, and consequently, we may need to cut the marketing budget.", translation: "Como resultado, nuestros ingresos bajaron, y por consiguiente, puede que necesitemos recortar el presupuesto de marketing." },
          { speaker: "Manager", text: "What can we do to fix this?", translation: "¿Qué podemos hacer para arreglar esto?" },
          { speaker: "Analyst", text: "In order to regain market share, we could lower our prices or improve product features.", translation: "Para recuperar cuota de mercado, podríamos bajar nuestros precios o mejorar las características del producto." },
          { speaker: "Manager", text: "And the long-term solution?", translation: "¿Y la solución a largo plazo?" },
          { speaker: "Analyst", text: "We should invest in R&D so that we can innovate faster. Therefore, I recommend increasing the R&D budget.", translation: "Deberíamos invertir en I+D para poder innovar más rápido. Por lo tanto, recomiendo aumentar el presupuesto de I+D." }
        ],
        keyPhrases: [
          "due to the economic downturn...",
          "because our main competitor launched...",
          "As a result, our revenue is down",
          "and consequently, we may need to...",
          "In order to regain market share...",
          "so that we can innovate faster",
          "Therefore, I recommend..."
        ]
      },
      pronunciationFocus: {
        title: "Conectores de causa y efecto",
        sounds: [
          { sound: "Therefore /ˈðeəfɔː/", examples: ["Therefore, we must act", "It is, therefore, important"], tip: "Acento en primera sílaba" },
          { sound: "Consequently /ˈkɒnsɪkwəntli/", examples: ["Consequently, sales fell", "and consequently"], tip: "5 sílabas, acento en primera" },
          { sound: "Due to /djuː tuː/", examples: ["due to the rain", "due to illness"], tip: "'Due' rima con 'new'" }
        ],
        commonErrors: [
          { word: "consequently", wrong: "/con-se-QUENT-ly/", right: "/ˈkɒnsɪkwəntli/", note: "Acento en primera, no tercera sílaba" },
          { word: "therefore", wrong: "/THERE-for/", right: "/ˈðeəfɔː/", note: "El sonido 'th' es sonoro /ð/" },
          { word: "owing", wrong: "/O-wing/", right: "/ˈəʊɪŋ/", note: "Como 'owing' en 'owing money'" }
        ]
      },
      culturalNote: {
        title: "Causa y efecto en escritura académica y de negocios",
        content: "En inglés académico y de negocios, expresar relaciones causales claramente es crucial. 'Due to' y 'owing to' son preferidos en escritura formal sobre 'because of'. 'Therefore', 'consequently', y 'thus' son estándar en informes y papers. En presentaciones de negocios, es común estructurar análisis como 'The cause was X. As a result, Y happened. Therefore, we recommend Z.' Esta estructura clara de causa-efecto-acción es muy valorada en la comunicación corporativa anglosajona.",
        examples: [
          "'The data suggests that... Therefore,...' - estilo académico",
          "'Due to unforeseen circumstances...' - lenguaje corporativo formal",
          "'In light of these findings, we recommend...' - conclusiones de informe",
          "'This led to... which in turn caused...' - cadena de causalidad",
          "'For this reason, we propose...' - justificación de propuesta"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Because' se usa con:",
          options: ["sustantivo", "cláusula (sujeto + verbo)", "gerundio", "adjetivo"],
          correctAnswer: 1,
          explanation: "'Because' + cláusula: 'Because it was raining'. 'Because of' + sustantivo."
        },
        {
          question: "'Due to the rain, the game was cancelled' es:",
          options: ["incorrecta", "correcta - causa formal", "muy informal", "pregunta"],
          correctAnswer: 1,
          explanation: "'Due to' + sustantivo es correcto y formal."
        },
        {
          question: "'Therefore' expresa:",
          options: ["causa", "resultado/conclusión", "propósito", "condición"],
          correctAnswer: 1,
          explanation: "'Therefore' introduce un resultado o conclusión lógica."
        },
        {
          question: "Para expresar propósito, usamos:",
          options: ["because", "due to", "in order to / so that", "therefore"],
          correctAnswer: 2,
          explanation: "'In order to' y 'so that' expresan propósito/objetivo."
        },
        {
          question: "'I studied hard, therefore I passed' es:",
          options: ["correcta", "necesita punto y coma o punto antes de 'therefore'", "muy formal", "casual"],
          correctAnswer: 1,
          explanation: "'Therefore' necesita ';' o '.' antes, no solo ','."
        },
        {
          question: "'For buy' es:",
          options: ["correcta", "incorrecta - usa 'to buy'", "formal", "British English"],
          correctAnswer: 1,
          explanation: "Incorrecto. Para propósito: 'to buy' o 'in order to buy', NO 'for buy'."
        }
      ],
      guidedProduction: [
        {
          task: "Analizar un problema",
          prompt: "Escribe un párrafo analizando por qué el tráfico es un problema en las ciudades grandes. Incluye causas, efectos y posibles soluciones.",
          sampleAnswer: "Traffic congestion in major cities has become a significant problem. Due to rapid urbanization and increased car ownership, the number of vehicles on the road has grown dramatically. As a result, commute times have increased substantially. Consequently, productivity suffers and air quality deteriorates. In order to address this issue, cities should invest in public transportation. Additionally, companies could implement flexible work policies so that employees don't all travel at the same time. Therefore, a combination of infrastructure investment and policy changes is needed to solve this problem.",
          hints: ["Usa 'Due to' para introducir causas", "Usa 'As a result', 'Consequently' para efectos", "Usa 'In order to', 'so that' para soluciones"]
        },
        {
          task: "Informe de incidente",
          prompt: "Escribe un breve informe explicando por qué un proyecto se retrasó.",
          sampleAnswer: "Project Delay Report\n\nThe project deadline was not met due to several factors. First, because the client changed requirements mid-project, significant rework was needed. Second, owing to staff illness, the team was understaffed for two weeks. As a result, critical milestones were missed. Consequently, the final delivery was delayed by three weeks.\n\nIn order to prevent similar issues in the future, we recommend implementing a change control process. Additionally, we should maintain a resource buffer so that unexpected absences don't impact timelines. Therefore, we propose updating our project management procedures.",
          hints: ["Estructura: causas → efectos → recomendaciones", "Usa conectores formales", "Termina con 'Therefore' para conclusión"]
        },
        {
          task: "Explicar una decisión personal",
          prompt: "Explica por qué tomaste una decisión importante en tu vida (cambio de trabajo, mudanza, estudios, etc.).",
          sampleAnswer: "I decided to change careers last year. Because my previous job offered no growth opportunities, I felt stuck. Additionally, due to the long commute, I had no time for personal development. As a result, I became increasingly unhappy.\n\nI decided to learn programming in order to enter the tech industry. I took online courses so that I could study while still working. Consequently, after six months of intensive learning, I was able to secure a new position. Therefore, although the change was challenging, it was the right decision for my career.",
          hints: ["Explica las causas de tu decisión", "Describe los efectos de la situación anterior", "Usa 'in order to' para tus objetivos"]
        },
        {
          task: "Análisis de causa-efecto en cadena",
          prompt: "Escribe sobre una cadena de causa-efecto: A causó B, que causó C, que causó D.",
          sampleAnswer: "The 2008 financial crisis demonstrates a classic cause-and-effect chain. Because banks gave mortgages to unqualified borrowers, many people bought homes they couldn't afford. As a result, when interest rates rose, borrowers defaulted on their loans. This, in turn, caused housing prices to crash. Consequently, banks faced massive losses, which led to several bank failures. Therefore, governments had to intervene with bailouts. Due to this economic instability, millions of people lost their jobs, which resulted in reduced consumer spending. As a result, the recession spread globally.",
          hints: ["Muestra cómo un efecto se convierte en causa del siguiente", "Usa variedad de conectores", "'This, in turn, caused...' para conectar efectos en cadena"]
        }
      ],
      connectionToPrevious: "En reported speech, reportaste razones: 'He explained that the delay was due to...' Ahora dominarás todos los conectores de causa y efecto.",
      connectionToNext: "En la siguiente lección sobre tendencias, usarás causa-efecto para explicar cambios: 'Sales increased due to... As a result...'"
    },
    {
      id: 8,
      title: "Describing Trends",
      titleEs: "Describiendo Tendencias",
      introduction: {
        title: "📈 Describiendo Tendencias",
        explanation: "En negocios, es esencial poder describir cambios y tendencias. Aprenderás vocabulario para hablar de aumentos, disminuciones y fluctuaciones.",
        keyPoints: [
          "Aumentar: increase, rise, grow, climb, go up, rocket, surge",
          "Disminuir: decrease, fall, drop, decline, go down, plummet",
          "Estabilidad: remain steady, stay stable, level off, plateau",
          "Fluctuación: fluctuate, vary, oscillate",
          "Grado: slightly, gradually, sharply, dramatically, significantly"
        ],
        examples: [
          { english: "Sales increased dramatically in Q4.", spanish: "Las ventas aumentaron dramáticamente en Q4.", explanation: "Aumento fuerte" },
          { english: "Prices have remained stable over the past year.", spanish: "Los precios se han mantenido estables durante el último año.", explanation: "Estabilidad" },
          { english: "The market fluctuated throughout the month.", spanish: "El mercado fluctuó a lo largo del mes.", explanation: "Fluctuación" }
        ],
        tips: [
          "💡 Usa adverbios para el grado: 'increased slightly' vs 'increased dramatically'",
          "💡 'Rise/Increase' pueden ser verbo y sustantivo: 'Sales rose' / 'There was a rise'",
          "💡 Para gráficos: 'peak' (punto más alto), 'trough' (punto más bajo)"
        ],
        whenToUse: [
          'En presentaciones con datos: "Revenue increased significantly in Q3"',
          'Al describir gráficos: "The figure peaked in 2020 before declining"',
          'En reportes trimestrales: "There was a sharp rise in customer satisfaction"',
          'Para comparar tendencias: "Profits fluctuated throughout the year"'
        ],
        whenNotToUse: [
          '"Increase" con preposición incorrecta: "increased to 20%" (NO "increased in 20%")',
          'No confundas "rise" (intransitivo) con "raise" (transitivo): "Sales rose" (NO "Sales raised")',
          'Evita "grow" para números negativos: "decreased" o "fell" (NO "grew negatively")'
        ]
      },
      objectives: ["Describir aumentos y disminuciones", "Usar adverbios de grado", "Interpretar gráficos"],
      grammarTheoryIds: ["b2-passive-advanced"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l6t8_n1", word: "increase", translation: "aumento", type: "noun", definition: "a rise in amount", definitionEs: "una subida en cantidad", example: "There was an increase in sales.", exampleEs: "Hubo un aumento en ventas.", related: [], difficulty: 1 },
          { id: "l6t8_n2", word: "decrease", translation: "disminución", type: "noun", definition: "a fall in amount", definitionEs: "una bajada en cantidad", example: "There was a decrease in costs.", exampleEs: "Hubo una disminución en costos.", related: [], difficulty: 1 },
          { id: "l6t8_n3", word: "trend", translation: "tendencia", type: "noun", definition: "a general direction", definitionEs: "una dirección general", example: "There's an upward trend.", exampleEs: "Hay una tendencia al alza.", related: [], difficulty: 1 },
          { id: "l6t8_n4", word: "peak", translation: "pico/máximo", type: "noun", definition: "the highest point", definitionEs: "el punto más alto", example: "Sales reached a peak in December.", exampleEs: "Las ventas alcanzaron un pico en diciembre.", related: [], difficulty: 1 },
          { id: "l6t8_n5", word: "fluctuation", translation: "fluctuación", type: "noun", definition: "irregular changes", definitionEs: "cambios irregulares", example: "There were fluctuations in prices.", exampleEs: "Hubo fluctuaciones en los precios.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l6t8_v1", word: "increase", translation: "aumentar", type: "verb", definition: "to become larger", definitionEs: "volverse más grande", example: "Sales increased by 20%.", exampleEs: "Las ventas aumentaron un 20%.", related: [], difficulty: 1 },
          { id: "l6t8_v2", word: "decrease", translation: "disminuir", type: "verb", definition: "to become smaller", definitionEs: "volverse más pequeño", example: "Costs decreased significantly.", exampleEs: "Los costos disminuyeron significativamente.", related: [], difficulty: 1 },
          { id: "l6t8_v3", word: "rise", translation: "subir", type: "verb", definition: "to go up", definitionEs: "ir arriba", example: "Prices rose sharply.", exampleEs: "Los precios subieron bruscamente.", related: [], difficulty: 1 },
          { id: "l6t8_v4", word: "fall", translation: "caer", type: "verb", definition: "to go down", definitionEs: "ir abajo", example: "Demand fell dramatically.", exampleEs: "La demanda cayó dramáticamente.", related: [], difficulty: 1 },
          { id: "l6t8_v5", word: "fluctuate", translation: "fluctuar", type: "verb", definition: "to change irregularly", definitionEs: "cambiar irregularmente", example: "The exchange rate fluctuates daily.", exampleEs: "La tasa de cambio fluctúa diariamente.", related: [], difficulty: 2 },
          { id: "l6t8_v6", word: "remain", translation: "permanecer", type: "verb", definition: "to stay the same", definitionEs: "quedarse igual", example: "Prices remained stable.", exampleEs: "Los precios permanecieron estables.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l6t8_a1", word: "steady", translation: "estable", type: "adjective", definition: "not changing", definitionEs: "sin cambios", example: "Growth has been steady.", exampleEs: "El crecimiento ha sido estable.", related: [], difficulty: 1 },
          { id: "l6t8_a2", word: "sharp", translation: "brusco", type: "adjective", definition: "sudden and large", definitionEs: "repentino y grande", example: "There was a sharp decline.", exampleEs: "Hubo una caída brusca.", related: [], difficulty: 1 },
          { id: "l6t8_a3", word: "gradual", translation: "gradual", type: "adjective", definition: "slow and steady", definitionEs: "lento y constante", example: "We saw a gradual increase.", exampleEs: "Vimos un aumento gradual.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l6t8_e1", word: "went up/down by X%", translation: "subió/bajó un X%", type: "expression", definition: "quantifying change", definitionEs: "cuantificando cambio", example: "Sales went up by 15%.", exampleEs: "Las ventas subieron un 15%.", related: [], difficulty: 1 },
          { id: "l6t8_e2", word: "reached a peak/high", translation: "alcanzó un máximo", type: "expression", definition: "at the highest point", definitionEs: "en el punto más alto", example: "Demand reached a peak in summer.", exampleEs: "La demanda alcanzó un máximo en verano.", related: [], difficulty: 1 },
          { id: "l6t8_e3", word: "hit a low", translation: "tocó un mínimo", type: "expression", definition: "at the lowest point", definitionEs: "en el punto más bajo", example: "Prices hit a low in January.", exampleEs: "Los precios tocaron un mínimo en enero.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l6t8_adv1", word: "dramatically", translation: "dramáticamente", type: "adverb", definition: "in a large and sudden way", definitionEs: "de manera grande y repentina", example: "Costs fell dramatically.", exampleEs: "Los costos cayeron dramáticamente.", related: [], difficulty: 1 },
          { id: "l6t8_adv2", word: "gradually", translation: "gradualmente", type: "adverb", definition: "slowly over time", definitionEs: "lentamente con el tiempo", example: "Sales gradually increased.", exampleEs: "Las ventas aumentaron gradualmente.", related: [], difficulty: 1 },
          { id: "l6t8_adv3", word: "slightly", translation: "ligeramente", type: "adverb", definition: "by a small amount", definitionEs: "por una cantidad pequeña", example: "Profits rose slightly.", exampleEs: "Las ganancias subieron ligeramente.", related: [], difficulty: 1 },
          { id: "l6t8_adv4", word: "significantly", translation: "significativamente", type: "adverb", definition: "in an important way", definitionEs: "de manera importante", example: "Revenue increased significantly.", exampleEs: "Los ingresos aumentaron significativamente.", related: [], difficulty: 1 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t8_cm1",
          wrong: "The sales increased very much.",
          correct: "The sales increased significantly/dramatically.",
          explanation: "In business contexts, use specific adverbs: 'significantly', 'dramatically', 'sharply', not 'very much'.",
          explanationEs: "En contextos de negocios, usa adverbios específicos: 'significantly', 'dramatically', 'sharply', no 'very much'.",
          category: "vocabulary"
        },
        {
          id: "l6t8_cm2",
          wrong: "There was an increase of sales.",
          correct: "There was an increase in sales.",
          explanation: "Use 'increase IN' not 'increase OF' when talking about the area that increased.",
          explanationEs: "Usa 'increase IN' no 'increase OF' cuando hablas del área que aumentó.",
          category: "grammar"
        },
        {
          id: "l6t8_cm3",
          wrong: "Sales rised by 20%.",
          correct: "Sales rose by 20%.",
          explanation: "'Rise' is irregular: rise - rose - risen. 'Rised' doesn't exist.",
          explanationEs: "'Rise' es irregular: rise - rose - risen. 'Rised' no existe.",
          category: "grammar"
        },
        {
          id: "l6t8_cm4",
          wrong: "The price has been fallen.",
          correct: "The price has fallen. / The price fell.",
          explanation: "'Fall' is intransitive (it doesn't take passive voice). Use 'has fallen' or 'fell', not 'has been fallen'.",
          explanationEs: "'Fall' es intransitivo (no lleva voz pasiva). Usa 'has fallen' o 'fell', no 'has been fallen'.",
          category: "grammar"
        },
        {
          id: "l6t8_cm5",
          wrong: "Sales increased to 20%.",
          correct: "Sales increased by 20%. / Sales increased to $20 million.",
          explanation: "'Increase BY' = the percentage of change. 'Increase TO' = the new level reached.",
          explanationEs: "'Increase BY' = el porcentaje de cambio. 'Increase TO' = el nuevo nivel alcanzado.",
          category: "usage"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con el verbo correcto en la forma apropiada:",
          items: [
            { sentence: "Sales ___ (rise) by 15% last quarter.", answer: "rose", hint: "pasado simple de 'rise'" },
            { sentence: "Costs have ___ (fall) significantly this year.", answer: "fallen", hint: "participio de 'fall'" },
            { sentence: "Demand is expected to ___ (increase) next month.", answer: "increase", hint: "infinitivo sin 'to'" },
            { sentence: "The market has been ___ (fluctuate) all week.", answer: "fluctuating", hint: "present perfect continuous" },
            { sentence: "Prices ___ (remain) stable throughout the year.", answer: "remained/have remained", hint: "pasado o present perfect" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma usando la estructura indicada:",
          items: [
            { original: "Sales rose sharply. (noun)", transformed: "There was a sharp rise in sales." },
            { original: "Costs fell dramatically. (noun)", transformed: "There was a dramatic fall in costs." },
            { original: "There was a gradual increase in demand. (verb)", transformed: "Demand increased gradually." },
            { original: "Prices have fluctuated. (noun)", transformed: "There have been fluctuations in prices." },
            { original: "There was a slight decline in profits. (verb)", transformed: "Profits declined slightly." }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica los adverbios por grado de cambio:",
          categories: [
            { name: "Cambio pequeño", items: ["slightly", "marginally", "a little", "somewhat", "modestly"] },
            { name: "Cambio moderado", items: ["gradually", "steadily", "moderately", "consistently"] },
            { name: "Cambio grande", items: ["dramatically", "sharply", "significantly", "considerably", "substantially"] },
            { name: "Cambio extremo", items: ["spectacularly", "enormously", "massively", "exponentially"] }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa la descripción del gráfico:",
          items: [
            { sentence: "Between January and March, sales ___ steadily from $10M to $12M.", answer: "rose/increased/grew", hint: "aumento" },
            { sentence: "In April, there was a ___ decline to $8M.", answer: "sharp/dramatic/significant", hint: "caída grande" },
            { sentence: "From May to July, sales ___ around $9M.", answer: "remained/stayed/hovered", hint: "estabilidad" },
            { sentence: "Sales ___ a peak of $15M in August.", answer: "reached/hit", hint: "máximo" },
            { sentence: "By December, they had ___ to $11M.", answer: "fallen/dropped/declined", hint: "bajada" }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentando resultados trimestrales",
        dialogue: [
          { speaker: "Manager", text: "Let me walk you through our Q3 results.", translation: "Permítanme explicarles nuestros resultados del Q3." },
          { speaker: "Manager", text: "As you can see from the graph, sales increased steadily throughout July and August.", translation: "Como pueden ver en el gráfico, las ventas aumentaron constantemente durante julio y agosto." },
          { speaker: "Analyst", text: "That's impressive. What was the overall percentage increase?", translation: "Es impresionante. ¿Cuál fue el aumento porcentual general?" },
          { speaker: "Manager", text: "Sales rose by approximately 25%, from $4M to $5M.", translation: "Las ventas subieron aproximadamente un 25%, de $4M a $5M." },
          { speaker: "Analyst", text: "And what about September?", translation: "¿Y qué hay de septiembre?" },
          { speaker: "Manager", text: "Unfortunately, there was a sharp decline in the first week due to supply chain issues.", translation: "Desafortunadamente, hubo una caída brusca en la primera semana debido a problemas de cadena de suministro." },
          { speaker: "Manager", text: "However, sales recovered and reached a peak of $6M by mid-September.", translation: "Sin embargo, las ventas se recuperaron y alcanzaron un pico de $6M a mediados de septiembre." },
          { speaker: "Analyst", text: "How do costs compare?", translation: "¿Cómo se comparan los costos?" },
          { speaker: "Manager", text: "Costs remained relatively stable, fluctuating between $2M and $2.5M.", translation: "Los costos permanecieron relativamente estables, fluctuando entre $2M y $2.5M." },
          { speaker: "Analyst", text: "So profit margins improved significantly?", translation: "¿Entonces los márgenes de ganancia mejoraron significativamente?" },
          { speaker: "Manager", text: "Exactly. Profit margins climbed from 50% to 58% over the quarter.", translation: "Exactamente. Los márgenes de ganancia subieron de 50% a 58% durante el trimestre." }
        ],
        keyPhrases: [
          "As you can see from the graph...",
          "Sales increased steadily...",
          "Sales rose by approximately 25%...",
          "There was a sharp decline...",
          "Sales recovered and reached a peak of...",
          "remained relatively stable, fluctuating between...",
          "improved significantly",
          "climbed from... to..."
        ]
      },
      pronunciationFocus: {
        title: "Vocabulario de tendencias",
        sounds: [
          { sound: "Increase /ɪnˈkriːs/ (v) vs /ˈɪnkriːs/ (n)", examples: ["Sales increased (v)", "An increase in sales (n)"], tip: "Verbo: acento en 2ª sílaba. Sustantivo: acento en 1ª" },
          { sound: "Decrease /dɪˈkriːs/ (v) vs /ˈdiːkriːs/ (n)", examples: ["Costs decreased (v)", "A decrease in costs (n)"], tip: "Mismo patrón que 'increase'" },
          { sound: "Fluctuate /ˈflʌktʃueɪt/", examples: ["Prices fluctuate", "fluctuations"], tip: "3 sílabas, acento en primera" }
        ],
        commonErrors: [
          { word: "significantly", wrong: "/sig-ni-fi-CANT-ly/", right: "/sɪɡˈnɪfɪkəntli/", note: "Acento en segunda sílaba" },
          { word: "dramatically", wrong: "/dra-MA-ti-cally/", right: "/drəˈmætɪkli/", note: "Acento en segunda sílaba" },
          { word: "gradually", wrong: "/GRA-du-a-lly/", right: "/ˈɡrædʒuəli/", note: "'Du' suena /dʒu/" }
        ]
      },
      culturalNote: {
        title: "Presentando datos en culturas anglosajonas",
        content: "En presentaciones de negocios anglosajonas, se valora la precisión con números: '15%' es mejor que 'a lot'. Sin embargo, evita parecer que estás presumiendo - usa lenguaje cauteloso como 'approximately', 'roughly', 'about' cuando no tienes cifras exactas. Los gráficos deben ser claros y no sobrecargados. En UK/US es común usar 'Q1, Q2, Q3, Q4' para trimestres y 'YoY' (year over year), 'MoM' (month over month) para comparaciones. La frase 'The numbers speak for themselves' se usa cuando los resultados son muy buenos.",
        examples: [
          "'Ballpark figure' - número aproximado",
          "'The bottom line' - el resultado final (ganancias)",
          "'Year-to-date (YTD)' - acumulado del año",
          "'On track' - según lo planeado",
          "'Exceeded expectations' - superó expectativas"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Sales increased ___ 20%' - la preposición correcta es:",
          options: ["to", "by", "with", "at"],
          correctAnswer: 1,
          explanation: "'Increase BY' indica el porcentaje de cambio. 'Increase TO' indica el nivel final."
        },
        {
          question: "El pasado de 'rise' es:",
          options: ["rised", "rose", "risen", "raised"],
          correctAnswer: 1,
          explanation: "'Rise' es irregular: rise - rose - risen."
        },
        {
          question: "'There was a sharp ___' - forma nominal de 'decline':",
          options: ["declining", "declined", "decline", "declination"],
          correctAnswer: 2,
          explanation: "'Decline' puede ser verbo o sustantivo: 'a sharp decline'."
        },
        {
          question: "'Fluctuate' significa:",
          options: ["subir constantemente", "bajar constantemente", "cambiar irregularmente", "permanecer estable"],
          correctAnswer: 2,
          explanation: "'Fluctuate' = variar irregularmente, ir arriba y abajo."
        },
        {
          question: "Para un cambio pequeño, usamos:",
          options: ["dramatically", "sharply", "slightly", "substantially"],
          correctAnswer: 2,
          explanation: "'Slightly' indica un cambio pequeño. Los otros indican cambios grandes."
        },
        {
          question: "'The price has been fallen' es:",
          options: ["correcta", "incorrecta - 'fall' no lleva voz pasiva", "formal", "British English"],
          correctAnswer: 1,
          explanation: "'Fall' es intransitivo. Di 'has fallen' o 'fell', no 'has been fallen'."
        }
      ],
      guidedProduction: [
        {
          task: "Describir un gráfico de ventas",
          prompt: "Describe las ventas de una empresa ficticia durante un año: empezaron en $1M, subieron a $1.5M en verano, cayeron a $1.2M en otoño, y terminaron en $1.8M.",
          sampleAnswer: "At the beginning of the year, sales stood at $1 million. During the spring months, they increased gradually. By summer, sales had risen significantly to $1.5 million, reaching a peak in July. However, in autumn, there was a moderate decline, with sales falling to $1.2 million. Fortunately, the fourth quarter saw a dramatic recovery. Sales climbed steadily and reached $1.8 million by December, representing an 80% increase year-over-year.",
          hints: ["Usa variedad de verbos: stood at, increased, rose, fell, climbed", "Incluye adverbios: gradually, significantly, steadily", "Menciona puntos clave: peak, decline, recovery"]
        },
        {
          task: "Comparar dos períodos",
          prompt: "Compara el rendimiento de Q1 vs Q2: Q1 tuvo ventas de $500K, Q2 tuvo $750K. Los costos fueron estables en $300K ambos trimestres.",
          sampleAnswer: "Comparing Q1 and Q2, we can see significant improvement. In Q1, sales totaled $500,000. By Q2, sales had increased substantially to $750,000, representing a 50% rise quarter-over-quarter.\n\nMeanwhile, costs remained stable at approximately $300,000 throughout both quarters. As a result, profit margins improved dramatically - from 40% in Q1 to 60% in Q2.\n\nThis positive trend suggests that our cost control measures are working effectively while sales growth continues.",
          hints: ["Usa 'comparing... we can see'", "Calcula cambios porcentuales", "Conecta datos: 'As a result...', 'Meanwhile...'"]
        },
        {
          task: "Explicar una tendencia negativa",
          prompt: "Explica por qué las ventas de una tienda cayeron un 30% este año.",
          sampleAnswer: "This year, our store sales have declined significantly, falling by approximately 30% compared to last year. There are several factors that have contributed to this downward trend.\n\nFirstly, online shopping has increased dramatically, causing foot traffic to drop sharply. Secondly, there was a gradual decline in consumer confidence due to economic uncertainty.\n\nHowever, it's worth noting that the decline has been slowing recently. In the last quarter, sales fell by only 5%, compared to 15% in Q1. This suggests the situation may be stabilizing.\n\nTo address this trend, we plan to expand our online presence significantly.",
          hints: ["Usa lenguaje causal: 'contributed to', 'due to'", "Muestra matices: 'has been slowing'", "Termina con soluciones o perspectiva positiva"]
        },
        {
          task: "Presentación ejecutiva",
          prompt: "Prepara una breve presentación de 5-6 oraciones sobre el crecimiento de usuarios de una app: Enero 10K, Marzo 50K, Junio 200K, problemas en Agosto (bajó a 150K), recuperación en Diciembre (500K).",
          sampleAnswer: "Good morning, everyone. I'm pleased to present our user growth figures for this year.\n\nIn January, we launched with 10,000 users. By March, this had increased fivefold to 50,000 users. Growth continued to accelerate, and by June we had reached 200,000 users.\n\nIn August, we experienced some technical difficulties, which caused user numbers to decline temporarily to 150,000. However, once these issues were resolved, growth resumed rapidly.\n\nI'm delighted to report that we ended the year with 500,000 users - a remarkable 50-fold increase from our January launch. The figures speak for themselves.",
          hints: ["Empieza con saludo profesional", "Usa conectores temporales", "'Fivefold/50-fold' para multiplicadores", "Termina con conclusión impactante"]
        }
      ],
      connectionToPrevious: "En causa y efecto, aprendiste a explicar razones: 'Due to increased demand, sales rose...' Ahora dominarás el vocabulario específico de tendencias.",
      connectionToNext: "En la siguiente lección sobre modales de deducción, analizarás tendencias: 'Sales must have increased due to...'"
    },
    {
      id: 9,
      title: "Modal Verbs for Deduction",
      titleEs: "Modales para Deducción",
      introduction: {
        title: "🔍 Modales para Deducción",
        explanation: "Los modales pueden expresar qué tan seguro estás sobre algo. Aprenderás a hacer deducciones sobre el presente y el pasado.",
        keyPoints: [
          "Presente - seguro (positivo): 'must be' - 'She must be tired' (estoy seguro)",
          "Presente - seguro (negativo): 'can't be' - 'He can't be at home' (es imposible)",
          "Presente - posible: 'might/may/could be' - 'It might be true' (es posible)",
          "Pasado - seguro: 'must have + pp' - 'She must have left' (estoy seguro de que se fue)",
          "Pasado - imposible: 'can't have + pp' - 'He can't have said that' (es imposible)"
        ],
        examples: [
          { english: "She's not answering. She must be in a meeting.", spanish: "No contesta. Debe estar en una reunión.", explanation: "Deducción presente - seguro" },
          { english: "He can't be the thief. He was with me.", spanish: "No puede ser el ladrón. Estaba conmigo.", explanation: "Deducción presente - imposible" },
          { english: "They might have missed their flight.", spanish: "Puede que hayan perdido su vuelo.", explanation: "Deducción pasado - posible" }
        ],
        tips: [
          "💡 'Must be' = 90% seguro, 'Might/May be' = 50%, 'Can't be' = 0%",
          "💡 Para el pasado siempre usa 'have + participio pasado'",
          "💡 'Could have' también puede expresar posibilidad en el pasado"
        ],
        whenToUse: [
          'Al hacer deducciones lógicas: "She must be at home - her car is in the driveway"',
          'Para el pasado con evidencia: "They must have left early - the office is empty"',
          'Cuando expresas duda: "He might be in a meeting"',
          'Para negar posibilidad: "That can\'t be right - I just saw him"'
        ],
        whenNotToUse: [
          '"Must" para obligación en pasado → "had to": "I had to go" (NO "I must have gone" = deducción, no obligación)',
          'No uses "mustn\'t" para deducción negativa → "can\'t": "That can\'t be true" (NO "That mustn\'t be true")',
          'Evita "may" para certeza alta → "must": "She must be tired" (NO "She may be tired" si es obvio)'
        ]
      },
      objectives: ["Hacer deducciones sobre el presente", "Hacer deducciones sobre el pasado", "Expresar grados de certeza"],
      grammarTheoryIds: ["b1-modal-deduction"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l6t9_n1", word: "deduction", translation: "deducción", type: "noun", definition: "a conclusion reached by reasoning", definitionEs: "una conclusión alcanzada por razonamiento", example: "That's a logical deduction.", exampleEs: "Esa es una deducción lógica.", related: ["deduce"], difficulty: 2 },
          { id: "l6t9_n2", word: "certainty", translation: "certeza", type: "noun", definition: "being completely sure", definitionEs: "estar completamente seguro", example: "I can say with certainty.", exampleEs: "Puedo decir con certeza.", related: ["certain"], difficulty: 2 },
          { id: "l6t9_n3", word: "assumption", translation: "suposición", type: "noun", definition: "something accepted as true", definitionEs: "algo aceptado como verdad", example: "That's just an assumption.", exampleEs: "Eso es solo una suposición.", related: ["assume"], difficulty: 2 },
        ],
        verbs: [
          { id: "l6t9_v1", word: "deduce", translation: "deducir", type: "verb", definition: "to reach a conclusion", definitionEs: "llegar a una conclusión", example: "I can deduce from the evidence.", exampleEs: "Puedo deducir de la evidencia.", related: [], difficulty: 2 },
          { id: "l6t9_v2", word: "conclude", translation: "concluir", type: "verb", definition: "to decide after thinking", definitionEs: "decidir después de pensar", example: "I concluded that he was lying.", exampleEs: "Concluí que estaba mintiendo.", related: ["conclusion"], difficulty: 2 },
          { id: "l6t9_v3", word: "assume", translation: "asumir", type: "verb", definition: "to accept without proof", definitionEs: "aceptar sin prueba", example: "I assumed she knew.", exampleEs: "Asumí que ella sabía.", related: ["assumption"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l6t9_a1", word: "obvious", translation: "obvio", type: "adjective", definition: "easy to see or understand", definitionEs: "fácil de ver o entender", example: "It's obvious that he's lying.", exampleEs: "Es obvio que está mintiendo.", related: [], difficulty: 1 },
          { id: "l6t9_a2", word: "apparent", translation: "aparente", type: "adjective", definition: "seeming to be true", definitionEs: "pareciendo ser verdad", example: "For no apparent reason.", exampleEs: "Sin razón aparente.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l6t9_e1", word: "must be / must have been", translation: "debe ser / debe haber sido", type: "expression", definition: "certain deduction", definitionEs: "deducción cierta", example: "She must have forgotten.", exampleEs: "Ella debe haber olvidado.", related: [], difficulty: 1 },
          { id: "l6t9_e2", word: "can't be / can't have been", translation: "no puede ser / no puede haber sido", type: "expression", definition: "impossible", definitionEs: "imposible", example: "That can't be true.", exampleEs: "Eso no puede ser verdad.", related: [], difficulty: 1 },
          { id: "l6t9_e3", word: "might/may/could be", translation: "podría ser", type: "expression", definition: "possible", definitionEs: "posible", example: "It might be a mistake.", exampleEs: "Podría ser un error.", related: [], difficulty: 1 },
          { id: "l6t9_e4", word: "might/may/could have + pp", translation: "podría haber + participio", type: "expression", definition: "past possibility", definitionEs: "posibilidad pasada", example: "She could have taken a taxi.", exampleEs: "Ella podría haber tomado un taxi.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t9_cm1",
          wrong: "She must to be tired.",
          correct: "She must be tired.",
          explanation: "After 'must' (modal) use the base verb without 'to'. NOT 'must to be'.",
          explanationEs: "Después de 'must' (modal) va el verbo base sin 'to'. NO 'must to be'.",
          category: "grammar"
        },
        {
          id: "l6t9_cm2",
          wrong: "He must not be at home. (meaning 'impossible')",
          correct: "He can't be at home. (impossible) / He must not be at home. (prohibition)",
          explanation: "'Can't be' = impossible (deduction). 'Must not' = prohibition. They are different.",
          explanationEs: "'Can't be' = imposible (deducción). 'Must not' = prohibición. Son diferentes.",
          category: "grammar"
        },
        {
          id: "l6t9_cm3",
          wrong: "She can be at the office.",
          correct: "She might/could/may be at the office.",
          explanation: "For possibility, use 'might/may/could be', not 'can be'. 'Can' is for ability or permission.",
          explanationEs: "Para posibilidad, usa 'might/may/could be', no 'can be'. 'Can' es para habilidad o permiso.",
          category: "grammar"
        },
        {
          id: "l6t9_cm4",
          wrong: "He must have forget to call.",
          correct: "He must have forgotten to call.",
          explanation: "After 'have' always use the PAST PARTICIPLE: 'must have forgotten', 'might have gone'.",
          explanationEs: "Después de 'have' siempre va el PARTICIPIO PASADO: 'must have forgotten', 'might have gone'.",
          category: "grammar"
        },
        {
          id: "l6t9_cm5",
          wrong: "They might went to the party.",
          correct: "They might have gone to the party.",
          explanation: "For deductions about the past: modal + HAVE + past participle.",
          explanationEs: "Para deducciones sobre el pasado: modal + HAVE + participio pasado.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con el modal correcto (must, can't, might/may/could):",
          items: [
            { sentence: "She's not answering. She ___ be in a meeting. (90% sure)", answer: "must", hint: "casi seguro" },
            { sentence: "He ___ be the thief. He was with me all day. (0% - impossible)", answer: "can't", hint: "imposible" },
            { sentence: "I'm not sure where Tom is. He ___ be at the gym. (50%)", answer: "might/may/could", hint: "posible" },
            { sentence: "Look at those dark clouds. It ___ rain soon. (90% sure)", answer: "must", hint: "muy probable" },
            { sentence: "She ___ be only 20. She looks much older. (impossible)", answer: "can't", hint: "no puede ser" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma las deducciones del presente al pasado:",
          items: [
            { original: "She must be tired. (yesterday)", transformed: "She must have been tired." },
            { original: "He can't be at home. (last night)", transformed: "He can't have been at home." },
            { original: "They might be lost. (when they arrived late)", transformed: "They might have been lost. / They might have gotten lost." },
            { original: "It could be a mistake. (what happened)", transformed: "It could have been a mistake." },
            { original: "She may be sick. (why she was absent)", transformed: "She may have been sick." }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica las expresiones por nivel de certeza:",
          categories: [
            { name: "Casi seguro (90%+)", items: ["must be", "must have been", "has to be", "has got to be"] },
            { name: "Posible (50%)", items: ["might be", "may be", "could be", "might have been", "could have been"] },
            { name: "Imposible (0%)", items: ["can't be", "couldn't be", "can't have been", "couldn't have been"] }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa las deducciones sobre el pasado:",
          items: [
            { sentence: "The door is open. Someone ___ have left it unlocked. (sure)", answer: "must", hint: "casi seguro" },
            { sentence: "She ___ have received my message. Her phone was off. (impossible)", answer: "can't/couldn't", hint: "imposible" },
            { sentence: "I can't find my keys. I ___ have left them at the office. (possible)", answer: "might/may/could", hint: "es posible" },
            { sentence: "He passed the exam easily. He ___ have studied hard. (certain)", answer: "must", hint: "conclusión lógica" },
            { sentence: "They're late. They ___ have missed the train. (possible)", answer: "might/may/could", hint: "posibilidad" }
          ]
        }
      ],
      modelDialogue: {
        title: "Investigando un misterio en la oficina",
        dialogue: [
          { speaker: "Anna", text: "Someone ate my lunch from the fridge!", translation: "¡Alguien se comió mi almuerzo del refrigerador!" },
          { speaker: "Tom", text: "Really? Who do you think it could have been?", translation: "¿En serio? ¿Quién crees que pudo haber sido?" },
          { speaker: "Anna", text: "It must have been someone from our floor. The fridge is in our kitchen.", translation: "Debe haber sido alguien de nuestro piso. El refrigerador está en nuestra cocina." },
          { speaker: "Tom", text: "Could it have been John? He's always hungry.", translation: "¿Podría haber sido John? Siempre tiene hambre." },
          { speaker: "Anna", text: "No, it can't have been John. He's been on vacation all week.", translation: "No, no puede haber sido John. Ha estado de vacaciones toda la semana." },
          { speaker: "Tom", text: "What about the new intern?", translation: "¿Qué hay del nuevo pasante?" },
          { speaker: "Anna", text: "It might have been him. He might not have known it was someone else's food.", translation: "Podría haber sido él. Puede que no haya sabido que era la comida de alguien más." },
          { speaker: "Tom", text: "Look, there are crumbs on Mark's desk!", translation: "¡Mira, hay migajas en el escritorio de Mark!" },
          { speaker: "Anna", text: "It must be him then! He must have eaten it during the meeting.", translation: "¡Entonces debe ser él! Debe habérselo comido durante la reunión." },
          { speaker: "Tom", text: "Well, he can't have known it was yours. Maybe you should label your food.", translation: "Bueno, él no pudo haber sabido que era tuyo. Quizás deberías etiquetar tu comida." },
          { speaker: "Anna", text: "You're right. It could have been an honest mistake.", translation: "Tienes razón. Podría haber sido un error honesto." }
        ],
        keyPhrases: [
          "Who do you think it could have been?",
          "It must have been someone from...",
          "Could it have been...?",
          "It can't have been... He's been...",
          "It might have been him",
          "He might not have known...",
          "It must be him then!",
          "He must have eaten it...",
          "He can't have known...",
          "It could have been an honest mistake"
        ]
      },
      pronunciationFocus: {
        title: "Modales en forma reducida",
        sounds: [
          { sound: "Must have → /ˈmʌstəv/ 'musta'", examples: ["He musta gone", "She musta known"], tip: "En habla rápida, 'have' suena como /əv/" },
          { sound: "Can't have → /kɑːntəv/ 'canta'", examples: ["She canta done that", "They canta known"], tip: "La 't' de 'can't' se une con 'have'" },
          { sound: "Could have → /ˈkʊdəv/ 'coulda'", examples: ["I coulda been", "You coulda told me"], tip: "'Have' reducido es muy común" }
        ],
        commonErrors: [
          { word: "must have", wrong: "/must hav/", right: "/ˈmʌstəv/", note: "'Have' casi nunca se pronuncia completo después de modal" },
          { word: "might have", wrong: "/mait hav/", right: "/ˈmaɪtəv/", note: "Suena como 'mighta'" },
          { word: "should have", wrong: "/ʃuːd hæv/", right: "/ˈʃʊdəv/", note: "Suena como 'shoulda'" }
        ]
      },
      culturalNote: {
        title: "Evitando acusaciones directas",
        content: "En la comunicación anglosajona, especialmente en entornos profesionales, se evita hacer acusaciones directas. En lugar de decir 'You did this!', se prefiere el uso de modales de deducción: 'This must have been done by mistake' o 'Someone might have forgotten to...'. Esta forma de hablar es considerada más profesional y evita confrontaciones. También es común usar la voz pasiva con modales: 'The file must have been deleted accidentally' en lugar de señalar a alguien específico.",
        examples: [
          "'There must have been some misunderstanding' - evita culpar",
          "'The email might not have gone through' - da el beneficio de la duda",
          "'This could have been overlooked' - suaviza la crítica",
          "'Someone must have made an error' - impersonal",
          "'It can't have been intentional' - asume buenas intenciones"
        ]
      },
      consolidationQuiz: [
        {
          question: "Para expresar que algo es casi seguro, usamos:",
          options: ["can be", "must be", "might be", "could be"],
          correctAnswer: 1,
          explanation: "'Must be' expresa certeza alta (90%+). 'Might/could' son solo posibilidad."
        },
        {
          question: "Para expresar imposibilidad, usamos:",
          options: ["must not be", "can't be", "might not be", "shouldn't be"],
          correctAnswer: 1,
          explanation: "'Can't be' = imposible. 'Must not' es prohibición, no deducción."
        },
        {
          question: "Forma correcta de deducción pasada:",
          options: ["He must went", "He must have went", "He must have gone", "He must to have gone"],
          correctAnswer: 2,
          explanation: "Modal + have + PARTICIPIO PASADO: 'must have gone'."
        },
        {
          question: "'She can be at home' para posibilidad es:",
          options: ["correcta", "incorrecta - usa might/could", "formal", "British English"],
          correctAnswer: 1,
          explanation: "Para posibilidad usa 'might/may/could be', no 'can be'."
        },
        {
          question: "'Must have' en habla rápida suena como:",
          options: ["/mast hæv/", "/mʌstəv/ (musta)", "/mʌst hav/", "/məst əv/"],
          correctAnswer: 1,
          explanation: "En habla natural, 'have' se reduce a /əv/, sonando como 'musta'."
        },
        {
          question: "'It can't have been John - he was with me' significa:",
          options: ["Prohibición", "Posibilidad", "Es imposible que haya sido John", "John no debió hacerlo"],
          correctAnswer: 2,
          explanation: "'Can't have been' = es imposible que haya sido (deducción lógica)."
        }
      ],
      guidedProduction: [
        {
          task: "Explicar una situación misteriosa",
          prompt: "Tu compañero de cuarto llegó tarde anoche y estaba muy feliz. Especula por qué usando diferentes niveles de certeza.",
          sampleAnswer: "My roommate came home very late last night, and he was extremely happy. He must have had a great time wherever he went. He might have been on a date - he's been talking about this girl from work. It could have been a surprise party, too, since his birthday is next week. It can't have been a work event because he wasn't dressed formally. He may have won some money at the casino - he does like to gamble occasionally. Whatever happened, it must have been something special because I've never seen him so happy.",
          hints: ["Usa 'must have' para lo más probable", "Usa 'might/could have' para posibilidades", "Usa 'can't have' para eliminar opciones"]
        },
        {
          task: "Analizar pistas",
          prompt: "Encuentras estas pistas en tu casa: puerta abierta, comida de perro vacía, correa desaparecida. ¿Qué pudo haber pasado?",
          sampleAnswer: "Based on the evidence, I can make some deductions. The dog's bowl is empty, and the leash is missing. Someone must have taken the dog for a walk. The door is open, so they can't have gone far - they must be planning to come back soon.\n\nIt must have been my brother - he's the only other person with a key. It could have been my neighbor, but she would have closed the door. The dog might have been hungry, which is why my brother decided to take him out. He can't have forgotten to close the door on purpose - he must have left in a hurry.",
          hints: ["Analiza cada pista", "Deduce quién: 'It must have been...'", "Elimina posibilidades: 'It can't have been...'"]
        },
        {
          task: "Especular sobre el pasado",
          prompt: "Un colega que siempre llega temprano llegó una hora tarde hoy y parecía estresado. Especula qué pudo haber pasado.",
          sampleAnswer: "Tom, who is always punctual, arrived an hour late today looking very stressed. Something must have happened to him.\n\nHe might have been stuck in traffic - there was an accident on the highway this morning. He could have had car trouble, since his car is quite old. It can't have been an alarm problem because he mentioned having multiple alarms.\n\nHe may have had a family emergency - he looked worried, not just annoyed. His child might have been sick. He must not have been able to call because reception is bad in some areas.\n\nWhatever happened, it must have been serious. He's never late.",
          hints: ["Establece el contexto primero", "Da múltiples posibilidades", "Concluye con lo más probable"]
        },
        {
          task: "Resolver un problema",
          prompt: "El proyecto que enviaste por email nunca llegó al cliente. Especula qué pudo haber salido mal.",
          sampleAnswer: "The client says they never received my project email. Let me analyze what might have happened.\n\nFirst, I must have sent it to the correct address - I copied it directly from their business card. However, I might have made a typo. I could have accidentally added an extra letter or missed one.\n\nThe email must have gone through on my end because I have it in my 'Sent' folder. It can't have been a server problem because all my other emails were delivered.\n\nIt might have gone to their spam folder - my email has attachments which can trigger spam filters. The file might have been too large, though that usually generates an error message.\n\nThe client's email system could have blocked it. They might have a strict firewall that filters external emails with attachments. I should resend it and call to confirm receipt.",
          hints: ["Enumera posibilidades técnicas", "Usa 'can't have' para descartar", "Ofrece solución al final"]
        }
      ],
      connectionToPrevious: "En la lección de tendencias, viste datos que requieren explicación: 'Sales dropped dramatically - it must have been due to...'",
      connectionToNext: "En la siguiente lección sobre quejas, usarás modales: 'This can't have been intentional. It must have been a mistake.'"
    },
    {
      id: 10,
      title: "Handling Complaints",
      titleEs: "Manejando Quejas",
      introduction: {
        title: "😤 Manejando Quejas Profesionalmente",
        explanation: "Saber manejar quejas es una habilidad valiosa. Aprenderás a expresar quejas educadamente y a responder de manera profesional.",
        keyPoints: [
          "Hacer una queja: 'I'm afraid there's a problem with...', 'I'd like to make a complaint about...'",
          "Mostrar empatía: 'I understand your frustration', 'I apologize for the inconvenience'",
          "Ofrecer solución: 'Let me see what I can do', 'I'll look into this immediately'",
          "Cerrar: 'Is there anything else I can help you with?'"
        ],
        examples: [
          { english: "I'm afraid the product I received is damaged.", spanish: "Me temo que el producto que recibí está dañado.", explanation: "Haciendo queja educada" },
          { english: "I completely understand your frustration.", spanish: "Entiendo completamente su frustración.", explanation: "Mostrando empatía" },
          { english: "I'll issue a refund right away.", spanish: "Emitiré un reembolso de inmediato.", explanation: "Ofreciendo solución" }
        ],
        tips: [
          "💡 Nunca digas 'That's not my fault' - siempre ofrece ayuda",
          "💡 Usa 'I understand' en lugar de 'I know' - suena más empático",
          "💡 Ofrece múltiples soluciones cuando sea posible"
        ],
        whenToUse: [
          'En servicio al cliente: "I\'m sorry to hear that. Let me look into it"',
          'Al hacer quejas formales: "I\'m afraid I have to complain about the quality"',
          'En negocios B2B: "We\'d like to raise a concern about the delivery"',
          'Para ofrecer soluciones: "Would you like a refund or a replacement?"'
        ],
        whenNotToUse: [
          'Evita "That\'s not my fault" → "I understand your frustration. Let me help resolve this"',
          'No seas defensivo: "I\'m sorry" (NO "It\'s not our policy" como primera respuesta)',
          'En quejas entre amigos → sé más directo: "This isn\'t working" (NO "I\'d like to formally raise a concern")'
        ]
      },
      objectives: ["Hacer quejas educadamente", "Responder a quejas profesionalmente", "Ofrecer soluciones"],
      grammarTheoryIds: ["b2-emphasis-cleft-sentences"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l6t10_n1", word: "complaint", translation: "queja", type: "noun", definition: "expression of dissatisfaction", definitionEs: "expresión de insatisfacción", example: "I'd like to make a complaint.", exampleEs: "Me gustaría hacer una queja.", related: ["complain"], difficulty: 1 },
          { id: "l6t10_n2", word: "inconvenience", translation: "inconveniente", type: "noun", definition: "trouble caused to someone", definitionEs: "problema causado a alguien", example: "I apologize for the inconvenience.", exampleEs: "Me disculpo por el inconveniente.", related: [], difficulty: 1 },
          { id: "l6t10_n3", word: "refund", translation: "reembolso", type: "noun", definition: "money returned", definitionEs: "dinero devuelto", example: "I'd like a refund, please.", exampleEs: "Me gustaría un reembolso, por favor.", related: [], difficulty: 1 },
          { id: "l6t10_n4", word: "replacement", translation: "reemplazo", type: "noun", definition: "something given instead", definitionEs: "algo dado en lugar de", example: "Can I get a replacement?", exampleEs: "¿Puedo obtener un reemplazo?", related: ["replace"], difficulty: 1 },
          { id: "l6t10_n5", word: "compensation", translation: "compensación", type: "noun", definition: "something given for loss", definitionEs: "algo dado por pérdida", example: "Are you entitled to compensation?", exampleEs: "¿Tiene derecho a compensación?", related: ["compensate"], difficulty: 2 },
        ],
        verbs: [
          { id: "l6t10_v1", word: "complain", translation: "quejarse", type: "verb", definition: "to express dissatisfaction", definitionEs: "expresar insatisfacción", example: "I'd like to complain about the service.", exampleEs: "Me gustaría quejarme del servicio.", related: ["complaint"], difficulty: 1 },
          { id: "l6t10_v2", word: "apologize", translation: "disculparse", type: "verb", definition: "to say sorry", definitionEs: "decir perdón", example: "We apologize for the error.", exampleEs: "Nos disculpamos por el error.", related: ["apology"], difficulty: 1 },
          { id: "l6t10_v3", word: "resolve", translation: "resolver", type: "verb", definition: "to find a solution", definitionEs: "encontrar una solución", example: "Let's resolve this issue.", exampleEs: "Resolvamos este problema.", related: ["resolution"], difficulty: 1 },
          { id: "l6t10_v4", word: "compensate", translation: "compensar", type: "verb", definition: "to give something for a loss", definitionEs: "dar algo por una pérdida", example: "How will you compensate me?", exampleEs: "¿Cómo me compensarán?", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l6t10_a1", word: "dissatisfied", translation: "insatisfecho", type: "adjective", definition: "not happy with something", definitionEs: "no contento con algo", example: "I'm dissatisfied with the service.", exampleEs: "Estoy insatisfecho con el servicio.", related: [], difficulty: 1 },
          { id: "l6t10_a2", word: "unacceptable", translation: "inaceptable", type: "adjective", definition: "not good enough", definitionEs: "no suficientemente bueno", example: "This delay is unacceptable.", exampleEs: "Este retraso es inaceptable.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l6t10_e1", word: "I'm afraid there's a problem with...", translation: "Me temo que hay un problema con...", type: "expression", definition: "polite complaint intro", definitionEs: "intro de queja educada", example: "I'm afraid there's a problem with my order.", exampleEs: "Me temo que hay un problema con mi pedido.", related: [], difficulty: 1 },
          { id: "l6t10_e2", word: "I understand your frustration", translation: "Entiendo su frustración", type: "expression", definition: "showing empathy", definitionEs: "mostrando empatía", example: "I understand your frustration completely.", exampleEs: "Entiendo completamente su frustración.", related: [], difficulty: 1 },
          { id: "l6t10_e3", word: "Let me see what I can do", translation: "Déjeme ver qué puedo hacer", type: "expression", definition: "offering to help", definitionEs: "ofreciendo ayudar", example: "Let me see what I can do for you.", exampleEs: "Déjeme ver qué puedo hacer por usted.", related: [], difficulty: 1 },
          { id: "l6t10_e4", word: "I apologize for the inconvenience", translation: "Me disculpo por las molestias", type: "expression", definition: "formal apology", definitionEs: "disculpa formal", example: "I apologize for any inconvenience caused.", exampleEs: "Me disculpo por cualquier inconveniente causado.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t10_cm1",
          wrong: "I want to complain!",
          correct: "I'd like to raise a concern. / I'm afraid there's an issue with...",
          explanation: "'I want to complain!' sounds aggressive. Use more polite phrases to start.",
          explanationEs: "'I want to complain!' suena agresivo. Usa frases más educadas para empezar.",
          category: "usage"
        },
        {
          id: "l6t10_cm2",
          wrong: "That's not my problem.",
          correct: "I understand, let me see how I can help you.",
          explanation: "Never say it's not your problem. Always offer help or find someone who can.",
          explanationEs: "Nunca digas que no es tu problema. Siempre ofrece ayuda o busca a alguien que pueda.",
          category: "usage"
        },
        {
          id: "l6t10_cm3",
          wrong: "You should have checked before buying.",
          correct: "I can see how that would be frustrating. Let's see what we can do.",
          explanation: "Avoid blaming the customer. Show empathy and focus on solutions.",
          explanationEs: "Evita culpar al cliente. Muestra empatía y enfócate en soluciones.",
          category: "usage"
        },
        {
          id: "l6t10_cm4",
          wrong: "I'm sorry you feel that way.",
          correct: "I'm sorry for the inconvenience this has caused you.",
          explanation: "'Sorry you feel that way' sounds condescending. Apologize for the situation, not for their feelings.",
          explanationEs: "'Sorry you feel that way' suena condescendiente. Discúlpate por la situación, no por sus sentimientos.",
          category: "usage"
        },
        {
          id: "l6t10_cm5",
          wrong: "We can't do anything about it.",
          correct: "While we can't [X], what we CAN do is [Y]. / Let me explore some alternatives.",
          explanation: "Never close the door. Always offer some alternative or escalation.",
          explanationEs: "Nunca cierres la puerta. Siempre ofrece alguna alternativa o escalación.",
          category: "usage"
        }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Haz estas quejas más educadas:",
          items: [
            { original: "This product is defective!", transformed: "I'm afraid there seems to be an issue with this product." },
            { original: "Your service is terrible!", transformed: "I'm not entirely satisfied with the service I've received." },
            { original: "I want my money back!", transformed: "I'd like to discuss the possibility of a refund, please." },
            { original: "You people are incompetent!", transformed: "I've been having some difficulties and could really use some help." },
            { original: "This is unacceptable!", transformed: "I'm afraid this hasn't quite met my expectations." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa las respuestas empáticas:",
          items: [
            { sentence: "I completely ___ your frustration, and I'm here to help.", answer: "understand", hint: "mostrar empatía" },
            { sentence: "I'm truly ___ for the inconvenience this has caused you.", answer: "sorry", hint: "disculpa" },
            { sentence: "Let me ___ into this matter immediately.", answer: "look", hint: "acción" },
            { sentence: "I can see ___ that would be frustrating.", answer: "how", hint: "empatía" },
            { sentence: "Thank you for bringing this to our ___.", answer: "attention", hint: "agradecer" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica las frases por función:",
          categories: [
            { name: "Hacer una queja", items: ["I'm afraid there's a problem with...", "I'd like to raise a concern", "I'm not satisfied with...", "Could you help me with an issue?"] },
            { name: "Mostrar empatía", items: ["I understand your frustration", "I can see how that would be upsetting", "That must have been disappointing", "I appreciate your patience"] },
            { name: "Ofrecer solución", items: ["Let me see what I can do", "I'll look into this immediately", "What I can offer is...", "Would it help if...?"] },
            { name: "Cerrar positivamente", items: ["Is there anything else I can help with?", "Thank you for your understanding", "Please don't hesitate to contact us", "We value your feedback"] }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa el diálogo de manejo de queja:",
          items: [
            { sentence: "Customer: This isn't what I ordered! Agent: I'm ___ to hear that. Let me check...", answer: "sorry", hint: "disculpa inicial" },
            { sentence: "Agent: I completely ___ your frustration. This shouldn't have happened.", answer: "understand", hint: "empatía" },
            { sentence: "Agent: What I ___ do is send a replacement right away.", answer: "can", hint: "ofrecer solución" },
            { sentence: "Agent: Would you ___ a full refund or a replacement?", answer: "prefer", hint: "dar opciones" },
            { sentence: "Agent: Is there ___ else I can help you with today?", answer: "anything", hint: "cierre" }
          ]
        }
      ],
      modelDialogue: {
        title: "Manejando una queja de cliente",
        dialogue: [
          { speaker: "Customer", text: "Hello, I'm afraid I have a problem with my recent order.", translation: "Hola, me temo que tengo un problema con mi pedido reciente." },
          { speaker: "Agent", text: "I'm sorry to hear that. I'm here to help. Could you tell me what happened?", translation: "Lamento escuchar eso. Estoy aquí para ayudar. ¿Podría contarme qué pasó?" },
          { speaker: "Customer", text: "I ordered a blue jacket, but I received a green one. And it took three weeks to arrive!", translation: "Pedí una chaqueta azul, pero recibí una verde. ¡Y tardó tres semanas en llegar!" },
          { speaker: "Agent", text: "I completely understand your frustration. That's not the experience we want for our customers. Let me look into this for you.", translation: "Entiendo completamente su frustración. Esa no es la experiencia que queremos para nuestros clientes. Déjeme investigar esto por usted." },
          { speaker: "Agent", text: "I can see the error on our end. I apologize sincerely for this mistake.", translation: "Puedo ver el error de nuestra parte. Me disculpo sinceramente por este error." },
          { speaker: "Customer", text: "So what are you going to do about it?", translation: "Entonces, ¿qué van a hacer al respecto?" },
          { speaker: "Agent", text: "I have a few options for you. I can send you the correct jacket right away at no extra cost, and you can keep the green one as compensation. Or I can issue a full refund. What would you prefer?", translation: "Tengo algunas opciones para usted. Puedo enviarle la chaqueta correcta de inmediato sin costo adicional, y puede quedarse con la verde como compensación. O puedo emitir un reembolso completo. ¿Qué prefiere?" },
          { speaker: "Customer", text: "I'd like the blue jacket, please. And I can keep the green one?", translation: "Me gustaría la chaqueta azul, por favor. ¿Y puedo quedarme con la verde?" },
          { speaker: "Agent", text: "Absolutely. It's the least we can do. I'm also adding a 20% discount code for your next purchase as a gesture of goodwill.", translation: "Absolutamente. Es lo menos que podemos hacer. También estoy añadiendo un código de descuento del 20% para su próxima compra como gesto de buena voluntad." },
          { speaker: "Customer", text: "That's very kind, thank you.", translation: "Es muy amable, gracias." },
          { speaker: "Agent", text: "You're welcome. Is there anything else I can help you with today?", translation: "De nada. ¿Hay algo más en lo que pueda ayudarle hoy?" },
          { speaker: "Customer", text: "No, that's all. Thank you for resolving this so quickly.", translation: "No, eso es todo. Gracias por resolver esto tan rápido." },
          { speaker: "Agent", text: "Thank you for your patience and understanding. We value your business. Have a great day!", translation: "Gracias por su paciencia y comprensión. Valoramos su preferencia. ¡Que tenga un excelente día!" }
        ],
        keyPhrases: [
          "I'm afraid I have a problem with...",
          "I'm sorry to hear that. I'm here to help.",
          "I completely understand your frustration",
          "Let me look into this for you",
          "I apologize sincerely for this mistake",
          "I have a few options for you",
          "What would you prefer?",
          "It's the least we can do",
          "as a gesture of goodwill",
          "Is there anything else I can help you with?",
          "Thank you for your patience"
        ]
      },
      pronunciationFocus: {
        title: "Tono y entonación en servicio al cliente",
        sounds: [
          { sound: "Downward 'sorry' ↘", examples: ["I'm SO-rry ↘ to hear that", "I apologize ↘"], tip: "Baja para sonar sincero, no robótico" },
          { sound: "Rising offer ↗", examples: ["Would you like...? ↗", "Can I offer...? ↗"], tip: "Sube para sonar servicial" },
          { sound: "Empathetic pause", examples: ["I understand... [pause] ...and I'm here to help", "That must have been... [pause] ...very frustrating"], tip: "Las pausas muestran que escuchas" }
        ],
        commonErrors: [
          { word: "apologize", wrong: "/a-po-lo-GIZE/", right: "/əˈpɒlədʒaɪz/", note: "Acento en segunda sílaba" },
          { word: "inconvenience", wrong: "/in-con-VE-nience/", right: "/ˌɪnkənˈviːniəns/", note: "Acento en tercera sílaba" },
          { word: "frustration", wrong: "/FRUS-tra-tion/", right: "/frʌˈstreɪʃn/", note: "Acento en segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "La cultura del servicio al cliente anglosajón",
        content: "En países anglosajones, especialmente EE.UU., el servicio al cliente se toma muy en serio. La frase 'The customer is always right' refleja esta cultura. Los agentes de servicio nunca culpan al cliente y siempre ofrecen soluciones. Es común que las empresas ofrezcan compensación extra (gestures of goodwill) como descuentos o productos gratis para recuperar la confianza del cliente. En UK, el enfoque es más formal pero igualmente centrado en resolver problemas. La frase 'I do apologize' es muy británica. En ambas culturas, agradecer al cliente por reportar un problema es estándar.",
        examples: [
          "'The customer is always right' - filosofía de servicio",
          "'We appreciate your feedback' - siempre agradecer",
          "'As a gesture of goodwill...' - ofrecer compensación",
          "'I do apologize' - muy británico",
          "'Your satisfaction is our priority' - eslogan común"
        ]
      },
      consolidationQuiz: [
        {
          question: "Para empezar una queja educadamente, dices:",
          options: ["I want to complain!", "I'm afraid there's an issue with...", "This is terrible!", "You made a mistake!"],
          correctAnswer: 1,
          explanation: "'I'm afraid there's an issue with...' es educado y profesional."
        },
        {
          question: "'That's not my problem' es:",
          options: ["profesional", "inaceptable en servicio al cliente", "honesto", "directo"],
          correctAnswer: 1,
          explanation: "Nunca digas que no es tu problema. Siempre ofrece ayuda o escala."
        },
        {
          question: "Para mostrar empatía, dices:",
          options: ["I know", "I understand your frustration", "OK", "Whatever"],
          correctAnswer: 1,
          explanation: "'I understand your frustration' muestra empatía genuina."
        },
        {
          question: "'I'm sorry you feel that way' es:",
          options: ["una buena disculpa", "condescendiente - evítala", "muy empática", "profesional"],
          correctAnswer: 1,
          explanation: "Esta frase suena condescendiente. Mejor: 'I'm sorry for the inconvenience'."
        },
        {
          question: "Al ofrecer soluciones, es mejor:",
          options: ["Dar una opción", "Dar múltiples opciones", "No dar opciones", "Decir que no se puede hacer nada"],
          correctAnswer: 1,
          explanation: "Dar opciones empodera al cliente y aumenta satisfacción."
        },
        {
          question: "Para cerrar positivamente, dices:",
          options: ["Bye", "Is there anything else I can help you with?", "OK then", "Problem solved"],
          correctAnswer: 1,
          explanation: "Esta frase abre la puerta a más ayuda y cierra profesionalmente."
        }
      ],
      guidedProduction: [
        {
          task: "Hacer una queja educada",
          prompt: "Escribe cómo te quejarías con un hotel sobre: habitación sucia, ruido toda la noche, y desayuno frío.",
          sampleAnswer: "Good morning. I'm afraid I need to raise some concerns about my stay. When I arrived, I noticed the room hadn't been properly cleaned - there were stains on the sheets and the bathroom wasn't spotless.\n\nAdditionally, I had difficulty sleeping due to noise from the room next door, which continued until around 2 AM. This morning, when I went to breakfast, I found that the food was quite cold.\n\nI understand that these things can happen, but I'm rather disappointed as I chose this hotel based on its reputation. I'd appreciate it if you could look into these issues. Would it be possible to discuss some form of compensation?",
          hints: ["Empieza educadamente: 'I'm afraid I need to raise some concerns'", "Describe los problemas específicamente pero sin exagerar", "Termina pidiendo acción: 'Would it be possible to...'"]
        },
        {
          task: "Responder a una queja",
          prompt: "Un cliente se queja de que su pedido llegó dañado y 2 semanas tarde. Escribe tu respuesta como agente de servicio.",
          sampleAnswer: "I'm truly sorry to hear about your experience. Thank you for bringing this to our attention.\n\nI completely understand your frustration - receiving a damaged product after such a long wait is absolutely not acceptable, and I apologize sincerely for the inconvenience this has caused you.\n\nLet me make this right for you. I have a few options: First, I can arrange for an immediate replacement to be shipped via express delivery at no extra cost. Second, if you'd prefer, I can issue a full refund.\n\nAdditionally, as a gesture of goodwill for the trouble you've experienced, I'd like to offer you a 25% discount on your next purchase.\n\nWhich option would work best for you? And is there anything else I can help you with today?",
          hints: ["Discúlpate inmediatamente", "Muestra que entiendes la situación", "Ofrece múltiples soluciones", "Añade compensación extra", "Cierra ofreciendo más ayuda"]
        },
        {
          task: "Escalar una queja",
          prompt: "El agente de servicio no puede resolver tu problema (producto defectuoso, ya intentaste devolverlo 3 veces). Escribe cómo pedirías hablar con un supervisor educadamente.",
          sampleAnswer: "I appreciate your efforts to help me, and I understand this situation may be beyond your authority to resolve. However, I've now attempted to return this defective product three times without success, and I'm becoming quite frustrated.\n\nI don't want to take up more of your time, but I feel this issue requires someone with more authority to resolve. Would it be possible to speak with a supervisor or manager who might be able to help?\n\nI want to stress that I'm not upset with you personally - you've been very professional. I just feel that after three attempts, this needs to be escalated. I'd really appreciate if you could connect me with someone who can make a final decision on this matter.\n\nThank you for your understanding.",
          hints: ["Reconoce el esfuerzo del agente", "Explica por qué necesitas escalar", "No ataques al agente personalmente", "Sé firme pero educado"]
        },
        {
          task: "Email de queja formal",
          prompt: "Escribe un email formal quejándote de un vuelo cancelado sin previo aviso y sin oferta de compensación.",
          sampleAnswer: "Subject: Formal Complaint - Flight Cancellation Without Notice (Booking Ref: ABC123)\n\nDear Customer Relations Team,\n\nI am writing to express my dissatisfaction regarding the cancellation of Flight XY789 on [date] from [origin] to [destination].\n\nI arrived at the airport to find that my flight had been cancelled without any prior notification. No alternative flights were offered, and I was forced to make my own arrangements at significant personal expense.\n\nThis experience was extremely disappointing and caused considerable inconvenience. I had to book a last-minute flight with another airline, resulting in an additional cost of $XXX, as well as missing an important business meeting.\n\nUnder [relevant regulation], I believe I am entitled to compensation for this cancellation. I kindly request the following:\n1. Full refund of my original ticket\n2. Reimbursement of additional expenses incurred\n3. Appropriate compensation as per passenger rights regulations\n\nI have attached all relevant receipts and documentation for your review.\n\nI would appreciate a response within 14 days. If I do not receive a satisfactory resolution, I will be forced to escalate this matter to the relevant aviation authority.\n\nI look forward to your prompt response.\n\nYours faithfully,\n[Name]",
          hints: ["Usa formato de email formal", "Incluye referencias (número de reserva)", "Sé específico sobre lo que pasó", "Indica claramente lo que esperas", "Da un plazo de respuesta", "Menciona escalación si es necesario"]
        }
      ],
      connectionToPrevious: "En la lección de modales, aprendiste a suavizar: 'This must have been a mistake.' Ahora usarás frases diplomáticas para manejar situaciones difíciles.",
      connectionToNext: "En la siguiente lección, explorarás el vocabulario del arte y la cultura para describir exposiciones y dar opiniones estéticas."
    },
    {
      id: 11,
      title: "Art, Culture and Museums",
      titleEs: "Arte, Cultura y Museos",
      introduction: {
        title: "🎨 Arte, Cultura y Museos",
        explanation: "Describir arte, dar opiniones sobre cultura y visitar museos requiere vocabulario específico. Aprenderás a expresar apreciación estética, describir obras y discutir exposiciones.",
        keyPoints: [
          "Describir arte: 'The exhibition features...', 'This sculpture depicts...'",
          "Dar opiniones: 'I find it striking', 'It's quite abstract'",
          "Vocabulario de museos: 'gallery', 'curator', 'masterpiece'",
          "Estilos: 'contemporary', 'abstract', 'portrait', 'genre'"
        ],
        examples: [
          { english: "The exhibition features works by contemporary artists.", spanish: "La exposición presenta obras de artistas contemporáneos.", explanation: "Describiendo una exposición" },
          { english: "I find this sculpture quite striking.", spanish: "Encuentro esta escultura bastante impactante.", explanation: "Dando opinión sobre arte" },
          { english: "The curator gave us an excellent tour of the gallery.", spanish: "El curador nos dio un excelente recorrido por la galería.", explanation: "Visitando un museo" }
        ],
        tips: [
          "💡 'Abstract' en arte no significa 'resumen' — significa no figurativo",
          "💡 'Masterpiece' se usa para obras excepcionales, no cualquier pintura",
          "💡 'Gallery' puede ser una sala o el edificio completo"
        ],
        whenToUse: ["Al visitar museos y galerías", "En conversaciones sobre arte y cultura", "Al describir obras o exposiciones", "Cuando das opiniones estéticas"],
        whenNotToUse: ["No uses 'abstract' para resúmenes — usa 'summary'", "Evita 'masterpiece' para obras mediocres", "No confundas 'canvas' (lienzo) con 'canvass' (hacer campaña)"]
      },
      objectives: ["Describir arte y exposiciones", "Dar opiniones sobre cultura", "Usar vocabulario de museos"],
      grammarTheoryIds: ["b2-passive-advanced", "b1-relative-clauses"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l6t11_n1", word: "exhibition", translation: "exposición", type: "noun", definition: "a display of art or objects", definitionEs: "una muestra de arte u objetos", example: "The exhibition runs until March.", exampleEs: "La exposición estará hasta marzo.", related: ["exhibit"], difficulty: 1 },
          { id: "l6t11_n2", word: "sculpture", translation: "escultura", type: "noun", definition: "three-dimensional art form", definitionEs: "forma de arte tridimensional", example: "This sculpture was carved from marble.", exampleEs: "Esta escultura fue tallada en mármol.", related: ["sculptor"], difficulty: 1 },
          { id: "l6t11_n3", word: "masterpiece", translation: "obra maestra", type: "noun", definition: "an outstanding work of art", definitionEs: "una obra de arte excepcional", example: "Many consider it a masterpiece.", exampleEs: "Muchos la consideran una obra maestra.", related: [], difficulty: 2 },
          { id: "l6t11_n4", word: "curator", translation: "curador", type: "noun", definition: "person who organizes exhibitions", definitionEs: "persona que organiza exposiciones", example: "The curator selected these pieces.", exampleEs: "El curador seleccionó estas piezas.", related: ["curate"], difficulty: 2 },
          { id: "l6t11_n5", word: "gallery", translation: "galería", type: "noun", definition: "room or building for art display", definitionEs: "sala o edificio para mostrar arte", example: "We visited the main gallery.", exampleEs: "Visitamos la galería principal.", related: [], difficulty: 1 },
          { id: "l6t11_n6", word: "canvas", translation: "lienzo", type: "noun", definition: "surface for painting", definitionEs: "superficie para pintar", example: "She works on large canvases.", exampleEs: "Ella trabaja en lienzos grandes.", related: [], difficulty: 1 },
          { id: "l6t11_n7", word: "portrait", translation: "retrato", type: "noun", definition: "painting of a person", definitionEs: "pintura de una persona", example: "It's a portrait of the artist's mother.", exampleEs: "Es un retrato de la madre del artista.", related: [], difficulty: 1 },
          { id: "l6t11_n8", word: "genre", translation: "género", type: "noun", definition: "category of art (e.g. landscape, still life)", definitionEs: "categoría de arte (ej. paisaje, bodegón)", example: "She specializes in the landscape genre.", exampleEs: "Ella se especializa en el género del paisaje.", related: [], difficulty: 2 }
        ],
        verbs: [],
        adjectives: [
          { id: "l6t11_a1", word: "contemporary", translation: "contemporáneo", type: "adjective", definition: "of the present time", definitionEs: "del tiempo presente", example: "Contemporary art can be challenging.", exampleEs: "El arte contemporáneo puede ser desafiante.", related: [], difficulty: 1 },
          { id: "l6t11_a2", word: "abstract", translation: "abstracto", type: "adjective", definition: "not representing physical objects", definitionEs: "no representando objetos físicos", example: "I prefer abstract paintings.", exampleEs: "Prefiero las pinturas abstractas.", related: [], difficulty: 1 }
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t11_cm1",
          wrong: "This painting is very abstract — let me summarize it.",
          correct: "This painting is abstract — it doesn't depict recognizable objects.",
          explanation: "'Abstract' in art means non-figurative, not 'summary'. For summary use 'summary'.",
          explanationEs: "'Abstract' en arte significa no figurativo, no 'resumen'. Para resumen usa 'summary'.",
          category: "vocabulary"
        },
        {
          id: "l6t11_cm2",
          wrong: "We saw many masterpieces in the small gallery.",
          correct: "We saw many interesting works in the small gallery.",
          explanation: "'Masterpiece' is for exceptional works; don't overuse the term.",
          explanationEs: "'Masterpiece' es para obras excepcionales; no abuses del término.",
          category: "vocabulary"
        },
        {
          id: "l6t11_cm3",
          wrong: "The exhibition is exposed until Sunday.",
          correct: "The exhibition runs until Sunday. / The exhibition is on until Sunday.",
          explanation: "Exhibitions 'run' or are 'on', they are not 'exposed' (expose = to reveal).",
          explanationEs: "Las exposiciones 'run' o están 'on', no se 'exponen' (expose = revelar).",
          category: "vocabulary"
        },
        {
          id: "l6t11_cm4",
          wrong: "I like this picture — it's very aesthetic.",
          correct: "I find this piece striking. / I like the aesthetics of this work.",
          explanation: "'Aesthetic' is a noun or technical adjective; for opinions use 'striking', 'beautiful', or 'I like the aesthetics'.",
          explanationEs: "'Aesthetic' es sustantivo o adjetivo técnico; para opiniones usa 'striking', 'beautiful', o 'I like the aesthetics'.",
          category: "vocabulary"
        },
        {
          id: "l6t11_cm5",
          wrong: "The artist painted this in canvas.",
          correct: "The artist painted this on canvas.",
          explanation: "You paint 'ON canvas', not 'in canvas'.",
          explanationEs: "Se pinta 'ON canvas', no 'in canvas'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las descripciones de arte:",
          items: [
            { sentence: "The ___ features works by contemporary artists from across Europe.", answer: "exhibition", hint: "muestra de arte" },
            { sentence: "This ___ was carved from a single block of marble.", answer: "sculpture", hint: "arte tridimensional" },
            { sentence: "The ___ gave us an excellent guided tour of the gallery.", answer: "curator", hint: "organiza exposiciones" },
            { sentence: "Many consider this painting a ___ of the Renaissance.", answer: "masterpiece", hint: "obra excepcional" },
            { sentence: "She specializes in the portrait ___.", answer: "genre", hint: "categoría de arte" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica las palabras por tipo de arte o contexto:",
          categories: [
            { name: "Lugares/Espacios", items: ["gallery", "exhibition", "canvas"] },
            { name: "Tipos de obra", items: ["sculpture", "portrait", "masterpiece"] },
            { name: "Estilos/Conceptos", items: ["abstract", "contemporary", "genre"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma estas frases para usar vocabulario de arte:",
          items: [
            { original: "I like this painting — it doesn't show real things.", transformed: "I like this painting — it's quite abstract." },
            { original: "The show is open until next month.", transformed: "The exhibition runs until next month." },
            { original: "This is a very good painting.", transformed: "Many consider this a masterpiece." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa el diálogo sobre una visita al museo:",
          items: [
            { sentence: "Did you enjoy the ___ at the modern art museum?", answer: "exhibition", hint: "exposición" },
            { sentence: "Yes! The ___ works were particularly striking.", answer: "contemporary", hint: "del presente" },
            { sentence: "I loved that large ___ in the main hall.", answer: "sculpture", hint: "arte 3D" },
            { sentence: "The ___ explained the artist's inspiration.", answer: "curator", hint: "guía del museo" },
            { sentence: "Some pieces were very ___ — hard to interpret.", answer: "abstract", hint: "no figurativo" }
          ]
        }
      ],
      modelDialogue: {
        title: "Dos amigos discuten una exposición de arte",
        dialogue: [
          { speaker: "Maria", text: "Did you see the new exhibition at the Tate Modern?", translation: "¿Viste la nueva exposición en el Tate Modern?" },
          { speaker: "James", text: "Yes! I went last weekend. The curator gave an excellent tour.", translation: "¡Sí! Fui el fin de semana pasado. El curador dio un excelente recorrido." },
          { speaker: "Maria", text: "What did you think of the contemporary pieces?", translation: "¿Qué te parecieron las piezas contemporáneas?" },
          { speaker: "James", text: "Some were quite abstract — I found them challenging but interesting. There was one sculpture that really stood out.", translation: "Algunas eran bastante abstractas — las encontré desafiantes pero interesantes. Había una escultura que realmente destacaba." },
          { speaker: "Maria", text: "I've heard they have a masterpiece on loan from the Louvre.", translation: "He oído que tienen una obra maestra en préstamo del Louvre." },
          { speaker: "James", text: "Yes, a portrait from the 18th century. It's in the main gallery. The exhibition runs until March — you should go.", translation: "Sí, un retrato del siglo XVIII. Está en la galería principal. La exposición estará hasta marzo — deberías ir." },
          { speaker: "Maria", text: "I will. I love that genre — the lighting on the canvas is always fascinating.", translation: "Iré. Me encanta ese género — la iluminación en el lienzo siempre es fascinante." }
        ],
        keyPhrases: [
          "The exhibition features...",
          "The curator gave an excellent tour",
          "I found it quite abstract",
          "It really stood out",
          "The exhibition runs until...",
          "masterpiece on loan"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario artístico",
        sounds: [
          { sound: "Exhibition", examples: ["The exhibition /ˌeksɪˈbɪʃn/", "exhibition hall"], tip: "Acento en tercera sílaba" },
          { sound: "Curator", examples: ["The curator /ˈkjʊəreɪtə/", "curator's choice"], tip: "Primera sílaba acentuada" },
          { sound: "Abstract", examples: ["abstract art /ˈæbstrækt/", "abstract painting"], tip: "Acento en primera sílaba" }
        ],
        commonErrors: [
          { word: "exhibition", wrong: "/ek-si-BI-tion/", right: "/ˌeksɪˈbɪʃn/", note: "Acento en tercera sílaba" },
          { word: "curator", wrong: "/cu-ra-TOR/", right: "/ˈkjʊəreɪtə/", note: "Primera sílaba acentuada" },
          { word: "genre", wrong: "/yen-re/", right: "/ˈʒɒnrə/", note: "Pronunciación francesa: ZHON-ruh" }
        ]
      },
      culturalNote: {
        title: "Arte y museos en cultura anglosajona",
        content: "En UK y EE.UU., visitar museos y galerías es una actividad cultural muy valorada. Muchos museos son gratuitos (como los Smithsonian en Washington o el British Museum en Londres). Es común hacer 'donations' voluntarias. En conversaciones sobre arte, expresar opiniones personales ('I find it...', 'It strikes me as...') es bien visto. Evitar ser demasiado categórico — 'It's not really my taste' es más diplomático que 'I don't like it'.",
        examples: [
          "'Blockbuster exhibition' - exposición muy popular",
          "'Opening night' - inauguración de exposición",
          "'On loan' - obra prestada de otro museo",
          "'Commission' - obra encargada a un artista"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Abstract' en contexto artístico significa:",
          options: ["resumen", "no figurativo / no representacional", "complejo", "antiguo"],
          correctAnswer: 1,
          explanation: "En arte, abstract = no representa objetos reconocibles."
        },
        {
          question: "¿Cuál es la preposición correcta? 'Painted ___ canvas'",
          options: ["in", "on", "at", "with"],
          correctAnswer: 1,
          explanation: "Se pinta ON canvas (en lienzo)."
        },
        {
          question: "Un 'curator' es:",
          options: ["un artista", "quien organiza exposiciones", "un crítico", "un visitante"],
          correctAnswer: 1,
          explanation: "El curator selecciona y organiza las obras en exposiciones."
        },
        {
          question: "'The exhibition runs until March' significa:",
          options: ["La exposición corre", "La exposición estará abierta hasta marzo", "La exposición se mudó", "La exposición cerró"],
          correctAnswer: 1,
          explanation: "'Runs' = está en exhibición, permanece abierta."
        },
        {
          question: "¿Cuándo usar 'masterpiece'?",
          options: ["Para cualquier pintura", "Para obras excepcionales", "Para obras abstractas", "Para retratos"],
          correctAnswer: 1,
          explanation: "Masterpiece = obra maestra, de calidad excepcional."
        }
      ],
      guidedProduction: [
        {
          task: "Describir una exposición",
          prompt: "Describe una exposición de arte que hayas visitado o te gustaría visitar.",
          sampleAnswer: "Last year I visited an exhibition of contemporary sculpture at the local gallery. The curator had selected works from emerging artists, and I found the pieces quite striking. One sculpture in particular — a large abstract form in bronze — really stood out. The exhibition ran for three months and attracted many visitors. I'd recommend it to anyone interested in the genre.",
          hints: ["Usa 'exhibition', 'gallery', 'curator'", "Describe el tipo de obras (contemporary, abstract)", "Da tu opinión con 'I found it...', 'stood out'"]
        },
        {
          task: "Dar opinión sobre una obra",
          prompt: "Da tu opinión sobre una pintura o escultura que te haya impresionado.",
          sampleAnswer: "I saw a portrait at the National Gallery that many consider a masterpiece. The artist's use of light on the canvas is extraordinary. Although I usually prefer more abstract works, this piece really captivated me. The exhibition it was part of featured works from the same genre — 17th-century Dutch painting.",
          hints: ["Menciona el tipo de obra (portrait, sculpture)", "Usa vocabulario como masterpiece, canvas, genre", "Expresa preferencias con 'I prefer...', 'I found...'"]
        }
      ],
      connectionToPrevious: "En la lección anterior manejaste quejas. Ahora aplicarás estructuras descriptivas al mundo del arte y la cultura.",
      connectionToNext: "Has completado Level 6. En Level 7, avanzarás a inglés avanzado con estructuras más complejas y vocabulario especializado."
    },
    {
      id: 12,
      title: "Health and Lifestyle",
      titleEs: "Salud y Estilo de Vida",
      introduction: {
        title: "🏃 Hablando de Salud y Hábitos",
        explanation: "En inglés B2 puedes discutir hábitos de salud, dar y pedir consejos, y hablar de bienestar con precisión y matiz.",
        keyPoints: [
          "Hábitos: 'I try to exercise regularly', 'I've been cutting down on sugar'",
          "Dar consejo: 'You might want to consider...', 'Have you thought about...?'",
          "Consecuencias: 'If you keep doing that, you'll...', 'It tends to affect...'",
          "Estadísticas: 'Studies suggest that...', 'Research indicates that...'"
        ],
        examples: [
          { english: "I've been trying to get more sleep lately.", spanish: "He estado intentando dormir más últimamente.", explanation: "Present Perfect Continuous para hábito reciente" },
          { english: "You should cut down on processed food.", spanish: "Deberías reducir la comida procesada.", explanation: "Consejo con modal" },
          { english: "Regular exercise is known to reduce stress levels.", spanish: "Se sabe que el ejercicio regular reduce el estrés.", explanation: "Pasiva para hecho general" }
        ],
        tips: [
          "💡 'Cut down on' (reducir) es más natural que 'reduce' en conversación",
          "💡 'Work out' = hacer ejercicio — muy común en inglés informal",
          "💡 En UK dicen 'go to the gym', en EE.UU. también 'hit the gym'"
        ],
        whenToUse: ["Al hablar de tus hábitos con amigos o conocidos", "En conversaciones sobre bienestar y calidad de vida", "Al dar o recibir consejos de salud"],
        whenNotToUse: ["No uses vocabulario médico clínico en conversaciones informales", "Evita dar diagnósticos — 'You might want to see a doctor' es apropiado"]
      },
      objectives: ["Describir hábitos de salud", "Dar consejos con tacto", "Hablar de bienestar con precisión B2"],
      grammarTheoryIds: ["b1-advice-should", "b2-passive-advanced"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l6t12_n1", word: "well-being", translation: "bienestar", type: "noun", definition: "overall good health and happiness", definitionEs: "buena salud y felicidad general", example: "Regular sleep improves well-being.", exampleEs: "Dormir bien mejora el bienestar.", related: [], difficulty: 2 },
          { id: "l6t12_n2", word: "nutrition", translation: "nutrición", type: "noun", definition: "the process of eating the right foods", definitionEs: "el proceso de comer alimentos adecuados", example: "Good nutrition is essential.", exampleEs: "La buena nutrición es esencial.", related: ["nutritious"], difficulty: 2 },
          { id: "l6t12_n3", word: "workout", translation: "entrenamiento", type: "noun", definition: "a session of physical exercise", definitionEs: "una sesión de ejercicio físico", example: "I do a 30-minute workout every morning.", exampleEs: "Hago 30 minutos de entrenamiento cada mañana.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l6t12_v1", word: "cut down on", translation: "reducir", type: "verb", definition: "to reduce the amount of something", definitionEs: "reducir la cantidad de algo", example: "I'm trying to cut down on caffeine.", exampleEs: "Estoy intentando reducir la cafeína.", related: [], difficulty: 2 },
          { id: "l6t12_v2", word: "maintain", translation: "mantener", type: "verb", definition: "to keep at a certain level", definitionEs: "mantener en cierto nivel", example: "It's hard to maintain a balanced diet.", exampleEs: "Es difícil mantener una dieta equilibrada.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l6t12_a1", word: "balanced", translation: "equilibrado", type: "adjective", definition: "with the right proportions", definitionEs: "con las proporciones correctas", example: "A balanced diet includes vegetables.", exampleEs: "Una dieta equilibrada incluye verduras.", related: [], difficulty: 1 },
          { id: "l6t12_a2", word: "sedentary", translation: "sedentario", type: "adjective", definition: "involving little physical activity", definitionEs: "con poca actividad física", example: "A sedentary lifestyle can cause health problems.", exampleEs: "Un estilo de vida sedentario puede causar problemas de salud.", related: [], difficulty: 3 },
        ],
        expressions: [
          { id: "l6t12_e1", word: "keep fit", translation: "mantenerse en forma", type: "expression", definition: "to stay physically active and healthy", definitionEs: "mantenerse físicamente activo y sano", example: "I cycle to work to keep fit.", exampleEs: "Voy al trabajo en bici para mantenerme en forma.", related: [], difficulty: 1 },
          { id: "l6t12_e2", word: "take up", translation: "empezar a practicar", type: "expression", definition: "to start a new hobby or activity", definitionEs: "empezar una nueva afición o actividad", example: "She took up yoga last year.", exampleEs: "Ella empezó a practicar yoga el año pasado.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l6t12_cm1",
          wrong: "I do sport every day.",
          correct: "I do exercise / I work out every day.",
          explanation: "In English, 'do sport' is less natural. 'Do exercise' or 'work out' are more common.",
          explanationEs: "En inglés, 'do sport' es menos natural. 'Do exercise' o 'work out' son más comunes.",
          category: "vocabulary"
        },
        {
          id: "l6t12_cm2",
          wrong: "I'm cutting sugar.",
          correct: "I'm cutting down on sugar.",
          explanation: "'Cut down on' is the correct expression for reducing something gradually.",
          explanationEs: "'Cut down on' es la expresión correcta para reducir algo gradualmente.",
          category: "vocabulary"
        },
        {
          id: "l6t12_cm3",
          wrong: "Physical activity has many benefices.",
          correct: "Physical activity has many benefits.",
          explanation: "'Benefices' doesn't exist in English. The noun is 'benefits'.",
          explanationEs: "'Benefices' no existe en inglés. El sustantivo es 'benefits'.",
          category: "false-friend"
        },
        {
          id: "l6t12_cm4",
          wrong: "I've stopped to smoke.",
          correct: "I've stopped smoking.",
          explanation: "'Stop' is followed by gerund (-ing), not infinitive.",
          explanationEs: "'Stop' va seguido de gerundio (-ing), no infinitivo.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las frases sobre salud:",
          items: [
            { sentence: "I've been trying to cut ___ on sugar for a month.", answer: "down", hint: "cut down on" },
            { sentence: "Regular exercise is ___ to reduce stress.", answer: "known", hint: "pasiva: is known to" },
            { sentence: "She took ___ swimming after her doctor's advice.", answer: "up", hint: "take up = empezar" },
            { sentence: "You might want to ___ a nutritionist.", answer: "consult", hint: "consult a specialist" }
          ]
        }
      ],
      modelDialogue: {
        title: "Hablando de salud con un amigo",
        situation: "John le pregunta a María sobre sus nuevos hábitos de salud.",
        dialogue: [
          { speaker: "John", text: "You look great! Have you changed something?", textEs: "Te ves genial. ¿Has cambiado algo?" },
          { speaker: "María", text: "Yes! I've been working out three times a week and cutting down on processed food.", textEs: "Sí. He estado entrenando tres veces por semana y reduciendo la comida procesada." },
          { speaker: "John", text: "That's impressive. What kind of workouts do you do?", textEs: "Impresionante. ¿Qué tipo de entrenamiento haces?" },
          { speaker: "María", text: "Mostly cardio and some strength training. I also took up yoga recently.", textEs: "Principalmente cardio y algo de entrenamiento de fuerza. También empecé yoga recientemente." },
          { speaker: "John", text: "I've been quite sedentary lately. Any tips?", textEs: "He estado bastante sedentario últimamente. ¿Algún consejo?" },
          { speaker: "María", text: "You might want to start small — even a 20-minute walk each day makes a difference.", textEs: "Quizás podrías empezar poco a poco — incluso caminar 20 minutos al día marca la diferencia." }
        ],
        vocabulary: ["working out", "cutting down on", "strength training", "sedentary", "makes a difference"],
        followUpQuestions: ["¿Qué hace María tres veces por semana?", "¿Qué consejo da María a John?"]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario de salud",
        sounds: [
          { sound: "Nutrition", examples: ["nutrition /njuːˈtrɪʃn/", "nutritious food"], tip: "Acento en segunda sílaba: nu-TRI-tion" },
          { sound: "Sedentary", examples: ["sedentary /ˈsedəntri/", "sedentary job"], tip: "Se pronuncia SED-en-tri en inglés británico" }
        ],
        commonErrors: [
          { word: "nutrition", wrong: "/nu-tri-TION/", right: "/njuːˈtrɪʃn/", note: "Acento en segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "Salud y bienestar en la cultura anglosajona",
        content: "En UK y EE.UU., el tema de la salud y el bienestar ('wellness') es muy popular en conversaciones cotidianas. El 'gym culture' es muy extendido. Es común preguntar '¿Estás siguiendo alguna dieta?' sin que se considere intrusivo entre amigos. Términos como 'clean eating', 'mindfulness' y 'self-care' son muy frecuentes. En UK, el NHS (National Health Service) es gratuito — es común hacer referencia a él en conversaciones.",
        examples: [
          "'Clean eating' - comer alimentos sin procesar",
          "'Mindfulness' - atención plena / meditación",
          "'Self-care' - autocuidado",
          "'Step count' - número de pasos al día (cultura wearable)"
        ]
      },
      consolidationQuiz: [
        { question: "¿Qué significa 'cut down on'?", options: ["dejar completamente", "reducir gradualmente", "eliminar", "añadir"], correctAnswer: 1, explanation: "'Cut down on' = reducir, no necesariamente eliminar." },
        { question: "'Take up yoga' significa:", options: ["dejar el yoga", "empezar el yoga", "practicar yoga avanzado", "recomendar yoga"], correctAnswer: 1, explanation: "'Take up' = empezar una nueva actividad." },
        { question: "Frase correcta:", options: ["I've stopped to smoke.", "I've stopped smoking.", "I've stopped smoke.", "I stopped to smoking."], correctAnswer: 1, explanation: "'Stop' + gerundio (-ing): stopped smoking." },
        { question: "'Sedentary lifestyle' describe a alguien que:", options: ["hace mucho ejercicio", "hace poca actividad física", "come sano", "duerme bien"], correctAnswer: 1, explanation: "Sedentary = poco movimiento físico en el día a día." }
      ],
      guidedProduction: [
        {
          task: "Hablar de tus hábitos de salud",
          prompt: "Describe tus hábitos de salud actuales y uno que te gustaría cambiar.",
          sampleAnswer: "I try to maintain a fairly balanced lifestyle. I work out twice a week and I've been cutting down on sugar recently. However, I'm quite sedentary at work — I sit at a desk for eight hours. I've been thinking about taking up a sport like tennis or swimming to improve my fitness.",
          hints: ["Usa 'I've been + -ing' para hábitos recientes", "Menciona un hábito positivo y uno a mejorar", "Usa 'however' para contrastar"]
        }
      ],
      connectionToPrevious: "El vocabulario descriptivo del arte también es útil para describir sensaciones físicas y estados de salud.",
      connectionToNext: "Has completado Level 6. En Level 7, avanzarás a inglés avanzado con estructuras más complejas y vocabulario especializado."
    },
  ]
};

export default level6;
