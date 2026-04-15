import type { Level } from '../../types';

export const level10: Level = {
  id: 10,
  name: "Expert+",
  cefrLevel: "C1+",
  description: "Innovación, análisis crítico y comunicación de alto impacto",
  totalTasks: 12,
  estimatedHours: 22,
  color: "#a78bfa",
  icon: "🔥",
  tasks: [
    {
      id: 1,
      title: "Innovation and Disruption",
      titleEs: "Innovación y Disrupción",
      introduction: {
        title: "🚀 Innovación y Disrupción",
        explanation: "Domina el lenguaje de la innovación tecnológica y la transformación digital. Este vocabulario es esencial en la economía moderna.",
        keyPoints: [
          "Tipos de innovación: 'incremental', 'radical', 'disruptive'",
          "Ecosistema: 'startup', 'scale-up', 'unicorn', 'pivot'",
          "Tendencias: 'AI', 'blockchain', 'IoT', 'machine learning'",
          "Modelos: 'subscription model', 'freemium', 'platform economy'",
          "Cultura: 'fail fast', 'minimum viable product (MVP)', 'iterate'"
        ],
        examples: [
          { english: "This startup is disrupting the traditional banking sector.", spanish: "Esta startup está disrumpiendo el sector bancario tradicional.", explanation: "Disrupción de industria" },
          { english: "We need to iterate on our MVP based on user feedback.", spanish: "Necesitamos iterar en nuestro MVP basándonos en la retroalimentación de usuarios.", explanation: "Desarrollo ágil" },
          { english: "The platform economy is reshaping how we think about ownership.", spanish: "La economía de plataformas está reconfigurando cómo pensamos sobre la propiedad.", explanation: "Tendencia económica" }
        ],
        tips: [
          "💡 'Disruptive' no es negativo en negocios - significa revolucionario",
          "💡 Un 'unicorn' es una startup valuada en más de $1 billion",
          "💡 'Pivot' viene del basketball - cambiar de dirección sin perder impulso"
        ],
        whenToUse: [
          "En presentaciones sobre tecnología, tendencias o nuevos modelos de negocio",
          "Al escribir artículos, blog posts o reports sobre innovación",
          "En entrevistas de trabajo en el sector tech/startup",
          "Discutiendo estrategia empresarial con stakeholders"
        ],
        whenNotToUse: [
          "No abuses de buzzwords como 'disrupt' y 'pivot' — úsalos solo cuando realmente apliquen",
          "Evita 'move fast and break things' en industrias reguladas como salud o finanzas",
          "No uses jerga de startup en contextos académicos formales — prefiere lenguaje neutral",
          "No llames 'startup' a cualquier negocio nuevo — implica innovación y escalabilidad"
        ]
      },
      objectives: ["Dominar vocabulario de innovación", "Discutir tendencias tecnológicas", "Hablar sobre modelos de negocio disruptivos"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-nominalization"],
      vocabulary: {
        nouns: [
          { id: "l10t1_n1", word: "disruption", translation: "disrupción", type: "noun", definition: "radical change in industry", definitionEs: "cambio radical en industria", example: "Digital disruption is everywhere.", exampleEs: "La disrupción digital está en todas partes.", related: ["disrupt", "disruptive"], difficulty: 2 },
          { id: "l10t1_n2", word: "startup", translation: "startup/empresa emergente", type: "noun", definition: "new innovative company", definitionEs: "nueva empresa innovadora", example: "She works at a tech startup.", exampleEs: "Ella trabaja en una startup de tecnología.", related: [], difficulty: 1 },
          { id: "l10t1_n3", word: "unicorn", translation: "unicornio", type: "noun", definition: "startup valued over $1B", definitionEs: "startup valuada en más de $1B", example: "They became a unicorn last year.", exampleEs: "Se convirtieron en unicornio el año pasado.", related: [], difficulty: 2 },
          { id: "l10t1_n4", word: "MVP (Minimum Viable Product)", translation: "producto mínimo viable", type: "noun", definition: "basic version of product", definitionEs: "versión básica del producto", example: "Let's launch the MVP first.", exampleEs: "Lancemos el MVP primero.", related: [], difficulty: 2 },
          { id: "l10t1_n5", word: "ecosystem", translation: "ecosistema", type: "noun", definition: "interconnected business environment", definitionEs: "ambiente de negocios interconectado", example: "We're part of a larger ecosystem.", exampleEs: "Somos parte de un ecosistema más grande.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l10t1_v1", word: "disrupt", translation: "disrumpir", type: "verb", definition: "to radically change", definitionEs: "cambiar radicalmente", example: "Technology is disrupting every industry.", exampleEs: "La tecnología está disrumpiendo cada industria.", related: [], difficulty: 2 },
          { id: "l10t1_v2", word: "iterate", translation: "iterar", type: "verb", definition: "to improve repeatedly", definitionEs: "mejorar repetidamente", example: "We continue to iterate on the design.", exampleEs: "Continuamos iterando en el diseño.", related: ["iteration"], difficulty: 2 },
          { id: "l10t1_v3", word: "pivot", translation: "pivotar", type: "verb", definition: "to change strategy", definitionEs: "cambiar estrategia", example: "The company decided to pivot.", exampleEs: "La empresa decidió pivotar.", related: [], difficulty: 2 },
          { id: "l10t1_v4", word: "scale", translation: "escalar", type: "verb", definition: "to grow rapidly", definitionEs: "crecer rápidamente", example: "How do we scale this solution?", exampleEs: "¿Cómo escalamos esta solución?", related: ["scalable"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l10t1_a1", word: "disruptive", translation: "disruptivo", type: "adjective", definition: "causing major change", definitionEs: "causando cambio mayor", example: "It's a disruptive technology.", exampleEs: "Es una tecnología disruptiva.", related: [], difficulty: 2 },
          { id: "l10t1_a2", word: "agile", translation: "ágil", type: "adjective", definition: "flexible and adaptive", definitionEs: "flexible y adaptativo", example: "We use agile methodology.", exampleEs: "Usamos metodología ágil.", related: [], difficulty: 1 },
          { id: "l10t1_a3", word: "scalable", translation: "escalable", type: "adjective", definition: "able to grow", definitionEs: "capaz de crecer", example: "Is this solution scalable?", exampleEs: "¿Es escalable esta solución?", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l10t1_e1", word: "fail fast", translation: "fallar rápido", type: "expression", definition: "learn quickly from mistakes", definitionEs: "aprender rápido de errores", example: "Our philosophy is to fail fast and learn.", exampleEs: "Nuestra filosofía es fallar rápido y aprender.", related: [], difficulty: 2 },
          { id: "l10t1_e2", word: "move fast and break things", translation: "muévete rápido y rompe cosas", type: "expression", definition: "prioritize speed over perfection", definitionEs: "priorizar velocidad sobre perfección", example: "In startups, we move fast and break things.", exampleEs: "En startups, nos movemos rápido y rompemos cosas.", related: [], difficulty: 2 },
          { id: "l10t1_e3", word: "first-mover advantage", translation: "ventaja del primero en moverse", type: "expression", definition: "benefit of being first", definitionEs: "beneficio de ser primero", example: "We want the first-mover advantage.", exampleEs: "Queremos la ventaja del primero en moverse.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t1_cm1", wrong: "Using 'disruptive' negatively ('The meeting was disruptive')", correct: "In business, 'disruptive' is positive: 'disruptive innovation', 'disruptive technology'", explanation: "In business, 'disruptive' means revolutionary/innovative, not annoying", explanationEs: "En negocios, 'disruptive' significa revolucionario/innovador, no molesto", category: "vocabulary" },
        { id: "l10t1_cm2", wrong: "Confusing 'pivot' with failure", correct: "'Pivot' is a strategic shift, not giving up: 'We pivoted from B2C to B2B'", explanation: "To pivot is to change direction strategically, based on learning", explanationEs: "Pivotar es cambiar de dirección estratégicamente, basado en aprendizaje", category: "vocabulary" },
        { id: "l10t1_cm3", wrong: "'Startup' for any small business", correct: "'Startup' implies innovation and rapid growth potential, not just being new/small", explanation: "A new shop is not a startup; a tech company with a scalable model is", explanationEs: "Una tienda nueva no es startup; una empresa tech con modelo escalable, sí", category: "vocabulary" },
        { id: "l10t1_cm4", wrong: "'Scale' as synonym for 'grow'", correct: "'Scale' means grow rapidly while maintaining efficiency: 'This model scales'", explanation: "'Scale' implies exponential growth without proportional cost increase", explanationEs: "'Scale' implica crecimiento exponencial sin aumento proporcional de costos", category: "vocabulary" },
        { id: "l10t1_cm5", wrong: "'MVP' as 'minimum product'", correct: "'MVP' is minimum VIABLE product - must deliver value, just not full features", explanation: "MVP must be functional and valuable, with only minimum features to validate", explanationEs: "MVP debe ser funcional y valioso, solo con features mínimos para validar", category: "vocabulary" }
      ],
      exercises: [
        {
          type: "matching",
          instruction: "Empareja el término de innovación con su definición",
          items: [
            { term: "Unicorn", definition: "Startup valued at over $1 billion" },
            { term: "Pivot", definition: "Strategic change in direction" },
            { term: "MVP", definition: "Basic version to test market" },
            { term: "Scale-up", definition: "Startup in rapid growth phase" },
            { term: "Ecosystem", definition: "Interconnected business environment" },
            { term: "Freemium", definition: "Free basic + paid premium model" }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa con vocabulario de innovación",
          items: [
            { sentence: "Uber _____ the traditional taxi industry.", answer: "disrupted", hint: "cambió radicalmente" },
            { sentence: "We need to _____ quickly based on user feedback.", answer: "iterate", hint: "mejorar repetidamente" },
            { sentence: "The startup became a _____ after reaching $1B valuation.", answer: "unicorn", hint: "criatura mítica" },
            { sentence: "Our philosophy is to fail _____ and learn from mistakes.", answer: "fast", hint: "rápido" },
            { sentence: "Is this solution _____? Can we grow it 10x?", answer: "scalable", hint: "capaz de crecer" },
            { sentence: "Let's launch the _____ and see if there's market demand.", answer: "MVP", hint: "producto mínimo viable" }
          ]
        },
        {
          type: "situational",
          instruction: "¿Qué dirías en estas situaciones de startup?",
          items: [
            {
              situation: "Your original product idea isn't getting traction",
              weak: "Our product failed. We should give up.",
              strong: "The data suggests we need to pivot. Customer feedback points to a different use case we should explore.",
              explanation: "Pivotar es aprender, no fracasar"
            },
            {
              situation: "Explaining your business model to investors",
              weak: "We have a website where people can buy things.",
              strong: "We're building a platform economy model that connects buyers and sellers, with a freemium tier to drive adoption and premium features for monetization.",
              explanation: "Usa vocabulario de innovación para credibilidad"
            },
            {
              situation: "Deciding whether to add more features before launch",
              weak: "We need to finish everything before we launch.",
              strong: "Let's launch the MVP now and iterate based on real user feedback. Fail fast, learn fast.",
              explanation: "La filosofía lean startup prioriza aprendizaje"
            }
          ]
        },
        {
          type: "transformation",
          instruction: "Convierte estas descripciones aburridas en lenguaje de innovación",
          items: [
            {
              boring: "Our company changed what it sells.",
              innovative: "We pivoted from a product-centric to a service-centric model.",
              improvement: "Usa 'pivot' y lenguaje específico"
            },
            {
              boring: "We grew our business quickly.",
              innovative: "We scaled rapidly, achieving 10x growth in 18 months through our platform model.",
              improvement: "Cuantifica y menciona el modelo"
            },
            {
              boring: "We tried something new in the market.",
              innovative: "We disrupted the traditional industry with an agile, tech-first approach.",
              improvement: "Usa 'disrupt', 'agile', 'tech-first'"
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Pitch a inversores",
        context: "Fundador presenta su startup a venture capitalists",
        dialogue: [
          { speaker: "Founder", text: "We're disrupting the $50B logistics industry with an AI-powered platform.", translation: "Estamos disrumpiendo la industria de logística de $50B con una plataforma impulsada por IA." },
          { speaker: "VC", text: "Interesting. What's your traction so far?", translation: "Interesante. ¿Cuál es su tracción hasta ahora?" },
          { speaker: "Founder", text: "We launched our MVP six months ago. We've iterated three times based on customer feedback, and we're now seeing 40% month-over-month growth.", translation: "Lanzamos nuestro MVP hace seis meses. Hemos iterado tres veces basándonos en feedback de clientes, y ahora vemos 40% de crecimiento mes a mes." },
          { speaker: "VC", text: "Have you had to pivot at all?", translation: "¿Han tenido que pivotar?" },
          { speaker: "Founder", text: "Actually, yes. We started as a B2C app but pivoted to B2B SaaS after discovering that enterprises were our power users. That pivot gave us a scalable, recurring revenue model.", translation: "De hecho, sí. Empezamos como app B2C pero pivotamos a SaaS B2B después de descubrir que las empresas eran nuestros usuarios principales. Ese pivot nos dio un modelo de ingresos recurrentes y escalable." },
          { speaker: "VC", text: "What's your path to becoming a unicorn?", translation: "¿Cuál es su camino para convertirse en unicornio?" },
          { speaker: "Founder", text: "We're focusing on first-mover advantage in three untapped markets. Our platform scales efficiently—we can 10x revenue without 10x costs. With this round, we become a scale-up with a clear path to $1B valuation.", translation: "Nos enfocamos en la ventaja del primero en moverse en tres mercados sin explotar. Nuestra plataforma escala eficientemente—podemos 10x ingresos sin 10x costos. Con esta ronda, nos convertimos en scale-up con camino claro a valuación de $1B." }
        ],
        keyPhrases: [
          { phrase: "disrupt the industry", translation: "disrumpir la industria", usage: "Describir innovación radical" },
          { phrase: "launched our MVP", translation: "lanzamos nuestro MVP", usage: "Producto inicial" },
          { phrase: "iterated based on feedback", translation: "iteramos basándonos en feedback", usage: "Mejora continua" },
          { phrase: "pivot to B2B", translation: "pivotar a B2B", usage: "Cambio estratégico" },
          { phrase: "scalable model", translation: "modelo escalable", usage: "Potencial de crecimiento" },
          { phrase: "first-mover advantage", translation: "ventaja del primero", usage: "Beneficio de ser pionero" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "disruptive", wrong: "dis-RUP-tive", correct: "/dɪsˈrʌp.tɪv/", tip: "dis-RUP-tiv, énfasis en RUP" },
          { word: "iterate", wrong: "i-te-RATE", correct: "/ˈɪt.ər.eɪt/", tip: "IT-uh-rate, énfasis en IT" },
          { word: "viable", wrong: "vi-A-ble", correct: "/ˈvaɪ.ə.bəl/", tip: "VIE-uh-bul, tres sílabas" }
        ],
        intonationPatterns: [
          { pattern: "Rising excitement for opportunities", example: "This could disrupt↗ the entire industry↗!", meaning: "Entusiasmo por potencial" },
          { pattern: "Confident falling tone for facts", example: "We've achieved 10x growth↘", meaning: "Seguridad en logros" }
        ]
      },
      culturalNote: {
        title: "Silicon Valley Culture",
        titleEs: "Cultura de Silicon Valley",
        content: "El vocabulario de innovación viene principalmente de Silicon Valley y la cultura startup estadounidense. Términos como 'fail fast', 'pivot' y 'disrupt' reflejan una mentalidad de riesgo y experimentación. En culturas más conservadoras, este lenguaje puede parecer demasiado informal o arriesgado. Adapta tu lenguaje según la audiencia: con inversores tech, úsalo libremente; con bancos tradicionales, puede ser mejor un enfoque más conservador.\n\nBritish vs American business etiquette: En contextos británicos, la formalidad se mantiene más tiempo; el tuteo puede esperar hasta una invitación explícita. Los americanos suelen ser más informales desde el inicio. La puntualidad también difiere: en UK, llegar tarde rara vez es aceptable; en EE.UU., especialmente en tech, hay más flexibilidad. Adapta tu enfoque según la región.",
        contentEs: "El vocabulario de innovación viene de Silicon Valley. Adapta según tu audiencia: inversores tech vs. instituciones tradicionales. Etiqueta empresarial: británicos más formales; americanos más informales.",
        region: "UK, US"
      },
      consolidationQuiz: [
        {
          question: "¿Qué es un 'unicorn' en el contexto de startups?",
          options: [
            "Una empresa muy antigua",
            "Una startup valuada en más de $1 billón",
            "Una empresa sin competencia",
            "Un producto único"
          ],
          correctAnswer: 1,
          explanation: "Un 'unicorn' es una startup privada con valuación de $1B+"
        },
        {
          question: "¿Qué significa 'pivot' en startups?",
          options: [
            "Fracasar y cerrar",
            "Cambiar de dirección estratégica basándose en aprendizaje",
            "Vender la empresa",
            "Contratar más empleados"
          ],
          correctAnswer: 1,
          explanation: "'Pivot' es un cambio estratégico, no un fracaso"
        },
        {
          question: "'MVP' significa:",
          options: [
            "Most Valuable Product",
            "Minimum Viable Product",
            "Maximum Value Proposition",
            "Market Validation Process"
          ],
          correctAnswer: 1,
          explanation: "MVP = Minimum Viable Product, versión básica para validar mercado"
        },
        {
          question: "¿Cuándo se usa 'disruptive' positivamente?",
          options: [
            "Cuando algo interrumpe una reunión",
            "Cuando una innovación cambia radicalmente una industria",
            "Cuando hay problemas técnicos",
            "Cuando un empleado es difícil"
          ],
          correctAnswer: 1,
          explanation: "En negocios, 'disruptive' = innovación revolucionaria"
        },
        {
          question: "¿Qué implica 'scalable'?",
          options: [
            "Que se puede vender",
            "Que puede crecer rápidamente manteniendo eficiencia",
            "Que es pequeño",
            "Que tiene muchos empleados"
          ],
          correctAnswer: 1,
          explanation: "'Scalable' = crecer sin aumento proporcional de costos"
        },
        {
          question: "'Fail fast' significa:",
          options: [
            "Fracasar completamente",
            "Aprender rápidamente de errores pequeños antes de invertir más",
            "Renunciar al primer problema",
            "Trabajar rápido sin importar errores"
          ],
          correctAnswer: 1,
          explanation: "Fail fast = validar hipótesis rápido, aprender de errores temprano"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un pitch de 1 minuto para una startup ficticia",
          sampleResponse: "We're disrupting the $200B real estate industry with an AI-powered platform that matches buyers with their perfect home in minutes, not months.\n\nWe launched our MVP eight months ago and have iterated five times based on user feedback. The result? 50,000 active users and 200% quarter-over-quarter growth.\n\nOur platform is built to scale. We can onboard 100x more users without increasing our team size, thanks to our automation-first approach.\n\nWe pivoted early from a traditional listing model to a personalization engine—that pivot tripled our conversion rate.\n\nWith this $5M Series A, we'll capture first-mover advantage in three untapped markets and position ourselves as the category leader. Our path to unicorn status is clear: expand, iterate, dominate."
        },
        {
          prompt: "Explica por qué tu empresa decidió pivotar",
          sampleResponse: "When we launched, we were focused on individual consumers—a B2C model. Our MVP got decent traction, but the data told a different story. Enterprise users, who found us organically, had 10x higher retention and 5x higher lifetime value.\n\nSo we made the decision to pivot to B2B SaaS. It wasn't easy—we had to iterate on our entire product and rebuild our sales process. But the results speak for themselves.\n\nIn the six months since our pivot, we've scaled from 50 to 500 enterprise clients. Our ARR has grown 400%, and our unit economics are now sustainable.\n\nThe lesson? Fail fast, learn fast. Our early B2C experiment wasn't a failure—it was a learning opportunity that led us to a much more scalable business model."
        },
        {
          prompt: "Describe las tendencias de innovación en tu industria",
          sampleResponse: "The financial services industry is experiencing massive disruption. Traditional banks are being challenged by agile fintech startups that can iterate faster and deliver better user experiences.\n\nSeveral trends are shaping the landscape:\n\nFirst, embedded finance—financial services integrated into non-financial platforms. Buy Now Pay Later is just the beginning.\n\nSecond, the platform economy is reshaping how we think about banking. Instead of owning everything, banks are becoming orchestrators of ecosystems.\n\nThird, AI and machine learning are enabling hyper-personalization at scale. What used to require an army of analysts can now be done automatically.\n\nCompanies that fail to adapt will be disrupted. Those that embrace an agile, tech-first approach will capture the first-mover advantage in this $10T market transformation."
        },
        {
          prompt: "Convence a tu jefe tradicional de adoptar metodología agile",
          sampleResponse: "I understand the hesitation about adopting agile methodology. It sounds like startup jargon. But let me share some data.\n\nCompanies using agile approaches ship 30% faster and have 50% fewer critical bugs. Why? Because instead of planning for a year and hoping we get it right, we iterate continuously based on real feedback.\n\nThe concept of MVP applies to us too. Instead of spending months building the 'perfect' solution that might miss the mark, we can launch a minimum viable version, test it with users, and improve from there. Fail fast, learn fast.\n\nI'm not suggesting we 'move fast and break things'—that's for startups with high risk tolerance. But we can adopt the principles: shorter cycles, continuous feedback, willingness to pivot when the data tells us to.\n\nOur competitors are already doing this. If we don't adapt, we risk being disrupted. I'd rather we be the disruptors."
        }
      ],
      connectionToPrevious: "El vocabulario de innovación usa muchos conectores avanzados que aprendiste en Level 9.",
      connectionToNext: "El análisis crítico te ayudará a evaluar claims de innovación y 'disruption' en el mercado."
    },
    {
      id: 2,
      title: "Critical Analysis Language",
      titleEs: "Lenguaje de Análisis Crítico",
      introduction: {
        title: "🔍 Análisis Crítico",
        explanation: "El análisis crítico requiere precisión lingüística. Aprenderás a evaluar, cuestionar y argumentar con rigor intelectual.",
        keyPoints: [
          "Evaluar argumentos: 'The argument rests on...', 'The premise is flawed'",
          "Identificar sesgos: 'This overlooks...', 'There's an inherent bias toward...'",
          "Lógica: 'correlation vs causation', 'logical fallacy', 'false dichotomy'",
          "Evidencia: 'The evidence is compelling/inconclusive', 'anecdotal evidence'",
          "Síntesis: 'Taking all factors into account...', 'On balance...'"
        ],
        examples: [
          { english: "The argument rests on the assumption that correlation implies causation.", spanish: "El argumento se basa en la suposición de que la correlación implica causalidad.", explanation: "Identificando premisa falsa" },
          { english: "While the data is compelling, the methodology is questionable.", spanish: "Aunque los datos son convincentes, la metodología es cuestionable.", explanation: "Evaluación balanceada" },
          { english: "This analysis overlooks several critical variables.", spanish: "Este análisis pasa por alto varias variables críticas.", explanation: "Señalando omisiones" }
        ],
        tips: [
          "💡 'Correlation does not imply causation' es fundamental",
          "💡 'Anecdotal evidence' tiene poco peso científico",
          "💡 Un 'straw man argument' tergiversa la posición del otro"
        ],
        whenToUse: [
          "En papers académicos: \"The argument rests on the assumption that correlation implies causation\"",
          "En revisiones de propuestas: \"While the data is compelling, the methodology is questionable\"",
          "En debates de política basada en evidencia: \"This analysis overlooks several critical variables\"",
          "En evaluaciones de due diligence: \"Taking all factors into account, we should proceed\""
        ],
        whenNotToUse: [
          "En conversaciones casuales → suena pedante: evita \"the premise is flawed\" con amigos",
          "En emails de feedback rápido → demasiado formal: usa \"I'm not convinced because...\"",
          "Cuando atacas a la persona → usa \"The argument overlooks...\" no \"You're wrong because...\""
        ]
      },
      objectives: ["Evaluar argumentos críticamente", "Identificar falacias lógicas", "Expresar análisis balanceados"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c1-hedging", "c1-cleft-sentences"],
      vocabulary: {
        nouns: [
          { id: "l10t2_n1", word: "premise", translation: "premisa", type: "noun", definition: "a statement assumed to be true", definitionEs: "una afirmación asumida como verdadera", example: "The premise is flawed.", exampleEs: "La premisa es defectuosa.", related: [], difficulty: 2 },
          { id: "l10t2_n2", word: "fallacy", translation: "falacia", type: "noun", definition: "a mistake in reasoning", definitionEs: "un error en el razonamiento", example: "That's a logical fallacy.", exampleEs: "Esa es una falacia lógica.", related: [], difficulty: 2 },
          { id: "l10t2_n3", word: "bias", translation: "sesgo", type: "noun", definition: "prejudice toward something", definitionEs: "prejuicio hacia algo", example: "There's a bias in the data.", exampleEs: "Hay un sesgo en los datos.", related: ["biased"], difficulty: 2 },
          { id: "l10t2_n4", word: "correlation", translation: "correlación", type: "noun", definition: "relationship between things", definitionEs: "relación entre cosas", example: "Correlation doesn't imply causation.", exampleEs: "La correlación no implica causalidad.", related: [], difficulty: 2 },
          { id: "l10t2_n5", word: "causation", translation: "causalidad", type: "noun", definition: "causing something", definitionEs: "causar algo", example: "We need to prove causation.", exampleEs: "Necesitamos probar causalidad.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l10t2_v1", word: "overlook", translation: "pasar por alto", type: "verb", definition: "to fail to notice", definitionEs: "no notar", example: "The analysis overlooks key factors.", exampleEs: "El análisis pasa por alto factores clave.", related: [], difficulty: 1 },
          { id: "l10t2_v2", word: "substantiate", translation: "fundamentar", type: "verb", definition: "to provide evidence", definitionEs: "proveer evidencia", example: "Can you substantiate that claim?", exampleEs: "¿Puedes fundamentar esa afirmación?", related: [], difficulty: 2 },
          { id: "l10t2_v3", word: "refute", translation: "refutar", type: "verb", definition: "to prove wrong", definitionEs: "probar que está mal", example: "I can refute that argument.", exampleEs: "Puedo refutar ese argumento.", related: [], difficulty: 2 },
          { id: "l10t2_v4", word: "scrutinize", translation: "escudriñar", type: "verb", definition: "to examine closely", definitionEs: "examinar de cerca", example: "We need to scrutinize the data.", exampleEs: "Necesitamos escudriñar los datos.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l10t2_a1", word: "flawed", translation: "defectuoso", type: "adjective", definition: "having errors", definitionEs: "teniendo errores", example: "The methodology is flawed.", exampleEs: "La metodología es defectuosa.", related: [], difficulty: 2 },
          { id: "l10t2_a2", word: "compelling", translation: "convincente", type: "adjective", definition: "very persuasive", definitionEs: "muy persuasivo", example: "The evidence is compelling.", exampleEs: "La evidencia es convincente.", related: [], difficulty: 2 },
          { id: "l10t2_a3", word: "inconclusive", translation: "inconcluso", type: "adjective", definition: "not definitive", definitionEs: "no definitivo", example: "The results are inconclusive.", exampleEs: "Los resultados son inconclusos.", related: [], difficulty: 2 },
          { id: "l10t2_a4", word: "anecdotal", translation: "anecdótico", type: "adjective", definition: "based on personal stories", definitionEs: "basado en historias personales", example: "That's just anecdotal evidence.", exampleEs: "Eso es solo evidencia anecdótica.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l10t2_e1", word: "The argument rests on...", translation: "El argumento se basa en...", type: "expression", definition: "identifying foundation", definitionEs: "identificando fundamento", example: "The argument rests on faulty assumptions.", exampleEs: "El argumento se basa en suposiciones defectuosas.", related: [], difficulty: 2 },
          { id: "l10t2_e2", word: "On balance...", translation: "En general...", type: "expression", definition: "after considering everything", definitionEs: "después de considerar todo", example: "On balance, the benefits outweigh the risks.", exampleEs: "En general, los beneficios superan los riesgos.", related: [], difficulty: 1 },
          { id: "l10t2_e3", word: "Taking all factors into account...", translation: "Tomando en cuenta todos los factores...", type: "expression", definition: "comprehensive conclusion", definitionEs: "conclusión comprensiva", example: "Taking all factors into account, we should proceed.", exampleEs: "Tomando en cuenta todos los factores, deberíamos proceder.", related: [], difficulty: 1 },
          { id: "l10t2_e4", word: "Correlation does not imply causation", translation: "La correlación no implica causalidad", type: "expression", definition: "critical thinking principle", definitionEs: "principio de pensamiento crítico", example: "Remember: correlation does not imply causation.", exampleEs: "Recuerda: la correlación no implica causalidad.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t2_cm1", wrong: "Correlation = causation ('Sales increased when we changed the logo, so the logo caused the increase')", correct: "Correlation doesn't imply causation. Other factors may explain both.", explanation: "Two things can correlate without one causing the other", explanationEs: "Dos cosas pueden correlacionarse sin que una cause la otra", category: "usage" },
        { id: "l10t2_cm2", wrong: "Using 'prove' for weak evidence", correct: "'Suggest', 'indicate', 'support' are more accurate for most evidence", explanation: "Reserve 'prove' for irrefutable evidence; most evidence 'suggests'", explanationEs: "Reserva 'prove' para evidencia irrefutable; la mayoría de evidencia 'sugiere'", category: "grammar" },
        { id: "l10t2_cm3", wrong: "Attacking the person instead of the argument (ad hominem)", correct: "Focus on the logic and evidence: 'The argument overlooks...' not 'He's wrong because...'", explanation: "Criticize the argument, not the person", explanationEs: "Critica el argumento, no a la persona", category: "usage" },
        { id: "l10t2_cm4", wrong: "False dichotomy ('Either we do X or we fail')", correct: "Recognize multiple options: 'While X is one approach, we could also consider Y and Z'", explanation: "There are rarely only two options; identify alternatives", explanationEs: "Raramente hay solo dos opciones; identifica alternativas", category: "usage" },
        { id: "l10t2_cm5", wrong: "Anecdotal evidence as proof ('My friend tried it and it worked')", correct: "'Anecdotal evidence suggests... but systematic research is needed'", explanation: "A personal story is not scientific evidence", explanationEs: "Una historia personal no es evidencia científica", category: "usage" }
      ],
      exercises: [
        {
          type: "identification",
          instruction: "Identifica la falacia lógica en cada argumento",
          items: [
            {
              argument: "Everyone is buying this product, so it must be good.",
              fallacy: "Appeal to popularity (argumentum ad populum)",
              explanation: "La popularidad no garantiza calidad"
            },
            {
              argument: "You can't trust his research on climate change—he drives a gas car.",
              fallacy: "Ad hominem",
              explanation: "Ataca a la persona, no al argumento"
            },
            {
              argument: "Either we cut costs or the company fails.",
              fallacy: "False dichotomy",
              explanation: "Ignora otras opciones como aumentar ingresos"
            },
            {
              argument: "Ice cream sales and drowning deaths both increase in summer, so ice cream causes drowning.",
              fallacy: "Correlation vs causation",
              explanation: "Ambos aumentan por el calor, no por relación causal"
            }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa con vocabulario de análisis crítico",
          items: [
            { sentence: "The _____ of the argument is flawed.", answer: "premise", hint: "base/fundamento" },
            { sentence: "This analysis _____ several important variables.", answer: "overlooks", hint: "ignora" },
            { sentence: "Can you _____ that claim with evidence?", answer: "substantiate", hint: "fundamentar" },
            { sentence: "The results are _____ and need further investigation.", answer: "inconclusive", hint: "no definitivos" },
            { sentence: "That's just _____ evidence, not systematic research.", answer: "anecdotal", hint: "basado en historias" },
            { sentence: "_____ does not imply causation.", answer: "Correlation", hint: "relación estadística" }
          ]
        },
        {
          type: "transformation",
          instruction: "Convierte estas afirmaciones débiles en análisis crítico",
          items: [
            {
              weak: "This is obviously true.",
              critical: "The evidence appears to support this conclusion, though alternative interpretations exist.",
              improvement: "Reconoce limitaciones y alternativas"
            },
            {
              weak: "The study proves that X causes Y.",
              critical: "The study demonstrates a strong correlation between X and Y, suggesting a potential causal relationship.",
              improvement: "'Suggests' y 'correlation' son más precisos"
            },
            {
              weak: "Everyone knows this is right.",
              critical: "This view is widely held; however, it warrants scrutiny given recent contradictory findings.",
              improvement: "Popularidad ≠ verdad; examina críticamente"
            }
          ]
        },
        {
          type: "analysis",
          instruction: "Analiza críticamente este argumento",
          argument: "Our new training program increased sales by 20%. The data clearly shows the program works.",
          questions: [
            "What unstated assumptions does this argument make?",
            "What alternative explanations could account for the sales increase?",
            "What additional evidence would strengthen or weaken this claim?",
            "Is the 20% increase statistically significant?"
          ],
          sampleAnalysis: "The argument rests on the assumption that the training program is the sole cause of the sales increase. However, several factors could account for this correlation: seasonal trends, market conditions, new products, or team composition changes. The methodology is unclear—was there a control group? On balance, while the data is suggestive, it falls short of proving causation. Further controlled studies would be needed to substantiate this claim."
        }
      ],
      modelDialogue: {
        title: "Evaluación crítica de propuesta de negocio",
        context: "Equipo analiza críticamente una propuesta de inversión",
        dialogue: [
          { speaker: "Presenter", text: "The data shows that companies using our software grow 30% faster. The evidence is compelling.", translation: "Los datos muestran que las empresas usando nuestro software crecen 30% más rápido. La evidencia es convincente." },
          { speaker: "Analyst", text: "I'd like to scrutinize that claim. Correlation doesn't imply causation. What's the methodology?", translation: "Me gustaría escudriñar esa afirmación. La correlación no implica causalidad. ¿Cuál es la metodología?" },
          { speaker: "Presenter", text: "We compared our clients' growth rates to industry averages.", translation: "Comparamos las tasas de crecimiento de nuestros clientes con promedios de la industria." },
          { speaker: "Analyst", text: "That's a flawed methodology. There's selection bias—perhaps faster-growing companies are more likely to adopt new software in the first place.", translation: "Esa es una metodología defectuosa. Hay sesgo de selección—quizás las empresas de más rápido crecimiento son más propensas a adoptar nuevo software en primer lugar." },
          { speaker: "CFO", text: "What would substantiate the claim more convincingly?", translation: "¿Qué fundamentaría la afirmación más convincentemente?" },
          { speaker: "Analyst", text: "A randomized controlled trial, or at minimum, controlling for company size, industry, and prior growth trajectory. The current evidence is suggestive but inconclusive.", translation: "Un ensayo controlado aleatorizado, o como mínimo, controlar por tamaño de empresa, industria, y trayectoria de crecimiento previa. La evidencia actual es sugestiva pero inconclusa." },
          { speaker: "CFO", text: "On balance, what's your recommendation?", translation: "En general, ¿cuál es tu recomendación?" },
          { speaker: "Analyst", text: "The premise is interesting, but the argument overlooks too many variables. I'd recommend a pilot program to generate more rigorous data before full investment.", translation: "La premisa es interesante, pero el argumento pasa por alto demasiadas variables. Recomendaría un programa piloto para generar datos más rigurosos antes de inversión completa." }
        ],
        keyPhrases: [
          { phrase: "Correlation doesn't imply causation", translation: "La correlación no implica causalidad", usage: "Cuestionar relaciones causales" },
          { phrase: "flawed methodology", translation: "metodología defectuosa", usage: "Criticar proceso" },
          { phrase: "selection bias", translation: "sesgo de selección", usage: "Identificar problema en muestra" },
          { phrase: "substantiate the claim", translation: "fundamentar la afirmación", usage: "Pedir evidencia" },
          { phrase: "suggestive but inconclusive", translation: "sugestivo pero inconcluso", usage: "Evaluación equilibrada" },
          { phrase: "overlooks too many variables", translation: "pasa por alto demasiadas variables", usage: "Señalar omisiones" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "fallacy", wrong: "fa-LA-cy", correct: "/ˈfæl.ə.si/", tip: "FAL-uh-see" },
          { word: "scrutinize", wrong: "scru-ti-NIZE", correct: "/ˈskruː.tɪ.naɪz/", tip: "SCROO-ti-nize" },
          { word: "substantiate", wrong: "sub-stan-ti-ATE", correct: "/səbˈstæn.ʃi.eɪt/", tip: "sub-STAN-shee-ayt" }
        ],
        intonationPatterns: [
          { pattern: "Questioning tone for challenging claims", example: "But doesn't that overlook↗...?", meaning: "Tono ascendente para cuestionar" },
          { pattern: "Measured, even tone for analysis", example: "The evidence suggests↘ a correlation↘", meaning: "Tono neutral para análisis objetivo" }
        ]
      },
      culturalNote: {
        title: "Critical Thinking Styles",
        titleEs: "Estilos de pensamiento crítico",
        content: "Las culturas varían en cómo expresan pensamiento crítico. Las culturas anglosajonas valoran el cuestionamiento directo y el debate abierto. En culturas asiáticas, la crítica puede expresarse más indirectamente para preservar la armonía. En contextos académicos internacionales, se espera pensamiento crítico explícito, pero siempre dirigido al argumento, no a la persona. Frases como 'The argument overlooks...' critican sin atacar.",
        contentEs: "Las culturas varían en cómo expresan crítica. En contextos académicos internacionales, se espera pensamiento crítico dirigido al argumento, no a la persona."
      },
      consolidationQuiz: [
        {
          question: "¿Qué significa 'correlation does not imply causation'?",
          options: [
            "Las cosas relacionadas siempre tienen causa común",
            "Que dos cosas ocurran juntas no significa que una cause la otra",
            "Las correlaciones son siempre falsas",
            "Solo los experimentos muestran correlación"
          ],
          correctAnswer: 1,
          explanation: "Correlación = co-ocurrencia; causalidad = A provoca B"
        },
        {
          question: "Una 'falacia lógica' es:",
          options: [
            "Una conclusión verdadera",
            "Un error en el razonamiento",
            "Una opinión diferente",
            "Un dato estadístico"
          ],
          correctAnswer: 1,
          explanation: "Falacia = error de lógica que invalida el argumento"
        },
        {
          question: "'Anecdotal evidence' se refiere a:",
          options: [
            "Evidencia científica rigurosa",
            "Historias personales usadas como prueba",
            "Datos estadísticos",
            "Experimentos controlados"
          ],
          correctAnswer: 1,
          explanation: "Anecdotal evidence = historias individuales, no datos sistemáticos"
        },
        {
          question: "¿Qué es un 'ad hominem'?",
          options: [
            "Un argumento lógico",
            "Atacar a la persona en vez del argumento",
            "Una conclusión válida",
            "Un tipo de evidencia"
          ],
          correctAnswer: 1,
          explanation: "Ad hominem = atacar al mensajero, no al mensaje"
        },
        {
          question: "'On balance' se usa para:",
          options: [
            "Hablar de finanzas",
            "Dar una evaluación general después de considerar todo",
            "Expresar desacuerdo",
            "Pedir más información"
          ],
          correctAnswer: 1,
          explanation: "'On balance' = considerando todos los factores"
        },
        {
          question: "'The argument overlooks...' significa:",
          options: [
            "El argumento es excelente",
            "El argumento ignora o no considera algo importante",
            "El argumento es demasiado largo",
            "El argumento es popular"
          ],
          correctAnswer: 1,
          explanation: "'Overlooks' = pasa por alto, no considera"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un análisis crítico de este claim: 'Happy employees are more productive, so we should focus on employee happiness.'",
          sampleResponse: "While the premise that employee happiness correlates with productivity has some empirical support, this argument rests on several questionable assumptions.\n\nFirst, correlation doesn't imply causation. It's equally plausible that productive employees become happier because of their success, rather than happiness driving productivity.\n\nSecond, the argument overlooks the complexity of 'happiness.' What makes employees happy varies significantly across individuals and cultures. A one-size-fits-all happiness initiative could backfire.\n\nThird, 'focusing on happiness' is vague. Without defining specific interventions and their costs, we cannot evaluate whether the potential productivity gains justify the investment.\n\nOn balance, while employee wellbeing should be a consideration, the argument as stated is too simplistic. A more rigorous approach would identify specific factors that correlate with both satisfaction and performance, then test interventions in controlled pilots before full implementation."
        },
        {
          prompt: "Identifica y explica las falacias en un argumento de marketing",
          sampleResponse: "Marketing Claim: 'Join millions of satisfied customers! Our product is #1 bestseller for 5 years running!'\n\nCritical Analysis:\n\nFallacy 1: Appeal to Popularity\nThe claim that 'millions of customers' buy the product doesn't prove quality. Pet rocks sold millions too. Popularity reflects marketing success, not necessarily product value.\n\nFallacy 2: Ambiguous Bestseller Claim\n'#1 bestseller' in what category? Over what time period? Compared to what competitors? The claim lacks specificity and could be technically true but misleading.\n\nFallacy 3: Assumption of Customer Satisfaction\n'Millions of satisfied customers' assumes satisfaction. What's the return rate? Customer complaints? Without this data, the claim is unsubstantiated.\n\nWhat would strengthen the argument:\n- Independent quality ratings or reviews\n- Customer satisfaction surveys with methodology disclosed\n- Comparison with specific competitors on defined metrics\n- Return rates and warranty claims data\n\nOn balance, the marketing copy employs persuasive but logically flawed appeals. Consumer should scrutinize such claims before purchasing."
        },
        {
          prompt: "Evalúa críticamente los resultados de un estudio hipotético",
          sampleResponse: "Study: 'Companies with diverse leadership teams have 35% higher returns.'\n\nCritical Evaluation:\n\nMethodological Concerns:\n\nThe study demonstrates correlation, not causation. Several alternative explanations exist:\n\n1. Selection bias: Companies that prioritize diversity may also prioritize other progressive practices that drive returns.\n\n2. Reverse causality: Successful companies may have more resources to invest in diversity initiatives, rather than diversity causing success.\n\n3. Confounding variables: Industry, company size, geographic location, and market conditions could account for both diversity and returns.\n\nThe premise that diversity directly causes higher returns overlooks these complexities. While the evidence is suggestive, it falls short of proving a causal relationship.\n\nWhat would substantiate the claim:\n- Longitudinal studies tracking companies before and after diversity changes\n- Control groups with similar companies\n- Analysis controlling for confounding variables\n- Mechanisms explaining how diversity translates to returns\n\nConclusion:\nThe finding is interesting and warrants further investigation. However, using it to make policy decisions would be premature without more rigorous evidence establishing causation."
        }
      ],
      connectionToPrevious: "Las habilidades de análisis crítico te ayudan a evaluar claims de innovación y 'disruption'.",
      connectionToNext: "La elipsis y sustitución te permitirán expresar análisis crítico de forma más elegante."
    },
    {
      id: 3,
      title: "Ellipsis and Substitution",
      titleEs: "Elipsis y Sustitución",
      introduction: {
        title: "✂️ Elipsis y Sustitución",
        explanation: "La elipsis y sustitución permiten evitar repeticiones innecesarias, haciendo el discurso más elegante y natural.",
        keyPoints: [
          "Elipsis verbal: 'I could help, but I won't [help]'",
          "Sustitución con 'so': 'I think so', 'I hope so', 'If so...'",
          "Sustitución con 'do': 'She works harder than I do'",
          "Elipsis nominal: 'The red car is faster than the blue [one]'",
          "Sustitución con 'one/ones': 'I need a new one'"
        ],
        examples: [
          { english: "A: Will they accept? B: I believe so. / I don't think so.", spanish: "A: ¿Aceptarán? B: Creo que sí. / Creo que no.", explanation: "Sustitución con 'so'" },
          { english: "She can speak French, and so can I.", spanish: "Ella puede hablar francés, y yo también.", explanation: "So + inversión" },
          { english: "If you haven't finished yet, you should.", spanish: "Si aún no has terminado, deberías [terminar].", explanation: "Elipsis verbal" }
        ],
        tips: [
          "💡 'I think so' (positivo) vs 'I don't think so' (negativo)",
          "💡 'So do I' (acuerdo positivo) vs 'Neither do I' (acuerdo negativo)",
          "💡 La elipsis hace el inglés más natural y fluido"
        ],
        whenToUse: [
          "En reuniones: \"Will they accept?\" \"I believe so.\" / \"I don't think so.\"",
          "En presentaciones: \"She can speak French, and so can I\" (acuerdo elegante)",
          "En emails formales: \"If you haven't finished yet, you should\" (elipsis verbal)",
          "En discusiones de equipo: \"If so, we'll proceed. If not, we'll need a plan B\""
        ],
        whenNotToUse: [
          "En escritura académica → evita elipsis excesiva: \"I believe so\" puede necesitar desarrollo",
          "En contextos muy formales → \"Me too\" suena informal: usa \"So do I\" con inversión",
          "Cuando la claridad es crítica → en contratos, evita \"If so\" sin referente explícito"
        ]
      },
      objectives: ["Usar elipsis para evitar repetición", "Dominar sustitución con 'so' y 'do'", "Hablar más naturalmente"],
      estimatedMinutes: 30,
      grammarTheoryIds: ["c1-advanced-linking-devices"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l10t3_e1", word: "I think/hope/believe so", translation: "Creo/Espero/Pienso que sí", type: "expression", definition: "positive substitution", definitionEs: "sustitución positiva", example: "Will it rain? I hope so.", exampleEs: "¿Lloverá? Espero que sí.", related: [], difficulty: 1 },
          { id: "l10t3_e2", word: "I don't think so", translation: "Creo que no", type: "expression", definition: "negative substitution", definitionEs: "sustitución negativa", example: "Is he coming? I don't think so.", exampleEs: "¿Viene él? Creo que no.", related: [], difficulty: 1 },
          { id: "l10t3_e3", word: "So do I / So am I", translation: "Yo también", type: "expression", definition: "agreement with positive", definitionEs: "acuerdo con positivo", example: "I love coffee. So do I.", exampleEs: "Me encanta el café. A mí también.", related: [], difficulty: 1 },
          { id: "l10t3_e4", word: "Neither do I / Neither am I", translation: "Yo tampoco", type: "expression", definition: "agreement with negative", definitionEs: "acuerdo con negativo", example: "I don't like spinach. Neither do I.", exampleEs: "No me gusta la espinaca. A mí tampoco.", related: [], difficulty: 1 },
          { id: "l10t3_e5", word: "If so... / If not...", translation: "Si es así... / Si no...", type: "expression", definition: "conditional substitution", definitionEs: "sustitución condicional", example: "Is it urgent? If so, let me know.", exampleEs: "¿Es urgente? Si es así, avísame.", related: [], difficulty: 1 },
          { id: "l10t3_e6", word: "...and I will [too]", translation: "...y yo [también]", type: "expression", definition: "ellipsis in addition", definitionEs: "elipsis en adición", example: "She'll attend, and I will too.", exampleEs: "Ella asistirá, y yo también.", related: [], difficulty: 1 },
          { id: "l10t3_e7", word: "...but I won't [do that]", translation: "...pero yo no [lo haré]", type: "expression", definition: "ellipsis in contrast", definitionEs: "elipsis en contraste", example: "They want to quit, but I won't.", exampleEs: "Ellos quieren renunciar, pero yo no.", related: [], difficulty: 1 },
          { id: "l10t3_e8", word: "I'd like to [do that]", translation: "Me gustaría [hacerlo]", type: "expression", definition: "ellipsis after 'to'", definitionEs: "elipsis después de 'to'", example: "Can you help? I'd like to.", exampleEs: "¿Puedes ayudar? Me gustaría.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l10t3_cm1",
          wrong: "'Me too' in formal contexts",
          correct: "Use 'So do I', 'So am I', 'So have I' (with inversion) for more sophisticated agreement",
          explanation: "'Me too' is informal; inversion is more elegant and appropriate in formal contexts.",
          explanationEs: "'Me too' es informal; la inversión es más elegante",
          category: "usage" as const
        },
        {
          id: "l10t3_cm2",
          wrong: "Wrong auxiliary: 'She likes coffee. So I do.'",
          correct: "'So do I' - the auxiliary comes before the subject",
          explanation: "The pattern is So + AUX + SUBJECT (inversion is obligatory).",
          explanationEs: "So + AUX + SUBJECT (inversión obligatoria)",
          category: "grammar" as const
        },
        {
          id: "l10t3_cm3",
          wrong: "'Neither I do' instead of 'Neither do I'",
          correct: "'Neither do I' / 'Nor do I' - same inversion rule",
          explanation: "Neither/Nor + AUX + SUBJECT — same inversion rule as 'So do I'.",
          explanationEs: "Neither/Nor + AUX + SUBJECT",
          category: "grammar" as const
        },
        {
          id: "l10t3_cm4",
          wrong: "'I don't hope so' for negative",
          correct: "'I hope not' or 'I don't think so' (not all verbs work the same)",
          explanation: "Hope, believe, be afraid → use 'not'; think, suppose → use 'don't think'.",
          explanationEs: "Hope, believe, be afraid → use 'not'; think, suppose → use 'don't think'",
          category: "grammar" as const
        },
        {
          id: "l10t3_cm5",
          wrong: "Overusing full sentences where ellipsis is natural",
          correct: "A: Are you coming? B: I'd like to (come). - drop the repeated verb",
          explanation: "Ellipsis is natural and expected in spoken English.",
          explanationEs: "La elipsis es natural y esperada en inglés hablado",
          category: "usage" as const
        }
      ],
      exercises: [
        {
          type: "response",
          instruction: "Responde usando la forma correcta de acuerdo/desacuerdo",
          items: [
            { statement: "I love traveling.", positiveAgreement: "So do I.", negativeAgreement: "I don't." },
            { statement: "I've never been to Japan.", positiveAgreement: "Neither have I.", negativeAgreement: "I have." },
            { statement: "I can speak three languages.", positiveAgreement: "So can I.", negativeAgreement: "I can't." },
            { statement: "I'm not a morning person.", positiveAgreement: "Neither am I.", negativeAgreement: "I am." },
            { statement: "I should exercise more.", positiveAgreement: "So should I.", negativeAgreement: "I shouldn't." },
            { statement: "I wouldn't do that.", positiveAgreement: "Neither would I.", negativeAgreement: "I would." }
          ]
        },
        {
          type: "substitution",
          instruction: "Responde a las preguntas usando sustitución con 'so' o 'not'",
          items: [
            { question: "Will the project be ready on time?", positive: "I hope so.", negative: "I hope not." },
            { question: "Is the economy going to improve?", positive: "I believe so.", negative: "I don't think so." },
            { question: "Do you think it will rain tomorrow?", positive: "I think so.", negative: "I don't think so." },
            { question: "Will they accept our proposal?", positive: "I expect so.", negative: "I expect not. / I don't expect so." },
            { question: "Is the restaurant still open?", positive: "I suppose so.", negative: "I suppose not." }
          ]
        },
        {
          type: "ellipsis",
          instruction: "Completa la respuesta usando elipsis apropiada",
          items: [
            { A: "Are you going to the conference?", B: "I'd like to ___.", answer: "(go)", full: "I'd like to go." },
            { A: "Can you finish by Friday?", B: "I'm not sure if I ___.", answer: "can", full: "I'm not sure if I can finish by Friday." },
            { A: "Have you submitted the report?", B: "No, but I should ___.", answer: "(have)", full: "No, but I should have submitted it." },
            { A: "She didn't want to attend, but she ___.", B: "had to", answer: "had to", full: "She had to attend." },
            { A: "Will you help me?", B: "I will if I ___.", answer: "can", full: "I will if I can help." }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma usando 'If so' o 'If not'",
          items: [
            {
              original: "If the train is delayed, we'll take a taxi.",
              transformed: "Is the train on time? If not, we'll take a taxi."
            },
            {
              original: "If you've finished, please send me the file.",
              transformed: "Have you finished? If so, please send me the file."
            },
            {
              original: "If it rains, the event will be cancelled.",
              transformed: "Will it rain? If so, the event will be cancelled."
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Conversación con elipsis natural",
        context: "Colegas discutiendo planes de trabajo",
        dialogue: [
          { speaker: "Alex", text: "I'm thinking of applying for the manager position. Have you heard anything about it?", translation: "Estoy pensando en aplicar para la posición de gerente. ¿Has escuchado algo?" },
          { speaker: "Jordan", text: "I have, actually. I heard they're looking for someone with project management experience.", translation: "Sí, de hecho. Escuché que buscan alguien con experiencia en gestión de proyectos." },
          { speaker: "Alex", text: "I have that experience. Do you think I should apply?", translation: "Tengo esa experiencia. ¿Crees que debería aplicar?" },
          { speaker: "Jordan", text: "I think so. The deadline is Friday—have you prepared your CV?", translation: "Creo que sí. La fecha límite es viernes—¿has preparado tu CV?" },
          { speaker: "Alex", text: "Not yet, but I should. Are you applying too?", translation: "Todavía no, pero debería. ¿También estás aplicando tú?" },
          { speaker: "Jordan", text: "I was going to, but then I decided not to. The hours are longer than I'd like.", translation: "Iba a hacerlo, pero decidí no. Las horas son más largas de lo que me gustaría." },
          { speaker: "Alex", text: "I don't mind long hours. Will the salary increase?", translation: "No me importan las horas largas. ¿Aumentará el salario?" },
          { speaker: "Jordan", text: "I believe so—by about 20%. Do you have a mentor who could recommend you?", translation: "Creo que sí—como un 20%. ¿Tienes un mentor que podría recomendarte?" },
          { speaker: "Alex", text: "I do, actually. Sarah said she would. I should ask her today.", translation: "Sí, de hecho. Sarah dijo que lo haría. Debería preguntarle hoy." },
          { speaker: "Jordan", text: "You should. Good luck! Let me know how it goes.", translation: "Deberías. ¡Buena suerte! Cuéntame cómo te va." },
          { speaker: "Alex", text: "Thanks! I will.", translation: "¡Gracias! Lo haré." }
        ],
        keyPhrases: [
          { phrase: "I have, actually", translation: "Sí, de hecho", usage: "Respuesta con elipsis" },
          { phrase: "I think so", translation: "Creo que sí", usage: "Sustitución positiva" },
          { phrase: "but I should", translation: "pero debería", usage: "Elipsis verbal" },
          { phrase: "I was going to, but then I decided not to", translation: "Iba a hacerlo, pero decidí no", usage: "Doble elipsis" },
          { phrase: "I believe so", translation: "Creo que sí", usage: "Sustitución formal" },
          { phrase: "I do, actually", translation: "Sí, de hecho", usage: "Énfasis con elipsis" },
          { phrase: "I will", translation: "Lo haré", usage: "Elipsis final" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [],
        intonationPatterns: [
          { pattern: "Rising intonation for 'So do I' showing enthusiasm", example: "I love sushi! So do I↗!", meaning: "Subida muestra entusiasmo genuino" },
          { pattern: "Falling intonation for matter-of-fact agreement", example: "Neither do I↘.", meaning: "Bajada = acuerdo calmado" },
          { pattern: "Stressed auxiliary for emphasis", example: "I HAVE, actually.", meaning: "Énfasis en el auxiliar" }
        ]
      },
      culturalNote: {
        title: "British vs American Ellipsis Patterns",
        titleEs: "Patrones de elipsis británicos vs americanos",
        content: "Los británicos usan más elipsis y sustitución que los americanos. 'I haven't done' (BrE) vs 'I didn't' (AmE). 'Shall I?' es más común en BrE. Los americanos pueden percibir mucha elipsis como vaga; los británicos la ven como elegante y eficiente. En contextos internacionales, ser más explícito puede evitar malentendidos.",
        contentEs: "Los patrones de elipsis varían entre dialectos y pueden afectar la claridad en comunicación internacional."
      },
      consolidationQuiz: [
        {
          question: "A: I love pizza. B: ___",
          options: ["So I do.", "So do I.", "I also.", "Me do too."],
          correctAnswer: 1,
          explanation: "So + auxiliary + subject (inversión)"
        },
        {
          question: "A: I haven't seen that movie. B: ___",
          options: ["Neither I have.", "Neither have I.", "Me neither have.", "I haven't neither."],
          correctAnswer: 1,
          explanation: "Neither + auxiliary + subject"
        },
        {
          question: "A: Will they win? B: I hope ___.",
          options: ["so", "yes", "it", "that"],
          correctAnswer: 0,
          explanation: "'So' sustituye toda la cláusula 'they will win'"
        },
        {
          question: "A: Do you think it will rain? B: I don't ___ so.",
          options: ["hope", "believe", "think", "expect"],
          correctAnswer: 2,
          explanation: "'Think' usa 'don't think so' para negativo"
        },
        {
          question: "A: Are you coming to the party? B: I'd like ___.",
          options: ["it", "that", "to", "do"],
          correctAnswer: 2,
          explanation: "'To' mantiene la estructura, verbo elidido"
        },
        {
          question: "Have you finished? If ___, send it now.",
          options: ["yes", "so", "that", "finished"],
          correctAnswer: 1,
          explanation: "'If so' = 'If you have finished'"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un diálogo corto entre amigos usando al menos 5 ejemplos de elipsis o sustitución",
          sampleResponse: "A: Are you going to the concert tomorrow?\nB: I'd like to, but I'm not sure if I can. Are you?\nA: I am. I already bought tickets. Did you?\nB: Not yet. I should, though. Is it sold out?\nA: I don't think so. At least, it wasn't yesterday.\nB: If it's not, I'll buy one today. Will you save me a seat?\nA: I will! Sarah's coming too.\nB: So I heard. I haven't seen her in ages.\nA: Neither have I. This will be fun!"
        },
        {
          prompt: "Practica responder a afirmaciones usando 'So do I / Neither do I' y variantes",
          sampleResponse: "Friend: I've been working from home a lot lately.\nYou: So have I. It's been great for productivity.\n\nFriend: I can't stand long meetings.\nYou: Neither can I. They're such a waste of time.\n\nFriend: I should learn a new skill this year.\nYou: So should I. I've been thinking about coding.\n\nFriend: I wouldn't want to work night shifts.\nYou: Neither would I. I'm definitely not a night person.\n\nFriend: I've never tried sushi.\nYou: Oh, I have! You should—it's delicious."
        },
        {
          prompt: "Usa 'I think/hope/believe so' y 'If so / If not' en contexto profesional",
          sampleResponse: "Email:\n\nDear Team,\n\nWe're expecting the quarterly results by Friday. If so, we'll schedule the review meeting for Monday. If not, we'll need to push it to the following week.\n\nWill the new system be ready for testing? I hope so—we're running behind schedule. If it is, please notify the QA team immediately.\n\nAre there any budget concerns? I don't think so, but let me know if I'm wrong.\n\nIs the client coming to the demo? I believe so, though I haven't received final confirmation. If so, please prepare the conference room.\n\nBest regards"
        }
      ],
      connectionToPrevious: "La elipsis te permite expresar análisis crítico de forma más concisa y elegante.",
      connectionToNext: "El discurso académico requiere un equilibrio entre precisión y elegancia—la elipsis ayuda."
    },
    {
      id: 4,
      title: "Academic Discourse",
      titleEs: "Discurso Académico",
      introduction: {
        title: "📚 Discurso Académico",
        explanation: "El inglés académico tiene convenciones específicas. Dominar este registro es esencial para publicaciones, conferencias y entornos universitarios.",
        keyPoints: [
          "Hedging: 'It could be argued', 'This may suggest', 'tends to'",
          "Citas: 'According to Smith (2020)', 'As noted by researchers'",
          "Crítica: 'However, this view has been challenged', 'Critics argue that...'",
          "Estructura: 'This paper/study aims to...', 'The findings indicate...'",
          "Contribución: 'This research contributes to...', 'fills a gap in the literature'"
        ],
        examples: [
          { english: "It could be argued that these findings have broader implications.", spanish: "Se podría argumentar que estos hallazgos tienen implicaciones más amplias.", explanation: "Hedging académico" },
          { english: "This study fills a significant gap in the existing literature.", spanish: "Este estudio llena un vacío significativo en la literatura existente.", explanation: "Justificando investigación" },
          { english: "Critics have challenged this view, arguing that...", spanish: "Los críticos han desafiado esta visión, argumentando que...", explanation: "Presentando debate" }
        ],
        tips: [
          "💡 El 'hedging' muestra precaución y rigor académico",
          "💡 Evita 'I think' - usa 'It appears that', 'The evidence suggests'",
          "💡 Siempre cita tus fuentes con el formato adecuado"
        ],
        whenToUse: [
          "En artículos académicos: \"It could be argued that these findings have broader implications\"",
          "En papers de investigación: \"This study fills a significant gap in the existing literature\"",
          "En conferencias: \"Critics have challenged this view, arguing that...\"",
          "En tesis y disertaciones: \"According to Smith (2020), the evidence suggests...\""
        ],
        whenNotToUse: [
          "En emails informales → demasiado formal: usa \"I think\" en vez de \"It could be argued that\"",
          "En presentaciones de ventas → suena inseguro: evita hedging excesivo cuando vendes",
          "En conversación casual sobre libros → \"The author employs\" suena artificial en reseñas informales"
        ]
      },
      objectives: ["Usar hedging apropiadamente", "Citar y referir fuentes", "Estructurar argumentos académicos"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c1-nominalization", "c1-hedging", "c2-discourse-cohesion"],
      vocabulary: {
        nouns: [
          { id: "l10t4_n1", word: "literature", translation: "literatura/bibliografía", type: "noun", definition: "published research", definitionEs: "investigación publicada", example: "The literature suggests...", exampleEs: "La literatura sugiere...", related: [], difficulty: 2 },
          { id: "l10t4_n2", word: "hypothesis", translation: "hipótesis", type: "noun", definition: "proposed explanation", definitionEs: "explicación propuesta", example: "The hypothesis was confirmed.", exampleEs: "La hipótesis fue confirmada.", related: [], difficulty: 2 },
          { id: "l10t4_n3", word: "sample", translation: "muestra", type: "noun", definition: "subset studied", definitionEs: "subconjunto estudiado", example: "The sample size was 500.", exampleEs: "El tamaño de la muestra fue 500.", related: [], difficulty: 1 },
          { id: "l10t4_n4", word: "variable", translation: "variable", type: "noun", definition: "factor that can change", definitionEs: "factor que puede cambiar", example: "We controlled for several variables.", exampleEs: "Controlamos varias variables.", related: [], difficulty: 2 },
          { id: "l10t4_n5", word: "scope", translation: "alcance", type: "noun", definition: "extent covered", definitionEs: "extensión cubierta", example: "The scope of this study is...", exampleEs: "El alcance de este estudio es...", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l10t4_v1", word: "posit", translation: "postular", type: "verb", definition: "to propose", definitionEs: "proponer", example: "The author posits that...", exampleEs: "El autor postula que...", related: [], difficulty: 2 },
          { id: "l10t4_v2", word: "contend", translation: "sostener/afirmar", type: "verb", definition: "to assert", definitionEs: "afirmar", example: "Critics contend that...", exampleEs: "Los críticos sostienen que...", related: [], difficulty: 2 },
          { id: "l10t4_v3", word: "corroborate", translation: "corroborar", type: "verb", definition: "to confirm", definitionEs: "confirmar", example: "These findings corroborate...", exampleEs: "Estos hallazgos corroboran...", related: [], difficulty: 2 },
          { id: "l10t4_v4", word: "warrant", translation: "justificar/ameritar", type: "verb", definition: "to justify", definitionEs: "justificar", example: "This warrants further investigation.", exampleEs: "Esto amerita mayor investigación.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l10t4_a1", word: "empirical", translation: "empírico", type: "adjective", definition: "based on observation", definitionEs: "basado en observación", example: "We need empirical evidence.", exampleEs: "Necesitamos evidencia empírica.", related: [], difficulty: 2 },
          { id: "l10t4_a2", word: "qualitative", translation: "cualitativo", type: "adjective", definition: "relating to quality", definitionEs: "relacionado a calidad", example: "This is qualitative research.", exampleEs: "Esta es investigación cualitativa.", related: [], difficulty: 2 },
          { id: "l10t4_a3", word: "quantitative", translation: "cuantitativo", type: "adjective", definition: "relating to quantity", definitionEs: "relacionado a cantidad", example: "We used quantitative methods.", exampleEs: "Usamos métodos cuantitativos.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l10t4_e1", word: "It could be argued that...", translation: "Se podría argumentar que...", type: "expression", definition: "hedging", definitionEs: "hedging", example: "It could be argued that this is significant.", exampleEs: "Se podría argumentar que esto es significativo.", related: [], difficulty: 2 },
          { id: "l10t4_e2", word: "This study aims to...", translation: "Este estudio tiene como objetivo...", type: "expression", definition: "stating purpose", definitionEs: "declarando propósito", example: "This study aims to examine...", exampleEs: "Este estudio tiene como objetivo examinar...", related: [], difficulty: 1 },
          { id: "l10t4_e3", word: "According to [Author] ([Year])", translation: "Según [Autor] ([Año])", type: "expression", definition: "citing sources", definitionEs: "citando fuentes", example: "According to Smith (2020)...", exampleEs: "Según Smith (2020)...", related: [], difficulty: 1 },
          { id: "l10t4_e4", word: "fills a gap in the literature", translation: "llena un vacío en la literatura", type: "expression", definition: "justifying research", definitionEs: "justificando investigación", example: "This research fills a gap in the literature.", exampleEs: "Esta investigación llena un vacío en la literatura.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t4_cm1", wrong: "'I think that...' in academic writing", correct: "'It appears that...', 'The evidence suggests...', 'It could be argued that...'", explanation: "Academic language avoids direct first-person statements; use impersonal hedging", explanationEs: "El lenguaje académico evita la primera persona directa", category: "usage" },
        { id: "l10t4_cm2", wrong: "'This proves that...' without strong evidence", correct: "'This suggests/indicates/supports the view that...'", explanation: "'Prove' is too strong; use more cautious verbs for most evidence", explanationEs: "'Prove' es muy fuerte; usa verbos más cautelosos", category: "usage" },
        { id: "l10t4_cm3", wrong: "Making claims without citations", correct: "'According to Smith (2020)...', 'As noted by researchers...'", explanation: "Every claim must be backed by sources", explanationEs: "Todo claim debe tener respaldo de fuentes", category: "usage" },
        { id: "l10t4_cm4", wrong: "'Many people believe...' (vague)", correct: "'Several scholars (Smith, 2019; Jones, 2020) have argued...'", explanation: "Be specific about who and when; avoid vague attributions", explanationEs: "Sé específico con quiénes y cuándo", category: "usage" },
        { id: "l10t4_cm5", wrong: "Using informal connectors: 'So', 'Plus', 'Also'", correct: "'Therefore', 'Furthermore', 'Additionally', 'Moreover'", explanation: "Academic register requires formal connectors", explanationEs: "El registro académico requiere conectores formales", category: "usage" }
      ],
      exercises: [
        {
          type: "hedging",
          instruction: "Convierte estas afirmaciones directas en lenguaje académico con hedging",
          items: [
            {
              direct: "Social media causes depression in teenagers.",
              hedged: "There appears to be a correlation between social media use and depression among teenagers, though causality has yet to be established.",
              hedgingWords: ["appears to be", "correlation", "though", "has yet to be established"]
            },
            {
              direct: "This study proves the theory is correct.",
              hedged: "The findings of this study tend to support the theory, providing preliminary evidence for its validity.",
              hedgingWords: ["tend to support", "preliminary evidence", "validity"]
            },
            {
              direct: "Remote work is better for productivity.",
              hedged: "The evidence suggests that remote work may enhance productivity for certain types of tasks and workers.",
              hedgingWords: ["suggests", "may enhance", "certain types"]
            },
            {
              direct: "The economy will definitely improve next year.",
              hedged: "Economic indicators suggest a potential improvement, though this projection should be interpreted with caution.",
              hedgingWords: ["suggest", "potential", "should be interpreted with caution"]
            }
          ]
        },
        {
          type: "citations",
          instruction: "Integra estas citas correctamente en oraciones académicas",
          items: [
            {
              info: "Smith (2020) found that 60% of participants preferred remote work.",
              options: [
                "According to Smith (2020), a majority of participants expressed a preference for remote work.",
                "Smith's (2020) findings indicate that 60% of participants favored remote work arrangements.",
                "As Smith (2020) observes, remote work was preferred by the majority of participants."
              ]
            },
            {
              info: "Jones & Brown (2019) argue that AI will transform education.",
              options: [
                "Jones and Brown (2019) contend that artificial intelligence is poised to fundamentally reshape educational practices.",
                "It has been argued that AI will have transformative effects on education (Jones & Brown, 2019).",
                "The transformative potential of AI in education has been highlighted by several scholars (Jones & Brown, 2019)."
              ]
            }
          ]
        },
        {
          type: "structure",
          instruction: "Ordena estas secciones de abstract académico correctamente",
          sections: [
            "Results: The findings indicate a significant correlation between X and Y.",
            "Background: Previous research has established that...",
            "Methods: A quantitative approach was adopted, with a sample of...",
            "Conclusion: These results suggest that further research is warranted.",
            "Purpose: This study aims to investigate the relationship between X and Y."
          ],
          correctOrder: ["Background", "Purpose", "Methods", "Results", "Conclusion"]
        },
        {
          type: "gap-fill",
          instruction: "Completa con vocabulario académico",
          items: [
            { sentence: "This research _____ a gap in the existing literature.", answer: "fills", alternatives: ["addresses", "bridges"] },
            { sentence: "The authors _____ that climate change affects migration patterns.", answer: "contend", alternatives: ["argue", "posit"] },
            { sentence: "These findings _____ the results of previous studies.", answer: "corroborate", alternatives: ["confirm", "support"] },
            { sentence: "The _____ of this study is limited to developed countries.", answer: "scope", alternatives: ["focus", "range"] },
            { sentence: "This unusual pattern _____ further investigation.", answer: "warrants", alternatives: ["merits", "requires"] },
            { sentence: "The _____ was tested using a large dataset.", answer: "hypothesis", alternatives: ["theory", "assumption"] }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentación en conferencia académica",
        context: "Investigador presenta hallazgos y recibe preguntas",
        dialogue: [
          { speaker: "Presenter", text: "This study aimed to investigate the relationship between sleep quality and cognitive performance in university students.", translation: "Este estudio tuvo como objetivo investigar la relación entre calidad del sueño y rendimiento cognitivo en estudiantes universitarios." },
          { speaker: "Presenter", text: "Building on the work of Smith (2019) and Jones (2020), we hypothesized that poor sleep would correlate with reduced performance.", translation: "Basándonos en el trabajo de Smith (2019) y Jones (2020), hipotetizamos que el mal sueño correlacionaría con menor rendimiento." },
          { speaker: "Presenter", text: "Our findings appear to support this hypothesis. The data suggests a significant negative correlation between the two variables.", translation: "Nuestros hallazgos parecen apoyar esta hipótesis. Los datos sugieren una correlación negativa significativa entre las dos variables." },
          { speaker: "Audience Member", text: "Could you elaborate on the methodology? How did you control for confounding variables?", translation: "¿Podría elaborar sobre la metodología? ¿Cómo controló las variables de confusión?" },
          { speaker: "Presenter", text: "Certainly. We controlled for age, caffeine consumption, and academic workload. However, it should be noted that our sample size was relatively modest.", translation: "Por supuesto. Controlamos por edad, consumo de cafeína y carga académica. Sin embargo, debe notarse que nuestro tamaño de muestra fue relativamente modesto." },
          { speaker: "Audience Member", text: "What are the implications of your findings?", translation: "¿Cuáles son las implicaciones de sus hallazgos?" },
          { speaker: "Presenter", text: "While we cannot establish causality from this correlational study, the results warrant further investigation. They suggest that sleep hygiene programs might benefit student performance.", translation: "Aunque no podemos establecer causalidad de este estudio correlacional, los resultados ameritan mayor investigación. Sugieren que programas de higiene del sueño podrían beneficiar el rendimiento estudiantil." },
          { speaker: "Audience Member", text: "Have critics challenged any aspect of your methodology?", translation: "¿Han criticado los críticos algún aspecto de su metodología?" },
          { speaker: "Presenter", text: "Some scholars have questioned the reliance on self-reported sleep data. This limitation is acknowledged in our discussion section, and we recommend that future studies incorporate objective sleep measurements.", translation: "Algunos académicos han cuestionado la dependencia de datos de sueño auto-reportados. Esta limitación se reconoce en nuestra sección de discusión, y recomendamos que estudios futuros incorporen mediciones objetivas de sueño." }
        ],
        keyPhrases: [
          { phrase: "This study aimed to investigate...", translation: "Este estudio tuvo como objetivo investigar...", usage: "Declarar propósito" },
          { phrase: "Building on the work of...", translation: "Basándose en el trabajo de...", usage: "Conectar con literatura" },
          { phrase: "Our findings appear to support...", translation: "Nuestros hallazgos parecen apoyar...", usage: "Hedging resultados" },
          { phrase: "It should be noted that...", translation: "Debe notarse que...", usage: "Reconocer limitaciones" },
          { phrase: "The results warrant further investigation", translation: "Los resultados ameritan mayor investigación", usage: "Sugerir futuras líneas" },
          { phrase: "This limitation is acknowledged...", translation: "Esta limitación se reconoce...", usage: "Responder a críticas" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "hypothesis", wrong: "hi-PO-te-sis", correct: "/haɪˈpɒθ.ə.sɪs/", tip: "hy-POTH-uh-sis" },
          { word: "empirical", wrong: "em-PI-ri-cal", correct: "/ɪmˈpɪr.ɪ.kəl/", tip: "im-PEER-i-kul" },
          { word: "qualitative", wrong: "kwa-li-TA-tive", correct: "/ˈkwɒl.ɪ.tə.tɪv/", tip: "KWOL-i-tuh-tiv" },
          { word: "quantitative", wrong: "kwan-ti-TA-tive", correct: "/ˈkwɒn.tɪ.tə.tɪv/", tip: "KWON-ti-tuh-tiv" }
        ],
        intonationPatterns: [
          { pattern: "Falling intonation for academic statements", example: "The evidence suggests↘ a correlation↘.", meaning: "Tono descendente = autoridad, certeza" },
          { pattern: "Slight rise before hedging continuation", example: "The results are significant↗, though limitations exist↘.", meaning: "Pausa con subida antes de matizar" }
        ]
      },
      culturalNote: {
        title: "Academic Culture Differences",
        titleEs: "Diferencias culturales académicas",
        content: "El grado de hedging varía entre culturas académicas. Los anglosajones usan mucho hedging ('may', 'could', 'might'), visto como precisión científica. En otras tradiciones, esto puede parecer debilidad. Similarmente, criticar trabajo previo es esperado en la academia anglosajona ('However, Smith's analysis overlooks...'), mientras que en algunas culturas se percibe como descortés. Adapta tu estilo a la audiencia internacional.\n\nAcademic integrity culture in English-speaking universities: El plagio y la deshonestidad académica se toman muy en serio. Las universidades anglófonas usan detectores de plagio y las consecuencias pueden ser graves (expulsión, revocación de títulos). Citar correctamente (APA, MLA, Chicago) es obligatorio. La colaboración no autorizada en exámenes o trabajos se considera fraude. Familiarízate con las políticas de integridad académica de tu institución.",
        contentEs: "El hedging y la crítica académica varían culturalmente; adapta tu estilo al contexto. La integridad académica es estricta en universidades anglófonas: plagio y citación incorrecta tienen consecuencias graves.",
        region: "UK, US, Australia"
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la forma más académica de 'I think this is important'?",
          options: [
            "I believe this is important",
            "It could be argued that this merits attention",
            "This is definitely important",
            "Everyone thinks this is important"
          ],
          correctAnswer: 1,
          explanation: "Hedging + pasiva impersonal = registro académico"
        },
        {
          question: "'The literature suggests...' se refiere a:",
          options: [
            "Una novela famosa",
            "La investigación publicada sobre el tema",
            "La opinión del autor",
            "Un solo estudio"
          ],
          correctAnswer: 1,
          explanation: "'Literature' = el conjunto de publicaciones académicas"
        },
        {
          question: "¿Qué significa 'warrant further investigation'?",
          options: [
            "La investigación está terminada",
            "El tema merece ser investigado más",
            "La investigación es incorrecta",
            "No hay más preguntas"
          ],
          correctAnswer: 1,
          explanation: "'Warrant' = justificar/merecer; se necesita más estudio"
        },
        {
          question: "'Empirical evidence' significa:",
          options: [
            "Opiniones de expertos",
            "Evidencia basada en observación/experimentación",
            "Teoría sin probar",
            "Evidencia anecdótica"
          ],
          correctAnswer: 1,
          explanation: "Empírico = basado en datos observados, no teoría"
        },
        {
          question: "'Fills a gap in the literature' justifica:",
          options: [
            "Por qué el tema es popular",
            "Por qué esta investigación es necesaria",
            "Por qué otros están equivocados",
            "Por qué el autor es experto"
          ],
          correctAnswer: 1,
          explanation: "Explica la contribución: lo que falta y que este estudio aporta"
        },
        {
          question: "¿Cuál es la cita correcta?",
          options: [
            "Smith says that...",
            "According to Smith (2020)...",
            "Smith, a famous researcher, believes...",
            "In my opinion, like Smith..."
          ],
          correctAnswer: 1,
          explanation: "Formato estándar: Autor (Año) o (Autor, Año)"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe el abstract de un estudio hipotético sobre productividad y trabajo remoto (100-150 palabras)",
          sampleResponse: "This study investigates the relationship between remote work arrangements and employee productivity in the technology sector. Building on previous research (Smith, 2019; Jones, 2020), which has yielded mixed findings, this study aimed to identify factors that mediate this relationship.\n\nA mixed-methods approach was adopted, combining quantitative productivity metrics with qualitative interviews. The sample comprised 500 employees across 12 technology companies.\n\nThe findings suggest that remote work tends to enhance productivity for tasks requiring deep focus, while potentially diminishing collaborative effectiveness. These results appear to support the hypothesis that task type moderates the remote work-productivity relationship.\n\nThis research contributes to the literature by identifying specific conditions under which remote work proves beneficial. The implications for organizational policy and future research directions are discussed."
        },
        {
          prompt: "Escribe una crítica académica de un estudio con metodología débil",
          sampleResponse: "While Johnson's (2021) study provides valuable insights into consumer behavior, several methodological limitations warrant consideration.\n\nFirst, the sample size of 50 participants appears insufficient for the statistical analyses employed. As noted by Roberts (2018), studies of this nature typically require a minimum of 200 participants to achieve adequate statistical power.\n\nSecond, the reliance on self-reported data raises concerns about social desirability bias. Participants may have overstated their engagement with sustainable products, a tendency documented in the literature (Williams, 2019).\n\nFurthermore, the scope of the study is limited to a single geographic region, which constrains the generalizability of the findings. It could be argued that cultural factors, not controlled for in this study, may significantly influence consumer behavior.\n\nNotwithstanding these limitations, Johnson's contribution to the field should be acknowledged. Future research might address these concerns through larger, more diverse samples and objective behavioral measures."
        },
        {
          prompt: "Presenta los resultados de un estudio usando hedging apropiado",
          sampleResponse: "The results of this study appear to support our initial hypothesis, though with important caveats.\n\nThe data suggests a moderate positive correlation (r = 0.45) between managerial support and employee innovation. This finding is consistent with previous research (Chen, 2019), which posited a link between leadership style and creative output.\n\nIt should be noted, however, that this correlation does not establish causality. Several confounding variables may account for this relationship, including organizational culture, resource availability, and individual personality traits.\n\nInterestingly, the correlation seems to be stronger in smaller organizations (r = 0.62) compared to larger ones (r = 0.31). This pattern warrants further investigation and may indicate that the impact of managerial support is mediated by organizational size.\n\nWhile these findings are preliminary, they contribute to our understanding of the factors that foster innovation in the workplace. Future longitudinal studies might help establish the causal mechanisms underlying these associations."
        }
      ],
      connectionToPrevious: "El pensamiento crítico del task anterior fundamenta el rigor del discurso académico.",
      connectionToNext: "Expresar causa y efecto sofisticadamente es clave en argumentación académica."
    },
    {
      id: 5,
      title: "Sophisticated Expressing of Cause and Effect",
      titleEs: "Expresión Sofisticada de Causa y Efecto",
      introduction: {
        title: "🔗 Causa y Efecto Sofisticado",
        explanation: "Más allá de 'because' y 'so', existen muchas formas de expresar relaciones causales. El dominio de estas estructuras eleva tu nivel de inglés.",
        keyPoints: [
          "Verbos causativos: 'bring about', 'give rise to', 'trigger', 'stem from'",
          "Sustantivos: 'The cause/consequence/result/outcome/implication'",
          "Conectores formales: 'hence', 'thereby', 'thus', 'consequently'",
          "Estructuras: 'This led to...', 'Owing to...', 'As a result of...'",
          "Participios: 'Having caused...', 'Resulting from...'"
        ],
        examples: [
          { english: "The policy changes gave rise to widespread protests.", spanish: "Los cambios de política dieron lugar a protestas generalizadas.", explanation: "give rise to = causar" },
          { english: "Owing to the economic downturn, many businesses closed.", spanish: "Debido a la recesión económica, muchos negocios cerraron.", explanation: "owing to = debido a" },
          { english: "The investment paid off, thereby increasing shareholder value.", spanish: "La inversión dio resultados, aumentando así el valor para los accionistas.", explanation: "thereby + gerundio" }
        ],
        tips: [
          "💡 'Give rise to' es más formal que 'cause'",
          "💡 'Stem from' indica origen/fuente",
          "💡 'Trigger' implica inicio repentino de una reacción en cadena"
        ],
        whenToUse: [
          "En informes ejecutivos: \"The policy changes gave rise to widespread protests\"",
          "En análisis de root cause: \"The problem stems from inadequate communication\"",
          "En documentos formales: \"Owing to the economic downturn, many businesses closed\"",
          "En papers académicos: \"The investment paid off, thereby increasing shareholder value\""
        ],
        whenNotToUse: [
          "En conversación casual → demasiado formal: usa \"caused\" en vez de \"gave rise to\"",
          "En emails breves → \"Owing to\" suena arcaico: \"Because of\" es más natural",
          "Cuando la causa es simple → \"stem from\" para problemas complejos; \"come from\" para simples"
        ]
      },
      objectives: ["Usar verbos causativos variados", "Emplear conectores formales de causa/efecto", "Expresar causalidad con precisión"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-advanced-linking-devices"],
      vocabulary: {
        nouns: [
          { id: "l10t5_n1", word: "consequence", translation: "consecuencia", type: "noun", definition: "result of an action", definitionEs: "resultado de una acción", example: "What are the consequences?", exampleEs: "¿Cuáles son las consecuencias?", related: [], difficulty: 1 },
          { id: "l10t5_n2", word: "implication", translation: "implicación", type: "noun", definition: "indirect effect", definitionEs: "efecto indirecto", example: "The implications are serious.", exampleEs: "Las implicaciones son serias.", related: [], difficulty: 2 },
          { id: "l10t5_n3", word: "repercussion", translation: "repercusión", type: "noun", definition: "indirect consequence", definitionEs: "consecuencia indirecta", example: "There will be repercussions.", exampleEs: "Habrá repercusiones.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l10t5_v1", word: "give rise to", translation: "dar lugar a", type: "verb", definition: "to cause", definitionEs: "causar", example: "This gave rise to new problems.", exampleEs: "Esto dio lugar a nuevos problemas.", related: [], difficulty: 2 },
          { id: "l10t5_v2", word: "bring about", translation: "provocar/ocasionar", type: "verb", definition: "to cause to happen", definitionEs: "causar que suceda", example: "What brought about this change?", exampleEs: "¿Qué provocó este cambio?", related: [], difficulty: 2 },
          { id: "l10t5_v3", word: "stem from", translation: "provenir de", type: "verb", definition: "to originate from", definitionEs: "originarse de", example: "The problem stems from...", exampleEs: "El problema proviene de...", related: [], difficulty: 2 },
          { id: "l10t5_v4", word: "trigger", translation: "desencadenar", type: "verb", definition: "to cause to start suddenly", definitionEs: "causar inicio repentino", example: "The event triggered a crisis.", exampleEs: "El evento desencadenó una crisis.", related: [], difficulty: 1 },
          { id: "l10t5_v5", word: "account for", translation: "explicar/ser responsable de", type: "verb", definition: "to explain", definitionEs: "explicar", example: "This accounts for the difference.", exampleEs: "Esto explica la diferencia.", related: [], difficulty: 2 },
        ],
        adjectives: [],
        expressions: [
          { id: "l10t5_e1", word: "Owing to...", translation: "Debido a...", type: "expression", definition: "because of (formal)", definitionEs: "debido a (formal)", example: "Owing to the delay, we missed the deadline.", exampleEs: "Debido al retraso, perdimos la fecha límite.", related: [], difficulty: 2 },
          { id: "l10t5_e2", word: "As a result of...", translation: "Como resultado de...", type: "expression", definition: "because of", definitionEs: "debido a", example: "As a result of the merger...", exampleEs: "Como resultado de la fusión...", related: [], difficulty: 1 },
          { id: "l10t5_e3", word: "This led to...", translation: "Esto llevó a...", type: "expression", definition: "this caused", definitionEs: "esto causó", example: "This led to significant improvements.", exampleEs: "Esto llevó a mejoras significativas.", related: [], difficulty: 1 },
          { id: "l10t5_e4", word: "...thereby + -ing", translation: "...con lo cual / de ese modo", type: "expression", definition: "and in that way", definitionEs: "y de esa manera", example: "...thereby reducing costs.", exampleEs: "...reduciendo así los costos.", related: [], difficulty: 2 },
        ],
        adverbs: [
          { id: "l10t5_adv1", word: "hence", translation: "por lo tanto/de ahí", type: "adverb", definition: "for this reason", definitionEs: "por esta razón", example: "Hence, we must act now.", exampleEs: "Por lo tanto, debemos actuar ahora.", related: [], difficulty: 2 },
          { id: "l10t5_adv2", word: "thus", translation: "así/por lo tanto", type: "adverb", definition: "in this way/therefore", definitionEs: "de esta manera/por lo tanto", example: "Thus, the hypothesis was confirmed.", exampleEs: "Así, la hipótesis fue confirmada.", related: [], difficulty: 2 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t5_cm1", wrong: "Overusing 'because' and 'so' in formal writing", correct: "Use variety: 'owing to', 'hence', 'thereby', 'as a result', 'stem from'", explanation: "Variety demonstrates language mastery", explanationEs: "La variedad demuestra dominio del idioma", category: "usage" },
        { id: "l10t5_cm2", wrong: "'The reason is because...' (redundant)", correct: "'The reason is that...' or simply 'Because...'", explanation: "'Reason' already implies cause; 'because' is redundant", explanationEs: "'Reason' ya implica causa; 'because' es redundante", category: "grammar" },
        { id: "l10t5_cm3", wrong: "Confusing 'effect' (noun/verb) and 'affect' (verb)", correct: "The policy AFFECTED sales (verb). The EFFECT was significant (noun).", explanation: "Affect = to influence (verb); Effect = result (noun)", explanationEs: "Affect = influir (verbo); Effect = resultado (sustantivo)", category: "vocabulary" },
        { id: "l10t5_cm4", wrong: "'Give rise' without 'to'", correct: "'Give rise TO' - always requires the preposition", explanation: "It's a fixed collocation: give rise to", explanationEs: "Es una colocación fija: give rise to", category: "grammar" },
        { id: "l10t5_cm5", wrong: "Using 'hence' like 'therefore' without comma", correct: "'Hence, we decided...' or '...hence the need for...'", explanation: "'Hence' can go with comma + clause or connecting noun phrases", explanationEs: "'Hence' puede ir con coma + oración o conectando frases nominales", category: "grammar" }
      ],
      exercises: [
        {
          type: "matching",
          instruction: "Empareja las expresiones causales con su significado",
          pairs: [
            { expression: "give rise to", meaning: "cause/create (formal)" },
            { expression: "stem from", meaning: "originate from (source)" },
            { expression: "bring about", meaning: "cause to happen (change)" },
            { expression: "trigger", meaning: "cause sudden start" },
            { expression: "account for", meaning: "explain/be responsible for" },
            { expression: "owing to", meaning: "because of (formal)" },
            { expression: "thereby", meaning: "by doing that" },
            { expression: "hence", meaning: "for this reason (formal)" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma usando expresiones más sofisticadas",
          items: [
            {
              simple: "Because of the rain, the event was cancelled.",
              sophisticated: "Owing to inclement weather, the event was cancelled.",
              keyChange: "because of → owing to"
            },
            {
              simple: "The new policy caused many employees to resign.",
              sophisticated: "The new policy gave rise to widespread resignations.",
              keyChange: "caused → gave rise to"
            },
            {
              simple: "The problem comes from poor communication.",
              sophisticated: "The problem stems from inadequate communication protocols.",
              keyChange: "comes from → stems from"
            },
            {
              simple: "The announcement made the stock price fall, so investors panicked.",
              sophisticated: "The announcement triggered a decline in stock price, thereby causing investor panic.",
              keyChange: "made...fall, so → triggered...thereby causing"
            },
            {
              simple: "We cut costs. So, profits increased.",
              sophisticated: "We implemented cost reductions; hence, profitability improved.",
              keyChange: "so → hence"
            }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa con la expresión causal correcta",
          items: [
            { sentence: "The pandemic _____ unprecedented changes in workplace culture.", answer: "brought about", alternatives: ["gave rise to", "triggered"] },
            { sentence: "_____ the budget constraints, we had to postpone the project.", answer: "Owing to", alternatives: ["Due to"] },
            { sentence: "Many of these issues _____ a lack of clear communication.", answer: "stem from", alternatives: ["arise from"] },
            { sentence: "The merger will streamline operations, _____ reducing overhead costs.", answer: "thereby", alternatives: [] },
            { sentence: "The study is flawed; _____, its conclusions are unreliable.", answer: "hence", alternatives: ["thus", "consequently"] },
            { sentence: "What factors _____ the sudden increase in demand?", answer: "account for", alternatives: ["explain"] }
          ]
        },
        {
          type: "chain",
          instruction: "Construye una cadena causal usando expresiones variadas",
          scenario: "Climate change → extreme weather → crop failures → food prices rise → social unrest",
          sampleChain: "Climate change has given rise to increasingly extreme weather patterns. These conditions, in turn, have triggered widespread crop failures. Owing to reduced agricultural output, food prices have risen sharply, thereby placing enormous pressure on vulnerable populations. Hence, many regions are experiencing social unrest as a direct consequence of these interconnected factors."
        }
      ],
      modelDialogue: {
        title: "Análisis de crisis empresarial",
        context: "Equipo ejecutivo analiza las causas de una crisis",
        dialogue: [
          { speaker: "CEO", text: "We need to understand what brought about this crisis. Can someone walk me through the chain of events?", translation: "Necesitamos entender qué provocó esta crisis. ¿Alguien puede explicarme la cadena de eventos?" },
          { speaker: "CFO", text: "Certainly. The issues stem from our aggressive expansion strategy. We grew too fast without adequate infrastructure.", translation: "Por supuesto. Los problemas provienen de nuestra estrategia de expansión agresiva. Crecimos demasiado rápido sin infraestructura adecuada." },
          { speaker: "COO", text: "This gave rise to supply chain bottlenecks. As a result, we couldn't meet customer demand.", translation: "Esto dio lugar a cuellos de botella en la cadena de suministro. Como resultado, no pudimos satisfacer la demanda de los clientes." },
          { speaker: "CMO", text: "The delivery delays triggered negative reviews online, thereby damaging our brand reputation.", translation: "Los retrasos en entregas desencadenaron reseñas negativas online, dañando así nuestra reputación de marca." },
          { speaker: "CEO", text: "I see. So one problem led to another. What accounts for our slow response?", translation: "Entiendo. Entonces un problema llevó a otro. ¿Qué explica nuestra respuesta lenta?" },
          { speaker: "CFO", text: "Owing to siloed departments, information didn't flow effectively. Hence, the leadership team wasn't aware of the severity until it was too late.", translation: "Debido a departamentos aislados, la información no fluía efectivamente. Por lo tanto, el equipo de liderazgo no se dio cuenta de la gravedad hasta que fue muy tarde." },
          { speaker: "CEO", text: "What are the implications of this for our Q3 targets?", translation: "¿Cuáles son las implicaciones de esto para nuestras metas del Q3?" },
          { speaker: "CFO", text: "The repercussions will be significant. We'll need to revise projections downward, thus requiring a complete strategy review.", translation: "Las repercusiones serán significativas. Necesitaremos revisar proyecciones a la baja, requiriendo así una revisión completa de estrategia." }
        ],
        keyPhrases: [
          { phrase: "brought about this crisis", translation: "provocó esta crisis", usage: "Preguntar por causa" },
          { phrase: "stem from our strategy", translation: "provienen de nuestra estrategia", usage: "Identificar origen" },
          { phrase: "gave rise to bottlenecks", translation: "dio lugar a cuellos de botella", usage: "Describir consecuencia" },
          { phrase: "triggered negative reviews", translation: "desencadenó reseñas negativas", usage: "Inicio de reacción" },
          { phrase: "accounts for our slow response", translation: "explica nuestra respuesta lenta", usage: "Pedir explicación" },
          { phrase: "hence, leadership wasn't aware", translation: "por lo tanto, liderazgo no se enteró", usage: "Conclusión formal" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "consequence", wrong: "con-se-QUEN-ce", correct: "/ˈkɒn.sɪ.kwəns/", tip: "CON-si-kwens" },
          { word: "repercussion", wrong: "re-per-CU-sion", correct: "/ˌriː.pəˈkʌʃ.ən/", tip: "ree-per-KUSH-un" },
          { word: "thereby", wrong: "THERE-by", correct: "/ˌðeəˈbaɪ/", tip: "there-BY (stress on BY)" }
        ],
        intonationPatterns: [
          { pattern: "Linking causes with smooth flow", example: "The policy triggered changes↘, thereby affecting↗ thousands.", meaning: "Conectar causa-efecto sin pausas abruptas" },
          { pattern: "Emphasis on causal connector", example: "HENCE, we must reconsider↘.", meaning: "Énfasis en 'hence' para conclusión importante" }
        ]
      },
      culturalNote: {
        title: "Causal Reasoning in Business Communication",
        titleEs: "Razonamiento causal en comunicación empresarial",
        content: "En el mundo empresarial anglosajón, se espera que el razonamiento causal sea explícito y bien estructurado. Usar expresiones como 'owing to', 'hence', y 'thereby' demuestra pensamiento analítico y profesionalismo. Sin embargo, cuidado con sobre-atribuir causalidad: en contextos ambiguos, es mejor decir 'This may have contributed to...' que 'This caused...'\n\nThe role of small talk in professional contexts: En culturas anglófonas, el small talk precede y sigue a las reuniones de negocios. Temas seguros: el tiempo, viajes, deportes. Evita política, religión y temas personales sensibles al inicio. En UK, el clima es un tema clásico de apertura. En EE.UU., preguntas como 'How's your weekend?' son comunes. El silencio incómodo se evita; se espera rellenar con conversación ligera antes de 'get down to business'.",
        contentEs: "El razonamiento causal claro es valorado en negocios; pero hedging es apropiado cuando la causalidad es incierta. El small talk es esencial antes de negocios: tiempo, viajes; evita política y religión.",
        region: "UK, US"
      },
      consolidationQuiz: [
        {
          question: "'Give rise to' significa:",
          options: [
            "Subir",
            "Causar / dar lugar a",
            "Crecer",
            "Mejorar"
          ],
          correctAnswer: 1,
          explanation: "Give rise to = causar (formal)"
        },
        {
          question: "'The problem stems from poor planning' significa que:",
          options: [
            "El problema mejorará con planificación",
            "El problema se origina en la mala planificación",
            "El problema no tiene solución",
            "El problema es nuevo"
          ],
          correctAnswer: 1,
          explanation: "Stem from = originarse de, tener como fuente"
        },
        {
          question: "¿Cuál es la diferencia entre 'affect' y 'effect'?",
          options: [
            "Son sinónimos",
            "Affect es verbo; Effect es generalmente sustantivo",
            "Effect es verbo; Affect es sustantivo",
            "Affect es formal; Effect es informal"
          ],
          correctAnswer: 1,
          explanation: "Affect (verbo) = influir; Effect (sustantivo) = efecto/resultado"
        },
        {
          question: "'Owing to the delay, we missed the deadline' - 'Owing to' equivale a:",
          options: [
            "A pesar de",
            "Debido a / Por causa de",
            "Sin importar",
            "Además de"
          ],
          correctAnswer: 1,
          explanation: "Owing to = debido a (formal)"
        },
        {
          question: "'We cut costs, thereby reducing expenses' - 'thereby' significa:",
          options: [
            "Sin embargo",
            "De ese modo / con lo cual",
            "A pesar de",
            "Aunque"
          ],
          correctAnswer: 1,
          explanation: "Thereby = de ese modo, y así (conecta acción con resultado)"
        },
        {
          question: "'Hence' se usa para:",
          options: [
            "Contrastar ideas",
            "Introducir una consecuencia/conclusión",
            "Dar ejemplos",
            "Expresar duda"
          ],
          correctAnswer: 1,
          explanation: "Hence = por lo tanto (introduce conclusión lógica)"
        }
      ],
      guidedProduction: [
        {
          prompt: "Analiza las causas y efectos de la transformación digital en empresas tradicionales",
          sampleResponse: "The rapid advancement of technology has given rise to fundamental shifts in how traditional businesses operate. The emergence of e-commerce platforms triggered a decline in physical retail traffic, thereby forcing many brick-and-mortar stores to reconsider their business models.\n\nThis digital transformation stems from changing consumer expectations. Customers now demand convenience and instant access; hence, companies that fail to adapt risk obsolescence.\n\nOwing to these market pressures, organizations have had to invest heavily in digital infrastructure. This has brought about significant changes in workforce requirements, as a result of which many companies now prioritize digital literacy in hiring.\n\nThe repercussions extend beyond operations. The shift to digital channels has implications for data privacy, cybersecurity, and customer relationships. Thus, successful transformation requires not only technological investment but also cultural change.\n\nHowever, it should be noted that not all traditional businesses have suffered. Those that effectively integrated digital tools with their existing strengths have managed to enhance customer experience, thereby gaining competitive advantage in an increasingly digital marketplace."
        },
        {
          prompt: "Explica una cadena de eventos históricos usando expresiones causales sofisticadas",
          sampleResponse: "The 2008 financial crisis provides a compelling case study in causal chains.\n\nThe crisis stemmed from the proliferation of subprime mortgages in the United States. Lax lending standards gave rise to a housing bubble, as even unqualified borrowers could obtain loans.\n\nWhen housing prices began to fall, this triggered a wave of defaults. Owing to the complex financial instruments tied to these mortgages, the losses spread rapidly throughout the global banking system.\n\nThe collapse of major financial institutions brought about a credit freeze. Banks became unwilling to lend, thereby paralyzing economic activity. Hence, businesses couldn't access capital, leading to layoffs and reduced consumer spending.\n\nThe repercussions were felt worldwide. As a result of interconnected global markets, the crisis spread to Europe and Asia. This, in turn, gave rise to sovereign debt crises in several countries.\n\nThe implications of this crisis continue to shape economic policy. Thus, regulators have implemented stricter oversight, though debate continues about whether these measures adequately address the underlying causes."
        },
        {
          prompt: "Presenta un problema en tu trabajo/estudios y analiza sus causas raíz",
          sampleResponse: "Our team has been experiencing consistently delayed project deliveries. A thorough analysis reveals that this problem stems from several interconnected factors.\n\nFirst, unclear requirements at the project outset have given rise to scope creep. As specifications change mid-project, this triggers rework and timeline extensions.\n\nSecond, owing to poor communication between departments, critical information often doesn't reach the right people in time. Hence, decisions are delayed and resources are misallocated.\n\nThird, the organization's hierarchical structure has brought about approval bottlenecks. Simple decisions require multiple sign-offs, thereby adding days to every milestone.\n\nThese factors compound each other. Scope creep leads to resource strain, which accounts for the increased errors. The errors, in turn, require rework, thus further extending timelines.\n\nThe implications are significant: client satisfaction has declined, and team morale is suffering. Therefore, we recommend addressing root causes rather than symptoms. Specifically, implementing clearer requirements processes and streamlining approvals would likely bring about meaningful improvement."
        }
      ],
      connectionToPrevious: "Las expresiones de causa/efecto son fundamentales en el discurso académico.",
      connectionToNext: "Los idioms de negocios ofrecen formas idiomáticas de expresar causalidad y consecuencias."
    },
    {
      id: 6,
      title: "Idiomatic Business Expressions",
      titleEs: "Expresiones Idiomáticas de Negocios",
      introduction: {
        title: "💼 Idioms de Negocios",
        explanation: "Los idioms de negocios son parte esencial del inglés corporativo. Su dominio demuestra fluidez avanzada y facilita la comunicación con nativos.",
        keyPoints: [
          "Finanzas: 'in the red/black', 'break even', 'ballpark figure'",
          "Decisiones: 'the ball is in your court', 'pull the plug', 'back to the drawing board'",
          "Trabajo: 'burning the midnight oil', 'go the extra mile', 'hit the ground running'",
          "Comunicación: 'read between the lines', 'on the same page', 'touch base'",
          "Estrategia: 'think outside the box', 'move the goalposts', 'raise the bar'"
        ],
        examples: [
          { english: "We're still in the red, but we expect to break even by Q3.", spanish: "Todavía estamos en números rojos, pero esperamos alcanzar el punto de equilibrio para el Q3.", explanation: "Términos financieros" },
          { english: "The ball is in their court now. Let's see how they respond.", spanish: "Ahora la pelota está en su cancha. Veamos cómo responden.", explanation: "Esperando respuesta del otro" },
          { english: "We need to go back to the drawing board with this design.", spanish: "Necesitamos volver a empezar con este diseño.", explanation: "Empezar de nuevo" }
        ],
        tips: [
          "💡 'Ballpark figure' = estimación aproximada",
          "💡 'Touch base' = comunicarse brevemente para actualizarse",
          "💡 Usa idioms con moderación - el exceso suena forzado"
        ],
        whenToUse: [
          "En reuniones financieras: \"We're still in the red, but we expect to break even by Q3\"",
          "En negociaciones: \"The ball is in their court now. Let's see how they respond\"",
          "En planning: \"We need to go back to the drawing board with this design\"",
          "En updates: \"Let's touch base next week to discuss progress\""
        ],
        whenNotToUse: [
          "En documentos formales o legales → evita idioms: \"in the red\" → \"operating at a loss\"",
          "Con audiencias no nativas → \"back to the drawing board\" puede confundir: explica o parafrasea",
          "En exceso → un idiom por conversación es natural; varios seguidos suenan forzados"
        ]
      },
      objectives: ["Comprender idioms de negocios comunes", "Usar idioms apropiadamente", "Mejorar fluidez en contextos corporativos"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-pragmatic-implicature"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l10t6_e1", word: "in the red / in the black", translation: "en números rojos / en números negros", type: "expression", definition: "losing/making money", definitionEs: "perdiendo/ganando dinero", example: "We're finally in the black.", exampleEs: "Finalmente estamos en números negros.", related: [], difficulty: 2 },
          { id: "l10t6_e2", word: "break even", translation: "alcanzar el punto de equilibrio", type: "expression", definition: "neither profit nor loss", definitionEs: "ni ganancia ni pérdida", example: "We should break even by June.", exampleEs: "Deberíamos alcanzar el punto de equilibrio para junio.", related: [], difficulty: 1 },
          { id: "l10t6_e3", word: "ballpark figure", translation: "cifra aproximada", type: "expression", definition: "rough estimate", definitionEs: "estimación aproximada", example: "Can you give me a ballpark figure?", exampleEs: "¿Puedes darme una cifra aproximada?", related: [], difficulty: 2 },
          { id: "l10t6_e4", word: "the ball is in your court", translation: "la pelota está en tu cancha", type: "expression", definition: "it's your turn to act", definitionEs: "es tu turno de actuar", example: "We made our offer. The ball is in your court.", exampleEs: "Hicimos nuestra oferta. La pelota está en tu cancha.", related: [], difficulty: 1 },
          { id: "l10t6_e5", word: "back to the drawing board", translation: "volver a empezar", type: "expression", definition: "start over", definitionEs: "empezar de nuevo", example: "That didn't work. Back to the drawing board.", exampleEs: "Eso no funcionó. Volver a empezar.", related: [], difficulty: 1 },
          { id: "l10t6_e6", word: "hit the ground running", translation: "empezar con fuerza", type: "expression", definition: "start successfully", definitionEs: "comenzar exitosamente", example: "The new hire hit the ground running.", exampleEs: "El nuevo empleado empezó con fuerza.", related: [], difficulty: 2 },
          { id: "l10t6_e7", word: "think outside the box", translation: "pensar fuera de la caja", type: "expression", definition: "think creatively", definitionEs: "pensar creativamente", example: "We need to think outside the box.", exampleEs: "Necesitamos pensar fuera de la caja.", related: [], difficulty: 1 },
          { id: "l10t6_e8", word: "touch base", translation: "ponerse en contacto brevemente", type: "expression", definition: "to make contact", definitionEs: "hacer contacto", example: "Let's touch base next week.", exampleEs: "Pongámonos en contacto la próxima semana.", related: [], difficulty: 1 },
          { id: "l10t6_e9", word: "go the extra mile", translation: "hacer un esfuerzo extra", type: "expression", definition: "do more than expected", definitionEs: "hacer más de lo esperado", example: "She always goes the extra mile.", exampleEs: "Ella siempre hace un esfuerzo extra.", related: [], difficulty: 1 },
          { id: "l10t6_e10", word: "raise the bar", translation: "elevar el estándar", type: "expression", definition: "set higher standards", definitionEs: "establecer estándares más altos", example: "They've raised the bar for customer service.", exampleEs: "Han elevado el estándar de servicio al cliente.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t6_cm1", wrong: "Translating idioms literally", correct: "Learn idioms as complete units; understand the concept, not word-by-word", explanation: "Idioms don't translate literally; learn the complete meaning", explanationEs: "Los idioms no se traducen literalmente; aprende el significado completo", category: "usage" },
        { id: "l10t6_cm2", wrong: "Overusing idioms (trying to sound native)", correct: "Use 1-2 idioms per conversation naturally, not one in every sentence", explanation: "Excessive use sounds forced and unnatural", explanationEs: "El uso excesivo suena forzado y poco natural", category: "usage" },
        { id: "l10t6_cm3", wrong: "'We are in the reds' (pluralizing)", correct: "'We are in the red' - 'red' is uncountable here", explanation: "'In the red/black' are fixed expressions", explanationEs: "'In the red/black' son expresiones fijas", category: "grammar" },
        { id: "l10t6_cm4", wrong: "Mixing metaphors: 'Let's hit the ground running and think outside the box while touching base'", correct: "Choose one metaphor per context; mixing confuses the message", explanation: "One idiom at a time; mixing sounds confusing", explanationEs: "Un idiom a la vez; mezclar suena confuso", category: "usage" },
        { id: "l10t6_cm5", wrong: "Using casual idioms in formal contexts", correct: "Some idioms like 'think outside the box' are acceptable formally; others like 'that's a no-brainer' are informal", explanation: "Know the formality level of each idiom", explanationEs: "Conoce el nivel de formalidad de cada idiom", category: "usage" }
      ],
      exercises: [
        {
          type: "context",
          instruction: "Elige el idiom correcto para cada situación",
          items: [
            {
              situation: "The project failed completely and you need to redesign from scratch.",
              options: ["back to the drawing board", "raise the bar", "touch base"],
              correct: "back to the drawing board",
              explanation: "Volver a empezar desde cero"
            },
            {
              situation: "You want a rough estimate of the project cost, not an exact figure.",
              options: ["break even point", "ballpark figure", "in the black"],
              correct: "ballpark figure",
              explanation: "Cifra aproximada"
            },
            {
              situation: "Your company made a profit for the first time.",
              options: ["in the red", "in the black", "break even"],
              correct: "in the black",
              explanation: "Ganando dinero (beneficios)"
            },
            {
              situation: "A new employee started last week and is already performing excellently.",
              options: ["go the extra mile", "hit the ground running", "raise the bar"],
              correct: "hit the ground running",
              explanation: "Empezó con fuerza desde el primer día"
            },
            {
              situation: "You've made your proposal and now the client needs to decide.",
              options: ["the ball is in your court", "back to the drawing board", "touch base"],
              correct: "the ball is in your court",
              explanation: "Es el turno del cliente"
            }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa con el idiom correcto",
          items: [
            { sentence: "Our sales are down 20%. We're deep _____ the _____.", answer: "in / red", full: "in the red" },
            { sentence: "Don't give me exact numbers, just a _____ _____.", answer: "ballpark figure", hint: "aproximación" },
            { sentence: "We need creative solutions. Let's _____ _____ the _____.", answer: "think outside / box", full: "think outside the box" },
            { sentence: "Let's _____ _____ next week to discuss progress.", answer: "touch base", hint: "comunicarnos brevemente" },
            { sentence: "She always _____ the _____ _____ for her clients.", answer: "goes / extra mile", full: "goes the extra mile" },
            { sentence: "The competitors have really _____ the _____ this year.", answer: "raised / bar", full: "raised the bar" }
          ]
        },
        {
          type: "dialogue-completion",
          instruction: "Completa el diálogo con idioms apropiados",
          dialogue: [
            { A: "How's the new product launch going?", B: "Not great. The initial design failed testing, so we're _____.", answer: "back to the drawing board" },
            { A: "That's tough. What about the budget?", B: "We're still _____, but we expect to _____ by Q4.", answer: "in the red... break even" },
            { A: "Well, at least the new marketing director seems promising.", B: "Yes, she's really _____. Already generated three new leads.", answer: "hit the ground running" },
            { A: "Good to hear. Let's _____ next week for an update.", B: "Sounds good. I'll have more concrete numbers—not just a _____.", answer: "touch base... ballpark figure" }
          ]
        },
        {
          type: "formal-informal",
          instruction: "Clasifica estos idioms por nivel de formalidad",
          idioms: [
            { idiom: "think outside the box", level: "acceptable in business", explanation: "Muy común en contextos corporativos" },
            { idiom: "ballpark figure", level: "acceptable in business", explanation: "Estándar en discusiones financieras" },
            { idiom: "it's a no-brainer", level: "informal", explanation: "Demasiado casual para reuniones formales" },
            { idiom: "raise the bar", level: "acceptable in business", explanation: "Común en performance reviews" },
            { idiom: "touch base", level: "acceptable in business", explanation: "Muy común pero algo 'corporate speak'" },
            { idiom: "bottom line", level: "acceptable in business", explanation: "Estándar en contextos financieros" }
          ]
        }
      ],
      modelDialogue: {
        title: "Reunión de actualización de proyecto",
        context: "Equipo discute el estado de un proyecto usando idioms de negocios",
        dialogue: [
          { speaker: "Project Manager", text: "Alright team, let's touch base on where we are. Sarah, can you give us a ballpark figure on the budget?", translation: "Bien equipo, pongámonos al día sobre dónde estamos. Sarah, ¿puedes darnos una cifra aproximada del presupuesto?" },
          { speaker: "Finance Lead", text: "We're still in the red, about 15% over budget. But if we cut back on the marketing spend, we should break even by month's end.", translation: "Todavía estamos en números rojos, alrededor del 15% sobre presupuesto. Pero si reducimos el gasto en marketing, deberíamos alcanzar el punto de equilibrio a fin de mes." },
          { speaker: "Marketing Director", text: "That's going to be tough. The competition has really raised the bar this quarter.", translation: "Eso va a ser difícil. La competencia realmente ha elevado el estándar este trimestre." },
          { speaker: "Project Manager", text: "I hear you. We might need to go back to the drawing board on our strategy. Any ideas?", translation: "Te escucho. Puede que necesitemos volver a empezar con nuestra estrategia. ¿Alguna idea?" },
          { speaker: "Creative Lead", text: "We need to think outside the box. What if we pivoted to a digital-first approach?", translation: "Necesitamos pensar fuera de la caja. ¿Qué si pivoteamos a un enfoque digital primero?" },
          { speaker: "Marketing Director", text: "Interesting. But the development team would need to hit the ground running to meet the deadline.", translation: "Interesante. Pero el equipo de desarrollo necesitaría empezar con fuerza para cumplir la fecha límite." },
          { speaker: "Project Manager", text: "True. I'll present this to the executives. After that, the ball is in their court. They'll need to decide if they want to go the extra mile or play it safe.", translation: "Cierto. Presentaré esto a los ejecutivos. Después de eso, la pelota estará en su cancha. Necesitarán decidir si quieren hacer el esfuerzo extra o ir a lo seguro." },
          { speaker: "Finance Lead", text: "Whatever they decide, we need a decision by Friday. We can't keep burning the midnight oil without clear direction.", translation: "Sea lo que decidan, necesitamos una decisión para el viernes. No podemos seguir quemando las cejas sin dirección clara." }
        ],
        keyPhrases: [
          { phrase: "touch base", translation: "ponernos al día", usage: "Iniciar reunión de actualización" },
          { phrase: "ballpark figure", translation: "cifra aproximada", usage: "Pedir estimación" },
          { phrase: "in the red / break even", translation: "en pérdidas / punto equilibrio", usage: "Estado financiero" },
          { phrase: "raised the bar", translation: "elevado el estándar", usage: "Competencia" },
          { phrase: "back to the drawing board", translation: "volver a empezar", usage: "Replantear estrategia" },
          { phrase: "think outside the box", translation: "pensar creativamente", usage: "Pedir ideas nuevas" },
          { phrase: "hit the ground running", translation: "empezar con fuerza", usage: "Expectativa de rápida ejecución" },
          { phrase: "the ball is in their court", translation: "depende de ellos", usage: "Transferir responsabilidad" },
          { phrase: "go the extra mile", translation: "hacer esfuerzo extra", usage: "Exceder expectativas" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [],
        intonationPatterns: [
          { pattern: "Natural emphasis on key words in idioms", example: "We're in the RED / in the BLACK", meaning: "Énfasis en la palabra clave del idiom" },
          { pattern: "Casual, flowing delivery", example: "Let's touch base later, shall we?", meaning: "Los idioms se dicen con fluidez, no palabra por palabra" }
        ]
      },
      culturalNote: {
        title: "Business Idioms Across Cultures",
        titleEs: "Idioms de negocios a través de culturas",
        content: "Muchos idioms de negocios en inglés vienen de deportes americanos (ballpark, touch base del béisbol; moving the goalposts del fútbol). Hablantes no nativos pueden no conocerlos, así que en contextos internacionales, considera si tu audiencia entenderá. Algunos idioms como 'think outside the box' se han globalizado y son ampliamente entendidos. Cuando dudes, usa lenguaje directo además del idiom.",
        contentEs: "Los idioms deportivos americanos son comunes en negocios; en contextos internacionales, asegura que tu audiencia los entienda."
      },
      consolidationQuiz: [
        {
          question: "'In the red' significa que la empresa:",
          options: [
            "Está ganando dinero",
            "Está perdiendo dinero",
            "Está en punto de equilibrio",
            "Está creciendo rápidamente"
          ],
          correctAnswer: 1,
          explanation: "In the red = pérdidas; In the black = ganancias"
        },
        {
          question: "'Ballpark figure' se refiere a:",
          options: [
            "Un número exacto",
            "Una estimación aproximada",
            "El precio final",
            "El presupuesto oficial"
          ],
          correctAnswer: 1,
          explanation: "Ballpark figure = cifra aproximada, no precisa"
        },
        {
          question: "'The ball is in your court' significa:",
          options: [
            "Necesitas practicar deportes",
            "Es tu turno de tomar acción/decidir",
            "El juego ha terminado",
            "Necesitas más información"
          ],
          correctAnswer: 1,
          explanation: "Del tenis/deportes - es turno del otro de actuar"
        },
        {
          question: "'Hit the ground running' describe a alguien que:",
          options: [
            "Se cayó corriendo",
            "Empezó algo con energía y éxito desde el inicio",
            "Llegó tarde al trabajo",
            "Terminó un proyecto rápido"
          ],
          correctAnswer: 1,
          explanation: "Empezar con fuerza, productivo desde el día uno"
        },
        {
          question: "'Back to the drawing board' sugiere:",
          options: [
            "El proyecto fue exitoso",
            "Hay que volver a empezar/replantear",
            "Necesitamos más arte",
            "Es hora de dibujar"
          ],
          correctAnswer: 1,
          explanation: "El plan falló; hay que empezar de nuevo"
        },
        {
          question: "'Touch base' significa:",
          options: [
            "Jugar béisbol",
            "Tocar físicamente algo",
            "Comunicarse brevemente para actualizarse",
            "Terminar un proyecto"
          ],
          correctAnswer: 2,
          explanation: "Touch base = hacer contacto breve, ponerse al día"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un email breve a tu equipo usando al menos 4 idioms de negocios de forma natural",
          sampleResponse: "Subject: Q3 Strategy Update\n\nHi Team,\n\nI wanted to touch base about our Q3 targets.\n\nAs you know, we've been in the red for the past two months, but I'm confident we can break even by September if we execute well.\n\nThe competition has raised the bar with their new product launch, so we'll need to think outside the box to differentiate ourselves. Our standard approach won't cut it this quarter.\n\nI've shared the new strategy with leadership, and now the ball is in their court for final approval. Once we get the green light, we'll need everyone to hit the ground running.\n\nI know many of you have been going the extra mile lately, and I appreciate it. Let's schedule a call next week—just a ballpark figure on timing, but probably Tuesday afternoon.\n\nThanks for your dedication.\n\nBest,\nAlex"
        },
        {
          prompt: "Describe una situación laboral difícil usando idioms de negocios",
          sampleResponse: "Last year, our department faced a major challenge. We had launched a new product that completely flopped—back to the drawing board for the entire team.\n\nThe project had put us deep in the red. We needed to break even quickly or face budget cuts. The pressure was immense, and everyone was burning the midnight oil trying to fix things.\n\nOur new director had just joined, but she hit the ground running with fresh ideas. She pushed us to think outside the box rather than sticking with failed approaches.\n\nShe presented a revised plan to the board and told us, 'I've made the case. Now the ball is in their court.' We waited anxiously.\n\nThe board approved the new direction, and within six months we were in the black again. The team really went the extra mile to make it happen. Our competitors had raised the bar, but we rose to meet it.\n\nLooking back, that experience taught me that failure isn't final—sometimes you just need to go back to the drawing board and try again."
        },
        {
          prompt: "Practica usando idioms financieros en una conversación sobre presupuesto",
          sampleResponse: "CFO: Can you give me a ballpark figure on the marketing budget for next year?\n\nMarketing Director: We're looking at around $2 million, but that's just a rough estimate.\n\nCFO: That's 20% more than this year. Will we stay in the black with that increase?\n\nMarketing Director: Based on projected ROI, we should not only stay profitable but exceed targets. We've been in the red on brand awareness metrics—this investment addresses that.\n\nCFO: What's the break even point for these campaigns?\n\nMarketing Director: If we hit our conversion targets, we break even in month four and generate profit from month five onward.\n\nCFO: The numbers look promising. I'll take this to the board. After that, the ball is in their court.\n\nMarketing Director: Thanks. I'm confident they'll see the value. Our competitors have raised the bar on digital presence—we need this to stay competitive.\n\nCFO: Agreed. Let's touch base after the board meeting. I should have their decision by Friday.\n\nMarketing Director: Sounds good. My team is ready to hit the ground running once we get approval."
        }
      ],
      connectionToPrevious: "Los idioms ofrecen formas coloquiales de expresar las relaciones causales formales del task anterior.",
      connectionToNext: "La nominalización elevará tu expresión de informal-idiomática a académica-formal."
    },
    {
      id: 7,
      title: "Noun Phrases and Nominalisation",
      titleEs: "Frases Nominales y Nominalización",
      introduction: {
        title: "📐 Nominalización",
        explanation: "La nominalización convierte verbos y adjetivos en sustantivos, creando un estilo más académico y formal. Es característica del inglés avanzado.",
        keyPoints: [
          "Verbo → Sustantivo: 'improve' → 'improvement', 'decide' → 'decision'",
          "Adjetivo → Sustantivo: 'complex' → 'complexity', 'available' → 'availability'",
          "Beneficios: más formal, más denso, más académico",
          "Estructura: 'The [noun] of [noun]' - 'The implementation of the policy'",
          "Verbos de apoyo: 'make a decision', 'reach an agreement', 'conduct research'"
        ],
        examples: [
          { english: "The implementation of new policies requires careful consideration.", spanish: "La implementación de nuevas políticas requiere consideración cuidadosa.", explanation: "Múltiples nominalizaciones" },
          { english: "There has been a significant reduction in costs. (vs. 'Costs have reduced significantly')", spanish: "Ha habido una reducción significativa en costos.", explanation: "Más formal que forma verbal" },
          { english: "The complexity of the situation became apparent.", spanish: "La complejidad de la situación se hizo evidente.", explanation: "Adjetivo → sustantivo" }
        ],
        tips: [
          "💡 La nominalización es muy común en escritura académica y técnica",
          "💡 No abuses - puede hacer el texto muy denso",
          "💡 'Make a decision' es más formal que 'decide'"
        ],
        whenToUse: [
          "En papers académicos: \"The implementation of new policies requires careful consideration\"",
          "En informes ejecutivos: \"There has been a significant reduction in costs\"",
          "En documentación técnica: \"The complexity of the situation became apparent\"",
          "En propuestas formales: \"We need to reach an agreement\" en vez de \"We need to agree\""
        ],
        whenNotToUse: [
          "En conversación casual → suena artificial: \"I decided to have coffee\" no \"I made the decision to have consumption of coffee\"",
          "En emails informales → demasiado denso: \"We'll decide\" es mejor que \"A decision will be made\"",
          "En presentaciones orales → la nominalización excesiva dificulta la comprensión"
        ]
      },
      objectives: ["Convertir verbos y adjetivos en sustantivos", "Usar verbos de apoyo", "Escribir en estilo más académico"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-nominalization", "c1-complex-noun-phrases"],
      vocabulary: {
        nouns: [
          { id: "l10t7_n1", word: "implementation", translation: "implementación", type: "noun", definition: "the act of implementing", definitionEs: "el acto de implementar", example: "The implementation was smooth.", exampleEs: "La implementación fue fluida.", related: ["implement"], difficulty: 2 },
          { id: "l10t7_n2", word: "consideration", translation: "consideración", type: "noun", definition: "the act of considering", definitionEs: "el acto de considerar", example: "This requires consideration.", exampleEs: "Esto requiere consideración.", related: ["consider"], difficulty: 1 },
          { id: "l10t7_n3", word: "reduction", translation: "reducción", type: "noun", definition: "the act of reducing", definitionEs: "el acto de reducir", example: "A 20% reduction in costs.", exampleEs: "Una reducción del 20% en costos.", related: ["reduce"], difficulty: 1 },
          { id: "l10t7_n4", word: "complexity", translation: "complejidad", type: "noun", definition: "the state of being complex", definitionEs: "el estado de ser complejo", example: "The complexity surprised us.", exampleEs: "La complejidad nos sorprendió.", related: ["complex"], difficulty: 2 },
          { id: "l10t7_n5", word: "availability", translation: "disponibilidad", type: "noun", definition: "the state of being available", definitionEs: "el estado de estar disponible", example: "Check for availability.", exampleEs: "Verifica la disponibilidad.", related: ["available"], difficulty: 1 },
        ],
        verbs: [
          { id: "l10t7_v1", word: "make a decision", translation: "tomar una decisión", type: "verb", definition: "to decide (nominal)", definitionEs: "decidir (nominal)", example: "We need to make a decision.", exampleEs: "Necesitamos tomar una decisión.", related: [], difficulty: 1 },
          { id: "l10t7_v2", word: "reach an agreement", translation: "llegar a un acuerdo", type: "verb", definition: "to agree (nominal)", definitionEs: "acordar (nominal)", example: "Can we reach an agreement?", exampleEs: "¿Podemos llegar a un acuerdo?", related: [], difficulty: 1 },
          { id: "l10t7_v3", word: "conduct research", translation: "realizar investigación", type: "verb", definition: "to research (nominal)", definitionEs: "investigar (nominal)", example: "We need to conduct more research.", exampleEs: "Necesitamos realizar más investigación.", related: [], difficulty: 2 },
          { id: "l10t7_v4", word: "give consideration to", translation: "dar consideración a", type: "verb", definition: "to consider (formal)", definitionEs: "considerar (formal)", example: "Please give consideration to this proposal.", exampleEs: "Por favor dé consideración a esta propuesta.", related: [], difficulty: 2 },
        ],
        adjectives: [],
        expressions: [
          { id: "l10t7_e1", word: "The [noun] of [noun]", translation: "La [sustantivo] de [sustantivo]", type: "expression", definition: "academic structure", definitionEs: "estructura académica", example: "The implementation of the policy...", exampleEs: "La implementación de la política...", related: [], difficulty: 2 },
          { id: "l10t7_e2", word: "There has been a [noun] in...", translation: "Ha habido un/una [sustantivo] en...", type: "expression", definition: "reporting changes", definitionEs: "reportando cambios", example: "There has been an increase in sales.", exampleEs: "Ha habido un aumento en ventas.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t7_cm1", wrong: "Over-nominalizing casual speech: 'I made the decision to have consumption of coffee'", correct: "'I decided to have coffee' - use nominalisation mainly in formal writing", explanation: "Nominalisation is for formal contexts; in conversation it sounds artificial", explanationEs: "La nominalización es para contextos formales; en conversación, suena artificial", category: "usage" },
        { id: "l10t7_cm2", wrong: "Wrong suffix: 'complexness' instead of 'complexity'", correct: "Learn correct suffixes: -tion, -ment, -ity, -ness, -ance/-ence", explanation: "Each root has its correct suffix; memorize them", explanationEs: "Cada raíz tiene su sufijo correcto; memorízalos", category: "grammar" },
        { id: "l10t7_cm3", wrong: "'The decision making' (missing hyphen or 'of')", correct: "'The decision-making process' or 'The making of decisions'", explanation: "Use hyphen for compound nouns or 'of' for formal structure", explanationEs: "Usa guion para compound nouns o 'of' para estructura formal", category: "grammar" },
        { id: "l10t7_cm4", wrong: "Nominalizing without a verb: 'The implementation quick'", correct: "'The quick implementation' or 'The implementation was quick'", explanation: "Nominalisations need complete grammatical structure", explanationEs: "Las nominalizaciones necesitan estructura gramatical completa", category: "grammar" },
        { id: "l10t7_cm5", wrong: "Using weak verbs with wrong nominalization: 'do a decision'", correct: "'Make a decision', 'reach a conclusion', 'conduct research' (fixed collocations)", explanation: "Learn the correct support verbs for each nominalisation", explanationEs: "Aprende los verbos de apoyo correctos para cada nominalización", category: "vocabulary" }
      ],
      exercises: [
        {
          type: "transformation",
          instruction: "Convierte estas oraciones usando nominalización",
          items: [
            {
              verbal: "We decided to expand the team.",
              nominal: "A decision was made to expand the team. / The decision to expand the team was made.",
              keyChange: "decided → decision"
            },
            {
              verbal: "They implemented the new system quickly.",
              nominal: "The implementation of the new system was carried out quickly.",
              keyChange: "implemented → implementation"
            },
            {
              verbal: "The situation is very complex, and we need to consider it carefully.",
              nominal: "The complexity of the situation requires careful consideration.",
              keyChange: "complex → complexity; consider → consideration"
            },
            {
              verbal: "We reduced costs and improved efficiency.",
              nominal: "There was a reduction in costs and an improvement in efficiency.",
              keyChange: "reduced → reduction; improved → improvement"
            },
            {
              verbal: "The company failed because it couldn't adapt.",
              nominal: "The company's failure resulted from its inability to adapt.",
              keyChange: "failed → failure; couldn't adapt → inability to adapt"
            }
          ]
        },
        {
          type: "suffix-formation",
          instruction: "Forma sustantivos usando el sufijo correcto",
          suffixes: {
            "-tion/-sion": ["implement → implementation", "decide → decision", "reduce → reduction", "conclude → conclusion", "discuss → discussion"],
            "-ment": ["improve → improvement", "develop → development", "achieve → achievement", "manage → management", "agree → agreement"],
            "-ity": ["complex → complexity", "available → availability", "possible → possibility", "necessary → necessity", "able → ability"],
            "-ness": ["aware → awareness", "effective → effectiveness", "ready → readiness", "weak → weakness", "useful → usefulness"],
            "-ance/-ence": ["important → importance", "different → difference", "tolerant → tolerance", "dependent → dependence", "significant → significance"]
          }
        },
        {
          type: "verb-support",
          instruction: "Elige el verbo de apoyo correcto",
          items: [
            { phrase: "_____ a decision", options: ["make", "do", "have"], correct: "make" },
            { phrase: "_____ an agreement", options: ["do", "reach", "find"], correct: "reach" },
            { phrase: "_____ research", options: ["make", "conduct", "create"], correct: "conduct" },
            { phrase: "_____ progress", options: ["do", "make", "get"], correct: "make" },
            { phrase: "_____ consideration to", options: ["make", "give", "put"], correct: "give" },
            { phrase: "_____ an analysis", options: ["carry out", "do", "make"], correct: "carry out", note: "also 'conduct'" },
            { phrase: "_____ a conclusion", options: ["make", "draw", "decide"], correct: "draw" },
            { phrase: "_____ approval", options: ["make", "grant", "do"], correct: "grant" }
          ]
        },
        {
          type: "academic-rewrite",
          instruction: "Reescribe estos párrafos en estilo académico usando nominalización",
          items: [
            {
              informal: "The team worked together well and completed the project on time because they communicated effectively.",
              formal: "Effective team collaboration and communication resulted in the timely completion of the project.",
              changes: ["worked together → collaboration", "communicated → communication", "completed → completion"]
            },
            {
              informal: "We investigated the problem and found that the software had failed because of a bug.",
              formal: "An investigation into the problem revealed that software failure was attributable to a bug.",
              changes: ["investigated → investigation", "found → revealed", "had failed → failure"]
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentación ejecutiva formal",
        context: "CEO presenta resultados usando lenguaje nominalizado formal",
        dialogue: [
          { speaker: "CEO", text: "Good morning. Today I'll provide an overview of our strategic achievements and outline our key considerations for the coming year.", translation: "Buenos días. Hoy daré un resumen de nuestros logros estratégicos y delinearé nuestras consideraciones clave para el próximo año." },
          { speaker: "CEO", text: "The implementation of our digital transformation strategy has resulted in a significant improvement in operational efficiency.", translation: "La implementación de nuestra estrategia de transformación digital ha resultado en una mejora significativa en eficiencia operacional." },
          { speaker: "CEO", text: "We've seen a 25% reduction in processing time and a corresponding increase in customer satisfaction.", translation: "Hemos visto una reducción del 25% en tiempo de procesamiento y un aumento correspondiente en satisfacción del cliente." },
          { speaker: "Board Member", text: "What was the complexity involved in achieving these results?", translation: "¿Cuál fue la complejidad involucrada en lograr estos resultados?" },
          { speaker: "CEO", text: "The complexity of the transition was considerable. However, through careful consideration of all factors and strong collaboration across departments, we managed the change effectively.", translation: "La complejidad de la transición fue considerable. Sin embargo, a través de consideración cuidadosa de todos los factores y colaboración fuerte entre departamentos, gestionamos el cambio efectivamente." },
          { speaker: "Board Member", text: "What decisions are pending for next quarter?", translation: "¿Qué decisiones están pendientes para el próximo trimestre?" },
          { speaker: "CEO", text: "The decision regarding international expansion requires further analysis. We'll conduct additional research before making a final determination.", translation: "La decisión respecto a expansión internacional requiere más análisis. Realizaremos investigación adicional antes de tomar una determinación final." }
        ],
        keyPhrases: [
          { phrase: "provide an overview of", translation: "dar un resumen de", usage: "Introducir presentación" },
          { phrase: "strategic achievements", translation: "logros estratégicos", usage: "Nominalización de 'achieved strategically'" },
          { phrase: "implementation of strategy", translation: "implementación de estrategia", usage: "Nominalización formal" },
          { phrase: "reduction in processing time", translation: "reducción en tiempo de procesamiento", usage: "Reportar cambio" },
          { phrase: "through careful consideration", translation: "a través de consideración cuidadosa", usage: "Explicar proceso" },
          { phrase: "conduct research / make a determination", translation: "realizar investigación / tomar una determinación", usage: "Verbos de apoyo formales" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "implementation", wrong: "im-ple-men-TA-tion", correct: "/ˌɪm.plɪ.menˈteɪ.ʃən/", tip: "im-plih-men-TAY-shun" },
          { word: "availability", wrong: "a-vai-la-BI-li-ty", correct: "/əˌveɪ.ləˈbɪl.ə.ti/", tip: "uh-vay-luh-BIL-uh-tee" },
          { word: "consideration", wrong: "con-si-de-RA-tion", correct: "/kənˌsɪd.əˈreɪ.ʃən/", tip: "kun-sid-uh-RAY-shun" }
        ],
        intonationPatterns: [
          { pattern: "Stress on penultimate syllable for -tion words", example: "implementaTION, consideraTION", meaning: "El acento cae antes de -tion" },
          { pattern: "Stress on antepenultimate for -ity words", example: "availaBILity, comPLEXity", meaning: "El acento cae dos sílabas antes de -ity" }
        ]
      },
      culturalNote: {
        title: "Nominalisation in Professional Contexts",
        titleEs: "Nominalización en contextos profesionales",
        content: "La nominalización varía por contexto. En documentos legales y académicos, es esperada y demuestra formalidad. En comunicación interna, exceso de nominalización puede percibirse como burocrático o evasivo (ej: 'mistakes were made' evita decir quién). En el plain language movement, se favorece lenguaje más directo. Adapta tu estilo: más nominalización para documentos formales, menos para comunicación día a día.",
        contentEs: "La nominalización es apropiada para contextos formales pero puede ser excesiva en comunicación cotidiana."
      },
      consolidationQuiz: [
        {
          question: "La nominalización de 'decide' es:",
          options: ["decidement", "decision", "decideness", "decidity"],
          correctAnswer: 1,
          explanation: "decide → decision (sufijo -sion)"
        },
        {
          question: "La forma nominalizada de 'The system is very complex' es:",
          options: [
            "The system has complexity",
            "The complexity of the system",
            "The complexness of system",
            "The system is complexity"
          ],
          correctAnswer: 1,
          explanation: "complex → complexity; estructura 'The X of Y'"
        },
        {
          question: "El verbo de apoyo correcto para 'decision' es:",
          options: ["do a decision", "make a decision", "have a decision", "get a decision"],
          correctAnswer: 1,
          explanation: "Colocación fija: make a decision"
        },
        {
          question: "'Conduct research' es más formal que:",
          options: ["make research", "do research", "study things", "investigate"],
          correctAnswer: 2,
          explanation: "conduct research > do research (más formal)"
        },
        {
          question: "La nominalización de 'effective' es:",
          options: ["effectivity", "effectiveness", "effectment", "effection"],
          correctAnswer: 1,
          explanation: "effective → effectiveness (sufijo -ness)"
        },
        {
          question: "'There has been a reduction in costs' es más formal que:",
          options: [
            "Costs reduced",
            "We reduced costs",
            "Costs have reduced",
            "Todas son igual de formales"
          ],
          correctAnswer: 1,
          explanation: "La estructura nominalizada es más formal que la verbal directa"
        }
      ],
      guidedProduction: [
        {
          prompt: "Reescribe este párrafo informal en estilo académico nominalizado",
          informal: "Our team worked hard last quarter. We improved our processes, decided to expand to new markets, and we succeeded in reducing costs by 15%. We also collaborated better with other departments.",
          sampleResponse: "Significant progress was made during the previous quarter. There was a notable improvement in operational processes, and a strategic decision was made regarding market expansion. A 15% cost reduction was achieved. Furthermore, enhanced collaboration with other departments contributed to our overall success.\n\nAlternatively: The team's dedication in the previous quarter resulted in process improvements, a market expansion decision, a 15% reduction in costs, and strengthened interdepartmental collaboration."
        },
        {
          prompt: "Escribe un resumen ejecutivo de un proyecto usando nominalización formal",
          sampleResponse: "Executive Summary: Digital Transformation Initiative\n\nThis report provides an overview of the implementation of the digital transformation initiative and its impact on organizational performance.\n\nKey Achievements:\n- The modernization of legacy systems resulted in a 30% improvement in processing efficiency.\n- The integration of new platforms facilitated enhanced collaboration across departments.\n- Training program completion rates indicated strong employee engagement with the transformation.\n\nChallenges and Considerations:\n- The complexity of data migration required careful consideration and extended timelines.\n- Budget adjustments became necessary due to the identification of additional requirements.\n\nRecommendations:\n- Continuation of investment in digital infrastructure is advisable.\n- The establishment of a dedicated support team warrants consideration.\n- Regular assessment of progress will ensure the achievement of long-term objectives.\n\nConclusion:\nThe successful implementation of this initiative demonstrates the organization's commitment to operational excellence and positions us favorably for future growth."
        },
        {
          prompt: "Practica convertir conversación casual a reporte formal nominalizado",
          casual: "We talked about the problem and figured out what was wrong. Then we fixed the bug and tested everything. The system works fine now.",
          sampleResponse: "Formal Report Version:\n\nFollowing a thorough discussion of the issue, a determination was made regarding the root cause. The identification of a software bug led to the implementation of a corrective solution. Subsequent testing confirmed the restoration of full system functionality.\n\nAlternative:\n\nThe problem was addressed through collaborative discussion, which resulted in the identification of the underlying issue. The bug was resolved through appropriate remediation measures, and comprehensive testing validated the effectiveness of the solution. System functionality has been fully restored."
        }
      ],
      connectionToPrevious: "La nominalización te permite expresar idioms de negocios de forma más académica.",
      connectionToNext: "El lenguaje legal usa nominalización extensivamente junto con terminología específica."
    },
    {
      id: 8,
      title: "Legal and Contractual Language",
      titleEs: "Lenguaje Legal y Contractual",
      introduction: {
        title: "⚖️ Lenguaje Legal",
        explanation: "El inglés legal tiene características únicas. Aunque no seas abogado, entender este registro es importante en negocios.",
        keyPoints: [
          "Términos: 'hereby', 'whereas', 'notwithstanding', 'hereafter'",
          "Obligaciones: 'shall' (obligación), 'may' (permiso), 'must not' (prohibición)",
          "Partes: 'the Party', 'the undersigned', 'hereinafter referred to as'",
          "Condiciones: 'subject to', 'in the event of', 'provided that'",
          "Acciones: 'terminate', 'waive', 'indemnify', 'breach'"
        ],
        examples: [
          { english: "The Party hereby agrees to the terms and conditions set forth herein.", spanish: "La Parte por la presente acepta los términos y condiciones establecidos en el presente.", explanation: "Lenguaje contractual típico" },
          { english: "Notwithstanding the foregoing, the agreement shall remain in force.", spanish: "No obstante lo anterior, el acuerdo permanecerá en vigor.", explanation: "Uso de 'notwithstanding'" },
          { english: "In the event of a breach, either party may terminate this agreement.", spanish: "En caso de incumplimiento, cualquiera de las partes puede rescindir este acuerdo.", explanation: "Condición + consecuencia" }
        ],
        tips: [
          "💡 'Shall' en contratos indica obligación, no futuro",
          "💡 'Whereas' introduce los antecedentes/considerandos",
          "💡 Siempre consulta a un abogado para documentos legales reales"
        ],
        whenToUse: [
          "En contratos y acuerdos: \"The Party hereby agrees to the terms and conditions set forth herein\"",
          "En cláusulas contractuales: \"Notwithstanding the foregoing, the agreement shall remain in force\"",
          "En documentos legales: \"In the event of a breach, either party may terminate this agreement\"",
          "En considerandos: \"Whereas the parties wish to establish...\""
        ],
        whenNotToUse: [
          "En emails de negocios → \"hereby\" es solo para documentos oficiales: no en correos normales",
          "En conversación → \"shall\" suena arcaico: usa \"must\" o \"will\" en habla",
          "En contextos informales → \"wherein\", \"therein\" suenan pretenciosos fuera de documentos legales"
        ]
      },
      objectives: ["Entender terminología legal básica", "Leer contratos en inglés", "Usar lenguaje formal apropiado"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-nominalization", "c1-subjunctive"],
      vocabulary: {
        nouns: [
          { id: "l10t8_n1", word: "breach", translation: "incumplimiento", type: "noun", definition: "violation of contract", definitionEs: "violación de contrato", example: "This is a breach of contract.", exampleEs: "Esto es un incumplimiento de contrato.", related: [], difficulty: 2 },
          { id: "l10t8_n2", word: "liability", translation: "responsabilidad", type: "noun", definition: "legal responsibility", definitionEs: "responsabilidad legal", example: "We accept no liability.", exampleEs: "No aceptamos responsabilidad.", related: ["liable"], difficulty: 2 },
          { id: "l10t8_n3", word: "indemnity", translation: "indemnización", type: "noun", definition: "compensation for loss", definitionEs: "compensación por pérdida", example: "The indemnity clause states...", exampleEs: "La cláusula de indemnización establece...", related: ["indemnify"], difficulty: 2 },
          { id: "l10t8_n4", word: "clause", translation: "cláusula", type: "noun", definition: "section of contract", definitionEs: "sección de contrato", example: "See clause 5.2.", exampleEs: "Ver cláusula 5.2.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l10t8_v1", word: "terminate", translation: "rescindir/terminar", type: "verb", definition: "to end agreement", definitionEs: "terminar acuerdo", example: "Either party may terminate...", exampleEs: "Cualquiera de las partes puede rescindir...", related: ["termination"], difficulty: 2 },
          { id: "l10t8_v2", word: "waive", translation: "renunciar a", type: "verb", definition: "to give up right", definitionEs: "renunciar a derecho", example: "You cannot waive this right.", exampleEs: "No puede renunciar a este derecho.", related: ["waiver"], difficulty: 2 },
          { id: "l10t8_v3", word: "indemnify", translation: "indemnizar", type: "verb", definition: "to compensate for loss", definitionEs: "compensar por pérdida", example: "You agree to indemnify us.", exampleEs: "Usted acepta indemnizarnos.", related: [], difficulty: 2 },
          { id: "l10t8_v4", word: "bind", translation: "vincular/obligar", type: "verb", definition: "to legally obligate", definitionEs: "obligar legalmente", example: "This contract binds both parties.", exampleEs: "Este contrato vincula a ambas partes.", related: ["binding"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l10t8_a1", word: "binding", translation: "vinculante", type: "adjective", definition: "legally enforceable", definitionEs: "legalmente exigible", example: "This is a binding agreement.", exampleEs: "Este es un acuerdo vinculante.", related: [], difficulty: 2 },
          { id: "l10t8_a2", word: "void", translation: "nulo", type: "adjective", definition: "not valid", definitionEs: "no válido", example: "The contract is void.", exampleEs: "El contrato es nulo.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l10t8_e1", word: "hereby", translation: "por la presente", type: "expression", definition: "by this document", definitionEs: "por este documento", example: "I hereby confirm...", exampleEs: "Por la presente confirmo...", related: [], difficulty: 2 },
          { id: "l10t8_e2", word: "whereas", translation: "considerando que", type: "expression", definition: "introducing background", definitionEs: "introduciendo antecedentes", example: "Whereas the parties agree...", exampleEs: "Considerando que las partes acuerdan...", related: [], difficulty: 2 },
          { id: "l10t8_e3", word: "subject to", translation: "sujeto a", type: "expression", definition: "conditional upon", definitionEs: "condicionado a", example: "Subject to approval...", exampleEs: "Sujeto a aprobación...", related: [], difficulty: 1 },
          { id: "l10t8_e4", word: "in the event of", translation: "en caso de", type: "expression", definition: "if something happens", definitionEs: "si algo sucede", example: "In the event of termination...", exampleEs: "En caso de terminación...", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t8_cm1", wrong: "Using 'will' instead of 'shall' in contracts", correct: "'The Contractor SHALL deliver...' (obligation) vs 'will' (future prediction)", explanation: "In contracts, 'shall' expresses legal obligation; 'will' is weaker", explanationEs: "En contratos, 'shall' = obligación legal; 'will' es más débil", category: "usage" },
        { id: "l10t8_cm2", wrong: "Confusing 'void' and 'voidable'", correct: "'Void' = never valid; 'Voidable' = valid until challenged", explanation: "Void means invalid from the start; voidable means valid until challenged", explanationEs: "Void = nulo ab initio; Voidable = anulable", category: "vocabulary" },
        { id: "l10t8_cm3", wrong: "Using casual language: 'if something goes wrong'", correct: "'In the event of a breach...' or 'Should any party fail to comply...'", explanation: "Legal language requires formal precision", explanationEs: "El lenguaje legal requiere precisión formal", category: "usage" },
        { id: "l10t8_cm4", wrong: "Omitting 'the' before 'Party': 'Party agrees'", correct: "'The Party hereby agrees...' or 'The Parties agree...'", explanation: "In contracts, parties take the definite article", explanationEs: "En contratos, las partes llevan artículo definido", category: "grammar" },
        { id: "l10t8_cm5", wrong: "Using 'hereby' incorrectly in casual contexts", correct: "'Hereby' is strictly for formal/legal documents, not emails", explanation: "'Hereby' means 'by this document'; only for official documents", explanationEs: "'Hereby' = por la presente; solo documentos oficiales", category: "usage" }
      ],
      exercises: [
        {
          type: "vocabulary-matching",
          instruction: "Empareja términos legales con su significado",
          pairs: [
            { term: "hereby", meaning: "by this document/action" },
            { term: "whereas", meaning: "considering that (preamble)" },
            { term: "notwithstanding", meaning: "despite/regardless of" },
            { term: "hereafter", meaning: "from this point forward" },
            { term: "therein", meaning: "in that document" },
            { term: "forthwith", meaning: "immediately" },
            { term: "subject to", meaning: "conditional upon" },
            { term: "in lieu of", meaning: "instead of" }
          ]
        },
        {
          type: "interpretation",
          instruction: "Interpreta estas cláusulas contractuales",
          items: [
            {
              clause: "The Contractor shall indemnify the Client against all claims arising from Contractor's negligence.",
              interpretation: "El contratista debe compensar al cliente por cualquier demanda que surja de negligencia del contratista.",
              keyTerms: ["shall (obligación)", "indemnify (compensar)", "arising from (que surja de)"]
            },
            {
              clause: "This Agreement may be terminated by either Party upon thirty (30) days' written notice.",
              interpretation: "El contrato puede terminarse por cualquier parte con 30 días de aviso escrito.",
              keyTerms: ["may (puede/permiso)", "terminated (rescindido)", "upon (después de)"]
            },
            {
              clause: "Notwithstanding the foregoing, Clause 5 shall survive termination of this Agreement.",
              interpretation: "A pesar de lo anterior, la Cláusula 5 continuará vigente después de terminado el acuerdo.",
              keyTerms: ["notwithstanding (a pesar de)", "survive (sobrevivir/seguir vigente)"]
            },
            {
              clause: "The Party shall not assign this Agreement without the prior written consent of the other Party.",
              interpretation: "La Parte no puede ceder este contrato sin consentimiento escrito previo de la otra parte.",
              keyTerms: ["shall not (prohibición)", "assign (ceder/transferir)", "prior (previo)"]
            }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa las cláusulas con vocabulario legal",
          items: [
            { clause: "The Company _____ agrees to the terms set forth _____.", answers: ["hereby", "herein"] },
            { clause: "_____ the Parties wish to enter into this Agreement...", answer: "Whereas" },
            { clause: "_____ _____ _____ a breach, either party may terminate this Agreement.", answer: "In the event of" },
            { clause: "This Agreement shall be _____ upon both Parties.", answer: "binding" },
            { clause: "Failure to enforce any clause shall not constitute a _____ of that right.", answer: "waiver" },
            { clause: "Either party may _____ this Agreement with 30 days' notice.", answer: "terminate" }
          ]
        },
        {
          type: "drafting",
          instruction: "Redacta cláusulas usando lenguaje legal apropiado",
          items: [
            {
              requirement: "The client must pay within 30 days",
              legalVersion: "The Client shall remit payment within thirty (30) days of receipt of invoice.",
              notes: "shall (obligación), remit (formal para 'pay'), números escritos y numéricos"
            },
            {
              requirement: "If there's a problem, we can cancel the contract",
              legalVersion: "In the event of a material breach, either Party may terminate this Agreement forthwith.",
              notes: "In the event of, material breach, may, terminate, forthwith"
            },
            {
              requirement: "Both companies agree to keep information secret",
              legalVersion: "Both Parties hereby undertake to maintain the confidentiality of all proprietary information disclosed hereunder.",
              notes: "hereby, undertake, maintain confidentiality, proprietary, hereunder"
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Negociación de contrato",
        context: "Abogados discuten términos de un acuerdo",
        dialogue: [
          { speaker: "Lawyer A", text: "Looking at Clause 7, we have concerns about the indemnification provision. It's too broad as currently drafted.", translation: "Viendo la Cláusula 7, tenemos preocupaciones sobre la provisión de indemnización. Es demasiado amplia como está redactada." },
          { speaker: "Lawyer B", text: "We believe the clause is standard. The Contractor shall indemnify the Client against claims arising from negligence.", translation: "Creemos que la cláusula es estándar. El Contratista indemnizará al Cliente contra reclamaciones que surjan de negligencia." },
          { speaker: "Lawyer A", text: "We'd like to limit liability to direct damages. The current wording would make our client liable for consequential damages.", translation: "Nos gustaría limitar la responsabilidad a daños directos. La redacción actual haría a nuestro cliente responsable de daños consecuenciales." },
          { speaker: "Lawyer B", text: "We can add a cap. How about: 'The maximum aggregate liability shall not exceed the total fees paid hereunder'?", translation: "Podemos agregar un límite. ¿Qué tal: 'La responsabilidad máxima total no excederá el total de honorarios pagados bajo este acuerdo'?" },
          { speaker: "Lawyer A", text: "That's acceptable. Regarding termination, we'd like the right to terminate for convenience with 60 days' notice.", translation: "Eso es aceptable. Respecto a terminación, quisiéramos el derecho de terminar por conveniencia con 60 días de aviso." },
          { speaker: "Lawyer B", text: "We can agree to that, subject to payment for work completed up to the termination date.", translation: "Podemos acordar eso, sujeto al pago por trabajo completado hasta la fecha de terminación." },
          { speaker: "Lawyer A", text: "Agreed. We'll also need to ensure that Clause 12, the confidentiality provision, survives termination.", translation: "Acordado. También necesitaremos asegurar que la Cláusula 12, la provisión de confidencialidad, sobreviva a la terminación." },
          { speaker: "Lawyer B", text: "Of course. We'll add: 'Notwithstanding termination, the obligations under Clause 12 shall remain in force for a period of five (5) years.'", translation: "Por supuesto. Agregaremos: 'No obstante la terminación, las obligaciones bajo la Cláusula 12 permanecerán en vigor por un período de cinco (5) años.'" }
        ],
        keyPhrases: [
          { phrase: "as currently drafted", translation: "como está redactado actualmente", usage: "Referirse al texto actual" },
          { phrase: "shall indemnify against", translation: "indemnizará contra", usage: "Obligación de compensación" },
          { phrase: "liable for consequential damages", translation: "responsable de daños consecuenciales", usage: "Tipo de responsabilidad" },
          { phrase: "subject to payment for work completed", translation: "sujeto al pago por trabajo completado", usage: "Condición" },
          { phrase: "survives termination", translation: "sobrevive a la terminación", usage: "Cláusulas que continúan vigentes" },
          { phrase: "shall remain in force", translation: "permanecerá en vigor", usage: "Vigencia" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "liability", wrong: "li-a-BI-li-ty", correct: "/ˌlaɪ.əˈbɪl.ə.ti/", tip: "ly-uh-BIL-i-tee" },
          { word: "indemnify", wrong: "in-DEM-ni-fy", correct: "/ɪnˈdem.nɪ.faɪ/", tip: "in-DEM-ni-fy" },
          { word: "clause", wrong: "cla-oo-se", correct: "/klɔːz/", tip: "KLAWZ (rima con 'cause')" },
          { word: "breach", wrong: "britch", correct: "/briːtʃ/", tip: "BREECH (ee largo)" }
        ],
        intonationPatterns: [
          { pattern: "Formal, measured delivery for legal language", example: "The Party shall↘ indemnify↗ the Client↘.", meaning: "Tono formal, pausado, claro" },
          { pattern: "Emphasis on key obligations", example: "The Contractor SHALL deliver on time.", meaning: "Énfasis en 'shall' para obligación" }
        ]
      },
      culturalNote: {
        title: "Legal English Across Jurisdictions",
        titleEs: "Inglés legal entre jurisdicciones",
        content: "El inglés legal varía entre jurisdicciones. El Common Law (UK, US, Australia) usa términos como 'tort', 'consideration', 'estoppel'. Contratos internacionales a menudo especifican qué derecho aplica ('This Agreement shall be governed by the laws of England'). En acuerdos con partes no angloparlantes, muchas empresas ahora favorecen el 'plain English' legal para evitar ambigüedades. Sin embargo, ciertos términos como 'hereby', 'notwithstanding' siguen siendo estándar.",
        contentEs: "El inglés legal tiene variaciones por jurisdicción; contratos internacionales deben especificar qué ley aplica."
      },
      consolidationQuiz: [
        {
          question: "'Hereby' significa:",
          options: [
            "Cerca de aquí",
            "Por la presente / Por este medio",
            "Escuchar",
            "De acuerdo"
          ],
          correctAnswer: 1,
          explanation: "Hereby = por la presente; introduce acción formal"
        },
        {
          question: "'Shall' en un contrato indica:",
          options: [
            "Sugerencia",
            "Posibilidad futura",
            "Obligación legal",
            "Deseo"
          ],
          correctAnswer: 2,
          explanation: "En lenguaje legal, 'shall' = obligación, no futuro"
        },
        {
          question: "'Notwithstanding the foregoing' significa:",
          options: [
            "Siguiendo lo anterior",
            "Debido a lo anterior",
            "A pesar de lo anterior",
            "Antes de lo anterior"
          ],
          correctAnswer: 2,
          explanation: "Notwithstanding = a pesar de, sin embargo"
        },
        {
          question: "Un contrato 'void' es:",
          options: [
            "Válido pero difícil",
            "Nulo desde el inicio",
            "Parcialmente válido",
            "Válido hasta ser disputado"
          ],
          correctAnswer: 1,
          explanation: "Void = nulo; nunca tuvo validez legal"
        },
        {
          question: "'Waive' un derecho significa:",
          options: [
            "Ejercer el derecho",
            "Renunciar voluntariamente al derecho",
            "Transferir el derecho",
            "Defender el derecho"
          ],
          correctAnswer: 1,
          explanation: "Waive = renunciar a; voluntariamente no ejercer"
        },
        {
          question: "'Subject to approval' significa:",
          options: [
            "Aprobado definitivamente",
            "Condicionado a la aprobación",
            "Sin necesidad de aprobación",
            "Rechazado"
          ],
          correctAnswer: 1,
          explanation: "Subject to = condicionado a, dependiendo de"
        }
      ],
      guidedProduction: [
        {
          prompt: "Redacta una cláusula de confidencialidad básica",
          sampleResponse: "CONFIDENTIALITY\n\n1. Both Parties hereby agree to maintain the confidentiality of all proprietary information disclosed by the other Party pursuant to this Agreement.\n\n2. 'Confidential Information' shall include, but not be limited to, trade secrets, business plans, customer data, technical specifications, and financial information.\n\n3. The receiving Party shall:\n   (a) Use Confidential Information solely for the purposes of this Agreement;\n   (b) Not disclose such information to third parties without prior written consent;\n   (c) Take reasonable measures to protect the confidentiality of the information.\n\n4. These obligations shall survive termination of this Agreement for a period of five (5) years.\n\n5. The foregoing restrictions shall not apply to information that:\n   (a) Was publicly available at the time of disclosure;\n   (b) Becomes publicly available through no fault of the receiving Party;\n   (c) Was lawfully in the receiving Party's possession prior to disclosure."
        },
        {
          prompt: "Redacta una cláusula de terminación con diferentes escenarios",
          sampleResponse: "TERMINATION\n\n1. Termination for Convenience\nEither Party may terminate this Agreement at any time by providing sixty (60) days' prior written notice to the other Party.\n\n2. Termination for Cause\nEither Party may terminate this Agreement forthwith upon written notice if:\n   (a) The other Party commits a material breach and fails to remedy such breach within thirty (30) days of receiving written notice thereof;\n   (b) The other Party becomes insolvent or files for bankruptcy.\n\n3. Effect of Termination\nUpon termination:\n   (a) All outstanding amounts shall become immediately due and payable;\n   (b) Each Party shall return or destroy all Confidential Information of the other Party;\n   (c) Clauses 7 (Confidentiality), 8 (Limitation of Liability), and 12 (Governing Law) shall survive termination.\n\n4. Termination shall not affect any rights, remedies, or obligations that have accrued prior to the date of termination."
        },
        {
          prompt: "Interpreta y simplifica este fragmento contractual",
          legalText: "Notwithstanding any provision herein to the contrary, in the event that the Client fails to remit payment within the time period specified herein, the Provider shall be entitled, but not obligated, to suspend performance of the Services forthwith, without liability, until such time as all outstanding amounts have been received in full.",
          sampleResponse: "Plain English Interpretation:\n\nDespite anything else in this contract, if the Client doesn't pay on time, the Provider can stop working immediately without being held responsible, until all owed money is paid in full.\n\nKey Term Breakdown:\n- 'Notwithstanding any provision herein to the contrary' = Despite anything else in this contract that might say otherwise\n- 'fails to remit payment' = doesn't pay\n- 'within the time period specified herein' = by the deadline stated in this contract\n- 'shall be entitled, but not obligated' = has the right but doesn't have to\n- 'forthwith' = immediately\n- 'without liability' = without being responsible for damages\n- 'until such time as' = until\n- 'received in full' = paid completely"
        }
      ],
      connectionToPrevious: "El lenguaje legal usa nominalización extensivamente ('termination', 'indemnification').",
      connectionToNext: "Hedging y boosting te ayudarán a modular el tono en diferentes contextos."
    },
    {
      id: 9,
      title: "Hedging and Boosting",
      titleEs: "Hedging y Boosting",
      introduction: {
        title: "📊 Hedging y Boosting",
        explanation: "Hedging suaviza afirmaciones, boosting las fortalece. El equilibrio adecuado muestra madurez comunicativa.",
        keyPoints: [
          "Hedging (suavizar): 'tend to', 'may', 'somewhat', 'to some extent'",
          "Boosting (fortalecer): 'clearly', 'undoubtedly', 'certainly', 'obviously'",
          "Hedging modal: 'might', 'could', 'would seem'",
          "Hedging verbal: 'appear to', 'seem to', 'suggest that'",
          "Cuándo usar cada uno: datos firmes = boost; interpretaciones = hedge"
        ],
        examples: [
          { english: "The results would seem to suggest a correlation. (hedged)", spanish: "Los resultados parecerían sugerir una correlación. (suavizado)", explanation: "Múltiples hedges" },
          { english: "The data clearly demonstrate a significant improvement. (boosted)", spanish: "Los datos claramente demuestran una mejora significativa. (fortalecido)", explanation: "Boosting con confianza" },
          { english: "This might, to some extent, account for the discrepancy.", spanish: "Esto podría, hasta cierto punto, explicar la discrepancia.", explanation: "Hedging combinado" }
        ],
        tips: [
          "💡 Demasiado hedging suena inseguro; demasiado boosting, arrogante",
          "💡 En ciencia, hedging es la norma; en ventas, boosting",
          "💡 El contexto determina el nivel apropiado"
        ],
        whenToUse: [
          "En papers científicos: \"The results would seem to suggest a correlation\" (hedged)",
          "En presentaciones con datos sólidos: \"The data clearly demonstrate a significant improvement\" (boosted)",
          "En informes con incertidumbre: \"This might, to some extent, account for the discrepancy\"",
          "En ventas o marketing: \"Our product delivers proven, measurable results\" (boosted)"
        ],
        whenNotToUse: [
          "En ventas → \"Our product might possibly be good\" suena inseguro: proyecta confianza con evidencia",
          "En ciencia → \"The theory is definitely correct\" sin evidencia firme: usa hedging",
          "Mezclando en la misma frase → \"This is definitely somewhat important\" es contradictorio"
        ]
      },
      objectives: ["Usar hedging apropiadamente", "Usar boosting con confianza", "Calibrar el nivel de certeza"],
      estimatedMinutes: 30,
      grammarTheoryIds: ["c1-hedging"],
      vocabulary: {
        nouns: [],
        verbs: [
          { id: "l10t9_v1", word: "appear to", translation: "parecer", type: "verb", definition: "seem (hedging)", definitionEs: "parecer (hedging)", example: "This appears to be correct.", exampleEs: "Esto parece ser correcto.", related: [], difficulty: 1 },
          { id: "l10t9_v2", word: "tend to", translation: "tender a", type: "verb", definition: "usually (hedging)", definitionEs: "usualmente (hedging)", example: "Prices tend to rise.", exampleEs: "Los precios tienden a subir.", related: [], difficulty: 1 },
          { id: "l10t9_v3", word: "suggest", translation: "sugerir", type: "verb", definition: "indicate tentatively", definitionEs: "indicar tentativamente", example: "The data suggest that...", exampleEs: "Los datos sugieren que...", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l10t9_a1", word: "apparent", translation: "aparente", type: "adjective", definition: "seeming (hedging)", definitionEs: "que parece (hedging)", example: "The apparent cause is...", exampleEs: "La causa aparente es...", related: [], difficulty: 2 },
          { id: "l10t9_a2", word: "considerable", translation: "considerable", type: "adjective", definition: "significant (moderate boost)", definitionEs: "significativo (boost moderado)", example: "There's considerable evidence.", exampleEs: "Hay evidencia considerable.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l10t9_e1", word: "to some extent", translation: "hasta cierto punto", type: "expression", definition: "partially (hedging)", definitionEs: "parcialmente (hedging)", example: "This is true to some extent.", exampleEs: "Esto es cierto hasta cierto punto.", related: [], difficulty: 1 },
          { id: "l10t9_e2", word: "It would appear that...", translation: "Parecería que...", type: "expression", definition: "tentative (strong hedging)", definitionEs: "tentativo (hedging fuerte)", example: "It would appear that we were wrong.", exampleEs: "Parecería que estábamos equivocados.", related: [], difficulty: 2 },
          { id: "l10t9_e3", word: "There is no doubt that...", translation: "No hay duda de que...", type: "expression", definition: "certain (boosting)", definitionEs: "cierto (boosting)", example: "There is no doubt that this works.", exampleEs: "No hay duda de que esto funciona.", related: [], difficulty: 1 },
          { id: "l10t9_e4", word: "It is evident that...", translation: "Es evidente que...", type: "expression", definition: "clear (boosting)", definitionEs: "claro (boosting)", example: "It is evident that changes are needed.", exampleEs: "Es evidente que se necesitan cambios.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l10t9_adv1", word: "somewhat", translation: "algo/un tanto", type: "adverb", definition: "to a moderate degree (hedge)", definitionEs: "en cierta medida (hedge)", example: "This is somewhat surprising.", exampleEs: "Esto es algo sorprendente.", related: [], difficulty: 1 },
          { id: "l10t9_adv2", word: "clearly", translation: "claramente", type: "adverb", definition: "obviously (boost)", definitionEs: "obviamente (boost)", example: "This is clearly the best option.", exampleEs: "Esta es claramente la mejor opción.", related: [], difficulty: 1 },
          { id: "l10t9_adv3", word: "undoubtedly", translation: "indudablemente", type: "adverb", definition: "without doubt (strong boost)", definitionEs: "sin duda (boost fuerte)", example: "This is undoubtedly true.", exampleEs: "Esto es indudablemente cierto.", related: [], difficulty: 2 },
        ],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t9_cm1", wrong: "Over-hedging: 'It might possibly perhaps be somewhat true to some extent'", correct: "One or two hedging devices is enough: 'This might be true to some extent'", explanation: "Too much hedging sounds uncertain and weakens the message", explanationEs: "Demasiado hedging suena inseguro y debilita el mensaje", category: "usage" },
        { id: "l10t9_cm2", wrong: "Boosting uncertain information: 'The theory is definitely correct'", correct: "'The theory appears to be well-supported' (if evidence is limited)", explanation: "Only use boosting when evidence justifies it", explanationEs: "Solo usa boosting cuando la evidencia lo justifica", category: "usage" },
        { id: "l10t9_cm3", wrong: "Using hedging in inappropriate contexts: 'Our product might possibly be good'", correct: "'Our product delivers proven results' (in sales/marketing)", explanation: "Context determines: business = confidence; academia = caution", explanationEs: "El contexto determina: negocios = confianza; academia = precaución", category: "usage" },
        { id: "l10t9_cm4", wrong: "'Clearly' when something isn't clear to everyone", correct: "'The data indicate...' or 'As demonstrated by...' with evidence", explanation: "'Clearly' can sound condescending if it's not obvious", explanationEs: "'Clearly' puede sonar condescendiente si no es obvio", category: "usage" },
        { id: "l10t9_cm5", wrong: "Mixing hedging and boosting inconsistently: 'This is definitely somewhat important'", correct: "Choose one: 'This is definitely important' OR 'This is somewhat important'", explanation: "Hedging and boosting in the same phrase is contradictory", explanationEs: "Hedging y boosting en la misma frase es contradictorio", category: "usage" }
      ],
      exercises: [
        {
          type: "classification",
          instruction: "Clasifica estas expresiones como Hedging (H) o Boosting (B)",
          items: [
            { expression: "undoubtedly", type: "B" },
            { expression: "to some extent", type: "H" },
            { expression: "clearly", type: "B" },
            { expression: "might possibly", type: "H" },
            { expression: "it is evident that", type: "B" },
            { expression: "would seem to suggest", type: "H" },
            { expression: "there is no doubt that", type: "B" },
            { expression: "somewhat", type: "H" },
            { expression: "certainly", type: "B" },
            { expression: "appear to", type: "H" },
            { expression: "tends to", type: "H" },
            { expression: "absolutely", type: "B" }
          ]
        },
        {
          type: "calibration",
          instruction: "Ajusta estas oraciones al nivel de certeza indicado",
          items: [
            {
              original: "Social media causes depression.",
              target: "Strong hedge",
              adjusted: "Social media may contribute to depression in some cases, though the relationship appears to be complex.",
              explanation: "Multiple hedges for uncertain causal claims"
            },
            {
              original: "Our product might be somewhat useful.",
              target: "Strong boost (marketing)",
              adjusted: "Our product delivers proven, measurable results.",
              explanation: "Confident language for marketing contexts"
            },
            {
              original: "The experiment worked.",
              target: "Moderate academic",
              adjusted: "The experimental results appear to support the initial hypothesis, though replication would strengthen these findings.",
              explanation: "Academic hedging with appropriate confidence"
            },
            {
              original: "This is probably right.",
              target: "Formal confident",
              adjusted: "The evidence strongly supports this conclusion.",
              explanation: "Formal boost without overstatement"
            }
          ]
        },
        {
          type: "context-matching",
          instruction: "Elige el nivel apropiado de hedging/boosting para cada contexto",
          scenarios: [
            {
              context: "Scientific paper discussing preliminary findings",
              appropriate: "Strong hedging: 'The data suggest a potential correlation...'",
              inappropriate: "Strong boosting: 'The data prove beyond doubt...'"
            },
            {
              context: "Product launch presentation to investors",
              appropriate: "Confident boosting: 'Our solution delivers measurable ROI...'",
              inappropriate: "Strong hedging: 'Our solution might possibly help somewhat...'"
            },
            {
              context: "Legal disclaimer",
              appropriate: "Maximum hedging: 'Results may vary and are not guaranteed...'",
              inappropriate: "Any boosting: 'You will definitely see results...'"
            },
            {
              context: "Technical documentation",
              appropriate: "Moderate/factual: 'This function returns X when given Y.'",
              inappropriate: "Either extreme hedging or boosting"
            }
          ]
        },
        {
          type: "rewrite",
          instruction: "Reescribe usando el nivel de hedging/boosting indicado",
          items: [
            {
              sentence: "This is true.",
              versions: {
                strongHedge: "This would appear to be true to some extent.",
                mildHedge: "This seems to be true.",
                neutral: "This is true.",
                mildBoost: "This is certainly true.",
                strongBoost: "This is undoubtedly, unequivocally true."
              }
            },
            {
              sentence: "The strategy works.",
              versions: {
                strongHedge: "The strategy may, in certain circumstances, tend to produce positive outcomes.",
                mildHedge: "The strategy appears to work in most cases.",
                neutral: "The strategy works.",
                mildBoost: "The strategy clearly works.",
                strongBoost: "The strategy is proven to deliver exceptional results without fail."
              }
            }
          ]
        }
      ],
      modelDialogue: {
        title: "Presentación de investigación",
        context: "Investigador presenta hallazgos usando hedging y boosting apropiados",
        dialogue: [
          { speaker: "Researcher", text: "Our findings clearly demonstrate a significant correlation between sleep quality and cognitive performance.", translation: "Nuestros hallazgos demuestran claramente una correlación significativa entre calidad del sueño y rendimiento cognitivo.", note: "Boost: 'clearly' - datos sólidos" },
          { speaker: "Researcher", text: "However, the causal relationship appears to be somewhat more complex than initially hypothesized.", translation: "Sin embargo, la relación causal parece ser algo más compleja de lo inicialmente hipotetizado.", note: "Hedge: 'appears to be somewhat' - interpretación" },
          { speaker: "Audience", text: "Can you say definitively that poor sleep causes lower performance?", translation: "¿Puede decir definitivamente que el mal sueño causa menor rendimiento?" },
          { speaker: "Researcher", text: "The evidence strongly suggests a causal link, but it would be premature to claim causation with absolute certainty.", translation: "La evidencia sugiere fuertemente un vínculo causal, pero sería prematuro afirmar causalidad con certeza absoluta.", note: "Balanced: boost ('strongly') + hedge ('it would be premature')" },
          { speaker: "Audience", text: "What about the practical implications?", translation: "¿Qué hay de las implicaciones prácticas?" },
          { speaker: "Researcher", text: "Based on our findings, it seems reasonable to recommend that organizations consider implementing sleep hygiene programs. The potential benefits are considerable.", translation: "Basado en nuestros hallazgos, parece razonable recomendar que las organizaciones consideren implementar programas de higiene del sueño. Los beneficios potenciales son considerables.", note: "Mild hedge for recommendation + moderate boost for benefits" },
          { speaker: "Audience", text: "Are you confident in your methodology?", translation: "¿Tiene confianza en su metodología?" },
          { speaker: "Researcher", text: "Absolutely. The methodology was rigorously validated. However, like all studies, ours has certain limitations that should be acknowledged.", translation: "Absolutamente. La metodología fue rigurosamente validada. Sin embargo, como todos los estudios, el nuestro tiene ciertas limitaciones que deben reconocerse.", note: "Strong boost for method + hedge for honest limitations" }
        ],
        keyPhrases: [
          { phrase: "clearly demonstrate", translation: "demuestran claramente", type: "boost", usage: "Datos sólidos" },
          { phrase: "appears to be somewhat", translation: "parece ser algo", type: "hedge", usage: "Interpretación incierta" },
          { phrase: "strongly suggests", translation: "sugiere fuertemente", type: "moderate boost", usage: "Evidencia buena pero no perfecta" },
          { phrase: "it would be premature to claim", translation: "sería prematuro afirmar", type: "hedge", usage: "Evitar sobreclaims" },
          { phrase: "seems reasonable to recommend", translation: "parece razonable recomendar", type: "mild hedge", usage: "Recomendación cautelosa" },
          { phrase: "potential benefits are considerable", translation: "beneficios potenciales son considerables", type: "moderate boost", usage: "Optimismo calibrado" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "undoubtedly", wrong: "un-DOUBT-ed-ly", correct: "/ʌnˈdaʊ.tɪd.li/", tip: "un-DOUT-id-lee" },
          { word: "apparently", wrong: "a-pa-RENT-ly", correct: "/əˈpær.ənt.li/", tip: "uh-PA-runt-lee" },
          { word: "considerably", wrong: "con-si-de-RA-bly", correct: "/kənˈsɪd.ər.ə.bli/", tip: "kun-SID-ur-uh-blee" }
        ],
        intonationPatterns: [
          { pattern: "Falling intonation for confident boosting", example: "This is CLEARLY the best option↘.", meaning: "Bajada = confianza" },
          { pattern: "Slight rise for hedged statements", example: "This might↗ be relevant↘.", meaning: "Subida leve = incertidumbre" },
          { pattern: "Emphasis on hedging words", example: "This APPEARS to be true.", meaning: "Énfasis en hedge = precaución explícita" }
        ]
      },
      culturalNote: {
        title: "Cultural Differences in Hedging",
        titleEs: "Diferencias culturales en hedging",
        content: "Las culturas varían mucho en hedging. Los británicos usan más hedging que los americanos ('I rather think...' vs 'I believe...'). Las culturas de alto contexto (Japón, Corea) hedgean extensivamente para mantener armonía. Las culturas directas (Alemania, Holanda) pueden percibir el hedging como evasivo. En contextos académicos internacionales, el hedging es la norma. En ventas, especialmente americanas, el boosting es esperado. Adapta tu estilo según la audiencia.",
        contentEs: "El nivel de hedging varía por cultura; adapta según contexto y audiencia."
      },
      consolidationQuiz: [
        {
          question: "'Hedging' en comunicación significa:",
          options: [
            "Hablar muy directo",
            "Suavizar afirmaciones para mostrar incertidumbre",
            "Hablar muy fuerte",
            "Usar muchas palabras"
          ],
          correctAnswer: 1,
          explanation: "Hedging = suavizar, mostrar precaución, no overclaim"
        },
        {
          question: "¿Cuál es un ejemplo de boosting?",
          options: [
            "This might be true",
            "This appears to be true",
            "This is undoubtedly true",
            "This seems somewhat true"
          ],
          correctAnswer: 2,
          explanation: "'Undoubtedly' = sin duda, fortalece la afirmación"
        },
        {
          question: "'To some extent' es un ejemplo de:",
          options: [
            "Boosting fuerte",
            "Boosting leve",
            "Hedging",
            "Neutral"
          ],
          correctAnswer: 2,
          explanation: "'To some extent' = hasta cierto punto, suaviza"
        },
        {
          question: "¿En qué contexto es apropiado el boosting fuerte?",
          options: [
            "Artículos científicos sobre resultados preliminares",
            "Presentaciones de ventas a clientes",
            "Disclaimers legales",
            "Todos los anteriores"
          ],
          correctAnswer: 1,
          explanation: "Ventas requiere confianza; ciencia y legal, precaución"
        },
        {
          question: "'The data clearly demonstrate...' usa:",
          options: [
            "Hedging fuerte",
            "Hedging leve",
            "Boosting",
            "Lenguaje neutral"
          ],
          correctAnswer: 2,
          explanation: "'Clearly' + 'demonstrate' = boosting, alta confianza"
        },
        {
          question: "'It would appear that this might possibly be true' es un ejemplo de:",
          options: [
            "Hedging apropiado",
            "Over-hedging (demasiado)",
            "Boosting",
            "Lenguaje legal"
          ],
          correctAnswer: 1,
          explanation: "Demasiados hedges debilitan el mensaje"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un párrafo sobre un tema usando hedging académico apropiado",
          topic: "The impact of remote work on productivity",
          sampleResponse: "Research on remote work productivity presents a complex picture. The available evidence suggests that remote work may enhance productivity for certain tasks, particularly those requiring deep concentration. However, the relationship appears to be moderated by several factors.\n\nIndividual differences seem to play a significant role; workers with strong self-regulation skills tend to perform better in remote settings. Organizational factors, such as management support and technological infrastructure, also appear to influence outcomes.\n\nIt should be noted that much of the current research was conducted during the pandemic, which may limit generalizability. The long-term effects of remote work remain somewhat uncertain, and it would be premature to draw definitive conclusions.\n\nThat said, the preliminary evidence indicates that hybrid models might offer a reasonable compromise, though further research is needed to determine optimal arrangements for different contexts."
        },
        {
          prompt: "Escribe el mismo párrafo con boosting para una presentación de ventas",
          topic: "Benefits of our remote work solution",
          sampleResponse: "Our remote work solution delivers proven, measurable results. Companies using our platform report a significant 23% increase in productivity—that's not speculation, that's data from over 500 organizations.\n\nThe evidence is clear: workers perform better when they have the right tools. Our solution provides exactly what they need: seamless communication, intuitive project management, and real-time collaboration features.\n\nOur clients consistently report exceptional outcomes. TechCorp saw productivity gains within the first month. GlobalFinance reduced operational costs by 18%. These aren't isolated cases—they're typical results.\n\nThe bottom line? Remote work is the future, and our solution is the key to unlocking its full potential. The companies that adopt now will have a decisive competitive advantage. The choice is clear: transform your workplace or fall behind.\n\nReady to see what our solution can do for you?"
        },
        {
          prompt: "Practica calibrando el mismo mensaje a diferentes niveles de certeza",
          claim: "Exercise improves mental health",
          sampleResponse: "Strong Hedge (scientific paper on initial findings):\n'Preliminary findings suggest that regular physical activity may have positive associations with certain aspects of psychological wellbeing, though the mechanisms remain to be fully elucidated.'\n\nModerate Hedge (literature review):\n'A growing body of evidence indicates that exercise appears to have beneficial effects on mental health, particularly for symptoms of depression and anxiety.'\n\nBalanced (health information):\n'Research consistently shows that regular exercise can improve mental health. While effects vary by individual, most people experience some benefit from physical activity.'\n\nModerate Boost (health campaign):\n'Exercise is a powerful tool for mental wellness. Studies clearly demonstrate that regular physical activity significantly reduces symptoms of depression and anxiety.'\n\nStrong Boost (motivational context):\n'Exercise is absolutely essential for mental health. The science is undeniable: moving your body transforms your mind. Every workout is an investment in your psychological wellbeing.'"
        }
      ],
      connectionToPrevious: "El hedging es crucial en lenguaje legal y académico; el boosting en negocios.",
      connectionToNext: "Los recursos retóricos combinan hedging/boosting con otras técnicas persuasivas."
    },
    {
      id: 10,
      title: "Rhetorical Devices",
      titleEs: "Recursos Retóricos",
      introduction: {
        title: "🎭 Recursos Retóricos",
        explanation: "Los recursos retóricos hacen la comunicación más persuasiva y memorable. Son herramientas de oradores y escritores expertos.",
        keyPoints: [
          "Pregunta retórica: 'Who doesn't want success?' (no espera respuesta)",
          "Anáfora: repetición al inicio - 'We will fight, we will win, we will prevail'",
          "Tricolon: grupos de tres - 'Blood, sweat, and tears'",
          "Antítesis: contraste - 'Not what your country can do for you, but what you can do for your country'",
          "Metáfora: comparación implícita - 'Time is money'"
        ],
        examples: [
          { english: "Ask not what your country can do for you – ask what you can do for your country.", spanish: "No preguntes qué puede hacer tu país por ti – pregunta qué puedes hacer tú por tu país.", explanation: "Antítesis (JFK)" },
          { english: "I have a dream that one day... I have a dream that... I have a dream...", spanish: "Tengo un sueño de que un día... Tengo un sueño de que... Tengo un sueño...", explanation: "Anáfora (MLK)" },
          { english: "We came, we saw, we conquered.", spanish: "Llegamos, vimos, conquistamos.", explanation: "Tricolon" }
        ],
        tips: [
          "💡 La regla de tres es poderosa en presentaciones",
          "💡 Las preguntas retóricas involucran a la audiencia",
          "💡 La repetición controlada crea ritmo y énfasis"
        ],
        whenToUse: [
          "En keynotes y presentaciones: \"Ask not what your country can do for you – ask what you can do for your country\"",
          "En discursos motivacionales: \"I have a dream that one day... I have a dream that...\" (anáfora)",
          "En pitches a inversores: \"We came, we saw, we conquered\" (tricolon)",
          "En presentaciones ejecutivas: \"Who doesn't want success?\" (pregunta retórica)"
        ],
        whenNotToUse: [
          "En informes técnicos o documentación → la retórica distrae: prioriza claridad",
          "En exceso → una pregunta retórica por sección; más suena preachy",
          "En emails formales → \"Who doesn't want...?\" puede sonar condescendiente"
        ]
      },
      objectives: ["Usar preguntas retóricas", "Emplear repetición efectiva", "Crear contrastes persuasivos"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c1-cleft-sentences", "c1-inversion"],
      vocabulary: {
        nouns: [
          { id: "l10t10_n1", word: "rhetoric", translation: "retórica", type: "noun", definition: "art of persuasion", definitionEs: "arte de la persuasión", example: "His rhetoric was powerful.", exampleEs: "Su retórica fue poderosa.", related: ["rhetorical"], difficulty: 2 },
          { id: "l10t10_n2", word: "metaphor", translation: "metáfora", type: "noun", definition: "implied comparison", definitionEs: "comparación implícita", example: "Time is money - a common metaphor.", exampleEs: "'El tiempo es dinero' - una metáfora común.", related: [], difficulty: 2 },
          { id: "l10t10_n3", word: "analogy", translation: "analogía", type: "noun", definition: "comparison for explanation", definitionEs: "comparación para explicar", example: "Let me use an analogy.", exampleEs: "Déjame usar una analogía.", related: [], difficulty: 2 },
        ],
        verbs: [],
        adjectives: [
          { id: "l10t10_a1", word: "rhetorical", translation: "retórico", type: "adjective", definition: "persuasive, not literal", definitionEs: "persuasivo, no literal", example: "That's a rhetorical question.", exampleEs: "Esa es una pregunta retórica.", related: [], difficulty: 2 },
          { id: "l10t10_a2", word: "persuasive", translation: "persuasivo", type: "adjective", definition: "convincing", definitionEs: "convincente", example: "Her speech was persuasive.", exampleEs: "Su discurso fue persuasivo.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l10t10_e1", word: "Who doesn't want...?", translation: "¿Quién no quiere...?", type: "expression", definition: "rhetorical question", definitionEs: "pregunta retórica", example: "Who doesn't want to succeed?", exampleEs: "¿Quién no quiere tener éxito?", related: [], difficulty: 1 },
          { id: "l10t10_e2", word: "Not X, but Y", translation: "No X, sino Y", type: "expression", definition: "antithesis structure", definitionEs: "estructura de antítesis", example: "Not luck, but hard work.", exampleEs: "No suerte, sino trabajo duro.", related: [], difficulty: 1 },
          { id: "l10t10_e3", word: "X, Y, and Z (rule of three)", translation: "X, Y, y Z (regla de tres)", type: "expression", definition: "tricolon", definitionEs: "tricolon", example: "Life, liberty, and the pursuit of happiness.", exampleEs: "Vida, libertad, y la búsqueda de la felicidad.", related: [], difficulty: 1 },
          { id: "l10t10_e4", word: "It's not about X, it's about Y", translation: "No se trata de X, se trata de Y", type: "expression", definition: "reframing", definitionEs: "reenmarcando", example: "It's not about the money, it's about principle.", exampleEs: "No se trata del dinero, se trata de principio.", related: [], difficulty: 1 },
          { id: "l10t10_e5", word: "Let me paint you a picture", translation: "Déjame pintarte una imagen", type: "expression", definition: "introducing vivid description", definitionEs: "introduciendo descripción vívida", example: "Let me paint you a picture of our future.", exampleEs: "Déjame pintarte una imagen de nuestro futuro.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t10_cm1", wrong: "Overusing rhetorical questions (sounds preachy)", correct: "One or two well-placed rhetorical questions per presentation is usually enough", explanation: "Excessive rhetorical questions can irritate the audience", explanationEs: "El exceso de preguntas retóricas puede irritar a la audiencia", category: "usage" },
        { id: "l10t10_cm2", wrong: "Tricolon with uneven items: 'fast, efficient, and saves time'", correct: "'Fast, efficient, and effective' (parallel adjectives)", explanation: "The three elements must be grammatically parallel", explanationEs: "Los tres elementos deben ser gramaticalmente paralelos", category: "grammar" },
        { id: "l10t10_cm3", wrong: "Forced metaphors that don't fit: 'Our sales are a rocket ship, but also a marathon'", correct: "Choose one coherent metaphor and develop it", explanation: "Mixing metaphors confuses; keep one consistent", explanationEs: "Mezclar metáforas confunde; mantén una consistente", category: "usage" },
        { id: "l10t10_cm4", wrong: "Answering your own rhetorical question immediately: 'Who doesn't want success? Everyone does.'", correct: "Let rhetorical questions hang or use them to transition: 'Who doesn't want success? That's exactly why...'", explanation: "Rhetorical questions don't need explicit answers", explanationEs: "Las preguntas retóricas no necesitan respuesta explícita", category: "usage" },
        { id: "l10t10_cm5", wrong: "Using rhetorical devices in factual/technical writing", correct: "Reserve rhetoric for persuasive contexts; technical writing needs clarity", explanation: "Rhetorical devices are for persuading, not informing", explanationEs: "Los recursos retóricos son para persuadir, no informar", category: "usage" }
      ],
      exercises: [
        {
          type: "identification",
          instruction: "Identifica el recurso retórico en cada ejemplo",
          items: [
            {
              text: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.",
              device: "Anaphora (repetition of 'we shall fight')",
              explanation: "Repetición al inicio de cláusulas sucesivas"
            },
            {
              text: "That's one small step for man, one giant leap for mankind.",
              device: "Antithesis (small step vs giant leap)",
              explanation: "Contraste de ideas opuestas"
            },
            {
              text: "Friends, Romans, countrymen, lend me your ears.",
              device: "Tricolon (three terms in sequence)",
              explanation: "Grupo de tres para ritmo y énfasis"
            },
            {
              text: "If we don't act now, who will? If not here, where? If not this way, how?",
              device: "Rhetorical questions + Anaphora",
              explanation: "Serie de preguntas que no esperan respuesta"
            },
            {
              text: "Time is money.",
              device: "Metaphor",
              explanation: "Comparación implícita (tiempo = dinero)"
            },
            {
              text: "It was the best of times, it was the worst of times.",
              device: "Antithesis + Anaphora",
              explanation: "Contraste con repetición estructural"
            }
          ]
        },
        {
          type: "creation",
          instruction: "Crea ejemplos de cada recurso retórico",
          devices: [
            {
              name: "Rhetorical Question",
              template: "Who [doesn't want / can deny / wouldn't agree] that ___?",
              example: "Who wouldn't want to be part of something this transformative?",
              yourTurn: "Create a rhetorical question about innovation"
            },
            {
              name: "Tricolon (Rule of Three)",
              template: "[Adjective], [adjective], and [adjective]",
              example: "Our solution is fast, reliable, and affordable.",
              yourTurn: "Create a tricolon describing your company/project"
            },
            {
              name: "Antithesis",
              template: "Not X, but Y / It's not about X, it's about Y",
              example: "It's not about working harder; it's about working smarter.",
              yourTurn: "Create an antithesis about success"
            },
            {
              name: "Anaphora",
              template: "[Phrase] A. [Phrase] B. [Phrase] C.",
              example: "We will adapt. We will overcome. We will succeed.",
              yourTurn: "Create an anaphora about change"
            }
          ]
        },
        {
          type: "transformation",
          instruction: "Convierte estas oraciones planas en versiones más retóricas",
          items: [
            {
              plain: "Our company values are integrity, innovation, and customer focus.",
              rhetorical: "What drives us? Three unwavering commitments: integrity in everything we do, innovation that pushes boundaries, and customer focus that never wavers.",
              devices: "Rhetorical question + tricolon + elaboration"
            },
            {
              plain: "Success requires hard work, not luck.",
              rhetorical: "Success isn't about luck—it never was, it never will be. Success is about showing up, doing the work, and refusing to quit.",
              devices: "Antithesis + anaphora + tricolon"
            },
            {
              plain: "We should act now because time is limited.",
              rhetorical: "If not now, when? If not us, who? The time for action isn't tomorrow—it's today.",
              devices: "Rhetorical questions + antithesis"
            }
          ]
        },
        {
          type: "speech-building",
          instruction: "Construye un párrafo persuasivo usando múltiples recursos retóricos",
          topic: "Why our company should invest in sustainability",
          requirements: ["At least one tricolon", "At least one rhetorical question", "At least one antithesis or anaphora"],
          sampleAnswer: "Why should we invest in sustainability? Not because it's trendy, but because it's essential. Not because regulators demand it, but because our customers expect it. Not because it's the right PR move, but because it's simply the right thing to do.\n\nSustainability isn't a cost—it's an investment. An investment in our brand, in our planet, and in our future. The companies that thrive in the next decade won't be those that ignored this moment. They'll be those that seized it.\n\nSo I ask you: If not us, who? If not now, when? Let's lead, let's act, let's transform."
        }
      ],
      modelDialogue: {
        title: "Discurso inspiracional de CEO",
        context: "CEO cierra la conferencia anual con mensaje motivacional",
        dialogue: [
          { speaker: "CEO", text: "Three years ago, we faced a choice. Not an easy choice, but a necessary one. Not a comfortable choice, but a transformative one.", translation: "Hace tres años, enfrentamos una elección. No una elección fácil, pero una necesaria. No una elección cómoda, pero una transformadora.", device: "Anaphora + Antithesis" },
          { speaker: "CEO", text: "Some said we couldn't do it. Some said we shouldn't try. Some said the market would never accept it.", translation: "Algunos dijeron que no podíamos hacerlo. Algunos dijeron que no deberíamos intentarlo. Algunos dijeron que el mercado nunca lo aceptaría.", device: "Anaphora" },
          { speaker: "CEO", text: "And where are those doubters now? Where are the naysayers? Where are the people who said impossible?", translation: "¿Y dónde están esos escépticos ahora? ¿Dónde están los detractores? ¿Dónde está la gente que dijo imposible?", device: "Rhetorical questions + Anaphora" },
          { speaker: "CEO", text: "We didn't just meet expectations—we shattered them. We didn't just enter the market—we transformed it. We didn't just survive—we thrived.", translation: "No solo cumplimos expectativas—las destruimos. No solo entramos al mercado—lo transformamos. No solo sobrevivimos—prosperamos.", device: "Anaphora + Antithesis + Tricolon" },
          { speaker: "CEO", text: "But our journey isn't over. In fact, it's just beginning. And the question before us today isn't 'Can we do more?' The question is: 'How much more can we achieve?'", translation: "Pero nuestro viaje no ha terminado. De hecho, apenas comienza. Y la pregunta ante nosotros hoy no es '¿Podemos hacer más?' La pregunta es: '¿Cuánto más podemos lograr?'", device: "Antithesis + Rhetorical reframing" },
          { speaker: "CEO", text: "So let me paint you a picture of the future. A future where our products touch millions. A future where our impact is measured not just in profits, but in lives improved. A future where we look back at this moment and say: 'That's when everything changed.'", translation: "Así que déjenme pintarles una imagen del futuro. Un futuro donde nuestros productos lleguen a millones. Un futuro donde nuestro impacto se mida no solo en ganancias, sino en vidas mejoradas. Un futuro donde miremos atrás a este momento y digamos: 'Ahí fue cuando todo cambió.'", device: "Vivid imagery + Anaphora + Tricolon" },
          { speaker: "CEO", text: "The road ahead will be challenging. It will be demanding. It will test us. But together—together—we will rise to meet it. Thank you.", translation: "El camino por delante será desafiante. Será exigente. Nos pondrá a prueba. Pero juntos—juntos—estaremos a la altura. Gracias.", device: "Tricolon + Repetition for emphasis" }
        ],
        keyPhrases: [
          { phrase: "Not X, but Y", translation: "No X, sino Y", device: "Antithesis" },
          { phrase: "We didn't just X—we Y", translation: "No solo X—sino Y", device: "Antithesis + amplification" },
          { phrase: "Where are the...?", translation: "¿Dónde están los...?", device: "Rhetorical question" },
          { phrase: "Let me paint you a picture", translation: "Déjenme pintarles una imagen", device: "Vivid imagery" },
          { phrase: "A future where... A future where... A future where...", translation: "Un futuro donde...", device: "Anaphora" },
          { phrase: "X. Y. Z.", translation: "Tricolon", device: "Rule of three" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "rhetoric", wrong: "re-TO-ric", correct: "/ˈret.ər.ɪk/", tip: "RET-ur-ik" },
          { word: "rhetorical", wrong: "re-to-RI-cal", correct: "/rɪˈtɒr.ɪ.kəl/", tip: "ri-TOR-i-kul" },
          { word: "analogy", wrong: "a-NA-lo-gy", correct: "/əˈnæl.ə.dʒi/", tip: "uh-NAL-uh-jee" }
        ],
        intonationPatterns: [
          { pattern: "Build and pause for tricolons", example: "Blood↗, sweat↗, and tears↘.", meaning: "Subida en primeros dos, bajada y pausa en tercero" },
          { pattern: "Rising for rhetorical questions (no answer expected)", example: "Who doesn't want success↗?", meaning: "Subida al final, sin esperar respuesta" },
          { pattern: "Emphasis on contrasting elements in antithesis", example: "Not LUCK↗, but HARD WORK↘.", meaning: "Énfasis en palabras opuestas" }
        ]
      },
      culturalNote: {
        title: "Rhetoric in Different Cultures",
        titleEs: "La retórica en diferentes culturas",
        content: "Los recursos retóricos varían culturalmente. La retórica americana tiende a ser directa y emotiva (Martin Luther King, Steve Jobs). La británica puede ser más sutil e irónica. Las culturas asiáticas a menudo favorecen indirectness y understatement. En contextos internacionales, recursos como la 'regla de tres' y metáforas son universalmente efectivos, mientras que preguntas retóricas pueden malinterpretarse como solicitudes de respuesta real.",
        contentEs: "La retórica efectiva varía por cultura; algunos recursos son más universales que otros."
      },
      consolidationQuiz: [
        {
          question: "Una pregunta retórica es una que:",
          options: [
            "Requiere una respuesta detallada",
            "No espera respuesta - es para efecto",
            "Solo los profesores pueden hacer",
            "Siempre es sarcástica"
          ],
          correctAnswer: 1,
          explanation: "Pregunta retórica = efecto persuasivo, no información"
        },
        {
          question: "'We came, we saw, we conquered' es un ejemplo de:",
          options: [
            "Metáfora",
            "Antítesis",
            "Tricolon (regla de tres)",
            "Pregunta retórica"
          ],
          correctAnswer: 2,
          explanation: "Tres elementos paralelos = tricolon"
        },
        {
          question: "'Ask not what your country can do for you' usa:",
          options: [
            "Solo metáfora",
            "Antítesis (contraste)",
            "Solo tricolon",
            "Pregunta retórica directa"
          ],
          correctAnswer: 1,
          explanation: "Antítesis = contraste de ideas opuestas"
        },
        {
          question: "Anáfora es:",
          options: [
            "Usar números en discursos",
            "Repetición de palabras al inicio de cláusulas sucesivas",
            "Comparar cosas diferentes",
            "Hacer preguntas"
          ],
          correctAnswer: 1,
          explanation: "Anáfora = repetición al inicio (I have a dream...)"
        },
        {
          question: "'Time is money' es una:",
          options: [
            "Pregunta retórica",
            "Anáfora",
            "Metáfora",
            "Antítesis"
          ],
          correctAnswer: 2,
          explanation: "Metáfora = comparación implícita (tiempo = dinero)"
        },
        {
          question: "La 'regla de tres' funciona porque:",
          options: [
            "Tres es un número mágico",
            "Crea ritmo, es memorable, y satisface cognitivamente",
            "Es más fácil de traducir",
            "Solo funciona en inglés"
          ],
          correctAnswer: 1,
          explanation: "Tres elementos: ritmo, memorabilidad, satisfacción cognitiva"
        }
      ],
      guidedProduction: [
        {
          prompt: "Escribe un discurso de 1 minuto sobre un tema que te apasione usando al menos 4 recursos retóricos diferentes",
          topic: "The importance of continuous learning",
          sampleResponse: "Today, I want to talk about something that transformed my life. Something simple, yet powerful. Something free, yet priceless. Continuous learning.\n\nWho among us hasn't felt left behind at some point? Who hasn't wondered if they could keep up with change? Who hasn't feared becoming obsolete? I know I have.\n\nBut here's what I've discovered: The question isn't whether you can learn new things. The question is whether you're willing to.\n\nNot willing to be perfect. Not willing to know everything. Just willing to be curious.\n\nIn a world that changes faster than ever, we have two choices. We can resist and be swept away. Or we can adapt and ride the wave.\n\nEvery day presents an opportunity—an opportunity to grow, to evolve, to become. And the beautiful truth is this: it's never too late to start, it's never too hard to try, and it's never wrong to ask for help.\n\nSo I challenge you: Learn something new today. Teach someone else tomorrow. And never, ever stop being curious.\n\nDevices used: Anaphora ('Who hasn't...'), Tricolon ('grow, evolve, become'), Antithesis ('resist vs adapt'), Rhetorical questions, Rule of three in closing ('never too late, never too hard, never wrong')"
        },
        {
          prompt: "Transforma un mensaje corporativo aburrido en uno persuasivo usando recursos retóricos",
          boring: "Our company achieved good results this year. Sales increased. Costs decreased. Customer satisfaction improved. We plan to continue this trend next year.",
          sampleResponse: "What a year it's been.\n\nNot just a good year. A transformational year. A year that proved what we're capable of.\n\nSales didn't just increase—they soared. Costs didn't just decrease—they plummeted. Customer satisfaction didn't just improve—it reached heights we've never seen before.\n\nBut let me ask you: Is this the peak? Is this as far as we can go? Is this the limit of our potential?\n\nNo. This is just the beginning.\n\nBecause what we've built isn't just a business—it's a movement. Not just a company—a community. Not just a team—a family.\n\nSo as we look to next year, we don't just plan to continue. We plan to accelerate. We plan to innovate. We plan to dominate.\n\nThe future isn't something that happens to us. It's something we create.\n\nAre you ready?\n\nDevices: Anaphora ('Sales didn't just...'), Tricolon ('soared/plummeted/reached'), Rhetorical questions, Antithesis ('not just X—Y'), Rule of three in closing ('accelerate, innovate, dominate')"
        },
        {
          prompt: "Analiza un discurso famoso e identifica los recursos retóricos",
          speech: "I Have a Dream by Martin Luther King Jr. (excerpt)",
          analysis: "MLK's 'I Have a Dream' speech is a masterclass in rhetoric:\n\n1. ANAPHORA\n- 'I have a dream' - repeated 8 times\n- 'Let freedom ring' - repeated 10 times\n- 'Now is the time' - repeated 4 times\nEffect: Creates rhythm, builds emotional intensity, makes message unforgettable\n\n2. METAPHOR\n- 'the flames of withering injustice'\n- 'the manacles of segregation'\n- 'the quicksands of racial injustice'\n- 'an oasis of freedom and justice'\nEffect: Makes abstract concepts (injustice, freedom) vivid and tangible\n\n3. ANTITHESIS\n- 'Not by the color of their skin, but by the content of their character'\n- From 'the dark and desolate valley of segregation' to 'the sunlit path of racial justice'\nEffect: Creates clear contrast between present injustice and future hope\n\n4. TRICOLON\n- 'Free at last! Free at last! Thank God Almighty, we are free at last!'\nEffect: Triple repetition for emotional climax\n\n5. BIBLICAL ALLUSIONS\n- References create moral authority and connect with audience's values\n\nWhy it works: MLK combines logical argument with emotional appeal, uses repetition for memorability, and paints vivid pictures of both current suffering and future hope. The speech is structured to build to an emotional crescendo."
        }
      ],
      connectionToPrevious: "Los recursos retóricos complementan el hedging/boosting para máximo impacto persuasivo.",
      connectionToNext: "En la siguiente lección, explorarás vocabulario de psicología y comportamiento humano para discutir conceptos mentales y tipos de personalidad."
    },
    {
      id: 11,
      title: "Psychology and Human Behavior",
      titleEs: "Psicología y Comportamiento Humano",
      introduction: {
        title: "🧠 Psicología y Comportamiento Humano",
        explanation: "Discutir conceptos psicológicos, comportamiento humano y salud mental requiere vocabulario preciso. Aprenderás a hablar sobre procesos cognitivos, personalidad, trauma y resiliencia.",
        keyPoints: [
          "Procesos mentales: 'cognitive', 'subconscious', 'conditioning'",
          "Personalidad: 'introvert', 'extrovert'",
          "Salud mental: 'trauma', 'resilience', 'self-esteem'",
          "Conceptos avanzados: 'attachment', 'neuroplasticity'"
        ],
        examples: [
          { english: "Cognitive biases affect our decision-making.", spanish: "Los sesgos cognitivos afectan nuestra toma de decisiones.", explanation: "Procesos mentales" },
          { english: "Trauma can impact attachment styles in adulthood.", spanish: "El trauma puede impactar los estilos de apego en la adultez.", explanation: "Conceptos de desarrollo" },
          { english: "Neuroplasticity means the brain can rewire itself.", spanish: "La neuroplasticidad significa que el cerebro puede reconectarse.", explanation: "Concepto científico" }
        ],
        tips: [
          "💡 'Introvert' y 'extrovert' son sustantivos y adjetivos",
          "💡 'Conditioning' en psicología = condicionamiento (Pavlov)",
          "💡 'Subconscious' es lo que está debajo de la consciencia"
        ],
        whenToUse: ["Al discutir psicología o comportamiento", "En conversaciones sobre salud mental", "Cuando describes tipos de personalidad", "Al hablar de desarrollo personal"],
        whenNotToUse: ["No uses términos clínicos para autodiagnosticar — consulta profesionales", "Evita 'trauma' para experiencias menores — reserva para impacto significativo", "No confundas 'subconscious' con 'unconscious' (inconsciente en Freud)"]
      },
      objectives: ["Discutir conceptos psicológicos", "Hablar sobre comportamiento humano", "Usar vocabulario de salud mental apropiadamente"],
      grammarTheoryIds: ["c1-nominalization", "c1-hedging"],
      estimatedMinutes: 40,
      vocabulary: {
        nouns: [
          { id: "l10t11_n1", word: "subconscious", translation: "subconsciente", type: "noun", definition: "mental processes below awareness", definitionEs: "procesos mentales bajo la consciencia", example: "The memory was buried in his subconscious.", exampleEs: "El recuerdo estaba enterrado en su subconsciente.", related: ["conscious"], difficulty: 2 },
          { id: "l10t11_n2", word: "conditioning", translation: "condicionamiento", type: "noun", definition: "learning through association", definitionEs: "aprendizaje por asociación", example: "Classical conditioning was studied by Pavlov.", exampleEs: "El condicionamiento clásico fue estudiado por Pavlov.", related: ["condition"], difficulty: 2 },
          { id: "l10t11_n3", word: "resilience", translation: "resiliencia", type: "noun", definition: "ability to recover from difficulty", definitionEs: "capacidad de recuperarse de dificultades", example: "Resilience can be developed over time.", exampleEs: "La resiliencia puede desarrollarse con el tiempo.", related: ["resilient"], difficulty: 1 },
          { id: "l10t11_n4", word: "trauma", translation: "trauma", type: "noun", definition: "deep emotional shock from distressing experience", definitionEs: "choque emocional profundo por experiencia angustiante", example: "Childhood trauma can affect adult relationships.", exampleEs: "El trauma infantil puede afectar las relaciones adultas.", related: ["traumatic"], difficulty: 1 },
          { id: "l10t11_n5", word: "self-esteem", translation: "autoestima", type: "noun", definition: "confidence in one's own worth", definitionEs: "confianza en el propio valor", example: "Low self-esteem affects many aspects of life.", exampleEs: "La baja autoestima afecta muchos aspectos de la vida.", related: [], difficulty: 1 },
          { id: "l10t11_n6", word: "attachment", translation: "apego", type: "noun", definition: "emotional bond, especially early in life", definitionEs: "vínculo emocional, especialmente temprano en la vida", example: "Attachment theory explains relationship patterns.", exampleEs: "La teoría del apego explica patrones de relación.", related: ["attach"], difficulty: 2 },
          { id: "l10t11_n7", word: "introvert", translation: "introvertido", type: "noun", definition: "person who gains energy from solitude", definitionEs: "persona que obtiene energía de la soledad", example: "As an introvert, I need quiet time to recharge.", exampleEs: "Como introvertido, necesito tiempo tranquilo para recargar.", related: ["introverted"], difficulty: 1 },
          { id: "l10t11_n8", word: "extrovert", translation: "extrovertido", type: "noun", definition: "person who gains energy from social interaction", definitionEs: "persona que obtiene energía de la interacción social", example: "Extroverts often enjoy large gatherings.", exampleEs: "Los extrovertidos a menudo disfrutan las reuniones grandes.", related: ["extroverted"], difficulty: 1 },
          { id: "l10t11_n9", word: "neuroplasticity", translation: "neuroplasticidad", type: "noun", definition: "brain's ability to reorganize and form new connections", definitionEs: "capacidad del cerebro de reorganizarse y formar nuevas conexiones", example: "Neuroplasticity allows us to learn at any age.", exampleEs: "La neuroplasticidad nos permite aprender a cualquier edad.", related: [], difficulty: 2 }
        ],
        verbs: [],
        adjectives: [
          { id: "l10t11_a1", word: "cognitive", translation: "cognitivo", type: "adjective", definition: "related to thinking and knowing", definitionEs: "relacionado con pensar y conocer", example: "Cognitive processes affect learning.", exampleEs: "Los procesos cognitivos afectan el aprendizaje.", related: ["cognition"], difficulty: 2 }
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t11_cm1", wrong: "Using 'trauma' for any bad experience", correct: "Reserve 'trauma' for experiences with lasting psychological impact", explanation: "Trauma implies deep and lasting impact; for minor annoyances use 'stressful experience'", explanationEs: "Trauma implica impacto profundo y duradero; para molestias menores usa 'stressful experience'", category: "vocabulary" },
        { id: "l10t11_cm2", wrong: "Introvert = shy, extrovert = outgoing", correct: "Introvert/extrovert = where you get energy (solitude vs people), not social skill", explanation: "An introvert can be socially skilled; the difference is the source of energy", explanationEs: "Un introvert puede ser socialmente hábil; la diferencia es la fuente de energía", category: "vocabulary" },
        { id: "l10t11_cm3", wrong: "The subconscious mind", correct: "The subconscious (noun) or subconscious mind — both OK, but 'subconscious' as noun is common", explanation: "Subconscious can be noun or adjective", explanationEs: "Subconscious puede ser sustantivo o adjetivo", category: "vocabulary" },
        { id: "l10t11_cm4", wrong: "Conditioning = training (general)", correct: "In psychology, conditioning = learning through association (Pavlov, Skinner)", explanation: "Conditioning has a technical meaning in psychology", explanationEs: "Conditioning tiene significado técnico en psicología", category: "vocabulary" },
        { id: "l10t11_cm5", wrong: "Self-esteem = self-confidence", correct: "Self-esteem = sense of worth; self-confidence = belief in abilities — related but distinct", explanation: "You can have high self-esteem but low confidence in a specific skill", explanationEs: "Puedes tener alta autoestima pero baja confianza en una habilidad específica", category: "vocabulary" }
      ],
      exercises: [
        {
          type: "matching",
          instruction: "Empareja el término psicológico con su definición",
          items: [
            { term: "Neuroplasticity", definition: "Brain's ability to form new neural connections" },
            { term: "Resilience", definition: "Ability to recover from adversity" },
            { term: "Conditioning", definition: "Learning through association" },
            { term: "Attachment", definition: "Emotional bond formed early in life" },
            { term: "Introvert", definition: "Person who recharges through solitude" },
            { term: "Extrovert", definition: "Person who recharges through social interaction" }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa con vocabulario de psicología",
          items: [
            { sentence: "___ processes include memory, attention, and reasoning.", answer: "Cognitive", hint: "relacionado con pensar" },
            { sentence: "Childhood ___ can affect adult relationships.", answer: "trauma", hint: "experiencia angustiante" },
            { sentence: "___ can be built through overcoming challenges.", answer: "Resilience", hint: "recuperarse" },
            { sentence: "___ theory explains how early bonds shape us.", answer: "Attachment", hint: "vínculo emocional" },
            { sentence: "___ means the brain can rewire itself throughout life.", answer: "Neuroplasticity", hint: "plasticidad cerebral" },
            { sentence: "As an ___, I need quiet time after social events.", answer: "introvert", hint: "energía de la soledad" }
          ]
        },
        {
          type: "transformation",
          instruction: "Reformula usando vocabulario psicológico",
          items: [
            { boring: "Some people like being alone.", innovative: "Introverts tend to recharge through solitude and quiet reflection.", improvement: "Usa 'introvert' y 'recharge'" },
            { boring: "The brain can change.", innovative: "Neuroplasticity shows that the brain can form new connections throughout life.", improvement: "Usa 'neuroplasticity'" },
            { boring: "She bounces back from difficulties.", innovative: "She has remarkable resilience — she recovers from setbacks and grows stronger.", improvement: "Usa 'resilience'" }
          ]
        },
        {
          type: "gap-fill",
          instruction: "Completa el diálogo sobre tipos de personalidad",
          items: [
            { sentence: "I've always been an ___ — I get drained at big parties.", answer: "introvert", hint: "energía de soledad" },
            { sentence: "My sister is the opposite, a total ___.", answer: "extrovert", hint: "energía de gente" },
            { sentence: "It's not about being shy — it's about where you get your ___.", answer: "energy", hint: "energía" },
            { sentence: "Studies show ___ affects how we form relationships.", answer: "attachment", hint: "apego" },
            { sentence: "And ___ means we can change our patterns at any age.", answer: "neuroplasticity", hint: "cerebro que se reorganiza" }
          ]
        }
      ],
      modelDialogue: {
        title: "Discusión sobre tipos de personalidad",
        context: "Dos colegas hablan sobre introversión, extroversión y comportamiento.",
        dialogue: [
          { speaker: "Sam", text: "I've been reading about personality types. I'm definitely an introvert — I need alone time to recharge after meetings.", translation: "He estado leyendo sobre tipos de personalidad. Definitivamente soy introvertido — necesito tiempo a solas para recargar después de reuniones." },
          { speaker: "Jordan", text: "I'm more of an extrovert. I get energy from being around people. But it's not about being shy or outgoing — it's about where you draw energy from.", translation: "Soy más extrovertido. Obtengo energía de estar con gente. Pero no se trata de ser tímido o sociable — se trata de dónde obtienes la energía." },
          { speaker: "Sam", text: "Right. And attachment theory suggests our early relationships shape how we connect as adults. Trauma in childhood can affect that.", translation: "Exacto. Y la teoría del apego sugiere que nuestras relaciones tempranas moldean cómo nos conectamos de adultos. El trauma en la infancia puede afectar eso." },
          { speaker: "Jordan", text: "But here's the hopeful part — neuroplasticity. The brain can rewire itself. We're not stuck with our conditioning. Resilience can be developed.", translation: "Pero aquí está la parte esperanzadora — la neuroplasticidad. El cerebro puede reconectarse. No estamos atrapados con nuestro condicionamiento. La resiliencia puede desarrollarse." },
          { speaker: "Sam", text: "That's true. Self-esteem and attachment patterns can change with awareness and effort. The cognitive understanding helps.", translation: "Es cierto. La autoestima y los patrones de apego pueden cambiar con consciencia y esfuerzo. La comprensión cognitiva ayuda." }
        ],
        keyPhrases: [
          { phrase: "introvert / extrovert", translation: "introvertido / extrovertido", usage: "Tipos de personalidad según fuente de energía" },
          { phrase: "recharge", translation: "recargar", usage: "Recuperar energía" },
          { phrase: "attachment theory", translation: "teoría del apego", usage: "Vínculos tempranos" },
          { phrase: "neuroplasticity", translation: "neuroplasticidad", usage: "Cerebro que puede cambiar" },
          { phrase: "build resilience", translation: "desarrollar resiliencia", usage: "Capacidad de recuperación" }
        ]
      },
      pronunciationFocus: {
        sounds: [],
        commonProblems: [
          { word: "neuroplasticity", wrong: "neuro-plas-TI-city", correct: "/ˌnjʊərəʊplæˈstɪsəti/", tip: "neuro-plas-TIS-i-ty" },
          { word: "subconscious", wrong: "sub-CON-scious", correct: "/ˌsʌbˈkɒnʃəs/", tip: "sub-CON-shus" },
          { word: "resilience", wrong: "re-SIL-i-ence", correct: "/rɪˈzɪliəns/", tip: "ri-ZIL-yens" }
        ],
        intonationPatterns: [
          { pattern: "Hedging for sensitive topics", example: "It could be argued that...", meaning: "Suavizar al discutir psicología" },
          { pattern: "Empathetic tone for trauma/mental health", example: "That must have been difficult.", meaning: "Tono que valida sin trivializar" }
        ]
      },
      culturalNote: {
        title: "Psychology Discourse in English",
        titleEs: "Discurso psicológico en inglés",
        content: "En culturas anglosajonas, hablar de psicología y salud mental se ha normalizado. Términos como 'therapy', 'trauma', 'anxiety' aparecen en conversaciones cotidianas. Sin embargo, usar vocabulario clínico requiere precisión — 'trauma' no debe trivializarse. El concepto introvert/extrovert (de Jung) es muy usado; 'I'm an introvert' es una declaración común. La discusión de neuroplasticity refleja interés en ciencia popular.",
        contentEs: "La psicología en inglés mezcla términos técnicos con uso cotidiano; la precisión importa."
      },
      consolidationQuiz: [
        {
          question: "'Introvert' vs 'extrovert' — la diferencia clave es:",
          options: ["Timidez vs sociabilidad", "Dónde obtienes energía (soledad vs gente)", "Inteligencia", "Habilidad social"],
          correctAnswer: 1,
          explanation: "Introvert = energía de soledad; extrovert = energía de interacción social"
        },
        {
          question: "'Neuroplasticity' significa:",
          options: ["El cerebro es plástico", "El cerebro puede formar nuevas conexiones", "La mente es flexible", "Los nervios se estiran"],
          correctAnswer: 1,
          explanation: "Neuroplasticity = capacidad del cerebro de reorganizarse"
        },
        {
          question: "'Trauma' debe reservarse para:",
          options: ["Cualquier experiencia mala", "Experiencias con impacto psicológico profundo y duradero", "Estrés laboral", "Malos días"],
          correctAnswer: 1,
          explanation: "Trauma implica impacto significativo y duradero"
        },
        {
          question: "'Conditioning' en psicología se refiere a:",
          options: ["Acondicionar aire", "Aprendizaje por asociación (Pavlov)", "Condiciones de vida", "Entrenamiento físico"],
          correctAnswer: 1,
          explanation: "Conditioning = aprendizaje por asociación de estímulos"
        },
        {
          question: "'Self-esteem' vs 'self-confidence':",
          options: ["Son lo mismo", "Self-esteem = sentido de valor; self-confidence = creencia en habilidades", "Self-confidence es más importante", "Solo existe self-esteem"],
          correctAnswer: 1,
          explanation: "Relacionados pero distintos: valor propio vs creencia en capacidades"
        }
      ],
      guidedProduction: [
        {
          prompt: "Describe cómo los conceptos de introversión/extroversión se aplican a tu vida o a alguien que conoces",
          topic: "Personality types and energy",
          sampleResponse: "I've come to understand that I'm an introvert — not because I'm shy, but because I need solitude to recharge. After a day of meetings, my cognitive resources feel depleted. I've learned that this isn't a flaw; it's just how I'm wired. My extrovert colleagues thrive in the same situations. Attachment theory has also helped me understand my relationship patterns. And the concept of neuroplasticity gives me hope — we're not stuck. With awareness, we can develop greater resilience and even shift some of our conditioning. Self-esteem grows when we understand ourselves rather than judge ourselves."
        },
        {
          prompt: "Explica por qué el vocabulario psicológico es útil en conversaciones sobre comportamiento",
          sampleResponse: "Psychological vocabulary gives us precision. Saying 'I'm an introvert' is more accurate than 'I don't like parties' — it explains the why (energy source). 'Trauma' distinguishes significant impact from everyday stress. 'Resilience' names a quality we can develop, not just a vague 'bouncing back.' 'Neuroplasticity' offers hope — it's not 'you can't teach an old dog new tricks.' 'Attachment' explains relationship patterns without blaming. Using these terms helps us communicate about the mind with the same clarity we use for the body."
        }
      ],
      connectionToPrevious: "La retórica y el hedging son útiles al discutir temas sensibles como psicología — 'It could be argued that...', 'From a cognitive perspective...'",
      connectionToNext: "¡Felicidades! Has completado el Level 10. Tienes dominio avanzado del inglés, incluyendo vocabulario de psicología y comportamiento."
    },
    {
      id: 12,
      title: "Science Communication",
      titleEs: "Comunicación Científica",
      introduction: {
        title: "🔬 Comunicando Ciencia con Precisión",
        explanation: "En inglés C1/C2 puedes describir metodología científica, interpretar datos, expresar causalidad con precisión y comunicar hallazgos de forma accesible.",
        keyPoints: [
          "Metodología: 'Participants were randomly assigned to...', 'The study employed a double-blind design'",
          "Resultados: 'The findings indicate that...', 'Data suggests a correlation between...'",
          "Limitaciones: 'It should be noted that sample size was limited', 'Causality cannot be inferred from...'",
          "Implicaciones: 'These findings have implications for...', 'Further research is warranted'"
        ],
        examples: [
          { english: "Participants were randomly assigned to one of three conditions.", spanish: "Los participantes fueron asignados aleatoriamente a una de tres condiciones.", explanation: "Pasiva en metodología científica" },
          { english: "The data suggests a positive correlation, though causality cannot be inferred.", spanish: "Los datos sugieren una correlación positiva, aunque no se puede inferir causalidad.", explanation: "Hedging con limitación epistemológica" },
          { english: "These findings have implications for public health policy.", spanish: "Estos hallazgos tienen implicaciones para la política de salud pública.", explanation: "Implicaciones aplicadas" }
        ],
        tips: [
          "💡 'Suggest' y 'indicate' son más precisos que 'show' en ciencia",
          "💡 Correlación ≠ causalidad: mencionar esta distinción es señal de rigor",
          "💡 'Further research is warranted / needed' es una conclusión estándar en papers"
        ],
        whenToUse: ["En presentaciones de investigación o papers académicos", "Al comunicar ciencia a audiencias no especializadas", "En debates sobre política basada en evidencia"],
        whenNotToUse: ["No uses jerga estadística sin explicarla en contextos divulgativos", "Evita afirmaciones absolutas no sustentadas en datos"]
      },
      objectives: ["Describir metodología científica", "Interpretar y comunicar datos con rigor", "Usar vocabulario de investigación C1/C2"],
      grammarTheoryIds: ["b2-passive-advanced", "c1-distancing-language"],
      estimatedMinutes: 35,
      vocabulary: {
        nouns: [
          { id: "l10t12_n1", word: "methodology", translation: "metodología", type: "noun", definition: "the system of methods used in a study", definitionEs: "el sistema de métodos usados en un estudio", example: "The methodology ensured reproducibility.", exampleEs: "La metodología garantizó la reproducibilidad.", related: ["method"], difficulty: 2 },
          { id: "l10t12_n2", word: "correlation", translation: "correlación", type: "noun", definition: "a mutual relationship between two variables", definitionEs: "relación mutua entre dos variables", example: "There is a correlation between exercise and mood.", exampleEs: "Hay una correlación entre el ejercicio y el estado de ánimo.", related: [], difficulty: 2 },
          { id: "l10t12_n3", word: "replication", translation: "replicación", type: "noun", definition: "repeating an experiment to verify results", definitionEs: "repetir un experimento para verificar resultados", example: "The findings await independent replication.", exampleEs: "Los hallazgos esperan replicación independiente.", related: ["replicate"], difficulty: 3 },
        ],
        verbs: [
          { id: "l10t12_v1", word: "hypothesise", translation: "plantear una hipótesis", type: "verb", definition: "to suggest as a hypothesis", definitionEs: "sugerir como hipótesis", example: "The researchers hypothesised that sleep deprivation impairs cognition.", exampleEs: "Los investigadores plantearon la hipótesis de que la privación de sueño deteriora la cognición.", related: ["hypothesis"], difficulty: 3 },
          { id: "l10t12_v2", word: "infer", translation: "inferir", type: "verb", definition: "to conclude from evidence", definitionEs: "concluir a partir de evidencia", example: "We cannot infer causality from observational data alone.", exampleEs: "No podemos inferir causalidad solo a partir de datos observacionales.", related: ["inference"], difficulty: 3 },
        ],
        adjectives: [
          { id: "l10t12_a1", word: "replicable", translation: "replicable", type: "adjective", definition: "able to be repeated with same results", definitionEs: "que puede repetirse con los mismos resultados", example: "Good science must be replicable.", exampleEs: "La buena ciencia debe ser replicable.", related: [], difficulty: 3 },
          { id: "l10t12_a2", word: "peer-reviewed", translation: "revisado por pares", type: "adjective", definition: "evaluated by experts in the field before publication", definitionEs: "evaluado por expertos del campo antes de publicarse", example: "Only peer-reviewed studies were included.", exampleEs: "Solo se incluyeron estudios revisados por pares.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l10t12_e1", word: "further research is warranted", translation: "se justifica investigación adicional", type: "expression", definition: "more research is needed and justified", definitionEs: "se necesita y justifica más investigación", example: "Further research is warranted to confirm these findings.", exampleEs: "Se justifica investigación adicional para confirmar estos hallazgos.", related: [], difficulty: 2 },
          { id: "l10t12_e2", word: "correlation does not imply causation", translation: "la correlación no implica causalidad", type: "expression", definition: "two things occurring together does not mean one causes the other", definitionEs: "que dos cosas ocurran juntas no significa que una cause la otra", example: "Correlation does not imply causation — other variables may explain the link.", exampleEs: "La correlación no implica causalidad: otras variables pueden explicar el vínculo.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l10t12_cm1", wrong: "The study proofs that exercise reduces stress.", correct: "The study suggests / indicates that exercise reduces stress.", explanation: "'Prove' is a very high standard in science. Use 'suggest', 'indicate', 'demonstrate'.", explanationEs: "'Prove' (probar) es un estándar muy alto en ciencia. Usa 'suggest', 'indicate', 'demonstrate'.", category: "usage" },
        { id: "l10t12_cm2", wrong: "The researches found interesting results.", correct: "The researchers found interesting results.", explanation: "'Research' is uncountable — it doesn't pluralize. Those who research are 'researchers'.", explanationEs: "'Research' es incontable — no se pluraliza. Los que investigan son 'researchers'.", category: "grammar" },
        { id: "l10t12_cm3", wrong: "This study shows a direct cause.", correct: "This study suggests a correlation, though causality remains to be established.", explanation: "In science, be careful about claiming direct causality unless the design allows it.", explanationEs: "En ciencia, ten cuidado con afirmar causalidad directa salvo que el diseño lo permita.", category: "usage" }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las frases científicas:",
          items: [
            { sentence: "The participants were randomly ___ to two groups.", answer: "assigned", hint: "passive: randomly assigned" },
            { sentence: "Correlation does not ___ causation.", answer: "imply", hint: "standard scientific phrase" },
            { sentence: "Further research is ___ to confirm the findings.", answer: "warranted", hint: "further research is warranted" }
          ]
        }
      ],
      modelDialogue: {
        title: "Discutiendo un estudio científico",
        situation: "Clara y James debaten un estudio reciente sobre redes sociales y bienestar mental.",
        dialogue: [
          { speaker: "Clara", text: "Have you seen this study on social media and depression? It's been all over the news.", textEs: "¿Has visto este estudio sobre redes sociales y depresión? Ha salido en todos los medios." },
          { speaker: "James", text: "I have. The findings are interesting, but I'd want to know more about the methodology before drawing conclusions.", textEs: "Sí. Los hallazgos son interesantes, pero querría saber más sobre la metodología antes de sacar conclusiones." },
          { speaker: "Clara", text: "The researchers hypothesised a causal link, though the data only shows correlation.", textEs: "Los investigadores plantearon una relación causal, aunque los datos solo muestran correlación." },
          { speaker: "James", text: "Exactly. Correlation does not imply causation. The directionality is unclear — do social media cause depression, or do depressed people use more social media?", textEs: "Exactamente. La correlación no implica causalidad. La dirección es ambigua: ¿las redes sociales causan depresión, o las personas con depresión usan más redes sociales?" },
          { speaker: "Clara", text: "A fair point. Further research using longitudinal designs would be warranted.", textEs: "Buen punto. Se justificaría investigación adicional con diseños longitudinales." }
        ],
        vocabulary: ["methodology", "correlation", "causation", "hypothesised", "warranted"],
        followUpQuestions: ["¿Por qué James quiere saber más sobre la metodología?", "¿Cuál es el problema de dirección que señala James?"]
      },
      pronunciationFocus: {
        title: "Pronunciación de vocabulario científico",
        sounds: [
          { sound: "Methodology", examples: ["methodology /ˌmeθəˈdɒlədʒi/"], tip: "Acento en tercera sílaba: me-tho-DOL-o-gy" },
          { sound: "Hypothesis", examples: ["hypothesis /haɪˈpɒθɪsɪs/"], tip: "Acento en segunda sílaba: hy-POTH-e-sis" }
        ],
        commonErrors: [
          { word: "correlation", wrong: "/cor-re-LA-tion/ (Spanish pattern missing r-sound)", right: "/ˌkɒrəˈleɪʃn/", note: "co-rre-LAY-shun" }
        ]
      },
      culturalNote: {
        title: "Ciencia y evidencia en la cultura anglosajona",
        content: "En UK y EE.UU., el pensamiento basado en evidencia ('evidence-based') es muy valorado en cultura intelectual. Expresiones como 'the science is clear', 'peer-reviewed evidence' o 'anecdotal vs. empirical' son comunes en debates públicos. Nature y Science son las revistas más prestigiosas del mundo anglófono. El movimiento de 'open science' y 'reproducibility crisis' en psicología han elevado el debate sobre rigor metodológico.",
        examples: [
          "'Evidence-based' - basado en evidencia",
          "'Peer review' - revisión por pares",
          "'Replication crisis' - crisis de replicación en ciencias sociales",
          "'Anecdotal evidence' - evidencia anecdótica (no rigurosa)"
        ]
      },
      consolidationQuiz: [
        { question: "¿Por qué no debes decir 'The study proves'?", options: ["Porque es demasiado informal", "Porque 'prove' establece certeza absoluta que normalmente no está justificada", "Porque es incorrecto gramaticalmente", "Porque es una palabra poco común"], correctAnswer: 1, explanation: "En ciencia, usamos 'suggest', 'indicate', 'demonstrate' para expresar conclusiones con el grado de certeza adecuado." },
        { question: "¿Qué significa 'peer-reviewed'?", options: ["escrito por un experto", "revisado por expertos antes de publicarse", "publicado en internet", "basado en datos primarios"], correctAnswer: 1, explanation: "Peer review = evaluación por otros expertos del campo." },
        { question: "'Further research is warranted' significa:", options: ["no se necesita más investigación", "se justifica más investigación", "la investigación fue un fracaso", "la investigación fue financiada"], correctAnswer: 1, explanation: "'Warranted' = justified, needed." }
      ],
      guidedProduction: [
        {
          task: "Resumir un estudio científico",
          prompt: "Resume un estudio o hallazgo científico que conozcas, destacando metodología, resultados y limitaciones.",
          sampleAnswer: "A recent study investigated the effect of sleep deprivation on cognitive performance. Participants were randomly assigned to either a sleep-restricted group (six hours per night) or a control group (eight hours). The findings indicated a significant decline in reaction time and working memory in the sleep-restricted group. However, it should be noted that the sample consisted exclusively of university students, which limits generalisability. Causality can be inferred in this case, as it was an experimental design. Further research using more diverse populations is warranted.",
          hints: ["Describe metodología en pasiva: 'were assigned'", "Menciona hallazgos con 'indicate', 'suggest'", "Incluye limitaciones: 'it should be noted'", "Cierra con 'further research is warranted'"]
        }
      ],
      connectionToPrevious: "La retórica y el hedging son útiles al discutir evidencia científica — evitan afirmaciones absolutas.",
      connectionToNext: "¡Felicidades! Has completado el Level 10. Tienes dominio avanzado del inglés, incluyendo vocabulario científico y académico."
    },
  ]
};

export default level10;
