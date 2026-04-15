import type { Level } from '../../types';

export const level9: Level = {
  id: 9,
  name: "Expert",
  cefrLevel: "C1",
  description: "Liderazgo ejecutivo, presentaciones avanzadas y vocabulario especializado",
  totalTasks: 12,
  estimatedHours: 20,
  color: "#4f46e5",
  icon: "💎",
  tasks: [
    {
      id: 1,
      title: "Executive Presentations",
      titleEs: "Presentaciones Ejecutivas",
      introduction: {
        title: "🎤 Presentaciones Ejecutivas",
        explanation: "Las presentaciones a nivel ejecutivo requieren claridad, impacto y manejo de audiencias sofisticadas. Aprenderás técnicas para presentaciones de alto nivel.",
        keyPoints: [
          "Apertura impactante: 'What if I told you...', 'Imagine a world where...'",
          "Estructura: situación actual → desafío → solución → beneficios → llamada a la acción",
          "Datos convincentes: 'The numbers speak for themselves', 'Let me put this in perspective'",
          "Manejo de Q&A: 'That's an excellent question', 'Let me address that concern'",
          "Cierre memorable: 'So I leave you with this thought...', 'The choice is clear...'"
        ],
        examples: [
          { english: "What if I told you we could double our market share in 18 months?", spanish: "¿Qué pasaría si les dijera que podemos duplicar nuestra cuota de mercado en 18 meses?", explanation: "Apertura impactante" },
          { english: "Let me put this in perspective: that's the equivalent of $50 million in savings.", spanish: "Permítanme ponerlo en perspectiva: eso equivale a $50 millones en ahorros.", explanation: "Contextualizando datos" },
          { english: "The question isn't whether we should act, but how quickly we can execute.", spanish: "La pregunta no es si debemos actuar, sino qué tan rápido podemos ejecutar.", explanation: "Cierre persuasivo" }
        ],
        tips: [
          "💡 Conoce a tu audiencia: ejecutivos quieren resultados y datos",
          "💡 La regla 10-20-30: 10 slides, 20 minutos, mínimo 30pt de fuente",
          "💡 Practica las primeras 30 segundos hasta que sean perfectos"
        ],
        whenToUse: ["En presentaciones a nivel directivo o board meetings", "Al defender presupuestos, estrategias o planes de acción", "En keynotes o presentaciones de alto impacto", "Comunicando visión y dirección estratégica"],
        whenNotToUse: ["No uses lenguaje ejecutivo en reuniones de equipo informales — puede sonar pretencioso", "Evita 'Going forward, we need to leverage...' en emails simples", "No abuses de nominalización en presentaciones a audiencias no especializadas"]
      },
      objectives: ["Estructurar presentaciones ejecutivas", "Abrir y cerrar con impacto", "Manejar preguntas difíciles"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c1-nominalization", "c1-hedging"],
      vocabulary: {
        nouns: [
          { id: "l9t1_n1", word: "stakeholder", translation: "parte interesada", type: "noun", definition: "person with interest in business", definitionEs: "persona con interés en el negocio", example: "Key stakeholders are attending.", exampleEs: "Las partes interesadas clave asistirán.", related: [], difficulty: 2 },
          { id: "l9t1_n2", word: "ROI (Return on Investment)", translation: "retorno sobre inversión", type: "noun", definition: "profit compared to cost", definitionEs: "ganancia comparada con costo", example: "The ROI is significant.", exampleEs: "El ROI es significativo.", related: [], difficulty: 2 },
          { id: "l9t1_n3", word: "value proposition", translation: "propuesta de valor", type: "noun", definition: "why customers should buy", definitionEs: "por qué los clientes deberían comprar", example: "Our value proposition is unique.", exampleEs: "Nuestra propuesta de valor es única.", related: [], difficulty: 2 },
          { id: "l9t1_n4", word: "benchmark", translation: "punto de referencia", type: "noun", definition: "standard for comparison", definitionEs: "estándar para comparación", example: "Let's compare against the benchmark.", exampleEs: "Comparemos contra el punto de referencia.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l9t1_v1", word: "articulate", translation: "articular", type: "verb", definition: "to express clearly", definitionEs: "expresar claramente", example: "Let me articulate our strategy.", exampleEs: "Permítanme articular nuestra estrategia.", related: [], difficulty: 2 },
          { id: "l9t1_v2", word: "leverage", translation: "aprovechar", type: "verb", definition: "to use to advantage", definitionEs: "usar a favor", example: "We can leverage this opportunity.", exampleEs: "Podemos aprovechar esta oportunidad.", related: [], difficulty: 2 },
          { id: "l9t1_v3", word: "streamline", translation: "optimizar", type: "verb", definition: "to make more efficient", definitionEs: "hacer más eficiente", example: "We need to streamline operations.", exampleEs: "Necesitamos optimizar operaciones.", related: [], difficulty: 2 },
          { id: "l9t1_v4", word: "quantify", translation: "cuantificar", type: "verb", definition: "to express in numbers", definitionEs: "expresar en números", example: "Let me quantify the benefits.", exampleEs: "Permítanme cuantificar los beneficios.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l9t1_a1", word: "scalable", translation: "escalable", type: "adjective", definition: "able to grow", definitionEs: "capaz de crecer", example: "This solution is scalable.", exampleEs: "Esta solución es escalable.", related: [], difficulty: 2 },
          { id: "l9t1_a2", word: "sustainable", translation: "sostenible", type: "adjective", definition: "able to continue", definitionEs: "capaz de continuar", example: "Is this sustainable long-term?", exampleEs: "¿Es esto sostenible a largo plazo?", related: [], difficulty: 1 },
          { id: "l9t1_a3", word: "compelling", translation: "convincente", type: "adjective", definition: "very persuasive", definitionEs: "muy persuasivo", example: "The data is compelling.", exampleEs: "Los datos son convincentes.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l9t1_e1", word: "What if I told you...", translation: "¿Qué pasaría si les dijera...", type: "expression", definition: "dramatic opening", definitionEs: "apertura dramática", example: "What if I told you we could cut costs by 30%?", exampleEs: "¿Qué pasaría si les dijera que podemos reducir costos en 30%?", related: [], difficulty: 1 },
          { id: "l9t1_e2", word: "Let me put this in perspective", translation: "Permítanme ponerlo en perspectiva", type: "expression", definition: "contextualizing data", definitionEs: "contextualizando datos", example: "Let me put this in perspective for you.", exampleEs: "Permítanme ponerlo en perspectiva.", related: [], difficulty: 1 },
          { id: "l9t1_e3", word: "The bottom line is...", translation: "En resumen...", type: "expression", definition: "key point", definitionEs: "punto clave", example: "The bottom line is we need to act now.", exampleEs: "En resumen, necesitamos actuar ahora.", related: [], difficulty: 1 },
          { id: "l9t1_e4", word: "I'll take that offline", translation: "Discutámoslo después", type: "expression", definition: "defer discussion", definitionEs: "diferir discusión", example: "Great question. I'll take that offline.", exampleEs: "Gran pregunta. Discutámoslo después.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t1_cm1", wrong: "Starting with 'Today I'm going to talk about...'", correct: "Start with a hook: 'What if I told you...', 'Imagine a world where...'", explanation: "Generic openings lose attention; executives want immediate impact", explanationEs: "Las aperturas genéricas pierden la atención; los ejecutivos quieren impacto inmediato", category: "usage" },
        { id: "l9t1_cm2", wrong: "Reading slides word by word", correct: "Use slides as visual support, not scripts. Talk TO the audience.", explanation: "Executives can read; they need your interpretation and expertise", explanationEs: "Los ejecutivos pueden leer; necesitan tu interpretación y expertise", category: "usage" },
        { id: "l9t1_cm3", wrong: "Using too much jargon without explanation", correct: "Define technical terms briefly or use clearer alternatives", explanation: "Even executive audiences may not know specialized jargon", explanationEs: "Incluso audiencias ejecutivas pueden no conocer jerga especializada", category: "vocabulary" },
        { id: "l9t1_cm4", wrong: "Ending with 'Any questions?' without a clear call to action", correct: "End with: 'The choice is clear... I recommend we...'", explanation: "Executive presentations must end with a clear recommendation", explanationEs: "Las presentaciones ejecutivas deben terminar con una recomendación clara", category: "usage" },
        { id: "l9t1_cm5", wrong: "Defending every detail when questioned", correct: "'That's a great point. I'll get back to you with specifics.' or 'Let me take that offline.'", explanation: "Show confidence without being defensive; acknowledge limits", explanationEs: "Muestra confianza sin ser defensivo; reconoce límites", category: "usage" }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Transforma estas aperturas aburridas en aperturas impactantes",
          items: [
            {
              boring: "Today I will present the quarterly results.",
              impactful: "What if I told you this was our best quarter in five years?",
              technique: "Hook question"
            },
            {
              boring: "This presentation is about cost reduction.",
              impactful: "Imagine saving $2 million annually without cutting a single job.",
              technique: "Imagine scenario"
            },
            {
              boring: "I want to discuss our new product.",
              impactful: "Three years ago, we asked ourselves: what if we could change the industry?",
              technique: "Story opening"
            },
            {
              boring: "Let me share the marketing strategy.",
              impactful: "Our competitors are worried. Here's why they should be.",
              technique: "Bold statement"
            }
          ]
        },
        {
          type: "situational",
          instruction: "Elige la mejor respuesta para estas preguntas difíciles de Q&A",
          items: [
            {
              question: "Why should we trust these projections when last year's were wrong?",
              options: [
                "That's not fair, the market changed.",
                "Great question. We've improved our methodology by... and validated with...",
                "I don't know, I wasn't here last year."
              ],
              correct: 1,
              explanation: "Reconoce la preocupación y muestra mejora sin ser defensivo"
            },
            {
              question: "This budget seems very high. Can you justify it?",
              options: [
                "Let me put this in perspective: the ROI is 300% within 18 months.",
                "It's not that high actually.",
                "We need it, trust me."
              ],
              correct: 0,
              explanation: "Usa datos y perspectiva para justificar, no defensas vagas"
            },
            {
              question: "What happens if this fails?",
              options: [
                "It won't fail.",
                "I've outlined contingencies in Appendix B. Shall I walk through them?",
                "That's a negative way to think about it."
              ],
              correct: 1,
              explanation: "Muestra preparación y ofrece más información"
            }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa estas frases de presentación ejecutiva",
          items: [
            { sentence: "_____ I told you we could double our market share?", answer: "What if" },
            { sentence: "Let me _____ this in perspective.", answer: "put" },
            { sentence: "The _____ line is we need to act now.", answer: "bottom" },
            { sentence: "That's a great question. Let me _____ that offline.", answer: "take" },
            { sentence: "The numbers _____ for themselves.", answer: "speak" },
            { sentence: "I leave you with this _____: the future is now.", answer: "thought" }
          ]
        },
        {
          type: "reorder",
          instruction: "Organiza esta presentación en el orden correcto",
          items: [
            { element: "Call to action: 'I recommend we approve...'", position: 5 },
            { element: "Hook: 'What if I told you...'", position: 1 },
            { element: "Current situation and challenge", position: 2 },
            { element: "Benefits and ROI analysis", position: 4 },
            { element: "Proposed solution", position: 3 }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentación ejecutiva al board",
        context: "Un director presenta una propuesta de expansión al board of directors",
        dialogue: [
          { speaker: "Presenter", text: "What if I told you we could double our European market share within 18 months, with a projected ROI of 250%?", translation: "¿Qué pasaría si les dijera que podemos duplicar nuestra cuota de mercado europeo en 18 meses, con un ROI proyectado del 250%?" },
          { speaker: "Presenter", text: "Let me put this in perspective: that's equivalent to $150 million in new revenue.", translation: "Permítanme ponerlo en perspectiva: eso equivale a $150 millones en nuevos ingresos." },
          { speaker: "Presenter", text: "The opportunity window is now. Our competitors are six months behind us on this technology.", translation: "La ventana de oportunidad es ahora. Nuestros competidores están seis meses detrás de nosotros en esta tecnología." },
          { speaker: "Board Member", text: "What's the risk profile on this?", translation: "¿Cuál es el perfil de riesgo de esto?" },
          { speaker: "Presenter", text: "Excellent question. We've modeled three scenarios: best case, most likely, and worst case. Even in the worst case, we break even within 24 months.", translation: "Excelente pregunta. Hemos modelado tres escenarios: mejor caso, más probable y peor caso. Incluso en el peor caso, alcanzamos punto de equilibrio en 24 meses." },
          { speaker: "Board Member", text: "How does this align with our sustainability goals?", translation: "¿Cómo se alinea esto con nuestros objetivos de sostenibilidad?" },
          { speaker: "Presenter", text: "Great point. I'll take that offline with Sarah from Sustainability, but preliminary analysis shows strong alignment. Moving on to implementation...", translation: "Gran punto. Lo discutiré después con Sarah de Sostenibilidad, pero el análisis preliminar muestra fuerte alineación. Pasando a la implementación..." },
          { speaker: "Presenter", text: "So I leave you with this thought: the question isn't whether we should act, but how quickly we can execute. I recommend we approve Phase 1 funding today.", translation: "Así que los dejo con este pensamiento: la pregunta no es si debemos actuar, sino qué tan rápido podemos ejecutar. Recomiendo que aprobemos el financiamiento de la Fase 1 hoy." }
        ],
        keyPhrases: [
          { phrase: "What if I told you...", translation: "¿Qué pasaría si les dijera...", usage: "Apertura impactante" },
          { phrase: "Let me put this in perspective", translation: "Permítanme ponerlo en perspectiva", usage: "Contextualizar datos" },
          { phrase: "Excellent question", translation: "Excelente pregunta", usage: "Manejar Q&A" },
          { phrase: "I'll take that offline", translation: "Lo discutiré después", usage: "Diferir temas complejos" },
          { phrase: "I leave you with this thought", translation: "Los dejo con este pensamiento", usage: "Cierre memorable" },
          { phrase: "I recommend we...", translation: "Recomiendo que...", usage: "Call to action claro" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { sound: "/ˈlev.ər.ɪdʒ/", word: "leverage", tip: "En español tendemos a acentuar 'age'; en inglés el acento va en LEV-er-age" },
          { sound: "/ɑːr oʊ aɪ/", word: "ROI", tip: "Pronuncia cada letra: R-O-I, no 'roy' como en español" },
          { sound: "/ˈsteɪkˌhoʊl.dɚ/", word: "stakeholder", tip: "STAKE-holder, no STAK-holder; la 'e' en stake es larga" }
        ],
        minimalPairs: [
          { word1: "leverage", word2: "lever", explanation: "Leverage tiene tres sílabas; lever tiene dos" },
          { word1: "stakeholder", word2: "stockholder", explanation: "Stake /steɪk/ vs stock /stɒk/ - vocales diferentes" }
        ],
        intonation: [
          { pattern: "Rise for rhetorical questions", example: "What if I told you ↗?", tip: "Crea anticipación en aperturas impactantes" },
          { pattern: "Fall for confident statements", example: "The bottom line is ↘", tip: "Muestra certeza en conclusiones" },
          { pattern: "Pause after key points", example: "Three hundred percent. [pause]", tip: "Permite que los datos resuenen" }
        ],
        commonProblems: [
          { word: "ROI", wrong: "roy", correct: "/ɑːr oʊ aɪ/", tip: "Pronuncia cada letra: R-O-I" },
          { word: "leverage", wrong: "le-VE-rage", correct: "/ˈlev.ər.ɪdʒ/", tip: "LEV-er-ij, acento en primera sílaba" },
          { word: "scalable", wrong: "ska-LA-ble", correct: "/ˈskeɪ.lə.bəl/", tip: "SKAY-luh-bl" },
          { word: "stakeholder", wrong: "STAK-holder", correct: "/ˈsteɪkˌhoʊl.dɚ/", tip: "STAKE-holder" }
        ],
        intonationPatterns: [
          { pattern: "Rise for rhetorical questions", example: "What if I told you ↗?", meaning: "Crea anticipación" },
          { pattern: "Fall for confident statements", example: "The bottom line is ↘", meaning: "Muestra certeza" },
          { pattern: "Pause after key points", example: "Three hundred percent. [pause]", meaning: "Permite que los datos resuenen" }
        ]
      },
      culturalNote: {
        title: "Estilos de presentación por cultura",
        titleEs: "Estilos de presentación por cultura",
        content: "Los estilos de presentación varían significativamente. Las presentaciones americanas tienden a ser directas, con el mensaje principal al inicio (bottom-line up front). Las alemanas valoran datos detallados y precisión técnica. Las japonesas pueden ser más indirectas, con la conclusión al final. En culturas latinas, la conexión personal y el storytelling son muy valorados. Adapta tu estilo a tu audiencia.",
        contentEs: "Los estilos de presentación varían significativamente. Las americanas son directas con el mensaje al inicio. Las alemanas valoran datos y precisión. Las japonesas pueden ser más indirectas. En culturas latinas, la conexión personal y el storytelling son muy valorados.",
        region: "General"
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la mejor forma de abrir una presentación ejecutiva?",
          questionEs: "¿Cuál es la mejor forma de abrir una presentación ejecutiva?",
          options: [
            "'Today I will talk about our quarterly results'",
            "'What if I told you this was our best quarter in five years?'",
            "'Good morning everyone, my name is...'",
            "'Please look at slide one'"
          ],
          correctAnswer: 1,
          explanation: "Un hook impactante captura atención inmediatamente",
          explanationEs: "Un hook impactante captura atención inmediatamente"
        },
        {
          question: "¿Qué significa 'I'll take that offline'?",
          options: [
            "Voy a desconectar mi computadora",
            "Discutiremos ese tema después, fuera de esta reunión",
            "No quiero responder esa pregunta",
            "Necesito buscar la información en línea"
          ],
          correctAnswer: 1,
          explanation: "Es una forma profesional de diferir discusiones detalladas sin rechazar la pregunta"
        },
        {
          question: "¿Cómo debe terminar una presentación ejecutiva?",
          options: [
            "Any questions?",
            "That's all. Thank you.",
            "Con una recomendación clara y call to action",
            "Con una disculpa por el tiempo"
          ],
          correctAnswer: 2,
          explanation: "Los ejecutivos esperan una recomendación clara sobre qué acción tomar"
        },
        {
          question: "¿Qué significa 'The bottom line is...'?",
          options: [
            "La última línea del documento",
            "El punto principal o conclusión clave",
            "El precio más bajo",
            "La línea inferior del gráfico"
          ],
          correctAnswer: 1,
          explanation: "'The bottom line' indica el punto más importante o la conclusión esencial"
        },
        {
          question: "¿Qué es ROI?",
          options: [
            "Rate of Interest",
            "Return on Investment",
            "Risk of Implementation",
            "Review of Information"
          ],
          correctAnswer: 1,
          explanation: "ROI = Return on Investment (Retorno sobre la Inversión)"
        },
        {
          question: "¿Cuál es una buena respuesta a una pregunta difícil que no sabes?",
          options: [
            "'I don't know'",
            "'That's not my area'",
            "'That's an excellent question. Let me research that and get back to you.'",
            "'Why are you asking that?'"
          ],
          correctAnswer: 2,
          explanation: "Reconoce la pregunta, muestra que la tomarás en serio y ofrece seguimiento"
        }
      ],
      guidedProduction: [
        {
          prompt: "Crea una apertura impactante para presentar un nuevo producto tecnológico",
          sampleResponse: "What if I told you that everything you know about productivity software is about to change? Imagine a world where your AI assistant doesn't just respond to commands—it anticipates your needs. Three years ago, we asked ourselves a simple question: why are we still adapting to technology instead of technology adapting to us? Today, I'm here to show you the answer. And let me put this in perspective: early adopters have seen productivity gains of 40% in the first month alone."
        },
        {
          prompt: "Maneja una pregunta hostil sobre presupuesto en una presentación",
          sampleResponse: "That's exactly the kind of scrutiny we should apply to any major investment—thank you for raising it. Let me address your concern directly. The budget does represent a significant investment. However, let me put this in perspective: the projected ROI is 280% within 24 months. We've benchmarked against three similar implementations in our industry, and our estimates are actually conservative. I have detailed cost breakdowns in Appendix C, and I'm happy to walk through them with you offline if you'd like a deeper dive into the numbers."
        },
        {
          prompt: "Crea un cierre memorable para una presentación estratégica",
          sampleResponse: "So let me leave you with this thought. We're standing at a crossroads. One path leads to maintaining the status quo—comfortable, familiar, but increasingly risky in a market that's evolving daily. The other path leads to transformation—challenging, yes, but with the potential to establish us as the industry leader for the next decade. The numbers speak for themselves: $200 million in new revenue potential, 35% market share growth, and a sustainable competitive advantage. The bottom line is this: the question isn't whether we should act, but how quickly we can execute. I recommend we approve Phase 1 today and capture this opportunity before our competitors do. The choice is clear."
        },
        {
          prompt: "Responde a múltiples preguntas durante Q&A manteniendo control",
          sampleResponse: "Excellent questions—I see we have a lot of engagement here, which is great. Let me address them systematically. John, regarding the timeline: you're right that it's ambitious. We've built in buffer periods at each milestone, and I'm confident it's achievable. Sarah, your point about resource allocation is well-taken. I'll take that offline with you to discuss the specific FTE requirements. And to your question about competitive response, Michael—our intelligence suggests they're at least two quarters behind us on this technology. That's precisely why timing is critical. Now, if there are no other questions, let me summarize our three key takeaways..."
        }
      ],
      connectionToPrevious: "Las habilidades de especulación e hipótesis del nivel anterior te ayudan a presentar escenarios y proyecciones con el matiz apropiado.",
      connectionToNext: "Las presentaciones impactantes a menudo usan inversión para énfasis - estructuras que dominarás a continuación."
    },
    {
      id: 2,
      title: "Inversion for Emphasis",
      titleEs: "Inversión para Énfasis",
      introduction: {
        title: "⚡ Inversión para Énfasis",
        explanation: "La inversión del orden normal sujeto-verbo crea énfasis y un tono más formal o literario. Es común en discursos y escritura avanzada.",
        keyPoints: [
          "Negativos al inicio: 'Never have I seen...', 'Rarely does this happen'",
          "Only + expresión: 'Only when...did I realize', 'Only by working hard can we...'",
          "So/Such: 'So great was the demand that...', 'Such was his influence...'",
          "Little: 'Little did they know...', 'Little does she realize...'",
          "No sooner/Hardly: 'No sooner had we arrived than...'"
        ],
        examples: [
          { english: "Never have I witnessed such dedication from a team.", spanish: "Nunca he presenciado tal dedicación de un equipo.", explanation: "Never + inversión" },
          { english: "Only by investing in R&D can we stay competitive.", spanish: "Solo invirtiendo en I+D podemos mantenernos competitivos.", explanation: "Only + by -ing" },
          { english: "So successful was the launch that we exceeded all targets.", spanish: "Tan exitoso fue el lanzamiento que superamos todos los objetivos.", explanation: "So + adjective" }
        ],
        tips: [
          "💡 La inversión siempre requiere auxiliar: 'Never HAS she...', 'Rarely DO they...'",
          "💡 'Little did I know' es una expresión muy común",
          "💡 Usa inversión con moderación - el exceso suena artificial"
        ],
        whenToUse: [
          "En discursos formales o keynotes: \"Never have I witnessed such dedication\"",
          "En informes ejecutivos: \"Only by investing in R&D can we stay competitive\"",
          "En presentaciones de resultados: \"So successful was the launch that we exceeded all targets\"",
          "En comunicados corporativos: \"Little did we know that this would change everything\""
        ],
        whenNotToUse: [
          "En emails informales → demasiado formal: usa \"I've never seen\" en vez de \"Never have I seen\"",
          "En conversación casual → suena artificial: evita inversión en reuniones de equipo relajadas",
          "En Slack o mensajes breves → suena pedante: usa orden normal de oración"
        ]
      },
      objectives: ["Usar inversión con expresiones negativas", "Formar oraciones con 'only'", "Crear énfasis con 'so/such'"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-inversion"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l9t2_e1", word: "Never have I...", translation: "Nunca he...", type: "expression", definition: "emphasis with never", definitionEs: "énfasis con nunca", example: "Never have I seen such talent.", exampleEs: "Nunca he visto tal talento.", related: [], difficulty: 2 },
          { id: "l9t2_e2", word: "Rarely do/does...", translation: "Raramente...", type: "expression", definition: "emphasis with rarely", definitionEs: "énfasis con raramente", example: "Rarely do we get such opportunities.", exampleEs: "Raramente obtenemos tales oportunidades.", related: [], difficulty: 2 },
          { id: "l9t2_e3", word: "Only when... did...", translation: "Solo cuando... fue que...", type: "expression", definition: "emphasis with only when", definitionEs: "énfasis con solo cuando", example: "Only when I saw the data did I understand.", exampleEs: "Solo cuando vi los datos entendí.", related: [], difficulty: 2 },
          { id: "l9t2_e4", word: "Only by + -ing can...", translation: "Solo mediante... podemos...", type: "expression", definition: "emphasis on method", definitionEs: "énfasis en método", example: "Only by working together can we succeed.", exampleEs: "Solo trabajando juntos podemos tener éxito.", related: [], difficulty: 2 },
          { id: "l9t2_e5", word: "So + adj + was/were... that...", translation: "Tan + adj + fue/fueron... que...", type: "expression", definition: "emphasis with so", definitionEs: "énfasis con so", example: "So impressed was she that she hired him immediately.", exampleEs: "Tan impresionada estaba que lo contrató inmediatamente.", related: [], difficulty: 2 },
          { id: "l9t2_e6", word: "Little did + subject + know/realize...", translation: "Poco sabía/se daba cuenta...", type: "expression", definition: "expressing unawareness", definitionEs: "expresando desconocimiento", example: "Little did we know what was about to happen.", exampleEs: "Poco sabíamos lo que estaba por suceder.", related: [], difficulty: 2 },
          { id: "l9t2_e7", word: "No sooner had... than...", translation: "Apenas había... cuando...", type: "expression", definition: "immediate sequence", definitionEs: "secuencia inmediata", example: "No sooner had we launched than orders started coming.", exampleEs: "Apenas habíamos lanzado cuando empezaron a llegar pedidos.", related: [], difficulty: 2 },
          { id: "l9t2_e8", word: "Not only... but also...", translation: "No solo... sino también...", type: "expression", definition: "emphasis with not only", definitionEs: "énfasis con no solo", example: "Not only did we meet our target, but we also exceeded it.", exampleEs: "No solo cumplimos nuestra meta, sino que también la superamos.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l9t2_adv1", word: "seldom", translation: "rara vez", type: "adverb", definition: "not often", definitionEs: "no frecuentemente", example: "Seldom have I seen such quality.", exampleEs: "Rara vez he visto tal calidad.", related: [], difficulty: 2 },
          { id: "l9t2_adv2", word: "scarcely", translation: "apenas", type: "adverb", definition: "hardly", definitionEs: "casi no", example: "Scarcely had I arrived when...", exampleEs: "Apenas había llegado cuando...", related: [], difficulty: 2 },
          { id: "l9t2_adv3", word: "hardly", translation: "apenas", type: "adverb", definition: "almost not", definitionEs: "casi no", example: "Hardly had we begun when...", exampleEs: "Apenas habíamos comenzado cuando...", related: [], difficulty: 2 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t2_cm1", wrong: "Never I have seen such a thing.", correct: "Never have I seen such a thing.", explanation: "Inversion places the auxiliary BEFORE the subject: Never + HAVE + I", explanationEs: "La inversión pone el auxiliar ANTES del sujeto: Never + HAVE + I", category: "grammar" },
        { id: "l9t2_cm2", wrong: "Not only he finished but also won.", correct: "Not only did he finish, but he also won.", explanation: "'Not only' at the start requires inversion (did he) and 'but' needs a subject", explanationEs: "'Not only' al inicio requiere inversión (did he) y 'but' necesita sujeto", category: "grammar" },
        { id: "l9t2_cm3", wrong: "Only when I arrived I understood.", correct: "Only when I arrived did I understand.", explanation: "Inversion occurs in the SECOND clause with 'only when/if/after'", explanationEs: "La inversión ocurre en la SEGUNDA cláusula con 'only when/if/after'", category: "grammar" },
        { id: "l9t2_cm4", wrong: "Little did I knew about it.", correct: "Little did I know about it.", explanation: "After the auxiliary 'did', the verb goes in base form (know, not knew)", explanationEs: "Después del auxiliar 'did', el verbo va en forma base (know, not knew)", category: "grammar" },
        { id: "l9t2_cm5", wrong: "No sooner we arrived when it started raining.", correct: "No sooner had we arrived than it started raining.", explanation: "'No sooner' uses 'than' (not 'when') and requires past perfect with inversion", explanationEs: "'No sooner' usa 'than' (no 'when') y requiere past perfect con inversión", category: "grammar" }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Transforma estas oraciones usando inversión para mayor énfasis",
          items: [
            {
              normal: "I have never seen such dedication.",
              inverted: "Never have I seen such dedication.",
              trigger: "Never"
            },
            {
              normal: "We rarely get such opportunities.",
              inverted: "Rarely do we get such opportunities.",
              trigger: "Rarely"
            },
            {
              normal: "She little knew what was coming.",
              inverted: "Little did she know what was coming.",
              trigger: "Little"
            },
            {
              normal: "They not only finished on time but also under budget.",
              inverted: "Not only did they finish on time, but they also came in under budget.",
              trigger: "Not only"
            },
            {
              normal: "I only realized my mistake when I saw the results.",
              inverted: "Only when I saw the results did I realize my mistake.",
              trigger: "Only when"
            },
            {
              normal: "We had no sooner launched than competitors copied us.",
              inverted: "No sooner had we launched than competitors copied us.",
              trigger: "No sooner"
            }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa con la forma correcta del verbo usando inversión",
          items: [
            { sentence: "Never _____ I _____ (experience) such a challenging project.", answer: "have, experienced" },
            { sentence: "Rarely _____ a company _____ (achieve) such rapid growth.", answer: "does, achieve" },
            { sentence: "Only by working together _____ we _____ (overcome) these challenges.", answer: "can, overcome" },
            { sentence: "Not only _____ she _____ (complete) the task, but she also improved the process.", answer: "did, complete" },
            { sentence: "Little _____ they _____ (realize) the impact of their decision.", answer: "did, realize" },
            { sentence: "So impressed _____ he that he offered her the job immediately.", answer: "was" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en estas oraciones con inversión",
          items: [
            { incorrect: "Seldom I have met someone so talented.", correct: "Seldom have I met someone so talented." },
            { incorrect: "Not only we finished early, but also under budget.", correct: "Not only did we finish early, but we also came in under budget." },
            { incorrect: "Only when I saw the data I understood.", correct: "Only when I saw the data did I understand." },
            { incorrect: "No sooner had we arrived when the meeting started.", correct: "No sooner had we arrived than the meeting started." },
            { incorrect: "Little did I knew about the challenges ahead.", correct: "Little did I know about the challenges ahead." }
          ]
        },
        {
          type: "matching",
          instruction: "Empareja el inicio con la continuación correcta",
          items: [
            { start: "Never have I", end: "witnessed such innovation." },
            { start: "Only by investing in people", end: "can we achieve our goals." },
            { start: "No sooner had we signed", end: "than the market shifted." },
            { start: "So great was the demand", end: "that we had to increase production." },
            { start: "Little did they know", end: "that everything was about to change." }
          ]
        }
      ],
      modelDialogue: {
        title: "Discurso de celebración corporativa",
        context: "Un CEO da un discurso usando inversión para crear impacto y solemnidad",
        dialogue: [
          { speaker: "CEO", text: "Colleagues, never have I been more proud to lead this organization.", translation: "Colegas, nunca he estado más orgulloso de liderar esta organización." },
          { speaker: "CEO", text: "Rarely does a company achieve what we have achieved this year.", translation: "Rara vez una empresa logra lo que nosotros hemos logrado este año." },
          { speaker: "CEO", text: "Little did we know, when we started this journey five years ago, that we would be standing here today as industry leaders.", translation: "Poco sabíamos, cuando comenzamos este viaje hace cinco años, que estaríamos aquí hoy como líderes de la industria." },
          { speaker: "CEO", text: "Not only have we exceeded our targets, but we have also transformed our industry.", translation: "No solo hemos superado nuestros objetivos, sino que también hemos transformado nuestra industria." },
          { speaker: "CEO", text: "Only by working together, only by believing in our vision, have we made this possible.", translation: "Solo trabajando juntos, solo creyendo en nuestra visión, hemos hecho esto posible." },
          { speaker: "CEO", text: "So great is my confidence in this team that I know our best days are still ahead.", translation: "Tan grande es mi confianza en este equipo que sé que nuestros mejores días aún están por venir." }
        ],
        keyPhrases: [
          { phrase: "Never have I been more...", translation: "Nunca he estado más...", usage: "Énfasis emocional máximo" },
          { phrase: "Rarely does a company...", translation: "Rara vez una empresa...", usage: "Destacar logros excepcionales" },
          { phrase: "Little did we know...", translation: "Poco sabíamos...", usage: "Reflexión sobre el pasado" },
          { phrase: "Not only... but also...", translation: "No solo... sino también...", usage: "Agregar logros" },
          { phrase: "Only by... have we...", translation: "Solo mediante... hemos...", usage: "Reconocer esfuerzo" },
          { phrase: "So great is my...", translation: "Tan grande es mi...", usage: "Expresar emoción intensa" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { sound: "/ˈsel.dəm/", word: "seldom", tip: "La 'o' es schwa /ə/; en español tendemos a pronunciar 'sel-DOM' con acento fuerte" },
          { sound: "/ˈskers.li/", word: "scarcely", tip: "SKAIRS-lee; la 'c' antes de 'e' suena /s/" },
          { sound: "/ˈsuː.nɚ/", word: "sooner", tip: "SOO-ner con vocal larga; 'No sooner' se pronuncia fluido" }
        ],
        minimalPairs: [
          { word1: "seldom", word2: "random", explanation: "Seldom /ˈsel.dəm/ vs random /ˈræn.dəm/ - primeras sílabas diferentes" },
          { word1: "scarcely", word2: "scarily", explanation: "Scarcely /ˈskers.li/ - acento en primera sílaba" }
        ],
        intonation: [
          { pattern: "Stress on inverted auxiliary", example: "Never HAVE I seen...", tip: "El auxiliar invertido recibe énfasis para crear impacto" },
          { pattern: "Dramatic pause after trigger", example: "Little... did they know", tip: "La pausa después del trigger aumenta el drama" },
          { pattern: "Fall-rise for hedging", example: "It's possible↘↗", tip: "En reflexiones hipotéticas, el tono descendente-ascendente transmite cautela" }
        ],
        commonProblems: [
          { word: "seldom", wrong: "sel-DOM", correct: "/ˈsel.dəm/", tip: "SEL-duhm, la 'o' es schwa" },
          { word: "scarcely", wrong: "scar-SE-ly", correct: "/ˈskers.li/", tip: "SKAIRS-lee" },
          { word: "sooner", wrong: "SOO-ner", correct: "/ˈsuː.nɚ/", tip: "SOO-ner, vocal larga" }
        ],
        intonationPatterns: [
          { pattern: "Stress on inverted auxiliary", example: "Never HAVE I seen...", meaning: "El auxiliar invertido recibe énfasis" },
          { pattern: "Dramatic pause after trigger word", example: "Little... did they know", meaning: "La pausa aumenta el drama" }
        ]
      },
      culturalNote: {
        title: "Uso de inversión en diferentes contextos",
        titleEs: "Uso de inversión en diferentes contextos",
        content: "La inversión es más común en inglés escrito formal, discursos públicos y literatura que en conversación cotidiana. Usarla en habla informal puede sonar afectado o pretencioso. Sin embargo, en presentaciones ejecutivas, discursos de graduación, o comunicados oficiales, la inversión añade gravitas y sofisticación. En el periodismo, 'Little did they know...' es un recurso narrativo muy común.",
        contentEs: "La inversión es más común en inglés escrito formal y discursos que en conversación cotidiana. En presentaciones ejecutivas añade gravedad y sofisticación. En periodismo, 'Little did they know...' es muy común.",
        region: "General"
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la forma correcta con 'Never'?",
          questionEs: "¿Cuál es la forma correcta con 'Never'?",
          options: [
            "Never I have seen this.",
            "Never have I seen this.",
            "Never I saw this.",
            "Never did I have seen this."
          ],
          correctAnswer: 1,
          explanation: "'Never' + auxiliar (have) + sujeto (I) + participio",
          explanationEs: "'Never' + auxiliar (have) + sujeto (I) + participio"
        },
        {
          question: "¿Qué conector se usa con 'No sooner...than'?",
          options: [
            "when",
            "than",
            "that",
            "as"
          ],
          correctAnswer: 1,
          explanation: "'No sooner...than' siempre van juntos (no 'when')"
        },
        {
          question: "¿Dónde ocurre la inversión con 'Only when...'?",
          options: [
            "En la primera cláusula",
            "En la segunda cláusula",
            "En ambas cláusulas",
            "No requiere inversión"
          ],
          correctAnswer: 1,
          explanation: "'Only when I arrived DID I understand' - inversión en la segunda cláusula"
        },
        {
          question: "Completa: 'So impressed _____ she that...'",
          options: [
            "did",
            "was",
            "had",
            "is"
          ],
          correctAnswer: 1,
          explanation: "'So + adjetivo + was/were + sujeto' para pasado"
        },
        {
          question: "¿Cuál es correcta?",
          options: [
            "Little did I knew",
            "Little did I know",
            "Little I did know",
            "Little knew I"
          ],
          correctAnswer: 1,
          explanation: "Después de 'did', el verbo va en forma base (know, no knew)"
        },
        {
          question: "¿Cuándo es apropiado usar inversión?",
          options: [
            "En conversación casual",
            "En mensajes de texto",
            "En discursos formales y escritura sofisticada",
            "Siempre, para sonar inteligente"
          ],
          correctAnswer: 2,
          explanation: "La inversión es más apropiada en contextos formales; en casual suena afectada"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un párrafo de discurso corporativo usando al menos 3 estructuras de inversión",
          sampleResponse: "Ladies and gentlemen, rarely have I had the privilege of announcing news of this magnitude. Never in the history of our company have we achieved such remarkable growth. Little did we know, when we set our ambitious targets last January, that we would not only meet them but surpass them by 40%. Only by the dedication of every single team member have we made this possible. So proud am I of what we have accomplished together that I am announcing today a special bonus for all employees."
        },
        {
          prompt: "Transforma este párrafo simple usando inversión donde sea apropiado",
          sampleResponse: "Original: 'I have never seen such teamwork. We rarely achieve this level of coordination. We realized our potential only when we faced the crisis.'\n\nWith inversion: 'Never have I witnessed such remarkable teamwork. Rarely do we achieve this level of flawless coordination. Only when we faced the crisis did we truly realize our potential. So powerful was this realization that it transformed our entire approach to collaboration.'"
        },
        {
          prompt: "Escribe la apertura de un email formal muy importante usando inversión",
          sampleResponse: "Dear Board Members,\n\nSeldom do I write to you with news of this significance. Never in my fifteen years as CEO have I been more confident about our strategic direction. Not only have we successfully completed the merger, but we have also exceeded our synergy targets by 25%. Only by the exceptional efforts of our integration team has this been achieved in record time. Little did we anticipate such smooth execution, and so pleased am I with the results that I am recommending we accelerate Phase 2."
        },
        {
          prompt: "Crea un narrativo usando 'Little did they know' y otras inversiones",
          sampleResponse: "In 2019, a small startup launched in a garage in Austin. Little did the founders know that their product would revolutionize the industry. Never had they imagined that within five years, they would be serving 50 million users. So rapid was their growth that competitors could barely keep up. No sooner had they launched in Europe than demand exceeded all projections. Only when they looked back at their journey did they realize how far they had come. Rarely does success come to those who wait—but for those who act, great things await."
        }
      ],
      connectionToPrevious: "En presentaciones ejecutivas, la inversión añade impacto dramático a tus puntos clave, especialmente en aperturas y cierres.",
      connectionToNext: "Dominar la inversión te prepara para expresar acuerdo y desacuerdo con el matiz y sofisticación que aprenderás a continuación."
    },
    {
      id: 3,
      title: "Nuanced Agreement and Disagreement",
      titleEs: "Acuerdo y Desacuerdo con Matices",
      introduction: {
        title: "⚖️ Acuerdo y Desacuerdo con Matices",
        explanation: "En discusiones sofisticadas, rara vez el acuerdo o desacuerdo es absoluto. Aprenderás a expresar posiciones matizadas.",
        keyPoints: [
          "Acuerdo parcial: 'I agree to a certain extent', 'There's some truth in that'",
          "Desacuerdo cortés: 'I'm not entirely convinced', 'I see it somewhat differently'",
          "Reservas: 'That said,...', 'Having said that,...', 'Be that as it may...'",
          "Concesiones: 'I concede that...', 'You make a valid point, however...'",
          "Alternativas: 'I'd like to propose an alternative view'"
        ],
        examples: [
          { english: "I agree to a certain extent, but I think we're overlooking some key factors.", spanish: "Estoy de acuerdo hasta cierto punto, pero creo que estamos pasando por alto algunos factores clave.", explanation: "Acuerdo parcial con matiz" },
          { english: "Be that as it may, we still need to consider the risks.", spanish: "Sea como sea, todavía necesitamos considerar los riesgos.", explanation: "Concediendo pero manteniendo posición" },
          { english: "You raise an interesting point. That said, I'm not entirely convinced.", spanish: "Planteas un punto interesante. Dicho esto, no estoy del todo convencido.", explanation: "Reconocimiento + reserva" }
        ],
        tips: [
          "💡 'Be that as it may' es muy formal y elegante",
          "💡 Siempre reconoce el punto del otro antes de disentir",
          "💡 'I respectfully disagree' es más suave que 'I disagree'"
        ],
        whenToUse: [
          "En reuniones de board o comités: \"I agree to a certain extent, but we're overlooking key factors\"",
          "En negociaciones formales: \"Be that as it may, we still need to consider the risks\"",
          "En debates académicos o profesionales: \"You raise an interesting point. That said, I'm not entirely convinced\"",
          "En evaluaciones de desempeño: \"I concede that point, however I would argue that...\""
        ],
        whenNotToUse: [
          "En desacuerdos con amigos → demasiado formal: usa \"I see it differently\" en vez de \"Be that as it may\"",
          "Cuando quieres ser directo y decisivo → suena evasivo: en emergencias usa \"I disagree\"",
          "En conversaciones muy breves → suena verboso: evita múltiples concesiones"
        ]
      },
      objectives: ["Expresar acuerdo parcial", "Disentir con diplomacia", "Usar expresiones de concesión"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-advanced-linking-devices", "c1-hedging"],
      vocabulary: {
        nouns: [
          { id: "l9t3_n1", word: "nuance", translation: "matiz", type: "noun", definition: "subtle difference", definitionEs: "diferencia sutil", example: "There's a nuance here.", exampleEs: "Hay un matiz aquí.", related: ["nuanced"], difficulty: 2 },
          { id: "l9t3_n2", word: "reservation", translation: "reserva", type: "noun", definition: "doubt or hesitation", definitionEs: "duda o vacilación", example: "I have some reservations.", exampleEs: "Tengo algunas reservas.", related: [], difficulty: 2 },
          { id: "l9t3_n3", word: "caveat", translation: "advertencia/salvedad", type: "noun", definition: "a warning condition", definitionEs: "una condición de advertencia", example: "There's one caveat.", exampleEs: "Hay una salvedad.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l9t3_v1", word: "concede", translation: "conceder", type: "verb", definition: "to admit something is true", definitionEs: "admitir que algo es verdad", example: "I concede that point.", exampleEs: "Concedo ese punto.", related: [], difficulty: 2 },
          { id: "l9t3_v2", word: "acknowledge", translation: "reconocer", type: "verb", definition: "to accept as true", definitionEs: "aceptar como verdad", example: "I acknowledge your concerns.", exampleEs: "Reconozco tus preocupaciones.", related: [], difficulty: 1 },
          { id: "l9t3_v3", word: "contest", translation: "disputar", type: "verb", definition: "to dispute", definitionEs: "disputar", example: "I must contest that assertion.", exampleEs: "Debo disputar esa afirmación.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l9t3_a1", word: "nuanced", translation: "matizado", type: "adjective", definition: "with subtle differences", definitionEs: "con diferencias sutiles", example: "This requires a nuanced approach.", exampleEs: "Esto requiere un enfoque matizado.", related: [], difficulty: 2 },
          { id: "l9t3_a2", word: "valid", translation: "válido", type: "adjective", definition: "logically sound", definitionEs: "lógicamente sólido", example: "That's a valid concern.", exampleEs: "Esa es una preocupación válida.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l9t3_e1", word: "I agree to a certain extent", translation: "Estoy de acuerdo hasta cierto punto", type: "expression", definition: "partial agreement", definitionEs: "acuerdo parcial", example: "I agree to a certain extent, but...", exampleEs: "Estoy de acuerdo hasta cierto punto, pero...", related: [], difficulty: 1 },
          { id: "l9t3_e2", word: "Be that as it may", translation: "Sea como sea", type: "expression", definition: "acknowledging but continuing", definitionEs: "reconociendo pero continuando", example: "Be that as it may, we must act.", exampleEs: "Sea como sea, debemos actuar.", related: [], difficulty: 2 },
          { id: "l9t3_e3", word: "That said / Having said that", translation: "Dicho esto", type: "expression", definition: "introducing contrast", definitionEs: "introduciendo contraste", example: "I like the idea. That said, there are risks.", exampleEs: "Me gusta la idea. Dicho esto, hay riesgos.", related: [], difficulty: 1 },
          { id: "l9t3_e4", word: "I'm not entirely convinced that...", translation: "No estoy del todo convencido de que...", type: "expression", definition: "polite disagreement", definitionEs: "desacuerdo cortés", example: "I'm not entirely convinced that this will work.", exampleEs: "No estoy del todo convencido de que esto funcione.", related: [], difficulty: 1 },
          { id: "l9t3_e5", word: "I see it somewhat differently", translation: "Lo veo algo diferente", type: "expression", definition: "gentle disagreement", definitionEs: "desacuerdo suave", example: "I respect your view, but I see it somewhat differently.", exampleEs: "Respeto tu opinión, pero lo veo algo diferente.", related: [], difficulty: 1 },
          { id: "l9t3_e6", word: "With one caveat", translation: "Con una salvedad", type: "expression", definition: "adding a condition", definitionEs: "añadiendo una condición", example: "I support this, with one caveat.", exampleEs: "Apoyo esto, con una salvedad.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t3_cm1", wrong: "I disagree. (too direct in formal settings)", correct: "I see it somewhat differently. / I'm not entirely convinced.", explanation: "In professional contexts, direct disagreement can damage relationships", explanationEs: "En contextos profesionales, el desacuerdo directo puede dañar relaciones", category: "usage" },
        { id: "l9t3_cm2", wrong: "Yes, but... (immediately contradicting)", correct: "I appreciate that perspective. That said, / Having said that...", explanation: "'Yes, but' invalidates what you just accepted; use smoother transitions", explanationEs: "'Yes, but' invalida lo que acabas de aceptar; usa transiciones más suaves", category: "usage" },
        { id: "l9t3_cm3", wrong: "You're wrong because...", correct: "I wonder if we might consider an alternative view...", explanation: "Attack the idea, not the person; present alternatives instead of rejections", explanationEs: "Ataca la idea, no a la persona; presenta alternativas en vez de rechazos", category: "usage" },
        { id: "l9t3_cm4", wrong: "I totally disagree with everything you said.", correct: "While I agree with your point about X, I have reservations about Y.", explanation: "Find points of partial agreement before expressing disagreement", explanationEs: "Encuentra puntos de acuerdo parcial antes de expresar desacuerdo", category: "usage" },
        { id: "l9t3_cm5", wrong: "Be that as it may, but... (redundant)", correct: "Be that as it may, we still need to...", explanation: "'Be that as it may' already implies contrast; it doesn't need 'but'", explanationEs: "'Be that as it may' ya implica contraste; no necesita 'but'", category: "grammar" }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Suaviza estas expresiones de desacuerdo directo",
          items: [
            {
              direct: "You're wrong.",
              nuanced: "I see it somewhat differently.",
              level: "diplomatic"
            },
            {
              direct: "I disagree.",
              nuanced: "I'm not entirely convinced that's the best approach.",
              level: "soft disagreement"
            },
            {
              direct: "That's a bad idea.",
              nuanced: "While the idea has merit, I have some reservations about implementation.",
              level: "constructive"
            },
            {
              direct: "No, that won't work.",
              nuanced: "I appreciate the suggestion. That said, I wonder if we've considered...",
              level: "redirecting"
            },
            {
              direct: "You don't understand.",
              nuanced: "Perhaps I haven't explained this clearly. Let me clarify...",
              level: "taking responsibility"
            }
          ]
        },
        {
          type: "situational",
          instruction: "Elige la respuesta más apropiada para cada situación",
          items: [
            {
              situation: "Tu jefe propone una idea que crees que fallará",
              options: [
                "That won't work.",
                "I appreciate the direction, but I have some concerns about feasibility. Could we explore alternatives?",
                "Whatever you say, boss."
              ],
              correct: 1,
              explanation: "Reconoce, expresa reservas y ofrece colaboración"
            },
            {
              situation: "Un colega senior está equivocado sobre datos en una reunión",
              options: [
                "Actually, you're wrong. The data shows...",
                "I think there might be a slight discrepancy in those figures. From my analysis...",
                "Let's just move on."
              ],
              correct: 1,
              explanation: "Corrige con tacto, sin avergonzar públicamente"
            },
            {
              situation: "Estás parcialmente de acuerdo con una propuesta",
              options: [
                "I agree... but...",
                "I agree to a certain extent. There's merit in the approach for Phase 1. That said, I have reservations about Phase 2.",
                "Yes and no."
              ],
              correct: 1,
              explanation: "Especifica qué aceptas y qué cuestiones"
            }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa estas expresiones de acuerdo/desacuerdo matizado",
          items: [
            { sentence: "I agree to a certain _____, but we need more data.", answer: "extent" },
            { sentence: "_____ that as it may, we still need to address the core issue.", answer: "Be" },
            { sentence: "I'm not _____ convinced this is the right approach.", answer: "entirely" },
            { sentence: "_____ said, there are some valid concerns to consider.", answer: "That" },
            { sentence: "I support this, with one _____.", answer: "caveat" },
            { sentence: "I _____ your concerns, and I'd like to address them directly.", answer: "acknowledge" }
          ]
        },
        {
          type: "matching",
          instruction: "Empareja la situación con la expresión más apropiada",
          items: [
            { situation: "Want to partially agree", expression: "I agree to a certain extent..." },
            { situation: "Acknowledge a point but maintain your position", expression: "Be that as it may..." },
            { situation: "Add a condition to your support", expression: "I support this, with one caveat..." },
            { situation: "Gently introduce a different view", expression: "I see it somewhat differently..." },
            { situation: "Express polite skepticism", expression: "I'm not entirely convinced..." }
          ]
        }
      ],
      modelDialogue: {
        title: "Debate ejecutivo sobre estrategia",
        context: "Ejecutivos discuten una propuesta de expansión con posiciones diferentes",
        dialogue: [
          { speaker: "VP Sales", text: "I believe we should enter the Asian market aggressively this quarter.", translation: "Creo que deberíamos entrar al mercado asiático agresivamente este trimestre." },
          { speaker: "CFO", text: "I agree to a certain extent. The market potential is undeniable. That said, I have reservations about the timing.", translation: "Estoy de acuerdo hasta cierto punto. El potencial del mercado es innegable. Dicho esto, tengo reservas sobre el momento." },
          { speaker: "VP Sales", text: "But if we wait, competitors will take the market share.", translation: "Pero si esperamos, los competidores tomarán la cuota de mercado." },
          { speaker: "CFO", text: "You make a valid point. Be that as it may, we need to ensure our cash position can support this expansion.", translation: "Planteas un punto válido. Sea como sea, necesitamos asegurar que nuestra posición de efectivo pueda soportar esta expansión." },
          { speaker: "CEO", text: "I see merit in both perspectives. Could we perhaps consider a phased approach?", translation: "Veo mérito en ambas perspectivas. ¿Podríamos quizás considerar un enfoque por fases?" },
          { speaker: "VP Sales", text: "I'm not entirely convinced a phased approach will give us the competitive advantage we need. However, I acknowledge the financial constraints.", translation: "No estoy del todo convencido de que un enfoque por fases nos dará la ventaja competitiva que necesitamos. Sin embargo, reconozco las restricciones financieras." },
          { speaker: "CFO", text: "I'd support the aggressive timeline, with one caveat: we secure additional credit facilities first.", translation: "Apoyaría el cronograma agresivo, con una salvedad: que aseguremos facilidades de crédito adicionales primero." },
          { speaker: "CEO", text: "That seems like a reasonable middle ground. Let's proceed on that basis.", translation: "Eso parece un punto medio razonable. Procedamos sobre esa base." }
        ],
        keyPhrases: [
          { phrase: "I agree to a certain extent", translation: "Estoy de acuerdo hasta cierto punto", usage: "Acuerdo parcial" },
          { phrase: "That said, I have reservations", translation: "Dicho esto, tengo reservas", usage: "Introducir objeciones" },
          { phrase: "You make a valid point", translation: "Planteas un punto válido", usage: "Reconocer antes de disentir" },
          { phrase: "Be that as it may", translation: "Sea como sea", usage: "Conceder pero mantener posición" },
          { phrase: "I see merit in both perspectives", translation: "Veo mérito en ambas perspectivas", usage: "Posición neutral/mediadora" },
          { phrase: "With one caveat", translation: "Con una salvedad", usage: "Agregar condición" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { sound: "/ˈkæv.i.æt/", word: "caveat", tip: "KAV-ee-at, tres sílabas; en español tendemos a acentuar 'at'" },
          { sound: "/ˈnuː.ɑːnst/", word: "nuanced", tip: "NOO-ahnst; la 'c' suena /s/ antes de 'ed'" },
          { sound: "/ɔːlˈbiː.ɪt/", word: "albeit", tip: "all-BEE-it; no 'al-BITE'" }
        ],
        minimalPairs: [
          { word1: "caveat", word2: "caviar", explanation: "Caveat /ˈkæv.i.æt/ vs caviar /ˈkæv.i.ɑːr/ - terminaciones diferentes" },
          { word1: "concede", word2: "conceive", explanation: "Concede /kənˈsiːd/ vs conceive /kənˈsiːv/ - -d vs -v" }
        ],
        intonation: [
          { pattern: "Fall-rise for hedging", example: "I agree to a certain extent↘↗", tip: "El tono descendente-ascendente transmite acuerdo parcial antes del 'but'" },
          { pattern: "Level for 'That said'", example: "That said→", tip: "Tono nivel introduce el contraste con calma" }
        ],
        commonProblems: [
          { word: "caveat", wrong: "KA-ve-at", correct: "/ˈkæv.i.æt/", tip: "KAV-ee-at, tres sílabas" },
          { word: "nuanced", wrong: "nu-AN-ced", correct: "/ˈnuː.ɑːnst/", tip: "NOO-ahnst" },
          { word: "albeit", wrong: "al-BITE", correct: "/ɔːlˈbiː.ɪt/", tip: "all-BEE-it" }
        ],
        intonationPatterns: [
          { pattern: "Softer, questioning tone for disagreement", example: "I'm not entirely convinced ↗?", meaning: "La entonación ascendente suaviza" },
          { pattern: "Pause before 'but' or 'however'", example: "I agree... however...", meaning: "La pausa señala que viene contraste" }
        ]
      },
      culturalNote: {
        title: "Estilos de desacuerdo por cultura",
        titleEs: "Estilos de desacuerdo por cultura",
        content: "Las culturas varían enormemente en cómo expresan desacuerdo. Las culturas anglo-americanas favorecen el desacuerdo indirecto en contextos profesionales ('I see it differently'). Las culturas germánicas y neerlandesas valoran la franqueza ('I disagree'). En Japón, el desacuerdo directo es raro; se prefiere 'That might be difficult'. En América Latina, el contexto relacional importa mucho: es más fácil disentir con alguien con quien tienes buena relación personal.",
        contentEs: "Las culturas varían enormemente en cómo expresan desacuerdo. Las culturas anglo-americanas favorecen el desacuerdo indirecto. Las culturas germánicas valoran la franqueza. En Japón, el desacuerdo directo es raro.",
        region: "General"
      },
      consolidationQuiz: [
        {
          question: "¿Qué significa 'I agree to a certain extent'?",
          options: [
            "Estoy completamente de acuerdo",
            "Estoy parcialmente de acuerdo",
            "No estoy de acuerdo",
            "No tengo opinión"
          ],
          correctAnswer: 1,
          explanation: "Indica acuerdo parcial, preparando para expresar reservas"
        },
        {
          question: "¿Cuándo usarías 'Be that as it may'?",
          options: [
            "Para estar totalmente de acuerdo",
            "Para reconocer un punto pero mantener tu posición",
            "Para cambiar de tema",
            "Para pedir clarificación"
          ],
          correctAnswer: 1,
          explanation: "Concedes el punto del otro pero mantienes tu argumento principal"
        },
        {
          question: "¿Cuál es más diplomática?",
          options: [
            "'You're wrong'",
            "'That's a terrible idea'",
            "'I see it somewhat differently'",
            "'No way'"
          ],
          correctAnswer: 2,
          explanation: "'I see it somewhat differently' expresa desacuerdo sin atacar"
        },
        {
          question: "¿Qué es un 'caveat'?",
          options: [
            "Un acuerdo total",
            "Una advertencia o condición",
            "Un desacuerdo fuerte",
            "Una pregunta"
          ],
          correctAnswer: 1,
          explanation: "Un caveat es una salvedad o condición que añades a tu apoyo"
        },
        {
          question: "¿Por qué evitar 'Yes, but...'?",
          options: [
            "Es gramaticalmente incorrecto",
            "El 'but' invalida el 'yes', haciendo el acuerdo insincero",
            "Es muy informal",
            "Solo se usa en inglés británico"
          ],
          correctAnswer: 1,
          explanation: "'Yes, but' hace que tu acuerdo parezca falso; usa 'That said' en su lugar"
        },
        {
          question: "'Having said that' introduce...",
          options: [
            "Acuerdo total",
            "Una repetición",
            "Un contraste o matiz",
            "Una pregunta"
          ],
          correctAnswer: 2,
          explanation: "'Having said that' / 'That said' introduce un punto contrastante"
        }
      ],
      guidedProduction: [
        {
          prompt: "Responde a la propuesta de tu jefe de reducir el equipo en 30%, expresando desacuerdo diplomático",
          sampleResponse: "I appreciate you sharing the proposal, and I understand the financial pressures we're facing. I agree to a certain extent that we need to reduce costs. That said, I have significant reservations about cutting the team by 30%. While it would deliver short-term savings, I'm not entirely convinced it's sustainable long-term. We risk losing critical institutional knowledge and overburdening remaining staff. Be that as it may, I acknowledge we need to act. I'd like to propose an alternative: could we explore a 15% reduction combined with process automation? I believe this would achieve similar savings while preserving our capability."
        },
        {
          prompt: "Participa en un debate donde parcialmente estás de acuerdo con dos posiciones opuestas",
          sampleResponse: "This is a nuanced issue, and I see merit in both perspectives. To Maria's point about aggressive expansion, I agree to a certain extent—the market opportunity is real and timing matters. Having said that, I also acknowledge John's concerns about financial stability. Be that as it may, I don't think we need to choose one approach entirely. I'd support the expansion, with one caveat: we phase it over two quarters rather than one. This addresses John's cash flow concerns while capturing Maria's market opportunity. I'm not entirely convinced either extreme is optimal, but this middle ground might give us the best of both worlds."
        },
        {
          prompt: "Corrige diplomáticamente a un colega senior que ha presentado datos incorrectos",
          sampleResponse: "Thank you for that comprehensive analysis, David. I found the overall framework very useful. I wonder, though, if there might be a slight discrepancy in the Q3 figures on slide 7. From the data I've been working with, I'm seeing slightly different numbers—around 15% rather than 22%. I could be looking at a different data source, of course. Would it be helpful if we compared notes after the meeting? I certainly don't want to derail the discussion, but I thought it worth flagging as it might affect some of the conclusions. The rest of the analysis is compelling."
        },
        {
          prompt: "Expresa reservas sobre un proyecto mientras mantienes relación positiva con el proponente",
          sampleResponse: "Sarah, I've always valued your innovative thinking, and this proposal is another example of your creativity. I agree to a certain extent with the core concept—automating the customer journey would improve efficiency. That said, I have some reservations I'd like to discuss. The implementation timeline seems ambitious, and I'm not entirely convinced we have the technical infrastructure in place. Having said that, I'm not dismissing the idea. Could we perhaps explore a pilot program first? This would allow us to test the concept before full commitment. I'd be happy to support you in developing a phased approach—I think that would strengthen the business case considerably."
        }
      ],
      connectionToPrevious: "La inversión que aprendiste te permite agregar énfasis sofisticado a tus puntos de acuerdo o desacuerdo.",
      connectionToNext: "Expresar matices en acuerdo/desacuerdo es fundamental para el lenguaje de planificación estratégica que verás a continuación."
    },
    {
      id: 4,
      title: "Strategic Planning Language",
      titleEs: "Lenguaje de Planificación Estratégica",
      introduction: {
        title: "📊 Lenguaje de Planificación Estratégica",
        explanation: "La planificación estratégica tiene su propio vocabulario. Dominar estos términos es esencial para discusiones de alto nivel empresarial.",
        keyPoints: [
          "Análisis: SWOT (Strengths, Weaknesses, Opportunities, Threats)",
          "Objetivos: 'strategic objectives', 'key performance indicators (KPIs)'",
          "Ventaja: 'competitive advantage', 'market positioning', 'differentiation'",
          "Ejecución: 'implementation roadmap', 'milestones', 'deliverables'",
          "Evaluación: 'metrics', 'benchmarks', 'performance review'"
        ],
        examples: [
          { english: "Our strategic objective is to increase market share by 15% within 18 months.", spanish: "Nuestro objetivo estratégico es aumentar la cuota de mercado en 15% en 18 meses.", explanation: "Objetivo estratégico" },
          { english: "The SWOT analysis reveals several opportunities in emerging markets.", spanish: "El análisis SWOT revela varias oportunidades en mercados emergentes.", explanation: "Usando análisis SWOT" },
          { english: "We need to establish clear KPIs to measure our progress.", spanish: "Necesitamos establecer KPIs claros para medir nuestro progreso.", explanation: "Indicadores de desempeño" }
        ],
        tips: [
          "💡 Los KPIs deben ser SMART: Specific, Measurable, Achievable, Relevant, Time-bound",
          "💡 'Pivot' significa cambiar de dirección estratégica",
          "💡 'Low-hanging fruit' son ganancias rápidas y fáciles"
        ],
        whenToUse: [
          "En sesiones de planificación estratégica: \"Our strategic objective is to increase market share by 15%\"",
          "En presentaciones a stakeholders: \"The SWOT analysis reveals several opportunities in emerging markets\"",
          "En revisiones trimestrales: \"We need to establish clear KPIs to measure our progress\"",
          "En discusiones de roadmap: \"Let's prioritize our implementation roadmap and deliverables\""
        ],
        whenNotToUse: [
          "En conversaciones informales sobre trabajo → suena corporativo: evita \"low-hanging fruit\" con colegas cercanos",
          "En emails de actualización rápida → demasiado denso: usa \"goals\" en vez de \"strategic objectives\"",
          "En contextos pequeños o startups → puede sonar excesivo: adapta el nivel de formalidad"
        ]
      },
      objectives: ["Usar vocabulario de planificación estratégica", "Discutir objetivos y KPIs", "Participar en discusiones estratégicas"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-nominalization"],
      vocabulary: {
        nouns: [
          { id: "l9t4_n1", word: "SWOT analysis", translation: "análisis FODA/SWOT", type: "noun", definition: "strategic planning tool", definitionEs: "herramienta de planificación estratégica", example: "Let's do a SWOT analysis.", exampleEs: "Hagamos un análisis SWOT.", related: [], difficulty: 2 },
          { id: "l9t4_n2", word: "KPI (Key Performance Indicator)", translation: "indicador clave de desempeño", type: "noun", definition: "measurement of success", definitionEs: "medida de éxito", example: "What are our KPIs?", exampleEs: "¿Cuáles son nuestros KPIs?", related: [], difficulty: 2 },
          { id: "l9t4_n3", word: "milestone", translation: "hito", type: "noun", definition: "important achievement point", definitionEs: "punto de logro importante", example: "We've reached a major milestone.", exampleEs: "Hemos alcanzado un hito importante.", related: [], difficulty: 1 },
          { id: "l9t4_n4", word: "roadmap", translation: "hoja de ruta", type: "noun", definition: "plan with stages", definitionEs: "plan con etapas", example: "Here's our implementation roadmap.", exampleEs: "Aquí está nuestra hoja de ruta de implementación.", related: [], difficulty: 1 },
          { id: "l9t4_n5", word: "deliverable", translation: "entregable", type: "noun", definition: "output to be produced", definitionEs: "resultado a producir", example: "What are the deliverables?", exampleEs: "¿Cuáles son los entregables?", related: [], difficulty: 2 },
          { id: "l9t4_n6", word: "competitive advantage", translation: "ventaja competitiva", type: "noun", definition: "edge over competitors", definitionEs: "ventaja sobre competidores", example: "This gives us a competitive advantage.", exampleEs: "Esto nos da una ventaja competitiva.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l9t4_v1", word: "align", translation: "alinear", type: "verb", definition: "to bring into agreement", definitionEs: "poner de acuerdo", example: "We need to align our goals.", exampleEs: "Necesitamos alinear nuestros objetivos.", related: ["alignment"], difficulty: 1 },
          { id: "l9t4_v2", word: "pivot", translation: "pivotar/cambiar dirección", type: "verb", definition: "to change direction", definitionEs: "cambiar de dirección", example: "We may need to pivot.", exampleEs: "Puede que necesitemos pivotar.", related: [], difficulty: 2 },
          { id: "l9t4_v3", word: "prioritize", translation: "priorizar", type: "verb", definition: "to rank in importance", definitionEs: "clasificar por importancia", example: "We must prioritize our initiatives.", exampleEs: "Debemos priorizar nuestras iniciativas.", related: [], difficulty: 1 },
          { id: "l9t4_v4", word: "execute", translation: "ejecutar", type: "verb", definition: "to carry out", definitionEs: "llevar a cabo", example: "Now we must execute the plan.", exampleEs: "Ahora debemos ejecutar el plan.", related: ["execution"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l9t4_a1", word: "strategic", translation: "estratégico", type: "adjective", definition: "planned for long-term", definitionEs: "planificado a largo plazo", example: "This is a strategic decision.", exampleEs: "Esta es una decisión estratégica.", related: [], difficulty: 1 },
          { id: "l9t4_a2", word: "tactical", translation: "táctico", type: "adjective", definition: "short-term action-oriented", definitionEs: "orientado a acciones a corto plazo", example: "We need a tactical approach.", exampleEs: "Necesitamos un enfoque táctico.", related: [], difficulty: 2 },
          { id: "l9t4_a3", word: "feasible", translation: "factible", type: "adjective", definition: "possible to achieve", definitionEs: "posible de lograr", example: "Is this plan feasible?", exampleEs: "¿Es factible este plan?", related: ["feasibility"], difficulty: 2 },
        ],
        expressions: [
          { id: "l9t4_e1", word: "low-hanging fruit", translation: "ganancias fáciles", type: "expression", definition: "easy wins", definitionEs: "victorias fáciles", example: "Let's start with the low-hanging fruit.", exampleEs: "Empecemos con las ganancias fáciles.", related: [], difficulty: 2 },
          { id: "l9t4_e2", word: "move the needle", translation: "hacer un impacto notable", type: "expression", definition: "make significant progress", definitionEs: "hacer progreso significativo", example: "Will this move the needle?", exampleEs: "¿Esto hará un impacto notable?", related: [], difficulty: 2 },
          { id: "l9t4_e3", word: "at the end of the day", translation: "al final del día", type: "expression", definition: "ultimately", definitionEs: "en última instancia", example: "At the end of the day, results matter.", exampleEs: "Al final del día, los resultados importan.", related: [], difficulty: 1 },
          { id: "l9t4_e4", word: "on the same page", translation: "en sintonía", type: "expression", definition: "in agreement", definitionEs: "de acuerdo", example: "We need to be on the same page.", exampleEs: "Necesitamos estar en sintonía.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t4_cm1", wrong: "Using KPIs and metrics interchangeably", correct: "KPIs are specific metrics tied to strategic objectives; not all metrics are KPIs", explanation: "KPIs are KEY indicators; metrics can be any measurement", explanationEs: "KPIs son indicadores CLAVE; las métricas pueden ser cualquier medición", category: "vocabulary" },
        { id: "l9t4_cm2", wrong: "Confusing strategy with tactics", correct: "Strategy = long-term direction (WHAT/WHY); Tactics = short-term actions (HOW)", explanation: "'Entering the Asian market' is strategy; 'hiring 3 salespeople' is tactics", explanationEs: "'Entrar al mercado asiático' es estrategia; 'contratar 3 vendedores' es táctica", category: "vocabulary" },
        { id: "l9t4_cm3", wrong: "Setting too many KPIs", correct: "Focus on 3-5 key KPIs that truly drive the business", explanation: "Too many KPIs dilute focus; KPIs should be the most critical ones", explanationEs: "Demasiados KPIs diluyen el enfoque; los KPIs deben ser los más críticos", category: "usage" },
        { id: "l9t4_cm4", wrong: "Using 'pivot' for any change", correct: "'Pivot' specifically means a fundamental change in strategy or business model", explanation: "Pivot is a major change in direction, not any minor adjustment", explanationEs: "Pivot es un cambio de dirección mayor, no cualquier ajuste menor", category: "vocabulary" },
        { id: "l9t4_cm5", wrong: "SWOT analysis without action", correct: "Each SWOT finding should lead to a strategic action", explanation: "SWOT is only useful if it transforms findings into strategic actions", explanationEs: "SWOT es solo útil si transforma hallazgos en acciones estratégicas", category: "usage" }
      ],
      exercises: [
        {
          type: "matching",
          instruction: "Empareja términos estratégicos con sus definiciones",
          items: [
            { term: "SWOT Analysis", definition: "Evaluation of Strengths, Weaknesses, Opportunities, Threats" },
            { term: "KPI", definition: "Key Performance Indicator - metric tied to strategic goals" },
            { term: "Competitive advantage", definition: "What makes you better than competitors" },
            { term: "Roadmap", definition: "Plan showing stages and milestones over time" },
            { term: "Deliverable", definition: "Specific output or result to be produced" },
            { term: "Pivot", definition: "Fundamental change in business direction or strategy" }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa estas oraciones de planificación estratégica",
          items: [
            { sentence: "Let's identify the _____-hanging fruit first.", answer: "low" },
            { sentence: "Will this initiative _____ the needle on our growth targets?", answer: "move" },
            { sentence: "We need everyone to be on the same _____.", answer: "page" },
            { sentence: "What's our competitive _____ in this market?", answer: "advantage" },
            { sentence: "Here's the implementation _____ for Phase 1.", answer: "roadmap" },
            { sentence: "The _____ for Q1 is the market analysis report.", answer: "deliverable" }
          ]
        },
        {
          type: "situational",
          instruction: "Elige el término estratégico correcto para cada situación",
          items: [
            {
              situation: "Easy wins that require minimal effort",
              options: ["Low-hanging fruit", "Quick wins", "Easy targets"],
              correct: 0,
              explanation: "'Low-hanging fruit' es la expresión estándar para ganancias fáciles"
            },
            {
              situation: "A major change in your business model",
              options: ["Adjustment", "Pivot", "Modification"],
              correct: 1,
              explanation: "'Pivot' describe un cambio fundamental de dirección estratégica"
            },
            {
              situation: "Measurable goals tied to strategy",
              options: ["Objectives", "KPIs", "Targets"],
              correct: 1,
              explanation: "Los KPIs son indicadores específicos y medibles del éxito estratégico"
            },
            {
              situation: "Long-term vs short-term planning",
              options: ["Big vs small", "Strategic vs tactical", "Important vs urgent"],
              correct: 1,
              explanation: "Estratégico = largo plazo/dirección; Táctico = corto plazo/acciones"
            }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma estas oraciones vagas en lenguaje estratégico preciso",
          items: [
            {
              vague: "We want to grow.",
              strategic: "Our strategic objective is to increase market share by 15% within 18 months.",
              element: "SMART objective"
            },
            {
              vague: "We're better than competitors.",
              strategic: "Our competitive advantage lies in our proprietary technology and first-mover position.",
              element: "Specific differentiator"
            },
            {
              vague: "We'll measure success.",
              strategic: "We've established KPIs: customer acquisition cost, retention rate, and NPS score.",
              element: "Defined KPIs"
            },
            {
              vague: "We have a plan.",
              strategic: "The implementation roadmap includes three phases with clear milestones and deliverables.",
              element: "Structured roadmap"
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Reunión de planificación estratégica",
        context: "El equipo ejecutivo define objetivos estratégicos para el próximo año fiscal",
        dialogue: [
          { speaker: "CEO", text: "Let's begin with a SWOT analysis. What are our key strengths and weaknesses?", translation: "Comencemos con un análisis SWOT. ¿Cuáles son nuestras fortalezas y debilidades clave?" },
          { speaker: "VP Operations", text: "Our strength is our proprietary technology. Our weakness is limited distribution capacity.", translation: "Nuestra fortaleza es nuestra tecnología propietaria. Nuestra debilidad es la capacidad de distribución limitada." },
          { speaker: "CMO", text: "In terms of opportunities, the Asian market is underserved. The threat is new entrants with deeper pockets.", translation: "En términos de oportunidades, el mercado asiático está desatendido. La amenaza son nuevos competidores con más recursos." },
          { speaker: "CEO", text: "Good. So our strategic objective should be to leverage our technology advantage to capture Asian market share before competitors can establish themselves.", translation: "Bien. Entonces nuestro objetivo estratégico debería ser aprovechar nuestra ventaja tecnológica para capturar cuota de mercado asiático antes de que los competidores puedan establecerse." },
          { speaker: "CFO", text: "What KPIs will we use to track progress?", translation: "¿Qué KPIs usaremos para rastrear el progreso?" },
          { speaker: "CMO", text: "I suggest three: market share percentage, customer acquisition cost, and brand awareness scores.", translation: "Sugiero tres: porcentaje de cuota de mercado, costo de adquisición de clientes y puntajes de reconocimiento de marca." },
          { speaker: "CEO", text: "We need everyone on the same page about priorities. Let's identify the low-hanging fruit for Q1.", translation: "Necesitamos que todos estén en sintonía sobre las prioridades. Identifiquemos las ganancias fáciles para Q1." },
          { speaker: "VP Sales", text: "Partnering with local distributors would move the needle quickly without major investment.", translation: "Asociarnos con distribuidores locales haría un impacto notable rápidamente sin inversión mayor." },
          { speaker: "CEO", text: "Excellent. Let's create a roadmap with clear milestones and deliverables for each quarter.", translation: "Excelente. Creemos una hoja de ruta con hitos claros y entregables para cada trimestre." }
        ],
        keyPhrases: [
          { phrase: "SWOT analysis", translation: "análisis SWOT/FODA", usage: "Herramienta de planificación estratégica" },
          { phrase: "strategic objective", translation: "objetivo estratégico", usage: "Meta de largo plazo" },
          { phrase: "KPIs", translation: "indicadores clave de desempeño", usage: "Métricas de éxito" },
          { phrase: "on the same page", translation: "en sintonía", usage: "Alineación de equipo" },
          { phrase: "low-hanging fruit", translation: "ganancias fáciles", usage: "Oportunidades inmediatas" },
          { phrase: "move the needle", translation: "hacer impacto notable", usage: "Progreso significativo" },
          { phrase: "roadmap", translation: "hoja de ruta", usage: "Plan con etapas" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "strategic", wrong: "stra-TE-gic", correct: "/strəˈtiː.dʒɪk/", tip: "struh-TEE-jik" },
          { word: "feasible", wrong: "FEE-si-ble", correct: "/ˈfiː.zə.bəl/", tip: "FEE-zuh-bl" },
          { word: "milestone", wrong: "MILE-stone", correct: "/ˈmaɪl.stoʊn/", tip: "MILE-stohn" }
        ],
        intonationPatterns: [
          { pattern: "Emphasis on acronyms", example: "K-P-I", meaning: "Pronuncia cada letra claramente" },
          { pattern: "Confident falling tone for assertions", example: "Our competitive advantage is ↘", meaning: "Muestra certeza estratégica" }
        ]
      },
      culturalNote: {
        title: "Jerga estratégica: amor/odio",
        titleEs: "Jerga estratégica: amor/odio",
        content: "La jerga corporativa ('synergies', 'move the needle', 'circle back') es a menudo parodiada pero sigue siendo común en ambientes ejecutivos. Usarla muestra que hablas el 'idioma' de los negocios, pero el uso excesivo puede parecer vacío o pretencioso. El equilibrio es clave: usa términos estratégicos cuando añadan precisión, pero no sustituyas sustancia por buzzwords.",
        contentEs: "La jerga corporativa es a menudo parodiada pero sigue siendo común en ambientes ejecutivos. Usarla muestra que hablas el idioma de los negocios, pero el uso excesivo puede parecer vacío. El equilibrio es clave."
      },
      consolidationQuiz: [
        {
          question: "¿Qué significa SWOT?",
          options: [
            "Sales, Workforce, Operations, Technology",
            "Strengths, Weaknesses, Opportunities, Threats",
            "Strategy, Wisdom, Objectives, Tactics",
            "Systems, Workflows, Outcomes, Timelines"
          ],
          correctAnswer: 1,
          explanation: "SWOT = Fortalezas, Debilidades, Oportunidades, Amenazas"
        },
        {
          question: "¿Qué son 'low-hanging fruit'?",
          options: [
            "Objetivos de bajo valor",
            "Ganancias fáciles que requieren poco esfuerzo",
            "Frutas de decoración en oficinas",
            "Resultados a largo plazo"
          ],
          correctAnswer: 1,
          explanation: "Son las victorias fáciles que se pueden lograr rápidamente"
        },
        {
          question: "¿Cuál es la diferencia entre estratégico y táctico?",
          options: [
            "Son sinónimos",
            "Estratégico = largo plazo/qué; Táctico = corto plazo/cómo",
            "Táctico es más importante",
            "Estratégico es solo para militares"
          ],
          correctAnswer: 1,
          explanation: "Estrategia es la dirección general; táctica son las acciones específicas"
        },
        {
          question: "¿Qué significa 'move the needle'?",
          options: [
            "Mover una aguja literalmente",
            "Hacer un cambio pequeño",
            "Hacer un impacto significativo y medible",
            "Tener una reunión"
          ],
          correctAnswer: 2,
          explanation: "La expresión significa hacer un impacto notable en los resultados"
        },
        {
          question: "¿Qué debe ser un buen KPI?",
          options: [
            "Vago y flexible",
            "Específico, medible y ligado a objetivos estratégicos",
            "Fácil de lograr siempre",
            "Diferente cada mes"
          ],
          correctAnswer: 1,
          explanation: "Los KPIs deben ser específicos, medibles y conectados con la estrategia"
        },
        {
          question: "¿Cuándo se usa 'pivot'?",
          options: [
            "Para cualquier pequeño cambio",
            "Para un cambio fundamental de dirección estratégica",
            "Solo en startups tecnológicas",
            "Para rotación de personal"
          ],
          correctAnswer: 1,
          explanation: "'Pivot' describe un cambio mayor en estrategia o modelo de negocio"
        }
      ],
      guidedProduction: [
        {
          prompt: "Presenta un análisis SWOT para tu empresa o un proyecto",
          sampleResponse: "Let me walk you through our SWOT analysis for the European expansion. Starting with Strengths: we have proprietary technology, strong brand recognition, and an experienced leadership team. Our Weaknesses include limited local market knowledge and no established distribution network. In terms of Opportunities, the market is fragmented with no dominant player, and there's growing demand for our category. The key Threats are regulatory complexity and two well-funded competitors already planning entry. Based on this analysis, our strategic objective should be to leverage our technology advantage to establish market presence before competitors, while partnering locally to address our distribution weakness."
        },
        {
          prompt: "Define 3 KPIs estratégicos para un nuevo proyecto y explica por qué",
          sampleResponse: "For our customer retention initiative, I recommend three KPIs. First, Customer Retention Rate—this directly measures our primary objective. Our target is to improve from 75% to 85% within 12 months. Second, Net Promoter Score—this is a leading indicator of retention and measures customer satisfaction. We're targeting an increase from 35 to 50. Third, Customer Lifetime Value—this connects retention to financial impact, ensuring our efforts move the needle on profitability. These KPIs are SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. I suggest we review them monthly and report to the board quarterly."
        },
        {
          prompt: "Presenta una hoja de ruta (roadmap) con hitos y entregables",
          sampleResponse: "Here's the implementation roadmap for Phase 1 of the digital transformation project. In Q1, our milestone is completing the technology assessment, with deliverables being the vendor shortlist and requirements document. Q2 focuses on pilot program launch—the milestone is having 100 users on the new platform, with deliverables including training materials and feedback reports. Q3 is about scaling—the milestone is 1,000 users, with full documentation and process optimization as deliverables. Q4 is full deployment—our milestone is company-wide adoption, with the deliverable being a complete change management report. Each quarter has specific KPIs aligned with these milestones."
        },
        {
          prompt: "Facilita una discusión sobre prioridades estratégicas donde necesitas que todos estén 'on the same page'",
          sampleResponse: "Team, we need to get on the same page about our Q3 priorities. We have limited resources, so we need to focus on what will really move the needle. Let me lay out the options: Option A is the product launch—high impact but high risk. Option B is market expansion—moderate impact, lower risk. Option C is operational efficiency—lower impact but builds foundation. From a strategic perspective, I recommend we pursue Option B, using our competitive advantage in technology while addressing the low-hanging fruit in adjacent markets. The feasibility is proven, and it aligns with our roadmap. Let's make sure we're all aligned before we define the KPIs and deliverables. Any concerns we should address?"
        }
      ],
      connectionToPrevious: "El matiz en acuerdo/desacuerdo te ayuda a navegar discusiones estratégicas donde hay perspectivas diferentes.",
      connectionToNext: "El lenguaje estratégico requiere conectores sofisticados para unir argumentos complejos - tema que explorarás a continuación."
    },
    {
      id: 5,
      title: "Advanced Connectors and Transitions",
      titleEs: "Conectores y Transiciones Avanzados",
      introduction: {
        title: "🔗 Conectores y Transiciones Avanzados",
        explanation: "Los conectores sofisticados mejoran la fluidez y coherencia de tu discurso. Son esenciales para argumentación avanzada.",
        keyPoints: [
          "Contraste: 'Notwithstanding', 'Be that as it may', 'Nonetheless'",
          "Adición: 'Furthermore', 'Moreover', 'What's more'",
          "Consecuencia: 'Hence', 'Thereby', 'Consequently'",
          "Condición: 'Provided that', 'On condition that', 'Assuming that'",
          "Concesión: 'Admittedly', 'Granted', 'Albeit'"
        ],
        examples: [
          { english: "Notwithstanding the challenges, the project was completed on time.", spanish: "A pesar de los desafíos, el proyecto se completó a tiempo.", explanation: "Notwithstanding = a pesar de" },
          { english: "The plan is ambitious, albeit achievable.", spanish: "El plan es ambicioso, aunque alcanzable.", explanation: "Albeit = aunque (formal)" },
          { english: "We can proceed, provided that the funding is approved.", spanish: "Podemos proceder, siempre que se apruebe el financiamiento.", explanation: "Provided that = siempre que" }
        ],
        tips: [
          "💡 'Notwithstanding' puede ir al principio, medio o final de oración",
          "💡 'Hence' y 'thereby' son muy formales",
          "💡 'Albeit' es siempre seguido por adjetivo o adverbio"
        ],
        whenToUse: [
          "En informes ejecutivos: \"Notwithstanding the challenges, the project was completed on time\"",
          "En propuestas formales: \"The plan is ambitious, albeit achievable\"",
          "En documentos contractuales: \"We can proceed, provided that the funding is approved\"",
          "En análisis académicos: \"We lacked data, hence the delay in our conclusions\""
        ],
        whenNotToUse: [
          "En emails informales → demasiado formal: usa \"but\" o \"however\" en vez de \"notwithstanding\"",
          "En conversación casual → suena pedante: evita \"hence\" y \"thereby\" en reuniones relajadas",
          "En mensajes de Slack → suena artificial: usa conectores más simples"
        ]
      },
      objectives: ["Usar conectores avanzados", "Mejorar coherencia del discurso", "Escribir con mayor sofisticación"],
      estimatedMinutes: 30,
      grammarTheoryIds: ["c1-advanced-linking-devices"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l9t5_e1", word: "notwithstanding", translation: "a pesar de", type: "expression", definition: "despite", definitionEs: "a pesar de", example: "Notwithstanding the risks, we proceeded.", exampleEs: "A pesar de los riesgos, procedimos.", related: [], difficulty: 2 },
          { id: "l9t5_e2", word: "albeit", translation: "aunque/si bien", type: "expression", definition: "although", definitionEs: "aunque", example: "It's expensive, albeit necessary.", exampleEs: "Es caro, aunque necesario.", related: [], difficulty: 2 },
          { id: "l9t5_e3", word: "hence", translation: "por lo tanto/de ahí", type: "expression", definition: "therefore", definitionEs: "por lo tanto", example: "We lacked data, hence the delay.", exampleEs: "Carecíamos de datos, de ahí el retraso.", related: [], difficulty: 2 },
          { id: "l9t5_e4", word: "thereby", translation: "por lo cual", type: "expression", definition: "by that means", definitionEs: "por ese medio", example: "We cut costs, thereby increasing profits.", exampleEs: "Redujimos costos, por lo cual aumentaron las ganancias.", related: [], difficulty: 2 },
          { id: "l9t5_e5", word: "provided that", translation: "siempre que", type: "expression", definition: "on condition that", definitionEs: "con la condición de que", example: "We agree, provided that terms are met.", exampleEs: "Estamos de acuerdo, siempre que se cumplan los términos.", related: [], difficulty: 1 },
          { id: "l9t5_e6", word: "admittedly", translation: "hay que admitir", type: "expression", definition: "it must be admitted", definitionEs: "hay que admitir", example: "Admittedly, we made mistakes.", exampleEs: "Hay que admitir, cometimos errores.", related: [], difficulty: 2 },
          { id: "l9t5_e7", word: "furthermore", translation: "además", type: "expression", definition: "in addition", definitionEs: "además", example: "Furthermore, the costs are lower.", exampleEs: "Además, los costos son menores.", related: [], difficulty: 1 },
          { id: "l9t5_e8", word: "nonetheless", translation: "no obstante", type: "expression", definition: "nevertheless", definitionEs: "sin embargo", example: "It's risky. Nonetheless, we'll proceed.", exampleEs: "Es riesgoso. No obstante, procederemos.", related: [], difficulty: 2 },
        ],
        adverbs: [
          { id: "l9t5_adv1", word: "consequently", translation: "consecuentemente", type: "adverb", definition: "as a result", definitionEs: "como resultado", example: "Consequently, we changed our approach.", exampleEs: "Consecuentemente, cambiamos nuestro enfoque.", related: [], difficulty: 1 },
          { id: "l9t5_adv2", word: "subsequently", translation: "posteriormente", type: "adverb", definition: "after that", definitionEs: "después de eso", example: "We met in June; subsequently, we partnered.", exampleEs: "Nos reunimos en junio; posteriormente, nos asociamos.", related: [], difficulty: 2 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t5_cm1", wrong: "Albeit can start a sentence", correct: "'Albeit' is used mid-sentence: 'The plan is good, albeit expensive.'", explanation: "'Albeit' works like 'although' but only between clauses, not at the start", explanationEs: "'Albeit' funciona como 'although' pero solo entre cláusulas, no al inicio", category: "grammar" },
        { id: "l9t5_cm2", wrong: "Using 'hence' and 'thus' interchangeably", correct: "'Hence' = therefore (reason); 'Thus' = in this way (manner)", explanation: "'Hence the delay' (therefore); 'Thus we proceeded' (in this way)", explanationEs: "'Hence the delay' (por eso); 'Thus we proceeded' (de esta manera)", category: "vocabulary" },
        { id: "l9t5_cm3", wrong: "'Provided that' without condition clause", correct: "'Provided that' must be followed by a condition: 'provided that X happens'", explanation: "'Provided that' always introduces a specific condition", explanationEs: "'Provided that' siempre introduce una condición específica", category: "grammar" },
        { id: "l9t5_cm4", wrong: "Overusing 'furthermore' (becomes monotonous)", correct: "Vary with: 'Moreover', 'In addition', 'What's more', 'Additionally'", explanation: "Variety of connectors makes the text more dynamic", explanationEs: "La variedad de conectores hace el texto más dinámico", category: "usage" },
        { id: "l9t5_cm5", wrong: "'Notwithstanding' with 'but' (redundant)", correct: "'Notwithstanding' alone: 'Notwithstanding the risks, we proceeded.'", explanation: "'Notwithstanding' already implies contrast; it doesn't need 'but'", explanationEs: "'Notwithstanding' ya implica contraste; no necesita 'but'", category: "grammar" }
      ],
      exercises: [
        {
          type: "gap-fill",
          instruction: "Completa con el conector avanzado correcto",
          items: [
            { sentence: "The plan is ambitious, _____ achievable.", answer: "albeit", hint: "aunque (formal)" },
            { sentence: "We lacked the data; _____ the delay.", answer: "hence", hint: "por eso" },
            { sentence: "We cut costs, _____ increasing profits.", answer: "thereby", hint: "por lo cual" },
            { sentence: "We can proceed, _____ that funding is approved.", answer: "provided", hint: "siempre que" },
            { sentence: "_____, we made some errors initially.", answer: "Admittedly", hint: "hay que admitir" },
            { sentence: "_____ the challenges, the project succeeded.", answer: "Notwithstanding", hint: "a pesar de" }
          ]
        },
        {
          type: "transformation",
          instruction: "Reescribe usando el conector indicado",
          items: [
            {
              original: "Despite the problems, we finished on time.",
              connector: "notwithstanding",
              transformed: "Notwithstanding the problems, we finished on time."
            },
            {
              original: "It's expensive, but it's necessary.",
              connector: "albeit",
              transformed: "It's expensive, albeit necessary."
            },
            {
              original: "We will agree if the terms are acceptable.",
              connector: "provided that",
              transformed: "We will agree, provided that the terms are acceptable."
            },
            {
              original: "I must admit, we underestimated the timeline.",
              connector: "admittedly",
              transformed: "Admittedly, we underestimated the timeline."
            },
            {
              original: "We automated the process. As a result, we reduced errors.",
              connector: "thereby",
              transformed: "We automated the process, thereby reducing errors."
            }
          ]
        },
        {
          type: "matching",
          instruction: "Empareja conectores con su función",
          items: [
            { connector: "Notwithstanding", function: "Concession (despite)" },
            { connector: "Hence", function: "Result/reason (therefore)" },
            { connector: "Albeit", function: "Contrast (although)" },
            { connector: "Provided that", function: "Condition (if)" },
            { connector: "Furthermore", function: "Addition (also)" },
            { connector: "Subsequently", function: "Time sequence (after that)" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en el uso de conectores",
          items: [
            { incorrect: "Albeit the project was late, it was successful.", correct: "The project was successful, albeit late." },
            { incorrect: "Notwithstanding we failed, but we learned a lot.", correct: "Notwithstanding the failure, we learned a lot." },
            { incorrect: "We'll proceed provided that.", correct: "We'll proceed, provided that funding is approved." },
            { incorrect: "Hence, it was done in this way.", correct: "Thus, it was done in this way." },
            { incorrect: "Admittedly that we made mistakes.", correct: "Admittedly, we made mistakes." }
          ]
        }
      ],
      modelDialogue: {
        title: "Informe ejecutivo usando conectores avanzados",
        context: "Un gerente presenta resultados trimestrales con análisis sofisticado",
        dialogue: [
          { speaker: "Manager", text: "I'll now present our Q3 performance. Admittedly, we faced significant challenges this quarter.", translation: "Ahora presentaré nuestro desempeño de Q3. Hay que admitir, enfrentamos desafíos significativos este trimestre." },
          { speaker: "Manager", text: "Notwithstanding these challenges, we exceeded our revenue target by 5%.", translation: "A pesar de estos desafíos, superamos nuestra meta de ingresos por 5%." },
          { speaker: "Manager", text: "The supply chain disruptions were severe, albeit temporary. We've since resolved them.", translation: "Las interrupciones de la cadena de suministro fueron severas, aunque temporales. Ya las hemos resuelto." },
          { speaker: "Manager", text: "We invested in automation early in the quarter, thereby reducing our processing time by 40%.", translation: "Invertimos en automatización al inicio del trimestre, por lo cual redujimos nuestro tiempo de procesamiento en 40%." },
          { speaker: "Manager", text: "Furthermore, customer satisfaction scores increased to 92%.", translation: "Además, los puntajes de satisfacción del cliente aumentaron a 92%." },
          { speaker: "Manager", text: "We made strategic hires in July; subsequently, our innovation pipeline has doubled.", translation: "Hicimos contrataciones estratégicas en julio; posteriormente, nuestro pipeline de innovación se ha duplicado." },
          { speaker: "Manager", text: "Hence, I'm confident about Q4 projections, provided that market conditions remain stable.", translation: "Por lo tanto, estoy confiado sobre las proyecciones de Q4, siempre que las condiciones del mercado permanezcan estables." }
        ],
        keyPhrases: [
          { phrase: "Admittedly", translation: "Hay que admitir", usage: "Reconocer algo honestamente" },
          { phrase: "Notwithstanding", translation: "A pesar de", usage: "Concesión formal" },
          { phrase: "albeit", translation: "aunque", usage: "Contraste dentro de oración" },
          { phrase: "thereby", translation: "por lo cual", usage: "Resultado de acción" },
          { phrase: "Furthermore", translation: "Además", usage: "Agregar información" },
          { phrase: "subsequently", translation: "posteriormente", usage: "Secuencia temporal" },
          { phrase: "Hence", translation: "Por lo tanto", usage: "Conclusión lógica" },
          { phrase: "provided that", translation: "siempre que", usage: "Condición" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "albeit", wrong: "al-BITE", correct: "/ɔːlˈbiː.ɪt/", tip: "all-BEE-it, tres sílabas" },
          { word: "notwithstanding", wrong: "not-with-STAN-ding", correct: "/ˌnɒt.wɪθˈstæn.dɪŋ/", tip: "not-with-STAN-ding, énfasis en STAN" },
          { word: "hence", wrong: "HENSE", correct: "/hens/", tip: "Rima con 'fence'" }
        ],
        intonationPatterns: [
          { pattern: "Pause after connecting adverbs", example: "Hence, [pause] we decided...", meaning: "La pausa da peso al conector" },
          { pattern: "Slight stress on 'albeit'", example: "...good, ALBEIT expensive", meaning: "Enfatiza el contraste" }
        ]
      },
      culturalNote: {
        title: "Formalidad de conectores",
        titleEs: "Formalidad de conectores",
        content: "Conectores como 'notwithstanding', 'albeit' y 'hence' son propios del inglés formal, académico y legal. En conversación casual, suenan excesivamente formales o incluso pretenciosos. 'Furthermore' y 'moreover' son más versátiles. En emails profesionales, usa estos conectores con moderación para añadir sofisticación sin sonar artificial. En documentos legales o académicos, son perfectamente apropiados.",
        contentEs: "Conectores como 'notwithstanding' y 'albeit' son propios del inglés formal y académico. En conversación casual, suenan excesivamente formales. En documentos legales o académicos, son perfectamente apropiados."
      },
      consolidationQuiz: [
        {
          question: "¿Dónde se coloca 'albeit' en una oración?",
          options: [
            "Al inicio de la oración",
            "Entre dos cláusulas o después de adjetivo/sustantivo",
            "Solo al final",
            "En cualquier posición"
          ],
          correctAnswer: 1,
          explanation: "'Albeit' va entre ideas: 'good, albeit expensive' - no al inicio de oración"
        },
        {
          question: "¿Cuál es la diferencia entre 'hence' y 'thus'?",
          options: [
            "Son idénticos",
            "'Hence' = por eso (razón); 'Thus' = de esta manera (modo)",
            "'Hence' es más informal",
            "'Thus' es para el pasado"
          ],
          correctAnswer: 1,
          explanation: "'Hence' indica causalidad; 'thus' indica manera de hacer algo"
        },
        {
          question: "'Notwithstanding' significa:",
          options: [
            "Además de",
            "A pesar de",
            "Por lo tanto",
            "Sin embargo"
          ],
          correctAnswer: 1,
          explanation: "'Notwithstanding' = despite, a pesar de"
        },
        {
          question: "¿Cuál es correcta?",
          options: [
            "We'll agree provided that.",
            "We'll agree, provided that the terms are fair.",
            "Provided that, we'll agree.",
            "We'll provided that agree."
          ],
          correctAnswer: 1,
          explanation: "'Provided that' necesita una condición específica después"
        },
        {
          question: "'Thereby' indica:",
          options: [
            "Una contradicción",
            "Una adición",
            "Un resultado o consecuencia de la acción anterior",
            "Una pregunta"
          ],
          correctAnswer: 2,
          explanation: "'Thereby' muestra cómo una acción lleva a un resultado"
        },
        {
          question: "¿Cuándo usar 'admittedly'?",
          options: [
            "Para negar algo",
            "Para reconocer algo honestamente, especialmente una debilidad",
            "Para expresar duda",
            "Para cambiar de tema"
          ],
          correctAnswer: 1,
          explanation: "'Admittedly' introduce una concesión honesta de algo negativo"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un párrafo de informe usando al menos 5 conectores avanzados",
          sampleResponse: "The Q4 results present a nuanced picture. Admittedly, we fell short of our ambitious revenue target by 3%. Notwithstanding this shortfall, our market position has strengthened considerably. We invested heavily in R&D, thereby establishing a robust innovation pipeline for 2024. The initial costs were significant, albeit necessary for long-term competitiveness. Furthermore, our customer retention rate increased to 94%, subsequently driving up lifetime value metrics. Hence, I recommend we maintain our investment trajectory, provided that cash reserves remain above the minimum threshold."
        },
        {
          prompt: "Reescribe este texto simple usando conectores sofisticados",
          sampleResponse: "Original: 'Despite problems, we succeeded. We made mistakes at first. But we learned. And then we improved. If we keep trying, we will win.'\n\nSophisticated version: 'Notwithstanding significant challenges, we achieved our objectives. Admittedly, we made errors initially. Be that as it may, these setbacks proved instructive, thereby informing our revised approach. Subsequently, our performance improved markedly. Hence, I am confident in our trajectory, provided that we maintain our current momentum and continue to learn from experience.'"
        },
        {
          prompt: "Escribe una conclusión de documento legal/formal usando conectores apropiados",
          sampleResponse: "In conclusion, the evidence presented demonstrates the validity of our position. Notwithstanding the opposing party's assertions, the facts clearly support our interpretation. Furthermore, precedent from three recent cases reinforces this view. Hence, we submit that the court should rule in favor of the plaintiff. It should be noted, albeit briefly, that alternative remedies were explored but proved inadequate. Subsequently, litigation became the only viable option. We remain confident in the merits of our case, provided that the court applies the established legal standards."
        },
        {
          prompt: "Presenta argumentos a favor y en contra usando conectores de concesión",
          sampleResponse: "The proposal has considerable merit. It offers significant cost savings and operational efficiencies. Furthermore, it aligns with our strategic objectives. That said, we must acknowledge the risks. Admittedly, the implementation timeline is aggressive. Notwithstanding our team's capabilities, resource constraints could pose challenges. The upfront investment is substantial, albeit justified by the projected ROI. Hence, I recommend approval, provided that we establish clear milestones and contingency plans. Subsequently, we should review progress monthly to ensure we remain on track."
        }
      ],
      connectionToPrevious: "Los conectores avanzados elevan la sofisticación del lenguaje estratégico que aprendiste anteriormente.",
      connectionToNext: "Estos conectores son especialmente útiles cuando discutes riesgo e incertidumbre - tema que abordarás a continuación."
    },
    {
      id: 6,
      title: "Discussing Risk and Uncertainty",
      titleEs: "Discutiendo Riesgo e Incertidumbre",
      introduction: {
        title: "⚠️ Discutiendo Riesgo e Incertidumbre",
        explanation: "La gestión del riesgo es fundamental en los negocios. Aprenderás a articular riesgos, probabilidades y estrategias de mitigación.",
        keyPoints: [
          "Identificar riesgos: 'potential risks', 'exposure to', 'vulnerability'",
          "Evaluar probabilidad: 'likelihood of occurrence', 'risk assessment'",
          "Impacto: 'worst-case scenario', 'best-case scenario', 'most likely outcome'",
          "Mitigación: 'risk mitigation', 'contingency plan', 'safeguards'",
          "Aceptación: 'calculated risk', 'risk appetite', 'risk tolerance'"
        ],
        examples: [
          { english: "We need to assess our exposure to currency fluctuations.", spanish: "Necesitamos evaluar nuestra exposición a fluctuaciones de moneda.", explanation: "Identificando riesgo" },
          { english: "In a worst-case scenario, we could lose up to 20% of our investment.", spanish: "En el peor escenario, podríamos perder hasta 20% de nuestra inversión.", explanation: "Evaluando impacto" },
          { english: "The contingency plan involves diversifying our supplier base.", spanish: "El plan de contingencia involucra diversificar nuestra base de proveedores.", explanation: "Estrategia de mitigación" }
        ],
        tips: [
          "💡 'Risk appetite' define cuánto riesgo una organización está dispuesta a aceptar",
          "💡 Siempre presenta riesgos con posibles mitigaciones",
          "💡 Usa escenarios: mejor caso, peor caso, más probable"
        ],
        whenToUse: [
          "En presentaciones a inversores: \"We need to assess our exposure to currency fluctuations\"",
          "En informes de compliance: \"In a worst-case scenario, we could lose up to 20% of our investment\"",
          "En reuniones de governance: \"The contingency plan involves diversifying our supplier base\"",
          "En due diligence: \"Our risk appetite defines our tolerance for strategic decisions\""
        ],
        whenNotToUse: [
          "En conversaciones informales sobre planes → demasiado formal: \"worst-case\" puede ser excesivo",
          "En situaciones sin riesgo real → suena alarmista: no uses \"exposure\" para problemas menores",
          "En emails de actualización rápida → evita jerga de riesgo sin contexto"
        ]
      },
      objectives: ["Identificar y articular riesgos", "Evaluar probabilidad e impacto", "Proponer estrategias de mitigación"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-hedging", "c1-mixed-conditionals-advanced"],
      vocabulary: {
        nouns: [
          { id: "l9t6_n1", word: "risk", translation: "riesgo", type: "noun", definition: "possibility of loss", definitionEs: "posibilidad de pérdida", example: "What's the risk?", exampleEs: "¿Cuál es el riesgo?", related: ["risky"], difficulty: 1 },
          { id: "l9t6_n2", word: "exposure", translation: "exposición", type: "noun", definition: "vulnerability to something", definitionEs: "vulnerabilidad a algo", example: "Our exposure to this risk is high.", exampleEs: "Nuestra exposición a este riesgo es alta.", related: [], difficulty: 2 },
          { id: "l9t6_n3", word: "contingency plan", translation: "plan de contingencia", type: "noun", definition: "backup plan", definitionEs: "plan de respaldo", example: "Do we have a contingency plan?", exampleEs: "¿Tenemos un plan de contingencia?", related: [], difficulty: 2 },
          { id: "l9t6_n4", word: "mitigation", translation: "mitigación", type: "noun", definition: "reducing severity", definitionEs: "reduciendo severidad", example: "What's our mitigation strategy?", exampleEs: "¿Cuál es nuestra estrategia de mitigación?", related: ["mitigate"], difficulty: 2 },
          { id: "l9t6_n5", word: "safeguard", translation: "salvaguarda", type: "noun", definition: "protection measure", definitionEs: "medida de protección", example: "We need safeguards in place.", exampleEs: "Necesitamos salvaguardas implementadas.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l9t6_v1", word: "mitigate", translation: "mitigar", type: "verb", definition: "to reduce severity", definitionEs: "reducir severidad", example: "How can we mitigate this risk?", exampleEs: "¿Cómo podemos mitigar este riesgo?", related: [], difficulty: 2 },
          { id: "l9t6_v2", word: "assess", translation: "evaluar", type: "verb", definition: "to evaluate", definitionEs: "evaluar", example: "We need to assess the risks.", exampleEs: "Necesitamos evaluar los riesgos.", related: ["assessment"], difficulty: 1 },
          { id: "l9t6_v3", word: "hedge", translation: "cubrir/proteger", type: "verb", definition: "to protect against risk", definitionEs: "proteger contra riesgo", example: "We should hedge our position.", exampleEs: "Deberíamos cubrir nuestra posición.", related: [], difficulty: 2 },
          { id: "l9t6_v4", word: "offset", translation: "compensar", type: "verb", definition: "to counterbalance", definitionEs: "contrarrestar", example: "Gains will offset the losses.", exampleEs: "Las ganancias compensarán las pérdidas.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l9t6_a1", word: "risky", translation: "arriesgado", type: "adjective", definition: "involving risk", definitionEs: "que involucra riesgo", example: "This is a risky move.", exampleEs: "Este es un movimiento arriesgado.", related: [], difficulty: 1 },
          { id: "l9t6_a2", word: "volatile", translation: "volátil", type: "adjective", definition: "liable to change rapidly", definitionEs: "propenso a cambiar rápidamente", example: "The market is volatile.", exampleEs: "El mercado es volátil.", related: ["volatility"], difficulty: 2 },
          { id: "l9t6_a3", word: "uncertain", translation: "incierto", type: "adjective", definition: "not known or fixed", definitionEs: "no conocido o fijo", example: "The outcome is uncertain.", exampleEs: "El resultado es incierto.", related: ["uncertainty"], difficulty: 1 },
        ],
        expressions: [
          { id: "l9t6_e1", word: "worst-case scenario", translation: "peor escenario", type: "expression", definition: "the worst that could happen", definitionEs: "lo peor que podría pasar", example: "In the worst-case scenario...", exampleEs: "En el peor escenario...", related: [], difficulty: 1 },
          { id: "l9t6_e2", word: "risk appetite", translation: "apetito de riesgo", type: "expression", definition: "willingness to take risk", definitionEs: "disposición a tomar riesgo", example: "What's our risk appetite?", exampleEs: "¿Cuál es nuestro apetito de riesgo?", related: [], difficulty: 2 },
          { id: "l9t6_e3", word: "calculated risk", translation: "riesgo calculado", type: "expression", definition: "considered risk", definitionEs: "riesgo considerado", example: "It's a calculated risk.", exampleEs: "Es un riesgo calculado.", related: [], difficulty: 1 },
          { id: "l9t6_e4", word: "err on the side of caution", translation: "pecar de precavido", type: "expression", definition: "be extra careful", definitionEs: "ser extra cuidadoso", example: "Let's err on the side of caution.", exampleEs: "Pequemos de precavidos.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t6_cm1", wrong: "Confusing 'risk' with 'danger'", correct: "'Risk' = probability of negative outcome; 'Danger' = something that can harm", explanation: "'Risk' is probabilistic; 'danger' is a concrete threat", explanationEs: "'Risk' es probabilístico; 'danger' es una amenaza concreta", category: "vocabulary" },
        { id: "l9t6_cm2", wrong: "'High risk' for everything (overusing)", correct: "Use spectrum: 'low/moderate/high/critical risk', 'minimal/significant exposure'", explanation: "Calibrate language according to the actual severity of the risk", explanationEs: "Calibrar el lenguaje según la severidad real del riesgo", category: "usage" },
        { id: "l9t6_cm3", wrong: "Presenting risk without mitigation", correct: "Always pair risk with mitigation: 'The risk is X; however, we can mitigate by Y.'", explanation: "Identifying risks without solutions creates anxiety without action", explanationEs: "Identificar riesgos sin soluciones genera ansiedad sin acción", category: "usage" },
        { id: "l9t6_cm4", wrong: "'We could maybe possibly have a risk if...' (too hedged)", correct: "'There is a moderate risk of X occurring, with a probability of Y%.'", explanation: "Quantify and be direct about identified risks", explanationEs: "Cuantifica y sé directo sobre los riesgos identificados", category: "usage" },
        { id: "l9t6_cm5", wrong: "Confusing 'risk appetite' with 'risk tolerance'", correct: "'Appetite' = strategic willingness; 'Tolerance' = acceptable variance from target", explanation: "'Appetite' is how much risk you WANT to take; 'tolerance' is how much you CAN accept", explanationEs: "'Appetite' es cuánto riesgo QUIERES tomar; 'tolerance' es cuánto PUEDES aceptar", category: "vocabulary" }
      ],
      exercises: [
        {
          type: "matching",
          instruction: "Empareja el término de riesgo con su definición",
          items: [
            { term: "Exposure", definition: "Degree of vulnerability to a specific risk" },
            { term: "Contingency plan", definition: "Backup plan if things go wrong" },
            { term: "Mitigation", definition: "Actions to reduce risk severity" },
            { term: "Risk appetite", definition: "Organization's willingness to accept risk" },
            { term: "Safeguard", definition: "Protective measure against risk" },
            { term: "Hedge", definition: "Offsetting position to reduce risk" }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa con vocabulario de riesgo apropiado",
          items: [
            { sentence: "In the _____-case scenario, we could lose 30% of revenue.", answer: "worst", hint: "el peor" },
            { sentence: "Our _____ to currency fluctuations is significant.", answer: "exposure", hint: "vulnerabilidad" },
            { sentence: "Let's err on the side of _____.", answer: "caution", hint: "precaución" },
            { sentence: "We need a _____ plan in case the deal falls through.", answer: "contingency", hint: "plan B" },
            { sentence: "We can _____ this risk by diversifying suppliers.", answer: "mitigate", hint: "reducir" },
            { sentence: "Given our limited resources, our risk _____ should be conservative.", answer: "appetite", hint: "disposición" }
          ]
        },
        {
          type: "situational",
          instruction: "¿Cómo presentarías este riesgo al board?",
          items: [
            {
              situation: "A key supplier might go bankrupt",
              weak: "There might be a problem with our supplier.",
              strong: "We've identified a moderate risk to our supply chain: our primary supplier shows signs of financial distress. Our exposure is 40% of component inventory. Mitigation strategy: we've pre-qualified two alternative suppliers and can shift orders within 4 weeks.",
              explanation: "Cuantifica exposición, nombra el riesgo, presenta mitigación"
            },
            {
              situation: "New regulation might impact your business model",
              weak: "New regulations could be bad for us.",
              strong: "The proposed EU regulation presents a significant risk to our data processing model. Worst-case scenario: 25% revenue impact in affected regions. We're implementing compliance measures that will reduce exposure to 10%. Contingency: geographic diversification of processing centers.",
              explanation: "Escenarios específicos con números y plan de acción"
            },
            {
              situation: "Launching a new product with uncertain demand",
              weak: "We don't know if people will buy it.",
              strong: "Market research indicates moderate demand uncertainty. Best-case: 150K units; most likely: 80K; worst-case: 30K. We're mitigating by starting with a limited launch in two test markets. If adoption exceeds 60K in Q1, we'll scale nationally.",
              explanation: "Tres escenarios con triggers para decisiones"
            }
          ]
        },
        {
          type: "transformation",
          instruction: "Mejora estas descripciones de riesgo vagas",
          items: [
            {
              vague: "There's some risk.",
              professional: "We've identified a moderate risk with a 30% probability of occurrence.",
              improvement: "Cuantificar probabilidad"
            },
            {
              vague: "It could be bad.",
              professional: "The potential impact is significant: a 15% reduction in Q4 margins.",
              improvement: "Especificar impacto"
            },
            {
              vague: "We should be careful.",
              professional: "Given our conservative risk appetite, we recommend implementing additional safeguards before proceeding.",
              improvement: "Conectar con estrategia de riesgo"
            },
            {
              vague: "If things go wrong, we'll figure it out.",
              professional: "Our contingency plan involves activating backup suppliers within 48 hours of disruption.",
              improvement: "Plan concreto con tiempos"
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentación de evaluación de riesgos",
        context: "El CRO presenta al board la evaluación trimestral de riesgos",
        dialogue: [
          { speaker: "CRO", text: "I'll now present our Q3 risk assessment. We've identified three material risks requiring board attention.", translation: "Ahora presentaré nuestra evaluación de riesgos de Q3. Hemos identificado tres riesgos materiales que requieren atención del board." },
          { speaker: "CRO", text: "First, our exposure to the semiconductor shortage has increased. In a worst-case scenario, production could be delayed by 8 weeks.", translation: "Primero, nuestra exposición a la escasez de semiconductores ha aumentado. En el peor escenario, la producción podría retrasarse 8 semanas." },
          { speaker: "CEO", text: "What's our mitigation strategy?", translation: "¿Cuál es nuestra estrategia de mitigación?" },
          { speaker: "CRO", text: "We've pre-ordered 6 months of inventory and qualified two alternative suppliers. This reduces our exposure significantly.", translation: "Hemos pre-ordenado 6 meses de inventario y calificado dos proveedores alternativos. Esto reduce nuestra exposición significativamente." },
          { speaker: "Board Member", text: "What about the regulatory risk you mentioned last quarter?", translation: "¿Qué hay del riesgo regulatorio que mencionaste el trimestre pasado?" },
          { speaker: "CRO", text: "We're monitoring it closely. Current assessment: moderate risk, 35% probability of impact. Our contingency plan is to pivot to the compliant product version, which is 80% ready.", translation: "Lo estamos monitoreando de cerca. Evaluación actual: riesgo moderado, 35% probabilidad de impacto. Nuestro plan de contingencia es pivotar a la versión de producto compatible, que está 80% lista." },
          { speaker: "CFO", text: "Given these uncertainties, should we err on the side of caution with Q4 forecasts?", translation: "Dadas estas incertidumbres, ¿deberíamos ser precavidos con los pronósticos de Q4?" },
          { speaker: "CRO", text: "I'd recommend maintaining our base case forecast but having downside scenarios ready. This is a calculated risk aligned with our stated risk appetite.", translation: "Recomendaría mantener nuestro pronóstico de caso base pero tener escenarios de baja listos. Es un riesgo calculado alineado con nuestro apetito de riesgo declarado." }
        ],
        keyPhrases: [
          { phrase: "material risks", translation: "riesgos materiales", usage: "Riesgos significativos que requieren atención" },
          { phrase: "exposure to", translation: "exposición a", usage: "Vulnerabilidad ante un factor" },
          { phrase: "worst-case scenario", translation: "peor escenario", usage: "El resultado más negativo posible" },
          { phrase: "mitigation strategy", translation: "estrategia de mitigación", usage: "Plan para reducir el riesgo" },
          { phrase: "contingency plan", translation: "plan de contingencia", usage: "Plan B si algo falla" },
          { phrase: "calculated risk", translation: "riesgo calculado", usage: "Riesgo asumido conscientemente" },
          { phrase: "err on the side of caution", translation: "pecar de precavido", usage: "Ser más conservador de lo necesario" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "contingency", wrong: "con-tin-GEN-cy", correct: "/kənˈtɪn.dʒən.si/", tip: "kun-TIN-jun-see" },
          { word: "mitigate", wrong: "mi-ti-GATE", correct: "/ˈmɪt.ɪ.ɡeɪt/", tip: "MIT-i-gate, énfasis en MIT" },
          { word: "volatile", wrong: "VO-la-tile", correct: "/ˈvɒl.ə.taɪl/", tip: "VOL-uh-tile" }
        ],
        intonationPatterns: [
          { pattern: "Falling tone for certainties", example: "The risk IS significant↘", meaning: "Tono descendente para afirmaciones seguras" },
          { pattern: "Rising-falling for scenarios", example: "In the worst case↗, we could lose↘...", meaning: "Sube en la condición, baja en el resultado" }
        ]
      },
      culturalNote: {
        title: "Culturas y tolerancia al riesgo",
        titleEs: "Culturas y tolerancia al riesgo",
        content: "La tolerancia al riesgo varía culturalmente. Las culturas estadounidenses tienden a valorar la toma de riesgos ('fortune favors the bold'). Las culturas alemanas y japonesas prefieren análisis exhaustivo antes de actuar. En América Latina, la planificación de contingencias puede verse como pesimismo. Adapta tu comunicación de riesgo a tu audiencia: con un board estadounidense, enfatiza oportunidades; con uno alemán, detalla los análisis; con uno japonés, muestra consenso del equipo en la evaluación.",
        contentEs: "La tolerancia al riesgo varía culturalmente. Adapta tu comunicación de riesgo a tu audiencia: con un board estadounidense, enfatiza oportunidades; con uno alemán, detalla los análisis."
      },
      consolidationQuiz: [
        {
          question: "¿Qué es 'risk appetite'?",
          options: [
            "Hambre causada por el estrés",
            "Disposición estratégica de una organización a aceptar riesgo",
            "El peor escenario posible",
            "Un tipo de análisis financiero"
          ],
          correctAnswer: 1,
          explanation: "'Risk appetite' es cuánto riesgo una organización está dispuesta a aceptar estratégicamente"
        },
        {
          question: "¿Cuál es la diferencia entre 'exposure' y 'risk'?",
          options: [
            "Son sinónimos",
            "'Exposure' es la vulnerabilidad; 'risk' es la probabilidad de pérdida",
            "'Risk' es más formal",
            "'Exposure' solo se usa en finanzas"
          ],
          correctAnswer: 1,
          explanation: "'Exposure' mide cuánto estás expuesto; 'risk' es la probabilidad de que algo malo pase"
        },
        {
          question: "'Err on the side of caution' significa:",
          options: [
            "Cometer un error por precaución",
            "Ser más conservador de lo estrictamente necesario",
            "Evitar todos los riesgos",
            "Consultar con abogados"
          ],
          correctAnswer: 1,
          explanation: "Significa elegir ser más cuidadoso, aunque no sea absolutamente necesario"
        },
        {
          question: "Un 'contingency plan' es:",
          options: [
            "El plan principal",
            "Un plan de backup si el plan principal falla",
            "Un plan temporal",
            "Un plan de marketing"
          ],
          correctAnswer: 1,
          explanation: "Es el Plan B, preparado para activarse si las cosas salen mal"
        },
        {
          question: "¿Cuál es mejor forma de presentar un riesgo?",
          options: [
            "'There might be some risk.'",
            "'Moderate risk (35% probability) of 15% revenue impact. Mitigation: diversify suppliers.'",
            "'It's very risky and dangerous.'",
            "'We should worry about this.'"
          ],
          correctAnswer: 1,
          explanation: "Cuantificar probabilidad, impacto, y proponer mitigación es profesional"
        },
        {
          question: "'Hedge' en contexto de riesgo significa:",
          options: [
            "Plantar arbustos",
            "Evitar responder directamente",
            "Tomar una posición que reduce riesgo (ej: comprar seguro)",
            "Esconderse de los riesgos"
          ],
          correctAnswer: 2,
          explanation: "'Hedge' es protegerse contra pérdidas tomando posiciones compensatorias"
        }
      ],
      guidedProduction: [
        {
          prompt: "Prepara una evaluación de riesgo para un proyecto de software",
          sampleResponse: "Risk Assessment: New CRM Implementation\n\nRisk 1: Data Migration Failure\n- Probability: Moderate (40%)\n- Impact: High (2-week delay, $50K additional cost)\n- Exposure: Critical for go-live date\n- Mitigation: Parallel run with legacy system for 30 days\n- Contingency: Rollback plan tested and ready\n\nRisk 2: User Adoption\n- Probability: Moderate (35%)\n- Impact: Medium (reduced ROI in Year 1)\n- Mitigation: Change management program, superuser training\n\nRecommendation: Proceed with calculated risk, given mitigations in place. Risk appetite is moderate for this initiative."
        },
        {
          prompt: "Comunica un riesgo financiero al board de directores",
          sampleResponse: "Board Risk Update: Currency Exposure\n\nOur exposure to EUR/USD fluctuations has increased following the European expansion. Current position: €12M in receivables.\n\nWorst-case scenario: 10% currency swing could impact Q4 results by $1.2M.\nMost likely scenario: 3-5% movement, $360-600K impact.\n\nMitigation strategy:\n1. Forward contracts to hedge 60% of exposure\n2. Accelerated collection in high-volatility periods\n3. Local currency pricing in new contracts\n\nRecommendation: Given our conservative risk appetite, I recommend increasing our hedge position to 80%. This is a calculated trade-off: we reduce downside but also limit potential gains from favorable movements."
        },
        {
          prompt: "Responde a un inversor preocupado por los riesgos del mercado",
          sampleResponse: "I understand your concerns about market volatility, and I appreciate the opportunity to address them.\n\nOur exposure to market fluctuations is actively managed through three mechanisms:\n\nFirst, our diversified portfolio means no single market represents more than 15% of revenue. Second, we maintain significant cash reserves—enough for 18 months of operations in a worst-case scenario. Third, our contingency plan includes cost reduction measures that could be activated within 60 days if needed.\n\nWhile uncertainty remains, we've stress-tested our model against 2008-level disruptions. Even in that worst-case scenario, we maintain profitability, albeit at reduced margins.\n\nI'd characterize our risk position as moderate, well within our stated risk appetite. We err on the side of caution with our cash position while maintaining the agility to capture growth opportunities."
        },
        {
          prompt: "Presenta tres escenarios (mejor, peor, más probable) para una decisión de inversión",
          sampleResponse: "Investment Scenario Analysis: New Factory in Vietnam\n\nBest-case scenario (20% probability):\n- Full capacity within 12 months\n- 25% cost reduction vs. current operations\n- ROI: 45% over 5 years\n- Conditions: Trade agreements remain favorable, local talent acquisition exceeds expectations\n\nMost likely scenario (60% probability):\n- 70% capacity at 18 months\n- 18% cost reduction\n- ROI: 28% over 5 years\n- Reflects realistic ramp-up challenges and learning curve\n\nWorst-case scenario (20% probability):\n- 40% capacity at 24 months\n- 8% cost reduction (offset by startup costs)\n- ROI: 12% over 5 years\n- Risks: Supply chain disruptions, regulatory changes, talent shortage\n\nRecommendation: The expected value, weighted by probability, yields a 26.4% projected ROI—above our 15% threshold. I recommend proceeding, with quarterly reviews to monitor progress against milestones."
        }
      ],
      connectionToPrevious: "Los conectores avanzados son útiles para estructurar presentaciones de riesgo.",
      connectionToNext: "Los discourse markers te ayudarán a presentar información de riesgo de manera más fluida."
    },
    {
      id: 7,
      title: "Discourse Markers in Speaking",
      titleEs: "Marcadores del Discurso al Hablar",
      introduction: {
        title: "💬 Marcadores del Discurso al Hablar",
        explanation: "Los discourse markers hacen tu habla más natural y organizada. Son las 'señales de tráfico' del discurso.",
        keyPoints: [
          "Organizar: 'First of all...', 'Moving on...', 'To sum up...'",
          "Clarificar: 'What I mean is...', 'In other words...', 'That is to say...'",
          "Ejemplificar: 'For instance...', 'To give you an idea...', 'Such as...'",
          "Enfatizar: 'The point is...', 'What's important here is...', 'I'd like to stress that...'",
          "Ganar tiempo: 'Well...', 'You know...', 'Let me think...'"
        ],
        examples: [
          { english: "Moving on to the next point, let's discuss the budget.", spanish: "Pasando al siguiente punto, discutamos el presupuesto.", explanation: "Transición" },
          { english: "What I'm trying to say is that we need more time.", spanish: "Lo que intento decir es que necesitamos más tiempo.", explanation: "Clarificación" },
          { english: "To put it another way, the market isn't ready.", spanish: "Dicho de otra manera, el mercado no está listo.", explanation: "Reformulación" }
        ],
        tips: [
          "💡 'Well' y 'you know' son útiles pero no los uses en exceso",
          "💡 'So' al inicio de oración es muy común en inglés hablado",
          "💡 'Actually' introduce información sorprendente o que corrige"
        ],
        whenToUse: [
          "En presentaciones a clientes: \"Moving on to the next point, let's discuss the budget\"",
          "En reuniones de equipo: \"What I'm trying to say is that we need more time\"",
          "En llamadas de negocios: \"To put it another way, the market isn't ready\"",
          "En facilitación de discusiones: \"First of all... The point is... To sum up...\""
        ],
        whenNotToUse: [
          "En escritura formal → demasiado oral: evita \"Well\" y \"You know\" en informes",
          "En documentos técnicos → suena informal: usa \"Furthermore\" en vez de \"So\" en papers",
          "En exceso → \"Actually\" en cada frase suena condescendiente: úsalo con moderación"
        ]
      },
      objectives: ["Usar discourse markers naturalmente", "Organizar el discurso oral", "Ganar tiempo al hablar"],
      estimatedMinutes: 30,
      grammarTheoryIds: ["c1-advanced-linking-devices"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l9t7_e1", word: "First of all...", translation: "En primer lugar...", type: "expression", definition: "starting point", definitionEs: "punto de inicio", example: "First of all, let me introduce the team.", exampleEs: "En primer lugar, déjenme presentar al equipo.", related: [], difficulty: 1 },
          { id: "l9t7_e2", word: "Moving on...", translation: "Pasando a...", type: "expression", definition: "transitioning", definitionEs: "haciendo transición", example: "Moving on to the next topic...", exampleEs: "Pasando al siguiente tema...", related: [], difficulty: 1 },
          { id: "l9t7_e3", word: "What I mean is...", translation: "Lo que quiero decir es...", type: "expression", definition: "clarifying", definitionEs: "clarificando", example: "What I mean is we need more resources.", exampleEs: "Lo que quiero decir es que necesitamos más recursos.", related: [], difficulty: 1 },
          { id: "l9t7_e4", word: "In other words...", translation: "En otras palabras...", type: "expression", definition: "rephrasing", definitionEs: "reformulando", example: "In other words, we're behind schedule.", exampleEs: "En otras palabras, estamos atrasados.", related: [], difficulty: 1 },
          { id: "l9t7_e5", word: "To put it another way...", translation: "Dicho de otra manera...", type: "expression", definition: "rephrasing", definitionEs: "reformulando", example: "To put it another way, the risk is too high.", exampleEs: "Dicho de otra manera, el riesgo es demasiado alto.", related: [], difficulty: 1 },
          { id: "l9t7_e6", word: "For instance / For example", translation: "Por ejemplo", type: "expression", definition: "giving example", definitionEs: "dando ejemplo", example: "For instance, consider our last project.", exampleEs: "Por ejemplo, considera nuestro último proyecto.", related: [], difficulty: 1 },
          { id: "l9t7_e7", word: "The point is...", translation: "El punto es...", type: "expression", definition: "emphasizing main point", definitionEs: "enfatizando punto principal", example: "The point is we need to act now.", exampleEs: "El punto es que necesitamos actuar ahora.", related: [], difficulty: 1 },
          { id: "l9t7_e8", word: "To sum up...", translation: "Para resumir...", type: "expression", definition: "summarizing", definitionEs: "resumiendo", example: "To sum up, we have three main priorities.", exampleEs: "Para resumir, tenemos tres prioridades principales.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l9t7_adv1", word: "basically", translation: "básicamente", type: "adverb", definition: "fundamentally", definitionEs: "fundamentalmente", example: "Basically, we need more time.", exampleEs: "Básicamente, necesitamos más tiempo.", related: [], difficulty: 1 },
          { id: "l9t7_adv2", word: "actually", translation: "de hecho/en realidad", type: "adverb", definition: "in fact", definitionEs: "de hecho", example: "Actually, that's not quite right.", exampleEs: "De hecho, eso no es del todo correcto.", related: [], difficulty: 1 },
          { id: "l9t7_adv3", word: "essentially", translation: "esencialmente", type: "adverb", definition: "in essence", definitionEs: "en esencia", example: "Essentially, it's the same idea.", exampleEs: "Esencialmente, es la misma idea.", related: [], difficulty: 1 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t7_cm1", wrong: "Overusing 'basically' (every sentence)", correct: "Use 'basically' only to simplify: vary with 'essentially', 'fundamentally', 'in short'", explanation: "'Basically' in every sentence sounds like a filler; use it only to simplify something complex", explanationEs: "'Basically' en cada oración suena como muletilla; úsalo solo para simplificar algo complejo", category: "usage" },
        { id: "l9t7_cm2", wrong: "'Actually' to mean 'currently'", correct: "'Actually' = in fact (correction); 'Currently' = now", explanation: "'Actually the company is expanding' ✗; 'Currently the company is expanding' ✓", explanationEs: "'Actually the company is expanding' ✗; 'Currently the company is expanding' ✓", category: "vocabulary" },
        { id: "l9t7_cm3", wrong: "Starting every point with 'So...'", correct: "Vary: 'Well...', 'Now...', 'Right...', 'Okay, so...'", explanation: "'So' is common but overuse sounds immature or informal", explanationEs: "'So' es común pero el exceso suena inmaduro o informal", category: "usage" },
        { id: "l9t7_cm4", wrong: "Using written connectors in speech ('Furthermore', 'Moreover')", correct: "In speech: 'Also...', 'And another thing...', 'What's more...'", explanation: "'Furthermore' sounds too formal in conversation; 'also' is more natural", explanationEs: "'Furthermore' suena muy formal en conversación; 'also' es más natural", category: "usage" },
        { id: "l9t7_cm5", wrong: "'At the end of the day' overused", correct: "Vary with: 'Ultimately...', 'When all is said and done...', 'The bottom line is...'", explanation: "This expression is so overused it can sound cliché", explanationEs: "Esta expresión está tan usada que puede sonar cliché", category: "usage" }
      ],
      exercises: [
        {
          type: "gap-fill",
          instruction: "Completa con el discourse marker apropiado",
          items: [
            { sentence: "_____ of all, let me thank you for coming.", answer: "First", hint: "para empezar" },
            { sentence: "_____ on to the next topic, let's discuss the budget.", answer: "Moving", hint: "transición" },
            { sentence: "_____ I mean is, we need more resources.", answer: "What", hint: "clarificación" },
            { sentence: "_____ other words, we're behind schedule.", answer: "In", hint: "reformular" },
            { sentence: "The _____ is, we need to act now.", answer: "point", hint: "énfasis" },
            { sentence: "To _____ up, we have three priorities.", answer: "sum", hint: "resumir" }
          ]
        },
        {
          type: "categorization",
          instruction: "Clasifica estos discourse markers según su función",
          categories: {
            "Organizing": ["First of all", "Moving on", "To sum up", "Finally"],
            "Clarifying": ["What I mean is", "In other words", "To put it another way", "That is to say"],
            "Exemplifying": ["For instance", "For example", "Such as", "To give you an idea"],
            "Emphasizing": ["The point is", "The key thing is", "What's important here is", "I'd like to stress that"],
            "Buying time": ["Well", "You know", "Let me think", "That's a good question"]
          }
        },
        {
          type: "transformation",
          instruction: "Añade discourse markers para hacer estos textos más naturales",
          items: [
            {
              flat: "We have a problem. The budget is over. We need to cut costs. Marketing is the biggest expense.",
              improved: "Well, we have a situation here. Basically, the budget is over. So what I'm saying is, we need to cut costs. Now, the thing is, marketing is the biggest expense.",
              explanation: "Discourse markers añaden naturalidad y organización"
            },
            {
              flat: "The project is late. We missed deadlines. The team is tired. We need to prioritize.",
              improved: "First of all, I should mention that the project is running behind. In other words, we've missed several deadlines. What's more, the team is exhausted. So the point is, we really need to prioritize.",
              explanation: "Conectores guían al oyente a través de la información"
            }
          ]
        },
        {
          type: "matching",
          instruction: "Empareja la situación con el discourse marker más apropiado",
          items: [
            { situation: "Starting a presentation", marker: "First of all, let me..." },
            { situation: "Changing topic", marker: "Moving on to..." },
            { situation: "Rephrasing something complex", marker: "In other words..." },
            { situation: "Returning to main point", marker: "Anyway, as I was saying..." },
            { situation: "Concluding", marker: "To sum up..." },
            { situation: "Needing time to think", marker: "That's a good question. Let me think..." }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentación informal usando discourse markers",
        context: "Un manager actualiza al equipo sobre el progreso del proyecto de manera conversacional",
        dialogue: [
          { speaker: "Manager", text: "Okay, so, first of all, thanks everyone for being here. I know it's been a busy week.", translation: "Bien, entonces, primero que nada, gracias a todos por estar aquí. Sé que ha sido una semana ocupada." },
          { speaker: "Manager", text: "Basically, I wanted to give you a quick update on where we are with the project.", translation: "Básicamente, quería darles una actualización rápida de dónde estamos con el proyecto." },
          { speaker: "Manager", text: "Now, the thing is, we're slightly behind on Phase 2. In other words, we need to pick up the pace a bit.", translation: "Ahora, el asunto es que estamos un poco atrasados en Fase 2. En otras palabras, necesitamos acelerar un poco." },
          { speaker: "Team Member", text: "What exactly is causing the delay?", translation: "¿Qué exactamente está causando el retraso?" },
          { speaker: "Manager", text: "Good question. Well, actually, it's a combination of things. For instance, we had some integration issues last week.", translation: "Buena pregunta. Bueno, de hecho, es una combinación de cosas. Por ejemplo, tuvimos algunos problemas de integración la semana pasada." },
          { speaker: "Manager", text: "What I mean is, the API wasn't behaving as expected. But anyway, we've sorted that now.", translation: "Lo que quiero decir es que la API no se estaba comportando como esperábamos. Pero en fin, ya lo resolvimos." },
          { speaker: "Manager", text: "Moving on to the good news—the client loves the new features. So that's positive.", translation: "Pasando a las buenas noticias—al cliente le encantan las nuevas funcionalidades. Así que eso es positivo." },
          { speaker: "Manager", text: "To sum up, we're behind but manageable. The point is, we need to stay focused these next two weeks.", translation: "Para resumir, estamos atrasados pero manejable. El punto es que necesitamos mantenernos enfocados estas próximas dos semanas." }
        ],
        keyPhrases: [
          { phrase: "First of all", translation: "Primero que nada", usage: "Iniciar" },
          { phrase: "Basically", translation: "Básicamente", usage: "Simplificar" },
          { phrase: "The thing is", translation: "El asunto es", usage: "Introducir problema" },
          { phrase: "In other words", translation: "En otras palabras", usage: "Reformular" },
          { phrase: "For instance", translation: "Por ejemplo", usage: "Ejemplificar" },
          { phrase: "What I mean is", translation: "Lo que quiero decir es", usage: "Clarificar" },
          { phrase: "Moving on to", translation: "Pasando a", usage: "Cambiar tema" },
          { phrase: "To sum up", translation: "Para resumir", usage: "Concluir" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "actually", wrong: "AC-tu-ally", correct: "/ˈæk.tʃu.ə.li/", tip: "AK-chu-uh-lee, reduce la última sílaba" },
          { word: "basically", wrong: "ba-SI-ca-lly", correct: "/ˈbeɪ.sɪ.kli/", tip: "BAY-si-klee, tres sílabas" },
          { word: "essentially", wrong: "es-sen-ti-A-lly", correct: "/ɪˈsen.ʃəl.i/", tip: "ih-SEN-shuh-lee" }
        ],
        intonationPatterns: [
          { pattern: "Falling then rising for 'Well...'", example: "Well↘... ↗I think...", meaning: "Señala que estás pensando" },
          { pattern: "Slight pause after discourse markers", example: "Basically, [pause] we need...", meaning: "La pausa da peso a lo siguiente" },
          { pattern: "Rising tone for checking understanding", example: "...you know↗?", meaning: "Invita confirmación del oyente" }
        ]
      },
      culturalNote: {
        title: "Fillers y naturalidad",
        titleEs: "Fillers y naturalidad",
        content: "Los discourse markers como 'well', 'you know', 'I mean' son extremadamente comunes en el habla nativa. Sin ellos, el inglés hablado suena robótico o demasiado formal. Sin embargo, el exceso también es problema. En entrevistas de trabajo o presentaciones formales, reduce los fillers. En conversación casual, son necesarios para sonar natural. El truco está en el balance: suficientes para fluir, no tantos que distraigan.",
        contentEs: "Los discourse markers como 'well', 'you know' son extremadamente comunes en el habla nativa. Sin ellos, el inglés suena robótico. El truco está en el balance."
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la diferencia entre 'actually' y 'currently'?",
          options: [
            "Son sinónimos",
            "'Actually' = de hecho (corrige); 'Currently' = ahora",
            "'Actually' es más formal",
            "'Currently' es para el pasado"
          ],
          correctAnswer: 1,
          explanation: "'Actually' corrige o sorprende; 'currently' indica tiempo presente"
        },
        {
          question: "¿Qué función tiene 'Moving on to...'?",
          options: [
            "Resumir",
            "Corregir",
            "Hacer transición a otro tema",
            "Dar un ejemplo"
          ],
          correctAnswer: 2,
          explanation: "'Moving on to' señala cambio de tema"
        },
        {
          question: "'In other words' se usa para:",
          options: [
            "Agregar información nueva",
            "Decir lo mismo de otra manera",
            "Contradecir",
            "Concluir"
          ],
          correctAnswer: 1,
          explanation: "Sirve para reformular o explicar de forma más clara"
        },
        {
          question: "¿Cuándo usar 'The point is...'?",
          options: [
            "Al dar un ejemplo",
            "Al cambiar de tema",
            "Al enfatizar lo más importante",
            "Al ganar tiempo"
          ],
          correctAnswer: 2,
          explanation: "'The point is' enfatiza el mensaje central"
        },
        {
          question: "¿Por qué evitar 'Furthermore' en conversación casual?",
          options: [
            "Es incorrecto gramaticalmente",
            "Suena demasiado formal para el habla casual",
            "Solo se usa en pasado",
            "Es un americanismo"
          ],
          correctAnswer: 1,
          explanation: "'Furthermore' es muy formal; en conversación usa 'Also' o 'And another thing'"
        },
        {
          question: "'Well...' al inicio de una respuesta indica:",
          options: [
            "Que la respuesta es obvia",
            "Que estás pensando o que la respuesta es compleja",
            "Que estás en desacuerdo",
            "Que vas a terminar de hablar"
          ],
          correctAnswer: 1,
          explanation: "'Well' es un filler que señala que estás formulando tu respuesta"
        }
      ],
      guidedProduction: [
        {
          prompt: "Da una actualización de proyecto de 2 minutos usando al menos 6 discourse markers diferentes",
          sampleResponse: "Well, thanks for the opportunity to update you. First of all, I should mention that we've made significant progress this sprint. Basically, we completed all the core features on schedule.\n\nNow, the thing is, we did encounter some challenges. For instance, the database migration took longer than expected. What I mean is, we had to rebuild some indexes, which added two days to the timeline.\n\nThat said, we're still on track for the release. Moving on to the testing phase—so far, so good. We've found and fixed 15 bugs, nothing critical.\n\nThe point is, we're confident about the launch date. To sum up, we're 90% complete, with two weeks of buffer before go-live. Any questions?"
        },
        {
          prompt: "Explica un concepto técnico a un no-técnico usando discourse markers para clarificar",
          sampleResponse: "Okay, so let me explain how our security system works. Basically, think of it like a really smart bouncer at a club.\n\nFirst of all, when you try to log in, the system checks your password. In other words, it's verifying that you are who you say you are.\n\nNow, the interesting part is what happens next. You see, we also send a code to your phone. What I mean is, even if someone steals your password, they can't get in without your phone too. That's what we call two-factor authentication.\n\nTo put it another way, it's like needing both a key AND a fingerprint to open a door. So essentially, we've made it much harder for bad actors to access your data.\n\nThe point is, your information is protected by multiple layers. Does that make sense?"
        },
        {
          prompt: "Responde a una pregunta difícil usando fillers apropiados para ganar tiempo",
          sampleResponse: "That's actually a really good question. Well, let me think about that for a moment...\n\nYou know, it's not straightforward. Essentially, there are pros and cons to both approaches. I mean, on one hand, we could prioritize speed, but then again, quality might suffer.\n\nHonestly, I'd need to look at the data more closely before giving you a definitive answer. What I can say is that, generally speaking, our experience suggests the slower approach yields better results in the long term.\n\nBut anyway, I don't want to speculate. Let me get back to you tomorrow with some concrete numbers. Does that work for you?"
        },
        {
          prompt: "Haz una transición suave entre tres temas diferentes en una reunión",
          sampleResponse: "Alright, so to sum up the budget discussion, we've agreed to reduce marketing spend by 15% and reallocate to product development. Everyone's on board with that.\n\nNow, moving on to our second agenda item: the hiring plan. Basically, we need to fill three positions by Q2. The thing is, the job market is competitive right now. In other words, we might need to increase salary bands.\n\nAnyway, I'll come back to hiring in a moment. First, I want to quickly touch on the office relocation—that's our third topic today. So, what I'm hearing from the team is that most people prefer the downtown location. For instance, Sarah mentioned it's closer to public transit. That said, the costs are significantly higher.\n\nSo to bring it all together, we have three decisions to make today: budget reallocation, hiring strategy, and office location. The point is, they're all interconnected. What affects one affects the others."
        }
      ],
      connectionToPrevious: "Los discourse markers hacen tu comunicación de riesgo más fluida y natural.",
      connectionToNext: "Ahora que manejas el discurso oral, aprenderás las convenciones de la escritura técnica."
    },
    {
      id: 8,
      title: "Technical Writing Skills",
      titleEs: "Habilidades de Escritura Técnica",
      introduction: {
        title: "📝 Escritura Técnica",
        explanation: "La escritura técnica requiere claridad, precisión y organización. Es fundamental para reportes, documentación y comunicación profesional.",
        keyPoints: [
          "Claridad: oraciones cortas, voz activa, términos precisos",
          "Estructura: introducción, cuerpo (puntos principales), conclusión",
          "Objetividad: 'It was observed that...' en lugar de 'I think'",
          "Precisión: evitar ambigüedad, definir términos técnicos",
          "Concisión: eliminar palabras innecesarias, ir al grano"
        ],
        examples: [
          { english: "The system processes approximately 10,000 transactions per second.", spanish: "El sistema procesa aproximadamente 10,000 transacciones por segundo.", explanation: "Preciso y objetivo" },
          { english: "It should be noted that these results are preliminary.", spanish: "Debe notarse que estos resultados son preliminares.", explanation: "Calificación importante" },
          { english: "The following sections describe the methodology and findings.", spanish: "Las siguientes secciones describen la metodología y los hallazgos.", explanation: "Estructura clara" }
        ],
        tips: [
          "💡 Una idea por párrafo",
          "💡 Usa bullet points para listas",
          "💡 Define acrónimos la primera vez que los usas"
        ],
        whenToUse: [
          "En reportes técnicos: \"The system processes approximately 10,000 transactions per second\"",
          "En documentación de proyectos: \"It should be noted that these results are preliminary\"",
          "En informes de investigación: \"The following sections describe the methodology and findings\"",
          "En propuestas formales: \"The data indicate a trend toward...\""
        ],
        whenNotToUse: [
          "En emails informales a colegas → demasiado impersonal: \"It was observed\" suena distante; usa \"I noticed\"",
          "En presentaciones orales → \"It should be noted\" suena rígido: usa \"It's important to mention\"",
          "En conversaciones 1-a-1 → suena artificial: evita voz pasiva excesiva"
        ]
      },
      objectives: ["Escribir con claridad técnica", "Estructurar documentos técnicos", "Usar lenguaje preciso y objetivo"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-nominalization", "c1-hedging"],
      vocabulary: {
        nouns: [
          { id: "l9t8_n1", word: "methodology", translation: "metodología", type: "noun", definition: "system of methods", definitionEs: "sistema de métodos", example: "The methodology is sound.", exampleEs: "La metodología es sólida.", related: [], difficulty: 2 },
          { id: "l9t8_n2", word: "findings", translation: "hallazgos", type: "noun", definition: "results of investigation", definitionEs: "resultados de investigación", example: "The findings are significant.", exampleEs: "Los hallazgos son significativos.", related: [], difficulty: 1 },
          { id: "l9t8_n3", word: "appendix", translation: "apéndice", type: "noun", definition: "additional material", definitionEs: "material adicional", example: "See Appendix A for details.", exampleEs: "Ver Apéndice A para detalles.", related: [], difficulty: 2 },
          { id: "l9t8_n4", word: "abstract", translation: "resumen/abstract", type: "noun", definition: "summary of document", definitionEs: "resumen del documento", example: "Read the abstract first.", exampleEs: "Lee el resumen primero.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l9t8_v1", word: "indicate", translation: "indicar", type: "verb", definition: "to show", definitionEs: "mostrar", example: "The data indicate a trend.", exampleEs: "Los datos indican una tendencia.", related: [], difficulty: 1 },
          { id: "l9t8_v2", word: "demonstrate", translation: "demostrar", type: "verb", definition: "to show clearly", definitionEs: "mostrar claramente", example: "The results demonstrate...", exampleEs: "Los resultados demuestran...", related: [], difficulty: 1 },
          { id: "l9t8_v3", word: "comprise", translation: "comprender/constar de", type: "verb", definition: "to consist of", definitionEs: "consistir en", example: "The system comprises three modules.", exampleEs: "El sistema consta de tres módulos.", related: [], difficulty: 2 },
          { id: "l9t8_v4", word: "facilitate", translation: "facilitar", type: "verb", definition: "to make easier", definitionEs: "hacer más fácil", example: "This will facilitate the process.", exampleEs: "Esto facilitará el proceso.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l9t8_a1", word: "preliminary", translation: "preliminar", type: "adjective", definition: "initial, not final", definitionEs: "inicial, no final", example: "These are preliminary results.", exampleEs: "Estos son resultados preliminares.", related: [], difficulty: 1 },
          { id: "l9t8_a2", word: "subsequent", translation: "subsecuente", type: "adjective", definition: "following", definitionEs: "siguiente", example: "Subsequent tests confirmed this.", exampleEs: "Pruebas subsecuentes confirmaron esto.", related: [], difficulty: 2 },
          { id: "l9t8_a3", word: "aforementioned", translation: "anteriormente mencionado", type: "adjective", definition: "mentioned before", definitionEs: "mencionado antes", example: "The aforementioned issues...", exampleEs: "Los problemas anteriormente mencionados...", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l9t8_e1", word: "It should be noted that...", translation: "Debe notarse que...", type: "expression", definition: "highlighting information", definitionEs: "destacando información", example: "It should be noted that this is a limitation.", exampleEs: "Debe notarse que esto es una limitación.", related: [], difficulty: 1 },
          { id: "l9t8_e2", word: "As mentioned above...", translation: "Como se mencionó arriba...", type: "expression", definition: "referring back", definitionEs: "refiriéndose atrás", example: "As mentioned above, the system is scalable.", exampleEs: "Como se mencionó arriba, el sistema es escalable.", related: [], difficulty: 1 },
          { id: "l9t8_e3", word: "For the purposes of this document...", translation: "Para los propósitos de este documento...", type: "expression", definition: "defining scope", definitionEs: "definiendo alcance", example: "For the purposes of this document, 'user' means...", exampleEs: "Para los propósitos de este documento, 'usuario' significa...", related: [], difficulty: 2 },
          { id: "l9t8_e4", word: "In accordance with...", translation: "De acuerdo con...", type: "expression", definition: "following rules", definitionEs: "siguiendo reglas", example: "In accordance with the guidelines...", exampleEs: "De acuerdo con las directrices...", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t8_cm1", wrong: "Using 'I think' in technical documents", correct: "Use impersonal constructions: 'It appears that...', 'The data suggest...', 'It can be observed...'", explanation: "Technical writing must be objective; avoid personal opinions", explanationEs: "La escritura técnica debe ser objetiva; evita opiniones personales", category: "usage" },
        { id: "l9t8_cm2", wrong: "Passive voice overuse ('was done', 'has been completed')", correct: "Balance active and passive: 'We conducted tests' (active) + 'Tests were repeated' (passive when actor is unknown)", explanation: "Excessive passive voice makes text heavy; use active when the agent matters", explanationEs: "El exceso de voz pasiva hace el texto pesado; usa activa cuando el agente importa", category: "grammar" },
        { id: "l9t8_cm3", wrong: "'The system is comprised of...' (incorrect)", correct: "'The system comprises...' OR 'The system is composed of...'", explanation: "'Comprise' means to contain; it does not take 'of'. 'Composed of' is the correct alternative", explanationEs: "'Comprise' significa contener; no usa 'of'. 'Composed of' es la alternativa", category: "grammar" },
        { id: "l9t8_cm4", wrong: "Using undefined acronyms", correct: "Define at first use: 'Return on Investment (ROI)', then use 'ROI'", explanation: "Always define acronyms the first time; the reader may not know them", explanationEs: "Siempre define acrónimos la primera vez; el lector puede no conocerlos", category: "usage" },
        { id: "l9t8_cm5", wrong: "'Very unique', 'completely essential' (redundant modifiers)", correct: "'Unique' (without very), 'Essential' (without completely)", explanation: "Some words are absolute and do not need intensifiers", explanationEs: "Algunas palabras son absolutas y no necesitan intensificadores", category: "usage" }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Transforma estas oraciones informales a escritura técnica",
          items: [
            {
              informal: "I think this is the best way to do it.",
              technical: "This approach appears to be optimal based on the available data.",
              improvement: "Eliminar 'I think', usar evidencia"
            },
            {
              informal: "The system is really fast.",
              technical: "The system processes 10,000 transactions per second, exceeding the benchmark by 40%.",
              improvement: "Cuantificar en vez de usar 'really'"
            },
            {
              informal: "Lots of things went wrong.",
              technical: "Several issues were identified during testing, including memory leaks, timeout errors, and data inconsistencies.",
              improvement: "Ser específico, enumerar"
            },
            {
              informal: "We should probably do it this way.",
              technical: "Based on the analysis, the recommended approach is X due to its superior performance metrics.",
              improvement: "Justificar la recomendación"
            },
            {
              informal: "This is a very unique solution.",
              technical: "This solution is unique in its approach to parallel processing.",
              improvement: "Eliminar 'very' con palabras absolutas"
            }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa estas oraciones con lenguaje técnico apropiado",
          items: [
            { sentence: "The data _____ a significant trend toward mobile adoption.", answer: "indicate", hint: "mostrar" },
            { sentence: "It _____ be noted that these results are preliminary.", answer: "should", hint: "debería" },
            { sentence: "The system _____ three main modules.", answer: "comprises", hint: "consta de" },
            { sentence: "_____ tests confirmed the initial findings.", answer: "Subsequent", hint: "siguientes" },
            { sentence: "For the _____ of this document, 'user' refers to any authenticated entity.", answer: "purposes", hint: "propósitos" },
            { sentence: "In _____ with ISO standards, all data is encrypted at rest.", answer: "accordance", hint: "de acuerdo" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en estas oraciones técnicas",
          items: [
            { incorrect: "The system is comprised of four subsystems.", correct: "The system comprises four subsystems." },
            { incorrect: "I personally think this method is better.", correct: "This method demonstrates superior performance based on benchmark results." },
            { incorrect: "This is very essential for the process.", correct: "This is essential for the process." },
            { incorrect: "Using the GUI the user can access all features.", correct: "Using the Graphical User Interface (GUI), the user can access all features." },
            { incorrect: "A lot of improvements were made.", correct: "Fifteen improvements were implemented, including performance optimization and error handling enhancements." }
          ]
        },
        {
          type: "structuring",
          instruction: "Reorganiza esta información en estructura de documento técnico",
          task: "Convert this informal description into a properly structured technical section",
          informal: "So basically we tested the new caching system and it worked really well. We ran it 100 times and it was about 3 times faster than the old one. Sometimes it had memory issues but we fixed most of them. Overall I think we should use it.",
          structured: {
            objective: "Evaluate the performance of the new caching system compared to the legacy implementation.",
            methodology: "The caching system was tested over 100 iterations under production-equivalent load conditions.",
            findings: "The new system demonstrated a 3x performance improvement, processing requests in an average of 45ms compared to 135ms for the legacy system. Memory utilization issues were identified in 8% of test runs.",
            recommendations: "Based on these findings, deployment of the new caching system is recommended, contingent on resolution of identified memory issues.",
            limitations: "Testing was conducted in a controlled environment; production performance may vary."
          }
        }
      ],
      modelDialogue: {
        title: "Revisión de documento técnico",
        context: "Un senior revisa el borrador de reporte técnico de un junior",
        dialogue: [
          { speaker: "Senior", text: "I've reviewed your report. The content is good, but let's refine the language for a technical audience.", translation: "Revisé tu reporte. El contenido es bueno, pero refinemos el lenguaje para una audiencia técnica." },
          { speaker: "Junior", text: "Sure, what changes would you suggest?", translation: "Claro, ¿qué cambios sugerirías?" },
          { speaker: "Senior", text: "First, avoid phrases like 'I think' or 'we believe.' Instead, use 'The data indicate...' or 'Analysis suggests...'", translation: "Primero, evita frases como 'creo' o 'creemos.' En cambio, usa 'Los datos indican...' o 'El análisis sugiere...'" },
          { speaker: "Senior", text: "Also, I noticed you used 'API' without defining it. Always define acronyms at first use.", translation: "También, noté que usaste 'API' sin definirlo. Siempre define acrónimos en el primer uso." },
          { speaker: "Junior", text: "Ah right, so 'Application Programming Interface (API)' the first time, then just 'API'?", translation: "Ah cierto, entonces '¿Interfaz de Programación de Aplicaciones (API)' la primera vez, luego solo 'API'?" },
          { speaker: "Senior", text: "Exactly. And quantify where possible. Instead of 'the system is fast,' write 'the system processes 10,000 requests per second.'", translation: "Exacto. Y cuantifica donde sea posible. En lugar de 'el sistema es rápido,' escribe 'el sistema procesa 10,000 solicitudes por segundo.'" },
          { speaker: "Junior", text: "What about the limitations section? Should I be that specific about what we don't know?", translation: "¿Qué hay de la sección de limitaciones? ¿Debería ser tan específico sobre lo que no sabemos?" },
          { speaker: "Senior", text: "Absolutely. It should be noted that acknowledging limitations adds credibility. It demonstrates thoroughness.", translation: "Absolutamente. Debe notarse que reconocer limitaciones añade credibilidad. Demuestra rigurosidad." }
        ],
        keyPhrases: [
          { phrase: "The data indicate", translation: "Los datos indican", usage: "Presentar evidencia objetiva" },
          { phrase: "Analysis suggests", translation: "El análisis sugiere", usage: "Conclusión basada en datos" },
          { phrase: "It should be noted", translation: "Debe notarse", usage: "Destacar información importante" },
          { phrase: "As mentioned above", translation: "Como se mencionó arriba", usage: "Referencia a información anterior" },
          { phrase: "For the purposes of this document", translation: "Para los propósitos de este documento", usage: "Definir alcance" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "methodology", wrong: "me-tho-DO-lo-gy", correct: "/ˌmeθ.əˈdɒl.ə.dʒi/", tip: "meth-uh-DOL-uh-jee" },
          { word: "preliminary", wrong: "pre-li-MI-na-ry", correct: "/prɪˈlɪm.ɪ.nər.i/", tip: "pri-LIM-i-nuh-ree" },
          { word: "appendix", wrong: "a-PEN-dix", correct: "/əˈpen.dɪks/", tip: "uh-PEN-diks" }
        ],
        intonationPatterns: [
          { pattern: "Even, measured tone for technical reading", example: "The system comprises... three modules↘", meaning: "Tono estable para información técnica" },
          { pattern: "Slight emphasis on key terms", example: "This is a SIGNIFICANT improvement", meaning: "Enfatiza datos clave" }
        ]
      },
      culturalNote: {
        title: "Estilos de escritura técnica por región",
        titleEs: "Estilos de escritura técnica por región",
        content: "La escritura técnica americana tiende a ser directa y concisa ('Get to the point'). La británica puede ser más formal y usar más hedging ('It would appear that...'). En contextos internacionales, favorece oraciones simples y evita idioms. Los reportes alemanes suelen ser muy detallados; los japoneses incluyen más contexto. Para audiencias globales, mantén oraciones cortas, usa listas, y define todos los términos técnicos.",
        contentEs: "La escritura técnica americana tiende a ser directa y concisa. La británica puede ser más formal. Para audiencias globales, mantén oraciones cortas y define todos los términos técnicos."
      },
      consolidationQuiz: [
        {
          question: "¿Por qué evitar 'I think' en escritura técnica?",
          options: [
            "Es gramaticalmente incorrecto",
            "Los documentos técnicos deben ser objetivos, no subjetivos",
            "Es muy informal",
            "Solo se usa en emails"
          ],
          correctAnswer: 1,
          explanation: "La escritura técnica se basa en evidencia y datos, no en opiniones personales"
        },
        {
          question: "¿Cuál es la forma correcta?",
          options: [
            "The system is comprised of three parts.",
            "The system comprises three parts.",
            "The system is comprising three parts.",
            "The system comprise three parts."
          ],
          correctAnswer: 1,
          explanation: "'Comprises' significa contener; no necesita 'of'"
        },
        {
          question: "¿Qué significa 'preliminary results'?",
          options: [
            "Resultados finales",
            "Resultados iniciales, que pueden cambiar",
            "Resultados importantes",
            "Resultados eliminados"
          ],
          correctAnswer: 1,
          explanation: "'Preliminary' significa inicial, antes de la versión final"
        },
        {
          question: "¿Cómo usar acrónimos correctamente?",
          options: [
            "Asumir que todos los conocen",
            "Definir la primera vez: 'Return on Investment (ROI)', luego solo 'ROI'",
            "Siempre escribir completo",
            "Solo usar en gráficos"
          ],
          correctAnswer: 1,
          explanation: "Define en el primer uso, luego usa la versión corta"
        },
        {
          question: "'Very unique' es incorrecto porque:",
          options: [
            "'Very' es muy informal",
            "'Unique' es absoluto - algo es único o no lo es, no puede ser 'muy' único",
            "'Unique' solo se usa para personas",
            "Debería ser 'very uniquely'"
          ],
          correctAnswer: 1,
          explanation: "Palabras absolutas como 'unique', 'essential', 'complete' no necesitan intensificadores"
        },
        {
          question: "'In accordance with' significa:",
          options: [
            "En contra de",
            "De acuerdo con / conforme a",
            "Además de",
            "A pesar de"
          ],
          correctAnswer: 1,
          explanation: "'In accordance with' indica cumplimiento con reglas o estándares"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe el abstract (150 palabras) de un reporte técnico sobre implementación de un sistema de autenticación",
          sampleResponse: "Abstract\n\nThis report presents the findings of the Multi-Factor Authentication (MFA) implementation project conducted between January and March 2024. The primary objective was to enhance security posture while maintaining user experience. The methodology comprised three phases: requirements analysis, system design, and pilot deployment with 500 users.\n\nKey findings indicate that MFA implementation reduced unauthorized access attempts by 94% and decreased password-related support tickets by 60%. User satisfaction remained stable at 82%, with a minor 3% decrease attributed to the additional authentication step.\n\nThe report concludes that MFA deployment should proceed organization-wide. It should be noted that this recommendation is contingent on the implementation of the mobile app-based authenticator, as SMS-based verification demonstrated security vulnerabilities during testing.\n\nRecommendations for subsequent phases and limitations of the current study are discussed in Sections 5 and 6 respectively."
        },
        {
          prompt: "Convierte esta comunicación informal en un párrafo de metodología técnica",
          sampleResponse: "Informal: 'So basically we asked a bunch of people what they thought about the app and then we looked at the numbers.'\n\nTechnical version:\n\nMethodology\n\nA mixed-methods approach was employed to evaluate user satisfaction with the application. Quantitative data was collected through a structured survey (n=250) using a 5-point Likert scale across six dimensions: usability, performance, reliability, aesthetics, functionality, and overall satisfaction. Qualitative data was gathered through semi-structured interviews with a subset of participants (n=30) selected through stratified random sampling.\n\nSurvey responses were analyzed using SPSS v27, with descriptive statistics calculated for each dimension. Interview transcripts were coded using thematic analysis to identify recurring patterns. The findings from both methods were triangulated to ensure validity and provide comprehensive insights into user experience."
        },
        {
          prompt: "Escribe una sección de 'Limitations' para un estudio de mercado",
          sampleResponse: "6. Limitations\n\nSeveral limitations should be noted when interpreting the findings of this market analysis.\n\nFirst, the sample size (n=500) represents approximately 0.1% of the target market, which may limit generalizability. Subsequent studies with larger samples are recommended to validate these results.\n\nSecond, data collection occurred during Q4 2023, a period characterized by unusual market volatility. Consequently, consumer sentiment indicators may not reflect typical purchasing behavior.\n\nThird, the survey was administered in English only, potentially excluding non-English-speaking market segments. For the purposes of this analysis, it was assumed that English-speaking consumers are representative of the broader market; however, this assumption may not hold in all regions.\n\nFinally, competitor pricing data was obtained from publicly available sources and may not reflect actual transaction prices. These limitations notwithstanding, the methodology employed is consistent with industry standards and the findings provide actionable insights for the strategic planning process."
        },
        {
          prompt: "Escribe las conclusiones y recomendaciones de un análisis de sistema de software",
          sampleResponse: "7. Conclusions\n\nThe analysis demonstrates that the legacy Customer Relationship Management (CRM) system no longer meets organizational requirements. Key deficiencies include: processing speeds 40% below industry benchmarks, limited mobile functionality, and an estimated 15% data redundancy rate.\n\nConversely, the proposed replacement system exhibits superior performance metrics across all evaluated criteria. Testing indicates 3x improvement in query response times and 99.9% uptime during the 30-day pilot period.\n\n8. Recommendations\n\nBased on the aforementioned findings, the following recommendations are proposed:\n\n8.1 Proceed with procurement of the replacement CRM system, contingent on successful completion of security audit (Q2 2024).\n\n8.2 Implement a phased migration strategy to minimize operational disruption. It is recommended that Sales and Marketing departments migrate first, followed by Customer Service.\n\n8.3 Allocate resources for a comprehensive training program. The training should comprise both technical modules for IT staff and functional modules for end users.\n\n8.4 Establish key performance indicators (KPIs) to monitor system performance post-implementation, with quarterly reviews for the first year.\n\nIn accordance with the project governance framework, these recommendations require approval from the Technology Steering Committee before implementation."
        }
      ],
      connectionToPrevious: "Los discourse markers para hablar complementan las transiciones escritas que aprendes aquí.",
      connectionToNext: "La claridad de la escritura técnica te ayudará en conversaciones difíciles donde la precisión importa."
    },
    {
      id: 9,
      title: "Managing Difficult Conversations",
      titleEs: "Manejando Conversaciones Difíciles",
      introduction: {
        title: "🎭 Conversaciones Difíciles",
        explanation: "Las conversaciones difíciles son inevitables. Aprenderás a navegarlas con tacto, manteniendo relaciones profesionales.",
        keyPoints: [
          "Preparación: definir objetivo, anticipar reacciones, elegir momento",
          "Inicio: 'I'd like to discuss something important', 'Can we talk candidly?'",
          "Escucha activa: 'I hear what you're saying', 'Help me understand...'",
          "Mantener calma: evitar tono acusatorio, usar 'I' statements",
          "Cierre constructivo: acordar pasos siguientes, verificar entendimiento"
        ],
        examples: [
          { english: "I understand this might be difficult to hear, but I need to address...", spanish: "Entiendo que esto puede ser difícil de escuchar, pero necesito abordar...", explanation: "Inicio empático" },
          { english: "Help me understand your perspective on this situation.", spanish: "Ayúdame a entender tu perspectiva sobre esta situación.", explanation: "Invitando diálogo" },
          { english: "What can we do together to prevent this from happening again?", spanish: "¿Qué podemos hacer juntos para evitar que esto suceda de nuevo?", explanation: "Enfoque colaborativo" }
        ],
        tips: [
          "💡 Nunca tengas conversaciones difíciles por email",
          "💡 El tono importa más que las palabras",
          "💡 Documenta los acuerdos después de la conversación"
        ],
        whenToUse: [
          "En feedback de desempeño: \"I understand this might be difficult to hear, but I need to address...\"",
          "En resolución de conflictos: \"Help me understand your perspective on this situation\"",
          "En conversaciones de corrección: \"What can we do together to prevent this from happening again?\"",
          "En mediación entre equipos: \"I'd like to discuss something important. Can we talk candidly?\""
        ],
        whenNotToUse: [
          "Por email o mensaje → demasiado frío: conversaciones difíciles requieren cara a cara o videollamada",
          "En público o delante de otros → humillante: elige un momento privado",
          "Cuando estás emocionalmente alterado → espera: \"I'll need to process this. Can we talk tomorrow?\""
        ]
      },
      objectives: ["Preparar conversaciones difíciles", "Mantener profesionalismo", "Llegar a resoluciones constructivas"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-hedging", "c1-distancing-language"],
      vocabulary: {
        nouns: [
          { id: "l9t9_n1", word: "confrontation", translation: "confrontación", type: "noun", definition: "a face-to-face meeting", definitionEs: "un encuentro cara a cara", example: "Avoid unnecessary confrontation.", exampleEs: "Evita confrontaciones innecesarias.", related: ["confront"], difficulty: 2 },
          { id: "l9t9_n2", word: "resolution", translation: "resolución", type: "noun", definition: "solving a problem", definitionEs: "resolver un problema", example: "Let's work toward a resolution.", exampleEs: "Trabajemos hacia una resolución.", related: ["resolve"], difficulty: 1 },
          { id: "l9t9_n3", word: "tension", translation: "tensión", type: "noun", definition: "stress between people", definitionEs: "estrés entre personas", example: "There's tension in the team.", exampleEs: "Hay tensión en el equipo.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l9t9_v1", word: "address", translation: "abordar", type: "verb", definition: "to deal with", definitionEs: "lidiar con", example: "We need to address this issue.", exampleEs: "Necesitamos abordar este problema.", related: [], difficulty: 1 },
          { id: "l9t9_v2", word: "defuse", translation: "desactivar/calmar", type: "verb", definition: "to reduce tension", definitionEs: "reducir tensión", example: "Let's try to defuse the situation.", exampleEs: "Tratemos de calmar la situación.", related: [], difficulty: 2 },
          { id: "l9t9_v3", word: "mediate", translation: "mediar", type: "verb", definition: "to help resolve conflict", definitionEs: "ayudar a resolver conflicto", example: "Can you mediate this discussion?", exampleEs: "¿Puedes mediar esta discusión?", related: ["mediator"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l9t9_a1", word: "candid", translation: "sincero/franco", type: "adjective", definition: "honest and direct", definitionEs: "honesto y directo", example: "Let's be candid with each other.", exampleEs: "Seamos sinceros el uno con el otro.", related: [], difficulty: 2 },
          { id: "l9t9_a2", word: "sensitive", translation: "sensible/delicado", type: "adjective", definition: "requiring careful handling", definitionEs: "que requiere manejo cuidadoso", example: "This is a sensitive topic.", exampleEs: "Este es un tema delicado.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l9t9_e1", word: "I'd like to discuss something important", translation: "Me gustaría discutir algo importante", type: "expression", definition: "opening difficult topic", definitionEs: "abriendo tema difícil", example: "I'd like to discuss something important with you.", exampleEs: "Me gustaría discutir algo importante contigo.", related: [], difficulty: 1 },
          { id: "l9t9_e2", word: "Help me understand...", translation: "Ayúdame a entender...", type: "expression", definition: "inviting explanation", definitionEs: "invitando explicación", example: "Help me understand why you made that decision.", exampleEs: "Ayúdame a entender por qué tomaste esa decisión.", related: [], difficulty: 1 },
          { id: "l9t9_e3", word: "I hear what you're saying", translation: "Escucho lo que dices", type: "expression", definition: "showing active listening", definitionEs: "mostrando escucha activa", example: "I hear what you're saying, and I'd like to add...", exampleEs: "Escucho lo que dices, y me gustaría agregar...", related: [], difficulty: 1 },
          { id: "l9t9_e4", word: "Let's focus on the issue, not the person", translation: "Enfoquémonos en el problema, no en la persona", type: "expression", definition: "keeping it professional", definitionEs: "manteniéndolo profesional", example: "Let's focus on the issue, not the person involved.", exampleEs: "Enfoquémonos en el problema, no en la persona involucrada.", related: [], difficulty: 1 },
          { id: "l9t9_e5", word: "What can we agree on?", translation: "¿En qué podemos estar de acuerdo?", type: "expression", definition: "finding common ground", definitionEs: "encontrando terreno común", example: "Let's start with what can we agree on.", exampleEs: "Empecemos con en qué podemos estar de acuerdo.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t9_cm1", wrong: "Starting with accusations: 'You always...' / 'You never...'", correct: "Use 'I' statements: 'I've noticed that...' / 'I feel concerned when...'", explanation: "'You' statements sound accusatory; 'I' statements express your perspective without attacking", explanationEs: "'You' statements suenan acusatorios; 'I' statements expresan tu perspectiva sin atacar", category: "usage" },
        { id: "l9t9_cm2", wrong: "Having the conversation via email", correct: "Sensitive conversations should be face-to-face or video call, followed by written summary", explanation: "Email has no tone; difficult conversations need non-verbal communication", explanationEs: "El email no tiene tono; las conversaciones difíciles necesitan comunicación no verbal", category: "usage" },
        { id: "l9t9_cm3", wrong: "Not preparing: 'We need to talk' without planning", correct: "Prepare: define objective, anticipate reactions, choose the right time and place", explanation: "Preparation reduces anxiety and increases the likelihood of success", explanationEs: "La preparación reduce la ansiedad y aumenta la probabilidad de éxito", category: "usage" },
        { id: "l9t9_cm4", wrong: "Trying to 'win' the conversation", correct: "Focus on mutual understanding and resolution, not winning", explanation: "The goal is to resolve, not to win; if you 'win', you lose the relationship", explanationEs: "El objetivo es resolver, no ganar; si 'ganas', pierdes la relación", category: "usage" },
        { id: "l9t9_cm5", wrong: "Avoiding or postponing indefinitely", correct: "Address issues early: 'Can we set aside 15 minutes to discuss X?'", explanation: "Small problems grow; address them before they escalate", explanationEs: "Los problemas pequeños crecen; abórdalos antes de que escalen", category: "usage" }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Transforma estas frases acusatorias en 'I statements'",
          items: [
            {
              accusatory: "You're always late to meetings.",
              constructive: "I've noticed that our meeting start times have been delayed recently. Help me understand what's happening.",
              principle: "Observación + pregunta, no acusación"
            },
            {
              accusatory: "You never listen to my ideas.",
              constructive: "I feel like my suggestions aren't always getting the consideration I'd hoped for. Can we discuss how we make decisions?",
              principle: "'I feel' + impacto + pregunta abierta"
            },
            {
              accusatory: "You're being unreasonable.",
              constructive: "I'm having trouble seeing how this approach works. Help me understand your reasoning.",
              principle: "Expresar dificultad + invitar explicación"
            },
            {
              accusatory: "You did this wrong.",
              constructive: "The result isn't quite what we were aiming for. What can we do differently next time?",
              principle: "Enfocarse en resultado y solución, no en culpa"
            },
            {
              accusatory: "You're not a team player.",
              constructive: "I'd like to discuss how we can better collaborate. I've noticed some gaps in our communication.",
              principle: "Específico + colaborativo"
            }
          ]
        },
        {
          type: "situational",
          instruction: "¿Cuál es la mejor manera de iniciar estas conversaciones difíciles?",
          items: [
            {
              situation: "Need to give negative feedback to a direct report",
              poor: "I need to tell you about everything you did wrong this quarter.",
              effective: "I'd like to discuss your performance this quarter. I have some feedback that I hope will be helpful for your development.",
              explanation: "Enmarca como desarrollo, no como crítica"
            },
            {
              situation: "Need to negotiate salary with your manager",
              poor: "I deserve a raise and I want to talk about it now.",
              effective: "I'd like to schedule some time to discuss my compensation. I've prepared some thoughts on my contributions and market data.",
              explanation: "Pide tiempo, muestra preparación, enfócate en valor"
            },
            {
              situation: "Need to address conflict between two team members",
              poor: "You two need to sort out your problems.",
              effective: "I've noticed some tension and I'd like to help find a resolution that works for everyone. Can we talk about what's happening?",
              explanation: "Reconoce, ofrece ayuda, invita diálogo"
            },
            {
              situation: "Need to resign from a job you like",
              poor: "I'm leaving. Here's my notice.",
              effective: "I'd like to discuss something important. I've made the difficult decision to pursue a new opportunity. I want to ensure a smooth transition.",
              explanation: "Respectuoso, enfocado en transición profesional"
            }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa estas frases para conversaciones difíciles",
          items: [
            { sentence: "Help me _____ your perspective on this.", answer: "understand", hint: "comprender" },
            { sentence: "I'd like to _____ something important with you.", answer: "discuss", hint: "hablar sobre" },
            { sentence: "Let's focus on the _____, not the person.", answer: "issue", hint: "problema" },
            { sentence: "I hear what you're _____.", answer: "saying", hint: "escucha activa" },
            { sentence: "Let's try to _____ the situation.", answer: "defuse", hint: "calmar" },
            { sentence: "What can we _____ on?", answer: "agree", hint: "terreno común" }
          ]
        },
        {
          type: "sequencing",
          instruction: "Ordena estos pasos para una conversación difícil",
          correctOrder: [
            "Prepare: Define your objective and desired outcome",
            "Choose the right time and place (private, calm moment)",
            "Open: 'I'd like to discuss something important...'",
            "Share your perspective using 'I' statements",
            "Listen actively: 'Help me understand your perspective'",
            "Find common ground: 'What can we agree on?'",
            "Propose solutions collaboratively",
            "Summarize agreements and next steps",
            "Follow up in writing"
          ]
        }
      ],
      modelDialogue: {
        title: "Conversación de feedback de desempeño",
        context: "Un manager tiene una conversación difícil con un empleado cuyo rendimiento ha bajado",
        dialogue: [
          { speaker: "Manager", text: "Thanks for meeting with me, Sarah. I'd like to discuss something important regarding your recent work.", translation: "Gracias por reunirte conmigo, Sarah. Me gustaría discutir algo importante sobre tu trabajo reciente." },
          { speaker: "Sarah", text: "Sure. Is something wrong?", translation: "Claro. ¿Algo está mal?" },
          { speaker: "Manager", text: "I've noticed that the quality of your reports has changed over the past month. Help me understand what's been happening.", translation: "He notado que la calidad de tus reportes ha cambiado en el último mes. Ayúdame a entender qué ha estado pasando." },
          { speaker: "Sarah", text: "Well, honestly, I've been overwhelmed. The new project was added without removing anything from my plate.", translation: "Bueno, honestamente, he estado abrumada. El nuevo proyecto se agregó sin quitar nada de mi carga." },
          { speaker: "Manager", text: "I hear what you're saying. I hadn't realized the workload had become unmanageable. That's on me.", translation: "Escucho lo que dices. No me había dado cuenta de que la carga de trabajo se había vuelto inmanejable. Eso es culpa mía." },
          { speaker: "Sarah", text: "I wanted to say something but didn't know how.", translation: "Quería decir algo pero no sabía cómo." },
          { speaker: "Manager", text: "I appreciate you being candid now. Let's focus on the issue: what can we do to make this sustainable?", translation: "Agradezco que seas sincera ahora. Enfoquémonos en el problema: ¿qué podemos hacer para que esto sea sostenible?" },
          { speaker: "Sarah", text: "If I could delegate the data entry part, I could focus on analysis.", translation: "Si pudiera delegar la parte de entrada de datos, podría enfocarme en el análisis." },
          { speaker: "Manager", text: "That's a reasonable suggestion. Let me see what I can arrange. In the meantime, which deadline should we adjust?", translation: "Esa es una sugerencia razonable. Déjame ver qué puedo arreglar. Mientras tanto, ¿cuál fecha límite deberíamos ajustar?" },
          { speaker: "Sarah", text: "The monthly report could go back to bi-monthly without affecting stakeholders much.", translation: "El reporte mensual podría volver a ser bimensual sin afectar mucho a los stakeholders." },
          { speaker: "Manager", text: "Agreed. Let's try that. I'll follow up with an email summarizing what we've discussed.", translation: "De acuerdo. Intentemos eso. Te enviaré un email resumiendo lo que hemos discutido." }
        ],
        keyPhrases: [
          { phrase: "I'd like to discuss something important", translation: "Me gustaría discutir algo importante", usage: "Abrir conversación seria" },
          { phrase: "Help me understand", translation: "Ayúdame a entender", usage: "Invitar explicación sin juzgar" },
          { phrase: "I hear what you're saying", translation: "Escucho lo que dices", usage: "Mostrar escucha activa" },
          { phrase: "That's on me", translation: "Eso es culpa mía", usage: "Aceptar responsabilidad" },
          { phrase: "I appreciate you being candid", translation: "Agradezco que seas sincero/a", usage: "Valorar honestidad" },
          { phrase: "Let's focus on the issue", translation: "Enfoquémonos en el problema", usage: "Redirigir a soluciones" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "confrontation", wrong: "con-fron-TA-tion", correct: "/ˌkɒn.frʌnˈteɪ.ʃən/", tip: "con-frun-TAY-shun" },
          { word: "mediate", wrong: "me-DI-ate", correct: "/ˈmiː.di.eɪt/", tip: "MEE-dee-ayt" },
          { word: "candid", wrong: "can-DID", correct: "/ˈkæn.dɪd/", tip: "KAN-did, énfasis en primera sílaba" }
        ],
        intonationPatterns: [
          { pattern: "Softer, lower tone for sensitive topics", example: "I'd like to discuss something↘ important↘", meaning: "Tono suave señala seriedad sin amenaza" },
          { pattern: "Questioning tone to invite dialogue", example: "Help me understand↗?", meaning: "Entonación ascendente invita respuesta" }
        ]
      },
      culturalNote: {
        title: "Directness varies by culture",
        titleEs: "La franqueza varía según la cultura",
        content: "Las culturas difieren en cómo abordan conversaciones difíciles. Las culturas estadounidenses y holandesas tienden a ser más directas ('Let's address this directly'). Las culturas japonesas y tailandesas favorecen enfoques indirectos que preservan la armonía. En América Latina, la relación personal importa mucho—es más fácil tener conversaciones difíciles después de establecer rapport. Adapta tu enfoque: con colegas americanos, ve al grano; con asiáticos, puede ser más apropiado un enfoque gradual.",
        contentEs: "Las culturas difieren en cómo abordan conversaciones difíciles. Adapta tu enfoque según la cultura de tu interlocutor."
      },
      consolidationQuiz: [
        {
          question: "¿Por qué evitar 'You always...' en conversaciones difíciles?",
          options: [
            "Es gramaticalmente incorrecto",
            "Suena acusatorio y pone a la otra persona a la defensiva",
            "Es muy informal",
            "Solo se usa en inglés británico"
          ],
          correctAnswer: 1,
          explanation: "'You always' generaliza y acusa; 'I've noticed that' describe sin atacar"
        },
        {
          question: "¿Por qué las conversaciones difíciles no deben ser por email?",
          options: [
            "El email no es profesional",
            "El email no transmite tono; las conversaciones difíciles necesitan comunicación no verbal",
            "Los emails se pueden borrar",
            "Es ilegal en algunos países"
          ],
          correctAnswer: 1,
          explanation: "Sin tono ni expresión facial, el email puede malinterpretarse fácilmente"
        },
        {
          question: "'Help me understand...' es útil porque:",
          options: [
            "Muestra que eres el jefe",
            "Invita a la otra persona a explicar sin sentirse atacada",
            "Termina la conversación",
            "Es obligatorio en HR"
          ],
          correctAnswer: 1,
          explanation: "Es una pregunta abierta y no amenazante que invita diálogo"
        },
        {
          question: "¿Cuál es el objetivo de una conversación difícil?",
          options: [
            "Ganar la discusión",
            "Demostrar que tenías razón",
            "Llegar a un entendimiento mutuo y resolución",
            "Documentar para recursos humanos"
          ],
          correctAnswer: 2,
          explanation: "El objetivo es resolver, no ganar; si 'ganas', puedes perder la relación"
        },
        {
          question: "'Let's focus on the issue, not the person' ayuda a:",
          options: [
            "Ignorar a la persona",
            "Mantener la conversación constructiva y evitar ataques personales",
            "Cambiar de tema",
            "Terminar la reunión"
          ],
          correctAnswer: 1,
          explanation: "Separar el problema de la persona mantiene la discusión profesional"
        },
        {
          question: "Después de una conversación difícil, deberías:",
          options: [
            "Olvidar todo y seguir adelante",
            "Enviar un resumen escrito de los acuerdos y próximos pasos",
            "Evitar a la persona por una semana",
            "Reportar inmediatamente a HR"
          ],
          correctAnswer: 1,
          explanation: "El seguimiento escrito asegura claridad y crea registro de los acuerdos"
        }
      ],
      guidedProduction: [
        {
          prompt: "Prepara y conduce una conversación de feedback negativo",
          sampleResponse: "Preparation notes:\n- Objective: Address missed deadlines without damaging relationship\n- Facts: 3 deadlines missed in past month\n- Desired outcome: Understand cause, agree on solution\n- Timing: Private office, after morning coffee, when she's not rushed\n\n[Conversation]\nMe: 'Hi Maria. Thanks for making time. I'd like to discuss something important regarding our recent project timelines.'\n\nMaria: 'Is this about the deadlines?'\n\nMe: 'Yes. I've noticed that the last three deliverables have come in after the agreed dates. Help me understand what's been happening—I want to make sure you have what you need to succeed.'\n\nMaria: 'Honestly, the requirements keep changing mid-project. By the time I adjust, I'm already behind.'\n\nMe: 'I hear what you're saying. That must be frustrating. Let's focus on the issue: how can we better manage scope changes?'\n\nMaria: 'A weekly 15-minute sync would help me flag issues earlier.'\n\nMe: 'That's a good idea. Let's try that. I'll also work with stakeholders on freezing requirements earlier. Can we agree that if you foresee a delay, you'll flag it at least 3 days before the deadline?'\n\nMaria: 'That's fair.'\n\nMe: 'Great. I'll send an email summarizing what we discussed. I appreciate your honesty today.'"
        },
        {
          prompt: "Maneja una conversación donde alguien está muy emocional",
          sampleResponse: "[Scenario: Team member is upset about not being promoted]\n\nTom: [visibly upset] 'This is completely unfair! I've worked here for 5 years and Sarah gets promoted after 2!'\n\nMe: 'Tom, I can see you're upset, and I want to hear you out. Can we sit down and talk about this?'\n\nTom: 'What's there to talk about? The decision's been made.'\n\nMe: 'I understand it feels that way right now. I'd still like to discuss your career path with you. Can we do that?'\n\nTom: [sighs] 'Fine.'\n\nMe: 'First, I want to acknowledge your feelings. Being passed over for promotion is disappointing, especially after your years of dedication. Those feelings are valid.'\n\nTom: 'It just feels like my contributions don't matter.'\n\nMe: 'Help me understand that better. What contributions do you feel aren't being recognized?'\n\nTom: 'I've trained half the team. I've covered for people on leave. I took on the systems project that nobody wanted.'\n\nMe: 'Those are significant contributions, and they're noticed. The promotion decision wasn't about your value—it was about specific skills Sarah brings to that particular role. That said, I hear that you want to advance. What can we agree on as next steps for your development?'\n\nTom: 'I want a clear path to the next level.'\n\nMe: 'Let's create that. I'll schedule a follow-up meeting this week to map out specific milestones. And Tom—I appreciate you being candid with me about how you feel.'"
        },
        {
          prompt: "Conversa con un colega cuyo comportamiento afecta al equipo",
          sampleResponse: "[Scenario: Colleague interrupts others in meetings]\n\nMe: 'James, do you have a few minutes? I'd like to discuss something I've observed in our team meetings.'\n\nJames: 'Sure, what's up?'\n\nMe: 'I've noticed a pattern in our discussions, and I wanted to share my perspective. In the last few meetings, when others are speaking, I've seen them get interrupted before finishing their points.'\n\nJames: 'Are you saying I interrupt people?'\n\nMe: 'I'm sharing what I've observed, and yes, it has happened a few times. I'm not saying it's intentional—you have great ideas and you're enthusiastic. But I've noticed that some team members have stopped contributing as much.'\n\nJames: 'I had no idea. I just get excited about the discussion.'\n\nMe: 'I understand that, and your energy is valuable. I'm raising this because I think it's affecting how comfortable people feel sharing their ideas. What do you think?'\n\nJames: 'I mean... now that you mention it, maybe I do jump in too quickly sometimes.'\n\nMe: 'Awareness is the first step. Would you be open to trying something? In our next meeting, maybe wait three seconds after someone finishes before responding.'\n\nJames: 'Three seconds... I can try that.'\n\nMe: 'Thanks for being open to this feedback. Let me know how it goes, and let's check in after next week's meeting.'"
        },
        {
          prompt: "Aborda un tema delicado con tu jefe",
          sampleResponse: "[Scenario: Need to tell your boss their new initiative isn't working]\n\nMe: 'Hi Marcus, I was hoping to get 15 minutes on your calendar. I'd like to discuss something about the new customer service initiative.'\n\nMarcus: 'Sure. Is there a problem?'\n\nMe: 'I want to share some observations and get your thoughts. Can we sit down?'\n\n[In meeting]\n\nMe: 'First, I want to say that I understand the goals behind the new initiative—faster response times and higher satisfaction scores. I support those goals.'\n\nMarcus: 'Good. So what's the issue?'\n\nMe: 'I've collected some data over the past three weeks. While response times have improved by 20%, our satisfaction scores have actually dropped 15%. I have some theories about why, but I wanted to discuss it with you first.'\n\nMarcus: 'Hmm. That's concerning. What do you think is happening?'\n\nMe: 'I have reservations about saying this, because I know you put a lot of work into this initiative. But the data suggest that speed without quality isn't what customers want. They'd rather wait an extra hour for a complete solution than get a quick partial answer.'\n\nMarcus: 'That's... not what I expected. Why didn't anyone raise this earlier?'\n\nMe: 'I think people were hesitant. I'm raising it now because I believe you'd want to know. What I'd propose is a small pilot where we test quality-first responses with one team, measure the results, and compare.'\n\nMarcus: 'Okay. Let's try that. Thank you for bringing this to me directly.'"
        }
      ],
      connectionToPrevious: "La claridad de la escritura técnica te ayuda a documentar acuerdos después de conversaciones difíciles.",
      connectionToNext: "Expresar duda y certeza te ayudará a navegar las afirmaciones durante conversaciones sensibles."
    },
    {
      id: 10,
      title: "Expressing Doubt and Certainty",
      titleEs: "Expresando Duda y Certeza",
      introduction: {
        title: "🎯 Expresando Duda y Certeza",
        explanation: "Expresar diferentes grados de certeza es crucial para comunicación precisa. Aprenderás a matizar tus afirmaciones apropiadamente.",
        keyPoints: [
          "Certeza alta: 'I'm absolutely certain', 'There's no doubt that', 'Undoubtedly'",
          "Certeza media: 'I'm fairly confident', 'In all likelihood', 'It appears that'",
          "Duda: 'I'm not entirely sure', 'It remains to be seen', 'I have reservations'",
          "Verbos modales: must (casi seguro), might/could (posible), can't (imposible)",
          "Evidencialidad: 'reportedly', 'allegedly', 'according to sources'"
        ],
        examples: [
          { english: "I'm fairly confident that we'll meet the deadline.", spanish: "Estoy bastante seguro de que cumpliremos con la fecha límite.", explanation: "Certeza media" },
          { english: "Allegedly, the competitor is planning a major acquisition.", spanish: "Presuntamente, el competidor está planeando una adquisición importante.", explanation: "Información no confirmada" },
          { english: "It remains to be seen whether this strategy will work.", spanish: "Queda por ver si esta estrategia funcionará.", explanation: "Resultado incierto" }
        ],
        tips: [
          "💡 'Allegedly' protege de responsabilidad legal",
          "💡 En ciencia: 'suggests' es más débil que 'shows'",
          "💡 'It would appear' es más tentativo que 'It appears'"
        ],
        whenToUse: [
          "En informes ejecutivos: \"I'm fairly confident that we'll meet the deadline\"",
          "En comunicados corporativos: \"Allegedly, the competitor is planning a major acquisition\"",
          "En análisis de mercado: \"It remains to be seen whether this strategy will work\"",
          "En informes de investigación: \"The evidence suggests...\" en vez de \"I think\""
        ],
        whenNotToUse: [
          "En promesas a clientes → \"Allegedly\" suena evasivo: si tienes datos, usa \"According to...\"",
          "En ventas o pitches → \"It remains to be seen\" suena inseguro: proyecta confianza cuando sea apropiado",
          "En conversaciones casuales → \"It would appear\" suena pedante: usa \"It seems\" o \"Maybe\""
        ]
      },
      objectives: ["Expresar diferentes grados de certeza", "Usar modales para probabilidad", "Calificar afirmaciones apropiadamente"],
      estimatedMinutes: 30,
      grammarTheoryIds: ["c1-hedging"],
      vocabulary: {
        nouns: [
          { id: "l9t10_n1", word: "certainty", translation: "certeza", type: "noun", definition: "being sure", definitionEs: "estar seguro", example: "I can say with certainty that...", exampleEs: "Puedo decir con certeza que...", related: ["certain"], difficulty: 1 },
          { id: "l9t10_n2", word: "doubt", translation: "duda", type: "noun", definition: "uncertainty", definitionEs: "incertidumbre", example: "I have some doubts about this.", exampleEs: "Tengo algunas dudas sobre esto.", related: ["doubtful"], difficulty: 1 },
          { id: "l9t10_n3", word: "likelihood", translation: "probabilidad", type: "noun", definition: "probability", definitionEs: "probabilidad", example: "What's the likelihood of success?", exampleEs: "¿Cuál es la probabilidad de éxito?", related: ["likely"], difficulty: 2 },
        ],
        verbs: [
          { id: "l9t10_v1", word: "appear", translation: "parecer", type: "verb", definition: "to seem", definitionEs: "parecer", example: "It appears that we're on track.", exampleEs: "Parece que vamos por buen camino.", related: [], difficulty: 1 },
          { id: "l9t10_v2", word: "suggest", translation: "sugerir", type: "verb", definition: "to indicate", definitionEs: "indicar", example: "The data suggest a correlation.", exampleEs: "Los datos sugieren una correlación.", related: [], difficulty: 1 },
          { id: "l9t10_v3", word: "confirm", translation: "confirmar", type: "verb", definition: "to verify", definitionEs: "verificar", example: "Can you confirm this?", exampleEs: "¿Puedes confirmar esto?", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l9t10_a1", word: "certain", translation: "seguro", type: "adjective", definition: "sure", definitionEs: "seguro", example: "I'm certain about this.", exampleEs: "Estoy seguro de esto.", related: [], difficulty: 1 },
          { id: "l9t10_a2", word: "doubtful", translation: "dudoso", type: "adjective", definition: "uncertain", definitionEs: "incierto", example: "The outcome is doubtful.", exampleEs: "El resultado es dudoso.", related: [], difficulty: 1 },
          { id: "l9t10_a3", word: "tentative", translation: "tentativo", type: "adjective", definition: "not certain", definitionEs: "no seguro", example: "This is a tentative conclusion.", exampleEs: "Esta es una conclusión tentativa.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l9t10_e1", word: "There's no doubt that...", translation: "No hay duda de que...", type: "expression", definition: "high certainty", definitionEs: "alta certeza", example: "There's no doubt that this will succeed.", exampleEs: "No hay duda de que esto tendrá éxito.", related: [], difficulty: 1 },
          { id: "l9t10_e2", word: "In all likelihood...", translation: "Con toda probabilidad...", type: "expression", definition: "probably", definitionEs: "probablemente", example: "In all likelihood, they'll accept.", exampleEs: "Con toda probabilidad, aceptarán.", related: [], difficulty: 2 },
          { id: "l9t10_e3", word: "It remains to be seen...", translation: "Queda por ver...", type: "expression", definition: "uncertain outcome", definitionEs: "resultado incierto", example: "It remains to be seen if this works.", exampleEs: "Queda por ver si esto funciona.", related: [], difficulty: 1 },
          { id: "l9t10_e4", word: "I have reservations about...", translation: "Tengo reservas sobre...", type: "expression", definition: "expressing doubt", definitionEs: "expresando duda", example: "I have reservations about this approach.", exampleEs: "Tengo reservas sobre este enfoque.", related: [], difficulty: 1 },
          { id: "l9t10_e5", word: "Allegedly / Reportedly", translation: "Presuntamente / Según se informa", type: "expression", definition: "unconfirmed information", definitionEs: "información no confirmada", example: "Reportedly, the deal fell through.", exampleEs: "Según se informa, el trato fracasó.", related: [], difficulty: 2 },
        ],
        adverbs: [
          { id: "l9t10_adv1", word: "undoubtedly", translation: "indudablemente", type: "adverb", definition: "without doubt", definitionEs: "sin duda", example: "This is undoubtedly the best option.", exampleEs: "Esta es indudablemente la mejor opción.", related: [], difficulty: 2 },
          { id: "l9t10_adv2", word: "presumably", translation: "presumiblemente", type: "adverb", definition: "probably", definitionEs: "probablemente", example: "They will presumably agree.", exampleEs: "Presumiblemente estarán de acuerdo.", related: [], difficulty: 2 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t10_cm1", wrong: "Overusing 'I'm sure' when you're not 100% certain", correct: "Use degrees: 'I'm fairly confident', 'I believe', 'It appears that'", explanation: "Saying 'I'm sure' when it later proves false damages your credibility", explanationEs: "Decir 'I'm sure' cuando luego resulta falso daña tu credibilidad", category: "usage" },
        { id: "l9t10_cm2", wrong: "'Must' for certainty vs 'must' for obligation", correct: "'Must be' (deduction) vs 'must do' (obligation). 'He must be tired' (certainty) vs 'He must study' (obligation)", explanation: "Context determines meaning; be careful with ambiguity", explanationEs: "El contexto determina el significado; ten cuidado con la ambigüedad", category: "grammar" },
        { id: "l9t10_cm3", wrong: "Using 'allegedly' in formal reports without legal context", correct: "In business: 'reportedly' or 'according to sources'; 'allegedly' has legal connotations", explanation: "'Allegedly' implies possible illegal activity; 'reportedly' is more neutral", explanationEs: "'Allegedly' implica posible actividad ilegal; 'reportedly' es más neutral", category: "vocabulary" },
        { id: "l9t10_cm4", wrong: "'Perhaps' and 'maybe' in professional writing", correct: "Use more formal equivalents: 'It is possible that...', 'There is a possibility that...'", explanation: "'Maybe' is informal; in professional documents use more formal alternatives", explanationEs: "'Maybe' es informal; en documentos profesionales usa alternativas más formales", category: "usage" },
        { id: "l9t10_cm5", wrong: "Absolute certainty in uncertain situations: 'This will definitely work'", correct: "Hedge appropriately: 'This is likely to work', 'Based on our analysis, this should work'", explanation: "Proclaiming absolute certainty when there is uncertainty is unprofessional", explanationEs: "Proclamar certeza absoluta cuando hay incertidumbre es poco profesional", category: "usage" }
      ],
      exercises: [
        {
          type: "matching",
          instruction: "Empareja la expresión con su nivel de certeza",
          items: [
            { expression: "I'm absolutely certain", level: "100% certain" },
            { expression: "There's no doubt that", level: "Very high certainty (95%+)" },
            { expression: "In all likelihood", level: "High probability (80-90%)" },
            { expression: "It appears that", level: "Moderate certainty (60-70%)" },
            { expression: "I have reservations", level: "Doubt (40-50%)" },
            { expression: "It remains to be seen", level: "Uncertain (outcome unknown)" },
            { expression: "It's highly unlikely", level: "Low probability (10-20%)" }
          ]
        },
        {
          type: "transformation",
          instruction: "Ajusta el nivel de certeza según el contexto",
          items: [
            {
              context: "You have solid data supporting your claim",
              weak: "Maybe this could work.",
              strong: "The data strongly suggest this approach will succeed.",
              principle: "Match certainty to evidence"
            },
            {
              context: "You're speculating without hard data",
              overconfident: "This will definitely be a hit.",
              appropriate: "Based on preliminary indicators, this appears promising, though further analysis is needed.",
              principle: "Hedge when evidence is limited"
            },
            {
              context: "Reporting what you heard from an unverified source",
              wrong: "The company is closing next month.",
              correct: "Reportedly, the company may be closing next month, though this hasn't been officially confirmed.",
              principle: "Use evidential markers for unverified info"
            },
            {
              context: "Making a scientific conclusion",
              wrong: "This proves that X causes Y.",
              correct: "These findings suggest a correlation between X and Y. Further research is needed to establish causality.",
              principle: "Scientific writing requires careful hedging"
            }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa con la expresión de certeza apropiada",
          items: [
            { sentence: "_____ confident that we'll close the deal by Friday.", answer: "I'm fairly", hint: "bastante seguro" },
            { sentence: "The CEO is _____ planning to retire, though nothing official yet.", answer: "reportedly", hint: "según se informa" },
            { sentence: "In all _____, the project will be delayed.", answer: "likelihood", hint: "probabilidad" },
            { sentence: "It _____ to be seen whether this strategy will work.", answer: "remains", hint: "queda por" },
            { sentence: "I have _____ about the proposed timeline.", answer: "reservations", hint: "dudas formales" },
            { sentence: "This is _____ the best option we have.", answer: "undoubtedly", hint: "sin duda" }
          ]
        },
        {
          type: "modal-selection",
          instruction: "Elige el modal correcto para expresar el grado de certeza",
          items: [
            {
              context: "You're 95% sure your colleague is sick (deduction)",
              sentence: "He _____ be sick. He never misses meetings.",
              options: ["must", "might", "could", "can't"],
              answer: "must",
              explanation: "'Must' expresa deducción lógica con alta certeza"
            },
            {
              context: "There's a small possibility the train is delayed",
              sentence: "The train _____ be delayed due to the snow.",
              options: ["must", "might", "will", "can't"],
              answer: "might",
              explanation: "'Might' expresa posibilidad, no certeza"
            },
            {
              context: "You're certain something is impossible",
              sentence: "That _____ be right. The numbers don't add up.",
              options: ["must", "might", "could", "can't"],
              answer: "can't",
              explanation: "'Can't' expresa certeza de que algo es imposible"
            },
            {
              context: "Making a prediction based on trends",
              sentence: "Based on current trends, prices _____ increase next quarter.",
              options: ["must", "should", "might", "can't"],
              answer: "should",
              explanation: "'Should' expresa expectativa basada en evidencia"
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Discusión de pronósticos con diferentes niveles de certeza",
        context: "Equipo de liderazgo discute proyecciones para el próximo año",
        dialogue: [
          { speaker: "CEO", text: "What's the likelihood that we'll hit our revenue targets next year?", translation: "¿Cuál es la probabilidad de que alcancemos nuestras metas de ingresos el próximo año?" },
          { speaker: "CFO", text: "I'm fairly confident about Q1 and Q2—the pipeline is solid. There's no doubt that our core products will perform.", translation: "Estoy bastante confiado sobre Q1 y Q2—el pipeline es sólido. No hay duda de que nuestros productos principales rendirán." },
          { speaker: "VP Sales", text: "I agree. Q3 is where I have some reservations. It remains to be seen how the new competitor will impact the market.", translation: "Estoy de acuerdo. Q3 es donde tengo algunas reservas. Queda por ver cómo el nuevo competidor impactará el mercado." },
          { speaker: "CEO", text: "What's your best estimate for Q3?", translation: "¿Cuál es tu mejor estimación para Q3?" },
          { speaker: "VP Sales", text: "In all likelihood, we'll be 10-15% below target. But this is tentative—there are too many unknowns.", translation: "Con toda probabilidad, estaremos 10-15% por debajo del objetivo. Pero esto es tentativo—hay demasiadas incógnitas." },
          { speaker: "CMO", text: "I've heard—reportedly—that the competitor is planning a price war. If true, our margins could be significantly impacted.", translation: "He escuchado—según se informa—que el competidor está planeando una guerra de precios. Si es verdad, nuestros márgenes podrían verse significativamente impactados." },
          { speaker: "CFO", text: "That's concerning. How reliable is that information?", translation: "Eso es preocupante. ¿Qué tan confiable es esa información?" },
          { speaker: "CMO", text: "It's from a trade publication—I'd say moderate reliability. We can't confirm it, but it's consistent with their recent behavior.", translation: "Es de una publicación comercial—diría que confiabilidad moderada. No podemos confirmarlo, pero es consistente con su comportamiento reciente." },
          { speaker: "CEO", text: "So our forecast should reflect this uncertainty. What probability would you assign?", translation: "Entonces nuestro pronóstico debería reflejar esta incertidumbre. ¿Qué probabilidad asignarían?" },
          { speaker: "CFO", text: "I'd estimate a 60% chance of meeting full-year targets, 30% chance of being 10% below, and 10% chance of exceeding expectations if the competitor stumbles.", translation: "Estimaría 60% de probabilidad de cumplir metas anuales, 30% de estar 10% debajo, y 10% de superar expectativas si el competidor tropieza." }
        ],
        keyPhrases: [
          { phrase: "I'm fairly confident", translation: "Estoy bastante confiado", usage: "Certeza moderada-alta" },
          { phrase: "There's no doubt that", translation: "No hay duda de que", usage: "Certeza muy alta" },
          { phrase: "I have reservations", translation: "Tengo reservas", usage: "Expresar duda educada" },
          { phrase: "It remains to be seen", translation: "Queda por ver", usage: "Resultado incierto" },
          { phrase: "In all likelihood", translation: "Con toda probabilidad", usage: "Probable pero no seguro" },
          { phrase: "Reportedly", translation: "Según se informa", usage: "Información no confirmada" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "allegedly", wrong: "a-le-GED-ly", correct: "/əˈledʒ.ɪd.li/", tip: "uh-LEJ-id-lee" },
          { word: "presumably", wrong: "pre-su-MA-bly", correct: "/prɪˈzjuː.mə.bli/", tip: "pri-ZYOO-muh-blee" },
          { word: "tentative", wrong: "ten-TA-tive", correct: "/ˈten.tə.tɪv/", tip: "TEN-tuh-tiv" }
        ],
        intonationPatterns: [
          { pattern: "Falling tone for certainty", example: "There's no doubt↘", meaning: "Tono descendente = confianza" },
          { pattern: "Rising tone for uncertainty", example: "It remains to be seen↗?", meaning: "Tono ascendente = incertidumbre" },
          { pattern: "Hedging phrases said quickly", example: "reportedly-speaking", meaning: "Las frases hedge se dicen más rápido" }
        ]
      },
      culturalNote: {
        title: "Certeza y cultura profesional",
        titleEs: "Certeza y cultura profesional",
        content: "Las culturas difieren en cómo expresan certeza. Los estadounidenses tienden a expresar más confianza ('We will succeed'). Los británicos y escandinavos prefieren más hedging ('We should likely succeed'). En contextos académicos, el exceso de certeza se ve como falta de rigor; en ventas, puede ser esperado. En contextos legales, palabras como 'allegedly' y 'reportedly' protegen contra difamación. Adapta tu nivel de certeza al contexto: más hedging en ciencia, más confianza en pitch de ventas, precisión legal en documentos oficiales.",
        contentEs: "Las culturas difieren en cómo expresan certeza. Adapta tu nivel de certeza al contexto: más hedging en ciencia, más confianza en pitch de ventas."
      },
      consolidationQuiz: [
        {
          question: "¿Cuál expresa mayor certeza?",
          options: [
            "It might work",
            "It could work",
            "It will undoubtedly work",
            "It appears to work"
          ],
          correctAnswer: 2,
          explanation: "'Undoubtedly' = sin duda, la certeza más alta"
        },
        {
          question: "'Reportedly' se usa cuando:",
          options: [
            "Estás 100% seguro",
            "La información viene de una fuente no confirmada",
            "Quieres enfatizar",
            "Es un hecho científico"
          ],
          correctAnswer: 1,
          explanation: "'Reportedly' indica que la información viene de fuentes secundarias no verificadas"
        },
        {
          question: "'He must be tired' expresa:",
          options: [
            "Obligación (debe estar cansado = es su deber)",
            "Deducción lógica (debe estar cansado = es la conclusión lógica)",
            "Posibilidad",
            "Imposibilidad"
          ],
          correctAnswer: 1,
          explanation: "'Must be' + adjective expresa deducción, no obligación"
        },
        {
          question: "¿Cuál es más apropiada para un informe científico?",
          options: [
            "This proves that X causes Y.",
            "The data suggest a correlation between X and Y.",
            "X definitely causes Y.",
            "I'm sure X causes Y."
          ],
          correctAnswer: 1,
          explanation: "La ciencia usa hedging cuidadoso; 'suggest' es más apropiado que 'prove'"
        },
        {
          question: "'I have reservations about' significa:",
          options: [
            "Tengo una reservación de hotel",
            "Tengo dudas o preocupaciones educadas",
            "Estoy completamente seguro",
            "No tengo opinión"
          ],
          correctAnswer: 1,
          explanation: "'Reservations' en este contexto significa dudas o preocupaciones, no reservaciones"
        },
        {
          question: "¿Cuándo usar 'allegedly' vs 'reportedly'?",
          options: [
            "Son idénticos",
            "'Allegedly' tiene connotación legal/criminal; 'reportedly' es más neutral",
            "'Reportedly' es más formal",
            "'Allegedly' es para ciencia"
          ],
          correctAnswer: 1,
          explanation: "'Allegedly' implica posible actividad ilegal; 'reportedly' es neutral"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un análisis de mercado con diferentes niveles de certeza para distintas predicciones",
          sampleResponse: "Market Analysis: Q4 Outlook\n\nCertain factors (high confidence):\nThere's no doubt that holiday season will drive retail sales. Historical data consistently shows a 35-40% increase in consumer spending during this period.\n\nLikely outcomes (moderate-high confidence):\nIn all likelihood, e-commerce will continue to gain market share from brick-and-mortar retail. Current trends suggest a 15-20% growth in online transactions. We're fairly confident this will materialize given the infrastructure investments made this year.\n\nUncertain factors (moderate confidence):\nIt remains to be seen how inflation will affect consumer behavior. The data appear to suggest some pullback in discretionary spending, though this is tentative. Consumer sentiment surveys indicate a possible shift toward value brands.\n\nSpeculative elements (low confidence):\nReportedly, our main competitor is planning a major promotional campaign in November. If true, this might pressure our margins. However, we can't confirm this information.\n\nConclusion:\nWe are confident about overall market growth but have reservations about margin protection. I'd estimate a 70% probability of meeting targets, with significant variance depending on competitive dynamics."
        },
        {
          prompt: "Responde a una pregunta directa cuando no tienes toda la información",
          sampleResponse: "Question: 'Will the project be completed on time?'\n\nResponse:\n'That's a fair question, and I want to be honest with you about where we stand.\n\nI'm fairly confident that the core deliverables will be ready by the deadline. There's no doubt that the team has the capability—they've delivered on tighter timelines before.\n\nThat said, I have some reservations about two specific components. The API integration appears to be more complex than initially scoped, and it remains to be seen whether our vendor will deliver their part on time. Reportedly, they're experiencing some staffing issues, though I can't confirm that.\n\nIn all likelihood, we'll complete 90% on schedule. The remaining 10% might slip by a week. I'd estimate the probability of full on-time delivery at about 65%.\n\nWhat I can say with certainty is that I'll flag any risks immediately as they emerge. Would you like me to provide weekly risk updates?'"
        },
        {
          prompt: "Comunica un resultado negativo mientras gestionas expectativas sobre el futuro",
          sampleResponse: "Team,\n\nI want to share an update on our Q3 results and outlook.\n\nThe facts: We fell short of our target by 8%. This is undoubtedly disappointing, and I won't sugarcoat it.\n\nHowever, I'd like to provide some context. The shortfall appears to be primarily driven by two factors: delayed product launch (accounting for approximately 5%) and unexpected competitive pressure (approximately 3%). These findings are tentative and our analysis is ongoing.\n\nLooking ahead:\nI'm fairly confident that Q4 will show improvement. The product is now launched and early feedback is positive. There's no doubt that demand exists—our pipeline is the strongest it's been all year.\n\nThat said, I have reservations about whether we can fully recover the Q3 gap this quarter. In all likelihood, we'll close approximately 75% of the shortfall, which would put us 2% below annual target.\n\nIt remains to be seen how the market will respond to our new pricing strategy. Presumably, we'll have clearer signals within 3-4 weeks.\n\nI'm not in a position to guarantee results, but I can tell you with certainty that the team is executing well and our fundamentals are sound.\n\nLet's discuss questions in tomorrow's call."
        },
        {
          prompt: "Distingue hechos de suposiciones en una presentación ejecutiva",
          sampleResponse: "Executive Summary: Competitor Analysis\n\n[CONFIRMED FACTS]\nThe following information is verified:\n- Competitor X launched their new product line on September 15\n- Their pricing is 12% below ours on comparable SKUs\n- They have expanded their sales team by 25 positions (per LinkedIn data)\n\n[HIGH-CONFIDENCE ASSESSMENTS]\nBased on reliable market intelligence:\n- There's no doubt that they're targeting our enterprise segment\n- In all likelihood, they'll achieve 5-8% market penetration in Q4\n- Their technology appears to be comparable to ours, though not superior\n\n[MODERATE-CONFIDENCE ASSESSMENTS]\nBased on secondary sources and pattern analysis:\n- It appears that they're planning international expansion in Q2 next year\n- The data suggest they may be operating at a loss to gain market share\n- I'm fairly confident their strategy prioritizes growth over profitability\n\n[UNVERIFIED / SPECULATIVE]\nThe following should be treated as speculation:\n- Reportedly, they're in acquisition talks with Company Y (source: trade press, unconfirmed)\n- Allegedly, they've had significant engineering turnover (source: anonymous Glassdoor reviews)\n- It remains to be seen whether their funding will sustain current burn rate\n\n[RECOMMENDATIONS]\nGiven the above, I recommend we take certain defensive measures while acknowledging the uncertainty in our projections. We should monitor closely and adjust our strategy as new information emerges."
        }
      ],
      connectionToPrevious: "La precisión en expresar duda y certeza complementa las habilidades de conversaciones difíciles que aprendiste.",
      connectionToNext: "Las habilidades de ciencia y medio ambiente te permitirán comunicar con autoridad en contextos ambientales y académicos."
    },
    {
      id: 11,
      title: "Science, Environment and Sustainability",
      titleEs: "Ciencia, Medio Ambiente y Sostenibilidad",
      introduction: {
        title: "🌍 Ciencia, Medio Ambiente y Sostenibilidad",
        explanation: "El discurso científico y ambiental requiere precisión, vocabulario técnico accesible y la capacidad de comunicar datos complejos de forma clara. Aprenderás a discutir temas ambientales con autoridad.",
        keyPoints: [
          "Vocabulario ambiental: 'carbon footprint', 'renewable energy', 'biodiversity', 'sustainability'",
          "Expresar causa-efecto: 'This leads to...', 'As a consequence...', 'The root cause is...'",
          "Citar datos: 'According to recent studies...', 'Data suggests that...', 'Research indicates...'",
          "Proponer soluciones: 'One viable approach would be...', 'It is imperative that we...'"
        ],
        examples: [
          { english: "According to recent data, global temperatures have risen by 1.1°C since pre-industrial times.", spanish: "Según datos recientes, las temperaturas globales han aumentado 1.1°C desde tiempos preindustriales.", explanation: "Citando datos científicos" },
          { english: "Deforestation leads to biodiversity loss, which in turn disrupts entire ecosystems.", spanish: "La deforestación lleva a la pérdida de biodiversidad, lo que a su vez altera ecosistemas enteros.", explanation: "Cadena de causa-efecto" },
          { english: "One viable approach would be to invest heavily in renewable energy infrastructure.", spanish: "Un enfoque viable sería invertir fuertemente en infraestructura de energía renovable.", explanation: "Proponiendo soluciones" }
        ],
        tips: [
          "💡 'Carbon neutral' ≠ 'carbon negative': neutral = emisiones compensadas, negative = se absorbe más CO₂ del que se emite",
          "💡 Usa 'data suggests' (plural informal) o 'the data suggest' (plural formal) — ambos son aceptables",
          "💡 Evita 'I believe' en discurso científico; prefiere 'Evidence indicates' o 'Research demonstrates'"
        ],
        whenToUse: [
          "En presentaciones académicas o profesionales sobre medio ambiente",
          "Al escribir ensayos, artículos o informes sobre sostenibilidad",
          "En debates sobre política ambiental o energética",
          "Al comunicar hallazgos científicos a audiencias no especializadas"
        ],
        whenNotToUse: [
          "No uses jerga científica excesiva en conversaciones casuales",
          "Evita citar datos sin fuente — suena poco creíble en contextos formales",
          "No uses 'I think' cuando puedes respaldar tu punto con evidencia"
        ]
      },
      objectives: ["Dominar vocabulario ambiental y científico", "Comunicar relaciones causa-efecto complejas", "Citar datos y proponer soluciones con autoridad"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-complex-noun-phrases"],
      vocabulary: {
        nouns: [
          { id: "l9t11_n1", word: "carbon footprint", translation: "huella de carbono", type: "noun", definition: "total greenhouse gas emissions", definitionEs: "total de emisiones de gases de efecto invernadero", example: "We need to reduce our carbon footprint.", exampleEs: "Necesitamos reducir nuestra huella de carbono.", related: ["emissions"], difficulty: 2 },
          { id: "l9t11_n2", word: "biodiversity", translation: "biodiversidad", type: "noun", definition: "variety of life in an ecosystem", definitionEs: "variedad de vida en un ecosistema", example: "Biodiversity loss threatens food security.", exampleEs: "La pérdida de biodiversidad amenaza la seguridad alimentaria.", related: ["ecosystem"], difficulty: 2 },
          { id: "l9t11_n3", word: "sustainability", translation: "sostenibilidad", type: "noun", definition: "meeting needs without compromising the future", definitionEs: "satisfacer necesidades sin comprometer el futuro", example: "Sustainability is a corporate priority.", exampleEs: "La sostenibilidad es una prioridad corporativa.", related: ["sustainable"], difficulty: 2 },
          { id: "l9t11_n4", word: "renewable energy", translation: "energía renovable", type: "noun", definition: "energy from natural sources that replenish", definitionEs: "energía de fuentes naturales que se renuevan", example: "Solar is a form of renewable energy.", exampleEs: "La solar es una forma de energía renovable.", related: ["solar", "wind"], difficulty: 1 },
          { id: "l9t11_n5", word: "deforestation", translation: "deforestación", type: "noun", definition: "clearing of forests", definitionEs: "tala de bosques", example: "Deforestation accelerates climate change.", exampleEs: "La deforestación acelera el cambio climático.", related: [], difficulty: 2 }
        ],
        verbs: [
          { id: "l9t11_v1", word: "mitigate", translation: "mitigar", type: "verb", definition: "to reduce severity", definitionEs: "reducir la gravedad", example: "We must mitigate the effects of pollution.", exampleEs: "Debemos mitigar los efectos de la contaminación.", related: ["mitigation"], difficulty: 2 },
          { id: "l9t11_v2", word: "conserve", translation: "conservar", type: "verb", definition: "to protect from harm", definitionEs: "proteger del daño", example: "We need to conserve natural resources.", exampleEs: "Necesitamos conservar los recursos naturales.", related: ["conservation"], difficulty: 1 },
          { id: "l9t11_v3", word: "deplete", translation: "agotar", type: "verb", definition: "to use up completely", definitionEs: "usar completamente", example: "Fossil fuels are being depleted rapidly.", exampleEs: "Los combustibles fósiles se están agotando rápidamente.", related: ["depletion"], difficulty: 2 },
          { id: "l9t11_v4", word: "emit", translation: "emitir", type: "verb", definition: "to release into the environment", definitionEs: "liberar al medio ambiente", example: "Factories emit greenhouse gases.", exampleEs: "Las fábricas emiten gases de efecto invernadero.", related: ["emissions"], difficulty: 1 }
        ],
        adjectives: [
          { id: "l9t11_a1", word: "sustainable", translation: "sostenible", type: "adjective", definition: "able to be maintained long-term", definitionEs: "que puede mantenerse a largo plazo", example: "We need sustainable practices.", exampleEs: "Necesitamos prácticas sostenibles.", related: [], difficulty: 1 },
          { id: "l9t11_a2", word: "renewable", translation: "renovable", type: "adjective", definition: "able to be replenished naturally", definitionEs: "que puede reponerse naturalmente", example: "Solar power is a renewable resource.", exampleEs: "La energía solar es un recurso renovable.", related: [], difficulty: 1 },
          { id: "l9t11_a3", word: "endangered", translation: "en peligro de extinción", type: "adjective", definition: "at risk of dying out", definitionEs: "en riesgo de desaparecer", example: "Many species are endangered.", exampleEs: "Muchas especies están en peligro de extinción.", related: [], difficulty: 1 }
        ],
        expressions: [
          { id: "l9t11_e1", word: "According to recent studies...", translation: "Según estudios recientes...", type: "expression", definition: "citing scientific evidence", definitionEs: "citando evidencia científica", example: "According to recent studies, ocean temperatures are rising.", exampleEs: "Según estudios recientes, las temperaturas oceánicas están subiendo.", related: [], difficulty: 1 },
          { id: "l9t11_e2", word: "The root cause is...", translation: "La causa raíz es...", type: "expression", definition: "identifying the fundamental reason", definitionEs: "identificando la razón fundamental", example: "The root cause is excessive fossil fuel consumption.", exampleEs: "La causa raíz es el consumo excesivo de combustibles fósiles.", related: [], difficulty: 2 },
          { id: "l9t11_e3", word: "It is imperative that we...", translation: "Es imperativo que...", type: "expression", definition: "expressing urgent necessity", definitionEs: "expresando necesidad urgente", example: "It is imperative that we act now.", exampleEs: "Es imperativo que actuemos ahora.", related: [], difficulty: 2 }
        ],
        adverbs: [],
        prepositions: []
      },
      commonMistakes: [
        { id: "l9t11_cm1", wrong: "Using 'I believe' instead of citing evidence", correct: "'Research indicates...' or 'Data suggests...' is more appropriate in scientific discourse", explanation: "In scientific discourse, support your claims with evidence, not personal opinions", explanationEs: "En discurso científico, respalda tus afirmaciones con evidencia, no con opiniones personales", category: "usage" },
        { id: "l9t11_cm2", wrong: "'The nature' (with article for general concept)", correct: "'Nature is beautiful' (no article for general concept)", explanation: "In English, 'nature' as a general concept takes no article: 'Nature is resilient', not 'The nature is resilient'", explanationEs: "En inglés, 'nature' como concepto general no lleva artículo: 'Nature is resilient', no 'The nature is resilient'", category: "grammar" },
        { id: "l9t11_cm3", wrong: "Confusing 'affect' (verb) and 'effect' (noun)", correct: "'Pollution affects health.' / 'The effect of pollution is clear.'", explanation: "'Affect' is a verb (to affect), 'effect' is a noun (effect). Exception: 'to effect change' = to bring about change", explanationEs: "'Affect' es verbo (afectar), 'effect' es sustantivo (efecto). Excepción: 'to effect change' = provocar un cambio", category: "vocabulary" },
        { id: "l9t11_cm4", wrong: "'Informations' (treating as countable)", correct: "'Information' is uncountable: 'some information', 'a piece of information'", explanation: "In English 'information' is uncountable — never 'informations'. Use 'data' (plural) for multiple data points", explanationEs: "En inglés 'information' es incontable — nunca 'informations'. Usa 'data' (plural) para datos múltiples", category: "grammar" },
        { id: "l9t11_cm5", wrong: "'It's a very unique solution'", correct: "'It's a unique solution' (unique = one of a kind, already absolute)", explanation: "'Unique' is absolute — something is unique or it isn't. Don't use 'very unique', 'quite unique' or 'most unique'", explanationEs: "'Unique' es absoluto — algo es único o no lo es. No uses 'very unique', 'quite unique' o 'most unique'", category: "grammar" }
      ],
      exercises: [
        {
          type: "cause-effect-matching",
          instruction: "Relaciona cada causa ambiental con su efecto",
          items: [
            { cause: "Burning fossil fuels", effect: "Increase in atmospheric CO₂ and global warming" },
            { cause: "Deforestation in the Amazon", effect: "Loss of biodiversity and reduced carbon absorption" },
            { cause: "Ocean acidification", effect: "Coral reef bleaching and marine life decline" },
            { cause: "Excessive use of pesticides", effect: "Soil degradation and pollinator population decline" }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con vocabulario ambiental:",
          items: [
            { prompt: "We need to reduce our carbon _____ by using public transport.", answer: "footprint" },
            { prompt: "Solar and wind are forms of _____ energy.", answer: "renewable" },
            { prompt: "The Amazon rainforest is critical for global _____.", answer: "biodiversity" },
            { prompt: "Companies must adopt _____ practices to protect the environment.", answer: "sustainable" }
          ]
        },
        {
          type: "rewrite-formally",
          instruction: "Reescribe estas afirmaciones usando lenguaje científico formal:",
          items: [
            { informal: "I think pollution is really bad for the ocean.", formal: "Research indicates that pollution has a significant detrimental impact on marine ecosystems." },
            { informal: "We're running out of trees because people cut them down.", formal: "Deforestation continues to deplete forest resources at an alarming rate." },
            { informal: "Electric cars are better for the planet.", formal: "Evidence suggests that electric vehicles produce considerably fewer emissions than their combustion-engine counterparts." }
          ]
        }
      ],
      modelDialogue: {
        id: "l9t11_md",
        title: "Panel Discussion on Climate Action",
        titleEs: "Panel de Discusión sobre Acción Climática",
        context: "A panel at an environmental conference discussing solutions to climate change.",
        contextEs: "Un panel en una conferencia ambiental discutiendo soluciones al cambio climático.",
        speakers: [
          { id: "moderator", name: "Dr. Chen", role: "Moderator" },
          { id: "scientist", name: "Prof. Williams", role: "Climate Scientist" },
          { id: "executive", name: "Ms. Johansson", role: "Sustainability Director" }
        ],
        lines: [
          { speakerId: "moderator", text: "What is the single most impactful action governments can take?", textEs: "¿Cuál es la acción individual más impactante que pueden tomar los gobiernos?" },
          { speakerId: "scientist", text: "According to the latest IPCC data, transitioning to renewable energy would yield the greatest reduction in emissions. However, this must be coupled with reforestation efforts.", textEs: "Según los últimos datos del IPCC, la transición a energía renovable produciría la mayor reducción de emisiones. Sin embargo, esto debe combinarse con esfuerzos de reforestación." },
          { speakerId: "executive", text: "From a corporate perspective, I'd add that carbon pricing mechanisms incentivize companies to innovate. Our own carbon footprint decreased by 40% after implementing internal carbon taxes.", textEs: "Desde una perspectiva corporativa, añadiría que los mecanismos de precio del carbono incentivan a las empresas a innovar. Nuestra propia huella de carbono disminuyó un 40% después de implementar impuestos internos al carbono." },
          { speakerId: "moderator", text: "And what about individual responsibility?", textEs: "¿Y qué hay de la responsabilidad individual?" },
          { speakerId: "scientist", text: "While individual actions matter, it is imperative that systemic change takes priority. No amount of personal recycling can offset industrial emissions.", textEs: "Si bien las acciones individuales importan, es imperativo que el cambio sistémico tenga prioridad. Ninguna cantidad de reciclaje personal puede compensar las emisiones industriales." }
        ],
        keyPhrases: [
          { phrase: "According to the latest data", translation: "Según los últimos datos", usage: "Citing evidence in formal discussion" },
          { phrase: "This must be coupled with", translation: "Esto debe combinarse con", usage: "Linking complementary solutions" },
          { phrase: "From a corporate perspective", translation: "Desde una perspectiva corporativa", usage: "Framing your viewpoint" },
          { phrase: "It is imperative that", translation: "Es imperativo que", usage: "Expressing urgent necessity (formal)" }
        ]
      },
      pronunciationFocus: {
        sounds: [
          { symbol: '/ɪ/', description: 'Short i as in "emission"', descriptionEs: 'I corta como en "emission"', examples: [{ word: 'emission', transcription: '/ɪˈmɪʃ.ən/' }, { word: 'sustainable', transcription: '/səˈsteɪ.nə.bəl/' }], tips: ['Spanish speakers often make this too long — keep it short and relaxed'] },
          { symbol: '/θ/', description: 'Th as in "earth"', descriptionEs: 'Th como en "earth"', examples: [{ word: 'earth', transcription: '/ɜːrθ/' }, { word: 'threat', transcription: '/θret/' }], tips: ['Place tongue between teeth — not /t/ or /s/'] }
        ],
        commonProblems: [
          { word: 'environment', wrong: '/en-vi-RON-ment/', correct: '/ɪnˈvaɪ.rən.mənt/', tip: 'Stress on second syllable: en-VY-run-munt. The "iron" part sounds like "vyrun".' },
          { word: 'renewable', wrong: '/re-NEW-able/', correct: '/rɪˈnjuː.ə.bəl/', tip: 'Stress on second syllable: ri-NEW-uh-bl.' },
          { word: 'sustainable', wrong: '/sus-TAI-nable/', correct: '/səˈsteɪ.nə.bəl/', tip: 'Schwa in first syllable: suh-STAY-nuh-bl.' }
        ],
        minimalPairs: [
          { word1: 'threat', word2: 'treat', soundDifference: '/θ/ vs /tr/' },
          { word1: 'earth', word2: 'art', soundDifference: '/ɜːrθ/ vs /ɑːrt/' }
        ]
      },
      culturalNote: {
        title: "Environmental Awareness Across Cultures",
        titleEs: "Conciencia Ambiental Entre Culturas",
        content: "Environmental language in English often reflects Anglo-Saxon activism culture. Terms like 'carbon footprint' and 'sustainability' originated in academic and policy circles but are now mainstream. In British English, 'the environment' is often discussed formally; in American English, terms like 'going green' are more casual. The UN's Sustainable Development Goals (SDGs) have standardized much of this vocabulary globally.",
        contentEs: "El lenguaje ambiental en inglés refleja la cultura activista anglosajona. Términos como 'carbon footprint' y 'sustainability' se originaron en círculos académicos y políticos pero ahora son mainstream. En inglés británico, 'the environment' se discute formalmente; en inglés americano, 'going green' es más casual. Los ODS de la ONU han estandarizado mucho de este vocabulario globalmente.",
        regions: ["UK", "US", "Global"],
        formalityLevel: "neutral"
      },
      consolidationQuiz: {
        id: "l9t11_cq",
        title: "Science & Environment Quiz",
        titleEs: "Quiz de Ciencia y Medio Ambiente",
        passingScore: 70,
        questions: [
          { id: "l9t11_cq1", type: "multiple-choice", question: "Which is the most formal way to present scientific evidence?", questionEs: "¿Cuál es la forma más formal de presentar evidencia científica?", options: ["I think pollution is bad", "Research indicates that pollution has a detrimental impact", "Pollution is really terrible", "Everyone knows pollution is bad"], correctAnswer: "Research indicates that pollution has a detrimental impact", explanation: "Academic discourse requires citing evidence, not personal opinion", explanationEs: "El discurso académico requiere citar evidencia, no opinión personal", points: 10 },
          { id: "l9t11_cq2", type: "multiple-choice", question: "Complete: 'We must _____ the effects of climate change.'", questionEs: "Completa: 'Debemos _____ los efectos del cambio climático.'", options: ["mitigate", "make less", "lower down", "small"], correctAnswer: "mitigate", explanation: "'Mitigate' is the formal/academic term for reducing severity", explanationEs: "'Mitigate' es el término formal/académico para reducir la gravedad", points: 10 },
          { id: "l9t11_cq3", type: "true-false", question: "'Information' is countable in English (you can say 'informations').", questionEs: "'Information' es contable en inglés (puedes decir 'informations').", correctAnswer: "false", explanation: "'Information' is uncountable — never 'informations'. Use 'pieces of information'.", explanationEs: "'Information' es incontable — nunca 'informations'. Usa 'pieces of information'.", points: 10 },
          { id: "l9t11_cq4", type: "multiple-choice", question: "Which sentence uses cause-effect language correctly?", questionEs: "¿Qué oración usa el lenguaje de causa-efecto correctamente?", options: ["Deforestation leads to biodiversity loss", "Deforestation leads biodiversity loss", "Deforestation leads for biodiversity loss", "Deforestation leads with biodiversity loss"], correctAnswer: "Deforestation leads to biodiversity loss", explanation: "'Lead to' is the correct preposition for cause-effect", explanationEs: "'Lead to' es la preposición correcta para causa-efecto", points: 10 },
          { id: "l9t11_cq5", type: "multiple-choice", question: "'Affect' and 'effect' — which is correct?", questionEs: "'Affect' y 'effect' — ¿cuál es correcto?", options: ["Pollution effects our health", "Pollution affects our health", "Pollution is affect our health", "Pollution have effect our health"], correctAnswer: "Pollution affects our health", explanation: "'Affect' is a verb (to influence). 'Effect' is usually a noun (the result).", explanationEs: "'Affect' es verbo (influir). 'Effect' es normalmente sustantivo (el resultado).", points: 10 }
        ]
      },
      guidedProduction: {
        id: "l9t11_gp",
        title: "Environmental Impact Report",
        titleEs: "Informe de Impacto Ambiental",
        type: "writing",
        scenario: "You work for an environmental consultancy. Write a short paragraph (60-80 words) summarizing the environmental impact of fast fashion, using formal scientific language.",
        scenarioEs: "Trabajas para una consultoría ambiental. Escribe un párrafo corto (60-80 palabras) resumiendo el impacto ambiental de la moda rápida, usando lenguaje científico formal.",
        prompts: [
          { id: "l9t11_gp1", instruction: "Start with a data-backed claim using 'Research indicates...' or 'According to...'", instructionEs: "Comienza con una afirmación respaldada por datos usando 'Research indicates...' o 'According to...'", hints: ["Use formal language, not 'I think'"], hintsEs: ["Usa lenguaje formal, no 'I think'"], requiredElements: ["cause-effect language", "at least one environmental term"], minWords: 60, maxWords: 80 }
        ],
        modelResponse: "Research indicates that the fast fashion industry is responsible for approximately 10% of global carbon emissions. The production process depletes natural resources and leads to significant water pollution. Furthermore, the disposal of synthetic textiles contributes to microplastic contamination in marine ecosystems. It is imperative that consumers and corporations adopt more sustainable practices to mitigate these detrimental effects.",
        modelResponseEs: "La investigación indica que la industria de moda rápida es responsable de aproximadamente el 10% de las emisiones globales de carbono. El proceso de producción agota los recursos naturales y lleva a una contaminación significativa del agua. Además, la eliminación de textiles sintéticos contribuye a la contaminación por microplásticos en ecosistemas marinos. Es imperativo que consumidores y corporaciones adopten prácticas más sostenibles para mitigar estos efectos perjudiciales.",
        evaluationCriteria: ["Uses formal/academic register", "Includes cause-effect language", "Contains environmental vocabulary", "Avoids personal opinion (I think)"],
        evaluationCriteriaEs: ["Usa registro formal/académico", "Incluye lenguaje de causa-efecto", "Contiene vocabulario ambiental", "Evita opinión personal (I think)"]
      },
      connectionToPrevious: "La precisión en expresar duda y certeza te ayudará a citar datos de forma apropiada en discurso científico.",
      connectionToNext: "Has completado el nivel Expert. En el siguiente nivel, aplicarás todas estas habilidades en contextos de liderazgo de alto nivel."
    },
    {
      id: 12,
      title: "Philosophy and Critical Thinking",
      titleEs: "Filosofía y Pensamiento Crítico",
      introduction: {
        title: "🧠 Filosofía y Pensamiento Crítico",
        explanation: "En inglés C1+ puedes explorar preguntas filosóficas, analizar argumentos y expresar posiciones epistemológicas con precisión avanzada.",
        keyPoints: [
          "Plantear preguntas: 'One might reasonably ask whether...', 'This raises the question of...'",
          "Analizar argumentos: 'The core premise is...', 'This argument presupposes...'",
          "Contrarrestar: 'A counterargument would be that...', 'This fails to account for...'",
          "Concluir: 'On balance...', 'The weight of evidence suggests...'"
        ],
        examples: [
          { english: "One might reasonably ask whether free will is compatible with determinism.", spanish: "Cabría razonablemente preguntarse si el libre albedrío es compatible con el determinismo.", explanation: "Plantear pregunta filosófica con distanciamiento" },
          { english: "The argument presupposes a clear distinction between mind and body.", spanish: "El argumento presupone una distinción clara entre mente y cuerpo.", explanation: "Analizar premisas de un argumento" },
          { english: "On balance, the evidence appears to favour a compatibilist position.", spanish: "En conjunto, la evidencia parece favorecer una posición compatibilista.", explanation: "'On balance' para conclusiones matizadas" }
        ],
        tips: [
          "💡 'It could be argued' = distanciamiento académico estándar",
          "💡 'Presuppose' es más preciso que 'assume' en filosofía",
          "💡 Usa 'the former/the latter' para referirte a pares de conceptos sin repetir"
        ],
        whenToUse: ["En ensayos filosóficos o académicos", "En debates intelectuales de alto nivel", "Al analizar argumentos de forma crítica"],
        whenNotToUse: ["No en conversaciones informales — suena pedante", "Evita terminología sin explicar en contextos mixtos"]
      },
      objectives: ["Plantear y analizar argumentos filosóficos", "Usar distanciamiento epistemológico", "Expresar conclusiones con matiz académico C1+"],
      grammarTheoryIds: ["c1-distancing-language", "c1-nominalization"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l9t12_n1", word: "epistemology", translation: "epistemología", type: "noun", definition: "the branch of philosophy concerned with knowledge", definitionEs: "la rama de la filosofía que estudia el conocimiento", example: "Epistemology asks: how do we know what we know?", exampleEs: "La epistemología pregunta: ¿cómo sabemos lo que sabemos?", related: [], difficulty: 3 },
          { id: "l9t12_n2", word: "premise", translation: "premisa", type: "noun", definition: "a statement assumed to be true in an argument", definitionEs: "afirmación que se asume verdadera en un argumento", example: "The entire argument rests on a flawed premise.", exampleEs: "Todo el argumento descansa en una premisa defectuosa.", related: [], difficulty: 3 },
          { id: "l9t12_n3", word: "paradox", translation: "paradoja", type: "noun", definition: "a seemingly contradictory statement that reveals a deeper truth", definitionEs: "afirmación aparentemente contradictoria que revela una verdad profunda", example: "Zeno's paradox challenged our understanding of infinity.", exampleEs: "La paradoja de Zenón desafió nuestra comprensión del infinito.", related: ["paradoxical"], difficulty: 2 },
        ],
        verbs: [
          { id: "l9t12_v1", word: "presuppose", translation: "presuponer", type: "verb", definition: "to require as a precondition", definitionEs: "requerir como condición previa", example: "The question presupposes that time is linear.", exampleEs: "La pregunta presupone que el tiempo es lineal.", related: [], difficulty: 3 },
          { id: "l9t12_v2", word: "contend", translation: "sostener / argumentar", type: "verb", definition: "to assert something firmly", definitionEs: "afirmar algo con firmeza", example: "Philosophers contend that consciousness is not fully understood.", exampleEs: "Los filósofos sostienen que la conciencia no se entiende del todo.", related: [], difficulty: 3 },
        ],
        adjectives: [
          { id: "l9t12_a1", word: "contentious", translation: "controvertido", type: "adjective", definition: "likely to cause disagreement", definitionEs: "susceptible de causar desacuerdo", example: "Free will is a contentious philosophical concept.", exampleEs: "El libre albedrío es un concepto filosófico controvertido.", related: [], difficulty: 3 },
          { id: "l9t12_a2", word: "cogent", translation: "convincente/sólido", type: "adjective", definition: "logical and convincing", definitionEs: "lógico y convincente", example: "She put forward a cogent argument for determinism.", exampleEs: "Presentó un argumento sólido en favor del determinismo.", related: [], difficulty: 3 },
        ],
        expressions: [
          { id: "l9t12_e1", word: "on balance", translation: "en conjunto / sopesando todo", type: "expression", definition: "considering everything", definitionEs: "considerando todo", example: "On balance, the utilitarian view seems more defensible.", exampleEs: "En conjunto, la visión utilitarista parece más defendible.", related: [], difficulty: 2 },
          { id: "l9t12_e2", word: "this raises the question of", translation: "esto plantea la cuestión de", type: "expression", definition: "introduces an unanswered question", definitionEs: "introduce una pregunta sin respuesta", example: "This raises the question of what constitutes identity.", exampleEs: "Esto plantea la cuestión de qué constituye la identidad.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l9t12_cm1", wrong: "This is the proof that free will exists.", correct: "This could be interpreted as evidence for free will.", explanation: "In philosophy, use 'evidence for' and hedging ('could be interpreted as'). Absolutes are rarely appropriate.", explanationEs: "En filosofía, usa 'evidence for' y distanciamiento ('could be interpreted as'). Los absolutos son rara vez apropiados.", category: "usage" },
        { id: "l9t12_cm2", wrong: "Philosophers think that consciousness is complex.", correct: "Philosophers contend / argue that consciousness is not fully understood.", explanation: "'Think' is too informal. Use 'contend', 'argue', 'maintain'.", explanationEs: "'Think' es demasiado informal. Usa 'contend', 'argue', 'maintain'.", category: "vocabulary" }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las frases filosóficas:",
          items: [
            { sentence: "The argument ___ that rationality is universal.", answer: "presupposes", hint: "presuppose = asumir como condición previa" },
            { sentence: "On ___, the empiricist view appears more defensible.", answer: "balance", hint: "on balance = considerando todo" },
            { sentence: "This raises the ___ of personal identity over time.", answer: "question", hint: "raises the question of" }
          ]
        }
      ],
      modelDialogue: {
        title: "Debatiendo el libre albedrío",
        situation: "Elena y Marcos discuten si el libre albedrío es compatible con la neurociencia moderna.",
        dialogue: [
          { speaker: "Elena", text: "Neuroscience seems to suggest that our decisions are made milliseconds before we're conscious of them. This raises the question of whether free will is an illusion.", textEs: "La neurociencia parece sugerir que nuestras decisiones se toman milisegundos antes de que seamos conscientes de ellas. Esto plantea la cuestión de si el libre albedrío es una ilusión." },
          { speaker: "Marcos", text: "That's a contentious claim. The evidence is interesting, but many philosophers contend that it doesn't rule out a compatibilist view of free will.", textEs: "Es una afirmación controvertida. La evidencia es interesante, pero muchos filósofos sostienen que no descarta una visión compatibilista del libre albedrío." },
          { speaker: "Elena", text: "The core premise here is that free will requires conscious initiation. But the argument presupposes a very specific definition of freedom.", textEs: "La premisa central aquí es que el libre albedrío requiere iniciación consciente. Pero el argumento presupone una definición muy específica de libertad." },
          { speaker: "Marcos", text: "Exactly. On balance, I find compatibilism the most cogent position — we can be free even if our actions have causal antecedents.", textEs: "Exactamente. En conjunto, encuentro el compatibilismo la posición más sólida: podemos ser libres aunque nuestras acciones tengan antecedentes causales." }
        ],
        vocabulary: ["contentious", "contend", "presupposes", "compatibilist", "cogent"],
        followUpQuestions: ["¿Qué evidencia cita Elena sobre el libre albedrío?", "¿Qué posición filosófica defiende Marcos?"]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario filosófico",
        sounds: [
          { sound: "Epistemology", examples: ["epistemology /ɪˌpɪstɪˈmɒlədʒi/"], tip: "Acento en cuarta sílaba: e-pis-te-MOL-o-gy" },
          { sound: "Paradox", examples: ["paradox /ˈpærədɒks/"], tip: "Acento en primera sílaba: PAR-a-dox" }
        ],
        commonErrors: [
          { word: "contentious", wrong: "/con-TEN-cious/ (omting 't')", right: "/kənˈtɛnʃəs/", note: "con-TEN-shus" }
        ]
      },
      culturalNote: {
        title: "Filosofía en la cultura anglosajona",
        content: "La tradición filosófica anglosajona ('analytic philosophy') valora la claridad, lógica y precisión terminológica. Filósofos como Bertrand Russell, A.J. Ayer y Wittgenstein son referencias comunes. En conversaciones cultas en UK, citar a filósofos es señal de educación. En EE.UU., la filosofía pragmatista (Dewey, James) tiene gran influencia. Expresiones como 'Catch-22', 'Gordian knot' o 'devil's advocate' tienen raíces filosóficas y literarias.",
        examples: [
          "'Devil's advocate' - alguien que argumenta una posición opuesta para estimular el debate",
          "'Thought experiment' - experimento mental hipotético",
          "'Red herring' - argumento que distrae del punto principal",
          "'Straw man' - versión distorsionada del argumento contrario"
        ]
      },
      consolidationQuiz: [
        { question: "'On balance' se usa para:", options: ["empezar un argumento", "concluir ponderando pros y contras", "contradecir", "citar datos"], correctAnswer: 1, explanation: "'On balance' = habiendo considerado todo, como conclusión ponderada." },
        { question: "'Cogent' significa:", options: ["confuso", "convincente y lógico", "abstracto", "incompleto"], correctAnswer: 1, explanation: "Cogent = lógico y persuasivo." },
        { question: "'Presuppose' significa:", options: ["suponer después de analizar", "requerir algo como condición previa", "imaginar", "negar"], correctAnswer: 1, explanation: "Presuppose = asumir como prerrequisito tácito de un argumento." }
      ],
      guidedProduction: [
        {
          task: "Analizar un argumento filosófico",
          prompt: "Analiza el argumento de que 'la realidad es socialmente construida'. ¿Cuáles son sus premisas y sus limitaciones?",
          sampleAnswer: "The argument that reality is socially constructed rests on the premise that our perceptions are mediated by language, culture and intersubjective agreement. Proponents contend that concepts such as 'money' or 'marriage' only exist because societies collectively believe in them. However, this raises the question of whether natural phenomena — gravity, for instance — are equally subject to social construction. A cogent critique would note that the argument presupposes an idealist ontology that many philosophers find untenable. On balance, a moderate constructivism seems the most defensible position.",
          hints: ["Identifica la premisa principal", "Usa 'contend', 'presupposes', 'raises the question'", "Concluye con 'on balance'"]
        }
      ],
      connectionToPrevious: "El lenguaje de certeza y duda de la lección anterior es esencial para el discurso filosófico matizado.",
      connectionToNext: "Has completado el nivel Expert. En el siguiente nivel, aplicarás todas estas habilidades en contextos de liderazgo e influencia de alto nivel."
    },
  ]
};

export default level9;
