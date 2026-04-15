import type { Level } from '../../types';

export const level4: Level = {
  id: 4,
  name: "Intermediate",
  cefrLevel: "B1",
  description: "Comunicación empresarial básica y storytelling con Disney",
  totalTasks: 10,
  estimatedHours: 15,
  color: "#f59e0b",
  icon: "🎬",
  tasks: [
    {
      id: 1,
      title: "The Creation of Mickey Mouse",
      titleEs: "La Creación de Mickey Mouse",
      introduction: {
        title: "🐭 La Creación de Mickey Mouse",
        explanation: "En esta lección aprenderás vocabulario de negocios y producción a través de la historia de cómo Walt Disney creó a Mickey Mouse. También practicarás cómo iniciar y mantener conversaciones profesionales.",
        keyPoints: [
          "Vocabulario de producción: animation (animación), sketch (boceto), design (diseño), process (proceso)",
          "Vocabulario empresarial: hire (contratar), own (poseer), produce (producir)",
          "Para iniciar conversaciones: 'By the way...', 'Speaking of...', 'That reminds me...'",
          "Para posponer: 'Can we talk about this later?', 'Let me get back to you on that'"
        ],
        examples: [
          { english: "The animation process takes several months.", spanish: "El proceso de animación toma varios meses.", explanation: "Vocabulario de producción" },
          { english: "We need to hire more animators.", spanish: "Necesitamos contratar más animadores.", explanation: "Vocabulario empresarial" },
          { english: "Speaking of Disney, have you seen their new movie?", spanish: "Hablando de Disney, ¿has visto su nueva película?", explanation: "Iniciando conversación" }
        ],
        tips: [
          "💡 'Assembly line' (cadena de producción) fue innovación de Henry Ford",
          "💡 'Junior' (subalterno) vs 'Senior' (superior) en títulos de trabajo",
          "💡 'Lead' como adjetivo significa 'principal': 'lead animator' (animador principal)"
        ],
        whenToUse: ["Al hablar sobre procesos de producción o creación", "En conversaciones de negocios sobre historia de empresas", "Al iniciar y mantener conversaciones profesionales", "Describiendo cómo se fabrican o crean productos"],
        whenNotToUse: ["No uses lenguaje técnico de producción en conversaciones cotidianas simples", "No confundas 'produce' (producir) con 'product' (producto)", "Evita 'assembly line' si tu interlocutor no conoce el contexto industrial"]
      },
      objectives: [
        "Utilizar varias expresiones para iniciar una conversación",
        "Participar en una conversación o posponerla",
        "Hablar sobre un proceso de producción básico",
        "Escribir sobre su agenda diaria"
      ],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l4t1_n1", word: "animation", translation: "animación", type: "noun", definition: "the process of making films by photographing drawings one after another", example: "Films that use computer animation are expensive to make.", related: ["animate", "animator"], difficulty: 2 },
          { id: "l4t1_n2", word: "assembly line", translation: "cadena de producción", type: "noun", definition: "a system for making things in which each part of the product is made or checked by a different person", example: "Henry Ford is famous for using the assembly line in his car factories.", related: [], difficulty: 2 },
          { id: "l4t1_n3", word: "cartoon", translation: "dibujos animados", type: "noun", definition: "a short film that is made by photographing a group of drawings, one after another", example: "Cartoons were first made for children, but many adults watch them too.", related: [], difficulty: 2 },
          { id: "l4t1_n4", word: "character", translation: "personaje", type: "noun", definition: "a person (or animal) in a story", example: "Juliet is a famous Shakespearean character.", related: [], difficulty: 2 },
          { id: "l4t1_n5", word: "design", translation: "diseño o proyecto", type: "noun", definition: "a drawing that shows how something will be made or what it will look like", example: "I like the design for the new city council building.", related: ["design (v)"], difficulty: 2 },
          { id: "l4t1_n6", word: "process", translation: "proceso", type: "noun", definition: "the actions or steps that someone takes to do or make something", example: "Learning a language is a slow process.", related: [], difficulty: 2 },
          { id: "l4t1_n7", word: "production", translation: "producción", type: "noun", definition: "the process of making things to be sold", example: "Food production is an important business in the U.S.", related: ["produce", "product"], difficulty: 2 },
          { id: "l4t1_n8", word: "sketch", translation: "boceto", type: "noun", definition: "a simple, quick drawing", example: "She drew a quick sketch in pencil before she started painting.", related: ["sketch (v)"], difficulty: 2 },
        ],
        verbs: [
          { id: "l4t1_v1", word: "hire", translation: "contratar", type: "verb", definition: "to give someone a job", example: "I need to hire an assistant to help me finish this job.", related: [], difficulty: 2 },
          { id: "l4t1_v2", word: "own", translation: "poseer", type: "verb", definition: "to have or possess something", example: "I own that car. It's mine.", related: ["owner", "ownership"], difficulty: 2 },
          { id: "l4t1_v3", word: "produce", translation: "producir", type: "verb", definition: "to make things to be sold", example: "Many companies in northern California produce computers.", related: ["producer", "production"], difficulty: 2 },
          { id: "l4t1_v4", word: "reproduce", translation: "reproducir", type: "verb", definition: "to make something that is the same as something else", example: "The photocopy machine reproduces documents exactly like the original.", related: ["reproduction"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l4t1_a1", word: "junior", translation: "subalterno", type: "adjective", definition: "being in a lower position with less authority in a group", example: "Lucy is a junior salesperson so she doesn't work with important clients.", related: [], difficulty: 2 },
          { id: "l4t1_a2", word: "lead", translation: "jefe, líder, principal", type: "adjective", definition: "in the first or most important position in a group", example: "The lead reporter writes the most important stories for the newspaper.", related: [], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l4t1_cm1",
          wrong: "I am working in production since 2020.",
          correct: "I have been working in production since 2020.",
          explanation: "With 'since' (from), we use present perfect continuous, not present continuous.",
          explanationEs: "Con 'since' (desde) usamos presente perfecto continuo, no presente continuo.",
          category: "grammar"
        },
        {
          id: "l4t1_cm2",
          wrong: "We need to hire more animators because we have much work.",
          correct: "We need to hire more animators because we have a lot of work.",
          explanation: "'Much' is used in negative sentences and questions. In affirmative sentences use 'a lot of'.",
          explanationEs: "'Much' se usa en negativo/preguntas. En afirmativo usa 'a lot of'.",
          category: "grammar"
        },
        {
          id: "l4t1_cm3",
          wrong: "The animation takes several months for produce.",
          correct: "The animation takes several months to produce.",
          explanation: "We use 'to + infinitive' after 'takes time', not 'for + infinitive'.",
          explanationEs: "Usamos 'to + infinitivo' después de 'takes time', no 'for + infinitivo'.",
          category: "grammar"
        },
        {
          id: "l4t1_cm4",
          wrong: "Can we speak about this later? I'm in a meeting.",
          correct: "Can we talk about this later? I'm in a meeting.",
          explanation: "'Talk about' is more natural for conversations. 'Speak about' is more formal.",
          explanationEs: "'Talk about' es más natural para conversaciones. 'Speak about' es más formal.",
          category: "usage"
        },
        {
          id: "l4t1_cm5",
          wrong: "By the way, I remind me that we need to discuss the budget.",
          correct: "By the way, that reminds me that we need to discuss the budget.",
          explanation: "'That reminds me' (that reminds me) is the correct expression, not 'I remind me'.",
          explanationEs: "'That reminds me' (eso me recuerda) es la expresión correcta, no 'I remind me'.",
          category: "usage"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las oraciones sobre producción y negocios:",
          items: [
            { sentence: "The ___ line produces 100 cars per day.", answer: "assembly", hint: "cadena de producción" },
            { sentence: "We need to ___ a new designer for the project.", answer: "hire", hint: "contratar" },
            { sentence: "The animation ___ takes about six months.", answer: "process", hint: "procedimiento" },
            { sentence: "She made a quick ___ of the character before painting.", answer: "sketch", hint: "boceto" },
            { sentence: "He's a ___ animator - he just started last month.", answer: "junior", hint: "subalterno" }
          ]
        },
        {
          type: "matching",
          instruction: "Une las expresiones para iniciar conversación con su uso:",
          pairs: [
            { term: "By the way...", match: "Introducir un tema nuevo" },
            { term: "Speaking of...", match: "Conectar con algo mencionado" },
            { term: "That reminds me...", match: "Recordar algo relacionado" },
            { term: "Can we talk about this later?", match: "Posponer una conversación" },
            { term: "Let me get back to you on that.", match: "Prometer responder después" },
            { term: "Where were we?", match: "Retomar una conversación" }
          ]
        },
        {
          type: "word-order",
          instruction: "Ordena las palabras para formar oraciones correctas:",
          items: [
            { words: ["the", "process", "takes", "production", "several", "months"], answer: "The production process takes several months." },
            { words: ["we", "hire", "to", "need", "animators", "more"], answer: "We need to hire more animators." },
            { words: ["of", "speaking", "have", "you", "Disney", "movies", "seen", "?"], answer: "Speaking of Disney, have you seen movies?" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma usando expresiones para iniciar conversación:",
          items: [
            { original: "I need to tell you about the meeting.", transformed: "By the way, I need to tell you about the meeting." },
            { original: "You mentioned Disney. I love their movies.", transformed: "Speaking of Disney, I love their movies." },
            { original: "I just remembered the deadline.", transformed: "That reminds me of the deadline." }
          ]
        }
      ],
      modelDialogue: {
        title: "Conversación sobre el proceso de producción",
        dialogue: [
          { speaker: "Sarah", text: "Good morning, Tom. How's the animation project going?", translation: "Buenos días, Tom. ¿Cómo va el proyecto de animación?" },
          { speaker: "Tom", text: "It's going well! We've finished the initial sketches.", translation: "¡Va bien! Hemos terminado los bocetos iniciales." },
          { speaker: "Sarah", text: "Great! Speaking of sketches, I saw the new character designs. They look fantastic.", translation: "¡Genial! Hablando de bocetos, vi los nuevos diseños de personajes. Se ven fantásticos." },
          { speaker: "Tom", text: "Thanks! The lead animator did an amazing job.", translation: "¡Gracias! El animador principal hizo un trabajo increíble." },
          { speaker: "Sarah", text: "By the way, do we need to hire more junior animators for the next phase?", translation: "Por cierto, ¿necesitamos contratar más animadores subalternos para la siguiente fase?" },
          { speaker: "Tom", text: "Actually, yes. The production process is going to take longer than expected.", translation: "De hecho, sí. El proceso de producción va a tomar más tiempo de lo esperado." },
          { speaker: "Sarah", text: "That reminds me - we need to discuss the budget. Can we talk about it later today?", translation: "Eso me recuerda - necesitamos discutir el presupuesto. ¿Podemos hablar de eso más tarde hoy?" },
          { speaker: "Tom", text: "Sure. Let me get back to you after lunch.", translation: "Claro. Déjame responderte después del almuerzo." },
          { speaker: "Sarah", text: "Perfect. I'll send you a meeting invite.", translation: "Perfecto. Te enviaré una invitación a la reunión." }
        ],
        keyPhrases: [
          "Speaking of sketches...",
          "By the way, do we need to...?",
          "That reminds me - we need to...",
          "Can we talk about it later?",
          "Let me get back to you after..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario empresarial",
        sounds: [
          { sound: "/ʃ/", word: "production", tip: "El sonido 'sh' en -tion", tipEs: "Como 'sh' en 'show'" },
          { sound: "/dʒ/", word: "junior", tip: "La 'j' inglesa suena más suave", tipEs: "Más suave que la 'y' española" },
          { sound: "Stress", word: "produce", tip: "proˈduce (v) vs ˈproduct (n)", tipEs: "El acento cambia según verbo o sustantivo" }
        ],
        minimalPairs: [
          { word1: "produce", word2: "product", explanation: "proˈduce /prəˈdjuːs/ (verbo) vs ˈproduct /ˈprɒdʌkt/ (sustantivo) - acento diferente" },
          { word1: "hire", word2: "higher", explanation: "hire /haɪər/ = contratar; higher /ˈhaɪər/ = más alto. Muy similar, contexto importa." }
        ],
        intonation: [
          { pattern: "Rising for topic transitions", example: "By the way, speaking of the project...↗", tip: "Transiciones suaves suben ligeramente", tipEs: "Indica que vas a cambiar de tema" }
        ],
        commonErrors: [
          { word: "hire", wrong: "/hi-re/", right: "/haɪər/", note: "Una sílaba, rima con 'fire'" },
          { word: "design", wrong: "/de-sign/", right: "/dɪˈzaɪn/", note: "La 'g' es muda" },
          { word: "process", wrong: "/pro-cess/", right: "/ˈprɒses/ (UK) /ˈprɑːses/ (US)", note: "Acento en primera sílaba" }
        ]
      },
      culturalNote: {
        title: "Comunicación en el entorno empresarial estadounidense",
        titleEs: "Comunicación en el entorno empresarial estadounidense",
        content: "En el mundo empresarial angloparlante, especialmente en EE.UU., es común hacer 'small talk' (conversación casual) antes de entrar en temas de negocios. Expresiones como 'By the way...' y 'Speaking of...' ayudan a hacer transiciones suaves entre temas. Es considerado profesional posponer conversaciones cuando estás ocupado, pero siempre con cortesía: 'Let me get back to you on that' es preferible a simplemente decir 'No puedo ahora'.",
        contentEs: "Small talk antes de negocios. 'By the way' y 'Speaking of' para transiciones. Posponer con cortesía: 'Let me get back to you on that'.",
        region: "US",
        examples: [
          "Empezar reuniones con small talk: 'How was your weekend?'",
          "Hacer transiciones suaves: 'Speaking of the project...'",
          "Posponer educadamente: 'Can we circle back to this later?'",
          "Seguimiento: 'Just following up on our conversation...'"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Assembly line' significa:",
          options: ["línea de ensamblaje", "línea de montaje", "cadena de producción", "todas son correctas"],
          correctAnswer: 3,
          explanation: "Todas las opciones son traducciones válidas de 'assembly line'."
        },
        {
          question: "'Speaking of Disney...' se usa para:",
          options: ["cambiar de tema completamente", "conectar con algo mencionado", "terminar una conversación", "hacer una pregunta"],
          correctAnswer: 1,
          explanation: "'Speaking of...' conecta con algo que ya se mencionó en la conversación."
        },
        {
          question: "'Junior animator' es un animador:",
          options: ["joven", "de nivel inicial/subalterno", "principiante", "estudiante"],
          correctAnswer: 1,
          explanation: "'Junior' indica un puesto de nivel inicial o subalterno, no necesariamente edad."
        },
        {
          question: "Para posponer una conversación educadamente:",
          options: ["I'm busy now.", "Not now.", "Let me get back to you on that.", "I don't have time."],
          correctAnswer: 2,
          explanation: "'Let me get back to you on that' es la forma más profesional de posponer."
        },
        {
          question: "'The production process takes several months ___':",
          options: ["for complete", "to complete", "completing", "complete"],
          correctAnswer: 1,
          explanation: "Usamos 'to + infinitivo' después de 'takes time'."
        },
        {
          question: "'Sketch' en el contexto de diseño significa:",
          options: ["dibujo final", "boceto rápido", "pintura", "fotografía"],
          correctAnswer: 1,
          explanation: "Un 'sketch' es un boceto o dibujo rápido inicial."
        }
      ],
      guidedProduction: [
        {
          task: "Describir un proceso de producción",
          prompt: "Describe el proceso de crear un video para YouTube o TikTok.",
          sampleAnswer: "The production process starts with brainstorming ideas. Then, I write a script and make a quick sketch of the scenes. Next, I film the video using my phone. After that, I edit the video and add music. The whole process takes about 4-5 hours.",
          hints: ["Usa vocabulario: process, sketch, production", "Enumera pasos: first, then, next, after that, finally", "Menciona tiempo: it takes..."]
        },
        {
          task: "Iniciar y cambiar temas en conversación",
          prompt: "Escribe un mini-diálogo donde cambias de tema usando 'By the way' o 'Speaking of'.",
          sampleAnswer: "A: I really enjoyed the meeting today. B: Me too! By the way, speaking of meetings, did you hear about the new project? A: No, what project? B: That reminds me - I need to send you the email about it.",
          hints: ["Usa 'By the way...'", "Usa 'Speaking of...'", "Usa 'That reminds me...'"]
        },
        {
          task: "Posponer una conversación profesionalmente",
          prompt: "Tu colega quiere hablar de un tema pero estás ocupado. Responde educadamente.",
          sampleAnswer: "I'd love to discuss this, but I'm in the middle of something right now. Can we talk about this later? Let me get back to you this afternoon. I'll send you a meeting invite for 3 PM if that works for you.",
          hints: ["Muestra interés primero", "Explica brevemente por qué no puedes ahora", "Propón una alternativa específica"]
        },
        {
          task: "Describir roles en un equipo",
          prompt: "Describe los diferentes roles en un equipo de producción (películas, videos, etc.).",
          sampleAnswer: "In a production team, the lead director makes the main decisions. The junior staff members help with daily tasks. The animators create the visual content, and the designers work on the look and feel. Everyone works together to complete the production process.",
          hints: ["Usa 'lead' y 'junior'", "Menciona diferentes roles", "Describe responsabilidades"]
        }
      ],
      connectionToPrevious: "En Level 3 aprendiste sustantivos contables e incontables. Ahora usarás ese conocimiento para hablar de producción: 'We need more equipment' (incontable) vs 'We need more animators' (contable).",
      connectionToNext: "En la siguiente lección aprenderás vocabulario de marketing para entender cómo Mickey Mouse se convirtió en un fenómeno global.",
      grammarTheoryIds: ['b1-present-perfect-vs-past-simple', 'b1-gerund-vs-infinitive', 'b1-quantifiers']
    },
    {
      id: 2,
      title: "Marketing Mickey Mouse",
      titleEs: "Comercialización de Mickey Mouse",
      introduction: {
        title: "📢 Marketing y Comercialización",
        explanation: "Aprenderás vocabulario de marketing y ventas mientras descubres cómo Mickey Mouse se convirtió en un fenómeno global. También practicarás cómo hacer y recibir llamadas telefónicas profesionales.",
        keyPoints: [
          "Vocabulario de marketing: merchandise (mercancía), order (pedido), deal (trato), product (producto)",
          "Llamadas telefónicas: 'This is [name] speaking', 'May I speak to...?', 'I'm calling about...'",
          "Para cerrar ventas: 'We can offer you...', 'The price is...', 'We'll ship it by...'",
          "Popularidad: 'popular' (popular), 'worldwide' (en todo el mundo), 'global' (global)"
        ],
        examples: [
          { english: "We'd like to place an order for 500 units.", spanish: "Nos gustaría hacer un pedido de 500 unidades.", explanation: "Haciendo un pedido" },
          { english: "May I speak to the sales manager?", spanish: "¿Puedo hablar con el gerente de ventas?", explanation: "Llamada telefónica" },
          { english: "Our products are sold globally.", spanish: "Nuestros productos se venden globalmente.", explanation: "Alcance mundial" }
        ],
        tips: [
          "💡 'Order' puede ser sustantivo (pedido) o verbo (pedir/ordenar)",
          "💡 En llamadas formales: 'This is John Smith speaking' no 'I am John Smith'",
          "💡 'Worldwide' y 'Global' son sinónimos"
        ],
        whenToUse: [
          "Al hacer o recibir llamadas de negocios: 'May I speak to...?', 'I'm calling about...'",
          "Al colocar pedidos: 'We'd like to place an order for...'",
          "En conversaciones sobre productos y distribución: 'Our products are sold globally'",
          "Al cerrar ventas: 'We can offer you...', 'The price is...'"
        ],
        whenNotToUse: [
          "No uses 'I am John Smith' en llamadas formales → 'This is John Smith speaking'",
          "No confundas 'order' (pedido) con 'order' (ordenar) — el contexto lo aclara"
        ]
      },
      objectives: [
        "Realizar y recibir llamadas telefónicas",
        "Entender conversaciones sobre productos y distribución",
        "Escribir sobre un personaje conocido de su país"
      ],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l4t2_n1", word: "buyer", translation: "comprador", type: "noun", definition: "a person who buys products or goods for a company to use or to sell", example: "The buyer at the department store knows what sells the best.", related: ["buy"], difficulty: 2 },
          { id: "l4t2_n2", word: "comic book", translation: "cuento de caricaturas", type: "noun", definition: "a magazine or book that uses pictures and words to tell a story", example: "Many children read comic books because the pictures make the story easy to understand.", related: [], difficulty: 2 },
          { id: "l4t2_n3", word: "deal", translation: "trato", type: "noun", definition: "an agreement or business arrangement", example: "We made a deal to sell the company.", related: [], difficulty: 2 },
          { id: "l4t2_n4", word: "merchandise", translation: "mercadería", type: "noun", definition: "goods or products made to be sold", example: "The store gets new merchandise every Tuesday.", related: ["merchandise (v)"], difficulty: 2 },
          { id: "l4t2_n5", word: "order", translation: "orden", type: "noun", definition: "a customer's request for a product", example: "The store placed an order for new books.", related: ["order (v)"], difficulty: 2 },
          { id: "l4t2_n6", word: "popularity", translation: "popularidad", type: "noun", definition: "the state of being well liked by many people", example: "In order to increase his popularity, the president promised to lower taxes.", related: ["popular"], difficulty: 2 },
          { id: "l4t2_n7", word: "product", translation: "producto", type: "noun", definition: "something that is made to be sold", example: "The perfume is a new product for the makeup company.", related: ["produce"], difficulty: 2 },
          { id: "l4t2_n8", word: "shipment", translation: "embarque o carga", type: "noun", definition: "a load of goods or products sent by land, air or sea", example: "I went to the harbor to wait for the shipment of cars.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l4t2_v1", word: "announce", translation: "anunciar", type: "verb", definition: "to say something officially", example: "The company announced its plans to open a new store in Geneva.", related: ["announcement"], difficulty: 2 },
          { id: "l4t2_v2", word: "order", translation: "pedir, ordenar", type: "verb", definition: "to ask for something that you will buy", example: "He ordered a lot of food because he was very hungry.", related: ["order (n)"], difficulty: 2 },
          { id: "l4t2_v3", word: "offer", translation: "ofrecer", type: "verb", definition: "to say that you will give someone something", example: "The businessman offered the company $1,000 for its accounting services.", related: ["offer (n)"], difficulty: 2 },
          { id: "l4t2_v4", word: "publish", translation: "publicar", type: "verb", definition: "to produce and sell a book, magazine, or other printed material for people to read", example: "I need someone to publish my book.", related: ["publication"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l4t2_a1", word: "global", translation: "global o mundial", type: "adjective", definition: "having an effect on the whole world, or existing all over the world", example: "Homelessness and hunger are global problems.", related: [], difficulty: 2 },
          { id: "l4t2_a2", word: "popular", translation: "popular o conocido", type: "adjective", definition: "liked by many people", example: "She is very popular at work because she is so nice.", related: ["popularity"], difficulty: 2 },
          { id: "l4t2_a3", word: "worldwide", translation: "en todo el mundo", type: "adjective", definition: "existing or done throughout the world", example: "Disney movies are shown worldwide.", related: [], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [
          { id: "l4t2_d1", word: "globally", translation: "globalmente o mundialmente", type: "adverb", definition: "everywhere in the world", example: "We sell our products globally.", related: [], difficulty: 2 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l4t2_cm1",
          wrong: "This is John Smith who speaks.",
          correct: "This is John Smith speaking.",
          explanation: "On phone calls, we use 'This is [name] speaking', not 'who speaks'.",
          explanationEs: "En llamadas telefónicas, usamos 'This is [name] speaking', no 'who speaks'.",
          category: "usage"
        },
        {
          id: "l4t2_cm2",
          wrong: "I call because I want to place an order.",
          correct: "I'm calling because I want to place an order.",
          explanation: "For actions in progress we use present continuous: 'I'm calling about...'",
          explanationEs: "Para acciones en progreso usamos presente continuo: 'I'm calling about...'",
          category: "grammar"
        },
        {
          id: "l4t2_cm3",
          wrong: "May I speak with the manager?",
          correct: "May I speak to the manager?",
          explanation: "'Speak to' is more common in this context, although 'speak with' is also acceptable.",
          explanationEs: "'Speak to' es más común en este contexto, aunque 'speak with' también es aceptable.",
          category: "usage"
        },
        {
          id: "l4t2_cm4",
          wrong: "We'd like to do an order for 500 units.",
          correct: "We'd like to place an order for 500 units.",
          explanation: "The correct expression is 'place an order', not 'do an order' or 'make an order'.",
          explanationEs: "La expresión correcta es 'place an order', no 'do an order' o 'make an order'.",
          category: "vocabulary"
        },
        {
          id: "l4t2_cm5",
          wrong: "Our products are sold in the worldwide.",
          correct: "Our products are sold worldwide.",
          explanation: "'Worldwide' is an adverb; it doesn't need an article or preposition.",
          explanationEs: "'Worldwide' es un adverbio, no necesita artículo ni preposición.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las frases de llamadas telefónicas:",
          items: [
            { sentence: "Hello, this ___ Maria from Sales speaking.", answer: "is", hint: "identificándose" },
            { sentence: "May I ___ to the purchasing manager?", answer: "speak", hint: "pidiendo hablar con alguien" },
            { sentence: "I'm ___ about the order we placed last week.", answer: "calling", hint: "razón de la llamada" },
            { sentence: "We'd like to ___ an order for 200 units.", answer: "place", hint: "hacer un pedido" },
            { sentence: "Our products are sold ___.", answer: "worldwide/globally", hint: "en todo el mundo" }
          ]
        },
        {
          type: "matching",
          instruction: "Une las frases de la llamada con su propósito:",
          pairs: [
            { term: "This is John from Marketing.", match: "Identificarse" },
            { term: "May I speak to...?", match: "Pedir hablar con alguien" },
            { term: "I'm calling about...", match: "Dar razón de llamada" },
            { term: "Could you hold, please?", match: "Pedir que espere" },
            { term: "I'll put you through.", match: "Transferir llamada" },
            { term: "Can I take a message?", match: "Ofrecer tomar mensaje" }
          ]
        },
        {
          type: "role-play",
          instruction: "Completa el diálogo de una llamada telefónica:",
          items: [
            { prompt: "Receptionist: Good morning, ABC Company. How may I help you?", response: "Hello, this is [name] from [company]. May I speak to [person]?" },
            { prompt: "Receptionist: I'm afraid he's in a meeting. Can I take a message?", response: "Yes, please. Could you ask him to call me back? My number is..." },
            { prompt: "Receptionist: Of course. Is there anything else?", response: "No, that's all. Thank you very much." }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en estas oraciones:",
          items: [
            { incorrect: "Our company sells globally its products.", corrected: "Our company sells its products globally." },
            { incorrect: "The merchandise is very much popular.", corrected: "The merchandise is very popular." },
            { incorrect: "We made a big deal with Disney.", corrected: "We made a deal with Disney. / We closed a big deal with Disney." }
          ]
        }
      ],
      modelDialogue: {
        title: "Llamada telefónica para hacer un pedido",
        dialogue: [
          { speaker: "Receptionist", text: "Good morning, Disney Merchandise. How may I help you?", translation: "Buenos días, Disney Merchandise. ¿En qué puedo ayudarle?" },
          { speaker: "Buyer", text: "Hello, this is Karen Chen from Tokyo Toys speaking. May I speak to someone in the sales department?", translation: "Hola, habla Karen Chen de Tokyo Toys. ¿Puedo hablar con alguien del departamento de ventas?" },
          { speaker: "Receptionist", text: "Of course. I'll put you through to our sales representative. Please hold.", translation: "Por supuesto. Le paso con nuestro representante de ventas. Por favor espere." },
          { speaker: "Sales Rep", text: "Hello, this is Mike Brown. How can I help you today?", translation: "Hola, soy Mike Brown. ¿Cómo puedo ayudarle hoy?" },
          { speaker: "Buyer", text: "Hi Mike. I'm calling to place an order for Mickey Mouse merchandise.", translation: "Hola Mike. Llamo para hacer un pedido de mercancía de Mickey Mouse." },
          { speaker: "Sales Rep", text: "Great! What products are you interested in?", translation: "¡Genial! ¿Qué productos le interesan?" },
          { speaker: "Buyer", text: "We'd like to order 500 t-shirts and 300 plush toys.", translation: "Nos gustaría pedir 500 camisetas y 300 peluches." },
          { speaker: "Sales Rep", text: "Perfect. I can offer you a 10% discount on orders over $5,000.", translation: "Perfecto. Puedo ofrecerle un 10% de descuento en pedidos superiores a $5,000." },
          { speaker: "Buyer", text: "That sounds good. When can we expect the shipment?", translation: "Eso suena bien. ¿Cuándo podemos esperar el envío?" },
          { speaker: "Sales Rep", text: "We can ship it within two weeks. I'll send you the order confirmation by email.", translation: "Podemos enviarlo en dos semanas. Le enviaré la confirmación del pedido por correo electrónico." }
        ],
        keyPhrases: [
          "This is [name] speaking.",
          "May I speak to...?",
          "I'm calling to place an order.",
          "We'd like to order...",
          "I can offer you a discount."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación clara en llamadas telefónicas",
        sounds: [
          { sound: "Numbers", word: "fifteen", tip: "fifTEEN vs FIFty - enfatiza la última sílaba", tipEs: "15 y 50 suenan muy similar, cuidado" },
          { sound: "Spelling", word: "B as in Bravo", tip: "Usa alfabeto NATO para deletrear", tipEs: "Alpha, Bravo, Charlie evitan confusiones" },
          { sound: "Stress", word: "merchandise", tip: "Acento en primera sílaba", tipEs: "MER-chandise, no mer-chan-DISE" }
        ],
        minimalPairs: [
          { word1: "fifteen", word2: "fifty", explanation: "fifteen /ˌfɪfˈtiːn/ vs fifty /ˈfɪfti/ - la diferencia está en la sílaba acentuada" },
          { word1: "thirteen", word2: "thirty", explanation: "thirteen /ˌθɜːˈtiːn/ vs thirty /ˈθɜːti/ - mismo patrón que fifteen/fifty" }
        ],
        intonation: [
          { pattern: "Rising for polite offers", example: "May I help you?↗", tip: "Entonación ascendente suena más amigable", tipEs: "Sube la voz al final para sonar cortés" }
        ],
        commonErrors: [
          { word: "order", wrong: "/or-der/", right: "/ˈɔːdər/", note: "La 'r' final casi no se pronuncia en British English" },
          { word: "merchandise", wrong: "/mer-chan-dise/", right: "/ˈmɜːtʃəndaɪz/", note: "Acento en primera sílaba" },
          { word: "popular", wrong: "/po-pu-lar/", right: "/ˈpɒpjʊlər/", note: "La 'u' suena como 'yu' corta" }
        ]
      },
      culturalNote: {
        title: "Etiqueta telefónica en negocios internacionales",
        titleEs: "Etiqueta telefónica en negocios internacionales",
        content: "En llamadas de negocios en inglés, es importante identificarse claramente al principio. En EE.UU. y UK, se espera profesionalismo pero también un tono amigable. Evita interrumpir y siempre confirma los detalles importantes. Al deletrear nombres o códigos, usa el alfabeto fonético NATO (Alpha, Bravo, Charlie...) para evitar confusiones. Siempre termina la llamada agradeciendo: 'Thank you for your time' o 'Thanks for calling'.",
        contentEs: "Identifícate al inicio. Usa alfabeto NATO para deletrear. Termina agradeciendo: 'Thank you for your time'.",
        region: "General",
        examples: [
          "Identificarse: 'This is [name] from [company]' no 'I am [name]'",
          "Pedir repetición: 'Could you spell that for me, please?'",
          "Confirmar: 'Let me repeat that back to you...'",
          "Despedirse: 'Thank you for your time. Goodbye.'"
        ]
      },
      consolidationQuiz: [
        {
          question: "Para identificarte en una llamada dices:",
          options: ["I am John Smith", "My name is John Smith speaking", "This is John Smith speaking", "John Smith is calling"],
          correctAnswer: 2,
          explanation: "'This is [name] speaking' es la forma estándar de identificarse en llamadas."
        },
        {
          question: "'Place an order' significa:",
          options: ["cancelar un pedido", "hacer un pedido", "entregar un pedido", "devolver un pedido"],
          correctAnswer: 1,
          explanation: "'Place an order' significa hacer o realizar un pedido."
        },
        {
          question: "'I'll put you through' significa:",
          options: ["te llamo después", "te transfiero la llamada", "te pongo en espera", "termino la llamada"],
          correctAnswer: 1,
          explanation: "'Put someone through' significa transferir una llamada a otra persona."
        },
        {
          question: "'Merchandise' se refiere a:",
          options: ["mercado", "comerciante", "mercancía/productos", "comercialización"],
          correctAnswer: 2,
          explanation: "'Merchandise' son los productos o mercancía que se vende."
        },
        {
          question: "Para pedir que alguien espere en el teléfono:",
          options: ["Wait, please", "Stop talking", "Could you hold, please?", "Be patient"],
          correctAnswer: 2,
          explanation: "'Could you hold, please?' o 'Please hold' es la forma educada."
        },
        {
          question: "'Our products are sold worldwide' - 'worldwide' es:",
          options: ["sustantivo", "adjetivo", "adverbio", "preposición"],
          correctAnswer: 2,
          explanation: "Aquí 'worldwide' funciona como adverbio (vendidos mundialmente)."
        }
      ],
      guidedProduction: [
        {
          task: "Hacer una llamada para pedir información",
          prompt: "Llama a una tienda para preguntar si tienen un producto específico.",
          sampleAnswer: "Hello, this is [name]. I'm calling to ask about your Nintendo Switch stock. Do you have any available? Great! What's the price? And do you ship internationally? Perfect, I'd like to place an order then.",
          hints: ["Identifícate primero", "Explica por qué llamas", "Haz preguntas específicas"]
        },
        {
          task: "Responder una llamada de negocios",
          prompt: "Eres recepcionista. Un cliente llama queriendo hablar con el gerente que está ocupado.",
          sampleAnswer: "Good morning, ABC Company. How may I help you? I'm afraid Mr. Johnson is in a meeting right now. Can I take a message? Of course. Could I have your name and phone number? I'll make sure he calls you back. Is there anything else I can help you with?",
          hints: ["Saluda profesionalmente", "Explica la situación", "Ofrece alternativas"]
        },
        {
          task: "Hacer un pedido por teléfono",
          prompt: "Llama para hacer un pedido de material de oficina para tu empresa.",
          sampleAnswer: "Hello, this is Maria from Tech Solutions. I'm calling to place an order. We'd like to order 50 boxes of printer paper, 100 pens, and 20 notebooks. Can you tell me the total price? And when can we expect delivery? Great, please send the invoice to our email.",
          hints: ["Identifica tu empresa", "Lista los productos claramente", "Pregunta sobre entrega y pago"]
        },
        {
          task: "Describir la popularidad de un producto",
          prompt: "Describe un producto muy popular en tu país o mundialmente.",
          sampleAnswer: "The iPhone is one of the most popular products worldwide. Apple sells millions of units globally every year. Its popularity is due to its user-friendly design and innovative features. The merchandise, like phone cases and accessories, is also sold worldwide.",
          hints: ["Usa 'popular', 'globally', 'worldwide'", "Menciona razones del éxito", "Incluye datos si es posible"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste sobre producción. Ahora verás cómo esos productos se venden y comercializan globalmente.",
      connectionToNext: "En la siguiente lección aprenderás sobre la primera película de Disney y cómo hablar sobre costos, riesgos y éxitos.",
      grammarTheoryIds: ['b1-reported-speech', 'b1-passive-voice']
    },
    {
      id: 3,
      title: "Disney's First Feature Film",
      titleEs: "El Primer Largometraje de Disney",
      introduction: {
        title: "🎬 El Primer Largometraje de Disney",
        explanation: "Snow White and the Seven Dwarfs fue un hito en la historia del cine. Aprenderás vocabulario de cine y cómo pedir aclaraciones cuando no entiendes algo.",
        keyPoints: [
          "Vocabulario de cine: feature film (largometraje), director, premiere (estreno), audience (público)",
          "Para pedir aclaraciones: 'Could you repeat that?', 'What do you mean by...?', 'I'm not sure I understand'",
          "Presente simple vs continuo: 'I watch movies' (hábito) vs 'I'm watching a movie' (ahora)",
          "Géneros: comedy, drama, action, horror, documentary, animated"
        ],
        examples: [
          { english: "Sorry, could you explain that again?", spanish: "Disculpa, ¿podrías explicar eso de nuevo?", explanation: "Pidiendo aclaración" },
          { english: "The movie premiered in 1937.", spanish: "La película se estrenó en 1937.", explanation: "Hablando de estrenos" },
          { english: "What kind of movies do you like?", spanish: "¿Qué tipo de películas te gustan?", explanation: "Preguntando preferencias" }
        ],
        tips: [
          "💡 'Feature film' (largometraje) vs 'Short film' (cortometraje)",
          "💡 'Cinema' (UK) = 'Movie theater' (US)",
          "💡 Para no interrumpir: 'Sorry to interrupt, but...' o 'Excuse me, I have a question'"
        ],
        whenToUse: [
          "Cuando no entiendes algo: 'Could you repeat that?', 'What do you mean by...?'",
          "Al hablar de películas: 'The movie premiered in...', 'What kind of movies do you like?'",
          "Para distinguir hábitos vs ahora: 'I watch movies' (hábito) vs 'I'm watching a movie' (ahora)",
          "En conversaciones sobre cine: 'director', 'premiere', 'audience'"
        ],
        whenNotToUse: [
          "No uses Present Continuous para hábitos → usa Present Simple: 'I watch' (NO 'I'm watching' para rutina)",
          "Evita interrumpir sin cortesía → 'Sorry to interrupt, but...'"
        ]
      },
      objectives: [
        "Pedir aclaraciones cuando no entiende algo",
        "Hablar sobre acciones que suceden con regularidad",
        "Hablar sobre eventos que están teniendo lugar en ese momento",
        "Escribir sobre sus tipos favoritos de películas"
      ],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l4t3_n1", word: "cost", translation: "costo o precio", type: "noun", definition: "the amount of money that you have to pay for something", example: "The cost of that car is $25,000.", related: ["cost (v)"], difficulty: 2 },
          { id: "l4t3_n2", word: "decision", translation: "decisión", type: "noun", definition: "a choice that you make", example: "After thinking about it for a year, I made a decision to stop smoking.", related: ["decide"], difficulty: 2 },
          { id: "l4t3_n3", word: "hit", translation: "éxito", type: "noun", definition: "something that is very popular", example: "Everyone loves the new song, 'Running Back.' It's a big hit.", related: [], difficulty: 2 },
          { id: "l4t3_n4", word: "industry", translation: "industria", type: "noun", definition: "a type of trade, service, or business that produces, buys, and sells specific things", example: "That actor has worked in the film industry for 20 years.", related: [], difficulty: 2 },
          { id: "l4t3_n5", word: "innovation", translation: "innovación", type: "noun", definition: "the introduction of a new idea, product, or way of doing something", example: "He is responsible for several innovations in the field of science.", related: [], difficulty: 2 },
          { id: "l4t3_n6", word: "risk", translation: "riesgo", type: "noun", definition: "the chance that a bad or dangerous thing might happen", example: "It is a risk to leave the office door unlocked at night.", related: ["risk (v)", "risky"], difficulty: 2 },
          { id: "l4t3_n7", word: "sales", translation: "ventas", type: "noun", definition: "a total number or amount of something sold", example: "The company's sales were $10 million last year.", related: [], difficulty: 2 },
          { id: "l4t3_n8", word: "success", translation: "éxito", type: "noun", definition: "something that ends the way you wanted it to", example: "The film was a big success and made a lot of money.", related: ["succeed", "successful"], difficulty: 2 },
        ],
        verbs: [
          { id: "l4t3_v1", word: "cost", translation: "costar o valer", type: "verb", definition: "to have a price", example: "The book costs $12.", related: ["cost (n)"], difficulty: 2 },
          { id: "l4t3_v2", word: "earn", translation: "ganar", type: "verb", definition: "to get money for work", example: "I earn $50,000 a year at my job.", related: ["earnings"], difficulty: 2 },
          { id: "l4t3_v3", word: "be related to", translation: "tener que ver", type: "verb", definition: "to be connected to or associated with something else", example: "My favorite books are related to travel.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l4t3_a1", word: "financial", translation: "financiero", type: "adjective", definition: "having to do with money", example: "New York City is a major financial center.", related: ["finance", "finances"], difficulty: 2 },
          { id: "l4t3_a2", word: "full-length", translation: "de largometraje", type: "adjective", definition: "of normal or standard length for something", example: "A full-length movie is usually about an hour and a half long.", related: [], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l4t3_cm1",
          wrong: "Could you repeat again?",
          correct: "Could you repeat that? / Could you say that again?",
          explanation: "'Repeat again' es redundante. Usa 'repeat that' o 'say that again'."
        },
        {
          id: "l4t3_cm2",
          wrong: "What means 'innovation'?",
          correct: "What does 'innovation' mean?",
          explanation: "En preguntas usamos 'What does X mean?', no 'What means X?'"
        },
        {
          id: "l4t3_cm3",
          wrong: "The film costed $1.5 million.",
          correct: "The film cost $1.5 million.",
          explanation: "'Cost' es irregular: cost → cost → cost. No añade -ed."
        },
        {
          id: "l4t3_cm4",
          wrong: "It was a big success and earned much money.",
          correct: "It was a big success and earned a lot of money.",
          explanation: "En oraciones afirmativas, usa 'a lot of' en lugar de 'much'."
        },
        {
          id: "l4t3_cm5",
          wrong: "I'm not sure I understand. Can you be more clearer?",
          correct: "I'm not sure I understand. Can you be clearer? / more clear?",
          explanation: "No uses 'more' con comparativos que ya terminan en -er."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las oraciones sobre cine y finanzas:",
          items: [
            { sentence: "Snow White was a huge ___ and made millions.", answer: "hit/success", hint: "éxito" },
            { sentence: "The film ___ over $1 million to produce.", answer: "cost", hint: "pasado de 'cost'" },
            { sentence: "Taking a financial ___ paid off for Disney.", answer: "risk", hint: "riesgo" },
            { sentence: "The movie ___ more money than any film before it.", answer: "earned", hint: "ganó dinero" },
            { sentence: "It was a breakthrough ___ in animation.", answer: "innovation", hint: "algo nuevo" }
          ]
        },
        {
          type: "matching",
          instruction: "Une las expresiones para pedir aclaración:",
          pairs: [
            { term: "Could you repeat that?", match: "Pedir que repita" },
            { term: "What do you mean by...?", match: "Pedir explicación de un término" },
            { term: "I'm not sure I understand.", match: "Expresar confusión" },
            { term: "Could you explain that?", match: "Pedir más detalles" },
            { term: "Sorry, I didn't catch that.", match: "No escuchaste bien" },
            { term: "Let me make sure I understood.", match: "Confirmar comprensión" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma las oraciones al pasado:",
          items: [
            { original: "The film costs $8 million.", transformed: "The film cost $8 million." },
            { original: "Disney takes a big risk.", transformed: "Disney took a big risk." },
            { original: "The movie earns a lot of money.", transformed: "The movie earned a lot of money." },
            { original: "It becomes a huge success.", transformed: "It became a huge success." }
          ]
        },
        {
          type: "categorization",
          instruction: "Clasifica: Vocabulario de Cine (C) o Finanzas (F):",
          items: [
            { word: "hit (éxito)", category: "C" },
            { word: "investment", category: "F" },
            { word: "feature film", category: "C" },
            { word: "financial risk", category: "F" },
            { word: "industry", category: "ambos" },
            { word: "sales", category: "F" },
            { word: "innovation", category: "ambos" },
            { word: "premiere", category: "C" }
          ]
        }
      ],
      modelDialogue: {
        title: "Discutiendo una presentación sobre la historia del cine",
        dialogue: [
          { speaker: "Professor", text: "Snow White was a major financial risk for Disney Studios.", translation: "Blancanieves fue un gran riesgo financiero para Disney Studios." },
          { speaker: "Student", text: "Excuse me, Professor. What do you mean by 'financial risk'?", translation: "Disculpe, Profesor. ¿Qué quiere decir con 'riesgo financiero'?" },
          { speaker: "Professor", text: "Good question. It means the company could lose a lot of money if the film failed.", translation: "Buena pregunta. Significa que la compañía podía perder mucho dinero si la película fracasaba." },
          { speaker: "Student", text: "I see. And how much did the film cost to make?", translation: "Ya veo. ¿Y cuánto costó hacer la película?" },
          { speaker: "Professor", text: "It cost about $1.5 million, which was enormous for 1937.", translation: "Costó alrededor de $1.5 millones, lo cual era enorme para 1937." },
          { speaker: "Student", text: "Sorry, could you repeat that? How much exactly?", translation: "Disculpe, ¿podría repetir eso? ¿Cuánto exactamente?" },
          { speaker: "Professor", text: "About $1.5 million. That's about $30 million in today's money.", translation: "Alrededor de $1.5 millones. Eso es como $30 millones en dinero de hoy." },
          { speaker: "Student", text: "Wow! And was it a success?", translation: "¡Vaya! ¿Y fue un éxito?" },
          { speaker: "Professor", text: "Absolutely! It earned $8 million in its first release. It was a huge hit.", translation: "¡Absolutamente! Ganó $8 millones en su primer lanzamiento. Fue un gran éxito." }
        ],
        keyPhrases: [
          "What do you mean by...?",
          "Good question. It means...",
          "Could you repeat that?",
          "I see.",
          "How much did it cost?"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario de cine y finanzas",
        sounds: [
          { sound: "/ʃ/", examples: ["financial", "innovation", "decision"], tip: "El sonido 'sh' en terminaciones -cial, -tion" },
          { sound: "Silent letters", examples: ["business /ˈbɪznɪs/", "Wednesday"], tip: "La 'i' en business casi no se pronuncia" },
          { sound: "Word stress", examples: ["fiˈnancial", "innoˈvation", "inˈdustry"], tip: "El acento suele estar en la penúltima sílaba" }
        ],
        commonErrors: [
          { word: "success", wrong: "/suk-cess/", right: "/səkˈses/", note: "La primera 'u' suena como 'a' corta" },
          { word: "risk", wrong: "/reesk/", right: "/rɪsk/", note: "La 'i' es corta, como en 'it'" },
          { word: "decision", wrong: "/de-ci-sion/", right: "/dɪˈsɪʒn/", note: "La 's' suena como 'zh'" }
        ]
      },
      culturalNote: {
        title: "La industria del cine en Hollywood",
        content: "Hollywood ha sido el centro de la industria cinematográfica desde principios del siglo XX. Los estudios como Disney, Warner Bros., y Universal han creado 'franchises' (franquicias) que generan miles de millones. El concepto de 'blockbuster' (taquillazo) se refiere a películas que ganan muchísimo dinero. 'Box office' es la recaudación en taquilla. Un 'flop' es una película que pierde dinero. La industria usa términos como 'opening weekend' (fin de semana de estreno) para medir el éxito inicial.",
        examples: [
          "'Box office hit' - éxito de taquilla",
          "'Opening weekend' - fin de semana de estreno",
          "'Blockbuster' - película taquillera/éxito masivo",
          "'Flop' - fracaso comercial",
          "'Sequel' - secuela, 'Prequel' - precuela"
        ]
      },
      consolidationQuiz: [
        {
          question: "Para pedir que alguien repita algo, dices:",
          options: ["Repeat again, please", "Could you repeat that?", "Say it two times", "Tell me more"],
          correctAnswer: 1,
          explanation: "'Could you repeat that?' es la forma correcta y educada."
        },
        {
          question: "El pasado de 'cost' es:",
          options: ["costed", "costing", "cost", "costs"],
          correctAnswer: 2,
          explanation: "'Cost' es un verbo irregular: cost → cost → cost."
        },
        {
          question: "'Financial risk' significa:",
          options: ["riesgo de salud", "riesgo financiero", "inversión segura", "ganancia financiera"],
          correctAnswer: 1,
          explanation: "'Financial risk' es la posibilidad de perder dinero en una inversión."
        },
        {
          question: "'A hit' en el contexto de películas significa:",
          options: ["un golpe", "una pelea", "un éxito", "un premio"],
          correctAnswer: 2,
          explanation: "'Hit' en entretenimiento significa un gran éxito."
        },
        {
          question: "'What do you mean by innovation?' - 'mean' significa aquí:",
          options: ["malo", "promedio", "significar", "intención"],
          correctAnswer: 2,
          explanation: "'What do you mean by X?' pregunta por el significado de X."
        },
        {
          question: "'Full-length film' vs 'short film':",
          options: ["película de terror vs comedia", "largometraje vs cortometraje", "película larga vs aburrida", "película completa vs editada"],
          correctAnswer: 1,
          explanation: "'Full-length' es largometraje (90+ min), 'short' es cortometraje."
        }
      ],
      guidedProduction: [
        {
          task: "Pedir aclaraciones en una presentación",
          prompt: "Escucharías una presentación sobre un tema complejo. Escribe preguntas para pedir aclaración.",
          sampleAnswer: "Excuse me, what do you mean by 'market disruption'? Could you explain that in simpler terms? Also, I'm not sure I understood the part about financial projections. Could you repeat the main figures? And sorry, I didn't catch the last point. What was the expected ROI?",
          hints: ["Usa 'What do you mean by...?'", "Usa 'Could you explain/repeat...?'", "Usa 'I'm not sure I understood...'"]
        },
        {
          task: "Describir el éxito de una película",
          prompt: "Describe una película exitosa, incluyendo costos, ganancias y por qué fue un 'hit'.",
          sampleAnswer: "Avatar was one of the biggest hits in cinema history. The film cost about $237 million to produce, which was a huge financial risk. However, it earned over $2.9 billion worldwide, making it a massive success. The innovation in 3D technology attracted millions of viewers.",
          hints: ["Menciona el costo de producción", "Incluye ganancias", "Explica las razones del éxito"]
        },
        {
          task: "Hablar sobre innovación en una industria",
          prompt: "Describe una innovación importante en cualquier industria y su impacto.",
          sampleAnswer: "The smartphone was a major innovation in the technology industry. Apple took a big financial risk when they launched the iPhone in 2007. The decision paid off - it became a huge hit and changed how we communicate. The success of this innovation influenced the entire industry.",
          hints: ["Usa 'innovation', 'risk', 'success'", "Describe el impacto", "Menciona decisiones clave"]
        },
        {
          task: "Comparar costos y ganancias",
          prompt: "Compara dos productos o proyectos en términos de inversión y retorno.",
          sampleAnswer: "Project A cost $500,000 and earned $2 million in sales, while Project B cost $1 million but only earned $1.5 million. Although Project B had higher sales, Project A was more successful because it had a better return on investment. The financial risk was lower with Project A.",
          hints: ["Usa 'cost', 'earned', 'sales'", "Compara resultados", "Analiza el éxito relativo"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste sobre marketing y ventas. Ahora verás cómo el éxito en ventas depende de buenas decisiones de producción y riesgos financieros calculados.",
      connectionToNext: "En la siguiente lección aprenderás sobre parques temáticos y cómo presentar personas en contextos profesionales.",
      grammarTheoryIds: ['b1-present-perfect-vs-past-simple', 'b1-first-conditional', 'b1-passive-voice']
    },
    {
      id: 4,
      title: "Disneyland: The First Theme Park",
      titleEs: "Disneylandia: El Primer Parque Temático",
      introduction: {
        title: "🎢 Disneylandia: El Primer Parque Temático",
        explanation: "Disneylandia revolucionó el entretenimiento mundial. Aprenderás a presentar personas en contextos profesionales y vocabulario del sector del entretenimiento.",
        keyPoints: [
          "Vocabulario de entretenimiento: attraction (atracción), entertainment, theme park, visitor (visitante)",
          "Presentaciones formales: 'Allow me to introduce...', 'I'd like you to meet...'",
          "Presentaciones informales: 'This is my colleague...', 'Have you met...?'",
          "Respuestas: 'Nice to meet you', 'Pleased to meet you', 'It's a pleasure'"
        ],
        examples: [
          { english: "Allow me to introduce our CEO.", spanish: "Permítame presentarle a nuestro CEO.", explanation: "Presentación formal" },
          { english: "The park attracts millions of visitors.", spanish: "El parque atrae millones de visitantes.", explanation: "Vocabulario de entretenimiento" },
          { english: "Have you met Sarah from Marketing?", spanish: "¿Conoces a Sarah de Marketing?", explanation: "Presentación informal" }
        ],
        tips: [
          "💡 'Nice to meet you' es informal, 'Pleased to meet you' es más formal",
          "💡 'Attraction' puede ser una atracción de parque o algo atractivo en general",
          "💡 Nunca digas 'I present you...' - di 'I'd like to introduce you to...'"
        ],
        whenToUse: [
          "En presentaciones formales: 'Allow me to introduce...', 'I'd like you to meet...'",
          "En presentaciones informales: 'This is my colleague...', 'Have you met...?'",
          "Al hablar del sector entretenimiento: 'attraction', 'theme park', 'visitor'",
          "Al responder a presentaciones: 'Nice to meet you', 'Pleased to meet you'"
        ],
        whenNotToUse: [
          "No digas 'I present you John' → usa 'I'd like to introduce you to John'",
          "No uses 'Nice to meet you' en contextos muy formales → 'Pleased to meet you'"
        ]
      },
      objectives: [
        "Presentar a personas en situaciones formales e informales",
        "Responder en una presentación",
        "Hablar sobre el sector del entretenimiento",
        "Escribir su opinión acerca de los parques temáticos"
      ],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l4t4_n1", word: "attraction", translation: "atracción", type: "noun", definition: "something interesting that makes people want to visit", example: "The theme park has many attractions.", related: ["attract"], difficulty: 2 },
          { id: "l4t4_n2", word: "entertainment", translation: "entretenimiento", type: "noun", definition: "shows and activities that amuse people", example: "The entertainment at the party was excellent.", related: ["entertain"], difficulty: 2 },
          { id: "l4t4_n3", word: "theme park", translation: "parque temático", type: "noun", definition: "an amusement park based on a specific theme", example: "Disneyland was the first theme park.", related: [], difficulty: 2 },
          { id: "l4t4_n4", word: "visitor", translation: "visitante", type: "noun", definition: "a person who visits a place", example: "The park receives millions of visitors each year.", related: ["visit"], difficulty: 2 },
        ],
        verbs: [
          { id: "l4t4_v1", word: "attract", translation: "atraer", type: "verb", definition: "to cause someone to come to a place", example: "Theme parks attract tourists from around the world.", related: ["attraction", "attractive"], difficulty: 2 },
          { id: "l4t4_v2", word: "entertain", translation: "entretener", type: "verb", definition: "to amuse people", example: "The clown entertained the children.", related: ["entertainment"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l4t4_a1", word: "creative", translation: "creativo", type: "adjective", definition: "having the ability to produce new ideas", example: "She is a very creative designer.", related: ["creativity", "create"], difficulty: 2 },
          { id: "l4t4_a2", word: "magical", translation: "mágico", type: "adjective", definition: "having a special quality that makes something wonderful", example: "It was a magical evening.", related: ["magic"], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l4t4_cm1",
          wrong: "I present you my colleague, John.",
          correct: "I'd like to introduce you to my colleague, John. / Allow me to introduce my colleague, John.",
          explanation: "We don't use 'present' for introducing people. We use 'introduce'.",
          explanationEs: "No usamos 'present' para presentar personas. Usamos 'introduce'.",
          category: "vocabulary"
        },
        {
          id: "l4t4_cm2",
          wrong: "Nice to meet you. - Nice to meet you too.",
          correct: "Nice to meet you. - Nice to meet you too. / Likewise. / The pleasure is mine.",
          explanation: "There are several valid responses. 'Likewise' or 'The pleasure is mine' are more formal.",
          explanationEs: "Hay varias respuestas válidas. 'Likewise' o 'The pleasure is mine' son más formales.",
          category: "usage"
        },
        {
          id: "l4t4_cm3",
          wrong: "Have you met with Sarah?",
          correct: "Have you met Sarah?",
          explanation: "With 'meet' (to get to know someone) we don't use 'with'. It's just 'meet someone'.",
          explanationEs: "Con 'meet' (conocer a alguien) no usamos 'with'. Solo es 'meet someone'.",
          category: "grammar"
        },
        {
          id: "l4t4_cm4",
          wrong: "The park attracts millions of tourists every year.",
          correct: "The park attracts millions of visitors every year.",
          explanation: "'Visitors' is more general and precise. Not everyone is an international tourist.",
          explanationEs: "'Visitors' es más general y preciso. No todos son turistas internacionales.",
          category: "vocabulary"
        },
        {
          id: "l4t4_cm5",
          wrong: "This is a entertainment park.",
          correct: "This is an entertainment park.",
          explanation: "We use 'an' before vowels. 'Entertainment' starts with 'e'.",
          explanationEs: "Usamos 'an' antes de vocales. 'Entertainment' empieza con 'e'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las presentaciones formales e informales:",
          items: [
            { sentence: "Allow me to ___ our CEO, Mr. Johnson.", answer: "introduce", hint: "presentar formalmente" },
            { sentence: "Have you ___ Sarah from Marketing?", answer: "met", hint: "conocido" },
            { sentence: "Nice to meet you. - ___, / The ___ is mine.", answer: "Likewise/pleasure", hint: "respuesta formal" },
            { sentence: "I'd like you to ___ my colleague, Tom.", answer: "meet", hint: "conocer" },
            { sentence: "The park has many ___ for families.", answer: "attractions", hint: "cosas interesantes para visitar" }
          ]
        },
        {
          type: "matching",
          instruction: "Une las situaciones con las expresiones apropiadas:",
          pairs: [
            { term: "Presentación formal a un CEO", match: "Allow me to introduce..." },
            { term: "Presentación informal a un compañero", match: "This is my colleague..." },
            { term: "Preguntar si ya se conocen", match: "Have you met...?" },
            { term: "Responder a una presentación formal", match: "Pleased to meet you." },
            { term: "Responder a una presentación informal", match: "Nice to meet you." },
            { term: "Respuesta elegante a 'Nice to meet you'", match: "Likewise. / The pleasure is mine." }
          ]
        },
        {
          type: "role-play",
          instruction: "Completa las presentaciones:",
          items: [
            { prompt: "CEO arrives at a meeting", response: "Good morning, everyone. Allow me to introduce our new CEO, Ms. Williams." },
            { prompt: "Informal introduction at a party", response: "Hey, this is my friend Mark. Mark, this is Lisa from work." },
            { prompt: "Someone introduces you to their boss", response: "Pleased to meet you, Mr. Davis. I've heard a lot about you." }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en estas presentaciones:",
          items: [
            { incorrect: "I want to present you my boss.", corrected: "I'd like to introduce you to my boss." },
            { incorrect: "Nice to meet you. - Also nice.", corrected: "Nice to meet you. - Nice to meet you too. / Likewise." },
            { incorrect: "Have you met with our new manager?", corrected: "Have you met our new manager?" }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentaciones en una conferencia de negocios",
        dialogue: [
          { speaker: "Sarah", text: "Good morning, Mr. Chen. Allow me to introduce our new Marketing Director, Jennifer Adams.", translation: "Buenos días, Sr. Chen. Permítame presentarle a nuestra nueva Directora de Marketing, Jennifer Adams." },
          { speaker: "Mr. Chen", text: "Pleased to meet you, Ms. Adams. I've heard great things about your work.", translation: "Encantado de conocerla, Sra. Adams. He escuchado grandes cosas sobre su trabajo." },
          { speaker: "Jennifer", text: "The pleasure is mine, Mr. Chen. Thank you for having me at the conference.", translation: "El placer es mío, Sr. Chen. Gracias por invitarme a la conferencia." },
          { speaker: "Sarah", text: "Jennifer, Mr. Chen is the CEO of the company that owns several theme parks in Asia.", translation: "Jennifer, el Sr. Chen es el CEO de la empresa que posee varios parques temáticos en Asia." },
          { speaker: "Jennifer", text: "How interesting! I'd love to learn more about your attractions.", translation: "¡Qué interesante! Me encantaría saber más sobre sus atracciones." },
          { speaker: "Mr. Chen", text: "Of course! Our parks attract millions of visitors every year. Have you met Tom Lee? He's our Creative Director.", translation: "¡Por supuesto! Nuestros parques atraen millones de visitantes cada año. ¿Ha conocido a Tom Lee? Es nuestro Director Creativo." },
          { speaker: "Jennifer", text: "No, I haven't had the pleasure yet.", translation: "No, aún no he tenido el placer." },
          { speaker: "Mr. Chen", text: "Tom, this is Jennifer Adams from the entertainment industry. Jennifer, Tom Lee.", translation: "Tom, ella es Jennifer Adams de la industria del entretenimiento. Jennifer, Tom Lee." },
          { speaker: "Tom", text: "Nice to meet you, Jennifer.", translation: "Encantado de conocerte, Jennifer." },
          { speaker: "Jennifer", text: "Likewise! I'm looking forward to working with you.", translation: "¡Igualmente! Espero con ansias trabajar con ustedes." }
        ],
        keyPhrases: [
          "Allow me to introduce...",
          "Pleased to meet you.",
          "The pleasure is mine.",
          "Have you met...?",
          "Nice to meet you. - Likewise!"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación en presentaciones",
        sounds: [
          { sound: "/ʒ/", word: "pleasure", tip: "Como la 'j' francesa", tipEs: "PLEA-sure, la 's' suena 'zh'" },
          { sound: "Linking", word: "Nice to meet you", tip: "Conecta palabras para fluidez", tipEs: "Nice_to meet_you - sin pausas" },
          { sound: "Stress", word: "introduce", tip: "Acento en tercera sílaba", tipEs: "in-tro-DUCE" }
        ],
        minimalPairs: [
          { word1: "pleasure", word2: "pressure", explanation: "pleasure /ˈpleʒər/ = placer; pressure /ˈpreʃər/ = presión. /ʒ/ vs /ʃ/" },
          { word1: "meet", word2: "meat", explanation: "meet /miːt/ = conocer; meat /miːt/ = carne. Misma pronunciación, diferente ortografía." }
        ],
        intonation: [
          { pattern: "Rising for greetings", example: "Pleased to MEET you.↗", tip: "Subir en 'meet' suena más amigable", tipEs: "La entonación ascendente indica cordialidad" }
        ],
        commonErrors: [
          { word: "introduce", wrong: "/in-tro-du-ce/", right: "/ˌɪntrəˈdjuːs/", note: "La 'u' suena como 'iu'" },
          { word: "pleasure", wrong: "/ple-a-su-re/", right: "/ˈpleʒər/", note: "La 's' suena como 'zh'" },
          { word: "entertainment", wrong: "/enter-tain-ment/", right: "/ˌentərˈteɪnmənt/", note: "Acento en 'tain'" }
        ]
      },
      culturalNote: {
        title: "Etiqueta de presentaciones en el mundo de negocios",
        titleEs: "Etiqueta de presentaciones en el mundo de negocios",
        content: "En EE.UU. y UK, el apretón de manos es la norma para presentaciones formales. Debe ser firme pero no agresivo. El contacto visual es importante - demuestra confianza. En presentaciones formales, se usa el título + apellido (Mr. Smith, Dr. Jones). Después de que te inviten, puedes usar el nombre de pila. 'Pleased to meet you' es más formal que 'Nice to meet you'. En eventos sociales de negocios, lleva tarjetas de presentación (business cards).",
        contentEs: "Apretón de manos firme. Contacto visual. Título + apellido en formal. 'Pleased to meet you' más formal que 'Nice to meet you'.",
        region: "General",
        examples: [
          "Formal: 'How do you do?' (muy formal, UK)",
          "Formal: 'Pleased to meet you, Mr. Wilson.'",
          "Semi-formal: 'Nice to meet you, John.'",
          "Informal: 'Hey, great to meet you!'",
          "Respuesta formal: 'The pleasure is mine.'"
        ]
      },
      consolidationQuiz: [
        {
          question: "Para presentar formalmente a alguien, dices:",
          options: ["I present you Mr. Smith", "Allow me to introduce Mr. Smith", "This person is Mr. Smith", "Look, here is Mr. Smith"],
          correctAnswer: 1,
          explanation: "'Allow me to introduce...' es la forma formal correcta."
        },
        {
          question: "'Have you met Sarah?' significa:",
          options: ["¿Has tenido una reunión con Sarah?", "¿Conoces a Sarah?", "¿Has hablado con Sarah?", "¿Has visto a Sarah?"],
          correctAnswer: 1,
          explanation: "'Have you met [person]?' pregunta si ya conoces a esa persona."
        },
        {
          question: "Respuesta formal a 'Nice to meet you':",
          options: ["Yes, very nice", "Also nice", "Likewise / The pleasure is mine", "Thank you nice"],
          correctAnswer: 2,
          explanation: "'Likewise' o 'The pleasure is mine' son respuestas formales apropiadas."
        },
        {
          question: "'The park attracts millions of visitors' - 'attracts' significa:",
          options: ["repele", "atrae", "entretiene", "divierte"],
          correctAnswer: 1,
          explanation: "'Attract' significa atraer o llamar la atención de personas."
        },
        {
          question: "'Theme park' en español es:",
          options: ["parque de temas", "parque temático", "parque de atracciones", "parque de diversiones"],
          correctAnswer: 1,
          explanation: "'Theme park' se traduce como 'parque temático'."
        },
        {
          question: "¿Cuál es INCORRECTA?",
          options: ["I'd like you to meet John", "Allow me to introduce John", "Have you met John?", "I present you John"],
          correctAnswer: 3,
          explanation: "'I present you John' es incorrecto. No usamos 'present' para presentar personas."
        }
      ],
      guidedProduction: [
        {
          task: "Hacer una presentación formal",
          prompt: "Presenta a tu jefe a un cliente importante que visita tu empresa.",
          sampleAnswer: "Mr. Rodriguez, allow me to introduce our CEO, Mrs. Thompson. Mrs. Thompson, this is Mr. Rodriguez from Global Enterprises. He's interested in partnering with us on the new project.",
          hints: ["Usa 'Allow me to introduce...'", "Da contexto sobre ambas personas", "Usa títulos formales"]
        },
        {
          task: "Hacer una presentación informal",
          prompt: "Presenta a un amigo nuevo a tu grupo de amigos en una fiesta.",
          sampleAnswer: "Hey everyone! This is my friend Carlos from my Spanish class. Carlos, this is the group I was telling you about. That's Maria, Tom, and Lisa. Maria, Carlos is really into video games like you!",
          hints: ["Usa 'This is...'", "Da información relevante", "Encuentra conexiones entre las personas"]
        },
        {
          task: "Responder a presentaciones",
          prompt: "Escribe diferentes formas de responder cuando te presentan a alguien.",
          sampleAnswer: "Formal: 'Pleased to meet you, Mr. Davis. I've heard excellent things about your company.' Semi-formal: 'Nice to meet you, Sarah. Tom has told me a lot about you.' Informal: 'Hey, nice to meet you! I've heard you're really into music.'",
          hints: ["Da opciones formal, semi-formal e informal", "Incluye seguimiento a la presentación", "Muestra interés en la persona"]
        },
        {
          task: "Describir un lugar de entretenimiento",
          prompt: "Describe un parque temático o atracción turística que conozcas.",
          sampleAnswer: "Universal Studios is one of the most popular theme parks in the world. It attracts millions of visitors every year with its creative attractions based on famous movies. The entertainment includes roller coasters, shows, and interactive experiences. It's truly a magical place for families.",
          hints: ["Usa 'attracts visitors', 'entertainment', 'attractions'", "Describe qué lo hace especial", "Menciona el público objetivo"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste sobre riesgos financieros en el cine. Disneylandia fue otro gran riesgo que se convirtió en éxito revolucionario.",
      connectionToNext: "En la siguiente lección conocerás la historia de Sony, otra empresa que tomó grandes riesgos para crear productos innovadores.",
      grammarTheoryIds: ['b1-present-perfect-vs-past-simple', 'b1-relative-clauses']
    },
    {
      id: 5,
      title: "The Sony Story",
      titleEs: "La Historia de Sony",
      introduction: {
        title: "📻 La Historia de Sony",
        explanation: "La historia de Sony es una lección de innovación y perseverancia. Aprenderás a usar el pasado simple para narrar historias empresariales y vocabulario de tecnología.",
        keyPoints: [
          "Pasado simple regular: work → worked, start → started, found → founded",
          "Pasado simple irregular: begin → began, make → made, become → became",
          "Vocabulario empresarial: founder (fundador), company (empresa), technology, invention (invento)",
          "Expresiones de tiempo pasado: in 1946, last year, ago, back then"
        ],
        examples: [
          { english: "Sony was founded in 1946.", spanish: "Sony fue fundada en 1946.", explanation: "Pasado simple pasivo" },
          { english: "They developed revolutionary products.", spanish: "Desarrollaron productos revolucionarios.", explanation: "Pasado simple activo" },
          { english: "The company became very successful.", spanish: "La empresa se volvió muy exitosa.", explanation: "Verbo irregular" }
        ],
        tips: [
          "💡 'Found' (fundar) es diferente de 'find' (encontrar) - found → founded",
          "💡 Para preguntas en pasado: 'Did they develop...?' no 'Did they developed...?'",
          "💡 'Technology' es incontable: 'new technology' no 'new technologies'"
        ],
        whenToUse: [
          "Al narrar historia empresarial: 'Sony was founded in 1946'",
          "Al describir desarrollo de productos: 'They developed revolutionary products'",
          "En biografías de empresas: 'The company became very successful'",
          "Con expresiones de tiempo pasado: 'in 1946', 'last year', 'ago'"
        ],
        whenNotToUse: [
          "No digas 'Did they developed...?' → 'Did they develop...?' (verbo base después de did)",
          "No uses 'technologies' → 'technology' es incontable"
        ]
      },
      objectives: [
        "Hablar sobre la historia de una empresa",
        "Usar el pasado simple",
        "Describir productos tecnológicos",
        "Escribir sobre innovación tecnológica"
      ],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l4t5_n1", word: "company", translation: "empresa", type: "noun", definition: "a business organization", example: "Sony is a large company.", related: [], difficulty: 2 },
          { id: "l4t5_n2", word: "founder", translation: "fundador", type: "noun", definition: "a person who starts a company", example: "The founders had a great vision.", related: ["found"], difficulty: 2 },
          { id: "l4t5_n3", word: "technology", translation: "tecnología", type: "noun", definition: "scientific knowledge used in practical ways", example: "Technology has changed our lives.", related: ["technological"], difficulty: 2 },
          { id: "l4t5_n4", word: "invention", translation: "invento", type: "noun", definition: "something new that is created", example: "The transistor radio was an important invention.", related: ["invent", "inventor"], difficulty: 2 },
        ],
        verbs: [
          { id: "l4t5_v1", word: "found", translation: "fundar", type: "verb", definition: "to start a company or organization", example: "They founded the company in 1946.", related: ["founder", "foundation"], difficulty: 2 },
          { id: "l4t5_v2", word: "develop", translation: "desarrollar", type: "verb", definition: "to create or improve something over time", example: "They developed new products.", related: ["development"], difficulty: 2 },
          { id: "l4t5_v3", word: "invent", translation: "inventar", type: "verb", definition: "to create something new", example: "Edison invented the light bulb.", related: ["invention", "inventor"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l4t5_a1", word: "innovative", translation: "innovador", type: "adjective", definition: "introducing new ideas or methods", example: "Sony was known for its innovative products.", related: ["innovation", "innovate"], difficulty: 2 },
          { id: "l4t5_a2", word: "successful", translation: "exitoso", type: "adjective", definition: "achieving desired results", example: "The company became very successful.", related: ["success", "succeed"], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l4t5_cm1",
          wrong: "Sony was found in 1946.",
          correct: "Sony was founded in 1946.",
          explanation: "'Find' (to find) → found. 'Found' (to establish) → founded. They are different verbs.",
          explanationEs: "'Find' (encontrar) → found. 'Found' (fundar) → founded. Son verbos diferentes.",
          category: "vocabulary"
        },
        {
          id: "l4t5_cm2",
          wrong: "They developt new products.",
          correct: "They developed new products.",
          explanation: "The past tense of 'develop' is 'developed', not 'developt'.",
          explanationEs: "El pasado de 'develop' es 'developed', no 'developt'.",
          category: "grammar"
        },
        {
          id: "l4t5_cm3",
          wrong: "The company become successful quickly.",
          correct: "The company became successful quickly.",
          explanation: "'Become' is irregular: become → became → become.",
          explanationEs: "'Become' es irregular: become → became → become.",
          category: "grammar"
        },
        {
          id: "l4t5_cm4",
          wrong: "The founders invented many new technologies.",
          correct: "The founders developed many new technologies.",
          explanation: "'Invent' means to create something completely new. 'Develop' means to improve or build on something existing.",
          explanationEs: "'Invent' es crear algo completamente nuevo. 'Develop' es mejorar o crear sobre algo existente.",
          category: "vocabulary"
        },
        {
          id: "l4t5_cm5",
          wrong: "Did they developed the transistor radio?",
          correct: "Did they develop the transistor radio?",
          explanation: "In questions with 'did', the verb goes in base form: 'Did they develop...?'",
          explanationEs: "En preguntas con 'did', el verbo va en forma base: 'Did they develop...?'",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con la forma correcta del verbo en pasado:",
          items: [
            { sentence: "Sony ___ (found) in Tokyo in 1946.", answer: "was founded", hint: "pasivo" },
            { sentence: "The founders ___ (develop) innovative products.", answer: "developed", hint: "activo" },
            { sentence: "The company ___ (become) very successful.", answer: "became", hint: "irregular" },
            { sentence: "They ___ (invent) the transistor radio.", answer: "invented", hint: "crear algo nuevo" },
            { sentence: "Sony ___ (begin) as a small company.", answer: "began", hint: "irregular: begin" }
          ]
        },
        {
          type: "matching",
          instruction: "Une el verbo base con su pasado:",
          pairs: [
            { term: "found (fundar)", match: "founded" },
            { term: "find (encontrar)", match: "found" },
            { term: "develop", match: "developed" },
            { term: "become", match: "became" },
            { term: "begin", match: "began" },
            { term: "make", match: "made" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma al pasado simple:",
          items: [
            { original: "They develop new technology.", transformed: "They developed new technology." },
            { original: "The company becomes successful.", transformed: "The company became successful." },
            { original: "He founds the company.", transformed: "He founded the company." },
            { original: "They invent a new device.", transformed: "They invented a new device." }
          ]
        },
        {
          type: "word-order",
          instruction: "Ordena para formar oraciones sobre la historia de Sony:",
          items: [
            { words: ["was", "Sony", "1946", "founded", "in"], answer: "Sony was founded in 1946." },
            { words: ["the", "company", "successful", "very", "became"], answer: "The company became very successful." },
            { words: ["products", "they", "innovative", "developed"], answer: "They developed innovative products." }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentación sobre la historia de una empresa",
        dialogue: [
          { speaker: "Presenter", text: "Today I'm going to talk about the history of Sony.", translation: "Hoy voy a hablar sobre la historia de Sony." },
          { speaker: "Presenter", text: "Sony was founded in Tokyo in 1946 by Masaru Ibuka and Akio Morita.", translation: "Sony fue fundada en Tokio en 1946 por Masaru Ibuka y Akio Morita." },
          { speaker: "Audience member", text: "What did they produce at first?", translation: "¿Qué produjeron al principio?" },
          { speaker: "Presenter", text: "They started by making electronic equipment. Then they developed the transistor radio.", translation: "Empezaron fabricando equipos electrónicos. Luego desarrollaron la radio de transistores." },
          { speaker: "Audience member", text: "When did they become internationally successful?", translation: "¿Cuándo se volvieron exitosos internacionalmente?" },
          { speaker: "Presenter", text: "The company became successful in the 1950s after they invented the pocket transistor radio.", translation: "La empresa se volvió exitosa en los años 50 después de inventar la radio de transistores de bolsillo." },
          { speaker: "Audience member", text: "Were the founders engineers?", translation: "¿Los fundadores eran ingenieros?" },
          { speaker: "Presenter", text: "Yes, both founders had engineering backgrounds. That's why Sony was so innovative.", translation: "Sí, ambos fundadores tenían formación en ingeniería. Por eso Sony fue tan innovadora." }
        ],
        keyPhrases: [
          "Sony was founded in 1946",
          "They started by making...",
          "They developed the transistor radio",
          "The company became successful",
          "The founders invented..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación del pasado regular -ed",
        sounds: [
          { sound: "/t/", word: "developed", tip: "Después de /p/ suena /t/", tipEs: "de-VEL-oped, no 'de-ve-lo-ped'" },
          { sound: "/ɪd/", word: "founded", tip: "Termina en -d, añade sílaba", tipEs: "FOUND-ed, dos sílabas" },
          { sound: "Stress", word: "technology", tip: "Acento en segunda sílaba", tipEs: "tek-NO-lo-gy" }
        ],
        minimalPairs: [
          { word1: "founded", word2: "found", explanation: "founded /ˈfaʊndɪd/ = fundó; found /faʊnd/ = encontró (pasado de find). Cuidado con la confusión." },
          { word1: "developed", word2: "develop", explanation: "developed /dɪˈveləpt/ - la -ed suena /t/ tras /p/ sordo" }
        ],
        intonation: [
          { pattern: "Falling for statements about history", example: "Sony was founded in 1946.↘", tip: "Afirmaciones históricas bajan al final", tipEs: "Indica que es información completa" }
        ],
        commonErrors: [
          { word: "founded", wrong: "/faund/", right: "/ˈfaʊndɪd/", note: "Tiene dos sílabas por terminar en -d" },
          { word: "developed", wrong: "/de-ve-lo-ped/", right: "/dɪˈveləpt/", note: "La -ed suena como /t/" },
          { word: "technology", wrong: "/tek-no-lo-gy/", right: "/tekˈnɒlədʒi/", note: "Acento en la segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "El éxito empresarial japonés",
        titleEs: "El éxito empresarial japonés",
        content: "Sony representa el espíritu innovador japonés de posguerra. Japón pasó de ser un país devastado a convertirse en potencia tecnológica. Las empresas japonesas como Sony, Toyota y Honda se caracterizan por su enfoque en calidad ('kaizen' = mejora continua) e innovación. El 'Made in Japan' pasó de significar productos baratos a sinónimo de alta calidad. Los fundadores japoneses a menudo mantienen relaciones paternalistas con sus empleados, promoviendo lealtad y trabajo en equipo.",
        contentEs: "Kaizen = mejora continua. Made in Japan = calidad. Relaciones paternalistas entre fundadores y empleados.",
        region: "General",
        examples: [
          "'Kaizen' - filosofía de mejora continua",
          "'Quality control' - control de calidad (concepto perfeccionado en Japón)",
          "'Lifetime employment' - empleo de por vida (tradicional en Japón)",
          "'Seniority system' - sistema por antigüedad"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Founded' viene del verbo:",
          options: ["find (encontrar)", "found (fundar)", "fund (financiar)", "foundation"],
          correctAnswer: 1,
          explanation: "'Founded' es el pasado de 'found' (fundar), no de 'find' (encontrar)."
        },
        {
          question: "El pasado de 'become' es:",
          options: ["becomed", "becamed", "became", "become"],
          correctAnswer: 2,
          explanation: "'Become' es irregular: become → became → become."
        },
        {
          question: "'The company was founded in 1946' está en:",
          options: ["presente simple", "pasado simple activo", "pasado simple pasivo", "presente perfecto"],
          correctAnswer: 2,
          explanation: "'Was founded' es pasado simple pasivo (fue fundada)."
        },
        {
          question: "'Develop' vs 'Invent':",
          options: ["son sinónimos", "develop es crear, invent es mejorar", "invent es crear algo nuevo, develop es mejorar/crear sobre algo", "ninguna diferencia"],
          correctAnswer: 2,
          explanation: "'Invent' = crear algo completamente nuevo. 'Develop' = mejorar o crear gradualmente."
        },
        {
          question: "La pronunciación de -ed en 'developed' es:",
          options: ["/ɪd/ (sílaba extra)", "/d/", "/t/", "silenciosa"],
          correctAnswer: 2,
          explanation: "Después de /p/ (sonido sordo), -ed suena como /t/."
        },
        {
          question: "'Did they develop...?' - el verbo va en:",
          options: ["pasado", "forma base", "participio", "gerundio"],
          correctAnswer: 1,
          explanation: "Después de 'did' usamos forma base: 'Did they develop?' no 'Did they developed?'"
        }
      ],
      guidedProduction: [
        {
          task: "Contar la historia de una empresa",
          prompt: "Cuenta la historia de una empresa famosa (Apple, Tesla, Netflix, etc.) usando pasado simple.",
          sampleAnswer: "Apple was founded in 1976 by Steve Jobs and Steve Wozniak. They started in a garage in California. The company developed the first Macintosh computer in 1984. It became very successful after they invented the iPhone in 2007. Today Apple is one of the most valuable companies in the world.",
          hints: ["Usa 'was founded', 'developed', 'became'", "Incluye fechas importantes", "Menciona productos clave"]
        },
        {
          task: "Describir a fundadores",
          prompt: "Describe a los fundadores de una empresa y qué los hizo exitosos.",
          sampleAnswer: "The founders of Sony, Masaru Ibuka and Akio Morita, were both engineers with innovative ideas. They founded the company with only $500. Ibuka was the technical genius who invented new products, while Morita was the businessman who developed marketing strategies. Together, they built one of the most successful technology companies.",
          hints: ["Usa verbos en pasado", "Describe sus roles diferentes", "Menciona qué los hizo especiales"]
        },
        {
          task: "Hacer preguntas sobre historia empresarial",
          prompt: "Escribe 5 preguntas que harías sobre la historia de una empresa.",
          sampleAnswer: "1. When was the company founded? 2. Who were the founders? 3. What did they produce at first? 4. When did they become internationally successful? 5. What innovative products did they develop?",
          hints: ["Usa 'When was...?', 'Who were...?', 'What did...?'", "Pregunta sobre fechas, personas, productos", "Usa pasado simple"]
        },
        {
          task: "Comparar el pasado y presente de una empresa",
          prompt: "Compara cómo era una empresa antes y cómo es ahora.",
          sampleAnswer: "Sony started as a small company with 20 employees. The founders developed simple electronic equipment. In the past, they focused on audio products like radios and Walkmans. Today, Sony is a huge multinational with thousands of employees. They now produce gaming consoles, TVs, and movies. The company became much more diverse over the years.",
          hints: ["Usa pasado para antes, presente para ahora", "Compara tamaño, productos, enfoque", "Usa 'In the past...' y 'Today/Now...'"]
        }
      ],
      connectionToPrevious: "En la lección anterior viste cómo Disney revolucionó el entretenimiento. Sony hizo lo mismo en electrónica, tomando riesgos innovadores.",
      connectionToNext: "En la siguiente lección aprenderás a comparar productos de Sony usando adjetivos comparativos y superlativos.",
      grammarTheoryIds: ['b1-present-perfect-vs-past-simple', 'b1-used-to-would', 'b1-passive-voice']
    },
    {
      id: 6,
      title: "Sony's Revolutionary Products",
      titleEs: "Los Productos Revolucionarios de Sony",
      introduction: {
        title: "🎧 Productos Revolucionarios de Sony",
        explanation: "El Walkman cambió cómo escuchamos música. Aprenderás a describir y comparar productos usando adjetivos comparativos.",
        keyPoints: [
          "Comparativos cortos: small → smaller, big → bigger, easy → easier",
          "Comparativos largos: revolutionary → more revolutionary, expensive → more expensive",
          "Superlativos: the smallest, the most innovative, the best",
          "Vocabulario de productos: device (dispositivo), feature (característica), quality (calidad)"
        ],
        examples: [
          { english: "This model is smaller than the previous one.", spanish: "Este modelo es más pequeño que el anterior.", explanation: "Comparativo" },
          { english: "It's the most innovative product on the market.", spanish: "Es el producto más innovador del mercado.", explanation: "Superlativo" },
          { english: "The sound quality is better than before.", spanish: "La calidad de sonido es mejor que antes.", explanation: "Comparativo irregular" }
        ],
        tips: [
          "💡 Adjetivos de 1 sílaba: añadir -er/-est (small → smaller → smallest)",
          "💡 Adjetivos de 3+ sílabas: more/most + adjetivo",
          "💡 Irregulares: good → better → best, bad → worse → worst"
        ],
        whenToUse: [
          "Al comparar productos: 'This model is smaller than the previous one'",
          "Al destacar características: 'It's the most innovative product on the market'",
          "En reseñas de productos: 'The sound quality is better than before'",
          "Al describir dispositivos: 'device', 'feature', 'quality'"
        ],
        whenNotToUse: [
          "No uses 'more small' → 'smaller' (adjetivos cortos usan -er)",
          "No digas 'gooder' o 'badder' → usa 'better' y 'worse' (irregulares)"
        ]
      },
      objectives: [
        "Describir características de productos",
        "Comparar productos",
        "Usar adjetivos comparativos",
        "Escribir una reseña de producto"
      ],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l4t6_n1", word: "device", translation: "dispositivo", type: "noun", definition: "a piece of equipment designed for a specific purpose", example: "The smartphone is a popular device.", related: [], difficulty: 2 },
          { id: "l4t6_n2", word: "feature", translation: "característica", type: "noun", definition: "an important part of something", example: "This phone has many features.", related: [], difficulty: 2 },
          { id: "l4t6_n3", word: "quality", translation: "calidad", type: "noun", definition: "how good something is", example: "Sony is known for quality products.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l4t6_v1", word: "compare", translation: "comparar", type: "verb", definition: "to examine differences and similarities", example: "Let's compare these two products.", related: ["comparison"], difficulty: 2 },
          { id: "l4t6_v2", word: "improve", translation: "mejorar", type: "verb", definition: "to make something better", example: "They improved the design.", related: ["improvement"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l4t6_a1", word: "portable", translation: "portátil", type: "adjective", definition: "easy to carry", example: "The Walkman was a portable music player.", related: [], difficulty: 2 },
          { id: "l4t6_a2", word: "compact", translation: "compacto", type: "adjective", definition: "small and taking little space", example: "The device has a compact design.", related: [], difficulty: 2 },
          { id: "l4t6_a3", word: "revolutionary", translation: "revolucionario", type: "adjective", definition: "completely new and different", example: "The iPod was revolutionary.", related: ["revolution"], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l4t6_cm1",
          wrong: "This model is more small than the other.",
          correct: "This model is smaller than the other.",
          explanation: "Adjetivos de 1-2 sílabas forman comparativo con -er: small → smaller."
        },
        {
          id: "l4t6_cm2",
          wrong: "It's the innovativest product on the market.",
          correct: "It's the most innovative product on the market.",
          explanation: "Adjetivos largos (3+ sílabas) usan 'most' para superlativo."
        },
        {
          id: "l4t6_cm3",
          wrong: "This is gooder than the last version.",
          correct: "This is better than the last version.",
          explanation: "'Good' es irregular: good → better → best."
        },
        {
          id: "l4t6_cm4",
          wrong: "The quality is more better now.",
          correct: "The quality is better now.",
          explanation: "No uses 'more' con comparativos irregulares. Solo 'better', no 'more better'."
        },
        {
          id: "l4t6_cm5",
          wrong: "It's the most cheap option available.",
          correct: "It's the cheapest option available.",
          explanation: "'Cheap' tiene una sílaba, usa -est: cheapest, no 'most cheap'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con el comparativo o superlativo correcto:",
          items: [
            { sentence: "This phone is ___ (small) than the previous model.", answer: "smaller", hint: "comparativo" },
            { sentence: "It's the ___ (innovative) product we've ever made.", answer: "most innovative", hint: "superlativo largo" },
            { sentence: "The quality is ___ (good) than before.", answer: "better", hint: "irregular" },
            { sentence: "This is the ___ (expensive) TV in the store.", answer: "most expensive", hint: "superlativo largo" },
            { sentence: "The new design is ___ (compact) than the old one.", answer: "more compact", hint: "comparativo 2 sílabas" }
          ]
        },
        {
          type: "matching",
          instruction: "Une el adjetivo con su comparativo y superlativo:",
          pairs: [
            { term: "small", match: "smaller - smallest" },
            { term: "expensive", match: "more expensive - most expensive" },
            { term: "good", match: "better - best" },
            { term: "bad", match: "worse - worst" },
            { term: "revolutionary", match: "more revolutionary - most revolutionary" },
            { term: "big", match: "bigger - biggest" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma usando comparativos o superlativos:",
          items: [
            { original: "This TV has good quality. That TV has better quality.", transformed: "That TV has better quality than this one." },
            { original: "The Walkman is small. The iPod is smaller.", transformed: "The iPod is smaller than the Walkman." },
            { original: "No other product is as innovative as this one.", transformed: "This is the most innovative product." }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores de comparativos/superlativos:",
          items: [
            { incorrect: "This is the most good product.", corrected: "This is the best product." },
            { incorrect: "It's more cheaper than the other one.", corrected: "It's cheaper than the other one." },
            { incorrect: "Sony makes the innovativest devices.", corrected: "Sony makes the most innovative devices." }
          ]
        }
      ],
      modelDialogue: {
        title: "Comparando productos en una tienda de electrónica",
        dialogue: [
          { speaker: "Customer", text: "I'm looking for a new portable speaker. Can you help me?", translation: "Busco un nuevo altavoz portátil. ¿Pueden ayudarme?" },
          { speaker: "Salesperson", text: "Of course! We have several options. This Sony model is our most popular.", translation: "¡Por supuesto! Tenemos varias opciones. Este modelo Sony es el más popular." },
          { speaker: "Customer", text: "How does it compare to this JBL speaker?", translation: "¿Cómo se compara con este altavoz JBL?" },
          { speaker: "Salesperson", text: "The Sony is smaller and more portable, but the JBL has better sound quality.", translation: "El Sony es más pequeño y más portátil, pero el JBL tiene mejor calidad de sonido." },
          { speaker: "Customer", text: "Which one is more durable?", translation: "¿Cuál es más duradero?" },
          { speaker: "Salesperson", text: "The JBL is the most durable. It's also waterproof.", translation: "El JBL es el más duradero. También es resistente al agua." },
          { speaker: "Customer", text: "And which is cheaper?", translation: "¿Y cuál es más barato?" },
          { speaker: "Salesperson", text: "The Sony is cheaper - $89 versus $129 for the JBL.", translation: "El Sony es más barato - $89 versus $129 por el JBL." },
          { speaker: "Customer", text: "I think I'll go with the JBL. Quality is more important to me than price.", translation: "Creo que me llevaré el JBL. La calidad es más importante para mí que el precio." },
          { speaker: "Salesperson", text: "Good choice! It's the best speaker in its category.", translation: "¡Buena elección! Es el mejor altavoz en su categoría." }
        ],
        keyPhrases: [
          "The Sony is smaller than...",
          "It has better quality",
          "Which one is more durable?",
          "The JBL is the most durable",
          "It's the best speaker in its category"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de comparativos y superlativos",
        sounds: [
          { sound: "/ər/", examples: ["smaller", "faster", "better"], tip: "La terminación -er suena como 'r' suave" },
          { sound: "/ɪst/", examples: ["smallest", "fastest", "best"], tip: "La terminación -est suena como 'ist'" },
          { sound: "Stress in comparisons", examples: ["SMALLer than", "MORE exPENsive"], tip: "El acento va en el adjetivo, no en 'than'" }
        ],
        commonErrors: [
          { word: "portable", wrong: "/por-ta-ble/", right: "/ˈpɔːtəbl/", note: "Tres sílabas, no cuatro" },
          { word: "quality", wrong: "/kwa-li-ti/", right: "/ˈkwɒlɪti/", note: "La 'a' suena como 'o'" },
          { word: "revolutionary", wrong: "/re-vo-lu-tion-a-ry/", right: "/ˌrevəˈluːʃənri/", note: "Acento en 'lu'" }
        ]
      },
      culturalNote: {
        title: "Cultura de reseñas de productos",
        content: "En países angloparlantes, es muy común leer y escribir reseñas (reviews) de productos antes de comprar. Amazon, Yelp, y otros sitios dependen de reseñas de usuarios. Al comparar productos, los compradores buscan: value for money (relación calidad-precio), durability (durabilidad), customer service (servicio al cliente), y user reviews (reseñas de usuarios). Las expresiones como 'best seller', 'top rated', y 'customer favorite' son importantes en marketing.",
        examples: [
          "'Best seller' - el más vendido",
          "'Top rated' - mejor calificado",
          "'Value for money' - relación calidad-precio",
          "'Customer reviews' - reseñas de clientes",
          "'Bang for your buck' - lo máximo por tu dinero (informal)"
        ]
      },
      consolidationQuiz: [
        {
          question: "El comparativo de 'small' es:",
          options: ["more small", "smaller", "smallest", "smally"],
          correctAnswer: 1,
          explanation: "Adjetivos cortos (1 sílaba) añaden -er: small → smaller."
        },
        {
          question: "El superlativo de 'innovative' es:",
          options: ["innovativest", "more innovative", "most innovative", "innovativier"],
          correctAnswer: 2,
          explanation: "Adjetivos largos (3+ sílabas) usan 'most': most innovative."
        },
        {
          question: "'Good' - 'better' - '___':",
          options: ["goodest", "most good", "better", "best"],
          correctAnswer: 3,
          explanation: "'Good' es irregular: good → better → best."
        },
        {
          question: "'This TV is ___ than that one' (expensive):",
          options: ["expensiver", "more expensive", "most expensive", "expensive"],
          correctAnswer: 1,
          explanation: "'Expensive' es largo (3 sílabas), usa 'more expensive'."
        },
        {
          question: "'Portable' significa:",
          options: ["portátil/fácil de llevar", "importable", "reportable", "transportador"],
          correctAnswer: 0,
          explanation: "'Portable' significa que es fácil de llevar o transportar."
        },
        {
          question: "¿Cuál es INCORRECTA?",
          options: ["smaller than", "more innovative than", "better than", "more better than"],
          correctAnswer: 3,
          explanation: "'More better' es incorrecto. Solo 'better', no añadas 'more'."
        }
      ],
      guidedProduction: [
        {
          task: "Comparar dos productos",
          prompt: "Compara dos smartphones o computadoras que conozcas.",
          sampleAnswer: "The iPhone is more expensive than the Samsung Galaxy, but many people think it's easier to use. The Samsung has a bigger screen and better battery life. However, the iPhone has the best camera quality. Both are great devices, but the Samsung is cheaper and more customizable.",
          hints: ["Usa comparativos: bigger, cheaper, better", "Usa 'than' para comparar", "Menciona pros y contras de cada uno"]
        },
        {
          task: "Escribir una reseña de producto",
          prompt: "Escribe una breve reseña de un producto electrónico que tengas.",
          sampleAnswer: "This Sony headphone is the best purchase I've made this year. The sound quality is better than my old Bose headphones, and they're more comfortable to wear. The design is compact and portable. The battery life could be longer, but overall, it's the most innovative product in its price range.",
          hints: ["Usa superlativos: the best, the most", "Compara con productos similares", "Menciona características específicas"]
        },
        {
          task: "Recomendar un producto",
          prompt: "Un amigo te pide recomendación. Compara opciones y recomienda una.",
          sampleAnswer: "If you want the most affordable option, go with the Xiaomi - it's the cheapest and still has good quality. But if durability is more important to you, the Samsung is more durable and has better customer support. In my opinion, the Samsung is the best choice for the price.",
          hints: ["Compara precios, calidad, durabilidad", "Usa 'If you want...', 'But if... is more important'", "Da tu opinión al final"]
        },
        {
          task: "Describir mejoras en un producto",
          prompt: "Describe cómo un producto ha mejorado en su nueva versión.",
          sampleAnswer: "The new PlayStation 5 is much better than the PS4. It's faster and has better graphics. The games look more realistic than ever. The controller is more innovative with haptic feedback. The only downside is it's bigger and more expensive than the previous version.",
          hints: ["Compara la versión nueva con la anterior", "Usa 'better than', 'faster than'", "Menciona mejoras y posibles desventajas"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste la historia de Sony. Ahora puedes comparar sus productos innovadores a través de los años.",
      connectionToNext: "En la siguiente lección aprenderás sobre la marca Sony y cómo hacer reservaciones de viaje.",
      grammarTheoryIds: ['b1-relative-clauses', 'a2-comparatives-superlatives']
    },
    {
      id: 7,
      title: "Consolidating the Sony Brand",
      titleEs: "Consolidación de la Marca Sony",
      introduction: {
        title: "🏢 Consolidación de la Marca Sony",
        explanation: "Una marca fuerte es clave para el éxito empresarial. Aprenderás vocabulario de branding y cómo hacer reservaciones de viaje.",
        keyPoints: [
          "Vocabulario de marca: brand name, logo, recognition (reconocimiento), representative (representante)",
          "Preguntas sí/no: 'Do you have...?', 'Is there...?', 'Can I...?'",
          "Reservar vuelo: 'I'd like to book a flight to...', 'Is there a direct flight?'",
          "Respuestas cortas: 'Yes, I do' / 'No, I don't', 'Yes, there is' / 'No, there isn't'"
        ],
        examples: [
          { english: "I'd like to book a round-trip flight to Tokyo.", spanish: "Me gustaría reservar un vuelo de ida y vuelta a Tokio.", explanation: "Reservando vuelo" },
          { english: "Do you have any window seats available?", spanish: "¿Tienen asientos de ventana disponibles?", explanation: "Pregunta sí/no" },
          { english: "The brand has excellent name recognition.", spanish: "La marca tiene excelente reconocimiento.", explanation: "Vocabulario de marca" }
        ],
        tips: [
          "💡 'Brand' es la marca en general, 'brand name' es el nombre específico",
          "💡 'Colleague' (colega) es más formal que 'coworker' (compañero de trabajo)",
          "💡 En reservas: 'aisle seat' (asiento de pasillo) vs 'window seat' (asiento de ventana)"
        ],
        whenToUse: [
          "Al reservar vuelos: 'I'd like to book a round-trip flight to...'",
          "Al hacer preguntas sí/no: 'Do you have...?', 'Is there a direct flight?'",
          "En conversaciones sobre marca: 'brand name', 'logo', 'recognition'",
          "Al responder brevemente: 'Yes, I do' / 'No, there isn't'"
        ],
        whenNotToUse: [
          "No confundas 'brand' (marca) con 'brand name' (nombre de la marca)",
          "No olvides el auxiliar en respuestas cortas: 'Yes, I do' (NO solo 'Yes')"
        ]
      },
      objectives: [
        "Hablar sobre técnicas de marca",
        "Formular y responder preguntas de tipo sí/no",
        "Realizar la reserva de un vuelo",
        "Escribir sobre liderazgo empresarial"
      ],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l4t7_n1", word: "brand name", translation: "nombre de marca", type: "noun", definition: "the specific name of a product, service, or company", example: "The soda's brand name is easy to remember.", related: [], difficulty: 2 },
          { id: "l4t7_n2", word: "colleague", translation: "colega", type: "noun", definition: "a person whom you work with", example: "I met with two of my colleagues this morning.", related: [], difficulty: 2 },
          { id: "l4t7_n3", word: "executive", translation: "ejecutivo", type: "noun", definition: "a manager who makes decisions and organizes things", example: "Please direct this question to the publishing executive.", related: [], difficulty: 2 },
          { id: "l4t7_n4", word: "logo", translation: "logo o logotipo", type: "noun", definition: "a name or symbol that officially identifies a specific product or service", example: "When we decided to change our company's image, the first thing we did was to design a new logo.", related: [], difficulty: 2 },
          { id: "l4t7_n5", word: "recognition", translation: "reconocimiento", type: "noun", definition: "the ability to know someone or something because you have seen them before", example: "Our customers remember our name. We have great name recognition.", related: ["recognize"], difficulty: 2 },
          { id: "l4t7_n6", word: "representative", translation: "representante", type: "noun", definition: "a person who speaks or acts for a group or company", example: "The sales representative is easy to reach.", related: ["represent"], difficulty: 2 },
        ],
        verbs: [
          { id: "l4t7_v1", word: "accept", translation: "aceptar", type: "verb", definition: "to agree to take something that someone offers you", example: "They accepted the offer.", related: ["acceptance", "acceptable"], difficulty: 2 },
          { id: "l4t7_v2", word: "rank", translation: "figurar", type: "verb", definition: "to have a particular position in a group or list", example: "Bob ranks first in his class.", related: ["rank (n)"], difficulty: 2 },
          { id: "l4t7_v3", word: "recognize", translation: "reconocer", type: "verb", definition: "to know someone or something because you have seen them before", example: "Do you recognize this man?", related: ["recognition"], difficulty: 2 },
          { id: "l4t7_v4", word: "register", translation: "inscribir o matricular", type: "verb", definition: "to officially record a name or other information", example: "Did you register your children for school?", related: ["registration"], difficulty: 2 },
          { id: "l4t7_v5", word: "respect", translation: "respetar", type: "verb", definition: "to think that someone is good because of his or her qualities", example: "I respect my friend for telling the truth.", related: ["respect (n)"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l4t7_a1", word: "clever", translation: "ingenioso o bueno", type: "adjective", definition: "intelligent or effective", example: "Sherry had a clever idea to earn some money.", related: [], difficulty: 2 },
          { id: "l4t7_a2", word: "well-known", translation: "(muy) conocido", type: "adjective", definition: "famous and familiar to many people", example: "John Grisham is a well-known author.", related: [], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l4t7_cm1",
          wrong: "Do you have any flights to Tokyo? - Yes, I have.",
          correct: "Do you have any flights to Tokyo? - Yes, we do.",
          explanation: "Respuestas cortas usan el auxiliar: 'Yes, I/we do', no 'Yes, I have' con 'Do you have...?'"
        },
        {
          id: "l4t7_cm2",
          wrong: "I'd like to book a fly to New York.",
          correct: "I'd like to book a flight to New York.",
          explanation: "'Flight' es el sustantivo (vuelo). 'Fly' es el verbo (volar)."
        },
        {
          id: "l4t7_cm3",
          wrong: "Is there a direct fly?",
          correct: "Is there a direct flight?",
          explanation: "Usamos 'flight' (sustantivo) no 'fly' (verbo) para hablar del vuelo."
        },
        {
          id: "l4t7_cm4",
          wrong: "Do you have sits available near the window?",
          correct: "Do you have seats available near the window?",
          explanation: "'Seat' (asiento) no 'sit' (sentarse, verbo)."
        },
        {
          id: "l4t7_cm5",
          wrong: "The brand have excellent recognition.",
          correct: "The brand has excellent recognition.",
          explanation: "'Brand' es singular, usa 'has' no 'have'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las preguntas y respuestas:",
          items: [
            { sentence: "___ you have any flights to London tomorrow?", answer: "Do", hint: "pregunta sí/no" },
            { sentence: "Is there a direct ___? - Yes, there is.", answer: "flight", hint: "vuelo" },
            { sentence: "Do you have window ___? - No, we don't.", answer: "seats", hint: "asientos" },
            { sentence: "Can I ___ a round-trip ticket?", answer: "book", hint: "reservar" },
            { sentence: "The Sony ___ name is recognized worldwide.", answer: "brand", hint: "marca" }
          ]
        },
        {
          type: "matching",
          instruction: "Une las preguntas con sus respuestas cortas:",
          pairs: [
            { term: "Do you have any flights to Paris?", match: "Yes, we do. / No, we don't." },
            { term: "Is there a direct flight?", match: "Yes, there is. / No, there isn't." },
            { term: "Are there any window seats?", match: "Yes, there are. / No, there aren't." },
            { term: "Can I pay by credit card?", match: "Yes, you can. / No, you can't." },
            { term: "Does the flight include meals?", match: "Yes, it does. / No, it doesn't." }
          ]
        },
        {
          type: "role-play",
          instruction: "Completa la reservación de vuelo:",
          items: [
            { prompt: "Agent: Good morning, how can I help you?", response: "I'd like to book a flight to Tokyo, please." },
            { prompt: "Agent: When would you like to travel?", response: "I'd like to leave on December 15th and return on the 22nd." },
            { prompt: "Agent: Would you prefer an aisle or window seat?", response: "A window seat, please, if available." }
          ]
        },
        {
          type: "categorization",
          instruction: "Clasifica: Vocabulario de Marca (B) o Viajes (T):",
          items: [
            { word: "brand name", category: "B" },
            { word: "flight", category: "T" },
            { word: "recognition", category: "B" },
            { word: "aisle seat", category: "T" },
            { word: "logo", category: "B" },
            { word: "round-trip", category: "T" },
            { word: "executive", category: "B" },
            { word: "boarding pass", category: "T" }
          ]
        }
      ],
      modelDialogue: {
        title: "Reservando un vuelo de negocios",
        dialogue: [
          { speaker: "Agent", text: "Good afternoon, how may I help you?", translation: "Buenas tardes, ¿en qué puedo ayudarle?" },
          { speaker: "Business Traveler", text: "I'd like to book a round-trip flight to Tokyo for a business meeting.", translation: "Me gustaría reservar un vuelo de ida y vuelta a Tokio para una reunión de negocios." },
          { speaker: "Agent", text: "When would you like to travel?", translation: "¿Cuándo le gustaría viajar?" },
          { speaker: "Business Traveler", text: "I need to leave on March 5th and return on March 8th.", translation: "Necesito salir el 5 de marzo y regresar el 8 de marzo." },
          { speaker: "Agent", text: "Do you have a preference for a particular airline?", translation: "¿Tiene preferencia por alguna aerolínea en particular?" },
          { speaker: "Business Traveler", text: "Is there a direct flight with Japan Airlines?", translation: "¿Hay un vuelo directo con Japan Airlines?" },
          { speaker: "Agent", text: "Yes, there is. It departs at 11:00 AM and arrives at 3:00 PM local time.", translation: "Sí, lo hay. Sale a las 11:00 AM y llega a las 3:00 PM hora local." },
          { speaker: "Business Traveler", text: "Do you have any business class seats available?", translation: "¿Tienen asientos de clase ejecutiva disponibles?" },
          { speaker: "Agent", text: "Yes, we do. Would you prefer an aisle or window seat?", translation: "Sí, tenemos. ¿Prefiere asiento de pasillo o ventana?" },
          { speaker: "Business Traveler", text: "An aisle seat, please. Can I pay by corporate credit card?", translation: "Asiento de pasillo, por favor. ¿Puedo pagar con tarjeta corporativa?" },
          { speaker: "Agent", text: "Yes, you can. The total is $3,450. I'll send the confirmation to your email.", translation: "Sí, puede. El total es $3,450. Enviaré la confirmación a su correo." }
        ],
        keyPhrases: [
          "I'd like to book a round-trip flight to...",
          "Is there a direct flight?",
          "Do you have any business class seats?",
          "Would you prefer an aisle or window seat?",
          "Can I pay by credit card?"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario de viajes",
        sounds: [
          { sound: "Silent letters", examples: ["aisle /aɪl/", "receipt /rɪˈsiːt/"], tip: "La 's' en 'aisle' es muda" },
          { sound: "/ʒ/", examples: ["pleasure", "leisure", "measure"], tip: "Sonido como la 'j' francesa" },
          { sound: "Word stress", examples: ["exˈecutive", "recogˈnition", "repˈresentative"], tip: "El acento suele estar antes de -tion, -tive" }
        ],
        commonErrors: [
          { word: "aisle", wrong: "/ais-le/", right: "/aɪl/", note: "La 's' es muda, suena como 'I'll'" },
          { word: "receipt", wrong: "/re-ceipt/", right: "/rɪˈsiːt/", note: "La 'p' es muda" },
          { word: "colleague", wrong: "/co-le-a-gue/", right: "/ˈkɒliːɡ/", note: "Dos sílabas, no cuatro" }
        ]
      },
      culturalNote: {
        title: "Viajes de negocios en el mundo corporativo",
        content: "Los viajes de negocios son comunes en empresas globales. En vuelos, 'business class' o 'first class' ofrecen más espacio y servicios. Es importante confirmar reservaciones 24-48 horas antes. En aeropuertos internacionales, el check-in suele requerir pasaporte y visa si es necesario. Las empresas a menudo tienen 'corporate accounts' con aerolíneas para obtener descuentos. El 'jet lag' (desfase horario) es un problema común en vuelos largos.",
        examples: [
          "'Business class' - clase ejecutiva",
          "'Red-eye flight' - vuelo nocturno",
          "'Layover/Stopover' - escala",
          "'Jet lag' - desfase horario",
          "'Frequent flyer' - viajero frecuente"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Do you have any flights?' - Respuesta corta afirmativa:",
          options: ["Yes, I have", "Yes, we do", "Yes, we have", "Yes, there is"],
          correctAnswer: 1,
          explanation: "Con 'Do you have...?' respondemos 'Yes, we do', no 'Yes, we have'."
        },
        {
          question: "'Flight' vs 'Fly':",
          options: ["son sinónimos", "flight es verbo, fly es sustantivo", "fly es verbo, flight es sustantivo", "ambos son verbos"],
          correctAnswer: 2,
          explanation: "'Fly' es verbo (volar), 'flight' es sustantivo (vuelo)."
        },
        {
          question: "'Aisle seat' significa:",
          options: ["asiento de pasillo", "asiento de ventana", "asiento del medio", "asiento de emergencia"],
          correctAnswer: 0,
          explanation: "'Aisle' es pasillo, entonces 'aisle seat' = asiento de pasillo."
        },
        {
          question: "'Brand recognition' significa:",
          options: ["marca registrada", "reconocimiento de marca", "nombre de marca", "logo de marca"],
          correctAnswer: 1,
          explanation: "'Recognition' es reconocimiento; 'brand recognition' = reconocimiento de marca."
        },
        {
          question: "'Round-trip' significa:",
          options: ["viaje redondo", "ida y vuelta", "viaje corto", "viaje en círculo"],
          correctAnswer: 1,
          explanation: "'Round-trip' significa ida y vuelta. También se dice 'return ticket' en UK."
        },
        {
          question: "¿Cuál es la pronunciación de 'aisle'?",
          options: ["/ais-le/", "/ail/", "/aɪl/ (como 'I'll')", "/a-isle/"],
          correctAnswer: 2,
          explanation: "'Aisle' se pronuncia /aɪl/, igual que 'I'll'. La 's' es muda."
        }
      ],
      guidedProduction: [
        {
          task: "Reservar un vuelo",
          prompt: "Llama a una agencia de viajes para reservar un vuelo a tu ciudad favorita.",
          sampleAnswer: "Hello, I'd like to book a round-trip flight to Barcelona, please. I want to leave on July 10th and return on July 24th. Is there a direct flight? I'd prefer an aisle seat in economy class. Do you have any flights in the morning? Can I pay by credit card?",
          hints: ["Especifica destino y fechas", "Pregunta por vuelos directos", "Indica preferencia de asiento"]
        },
        {
          task: "Responder preguntas sí/no con respuestas cortas",
          prompt: "Practica respondiendo preguntas de un agente de viajes.",
          sampleAnswer: "Agent: Do you have a passport? Me: Yes, I do. Agent: Is this your first time traveling to Japan? Me: No, it isn't. Agent: Are you traveling alone? Me: No, I'm not. I'm traveling with a colleague. Agent: Do you need a hotel reservation? Me: Yes, I do.",
          hints: ["Usa respuestas cortas: Yes, I do / No, I don't", "Añade información si es relevante", "Practica diferentes auxiliares: do, is, are"]
        },
        {
          task: "Describir una marca famosa",
          prompt: "Describe una marca que tenga excelente reconocimiento mundial.",
          sampleAnswer: "Coca-Cola is one of the most well-known brands in the world. Their logo is recognized everywhere - you can see it in almost every country. The brand name is clever and memorable. They have excellent name recognition because of decades of marketing. Their representatives work globally to maintain the brand image.",
          hints: ["Usa 'brand name', 'logo', 'recognition'", "Menciona por qué es conocida", "Incluye 'well-known', 'recognized'"]
        },
        {
          task: "Escribir un itinerario de viaje de negocios",
          prompt: "Escribe un breve itinerario para un viaje de negocios de 3 días.",
          sampleAnswer: "Day 1: Flight from New York to London, departure 7 PM, arrival 7 AM. Check in to hotel. Day 2: Meeting with representatives at 10 AM. Lunch with executives at 1 PM. Product presentation at 3 PM. Day 3: Visit to the company headquarters. Return flight at 6 PM.",
          hints: ["Incluye detalles de vuelos", "Menciona reuniones y actividades", "Usa vocabulario de negocios"]
        }
      ],
      connectionToPrevious: "En la lección anterior comparaste productos de Sony. Ahora aprenderás cómo el nombre de marca y el logo contribuyen al reconocimiento global.",
      connectionToNext: "En la siguiente lección verás cómo Sony se expandió a Estados Unidos y aprenderás a hacer y aceptar invitaciones.",
      grammarTheoryIds: ['b1-present-perfect-vs-past-simple', 'b1-passive-voice']
    },
    {
      id: 8,
      title: "Sony Goes to the United States",
      titleEs: "Sony Llega a los Estados Unidos",
      introduction: {
        title: "🇺🇸 Sony Llega a los Estados Unidos",
        explanation: "La expansión internacional es clave para el crecimiento empresarial. Aprenderás vocabulario de expansión de negocios y comunicación intercultural.",
        keyPoints: [
          "Expansión: expand (expandir), establish (establecer), market (mercado), headquarters (sede central)",
          "Pasado simple vs presente perfecto: 'They expanded in 1960' vs 'They have expanded globally'",
          "Vocabulario de reuniones: agenda, meeting, presentation, report",
          "Expresiones de negocios: 'market share', 'sales figures', 'quarterly results'"
        ],
        examples: [
          { english: "Sony established its US headquarters in 1960.", spanish: "Sony estableció su sede estadounidense en 1960.", explanation: "Narración histórica" },
          { english: "They have expanded into new markets.", spanish: "Se han expandido a nuevos mercados.", explanation: "Presente perfecto" },
          { english: "The meeting will cover quarterly results.", spanish: "La reunión cubrirá los resultados trimestrales.", explanation: "Vocabulario de reuniones" }
        ],
        tips: [
          "💡 'Headquarters' es singular: 'The headquarters is in Tokyo' no 'are'",
          "💡 'Meeting' (reunión formal) vs 'Get-together' (reunión informal)",
          "💡 US business culture values time: 'Time is money'"
        ],
        whenToUse: [
          "Al narrar expansión empresarial: 'Sony established its US headquarters in 1960'",
          "Para acciones con resultado presente: 'They have expanded into new markets'",
          "En reuniones de trabajo: 'agenda', 'presentation', 'quarterly results'",
          "Al hablar de negocios internacionales: 'market share', 'sales figures'"
        ],
        whenNotToUse: [
          "No digas 'The headquarters are...' → 'The headquarters is...' (singular)",
          "No confundas pasado simple con presente perfecto: 'expanded in 1960' vs 'have expanded'"
        ]
      },
      objectives: [
        "Hablar sobre negocios a escala internacional",
        "Invitar a alguien a hacer algo",
        "Aceptar o rechazar una invitación",
        "Escribir sobre la globalización"
      ],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l4t8_n1", word: "globalization", translation: "globalización", type: "noun", definition: "the process of becoming international or affecting things worldwide", example: "Because of globalization, you can buy the same product in many different countries.", related: ["globalize", "global"], difficulty: 2 },
          { id: "l4t8_n2", word: "global leader", translation: "líder mundial", type: "noun", definition: "a company with a leading world position in its industry", example: "IBM is a global leader in computers.", related: [], difficulty: 2 },
          { id: "l4t8_n3", word: "investment", translation: "inversión", type: "noun", definition: "the money that is paid into or for something to earn a profit", example: "They earned a lot of money from their investment in stocks.", related: ["invest", "investor"], difficulty: 2 },
          { id: "l4t8_n4", word: "investor", translation: "inversor", type: "noun", definition: "someone who pays money into or for something to earn a profit", example: "She is the company's biggest investor.", related: ["invest", "investment"], difficulty: 2 },
          { id: "l4t8_n5", word: "local market", translation: "mercado local", type: "noun", definition: "a specific area or country where a product or service is used", example: "The same product is not always successful in different local markets.", related: [], difficulty: 2 },
          { id: "l4t8_n6", word: "philosophy", translation: "filosofía", type: "noun", definition: "the general laws or rules that someone follows to live life or do business", example: "Not all companies have the same business philosophy.", related: [], difficulty: 2 },
          { id: "l4t8_n7", word: "showroom", translation: "sala de exposición", type: "noun", definition: "a room where products are displayed", example: "I saw the new car in the showroom.", related: [], difficulty: 2 },
          { id: "l4t8_n8", word: "stock", translation: "acciones", type: "noun", definition: "equally divided parts in the ownership of a company", example: "Tom owns stock in six different companies.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l4t8_v1", word: "believe in", translation: "creer en", type: "verb", definition: "to support an idea or a policy", example: "He believes in hard work.", related: [], difficulty: 2 },
          { id: "l4t8_v2", word: "establish", translation: "establecer", type: "verb", definition: "to start or create something such as a company, organization, or system", example: "It takes a lot of hard work to establish a company.", related: ["establishment", "established"], difficulty: 2 },
          { id: "l4t8_v3", word: "sell like hotcakes", translation: "venderse como pan caliente", type: "verb", definition: "to sell very well", example: "I think the new computer will sell like hotcakes.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l4t8_a1", word: "famous", translation: "famoso", type: "adjective", definition: "very well known", example: "Many famous actors work in Hollywood.", related: ["fame"], difficulty: 2 },
          { id: "l4t8_a2", word: "independent", translation: "independiente", type: "adjective", definition: "not controlled by someone or something else", example: "The United States became an independent country in 1776.", related: ["independence"], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [
          { id: "l4t8_d1", word: "abroad", translation: "en el extranjero", type: "adverb", definition: "in a foreign country", example: "I like to take my vacations abroad.", related: [], difficulty: 2 },
          { id: "l4t8_d2", word: "overseas", translation: "en el extranjero", type: "adverb", definition: "in a foreign country across the ocean", example: "She lived overseas for three years.", related: [], difficulty: 2 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l4t8_cm1",
          wrong: "Would you like come to the meeting?",
          correct: "Would you like to come to the meeting?",
          explanation: "'Would you like' va seguido de 'to + infinitivo': 'Would you like to come?'"
        },
        {
          id: "l4t8_cm2",
          wrong: "I'd love, but I can't.",
          correct: "I'd love to, but I can't.",
          explanation: "Necesitas 'to' después de 'I'd love': 'I'd love to' (se sobreentiende el verbo)."
        },
        {
          id: "l4t8_cm3",
          wrong: "They expanded their business to the abroad.",
          correct: "They expanded their business abroad.",
          explanation: "'Abroad' es adverbio, no necesita artículo ni preposición."
        },
        {
          id: "l4t8_cm4",
          wrong: "The headquarters are in New York.",
          correct: "The headquarters is in New York.",
          explanation: "'Headquarters' es singular aunque termine en 's': 'The headquarters IS...'"
        },
        {
          id: "l4t8_cm5",
          wrong: "I believe on hard work.",
          correct: "I believe in hard work.",
          explanation: "La expresión es 'believe IN', no 'believe on' o 'believe at'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las invitaciones y respuestas:",
          items: [
            { sentence: "Would you like ___ come to the conference?", answer: "to", hint: "infinitivo" },
            { sentence: "I'd love ___, but I have another commitment.", answer: "to", hint: "aceptar pero rechazar" },
            { sentence: "Would you be interested ___ visiting our showroom?", answer: "in", hint: "preposición" },
            { sentence: "They established their headquarters ___ the US in 1960.", answer: "in", hint: "ubicación" },
            { sentence: "Sony expanded ___. They now have offices worldwide.", answer: "abroad/overseas", hint: "al extranjero" }
          ]
        },
        {
          type: "matching",
          instruction: "Une las invitaciones con las respuestas apropiadas:",
          pairs: [
            { term: "Would you like to have lunch?", match: "I'd love to! Where shall we go?" },
            { term: "Would you be interested in joining our team?", match: "That sounds interesting. Tell me more." },
            { term: "Would you like to come to the conference?", match: "I'd love to, but I'll be abroad that week." },
            { term: "Can I invite you to dinner?", match: "That's very kind of you. I'd be happy to." },
            { term: "How about joining us for a meeting?", match: "I'm afraid I can't. I have another commitment." }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma las frases directas en invitaciones educadas:",
          items: [
            { original: "Come to the meeting.", transformed: "Would you like to come to the meeting?" },
            { original: "Join us for dinner.", transformed: "Would you like to join us for dinner?" },
            { original: "Visit our office.", transformed: "Would you be interested in visiting our office?" }
          ]
        },
        {
          type: "word-order",
          instruction: "Ordena las palabras para formar invitaciones y respuestas:",
          items: [
            { words: ["you", "would", "to", "like", "join", "us", "?"], answer: "Would you like to join us?" },
            { words: ["to", "love", "I'd", "can't", "but", "I"], answer: "I'd love to, but I can't." },
            { words: ["abroad", "headquarters", "their", "established", "they"], answer: "They established their headquarters abroad." }
          ]
        }
      ],
      modelDialogue: {
        title: "Invitando a un socio comercial a un evento",
        dialogue: [
          { speaker: "Alex", text: "Mr. Tanaka, I wanted to invite you to our product launch event next month.", translation: "Sr. Tanaka, quería invitarle a nuestro evento de lanzamiento de producto el próximo mes." },
          { speaker: "Mr. Tanaka", text: "Thank you, Alex. When and where will it be held?", translation: "Gracias, Alex. ¿Cuándo y dónde será?" },
          { speaker: "Alex", text: "It will be at our headquarters in San Francisco on April 15th.", translation: "Será en nuestra sede central en San Francisco el 15 de abril." },
          { speaker: "Mr. Tanaka", text: "That sounds interesting. Would it be possible to bring some of my colleagues?", translation: "Eso suena interesante. ¿Sería posible traer a algunos de mis colegas?" },
          { speaker: "Alex", text: "Of course! You're welcome to bring anyone you'd like.", translation: "¡Por supuesto! Es bienvenido a traer a quien guste." },
          { speaker: "Mr. Tanaka", text: "Wonderful. I believe in building strong partnerships, so I'd love to come.", translation: "Maravilloso. Creo en construir asociaciones sólidas, así que me encantaría asistir." },
          { speaker: "Alex", text: "Excellent! Would you like us to arrange hotel accommodations for you?", translation: "¡Excelente! ¿Le gustaría que le organizáramos el alojamiento en hotel?" },
          { speaker: "Mr. Tanaka", text: "That would be very helpful. I'm not very familiar with San Francisco.", translation: "Eso sería muy útil. No conozco mucho San Francisco." },
          { speaker: "Alex", text: "No problem. Would you be interested in a tour of the city while you're here?", translation: "No hay problema. ¿Estaría interesado en un tour de la ciudad mientras está aquí?" },
          { speaker: "Mr. Tanaka", text: "I'd love to! This is my first trip abroad to the US.", translation: "¡Me encantaría! Este es mi primer viaje al extranjero a EE.UU." }
        ],
        keyPhrases: [
          "I wanted to invite you to...",
          "Would it be possible to...?",
          "I'd love to come.",
          "Would you like us to arrange...?",
          "Would you be interested in...?"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario de negocios internacionales",
        sounds: [
          { sound: "/ɔː/", examples: ["abroad /əˈbrɔːd/", "order", "or"], tip: "Sonido largo de 'o'" },
          { sound: "Contracciones", examples: ["I'd = I would", "you're = you are"], tip: "Las contracciones son normales incluso en contextos formales" },
          { sound: "Word endings", examples: ["establish /ɪˈstæblɪʃ/", "philosophy /fɪˈlɒsəfi/"], tip: "Cuidado con terminaciones en -ish y -ophy" }
        ],
        commonErrors: [
          { word: "headquarters", wrong: "/hed-kwar-ters/", right: "/ˈhedkwɔːtərz/", note: "El acento está en 'head'" },
          { word: "philosophy", wrong: "/fi-lo-so-fi/", right: "/fɪˈlɒsəfi/", note: "Acento en segunda sílaba" },
          { word: "overseas", wrong: "/o-ver-seas/", right: "/ˌəʊvəˈsiːz/", note: "Acento en la última sílaba" }
        ]
      },
      culturalNote: {
        title: "Hacer negocios entre culturas (Japón y EE.UU.)",
        content: "Los negocios entre culturas requieren sensibilidad. En Japón, las relaciones se construyen lentamente y se valora la formalidad. En EE.UU., los negocios son más directos y rápidos. Cuando Sony expandió a EE.UU., tuvo que adaptar su estilo. Las invitaciones de negocios en Japón a menudo incluyen cenas largas ('nomikai'). En EE.UU., un 'business lunch' es más corto y directo. Aceptar invitaciones es importante para las relaciones comerciales en ambas culturas.",
        examples: [
          "Japón: Intercambio de tarjetas de visita con dos manos",
          "EE.UU.: 'Let's do lunch' puede ser solo cortesía",
          "Rechazar educadamente: 'I'd love to, but...' (ambas culturas)",
          "En Japón: 'I'll think about it' a menudo significa 'no'",
          "'Going global' - expandirse internacionalmente"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Would you like to come?' - Forma educada de:",
          options: ["informar", "ordenar", "invitar", "preguntar información"],
          correctAnswer: 2,
          explanation: "'Would you like to...?' es la forma educada de hacer una invitación."
        },
        {
          question: "'I'd love to' significa:",
          options: ["Lo amo", "Me encantaría", "Debo", "Quiero amar"],
          correctAnswer: 1,
          explanation: "'I'd love to' = 'I would love to' = Me encantaría (aceptar invitación)."
        },
        {
          question: "'The headquarters is in Tokyo' - ¿Es correcto usar 'is'?",
          options: ["No, debería ser 'are'", "Sí, 'headquarters' es singular", "Depende", "Ninguna es correcta"],
          correctAnswer: 1,
          explanation: "'Headquarters' es singular aunque termine en 's': 'The headquarters IS...'"
        },
        {
          question: "'They expanded abroad' - 'abroad' significa:",
          options: ["ampliamente", "al extranjero", "por todo lado", "hacia afuera"],
          correctAnswer: 1,
          explanation: "'Abroad' significa en/al extranjero."
        },
        {
          question: "'I believe ___ hard work':",
          options: ["on", "at", "in", "with"],
          correctAnswer: 2,
          explanation: "La expresión correcta es 'believe IN': 'I believe in hard work'."
        },
        {
          question: "Para rechazar educadamente una invitación:",
          options: ["No, thank you.", "I don't want to.", "I'd love to, but I can't.", "No."],
          correctAnswer: 2,
          explanation: "'I'd love to, but...' muestra aprecio mientras rechaza educadamente."
        }
      ],
      guidedProduction: [
        {
          task: "Hacer una invitación de negocios",
          prompt: "Invita a un cliente potencial a visitar tu empresa.",
          sampleAnswer: "Dear Mr. Johnson, I would like to invite you to visit our headquarters in Madrid. Would you be interested in seeing our production facilities? We could also arrange a meeting with our executive team. Would next Tuesday work for you? I'd love to show you our latest innovations.",
          hints: ["Usa 'Would you like to...?' o 'Would you be interested in...?'", "Ofrece detalles específicos", "Sugiere fecha/hora"]
        },
        {
          task: "Aceptar y rechazar invitaciones",
          prompt: "Escribe respuestas para aceptar y para rechazar la misma invitación.",
          sampleAnswer: "Accepting: I'd love to! Thank you so much for the invitation. Tuesday works perfectly for me. I'm looking forward to seeing your facilities. Declining: I'd love to, but I'm afraid I'll be abroad that week. Would it be possible to reschedule for the following week? I'm very interested in visiting.",
          hints: ["Para aceptar: 'I'd love to!', 'That sounds great!'", "Para rechazar: 'I'd love to, but...'", "Siempre ofrece alternativa al rechazar"]
        },
        {
          task: "Describir la expansión de una empresa",
          prompt: "Describe cómo una empresa se expandió internacionalmente.",
          sampleAnswer: "Netflix started in the United States but soon expanded abroad. They established their headquarters in California and began operating overseas in 2010. They now have offices worldwide. The company believes in adapting content for local markets. Their philosophy of global expansion made them a global leader in streaming.",
          hints: ["Usa 'expand abroad/overseas', 'establish headquarters'", "Menciona la filosofía de la empresa", "Incluye 'global leader', 'worldwide'"]
        },
        {
          task: "Planificar un viaje de negocios internacional",
          prompt: "Escribe un email sobre un próximo viaje de negocios al extranjero.",
          sampleAnswer: "I will be traveling abroad next month to visit our investors in London. Would you like to join me? The headquarters has arranged meetings with several potential partners. I'd love to introduce you to our international team. Let me know if you'd be interested in coming along.",
          hints: ["Usa 'abroad', 'overseas', 'headquarters'", "Incluye invitaciones", "Menciona el propósito del viaje"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste sobre el reconocimiento de marca. Ahora verás cómo Sony llevó esa marca al mercado estadounidense.",
      connectionToNext: "En la siguiente lección aprenderás sobre el lanzamiento del Walkman y cómo usar 'can' y 'could' para expresar habilidad y hacer peticiones.",
      grammarTheoryIds: ['b1-used-to-would', 'b1-first-conditional']
    },
    {
      id: 9,
      title: "Introducing the Sony Walkman",
      titleEs: "Introducción del Walkman de Sony",
      introduction: {
        title: "🎵 Introducción del Sony Walkman",
        explanation: "El Walkman revolucionó cómo escuchamos música. Aprenderás a describir productos y usar 'can' y 'could' para expresar habilidad y hacer peticiones.",
        keyPoints: [
          "'Can' para habilidad presente: 'I can play music' / Peticiones informales: 'Can you help me?'",
          "'Could' para habilidad pasada: 'I could hear music' / Peticiones formales: 'Could you send the report?'",
          "Describir productos: 'It's portable', 'It's user-friendly', 'It's durable'",
          "Lanzamientos: 'launch' (lanzar), 'release' (estrenar), 'introduce' (introducir)"
        ],
        examples: [
          { english: "You can listen to music anywhere with this device.", spanish: "Puedes escuchar música en cualquier lugar con este dispositivo.", explanation: "Describiendo capacidad" },
          { english: "Could you arrange a meeting for tomorrow?", spanish: "¿Podrías organizar una reunión para mañana?", explanation: "Petición formal" },
          { english: "The Walkman was launched in 1979.", spanish: "El Walkman fue lanzado en 1979.", explanation: "Hablando de lanzamientos" }
        ],
        tips: [
          "💡 'Could' es más formal y educado que 'Can' para peticiones",
          "💡 'High-tech' vs 'low-tech': alta tecnología vs baja tecnología",
          "💡 'Launch' se usa para productos nuevos, 'release' más para películas/música"
        ],
        whenToUse: [
          "Al describir capacidades: 'You can listen to music anywhere with this device'",
          "Para peticiones formales: 'Could you arrange a meeting for tomorrow?'",
          "Al hablar de lanzamientos: 'The Walkman was launched in 1979'",
          "Para describir productos: 'portable', 'user-friendly', 'durable'"
        ],
        whenNotToUse: [
          "No digas 'I can to help' → 'I can help' (verbo base después de can/could)",
          "No uses 'can' para habilidad pasada → usa 'could': 'I could run fast when I was young'"
        ]
      },
      objectives: [
        "Describir un producto",
        "Comunicar la capacidad de hacer algo mediante can y could",
        "Hacer peticiones mediante can y could",
        "Escribir sobre un producto útil o conocido"
      ],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l4t9_n1", word: "subsidiary", translation: "filial", type: "noun", definition: "a company owned by another company", example: "Opel is a subsidiary of General Motors.", related: [], difficulty: 2 },
          { id: "l4t9_n2", word: "target market", translation: "mercado clave", type: "noun", definition: "the group of people a company wants to sell products or services to", example: "Young men are the target market for that cologne.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l4t9_v1", word: "arrange", translation: "concertar u organizar", type: "verb", definition: "to make plans for a meeting or event", example: "Can you arrange to meet her at 3:30 tomorrow?", related: ["arrangement"], difficulty: 2 },
          { id: "l4t9_v2", word: "launch", translation: "lanzar", type: "verb", definition: "to introduce a new product or idea", example: "When will Toyota launch its new car?", related: ["launch (n)"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l4t9_a1", word: "attractive", translation: "bonito", type: "adjective", definition: "nice to look at or appealing", example: "She lives in an attractive apartment with a beautiful view.", related: ["attract", "attraction"], difficulty: 2 },
          { id: "l4t9_a2", word: "convenient", translation: "apropiado", type: "adjective", definition: "helpful or useful because it makes life easier", example: "Microwave ovens are very convenient for cooking.", related: ["convenience"], difficulty: 2 },
          { id: "l4t9_a3", word: "durable", translation: "durable", type: "adjective", definition: "long-lasting and not easily damaged", example: "Rubber is more durable than paper.", related: [], difficulty: 2 },
          { id: "l4t9_a4", word: "high-tech", translation: "alta tecnología", type: "adjective", definition: "made in a very modern way with new technology", example: "Japan is known for high-tech products.", related: [], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l4t9_cm1",
          wrong: "I can to help you with that.",
          correct: "I can help you with that.",
          explanation: "Después de 'can' va el verbo en forma base, sin 'to'."
        },
        {
          id: "l4t9_cm2",
          wrong: "Could you to send me the report?",
          correct: "Could you send me the report?",
          explanation: "Después de 'could' también va el verbo base, sin 'to'."
        },
        {
          id: "l4t9_cm3",
          wrong: "When I was young, I can run very fast.",
          correct: "When I was young, I could run very fast.",
          explanation: "Para habilidad en el pasado, usa 'could', no 'can'."
        },
        {
          id: "l4t9_cm4",
          wrong: "Can you arrange a meeting? - Yes, I can arrange.",
          correct: "Can you arrange a meeting? - Yes, I can.",
          explanation: "En respuestas cortas, no repitas el verbo: 'Yes, I can', no 'Yes, I can arrange'."
        },
        {
          id: "l4t9_cm5",
          wrong: "The Walkman was launched at 1979.",
          correct: "The Walkman was launched in 1979.",
          explanation: "Usamos 'in' con años: 'in 1979', no 'at 1979'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con 'can' o 'could':",
          items: [
            { sentence: "With this device, you ___ listen to music anywhere.", answer: "can", hint: "habilidad presente" },
            { sentence: "___ you please send me the specifications?", answer: "Could", hint: "petición formal" },
            { sentence: "When I was a student, I ___ study for hours without a break.", answer: "could", hint: "habilidad pasada" },
            { sentence: "___ I borrow your charger for a moment?", answer: "Can/Could", hint: "petición informal/formal" },
            { sentence: "With the old model, you ___ only store 20 songs.", answer: "could", hint: "habilidad pasada" }
          ]
        },
        {
          type: "matching",
          instruction: "Une el uso con el ejemplo:",
          pairs: [
            { term: "Can - habilidad presente", match: "I can speak English fluently." },
            { term: "Could - habilidad pasada", match: "She could play piano when she was 5." },
            { term: "Can - petición informal", match: "Can you help me with this?" },
            { term: "Could - petición formal", match: "Could you send me the report?" },
            { term: "Can - permiso informal", match: "Can I use your phone?" },
            { term: "Could - sugerencia educada", match: "We could meet tomorrow." }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma las oraciones haciéndolas más formales con 'could':",
          items: [
            { original: "Can you help me?", transformed: "Could you help me, please?" },
            { original: "Can you send the email today?", transformed: "Could you send the email today?" },
            { original: "Can I speak to the manager?", transformed: "Could I speak to the manager?" }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Describe el producto usando vocabulario de la lección:",
          items: [
            { sentence: "The Walkman was ___ in 1979.", answer: "launched", hint: "introducido al mercado" },
            { sentence: "It's a very ___ device - easy to carry.", answer: "portable/convenient", hint: "fácil de usar/llevar" },
            { sentence: "The product is ___ and won't break easily.", answer: "durable", hint: "resistente" },
            { sentence: "It has an ___ design that people love.", answer: "attractive", hint: "bonito" },
            { sentence: "Japan is known for ___ products.", answer: "high-tech", hint: "alta tecnología" }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentando un nuevo producto",
        dialogue: [
          { speaker: "Manager", text: "Team, I'd like to introduce our new portable speaker. Could you bring up the presentation, Tom?", translation: "Equipo, me gustaría presentar nuestro nuevo altavoz portátil. ¿Podrías poner la presentación, Tom?" },
          { speaker: "Tom", text: "Of course. Here it is.", translation: "Por supuesto. Aquí está." },
          { speaker: "Manager", text: "With this device, you can listen to music anywhere. It's completely portable.", translation: "Con este dispositivo, pueden escuchar música en cualquier lugar. Es completamente portátil." },
          { speaker: "Sales Rep", text: "How durable is it? Can it withstand water?", translation: "¿Qué tan duradero es? ¿Puede resistir el agua?" },
          { speaker: "Manager", text: "Yes, it can. It's waterproof and very durable.", translation: "Sí, puede. Es resistente al agua y muy duradero." },
          { speaker: "Marketing", text: "Could you tell us about the target market?", translation: "¿Podría decirnos sobre el mercado objetivo?" },
          { speaker: "Manager", text: "Young professionals who want high-tech, convenient products.", translation: "Jóvenes profesionales que quieren productos de alta tecnología y convenientes." },
          { speaker: "Sales Rep", text: "When will we launch it?", translation: "¿Cuándo lo lanzaremos?" },
          { speaker: "Manager", text: "We're planning to launch it next quarter. Tom, could you arrange a meeting with the subsidiary teams?", translation: "Planeamos lanzarlo el próximo trimestre. Tom, ¿podrías organizar una reunión con los equipos de las filiales?" },
          { speaker: "Tom", text: "Yes, I can do that by the end of this week.", translation: "Sí, puedo hacer eso para el fin de esta semana." }
        ],
        keyPhrases: [
          "Could you bring up the presentation?",
          "With this device, you can...",
          "Can it withstand water?",
          "Could you tell us about...?",
          "I can do that by..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de 'can' y 'could'",
        sounds: [
          { sound: "Can fuerte /kæn/", examples: ["Yes, I CAN", "I CAN do it"], tip: "En afirmativo enfático, suena fuerte" },
          { sound: "Can débil /kən/", examples: ["I can help", "You can go"], tip: "En medio de oración, se reduce a 'kn'" },
          { sound: "Could /kʊd/", examples: ["Could you help?", "I could see"], tip: "La 'l' es muda" }
        ],
        commonErrors: [
          { word: "can", wrong: "siempre /kæn/", right: "/kən/ (débil) o /kæn/ (fuerte)", note: "Se reduce en medio de oración" },
          { word: "couldn't", wrong: "/ku-dent/", right: "/ˈkʊdnt/", note: "Una sílaba y media, no dos" },
          { word: "convenient", wrong: "/kon-ve-nient/", right: "/kənˈviːniənt/", note: "Acento en segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "El Walkman y la revolución de la música personal",
        content: "El Sony Walkman (1979) cambió cómo la gente escucha música. Por primera vez, podías llevar tu música contigo a cualquier lugar. Esto creó el concepto de 'personal audio' y cambió la cultura juvenil mundial. El término 'Walkman' se volvió genérico para cualquier reproductor portátil (como 'Kleenex' para pañuelos). El iPod de Apple (2001) continuó esta revolución. Hoy, los smartphones han reemplazado los dispositivos dedicados, pero el legado del Walkman continúa.",
        examples: [
          "'Personal audio' - audio personal/individual",
          "'Game-changer' - algo que cambió las reglas",
          "'Portable device' - dispositivo portátil",
          "'Target market' - mercado objetivo",
          "'Product launch' - lanzamiento de producto"
        ]
      },
      consolidationQuiz: [
        {
          question: "Después de 'can' el verbo va en:",
          options: ["infinitivo con 'to'", "forma base", "gerundio (-ing)", "pasado"],
          correctAnswer: 1,
          explanation: "Después de 'can' va el verbo en forma base: 'can help', no 'can to help'."
        },
        {
          question: "Para habilidad en el pasado usamos:",
          options: ["can", "could", "can + past", "canned"],
          correctAnswer: 1,
          explanation: "'Could' expresa habilidad en el pasado: 'I could swim when I was 5'."
        },
        {
          question: "'Could you send me the report?' es:",
          options: ["una orden", "una petición formal", "una pregunta de habilidad", "pasado de 'can'"],
          correctAnswer: 1,
          explanation: "'Could you...?' es una forma educada de hacer peticiones."
        },
        {
          question: "'The Walkman was launched ___ 1979':",
          options: ["at", "on", "in", "during"],
          correctAnswer: 2,
          explanation: "Usamos 'in' con años: 'in 1979', 'in 2020'."
        },
        {
          question: "'Durable' significa:",
          options: ["fácil de usar", "resistente/duradero", "rápido", "portátil"],
          correctAnswer: 1,
          explanation: "'Durable' significa que dura mucho tiempo, es resistente."
        },
        {
          question: "'Can you help?' - 'Yes, ___':",
          options: ["I can help", "I can", "I can do", "I could"],
          correctAnswer: 1,
          explanation: "Respuestas cortas: 'Yes, I can', no se repite el verbo."
        }
      ],
      guidedProduction: [
        {
          task: "Describir las características de un producto",
          prompt: "Describe un producto tecnológico que te guste, mencionando sus características.",
          sampleAnswer: "My smartphone is a very convenient device. With it, I can make calls, send messages, and browse the internet anywhere. It's portable and fits in my pocket. The battery is durable - it can last all day. It has an attractive design and high-tech features like facial recognition.",
          hints: ["Usa 'can' para describir lo que puedes hacer", "Incluye 'portable', 'durable', 'convenient', 'attractive'", "Menciona características específicas"]
        },
        {
          task: "Hacer peticiones formales",
          prompt: "Escribe 5 peticiones formales que harías en un ambiente de trabajo.",
          sampleAnswer: "1. Could you please send me the sales report by Friday? 2. Could you arrange a meeting with the marketing team? 3. Could you forward this email to the manager? 4. Could you review this document before the presentation? 5. Could you give me feedback on my proposal?",
          hints: ["Usa 'Could you...?' para todas", "Añade 'please' para más cortesía", "Incluye detalles específicos"]
        },
        {
          task: "Hablar de habilidades pasadas vs presentes",
          prompt: "Compara lo que podías hacer antes con lo que puedes hacer ahora.",
          sampleAnswer: "When I was in university, I could study for 12 hours without a break. Now I can only focus for about 4 hours. Before smartphones, I could remember many phone numbers. Now I can't remember any because my phone stores them. However, now I can speak English much better than I could five years ago.",
          hints: ["Usa 'could' para el pasado", "Usa 'can' para el presente", "Compara y contrasta"]
        },
        {
          task: "Presentar un producto nuevo",
          prompt: "Presenta un producto ficticio o real a un equipo de trabajo.",
          sampleAnswer: "I'd like to introduce our new smartwatch. With this device, you can track your fitness, receive notifications, and even make payments. It's lightweight and portable - you can wear it all day. The battery is very durable; it can last up to a week. Could you pass the product samples around? Can everyone see the features on the screen?",
          hints: ["Usa 'can' para describir capacidades", "Usa 'could you' para pedir ayuda", "Describe características con vocabulario de la lección"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste sobre la expansión de Sony a EE.UU. Ahora verás cómo el Walkman revolucionó el mercado con un producto portátil innovador.",
      connectionToNext: "En la siguiente y última lección del nivel, aprenderás a hablar sobre el futuro de las empresas usando 'will' y 'going to'.",
      grammarTheoryIds: ['a2-can-could-modals', 'b1-present-perfect-vs-past-simple']
    },
    {
      id: 10,
      title: "Sony's Future",
      titleEs: "El Futuro de Sony",
      introduction: {
        title: "🚀 El Futuro de Sony",
        explanation: "El futuro de cualquier empresa depende de su capacidad de adaptación. Aprenderás a hablar sobre el futuro usando 'will' y 'going to' y hacer predicciones.",
        keyPoints: [
          "'Will' para predicciones/decisiones espontáneas: 'Technology will change', 'I'll help you'",
          "'Going to' para planes/intenciones: 'They're going to expand', 'I'm going to study'",
          "'Going to' para predicciones con evidencia: 'It's going to rain' (ves nubes)",
          "Vocabulario de futuro: trend (tendencia), strategy (estrategia), competition (competencia)"
        ],
        examples: [
          { english: "Sony will continue to innovate.", spanish: "Sony continuará innovando.", explanation: "Predicción con 'will'" },
          { english: "They're going to launch a new product next year.", spanish: "Van a lanzar un nuevo producto el próximo año.", explanation: "Plan con 'going to'" },
          { english: "The trend is toward smaller devices.", spanish: "La tendencia es hacia dispositivos más pequeños.", explanation: "Describiendo tendencias" }
        ],
        tips: [
          "💡 'Will' a menudo se contrae: 'I will' → 'I'll', 'They will' → 'They'll'",
          "💡 Para promesas: 'I will call you' (te llamaré)",
          "💡 'Going to' se pronuncia coloquialmente 'gonna': 'I'm gonna go' (informal)"
        ],
        whenToUse: [
          "Para predicciones: 'Sony will continue to innovate', 'Technology will change'",
          "Para planes e intenciones: 'They're going to launch a new product next year'",
          "Al describir tendencias: 'The trend is toward smaller devices'",
          "Para decisiones espontáneas: 'I'll help you with that'"
        ],
        whenNotToUse: [
          "No combines 'will' y 'going to': 'I will going to' ❌ → elige uno",
          "No olvides 'be' con going to: 'They going to' ❌ → 'They are going to' ✓"
        ]
      },
      objectives: [
        "Hablar sobre planes futuros",
        "Usar 'will' y 'going to'",
        "Hacer predicciones",
        "Escribir sobre el futuro de la tecnología"
      ],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l4t10_n1", word: "competition", translation: "competencia", type: "noun", definition: "a situation in which people or companies try to be more successful", example: "There is a lot of competition in the smartphone market.", related: ["compete", "competitor"], difficulty: 2 },
          { id: "l4t10_n2", word: "strategy", translation: "estrategia", type: "noun", definition: "a plan to achieve a goal", example: "The company needs a new marketing strategy.", related: ["strategic"], difficulty: 2 },
          { id: "l4t10_n3", word: "trend", translation: "tendencia", type: "noun", definition: "a general direction of change", example: "The trend is toward smaller devices.", related: ["trendy"], difficulty: 2 },
        ],
        verbs: [
          { id: "l4t10_v1", word: "compete", translation: "competir", type: "verb", definition: "to try to be more successful than others", example: "Sony competes with many companies.", related: ["competition", "competitor"], difficulty: 2 },
          { id: "l4t10_v2", word: "predict", translation: "predecir", type: "verb", definition: "to say what will happen in the future", example: "It's hard to predict the future.", related: ["prediction"], difficulty: 2 },
          { id: "l4t10_v3", word: "adapt", translation: "adaptar", type: "verb", definition: "to change to fit new conditions", example: "Companies must adapt to new markets.", related: ["adaptation"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l4t10_a1", word: "competitive", translation: "competitivo", type: "adjective", definition: "relating to competition", example: "The market is very competitive.", related: ["competition"], difficulty: 2 },
          { id: "l4t10_a2", word: "sustainable", translation: "sostenible", type: "adjective", definition: "able to continue over time", example: "The company focuses on sustainable practices.", related: ["sustainability"], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l4t10_cm1",
          wrong: "I will going to start a new project.",
          correct: "I'm going to start a new project. / I will start a new project.",
          explanation: "No combines 'will' y 'going to'. Elige uno: 'I will start' O 'I'm going to start'."
        },
        {
          id: "l4t10_cm2",
          wrong: "They going to launch a new product.",
          correct: "They are going to launch a new product.",
          explanation: "'Going to' necesita el verbo 'be': 'They ARE going to...'."
        },
        {
          id: "l4t10_cm3",
          wrong: "I think it will rains tomorrow.",
          correct: "I think it will rain tomorrow.",
          explanation: "Después de 'will' va el verbo base, sin 's': 'will rain', no 'will rains'."
        },
        {
          id: "l4t10_cm4",
          wrong: "Look at those clouds! It will rain.",
          correct: "Look at those clouds! It's going to rain.",
          explanation: "Cuando hay evidencia visible, usa 'going to', no 'will'."
        },
        {
          id: "l4t10_cm5",
          wrong: "Sony compete with Apple.",
          correct: "Sony competes with Apple.",
          explanation: "Tercera persona singular: 'Sony competes' (con 's'), no 'Sony compete'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con 'will' o 'going to':",
          items: [
            { sentence: "Look at the time! We ___ be late for the meeting.", answer: "'re going to", hint: "evidencia presente" },
            { sentence: "I think technology ___ change a lot in the next decade.", answer: "will", hint: "predicción/opinión" },
            { sentence: "They announced that they ___ launch a new smartphone next month.", answer: "'re going to", hint: "plan decidido" },
            { sentence: "Don't worry, I ___ help you with the report.", answer: "will/'ll", hint: "decisión espontánea" },
            { sentence: "The CEO said the company ___ expand to Asia.", answer: "is going to", hint: "plan/intención anunciada" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica los usos de 'will' y 'going to':",
          categories: [
            { name: "Will", items: ["Predicciones generales", "Decisiones espontáneas", "Promesas", "Ofertas de ayuda"] },
            { name: "Going to", items: ["Planes decididos", "Intenciones", "Predicciones con evidencia", "Algo a punto de pasar"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma usando 'will' o 'going to' según el contexto:",
          items: [
            { original: "They plan to open a new office. (plan)", transformed: "They're going to open a new office." },
            { original: "I predict that AI changes everything. (opinion)", transformed: "I think AI will change everything." },
            { original: "The phone is ringing. Answer it. (offer)", transformed: "I'll answer it." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con vocabulario del futuro empresarial:",
          items: [
            { sentence: "Sony faces strong ___ from Samsung and Apple.", answer: "competition", hint: "rivalidad" },
            { sentence: "Their ___ for growth includes expanding to new markets.", answer: "strategy", hint: "plan estratégico" },
            { sentence: "The current ___ is toward sustainable products.", answer: "trend", hint: "tendencia" },
            { sentence: "Companies must ___ to changing consumer demands.", answer: "adapt", hint: "ajustarse" },
            { sentence: "It's difficult to ___ what technology will look like in 20 years.", answer: "predict", hint: "ver el futuro" }
          ]
        }
      ],
      modelDialogue: {
        title: "Reunión de planificación estratégica",
        dialogue: [
          { speaker: "CEO", text: "Let's discuss our strategy for the next five years. What trends do you see?", translation: "Discutamos nuestra estrategia para los próximos cinco años. ¿Qué tendencias ven?" },
          { speaker: "Marketing", text: "The trend is toward sustainable products. Consumers will demand eco-friendly options.", translation: "La tendencia es hacia productos sostenibles. Los consumidores exigirán opciones ecológicas." },
          { speaker: "CEO", text: "I agree. So we're going to focus on sustainability. What about competition?", translation: "Estoy de acuerdo. Así que nos vamos a enfocar en sustentabilidad. ¿Y qué hay de la competencia?" },
          { speaker: "Sales", text: "The market is very competitive. Apple and Samsung are going to launch new products soon.", translation: "El mercado es muy competitivo. Apple y Samsung van a lanzar nuevos productos pronto." },
          { speaker: "CEO", text: "How will we compete?", translation: "¿Cómo competiremos?" },
          { speaker: "R&D", text: "We're going to invest more in innovation. I predict we'll have three new products by next year.", translation: "Vamos a invertir más en innovación. Predigo que tendremos tres nuevos productos para el próximo año." },
          { speaker: "CEO", text: "Good. And we'll need to adapt to AI technology. It will change everything.", translation: "Bien. Y tendremos que adaptarnos a la tecnología de IA. Lo cambiará todo." },
          { speaker: "Marketing", text: "I'll prepare a presentation on AI trends for next week.", translation: "Prepararé una presentación sobre tendencias de IA para la próxima semana." },
          { speaker: "CEO", text: "Perfect. I believe our future will be bright if we adapt quickly.", translation: "Perfecto. Creo que nuestro futuro será brillante si nos adaptamos rápidamente." }
        ],
        keyPhrases: [
          "The trend is toward...",
          "Consumers will demand...",
          "We're going to focus on...",
          "How will we compete?",
          "I predict we'll have...",
          "I'll prepare..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de formas futuras",
        sounds: [
          { sound: "Contracciones con 'will'", examples: ["I'll /aɪl/", "you'll /juːl/", "they'll /ðeɪl/"], tip: "Las contracciones son muy naturales en inglés hablado" },
          { sound: "'Going to' informal", examples: ["gonna /ˈɡʌnə/"], tip: "En conversación informal, 'going to' suena como 'gonna'" },
          { sound: "Won't /wəʊnt/", examples: ["won't = will not"], tip: "Suena muy diferente a 'want'" }
        ],
        commonErrors: [
          { word: "I'll", wrong: "/ai wil/", right: "/aɪl/", note: "Una sílaba, no dos" },
          { word: "strategy", wrong: "/stra-te-gi/", right: "/ˈstrætədʒi/", note: "Acento en primera sílaba, 'g' suena como 'j'" },
          { word: "sustainable", wrong: "/sus-tai-na-ble/", right: "/səˈsteɪnəbl/", note: "Acento en segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "El futuro de la tecnología y las empresas globales",
        content: "Las empresas tecnológicas deben adaptarse constantemente. Sony pasó de radios a televisores, a Walkman, a PlayStation, y ahora a entretenimiento digital. Apple pasó de computadoras a iPods a iPhones. Las predicciones tecnológicas a menudo fallan: en 2007, muchos dijeron que el iPhone fracasaría. El éxito futuro depende de la adaptación, la innovación y la comprensión de las tendencias del consumidor. Las empresas que no se adaptan (como Kodak y Blockbuster) desaparecen.",
        examples: [
          "'Disruptive technology' - tecnología que cambia una industria",
          "'Market leader' - líder del mercado",
          "'Stay ahead of the competition' - mantenerse adelante de la competencia",
          "'Future-proof' - preparado para el futuro",
          "'Sustainable growth' - crecimiento sostenible"
        ]
      },
      consolidationQuiz: [
        {
          question: "'I think prices will increase' usa 'will' porque es:",
          options: ["un plan", "una predicción/opinión", "una decisión tomada", "una promesa"],
          correctAnswer: 1,
          explanation: "Usamos 'will' para predicciones y opiniones sobre el futuro."
        },
        {
          question: "'We're going to launch a new product next month' usa 'going to' porque:",
          options: ["Es una opinión", "Es una decisión espontánea", "Es un plan ya decidido", "Es una promesa"],
          correctAnswer: 2,
          explanation: "'Going to' se usa para planes e intenciones ya decididas."
        },
        {
          question: "'Look! The server is crashing. It ___ fail.'",
          options: ["will", "'s going to", "would", "is"],
          correctAnswer: 1,
          explanation: "Con evidencia presente visible, usamos 'going to': 'It's going to fail'."
        },
        {
          question: "La forma correcta de 'They compete' en tercera persona singular es:",
          options: ["Sony compete", "Sony competes", "Sony is compete", "Sony competing"],
          correctAnswer: 1,
          explanation: "Tercera persona singular añade 's': 'Sony competes'."
        },
        {
          question: "'Sustainable' significa:",
          options: ["competitivo", "estratégico", "sostenible/que puede continuar", "adaptable"],
          correctAnswer: 2,
          explanation: "'Sustainable' significa que puede mantenerse a largo plazo."
        },
        {
          question: "Elige la predicción correcta:",
          options: ["I will going to help", "I'm will help", "I'll help you", "I going to help"],
          correctAnswer: 2,
          explanation: "'I'll help' es la forma correcta. No combines 'will' y 'going to'."
        }
      ],
      guidedProduction: [
        {
          task: "Hacer predicciones sobre tecnología",
          prompt: "Escribe 5 predicciones sobre cómo será la tecnología en 10 años.",
          sampleAnswer: "In 10 years, I think technology will be very different. First, AI will do many jobs that humans do today. Second, cars will be fully autonomous - they won't need drivers. Third, virtual reality will change how we work and study. Fourth, smartphones will probably be replaced by wearable devices. Finally, I believe sustainable technology will become the standard, not the exception.",
          hints: ["Usa 'will' para predicciones/opiniones", "Incluye 'I think', 'I believe', 'probably'", "Varía los temas: AI, transporte, comunicación"]
        },
        {
          task: "Describir planes de una empresa",
          prompt: "Imagina que eres el CEO de una empresa tecnológica. Describe tus planes para el próximo año.",
          sampleAnswer: "Next year, we're going to expand to three new markets in Asia. We're going to launch our new sustainable smartphone in March. We're also going to invest heavily in AI research. The competition is strong, but our strategy is clear: we're going to focus on innovation and sustainability. I'm confident we're going to increase our market share.",
          hints: ["Usa 'going to' para planes ya decididos", "Menciona 'strategy', 'competition', 'market'", "Incluye fechas y detalles específicos"]
        },
        {
          task: "Comparar 'will' y 'going to'",
          prompt: "Escribe un párrafo usando ambas formas correctamente.",
          sampleAnswer: "Our company is going to release a new product next month - that's our plan. I think it will be very popular because the market trend is toward eco-friendly products. The CEO announced that we're going to hire 50 new employees. I believe this will make us more competitive. Look at our sales numbers - they're going to be the best this quarter!",
          hints: ["'Going to' para planes y evidencia", "'Will' para predicciones y opiniones", "Incluye marcadores como 'I think', 'I believe'"]
        },
        {
          task: "Escribir sobre el futuro de tu industria",
          prompt: "Describe cómo crees que cambiará tu industria o campo de trabajo en los próximos 5 años.",
          sampleAnswer: "I work in software development, and I think the industry will change dramatically. AI tools will automate many routine coding tasks. Companies are going to need fewer developers for simple projects, but they'll need more specialists for complex systems. The trend is toward remote work, so I believe teams will be more international. Developers who don't adapt to AI will struggle. I'm going to learn AI programming this year to stay competitive.",
          hints: ["Mezcla 'will' y 'going to' apropiadamente", "Usa vocabulario: 'trend', 'adapt', 'competitive', 'strategy'", "Incluye tus propios planes personales"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste sobre el lanzamiento del Walkman con 'can' y 'could'. Ahora usarás 'will' y 'going to' para hablar sobre el futuro de Sony y las empresas tecnológicas.",
      connectionToNext: "¡Felicidades! Has completado el Level 4 - Intermediate. Has aprendido sobre negocios a través de las historias de Disney y Sony. En el siguiente nivel, continuarás desarrollando tu inglés con temas más avanzados.",
      grammarTheoryIds: ['b1-future-forms', 'a2-going-to-vs-will']
    },
  ]
};

export default level4;
