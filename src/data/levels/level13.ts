import type { Level } from '../../types';

export const level13: Level = {
  id: 13,
  name: "Native-Like",
  cefrLevel: "C2+",
  description: "Dominio completo: expresiones nativas, sutilezas, variaciones regionales y fluidez total",
  totalTasks: 12,
  estimatedHours: 28,
  color: "#fbbf24",
  icon: "🏆",
  tasks: [
    {
      id: 1,
      title: "Native Expressions and Slang",
      titleEs: "Expresiones Nativas y Jerga",
      introduction: {
        title: "🗣️ Expresiones Nativas y Jerga",
        explanation: "Las expresiones coloquiales y el slang actual son el último nivel de dominio. Úsalas con cuidado y en contextos apropiados.",
        keyPoints: [
          "Workplace slang: 'bandwidth', 'circle back', 'ping me', 'take offline'",
          "Millennial/Gen Z: 'lowkey', 'highkey', 'vibe', 'sus', 'no cap'",
          "British slang: 'chuffed', 'gutted', 'knackered', 'dodgy', 'mate'",
          "American slang: 'bail', 'flake', 'ghost', 'salty', 'extra'",
          "Internet-origin: 'go viral', 'FOMO', 'YOLO', 'troll', 'cancel'"
        ],
        examples: [
          { english: "I don't have the bandwidth for another project right now.", spanish: "No tengo la capacidad/tiempo para otro proyecto ahora mismo.", explanation: "Jerga de oficina (bandwidth = capacidad)" },
          { english: "Let's take this offline and circle back later. Ping me when you're free.", spanish: "Hablemos de esto fuera de la reunión y retomemos después. Escríbeme cuando estés libre.", explanation: "Corporate slang típico" },
          { english: "I'm lowkey stressed about the presentation, but it'll be fine.", spanish: "Estoy un poco estresado por la presentación, pero estará bien.", explanation: "Slang joven (lowkey = un poco/secretamente)" }
        ],
        tips: [
          "💡 'Bandwidth' en oficina = tiempo/capacidad disponible",
          "💡 'Ghost' alguien = ignorar/desaparecer sin explicación",
          "💡 El slang envejece rápido - úsalo con moderación"
        ],
        whenToUse: [
          "En conversaciones informales con hablantes nativos de tu generación",
          "En mensajes de Slack/Teams con compañeros de trabajo cercanos",
          "En redes sociales o comunicación digital casual",
          "Cuando quieres mostrar cercanía cultural con un grupo específico"
        ],
        whenNotToUse: [
          "Nunca uses Gen Z slang en reuniones formales, emails a directivos o documentos oficiales",
          "No mezcles slang británico y americano en la misma conversación — puede confundir",
          "Evita usar slang que no dominas — sonar forzado es peor que sonar formal",
          "No uses 'no cap', 'sus' o 'lowkey' en entrevistas de trabajo, aunque sea una startup"
        ]
      },
      objectives: ["Entender jerga moderna", "Usar expresiones coloquiales apropiadamente", "Conectar con hablantes nativos casuales"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-register-shift"],
      vocabulary: {
        nouns: [
          { id: "l13t1_n1", word: "bandwidth", translation: "capacidad/tiempo disponible", type: "noun", definition: "capacity to do something", definitionEs: "capacidad para hacer algo", example: "I don't have the bandwidth.", exampleEs: "No tengo la capacidad.", related: [], difficulty: 2 },
          { id: "l13t1_n2", word: "vibe", translation: "vibra/ambiente", type: "noun", definition: "feeling or atmosphere", definitionEs: "sensación o ambiente", example: "I'm loving the vibe here.", exampleEs: "Me encanta la vibra aquí.", related: [], difficulty: 1 },
          { id: "l13t1_n3", word: "FOMO", translation: "miedo a perderse algo", type: "noun", definition: "Fear Of Missing Out", definitionEs: "miedo a perderse algo", example: "I have serious FOMO.", exampleEs: "Tengo un FOMO serio.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l13t1_v1", word: "circle back", translation: "retomar/volver a", type: "verb", definition: "to return to a topic", definitionEs: "volver a un tema", example: "Let's circle back to that.", exampleEs: "Retomemos eso.", related: [], difficulty: 2 },
          { id: "l13t1_v2", word: "ping", translation: "enviar mensaje/contactar", type: "verb", definition: "to send a message", definitionEs: "enviar un mensaje", example: "Ping me when you're ready.", exampleEs: "Escríbeme cuando estés listo.", related: [], difficulty: 1 },
          { id: "l13t1_v3", word: "ghost", translation: "ignorar/desaparecer", type: "verb", definition: "to ignore someone completely", definitionEs: "ignorar a alguien completamente", example: "He ghosted me after the interview.", exampleEs: "Me ignoró después de la entrevista.", related: [], difficulty: 1 },
          { id: "l13t1_v4", word: "bail", translation: "cancelar/rajarse", type: "verb", definition: "to cancel plans", definitionEs: "cancelar planes", example: "Sorry, I have to bail.", exampleEs: "Perdón, tengo que cancelar.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l13t1_a1", word: "lowkey", translation: "un poco/discretamente", type: "adjective", definition: "somewhat/secretly", definitionEs: "un poco/secretamente", example: "I'm lowkey excited.", exampleEs: "Estoy un poco emocionado.", related: [], difficulty: 1 },
          { id: "l13t1_a2", word: "salty", translation: "resentido/amargado", type: "adjective", definition: "bitter or upset", definitionEs: "amargado o molesto", example: "Don't be so salty about it.", exampleEs: "No estés tan resentido por eso.", related: [], difficulty: 1 },
          { id: "l13t1_a3", word: "sus", translation: "sospechoso", type: "adjective", definition: "suspicious", definitionEs: "sospechoso", example: "That's kind of sus.", exampleEs: "Eso es algo sospechoso.", related: [], difficulty: 1 },
          { id: "l13t1_a4", word: "chuffed (UK)", translation: "contento/orgulloso", type: "adjective", definition: "pleased", definitionEs: "contento", example: "I'm well chuffed about it.", exampleEs: "Estoy muy contento por eso.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l13t1_e1", word: "take it offline", translation: "hablarlo fuera de la reunión", type: "expression", definition: "discuss privately later", definitionEs: "discutir privadamente después", example: "Let's take this offline.", exampleEs: "Hablemos de esto fuera de la reunión.", related: [], difficulty: 2 },
          { id: "l13t1_e2", word: "no cap", translation: "en serio/sin mentir", type: "expression", definition: "seriously/no lie", definitionEs: "en serio/sin mentir", example: "That was amazing, no cap.", exampleEs: "Eso fue increíble, en serio.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t1_cm1", wrong: "Using Gen Z slang in formal business contexts", correct: "Reserve generational slang for casual conversations with peers", explanation: "'Sus' or 'no cap' in a board meeting would be inappropriate", explanationEs: "'Sus' or 'no cap' in a board meeting would be inappropriate", category: "usage" },
        { id: "l13t1_cm2", wrong: "Overusing 'bandwidth' - I don't have the bandwidth for lunch", correct: "Use 'bandwidth' for work capacity, not personal activities", explanation: "Bandwidth applies to work/mental capacity, not everyday choices", explanationEs: "Bandwidth applies to work/mental capacity, not everyday choices", category: "usage" },
        { id: "l13t1_cm3", wrong: "Using British slang with Americans and vice versa", correct: "Match your slang to your audience's variety of English", explanation: "'Chuffed' will confuse most Americans; 'salty' might confuse some Brits", explanationEs: "'Chuffed' will confuse most Americans; 'salty' might confuse some Brits", category: "usage" },
        { id: "l13t1_cm4", wrong: "Using outdated slang trying to sound current", correct: "Either use current slang correctly or avoid it", explanation: "Outdated slang makes you sound out of touch", explanationEs: "Outdated slang makes you sound out of touch", category: "usage" },
        { id: "l13t1_cm5", wrong: "Saying 'I'll ping you' in formal email to client", correct: "Use 'I'll contact you' or 'I'll reach out' with external clients", explanation: "Corporate slang can seem unprofessional with clients", explanationEs: "Corporate slang can seem unprofessional with clients", category: "usage" },
        { id: "l13t1_cm6", wrong: "Using 'no cap' to emphasize in professional presentation", correct: "Use 'honestly' or 'to be frank' in professional contexts", explanation: "Gen Z slang undermines credibility in formal settings", explanationEs: "Gen Z slang undermines credibility in formal settings", category: "usage" },
        { id: "l13t1_cm7", wrong: "Saying 'That's lowkey sus' in performance review", correct: "Use 'That seems questionable' or 'I have concerns about that'", explanation: "Register mixing - slang in formal context", explanationEs: "Register mixing - slang in formal context", category: "usage" },
        { id: "l13t1_cm8", wrong: "Using 'ghost' as verb with senior stakeholders", correct: "Say 'stopped responding' or 'ceased communication'", explanation: "Slang can sound disrespectful when discussing serious professional matters", explanationEs: "Slang can sound disrespectful when discussing serious professional matters", category: "usage" }
      ],
      exercises: [
        { type: "context-matching", instruction: "Match each slang term to its appropriate context", items: [
          { slang: "Let's circle back on that", contexts: ["Corporate meeting", "Text to friend", "Academic paper"], correct: 0, explanation: "Corporate jargon for 'we'll discuss later'" },
          { slang: "That's lowkey sus", contexts: ["Email to CEO", "Chat with Gen Z colleague", "Client presentation"], correct: 1, explanation: "Very casual, youth slang" },
          { slang: "Ping me when you're free", contexts: ["Formal letter", "Work Slack/Teams", "Wedding invitation"], correct: 1, explanation: "Tech workplace casual" },
          { slang: "I'm absolutely chuffed", contexts: ["American business meeting", "British casual conversation", "Legal document"], correct: 1, explanation: "British informal for 'pleased'" }
        ]},
        { type: "generation-identification", instruction: "Identify which generation/group primarily uses each term", items: [
          { term: "bandwidth (work capacity)", group: ["Gen Z", "Corporate/Tech workers", "British elderly"], correct: 1 },
          { term: "no cap", group: ["Baby Boomers", "Gen Z/Millennials", "Legal professionals"], correct: 1 },
          { term: "circle back", group: ["Teenagers", "Corporate environment", "Academia"], correct: 1 },
          { term: "sus", group: ["Gen Z (from Among Us game)", "1990s slang", "British formal"], correct: 0 },
          { term: "gutted", group: ["American youth", "British all ages", "Australian only"], correct: 1 }
        ]},
        { type: "translation-to-formal", instruction: "Convert the slang expression to formal English", items: [
          { slang: "I don't have the bandwidth for another project", formal: "I don't have the capacity to take on another project at this time" },
          { slang: "Let's take this offline", formal: "Let's discuss this privately after the meeting" },
          { slang: "He totally ghosted me after the interview", formal: "He stopped responding to my communications after the interview" },
          { slang: "I'm lowkey stressed about this deadline", formal: "I'm somewhat anxious about meeting this deadline" }
        ]},
        { type: "uk-us-slang", instruction: "Classify each term as primarily British (UK), American (US), or Universal", items: [
          { term: "chuffed", region: "UK", explanation: "Distinctly British - means pleased" },
          { term: "salty", region: "US", explanation: "American slang - means bitter/upset" },
          { term: "ghost (verb)", region: "Universal", explanation: "Used globally - ignore someone" },
          { term: "gutted", region: "UK", explanation: "British - devastated/disappointed" },
          { term: "bail", region: "US", explanation: "American - cancel plans" },
          { term: "FOMO", region: "Universal", explanation: "Global internet culture" }
        ]},
        { type: "slang-context-matching", instruction: "Match each slang expression to its appropriate usage context", items: [
          { expression: "Let's circle back on that", context: "Corporate meeting", explanation: "Professional jargon for revisiting topic" },
          { expression: "I'm lowkey stressed", context: "Casual chat with peer", explanation: "Gen Z slang - very informal" },
          { expression: "Ping me when you're free", context: "Internal Slack/Teams", explanation: "Tech workplace casual" },
          { expression: "That's wicked good", context: "Boston colleague", explanation: "Regional - Boston intensifier" }
        ]},
        { type: "slang-to-formal-transformation", instruction: "Convert slang to formal equivalent", items: [
          { slang: "He totally ghosted me after the interview", formal: "He stopped responding to my communications after the interview" },
          { slang: "I gotta bail on the meeting", formal: "I need to withdraw from the meeting" },
          { slang: "That's kind of sus", formal: "That seems suspicious or questionable" },
          { slang: "No cap, that was amazing", formal: "Honestly, that was impressive" }
        ]},
        { type: "native-expression-usage", instruction: "Choose the correct expression for each context", items: [
          { context: "Team standup - you're too busy for new work", options: ["I don't have the bandwidth", "I'm lowkey dying", "That's sus"], correct: 0 },
          { context: "Suggesting to discuss something later", options: ["Let's take this offline", "Let's ghost this for now", "No cap, later"], correct: 0 },
          { context: "Casual text to work friend about stress", options: ["I'm lowkey stressed about the deadline", "I'm experiencing bandwidth constraints", "My stress levels are suboptimal"], correct: 0 },
          { context: "British colleague got promoted", options: ["I'm chuffed for you!", "I'm salty for you!", "That's sus!"], correct: 0 }
        ]},
        { type: "slang-register-identification", instruction: "Identify which register each phrase belongs to", items: [
          { phrase: "Let's synergize and circle back", register: "Corporate jargon" },
          { phrase: "That's lowkey fire, no cap", register: "Gen Z casual" },
          { phrase: "I'm well chuffed about it", register: "British informal" },
          { phrase: "Please advise at your earliest convenience", register: "Formal" }
        ]}
      ],
      modelDialogue: {
        title: "Navigating Different Registers in One Workday",
        context: "Tech company employee using different slang levels appropriately",
        dialogue: [
          { speaker: "In team standup", text: "I don't have bandwidth for the API refactor this sprint. Can we circle back next week?", note: "Corporate tech slang - appropriate for team meeting" },
          { speaker: "Slack to close colleague", text: "That PR review was brutal 😅 I'm lowkey stressed about the deadline", note: "Gen Z slang - appropriate for casual peer chat" },
          { speaker: "Email to manager", text: "I wanted to follow up on our discussion. I'll ping you when I have the analysis ready.", note: "Light tech slang - acceptable in semi-formal internal email" },
          { speaker: "Client call", text: "We'll prioritize this and get back to you by end of week with next steps.", note: "No slang - formal client communication" },
          { speaker: "Coffee with British colleague", text: "I'm absolutely chuffed about the launch! Were you gutted when they moved the deadline?", note: "British slang with British colleague - building rapport" },
          { speaker: "Text to friend", text: "Work meeting ran late, might have to bail on drinks. This project is sus - no cap, management doesn't know what they want 😩", note: "Full casual - Gen Z slang with close friend" }
        ],
        keyTakeaways: [
          "Same person uses completely different slang based on context",
          "Corporate slang is acceptable in internal meetings but not with clients",
          "Gen Z slang reserved for very casual peer interactions",
          "Match British/American slang to your audience"
        ]
      },
      pronunciationFocus: {
        title: "Contemporary Slang and Tech Vocabulary",
        titleEs: "Vocabulario de slang contemporáneo y tech",
        sounds: [
          { symbol: "/ˈbændwɪdθ/", word: "bandwidth", tip: "BAND-width, not 'band-with'" },
          { symbol: "/ˈloʊki/", word: "lowkey", tip: "LOW-key, stress on first syllable" },
          { symbol: "/ˈfoʊmoʊ/", word: "FOMO", tip: "FOH-moh, rhymes with 'promo'" },
          { symbol: "/tʃʌft/", word: "chuffed", tip: "CHUFT, one syllable, rhymes with 'stuffed'" }
        ]
      },
      culturalNote: {
        title: "Slang Across Regions and Generations",
        titleEs: "Slang entre regiones y generaciones",
        content: "Slang ages rapidly and varies by region, age group, and industry. Tech industry has its own lexicon ('bandwidth', 'ping', 'circle back'). Gen Z slang ('sus', 'no cap', 'lowkey') comes largely from social media and gaming. Using current slang correctly signals cultural fluency, but using it wrong or in wrong contexts backfires. When uncertain, err toward standard English.",
        contentEs: "El slang envejece rápido y varía por región, grupo etario e industria. La industria tech tiene su propio léxico ('bandwidth', 'ping', 'circle back'). El slang Gen Z ('sus', 'no cap', 'lowkey') viene en gran parte de redes sociales y gaming. Usar slang actual correctamente señala fluidez cultural, pero usarlo mal o en contextos incorrectos puede ser contraproducente. Cuando dudes, usa inglés estándar.",
        region: "Global"
      },
      consolidationQuiz: [
        { question: "What does 'I don't have the bandwidth' mean in work context?", options: ["My internet is slow", "I don't have capacity/time", "I need a raise", "I'm offline"], correctIndex: 1, explanation: "Bandwidth = capacity/time available" },
        { question: "'Ghosted' means:", options: ["Scared someone", "Saw a ghost", "Ignored/disappeared without explanation", "Haunted someone"], correctIndex: 2, explanation: "To ghost = cut off communication completely" },
        { question: "Which is British slang?", options: ["Salty", "Bail", "Chuffed", "Sus"], correctIndex: 2, explanation: "'Chuffed' (pleased) is distinctly British" },
        { question: "When is 'no cap' appropriate?", options: ["Board presentation", "Client email", "Casual chat with young colleague", "Performance review"], correctIndex: 2, explanation: "Gen Z slang only for very casual contexts" }
      ],
      guidedProduction: {
        scenario: "Write three versions of the same message (you're too busy for a new project) using different levels of slang.",
        promptQuestions: [
          "How would you say this in a formal email to your director?",
          "How would you express this using corporate slang in a team Slack?",
          "How would you tell a close work friend in a casual text?"
        ],
        sampleResponse: "Director email: 'Thank you for thinking of me for this project. Unfortunately, my current commitments don't allow me to take on additional responsibilities at this time. I'd be happy to discuss how I might contribute once my current project concludes.'\n\nTeam Slack: 'Hey team, I don't have the bandwidth for Project X this sprint. Can we circle back after the release? Happy to ping you then.'\n\nText to friend: 'They want me on ANOTHER project 🙄 I'm lowkey dying here, no cap. Gonna have to bail on that one fr'"
      },
      connectionToPrevious: "Level 12 cohesive devices provide the formal foundation; slang represents the casual extreme",
      connectionToNext: "British vs American English explores regional slang differences in depth"
    },
    {
      id: 2,
      title: "British vs American English Deep Dive",
      titleEs: "Inglés Británico vs Americano en Profundidad",
      introduction: {
        title: "🇬🇧🇺🇸 Británico vs Americano",
        explanation: "Más allá de 'colour/color', hay diferencias profundas en vocabulario, gramática y expresiones entre el inglés británico y americano.",
        keyPoints: [
          "Vocabulario: 'queue/line', 'flat/apartment', 'lift/elevator', 'lorry/truck'",
          "Gramática: 'have got/have', 'at the weekend/on the weekend', collective nouns",
          "Expresiones: 'touch wood/knock on wood', 'straight away/right away'",
          "Spelling: -ise/-ize, -our/-or, -re/-er, -ogue/-og",
          "Pronunciación: can't, schedule, aluminium/aluminum"
        ],
        examples: [
          { english: "UK: 'Have you got a pen?' vs US: 'Do you have a pen?'", spanish: "UK: '¿Tienes un bolígrafo?' (have got) vs US: '¿Tienes un bolígrafo?' (do you have)", explanation: "Diferencia gramatical común" },
          { english: "UK: 'The team are playing well.' vs US: 'The team is playing well.'", spanish: "UK: 'El equipo está jugando bien.' (plural) vs US: 'El equipo está jugando bien.' (singular)", explanation: "Sustantivos colectivos" },
          { english: "UK: 'I'll do it straight away.' vs US: 'I'll do it right away.'", spanish: "UK/US: 'Lo haré inmediatamente.'", explanation: "Expresiones equivalentes" }
        ],
        tips: [
          "💡 En negocios internacionales, el inglés americano es más común",
          "💡 Sé consistente - no mezcles británico y americano",
          "💡 Los británicos dicen 'at the weekend'; los americanos 'on the weekend'"
        ],
        whenToUse: [
          'Con audiencia UK: "Have you got a pen?", "The team are playing well", "straight away"',
          'Con audiencia US: "Do you have a pen?", "The team is playing well", "right away"',
          'En escritura para UK: -ise (organise), -our (colour), -re (centre)',
          'En escritura para US: -ize (organize), -or (color), -er (center)'
        ],
        whenNotToUse: [
          'No mezcles variantes en el mismo documento: "colour" y "color" juntos confunden',
          'En contextos internacionales → el inglés americano suele ser más universal',
          'Evita "at the weekend" con americanos → suena británico; "on the weekend" es neutro'
        ]
      },
      objectives: ["Distinguir inglés británico y americano", "Ser consistente en uso", "Adaptarse a la audiencia"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c2-register-shift"],
      vocabulary: {
        nouns: [
          { id: "l13t2_n1", word: "queue (UK) / line (US)", translation: "fila/cola", type: "noun", definition: "line of people waiting", definitionEs: "fila de personas esperando", example: "UK: Join the queue. US: Get in line.", exampleEs: "Forma en la fila.", related: [], difficulty: 1 },
          { id: "l13t2_n2", word: "flat (UK) / apartment (US)", translation: "apartamento/departamento", type: "noun", definition: "residential unit", definitionEs: "unidad residencial", example: "UK: I live in a flat. US: I live in an apartment.", exampleEs: "Vivo en un apartamento.", related: [], difficulty: 1 },
          { id: "l13t2_n3", word: "lorry (UK) / truck (US)", translation: "camión", type: "noun", definition: "large vehicle", definitionEs: "vehículo grande", example: "UK: The lorry arrived. US: The truck arrived.", exampleEs: "El camión llegó.", related: [], difficulty: 1 },
          { id: "l13t2_n4", word: "pavement (UK) / sidewalk (US)", translation: "acera/vereda", type: "noun", definition: "path for pedestrians", definitionEs: "camino para peatones", example: "UK: Walk on the pavement. US: Walk on the sidewalk.", exampleEs: "Camina por la acera.", related: [], difficulty: 1 },
          { id: "l13t2_n5", word: "chemist (UK) / pharmacy/drugstore (US)", translation: "farmacia", type: "noun", definition: "place to buy medicine", definitionEs: "lugar para comprar medicina", example: "UK: Go to the chemist. US: Go to the pharmacy.", exampleEs: "Ve a la farmacia.", related: [], difficulty: 1 },
        ],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l13t2_e1", word: "straight away (UK) / right away (US)", translation: "inmediatamente", type: "expression", definition: "immediately", definitionEs: "inmediatamente", example: "I'll do it straight away.", exampleEs: "Lo haré inmediatamente.", related: [], difficulty: 1 },
          { id: "l13t2_e2", word: "touch wood (UK) / knock on wood (US)", translation: "tocar madera", type: "expression", definition: "superstition for luck", definitionEs: "superstición para suerte", example: "I haven't been sick, touch wood.", exampleEs: "No me he enfermado, toco madera.", related: [], difficulty: 1 },
          { id: "l13t2_e3", word: "at the weekend (UK) / on the weekend (US)", translation: "el fin de semana", type: "expression", definition: "during the weekend", definitionEs: "durante el fin de semana", example: "UK: I'll see you at the weekend. US: I'll see you on the weekend.", exampleEs: "Te veo el fin de semana.", related: [], difficulty: 1 },
          { id: "l13t2_e4", word: "Have you got...? (UK) / Do you have...? (US)", translation: "¿Tienes...?", type: "expression", definition: "asking about possession", definitionEs: "preguntando sobre posesión", example: "UK: Have you got the time? US: Do you have the time?", exampleEs: "¿Tienes la hora?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t2_cm1", wrong: "Mixing British and American spelling in same document", correct: "Choose one variety and be consistent throughout", explanation: "'Organisation' and 'organize' in the same text looks unprofessional", explanationEs: "'Organisation' and 'organize' in the same text looks unprofessional", category: "usage" },
        { id: "l13t2_cm2", wrong: "Using 'pavement' with Americans (means road surface to them)", correct: "Use 'sidewalk' with Americans", explanation: "In US English, 'pavement' means the road itself, not the pedestrian path", explanationEs: "In US English, 'pavement' means the road itself, not the pedestrian path", category: "vocabulary" },
        { id: "l13t2_cm3", wrong: "Using American 'pants' in UK (means underwear there)", correct: "Use 'trousers' in UK for outer leg garments", explanation: "Saying 'nice pants' in UK refers to underwear - embarrassing!", explanationEs: "Saying 'nice pants' in UK refers to underwear - embarrassing!", category: "false-friend" },
        { id: "l13t2_cm4", wrong: "'The team are winning' (UK) in American context", correct: "Americans use singular: 'The team is winning'", explanation: "UK treats collective nouns as plural; US as singular", explanationEs: "UK treats collective nouns as plural; US as singular", category: "grammar" },
        { id: "l13t2_cm5", wrong: "Asking to borrow a 'rubber' in US (means condom)", correct: "Use 'eraser' in American English", explanation: "False friend - rubber = eraser in UK, condom in US", explanationEs: "False friend - rubber = eraser in UK, condom in US", category: "false-friend" },
        { id: "l13t2_cm6", wrong: "Using 'at the weekend' in American business report", correct: "Use 'on the weekend' for American audience", explanation: "Preposition differs between varieties", explanationEs: "Preposition differs between varieties", category: "grammar" },
        { id: "l13t2_cm7", wrong: "Writing 'programme' (UK) in US company style guide", correct: "Use 'program' for American English", explanation: "Spelling must match audience - programme = TV in US", explanationEs: "Spelling must match audience - programme = TV in US", category: "vocabulary" },
        { id: "l13t2_cm8", wrong: "Saying 'I've got' in formal American writing", correct: "Use 'I have' in American formal contexts", explanation: "Have got is more British; Americans prefer 'have' in formal writing", explanationEs: "Have got is more British; Americans prefer 'have' in formal writing", category: "grammar" }
      ],
      exercises: [
        { type: "vocabulary-conversion", instruction: "Convert British English to American English", items: [
          { british: "queue", american: "line" },
          { british: "flat", american: "apartment" },
          { british: "lorry", american: "truck" },
          { british: "pavement", american: "sidewalk" },
          { british: "chemist", american: "pharmacy/drugstore" },
          { british: "lift", american: "elevator" },
          { british: "boot (of car)", american: "trunk" },
          { british: "bonnet (of car)", american: "hood" },
          { british: "petrol", american: "gas/gasoline" },
          { british: "holiday", american: "vacation" }
        ]},
        { type: "spelling-conversion", instruction: "Convert British spelling to American spelling", items: [
          { british: "colour", american: "color" },
          { british: "organisation", american: "organization" },
          { british: "centre", american: "center" },
          { british: "traveller", american: "traveler" },
          { british: "catalogue", american: "catalog" },
          { british: "defence", american: "defense" },
          { british: "programme", american: "program" },
          { british: "behaviour", american: "behavior" }
        ]},
        { type: "grammar-differences", instruction: "Identify which sentence is British (UK) or American (US)", items: [
          { sentence: "The government are considering new policies", variety: "UK", explanation: "British treats collective nouns as plural" },
          { sentence: "The government is considering new policies", variety: "US", explanation: "American treats collective nouns as singular" },
          { sentence: "Have you got a pen?", variety: "UK", explanation: "British uses 'have got' for possession" },
          { sentence: "Do you have a pen?", variety: "US", explanation: "American uses 'do you have'" },
          { sentence: "I'll do it straightaway", variety: "UK", explanation: "British 'straightaway'" },
          { sentence: "I'll do it right away", variety: "US", explanation: "American 'right away'" }
        ]},
        { type: "false-friends", instruction: "Identify potential confusion points between UK and US English", items: [
          { word: "pants", uk: "underwear", us: "trousers", warning: "Don't compliment pants in UK!" },
          { word: "pavement", uk: "sidewalk", us: "road surface", warning: "Walk on the pavement means different things!" },
          { word: "first floor", uk: "one floor up from ground", us: "ground level", warning: "Floor numbering differs!" },
          { word: "rubber", uk: "eraser", us: "condom (slang)", warning: "Asking to borrow a rubber has different implications!" },
          { word: "football", uk: "soccer", us: "American football", warning: "Completely different sports!" }
        ]},
        { type: "bre-ame-categorization", instruction: "Categorize each word/expression as British (BrE) or American (AmE)", items: [
          { item: "queue", variety: "BrE", american: "line" },
          { item: "holiday", variety: "BrE", american: "vacation" },
          { item: "gasoline", variety: "AmE", british: "petrol" },
          { item: "lift (elevator)", variety: "BrE", american: "elevator" },
          { item: "touch wood", variety: "BrE", american: "knock on wood" }
        ]},
        { type: "bre-ame-transformation", instruction: "Transform the sentence to the target variety", items: [
          { original: "I'll do it straight away (UK)", target: "US", transformed: "I'll do it right away" },
          { original: "Have you got a pen? (UK)", target: "US", transformed: "Do you have a pen?" },
          { original: "The committee are meeting (UK)", target: "US", transformed: "The committee is meeting" },
          { original: "I'll see you on the weekend (US)", target: "UK", transformed: "I'll see you at the weekend" }
        ]},
        { type: "spelling-variety-identification", instruction: "Identify which spelling belongs to which variety", items: [
          { british: "colour", american: "color" },
          { british: "centre", american: "center" },
          { british: "defence", american: "defense" },
          { british: "travelled", american: "traveled" }
        ]},
        { type: "collective-noun-agreement", instruction: "Choose the correct verb form for each variety", items: [
          { subject: "The government", uk: "are", us: "is", explanation: "UK plural, US singular for collective nouns" },
          { subject: "The team", uk: "are", us: "is", explanation: "Same pattern" },
          { subject: "The board", uk: "have", us: "has", explanation: "UK treats as plural, US as singular" }
        ]}
      ],
      modelDialogue: {
        title: "British and American Colleagues Working Together",
        context: "A joint UK-US team learning each other's English",
        dialogue: [
          { speaker: "American (confused)", text: "Wait, you said to meet on the first floor, but this is the lobby?", note: "In UK, first floor = one up; in US, first floor = ground level" },
          { speaker: "British", text: "Oh sorry! In the UK, this is the ground floor. The first floor is upstairs. I always forget that.", note: "Explaining the difference" },
          { speaker: "American", text: "Got it. Also, when you said 'take the lift,' I eventually figured out you meant elevator.", note: "Vocabulary difference" },
          { speaker: "British", text: "Ha! And I was confused when you asked if I needed a 'ride' home. We'd say 'lift' for that too, ironically.", note: "Same word, different meaning" },
          { speaker: "American", text: "Oh, we say 'lift' for a ride too sometimes! 'Need a lift?'", note: "Some overlap exists" },
          { speaker: "British", text: "Right. I'll try to use 'elevator' and 'vacation' in our reports. Shall I organise the documents?", note: "Attempting to adapt" },
          { speaker: "American", text: "Perfect. And I'll remember it's 'organise' with an S for you guys. Oh, and 'colour' has a U!", note: "Spelling awareness" },
          { speaker: "British", text: "Cheers! This could be quite a good team, don't you think? Touch wood.", note: "British expressions" },
          { speaker: "American", text: "Knock on wood, you mean? Definitely! We've got this.", note: "American equivalent" }
        ],
        keyTakeaways: [
          "Be aware of false friends (pants, pavement, first floor)",
          "Practical vocabulary differs significantly (lift/elevator, queue/line)",
          "Preposition usage varies (at the weekend/on the weekend)",
          "Both sides can adapt - flexibility is key"
        ]
      },
      pronunciationFocus: {
        title: "UK vs US Pronunciation Differences",
        titleEs: "Diferencias de pronunciación UK vs US",
        sounds: [
          { symbol: "UK /kɑːnt/ vs US /kænt/", word: "can't", tip: "UK has long 'ah'; US has short 'a' like 'cat'" },
          { symbol: "UK /ˈʃedjuːl/ vs US /ˈskedʒuːl/", word: "schedule", tip: "UK starts with 'sh'; US starts with 'sk'" },
          { symbol: "UK /ˌæljʊˈmɪniəm/ vs US /əˈluːmɪnəm/", word: "aluminium/aluminum", tip: "UK has extra syllable 'i'" },
          { symbol: "UK /ˈvɪtəmɪn/ vs US /ˈvaɪtəmɪn/", word: "vitamin", tip: "UK short 'i'; US long 'i' like 'eye'" }
        ]
      },
      culturalNote: {
        title: "Choosing British vs American English",
        titleEs: "Elegir inglés británico vs americano",
        content: "In international business, American English dominates due to US economic influence, but British English is prestigious in some contexts. Choose your variety based on your audience - if working with UK clients, use British English; with US clients, American. Most importantly, be consistent. Mixing varieties looks careless.",
        contentEs: "En negocios internacionales, el inglés americano domina por la influencia económica de EE.UU., pero el británico es prestigioso en algunos contextos. Elige tu variedad según tu audiencia: con clientes UK usa británico; con clientes US, americano. Lo más importante: sé consistente. Mezclar variedades parece descuidado.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "What does 'pavement' mean in American English?", options: ["Sidewalk", "Road surface", "Parking lot", "Driveway"], correctIndex: 1, explanation: "In US, pavement = road; in UK, pavement = sidewalk" },
        { question: "'The team are playing well' is:", options: ["American English", "British English", "Incorrect grammar", "Both varieties"], correctIndex: 1, explanation: "British treats collective nouns as plural" },
        { question: "British 'first floor' equals American:", options: ["Ground floor", "Second floor", "Basement", "Attic"], correctIndex: 1, explanation: "UK ground floor = US first floor; UK first floor = US second floor" },
        { question: "Which spelling is American?", options: ["Colour", "Organisation", "Center", "Travelled"], correctIndex: 2, explanation: "US uses -er (center); UK uses -re (centre)" }
      ],
      guidedProduction: {
        scenario: "Rewrite this email twice - once in British English, once in American English.",
        promptQuestions: [
          "Original: 'Please organize the meeting for the first floor conference room. I'll be on vacation next week, so let's schedule for the weekend after.'\n\nConvert spelling, vocabulary, and prepositions appropriately for each variety."
        ],
        sampleResponse: "BRITISH VERSION: 'Please organise the meeting for the first floor conference room. I'll be on holiday next week, so let's schedule for the weekend after.' (Note: In UK, this would actually be one floor up!)\n\nAMERICAN VERSION: 'Please organize the meeting for the second floor conference room. I'll be on vacation next week, so let's schedule for the weekend after.' (Note: Adjusted floor number to match UK intent)"
      },
      connectionToPrevious: "Slang often differs between UK and US; now we explore systematic differences",
      connectionToNext: "Phrasal verbs can vary between British and American usage"
    },
    {
      id: 3,
      title: "Phrasal Verbs: Three-Part and Idiomatic",
      titleEs: "Phrasal Verbs: De Tres Partes e Idiomáticos",
      introduction: {
        title: "🔄 Phrasal Verbs Avanzados",
        explanation: "Los phrasal verbs de tres partes y los altamente idiomáticos son un desafío final. Dominarlos te pone al nivel nativo.",
        keyPoints: [
          "Tres partes: 'come up with', 'put up with', 'look forward to', 'get away with'",
          "Altamente idiomáticos: 'kick the bucket' (morir), 'hit it off' (caerse bien)",
          "Separables vs inseparables: 'I figured it out' vs 'I ran into her'",
          "Múltiples significados: 'take off' (despegar, quitar, imitar, tener éxito)",
          "Formales vs coloquiales: 'tolerate' vs 'put up with'"
        ],
        examples: [
          { english: "I can't put up with this noise anymore. (= tolerate)", spanish: "No puedo soportar este ruido más. (= tolerar)", explanation: "Three-part: put up with" },
          { english: "We need to come up with a solution fast. (= invent/create)", spanish: "Necesitamos idear una solución rápido. (= inventar/crear)", explanation: "Three-part: come up with" },
          { english: "She really hit it off with her new colleagues. (= got along well immediately)", spanish: "Ella realmente se llevó muy bien con sus nuevos colegas desde el principio.", explanation: "Idiomático: hit it off" }
        ],
        tips: [
          "💡 'Come up with' = inventar, proponer una idea",
          "💡 'Put up with' siempre tiene connotación negativa (tolerar algo malo)",
          "💡 'Look forward to' siempre va seguido de -ing o sustantivo"
        ],
        whenToUse: [
          'En brainstorming: "We need to come up with a solution fast"',
          'Expresando tolerancia: "I can\'t put up with this noise anymore"',
          'En emails formales: "I look forward to hearing from you"',
          'En networking: "We really hit it off" para describir conexión inmediata'
        ],
        whenNotToUse: [
          'En escritura muy formal → "tolerate" en lugar de "put up with"',
          'No confundas "come up with" con "come up" (surgir) – son diferentes',
          'Evita phrasal verbs idiomáticos ("kick the bucket") en contextos profesionales'
        ]
      },
      objectives: ["Dominar phrasal verbs de tres partes", "Usar phrasal verbs idiomáticos", "Entender múltiples significados"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c2-pragmatic-implicature"],
      vocabulary: {
        nouns: [],
        verbs: [
          { id: "l13t3_v1", word: "come up with", translation: "idear/proponer", type: "verb", definition: "to think of/invent", definitionEs: "pensar en/inventar", example: "We need to come up with ideas.", exampleEs: "Necesitamos idear ideas.", related: [], difficulty: 2 },
          { id: "l13t3_v2", word: "put up with", translation: "soportar/tolerar", type: "verb", definition: "to tolerate", definitionEs: "tolerar", example: "I can't put up with this.", exampleEs: "No puedo soportar esto.", related: [], difficulty: 2 },
          { id: "l13t3_v3", word: "look forward to", translation: "esperar con ansias", type: "verb", definition: "to anticipate with pleasure", definitionEs: "anticipar con placer", example: "I look forward to meeting you.", exampleEs: "Espero con ansias conocerte.", related: [], difficulty: 1 },
          { id: "l13t3_v4", word: "get away with", translation: "salirse con la suya", type: "verb", definition: "to avoid consequences", definitionEs: "evitar consecuencias", example: "He got away with it.", exampleEs: "Se salió con la suya.", related: [], difficulty: 2 },
          { id: "l13t3_v5", word: "hit it off", translation: "caerse bien/congeniar", type: "verb", definition: "to quickly become friends", definitionEs: "rápidamente hacerse amigos", example: "We hit it off immediately.", exampleEs: "Congeniamos inmediatamente.", related: [], difficulty: 2 },
          { id: "l13t3_v6", word: "run out of", translation: "quedarse sin", type: "verb", definition: "to use all of something", definitionEs: "usar todo de algo", example: "We ran out of time.", exampleEs: "Nos quedamos sin tiempo.", related: [], difficulty: 1 },
          { id: "l13t3_v7", word: "catch up on", translation: "ponerse al día con", type: "verb", definition: "to get current", definitionEs: "actualizarse", example: "I need to catch up on emails.", exampleEs: "Necesito ponerme al día con emails.", related: [], difficulty: 1 },
          { id: "l13t3_v8", word: "keep up with", translation: "mantenerse al día con", type: "verb", definition: "to stay informed/matched", definitionEs: "mantenerse informado/a la par", example: "I can't keep up with technology.", exampleEs: "No puedo mantenerme al día con la tecnología.", related: [], difficulty: 1 },
        ],
        adjectives: [],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t3_cm1", wrong: "I'm looking forward to meet you", correct: "I'm looking forward to meeting you", explanation: "'Look forward to' is followed by -ing or a noun, not bare infinitive", explanationEs: "'Look forward to' is followed by -ing or a noun, not bare infinitive", category: "grammar" },
        { id: "l13t3_cm2", wrong: "He came up a great idea", correct: "He came up with a great idea", explanation: "Three-part phrasal verb - all parts required", explanationEs: "Three-part phrasal verb - all parts required", category: "grammar" },
        { id: "l13t3_cm3", wrong: "I can't put up this noise anymore", correct: "I can't put up with this noise anymore", explanation: "'Put up with' requires all three parts", explanationEs: "'Put up with' requires all three parts", category: "grammar" },
        { id: "l13t3_cm4", wrong: "She ran out the time", correct: "She ran out of time", explanation: "'Run out of' is a three-part phrasal verb", explanationEs: "'Run out of' is a three-part phrasal verb", category: "grammar" },
        { id: "l13t3_cm5", wrong: "We need to come up a solution", correct: "We need to come up with a solution", explanation: "Come up with - all three parts required", explanationEs: "Come up with - all three parts required", category: "grammar" },
        { id: "l13t3_cm6", wrong: "I look forward to hear from you", correct: "I look forward to hearing from you", explanation: "To is preposition - requires -ing form", explanationEs: "To is preposition - requires -ing form", category: "grammar" },
        { id: "l13t3_cm7", wrong: "He got away it", correct: "He got away with it", explanation: "Get away with - three-part phrasal verb", explanationEs: "Get away with - three-part phrasal verb", category: "grammar" },
        { id: "l13t3_cm8", wrong: "I need to catch up my emails", correct: "I need to catch up on my emails", explanation: "Catch up on - preposition required", explanationEs: "Catch up on - preposition required", category: "grammar" }
      ],
      exercises: [
        { type: "three-part-completion", instruction: "Complete the three-part phrasal verb", items: [
          { sentence: "We need to come _____ _____ a solution", answer: "up with", meaning: "invent/think of" },
          { sentence: "I can't put _____ _____ this behavior anymore", answer: "up with", meaning: "tolerate" },
          { sentence: "She's looking _____ _____ the presentation", answer: "forward to", meaning: "anticipating with pleasure" },
          { sentence: "He got _____ _____ cheating on the test", answer: "away with", meaning: "avoided consequences" },
          { sentence: "We ran _____ _____ time before finishing", answer: "out of", meaning: "exhausted supply" },
          { sentence: "I need to catch _____ _____ my emails", answer: "up on", meaning: "get current with" }
        ]},
        { type: "multiple-meanings", instruction: "Match 'take off' to its correct meaning in each context", items: [
          { sentence: "The plane took off at noon", meaning: "departed/became airborne" },
          { sentence: "Her career really took off after that project", meaning: "became very successful" },
          { sentence: "He took off his jacket", meaning: "removed" },
          { sentence: "She took off early from work", meaning: "left" },
          { sentence: "The comedian took off the president perfectly", meaning: "imitated/impersonated" }
        ]},
        { type: "separable-vs-inseparable", instruction: "Determine if the phrasal verb is separable (S) or inseparable (I)", items: [
          { phrasalVerb: "figure out", type: "S", example: "I figured it out / I figured out the answer", explanation: "Object can go in middle or after" },
          { phrasalVerb: "run into", type: "I", example: "I ran into her (NOT: I ran her into)", explanation: "Object must come after" },
          { phrasalVerb: "put up with", type: "I", example: "I can't put up with this (NOT: put this up with)", explanation: "Three-part verbs are typically inseparable" },
          { phrasalVerb: "look forward to", type: "I", example: "I look forward to it (NOT: look it forward to)", explanation: "Three-part verbs are typically inseparable" },
          { phrasalVerb: "pick up", type: "S", example: "Pick it up / Pick up the phone", explanation: "Pronouns MUST go in middle" }
        ]},
        { type: "formal-equivalent", instruction: "Match the phrasal verb to its formal single-word equivalent", pairs: [
          { phrasal: "put up with", formal: "tolerate" },
          { phrasal: "come up with", formal: "devise/create" },
          { phrasal: "look forward to", formal: "anticipate" },
          { phrasal: "run out of", formal: "exhaust/deplete" },
          { phrasal: "get away with", formal: "escape consequences" },
          { phrasal: "keep up with", formal: "maintain pace with" }
        ]},
        { type: "three-part-fill-blank", instruction: "Complete the sentence with the correct three-part phrasal verb", items: [
          { sentence: "We need to come _____ _____ a better strategy", answer: "up with" },
          { sentence: "I can't put _____ _____ his behavior anymore", answer: "up with" },
          { sentence: "She's looking _____ _____ the conference", answer: "forward to" },
          { sentence: "They ran _____ _____ budget before the project ended", answer: "out of" }
        ]},
        { type: "three-part-matching", instruction: "Match the phrasal verb to its meaning", items: [
          { phrasal: "come up with", meaning: "Invent or think of" },
          { phrasal: "put up with", meaning: "Tolerate (something unpleasant)" },
          { phrasal: "get away with", meaning: "Avoid punishment for" },
          { phrasal: "look forward to", meaning: "Anticipate with pleasure" },
          { phrasal: "catch up on", meaning: "Get current with" }
        ]},
        { type: "phrasal-verb-grammar", instruction: "Choose the grammatically correct form", items: [
          { sentence: "I'm looking forward to ___ you", options: ["meet", "meeting", "met"], correct: 1 },
          { sentence: "We came ___ ___ a solution", options: ["up with", "up", "with"], correct: 0 },
          { sentence: "She ran ___ ___ time", options: ["out of", "out", "of"], correct: 0 },
          { sentence: "He got ___ ___ cheating", options: ["away with", "away", "with"], correct: 0 }
        ]},
        { type: "phrasal-verb-context", instruction: "Select the correct phrasal verb for each context", items: [
          { context: "We need to think of new ideas", phrasal: "come up with" },
          { context: "I can't tolerate this noise", phrasal: "put up with" },
          { context: "I'm excited about the meeting", phrasal: "look forward to" },
          { context: "He avoided punishment for the mistake", phrasal: "get away with" }
        ]}
      ],
      modelDialogue: {
        title: "Project Meeting Using Advanced Phrasal Verbs",
        context: "Team discussing project challenges and solutions",
        dialogue: [
          { speaker: "Manager", text: "We're running out of time on this project. Has anyone come up with a solution for the bottleneck?", note: "run out of + come up with" },
          { speaker: "Developer", text: "I've been looking into it. I think I've figured out the issue.", note: "look into + figure out" },
          { speaker: "Manager", text: "Great. I know it's been tough to keep up with all the changes.", note: "keep up with" },
          { speaker: "Designer", text: "Honestly, I can barely put up with another scope change. Can we push back on this?", note: "put up with + push back" },
          { speaker: "Manager", text: "I hear you. Let me follow up with leadership and get back to you.", note: "follow up + get back to" },
          { speaker: "Developer", text: "Also, I ran into Sarah from QA - she says we should catch up on the test results before Friday.", note: "run into + catch up on" },
          { speaker: "Manager", text: "Good call. Let's wrap up here and touch base tomorrow. I'm looking forward to seeing progress.", note: "wrap up + touch base + look forward to" }
        ],
        keyTakeaways: [
          "Three-part phrasal verbs are common in professional English",
          "They make speech more natural than formal equivalents",
          "'Look forward to' always takes -ing or noun",
          "Context determines meaning for multi-meaning phrasal verbs"
        ]
      },
      pronunciationFocus: {
        title: "Phrasal Verb Stress Patterns",
        titleEs: "Patrones de acentuación en phrasal verbs",
        sounds: [
          { symbol: "/pʊt ˈʌp wɪð/", word: "put up with", tip: "Stress on 'UP'" },
          { symbol: "/kʌm ˈʌp wɪð/", word: "come up with", tip: "Stress on 'UP'" },
          { symbol: "/ˈlʊkɪŋ ˈfɔːwəd tuː/", word: "looking forward to", tip: "Stress on 'FOR-ward'" },
          { symbol: "/ˈfɪɡə(r) aʊt/", word: "figure out", tip: "FIG-yer out" }
        ]
      },
      culturalNote: {
        title: "Phrasal Verbs in Formal vs Informal Contexts",
        titleEs: "Phrasal verbs en contextos formales vs informales",
        content: "Phrasal verbs are much more common in spoken English and informal writing than formal writing. In academic or legal contexts, prefer single-word equivalents (tolerate instead of put up with). However, in everyday business communication, phrasal verbs sound more natural and approachable. Using only formal vocabulary can make you sound stiff.",
        contentEs: "Los phrasal verbs son mucho más comunes en inglés hablado y escritura informal que en formal. En contextos académicos o legales, prefiere equivalentes de una palabra (tolerate en vez de put up with). Sin embargo, en comunicación empresarial cotidiana, los phrasal verbs suenan más naturales y cercanos. Usar solo vocabulario formal puede hacerte sonar rígido.",
        region: "Global"
      },
      consolidationQuiz: [
        { question: "What follows 'look forward to'?", options: ["-ing form or noun", "bare infinitive", "to + infinitive", "past participle"], correctIndex: 0, explanation: "'To' is a preposition here, so -ing follows" },
        { question: "'Come up with' means:", options: ["Arrive", "Tolerate", "Invent/devise", "Meet accidentally"], correctIndex: 2, explanation: "Come up with = think of, devise" },
        { question: "Which is correct?", options: ["Put this up with", "Put up with this", "Put with up this", "Put up this with"], correctIndex: 1, explanation: "Three-part phrasal verbs are inseparable" },
        { question: "'Run into someone' means:", options: ["Collide physically", "Meet by chance", "Chase after", "Run away from"], correctIndex: 1, explanation: "Run into = meet unexpectedly" }
      ],
      guidedProduction: {
        scenario: "Describe your week using at least 6 different three-part or idiomatic phrasal verbs.",
        promptQuestions: [
          "What did you have to tolerate this week? (put up with)",
          "What idea did you think of? (come up with)",
          "What are you anticipating? (look forward to)",
          "What did you run low on? (run out of)",
          "What did you need to get current on? (catch up on)",
          "Who did you meet unexpectedly? (run into)"
        ],
        sampleResponse: "This week was intense. I had to put up with endless meetings, but I finally came up with a solution to our database problem. I'm looking forward to the weekend because I nearly ran out of energy by Wednesday. I need to catch up on sleep! I ran into my old colleague at lunch, and we're planning to keep up with each other more regularly."
      },
      connectionToPrevious: "British and American English both use phrasal verbs, but preferences vary",
      connectionToNext: "Stress and intonation affect how phrasal verbs are understood"
    },
    {
      id: 4,
      title: "Sentence Stress and Intonation Patterns",
      titleEs: "Acentuación y Patrones de Entonación",
      introduction: {
        title: "🎵 Acentuación y Entonación",
        explanation: "El significado en inglés cambia dramáticamente según dónde pongas el acento y qué entonación uses. Es clave para sonar nativo.",
        keyPoints: [
          "Acento contrastivo: 'I didn't say HE stole it' vs 'I didn't SAY he stole it'",
          "Entonación de pregunta: ascendente (sí/no) vs descendente (Wh-)",
          "Tag questions: descendente (confirmación) vs ascendente (pregunta real)",
          "Énfasis para emoción: 'That's AMAZING!' vs 'That's amazing.'",
          "Sarcasmo: entonación plana o exagerada cambia el significado"
        ],
        examples: [
          { english: "I didn't say he STOLE the money. (maybe he borrowed it)", spanish: "No dije que él ROBÓ el dinero. (tal vez lo tomó prestado)", explanation: "Acento en 'stole' - el verbo es lo que cuestiono" },
          { english: "Nice job. (sincere - falling tone) vs Nice job. (sarcastic - flat/rising)", spanish: "Buen trabajo. (sincero - tono descendente) vs Buen trabajo. (sarcástico - tono plano/ascendente)", explanation: "Mismo texto, significado opuesto" },
          { english: "You're coming, aren't you? ↓ (I expect yes) vs aren't you? ↑ (genuine question)", spanish: "Vienes, ¿verdad? ↓ (espero que sí) vs ¿verdad? ↑ (pregunta genuina)", explanation: "Tag question descendente vs ascendente" }
        ],
        tips: [
          "💡 En inglés, el acento puede cambiar completamente el significado",
          "💡 Los nativos detectan sarcasmo por la entonación",
          "💡 Escucha podcasts y repite para practicar entonación"
        ],
        whenToUse: [
          'Para corregir malentendidos: "I said TUESDAY, not Thursday"',
          'Para expresar sarcasmo sutil: "Oh, THAT\'s just great" (tono descendente = malo)',
          'En tag questions para confirmar vs preguntar genuinamente: "Nice day, isn\'t it? ↓"',
          'Para enfatizar con do/does/did: "I DO understand your concern"'
        ],
        whenNotToUse: [
          'Evita acento contrastivo excesivo → suena agresivo o condescendiente',
          'No uses sarcasmo por entonación en comunicación escrita → se pierde completamente',
          'Evita uptalk (tono ascendente en afirmaciones) en contextos profesionales → suena inseguro'
        ]
      },
      objectives: ["Entender cómo el acento cambia el significado", "Usar entonación apropiada", "Detectar sarcasmo y énfasis"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-emphasis-patterns"],
      vocabulary: {
        nouns: [
          { id: "l13t4_n1", word: "stress (sentence)", translation: "acento/énfasis", type: "noun", definition: "emphasis on a word", definitionEs: "énfasis en una palabra", example: "The stress changes the meaning.", exampleEs: "El acento cambia el significado.", related: [], difficulty: 2 },
          { id: "l13t4_n2", word: "intonation", translation: "entonación", type: "noun", definition: "rise and fall of voice", definitionEs: "subida y bajada de voz", example: "Watch your intonation.", exampleEs: "Cuida tu entonación.", related: [], difficulty: 2 },
        ],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l13t4_e1", word: "Tag questions with falling tone ↓", translation: "Tag questions con tono descendente", type: "expression", definition: "expecting agreement", definitionEs: "esperando acuerdo", example: "It's nice, isn't it? ↓", exampleEs: "Es lindo, ¿verdad?", related: [], difficulty: 2 },
          { id: "l13t4_e2", word: "Tag questions with rising tone ↑", translation: "Tag questions con tono ascendente", type: "expression", definition: "genuine question", definitionEs: "pregunta genuina", example: "You're coming, aren't you? ↑", exampleEs: "Vienes, ¿verdad?", related: [], difficulty: 2 },
          { id: "l13t4_e3", word: "Contrastive stress", translation: "Acento contrastivo", type: "expression", definition: "stress to show contrast", definitionEs: "acento para mostrar contraste", example: "I said TUESDAY, not Thursday.", exampleEs: "Dije MARTES, no jueves.", related: [], difficulty: 2 },
          { id: "l13t4_e4", word: "Sarcasm through intonation", translation: "Sarcasmo mediante entonación", type: "expression", definition: "using opposite intonation to convey opposite meaning", definitionEs: "usar entonación opuesta para transmitir significado opuesto", example: "Oh, THAT's just great. (falling tone = actually bad)", exampleEs: "Oh, eso es simplemente GENIAL. (tono descendente = realmente malo)", related: [], difficulty: 2 },
          { id: "l13t4_e5", word: "Emphatic do/does/did", translation: "Do/does/did enfático", type: "expression", definition: "using do/does/did for emphasis in positive sentences", definitionEs: "usar do/does/did para énfasis en oraciones positivas", example: "I DO understand your concern.", exampleEs: "SÍ entiendo tu preocupación.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t4_cm1", wrong: "Expecting 'aren't you?' to always mean doubt", correct: "Rising tone = genuine question; falling tone = seeking confirmation", explanation: "The meaning of tag questions depends entirely on intonation", explanationEs: "Tag question meaning depends entirely on intonation", category: "pronunciation" },
        { id: "l13t4_cm2", wrong: "Flat intonation when saying 'That's great'", correct: "Rising-falling for genuine; flat or falling for sarcasm", explanation: "Without proper intonation, your sincerity is unclear to listeners", explanationEs: "Without proper intonation, sincerity is unclear", category: "pronunciation" },
        { id: "l13t4_cm3", wrong: "Stressing every word equally", correct: "English uses stress to highlight new or contrasting information", explanation: "Flat stress sounds robotic and makes your message unclear", explanationEs: "Flat stress sounds robotic and unclear", category: "pronunciation" },
        { id: "l13t4_cm4", wrong: "Not recognizing contrastive stress", correct: "Unusual stress placement signals correction or contrast", explanation: "Stress shows contrast, e.g. 'I said BLUE, not RED'", explanationEs: "'I said BLUE, not RED' - stress shows contrast", category: "pronunciation" },
        { id: "l13t4_cm5", wrong: "Using rising intonation on every statement (uptalk)", correct: "Reserve rising tone for questions and uncertainty", explanation: "Overuse of uptalk can sound insecure or unprofessional", explanationEs: "Overuse of uptalk can sound insecure or unprofessional", category: "pronunciation" },
        { id: "l13t4_cm6", wrong: "Saying 'I DID finish it' without stress on DID", correct: "Emphatic do/did requires strong stress on the auxiliary", explanation: "Without stress on the auxiliary, the emphasis is lost", explanationEs: "Without stress, the emphasis is lost", category: "pronunciation" },
        { id: "l13t4_cm7", wrong: "Missing sarcasm cues in written communication", correct: "In writing, use context or explicit markers - tone doesn't transfer", explanation: "Sarcasm relies on intonation; add 'she said sarcastically' if needed", explanationEs: "Sarcasm relies on intonation; add 'she said sarcastically' if needed", category: "usage" },
        { id: "l13t4_cm8", wrong: "Using falling tone for genuine yes/no questions", correct: "Rising tone at end signals genuine question", explanation: "Falling tone expects agreement; rising tone actually asks", explanationEs: "Falling = expecting agreement; rising = actually asking", category: "pronunciation" }
      ],
      exercises: [
        { type: "contrastive-stress", instruction: "Identify what is being contrasted based on the stressed word", items: [
          { sentence: "I said COFFEE, not tea", stressed: "COFFEE", contrast: "Contrasting coffee with tea" },
          { sentence: "I said coffee, not TEA", stressed: "TEA", contrast: "Correcting what was NOT said" },
          { sentence: "SHE took the car, not him", stressed: "SHE", contrast: "Emphasizing who did the action" },
          { sentence: "She took the CAR, not the bike", stressed: "CAR", contrast: "Emphasizing what was taken" },
          { sentence: "I HAVE finished the report", stressed: "HAVE", contrast: "Emphatic - correcting someone who thinks it's not done" }
        ]},
        { type: "tag-question-intonation", instruction: "Determine the meaning based on intonation pattern", items: [
          { sentence: "You're coming to the party, aren't you? ↗", intonation: "rising", meaning: "Genuine question - speaker doesn't know the answer" },
          { sentence: "You're coming to the party, aren't you? ↘", intonation: "falling", meaning: "Seeking confirmation - speaker expects yes" },
          { sentence: "Nice weather, isn't it? ↘", intonation: "falling", meaning: "Making small talk - expects agreement" },
          { sentence: "This is your car, isn't it? ↗", intonation: "rising", meaning: "Genuinely asking - not sure" },
          { sentence: "We've met before, haven't we? ↗", intonation: "rising", meaning: "Trying to remember - uncertain" }
        ]},
        { type: "sarcasm-detection", instruction: "Determine if the tone is sincere or sarcastic based on context and intonation", items: [
          { sentence: "Oh, THAT's just wonderful ↘", context: "Said after receiving bad news", meaning: "Sarcastic - means it's actually terrible", cue: "Flat/falling tone + 'oh' + context" },
          { sentence: "That's wonderful! ↗↘", context: "Said after receiving good news", meaning: "Sincere - genuinely happy", cue: "Rising-falling tone shows enthusiasm" },
          { sentence: "Thanks SO much for your help ↘", context: "Said to someone who did nothing", meaning: "Sarcastic - they weren't helpful", cue: "Stressed 'SO' + falling tone + context" },
          { sentence: "Thank you so much! ↗↘", context: "Said after receiving genuine help", meaning: "Sincere gratitude", cue: "Natural stress pattern + rising-falling tone" }
        ]},
        { type: "emphatic-do", instruction: "Use emphatic do/does/did to add emphasis", items: [
          { neutral: "I understand your concern", emphatic: "I DO understand your concern", meaning: "Emphasizing sincerity" },
          { neutral: "She finished the project", emphatic: "She DID finish the project", meaning: "Countering doubt" },
          { neutral: "Please sit down", emphatic: "DO please sit down", meaning: "Urging/insisting politely" },
          { neutral: "I like your idea", emphatic: "I DO like your idea (but...)", meaning: "Conceding before disagreeing" }
        ]},
        { type: "stress-pattern-identification", instruction: "Identify which word would be stressed for the given meaning", items: [
          { sentence: "I didn't say HE stole it", stressed: "HE", meaning: "Someone else might have" },
          { sentence: "I didn't SAY he stole it", stressed: "SAY", meaning: "I implied it differently" },
          { sentence: "I didn't say he STOLE it", stressed: "STOLE", meaning: "Maybe he borrowed it" },
          { sentence: "SHE took the report", stressed: "SHE", meaning: "Not someone else" }
        ]},
        { type: "intonation-meaning", instruction: "What does the intonation pattern convey?", items: [
          { pattern: "You're coming, aren't you? ↗", meaning: "Genuine question - speaker unsure" },
          { pattern: "You're coming, aren't you? ↘", meaning: "Expecting confirmation" },
          { pattern: "That's wonderful. (flat)", meaning: "Likely sarcastic if context is negative" },
          { pattern: "That's wonderful! ↗↘", meaning: "Genuine enthusiasm" }
        ]},
        { type: "contrastive-stress-application", instruction: "Apply contrastive stress to correct the misunderstanding", items: [
          { misunderstanding: "You said RED?", correction: "I said BLUE, not red" },
          { misunderstanding: "She took it?", correction: "HE took it, not her" },
          { misunderstanding: "Tomorrow?", correction: "TUESDAY, not tomorrow" },
          { misunderstanding: "You don't want it?", correction: "I DO want it" }
        ]},
        { type: "sarcasm-vs-sincere", instruction: "Determine if each statement would be sincere or sarcastic given the context", items: [
          { statement: "Nice job", context: "After colleague made a major error", likely: "sarcastic" },
          { statement: "Nice job", context: "After colleague delivered excellent presentation", likely: "sincere" },
          { statement: "Oh great", context: "Another last-minute meeting announced", likely: "sarcastic" },
          { statement: "Oh great", context: "You got the promotion", likely: "sincere" }
        ]}
      ],
      modelDialogue: {
        title: "Intonation Changing Meaning Completely",
        context: "Same words, different meanings through stress and tone",
        dialogue: [
          { speaker: "Manager", text: "You finished the report, didn't you? ↘", note: "Falling tone - expects confirmation, slight pressure" },
          { speaker: "Employee", text: "I DID finish the report. It's on your desk.", note: "Emphatic 'DID' - countering implied doubt" },
          { speaker: "Manager", text: "Oh. I didn't see it. SHE said it wasn't done.", note: "Stress on 'SHE' - blaming the information source" },
          { speaker: "Employee", text: "Well, she was WRONG, wasn't she? ↘", note: "Falling tag - pointed, rhetorical" },
          { speaker: "Manager", text: "Right. Sorry about that. Nice communication system we have here... ↘", note: "Flat/falling tone on 'nice' - clearly sarcastic" },
          { speaker: "Employee", text: "Oh, it's just GREAT, isn't it? ↘", note: "Matching sarcasm - stress on 'GREAT', falling tag" },
          { speaker: "Manager (laughing)", text: "Okay, okay. I DO appreciate your work, honestly.", note: "Emphatic 'DO' for sincerity after sarcasm" },
          { speaker: "Employee", text: "Thanks. I appreciate that. ↗↘", note: "Rising-falling = genuinely appreciative" }
        ],
        keyTakeaways: [
          "Tag questions: rising = real question; falling = expecting agreement",
          "Emphatic do/did counters doubt or adds sincerity",
          "Sarcasm uses flat or falling tone where rising would be expected",
          "Contrastive stress highlights corrections or contrasts"
        ]
      },
      pronunciationFocus: {
        title: "Tag Questions and Emphatic Stress",
        titleEs: "Tag questions y énfasis enfático",
        sounds: [
          { symbol: "/'dɪdnt juː ↗/", word: "didn't you? (rising)", tip: "Voice goes UP at end = genuine question" },
          { symbol: "/'dɪdnt juː ↘/", word: "didn't you? (falling)", tip: "Voice goes DOWN = expecting agreement" },
          { symbol: "/aɪ 'duː ˌʌndə'stænd/", word: "I DO understand", tip: "Strong stress on DO, fully pronounced" },
          { symbol: "/ðæts 'ɡreɪt ↘/", word: "That's GREAT (sarcastic)", tip: "Flat or descending, not enthusiastic" }
        ]
      },
      culturalNote: {
        title: "Sarcasm in British vs American English",
        titleEs: "Sarcasmo en inglés británico vs americano",
        content: "Sarcasm is extremely common in British English and often used as humor among friends. Americans also use sarcasm but may be more direct about it. For non-native speakers, sarcasm can be very confusing because the words say one thing but the tone says the opposite. When in doubt, watch for context clues: if someone says 'great' about something clearly bad, it's likely sarcasm.",
        contentEs: "El sarcasmo es extremadamente común en inglés británico y se usa a menudo como humor entre amigos. Los americanos también usan sarcasmo pero pueden ser más directos. Para no nativos, el sarcasmo puede ser muy confuso porque las palabras dicen una cosa pero el tono dice lo opuesto. En caso de duda, busca pistas de contexto: si alguien dice 'great' sobre algo claramente malo, probablemente es sarcasmo.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "'You're coming, aren't you?' with RISING tone means:", options: ["I'm sure you're coming", "I'm genuinely asking", "You must come", "I don't care"], correctIndex: 1, explanation: "Rising = genuine question, speaker unsure" },
        { question: "'I DID finish it' uses emphatic 'did' to:", options: ["Ask a question", "Show past tense", "Counter doubt/add emphasis", "Show habitual action"], correctIndex: 2, explanation: "Emphatic do/did counters doubt" },
        { question: "'Oh, that's GREAT' with flat/falling tone likely means:", options: ["Sincere happiness", "Sarcasm - it's actually bad", "Neutral statement", "Asking for confirmation"], correctIndex: 1, explanation: "Flat tone + positive word about negative situation = sarcasm" },
        { question: "'I said TUESDAY, not Thursday' stresses:", options: ["When speaker spoke", "The correct day (Tuesday)", "That Thursday is wrong", "The word 'said'"], correctIndex: 1, explanation: "Contrastive stress highlights the correct information" }
      ],
      guidedProduction: {
        scenario: "Practice conveying different meanings through intonation. Record yourself saying these pairs differently.",
        promptQuestions: [
          "Say 'You finished the report, didn't you?' as a genuine question (rising) and as pressure/confirmation-seeking (falling)",
          "Say 'That's wonderful' sincerely (rising-falling) and sarcastically (flat/falling)",
          "Say 'I understand' normally, then 'I DO understand' emphatically",
          "Say 'She took the car' with neutral stress, then 'SHE took the car' (emphasizing who)"
        ],
        sampleResponse: "GENUINE QUESTION: 'You finished the report, didn't you? ↗' (rising at end - I really don't know)\n\nSEEKING CONFIRMATION: 'You finished the report, didn't you? ↘' (falling at end - I expect you did)\n\nSINCERE: 'That's wonderful! ↗↘' (enthusiastic, voice rises then falls)\n\nSARCASTIC: 'Oh, that's wonderful. ↘' (flat, no enthusiasm, maybe slight stress on 'wonderful')\n\nEMPHATIC: 'I DO understand' (strong stress on DO, pronounced fully, not reduced)"
      },
      connectionToPrevious: "Phrasal verbs also rely on stress patterns for correct meaning",
      connectionToNext: "Small talk success depends heavily on appropriate intonation"
    },
    {
      id: 5,
      title: "Advanced Small Talk and Social English",
      titleEs: "Small Talk Avanzado e Inglés Social",
      introduction: {
        title: "☕ Small Talk Avanzado",
        explanation: "El small talk es un arte. En nivel nativo, debes poder navegar conversaciones sociales con fluidez, humor y sensibilidad cultural.",
        keyPoints: [
          "Openers creativos: Beyond 'How are you?' - 'What's new?', 'How's life treating you?'",
          "Mantener conversación: 'Speaking of which...', 'That reminds me...', 'By the way...'",
          "Humor casual: self-deprecating jokes, gentle teasing, witty observations",
          "Terminar elegantemente: 'I should let you go', 'I won't keep you', 'Let's catch up soon'",
          "Temas seguros vs peligrosos: weather, work (safe) vs politics, salary (risky)"
        ],
        examples: [
          { english: "A: How's life treating you? B: Can't complain! Well, I could, but who'd listen?", spanish: "A: ¿Cómo te va la vida? B: ¡No me puedo quejar! Bueno, podría, pero ¿quién escucharía?", explanation: "Small talk con humor auto-despreciativo" },
          { english: "Speaking of vacations, that reminds me – have you seen the new policy on remote work?", spanish: "Hablando de vacaciones, eso me recuerda – ¿has visto la nueva política de trabajo remoto?", explanation: "Transición suave entre temas" },
          { english: "Well, I should let you get back to it. Let's grab coffee sometime!", spanish: "Bueno, debería dejarte volver a lo tuyo. ¡Tomemos un café algún día!", explanation: "Terminar elegantemente" }
        ],
        tips: [
          "💡 'Can't complain' es la respuesta más común a 'How are you?' en UK",
          "💡 'I won't keep you' es una forma elegante de terminar una conversación",
          "💡 Evita religión y política en small talk profesional"
        ],
        whenToUse: [
          'Al inicio de reuniones de trabajo: "How was your weekend?" antes de entrar en tema',
          'En networking profesional: "What brings you to the conference?"',
          'En coffee breaks: "Speaking of which..." para cambiar de tema de forma natural',
          'Para cerrar conversaciones elegantemente: "I should let you get back to it"'
        ],
        whenNotToUse: [
          'Evita small talk extenso cuando la otra persona tiene prisa → lee las señales',
          'No hagas small talk sobre temas sensibles (salario, edad, peso, política) en culturas angloparlantes',
          'No uses "How do you do?" → es muy formal/anticuado: usa "How are you?" o "What\'s new?"'
        ]
      },
      objectives: ["Dominar small talk avanzado", "Usar humor apropiado", "Navegar conversaciones sociales con fluidez"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-register-shift", "c2-vague-language"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l13t5_e1", word: "How's life treating you?", translation: "¿Cómo te va la vida?", type: "expression", definition: "how are you (casual)", definitionEs: "cómo estás (casual)", example: "Hey! How's life treating you?", exampleEs: "¡Hola! ¿Cómo te va la vida?", related: [], difficulty: 1 },
          { id: "l13t5_e2", word: "Can't complain", translation: "No me puedo quejar", type: "expression", definition: "things are okay", definitionEs: "las cosas están bien", example: "How are you? Can't complain!", exampleEs: "¿Cómo estás? ¡No me puedo quejar!", related: [], difficulty: 1 },
          { id: "l13t5_e3", word: "Speaking of which...", translation: "Hablando de eso...", type: "expression", definition: "transitioning topics", definitionEs: "transicionando temas", example: "Speaking of which, did you hear...?", exampleEs: "Hablando de eso, ¿escuchaste...?", related: [], difficulty: 1 },
          { id: "l13t5_e4", word: "That reminds me...", translation: "Eso me recuerda...", type: "expression", definition: "introducing related topic", definitionEs: "introduciendo tema relacionado", example: "That reminds me – I need to call John.", exampleEs: "Eso me recuerda – necesito llamar a John.", related: [], difficulty: 1 },
          { id: "l13t5_e5", word: "I should let you go / I won't keep you", translation: "Te dejo / No te quito más tiempo", type: "expression", definition: "ending conversation politely", definitionEs: "terminando conversación cortésmente", example: "Well, I should let you go.", exampleEs: "Bueno, te dejo.", related: [], difficulty: 1 },
          { id: "l13t5_e6", word: "Let's catch up soon", translation: "Pongámonos al día pronto", type: "expression", definition: "suggesting future meeting", definitionEs: "sugiriendo reunión futura", example: "It was great seeing you! Let's catch up soon.", exampleEs: "¡Fue genial verte! Pongámonos al día pronto.", related: [], difficulty: 1 },
          { id: "l13t5_e7", word: "Same old, same old", translation: "Lo mismo de siempre", type: "expression", definition: "nothing new", definitionEs: "nada nuevo", example: "What's new? Same old, same old.", exampleEs: "¿Qué hay de nuevo? Lo mismo de siempre.", related: [], difficulty: 1 },
          { id: "l13t5_e8", word: "I'd better let you go", translation: "Mejor te dejo", type: "expression", definition: "polite way to end conversation", definitionEs: "forma cortés de terminar conversación", example: "Well, I'd better let you go. Nice chatting!", exampleEs: "Bueno, mejor te dejo. ¡Qué gusto platicar!", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t5_cm1", wrong: "Responding 'I'm fine' to every greeting", correct: "Vary responses: 'Not too bad', 'Can't complain', 'Pretty good, thanks'", explanation: "Repetitive responses sound robotic; native speakers vary their expressions", explanationEs: "Repetitive responses sound robotic; natives vary their expressions", category: "usage" },
        { id: "l13t5_cm2", wrong: "Asking personal questions too early (salary, age, weight)", correct: "Stick to safe topics: weather, weekend plans, general news", explanation: "Personal questions are considered intrusive in Anglo cultures", explanationEs: "Personal questions are considered intrusive in Anglo cultures", category: "usage" },
        { id: "l13t5_cm3", wrong: "Ending conversation abruptly without transition", correct: "Use softeners: 'Well, I'd better let you go', 'Anyway, I should run'", explanation: "Abrupt endings seem rude; use exit phrases to close politely", explanationEs: "Abrupt endings seem rude; use exit phrases", category: "usage" },
        { id: "l13t5_cm4", wrong: "Taking 'How are you?' as a real question and giving detailed answers", correct: "Brief positive response + return the question", explanation: "'How are you' is usually a greeting, not an invitation to share problems", explanationEs: "'How are you' is usually a greeting, not an invitation to share problems", category: "usage" },
        { id: "l13t5_cm5", wrong: "Using formal register in casual coffee chat", correct: "Match register: 'What's new?' not 'How do you do?'", explanation: "Over-formality creates distance in social situations", explanationEs: "Over-formality creates distance in social situations", category: "usage" },
        { id: "l13t5_cm6", wrong: "Not using backchanneling when someone shares news", correct: "Respond with 'Oh really?', 'That's great!', 'No way!'", explanation: "Silence can seem disinterested; backchanneling shows engagement", explanationEs: "Silence can seem disinterested", category: "usage" },
        { id: "l13t5_cm7", wrong: "Launching into business immediately without small talk", correct: "Brief social exchange first: 'How was your weekend?'", explanation: "Anglo cultures expect social warm-up before business", explanationEs: "Anglo cultures expect social warm-up before business", category: "usage" },
        { id: "l13t5_cm8", wrong: "Saying 'Same to you' when someone says 'Have a good meeting'", correct: "Say 'Thanks, you too!' or 'Will do!'", explanation: "'Same to you' is for greetings like 'Happy holidays', not for wishes", explanationEs: "'Same to you' is for greetings like 'Happy holidays'", category: "usage" }
      ],
      exercises: [
        { type: "greeting-response-matching", instruction: "Match the greeting with an appropriate casual response", items: [
          { greeting: "How's it going?", responses: ["Not bad, yourself?", "I have a headache", "Fine.", "Good morning, sir"], bestResponse: 0, explanation: "Casual + return question" },
          { greeting: "How's life treating you?", responses: ["Can't complain!", "Bad", "I am fine", "Yes"], bestResponse: 0, explanation: "Idiomatic positive response" },
          { greeting: "What's up?", responses: ["The ceiling", "Not much, you?", "I'm fine, thank you", "Hello"], bestResponse: 1, explanation: "Match casual with casual" },
          { greeting: "Long time no see!", responses: ["I know, right? How have you been?", "Yes", "Fine", "Good morning"], bestResponse: 0, explanation: "Acknowledge + follow-up question" }
        ]},
        { type: "topic-transitions", instruction: "Choose the best phrase to smoothly change topics", items: [
          { situation: "You want to change from weather to weekend plans", options: ["Stop talking about weather.", "So, any plans for the weekend?", "I don't care about weather.", "Weekend?"], best: 1, explanation: "'So' transitions naturally" },
          { situation: "The person mentions a trip; you want to relate", options: ["Speaking of travel, I just got back from Spain!", "I went to Spain.", "Spain is better.", "My vacation was longer."], best: 0, explanation: "'Speaking of' connects topics" },
          { situation: "You want to introduce a new topic entirely", options: ["Oh, by the way, did you hear about the merger?", "MERGER.", "Change of subject: merger.", "Listen to me now."], best: 0, explanation: "'By the way' introduces new topics naturally" }
        ]},
        { type: "exit-strategies", instruction: "Choose the most appropriate way to end the conversation", items: [
          { situation: "Casual chat with colleague, need to get back to work", options: ["Well, I'd better get back to it. Nice chatting!", "Bye.", "I need to go now.", "Stop talking."], best: 0, explanation: "Softener + positive closing" },
          { situation: "Phone call running long", options: ["Anyway, I should let you go. Talk soon?", "Hanging up now.", "You talk too much.", "Gotta go."], best: 0, explanation: "'Let you go' is polite" },
          { situation: "Running into someone but genuinely busy", options: ["Great seeing you! I have to run but let's catch up soon!", "Bye.", "I'm too busy for you.", "Not now."], best: 0, explanation: "Acknowledges them + explains + future intention" }
        ]},
        { type: "register-matching-small-talk", instruction: "Match the small talk to the appropriate register", items: [
          { phrase: "How do you do?", register: "Very formal", context: "First meeting, formal event" },
          { phrase: "What's new?", register: "Casual", context: "Colleague, friend" },
          { phrase: "How's life treating you?", register: "Casual", context: "Friendly acquaintance" },
          { phrase: "Pleased to meet you", register: "Formal", context: "Business introduction" }
        ]},
        { type: "small-talk-fill-blank", instruction: "Complete the small talk exchange appropriately", items: [
          { stem: "A: How's it going? B: _____", options: ["Not too bad, you?", "I have many problems", "Yes", "Good morning"], correct: 0 },
          { stem: "A: What's up? B: _____", options: ["Not much, what about you?", "The sky", "I am fine thank you", "Hello sir"], correct: 0 },
          { stem: "A: Great seeing you! B: _____", options: ["You too! Let's catch up soon.", "Bye", "Okay", "Good"], correct: 0 },
          { stem: "A: I'd better let you go. B: _____", options: ["Sounds good, talk soon!", "Bye", "Okay bye", "Fine"], correct: 0 }
        ]},
        { type: "safe-topic-identification", instruction: "Which topics are safe for small talk with new acquaintances?", items: [
          { topic: "Weather", safe: true },
          { topic: "Salary", safe: false },
          { topic: "Weekend plans", safe: true },
          { topic: "Political opinions", safe: false },
          { topic: "Recent movies", safe: true }
        ]},
        { type: "small-talk-transition", instruction: "Choose the best transition phrase", items: [
          { from: "Weather", to: "Work", phrase: "Speaking of which, how's the new project going?" },
          { from: "Vacation", to: "Food", phrase: "That reminds me - have you tried the new restaurant?" },
          { from: "Sports", to: "Weekend", phrase: "By the way, any plans for the weekend?" },
          { from: "Work", to: "Personal", phrase: "Anyway, enough shop talk - how's the family?" }
        ]},
        { type: "safe-topics-identification", instruction: "Identify which topics are safe for small talk with acquaintances", items: [
          { topic: "Weather", safe: true, explanation: "Universal safe topic" },
          { topic: "Salary", safe: false, explanation: "Too personal in Anglo cultures" },
          { topic: "Weekend plans", safe: true, explanation: "Common friendly topic" },
          { topic: "Political opinions", safe: false, explanation: "Potentially divisive" },
          { topic: "Local events/news", safe: true, explanation: "Neutral current topics" },
          { topic: "Age/weight", safe: false, explanation: "Personal and potentially sensitive" },
          { topic: "Movies/TV shows", safe: true, explanation: "Entertainment is neutral territory" }
        ]}
      ],
      modelDialogue: {
        title: "Masterful Small Talk at a Work Event",
        context: "Networking event - demonstrating smooth conversation flow",
        dialogue: [
          { speaker: "A", text: "Hi! I don't think we've met. I'm Alex from Marketing.", note: "Open introduction with department" },
          { speaker: "B", text: "Oh, hi Alex! I'm Sam, I'm in the dev team. How's it going?", note: "Reciprocal intro + casual greeting" },
          { speaker: "A", text: "Can't complain! Busy week, but glad it's almost Friday. How about you?", note: "Idiomatic response + relates to shared experience + returns question" },
          { speaker: "B", text: "Same here. Speaking of which, any plans for the weekend?", note: "'Speaking of' transitions to new topic" },
          { speaker: "A", text: "Actually, yeah - checking out that new Thai place downtown. Have you been?", note: "Shares plan + invites opinion" },
          { speaker: "B", text: "No, but I've heard good things! Let me know how it is.", note: "Shows interest + soft future connection" },
          { speaker: "A", text: "Will do! Oh, by the way, did you see the email about the all-hands meeting?", note: "'By the way' introduces work topic naturally" },
          { speaker: "B", text: "Yeah, sounds like big news coming. Should be interesting...", note: "Engages but doesn't speculate too much" },
          { speaker: "A", text: "For sure. Well, I'm going to grab some food. Really nice meeting you, Sam!", note: "Clear exit with reason + positive closing" },
          { speaker: "B", text: "Likewise! Enjoy the Thai place. See you around!", note: "Reciprocates + references their chat + casual goodbye" }
        ],
        keyTakeaways: [
          "Greetings include name exchange and department/role",
          "Responses to 'how are you' are brief and positive",
          "Smooth transitions: 'speaking of', 'by the way'",
          "Exit gracefully with reason and positive note",
          "Create connection points for future conversations"
        ]
      },
      pronunciationFocus: {
        title: "Small Talk Phrases",
        titleEs: "Frases de small talk",
        sounds: [
          { symbol: "/haʊz ɪt 'ɡoʊɪŋ/", word: "How's it going?", tip: "Often sounds like 'howzit going?' - flows together" },
          { symbol: "/kænt kəm'pleɪn/", word: "Can't complain", tip: "US: 'cant'; UK: 'cahnt'" },
          { symbol: "/aɪd 'betə/", word: "I'd better", tip: "Sounds like 'I'd bedder' in fast speech" },
          { symbol: "/siː jə ə'raʊnd/", word: "See you around", tip: "'You' reduces to 'ya'" }
        ]
      },
      culturalNote: {
        title: "Small Talk in English-Speaking Cultures",
        titleEs: "Small talk en culturas anglófonas",
        content: "Small talk is essential in English-speaking cultures, especially in business. It builds relationships before getting to business and shows social competence. Americans tend to be more openly friendly and ask 'how are you?' frequently. British small talk often revolves around weather and self-deprecating humor. In both cultures, comfortable silence is awkward - filling gaps with light conversation is expected.",
        contentEs: "El small talk es esencial en culturas anglófonas, especialmente en negocios. Construye relaciones antes de entrar en negocios y muestra competencia social. Los americanos tienden a ser más abiertamente amigables y preguntan 'how are you?' frecuentemente. El small talk británico suele girar en torno al clima y humor autocrítico. En ambas culturas, el silencio cómodo es incómodo: se espera llenar los huecos con conversación ligera.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "'How's life treating you?' is best answered:", options: ["Bad, I have problems", "Can't complain!", "Yes, it is", "Life is treating me fine, thank you"], correctIndex: 1, explanation: "Idiomatic brief positive response" },
        { question: "To change topic smoothly, use:", options: ["Stop. New topic.", "Speaking of which...", "I don't care about that", "Whatever"], correctIndex: 1, explanation: "'Speaking of' transitions naturally" },
        { question: "To end a casual conversation politely:", options: ["Bye", "I'd better let you go", "I have to work", "You're boring"], correctIndex: 1, explanation: "Softener + polite exit" },
        { question: "Which is NOT a safe small talk topic with acquaintances?", options: ["Weather", "Weekend plans", "Salary", "Recent movies"], correctIndex: 2, explanation: "Salary is too personal" }
      ],
      guidedProduction: {
        scenario: "Practice a complete small talk conversation from greeting to exit.",
        promptQuestions: [
          "How would you greet a colleague you haven't seen in a while?",
          "How would you respond to 'How's it going?' (use a varied response)",
          "Transition to asking about their weekend",
          "Introduce a new topic using 'by the way'",
          "Close the conversation politely when you need to leave"
        ],
        sampleResponse: "GREETING: 'Hey Sarah! Long time no see! How've you been?'\n\nRESPONSE: 'Not too bad! Busy as always, but can't complain. How about you?'\n\nTRANSITION: 'Good, good. So, any exciting plans for the weekend?'\n\nNEW TOPIC: 'Nice! Oh, by the way, did you hear they're renovating the third floor?'\n\nCLOSING: 'Anyway, I'd better get back to my desk. Great catching up! Let's grab coffee sometime.'"
      },
      connectionToPrevious: "Intonation makes small talk sound natural rather than scripted",
      connectionToNext: "Proverbs and sayings add color to casual conversation"
    },
    {
      id: 6,
      title: "Proverbs and Sayings",
      titleEs: "Proverbios y Refranes",
      introduction: {
        title: "📜 Proverbios y Refranes",
        explanation: "Los proverbios y refranes son sabiduría cultural condensada. Conocerlos te conecta con la herencia lingüística del inglés.",
        keyPoints: [
          "Trabajo: 'Many hands make light work', 'The early bird catches the worm'",
          "Precaución: 'Look before you leap', 'A stitch in time saves nine'",
          "Relaciones: 'Blood is thicker than water', 'Birds of a feather flock together'",
          "Sabiduría: 'All that glitters is not gold', 'Don't judge a book by its cover'",
          "Uso: los nativos a menudo solo dicen la primera mitad"
        ],
        examples: [
          { english: "A: I'm nervous about the investment. B: Well, you know what they say – nothing ventured, nothing gained.", spanish: "A: Estoy nervioso por la inversión. B: Bueno, ya sabes lo que dicen – el que no arriesga, no gana.", explanation: "Usando proverbio para aconsejar" },
          { english: "We caught the problem early. A stitch in time...", spanish: "Atrapamos el problema temprano. Más vale prevenir...", explanation: "Dejando el proverbio incompleto (nativos lo completan mentalmente)" },
          { english: "They seemed nice, but you know – all that glitters...", spanish: "Parecían simpáticos, pero ya sabes – no todo lo que brilla...", explanation: "Proverbio truncado" }
        ],
        tips: [
          "💡 Los nativos a menudo solo dicen la mitad del proverbio",
          "💡 'A stitch in time saves nine' = prevenir es mejor que curar",
          "💡 Usa 'They say...' o 'You know what they say...' para introducir"
        ],
        whenToUse: [
          'Para dar consejo con sabiduría popular: "Nothing ventured, nothing gained"',
          'Para cerrar un argumento con impacto: "Well, all that glitters..."',
          'En conversación informal para mostrar familiaridad cultural',
          'Para introducir humor ligero: "You know what they say..." + proverbio relevante'
        ],
        whenNotToUse: [
          'En informes formales o documentos legales → los proverbios restan profesionalismo',
          'No traduzcas refranes españoles literalmente al inglés → usa equivalentes ingleses',
          'Evita completar proverbios que los nativos dejarían truncados → suena pedante'
        ]
      },
      objectives: ["Conocer proverbios comunes", "Usar proverbios apropiadamente", "Entender proverbios truncados"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-pragmatic-implicature"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l13t6_e1", word: "The early bird catches the worm", translation: "Al que madruga, Dios lo ayuda", type: "expression", definition: "being early brings advantages", definitionEs: "ser temprano trae ventajas", example: "Let's start early – the early bird catches the worm.", exampleEs: "Empecemos temprano – al que madruga, Dios lo ayuda.", related: [], difficulty: 1 },
          { id: "l13t6_e2", word: "A stitch in time saves nine", translation: "Más vale prevenir que curar", type: "expression", definition: "fix problems early", definitionEs: "arregla problemas temprano", example: "Fix it now – a stitch in time saves nine.", exampleEs: "Arréglalo ahora – más vale prevenir que curar.", related: [], difficulty: 2 },
          { id: "l13t6_e3", word: "Don't judge a book by its cover", translation: "No juzgues por las apariencias", type: "expression", definition: "don't judge by appearance", definitionEs: "no juzgues por apariencia", example: "He looks rough but is kind – don't judge a book by its cover.", exampleEs: "Se ve rudo pero es amable – no juzgues por las apariencias.", related: [], difficulty: 1 },
          { id: "l13t6_e4", word: "All that glitters is not gold", translation: "No todo lo que brilla es oro", type: "expression", definition: "appearances can deceive", definitionEs: "las apariencias engañan", example: "The deal seemed perfect, but all that glitters is not gold.", exampleEs: "El trato parecía perfecto, pero no todo lo que brilla es oro.", related: [], difficulty: 1 },
          { id: "l13t6_e5", word: "Nothing ventured, nothing gained", translation: "El que no arriesga, no gana", type: "expression", definition: "must take risks to succeed", definitionEs: "debes tomar riesgos para tener éxito", example: "Take the chance – nothing ventured, nothing gained.", exampleEs: "Arriésgate – el que no arriesga, no gana.", related: [], difficulty: 1 },
          { id: "l13t6_e6", word: "Many hands make light work", translation: "La unión hace la fuerza", type: "expression", definition: "teamwork is efficient", definitionEs: "el trabajo en equipo es eficiente", example: "Let's all help – many hands make light work.", exampleEs: "Ayudemos todos – la unión hace la fuerza.", related: [], difficulty: 1 },
          { id: "l13t6_e7", word: "Look before you leap", translation: "Piensa antes de actuar", type: "expression", definition: "consider consequences", definitionEs: "considera las consecuencias", example: "Don't rush – look before you leap.", exampleEs: "No te apures – piensa antes de actuar.", related: [], difficulty: 1 },
          { id: "l13t6_e8", word: "Birds of a feather flock together", translation: "Dios los cría y ellos se juntan", type: "expression", definition: "similar people associate", definitionEs: "gente similar se asocia", example: "They're always together – birds of a feather.", exampleEs: "Siempre están juntos – Dios los cría y ellos se juntan.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t6_cm1", wrong: "Using proverbs in very formal business writing", correct: "Reserve proverbs for verbal communication and semi-formal contexts", explanation: "Proverbs add warmth but can seem unprofessional in formal reports", explanationEs: "Proverbs add warmth but can seem unprofessional in formal reports", category: "usage" },
        { id: "l13t6_cm2", wrong: "Mixing proverbs from different cultures inappropriately", correct: "Use English proverbs when speaking English; cultural equivalents may not translate", explanation: "Translating Spanish proverbs literally can confuse English speakers", explanationEs: "Translating Spanish proverbs literally can confuse English speakers", category: "usage" },
        { id: "l13t6_cm3", wrong: "Completing the proverb when native speakers would truncate it", correct: "With common proverbs, often stop after the first half", explanation: "Saying the full proverb can sound overly formal or pedantic", explanationEs: "Saying the full proverb can sound overly formal or pedantic", category: "usage" },
        { id: "l13t6_cm4", wrong: "Using obscure proverbs that most natives wouldn't know", correct: "Stick to well-known proverbs for clarity", explanation: "Rare proverbs may not communicate your point effectively", explanationEs: "Rare proverbs may not communicate your point effectively", category: "usage" },
        { id: "l13t6_cm5", wrong: "Using 'The early bird gets the worm'", correct: "The early bird catches the worm", explanation: "Collocation error: use 'catches', not 'gets'", explanationEs: "Collocation error - 'catches' not 'gets'", category: "vocabulary" },
        { id: "l13t6_cm6", wrong: "Saying full proverb in casual chat: 'A stitch in time saves nine'", correct: "Truncate: 'A stitch in time...' or 'You know what they say - a stitch in time'", explanation: "Full proverbs can sound preachy in casual conversation", explanationEs: "Full proverbs can sound preachy in casual conversation", category: "usage" },
        { id: "l13t6_cm7", wrong: "Using proverb to dismiss someone's concern", correct: "Address the concern, then optionally add proverb as support", explanation: "Proverbs shouldn't replace empathy; address the concern first", explanationEs: "Proverbs shouldn't replace empathy", category: "usage" },
        { id: "l13t6_cm8", wrong: "Mixing proverb metaphors: 'Don't count chickens before they cross the bridge'", correct: "Use one proverb: 'Don't count your chickens before they hatch' OR 'Don't cross that bridge until you come to it'", explanation: "Mixing proverbs creates confusion; use one at a time", explanationEs: "Mixing proverbs creates confusion", category: "usage" }
      ],
      exercises: [
        { type: "proverb-completion", instruction: "Complete the proverb", items: [
          { beginning: "The early bird catches...", ending: "the worm", meaning: "Being early brings advantages" },
          { beginning: "Don't judge a book...", ending: "by its cover", meaning: "Don't judge by appearances" },
          { beginning: "A stitch in time...", ending: "saves nine", meaning: "Fix problems early" },
          { beginning: "All that glitters...", ending: "is not gold", meaning: "Appearances can deceive" },
          { beginning: "Nothing ventured...", ending: "nothing gained", meaning: "Must take risks to succeed" },
          { beginning: "Birds of a feather...", ending: "flock together", meaning: "Similar people associate" }
        ]},
        { type: "proverb-application", instruction: "Match the situation to the appropriate proverb", items: [
          { situation: "Your friend is nervous about asking for a promotion", proverb: "Nothing ventured, nothing gained", explanation: "Encourages taking risks" },
          { situation: "Someone is judging a new colleague unfairly", proverb: "Don't judge a book by its cover", explanation: "Warns against judging appearances" },
          { situation: "A project has a small bug that should be fixed now", proverb: "A stitch in time saves nine", explanation: "Fix small problems early" },
          { situation: "Someone is rushing into a major decision", proverb: "Look before you leap", explanation: "Consider consequences first" },
          { situation: "A job offer seems too good to be true", proverb: "All that glitters is not gold", explanation: "Appearances can deceive" }
        ]},
        { type: "truncated-proverbs", instruction: "Use the proverb naturally in context (with truncation where appropriate)", items: [
          { fullProverb: "A stitch in time saves nine", naturalUse: "Let's fix it now. A stitch in time...", context: "Encouraging early action" },
          { fullProverb: "All that glitters is not gold", naturalUse: "The deal seems great, but all that glitters...", context: "Warning about deception" },
          { fullProverb: "Birds of a feather flock together", naturalUse: "Those two are always together. Birds of a feather...", context: "Observing similar people" },
          { fullProverb: "Don't judge a book by its cover", naturalUse: "He looks tough but he's kind. Don't judge a book...", context: "Defending someone" }
        ]},
        { type: "introducing-proverbs", instruction: "Practice ways to introduce proverbs in conversation", phrases: [
          "You know what they say...",
          "As they say...",
          "There's a saying...",
          "Well, you know the old saying...",
          "My grandmother always said..."
        ]},
        { type: "proverb-meaning-matching", instruction: "Match each proverb to its meaning", items: [
          { proverb: "Look before you leap", meaning: "Consider consequences before acting" },
          { proverb: "Many hands make light work", meaning: "Teamwork makes tasks easier" },
          { proverb: "Nothing ventured, nothing gained", meaning: "You must take risks to succeed" },
          { proverb: "Birds of a feather flock together", meaning: "Similar people associate" },
          { proverb: "All that glitters is not gold", meaning: "Appearances can deceive" }
        ]},
        { type: "proverb-completion-advanced", instruction: "Complete the proverb", items: [
          { start: "Look before you...", end: "leap" },
          { start: "Many hands make...", end: "light work" },
          { start: "Nothing ventured,...", end: "nothing gained" },
          { start: "Don't put all your eggs in...", end: "one basket" }
        ]},
        { type: "proverb-situation-matching", instruction: "Which proverb fits each situation?", items: [
          { situation: "Someone is rushing into a marriage", proverb: "Look before you leap" },
          { situation: "Encouraging someone to apply for a job", proverb: "Nothing ventured, nothing gained" },
          { situation: "Warning about a deal that seems too good", proverb: "All that glitters is not gold" },
          { situation: "Suggesting everyone help with the move", proverb: "Many hands make light work" }
        ]},
        { type: "proverb-appropriateness", instruction: "Is the proverb appropriate for the context?", items: [
          { context: "Formal legal contract", proverb: "A stitch in time saves nine", appropriate: false },
          { context: "Mentor giving casual advice", proverb: "Nothing ventured, nothing gained", appropriate: true },
          { context: "Academic essay conclusion", proverb: "The early bird catches the worm", appropriate: false },
          { context: "Team meeting encouraging collaboration", proverb: "Many hands make light work", appropriate: true }
        ]}
      ],
      modelDialogue: {
        title: "Using Proverbs in Professional Advice",
        context: "Mentor giving advice using proverbs naturally",
        dialogue: [
          { speaker: "Mentee", text: "I'm not sure if I should apply for the director position. I might not get it.", note: "Expressing doubt" },
          { speaker: "Mentor", text: "Well, you know what they say – nothing ventured, nothing gained. You won't know unless you try.", note: "Using proverb to encourage" },
          { speaker: "Mentee", text: "True. But the other candidate seems perfect for the role.", note: "Comparing to others" },
          { speaker: "Mentor", text: "Hmm, all that glitters... I'd focus on your own strengths rather than comparing.", note: "Truncated proverb with advice" },
          { speaker: "Mentee", text: "I guess I should prepare thoroughly first.", note: "Planning" },
          { speaker: "Mentor", text: "Exactly. Look before you leap. But also don't overthink it – at some point you just need to go for it.", note: "Balance of proverbs" },
          { speaker: "Mentee", text: "Thanks. This helps a lot.", note: "Appreciating advice" },
          { speaker: "Mentor", text: "Many hands make light work – let me know if you want help with your application!", note: "Offering help with proverb" }
        ],
        keyTakeaways: [
          "Introduce proverbs with 'you know what they say' or similar",
          "Truncate well-known proverbs for natural flow",
          "Use proverbs to soften direct advice",
          "Don't overuse proverbs – one or two per conversation is plenty"
        ]
      },
      pronunciationFocus: {
        title: "Proverb Pronunciation",
        titleEs: "Pronunciación de proverbios",
        sounds: [
          { symbol: "/stɪtʃ ɪn taɪm/", word: "stitch in time", tip: "Flows together naturally" },
          { symbol: "/ɔːl ðæt 'ɡlɪtəz/", word: "all that glitters", tip: "Stress on 'glitters'" },
          { symbol: "/bɜːdz əv ə 'feðə/", word: "birds of a feather", tip: "'Of a' reduces to /əvə/" },
          { symbol: "/'nʌθɪŋ 'ventʃəd/", word: "nothing ventured", tip: "Both words stressed equally" }
        ]
      },
      culturalNote: {
        title: "Proverbs and Cultural Values",
        titleEs: "Proverbios y valores culturales",
        content: "Proverbs reflect cultural values: 'The early bird catches the worm' shows Anglo emphasis on initiative; 'Many hands make light work' reflects community values. In business, proverbs add warmth and can build rapport, but overuse can seem folksy or unprofessional. The ability to truncate proverbs signals cultural fluency – you trust the listener to complete it.",
        contentEs: "Los proverbios reflejan valores culturales: 'The early bird catches the worm' muestra el énfasis anglo en iniciativa; 'Many hands make light work' refleja valores comunitarios. En negocios, los proverbios añaden calidez y pueden crear rapport, pero el uso excesivo puede parecer folclórico o poco profesional. La capacidad de truncar proverbios señala fluidez cultural: confías en que el oyente lo complete.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "To encourage someone to take a risk, you might say:", options: ["Look before you leap", "Nothing ventured, nothing gained", "All that glitters is not gold", "Many hands make light work"], correctIndex: 1, explanation: "Encourages taking risks for potential rewards" },
        { question: "'A stitch in time...' means:", options: ["Sewing is important", "Fix problems early", "Time heals all wounds", "Patience is a virtue"], correctIndex: 1, explanation: "Fixing small problems early prevents bigger ones" },
        { question: "How do natives often use well-known proverbs?", options: ["Always say the full proverb", "Only say the first half", "Explain the meaning after", "Avoid using proverbs"], correctIndex: 1, explanation: "Truncation shows cultural fluency" },
        { question: "To introduce a proverb naturally, say:", options: ["Listen to this proverb", "You know what they say...", "English proverb incoming", "As Wikipedia states"], correctIndex: 1, explanation: "Natural, conversational introduction" }
      ],
      guidedProduction: {
        scenario: "Practice giving advice using appropriate proverbs.",
        promptQuestions: [
          "A friend is judging someone based on their appearance. Which proverb would you use?",
          "Someone is rushing into a big decision without research. What advice with a proverb?",
          "A colleague found a small bug but says 'it's fine for now.' Encourage fixing it.",
          "Someone is scared to apply for a job they really want. Encourage them."
        ],
        sampleResponse: "JUDGING APPEARANCE: 'Come on, don't judge a book by its cover. Give them a chance – they might surprise you.'\n\nRUSHING: 'Hey, look before you leap! This is a big decision. Take some time to research first.'\n\nSMALL BUG: 'You know what they say – a stitch in time saves nine. Let's fix it now before it becomes a bigger problem.'\n\nSCARED TO APPLY: 'Go for it! Nothing ventured, nothing gained. The worst they can say is no, and you'll learn from the experience either way.'"
      },
      connectionToPrevious: "Proverbs often come up in small talk and add cultural color to conversations",
      connectionToNext: "Precise emotional vocabulary helps express the wisdom proverbs convey"
    },
    {
      id: 7,
      title: "Expressing Precise Emotions",
      titleEs: "Expresando Emociones con Precisión",
      introduction: {
        title: "❤️ Emociones con Precisión",
        explanation: "El vocabulario emocional rico distingue al hablante avanzado. Más allá de 'happy', 'sad', 'angry', existen docenas de matices.",
        keyPoints: [
          "Felicidad: 'content', 'elated', 'ecstatic', 'over the moon', 'thrilled', 'chuffed'",
          "Tristeza: 'melancholy', 'heartbroken', 'devastated', 'gutted', 'blue'",
          "Enojo: 'irritated', 'frustrated', 'furious', 'livid', 'fuming', 'seething'",
          "Miedo: 'anxious', 'apprehensive', 'terrified', 'petrified', 'dreading'",
          "Sorpresa: 'taken aback', 'stunned', 'gobsmacked', 'flabbergasted'"
        ],
        examples: [
          { english: "I'm absolutely gutted about the result. I was so close!", spanish: "Estoy absolutamente destrozado por el resultado. ¡Estuve tan cerca!", explanation: "Gutted = muy decepcionado (UK)" },
          { english: "She was seething after the meeting – I've never seen her so angry.", spanish: "Ella estaba hirviendo de rabia después de la reunión – nunca la había visto tan enojada.", explanation: "Seething = furioso pero contenido" },
          { english: "I'm absolutely gobsmacked! I never expected to win!", spanish: "¡Estoy absolutamente atónito! ¡Nunca esperé ganar!", explanation: "Gobsmacked = totalmente sorprendido (UK)" }
        ],
        tips: [
          "💡 'Gutted' es muy británico y muy expresivo",
          "💡 'Seething' implica furia contenida, a punto de explotar",
          "💡 'Content' es felicidad tranquila; 'elated' es felicidad intensa"
        ],
        whenToUse: [
          'Decepción intensa (UK): "I\'m absolutely gutted about the result"',
          'Furia contenida: "She was seething after the meeting"',
          'Sorpresa total: "I\'m absolutely gobsmacked! I never expected to win!"',
          'Matices de felicidad: "content" (tranquila) vs "elated" vs "over the moon" (intensa)'
        ],
        whenNotToUse: [
          'Evita "gutted" con americanos → es muy británico; "devastated" es más universal',
          'No uses "seething" o "fuming" en feedback escrito formal → puede sonar agresivo',
          'En contextos profesionales → "gobsmacked" puede ser demasiado coloquial'
        ]
      },
      objectives: ["Expresar emociones con precisión", "Usar vocabulario emocional rico", "Comunicar matices emocionales"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-pragmatic-implicature"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [
          { id: "l13t7_a1", word: "elated", translation: "eufórico/extasiado", type: "adjective", definition: "extremely happy", definitionEs: "extremadamente feliz", example: "I was elated when I heard the news.", exampleEs: "Estaba eufórico cuando escuché la noticia.", related: [], difficulty: 2 },
          { id: "l13t7_a2", word: "gutted (UK)", translation: "destrozado/devastado", type: "adjective", definition: "extremely disappointed", definitionEs: "extremadamente decepcionado", example: "I'm absolutely gutted.", exampleEs: "Estoy absolutamente destrozado.", related: [], difficulty: 2 },
          { id: "l13t7_a3", word: "livid", translation: "furioso", type: "adjective", definition: "extremely angry", definitionEs: "extremadamente enojado", example: "She was livid when she found out.", exampleEs: "Estaba furiosa cuando se enteró.", related: [], difficulty: 2 },
          { id: "l13t7_a4", word: "seething", translation: "hirviendo de rabia", type: "adjective", definition: "intensely angry but controlled", definitionEs: "intensamente enojado pero controlado", example: "He was seething inside.", exampleEs: "Estaba hirviendo de rabia por dentro.", related: [], difficulty: 2 },
          { id: "l13t7_a5", word: "apprehensive", translation: "aprensivo/temeroso", type: "adjective", definition: "anxious about the future", definitionEs: "ansioso sobre el futuro", example: "I'm apprehensive about the interview.", exampleEs: "Estoy aprensivo sobre la entrevista.", related: [], difficulty: 2 },
          { id: "l13t7_a6", word: "gobsmacked (UK)", translation: "atónito/boquiabierto", type: "adjective", definition: "utterly astonished", definitionEs: "completamente asombrado", example: "I was gobsmacked.", exampleEs: "Quedé atónito.", related: [], difficulty: 2 },
          { id: "l13t7_a7", word: "melancholy", translation: "melancólico", type: "adjective", definition: "sadly thoughtful", definitionEs: "tristemente pensativo", example: "I felt melancholy all day.", exampleEs: "Me sentí melancólico todo el día.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l13t7_e1", word: "over the moon", translation: "en la luna/felicísimo", type: "expression", definition: "extremely happy", definitionEs: "extremadamente feliz", example: "She was over the moon about the promotion.", exampleEs: "Estaba felicísima por el ascenso.", related: [], difficulty: 1 },
          { id: "l13t7_e2", word: "taken aback", translation: "sorprendido/desconcertado", type: "expression", definition: "surprised and confused", definitionEs: "sorprendido y confundido", example: "I was taken aback by her response.", exampleEs: "Me sorprendió su respuesta.", related: [], difficulty: 1 },
          { id: "l13t7_e3", word: "on cloud nine", translation: "en las nubes/felicísimo", type: "expression", definition: "extremely happy", definitionEs: "extremadamente feliz", example: "She's been on cloud nine since the wedding.", exampleEs: "Ha estado en las nubes desde la boda.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t7_cm1", wrong: "Using 'gutted' with Americans (may not understand)", correct: "Use 'devastated' or 'really disappointed' with Americans", explanation: "'Gutted' is distinctly British; Americans use 'bummed' or 'devastated'", explanationEs: "'Gutted' is distinctly British; Americans use 'bummed' or 'devastated'", category: "vocabulary" },
        { id: "l13t7_cm2", wrong: "Using 'very' with already-intense adjectives (very furious)", correct: "Use 'absolutely' with extreme adjectives: 'absolutely livid'", explanation: "Extreme adjectives (livid, ecstatic) pair with 'absolutely', not 'very'", explanationEs: "Extreme adjectives (livid, ecstatic) pair with 'absolutely', not 'very'", category: "vocabulary" },
        { id: "l13t7_cm3", wrong: "Mixing intensity levels inappropriately", correct: "Match emotion word to actual intensity", explanation: "'I'm devastated about losing my pen' is hyperbolic and sounds strange", explanationEs: "'I'm devastated about losing my pen' is hyperbolic and sounds strange", category: "usage" },
        { id: "l13t7_cm4", wrong: "Using 'happy' when more precise vocabulary exists", correct: "Choose the right shade: content, pleased, delighted, elated, ecstatic", explanation: "Precision shows vocabulary mastery", explanationEs: "Precision shows vocabulary mastery", category: "vocabulary" },
        { id: "l13t7_cm5", wrong: "Saying 'I'm very exhausted'", correct: "Say 'I'm exhausted' or 'I'm absolutely exhausted'", explanation: "Exhausted is extreme - use 'absolutely' or nothing, not 'very'", explanationEs: "Exhausted is extreme - use 'absolutely' or nothing, not 'very'", category: "vocabulary" },
        { id: "l13t7_cm6", wrong: "Using 'interested' with 'absolutely'", correct: "Use 'very/really interested' - interested is gradable", explanation: "Absolutely pairs with extreme adjectives only", explanationEs: "Absolutely pairs with extreme adjectives only", category: "vocabulary" },
        { id: "l13t7_cm7", wrong: "Describing minor annoyance as 'livid'", correct: "Use 'annoyed' or 'irritated' for minor issues", explanation: "Livid = extremely angry - match word to intensity", explanationEs: "Livid = extremely angry - match word to intensity", category: "vocabulary" },
        { id: "l13t7_cm8", wrong: "Saying 'I'm so boring' when you mean uninterested", correct: "Say 'I'm so bored' - boring describes the thing, bored describes you", explanation: "Boring vs bored - common confusion: boring = dull, bored = uninterested", explanationEs: "Boring vs bored - common confusion", category: "vocabulary" }
      ],
      exercises: [
        { type: "intensity-scale", instruction: "Arrange these emotion words from least to most intense", scales: [
          { category: "Happiness", words: ["content", "pleased", "happy", "delighted", "elated", "ecstatic"], order: [0, 1, 2, 3, 4, 5] },
          { category: "Anger", words: ["annoyed", "irritated", "frustrated", "angry", "furious", "livid"], order: [0, 1, 2, 3, 4, 5] },
          { category: "Sadness", words: ["blue", "down", "sad", "miserable", "devastated", "heartbroken"], order: [0, 1, 2, 3, 4, 5] },
          { category: "Fear", words: ["uneasy", "nervous", "anxious", "scared", "terrified", "petrified"], order: [0, 1, 2, 3, 4, 5] }
        ]},
        { type: "context-matching", instruction: "Choose the most appropriate emotion word for each situation", items: [
          { situation: "You just got your dream job after months of searching", options: ["pleased", "content", "elated"], correct: 2, explanation: "Dream job = intense happiness = elated" },
          { situation: "Someone cut in line ahead of you at the store", options: ["livid", "annoyed", "seething"], correct: 1, explanation: "Minor inconvenience = mild annoyance" },
          { situation: "Your favorite football team lost in the final seconds", options: ["sad", "gutted", "blue"], correct: 1, explanation: "Crushing sports loss = gutted (British)" },
          { situation: "You're about to give a presentation to 500 people", options: ["apprehensive", "petrified", "uneasy"], correct: 0, explanation: "Normal pre-presentation nerves = apprehensive" },
          { situation: "You won the lottery", options: ["pleased", "ecstatic", "content"], correct: 1, explanation: "Life-changing win = extreme emotion = ecstatic" }
        ]},
        { type: "uk-us-equivalents", instruction: "Match British emotion words with American equivalents", pairs: [
          { british: "gutted", american: "devastated/bummed" },
          { british: "chuffed", american: "pleased/happy" },
          { british: "gobsmacked", american: "stunned/shocked" },
          { british: "miffed", american: "annoyed/irritated" },
          { british: "knackered (emotional exhaustion)", american: "wiped out/burnt out" }
        ]},
        { type: "very-vs-absolutely", instruction: "Choose the correct intensifier for each adjective", items: [
          { adjective: "livid", intensifier: "absolutely", explanation: "Extreme adjective takes 'absolutely'" },
          { adjective: "angry", intensifier: "very", explanation: "Regular adjective takes 'very'" },
          { adjective: "ecstatic", intensifier: "absolutely", explanation: "Extreme adjective takes 'absolutely'" },
          { adjective: "happy", intensifier: "very", explanation: "Regular adjective takes 'very'" },
          { adjective: "devastated", intensifier: "absolutely", explanation: "Extreme adjective takes 'absolutely'" },
          { adjective: "sad", intensifier: "very", explanation: "Regular adjective takes 'very'" }
        ]},
        { type: "precise-emotion-choice", instruction: "Choose the exact emotion word for each situation", items: [
          { situation: "Just won a competition you trained months for", options: ["pleased", "elated", "content"], correct: 1 },
          { situation: "Someone cancelled plans last minute", options: ["livid", "annoyed", "devastated"], correct: 1 },
          { situation: "Night before major surgery", options: ["apprehensive", "ecstatic", "elated"], correct: 0 },
          { situation: "Quiet satisfaction with life", options: ["ecstatic", "content", "livid"], correct: 1 }
        ]},
        { type: "emotion-intensity-ordering", instruction: "Order from least to most intense", items: [
          { category: "Happiness", order: ["content", "pleased", "delighted", "elated", "ecstatic"] },
          { category: "Anger", order: ["annoyed", "irritated", "frustrated", "furious", "livid"] },
          { category: "Surprise", order: ["surprised", "taken aback", "stunned", "gobsmacked"] }
        ]},
        { type: "boring-vs-bored", instruction: "Choose the correct form", items: [
          { sentence: "The meeting was so ___", correct: "boring", explanation: "Meeting causes boredom" },
          { sentence: "I was so ___ during the meeting", correct: "bored", explanation: "I experienced boredom" },
          { sentence: "She's ___ about the project", correct: "excited", explanation: "She feels excitement" },
          { sentence: "The project is ___", correct: "exciting", explanation: "Project causes excitement" }
        ]},
        { type: "emotion-context-matching", instruction: "Which emotion word fits the context?", items: [
          { context: "British person's team lost the cup final", word: "gutted" },
          { context: "Controlled anger, not yet expressed", word: "seething" },
          { context: "Pleasant surprise at a gift", word: "taken aback" },
          { context: "Mild worry about tomorrow's meeting", word: "apprehensive" }
        ]}
      ],
      modelDialogue: {
        title: "Expressing Nuanced Emotions in Conversation",
        context: "Friends discussing emotional reactions to life events",
        dialogue: [
          { speaker: "Alex", text: "How did your interview go?", note: "Opening question" },
          { speaker: "Sam", text: "I'm cautiously optimistic? I was really apprehensive going in, but I think it went well.", note: "Mixed emotions with precision" },
          { speaker: "Alex", text: "That's great! And how's Mark handling not getting the promotion?", note: "Asking about another's emotions" },
          { speaker: "Sam", text: "Oh, he's absolutely gutted. He was sure he'd get it. I've never seen him so deflated.", note: "Using strong British emotion word" },
          { speaker: "Alex", text: "That's rough. And your sister's wedding – you must be thrilled!", note: "Assuming emotion" },
          { speaker: "Sam", text: "I'm over the moon for her, obviously. But also... I don't know, a bit melancholy? Like, things are changing.", note: "Showing complexity of emotions" },
          { speaker: "Alex", text: "That makes total sense. Happy and sad at the same time.", note: "Validating complexity" },
          { speaker: "Sam", text: "Exactly. Bittersweet, I guess. Not just 'happy' or 'sad' – it's more nuanced than that.", note: "Articulating emotional complexity" }
        ],
        keyTakeaways: [
          "Precise emotion words convey exactly how you feel",
          "Complex situations often involve multiple emotions",
          "British vs American vocabulary choices",
          "'Absolutely' pairs with extreme adjectives; 'very' with regular ones"
        ]
      },
      pronunciationFocus: {
        title: "Emotion Vocabulary Pronunciation",
        titleEs: "Pronunciación de vocabulario emocional",
        sounds: [
          { symbol: "/ɪ'leɪtɪd/", word: "elated", tip: "ih-LAY-tid, stress on second syllable" },
          { symbol: "/ˌæprɪ'hensɪv/", word: "apprehensive", tip: "ap-ri-HEN-siv, stress on third syllable" },
          { symbol: "/'melənkɒli/", word: "melancholy", tip: "MEL-an-kol-ee, stress on first syllable" },
          { symbol: "/'siːðɪŋ/", word: "seething", tip: "SEETH-ing, long 'ee' sound" }
        ]
      },
      culturalNote: {
        title: "Emotional Expression: British vs American",
        titleEs: "Expresión emocional: británico vs americano",
        content: "British English tends to understate positive emotions ('quite pleased' when very happy) and dramatize negative ones ('absolutely gutted'). American English often does the opposite ('awesome!' for minor things, 'bummed' for major disappointments). Understanding these patterns helps you interpret emotional expressions accurately.",
        contentEs: "El inglés británico tiende a subestimar emociones positivas ('quite pleased' cuando muy feliz) y dramatizar las negativas ('absolutely gutted'). El americano suele hacer lo opuesto ('awesome!' para cosas menores, 'bummed' para decepciones mayores). Entender estos patrones ayuda a interpretar expresiones emocionales con precisión.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "For extreme happiness, 'absolutely' goes with:", options: ["happy", "pleased", "ecstatic", "glad"], correctIndex: 2, explanation: "Ecstatic is an extreme adjective" },
        { question: "'Gutted' is:", options: ["American slang for angry", "British for very disappointed", "Medical term", "Australian greeting"], correctIndex: 1, explanation: "British = devastated/very disappointed" },
        { question: "Which shows the weakest anger?", options: ["Livid", "Furious", "Annoyed", "Seething"], correctIndex: 2, explanation: "Annoyed is mild; others are intense" },
        { question: "'She was taken aback' means she was:", options: ["Pushed physically", "Surprised and confused", "Extremely happy", "Bored"], correctIndex: 1, explanation: "Taken aback = surprised and a bit confused" }
      ],
      guidedProduction: {
        scenario: "Describe emotional reactions to these situations using precise vocabulary.",
        promptQuestions: [
          "How would you feel winning a competition you trained months for? (Use an intense happiness word)",
          "How would you feel if a friend cancelled plans last minute for no good reason? (Use appropriate anger level)",
          "How might someone feel the night before a major surgery? (Use a fear word)",
          "How would a British person describe being extremely disappointed about their team losing?"
        ],
        sampleResponse: "WINNING COMPETITION: 'I was absolutely elated – over the moon, really. All those months of training paid off and I just felt ecstatic.'\n\nCANCELLED PLANS: 'I'd be annoyed, maybe a bit miffed. Not furious – it's not that serious – but definitely irritated that they didn't give me more notice.'\n\nBEFORE SURGERY: 'I'd be really apprehensive, probably quite anxious. Not petrified exactly, but definitely nervous about the unknown.'\n\nBRITISH SPORTS LOSS: 'Absolutely gutted. Devastated. I was so sure we'd win – I'm completely deflated. I need to process this.'"
      },
      connectionToPrevious: "Proverbs often express emotions; now we can articulate feelings precisely",
      connectionToNext: "Sophisticated argumentation requires expressing positions with emotional intelligence"
    },
    {
      id: 8,
      title: "Sophisticated Argumentation",
      titleEs: "Argumentación Sofisticada",
      introduction: {
        title: "⚖️ Argumentación Sofisticada",
        explanation: "La argumentación de nivel nativo integra lógica, evidencia, concesiones y refutaciones de manera fluida y persuasiva.",
        keyPoints: [
          "Tesis clara: 'The central argument here is that...'",
          "Evidencia: 'This is supported by...', 'As evidenced by...'",
          "Concesiones: 'Admittedly...', 'Granted, this may be true, however...'",
          "Refutaciones: 'This argument fails to account for...', 'Upon closer examination...'",
          "Conclusión: 'In light of the evidence presented...', 'The preponderance of evidence suggests...'"
        ],
        examples: [
          { english: "Admittedly, the initial costs are high. Granted, this presents a challenge. However, the long-term ROI justifies the investment.", spanish: "Es cierto que los costos iniciales son altos. Concedido, esto presenta un desafío. Sin embargo, el ROI a largo plazo justifica la inversión.", explanation: "Concesión antes de contraargumento" },
          { english: "This argument fails to account for external market factors. Upon closer examination, we see that...", spanish: "Este argumento no considera los factores externos del mercado. Tras un examen más detallado, vemos que...", explanation: "Refutación estructurada" },
          { english: "In light of the evidence presented, the preponderance clearly favors Option A.", spanish: "A la luz de la evidencia presentada, la preponderancia claramente favorece la Opción A.", explanation: "Conclusión con peso" }
        ],
        tips: [
          "💡 'Admittedly' y 'Granted' muestran que reconoces el otro lado",
          "💡 'Preponderance of evidence' viene del lenguaje legal",
          "💡 Nunca ignores contraargumentos – abórdalos directamente"
        ],
        whenToUse: [
          'Concesión antes de contraargumento: "Admittedly, the initial costs are high. However, the long-term ROI justifies it"',
          'Refutación estructurada: "This argument fails to account for external market factors"',
          'Conclusión con peso: "In light of the evidence presented, the preponderance favors Option A"',
          'En debates y presentaciones persuasivas: "Upon closer examination, we see that..."'
        ],
        whenNotToUse: [
          'En conversación casual → "rebuttal", "proposition", "preponderance" suenan excesivos',
          'Cuando no hay argumento que refutar → evita estructura de debate artificial',
          'No uses "ethos/pathos/logos" sin contexto académico o de persuasión formal'
        ]
      },
      objectives: ["Estructurar argumentos complejos", "Usar concesiones efectivamente", "Refutar con elegancia"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c2-discourse-cohesion"],
      vocabulary: {
        nouns: [
          { id: "l13t8_n1", word: "preponderance", translation: "preponderancia/mayoría", type: "noun", definition: "the greater amount", definitionEs: "la mayor cantidad", example: "The preponderance of evidence...", exampleEs: "La preponderancia de la evidencia...", related: [], difficulty: 2 },
          { id: "l13t8_n2", word: "premise", translation: "premisa", type: "noun", definition: "assumption underlying argument", definitionEs: "suposición subyacente al argumento", example: "The premise is flawed.", exampleEs: "La premisa es defectuosa.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l13t8_v1", word: "concede", translation: "conceder/admitir", type: "verb", definition: "to admit something is true", definitionEs: "admitir que algo es cierto", example: "I'll concede that point.", exampleEs: "Concederé ese punto.", related: [], difficulty: 2 },
          { id: "l13t8_v2", word: "refute", translation: "refutar", type: "verb", definition: "to prove wrong", definitionEs: "probar que está equivocado", example: "I can refute that claim.", exampleEs: "Puedo refutar esa afirmación.", related: [], difficulty: 2 },
        ],
        adjectives: [],
        expressions: [
          { id: "l13t8_e1", word: "Admittedly...", translation: "Es cierto que...", type: "expression", definition: "acknowledging a point", definitionEs: "reconociendo un punto", example: "Admittedly, I could be wrong.", exampleEs: "Es cierto que podría estar equivocado.", related: [], difficulty: 2 },
          { id: "l13t8_e2", word: "Granted, ... however...", translation: "Concedido, ... sin embargo...", type: "expression", definition: "concession then counterpoint", definitionEs: "concesión luego contrapunto", example: "Granted, it's expensive. However, it's worth it.", exampleEs: "Concedido, es caro. Sin embargo, vale la pena.", related: [], difficulty: 2 },
          { id: "l13t8_e3", word: "This argument fails to account for...", translation: "Este argumento no considera...", type: "expression", definition: "pointing out omission", definitionEs: "señalando omisión", example: "This argument fails to account for inflation.", exampleEs: "Este argumento no considera la inflación.", related: [], difficulty: 2 },
          { id: "l13t8_e4", word: "In light of the evidence...", translation: "A la luz de la evidencia...", type: "expression", definition: "considering the proof", definitionEs: "considerando la prueba", example: "In light of the evidence, we should proceed.", exampleEs: "A la luz de la evidencia, deberíamos proceder.", related: [], difficulty: 2 },
          { id: "l13t8_e5", word: "Upon closer examination...", translation: "Tras un examen más detallado...", type: "expression", definition: "after analyzing more", definitionEs: "después de analizar más", example: "Upon closer examination, the flaw becomes clear.", exampleEs: "Tras un examen más detallado, la falla se hace clara.", related: [], difficulty: 2 },
          { id: "l13t8_e6", word: "The crux of the matter is...", translation: "El quid de la cuestión es...", type: "expression", definition: "the central issue is", definitionEs: "el tema central es", example: "The crux of the matter is funding.", exampleEs: "El quid de la cuestión es el financiamiento.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t8_cm1", wrong: "Never acknowledging the opposing view", correct: "Always address counterarguments: 'Admittedly...', 'Granted...'", explanation: "Ignoring counterarguments weakens your credibility", explanationEs: "Ignoring counterarguments weakens your credibility", category: "usage" },
        { id: "l13t8_cm2", wrong: "Using emotional language instead of logical structure", correct: "Balance emotion with evidence and logical connectors", explanation: "Pure emotion without evidence is unconvincing in formal contexts", explanationEs: "Pure emotion without evidence is unconvincing in formal contexts", category: "usage" },
        { id: "l13t8_cm3", wrong: "'I think' without support", correct: "'The evidence suggests...', 'Studies indicate...'", explanation: "Personal opinion needs backing in formal argumentation", explanationEs: "Personal opinion needs backing in formal argumentation", category: "usage" },
        { id: "l13t8_cm4", wrong: "Black-and-white thinking: 'This is completely wrong'", correct: "Nuanced criticism: 'While this has merit, it fails to account for...'", explanation: "Sophisticated argumentation acknowledges complexity", explanationEs: "Sophisticated argumentation acknowledges complexity", category: "usage" },
        { id: "l13t8_cm5", wrong: "Starting with 'I disagree' or 'You're wrong'", correct: "Use 'I see it differently' or 'I'm not entirely convinced'", explanation: "Direct confrontation damages rapport", explanationEs: "Direct confrontation damages rapport", category: "usage" },
        { id: "l13t8_cm6", wrong: "Using 'however' after 'granted' without transition", correct: "Granted, X. However, Y - clear concession-to-counter structure", explanation: "Connectors must signal the logical flow", explanationEs: "Connectors must signal the logical flow", category: "grammar" },
        { id: "l13t8_cm7", wrong: "Claiming 'everyone knows' or 'it's obvious'", correct: "Cite evidence: 'Research indicates...', 'The data shows...'", explanation: "Appeal to authority weakens without evidence", explanationEs: "Appeal to authority weakens without evidence", category: "usage" },
        { id: "l13t8_cm8", wrong: "Ending argument without conclusion signal", correct: "Use 'In light of the evidence...' or 'The preponderance suggests...'", explanation: "Clear conclusion signals help audience follow", explanationEs: "Clear conclusion signals help audience follow", category: "usage" }
      ],
      exercises: [
        { type: "argument-structure", instruction: "Identify the function of each phrase in argumentation", items: [
          { phrase: "The central argument here is that...", function: "Thesis statement", explanation: "States main claim" },
          { phrase: "Admittedly, there are concerns about cost...", function: "Concession", explanation: "Acknowledges opposing point" },
          { phrase: "However, the long-term benefits outweigh...", function: "Counterpoint", explanation: "Responds to concession" },
          { phrase: "This is supported by recent studies showing...", function: "Evidence", explanation: "Provides backing" },
          { phrase: "This argument fails to account for...", function: "Refutation", explanation: "Identifies weakness in opposing view" },
          { phrase: "In light of the evidence presented...", function: "Conclusion signal", explanation: "Introduces final summary" }
        ]},
        { type: "concession-then-counter", instruction: "Match the concession with an appropriate counterpoint", pairs: [
          { concession: "Admittedly, the initial investment is high", counter: "However, the ROI over five years justifies the expense" },
          { concession: "Granted, there are risks involved", counter: "Nevertheless, the potential rewards far outweigh them" },
          { concession: "While this approach has merit", counter: "It fails to address the core issue of scalability" },
          { concession: "It's true that the data sample is small", counter: "Yet the results are consistent with larger studies" }
        ]},
        { type: "weak-to-strong", instruction: "Transform weak arguments into sophisticated ones", items: [
          { weak: "This is wrong", strong: "Upon closer examination, this argument overlooks several key factors, particularly..." },
          { weak: "I think we should do X", strong: "The preponderance of evidence suggests that X would be the optimal approach because..." },
          { weak: "That's not true", strong: "While this perspective has some validity, it fails to account for the fact that..." },
          { weak: "Everyone knows this", strong: "There is broad consensus in the field that..., as evidenced by..." }
        ]},
        { type: "logical-connectors", instruction: "Choose the best connector for each transition", items: [
          { context: "Moving from concession to counterargument", options: ["However", "Therefore", "Similarly", "For example"], correct: 0 },
          { context: "Introducing supporting evidence", options: ["Nevertheless", "This is supported by", "In contrast", "Finally"], correct: 1 },
          { context: "Signaling conclusion", options: ["Furthermore", "For instance", "In light of the evidence", "Additionally"], correct: 2 },
          { context: "Adding another supporting point", options: ["However", "Moreover", "Nevertheless", "Conversely"], correct: 1 }
        ]},
        { type: "argument-transformation", instruction: "Transform the weak argument into sophisticated form", items: [
          { weak: "This is wrong", strong: "Upon closer examination, this argument fails to account for several key factors" },
          { weak: "I think we should do it", strong: "The preponderance of evidence suggests we should proceed" },
          { weak: "That's not true", strong: "While that perspective has some validity, it overlooks the fact that..." },
          { weak: "Your idea won't work", strong: "Admittedly, there are merits to your approach. However, it may not account for..." }
        ]},
        { type: "connector-placement", instruction: "Choose the correct connector for each blank", items: [
          { sentence: "_____ the initial costs are high, the long-term benefits justify the investment", options: ["Admittedly", "Therefore", "For example"], correct: 0 },
          { sentence: "_____ the evidence presented, we recommend proceeding", options: ["In light of", "However", "Moreover"], correct: 0 },
          { sentence: "_____ this argument has merit, it fails to address scalability", options: ["While", "Therefore", "Furthermore"], correct: 0 },
          { sentence: "_____ closer examination, the flaw becomes apparent", options: ["Upon", "For", "With"], correct: 0 }
        ]},
        { type: "argument-structure-identification", instruction: "Identify the argument component", items: [
          { phrase: "Granted, there are risks", component: "Concession" },
          { phrase: "However, the benefits outweigh them", component: "Counterpoint" },
          { phrase: "This is supported by recent studies", component: "Evidence" },
          { phrase: "In light of the evidence, we conclude", component: "Conclusion" }
        ]},
        { type: "sophisticated-refutation", instruction: "Choose the most diplomatic refutation", items: [
          { claim: "This approach is best", options: ["You're wrong", "While this has merit, it may not account for market volatility", "That's stupid"], correct: 1 },
          { claim: "The data proves we're right", options: ["The data is wrong", "Upon closer examination, the data may not support that conclusion", "Nonsense"], correct: 1 },
          { claim: "Everyone agrees", options: ["No they don't", "There appears to be broad consensus, though some stakeholders have expressed concerns", "That's false"], correct: 1 }
        ]}
      ],
      modelDialogue: {
        title: "Sophisticated Argumentation in a Business Meeting",
        context: "Executives debating a strategic decision",
        dialogue: [
          { speaker: "CFO", text: "The central argument for expanding into Asia is market size. However, I have concerns about the execution risk.", note: "States thesis + concession" },
          { speaker: "CEO", text: "Admittedly, there are execution challenges. Granted, we've struggled with international expansion before. However, the circumstances are different now.", note: "Double concession + counter" },
          { speaker: "COO", text: "This argument fails to account for our current operational capacity. Upon closer examination, we'd be overstretched.", note: "Refutation with analysis" },
          { speaker: "CEO", text: "That's a fair point. Let me rephrase: the crux of the matter is timing. Do we expand now with risk, or wait and lose the window?", note: "Acknowledging + reframing" },
          { speaker: "CMO", text: "The preponderance of market research suggests this window closes in 18 months. This is supported by competitor analysis.", note: "Evidence-based support" },
          { speaker: "CFO", text: "In light of the evidence presented, I'm willing to reconsider. But I'd want to see a detailed risk mitigation plan.", note: "Conditional agreement" },
          { speaker: "CEO", text: "Fair. While the risks are real, the cost of inaction may be higher. Let's develop that plan.", note: "Balanced conclusion" }
        ],
        keyTakeaways: [
          "Always acknowledge valid counterpoints (Admittedly, Granted)",
          "Support claims with evidence (supported by, evidence suggests)",
          "Refute respectfully (fails to account for, upon closer examination)",
          "Signal conclusions clearly (in light of the evidence)",
          "Leave room for nuance – avoid absolutist language"
        ]
      },
      pronunciationFocus: {
        title: "Argumentation Vocabulary",
        titleEs: "Vocabulario de argumentación",
        sounds: [
          { symbol: "/prɪ'pɒndərəns/", word: "preponderance", tip: "pri-PON-der-ance, stress on second syllable" },
          { symbol: "/əd'mɪtɪdli/", word: "admittedly", tip: "ad-MIT-ted-ly, stress on second syllable" },
          { symbol: "/'premɪs/", word: "premise", tip: "PREM-iss, stress on first syllable" },
          { symbol: "/kən'siːd/", word: "concede", tip: "con-SEED, stress on second syllable" }
        ]
      },
      culturalNote: {
        title: "Acknowledging Opposing Views in Anglo Culture",
        titleEs: "Reconocer puntos opuestos en cultura anglo",
        content: "Anglo academic and business culture highly values acknowledging opposing views. Saying 'Admittedly, you have a point' before countering actually strengthens your position – it shows intellectual honesty. In contrast, dismissing counterarguments outright ('That's completely wrong') damages your credibility.",
        contentEs: "La cultura académica y empresarial anglo valora mucho reconocer puntos de vista opuestos. Decir 'Admittedly, you have a point' antes de contraargumentar fortalece tu posición – muestra honestidad intelectual. En contraste, descartar contraargumentos de plano ('That's completely wrong') daña tu credibilidad.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "'Admittedly' is used to:", options: ["Introduce evidence", "Acknowledge an opposing point", "State your conclusion", "Ask a question"], correctIndex: 1, explanation: "Admittedly introduces a concession" },
        { question: "To introduce evidence, say:", options: ["I think...", "This is supported by...", "In my opinion...", "Admittedly..."], correctIndex: 1, explanation: "Evidence needs formal introduction" },
        { question: "'The preponderance of evidence' means:", options: ["A small amount of proof", "The majority/weight of evidence", "Contradictory evidence", "No evidence"], correctIndex: 1, explanation: "Preponderance = majority/weight" },
        { question: "After 'Granted...' you typically say:", options: ["Therefore", "For example", "However", "In conclusion"], correctIndex: 2, explanation: "Granted (concession) is followed by counterpoint (however)" }
      ],
      guidedProduction: {
        scenario: "Build a sophisticated argument for or against remote work.",
        promptQuestions: [
          "What is your central thesis? Start with 'The central argument is that...'",
          "What is the strongest counterargument? Acknowledge it with 'Admittedly...'",
          "How do you counter that? Use 'However...' or 'Nevertheless...'",
          "What evidence supports your view? Use 'This is supported by...'",
          "What does the opposing view fail to consider? Use 'This argument fails to account for...'"
        ],
        sampleResponse: "The central argument is that remote work increases productivity for knowledge workers.\n\nAdmittedly, there are valid concerns about collaboration and company culture. Granted, some roles require in-person presence.\n\nHowever, the evidence suggests that for most knowledge work, remote flexibility improves both output and employee satisfaction.\n\nThis is supported by recent studies from Stanford and MIT showing 13-20% productivity gains in remote workers, with lower turnover rates.\n\nThe argument for mandatory office presence fails to account for the significant cost savings, reduced commute stress, and access to global talent that remote work enables.\n\nIn light of the evidence presented, a hybrid model appears to offer the optimal balance."
      },
      connectionToPrevious: "Precise emotional vocabulary helps express positions while maintaining professional composure",
      connectionToNext: "Regional variations affect how argumentation is perceived in different English-speaking cultures"
    },
    {
      id: 9,
      title: "Regional Variations and Accents",
      titleEs: "Variaciones Regionales y Acentos",
      introduction: {
        title: "🗺️ Variaciones Regionales",
        explanation: "El inglés varía enormemente según la región. Conocer estas variaciones te prepara para comunicarte globalmente.",
        keyPoints: [
          "UK: Scottish ('wee', 'aye'), Northern ('nowt', 'owt'), Cockney (rhyming slang)",
          "US: Southern ('y'all', 'fixing to'), Boston ('wicked'), California ('hella', 'gnarly')",
          "Australia: 'arvo' (afternoon), 'brekkie' (breakfast), 'heaps' (lots)",
          "Irish: 'grand' (fine), 'craic' (fun/news), 'yer man' (that guy)",
          "Global: Indian English, Singapore English, South African English"
        ],
        examples: [
          { english: "Scotland: 'It's a wee bit cold, isn't it?' = It's a little bit cold", spanish: "Escocia: 'Hace un poco de frío, ¿no?' = Hace un poco de frío", explanation: "Wee = pequeño (Escocia)" },
          { english: "Southern US: 'Y'all fixin' to go to the store?' = Are you all about to go to the store?", spanish: "Sur de EE.UU.: '¿Van todos a ir a la tienda?' = ¿Van todos a ir a la tienda?", explanation: "Y'all = ustedes; fixin' to = a punto de" },
          { english: "Australia: 'See you this arvo for brekkie?' Wait... = afternoon for breakfast?", spanish: "Australia: '¿Nos vemos esta tarde para el desayuno?' Espera... = ¿tarde para desayuno?", explanation: "Arvo = afternoon; brekkie = breakfast (humor sobre abreviaciones australianas)" }
        ],
        tips: [
          "💡 'Y'all' es la segunda persona plural del sur de EE.UU. - muy útil",
          "💡 Los australianos abrevian TODO: afternoon→arvo, breakfast→brekkie",
          "💡 'Grand' en Irlanda significa 'bien/fine', no 'grandioso'"
        ],
        whenToUse: [
          'En Escocia: "It\'s a wee bit cold, isn\'t it?" para sonar local',
          'Sur de EE.UU.: "Y\'all fixin\' to go?" para conectar con esa audiencia',
          'Australia: "See you this arvo" – entender y usar abreviaciones locales',
          'Irlanda: "It\'s grand" = está bien; reconocer "craic" (diversión/noticias)'
        ],
        whenNotToUse: [
          'No imites acentos o dialectos que no dominas → puede sonar condescendiente',
          'En escritura formal internacional → evita regionalismos como "y\'all", "wee"',
          'No asumas que "grand" significa "grandioso" en Irlanda → significa "fine/okay"'
        ]
      },
      objectives: ["Entender variaciones regionales", "Reconocer acentos principales", "Adaptarse a diferentes ingleses"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-register-shift"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l13t9_e1", word: "y'all (Southern US)", translation: "ustedes/todos ustedes", type: "expression", definition: "you all", definitionEs: "todos ustedes", example: "Y'all come back now!", exampleEs: "¡Vuelvan pronto!", related: [], difficulty: 1 },
          { id: "l13t9_e2", word: "wee (Scottish)", translation: "pequeño/un poco", type: "expression", definition: "small/little", definitionEs: "pequeño/poco", example: "It's a wee bit expensive.", exampleEs: "Es un poco caro.", related: [], difficulty: 1 },
          { id: "l13t9_e3", word: "arvo (Australian)", translation: "tarde", type: "expression", definition: "afternoon", definitionEs: "tarde", example: "See you this arvo.", exampleEs: "Nos vemos esta tarde.", related: [], difficulty: 1 },
          { id: "l13t9_e4", word: "grand (Irish)", translation: "bien/okay", type: "expression", definition: "fine/good", definitionEs: "bien/bueno", example: "How are you? Grand, thanks.", exampleEs: "¿Cómo estás? Bien, gracias.", related: [], difficulty: 1 },
          { id: "l13t9_e5", word: "heaps (Australian)", translation: "mucho/montones", type: "expression", definition: "lots", definitionEs: "mucho", example: "Thanks heaps!", exampleEs: "¡Muchas gracias!", related: [], difficulty: 1 },
          { id: "l13t9_e6", word: "fixin' to (Southern US)", translation: "a punto de", type: "expression", definition: "about to", definitionEs: "a punto de", example: "I'm fixin' to leave.", exampleEs: "Estoy a punto de irme.", related: [], difficulty: 2 },
          { id: "l13t9_e7", word: "the craic (Irish)", translation: "la diversión/las noticias", type: "expression", definition: "fun/news/gossip", definitionEs: "diversión/noticias/chisme", example: "What's the craic?", exampleEs: "¿Qué hay de nuevo?", related: [], difficulty: 2 },
          { id: "l13t9_e8", word: "wicked (Boston)", translation: "muy/super", type: "expression", definition: "very/really (intensifier)", definitionEs: "muy/realmente (intensificador)", example: "That's wicked good!", exampleEs: "¡Eso está super bueno!", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t9_cm1", wrong: "Imitating an accent you can't do well", correct: "Understand the vocabulary without attempting the accent", explanation: "Bad accent imitation can seem mocking; focus on understanding", explanationEs: "Bad accent imitation can seem mocking; focus on understanding", category: "pronunciation" },
        { id: "l13t9_cm2", wrong: "Using regional expressions with the wrong audience", correct: "Use y'all with Southerners; use 'heaps' with Australians", explanation: "Regional terms work best with people from that region", explanationEs: "Regional terms work best with people from that region", category: "vocabulary" },
        { id: "l13t9_cm3", wrong: "Assuming all British/American/Australian English is the same", correct: "Recognize vast regional variation within each country", explanation: "London ≠ Glasgow; New York ≠ Texas; Sydney ≠ Melbourne", explanationEs: "London ≠ Glasgow; New York ≠ Texas; Sydney ≠ Melbourne", category: "usage" },
        { id: "l13t9_cm4", wrong: "Correcting someone's regional usage as 'wrong'", correct: "Recognize regional variation as valid variation, not error", explanation: "'Y'all' is correct Southern US; 'wee' is correct Scottish", explanationEs: "'Y'all' is correct Southern US; 'wee' is correct Scottish", category: "usage" },
        { id: "l13t9_cm5", wrong: "Using 'grand' to mean magnificent with Irish people", correct: "In Ireland 'grand' means fine/okay - not impressive", explanation: "False friend - grand has different meaning in Irish English", explanationEs: "False friend - grand has different meaning in Irish English", category: "false-friend" },
        { id: "l13t9_cm6", wrong: "Using 'heaps' with Americans", correct: "Americans say 'a lot' or 'tons' - heaps is Australian", explanation: "Regional collocation - heaps is Australian", explanationEs: "Regional collocation", category: "vocabulary" },
        { id: "l13t9_cm7", wrong: "Assuming 'wicked' means evil in Boston", correct: "In Boston, 'wicked' = very/really as intensifier", explanation: "Regional semantic shift - wicked means very in Boston", explanationEs: "Regional semantic shift", category: "false-friend" },
        { id: "l13t9_cm8", wrong: "Using 'arvo' or 'brekkie' with British colleagues", correct: "Use 'afternoon' and 'breakfast' - Australian abbreviations", explanation: "Match regional vocabulary to audience", explanationEs: "Match regional vocabulary to audience", category: "vocabulary" }
      ],
      exercises: [
        { type: "region-identification", instruction: "Identify which region each expression comes from", items: [
          { expression: "Y'all come back now!", region: "Southern US", explanation: "Y'all = you all (Southern)" },
          { expression: "It's a wee bit cold today", region: "Scottish", explanation: "Wee = little (Scottish)" },
          { expression: "See you this arvo!", region: "Australian", explanation: "Arvo = afternoon (Australian)" },
          { expression: "That's wicked cool!", region: "Boston/New England", explanation: "Wicked = very (Boston)" },
          { expression: "What's the craic?", region: "Irish", explanation: "Craic = fun/news (Irish)" },
          { expression: "How are you? Grand, thanks!", region: "Irish", explanation: "Grand = fine (Irish)" },
          { expression: "Thanks heaps!", region: "Australian", explanation: "Heaps = lots (Australian)" },
          { expression: "I'm fixin' to leave", region: "Southern US", explanation: "Fixin' to = about to (Southern)" }
        ]},
        { type: "translation-to-standard", instruction: "Translate regional English to standard English", items: [
          { regional: "Y'all fixin' to head out?", standard: "Are you all about to leave?" },
          { regional: "That's a wee problem", standard: "That's a small problem" },
          { regional: "See you this arvo for brekkie... wait", standard: "See you this afternoon for breakfast... (joke about Australian abbreviations)" },
          { regional: "She's wicked smart", standard: "She's very/really smart" },
          { regional: "How's the craic?", standard: "What's new? / What's happening?" },
          { regional: "Thanks heaps!", standard: "Thanks a lot!" }
        ]},
        { type: "accent-features", instruction: "Match the accent feature to the region", items: [
          { feature: "Dropping 'r' after vowels (non-rhotic)", regions: "British RP, Boston, Australian, New Zealand" },
          { feature: "Strong 'r' sounds (rhotic)", regions: "General American, Scottish, Irish" },
          { feature: "Rising intonation at end of statements", regions: "Australian (uptalk)" },
          { feature: "'TH' becoming 'D' or 'T'", regions: "Irish, some New York" },
          { feature: "Glottal stop for 'T'", regions: "London Cockney, Estuary English" }
        ]},
        { type: "cultural-context", instruction: "When would you use each regional expression?", items: [
          { expression: "Y'all", context: "When addressing multiple people, especially in Southern US or to sound friendly/inclusive" },
          { expression: "Grand", context: "With Irish people, or in Ireland, to say 'fine' or 'great'" },
          { expression: "Heaps", context: "With Australians or in Australia to mean 'lots' or 'very much'" },
          { expression: "Wicked", context: "With Boston/New England people as an intensifier meaning 'very'" }
        ]},
        { type: "accent-feature-identification", instruction: "Identify the accent feature in each description", items: [
          { feature: "Non-rhotic (r-dropping)", regions: ["British RP", "Boston", "Australian"], explanation: "R not pronounced after vowels" },
          { feature: "Uptalk (rising tone on statements)", regions: ["Australian", "California"], explanation: "Statements sound like questions" },
          { feature: "Glottal stop for T", regions: ["London Cockney", "Estuary English"], explanation: "Butter = bu'er" },
          { feature: "TH-fronting (th → f)", regions: ["London", "Some urban UK"], explanation: "Think = fink" }
        ]},
        { type: "regional-vocabulary-matching", instruction: "Match the regional term to standard English", items: [
          { regional: "y'all", standard: "you all" },
          { regional: "wee", standard: "small/little" },
          { regional: "arvo", standard: "afternoon" },
          { regional: "brekkie", standard: "breakfast" },
          { regional: "fixin' to", standard: "about to" }
        ]},
        { type: "regional-appropriateness", instruction: "Is the regional expression appropriate for the context?", items: [
          { expression: "Y'all", context: "Email to Texas client", appropriate: true },
          { expression: "Heaps", context: "Formal report for US audience", appropriate: false },
          { expression: "Grand", context: "Conversation in Dublin", appropriate: true },
          { expression: "Wicked", context: "Boston business meeting", appropriate: true }
        ]},
        { type: "regional-variation-comprehension", instruction: "What does each regional expression mean?", items: [
          { expression: "What's the craic?", meaning: "What's new? / What's happening?" },
          { expression: "I'm knackered", meaning: "I'm exhausted (UK)" },
          { expression: "That's heaps good", meaning: "That's very good (Australian)" },
          { expression: "I'm fixin' to leave", meaning: "I'm about to leave (Southern US)" }
        ]}
      ],
      modelDialogue: {
        title: "International Team Call with Regional English",
        context: "Team members from different regions using their natural expressions",
        dialogue: [
          { speaker: "Texas (US)", text: "Hey y'all! How's everyone doing? I'm fixin' to share my screen.", note: "Southern US expressions" },
          { speaker: "Dublin (Ireland)", text: "Grand here! What's the craic with the project?", note: "Irish expressions" },
          { speaker: "Sydney (Australia)", text: "All good! Got heaps done this arvo actually.", note: "Australian expressions" },
          { speaker: "Glasgow (Scotland)", text: "Aye, we've made wee bit of progress on our end too.", note: "Scottish expressions" },
          { speaker: "Boston (US)", text: "That's wicked good news! Let's keep the momentum.", note: "Boston intensifier" },
          { speaker: "London (UK)", text: "Brilliant. Shall we crack on then?", note: "British expression for 'get started'" },
          { speaker: "Texas (US)", text: "Sounds good to me. Let me go ahead and pull up the dashboard.", note: "Neutral + Southern 'go ahead'" },
          { speaker: "All", text: "(collaborative work proceeds)", note: "Everyone understood despite regional differences" }
        ],
        keyTakeaways: [
          "Regional expressions add personality and authenticity",
          "Most native speakers understand other regional varieties",
          "Code-switching to standard English when needed for clarity",
          "Appreciate regional diversity rather than seeing it as 'wrong'"
        ]
      },
      pronunciationFocus: {
        title: "Regional Expression Pronunciation",
        titleEs: "Pronunciación de expresiones regionales",
        sounds: [
          { symbol: "/jɔːl/", word: "y'all", tip: "Like 'yawl', one syllable, not 'you all'" },
          { symbol: "/wiː/", word: "wee (Scottish)", tip: "Like 'we' but often with Scottish accent" },
          { symbol: "/'ɑːvəʊ/", word: "arvo (Australian)", tip: "AR-voh" },
          { symbol: "/kræk/", word: "craic (Irish)", tip: "Like 'crack' - not 'creek' or 'cray-ick'" }
        ]
      },
      culturalNote: {
        title: "Regional Variation and Identity",
        titleEs: "Variación regional e identidad",
        content: "English regional variation is not about correctness – it's about identity. Using regional expressions can build rapport with people from those regions. However, attempting an accent you can't do well can backfire. It's better to understand and appreciate regional English than to imitate it poorly.",
        contentEs: "La variación regional del inglés no es sobre corrección – es sobre identidad. Usar expresiones regionales puede crear rapport con personas de esas regiones. Sin embargo, intentar un acento que no dominas puede ser contraproducente. Es mejor entender y apreciar el inglés regional que imitarlo mal.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "'Y'all' is from which region?", options: ["Australian", "Scottish", "Southern US", "Irish"], correctIndex: 2, explanation: "Y'all = you all (Southern US)" },
        { question: "'Arvo' is Australian for:", options: ["Car", "Afternoon", "Great", "Hello"], correctIndex: 1, explanation: "Arvo = afternoon (Australian abbreviation)" },
        { question: "In Irish English, 'grand' means:", options: ["Large", "Expensive", "Fine/Good", "Grandmother"], correctIndex: 2, explanation: "Grand = fine/okay in Irish English" },
        { question: "'Wicked smart' uses 'wicked' from:", options: ["British slang", "Boston/New England", "Australian", "Southern US"], correctIndex: 1, explanation: "Wicked as intensifier = Boston area" }
      ],
      guidedProduction: {
        scenario: "Practice understanding and responding to regional English varieties.",
        promptQuestions: [
          "How would you respond to an Australian colleague who says 'See you this arvo!'?",
          "Your Texas colleague says 'Y'all coming to the meeting?' How do you respond?",
          "An Irish colleague asks 'What's the craic?' - what are they asking?",
          "Someone from Boston says 'That presentation was wicked good!' What do they mean?"
        ],
        sampleResponse: "AUSTRALIAN: 'See you this arvo!' → 'Sounds good! See you this afternoon!' (Using standard if unsure, or matching: 'See you then!')\n\nTEXAN: 'Y'all coming to the meeting?' → 'Yes, we'll all be there!' or matching their energy: 'You bet! See y'all there.'\n\nIRISH: 'What's the craic?' → They're asking 'What's happening?' or 'What's new?' I'd respond: 'Not much! How about you?'\n\nBOSTON: 'Wicked good' → They mean 'really/very good' - it's high praise! I'd respond: 'Thanks! That means a lot!'"
      },
      connectionToPrevious: "Regional variation affects how argumentation is expressed and received",
      connectionToNext: "Spontaneous speech patterns also vary by region but share common features"
    },
    {
      id: 10,
      title: "Mastering Spontaneous Speech",
      titleEs: "Dominando el Habla Espontánea",
      introduction: {
        title: "🎤 Habla Espontánea",
        explanation: "El nivel final es hablar espontáneamente con la fluidez, los fillers naturales, las auto-correcciones y la improvisación de un nativo.",
        keyPoints: [
          "Fillers naturales: 'you know', 'I mean', 'like', 'sort of', 'kind of'",
          "Auto-corrección: 'Well, actually...', 'What I mean is...', 'Let me rephrase that'",
          "Pensando en voz alta: 'Let me think...', 'How can I put this?', 'Where was I?'",
          "Backchanneling: 'Uh-huh', 'Right', 'I see', 'Mm-hmm', 'Exactly'",
          "Improvisación: cambiar de dirección fluidamente, recuperarse de errores"
        ],
        examples: [
          { english: "So, like, I was thinking, you know, maybe we could, sort of, restructure the team? What I mean is – let me rephrase that – we need fresh perspectives.", spanish: "Entonces, como que, estaba pensando, sabes, tal vez podríamos, como, reestructurar el equipo? Lo que quiero decir es – déjame reformular eso – necesitamos perspectivas frescas.", explanation: "Fillers + auto-corrección natural" },
          { english: "A: The meeting is at 3. B: Uh-huh. A: In the main conference room. B: Right. A: Bring your laptop. B: Got it.", spanish: "A: La reunión es a las 3. B: Ajá. A: En la sala de conferencias principal. B: Bien. A: Trae tu laptop. B: Entendido.", explanation: "Backchanneling natural" },
          { english: "Where was I? Oh right – so anyway, the point I was trying to make...", spanish: "¿En qué estaba? Ah sí – entonces, bueno, el punto que trataba de hacer...", explanation: "Recuperándose de interrupción" }
        ],
        tips: [
          "💡 Los fillers son NATURALES - los nativos los usan constantemente",
          "💡 'Sort of' y 'kind of' suavizan afirmaciones",
          "💡 El backchanneling muestra que estás escuchando activamente"
        ],
        whenToUse: [
          'Pensando en voz alta: "So, like, I was thinking, you know, maybe we could restructure..."',
          'Auto-corrección natural: "What I mean is – let me rephrase that – we need fresh perspectives"',
          'Backchanneling activo: "Uh-huh", "Right", "I see", "Exactly" para mostrar que escuchas',
          'Suavizar afirmaciones: "It\'s sort of complicated" en lugar de declaraciones absolutas'
        ],
        whenNotToUse: [
          'En presentaciones formales grabadas → reduce fillers excesivos ("like", "you know")',
          'En escritura → los fillers no se trasladan; escribe con precisión',
          'No abuses de "like" cada dos palabras → los nativos lo usan con moderación'
        ]
      },
      objectives: ["Usar fillers naturalmente", "Hacer auto-correcciones fluidas", "Participar en conversaciones espontáneas"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c2-discourse-cohesion", "c2-metalinguistic-hedging"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l13t10_e1", word: "you know", translation: "sabes/ya sabes", type: "expression", definition: "filler for emphasis", definitionEs: "filler para énfasis", example: "It's, you know, complicated.", exampleEs: "Es, ya sabes, complicado.", related: [], difficulty: 1 },
          { id: "l13t10_e2", word: "I mean", translation: "o sea/quiero decir", type: "expression", definition: "clarifying filler", definitionEs: "filler para clarificar", example: "I mean, it's not perfect.", exampleEs: "O sea, no es perfecto.", related: [], difficulty: 1 },
          { id: "l13t10_e3", word: "sort of / kind of", translation: "como que/algo así", type: "expression", definition: "hedging filler", definitionEs: "filler para suavizar", example: "I sort of agree.", exampleEs: "Como que estoy de acuerdo.", related: [], difficulty: 1 },
          { id: "l13t10_e4", word: "Let me rephrase that", translation: "Déjame reformular eso", type: "expression", definition: "self-correction", definitionEs: "auto-corrección", example: "That came out wrong. Let me rephrase that.", exampleEs: "Eso salió mal. Déjame reformular eso.", related: [], difficulty: 1 },
          { id: "l13t10_e5", word: "Where was I?", translation: "¿En qué estaba?", type: "expression", definition: "getting back on track", definitionEs: "volviendo al tema", example: "Sorry, got distracted. Where was I?", exampleEs: "Perdón, me distraje. ¿En qué estaba?", related: [], difficulty: 1 },
          { id: "l13t10_e6", word: "Uh-huh / Mm-hmm / Right / I see", translation: "Ajá / Mmm / Bien / Ya veo", type: "expression", definition: "backchanneling", definitionEs: "señales de que estás escuchando", example: "Uh-huh, I see what you mean.", exampleEs: "Ajá, veo lo que quieres decir.", related: [], difficulty: 1 },
          { id: "l13t10_e7", word: "What I'm trying to say is...", translation: "Lo que trato de decir es...", type: "expression", definition: "clarifying statement", definitionEs: "aclarando declaración", example: "What I'm trying to say is, we need more time.", exampleEs: "Lo que trato de decir es, necesitamos más tiempo.", related: [], difficulty: 1 },
          { id: "l13t10_e8", word: "So anyway...", translation: "Entonces, bueno...", type: "expression", definition: "returning to main point", definitionEs: "volviendo al punto principal", example: "So anyway, as I was saying...", exampleEs: "Entonces, bueno, como decía...", related: [], difficulty: 1 },
          { id: "l13t10_e9", word: "Actually, no, wait...", translation: "De hecho, no, espera...", type: "expression", definition: "self-correcting mid-sentence", definitionEs: "auto-corrigiéndose a mitad de oración", example: "It was Tuesday... actually, no, wait – Wednesday.", exampleEs: "Fue el martes... de hecho, no, espera – miércoles.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t10_cm1", wrong: "Using too many fillers (like, like, like, you know, you know)", correct: "Use fillers sparingly and vary them", explanation: "Excessive fillers make you sound uncertain; balance is key", explanationEs: "Excessive fillers make you sound uncertain; balance is key", category: "usage" },
        { id: "l13t10_cm2", wrong: "Not using any fillers (speaking like a textbook)", correct: "Natural speech includes some fillers and hedging", explanation: "Zero fillers sounds robotic; natives use them constantly", explanationEs: "Zero fillers sounds robotic; natives use them constantly", category: "usage" },
        { id: "l13t10_cm3", wrong: "Staying silent instead of using thinking phrases", correct: "Use 'Let me think...', 'How can I put this?'", explanation: "Silence can be awkward; thinking phrases fill the gap naturally", explanationEs: "Silence can be awkward; thinking phrases fill the gap naturally", category: "usage" },
        { id: "l13t10_cm4", wrong: "Not backchanneling when listening", correct: "Use 'uh-huh', 'right', 'I see' to show engagement", explanation: "Silence while listening can seem like disinterest or confusion", explanationEs: "Silence while listening can seem like disinterest or confusion", category: "usage" },
        { id: "l13t10_cm5", wrong: "Using 'like' in every sentence in formal presentation", correct: "Reserve 'like' for casual speech; use 'such as' or 'for example' formally", explanation: "Register - like as filler is too casual for formal contexts", explanationEs: "Register - like as filler is too casual for formal contexts", category: "usage" },
        { id: "l13t10_cm6", wrong: "Saying 'Actually, no' without completing the correction", correct: "Complete the self-correction: 'Actually, no, wait - it was Wednesday'", explanation: "Incomplete self-correction confuses listeners", explanationEs: "Incomplete self-correction confuses listeners", category: "usage" },
        { id: "l13t10_cm7", wrong: "Overusing 'you know' when the listener clearly doesn't know", correct: "Use 'you know' only when shared knowledge exists", explanation: "Pragmatic failure - 'you know' implies shared context", explanationEs: "Pragmatic failure - 'you know' implies shared context", category: "usage" },
        { id: "l13t10_cm8", wrong: "Using 'I mean' to start every sentence", correct: "Vary discourse markers: 'What I'm trying to say is...', 'In other words...'", explanation: "Repetitive fillers sound uncertain", explanationEs: "Repetitive fillers sound uncertain", category: "usage" }
      ],
      exercises: [
        { type: "filler-identification", instruction: "Identify the type of filler/discourse marker", items: [
          { phrase: "you know", type: "emphasis/connection", explanation: "Creates connection with listener" },
          { phrase: "I mean", type: "clarification", explanation: "Signals clarification coming" },
          { phrase: "like", type: "approximation/quotation", explanation: "Approximates or introduces quotes" },
          { phrase: "sort of / kind of", type: "hedging", explanation: "Softens/approximates the statement" },
          { phrase: "so anyway", type: "topic return", explanation: "Returns to main point after digression" },
          { phrase: "let me think", type: "thinking time", explanation: "Buys time while formulating thought" }
        ]},
        { type: "backchanneling-practice", instruction: "Choose appropriate backchannel responses", items: [
          { speaker: "The meeting's been moved to 3pm.", responses: ["Uh-huh", "I disagree", "Why?"], best: 0, explanation: "Simple acknowledgment" },
          { speaker: "And then she said she was quitting!", responses: ["Whatever", "Really?!", "I don't care"], best: 1, explanation: "Showing interest in surprising news" },
          { speaker: "So we need to finish by Friday.", responses: ["Right, got it", "No", "Stop talking"], best: 0, explanation: "Confirming understanding" },
          { speaker: "It's been a really tough week.", responses: ["Mm-hmm, I hear you", "So what?", "Okay"], best: 0, explanation: "Empathetic listening signal" }
        ]},
        { type: "self-correction-practice", instruction: "Practice natural self-correction phrases", items: [
          { mistake: "Wrong word", correction: "I mean...", example: "The meeting is Monday – I mean, Tuesday." },
          { mistake: "Wrong information mid-sentence", correction: "Actually, no, wait...", example: "It costs 50... actually, no, wait – 55 dollars." },
          { mistake: "Unclear phrasing", correction: "Let me rephrase that...", example: "What I'm trying to say is... let me rephrase that – we need more time." },
          { mistake: "Lost train of thought", correction: "Where was I?", example: "So anyway... where was I? Oh right, the deadline." }
        ]},
        { type: "natural-flow", instruction: "Compare textbook vs natural spontaneous speech", items: [
          { textbook: "I believe the project will be successful.", natural: "I think, you know, the project's gonna be successful – like, I'm pretty confident about it." },
          { textbook: "Could you explain that again?", natural: "Sorry, I'm not sure I follow. Could you, like, run that by me again?" },
          { textbook: "I disagree with that point.", natural: "I mean, I see what you're saying, but I sort of disagree? If that makes sense." },
          { textbook: "The answer is approximately 50.", natural: "So it's, like, around 50? Give or take." }
        ]},
        { type: "discourse-marker-identification", instruction: "Identify the function of each discourse marker", items: [
          { marker: "you know", function: "Connection/emphasis" },
          { marker: "I mean", function: "Clarification" },
          { marker: "sort of", function: "Hedging" },
          { marker: "so anyway", function: "Return to topic" },
          { marker: "let me think", function: "Buying time" }
        ]},
        { type: "filler-fill-blank", instruction: "Complete the spontaneous speech with appropriate filler", items: [
          { sentence: "It's, ___, complicated", options: ["you know", "therefore", "however"], correct: 0 },
          { sentence: "I ___, I see what you're saying, but...", options: ["mean", "think", "believe"], correct: 0 },
          { sentence: "So ___, where was I?", options: ["anyway", "therefore", "however"], correct: 0 },
          { sentence: "I ___ of agree with that", options: ["sort", "kind", "type"], correct: 0 }
        ]},
        { type: "backchannel-appropriateness", instruction: "Choose the best backchannel for each speaker statement", items: [
          { speaker: "The deadline's been moved to Monday", backchannel: "Right, got it" },
          { speaker: "And then she just quit!", backchannel: "Really?!" },
          { speaker: "It's been a really tough week", backchannel: "Mm-hmm, I hear you" },
          { speaker: "So we need the report by Friday", backchannel: "Okay, will do" }
        ]},
        { type: "self-correction-practice", instruction: "Complete the self-correction appropriately", items: [
          { start: "The meeting is at 2...", correction: "actually, no, wait – 3" },
          { start: "What I'm trying to say is...", correction: "let me rephrase that – we need more time" },
          { start: "So anyway...", correction: "where was I? Oh right – the deadline" },
          { start: "It was Tuesday...", correction: "actually, Wednesday" }
        ]}
      ],
      modelDialogue: {
        title: "Spontaneous Conversation with Natural Speech Features",
        context: "Casual work conversation with all the features of natural speech",
        dialogue: [
          { speaker: "Alex", text: "Hey, so, you know that project we talked about?", note: "'So' + 'you know' = natural opening" },
          { speaker: "Jordan", text: "Uh-huh, the marketing thing?", note: "Backchannel + clarifying" },
          { speaker: "Alex", text: "Yeah, that one. So I was thinking, like, maybe we could sort of restructure it?", note: "'Like' + 'sort of' = hedging" },
          { speaker: "Jordan", text: "Right, right. In what way?", note: "Doubled backchannel + follow-up" },
          { speaker: "Alex", text: "Well... let me think... what I mean is, we need a different approach. The current one is... how can I put this... not working.", note: "Thinking phrases + self-correction" },
          { speaker: "Jordan", text: "I see what you're saying. So you're suggesting...?", note: "Backchannel + prompting continuation" },
          { speaker: "Alex", text: "Actually, no, wait – I should rephrase that. It IS working, but not efficiently. Does that make sense?", note: "Self-correction + comprehension check" },
          { speaker: "Jordan", text: "Totally. Yeah, I kind of agree. We should... oh, where was I going with this? Oh right – we should meet with Sarah.", note: "Agreement + lost thought + recovery" },
          { speaker: "Alex", text: "Mm-hmm. Exactly. Good call.", note: "Backchannels + agreement" }
        ],
        keyTakeaways: [
          "Fillers are normal and expected in spontaneous speech",
          "Backchanneling shows active listening",
          "Self-correction shows thoughtfulness, not weakness",
          "Hedging (sort of, kind of) softens statements appropriately"
        ]
      },
      pronunciationFocus: {
        title: "Discourse Markers and Fillers",
        titleEs: "Marcadores discursivos y fillers",
        sounds: [
          { symbol: "/jə 'noʊ/", word: "you know", tip: "Reduces to 'y'know' /jənoʊ/ in fast speech" },
          { symbol: "/aɪ 'miːn/", word: "I mean", tip: "Often sounds like 'ah mean' in casual speech" },
          { symbol: "/'sɔːrt əv/", word: "sort of", tip: "Reduces to 'sorta' /'sɔːrtə/" },
          { symbol: "/'kaɪnd əv/", word: "kind of", tip: "Reduces to 'kinda' /'kaɪndə/" }
        ]
      },
      culturalNote: {
        title: "Fillers and Natural Speech",
        titleEs: "Fillers y habla natural",
        content: "Native English speakers use fillers, hedges, and discourse markers constantly. This isn't 'bad English' – it's natural speech. In fact, speaking without ANY fillers sounds unnatural, like reading from a script. The key is balance: enough to sound human, not so many that you seem uncertain or unprepared.",
        contentEs: "Los hablantes nativos usan fillers, hedges y marcadores discursivos constantemente. No es 'mal inglés' – es habla natural. De hecho, hablar sin NINGÚN filler suena antinatural, como leer un guion. La clave es el equilibrio: suficiente para sonar humano, no tantos que parezcas inseguro o desprevenido.",
        region: "Global"
      },
      consolidationQuiz: [
        { question: "Using 'sort of' or 'kind of' is called:", options: ["Hedging", "Backchanneling", "Self-correction", "Thinking time"], correctIndex: 0, explanation: "Hedging = softening/approximating" },
        { question: "'Uh-huh', 'right', 'I see' are examples of:", options: ["Fillers", "Backchanneling", "Hedging", "Self-correction"], correctIndex: 1, explanation: "Backchanneling = showing you're listening" },
        { question: "A speaker who uses ZERO fillers sounds:", options: ["Professional", "Natural", "Robotic/unnatural", "Intelligent"], correctIndex: 2, explanation: "Natural speech includes some fillers" },
        { question: "'Let me rephrase that' is used for:", options: ["Starting a conversation", "Self-correction", "Backchanneling", "Ending discussion"], correctIndex: 1, explanation: "Signals speaker is about to clarify/correct themselves" }
      ],
      guidedProduction: {
        scenario: "Practice speaking spontaneously with natural speech features. Don't write a script – speak naturally!",
        promptQuestions: [
          "Explain your job using natural speech (include fillers, hedging, thinking time)",
          "Describe a recent movie or show you watched (use 'like', 'you know', 'I mean')",
          "Practice backchanneling: respond to 'The deadline got moved up to Monday'",
          "Correct yourself mid-sentence: 'The meeting is at 2... actually, no...'",
          "Return to your point after an interruption: 'So anyway...'"
        ],
        sampleResponse: "JOB EXPLANATION: 'So, like, I work in marketing? You know, mostly digital stuff. I mean, I do a bit of everything, really. Sort of a generalist, I guess. Let me think... what I mainly do is, like, social media and content. Does that make sense?'\n\nMOVIE DESCRIPTION: 'Oh, I watched this movie, you know, the one with – what's his name – anyway, it was, like, really good. I mean, sort of confusing at first, but then it all comes together.'\n\nBACKCHANNELING: 'Monday? Oh wow. Okay. Right. Got it.'\n\nSELF-CORRECTION: 'The meeting is at 2... actually, no, wait – 3. Sorry, 3pm.'\n\nRETURNING: 'So anyway, where was I? Oh right – I was saying we need to revise the timeline.'"
      },
      connectionToPrevious: "Regional accents affect how these discourse markers sound",
      connectionToNext: "Humor and wordplay build on spontaneous speech patterns"
    },
    {
      id: 11,
      title: "Humor, Wordplay and Language Games",
      titleEs: "Humor, Juegos de Palabras y Juegos Lingüísticos",
      introduction: {
        title: "😄 Humor, Juegos de Palabras y Juegos Lingüísticos",
        explanation: "El humor en inglés depende de juegos de palabras, doble sentido, ironía y formas de comedia. Dominar estos elementos marca el nivel más alto de competencia pragmática y cultural.",
        keyPoints: [
          "Pun: juego de palabras con doble significado",
          "Double entendre: expresión con significado inocente y sugerente",
          "Irony vs sarcasm: decir lo opuesto del significado literal",
          "Deadpan: humor sin expresión facial",
          "Wit, banter, slapstick: diferentes estilos de humor"
        ],
        examples: [
          { english: "Time flies like an arrow; fruit flies like a banana. (pun)", spanish: "El tiempo vuela como una flecha; las moscas de la fruta gustan del plátano. (juego de palabras)", explanation: "Pun con 'flies' y 'like'" },
          { english: "That was a deadpan delivery – I couldn't tell if he was joking.", spanish: "Esa fue una entrega impasible – no sabía si bromeaba.", explanation: "Deadpan humor" },
          { english: "The satire targeted corporate greed effectively.", spanish: "La sátira apuntó efectivamente a la codicia corporativa.", explanation: "Satire" }
        ],
        tips: [
          "💡 'Pun' = juego de palabras; 'double entendre' = doble sentido",
          "💡 'Deadpan' = humor con expresión seria",
          "💡 La ironía requiere que la audiencia entienda el contexto"
        ],
        whenToUse: [
          'En networking social: "Time flies like an arrow; fruit flies like a banana" – puns para romper el hielo',
          'En presentaciones creativas: sátira y deadpan para audiencias sofisticadas',
          'En conversaciones entre colegas: banter y wit para construir rapport',
          'En escritura creativa: double entendres que requieren doble lectura'
        ],
        whenNotToUse: [
          'En documentos formales o legales → el humor y los puns añaden ambigüedad',
          'Con audiencia multicultural → los puns dependen del inglés; pueden no traducirse',
          'En feedback crítico → evita sarcasmo; puede malinterpretarse sin tono'
        ]
      },
      objectives: ["Comprender juegos de palabras", "Usar humor apropiadamente", "Distinguir tipos de humor"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-pragmatic-implicature", "c2-vague-language"],
      vocabulary: {
        nouns: [
          { id: "l13t11_n1", word: "pun", translation: "juego de palabras", type: "noun", definition: "play on words with double meaning", definitionEs: "juego de palabras con doble significado", example: "That was a clever pun.", exampleEs: "Ese fue un juego de palabras ingenioso.", related: [], difficulty: 2 },
          { id: "l13t11_n2", word: "double entendre", translation: "doble sentido", type: "noun", definition: "phrase with innocent and suggestive meaning", definitionEs: "frase con significado inocente y sugerente", example: "The joke relied on a double entendre.", exampleEs: "El chiste dependía de un doble sentido.", related: [], difficulty: 2 },
          { id: "l13t11_n3", word: "irony", translation: "ironía", type: "noun", definition: "saying opposite of literal meaning", definitionEs: "decir lo opuesto del significado literal", example: "The irony was not lost on the audience.", exampleEs: "La ironía no se le escapó a la audiencia.", related: ["ironic"], difficulty: 1 },
          { id: "l13t11_n4", word: "deadpan", translation: "impasible/sin expresión", type: "noun", definition: "humor delivered without expression", definitionEs: "humor entregado sin expresión", example: "He delivered it deadpan.", exampleEs: "Lo dijo con cara impasible.", related: [], difficulty: 2 },
          { id: "l13t11_n5", word: "wit", translation: "ingenio", type: "noun", definition: "clever humor", definitionEs: "humor ingenioso", example: "Her wit kept the conversation lively.", exampleEs: "Su ingenio mantuvo la conversación animada.", related: ["witty"], difficulty: 2 },
          { id: "l13t11_n6", word: "banter", translation: "bromas/charla ligera", type: "noun", definition: "playful teasing conversation", definitionEs: "conversación de bromas juguetonas", example: "They exchanged banter throughout the meeting.", exampleEs: "Intercambiaron bromas durante la reunión.", related: [], difficulty: 2 },
          { id: "l13t11_n7", word: "slapstick", translation: "comedia física", type: "noun", definition: "physical comedy", definitionEs: "comedia física", example: "The show featured classic slapstick.", exampleEs: "El programa presentaba slapstick clásico.", related: [], difficulty: 2 },
          { id: "l13t11_n8", word: "innuendo", translation: "insinuación", type: "noun", definition: "indirect suggestive remark", definitionEs: "comentario sugerente indirecto", example: "The innuendo went over some heads.", exampleEs: "La insinuación pasó por alto a algunos.", related: [], difficulty: 2 },
          { id: "l13t11_n9", word: "satire", translation: "sátira", type: "noun", definition: "humor that criticizes through ridicule", definitionEs: "humor que critica mediante ridículo", example: "The show is a satire of politics.", exampleEs: "El programa es una sátira de la política.", related: ["satirical"], difficulty: 2 },
          { id: "l13t11_n10", word: "parody", translation: "parodia", type: "noun", definition: "imitation for comic effect", definitionEs: "imitación con efecto cómico", example: "The film is a parody of action movies.", exampleEs: "La película es una parodia de películas de acción.", related: ["parodic"], difficulty: 2 }
        ],
        verbs: [],
        adjectives: [],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t11_cm1", wrong: "Confusing pun and double entendre", correct: "Pun = wordplay; double entendre = specifically suggestive second meaning", explanation: "All double entendres are puns, but not all puns are double entendres", explanationEs: "All double entendres are puns, but not all puns are double entendres", category: "vocabulary" },
        { id: "l13t11_cm2", wrong: "Using irony when you mean sarcasm", correct: "Irony = situation or statement; sarcasm = mocking tone", explanation: "Sarcasm is spoken irony with mocking intent", explanationEs: "Sarcasm is spoken irony with mocking intent", category: "vocabulary" },
        { id: "l13t11_cm3", wrong: "Using deadpan as adjective incorrectly", correct: "He delivered it deadpan / with deadpan delivery", explanation: "Deadpan functions as adverb or in compound 'deadpan delivery'", explanationEs: "Deadpan functions as adverb or in compound 'deadpan delivery'", category: "grammar" },
        { id: "l13t11_cm4", wrong: "Confusing satire and parody", correct: "Satire = criticizes; parody = imitates for laughs", explanation: "Satire has a critical purpose; parody imitates for comic effect", explanationEs: "Satire has a critical purpose; parody imitates for comic effect", category: "vocabulary" }
      ],
      exercises: [
        { type: "humor-type-identification", instruction: "Identify the type of humor in each example", items: [
          { example: "I used to be a baker, but I couldn't make enough dough.", type: ["Pun", "Double entendre", "Satire", "Slapstick"], correct: 0, explanation: "Pun on 'dough' (money/bread)" },
          { example: "A fire station burns down. How ironic.", type: ["Pun", "Irony", "Parody", "Banter"], correct: 1, explanation: "Situational irony" },
          { example: "Saturday Night Live's political sketches", type: ["Slapstick", "Satire", "Innuendo", "Deadpan"], correct: 1, explanation: "Satire criticizes through humor" },
          { example: "Scary Movie imitating horror films", type: ["Satire", "Parody", "Pun", "Wit"], correct: 1, explanation: "Parody imitates for comic effect" }
        ]},
        { type: "wordplay-creation", instruction: "Identify the wordplay in each pun", items: [
          { pun: "I'm reading a book about anti-gravity. It's impossible to put down.", wordplay: "put down = stop reading / physical dropping", explanation: "Double meaning" },
          { pun: "Why don't scientists trust atoms? Because they make up everything.", wordplay: "make up = constitute / invent", explanation: "Double meaning" },
          { pun: "I told my wife she was drawing her eyebrows too high. She looked surprised.", wordplay: "surprised = shocked / eyebrows raised", explanation: "Double meaning" }
        ]},
        { type: "humor-context-appropriateness", instruction: "Is this type of humor appropriate for the context?", items: [
          { humor: "Double entendre", context: "Formal business presentation", appropriate: false },
          { humor: "Witty banter", context: "Casual team lunch", appropriate: true },
          { humor: "Satire", context: "Political comedy show", appropriate: true },
          { humor: "Slapstick", context: "Board meeting", appropriate: false }
        ]},
        { type: "irony-vs-sarcasm", instruction: "Identify whether each is irony or sarcasm", items: [
          { statement: "Oh great, another meeting. Just what I needed.", type: "sarcasm", explanation: "Spoken with mocking tone" },
          { statement: "A plumber's house has leaky pipes.", type: "irony", explanation: "Situational irony - unexpected" },
          { statement: "Well, that went well. (after a disaster)", type: "sarcasm", explanation: "Sarcastic tone - opposite meaning" },
          { statement: "A marriage counselor files for divorce.", type: "irony", explanation: "Situational irony" }
        ]}
      ],
      modelDialogue: {
        title: "Discussing Humor in a Film",
        context: "Friends discussing different types of humor in a movie",
        dialogue: [
          { speaker: "A", text: "What did you think of the puns? Some were pretty clever.", note: "Discussing wordplay" },
          { speaker: "B", text: "The double entendres went over my head at first – I had to think about them.", note: "Double entendre" },
          { speaker: "A", text: "The satire of corporate culture was spot on. I loved the irony of the CEO character.", note: "Satire and irony" },
          { speaker: "B", text: "The deadpan delivery was brilliant – you never knew if he was serious.", note: "Deadpan humor" },
          { speaker: "A", text: "The banter between the two leads was so natural. Real wit.", note: "Banter and wit" },
          { speaker: "B", text: "And the slapstick in the chase scene – classic physical comedy.", note: "Slapstick" }
        ],
        keyTakeaways: [
          "Puns and double entendres rely on double meaning",
          "Irony and sarcasm differ in tone and intent",
          "Satire criticizes; parody imitates",
          "Deadpan and wit require cultural fluency to appreciate"
        ]
      },
      pronunciationFocus: {
        title: "Humor and Wordplay Vocabulary",
        titleEs: "Vocabulario de humor y juegos de palabras",
        sounds: [
          { symbol: "/pʌn/", word: "pun", tip: "Rhymes with 'fun'" },
          { symbol: "/ˌduːbl ɒnˈtɒndrə/", word: "double entendre", tip: "French origin - doo-bluh on-TON-druh" },
          { symbol: "/ˈdedpæn/", word: "deadpan", tip: "DEAD-pan" },
          { symbol: "/ˌɪnjuˈendoʊ/", word: "innuendo", tip: "in-yoo-EN-doh" }
        ]
      },
      culturalNote: {
        title: "Humor Across Cultures",
        titleEs: "Humor entre culturas",
        content: "Humor is highly culture-specific. British humor tends toward understatement and deadpan; American humor can be more direct. Puns and wordplay require strong vocabulary. When in doubt, observe rather than attempt – humor that falls flat can be awkward.",
        contentEs: "El humor es altamente específico de cada cultura. El británico tiende al understatement y deadpan; el americano puede ser más directo. Los puns y juegos de palabras requieren vocabulario fuerte. En caso de duda, observa en lugar de intentar – el humor que no funciona puede ser incómodo.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "A pun is:", options: ["Physical comedy", "A play on words", "Mocking tone", "Political criticism"], correctIndex: 1, explanation: "Pun = wordplay with double meaning" },
        { question: "Satire differs from parody in that satire:", options: ["Is funnier", "Criticizes through ridicule", "Uses physical comedy", "Is always political"], correctIndex: 1, explanation: "Satire has critical purpose" },
        { question: "Deadpan humor is delivered:", options: ["With exaggerated expression", "Without facial expression", "With sarcastic tone", "Through physical comedy"], correctIndex: 1, explanation: "Deadpan = expressionless delivery" },
        { question: "Double entendre specifically implies:", options: ["Any double meaning", "A suggestive second meaning", "Political humor", "Physical comedy"], correctIndex: 1, explanation: "Double entendre = innocent + suggestive meaning" }
      ],
      guidedProduction: {
        scenario: "Describe a funny scene from a film or show, identifying the types of humor used (pun, irony, satire, deadpan, etc.).",
        promptQuestions: [
          "What type of humor was used?",
          "Was there wordplay or double meaning?",
          "Did it use irony or sarcasm?",
          "How did the delivery affect the humor?"
        ],
        sampleResponse: "In that scene, the humor worked on multiple levels. There was a pun when the character said 'I'm in a pickle' – literally standing in a pickle factory. The irony was that the expert was completely wrong about everything. The satire targeted corporate jargon – every buzzword was exaggerated. And the lead actor's deadpan delivery made it even funnier – he never cracked a smile while saying the most absurd things."
      },
      connectionToPrevious: "Spontaneous speech includes natural humor; this task deepens humor vocabulary",
      connectionToNext: "Academic writing requires precision – a contrast to playful language"
    },
    {
      id: 12,
      title: "Academic Writing and Research English",
      titleEs: "Escritura Académica e Inglés de Investigación",
      introduction: {
        title: "📝 Escritura Académica e Inglés de Investigación",
        explanation: "El inglés académico y de investigación tiene convenciones específicas: hipótesis, metodología, citación y lenguaje hedged. Dominar este registro es esencial para publicar, presentar y colaborar en contextos académicos internacionales.",
        keyPoints: [
          "Hipótesis: afirmación comprobable",
          "Metodología: cualitativa vs cuantitativa",
          "Abstract, peer-review, citation: convenciones de publicación",
          "Empírico: basado en evidencia observable",
          "Dissertation: tesis de posgrado"
        ],
        examples: [
          { english: "The hypothesis was corroborated by the empirical data.", spanish: "La hipótesis fue corroborada por los datos empíricos.", explanation: "Hipótesis y datos empíricos" },
          { english: "The paper underwent peer review before publication.", spanish: "El artículo pasó por revisión por pares antes de la publicación.", explanation: "Peer review" },
          { english: "The methodology combined qualitative and quantitative approaches.", spanish: "La metodología combinó enfoques cualitativos y cuantitativos.", explanation: "Metodología mixta" }
        ],
        tips: [
          "💡 'Hypothesis' = afirmación a probar; 'theory' = explicación establecida",
          "💡 'Qualitative' = cualitativo; 'quantitative' = cuantitativo",
          "💡 'Corroborate' = confirmar con evidencia"
        ],
        whenToUse: [
          'En papers y abstracts: "The hypothesis was corroborated by the empirical data"',
          'En metodología: "The methodology combined qualitative and quantitative approaches"',
          'En revisiones por pares: "The paper underwent peer review before publication"',
          'En hedging académico: "The evidence suggests...", "It appears that...", "This may indicate..."'
        ],
        whenNotToUse: [
          'En comunicación empresarial cotidiana → "hypothesis", "corroborate" suenan excesivos',
          'No confundas "hypothesis" (a probar) con "theory" (explicación establecida)',
          'En emails breves → evita jerga académica; usa "research shows" en lugar de "empirical data suggests"'
        ]
      },
      objectives: ["Usar vocabulario académico preciso", "Comprender convenciones de investigación", "Escribir con hedging apropiado"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c2-discourse-cohesion", "c2-metalinguistic-hedging"],
      vocabulary: {
        nouns: [
          { id: "l13t12_n1", word: "hypothesis", translation: "hipótesis", type: "noun", definition: "testable statement", definitionEs: "afirmación comprobable", example: "The hypothesis was supported.", exampleEs: "La hipótesis fue respaldada.", related: ["hypothesize"], difficulty: 2 },
          { id: "l13t12_n2", word: "methodology", translation: "metodología", type: "noun", definition: "system of methods used", definitionEs: "sistema de métodos utilizados", example: "The methodology was rigorous.", exampleEs: "La metodología fue rigurosa.", related: ["method"], difficulty: 2 },
          { id: "l13t12_n3", word: "abstract", translation: "resumen/abstracto", type: "noun", definition: "brief summary of research", definitionEs: "resumen breve de investigación", example: "The abstract summarizes the findings.", exampleEs: "El abstract resume los hallazgos.", related: [], difficulty: 2 },
          { id: "l13t12_n4", word: "peer review", translation: "revisión por pares", type: "noun", definition: "evaluation by experts", definitionEs: "evaluación por expertos", example: "The paper passed peer review.", exampleEs: "El artículo pasó la revisión por pares.", related: [], difficulty: 2 },
          { id: "l13t12_n5", word: "citation", translation: "cita/citación", type: "noun", definition: "reference to source", definitionEs: "referencia a fuente", example: "Include proper citations.", exampleEs: "Incluye citas apropiadas.", related: ["cite"], difficulty: 1 },
          { id: "l13t12_n6", word: "dissertation", translation: "tesis doctoral", type: "noun", definition: "extended research project for degree", definitionEs: "proyecto de investigación extendido para título", example: "She is writing her dissertation.", exampleEs: "Está escribiendo su tesis doctoral.", related: [], difficulty: 2 }
        ],
        verbs: [
          { id: "l13t12_v1", word: "corroborate", translation: "corroborar", type: "verb", definition: "confirm with evidence", definitionEs: "confirmar con evidencia", example: "The findings corroborate the theory.", exampleEs: "Los hallazgos corroboran la teoría.", related: [], difficulty: 2 }
        ],
        adjectives: [
          { id: "l13t12_a1", word: "empirical", translation: "empírico", type: "adjective", definition: "based on observation/evidence", definitionEs: "basado en observación/evidencia", example: "We need empirical evidence.", exampleEs: "Necesitamos evidencia empírica.", related: [], difficulty: 2 },
          { id: "l13t12_a2", word: "qualitative", translation: "cualitativo", type: "adjective", definition: "descriptive, non-numerical", definitionEs: "descriptivo, no numérico", example: "Qualitative research uses interviews.", exampleEs: "La investigación cualitativa usa entrevistas.", related: ["quality"], difficulty: 2 },
          { id: "l13t12_a3", word: "quantitative", translation: "cuantitativo", type: "adjective", definition: "numerical, measurable", definitionEs: "numérico, medible", example: "Quantitative data was analyzed.", exampleEs: "Los datos cuantitativos fueron analizados.", related: ["quantity"], difficulty: 2 }
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l13t12_cm1", wrong: "Using 'hypothesis' and 'theory' interchangeably", correct: "Hypothesis = testable claim; theory = well-established explanation", explanation: "Hypothesis is preliminary; theory has substantial evidence", explanationEs: "Hypothesis is preliminary; theory has substantial evidence", category: "vocabulary" },
        { id: "l13t12_cm2", wrong: "Saying 'qualitative' when meaning 'quantitative'", correct: "Qualitative = descriptive; quantitative = numerical", explanation: "Opposite meanings - qualitative uses words, quantitative uses numbers", explanationEs: "Opposite meanings - qualitative uses words, quantitative uses numbers", category: "vocabulary" },
        { id: "l13t12_cm3", wrong: "Using 'empirical' for any evidence", correct: "Empirical = based on observation/experiment", explanation: "Empirical specifically means observable, measurable evidence", explanationEs: "Empirical specifically means observable, measurable evidence", category: "vocabulary" },
        { id: "l13t12_cm4", wrong: "Confusing 'abstract' (summary) with 'abstract' (conceptual)", correct: "In academic context, abstract = research summary", explanation: "Same word, different meaning in academic writing", explanationEs: "Same word, different meaning in academic writing", category: "vocabulary" }
      ],
      exercises: [
        { type: "vocabulary-matching", instruction: "Match each term to its definition", items: [
          { term: "hypothesis", definition: "Testable statement to be investigated" },
          { term: "methodology", definition: "System of methods used in research" },
          { term: "peer review", definition: "Evaluation by experts before publication" },
          { term: "corroborate", definition: "Confirm with evidence" },
          { term: "empirical", definition: "Based on observation and evidence" }
        ]},
        { type: "qualitative-quantitative", instruction: "Classify each as qualitative or quantitative research", items: [
          { method: "Surveys with numerical ratings", type: "quantitative", explanation: "Numerical data" },
          { method: "In-depth interviews", type: "qualitative", explanation: "Descriptive, non-numerical" },
          { method: "Statistical analysis", type: "quantitative", explanation: "Numbers and statistics" },
          { method: "Case studies with narrative", type: "qualitative", explanation: "Descriptive analysis" }
        ]},
        { type: "academic-sentence-completion", instruction: "Complete the academic sentence appropriately", items: [
          { stem: "The _____ was supported by the empirical data.", options: ["hypothesis", "abstract", "citation", "dissertation"], correct: 0 },
          { stem: "The paper underwent _____ before publication.", options: ["peer review", "hypothesis", "methodology", "qualitative"], correct: 0 },
          { stem: "The _____ combined qualitative and quantitative approaches.", options: ["methodology", "abstract", "citation", "dissertation"], correct: 0 },
          { stem: "The findings _____ the initial theory.", options: ["corroborate", "abstract", "empirical", "qualitative"], correct: 0 }
        ]},
        { type: "academic-context-appropriateness", instruction: "Choose the correct term for each academic context", items: [
          { context: "Brief summary at start of paper", term: "abstract", explanation: "Abstract summarizes the paper" },
          { context: "PhD research project", term: "dissertation", explanation: "Dissertation = extended research for degree" },
          { context: "Reference to another source", term: "citation", explanation: "Citation = reference" },
          { context: "Evidence from experiments", term: "empirical", explanation: "Empirical = observable evidence" }
        ]}
      ],
      modelDialogue: {
        title: "Discussing Research Methodology",
        context: "Two academics discussing a research paper",
        dialogue: [
          { speaker: "A", text: "What's the hypothesis of your study?", note: "Hypothesis" },
          { speaker: "B", text: "We hypothesized that the intervention would improve outcomes. The methodology combined qualitative interviews with quantitative surveys.", note: "Methodology, qualitative, quantitative" },
          { speaker: "A", text: "Has it been through peer review yet?", note: "Peer review" },
          { speaker: "B", text: "Yes, we're revising based on feedback. The abstract needs to be stronger.", note: "Abstract" },
          { speaker: "A", text: "Do you have empirical data to corroborate the findings?", note: "Empirical, corroborate" },
          { speaker: "B", text: "Yes – and proper citations throughout. This will form part of my dissertation.", note: "Citation, dissertation" }
        ],
        keyTakeaways: [
          "Hypothesis = testable claim; methodology = research approach",
          "Qualitative = descriptive; quantitative = numerical",
          "Peer review and citation are essential conventions",
          "Empirical evidence corroborates theories"
        ]
      },
      pronunciationFocus: {
        title: "Academic Writing Vocabulary",
        titleEs: "Vocabulario de escritura académica",
        sounds: [
          { symbol: "/haɪˈpɒθəsɪs/", word: "hypothesis", tip: "hy-POTH-uh-sis" },
          { symbol: "/ˌmeθəˈdɒlədʒi/", word: "methodology", tip: "meth-uh-DOL-uh-jee" },
          { symbol: "/ɪmˈpɪrɪkl/", word: "empirical", tip: "im-PER-ih-kul" },
          { symbol: "/kəˈrɒbəreɪt/", word: "corroborate", tip: "kuh-ROB-uh-rayt" }
        ]
      },
      culturalNote: {
        title: "Academic English Conventions",
        titleEs: "Convenciones del inglés académico",
        content: "Academic English has strict conventions that vary by discipline. STEM fields often prefer direct, concise language; humanities may use more hedging. International journals expect consistent citation style (APA, MLA, Chicago). Understanding these conventions is essential for academic success in English-speaking institutions.",
        contentEs: "El inglés académico tiene convenciones estrictas que varían por disciplina. Las áreas STEM suelen preferir lenguaje directo y conciso; las humanidades pueden usar más hedging. Las revistas internacionales esperan estilo de citación consistente (APA, MLA, Chicago). Entender estas convenciones es esencial para el éxito académico en instituciones anglófonas.",
        region: "Global"
      },
      consolidationQuiz: [
        { question: "A hypothesis is:", options: ["A proven fact", "A testable statement", "A conclusion", "A methodology"], correctIndex: 1, explanation: "Hypothesis = claim to be tested" },
        { question: "Qualitative research typically uses:", options: ["Statistics only", "Surveys with numbers", "Interviews and descriptive data", "Experiments only"], correctIndex: 2, explanation: "Qualitative = descriptive, non-numerical" },
        { question: "'Corroborate' means:", options: ["Disprove", "Ignore", "Confirm with evidence", "Hypothesize"], correctIndex: 2, explanation: "Corroborate = confirm with evidence" },
        { question: "Peer review is:", options: ["Self-editing", "Evaluation by experts", "Writing the abstract", "Citation format"], correctIndex: 1, explanation: "Peer review = evaluation by fellow experts" }
      ],
      guidedProduction: {
        scenario: "Write a brief (3-4 sentence) abstract for a hypothetical research study, using at least 5 academic terms (hypothesis, methodology, empirical, qualitative/quantitative, corroborate, etc.).",
        promptQuestions: [
          "What is the hypothesis?",
          "What methodology would you use?",
          "What type of data (qualitative/quantitative)?",
          "How would findings corroborate or contradict the hypothesis?"
        ],
        sampleResponse: "This study tests the hypothesis that remote work improves productivity. The methodology combines qualitative interviews with quantitative productivity metrics. We collected empirical data from 200 participants over six months. The findings corroborate the hypothesis: qualitative themes revealed improved focus, while quantitative data showed a 15% productivity increase. The abstract summarizes these key results for the peer-reviewed publication."
      },
      connectionToPrevious: "Humor uses playful language; academic writing requires precision",
      connectionToNext: "Congratulations! You've completed Level 13 - the final level of native-like English mastery!"
    },
  ]
};

export default level13;
