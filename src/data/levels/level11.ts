import type { Level } from '../../types';

export const level11: Level = {
  id: 11,
  name: "Mastery",
  cefrLevel: "C1+",
  description: "Dominio académico, presentaciones de impacto y análisis profundo",
  totalTasks: 12,
  estimatedHours: 24,
  color: "#c084fc",
  icon: "🎓",
  tasks: [
    {
      id: 1,
      title: "High-Impact Storytelling in Business",
      titleEs: "Storytelling de Alto Impacto en Negocios",
      introduction: {
        title: "📖 Storytelling Empresarial",
        explanation: "Las historias conectan emocionalmente y son más memorables que los datos. Los mejores líderes son grandes storytellers.",
        keyPoints: [
          "Estructura: hook, conflict, resolution, takeaway",
          "Hook: 'Let me tell you about a time when...'",
          "Conflicto: 'The challenge we faced was...'",
          "Resolución: 'That's when we realized...'",
          "Takeaway: 'The lesson here is...'"
        ],
        examples: [
          { english: "Let me take you back to 2019. Our team was on the brink of giving up...", spanish: "Déjame llevarte de vuelta a 2019. Nuestro equipo estaba al borde de rendirse...", explanation: "Hook emotivo" },
          { english: "Against all odds, we turned the situation around. Here's how...", spanish: "Contra todo pronóstico, dimos la vuelta a la situación. Así es como...", explanation: "Transición a resolución" },
          { english: "The takeaway? Sometimes your biggest failure becomes your greatest teacher.", spanish: "¿La moraleja? A veces tu mayor fracaso se convierte en tu mejor maestro.", explanation: "Lección memorable" }
        ],
        tips: [
          "💡 Comienza con el momento más interesante (in medias res)",
          "💡 Usa detalles sensoriales para hacer la historia vívida",
          "💡 Conecta siempre la historia con tu mensaje clave"
        ],
        whenToUse: ["En presentaciones donde necesitas inspirar o motivar", "Al pitch de ideas o productos a inversores", "En charlas TED-style o keynotes", "Cuando quieres que tu mensaje sea memorable y emocional"],
        whenNotToUse: ["No abras con una historia larga si tu audiencia espera datos duros primero", "Evita storytelling excesivo en informes escritos — déjalo para lo oral", "No uses 'Picture this...' en un email formal de negocios"]
      },
      objectives: ["Estructurar historias persuasivas", "Usar hooks efectivos", "Conectar historias con mensajes de negocio"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c1-inversion", "c1-cleft-sentences"],
      vocabulary: {
        nouns: [
          { id: "l11t1_n1", word: "narrative", translation: "narrativa", type: "noun", definition: "a story or account", definitionEs: "una historia o relato", example: "We need a compelling narrative.", exampleEs: "Necesitamos una narrativa convincente.", related: [], difficulty: 2 },
          { id: "l11t1_n2", word: "turning point", translation: "punto de inflexión", type: "noun", definition: "moment when things change", definitionEs: "momento cuando las cosas cambian", example: "That was the turning point.", exampleEs: "Ese fue el punto de inflexión.", related: [], difficulty: 2 },
          { id: "l11t1_n3", word: "takeaway", translation: "conclusión/moraleja", type: "noun", definition: "the main lesson", definitionEs: "la lección principal", example: "What's the key takeaway?", exampleEs: "¿Cuál es la conclusión clave?", related: [], difficulty: 1 },
          { id: "l11t1_n4", word: "hook", translation: "gancho", type: "noun", definition: "attention grabber", definitionEs: "captador de atención", example: "Start with a strong hook.", exampleEs: "Comienza con un gancho fuerte.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l11t1_v1", word: "captivate", translation: "cautivar", type: "verb", definition: "to fascinate", definitionEs: "fascinar", example: "Her story captivated the audience.", exampleEs: "Su historia cautivó a la audiencia.", related: [], difficulty: 2 },
          { id: "l11t1_v2", word: "unfold", translation: "desarrollarse", type: "verb", definition: "to reveal gradually", definitionEs: "revelar gradualmente", example: "The events unfolded quickly.", exampleEs: "Los eventos se desarrollaron rápidamente.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l11t1_a1", word: "compelling", translation: "convincente/atractivo", type: "adjective", definition: "very interesting", definitionEs: "muy interesante", example: "It's a compelling story.", exampleEs: "Es una historia convincente.", related: [], difficulty: 2 },
          { id: "l11t1_a2", word: "vivid", translation: "vívido", type: "adjective", definition: "creating clear mental images", definitionEs: "creando imágenes mentales claras", example: "Use vivid descriptions.", exampleEs: "Usa descripciones vívidas.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l11t1_e1", word: "Let me take you back to...", translation: "Déjame llevarte de vuelta a...", type: "expression", definition: "starting a flashback", definitionEs: "iniciando un flashback", example: "Let me take you back to 2010.", exampleEs: "Déjame llevarte de vuelta a 2010.", related: [], difficulty: 1 },
          { id: "l11t1_e2", word: "Picture this...", translation: "Imagina esto...", type: "expression", definition: "inviting visualization", definitionEs: "invitando visualización", example: "Picture this: an empty office...", exampleEs: "Imagina esto: una oficina vacía...", related: [], difficulty: 1 },
          { id: "l11t1_e3", word: "Against all odds...", translation: "Contra todo pronóstico...", type: "expression", definition: "despite difficulties", definitionEs: "a pesar de dificultades", example: "Against all odds, we succeeded.", exampleEs: "Contra todo pronóstico, tuvimos éxito.", related: [], difficulty: 1 },
          { id: "l11t1_e4", word: "Fast forward to...", translation: "Avanzando rápidamente hasta...", type: "expression", definition: "jumping ahead in time", definitionEs: "saltando adelante en el tiempo", example: "Fast forward to today...", exampleEs: "Avanzando rápidamente hasta hoy...", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t1_cm1", wrong: "Starting with 'I want to tell you a story about...' (too direct)", correct: "Use hooks: 'Picture this...', 'Let me take you back to...'", explanation: "A hook creates intrigue; an announcement kills curiosity", explanationEs: "Un gancho crea intriga; un anuncio mata la curiosidad", category: "usage" },
        { id: "l11t1_cm2", wrong: "Telling chronologically from the beginning (boring)", correct: "Start in medias res (in the middle of the action)", explanation: "Begin at the most interesting moment, then go back", explanationEs: "Comienza en el momento más interesante, luego retrocede", category: "usage" },
        { id: "l11t1_cm3", wrong: "Including too many details (losing focus)", correct: "Only include details that serve the takeaway", explanation: "Every detail must contribute to the main message", explanationEs: "Cada detalle debe contribuir al mensaje principal", category: "usage" },
        { id: "l11t1_cm4", wrong: "Forgetting the business connection (just a story)", correct: "Always tie back: 'The lesson here is...', 'This taught me that...'", explanation: "In business storytelling, the story serves a purpose", explanationEs: "En storytelling de negocios, la historia sirve a un propósito", category: "usage" },
        { id: "l11t1_cm5", wrong: "Reading a script (no emotion)", correct: "Tell the story as if reliving it; use pauses and tone variation", explanation: "Authentic emotion connects; a script creates distance", explanationEs: "La emoción auténtica conecta; el script distancia", category: "usage" }
      ],
      exercises: [
        {
          type: "structure-building",
          instruction: "Organiza estos elementos en la estructura correcta de storytelling",
          items: [
            {
              elements: ["We lost our biggest client", "The lesson? Never assume loyalty", "Picture this: December 2019", "But then we discovered why", "And that's when everything changed"],
              correctOrder: ["Picture this: December 2019", "We lost our biggest client", "But then we discovered why", "And that's when everything changed", "The lesson? Never assume loyalty"],
              structure: "Hook → Problem → Discovery → Resolution → Takeaway"
            },
            {
              elements: ["The takeaway: hire for attitude, train for skill", "Let me tell you about my worst hiring decision", "Against all odds, he became our top performer", "Everyone told me I was making a mistake", "What I didn't see at first was his potential"],
              correctOrder: ["Let me tell you about my worst hiring decision", "Everyone told me I was making a mistake", "What I didn't see at first was his potential", "Against all odds, he became our top performer", "The takeaway: hire for attitude, train for skill"],
              structure: "Hook → Conflict → Turning point → Resolution → Takeaway"
            }
          ]
        },
        {
          type: "hook-creation",
          instruction: "Convierte estos inicios aburridos en hooks atractivos",
          items: [
            {
              boring: "I want to tell you about a time when our company almost failed.",
              hookOptions: ["Picture this: three founders, one laptop, and 48 hours to save the company.", "Let me take you back to the night we thought it was all over.", "What would you do if you had 48 hours to save everything you'd built?"]
            },
            {
              boring: "This is a story about how I learned about customer service.",
              hookOptions: ["The angriest email I ever received taught me the most important lesson of my career.", "Picture this: a customer so furious, she was threatening to sue.", "What I'm about to tell you changed how I think about every customer interaction."]
            },
            {
              boring: "I'm going to tell you about our product launch.",
              hookOptions: ["Fast forward to launch day. Everything that could go wrong... did.", "Picture this: 10,000 people waiting, and our servers are on fire.", "The best product launch of my career started as the worst disaster."]
            }
          ]
        },
        {
          type: "sensory-details",
          instruction: "Añade detalles sensoriales para hacer estas oraciones más vívidas",
          items: [
            { flat: "The office was quiet.", vivid: "The only sound in the office was the hum of the air conditioning and the nervous tapping of keyboards." },
            { flat: "Everyone was stressed.", vivid: "Coffee cups littered every desk, ties were loosened, and you could cut the tension with a knife." },
            { flat: "The presentation went well.", vivid: "As I clicked to the final slide, I saw heads nodding, and then—something I'd never experienced—the room erupted in applause." }
          ]
        },
        {
          type: "story-completion",
          instruction: "Completa esta historia de negocios con las transiciones apropiadas",
          story: {
            hook: "___ [hook]: our biggest investor had just pulled out, three weeks before launch.",
            conflict: "___ [problema/conflicto], we were facing bankruptcy.",
            turningPoint: "___ [punto de inflexión], we realized we'd been looking at this all wrong.",
            resolution: "___ [resolución], we secured an even better deal.",
            takeaway: "___ [moraleja]? Sometimes rejection is redirection."
          },
          answers: ["Picture this", "With no funding", "That's when", "Against all odds", "The lesson"]
        }
      ],
      modelDialogue: {
        title: "Presentación de CEO a inversionistas",
        context: "CEO cuenta la historia de la empresa para conectar emocionalmente con potenciales inversionistas",
        dialogue: [
          { speaker: "CEO", text: "Let me take you back to 2015. Picture this: a garage in Austin, Texas, three friends, and a problem that nobody else wanted to solve.", translation: "Déjenme llevarlos de vuelta a 2015. Imaginen esto: un garaje en Austin, Texas, tres amigos, y un problema que nadie más quería resolver." },
          { speaker: "CEO", text: "Everyone told us we were crazy. 'The market's too small,' they said. 'Nobody will pay for that.'", translation: "Todos nos dijeron que estábamos locos. 'El mercado es muy pequeño,' decían. 'Nadie pagará por eso.'" },
          { speaker: "CEO", text: "But here's what they didn't see: we weren't just building a product. We were solving a problem we had lived ourselves.", translation: "Pero esto es lo que no vieron: no estábamos solo construyendo un producto. Estábamos resolviendo un problema que habíamos vivido nosotros mismos." },
          { speaker: "CEO", text: "Fast forward to today: 50,000 customers, 200 employees, and a solution that's changing an entire industry.", translation: "Avanzando rápidamente hasta hoy: 50,000 clientes, 200 empleados, y una solución que está cambiando toda una industria." },
          { speaker: "CEO", text: "The takeaway? Never let someone else's limitations define your possibilities.", translation: "¿La moraleja? Nunca dejes que las limitaciones de otros definan tus posibilidades." },
          { speaker: "Investor", text: "That's a compelling story. But what makes you confident this growth will continue?", translation: "Esa es una historia convincente. ¿Pero qué te da confianza en que este crecimiento continuará?" },
          { speaker: "CEO", text: "Great question. And that leads me to another story—this one about a customer who showed us our next chapter...", translation: "Gran pregunta. Y eso me lleva a otra historia—esta sobre un cliente que nos mostró nuestro próximo capítulo..." }
        ],
        keyPhrases: [
          { phrase: "Let me take you back to...", usage: "Iniciando flashback" },
          { phrase: "Picture this:", usage: "Invitando visualización" },
          { phrase: "But here's what they didn't see...", usage: "Creando contraste" },
          { phrase: "Fast forward to today...", usage: "Saltando al presente" },
          { phrase: "The takeaway?", usage: "Introduciendo la lección" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "/æ/", description: "Short 'a' in narrative, captivate", descriptionEs: "La 'a' corta en narrative, captivate", examples: [{ word: "narrative", transcription: "/ˈnær.ə.tɪv/" }, { word: "captivate", transcription: "/ˈkæp.tɪ.veɪt/" }], tips: "Avoid Spanish 'a' - keep it short and flat" }
        ],
        commonProblems: [
          { word: "narrative", wrong: "na-RRA-tiv", correct: "/ˈnær.ə.tɪv/", tip: "NA-ruh-tiv" },
          { word: "compelling", wrong: "com-PE-lling", correct: "/kəmˈpel.ɪŋ/", tip: "kum-PEL-ing" },
          { word: "captivate", wrong: "cap-ti-VATE", correct: "/ˈkæp.tɪ.veɪt/", tip: "KAP-ti-vayt" }
        ],
        minimalPairs: [
          { word1: "narrative", word2: "narrator", soundDifference: "Stress: NAR-ra-tive vs na-RRATOR" },
          { word1: "compelling", word2: "compellingly", soundDifference: "Final -ing vs -ing-ly rhythm" }
        ],
        intonationPatterns: [
          { pattern: "Build suspense with pauses", example: "Picture this... [pause] ...three founders... [pause] ...and 48 hours.", meaning: "Las pausas crean tensión dramática" },
          { pattern: "Rise before the turning point", example: "And then↗... everything changed↘.", meaning: "Subida antes del momento clave, bajada después" },
          { pattern: "Vary pace: slow for drama, fast for action", example: "[Slow] We had one chance... [Fast] We called everyone, worked through the night, rewrote everything.", meaning: "Ritmo lento para drama, rápido para acción" }
        ]
      },
      culturalNote: {
        title: "Storytelling Styles Across Cultures",
        titleEs: "Estilos de storytelling entre culturas",
        content: "El storytelling empresarial americano tiende a ser dramático y personal (Steve Jobs, Elon Musk). En culturas asiáticas, las historias suelen enfatizar el esfuerzo colectivo sobre el heroísmo individual. En contextos europeos, el storytelling puede ser más sutil y basado en datos. Adapta tu estilo a la audiencia, pero la estructura universal (conflicto → resolución → lección) funciona en todas partes.\n\nHumor as social bonding in English culture: En cultura anglófona, el humor cumple una función social clave: romper el hielo, crear rapport y demostrar inteligencia. El humor autocrítico (self-deprecating humour) es muy valorado en UK. En EE.UU., el humor en presentaciones puede hacer que el orador parezca más accesible. Sin embargo, el humor es culturalmente específico: lo que funciona en un contexto puede fallar en otro. Observa antes de intentar; cuando dudes, un tono profesional cálido es más seguro que un chiste arriesgado.",
        contentEs: "Adapta el tono pero mantén la estructura universal. El humor une en cultura anglófona; el autocrítico es valorado en UK. Observa antes de usar humor.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "semi-formal to formal"
      },
      consolidationQuiz: [
        {
          question: "¿Qué es un 'hook' en storytelling?",
          options: ["El final de la historia", "La apertura que captura atención", "La moraleja", "El conflicto principal"],
          correctAnswer: 1,
          explanation: "Hook = gancho que captura atención desde el inicio"
        },
        {
          question: "'In medias res' significa comenzar:",
          options: ["Desde el principio cronológico", "Con la moraleja", "En medio de la acción", "Con una pregunta"],
          correctAnswer: 2,
          explanation: "In medias res = en medio de la acción, no cronológicamente"
        },
        {
          question: "¿Cuál es el propósito del 'takeaway'?",
          options: ["Hacer la historia más larga", "Conectar la historia con un mensaje clave", "Terminar abruptamente", "Añadir humor"],
          correctAnswer: 1,
          explanation: "El takeaway conecta la historia con el mensaje de negocio"
        },
        {
          question: "'Fast forward to today' se usa para:",
          options: ["Retroceder en el tiempo", "Saltar hacia adelante en el tiempo", "Pausar la historia", "Cambiar de tema"],
          correctAnswer: 1,
          explanation: "Fast forward = saltar adelante en la línea temporal"
        },
        {
          question: "Un storytelling de negocios efectivo debe:",
          options: ["Incluir todos los detalles posibles", "Ser puramente emocional sin datos", "Conectar con un mensaje de negocio", "Durar al menos 30 minutos"],
          correctAnswer: 2,
          explanation: "Debe servir a un propósito de negocio, no solo entretener"
        },
        {
          question: "'Against all odds' significa:",
          options: ["Con toda probabilidad", "Contra todo pronóstico", "Con ayuda de todos", "Por casualidad"],
          correctAnswer: 1,
          explanation: "Against all odds = a pesar de que todo indicaba lo contrario"
        }
      ],
      guidedProduction: [
        {
          prompt: "Crea una historia de 1 minuto sobre un desafío que enfrentaste usando la estructura: Hook → Conflict → Turning point → Resolution → Takeaway",
          sampleResponse: "Picture this: my first day as a manager, and my entire team had just resigned. [Hook]\n\nI had 72 hours to deliver a critical project—with no team. Everyone told me to postpone, to admit defeat. [Conflict]\n\nThat's when I realized I had been so focused on managing that I'd forgotten to lead. I picked up the phone and called each person who'd left. [Turning point]\n\nAgainst all odds, three of them came back—not because I offered more money, but because I finally listened. We delivered on time. [Resolution]\n\nThe takeaway? People don't leave jobs. They leave managers who don't listen. [Takeaway]"
        },
        {
          prompt: "Transforma esta información aburrida en una historia convincente: 'Nuestra app tiene 1 millón de usuarios y creció 300% el año pasado.'",
          sampleResponse: "Let me take you back to the moment I almost gave up.\n\nWe'd been building this app for two years. Two years of sleepless nights, of people telling us it would never work. We had 127 users—most of them friends and family.\n\nThen one morning, I woke up to a notification I'll never forget: 'User 1,000 has signed up.'\n\nFast forward to today: that number is 1 million. We grew 300% last year alone.\n\nBut here's what those numbers don't tell you: behind every user is a problem we helped solve, a life we made a little easier.\n\nThe takeaway? Numbers tell a story, but the real story is in the people behind them."
        }
      ],
      connectionToPrevious: "Usaremos storytelling junto con los recursos retóricos del Level 10 para máximo impacto.",
      connectionToNext: "Las cleft sentences nos permitirán enfatizar puntos clave dentro de nuestras historias."
    },
    {
      id: 2,
      title: "Cleft Sentences for Emphasis",
      titleEs: "Oraciones Escindidas para Énfasis",
      introduction: {
        title: "🔦 Oraciones Escindidas",
        explanation: "Las cleft sentences (oraciones escindidas) permiten enfatizar un elemento específico de la oración. Son herramientas poderosas para el discurso avanzado.",
        keyPoints: [
          "It-cleft: 'It was John who told me' (énfasis en John)",
          "What-cleft: 'What I need is more time' (énfasis en necesidad)",
          "All-cleft: 'All I want is a chance'",
          "The thing/reason/place: 'The reason I'm here is...'",
          "Wh-cleft invertida: 'More time is what I need'"
        ],
        examples: [
          { english: "It wasn't the price that bothered me – it was the quality.", spanish: "No fue el precio lo que me molestó – fue la calidad.", explanation: "It-cleft negativa y positiva" },
          { english: "What we really need is a complete restructuring.", spanish: "Lo que realmente necesitamos es una reestructuración completa.", explanation: "What-cleft" },
          { english: "All I'm asking for is a fair opportunity.", spanish: "Todo lo que pido es una oportunidad justa.", explanation: "All-cleft" }
        ],
        tips: [
          "💡 Las cleft sentences son comunes en discursos y debates",
          "💡 Úsalas para corregir malentendidos o destacar contrastes",
          "💡 'What-clefts' son especialmente útiles para resumir"
        ],
        whenToUse: [
          "En presentaciones ejecutivas: \"What we really need is a complete restructuring\"",
          "En negociaciones: \"It wasn't the price that bothered me – it was the quality\"",
          "En corrección de malentendidos: \"All I'm asking for is a fair opportunity\"",
          "En debates formales: \"The reason I'm here is to clarify our position\""
        ],
        whenNotToUse: [
          "En conversación casual → suena artificial: usa \"We need more time\" en vez de \"What we need is more time\"",
          "En emails informales → demasiado enfático: las clefts son para momentos clave",
          "En exceso → una cleft por párrafo máximo; más suena forzado"
        ]
      },
      objectives: ["Usar it-clefts para énfasis", "Dominar what-clefts", "Enfatizar información clave"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-cleft-sentences"],
      vocabulary: {
        nouns: [
          { id: "l11t2_n1", word: "emphasis", translation: "énfasis", type: "noun", definition: "special importance or prominence", definitionEs: "importancia o prominencia especial", example: "We need to put more emphasis on quality.", exampleEs: "Necesitamos poner más énfasis en la calidad.", related: ["stress", "focus"], difficulty: 1 },
          { id: "l11t2_n2", word: "implication", translation: "implicación", type: "noun", definition: "a conclusion that can be drawn from something", definitionEs: "conclusión que puede deducirse de algo", example: "The implications of this decision are far-reaching.", exampleEs: "Las implicaciones de esta decisión son de largo alcance.", related: ["consequence"], difficulty: 2 },
          { id: "l11t2_n3", word: "contrast", translation: "contraste", type: "noun", definition: "a deliberate difference or opposition", definitionEs: "diferencia u oposición deliberada", example: "The contrast between the two proposals is striking.", exampleEs: "El contraste entre las dos propuestas es llamativo.", related: ["difference"], difficulty: 1 },
          { id: "l11t2_n4", word: "premise", translation: "premisa", type: "noun", definition: "a statement taken as true as a starting point", definitionEs: "afirmación tomada como verdadera como punto de partida", example: "The whole argument rests on a flawed premise.", exampleEs: "Todo el argumento descansa sobre una premisa defectuosa.", related: ["assumption"], difficulty: 2 },
        ],
        verbs: [
          { id: "l11t2_v1", word: "to highlight", translation: "destacar / resaltar", type: "verb", definition: "to draw attention to something important", definitionEs: "llamar la atención sobre algo importante", example: "The report highlights key failures in the system.", exampleEs: "El informe destaca los fallos clave del sistema.", related: ["emphasise"], difficulty: 1 },
          { id: "l11t2_v2", word: "to contradict", translation: "contradecir", type: "verb", definition: "to say the opposite; to deny", definitionEs: "decir lo contrario; negar", example: "His actions contradict his stated values.", exampleEs: "Sus acciones contradicen sus valores declarados.", related: ["negate"], difficulty: 1 },
          { id: "l11t2_v3", word: "to pinpoint", translation: "identificar con precisión", type: "verb", definition: "to identify precisely", definitionEs: "identificar con precisión", example: "Can you pinpoint exactly where the problem lies?", exampleEs: "¿Puedes identificar exactamente dónde está el problema?", related: ["identify"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l11t2_adj1", word: "pivotal", translation: "crucial / decisivo", type: "adjective", definition: "of critical importance", definitionEs: "de importancia crítica", example: "This was a pivotal moment in the negotiation.", exampleEs: "Este fue un momento decisivo en la negociación.", related: ["crucial"], difficulty: 2 },
          { id: "l11t2_adj2", word: "contrastive", translation: "de contraste", type: "adjective", definition: "showing or emphasising differences", definitionEs: "que muestra o enfatiza diferencias", example: "Use contrastive stress to show what changed.", exampleEs: "Usa el énfasis contrastivo para mostrar qué cambió.", related: ["comparative"], difficulty: 2 },
        ],
        expressions: [
          { id: "l11t2_e1", word: "It was/is [X] that/who...", translation: "Fue/Es [X] quien/que...", type: "expression", definition: "it-cleft for emphasis", definitionEs: "it-cleft para énfasis", example: "It was Sarah who found the solution.", exampleEs: "Fue Sarah quien encontró la solución.", related: [], difficulty: 2 },
          { id: "l11t2_e2", word: "What [subject] [verb] is/was...", translation: "Lo que [sujeto] [verbo] es/fue...", type: "expression", definition: "what-cleft", definitionEs: "what-cleft", example: "What we discovered was surprising.", exampleEs: "Lo que descubrimos fue sorprendente.", related: [], difficulty: 2 },
          { id: "l11t2_e3", word: "All I want/need/ask is...", translation: "Todo lo que quiero/necesito/pido es...", type: "expression", definition: "all-cleft", definitionEs: "all-cleft", example: "All I need is some clarity.", exampleEs: "Todo lo que necesito es algo de claridad.", related: [], difficulty: 1 },
          { id: "l11t2_e4", word: "The reason (why) ... is (that)...", translation: "La razón (por la que) ... es (que)...", type: "expression", definition: "reason-cleft", definitionEs: "razón-cleft", example: "The reason I'm late is that traffic was terrible.", exampleEs: "La razón por la que llego tarde es que el tráfico estaba terrible.", related: [], difficulty: 1 },
          { id: "l11t2_e5", word: "The thing/point is (that)...", translation: "El asunto/punto es (que)...", type: "expression", definition: "thing-cleft", definitionEs: "thing-cleft", example: "The point is that we need to act now.", exampleEs: "El punto es que necesitamos actuar ahora.", related: [], difficulty: 1 },
          { id: "l11t2_e6", word: "It's not [X] that..., it's [Y]", translation: "No es [X] lo que..., es [Y]", type: "expression", definition: "contrastive cleft", definitionEs: "cleft contrastivo", example: "It's not the cost that concerns me, it's the timeline.", exampleEs: "No es el costo lo que me preocupa, es el cronograma.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t2_cm1", wrong: "What I need is more time. → What do I need is more time.", correct: "What I need is more time. (no question form after 'what')", explanation: "In what-clefts, use a statement, not a question", explanationEs: "En what-clefts, usa afirmación, no pregunta", category: "grammar" },
        { id: "l11t2_cm2", wrong: "It was John which helped me.", correct: "It was John who helped me. (use 'who' for people)", explanation: "'Who' for people, 'that' for things", explanationEs: "'Who' para personas, 'that' para cosas", category: "grammar" },
        { id: "l11t2_cm3", wrong: "What I want is that you help me.", correct: "What I want is for you to help me. / What I want is your help.", explanation: "After 'is', use a noun or 'for + infinitive', not 'that + clause'", explanationEs: "Después de 'is', usa sustantivo o 'for + infinitivo', no 'that + clause'", category: "grammar" },
        { id: "l11t2_cm4", wrong: "All what I need is...", correct: "All I need is... / All that I need is...", explanation: "Don't use 'what' after 'all'; use 'that' or nothing", explanationEs: "No uses 'what' después de 'all'; usa 'that' o nada", category: "grammar" },
        { id: "l11t2_cm5", wrong: "Overusing clefts in casual speech (sounds unnatural)", correct: "Reserve cleft sentences for emphasis in formal contexts", explanation: "Cleft sentences are for emphasis, not for daily use", explanationEs: "Las cleft sentences son para énfasis, no para uso diario", category: "usage" }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Convierte estas oraciones en cleft sentences para enfatizar el elemento subrayado",
          items: [
            { original: "[Sarah] solved the problem.", cleft: "It was Sarah who solved the problem.", type: "it-cleft" },
            { original: "I need [more data].", cleft: "What I need is more data.", type: "what-cleft" },
            { original: "I only want [honesty].", cleft: "All I want is honesty.", type: "all-cleft" },
            { original: "I called you [because I was worried].", cleft: "The reason I called you is that I was worried.", type: "reason-cleft" },
            { original: "The [deadline] concerns me, not the budget.", cleft: "It's not the budget that concerns me, it's the deadline.", type: "contrastive cleft" },
            { original: "[The CEO] made the final decision.", cleft: "It was the CEO who made the final decision.", type: "it-cleft" }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa las oraciones con la estructura cleft correcta",
          items: [
            { sentence: "___ we discovered was that the data had been corrupted.", answer: "What", hint: "what-cleft" },
            { sentence: "___ was Maria who first noticed the error.", answer: "It", hint: "it-cleft" },
            { sentence: "___ I'm asking for is a fair chance.", answer: "All", hint: "all-cleft" },
            { sentence: "The ___ why we're here is to find a solution.", answer: "reason", hint: "reason-cleft" },
            { sentence: "It's not ___ I disagree—it's how it was communicated.", answer: "what you said that", hint: "contrastive cleft" },
            { sentence: "___ happened next changed everything.", answer: "What", hint: "what-cleft" }
          ]
        },
        {
          type: "matching",
          instruction: "Empareja cada oración con el tipo de cleft que usa",
          items: [
            { sentence: "It was in 2020 that we launched the product.", type: "It-cleft (time)" },
            { sentence: "What surprised me was her reaction.", type: "What-cleft" },
            { sentence: "All they needed was guidance.", type: "All-cleft" },
            { sentence: "The reason I resigned was the lack of growth.", type: "Reason-cleft" },
            { sentence: "It's not the money that motivates me—it's the challenge.", type: "Contrastive cleft" },
            { sentence: "The point is that we can't afford to wait.", type: "Thing-cleft" }
          ]
        },
        {
          type: "correction",
          instruction: "Corrige los errores en estas cleft sentences",
          items: [
            { wrong: "What do I need is more time.", correct: "What I need is more time." },
            { wrong: "It was the manager which approved the budget.", correct: "It was the manager who approved the budget." },
            { wrong: "All what I want is peace.", correct: "All I want is peace." },
            { wrong: "What I want is that he apologizes.", correct: "What I want is for him to apologize. / What I want is an apology." }
          ]
        }
      ],
      modelDialogue: {
        title: "Reunión de clarificación de proyecto",
        context: "Project manager clarifica prioridades y malentendidos usando cleft sentences para énfasis",
        dialogue: [
          { speaker: "PM", text: "I've called this meeting because I've noticed some confusion about our priorities. Let me clarify.", translation: "He convocado esta reunión porque he notado cierta confusión sobre nuestras prioridades. Permítanme clarificar." },
          { speaker: "PM", text: "What we need to focus on is the customer experience, not just the technical features.", translation: "Lo que necesitamos enfocar es la experiencia del cliente, no solo las características técnicas." },
          { speaker: "Team Member", text: "But I thought the deadline was our main concern?", translation: "¿Pero pensé que el plazo era nuestra principal preocupación?" },
          { speaker: "PM", text: "It's not the deadline that worries me—it's the quality. All I'm asking for is that we don't compromise on user experience.", translation: "No es el plazo lo que me preocupa—es la calidad. Todo lo que pido es que no comprometamos la experiencia de usuario." },
          { speaker: "Team Member", text: "So we can extend the timeline?", translation: "¿Entonces podemos extender el cronograma?" },
          { speaker: "PM", text: "The point is that we need to have a conversation with stakeholders. What I'm suggesting is that we present options, not ultimatums.", translation: "El punto es que necesitamos tener una conversación con las partes interesadas. Lo que estoy sugiriendo es que presentemos opciones, no ultimátums." },
          { speaker: "Team Member", text: "That makes sense. It was the lack of clarity that was causing the stress, not the work itself.", translation: "Eso tiene sentido. Era la falta de claridad lo que estaba causando el estrés, no el trabajo en sí." }
        ],
        keyPhrases: [
          { phrase: "What we need to focus on is...", usage: "Enfatizando prioridad" },
          { phrase: "It's not X that worries me—it's Y", usage: "Corrigiendo malentendido" },
          { phrase: "All I'm asking for is...", usage: "Reduciendo expectativa a lo esencial" },
          { phrase: "The point is that...", usage: "Yendo al grano" },
          { phrase: "What I'm suggesting is...", usage: "Proponiendo con énfasis" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "contrastive stress", description: "Stress on clefted element vs. unstressed relative", descriptionEs: "Énfasis en el elemento escindido vs. relativo átono", examples: [{ word: "It was JOHN who", transcription: "/ɪt wɒz ˈdʒɒn huː/" }, { word: "What I NEED is", transcription: "/ˈwɒt aɪ ˈniːd ɪz/" }], tips: "The clefted word gets the strongest stress; the rest is de-emphasized" }
        ],
        commonProblems: [
          { word: "cleft", wrong: "KLEFT", correct: "/kleft/", tip: "Like 'left' with k - single syllable" }
        ],
        minimalPairs: [
          { word1: "It was John", word2: "John was it", soundDifference: "Cleft places nuclear stress on John; non-cleft distributes stress differently" },
          { word1: "What I need", word2: "I need what", soundDifference: "What-cleft: stress on NEED; normal: stress on final content word" }
        ],
        intonationPatterns: [
          { pattern: "Stress on the emphasized element", example: "It was JOHN who told me.", meaning: "El énfasis va en el elemento que la cleft destaca" },
          { pattern: "Rise-fall on 'what' clauses", example: "What I NEED↗ is more TIME↘.", meaning: "Subida en verbo de la cláusula what, bajada en complemento" },
          { pattern: "Contrast stress in negative clefts", example: "It's not the COST↗—it's the QUALITY↘.", meaning: "Énfasis en ambos elementos contrastados" }
        ]
      },
      culturalNote: {
        title: "Cleft Sentences in Professional English",
        titleEs: "Cleft sentences en inglés profesional",
        content: "Las cleft sentences son muy comunes en discursos políticos, presentaciones ejecutivas y escritura académica en inglés. Los hablantes nativos las usan para corregir malentendidos ('It's not X, it's Y'), resumir ('What this means is...'), y enfatizar ('All we need is...'). En español, estas estructuras existen pero son menos prominentes; los hablantes hispanohablantes a veces subestiman su importancia en inglés formal.\n\nThe British understatement tradition: Los británicos tienden a subestimar lo positivo ('It's not bad' = muy bueno; 'quite good' = excelente) y a suavizar lo negativo. 'I'm afraid there's been something of a problem' puede significar un desastre. Esta tradición de understatement puede confundir a hablantes de culturas más directas. En contextos británicos, evita el entusiasmo excesivo americano ('amazing!', 'incredible!') que puede sonar insincero; un 'rather good' británico transmite aprobación genuina.",
        contentEs: "Cruciales en inglés formal para énfasis y clarificación. Los británicos usan understatement: 'not bad' = muy bueno; evita entusiasmo excesivo en UK.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "formal"
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la forma correcta? '___ I need is more time.'",
          options: ["What", "That", "Which", "Who"],
          correctAnswer: 0,
          explanation: "What-cleft: What + subject + verb + is/was + complement"
        },
        {
          question: "'It was Maria ___ found the solution.'",
          options: ["which", "what", "who", "whom"],
          correctAnswer: 2,
          explanation: "Para personas usamos 'who' en it-clefts"
        },
        {
          question: "¿Qué tipo de cleft es 'All I want is peace'?",
          options: ["It-cleft", "What-cleft", "All-cleft", "Reason-cleft"],
          correctAnswer: 2,
          explanation: "All-cleft enfatiza que solo se necesita/quiere una cosa"
        },
        {
          question: "'The reason ___ I called is that I was worried.'",
          options: ["which", "why", "what", "that"],
          correctAnswer: 1,
          explanation: "'The reason why' es la estructura correcta"
        },
        {
          question: "¿Cuál es INCORRECTA?",
          options: ["What I need is help.", "All I want is peace.", "All what I need is time.", "It was John who helped."],
          correctAnswer: 2,
          explanation: "'All what' es incorrecto; debe ser 'All I need' o 'All that I need'"
        },
        {
          question: "'It's not the salary that bothers me—it's the hours.' Esto es un:",
          options: ["What-cleft", "All-cleft", "Contrastive cleft", "Reason-cleft"],
          correctAnswer: 2,
          explanation: "Contrastive cleft corrige o contrasta dos elementos"
        }
      ],
      guidedProduction: [
        {
          prompt: "Usa cleft sentences para enfatizar diferentes elementos de esta situación: 'The marketing team created the successful campaign in March.'",
          sampleResponse: "1. Enfatizando quién: It was the marketing team who created the successful campaign.\n2. Enfatizando qué: What the marketing team created was a successful campaign.\n3. Enfatizando cuándo: It was in March that the marketing team created the campaign.\n4. Enfatizando el resultado: What happened in March was that the marketing team created a successful campaign."
        },
        {
          prompt: "Escribe un párrafo clarificando un malentendido en el trabajo usando al menos 3 cleft sentences diferentes",
          sampleResponse: "I think there's been some confusion about our strategy, and I'd like to clarify a few things.\n\nFirst, it's not that we're cutting costs—it's that we're reallocating resources. What we're trying to achieve is better efficiency, not savings.\n\nSecond, the reason why we're restructuring is to improve collaboration, not to eliminate positions. All we want is for teams to work more closely together.\n\nThe point is that these changes are about growth, not reduction. What I hope you'll see is opportunity, not threat."
        }
      ],
      connectionToPrevious: "Las cleft sentences nos permiten enfatizar puntos clave en nuestras historias de storytelling.",
      connectionToNext: "Ahora aprenderemos a facilitar discusiones usando estas y otras estructuras avanzadas."
    },
    {
      id: 3,
      title: "Facilitating Complex Discussions",
      titleEs: "Facilitando Discusiones Complejas",
      introduction: {
        title: "🎤 Facilitación de Discusiones",
        explanation: "Facilitar discusiones complejas requiere habilidades especiales: dirigir sin dominar, incluir todas las voces, y llegar a conclusiones.",
        keyPoints: [
          "Abrir: 'I'd like to open up the discussion on...'",
          "Incluir: 'We haven't heard from... yet', 'Would you like to weigh in?'",
          "Redirigir: 'Let's bring this back to the main point'",
          "Sintetizar: 'So, to summarize what we've discussed...'",
          "Cerrar: 'Are we in agreement that...?', 'Let's park this for now'"
        ],
        examples: [
          { english: "Let's open this up to the group. I'm curious to hear different perspectives.", spanish: "Abramos esto al grupo. Tengo curiosidad de escuchar diferentes perspectivas.", explanation: "Invitando participación" },
          { english: "That's a valid point. Let's explore that further. Maria, would you like to weigh in?", spanish: "Ese es un punto válido. Exploremos eso más. María, ¿te gustaría opinar?", explanation: "Validando e incluyendo" },
          { english: "We seem to be going in circles. Can we take a step back and refocus on the core issue?", spanish: "Parece que estamos dando vueltas. ¿Podemos dar un paso atrás y reenfocarnos en el tema central?", explanation: "Redirigiendo" }
        ],
        tips: [
          "💡 Un buen facilitador habla menos, escucha más",
          "💡 'Park it' significa dejar un tema para después sin descartarlo",
          "💡 Resume periódicamente para mantener claridad"
        ],
        whenToUse: [
          "En workshops y sesiones de estrategia: \"I'd like to open up the discussion on...\"",
          "En reuniones con múltiples stakeholders: \"We haven't heard from Maria yet. Would you like to weigh in?\"",
          "Cuando la discusión se desvía: \"Let's bring this back to the main point\"",
          "Al cerrar temas: \"So, to summarize what we've discussed... Are we in agreement that...?\""
        ],
        whenNotToUse: [
          "En reuniones 1-a-1 → \"Would you like to weigh in?\" suena extraño: es para grupos",
          "Cuando tú tienes la respuesta → facilitar implica no dominar; evita imponer tu visión",
          "En conversaciones informales → \"Let's park this\" puede sonar corporativo con amigos"
        ]
      },
      objectives: ["Facilitar discusiones productivas", "Incluir todas las voces", "Sintetizar y cerrar discusiones"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c1-advanced-linking-devices", "c2-discourse-cohesion"],
      vocabulary: {
        nouns: [
          { id: "l11t3_n1", word: "consensus", translation: "consenso", type: "noun", definition: "general agreement", definitionEs: "acuerdo general", example: "Have we reached a consensus?", exampleEs: "¿Hemos llegado a un consenso?", related: [], difficulty: 2 },
          { id: "l11t3_n2", word: "stakeholder", translation: "parte interesada", type: "noun", definition: "person with interest in outcome", definitionEs: "persona con interés en el resultado", example: "We need stakeholder input.", exampleEs: "Necesitamos aportaciones de las partes interesadas.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l11t3_v1", word: "weigh in", translation: "opinar/dar su opinión", type: "verb", definition: "to contribute opinion", definitionEs: "contribuir opinión", example: "Would you like to weigh in?", exampleEs: "¿Te gustaría opinar?", related: [], difficulty: 2 },
          { id: "l11t3_v2", word: "summarize", translation: "resumir", type: "verb", definition: "to give main points", definitionEs: "dar los puntos principales", example: "Let me summarize the discussion.", exampleEs: "Déjame resumir la discusión.", related: [], difficulty: 1 },
          { id: "l11t3_v3", word: "park (an issue)", translation: "aparcar (un tema)", type: "verb", definition: "to set aside for later", definitionEs: "dejar de lado para después", example: "Let's park that for now.", exampleEs: "Aparquemos eso por ahora.", related: [], difficulty: 2 },
        ],
        adjectives: [],
        expressions: [
          { id: "l11t3_e1", word: "I'd like to open up the discussion on...", translation: "Me gustaría abrir la discusión sobre...", type: "expression", definition: "starting discussion", definitionEs: "iniciando discusión", example: "I'd like to open up the discussion on budgets.", exampleEs: "Me gustaría abrir la discusión sobre presupuestos.", related: [], difficulty: 1 },
          { id: "l11t3_e2", word: "We haven't heard from [X] yet", translation: "Aún no hemos escuchado a [X]", type: "expression", definition: "including others", definitionEs: "incluyendo a otros", example: "We haven't heard from Tom yet.", exampleEs: "Aún no hemos escuchado a Tom.", related: [], difficulty: 1 },
          { id: "l11t3_e3", word: "Let's bring this back to...", translation: "Traigamos esto de vuelta a...", type: "expression", definition: "refocusing", definitionEs: "reenfocando", example: "Let's bring this back to the main issue.", exampleEs: "Traigamos esto de vuelta al tema principal.", related: [], difficulty: 1 },
          { id: "l11t3_e4", word: "So, to summarize...", translation: "Entonces, para resumir...", type: "expression", definition: "synthesizing", definitionEs: "sintetizando", example: "So, to summarize, we agreed on three points.", exampleEs: "Entonces, para resumir, acordamos tres puntos.", related: [], difficulty: 1 },
          { id: "l11t3_e5", word: "Are we in agreement that...?", translation: "¿Estamos de acuerdo en que...?", type: "expression", definition: "checking consensus", definitionEs: "verificando consenso", example: "Are we in agreement that we should proceed?", exampleEs: "¿Estamos de acuerdo en que deberíamos proceder?", related: [], difficulty: 1 },
          { id: "l11t3_e6", word: "Let's take a step back", translation: "Demos un paso atrás", type: "expression", definition: "re-evaluating", definitionEs: "reevaluando", example: "Let's take a step back and look at the big picture.", exampleEs: "Demos un paso atrás y miremos el panorama general.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t3_cm1", wrong: "Dominating the discussion instead of facilitating", correct: "Ask questions, invite others: 'What does everyone think?' not 'I think we should...'", explanation: "A facilitator guides, doesn't dominate; speaks less than participants", explanationEs: "Un facilitador guía, no domina; habla menos que los participantes", category: "usage" },
        { id: "l11t3_cm2", wrong: "Allowing one person to monopolize", correct: "'Let's hear from others. Maria, what's your perspective?'", explanation: "Actively redistribute participation", explanationEs: "Redistribuye activamente la participación", category: "usage" },
        { id: "l11t3_cm3", wrong: "Moving on without synthesis", correct: "'So to summarize what we've discussed...' before each new topic", explanation: "Summarize before changing topics to maintain clarity", explanationEs: "Resume antes de cambiar de tema para mantener claridad", category: "usage" },
        { id: "l11t3_cm4", wrong: "Ignoring conflict or changing subject abruptly", correct: "'I sense there's some disagreement here. Let's explore that.'", explanation: "Address disagreement, don't avoid it", explanationEs: "Aborda el desacuerdo, no lo evites", category: "usage" },
        { id: "l11t3_cm5", wrong: "Ending without clear action items", correct: "'Let's confirm: who is doing what by when?'", explanation: "Every discussion must end with clear actions", explanationEs: "Toda discusión debe terminar con acciones claras", category: "usage" }
      ],
      exercises: [
        {
          type: "facilitation-responses",
          instruction: "Elige la mejor respuesta de facilitación para cada situación",
          items: [
            {
              situation: "One participant has been speaking for 5 minutes without interruption.",
              options: [
                "That's interesting. Anyone else?",
                "Thanks, James. Those are valuable points. Let's open this up—Sarah, what's your take on what James just shared?",
                "James, you're talking too much."
              ],
              bestAnswer: 1,
              explanation: "Valida, agradece, y redirige específicamente a otra persona"
            },
            {
              situation: "Two people are having a heated disagreement.",
              options: [
                "Let's move on to the next topic.",
                "I can see you both feel strongly about this. Let's take a step back—what's the core issue we're trying to solve?",
                "You're both wrong."
              ],
              bestAnswer: 1,
              explanation: "Reconoce la emoción y redirige a lo fundamental"
            },
            {
              situation: "The discussion has gone off-topic.",
              options: [
                "That's a valid point, and let's park it for now. Can we bring this back to our main question?",
                "That's irrelevant.",
                "Keep going, this is interesting."
              ],
              bestAnswer: 0,
              explanation: "Valida, 'aparca' para después, y redirige al tema"
            }
          ]
        },
        {
          type: "phrase-matching",
          instruction: "Empareja cada frase de facilitación con su propósito",
          items: [
            { phrase: "I'd like to open up the discussion on...", purpose: "Starting/opening" },
            { phrase: "We haven't heard from Tom yet.", purpose: "Including others" },
            { phrase: "Let's bring this back to the main point.", purpose: "Refocusing" },
            { phrase: "So, to summarize...", purpose: "Synthesizing" },
            { phrase: "Let's park that for now.", purpose: "Deferring a topic" },
            { phrase: "Are we in agreement that...?", purpose: "Checking consensus" }
          ]
        },
        {
          type: "scenario-practice",
          instruction: "¿Qué dirías como facilitador en cada situación?",
          scenarios: [
            {
              situation: "La discusión se ha vuelto circular sin conclusión.",
              suggestedResponse: "We seem to be going in circles. Let me try to summarize: the key points are A, B, and C. Are we missing anything, or can we move toward a decision?"
            },
            {
              situation: "Una persona muy tímida no ha participado.",
              suggestedResponse: "Li, I'd value your perspective on this. You have experience with similar projects—would you like to share your thoughts?"
            },
            {
              situation: "Necesitas cerrar la reunión en 5 minutos.",
              suggestedResponse: "We have about five minutes left. Let's quickly confirm: what are our action items, who's responsible for each, and when do we reconvene?"
            }
          ]
        },
        {
          type: "synthesis-practice",
          instruction: "Practica sintetizar estas opiniones diversas",
          opinions: [
            "Maria: We should launch in Q1 to beat competitors.",
            "John: Q1 is too risky—we need more testing.",
            "Sarah: What if we do a soft launch in Q1 and full launch in Q2?"
          ],
          synthesis: "So, to summarize the perspectives here: Maria advocates for a Q1 launch for competitive advantage, John emphasizes the need for thorough testing, and Sarah proposes a middle ground with a phased approach. It sounds like the core tension is between speed and readiness. Are there ways we could address both concerns?"
        }
      ],
      modelDialogue: {
        title: "Facilitación de reunión de planificación estratégica",
        context: "Un facilitador guía a un equipo ejecutivo a través de una decisión difícil",
        dialogue: [
          { speaker: "Facilitator", text: "Thank you all for being here. I'd like to open up the discussion on our Q4 priorities. Before we dive in, let's hear from everyone. Carlos, would you like to start?", translation: "Gracias a todos por estar aquí. Me gustaría abrir la discusión sobre nuestras prioridades del Q4. Antes de profundizar, escuchemos a todos. Carlos, ¿te gustaría empezar?" },
          { speaker: "Carlos", text: "I think we need to focus entirely on the new product. It's our future.", translation: "Creo que necesitamos enfocarnos completamente en el nuevo producto. Es nuestro futuro." },
          { speaker: "Facilitator", text: "Thanks, Carlos. That's one perspective. Ana, we haven't heard from you yet. What are your thoughts?", translation: "Gracias, Carlos. Esa es una perspectiva. Ana, aún no te hemos escuchado. ¿Cuáles son tus pensamientos?" },
          { speaker: "Ana", text: "I disagree. We can't abandon our core business while chasing something new.", translation: "No estoy de acuerdo. No podemos abandonar nuestro negocio central mientras perseguimos algo nuevo." },
          { speaker: "Carlos", text: "But if we don't innovate, we'll be irrelevant in five years!", translation: "¡Pero si no innovamos, seremos irrelevantes en cinco años!" },
          { speaker: "Facilitator", text: "I can see you both feel strongly about this, and both perspectives have merit. Let's take a step back: what's the core question we're trying to answer? Is it 'new vs. core,' or is there a way to do both?", translation: "Puedo ver que ambos sienten fuertemente sobre esto, y ambas perspectivas tienen mérito. Demos un paso atrás: ¿cuál es la pregunta central que intentamos responder? ¿Es 'nuevo vs. central', o hay una forma de hacer ambos?" },
          { speaker: "Luis", text: "Maybe we're framing this wrong. What if we allocate 70% to core and 30% to innovation?", translation: "Quizás estamos enmarcando esto mal. ¿Y si asignamos 70% al core y 30% a innovación?" },
          { speaker: "Facilitator", text: "Interesting. So, to summarize where we are: we have three positions—full focus on new, protect the core, and a hybrid approach. Are we in agreement that the hybrid approach deserves more exploration?", translation: "Interesante. Entonces, para resumir dónde estamos: tenemos tres posiciones—enfoque total en lo nuevo, proteger el core, y un enfoque híbrido. ¿Estamos de acuerdo en que el enfoque híbrido merece más exploración?" },
          { speaker: "All", text: "Yes, let's explore that.", translation: "Sí, exploremos eso." }
        ],
        keyPhrases: [
          { phrase: "I'd like to open up the discussion on...", usage: "Abriendo el tema" },
          { phrase: "We haven't heard from you yet", usage: "Incluyendo a alguien" },
          { phrase: "Both perspectives have merit", usage: "Validando posiciones opuestas" },
          { phrase: "Let's take a step back", usage: "Reevaluando el enfoque" },
          { phrase: "So, to summarize where we are...", usage: "Sintetizando" },
          { phrase: "Are we in agreement that...?", usage: "Verificando consenso" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "rising-falling", description: "Inviting tone for inclusion, falling for closure", descriptionEs: "Tono ascendente para incluir, descendente para cerrar", examples: [{ word: "What are YOUR thoughts?", transcription: "/ˈwɒt ɑː jɔː ˈθɔːts/" }, { word: "Are we in agreement?", transcription: "/ɑː wiː ɪn əˈɡriːmənt/" }], tips: "Rise invites response; fall signals summary or decision" }
        ],
        commonProblems: [
          { word: "consensus", wrong: "con-SEN-sus", correct: "/kənˈsen.səs/", tip: "kun-SEN-sus" },
          { word: "stakeholder", wrong: "stake-HOL-der", correct: "/ˈsteɪkˌhəʊl.dər/", tip: "STAYK-hohl-dur" },
          { word: "summarize", wrong: "su-MA-rize", correct: "/ˈsʌm.ə.raɪz/", tip: "SUM-uh-rize" }
        ],
        minimalPairs: [
          { word1: "summarize", word2: "summary", soundDifference: "Verb -ize /aɪz/ vs noun -ary /əri/" },
          { word1: "consensus", word2: "consent", soundDifference: "SEN-sus vs con-SENT" }
        ],
        intonationPatterns: [
          { pattern: "Warm, inviting tone when including others", example: "Maria↗, what are YOUR thoughts↘?", meaning: "Tono cálido e invitador" },
          { pattern: "Neutral, calming tone when redirecting", example: "Let's bring this back→ to the main point→.", meaning: "Tono neutral y calmante" },
          { pattern: "Upward intonation for consensus questions", example: "Are we in agreement↗?", meaning: "Subida para invitar confirmación" }
        ]
      },
      culturalNote: {
        title: "Facilitation Styles Across Cultures",
        titleEs: "Estilos de facilitación entre culturas",
        content: "El estilo de facilitación varía culturalmente. En culturas de bajo contexto (EE.UU., Alemania), la facilitación directa y estructurada es valorada. En culturas de alto contexto (Japón, América Latina), puede ser necesario más tiempo para construir consenso y las confrontaciones directas se evitan. 'Parking' un tema puede verse como postergación en algunas culturas. Adapta tu estilo: en algunos contextos, 'Let's discuss this privately' funciona mejor que abordar desacuerdos abiertamente.\n\nCultural taboos in conversation topics: En contextos anglófonos profesionales, evita como temas de conversación: salario propio o ajeno, edad, peso, religión, política partidista (especialmente en UK), y preguntas sobre planes de maternidad o estado civil en entrevistas. En EE.UU., la política puede surgir pero polariza. En UK, la política y la religión son 'no-go' en muchas situaciones. El dinero es particularmente delicado: preguntar 'How much do you earn?' es muy inapropiado. Cuando en duda, mantente en temas neutros: trabajo, viajes, cultura, deportes.",
        contentEs: "Adapta el estilo de facilitación al contexto cultural del grupo. Tabúes: salario, edad, peso, religión, política; en UK especialmente. Mantente en temas neutros.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "semi-formal"
      },
      consolidationQuiz: [
        {
          question: "¿Qué significa 'park an issue'?",
          options: ["Resolver inmediatamente", "Dejar para después sin descartar", "Ignorar completamente", "Votar sobre el tema"],
          correctAnswer: 1,
          explanation: "Park = aparcar/dejar de lado para retomar después"
        },
        {
          question: "'We haven't heard from Maria yet' se usa para:",
          options: ["Criticar a Maria", "Incluir a alguien que no ha participado", "Terminar la reunión", "Cambiar de tema"],
          correctAnswer: 1,
          explanation: "Es una forma de invitar participación a alguien silencioso"
        },
        {
          question: "Cuando una discusión se vuelve circular, debes:",
          options: ["Dejar que continúe", "Terminar la reunión", "Sintetizar y redirigir", "Culpar a los participantes"],
          correctAnswer: 2,
          explanation: "Resume los puntos y redirige hacia decisión o acción"
        },
        {
          question: "'Let's take a step back' significa:",
          options: ["Retirarse físicamente", "Reevaluar desde una perspectiva más amplia", "Rendirse", "Empezar de nuevo"],
          correctAnswer: 1,
          explanation: "Significa alejarse del detalle para ver el panorama general"
        },
        {
          question: "Un buen facilitador:",
          options: ["Habla más que nadie", "Impone su opinión", "Escucha más de lo que habla", "Evita el conflicto a toda costa"],
          correctAnswer: 2,
          explanation: "El facilitador guía pero habla menos que los participantes"
        },
        {
          question: "¿Cómo debes terminar una discusión?",
          options: ["Simplemente diciendo adiós", "Con action items claros: quién, qué, cuándo", "Sin conclusión para mantener flexibilidad", "Repitiendo todo lo discutido"],
          correctAnswer: 1,
          explanation: "Siempre cierra con acciones concretas y responsables"
        }
      ],
      guidedProduction: [
        {
          prompt: "Practica facilitar esta situación: Un equipo discute si trabajar remotamente o regresar a la oficina. Hay opiniones divididas.",
          sampleResponse: "Opening: 'Thank you all for joining. I'd like to open up the discussion on our return-to-office policy. Let's hear different perspectives. Sarah, would you like to start?'\n\nIncluding: 'Thanks, Sarah. Tom, we haven't heard from you yet. What's your experience been with remote work?'\n\nAddressing conflict: 'I can see we have different needs. Let's take a step back—what are we actually optimizing for? Productivity? Collaboration? Work-life balance?'\n\nSynthesizing: 'So, to summarize: some value the flexibility of remote work, others miss in-person collaboration. It sounds like a hybrid model might address both concerns.'\n\nClosing: 'Are we in agreement that we should explore a hybrid approach? Great. Action items: HR will draft a proposal by Friday, and we'll reconvene next Tuesday.'"
        },
        {
          prompt: "Escribe frases de facilitación para cada una de estas funciones: abrir, incluir, redirigir, sintetizar, cerrar",
          sampleResponse: "ABRIR:\n- 'I'd like to open up the discussion on...'\n- 'Let's begin by exploring...'\n\nINCLUIR:\n- 'We haven't heard from [name] yet.'\n- '[Name], what's your perspective?'\n\nREDIRIGIR:\n- 'Let's bring this back to the core issue.'\n- 'That's a valid point—let's park it for now and return to...'\n\nSINTETIZAR:\n- 'So, to summarize what we've discussed...'\n- 'It sounds like we have three main options...'\n\nCERRAR:\n- 'Are we in agreement that...?'\n- 'Let's confirm our action items: who is doing what by when?'"
        }
      ],
      connectionToPrevious: "Las cleft sentences nos ayudan a enfatizar puntos clave cuando facilitamos discusiones.",
      connectionToNext: "Las cláusulas de participio nos permitirán expresar ideas de forma más concisa al facilitar."
    },
    {
      id: 4,
      title: "Participle Clauses",
      titleEs: "Cláusulas de Participio",
      introduction: {
        title: "📝 Cláusulas de Participio",
        explanation: "Las cláusulas de participio (present/past) condensan información y crean un estilo más sofisticado, especialmente en escritura formal.",
        keyPoints: [
          "Participio presente (-ing): 'Walking down the street, I saw him'",
          "Participio pasado (-ed/irregular): 'Written in 1920, the novel is still relevant'",
          "Participio perfecto: 'Having finished the report, she left'",
          "Causas: 'Not knowing what to do, I called for help'",
          "Tiempo simultáneo: 'Holding his coffee, he answered the phone'"
        ],
        examples: [
          { english: "Having reviewed the data, we can now make a decision.", spanish: "Habiendo revisado los datos, ahora podemos tomar una decisión.", explanation: "Participio perfecto (acción anterior)" },
          { english: "Founded in 1995, the company has grown exponentially.", spanish: "Fundada en 1995, la empresa ha crecido exponencialmente.", explanation: "Participio pasado pasivo" },
          { english: "Not wanting to interrupt, I waited until the meeting ended.", spanish: "No queriendo interrumpir, esperé hasta que terminó la reunión.", explanation: "Participio negativo" }
        ],
        tips: [
          "💡 El sujeto del participio debe ser el mismo que el de la oración principal",
          "💡 'Having + past participle' indica que la acción ocurrió primero",
          "💡 Los participios pasivos (-ed) se refieren al sujeto de la oración"
        ],
        whenToUse: [
          "En informes ejecutivos: \"Having reviewed the data, we can now make a decision\"",
          "En presentaciones corporativas: \"Founded in 1995, the company has grown exponentially\"",
          "En escritura académica: \"Not wanting to interrupt, I waited until the meeting ended\"",
          "En propuestas formales: \"Having considered all options, we recommend...\""
        ],
        whenNotToUse: [
          "En conversación oral → suena literario: \"After we reviewed the data, we decided\" es más natural",
          "En emails breves → las participle clauses pueden ser densas; simplifica si hay prisa",
          "Con sujetos diferentes → \"Walking down the street, the building...\" (dangling): el edificio no camina"
        ]
      },
      objectives: ["Usar participios presentes y pasados", "Crear cláusulas reducidas", "Escribir con estilo más condensado"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-nominalization"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l11t4_e1", word: "-ing, [subject] [verb]", translation: "[gerundio], [sujeto] [verbo]", type: "expression", definition: "simultaneous action", definitionEs: "acción simultánea", example: "Walking to work, I had an idea.", exampleEs: "Caminando al trabajo, tuve una idea.", related: [], difficulty: 2 },
          { id: "l11t4_e2", word: "Having [past participle], [subject] [verb]", translation: "Habiendo [participio pasado], [sujeto] [verbo]", type: "expression", definition: "completed prior action", definitionEs: "acción previa completada", example: "Having finished dinner, we watched a movie.", exampleEs: "Habiendo terminado de cenar, vimos una película.", related: [], difficulty: 2 },
          { id: "l11t4_e3", word: "[Past participle], the [noun] [verb]", translation: "[Participio pasado], el/la [sustantivo] [verbo]", type: "expression", definition: "passive participle", definitionEs: "participio pasivo", example: "Built in 1900, the building is historic.", exampleEs: "Construido en 1900, el edificio es histórico.", related: [], difficulty: 2 },
          { id: "l11t4_e4", word: "Not knowing/wanting..., [subject] [verb]", translation: "No sabiendo/queriendo..., [sujeto] [verbo]", type: "expression", definition: "negative participle", definitionEs: "participio negativo", example: "Not wanting to wait, she left.", exampleEs: "No queriendo esperar, ella se fue.", related: [], difficulty: 2 },
          { id: "l11t4_e5", word: "Having been [past participle]...", translation: "Habiendo sido [participio pasado]...", type: "expression", definition: "passive perfect participle", definitionEs: "participio perfecto pasivo", example: "Having been warned, they were careful.", exampleEs: "Habiendo sido advertidos, fueron cuidadosos.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t4_cm1", wrong: "Dangling participle: 'Walking down the street, the building came into view.'", correct: "Walking down the street, I saw the building come into view.", explanation: "The participle's subject must be the same as the main clause's subject", explanationEs: "El sujeto del participio debe ser el mismo que el de la oración principal", category: "grammar" },
        { id: "l11t4_cm2", wrong: "Using present participle for prior action: 'Finishing the report, she went home.'", correct: "Having finished the report, she went home.", explanation: "Use 'having + past participle' when the action occurred first", explanationEs: "Usa 'having + past participle' cuando la acción ocurrió primero", category: "grammar" },
        { id: "l11t4_cm3", wrong: "Wrong tense: 'Having finished the report, she goes home.'", correct: "Having finished the report, she went home. (past context)", explanation: "Maintain tense consistency with the main clause", explanationEs: "Mantén consistencia temporal con la oración principal", category: "grammar" },
        { id: "l11t4_cm4", wrong: "'Being' overuse: 'Being tired, I went to bed.'", correct: "Tired, I went to bed. (adjective participle)", explanation: "You can often omit 'being' before adjectives", explanationEs: "A menudo puedes omitir 'being' antes de adjetivos", category: "grammar" },
        { id: "l11t4_cm5", wrong: "Confusing -ed/-ing: 'Surprising by the news, she...'", correct: "Surprised by the news, she... (she receives the surprise)", explanation: "-ed = receives the action; -ing = causes the action", explanationEs: "-ed = recibe la acción; -ing = causa la acción", category: "grammar" }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Convierte estas oraciones en cláusulas de participio",
          items: [
            { full: "Because I didn't know what to do, I called for help.", participle: "Not knowing what to do, I called for help.", type: "present negative" },
            { full: "After she had reviewed the data, she made her decision.", participle: "Having reviewed the data, she made her decision.", type: "perfect" },
            { full: "The report was written in 2020. It is still relevant today.", participle: "Written in 2020, the report is still relevant today.", type: "past passive" },
            { full: "While he was holding his coffee, he answered the phone.", participle: "Holding his coffee, he answered the phone.", type: "present simultaneous" },
            { full: "Because they had been warned about the risk, they proceeded carefully.", participle: "Having been warned about the risk, they proceeded carefully.", type: "perfect passive" },
            { full: "The company was founded in 1995. It has grown exponentially.", participle: "Founded in 1995, the company has grown exponentially.", type: "past passive" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los 'dangling participles' en estas oraciones",
          items: [
            { wrong: "Walking through the park, the flowers were beautiful.", correct: "Walking through the park, I noticed the beautiful flowers.", explanation: "Las flores no caminan; añadir sujeto que camina" },
            { wrong: "Having finished the presentation, the clients applauded.", correct: "Having finished the presentation, she received applause from the clients.", explanation: "Los clientes no terminaron la presentación" },
            { wrong: "Arriving late, the meeting had already started.", correct: "Arriving late, I found that the meeting had already started.", explanation: "La reunión no llegó tarde" }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa con la forma de participio correcta",
          items: [
            { sentence: "___ (complete) the training, employees can access the system.", answer: "Having completed", hint: "prior action" },
            { sentence: "___ (found) in 1850, the company is one of the oldest.", answer: "Founded", hint: "passive" },
            { sentence: "___ (not want) to disturb him, I sent an email instead.", answer: "Not wanting", hint: "negative present" },
            { sentence: "___ (consider) all options, we chose the safest approach.", answer: "Having considered", hint: "prior action" },
            { sentence: "___ (surround) by competitors, the company had to innovate.", answer: "Surrounded", hint: "passive" },
            { sentence: "___ (work) late, she missed the last train.", answer: "Working / Having worked", hint: "simultaneous or prior" }
          ]
        },
        {
          type: "formal-writing",
          instruction: "Reescribe este párrafo usando cláusulas de participio para hacerlo más conciso",
          original: "The CEO reviewed the quarterly results. After that, she called an emergency meeting. The team was alarmed by the news. They immediately began brainstorming solutions. The solutions were presented to the board. They were approved unanimously.",
          improved: "Having reviewed the quarterly results, the CEO called an emergency meeting. Alarmed by the news, the team immediately began brainstorming solutions. Presented to the board, the solutions were approved unanimously."
        }
      ],
      modelDialogue: {
        title: "Presentación ejecutiva con estilo formal",
        context: "Un ejecutivo usa cláusulas de participio para comunicar de forma concisa y sofisticada",
        dialogue: [
          { speaker: "Executive", text: "Having analyzed the market trends, we can confidently recommend expansion into Southeast Asia.", translation: "Habiendo analizado las tendencias del mercado, podemos recomendar con confianza la expansión hacia el Sudeste Asiático." },
          { speaker: "Executive", text: "Founded in 2010, our company has grown from a small startup to a market leader.", translation: "Fundada en 2010, nuestra empresa ha crecido de una pequeña startup a líder del mercado." },
          { speaker: "Board Member", text: "What about the risks? We've heard concerns from some stakeholders.", translation: "¿Qué hay de los riesgos? Hemos escuchado preocupaciones de algunas partes interesadas." },
          { speaker: "Executive", text: "Understood. Not wanting to overlook any concerns, we conducted extensive due diligence. Having been through similar expansions before, we know the challenges.", translation: "Entendido. No queriendo pasar por alto ninguna preocupación, realizamos una diligencia debida exhaustiva. Habiendo pasado por expansiones similares antes, conocemos los desafíos." },
          { speaker: "Executive", text: "Positioned correctly, this expansion could double our revenue. Delayed, we risk losing first-mover advantage.", translation: "Posicionada correctamente, esta expansión podría duplicar nuestros ingresos. Retrasada, arriesgamos perder la ventaja del primer movedor." },
          { speaker: "Board Member", text: "Convinced by your analysis, I support moving forward.", translation: "Convencido por tu análisis, apoyo avanzar." }
        ],
        keyPhrases: [
          { phrase: "Having analyzed...", usage: "Acción previa como base para conclusión" },
          { phrase: "Founded in [year]...", usage: "Background pasivo de la empresa" },
          { phrase: "Not wanting to overlook...", usage: "Participio negativo explicando motivación" },
          { phrase: "Having been through...", usage: "Experiencia previa pasiva" },
          { phrase: "Positioned correctly...", usage: "Condición expresada con participio" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "juncture", description: "Pause boundary between participle clause and main clause", descriptionEs: "Pausa entre cláusula de participio y oración principal", examples: [{ word: "Having reviewed the data,", transcription: "/ˈhævɪŋ rɪˈvjuːd ðə ˈdeɪtə/" }, { word: "we can proceed", transcription: "/wiː kən prəˈsiːd/" }], tips: "Brief pause after comma prevents run-on; maintains formal rhythm" }
        ],
        commonProblems: [
          { word: "founded", wrong: "FOUND-ed", correct: "/ˈfaʊn.dɪd/", tip: "FOWN-did, not two syllables with ed" },
          { word: "notwithstanding", wrong: "not-with-STAND-ing", correct: "/ˌnɒtwɪθˈstændɪŋ/", tip: "not-with-STAN-ding, stress on stand" }
        ],
        minimalPairs: [
          { word1: "Having finished", word2: "Having been finished", soundDifference: "Active perfect vs passive perfect participle" },
          { word1: "Founded in 1990", word2: "Found in 1990", soundDifference: "Founded /ˈfaʊndɪd/ vs found /faʊnd/" }
        ],
        intonationPatterns: [
          { pattern: "Pause after participle clause", example: "Having reviewed the data, [pause] we can proceed.", meaning: "Pausa después de la cláusula de participio" },
          { pattern: "Slight rise at end of participle clause", example: "Founded in 1990↗, the company↘...", meaning: "Ligera subida antes de continuar" },
          { pattern: "Emphasis on key word in participle", example: "Having CAREFULLY reviewed...", meaning: "Énfasis en modificadores importantes" }
        ]
      },
      culturalNote: {
        title: "Participle Clauses in Professional Writing",
        titleEs: "Cláusulas de participio en escritura profesional",
        content: "Las cláusulas de participio son características del inglés formal y académico. Son muy comunes en: informes ejecutivos ('Having reviewed the data...'), escritura legal ('Notwithstanding the above...'), y periodismo de calidad. Su uso demuestra dominio del idioma y crea un estilo más conciso. Sin embargo, en conversación casual, pueden sonar artificiales. Resérvalas para contextos formales.",
        contentEs: "Reserva las cláusulas de participio para escritura y discurso formal.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "formal"
      },
      consolidationQuiz: [
        {
          question: "'Having finished the report, she went home.' El participio indica:",
          options: ["Acción simultánea", "Acción posterior", "Acción anterior a 'went home'", "Una condición"],
          correctAnswer: 2,
          explanation: "Having + past participle = la acción ocurrió primero"
        },
        {
          question: "¿Qué es un 'dangling participle'?",
          options: ["Un participio en forma negativa", "Cuando el sujeto del participio no coincide con el de la oración", "Un participio al final de la oración", "Un participio pasivo"],
          correctAnswer: 1,
          explanation: "Dangling = el participio 'cuelga' sin sujeto lógico"
        },
        {
          question: "'___ by the news, she called her family.' ¿Qué forma es correcta?",
          options: ["Shocking", "Shocked", "Having shocking", "Being shock"],
          correctAnswer: 1,
          explanation: "Ella recibe el shock, por lo tanto: shocked (pasivo)"
        },
        {
          question: "'Founded in 1900, the building...' El participio es:",
          options: ["Activo presente", "Pasivo presente", "Pasivo pasado", "Perfecto"],
          correctAnswer: 2,
          explanation: "Founded = participio pasado pasivo (el edificio fue fundado)"
        },
        {
          question: "'Not wanting to disturb him, I...' expresa:",
          options: ["Una acción completada", "Una razón/motivación", "Un resultado", "Una condición futura"],
          correctAnswer: 1,
          explanation: "El participio negativo explica la motivación de la acción principal"
        },
        {
          question: "¿Cuándo debes usar 'having + past participle'?",
          options: ["Para acciones simultáneas", "Para acciones que ocurrieron primero", "Para estados permanentes", "Para predicciones"],
          correctAnswer: 1,
          explanation: "Having + pp = acción completada antes de la oración principal"
        }
      ],
      guidedProduction: [
        {
          prompt: "Reescribe este correo usando al menos 4 cláusulas de participio para hacerlo más conciso y profesional",
          original: "Dear Team,\n\nI have reviewed the quarterly results. Based on this, I would like to schedule a meeting. The meeting will be held on Friday. It was requested by the board. Because I don't want to delay, I'm sending this now. Please confirm your availability.\n\nBest regards",
          improved: "Dear Team,\n\nHaving reviewed the quarterly results, I would like to schedule a meeting for Friday. Requested by the board, this meeting is time-sensitive. Not wanting to delay, I'm reaching out now. Please confirm your availability.\n\nBest regards"
        },
        {
          prompt: "Escribe un párrafo sobre tu empresa o un proyecto usando al menos 3 tipos diferentes de cláusulas de participio",
          sampleResponse: "Founded in 2015, our company has grown to serve clients in 20 countries. Having started with just three employees, we now have a team of over 200 professionals. Not wanting to compromise on quality, we've maintained rigorous standards even as we've scaled. Recognized as an industry leader, we continue to innovate while staying true to our founding mission. Having been through multiple economic challenges, we've proven our resilience and adaptability."
        }
      ],
      connectionToPrevious: "Las cláusulas de participio nos permiten ser más concisos al facilitar discusiones.",
      connectionToNext: "Ahora aprenderemos a defender y desafiar ideas usando argumentación sofisticada."
    },
    {
      id: 5,
      title: "Defending and Challenging Ideas",
      titleEs: "Defendiendo y Desafiando Ideas",
      introduction: {
        title: "⚔️ Defender y Desafiar Ideas",
        explanation: "En debates intelectuales y reuniones, necesitas poder defender tus posiciones y cuestionar otras de manera respetuosa pero firme.",
        keyPoints: [
          "Defender: 'I stand by my position because...', 'The evidence supports...'",
          "Desafiar: 'I'm not entirely convinced because...', 'Have you considered...?'",
          "Conceder parcialmente: 'While that may be true, I would argue that...'",
          "Pedir evidencia: 'What evidence is there for...?', 'Based on what?'",
          "Mantener posición: 'Be that as it may, I maintain that...'"
        ],
        examples: [
          { english: "I appreciate your perspective, but I'm not entirely convinced. What evidence supports that claim?", spanish: "Aprecio tu perspectiva, pero no estoy del todo convencido. ¿Qué evidencia apoya esa afirmación?", explanation: "Desafío respetuoso + pedido de evidencia" },
          { english: "While you make a valid point, I would argue that the long-term benefits outweigh the short-term costs.", spanish: "Aunque tienes un punto válido, yo argumentaría que los beneficios a largo plazo superan los costos a corto plazo.", explanation: "Concesión + contraargumento" },
          { english: "Be that as it may, I stand by my original assessment.", spanish: "Sea como sea, mantengo mi evaluación original.", explanation: "Manteniendo posición" }
        ],
        tips: [
          "💡 'I'm not convinced' es más diplomático que 'You're wrong'",
          "💡 Siempre pide evidencia, nunca ataques a la persona",
          "💡 Reconoce puntos válidos antes de contraargumentar"
        ],
        whenToUse: [
          "En reuniones de board: \"I appreciate your perspective, but I'm not entirely convinced. What evidence supports that claim?\"",
          "En debates formales: \"While you make a valid point, I would argue that the long-term benefits outweigh the short-term costs\"",
          "En revisiones de propuestas: \"Be that as it may, I stand by my original assessment\"",
          "En comités de evaluación: \"Have you considered...?\" en vez de \"You're wrong\""
        ],
        whenNotToUse: [
          "En desacuerdos con amigos → \"Be that as it may\" suena distante: usa \"I see it differently\"",
          "Cuando atacas a la persona → \"You're wrong\" destruye relación; enfócate en el argumento",
          "Sin evidencia propia → pedir evidencia al otro sin tener la tuya puede parecer evasivo"
        ]
      },
      objectives: ["Defender posiciones con evidencia", "Desafiar ideas respetuosamente", "Manejar desacuerdos profesionalmente"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-advanced-linking-devices"],
      vocabulary: {
        nouns: [
          { id: "l11t5_n1", word: "assertion", translation: "afirmación", type: "noun", definition: "confident statement", definitionEs: "declaración confiada", example: "Your assertion lacks evidence.", exampleEs: "Tu afirmación carece de evidencia.", related: ["assert"], difficulty: 2 },
          { id: "l11t5_n2", word: "counterargument", translation: "contraargumento", type: "noun", definition: "opposing argument", definitionEs: "argumento opuesto", example: "Do you have a counterargument?", exampleEs: "¿Tienes un contraargumento?", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l11t5_v1", word: "maintain", translation: "mantener/sostener", type: "verb", definition: "to continue to hold", definitionEs: "continuar sosteniendo", example: "I maintain that this is correct.", exampleEs: "Mantengo que esto es correcto.", related: [], difficulty: 2 },
          { id: "l11t5_v2", word: "concede", translation: "conceder", type: "verb", definition: "to admit something is true", definitionEs: "admitir que algo es cierto", example: "I'll concede that point.", exampleEs: "Concederé ese punto.", related: [], difficulty: 2 },
          { id: "l11t5_v3", word: "challenge", translation: "desafiar/cuestionar", type: "verb", definition: "to question validity", definitionEs: "cuestionar validez", example: "I'd like to challenge that assumption.", exampleEs: "Me gustaría cuestionar esa suposición.", related: [], difficulty: 1 },
        ],
        adjectives: [],
        expressions: [
          { id: "l11t5_e1", word: "I stand by my position", translation: "Mantengo mi posición", type: "expression", definition: "defending stance", definitionEs: "defendiendo postura", example: "Despite criticism, I stand by my position.", exampleEs: "A pesar de las críticas, mantengo mi posición.", related: [], difficulty: 2 },
          { id: "l11t5_e2", word: "I'm not entirely convinced", translation: "No estoy del todo convencido", type: "expression", definition: "polite disagreement", definitionEs: "desacuerdo cortés", example: "I'm not entirely convinced by that argument.", exampleEs: "No estoy del todo convencido por ese argumento.", related: [], difficulty: 1 },
          { id: "l11t5_e3", word: "While that may be true...", translation: "Aunque eso puede ser cierto...", type: "expression", definition: "partial concession", definitionEs: "concesión parcial", example: "While that may be true, the risks are significant.", exampleEs: "Aunque eso puede ser cierto, los riesgos son significativos.", related: [], difficulty: 1 },
          { id: "l11t5_e4", word: "Be that as it may", translation: "Sea como sea", type: "expression", definition: "acknowledging but dismissing", definitionEs: "reconociendo pero descartando", example: "Be that as it may, we need to proceed.", exampleEs: "Sea como sea, necesitamos proceder.", related: [], difficulty: 2 },
          { id: "l11t5_e5", word: "What evidence is there for...?", translation: "¿Qué evidencia hay de...?", type: "expression", definition: "requesting proof", definitionEs: "pidiendo prueba", example: "What evidence is there for that claim?", exampleEs: "¿Qué evidencia hay de esa afirmación?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t5_cm1", wrong: "'You're wrong' (too direct/aggressive)", correct: "'I see it differently' or 'I'm not entirely convinced'", explanation: "Attack the idea, not the person; maintain respect", explanationEs: "Ataca la idea, no a la persona; mantén respeto", category: "usage" },
        { id: "l11t5_cm2", wrong: "Defending without evidence: 'Because I said so'", correct: "'The data supports this because...', 'Research shows that...'", explanation: "Always back your position with evidence", explanationEs: "Siempre respalda tu posición con evidencia", category: "usage" },
        { id: "l11t5_cm3", wrong: "Never conceding any point (appearing inflexible)", correct: "'You raise a valid point. However...', 'I'll concede that, but...'", explanation: "Conceding valid points makes you seem reasonable", explanationEs: "Conceder puntos válidos te hace parecer razonable", category: "usage" },
        { id: "l11t5_cm4", wrong: "Using emotional language: 'That's ridiculous'", correct: "'I find that argument unconvincing because...'", explanation: "Keep the tone professional and logic-based", explanationEs: "Mantén el tono profesional y basado en lógica", category: "usage" },
        { id: "l11t5_cm5", wrong: "Interrupting to challenge (poor timing)", correct: "Wait for natural pause, then: 'If I may, I'd like to offer a different perspective...'", explanation: "Timing and courtesy are as important as content", explanationEs: "El timing y la cortesía son tan importantes como el contenido", category: "usage" }
      ],
      exercises: [
        {
          type: "reframing",
          instruction: "Convierte estos desafíos agresivos en versiones diplomáticas",
          items: [
            { aggressive: "That's completely wrong.", diplomatic: "I see it somewhat differently. Have you considered...?" },
            { aggressive: "Where's your proof?", diplomatic: "That's an interesting assertion. What evidence supports that conclusion?" },
            { aggressive: "That will never work.", diplomatic: "I have some concerns about feasibility. Specifically, I'm wondering about..." },
            { aggressive: "You don't know what you're talking about.", diplomatic: "I'd like to explore that further. Based on my experience, I've seen different results." },
            { aggressive: "That's a terrible idea.", diplomatic: "I appreciate the thinking behind that. However, I'm not entirely convinced because..." }
          ]
        },
        {
          type: "response-building",
          instruction: "Construye una respuesta que: conceda un punto, luego desafíe otro",
          scenarios: [
            {
              claim: "We should cut the marketing budget because digital ads are enough.",
              response: "While I agree that digital marketing is increasingly important, I would argue that traditional channels still reach demographics that digital doesn't. What evidence do we have about our target audience's media consumption?"
            },
            {
              claim: "We need to hire more people immediately to meet demand.",
              response: "You make a valid point about the demand increase. However, I maintain that we should first optimize current processes. Have you considered what our productivity gains would be from automation?"
            },
            {
              claim: "Remote work decreases productivity.",
              response: "I'll concede that remote work presents collaboration challenges. Be that as it may, our data shows productivity has actually increased 15%. What metrics are you basing your assessment on?"
            }
          ]
        },
        {
          type: "evidence-request",
          instruction: "Practica pedir evidencia de manera profesional",
          claims: [
            {
              claim: "Everyone knows that this approach doesn't work.",
              evidenceRequest: "That's a strong assertion. I'd be curious to see what evidence supports that conclusion. Are there specific cases you're referring to?"
            },
            {
              claim: "Our competitors are all doing this.",
              evidenceRequest: "Interesting. What evidence is there for that? Have we done a comprehensive competitive analysis?"
            },
            {
              claim: "Customers don't want this feature.",
              evidenceRequest: "Based on what data? Have we conducted user research, or is this assumption based on something else?"
            }
          ]
        },
        {
          type: "debate-practice",
          instruction: "Practica un mini-debate: defiende tu posición, luego responde a un contraargumento",
          topic: "Should companies mandate return to office?",
          yourPosition: "(Choose: support or oppose)",
          defense: "State your position with 2-3 evidence points",
          counterargument: "The other side says: 'But collaboration and culture suffer with remote work.'",
          response: "Use: concession + challenge + evidence request",
          sampleResponse: "I appreciate that concern, and I'll concede that spontaneous collaboration can be more difficult remotely. However, I maintain that intentional collaboration through scheduled sessions can be equally effective. What evidence is there that our specific culture has suffered? Our employee engagement scores have actually improved."
        }
      ],
      modelDialogue: {
        title: "Debate en reunión de estrategia",
        context: "Dos ejecutivos debaten una decisión estratégica de manera profesional",
        dialogue: [
          { speaker: "Alex", text: "I believe we should acquire CompanyX. The synergies are clear, and it would double our market share.", translation: "Creo que deberíamos adquirir CompanyX. Las sinergias son claras, y duplicaría nuestra cuota de mercado." },
          { speaker: "Jordan", text: "I appreciate the strategic thinking, but I'm not entirely convinced. What evidence is there that similar acquisitions have delivered the promised synergies?", translation: "Aprecio el pensamiento estratégico, pero no estoy del todo convencido. ¿Qué evidencia hay de que adquisiciones similares hayan entregado las sinergias prometidas?" },
          { speaker: "Alex", text: "Fair question. Research shows that 60% of strategic acquisitions in our industry have met their targets. I stand by my position that this is a calculated risk worth taking.", translation: "Pregunta justa. La investigación muestra que el 60% de las adquisiciones estratégicas en nuestra industria han cumplido sus objetivos. Mantengo mi posición de que este es un riesgo calculado que vale la pena tomar." },
          { speaker: "Jordan", text: "While that may be true, I would argue that 40% failure rate is significant. Have you considered the integration costs?", translation: "Aunque eso puede ser cierto, yo argumentaría que una tasa de fallo del 40% es significativa. ¿Has considerado los costos de integración?" },
          { speaker: "Alex", text: "I'll concede that integration is a challenge. However, the opportunity cost of not acting concerns me more.", translation: "Concederé que la integración es un desafío. Sin embargo, me preocupa más el costo de oportunidad de no actuar." },
          { speaker: "Jordan", text: "Be that as it may, I maintain that we should explore partnership options first before committing to acquisition.", translation: "Sea como sea, mantengo que deberíamos explorar opciones de asociación primero antes de comprometernos con la adquisición." },
          { speaker: "Alex", text: "You raise a valid point. Perhaps we could present both options to the board?", translation: "Planteas un punto válido. ¿Quizás podríamos presentar ambas opciones a la junta?" }
        ],
        keyPhrases: [
          { phrase: "I'm not entirely convinced", usage: "Desafío respetuoso" },
          { phrase: "What evidence is there that...?", usage: "Pidiendo pruebas" },
          { phrase: "I stand by my position", usage: "Defendiendo firmemente" },
          { phrase: "While that may be true, I would argue...", usage: "Concesión + contraargumento" },
          { phrase: "I'll concede that... However...", usage: "Concesión parcial" },
          { phrase: "Be that as it may", usage: "Reconociendo pero manteniendo posición" },
          { phrase: "You raise a valid point", usage: "Reconociendo mérito en el otro" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "hedging intonation", description: "Rising tone softens disagreement; falling asserts position", descriptionEs: "Tono ascendente suaviza desacuerdo; descendente afirma posición", examples: [{ word: "I'm not entirely convinced", transcription: "/aɪm nɒt ɪnˈtaɪəli kənˈvɪnst/" }, { word: "I stand by my position", transcription: "/aɪ stænd baɪ maɪ pəˈzɪʃən/" }], tips: "C2: subtle tone shift distinguishes polite challenge from aggressive attack" }
        ],
        commonProblems: [
          { word: "assertion", wrong: "a-SER-tion", correct: "/əˈsɜː.ʃən/", tip: "uh-SUR-shun" },
          { word: "concede", wrong: "con-SEED", correct: "/kənˈsiːd/", tip: "kun-SEED" },
          { word: "evidence", wrong: "e-vi-DEN-ce", correct: "/ˈev.ɪ.dəns/", tip: "EV-ih-dunce" }
        ],
        minimalPairs: [
          { word1: "concede", word2: "conceit", soundDifference: "con-SEED vs con-SEAT" },
          { word1: "assertion", word2: "insertion", soundDifference: "uh-SUR-shun vs in-SUR-shun" }
        ],
        intonationPatterns: [
          { pattern: "Softening with rising tone", example: "I'm not entirely convinced↗?", meaning: "Subida suave hace el desafío menos confrontacional" },
          { pattern: "Firm but respectful on 'I stand by'", example: "I stand by→ my position↘.", meaning: "Tono firme pero no agresivo" },
          { pattern: "Warm tone on concessions", example: "You raise a VALID↗ point.", meaning: "Énfasis cálido muestra respeto genuino" }
        ]
      },
      culturalNote: {
        title: "Debate Styles Across Cultures",
        titleEs: "Estilos de debate entre culturas",
        content: "Las culturas varían en cómo se desafían ideas. En culturas anglosajonas de negocios, el debate directo (pero respetuoso) es valorado y esperado. En culturas asiáticas y algunas latinoamericanas, el desacuerdo directo puede percibirse como falta de respeto; se prefieren formas indirectas. En Alemania y Países Bajos, la franqueza se valora altamente. Adapta tu enfoque: 'I'm not entirely convinced' funciona universalmente; 'You're wrong' casi nunca es apropiado.",
        contentEs: "El nivel de directness aceptable varía según la cultura.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "semi-formal to formal"
      },
      consolidationQuiz: [
        {
          question: "'I'm not entirely convinced' es más apropiado que 'You're wrong' porque:",
          options: ["Es más largo", "Ataca la idea, no a la persona", "Es menos claro", "Evita el tema"],
          correctAnswer: 1,
          explanation: "Desafía la idea respetuosamente sin atacar a la persona"
        },
        {
          question: "'While that may be true, I would argue...' combina:",
          options: ["Acuerdo total + cambio de tema", "Concesión parcial + contraargumento", "Desacuerdo total + insulto", "Pregunta + respuesta"],
          correctAnswer: 1,
          explanation: "Reconoce validez parcial y luego presenta otro punto de vista"
        },
        {
          question: "'Be that as it may' significa:",
          options: ["Estoy completamente de acuerdo", "No entiendo lo que dices", "Reconozco eso, pero mantengo mi posición", "Cambiemos de tema"],
          correctAnswer: 2,
          explanation: "Reconoce el punto del otro pero no cambia tu posición"
        },
        {
          question: "¿Cuándo debes conceder un punto?",
          options: ["Nunca - muestra debilidad", "Cuando el otro tiene razón parcial o totalmente", "Solo cuando tu jefe lo dice", "Siempre - evita conflicto"],
          correctAnswer: 1,
          explanation: "Conceder puntos válidos te hace parecer razonable y honesto"
        },
        {
          question: "'What evidence is there for that claim?' pide:",
          options: ["Una disculpa", "Pruebas o datos que respalden la afirmación", "Que cambie de tema", "Que repita lo dicho"],
          correctAnswer: 1,
          explanation: "Es una forma profesional de pedir evidencia"
        },
        {
          question: "'I stand by my position' expresa:",
          options: ["Que estás confundido", "Que estás dispuesto a cambiar", "Que mantienes tu opinión firmemente", "Que necesitas más tiempo"],
          correctAnswer: 2,
          explanation: "Indica que después de considerar otros puntos, mantienes tu posición"
        }
      ],
      guidedProduction: [
        {
          prompt: "Practica un debate escrito: Alguien dice 'AI will replace all jobs within 10 years.' Defiende o desafía esta posición usando las frases aprendidas.",
          sampleResponse: "I appreciate the thought-provoking assertion, but I'm not entirely convinced. What evidence is there that AI can fully replace jobs requiring creativity, empathy, or complex judgment?\n\nWhile I'll concede that AI will automate many routine tasks—and that's already happening—I would argue that it will transform jobs rather than eliminate them entirely. History shows that technological revolutions create new types of work even as they displace old ones.\n\nBe that as it may, I maintain that the pace of change matters. Ten years seems overly aggressive. Perhaps we could agree that significant disruption is coming, while disagreeing on the timeline and totality?\n\nI stand by my position that human skills will remain essential, but I'm open to evidence that suggests otherwise."
        },
        {
          prompt: "Escribe un intercambio donde defiendes tu posición, recibes un contraargumento, y respondes apropiadamente",
          sampleResponse: "Me: I believe remote work should be our default, with office days optional.\n\nColleague: But our culture and collaboration have suffered. People don't feel connected anymore.\n\nMe: You raise a valid point, and I'll concede that maintaining culture remotely requires more intentional effort. However, I would argue that the benefits—reduced commute, better work-life balance, access to global talent—outweigh these challenges.\n\nWhat evidence is there that our collaboration has actually decreased? Our project completion rates have improved 20%. Be that as it may, perhaps we could explore a hybrid approach that addresses your concerns while preserving flexibility?"
        }
      ],
      connectionToPrevious: "Las cláusulas de participio nos permiten expresar argumentos de forma más concisa al debatir.",
      connectionToNext: "El vocabulario financiero nos dará herramientas para respaldar argumentos con datos económicos."
    },
    {
      id: 6,
      title: "Financial Vocabulary",
      titleEs: "Vocabulario Financiero",
      introduction: {
        title: "💰 Vocabulario Financiero",
        explanation: "El lenguaje financiero es esencial en el mundo de los negocios. Este vocabulario te permitirá participar en discusiones sobre finanzas corporativas.",
        keyPoints: [
          "Rentabilidad: 'ROI', 'profit margin', 'bottom line', 'EBITDA'",
          "Flujo de caja: 'cash flow', 'liquidity', 'working capital'",
          "Inversión: 'capital expenditure', 'depreciation', 'amortization'",
          "Deuda: 'leverage', 'debt-to-equity ratio', 'liabilities'",
          "Valoración: 'valuation', 'market cap', 'P/E ratio'"
        ],
        examples: [
          { english: "Our ROI on this project exceeded 150%, which significantly improved our bottom line.", spanish: "Nuestro ROI en este proyecto superó el 150%, lo que mejoró significativamente nuestro resultado final.", explanation: "Rentabilidad" },
          { english: "We need to improve our cash flow to meet our short-term liabilities.", spanish: "Necesitamos mejorar nuestro flujo de caja para cumplir con nuestras obligaciones a corto plazo.", explanation: "Liquidez" },
          { english: "The company is highly leveraged, with a debt-to-equity ratio of 3:1.", spanish: "La empresa está muy apalancada, con una relación deuda-capital de 3:1.", explanation: "Apalancamiento" }
        ],
        tips: [
          "💡 'Bottom line' puede referirse a ganancias o al punto final ('the bottom line is...')",
          "💡 ROI = Return on Investment (Retorno sobre la Inversión)",
          "💡 EBITDA = Earnings Before Interest, Taxes, Depreciation, Amortization"
        ],
        whenToUse: [
          "En presentaciones a inversores: \"Our ROI on this project exceeded 150%, which significantly improved our bottom line\"",
          "En reuniones de finanzas: \"We need to improve our cash flow to meet our short-term liabilities\"",
          "En due diligence: \"The company is highly leveraged, with a debt-to-equity ratio of 3:1\"",
          "En board meetings: \"The bottom line is we need to address our liquidity position\""
        ],
        whenNotToUse: [
          "Con audiencias no financieras → explica ROI, EBITDA; evita jerga sin contexto",
          "En conversaciones informales → \"we're in the red\" puede confundir; \"losing money\" es más claro",
          "Confundiendo términos → 'revenue' ≠ 'profit'; 'benefits' ≠ ganancias monetarias"
        ]
      },
      objectives: ["Dominar terminología financiera", "Discutir métricas de rendimiento", "Participar en conversaciones financieras"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c1-nominalization", "c1-complex-noun-phrases"],
      vocabulary: {
        nouns: [
          { id: "l11t6_n1", word: "ROI (Return on Investment)", translation: "retorno sobre la inversión", type: "noun", definition: "profit relative to cost", definitionEs: "ganancia relativa al costo", example: "What's the projected ROI?", exampleEs: "¿Cuál es el ROI proyectado?", related: [], difficulty: 2 },
          { id: "l11t6_n2", word: "profit margin", translation: "margen de beneficio", type: "noun", definition: "percentage of profit", definitionEs: "porcentaje de ganancia", example: "Our profit margin is 15%.", exampleEs: "Nuestro margen de beneficio es 15%.", related: [], difficulty: 1 },
          { id: "l11t6_n3", word: "cash flow", translation: "flujo de caja", type: "noun", definition: "money moving in and out", definitionEs: "dinero entrando y saliendo", example: "Cash flow is positive.", exampleEs: "El flujo de caja es positivo.", related: [], difficulty: 1 },
          { id: "l11t6_n4", word: "liability", translation: "pasivo/obligación", type: "noun", definition: "debt or obligation", definitionEs: "deuda u obligación", example: "We need to reduce liabilities.", exampleEs: "Necesitamos reducir pasivos.", related: ["liable"], difficulty: 2 },
          { id: "l11t6_n5", word: "asset", translation: "activo", type: "noun", definition: "valuable resource", definitionEs: "recurso valioso", example: "This property is a valuable asset.", exampleEs: "Esta propiedad es un activo valioso.", related: [], difficulty: 1 },
          { id: "l11t6_n6", word: "equity", translation: "patrimonio/capital", type: "noun", definition: "ownership value", definitionEs: "valor de propiedad", example: "Shareholders' equity increased.", exampleEs: "El patrimonio de los accionistas aumentó.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l11t6_v1", word: "leverage", translation: "apalancar", type: "verb", definition: "to use debt to invest", definitionEs: "usar deuda para invertir", example: "We leveraged our assets.", exampleEs: "Apalancamos nuestros activos.", related: [], difficulty: 2 },
          { id: "l11t6_v2", word: "depreciate", translation: "depreciar", type: "verb", definition: "to decrease in value", definitionEs: "disminuir en valor", example: "Equipment depreciates over time.", exampleEs: "El equipo se deprecia con el tiempo.", related: ["depreciation"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l11t6_a1", word: "liquid", translation: "líquido", type: "adjective", definition: "easily converted to cash", definitionEs: "fácilmente convertible a efectivo", example: "Are our assets liquid?", exampleEs: "¿Son líquidos nuestros activos?", related: ["liquidity"], difficulty: 2 },
          { id: "l11t6_a2", word: "solvent", translation: "solvente", type: "adjective", definition: "able to pay debts", definitionEs: "capaz de pagar deudas", example: "The company remains solvent.", exampleEs: "La empresa permanece solvente.", related: ["solvency"], difficulty: 2 },
        ],
        expressions: [
          { id: "l11t6_e1", word: "bottom line", translation: "resultado final/lo fundamental", type: "expression", definition: "net profit or main point", definitionEs: "ganancia neta o punto principal", example: "The bottom line is we made a profit.", exampleEs: "Lo fundamental es que obtuvimos una ganancia.", related: [], difficulty: 1 },
          { id: "l11t6_e2", word: "in the black / in the red", translation: "en números negros / rojos", type: "expression", definition: "profitable / losing money", definitionEs: "rentable / perdiendo dinero", example: "We're finally in the black.", exampleEs: "Finalmente estamos en números negros.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t6_cm1", wrong: "Confusing 'revenue' and 'profit'", correct: "Revenue = total income; Profit = revenue minus costs", explanation: "Revenue is total income; profit is what remains after costs", explanationEs: "Revenue es ingreso total; profit es lo que queda después de costos", category: "vocabulary" },
        { id: "l11t6_cm2", wrong: "Using 'benefits' for 'profits'", correct: "The company made a profit (not 'made benefits')", explanation: "In financial English, 'benefits' doesn't mean monetary gains", explanationEs: "En inglés financiero, 'benefits' no significa ganancias monetarias", category: "vocabulary" },
        { id: "l11t6_cm3", wrong: "'In red' instead of 'in the red'", correct: "We're in THE red / in THE black", explanation: "Always use 'the' in these expressions", explanationEs: "Siempre con 'the' en estas expresiones", category: "grammar" },
        { id: "l11t6_cm4", wrong: "Using 'rentable' - false friend", correct: "Profitable (not 'rentable' which means 'available for rent' in English)", explanation: "Rentable in English = can be rented; profitable = financially viable", explanationEs: "Rentable en inglés = se puede alquilar; profitable = rentable", category: "false-friend" },
        { id: "l11t6_cm5", wrong: "Confusing 'assets' and 'actives'", correct: "Assets (not 'actives') - 'actives' is not a financial term", explanation: "Assets = assets; 'actives' doesn't exist in financial terminology", explanationEs: "Assets = activos; 'actives' no existe en terminología financiera", category: "vocabulary" }
      ],
      exercises: [
        {
          type: "term-matching",
          instruction: "Empareja cada término con su definición correcta",
          items: [
            { term: "ROI", definition: "Profit relative to the amount invested" },
            { term: "Cash flow", definition: "Money moving in and out of business" },
            { term: "Liability", definition: "Debt or financial obligation" },
            { term: "Equity", definition: "Ownership value in a company" },
            { term: "Bottom line", definition: "Net profit or final result" },
            { term: "Leverage", definition: "Using borrowed money to invest" },
            { term: "Depreciation", definition: "Decrease in asset value over time" },
            { term: "Liquidity", definition: "Ability to convert to cash quickly" }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa las oraciones con el término financiero correcto",
          items: [
            { sentence: "Our ___ increased 20% this quarter, but our ___ only grew 5% due to rising costs.", answer: "revenue, profit", hint: "total income vs. what remains after costs" },
            { sentence: "The company is highly ___, with a debt-to-equity ratio of 4:1.", answer: "leveraged", hint: "using debt to invest" },
            { sentence: "We need to improve our ___ to pay suppliers on time.", answer: "cash flow / liquidity", hint: "available money" },
            { sentence: "After years of losses, we're finally in the ___.", answer: "black", hint: "profitable" },
            { sentence: "The building is a valuable ___ on our balance sheet.", answer: "asset", hint: "valuable resource owned" },
            { sentence: "Our ___ on this investment was 150%.", answer: "ROI", hint: "return on investment" }
          ]
        },
        {
          type: "interpretation",
          instruction: "Interpreta lo que significan estas declaraciones financieras",
          items: [
            { statement: "Our profit margin is 15%.", interpretation: "For every $100 of revenue, $15 is profit after all costs." },
            { statement: "The company has strong liquidity.", interpretation: "The company can easily pay short-term obligations; assets are easily convertible to cash." },
            { statement: "They're operating at a loss but cash flow is positive.", interpretation: "Accounting shows losses, but actual cash coming in exceeds cash going out (possibly due to depreciation adjustments)." },
            { statement: "The bottom line is that we need to cut costs.", interpretation: "The essential conclusion/most important point is that costs must be reduced." }
          ]
        },
        {
          type: "scenario-analysis",
          instruction: "Analiza esta situación financiera usando el vocabulario correcto",
          scenario: "Company X had $10 million in revenue last year. Their costs were $8 million. They have $2 million in the bank, $5 million in property, and owe $3 million to creditors. They used a $1 million loan to buy new equipment.",
          questions: [
            { question: "What was their profit?", answer: "$2 million ($10M revenue - $8M costs)" },
            { question: "What are their assets worth (approximately)?", answer: "$7 million ($2M cash + $5M property)" },
            { question: "What are their liabilities?", answer: "$3 million (debt owed to creditors)" },
            { question: "What was their profit margin?", answer: "20% ($2M profit / $10M revenue)" },
            { question: "Did they use leverage?", answer: "Yes - they used a $1M loan to buy equipment" }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentación de resultados financieros",
        context: "CFO presenta resultados trimestrales a la junta directiva",
        dialogue: [
          { speaker: "CFO", text: "Good morning. I'm pleased to report that we're in the black for the third consecutive quarter.", translation: "Buenos días. Me complace informar que estamos en números negros por tercer trimestre consecutivo." },
          { speaker: "CFO", text: "Revenue increased 15% year-over-year to $50 million, while our profit margin improved to 18%.", translation: "Los ingresos aumentaron 15% año contra año hasta $50 millones, mientras que nuestro margen de beneficio mejoró al 18%." },
          { speaker: "Board Member", text: "What about cash flow? Last quarter there were concerns about liquidity.", translation: "¿Qué hay del flujo de caja? El trimestre pasado había preocupaciones sobre la liquidez." },
          { speaker: "CFO", text: "Great question. Cash flow has improved significantly. We've reduced our liabilities by $2 million and our current assets are highly liquid.", translation: "Gran pregunta. El flujo de caja ha mejorado significativamente. Hemos reducido nuestros pasivos en $2 millones y nuestros activos circulantes son altamente líquidos." },
          { speaker: "Board Member", text: "And the ROI on our recent investments?", translation: "¿Y el ROI de nuestras inversiones recientes?" },
          { speaker: "CFO", text: "The ROI on our technology investments is tracking at 140%, exceeding projections. The bottom line: we're financially stronger than we've been in five years.", translation: "El ROI de nuestras inversiones tecnológicas está siguiendo al 140%, superando las proyecciones. El resultado final: somos financieramente más fuertes de lo que hemos sido en cinco años." },
          { speaker: "CEO", text: "Given these results, should we consider leveraging our position to acquire CompanyY?", translation: "Dados estos resultados, ¿deberíamos considerar apalancar nuestra posición para adquirir CompanyY?" },
          { speaker: "CFO", text: "We could leverage moderately. A debt-to-equity ratio of 1.5:1 would be manageable while maintaining our solvent position.", translation: "Podríamos apalancarnos moderadamente. Una relación deuda-capital de 1.5:1 sería manejable manteniendo nuestra posición solvente." }
        ],
        keyPhrases: [
          { phrase: "in the black", usage: "Rentable, con ganancias" },
          { phrase: "profit margin", usage: "Porcentaje de ganancia sobre ingresos" },
          { phrase: "cash flow / liquidity", usage: "Disponibilidad de efectivo" },
          { phrase: "ROI", usage: "Retorno sobre la inversión" },
          { phrase: "leverage our position", usage: "Usar deuda estratégicamente" },
          { phrase: "debt-to-equity ratio", usage: "Proporción de deuda vs capital propio" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "number stress", description: "Key financial figures receive emphatic stress", descriptionEs: "Las cifras financieras clave reciben énfasis", examples: [{ word: "eighteen percent", transcription: "/ˌeɪˈtiːn pəˈsent/" }, { word: "revenue increased", transcription: "/ˈrevənjuː ɪnˈkriːst/" }], tips: "RP vs GenAm: schedule /ˈʃedjuːl/ UK vs /ˈskedʒuːl/ US" }
        ],
        commonProblems: [
          { word: "revenue", wrong: "re-VE-nue", correct: "/ˈrev.ən.juː/", tip: "REV-en-yoo" },
          { word: "equity", wrong: "e-KWI-ty", correct: "/ˈek.wɪ.ti/", tip: "EK-wi-tee" },
          { word: "liability", wrong: "li-a-BI-li-ty", correct: "/ˌlaɪ.əˈbɪl.ə.ti/", tip: "lai-uh-BIL-i-tee" },
          { word: "depreciate", wrong: "de-PRE-ci-ate", correct: "/dɪˈpriː.ʃi.eɪt/", tip: "di-PREE-shee-ayt" }
        ],
        minimalPairs: [
          { word1: "revenue", word2: "revenge", soundDifference: "REV-en-yoo vs re-VENJ" },
          { word1: "equity", word2: "equality", soundDifference: "EK-wi-tee vs e-KWOL-i-tee" }
        ],
        intonationPatterns: [
          { pattern: "Numbers with emphasis on key figures", example: "Profit margin improved to EIGHTEEN percent.", meaning: "Énfasis en cifras importantes" },
          { pattern: "Rising on positive news, falling on concerns", example: "Revenue increased↗... but costs also rose↘.", meaning: "Tono refleja noticias positivas/negativas" }
        ]
      },
      culturalNote: {
        title: "Financial Communication Styles",
        titleEs: "Estilos de comunicación financiera",
        content: "La comunicación financiera varía entre países. En EE.UU. y UK, los reportes financieros son directos y orientados a accionistas. En Alemania, hay más énfasis en estabilidad a largo plazo que en ganancias trimestrales. En Japón, los números se presentan con más contexto y humildad. Conocer estos estilos es crucial para comunicación financiera internacional.",
        contentEs: "El estilo de presentación financiera varía culturalmente.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "formal"
      },
      consolidationQuiz: [
        {
          question: "'Revenue' y 'profit' son:",
          options: ["Lo mismo", "Revenue es ingreso total; profit es lo que queda después de costos", "Profit es mayor que revenue", "Solo se usan en contabilidad americana"],
          correctAnswer: 1,
          explanation: "Revenue = total income; Profit = revenue - costs"
        },
        {
          question: "'In the red' significa:",
          options: ["Muy rentable", "Perdiendo dinero", "Neutral", "En crecimiento"],
          correctAnswer: 1,
          explanation: "In the red = pérdidas; in the black = ganancias"
        },
        {
          question: "ROI de 150% significa:",
          options: ["Perdiste 50%", "Ganaste 1.5 veces lo invertido", "Tu inversión valió 150", "El 150% de los clientes están satisfechos"],
          correctAnswer: 1,
          explanation: "ROI 150% = por cada $1 invertido, ganaste $1.50 adicional"
        },
        {
          question: "Una empresa 'highly leveraged' tiene:",
          options: ["Mucho efectivo", "Mucha deuda relativa a su capital", "Muchos empleados", "Alto profit margin"],
          correctAnswer: 1,
          explanation: "Leveraged = usa deuda significativa para financiar operaciones"
        },
        {
          question: "'Liquidity' se refiere a:",
          options: ["Deudas de la empresa", "Capacidad de convertir activos a efectivo rápidamente", "Ganancias totales", "Número de acciones"],
          correctAnswer: 1,
          explanation: "Liquidity = qué tan rápido puedes acceder a efectivo"
        },
        {
          question: "'The bottom line is...' significa:",
          options: ["El último párrafo", "La conclusión principal/lo más importante", "El número más bajo", "La línea inferior del documento"],
          correctAnswer: 1,
          explanation: "Bottom line = conclusión final, lo esencial (viene de la línea de ganancias en estados financieros)"
        }
      ],
      guidedProduction: [
        {
          prompt: "Prepara una breve presentación de resultados financieros usando al menos 8 términos aprendidos",
          sampleResponse: "Good afternoon. I'm pleased to report that Q3 was our strongest quarter yet.\n\nRevenue reached $25 million, up 20% year-over-year. More importantly, our profit margin improved to 22%, putting us firmly in the black.\n\nOur cash flow position is healthy, and liquidity is strong with $5 million in readily available assets. We've reduced our liabilities by 15%, improving our debt-to-equity ratio to 0.8:1.\n\nThe ROI on our recent technology investments has exceeded expectations at 180%. Our assets have appreciated rather than depreciated, adding $2 million to our balance sheet.\n\nThe bottom line: we're financially positioned to pursue strategic growth opportunities while maintaining solvency."
        },
        {
          prompt: "Explica a un colega no financiero qué significan estos términos en palabras simples: ROI, cash flow, leverage, profit margin",
          sampleResponse: "ROI (Return on Investment): Imagina que inviertes $100 y recibes $150 de vuelta. Tu ROI es 50%—es simplemente cuánto ganaste en comparación con lo que pusiste.\n\nCash flow: Es como tu cuenta bancaria personal. El dinero que entra (de ventas, inversiones) menos el dinero que sale (salarios, proveedores). Si entra más de lo que sale, tienes cash flow positivo.\n\nLeverage: Usar dinero prestado para hacer más dinero. Como comprar una casa con hipoteca—usas el dinero del banco esperando que la casa valga más después.\n\nProfit margin: De cada dólar que ganas en ventas, cuántos centavos te quedan después de pagar todos los costos. Un margin del 20% significa que de cada $100 en ventas, te quedan $20 de ganancia."
        }
      ],
      connectionToPrevious: "El vocabulario financiero nos da evidencia concreta para defender argumentos en debates.",
      connectionToNext: "El fronting nos permitirá enfatizar datos financieros importantes en presentaciones."
    },
    {
      id: 7,
      title: "Fronting for Emphasis",
      titleEs: "Fronting para Énfasis",
      introduction: {
        title: "⬆️ Fronting para Énfasis",
        explanation: "Fronting mueve elementos al inicio de la oración para dar énfasis. Es una técnica sofisticada del inglés formal y literario.",
        keyPoints: [
          "Objeto al inicio: 'This problem, we need to address immediately'",
          "Adverbio al inicio: 'Rarely have I seen such dedication'",
          "Complemento al inicio: 'Difficult though it may be, we must try'",
          "Adjetivo al inicio: 'Happy as I was, I knew it wouldn't last'",
          "Participio al inicio: 'Gone are the days when...'"
        ],
        examples: [
          { english: "This proposal, we cannot accept under any circumstances.", spanish: "Esta propuesta no podemos aceptarla bajo ninguna circunstancia.", explanation: "Objeto fronted" },
          { english: "Little did we know that this would change everything.", spanish: "Poco sabíamos que esto cambiaría todo.", explanation: "Adverbio negativo + inversión" },
          { english: "Strange though it may seem, the plan worked.", spanish: "Aunque parezca extraño, el plan funcionó.", explanation: "Adjetivo fronted" }
        ],
        tips: [
          "💡 El fronting se usa más en escritura que en habla informal",
          "💡 Algunos fronted elements requieren inversión del sujeto y verbo",
          "💡 'Though' al final es característico de este estilo"
        ],
        whenToUse: [
          "En discursos formales: \"This proposal, we cannot accept under any circumstances\"",
          "En escritura literaria o académica: \"Little did we know that this would change everything\"",
          "En presentaciones ejecutivas: \"Strange though it may seem, the plan worked\"",
          "En comunicados corporativos: \"Gone are the days when we could afford complacency\""
        ],
        whenNotToUse: [
          "En conversación casual → suena pretencioso: \"Never have I seen\" en chat es excesivo",
          "En emails informales → \"Little did I know\" en mensaje a un colega suena artificial",
          "En exceso → si cada oración tiene fronting, pierde impacto; úsalo para momentos clave"
        ]
      },
      objectives: ["Usar fronting para énfasis", "Aplicar inversión correctamente", "Crear efecto dramático"],
      estimatedMinutes: 30,
      grammarTheoryIds: ["c1-inversion"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l11t7_e1", word: "[Object], [subject] [verb]", translation: "[Objeto], [sujeto] [verbo]", type: "expression", definition: "fronted object", definitionEs: "objeto fronted", example: "This, I cannot accept.", exampleEs: "Esto, no puedo aceptar.", related: [], difficulty: 2 },
          { id: "l11t7_e2", word: "[Adjective] though it may be/seem", translation: "[Adjetivo] aunque sea/parezca", type: "expression", definition: "concessive fronting", definitionEs: "fronting concesivo", example: "Difficult though it may be, we'll succeed.", exampleEs: "Aunque sea difícil, tendremos éxito.", related: [], difficulty: 2 },
          { id: "l11t7_e3", word: "Little did [subject] know/realize", translation: "Poco sabía/se daba cuenta [sujeto]", type: "expression", definition: "dramatic fronting", definitionEs: "fronting dramático", example: "Little did she know what awaited her.", exampleEs: "Poco sabía ella lo que le esperaba.", related: [], difficulty: 2 },
          { id: "l11t7_e4", word: "Gone are the days when...", translation: "Se fueron los días cuando...", type: "expression", definition: "nostalgic fronting", definitionEs: "fronting nostálgico", example: "Gone are the days when this was simple.", exampleEs: "Se fueron los días cuando esto era simple.", related: [], difficulty: 2 },
          { id: "l11t7_e5", word: "Such is/was the [noun] that...", translation: "Tal es/era el/la [sustantivo] que...", type: "expression", definition: "emphatic fronting", definitionEs: "fronting enfático", example: "Such was the chaos that we had to evacuate.", exampleEs: "Tal era el caos que tuvimos que evacuar.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t7_cm1", wrong: "Forgetting inversion after negative adverbs: 'Never I have seen such dedication'", correct: "Never have I seen such dedication. (inversion required)", explanation: "After fronted negative adverbs, the auxiliary verb goes before the subject", explanationEs: "Después de adverbios negativos fronted, el verbo auxiliar va antes del sujeto", category: "grammar" },
        { id: "l11t7_cm2", wrong: "Using fronting in casual speech (sounds pretentious)", correct: "Reserve fronting for formal writing, speeches, and dramatic effect", explanation: "Fronting is for formal contexts; in casual conversation it sounds artificial", explanationEs: "El fronting es para contextos formales; en conversación casual suena artificial", category: "usage" },
        { id: "l11t7_cm3", wrong: "'Little he knew' instead of 'Little did he know'", correct: "Little did he know... (requires 'did' for inversion)", explanation: "With negative 'little', you need auxiliary 'did'", explanationEs: "Con 'little' negativo, necesitas auxiliar 'did'", category: "grammar" },
        { id: "l11t7_cm4", wrong: "'Difficult it may be though' - wrong word order", correct: "Difficult though it may be... ('though' comes after the adjective)", explanation: "The order is: Adjective + though + it + may/might + be", explanationEs: "El orden es: Adjective + though + it + may/might + be", category: "grammar" },
        { id: "l11t7_cm5", wrong: "Overusing fronting (every sentence sounds dramatic)", correct: "Use fronting sparingly for key moments of emphasis", explanation: "If everything is emphasized, nothing is", explanationEs: "Si todo está enfatizado, nada lo está", category: "usage" }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Convierte estas oraciones usando fronting para énfasis",
          items: [
            { normal: "I have never seen such incompetence.", fronted: "Never have I seen such incompetence.", type: "Negative adverb + inversion" },
            { normal: "We didn't realize at the time that this would change everything.", fronted: "Little did we realize at the time that this would change everything.", type: "Little did + subject" },
            { normal: "The days when business was simple are gone.", fronted: "Gone are the days when business was simple.", type: "Gone are" },
            { normal: "This may be difficult, but we must try.", fronted: "Difficult though this may be, we must try.", type: "Adjective + though" },
            { normal: "The pressure was so intense that several people quit.", fronted: "Such was the pressure that several people quit.", type: "Such was/is" },
            { normal: "We cannot accept this proposal under any circumstances.", fronted: "This proposal, we cannot accept under any circumstances.", type: "Object fronting" }
          ]
        },
        {
          type: "inversion-practice",
          instruction: "Completa con la inversión correcta",
          items: [
            { sentence: "Never ___ we faced such a challenge.", answer: "have", explanation: "Never have we (auxiliar antes del sujeto)" },
            { sentence: "Rarely ___ I seen such dedication.", answer: "have", explanation: "Rarely have I (auxiliar antes del sujeto)" },
            { sentence: "Little ___ they know what awaited them.", answer: "did", explanation: "Little did they (pasado con 'did')" },
            { sentence: "Only then ___ we understand the importance.", answer: "did", explanation: "Only then did we (pasado con 'did')" },
            { sentence: "Not only ___ he late, but he also forgot the documents.", answer: "was", explanation: "Not only was he (verbo 'be' invertido)" },
            { sentence: "Seldom ___ such opportunities arise.", answer: "do", explanation: "Seldom do (presente con 'do')" }
          ]
        },
        {
          type: "register-matching",
          instruction: "Indica si el uso de fronting es apropiado para cada contexto",
          items: [
            { context: "Email to close colleague", sentence: "Never have I seen such a mess in the kitchen!", appropriate: false, explanation: "Demasiado formal para email casual" },
            { context: "CEO speech at annual conference", sentence: "Gone are the days when we could afford to be complacent.", appropriate: true, explanation: "Perfecto para discurso formal" },
            { context: "Academic paper", sentence: "Significant though these findings are, more research is needed.", appropriate: true, explanation: "Apropiado para escritura académica" },
            { context: "Text message to friend", sentence: "Little did I know that the movie would be so bad.", appropriate: false, explanation: "Demasiado formal para mensaje de texto" },
            { context: "Business presentation", sentence: "Such was the demand that we had to double production.", appropriate: true, explanation: "Apropiado para presentación formal" }
          ]
        },
        {
          type: "dramatic-writing",
          instruction: "Reescribe este párrafo usando fronting para crear efecto dramático",
          original: "We have never faced such uncertainty. The days when markets were predictable are gone. We didn't fully understand the magnitude of change at the time. The challenge is significant, but we must adapt.",
          improved: "Never have we faced such uncertainty. Gone are the days when markets were predictable. Little did we fully understand the magnitude of change at the time. Significant though the challenge may be, we must adapt."
        }
      ],
      modelDialogue: {
        title: "Discurso de apertura de conferencia",
        context: "Keynote speaker usa fronting para crear impacto dramático",
        dialogue: [
          { speaker: "Speaker", text: "Ladies and gentlemen, gone are the days when technology was optional. Today, it defines everything we do.", translation: "Damas y caballeros, se fueron los días cuando la tecnología era opcional. Hoy, define todo lo que hacemos." },
          { speaker: "Speaker", text: "Never have we faced such rapid change. Little did we know, just five years ago, that AI would transform entire industries.", translation: "Nunca hemos enfrentado un cambio tan rápido. Poco sabíamos, hace solo cinco años, que la IA transformaría industrias enteras." },
          { speaker: "Speaker", text: "Such is the pace of innovation that what seems impossible today becomes routine tomorrow.", translation: "Tal es el ritmo de la innovación que lo que parece imposible hoy se vuelve rutina mañana." },
          { speaker: "Speaker", text: "Challenging though this environment may be, it's also full of opportunity.", translation: "Desafiante aunque este entorno pueda ser, también está lleno de oportunidades." },
          { speaker: "Speaker", text: "This future, we cannot ignore. This challenge, we must embrace. This moment, we will seize.", translation: "Este futuro, no podemos ignorar. Este desafío, debemos abrazar. Este momento, lo aprovecharemos." },
          { speaker: "Speaker", text: "Rarely do we get a chance to shape history. Today is one of those chances.", translation: "Raramente tenemos la oportunidad de dar forma a la historia. Hoy es una de esas oportunidades." }
        ],
        keyPhrases: [
          { phrase: "Gone are the days when...", usage: "Nostalgia + urgencia de cambio" },
          { phrase: "Never have we faced...", usage: "Enfatizando unicidad de la situación" },
          { phrase: "Little did we know...", usage: "Reflexión sobre el pasado" },
          { phrase: "Such is the [noun] that...", usage: "Énfasis en intensidad" },
          { phrase: "[Adjective] though it may be...", usage: "Concesión elegante" },
          { phrase: "This [object], we [verb]...", usage: "Objeto fronted para énfasis" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "dramatic pause", description: "Extended pause after fronted element for rhetorical effect", descriptionEs: "Pausa dramática tras elemento adelantado para efecto retórico", examples: [{ word: "Gone are the days", transcription: "/ɡɒn ɑː ðə deɪz/" }, { word: "Never have I seen", transcription: "/ˈnevə hæv aɪ ˈsiːn/" }], tips: "Rhythm: fronted element gets full weight, then pause before main clause" }
        ],
        commonProblems: [
          { word: "such", wrong: "SUCH", correct: "/sʌtʃ/", tip: "Short u, not 'sooch'" },
          { word: "seldom", wrong: "SEL-dom", correct: "/ˈsel.dəm/", tip: "SEL-dum, weak second syllable" }
        ],
        minimalPairs: [
          { word1: "Never have I", word2: "I have never", soundDifference: "Inversion changes stress pattern; 'never' gets emphasis in fronted" },
          { word1: "Such was the", word2: "The was such", soundDifference: "Fronting creates dramatic cadence" }
        ],
        intonationPatterns: [
          { pattern: "Dramatic pause after fronted element", example: "Gone are the days... [pause] ...when this was easy.", meaning: "Pausa dramática después del elemento fronted" },
          { pattern: "Rising on fronted negative", example: "NEVER↗ have I seen...", meaning: "Subida enfática en el negativo" },
          { pattern: "Falling tone to close emphatic statement", example: "...that several people quit↘.", meaning: "Bajada al cerrar declaración enfática" }
        ]
      },
      culturalNote: {
        title: "Fronting in English Rhetoric",
        titleEs: "El fronting en la retórica inglesa",
        content: "El fronting es una técnica retórica muy valorada en la oratoria inglesa. Políticos como Winston Churchill ('Never in the field of human conflict...'), Martin Luther King, y líderes empresariales lo usan para crear momentos memorables. En español, estas estructuras suenan menos naturales, lo que hace que muchos hispanohablantes las subutilicen en inglés. Dominar el fronting te distingue como comunicador sofisticado.",
        contentEs: "El fronting distingue a comunicadores sofisticados en inglés.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "formal"
      },
      consolidationQuiz: [
        {
          question: "'Never ___ I seen such dedication.' La forma correcta es:",
          options: ["I have", "have I", "did I", "I did"],
          correctAnswer: 1,
          explanation: "Después de 'never' fronted: auxiliar + sujeto (inversión)"
        },
        {
          question: "'Difficult ___ it may be, we must try.' Completa:",
          options: ["although", "though", "but", "however"],
          correctAnswer: 1,
          explanation: "Adjective + though + it + may/might + be"
        },
        {
          question: "'Gone are the days' es un ejemplo de:",
          options: ["Pregunta", "Fronting con inversión", "Pasiva", "Condicional"],
          correctAnswer: 1,
          explanation: "El complemento 'gone' está fronted con inversión del sujeto"
        },
        {
          question: "El fronting es más apropiado para:",
          options: ["Mensajes de texto", "Emails casuales", "Discursos y escritura formal", "Conversación diaria"],
          correctAnswer: 2,
          explanation: "El fronting es una técnica formal y retórica"
        },
        {
          question: "'Little did we know' se usa para:",
          options: ["Hablar de cosas pequeñas", "Expresar que no sabíamos algo importante en el pasado", "Hacer preguntas", "Dar órdenes"],
          correctAnswer: 1,
          explanation: "Little did + subject + know = no sabíamos (con connotación de ironia o drama)"
        },
        {
          question: "'Such was the chaos that...' enfatiza:",
          options: ["Orden", "La intensidad de algo", "Una comparación", "Una pregunta"],
          correctAnswer: 1,
          explanation: "Such was/is + noun + that = la intensidad era tal que..."
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe el inicio de un discurso usando al menos 4 estructuras de fronting diferentes",
          sampleResponse: "Distinguished guests, colleagues, friends—thank you for being here today.\n\nNever have we stood at such a critical juncture in our company's history. Gone are the days when we could rely on past success to guarantee future growth.\n\nLittle did we know, when we founded this company ten years ago, that we would face challenges of this magnitude. Such is the pace of change in our industry that what worked yesterday may fail tomorrow.\n\nDifficult though this moment may be, it is also full of unprecedented opportunity. This challenge, we will not run from. This moment, we will embrace.\n\nRarely do leaders get the chance to truly transform their organizations. Today, we have that chance."
        },
        {
          prompt: "Transforma estas 5 oraciones normales en versiones con fronting",
          normalSentences: [
            "I have rarely seen such commitment.",
            "The days of easy growth are gone.",
            "We didn't know at the time how important this decision was.",
            "This may be challenging, but it's necessary.",
            "We cannot ignore this opportunity."
          ],
          frontedVersions: [
            "Rarely have I seen such commitment.",
            "Gone are the days of easy growth.",
            "Little did we know at the time how important this decision was.",
            "Challenging though this may be, it's necessary.",
            "This opportunity, we cannot ignore."
          ]
        }
      ],
      connectionToPrevious: "El fronting nos permite enfatizar datos financieros clave en presentaciones.",
      connectionToNext: "La comunicación de crisis requiere combinar fronting con empatía y claridad."
    },
    {
      id: 8,
      title: "Crisis Communication",
      titleEs: "Comunicación de Crisis",
      introduction: {
        title: "🚨 Comunicación de Crisis",
        explanation: "En momentos de crisis, la comunicación clara y empática es crucial. Aprenderás a transmitir información difícil mientras mantienes la confianza.",
        keyPoints: [
          "Reconocer: 'We acknowledge that this situation is difficult'",
          "Informar: 'Here's what we know so far...'",
          "Responsabilidad: 'We take full responsibility for...'",
          "Acciones: 'We are taking immediate steps to...'",
          "Compromiso: 'We are committed to keeping you informed'"
        ],
        examples: [
          { english: "We deeply regret this incident and take full responsibility. Here's what we're doing to address it...", spanish: "Lamentamos profundamente este incidente y asumimos total responsabilidad. Esto es lo que estamos haciendo para abordarlo...", explanation: "Admisión y acción" },
          { english: "We understand your concerns and want to assure you that your safety is our top priority.", spanish: "Entendemos sus preocupaciones y queremos asegurarles que su seguridad es nuestra máxima prioridad.", explanation: "Empatía y reassurance" },
          { english: "While we don't yet have all the answers, we are committed to transparent communication.", spanish: "Aunque aún no tenemos todas las respuestas, estamos comprometidos con la comunicación transparente.", explanation: "Honestidad sobre limitaciones" }
        ],
        tips: [
          "💡 Nunca culpes a otros - asume responsabilidad",
          "💡 Comunica pronto, incluso si no tienes toda la información",
          "💡 La empatía primero, los hechos después"
        ],
        whenToUse: [
          "En comunicados de crisis: \"We deeply regret this incident and take full responsibility. Here's what we're doing to address it...\"",
          "En reuniones post-incidente: \"We understand your concerns and want to assure you that your safety is our top priority\"",
          "Cuando hay información limitada: \"While we don't yet have all the answers, we are committed to transparent communication\"",
          "En recall de productos: \"We are taking immediate steps to... We are committed to keeping you informed\""
        ],
        whenNotToUse: [
          "Culpar a otros → \"This was caused by our supplier\" destruye confianza; asume responsabilidad primero",
          "Minimizando → \"This is not a big deal\" invalida a los afectados",
          "Promesas absolutas → \"This will never happen again\" puede romperse; sé realista"
        ]
      },
      objectives: ["Comunicar en situaciones de crisis", "Mostrar empatía mientras se informa", "Mantener la confianza"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-hedging", "c1-distancing-language"],
      vocabulary: {
        nouns: [
          { id: "l11t8_n1", word: "incident", translation: "incidente", type: "noun", definition: "event causing problems", definitionEs: "evento que causa problemas", example: "We regret this incident.", exampleEs: "Lamentamos este incidente.", related: [], difficulty: 1 },
          { id: "l11t8_n2", word: "transparency", translation: "transparencia", type: "noun", definition: "openness and honesty", definitionEs: "apertura y honestidad", example: "We value transparency.", exampleEs: "Valoramos la transparencia.", related: ["transparent"], difficulty: 2 },
          { id: "l11t8_n3", word: "accountability", translation: "responsabilidad/rendición de cuentas", type: "noun", definition: "being responsible", definitionEs: "ser responsable", example: "Accountability is crucial.", exampleEs: "La rendición de cuentas es crucial.", related: ["accountable"], difficulty: 2 },
        ],
        verbs: [
          { id: "l11t8_v1", word: "acknowledge", translation: "reconocer", type: "verb", definition: "to admit existence", definitionEs: "admitir existencia", example: "We acknowledge the problem.", exampleEs: "Reconocemos el problema.", related: [], difficulty: 1 },
          { id: "l11t8_v2", word: "assure", translation: "asegurar", type: "verb", definition: "to promise confidently", definitionEs: "prometer con confianza", example: "I assure you we're working on it.", exampleEs: "Les aseguro que estamos trabajando en ello.", related: ["assurance"], difficulty: 1 },
          { id: "l11t8_v3", word: "mitigate", translation: "mitigar", type: "verb", definition: "to make less severe", definitionEs: "hacer menos severo", example: "We're working to mitigate the impact.", exampleEs: "Estamos trabajando para mitigar el impacto.", related: [], difficulty: 2 },
        ],
        adjectives: [],
        expressions: [
          { id: "l11t8_e1", word: "We take full responsibility for...", translation: "Asumimos total responsabilidad por...", type: "expression", definition: "accepting blame", definitionEs: "aceptando culpa", example: "We take full responsibility for this error.", exampleEs: "Asumimos total responsabilidad por este error.", related: [], difficulty: 1 },
          { id: "l11t8_e2", word: "Here's what we know so far...", translation: "Esto es lo que sabemos hasta ahora...", type: "expression", definition: "sharing information", definitionEs: "compartiendo información", example: "Here's what we know so far about the situation.", exampleEs: "Esto es lo que sabemos hasta ahora sobre la situación.", related: [], difficulty: 1 },
          { id: "l11t8_e3", word: "We are taking immediate steps to...", translation: "Estamos tomando medidas inmediatas para...", type: "expression", definition: "describing action", definitionEs: "describiendo acción", example: "We are taking immediate steps to resolve this.", exampleEs: "Estamos tomando medidas inmediatas para resolver esto.", related: [], difficulty: 1 },
          { id: "l11t8_e4", word: "We are committed to keeping you informed", translation: "Estamos comprometidos a mantenerlos informados", type: "expression", definition: "promising updates", definitionEs: "prometiendo actualizaciones", example: "We are committed to keeping you informed as we learn more.", exampleEs: "Estamos comprometidos a mantenerlos informados a medida que sepamos más.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t8_cm1", wrong: "Blaming others: 'This was caused by our supplier'", correct: "'While we are investigating the root cause, we take full responsibility for the impact on our customers'", explanation: "Blaming others damages trust; assume responsibility first", explanationEs: "Culpar a otros daña la confianza; asume responsabilidad primero", category: "usage" },
        { id: "l11t8_cm2", wrong: "Minimizing: 'This is not a big deal'", correct: "'We understand the seriousness of this situation and are treating it with the urgency it deserves'", explanation: "Minimizing invalidates the concerns of those affected", explanationEs: "Minimizar invalida las preocupaciones de los afectados", category: "usage" },
        { id: "l11t8_cm3", wrong: "Waiting too long to communicate", correct: "Communicate early: 'We don't have all the answers yet, but here's what we know...'", explanation: "Silence breeds speculation; communicate early even if incomplete", explanationEs: "El silencio genera especulación; comunica pronto aunque sea incompleto", category: "usage" },
        { id: "l11t8_cm4", wrong: "Making promises you can't keep: 'This will never happen again'", correct: "'We are implementing measures to significantly reduce the likelihood of this recurring'", explanation: "Absolute promises can be broken again; be realistic", explanationEs: "Promesas absolutas pueden volver a romperse; sé realista", category: "usage" },
        { id: "l11t8_cm5", wrong: "Using jargon or technical language", correct: "Use clear, simple language that everyone can understand", explanation: "In crisis, clarity is crucial; avoid technical jargon", explanationEs: "En crisis, la claridad es crucial; evita tecnicismos", category: "usage" }
      ],
      exercises: [
        {
          type: "response-selection",
          instruction: "Elige la mejor respuesta para cada situación de crisis",
          items: [
            {
              crisis: "Data breach affecting customer information",
              options: [
                "We were hacked, but it wasn't our fault.",
                "We deeply regret to inform you that a security incident has affected some customer data. We take full responsibility for protecting your information and are taking immediate steps to address this.",
                "Don't worry, these things happen all the time."
              ],
              best: 1,
              explanation: "Reconoce, asume responsabilidad, describe acción"
            },
            {
              crisis: "Product recall due to safety issue",
              options: [
                "The safety of our customers is our top priority. We are voluntarily recalling [product] out of an abundance of caution. Here's what you need to know...",
                "A few products had issues but most are fine.",
                "We're recalling this because of regulations, not because there's a real problem."
              ],
              best: 0,
              explanation: "Pone seguridad primero, es proactivo, da información clara"
            },
            {
              crisis: "Service outage affecting customers",
              options: [
                "We acknowledge that our service is currently experiencing issues. We understand the impact this has on your operations and are working around the clock to restore full functionality.",
                "Technical difficulties. Please try again later.",
                "The servers are down because of unprecedented demand."
              ],
              best: 0,
              explanation: "Reconoce impacto, muestra empatía, describe acciones"
            }
          ]
        },
        {
          type: "message-building",
          instruction: "Construye un mensaje de crisis usando la estructura: Reconocer → Informar → Actuar → Comprometer",
          scenario: "Your company's app has been down for 4 hours affecting thousands of users",
          structure: {
            acknowledge: "We acknowledge that many of you are experiencing issues accessing our app...",
            inform: "Here's what we know: [specific technical issue] occurred at [time]...",
            act: "Our engineering team has been working since [time] to resolve this. We have [specific action taken]...",
            commit: "We are committed to keeping you updated every 30 minutes until service is restored. We will also provide [compensation/next steps]..."
          },
          sampleMessage: "We acknowledge that many of you are experiencing issues accessing our app, and we sincerely apologize for the disruption this has caused to your day.\n\nHere's what we know: at 2:15 PM, our primary database experienced an unexpected failure. Our engineering team has been working continuously since then to restore service.\n\nWe have identified the root cause and are implementing a fix. We expect full service restoration within the next 2 hours.\n\nWe are committed to keeping you updated every 30 minutes until service is restored. Once resolved, we will provide a full post-incident report and discuss how we're preventing this from happening again.\n\nWe understand your time is valuable, and we take this seriously."
        },
        {
          type: "tone-correction",
          instruction: "Reescribe estos mensajes de crisis con el tono apropiado",
          items: [
            {
              poor: "We had a small problem but it's fixed now.",
              improved: "We experienced an issue that affected some of our customers. We want to acknowledge the inconvenience this may have caused. The issue has been resolved, and we're implementing additional safeguards to prevent recurrence."
            },
            {
              poor: "This wasn't our fault - our vendor made an error.",
              improved: "We take full responsibility for ensuring quality in all aspects of our service. While we're investigating the root cause with our partners, our focus right now is on addressing the impact this has had on you."
            },
            {
              poor: "We're sorry if anyone was affected.",
              improved: "We're sorry for the impact this has had on you. We understand how frustrating this experience must be, and we're committed to making it right."
            }
          ]
        },
        {
          type: "q-and-a-preparation",
          instruction: "Prepara respuestas para preguntas difíciles en una crisis",
          questions: [
            {
              question: "How could you let this happen?",
              response: "That's a fair question. We're asking ourselves the same thing. While we had safeguards in place, they clearly weren't sufficient. We're conducting a thorough review and will share our findings and corrective actions."
            },
            {
              question: "Why didn't you inform us sooner?",
              response: "You're right that communication could have been faster. We wanted to have confirmed information before reaching out, but in hindsight, earlier communication—even with incomplete information—would have been better. We're updating our protocols accordingly."
            },
            {
              question: "What compensation will you provide?",
              response: "That's an important discussion, and we're committed to making this right. Once we fully understand the impact, we'll communicate specific remediation measures. Right now, our priority is resolving the immediate issue."
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Conferencia de prensa tras incidente de seguridad",
        context: "CEO aborda públicamente una brecha de datos",
        dialogue: [
          { speaker: "CEO", text: "Good morning. I want to address the security incident that affected some of our customers. First, let me say: I take full responsibility. This happened on my watch.", translation: "Buenos días. Quiero abordar el incidente de seguridad que afectó a algunos de nuestros clientes. Primero, déjenme decir: asumo total responsabilidad. Esto sucedió bajo mi mando." },
          { speaker: "CEO", text: "Here's what we know so far: On Tuesday, unauthorized access was detected in one of our systems. Approximately 50,000 customer records may have been affected.", translation: "Esto es lo que sabemos hasta ahora: El martes, se detectó acceso no autorizado en uno de nuestros sistemas. Aproximadamente 50,000 registros de clientes pueden haber sido afectados." },
          { speaker: "CEO", text: "We are taking immediate steps to address this. We've engaged leading cybersecurity experts, notified affected customers directly, and are offering free credit monitoring.", translation: "Estamos tomando medidas inmediatas para abordar esto. Hemos contratado expertos líderes en ciberseguridad, notificado directamente a los clientes afectados, y estamos ofreciendo monitoreo de crédito gratuito." },
          { speaker: "Reporter", text: "How could this happen with all your security measures?", translation: "¿Cómo pudo pasar esto con todas sus medidas de seguridad?" },
          { speaker: "CEO", text: "That's a fair question, and one we're asking ourselves. Our security measures, while robust, clearly had a gap. We're conducting a thorough review and will share our findings.", translation: "Esa es una pregunta justa, y una que nos estamos haciendo. Nuestras medidas de seguridad, aunque robustas, claramente tenían una brecha. Estamos realizando una revisión exhaustiva y compartiremos nuestros hallazgos." },
          { speaker: "Reporter", text: "Why should customers trust you going forward?", translation: "¿Por qué deberían los clientes confiar en ustedes en adelante?" },
          { speaker: "CEO", text: "Trust is earned, not demanded. We are committed to being transparent throughout this process, implementing stronger protections, and demonstrating through our actions that we deserve your trust. This will take time, and we're prepared to do the work.", translation: "La confianza se gana, no se exige. Estamos comprometidos a ser transparentes a lo largo de este proceso, implementar protecciones más fuertes, y demostrar a través de nuestras acciones que merecemos su confianza. Esto tomará tiempo, y estamos preparados para hacer el trabajo." }
        ],
        keyPhrases: [
          { phrase: "I take full responsibility", usage: "Asumiendo responsabilidad personalmente" },
          { phrase: "Here's what we know so far", usage: "Siendo transparente con información actual" },
          { phrase: "We are taking immediate steps", usage: "Mostrando acción" },
          { phrase: "That's a fair question", usage: "Validando preguntas difíciles" },
          { phrase: "Trust is earned, not demanded", usage: "Mostrando humildad" },
          { phrase: "We're committed to being transparent", usage: "Prometiendo comunicación continua" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "authoritative calm", description: "Steady pace and measured tone convey control in crisis", descriptionEs: "Ritmo estable y tono medido transmiten control en crisis", examples: [{ word: "We are committed", transcription: "/wiː ɑː kəˈmɪtɪd/" }, { word: "keeping you informed", transcription: "/ˈkiːpɪŋ juː ɪnˈfɔːmd/" }], tips: "Avoid rising tone at end of statements - sounds uncertain; elision in 'we're' /wɪə/ in fast speech" }
        ],
        commonProblems: [
          { word: "acknowledge", wrong: "ac-KNOW-ledge", correct: "/əkˈnɒl.ɪdʒ/", tip: "ak-NOL-ij" },
          { word: "transparency", wrong: "trans-PA-ren-cy", correct: "/trænˈspær.ən.si/", tip: "tran-SPA-run-see" },
          { word: "mitigate", wrong: "mi-ti-GATE", correct: "/ˈmɪt.ɪ.ɡeɪt/", tip: "MIT-i-gayt" }
        ],
        minimalPairs: [
          { word1: "transparent", word2: "transparency", soundDifference: "Adjective -ent vs noun -ency" },
          { word1: "We're committed", word2: "We aren't committed", soundDifference: "Contraction vs full negative - tone shift critical" }
        ],
        intonationPatterns: [
          { pattern: "Sincere, measured tone throughout", example: "We take full responsibility→.", meaning: "Tono sincero, no defensivo" },
          { pattern: "Slight fall on apology phrases", example: "We sincerely apologize↘.", meaning: "Bajada transmite sinceridad" },
          { pattern: "Firm but warm on commitments", example: "We ARE↗ committed to keeping you informed↘.", meaning: "Énfasis en compromiso" }
        ]
      },
      culturalNote: {
        title: "Crisis Communication Across Cultures",
        titleEs: "Comunicación de crisis entre culturas",
        content: "Las expectativas de comunicación de crisis varían culturalmente. En EE.UU., se espera que el CEO asuma responsabilidad personalmente y comunique rápidamente. En Japón, las disculpas públicas son más formales y ceremoniales, a menudo con reverencias. En culturas de alto contexto, la comunicación indirecta puede ser apropiada. Sin embargo, en contextos internacionales de negocios, la transparencia, responsabilidad y acción son universalmente valoradas.",
        contentEs: "Transparencia y responsabilidad son valores universales en crisis.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "formal"
      },
      consolidationQuiz: [
        {
          question: "En comunicación de crisis, lo primero que debes hacer es:",
          options: ["Culpar a quien causó el problema", "Minimizar la situación", "Reconocer el problema y mostrar empatía", "Esperar hasta tener toda la información"],
          correctAnswer: 2,
          explanation: "Reconocer + empatía primero, luego informar y actuar"
        },
        {
          question: "'We take full responsibility' es mejor que 'It wasn't our fault' porque:",
          options: ["Es más largo", "Demuestra liderazgo y construye confianza", "Es lo que los abogados dicen", "Evita preguntas"],
          correctAnswer: 1,
          explanation: "Asumir responsabilidad demuestra liderazgo y genera confianza"
        },
        {
          question: "'Here's what we know so far' indica:",
          options: ["Que no sabes nada", "Transparencia aunque la información sea incompleta", "Que estás ocultando algo", "Que la crisis terminó"],
          correctAnswer: 1,
          explanation: "Comunica lo que sabes, reconoce lo que aún no sabes"
        },
        {
          question: "¿Cuándo debes comunicar en una crisis?",
          options: ["Solo cuando tengas toda la información", "Lo más pronto posible, aunque sea información parcial", "Cuando el departamento legal apruebe", "Nunca - deja que pase"],
          correctAnswer: 1,
          explanation: "Comunicación temprana previene especulación y muestra control"
        },
        {
          question: "'This will never happen again' es problemático porque:",
          options: ["Es demasiado corto", "Es una promesa absoluta que podría romperse", "No menciona compensación", "Es demasiado humilde"],
          correctAnswer: 1,
          explanation: "Mejor: 'implementing measures to significantly reduce likelihood'"
        },
        {
          question: "'We are committed to keeping you informed' es importante porque:",
          options: ["Llena espacio", "Promete comunicación continua y transparencia", "Es fácil de decir", "Termina la conversación"],
          correctAnswer: 1,
          explanation: "Compromiso de transparencia continua construye confianza"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un comunicado de crisis para esta situación: Tu restaurante tuvo un brote de intoxicación alimentaria que afectó a 20 clientes",
          sampleResponse: "Dear valued customers,\n\nWe are deeply sorry to inform you that several customers who dined with us last weekend have reported illness. The health and safety of our customers is our absolute top priority, and we take this situation extremely seriously.\n\nHere's what we know so far: We have received reports of gastrointestinal illness from approximately 20 customers who visited our establishment between Friday and Sunday. We immediately contacted health authorities and closed our restaurant for a thorough investigation.\n\nWe are taking immediate steps to address this:\n• We have voluntarily closed for deep cleaning and inspection\n• We are working with health officials to identify the source\n• We have reached out directly to affected customers to offer support\n• All potentially affected ingredients have been disposed of\n\nWe are committed to keeping you informed as we learn more. We will not reopen until we are confident that our facility meets the highest safety standards.\n\nIf you dined with us last weekend and are experiencing symptoms, please contact [phone number]. We will cover any medical expenses for affected customers.\n\nWe have served this community for 15 years, and we understand that trust is earned through actions, not words. We are committed to doing whatever it takes to make this right.\n\nSincerely,\n[Owner name]"
        },
        {
          prompt: "Prepara respuestas para 3 preguntas difíciles que podrías recibir sobre esta crisis",
          sampleResponse: "Q1: 'How could you serve contaminated food?'\nA: That's a question we're asking ourselves, and we're determined to find the answer. Our protocols were in place, but clearly something went wrong. We're working with health authorities to identify exactly what happened so we can ensure it never happens again.\n\nQ2: 'Why should anyone ever eat at your restaurant again?'\nA: I completely understand that concern. Trust has to be earned back through actions. We're implementing additional safety measures beyond what's required, including [specific measures]. We'll be transparent about our findings and invite customers to see our improved processes. It will take time, and we're committed to that journey.\n\nQ3: 'Will you compensate the affected customers?'\nA: Absolutely. We will cover all medical expenses for anyone affected. Beyond that, we're discussing additional measures with affected customers directly. Our priority right now is their health and recovery. Making things right financially is the least we can do."
        }
      ],
      connectionToPrevious: "El fronting nos permite enfatizar mensajes clave en comunicación de crisis.",
      connectionToNext: "Las estructuras comparativas avanzadas nos ayudarán a contextualizar crisis y mejoras."
    },
    {
      id: 9,
      title: "Comparative Structures Advanced",
      titleEs: "Estructuras Comparativas Avanzadas",
      introduction: {
        title: "📊 Comparativos Avanzados",
        explanation: "Más allá de 'more than' y 'as...as', existen estructuras comparativas sofisticadas que añaden matices a tus comparaciones.",
        keyPoints: [
          "Double comparatives: 'The more..., the more/less...'",
          "Intensificadores: 'by far the best', 'nowhere near as good'",
          "Modificadores: 'slightly/considerably/marginally better'",
          "Comparación implícita: 'superior/inferior to', 'preferable to'",
          "Progresión: 'increasingly', 'progressively more'"
        ],
        examples: [
          { english: "The more we analyze the data, the more complex the situation appears.", spanish: "Cuanto más analizamos los datos, más compleja aparece la situación.", explanation: "Double comparative" },
          { english: "This solution is marginally better than the previous one, but nowhere near as effective as the original.", spanish: "Esta solución es marginalmente mejor que la anterior, pero ni de lejos tan efectiva como la original.", explanation: "Modificadores de grado" },
          { english: "Option A is preferable to Option B in terms of cost-effectiveness.", spanish: "La Opción A es preferible a la Opción B en términos de costo-efectividad.", explanation: "Comparación con 'preferable'" }
        ],
        tips: [
          "💡 'The more..., the more...' es muy útil para mostrar correlación",
          "💡 'Nowhere near' es enfático: 'not at all as'",
          "💡 'Superior/inferior TO', no 'than'"
        ],
        whenToUse: [
          "En análisis de datos: \"The more we analyze the data, the more complex the situation appears\"",
          "En evaluaciones de propuestas: \"This solution is marginally better but nowhere near as effective as the original\"",
          "En informes comparativos: \"Option A is preferable to Option B in terms of cost-effectiveness\"",
          "En presentaciones: \"This is by far the best option we've considered\""
        ],
        whenNotToUse: [
          "Error común → 'superior than' es incorrecto: siempre \"superior TO\"",
          "En conversación casual → \"nowhere near as good\" puede sonar fuerte; \"not as good\" es más suave",
          "'More better' o 'more superior' → son comparativos; no duplicar: \"better\" o \"superior\""
        ]
      },
      objectives: ["Usar double comparatives", "Aplicar intensificadores y modificadores", "Expresar comparaciones con precisión"],
      estimatedMinutes: 30,
      grammarTheoryIds: ["c1-complex-noun-phrases"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [
          { id: "l11t9_a1", word: "superior (to)", translation: "superior (a)", type: "adjective", definition: "better than", definitionEs: "mejor que", example: "This model is superior to the old one.", exampleEs: "Este modelo es superior al antiguo.", related: [], difficulty: 2 },
          { id: "l11t9_a2", word: "inferior (to)", translation: "inferior (a)", type: "adjective", definition: "worse than", definitionEs: "peor que", example: "The copy is inferior to the original.", exampleEs: "La copia es inferior al original.", related: [], difficulty: 2 },
          { id: "l11t9_a3", word: "preferable (to)", translation: "preferible (a)", type: "adjective", definition: "more desirable", definitionEs: "más deseable", example: "This option is preferable to the alternative.", exampleEs: "Esta opción es preferible a la alternativa.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l11t9_e1", word: "The more..., the more/less...", translation: "Cuanto más..., más/menos...", type: "expression", definition: "double comparative", definitionEs: "comparativo doble", example: "The more I learn, the more I realize I don't know.", exampleEs: "Cuanto más aprendo, más me doy cuenta de que no sé.", related: [], difficulty: 2 },
          { id: "l11t9_e2", word: "by far the [superlative]", translation: "con diferencia el/la [superlativo]", type: "expression", definition: "emphatic superlative", definitionEs: "superlativo enfático", example: "This is by far the best option.", exampleEs: "Esta es con diferencia la mejor opción.", related: [], difficulty: 1 },
          { id: "l11t9_e3", word: "nowhere near as [adjective] as", translation: "ni de lejos tan [adjetivo] como", type: "expression", definition: "emphatic negative comparison", definitionEs: "comparación negativa enfática", example: "It's nowhere near as expensive as I thought.", exampleEs: "No es ni de lejos tan caro como pensé.", related: [], difficulty: 2 },
          { id: "l11t9_e4", word: "slightly/marginally better", translation: "ligeramente/marginalmente mejor", type: "expression", definition: "small difference", definitionEs: "diferencia pequeña", example: "Option B is marginally better.", exampleEs: "La Opción B es marginalmente mejor.", related: [], difficulty: 1 },
          { id: "l11t9_e5", word: "considerably/significantly more", translation: "considerablemente/significativamente más", type: "expression", definition: "large difference", definitionEs: "diferencia grande", example: "This is considerably more efficient.", exampleEs: "Esto es considerablemente más eficiente.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l11t9_adv1", word: "increasingly", translation: "cada vez más", type: "adverb", definition: "more and more", definitionEs: "más y más", example: "This is becoming increasingly difficult.", exampleEs: "Esto se está volviendo cada vez más difícil.", related: [], difficulty: 1 },
          { id: "l11t9_adv2", word: "progressively", translation: "progresivamente", type: "adverb", definition: "gradually more", definitionEs: "gradualmente más", example: "It gets progressively harder.", exampleEs: "Se vuelve progresivamente más difícil.", related: [], difficulty: 2 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t9_cm1", wrong: "'Superior/inferior than' instead of 'to'", correct: "Superior/inferior TO (not 'than')", explanation: "With superior/inferior/preferable, always use 'to'", explanationEs: "Con superior/inferior/preferable, siempre usa 'to'", category: "grammar" },
        { id: "l11t9_cm2", wrong: "'The more..., more...' (missing second 'the')", correct: "The more..., THE more/less...", explanation: "Double comparative requires 'the' in both parts", explanationEs: "Doble comparativo requiere 'the' en ambas partes", category: "grammar" },
        { id: "l11t9_cm3", wrong: "'More better' or 'more superior'", correct: "Better (not 'more better'); superior (not 'more superior')", explanation: "Better and superior are already comparatives; don't duplicate", explanationEs: "Better y superior ya son comparativos; no se duplican", category: "grammar" },
        { id: "l11t9_cm4", wrong: "'Nowhere as good' instead of 'nowhere near as good'", correct: "Nowhere NEAR as good", explanation: "The full expression includes 'near'", explanationEs: "La expresión completa incluye 'near'", category: "grammar" },
        { id: "l11t9_cm5", wrong: "'By far more better' - double comparative with intensifier", correct: "By far THE best (superlative) or considerably better (comparative)", explanation: "'By far' is used with superlatives, not comparatives", explanationEs: "'By far' se usa con superlativos, no comparativos", category: "grammar" }
      ],
      exercises: [
        {
          type: "double-comparative",
          instruction: "Completa las oraciones con dobles comparativos",
          items: [
            { prompt: "___ we invest in training, ___ productive our team becomes.", answer: "The more / the more", meaning: "Más invertimos → más productivos" },
            { prompt: "___ the deadline approaches, ___ stressed everyone gets.", answer: "The closer / the more", meaning: "Más cerca el deadline → más estrés" },
            { prompt: "___ data we have, ___ accurate our predictions.", answer: "The more / the more", meaning: "Más datos → predicciones más precisas" },
            { prompt: "___ I think about it, ___ sense it makes.", answer: "The more / the more", meaning: "Más pienso → más sentido" },
            { prompt: "___ time you spend preparing, ___ likely you are to succeed.", answer: "The more / the more", meaning: "Más preparación → más probabilidad de éxito" }
          ]
        },
        {
          type: "intensifier-matching",
          instruction: "Empareja cada modificador con su nivel de diferencia",
          items: [
            { modifier: "slightly/marginally", level: "Small difference (5-10%)" },
            { modifier: "somewhat", level: "Moderate difference (15-25%)" },
            { modifier: "considerably/significantly", level: "Large difference (30-50%)" },
            { modifier: "vastly/substantially", level: "Very large difference (50%+)" },
            { modifier: "by far", level: "Biggest difference (with superlatives)" },
            { modifier: "nowhere near as", level: "Emphatic negative (very different)" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma usando la estructura indicada",
          items: [
            { original: "Option A is better than Option B.", structure: "superior to", transformed: "Option A is superior to Option B." },
            { original: "This product is not as good as the competitor's.", structure: "inferior to", transformed: "This product is inferior to the competitor's." },
            { original: "Working remotely is better than commuting.", structure: "preferable to", transformed: "Working remotely is preferable to commuting." },
            { original: "When we analyze more, we understand better.", structure: "double comparative", transformed: "The more we analyze, the better we understand." },
            { original: "This is the best option, by a lot.", structure: "by far", transformed: "This is by far the best option." },
            { original: "This is not even close to as expensive as I thought.", structure: "nowhere near", transformed: "This is nowhere near as expensive as I thought." }
          ]
        },
        {
          type: "precision-practice",
          instruction: "Elige el modificador más preciso para cada contexto",
          items: [
            {
              context: "Sales increased from $1M to $1.05M",
              options: ["significantly higher", "marginally higher", "vastly higher"],
              best: "marginally higher",
              explanation: "5% increase = marginally/slightly"
            },
            {
              context: "Customer satisfaction went from 60% to 95%",
              options: ["slightly better", "somewhat better", "substantially better"],
              best: "substantially better",
              explanation: "35 percentage point improvement = substantially"
            },
            {
              context: "Comparing our product to the market leader",
              options: ["This is the best", "This is by far the best", "This is marginally better"],
              best: "This is by far the best",
              explanation: "'By far' con superlativo para el líder claro"
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Análisis comparativo en reunión estratégica",
        context: "Equipo compara opciones para una decisión importante",
        dialogue: [
          { speaker: "Analyst", text: "Looking at the data, Option A is considerably more cost-effective than Option B. The ROI is significantly higher.", translation: "Mirando los datos, la Opción A es considerablemente más rentable que la Opción B. El ROI es significativamente más alto." },
          { speaker: "Manager", text: "But is it superior to Option C in terms of scalability?", translation: "¿Pero es superior a la Opción C en términos de escalabilidad?" },
          { speaker: "Analyst", text: "Actually, it's nowhere near as scalable as Option C. The more users we add, the less efficient A becomes.", translation: "En realidad, no es ni de lejos tan escalable como la Opción C. Cuantos más usuarios añadimos, menos eficiente se vuelve A." },
          { speaker: "Director", text: "So what's preferable to the alternatives overall?", translation: "Entonces, ¿qué es preferible a las alternativas en general?" },
          { speaker: "Analyst", text: "Option C is by far the best long-term choice. It's marginally more expensive upfront, but the more we scale, the more we save.", translation: "La Opción C es con diferencia la mejor elección a largo plazo. Es marginalmente más cara al principio, pero cuanto más escalamos, más ahorramos." },
          { speaker: "Manager", text: "And the implementation timeline?", translation: "¿Y el cronograma de implementación?" },
          { speaker: "Analyst", text: "Progressively faster once we're past the initial setup. The learning curve gets increasingly manageable.", translation: "Progresivamente más rápido una vez pasamos la configuración inicial. La curva de aprendizaje se vuelve cada vez más manejable." }
        ],
        keyPhrases: [
          { phrase: "considerably more/less", usage: "Diferencia grande" },
          { phrase: "significantly higher/lower", usage: "Diferencia notable" },
          { phrase: "superior/inferior to", usage: "Comparación con 'to'" },
          { phrase: "nowhere near as... as", usage: "Muy diferente (negativo enfático)" },
          { phrase: "by far the best", usage: "Superlativo enfatizado" },
          { phrase: "the more..., the more/less...", usage: "Correlación" },
          { phrase: "increasingly/progressively", usage: "Cambio gradual" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "modifier stress", description: "Comparative modifiers receive emphasis for precision", descriptionEs: "Los modificadores comparativos reciben énfasis para precisión", examples: [{ word: "considerably more", transcription: "/kənˈsɪdərəbli mɔː/" }, { word: "by far the best", transcription: "/baɪ fɑː ðə best/" }], tips: "'By far' gets strong stress; double comparative has rise-fall pattern" }
        ],
        commonProblems: [
          { word: "superior", wrong: "su-pe-RIOR", correct: "/suːˈpɪə.ri.ər/", tip: "soo-PEER-ee-ur" },
          { word: "preferable", wrong: "pre-FER-able", correct: "/ˈpref.ər.ə.bəl/", tip: "PREF-ur-uh-bul" },
          { word: "considerably", wrong: "con-si-DE-ra-bly", correct: "/kənˈsɪd.ər.ə.bli/", tip: "kun-SID-ur-uh-blee" }
        ],
        minimalPairs: [
          { word1: "superior", word2: "inferior", soundDifference: "soo-PEER-ee-ur vs in-FEER-ee-ur" },
          { word1: "considerably", word2: "considerately", soundDifference: "kun-SID-ur-uh-blee vs kun-SID-ur-ut-lee" }
        ],
        intonationPatterns: [
          { pattern: "Emphasis on modifier for precision", example: "It's CONSIDERABLY more expensive.", meaning: "Énfasis en el modificador" },
          { pattern: "Rising on first part of double comparative", example: "The MORE↗ we invest, the MORE↘ we gain.", meaning: "Subida en primera parte, bajada en segunda" },
          { pattern: "Strong stress on 'by far'", example: "This is BY FAR the best option.", meaning: "Énfasis fuerte en 'by far'" }
        ]
      },
      culturalNote: {
        title: "Precision in Business Comparisons",
        titleEs: "Precisión en comparaciones de negocios",
        content: "En contextos anglosajones de negocios, la precisión en comparaciones es valorada. Decir 'marginally better' (5%) vs 'significantly better' (30%+) muestra rigor analítico. Los hablantes nativos usan estos modificadores estratégicamente: 'slightly better' minimiza diferencias, 'vastly superior' las enfatiza. Dominar estos matices te permite comunicar con precisión y persuasión.",
        contentEs: "Los modificadores comparativos transmiten precisión y credibilidad.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "formal"
      },
      consolidationQuiz: [
        {
          question: "'Superior ___' - ¿Cuál es la preposición correcta?",
          options: ["than", "to", "from", "of"],
          correctAnswer: 1,
          explanation: "Superior TO, inferior TO, preferable TO"
        },
        {
          question: "'___ we practice, ___ we improve' - Completa el doble comparativo:",
          options: ["More / more", "The more / the more", "More / the more", "The / the"],
          correctAnswer: 1,
          explanation: "Doble comparativo: The more..., the more..."
        },
        {
          question: "'By far' se usa con:",
          options: ["Comparativos", "Superlativos", "Ambos", "Ninguno"],
          correctAnswer: 1,
          explanation: "By far THE BEST (superlativo), no 'by far better'"
        },
        {
          question: "'Marginally better' indica una diferencia:",
          options: ["Muy grande", "Pequeña", "Negativa", "Inexistente"],
          correctAnswer: 1,
          explanation: "Marginally/slightly = diferencia pequeña"
        },
        {
          question: "'Nowhere near as good as' significa:",
          options: ["Casi tan bueno", "Mucho peor, ni siquiera cerca", "Exactamente igual", "Ligeramente mejor"],
          correctAnswer: 1,
          explanation: "Nowhere near = ni de lejos, enfático negativo"
        },
        {
          question: "'Increasingly difficult' significa:",
          options: ["Siempre difícil", "Cada vez más difícil", "Nunca difícil", "Muy difícil"],
          correctAnswer: 1,
          explanation: "Increasingly = progresivamente más"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un análisis comparando tres opciones de software usando al menos 6 estructuras comparativas avanzadas diferentes",
          sampleResponse: "After evaluating all three options, here's our analysis:\n\nOption A is by far the most affordable upfront, but it's nowhere near as scalable as Options B and C. The more users we add, the more performance degrades.\n\nOption B is considerably more expensive than A, but it's superior to A in terms of features and reliability. However, it's marginally inferior to C in customer support response times.\n\nOption C is preferable to both alternatives for our long-term needs. It's significantly more robust than A and somewhat more flexible than B. The implementation is progressively easier once the initial setup is complete.\n\nIn summary: The more we consider our five-year plan, the more Option C emerges as the clear choice. It's vastly superior for scalability and only slightly more expensive than B when considering total cost of ownership."
        },
        {
          prompt: "Practica usando modificadores de precisión para describir estas diferencias: 5%, 25%, 50%, 200%",
          sampleResponse: "5% difference: 'Sales were slightly higher than last month' or 'The new process is marginally more efficient.'\n\n25% difference: 'Customer satisfaction improved somewhat' or 'Costs are considerably lower than projected.'\n\n50% difference: 'Revenue has increased significantly' or 'The new system is substantially faster.'\n\n200% difference: 'Performance has improved vastly' or 'This approach is incomparably better' or 'Results are exponentially higher.'"
        }
      ],
      connectionToPrevious: "Las comparaciones precisas nos ayudan a contextualizar la magnitud de las crisis.",
      connectionToNext: "Las opiniones matizadas combinarán comparaciones con calificadores y perspectivas múltiples."
    },
    {
      id: 10,
      title: "Expressing Nuanced Opinions",
      titleEs: "Expresando Opiniones Matizadas",
      introduction: {
        title: "💭 Opiniones Matizadas",
        explanation: "Las opiniones del nivel C1+ rara vez son absolutas. Aprenderás a expresar posiciones con los matices apropiados.",
        keyPoints: [
          "Calificación: 'To a certain extent', 'In most cases', 'By and large'",
          "Perspectiva: 'From a financial standpoint', 'In terms of feasibility'",
          "Condiciones: 'Provided that', 'Assuming that', 'Subject to'",
          "Reservas: 'With some reservations', 'Not without its drawbacks'",
          "Balance: 'On the one hand... on the other hand...'"
        ],
        examples: [
          { english: "By and large, I agree with the proposal, though I do have some reservations about the timeline.", spanish: "En general, estoy de acuerdo con la propuesta, aunque tengo algunas reservas sobre el cronograma.", explanation: "Acuerdo con reserva" },
          { english: "From a purely financial standpoint, the merger makes sense, but in terms of company culture, it could be problematic.", spanish: "Desde un punto de vista puramente financiero, la fusión tiene sentido, pero en términos de cultura empresarial, podría ser problemático.", explanation: "Múltiples perspectivas" },
          { english: "I would support this initiative, provided that adequate safeguards are in place.", spanish: "Apoyaría esta iniciativa, siempre que se implementen las salvaguardas adecuadas.", explanation: "Apoyo condicional" }
        ],
        tips: [
          "💡 Los matices muestran pensamiento sofisticado",
          "💡 Evita absolutos como 'always', 'never', 'definitely'",
          "💡 Considera diferentes perspectivas en tu respuesta"
        ],
        whenToUse: [
          "En reuniones de estrategia: \"By and large, I agree with the proposal, though I do have some reservations about the timeline\"",
          "En análisis multidisciplinar: \"From a purely financial standpoint, the merger makes sense, but in terms of company culture, it could be problematic\"",
          "En negociaciones: \"I would support this initiative, provided that adequate safeguards are in place\"",
          "En debates académicos: \"On the one hand... on the other hand...\" para mostrar balance"
        ],
        whenNotToUse: [
          "Cuando se necesita decisión clara → \"By and large, maybe, perhaps\" puede sonar evasivo; en emergencias sé directo",
          "Hedging excesivo → \"Maybe possibly it could perhaps be...\" suena indeciso; uno o dos calificadores bastan",
          "En ventas con evidencia sólida → \"This is definitely the best\" puede ser apropiado; no siempre matizar"
        ]
      },
      objectives: ["Expresar opiniones con matices", "Calificar y condicionar posiciones", "Mostrar múltiples perspectivas"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-hedging", "c2-discourse-cohesion"],
      vocabulary: {
        nouns: [
          { id: "l11t10_n1", word: "reservation", translation: "reserva/duda", type: "noun", definition: "doubt or qualification", definitionEs: "duda o calificación", example: "I have some reservations.", exampleEs: "Tengo algunas reservas.", related: [], difficulty: 2 },
          { id: "l11t10_n2", word: "standpoint", translation: "punto de vista", type: "noun", definition: "perspective", definitionEs: "perspectiva", example: "From my standpoint...", exampleEs: "Desde mi punto de vista...", related: [], difficulty: 2 },
          { id: "l11t10_n3", word: "drawback", translation: "desventaja/inconveniente", type: "noun", definition: "disadvantage", definitionEs: "desventaja", example: "It's not without its drawbacks.", exampleEs: "No está sin sus inconvenientes.", related: [], difficulty: 2 },
        ],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l11t10_e1", word: "By and large", translation: "En general", type: "expression", definition: "mostly", definitionEs: "mayormente", example: "By and large, I agree.", exampleEs: "En general, estoy de acuerdo.", related: [], difficulty: 2 },
          { id: "l11t10_e2", word: "To a certain extent", translation: "Hasta cierto punto", type: "expression", definition: "partially", definitionEs: "parcialmente", example: "To a certain extent, that's true.", exampleEs: "Hasta cierto punto, eso es cierto.", related: [], difficulty: 1 },
          { id: "l11t10_e3", word: "From a [X] standpoint/perspective", translation: "Desde un punto de vista [X]", type: "expression", definition: "from that angle", definitionEs: "desde ese ángulo", example: "From a legal standpoint, this is risky.", exampleEs: "Desde un punto de vista legal, esto es arriesgado.", related: [], difficulty: 1 },
          { id: "l11t10_e4", word: "Provided that / Assuming that", translation: "Siempre que / Asumiendo que", type: "expression", definition: "on condition that", definitionEs: "con la condición de que", example: "Provided that we have the budget, I agree.", exampleEs: "Siempre que tengamos el presupuesto, estoy de acuerdo.", related: [], difficulty: 1 },
          { id: "l11t10_e5", word: "With some reservations", translation: "Con algunas reservas", type: "expression", definition: "not completely", definitionEs: "no completamente", example: "I support this, with some reservations.", exampleEs: "Apoyo esto, con algunas reservas.", related: [], difficulty: 1 },
          { id: "l11t10_e6", word: "On the one hand... on the other hand", translation: "Por un lado... por otro lado", type: "expression", definition: "contrasting views", definitionEs: "vistas contrastantes", example: "On the one hand, it's efficient; on the other, it's expensive.", exampleEs: "Por un lado, es eficiente; por otro, es caro.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t10_cm1", wrong: "Using absolutes: 'This is definitely the best option'", correct: "'This appears to be the strongest option, from a [X] perspective'", explanation: "Absolutes seem naive; nuance shows sophisticated thinking", explanationEs: "Los absolutos parecen naïve; los matices muestran pensamiento sofisticado", category: "usage" },
        { id: "l11t10_cm2", wrong: "Only presenting one side: 'Remote work is great'", correct: "'By and large, remote work has benefits, though it's not without its challenges'", explanation: "Considering multiple perspectives shows intellectual maturity", explanationEs: "Considerar múltiples perspectivas muestra madurez intelectual", category: "usage" },
        { id: "l11t10_cm3", wrong: "'In my opinion' at the start of every sentence", correct: "Vary with: 'From my perspective', 'I would argue that', 'It seems to me'", explanation: "Vary expressions to avoid repetition", explanationEs: "Varía las expresiones para evitar repetición", category: "usage" },
        { id: "l11t10_cm4", wrong: "Hedging too much (losing assertiveness): 'Maybe possibly it could perhaps be...'", correct: "One or two qualifiers is enough: 'This could potentially be effective'", explanation: "Too much hedging seems indecisive; find the balance", explanationEs: "Demasiado hedging parece indeciso; encuentra el equilibrio", category: "usage" },
        { id: "l11t10_cm5", wrong: "'From a financial point of view' (redundant)", correct: "'From a financial standpoint' or 'Financially speaking'", explanation: "'Standpoint' or 'perspective' is enough; avoid 'point of view'", explanationEs: "'Standpoint' o 'perspective' es suficiente; evita 'point of view'", category: "usage" }
      ],
      exercises: [
        {
          type: "nuance-addition",
          instruction: "Convierte estas opiniones absolutas en versiones matizadas",
          items: [
            {
              absolute: "Remote work is better than office work.",
              nuanced: "By and large, remote work offers significant advantages, though it's not without its drawbacks, particularly in terms of spontaneous collaboration."
            },
            {
              absolute: "We should definitely expand to Asia.",
              nuanced: "From a growth perspective, expanding to Asia appears promising, provided that we have adequate local expertise and resources in place."
            },
            {
              absolute: "AI will replace all jobs.",
              nuanced: "To a certain extent, AI will transform the job market, though the extent and timeline remain subjects of debate. In most cases, it's likely to augment rather than fully replace human work."
            },
            {
              absolute: "This project will succeed.",
              nuanced: "Given the current indicators, this project has strong potential for success, assuming that key risks are managed effectively."
            }
          ]
        },
        {
          type: "perspective-switching",
          instruction: "Expresa la misma opinión desde diferentes perspectivas",
          topic: "Should companies require employees to return to office?",
          perspectives: [
            { perspective: "Financial standpoint", example: "From a financial standpoint, reducing office space could yield significant savings, though the impact on productivity remains uncertain." },
            { perspective: "Employee wellbeing", example: "In terms of employee wellbeing, flexibility appears beneficial, though some employees report feeling isolated without regular in-person interaction." },
            { perspective: "Company culture", example: "From a cultural perspective, in-person work may strengthen team bonds, though hybrid models are increasingly showing they can maintain culture remotely." },
            { perspective: "Innovation", example: "With respect to innovation, there's debate about whether spontaneous office interactions drive creativity or whether focused remote work produces better outcomes." }
          ]
        },
        {
          type: "conditional-support",
          instruction: "Expresa apoyo condicional usando las estructuras aprendidas",
          items: [
            {
              statement: "Support for new software system",
              conditional: "I would support implementing the new system, provided that adequate training is provided and assuming that the vendor commits to 24/7 support."
            },
            {
              statement: "Agreement with budget increase",
              conditional: "By and large, I support the budget increase, with some reservations about the timeline. Subject to approval from legal, I think we should proceed."
            },
            {
              statement: "Endorsement of merger",
              conditional: "From a strategic standpoint, this merger appears promising, though not without risks. Assuming due diligence confirms the financials, I would recommend moving forward."
            }
          ]
        },
        {
          type: "balanced-argument",
          instruction: "Construye un argumento balanceado usando 'on the one hand... on the other'",
          topics: [
            {
              topic: "Hiring externally vs. promoting internally",
              balanced: "On the one hand, external hires bring fresh perspectives and skills we may lack internally. On the other hand, promoting from within rewards loyalty and maintains institutional knowledge. By and large, a balanced approach—favoring internal promotion while strategically hiring externally for specialized roles—seems preferable."
            },
            {
              topic: "Investing in AI vs. human workforce",
              balanced: "On the one hand, AI investments can dramatically improve efficiency and reduce costs in repetitive tasks. On the other hand, human judgment remains superior in complex, nuanced situations. To a certain extent, framing this as either/or may be misleading; the most effective approach likely involves strategic integration of both."
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Discusión de estrategia con opiniones matizadas",
        context: "Equipo ejecutivo discute una decisión compleja con múltiples perspectivas",
        dialogue: [
          { speaker: "CEO", text: "I'd like to hear everyone's thoughts on the proposed acquisition. Let's aim for nuanced perspectives, not just yes or no.", translation: "Me gustaría escuchar los pensamientos de todos sobre la adquisición propuesta. Apuntemos a perspectivas matizadas, no solo sí o no." },
          { speaker: "CFO", text: "From a financial standpoint, the numbers are attractive, though not without concerns. The synergies projected seem optimistic, by and large.", translation: "Desde un punto de vista financiero, los números son atractivos, aunque no sin preocupaciones. Las sinergias proyectadas parecen optimistas, en general." },
          { speaker: "COO", text: "I support this, with some reservations. In terms of operational integration, we have experience, but each acquisition presents unique challenges.", translation: "Apoyo esto, con algunas reservas. En términos de integración operacional, tenemos experiencia, pero cada adquisición presenta desafíos únicos." },
          { speaker: "CMO", text: "On the one hand, their brand strengthens our market position. On the other hand, there could be customer confusion during the transition.", translation: "Por un lado, su marca fortalece nuestra posición de mercado. Por otro lado, podría haber confusión del cliente durante la transición." },
          { speaker: "CTO", text: "From a technology perspective, their platform is superior to ours in certain areas. Provided that we can retain their key engineers, the acquisition makes sense.", translation: "Desde una perspectiva tecnológica, su plataforma es superior a la nuestra en ciertas áreas. Siempre que podamos retener a sus ingenieros clave, la adquisición tiene sentido." },
          { speaker: "CEO", text: "So, to summarize: there's cautious support, assuming key conditions are met. Any deal-breakers?", translation: "Entonces, para resumir: hay apoyo cauteloso, asumiendo que se cumplan las condiciones clave. ¿Algún impedimento definitivo?" },
          { speaker: "CHRO", text: "To a certain extent, the culture fit concerns me. In most cases, culture clashes derail acquisitions more than financials. Subject to a thorough cultural assessment, I'm supportive.", translation: "Hasta cierto punto, la compatibilidad cultural me preocupa. En la mayoría de los casos, los choques culturales descarrilan las adquisiciones más que las finanzas. Sujeto a una evaluación cultural exhaustiva, estoy de acuerdo." }
        ],
        keyPhrases: [
          { phrase: "From a [X] standpoint/perspective", usage: "Especificando el ángulo" },
          { phrase: "though not without concerns", usage: "Calificando una posición positiva" },
          { phrase: "by and large", usage: "Generalizando con reservas" },
          { phrase: "with some reservations", usage: "Apoyo calificado" },
          { phrase: "On the one hand... on the other hand", usage: "Balanceando perspectivas" },
          { phrase: "Provided that / Assuming that", usage: "Soporte condicional" },
          { phrase: "To a certain extent", usage: "Acuerdo parcial" },
          { phrase: "Subject to", usage: "Dependiendo de una condición" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "balanced rhythm", description: "Thoughtful pauses before qualifiers; even tone for nuance", descriptionEs: "Pausas reflexivas antes de calificadores; tono equilibrado para matices", examples: [{ word: "with some reservations", transcription: "/wɪð sʌm ˌrezəˈveɪʃənz/" }, { word: "by and large", transcription: "/baɪ ənd lɑːdʒ/" }], tips: "Rising on 'on the one hand', falling on 'on the other' creates contrast" }
        ],
        commonProblems: [
          { word: "reservation", wrong: "re-ser-VA-tion", correct: "/ˌrez.əˈveɪ.ʃən/", tip: "rez-ur-VAY-shun" },
          { word: "perspective", wrong: "pers-PEC-tive", correct: "/pəˈspek.tɪv/", tip: "pur-SPEK-tiv" },
          { word: "standpoint", wrong: "stand-POINT", correct: "/ˈstænd.pɔɪnt/", tip: "STAND-point" }
        ],
        minimalPairs: [
          { word1: "reservation", word2: "preservation", soundDifference: "rez-ur-VAY-shun vs prez-ur-VAY-shun" },
          { word1: "perspective", word2: "prospective", soundDifference: "pur-SPEK-tiv vs pruh-SPEK-tiv" }
        ],
        intonationPatterns: [
          { pattern: "Thoughtful pauses before qualifiers", example: "I support this... [pause] ...with some reservations.", meaning: "Pausas muestran consideración" },
          { pattern: "Rising on 'on the one hand', falling on 'on the other'", example: "On the one hand↗... on the other hand↘...", meaning: "Contraste con entonación" },
          { pattern: "Even, measured tone for balanced opinions", example: "By and large→, I agree→.", meaning: "Tono equilibrado para opiniones balanceadas" }
        ]
      },
      culturalNote: {
        title: "Nuance in Professional Discourse",
        titleEs: "Los matices en el discurso profesional",
        content: "En culturas empresariales anglosajonas, especialmente en niveles ejecutivos, las opiniones matizadas son valoradas sobre las posiciones absolutas. Decir 'definitely' o 'absolutely' puede parecer ingenuo o inflexible. Los líderes respetados usan calificadores ('to a certain extent', 'by and large') que muestran que han considerado múltiples perspectivas. Sin embargo, demasiados calificadores pueden parecer indecisos. El equilibrio es clave.",
        contentEs: "Los matices muestran madurez intelectual; el exceso parece indecisión.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "semi-formal to formal"
      },
      consolidationQuiz: [
        {
          question: "'By and large' significa:",
          options: ["Definitivamente", "En general / mayormente", "Nunca", "Siempre"],
          correctAnswer: 1,
          explanation: "By and large = en general, con algunas excepciones"
        },
        {
          question: "'I support this, with some reservations' expresa:",
          options: ["Total desacuerdo", "Apoyo incondicional", "Apoyo calificado con dudas", "Indiferencia"],
          correctAnswer: 2,
          explanation: "Apoya pero tiene algunas dudas o preocupaciones"
        },
        {
          question: "'From a financial standpoint' se usa para:",
          options: ["Cambiar de tema", "Especificar desde qué perspectiva hablas", "Terminar la conversación", "Pedir dinero"],
          correctAnswer: 1,
          explanation: "Especifica el ángulo desde el cual estás opinando"
        },
        {
          question: "'Provided that' introduce:",
          options: ["Una conclusión", "Una condición", "Un ejemplo", "Una pregunta"],
          correctAnswer: 1,
          explanation: "Provided that = siempre que, con la condición de que"
        },
        {
          question: "Usar muchos absolutos ('definitely', 'always', 'never') puede parecer:",
          options: ["Sofisticado", "Ingenuo o inflexible", "Profesional", "Interesante"],
          correctAnswer: 1,
          explanation: "Los líderes maduros usan matices, no absolutos"
        },
        {
          question: "'To a certain extent' significa:",
          options: ["Completamente", "Nunca", "Parcialmente / hasta cierto punto", "Definitivamente no"],
          correctAnswer: 2,
          explanation: "Indica acuerdo o verdad parcial"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un párrafo dando tu opinión matizada sobre un tema controvertido usando al menos 5 expresiones de matiz diferentes",
          topic: "Should companies monitor employee productivity when working remotely?",
          sampleResponse: "By and large, I understand the impulse behind productivity monitoring, though I have some reservations about its implementation. From an operational standpoint, having visibility into work patterns can help identify bottlenecks and support struggling employees. On the one hand, accountability matters; on the other hand, excessive monitoring can erode trust and autonomy.\n\nTo a certain extent, the answer depends on company culture and the nature of the work. In most cases, I would argue that outcome-based measurement is preferable to activity monitoring. Provided that clear expectations are set and results are tracked, the need for surveillance diminishes.\n\nSubject to appropriate privacy safeguards, light-touch monitoring may be acceptable. However, I would support this approach only with some reservations about how the data is used and who has access to it. From an employee wellbeing perspective, the psychological impact of feeling constantly watched shouldn't be underestimated."
        },
        {
          prompt: "Practica expresar la misma opinión desde 3 perspectivas diferentes (financiera, de empleados, de clientes)",
          topic: "Reducing prices to gain market share",
          sampleResponse: "FINANCIAL PERSPECTIVE:\nFrom a financial standpoint, reducing prices could significantly impact margins in the short term, though it may drive volume that compensates. Provided that we maintain profitability above [X]%, this strategy appears viable.\n\nEMPLOYEE PERSPECTIVE:\nIn terms of employee impact, aggressive pricing could create pressure to cut costs elsewhere, potentially affecting compensation or headcount. By and large, staff would support growth strategies, but with some reservations about sustainability.\n\nCUSTOMER PERSPECTIVE:\nFrom a customer standpoint, lower prices would undoubtedly be welcome. However, to a certain extent, customers also value quality and service. Assuming that we maintain our value proposition, the price reduction should strengthen loyalty rather than commoditize our offering."
        }
      ],
      connectionToPrevious: "Las comparaciones avanzadas nos ayudan a expresar opiniones con precisión y matices.",
      connectionToNext: "En la última lección, especularás sobre el futuro, la ciencia ficción y la IA usando estructuras hipotéticas avanzadas."
    },
    {
      id: 11,
      title: "Science Fiction and the Future",
      titleEs: "Ciencia Ficción y el Futuro",
      introduction: {
        title: "🚀 Ciencia Ficción y el Futuro",
        explanation: "Especular sobre el futuro, discutir conceptos de ciencia ficción y debatir sobre IA requiere estructuras hipotéticas avanzadas y vocabulario especializado. Aprenderás a imaginar escenarios futuros y discutir tecnologías emergentes.",
        keyPoints: [
          "Escenarios: 'dystopia', 'utopia', 'simulation'",
          "Tecnología: 'artificial intelligence', 'cyborg', 'hologram'",
          "Conceptos: 'singularity', 'terraforming', 'quantum'",
          "Filosofía: 'consciousness', 'consciousness'"
        ],
        examples: [
          { english: "If we had developed AI differently, we might have avoided the singularity.", spanish: "Si hubiéramos desarrollado la IA de otra forma, quizás habríamos evitado la singularidad.", explanation: "Condicional mixto" },
          { english: "A dystopia is the opposite of a utopia.", spanish: "Una distopía es lo opuesto a una utopía.", explanation: "Conceptos contrastantes" },
          { english: "Were we living in a simulation, we would never know.", spanish: "Si viviéramos en una simulación, nunca lo sabríamos.", explanation: "Inversión hipotética" }
        ],
        tips: [
          "💡 'Dystopia' = sociedad futura negativa; 'utopia' = sociedad ideal",
          "💡 'Singularity' = momento cuando la IA supera la inteligencia humana",
          "💡 'Terraforming' = hacer un planeta habitable"
        ],
        whenToUse: ["Al especular sobre el futuro", "En discusiones sobre IA y tecnología", "Cuando hablas de ciencia ficción", "Al debatir escenarios hipotéticos"],
        whenNotToUse: ["No uses 'cyborg' para cualquier persona con tecnología — implica fusión humano-máquina", "Evita 'singularity' sin contexto — explica el concepto", "No confundas 'quantum' (física) con 'magic'"]
      },
      objectives: ["Especular sobre el futuro", "Discutir conceptos de ciencia ficción", "Debatir sobre IA y humanidad"],
      grammarTheoryIds: ["c1-mixed-conditionals-advanced", "c1-inversion"],
      estimatedMinutes: 40,
      vocabulary: {
        nouns: [
          { id: "l11t11_n1", word: "dystopia", translation: "distopía", type: "noun", definition: "imagined society where things are bad", definitionEs: "sociedad imaginada donde las cosas son malas", example: "The novel depicts a dystopia.", exampleEs: "La novela describe una distopía.", related: ["dystopian"], difficulty: 2 },
          { id: "l11t11_n2", word: "utopia", translation: "utopía", type: "noun", definition: "imagined perfect society", definitionEs: "sociedad perfecta imaginada", example: "A utopia may be impossible to achieve.", exampleEs: "Una utopía puede ser imposible de lograr.", related: ["utopian"], difficulty: 2 },
          { id: "l11t11_n3", word: "artificial intelligence", translation: "inteligencia artificial", type: "noun", definition: "machine intelligence", definitionEs: "inteligencia de máquina", example: "Artificial intelligence is transforming industries.", exampleEs: "La inteligencia artificial está transformando industrias.", related: ["AI"], difficulty: 1 },
          { id: "l11t11_n4", word: "singularity", translation: "singularidad", type: "noun", definition: "hypothetical moment when AI surpasses human intelligence", definitionEs: "momento hipotético cuando la IA supera la inteligencia humana", example: "The singularity could change everything.", exampleEs: "La singularidad podría cambiarlo todo.", related: [], difficulty: 2 },
          { id: "l11t11_n5", word: "cyborg", translation: "cyborg", type: "noun", definition: "being part human, part machine", definitionEs: "ser parte humano, parte máquina", example: "Cyborgs appear in many sci-fi stories.", exampleEs: "Los cyborgs aparecen en muchas historias de ciencia ficción.", related: [], difficulty: 2 },
          { id: "l11t11_n6", word: "hologram", translation: "holograma", type: "noun", definition: "three-dimensional image", definitionEs: "imagen tridimensional", example: "The concert featured hologram performers.", exampleEs: "El concierto presentó artistas holograma.", related: [], difficulty: 1 },
          { id: "l11t11_n7", word: "terraforming", translation: "terraformación", type: "noun", definition: "making a planet habitable", definitionEs: "hacer un planeta habitable", example: "Terraforming Mars may take centuries.", exampleEs: "Terraformar Marte puede tomar siglos.", related: [], difficulty: 2 },
          { id: "l11t11_n8", word: "simulation", translation: "simulación", type: "noun", definition: "imitation of reality", definitionEs: "imitación de la realidad", example: "What if we're living in a simulation?", exampleEs: "¿Qué tal si vivimos en una simulación?", related: ["simulate"], difficulty: 1 },
          { id: "l11t11_n9", word: "consciousness", translation: "consciencia", type: "noun", definition: "awareness of self and surroundings", definitionEs: "consciencia de uno mismo y el entorno", example: "Does AI have consciousness?", exampleEs: "¿La IA tiene consciencia?", related: ["conscious"], difficulty: 2 }
        ],
        verbs: [],
        adjectives: [
          { id: "l11t11_a1", word: "quantum", translation: "cuántico", type: "adjective", definition: "related to quantum physics", definitionEs: "relacionado con física cuántica", example: "Quantum computing could revolutionize encryption.", exampleEs: "La computación cuántica podría revolucionar la encriptación.", related: [], difficulty: 2 }
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t11_cm1", wrong: "Utopia = good place (etymology)", correct: "Utopia = 'no place' (Greek) — imagined ideal; often used ironically", explanation: "Utopia comes from Greek 'no place' — imagined ideal place", explanationEs: "Utopia viene del griego 'no lugar' — lugar ideal imaginado", category: "vocabulary" },
        { id: "l11t11_cm2", wrong: "If we would have developed AI...", correct: "If we had developed AI... / Had we developed AI...", explanation: "In past conditionals, don't use 'would have' in the if clause", explanationEs: "En condicionales del pasado, no uses 'would have' en la cláusula if", category: "grammar" },
        { id: "l11t11_cm3", wrong: "AI has consciousness", correct: "AI may have / might have / could have consciousness (we don't know)", explanation: "Consciousness in AI is an open debate; use language of possibility", explanationEs: "La consciencia en IA es un debate abierto; usa lenguaje de posibilidad", category: "usage" },
        { id: "l11t11_cm4", wrong: "Quantum = magic or very advanced", correct: "Quantum = related to quantum physics (specific scientific meaning)", explanation: "Quantum has a precise scientific meaning; don't use for 'very advanced'", explanationEs: "Quantum tiene significado científico preciso; no uses para 'muy avanzado'", category: "vocabulary" },
        { id: "l11t11_cm5", wrong: "Singularity = any AI advancement", correct: "Singularity = specific moment when AI surpasses human intelligence", explanation: "Singularity is a technical concept, not any AI advancement", explanationEs: "Singularity es un concepto técnico, no cualquier avance de IA", category: "vocabulary" }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con vocabulario de ciencia ficción:",
          items: [
            { sentence: "A ___ is an imagined society where everything has gone wrong.", answer: "dystopia", hint: "sociedad futura negativa" },
            { sentence: "The ___ could occur when AI surpasses human intelligence.", answer: "singularity", hint: "momento hipotético" },
            { sentence: "___ Mars would require changing its atmosphere.", answer: "Terraforming", hint: "hacer habitable" },
            { sentence: "___ computing could solve problems impossible for classical computers.", answer: "Quantum", hint: "física cuántica" },
            { sentence: "Does artificial intelligence have ___?", answer: "consciousness", hint: "consciencia" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica los conceptos:",
          categories: [
            { name: "Sociedades imaginadas", items: ["dystopia", "utopia"] },
            { name: "Tecnología/IA", items: ["artificial intelligence", "singularity", "cyborg", "hologram", "quantum"] },
            { name: "Conceptos abstractos", items: ["simulation", "consciousness", "terraforming"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Reformula usando estructuras hipotéticas avanzadas:",
          items: [
            { original: "Maybe we live in a computer program.", transformed: "Were we living in a simulation, we would have no way to know." },
            { original: "AI could become smarter than humans.", transformed: "Had AI reached the singularity, it might have surpassed human intelligence." },
            { original: "We might colonize Mars someday.", transformed: "If we were to terraform Mars, it would take centuries." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa el debate sobre IA y el futuro:",
          items: [
            { sentence: "Do you think AI will ever achieve ___?", answer: "consciousness", hint: "consciencia" },
            { sentence: "If we had known the risks, we ___ have developed it differently.", answer: "might/would", hint: "condicional pasado" },
            { sentence: "Some fear a ___ where machines control everything.", answer: "dystopia", hint: "sociedad negativa" },
            { sentence: "___ computing could make current encryption obsolete.", answer: "Quantum", hint: "cuántico" },
            { sentence: "The ___ remains a controversial concept.", answer: "singularity", hint: "momento de superación" }
          ]
        }
      ],
      modelDialogue: {
        title: "Debate sobre IA y el futuro de la humanidad",
        context: "Dos amigos debaten sobre inteligencia artificial y el futuro.",
        dialogue: [
          { speaker: "Taylor", text: "Do you think artificial intelligence will eventually reach the singularity?", translation: "¿Crees que la inteligencia artificial eventualmente alcanzará la singularidad?" },
          { speaker: "Morgan", text: "If we had been more careful from the start, we might have avoided some of the risks. But now? It's hard to say. Were AI to achieve human-level consciousness, everything would change.", translation: "Si hubiéramos sido más cuidadosos desde el principio, quizás habríamos evitado algunos riesgos. ¿Pero ahora? Es difícil decir. Si la IA alcanzara consciencia a nivel humano, todo cambiaría." },
          { speaker: "Taylor", text: "Some people think we're already living in a simulation. What if none of this is real?", translation: "Algunos creen que ya vivimos en una simulación. ¿Qué tal si nada de esto es real?" },
          { speaker: "Morgan", text: "That's a classic sci-fi question. Whether we're in a simulation or not, we still have to deal with the present. The real debate is about dystopia vs utopia — will AI lead us to a better world or a worse one?", translation: "Esa es una pregunta clásica de ciencia ficción. Ya sea que estemos en una simulación o no, aún tenemos que lidiar con el presente. El verdadero debate es distopía vs utopía — ¿la IA nos llevará a un mundo mejor o peor?" },
          { speaker: "Taylor", text: "Quantum computing could accelerate AI development. And terraforming — that's centuries away, but it's no longer pure fiction.", translation: "La computación cuántica podría acelerar el desarrollo de la IA. Y la terraformación — está a siglos de distancia, pero ya no es pura ficción." },
          { speaker: "Morgan", text: "True. The future is both exciting and terrifying. Holograms, cyborgs, consciousness in machines — we're writing that story now.", translation: "Cierto. El futuro es emocionante y aterrador. Hologramas, cyborgs, consciencia en máquinas — estamos escribiendo esa historia ahora." }
        ],
        keyPhrases: [
          { phrase: "artificial intelligence", usage: "IA" },
          { phrase: "the singularity", usage: "Momento cuando IA supera humanos" },
          { phrase: "Were we to... / Had we...", usage: "Estructuras hipotéticas formales" },
          { phrase: "dystopia vs utopia", usage: "Escenarios futuros contrastantes" },
          { phrase: "living in a simulation", usage: "Hipótesis filosófica" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: "speculative intonation", description: "Rising tone for hypotheticals; inversion creates formal speculation", descriptionEs: "Tono ascendente para hipotéticos; inversión crea especulación formal", examples: [{ word: "Were we to consider", transcription: "/wɜː wiː tə kənˈsɪdə/" }, { word: "Had we known", transcription: "/hæd wiː nəʊn/" }], tips: "C2: Inversion (Were/Had + subject) signals formal hypothetical; elision in fast speech" }
        ],
        commonProblems: [
          { word: "singularity", wrong: "sin-gu-LAR-i-ty", correct: "/ˌsɪŋɡjəˈlærəti/", tip: "sing-yu-LAR-i-ty" },
          { word: "terraforming", wrong: "terra-FORM-ing", correct: "/ˈterəfɔːrmɪŋ/", tip: "TER-ra-form-ing" },
          { word: "consciousness", wrong: "con-SCIOUS-ness", correct: "/ˈkɒnʃəsnəs/", tip: "CON-shus-ness" }
        ],
        minimalPairs: [
          { word1: "singularity", word2: "singular", soundDifference: "sing-yu-LAR-i-ty vs SING-yu-lur" },
          { word1: "consciousness", word2: "conscience", soundDifference: "CON-shus-ness vs CON-shuns" }
        ],
        intonationPatterns: [
          { pattern: "Hypothetical tone for speculation", example: "Were we to... Had we...", meaning: "Inversión para énfasis hipotético" },
          { pattern: "Rising for open questions about future", example: "What if...? Could it be that...?", meaning: "Preguntas especulativas" }
        ]
      },
      culturalNote: {
        title: "Science Fiction and Future Discourse",
        titleEs: "Ciencia ficción y discurso sobre el futuro",
        content: "En cultura anglosajona, la ciencia ficción tiene una tradición fuerte (Asimov, Clarke, Philip K. Dick). Conceptos como 'singularity' (Kurzweil), 'simulation hypothesis' (Bostrom) aparecen en debates serios. La discusión sobre IA y consciencia mezcla filosofía, tecnología y ética. Usar condicionales mixtos e inversión ('Had we known...', 'Were it to happen...') muestra sofisticación en especulación hipotética.",
        contentEs: "La ciencia ficción anglosajona influye en el discurso sobre tecnología y futuro.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "semi-formal to formal"
      },
      consolidationQuiz: [
        {
          question: "'Singularity' en contexto de IA significa:",
          options: ["Un evento único", "Momento cuando la IA supera la inteligencia humana", "Un agujero negro", "Tecnología muy avanzada"],
          correctAnswer: 1,
          explanation: "Singularity = momento hipotético de superinteligencia"
        },
        {
          question: "En condicional del pasado: 'If we ___ known, we would have acted differently'",
          options: ["would have", "had", "have", "would"],
          correctAnswer: 1,
          explanation: "If + past perfect (had known), no 'would have'"
        },
        {
          question: "'Terraforming' se refiere a:",
          options: ["Formar tierra", "Hacer un planeta habitable para humanos", "Cultivar plantas", "Construir edificios"],
          correctAnswer: 1,
          explanation: "Terraforming = transformar un planeta para hacerlo habitable"
        },
        {
          question: "'Dystopia' es lo opuesto de:",
          options: ["Distopía", "Utopía", "Topía", "Atopía"],
          correctAnswer: 1,
          explanation: "Dystopia = sociedad mala; utopia = sociedad ideal"
        },
        {
          question: "'Were we living in a simulation' usa:",
          options: ["Condicional normal", "Inversión (subject-verb) para énfasis hipotético", "Pasado simple", "Futuro"],
          correctAnswer: 1,
          explanation: "Inversión: Were we + infinitive = If we were..."
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un párrafo especulando sobre el futuro de la IA usando condicionales mixtos e inversión",
          sampleResponse: "Had we developed artificial intelligence with different priorities, we might have avoided some of the ethical dilemmas we face today. The singularity remains a controversial concept — were it to occur, everything we know about work, creativity, and even consciousness would be challenged. Some argue we're already living in a simulation; if that were true, our entire understanding of reality would shift. Terraforming Mars seems like science fiction, but quantum computing could accelerate such projects. The future could be a utopia or a dystopia — we're deciding which with every choice we make now."
        },
        {
          prompt: "Debate: ¿La IA puede tener consciencia? Usa el vocabulario de la lección.",
          sampleResponse: "The question of whether artificial intelligence can achieve consciousness is one of the most debated in philosophy and technology. If we define consciousness as subjective experience, we have no way to measure it in machines. Were an AI to claim it was conscious, we couldn't verify it — we can't even verify consciousness in other humans. The singularity, whenever it comes, would force us to confront this. A dystopia might be one where we create beings we can't understand; a utopia might be one where we coexist. For now, it remains speculation — but the vocabulary we use shapes how we think about it."
        }
      ],
      connectionToPrevious: "Las opiniones matizadas son esenciales al debatir el futuro — 'It could be argued that...', 'From one perspective...'",
      connectionToNext: "¡Felicidades! Has completado el Level 11. Dominas la comunicación ejecutiva avanzada, incluyendo especulación sobre el futuro y la tecnología."
    },
    {
      id: 12,
      title: "Literature and Language",
      titleEs: "Literatura y Lenguaje",
      introduction: {
        title: "📚 Literatura y el Poder del Lenguaje",
        explanation: "En inglés C2 puedes analizar textos literarios, discutir el papel del lenguaje en la sociedad y usar metalenguaje sofisticado.",
        keyPoints: [
          "Análisis: 'The author employs...', 'This passage evokes...', 'The use of X serves to...'",
          "Interpretación: 'One reading of this would be...', 'It could be argued that the text subverts...'",
          "Contexto: 'Writing against the backdrop of...', 'Informed by the socio-political circumstances of the era...'",
          "Evaluación: 'The novel succeeds in...', 'The narrative falls short of...', 'What distinguishes X from Y is...'"
        ],
        examples: [
          { english: "The author employs unreliable narration to destabilise the reader's assumptions.", spanish: "El autor emplea la narración no fiable para desestabilizar las suposiciones del lector.", explanation: "Análisis de técnica narrativa" },
          { english: "Writing against the backdrop of colonial expansion, Conrad's work reflects the ideological contradictions of his era.", spanish: "Escribiendo en el contexto de la expansión colonial, la obra de Conrad refleja las contradicciones ideológicas de su era.", explanation: "Contextualización histórica" },
          { english: "What distinguishes Woolf's prose is its capacity to render consciousness in flux.", spanish: "Lo que distingue la prosa de Woolf es su capacidad para representar la conciencia en flujo.", explanation: "Evaluación con estructura cleft" }
        ],
        tips: [
          "💡 'Subvert' (subvertir) implica que el texto cuestiona normas establecidas",
          "💡 'Evoke' es más sofisticado que 'create' al describir efectos literarios",
          "💡 Usa el presente histórico al analizar literatura: 'The narrator tells us...'"
        ],
        whenToUse: ["En ensayos literarios o crítica cultural", "En conversaciones sobre libros, cine o arte", "Al analizar el uso del lenguaje en cualquier contexto"],
        whenNotToUse: ["Evita el metalenguaje académico en conversaciones casuales sobre libros", "No uses 'the author employs' en una reseña informal — suena artificial"]
      },
      objectives: ["Analizar textos con metalenguaje literario", "Contextualizar obras en su entorno sociohistórico", "Expresar interpretaciones con razonamiento crítico C2"],
      grammarTheoryIds: ["c1-nominalization", "c2-vague-language", "c1-distancing-language"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l11t12_n1", word: "motif", translation: "motivo (literario)", type: "noun", definition: "a recurring theme or element in literature", definitionEs: "tema o elemento recurrente en la literatura", example: "The motif of exile runs through the entire novel.", exampleEs: "El motivo del exilio recorre toda la novela.", related: [], difficulty: 3 },
          { id: "l11t12_n2", word: "allegory", translation: "alegoría", type: "noun", definition: "a story with a hidden symbolic meaning", definitionEs: "historia con significado simbólico oculto", example: "Animal Farm is an allegory of Soviet totalitarianism.", exampleEs: "Rebelión en la granja es una alegoría del totalitarismo soviético.", related: ["allegorical"], difficulty: 3 },
          { id: "l11t12_n3", word: "narrative voice", translation: "voz narrativa", type: "noun", definition: "the perspective from which a story is told", definitionEs: "la perspectiva desde la que se cuenta una historia", example: "The unreliable narrative voice creates ambiguity.", exampleEs: "La voz narrativa no fiable crea ambigüedad.", related: [], difficulty: 3 },
        ],
        verbs: [
          { id: "l11t12_v1", word: "evoke", translation: "evocar", type: "verb", definition: "to bring to mind a feeling or image", definitionEs: "traer a la mente un sentimiento o imagen", example: "The description evokes a sense of loss.", exampleEs: "La descripción evoca un sentimiento de pérdida.", related: ["evocative"], difficulty: 2 },
          { id: "l11t12_v2", word: "subvert", translation: "subvertir", type: "verb", definition: "to undermine or challenge established norms", definitionEs: "minar o cuestionar normas establecidas", example: "The novel subverts traditional gender roles.", exampleEs: "La novela subvierte los roles de género tradicionales.", related: [], difficulty: 3 },
        ],
        adjectives: [
          { id: "l11t12_a1", word: "elliptical", translation: "elíptico", type: "adjective", definition: "deliberately obscure or ambiguous", definitionEs: "deliberadamente oscuro o ambiguo", example: "Pinter's elliptical dialogue leaves much unsaid.", exampleEs: "El diálogo elíptico de Pinter deja mucho sin decir.", related: [], difficulty: 3 },
          { id: "l11t12_a2", word: "poignant", translation: "conmovedor/punzante", type: "adjective", definition: "evoking sadness or regret", definitionEs: "que evoca tristeza o arrepentimiento", example: "The final scene is deeply poignant.", exampleEs: "La escena final es profundamente conmovedora.", related: [], difficulty: 3 },
        ],
        expressions: [
          { id: "l11t12_e1", word: "writing against the backdrop of", translation: "escribiendo en el contexto de", type: "expression", definition: "in the context of a particular historical/social situation", definitionEs: "en el contexto de una situación histórica/social particular", example: "Writing against the backdrop of WWI, Owen exposes the reality of trench warfare.", exampleEs: "Escribiendo en el contexto de la Primera Guerra Mundial, Owen expone la realidad de la guerra de trincheras.", related: [], difficulty: 3 },
          { id: "l11t12_e2", word: "what distinguishes X is", translation: "lo que distingue a X es", type: "expression", definition: "a cleft structure used for emphasis in literary analysis", definitionEs: "estructura escindida usada para énfasis en análisis literario", example: "What distinguishes Orwell's prose is its deceptive simplicity.", exampleEs: "Lo que distingue la prosa de Orwell es su deceptiva sencillez.", related: [], difficulty: 3 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l11t12_cm1", wrong: "The author wants to show that society is corrupt.", correct: "The author appears to suggest / the text implies that society is morally compromised.", explanation: "In literary analysis, attributing intentions to the author requires hedging ('appears to', 'seems to'). Use 'the text implies' for greater distance.", explanationEs: "En análisis literario, atribuir intenciones al autor requiere hedging ('appears to', 'seems to'). Usa 'the text implies' para mayor distanciamiento.", category: "usage" },
        { id: "l11t12_cm2", wrong: "This book talks about loneliness.", correct: "The novel explores the theme of isolation and its psychological consequences.", explanation: "Use more specific vocabulary: 'explores', 'examines', 'interrogates'. And 'isolation' / 'estrangement' are more precise than 'loneliness'.", explanationEs: "Usa vocabulario más específico: 'explores', 'examines', 'interrogates'. Y 'isolation' / 'estrangement' son más precisos que 'loneliness'.", category: "vocabulary" }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa el análisis literario:",
          items: [
            { sentence: "The motif of water ___ throughout the novel, symbolising renewal.", answer: "recurs", hint: "a motif recurs = se repite" },
            { sentence: "Writing against the ___ of the Cold War, the author explores paranoia.", answer: "backdrop", hint: "against the backdrop of" },
            { sentence: "What ___ Woolf's style is its stream-of-consciousness technique.", answer: "distinguishes", hint: "what distinguishes X is" }
          ]
        }
      ],
      modelDialogue: {
        title: "Analizando una novela",
        situation: "Sofía y Liam discuten 1984 de Orwell en un club de lectura.",
        dialogue: [
          { speaker: "Sofía", text: "What I find most striking about 1984 is how Orwell's prose strips away any sense of interiority. Winston's thoughts feel observed rather than lived.", textEs: "Lo que encuentro más impactante de 1984 es cómo la prosa de Orwell elimina cualquier sentido de interioridad. Los pensamientos de Winston se sienten observados, no vividos." },
          { speaker: "Liam", text: "That's a perceptive reading. Writing against the backdrop of fascism and Stalinism, Orwell seems to suggest that totalitarianism colonises not just behaviour but thought itself.", textEs: "Es una lectura perspicaz. Escribiendo en el contexto del fascismo y el estalinismo, Orwell parece sugerir que el totalitarismo coloniza no solo el comportamiento sino el pensamiento mismo." },
          { speaker: "Sofía", text: "The motif of surveillance — the telescreen, the Thought Police — evokes an inescapable present. There's no room for memory or imagination.", textEs: "El motivo de la vigilancia — la telepantalla, la Policía del Pensamiento — evoca un presente inevitable. No hay espacio para la memoria ni la imaginación." },
          { speaker: "Liam", text: "What distinguishes the novel from other dystopias is its focus on language itself — Newspeak as a mechanism of cognitive control.", textEs: "Lo que distingue la novela de otras distopías es su enfoque en el lenguaje mismo: la Neolengua como mecanismo de control cognitivo." }
        ],
        vocabulary: ["motif", "backdrop", "evokes", "surveillance", "totalitarianism"],
        followUpQuestions: ["¿Qué observa Sofía sobre los pensamientos de Winston?", "¿En qué contexto histórico sitúa Liam la novela?"]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario literario",
        sounds: [
          { sound: "Allegory", examples: ["allegory /ˈælɪɡəri/"], tip: "Acento en primera sílaba: AL-le-go-ry" },
          { sound: "Poignant", examples: ["poignant /ˈpɔɪnjənt/"], tip: "El 'gn' es mudo: POIN-yant" }
        ],
        commonErrors: [
          { word: "motif", wrong: "/MO-tif/ (French-inspired wrong stress)", right: "/məʊˈtiːf/", note: "mo-TEEF: acento en segunda sílaba en inglés" }
        ]
      },
      culturalNote: {
        title: "Literatura en la cultura anglosajona",
        content: "La literatura en lengua inglesa es uno de los cuerpos literarios más ricos del mundo. Autores como Shakespeare, Jane Austen, Charles Dickens, Virginia Woolf, James Joyce, George Orwell y Toni Morrison son referencias culturales fundamentales. En UK, los programas de literatura en secundaria ('A-Level English Literature') son muy valorados. Expresiones como 'Orwellian', 'Kafkaesque', 'Catch-22' o 'Big Brother' han pasado al lenguaje cotidiano. Los 'book clubs' son una institución social popular en UK y EE.UU.",
        examples: [
          "'Orwellian' - que evoca el totalitarismo de 1984",
          "'Kafkaesque' - burocrático y absurdo hasta lo surrealista",
          "'Stream of consciousness' - técnica narrativa que sigue el flujo mental",
          "'Unreliable narrator' - narrador cuya veracidad es cuestionable"
        ]
      },
      consolidationQuiz: [
        { question: "Un 'motif' en literatura es:", options: ["el título de la obra", "un elemento o tema recurrente", "el punto climático", "la voz narrativa"], correctAnswer: 1, explanation: "Un motif es un elemento (imagen, tema, símbolo) que se repite a lo largo de la obra." },
        { question: "'Subvert' en análisis literario significa:", options: ["confirmar normas establecidas", "minar o cuestionar normas", "describir personajes", "crear suspense"], correctAnswer: 1, explanation: "Subvert = undermine, challenge — cuestionar lo establecido." },
        { question: "'What distinguishes X is...' es una estructura:", options: ["de comparación directa", "cleft (de énfasis mediante escisión)", "de transición", "de concesión"], correctAnswer: 1, explanation: "Es una cleft sentence que pone énfasis en la característica que distingue." }
      ],
      guidedProduction: [
        {
          task: "Análisis literario breve",
          prompt: "Elige una obra literaria que conozcas y escribe un análisis breve destacando su tema principal, técnicas narrativas y contexto.",
          sampleAnswer: "Writing against the backdrop of the post-war disillusionment of the 1940s, George Orwell's Nineteen Eighty-Four employs the motif of surveillance to interrogate the relationship between language and power. The novel's central argument — that those who control language control thought — is rendered through the allegory of Newspeak, a constructed language designed to eliminate subversive ideas at source. What distinguishes Orwell's approach from other dystopian fiction is the precision of his prose, which evokes the grey, exhausted atmosphere of totalitarian control without melodrama. The narrative ultimately suggests that resistance, however poignant, may be futile in a sufficiently coordinated surveillance state.",
          hints: ["Abre con 'Writing against the backdrop of'", "Menciona el motif principal", "Usa 'what distinguishes' para evaluar", "Incluye 'evokes', 'suggests', 'employs'"]
        }
      ],
      connectionToPrevious: "Las opiniones matizadas sobre el futuro son esenciales al analizar la literatura especulativa y distópica.",
      connectionToNext: "¡Felicidades! Has completado el Level 11. Dominas la comunicación ejecutiva avanzada e intelectual en inglés."
    },
  ]
};

export default level11;
