import type { Level } from '../../types';

export const level5: Level = {
  id: 5,
  name: "Upper-Intermediate",
  cefrLevel: "B1+",
  description: "Decisiones empresariales, probabilidad y expresiones de frecuencia",
  totalTasks: 10,
  estimatedHours: 14,
  color: "#f97316",
  icon: "🔥",
  tasks: [
    {
      id: 1,
      title: "Making Business Decisions",
      titleEs: "Tomando Decisiones Empresariales",
      introduction: {
        title: "💼 Tomando Decisiones Empresariales",
        explanation: "En el mundo laboral, tomar decisiones requiere analizar opciones, evaluar pros y contras, y comunicar tus conclusiones de manera clara y profesional.",
        keyPoints: [
          "Analizar opciones: 'We should consider...', 'Let's weigh the pros and cons'",
          "Expresar opinión: 'In my opinion...', 'I believe that...', 'From my perspective...'",
          "Comparar alternativas: 'On one hand... on the other hand', 'Compared to...'",
          "Tomar decisiones: 'After careful consideration...', 'Taking everything into account...'"
        ],
        examples: [
          { english: "After careful consideration, I recommend option B.", spanish: "Después de una cuidadosa consideración, recomiendo la opción B.", explanation: "Recomendación formal" },
          { english: "On one hand, it's cheaper. On the other hand, it's lower quality.", spanish: "Por un lado, es más barato. Por otro lado, es de menor calidad.", explanation: "Comparando pros y contras" },
          { english: "Taking everything into account, we should proceed with the merger.", spanish: "Tomando todo en cuenta, deberíamos proceder con la fusión.", explanation: "Conclusión final" }
        ],
        tips: [
          "💡 En reuniones, usa 'I would suggest...' en lugar de 'You should...' para sonar menos directo",
          "💡 'SWOT analysis' es un método común: Strengths, Weaknesses, Opportunities, Threats",
          "💡 'Let's sleep on it' = Pensémoslo hasta mañana antes de decidir"
        ],
        whenToUse: [
          "En reuniones de equipo donde hay que elegir entre opciones",
          "Presentando una recomendación a tu jefe o cliente",
          "En emails de propuesta o justificación de decisiones",
          "Al analizar ventajas y desventajas en un informe"
        ],
        whenNotToUse: [
          "No uses lenguaje de decisiones formales en conversaciones casuales con amigos",
          "No digas 'After careful consideration...' para decidir dónde ir a cenar",
          "Evita 'SWOT analysis' en contextos personales — suena excesivamente corporativo"
        ]
      },
      objectives: ["Expresar opiniones profesionalmente", "Comparar opciones", "Comunicar decisiones"],
      grammarTheoryIds: ["b1-first-conditional", "b1-second-conditional"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l5t1_n1", word: "decision", translation: "decisión", type: "noun", definition: "a choice made after thinking", definitionEs: "una elección hecha después de pensar", example: "This is an important decision.", exampleEs: "Esta es una decisión importante.", related: ["decide"], difficulty: 1 },
          { id: "l5t1_n2", word: "option", translation: "opción", type: "noun", definition: "a possible choice", definitionEs: "una elección posible", example: "We have several options.", exampleEs: "Tenemos varias opciones.", related: ["alternative"], difficulty: 1 },
          { id: "l5t1_n3", word: "advantage", translation: "ventaja", type: "noun", definition: "a positive point", definitionEs: "un punto positivo", example: "The main advantage is the price.", exampleEs: "La ventaja principal es el precio.", related: ["benefit"], difficulty: 1 },
          { id: "l5t1_n4", word: "disadvantage", translation: "desventaja", type: "noun", definition: "a negative point", definitionEs: "un punto negativo", example: "One disadvantage is the location.", exampleEs: "Una desventaja es la ubicación.", related: ["drawback"], difficulty: 1 },
          { id: "l5t1_n5", word: "consequence", translation: "consecuencia", type: "noun", definition: "the result of an action", definitionEs: "el resultado de una acción", example: "Consider the consequences first.", exampleEs: "Considera las consecuencias primero.", related: ["result", "outcome"], difficulty: 2 },
          { id: "l5t1_n6", word: "outcome", translation: "resultado", type: "noun", definition: "what happens as a result", definitionEs: "lo que sucede como resultado", example: "We're hoping for a positive outcome.", exampleEs: "Esperamos un resultado positivo.", related: ["result"], difficulty: 2 },
          { id: "l5t1_n7", word: "strategy", translation: "estrategia", type: "noun", definition: "a plan to achieve a goal", definitionEs: "un plan para lograr una meta", example: "We need a new strategy.", exampleEs: "Necesitamos una nueva estrategia.", related: ["plan"], difficulty: 2 },
          { id: "l5t1_n8", word: "risk", translation: "riesgo", type: "noun", definition: "possibility of something bad", definitionEs: "posibilidad de algo malo", example: "There's a risk involved.", exampleEs: "Hay un riesgo involucrado.", related: ["danger"], difficulty: 1 },
        ],
        verbs: [
          { id: "l5t1_v1", word: "consider", translation: "considerar", type: "verb", definition: "to think about carefully", definitionEs: "pensar cuidadosamente", example: "Let's consider all options.", exampleEs: "Consideremos todas las opciones.", related: ["consideration"], difficulty: 1 },
          { id: "l5t1_v2", word: "evaluate", translation: "evaluar", type: "verb", definition: "to assess the value or quality", definitionEs: "determinar el valor o calidad", example: "We need to evaluate the results.", exampleEs: "Necesitamos evaluar los resultados.", related: ["evaluation"], difficulty: 2 },
          { id: "l5t1_v3", word: "recommend", translation: "recomendar", type: "verb", definition: "to suggest as good or suitable", definitionEs: "sugerir como bueno o adecuado", example: "I recommend option A.", exampleEs: "Recomiendo la opción A.", related: ["recommendation"], difficulty: 1 },
          { id: "l5t1_v4", word: "weigh", translation: "sopesar", type: "verb", definition: "to compare the importance of", definitionEs: "comparar la importancia de", example: "Let's weigh the pros and cons.", exampleEs: "Sopesemos los pros y contras.", related: [], difficulty: 2 },
          { id: "l5t1_v5", word: "proceed", translation: "proceder", type: "verb", definition: "to continue or go forward", definitionEs: "continuar o seguir adelante", example: "How do you want to proceed?", exampleEs: "¿Cómo quieres proceder?", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l5t1_a1", word: "crucial", translation: "crucial", type: "adjective", definition: "extremely important", definitionEs: "extremadamente importante", example: "This is a crucial decision.", exampleEs: "Esta es una decisión crucial.", related: ["critical"], difficulty: 2 },
          { id: "l5t1_a2", word: "risky", translation: "arriesgado", type: "adjective", definition: "involving risk", definitionEs: "que involucra riesgo", example: "It's a risky investment.", exampleEs: "Es una inversión arriesgada.", related: ["dangerous"], difficulty: 1 },
          { id: "l5t1_a3", word: "feasible", translation: "factible", type: "adjective", definition: "possible to do", definitionEs: "posible de hacer", example: "Is this plan feasible?", exampleEs: "¿Es factible este plan?", related: ["possible"], difficulty: 2 },
        ],
        expressions: [
          { id: "l5t1_e1", word: "In my opinion...", translation: "En mi opinión...", type: "expression", definition: "expressing a view", definitionEs: "expresando una opinión", example: "In my opinion, we should wait.", exampleEs: "En mi opinión, deberíamos esperar.", related: [], difficulty: 1 },
          { id: "l5t1_e2", word: "Taking everything into account...", translation: "Tomando todo en cuenta...", type: "expression", definition: "considering all factors", definitionEs: "considerando todos los factores", example: "Taking everything into account, I agree.", exampleEs: "Tomando todo en cuenta, estoy de acuerdo.", related: [], difficulty: 2 },
          { id: "l5t1_e3", word: "On one hand... on the other hand...", translation: "Por un lado... por otro lado...", type: "expression", definition: "presenting two sides", definitionEs: "presentando dos lados", example: "On one hand it's expensive, on the other hand it's high quality.", exampleEs: "Por un lado es caro, por otro lado es de alta calidad.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l5t1_cm1",
          wrong: "In my opinion, I think we should wait.",
          correct: "In my opinion, we should wait. / I think we should wait.",
          explanation: "It's redundant to use 'In my opinion' and 'I think' together. Use one or the other.",
          explanationEs: "Es redundante usar 'In my opinion' e 'I think' juntos. Usa uno u otro.",
          category: "usage"
        },
        {
          id: "l5t1_cm2",
          wrong: "I recommend you to consider option B.",
          correct: "I recommend (that) you consider option B.",
          explanation: "'Recommend' uses subjunctive without 'to': 'I recommend you consider', not 'I recommend you to consider'.",
          explanationEs: "'Recommend' usa subjuntivo sin 'to': 'I recommend you consider', no 'I recommend you to consider'.",
          category: "grammar"
        },
        {
          id: "l5t1_cm3",
          wrong: "We need to take a decision.",
          correct: "We need to make a decision.",
          explanation: "In English we say 'make a decision', not 'take a decision' (although 'take' is used in British English).",
          explanationEs: "En inglés decimos 'make a decision', no 'take a decision' (aunque 'take' se usa en inglés británico).",
          category: "vocabulary"
        },
        {
          id: "l5t1_cm4",
          wrong: "There are many advantages and many disadvantages.",
          correct: "There are several advantages and disadvantages. / There are pros and cons.",
          explanation: "It sounds more natural to say 'pros and cons' or use 'several' instead of repeating 'many'.",
          explanationEs: "Suena más natural decir 'pros and cons' o usar 'several' en lugar de repetir 'many'.",
          category: "usage"
        },
        {
          id: "l5t1_cm5",
          wrong: "What do you think about to expand to Europe?",
          correct: "What do you think about expanding to Europe?",
          explanation: "After 'about' use gerund (-ing): 'think about expanding', not 'think about to expand'.",
          explanationEs: "Después de 'about' va gerundio (-ing): 'think about expanding', no 'think about to expand'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con expresiones para tomar decisiones:",
          items: [
            { sentence: "___ my opinion, we should invest in technology.", answer: "In", hint: "expresión de opinión" },
            { sentence: "Let's ___ the pros and cons before deciding.", answer: "weigh", hint: "sopesar" },
            { sentence: "On one ___, it's risky. On the other ___, it could be very profitable.", answer: "hand/hand", hint: "expresión de contraste" },
            { sentence: "Taking everything into ___, I recommend option A.", answer: "account", hint: "considerar todo" },
            { sentence: "After careful ___, we have decided to proceed.", answer: "consideration", hint: "pensar cuidadosamente" }
          ]
        },
        {
          type: "matching",
          instruction: "Une las expresiones con su uso:",
          pairs: [
            { term: "In my opinion...", match: "Expresar punto de vista personal" },
            { term: "On one hand... on the other hand...", match: "Presentar dos lados de un argumento" },
            { term: "Taking everything into account...", match: "Llegar a una conclusión final" },
            { term: "I would suggest...", match: "Hacer una recomendación educada" },
            { term: "Let's weigh the pros and cons", match: "Analizar ventajas y desventajas" },
            { term: "After careful consideration...", match: "Indicar que se pensó bien" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma las oraciones usando expresiones más profesionales:",
          items: [
            { original: "I think we should wait.", transformed: "In my opinion, we should wait." },
            { original: "This plan is good and bad.", transformed: "On one hand, this plan has advantages. On the other hand, it has disadvantages." },
            { original: "After thinking a lot, I say yes.", transformed: "After careful consideration, I agree with the proposal." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa el vocabulario de decisiones empresariales:",
          items: [
            { sentence: "We need to ___ all the options before making a decision.", answer: "evaluate/consider", hint: "analizar" },
            { sentence: "What are the possible ___ of this decision?", answer: "consequences", hint: "resultados/efectos" },
            { sentence: "Is this plan ___ given our current budget?", answer: "feasible", hint: "posible de hacer" },
            { sentence: "There's some ___ involved in this investment.", answer: "risk", hint: "posibilidad de pérdida" },
            { sentence: "Our ___ is to expand gradually.", answer: "strategy", hint: "plan de acción" }
          ]
        }
      ],
      modelDialogue: {
        title: "Reunión de decisión empresarial",
        dialogue: [
          { speaker: "Manager", text: "We need to decide whether to launch in Europe or Asia first. What are your thoughts?", translation: "Necesitamos decidir si lanzar primero en Europa o Asia. ¿Cuáles son sus opiniones?" },
          { speaker: "Sarah", text: "In my opinion, we should consider Europe first. The market is more established.", translation: "En mi opinión, deberíamos considerar Europa primero. El mercado está más establecido." },
          { speaker: "Tom", text: "I see your point, but on one hand Europe is established, on the other hand, Asia has more growth potential.", translation: "Entiendo tu punto, pero por un lado Europa está establecida, por otro lado, Asia tiene más potencial de crecimiento." },
          { speaker: "Manager", text: "Let's weigh the pros and cons. Sarah, what are the advantages of Europe?", translation: "Sopesemos los pros y contras. Sarah, ¿cuáles son las ventajas de Europa?" },
          { speaker: "Sarah", text: "The main advantage is that we already have distribution partners there. The disadvantage is higher competition.", translation: "La ventaja principal es que ya tenemos socios de distribución ahí. La desventaja es mayor competencia." },
          { speaker: "Tom", text: "For Asia, the advantage is the growing middle class. The risk is that we don't know the market well.", translation: "Para Asia, la ventaja es la creciente clase media. El riesgo es que no conocemos bien el mercado." },
          { speaker: "Manager", text: "Taking everything into account, I would suggest we start in Europe but develop an Asia strategy for next year.", translation: "Tomando todo en cuenta, sugeriría que empecemos en Europa pero desarrollemos una estrategia para Asia el próximo año." },
          { speaker: "Sarah", text: "That sounds feasible. What would be the next steps?", translation: "Eso suena factible. ¿Cuáles serían los próximos pasos?" },
          { speaker: "Manager", text: "After careful consideration, we'll proceed with Europe. Let's evaluate outcomes after six months.", translation: "Después de una cuidadosa consideración, procederemos con Europa. Evaluemos los resultados después de seis meses." }
        ],
        keyPhrases: [
          "In my opinion, we should consider...",
          "On one hand... on the other hand...",
          "Let's weigh the pros and cons",
          "The main advantage/disadvantage is...",
          "Taking everything into account...",
          "I would suggest..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario de negocios",
        sounds: [
          { sound: "/ʒ/", word: "decision", tip: "Como la 'j' francesa", tipEs: "de-CI-sion, la 's' suena 'zh'" },
          { sound: "Stress", word: "evaluate", tip: "Acento en segunda sílaba", tipEs: "e-VA-lu-ate" },
          { sound: "/ʃ/", word: "crucial", tip: "El sonido '-ial'", tipEs: "CRU-cial, no 'crucial'" }
        ],
        minimalPairs: [
          { word1: "decision", word2: "division", explanation: "decision /dɪˈsɪʒn/ vs division /dɪˈvɪʒn/ - /s/ vs /v/ antes de /ɪʒn/" },
          { word1: "consider", word2: "considerate", explanation: "consider /kənˈsɪdər/ vs considerate /kənˈsɪdərət/ - longitud diferente" }
        ],
        intonation: [
          { pattern: "Falling for recommendations", example: "I recommend option B.↘", tip: "Recomendaciones bajan al final", tipEs: "Indica conclusión definitiva" }
        ],
        commonErrors: [
          { word: "strategy", wrong: "/stra-TE-gi/", right: "/ˈstrætədʒi/", note: "Acento en primera sílaba" },
          { word: "consequence", wrong: "/kon-se-KWEN-se/", right: "/ˈkɒnsɪkwəns/", note: "Acento en primera sílaba" },
          { word: "evaluate", wrong: "/e-va-LU-ate/", right: "/ɪˈvæljueɪt/", note: "Acento en segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "Toma de decisiones en culturas empresariales",
        titleEs: "Toma de decisiones en culturas empresariales",
        content: "La toma de decisiones varía según la cultura empresarial. En EE.UU., las decisiones tienden a ser rápidas y directas - el tiempo es dinero. En Japón, el proceso 'nemawashi' busca consenso antes de decidir, lo que toma más tiempo pero asegura apoyo. En Alemania, se valora el análisis detallado antes de comprometerse. En culturas latinas, las relaciones personales a menudo influyen en las decisiones. Conocer estas diferencias es crucial en negocios internacionales.",
        contentEs: "EE.UU.: decisiones rápidas. Japón: nemawashi = consenso. Alemania: análisis detallado. Latinoamérica: relaciones personales influyen.",
        region: "General",
        examples: [
          "'Let's sleep on it' - Pensémoslo hasta mañana",
          "'SWOT analysis' - Fortalezas, Debilidades, Oportunidades, Amenazas",
          "'Bottom line' - El resultado final, lo más importante",
          "'Devil's advocate' - Argumentar el lado opuesto para probar una idea",
          "'Run it up the flagpole' - Probar una idea para ver la reacción"
        ]
      },
      consolidationQuiz: [
        {
          question: "'In my opinion' se usa para:",
          options: ["dar órdenes", "expresar punto de vista personal", "pedir información", "hacer una promesa"],
          correctAnswer: 1,
          explanation: "'In my opinion' introduce tu perspectiva o punto de vista personal."
        },
        {
          question: "'I recommend you ___ option B':",
          options: ["to consider", "consider", "considering", "considered"],
          correctAnswer: 1,
          explanation: "'Recommend' usa subjuntivo: 'recommend (that) you consider', sin 'to'."
        },
        {
          question: "'Taking everything into account' se usa para:",
          options: ["empezar una discusión", "presentar un problema", "llegar a una conclusión", "hacer una pregunta"],
          correctAnswer: 2,
          explanation: "Esta expresión introduce una conclusión después de analizar todo."
        },
        {
          question: "La palabra 'feasible' significa:",
          options: ["arriesgado", "posible de hacer", "costoso", "fácil"],
          correctAnswer: 1,
          explanation: "'Feasible' significa que algo es posible y práctico de hacer."
        },
        {
          question: "'Let's ___ the pros and cons':",
          options: ["take", "make", "weigh", "do"],
          correctAnswer: 2,
          explanation: "La expresión correcta es 'weigh the pros and cons' (sopesar pros y contras)."
        },
        {
          question: "'On one hand... on the other hand' se usa para:",
          options: ["dar instrucciones", "presentar dos perspectivas", "hacer una predicción", "expresar certeza"],
          correctAnswer: 1,
          explanation: "Esta expresión presenta dos lados de un argumento o situación."
        }
      ],
      guidedProduction: [
        {
          task: "Analizar una decisión empresarial",
          prompt: "Tu empresa debe decidir si abrir una nueva oficina en otra ciudad. Analiza los pros y contras.",
          sampleAnswer: "In my opinion, we should carefully consider this expansion. On one hand, opening a new office would give us access to new markets and talent. On the other hand, it involves significant costs and management challenges. The main advantage is potential revenue growth. The disadvantage is the risk if the market doesn't respond well. Taking everything into account, I would suggest we do a pilot project first before committing fully.",
          hints: ["Usa 'In my opinion' o 'I believe'", "Presenta pros y contras con 'On one hand... on the other hand'", "Concluye con 'Taking everything into account'"]
        },
        {
          task: "Dar una recomendación profesional",
          prompt: "Un colega te pide consejo sobre si aceptar una oferta de trabajo en otro país.",
          sampleAnswer: "I would suggest you weigh the pros and cons carefully. On one hand, working abroad offers amazing professional growth and cultural experience. On the other hand, you'd be far from family and friends. Consider the consequences: How would this affect your long-term career? Is it a feasible move financially? After careful consideration, I recommend you make a decision based on your personal priorities, not just the salary.",
          hints: ["Usa 'I would suggest'", "Menciona consecuencias", "Usa vocabulario: feasible, consider, decision"]
        },
        {
          task: "Presentar una estrategia",
          prompt: "Presenta una estrategia para mejorar las ventas de tu empresa.",
          sampleAnswer: "Our strategy to improve sales has three key elements. First, we should evaluate our current customer base and identify growth opportunities. Second, I recommend we invest in digital marketing - the potential outcome is reaching younger customers. The main risk is the initial investment, but the advantage of increased visibility outweighs it. Taking everything into account, this strategy is feasible with our current resources.",
          hints: ["Estructura tu respuesta claramente", "Usa 'evaluate', 'outcome', 'risk', 'strategy'", "Termina con una conclusión"]
        },
        {
          task: "Participar en una reunión de decisión",
          prompt: "Escribe tu participación en una reunión donde se decide si invertir en nueva tecnología.",
          sampleAnswer: "In my opinion, investing in this technology is crucial for our competitiveness. Let me explain the advantages: it would increase efficiency by 30% and reduce errors. However, I must mention the disadvantage - the learning curve for staff. The risk is temporary productivity loss during implementation. But taking everything into account, the long-term benefits outweigh the short-term challenges. I recommend we proceed with a phased approach.",
          hints: ["Expresa tu opinión claramente", "Menciona ventajas y desventajas", "Ofrece una recomendación específica"]
        }
      ],
      connectionToPrevious: "Este es el primer nivel de Upper-Intermediate. Construirás sobre tu base de B1 para dominar situaciones profesionales más complejas.",
      connectionToNext: "En la siguiente lección aprenderás a expresar probabilidad con 'will', 'may' y 'might', esencial para predecir resultados de decisiones."
    },
    {
      id: 2,
      title: "Future Possibilities with Will and Might",
      titleEs: "Posibilidades Futuras con Will y Might",
      introduction: {
        title: "🔮 Posibilidades Futuras con Will y Might",
        explanation: "Expresar diferentes grados de certeza sobre el futuro es esencial. 'Will' expresa certeza o decisiones inmediatas, mientras 'might' y 'may' expresan posibilidad.",
        keyPoints: [
          "Will (100% seguro): 'The meeting will start at 9' - Es un hecho",
          "Will probably (muy probable): 'It will probably rain' - Bastante seguro",
          "May/Might (50% posibilidad): 'I might come to the party' - No estoy seguro",
          "Might not: 'She might not agree' - Posiblemente no",
          "Won't (seguro que no): 'He won't come' - Definitivamente no"
        ],
        examples: [
          { english: "I think it will rain tomorrow.", spanish: "Creo que lloverá mañana.", explanation: "Predicción con confianza" },
          { english: "We might go to Spain this summer.", spanish: "Podríamos ir a España este verano.", explanation: "Posibilidad - no decidido" },
          { english: "She probably won't accept the offer.", spanish: "Probablemente no aceptará la oferta.", explanation: "Negativo probable" }
        ],
        tips: [
          "💡 'Might' y 'May' son intercambiables para posibilidad: 'It might rain' = 'It may rain'",
          "💡 Para decisiones instantáneas usa 'will': 'The phone is ringing. I'll answer it.'",
          "💡 'Will' después de 'I think/I hope/I expect' es muy común: 'I hope you'll come'"
        ],
        whenToUse: [
          "Para predicciones con certeza: 'The meeting will start at 9'",
          "Para posibilidad: 'We might go to Spain', 'I may come to the party'",
          "Para decisiones instantáneas: 'I'll answer the phone'",
          "Con I think/hope: 'I think it will rain', 'I hope you'll come'"
        ],
        whenNotToUse: [
          "No uses 'will' para planes ya decididos → usa 'going to': 'I'm going to travel' (NO 'I will travel' si ya lo planeaste)",
          "No confundas 'might not' (posible que no) con 'won't' (seguro que no)"
        ]
      },
      objectives: ["Expresar diferentes grados de certeza", "Usar will, may, might correctamente", "Hacer predicciones"],
      grammarTheoryIds: ["b1-modal-deduction", "b1-future-forms"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l5t2_n1", word: "possibility", translation: "posibilidad", type: "noun", definition: "something that may happen", definitionEs: "algo que puede suceder", example: "There's a possibility of rain.", exampleEs: "Hay una posibilidad de lluvia.", related: ["possible"], difficulty: 1 },
          { id: "l5t2_n2", word: "probability", translation: "probabilidad", type: "noun", definition: "how likely something is", definitionEs: "qué tan probable es algo", example: "The probability is high.", exampleEs: "La probabilidad es alta.", related: ["probable"], difficulty: 2 },
          { id: "l5t2_n3", word: "chance", translation: "oportunidad/probabilidad", type: "noun", definition: "the likelihood of something", definitionEs: "la probabilidad de algo", example: "There's a good chance she'll say yes.", exampleEs: "Hay una buena probabilidad de que diga sí.", related: [], difficulty: 1 },
          { id: "l5t2_n4", word: "prediction", translation: "predicción", type: "noun", definition: "saying what will happen", definitionEs: "decir qué pasará", example: "My prediction is that they'll win.", exampleEs: "Mi predicción es que ganarán.", related: ["predict"], difficulty: 2 },
        ],
        verbs: [
          { id: "l5t2_v1", word: "predict", translation: "predecir", type: "verb", definition: "to say what will happen", definitionEs: "decir qué sucederá", example: "It's hard to predict the future.", exampleEs: "Es difícil predecir el futuro.", related: ["prediction"], difficulty: 2 },
          { id: "l5t2_v2", word: "expect", translation: "esperar/suponer", type: "verb", definition: "to think something will happen", definitionEs: "pensar que algo sucederá", example: "I expect they'll arrive soon.", exampleEs: "Supongo que llegarán pronto.", related: ["expectation"], difficulty: 1 },
          { id: "l5t2_v3", word: "doubt", translation: "dudar", type: "verb", definition: "to not believe something", definitionEs: "no creer algo", example: "I doubt they'll finish on time.", exampleEs: "Dudo que terminen a tiempo.", related: [], difficulty: 1 },
          { id: "l5t2_v4", word: "assume", translation: "asumir", type: "verb", definition: "to believe without proof", definitionEs: "creer sin prueba", example: "I assume you'll be there.", exampleEs: "Asumo que estarás ahí.", related: ["assumption"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l5t2_a1", word: "likely", translation: "probable", type: "adjective", definition: "probably going to happen", definitionEs: "probablemente va a suceder", example: "It's likely to rain.", exampleEs: "Es probable que llueva.", related: ["unlikely"], difficulty: 1 },
          { id: "l5t2_a2", word: "unlikely", translation: "improbable", type: "adjective", definition: "probably not going to happen", definitionEs: "probablemente no va a suceder", example: "It's unlikely he'll agree.", exampleEs: "Es improbable que él esté de acuerdo.", related: ["likely"], difficulty: 1 },
          { id: "l5t2_a3", word: "certain", translation: "seguro/cierto", type: "adjective", definition: "completely sure", definitionEs: "completamente seguro", example: "I'm certain it will work.", exampleEs: "Estoy seguro de que funcionará.", related: ["uncertain"], difficulty: 1 },
          { id: "l5t2_a4", word: "uncertain", translation: "incierto", type: "adjective", definition: "not sure", definitionEs: "no seguro", example: "The outcome is uncertain.", exampleEs: "El resultado es incierto.", related: ["certain"], difficulty: 1 },
        ],
        expressions: [
          { id: "l5t2_e1", word: "There's a good chance that...", translation: "Hay una buena probabilidad de que...", type: "expression", definition: "expressing likelihood", definitionEs: "expresando probabilidad", example: "There's a good chance that we'll win.", exampleEs: "Hay una buena probabilidad de que ganemos.", related: [], difficulty: 1 },
          { id: "l5t2_e2", word: "It's likely/unlikely that...", translation: "Es probable/improbable que...", type: "expression", definition: "expressing probability", definitionEs: "expresando probabilidad", example: "It's unlikely that they'll cancel.", exampleEs: "Es improbable que cancelen.", related: [], difficulty: 1 },
          { id: "l5t2_e3", word: "I doubt that...", translation: "Dudo que...", type: "expression", definition: "expressing disbelief", definitionEs: "expresando incredulidad", example: "I doubt that she knows.", exampleEs: "Dudo que ella sepa.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l5t2_adv1", word: "probably", translation: "probablemente", type: "adverb", definition: "most likely", definitionEs: "muy probablemente", example: "He'll probably arrive late.", exampleEs: "Probablemente llegará tarde.", related: [], difficulty: 1 },
          { id: "l5t2_adv2", word: "definitely", translation: "definitivamente", type: "adverb", definition: "for certain", definitionEs: "con certeza", example: "I'll definitely be there.", exampleEs: "Definitivamente estaré ahí.", related: [], difficulty: 1 },
          { id: "l5t2_adv3", word: "possibly", translation: "posiblemente", type: "adverb", definition: "maybe", definitionEs: "tal vez", example: "I'll possibly go to the party.", exampleEs: "Posiblemente vaya a la fiesta.", related: [], difficulty: 1 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l5t2_cm1",
          wrong: "It will probably to rain tomorrow.",
          correct: "It will probably rain tomorrow.",
          explanation: "After 'will' use the base verb without 'to': 'will rain', not 'will to rain'.",
          explanationEs: "Después de 'will' va el verbo base sin 'to': 'will rain', no 'will to rain'.",
          category: "grammar"
        },
        {
          id: "l5t2_cm2",
          wrong: "I might will go to the party.",
          correct: "I might go to the party. / I will go to the party.",
          explanation: "Don't combine modals. Use 'might' OR 'will', not both together.",
          explanationEs: "No combines modales. Usa 'might' O 'will', no los dos juntos.",
          category: "grammar"
        },
        {
          id: "l5t2_cm3",
          wrong: "She mights come to the meeting.",
          correct: "She might come to the meeting.",
          explanation: "'Might' never changes: 'he might', 'she might', not 'mights'.",
          explanationEs: "'Might' nunca cambia: 'he might', 'she might', no 'mights'.",
          category: "grammar"
        },
        {
          id: "l5t2_cm4",
          wrong: "I think it might rains.",
          correct: "I think it might rain.",
          explanation: "After 'might' use base verb: 'might rain', not 'might rains'.",
          explanationEs: "Después de 'might' va verbo base: 'might rain', no 'might rains'.",
          category: "grammar"
        },
        {
          id: "l5t2_cm5",
          wrong: "There is a good chance that it will to happen.",
          correct: "There's a good chance that it will happen.",
          explanation: "After 'will' don't use 'to': 'will happen', not 'will to happen'.",
          explanationEs: "Después de 'will' no va 'to': 'will happen', no 'will to happen'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con 'will', 'may' o 'might' según el grado de certeza:",
          items: [
            { sentence: "The meeting is confirmed. It ___ start at 3 PM.", answer: "will", hint: "100% seguro" },
            { sentence: "I'm not sure, but I ___ be late tomorrow.", answer: "might/may", hint: "posibilidad ~50%" },
            { sentence: "Don't worry, I ___ definitely help you.", answer: "will/'ll", hint: "promesa segura" },
            { sentence: "She ___ accept the offer, but I'm not certain.", answer: "might/may", hint: "no estás seguro" },
            { sentence: "It ___ probably rain this afternoon.", answer: "will/'ll", hint: "muy probable" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica según el nivel de certeza (0% - 100%):",
          categories: [
            { name: "100% - Certeza", items: ["will definitely", "I'm certain", "absolutely"] },
            { name: "75% - Muy probable", items: ["will probably", "most likely", "I expect"] },
            { name: "50% - Posibilidad", items: ["may", "might", "possibly", "perhaps"] },
            { name: "25% - Poco probable", items: ["probably won't", "unlikely", "I doubt"] },
            { name: "0% - Imposible", items: ["definitely won't", "there's no way", "won't"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Cambia el nivel de certeza de estas oraciones:",
          items: [
            { original: "It will rain tomorrow. (menos seguro)", transformed: "It might rain tomorrow." },
            { original: "She might come. (más seguro)", transformed: "She will probably come." },
            { original: "I won't go to the party. (menos seguro)", transformed: "I might not go to the party." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con vocabulario de probabilidad:",
          items: [
            { sentence: "There's a good ___ that we'll win the contract.", answer: "chance", hint: "probabilidad" },
            { sentence: "It's very ___ that the price will increase.", answer: "likely", hint: "probable" },
            { sentence: "The ___ is that sales will grow by 20%.", answer: "prediction", hint: "lo que se espera" },
            { sentence: "I ___ they'll finish on time - they're too slow.", answer: "doubt", hint: "no creer" },
            { sentence: "It's quite ___ what will happen next.", answer: "uncertain", hint: "no seguro" }
          ]
        }
      ],
      modelDialogue: {
        title: "Discutiendo posibilidades en el trabajo",
        dialogue: [
          { speaker: "Alex", text: "Do you think we'll meet the deadline?", translation: "¿Crees que cumpliremos con la fecha límite?" },
          { speaker: "Maria", text: "I'm not certain. We might finish on time if everyone works extra hours.", translation: "No estoy segura. Podríamos terminar a tiempo si todos trabajan horas extra." },
          { speaker: "Alex", text: "What's the probability of that happening?", translation: "¿Cuál es la probabilidad de que eso suceda?" },
          { speaker: "Maria", text: "I'd say there's a good chance - maybe 70%. Tom will definitely do his part.", translation: "Diría que hay una buena probabilidad - quizás 70%. Tom definitivamente hará su parte." },
          { speaker: "Alex", text: "What about Sarah? She's been absent a lot.", translation: "¿Qué hay de Sarah? Ha estado ausente mucho." },
          { speaker: "Maria", text: "That's uncertain. She might not be available next week. I doubt she'll be fully recovered.", translation: "Eso es incierto. Podría no estar disponible la próxima semana. Dudo que se haya recuperado completamente." },
          { speaker: "Alex", text: "So, what's your prediction?", translation: "Entonces, ¿cuál es tu predicción?" },
          { speaker: "Maria", text: "My prediction is that we'll probably need an extension. We may have to ask for two more days.", translation: "Mi predicción es que probablemente necesitaremos una extensión. Quizás tengamos que pedir dos días más." },
          { speaker: "Alex", text: "That's unlikely to be approved, but I'll ask. The client might agree if we explain.", translation: "Es poco probable que lo aprueben, pero preguntaré. El cliente podría estar de acuerdo si explicamos." }
        ],
        keyPhrases: [
          "I'm not certain...",
          "We might finish on time...",
          "There's a good chance...",
          "I doubt that...",
          "My prediction is that...",
          "We'll probably need..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de modales y adverbios de probabilidad",
        sounds: [
          { sound: "Contractions", word: "I'll", tip: "I'll /aɪl/ - una sílaba", tipEs: "No digas 'I will' en habla normal" },
          { sound: "Reduction", word: "probably", tip: "Se reduce a 'probly' en habla rápida", tipEs: "2 sílabas: PROB-ly" },
          { sound: "/maɪt/", word: "might", tip: "Suena como 'mite' (ácaro)", tipEs: "Might y mite son homófonos" }
        ],
        minimalPairs: [
          { word1: "will", word2: "well", explanation: "will /wɪl/ vs well /wel/ - vocal diferente, importante en contexto" },
          { word1: "certain", word2: "curtain", explanation: "certain /ˈsɜːtn/ vs curtain /ˈkɜːtn/ - /s/ vs /k/ inicial" }
        ],
        intonation: [
          { pattern: "Rising for uncertain predictions", example: "It might rain tomorrow?↗", tip: "Con 'might' la voz puede subir", tipEs: "Indica que no estás seguro" }
        ],
        commonErrors: [
          { word: "definitely", wrong: "/de-fi-ni-te-li/", right: "/ˈdefɪnətli/", note: "Solo 4 sílabas, no 5" },
          { word: "probably", wrong: "/pro-ba-ble-men-te/", right: "/ˈprɒbəbli/", note: "3 sílabas, se reduce a 2" },
          { word: "certain", wrong: "/ser-TAIN/", right: "/ˈsɜːtn/", note: "Acento en primera sílaba" }
        ]
      },
      culturalNote: {
        title: "Expresando certeza en diferentes culturas",
        titleEs: "Expresando certeza en diferentes culturas",
        content: "El nivel de certeza expresado varía culturalmente. Los angloparlantes tienden a usar 'hedging' (atenuadores) para sonar menos absolutos: 'I think it might work' suena más educado que 'It will work'. En culturas de alto contexto, la certeza puede expresarse de forma más indirecta. En negocios, decir 'I'm 100% certain' puede verse como arrogante - es mejor decir 'I'm fairly confident' o 'I believe strongly'. Los británicos usan más atenuadores que los estadounidenses.",
        contentEs: "Usa 'hedging': 'I think it might work' suena más educado. 'I'm fairly confident' mejor que '100% certain'. Británicos más atenuadores.",
        region: "General",
        examples: [
          "'I think' - Atenuador común antes de opiniones",
          "'Perhaps' vs 'Maybe' - 'Perhaps' es más formal",
          "'Sort of' / 'Kind of' - Reducen certeza: 'It's sort of finished'",
          "'I'm not sure, but...' - Introducir opinión con cautela",
          "'If I'm not mistaken...' - Expresar algo sin sonar arrogante"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Will' expresa:",
          options: ["imposibilidad", "certeza o promesa", "duda total", "pregunta"],
          correctAnswer: 1,
          explanation: "'Will' expresa certeza, predicciones seguras, o promesas."
        },
        {
          question: "'She ___ come - I'm not sure':",
          options: ["will definitely", "might", "won't", "will certainly"],
          correctAnswer: 1,
          explanation: "'Might' expresa posibilidad cuando no estás seguro."
        },
        {
          question: "¿Cuál es correcta?",
          options: ["It might rains", "It might to rain", "It might rain", "It mights rain"],
          correctAnswer: 2,
          explanation: "Después de 'might' va verbo base: 'might rain'."
        },
        {
          question: "'I'll probably go' expresa:",
          options: ["certeza total", "alta probabilidad", "baja probabilidad", "imposibilidad"],
          correctAnswer: 1,
          explanation: "'Will probably' indica alta probabilidad (~75-80%)."
        },
        {
          question: "'I doubt they'll finish' significa:",
          options: ["Creo que terminarán", "Es seguro que terminarán", "Probablemente no terminarán", "Definitivamente terminarán"],
          correctAnswer: 2,
          explanation: "'I doubt' expresa que crees que algo probablemente NO sucederá."
        },
        {
          question: "'There's a good chance' indica:",
          options: ["0% probabilidad", "25% probabilidad", "70%+ probabilidad", "100% certeza"],
          correctAnswer: 2,
          explanation: "'There's a good chance' indica alta probabilidad de que algo suceda."
        }
      ],
      guidedProduction: [
        {
          task: "Hacer predicciones sobre tu carrera",
          prompt: "Escribe 5 predicciones sobre tu vida profesional en los próximos 5 años, usando diferentes niveles de certeza.",
          sampleAnswer: "In 5 years, I will definitely still be working in technology - that's certain. I'll probably get promoted to a senior position if I keep developing my skills. I might change companies if a better opportunity comes along. I may start my own side business, but I'm not certain. I probably won't move to another country, but there's a small chance it could happen.",
          hints: ["Varía entre will, will probably, might/may, probably won't", "Añade razones para tus predicciones", "Usa expresiones como 'I'm certain', 'there's a chance'"]
        },
        {
          task: "Discutir posibilidades de un proyecto",
          prompt: "Analiza las posibilidades de éxito o fracaso de un proyecto imaginario.",
          sampleAnswer: "Looking at this project, I predict several scenarios. We will definitely need more resources - that's certain. We'll probably face some technical challenges, but I expect we can overcome them. The client might request changes, which could delay us. There's a good chance we'll finish on time if everything goes well. However, I doubt we'll come in under budget.",
          hints: ["Usa 'I predict', 'I expect', 'I doubt'", "Mezcla certeza alta y baja", "Incluye 'there's a good chance', 'it's unlikely'"]
        },
        {
          task: "Expresar opiniones cautelosas",
          prompt: "Responde a estas preguntas usando diferentes niveles de certeza: ¿Aprenderás otro idioma? ¿Viajarás al espacio? ¿Vivirás 100 años?",
          sampleAnswer: "Will I learn another language? I'll probably learn Portuguese - I've been wanting to for years. It might take a while, but I'm fairly confident I'll do it. Will I travel to space? That's very uncertain. I might experience space tourism if it becomes affordable, but I doubt it will happen in my lifetime. Will I live to 100? It's possible but unlikely. I may live into my 90s if I stay healthy, but 100 is uncertain.",
          hints: ["Responde con diferentes grados de certeza", "Usa atenuadores: 'I'm fairly confident', 'it's possible but unlikely'", "Justifica tus predicciones"]
        },
        {
          task: "Pronóstico del tiempo y planes",
          prompt: "Describe tus planes para el fin de semana considerando el pronóstico del tiempo incierto.",
          sampleAnswer: "The weather forecast is uncertain, so I need to be flexible. It might rain on Saturday, so I'll probably stay home and watch movies. If it's sunny, I may go to the beach - there's a good chance the weather will clear up by afternoon. On Sunday, I'll definitely visit my parents - that's certain regardless of weather. I might also go hiking if conditions allow.",
          hints: ["Usa 'might', 'may', 'will probably'", "Muestra planes flexibles", "Incluye planes seguros con 'definitely', 'certain'"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste a tomar decisiones. Ahora aprenderás a expresar qué tan probable es que esas decisiones tengan éxito.",
      connectionToNext: "En la siguiente lección aprenderás el primer condicional, que te permite hablar de consecuencias futuras reales de tus decisiones."
    },
    {
      id: 3,
      title: "First Conditional",
      titleEs: "Condicional Primer Tipo",
      introduction: {
        title: "🔀 Condicional Primer Tipo (First Conditional)",
        explanation: "El primer condicional habla de situaciones futuras que son probables o posibles. Usa 'if' + presente simple, y 'will' + verbo base en la otra cláusula.",
        keyPoints: [
          "Estructura: If + presente simple, will + verbo base",
          "Ejemplo: 'If it rains, I will stay home'",
          "También con 'unless' (= if not): 'Unless it rains, we'll go out'",
          "La cláusula con 'if' puede ir primero o segundo: 'I'll call you if I'm late'",
          "Variaciones: can/may/might en lugar de will: 'If you study, you might pass'"
        ],
        examples: [
          { english: "If I have time, I'll help you.", spanish: "Si tengo tiempo, te ayudaré.", explanation: "Condición + resultado" },
          { english: "We'll miss the train if we don't hurry.", spanish: "Perderemos el tren si no nos apuramos.", explanation: "Resultado primero" },
          { english: "Unless you study, you won't pass.", spanish: "A menos que estudies, no pasarás.", explanation: "Usando 'unless'" }
        ],
        tips: [
          "💡 NUNCA uses 'will' en la cláusula con 'if': ❌ 'If I will see him' ✅ 'If I see him'",
          "💡 'Unless' = 'If...not': 'Unless you hurry' = 'If you don't hurry'",
          "💡 Puedes usar imperativo: 'If you see John, tell him I called'"
        ],
        whenToUse: [
          "Para condiciones futuras probables: 'If it rains, I'll stay home'",
          "Para consecuencias de acciones: 'We'll miss the train if we don't hurry'",
          "Con 'unless' (= if not): 'Unless you study, you won't pass'",
          "Para dar instrucciones condicionales: 'If you see John, tell him I called'"
        ],
        whenNotToUse: [
          "NUNCA uses 'will' en la cláusula if: 'If I will see him' ❌ → 'If I see him' ✓",
          "No confundas 'unless' con 'if': 'Unless it rains' = 'If it doesn't rain'"
        ]
      },
      objectives: ["Formar oraciones condicionales", "Usar unless correctamente", "Hablar de consecuencias futuras"],
      grammarTheoryIds: ["b1-first-conditional"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l5t3_n1", word: "condition", translation: "condición", type: "noun", definition: "something required for something else", definitionEs: "algo requerido para otra cosa", example: "Under one condition...", exampleEs: "Bajo una condición...", related: ["conditional"], difficulty: 1 },
          { id: "l5t3_n2", word: "result", translation: "resultado", type: "noun", definition: "what happens because of something", definitionEs: "lo que sucede por algo", example: "This is the result of hard work.", exampleEs: "Este es el resultado del trabajo duro.", related: [], difficulty: 1 },
          { id: "l5t3_n3", word: "consequence", translation: "consecuencia", type: "noun", definition: "the effect of an action", definitionEs: "el efecto de una acción", example: "Think about the consequences.", exampleEs: "Piensa en las consecuencias.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l5t3_v1", word: "depend (on)", translation: "depender (de)", type: "verb", definition: "to be determined by", definitionEs: "ser determinado por", example: "It depends on the weather.", exampleEs: "Depende del clima.", related: [], difficulty: 1 },
          { id: "l5t3_v2", word: "succeed", translation: "tener éxito", type: "verb", definition: "to achieve a goal", definitionEs: "lograr una meta", example: "If you work hard, you'll succeed.", exampleEs: "Si trabajas duro, tendrás éxito.", related: ["success"], difficulty: 1 },
          { id: "l5t3_v3", word: "fail", translation: "fallar/fracasar", type: "verb", definition: "to not succeed", definitionEs: "no tener éxito", example: "If you don't try, you'll fail.", exampleEs: "Si no intentas, fracasarás.", related: ["failure"], difficulty: 1 },
          { id: "l5t3_v4", word: "promise", translation: "prometer", type: "verb", definition: "to say you will do something", definitionEs: "decir que harás algo", example: "If you promise, I'll believe you.", exampleEs: "Si prometes, te creeré.", related: [], difficulty: 1 },
        ],
        adjectives: [],
        expressions: [
          { id: "l5t3_e1", word: "If... then...", translation: "Si... entonces...", type: "expression", definition: "showing cause and effect", definitionEs: "mostrando causa y efecto", example: "If you help me, then I'll help you.", exampleEs: "Si me ayudas, entonces te ayudaré.", related: [], difficulty: 1 },
          { id: "l5t3_e2", word: "Unless...", translation: "A menos que...", type: "expression", definition: "except if", definitionEs: "excepto si", example: "Unless you hurry, we'll be late.", exampleEs: "A menos que te apures, llegaremos tarde.", related: [], difficulty: 1 },
          { id: "l5t3_e3", word: "As long as...", translation: "Siempre que.../Con tal de que...", type: "expression", definition: "provided that", definitionEs: "siempre que", example: "As long as you're happy, I'm happy.", exampleEs: "Siempre que seas feliz, yo soy feliz.", related: [], difficulty: 2 },
          { id: "l5t3_e4", word: "In case...", translation: "En caso de que...", type: "expression", definition: "because something might happen", definitionEs: "porque algo podría suceder", example: "Take an umbrella in case it rains.", exampleEs: "Lleva un paraguas en caso de que llueva.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l5t3_cm1",
          wrong: "If I will see him, I will tell him.",
          correct: "If I see him, I will tell him.",
          explanation: "NEVER use 'will' in the clause with 'if'. Use present simple: 'If I see...'.",
          explanationEs: "NUNCA uses 'will' en la cláusula con 'if'. Usa presente simple: 'If I see...'.",
          category: "grammar"
        },
        {
          id: "l5t3_cm2",
          wrong: "Unless you won't study, you will fail.",
          correct: "Unless you study, you will fail.",
          explanation: "'Unless' already means 'if...not', so don't add 'won't'. It's double negation.",
          explanationEs: "'Unless' ya significa 'if...not', así que no añadas 'won't'. Es doble negación.",
          category: "grammar"
        },
        {
          id: "l5t3_cm3",
          wrong: "I will call you if I will arrive late.",
          correct: "I will call you if I arrive late.",
          explanation: "In the clause with 'if', use present simple even when talking about the future.",
          explanationEs: "En la cláusula con 'if', usa presente simple aunque hables del futuro.",
          category: "grammar"
        },
        {
          id: "l5t3_cm4",
          wrong: "If you will help me, I help you too.",
          correct: "If you help me, I will help you too.",
          explanation: "'Will' goes in the result clause, not in the clause with 'if'.",
          explanationEs: "'Will' va en la cláusula de resultado, no en la cláusula con 'if'.",
          category: "grammar"
        },
        {
          id: "l5t3_cm5",
          wrong: "Take an umbrella in case it will rain.",
          correct: "Take an umbrella in case it rains.",
          explanation: "After 'in case' also use present simple.",
          explanationEs: "Después de 'in case' también usa presente simple.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las oraciones condicionales:",
          items: [
            { sentence: "If you ___ (study) hard, you ___ (pass) the exam.", answer: "study/will pass", hint: "presente + will" },
            { sentence: "I ___ (be) happy if you ___ (come) to my party.", answer: "will be/come", hint: "will + presente" },
            { sentence: "Unless it ___ (rain), we ___ (go) to the beach.", answer: "rains/will go", hint: "unless + presente" },
            { sentence: "If she ___ (not call) me, I ___ (not go) to the meeting.", answer: "doesn't call/won't go", hint: "negativo en ambas" },
            { sentence: "As long as you ___ (work) hard, you ___ (succeed).", answer: "work/will succeed", hint: "as long as + presente" }
          ]
        },
        {
          type: "matching",
          instruction: "Une las dos partes de las oraciones condicionales:",
          pairs: [
            { term: "If you eat too much,", match: "you'll feel sick." },
            { term: "Unless you leave now,", match: "you'll miss the train." },
            { term: "If the weather is nice,", match: "we'll have a barbecue." },
            { term: "As long as you're careful,", match: "nothing bad will happen." },
            { term: "In case there's traffic,", match: "leave an hour early." },
            { term: "If you don't understand,", match: "please ask questions." }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma usando 'unless':",
          items: [
            { original: "If you don't hurry, you'll be late.", transformed: "Unless you hurry, you'll be late." },
            { original: "If she doesn't study, she won't pass.", transformed: "Unless she studies, she won't pass." },
            { original: "If they don't leave now, they'll miss the flight.", transformed: "Unless they leave now, they'll miss the flight." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Elige entre 'if', 'unless', 'as long as', o 'in case':",
          items: [
            { sentence: "___ you don't understand, ask questions.", answer: "If", hint: "condición normal" },
            { sentence: "Take a jacket ___ it gets cold later.", answer: "in case", hint: "preparación para posibilidad" },
            { sentence: "___ you finish your work, you can't leave.", answer: "Unless", hint: "= If you don't" },
            { sentence: "You can borrow my car ___ you return it by 6.", answer: "as long as", hint: "con la condición de que" },
            { sentence: "___ the price is right, I'll buy it.", answer: "If", hint: "condición simple" }
          ]
        }
      ],
      modelDialogue: {
        title: "Negociando condiciones en el trabajo",
        dialogue: [
          { speaker: "Manager", text: "If we finish this project on time, we'll get a bonus.", translation: "Si terminamos este proyecto a tiempo, obtendremos un bono." },
          { speaker: "Employee", text: "That sounds great! What if we need more resources?", translation: "¡Eso suena genial! ¿Qué pasa si necesitamos más recursos?" },
          { speaker: "Manager", text: "If you need more help, just let me know. I'll assign someone.", translation: "Si necesitas más ayuda, solo avísame. Asignaré a alguien." },
          { speaker: "Employee", text: "And unless we get the client's approval by Friday, we can't proceed, right?", translation: "Y a menos que obtengamos la aprobación del cliente el viernes, no podemos proceder, ¿verdad?" },
          { speaker: "Manager", text: "Correct. If they don't approve it, we'll have to wait until Monday.", translation: "Correcto. Si no lo aprueban, tendremos que esperar hasta el lunes." },
          { speaker: "Employee", text: "As long as we meet the deadline, there won't be any problems?", translation: "¿Siempre que cumplamos con la fecha límite, no habrá problemas?" },
          { speaker: "Manager", text: "Exactly. In case something goes wrong, I'll take responsibility.", translation: "Exacto. En caso de que algo salga mal, yo asumiré la responsabilidad." },
          { speaker: "Employee", text: "If I have any questions, can I contact you directly?", translation: "Si tengo alguna pregunta, ¿puedo contactarte directamente?" },
          { speaker: "Manager", text: "Of course. If you email me, I'll respond within the hour.", translation: "Por supuesto. Si me envías un email, responderé dentro de la hora." }
        ],
        keyPhrases: [
          "If we finish on time, we'll...",
          "What if we need...?",
          "Unless we get..., we can't...",
          "As long as we meet...",
          "In case something goes wrong...",
          "If I have any questions..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación del primer condicional",
        sounds: [
          { sound: "Linking", word: "if I", tip: "Se conecta: /ɪfaɪ/", tipEs: "No pausa entre 'if' e 'I'" },
          { sound: "Contractions", word: "I'll", tip: "Siempre contrae 'will'", tipEs: "I'll, you'll, we'll - nunca 'I will' en habla normal" },
          { sound: "/ənˈles/", word: "unless", tip: "Acento en segunda sílaba", tipEs: "un-LESS, no UN-less" }
        ],
        minimalPairs: [
          { word1: "if", word2: "iff", explanation: "if /ɪf/ - 'iff' no existe pero algunos pronuncian mal 'if' con doble f" },
          { word1: "unless", word2: "until", explanation: "unless /ənˈles/ = a menos que; until /ənˈtɪl/ = hasta. Diferente consonante final." }
        ],
        intonation: [
          { pattern: "Falling for conditions", example: "If you agree, we'll proceed.↘", tip: "La cláusula de resultado baja al final", tipEs: "Indica que la oración está completa" }
        ],
        commonErrors: [
          { word: "if I", wrong: "/if-ai/", right: "/ɪfaɪ/ (conectado)", note: "Se enlaza naturalmente" },
          { word: "unless", wrong: "/UN-les/", right: "/ənˈles/", note: "Acento en 'less'" },
          { word: "in case", wrong: "/in-KEI-se/", right: "/ɪn keɪs/", note: "Acento en 'case'" }
        ]
      },
      culturalNote: {
        title: "Condicionales en negociaciones",
        titleEs: "Condicionales en negociaciones",
        content: "Las oraciones condicionales son esenciales en negociaciones de negocios. 'If you order 100 units, we'll give you a 10% discount' es típico en ventas. En contratos, verás muchas cláusulas con 'if' y 'unless'. En inglés de negocios, 'provided that' y 'on condition that' son versiones más formales de 'if'. Es importante notar que hacer ofertas condicionales ('If you do X, I'll do Y') es visto como justo y profesional en culturas anglosajonas.",
        contentEs: "'If you order 100, we'll give 10% discount' - típico en ventas. 'Provided that' = más formal que 'if'. Ofertas condicionales = profesional.",
        region: "General",
        examples: [
          "'If you sign today, we'll waive the setup fee'",
          "'Unless otherwise specified...' (en contratos)",
          "'Provided that all terms are met...'",
          "'On condition that payment is received...'",
          "'Subject to approval' = Si se aprueba"
        ]
      },
      consolidationQuiz: [
        {
          question: "En el primer condicional, la cláusula con 'if' usa:",
          options: ["will + verbo", "presente simple", "pasado simple", "would + verbo"],
          correctAnswer: 1,
          explanation: "La cláusula con 'if' usa presente simple: 'If I see...' no 'If I will see...'."
        },
        {
          question: "'Unless you study' significa:",
          options: ["Si estudias", "Porque estudias", "Si no estudias", "Cuando estudias"],
          correctAnswer: 2,
          explanation: "'Unless' = 'If...not'. 'Unless you study' = 'If you don't study'."
        },
        {
          question: "¿Cuál es correcta?",
          options: ["If I will see him, I tell him", "If I see him, I'll tell him", "If I see him, I tell him", "If I saw him, I will tell him"],
          correctAnswer: 1,
          explanation: "Presente simple + will: 'If I see him, I'll tell him'."
        },
        {
          question: "'Take an umbrella in case it ___':",
          options: ["will rain", "rains", "rained", "would rain"],
          correctAnswer: 1,
          explanation: "Después de 'in case' usa presente simple."
        },
        {
          question: "'As long as' significa:",
          options: ["porque", "aunque", "siempre que/con tal de que", "a pesar de que"],
          correctAnswer: 2,
          explanation: "'As long as' introduce una condición: 'siempre que', 'con tal de que'."
        },
        {
          question: "El primer condicional habla de situaciones:",
          options: ["imposibles", "imaginarias", "probables/posibles", "pasadas"],
          correctAnswer: 2,
          explanation: "El primer condicional habla de situaciones reales y posibles en el futuro."
        }
      ],
      guidedProduction: [
        {
          task: "Hacer promesas condicionales",
          prompt: "Escribe 5 promesas condicionales que harías a un amigo, jefe, o familiar.",
          sampleAnswer: "If you help me move, I'll buy you dinner. Unless I get stuck in traffic, I'll arrive on time. If you need anything, just call me and I'll be there. As long as you keep this secret, I'll tell you what happened. If I get the promotion, I'll take you out to celebrate.",
          hints: ["Usa 'if' para condiciones normales", "Prueba 'unless' para condiciones negativas", "Incluye 'as long as' para condiciones específicas"]
        },
        {
          task: "Describir consecuencias de decisiones",
          prompt: "Describe las consecuencias de diferentes decisiones usando el primer condicional.",
          sampleAnswer: "If I accept this job offer, I'll have to move to another city. My family will miss me if I leave. Unless I negotiate a higher salary, I won't be able to afford the rent there. As long as the company pays for relocation, I'll consider it. In case I don't like the new city, I'll have an exit plan ready.",
          hints: ["Muestra causa y efecto", "Usa diferentes conectores: if, unless, as long as, in case", "Haz las consecuencias realistas"]
        },
        {
          task: "Dar instrucciones condicionales",
          prompt: "Escribe instrucciones para un nuevo empleado usando oraciones condicionales.",
          sampleAnswer: "If you have any questions, please ask me or your team leader. Unless you get approval from the manager, don't make any purchases over $100. If you finish your tasks early, you can help your colleagues. In case the system crashes, call IT immediately. As long as you follow these guidelines, you'll do well here.",
          hints: ["Combina condiciones con instrucciones", "Usa imperativo en algunas: 'If you see X, call me'", "Incluye 'in case' para emergencias"]
        },
        {
          task: "Planificar un evento con condiciones",
          prompt: "Planifica una fiesta o evento considerando diferentes condiciones (clima, asistentes, etc.).",
          sampleAnswer: "We'll have the party in the garden if the weather is nice. Unless it rains, we won't need to rent a venue. If more than 50 people confirm, we'll need to order more food. In case some guests arrive late, I'll save some dessert for them. As long as everyone brings something, we'll have plenty of variety.",
          hints: ["Considera diferentes escenarios", "Usa 'in case' para preparación", "Muestra planes alternativos con 'if' y 'unless'"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste a expresar probabilidad. Ahora aprenderás a expresar consecuencias reales de condiciones probables.",
      connectionToNext: "En la siguiente lección aprenderás expresiones de frecuencia para describir con precisión qué tan seguido haces diferentes actividades."
    },
    {
      id: 4,
      title: "Expressing Frequency",
      titleEs: "Expresando Frecuencia",
      introduction: {
        title: "📊 Expresando Frecuencia",
        explanation: "Más allá de 'always' y 'never', hay muchas formas de expresar con qué frecuencia hacemos algo. Aprenderás expresiones precisas para hablar de hábitos y rutinas.",
        keyPoints: [
          "100%: always, every day, constantly",
          "90%: usually, normally, generally",
          "70%: often, frequently, regularly",
          "50%: sometimes, occasionally",
          "30%: rarely, seldom, hardly ever",
          "0%: never",
          "Expresiones específicas: twice a week, every other day, once in a while"
        ],
        examples: [
          { english: "I usually work from home on Fridays.", spanish: "Usualmente trabajo desde casa los viernes.", explanation: "Adverbio + presente simple" },
          { english: "We have meetings twice a week.", spanish: "Tenemos reuniones dos veces por semana.", explanation: "Expresión específica" },
          { english: "She hardly ever misses a deadline.", spanish: "Ella casi nunca pierde una fecha límite.", explanation: "Frecuencia muy baja" }
        ],
        tips: [
          "💡 Posición: después de 'be' pero antes de otros verbos: 'She is always late' vs 'She always arrives late'",
          "💡 'Every other' = cada dos: 'every other day' = cada dos días",
          "💡 'Once in a while' y 'from time to time' = de vez en cuando"
        ],
        whenToUse: [
          "Al describir hábitos: 'I usually work from home on Fridays'",
          "Para frecuencia específica: 'We have meetings twice a week'",
          "Para frecuencia muy baja: 'She hardly ever misses a deadline'",
          "Con expresiones como 'every other day', 'once in a while'"
        ],
        whenNotToUse: [
          "No pongas el adverbio entre verbos: 'She has always been' ✓ (no 'She always has been')",
          "No uses 'every day' con 'always' redundante: 'I always go' es suficiente (no 'I always go every day')"
        ]
      },
      objectives: ["Usar adverbios de frecuencia", "Expresar frecuencia específica", "Describir hábitos con precisión"],
      grammarTheoryIds: ["b1-used-to-would", "b1-quantifiers"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l5t4_n1", word: "routine", translation: "rutina", type: "noun", definition: "a regular way of doing things", definitionEs: "una forma regular de hacer las cosas", example: "I have a morning routine.", exampleEs: "Tengo una rutina matutina.", related: [], difficulty: 1 },
          { id: "l5t4_n2", word: "habit", translation: "hábito", type: "noun", definition: "something you do regularly", definitionEs: "algo que haces regularmente", example: "It's a bad habit.", exampleEs: "Es un mal hábito.", related: [], difficulty: 1 },
          { id: "l5t4_n3", word: "schedule", translation: "horario/agenda", type: "noun", definition: "a plan of activities", definitionEs: "un plan de actividades", example: "What's your schedule like?", exampleEs: "¿Cómo es tu horario?", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l5t4_v1", word: "tend to", translation: "tender a", type: "verb", definition: "to usually do something", definitionEs: "hacer algo usualmente", example: "I tend to wake up early.", exampleEs: "Tiendo a despertarme temprano.", related: [], difficulty: 2 },
          { id: "l5t4_v2", word: "avoid", translation: "evitar", type: "verb", definition: "to stay away from", definitionEs: "mantenerse alejado de", example: "I always avoid rush hour.", exampleEs: "Siempre evito la hora pico.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l5t4_a1", word: "regular", translation: "regular", type: "adjective", definition: "happening at fixed times", definitionEs: "sucediendo a tiempos fijos", example: "We have regular meetings.", exampleEs: "Tenemos reuniones regulares.", related: [], difficulty: 1 },
          { id: "l5t4_a2", word: "occasional", translation: "ocasional", type: "adjective", definition: "happening sometimes", definitionEs: "sucediendo a veces", example: "I make occasional mistakes.", exampleEs: "Cometo errores ocasionales.", related: ["occasionally"], difficulty: 1 },
          { id: "l5t4_a3", word: "constant", translation: "constante", type: "adjective", definition: "happening all the time", definitionEs: "sucediendo todo el tiempo", example: "There's constant noise.", exampleEs: "Hay ruido constante.", related: ["constantly"], difficulty: 1 },
        ],
        expressions: [
          { id: "l5t4_e1", word: "once/twice/three times a week", translation: "una/dos/tres veces por semana", type: "expression", definition: "specific frequency", definitionEs: "frecuencia específica", example: "I exercise twice a week.", exampleEs: "Hago ejercicio dos veces por semana.", related: [], difficulty: 1 },
          { id: "l5t4_e2", word: "every other day", translation: "cada dos días", type: "expression", definition: "alternating days", definitionEs: "días alternos", example: "I go running every other day.", exampleEs: "Salgo a correr cada dos días.", related: [], difficulty: 1 },
          { id: "l5t4_e3", word: "from time to time", translation: "de vez en cuando", type: "expression", definition: "occasionally", definitionEs: "ocasionalmente", example: "I see them from time to time.", exampleEs: "Los veo de vez en cuando.", related: [], difficulty: 1 },
          { id: "l5t4_e4", word: "once in a while", translation: "de vez en cuando", type: "expression", definition: "sometimes", definitionEs: "a veces", example: "Once in a while I eat pizza.", exampleEs: "De vez en cuando como pizza.", related: [], difficulty: 1 },
          { id: "l5t4_e5", word: "most of the time", translation: "la mayor parte del tiempo", type: "expression", definition: "usually", definitionEs: "usualmente", example: "Most of the time I work from home.", exampleEs: "La mayor parte del tiempo trabajo desde casa.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l5t4_adv1", word: "usually", translation: "usualmente", type: "adverb", definition: "most of the time", definitionEs: "la mayoría del tiempo", example: "I usually take the bus.", exampleEs: "Usualmente tomo el autobús.", related: [], difficulty: 1 },
          { id: "l5t4_adv2", word: "often", translation: "a menudo", type: "adverb", definition: "many times", definitionEs: "muchas veces", example: "I often forget my keys.", exampleEs: "A menudo olvido mis llaves.", related: ["frequently"], difficulty: 1 },
          { id: "l5t4_adv3", word: "rarely", translation: "raramente", type: "adverb", definition: "not often", definitionEs: "no frecuentemente", example: "She rarely eats meat.", exampleEs: "Ella raramente come carne.", related: ["seldom"], difficulty: 1 },
          { id: "l5t4_adv4", word: "hardly ever", translation: "casi nunca", type: "adverb", definition: "almost never", definitionEs: "casi nunca", example: "He hardly ever calls.", exampleEs: "Él casi nunca llama.", related: [], difficulty: 1 },
          { id: "l5t4_adv5", word: "constantly", translation: "constantemente", type: "adverb", definition: "all the time", definitionEs: "todo el tiempo", example: "She's constantly on her phone.", exampleEs: "Ella está constantemente en su teléfono.", related: [], difficulty: 1 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l5t4_cm1",
          wrong: "I go always to the gym.",
          correct: "I always go to the gym.",
          explanation: "Frequency adverbs go BEFORE the main verb: 'always go', not 'go always'.",
          explanationEs: "Los adverbios de frecuencia van ANTES del verbo principal: 'always go', no 'go always'.",
          category: "grammar"
        },
        {
          id: "l5t4_cm2",
          wrong: "She is usually late. / She usually is late.",
          correct: "She is usually late.",
          explanation: "With 'be', the adverb goes AFTER: 'is usually', 'am always', 'are often'.",
          explanationEs: "Con 'be', el adverbio va DESPUÉS: 'is usually', 'am always', 'are often'.",
          category: "grammar"
        },
        {
          id: "l5t4_cm3",
          wrong: "I go to gym three times in the week.",
          correct: "I go to the gym three times a week.",
          explanation: "Use 'a week', 'a month', 'a year' (not 'in the week').",
          explanationEs: "Usa 'a week', 'a month', 'a year' (no 'in the week').",
          category: "grammar"
        },
        {
          id: "l5t4_cm4",
          wrong: "I don't never eat meat.",
          correct: "I never eat meat. / I don't ever eat meat.",
          explanation: "Double negative is incorrect. 'Never' is already negative, don't use 'don't'.",
          explanationEs: "Doble negativo es incorrecto. 'Never' ya es negativo, no uses 'don't'.",
          category: "grammar"
        },
        {
          id: "l5t4_cm5",
          wrong: "He calls me every days.",
          correct: "He calls me every day.",
          explanation: "'Every' goes with singular: 'every day', 'every week', not 'every days'.",
          explanationEs: "'Every' va con singular: 'every day', 'every week', no 'every days'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Coloca el adverbio de frecuencia en la posición correcta:",
          items: [
            { sentence: "I ___ take ___ the bus to work. (usually)", answer: "usually take", hint: "antes del verbo principal" },
            { sentence: "She ___ is ___ late for meetings. (rarely)", answer: "is rarely", hint: "después de 'be'" },
            { sentence: "They ___ go ___ to the cinema. (hardly ever)", answer: "hardly ever go", hint: "antes del verbo" },
            { sentence: "We ___ have ___ meetings on Fridays. (always)", answer: "always have", hint: "antes del verbo" },
            { sentence: "He ___ is ___ on time. (never)", answer: "is never", hint: "después de 'be'" }
          ]
        },
        {
          type: "categorize",
          instruction: "Ordena de mayor a menor frecuencia:",
          categories: [
            { name: "100%", items: ["always", "constantly", "every day"] },
            { name: "90%", items: ["usually", "normally", "generally"] },
            { name: "70%", items: ["often", "frequently", "regularly"] },
            { name: "50%", items: ["sometimes", "occasionally", "from time to time"] },
            { name: "20%", items: ["rarely", "seldom", "hardly ever"] },
            { name: "0%", items: ["never"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Reescribe usando la expresión entre paréntesis:",
          items: [
            { original: "I exercise every day. (three times a week)", transformed: "I exercise three times a week." },
            { original: "She sometimes works from home. (every other day)", transformed: "She works from home every other day." },
            { original: "We never go out during the week. (once in a while)", transformed: "We go out once in a while during the week." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con expresiones de frecuencia específica:",
          items: [
            { sentence: "I go to the dentist ___ a year.", answer: "twice", hint: "2 veces" },
            { sentence: "We have team meetings ___ Monday.", answer: "every", hint: "cada" },
            { sentence: "She exercises every ___ day.", answer: "other", hint: "alterno = cada 2" },
            { sentence: "I see my grandparents from time ___ time.", answer: "to", hint: "de vez en cuando" },
            { sentence: "___ of the time, I work from home.", answer: "Most", hint: "la mayor parte" }
          ]
        }
      ],
      modelDialogue: {
        title: "Describiendo rutinas de trabajo",
        dialogue: [
          { speaker: "HR", text: "Can you tell me about your typical work routine?", translation: "¿Puedes contarme sobre tu rutina de trabajo típica?" },
          { speaker: "Employee", text: "Sure. I usually arrive at 8:30. I'm rarely late.", translation: "Claro. Usualmente llego a las 8:30. Raramente llego tarde." },
          { speaker: "HR", text: "How often do you work from home?", translation: "¿Con qué frecuencia trabajas desde casa?" },
          { speaker: "Employee", text: "I work from home twice a week, usually on Mondays and Fridays.", translation: "Trabajo desde casa dos veces por semana, usualmente los lunes y viernes." },
          { speaker: "HR", text: "And meetings?", translation: "¿Y las reuniones?" },
          { speaker: "Employee", text: "We have team meetings every Monday. I occasionally have client calls, maybe once or twice a month.", translation: "Tenemos reuniones de equipo cada lunes. Ocasionalmente tengo llamadas con clientes, quizás una o dos veces al mes." },
          { speaker: "HR", text: "Do you ever work overtime?", translation: "¿Alguna vez trabajas horas extra?" },
          { speaker: "Employee", text: "Hardly ever. Most of the time I finish by 6. From time to time, if there's a deadline, I might stay an extra hour.", translation: "Casi nunca. La mayor parte del tiempo termino a las 6. De vez en cuando, si hay una fecha límite, podría quedarme una hora extra." },
          { speaker: "HR", text: "That sounds like a good balance.", translation: "Eso suena como un buen equilibrio." }
        ],
        keyPhrases: [
          "I usually arrive at...",
          "I'm rarely late",
          "Twice a week",
          "Every Monday",
          "Once or twice a month",
          "Hardly ever",
          "Most of the time",
          "From time to time"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de adverbios de frecuencia",
        sounds: [
          { sound: "/ˈjuːʒuəli/", word: "usually", tip: "Sonido 'zh' como en 'measure'", tipEs: "No digas 'u-su-al-li'" },
          { sound: "/ˈreəli/", word: "rarely", tip: "No confundir con 'really'", tipEs: "rarely = raramente; really = realmente" },
          { sound: "UK vs US", word: "schedule", tip: "UK: SHED-yool, US: SKED-jool", tipEs: "Pronunciación muy diferente" }
        ],
        minimalPairs: [
          { word1: "usually", word2: "casually", explanation: "usually /ˈjuːʒuəli/ vs casually /ˈkæʒuəli/ - inicio diferente" },
          { word1: "rarely", word2: "really", explanation: "rarely /ˈreəli/ vs really /ˈrɪəli/ - vocal diferente, cuidado" }
        ],
        intonation: [
          { pattern: "Level tone for habits", example: "I usually work from home.→", tip: "Descripciones de hábitos mantienen tono estable", tipEs: "No subas ni bajes mucho" }
        ],
        commonErrors: [
          { word: "usually", wrong: "/u-su-al-li/", right: "/ˈjuːʒuəli/", note: "Con sonido 'zh', no 's'" },
          { word: "often", wrong: "/OF-ten/", right: "/ˈɒfn/ o /ˈɒftən/", note: "La 't' puede ser muda" },
          { word: "schedule", wrong: "/es-ke-diul/", right: "UK: /ˈʃedjuːl/ US: /ˈskedʒuːl/", note: "Diferente en UK vs US" }
        ]
      },
      culturalNote: {
        title: "Expresando frecuencia en conversaciones",
        titleEs: "Expresando frecuencia en conversaciones",
        content: "En inglés, ser preciso sobre la frecuencia es importante, especialmente en contextos profesionales. 'I'll get back to you soon' es vago - mejor decir 'I'll get back to you by Friday'. En entrevistas de trabajo, te preguntarán 'How often do you...?' sobre habilidades. Las diferencias culturales también existen: los estadounidenses pueden decir 'Let's do lunch sometime' sin intención real, mientras en otras culturas esto sería una invitación seria. 'Once in a blue moon' es un modismo que significa 'muy raramente'.",
        contentEs: "Sé preciso: 'by Friday' mejor que 'soon'. 'Let's do lunch sometime' (US) puede no ser invitación real. 'Once in a blue moon' = muy raramente.",
        region: "General",
        examples: [
          "'Once in a blue moon' - muy raramente",
          "'24/7' - 24 horas al día, 7 días a la semana (pronunciado 'twenty-four seven')",
          "'On a regular basis' - regularmente",
          "'Day in, day out' - todos los días sin excepción",
          "'Every now and then' - de vez en cuando"
        ]
      },
      consolidationQuiz: [
        {
          question: "La posición correcta de 'always' es:",
          options: ["Siempre al final", "Antes del verbo principal", "Siempre al inicio", "Después del objeto"],
          correctAnswer: 1,
          explanation: "Los adverbios de frecuencia van antes del verbo principal: 'I always work'."
        },
        {
          question: "Con el verbo 'be', los adverbios van:",
          options: ["Antes de 'be'", "Después de 'be'", "Al final", "Ambos correctos"],
          correctAnswer: 1,
          explanation: "Con 'be': 'She IS usually late', no 'She usually is late'."
        },
        {
          question: "'Hardly ever' significa:",
          options: ["muy frecuentemente", "a veces", "casi nunca", "siempre"],
          correctAnswer: 2,
          explanation: "'Hardly ever' = casi nunca, frecuencia muy baja (~5%)."
        },
        {
          question: "'Every other day' significa:",
          options: ["todos los días", "cada dos días", "otro día", "día por medio"],
          correctAnswer: 1,
          explanation: "'Every other day' = cada dos días (lunes, miércoles, viernes...)."
        },
        {
          question: "La forma correcta es:",
          options: ["three times in the week", "three times a week", "three times the week", "three time a week"],
          correctAnswer: 1,
          explanation: "Usa 'a week/month/year': 'three times a week'."
        },
        {
          question: "'Most of the time' indica frecuencia de aproximadamente:",
          options: ["30%", "50%", "80%", "100%"],
          correctAnswer: 2,
          explanation: "'Most of the time' indica alta frecuencia, alrededor del 80%."
        }
      ],
      guidedProduction: [
        {
          task: "Describir tu rutina semanal",
          prompt: "Describe tu semana típica usando diferentes expresiones de frecuencia.",
          sampleAnswer: "I usually wake up at 7 AM every day. I always have coffee before leaving home. I go to the gym three times a week, usually on Monday, Wednesday, and Friday. I rarely eat breakfast - I'm not hungry in the morning. I often work late on Tuesdays. From time to time, I meet friends for dinner. I hardly ever watch TV during the week.",
          hints: ["Usa variedad de expresiones: always, usually, often, sometimes, rarely, never", "Incluye expresiones específicas: twice a week, every other day", "Varía la posición de los adverbios"]
        },
        {
          task: "Comparar hábitos pasados y presentes",
          prompt: "Compara con qué frecuencia hacías ciertas cosas antes vs ahora.",
          sampleAnswer: "When I was in university, I rarely exercised. Now I work out three times a week. I used to go out every weekend, but now I only go out once in a while. Before, I hardly ever cooked - I always ate out. Now I usually cook at home. I used to constantly check social media, but now I only do it occasionally.",
          hints: ["Usa 'used to' para hábitos pasados", "Contrasta con frecuencia actual", "Muestra cambios de frecuencia"]
        },
        {
          task: "Describir hábitos de trabajo",
          prompt: "Describe tus hábitos de trabajo como si estuvieras en una entrevista.",
          sampleAnswer: "I'm always punctual - I'm rarely late to meetings. I usually arrive 15 minutes early to prepare. I check my emails three times a day to stay organized. I often take short breaks to maintain productivity. Every Monday, I plan my week in advance. I occasionally work overtime when there's an important deadline, but I try to maintain work-life balance.",
          hints: ["Sé específico sobre tiempos", "Usa adverbios para mostrar consistencia", "Incluye expresiones profesionales"]
        },
        {
          task: "Preguntar sobre hábitos de otros",
          prompt: "Escribe 6 preguntas usando 'How often...?' y otras expresiones de frecuencia.",
          sampleAnswer: "How often do you exercise? Do you usually eat breakfast? How many times a week do you work from home? Are you ever late to meetings? Do you regularly take vacations? How often do you see your family?",
          hints: ["Usa 'How often...?' para preguntas generales", "Usa 'Do you usually/ever/regularly...?'", "Incluye 'How many times a week/month...?'"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste condicionales para resultados futuros. Ahora aprenderás a describir hábitos y rutinas con precisión.",
      connectionToNext: "En la siguiente lección aprenderás a escribir emails profesionales, donde las expresiones de frecuencia son útiles para describir procesos y rutinas."
    },
    {
      id: 5,
      title: "Email Writing at Work",
      titleEs: "Escribiendo Emails en el Trabajo",
      introduction: {
        title: "📧 Escribiendo Emails en el Trabajo",
        explanation: "Los emails profesionales tienen una estructura y tono específicos. Aprenderás a escribir emails claros, educados y efectivos en inglés.",
        keyPoints: [
          "Saludo: 'Dear Mr./Ms. + apellido' (formal), 'Hi/Hello + nombre' (informal)",
          "Razón del email: 'I am writing to...', 'I would like to inquire about...'",
          "Solicitar acción: 'Could you please...?', 'I would appreciate it if...'",
          "Cierre: 'Best regards', 'Kind regards', 'Sincerely' (formal)"
        ],
        examples: [
          { english: "I am writing to follow up on our meeting.", spanish: "Escribo para dar seguimiento a nuestra reunión.", explanation: "Inicio formal" },
          { english: "Please find attached the document you requested.", spanish: "Por favor encuentre adjunto el documento que solicitó.", explanation: "Enviando archivos" },
          { english: "I would appreciate a prompt response.", spanish: "Agradecería una respuesta pronta.", explanation: "Solicitando respuesta" }
        ],
        tips: [
          "💡 'Please find attached' es más formal que 'I'm attaching'",
          "💡 Evita 'ASAP' en emails formales; usa 'at your earliest convenience'",
          "💡 'Looking forward to hearing from you' es un cierre muy usado"
        ],
        whenToUse: [
          "Al iniciar emails formales: 'I am writing to...', 'I would like to inquire about...'",
          "Al solicitar acción: 'Could you please...?', 'I would appreciate it if...'",
          "Al enviar archivos: 'Please find attached the document you requested'",
          "En cierres profesionales: 'Best regards', 'Kind regards', 'Sincerely'"
        ],
        whenNotToUse: [
          "No uses 'ASAP' en emails formales → 'at your earliest convenience'",
          "No uses 'Hi' con apellido en emails muy formales → 'Dear Mr./Ms. + apellido'"
        ]
      },
      objectives: ["Estructurar emails profesionales", "Usar lenguaje formal apropiado", "Hacer solicitudes educadamente"],
      grammarTheoryIds: ["b1-gerund-vs-infinitive", "b1-passive-voice"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l5t5_n1", word: "attachment", translation: "archivo adjunto", type: "noun", definition: "a file sent with an email", definitionEs: "un archivo enviado con un email", example: "Please see the attachment.", exampleEs: "Por favor vea el adjunto.", related: ["attach"], difficulty: 1 },
          { id: "l5t5_n2", word: "recipient", translation: "destinatario", type: "noun", definition: "the person receiving the email", definitionEs: "la persona que recibe el email", example: "Add the recipients.", exampleEs: "Añade los destinatarios.", related: [], difficulty: 2 },
          { id: "l5t5_n3", word: "subject line", translation: "línea de asunto", type: "noun", definition: "the title of an email", definitionEs: "el título de un email", example: "Write a clear subject line.", exampleEs: "Escribe una línea de asunto clara.", related: [], difficulty: 1 },
          { id: "l5t5_n4", word: "inquiry", translation: "consulta", type: "noun", definition: "a question or request for information", definitionEs: "una pregunta o solicitud de información", example: "Thank you for your inquiry.", exampleEs: "Gracias por su consulta.", related: ["inquire"], difficulty: 2 },
          { id: "l5t5_n5", word: "response", translation: "respuesta", type: "noun", definition: "a reply to something", definitionEs: "una réplica a algo", example: "I await your response.", exampleEs: "Espero su respuesta.", related: ["respond"], difficulty: 1 },
        ],
        verbs: [
          { id: "l5t5_v1", word: "attach", translation: "adjuntar", type: "verb", definition: "to add a file to an email", definitionEs: "añadir un archivo a un email", example: "I've attached the report.", exampleEs: "He adjuntado el reporte.", related: ["attachment"], difficulty: 1 },
          { id: "l5t5_v2", word: "inquire", translation: "consultar/preguntar", type: "verb", definition: "to ask for information", definitionEs: "pedir información", example: "I'm writing to inquire about...", exampleEs: "Escribo para consultar sobre...", related: ["inquiry"], difficulty: 2 },
          { id: "l5t5_v3", word: "forward", translation: "reenviar", type: "verb", definition: "to send an email to another person", definitionEs: "enviar un email a otra persona", example: "I'll forward this to you.", exampleEs: "Te reenviaré esto.", related: [], difficulty: 1 },
          { id: "l5t5_v4", word: "cc (carbon copy)", translation: "enviar copia", type: "verb", definition: "to send a copy to someone", definitionEs: "enviar una copia a alguien", example: "Please cc me on the email.", exampleEs: "Por favor envíame copia del email.", related: [], difficulty: 1 },
          { id: "l5t5_v5", word: "confirm", translation: "confirmar", type: "verb", definition: "to verify something", definitionEs: "verificar algo", example: "Could you confirm the meeting time?", exampleEs: "¿Podría confirmar la hora de la reunión?", related: ["confirmation"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l5t5_a1", word: "urgent", translation: "urgente", type: "adjective", definition: "needing immediate attention", definitionEs: "que necesita atención inmediata", example: "This is an urgent matter.", exampleEs: "Este es un asunto urgente.", related: [], difficulty: 1 },
          { id: "l5t5_a2", word: "prompt", translation: "pronto/rápido", type: "adjective", definition: "quick, without delay", definitionEs: "rápido, sin demora", example: "Thank you for your prompt reply.", exampleEs: "Gracias por su pronta respuesta.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l5t5_e1", word: "I am writing to...", translation: "Escribo para...", type: "expression", definition: "starting an email", definitionEs: "comenzando un email", example: "I am writing to request information.", exampleEs: "Escribo para solicitar información.", related: [], difficulty: 1 },
          { id: "l5t5_e2", word: "Please find attached...", translation: "Por favor encuentre adjunto...", type: "expression", definition: "mentioning an attachment", definitionEs: "mencionando un adjunto", example: "Please find attached the report.", exampleEs: "Por favor encuentre adjunto el reporte.", related: [], difficulty: 1 },
          { id: "l5t5_e3", word: "I would appreciate it if...", translation: "Agradecería si...", type: "expression", definition: "polite request", definitionEs: "solicitud educada", example: "I would appreciate it if you could help.", exampleEs: "Agradecería si pudiera ayudar.", related: [], difficulty: 2 },
          { id: "l5t5_e4", word: "Looking forward to hearing from you", translation: "Quedo a la espera de su respuesta", type: "expression", definition: "closing an email", definitionEs: "cerrando un email", example: "Looking forward to hearing from you soon.", exampleEs: "Quedo a la espera de su pronta respuesta.", related: [], difficulty: 1 },
          { id: "l5t5_e5", word: "Best regards", translation: "Saludos cordiales", type: "expression", definition: "email sign-off", definitionEs: "despedida de email", example: "Best regards, John Smith", exampleEs: "Saludos cordiales, John Smith", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l5t5_cm1",
          wrong: "Dear Mr. John",
          correct: "Dear Mr. Smith / Dear John",
          explanation: "With 'Mr./Ms.' use the LAST name, not the first name. Or use just the first name without title.",
          explanationEs: "Con 'Mr./Ms.' usa el APELLIDO, no el nombre. O usa solo el nombre sin título.",
          category: "usage"
        },
        {
          id: "l5t5_cm2",
          wrong: "I am writing you for ask about...",
          correct: "I am writing to ask about... / I am writing to you to ask about...",
          explanation: "Use 'writing TO ask' (infinitive) or 'writing TO you' if you want to include the recipient.",
          explanationEs: "Usa 'writing TO ask' (infinitivo) o 'writing TO you' si quieres incluir el destinatario.",
          category: "grammar"
        },
        {
          id: "l5t5_cm3",
          wrong: "Please find the attached document.",
          correct: "Please find attached the document. / Please find the document attached.",
          explanation: "'Attached' can go before or after the noun, but 'the attached' sounds less natural.",
          explanationEs: "'Attached' puede ir antes o después del sustantivo, pero 'the attached' suena menos natural.",
          category: "usage"
        },
        {
          id: "l5t5_cm4",
          wrong: "I look forward to hear from you.",
          correct: "I look forward to hearing from you.",
          explanation: "'Look forward TO' is followed by gerund (-ing): 'to hearing', not 'to hear'.",
          explanationEs: "'Look forward TO' va seguido de gerundio (-ing): 'to hearing', no 'to hear'.",
          category: "grammar"
        },
        {
          id: "l5t5_cm5",
          wrong: "Thanks you for your email.",
          correct: "Thank you for your email.",
          explanation: "'Thank you', not 'thanks you'. 'Thanks' is informal and stands alone.",
          explanationEs: "'Thank you', no 'thanks you'. 'Thanks' es informal y va solo.",
          category: "vocabulary"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las frases de email:",
          items: [
            { sentence: "I am ___ to inquire about your services.", answer: "writing", hint: "verbo de escribir" },
            { sentence: "Please find ___ the document you requested.", answer: "attached", hint: "adjunto" },
            { sentence: "I would ___ it if you could reply by Friday.", answer: "appreciate", hint: "agradecer" },
            { sentence: "I look forward ___ hearing from you.", answer: "to", hint: "preposición" },
            { sentence: "Could you please ___ me on the email?", answer: "cc", hint: "copiar" }
          ]
        },
        {
          type: "matching",
          instruction: "Une cada situación con la frase apropiada:",
          pairs: [
            { term: "Comenzar email formal", match: "I am writing to..." },
            { term: "Adjuntar un archivo", match: "Please find attached..." },
            { term: "Pedir algo educadamente", match: "I would appreciate it if..." },
            { term: "Cerrar esperando respuesta", match: "Looking forward to hearing from you" },
            { term: "Despedida semi-formal", match: "Best regards" },
            { term: "Agradecer por contactar", match: "Thank you for your inquiry" }
          ]
        },
        {
          type: "transformation",
          instruction: "Haz estas frases más formales:",
          items: [
            { original: "Can you send me the report?", transformed: "Could you please send me the report?" },
            { original: "I want to know about your prices.", transformed: "I would like to inquire about your prices." },
            { original: "Get back to me soon.", transformed: "I would appreciate a prompt response." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa el email con las palabras correctas:",
          items: [
            { sentence: "Dear ___ Johnson, (formal, mujer)", answer: "Ms.", hint: "título femenino" },
            { sentence: "Thank you for your ___ email. (anterior)", answer: "previous", hint: "email de antes" },
            { sentence: "I am writing to ___ up on our meeting. (dar seguimiento)", answer: "follow", hint: "phrasal verb" },
            { sentence: "Please let me know at your earliest ___.", answer: "convenience", hint: "cuando pueda" },
            { sentence: "___ regards, (despedida)", answer: "Best/Kind", hint: "cordiales" }
          ]
        }
      ],
      modelDialogue: {
        title: "Ejemplo de email profesional",
        dialogue: [
          { speaker: "Subject", text: "Follow-up: Project Proposal Meeting", translation: "Asunto: Seguimiento: Reunión de Propuesta de Proyecto" },
          { speaker: "Saludo", text: "Dear Ms. Thompson,", translation: "Estimada Sra. Thompson," },
          { speaker: "Introducción", text: "I am writing to follow up on our meeting yesterday regarding the new project proposal.", translation: "Escribo para dar seguimiento a nuestra reunión de ayer sobre la nueva propuesta de proyecto." },
          { speaker: "Cuerpo 1", text: "Please find attached the revised budget document as discussed.", translation: "Por favor encuentre adjunto el documento de presupuesto revisado como se discutió." },
          { speaker: "Cuerpo 2", text: "I would appreciate it if you could review it and share any feedback by Friday.", translation: "Agradecería si pudiera revisarlo y compartir cualquier comentario para el viernes." },
          { speaker: "Cuerpo 3", text: "If you have any questions, please don't hesitate to contact me.", translation: "Si tiene alguna pregunta, por favor no dude en contactarme." },
          { speaker: "Cierre", text: "Looking forward to hearing from you.", translation: "Quedo a la espera de su respuesta." },
          { speaker: "Despedida", text: "Best regards,\nJohn Smith\nProject Manager", translation: "Saludos cordiales,\nJohn Smith\nGerente de Proyecto" }
        ],
        keyPhrases: [
          "I am writing to follow up on...",
          "Please find attached...",
          "As discussed...",
          "I would appreciate it if you could...",
          "Please don't hesitate to contact me",
          "Looking forward to hearing from you"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario de emails",
        sounds: [
          { sound: "/ɪnˈkwaɪəri/", word: "inquiry", tip: "Acento en segunda sílaba", tipEs: "in-QUI-ry, como 'quiet'" },
          { sound: "/rɪˈsɪpiənt/", word: "recipient", tip: "Acento en segunda sílaba", tipEs: "re-CI-pient" },
          { sound: "/əˈpriːʃieɪt/", word: "appreciate", tip: "Acento en segunda sílaba", tipEs: "ap-PRE-ciate" }
        ],
        minimalPairs: [
          { word1: "attach", word2: "attack", explanation: "attach /əˈtætʃ/ = adjuntar; attack /əˈtæk/ = atacar. /tʃ/ vs /k/ final" },
          { word1: "forward", word2: "forwards", explanation: "forward /ˈfɔːwəd/ - adverbio; forwards es variante británica" }
        ],
        intonation: [
          { pattern: "Polite closing", example: "Looking forward to hearing from you.↘", tip: "Cierres formales bajan suavemente", tipEs: "Indica que el mensaje termina" }
        ],
        commonErrors: [
          { word: "inquiry", wrong: "/in-KWI-ri/", right: "/ɪnˈkwaɪəri/", note: "Acento en segunda sílaba, 'quai' como en 'quiet'" },
          { word: "recipient", wrong: "/RE-si-pient/", right: "/rɪˈsɪpiənt/", note: "Acento en segunda sílaba" },
          { word: "appreciate", wrong: "/a-pre-SI-ate/", right: "/əˈpriːʃieɪt/", note: "Acento en segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "Etiqueta de email en el mundo anglosajón",
        titleEs: "Etiqueta de email en el mundo anglosajón",
        content: "Los emails en inglés tienen convenciones importantes. Los estadounidenses tienden a ser más informales ('Hi John') que los británicos ('Dear Mr. Smith'). 'ASAP' puede sonar brusco - mejor usar 'at your earliest convenience'. Evita usar mayúsculas (SE INTERPRETA COMO GRITAR). Los emojis son aceptables en emails muy informales pero nunca en correspondencia formal. 'Best' solo es aceptable después de conocer a alguien; para primeros contactos, usa 'Best regards' o 'Kind regards'.",
        contentEs: "US: 'Hi John' más informal. UK: 'Dear Mr. Smith'. Evita ASAP - usa 'at your earliest convenience'. Mayúsculas = gritar.",
        region: "General",
        examples: [
          "'Per my last email...' - puede sonar pasivo-agresivo",
          "'Just following up...' - recordatorio educado",
          "'Circle back' - retomar un tema después",
          "'Loop someone in' - incluir a alguien en la conversación",
          "'FYI' - For Your Information, solo informativo, no requiere acción"
        ]
      },
      consolidationQuiz: [
        {
          question: "El saludo formal correcto para una mujer es:",
          options: ["Dear Mrs. Sarah", "Dear Ms. Smith", "Dear Miss Sarah Smith", "Hi Ms. Sarah"],
          correctAnswer: 1,
          explanation: "Con título (Ms./Mrs./Mr.) usa solo el apellido: 'Dear Ms. Smith'."
        },
        {
          question: "'I look forward ___' se completa con:",
          options: ["to hear", "hearing", "to hearing", "hear"],
          correctAnswer: 2,
          explanation: "'Look forward TO' + gerundio: 'look forward to hearing'."
        },
        {
          question: "'Please find attached' se usa para:",
          options: ["pedir un archivo", "indicar que hay un adjunto", "buscar algo", "cerrar el email"],
          correctAnswer: 1,
          explanation: "'Please find attached' indica que hay un archivo adjunto en el email."
        },
        {
          question: "¿Cuál es más formal?",
          options: ["Can you send it?", "Send it please", "Could you please send it?", "Send it"],
          correctAnswer: 2,
          explanation: "'Could you please...' es la forma más formal y educada de hacer una petición."
        },
        {
          question: "'At your earliest convenience' significa:",
          options: ["ahora mismo", "cuando pueda/le sea posible", "esta semana", "urgente"],
          correctAnswer: 1,
          explanation: "Es una forma educada de decir 'cuando le sea posible/conveniente'."
        },
        {
          question: "La despedida 'Best' es apropiada:",
          options: ["siempre", "nunca", "después de establecer relación", "solo con amigos"],
          correctAnswer: 2,
          explanation: "'Best' solo es apropiado después de conocer a la persona. Para primeros contactos, usa 'Best regards'."
        }
      ],
      guidedProduction: [
        {
          task: "Escribir email de consulta",
          prompt: "Escribe un email a una empresa preguntando sobre sus servicios.",
          sampleAnswer: "Subject: Inquiry about your consulting services\n\nDear Sir/Madam,\n\nI am writing to inquire about your business consulting services. I found your company through a colleague's recommendation.\n\nI would appreciate it if you could send me information about your pricing and availability. Specifically, I am interested in your marketing strategy services.\n\nPlease find attached our company profile for your reference.\n\nI look forward to hearing from you at your earliest convenience.\n\nBest regards,\n[Your name]",
          hints: ["Incluye línea de asunto clara", "Usa 'I am writing to...' para comenzar", "Termina con 'Looking forward to hearing from you'"]
        },
        {
          task: "Escribir email de seguimiento",
          prompt: "Escribe un email de seguimiento después de una reunión.",
          sampleAnswer: "Subject: Follow-up: Meeting on March 15th\n\nDear Ms. Johnson,\n\nThank you for taking the time to meet with me yesterday. I really enjoyed our discussion about the new project.\n\nAs discussed, please find attached the detailed proposal and timeline. I have also included the budget breakdown.\n\nI would appreciate it if you could review the documents and share your feedback by next Tuesday. If you have any questions, please don't hesitate to contact me.\n\nLooking forward to hearing from you.\n\nBest regards,\n[Your name]",
          hints: ["Agradece por la reunión", "Menciona 'as discussed' para los puntos acordados", "Incluye fecha límite para respuesta"]
        },
        {
          task: "Responder a una solicitud",
          prompt: "Responde a un cliente que pidió información sobre tu producto/servicio.",
          sampleAnswer: "Subject: Re: Product Information Request\n\nDear Mr. Brown,\n\nThank you for your inquiry about our software solutions.\n\nI am pleased to provide you with the information you requested. Please find attached our product catalog and pricing guide.\n\nOur standard package includes 24/7 support and free updates for one year. If you require a customized solution, I would be happy to schedule a call to discuss your specific needs.\n\nPlease let me know if you have any questions.\n\nBest regards,\n[Your name]",
          hints: ["Agradece la consulta", "Proporciona la información solicitada", "Ofrece más ayuda"]
        },
        {
          task: "Solicitar una reunión",
          prompt: "Escribe un email solicitando una reunión con un potencial cliente o socio.",
          sampleAnswer: "Subject: Meeting Request - Partnership Opportunity\n\nDear Ms. Lee,\n\nI am writing to request a meeting to discuss a potential partnership between our companies.\n\nI believe our services would complement yours, and I would appreciate the opportunity to explore collaboration possibilities.\n\nWould you be available for a 30-minute call next week? I am flexible with my schedule and can adjust to your availability.\n\nI look forward to your response.\n\nKind regards,\n[Your name]",
          hints: ["Sé claro sobre el propósito de la reunión", "Propón tiempo pero muestra flexibilidad", "Mantén el email breve y directo"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste expresiones de frecuencia, útiles para describir procesos en emails. Ahora aprenderás la estructura completa de emails profesionales.",
      connectionToNext: "En la siguiente lección aprenderás el presente perfecto para hablar de experiencias, muy útil en emails profesionales como 'I have attached...' o 'We have received...'."
    },
    {
      id: 6,
      title: "Present Perfect for Experience",
      titleEs: "Presente Perfecto para Experiencia",
      introduction: {
        title: "✅ Presente Perfecto para Experiencia",
        explanation: "El presente perfecto conecta el pasado con el presente. Se usa para hablar de experiencias de vida sin especificar cuándo ocurrieron.",
        keyPoints: [
          "Estructura: have/has + participio pasado",
          "Para experiencia: 'I have visited Paris' (en algún momento de mi vida)",
          "Preguntas: 'Have you ever...?' - '¿Alguna vez has...?'",
          "Respuestas: 'Yes, I have' / 'No, I haven't' / 'No, never'",
          "Palabras clave: ever, never, before, already, yet"
        ],
        examples: [
          { english: "Have you ever tried sushi?", spanish: "¿Alguna vez has probado sushi?", explanation: "Preguntando sobre experiencia" },
          { english: "I've been to Japan twice.", spanish: "He estado en Japón dos veces.", explanation: "Indicando número de veces" },
          { english: "She has never driven a car.", spanish: "Ella nunca ha manejado un carro.", explanation: "Experiencia negativa" }
        ],
        tips: [
          "💡 'Been to' = visitó y regresó: 'I've been to London' (ya no estoy ahí)",
          "💡 'Gone to' = fue y todavía está: 'He's gone to London' (está ahí ahora)",
          "💡 Usa pasado simple si especificas CUÁNDO: 'I went to Paris in 2020' NO 'I have gone'"
        ],
        whenToUse: [
          "Para experiencias de vida: 'Have you ever tried sushi?', 'I've been to Japan twice'",
          "Cuando no especificas cuándo: 'I have visited Paris' (en algún momento)",
          "Con ever, never, already, yet: 'I have never driven a car'",
          "Para preguntar sobre experiencias: 'Have you ever...?'"
        ],
        whenNotToUse: [
          "No uses presente perfecto con tiempo específico → 'I went to Paris in 2020' (NO 'I have gone' con fecha)",
          "No confundas 'been to' (visitó y volvió) con 'gone to' (fue y está ahí)"
        ]
      },
      objectives: ["Hablar de experiencias de vida", "Usar ever, never, already, yet", "Diferenciar presente perfecto y pasado simple"],
      grammarTheoryIds: ["b1-present-perfect-vs-past-simple", "b1-present-perfect-continuous"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l5t6_n1", word: "experience", translation: "experiencia", type: "noun", definition: "something you have done or lived", definitionEs: "algo que has hecho o vivido", example: "It was a great experience.", exampleEs: "Fue una gran experiencia.", related: [], difficulty: 1 },
          { id: "l5t6_n2", word: "adventure", translation: "aventura", type: "noun", definition: "an exciting experience", definitionEs: "una experiencia emocionante", example: "I've had many adventures.", exampleEs: "He tenido muchas aventuras.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l5t6_v1", word: "visited", translation: "visitado", type: "verb", definition: "past participle of visit", definitionEs: "participio pasado de visitar", example: "I have visited many countries.", exampleEs: "He visitado muchos países.", related: [], difficulty: 1 },
          { id: "l5t6_v2", word: "tried", translation: "probado/intentado", type: "verb", definition: "past participle of try", definitionEs: "participio pasado de intentar/probar", example: "Have you ever tried Indian food?", exampleEs: "¿Alguna vez has probado comida india?", related: [], difficulty: 1 },
          { id: "l5t6_v3", word: "met", translation: "conocido", type: "verb", definition: "past participle of meet", definitionEs: "participio pasado de conocer", example: "I've met some famous people.", exampleEs: "He conocido a algunas personas famosas.", related: [], difficulty: 1 },
          { id: "l5t6_v4", word: "seen", translation: "visto", type: "verb", definition: "past participle of see", definitionEs: "participio pasado de ver", example: "I've seen that movie.", exampleEs: "He visto esa película.", related: [], difficulty: 1 },
          { id: "l5t6_v5", word: "done", translation: "hecho", type: "verb", definition: "past participle of do", definitionEs: "participio pasado de hacer", example: "Have you done this before?", exampleEs: "¿Has hecho esto antes?", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l5t6_a1", word: "amazing", translation: "increíble", type: "adjective", definition: "very impressive", definitionEs: "muy impresionante", example: "It's been an amazing year.", exampleEs: "Ha sido un año increíble.", related: [], difficulty: 1 },
          { id: "l5t6_a2", word: "unforgettable", translation: "inolvidable", type: "adjective", definition: "impossible to forget", definitionEs: "imposible de olvidar", example: "It was an unforgettable experience.", exampleEs: "Fue una experiencia inolvidable.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l5t6_e1", word: "Have you ever...?", translation: "¿Alguna vez has...?", type: "expression", definition: "asking about life experience", definitionEs: "preguntando sobre experiencia de vida", example: "Have you ever been to Asia?", exampleEs: "¿Alguna vez has estado en Asia?", related: [], difficulty: 1 },
          { id: "l5t6_e2", word: "I've never...", translation: "Nunca he...", type: "expression", definition: "negative experience", definitionEs: "experiencia negativa", example: "I've never eaten oysters.", exampleEs: "Nunca he comido ostras.", related: [], difficulty: 1 },
          { id: "l5t6_e3", word: "It's the first time...", translation: "Es la primera vez...", type: "expression", definition: "new experience", definitionEs: "nueva experiencia", example: "It's the first time I've been here.", exampleEs: "Es la primera vez que estoy aquí.", related: [], difficulty: 1 },
          { id: "l5t6_e4", word: "...times (twice, three times)", translation: "...veces", type: "expression", definition: "number of times", definitionEs: "número de veces", example: "I've been there three times.", exampleEs: "He estado ahí tres veces.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l5t6_adv1", word: "ever", translation: "alguna vez", type: "adverb", definition: "at any time", definitionEs: "en cualquier momento", example: "Have you ever skied?", exampleEs: "¿Alguna vez has esquiado?", related: [], difficulty: 1 },
          { id: "l5t6_adv2", word: "never", translation: "nunca", type: "adverb", definition: "at no time", definitionEs: "en ningún momento", example: "I've never seen snow.", exampleEs: "Nunca he visto nieve.", related: [], difficulty: 1 },
          { id: "l5t6_adv3", word: "already", translation: "ya", type: "adverb", definition: "before now", definitionEs: "antes de ahora", example: "I've already done it.", exampleEs: "Ya lo he hecho.", related: [], difficulty: 1 },
          { id: "l5t6_adv4", word: "yet", translation: "todavía/aún", type: "adverb", definition: "until now (questions/negatives)", definitionEs: "hasta ahora (preguntas/negativos)", example: "Have you finished yet?", exampleEs: "¿Has terminado ya?", related: [], difficulty: 1 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l5t6_cm1",
          wrong: "I have went to Paris.",
          correct: "I have been to Paris. / I have gone to Paris.",
          explanation: "'Go' tiene participio irregular: 'gone'. Para visitas usamos 'been'."
        },
        {
          id: "l5t6_cm2",
          wrong: "Have you ever went to Japan?",
          correct: "Have you ever been to Japan?",
          explanation: "Después de 'have' va el participio pasado: 'been', no 'went'."
        },
        {
          id: "l5t6_cm3",
          wrong: "I have seen that movie yesterday.",
          correct: "I saw that movie yesterday.",
          explanation: "Con tiempo específico (yesterday, in 2020, last week), usa pasado simple, NO presente perfecto."
        },
        {
          id: "l5t6_cm4",
          wrong: "Did you ever try sushi?",
          correct: "Have you ever tried sushi?",
          explanation: "Para experiencias de vida sin tiempo específico, usa presente perfecto: 'Have you ever tried...?'."
        },
        {
          id: "l5t6_cm5",
          wrong: "I've been to London last year.",
          correct: "I went to London last year. / I've been to London.",
          explanation: "No mezcles presente perfecto con tiempo específico. Quita 'last year' o usa pasado simple."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con el presente perfecto:",
          items: [
            { sentence: "I ___ never ___ (see) a volcano.", answer: "have/seen", hint: "have + participio" },
            { sentence: "___ you ever ___ (visit) Europe?", answer: "Have/visited", hint: "pregunta de experiencia" },
            { sentence: "She ___ (be) to Italy three times.", answer: "has been", hint: "tercera persona" },
            { sentence: "We ___ already ___ (finish) the project.", answer: "have/finished", hint: "ya completado" },
            { sentence: "They ___ (not try) Indian food yet.", answer: "haven't tried", hint: "negativo con yet" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica: ¿Presente perfecto o pasado simple?",
          categories: [
            { name: "Presente Perfecto", items: ["I've been to Paris", "Have you ever tried?", "She has never seen", "They've already finished"] },
            { name: "Pasado Simple", items: ["I went to Paris in 2019", "I tried sushi yesterday", "She saw the movie last week", "They finished an hour ago"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Cambia a presente perfecto o pasado simple según corresponda:",
          items: [
            { original: "I visited Japan. (ever)", transformed: "Have you ever visited Japan?" },
            { original: "I've eaten sushi. (yesterday)", transformed: "I ate sushi yesterday." },
            { original: "She went to London. (three times)", transformed: "She has been to London three times." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con 'been' o 'gone':",
          items: [
            { sentence: "I've ___ to that restaurant many times.", answer: "been", hint: "fui y volví" },
            { sentence: "She's not here. She's ___ to the store.", answer: "gone", hint: "fue y no ha vuelto" },
            { sentence: "Have you ever ___ to a concert?", answer: "been", hint: "experiencia" },
            { sentence: "They've ___ on vacation. They'll be back next week.", answer: "gone", hint: "están ausentes" },
            { sentence: "It's the best movie I've ever ___.", answer: "seen", hint: "experiencia con 'see'" }
          ]
        }
      ],
      modelDialogue: {
        title: "Compartiendo experiencias de viaje",
        dialogue: [
          { speaker: "Anna", text: "Have you ever been to South America?", translation: "¿Alguna vez has estado en Sudamérica?" },
          { speaker: "Tom", text: "Yes, I have! I've been to Brazil and Argentina.", translation: "¡Sí! He estado en Brasil y Argentina." },
          { speaker: "Anna", text: "Wow! How many times have you been to Brazil?", translation: "¡Wow! ¿Cuántas veces has estado en Brasil?" },
          { speaker: "Tom", text: "Twice. The first time was in 2018, and I went again last year.", translation: "Dos veces. La primera vez fue en 2018, y fui de nuevo el año pasado." },
          { speaker: "Anna", text: "Have you tried any exotic food there?", translation: "¿Has probado alguna comida exótica ahí?" },
          { speaker: "Tom", text: "I've tried many things! I've eaten feijoada and churrasco. Have you ever had Brazilian food?", translation: "¡He probado muchas cosas! He comido feijoada y churrasco. ¿Alguna vez has comido comida brasileña?" },
          { speaker: "Anna", text: "No, I've never tried it, but I'd love to!", translation: "No, nunca la he probado, ¡pero me encantaría!" },
          { speaker: "Tom", text: "It's the best food I've ever had. You should try it.", translation: "Es la mejor comida que he comido. Deberías probarla." },
          { speaker: "Anna", text: "I've always wanted to visit Brazil. It's on my bucket list.", translation: "Siempre he querido visitar Brasil. Está en mi lista de deseos." }
        ],
        keyPhrases: [
          "Have you ever been to...?",
          "Yes, I have! / No, I haven't.",
          "How many times have you...?",
          "I've been there twice/three times",
          "Have you ever tried...?",
          "It's the best... I've ever..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de contracciones del presente perfecto",
        sounds: [
          { sound: "I've /aɪv/", examples: ["I've been", "I've seen"], tip: "Muy corto, casi suena como 'av'" },
          { sound: "He's/She's /hiz/, /ʃiz/", examples: ["He's been", "She's gone"], tip: "Igual que 'is' contracción" },
          { sound: "Haven't /ˈhævnt/", examples: ["haven't you?", "I haven't"], tip: "Sin 'e' en el medio" }
        ],
        commonErrors: [
          { word: "I've been", wrong: "/ai-hav-bin/", right: "/aɪv bɪn/", note: "Contrae: 'aiv bin'" },
          { word: "she's gone", wrong: "/ʃi-has-gon/", right: "/ʃiz gɒn/", note: "'She's' = /ʃiz/" },
          { word: "ever", wrong: "/E-ver/", right: "/ˈevə/", note: "La 'r' final apenas se pronuncia en inglés británico" }
        ]
      },
      culturalNote: {
        title: "Hablando de experiencias en inglés",
        content: "En culturas anglosajonas, preguntar sobre experiencias ('Have you ever...?') es una forma común de conversación. En entrevistas de trabajo te preguntarán sobre tu experiencia profesional usando presente perfecto: 'Have you ever managed a team?' Es de mala educación presumir demasiado, así que incluso si tienes experiencias increíbles, las personas a menudo responden de forma modesta. 'Bucket list' (lista de cosas que hacer antes de morir) es un concepto popular en países anglosajones.",
        examples: [
          "'Bucket list' - lista de deseos/cosas por hacer",
          "'Once in a lifetime experience' - experiencia única",
          "'Been there, done that' - ya lo hice (expresión casual)",
          "'First-hand experience' - experiencia directa",
          "'The trip of a lifetime' - el viaje de tu vida"
        ]
      },
      consolidationQuiz: [
        {
          question: "El presente perfecto se usa para:",
          options: ["acciones con tiempo específico", "experiencias de vida", "el pasado lejano", "predicciones"],
          correctAnswer: 1,
          explanation: "El presente perfecto conecta experiencias pasadas con el presente, sin especificar cuándo ocurrieron."
        },
        {
          question: "'I have ___ to Paris twice':",
          options: ["went", "go", "been", "going"],
          correctAnswer: 2,
          explanation: "'Been to' = visitó y regresó. 'I have been to Paris' = He visitado París."
        },
        {
          question: "¿Cuál es INCORRECTA?",
          options: ["I've seen that movie", "I've seen it yesterday", "I've never seen snow", "Have you seen it?"],
          correctAnswer: 1,
          explanation: "No uses presente perfecto con tiempo específico. 'Yesterday' requiere pasado simple: 'I saw it yesterday'."
        },
        {
          question: "'She's gone to the store' significa:",
          options: ["Fue a la tienda y volvió", "Está en la tienda ahora", "Nunca fue a la tienda", "Va a ir a la tienda"],
          correctAnswer: 1,
          explanation: "'Gone to' = fue y no ha regresado. 'Been to' = fue y ya regresó."
        },
        {
          question: "'Yet' se usa en:",
          options: ["afirmativas", "preguntas y negativas", "solo preguntas", "solo negativas"],
          correctAnswer: 1,
          explanation: "'Yet' se usa en preguntas ('Have you finished yet?') y negativas ('I haven't finished yet')."
        },
        {
          question: "'Already' indica que algo:",
          options: ["no ha pasado", "pasará pronto", "pasó antes de lo esperado", "nunca pasará"],
          correctAnswer: 2,
          explanation: "'Already' indica que algo se completó antes de lo esperado: 'I've already finished'."
        }
      ],
      guidedProduction: [
        {
          task: "Hablar de experiencias de viaje",
          prompt: "Escribe sobre los lugares que has visitado y los que quieres visitar.",
          sampleAnswer: "I've traveled to many countries in my life. I've been to Mexico, the USA, and Canada. I've never been to Europe, but I've always wanted to visit Spain and Italy. The best place I've ever visited is Cancun - the beaches were amazing. I've also been to New York twice; it's my favorite city. I haven't traveled to Asia yet, but it's on my bucket list.",
          hints: ["Usa 'I've been to' para lugares visitados", "Usa 'I've never been to' para lugares no visitados", "Incluye 'the best... I've ever...'"]
        },
        {
          task: "Compartir experiencias de comida",
          prompt: "Describe las comidas que has probado y las que nunca has probado.",
          sampleAnswer: "I've tried many international foods. I've eaten sushi many times, and I've also had Thai and Indian food. The spiciest food I've ever had was a Thai curry - it was incredibly hot! I've never tried Ethiopian food, but I've heard it's delicious. Have you ever eaten insects? I haven't, and I'm not sure I ever will!",
          hints: ["Usa 'Have you ever...?' para preguntas", "Usa superlativos con presente perfecto", "Incluye 'I've tried' y 'I've never tried'"]
        },
        {
          task: "Experiencia profesional",
          prompt: "Describe tu experiencia profesional usando presente perfecto.",
          sampleAnswer: "I've worked in marketing for five years. I've managed several successful campaigns and I've led a team of five people. I've never worked abroad, but I've collaborated with international clients. The most challenging project I've ever done was launching a new product with a very tight deadline. I've also completed several certifications in digital marketing.",
          hints: ["Usa 'I've worked', 'I've managed', 'I've completed'", "Incluye logros con 'I've successfully...'", "Menciona lo que no has hecho: 'I've never...'"]
        },
        {
          task: "Entrevista de experiencias",
          prompt: "Escribe 6 preguntas de 'Have you ever...?' y respuestas.",
          sampleAnswer: "Q: Have you ever met a celebrity? A: Yes, I have! I met a famous actor at a restaurant once.\nQ: Have you ever broken a bone? A: No, I've never broken anything, thankfully.\nQ: Have you ever learned a musical instrument? A: Yes, I've played guitar for 10 years.\nQ: Have you ever given a presentation to more than 100 people? A: No, I haven't, but I'd like to try.\nQ: Have you ever won a competition? A: Yes, I've won several photography competitions.\nQ: Have you ever lived in another country? A: No, I've never lived abroad, but I've traveled a lot.",
          hints: ["Varía los temas: viajes, trabajo, hobbies, vida personal", "Usa respuestas cortas: 'Yes, I have' / 'No, I haven't'", "Añade detalles después de la respuesta corta"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste a escribir emails donde a menudo usas presente perfecto: 'I have attached...', 'We have received...'. Ahora profundizarás en este tiempo verbal.",
      connectionToNext: "En la siguiente lección aprenderás comparativos y superlativos, que combinan bien con presente perfecto: 'It's the best food I've ever eaten'."
    },
    {
      id: 7,
      title: "Comparing Things",
      titleEs: "Comparando Cosas",
      introduction: {
        title: "⚖️ Comparando Cosas",
        explanation: "Comparar es fundamental para expresar preferencias y opiniones. Aprenderás comparativos, superlativos y expresiones de comparación avanzadas.",
        keyPoints: [
          "Comparativos cortos: adj + er + than: 'bigger than', 'faster than'",
          "Comparativos largos: more + adj + than: 'more expensive than', 'more interesting than'",
          "Superlativos cortos: the + adj + est: 'the biggest', 'the fastest'",
          "Superlativos largos: the most + adj: 'the most expensive'",
          "Igualdad: as + adj + as: 'as big as', 'not as cheap as'"
        ],
        examples: [
          { english: "This phone is more expensive than that one.", spanish: "Este teléfono es más caro que ese.", explanation: "Comparativo largo" },
          { english: "She's the most talented person in the team.", spanish: "Ella es la persona más talentosa del equipo.", explanation: "Superlativo" },
          { english: "This isn't as good as I expected.", spanish: "Esto no es tan bueno como esperaba.", explanation: "Comparación de igualdad negativa" }
        ],
        tips: [
          "💡 Irregulares: good → better → best, bad → worse → worst",
          "💡 'Much' intensifica comparativos: 'much better', 'much more expensive'",
          "💡 'By far' intensifica superlativos: 'by far the best'"
        ],
        whenToUse: [
          "Al comparar dos cosas: 'This phone is more expensive than that one'",
          "Para destacar el mejor/peor: 'She's the most talented person in the team'",
          "Para igualdad: 'as big as', 'not as cheap as'",
          "Con intensificadores: 'much better', 'by far the best'"
        ],
        whenNotToUse: [
          "No digas 'more good' o 'more bad' → usa 'better' y 'worse' (irregulares)",
          "No olvides 'the' en superlativos: 'the biggest' (NO 'biggest' solo)"
        ]
      },
      objectives: ["Formar comparativos y superlativos", "Comparar igualdad", "Usar intensificadores"],
      grammarTheoryIds: ["b1-quantifiers"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l5t7_n1", word: "comparison", translation: "comparación", type: "noun", definition: "looking at differences and similarities", definitionEs: "ver diferencias y similitudes", example: "Let's make a comparison.", exampleEs: "Hagamos una comparación.", related: ["compare"], difficulty: 1 },
          { id: "l5t7_n2", word: "difference", translation: "diferencia", type: "noun", definition: "how things are not the same", definitionEs: "cómo las cosas no son iguales", example: "What's the difference?", exampleEs: "¿Cuál es la diferencia?", related: ["different"], difficulty: 1 },
          { id: "l5t7_n3", word: "similarity", translation: "similitud", type: "noun", definition: "how things are alike", definitionEs: "cómo las cosas son parecidas", example: "There are many similarities.", exampleEs: "Hay muchas similitudes.", related: ["similar"], difficulty: 2 },
        ],
        verbs: [
          { id: "l5t7_v1", word: "compare", translation: "comparar", type: "verb", definition: "to look for differences", definitionEs: "buscar diferencias", example: "Let's compare the prices.", exampleEs: "Comparemos los precios.", related: ["comparison"], difficulty: 1 },
          { id: "l5t7_v2", word: "prefer", translation: "preferir", type: "verb", definition: "to like better", definitionEs: "gustar más", example: "I prefer the red one.", exampleEs: "Prefiero el rojo.", related: ["preference"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l5t7_a1", word: "better", translation: "mejor", type: "adjective", definition: "comparative of good", definitionEs: "comparativo de bueno", example: "This is better than that.", exampleEs: "Esto es mejor que eso.", related: ["good", "best"], difficulty: 1 },
          { id: "l5t7_a2", word: "worse", translation: "peor", type: "adjective", definition: "comparative of bad", definitionEs: "comparativo de malo", example: "The weather is worse today.", exampleEs: "El clima está peor hoy.", related: ["bad", "worst"], difficulty: 1 },
          { id: "l5t7_a3", word: "similar", translation: "similar", type: "adjective", definition: "almost the same", definitionEs: "casi igual", example: "They're similar in size.", exampleEs: "Son similares en tamaño.", related: ["similarity"], difficulty: 1 },
          { id: "l5t7_a4", word: "different", translation: "diferente", type: "adjective", definition: "not the same", definitionEs: "no igual", example: "They're completely different.", exampleEs: "Son completamente diferentes.", related: ["difference"], difficulty: 1 },
        ],
        expressions: [
          { id: "l5t7_e1", word: "as... as...", translation: "tan... como...", type: "expression", definition: "comparing equality", definitionEs: "comparando igualdad", example: "He's as tall as his father.", exampleEs: "Él es tan alto como su padre.", related: [], difficulty: 1 },
          { id: "l5t7_e2", word: "not as... as...", translation: "no tan... como...", type: "expression", definition: "comparing inequality", definitionEs: "comparando desigualdad", example: "It's not as cold as yesterday.", exampleEs: "No hace tanto frío como ayer.", related: [], difficulty: 1 },
          { id: "l5t7_e3", word: "much/far + comparative", translation: "mucho más + comparativo", type: "expression", definition: "intensifying comparison", definitionEs: "intensificando comparación", example: "It's much better now.", exampleEs: "Es mucho mejor ahora.", related: [], difficulty: 1 },
          { id: "l5t7_e4", word: "by far the + superlative", translation: "con mucho el/la + superlativo", type: "expression", definition: "strong superlative", definitionEs: "superlativo fuerte", example: "It's by far the best option.", exampleEs: "Es con mucho la mejor opción.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l5t7_cm1",
          wrong: "This is more better than that.",
          correct: "This is better than that.",
          explanation: "'Better' ya es comparativo. No uses 'more' + comparativo. Es redundante."
        },
        {
          id: "l5t7_cm2",
          wrong: "She's the most tallest in the class.",
          correct: "She's the tallest in the class.",
          explanation: "'Tallest' ya es superlativo. No uses 'most' + superlativo."
        },
        {
          id: "l5t7_cm3",
          wrong: "This is as expensive like that one.",
          correct: "This is as expensive as that one.",
          explanation: "La estructura es 'as + adjetivo + AS', no 'as + adjetivo + like'."
        },
        {
          id: "l5t7_cm4",
          wrong: "It's the most good movie I've seen.",
          correct: "It's the best movie I've seen.",
          explanation: "'Good' tiene formas irregulares: good → better → best."
        },
        {
          id: "l5t7_cm5",
          wrong: "He is taller that his brother.",
          correct: "He is taller than his brother.",
          explanation: "Los comparativos usan 'THAN', no 'that': 'taller than', 'better than'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con la forma comparativa o superlativa:",
          items: [
            { sentence: "This phone is ___ (expensive) than mine.", answer: "more expensive", hint: "comparativo largo" },
            { sentence: "She is the ___ (intelligent) person I know.", answer: "most intelligent", hint: "superlativo largo" },
            { sentence: "Today is ___ (hot) than yesterday.", answer: "hotter", hint: "comparativo corto + doble consonante" },
            { sentence: "This is the ___ (bad) restaurant in the city.", answer: "worst", hint: "superlativo irregular" },
            { sentence: "He works ___ (hard) than anyone else.", answer: "harder", hint: "comparativo corto" }
          ]
        },
        {
          type: "matching",
          instruction: "Une la forma base con comparativo y superlativo:",
          pairs: [
            { term: "good", match: "better / best" },
            { term: "bad", match: "worse / worst" },
            { term: "far", match: "farther (further) / farthest (furthest)" },
            { term: "little", match: "less / least" },
            { term: "many/much", match: "more / most" },
            { term: "old", match: "older (elder) / oldest (eldest)" }
          ]
        },
        {
          type: "transformation",
          instruction: "Reescribe usando la estructura indicada:",
          items: [
            { original: "Tom is taller than Mary. (as...as)", transformed: "Mary is not as tall as Tom." },
            { original: "This test was easy. That test was very easy. (not as...as)", transformed: "This test was not as easy as that one." },
            { original: "The red car is expensive. The blue car is very expensive. (much + comparative)", transformed: "The blue car is much more expensive than the red car." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con intensificadores:",
          items: [
            { sentence: "This solution is ___ better than the first one.", answer: "much/far", hint: "intensificador" },
            { sentence: "She's ___ far the best employee.", answer: "by", hint: "by far" },
            { sentence: "It's slightly ___ expensive than I expected.", answer: "more", hint: "un poco más" },
            { sentence: "The new model is a ___ faster.", answer: "lot/bit", hint: "mucho/un poco" },
            { sentence: "This is not ___ as difficult as it looks.", answer: "nearly", hint: "ni cerca de" }
          ]
        }
      ],
      modelDialogue: {
        title: "Comparando productos antes de comprar",
        dialogue: [
          { speaker: "Customer", text: "I'm trying to decide between these two laptops. Can you help?", translation: "Estoy tratando de decidir entre estas dos laptops. ¿Puede ayudarme?" },
          { speaker: "Salesperson", text: "Of course! This one is more expensive, but it's also much faster.", translation: "¡Por supuesto! Esta es más cara, pero también es mucho más rápida." },
          { speaker: "Customer", text: "Is it as light as the other one?", translation: "¿Es tan ligera como la otra?" },
          { speaker: "Salesperson", text: "Actually, it's lighter. It's the lightest laptop in our store.", translation: "De hecho, es más ligera. Es la laptop más ligera de nuestra tienda." },
          { speaker: "Customer", text: "And the battery? Which one lasts longer?", translation: "¿Y la batería? ¿Cuál dura más?" },
          { speaker: "Salesperson", text: "The cheaper one has a slightly better battery life, but not by much.", translation: "La más barata tiene una duración de batería ligeramente mejor, pero no por mucho." },
          { speaker: "Customer", text: "So the expensive one is better overall?", translation: "¿Entonces la cara es mejor en general?" },
          { speaker: "Salesperson", text: "I'd say it's by far the best option if you need speed. It's the most popular model we have.", translation: "Diría que es con mucho la mejor opción si necesitas velocidad. Es el modelo más popular que tenemos." },
          { speaker: "Customer", text: "Is it much more expensive than the other?", translation: "¿Es mucho más cara que la otra?" },
          { speaker: "Salesperson", text: "It's about $200 more, but the quality is far superior.", translation: "Es unos $200 más, pero la calidad es muy superior." }
        ],
        keyPhrases: [
          "more expensive, but also much faster",
          "Is it as light as...?",
          "It's the lightest... in...",
          "Which one lasts longer?",
          "slightly better, but not by much",
          "by far the best option",
          "much more expensive",
          "far superior"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de comparativos y superlativos",
        sounds: [
          { sound: "Than /ðən/", examples: ["bigger than", "faster than"], tip: "La 'th' es sonora, se reduce en habla rápida" },
          { sound: "Terminación -er /ə/", examples: ["bigger /ˈbɪgə/", "faster /ˈfɑːstə/"], tip: "La 'r' final apenas se pronuncia (UK)" },
          { sound: "Terminación -est /ɪst/", examples: ["biggest /ˈbɪgɪst/", "fastest /ˈfɑːstɪst/"], tip: "Corto y rápido" }
        ],
        commonErrors: [
          { word: "than", wrong: "/tan/", right: "/ðən/", note: "La 'th' es sonora, como en 'the'" },
          { word: "worse", wrong: "/wors/", right: "/wɜːs/", note: "Sin 'e' final en pronunciación" },
          { word: "height", wrong: "/haɪt/", right: "/haɪt/", note: "La 'gh' es muda" }
        ]
      },
      culturalNote: {
        title: "Comparaciones en publicidad y conversación",
        content: "En publicidad anglosajona, las comparaciones son muy comunes: 'Our product is better than...' o 'The best choice for...' En EE.UU., es más aceptable hacer comparaciones directas con competidores que en otras culturas. En conversaciones, los anglosajones a menudo evitan comparaciones directas de personas para no ofender, usando 'different' en lugar de 'worse'. También es común usar 'understatement' (subestimar): decir 'It's not bad' cuando algo es muy bueno.",
        examples: [
          "'Not bad at all' - En realidad significa 'muy bueno'",
          "'It could be worse' - Expresión optimista",
          "'Best seller' - El más vendido",
          "'Value for money' - Relación calidad-precio",
          "'Second to none' - El mejor, sin igual"
        ]
      },
      consolidationQuiz: [
        {
          question: "El comparativo de 'good' es:",
          options: ["gooder", "more good", "better", "best"],
          correctAnswer: 2,
          explanation: "'Good' es irregular: good → better → best."
        },
        {
          question: "'This is ___ than I expected':",
          options: ["more difficult", "difficulter", "most difficult", "the difficult"],
          correctAnswer: 0,
          explanation: "'Difficult' es largo: 'more difficult than', no 'difficulter'."
        },
        {
          question: "'She is as tall ___ her sister':",
          options: ["than", "like", "as", "that"],
          correctAnswer: 2,
          explanation: "La estructura es 'as + adjetivo + AS': 'as tall as'."
        },
        {
          question: "'It's ___ better now' (intensificador):",
          options: ["more", "most", "much", "very"],
          correctAnswer: 2,
          explanation: "'Much' intensifica comparativos: 'much better', 'much faster'."
        },
        {
          question: "¿Cuál es INCORRECTA?",
          options: ["more intelligent", "most intelligent", "more better", "better"],
          correctAnswer: 2,
          explanation: "'Better' ya es comparativo. 'More better' es redundante e incorrecto."
        },
        {
          question: "'By far the best' significa:",
          options: ["casi el mejor", "lejos del mejor", "definitivamente el mejor", "muy lejos"],
          correctAnswer: 2,
          explanation: "'By far' intensifica superlativos: 'by far the best' = claramente el mejor."
        }
      ],
      guidedProduction: [
        {
          task: "Comparar dos productos",
          prompt: "Compara dos smartphones, computadoras, o cualquier producto que conozcas.",
          sampleAnswer: "The iPhone 15 and Samsung Galaxy S24 are both excellent phones. The iPhone is more expensive than the Samsung, but many people think Apple's software is better. The Samsung has a slightly larger screen, making it better for watching videos. The iPhone is lighter and thinner, but the Samsung has a longer battery life. In my opinion, the iPhone has the best camera, but the Samsung is the best value for money. Both are much better than older models.",
          hints: ["Usa 'more + adjetivo + than' para adjetivos largos", "Usa 'adjetivo-er + than' para adjetivos cortos", "Incluye superlativos: 'the best', 'the most...'"]
        },
        {
          task: "Comparar ciudades o lugares",
          prompt: "Compara dos ciudades o lugares que conozcas.",
          sampleAnswer: "New York is much bigger than my hometown. It's more crowded and noisier, but also more exciting. The public transport is far better - the subway runs 24/7. My hometown is quieter and cleaner, and the people are friendlier. Living in New York is much more expensive than in my hometown. However, New York has the best restaurants and the most diverse culture I've ever experienced. Both places are special, but in different ways.",
          hints: ["Compara tamaño, costo, calidad de vida", "Usa 'much/far + comparativo' para diferencias grandes", "Usa 'as...as' para similitudes"]
        },
        {
          task: "Expresar preferencias",
          prompt: "Escribe sobre qué prefieres y por qué, usando comparaciones.",
          sampleAnswer: "I prefer working from home because it's more comfortable than being in an office. At home, I'm as productive as in the office, sometimes even more productive. The commute to the office is tiring, and my home is much quieter. However, the office is better for team meetings - face-to-face communication is more effective than video calls. Overall, I think working from home is the best option for me.",
          hints: ["Usa 'I prefer...because it's more/less...'", "Compara ventajas y desventajas", "Concluye con tu preferencia final usando superlativo"]
        },
        {
          task: "Describir cambios en el tiempo",
          prompt: "Compara cómo era algo antes vs ahora.",
          sampleAnswer: "Technology has changed a lot since I was young. Phones are much smaller and smarter now. Computers are faster and more affordable than they used to be. Internet connections are thousands of times faster than in the 90s. However, life was simpler before - we weren't as dependent on technology. Kids today spend far more time on screens than we did. Some things are better now, but not everything.",
          hints: ["Usa 'than they used to be'", "Mezcla comparativos positivos y negativos", "Incluye intensificadores: 'much', 'far', 'a lot'"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste presente perfecto para experiencias. Ahora combinarás ambos: 'It's the best movie I've ever seen'.",
      connectionToNext: "En la siguiente lección aprenderás vocabulario de salud, donde las comparaciones son útiles: 'I feel better today', 'The pain is worse'."
    },
    {
      id: 8,
      title: "Talking About Health",
      titleEs: "Hablando de Salud",
      introduction: {
        title: "🏥 Hablando de Salud",
        explanation: "Saber describir síntomas y entender consejos médicos es crucial cuando viajas o vives en un país de habla inglesa. Aprenderás vocabulario médico esencial.",
        keyPoints: [
          "Síntomas: 'I have a headache', 'My back hurts', 'I feel dizzy'",
          "Descripción: 'It hurts when I...', 'The pain is...', 'I've had this for...'",
          "En la farmacia: 'Do you have something for...?', 'Is this over-the-counter?'",
          "Consejos: 'You should see a doctor', 'Take two pills twice a day'"
        ],
        examples: [
          { english: "I've had this cough for three days.", spanish: "He tenido esta tos por tres días.", explanation: "Describiendo duración" },
          { english: "It hurts when I swallow.", spanish: "Me duele cuando trago.", explanation: "Describiendo síntoma" },
          { english: "Do you have something for a sore throat?", spanish: "¿Tiene algo para el dolor de garganta?", explanation: "En la farmacia" }
        ],
        tips: [
          "💡 'Ache' es dolor constante y leve: headache, toothache, backache",
          "💡 'Pain' es más intenso y puede ser agudo: sharp pain, severe pain",
          "💡 'Over-the-counter' = sin receta médica"
        ],
        whenToUse: [
          "Al describir síntomas: 'I have a headache', 'My back hurts', 'I feel dizzy'",
          "Para describir duración: 'I've had this cough for three days'",
          "En la farmacia: 'Do you have something for...?', 'Is this over-the-counter?'",
          "Al dar o recibir consejos: 'You should see a doctor', 'Take two pills twice a day'"
        ],
        whenNotToUse: [
          "No uses 'I have pain in my head' → 'I have a headache' (usa la palabra compuesta)",
          "No confundas 'ache' (dolor leve constante) con 'pain' (dolor más intenso)"
        ]
      },
      objectives: ["Describir síntomas", "Entender instrucciones médicas", "Comunicarse en farmacias"],
      grammarTheoryIds: ["b1-modal-deduction"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l5t8_n1", word: "headache", translation: "dolor de cabeza", type: "noun", definition: "pain in the head", definitionEs: "dolor en la cabeza", example: "I have a terrible headache.", exampleEs: "Tengo un terrible dolor de cabeza.", related: [], difficulty: 1 },
          { id: "l5t8_n2", word: "cough", translation: "tos", type: "noun", definition: "forcing air out of throat", definitionEs: "forzar aire fuera de la garganta", example: "I have a bad cough.", exampleEs: "Tengo una tos fuerte.", related: [], difficulty: 1 },
          { id: "l5t8_n3", word: "fever", translation: "fiebre", type: "noun", definition: "high body temperature", definitionEs: "temperatura corporal alta", example: "She has a high fever.", exampleEs: "Ella tiene fiebre alta.", related: [], difficulty: 1 },
          { id: "l5t8_n4", word: "symptom", translation: "síntoma", type: "noun", definition: "a sign of illness", definitionEs: "una señal de enfermedad", example: "What are your symptoms?", exampleEs: "¿Cuáles son tus síntomas?", related: [], difficulty: 1 },
          { id: "l5t8_n5", word: "prescription", translation: "receta médica", type: "noun", definition: "doctor's order for medicine", definitionEs: "orden médica para medicina", example: "You need a prescription.", exampleEs: "Necesitas una receta.", related: [], difficulty: 2 },
          { id: "l5t8_n6", word: "allergy", translation: "alergia", type: "noun", definition: "bad reaction to something", definitionEs: "mala reacción a algo", example: "I have a peanut allergy.", exampleEs: "Tengo alergia al maní.", related: ["allergic"], difficulty: 1 },
          { id: "l5t8_n7", word: "sore throat", translation: "dolor de garganta", type: "noun", definition: "pain in the throat", definitionEs: "dolor en la garganta", example: "I have a sore throat.", exampleEs: "Tengo dolor de garganta.", related: [], difficulty: 1 },
          { id: "l5t8_n8", word: "pharmacy", translation: "farmacia", type: "noun", definition: "a place that sells medicine", definitionEs: "un lugar que vende medicina", example: "Is there a pharmacy nearby?", exampleEs: "¿Hay una farmacia cerca?", related: ["drugstore"], difficulty: 1 },
        ],
        verbs: [
          { id: "l5t8_v1", word: "hurt", translation: "doler", type: "verb", definition: "to feel pain", definitionEs: "sentir dolor", example: "My leg hurts.", exampleEs: "Me duele la pierna.", related: [], difficulty: 1 },
          { id: "l5t8_v2", word: "ache", translation: "doler (constantemente)", type: "verb", definition: "to have a continuous pain", definitionEs: "tener un dolor continuo", example: "My back aches.", exampleEs: "Me duele la espalda.", related: [], difficulty: 1 },
          { id: "l5t8_v3", word: "sneeze", translation: "estornudar", type: "verb", definition: "to expel air suddenly from the nose", definitionEs: "expulsar aire de la nariz repentinamente", example: "I keep sneezing.", exampleEs: "Sigo estornudando.", related: [], difficulty: 1 },
          { id: "l5t8_v4", word: "prescribe", translation: "recetar", type: "verb", definition: "to order medicine for someone", definitionEs: "ordenar medicina para alguien", example: "The doctor prescribed antibiotics.", exampleEs: "El doctor recetó antibióticos.", related: ["prescription"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l5t8_a1", word: "dizzy", translation: "mareado", type: "adjective", definition: "feeling like things are spinning", definitionEs: "sintiendo que las cosas giran", example: "I feel dizzy.", exampleEs: "Me siento mareado.", related: [], difficulty: 1 },
          { id: "l5t8_a2", word: "nauseous", translation: "con náuseas", type: "adjective", definition: "feeling like you might vomit", definitionEs: "sintiendo que podrías vomitar", example: "I feel nauseous.", exampleEs: "Tengo náuseas.", related: [], difficulty: 2 },
          { id: "l5t8_a3", word: "allergic", translation: "alérgico", type: "adjective", definition: "having an allergy", definitionEs: "teniendo una alergia", example: "I'm allergic to cats.", exampleEs: "Soy alérgico a los gatos.", related: ["allergy"], difficulty: 1 },
          { id: "l5t8_a4", word: "severe", translation: "severo/grave", type: "adjective", definition: "very serious", definitionEs: "muy serio", example: "The pain is severe.", exampleEs: "El dolor es severo.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l5t8_e1", word: "I don't feel well", translation: "No me siento bien", type: "expression", definition: "saying you're sick", definitionEs: "diciendo que estás enfermo", example: "I don't feel well today.", exampleEs: "No me siento bien hoy.", related: [], difficulty: 1 },
          { id: "l5t8_e2", word: "What seems to be the problem?", translation: "¿Cuál parece ser el problema?", type: "expression", definition: "doctor asking about symptoms", definitionEs: "doctor preguntando sobre síntomas", example: "What seems to be the problem?", exampleEs: "¿Cuál parece ser el problema?", related: [], difficulty: 1 },
          { id: "l5t8_e3", word: "Take two pills twice a day", translation: "Tome dos pastillas dos veces al día", type: "expression", definition: "dosage instructions", definitionEs: "instrucciones de dosis", example: "Take two pills twice a day with food.", exampleEs: "Tome dos pastillas dos veces al día con comida.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l5t8_cm1",
          wrong: "I have headache.",
          correct: "I have a headache.",
          explanation: "En inglés siempre usamos 'a' con dolores: 'a headache', 'a cold', 'a fever'."
        },
        {
          id: "l5t8_cm2",
          wrong: "My head is hurting me.",
          correct: "My head hurts. / I have a headache.",
          explanation: "'Hurt' no necesita objeto reflexivo. Simplemente 'My head hurts'."
        },
        {
          id: "l5t8_cm3",
          wrong: "I am feeling myself sick.",
          correct: "I feel sick. / I'm feeling sick.",
          explanation: "'Feel' no necesita reflexivo en inglés: 'I feel sick', no 'I feel myself sick'."
        },
        {
          id: "l5t8_cm4",
          wrong: "The doctor gave me a receipt.",
          correct: "The doctor gave me a prescription.",
          explanation: "'Receipt' es recibo (de compra). 'Prescription' es receta médica."
        },
        {
          id: "l5t8_cm5",
          wrong: "I went to the pharmacy for buying medicine.",
          correct: "I went to the pharmacy to buy medicine.",
          explanation: "Usa infinitivo de propósito: 'to buy', no 'for buying'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con vocabulario de salud:",
          items: [
            { sentence: "I have a terrible ___. My head is pounding.", answer: "headache", hint: "dolor de cabeza" },
            { sentence: "She has a high ___. Her temperature is 39°C.", answer: "fever", hint: "temperatura alta" },
            { sentence: "I've had this ___ for three days.", answer: "cough", hint: "tos" },
            { sentence: "I feel ___ - like the room is spinning.", answer: "dizzy", hint: "mareado" },
            { sentence: "Do I need a ___ for this medicine?", answer: "prescription", hint: "receta médica" }
          ]
        },
        {
          type: "matching",
          instruction: "Une el síntoma con la parte del cuerpo:",
          pairs: [
            { term: "headache", match: "head" },
            { term: "sore throat", match: "throat" },
            { term: "backache", match: "back" },
            { term: "stomachache", match: "stomach" },
            { term: "toothache", match: "tooth" },
            { term: "earache", match: "ear" }
          ]
        },
        {
          type: "transformation",
          instruction: "Reescribe usando la forma correcta:",
          items: [
            { original: "My stomach is hurting me. (corregir)", transformed: "My stomach hurts." },
            { original: "I have cold. (corregir)", transformed: "I have a cold." },
            { original: "I feel myself tired. (corregir)", transformed: "I feel tired." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa el diálogo en la farmacia:",
          items: [
            { sentence: "Customer: Do you have something ___ a headache?", answer: "for", hint: "preposición" },
            { sentence: "Pharmacist: Yes, these pills are good for headaches. ___ two tablets every 6 hours.", answer: "Take", hint: "instrucción" },
            { sentence: "Customer: Is this ___, or do I need a prescription?", answer: "over-the-counter", hint: "sin receta" },
            { sentence: "Pharmacist: It's over-the-counter. Don't exceed the ___ dosage.", answer: "recommended", hint: "sugerida" },
            { sentence: "Customer: And if the pain ___, should I see a doctor?", answer: "persists/continues", hint: "no mejora" }
          ]
        }
      ],
      modelDialogue: {
        title: "Visita al doctor",
        dialogue: [
          { speaker: "Doctor", text: "Hello, what seems to be the problem?", translation: "Hola, ¿cuál parece ser el problema?" },
          { speaker: "Patient", text: "I don't feel well. I've had a terrible headache and a sore throat for three days.", translation: "No me siento bien. He tenido un terrible dolor de cabeza y de garganta por tres días." },
          { speaker: "Doctor", text: "Do you have a fever?", translation: "¿Tiene fiebre?" },
          { speaker: "Patient", text: "Yes, I think so. I feel hot and cold at the same time.", translation: "Sí, creo que sí. Me siento caliente y frío al mismo tiempo." },
          { speaker: "Doctor", text: "Let me check. Yes, you have a temperature of 38.5. Any other symptoms?", translation: "Déjeme revisar. Sí, tiene una temperatura de 38.5. ¿Algún otro síntoma?" },
          { speaker: "Patient", text: "I feel nauseous and dizzy. It hurts when I swallow.", translation: "Me siento con náuseas y mareado. Me duele cuando trago." },
          { speaker: "Doctor", text: "It sounds like you have the flu. Are you allergic to any medication?", translation: "Parece que tiene gripe. ¿Es alérgico a algún medicamento?" },
          { speaker: "Patient", text: "No, I'm not allergic to anything.", translation: "No, no soy alérgico a nada." },
          { speaker: "Doctor", text: "I'll prescribe some antibiotics. Take one pill twice a day for seven days.", translation: "Le recetaré antibióticos. Tome una pastilla dos veces al día por siete días." },
          { speaker: "Patient", text: "Should I come back if I don't feel better?", translation: "¿Debería volver si no me siento mejor?" },
          { speaker: "Doctor", text: "Yes, if the symptoms persist after a week, please make another appointment.", translation: "Sí, si los síntomas persisten después de una semana, por favor haga otra cita." }
        ],
        keyPhrases: [
          "What seems to be the problem?",
          "I've had... for three days",
          "Do you have a fever?",
          "It hurts when I...",
          "Are you allergic to...?",
          "Take one pill twice a day",
          "If the symptoms persist..."
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario médico",
        sounds: [
          { sound: "Ache /eɪk/", examples: ["headache /ˈhedeɪk/", "toothache", "backache"], tip: "Rima con 'make'" },
          { sound: "Cough /kɒf/", examples: ["cough"], tip: "La 'ough' suena como 'off'" },
          { sound: "Nauseous /ˈnɔːʃəs/", examples: ["nauseous", "nausea"], tip: "Sonido 'sh' en el medio" }
        ],
        commonErrors: [
          { word: "headache", wrong: "/hed-a-che/", right: "/ˈhedeɪk/", note: "Suena como 'ake', no 'ache'" },
          { word: "cough", wrong: "/kof/ o /kau/", right: "/kɒf/", note: "Como 'off' con 'k'" },
          { word: "prescription", wrong: "/pres-krip-tion/", right: "/prɪˈskrɪpʃn/", note: "Acento en segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "El sistema de salud en países anglosajones",
        content: "Los sistemas de salud varían mucho. En el Reino Unido, el NHS (National Health Service) ofrece atención médica gratuita. En EE.UU., la atención médica puede ser muy cara sin seguro. Las farmacias en países anglosajones venden medicinas 'over-the-counter' (sin receta) para problemas menores. Para medicamentos más fuertes, necesitas una 'prescription' del doctor. Es común llamar antes de ir al doctor ('make an appointment'). En emergencias, el número es 911 (EE.UU.) o 999 (UK).",
        examples: [
          "'Walk-in clinic' - Clínica sin cita previa",
          "'ER/A&E' - Emergencias (Emergency Room / Accident & Emergency)",
          "'GP' - General Practitioner (médico general)",
          "'OTC' - Over-The-Counter (sin receta)",
          "'Side effects' - Efectos secundarios"
        ]
      },
      consolidationQuiz: [
        {
          question: "'I have ___ headache':",
          options: ["the", "a", "(nothing)", "my"],
          correctAnswer: 1,
          explanation: "En inglés siempre usamos 'a' con dolores: 'a headache', 'a cold'."
        },
        {
          question: "'My back ___' es correcto porque:",
          options: ["hurts es singular", "'hurt' necesita objeto", "'hurts' es la forma correcta", "back es uncountable"],
          correctAnswer: 2,
          explanation: "'My back hurts' - tercera persona singular, y 'hurt' no necesita objeto."
        },
        {
          question: "'Prescription' significa:",
          options: ["recibo", "receta médica", "descripción", "medicina"],
          correctAnswer: 1,
          explanation: "'Prescription' es la receta que el doctor escribe para medicamentos."
        },
        {
          question: "'Over-the-counter medicine' significa:",
          options: ["medicina cara", "medicina sin receta", "medicina por correo", "medicina alternativa"],
          correctAnswer: 1,
          explanation: "'Over-the-counter' = medicinas que puedes comprar sin receta médica."
        },
        {
          question: "'I feel ___' (mareado):",
          options: ["sick", "dizzy", "tired", "cold"],
          correctAnswer: 1,
          explanation: "'Dizzy' significa mareado, como si todo girara."
        },
        {
          question: "'Take two pills twice a day' significa tomar:",
          options: ["2 pastillas al día", "4 pastillas al día", "2 pastillas 2 días", "4 pastillas 2 días"],
          correctAnswer: 1,
          explanation: "'Two pills' x 'twice a day' = 4 pastillas al día (2 en la mañana, 2 en la noche)."
        }
      ],
      guidedProduction: [
        {
          task: "Describir síntomas al doctor",
          prompt: "Imagina que estás enfermo. Describe tus síntomas al doctor.",
          sampleAnswer: "Doctor, I don't feel well. I've had a terrible headache for two days, and my throat is very sore. I think I have a fever because I feel hot and cold. I've also been coughing a lot, especially at night. My body aches all over, and I feel exhausted. I've been sneezing constantly too. It hurts when I swallow. I took some over-the-counter medicine, but it didn't help much.",
          hints: ["Usa 'I've had... for... days'", "Describe múltiples síntomas", "Menciona qué ya has intentado"]
        },
        {
          task: "Conversación en la farmacia",
          prompt: "Escribe un diálogo pidiendo medicamentos en una farmacia.",
          sampleAnswer: "Customer: Hello, do you have something for a bad cold?\nPharmacist: Yes, we have several options. Do you have a fever?\nCustomer: Yes, and I also have a cough and sore throat.\nPharmacist: I recommend this cold medicine. It treats all those symptoms.\nCustomer: Is it over-the-counter?\nPharmacist: Yes, no prescription needed. Take two tablets every 6 hours.\nCustomer: Are there any side effects?\nPharmacist: You might feel drowsy, so don't drive after taking it.\nCustomer: Thank you. I'll take it.",
          hints: ["Pregunta por síntomas específicos", "Menciona 'over-the-counter' o 'prescription'", "Incluye instrucciones de dosificación"]
        },
        {
          task: "Llamar al trabajo por enfermedad",
          prompt: "Escribe lo que dirías al llamar enfermo al trabajo.",
          sampleAnswer: "Hi, this is [name]. I'm calling to let you know that I won't be able to come to work today. I woke up with a terrible headache and a high fever. I feel dizzy and nauseous, so it wouldn't be safe for me to drive. I've made an appointment to see a doctor this afternoon. I'll keep you updated on my condition. Hopefully, I'll feel better tomorrow, but I might need to stay home for a couple of days.",
          hints: ["Explica por qué no puedes ir", "Describe tus síntomas", "Menciona tus planes (ir al doctor, etc.)"]
        },
        {
          task: "Dar consejos de salud",
          prompt: "Da consejos a un amigo que tiene gripe.",
          sampleAnswer: "I'm sorry to hear you're not feeling well. Make sure you rest as much as possible - your body needs to recover. Drink lots of fluids, especially water and hot tea with honey. Take some over-the-counter medicine for your fever and headache. If you have a sore throat, gargling with salt water might help. Don't go to work - you need to rest and you don't want to get others sick. If you don't feel better in a few days, you should see a doctor.",
          hints: ["Usa 'Make sure you...', 'You should...'", "Menciona remedios caseros", "Recomienda cuándo ver al doctor"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste comparativos, útiles para salud: 'I feel better/worse today'. Ahora aprenderás vocabulario específico de salud.",
      connectionToNext: "En la siguiente lección aprenderás el segundo condicional para situaciones hipotéticas, útil para consejos: 'If I were you, I would see a doctor'."
    },
    {
      id: 9,
      title: "Second Conditional",
      titleEs: "Condicional Segundo Tipo",
      introduction: {
        title: "💭 Condicional Segundo Tipo (Second Conditional)",
        explanation: "El segundo condicional se usa para situaciones hipotéticas o imaginarias en el presente o futuro. Habla de cosas que probablemente no sucederán.",
        keyPoints: [
          "Estructura: If + pasado simple, would + verbo base",
          "Uso: situaciones imaginarias, deseos, consejos",
          "Ejemplo: 'If I had more money, I would travel more' (pero no tengo mucho dinero)",
          "Con 'were' (formal): 'If I were you, I would...' para consejos",
          "Variaciones: could/might en lugar de would"
        ],
        examples: [
          { english: "If I won the lottery, I would buy a house.", spanish: "Si ganara la lotería, compraría una casa.", explanation: "Situación imaginaria" },
          { english: "If I were you, I would accept the job.", spanish: "Si yo fuera tú, aceptaría el trabajo.", explanation: "Dando consejo" },
          { english: "What would you do if you lost your job?", spanish: "¿Qué harías si perdieras tu trabajo?", explanation: "Pregunta hipotética" }
        ],
        tips: [
          "💡 'Was' es aceptable informal: 'If I was rich...' pero 'were' es más formal y correcto",
          "💡 Primer vs Segundo condicional: 1° probable, 2° improbable/imaginario",
          "💡 'I wish I had...' también expresa deseos irreales como el segundo condicional"
        ],
        whenToUse: [
          "Para situaciones imaginarias: 'If I won the lottery, I would buy a house'",
          "Para dar consejos: 'If I were you, I would accept the job'",
          "Para expresar deseos irreales: 'I wish I had more time'",
          "En preguntas hipotéticas: 'What would you do if you lost your job?'"
        ],
        whenNotToUse: [
          "No uses 'I would' en la cláusula if: 'If I would have' ❌ → 'If I had' ✓",
          "No confundas con primer condicional: 2° es improbable/imaginario, 1° es probable"
        ]
      },
      objectives: ["Hablar de situaciones hipotéticas", "Dar consejos con 'If I were you'", "Expresar deseos irreales"],
      grammarTheoryIds: ["b1-second-conditional"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [
          { id: "l5t9_n1", word: "wish", translation: "deseo", type: "noun", definition: "something you want to happen", definitionEs: "algo que quieres que suceda", example: "I have a wish.", exampleEs: "Tengo un deseo.", related: [], difficulty: 1 },
          { id: "l5t9_n2", word: "dream", translation: "sueño", type: "noun", definition: "something you hope for", definitionEs: "algo que esperas", example: "My dream is to travel the world.", exampleEs: "Mi sueño es viajar por el mundo.", related: [], difficulty: 1 },
          { id: "l5t9_n3", word: "opportunity", translation: "oportunidad", type: "noun", definition: "a chance to do something", definitionEs: "una chance de hacer algo", example: "If I had the opportunity...", exampleEs: "Si tuviera la oportunidad...", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l5t9_v1", word: "imagine", translation: "imaginar", type: "verb", definition: "to picture in your mind", definitionEs: "visualizar en tu mente", example: "Imagine if you could fly.", exampleEs: "Imagina si pudieras volar.", related: ["imagination"], difficulty: 1 },
          { id: "l5t9_v2", word: "suppose", translation: "suponer", type: "verb", definition: "to assume something", definitionEs: "asumir algo", example: "Suppose you had a million dollars.", exampleEs: "Supón que tuvieras un millón de dólares.", related: [], difficulty: 2 },
          { id: "l5t9_v3", word: "pretend", translation: "fingir/pretender", type: "verb", definition: "to act as if something is true", definitionEs: "actuar como si algo fuera cierto", example: "Let's pretend we're rich.", exampleEs: "Finjamos que somos ricos.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l5t9_a1", word: "hypothetical", translation: "hipotético", type: "adjective", definition: "imaginary, not real", definitionEs: "imaginario, no real", example: "This is a hypothetical situation.", exampleEs: "Esta es una situación hipotética.", related: [], difficulty: 2 },
          { id: "l5t9_a2", word: "imaginary", translation: "imaginario", type: "adjective", definition: "existing only in the mind", definitionEs: "existiendo solo en la mente", example: "It's just an imaginary scenario.", exampleEs: "Es solo un escenario imaginario.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l5t9_e1", word: "If I were you...", translation: "Si yo fuera tú...", type: "expression", definition: "giving advice", definitionEs: "dando consejo", example: "If I were you, I'd apologize.", exampleEs: "Si yo fuera tú, pediría disculpas.", related: [], difficulty: 1 },
          { id: "l5t9_e2", word: "What would you do if...?", translation: "¿Qué harías si...?", type: "expression", definition: "asking about hypothetical actions", definitionEs: "preguntando sobre acciones hipotéticas", example: "What would you do if you could fly?", exampleEs: "¿Qué harías si pudieras volar?", related: [], difficulty: 1 },
          { id: "l5t9_e3", word: "I wish I could...", translation: "Desearía poder...", type: "expression", definition: "expressing a wish", definitionEs: "expresando un deseo", example: "I wish I could speak French.", exampleEs: "Desearía poder hablar francés.", related: [], difficulty: 1 },
          { id: "l5t9_e4", word: "If only...", translation: "Si tan solo...", type: "expression", definition: "expressing strong wish", definitionEs: "expresando deseo fuerte", example: "If only I had more time.", exampleEs: "Si tan solo tuviera más tiempo.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l5t9_cm1",
          wrong: "If I would have money, I would travel.",
          correct: "If I had money, I would travel.",
          explanation: "En la cláusula 'if', usa pasado simple, NO 'would'. 'Would' solo va en la cláusula resultado."
        },
        {
          id: "l5t9_cm2",
          wrong: "If I was you, I would accept.",
          correct: "If I were you, I would accept.",
          explanation: "Con 'I' y consejos, usa 'were' (subjuntivo): 'If I were you', aunque 'was' es común en habla informal."
        },
        {
          id: "l5t9_cm3",
          wrong: "If I won the lottery, I will buy a house.",
          correct: "If I won the lottery, I would buy a house.",
          explanation: "Segundo condicional usa 'would', no 'will'. 'Will' es para situaciones probables (primer condicional)."
        },
        {
          id: "l5t9_cm4",
          wrong: "What you would do if you were rich?",
          correct: "What would you do if you were rich?",
          explanation: "En preguntas, invierte 'would' y sujeto: 'What WOULD YOU do...?'"
        },
        {
          id: "l5t9_cm5",
          wrong: "I wish I can speak French.",
          correct: "I wish I could speak French.",
          explanation: "Después de 'wish' para deseos irreales, usa pasado: 'could', 'had', 'knew'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con la forma correcta del segundo condicional:",
          items: [
            { sentence: "If I ___ (be) rich, I ___ (buy) a yacht.", answer: "were/would buy", hint: "If + pasado, would + base" },
            { sentence: "If she ___ (have) more time, she ___ (learn) another language.", answer: "had/would learn", hint: "tuviera/aprendería" },
            { sentence: "What ___ you ___ (do) if you ___ (win) the lottery?", answer: "would/do/won", hint: "qué harías/ganaras" },
            { sentence: "If I ___ (be) you, I ___ (not accept) that offer.", answer: "were/wouldn't accept", hint: "Si yo fuera tú" },
            { sentence: "He ___ (travel) more if he ___ (not have) such a demanding job.", answer: "would travel/didn't have", hint: "viajaría/no tuviera" }
          ]
        },
        {
          type: "categorize",
          instruction: "Clasifica: ¿Primer o segundo condicional?",
          categories: [
            { name: "Primer Condicional (probable)", items: ["If it rains, I will stay home", "If you study, you will pass", "If she calls, I will answer", "If we leave now, we'll arrive on time"] },
            { name: "Segundo Condicional (improbable/hipotético)", items: ["If I won the lottery, I would travel", "If I were taller, I would play basketball", "If she had more money, she would buy a car", "If I could fly, I would visit every country"] }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma al segundo condicional:",
          items: [
            { original: "I don't have a car. I can't drive to work.", transformed: "If I had a car, I would drive to work." },
            { original: "She doesn't speak English. She can't get that job.", transformed: "If she spoke English, she could get that job." },
            { original: "I'm not rich. I can't buy a house.", transformed: "If I were rich, I would buy a house." },
            { original: "He works too much. He doesn't spend time with his family.", transformed: "If he didn't work so much, he would spend more time with his family." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con 'I wish...':",
          items: [
            { sentence: "I wish I ___ (speak) French fluently.", answer: "spoke", hint: "deseo irreal presente" },
            { sentence: "I wish I ___ (have) more free time.", answer: "had", hint: "deseo irreal" },
            { sentence: "I wish I ___ (can) play the piano.", answer: "could", hint: "pasado de 'can'" },
            { sentence: "I wish I ___ (not have to) work tomorrow.", answer: "didn't have to", hint: "deseo negativo" },
            { sentence: "She wishes she ___ (live) near the beach.", answer: "lived", hint: "tercera persona, mismo patrón" }
          ]
        }
      ],
      modelDialogue: {
        title: "Hablando de sueños y situaciones hipotéticas",
        dialogue: [
          { speaker: "Maria", text: "What would you do if you won the lottery?", translation: "¿Qué harías si ganaras la lotería?" },
          { speaker: "James", text: "Hmm, good question. If I won a lot of money, I would probably quit my job.", translation: "Hmm, buena pregunta. Si ganara mucho dinero, probablemente renunciaría a mi trabajo." },
          { speaker: "Maria", text: "Really? I don't think I would quit. I would get bored.", translation: "¿En serio? No creo que renunciaría. Me aburriría." },
          { speaker: "James", text: "Well, I wouldn't stop working completely. If I had enough money, I would start my own business.", translation: "Bueno, no dejaría de trabajar completamente. Si tuviera suficiente dinero, empezaría mi propio negocio." },
          { speaker: "Maria", text: "That's a great idea! What kind of business?", translation: "¡Esa es una gran idea! ¿Qué tipo de negocio?" },
          { speaker: "James", text: "If I could do anything, I would open a coffee shop. I've always dreamed of that.", translation: "Si pudiera hacer cualquier cosa, abriría una cafetería. Siempre he soñado con eso." },
          { speaker: "Maria", text: "That sounds wonderful. I wish I could do something like that.", translation: "Eso suena maravilloso. Desearía poder hacer algo así." },
          { speaker: "James", text: "You could! If you saved enough money, you could start a small business.", translation: "¡Podrías! Si ahorraras suficiente dinero, podrías empezar un pequeño negocio." },
          { speaker: "Maria", text: "You're right. If I didn't have so many expenses, I would save more.", translation: "Tienes razón. Si no tuviera tantos gastos, ahorraría más." },
          { speaker: "James", text: "If I were you, I would start with a budget and cut unnecessary spending.", translation: "Si yo fuera tú, empezaría con un presupuesto y cortaría gastos innecesarios." }
        ],
        keyPhrases: [
          "What would you do if...?",
          "If I won/had/could..., I would...",
          "I don't think I would...",
          "I wouldn't... completely",
          "If I could do anything, I would...",
          "I wish I could...",
          "If I were you, I would..."
        ]
      },
      pronunciationFocus: {
        title: "Contracciones en el segundo condicional",
        sounds: [
          { sound: "I'd /aɪd/", examples: ["I'd go", "I'd buy", "I'd travel"], tip: "'I'd' = 'I would', muy corto" },
          { sound: "wouldn't /ˈwʊdnt/", examples: ["I wouldn't", "she wouldn't"], tip: "La 'l' es muda" },
          { sound: "could've /ˈkʊdəv/", examples: ["could've been", "could've done"], tip: "No confundir con 'could of' (INCORRECTO)" }
        ],
        commonErrors: [
          { word: "I'd", wrong: "/ai-wud/", right: "/aɪd/", note: "Muy corto, suena como 'aid'" },
          { word: "wouldn't", wrong: "/wuld-not/", right: "/ˈwʊdnt/", note: "Una sílaba rápida" },
          { word: "were", wrong: "/wer/ (en 'were you')", right: "/wə/ (átono)", note: "En flujo natural, se reduce" }
        ]
      },
      culturalNote: {
        title: "Situaciones hipotéticas en conversaciones",
        content: "En inglés, hablar de situaciones hipotéticas es muy común en conversaciones casuales. Preguntas como 'What would you do if you won the lottery?' son populares para conocer a las personas. En entrevistas de trabajo, a menudo hacen preguntas hipotéticas: 'What would you do if a client complained?' - aquí debes dar una respuesta seria y profesional. También se usa para dar consejos indirectos: 'If I were you, I would...' es más educado que decir directamente 'You should...'",
        examples: [
          "'What would you do if...?' - pregunta casual común",
          "'If I were in your shoes...' - imaginándose en la situación de otro",
          "'Hypothetically speaking...' - introduciendo una situación imaginaria",
          "'That would never happen, but if it did...' - reconociendo lo improbable",
          "'Dream job' - trabajo ideal/soñado"
        ]
      },
      consolidationQuiz: [
        {
          question: "El segundo condicional se usa para:",
          options: ["situaciones probables", "situaciones hipotéticas/improbables", "el pasado", "promesas"],
          correctAnswer: 1,
          explanation: "El segundo condicional habla de situaciones irreales, imaginarias o improbables."
        },
        {
          question: "La estructura correcta es:",
          options: ["If + would + would", "If + present + would", "If + past simple + would", "If + past + will"],
          correctAnswer: 2,
          explanation: "Segundo condicional: If + pasado simple, ... would + verbo base."
        },
        {
          question: "Para dar consejos, usamos:",
          options: ["If I was you", "If I am you", "If I were you", "If I would be you"],
          correctAnswer: 2,
          explanation: "'If I were you' es la forma correcta (subjuntivo) para dar consejos."
        },
        {
          question: "'I wish I ___ speak Chinese':",
          options: ["can", "could", "will", "would"],
          correctAnswer: 1,
          explanation: "Después de 'wish' para deseos irreales presentes, usa pasado: 'could'."
        },
        {
          question: "'What ___ you do if you ___ the boss?'",
          options: ["will/are", "would/were", "will/were", "do/are"],
          correctAnswer: 1,
          explanation: "Pregunta en segundo condicional: 'What would you do if you were...?'"
        },
        {
          question: "¿Cuál es CORRECTA?",
          options: ["If I would have time, I would help", "If I had time, I would help", "If I have time, I would help", "If I had time, I will help"],
          correctAnswer: 1,
          explanation: "'If I had time, I would help' - pasado simple en if, would en resultado."
        }
      ],
      guidedProduction: [
        {
          task: "Soñar con el futuro",
          prompt: "Describe qué harías si tuvieras un millón de dólares.",
          sampleAnswer: "If I had a million dollars, I would first pay off all my debts. Then, I would buy a comfortable house for my family. I wouldn't quit my job completely, but I would work part-time. If I could, I would travel to at least ten different countries. I would also save some money for my children's education. If I still had money left over, I would invest it and donate some to charity.",
          hints: ["Usa 'If I had..., I would...'", "Varía: 'I would', 'I wouldn't', 'If I could'", "Menciona múltiples cosas que harías"]
        },
        {
          task: "Dar consejos a un amigo",
          prompt: "Un amigo tiene problemas en el trabajo. Dale consejos usando 'If I were you'.",
          sampleAnswer: "If I were you, I would talk to your manager about the situation. I wouldn't let things continue without addressing them. If I were in your position, I would document everything that happens. I would also look for other job opportunities, just in case. If I were you, I wouldn't make any hasty decisions though. I would think carefully before quitting. If you need support, I would talk to HR.",
          hints: ["Comienza varios consejos con 'If I were you, I would...'", "Usa 'I wouldn't' para cosas que no harías", "Varía con 'If I were in your position...'"]
        },
        {
          task: "Preguntas hipotéticas",
          prompt: "Escribe 5 preguntas hipotéticas interesantes y respóndelas.",
          sampleAnswer: "Q1: What would you do if you could be invisible for a day? A: If I could be invisible, I would visit places I've never been able to access.\n\nQ2: Where would you live if you could live anywhere? A: If I could live anywhere, I would choose Japan - I love the culture.\n\nQ3: What would you change if you could go back in time? A: If I could go back, I would study harder in school.\n\nQ4: What superpower would you choose if you could have any? A: If I could have any power, I would choose to fly.\n\nQ5: What would you do if you didn't have to work? A: If I didn't have to work, I would spend more time with my family and travel.",
          hints: ["Usa 'What would you do if...?'", "Responde con estructura completa", "Varía las preguntas: lugares, habilidades, tiempo"]
        },
        {
          task: "Expresar deseos con 'I wish'",
          prompt: "Escribe 5 oraciones expresando deseos sobre tu vida actual.",
          sampleAnswer: "I wish I had more free time. I work so much that I hardly see my friends. I wish I could travel more often - there are so many places I want to visit. I wish I spoke more languages; it would open so many doors. I wish I didn't have to commute every day; working from home would be perfect. I wish I could play a musical instrument - I've always wanted to learn the piano.",
          hints: ["Usa 'I wish I + pasado' (had, could, spoke)", "Explica por qué deseas cada cosa", "Varía: 'I wish I had', 'I wish I could', 'I wish I didn't have to'"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste vocabulario de salud. El segundo condicional te permite dar consejos: 'If I were you, I would see a doctor'.",
      connectionToNext: "En la siguiente lección aprenderás sobre entrevistas de trabajo, donde a menudo hacen preguntas hipotéticas: 'What would you do if...?'"
    },
    {
      id: 10,
      title: "Job Interviews",
      titleEs: "Entrevistas de Trabajo",
      introduction: {
        title: "💼 Entrevistas de Trabajo",
        explanation: "Las entrevistas de trabajo en inglés siguen patrones predecibles. Aprenderás las preguntas más comunes y cómo responderlas profesionalmente.",
        keyPoints: [
          "Preguntas comunes: 'Tell me about yourself', 'Why do you want this job?'",
          "Fortalezas/debilidades: 'My strength is...', 'I'm working on improving...'",
          "Experiencia: 'In my previous role, I...', 'I have experience in...'",
          "Preguntar al final: 'What are the next steps?', 'When can I expect to hear from you?'"
        ],
        examples: [
          { english: "I have five years of experience in marketing.", spanish: "Tengo cinco años de experiencia en marketing.", explanation: "Hablando de experiencia" },
          { english: "My greatest strength is my ability to work under pressure.", spanish: "Mi mayor fortaleza es mi capacidad de trabajar bajo presión.", explanation: "Describiendo fortaleza" },
          { english: "Where do you see yourself in five years?", spanish: "¿Dónde te ves en cinco años?", explanation: "Pregunta común" }
        ],
        tips: [
          "💡 Usa el método STAR para responder: Situation, Task, Action, Result",
          "💡 Convierte debilidades en positivos: 'I can be too detail-oriented'",
          "💡 Prepara preguntas para hacer: muestra interés genuino"
        ],
        whenToUse: [
          "Al presentarte: 'Tell me about yourself', 'I have five years of experience in...'",
          "Al hablar de fortalezas/debilidades: 'My strength is...', 'I'm working on improving...'",
          "Al describir experiencia: 'In my previous role, I...', 'I have experience in...'",
          "Al final de la entrevista: 'What are the next steps?', 'When can I expect to hear from you?'"
        ],
        whenNotToUse: [
          "No hables mal de empleadores anteriores → enfócate en lo que aprendiste",
          "No digas 'I don't have weaknesses' → usa 'I'm working on improving...'"
        ]
      },
      objectives: ["Responder preguntas de entrevista", "Hablar de fortalezas y debilidades", "Describir experiencia profesional"],
      grammarTheoryIds: ["b1-present-perfect-vs-past-simple", "b1-relative-clauses"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l5t10_n1", word: "interview", translation: "entrevista", type: "noun", definition: "a meeting to assess a candidate", definitionEs: "una reunión para evaluar un candidato", example: "I have a job interview tomorrow.", exampleEs: "Tengo una entrevista de trabajo mañana.", related: [], difficulty: 1 },
          { id: "l5t10_n2", word: "candidate", translation: "candidato", type: "noun", definition: "a person applying for a job", definitionEs: "una persona aplicando para un trabajo", example: "There are many candidates.", exampleEs: "Hay muchos candidatos.", related: [], difficulty: 1 },
          { id: "l5t10_n3", word: "strength", translation: "fortaleza", type: "noun", definition: "something you're good at", definitionEs: "algo en lo que eres bueno", example: "What are your strengths?", exampleEs: "¿Cuáles son tus fortalezas?", related: [], difficulty: 1 },
          { id: "l5t10_n4", word: "weakness", translation: "debilidad", type: "noun", definition: "something you need to improve", definitionEs: "algo que necesitas mejorar", example: "What's your biggest weakness?", exampleEs: "¿Cuál es tu mayor debilidad?", related: [], difficulty: 1 },
          { id: "l5t10_n5", word: "resume", translation: "currículum", type: "noun", definition: "a summary of your work history", definitionEs: "un resumen de tu historial laboral", example: "Please send your resume.", exampleEs: "Por favor envíe su currículum.", related: ["CV"], difficulty: 1 },
          { id: "l5t10_n6", word: "qualification", translation: "cualificación", type: "noun", definition: "skills or knowledge for a job", definitionEs: "habilidades o conocimiento para un trabajo", example: "What are the qualifications?", exampleEs: "¿Cuáles son las cualificaciones?", related: ["qualified"], difficulty: 2 },
          { id: "l5t10_n7", word: "salary", translation: "salario", type: "noun", definition: "money paid for work", definitionEs: "dinero pagado por trabajo", example: "What's the salary range?", exampleEs: "¿Cuál es el rango salarial?", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l5t10_v1", word: "hire", translation: "contratar", type: "verb", definition: "to give someone a job", definitionEs: "dar a alguien un trabajo", example: "They decided to hire me.", exampleEs: "Decidieron contratarme.", related: [], difficulty: 1 },
          { id: "l5t10_v2", word: "apply", translation: "aplicar/postular", type: "verb", definition: "to request a job officially", definitionEs: "solicitar un trabajo oficialmente", example: "I applied for the position.", exampleEs: "Apliqué para el puesto.", related: ["application"], difficulty: 1 },
          { id: "l5t10_v3", word: "qualify", translation: "calificar", type: "verb", definition: "to have the necessary skills", definitionEs: "tener las habilidades necesarias", example: "Do I qualify for this role?", exampleEs: "¿Califico para este rol?", related: ["qualification"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l5t10_a1", word: "experienced", translation: "experimentado", type: "adjective", definition: "having knowledge from doing", definitionEs: "teniendo conocimiento por hacer", example: "We need someone experienced.", exampleEs: "Necesitamos a alguien experimentado.", related: ["experience"], difficulty: 1 },
          { id: "l5t10_a2", word: "motivated", translation: "motivado", type: "adjective", definition: "wanting to achieve", definitionEs: "queriendo lograr", example: "I'm highly motivated.", exampleEs: "Estoy altamente motivado.", related: [], difficulty: 1 },
          { id: "l5t10_a3", word: "reliable", translation: "confiable", type: "adjective", definition: "can be trusted", definitionEs: "se puede confiar", example: "I'm a reliable worker.", exampleEs: "Soy un trabajador confiable.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l5t10_e1", word: "Tell me about yourself", translation: "Háblame de ti", type: "expression", definition: "opening interview question", definitionEs: "pregunta inicial de entrevista", example: "Tell me about yourself.", exampleEs: "Háblame de ti.", related: [], difficulty: 1 },
          { id: "l5t10_e2", word: "Why should we hire you?", translation: "¿Por qué deberíamos contratarte?", type: "expression", definition: "common interview question", definitionEs: "pregunta común de entrevista", example: "Why should we hire you?", exampleEs: "¿Por qué deberíamos contratarte?", related: [], difficulty: 1 },
          { id: "l5t10_e3", word: "In my previous role...", translation: "En mi rol anterior...", type: "expression", definition: "talking about experience", definitionEs: "hablando de experiencia", example: "In my previous role, I managed a team.", exampleEs: "En mi rol anterior, gestioné un equipo.", related: [], difficulty: 1 },
          { id: "l5t10_e4", word: "I'm looking forward to...", translation: "Espero con ansias...", type: "expression", definition: "expressing enthusiasm", definitionEs: "expresando entusiasmo", example: "I'm looking forward to this opportunity.", exampleEs: "Espero con ansias esta oportunidad.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l5t10_cm1",
          wrong: "I am a hard worker person.",
          correct: "I am a hard worker. / I am a hard-working person.",
          explanation: "'Hard worker' ya es sustantivo. O usa adjetivo 'hard-working' + 'person'."
        },
        {
          id: "l5t10_cm2",
          wrong: "My weakness is that I work too much hard.",
          correct: "My weakness is that I work too hard.",
          explanation: "'Too hard' (demasiado duro) - el adverbio 'hard' no cambia. No es 'much hard'."
        },
        {
          id: "l5t10_cm3",
          wrong: "I have 5 years experience.",
          correct: "I have 5 years OF experience. / I have 5 years' experience.",
          explanation: "Necesitas 'of' o el apóstrofo posesivo: '5 years' experience'."
        },
        {
          id: "l5t10_cm4",
          wrong: "I am interesting in this position.",
          correct: "I am interested in this position.",
          explanation: "'Interesting' = algo interesante. 'Interested' = tú sientes interés."
        },
        {
          id: "l5t10_cm5",
          wrong: "Why do you want to work here? - Because I need money.",
          correct: "Because I believe in your company's mission / I want to grow professionally.",
          explanation: "Aunque sea verdad, nunca digas que es solo por dinero. Enfócate en la empresa y crecimiento."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las respuestas de entrevista:",
          items: [
            { sentence: "I have five years ___ experience in marketing.", answer: "of", hint: "preposición" },
            { sentence: "In my ___ role, I managed a team of ten people.", answer: "previous", hint: "anterior" },
            { sentence: "I am very ___ in this opportunity.", answer: "interested", hint: "tengo interés" },
            { sentence: "My greatest ___ is my ability to work under pressure.", answer: "strength", hint: "fortaleza" },
            { sentence: "I'm looking ___ to hearing from you.", answer: "forward", hint: "espero con ansias" }
          ]
        },
        {
          type: "matching",
          instruction: "Une la pregunta con la respuesta apropiada:",
          pairs: [
            { term: "Tell me about yourself", match: "I have 5 years of experience in sales and I'm passionate about customer service" },
            { term: "What's your greatest weakness?", match: "I can be too detail-oriented, but I'm learning to balance quality with efficiency" },
            { term: "Why do you want this job?", match: "I'm excited about your company's innovative approach and I want to contribute to your growth" },
            { term: "Where do you see yourself in 5 years?", match: "I see myself in a leadership position, helping develop new team members" },
            { term: "Why should we hire you?", match: "I bring unique experience in project management and a proven track record of success" }
          ]
        },
        {
          type: "transformation",
          instruction: "Mejora estas respuestas débiles:",
          items: [
            { original: "I want this job because I need money.", transformed: "I want this job because I'm passionate about the industry and excited about your company's mission." },
            { original: "My weakness is that I'm bad at public speaking.", transformed: "My weakness is public speaking, but I've been taking courses to improve and have made significant progress." },
            { original: "I don't have any experience.", transformed: "While I don't have direct experience, I have transferable skills from... and I'm a quick learner." }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa usando el método STAR:",
          items: [
            { sentence: "SITUATION: In my previous job, we ___ a challenging project with a tight deadline.", answer: "had/faced", hint: "tuvimos/enfrentamos" },
            { sentence: "TASK: I ___ responsible for coordinating the team.", answer: "was", hint: "era" },
            { sentence: "ACTION: I ___ a new workflow system to improve efficiency.", answer: "implemented/created", hint: "implementé/creé" },
            { sentence: "RESULT: As a result, we ___ the project two days early.", answer: "finished/completed", hint: "terminamos" }
          ]
        }
      ],
      modelDialogue: {
        title: "Una entrevista de trabajo",
        dialogue: [
          { speaker: "Interviewer", text: "Thank you for coming in today. Please, tell me about yourself.", translation: "Gracias por venir hoy. Por favor, háblame de ti." },
          { speaker: "Candidate", text: "Thank you for having me. I'm a marketing professional with five years of experience in digital advertising. In my previous role at XYZ Company, I managed a team of four and increased our client retention by 30%.", translation: "Gracias por recibirme. Soy un profesional de marketing con cinco años de experiencia en publicidad digital. En mi rol anterior en XYZ Company, gestioné un equipo de cuatro y aumenté la retención de clientes en un 30%." },
          { speaker: "Interviewer", text: "Impressive. What would you say is your greatest strength?", translation: "Impresionante. ¿Cuál dirías que es tu mayor fortaleza?" },
          { speaker: "Candidate", text: "I would say my greatest strength is my ability to work well under pressure. I'm very organized and I stay calm when facing tight deadlines.", translation: "Diría que mi mayor fortaleza es mi capacidad de trabajar bien bajo presión. Soy muy organizado y mantengo la calma ante fechas límite ajustadas." },
          { speaker: "Interviewer", text: "And what about your weaknesses?", translation: "¿Y qué hay de tus debilidades?" },
          { speaker: "Candidate", text: "I can be too detail-oriented at times, which can slow me down. However, I've been working on finding a better balance between quality and efficiency.", translation: "Puedo ser demasiado detallista a veces, lo cual puede retrasarme. Sin embargo, he estado trabajando en encontrar un mejor equilibrio entre calidad y eficiencia." },
          { speaker: "Interviewer", text: "Why are you interested in this position?", translation: "¿Por qué estás interesado en este puesto?" },
          { speaker: "Candidate", text: "I'm excited about your company's innovative approach to marketing. I believe my experience and skills would be a great fit, and I'm looking forward to contributing to your team's success.", translation: "Me entusiasma el enfoque innovador de su empresa hacia el marketing. Creo que mi experiencia y habilidades serían una gran combinación, y espero contribuir al éxito de su equipo." },
          { speaker: "Interviewer", text: "Do you have any questions for us?", translation: "¿Tienes alguna pregunta para nosotros?" },
          { speaker: "Candidate", text: "Yes, I was wondering what the next steps in the interview process would be?", translation: "Sí, me preguntaba cuáles serían los siguientes pasos en el proceso de entrevista." }
        ],
        keyPhrases: [
          "Thank you for having me",
          "In my previous role...",
          "I managed a team of...",
          "My greatest strength is...",
          "I've been working on...",
          "I'm excited about...",
          "I'm looking forward to...",
          "What are the next steps?"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario de entrevistas",
        sounds: [
          { sound: "Strength /streŋθ/", examples: ["strength", "strengthen"], tip: "Termina con sonido 'th'" },
          { sound: "Weakness /ˈwiːknəs/", examples: ["weakness"], tip: "Acento en primera sílaba" },
          { sound: "Experience /ɪkˈspɪəriəns/", examples: ["experience", "experienced"], tip: "Acento en segunda sílaba" }
        ],
        commonErrors: [
          { word: "strength", wrong: "/estren/", right: "/streŋθ/", note: "Empieza con 'str', termina con 'ngth'" },
          { word: "interview", wrong: "/in-ter-viu/", right: "/ˈɪntəvjuː/", note: "Acento en primera sílaba" },
          { word: "experience", wrong: "/eks-pe-ri-ens/", right: "/ɪkˈspɪəriəns/", note: "La 'x' suena como /ks/" }
        ]
      },
      culturalNote: {
        title: "Entrevistas de trabajo en países anglosajones",
        content: "En EE.UU. y UK, las entrevistas suelen ser muy estructuradas. Llega 10-15 minutos antes. Da un apretón de manos firme y mantén contacto visual. 'Tell me about yourself' no es una invitación a hablar de tu vida personal - enfócate en tu experiencia profesional relevante (30-60 segundos). Siempre convierte debilidades en positivos: 'I'm a perfectionist' se ve como negativo ahora; mejor di algo real pero que estás mejorando. Siempre prepara preguntas para el final - no preguntar nada se ve mal. No preguntes sobre salario en la primera entrevista a menos que ellos lo mencionen.",
        examples: [
          "'Elevator pitch' - presentación de 30-60 segundos de ti mismo",
          "'Behavioral questions' - preguntas basadas en experiencias pasadas",
          "'STAR method' - Situation, Task, Action, Result",
          "'Culture fit' - encajar con la cultura de la empresa",
          "'Follow-up email' - email de agradecimiento después de la entrevista"
        ]
      },
      consolidationQuiz: [
        {
          question: "'I have 5 years ___ experience' se completa con:",
          options: ["in", "of", "with", "for"],
          correctAnswer: 1,
          explanation: "'Years OF experience' es la combinación correcta."
        },
        {
          question: "'I am ___ in this position' (tengo interés):",
          options: ["interesting", "interested", "interest", "interests"],
          correctAnswer: 1,
          explanation: "'Interested IN' = tener interés en algo. 'Interesting' = algo que genera interés."
        },
        {
          question: "El método STAR significa:",
          options: ["Start, Try, Act, Repeat", "Situation, Task, Action, Result", "Strength, Talent, Ability, Result", "Strategy, Tactics, Action, Review"],
          correctAnswer: 1,
          explanation: "STAR: Situation (contexto), Task (tu responsabilidad), Action (qué hiciste), Result (resultado)."
        },
        {
          question: "Una buena forma de presentar una debilidad es:",
          options: ["'I don't have weaknesses'", "'I work too hard'", "'I used to... but I'm improving by...'", "'I'm not good at anything'"],
          correctAnswer: 2,
          explanation: "Muestra autoconciencia y crecimiento: menciona una debilidad real y cómo la estás mejorando."
        },
        {
          question: "Al final de la entrevista, debes:",
          options: ["Preguntar sobre el salario inmediatamente", "No hacer preguntas", "Hacer preguntas sobre el rol o la empresa", "Pedir el trabajo directamente"],
          correctAnswer: 2,
          explanation: "Siempre prepara preguntas inteligentes - demuestra interés genuino en la empresa."
        },
        {
          question: "'In my previous role...' se usa para:",
          options: ["Hablar del futuro", "Describir experiencia pasada", "Pedir más información", "Rechazar una oferta"],
          correctAnswer: 1,
          explanation: "'In my previous role' introduce ejemplos de tu experiencia laboral pasada."
        }
      ],
      guidedProduction: [
        {
          task: "Presentación personal (elevator pitch)",
          prompt: "Escribe una introducción de 60 segundos de ti mismo para una entrevista.",
          sampleAnswer: "Thank you for meeting with me today. I'm a software developer with over three years of experience specializing in web applications. In my current role at TechCorp, I've led the development of several successful projects that increased user engagement by 40%. I'm particularly skilled in React and Node.js, and I'm passionate about creating clean, efficient code. I'm excited about this opportunity because your company is known for innovation, and I believe my problem-solving skills and technical expertise would be a great fit for your team.",
          hints: ["Mantén 30-60 segundos", "Menciona rol, experiencia y logros", "Conecta tu experiencia con el puesto"]
        },
        {
          task: "Responder sobre fortalezas y debilidades",
          prompt: "Escribe respuestas para 'What are your strengths?' y 'What are your weaknesses?'",
          sampleAnswer: "STRENGTHS: My greatest strength is my ability to work effectively under pressure. In my previous role, I often managed multiple projects simultaneously with tight deadlines. I stay organized, prioritize tasks well, and remain calm when challenges arise. I'm also a strong communicator, which helps me collaborate effectively with diverse teams.\n\nWEAKNESSES: I would say my weakness is that I can be too detail-oriented, which sometimes slows me down. I've been working on this by setting time limits for tasks and reminding myself that 'done is better than perfect' for certain tasks. This has helped me improve my efficiency while still maintaining quality.",
          hints: ["Da ejemplos específicos de fortalezas", "Para debilidades, menciona cómo estás mejorando", "Sé genuino pero estratégico"]
        },
        {
          task: "Respuesta método STAR",
          prompt: "Usa el método STAR para responder: 'Tell me about a time you faced a challenge at work.'",
          sampleAnswer: "SITUATION: In my previous job, our team suddenly lost two members just weeks before a major product launch. We were understaffed and the deadline couldn't be moved.\n\nTASK: As the project lead, I was responsible for ensuring we delivered on time despite having fewer resources.\n\nACTION: I immediately reorganized the workload, identified the most critical features, and proposed temporarily postponing non-essential elements. I also worked extended hours and coordinated daily stand-ups to track progress closely.\n\nRESULT: We successfully launched the product on time with all key features. The client was satisfied, and my manager praised our team's adaptability. I learned the importance of prioritization and clear communication under pressure.",
          hints: ["Estructura claramente cada parte: S-T-A-R", "Sé específico con detalles", "Enfócate en TU contribución y el resultado positivo"]
        },
        {
          task: "Preguntas para el entrevistador",
          prompt: "Escribe 5 preguntas inteligentes para hacer al final de una entrevista.",
          sampleAnswer: "1. What does a typical day look like for someone in this position?\n\n2. What are the biggest challenges the team is currently facing?\n\n3. How would you describe the company culture here?\n\n4. What opportunities for professional development does the company offer?\n\n5. What are the next steps in the interview process, and when can I expect to hear back?",
          hints: ["Pregunta sobre el rol, equipo, cultura", "Muestra interés en crecimiento profesional", "Siempre pregunta sobre los siguientes pasos"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste el segundo condicional, común en entrevistas: 'What would you do if a client complained?'. Ahora aprenderás a responder profesionalmente.",
      connectionToNext: "Has completado el nivel Upper-Intermediate. Continúa al siguiente nivel para aprender inglés más avanzado y especializado."
    },
  ]
};

export default level5;
