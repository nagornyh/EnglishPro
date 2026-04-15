import type { Level } from '../../types';

export const level8: Level = {
  id: 8,
  name: "Advanced+",
  cefrLevel: "B2+/C1",
  description: "Negociación avanzada, condicionales mixtos y liderazgo",
  totalTasks: 12,
  estimatedHours: 18,
  color: "#6366f1",
  icon: "🏆",
  tasks: [
    {
      id: 1,
      title: "Advanced Negotiation Strategies",
      titleEs: "Estrategias Avanzadas de Negociación",
      introduction: {
        title: "🤝 Estrategias Avanzadas de Negociación",
        explanation: "La negociación exitosa requiere preparación, flexibilidad y habilidad para crear valor para ambas partes. Aprenderás técnicas avanzadas para negociaciones complejas.",
        keyPoints: [
          "BATNA: Best Alternative to a Negotiated Agreement (tu plan B)",
          "Crear valor: 'What if we...?', 'Would you consider...?'",
          "Hacer concesiones estratégicas: 'If you can..., then we could...'",
          "Manejar puntos muertos: 'Let's take a step back', 'Perhaps we could revisit...'",
          "Cerrar acuerdos: 'So we're agreed that...', 'Let me summarize what we've discussed'"
        ],
        examples: [
          { english: "What if we extended the payment terms in exchange for a larger order?", spanish: "¿Qué tal si extendemos los términos de pago a cambio de un pedido más grande?", explanation: "Creando valor" },
          { english: "I understand your position. If you can meet us halfway on price, we can be flexible on delivery.", spanish: "Entiendo tu posición. Si pueden encontrarnos a mitad de camino en el precio, podemos ser flexibles con la entrega.", explanation: "Concesión condicional" },
          { english: "Let's take a step back and look at the bigger picture.", spanish: "Demos un paso atrás y veamos el panorama general.", explanation: "Manejando un punto muerto" }
        ],
        tips: [
          "💡 Conoce tu BATNA antes de negociar - te da poder",
          "💡 Busca intereses, no posiciones: '¿Por qué quieren eso?'",
          "💡 El silencio es una táctica poderosa - no llenes todos los espacios"
        ],
        whenToUse: [
          "En negociaciones de contratos, salarios o acuerdos comerciales",
          "Cuando ambas partes tienen intereses diferentes pero necesitan llegar a un acuerdo",
          "En mediaciones o resolución de conflictos laborales",
          "Al negociar plazos, recursos o condiciones de proyectos"
        ],
        whenNotToUse: [
          "No uses tácticas de negociación agresiva con compañeros de equipo — prefiere la colaboración",
          "Evita el lenguaje de negociación formal en peticiones simples entre amigos",
          "No abuses del silencio estratégico en conversaciones casuales — se percibe como hostil",
          "No uses 'What's your bottom line?' en contextos personales"
        ]
      },
      objectives: ["Usar técnicas de negociación win-win", "Manejar puntos muertos", "Cerrar acuerdos efectivamente"],
      grammarTheoryIds: ["c1-hedging", "b2-conditionals-all"],
      estimatedMinutes: 40,
      vocabulary: {
        nouns: [
          { id: "l8t1_n1", word: "leverage", translation: "apalancamiento/ventaja", type: "noun", definition: "power in a negotiation", definitionEs: "poder en una negociación", example: "We have some leverage here.", exampleEs: "Tenemos algo de ventaja aquí.", related: [], difficulty: 2 },
          { id: "l8t1_n2", word: "compromise", translation: "compromiso/término medio", type: "noun", definition: "agreement with concessions", definitionEs: "acuerdo con concesiones", example: "Let's find a compromise.", exampleEs: "Encontremos un término medio.", related: [], difficulty: 1 },
          { id: "l8t1_n3", word: "concession", translation: "concesión", type: "noun", definition: "something given up", definitionEs: "algo cedido", example: "We're willing to make a concession.", exampleEs: "Estamos dispuestos a hacer una concesión.", related: [], difficulty: 2 },
          { id: "l8t1_n4", word: "stalemate", translation: "punto muerto", type: "noun", definition: "deadlock, no progress", definitionEs: "sin progreso", example: "We've reached a stalemate.", exampleEs: "Hemos llegado a un punto muerto.", related: [], difficulty: 2 },
          { id: "l8t1_n5", word: "bottom line", translation: "límite mínimo", type: "noun", definition: "minimum acceptable", definitionEs: "mínimo aceptable", example: "What's your bottom line?", exampleEs: "¿Cuál es tu límite mínimo?", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l8t1_v1", word: "negotiate", translation: "negociar", type: "verb", definition: "to discuss terms", definitionEs: "discutir términos", example: "Let's negotiate the terms.", exampleEs: "Negociemos los términos.", related: ["negotiation"], difficulty: 1 },
          { id: "l8t1_v2", word: "concede", translation: "ceder", type: "verb", definition: "to give up something", definitionEs: "renunciar a algo", example: "We're willing to concede on price.", exampleEs: "Estamos dispuestos a ceder en el precio.", related: [], difficulty: 2 },
          { id: "l8t1_v3", word: "counter-offer", translation: "contraofertar", type: "verb", definition: "to make a different offer", definitionEs: "hacer una oferta diferente", example: "I'd like to counter-offer.", exampleEs: "Me gustaría contraofertar.", related: [], difficulty: 2 },
          { id: "l8t1_v4", word: "settle", translation: "acordar/resolver", type: "verb", definition: "to reach agreement", definitionEs: "llegar a un acuerdo", example: "Can we settle this today?", exampleEs: "¿Podemos resolver esto hoy?", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l8t1_a1", word: "flexible", translation: "flexible", type: "adjective", definition: "willing to change", definitionEs: "dispuesto a cambiar", example: "We can be flexible.", exampleEs: "Podemos ser flexibles.", related: [], difficulty: 1 },
          { id: "l8t1_a2", word: "non-negotiable", translation: "no negociable", type: "adjective", definition: "cannot be changed", definitionEs: "no puede cambiarse", example: "This point is non-negotiable.", exampleEs: "Este punto no es negociable.", related: [], difficulty: 1 },
          { id: "l8t1_a3", word: "mutually beneficial", translation: "mutuamente beneficioso", type: "adjective", definition: "good for both sides", definitionEs: "bueno para ambos lados", example: "Let's find a mutually beneficial solution.", exampleEs: "Encontremos una solución mutuamente beneficiosa.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l8t1_e1", word: "What if we...?", translation: "¿Qué tal si...?", type: "expression", definition: "proposing options", definitionEs: "proponiendo opciones", example: "What if we split the difference?", exampleEs: "¿Qué tal si dividimos la diferencia?", related: [], difficulty: 1 },
          { id: "l8t1_e2", word: "If you can..., then we could...", translation: "Si pueden..., entonces podríamos...", type: "expression", definition: "conditional concession", definitionEs: "concesión condicional", example: "If you can increase the volume, then we could lower the price.", exampleEs: "Si pueden aumentar el volumen, entonces podríamos bajar el precio.", related: [], difficulty: 1 },
          { id: "l8t1_e3", word: "Let's take a step back", translation: "Demos un paso atrás", type: "expression", definition: "pause to reassess", definitionEs: "pausa para reevaluar", example: "Let's take a step back and review our options.", exampleEs: "Demos un paso atrás y revisemos nuestras opciones.", related: [], difficulty: 1 },
          { id: "l8t1_e4", word: "Meet (someone) halfway", translation: "Encontrarse a mitad de camino", type: "expression", definition: "compromise", definitionEs: "compromiso", example: "Can you meet us halfway on this?", exampleEs: "¿Pueden encontrarnos a mitad de camino en esto?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l8t1_cm1", wrong: "Starting with your bottom line", correct: "Start higher/lower than your target to leave room for negotiation", explanation: "If you start with your limit, you have no room for concessions and seem inflexible.", explanationEs: "Si empiezas con tu límite, no tienes espacio para concesiones y pareces inflexible", category: "usage" },
        { id: "l8t1_cm2", wrong: "Making concessions without getting something in return", correct: "'If you can..., then we could...' - always link concessions", explanation: "Each concession should be linked to something in return to maintain balance.", explanationEs: "Cada concesión debe vincularse a algo a cambio para mantener el equilibrio", category: "usage" },
        { id: "l8t1_cm3", wrong: "'I want' or 'I need' as opening", correct: "'We're looking to achieve...' or 'Our goal is...'", explanation: "Collaborative language is more effective than direct demands.", explanationEs: "Lenguaje colaborativo es más efectivo que demandas directas", category: "usage" },
        { id: "l8t1_cm4", wrong: "Filling silence immediately with more offers", correct: "Use strategic silence - let the other party respond first", explanation: "Silence is uncomfortable but powerful; whoever speaks first often makes concessions.", explanationEs: "El silencio es incómodo pero poderoso; quien habla primero a menudo hace concesiones", category: "usage" },
        { id: "l8t1_cm5", wrong: "Forgetting to summarize agreements", correct: "'So we're agreed that...' - summarize each agreement point", explanation: "Without summaries, misunderstandings about what was agreed can arise.", explanationEs: "Sin resúmenes, pueden surgir malentendidos sobre lo acordado", category: "usage" },
      ],
      exercises: [
        {
          type: "strategy-matching",
          instruction: "Relaciona la situación con la estrategia de negociación apropiada",
          items: [
            { situation: "La negociación se ha estancado", strategy: "Let's take a step back and look at the bigger picture." },
            { situation: "Quieres hacer una concesión estratégica", strategy: "If you can meet us halfway on delivery, we can be flexible on payment terms." },
            { situation: "Quieres proponer una alternativa creativa", strategy: "What if we split the order into two phases?" },
            { situation: "Necesitas confirmar lo acordado", strategy: "So we're agreed that the price is $50 per unit with delivery in 30 days?" },
            { situation: "La otra parte hace una demanda extrema", strategy: "I understand your position. Can you help me understand what's driving that requirement?" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma estas frases agresivas en lenguaje de negociación win-win",
          items: [
            { aggressive: "We won't accept less than $100.", winwin: "Our target is around $100. What would help you reach that figure?" },
            { aggressive: "Take it or leave it.", winwin: "This is our best offer at this point. Is there anything we could adjust to make this work for both of us?" },
            { aggressive: "You're being unreasonable.", winwin: "I'd like to understand your perspective better. Can you walk me through your reasoning?" },
            { aggressive: "We need this by Monday.", winwin: "Ideally, we'd have this by Monday. What would you need from us to make that timeline work?" }
          ]
        },
        {
          type: "batna-analysis",
          instruction: "Analiza el BATNA en cada escenario",
          items: [
            { scenario: "Estás vendiendo tu casa y solo tienes una oferta", yourBatna: "Weak - no alternatives", advice: "You have low leverage; try to generate more interest" },
            { scenario: "Negociando salario con múltiples ofertas de trabajo", yourBatna: "Strong - alternatives available", advice: "You have high leverage; can negotiate confidently" },
            { scenario: "Un proveedor único tiene algo que necesitas urgentemente", yourBatna: "Weak - dependency", advice: "Low leverage; focus on building relationship and future value" }
          ]
        },
        {
          type: "role-play-prompts",
          instruction: "Practica estas situaciones de negociación",
          items: [
            { role: "You are negotiating a contract renewal. The client wants a 20% discount.", goal: "Maintain profitability while keeping the client" },
            { role: "You want a raise but your company has budget constraints.", goal: "Find creative solutions beyond just salary" },
            { role: "Two departments want the same limited resources.", goal: "Find a solution that works for both departments" }
          ]
        }
      ],
      modelDialogue: {
        title: "Negociación de contrato de servicios",
        context: "Sarah (proveedora) negocia un contrato anual con Mark (cliente)",
        dialogue: [
          { speaker: "Mark", text: "We'd like to renew the contract, but we need a 25% price reduction.", translation: "Nos gustaría renovar el contrato, pero necesitamos una reducción del 25% en el precio." },
          { speaker: "Sarah", text: "I appreciate your directness. Help me understand - what's driving that requirement?", translation: "Agradezco tu franqueza. Ayúdame a entender - ¿qué está impulsando ese requerimiento?" },
          { speaker: "Mark", text: "Frankly, budget cuts. We need to reduce costs across all vendors.", translation: "Francamente, recortes presupuestarios. Necesitamos reducir costos con todos los proveedores." },
          { speaker: "Sarah", text: "I understand the pressure you're under. A 25% cut isn't feasible for us, but what if we explored other ways to add value while managing costs?", translation: "Entiendo la presión que tienen. Un recorte del 25% no es viable para nosotros, pero ¿qué tal si exploramos otras formas de agregar valor mientras gestionamos costos?" },
          { speaker: "Mark", text: "What did you have in mind?", translation: "¿Qué tienes en mente?" },
          { speaker: "Sarah", text: "If you can commit to a two-year contract, we could offer a 10% discount. We'd also include priority support at no extra cost.", translation: "Si pueden comprometerse a un contrato de dos años, podríamos ofrecer un 10% de descuento. También incluiríamos soporte prioritario sin costo adicional." },
          { speaker: "Mark", text: "Two years is a long commitment. Can you meet us halfway - say, 15% discount for 18 months?", translation: "Dos años es un compromiso largo. ¿Pueden encontrarnos a mitad de camino - digamos, 15% de descuento por 18 meses?" },
          { speaker: "Sarah", text: "Let me think... If we do 18 months at 12%, and you agree to quarterly payments upfront, we could make that work.", translation: "Déjame pensar... Si hacemos 18 meses al 12%, y ustedes aceptan pagos trimestrales por adelantado, podríamos hacer que funcione." },
          { speaker: "Mark", text: "Upfront quarterly payments might be difficult. What about net 30?", translation: "Pagos trimestrales por adelantado podría ser difícil. ¿Qué tal neto 30?" },
          { speaker: "Sarah", text: "Net 30 works if we keep it at 10%. So to summarize: 18-month contract, 10% discount, net 30 payment terms, priority support included. Does that work for you?", translation: "Neto 30 funciona si lo mantenemos al 10%. Entonces para resumir: contrato de 18 meses, 10% de descuento, términos de pago neto 30, soporte prioritario incluido. ¿Eso funciona para ustedes?" },
          { speaker: "Mark", text: "That's a deal we can work with. Let's put it in writing.", translation: "Ese es un trato con el que podemos trabajar. Pongámoslo por escrito." }
        ],
        keyPhrases: [
          "Help me understand - what's driving that requirement?",
          "What if we explored other ways...",
          "If you can..., we could...",
          "Can you meet us halfway?",
          "Let me think...",
          "So to summarize..."
        ]
      },
      pronunciationFocus: {
        title: "Tono en negociaciones",
        sounds: [
          { sound: "/ˈlev.ər.ɪdʒ/", word: "leverage", tip: "Acento en primera sílaba; en español tendemos a acentuar 'age'" },
          { sound: "Neutral tone", word: "That's an interesting point", tip: "Tono nivel transmite que consideras sin ceder; evita sarcasmo" },
          { sound: "Curious rise", word: "Help me understand...", tip: "Ligera subida al final muestra genuina curiosidad, no acusación" }
        ],
        minimalPairs: [
          { word1: "leverage", word2: "lever", explanation: "Leverage /ˈlev.ər.ɪdʒ/ tiene tres sílabas; lever /ˈliː.vər/ dos" },
          { word1: "concede", word2: "concede", explanation: "Concede /kənˈsiːd/ - acento en la segunda sílaba" }
        ],
        intonation: [
          { pattern: "Fall-rise for hedging", example: "It's possible↘↗", tip: "Al hacer ofertas tentativas, el tono descendente-ascendente muestra flexibilidad" },
          { pattern: "Strategic pause", example: "Let me think... [pause]", tip: "Las pausas muestran que consideras, no que cedes" }
        ],
        points: [
          "Mantén un tono calmado y profesional, incluso bajo presión",
          "'What if we...' con tono de genuina curiosidad, no desafío",
          "'I understand' con tono empático, no condescendiente",
          "Evita subir el tono al final de afirmaciones (suena inseguro)",
          "Las pausas estratégicas muestran que estás considerando, no cediendo"
        ],
        examples: [
          { word: "That's an interesting point.", phonetic: "Tono neutral, no sarcástico", tip: "Úsalo para ganar tiempo mientras piensas" },
          { word: "Help me understand...", phonetic: "Genuinamente curioso", tip: "No confrontacional ni acusatorio" },
          { word: "What would work for you?", phonetic: "Colaborativo, no sumiso", tip: "Muestra disposición a encontrar solución" }
        ]
      },
      culturalNote: {
        title: "Estilos de negociación cultural",
        titleEs: "Estilos de negociación cultural",
        content: "Los estilos de negociación varían enormemente entre culturas. En Estados Unidos, la negociación tiende a ser directa y orientada a resultados rápidos. En Japón, construir relación (nemawashi) antes de negociar es esencial, y el silencio es una táctica respetada. En países árabes, la hospitalidad y las relaciones personales preceden los negocios. En Alemania, la preparación exhaustiva y los datos son fundamentales. Conocer el estilo de tu contraparte te da ventaja significativa.",
        contentEs: "Los estilos de negociación varían entre culturas. En EE.UU. es directa y orientada a resultados. En Japón, construir relación antes de negociar es esencial. En Alemania, la preparación y los datos son fundamentales.",
        region: "General",
        examples: [
          "US: 'Let's get down to business' - enfoque directo",
          "Japan: Múltiples reuniones de relación antes de discutir términos",
          "Middle East: Rechazar una oferta inicial es esperado y parte del ritual"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Qué es BATNA?",
          options: [
            "El precio más bajo que aceptarás",
            "Tu mejor alternativa si la negociación falla",
            "La primera oferta que haces",
            "El punto medio entre dos posiciones"
          ],
          correctAnswer: 1,
          explanation: "BATNA = Best Alternative to a Negotiated Agreement. Conocerlo te da poder porque sabes cuándo retirarte"
        },
        {
          question: "¿Por qué es importante vincular concesiones?",
          options: [
            "Para confundir a la otra parte",
            "Para mostrar generosidad",
            "Para mantener equilibrio y obtener algo a cambio",
            "Porque es obligatorio legalmente"
          ],
          correctAnswer: 2,
          explanation: "Vincular concesiones ('If you..., then we...') mantiene el equilibrio y evita ceder sin recibir nada"
        },
        {
          question: "¿Cuál es la mejor respuesta cuando la negociación se estanca?",
          options: [
            "Hacer una gran concesión",
            "Amenazar con retirarse",
            "Let's take a step back and look at the bigger picture",
            "Repetir tu última oferta más fuerte"
          ],
          correctAnswer: 2,
          explanation: "Dar un paso atrás permite reenfocar la conversación y encontrar nuevas opciones"
        },
        {
          question: "¿Por qué el silencio es una táctica poderosa?",
          options: [
            "Porque es de mala educación interrumpir",
            "Porque quien habla primero a menudo hace concesiones",
            "Porque ahorra tiempo",
            "Porque es obligatorio en negociaciones"
          ],
          correctAnswer: 1,
          explanation: "El silencio crea presión; la otra parte puede llenar el vacío con concesiones o información útil"
        },
        {
          question: "¿Cómo deberías empezar una negociación?",
          options: [
            "Con tu bottom line para ser honesto",
            "Con una demanda agresiva",
            "Con espacio para maniobrar, pero con justificación razonable",
            "Preguntando cuánto pueden pagar"
          ],
          correctAnswer: 2,
          explanation: "Empezar con espacio permite hacer concesiones estratégicas sin llegar a tu límite"
        },
        {
          question: "¿Qué significa 'meet someone halfway'?",
          options: [
            "Encontrarse en persona",
            "Llegar a un compromiso donde ambos ceden algo",
            "Aceptar completamente la propuesta del otro",
            "Rechazar la propuesta"
          ],
          correctAnswer: 1,
          explanation: "'Meet halfway' significa encontrar un punto medio donde ambas partes hacen concesiones"
        }
      ],
      guidedProduction: [
        {
          prompt: "Tu proveedor quiere aumentar precios un 20%. Negocia manteniendo la relación.",
          sampleResponse: "I understand you're facing cost pressures, and we value our partnership. A 20% increase would significantly impact our budget. What if we committed to a longer contract term in exchange for keeping the increase closer to 10%? Alternatively, if you can maintain current prices, we could increase our order volume by 15%. What would work best from your perspective?"
        },
        {
          prompt: "Estás en una negociación salarial. Tu jefe dice que no hay presupuesto para aumentos.",
          sampleResponse: "I appreciate your transparency about the budget constraints. I'd like to explore this further. If a salary increase isn't possible now, what if we looked at other forms of compensation? Perhaps additional vacation days, a professional development budget, or a performance-based bonus structure for next quarter? I'm flexible on how we structure this - what matters to me is feeling valued for my contributions."
        },
        {
          prompt: "Dos departamentos quieren el mismo recurso limitado. Facilita la negociación.",
          sampleResponse: "I understand both teams have valid needs for this resource. Let's take a step back and understand the underlying requirements. Marketing, what specific outcomes are you trying to achieve? Sales, what's driving your timeline? Perhaps there's a way to share the resource or phase the usage. What if Marketing used it for the first two weeks of the month and Sales for the last two? Would that meet both teams' core needs?"
        },
        {
          prompt: "Un cliente amenaza con irse a la competencia si no bajas el precio un 30%.",
          sampleResponse: "I value our relationship and want to find a solution. Help me understand what's driving this request - is it purely about price, or are there other factors? Before we discuss numbers, I'd like to explore all the value we provide beyond just the product. If price is the main concern, what if we restructured the package to better fit your budget while maintaining quality? A 30% reduction isn't feasible, but I'm committed to finding something that works for both of us."
        }
      ],
      connectionToPrevious: "Las habilidades diplomáticas del nivel anterior son fundamentales aquí: ahora las aplicas en contextos de alta presión donde hay intereses en juego.",
      connectionToNext: "La negociación efectiva a menudo involucra escenarios hipotéticos complejos, que explorarás con los condicionales mixtos."
    },
    {
      id: 2,
      title: "Mixed Conditionals",
      titleEs: "Condicionales Mixtos",
      introduction: {
        title: "🔀 Condicionales Mixtos",
        explanation: "Los condicionales mixtos combinan diferentes tiempos para expresar situaciones complejas: una condición pasada con resultado presente, o una condición general con resultado pasado.",
        keyPoints: [
          "Tipo 3 → Tipo 2: If + past perfect, would + base (condición pasada, resultado presente)",
          "Ejemplo: 'If I had studied harder, I would have a better job now'",
          "Tipo 2 → Tipo 3: If + past simple, would have + pp (condición general, resultado pasado)",
          "Ejemplo: 'If I were braver, I would have asked her out'",
          "Uso: situaciones complejas donde tiempo de condición ≠ tiempo de resultado"
        ],
        examples: [
          { english: "If I had taken that job, I would be living in London now.", spanish: "Si hubiera tomado ese trabajo, estaría viviendo en Londres ahora.", explanation: "Condición pasada → Resultado presente" },
          { english: "If she spoke Spanish, she would have understood the conversation.", spanish: "Si ella hablara español, habría entendido la conversación.", explanation: "Condición general → Resultado pasado" },
          { english: "If we hadn't missed the train, we would be at the beach now.", spanish: "Si no hubiéramos perdido el tren, estaríamos en la playa ahora.", explanation: "Pasado irreal → Presente hipotético" }
        ],
        tips: [
          "💡 Identifica: ¿Cuándo es la condición? ¿Cuándo es el resultado?",
          "💡 Condición pasada + resultado presente = had + would + base",
          "💡 Condición permanente + resultado pasado = past simple + would have"
        ],
        whenToUse: [
          'Para reflexionar sobre decisiones pasadas: "If I had taken that job, I would be in London now"',
          'Cuando la condición es permanente pero el resultado es pasado: "If she spoke Spanish, she would have understood"',
          'En negociaciones: "If we had agreed earlier, we would be in a better position now"',
          'Para analizar escenarios: "If I were more assertive, I would have asked for the raise"'
        ],
        whenNotToUse: [
          '"If I would have" → "If I had": "If I had known" (NO "If I would have known")',
          'Para situaciones puramente pasadas → tercer condicional: "If I had studied, I would have passed"',
          'No confundas "If I were" con "If I was" en hipotéticos formales: "were" es correcto'
        ]
      },
      objectives: ["Formar condicionales mixtos", "Distinguir tipos de condiciones", "Expresar situaciones complejas"],
      grammarTheoryIds: ["c1-mixed-conditionals-advanced", "b2-conditionals-all"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l8t2_n1", word: "consequence", translation: "consecuencia", type: "noun", definition: "a result of an action", definitionEs: "un resultado de una acción", example: "The consequence is clear.", exampleEs: "La consecuencia es clara.", related: [], difficulty: 2 },
          { id: "l8t2_n2", word: "outcome", translation: "resultado", type: "noun", definition: "the end result", definitionEs: "el resultado final", example: "The outcome would be different.", exampleEs: "El resultado sería diferente.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l8t2_v1", word: "would be + -ing", translation: "estaría + -ando/-iendo", type: "verb", definition: "hypothetical present continuous", definitionEs: "presente continuo hipotético", example: "I would be working now.", exampleEs: "Estaría trabajando ahora.", related: [], difficulty: 1 },
          { id: "l8t2_v2", word: "would have + pp", translation: "habría + participio", type: "verb", definition: "hypothetical past", definitionEs: "pasado hipotético", example: "I would have gone.", exampleEs: "Habría ido.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l8t2_a1", word: "different", translation: "diferente", type: "adjective", definition: "not the same", definitionEs: "no igual", example: "Things would be different.", exampleEs: "Las cosas serían diferentes.", related: [], difficulty: 1 },
          { id: "l8t2_a2", word: "mixed", translation: "mixto", type: "adjective", definition: "combined from different types", definitionEs: "combinado de diferentes tipos", example: "This is a mixed conditional.", exampleEs: "Este es un condicional mixto.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l8t2_e1", word: "If I had (past)..., I would (present)...", translation: "Si hubiera (pasado)..., (presente)...", type: "expression", definition: "mixed conditional type 1", definitionEs: "condicional mixto tipo 1", example: "If I had saved money, I would own a house now.", exampleEs: "Si hubiera ahorrado dinero, tendría una casa ahora.", related: [], difficulty: 2 },
          { id: "l8t2_e2", word: "If I (general)..., I would have (past)...", translation: "Si (general)..., habría (pasado)...", type: "expression", definition: "mixed conditional type 2", definitionEs: "condicional mixto tipo 2", example: "If I were taller, I would have played basketball.", exampleEs: "Si fuera más alto, habría jugado baloncesto.", related: [], difficulty: 2 },
          { id: "l8t2_e3", word: "Things would be different if...", translation: "Las cosas serían diferentes si...", type: "expression", definition: "speculating about change", definitionEs: "especulando sobre cambio", example: "Things would be different if I had studied abroad.", exampleEs: "Las cosas serían diferentes si hubiera estudiado en el extranjero.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l8t2_cm1",
          wrong: "If I would have studied, I would be successful now.",
          correct: "If I had studied, I would be successful now.",
          explanation: "Never use 'would have' in the 'if' clause. Use 'had + past participle' for past conditions.",
          explanationEs: "En la cláusula 'if', nunca usamos 'would have'. Usa 'had + participio' para condición pasada.",
          category: "grammar" as const
        },
        {
          id: "l8t2_cm2",
          wrong: "If I had money, I would have bought it yesterday.",
          correct: "If I had had money, I would have bought it yesterday.",
          explanation: "For a specific past condition (yesterday), you need 'had had' (past perfect), not 'had' (simple past).",
          explanationEs: "Si la condición es pasada específica (ayer), necesitas 'had had' (past perfect), no 'had' (simple past).",
          category: "grammar" as const
        },
        {
          id: "l8t2_cm3",
          wrong: "Confusing which type of mixed conditional to use",
          correct: "Ask: When is the condition? When is the result? Match the tenses accordingly.",
          explanation: "Past condition + present result = had + would. General condition + past result = past simple + would have.",
          explanationEs: "Condición pasada + resultado presente = had + would. Condición general + resultado pasado = past simple + would have.",
          category: "grammar" as const
        },
        {
          id: "l8t2_cm4",
          wrong: "If I was you, I would have done it differently.",
          correct: "If I were you, I would have done it differently.",
          explanation: "With I/he/she/it in hypothetical situations, 'were' is grammatically correct, though 'was' is heard colloquially.",
          explanationEs: "Con 'I/he/she/it' en situaciones hipotéticas, 'were' es gramaticalmente correcto aunque 'was' se oye coloquialmente.",
          category: "grammar" as const
        },
        {
          id: "l8t2_cm5",
          wrong: "If I wouldn't have missed the train, I would be there now.",
          correct: "If I hadn't missed the train, I would be there now.",
          explanation: "Negation in the 'if' clause uses 'hadn't', not 'wouldn't have'.",
          explanationEs: "La negación en la cláusula 'if' usa 'hadn't', no 'wouldn't have'.",
          category: "grammar" as const
        }
      ],
      exercises: [
        {
          type: "identification",
          instruction: "Identifica el tipo de condicional mixto y los tiempos de la condición y el resultado",
          items: [
            { sentence: "If I had accepted the job, I would be living in London now.", condition: "past (had accepted)", result: "present (would be living)", type: "Type 3→2" },
            { sentence: "If she weren't so shy, she would have asked for a promotion.", condition: "general/present (weren't)", result: "past (would have asked)", type: "Type 2→3" },
            { sentence: "If we had invested earlier, we would be millionaires today.", condition: "past (had invested)", result: "present (would be)", type: "Type 3→2" },
            { sentence: "If he spoke better English, he would have gotten the job.", condition: "general (spoke)", result: "past (would have gotten)", type: "Type 2→3" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma estas oraciones en condicionales mixtos",
          items: [
            { situation: "I didn't study medicine. Now I'm not a doctor.", mixed: "If I had studied medicine, I would be a doctor now." },
            { situation: "She is very cautious. She didn't invest in Bitcoin in 2010.", mixed: "If she weren't so cautious, she would have invested in Bitcoin in 2010." },
            { situation: "They moved to another city. Now we don't see them often.", mixed: "If they hadn't moved, we would see them more often." },
            { situation: "He is not tech-savvy. He didn't understand the new system quickly.", mixed: "If he were more tech-savvy, he would have understood the new system quickly." }
          ]
        },
        {
          type: "fill-in-the-blank",
          instruction: "Completa con la forma correcta del verbo",
          items: [
            { sentence: "If I _____ (take) that flight, I _____ (be) in Paris right now.", answer: "had taken / would be" },
            { sentence: "If she _____ (not be) so stubborn, she _____ (accept) the help.", answer: "weren't (wasn't) / would have accepted" },
            { sentence: "If we _____ (save) more money, we _____ (own) our house by now.", answer: "had saved / would own" },
            { sentence: "If he _____ (be) more ambitious, he _____ (apply) for that position.", answer: "were / would have applied" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Encuentra y corrige el error en cada oración",
          items: [
            { incorrect: "If I would have known, I would tell you now.", correct: "If I had known, I would tell you now.", error: "'would have' in if-clause" },
            { incorrect: "If she was more confident, she would have spoken up.", correct: "If she were more confident, she would have spoken up.", error: "'was' instead of 'were' in hypothetical" },
            { incorrect: "If they wouldn't have left, they would be here.", correct: "If they hadn't left, they would be here.", error: "'wouldn't have' instead of 'hadn't'" }
          ]
        }
      ],
      modelDialogue: {
        title: "Reflexionando sobre decisiones pasadas y presente",
        context: "Dos amigos discuten cómo las decisiones pasadas afectan su vida actual",
        dialogue: [
          { speaker: "Alex", text: "Sometimes I think about how different life would be if I had taken that scholarship abroad.", translation: "A veces pienso en lo diferente que sería la vida si hubiera tomado esa beca en el extranjero." },
          { speaker: "Jordan", text: "I know what you mean. If I hadn't dropped out of law school, I would be a lawyer now.", translation: "Sé a qué te refieres. Si no hubiera dejado la facultad de derecho, sería abogado ahora." },
          { speaker: "Alex", text: "Do you regret it?", translation: "¿Te arrepientes?" },
          { speaker: "Jordan", text: "Honestly, no. If I were more interested in law, I would have stayed. But it wasn't for me.", translation: "Honestamente, no. Si estuviera más interesado en el derecho, me habría quedado. Pero no era para mí." },
          { speaker: "Alex", text: "That's a good point. If I had gone abroad, I wouldn't have met my wife. So maybe things worked out.", translation: "Buen punto. Si me hubiera ido al extranjero, no habría conocido a mi esposa. Así que tal vez las cosas salieron bien." },
          { speaker: "Jordan", text: "Exactly. And if you weren't so afraid of change back then, you might have missed out on something great.", translation: "Exacto. Y si no hubieras tenido tanto miedo al cambio en ese entonces, podrías haberte perdido algo grandioso." },
          { speaker: "Alex", text: "True. I guess everything happens for a reason. If we had made different choices, we wouldn't be who we are today.", translation: "Cierto. Supongo que todo pasa por una razón. Si hubiéramos tomado decisiones diferentes, no seríamos quienes somos hoy." }
        ],
        keyPhrases: [
          "If I had taken..., life would be...",
          "If I hadn't dropped out..., I would be...",
          "If I were more interested..., I would have stayed",
          "If I had gone..., I wouldn't have met...",
          "If we had made different choices..."
        ]
      },
      pronunciationFocus: {
        title: "Contracción y fluidez en condicionales",
        sounds: [
          { sound: "/ɪf aɪd/", word: "If I'd", tip: "'Had' se contrae a 'd'; en español no contraemos tanto - practica la fluidez" },
          { sound: "/wʊdəv/", word: "would've", tip: "NUNCA escribas 'would of'; suena 'would uv', no 'would ov'" },
          { sound: "/wʊdntəv/", word: "wouldn't've", tip: "En habla rápida 'wouldn't have' se contrae; muy común en condicionales" }
        ],
        minimalPairs: [
          { word1: "would have", word2: "would of", explanation: "'Would of' es INCORRECTO; siempre 'would have' o 'would've'" },
          { word1: "If I'd", word2: "If I", explanation: "If I'd = If I had; If I = condición presente. La contracción cambia el significado." }
        ],
        intonation: [
          { pattern: "Fall for hypothetical statements", example: "I would be there now↘", tip: "Tono descendente en afirmaciones hipotéticas" },
          { pattern: "Rise for reflection", example: "If I had known...↗", tip: "Ligera subida invita a continuar la reflexión" }
        ],
        points: [
          "'Had' se contrae a 'd: 'If I'd known' /ɪf aɪd noʊn/",
          "'Would have' → 'would've' /wʊdəv/ (NUNCA 'would of')",
          "'Wouldn't have' → 'wouldn't've' /wʊdntəv/ (muy informal)",
          "En habla rápida: 'If I had' → 'If I'd' → casi /ɪfaɪd/",
          "La entonación baja al final de afirmaciones hipotéticas"
        ],
        examples: [
          { word: "If I'd known", phonetic: "/ɪf aɪd noʊn/", tip: "Contrae 'had' a 'd'" },
          { word: "I would've gone", phonetic: "/aɪ wʊdəv gɒn/", tip: "'ve' suena como 'uv', NUNCA 'of'" },
          { word: "She wouldn't have", phonetic: "/ʃi wʊdnt hæv/", tip: "En habla rápida: /wʊdntəv/" }
        ]
      },
      culturalNote: {
        title: "Expresar arrepentimiento en diferentes culturas",
        titleEs: "Expresar arrepentimiento en diferentes culturas",
        content: "La forma de expresar arrepentimiento varía culturalmente. En culturas anglosajonas, reflexionar sobre 'lo que pudo haber sido' es común y aceptado. Sin embargo, en algunas culturas asiáticas, enfocarse demasiado en el pasado puede verse como improductivo. En culturas latinas, expresar arrepentimiento suele ser más emocional y directo. Los condicionales mixtos en inglés permiten una reflexión más distanciada y analítica, lo cual es valorado en contextos profesionales anglosajones.",
        contentEs: "En culturas anglosajonas, reflexionar sobre 'lo que pudo haber sido' es común. En culturas latinas, el arrepentimiento suele ser más emocional. Los condicionales mixtos permiten reflexión analítica, valorada en contextos profesionales.",
        region: "General",
        examples: [
          "Reflexión anglosajona: 'If I had invested, I would be wealthy now' (analítico)",
          "Reflexión latina: '¡Ojalá hubiera invertido! ¡Sería millonario!' (emocional)",
          "En contextos profesionales, el tono analítico es generalmente preferido"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la estructura de un condicional mixto tipo 3→2?",
          options: [
            "If + past simple, would have + pp",
            "If + had + pp, would + base verb",
            "If + would have, would be",
            "If + present, would have + pp"
          ],
          correctAnswer: 1,
          explanation: "Condición pasada (had + pp) con resultado presente (would + base): 'If I had studied, I would be a doctor'"
        },
        {
          question: "¿Cuándo usamos 'If I were' en lugar de 'If I was'?",
          options: [
            "Nunca, 'was' es siempre correcto",
            "Solo en pasado",
            "En situaciones hipotéticas o irreales",
            "Solo en preguntas"
          ],
          correctAnswer: 2,
          explanation: "'Were' es gramaticalmente correcto en situaciones hipotéticas con I/he/she/it"
        },
        {
          question: "'If she weren't so busy, she would have helped.' ¿Qué tipo de condicional es?",
          options: [
            "Type 3→2 (condición pasada, resultado presente)",
            "Type 2→3 (condición general, resultado pasado)",
            "Third conditional puro",
            "Second conditional puro"
          ],
          correctAnswer: 1,
          explanation: "La condición es general/permanente (weren't so busy), el resultado es pasado (would have helped)"
        },
        {
          question: "¿Por qué es incorrecto 'If I would have known'?",
          options: [
            "Porque 'would' no existe",
            "Porque en la cláusula 'if' no usamos 'would' para la condición",
            "Porque necesita 'will'",
            "Es correcto en inglés británico"
          ],
          correctAnswer: 1,
          explanation: "La cláusula 'if' usa 'had + pp' para condiciones pasadas, nunca 'would have'"
        },
        {
          question: "'Would've' se pronuncia como:",
          options: [
            "/wʊd hæv/",
            "/wʊd ɒf/",
            "/wʊdəv/",
            "/wʊld əv/"
          ],
          correctAnswer: 2,
          explanation: "'Would've' = /wʊdəv/. Suena como 'uv', pero NUNCA se escribe 'would of'"
        },
        {
          question: "Completa: 'If I _____ more outgoing, I _____ for that job last year.'",
          options: [
            "had been / would apply",
            "were / would have applied",
            "was / would apply",
            "had been / would have applied"
          ],
          correctAnswer: 1,
          explanation: "Condición general (were) + resultado pasado (would have applied) = Tipo 2→3"
        }
      ],
      guidedProduction: [
        {
          prompt: "Describe cómo sería tu vida ahora si hubieras tomado una decisión diferente en el pasado",
          sampleResponse: "If I had studied abroad during university, I would probably be working in an international company now. I would be fluent in another language, and I would have a completely different network of friends. However, if I had left my country, I wouldn't have met my current partner, and I wouldn't be living in this beautiful city. It's interesting to think about how one decision can change everything."
        },
        {
          prompt: "Explica por qué un compañero de trabajo habría actuado diferente si tuviera otra personalidad",
          sampleResponse: "If Maria weren't so perfectionist, she would have finished the project much faster last month. She spent weeks revising details that weren't that important. On the other hand, if she were less thorough, some errors would have slipped through. So while her perfectionism slowed us down, if she had been more relaxed, the quality wouldn't be as high as it is now."
        },
        {
          prompt: "Reflexiona sobre cómo una crisis global pasada afecta el presente",
          sampleResponse: "If the 2008 financial crisis hadn't happened, the economy would look very different today. If governments hadn't intervened, many more banks would have collapsed. If I had been working in finance at that time, I would have lost my job. The lessons from that crisis mean that if another crisis happens today, we would be better prepared."
        },
        {
          prompt: "Describe un escenario alternativo para tu empresa o industria",
          sampleResponse: "If our company had embraced digital transformation earlier, we would be market leaders now instead of playing catch-up. If we weren't so risk-averse as a company culture, we would have invested in that startup that became a unicorn. However, if we had taken more risks, some of those investments would have failed. If our CEO were more innovative, the company culture would have been different from the start."
        }
      ],
      connectionToPrevious: "Los condicionales mixtos te permiten expresar escenarios complejos en negociaciones: 'If we had agreed earlier, we would be in a better position now.'",
      connectionToNext: "El liderazgo efectivo requiere comunicar visión y motivar, habilidades que desarrollarás en la siguiente tarea."
    },
    {
      id: 3,
      title: "Leadership Communication",
      titleEs: "Comunicación de Liderazgo",
      introduction: {
        title: "👑 Comunicación de Liderazgo",
        explanation: "Los líderes efectivos inspiran, motivan y comunican visión. Aprenderás a usar lenguaje que genera compromiso y confianza.",
        keyPoints: [
          "Inspirar: 'Imagine a future where...', 'Together, we can...'",
          "Empoderar: 'I trust your judgment', 'You have the authority to...'",
          "Reconocer: 'I want to acknowledge...', 'Your contribution has been...'",
          "Visión: 'Our goal is to...', 'What we're building is...'",
          "Responsabilidad: 'The buck stops here', 'I take full responsibility'"
        ],
        examples: [
          { english: "I believe in this team's ability to overcome any challenge.", spanish: "Creo en la capacidad de este equipo para superar cualquier desafío.", explanation: "Expresando confianza" },
          { english: "Together, we can transform this industry.", spanish: "Juntos, podemos transformar esta industria.", explanation: "Visión compartida" },
          { english: "I want to acknowledge the hard work everyone has put in.", spanish: "Quiero reconocer el trabajo duro que todos han aportado.", explanation: "Reconocimiento" }
        ],
        tips: [
          "💡 Usa 'we' más que 'I' para crear sentido de equipo",
          "💡 Sé específico al reconocer logros",
          "💡 Los grandes líderes escuchan más de lo que hablan"
        ],
        whenToUse: [
          'En discursos a equipos: "Together, we can achieve great things"',
          'Al dar reconocimiento: "I want to acknowledge your excellent work on the Johnson project"',
          'En tiempos de cambio: "I take full responsibility for leading us through this"',
          'Para empoderar: "I trust your judgment on this matter"'
        ],
        whenNotToUse: [
          'Evita "I" constantemente para logros del equipo → "we": "We delivered" (NO "I delivered" cuando fue equipo)',
          'No des reconocimiento vago: "Good job" → "Your analysis saved us two weeks"',
          'En conversaciones casuales 1-a-1: "Thanks for your help" (NO "I want to acknowledge your contribution")'
        ]
      },
      objectives: ["Comunicar visión inspiradora", "Empoderar a otros", "Dar reconocimiento efectivo"],
      grammarTheoryIds: ["c1-cleft-sentences"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l8t3_n1", word: "vision", translation: "visión", type: "noun", definition: "a picture of the future", definitionEs: "una imagen del futuro", example: "Share your vision.", exampleEs: "Comparte tu visión.", related: ["visionary"], difficulty: 1 },
          { id: "l8t3_n2", word: "accountability", translation: "responsabilidad", type: "noun", definition: "being responsible", definitionEs: "ser responsable", example: "We value accountability.", exampleEs: "Valoramos la responsabilidad.", related: ["accountable"], difficulty: 2 },
          { id: "l8t3_n3", word: "empowerment", translation: "empoderamiento", type: "noun", definition: "giving power to others", definitionEs: "dar poder a otros", example: "Leadership is about empowerment.", exampleEs: "El liderazgo es sobre empoderamiento.", related: ["empower"], difficulty: 2 },
          { id: "l8t3_n4", word: "commitment", translation: "compromiso", type: "noun", definition: "dedication", definitionEs: "dedicación", example: "Your commitment is inspiring.", exampleEs: "Tu compromiso es inspirador.", related: ["committed"], difficulty: 1 },
        ],
        verbs: [
          { id: "l8t3_v1", word: "inspire", translation: "inspirar", type: "verb", definition: "to motivate", definitionEs: "motivar", example: "Great leaders inspire others.", exampleEs: "Los grandes líderes inspiran a otros.", related: ["inspiration"], difficulty: 1 },
          { id: "l8t3_v2", word: "empower", translation: "empoderar", type: "verb", definition: "to give power/authority", definitionEs: "dar poder/autoridad", example: "I want to empower you to make decisions.", exampleEs: "Quiero empoderarte para tomar decisiones.", related: [], difficulty: 2 },
          { id: "l8t3_v3", word: "acknowledge", translation: "reconocer", type: "verb", definition: "to recognize", definitionEs: "reconocer", example: "I acknowledge your efforts.", exampleEs: "Reconozco tus esfuerzos.", related: [], difficulty: 1 },
          { id: "l8t3_v4", word: "delegate", translation: "delegar", type: "verb", definition: "to assign tasks", definitionEs: "asignar tareas", example: "Learn to delegate effectively.", exampleEs: "Aprende a delegar efectivamente.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l8t3_a1", word: "inspiring", translation: "inspirador", type: "adjective", definition: "motivating", definitionEs: "motivador", example: "That was an inspiring speech.", exampleEs: "Ese fue un discurso inspirador.", related: [], difficulty: 1 },
          { id: "l8t3_a2", word: "accountable", translation: "responsable", type: "adjective", definition: "responsible", definitionEs: "responsable", example: "We're all accountable.", exampleEs: "Todos somos responsables.", related: [], difficulty: 2 },
          { id: "l8t3_a3", word: "committed", translation: "comprometido", type: "adjective", definition: "dedicated", definitionEs: "dedicado", example: "We're committed to success.", exampleEs: "Estamos comprometidos con el éxito.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l8t3_e1", word: "Together, we can...", translation: "Juntos, podemos...", type: "expression", definition: "inclusive vision", definitionEs: "visión inclusiva", example: "Together, we can achieve great things.", exampleEs: "Juntos, podemos lograr grandes cosas.", related: [], difficulty: 1 },
          { id: "l8t3_e2", word: "I believe in this team", translation: "Creo en este equipo", type: "expression", definition: "expressing confidence", definitionEs: "expresando confianza", example: "I believe in this team's potential.", exampleEs: "Creo en el potencial de este equipo.", related: [], difficulty: 1 },
          { id: "l8t3_e3", word: "I take full responsibility", translation: "Asumo toda la responsabilidad", type: "expression", definition: "accepting accountability", definitionEs: "aceptando responsabilidad", example: "I take full responsibility for this decision.", exampleEs: "Asumo toda la responsabilidad por esta decisión.", related: [], difficulty: 1 },
          { id: "l8t3_e4", word: "I trust your judgment", translation: "Confío en tu juicio", type: "expression", definition: "empowering", definitionEs: "empoderando", example: "I trust your judgment on this matter.", exampleEs: "Confío en tu juicio en este asunto.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l8t3_cm1",
          wrong: "Using 'I' constantly when talking about team achievements",
          correct: "Use 'we' and 'the team' to share credit",
          explanation: "Effective leaders share credit with the team.",
          explanationEs: "Los líderes efectivos comparten el crédito con el equipo.",
          category: "usage" as const
        },
        {
          id: "l8t3_cm2",
          wrong: "Blaming the team when things go wrong",
          correct: "'I take responsibility' or 'We need to improve as a team'",
          explanation: "Leaders take responsibility for team failures.",
          explanationEs: "Los líderes asumen responsabilidad por los fallos del equipo.",
          category: "usage" as const
        },
        {
          id: "l8t3_cm3",
          wrong: "Vague praise like 'Good job everyone'",
          correct: "Specific recognition: 'I want to acknowledge Maria's excellent analysis'",
          explanation: "Specific recognition is more meaningful and motivating.",
          explanationEs: "El reconocimiento específico es más significativo y motivador.",
          category: "usage" as const
        },
        {
          id: "l8t3_cm4",
          wrong: "Micromanaging: 'Do it exactly this way'",
          correct: "'Here's the goal. I trust you to find the best approach.'",
          explanation: "Empowering means trusting the team's judgment.",
          explanationEs: "Empoderar significa confiar en el juicio del equipo.",
          category: "usage" as const
        },
        {
          id: "l8t3_cm5",
          wrong: "Abstract vision without connection to daily work",
          correct: "Connect vision to concrete actions: 'This means that every day...'",
          explanation: "Vision must translate into tangible actions.",
          explanationEs: "La visión debe traducirse en acciones tangibles.",
          category: "usage" as const
        }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Transforma estas frases de jefe a líder",
          items: [
            { boss: "I decided we're changing direction.", leader: "After careful consideration, I believe our best path forward is to change direction. Here's why..." },
            { boss: "You need to work harder.", leader: "I see the potential in this team. What support do you need to reach our goals?" },
            { boss: "That's not my problem.", leader: "Let's work together to find a solution. What resources do you need?" },
            { boss: "Just do what I say.", leader: "Here's the goal we're working toward. I trust your expertise to find the best approach." },
            { boss: "We failed because of the team.", leader: "We didn't achieve our target. As the leader, I take responsibility. Let's learn from this together." }
          ]
        },
        {
          type: "recognition-practice",
          instruction: "Escribe reconocimiento específico para cada situación",
          items: [
            { situation: "Un empleado salvó un proyecto con una solución creativa", generic: "Good job!", specific: "I want to acknowledge your creative thinking on the Johnson project. Your solution saved us two weeks and $50,000. That's exactly the kind of initiative we value." },
            { situation: "El equipo completó un proyecto difícil", generic: "Well done, team!", specific: "I'm incredibly proud of what we've accomplished together. Each of you contributed something unique - Sarah's attention to detail, Mike's client relationships, and Ana's technical expertise. Together, we delivered something remarkable." },
            { situation: "Un empleado junior mostró liderazgo", generic: "Nice work!", specific: "I noticed how you took initiative in yesterday's meeting when you identified that risk. That's the kind of leadership thinking that makes a real difference. Keep it up." }
          ]
        },
        {
          type: "vision-communication",
          instruction: "Practica comunicar visión conectándola con el trabajo diario",
          items: [
            { vision: "Ser líderes en innovación", connection: "Being leaders in innovation means that every time you encounter a problem, ask yourself: 'Is there a better way?' Your daily choices drive our innovation." },
            { vision: "Poner al cliente primero", connection: "Customer first isn't just a slogan. It means that in every email, every call, every decision, we ask: 'How does this serve the customer?'" },
            { vision: "Crear un impacto positivo", connection: "Making a positive impact happens in small moments - how we treat colleagues, how we solve problems, how we support each other through challenges." }
          ]
        },
        {
          type: "difficult-conversations",
          instruction: "Practica cómo un líder maneja conversaciones difíciles",
          items: [
            { situation: "Anunciar recortes de presupuesto", approach: "I want to be transparent with you. We're facing budget constraints, and difficult decisions lie ahead. I'm committed to handling this with fairness and to supporting everyone affected." },
            { situation: "Un proyecto fracasó", approach: "We didn't achieve what we set out to do. I take responsibility for this outcome. What I want us to focus on now is: What can we learn? How do we move forward stronger?" },
            { situation: "Hay conflicto en el equipo", approach: "I've noticed some tension in our team. This is normal when passionate people work together. Let's address this openly and find a way forward that works for everyone." }
          ]
        }
      ],
      modelDialogue: {
        title: "Discurso de liderazgo durante tiempos de cambio",
        context: "Una líder se dirige a su equipo durante una reestructuración",
        dialogue: [
          { speaker: "Leader", text: "Thank you all for being here. I know there's been a lot of uncertainty, and I want to address that directly.", translation: "Gracias a todos por estar aquí. Sé que ha habido mucha incertidumbre, y quiero abordar eso directamente." },
          { speaker: "Leader", text: "The changes we're facing are significant, but I believe in this team's ability to not just survive them, but to thrive.", translation: "Los cambios que enfrentamos son significativos, pero creo en la capacidad de este equipo no solo para sobrevivirlos, sino para prosperar." },
          { speaker: "Employee", text: "Can you tell us more about what this means for our jobs?", translation: "¿Puede decirnos más sobre lo que esto significa para nuestros trabajos?" },
          { speaker: "Leader", text: "I appreciate you asking directly. Here's what I can tell you: no decisions about roles have been made yet. When they are, I commit to being transparent with each of you personally.", translation: "Agradezco que preguntes directamente. Esto es lo que puedo decirte: no se han tomado decisiones sobre roles todavía. Cuando se tomen, me comprometo a ser transparente con cada uno de ustedes personalmente." },
          { speaker: "Leader", text: "What I want you to know is this: I take full responsibility for leading us through this transition. Together, we can shape what comes next.", translation: "Lo que quiero que sepan es esto: asumo toda la responsabilidad de liderarnos a través de esta transición. Juntos, podemos dar forma a lo que viene." },
          { speaker: "Employee 2", text: "What can we do in the meantime?", translation: "¿Qué podemos hacer mientras tanto?" },
          { speaker: "Leader", text: "Focus on what you do best. Your expertise is exactly what we need right now. I trust your judgment to continue delivering excellent work.", translation: "Enfóquense en lo que mejor hacen. Su experiencia es exactamente lo que necesitamos ahora. Confío en su juicio para continuar entregando un trabajo excelente." },
          { speaker: "Leader", text: "I want to acknowledge that uncertainty is uncomfortable. But I've seen this team overcome challenges before. I believe we'll emerge from this stronger than ever.", translation: "Quiero reconocer que la incertidumbre es incómoda. Pero he visto a este equipo superar desafíos antes. Creo que emergeremos de esto más fuertes que nunca." }
        ],
        keyPhrases: [
          "I want to address that directly",
          "I believe in this team's ability...",
          "I commit to being transparent",
          "I take full responsibility",
          "Together, we can...",
          "I trust your judgment",
          "I want to acknowledge..."
        ]
      },
      pronunciationFocus: {
        title: "Tono y presencia de liderazgo",
        sounds: [
          { sound: "/ˈvɪʒn/", word: "vision", tip: "Sílabas: vi-sion; la 's' suena /ʒ/ como en 'television'" },
          { sound: "Confident fall", word: "Together we can", tip: "Tono descendente firme transmite convicción y liderazgo" },
          { sound: "Emphatic stress", word: "I BELIEVE in this team", tip: "Énfasis en 'believe' muestra compromiso genuino" }
        ],
        minimalPairs: [
          { word1: "vision", word2: "mission", explanation: "Vision /ˈvɪʒn/ vs mission /ˈmɪʃn/ - ambas terminan en -ion" },
          { word1: "empower", word2: "employ", explanation: "Empower /ɪmˈpaʊər/ - acento en la segunda sílaba" }
        ],
        intonation: [
          { pattern: "Rise for inclusive 'we'", example: "Together, we can↗", tip: "Ligera subida incluye a la audiencia" },
          { pattern: "Fall for commitment", example: "I take full responsibility↘", tip: "Tono descendente transmite seriedad" }
        ],
        points: [
          "Habla con convicción - evita muletillas (um, uh, like)",
          "Pausas estratégicas antes de puntos importantes crean impacto",
          "Tono cálido pero firme - ni autoritario ni inseguro",
          "'I believe' con énfasis en 'believe', no en 'I'",
          "Contacto visual (o mirar a la cámara) mientras dices frases clave"
        ],
        examples: [
          { word: "I believe in this team", phonetic: "Pausa después de 'believe'", tip: "Énfasis en 'believe' y 'team', no en 'I'" },
          { word: "Together, we can achieve...", phonetic: "Énfasis en 'Together'", tip: "La pausa después de 'Together' crea conexión" },
          { word: "I take full responsibility", phonetic: "Firme pero no defensivo", tip: "Tono que muestra accountability, no culpa" }
        ]
      },
      culturalNote: {
        title: "Estilos de liderazgo cultural",
        titleEs: "Estilos de liderazgo cultural",
        content: "El liderazgo se percibe diferentemente según la cultura. En culturas anglosajonas, el líder 'servant leader' que empodera es valorado. En algunas culturas asiáticas, el líder debe proyectar autoridad y tomar decisiones claras. En culturas latinas, el líder carismático y cercano es apreciado. En Escandinavia, el consenso es fundamental. Adaptar tu estilo de comunicación al contexto cultural de tu equipo es una habilidad de liderazgo avanzada.",
        contentEs: "El liderazgo se percibe diferente según la cultura. En anglosajones, el líder que empodera es valorado. En culturas latinas, el líder carismático y cercano es apreciado. Adaptar tu estilo al contexto cultural es una habilidad avanzada.",
        region: "General",
        examples: [
          "US: 'What do you think we should do?' (busca input)",
          "Japan: Decisión clara del líder después de consultas privadas",
          "Sweden: Proceso de decisión grupal antes de actuar"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Por qué los líderes efectivos usan 'we' más que 'I'?",
          options: [
            "Porque 'I' es gramaticalmente incorrecto",
            "Para crear sentido de equipo y compartir responsabilidad",
            "Porque es más corto",
            "Para esconder responsabilidad personal"
          ],
          correctAnswer: 1,
          explanation: "'We' crea inclusión y muestra que el líder se ve como parte del equipo"
        },
        {
          question: "¿Cuál es la diferencia entre un jefe y un líder en reconocimiento?",
          options: [
            "Los jefes dan más reconocimiento",
            "Los líderes dan reconocimiento específico y significativo",
            "No hay diferencia",
            "Los líderes nunca dan reconocimiento"
          ],
          correctAnswer: 1,
          explanation: "El reconocimiento específico ('tu análisis salvó el proyecto') es más impactante que genérico ('buen trabajo')"
        },
        {
          question: "Cuando un proyecto falla, ¿qué dice un líder efectivo?",
          options: [
            "El equipo falló",
            "No fue mi culpa",
            "Tomo responsabilidad; aprendamos juntos",
            "Alguien tiene que pagar por esto"
          ],
          correctAnswer: 2,
          explanation: "Los líderes asumen responsabilidad y se enfocan en el aprendizaje"
        },
        {
          question: "¿Qué significa 'empoderar' a un equipo?",
          options: [
            "Darles más trabajo",
            "Dejarlos sin supervisión",
            "Confiar en su juicio y darles autoridad para decidir",
            "Ignorar sus problemas"
          ],
          correctAnswer: 2,
          explanation: "Empoderar significa confiar y dar autoridad, no abandonar o sobrecargar"
        },
        {
          question: "¿Cómo debe conectarse la visión con el trabajo diario?",
          options: [
            "No necesita conectarse",
            "Solo los ejecutivos necesitan conocer la visión",
            "La visión debe traducirse en acciones concretas y cotidianas",
            "La visión es solo para documentos oficiales"
          ],
          correctAnswer: 2,
          explanation: "La visión cobra vida cuando cada persona entiende cómo su trabajo contribuye"
        },
        {
          question: "En comunicación de liderazgo, ¿qué rol tienen las pausas?",
          options: [
            "Muestran que no sabes qué decir",
            "Crean impacto y permiten que las ideas se absorban",
            "Son señal de nerviosismo",
            "Deben evitarse siempre"
          ],
          correctAnswer: 1,
          explanation: "Las pausas estratégicas dan peso a las palabras y tiempo para procesar"
        }
      ],
      guidedProduction: [
        {
          prompt: "Da un discurso motivacional a tu equipo al inicio de un proyecto desafiante",
          sampleResponse: "Team, we're about to embark on one of the most challenging projects in our company's history. I won't pretend it will be easy. But I believe in every person in this room. I've seen your creativity, your dedication, and your resilience. Together, we have everything we need to succeed. My commitment to you is this: I will be here to support you, to remove obstacles, and to fight for the resources you need. What I need from you is your best thinking and your honest feedback. Let's make something we'll all be proud of."
        },
        {
          prompt: "Reconoce públicamente a un miembro del equipo que hizo una contribución excepcional",
          sampleResponse: "Before we close today, I want to acknowledge someone whose contribution made a real difference. Sarah, your work on the client presentation last week was exceptional. You didn't just meet the deadline - you created something that genuinely impressed the client and secured us the contract. What struck me most was how you anticipated their concerns before they even raised them. That level of strategic thinking is exactly what sets our team apart. Thank you for your dedication and creativity."
        },
        {
          prompt: "Comunica una decisión difícil (recortes, cambios de dirección) a tu equipo",
          sampleResponse: "I need to share some difficult news with you, and I want to be direct. Due to market conditions, we need to reduce our budget by 15%. This will affect some of our planned initiatives. I take full responsibility for navigating us through this. Here's what I can promise: I will be transparent about every decision, I will protect jobs wherever possible, and I will work to ensure we emerge from this stronger. I know this creates uncertainty. My door is always open for your questions and concerns."
        },
        {
          prompt: "Inspira a tu equipo a adoptar una nueva visión o dirección estratégica",
          sampleResponse: "Imagine a future where our company isn't just another player in the market, but the one that sets the standard. That's the vision I want us to pursue together. What does this mean for each of us? It means that every decision, every interaction, every piece of work is an opportunity to demonstrate excellence. It means asking not just 'Is this good enough?' but 'Could this be remarkable?' I believe we have the talent in this room to make this vision reality. The question is: are we ready to commit to it together?"
        }
      ],
      connectionToPrevious: "El liderazgo efectivo requiere navegar situaciones complejas - los condicionales mixtos te ayudan a analizar escenarios pasados y presentes con tu equipo.",
      connectionToNext: "Como líder, necesitarás reportar conversaciones y decisiones con precisión, habilidad que desarrollarás con el reported speech avanzado."
    },
    {
      id: 4,
      title: "Advanced Reported Speech",
      titleEs: "Discurso Indirecto Avanzado",
      introduction: {
        title: "🗣️ Discurso Indirecto Avanzado",
        explanation: "El reported speech avanzado incluye verbos de reporte específicos, preguntas indirectas y estructuras con infinitivo o gerundio.",
        keyPoints: [
          "Verbos específicos: admit, deny, suggest, recommend, warn, promise",
          "Patrones: admit + -ing, suggest + -ing/that, warn + not to",
          "Preguntas indirectas: 'She asked if/whether...', 'He wanted to know what...'",
          "Tiempo backshift: presente → pasado, pasado → pasado perfecto",
          "Sin backshift: verdades generales, reportes inmediatos"
        ],
        examples: [
          { english: "She admitted having made a mistake.", spanish: "Ella admitió haber cometido un error.", explanation: "admit + -ing" },
          { english: "He suggested that we should postpone the meeting.", spanish: "Él sugirió que deberíamos posponer la reunión.", explanation: "suggest + that" },
          { english: "They warned us not to invest in that company.", spanish: "Nos advirtieron que no invirtiéramos en esa empresa.", explanation: "warn + not to" }
        ],
        tips: [
          "💡 Elige el verbo de reporte según la intención: warn (advertir), promise (prometer)",
          "💡 'Suggest' nunca va con 'to': 'suggest doing' o 'suggest that + should'",
          "💡 Las preguntas indirectas NO invierten sujeto y verbo"
        ],
        whenToUse: [
          'En actas de reuniones: "She suggested that we should postpone the launch"',
          'Para reportar advertencias: "He warned us not to sign without legal review"',
          'Al resumir conversaciones: "They admitted having made an error"',
          'En preguntas indirectas formales: "She asked whether we had received the documents"'
        ],
        whenNotToUse: [
          '"Suggest" + "to": "suggest doing" o "suggest that" (NO "suggest to do")',
          'No uses "say" para sugerencias → "suggest": "She suggested postponing" (NO "She said to postpone")',
          'En conversación directa: "Should we postpone?" (NO "She asked if we should postpone" si estás citando en vivo)'
        ]
      },
      objectives: ["Usar verbos de reporte específicos", "Formar preguntas indirectas", "Aplicar backshift correctamente"],
      grammarTheoryIds: ["b1-reported-speech", "b1-gerund-vs-infinitive"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [],
        verbs: [
          { id: "l8t4_v1", word: "admit", translation: "admitir", type: "verb", definition: "to confess", definitionEs: "confesar", example: "She admitted making a mistake.", exampleEs: "Ella admitió cometer un error.", related: [], difficulty: 1 },
          { id: "l8t4_v2", word: "deny", translation: "negar", type: "verb", definition: "to refuse to accept", definitionEs: "rechazar aceptar", example: "He denied having seen her.", exampleEs: "Él negó haberla visto.", related: [], difficulty: 1 },
          { id: "l8t4_v3", word: "suggest", translation: "sugerir", type: "verb", definition: "to propose", definitionEs: "proponer", example: "She suggested going early.", exampleEs: "Ella sugirió ir temprano.", related: [], difficulty: 1 },
          { id: "l8t4_v4", word: "recommend", translation: "recomendar", type: "verb", definition: "to advise", definitionEs: "aconsejar", example: "I recommend taking a break.", exampleEs: "Recomiendo tomar un descanso.", related: [], difficulty: 1 },
          { id: "l8t4_v5", word: "warn", translation: "advertir", type: "verb", definition: "to caution", definitionEs: "prevenir", example: "She warned me not to go.", exampleEs: "Ella me advirtió que no fuera.", related: [], difficulty: 1 },
          { id: "l8t4_v6", word: "promise", translation: "prometer", type: "verb", definition: "to commit to", definitionEs: "comprometerse a", example: "He promised to help.", exampleEs: "Él prometió ayudar.", related: [], difficulty: 1 },
          { id: "l8t4_v7", word: "threaten", translation: "amenazar", type: "verb", definition: "to warn of bad consequences", definitionEs: "advertir de malas consecuencias", example: "He threatened to leave.", exampleEs: "Él amenazó con irse.", related: [], difficulty: 2 },
          { id: "l8t4_v8", word: "encourage", translation: "animar", type: "verb", definition: "to give confidence", definitionEs: "dar confianza", example: "She encouraged me to apply.", exampleEs: "Ella me animó a aplicar.", related: [], difficulty: 1 },
        ],
        adjectives: [],
        expressions: [
          { id: "l8t4_e1", word: "She asked if/whether...", translation: "Ella preguntó si...", type: "expression", definition: "indirect yes/no question", definitionEs: "pregunta indirecta de sí/no", example: "She asked if I was coming.", exampleEs: "Ella preguntó si yo iba.", related: [], difficulty: 1 },
          { id: "l8t4_e2", word: "He wanted to know what/when/why...", translation: "Él quería saber qué/cuándo/por qué...", type: "expression", definition: "indirect WH question", definitionEs: "pregunta indirecta con WH", example: "He wanted to know why I was late.", exampleEs: "Él quería saber por qué llegué tarde.", related: [], difficulty: 1 },
          { id: "l8t4_e3", word: "She admitted having...", translation: "Ella admitió haber...", type: "expression", definition: "admit + gerund", definitionEs: "admitir + gerundio", example: "She admitted having forgotten.", exampleEs: "Ella admitió haber olvidado.", related: [], difficulty: 2 },
          { id: "l8t4_e4", word: "He denied -ing...", translation: "Él negó haber...", type: "expression", definition: "deny + gerund", definitionEs: "negar + gerundio", example: "He denied breaking the vase.", exampleEs: "Él negó haber roto el jarrón.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l8t4_cm1", wrong: "She suggested to go early.", correct: "She suggested going early. / She suggested that we go early.", explanation: "'Suggest' is never followed by 'to + infinitive'. Use gerund or 'that + subjunctive/should'.", explanationEs: "'Suggest' nunca va seguido de 'to + infinitivo'. Usa gerundio o 'that + subjunctive/should'", category: "grammar" },
        { id: "l8t4_cm2", wrong: "He asked where is the station.", correct: "He asked where the station was.", explanation: "Indirect questions do NOT invert subject and verb.", explanationEs: "Las preguntas indirectas NO invierten sujeto y verbo", category: "grammar" },
        { id: "l8t4_cm3", wrong: "She said me that...", correct: "She told me that... / She said that...", explanation: "'Say' does not take a direct object of person; 'tell' does.", explanationEs: "'Say' no lleva objeto directo de persona; 'tell' sí lo lleva", category: "grammar" },
        { id: "l8t4_cm4", wrong: "He denied to take the money.", correct: "He denied taking the money. / He denied having taken the money.", explanation: "'Deny' is always followed by gerund, not infinitive.", explanationEs: "'Deny' siempre va seguido de gerundio, no de infinitivo", category: "grammar" },
        { id: "l8t4_cm5", wrong: "She asked did I want coffee.", correct: "She asked if/whether I wanted coffee.", explanation: "In indirect yes/no questions, use 'if/whether' + affirmative word order.", explanationEs: "En preguntas indirectas de sí/no, usa 'if/whether' + orden afirmativo", category: "grammar" },
      ],
      exercises: [
        {
          type: "verb-pattern-matching",
          instruction: "Relaciona cada verbo de reporte con su patrón gramatical",
          items: [
            { verb: "suggest", patterns: ["+ -ing", "+ that... (should)"], examples: ["suggested going", "suggested that we should go"] },
            { verb: "admit", patterns: ["+ -ing", "+ that"], examples: ["admitted making", "admitted that he had made"] },
            { verb: "deny", patterns: ["+ -ing"], examples: ["denied taking"] },
            { verb: "warn", patterns: ["+ object + (not) to"], examples: ["warned me not to go"] },
            { verb: "recommend", patterns: ["+ -ing", "+ that... (should)"], examples: ["recommended staying", "recommended that I should stay"] },
            { verb: "encourage", patterns: ["+ object + to"], examples: ["encouraged me to apply"] },
            { verb: "promise", patterns: ["+ to", "+ that"], examples: ["promised to help", "promised that he would help"] },
            { verb: "threaten", patterns: ["+ to"], examples: ["threatened to leave"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma el discurso directo a indirecto usando el verbo indicado",
          items: [
            { direct: "'I didn't take the documents.' (deny)", reported: "He denied taking/having taken the documents." },
            { direct: "'Why don't we take a break?' (suggest)", reported: "She suggested taking a break. / She suggested that we take a break." },
            { direct: "'Yes, I made a mistake.' (admit)", reported: "He admitted making/having made a mistake." },
            { direct: "'Don't trust him!' (warn)", reported: "She warned me not to trust him." },
            { direct: "'You should apply for the job.' (encourage)", reported: "She encouraged me to apply for the job." },
            { direct: "'I'll resign if this continues.' (threaten)", reported: "He threatened to resign if it continued." }
          ]
        },
        {
          type: "indirect-questions",
          instruction: "Transforma estas preguntas directas a indirectas",
          items: [
            { direct: "'Where is the meeting?'", indirect: "She asked where the meeting was." },
            { direct: "'Do you have time?'", indirect: "He asked if/whether I had time." },
            { direct: "'What time does the train leave?'", indirect: "She wanted to know what time the train left." },
            { direct: "'Have you finished the report?'", indirect: "He asked if/whether I had finished the report." },
            { direct: "'Why didn't you call me?'", indirect: "She asked why I hadn't called her." },
            { direct: "'Will you be at the meeting?'", indirect: "He wanted to know if/whether I would be at the meeting." }
          ]
        },
        {
          type: "backshift-practice",
          instruction: "Aplica el backshift correctamente (o indica cuando no es necesario)",
          items: [
            { direct: "'I am tired.' (reported same day)", reported: "She said she was tired. (OR: She said she is tired - still true)" },
            { direct: "'The Earth revolves around the Sun.'", reported: "He said the Earth revolves around the Sun. (No backshift - permanent truth)" },
            { direct: "'I will help you tomorrow.'", reported: "She said she would help me the next day." },
            { direct: "'I have been waiting for an hour.'", reported: "He said he had been waiting for an hour." }
          ]
        }
      ],
      modelDialogue: {
        title: "Reportando una reunión a un colega",
        context: "Ana le cuenta a su colega qué pasó en una reunión a la que él no asistió",
        dialogue: [
          { speaker: "Carlos", text: "I missed the meeting. What did they say?", translation: "Me perdí la reunión. ¿Qué dijeron?" },
          { speaker: "Ana", text: "Well, the manager started by asking if everyone had read the report.", translation: "Bueno, el gerente empezó preguntando si todos habían leído el informe." },
          { speaker: "Carlos", text: "And? What about the budget issue?", translation: "¿Y? ¿Qué hay del tema del presupuesto?" },
          { speaker: "Ana", text: "Sarah admitted that there had been some miscalculations. She suggested revising the projections.", translation: "Sarah admitió que había habido algunos errores de cálculo. Sugirió revisar las proyecciones." },
          { speaker: "Carlos", text: "How did the manager react?", translation: "¿Cómo reaccionó el gerente?" },
          { speaker: "Ana", text: "He encouraged the team to be more careful in the future. But he also warned us not to miss deadlines again.", translation: "Animó al equipo a ser más cuidadoso en el futuro. Pero también nos advirtió que no perdiéramos los plazos de nuevo." },
          { speaker: "Carlos", text: "Did anyone ask about the new project?", translation: "¿Alguien preguntó sobre el nuevo proyecto?" },
          { speaker: "Ana", text: "Yes, Tom wanted to know when it would start. The manager promised to send an update by Friday.", translation: "Sí, Tom quería saber cuándo empezaría. El gerente prometió enviar una actualización para el viernes." },
          { speaker: "Carlos", text: "Thanks for the summary. Anything else?", translation: "Gracias por el resumen. ¿Algo más?" },
          { speaker: "Ana", text: "Oh, and the manager recommended that we all take the new training course. He said it would be very useful.", translation: "Ah, y el gerente recomendó que todos tomemos el nuevo curso de capacitación. Dijo que sería muy útil." }
        ],
        keyPhrases: [
          "asked if...",
          "admitted that...",
          "suggested revising",
          "encouraged... to",
          "warned us not to",
          "wanted to know when",
          "promised to",
          "recommended that we..."
        ]
      },
      pronunciationFocus: {
        title: "Fluidez en reported speech",
        sounds: [
          { sound: "/æskt ɪf/", word: "asked if", tip: "En habla rápida 'asked if' suena casi como una palabra; la 'd' de asked puede asimilarse" },
          { sound: "/ˈwɒntɪd tə/", word: "wanted to", tip: "'To' suena débil /tə/; en español tendemos a pronunciar 'to' con más fuerza" },
          { sound: "Flat intonation", word: "She asked if I was coming", tip: "Las preguntas indirectas NO suben al final como las directas" }
        ],
        minimalPairs: [
          { word1: "said", word2: "sad", explanation: "Said /sed/ vs sad /sæd/ - vocales diferentes; 'said' rima con 'bed'" },
          { word1: "told", word2: "tolled", explanation: "Told /təʊld/ - la 'o' es larga; no confundir con 'tolled'" }
        ],
        intonation: [
          { pattern: "Flat for indirect questions", example: "He asked where I lived→", tip: "No subas el tono al final; suena como afirmación" }
        ],
        points: [
          "'Asked if' se pronuncia casi como una palabra: /æsktɪf/",
          "'Wanted to know' → /ˈwɒntɪd tə nəʊ/ (to = débil)",
          "'He said that he...' → el primer 'he' puede omitirse en habla rápida",
          "Los verbos de reporte pueden contraerse: 'She'd admitted' = 'She had admitted'",
          "Mantén la entonación plana en preguntas indirectas (no suben al final)"
        ],
        examples: [
          { word: "She asked if I was coming", phonetic: "/ʃi æskt ɪf aɪ wəz ˈkʌmɪŋ/", tip: "Entonación plana, no como pregunta directa" },
          { word: "He wanted to know", phonetic: "/hi ˈwɒntɪd tə noʊ/", tip: "'to' es débil, casi /tə/" },
          { word: "She admitted having...", phonetic: "/ʃi ədˈmɪtɪd ˈhævɪŋ/", tip: "Fluidez entre 'admitted' y 'having'" }
        ]
      },
      culturalNote: {
        title: "Reported speech en contextos profesionales",
        titleEs: "Reported speech en contextos profesionales",
        content: "En el mundo profesional anglosajón, el reported speech es fundamental para reuniones, emails y documentación. Saber reportar con precisión quién dijo qué, y usar el verbo de reporte apropiado, demuestra profesionalismo. 'He suggested' es diferente de 'he demanded'; 'she admitted' es diferente de 'she claimed'. La elección del verbo de reporte puede influir en cómo se percibe el mensaje original. En contextos legales y formales, la precisión es especialmente crítica.",
        contentEs: "En el mundo profesional anglosajón, el reported speech es fundamental. La elección del verbo de reporte influye en cómo se percibe el mensaje. En contextos legales, la precisión es crítica.",
        region: "General",
        examples: [
          "Neutral: 'He said that...'",
          "Implica reluctancia: 'He admitted that...'",
          "Implica fuerza: 'He insisted that...'",
          "Implica duda sobre la verdad: 'He claimed that...'"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Por qué es incorrecto 'She suggested to go early'?",
          options: [
            "Porque 'suggest' no existe",
            "Porque 'suggest' nunca va con 'to + infinitivo'",
            "Porque falta el sujeto",
            "Porque necesita 'that'"
          ],
          correctAnswer: 1,
          explanation: "'Suggest' va con gerundio (suggest going) o 'that + subjunctive' (suggest that we go)"
        },
        {
          question: "¿Cuál es la forma correcta de reportar 'Where is the bank?'?",
          options: [
            "She asked where is the bank",
            "She asked where was the bank",
            "She asked where the bank was",
            "She asked where the bank is"
          ],
          correctAnswer: 2,
          explanation: "En preguntas indirectas no hay inversión: sujeto + verbo"
        },
        {
          question: "¿Qué verbo usarías para reportar 'Yes, I broke the window'?",
          options: [
            "He suggested breaking",
            "He admitted breaking",
            "He denied breaking",
            "He recommended breaking"
          ],
          correctAnswer: 1,
          explanation: "'Admit' se usa cuando alguien reconoce haber hecho algo"
        },
        {
          question: "'Deny' va seguido de:",
          options: [
            "to + infinitivo",
            "that + clause solamente",
            "gerundio (-ing)",
            "objeto directo"
          ],
          correctAnswer: 2,
          explanation: "'Deny' siempre va con gerundio: 'He denied taking the money'"
        },
        {
          question: "¿Cuándo NO se aplica backshift?",
          options: [
            "Siempre se aplica",
            "Con verdades generales o permanentes",
            "Solo en preguntas",
            "Con verbos modales"
          ],
          correctAnswer: 1,
          explanation: "Las verdades permanentes no necesitan backshift: 'He said the sun rises in the east'"
        },
        {
          question: "¿Cuál es la diferencia entre 'say' y 'tell'?",
          options: [
            "No hay diferencia",
            "'Tell' necesita objeto de persona, 'say' no",
            "'Say' es formal, 'tell' es informal",
            "'Tell' es para órdenes solamente"
          ],
          correctAnswer: 1,
          explanation: "'Tell me' (con objeto) vs 'Say that...' (sin objeto de persona)"
        }
      ],
      guidedProduction: [
        {
          prompt: "Reporta una conversación de negocios que tuviste con un cliente",
          sampleResponse: "I met with the client yesterday. She asked if we could deliver by the end of the month. I explained that it would be difficult but not impossible. She suggested pushing the deadline to the 5th of next month. I admitted that the original timeline had been optimistic. She wanted to know what had caused the delay. I told her that there had been supply chain issues. Finally, she warned me not to underestimate the timeline again, but she also encouraged the team to keep up the good work on quality."
        },
        {
          prompt: "Escribe un email resumiendo los puntos clave de una reunión",
          sampleResponse: "Hi team, here's a summary of yesterday's meeting. The director announced that the company would be restructuring the sales department. He explained that this decision had been made after careful analysis. Sarah asked whether existing employees would be affected. The director assured us that no layoffs were planned. He recommended that anyone with concerns should speak with HR. Finally, he reminded us that the changes would take effect next quarter and promised to keep everyone updated."
        },
        {
          prompt: "Reporta una discusión entre colegas sobre un proyecto",
          sampleResponse: "There was quite a debate in the meeting. Tom suggested postponing the launch, but Maria disagreed. She insisted that the deadline was achievable. Tom warned the team not to underestimate the risks. He asked whether anyone had considered the technical challenges. Maria admitted that there were some unknowns, but she argued that waiting would cost us market share. Eventually, the manager recommended that we proceed with a modified timeline and promised to provide additional resources."
        },
        {
          prompt: "Reporta feedback que recibiste de tu supervisor",
          sampleResponse: "My supervisor gave me my annual review yesterday. She said that my performance had been excellent overall. She particularly praised my client communication skills. However, she suggested that I work on my time management. She asked whether I had considered taking a project management course. She encouraged me to take on more leadership responsibilities and promised to support my professional development. She also warned me not to take on too much at once."
        }
      ],
      connectionToPrevious: "Como líder, debes reportar decisiones y conversaciones con precisión - el reported speech avanzado te da las herramientas.",
      connectionToNext: "En situaciones de negocios, a menudo necesitas discutir dilemas éticos - aprenderás el vocabulario y las estructuras para esto."
    },
    {
      id: 5,
      title: "Discussing Ethics in Business",
      titleEs: "Discutiendo Ética en los Negocios",
      introduction: {
        title: "⚖️ Ética en los Negocios",
        explanation: "La ética empresarial es fundamental en el mundo globalizado. Aprenderás a discutir dilemas éticos y expresar posiciones morales en inglés.",
        keyPoints: [
          "Principios: 'It's a matter of principle', 'This raises ethical concerns'",
          "Dilemas: 'On one hand... on the other hand', 'We're faced with a dilemma'",
          "Responsabilidad: 'Corporate social responsibility', 'Accountability to stakeholders'",
          "Integridad: 'Acting with integrity', 'Maintaining ethical standards'",
          "Consecuencias: 'The implications of this decision...', 'This could lead to...'"
        ],
        examples: [
          { english: "This decision raises serious ethical concerns.", spanish: "Esta decisión plantea serias preocupaciones éticas.", explanation: "Expresando preocupación" },
          { english: "We have a responsibility to our stakeholders and the community.", spanish: "Tenemos una responsabilidad con nuestros stakeholders y la comunidad.", explanation: "CSR" },
          { english: "Acting with integrity means doing the right thing even when it's difficult.", spanish: "Actuar con integridad significa hacer lo correcto incluso cuando es difícil.", explanation: "Definiendo integridad" }
        ],
        tips: [
          "💡 Los dilemas éticos rara vez son blanco y negro",
          "💡 Usa 'On one hand... on the other hand' para presentar ambos lados",
          "💡 Considera los impactos a corto y largo plazo"
        ],
        whenToUse: [
          'En debates profesionales: "On one hand, profits matter; on the other, we have ethical obligations"',
          'Para analizar escenarios: "The dilemma is whether to prioritize short-term gains or long-term reputation"',
          'En casos de estudio: "From a utilitarian perspective, the outcome would be..."',
          'Al discutir compliance: "We need to consider the ethical implications of this decision"'
        ],
        whenNotToUse: [
          'No uses "dilemma" para problemas con solución clara → "dilemma" = dos opciones difíciles',
          'Evita "utilitarianism" sin contexto → explica brevemente primero',
          'No confundas "principle" (principio) con "principal" (director): "ethical principles"'
        ]
      },
      objectives: ["Discutir dilemas éticos", "Expresar posiciones morales", "Usar vocabulario de ética empresarial"],
      grammarTheoryIds: ["c1-hedging", "b2-conditionals-all"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l8t5_n1", word: "ethics", translation: "ética", type: "noun", definition: "moral principles", definitionEs: "principios morales", example: "Business ethics are important.", exampleEs: "La ética empresarial es importante.", related: ["ethical"], difficulty: 1 },
          { id: "l8t5_n2", word: "integrity", translation: "integridad", type: "noun", definition: "honesty and moral principles", definitionEs: "honestidad y principios morales", example: "She has great integrity.", exampleEs: "Ella tiene gran integridad.", related: [], difficulty: 2 },
          { id: "l8t5_n3", word: "dilemma", translation: "dilema", type: "noun", definition: "a difficult choice", definitionEs: "una elección difícil", example: "We face an ethical dilemma.", exampleEs: "Enfrentamos un dilema ético.", related: [], difficulty: 2 },
          { id: "l8t5_n4", word: "stakeholder", translation: "parte interesada", type: "noun", definition: "person affected by business", definitionEs: "persona afectada por el negocio", example: "We must consider all stakeholders.", exampleEs: "Debemos considerar a todas las partes interesadas.", related: [], difficulty: 2 },
          { id: "l8t5_n5", word: "transparency", translation: "transparencia", type: "noun", definition: "openness and honesty", definitionEs: "apertura y honestidad", example: "We value transparency.", exampleEs: "Valoramos la transparencia.", related: ["transparent"], difficulty: 2 },
        ],
        verbs: [
          { id: "l8t5_v1", word: "violate", translation: "violar", type: "verb", definition: "to break a rule", definitionEs: "romper una regla", example: "This would violate our code.", exampleEs: "Esto violaría nuestro código.", related: ["violation"], difficulty: 2 },
          { id: "l8t5_v2", word: "justify", translation: "justificar", type: "verb", definition: "to give reasons for", definitionEs: "dar razones para", example: "Can you justify this decision?", exampleEs: "¿Puedes justificar esta decisión?", related: [], difficulty: 1 },
          { id: "l8t5_v3", word: "comply", translation: "cumplir", type: "verb", definition: "to follow rules", definitionEs: "seguir reglas", example: "We must comply with regulations.", exampleEs: "Debemos cumplir con las regulaciones.", related: ["compliance"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l8t5_a1", word: "ethical", translation: "ético", type: "adjective", definition: "morally right", definitionEs: "moralmente correcto", example: "Is this ethical?", exampleEs: "¿Es esto ético?", related: [], difficulty: 1 },
          { id: "l8t5_a2", word: "unethical", translation: "no ético", type: "adjective", definition: "morally wrong", definitionEs: "moralmente incorrecto", example: "That would be unethical.", exampleEs: "Eso sería no ético.", related: [], difficulty: 1 },
          { id: "l8t5_a3", word: "transparent", translation: "transparente", type: "adjective", definition: "open and honest", definitionEs: "abierto y honesto", example: "We need to be more transparent.", exampleEs: "Necesitamos ser más transparentes.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l8t5_e1", word: "It's a matter of principle", translation: "Es una cuestión de principio", type: "expression", definition: "about ethics", definitionEs: "sobre ética", example: "I can't do that - it's a matter of principle.", exampleEs: "No puedo hacer eso - es cuestión de principio.", related: [], difficulty: 1 },
          { id: "l8t5_e2", word: "On one hand... on the other hand...", translation: "Por un lado... por otro lado...", type: "expression", definition: "presenting both sides", definitionEs: "presentando ambos lados", example: "On one hand it's profitable, on the other hand it's risky.", exampleEs: "Por un lado es rentable, por otro lado es riesgoso.", related: [], difficulty: 1 },
          { id: "l8t5_e3", word: "Corporate social responsibility", translation: "Responsabilidad social corporativa", type: "expression", definition: "business responsibility to society", definitionEs: "responsabilidad empresarial hacia la sociedad", example: "CSR is part of our strategy.", exampleEs: "La RSC es parte de nuestra estrategia.", related: [], difficulty: 2 },
          { id: "l8t5_e4", word: "Do the right thing", translation: "Hacer lo correcto", type: "expression", definition: "act ethically", definitionEs: "actuar éticamente", example: "We should always do the right thing.", exampleEs: "Siempre debemos hacer lo correcto.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l8t5_cm1", wrong: "Presenting ethics as black and white", correct: "Acknowledge complexity: 'On one hand... on the other hand...'", explanation: "Ethical dilemmas rarely have simple answers; acknowledging complexity shows maturity.", explanationEs: "Los dilemas éticos raramente tienen respuestas simples; reconocer la complejidad muestra madurez", category: "usage" },
        { id: "l8t5_cm2", wrong: "Confusing 'ethical' (adjective) with 'ethics' (noun)", correct: "'Business ethics are important' (noun) vs 'Is this ethical?' (adjective)", explanation: "'Ethics' is a noun (set of principles); 'ethical' is an adjective.", explanationEs: "'Ethics' es sustantivo (conjunto de principios); 'ethical' es adjetivo", category: "vocabulary" },
        { id: "l8t5_cm3", wrong: "Using 'moral' and 'ethical' interchangeably in business", correct: "'Ethical' is preferred in business contexts; 'moral' sounds more personal/religious", explanation: "In business, 'ethical' is more neutral and professional than 'moral'.", explanationEs: "En negocios, 'ethical' es más neutral y profesional que 'moral'", category: "vocabulary" },
        { id: "l8t5_cm4", wrong: "Stating opinions as absolutes: 'This is wrong!'", correct: "'This raises ethical concerns' or 'From an ethical standpoint...'", explanation: "Measured language allows discussion; absolutes close the dialogue.", explanationEs: "Lenguaje medido permite discusión; absolutos cierran el diálogo", category: "usage" },
        { id: "l8t5_cm5", wrong: "Ignoring stakeholders in ethical discussions", correct: "Consider all stakeholders: employees, customers, community, shareholders", explanation: "Ethical decisions must consider the impact on all those affected.", explanationEs: "Las decisiones éticas deben considerar el impacto en todos los afectados", category: "usage" },
      ],
      exercises: [
        {
          type: "dilemma-analysis",
          instruction: "Analiza estos dilemas éticos usando 'On one hand... on the other hand...'",
          items: [
            {
              dilemma: "A company can save money by outsourcing to countries with lower labor standards",
              onOneHand: "it reduces costs and keeps the company competitive",
              onTheOther: "it may support exploitative labor practices",
              stakeholders: ["shareholders", "foreign workers", "domestic employees", "consumers"]
            },
            {
              dilemma: "A pharmaceutical company discovers a drug has minor side effects after launch",
              onOneHand: "disclosing could damage the company and cause unnecessary panic",
              onTheOther: "patients have a right to informed consent",
              stakeholders: ["patients", "shareholders", "regulators", "doctors"]
            },
            {
              dilemma: "An employee discovers a colleague is padding their expense reports",
              onOneHand: "reporting could damage a colleague's career and relationship",
              onTheOther: "it's company money and staying silent is enabling fraud",
              stakeholders: ["the colleague", "the company", "other employees", "yourself"]
            }
          ]
        },
        {
          type: "vocabulary-in-context",
          instruction: "Completa las oraciones con vocabulario ético apropiado",
          items: [
            { sentence: "This decision raises serious _____ concerns.", answer: "ethical" },
            { sentence: "We have a responsibility to all our _____, not just shareholders.", answer: "stakeholders" },
            { sentence: "Acting with _____ means doing what's right even when no one is watching.", answer: "integrity" },
            { sentence: "We need more _____ about how these decisions are made.", answer: "transparency" },
            { sentence: "This would _____ our code of conduct.", answer: "violate" },
            { sentence: "How can you _____ this decision to our employees?", answer: "justify" }
          ]
        },
        {
          type: "stakeholder-analysis",
          instruction: "Para cada decisión, identifica stakeholders y potenciales impactos éticos",
          items: [
            {
              decision: "Automating customer service with AI",
              stakeholders: [
                { group: "Employees", impact: "Job losses, need for retraining" },
                { group: "Customers", impact: "Potentially worse service, 24/7 availability" },
                { group: "Shareholders", impact: "Cost savings, efficiency gains" },
                { group: "Community", impact: "Economic impact if large employer" }
              ]
            },
            {
              decision: "Using customer data for personalized marketing",
              stakeholders: [
                { group: "Customers", impact: "Privacy concerns, but better experience" },
                { group: "Company", impact: "Competitive advantage, legal risks" },
                { group: "Regulators", impact: "Compliance requirements" }
              ]
            }
          ]
        },
        {
          type: "ethical-language",
          instruction: "Transforma estas declaraciones directas en lenguaje ético profesional",
          items: [
            { direct: "This is wrong!", professional: "This raises serious ethical concerns that we need to address." },
            { direct: "They're being greedy.", professional: "There may be a conflict between profit motives and stakeholder interests." },
            { direct: "We have to tell the truth.", professional: "Transparency and honesty should guide our communication with stakeholders." },
            { direct: "Think about the workers!", professional: "We have a responsibility to consider the impact on our employees." }
          ]
        }
      ],
      modelDialogue: {
        title: "Discusión de un dilema ético en el comité de dirección",
        context: "El equipo directivo debate si revelar un problema de calidad menor en un producto",
        dialogue: [
          { speaker: "CEO", text: "We've discovered a minor defect in our product. It doesn't pose safety risks, but it affects performance slightly. The question is: do we disclose?", translation: "Hemos descubierto un defecto menor en nuestro producto. No representa riesgos de seguridad, pero afecta ligeramente el rendimiento. La pregunta es: ¿lo divulgamos?" },
          { speaker: "CFO", text: "On one hand, disclosure could damage our reputation and stock price. On the other hand, if it comes out later, the damage would be worse.", translation: "Por un lado, la divulgación podría dañar nuestra reputación y el precio de las acciones. Por otro lado, si sale después, el daño sería peor." },
          { speaker: "Legal", text: "From a compliance standpoint, we're not legally required to disclose. But there are ethical considerations beyond legal obligations.", translation: "Desde el punto de vista de cumplimiento, no estamos legalmente obligados a divulgar. Pero hay consideraciones éticas más allá de las obligaciones legales." },
          { speaker: "Ethics Officer", text: "This is a matter of principle. Our customers trust us. Acting with integrity means being transparent, even when it's difficult.", translation: "Es una cuestión de principio. Nuestros clientes confían en nosotros. Actuar con integridad significa ser transparentes, incluso cuando es difícil." },
          { speaker: "Marketing", text: "I understand the ethical argument, but we need to consider all stakeholders. Our employees depend on this company being financially healthy.", translation: "Entiendo el argumento ético, pero debemos considerar a todas las partes interesadas. Nuestros empleados dependen de que esta empresa sea financieramente sana." },
          { speaker: "CEO", text: "You're all raising valid points. We need to do the right thing while also being responsible to all stakeholders. Here's what I propose...", translation: "Todos están planteando puntos válidos. Necesitamos hacer lo correcto mientras también somos responsables con todas las partes interesadas. Esto es lo que propongo..." },
          { speaker: "CEO", text: "We disclose proactively, offer free repairs, and frame it as a demonstration of our commitment to quality and transparency.", translation: "Divulgamos proactivamente, ofrecemos reparaciones gratuitas, y lo enmarcamos como una demostración de nuestro compromiso con la calidad y la transparencia." }
        ],
        keyPhrases: [
          "This raises ethical concerns",
          "On one hand... on the other hand...",
          "From a compliance standpoint",
          "It's a matter of principle",
          "Acting with integrity",
          "Consider all stakeholders",
          "Do the right thing"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario ético",
        points: [
          "'Ethical' /ˈeθɪkəl/ - énfasis en primera sílaba",
          "'Integrity' /ɪnˈteɡrəti/ - énfasis en segunda sílaba",
          "'Stakeholder' /ˈsteɪkhoʊldər/ - énfasis en primera sílaba",
          "'Transparency' /trænsˈpærənsi/ - énfasis en segunda sílaba",
          "'Dilemma' /dɪˈlemə/ - énfasis en segunda sílaba (no 'DIlemma')"
        ],
        examples: [
          { word: "ethical", phonetic: "/ˈeθɪkəl/", tip: "El sonido 'th' es dental, como en 'think'" },
          { word: "integrity", phonetic: "/ɪnˈteɡrəti/", tip: "Énfasis en '-teg-'" },
          { word: "dilemma", phonetic: "/dɪˈlemə/", tip: "Énfasis en '-lem-', no en 'di-'" }
        ]
      },
      culturalNote: {
        title: "Ética empresarial global",
        content: "La ética empresarial varía significativamente entre culturas. Lo que se considera 'ético' en un país puede ser normal en otro. Por ejemplo, los regalos a clientes de negocios son esperados en algunas culturas asiáticas pero pueden verse como sobornos en contextos occidentales. En Escandinavia, la transparencia es casi absoluta; en otras culturas, cierta discreción es esperada. Las empresas globales deben navegar estos matices mientras mantienen estándares consistentes. El código de ética global debe ser lo suficientemente flexible para adaptarse culturalmente sin comprometer principios fundamentales.",
        examples: [
          "US/UK: Políticas estrictas anti-soborno (FCPA, UK Bribery Act)",
          "Japan: 'Omiyage' (regalos) es práctica normal de negocios",
          "Escandinavia: Transparencia radical, incluso salarios pueden ser públicos"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Por qué usar 'On one hand... on the other hand...' en discusiones éticas?",
          options: [
            "Porque es más largo",
            "Porque reconoce la complejidad del dilema",
            "Porque evita tomar una posición",
            "Porque es obligatorio legalmente"
          ],
          correctAnswer: 1,
          explanation: "Esta estructura reconoce que los dilemas éticos tienen múltiples perspectivas válidas"
        },
        {
          question: "¿Qué son los 'stakeholders'?",
          options: [
            "Solo los accionistas",
            "Todas las partes afectadas por las decisiones de la empresa",
            "Solo los empleados",
            "Los competidores"
          ],
          correctAnswer: 1,
          explanation: "Stakeholders incluye empleados, clientes, comunidad, proveedores, accionistas - todos los afectados"
        },
        {
          question: "¿Cuál es la diferencia entre 'ethical' y 'moral' en contextos de negocios?",
          options: [
            "Son exactamente iguales",
            "'Ethical' es más neutral/profesional; 'moral' suena más personal/religioso",
            "'Moral' es más formal",
            "'Ethical' solo se usa en documentos legales"
          ],
          correctAnswer: 1,
          explanation: "En negocios, 'ethical' es preferido por ser más neutral y profesional"
        },
        {
          question: "¿Qué significa 'acting with integrity'?",
          options: [
            "Seguir las reglas siempre",
            "Hacer lo correcto incluso cuando nadie ve o es difícil",
            "Maximizar ganancias",
            "Evitar problemas legales"
          ],
          correctAnswer: 1,
          explanation: "Integridad significa consistencia entre valores y acciones, especialmente cuando es difícil"
        },
        {
          question: "¿Por qué es importante la transparencia en ética empresarial?",
          options: [
            "Porque es obligatorio por ley",
            "Porque permite escrutinio y genera confianza",
            "Porque reduce costos",
            "Solo es importante para empresas públicas"
          ],
          correctAnswer: 1,
          explanation: "La transparencia permite que stakeholders evalúen decisiones y genera confianza"
        },
        {
          question: "¿Cómo se pronuncia 'dilemma'?",
          options: [
            "/ˈdɪlɛmə/ (énfasis en 'di-')",
            "/dɪˈlɛmə/ (énfasis en '-lem-')",
            "/daɪˈlɛmə/",
            "/dɪˈlaɪmə/"
          ],
          correctAnswer: 1,
          explanation: "El énfasis está en la segunda sílaba: di-LEM-ma"
        }
      ],
      guidedProduction: [
        {
          prompt: "Presenta un dilema ético a tu equipo y facilita la discusión",
          sampleResponse: "Team, I want to discuss a situation we're facing. A supplier has offered us significantly lower prices, but we have concerns about their labor practices. This raises important ethical questions. On one hand, the cost savings would help us remain competitive and potentially save jobs here. On the other hand, we may be indirectly supporting practices that violate our values. I'd like to hear your perspectives. How do we balance our responsibility to stakeholders here with our broader ethical obligations?"
        },
        {
          prompt: "Escribe un memo sobre por qué rechazaste una oportunidad de negocio por razones éticas",
          sampleResponse: "After careful consideration, we've decided not to proceed with the proposed partnership. While the financial benefits were attractive, several factors raised ethical concerns. The partner company's environmental practices do not align with our commitment to sustainability. Additionally, there were questions about their labor standards that we could not satisfactorily resolve. Acting with integrity sometimes means walking away from profitable opportunities. This decision reflects our belief that long-term reputation and stakeholder trust are more valuable than short-term gains."
        },
        {
          prompt: "Responde a un empleado que pregunta si una práctica empresarial es ética",
          sampleResponse: "Thank you for bringing this to my attention - this is exactly the kind of question we should be asking. You're right that there are ethical implications to consider. On one hand, this practice is legal and common in our industry. On the other hand, just because something is legal doesn't mean it's ethical. Let me look into this further. I want to consider all stakeholders: our customers, employees, and the community. If we find that this practice doesn't align with our values, we should be willing to change it. Your ethical awareness is exactly what makes our company stronger."
        },
        {
          prompt: "Presenta el caso para implementar un programa de responsabilidad social corporativa",
          sampleResponse: "I'd like to propose a formal Corporate Social Responsibility program. Here's why it matters. First, it's the right thing to do. We have a responsibility not just to shareholders, but to all stakeholders including the community that supports our business. Second, there's a strong business case: companies with strong CSR programs attract better talent, build customer loyalty, and often perform better financially long-term. Third, transparency about our social impact builds trust. I propose we start with environmental initiatives and community volunteering, then expand based on results. This is an investment in our integrity and our future."
        }
      ],
      connectionToPrevious: "El reported speech te ayuda a reportar discusiones éticas con precisión: 'She argued that transparency was essential, while he maintained that...'",
      connectionToNext: "Las discusiones éticas a menudo requieren estructuras complejas para expresar matices - dominarás estas en la siguiente tarea."
    },
    {
      id: 6,
      title: "Complex Sentence Structures",
      titleEs: "Estructuras de Oraciones Complejas",
      introduction: {
        title: "📝 Estructuras de Oraciones Complejas",
        explanation: "Oraciones complejas te permiten expresar ideas sofisticadas. Aprenderás a combinar cláusulas y usar estructuras avanzadas.",
        keyPoints: [
          "Participio: 'Having finished the report, I left' (After I had finished...)",
          "Inversión: 'Not only did he arrive late, but he also forgot the documents'",
          "Cleft sentences: 'It was John who called' (énfasis en John)",
          "Fronting: 'Rarely have I seen such dedication'",
          "Reducción: 'While working here, I learned a lot' (While I was working...)"
        ],
        examples: [
          { english: "Having reviewed all the options, we decided to proceed.", spanish: "Habiendo revisado todas las opciones, decidimos proceder.", explanation: "Participio perfecto" },
          { english: "Not only is she talented, but she's also hardworking.", spanish: "No solo es talentosa, sino que también es trabajadora.", explanation: "Not only + inversión" },
          { english: "It was the marketing team who proposed this idea.", spanish: "Fue el equipo de marketing quien propuso esta idea.", explanation: "Cleft sentence (énfasis)" }
        ],
        tips: [
          "💡 Las cláusulas de participio hacen la escritura más elegante",
          "💡 'Not only' SIEMPRE requiere inversión",
          "💡 Las cleft sentences enfatizan un elemento específico"
        ],
        whenToUse: [
          'En escritura formal: "Having reviewed the data, we can now make a decision"',
          'Para énfasis: "It was the cost, not the quality, that concerned them"',
          'Con inversión: "Not only did sales increase, but customer satisfaction improved"',
          'En descripciones: "Founded in 1995, the company has grown exponentially"'
        ],
        whenNotToUse: [
          'En conversación informal: "We looked at the data and decided" (NO "Having reviewed the data, we decided")',
          '"Not only" sin inversión: "Not only did he succeed" (NO "Not only he succeeded")',
          'Sujeto diferente en participio: "Walking down the street, the bus hit me" (NO - el bus no camina)'
        ]
      },
      objectives: ["Usar cláusulas de participio", "Formar oraciones con inversión", "Crear énfasis con cleft sentences"],
      grammarTheoryIds: ["b2-participle-clauses", "b2-inversion-after-negatives", "c1-cleft-sentences"],
      estimatedMinutes: 40,
      vocabulary: {
        nouns: [
          { id: "l8t6_n1", word: "clause", translation: "cláusula", type: "noun", definition: "part of a sentence", definitionEs: "parte de una oración", example: "This sentence has two clauses.", exampleEs: "Esta oración tiene dos cláusulas.", related: [], difficulty: 2 },
          { id: "l8t6_n2", word: "emphasis", translation: "énfasis", type: "noun", definition: "special importance", definitionEs: "importancia especial", example: "The emphasis is on quality.", exampleEs: "El énfasis está en la calidad.", related: ["emphasize"], difficulty: 1 },
        ],
        verbs: [
          { id: "l8t6_v1", word: "emphasize", translation: "enfatizar", type: "verb", definition: "to stress importance", definitionEs: "destacar importancia", example: "I want to emphasize this point.", exampleEs: "Quiero enfatizar este punto.", related: [], difficulty: 1 },
          { id: "l8t6_v2", word: "invert", translation: "invertir", type: "verb", definition: "to reverse order", definitionEs: "invertir el orden", example: "Invert the subject and verb.", exampleEs: "Invierte el sujeto y verbo.", related: ["inversion"], difficulty: 2 },
        ],
        adjectives: [],
        expressions: [
          { id: "l8t6_e1", word: "Having + past participle, ...", translation: "Habiendo + participio, ...", type: "expression", definition: "perfect participle clause", definitionEs: "cláusula de participio perfecto", example: "Having heard the news, she called immediately.", exampleEs: "Habiendo escuchado las noticias, llamó inmediatamente.", related: [], difficulty: 2 },
          { id: "l8t6_e2", word: "Not only... but also...", translation: "No solo... sino también...", type: "expression", definition: "adding emphasis", definitionEs: "añadiendo énfasis", example: "Not only is it expensive, but also inefficient.", exampleEs: "No solo es caro, sino también ineficiente.", related: [], difficulty: 1 },
          { id: "l8t6_e3", word: "It was/is... who/that...", translation: "Fue/Es... quien/que...", type: "expression", definition: "cleft sentence", definitionEs: "oración escindida", example: "It was Mary who found the solution.", exampleEs: "Fue Mary quien encontró la solución.", related: [], difficulty: 2 },
          { id: "l8t6_e4", word: "Rarely/Seldom/Never + inversion", translation: "Raramente/Rara vez/Nunca + inversión", type: "expression", definition: "negative fronting", definitionEs: "fronting negativo", example: "Never have I seen anything like it.", exampleEs: "Nunca he visto nada parecido.", related: [], difficulty: 2 },
          { id: "l8t6_e5", word: "While/When + -ing", translation: "Mientras + gerundio", type: "expression", definition: "reduced adverb clause", definitionEs: "cláusula adverbial reducida", example: "While working on the project, I discovered this.", exampleEs: "Mientras trabajaba en el proyecto, descubrí esto.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l8t6_adv1", word: "rarely", translation: "raramente", type: "adverb", definition: "not often", definitionEs: "no frecuentemente", example: "Rarely do we see such innovation.", exampleEs: "Raramente vemos tal innovación.", related: [], difficulty: 1 },
          { id: "l8t6_adv2", word: "seldom", translation: "rara vez", type: "adverb", definition: "not often", definitionEs: "no frecuentemente", example: "Seldom has a project been so successful.", exampleEs: "Rara vez un proyecto ha sido tan exitoso.", related: [], difficulty: 2 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l8t6_cm1", wrong: "Not only he arrived late, but also he forgot the documents.", correct: "Not only did he arrive late, but he also forgot the documents.", explanation: "'Not only' at the beginning ALWAYS requires inversion (auxiliary + subject + verb).", explanationEs: "'Not only' al inicio SIEMPRE requiere inversión (auxiliar + sujeto + verbo)", category: "grammar" },
        { id: "l8t6_cm2", wrong: "Having finished the report, the manager approved it.", correct: "Having finished the report, I submitted it for approval.", explanation: "The subject of the main clause must be the same as the one performing the participle action.", explanationEs: "El sujeto de la cláusula principal debe ser el mismo que realiza la acción del participio", category: "grammar" },
        { id: "l8t6_cm3", wrong: "It was John who called me yesterday. (para enfatizar 'yesterday')", correct: "It was yesterday that John called me. (para enfatizar 'yesterday')", explanation: "In cleft sentences, the emphasized element goes after 'It was/is'.", explanationEs: "En cleft sentences, el elemento enfatizado va después de 'It was/is'", category: "grammar" },
        { id: "l8t6_cm4", wrong: "Never I have seen such dedication.", correct: "Never have I seen such dedication.", explanation: "After negative adverbs at the beginning, there is inversion.", explanationEs: "Después de adverbios negativos al inicio, hay inversión", category: "grammar" },
        { id: "l8t6_cm5", wrong: "While was working here, I learned a lot.", correct: "While working here, I learned a lot.", explanation: "In reduced clauses, the subject and 'to be' verb are removed, leaving only the -ing form.", explanationEs: "En cláusulas reducidas, se elimina el sujeto y verbo 'to be', dejando solo el -ing", category: "grammar" },
      ],
      exercises: [
        {
          type: "inversion-practice",
          instruction: "Reescribe las oraciones comenzando con el adverbio negativo/restrictivo",
          items: [
            { original: "I have never experienced such hospitality.", inverted: "Never have I experienced such hospitality." },
            { original: "We rarely see such innovation in this industry.", inverted: "Rarely do we see such innovation in this industry." },
            { original: "She not only finished on time but also exceeded expectations.", inverted: "Not only did she finish on time, but she also exceeded expectations." },
            { original: "I had hardly arrived when the meeting started.", inverted: "Hardly had I arrived when the meeting started." },
            { original: "He little knew what awaited him.", inverted: "Little did he know what awaited him." }
          ]
        },
        {
          type: "participle-clauses",
          instruction: "Combina las oraciones usando cláusulas de participio",
          items: [
            { sentences: "I had finished the analysis. I presented the results.", combined: "Having finished the analysis, I presented the results." },
            { sentences: "She was convinced of its potential. She invested heavily.", combined: "Convinced of its potential, she invested heavily." },
            { sentences: "The report was written in French. It needed translation.", combined: "Written in French, the report needed translation." },
            { sentences: "We didn't know the full extent of the problem. We underestimated the risks.", combined: "Not knowing the full extent of the problem, we underestimated the risks." }
          ]
        },
        {
          type: "cleft-sentences",
          instruction: "Reescribe para enfatizar el elemento indicado",
          items: [
            { original: "John proposed this solution.", emphasize: "John", cleft: "It was John who proposed this solution." },
            { original: "The marketing team discovered the error.", emphasize: "the marketing team", cleft: "It was the marketing team that discovered the error." },
            { original: "We need better communication.", emphasize: "better communication", cleft: "What we need is better communication." },
            { original: "The timeline concerns me.", emphasize: "the timeline", cleft: "It's the timeline that concerns me." }
          ]
        },
        {
          type: "reduced-clauses",
          instruction: "Reduce las cláusulas adverbiales donde sea posible",
          items: [
            { full: "While I was working on the project, I discovered several issues.", reduced: "While working on the project, I discovered several issues." },
            { full: "Although she was experienced, she made a mistake.", reduced: "Although experienced, she made a mistake." },
            { full: "When it is compared to last year, performance improved.", reduced: "When compared to last year, performance improved." },
            { full: "If it is possible, please submit by Friday.", reduced: "If possible, please submit by Friday." }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentación ejecutiva con estructuras sofisticadas",
        context: "Un ejecutivo presenta resultados trimestrales usando lenguaje avanzado",
        dialogue: [
          { speaker: "CEO", text: "Rarely have we seen such strong results across all divisions.", translation: "Raramente hemos visto resultados tan fuertes en todas las divisiones." },
          { speaker: "CEO", text: "Not only did we exceed our revenue targets, but we also achieved record customer satisfaction.", translation: "No solo superamos nuestros objetivos de ingresos, sino que también logramos satisfacción del cliente récord." },
          { speaker: "CEO", text: "It was the sales team that really drove this success. I want to acknowledge their exceptional work.", translation: "Fue el equipo de ventas el que realmente impulsó este éxito. Quiero reconocer su trabajo excepcional." },
          { speaker: "CFO", text: "Having analyzed the data carefully, I can confirm that our margins have improved significantly.", translation: "Habiendo analizado los datos cuidadosamente, puedo confirmar que nuestros márgenes han mejorado significativamente." },
          { speaker: "CFO", text: "What concerns me, however, is the rising cost of raw materials.", translation: "Lo que me preocupa, sin embargo, es el aumento del costo de materias primas." },
          { speaker: "CEO", text: "That's a valid point. Little did we anticipate such rapid inflation when we set our budget.", translation: "Ese es un punto válido. Poco anticipamos una inflación tan rápida cuando establecimos nuestro presupuesto." },
          { speaker: "COO", text: "While navigating these challenges, we've also been restructuring our supply chain.", translation: "Mientras navegamos estos desafíos, también hemos estado reestructurando nuestra cadena de suministro." },
          { speaker: "CEO", text: "Indeed. Never before has operational efficiency been more critical to our success.", translation: "De hecho. Nunca antes la eficiencia operacional ha sido más crítica para nuestro éxito." }
        ],
        keyPhrases: [
          "Rarely have we seen...",
          "Not only did we..., but we also...",
          "It was [X] that...",
          "Having analyzed...",
          "What concerns me is...",
          "Little did we anticipate...",
          "While navigating...",
          "Never before has..."
        ]
      },
      pronunciationFocus: {
        title: "Énfasis y ritmo en estructuras complejas",
        points: [
          "En inversión, énfasis en el adverbio inicial: 'NEVER have I seen...'",
          "En cleft sentences, énfasis en el elemento enfatizado: 'It was JOHN who...'",
          "Pausas naturales después de cláusulas de participio: 'Having finished the report, [pausa] I...'",
          "'Not only' requiere pausa antes de 'but also': 'Not only did we finish, [pausa] but we also...'",
          "Mantén el ritmo fluido en cláusulas reducidas"
        ],
        examples: [
          { word: "Never have I seen", phonetic: "/ˈnevər hæv aɪ siːn/", tip: "Énfasis en 'Never'" },
          { word: "It was the team that", phonetic: "Énfasis en 'team'", tip: "El elemento después de 'It was' recibe énfasis" },
          { word: "Having finished,", phonetic: "Pausa después de la coma", tip: "La pausa señala la transición a la cláusula principal" }
        ]
      },
      culturalNote: {
        title: "Estructuras complejas en inglés formal",
        content: "Las estructuras complejas como inversión, cleft sentences y participios son marcadores de inglés educado y formal. En presentaciones ejecutivas, informes académicos y periodismo de calidad, estas estructuras son esperadas y admiradas. Sin embargo, usarlas excesivamente puede sonar pomposo o artificial. En conversación casual, suenan extrañas. El dominio está en saber cuándo usarlas: un discurso del CEO, sí; un email a un colega cercano, probablemente no. Los hablantes nativos educados las usan naturalmente pero con moderación.",
        examples: [
          "Formal presentation: 'Rarely have we seen such growth'",
          "Casual: 'We don't usually see this kind of growth'",
          "Written report: 'Having completed the analysis, we can conclude...'",
          "Email: 'After finishing the analysis, we found...'"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Qué requiere 'Not only' cuando está al inicio de la oración?",
          options: [
            "Nada especial",
            "Inversión (auxiliar + sujeto + verbo)",
            "Un verbo en pasado",
            "Una coma antes del verbo"
          ],
          correctAnswer: 1,
          explanation: "'Not only' al inicio siempre requiere inversión: 'Not only DID she finish...'"
        },
        {
          question: "'Having finished the report, the manager approved it.' ¿Qué problema tiene?",
          options: [
            "El tiempo verbal está mal",
            "El sujeto del participio (quien terminó) no coincide con el de la cláusula principal",
            "Falta una coma",
            "No tiene ningún problema"
          ],
          correctAnswer: 1,
          explanation: "¿Quién terminó el reporte? No el manager. El sujeto debe ser el mismo en ambas partes"
        },
        {
          question: "¿Cómo enfatizas 'the deadline' en 'The deadline worries me'?",
          options: [
            "THE DEADLINE worries me",
            "It was the deadline that worries me",
            "It's the deadline that worries me",
            "What worries me the deadline is"
          ],
          correctAnswer: 2,
          explanation: "Cleft sentence: 'It's the deadline that worries me' enfatiza 'the deadline'"
        },
        {
          question: "¿Cuál es la forma correcta después de 'Rarely'?",
          options: [
            "Rarely I have seen",
            "Rarely have I seen",
            "Rarely I see",
            "Rarely seen I have"
          ],
          correctAnswer: 1,
          explanation: "Después de adverbios negativos/restrictivos al inicio hay inversión"
        },
        {
          question: "'While working' es una reducción de:",
          options: [
            "While I work",
            "While I was working",
            "While to work",
            "While I had worked"
          ],
          correctAnswer: 1,
          explanation: "Se elimina el sujeto y 'was/were', dejando solo el -ing"
        },
        {
          question: "¿Cuándo son apropiadas estas estructuras complejas?",
          options: [
            "Siempre, en toda comunicación",
            "Solo en textos legales",
            "En contextos formales como presentaciones, informes, discursos",
            "Solo en inglés británico"
          ],
          correctAnswer: 2,
          explanation: "Son marcadores de formalidad; úsalas en contextos apropiados, no en conversación casual"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un párrafo de presentación ejecutiva usando al menos 3 estructuras complejas",
          sampleResponse: "Rarely have we faced such significant challenges in our company's history. Not only did we navigate a global supply chain crisis, but we also managed to increase market share by 5%. It was our dedicated team that made this possible. Having analyzed the market conditions carefully, we identified opportunities where others saw only obstacles. What truly sets us apart is our commitment to innovation. Never before has adaptability been more crucial to business success."
        },
        {
          prompt: "Reescribe este párrafo simple usando estructuras más sofisticadas",
          sampleResponse: "Original: 'We finished the project early. This surprised everyone. The new team member suggested the approach that saved time. We also stayed under budget.'\n\nSophisticated: 'Having finished the project ahead of schedule, we surprised everyone in the organization. It was the new team member who suggested the time-saving approach. Not only did we complete early, but we also stayed under budget. Rarely have we achieved such efficiency on a project of this scale.'"
        },
        {
          prompt: "Escribe un informe formal usando cláusulas de participio e inversión",
          sampleResponse: "Having reviewed the quarterly performance data, the finance team can confirm significant improvements. Analyzed in detail, the figures reveal a 15% increase in operational efficiency. Never before have our cost-reduction initiatives shown such immediate impact. Not only have we reduced overhead by 8%, but we also improved quality metrics. Written for the board, this report summarizes our key achievements. What remains challenging is maintaining this momentum in the coming quarters."
        },
        {
          prompt: "Describe un logro profesional usando cleft sentences para dar énfasis",
          sampleResponse: "It was last year's strategic pivot that truly transformed our business. What made the difference was our willingness to listen to customer feedback. It was the sales team who first identified the market shift. What we learned from this experience is invaluable. It's innovation and adaptability that will drive our future growth. What I'm most proud of is how the entire organization came together to make this happen."
        }
      ],
      connectionToPrevious: "Las discusiones éticas complejas se benefician de estructuras sofisticadas: 'Not only must we consider profit, but we also have responsibilities to the community.'",
      connectionToNext: "Estas estructuras avanzadas te preparan para discutir cambio e innovación con el nivel de sofisticación esperado en liderazgo."
    },
    {
      id: 7,
      title: "Discussing Change and Innovation",
      titleEs: "Discutiendo Cambio e Innovación",
      introduction: {
        title: "💡 Cambio e Innovación",
        explanation: "En el mundo empresarial moderno, el cambio es constante. Aprenderás a discutir transformación, innovación y gestión del cambio.",
        keyPoints: [
          "Describir cambio: 'undergo transformation', 'shift towards', 'transition to'",
          "Innovación: 'cutting-edge technology', 'disruptive innovation', 'breakthrough'",
          "Resistencia: 'resistance to change', 'overcome obstacles', 'embrace change'",
          "Implementación: 'roll out', 'phase in', 'pilot program'",
          "Resultados: 'drive growth', 'gain competitive advantage', 'transform the industry'"
        ],
        examples: [
          { english: "The company is undergoing a major digital transformation.", spanish: "La empresa está experimentando una transformación digital mayor.", explanation: "Describiendo cambio" },
          { english: "This technology has the potential to disrupt the entire industry.", spanish: "Esta tecnología tiene el potencial de disrumpir toda la industria.", explanation: "Innovación disruptiva" },
          { english: "We need to help employees embrace change rather than resist it.", spanish: "Necesitamos ayudar a los empleados a abrazar el cambio en lugar de resistirlo.", explanation: "Gestión del cambio" }
        ],
        tips: [
          "💡 'Disruptive' en negocios es positivo - significa revolucionario",
          "💡 Usa 'undergo' para cambios grandes y profundos",
          "💡 'Roll out' es gradual, 'launch' es inmediato"
        ],
        whenToUse: [
          'En presentaciones de estrategia: "We are undergoing a major digital transformation"',
          'Para describir innovación: "Disruptive technologies are changing the industry"',
          'En comunicaciones de cambio: "The new system will be rolled out over Q2"',
          'Al discutir transiciones: "The company is transitioning to a hybrid model"'
        ],
        whenNotToUse: [
          '"Disruptive" para personas problemáticas → "disruptive" = innovador en negocio; "disruptive behavior" = mala conducta',
          'No uses "launch" para implementaciones graduales → "roll out"',
          'Evita "change" genérico: "transformation", "restructuring" son más específicos'
        ]
      },
      objectives: ["Describir procesos de cambio", "Hablar sobre innovación", "Discutir gestión del cambio"],
      grammarTheoryIds: ["b2-future-continuous", "b2-future-perfect"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l8t7_n1", word: "transformation", translation: "transformación", type: "noun", definition: "major change", definitionEs: "cambio mayor", example: "Digital transformation is essential.", exampleEs: "La transformación digital es esencial.", related: ["transform"], difficulty: 1 },
          { id: "l8t7_n2", word: "innovation", translation: "innovación", type: "noun", definition: "new ideas or methods", definitionEs: "nuevas ideas o métodos", example: "We encourage innovation.", exampleEs: "Fomentamos la innovación.", related: ["innovate"], difficulty: 1 },
          { id: "l8t7_n3", word: "breakthrough", translation: "avance/descubrimiento", type: "noun", definition: "important discovery", definitionEs: "descubrimiento importante", example: "This is a major breakthrough.", exampleEs: "Este es un avance mayor.", related: [], difficulty: 2 },
          { id: "l8t7_n4", word: "disruption", translation: "disrupción", type: "noun", definition: "radical change", definitionEs: "cambio radical", example: "Digital disruption is everywhere.", exampleEs: "La disrupción digital está en todas partes.", related: ["disrupt"], difficulty: 2 },
          { id: "l8t7_n5", word: "pilot program", translation: "programa piloto", type: "noun", definition: "test implementation", definitionEs: "implementación de prueba", example: "We'll start with a pilot program.", exampleEs: "Comenzaremos con un programa piloto.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l8t7_v1", word: "transform", translation: "transformar", type: "verb", definition: "to change completely", definitionEs: "cambiar completamente", example: "We aim to transform the industry.", exampleEs: "Buscamos transformar la industria.", related: [], difficulty: 1 },
          { id: "l8t7_v2", word: "innovate", translation: "innovar", type: "verb", definition: "to introduce new ideas", definitionEs: "introducir nuevas ideas", example: "We must constantly innovate.", exampleEs: "Debemos innovar constantemente.", related: [], difficulty: 1 },
          { id: "l8t7_v3", word: "disrupt", translation: "disrumpir", type: "verb", definition: "to cause radical change", definitionEs: "causar cambio radical", example: "Technology is disrupting traditional business.", exampleEs: "La tecnología está disrumpiendo los negocios tradicionales.", related: [], difficulty: 2 },
          { id: "l8t7_v4", word: "embrace", translation: "abrazar/adoptar", type: "verb", definition: "to accept enthusiastically", definitionEs: "aceptar con entusiasmo", example: "We need to embrace change.", exampleEs: "Necesitamos adoptar el cambio.", related: [], difficulty: 1 },
          { id: "l8t7_v5", word: "roll out", translation: "implementar gradualmente", type: "verb", definition: "to introduce gradually", definitionEs: "introducir gradualmente", example: "We'll roll out the new system next month.", exampleEs: "Implementaremos el nuevo sistema el próximo mes.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l8t7_a1", word: "cutting-edge", translation: "de vanguardia", type: "adjective", definition: "most advanced", definitionEs: "más avanzado", example: "We use cutting-edge technology.", exampleEs: "Usamos tecnología de vanguardia.", related: [], difficulty: 2 },
          { id: "l8t7_a2", word: "disruptive", translation: "disruptivo", type: "adjective", definition: "causing major change", definitionEs: "causando cambio mayor", example: "It's a disruptive technology.", exampleEs: "Es una tecnología disruptiva.", related: [], difficulty: 2 },
          { id: "l8t7_a3", word: "groundbreaking", translation: "revolucionario", type: "adjective", definition: "innovative and important", definitionEs: "innovador e importante", example: "It's a groundbreaking approach.", exampleEs: "Es un enfoque revolucionario.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l8t7_e1", word: "undergo transformation", translation: "experimentar transformación", type: "expression", definition: "to experience major change", definitionEs: "experimentar cambio mayor", example: "The industry is undergoing transformation.", exampleEs: "La industria está experimentando transformación.", related: [], difficulty: 1 },
          { id: "l8t7_e2", word: "gain competitive advantage", translation: "obtener ventaja competitiva", type: "expression", definition: "to get ahead of competitors", definitionEs: "adelantarse a la competencia", example: "Innovation helps us gain competitive advantage.", exampleEs: "La innovación nos ayuda a obtener ventaja competitiva.", related: [], difficulty: 2 },
          { id: "l8t7_e3", word: "drive growth", translation: "impulsar crecimiento", type: "expression", definition: "to cause growth", definitionEs: "causar crecimiento", example: "Innovation drives growth.", exampleEs: "La innovación impulsa el crecimiento.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l8t7_cm1", wrong: "Using 'disruptive' negatively in business context", correct: "'Disruptive' in business means revolutionary and positive, not destructive", explanation: "In business, 'disruptive innovation' is positive — it means fundamentally changing a market.", explanationEs: "En negocios, 'disruptive innovation' es positivo - significa que cambia fundamentalmente un mercado", category: "vocabulary" },
        { id: "l8t7_cm2", wrong: "'We will make a transformation'", correct: "'We will undergo/implement a transformation'", explanation: "Transformations are 'undergone' (experienced) or 'implemented', not 'made'.", explanationEs: "Las transformaciones se 'undergo' (experimentan) o 'implement' (implementan), no se 'make'", category: "vocabulary" },
        { id: "l8t7_cm3", wrong: "'The change will happen at Monday'", correct: "'The change will happen on Monday' / 'take effect on Monday'", explanation: "Correct preposition: 'on' for specific days; also 'take effect' is more formal.", explanationEs: "Preposición correcta: 'on' para días específicos; también 'take effect' es más formal", category: "grammar" },
        { id: "l8t7_cm4", wrong: "Using 'innovation' and 'invention' interchangeably", correct: "'Invention' = creating something new; 'innovation' = applying ideas in new ways", explanation: "Innovation is not always invention; it can be applying existing ideas in new ways.", explanationEs: "Innovación no siempre es invención; puede ser aplicar ideas existentes de formas nuevas", category: "vocabulary" },
        { id: "l8t7_cm5", wrong: "'We will launch the change' (for gradual change)", correct: "'We will roll out the change' (gradual) vs 'launch' (immediate)", explanation: "'Roll out' is gradual and phased; 'launch' is immediate.", explanationEs: "'Roll out' es gradual y por fases; 'launch' es inmediato", category: "vocabulary" },
      ],
      exercises: [
        {
          type: "vocabulary-precision",
          instruction: "Elige la palabra más apropiada para cada contexto",
          items: [
            { context: "A new technology that completely changes how an industry works", options: ["innovative", "disruptive", "different"], correct: "disruptive" },
            { context: "Introducing a new product to the market immediately", options: ["roll out", "launch", "phase in"], correct: "launch" },
            { context: "Gradually implementing changes across the organization", options: ["launch", "roll out", "start"], correct: "roll out" },
            { context: "The most advanced technology available", options: ["new", "cutting-edge", "modern"], correct: "cutting-edge" },
            { context: "A major discovery that changes everything", options: ["change", "breakthrough", "update"], correct: "breakthrough" }
          ]
        },
        {
          type: "change-management-language",
          instruction: "Relaciona la etapa del cambio con el lenguaje apropiado",
          items: [
            { stage: "Announcing change", language: "We're embarking on a transformation... / We're introducing changes to..." },
            { stage: "Explaining why", language: "In response to market shifts... / To remain competitive, we need to..." },
            { stage: "Addressing resistance", language: "I understand this may feel uncomfortable... / Change can be challenging, but..." },
            { stage: "Rolling out", language: "We'll phase in the changes over... / The pilot program will begin..." },
            { stage: "Celebrating progress", language: "We've made significant strides... / The transformation is yielding results..." }
          ]
        },
        {
          type: "transformation",
          instruction: "Reescribe usando vocabulario de innovación más sofisticado",
          items: [
            { simple: "Technology is changing our business.", sophisticated: "Digital transformation is reshaping our business model." },
            { simple: "We need to change to stay ahead.", sophisticated: "We need to innovate to maintain our competitive advantage." },
            { simple: "This new idea could change everything.", sophisticated: "This breakthrough has the potential to disrupt the entire industry." },
            { simple: "We're slowly introducing the new system.", sophisticated: "We're rolling out the new system in phases through a pilot program." }
          ]
        },
        {
          type: "resistance-handling",
          instruction: "Practica responder a resistencia al cambio",
          items: [
            { resistance: "Why do we need to change? Things are working fine.", response: "I understand this feels unnecessary when things seem stable. The reality is that our market is evolving rapidly. If we don't embrace change now, we risk being left behind." },
            { resistance: "This is just another management fad.", response: "I hear your skepticism, and healthy questioning is valuable. What's different this time is concrete data showing market shifts. Let me share the research that drove this decision." },
            { resistance: "I'm too old to learn new systems.", response: "Change can feel overwhelming, and that's completely normal. We've built comprehensive training and support. Many colleagues with similar concerns have found the new system actually makes their work easier." }
          ]
        }
      ],
      modelDialogue: {
        title: "Town hall sobre transformación digital",
        context: "El CEO anuncia una iniciativa de transformación digital a toda la empresa",
        dialogue: [
          { speaker: "CEO", text: "Today marks the beginning of our digital transformation journey. Our industry is undergoing fundamental change, and we must embrace it.", translation: "Hoy marca el comienzo de nuestro viaje de transformación digital. Nuestra industria está experimentando un cambio fundamental, y debemos adoptarlo." },
          { speaker: "CEO", text: "This isn't about replacing people with technology. It's about empowering you with cutting-edge tools to work smarter.", translation: "Esto no se trata de reemplazar personas con tecnología. Se trata de empoderarlos con herramientas de vanguardia para trabajar más inteligentemente." },
          { speaker: "Employee", text: "How will this affect our daily work?", translation: "¿Cómo afectará esto nuestro trabajo diario?" },
          { speaker: "CEO", text: "We'll roll out changes gradually through pilot programs. You'll have plenty of training and support throughout the transition.", translation: "Implementaremos los cambios gradualmente a través de programas piloto. Tendrán mucha capacitación y apoyo durante la transición." },
          { speaker: "Employee 2", text: "Other companies have tried this and failed. What's different here?", translation: "Otras empresas han intentado esto y fracasado. ¿Qué es diferente aquí?" },
          { speaker: "CEO", text: "That's a fair challenge. What's different is that we're not just adopting technology – we're transforming how we think about our business. And we're doing it together.", translation: "Ese es un desafío justo. Lo diferente es que no solo estamos adoptando tecnología – estamos transformando cómo pensamos sobre nuestro negocio. Y lo estamos haciendo juntos." },
          { speaker: "CEO", text: "Innovation drives growth. This transformation will help us gain competitive advantage and secure our future for years to come.", translation: "La innovación impulsa el crecimiento. Esta transformación nos ayudará a obtener ventaja competitiva y asegurar nuestro futuro por años." },
          { speaker: "CEO", text: "I know change can be uncomfortable. But I believe in this team's ability to not just adapt, but to thrive.", translation: "Sé que el cambio puede ser incómodo. Pero creo en la capacidad de este equipo no solo para adaptarse, sino para prosperar." }
        ],
        keyPhrases: [
          "digital transformation journey",
          "undergoing fundamental change",
          "embrace change",
          "cutting-edge tools",
          "roll out changes gradually",
          "pilot programs",
          "innovation drives growth",
          "gain competitive advantage"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario de innovación",
        points: [
          "'Innovation' /ˌɪnəˈveɪʃən/ - énfasis en tercera sílaba",
          "'Disruptive' /dɪsˈrʌptɪv/ - énfasis en segunda sílaba",
          "'Transformation' /ˌtrænsfərˈmeɪʃən/ - énfasis en tercera sílaba",
          "'Cutting-edge' - énfasis igual en ambas palabras",
          "'Breakthrough' /ˈbreɪkθruː/ - énfasis en primera sílaba"
        ],
        examples: [
          { word: "innovation", phonetic: "/ˌɪnəˈveɪʃən/", tip: "in-no-VAY-shun" },
          { word: "disruptive", phonetic: "/dɪsˈrʌptɪv/", tip: "dis-RUP-tiv" },
          { word: "transformation", phonetic: "/ˌtrænsfərˈmeɪʃən/", tip: "trans-for-MAY-shun" }
        ]
      },
      culturalNote: {
        title: "Innovación y cambio en diferentes culturas corporativas",
        content: "Las actitudes hacia el cambio varían significativamente entre culturas corporativas. En Silicon Valley, 'move fast and break things' es un mantra; el fracaso rápido se celebra como aprendizaje. En culturas más conservadoras (japonesas, alemanas tradicionales), el cambio es más deliberado y planificado exhaustivamente. En startups, 'pivot' es positivo; en corporaciones tradicionales, puede verse como falta de planificación. Adaptar tu comunicación sobre cambio al contexto cultural de tu audiencia es crucial para ganar aceptación.",
        examples: [
          "Silicon Valley: 'We're pivoting to capture this emerging opportunity'",
          "Traditional corporate: 'After careful analysis, we're strategically adjusting our direction'",
          "Japanese: Nemawashi (consenso previo) antes de anunciar cambios"
        ]
      },
      consolidationQuiz: [
        {
          question: "En contexto de negocios, 'disruptive' significa:",
          options: [
            "Destructivo y negativo",
            "Revolucionario y que cambia fundamentalmente un mercado",
            "Molesto e inconveniente",
            "Ilegal o no ético"
          ],
          correctAnswer: 1,
          explanation: "'Disruptive innovation' es positivo en negocios - significa cambio revolucionario"
        },
        {
          question: "¿Cuál es la diferencia entre 'roll out' y 'launch'?",
          options: [
            "No hay diferencia",
            "'Roll out' es gradual; 'launch' es inmediato",
            "'Launch' es solo para productos",
            "'Roll out' es informal"
          ],
          correctAnswer: 1,
          explanation: "'Roll out' implica implementación gradual por fases; 'launch' es inicio inmediato"
        },
        {
          question: "¿Cuál es la diferencia entre 'innovation' e 'invention'?",
          options: [
            "Son sinónimos",
            "'Invention' = crear algo nuevo; 'innovation' = aplicar ideas de formas nuevas",
            "'Innovation' es más formal",
            "'Invention' es solo para patentes"
          ],
          correctAnswer: 1,
          explanation: "Innovación puede ser aplicar ideas existentes de formas nuevas, no necesariamente inventar"
        },
        {
          question: "'Cutting-edge technology' significa:",
          options: [
            "Tecnología peligrosa",
            "La tecnología más avanzada disponible",
            "Tecnología antigua",
            "Tecnología costosa"
          ],
          correctAnswer: 1,
          explanation: "'Cutting-edge' significa la más avanzada, en la frontera del desarrollo"
        },
        {
          question: "¿Qué verbo se usa con 'transformation'?",
          options: [
            "make a transformation",
            "do a transformation",
            "undergo/implement a transformation",
            "create a transformation"
          ],
          correctAnswer: 2,
          explanation: "Las transformaciones se 'undergo' (experimentan) o 'implement' (implementan)"
        },
        {
          question: "¿Cómo se pronuncia 'innovation'?",
          options: [
            "/ɪnˈnɒveɪʃən/ (énfasis en segunda)",
            "/ˌɪnəˈveɪʃən/ (énfasis en tercera)",
            "/ˈɪnəveɪʃən/ (énfasis en primera)",
            "/ɪnəˈveɪʃən/ (todas iguales)"
          ],
          correctAnswer: 1,
          explanation: "El énfasis está en la tercera sílaba: in-no-VAY-shun"
        }
      ],
      guidedProduction: [
        {
          prompt: "Anuncia una iniciativa de transformación digital a tu equipo",
          sampleResponse: "Team, I want to share an exciting development. We're embarking on a comprehensive digital transformation that will fundamentally reshape how we work. The industry is evolving rapidly, and to maintain our competitive advantage, we need to embrace these changes. We'll be implementing cutting-edge tools that will automate routine tasks and free you to focus on higher-value work. We'll roll out these changes gradually through pilot programs, with full training and support. I know change can be challenging, but this transformation will position us for growth and success."
        },
        {
          prompt: "Responde a un empleado que se resiste al cambio",
          sampleResponse: "I hear your concerns, and they're completely valid. Change can feel threatening, especially when what we're doing seems to work. Here's my perspective: our industry is undergoing disruption, and companies that don't adapt won't survive. But this isn't about replacing you – it's about empowering you with better tools. The skills you have are irreplaceable; we're just giving you cutting-edge technology to enhance them. I'm committed to supporting you through this transition. What specific concerns can I address?"
        },
        {
          prompt: "Escribe un memo explicando por qué la empresa necesita innovar",
          sampleResponse: "Subject: Our Path Forward Through Innovation\n\nColleagues, our market is undergoing fundamental transformation. New competitors with disruptive business models are reshaping customer expectations. To maintain our leadership position and drive continued growth, we must embrace innovation at every level.\n\nThis doesn't mean change for change's sake. It means strategically adopting cutting-edge approaches that help us serve customers better. We'll launch new initiatives while phasing in operational improvements through careful pilot programs.\n\nInnovation drives growth. By transforming how we work, we'll gain competitive advantage and secure our future. I'm confident that together, we can not just navigate this transformation but lead it."
        },
        {
          prompt: "Describe una innovación exitosa y su impacto",
          sampleResponse: "Last year, we implemented what I consider a groundbreaking change in our customer service approach. We rolled out an AI-powered support system that seemed risky at the time. Some called it disruptive – and they were right, but in the best possible way. The transformation wasn't just technological; it represented a fundamental shift in how we think about customer experience. We didn't launch it all at once – we used pilot programs, gathered feedback, and iterated. The result? Customer satisfaction increased 40% while response times dropped by 60%. This breakthrough demonstrates that embracing innovation, even when uncomfortable, drives real growth."
        }
      ],
      connectionToPrevious: "Las estructuras complejas te ayudan a comunicar sobre cambio con sofisticación: 'Never before has digital transformation been more critical to our success.'",
      connectionToNext: "El subjuntivo te permite expresar recomendaciones y necesidades sobre cambio: 'It is essential that the organization embrace this transformation.'"
    },
    {
      id: 8,
      title: "Subjunctive Mood",
      titleEs: "Modo Subjuntivo",
      introduction: {
        title: "📖 Modo Subjuntivo en Inglés",
        explanation: "El subjuntivo en inglés es más sutil que en español. Se usa después de verbos de sugerencia, demanda, y en expresiones fijas.",
        keyPoints: [
          "Después de suggest, recommend, insist, demand: '...that he BE present' (no 'is')",
          "Forma: base del verbo sin 's' en tercera persona",
          "Expresiones fijas: 'If I were you', 'God bless you', 'Come what may'",
          "Formal: 'It is essential/important that she attend'",
          "Alternativa menos formal: 'should' - '...that he should be present'"
        ],
        examples: [
          { english: "I suggest that he be included in the meeting.", spanish: "Sugiero que él sea incluido en la reunión.", explanation: "Subjuntivo después de 'suggest'" },
          { english: "It is essential that the report be finished by Friday.", spanish: "Es esencial que el reporte esté terminado para el viernes.", explanation: "Subjuntivo con 'It is essential'" },
          { english: "If I were you, I would accept the offer.", spanish: "Si yo fuera tú, aceptaría la oferta.", explanation: "Subjuntivo con 'If I were'" }
        ],
        tips: [
          "💡 El subjuntivo usa la forma base: 'be', 'go', 'do' (no 'is', 'goes', 'does')",
          "💡 En inglés americano el subjuntivo es más común; británico prefiere 'should'",
          "💡 'If I were' es correcto, 'If I was' es informal pero aceptado"
        ],
        whenToUse: [
          'Después de verbos de sugerencia: "I suggest that he attend the meeting"',
          'En cláusulas formales: "It is essential that they be informed"',
          'En expresiones fijas: "If I were you, I would reconsider"',
          'En contratos: "The client requests that the work be completed by Friday"'
        ],
        whenNotToUse: [
          '"I suggest that he attends" → subjuntivo: "he attend" (forma base, NO "attends")',
          'En conversación informal UK: "I suggest he should go" (preferido sobre subjuntivo)',
          'No uses subjuntivo para hechos: "I know that he is here" (NO "that he be here")'
        ]
      },
      objectives: ["Reconocer el modo subjuntivo", "Usar subjuntivo después de verbos de sugerencia", "Dominar expresiones con subjuntivo"],
      grammarTheoryIds: ["c1-subjunctive"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l8t8_n1", word: "subjunctive", translation: "subjuntivo", type: "noun", definition: "a verb mood", definitionEs: "un modo verbal", example: "Use the subjunctive here.", exampleEs: "Usa el subjuntivo aquí.", related: [], difficulty: 2 },
          { id: "l8t8_n2", word: "recommendation", translation: "recomendación", type: "noun", definition: "a suggestion", definitionEs: "una sugerencia", example: "My recommendation is that he leave.", exampleEs: "Mi recomendación es que él se vaya.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l8t8_v1", word: "insist", translation: "insistir", type: "verb", definition: "to demand firmly", definitionEs: "exigir firmemente", example: "I insist that she be present.", exampleEs: "Insisto en que ella esté presente.", related: [], difficulty: 1 },
          { id: "l8t8_v2", word: "demand", translation: "exigir", type: "verb", definition: "to require", definitionEs: "requerir", example: "We demand that he resign.", exampleEs: "Exigimos que él renuncie.", related: [], difficulty: 1 },
          { id: "l8t8_v3", word: "propose", translation: "proponer", type: "verb", definition: "to suggest formally", definitionEs: "sugerir formalmente", example: "I propose that we vote.", exampleEs: "Propongo que votemos.", related: [], difficulty: 1 },
          { id: "l8t8_v4", word: "require", translation: "requerir", type: "verb", definition: "to need", definitionEs: "necesitar", example: "The law requires that he appear.", exampleEs: "La ley requiere que él comparezca.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l8t8_a1", word: "essential", translation: "esencial", type: "adjective", definition: "absolutely necessary", definitionEs: "absolutamente necesario", example: "It's essential that you be there.", exampleEs: "Es esencial que estés ahí.", related: [], difficulty: 1 },
          { id: "l8t8_a2", word: "imperative", translation: "imperativo", type: "adjective", definition: "urgently necessary", definitionEs: "urgentemente necesario", example: "It's imperative that we act now.", exampleEs: "Es imperativo que actuemos ahora.", related: [], difficulty: 2 },
          { id: "l8t8_a3", word: "vital", translation: "vital", type: "adjective", definition: "critically important", definitionEs: "críticamente importante", example: "It's vital that she attend.", exampleEs: "Es vital que ella asista.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l8t8_e1", word: "I suggest/recommend that he BE...", translation: "Sugiero/Recomiendo que él SEA...", type: "expression", definition: "subjunctive after suggest", definitionEs: "subjuntivo después de sugerir", example: "I recommend that he be promoted.", exampleEs: "Recomiendo que él sea promovido.", related: [], difficulty: 2 },
          { id: "l8t8_e2", word: "It is essential/important that...", translation: "Es esencial/importante que...", type: "expression", definition: "formal subjunctive", definitionEs: "subjuntivo formal", example: "It is important that she arrive on time.", exampleEs: "Es importante que ella llegue a tiempo.", related: [], difficulty: 2 },
          { id: "l8t8_e3", word: "If I were you...", translation: "Si yo fuera tú...", type: "expression", definition: "hypothetical advice", definitionEs: "consejo hipotético", example: "If I were you, I'd take the job.", exampleEs: "Si yo fuera tú, tomaría el trabajo.", related: [], difficulty: 1 },
          { id: "l8t8_e4", word: "Come what may", translation: "Pase lo que pase", type: "expression", definition: "fixed expression", definitionEs: "expresión fija", example: "Come what may, we'll succeed.", exampleEs: "Pase lo que pase, tendremos éxito.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l8t8_cm1",
          wrong: "I recommend that he goes to the meeting.",
          correct: "I recommend that he go to the meeting.",
          explanation: "After verbs of suggestion/demand, the subjunctive uses the base form (go, be, do) without '-s'.",
          explanationEs: "Después de verbos de sugerencia/demanda, el subjuntivo usa la forma base (go, be, do) sin 's'.",
          category: "grammar" as const
        },
        {
          id: "l8t8_cm2",
          wrong: "It's essential that she is present.",
          correct: "It is essential that she be present.",
          explanation: "After 'It is essential/important/vital that', use the subjunctive (be, not is).",
          explanationEs: "Después de 'It is essential/important/vital that', se usa subjuntivo (be, not is).",
          category: "grammar" as const
        },
        {
          id: "l8t8_cm3",
          wrong: "If I was you, I'd accept.",
          correct: "If I were you, I'd accept.",
          explanation: "In hypothetical situations, 'were' is grammatically correct with I/he/she/it.",
          explanationEs: "En situaciones hipotéticas, 'were' es gramaticalmente correcto con I/he/she/it.",
          category: "grammar" as const
        },
        {
          id: "l8t8_cm4",
          wrong: "They insisted that he should leaves early.",
          correct: "They insisted that he (should) leave early.",
          explanation: "With the 'should' alternative, the verb stays in base form without '-s'.",
          explanationEs: "Con 'should' alternativo, el verbo es base form sin 's'.",
          category: "grammar" as const
        },
        {
          id: "l8t8_cm5",
          wrong: "Using subjunctive in casual conversation",
          correct: "Reserve formal subjunctive for formal writing/speech; use 'should' in casual contexts",
          explanation: "The formal subjunctive sounds strange in casual conversation; use 'should' as an alternative.",
          explanationEs: "El subjuntivo formal suena extraño en conversación casual; usa 'should' como alternativa.",
          category: "usage" as const
        }
      ],
      exercises: [
        {
          type: "verb-form-practice",
          instruction: "Completa con la forma correcta del subjuntivo",
          items: [
            { sentence: "I suggest that the meeting _____ (be) postponed.", answer: "be" },
            { sentence: "It is vital that every employee _____ (attend) the training.", answer: "attend" },
            { sentence: "The committee recommends that the policy _____ (change).", answer: "change" },
            { sentence: "We demand that the company _____ (provide) better benefits.", answer: "provide" },
            { sentence: "It is essential that he _____ (submit) the report by Friday.", answer: "submit" },
            { sentence: "The doctor insists that she _____ (take) this medication.", answer: "take" }
          ]
        },
        {
          type: "trigger-identification",
          instruction: "Identifica qué verbos/expresiones requieren subjuntivo",
          items: [
            { trigger: "recommend", requiresSubjunctive: true, example: "I recommend that he be promoted" },
            { trigger: "hope", requiresSubjunctive: false, example: "I hope he is promoted (indicativo)" },
            { trigger: "insist", requiresSubjunctive: true, example: "I insist that she attend" },
            { trigger: "think", requiresSubjunctive: false, example: "I think he should go (no subjuntivo)" },
            { trigger: "It is essential that", requiresSubjunctive: true, example: "It is essential that we act" },
            { trigger: "demand", requiresSubjunctive: true, example: "We demand that he resign" },
            { trigger: "suggest", requiresSubjunctive: true, example: "I suggest that we start early" },
            { trigger: "believe", requiresSubjunctive: false, example: "I believe he is correct (indicativo)" }
          ]
        },
        {
          type: "formal-informal-alternatives",
          instruction: "Transforma entre subjuntivo formal y alternativa con 'should'",
          items: [
            { formal: "I recommend that he be present.", withShould: "I recommend that he should be present." },
            { formal: "It is essential that she attend.", withShould: "It is essential that she should attend." },
            { formal: "The board demands that the CEO resign.", withShould: "The board demands that the CEO should resign." },
            { formal: "I suggest that we start early.", withShould: "I suggest that we should start early." }
          ]
        },
        {
          type: "fixed-expressions",
          instruction: "Aprende estas expresiones fijas con subjuntivo",
          items: [
            { expression: "Come what may", meaning: "Whatever happens", example: "Come what may, we'll deliver on time." },
            { expression: "If need be", meaning: "If it's necessary", example: "If need be, we can extend the deadline." },
            { expression: "Be that as it may", meaning: "Nevertheless", example: "Be that as it may, we must proceed." },
            { expression: "God bless you", meaning: "Traditional blessing", example: "God bless you and your family." },
            { expression: "Long live the king", meaning: "May the king live long", example: "Long live the king!" },
            { expression: "Heaven forbid", meaning: "I hope not", example: "Heaven forbid anything should go wrong." }
          ]
        }
      ],
      modelDialogue: {
        title: "Reunión formal de directorio",
        context: "El directorio discute políticas con lenguaje formal usando subjuntivo",
        dialogue: [
          { speaker: "Chairperson", text: "The audit committee recommends that the company adopt stricter financial controls.", translation: "El comité de auditoría recomienda que la empresa adopte controles financieros más estrictos." },
          { speaker: "Board Member 1", text: "I agree. It is essential that we maintain complete transparency with our shareholders.", translation: "Estoy de acuerdo. Es esencial que mantengamos transparencia completa con nuestros accionistas." },
          { speaker: "Board Member 2", text: "I suggest that the CFO present a detailed implementation plan at the next meeting.", translation: "Sugiero que el CFO presente un plan de implementación detallado en la próxima reunión." },
          { speaker: "CFO", text: "If I were to implement this immediately, we would need additional resources.", translation: "Si yo fuera a implementar esto inmediatamente, necesitaríamos recursos adicionales." },
          { speaker: "Chairperson", text: "The board demands that all departments comply with the new guidelines by Q2.", translation: "El directorio exige que todos los departamentos cumplan con las nuevas directrices para el segundo trimestre." },
          { speaker: "CEO", text: "It is imperative that management be given the flexibility to adapt as needed.", translation: "Es imperativo que se le dé flexibilidad a la gerencia para adaptarse según sea necesario." },
          { speaker: "Chairperson", text: "Be that as it may, compliance remains the priority. I move that we vote on this matter.", translation: "Sea como sea, el cumplimiento sigue siendo la prioridad. Propongo que votemos sobre este asunto." },
          { speaker: "Board Member 1", text: "I insist that the motion be recorded for the official minutes.", translation: "Insisto en que la moción sea registrada para las minutas oficiales." }
        ],
        keyPhrases: [
          "recommends that the company adopt",
          "It is essential that we maintain",
          "I suggest that the CFO present",
          "If I were to implement",
          "demands that all departments comply",
          "It is imperative that management be given",
          "Be that as it may",
          "I insist that the motion be recorded"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación del subjuntivo",
        points: [
          "El subjuntivo no tiene sonido especial - es la forma base del verbo",
          "'that he BE present' - 'be' se pronuncia claramente /biː/",
          "'that she GO' - pronunciación normal del verbo base",
          "En habla rápida, el subjuntivo puede sonar como indicativo",
          "'If I were' /ɪf aɪ wɜːr/ - 'were' pronunciado claramente"
        ],
        examples: [
          { word: "that he be present", phonetic: "/ðæt hi biː ˈprezənt/", tip: "'be' claramente pronunciado, no reducido" },
          { word: "If I were you", phonetic: "/ɪf aɪ wɜːr juː/", tip: "'were' es distintivo, no 'was'" },
          { word: "Come what may", phonetic: "/kʌm wɒt meɪ/", tip: "Expresión fija, ritmo natural" }
        ]
      },
      culturalNote: {
        title: "Subjuntivo: Inglés americano vs británico",
        content: "El uso del subjuntivo difiere significativamente entre inglés americano y británico. En inglés americano, el subjuntivo formal se usa más frecuentemente en contextos de negocios, legal y académico: 'I recommend that he be promoted.' En inglés británico, la alternativa con 'should' es más común: 'I recommend that he should be promoted.' Ambas son correctas, pero conocer tu audiencia te ayuda a elegir. En documentos legales americanos, el subjuntivo es prácticamente obligatorio.",
        examples: [
          "American: 'It is essential that she be present'",
          "British: 'It is essential that she should be present'",
          "Legal (US): 'The court orders that the defendant appear on...'",
          "Conversational (both): 'I think she should be there' (evita subjuntivo formal)"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la forma correcta después de 'recommend'?",
          options: [
            "I recommend that he goes",
            "I recommend that he go",
            "I recommend that he is going",
            "I recommend him to go"
          ],
          correctAnswer: 1,
          explanation: "Después de 'recommend' (y suggest, demand, insist), se usa subjuntivo: forma base sin 's'"
        },
        {
          question: "'It is essential that she _____ the meeting.'",
          options: [
            "attends",
            "is attending",
            "attend",
            "will attend"
          ],
          correctAnswer: 2,
          explanation: "Después de 'It is essential that', se usa subjuntivo (attend, no attends)"
        },
        {
          question: "¿Cuál es la alternativa británica al subjuntivo formal?",
          options: [
            "Usar 'will' en lugar del subjuntivo",
            "Usar 'should' + verbo base",
            "Usar el pasado",
            "No hay alternativa"
          ],
          correctAnswer: 1,
          explanation: "En inglés británico, 'I suggest that he should go' es más común que 'I suggest that he go'"
        },
        {
          question: "'If I _____ you, I'd accept the offer.'",
          options: [
            "was",
            "were",
            "am",
            "be"
          ],
          correctAnswer: 1,
          explanation: "En situaciones hipotéticas con I/he/she/it, 'were' es gramaticalmente correcto"
        },
        {
          question: "¿Qué verbos NO requieren subjuntivo?",
          options: [
            "suggest, recommend, demand",
            "hope, think, believe",
            "insist, require, propose",
            "order, request, advise"
          ],
          correctAnswer: 1,
          explanation: "'Hope, think, believe' no son verbos de sugerencia/demanda y no requieren subjuntivo"
        },
        {
          question: "'Come what may' significa:",
          options: [
            "Ven cuando puedas",
            "Pase lo que pase",
            "Puede ser que venga",
            "Ven en mayo"
          ],
          correctAnswer: 1,
          explanation: "'Come what may' es una expresión fija que significa 'pase lo que pase' o 'whatever happens'"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe recomendaciones formales para un informe de auditoría",
          sampleResponse: "The audit committee recommends that management implement stronger internal controls immediately. It is essential that all transactions be properly documented and approved. We suggest that the company hire additional compliance staff and that a dedicated ethics officer be appointed. Furthermore, we demand that quarterly reviews be conducted and that findings be reported to the board. It is imperative that these changes be implemented before the next fiscal year."
        },
        {
          prompt: "Redacta una moción formal para una reunión de directorio",
          sampleResponse: "I move that the board approve the proposed merger with XYZ Corporation. I recommend that due diligence be completed within 90 days and that our legal team review all contractual obligations. It is essential that shareholders be informed of this development at the earliest opportunity. I further suggest that a special committee be formed to oversee the integration process. The motion requests that management provide monthly progress reports."
        },
        {
          prompt: "Da consejos usando 'If I were you' en un contexto profesional",
          sampleResponse: "If I were you, I'd approach this situation carefully. If I were in your position, I'd document everything before raising the issue. Were I to face this challenge, I'd first consult with HR. If I were the manager, I'd want to hear both sides of the story. If I were to make a recommendation, it would be that you request a formal meeting rather than addressing this informally."
        },
        {
          prompt: "Escribe un email formal usando expresiones con subjuntivo",
          sampleResponse: "Dear Board Members,\n\nI write to recommend that the company establish a formal whistleblower policy. It is vital that employees feel safe reporting concerns. I suggest that an anonymous hotline be implemented and that all reports be investigated promptly.\n\nThe legal team insists that this policy be in place before the regulatory deadline. It is imperative that we act swiftly. I propose that a draft policy be circulated for review at next week's meeting.\n\nCome what may, we must prioritize compliance. If need be, we can engage external consultants to expedite the process.\n\nBest regards"
        }
      ],
      connectionToPrevious: "El subjuntivo te permite hacer recomendaciones formales sobre cambio: 'I recommend that the organization embrace digital transformation.'",
      connectionToNext: "La comunicación intercultural requiere sensibilidad - aprenderás a adaptar tu comunicación a diferentes contextos culturales."
    },
    {
      id: 9,
      title: "Cross-Cultural Communication",
      titleEs: "Comunicación Intercultural",
      introduction: {
        title: "🌍 Comunicación Intercultural",
        explanation: "Trabajar en equipos globales requiere sensibilidad cultural. Aprenderás a navegar diferencias culturales en la comunicación empresarial.",
        keyPoints: [
          "Contexto alto vs bajo: algunas culturas son más directas que otras",
          "Tiempo: 'monochronic' (lineal) vs 'polychronic' (flexible)",
          "Jerarquía: algunas culturas valoran más la formalidad con superiores",
          "Comunicación no verbal: significados diferentes de gestos",
          "Evitar estereotipos: cada persona es un individuo"
        ],
        examples: [
          { english: "In some cultures, direct feedback is appreciated; in others, it's considered rude.", spanish: "En algunas culturas, la retroalimentación directa es apreciada; en otras, se considera grosera.", explanation: "Diferencias culturales" },
          { english: "Let's be mindful of the time zone differences when scheduling meetings.", spanish: "Tengamos en cuenta las diferencias de zona horaria al programar reuniones.", explanation: "Consideración práctica" },
          { english: "I'd like to understand your perspective better. Could you elaborate?", spanish: "Me gustaría entender mejor tu perspectiva. ¿Podrías elaborar?", explanation: "Pidiendo clarificación" }
        ],
        tips: [
          "💡 Cuando dudes, sé más formal - es más fácil relajar que recuperar",
          "💡 Pregunta en lugar de asumir",
          "💡 Observa cómo otros se comunican antes de adaptar tu estilo"
        ],
        whenToUse: [
          'En equipos multiculturales: "Could you help me understand the preferred approach?"',
          'Al negociar internacionalmente: "In my culture we typically... How does your team work?"',
          'Para evitar malentendidos: "Just to clarify, do you mean...?"',
          'En presentaciones globales: "I\'d like to acknowledge that perspectives may vary"'
        ],
        whenNotToUse: [
          'No asumas que tu estilo es universal → pregunta y observa',
          'Evita estereotipos: "Americans are direct" → "In this context, directness is valued"',
          'En equipos homogéneos conocidos: adapta sin sobre-explicar diferencias culturales'
        ]
      },
      objectives: ["Entender diferencias culturales", "Adaptar comunicación al contexto", "Evitar malentendidos culturales"],
      grammarTheoryIds: ["c1-hedging", "c1-distancing-language"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l8t9_n1", word: "culture", translation: "cultura", type: "noun", definition: "shared beliefs and practices", definitionEs: "creencias y prácticas compartidas", example: "Every culture is unique.", exampleEs: "Cada cultura es única.", related: ["cultural"], difficulty: 1 },
          { id: "l8t9_n2", word: "diversity", translation: "diversidad", type: "noun", definition: "variety", definitionEs: "variedad", example: "We value diversity.", exampleEs: "Valoramos la diversidad.", related: ["diverse"], difficulty: 1 },
          { id: "l8t9_n3", word: "stereotype", translation: "estereotipo", type: "noun", definition: "oversimplified belief", definitionEs: "creencia simplificada", example: "Avoid stereotypes.", exampleEs: "Evita los estereotipos.", related: [], difficulty: 2 },
          { id: "l8t9_n4", word: "sensitivity", translation: "sensibilidad", type: "noun", definition: "awareness of others", definitionEs: "conciencia de otros", example: "Cultural sensitivity is important.", exampleEs: "La sensibilidad cultural es importante.", related: ["sensitive"], difficulty: 2 },
          { id: "l8t9_n5", word: "misunderstanding", translation: "malentendido", type: "noun", definition: "incorrect understanding", definitionEs: "entendimiento incorrecto", example: "Let's clear up any misunderstanding.", exampleEs: "Aclaremos cualquier malentendido.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l8t9_v1", word: "adapt", translation: "adaptar", type: "verb", definition: "to adjust", definitionEs: "ajustar", example: "We need to adapt our approach.", exampleEs: "Necesitamos adaptar nuestro enfoque.", related: [], difficulty: 1 },
          { id: "l8t9_v2", word: "respect", translation: "respetar", type: "verb", definition: "to show regard for", definitionEs: "mostrar consideración por", example: "We respect all cultures.", exampleEs: "Respetamos todas las culturas.", related: [], difficulty: 1 },
          { id: "l8t9_v3", word: "accommodate", translation: "acomodar", type: "verb", definition: "to adjust for others", definitionEs: "ajustar para otros", example: "Can we accommodate their schedule?", exampleEs: "¿Podemos acomodar su horario?", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l8t9_a1", word: "cultural", translation: "cultural", type: "adjective", definition: "related to culture", definitionEs: "relacionado con la cultura", example: "Cultural awareness is key.", exampleEs: "La conciencia cultural es clave.", related: [], difficulty: 1 },
          { id: "l8t9_a2", word: "diverse", translation: "diverso", type: "adjective", definition: "varied", definitionEs: "variado", example: "We have a diverse team.", exampleEs: "Tenemos un equipo diverso.", related: [], difficulty: 1 },
          { id: "l8t9_a3", word: "inclusive", translation: "inclusivo", type: "adjective", definition: "welcoming all", definitionEs: "dando la bienvenida a todos", example: "We strive to be inclusive.", exampleEs: "Nos esforzamos por ser inclusivos.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l8t9_e1", word: "Be mindful of...", translation: "Tener en cuenta...", type: "expression", definition: "to be aware of", definitionEs: "estar consciente de", example: "Be mindful of cultural differences.", exampleEs: "Ten en cuenta las diferencias culturales.", related: [], difficulty: 1 },
          { id: "l8t9_e2", word: "From my cultural perspective...", translation: "Desde mi perspectiva cultural...", type: "expression", definition: "acknowledging perspective", definitionEs: "reconociendo perspectiva", example: "From my cultural perspective, this is normal.", exampleEs: "Desde mi perspectiva cultural, esto es normal.", related: [], difficulty: 1 },
          { id: "l8t9_e3", word: "I'd like to understand your perspective", translation: "Me gustaría entender tu perspectiva", type: "expression", definition: "seeking understanding", definitionEs: "buscando entendimiento", example: "I'd like to understand your perspective on this.", exampleEs: "Me gustaría entender tu perspectiva sobre esto.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l8t9_cm1",
          wrong: "Assuming your cultural norms are universal",
          correct: "Acknowledge that practices vary: 'In my culture... How is it in yours?'",
          explanation: "What is normal in your culture may be strange or disrespectful in another.",
          explanationEs: "Lo que es normal en tu cultura puede ser extraño o irrespetuoso en otra.",
          category: "usage" as const
        },
        {
          id: "l8t9_cm2",
          wrong: "Using stereotypes: 'All Japanese are...'",
          correct: "'In my experience...' or 'I've observed that some people from...'",
          explanation: "Stereotypes ignore individuality; every person is unique.",
          explanationEs: "Los estereotipos ignoran la individualidad; cada persona es única.",
          category: "usage" as const
        },
        {
          id: "l8t9_cm3",
          wrong: "Being too direct with colleagues from high-context cultures",
          correct: "Learn to read between the lines and soften directness",
          explanation: "In high-context cultures, meaning lies in the implicit, not just the words.",
          explanationEs: "En culturas de alto contexto, el significado está en lo implícito, no solo en las palabras.",
          category: "usage" as const
        },
        {
          id: "l8t9_cm4",
          wrong: "Treating directness as rudeness",
          correct: "Understand that direct cultures value clarity and honesty",
          explanation: "Dutch or German directness is not rudeness; it values clarity.",
          explanationEs: "La franqueza holandesa o alemana no es grosería; es valorar la claridad.",
          category: "usage" as const
        },
        {
          id: "l8t9_cm5",
          wrong: "Ignoring time zone considerations in global teams",
          correct: "'Let's find a time that works across time zones'",
          explanation: "Respecting time zones shows consideration for global colleagues.",
          explanationEs: "Respetar zonas horarias muestra consideración por colegas globales.",
          category: "usage" as const
        }
      ],
      exercises: [
        {
          type: "cultural-dimension-analysis",
          instruction: "Analiza estas dimensiones culturales y su impacto en comunicación",
          items: [
            {
              dimension: "High-context vs Low-context communication",
              highContext: { cultures: "Japan, China, Arab countries", communication: "Indirect, relies on context and relationships" },
              lowContext: { cultures: "Germany, US, Scandinavia", communication: "Direct, explicit, words carry the meaning" },
              advice: "With high-context cultures, pay attention to what's NOT said"
            },
            {
              dimension: "Monochronic vs Polychronic time",
              monochronic: { cultures: "Germany, US, UK", approach: "Time is linear, schedules are sacred" },
              polychronic: { cultures: "Latin America, Middle East", approach: "Time is flexible, relationships take priority" },
              advice: "Don't assume tardiness is disrespectful in polychronic cultures"
            },
            {
              dimension: "Hierarchy/Power distance",
              highPowerDistance: { cultures: "Japan, Mexico, India", behavior: "Formal with superiors, decisions flow top-down" },
              lowPowerDistance: { cultures: "Denmark, Israel, Australia", behavior: "Informal, everyone's opinion valued equally" },
              advice: "In high power distance cultures, show respect to seniority"
            }
          ]
        },
        {
          type: "scenario-navigation",
          instruction: "¿Cómo navegarías estas situaciones interculturales?",
          items: [
            {
              scenario: "Your Japanese colleague never directly says 'no' to your proposals",
              interpretation: "They may be declining indirectly ('That might be difficult', 'We'll consider it')",
              response: "Ask clarifying questions: 'What concerns do you have?' rather than assuming agreement"
            },
            {
              scenario: "Your German colleague gives very blunt feedback on your work",
              interpretation: "In German business culture, direct feedback shows respect and saves time",
              response: "Don't take it personally; appreciate the clarity and respond professionally"
            },
            {
              scenario: "A Middle Eastern client wants to chat personally before discussing business",
              interpretation: "Building relationship (wasta) often precedes business in Arab cultures",
              response: "Invest time in personal connection; rushing to business can seem rude"
            },
            {
              scenario: "Your Brazilian colleague is 15 minutes late to a meeting",
              interpretation: "Polychronic cultures have more flexible time orientation",
              response: "Be patient; use the time productively; discuss expectations diplomatically"
            }
          ]
        },
        {
          type: "language-adaptation",
          instruction: "Adapta estas frases para diferentes contextos culturales",
          items: [
            {
              original: "That's wrong.",
              directCulture: "I see that differently. Let me explain my perspective.",
              indirectCulture: "That's an interesting point. I wonder if we might also consider..."
            },
            {
              original: "Can you finish this by Monday?",
              directCulture: "I need this by Monday. Is that feasible?",
              indirectCulture: "It would be very helpful if this could be ready by Monday. What do you think?"
            },
            {
              original: "I disagree.",
              directCulture: "I see it differently, and here's why...",
              indirectCulture: "I understand your view. From another angle, we might consider..."
            }
          ]
        },
        {
          type: "inclusive-meeting-practices",
          instruction: "Aprende prácticas inclusivas para equipos globales",
          items: [
            { practice: "Rotate meeting times", reason: "No region should always have meetings at inconvenient hours" },
            { practice: "Send agendas in advance", reason: "Allows non-native speakers and introverts to prepare" },
            { practice: "Summarize key points in writing", reason: "Helps those who process information differently" },
            { practice: "Be explicit about expectations", reason: "What's obvious in your culture may not be in others" },
            { practice: "Allow thinking time before responses", reason: "Some cultures prefer to reflect before speaking" }
          ]
        }
      ],
      modelDialogue: {
        title: "Reunión de equipo multicultural",
        context: "Un equipo global discute un proyecto con sensibilidad cultural",
        dialogue: [
          { speaker: "Manager (US)", text: "Thanks everyone for joining. I know it's late for our colleagues in Asia and early for those in Europe. I appreciate the flexibility.", translation: "Gracias a todos por unirse. Sé que es tarde para nuestros colegas en Asia y temprano para los de Europa. Agradezco la flexibilidad." },
          { speaker: "Manager", text: "Before we dive in, I'd like to understand everyone's perspective on the timeline. Kenji, what do you think?", translation: "Antes de comenzar, me gustaría entender la perspectiva de todos sobre el cronograma. Kenji, ¿qué piensas?" },
          { speaker: "Kenji (Japan)", text: "The timeline is... ambitious. It might be challenging to meet all the quality standards.", translation: "El cronograma es... ambicioso. Podría ser difícil cumplir con todos los estándares de calidad." },
          { speaker: "Manager", text: "I appreciate you raising that. What specific concerns do you have?", translation: "Agradezco que plantees eso. ¿Qué preocupaciones específicas tienes?" },
          { speaker: "Hans (Germany)", text: "To be direct, the deadline is unrealistic. We need two more weeks minimum.", translation: "Para ser directo, el plazo no es realista. Necesitamos dos semanas más como mínimo." },
          { speaker: "Manager", text: "Thank you for that clarity, Hans. Different perspectives help us see the full picture.", translation: "Gracias por esa claridad, Hans. Diferentes perspectivas nos ayudan a ver el panorama completo." },
          { speaker: "Maria (Brazil)", text: "I agree we need to discuss this more. Can we schedule a follow-up call?", translation: "Estoy de acuerdo en que necesitamos discutir esto más. ¿Podemos programar una llamada de seguimiento?" },
          { speaker: "Manager", text: "Absolutely. I'll send out options for times that work across all time zones. Let's be mindful of everyone's schedules.", translation: "Absolutamente. Enviaré opciones de horarios que funcionen en todas las zonas horarias. Tengamos en cuenta los horarios de todos." }
        ],
        keyPhrases: [
          "I know it's late/early for our colleagues in...",
          "I'd like to understand everyone's perspective",
          "I appreciate you raising that",
          "What specific concerns do you have?",
          "Thank you for that clarity",
          "Different perspectives help us see the full picture",
          "Be mindful of everyone's schedules"
        ]
      },
      pronunciationFocus: {
        title: "Claridad en comunicación internacional",
        points: [
          "Habla un poco más lento con audiencias no nativas (pero no condescendiente)",
          "Evita modismos y expresiones idiomáticas que pueden no traducirse",
          "Articula claramente, especialmente consonantes finales",
          "Usa pausas para permitir procesamiento",
          "Confirma entendimiento: 'Does that make sense?', 'Should I clarify anything?'"
        ],
        examples: [
          { word: "Let me clarify", phonetic: "Pronunciación clara y pausada", tip: "Ofrece clarificación sin asumir falta de entendimiento" },
          { word: "From my perspective", phonetic: "Énfasis en 'my' para mostrar subjetividad", tip: "Reconoce que es tu punto de vista, no verdad absoluta" },
          { word: "In your experience", phonetic: "Invitación genuina, no interrogatorio", tip: "Muestra interés en la perspectiva del otro" }
        ]
      },
      culturalNote: {
        title: "Competencia intercultural en el trabajo",
        content: "La competencia intercultural es una de las habilidades más valoradas en el mundo globalizado. No se trata de memorizar estereotipos ('los japoneses son así'), sino de desarrollar curiosidad cultural, humildad y flexibilidad. Los mejores comunicadores interculturales hacen tres cosas: 1) Asumen buenas intenciones cuando encuentran comportamientos diferentes, 2) Preguntan en lugar de asumir, 3) Adaptan su estilo sin perder autenticidad. Recuerda: la cultura es una influencia, no una determinante. Cada persona es un individuo.",
        examples: [
          "Pregunta: 'How do you typically approach this in your team?'",
          "Adapta: 'I'll send a detailed email so everyone can review at their own pace'",
          "Evita: 'In your country, people always...' (estereotipo)"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Qué significa 'high-context communication'?",
          options: [
            "Comunicación muy formal",
            "Comunicación donde el significado está en el contexto, no solo en las palabras",
            "Comunicación en situaciones importantes",
            "Comunicación con mucho vocabulario"
          ],
          correctAnswer: 1,
          explanation: "En culturas de alto contexto, lo que no se dice y el contexto son tan importantes como las palabras"
        },
        {
          question: "Si un colega japonés dice 'That might be difficult', probablemente significa:",
          options: [
            "Necesita más recursos",
            "Está considerándolo positivamente",
            "Es una forma indirecta de decir 'no'",
            "Quiere más información"
          ],
          correctAnswer: 2,
          explanation: "En culturas de alto contexto, 'difficult' a menudo es una forma diplomática de declinar"
        },
        {
          question: "¿Cómo debes interpretar la franqueza alemana en feedback?",
          options: [
            "Como grosería personal",
            "Como falta de educación",
            "Como valoración de claridad y honestidad",
            "Como señal de conflicto"
          ],
          correctAnswer: 2,
          explanation: "La franqueza en culturas de bajo contexto es eficiencia y respeto, no grosería"
        },
        {
          question: "¿Qué es 'polychronic time'?",
          options: [
            "Tiempo muy estructurado",
            "Tiempo flexible donde las relaciones pueden tener prioridad sobre horarios",
            "Múltiples zonas horarias",
            "Tiempo de trabajo extendido"
          ],
          correctAnswer: 1,
          explanation: "Culturas policrónicas ven el tiempo como flexible; las relaciones pueden ser más importantes que horarios rígidos"
        },
        {
          question: "¿Cuál es la mejor práctica para equipos globales con diferentes zonas horarias?",
          options: [
            "Siempre usar la zona horaria de la oficina principal",
            "Rotar horarios para que ninguna región siempre tenga inconvenientes",
            "Solo comunicarse por email",
            "Evitar reuniones síncronas"
          ],
          correctAnswer: 1,
          explanation: "Rotar muestra respeto y equidad para todos los miembros del equipo global"
        },
        {
          question: "¿Por qué debemos evitar estereotipos culturales?",
          options: [
            "Porque son siempre incorrectos",
            "Porque ignoran la individualidad y pueden ser ofensivos",
            "Porque están prohibidos legalmente",
            "Porque no son útiles nunca"
          ],
          correctAnswer: 1,
          explanation: "Los estereotipos ignoran que cada persona es un individuo, no solo un representante de su cultura"
        }
      ],
      guidedProduction: [
        {
          prompt: "Facilita una reunión con un equipo multicultural (USA, Japón, Alemania, Brasil)",
          sampleResponse: "Good morning, good afternoon, and good evening depending on where you're joining from. I appreciate everyone making time across different time zones. Before we begin, I'd like to establish some ground rules that respect our diverse communication styles. Please feel free to unmute anytime, but I'll also check in with each region specifically. I know some of us prefer to think before responding, so I'll leave pauses for reflection. And if I use any expressions that aren't clear, please ask - I want to make sure we're all on the same page. Now, I'd like to understand everyone's perspective on the project timeline. Kenji, would you like to start?"
        },
        {
          prompt: "Escribe un email que será leído por colegas de diferentes culturas",
          sampleResponse: "Subject: Project Update and Next Steps\n\nDear Team,\n\nI hope this message finds you well. I'm writing to provide an update on the project and outline next steps.\n\nCurrent Status: We have completed Phase 1 on schedule.\n\nNext Steps:\n1. Phase 2 begins next Monday\n2. Please submit your reports by Friday\n3. Team meeting scheduled for [with time zones listed]\n\nI'd welcome any questions or concerns you might have. Please don't hesitate to reach out if anything needs clarification.\n\nAs always, I value your perspectives and input. If there are considerations from your local context that we should discuss, I'm happy to schedule a call.\n\nBest regards"
        },
        {
          prompt: "Navega una situación donde las normas culturales chocan (ej: feedback directo vs indirecto)",
          sampleResponse: "I've noticed that our team has different communication styles when it comes to feedback. Some of us prefer direct, explicit feedback - which is valuable for clarity. Others communicate more indirectly, which is equally valid and shows consideration. I'd like to propose that we acknowledge these differences openly. For those who prefer directness, please remember that indirect communication isn't evasion - it's a cultural style. For those who prefer indirect communication, please know that direct feedback isn't meant as criticism of you personally. I'd like to understand your perspective on how we can create a feedback culture that works for everyone. What approaches have worked well in your experience?"
        },
        {
          prompt: "Maneja un malentendido causado por diferencias culturales",
          sampleResponse: "I want to address something from our last meeting. I think there may have been a misunderstanding, and I'd like to clear it up. When I said we needed to move quickly, I realize that might have come across as pressuring or dismissive of your concerns. That wasn't my intention. From my cultural background, directness is meant to show respect for people's time. However, I understand that approach can feel uncomfortable. I'd like to understand your perspective better - what would work better for you? I'm committed to adapting my communication style so we can work together more effectively. This is a learning opportunity for me, and I appreciate your patience."
        }
      ],
      connectionToPrevious: "El subjuntivo formal puede adaptarse a contextos culturales: en culturas jerárquicas, 'I recommend that management consider...' muestra respeto apropiado.",
      connectionToNext: "La comunicación intercultural efectiva incluye saber especular e hipotetizar sobre diferentes escenarios - habilidad que perfeccionarás a continuación."
    },
    {
      id: 10,
      title: "Hypothesizing and Speculating",
      titleEs: "Hipotetizar y Especular",
      introduction: {
        title: "🔮 Hipotetizar y Especular",
        explanation: "Especular sobre posibilidades y formular hipótesis son habilidades importantes en discusiones estratégicas y análisis de escenarios.",
        keyPoints: [
          "Probabilidad alta: 'It's likely that...', 'There's a good chance...'",
          "Probabilidad baja: 'It's unlikely that...', 'I doubt whether...'",
          "Especulación: 'I wonder if...', 'Suppose we...', 'What if...?'",
          "Teorías: 'My hypothesis is...', 'One possible explanation...'",
          "Futuro incierto: 'Time will tell', 'Only time will tell'"
        ],
        examples: [
          { english: "There's a strong possibility that they'll accept our offer.", spanish: "Hay una fuerte posibilidad de que acepten nuestra oferta.", explanation: "Alta probabilidad" },
          { english: "I wonder whether this strategy will work in the long term.", spanish: "Me pregunto si esta estrategia funcionará a largo plazo.", explanation: "Especulando" },
          { english: "Suppose we increased the budget. What would happen?", spanish: "Supongamos que aumentamos el presupuesto. ¿Qué pasaría?", explanation: "Escenario hipotético" }
        ],
        tips: [
          "💡 'Likely' indica más certeza que 'possible'",
          "💡 'Suppose' y 'What if' invitan a explorar escenarios",
          "💡 En contextos formales, usa 'It is conceivable that...'"
        ],
        whenToUse: [
          'En reuniones estratégicas: "It is likely that we will see growth in Q3"',
          'Para especular: "Suppose we extended the deadline - what would happen?"',
          'En informes con incertidumbre: "It is conceivable that costs may rise"',
          'Al presentar hipótesis: "The most probable scenario is that..."'
        ],
        whenNotToUse: [
          'No uses "possible" para certeza alta → "likely" o "probable"',
          'Evita afirmaciones absolutas sin evidencia: "It will definitely" → "It is likely that"',
          'En respuestas directas: "Yes" (NO "It is conceivable that I could agree")'
        ]
      },
      objectives: ["Expresar grados de probabilidad", "Formular hipótesis", "Especular sobre escenarios futuros"],
      grammarTheoryIds: ["c1-hedging", "b2-conditionals-all"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l8t10_n1", word: "hypothesis", translation: "hipótesis", type: "noun", definition: "an educated guess", definitionEs: "una conjetura educada", example: "My hypothesis is...", exampleEs: "Mi hipótesis es...", related: ["hypothesize"], difficulty: 2 },
          { id: "l8t10_n2", word: "speculation", translation: "especulación", type: "noun", definition: "guessing about unknown", definitionEs: "conjetura sobre lo desconocido", example: "This is pure speculation.", exampleEs: "Esto es pura especulación.", related: ["speculate"], difficulty: 2 },
          { id: "l8t10_n3", word: "possibility", translation: "posibilidad", type: "noun", definition: "something that can happen", definitionEs: "algo que puede suceder", example: "There's a possibility that...", exampleEs: "Hay una posibilidad de que...", related: ["possible"], difficulty: 1 },
          { id: "l8t10_n4", word: "likelihood", translation: "probabilidad", type: "noun", definition: "chance of happening", definitionEs: "probabilidad de suceder", example: "What's the likelihood?", exampleEs: "¿Cuál es la probabilidad?", related: ["likely"], difficulty: 2 },
          { id: "l8t10_n5", word: "scenario", translation: "escenario", type: "noun", definition: "a possible situation", definitionEs: "una situación posible", example: "Let's consider this scenario.", exampleEs: "Consideremos este escenario.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l8t10_v1", word: "speculate", translation: "especular", type: "verb", definition: "to guess", definitionEs: "conjeturar", example: "I can only speculate.", exampleEs: "Solo puedo especular.", related: [], difficulty: 2 },
          { id: "l8t10_v2", word: "hypothesize", translation: "hipotetizar", type: "verb", definition: "to form a theory", definitionEs: "formar una teoría", example: "We can hypothesize that...", exampleEs: "Podemos hipotetizar que...", related: [], difficulty: 2 },
          { id: "l8t10_v3", word: "suppose", translation: "suponer", type: "verb", definition: "to assume", definitionEs: "asumir", example: "Suppose this happened.", exampleEs: "Supón que esto pasó.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l8t10_a1", word: "likely", translation: "probable", type: "adjective", definition: "probably true", definitionEs: "probablemente verdad", example: "It's likely to succeed.", exampleEs: "Es probable que tenga éxito.", related: [], difficulty: 1 },
          { id: "l8t10_a2", word: "unlikely", translation: "improbable", type: "adjective", definition: "probably not true", definitionEs: "probablemente no verdad", example: "It's unlikely to happen.", exampleEs: "Es improbable que suceda.", related: [], difficulty: 1 },
          { id: "l8t10_a3", word: "conceivable", translation: "concebible", type: "adjective", definition: "possible to imagine", definitionEs: "posible de imaginar", example: "It's conceivable that...", exampleEs: "Es concebible que...", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l8t10_e1", word: "There's a strong possibility that...", translation: "Hay una fuerte posibilidad de que...", type: "expression", definition: "high probability", definitionEs: "alta probabilidad", example: "There's a strong possibility that we'll win.", exampleEs: "Hay una fuerte posibilidad de que ganemos.", related: [], difficulty: 1 },
          { id: "l8t10_e2", word: "I wonder whether/if...", translation: "Me pregunto si...", type: "expression", definition: "expressing uncertainty", definitionEs: "expresando incertidumbre", example: "I wonder if this will work.", exampleEs: "Me pregunto si esto funcionará.", related: [], difficulty: 1 },
          { id: "l8t10_e3", word: "Suppose/Supposing that...", translation: "Supongamos que...", type: "expression", definition: "creating a scenario", definitionEs: "creando un escenario", example: "Supposing that we get the funding...", exampleEs: "Suponiendo que obtengamos el financiamiento...", related: [], difficulty: 1 },
          { id: "l8t10_e4", word: "It's highly unlikely that...", translation: "Es altamente improbable que...", type: "expression", definition: "low probability", definitionEs: "baja probabilidad", example: "It's highly unlikely that they'll refuse.", exampleEs: "Es altamente improbable que rechacen.", related: [], difficulty: 1 },
          { id: "l8t10_e5", word: "Time will tell", translation: "El tiempo lo dirá", type: "expression", definition: "outcome unknown", definitionEs: "resultado desconocido", example: "Will it work? Time will tell.", exampleEs: "¿Funcionará? El tiempo lo dirá.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l8t10_cm1", wrong: "Using 'probable' as an adverb: 'It's probable happen'", correct: "'It's likely to happen' or 'It will probably happen'", explanation: "'Probable' is an adjective; for adverb use 'probably'.", explanationEs: "'Probable' es adjetivo; para adverbio usa 'probably'", category: "grammar" },
        { id: "l8t10_cm2", wrong: "Confusing 'likely' and 'probably': 'It's probably that...'", correct: "'It's likely that...' or 'It will probably...'", explanation: "'Likely' goes with 'it's' + that; 'probably' modifies verbs.", explanationEs: "'Likely' va con 'it's' + that; 'probably' modifica verbos", category: "grammar" },
        { id: "l8t10_cm3", wrong: "Wrong verb form after 'suppose': 'Suppose we would increase...'", correct: "'Suppose we increased...' (past simple for hypothetical)", explanation: "After 'suppose' for hypothesis, use past simple, not would.", explanationEs: "Después de 'suppose' para hipótesis, usa pasado simple, no would", category: "grammar" },
        { id: "l8t10_cm4", wrong: "Using 'may be' instead of 'maybe' or vice versa", correct: "'It may be true' (verb) vs 'Maybe it's true' (adverb)", explanation: "'May be' is a verb (might be); 'maybe' is an adverb (perhaps).", explanationEs: "'May be' es verbo (might be); 'maybe' es adverbio (perhaps)", category: "vocabulary" },
        { id: "l8t10_cm5", wrong: "Overusing 'I think' instead of probability expressions", correct: "Vary with: 'It's likely that...', 'There's a possibility...', 'I suspect...'", explanation: "Probability expressions are more precise and professional.", explanationEs: "Expresiones de probabilidad son más precisas y profesionales", category: "usage" },
      ],
      exercises: [
        {
          type: "probability-scale",
          instruction: "Organiza estas expresiones de menor a mayor probabilidad",
          items: [
            {
              expressions: [
                "It's virtually impossible",
                "It's highly unlikely",
                "It's doubtful whether",
                "There's a slight chance",
                "It's possible that",
                "There's a good chance",
                "It's quite likely",
                "It's highly probable",
                "It's almost certain",
                "It's bound to happen"
              ],
              scale: "0% ← ─────────────────────────── → 100%",
              correctOrder: [
                { position: 1, expression: "It's virtually impossible", percentage: "~0%" },
                { position: 2, expression: "It's highly unlikely", percentage: "~10-20%" },
                { position: 3, expression: "It's doubtful whether", percentage: "~20-30%" },
                { position: 4, expression: "There's a slight chance", percentage: "~30-40%" },
                { position: 5, expression: "It's possible that", percentage: "~50%" },
                { position: 6, expression: "There's a good chance", percentage: "~60-70%" },
                { position: 7, expression: "It's quite likely", percentage: "~70-80%" },
                { position: 8, expression: "It's highly probable", percentage: "~80-90%" },
                { position: 9, expression: "It's almost certain", percentage: "~90-95%" },
                { position: 10, expression: "It's bound to happen", percentage: "~99%" }
              ]
            }
          ]
        },
        {
          type: "scenario-analysis",
          instruction: "Analiza estos escenarios usando expresiones de especulación apropiadas",
          items: [
            {
              scenario: "Tu competidor está lanzando un producto similar",
              questions: [
                { question: "What might happen to our market share?", suggestedStarter: "There's a strong possibility that..." },
                { question: "How could customers react?", suggestedStarter: "I would hypothesize that..." },
                { question: "What's the worst case scenario?", suggestedStarter: "In the worst case scenario, it's conceivable that..." }
              ]
            },
            {
              scenario: "La empresa está considerando trabajo remoto permanente",
              questions: [
                { question: "How might this affect productivity?", suggestedStarter: "I would speculate that..." },
                { question: "What could happen to company culture?", suggestedStarter: "It's quite possible that..." },
                { question: "Is it likely to reduce costs?", suggestedStarter: "It's highly probable that..." }
              ]
            }
          ]
        },
        {
          type: "hypothesis-formation",
          instruction: "Forma hipótesis para explicar estas situaciones",
          items: [
            {
              observation: "Sales dropped 20% last quarter",
              prompts: [
                "Form a hypothesis about the cause",
                "Speculate on a solution",
                "Consider alternative explanations"
              ],
              sampleResponses: [
                "My hypothesis is that the price increase may have driven customers away",
                "I would speculate that a promotional campaign could recover some losses",
                "Another possible explanation is that seasonal factors played a role"
              ]
            },
            {
              observation: "Employee turnover increased significantly",
              prompts: [
                "What could be causing this?",
                "What might happen if the trend continues?",
                "What's a possible solution?"
              ],
              sampleResponses: [
                "One possible explanation is that compensation isn't competitive",
                "If this trend continues, it's likely that we'll face serious skills gaps",
                "Supposing we improve benefits, there's a good chance retention would improve"
              ]
            }
          ]
        },
        {
          type: "conditional-speculation",
          instruction: "Completa estas especulaciones condicionales",
          items: [
            {
              condition: "If we invested more in R&D...",
              speculations: [
                "...there's a strong possibility that ___",
                "...it's conceivable that ___",
                "...I would hypothesize that ___"
              ]
            },
            {
              condition: "Suppose the economy enters a recession...",
              speculations: [
                "...it's highly likely that ___",
                "...there's a risk that ___",
                "...we might see ___"
              ]
            },
            {
              condition: "What if we expanded to international markets?",
              speculations: [
                "...there's potential for ___",
                "...I would speculate that ___",
                "...on the other hand, it's possible that ___"
              ]
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Reunión de planificación estratégica",
        context: "Ejecutivos discuten el futuro de la empresa con análisis de escenarios",
        dialogue: [
          { speaker: "CEO", text: "I'd like us to think about where we'll be in five years. Let's start by speculating on market trends.", translation: "Me gustaría que pensemos en dónde estaremos en cinco años. Comencemos especulando sobre tendencias de mercado." },
          { speaker: "CFO", text: "My hypothesis is that AI will transform our industry within three years. There's a strong possibility that current business models will become obsolete.", translation: "Mi hipótesis es que la IA transformará nuestra industria en tres años. Hay una fuerte posibilidad de que los modelos de negocio actuales se vuelvan obsoletos." },
          { speaker: "CMO", text: "I would speculate that customer expectations will shift dramatically. It's quite likely that personalization will become the norm.", translation: "Yo especularía que las expectativas del cliente cambiarán drásticamente. Es bastante probable que la personalización se vuelva la norma." },
          { speaker: "CEO", text: "Suppose we invest heavily in AI capabilities. What would happen?", translation: "Supongamos que invertimos fuertemente en capacidades de IA. ¿Qué pasaría?" },
          { speaker: "CTO", text: "There's a good chance we'd gain a competitive advantage. However, it's also conceivable that we'd face significant implementation challenges.", translation: "Hay una buena probabilidad de que ganaríamos ventaja competitiva. Sin embargo, también es concebible que enfrentaríamos desafíos de implementación significativos." },
          { speaker: "CFO", text: "What if we took a more cautious approach and waited to see how competitors fare?", translation: "¿Y si tomamos un enfoque más cauteloso y esperamos a ver cómo les va a los competidores?" },
          { speaker: "CEO", text: "That's possible, but I suspect that being a fast follower might not be enough this time. The first-mover advantage is likely to be significant.", translation: "Es posible, pero sospecho que ser un seguidor rápido podría no ser suficiente esta vez. La ventaja del primer movimiento probablemente sea significativa." },
          { speaker: "CTO", text: "Time will tell, but I'd rather be prepared. My recommendation is that we start planning now.", translation: "El tiempo lo dirá, pero preferiría estar preparados. Mi recomendación es que comencemos a planificar ahora." }
        ],
        keyPhrases: [
          "My hypothesis is that...",
          "There's a strong possibility that...",
          "I would speculate that...",
          "It's quite likely that...",
          "Suppose we...",
          "There's a good chance...",
          "It's conceivable that...",
          "What if we...?",
          "I suspect that...",
          "Time will tell"
        ]
      },
      pronunciationFocus: {
        title: "Entonación en expresiones de incertidumbre",
        points: [
          "En especulación, la entonación sube ligeramente para mostrar incertidumbre",
          "'Likely' se pronuncia /ˈlaɪkli/ - no confundir con 'lightly'",
          "'Hypothesis' tiene acento en la segunda sílaba: /haɪˈpɒθəsɪs/",
          "'Conceivable' acentúa la segunda sílaba: /kənˈsiːvəbl/",
          "En preguntas hipotéticas, la voz sube al final"
        ],
        examples: [
          { word: "hypothesis", phonetic: "/haɪˈpɒθəsɪs/", tip: "hi-POTH-uh-sis, no 'hypo-thesis'" },
          { word: "conceivable", phonetic: "/kənˈsiːvəbl/", tip: "kon-SEE-vuh-bl" },
          { word: "likelihood", phonetic: "/ˈlaɪklihʊd/", tip: "LIKE-li-hood" },
          { word: "speculation", phonetic: "/ˌspekjuˈleɪʃn/", tip: "spek-yoo-LAY-shun" }
        ]
      },
      culturalNote: {
        title: "Especulación en diferentes culturas empresariales",
        content: "La forma de expresar incertidumbre varía culturalmente. En culturas anglo-americanas, es común usar hedging (atenuación) incluso cuando se está bastante seguro: 'I would think that...' En culturas germánicas, se prefiere ser más directo sobre lo que se sabe vs no se sabe. En culturas asiáticas, puede considerarse inapropiado especular públicamente si no se tiene información sólida. En América Latina, el contexto relacional a menudo influye en cómo se expresan las posibilidades.",
        examples: [
          "US style: 'I would think that's probably the case' (even when quite sure)",
          "German style: 'Based on the data, this is the likely outcome'",
          "Japanese style: May avoid speculation to prevent loss of face if wrong"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la diferencia entre 'likely' y 'probably'?",
          options: [
            "Son exactamente iguales",
            "'Likely' es adjetivo (It's likely), 'probably' es adverbio (It will probably)",
            "'Likely' es más formal",
            "'Probably' es para el pasado"
          ],
          correctAnswer: 1,
          explanation: "'Likely' se usa como adjetivo después de 'it's'; 'probably' modifica verbos directamente"
        },
        {
          question: "¿Qué expresa mayor probabilidad?",
          options: [
            "It's possible",
            "It's likely",
            "It's conceivable",
            "There's a chance"
          ],
          correctAnswer: 1,
          explanation: "'Likely' indica ~70-80% de probabilidad, más que 'possible' (~50%) o 'conceivable' (~30-40%)"
        },
        {
          question: "Después de 'Suppose' para hipótesis, usamos:",
          options: [
            "Would + infinitive",
            "Will + infinitive",
            "Past simple",
            "Present perfect"
          ],
          correctAnswer: 2,
          explanation: "'Suppose we increased the budget' - se usa pasado simple para escenarios hipotéticos"
        },
        {
          question: "¿Cuál es la diferencia entre 'may be' y 'maybe'?",
          options: [
            "Son lo mismo",
            "'May be' es verbo, 'maybe' es adverbio",
            "'Maybe' es más formal",
            "'May be' es solo para preguntas"
          ],
          correctAnswer: 1,
          explanation: "'It may be true' (verbo modal + be) vs 'Maybe it's true' (adverbio que significa 'perhaps')"
        },
        {
          question: "'Time will tell' significa:",
          options: [
            "Es muy probable",
            "Es imposible saberlo ahora",
            "Eventualmente sabremos el resultado",
            "No tiene importancia"
          ],
          correctAnswer: 2,
          explanation: "Indica que el resultado es incierto ahora pero se revelará con el tiempo"
        },
        {
          question: "¿Cuál es la mejor manera de formar una hipótesis en contexto profesional?",
          options: [
            "I think maybe it could be",
            "My hypothesis is that this may be caused by...",
            "It's definitely because of...",
            "I'm guessing that..."
          ],
          correctAnswer: 1,
          explanation: "'My hypothesis is that...' es profesional, claro y reconoce que es una teoría, no un hecho"
        }
      ],
      guidedProduction: [
        {
          prompt: "Presenta un análisis de escenarios para una decisión estratégica",
          sampleResponse: "Let me present three possible scenarios for our market expansion. In the optimistic scenario, there's a strong possibility that we could capture 15% market share within two years. If that happens, it's quite likely that revenues would double. In the moderate scenario, I would hypothesize that we'd achieve 8-10% market share, which is still profitable. However, we need to consider the pessimistic scenario as well. It's conceivable that market conditions could deteriorate, in which case there's a risk that we might only break even. My recommendation is that we prepare contingency plans for all three scenarios."
        },
        {
          prompt: "Especula sobre tendencias futuras en tu industria",
          sampleResponse: "Looking at the next decade, I would speculate that several major shifts will reshape our industry. First, there's a high probability that artificial intelligence will automate many routine tasks. I hypothesize that this could affect up to 40% of current job roles. Second, it's quite likely that customer expectations for personalization will increase dramatically. Suppose we don't adapt to these expectations - there's a good chance we'd lose market share. Finally, I wonder whether traditional business models will survive at all. Time will tell, but I suspect that companies that fail to innovate now may find themselves obsolete within five years."
        },
        {
          prompt: "Discute posibles causas de un problema empresarial",
          sampleResponse: "We've seen a significant drop in customer satisfaction scores, and I'd like to explore possible explanations. My primary hypothesis is that the recent system changes may have caused confusion among customers. It's also conceivable that our response times have suffered during the transition period. There's a possibility that competitor improvements have raised customer expectations. I suspect that a combination of factors is at play. To test these hypotheses, I would suggest we analyze customer feedback data. If my hypothesis about system changes is correct, we'd likely see a correlation with the implementation date. What if we ran a customer survey to gather more specific feedback?"
        },
        {
          prompt: "Evalúa los riesgos y oportunidades de una nueva iniciativa",
          sampleResponse: "Let's consider both the risks and opportunities of this AI implementation project. On the opportunity side, there's a strong possibility that we could reduce processing time by 60%. I would speculate that this would significantly improve customer satisfaction. It's highly probable that we'd see cost savings within the first year. However, we must also acknowledge the risks. It's conceivable that implementation could face technical challenges. There's a chance that staff resistance might slow adoption. Suppose the technology doesn't perform as expected - we would need contingency plans. My overall assessment is that the potential benefits likely outweigh the risks, but we should proceed with careful monitoring and milestone reviews."
        }
      ],
      connectionToPrevious: "Las habilidades interculturales incluyen saber especular apropiadamente en diferentes contextos - algunas culturas valoran más la especulación abierta que otras.",
      connectionToNext: "En la siguiente lección, aplicarás el pensamiento crítico a la filosofía y la ética, discutiendo dilemas morales y conceptos abstractos."
    },
    {
      id: 11,
      title: "Philosophy and Ethics",
      titleEs: "Filosofía y Ética",
      introduction: {
        title: "🤔 Filosofía y Ética",
        explanation: "Discutir conceptos filosóficos y dilemas éticos requiere vocabulario abstracto y estructuras para matizar opiniones. Aprenderás a debatir moralidad, principios y perspectivas éticas.",
        keyPoints: [
          "Conceptos: 'morality', 'conscience', 'dilemma', 'principle'",
          "Perspectivas: 'from my perspective', 'utilitarianism', 'bias'",
          "Valores: 'virtue', 'empathy', 'autonomy'",
          "Debatir: 'On one hand...', 'It depends on your perspective'"
        ],
        examples: [
          { english: "It's a moral dilemma — there's no easy answer.", spanish: "Es un dilema moral — no hay respuesta fácil.", explanation: "Presentando un dilema" },
          { english: "From an ethical perspective, we need to consider autonomy.", spanish: "Desde una perspectiva ética, debemos considerar la autonomía.", explanation: "Expresando perspectiva" },
          { english: "Utilitarianism suggests we should maximize overall well-being.", spanish: "El utilitarismo sugiere que debemos maximizar el bienestar general.", explanation: "Refiriéndose a teoría ética" }
        ],
        tips: [
          "💡 'Dilemma' implica dos opciones difíciles; no uses para problemas simples",
          "💡 'Bias' puede ser implícito (unconscious) o explícito",
          "💡 'Autonomy' = autonomía, capacidad de decidir por uno mismo"
        ],
        whenToUse: ["Al debatir dilemas éticos", "En discusiones sobre moralidad", "Cuando presentas diferentes perspectivas", "Al discutir filosofía o valores"],
        whenNotToUse: ["No uses 'dilemma' para problemas con solución clara", "Evita 'utilitarianism' sin contexto — explica brevemente", "No confundas 'principle' (principio) con 'principal' (director)"]
      },
      objectives: ["Discutir conceptos filosóficos", "Debatir dilemas éticos", "Usar vocabulario abstracto apropiadamente"],
      grammarTheoryIds: ["c1-hedging", "b2-conditionals-all"],
      estimatedMinutes: 40,
      vocabulary: {
        nouns: [
          { id: "l8t11_n1", word: "morality", translation: "moralidad", type: "noun", definition: "principles of right and wrong", definitionEs: "principios de bien y mal", example: "Questions of morality are complex.", exampleEs: "Las cuestiones de moralidad son complejas.", related: ["moral"], difficulty: 2 },
          { id: "l8t11_n2", word: "conscience", translation: "conciencia", type: "noun", definition: "inner sense of right and wrong", definitionEs: "sentido interno de bien y mal", example: "My conscience wouldn't allow it.", exampleEs: "Mi conciencia no lo permitiría.", related: ["conscientious"], difficulty: 2 },
          { id: "l8t11_n3", word: "dilemma", translation: "dilema", type: "noun", definition: "difficult choice between two options", definitionEs: "elección difícil entre dos opciones", example: "We face an ethical dilemma.", exampleEs: "Enfrentamos un dilema ético.", related: [], difficulty: 1 },
          { id: "l8t11_n4", word: "perspective", translation: "perspectiva", type: "noun", definition: "particular way of viewing something", definitionEs: "forma particular de ver algo", example: "From my perspective, both sides have merit.", exampleEs: "Desde mi perspectiva, ambos lados tienen mérito.", related: [], difficulty: 1 },
          { id: "l8t11_n5", word: "bias", translation: "sesgo/prejuicio", type: "noun", definition: "inclination that affects judgment", definitionEs: "inclinación que afecta el juicio", example: "We all have unconscious bias.", exampleEs: "Todos tenemos sesgos inconscientes.", related: ["biased"], difficulty: 2 },
          { id: "l8t11_n6", word: "virtue", translation: "virtud", type: "noun", definition: "moral excellence or goodness", definitionEs: "excelencia moral o bondad", example: "Honesty is a virtue.", exampleEs: "La honestidad es una virtud.", related: ["virtuous"], difficulty: 2 },
          { id: "l8t11_n7", word: "empathy", translation: "empatía", type: "noun", definition: "ability to understand others' feelings", definitionEs: "capacidad de entender los sentimientos ajenos", example: "Empathy is essential in ethics.", exampleEs: "La empatía es esencial en la ética.", related: ["empathetic"], difficulty: 1 },
          { id: "l8t11_n8", word: "principle", translation: "principio", type: "noun", definition: "fundamental rule or belief", definitionEs: "regla o creencia fundamental", example: "I act on principle.", exampleEs: "Actúo por principio.", related: ["principled"], difficulty: 1 },
          { id: "l8t11_n9", word: "utilitarianism", translation: "utilitarismo", type: "noun", definition: "ethics focused on maximizing good", definitionEs: "ética enfocada en maximizar el bien", example: "Utilitarianism weighs outcomes.", exampleEs: "El utilitarismo pondera los resultados.", related: ["utilitarian"], difficulty: 2 },
          { id: "l8t11_n10", word: "autonomy", translation: "autonomía", type: "noun", definition: "self-determination, freedom to choose", definitionEs: "autodeterminación, libertad para elegir", example: "Patient autonomy must be respected.", exampleEs: "La autonomía del paciente debe respetarse.", related: ["autonomous"], difficulty: 2 }
        ],
        verbs: [],
        adjectives: [],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l8t11_cm1", wrong: "It's a dilemma — I don't know what to wear", correct: "It's a dilemma — both options have serious ethical implications", explanation: "Dilemma implies morally difficult choices, not trivial preferences.", explanationEs: "Dilemma implica opciones moralmente difíciles, no preferencias triviales", category: "vocabulary" },
        { id: "l8t11_cm2", wrong: "I act by my principles", correct: "I act on principle / I act according to my principles", explanation: "Say 'on principle' or 'according to my principles', not 'by'.", explanationEs: "Se dice 'on principle' o 'according to my principles', no 'by'", category: "grammar" },
        { id: "l8t11_cm3", wrong: "We need to consider the autonomy of the patient", correct: "We need to respect patient autonomy", explanation: "Autonomy is 'respected' or 'honored', not just 'considered'.", explanationEs: "Autonomy se 'respects' o 'honors', no solo 'considers'", category: "vocabulary" },
        { id: "l8t11_cm4", wrong: "From a utilitarian perspective, the principal is clear", correct: "From a utilitarian perspective, the principle is clear", explanation: "Principle = rule/doctrine; principal = head/main (person or main thing).", explanationEs: "Principle = principio/regla; principal = director/principal (persona o cosa principal)", category: "false-friend" },
        { id: "l8t11_cm5", wrong: "We should eliminate all bias", correct: "We should acknowledge and mitigate our biases", explanation: "Eliminating bias completely is unrealistic; acknowledging and mitigating is more appropriate.", explanationEs: "Eliminar bias completamente es poco realista; reconocer y mitigar es más apropiado", category: "usage" },
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las frases sobre filosofía y ética:",
          items: [
            { sentence: "It's a moral ___ — neither option is clearly right.", answer: "dilemma", hint: "elección difícil" },
            { sentence: "From my ___, we need to consider autonomy.", answer: "perspective", hint: "punto de vista" },
            { sentence: "___ suggests we should maximize overall well-being.", answer: "Utilitarianism", hint: "teoría ética" },
            { sentence: "Honesty and integrity are ___.", answer: "virtues", hint: "excelencias morales" },
            { sentence: "We must respect patient ___.", answer: "autonomy", hint: "autodeterminación" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica los conceptos:",
          categories: [
            { name: "Conceptos de juicio", items: ["morality", "conscience", "principle", "virtue"] },
            { name: "Perspectiva y sesgo", items: ["perspective", "bias", "empathy"] },
            { name: "Situaciones y teorías", items: ["dilemma", "utilitarianism", "autonomy"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Reformula usando vocabulario filosófico:",
          items: [
            { original: "It's a hard choice.", transformed: "It's an ethical dilemma." },
            { original: "I think we're all a bit prejudiced.", transformed: "We all have unconscious bias." },
            { original: "People should be free to decide.", transformed: "We must respect individual autonomy." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa el debate ético:",
          items: [
            { sentence: "From an ethical ___, we face a real dilemma.", answer: "perspective", hint: "punto de vista" },
            { sentence: "___ would say we should choose the option that helps the most people.", answer: "Utilitarianism", hint: "teoría que maximiza el bien" },
            { sentence: "But what about ___? Don't individuals have the right to decide?", answer: "autonomy", hint: "autodeterminación" },
            { sentence: "We need ___ to understand both sides.", answer: "empathy", hint: "entender sentimientos ajenos" },
            { sentence: "My ___ tells me we must act on principle.", answer: "conscience", hint: "conciencia" }
          ]
        }
      ],
      modelDialogue: {
        title: "Debate sobre un dilema ético",
        context: "Dos amigos debaten si es correcto mentir para proteger a alguien.",
        dialogue: [
          { speaker: "Alex", text: "I'm facing a real ethical dilemma. A friend asked me to cover for them — they need an alibi. What would you do?", translation: "Enfrento un verdadero dilema ético. Un amigo me pidió que lo cubriera — necesita una coartada. ¿Qué harías tú?" },
          { speaker: "Jordan", text: "From my perspective, it depends on the situation. What's the principle at stake?", translation: "Desde mi perspectiva, depende de la situación. ¿Qué principio está en juego?" },
          { speaker: "Alex", text: "Honesty is a virtue — I believe that. But so is loyalty. My conscience is torn.", translation: "La honestidad es una virtud — lo creo. Pero también la lealtad. Mi conciencia está dividida." },
          { speaker: "Jordan", text: "Utilitarianism would ask: does the lie cause more harm or good? But we also need to consider the person's autonomy — do they have the right to make their own choices?", translation: "El utilitarismo preguntaría: ¿la mentira causa más daño o bien? Pero también debemos considerar la autonomía de la persona — ¿tienen derecho a tomar sus propias decisiones?" },
          { speaker: "Alex", text: "I try to approach these things with empathy. But I'm aware of my own bias — I want to help my friend.", translation: "Intento abordar estas cosas con empatía. Pero soy consciente de mi propio sesgo — quiero ayudar a mi amigo." },
          { speaker: "Jordan", text: "Acknowledging your bias is the first step. There's no easy answer in morality — sometimes we just have to do our best and learn.", translation: "Reconocer tu sesgo es el primer paso. No hay respuesta fácil en la moralidad — a veces solo tenemos que hacer nuestro mejor esfuerzo y aprender." }
        ],
        keyPhrases: [
          "ethical dilemma",
          "From my perspective",
          "act on principle",
          "My conscience tells me",
          "consider autonomy",
          "Utilitarianism would suggest",
          "acknowledge your bias"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario filosófico",
        points: [
          "'Utilitarianism' /juːˌtɪlɪˈteəriənɪzəm/ - comienza con /juː/, acento en cuarta sílaba",
          "'Autonomy' /ɔːˈtɒnəmi/ - acento en segunda sílaba, no en 'no'",
          "'Conscience' /ˈkɒnʃəns/ - acento en primera sílaba, 'sc' suena /ʃ/",
          "'Principle' vs 'principal' - mismo sonido pero significados diferentes"
        ],
        examples: [
          { word: "utilitarianism", phonetic: "/juːˌtɪlɪˈteəriənɪzəm/", tip: "yu-til-i-TAIR-i-an-ism" },
          { word: "autonomy", phonetic: "/ɔːˈtɒnəmi/", tip: "aw-TON-uh-mee" },
          { word: "conscience", phonetic: "/ˈkɒnʃəns/", tip: "CON-shuns" },
          { word: "principle", phonetic: "/ˈprɪnsəpl/", tip: "Principle (regla) vs principal (director)" }
        ]
      },
      culturalNote: {
        title: "Ética y filosofía en discurso anglosajón",
        content: "En contextos académicos y profesionales anglosajones, discutir ética requiere reconocer múltiples perspectivas. Frases como 'From a utilitarian perspective...' o 'If we consider Kantian ethics...' muestran sofisticación. Es importante usar hedging: 'It could be argued that...', 'One might suggest...'. Evitar afirmaciones absolutas sobre moralidad — 'It depends on your framework' es común.",
        examples: [
          "'Ethical framework' - sistema de valores para evaluar",
          "'Moral compass' - guía interna de lo correcto",
          "'Gray area' - situación sin respuesta clara",
          "'Slippery slope' - argumento de consecuencias"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Dilemma' implica:",
          options: ["Cualquier problema", "Dos opciones moralmente difíciles", "Una solución clara", "Un error"],
          correctAnswer: 1,
          explanation: "Dilemma = elección entre dos alternativas difíciles"
        },
        {
          question: "'I act ___ principle' — preposición correcta:",
          options: ["by", "on", "with", "for"],
          correctAnswer: 1,
          explanation: "Act ON principle"
        },
        {
          question: "'Utilitarianism' se enfoca en:",
          options: ["Derechos individuales", "Maximizar el bienestar general", "Virtudes personales", "Autonomía"],
          correctAnswer: 1,
          explanation: "Utilitarianism = maximizar el bien para el mayor número"
        },
        {
          question: "'Principle' vs 'principal':",
          options: ["Son lo mismo", "Principle = regla; principal = director/principal", "Principal es más formal", "Principle es verbo"],
          correctAnswer: 1,
          explanation: "Principle = principio/regla; principal = director o cosa principal"
        },
        {
          question: "'Autonomy' significa:",
          options: ["Obediencia", "Autodeterminación, libertad para elegir", "Responsabilidad", "Ley"],
          correctAnswer: 1,
          explanation: "Autonomy = capacidad de decidir por uno mismo"
        }
      ],
      guidedProduction: [
        {
          prompt: "Presenta un dilema ético y discute las diferentes perspectivas",
          sampleResponse: "Consider this ethical dilemma: A doctor has one organ to transplant. One patient is young with dependents; another is elderly but has contributed greatly to society. From a utilitarian perspective, we might maximize overall well-being by considering impact. But from a principle-based view, both have equal claim to autonomy and dignity. My conscience tells me there's no easy answer. We all have bias — perhaps toward youth or toward contribution. Empathy requires us to consider each person's perspective. In the end, such dilemmas reveal that morality is often about navigating gray areas with integrity."
        },
        {
          prompt: "Explica cómo el vocabulario filosófico ayuda a estructurar un debate ético",
          sampleResponse: "When discussing ethics, vocabulary matters. 'Dilemma' signals we're facing a genuine moral choice, not a simple problem. 'Perspective' and 'bias' help us acknowledge that we don't approach issues neutrally. 'Utilitarianism' names a specific framework — maximizing good — which we can then evaluate. 'Autonomy' reminds us to respect individual agency. 'Principle' and 'conscience' ground our arguments in values. Using these terms structures the debate and allows us to compare different ethical frameworks rather than talking past each other."
        }
      ],
      connectionToPrevious: "La especulación y las hipótesis son útiles en filosofía: 'I would hypothesize that...', 'It's conceivable that...'",
      connectionToNext: "Has completado Level 8. Tus habilidades de especulación, hipótesis y debate ético serán fundamentales en el siguiente nivel para análisis más profundos."
    },
    {
      id: 12,
      title: "Environment and Climate Change",
      titleEs: "Medio Ambiente y Cambio Climático",
      introduction: {
        title: "🌍 Discutiendo el Medio Ambiente",
        explanation: "En inglés C1 puedes debatir políticas medioambientales, describir datos científicos y usar vocabulario especializado con naturalidad.",
        keyPoints: [
          "Datos: 'According to the IPCC...', 'Research consistently shows that...'",
          "Causa-efecto: 'Rising temperatures are attributed to...', 'This has resulted in...'",
          "Soluciones: 'One viable approach would be to...', 'A combination of measures is required'",
          "Urgencia: 'The window for action is narrowing', 'Urgent intervention is called for'"
        ],
        examples: [
          { english: "Carbon emissions have risen by 40% since the pre-industrial era.", spanish: "Las emisiones de carbono han aumentado un 40% desde la era preindustrial.", explanation: "Dato estadístico con Present Perfect" },
          { english: "Biodiversity loss is attributed largely to habitat destruction.", spanish: "La pérdida de biodiversidad se atribuye en gran medida a la destrucción del hábitat.", explanation: "Pasiva para hecho científico" },
          { english: "A combination of renewable energy and carbon capture is widely considered necessary.", spanish: "Una combinación de energía renovable y captura de carbono se considera ampliamente necesaria.", explanation: "Pasiva con hedging" }
        ],
        tips: [
          "💡 'Carbon footprint' (huella de carbono) es de uso muy extendido",
          "💡 'Net zero' = neutralidad de carbono en 2050 — concepto clave",
          "💡 Usa 'mitigate' en lugar de 'reduce' para un tono más académico"
        ],
        whenToUse: ["En debates académicos o profesionales sobre medioambiente", "En ensayos o informes sobre política climática", "En conversaciones informadas con personas concienciadas"],
        whenNotToUse: ["Evita afirmaciones sin evidencia — cita fuentes o usa hedging", "No simplifiques demasiado problemas sistémicos complejos"]
      },
      objectives: ["Discutir causas y efectos del cambio climático", "Proponer soluciones con lenguaje académico", "Usar vocabulario medioambiental C1"],
      grammarTheoryIds: ["c1-passive-reporting", "b2-passive-advanced"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l8t12_n1", word: "carbon footprint", translation: "huella de carbono", type: "noun", definition: "total greenhouse gases produced by an individual or activity", definitionEs: "total de gases de efecto invernadero producidos por un individuo o actividad", example: "Flying has a large carbon footprint.", exampleEs: "Volar tiene una gran huella de carbono.", related: [], difficulty: 2 },
          { id: "l8t12_n2", word: "biodiversity", translation: "biodiversidad", type: "noun", definition: "variety of life in an area", definitionEs: "variedad de vida en un área", example: "Deforestation threatens biodiversity.", exampleEs: "La deforestación amenaza la biodiversidad.", related: [], difficulty: 2 },
          { id: "l8t12_n3", word: "mitigation", translation: "mitigación", type: "noun", definition: "action to reduce severity of something", definitionEs: "acción para reducir la gravedad de algo", example: "Climate mitigation requires global cooperation.", exampleEs: "La mitigación climática requiere cooperación global.", related: ["mitigate"], difficulty: 3 },
        ],
        verbs: [
          { id: "l8t12_v1", word: "exacerbate", translation: "exacerbar/agravar", type: "verb", definition: "to make a problem worse", definitionEs: "empeorar un problema", example: "Deforestation exacerbates climate change.", exampleEs: "La deforestación exacerba el cambio climático.", related: [], difficulty: 3 },
          { id: "l8t12_v2", word: "mitigate", translation: "mitigar", type: "verb", definition: "to make less severe", definitionEs: "hacer menos grave", example: "Renewable energy can mitigate emissions.", exampleEs: "La energía renovable puede mitigar las emisiones.", related: ["mitigation"], difficulty: 3 },
        ],
        adjectives: [
          { id: "l8t12_a1", word: "irreversible", translation: "irreversible", type: "adjective", definition: "cannot be undone", definitionEs: "que no se puede deshacer", example: "Some environmental damage may be irreversible.", exampleEs: "Algunos daños ambientales pueden ser irreversibles.", related: [], difficulty: 2 },
          { id: "l8t12_a2", word: "sustainable", translation: "sostenible", type: "adjective", definition: "can be maintained long-term without damage", definitionEs: "que puede mantenerse a largo plazo sin daño", example: "We need sustainable energy sources.", exampleEs: "Necesitamos fuentes de energía sostenibles.", related: ["sustainability"], difficulty: 1 },
        ],
        expressions: [
          { id: "l8t12_e1", word: "net zero", translation: "cero neto / neutralidad de carbono", type: "expression", definition: "balance between emissions and removal", definitionEs: "equilibrio entre emisiones y retirada de CO₂", example: "The UK aims to reach net zero by 2050.", exampleEs: "UK apunta a alcanzar cero neto en 2050.", related: [], difficulty: 2 },
          { id: "l8t12_e2", word: "the window for action is narrowing", translation: "la ventana de acción se está cerrando", type: "expression", definition: "there is less and less time to act", definitionEs: "queda cada vez menos tiempo para actuar", example: "Scientists warn the window for action is narrowing.", exampleEs: "Los científicos advierten que la ventana de acción se está cerrando.", related: [], difficulty: 3 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l8t12_cm1", wrong: "The global warming is a big problem.", correct: "Global warming is a serious problem.", explanation: "Don't use an article with 'global warming' in general sense. And 'serious' is more precise than 'big'.", explanationEs: "No uses artículo con 'global warming' en sentido general. Y 'serious' es más preciso que 'big'.", category: "grammar" },
        { id: "l8t12_cm2", wrong: "We must to reduce emissions.", correct: "We must reduce emissions.", explanation: "'Must' is a modal — it is not followed by 'to'.", explanationEs: "'Must' es un modal — no va seguido de 'to'.", category: "grammar" },
        { id: "l8t12_cm3", wrong: "The climate changes since hundreds of years.", correct: "The climate has been changing for hundreds of years.", explanation: "Use Present Perfect Continuous for processes that started in the past and continue.", explanationEs: "Usa Present Perfect Continuous para procesos que empezaron en el pasado y continúan.", category: "grammar" },
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con vocabulario medioambiental:",
          items: [
            { sentence: "Deforestation ___ climate change by releasing stored carbon.", answer: "exacerbates", hint: "makes worse = exacerbates" },
            { sentence: "The country aims to achieve ___ zero by 2050.", answer: "net", hint: "net zero = cero neto" },
            { sentence: "Protecting biodiversity requires both local and global ___.", answer: "cooperation", hint: "cooperation = cooperación" }
          ]
        }
      ],
      modelDialogue: {
        title: "Debatiendo política climática",
        situation: "Ana y David debaten las responsabilidades individuales vs. sistémicas ante el cambio climático.",
        dialogue: [
          { speaker: "Ana", text: "I find it frustrating when individuals are blamed for climate change when corporations are responsible for 70% of emissions.", textEs: "Me parece frustrante que se culpe a los individuos del cambio climático cuando las corporaciones son responsables del 70% de las emisiones." },
          { speaker: "David", text: "That's a fair point. Though I think individual action can shift consumer demand and influence corporate behaviour.", textEs: "Es un buen punto. Aunque creo que la acción individual puede cambiar la demanda del consumidor e influir en el comportamiento corporativo." },
          { speaker: "Ana", text: "Widescale mitigation requires systemic change — policy, investment and international agreements.", textEs: "La mitigación a gran escala requiere un cambio sistémico: política, inversión y acuerdos internacionales." },
          { speaker: "David", text: "Absolutely. And the window for action is narrowing. The IPCC reports are unambiguous on that.", textEs: "Sin duda. Y la ventana de acción se está cerrando. Los informes del IPCC son inequívocos al respecto." }
        ],
        vocabulary: ["exacerbates", "mitigation", "systemic change", "window for action", "unambiguous"],
        followUpQuestions: ["¿Qué porcentaje de emisiones atribuye Ana a las corporaciones?", "¿Qué tipo de cambio considera Ana necesario?"]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario climático",
        sounds: [
          { sound: "Biodiversity", examples: ["biodiversity /ˌbaɪəʊdaɪˈvɜːsəti/"], tip: "Acento en cuarta sílaba: bio-di-VER-sity" },
          { sound: "Mitigation", examples: ["mitigation /ˌmɪtɪˈɡeɪʃn/"], tip: "Acento en tercera sílaba: mi-ti-GAY-shun" }
        ],
        commonErrors: [
          { word: "irreversible", wrong: "/ir-RE-ver-si-ble/ (Spanish pattern)", right: "/ˌɪrɪˈvɜːsəbl/", note: "Acento en tercera sílaba en inglés" }
        ]
      },
      culturalNote: {
        title: "Medioambiente en la cultura anglosajona",
        content: "En UK, el debate climático es omnipresente en medios y política. Términos como 'Green New Deal', 'net zero', 'rewilding' y 'just transition' son comunes. Los británicos son conocidos por su afición a la naturaleza y el campo ('the countryside'). En EE.UU., el debate es más polarizado políticamente. En ambos países, el activismo juvenil (Greta Thunberg, Extinction Rebellion) ha elevado el tema en la agenda pública.",
        examples: [
          "'Rewilding' - restaurar ecosistemas naturales",
          "'Just transition' - transición justa para trabajadores de industrias contaminantes",
          "'Greenwashing' - fingir ser más ecológico de lo que se es",
          "'Carbon offset' - compensar emisiones con proyectos verdes"
        ]
      },
      consolidationQuiz: [
        { question: "'Exacerbate' significa:", options: ["mejorar", "agravar", "mitigar", "medir"], correctAnswer: 1, explanation: "Exacerbate = make worse, empeorar." },
        { question: "'Net zero' se refiere a:", options: ["cero emisiones absolutas", "equilibrio entre emisiones y absorción", "energía solar", "reciclaje total"], correctAnswer: 1, explanation: "Net zero = balance entre lo que se emite y lo que se absorbe/captura." },
        { question: "Frase con 'must' correcta:", options: ["We must to reduce emissions.", "We must reducing emissions.", "We must reduce emissions.", "We must reduces emissions."], correctAnswer: 2, explanation: "Must + infinitivo sin 'to': must reduce." }
      ],
      guidedProduction: [
        {
          task: "Proponer soluciones climáticas",
          prompt: "¿Qué medidas consideras más urgentes para hacer frente al cambio climático?",
          sampleAnswer: "Addressing climate change requires a multi-pronged approach. In the short term, governments must accelerate the transition to renewable energy and phase out fossil fuel subsidies. Simultaneously, protecting and restoring biodiversity — through rewilding and afforestation — is crucial to mitigate emissions. However, systemic change will only be possible with international cooperation and binding agreements. The window for action is narrowing, and incremental measures are no longer sufficient.",
          hints: ["Menciona medidas gubernamentales e individuales", "Usa 'simultaneously', 'however', 'in the short term'", "Cierra con urgencia: 'the window for action is narrowing'"]
        }
      ],
      connectionToPrevious: "El lenguaje ético de la lección anterior es directamente aplicable al debate sobre justicia climática.",
      connectionToNext: "Has completado Level 8. Tus habilidades de especulación, argumentación y debate ético serán fundamentales en el siguiente nivel."
    },
  ]
};

export default level8;
