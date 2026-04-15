import type { Level } from '../../types';

export const level7: Level = {
  id: 7,
  name: "Advanced",
  cefrLevel: "B2+",
  description: "Empatía, presente perfecto continuo y comunicación avanzada",
  totalTasks: 12,
  estimatedHours: 16,
  color: "#8b5cf6",
  icon: "🎯",
  tasks: [
    {
      id: 1,
      title: "Expressing Empathy and Understanding",
      titleEs: "Expresando Empatía y Comprensión",
      introduction: {
        title: "💝 Expresando Empatía y Comprensión",
        explanation: "La empatía es fundamental en la comunicación. Aprenderás a mostrar comprensión, apoyo y conexión emocional en situaciones difíciles.",
        keyPoints: [
          "Reconocer sentimientos: 'I can see how you feel', 'That must be difficult'",
          "Validar: 'It's perfectly understandable', 'Anyone would feel the same way'",
          "Ofrecer apoyo: 'I'm here for you', 'Is there anything I can do?'",
          "Evitar: 'I know exactly how you feel' (puede sonar presumido)",
          "Usar lenguaje corporal: escucha activa, contacto visual"
        ],
        examples: [
          { english: "That must have been really frustrating.", spanish: "Eso debe haber sido realmente frustrante.", explanation: "Reconociendo sentimientos" },
          { english: "I can only imagine how difficult this is for you.", spanish: "Solo puedo imaginar lo difícil que es esto para ti.", explanation: "Mostrando comprensión" },
          { english: "It's completely understandable that you're upset.", spanish: "Es completamente comprensible que estés molesto.", explanation: "Validando" }
        ],
        tips: [
          "💡 Usa 'That must be/have been...' para mostrar que entiendes",
          "💡 Evita dar consejos no solicitados; primero escucha",
          "💡 Las preguntas abiertas invitan a compartir más"
        ],
        whenToUse: [
          "Cuando alguien comparte una situación difícil contigo",
          "En conversaciones de feedback con compañeros de trabajo",
          "Al responder a quejas de clientes o usuarios",
          "Cuando un amigo o familiar necesita apoyo emocional"
        ],
        whenNotToUse: [
          "No digas 'I know exactly how you feel' — puede sonar presuntuoso",
          "Evita dar consejos inmediatos sin primero validar los sentimientos",
          "No uses estas expresiones de forma superficial o mecánica — la empatía debe ser genuina",
          "No digas 'At least...' para minimizar el problema de la otra persona"
        ]
      },
      objectives: ["Expresar empatía genuina", "Validar sentimientos", "Ofrecer apoyo apropiado"],
      grammarTheoryIds: ["b2-wish-if-only", "b2-conditionals-all"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l7t1_n1", word: "empathy", translation: "empatía", type: "noun", definition: "understanding others' feelings", definitionEs: "entender los sentimientos de otros", example: "She showed great empathy.", exampleEs: "Ella mostró gran empatía.", related: ["empathetic"], difficulty: 2 },
          { id: "l7t1_n2", word: "compassion", translation: "compasión", type: "noun", definition: "concern for others' suffering", definitionEs: "preocupación por el sufrimiento de otros", example: "Act with compassion.", exampleEs: "Actúa con compasión.", related: ["compassionate"], difficulty: 2 },
          { id: "l7t1_n3", word: "support", translation: "apoyo", type: "noun", definition: "help and encouragement", definitionEs: "ayuda y aliento", example: "Thank you for your support.", exampleEs: "Gracias por tu apoyo.", related: [], difficulty: 1 },
          { id: "l7t1_n4", word: "frustration", translation: "frustración", type: "noun", definition: "feeling upset at difficulties", definitionEs: "sentirse molesto por dificultades", example: "I understand your frustration.", exampleEs: "Entiendo tu frustración.", related: ["frustrated"], difficulty: 1 },
          { id: "l7t1_n5", word: "sympathy", translation: "simpatía/compasión", type: "noun", definition: "feeling sorry for someone", definitionEs: "sentir pena por alguien", example: "You have my sympathy.", exampleEs: "Tienes mi compasión.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l7t1_v1", word: "empathize", translation: "empatizar", type: "verb", definition: "to understand another's feelings", definitionEs: "entender los sentimientos de otro", example: "I can empathize with your situation.", exampleEs: "Puedo empatizar con tu situación.", related: [], difficulty: 2 },
          { id: "l7t1_v2", word: "acknowledge", translation: "reconocer", type: "verb", definition: "to accept or recognize", definitionEs: "aceptar o reconocer", example: "I acknowledge your concerns.", exampleEs: "Reconozco tus preocupaciones.", related: [], difficulty: 2 },
          { id: "l7t1_v3", word: "comfort", translation: "consolar", type: "verb", definition: "to make someone feel better", definitionEs: "hacer que alguien se sienta mejor", example: "Let me comfort you.", exampleEs: "Déjame consolarte.", related: [], difficulty: 1 },
          { id: "l7t1_v4", word: "reassure", translation: "tranquilizar", type: "verb", definition: "to remove someone's doubts", definitionEs: "quitar las dudas de alguien", example: "Let me reassure you.", exampleEs: "Déjame tranquilizarte.", related: ["reassurance"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l7t1_a1", word: "understanding", translation: "comprensivo", type: "adjective", definition: "sympathetic", definitionEs: "simpático", example: "Thank you for being so understanding.", exampleEs: "Gracias por ser tan comprensivo.", related: [], difficulty: 1 },
          { id: "l7t1_a2", word: "supportive", translation: "solidario", type: "adjective", definition: "giving support", definitionEs: "dando apoyo", example: "My friends are very supportive.", exampleEs: "Mis amigos son muy solidarios.", related: [], difficulty: 1 },
          { id: "l7t1_a3", word: "overwhelming", translation: "abrumador", type: "adjective", definition: "very intense", definitionEs: "muy intenso", example: "It must feel overwhelming.", exampleEs: "Debe sentirse abrumador.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l7t1_e1", word: "That must be/have been...", translation: "Eso debe ser/haber sido...", type: "expression", definition: "showing understanding", definitionEs: "mostrando comprensión", example: "That must be really hard.", exampleEs: "Eso debe ser muy difícil.", related: [], difficulty: 1 },
          { id: "l7t1_e2", word: "I can only imagine...", translation: "Solo puedo imaginar...", type: "expression", definition: "expressing empathy", definitionEs: "expresando empatía", example: "I can only imagine how you feel.", exampleEs: "Solo puedo imaginar cómo te sientes.", related: [], difficulty: 1 },
          { id: "l7t1_e3", word: "I'm here for you", translation: "Estoy aquí para ti", type: "expression", definition: "offering support", definitionEs: "ofreciendo apoyo", example: "Whatever happens, I'm here for you.", exampleEs: "Pase lo que pase, estoy aquí para ti.", related: [], difficulty: 1 },
          { id: "l7t1_e4", word: "It's perfectly understandable", translation: "Es perfectamente comprensible", type: "expression", definition: "validating feelings", definitionEs: "validando sentimientos", example: "It's perfectly understandable that you're angry.", exampleEs: "Es perfectamente comprensible que estés enojado.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t1_cm1", wrong: "I know exactly how you feel", correct: "I can only imagine how you feel", explanation: "Saying 'I know exactly' can sound presumptuous since we cannot truly know another person's feelings.", explanationEs: "Decir 'I know exactly' puede parecer presuntuoso ya que no podemos conocer exactamente los sentimientos de otra persona", category: "usage" },
        { id: "l7t1_cm2", wrong: "You shouldn't feel that way", correct: "It's completely understandable that you feel that way", explanation: "Never invalidate someone's feelings; validate them first before offering perspectives.", explanationEs: "Nunca invalides los sentimientos de alguien; valídalos primero antes de ofrecer perspectivas", category: "usage" },
        { id: "l7t1_cm3", wrong: "At least you still have...", correct: "This must be so difficult for you", explanation: "Avoid minimizing pain by comparing with positive things; focus on acknowledging their feelings.", explanationEs: "Evita minimizar el dolor comparando con cosas positivas; enfócate en reconocer sus sentimientos", category: "usage" },
        { id: "l7t1_cm4", wrong: "Don't worry, everything will be fine", correct: "I understand why you're worried. I'm here to support you", explanation: "False promises can sound empty; it's better to acknowledge and offer presence.", explanationEs: "Las falsas promesas pueden sonar vacías; es mejor reconocer y ofrecer presencia", category: "usage" },
        { id: "l7t1_cm5", wrong: "I sympathize with you", correct: "I empathize with your situation", explanation: "Sympathy (feeling sorry for) is different from empathy (feeling with); empathy connects more deeply.", explanationEs: "Sympathy (sentir pena) es diferente de empathy (sentir con); empathy conecta más profundamente", category: "vocabulary" },
      ],
      exercises: [
        {
          type: "matching",
          instruction: "Relaciona cada situación con la respuesta empática más apropiada",
          items: [
            { item: "Mi perro murió ayer", match: "I'm so sorry for your loss. Losing a pet is heartbreaking." },
            { item: "Perdí mi trabajo", match: "That must be incredibly stressful. How are you holding up?" },
            { item: "Mi hijo está enfermo", match: "I can only imagine how worried you must be. Is there anything I can do?" },
            { item: "Reprobé mi examen", match: "That's really disappointing. It's understandable to feel frustrated." }
          ]
        },
        {
          type: "fill-in-the-blank",
          instruction: "Completa las respuestas empáticas con las palabras apropiadas",
          items: [
            { sentence: "That _____ be really difficult for you.", answer: "must" },
            { sentence: "I can _____ imagine how hard this is.", answer: "only" },
            { sentence: "It's perfectly _____ that you're upset.", answer: "understandable" },
            { sentence: "I'm _____ for you, whatever you need.", answer: "here" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma estas respuestas poco empáticas en respuestas empáticas",
          items: [
            { original: "You need to calm down", transformed: "I can see you're really upset. That's completely understandable." },
            { original: "It could be worse", transformed: "This is really difficult. I'm sorry you're going through this." },
            { original: "Just get over it", transformed: "Take all the time you need. I'm here whenever you want to talk." },
            { original: "You're overreacting", transformed: "Your feelings are valid. This clearly matters a lot to you." }
          ]
        },
        {
          type: "role-play",
          instruction: "Practica respondiendo empáticamente a estas situaciones",
          scenarios: [
            "Tu amigo acaba de ser rechazado de su universidad soñada",
            "Tu colega está estresado por una presentación importante mañana",
            "Tu vecino te cuenta que su familiar tiene una enfermedad seria",
            "Tu compañero de trabajo fue criticado injustamente en una reunión"
          ]
        }
      ],
      modelDialogue: {
        title: "Mostrando empatía a un amigo estresado",
        context: "Sarah habla con su amigo Tom que está agotado por el trabajo",
        dialogue: [
          { speaker: "Tom", text: "I've been working 12-hour days for three weeks straight. I'm exhausted.", translation: "He estado trabajando días de 12 horas por tres semanas seguidas. Estoy agotado." },
          { speaker: "Sarah", text: "That sounds absolutely draining. Three weeks is a long time to maintain that pace.", translation: "Eso suena absolutamente agotador. Tres semanas es mucho tiempo para mantener ese ritmo." },
          { speaker: "Tom", text: "And my boss keeps adding more projects. I don't know how to say no.", translation: "Y mi jefe sigue agregando más proyectos. No sé cómo decir que no." },
          { speaker: "Sarah", text: "That must feel really overwhelming. It's hard when you feel like you can't set boundaries.", translation: "Eso debe sentirse muy abrumador. Es difícil cuando sientes que no puedes establecer límites." },
          { speaker: "Tom", text: "I'm worried I'll burn out but I don't want to lose my job.", translation: "Me preocupa agotarme pero no quiero perder mi trabajo." },
          { speaker: "Sarah", text: "I completely understand that fear. It's a really tough position to be in. Would it help to talk through some options?", translation: "Entiendo completamente ese miedo. Es una posición muy difícil. ¿Te ayudaría hablar sobre algunas opciones?" }
        ],
        keyPhrases: [
          "That sounds absolutely draining",
          "That must feel really overwhelming",
          "It's hard when you feel...",
          "I completely understand",
          "Would it help to talk through..."
        ]
      },
      pronunciationFocus: {
        title: "Entonación empática",
        sounds: [
          { sound: "/ð/", word: "that", tip: "En español no existe; la 'th' sonora se hace con la lengua entre los dientes" },
          { sound: "Soft fall", word: "I'm so sorry", tip: "Tono descendente suave al final transmite sinceridad; evita subir el tono" },
          { sound: "Stress pattern", word: "That MUST be difficult", tip: "Énfasis en 'must' y 'difficult' muestra que entiendes" }
        ],
        minimalPairs: [
          { word1: "sympathy", word2: "empathy", explanation: "Sympathy /ˈsɪmpəθi/ vs empathy /ˈempəθi/ - ambas tienen /θ/; en español tendemos a decir /s/ o /t/" },
          { word1: "understand", word2: "understood", explanation: "Evita pronunciar 'understand' con acento en la última sílaba" }
        ],
        intonation: [
          { pattern: "Fall-rise for hedging", example: "It's possible↘↗", tip: "Al expresar empatía con cautela, usa tono descendente-ascendente" },
          { pattern: "Level tone for presence", example: "I'm here for you →", tip: "Tono nivel transmite calma y disponibilidad" }
        ],
        points: [
          "Usa un tono más suave y cálido al expresar empatía",
          "'That must be...' - énfasis en 'must' con tono descendente suave",
          "'I'm here for you' - cada palabra con énfasis igual, tono sincero",
          "Evita entonación que suene mecánica o insincera",
          "Pausas breves después de frases empáticas permiten que resuenen"
        ],
        examples: [
          { word: "I'm so sorry", phonetic: "/aɪm soʊ ˈsɒri/", tip: "Énfasis suave en 'sorry', tono descendente" },
          { word: "That must be difficult", phonetic: "/ðæt mʌst bi ˈdɪfɪkəlt/", tip: "Énfasis en 'must' y 'difficult'" },
          { word: "I understand", phonetic: "/aɪ ˌʌndərˈstænd/", tip: "Tono cálido, no mecánico" }
        ]
      },
      culturalNote: {
        title: "Empatía a través de las culturas",
        titleEs: "Empatía a través de las culturas",
        content: "Los angloparlantes generalmente aprecian respuestas empáticas verbales explícitas. A diferencia de algunas culturas donde el silencio solidario es valorado, en culturas anglófonas se espera que verbalices tu comprensión. Sin embargo, evita frases vacías como 'I know how you feel' sin evidencia real de comprensión. Los británicos tienden a usar más suavizadores ('That must be rather difficult'), mientras que los estadounidenses pueden ser más directos en su apoyo ('I'm here for you, no matter what').",
        contentEs: "Los angloparlantes aprecian respuestas empáticas verbales explícitas. A diferencia de culturas donde el silencio solidario es valorado, en inglés se espera verbalizar tu comprensión. Evita frases vacías como 'I know how you feel'. Los británicos usan más suavizadores; los estadounidenses son más directos.",
        region: "General",
        examples: [
          "UK: 'That must be rather hard for you.'",
          "US: 'That's really tough. I'm here for you.'",
          "Ambos valoran: escucha activa sin interrupciones"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la mejor respuesta cuando alguien te dice que perdió su trabajo?",
          questionEs: "¿Cuál es la mejor respuesta cuando alguien te dice que perdió su trabajo?",
          options: [
            "At least you have time to find a better one",
            "That must be really stressful. How are you feeling?",
            "I know exactly how you feel",
            "Don't worry, everything happens for a reason"
          ],
          correctAnswer: 1,
          explanation: "Reconocer el estrés y preguntar cómo se sienten muestra empatía genuina sin minimizar o asumir",
          explanationEs: "Reconocer el estrés y preguntar cómo se sienten muestra empatía genuina sin minimizar o asumir"
        },
        {
          question: "¿Por qué es mejor decir 'I can only imagine...' que 'I know exactly how you feel'?",
          options: [
            "Porque es más corto",
            "Porque admite que no podemos conocer exactamente los sentimientos de otro",
            "Porque suena más formal",
            "No hay diferencia real"
          ],
          correctAnswer: 1,
          explanation: "Admitir que solo podemos imaginar es más humilde y genuino que afirmar que conocemos exactamente sus sentimientos"
        },
        {
          question: "Completa: 'It's perfectly _____ that you're upset.'",
          options: ["okay", "understandable", "normal", "obvious"],
          correctAnswer: 1,
          explanation: "'Understandable' valida los sentimientos sin juzgarlos como 'normales' o 'obvios'"
        },
        {
          question: "¿Qué debes evitar al mostrar empatía?",
          options: [
            "Hacer preguntas abiertas",
            "Ofrecer tu presencia",
            "Dar consejos no solicitados inmediatamente",
            "Reconocer sus sentimientos"
          ],
          correctAnswer: 2,
          explanation: "Primero escucha y valida; los consejos prematuros pueden hacer que la persona sienta que no la escuchas"
        },
        {
          question: "¿Cuál es una diferencia entre 'sympathy' y 'empathy'?",
          options: [
            "Son exactamente lo mismo",
            "Sympathy es sentir pena; empathy es sentir con la persona",
            "Empathy es más formal",
            "Sympathy es más profundo"
          ],
          correctAnswer: 1,
          explanation: "Empathy implica una conexión más profunda, sintiendo con la persona, no solo sintiendo pena por ella"
        },
        {
          question: "La mejor forma de iniciar una respuesta empática es:",
          options: [
            "You should...",
            "At least...",
            "That must be...",
            "Why don't you...?"
          ],
          correctAnswer: 2,
          explanation: "'That must be...' reconoce los sentimientos sin asumir ni dar consejos prematuros"
        }
      ],
      guidedProduction: [
        {
          prompt: "Tu amigo te dice: 'I failed my driving test for the third time.'",
          sampleResponse: "That must be so frustrating, especially after working so hard. It's completely understandable to feel disappointed. Would you like to talk about what happened?"
        },
        {
          prompt: "Tu colega te dice: 'My project got cancelled after months of work.'",
          sampleResponse: "Oh no, that must feel devastating after putting in so much effort. I can only imagine how disappointing that is. How are you holding up?"
        },
        {
          prompt: "Tu vecino te dice: 'My mother is very sick and I don't know what to do.'",
          sampleResponse: "I'm so sorry to hear that. That must be incredibly scary and overwhelming. I'm here for you if you need anything at all, even just someone to listen."
        },
        {
          prompt: "Tu amigo te dice: 'I had a terrible argument with my partner last night.'",
          sampleResponse: "That sounds really difficult. Arguments with people we love can be so painful. It's understandable that you're upset. Do you want to talk about it?"
        }
      ],
      connectionToPrevious: "Combinamos las habilidades de comunicación sensible del Level 6 con expresiones más sofisticadas de empatía y apoyo emocional.",
      connectionToNext: "Estas expresiones empáticas se complementarán con el presente perfecto continuo, que nos permitirá hablar sobre situaciones que han estado afectando a alguien."
    },
    {
      id: 2,
      title: "Present Perfect Continuous",
      titleEs: "Presente Perfecto Continuo",
      introduction: {
        title: "⏳ Presente Perfecto Continuo",
        explanation: "Este tiempo conecta una actividad en progreso con el presente. Se usa para acciones que empezaron en el pasado y continúan, o que acaban de terminar con efectos visibles.",
        keyPoints: [
          "Estructura: have/has + been + verbo-ing",
          "Duración: 'I've been working here for 5 years' (y todavía trabajo aquí)",
          "Actividad reciente con efecto visible: 'I've been running' (estoy sudando)",
          "Palabras clave: for, since, all day, lately, recently",
          "Diferencia con Present Perfect: PP = resultado, PPC = proceso/duración"
        ],
        examples: [
          { english: "I've been learning English for two years.", spanish: "He estado aprendiendo inglés por dos años.", explanation: "Acción continua" },
          { english: "She's been crying. Her eyes are red.", spanish: "Ha estado llorando. Sus ojos están rojos.", explanation: "Efecto visible" },
          { english: "Have you been waiting long?", spanish: "¿Has estado esperando mucho?", explanation: "Pregunta sobre duración" }
        ],
        tips: [
          "💡 Usa PPC para enfatizar la duración o repetición de una actividad",
          "💡 Algunos verbos no van en continuo: know, want, like, believe",
          "💡 'How long have you been...?' pregunta por duración"
        ],
        whenToUse: [
          'Para actividades en curso: "I\'ve been working on this project for three months"',
          'Cuando hay efecto visible: "Your hands are dirty - have you been gardening?"',
          'En small talk: "What have you been up to lately?"',
          'Para enfatizar duración: "She\'s been studying English since January"'
        ],
        whenNotToUse: [
          'Con verbos de estado: "I have known him" (NO "I have been knowing him")',
          'Con acciones completadas: "I read three books" (NO "I\'ve been reading three books" si ya terminaste)',
          '"For" con puntos en tiempo: "since 2020" (NO "for 2020")'
        ]
      },
      objectives: ["Formar presente perfecto continuo", "Distinguir de presente perfecto simple", "Usar for y since correctamente"],
      grammarTheoryIds: ['b2-future-continuous', 'b2-conditionals-all'],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l7t2_n1", word: "duration", translation: "duración", type: "noun", definition: "how long something lasts", definitionEs: "cuánto dura algo", example: "What's the duration?", exampleEs: "¿Cuál es la duración?", related: [], difficulty: 2 },
          { id: "l7t2_n2", word: "progress", translation: "progreso", type: "noun", definition: "forward movement", definitionEs: "movimiento hacia adelante", example: "We've been making progress.", exampleEs: "Hemos estado haciendo progreso.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l7t2_v1", word: "have been working", translation: "he estado trabajando", type: "verb", definition: "continuous past to present", definitionEs: "continuo del pasado al presente", example: "I've been working here for 5 years.", exampleEs: "He estado trabajando aquí por 5 años.", related: [], difficulty: 1 },
          { id: "l7t2_v2", word: "have been studying", translation: "he estado estudiando", type: "verb", definition: "continuous studying", definitionEs: "estudiando continuamente", example: "She's been studying all day.", exampleEs: "Ella ha estado estudiando todo el día.", related: [], difficulty: 1 },
          { id: "l7t2_v3", word: "have been waiting", translation: "he estado esperando", type: "verb", definition: "continuous waiting", definitionEs: "esperando continuamente", example: "How long have you been waiting?", exampleEs: "¿Cuánto tiempo has estado esperando?", related: [], difficulty: 1 },
          { id: "l7t2_v4", word: "have been trying", translation: "he estado intentando", type: "verb", definition: "continuous trying", definitionEs: "intentando continuamente", example: "I've been trying to call you.", exampleEs: "He estado intentando llamarte.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l7t2_a1", word: "continuous", translation: "continuo", type: "adjective", definition: "without stopping", definitionEs: "sin parar", example: "It's been continuous rain.", exampleEs: "Ha sido lluvia continua.", related: [], difficulty: 1 },
          { id: "l7t2_a2", word: "recent", translation: "reciente", type: "adjective", definition: "happening not long ago", definitionEs: "sucediendo no hace mucho", example: "In recent weeks...", exampleEs: "En semanas recientes...", related: ["recently"], difficulty: 1 },
        ],
        expressions: [
          { id: "l7t2_e1", word: "for + period", translation: "por/durante + período", type: "expression", definition: "length of time", definitionEs: "longitud de tiempo", example: "for two hours, for a week", exampleEs: "por dos horas, por una semana", related: [], difficulty: 1 },
          { id: "l7t2_e2", word: "since + point in time", translation: "desde + punto en el tiempo", type: "expression", definition: "starting point", definitionEs: "punto de inicio", example: "since Monday, since 2020", exampleEs: "desde el lunes, desde 2020", related: [], difficulty: 1 },
          { id: "l7t2_e3", word: "How long have you been...?", translation: "¿Cuánto tiempo has estado...?", type: "expression", definition: "asking about duration", definitionEs: "preguntando sobre duración", example: "How long have you been living here?", exampleEs: "¿Cuánto tiempo has estado viviendo aquí?", related: [], difficulty: 1 },
          { id: "l7t2_e4", word: "all day/week/month", translation: "todo el día/semana/mes", type: "expression", definition: "entire period", definitionEs: "período entero", example: "I've been working all day.", exampleEs: "He estado trabajando todo el día.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l7t2_adv1", word: "lately", translation: "últimamente", type: "adverb", definition: "recently", definitionEs: "recientemente", example: "I've been busy lately.", exampleEs: "He estado ocupado últimamente.", related: [], difficulty: 1 },
          { id: "l7t2_adv2", word: "recently", translation: "recientemente", type: "adverb", definition: "not long ago", definitionEs: "no hace mucho", example: "I've been traveling recently.", exampleEs: "He estado viajando recientemente.", related: [], difficulty: 1 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t2_cm1", wrong: "I am working here for 5 years", correct: "I have been working here for 5 years", explanation: "For actions that started in the past and continue to now, use Present Perfect Continuous, not Present Simple.", explanationEs: "Para acciones que empezaron en el pasado y continúan hasta ahora, usa Present Perfect Continuous, no Present Simple", category: "grammar" },
        { id: "l7t2_cm2", wrong: "I have been knowing him since 2010", correct: "I have known him since 2010", explanation: "Stative verbs (know, want, like, believe, love) are not used in continuous forms; use Present Perfect Simple.", explanationEs: "Verbos de estado (know, want, like, believe, love) no se usan en forma continua; usa Present Perfect Simple", category: "grammar" },
        { id: "l7t2_cm3", wrong: "She has been working here since three years", correct: "She has been working here for three years", explanation: "'For' is used with periods of time (three years); 'since' with points in time (2020, Monday).", explanationEs: "'For' se usa con períodos de tiempo (three years); 'since' con puntos en el tiempo (2020, Monday)", category: "grammar" },
        { id: "l7t2_cm4", wrong: "I've been reading this book. I finished it yesterday", correct: "I read this book. I finished it yesterday / I've been reading a book lately", explanation: "Present Perfect Continuous implies the action may continue; if it's finished, use Past Simple or Present Perfect Simple.", explanationEs: "Present Perfect Continuous implica que la acción puede continuar; si está terminada, usa Past Simple o Present Perfect Simple", category: "grammar" },
        { id: "l7t2_cm5", wrong: "How long you have been waiting?", correct: "How long have you been waiting?", explanation: "In questions, the auxiliary 'have' goes before the subject: 'Have you been...?'", explanationEs: "En preguntas, el auxiliar 'have' va antes del sujeto: 'Have you been...?'", category: "grammar" },
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Transforma las oraciones de Present Simple/Past Simple a Present Perfect Continuous",
          items: [
            { original: "I work here for 10 years (started 10 years ago, still working)", transformed: "I have been working here for 10 years" },
            { original: "She studies English since January (still studying)", transformed: "She has been studying English since January" },
            { original: "They wait for an hour (still waiting)", transformed: "They have been waiting for an hour" },
            { original: "He runs - look, he's sweating! (just finished)", transformed: "He has been running - look, he's sweating!" }
          ]
        },
        {
          type: "fill-in-the-blank",
          instruction: "Completa con 'for' o 'since'",
          items: [
            { sentence: "I've been learning Spanish _____ two years.", answer: "for" },
            { sentence: "She's been working here _____ 2019.", answer: "since" },
            { sentence: "We've been waiting _____ the bus left.", answer: "since" },
            { sentence: "They've been traveling _____ six months.", answer: "for" }
          ]
        },
        {
          type: "choice",
          instruction: "Elige Present Perfect Simple o Present Perfect Continuous",
          items: [
            { question: "I _____ three books this month. (completed action)", options: ["have read", "have been reading"], answer: "have read" },
            { question: "I _____ all morning. I'm tired. (emphasis on duration)", options: ["have worked", "have been working"], answer: "have been working" },
            { question: "She _____ her keys. She can't find them. (result)", options: ["has lost", "has been losing"], answer: "has lost" },
            { question: "It _____ all day. The ground is wet. (recent activity)", options: ["has rained", "has been raining"], answer: "has been raining" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Encuentra y corrige el error en cada oración",
          items: [
            { sentence: "I have been wanting a new car for months.", correction: "I have wanted a new car for months." },
            { sentence: "How long are you living in London?", correction: "How long have you been living in London?" },
            { sentence: "She has been working here since three years.", correction: "She has been working here for three years." },
            { sentence: "I been studying all night.", correction: "I have been studying all night." }
          ]
        }
      ],
      modelDialogue: {
        title: "Conversación sobre actividades recientes",
        context: "Dos colegas se encuentran después de un tiempo sin verse",
        dialogue: [
          { speaker: "Mark", text: "Hi Lisa! You look tired. Is everything okay?", translation: "¡Hola Lisa! Te ves cansada. ¿Está todo bien?" },
          { speaker: "Lisa", text: "Yeah, I've been working on a big project for the past month. It's been really intense.", translation: "Sí, he estado trabajando en un proyecto grande durante el último mes. Ha sido muy intenso." },
          { speaker: "Mark", text: "I can imagine! How long have you been putting in extra hours?", translation: "¡Me lo imagino! ¿Cuánto tiempo llevas haciendo horas extra?" },
          { speaker: "Lisa", text: "Since the beginning of March. But we've been making great progress lately.", translation: "Desde principios de marzo. Pero hemos estado haciendo un gran progreso últimamente." },
          { speaker: "Mark", text: "That's good! I've been meaning to catch up with you. Have you been taking any breaks?", translation: "¡Qué bien! He estado queriendo ponerme al día contigo. ¿Has estado tomando descansos?" },
          { speaker: "Lisa", text: "Not really, but I've been trying to exercise in the mornings. It helps with the stress.", translation: "No realmente, pero he estado intentando hacer ejercicio por las mañanas. Ayuda con el estrés." }
        ],
        keyPhrases: [
          "I've been working on... for...",
          "How long have you been...?",
          "Since the beginning of...",
          "We've been making progress",
          "I've been trying to..."
        ]
      },
      pronunciationFocus: {
        title: "Contracción y ritmo en Present Perfect Continuous",
        points: [
          "'I've been' /aɪv bɪn/ - la contracción es natural y fluida",
          "'She's been' /ʃiz bɪn/ - 'she's' puede ser 'she has' o 'she is' - el contexto lo aclara",
          "El énfasis suele ir en el verbo principal: 'I've been WORKING'",
          "'For' suena débil /fər/, 'since' suena más fuerte /sɪns/",
          "En preguntas: 'How LONG have you been...?' - énfasis en 'long'"
        ],
        examples: [
          { word: "I've been waiting", phonetic: "/aɪv bɪn ˈweɪtɪŋ/", tip: "Contracción rápida en 'I've been'" },
          { word: "She's been working", phonetic: "/ʃiz bɪn ˈwɜːrkɪŋ/", tip: "'She's' = 'she has' aquí" },
          { word: "for two hours", phonetic: "/fər tuː ˈaʊərz/", tip: "'For' débil, énfasis en 'hours'" }
        ]
      },
      culturalNote: {
        title: "Uso del Present Perfect Continuous en conversaciones",
        content: "En inglés británico y americano, el Present Perfect Continuous es muy común para iniciar conversaciones y mostrar interés en las actividades de otros. Preguntas como 'What have you been up to?' (¿Qué has estado haciendo?) o 'Have you been keeping busy?' (¿Has estado ocupado?) son formas típicas de small talk. En contextos profesionales, 'I've been working on...' es una excelente manera de actualizar a colegas sobre proyectos en progreso.",
        examples: [
          "'What have you been up to lately?' - Pregunta casual muy común",
          "'I've been meaning to ask you...' - Introducir un tema con cortesía",
          "'Have you been well?' - Pregunta sobre bienestar general"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuándo usamos Present Perfect Continuous en lugar de Present Perfect Simple?",
          options: [
            "Cuando la acción ya terminó completamente",
            "Para enfatizar la duración o la naturaleza continua de una acción",
            "Para acciones que nunca ocurrieron",
            "Solo con verbos de estado como 'know' y 'want'"
          ],
          correctAnswer: 1,
          explanation: "PPC enfatiza la duración o el proceso; PPS enfatiza el resultado o la cantidad completada"
        },
        {
          question: "Completa: 'I've been living here _____ 2018.'",
          options: ["for", "since", "during", "from"],
          correctAnswer: 1,
          explanation: "'Since' se usa con puntos específicos en el tiempo (años, fechas, eventos)"
        },
        {
          question: "¿Por qué es incorrecto 'I have been knowing him for years'?",
          options: [
            "Debería ser 'I am knowing'",
            "'Know' es un verbo de estado que no se usa en forma continua",
            "'For' está mal usado",
            "La oración es correcta"
          ],
          correctAnswer: 1,
          explanation: "Verbos de estado (know, want, like, believe, love) no se usan en formas continuas"
        },
        {
          question: "'She's tired because she _____ all day.'",
          options: [
            "worked",
            "works",
            "has been working",
            "is working"
          ],
          correctAnswer: 2,
          explanation: "PPC conecta la actividad pasada (trabajar todo el día) con el resultado presente (está cansada)"
        },
        {
          question: "¿Cuál es la diferencia entre 'I've read 3 books' y 'I've been reading'?",
          options: [
            "No hay diferencia",
            "La primera enfatiza cantidad completada; la segunda enfatiza la actividad en progreso",
            "La primera es pasado; la segunda es presente",
            "La primera es formal; la segunda es informal"
          ],
          correctAnswer: 1,
          explanation: "PPS (I've read) = resultado/cantidad; PPC (I've been reading) = proceso/actividad"
        },
        {
          question: "Elige la forma correcta: 'How long _____ English?'",
          options: [
            "are you studying",
            "do you study",
            "have you been studying",
            "you have been studying"
          ],
          correctAnswer: 2,
          explanation: "'How long' + PPC pregunta sobre la duración de una actividad que comenzó en el pasado y continúa"
        }
      ],
      guidedProduction: [
        {
          prompt: "Explica que has estado aprendiendo a tocar piano durante 6 meses",
          sampleResponse: "I've been learning to play the piano for six months. I've been practicing every day, and I've been making good progress lately."
        },
        {
          prompt: "Pregunta a alguien cuánto tiempo ha estado viviendo en su ciudad actual",
          sampleResponse: "How long have you been living in this city? Have you been enjoying it here?"
        },
        {
          prompt: "Describe que tu equipo ha estado trabajando en un proyecto desde enero",
          sampleResponse: "Our team has been working on this project since January. We've been putting in a lot of effort, and we've been seeing great results."
        },
        {
          prompt: "Explica por qué estás cansado/a (has estado estudiando toda la noche)",
          sampleResponse: "I'm exhausted because I've been studying all night. I have an exam tomorrow, and I've been reviewing the material for hours."
        }
      ],
      connectionToPrevious: "Ahora podemos usar el Present Perfect Continuous junto con expresiones de empatía: 'You must be exhausted - you've been working so hard lately.'",
      connectionToNext: "Este tiempo verbal será útil cuando aprendamos técnicas de persuasión, donde describir acciones continuas ('We've been researching this for months') añade credibilidad."
    },
    {
      id: 3,
      title: "Persuasion Techniques",
      titleEs: "Técnicas de Persuasión",
      introduction: {
        title: "🎯 Técnicas de Persuasión",
        explanation: "La persuasión efectiva combina lógica, emoción y credibilidad. Aprenderás estructuras y vocabulario para convencer de manera profesional.",
        keyPoints: [
          "Apelar a la lógica: 'The evidence shows...', 'Statistics indicate...'",
          "Apelar a la emoción: 'Imagine how it would feel...', 'Don't you want...?'",
          "Crear urgencia: 'This opportunity won't last', 'Time is running out'",
          "Usar prueba social: 'Many successful companies...', 'Research shows...'",
          "Hacer concesiones: 'While it's true that... however...'"
        ],
        examples: [
          { english: "Studies have shown that this approach is 40% more effective.", spanish: "Estudios han demostrado que este enfoque es 40% más efectivo.", explanation: "Evidencia" },
          { english: "Imagine achieving your goals twice as fast.", spanish: "Imagina lograr tus metas dos veces más rápido.", explanation: "Apelando a emociones" },
          { english: "I understand your concern, but consider this...", spanish: "Entiendo tu preocupación, pero considera esto...", explanation: "Concesión + argumento" }
        ],
        tips: [
          "💡 Combina evidencia (logos), emoción (pathos) y credibilidad (ethos)",
          "💡 Anticipar objeciones y responderlas fortalece tu argumento",
          "💡 Las preguntas retóricas involucran al oyente"
        ],
        whenToUse: [
          'En presentaciones de ventas: "Studies have shown that this approach is 40% more effective"',
          'Al proponer ideas en reuniones: "Wouldn\'t you agree that we need to act now?"',
          'Para defender presupuestos: "Consider the fact that ROI has exceeded expectations"',
          'En negociaciones: "While it\'s true that costs are higher, the quality justifies it"'
        ],
        whenNotToUse: [
          'Evita "Trust me" / "You must buy" → "Let me explain why this has proven effective"',
          'No uses generalizaciones: "Everyone knows" → "Research has shown"',
          'En conversaciones casuales: "Want to try this restaurant?" (NO "Consider the benefits of dining here")'
        ]
      },
      objectives: ["Usar técnicas de persuasión", "Estructurar argumentos convincentes", "Responder a objeciones"],
      grammarTheoryIds: ['b2-conditionals-all', 'b2-emphasis-cleft-sentences'],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l7t3_n1", word: "evidence", translation: "evidencia", type: "noun", definition: "facts supporting a claim", definitionEs: "hechos que apoyan una afirmación", example: "The evidence is clear.", exampleEs: "La evidencia es clara.", related: [], difficulty: 1 },
          { id: "l7t3_n2", word: "argument", translation: "argumento", type: "noun", definition: "a reason given", definitionEs: "una razón dada", example: "That's a strong argument.", exampleEs: "Ese es un argumento fuerte.", related: [], difficulty: 1 },
          { id: "l7t3_n3", word: "benefit", translation: "beneficio", type: "noun", definition: "an advantage", definitionEs: "una ventaja", example: "Consider the benefits.", exampleEs: "Considera los beneficios.", related: [], difficulty: 1 },
          { id: "l7t3_n4", word: "objection", translation: "objeción", type: "noun", definition: "a reason against", definitionEs: "una razón en contra", example: "I understand your objection.", exampleEs: "Entiendo tu objeción.", related: ["object"], difficulty: 2 },
          { id: "l7t3_n5", word: "persuasion", translation: "persuasión", type: "noun", definition: "convincing someone", definitionEs: "convencer a alguien", example: "The art of persuasion.", exampleEs: "El arte de la persuasión.", related: ["persuade"], difficulty: 2 },
        ],
        verbs: [
          { id: "l7t3_v1", word: "persuade", translation: "persuadir", type: "verb", definition: "to convince someone", definitionEs: "convencer a alguien", example: "Let me persuade you.", exampleEs: "Déjame persuadirte.", related: [], difficulty: 1 },
          { id: "l7t3_v2", word: "convince", translation: "convencer", type: "verb", definition: "to make someone believe", definitionEs: "hacer que alguien crea", example: "I'm convinced it will work.", exampleEs: "Estoy convencido de que funcionará.", related: [], difficulty: 1 },
          { id: "l7t3_v3", word: "influence", translation: "influenciar", type: "verb", definition: "to affect someone's thinking", definitionEs: "afectar el pensamiento de alguien", example: "Several factors influenced my decision.", exampleEs: "Varios factores influenciaron mi decisión.", related: [], difficulty: 1 },
          { id: "l7t3_v4", word: "demonstrate", translation: "demostrar", type: "verb", definition: "to show clearly", definitionEs: "mostrar claramente", example: "Let me demonstrate.", exampleEs: "Déjame demostrar.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l7t3_a1", word: "compelling", translation: "convincente", type: "adjective", definition: "very persuasive", definitionEs: "muy persuasivo", example: "That's a compelling argument.", exampleEs: "Ese es un argumento convincente.", related: [], difficulty: 2 },
          { id: "l7t3_a2", word: "undeniable", translation: "innegable", type: "adjective", definition: "cannot be denied", definitionEs: "no puede ser negado", example: "The benefits are undeniable.", exampleEs: "Los beneficios son innegables.", related: [], difficulty: 2 },
          { id: "l7t3_a3", word: "proven", translation: "probado", type: "adjective", definition: "shown to be true", definitionEs: "demostrado ser verdad", example: "It's a proven method.", exampleEs: "Es un método probado.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l7t3_e1", word: "Studies have shown...", translation: "Estudios han demostrado...", type: "expression", definition: "citing evidence", definitionEs: "citando evidencia", example: "Studies have shown significant improvements.", exampleEs: "Estudios han demostrado mejoras significativas.", related: [], difficulty: 1 },
          { id: "l7t3_e2", word: "Consider the fact that...", translation: "Considera el hecho de que...", type: "expression", definition: "presenting evidence", definitionEs: "presentando evidencia", example: "Consider the fact that costs will decrease.", exampleEs: "Considera el hecho de que los costos disminuirán.", related: [], difficulty: 1 },
          { id: "l7t3_e3", word: "While it's true that..., however...", translation: "Aunque es cierto que..., sin embargo...", type: "expression", definition: "making a concession", definitionEs: "haciendo una concesión", example: "While it's true that it costs more, however, the quality is better.", exampleEs: "Aunque es cierto que cuesta más, sin embargo, la calidad es mejor.", related: [], difficulty: 2 },
          { id: "l7t3_e4", word: "Wouldn't you agree that...?", translation: "¿No estarías de acuerdo en que...?", type: "expression", definition: "rhetorical question", definitionEs: "pregunta retórica", example: "Wouldn't you agree that efficiency is important?", exampleEs: "¿No estarías de acuerdo en que la eficiencia es importante?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t3_cm1", wrong: "You must buy this product", correct: "You might want to consider this product because...", explanation: "Avoid being too direct or aggressive; effective persuasion is subtler and more respectful.", explanationEs: "Evita ser demasiado directo o agresivo; la persuasión efectiva es más sutil y respetuosa", category: "usage" },
        { id: "l7t3_cm2", wrong: "Everyone knows that...", correct: "Research has shown that... / Many experts agree that...", explanation: "Generalizations without evidence weaken your argument; use specific sources.", explanationEs: "Generalizaciones sin evidencia debilitan tu argumento; usa fuentes específicas", category: "usage" },
        { id: "l7t3_cm3", wrong: "Trust me, this works", correct: "Let me explain why this approach has proven effective...", explanation: "Asking for trust without giving reasons is not persuasive; provide evidence.", explanationEs: "Pedir confianza sin dar razones no es persuasivo; proporciona evidencia", category: "usage" },
        { id: "l7t3_cm4", wrong: "This is the only solution", correct: "This is the most effective solution because...", explanation: "Absolute claims can generate resistance; be more flexible.", explanationEs: "Afirmaciones absolutas pueden generar resistencia; sé más flexible", category: "usage" },
        { id: "l7t3_cm5", wrong: "You're wrong if you don't agree", correct: "I understand your perspective, and here's another way to look at it...", explanation: "Attacking the listener destroys persuasion; respect their point of view.", explanationEs: "Atacar al oyente destruye la persuasión; respeta su punto de vista", category: "usage" },
      ],
      exercises: [
        {
          type: "categorization",
          instruction: "Clasifica cada técnica como Logos (lógica), Pathos (emoción), o Ethos (credibilidad)",
          items: [
            { item: "Studies show a 40% improvement in results", category: "Logos" },
            { item: "Imagine how proud you'll feel when you succeed", category: "Pathos" },
            { item: "As someone with 20 years of experience, I can tell you...", category: "Ethos" },
            { item: "The data clearly indicates that...", category: "Logos" },
            { item: "Don't you want the best for your family?", category: "Pathos" },
            { item: "Leading companies like Google and Apple use this approach", category: "Ethos" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma estas afirmaciones débiles en argumentos persuasivos",
          items: [
            { original: "This product is good", transformed: "This product has been proven to increase efficiency by 35% in independent studies." },
            { original: "You should buy this", transformed: "Consider how this could save you hours every week while improving your results." },
            { original: "Trust me", transformed: "Based on my experience working with over 100 clients, I've seen this approach succeed consistently." },
            { original: "It's the best option", transformed: "Compared to the alternatives, this option offers the best balance of cost and effectiveness." }
          ]
        },
        {
          type: "concession-practice",
          instruction: "Completa estas concesiones con contraargumentos",
          items: [
            { concession: "While it's true that this solution costs more upfront,", counterargument: "the long-term savings make it the most economical choice." },
            { concession: "I understand your concern about the time required,", counterargument: "however, the investment now will save countless hours later." },
            { concession: "Although there are risks involved,", counterargument: "our mitigation strategies have proven highly effective." },
            { concession: "You might think this is too complex,", counterargument: "but our step-by-step process makes it surprisingly manageable." }
          ]
        },
        {
          type: "rhetorical-questions",
          instruction: "Crea preguntas retóricas para estos puntos de persuasión",
          items: [
            { point: "Efficiency is important", rhetorical: "Wouldn't you agree that working smarter, not harder, leads to better results?" },
            { point: "Quality matters more than price", rhetorical: "What's more valuable: saving a little money now or having something that lasts?" },
            { point: "Change is necessary for growth", rhetorical: "Can we really expect different results if we keep doing the same things?" }
          ]
        }
      ],
      modelDialogue: {
        title: "Persuadiendo a un colega para adoptar un nuevo sistema",
        context: "Alex intenta convencer a Jordan de cambiar a un nuevo software de gestión de proyectos",
        dialogue: [
          { speaker: "Alex", text: "I'd like to discuss the possibility of switching to ProjectFlow. Have you had a chance to look at it?", translation: "Me gustaría discutir la posibilidad de cambiar a ProjectFlow. ¿Has tenido oportunidad de verlo?" },
          { speaker: "Jordan", text: "Briefly. But changing systems seems like a lot of work.", translation: "Brevemente. Pero cambiar de sistema parece mucho trabajo." },
          { speaker: "Alex", text: "I understand that concern. While it's true that there's an initial learning curve, studies have shown that teams using ProjectFlow see a 30% improvement in productivity within three months.", translation: "Entiendo esa preocupación. Aunque es cierto que hay una curva de aprendizaje inicial, estudios han demostrado que los equipos usando ProjectFlow ven una mejora del 30% en productividad en tres meses." },
          { speaker: "Jordan", text: "That sounds good on paper, but what about the cost?", translation: "Eso suena bien en papel, pero ¿qué pasa con el costo?" },
          { speaker: "Alex", text: "Consider the fact that the time we currently waste on manual reporting could be automated. In my experience leading similar transitions, the software pays for itself within six months.", translation: "Considera el hecho de que el tiempo que actualmente desperdiciamos en reportes manuales podría automatizarse. En mi experiencia liderando transiciones similares, el software se paga solo en seis meses." },
          { speaker: "Jordan", text: "Hmm, that's a valid point. Let me think about it.", translation: "Hmm, ese es un punto válido. Déjame pensarlo." },
          { speaker: "Alex", text: "Of course. Wouldn't you agree it's worth at least a trial period? We could test it with just our team first.", translation: "Por supuesto. ¿No estarías de acuerdo en que vale la pena al menos un período de prueba? Podríamos probarlo solo con nuestro equipo primero." }
        ],
        keyPhrases: [
          "I understand that concern",
          "While it's true that... studies have shown...",
          "Consider the fact that...",
          "In my experience...",
          "Wouldn't you agree that...?"
        ]
      },
      pronunciationFocus: {
        title: "Entonación persuasiva",
        sounds: [
          { sound: "/θ/", word: "think", tip: "En 'the fact that' la 'th' es sonora /ð/; pon la lengua entre los dientes" },
          { sound: "Rise for rhetorical", word: "Wouldn't you agree?", tip: "Tono ascendente al final invita a la reflexión sin presionar" },
          { sound: "Confident fall", word: "Studies have shown", tip: "Tono descendente firme transmite autoridad y credibilidad" }
        ],
        minimalPairs: [
          { word1: "evidence", word2: "evident", explanation: "Evidence /ˈevɪdəns/ vs evident /ˈevɪdənt/ - la terminación -ce vs -t" },
          { word1: "persuade", word2: "pursue", explanation: "Persuade /pərˈsweɪd/ tiene acento en la segunda sílaba" }
        ],
        intonation: [
          { pattern: "Fall-rise for hedging", example: "It's possible↘↗", tip: "Al hacer concesiones, usa tono descendente-ascendente antes del contraargumento" }
        ],
        points: [
          "Usa entonación ascendente en preguntas retóricas para invitar reflexión",
          "'Wouldn't you AGREE?' - énfasis en 'agree' con tono ascendente",
          "Pausa antes de puntos clave para crear anticipación",
          "'Studies have shown' - tono firme y confiado, no dubitativo",
          "Suaviza la voz al hacer concesiones ('While it's true that...') antes de fortalecer en el contraargumento"
        ],
        examples: [
          { word: "Consider the fact that", phonetic: "/kənˈsɪdər ðə fækt ðæt/", tip: "Énfasis en 'consider' y 'fact'" },
          { word: "Studies have shown", phonetic: "/ˈstʌdiz həv ʃoʊn/", tip: "Tono confiado y autoritativo" },
          { word: "Wouldn't you agree?", phonetic: "/ˈwʊdnt juː əˈɡriː/", tip: "Entonación ascendente al final" }
        ]
      },
      culturalNote: {
        title: "Estilos de persuasión por cultura",
        titleEs: "Estilos de persuasión por cultura",
        content: "Los estilos de persuasión varían significativamente entre culturas. Los estadounidenses tienden a ser más directos y valoran hechos y datos ('hard sell'). Los británicos prefieren un enfoque más indirecto y understated. En muchas culturas asiáticas, construir relaciones antes de persuadir es esencial. En culturas latinoamericanas, las conexiones personales y emocionales pueden ser más efectivas que la pura lógica. Adaptarse al estilo del oyente aumenta las probabilidades de éxito.",
        contentEs: "Los estilos de persuasión varían entre culturas. Los estadounidenses valoran hechos y datos. Los británicos prefieren un enfoque más indirecto. En culturas latinoamericanas, las conexiones personales pueden ser más efectivas que la pura lógica.",
        region: "General",
        examples: [
          "US: 'The numbers speak for themselves. This is a 40% improvement.'",
          "UK: 'You might find it interesting that results have been rather positive.'",
          "Adaptación: Observa cómo responde tu audiencia y ajusta tu enfoque"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Qué son Logos, Pathos y Ethos en persuasión?",
          options: [
            "Tipos de presentaciones",
            "Lógica/evidencia, emoción, y credibilidad",
            "Fases de una negociación",
            "Estilos de comunicación"
          ],
          correctAnswer: 1,
          explanation: "Los tres pilares de la retórica clásica: Logos (apelación a la lógica), Pathos (apelación a las emociones), Ethos (credibilidad del hablante)"
        },
        {
          question: "¿Cuál es una forma efectiva de manejar objeciones?",
          options: [
            "Ignorarlas",
            "Decir que están equivocados",
            "Reconocerlas y luego presentar un contraargumento",
            "Cambiar de tema"
          ],
          correctAnswer: 2,
          explanation: "Reconocer las objeciones muestra respeto; luego puedes presentar tu perspectiva con 'however...' o 'that said...'"
        },
        {
          question: "¿Qué hace efectiva a una pregunta retórica?",
          options: [
            "Espera una respuesta directa",
            "Hace pensar al oyente y lo involucra sin presionarlo",
            "Es siempre confrontacional",
            "No tiene respuesta posible"
          ],
          correctAnswer: 1,
          explanation: "Las preguntas retóricas guían al oyente a reflexionar y generalmente a una conclusión que apoyas"
        },
        {
          question: "Completa: 'While it's true that the cost is higher, _____ the quality justifies the investment.'",
          options: ["but", "however", "although", "despite"],
          correctAnswer: 1,
          explanation: "'However' es ideal para introducir el contraargumento después de una concesión"
        },
        {
          question: "¿Por qué es mejor decir 'Studies have shown' que 'Everyone knows'?",
          options: [
            "Es más corto",
            "Proporciona evidencia específica en lugar de una generalización",
            "Suena más casual",
            "No hay diferencia"
          ],
          correctAnswer: 1,
          explanation: "Citar estudios proporciona evidencia verificable; 'everyone knows' es una falacia de generalización"
        },
        {
          question: "¿Qué técnica usa 'Imagine achieving your goals twice as fast'?",
          options: [
            "Logos (lógica)",
            "Ethos (credibilidad)",
            "Pathos (emoción)",
            "Concesión"
          ],
          correctAnswer: 2,
          explanation: "Invitar a imaginar resultados positivos apela a las emociones y deseos del oyente"
        }
      ],
      guidedProduction: [
        {
          prompt: "Persuade a tu jefe de que tu equipo necesita más recursos",
          sampleResponse: "I'd like to discuss our team's resource needs. Studies have shown that teams operating at capacity tend to burn out and produce lower quality work. Consider the fact that we've been consistently exceeding our targets despite being understaffed. Wouldn't you agree that investing in one additional team member could help us maintain this momentum while preventing potential burnout?"
        },
        {
          prompt: "Convence a un amigo de probar un nuevo restaurante",
          sampleResponse: "I know you usually prefer familiar places, and that's understandable. However, this restaurant has received outstanding reviews – it was named best new restaurant of the year. Imagine enjoying a completely new culinary experience without having to travel far. What's the worst that could happen? If you don't like it, we can always go to our usual spot next time."
        },
        {
          prompt: "Persuade a tu equipo de adoptar una nueva metodología de trabajo",
          sampleResponse: "While I understand that changing our workflow feels disruptive, consider the fact that teams using this methodology have reported 25% faster project completion. As someone who's been researching best practices for months, I can tell you this approach addresses the exact bottlenecks we've been experiencing. Wouldn't you agree it's worth a trial period?"
        },
        {
          prompt: "Convence a un cliente de elegir tu propuesta sobre la de la competencia",
          sampleResponse: "I understand you're considering other options, and that's a smart approach. What sets our solution apart is the combination of proven results and personalized support. Leading companies in your industry have seen a 40% increase in efficiency using our platform. While it's true our initial cost is slightly higher, our clients typically see a return on investment within the first quarter."
        }
      ],
      connectionToPrevious: "Las técnicas empáticas del Task 1 hacen que tu persuasión sea más efectiva: reconocer sentimientos antes de presentar argumentos crea conexión.",
      connectionToNext: "Las habilidades de persuasión se aplicarán cuando discutamos problemas y soluciones, donde necesitarás convencer a otros de tus propuestas."
    },
    {
      id: 4,
      title: "Discussing Problems and Solutions",
      titleEs: "Discutiendo Problemas y Soluciones",
      introduction: {
        title: "🔧 Discutiendo Problemas y Soluciones",
        explanation: "Analizar problemas y proponer soluciones es una habilidad esencial. Aprenderás a identificar, describir y resolver problemas de manera estructurada.",
        keyPoints: [
          "Identificar: 'The main issue is...', 'The problem lies in...'",
          "Analizar causas: 'This is caused by...', 'This stems from...'",
          "Proponer soluciones: 'One solution would be to...', 'We could try...'",
          "Evaluar opciones: 'The pros and cons of this approach...', 'This might lead to...'",
          "Implementar: 'The first step is...', 'We should start by...'"
        ],
        examples: [
          { english: "The main problem is that we lack resources.", spanish: "El problema principal es que carecemos de recursos.", explanation: "Identificando el problema" },
          { english: "This issue stems from poor communication.", spanish: "Este problema surge de la mala comunicación.", explanation: "Analizando causa" },
          { english: "One possible solution would be to outsource.", spanish: "Una posible solución sería subcontratar.", explanation: "Proponiendo solución" }
        ],
        tips: [
          "💡 Define el problema claramente antes de buscar soluciones",
          "💡 Usa '5 Whys' para encontrar la causa raíz",
          "💡 Presenta múltiples opciones con pros y contras"
        ],
        whenToUse: [
          'En reuniones de equipo: "The main issue is that we don\'t have enough resources"',
          'Para análisis de causas: "This stems from poor communication between departments"',
          'Al proponer ideas: "One solution would be to outsource the task"',
          'En reportes de incidentes: "The root cause was identified as a system failure"'
        ],
        whenNotToUse: [
          'Evita culpar personas: "The issue stems from..." (NO "John caused this")',
          'No asumas soluciones obvias: "One possible solution would be..." (NO "The solution is obvious")',
          'En problemas simples entre amigos: "What\'s wrong?" (NO "Let me identify the root cause")'
        ]
      },
      objectives: ["Describir problemas claramente", "Analizar causas raíz", "Proponer y evaluar soluciones"],
      grammarTheoryIds: ['b2-conditionals-all', 'b1-second-conditional'],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l7t4_n1", word: "issue", translation: "problema/asunto", type: "noun", definition: "a problem or topic", definitionEs: "un problema o tema", example: "What's the main issue?", exampleEs: "¿Cuál es el problema principal?", related: [], difficulty: 1 },
          { id: "l7t4_n2", word: "solution", translation: "solución", type: "noun", definition: "an answer to a problem", definitionEs: "una respuesta a un problema", example: "We need to find a solution.", exampleEs: "Necesitamos encontrar una solución.", related: ["solve"], difficulty: 1 },
          { id: "l7t4_n3", word: "obstacle", translation: "obstáculo", type: "noun", definition: "something blocking progress", definitionEs: "algo que bloquea el progreso", example: "There are several obstacles.", exampleEs: "Hay varios obstáculos.", related: [], difficulty: 2 },
          { id: "l7t4_n4", word: "root cause", translation: "causa raíz", type: "noun", definition: "the basic cause", definitionEs: "la causa básica", example: "What's the root cause?", exampleEs: "¿Cuál es la causa raíz?", related: [], difficulty: 2 },
          { id: "l7t4_n5", word: "approach", translation: "enfoque", type: "noun", definition: "a way of dealing with", definitionEs: "una forma de manejar", example: "Let's try a different approach.", exampleEs: "Intentemos un enfoque diferente.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l7t4_v1", word: "solve", translation: "resolver", type: "verb", definition: "to find an answer", definitionEs: "encontrar una respuesta", example: "How can we solve this?", exampleEs: "¿Cómo podemos resolver esto?", related: ["solution"], difficulty: 1 },
          { id: "l7t4_v2", word: "address", translation: "abordar", type: "verb", definition: "to deal with", definitionEs: "manejar", example: "We need to address this issue.", exampleEs: "Necesitamos abordar este problema.", related: [], difficulty: 2 },
          { id: "l7t4_v3", word: "overcome", translation: "superar", type: "verb", definition: "to succeed against", definitionEs: "tener éxito contra", example: "We can overcome this challenge.", exampleEs: "Podemos superar este desafío.", related: [], difficulty: 2 },
          { id: "l7t4_v4", word: "implement", translation: "implementar", type: "verb", definition: "to put into action", definitionEs: "poner en acción", example: "Let's implement the solution.", exampleEs: "Implementemos la solución.", related: ["implementation"], difficulty: 2 },
          { id: "l7t4_v5", word: "prevent", translation: "prevenir", type: "verb", definition: "to stop from happening", definitionEs: "evitar que suceda", example: "How can we prevent this?", exampleEs: "¿Cómo podemos prevenir esto?", related: ["prevention"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l7t4_a1", word: "challenging", translation: "desafiante", type: "adjective", definition: "difficult but interesting", definitionEs: "difícil pero interesante", example: "This is a challenging situation.", exampleEs: "Esta es una situación desafiante.", related: ["challenge"], difficulty: 1 },
          { id: "l7t4_a2", word: "effective", translation: "efectivo", type: "adjective", definition: "producing results", definitionEs: "produciendo resultados", example: "Is this solution effective?", exampleEs: "¿Es efectiva esta solución?", related: [], difficulty: 1 },
          { id: "l7t4_a3", word: "practical", translation: "práctico", type: "adjective", definition: "realistic and useful", definitionEs: "realista y útil", example: "We need a practical solution.", exampleEs: "Necesitamos una solución práctica.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l7t4_e1", word: "The main issue is...", translation: "El problema principal es...", type: "expression", definition: "identifying the problem", definitionEs: "identificando el problema", example: "The main issue is lack of time.", exampleEs: "El problema principal es la falta de tiempo.", related: [], difficulty: 1 },
          { id: "l7t4_e2", word: "This stems from...", translation: "Esto surge de...", type: "expression", definition: "explaining the cause", definitionEs: "explicando la causa", example: "This stems from poor planning.", exampleEs: "Esto surge de la mala planificación.", related: [], difficulty: 2 },
          { id: "l7t4_e3", word: "One solution would be to...", translation: "Una solución sería...", type: "expression", definition: "proposing solution", definitionEs: "proponiendo solución", example: "One solution would be to hire more staff.", exampleEs: "Una solución sería contratar más personal.", related: [], difficulty: 1 },
          { id: "l7t4_e4", word: "The first step is to...", translation: "El primer paso es...", type: "expression", definition: "starting implementation", definitionEs: "comenzando implementación", example: "The first step is to gather data.", exampleEs: "El primer paso es recopilar datos.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t4_cm1", wrong: "The problem is we need more time", correct: "The main issue is that we don't have enough time", explanation: "Be more specific and formal when identifying problems; use 'that' after 'is' for clarity.", explanationEs: "Sé más específico y formal al identificar problemas; usa 'that' después de 'is' para claridad", category: "grammar" },
        { id: "l7t4_cm2", wrong: "I think the solution is obvious", correct: "One possible solution would be to... Another option could be...", explanation: "Never assume solutions are obvious; present options in a structured way.", explanationEs: "Nunca asumas que las soluciones son obvias; presenta opciones de manera estructurada", category: "usage" },
        { id: "l7t4_cm3", wrong: "This problem happened because John", correct: "This issue stems from a communication breakdown in the team", explanation: "Avoid blaming individuals; focus on processes and systems that can be improved.", explanationEs: "Evita culpar individuos; enfócate en procesos y sistemas que pueden mejorarse", category: "usage" },
        { id: "l7t4_cm4", wrong: "We should just do X", correct: "After evaluating the options, I recommend X because...", explanation: "Justify your recommendations with reasoning, not simple statements.", explanationEs: "Justifica tus recomendaciones con razonamiento, no con afirmaciones simples", category: "usage" },
        { id: "l7t4_cm5", wrong: "There's no solution to this", correct: "This is a challenging situation. Let's explore some possible approaches...", explanation: "There are always options; maintain a problem-solving attitude.", explanationEs: "Siempre hay opciones; mantén una actitud de resolución de problemas", category: "usage" },
      ],
      exercises: [
        {
          type: "sequencing",
          instruction: "Ordena estos pasos del proceso de resolución de problemas",
          items: [
            { step: "Identify the root cause", order: 2 },
            { step: "Define the problem clearly", order: 1 },
            { step: "Implement the chosen solution", order: 5 },
            { step: "Evaluate possible solutions", order: 4 },
            { step: "Brainstorm solutions", order: 3 },
            { step: "Monitor results and adjust", order: 6 }
          ]
        },
        {
          type: "matching",
          instruction: "Relaciona los problemas con las expresiones apropiadas para describirlos",
          items: [
            { item: "El proyecto está atrasado", match: "The main issue is that we're behind schedule" },
            { item: "La comunicación es deficiente", match: "The problem lies in our communication processes" },
            { item: "Falta de recursos", match: "This stems from insufficient resource allocation" },
            { item: "El equipo está desmotivado", match: "We're facing challenges with team motivation" }
          ]
        },
        {
          type: "fill-in-the-blank",
          instruction: "Completa las oraciones con las expresiones correctas",
          items: [
            { sentence: "The main _____ is that we don't have enough data.", answer: "issue" },
            { sentence: "This problem _____ from poor initial planning.", answer: "stems" },
            { sentence: "One possible _____ would be to outsource the task.", answer: "solution" },
            { sentence: "The _____ cause of the delay is inadequate resources.", answer: "root" }
          ]
        },
        {
          type: "pros-cons-analysis",
          instruction: "Analiza los pros y contras de cada solución propuesta",
          scenarios: [
            {
              problem: "The team is overwhelmed with work",
              solutions: [
                { solution: "Hire more staff", pros: ["More capacity", "Reduced burnout"], cons: ["Higher costs", "Training time needed"] },
                { solution: "Outsource some tasks", pros: ["Quick solution", "Flexible"], cons: ["Quality control", "Communication challenges"] }
              ]
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Reunión de resolución de problemas",
        context: "Un equipo discute cómo abordar retrasos en un proyecto",
        dialogue: [
          { speaker: "Manager", text: "Let's discuss the project delays. What's the main issue here?", translation: "Discutamos los retrasos del proyecto. ¿Cuál es el problema principal aquí?" },
          { speaker: "Team Lead", text: "The main issue is that we underestimated the complexity of the technical requirements.", translation: "El problema principal es que subestimamos la complejidad de los requisitos técnicos." },
          { speaker: "Developer", text: "I agree. This stems from insufficient analysis during the planning phase.", translation: "Estoy de acuerdo. Esto surge de un análisis insuficiente durante la fase de planificación." },
          { speaker: "Manager", text: "What are our options to get back on track?", translation: "¿Cuáles son nuestras opciones para volver a encaminarnos?" },
          { speaker: "Team Lead", text: "One solution would be to bring in additional developers temporarily. Another approach could be to reduce the project scope.", translation: "Una solución sería traer desarrolladores adicionales temporalmente. Otro enfoque podría ser reducir el alcance del proyecto." },
          { speaker: "Manager", text: "What are the pros and cons of each approach?", translation: "¿Cuáles son los pros y contras de cada enfoque?" },
          { speaker: "Developer", text: "Bringing in more developers would speed things up, but there's a learning curve. Reducing scope is faster to implement but might disappoint stakeholders.", translation: "Traer más desarrolladores aceleraría las cosas, pero hay una curva de aprendizaje. Reducir el alcance es más rápido de implementar pero podría decepcionar a los interesados." },
          { speaker: "Manager", text: "Let's start by identifying which features are essential. The first step is to meet with stakeholders to discuss priorities.", translation: "Empecemos por identificar qué características son esenciales. El primer paso es reunirse con los interesados para discutir prioridades." }
        ],
        keyPhrases: [
          "What's the main issue here?",
          "This stems from...",
          "One solution would be to...",
          "Another approach could be...",
          "What are the pros and cons?",
          "The first step is to..."
        ]
      },
      pronunciationFocus: {
        title: "Claridad al presentar problemas y soluciones",
        sounds: [
          { sound: "/ˈɪʃuː/", word: "issue", tip: "En español decimos 'ishu'; en inglés la 's' suena /ʃ/ como 'sh'" },
          { sound: "Stress on key words", word: "The MAIN issue", tip: "Énfasis en 'main' señala que es el problema principal" },
          { sound: "Listing intonation", word: "First... Second... Third", tip: "Cada elemento de la lista puede tener tono descendente" }
        ],
        minimalPairs: [
          { word1: "issue", word2: "tissue", explanation: "Issue /ˈɪʃuː/ vs tissue /ˈtɪʃuː/ - diferencia en la primera sílaba" },
          { word1: "solution", word2: "resolution", explanation: "Solution /səˈluːʃn/ - acento en la segunda sílaba" }
        ],
        intonation: [
          { pattern: "Fall for conclusions", example: "The first step is↘", tip: "Tono descendente al dar pasos concretos transmite claridad" }
        ],
        points: [
          "Pausa antes y después de puntos clave para énfasis",
          "'The MAIN issue is...' - énfasis en 'main' para señalar importancia",
          "'One POSSIBLE solution...' - énfasis en 'possible' indica que hay opciones",
          "Enumera claramente: 'FIRST... SECOND... THIRD...'",
          "Baja el tono al concluir cada punto antes de pasar al siguiente"
        ],
        examples: [
          { word: "The root cause", phonetic: "/ðə ruːt kɔːz/", tip: "Énfasis en 'root', pausa después" },
          { word: "One solution would be", phonetic: "/wʌn səˈluːʃən wʊd biː/", tip: "Fluido, énfasis en 'solution'" },
          { word: "stems from", phonetic: "/stemz frəm/", tip: "'stems' claro, 'from' conectado" }
        ]
      },
      culturalNote: {
        title: "Resolución de problemas en diferentes culturas empresariales",
        titleEs: "Resolución de problemas en diferentes culturas empresariales",
        content: "En culturas empresariales anglosajonas, se valora identificar problemas directamente y proponer soluciones rápidamente. Sin embargo, el tono importa: ser demasiado directo al señalar problemas puede percibirse como negativo. Usa lenguaje como 'challenges' o 'opportunities for improvement' en lugar de solo 'problems'. En reuniones, se espera que todos contribuyan con soluciones, no solo con quejas. El enfoque '5 Whys' (preguntar '¿por qué?' cinco veces para llegar a la causa raíz) es ampliamente utilizado.",
        contentEs: "En culturas anglosajonas se valora identificar problemas directamente y proponer soluciones. El tono importa: usa 'challenges' en lugar de solo 'problems'. Se espera que todos contribuyan con soluciones. El enfoque '5 Whys' es ampliamente utilizado.",
        region: "General",
        examples: [
          "'We're facing some challenges with...' (más positivo que 'We have a problem')",
          "'What if we tried...' (invita colaboración)",
          "'Let's explore our options' (enfoque de equipo)"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la mejor manera de identificar un problema en una reunión?",
          options: [
            "The problem is John's fault",
            "The main issue is that our communication processes need improvement",
            "Everything is wrong",
            "I don't know what's happening"
          ],
          correctAnswer: 1,
          explanation: "Identificar el problema de manera específica y sin culpar individuos es profesional y constructivo"
        },
        {
          question: "¿Qué significa 'root cause'?",
          options: [
            "El primer problema que surgió",
            "La causa más obvia",
            "La causa fundamental subyacente",
            "Un problema menor"
          ],
          correctAnswer: 2,
          explanation: "Root cause es la causa fundamental; resolverla previene que el problema vuelva a ocurrir"
        },
        {
          question: "¿Cómo debes presentar múltiples soluciones?",
          options: [
            "Solo mencionar la que prefieres",
            "Presentar opciones con pros y contras de cada una",
            "Decir que no hay buenas opciones",
            "Dejar que otros decidan sin tu input"
          ],
          correctAnswer: 1,
          explanation: "Presentar múltiples opciones con análisis demuestra pensamiento crítico y facilita la toma de decisiones"
        },
        {
          question: "Completa: 'This issue _____ poor initial planning.'",
          options: ["comes from", "stems from", "is from", "started from"],
          correctAnswer: 1,
          explanation: "'Stems from' es la expresión formal correcta para indicar el origen de un problema"
        },
        {
          question: "¿Por qué es importante el 'first step' al proponer soluciones?",
          options: [
            "Para mostrar que tienes prisa",
            "Para hacer que la solución parezca alcanzable y accionable",
            "Porque siempre hay solo un paso",
            "Para evitar otras sugerencias"
          ],
          correctAnswer: 1,
          explanation: "Indicar el primer paso hace que la solución sea tangible y demuestra que has pensado en la implementación"
        },
        {
          question: "¿Qué expresión es mejor para sugerir una solución de manera colaborativa?",
          options: [
            "We must do this",
            "One approach we could consider is...",
            "This is the only option",
            "I've decided we should..."
          ],
          correctAnswer: 1,
          explanation: "'One approach we could consider' invita discusión y colaboración en lugar de imponer"
        }
      ],
      guidedProduction: [
        {
          prompt: "Tu equipo tiene problemas con plazos de entrega. Describe el problema y propón soluciones.",
          sampleResponse: "The main issue is that we're consistently missing our deadlines. This stems from unclear prioritization and scope creep during projects. One solution would be to implement stricter change management processes. Another approach could be to use time-boxing techniques. The first step would be to analyze our last three projects to identify patterns."
        },
        {
          prompt: "El sistema de comunicación interna no está funcionando bien. Analiza el problema.",
          sampleResponse: "We're facing challenges with our internal communication. The problem lies in having too many communication channels without clear guidelines. This has resulted in important messages being missed. I would recommend consolidating our tools and establishing clear protocols for different types of communication."
        },
        {
          prompt: "Los clientes se quejan del tiempo de respuesta del soporte técnico.",
          sampleResponse: "The main issue is that our response times are not meeting customer expectations. The root cause appears to be insufficient staffing during peak hours. One possible solution would be to implement a tiered support system. Alternatively, we could consider adding an AI chatbot for initial queries. The pros of the chatbot are 24/7 availability and cost-effectiveness, though the con is it may not handle complex issues well."
        },
        {
          prompt: "El presupuesto del proyecto se ha excedido. Discute cómo abordarlo.",
          sampleResponse: "We need to address our budget overrun. The issue stems from underestimating the technical complexity during initial planning. At this stage, our options include requesting additional funding, reducing project scope, or finding cost savings in other areas. I recommend we first identify which features are essential versus nice-to-have, then present stakeholders with clear options and their trade-offs."
        }
      ],
      connectionToPrevious: "Las técnicas de persuasión del Task 3 te ayudarán a presentar y 'vender' tus soluciones propuestas de manera convincente.",
      connectionToNext: "En el siguiente task, aprenderás a dar retroalimentación constructiva, una habilidad esencial cuando las soluciones involucran mejorar el desempeño de personas."
    },
    {
      id: 5,
      title: "Giving Constructive Feedback",
      titleEs: "Dando Retroalimentación Constructiva",
      introduction: {
        title: "📝 Dando Retroalimentación Constructiva",
        explanation: "La retroalimentación efectiva ayuda a mejorar sin desmotivar. Aprenderás el modelo 'sandwich' y otras técnicas para dar feedback profesional.",
        keyPoints: [
          "Modelo sandwich: Positivo + Mejora + Positivo",
          "Ser específico: 'When you did X, it caused Y' en lugar de 'You're bad at...'",
          "Enfocarse en comportamiento, no personalidad",
          "Usar 'I' statements: 'I noticed...' en lugar de 'You always...'",
          "Ofrecer sugerencias: 'Have you considered...?' 'One thing that might help...'"
        ],
        examples: [
          { english: "I really appreciate your effort on this project. One area for improvement might be the timing. Overall, great work!", spanish: "Realmente aprecio tu esfuerzo en este proyecto. Un área de mejora podría ser el tiempo. En general, ¡gran trabajo!", explanation: "Modelo sandwich" },
          { english: "I noticed that the report was late. This affected the team's schedule.", spanish: "Noté que el reporte llegó tarde. Esto afectó el horario del equipo.", explanation: "Específico y objetivo" },
          { english: "Have you considered using templates to save time?", spanish: "¿Has considerado usar plantillas para ahorrar tiempo?", explanation: "Sugerencia constructiva" }
        ],
        tips: [
          "💡 Prepara tu feedback con anticipación",
          "💡 El momento correcto importa: privado y cuando la persona puede procesarlo",
          "💡 Pregunta '¿Qué piensas?' para hacer el feedback una conversación"
        ],
        whenToUse: [
          'En evaluaciones de desempeño: "One thing you did really well was..."',
          'En correcciones constructivas: "I noticed X. Have you considered trying Y?"',
          'Para reconocer mejoras: "Your presentation skills have improved significantly"',
          'En reuniones 1-a-1: "I\'d like to share some observations. What do you think?"'
        ],
        whenNotToUse: [
          'Evita "You always/never": "In this case..." (NO "You never listen")',
          'No des feedback en público sobre temas sensibles → hazlo en privado',
          'En conversaciones casuales: "Great job!" (NO "I\'d like to provide structured feedback")'
        ]
      },
      objectives: ["Dar feedback constructivo", "Usar el modelo sandwich", "Hacer críticas sin desmotivar"],
      grammarTheoryIds: ["b2-emphasis-cleft-sentences"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l7t5_n1", word: "feedback", translation: "retroalimentación", type: "noun", definition: "comments about performance", definitionEs: "comentarios sobre desempeño", example: "I'd like to give you some feedback.", exampleEs: "Me gustaría darte algo de retroalimentación.", related: [], difficulty: 1 },
          { id: "l7t5_n2", word: "improvement", translation: "mejora", type: "noun", definition: "getting better", definitionEs: "mejorando", example: "There's room for improvement.", exampleEs: "Hay espacio para mejora.", related: ["improve"], difficulty: 1 },
          { id: "l7t5_n3", word: "performance", translation: "desempeño", type: "noun", definition: "how well someone does", definitionEs: "qué tan bien alguien hace algo", example: "Your performance has improved.", exampleEs: "Tu desempeño ha mejorado.", related: ["perform"], difficulty: 1 },
          { id: "l7t5_n4", word: "suggestion", translation: "sugerencia", type: "noun", definition: "an idea for improvement", definitionEs: "una idea para mejorar", example: "I have a suggestion.", exampleEs: "Tengo una sugerencia.", related: ["suggest"], difficulty: 1 },
        ],
        verbs: [
          { id: "l7t5_v1", word: "improve", translation: "mejorar", type: "verb", definition: "to make better", definitionEs: "hacer mejor", example: "How can we improve?", exampleEs: "¿Cómo podemos mejorar?", related: ["improvement"], difficulty: 1 },
          { id: "l7t5_v2", word: "appreciate", translation: "apreciar", type: "verb", definition: "to value", definitionEs: "valorar", example: "I appreciate your effort.", exampleEs: "Aprecio tu esfuerzo.", related: [], difficulty: 1 },
          { id: "l7t5_v3", word: "notice", translation: "notar", type: "verb", definition: "to observe", definitionEs: "observar", example: "I noticed some issues.", exampleEs: "Noté algunos problemas.", related: [], difficulty: 1 },
          { id: "l7t5_v4", word: "encourage", translation: "animar", type: "verb", definition: "to give support", definitionEs: "dar apoyo", example: "I want to encourage you.", exampleEs: "Quiero animarte.", related: ["encouragement"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l7t5_a1", word: "constructive", translation: "constructivo", type: "adjective", definition: "helpful and positive", definitionEs: "útil y positivo", example: "This is constructive feedback.", exampleEs: "Esta es retroalimentación constructiva.", related: [], difficulty: 1 },
          { id: "l7t5_a2", word: "specific", translation: "específico", type: "adjective", definition: "detailed and exact", definitionEs: "detallado y exacto", example: "Be more specific.", exampleEs: "Sé más específico.", related: [], difficulty: 1 },
          { id: "l7t5_a3", word: "objective", translation: "objetivo", type: "adjective", definition: "not influenced by feelings", definitionEs: "no influenciado por sentimientos", example: "Try to be objective.", exampleEs: "Trata de ser objetivo.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l7t5_e1", word: "I really appreciate...", translation: "Realmente aprecio...", type: "expression", definition: "positive opening", definitionEs: "apertura positiva", example: "I really appreciate your hard work.", exampleEs: "Realmente aprecio tu trabajo duro.", related: [], difficulty: 1 },
          { id: "l7t5_e2", word: "One area for improvement might be...", translation: "Un área de mejora podría ser...", type: "expression", definition: "gentle criticism", definitionEs: "crítica gentil", example: "One area for improvement might be communication.", exampleEs: "Un área de mejora podría ser la comunicación.", related: [], difficulty: 1 },
          { id: "l7t5_e3", word: "Have you considered...?", translation: "¿Has considerado...?", type: "expression", definition: "suggesting improvement", definitionEs: "sugiriendo mejora", example: "Have you considered asking for help?", exampleEs: "¿Has considerado pedir ayuda?", related: [], difficulty: 1 },
          { id: "l7t5_e4", word: "Overall, great work!", translation: "En general, ¡gran trabajo!", type: "expression", definition: "positive closing", definitionEs: "cierre positivo", example: "Overall, great work on this project!", exampleEs: "En general, ¡gran trabajo en este proyecto!", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t5_cm1", wrong: "You're always late with your reports", correct: "I noticed the last three reports were submitted after the deadline. This impacted our ability to...", explanation: "Avoid generalizations like 'always' or 'never'; be specific with concrete examples.", explanationEs: "Evita generalizaciones como 'always' o 'never'; sé específico con ejemplos concretos", category: "usage" },
        { id: "l7t5_cm2", wrong: "Your presentation was bad", correct: "The content of your presentation was solid. One area for improvement might be the pacing - some sections felt rushed.", explanation: "Avoid general judgments; be specific about what worked and what could improve.", explanationEs: "Evita juicios generales; sé específico sobre qué funcionó y qué podría mejorar", category: "usage" },
        { id: "l7t5_cm3", wrong: "You need to improve", correct: "I think there's an opportunity to strengthen your data analysis skills. Have you considered taking the advanced Excel course?", explanation: "Offer concrete, actionable suggestions, not just vague statements.", explanationEs: "Ofrece sugerencias concretas y accionables, no solo declaraciones vagas", category: "usage" },
        { id: "l7t5_cm4", wrong: "But... (después de elogios)", correct: "And... / Additionally... / One area that could strengthen this further...", explanation: "'But' negates everything positive said before; use connectors that add rather than contradict.", explanationEs: "'But' anula todo lo positivo dicho antes; usa conectores que añadan en lugar de contradecir", category: "grammar" },
        { id: "l7t5_cm5", wrong: "Everyone thinks you should...", correct: "I've observed... / From my perspective...", explanation: "Speak from your own observation; invoking 'everyone' can feel like a group attack.", explanationEs: "Habla desde tu propia observación; invocar 'todos' puede sentirse como ataque grupal", category: "usage" },
      ],
      exercises: [
        {
          type: "sandwich-construction",
          instruction: "Construye feedback usando el modelo sandwich (positivo + mejora + positivo)",
          scenarios: [
            {
              situation: "Un colega hizo una buena presentación pero habló muy rápido",
              positive1: "Your presentation content was really well-researched and informative",
              improvement: "One thing that might help the audience follow along better would be to slow down the pace a bit",
              positive2: "Your confidence and knowledge of the subject really showed through"
            },
            {
              situation: "Un empleado entrega trabajo de calidad pero siempre tarde",
              positive1: "I consistently appreciate the quality and thoroughness of your work",
              improvement: "One area I'd like us to work on together is meeting deadlines more consistently",
              positive2: "Your attention to detail is a real strength that the team values"
            }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma este feedback negativo en feedback constructivo",
          items: [
            { negative: "Your writing is unclear", constructive: "I noticed some sections of your report could benefit from more structure. Have you considered using bullet points to organize the key findings?" },
            { negative: "You don't participate in meetings", constructive: "I've observed that you have great ideas when we speak one-on-one. I'd love to hear more of your input in team meetings - your perspective is valuable." },
            { negative: "This project failed because of you", constructive: "Looking at the project results, I think there are lessons we can all learn. Let's discuss what specific challenges you encountered and how we can better support future projects." },
            { negative: "You're too slow", constructive: "I appreciate how thorough you are with your work. One thing that might help balance quality with efficiency is time-boxing tasks. What do you think?" }
          ]
        },
        {
          type: "fill-in-the-blank",
          instruction: "Completa las frases de feedback con expresiones apropiadas",
          items: [
            { sentence: "I really _____ your dedication to this project.", answer: "appreciate" },
            { sentence: "One area for _____ might be time management.", answer: "improvement" },
            { sentence: "Have you _____ breaking the task into smaller steps?", answer: "considered" },
            { sentence: "_____, this was a strong piece of work.", answer: "Overall" }
          ]
        },
        {
          type: "identification",
          instruction: "Identifica qué está mal con cada ejemplo de feedback y cómo mejorarlo",
          items: [
            { feedback: "You did okay, but...", issue: "The 'but' negates the positive", improvement: "You did a solid job on X. Additionally, for even better results, consider Y." },
            { feedback: "Everyone has noticed you're struggling", issue: "Speaking for others feels like ganging up", improvement: "I've noticed some challenges with X. Let's talk about how I can support you." },
            { feedback: "Why can't you just do it right?", issue: "Confrontational and not constructive", improvement: "I'd like to understand your approach to X. What challenges are you facing?" }
          ]
        }
      ],
      modelDialogue: {
        title: "Sesión de retroalimentación uno a uno",
        context: "Un gerente da feedback a un empleado sobre su desempeño reciente",
        dialogue: [
          { speaker: "Manager", text: "Thanks for meeting with me. I wanted to share some thoughts on the Anderson project.", translation: "Gracias por reunirte conmigo. Quería compartir algunos pensamientos sobre el proyecto Anderson." },
          { speaker: "Employee", text: "Sure, I'd appreciate your feedback.", translation: "Claro, agradecería tu retroalimentación." },
          { speaker: "Manager", text: "First of all, I really appreciate how you handled the client communication. Your emails were professional and kept everyone informed.", translation: "Primero que nada, realmente aprecio cómo manejaste la comunicación con el cliente. Tus emails fueron profesionales y mantuvieron a todos informados." },
          { speaker: "Employee", text: "Thank you. I tried to be proactive with updates.", translation: "Gracias. Intenté ser proactivo con las actualizaciones." },
          { speaker: "Manager", text: "One area for improvement might be the internal documentation. I noticed some of the process notes were incomplete, which made it harder for the team to follow.", translation: "Un área de mejora podría ser la documentación interna. Noté que algunas notas de proceso estaban incompletas, lo que dificultó que el equipo siguiera." },
          { speaker: "Employee", text: "I see. That's a fair point.", translation: "Ya veo. Es un punto válido." },
          { speaker: "Manager", text: "Have you considered using the documentation templates we have? They might help ensure all sections are covered.", translation: "¿Has considerado usar las plantillas de documentación que tenemos? Podrían ayudar a asegurar que todas las secciones estén cubiertas." },
          { speaker: "Employee", text: "That's a good idea. I'll start using them for the next project.", translation: "Es una buena idea. Empezaré a usarlas para el próximo proyecto." },
          { speaker: "Manager", text: "Overall, your work on this project was solid, and the client was happy with the results. Keep up the good work!", translation: "En general, tu trabajo en este proyecto fue sólido, y el cliente quedó contento con los resultados. ¡Sigue así!" }
        ],
        keyPhrases: [
          "I really appreciate how you...",
          "One area for improvement might be...",
          "I noticed that...",
          "Have you considered...?",
          "Overall, your work was..."
        ]
      },
      pronunciationFocus: {
        title: "Tono y suavidad al dar feedback",
        points: [
          "Mantén un tono cálido y de apoyo, no crítico o condescendiente",
          "'I noticed' - tono neutro y observacional, no acusatorio",
          "Pausa antes de la parte constructiva para que la persona procese lo positivo",
          "'One area for improvement MIGHT be' - 'might' suaviza la crítica",
          "Termina con tono positivo y energético en el cierre"
        ],
        examples: [
          { word: "I appreciate", phonetic: "/aɪ əˈpriːʃieɪt/", tip: "Tono cálido y sincero" },
          { word: "One area for improvement", phonetic: "/wʌn ˈeəriə fɔːr ɪmˈpruːvmənt/", tip: "Tono constructivo, no crítico" },
          { word: "Have you considered", phonetic: "/hæv juː kənˈsɪdərd/", tip: "Tono de pregunta genuina, no retórica" }
        ]
      },
      culturalNote: {
        title: "Feedback en culturas anglófonas",
        content: "En culturas angloparlantes de negocios, el feedback directo pero constructivo es valorado. El modelo 'sandwich' es ampliamente enseñado, aunque algunos lo consideran predecible. Los estadounidenses tienden a ser más directos con el feedback que los británicos, quienes usan más 'hedging' (suavizadores). Frases como 'perhaps you might consider...' o 'it might be worth...' son típicamente británicas. En cualquier caso, el feedback debe ser privado (nunca en público), específico y orientado al futuro ('next time, try...').",
        examples: [
          "US: 'I think the report needs more data in section 3.'",
          "UK: 'Perhaps you might consider adding a bit more data to section 3?'",
          "Ambos: Dar feedback en privado, ser específico, ofrecer soluciones"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Qué es el modelo 'sandwich' de feedback?",
          options: [
            "Dar solo feedback negativo",
            "Positivo + Área de mejora + Positivo",
            "Repetir el mismo punto tres veces",
            "Negativo + Positivo + Negativo"
          ],
          correctAnswer: 1,
          explanation: "El modelo sandwich enmarca la crítica constructiva entre comentarios positivos para que sea más receptiva"
        },
        {
          question: "¿Por qué evitar palabras como 'always' y 'never' en feedback?",
          options: [
            "Son demasiado formales",
            "Son generalizaciones que suelen ser inexactas y provocan defensividad",
            "Son demasiado informales",
            "No hay problema con usarlas"
          ],
          correctAnswer: 1,
          explanation: "Las generalizaciones absolutas son raramente ciertas y hacen que la persona se sienta atacada injustamente"
        },
        {
          question: "¿Cuál es mejor: 'You did well, but...' o 'You did well, and...'?",
          options: [
            "'But' es mejor porque es más directo",
            "'And' es mejor porque no anula lo positivo",
            "Son exactamente iguales",
            "Ninguno es apropiado"
          ],
          correctAnswer: 1,
          explanation: "'But' tiende a anular todo lo que viene antes; 'and' o 'additionally' mantiene ambos puntos válidos"
        },
        {
          question: "¿Cómo debes presentar críticas específicas?",
          options: [
            "'You're bad at reports'",
            "'I noticed the last report was missing the executive summary'",
            "'Everyone says your reports need work'",
            "'Why don't you write better reports?'"
          ],
          correctAnswer: 1,
          explanation: "Ser específico con ejemplos concretos es más útil y menos amenazante que generalizaciones"
        },
        {
          question: "¿Por qué terminar con algo positivo?",
          options: [
            "Para confundir a la persona",
            "Para que la persona se vaya motivada y con una dirección clara",
            "Porque las reglas lo exigen",
            "No es necesario"
          ],
          correctAnswer: 1,
          explanation: "Cerrar positivamente mantiene la motivación y deja una impresión de apoyo"
        },
        {
          question: "¿Cuál es una forma efectiva de ofrecer sugerencias?",
          options: [
            "'You must do X'",
            "'Have you considered trying X?'",
            "'Everyone knows you should do X'",
            "'It's obvious that X is better'"
          ],
          correctAnswer: 1,
          explanation: "Preguntas como 'Have you considered...?' invitan reflexión sin imponer"
        }
      ],
      guidedProduction: [
        {
          prompt: "Da feedback a alguien cuyo trabajo es excelente pero tiene problemas de comunicación con el equipo",
          sampleResponse: "I really appreciate the quality of your work - your attention to detail consistently produces excellent results. One area that could help the team even more would be sharing your progress updates more regularly. Have you considered sending brief status emails twice a week? Overall, your contributions are valuable, and better communication would help everyone appreciate your work even more."
        },
        {
          prompt: "Da feedback a un empleado nuevo que tiene buena actitud pero comete errores frecuentes",
          sampleResponse: "I've noticed your enthusiasm and positive attitude - it's really refreshing for the team. As you're still learning, one thing that might help reduce errors would be double-checking your work before submission. Have you considered creating a checklist for the most common tasks? Keep up the great energy, and the accuracy will come with practice."
        },
        {
          prompt: "Da feedback a un colega sobre una presentación que tenía buen contenido pero mala entrega",
          sampleResponse: "The research and analysis in your presentation were really impressive - you clearly put a lot of effort into the content. One area for improvement might be the delivery; some sections felt a bit rushed, which made it hard to absorb all the great information. Have you considered practicing with a timer or presenting to a colleague first? Overall, the substance was excellent, and with some polish on delivery, it will be even more impactful."
        },
        {
          prompt: "Da feedback a alguien que ha mejorado significativamente pero aún tiene áreas de desarrollo",
          sampleResponse: "I want to recognize how much you've improved over the past few months - your project management skills have really grown. One area I'd encourage you to continue developing is stakeholder communication; it's gotten better, but there's still room to strengthen those relationships. Have you considered scheduling regular check-ins with key stakeholders? Keep up the excellent progress!"
        }
      ],
      connectionToPrevious: "Las habilidades de discusión de problemas y soluciones del Task 4 te ayudan a estructurar el feedback: identificar el área de mejora y proponer soluciones específicas.",
      connectionToNext: "El feedback constructivo es esencial cuando usamos el tercer condicional para reflexionar sobre el pasado: 'If you had communicated earlier, we could have addressed this sooner.'"
    },
    {
      id: 6,
      title: "Third Conditional",
      titleEs: "Condicional Tercer Tipo",
      introduction: {
        title: "💭 Tercer Condicional (Past Hypothetical)",
        explanation: "El tercer condicional habla de situaciones hipotéticas en el pasado - cosas que no sucedieron y su resultado imaginario. Se usa para expresar arrepentimiento o especular.",
        keyPoints: [
          "Estructura: If + pasado perfecto, would have + participio pasado",
          "Ejemplo: 'If I had studied, I would have passed' (pero no estudié, así que no pasé)",
          "Uso: situaciones irreales del pasado, arrepentimiento",
          "Variaciones: could have, might have en lugar de would have",
          "Mixto: If + past perfect, would + base (efecto en presente)"
        ],
        examples: [
          { english: "If I had known, I would have told you.", spanish: "Si hubiera sabido, te habría dicho.", explanation: "Pasado irreal" },
          { english: "If she hadn't missed the bus, she wouldn't have been late.", spanish: "Si ella no hubiera perdido el autobús, no habría llegado tarde.", explanation: "Doble negativo" },
          { english: "I might have accepted if they had offered more.", spanish: "Podría haber aceptado si hubieran ofrecido más.", explanation: "Con might have" }
        ],
        tips: [
          "💡 El tercer condicional SIEMPRE es irreal - el pasado ya sucedió",
          "💡 'If only I had...' expresa arrepentimiento fuerte",
          "💡 Condicional mixto: If + past perfect + would + base verb (efecto presente)"
        ],
        whenToUse: [
          'Para expresar arrepentimiento: "If I had known, I would have helped"',
          'Al especular sobre el pasado: "If we had invested earlier, we would have profited"',
          'En reflexiones: "If only I had studied harder for that exam"',
          'Para explicar consecuencias pasadas: "If she had told me, I would have acted differently"'
        ],
        whenNotToUse: [
          '"If I would have" → "If I had": "If I had known" (NO "If I would have known")',
          'Para situaciones reales/presentes → usa segundo condicional: "If I had time" (pasado) vs "If I have time" (presente)',
          'No uses para futuro: "If it rains" (NO "If it had rained" para algo que puede pasar)'
        ]
      },
      objectives: ["Formar el tercer condicional", "Expresar arrepentimiento", "Especular sobre el pasado"],
      grammarTheoryIds: ["b2-conditionals-all"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l7t6_n1", word: "regret", translation: "arrepentimiento", type: "noun", definition: "feeling sorry about past", definitionEs: "sentir pena por el pasado", example: "I have no regrets.", exampleEs: "No tengo arrepentimientos.", related: [], difficulty: 1 },
          { id: "l7t6_n2", word: "hindsight", translation: "retrospectiva", type: "noun", definition: "understanding after the event", definitionEs: "entendimiento después del evento", example: "In hindsight, I should have waited.", exampleEs: "En retrospectiva, debería haber esperado.", related: [], difficulty: 2 },
          { id: "l7t6_n3", word: "mistake", translation: "error", type: "noun", definition: "something done wrong", definitionEs: "algo hecho mal", example: "If I hadn't made that mistake...", exampleEs: "Si no hubiera cometido ese error...", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l7t6_v1", word: "would have + pp", translation: "habría + participio", type: "verb", definition: "hypothetical past result", definitionEs: "resultado hipotético pasado", example: "I would have helped you.", exampleEs: "Te habría ayudado.", related: [], difficulty: 1 },
          { id: "l7t6_v2", word: "could have + pp", translation: "podría haber + participio", type: "verb", definition: "past possibility", definitionEs: "posibilidad pasada", example: "You could have won.", exampleEs: "Podrías haber ganado.", related: [], difficulty: 1 },
          { id: "l7t6_v3", word: "might have + pp", translation: "podría haber + participio", type: "verb", definition: "uncertain past possibility", definitionEs: "posibilidad pasada incierta", example: "She might have agreed.", exampleEs: "Ella podría haber aceptado.", related: [], difficulty: 1 },
          { id: "l7t6_v4", word: "should have + pp", translation: "debería haber + participio", type: "verb", definition: "past obligation not done", definitionEs: "obligación pasada no hecha", example: "I should have called.", exampleEs: "Debería haber llamado.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l7t6_a1", word: "hypothetical", translation: "hipotético", type: "adjective", definition: "imagined, not real", definitionEs: "imaginado, no real", example: "This is hypothetical.", exampleEs: "Esto es hipotético.", related: [], difficulty: 2 },
          { id: "l7t6_a2", word: "unreal", translation: "irreal", type: "adjective", definition: "not real", definitionEs: "no real", example: "An unreal past situation.", exampleEs: "Una situación pasada irreal.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l7t6_e1", word: "If I had known...", translation: "Si hubiera sabido...", type: "expression", definition: "past hypothetical", definitionEs: "hipotético pasado", example: "If I had known, I would have come.", exampleEs: "Si hubiera sabido, habría venido.", related: [], difficulty: 1 },
          { id: "l7t6_e2", word: "If only I had...", translation: "Si tan solo hubiera...", type: "expression", definition: "expressing regret", definitionEs: "expresando arrepentimiento", example: "If only I had studied more.", exampleEs: "Si tan solo hubiera estudiado más.", related: [], difficulty: 1 },
          { id: "l7t6_e3", word: "I wish I had...", translation: "Desearía haber...", type: "expression", definition: "past regret", definitionEs: "arrepentimiento pasado", example: "I wish I had taken that job.", exampleEs: "Desearía haber tomado ese trabajo.", related: [], difficulty: 1 },
          { id: "l7t6_e4", word: "What would have happened if...?", translation: "¿Qué habría pasado si...?", type: "expression", definition: "speculating about past", definitionEs: "especulando sobre el pasado", example: "What would have happened if you had said yes?", exampleEs: "¿Qué habría pasado si hubieras dicho que sí?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l7t6_cm1",
          wrong: "If I would have known, I would have helped",
          correct: "If I had known, I would have helped",
          explanation: "In the 'if' clause, use past perfect (had + pp), NOT 'would have'. 'Would have' only goes in the result clause.",
          explanationEs: "En la cláusula 'if', usa past perfect (had + pp), NO 'would have'. 'Would have' solo va en la cláusula de resultado",
          category: "grammar" as const
        },
        {
          id: "l7t6_cm2",
          wrong: "If I had knew the answer",
          correct: "If I had known the answer",
          explanation: "After 'had', use the past participle (known), not the simple past (knew).",
          explanationEs: "Después de 'had', usa el participio pasado (known), no el pasado simple (knew)",
          category: "grammar" as const
        },
        {
          id: "l7t6_cm3",
          wrong: "If I would study harder, I would have passed",
          correct: "If I had studied harder, I would have passed",
          explanation: "For unreal past situations, use 'had + pp' in the if clause, not 'would + base verb'.",
          explanationEs: "Para situaciones irreales del pasado, usa 'had + pp', no 'would + base verb' en la cláusula if",
          category: "grammar" as const
        },
        {
          id: "l7t6_cm4",
          wrong: "I wish I studied more for the exam",
          correct: "I wish I had studied more for the exam",
          explanation: "For past regrets, use 'wish + past perfect (had + pp)'.",
          explanationEs: "Para arrepentimientos del pasado, usa 'wish + past perfect (had + pp)'",
          category: "grammar" as const
        },
        {
          id: "l7t6_cm5",
          wrong: "If I didn't miss the train, I would have arrived on time",
          correct: "If I hadn't missed the train, I would have arrived on time",
          explanation: "The negation of unreal past requires 'hadn't + pp', not 'didn't + base verb'.",
          explanationEs: "La negación del pasado irreal requiere 'hadn't + pp', no 'didn't + base verb'",
          category: "grammar" as const
        }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Transforma estas situaciones en oraciones con tercer condicional",
          items: [
            { situation: "I didn't study. I failed the exam.", thirdConditional: "If I had studied, I wouldn't have failed the exam." },
            { situation: "She missed the bus. She was late for work.", thirdConditional: "If she hadn't missed the bus, she wouldn't have been late for work." },
            { situation: "They didn't tell me. I didn't know.", thirdConditional: "If they had told me, I would have known." },
            { situation: "He forgot his passport. He couldn't travel.", thirdConditional: "If he hadn't forgotten his passport, he could have traveled." }
          ]
        },
        {
          type: "fill-in-the-blank",
          instruction: "Completa las oraciones con la forma correcta del verbo",
          items: [
            { sentence: "If I _____ (know) about the meeting, I _____ (attend).", answer: "had known, would have attended" },
            { sentence: "She _____ (help) if you _____ (ask) her.", answer: "would have helped, had asked" },
            { sentence: "If we _____ (leave) earlier, we _____ (not miss) the flight.", answer: "had left, wouldn't have missed" },
            { sentence: "I _____ (buy) it if it _____ (be) cheaper.", answer: "would have bought, had been" }
          ]
        },
        {
          type: "regret-expression",
          instruction: "Expresa arrepentimiento usando 'If only' o 'I wish' + past perfect",
          items: [
            { situation: "I didn't save money", regret: "If only I had saved money. / I wish I had saved money." },
            { situation: "I didn't listen to my parents", regret: "If only I had listened to my parents. / I wish I had listened to my parents." },
            { situation: "I didn't take the opportunity", regret: "If only I had taken the opportunity. / I wish I had taken that opportunity." },
            { situation: "I didn't learn English earlier", regret: "If only I had learned English earlier. / I wish I had started learning English earlier." }
          ]
        },
        {
          type: "choice",
          instruction: "Elige la forma correcta para completar cada oración",
          items: [
            { question: "If she _____ the email, she would have responded.", options: ["saw", "had seen", "would see"], answer: "had seen" },
            { question: "I _____ if I had known you were sick.", options: ["would come", "would have come", "had come"], answer: "would have come" },
            { question: "They might _____ if you had invited them.", options: ["come", "came", "have come"], answer: "have come" },
            { question: "If only I _____ more carefully!", options: ["drove", "had driven", "would drive"], answer: "had driven" }
          ]
        }
      ],
      modelDialogue: {
        title: "Reflexionando sobre decisiones pasadas",
        context: "Dos amigos discuten oportunidades perdidas en sus carreras",
        dialogue: [
          { speaker: "Alex", text: "Sometimes I wonder what would have happened if I had taken that job in London.", translation: "A veces me pregunto qué habría pasado si hubiera tomado ese trabajo en Londres." },
          { speaker: "Maria", text: "I know what you mean. If I hadn't been so afraid of change, I might have moved abroad too.", translation: "Sé a qué te refieres. Si no hubiera tenido tanto miedo al cambio, yo también podría haberme mudado al extranjero." },
          { speaker: "Alex", text: "But then again, if I had moved, I wouldn't have met my wife.", translation: "Pero de nuevo, si me hubiera mudado, no habría conocido a mi esposa." },
          { speaker: "Maria", text: "That's true. In hindsight, things work out. Still, I wish I had traveled more when I was younger.", translation: "Es verdad. En retrospectiva, las cosas funcionan. Aún así, desearía haber viajado más cuando era más joven." },
          { speaker: "Alex", text: "If only we had known then what we know now!", translation: "¡Si tan solo hubiéramos sabido entonces lo que sabemos ahora!" },
          { speaker: "Maria", text: "Exactly! But if we had made different choices, we wouldn't be who we are today.", translation: "¡Exactamente! Pero si hubiéramos tomado decisiones diferentes, no seríamos quienes somos hoy." }
        ],
        keyPhrases: [
          "What would have happened if...",
          "If I hadn't been so...",
          "I might have...",
          "I wouldn't have...",
          "I wish I had...",
          "If only we had known..."
        ]
      },
      pronunciationFocus: {
        title: "Contracciones en el tercer condicional",
        points: [
          "'I'd' puede significar 'I had' o 'I would' - el contexto lo aclara",
          "'If I'd known' = 'If I had known' /ɪf aɪd noʊn/",
          "'I would've' = 'I would have' /aɪ ˈwʊdəv/ (NUNCA 'I would of')",
          "'wouldn't have' = /ˈwʊdnt əv/ - el 'have' se reduce mucho",
          "En habla rápida, 'If I'd' casi suena como /ɪfaɪd/"
        ],
        examples: [
          { word: "I would have gone", phonetic: "/aɪ ˈwʊdəv ɡɒn/", tip: "'Would have' suena como 'would-of'" },
          { word: "If I had known", phonetic: "/ɪf aɪ həd noʊn/", tip: "'had' se reduce; énfasis en 'known'" },
          { word: "wouldn't have been", phonetic: "/ˈwʊdnt əv biːn/", tip: "Muy contraído en habla natural" }
        ]
      },
      culturalNote: {
        title: "Expresando arrepentimiento en culturas anglófonas",
        content: "Los angloparlantes frecuentemente usan el tercer condicional para reflexionar sobre el pasado en conversaciones casuales. Sin embargo, hay una tendencia cultural, especialmente en Estados Unidos, a evitar quedarse atascado en arrepentimientos. Frases como 'No regrets' o 'Everything happens for a reason' reflejan esta mentalidad. En entornos profesionales, el tercer condicional se usa productivamente en post-mortems y retrospectivas: 'If we had allocated more resources, we could have met the deadline.' Esto convierte el arrepentimiento en aprendizaje.",
        examples: [
          "Casual: 'If only I'd bought Bitcoin in 2010!' (medio en broma)",
          "Profesional: 'What could we have done differently?'",
          "Filosófico: 'No point dwelling on what could have been'"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la estructura del tercer condicional?",
          options: [
            "If + past simple, would + base verb",
            "If + past perfect, would + have + past participle",
            "If + present, will + base verb",
            "If + would have, had + past participle"
          ],
          correctAnswer: 1,
          explanation: "El tercer condicional usa: If + past perfect (had + pp), would/could/might + have + past participle"
        },
        {
          question: "¿Por qué es incorrecto 'If I would have known'?",
          options: [
            "Es demasiado largo",
            "'Would' no debe usarse en la cláusula 'if' del tercer condicional",
            "Es informal",
            "Es correcto"
          ],
          correctAnswer: 1,
          explanation: "En la cláusula 'if', siempre usamos past perfect (had + pp), no 'would have'"
        },
        {
          question: "Completa: 'If she _____ earlier, she wouldn't have missed the train.'",
          options: ["left", "had left", "would leave", "has left"],
          correctAnswer: 1,
          explanation: "En la cláusula 'if' del tercer condicional, usamos past perfect: 'had left'"
        },
        {
          question: "¿Qué expresa 'I wish I had studied more'?",
          options: [
            "Un deseo para el futuro",
            "Arrepentimiento sobre el pasado",
            "Una situación presente",
            "Una condición real"
          ],
          correctAnswer: 1,
          explanation: "'Wish + past perfect' expresa arrepentimiento sobre algo que no hicimos en el pasado"
        },
        {
          question: "¿Cuál es la diferencia entre 'would have' y 'could have' en el resultado?",
          options: [
            "No hay diferencia",
            "'Would have' = resultado seguro; 'could have' = resultado posible",
            "'Could have' es más formal",
            "'Would have' es para negativas"
          ],
          correctAnswer: 1,
          explanation: "'Would have' indica un resultado definitivo; 'could have' y 'might have' indican posibilidad"
        },
        {
          question: "En 'I would've gone', ¿qué significa ''ve'?",
          options: [
            "of",
            "have",
            "had",
            "was"
          ],
          correctAnswer: 1,
          explanation: "'Would've' es la contracción de 'would have', no 'would of' (error común)"
        }
      ],
      guidedProduction: [
        {
          prompt: "Reflexiona sobre una oportunidad de trabajo que no tomaste",
          sampleResponse: "If I had accepted that job offer in Singapore, my career path would have been completely different. I might have learned Mandarin and developed expertise in Asian markets. However, if I had moved, I wouldn't have been here when my father got sick."
        },
        {
          prompt: "Especula sobre cómo habría sido tu vida si hubieras estudiado algo diferente",
          sampleResponse: "If I had studied medicine instead of engineering, I would have become a doctor. I might have worked in a hospital and helped people directly. But if I had chosen that path, I probably wouldn't have had the flexibility I enjoy now."
        },
        {
          prompt: "Habla sobre un error del pasado y lo que habrías hecho diferente",
          sampleResponse: "If I had listened to my financial advisor, I wouldn't have lost so much money in that investment. I should have done more research before making such a big decision. If only I had been more careful!"
        },
        {
          prompt: "Discute cómo un evento histórico podría haber sido diferente",
          sampleResponse: "What would have happened if the internet hadn't been invented? If we hadn't developed this technology, global communication would have been much slower. Many businesses that exist today wouldn't have been possible. The world might have remained more isolated."
        }
      ],
      connectionToPrevious: "El feedback constructivo que aprendimos puede incluir terceros condicionales reflexivos: 'If we had communicated better, this issue wouldn't have happened.'",
      connectionToNext: "El tercer condicional se usa frecuentemente en descripciones de procesos para explicar qué habría pasado si un paso se hubiera omitido."
    },
    {
      id: 7,
      title: "Describing Processes",
      titleEs: "Describiendo Procesos",
      introduction: {
        title: "⚙️ Describiendo Procesos",
        explanation: "Describir procesos paso a paso es esencial en muchos contextos profesionales. Aprenderás a estructurar explicaciones claras usando secuenciadores y voz pasiva.",
        keyPoints: [
          "Secuenciadores: First, Then, Next, After that, Finally",
          "Voz pasiva para procesos: 'The product is tested', 'The data is collected'",
          "Verbos de proceso: involve, require, consist of, result in",
          "Conectores: once, as soon as, before, until, while"
        ],
        examples: [
          { english: "First, the raw materials are collected. Then, they are processed.", spanish: "Primero, las materias primas son recolectadas. Luego, son procesadas.", explanation: "Secuencia + pasiva" },
          { english: "The process involves several stages.", spanish: "El proceso involucra varias etapas.", explanation: "Descripción general" },
          { english: "Once the data is analyzed, a report is generated.", spanish: "Una vez que los datos son analizados, se genera un reporte.", explanation: "Usando 'once'" }
        ],
        tips: [
          "💡 La voz pasiva es muy común en descripciones de procesos",
          "💡 Usa diagramas o pasos numerados para claridad",
          "💡 'The process consists of...' para introducir etapas"
        ],
        whenToUse: [
          'En manuales y documentación: "First, the data is collected. Then, it is analyzed"',
          'Para explicar procedimientos: "The application is reviewed by the committee"',
          'En presentaciones técnicas: "The process consists of five main stages"',
          'Al capacitar: "Once the form is completed, it should be submitted"'
        ],
        whenNotToUse: [
          'En instrucciones directas a alguien: "Click the button" (NO "The button should be clicked")',
          'Cuando el agente es importante: "The CEO approved the budget" (NO "The budget was approved")',
          'En conversación informal: "We do it like this" (NO "The process is carried out as follows")'
        ]
      },
      objectives: ["Usar secuenciadores", "Describir procesos en voz pasiva", "Explicar procedimientos claramente"],
      grammarTheoryIds: ["b2-passive-advanced"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l7t7_n1", word: "process", translation: "proceso", type: "noun", definition: "a series of steps", definitionEs: "una serie de pasos", example: "Explain the process.", exampleEs: "Explica el proceso.", related: [], difficulty: 1 },
          { id: "l7t7_n2", word: "stage", translation: "etapa", type: "noun", definition: "a step in a process", definitionEs: "un paso en un proceso", example: "This is the first stage.", exampleEs: "Esta es la primera etapa.", related: [], difficulty: 1 },
          { id: "l7t7_n3", word: "procedure", translation: "procedimiento", type: "noun", definition: "a way of doing something", definitionEs: "una forma de hacer algo", example: "Follow the procedure.", exampleEs: "Sigue el procedimiento.", related: [], difficulty: 1 },
          { id: "l7t7_n4", word: "step", translation: "paso", type: "noun", definition: "one action in a series", definitionEs: "una acción en una serie", example: "What's the next step?", exampleEs: "¿Cuál es el siguiente paso?", related: [], difficulty: 1 },
          { id: "l7t7_n5", word: "sequence", translation: "secuencia", type: "noun", definition: "an order of events", definitionEs: "un orden de eventos", example: "Follow the sequence.", exampleEs: "Sigue la secuencia.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l7t7_v1", word: "involve", translation: "involucrar", type: "verb", definition: "to include as part of", definitionEs: "incluir como parte de", example: "The process involves three steps.", exampleEs: "El proceso involucra tres pasos.", related: [], difficulty: 1 },
          { id: "l7t7_v2", word: "require", translation: "requerir", type: "verb", definition: "to need", definitionEs: "necesitar", example: "This requires approval.", exampleEs: "Esto requiere aprobación.", related: ["requirement"], difficulty: 1 },
          { id: "l7t7_v3", word: "consist of", translation: "consistir en", type: "verb", definition: "to be made up of", definitionEs: "estar compuesto de", example: "The process consists of five stages.", exampleEs: "El proceso consiste en cinco etapas.", related: [], difficulty: 1 },
          { id: "l7t7_v4", word: "result in", translation: "resultar en", type: "verb", definition: "to cause", definitionEs: "causar", example: "This results in higher quality.", exampleEs: "Esto resulta en mayor calidad.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l7t7_a1", word: "sequential", translation: "secuencial", type: "adjective", definition: "in order", definitionEs: "en orden", example: "It's a sequential process.", exampleEs: "Es un proceso secuencial.", related: [], difficulty: 2 },
          { id: "l7t7_a2", word: "initial", translation: "inicial", type: "adjective", definition: "first", definitionEs: "primero", example: "The initial stage...", exampleEs: "La etapa inicial...", related: [], difficulty: 1 },
          { id: "l7t7_a3", word: "final", translation: "final", type: "adjective", definition: "last", definitionEs: "último", example: "The final step is...", exampleEs: "El paso final es...", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l7t7_e1", word: "First... Then... Next... Finally...", translation: "Primero... Luego... Después... Finalmente...", type: "expression", definition: "sequencing", definitionEs: "secuenciando", example: "First, collect the data. Then, analyze it.", exampleEs: "Primero, recolecta los datos. Luego, analízalos.", related: [], difficulty: 1 },
          { id: "l7t7_e2", word: "Once... (then)...", translation: "Una vez que... (entonces)...", type: "expression", definition: "after something happens", definitionEs: "después de que algo sucede", example: "Once approved, we can proceed.", exampleEs: "Una vez aprobado, podemos proceder.", related: [], difficulty: 1 },
          { id: "l7t7_e3", word: "The process consists of...", translation: "El proceso consiste en...", type: "expression", definition: "introducing stages", definitionEs: "introduciendo etapas", example: "The process consists of three main stages.", exampleEs: "El proceso consiste en tres etapas principales.", related: [], difficulty: 1 },
          { id: "l7t7_e4", word: "At this stage...", translation: "En esta etapa...", type: "expression", definition: "referring to current step", definitionEs: "refiriéndose al paso actual", example: "At this stage, quality is checked.", exampleEs: "En esta etapa, se verifica la calidad.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t7_cm1", wrong: "First, we collect data. Second, we analyze it. Third, we report", correct: "First, the data is collected. Then, it is analyzed. Finally, a report is generated", explanation: "In technical process descriptions, the passive voice focuses on the process, not on who does it.", explanationEs: "En descripciones de procesos técnicos, la voz pasiva enfoca en el proceso, no en quién lo hace", category: "grammar" },
        { id: "l7t7_cm2", wrong: "The process consists in three stages", correct: "The process consists of three stages", explanation: "'Consist of' is the correct expression, not 'consist in'.", explanationEs: "'Consist of' es la expresión correcta, no 'consist in'", category: "grammar" },
        { id: "l7t7_cm3", wrong: "After that is finished, then we move to the next step", correct: "Once that is finished, we move to the next step", explanation: "'Once' is more elegant than 'After that' + 'then'; avoid redundancy.", explanationEs: "'Once' es más elegante que 'After that' + 'then'; evita la redundancia", category: "usage" },
        { id: "l7t7_cm4", wrong: "At final, the product is packaged", correct: "Finally, the product is packaged / At the final stage, the product is packaged", explanation: "Use 'Finally' or 'At the final stage', not 'At final'.", explanationEs: "Usa 'Finally' o 'At the final stage', no 'At final'", category: "vocabulary" },
        { id: "l7t7_cm5", wrong: "This results to higher quality", correct: "This results in higher quality", explanation: "'Result in' is the correct preposition, not 'result to'.", explanationEs: "'Result in' es la preposición correcta, no 'result to'", category: "grammar" },
      ],
      exercises: [
        {
          type: "sequencing",
          instruction: "Ordena estos pasos para describir cómo se hace café",
          items: [
            { step: "The water is heated to the correct temperature", order: 2 },
            { step: "Fresh coffee beans are selected and ground", order: 1 },
            { step: "The coffee is poured into a cup", order: 5 },
            { step: "The hot water is passed through the coffee grounds", order: 4 },
            { step: "The coffee grounds are placed in a filter", order: 3 },
            { step: "Finally, milk or sugar may be added according to preference", order: 6 }
          ]
        },
        {
          type: "passive-transformation",
          instruction: "Transforma estas oraciones activas a voz pasiva para descripciones de procesos",
          items: [
            { active: "Workers inspect the products", passive: "The products are inspected" },
            { active: "The system generates a report", passive: "A report is generated by the system" },
            { active: "Engineers test the software", passive: "The software is tested" },
            { active: "They package the goods", passive: "The goods are packaged" }
          ]
        },
        {
          type: "fill-in-the-blank",
          instruction: "Completa con el secuenciador apropiado",
          items: [
            { sentence: "_____, the raw materials are gathered. _____, they are sorted.", answer: "First, Then" },
            { sentence: "_____ the mixture is heated, it is cooled down.", answer: "Once/After" },
            { sentence: "_____ this stage, quality control checks are performed.", answer: "At" },
            { sentence: "The data is collected and _____ analyzed.", answer: "subsequently/then" }
          ]
        },
        {
          type: "process-description",
          instruction: "Describe estos procesos usando secuenciadores y voz pasiva",
          scenarios: [
            {
              process: "Hacer una reservación en línea",
              model: "First, the website is accessed and the desired dates are entered. Then, available options are displayed. Next, the preferred option is selected. After that, personal details are entered. Finally, the payment is processed and a confirmation is sent."
            },
            {
              process: "El ciclo del agua",
              model: "The process consists of several stages. First, water is evaporated from oceans and lakes by the sun's heat. Then, the vapor rises and forms clouds. Once the clouds become saturated, precipitation occurs. Finally, the water is collected in rivers and oceans, and the cycle begins again."
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Explicando un proceso de producción",
        context: "Un supervisor explica el proceso de manufactura a un nuevo empleado",
        dialogue: [
          { speaker: "Supervisor", text: "Let me walk you through our production process. It consists of five main stages.", translation: "Déjame explicarte nuestro proceso de producción. Consiste en cinco etapas principales." },
          { speaker: "New Employee", text: "Okay, I'm ready to learn.", translation: "Bien, estoy listo para aprender." },
          { speaker: "Supervisor", text: "First, the raw materials are received and inspected for quality. Any defective materials are rejected at this stage.", translation: "Primero, las materias primas son recibidas e inspeccionadas por calidad. Cualquier material defectuoso es rechazado en esta etapa." },
          { speaker: "New Employee", text: "What happens after the inspection?", translation: "¿Qué pasa después de la inspección?" },
          { speaker: "Supervisor", text: "Once the materials pass inspection, they are processed in our main facility. Then, the components are assembled.", translation: "Una vez que los materiales pasan la inspección, son procesados en nuestra instalación principal. Luego, los componentes son ensamblados." },
          { speaker: "New Employee", text: "And then the final product is ready?", translation: "¿Y luego el producto final está listo?" },
          { speaker: "Supervisor", text: "Not quite. After assembly, the products are tested. Finally, they are packaged and shipped. The whole process takes about 48 hours.", translation: "No del todo. Después del ensamblaje, los productos son probados. Finalmente, son empaquetados y enviados. Todo el proceso toma aproximadamente 48 horas." }
        ],
        keyPhrases: [
          "The process consists of...",
          "First, X is/are...",
          "Once X passes/is completed...",
          "At this stage...",
          "After X, Y is/are...",
          "Finally, X is/are..."
        ]
      },
      pronunciationFocus: {
        title: "Claridad en secuenciadores",
        points: [
          "Pausa breve después de cada secuenciador para separar los pasos",
          "'First' /fɜːrst/ - pronunciación clara de la 'r'",
          "'Subsequently' /ˈsʌbsɪkwəntli/ - enfatiza la segunda sílaba",
          "'Finally' /ˈfaɪnəli/ - tono que indica conclusión",
          "En voz pasiva, 'is' y 'are' a menudo son débiles: 'The data is collected' → /ðə ˈdeɪtəz kəˈlektɪd/"
        ],
        examples: [
          { word: "First, then, next", phonetic: "/fɜːrst, ðen, nekst/", tip: "Pausa entre cada uno" },
          { word: "Once completed", phonetic: "/wʌns kəmˈpliːtɪd/", tip: "Une 'once' con lo que sigue" },
          { word: "consists of", phonetic: "/kənˈsɪsts əv/", tip: "'of' muy débil /əv/" }
        ]
      },
      culturalNote: {
        title: "Descripciones de procesos en el mundo profesional",
        content: "En entornos técnicos y científicos angloparlantes, la voz pasiva es estándar para descripciones de procesos porque enfatiza el proceso sobre el agente. Documentos como SOPs (Standard Operating Procedures), manuales técnicos y reportes científicos usan este estilo extensivamente. Sin embargo, en comunicación empresarial más casual, hay una tendencia hacia la voz activa por ser más directa. Conocer cuándo usar cada estilo es clave para la comunicación profesional efectiva.",
        examples: [
          "Técnico: 'The sample is heated to 100°C and maintained for 30 minutes.'",
          "Casual: 'We heat the sample to 100°C and keep it there for 30 minutes.'",
          "Mixto: 'First, we prepare the materials. Then, the mixture is processed automatically.'"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Por qué se usa frecuentemente la voz pasiva en descripciones de procesos?",
          options: [
            "Porque es más fácil de pronunciar",
            "Porque enfatiza el proceso y no quién lo realiza",
            "Porque es más informal",
            "Porque es obligatorio en inglés"
          ],
          correctAnswer: 1,
          explanation: "La voz pasiva pone el foco en las acciones y resultados del proceso, no en los agentes"
        },
        {
          question: "¿Cuál es el secuenciador correcto para el último paso?",
          options: ["At final", "In the end finally", "Finally", "At last step"],
          correctAnswer: 2,
          explanation: "'Finally' es el secuenciador estándar para indicar el último paso de un proceso"
        },
        {
          question: "Completa: 'The process _____ four main stages.'",
          options: ["consists in", "consists of", "consist of", "is consisting of"],
          correctAnswer: 1,
          explanation: "'Consist of' es la expresión correcta; no usa 'in' ni forma progresiva normalmente"
        },
        {
          question: "¿Qué conector usarías para indicar que algo sucede inmediatamente después?",
          options: ["Before", "Until", "Once/As soon as", "While"],
          correctAnswer: 2,
          explanation: "'Once' y 'As soon as' indican que la siguiente acción ocurre inmediatamente después de la anterior"
        },
        {
          question: "Transforma a pasiva: 'Engineers test the equipment'",
          options: [
            "The equipment test by engineers",
            "The equipment is tested",
            "Equipment are tested",
            "The equipment is testing"
          ],
          correctAnswer: 1,
          explanation: "La voz pasiva correcta es 'is tested' (is + past participle); el agente es opcional"
        },
        {
          question: "¿Cuál es mejor para iniciar una descripción de proceso?",
          options: [
            "'I will tell you how...'",
            "'The process consists of three stages...'",
            "'So basically what happens is...'",
            "'Let me start somewhere...'"
          ],
          correctAnswer: 1,
          explanation: "Una introducción clara que indica el número de etapas prepara al oyente para seguir el proceso"
        }
      ],
      guidedProduction: [
        {
          prompt: "Describe el proceso de contratar a un nuevo empleado",
          sampleResponse: "The hiring process consists of several stages. First, job requirements are defined and a position is posted. Then, applications are reviewed and suitable candidates are shortlisted. Next, interviews are conducted with selected applicants. After that, background checks are performed on the top candidate. Finally, an offer is made and, once accepted, the onboarding process begins."
        },
        {
          prompt: "Explica cómo funciona el reciclaje de papel",
          sampleResponse: "The paper recycling process involves multiple stages. First, used paper is collected from recycling bins. Then, it is sorted and transported to a recycling facility. At this stage, the paper is cleaned and any contaminants are removed. Next, the paper is mixed with water to create a pulp. Once the pulp is ready, it is pressed and dried to form new paper sheets. Finally, the recycled paper is cut and packaged for distribution."
        },
        {
          prompt: "Describe el proceso de hacer una compra en línea",
          sampleResponse: "The online purchasing process consists of five main steps. First, the desired product is searched for and selected. Then, it is added to the shopping cart. Once all items are selected, the checkout process is initiated. At this stage, shipping and payment information are entered. Finally, the order is confirmed and a tracking number is provided."
        },
        {
          prompt: "Explica cómo se procesa una solicitud de préstamo bancario",
          sampleResponse: "The loan application process involves several stages. Initially, an application form is completed by the customer. Then, the documentation is submitted and verified. Once the documents are approved, a credit check is conducted. After that, the loan terms are determined and presented to the applicant. Finally, if the terms are accepted, the funds are disbursed to the customer's account."
        }
      ],
      connectionToPrevious: "El tercer condicional puede usarse para explicar qué habría pasado si un paso del proceso se hubiera omitido: 'If the materials hadn't been inspected, defects would have been missed.'",
      connectionToNext: "Las descripciones de procesos a menudo requieren diferentes niveles de formalidad dependiendo de la audiencia, lo cual exploraremos en el siguiente task."
    },
    {
      id: 8,
      title: "Formal vs Informal Language",
      titleEs: "Lenguaje Formal vs Informal",
      introduction: {
        title: "👔 Lenguaje Formal vs Informal",
        explanation: "Saber cuándo usar lenguaje formal o informal es crucial. El contexto, la relación y el medio determinan el nivel de formalidad apropiado.",
        keyPoints: [
          "Formal: longer words, passive voice, no contractions",
          "Informal: shorter words, active voice, contractions",
          "Saludos: 'Dear Mr. Smith' vs 'Hi John'",
          "Peticiones: 'I would be grateful if...' vs 'Can you...?'",
          "Cierres: 'Yours sincerely' vs 'Cheers'"
        ],
        examples: [
          { english: "Formal: I would be grateful if you could send me the report.", spanish: "Formal: Le agradecería si pudiera enviarme el reporte.", explanation: "Petición formal" },
          { english: "Informal: Can you send me the report?", spanish: "Informal: ¿Puedes enviarme el reporte?", explanation: "Petición informal" },
          { english: "Formal: I regret to inform you... / Informal: Sorry, but...", spanish: "Formal: Lamento informarle... / Informal: Lo siento, pero...", explanation: "Malas noticias" }
        ],
        tips: [
          "💡 Usa lenguaje formal con desconocidos, superiores y en documentos oficiales",
          "💡 Usa informal con amigos, colegas cercanos y comunicaciones casuales",
          "💡 Cuando dudes, empieza formal y ajusta según la respuesta"
        ],
        whenToUse: [
          'Con clientes y superiores: "I would be grateful if you could..."',
          'En emails de negocios: "Please find attached..."',
          'Con amigos y colegas cercanos: "Hey, can you send me that file?"',
          'En documentos legales/contratos: "The undersigned agrees to..."'
        ],
        whenNotToUse: [
          'No uses "Hey" o "What\'s up" en emails a clientes → "Dear Mr. Smith"',
          'Evita "I would like to draw your attention" con amigos → "Check this out"',
          'No mezcles registros: "Kindly please" (redundante) o "Yo, I hereby request" (inconsistente)'
        ]
      },
      objectives: ["Distinguir registros formales e informales", "Adaptar el lenguaje al contexto", "Convertir entre registros"],
      grammarTheoryIds: ["b2-emphasis-cleft-sentences"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l7t8_n1", word: "register", translation: "registro", type: "noun", definition: "level of formality", definitionEs: "nivel de formalidad", example: "Use the appropriate register.", exampleEs: "Usa el registro apropiado.", related: [], difficulty: 2 },
          { id: "l7t8_n2", word: "tone", translation: "tono", type: "noun", definition: "the feeling in language", definitionEs: "el sentimiento en el lenguaje", example: "Keep a professional tone.", exampleEs: "Mantén un tono profesional.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l7t8_v1", word: "inquire (formal)", translation: "consultar (formal)", type: "verb", definition: "to ask (formal)", definitionEs: "preguntar (formal)", example: "I would like to inquire about...", exampleEs: "Me gustaría consultar sobre...", related: [], difficulty: 2 },
          { id: "l7t8_v2", word: "require (formal)", translation: "requerir (formal)", type: "verb", definition: "to need (formal)", definitionEs: "necesitar (formal)", example: "This matter requires attention.", exampleEs: "Este asunto requiere atención.", related: [], difficulty: 1 },
          { id: "l7t8_v3", word: "assist (formal)", translation: "asistir (formal)", type: "verb", definition: "to help (formal)", definitionEs: "ayudar (formal)", example: "How may I assist you?", exampleEs: "¿Cómo puedo asistirle?", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l7t8_a1", word: "formal", translation: "formal", type: "adjective", definition: "following official rules", definitionEs: "siguiendo reglas oficiales", example: "This is a formal email.", exampleEs: "Este es un email formal.", related: [], difficulty: 1 },
          { id: "l7t8_a2", word: "informal", translation: "informal", type: "adjective", definition: "casual, relaxed", definitionEs: "casual, relajado", example: "We can be informal here.", exampleEs: "Podemos ser informales aquí.", related: [], difficulty: 1 },
          { id: "l7t8_a3", word: "appropriate", translation: "apropiado", type: "adjective", definition: "suitable", definitionEs: "adecuado", example: "Is this tone appropriate?", exampleEs: "¿Es apropiado este tono?", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l7t8_e1", word: "I would be grateful if... (F)", translation: "Le agradecería si... (F)", type: "expression", definition: "formal request", definitionEs: "petición formal", example: "I would be grateful if you could reply.", exampleEs: "Le agradecería si pudiera responder.", related: [], difficulty: 1 },
          { id: "l7t8_e2", word: "Can you...? / Could you...? (I)", translation: "¿Puedes...? / ¿Podrías...? (I)", type: "expression", definition: "informal request", definitionEs: "petición informal", example: "Could you help me with this?", exampleEs: "¿Podrías ayudarme con esto?", related: [], difficulty: 1 },
          { id: "l7t8_e3", word: "I regret to inform you (F)", translation: "Lamento informarle (F)", type: "expression", definition: "formal bad news", definitionEs: "malas noticias formales", example: "I regret to inform you that...", exampleEs: "Lamento informarle que...", related: [], difficulty: 1 },
          { id: "l7t8_e4", word: "Sorry, but... (I)", translation: "Lo siento, pero... (I)", type: "expression", definition: "informal bad news", definitionEs: "malas noticias informales", example: "Sorry, but I can't make it.", exampleEs: "Lo siento, pero no puedo ir.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t8_cm1", wrong: "Using 'Dear Sir/Madam' with someone you know", correct: "Use 'Dear Mr./Ms. [Last Name]' or 'Dear [First Name]' depending on relationship", explanation: "'Dear Sir/Madam' is only for when you don't know the recipient's name.", explanationEs: "'Dear Sir/Madam' es solo para cuando no conoces el nombre del destinatario", category: "usage" },
        { id: "l7t8_cm2", wrong: "Using contractions in formal business letters", correct: "Write out full forms: 'I am' instead of 'I'm', 'cannot' instead of 'can't'", explanation: "Contractions are appropriate for informal communication but not for formal documents.", explanationEs: "Las contracciones son apropiadas para comunicación informal pero no para documentos formales", category: "usage" },
        { id: "l7t8_cm3", wrong: "Mixing formal and informal language in the same message", correct: "Maintain consistent register throughout", explanation: "Mixing registers confuses the reader and seems unprofessional.", explanationEs: "Mezclar registros confunde al lector y parece poco profesional", category: "usage" },
        { id: "l7t8_cm4", wrong: "Being too informal with superiors or clients", correct: "Start formal and adjust based on their communication style", explanation: "It's safer to start formal; it's easier to relax than to formalize.", explanationEs: "Es más seguro empezar formal; es más fácil relajarse que formalizar", category: "usage" },
        { id: "l7t8_cm5", wrong: "Ending formal emails with 'Bye' or 'See ya'", correct: "Use 'Kind regards', 'Best regards', or 'Yours sincerely'", explanation: "The closing should match the overall tone of the message.", explanationEs: "El cierre debe coincidir con el tono general del mensaje", category: "usage" },
      ],
      exercises: [
        {
          type: "register-transformation",
          instruction: "Transforma estas oraciones de informal a formal y viceversa",
          items: [
            { informal: "Can you send me the file?", formal: "I would be grateful if you could send me the file." },
            { informal: "Sorry, can't make it to the meeting.", formal: "I regret to inform you that I will be unable to attend the meeting." },
            { informal: "Thanks for the help!", formal: "Thank you for your assistance." },
            { informal: "What's the status on this?", formal: "I would like to inquire about the current status of this matter." },
            { informal: "Let me know ASAP.", formal: "Please respond at your earliest convenience." }
          ]
        },
        {
          type: "matching",
          instruction: "Relaciona las expresiones informales con sus equivalentes formales",
          items: [
            { informal: "I'm writing to ask about...", formal: "I am writing to inquire regarding..." },
            { informal: "Can you help me with...?", formal: "I would appreciate your assistance with..." },
            { informal: "I need this by Friday.", formal: "This is required by Friday." },
            { informal: "Sorry for the late reply.", formal: "Please accept my apologies for the delayed response." },
            { informal: "Give me a call.", formal: "Please do not hesitate to contact me." }
          ]
        },
        {
          type: "context-analysis",
          instruction: "Decide si cada situación requiere lenguaje formal (F) o informal (I)",
          items: [
            { situation: "Email to your best friend about weekend plans", register: "I" },
            { situation: "Cover letter for a job application", register: "F" },
            { situation: "Slack message to a close colleague", register: "I" },
            { situation: "Complaint letter to a company", register: "F" },
            { situation: "Email to a new client you haven't met", register: "F" },
            { situation: "Text message to your team about casual Friday", register: "I" }
          ]
        },
        {
          type: "error-identification",
          instruction: "Identifica problemas de registro en estos mensajes",
          items: [
            { message: "Dear Mr. Johnson, Yo, thanks for the meeting yesterday! Can't wait to work together. Cheers, Mike", issue: "Mezcla de saludo formal con lenguaje informal y cierre casual" },
            { message: "Hey! I would be most grateful if you could assist me with this matter at your earliest convenience. Thanks!", issue: "Saludo informal con lenguaje excesivamente formal" },
            { message: "Dear Sir/Madam, Thanks for getting back to me so quick!", issue: "Inicio muy formal con expresión informal ('so quick')" }
          ]
        }
      ],
      modelDialogue: {
        title: "La misma conversación en registros diferentes",
        context: "Comparación de cómo pedir una extensión de plazo de forma formal e informal",
        dialogue: [
          { speaker: "Formal Email", text: "Dear Ms. Thompson, I am writing to request an extension for the project deadline. Due to unforeseen circumstances, I require additional time to complete the deliverables to the expected standard. I would be grateful if you could consider extending the deadline by one week. Please do not hesitate to contact me if you require any further information.", translation: "Estimada Sra. Thompson, Le escribo para solicitar una extensión del plazo del proyecto. Debido a circunstancias imprevistas, requiero tiempo adicional para completar los entregables al estándar esperado. Le agradecería si pudiera considerar extender el plazo una semana. No dude en contactarme si necesita más información." },
          { speaker: "Informal Message", text: "Hey Sarah! Quick question - any chance we could push the deadline back a week? I've hit a few snags and want to make sure I do this properly. Let me know what you think! Thanks!", translation: "¡Hola Sarah! Pregunta rápida - ¿hay alguna posibilidad de postergar el plazo una semana? He encontrado algunos problemas y quiero asegurarme de hacer esto bien. ¡Déjame saber qué piensas! ¡Gracias!" }
        ],
        keyPhrases: [
          "Formal: 'I am writing to request...' vs Informal: 'Quick question...'",
          "Formal: 'Due to unforeseen circumstances' vs Informal: 'I've hit a few snags'",
          "Formal: 'I would be grateful if...' vs Informal: 'Any chance we could...?'",
          "Formal: 'Please do not hesitate to contact me' vs Informal: 'Let me know what you think!'"
        ]
      },
      pronunciationFocus: {
        title: "Tono de voz según el registro",
        points: [
          "El lenguaje formal suele pronunciarse con tono más medido y pausado",
          "El lenguaje informal permite más variación de entonación y ritmo rápido",
          "Contracciones ('I'm', 'can't') suenan más casual y amigables",
          "Palabras largas latinas ('inquire', 'require') suenan más formales que las anglosajonas ('ask', 'need')",
          "En comunicación formal, evita uptalk (entonación ascendente en declaraciones)"
        ],
        examples: [
          { word: "I would be grateful", phonetic: "/aɪ wʊd bi ˈɡreɪtfəl/", tip: "Tono medido, pronunciación clara" },
          { word: "Can you help?", phonetic: "/kæn jə help/", tip: "Más rápido, conectado" },
          { word: "at your earliest convenience", phonetic: "/æt jɔːr ˈɜːliɪst kənˈviːniəns/", tip: "Frase formal, pronuncia cada palabra" }
        ]
      },
      culturalNote: {
        title: "Niveles de formalidad en culturas anglófonas",
        content: "Los estadounidenses tienden a moverse rápidamente hacia el registro informal, a menudo usando nombres de pila desde el primer contacto. Los británicos mantienen más formalidad inicial y progresan gradualmente. En Australia, el ambiente laboral es generalmente más casual que en UK o US. En todos los casos, la comunicación escrita (especialmente con externos) tiende a ser más formal que la oral. El email ha creado un registro intermedio: más formal que el habla pero menos que cartas tradicionales.",
        examples: [
          "US: 'Hi John' (rápidamente informal, incluso con superiores)",
          "UK: 'Dear Mr. Smith' → 'Dear John' → 'Hi John' (progresión gradual)",
          "Email profesional moderno: 'Hello [Name]' (punto medio)"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la característica principal del lenguaje formal?",
          options: [
            "Uso de contracciones y phrasal verbs",
            "Palabras más largas, voz pasiva, sin contracciones",
            "Emojis y expresiones coloquiales",
            "Oraciones muy cortas"
          ],
          correctAnswer: 1,
          explanation: "El lenguaje formal usa vocabulario más sofisticado, evita contracciones y suele preferir estructuras más elaboradas"
        },
        {
          question: "¿Cuál sería una alternativa formal para 'Can you send me the file?'?",
          options: [
            "Send me the file!",
            "I would appreciate it if you could send me the file.",
            "Yo, send that file over.",
            "File please?"
          ],
          correctAnswer: 1,
          explanation: "'I would appreciate it if you could...' es una forma cortés y formal de hacer peticiones"
        },
        {
          question: "¿Cuándo es apropiado usar contracciones en comunicación empresarial?",
          options: [
            "Siempre",
            "Nunca",
            "En comunicación informal con colegas y conocidos",
            "Solo en presentaciones"
          ],
          correctAnswer: 2,
          explanation: "Las contracciones son apropiadas en comunicación casual pero deben evitarse en documentos formales"
        },
        {
          question: "Si no estás seguro del nivel de formalidad, ¿qué debes hacer?",
          options: [
            "Usar el lenguaje más casual posible",
            "Empezar formal y ajustar según la respuesta del otro",
            "Mezclar ambos registros",
            "No comunicarte"
          ],
          correctAnswer: 1,
          explanation: "Es más fácil relajar el tono que formalizarlo; empezar formal es la opción más segura"
        },
        {
          question: "¿Cuál es un cierre apropiado para un email formal?",
          options: [
            "See ya!",
            "Cheers mate",
            "Best regards",
            "Later!"
          ],
          correctAnswer: 2,
          explanation: "'Best regards', 'Kind regards', o 'Yours sincerely' son cierres formales estándar"
        },
        {
          question: "¿Por qué es problemático mezclar registros en un mensaje?",
          options: [
            "Es gramaticalmente incorrecto",
            "Confunde al lector y parece poco profesional",
            "Está prohibido por ley",
            "No hay ningún problema"
          ],
          correctAnswer: 1,
          explanation: "La inconsistencia en el registro puede confundir sobre la intención y relación deseada"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un email formal solicitando información sobre un producto",
          sampleResponse: "Dear Sir/Madam, I am writing to inquire about your software solutions for project management. I would be grateful if you could provide information regarding pricing plans and available features. Additionally, I would appreciate details about any trial periods you may offer. Please do not hesitate to contact me if you require any further information. Kind regards, [Your Name]"
        },
        {
          prompt: "Escribe un mensaje informal a un colega pidiendo ayuda con un proyecto",
          sampleResponse: "Hey! Quick favor - do you have a few minutes to help me with the presentation? I'm stuck on the data visualization part and I know you're great at that stuff. Let me know when works for you. Thanks a ton!"
        },
        {
          prompt: "Transforma esta frase informal a formal: 'Hey, sorry I'm late, traffic was crazy!'",
          sampleResponse: "Please accept my sincere apologies for my delayed arrival. Unfortunately, I encountered significant traffic congestion."
        },
        {
          prompt: "Escribe una queja formal sobre un producto defectuoso",
          sampleResponse: "Dear Customer Service Manager, I am writing to express my dissatisfaction with a recent purchase from your store. The product I received does not function as described and appears to be defective. I would appreciate it if you could arrange for a replacement or a full refund. Please find attached the receipt and photographs of the defect. I look forward to your prompt response. Yours faithfully, [Your Name]"
        }
      ],
      connectionToPrevious: "Las descripciones de procesos pueden ser más o menos formales dependiendo de la audiencia: un manual técnico vs. explicar algo a un amigo.",
      connectionToNext: "Los phrasal verbs que aprenderemos pueden añadir un tono más informal y natural a tu comunicación profesional."
    },
    {
      id: 9,
      title: "Phrasal Verbs in Business",
      titleEs: "Verbos Frasales en Negocios",
      introduction: {
        title: "💼 Verbos Frasales en Negocios",
        explanation: "Los phrasal verbs son muy comunes en inglés de negocios. Aunque pueden sonar informales, muchos son estándar en el mundo corporativo.",
        keyPoints: [
          "Reuniones: bring up (mencionar), carry out (realizar), follow up (dar seguimiento)",
          "Trabajo: take on (asumir), hand over (entregar), deal with (manejar)",
          "Decisiones: put off (posponer), turn down (rechazar), go ahead (proceder)",
          "Comunicación: get back to (responder), point out (señalar), set up (organizar)"
        ],
        examples: [
          { english: "Can we bring this up at the next meeting?", spanish: "¿Podemos mencionar esto en la próxima reunión?", explanation: "bring up = mencionar" },
          { english: "I'll get back to you tomorrow.", spanish: "Te responderé mañana.", explanation: "get back to = responder" },
          { english: "We need to carry out more research.", spanish: "Necesitamos realizar más investigación.", explanation: "carry out = realizar" }
        ],
        tips: [
          "💡 Algunos phrasal verbs son separables: 'bring it up' o 'bring up the issue'",
          "💡 Otros no: 'look into it' NUNCA 'look it into'",
          "💡 En escritura muy formal, usa equivalentes latinos: 'postpone' en lugar de 'put off'"
        ],
        whenToUse: [
          'En reuniones: "Let\'s touch base next week"',
          'Para delegar: "Can you follow up on that?"',
          'En emails de negocios: "I\'ll look into it and get back to you"',
          'Para discutir temas: "We need to bring up the budget issue"'
        ],
        whenNotToUse: [
          '"Look it into" → "look into it" (phrasal verb inseparable - NO separar)',
          'En informes muy formales: "postpone" (NO "put off"), "investigate" (NO "look into")',
          'No uses phrasal verbs muy informales en contextos formales: "sort out" → "resolve"'
        ]
      },
      objectives: ["Aprender phrasal verbs de negocios", "Usar phrasal verbs separables e inseparables", "Mejorar fluidez en contextos laborales"],
      grammarTheoryIds: ["b1-gerund-vs-infinitive"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [],
        verbs: [
          { id: "l7t9_v1", word: "bring up", translation: "mencionar", type: "verb", definition: "to introduce a topic", definitionEs: "introducir un tema", example: "She brought up an important point.", exampleEs: "Ella mencionó un punto importante.", related: [], difficulty: 1 },
          { id: "l7t9_v2", word: "carry out", translation: "llevar a cabo", type: "verb", definition: "to complete a task", definitionEs: "completar una tarea", example: "We'll carry out the plan.", exampleEs: "Llevaremos a cabo el plan.", related: [], difficulty: 1 },
          { id: "l7t9_v3", word: "follow up", translation: "dar seguimiento", type: "verb", definition: "to continue with something", definitionEs: "continuar con algo", example: "I'll follow up next week.", exampleEs: "Daré seguimiento la próxima semana.", related: [], difficulty: 1 },
          { id: "l7t9_v4", word: "take on", translation: "asumir", type: "verb", definition: "to accept responsibility", definitionEs: "aceptar responsabilidad", example: "Can you take on this project?", exampleEs: "¿Puedes asumir este proyecto?", related: [], difficulty: 1 },
          { id: "l7t9_v5", word: "hand over", translation: "entregar", type: "verb", definition: "to give control", definitionEs: "dar control", example: "I'll hand over my responsibilities.", exampleEs: "Entregaré mis responsabilidades.", related: [], difficulty: 1 },
          { id: "l7t9_v6", word: "deal with", translation: "lidiar con", type: "verb", definition: "to handle", definitionEs: "manejar", example: "I'll deal with this.", exampleEs: "Me encargaré de esto.", related: [], difficulty: 1 },
          { id: "l7t9_v7", word: "put off", translation: "posponer", type: "verb", definition: "to delay", definitionEs: "retrasar", example: "Let's put off the decision.", exampleEs: "Pospongamos la decisión.", related: [], difficulty: 1 },
          { id: "l7t9_v8", word: "turn down", translation: "rechazar", type: "verb", definition: "to refuse", definitionEs: "rechazar", example: "They turned down our offer.", exampleEs: "Rechazaron nuestra oferta.", related: [], difficulty: 1 },
          { id: "l7t9_v9", word: "get back to", translation: "responder a", type: "verb", definition: "to reply later", definitionEs: "responder después", example: "I'll get back to you.", exampleEs: "Te responderé.", related: [], difficulty: 1 },
          { id: "l7t9_v10", word: "set up", translation: "organizar/configurar", type: "verb", definition: "to arrange", definitionEs: "organizar", example: "Let's set up a meeting.", exampleEs: "Organicemos una reunión.", related: [], difficulty: 1 },
          { id: "l7t9_v11", word: "look into", translation: "investigar", type: "verb", definition: "to investigate", definitionEs: "investigar", example: "I'll look into this issue.", exampleEs: "Investigaré este asunto.", related: [], difficulty: 1 },
          { id: "l7t9_v12", word: "go ahead", translation: "proceder", type: "verb", definition: "to proceed", definitionEs: "proceder", example: "Go ahead with the plan.", exampleEs: "Procede con el plan.", related: [], difficulty: 1 },
        ],
        adjectives: [],
        expressions: [
          { id: "l7t9_e1", word: "I'll get back to you on that", translation: "Te responderé sobre eso", type: "expression", definition: "promising a response", definitionEs: "prometiendo una respuesta", example: "I'll get back to you on that by Friday.", exampleEs: "Te responderé sobre eso para el viernes.", related: [], difficulty: 1 },
          { id: "l7t9_e2", word: "Let's go ahead with...", translation: "Procedamos con...", type: "expression", definition: "deciding to proceed", definitionEs: "decidiendo proceder", example: "Let's go ahead with the launch.", exampleEs: "Procedamos con el lanzamiento.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t9_cm1", wrong: "I want to bring up this topic (with pronouns in wrong position)", correct: "I want to bring this topic up OR I want to bring it up", explanation: "'Bring up' is separable: the object can go between or after. With pronouns (it, them), it MUST go in the middle.", explanationEs: "'Bring up' es separable: el objeto puede ir entre o después. Con pronombres (it, them), DEBE ir en medio", category: "grammar" },
        { id: "l7t9_cm2", wrong: "Look it into", correct: "Look into it", explanation: "'Look into' is inseparable: the object always goes after the complete phrasal verb.", explanationEs: "'Look into' es inseparable: el objeto siempre va después del phrasal verb completo", category: "grammar" },
        { id: "l7t9_cm3", wrong: "I'll follow up you", correct: "I'll follow up with you / I'll follow up on this", explanation: "'Follow up' needs a preposition: 'with' for people, 'on' for things.", explanationEs: "'Follow up' necesita preposición: 'with' para personas, 'on' para cosas", category: "grammar" },
        { id: "l7t9_cm4", wrong: "He turned down it", correct: "He turned it down", explanation: "With pronouns (it, them, me, him, her), the pronoun goes between the parts of the separable phrasal verb.", explanationEs: "Con pronombres (it, them, me, him, her), el pronombre va entre las partes del phrasal verb separable", category: "grammar" },
        { id: "l7t9_cm5", wrong: "Using phrasal verbs in very formal documents", correct: "Use single-word equivalents: 'postpone' instead of 'put off', 'investigate' instead of 'look into'", explanation: "In very formal documents, single-word equivalents are preferred.", explanationEs: "En documentos muy formales, los equivalentes de una palabra son preferidos", category: "usage" },
      ],
      exercises: [
        {
          type: "separable-inseparable",
          instruction: "Clasifica estos phrasal verbs como separables (S) o inseparables (I)",
          items: [
            { verb: "bring up", type: "S", example: "bring it up / bring up the topic" },
            { verb: "look into", type: "I", example: "look into it (NOT: look it into)" },
            { verb: "put off", type: "S", example: "put it off / put off the meeting" },
            { verb: "deal with", type: "I", example: "deal with it (NOT: deal it with)" },
            { verb: "set up", type: "S", example: "set it up / set up a meeting" },
            { verb: "get back to", type: "I", example: "get back to me (NOT: get back me to)" }
          ]
        },
        {
          type: "fill-in-the-blank",
          instruction: "Completa las oraciones con el phrasal verb apropiado",
          items: [
            { sentence: "Can we _____ this issue at the meeting?", answer: "bring up" },
            { sentence: "I'll _____ the research tomorrow.", answer: "carry out" },
            { sentence: "Let me _____ this problem and get back to you.", answer: "look into" },
            { sentence: "We had to _____ the project due to budget cuts.", answer: "put off / turn down" },
            { sentence: "I'll _____ you on that by Friday.", answer: "get back to" },
            { sentence: "Can you _____ a meeting for next week?", answer: "set up" }
          ]
        },
        {
          type: "matching",
          instruction: "Relaciona los phrasal verbs con sus equivalentes formales",
          items: [
            { phrasal: "put off", formal: "postpone" },
            { phrasal: "carry out", formal: "conduct / execute" },
            { phrasal: "turn down", formal: "decline / reject" },
            { phrasal: "look into", formal: "investigate / examine" },
            { phrasal: "set up", formal: "establish / arrange" },
            { phrasal: "bring up", formal: "raise / mention" }
          ]
        },
        {
          type: "pronoun-placement",
          instruction: "Reescribe usando un pronombre (it, them, etc.)",
          items: [
            { sentence: "We need to put off the meeting.", rewritten: "We need to put it off." },
            { sentence: "Can you bring up the issue?", rewritten: "Can you bring it up?" },
            { sentence: "They turned down our proposal.", rewritten: "They turned it down." },
            { sentence: "I'll look into the problem.", rewritten: "I'll look into it." }
          ]
        }
      ],
      modelDialogue: {
        title: "Conversación laboral con phrasal verbs",
        context: "Dos colegas discuten proyectos y tareas pendientes",
        dialogue: [
          { speaker: "Manager", text: "How's the project going? Have you carried out the customer survey yet?", translation: "¿Cómo va el proyecto? ¿Ya has llevado a cabo la encuesta de clientes?" },
          { speaker: "Employee", text: "Not yet. I've been dealing with some technical issues, so I had to put it off until next week.", translation: "Todavía no. He estado lidiando con algunos problemas técnicos, así que tuve que posponerla hasta la semana que viene." },
          { speaker: "Manager", text: "I see. Can you follow up with the IT department about those issues?", translation: "Entiendo. ¿Puedes dar seguimiento con el departamento de TI sobre esos problemas?" },
          { speaker: "Employee", text: "Sure, I'll get back to you once I've looked into it.", translation: "Claro, te responderé una vez que lo haya investigado." },
          { speaker: "Manager", text: "Great. Also, there's a new project I'd like to bring up. Would you be willing to take it on?", translation: "Genial. Además, hay un nuevo proyecto que me gustaría mencionar. ¿Estarías dispuesto a asumirlo?" },
          { speaker: "Employee", text: "It depends on the timeline. I don't want to turn down an opportunity, but I need to make sure I can handle it.", translation: "Depende del cronograma. No quiero rechazar una oportunidad, pero necesito asegurarme de poder manejarlo." },
          { speaker: "Manager", text: "Understood. Let's set up a meeting to discuss the details.", translation: "Entendido. Organicemos una reunión para discutir los detalles." }
        ],
        keyPhrases: [
          "carry out (conduct)",
          "deal with (handle)",
          "put off (postpone)",
          "follow up with",
          "get back to",
          "look into",
          "bring up",
          "take on",
          "turn down",
          "set up"
        ]
      },
      pronunciationFocus: {
        title: "Énfasis en phrasal verbs",
        points: [
          "La partícula (up, off, into, etc.) generalmente recibe énfasis",
          "'Bring UP' - énfasis en 'up'",
          "'Look INTO' - énfasis en 'in-' de 'into'",
          "En preguntas: 'What did you BRING UP?' - énfasis en la partícula",
          "Cuando el objeto va en medio, el énfasis puede cambiar: 'bring IT up'"
        ],
        examples: [
          { word: "bring up", phonetic: "/brɪŋ ˈʌp/", tip: "Énfasis en 'up'" },
          { word: "look into", phonetic: "/lʊk ˈɪntuː/", tip: "Énfasis en 'in-'" },
          { word: "get back to", phonetic: "/ɡet ˈbæk tuː/", tip: "Énfasis en 'back'" }
        ]
      },
      culturalNote: {
        title: "Phrasal verbs en la cultura empresarial",
        content: "Los phrasal verbs son extremadamente comunes en el inglés de negocios hablado en países angloparlantes. No usarlos puede hacerte sonar demasiado formal o como libro de texto. Sin embargo, hay una escala: en emails casuales internos son perfectos, pero en documentos legales o propuestas formales, sus equivalentes latinos son preferidos. Los hablantes nativos mezclan naturalmente phrasal verbs con vocabulario formal según el contexto. Dominar este equilibrio marca la diferencia entre inglés competente y fluido.",
        examples: [
          "Casual meeting: 'Let's put off the decision and look into it more.'",
          "Formal document: 'The decision has been postponed pending further investigation.'",
          "Email intermedio: 'I suggest we postpone the decision while we look into this further.'"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la diferencia entre phrasal verbs separables e inseparables?",
          options: [
            "No hay diferencia",
            "Los separables permiten poner el objeto entre el verbo y la partícula",
            "Los inseparables son más formales",
            "Los separables solo se usan en escritura"
          ],
          correctAnswer: 1,
          explanation: "En phrasal verbs separables, el objeto puede ir entre el verbo y la partícula o después; en inseparables, siempre va después"
        },
        {
          question: "¿Dónde va el pronombre 'it' con el phrasal verb separable 'bring up'?",
          options: [
            "Después: bring up it",
            "En medio: bring it up",
            "Antes: it bring up",
            "Puede ir en cualquier lugar"
          ],
          correctAnswer: 1,
          explanation: "Con pronombres (it, them, him, her, etc.), el pronombre DEBE ir entre las partes del phrasal verb separable"
        },
        {
          question: "¿Cuál es el equivalente formal de 'put off'?",
          options: ["Stop", "Postpone", "Forget", "Remove"],
          correctAnswer: 1,
          explanation: "'Postpone' es el equivalente formal de 'put off' (posponer)"
        },
        {
          question: "Completa: 'I'll _____ you on that by tomorrow.'",
          options: ["get back to", "get back with", "get to back", "back get to"],
          correctAnswer: 0,
          explanation: "'Get back to' es la expresión correcta para indicar que responderás más tarde"
        },
        {
          question: "'Look into' es un phrasal verb inseparable. ¿Cuál es correcto?",
          options: ["Look it into", "Look into it", "It look into", "Look in it to"],
          correctAnswer: 1,
          explanation: "Con phrasal verbs inseparables, el objeto siempre va después del phrasal verb completo"
        },
        {
          question: "¿Por qué es importante conocer phrasal verbs de negocios?",
          options: [
            "Son obligatorios en documentos legales",
            "Son muy comunes en comunicación empresarial cotidiana",
            "Son más fáciles de pronunciar",
            "Solo los jefes los usan"
          ],
          correctAnswer: 1,
          explanation: "Los phrasal verbs son extremadamente comunes en el inglés de negocios hablado y en comunicación informal/semi-formal"
        }
      ],
      guidedProduction: [
        {
          prompt: "Describe una reunión donde mencionaron varios temas y tomaron decisiones",
          sampleResponse: "In yesterday's meeting, we brought up several issues that had been put off for weeks. First, we dealt with the budget concerns by looking into alternative suppliers. Then, we decided to go ahead with the marketing campaign but turned down the proposal to expand internationally. Finally, we set up a follow-up meeting for next month to carry out a detailed review."
        },
        {
          prompt: "Escribe un email a un colega usando al menos 5 phrasal verbs de negocios",
          sampleResponse: "Hi Tom, Just wanted to follow up on our conversation yesterday. I've looked into the vendor issue and I think we should put off the decision until we get more quotes. Can you bring this up with Sarah? I'll get back to you once I've set up a meeting with the suppliers. Let me know if you can take on the presentation while I deal with this."
        },
        {
          prompt: "Explica por qué rechazaste una propuesta y qué vas a hacer ahora",
          sampleResponse: "We had to turn down the initial proposal because the costs were too high. However, we didn't want to give up entirely, so we decided to look into other options. We've set up meetings with three alternative vendors and will carry out a thorough comparison. I'll get back to you with our findings by the end of the week."
        },
        {
          prompt: "Describe cómo delegas trabajo a tu equipo",
          sampleResponse: "When I take on a new project, I first break it down into tasks. Then I hand over specific responsibilities to team members based on their strengths. I follow up regularly to make sure everything is on track. If any issues come up, we deal with them together. I never put off difficult conversations – it's better to bring up problems early."
        }
      ],
      connectionToPrevious: "Los phrasal verbs pueden usarse en comunicación informal, pero recuerda usar sus equivalentes formales (postpone, investigate) cuando el contexto lo requiera.",
      connectionToNext: "Ahora que dominas los phrasal verbs de negocios, aprenderás a expresar opiniones diplomáticamente, combinando fluidez con tacto profesional."
    },
    {
      id: 10,
      title: "Expressing Opinions Diplomatically",
      titleEs: "Expresando Opiniones Diplomáticamente",
      introduction: {
        title: "🕊️ Expresando Opiniones Diplomáticamente",
        explanation: "En contextos profesionales, expresar desacuerdo o crítica requiere tacto. Aprenderás a comunicar tus opiniones de manera respetuosa y constructiva.",
        keyPoints: [
          "Suavizar: 'I tend to think...', 'It seems to me that...'",
          "Desacuerdo parcial: 'I see your point, but...', 'That's true, however...'",
          "Proponer alternativas: 'What about considering...?', 'Might I suggest...?'",
          "Expresar duda: 'I'm not entirely sure that...', 'I wonder if...'"
        ],
        examples: [
          { english: "I see your point, but have you considered the costs?", spanish: "Veo tu punto, pero ¿has considerado los costos?", explanation: "Desacuerdo suavizado" },
          { english: "I tend to think we should wait a bit longer.", spanish: "Tiendo a pensar que deberíamos esperar un poco más.", explanation: "Opinión suavizada" },
          { english: "Might I suggest an alternative approach?", spanish: "¿Podría sugerir un enfoque alternativo?", explanation: "Sugerencia diplomática" }
        ],
        tips: [
          "💡 Nunca digas 'You're wrong' - usa 'I see it differently'",
          "💡 'With all due respect...' puede sonar sarcástico; úsalo con cuidado",
          "💡 Preguntas son menos confrontacionales que afirmaciones"
        ],
        whenToUse: [
          'En reuniones: "I see it differently. Have you considered...?"',
          'Para suavizar: "That\'s an interesting point. However, I would argue that..."',
          'Al dar otra perspectiva: "I take your point, but what if we looked at it from..."',
          'En debates profesionales: "I respectfully disagree. The evidence suggests..."'
        ],
        whenNotToUse: [
          'Evita "You\'re wrong" → "I see it differently" o "I\'m not sure I agree"',
          '"With all due respect" puede sonar sarcástico → "I appreciate your view, and..."',
          'En desacuerdos entre amigos: "I disagree" (NO "I would respectfully submit that...")'
        ]
      },
      objectives: ["Expresar desacuerdo diplomáticamente", "Suavizar opiniones fuertes", "Mantener relaciones profesionales"],
      grammarTheoryIds: ["b2-emphasis-cleft-sentences", "b2-wish-if-only"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l7t10_n1", word: "perspective", translation: "perspectiva", type: "noun", definition: "a point of view", definitionEs: "un punto de vista", example: "From my perspective...", exampleEs: "Desde mi perspectiva...", related: [], difficulty: 1 },
          { id: "l7t10_n2", word: "viewpoint", translation: "punto de vista", type: "noun", definition: "a way of thinking", definitionEs: "una forma de pensar", example: "I understand your viewpoint.", exampleEs: "Entiendo tu punto de vista.", related: [], difficulty: 1 },
          { id: "l7t10_n3", word: "concern", translation: "preocupación", type: "noun", definition: "a worry", definitionEs: "una preocupación", example: "My concern is the timeline.", exampleEs: "Mi preocupación es el cronograma.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l7t10_v1", word: "tend to", translation: "tender a", type: "verb", definition: "to usually do/think", definitionEs: "usualmente hacer/pensar", example: "I tend to agree.", exampleEs: "Tiendo a estar de acuerdo.", related: [], difficulty: 1 },
          { id: "l7t10_v2", word: "wonder", translation: "preguntarse", type: "verb", definition: "to question", definitionEs: "cuestionar", example: "I wonder if that's the best approach.", exampleEs: "Me pregunto si ese es el mejor enfoque.", related: [], difficulty: 1 },
          { id: "l7t10_v3", word: "suggest", translation: "sugerir", type: "verb", definition: "to propose", definitionEs: "proponer", example: "Might I suggest...", exampleEs: "¿Podría sugerir...", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l7t10_a1", word: "diplomatic", translation: "diplomático", type: "adjective", definition: "tactful", definitionEs: "con tacto", example: "Be diplomatic about it.", exampleEs: "Sé diplomático al respecto.", related: [], difficulty: 2 },
          { id: "l7t10_a2", word: "tactful", translation: "con tacto", type: "adjective", definition: "careful not to offend", definitionEs: "cuidadoso de no ofender", example: "That was very tactful.", exampleEs: "Eso fue muy con tacto.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l7t10_e1", word: "I tend to think that...", translation: "Tiendo a pensar que...", type: "expression", definition: "softened opinion", definitionEs: "opinión suavizada", example: "I tend to think we should wait.", exampleEs: "Tiendo a pensar que deberíamos esperar.", related: [], difficulty: 1 },
          { id: "l7t10_e2", word: "I see your point, but...", translation: "Veo tu punto, pero...", type: "expression", definition: "partial disagreement", definitionEs: "desacuerdo parcial", example: "I see your point, but I disagree.", exampleEs: "Veo tu punto, pero no estoy de acuerdo.", related: [], difficulty: 1 },
          { id: "l7t10_e3", word: "Might I suggest...?", translation: "¿Podría sugerir...?", type: "expression", definition: "diplomatic suggestion", definitionEs: "sugerencia diplomática", example: "Might I suggest a different approach?", exampleEs: "¿Podría sugerir un enfoque diferente?", related: [], difficulty: 1 },
          { id: "l7t10_e4", word: "I'm not entirely convinced that...", translation: "No estoy del todo convencido de que...", type: "expression", definition: "expressing doubt", definitionEs: "expresando duda", example: "I'm not entirely convinced that's the best option.", exampleEs: "No estoy del todo convencido de que esa sea la mejor opción.", related: [], difficulty: 1 },
          { id: "l7t10_e5", word: "With respect, I think...", translation: "Con respeto, creo que...", type: "expression", definition: "polite disagreement", definitionEs: "desacuerdo educado", example: "With respect, I think we need more time.", exampleEs: "Con respeto, creo que necesitamos más tiempo.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t10_cm1", wrong: "You're wrong about this.", correct: "I see it differently. / I'm not sure I agree with that.", explanation: "Saying 'you're wrong' is confrontational; use phrases that express your perspective without attacking.", explanationEs: "Decir 'you're wrong' es confrontacional; usa frases que expresen tu perspectiva sin atacar", category: "usage" },
        { id: "l7t10_cm2", wrong: "That's a bad idea.", correct: "I'm not entirely convinced that's the best approach.", explanation: "Direct criticism can damage relationships; express doubts constructively.", explanationEs: "Criticar directamente puede dañar relaciones; expresa dudas de forma constructiva", category: "usage" },
        { id: "l7t10_cm3", wrong: "With all due respect, you don't know what you're talking about.", correct: "With respect, I have some concerns about this approach.", explanation: "'With all due respect' followed by an insult sounds sarcastic and worse than not using it.", explanationEs: "'With all due respect' seguido de insulto suena sarcástico y peor que no usarlo", category: "usage" },
        { id: "l7t10_cm4", wrong: "I totally disagree.", correct: "I see your point, but I have a different perspective.", explanation: "Acknowledging the other's point first softens the disagreement.", explanationEs: "Reconocer primero el punto del otro suaviza el desacuerdo", category: "usage" },
        { id: "l7t10_cm5", wrong: "That will never work.", correct: "I wonder if we've considered all the potential challenges.", explanation: "Absolute predictions close the dialogue; questions keep it open.", explanationEs: "Las predicciones absolutas cierran el diálogo; las preguntas lo mantienen abierto", category: "usage" },
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Transforma estas opiniones directas en versiones diplomáticas",
          items: [
            { direct: "That's wrong.", diplomatic: "I see it differently. / I'm not sure that's entirely accurate." },
            { direct: "This won't work.", diplomatic: "I have some concerns about whether this approach will achieve our goals." },
            { direct: "Your plan is too expensive.", diplomatic: "My concern is that the costs might exceed our budget." },
            { direct: "You need to change this.", diplomatic: "Might I suggest considering some adjustments to this?" },
            { direct: "I don't like this idea.", diplomatic: "I'm not entirely convinced this is the best direction for us." }
          ]
        },
        {
          type: "matching",
          instruction: "Relaciona la situación con la respuesta más diplomática",
          items: [
            { situation: "Alguien propone un plazo poco realista", response: "I appreciate your ambition, but I wonder if we've allowed enough time for testing." },
            { situation: "Un colega cita datos incorrectos", response: "That's an interesting figure. I've seen slightly different numbers – shall we verify?" },
            { situation: "El jefe quiere cambiar de estrategia", response: "I see the appeal of that approach. Have you considered how it might affect our current clients?" },
            { situation: "Un compañero presenta un trabajo incompleto", response: "You've made good progress. Might I suggest adding a few more details to strengthen it?" }
          ]
        },
        {
          type: "scale-analysis",
          instruction: "Ordena de más a menos diplomático",
          items: [
            {
              statements: [
                "No.",
                "I don't think so.",
                "I'm not sure that would work.",
                "I see your point, but I wonder if we've considered alternatives."
              ],
              order: [4, 3, 2, 1],
              explanation: "La última opción reconoce la perspectiva del otro y sugiere reflexión sin rechazar directamente"
            },
            {
              statements: [
                "That's expensive.",
                "Have we looked at the cost implications?",
                "I have some concerns about the budget impact.",
                "My concern would be ensuring we stay within budget – what do you think?"
              ],
              order: [1, 2, 3, 4],
              explanation: "Invitar a la otra persona a pensar juntos es más colaborativo"
            }
          ]
        },
        {
          type: "context-appropriate",
          instruction: "Elige la respuesta más apropiada para cada contexto",
          items: [
            {
              context: "Tu jefe propone algo que crees que fallará",
              options: [
                "That won't work.",
                "I appreciate the idea, but I have some concerns about implementation.",
                "Whatever you say."
              ],
              correct: 1,
              explanation: "Ser demasiado directo o demasiado pasivo son extremos; el equilibrio es clave"
            },
            {
              context: "Un colega dice algo incorrecto en una reunión",
              options: [
                "You're wrong.",
                "That's not true.",
                "I've heard different figures – shall we double-check the source?"
              ],
              correct: 2,
              explanation: "Sugerir verificación evita la confrontación personal"
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Reunión de equipo con desacuerdos diplomáticos",
        context: "El equipo discute una propuesta de marketing. Sarah no está de acuerdo con algunos puntos.",
        dialogue: [
          { speaker: "Manager", text: "I think we should launch the campaign next month.", translation: "Creo que deberíamos lanzar la campaña el próximo mes." },
          { speaker: "Sarah", text: "I see your point about timing, but I wonder if we've allowed enough time for testing.", translation: "Veo tu punto sobre el tiempo, pero me pregunto si hemos dejado suficiente tiempo para pruebas." },
          { speaker: "Manager", text: "The budget is $50,000. That should be enough.", translation: "El presupuesto es de $50,000. Eso debería ser suficiente." },
          { speaker: "Sarah", text: "I'm not entirely convinced that will cover everything. My concern is that unexpected costs could put us over budget.", translation: "No estoy del todo convencida de que eso cubra todo. Mi preocupación es que costos inesperados podrían exceder el presupuesto." },
          { speaker: "Colleague", text: "The last campaign like this worked perfectly.", translation: "La última campaña como esta funcionó perfectamente." },
          { speaker: "Sarah", text: "That's a fair point. At the same time, I tend to think the market has changed since then. Might I suggest we do a quick analysis of current trends?", translation: "Ese es un punto justo. Al mismo tiempo, tiendo a pensar que el mercado ha cambiado desde entonces. ¿Podría sugerir que hagamos un análisis rápido de tendencias actuales?" },
          { speaker: "Manager", text: "That's reasonable. Let's gather more data before deciding.", translation: "Eso es razonable. Reunamos más datos antes de decidir." },
          { speaker: "Sarah", text: "I appreciate you considering these concerns. I'll put together a brief report.", translation: "Agradezco que consideren estas preocupaciones. Prepararé un informe breve." }
        ],
        keyPhrases: [
          "I see your point, but I wonder if...",
          "I'm not entirely convinced that...",
          "My concern is that...",
          "That's a fair point. At the same time...",
          "I tend to think...",
          "Might I suggest...?",
          "I appreciate you considering..."
        ]
      },
      pronunciationFocus: {
        title: "Tono y entonación diplomática",
        points: [
          "La diplomacia no es solo palabras, sino tono. Un tono ascendente suaviza.",
          "'I wonder if...' con tono pensativo (no acusatorio)",
          "'My concern is...' con tono calmado (no alarmado)",
          "Pausas antes de 'but' o 'however' muestran consideración",
          "Evita tono sarcástico en 'With all due respect'"
        ],
        examples: [
          { word: "I see your point, but...", phonetic: "Con pausa y tono reflexivo después de 'point'", tip: "La pausa muestra que realmente consideraste su punto" },
          { word: "I wonder if...", phonetic: "Tono ascendente y pensativo", tip: "Suena como genuina curiosidad, no crítica" },
          { word: "Might I suggest...?", phonetic: "Tono suave y casi tentativo", tip: "No como una orden, sino como una oferta" }
        ]
      },
      culturalNote: {
        title: "Diplomacia y cultura empresarial",
        content: "El nivel de diplomacia esperado varía según la cultura. En culturas anglosajonas de negocios (UK, US, Australia), la comunicación indirecta y diplomática es altamente valorada. Lo que un español puede ver como 'rodeos' o 'perder el tiempo', un británico lo ve como profesionalismo. En UK especialmente, decir 'That's interesting' a menudo significa 'No me gusta pero no lo diré directamente'. 'I'll bear that in mind' puede significar 'Lo ignoraré'. Aprender a leer entre líneas es tan importante como usar lenguaje diplomático.",
        examples: [
          "UK: 'That's a very brave proposal' (= Es arriesgado y probablemente malo)",
          "US: 'I'm not sure that's going to fly' (= No creo que funcione)",
          "Australia: 'Yeah, nah...' (= No, pero de forma casual)"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Por qué es mejor decir 'I see it differently' que 'You're wrong'?",
          options: [
            "Porque es más corto",
            "Porque expresa tu perspectiva sin atacar a la otra persona",
            "Porque es más formal",
            "Porque los jefes prefieren esa frase"
          ],
          correctAnswer: 1,
          explanation: "Expresar tu perspectiva evita confrontación y mantiene el diálogo abierto"
        },
        {
          question: "¿Qué problema tiene 'With all due respect, you don't understand'?",
          options: [
            "Es demasiado formal",
            "No tiene ningún problema",
            "Suena sarcástico y es más ofensivo que no usar la frase",
            "Es gramaticalmente incorrecto"
          ],
          correctAnswer: 2,
          explanation: "'With all due respect' seguido de crítica directa suena sarcástico y peor"
        },
        {
          question: "¿Cuál es la forma más diplomática de decir 'That won't work'?",
          options: [
            "I don't think so.",
            "That's wrong.",
            "I have some concerns about whether this approach will achieve our goals.",
            "No."
          ],
          correctAnswer: 2,
          explanation: "Expresar 'concerns' y enfocar en 'goals' es constructivo, no confrontacional"
        },
        {
          question: "¿Por qué usar preguntas en lugar de afirmaciones?",
          options: [
            "Porque las preguntas son más cortas",
            "Porque invitan al diálogo y son menos confrontacionales",
            "Porque las afirmaciones son gramaticalmente incorrectas",
            "Porque los jefes hacen preguntas"
          ],
          correctAnswer: 1,
          explanation: "Las preguntas abren espacio para discusión y no imponen tu opinión"
        },
        {
          question: "¿Qué significa en cultura británica 'That's a very brave proposal'?",
          options: [
            "Es una propuesta valiente y buena",
            "Es una propuesta arriesgada que probablemente no es buena",
            "Es una propuesta normal",
            "No quieren discutirla"
          ],
          correctAnswer: 1,
          explanation: "En UK, 'brave' a menudo es un eufemismo para 'arriesgado' o 'malo'"
        },
        {
          question: "¿Cuál es la mejor forma de empezar un desacuerdo?",
          options: [
            "You're wrong because...",
            "I disagree completely.",
            "I see your point, but...",
            "That's a terrible idea."
          ],
          correctAnswer: 2,
          explanation: "Reconocer primero el punto del otro muestra respeto y suaviza el desacuerdo"
        }
      ],
      guidedProduction: [
        {
          prompt: "Un colega propone una solución que crees que tiene fallos. Expresa tu opinión diplomáticamente.",
          sampleResponse: "I appreciate you putting this proposal together – there are some interesting ideas here. At the same time, I wonder if we've fully considered the implementation challenges. My concern is that the timeline might be ambitious given our current resources. Might I suggest we look at a phased approach? That way, we could test the concept before committing fully."
        },
        {
          prompt: "Tu jefe quiere hacer un cambio que crees que afectará negativamente al equipo. ¿Cómo lo expresas?",
          sampleResponse: "I understand the reasoning behind this change, and I can see the potential benefits. However, I'm not entirely convinced it's the right time. My concern is that the team is already under pressure with the current project. I tend to think a gradual transition might work better. What are your thoughts on implementing this after the quarter ends?"
        },
        {
          prompt: "En una reunión, alguien presenta datos que crees que son incorrectos. ¿Cómo respondes?",
          sampleResponse: "That's an interesting figure. I've seen slightly different numbers in my research – I believe the latest report showed 15% rather than 25%. I could be wrong, of course. Shall we verify the source together? I just want to make sure we're working with accurate data for our decision."
        },
        {
          prompt: "Un cliente quiere algo que no es posible dentro del presupuesto. Explícale diplomáticamente.",
          sampleResponse: "I really appreciate your vision for this project – it's ambitious and exciting. I want to be transparent with you about what we can achieve within the current budget. I'm not sure we can include all of these features at this stage, but what we could do is prioritize the most important ones. Would you be open to discussing a phased approach? That way, we can deliver excellent results now and expand later."
        }
      ],
      connectionToPrevious: "Ahora combines los phrasal verbs de negocios con la diplomacia: en lugar de 'We turned it down', podrías decir 'We weren't entirely convinced it was the best fit for us'.",
      connectionToNext: "En la siguiente lección, explorarás vocabulario de salud, fitness y bienestar para discutir rutinas y dar consejos de wellness."
    },
    {
      id: 11,
      title: "Health, Fitness and Wellbeing",
      titleEs: "Salud, Fitness y Bienestar",
      introduction: {
        title: "💪 Salud, Fitness y Bienestar",
        explanation: "Discutir rutinas de salud, dar consejos sobre fitness y hablar de bienestar requiere vocabulario específico. Aprenderás a describir hábitos saludables, rutinas de ejercicio y prácticas de mindfulness.",
        keyPoints: [
          "Rutinas: 'I do cardio three times a week', 'I'm working on my flexibility'",
          "Consejos: 'A balanced diet is essential', 'Consider adding meditation'",
          "Bienestar: 'mindfulness', 'well-being', 'stamina'",
          "Suplementos y nutrición: 'supplement', 'nutrition'"
        ],
        examples: [
          { english: "I maintain a balanced diet and do cardio three times a week.", spanish: "Mantengo una dieta equilibrada y hago cardio tres veces por semana.", explanation: "Describiendo rutina" },
          { english: "Meditation has improved my mindfulness and well-being.", spanish: "La meditación ha mejorado mi atención plena y bienestar.", explanation: "Hablando de wellness" },
          { english: "If you want to build stamina, start with short workouts.", spanish: "Si quieres desarrollar resistencia, empieza con entrenamientos cortos.", explanation: "Dando consejo de fitness" }
        ],
        tips: [
          "💡 'Well-being' (con guión) es el sustantivo; 'well' es adverbio",
          "💡 'Cardio' es corto para 'cardiovascular exercise'",
          "💡 'Supplement' como verbo = complementar; como sustantivo = suplemento"
        ],
        whenToUse: ["Al hablar de rutinas de ejercicio", "Cuando das consejos de salud", "En conversaciones sobre wellness", "Al discutir nutrición y suplementos"],
        whenNotToUse: ["No des consejos médicos sin calificación — usa 'You might want to consider...'", "Evita 'You must' para salud — suena como orden médica", "No confundas 'stamina' (resistencia física) con 'energy' (energía)"]
      },
      objectives: ["Discutir rutinas de salud", "Dar consejos de fitness", "Hablar sobre bienestar y mindfulness"],
      grammarTheoryIds: ["b2-conditionals-all", "b1-modal-deduction"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l7t11_n1", word: "balanced diet", translation: "dieta equilibrada", type: "noun", definition: "diet with variety of nutrients", definitionEs: "dieta con variedad de nutrientes", example: "A balanced diet is key to health.", exampleEs: "Una dieta equilibrada es clave para la salud.", related: [], difficulty: 1 },
          { id: "l7t11_n2", word: "workout", translation: "entrenamiento/ejercicio", type: "noun", definition: "session of physical exercise", definitionEs: "sesión de ejercicio físico", example: "I do a 45-minute workout every morning.", exampleEs: "Hago un entrenamiento de 45 minutos cada mañana.", related: [], difficulty: 1 },
          { id: "l7t11_n3", word: "supplement", translation: "suplemento", type: "noun", definition: "product to add nutrients", definitionEs: "producto para añadir nutrientes", example: "I take a vitamin D supplement.", exampleEs: "Tomo un suplemento de vitamina D.", related: [], difficulty: 1 },
          { id: "l7t11_n4", word: "meditation", translation: "meditación", type: "noun", definition: "practice of focused attention", definitionEs: "práctica de atención enfocada", example: "Meditation helps reduce stress.", exampleEs: "La meditación ayuda a reducir el estrés.", related: ["meditate"], difficulty: 1 },
          { id: "l7t11_n5", word: "flexibility", translation: "flexibilidad", type: "noun", definition: "ability to bend and stretch", definitionEs: "capacidad de doblarse y estirarse", example: "Yoga improves flexibility.", exampleEs: "El yoga mejora la flexibilidad.", related: ["flexible"], difficulty: 1 },
          { id: "l7t11_n6", word: "stamina", translation: "resistencia", type: "noun", definition: "physical endurance", definitionEs: "resistencia física", example: "Running builds stamina.", exampleEs: "Correr desarrolla la resistencia.", related: [], difficulty: 1 },
          { id: "l7t11_n7", word: "mindfulness", translation: "atención plena", type: "noun", definition: "awareness of present moment", definitionEs: "consciencia del momento presente", example: "Mindfulness reduces anxiety.", exampleEs: "La atención plena reduce la ansiedad.", related: ["mindful"], difficulty: 2 },
          { id: "l7t11_n8", word: "nutrition", translation: "nutrición", type: "noun", definition: "process of eating for health", definitionEs: "proceso de alimentarse para la salud", example: "Good nutrition is essential.", exampleEs: "La buena nutrición es esencial.", related: ["nutritious"], difficulty: 1 },
          { id: "l7t11_n9", word: "cardio", translation: "cardio", type: "noun", definition: "cardiovascular exercise", definitionEs: "ejercicio cardiovascular", example: "I do 30 minutes of cardio daily.", exampleEs: "Hago 30 minutos de cardio diariamente.", related: [], difficulty: 1 },
          { id: "l7t11_n10", word: "well-being", translation: "bienestar", type: "noun", definition: "state of being healthy and happy", definitionEs: "estado de estar sano y feliz", example: "Exercise improves overall well-being.", exampleEs: "El ejercicio mejora el bienestar general.", related: [], difficulty: 1 }
        ],
        verbs: [],
        adjectives: [],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t11_cm1", wrong: "I take a supplement of vitamin D", correct: "I take a vitamin D supplement / I take vitamin D as a supplement", explanation: "The order is 'vitamin D supplement' (type + supplement), not 'supplement of'.", explanationEs: "El orden es 'vitamin D supplement' (tipo + supplement), no 'supplement of'", category: "vocabulary" },
        { id: "l7t11_cm2", wrong: "I have good stamina — I can work 12 hours", correct: "I have good stamina — I can run for an hour without stopping", explanation: "Stamina = physical endurance (exercise). For mental work use 'energy' or 'endurance'.", explanationEs: "Stamina = resistencia física (ejercicio). Para trabajo mental usa 'energy' o 'endurance'", category: "vocabulary" },
        { id: "l7t11_cm3", wrong: "I do meditation every day", correct: "I meditate every day / I practice meditation every day", explanation: "Say 'practice meditation' or 'meditate', not 'do meditation'.", explanationEs: "Se dice 'practice meditation' o 'meditate', no 'do meditation'", category: "usage" },
        { id: "l7t11_cm4", wrong: "My well being has improved", correct: "My well-being has improved", explanation: "The noun is written with a hyphen: well-being.", explanationEs: "El sustantivo se escribe con guión: well-being", category: "vocabulary" },
        { id: "l7t11_cm5", wrong: "I need to improve my flexibility — I'm too rigid", correct: "I need to improve my flexibility — I'm too stiff / inflexible", explanation: "'Rigid' is more for personality or rules; for the body use 'stiff' or 'inflexible'.", explanationEs: "'Rigid' es más para personalidad o reglas; para el cuerpo usa 'stiff' o 'inflexible'", category: "vocabulary" },
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las frases sobre salud y fitness:",
          items: [
            { sentence: "A ___ diet includes plenty of fruits and vegetables.", answer: "balanced", hint: "equilibrada" },
            { sentence: "I do 30 minutes of ___ every morning to get my heart rate up.", answer: "cardio", hint: "ejercicio cardiovascular" },
            { sentence: "___ has really helped my stress levels.", answer: "Meditation", hint: "práctica de atención" },
            { sentence: "Yoga improves ___ and reduces tension.", answer: "flexibility", hint: "capacidad de estirarse" },
            { sentence: "Good ___ is essential for overall health.", answer: "nutrition", hint: "alimentación" }
          ]
        },
        {
          type: "matching",
          instruction: "Relaciona el concepto con su descripción",
          items: [
            { situation: "Awareness of the present moment", response: "mindfulness" },
            { situation: "Physical endurance for sustained activity", response: "stamina" },
            { situation: "State of being healthy and happy", response: "well-being" },
            { situation: "Product to add nutrients to diet", response: "supplement" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma en consejos de salud usando el vocabulario:",
          items: [
            { direct: "Eat healthy food.", diplomatic: "A balanced diet is essential for good health." },
            { direct: "Exercise more.", diplomatic: "If you want to build stamina, try adding cardio to your routine." },
            { direct: "Relax and focus.", diplomatic: "You might want to consider meditation for mindfulness and well-being." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa el diálogo entre persona y entrenador:",
          items: [
            { sentence: "I want to improve my ___ — I get tired quickly when running.", answer: "stamina", hint: "resistencia" },
            { sentence: "Start with short ___ and gradually increase the duration.", answer: "workouts", hint: "sesiones de ejercicio" },
            { sentence: "Should I take any ___?", answer: "supplements", hint: "complementos nutricionales" },
            { sentence: "Focus on ___ first — a balanced diet is more important.", answer: "nutrition", hint: "nutrición" },
            { sentence: "I've also been practicing ___ for stress.", answer: "meditation", hint: "atención plena" }
          ]
        }
      ],
      modelDialogue: {
        title: "Conversación entre persona y entrenador de fitness",
        context: "Un cliente nuevo habla con su entrenador sobre sus objetivos de salud.",
        dialogue: [
          { speaker: "Client", text: "I want to get fitter but I'm not sure where to start.", translation: "Quiero ponerme en forma pero no sé por dónde empezar." },
          { speaker: "Trainer", text: "Let's focus on three things: a balanced diet, regular workouts, and building stamina. What does your current routine look like?", translation: "Enfocémonos en tres cosas: dieta equilibrada, entrenamientos regulares y desarrollar resistencia. ¿Cómo es tu rutina actual?" },
          { speaker: "Client", text: "I don't really exercise. I've heard cardio is good?", translation: "En realidad no hago ejercicio. ¿He oído que el cardio es bueno?" },
          { speaker: "Trainer", text: "Yes, cardio is great for heart health. Start with 20-30 minutes three times a week. We can also work on your flexibility — that prevents injuries.", translation: "Sí, el cardio es excelente para la salud del corazón. Empieza con 20-30 minutos tres veces por semana. También podemos trabajar tu flexibilidad — eso previene lesiones." },
          { speaker: "Client", text: "What about supplements? I see ads for them everywhere.", translation: "¿Y los suplementos? Veo anuncios por todas partes." },
          { speaker: "Trainer", text: "Nutrition comes first. Get a balanced diet right, then we can discuss if you need any supplements. Many people are deficient in vitamin D — that's one to consider.", translation: "La nutrición es lo primero. Logra una dieta equilibrada, luego podemos discutir si necesitas suplementos. Mucha gente tiene deficiencia de vitamina D — ese es uno a considerar." },
          { speaker: "Client", text: "I've also been stressed. Someone suggested meditation.", translation: "También he estado estresado. Alguien sugirió meditación." },
          { speaker: "Trainer", text: "Meditation and mindfulness can really improve your well-being. Even 10 minutes a day helps. It complements physical fitness — body and mind together.", translation: "La meditación y la atención plena pueden mejorar mucho tu bienestar. Incluso 10 minutos al día ayudan. Complementa la forma física — cuerpo y mente juntos." }
        ],
        keyPhrases: [
          "balanced diet",
          "regular workouts",
          "build stamina",
          "cardio",
          "flexibility",
          "Nutrition comes first",
          "meditation and mindfulness",
          "improve your well-being"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario de salud",
        points: [
          "Well-being: acento en 'well', no en 'being'",
          "Supplement: acento en primera sílaba SUP-plement",
          "Mindfulness: tres sílabas, acento en primera"
        ],
        examples: [
          { word: "well-being", phonetic: "/ˌwel ˈbiːɪŋ/", tip: "WELL-BEE-ing" },
          { word: "supplement", phonetic: "/ˈsʌplɪmənt/", tip: "SUP-li-ment" },
          { word: "mindfulness", phonetic: "/ˈmaɪndflnəs/", tip: "MIND-ful-ness" }
        ]
      },
      culturalNote: {
        title: "Cultura del fitness en países anglosajones",
        content: "En EE.UU. y UK, el fitness y el wellness son muy valorados. Es común preguntar 'Do you work out?' en conversaciones casuales. Los gimnasios (gyms) son populares; 'going to the gym' es una actividad social. La cultura del 'self-care' y mindfulness ha crecido mucho. Dar consejos de salud requiere tacto — 'You might want to consider...' es más apropiado que 'You should...' a menos que seas profesional de salud.",
        examples: [
          "'No pain, no gain' - filosofía de entrenamiento duro",
          "'Rest day' - día de descanso del ejercicio",
          "'Clean eating' - comer alimentos no procesados",
          "'Wellness journey' - proceso de mejorar la salud"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Stamina' se refiere a:",
          options: ["Energía mental", "Resistencia física para ejercicio prolongado", "Flexibilidad", "Nutrición"],
          correctAnswer: 1,
          explanation: "Stamina = resistencia física, capacidad de mantener esfuerzo"
        },
        {
          question: "¿Cómo se escribe correctamente el sustantivo?",
          options: ["wellbeing", "well-being", "well being", "wellbeen"],
          correctAnswer: 1,
          explanation: "El sustantivo correcto es well-being (con guión)"
        },
        {
          question: "'I do meditation' es:",
          options: ["Correcto", "Mejor: I practice meditation / I meditate", "Solo en UK", "Formal"],
          correctAnswer: 1,
          explanation: "Se dice 'practice meditation' o 'meditate'"
        },
        {
          question: "'Cardio' es abreviatura de:",
          options: ["Cardiology", "Cardiovascular exercise", "Cardiac arrest", "Card game"],
          correctAnswer: 1,
          explanation: "Cardio = cardiovascular exercise"
        },
        {
          question: "'Mindfulness' significa:",
          options: ["Tener muchas ideas", "Atención plena al momento presente", "Memoria buena", "Inteligencia"],
          correctAnswer: 1,
          explanation: "Mindfulness = consciencia del presente, sin juicio"
        }
      ],
      guidedProduction: [
        {
          prompt: "Describe tu rutina de salud y fitness a un amigo",
          sampleResponse: "I try to maintain a balanced diet and do cardio three times a week — usually running or cycling. I've also been working on my flexibility with yoga. Recently I started practicing meditation for mindfulness, and it's really improved my overall well-being. I take a vitamin D supplement in winter. My stamina has definitely improved since I started this routine."
        },
        {
          prompt: "Un amigo quiere empezar a hacer ejercicio. Dale consejos usando el vocabulario de la lección.",
          sampleResponse: "I'd suggest starting with short workouts — maybe 20-30 minutes of cardio three times a week. Don't forget to work on flexibility too; it prevents injuries. Nutrition is key — get a balanced diet right before considering any supplements. If you're stressed, meditation can really help with mindfulness and well-being. Building stamina takes time, so be patient. Good luck!"
        }
      ],
      connectionToPrevious: "La diplomacia es útil también al dar consejos de salud — 'You might want to consider...' en lugar de órdenes.",
      connectionToNext: "Has completado el Nivel 7. Ahora tienes herramientas avanzadas de comunicación: empatía, persuasión, feedback, diplomacia y vocabulario de wellness. En el siguiente nivel, explorarás la expresión de ideas más complejas y matizadas."
    },
    {
      id: 12,
      title: "Technology and Society",
      titleEs: "Tecnología y Sociedad",
      introduction: {
        title: "💻 Tecnología y su Impacto Social",
        explanation: "En inglés B2+ puedes argumentar sobre el impacto de la tecnología en la sociedad usando vocabulario preciso y estructuras de debate.",
        keyPoints: [
          "Ventajas: 'Technology has transformed the way we...', 'It enables us to...'",
          "Desventajas: 'There are concerns that...', 'Critics argue that...'",
          "Tendencias: 'Increasingly, people are...', 'There has been a growing trend towards...'",
          "Especulación: 'It remains to be seen whether...', 'The long-term effects are yet to be determined'"
        ],
        examples: [
          { english: "Social media has transformed the way people communicate.", spanish: "Las redes sociales han transformado la forma en que se comunica la gente.", explanation: "Present Perfect para cambio hasta ahora" },
          { english: "There are growing concerns about screen time among teenagers.", spanish: "Hay preocupaciones crecientes sobre el tiempo de pantalla entre adolescentes.", explanation: "Expressing concerns formally" },
          { english: "It remains to be seen how AI will affect employment.", spanish: "Está por verse cómo la IA afectará el empleo.", explanation: "Expresar incertidumbre académicamente" }
        ],
        tips: [
          "💡 'It remains to be seen' = está por verse — muy útil en debate",
          "💡 Usa 'whilst' en lugar de 'while' para un tono más formal",
          "💡 'Critics argue' y 'Proponents claim' equilibran un argumento"
        ],
        whenToUse: ["En debates o discusiones sobre tecnología y sociedad", "En ensayos o presentaciones académicas", "En conversaciones con personas educadas sobre tendencias"],
        whenNotToUse: ["No uses jerga técnica sin explicarla", "Evita afirmaciones absolutas — usa hedging"]
      },
      objectives: ["Argumentar sobre impacto tecnológico", "Usar vocabulario de tendencias sociales", "Expresar incertidumbre con precisión"],
      grammarTheoryIds: ["b2-discourse-markers", "b2-passive-advanced"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l7t12_n1", word: "algorithm", translation: "algoritmo", type: "noun", definition: "a set of rules a computer follows", definitionEs: "conjunto de reglas que sigue un ordenador", example: "Social media algorithms decide what we see.", exampleEs: "Los algoritmos de redes sociales deciden qué vemos.", related: [], difficulty: 3 },
          { id: "l7t12_n2", word: "digital divide", translation: "brecha digital", type: "noun", definition: "inequality in access to technology", definitionEs: "desigualdad en el acceso a la tecnología", example: "The digital divide affects rural communities.", exampleEs: "La brecha digital afecta a las comunidades rurales.", related: [], difficulty: 3 },
          { id: "l7t12_n3", word: "automation", translation: "automatización", type: "noun", definition: "using machines to do tasks previously done by humans", definitionEs: "usar máquinas para tareas antes hechas por humanos", example: "Automation threatens some manufacturing jobs.", exampleEs: "La automatización amenaza algunos empleos de manufactura.", related: ["automate"], difficulty: 2 },
        ],
        verbs: [
          { id: "l7t12_v1", word: "transform", translation: "transformar", type: "verb", definition: "to change completely", definitionEs: "cambiar completamente", example: "Technology has transformed daily life.", exampleEs: "La tecnología ha transformado la vida cotidiana.", related: ["transformation"], difficulty: 1 },
          { id: "l7t12_v2", word: "disrupt", translation: "disrumpir/desestabilizar", type: "verb", definition: "to fundamentally change an industry or system", definitionEs: "cambiar fundamentalmente una industria o sistema", example: "Smartphones disrupted the camera industry.", exampleEs: "Los smartphones disrumpieron la industria de las cámaras.", related: ["disruption"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l7t12_a1", word: "unprecedented", translation: "sin precedentes", type: "adjective", definition: "never having happened before", definitionEs: "que nunca había ocurrido antes", example: "We live in an era of unprecedented connectivity.", exampleEs: "Vivimos en una era de conectividad sin precedentes.", related: [], difficulty: 3 },
          { id: "l7t12_a2", word: "pervasive", translation: "omnipresente/generalizado", type: "adjective", definition: "spreading widely through society", definitionEs: "extendiéndose ampliamente por la sociedad", example: "Smartphones have become pervasive in modern life.", exampleEs: "Los smartphones se han vuelto omnipresentes en la vida moderna.", related: [], difficulty: 3 },
        ],
        expressions: [
          { id: "l7t12_e1", word: "it remains to be seen", translation: "está por verse", type: "expression", definition: "the outcome is uncertain", definitionEs: "el resultado es incierto", example: "It remains to be seen how AI will affect jobs.", exampleEs: "Está por verse cómo la IA afectará los empleos.", related: [], difficulty: 2 },
          { id: "l7t12_e2", word: "a double-edged sword", translation: "un arma de doble filo", type: "expression", definition: "something with both advantages and disadvantages", definitionEs: "algo con ventajas e inconvenientes", example: "Social media is a double-edged sword.", exampleEs: "Las redes sociales son un arma de doble filo.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l7t12_cm1", wrong: "Technology makes our life more easy.", correct: "Technology makes our lives easier.", explanation: "Use the comparative: 'easier', not 'more easy'. And the plural 'our lives'.", explanationEs: "Usa el comparativo: 'easier', no 'more easy'. Y el plural 'our lives'.", category: "grammar" },
        { id: "l7t12_cm2", wrong: "The technology is everywhere.", correct: "Technology is everywhere.", explanation: "When speaking in general, uncountable nouns don't take an article.", explanationEs: "Cuando hablas en general, los sustantivos incontables no llevan artículo.", category: "grammar" },
        { id: "l7t12_cm3", wrong: "Internet has many informations.", correct: "The internet has a lot of information.", explanation: "'Information' is uncountable — it cannot be pluralized.", explanationEs: "'Information' es incontable — no se puede pluralizar.", category: "grammar" },
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las frases sobre tecnología:",
          items: [
            { sentence: "It ___ to be seen how AI will change employment.", answer: "remains", hint: "it remains to be seen" },
            { sentence: "Social media is a double-_____ sword.", answer: "edged", hint: "double-edged sword" },
            { sentence: "The digital ___ affects communities without internet access.", answer: "divide", hint: "digital divide = brecha digital" }
          ]
        }
      ],
      modelDialogue: {
        title: "Debatiendo el impacto de las redes sociales",
        situation: "Sara y Tom debaten los efectos de las redes sociales en la sociedad.",
        dialogue: [
          { speaker: "Sara", text: "Social media is a double-edged sword. It connects people but also spreads misinformation rapidly.", textEs: "Las redes sociales son un arma de doble filo. Conectan personas, pero también propagan desinformación rápidamente." },
          { speaker: "Tom", text: "That's fair. The algorithms are designed to maximise engagement, not truth.", textEs: "Es verdad. Los algoritmos están diseñados para maximizar la participación, no la verdad." },
          { speaker: "Sara", text: "And there are growing concerns about mental health effects, particularly among teenagers.", textEs: "Y hay preocupaciones crecientes sobre los efectos en la salud mental, especialmente entre adolescentes." },
          { speaker: "Tom", text: "Whilst I agree to some extent, I think it's unfair to blame the platform entirely.", textEs: "Aunque estoy de acuerdo en parte, creo que no es justo culpar enteramente a la plataforma." },
          { speaker: "Sara", text: "It remains to be seen whether regulation will help. Some countries are already trialling age restrictions.", textEs: "Está por verse si la regulación ayudará. Algunos países ya están probando restricciones de edad." }
        ],
        vocabulary: ["double-edged sword", "algorithms", "misinformation", "engagement", "regulation"],
        followUpQuestions: ["¿Qué problema menciona Sara sobre los algoritmos?", "¿Qué proponen algunos países como solución?"]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario tecnológico",
        sounds: [
          { sound: "Algorithm", examples: ["algorithm /ˈælɡərɪðm/"], tip: "Acento en primera sílaba: AL-go-rithm" },
          { sound: "Automation", examples: ["automation /ˌɔːtəˈmeɪʃn/"], tip: "Acento en tercera sílaba: au-to-MAY-shun" }
        ],
        commonErrors: [
          { word: "algorithm", wrong: "/al-go-RITHM/", right: "/ˈælɡərɪðm/", note: "Acento en primera sílaba" }
        ]
      },
      culturalNote: {
        title: "Tecnología en la cultura anglosajona",
        content: "En UK y EE.UU., el debate sobre tecnología y sociedad es muy activo. Términos como 'Big Tech', 'digital detox', 'screen time', y 'tech bro culture' son comunes. En EE.UU., Silicon Valley tiene un enorme peso cultural. En UK, hay más escepticismo hacia las grandes tecnológicas desde GDPR (2018). En conversaciones, es bien visto mencionar preocupaciones sobre privacidad y regulación.",
        examples: [
          "'Digital detox' - desconectarse voluntariamente de tecnología",
          "'Screen time' - tiempo de uso de pantallas",
          "'Big Tech' - las grandes empresas tecnológicas (Google, Meta, Apple)",
          "'Data privacy' - privacidad de datos personales"
        ]
      },
      consolidationQuiz: [
        { question: "'It remains to be seen' significa:", options: ["ya está claro", "está por descubrirse", "es imposible", "no importa"], correctAnswer: 1, explanation: "Expresa incertidumbre sobre el futuro." },
        { question: "'Algorithm' se acentúa en:", options: ["última sílaba", "primera sílaba", "segunda sílaba", "todas igual"], correctAnswer: 1, explanation: "AL-go-rithm: primera sílaba." },
        { question: "'Digital divide' se refiere a:", options: ["una pantalla rota", "desigualdad en acceso a tecnología", "velocidad de internet", "habilidades digitales"], correctAnswer: 1, explanation: "Digital divide = brecha en acceso/uso de tecnología." }
      ],
      guidedProduction: [
        {
          task: "Argumentar sobre IA",
          prompt: "¿Cuáles son los principales riesgos y beneficios de la inteligencia artificial en la sociedad?",
          sampleAnswer: "Artificial intelligence is transforming virtually every sector, from healthcare to education. Proponents argue that it can improve efficiency and solve complex problems such as climate modelling. However, critics raise concerns about job displacement due to automation and the pervasive use of data without adequate privacy protection. It remains to be seen whether regulation will keep pace with technological development.",
          hints: ["Usa 'proponents argue / critics raise'", "Incluye al menos un beneficio y un riesgo", "Termina con 'it remains to be seen'"]
        }
      ],
      connectionToPrevious: "Las habilidades de persuasión de la lección anterior son útiles para argumentar sobre el impacto tecnológico.",
      connectionToNext: "Has completado el Nivel 7. Ahora tienes herramientas avanzadas de comunicación. En el siguiente nivel, explorarás la expresión de ideas más complejas y matizadas."
    },
  ]
};

export default level7;
