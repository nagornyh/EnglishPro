import type { Level } from '../../types';

export const level12: Level = {
  id: 12,
  name: "Mastery+",
  cefrLevel: "C2",
  description: "Nivel casi nativo: idioms, humor, sutilezas culturales y expresión sofisticada",
  totalTasks: 12,
  estimatedHours: 26,
  color: "#f472b6",
  icon: "👑",
  tasks: [
    {
      id: 1,
      title: "Advanced Idioms and Figurative Language",
      titleEs: "Idioms Avanzados y Lenguaje Figurativo",
      introduction: {
        title: "🎨 Idioms y Lenguaje Figurativo",
        explanation: "Los idioms avanzados y el lenguaje figurativo son el sello del dominio nativo. Van más allá de expresiones comunes hacia territorios culturalmente ricos.",
        keyPoints: [
          "Idioms literarios: 'a Pyrrhic victory', 'Pandora's box', 'Achilles' heel'",
          "Idioms británicos vs americanos: 'spot on' (UK), 'on the money' (US)",
          "Metáforas extendidas: 'We're all in the same boat, navigating rough waters'",
          "Similes sofisticados: 'as rare as hen's teeth', 'like water off a duck's back'",
          "Idioms de registro alto: 'leave no stone unturned', 'the crux of the matter'"
        ],
        examples: [
          { english: "Opening that market was a Pandora's box – we unleashed problems we never anticipated.", spanish: "Abrir ese mercado fue una caja de Pandora – desatamos problemas que nunca anticipamos.", explanation: "Referencia mitológica griega" },
          { english: "His attention to detail is his Achilles' heel – he misses deadlines because of it.", spanish: "Su atención al detalle es su talón de Aquiles – pierde fechas límite por ello.", explanation: "Debilidad fatal" },
          { english: "Criticism rolls off him like water off a duck's back.", spanish: "Las críticas le resbalan como agua sobre las plumas de un pato.", explanation: "No le afecta" }
        ],
        tips: [
          "💡 'Pyrrhic victory' = victoria con pérdidas devastadoras",
          "💡 Conocer el origen de los idioms ayuda a recordarlos",
          "💡 Usa idioms con moderación para no sonar artificial"
        ],
        whenToUse: ["En conversaciones con hablantes nativos que comparten referencias culturales", "En escritura creativa, periodística o literaria", "Al querer expresar ideas con color y matices en lugar de lenguaje directo", "En presentaciones para añadir impacto retórico"],
        whenNotToUse: ["No uses idioms mitológicos en contextos donde tu audiencia no los conoce", "Evita 'Pyrrhic victory' o 'Achilles heel' con no-nativos — usa lenguaje directo", "No mezcles idioms de diferentes registros (formal + slang) en el mismo contexto"]
      },
      objectives: ["Dominar idioms avanzados", "Usar referencias culturales", "Emplear lenguaje figurativo sofisticado"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c2-pragmatic-implicature"],
      vocabulary: {
        nouns: [
          { id: "l12t1_n1", word: "Pandora's box", translation: "caja de Pandora", type: "noun", definition: "source of many unforeseen problems", definitionEs: "fuente de muchos problemas imprevistos", example: "Don't open that Pandora's box.", exampleEs: "No abras esa caja de Pandora.", related: [], difficulty: 2 },
          { id: "l12t1_n2", word: "Achilles' heel", translation: "talón de Aquiles", type: "noun", definition: "a weakness despite overall strength", definitionEs: "debilidad a pesar de fortaleza general", example: "Pride is his Achilles' heel.", exampleEs: "El orgullo es su talón de Aquiles.", related: [], difficulty: 2 },
          { id: "l12t1_n3", word: "Pyrrhic victory", translation: "victoria pírrica", type: "noun", definition: "win at too great a cost", definitionEs: "victoria a un costo demasiado alto", example: "It was a Pyrrhic victory.", exampleEs: "Fue una victoria pírrica.", related: [], difficulty: 2 },
        ],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l12t1_e1", word: "leave no stone unturned", translation: "no dejar piedra sin mover", type: "expression", definition: "search everywhere", definitionEs: "buscar en todas partes", example: "We left no stone unturned.", exampleEs: "No dejamos piedra sin mover.", related: [], difficulty: 2 },
          { id: "l12t1_e2", word: "the crux of the matter", translation: "el quid de la cuestión", type: "expression", definition: "the essential point", definitionEs: "el punto esencial", example: "That's the crux of the matter.", exampleEs: "Ese es el quid de la cuestión.", related: [], difficulty: 2 },
          { id: "l12t1_e3", word: "like water off a duck's back", translation: "como agua sobre las plumas de un pato", type: "expression", definition: "without any effect", definitionEs: "sin ningún efecto", example: "Criticism is like water off a duck's back to her.", exampleEs: "Las críticas le resbalan.", related: [], difficulty: 2 },
          { id: "l12t1_e4", word: "as rare as hen's teeth", translation: "más raro que un perro verde", type: "expression", definition: "extremely rare", definitionEs: "extremadamente raro", example: "Good candidates are as rare as hen's teeth.", exampleEs: "Buenos candidatos son rarísimos.", related: [], difficulty: 2 },
          { id: "l12t1_e5", word: "spot on (UK) / on the money (US)", translation: "exacto/en el clavo", type: "expression", definition: "exactly right", definitionEs: "exactamente correcto", example: "Your analysis was spot on.", exampleEs: "Tu análisis fue exacto.", related: [], difficulty: 1 },
          { id: "l12t1_e6", word: "a shot in the dark", translation: "un tiro al aire/a ciegas", type: "expression", definition: "a guess without information", definitionEs: "una suposición sin información", example: "This is just a shot in the dark.", exampleEs: "Esto es solo un tiro al aire.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t1_cm1", wrong: "It was a Pandora's box of opportunities", correct: "It was a Pandora's box of problems", explanation: "Pandora's box always contains problems/evils, not positive things", explanationEs: "Pandora's box siempre contiene problemas/males, no cosas positivas", category: "vocabulary" },
        { id: "l12t1_cm2", wrong: "His communication skills are his Achilles' heel", correct: "His lack of communication skills is his Achilles' heel", explanation: "Achilles' heel is a weakness, not a strength", explanationEs: "Achilles' heel es una debilidad, no una fortaleza", category: "vocabulary" },
        { id: "l12t1_cm3", wrong: "We won a Pyrrhic victory - everyone celebrated", correct: "We won a Pyrrhic victory - the cost was devastating", explanation: "A Pyrrhic victory always implies devastating losses", explanationEs: "Una victoria pírrica siempre implica pérdidas devastadoras", category: "vocabulary" },
        { id: "l12t1_cm4", wrong: "Let's move no stone unturned", correct: "Let's leave no stone unturned", explanation: "The correct verb is 'leave', not 'move'", explanationEs: "El verbo correcto es 'leave', no 'move'", category: "vocabulary" },
        { id: "l12t1_cm5", wrong: "He really put the nail on the coffin for the deal", correct: "He really put the nail in the coffin for the deal", explanation: "The correct preposition in this idiom is 'in', not 'on'", explanationEs: "The correct preposition in this idiom is 'in', not 'on'", category: "grammar" }
      ],
      exercises: [
        { type: "idiom-origin", instruction: "Match each idiom with its cultural/mythological origin", items: [
          { idiom: "Pandora's box", options: ["Greek mythology - jar containing all evils", "Roman history - Caesar's box", "Biblical - box of plagues"], correct: 0 },
          { idiom: "Achilles' heel", options: ["Norse mythology - Thor's hammer", "Greek mythology - vulnerable spot of hero", "Egyptian mythology - pharaoh's weakness"], correct: 1 },
          { idiom: "Pyrrhic victory", options: ["King Pyrrhus of Epirus - costly battle wins", "Roman emperor Pyrrhus - hollow victories", "Greek philosopher Pyrrhus - paradoxical wins"], correct: 0 },
          { idiom: "cross the Rubicon", options: ["Caesar crossing river - point of no return", "Napoleon crossing Alps", "Alexander conquering Persia"], correct: 0 }
        ]},
        { type: "context-application", instruction: "Choose the most appropriate idiom for each business scenario", scenarios: [
          { situation: "Your thorough investigation revealed no new leads", options: ["left no stone unturned", "opened Pandora's box", "won a Pyrrhic victory"], correct: 0, explanation: "'Left no stone unturned' = searched everywhere" },
          { situation: "The acquisition succeeded but depleted all reserves", options: ["found our Achilles' heel", "won a Pyrrhic victory", "opened Pandora's box"], correct: 1, explanation: "Victory at devastating cost" },
          { situation: "The regulatory change created countless unforeseen issues", options: ["opened Pandora's box", "left no stone unturned", "was spot on"], correct: 0, explanation: "Unleashed many unforeseen problems" },
          { situation: "Despite his talent, his temper ruins relationships", options: ["is his Pyrrhic victory", "is his Achilles' heel", "is like water off a duck's back"], correct: 1, explanation: "Fatal weakness despite overall strength" }
        ]},
        { type: "british-american", instruction: "Identify whether each idiom is British (UK), American (US), or universal", items: [
          { idiom: "spot on", correct: "UK", explanation: "British expression, Americans would say 'on the money' or 'right on'" },
          { idiom: "on the money", correct: "US", explanation: "American expression, British would say 'spot on'" },
          { idiom: "the crux of the matter", correct: "universal", explanation: "Used in both varieties" },
          { idiom: "as rare as hen's teeth", correct: "universal", explanation: "Common in both, though Americans might also say 'rare as a blue moon'" },
          { idiom: "Pandora's box", correct: "universal", explanation: "Classical reference used internationally" }
        ]},
        { type: "figurative-completion", instruction: "Complete the extended metaphor/simile appropriately", items: [
          { stem: "We're all in the same boat now, so we need to _____", options: ["row together", "drive forward", "fly high"], correct: 0, explanation: "Maintain the nautical metaphor" },
          { stem: "The company is bleeding money, and we need to _____", options: ["stop the hemorrhage", "close the tap", "plug the leak"], correct: 0, explanation: "Continue the medical/blood metaphor" },
          { stem: "She planted the seeds of innovation, and now we're seeing _____", options: ["the profits", "the growth", "the results"], correct: 1, explanation: "Continue the gardening metaphor" },
          { stem: "This is just the tip of the iceberg; underneath _____", options: ["lie much bigger problems", "are more opportunities", "we found solutions"], correct: 0, explanation: "Iceberg idiom implies hidden dangers" }
        ]},
        { type: "idiom-meaning-matching", instruction: "Match each idiom to its correct meaning", items: [
          { idiom: "leave no stone unturned", options: ["search everywhere thoroughly", "cause many problems", "win at great cost"], correct: 0 },
          { idiom: "the crux of the matter", options: ["a minor detail", "the essential point", "a difficult person"], correct: 1 },
          { idiom: "like water off a duck's back", options: ["very wet", "without any effect", "very slippery"], correct: 1 },
          { idiom: "as rare as hen's teeth", options: ["very common", "extremely rare", "slightly unusual"], correct: 1 }
        ]},
        { type: "idiom-fill-blank", instruction: "Fill in the blank with the correct idiom", items: [
          { sentence: "We _____ in our search for the right candidate.", options: ["left no stone unturned", "opened Pandora's box", "won a Pyrrhic victory"], correct: 0 },
          { sentence: "Criticism just rolls off her _____", options: ["like water off a duck's back", "as rare as hen's teeth", "the crux of the matter"], correct: 0 },
          { sentence: "That's _____. We need to focus on the core issue.", options: ["the crux of the matter", "a shot in the dark", "a Pyrrhic victory"], correct: 0 },
          { sentence: "Good leaders like that are _____", options: ["as rare as hen's teeth", "like water off a duck's back", "Pandora's box"], correct: 0 }
        ]},
        { type: "idiom-sentence-creation", instruction: "Choose the idiom that best completes each sentence", items: [
          { context: "The merger succeeded but we lost our best talent", idiom: "Pyrrhic victory", explanation: "Win at devastating cost" },
          { context: "The new policy created countless unforeseen issues", idiom: "Pandora's box", explanation: "Unleashed many problems" },
          { context: "His temper is his fatal weakness despite his talent", idiom: "Achilles' heel", explanation: "Vulnerable spot" },
          { context: "We've passed the point of no return on this decision", idiom: "crossed the Rubicon", explanation: "Irreversible commitment" }
        ]},
        { type: "idiom-context-appropriateness", instruction: "Is the idiom used correctly in each sentence?", items: [
          { sentence: "Opening that investigation was a Pandora's box of legal issues", correct: true, explanation: "Correct - Pandora's box = many unforeseen problems" },
          { sentence: "Her communication skills are her Achilles' heel", correct: false, explanation: "Achilles' heel is a weakness; communication skills would be a strength" },
          { sentence: "We left no stone unturned in our market research", correct: true, explanation: "Correct - searched everywhere thoroughly" },
          { sentence: "The deal was a Pyrrhic victory - everyone celebrated", correct: false, explanation: "Pyrrhic victory implies devastating cost, not celebration" }
        ]}
      ],
      modelDialogue: {
        title: "Executive Strategy Discussion Using Advanced Idioms",
        context: "Board meeting discussing the results of an ambitious market expansion",
        dialogue: [
          { speaker: "CEO", text: "Let's address the elephant in the room. The APAC expansion has been a Pyrrhic victory at best.", note: "Using two sophisticated idioms to frame the discussion" },
          { speaker: "CFO", text: "I agree. We left no stone unturned in our due diligence, yet we still opened a Pandora's box of regulatory issues.", note: "Acknowledging thorough effort despite problems" },
          { speaker: "COO", text: "Our speed to market was impressive, but it became our Achilles' heel - we moved too fast on compliance.", note: "Using classical reference for weakness" },
          { speaker: "CEO", text: "The irony isn't lost on me. In trying to be first movers, we found ourselves in a Catch-22.", note: "Literary reference for impossible situation" },
          { speaker: "CMO", text: "That said, criticism of the expansion rolls off our brand like water off a duck's back. Customer loyalty remains strong.", note: "Balancing with positive idiom" },
          { speaker: "CEO", text: "Indeed. And finding such brand resilience in a new market is as rare as hen's teeth. The crux of the matter is: do we double down or cut losses?", note: "Transitioning to decision point" },
          { speaker: "CFO", text: "If we retreat now, we've essentially crossed the Rubicon for nothing. I say we stay the course.", note: "Historical reference for point of no return" },
          { speaker: "CEO", text: "Spot on. Let's not meet our Waterloo through indecision. We adapt and push forward.", note: "British idiom + historical defeat reference" }
        ],
        keyTakeaways: [
          "Classical and literary idioms add sophistication to business discourse",
          "Idioms can soften difficult truths while maintaining clarity",
          "Mixing cultural references requires confidence and precision",
          "Historical references carry weight in strategic discussions"
        ]
      },
      pronunciationFocus: {
        title: "Classical and Literary Reference Pronunciation",
        titleEs: "Pronunciación de referencias clásicas y literarias",
        sounds: [
          { symbol: "/ˈpɪrɪk/", word: "Pyrrhic", tip: "PIR-ik, not 'pie-rik' - the 'y' is short" },
          { symbol: "/əˈkɪliːz/", word: "Achilles", tip: "uh-KIL-eez, emphasis on second syllable" },
          { symbol: "/krʌks/", word: "crux", tip: "Rhymes with 'trucks', short 'u' sound" },
          { symbol: "/ˈruːbɪkɒn/", word: "Rubicon", tip: "ROO-bi-kon, not 'rub-i-kon'" }
        ]
      },
      culturalNote: {
        title: "Classical References in English",
        titleEs: "Referencias clásicas en inglés",
        content: "Classical references (Greek/Roman) carry sophistication in English. Literary references (Catch-22, Big Brother, Dickensian) show education. Using them correctly signals near-native fluency, but misusing them can undermine credibility. When in doubt, ensure you understand the full context of a reference before using it.",
        contentEs: "Las referencias clásicas (griego/romano) transmiten sofisticación en inglés. Las referencias literarias (Catch-22, Big Brother, Dickensian) muestran educación. Usarlas correctamente señala fluidez casi nativa, pero mal usarlas puede minar la credibilidad. En caso de duda, asegúrate de entender el contexto completo antes de usarlas.",
        region: "Global"
      },
      consolidationQuiz: [
        { question: "Which idiom describes a win that comes at too great a cost?", options: ["Pandora's box", "Pyrrhic victory", "Achilles' heel", "Catch-22"], correctIndex: 1, explanation: "Named after King Pyrrhus whose victories cost him his army" },
        { question: "What does 'left no stone unturned' mean?", options: ["Made a mess", "Searched everywhere", "Caused problems", "Achieved nothing"], correctIndex: 1, explanation: "To search thoroughly in every possible place" },
        { question: "If criticism is 'like water off a duck's back', how does it affect the person?", options: ["Deeply", "Not at all", "Moderately", "Temporarily"], correctIndex: 1, explanation: "It has no effect - it doesn't bother them" },
        { question: "What does 'the crux of the matter' refer to?", options: ["The problem", "The essential point", "The difficulty", "The solution"], correctIndex: 1, explanation: "The central, most important point of an issue" }
      ],
      guidedProduction: {
        scenario: "You're presenting to the board about a failed product launch that, despite thorough preparation, encountered unforeseen problems. Use at least 5 idioms/figurative expressions naturally.",
        promptQuestions: [
          "How would you describe your preparation process? (hint: thoroughness)",
          "What happened when problems emerged? (hint: unforeseen complications)",
          "Was there a fundamental weakness? (hint: classical reference)",
          "What is the key issue now? (hint: essential point)",
          "How should the team handle ongoing criticism? (hint: resilience)"
        ],
        sampleResponse: "We left no stone unturned in our market research, yet launching in Q4 opened a Pandora's box of supply chain issues. In hindsight, our reliance on a single supplier was our Achilles' heel. The crux of the matter is whether to pivot or persist. I recommend we let the initial criticism roll off like water off a duck's back and focus on addressing the root causes."
      },
      connectionToPrevious: "Builds on Level 11 advanced vocabulary with cultural depth",
      connectionToNext: "Humor and irony require understanding idioms in context"
    },
    {
      id: 2,
      title: "Humor, Irony and Sarcasm",
      titleEs: "Humor, Ironía y Sarcasmo",
      introduction: {
        title: "😏 Humor, Ironía y Sarcasmo",
        explanation: "El humor en inglés a menudo depende de la ironía, el understatement, y el sarcasmo sutil. Dominar estos elementos marca la diferencia entre competencia y maestría.",
        keyPoints: [
          "Understatement británico: 'Not bad' = excelente, 'Slightly problematic' = desastroso",
          "Ironía situacional: decir lo opuesto de lo que se espera",
          "Sarcasmo sutil: tono que indica lo opuesto del significado literal",
          "Self-deprecating humor: reírse de uno mismo",
          "Dry humor / deadpan: humor sin cambiar la expresión"
        ],
        examples: [
          { english: "Oh great, another meeting. Just what I needed. (sarcasm)", spanish: "Oh genial, otra reunión. Justo lo que necesitaba. (sarcasmo)", explanation: "Sarcasmo evidente por contexto" },
          { english: "I'm not exactly a morning person. (understatement - hates mornings)", spanish: "No soy exactamente una persona mañanera. (understatement - odia las mañanas)", explanation: "Understatement típico" },
          { english: "Well, that went well. (after a disaster)", spanish: "Bueno, eso salió bien. (después de un desastre)", explanation: "Ironía situacional" }
        ],
        tips: [
          "💡 El humor británico es famoso por el understatement",
          "💡 El sarcasmo requiere contexto - no funciona bien por escrito",
          "💡 'Self-deprecating' humor muestra humildad y confianza"
        ],
        whenToUse: [
          'En humor sofisticado/understatement: "I wouldn\'t say it was a disaster... merely an unmitigated catastrophe"',
          'En networking con nativos: "I\'m not exactly a morning person" (understatement que crea rapport)',
          'En ironía situacional: "Well, that went well" (después de un desastre)',
          'En sátira corporativa: "Oh great, another meeting. Just what I needed." (sarcasmo)'
        ],
        whenNotToUse: [
          'Con hablantes no nativos → puede causar confusión: evita understatement irónico',
          'En instrucciones técnicas → claridad sobre estilo: usa lenguaje directo',
          'En comunicaciones escritas formales → el sarcasmo no se transmite sin entonación'
        ]
      },
      objectives: ["Entender y usar understatement", "Reconocer y emplear ironía", "Usar humor apropiadamente"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-vague-language"],
      vocabulary: {
        nouns: [
          { id: "l12t2_n1", word: "understatement", translation: "subestimación/decir menos de lo que es", type: "noun", definition: "saying less than is true", definitionEs: "decir menos de lo que es verdad", example: "That's an understatement.", exampleEs: "Eso es quedarse corto.", related: ["understate"], difficulty: 2 },
          { id: "l12t2_n2", word: "irony", translation: "ironía", type: "noun", definition: "saying opposite of meaning", definitionEs: "decir lo opuesto del significado", example: "The irony is not lost on me.", exampleEs: "No se me escapa la ironía.", related: ["ironic"], difficulty: 2 },
          { id: "l12t2_n3", word: "sarcasm", translation: "sarcasmo", type: "noun", definition: "mocking irony", definitionEs: "ironía burlona", example: "That was pure sarcasm.", exampleEs: "Eso fue puro sarcasmo.", related: ["sarcastic"], difficulty: 1 },
        ],
        verbs: [],
        adjectives: [
          { id: "l12t2_a1", word: "tongue-in-cheek", translation: "irónico/con sorna", type: "adjective", definition: "not meant seriously", definitionEs: "no dicho en serio", example: "It was a tongue-in-cheek comment.", exampleEs: "Fue un comentario irónico.", related: [], difficulty: 2 },
          { id: "l12t2_a2", word: "deadpan", translation: "impasible/sin expresión", type: "adjective", definition: "without expression", definitionEs: "sin expresión", example: "He delivered it with deadpan humor.", exampleEs: "Lo dijo con humor impasible.", related: [], difficulty: 2 },
          { id: "l12t2_a3", word: "self-deprecating", translation: "autodespreciativo", type: "adjective", definition: "making fun of oneself", definitionEs: "burlándose de uno mismo", example: "I love his self-deprecating humor.", exampleEs: "Me encanta su humor autodespreciativo.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l12t2_e1", word: "Not bad (= excellent)", translation: "No está mal (= excelente)", type: "expression", definition: "British understatement for very good", definitionEs: "subestimación británica para muy bueno", example: "This champagne is not bad.", exampleEs: "Este champán no está mal.", related: [], difficulty: 2 },
          { id: "l12t2_e2", word: "Just what I needed (sarcastic)", translation: "Justo lo que necesitaba (sarcástico)", type: "expression", definition: "opposite meaning", definitionEs: "significado opuesto", example: "Rain? Just what I needed.", exampleEs: "¿Lluvia? Justo lo que necesitaba.", related: [], difficulty: 1 },
          { id: "l12t2_e3", word: "Well, that went well", translation: "Bueno, eso salió bien", type: "expression", definition: "ironic after failure", definitionEs: "irónico después de fracaso", example: "The cake burned. Well, that went well.", exampleEs: "El pastel se quemó. Bueno, eso salió bien.", related: [], difficulty: 1 },
          { id: "l12t2_e4", word: "Oh, joy / What a treat", translation: "Oh, qué alegría / Qué delicia", type: "expression", definition: "sarcastic enthusiasm", definitionEs: "entusiasmo sarcástico", example: "Monday again. Oh, joy.", exampleEs: "Lunes de nuevo. Oh, qué alegría.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t2_cm1", wrong: "Using sarcasm in formal emails without context", correct: "Reserve sarcasm for spoken communication where tone is clear", explanation: "Sarcasm requires tone; in writing it often sounds rude or confusing", explanationEs: "Sarcasm requires tone; in writing it often sounds rude or confusing", category: "usage" },
        { id: "l12t2_cm2", wrong: "That's an understatement (when it's actually accurate)", correct: "That's an understatement (when reality is much more extreme)", explanation: "Understatement means saying less than the truth", explanationEs: "Understatement means saying less than the truth", category: "vocabulary" },
        { id: "l12t2_cm3", wrong: "He delivered the joke with deadpan expression", correct: "He delivered the joke deadpan / with a deadpan delivery", explanation: "'Deadpan' functions as adjective/adverb, not noun", explanationEs: "'Deadpan' functions as adjective/adverb, not noun", category: "grammar" },
        { id: "l12t2_cm4", wrong: "The British always use understatement for everything", correct: "British humor often employs understatement, especially for negative situations", explanation: "Understatement is typically used to minimize negative things, not positive ones", explanationEs: "Understatement is typically used to minimize negative things, not positive ones", category: "usage" },
        { id: "l12t2_cm5", wrong: "Using irony and sarcasm interchangeably", correct: "Irony = contrast between expectation and reality; sarcasm = mocking irony directed at a person", explanation: "Sarcasm is always directed at someone; irony can be situational", explanationEs: "Sarcasm is always directed at someone; irony can be situational", category: "vocabulary" }
      ],
      exercises: [
        { type: "humor-identification", instruction: "Identify the type of humor used in each statement", items: [
          { statement: "Your presentation was... not entirely without merit", options: ["Sarcasm", "British understatement", "Irony", "Self-deprecation"], correct: 1, explanation: "Classic British understatement - 'not entirely without merit' = 'good'" },
          { statement: "Oh fantastic, another mandatory fun team building event", options: ["Understatement", "Sarcasm", "Deadpan humor", "Self-deprecation"], correct: 1, explanation: "Sarcastic enthusiasm about unwanted activity" },
          { statement: "I'm probably the worst person to give advice on time management - I've been late to my own birthday party", options: ["British understatement", "Irony", "Self-deprecating humor", "Sarcasm"], correct: 2, explanation: "Making fun of oneself" },
          { statement: "The fire alarm going off during the safety presentation was... unexpected", options: ["Irony", "Sarcasm", "Deadpan", "Understatement"], correct: 0, explanation: "Situational irony - a safety presentation interrupted by danger" }
        ]},
        { type: "understatement-translation", instruction: "What does each British understatement actually mean?", items: [
          { understatement: "The situation is not ideal", actualMeaning: ["It's okay", "It's terrible", "It's improving"], correct: 1 },
          { understatement: "He's not the most punctual person", actualMeaning: ["He's usually on time", "He's always late", "He's sometimes late"], correct: 1 },
          { understatement: "That's a bit of a problem", actualMeaning: ["It's a minor issue", "It's a serious crisis", "It's easily solved"], correct: 1 },
          { understatement: "I'm not entirely convinced", actualMeaning: ["I might agree", "I strongly disagree", "I'm neutral"], correct: 1 },
          { understatement: "This champagne isn't bad", actualMeaning: ["It's mediocre", "It's excellent", "It's acceptable"], correct: 1 }
        ]},
        { type: "appropriate-context", instruction: "Choose the most appropriate context for using each type of humor", scenarios: [
          { humor: "Self-deprecating joke", contexts: ["Job interview (briefly, to show humility)", "Serious client complaint", "Safety briefing"], correct: 0, explanation: "Brief self-deprecation can humanize you in interviews" },
          { humor: "British understatement", contexts: ["Marketing presentation", "Delivering bad news to team", "Emergency announcement"], correct: 1, explanation: "Understatement can soften bad news" },
          { humor: "Sarcasm", contexts: ["Email to new client", "Casual chat with close colleague", "Company-wide announcement"], correct: 1, explanation: "Sarcasm requires established relationship and clear tone" },
          { humor: "Deadpan delivery", contexts: ["Performance review", "Entertaining at team social", "Customer service call"], correct: 1, explanation: "Deadpan works well in informal social situations" }
        ]},
        { type: "tone-conversion", instruction: "Convert the direct statement to use the indicated humor style", items: [
          { direct: "The project failed completely", style: "British understatement", options: ["The project didn't go entirely as planned", "The project was a disaster!", "The project needs work"], correct: 0 },
          { direct: "I love Monday mornings", style: "Sarcasm", options: ["Monday mornings are challenging", "Oh, how I absolutely adore Monday mornings", "Mondays aren't my favorite"], correct: 1 },
          { direct: "I'm very good at public speaking", style: "Self-deprecating", options: ["I'm a confident speaker", "I'm not completely terrible at public speaking, surprisingly", "Public speaking is my strength"], correct: 1 }
        ]},
        { type: "tone-identification", instruction: "Identify the tone (sincere, sarcastic, ironic, understatement) in each statement", items: [
          { statement: "Oh brilliant, another 8am meeting. Just what I needed.", tone: "sarcastic", explanation: "Sarcastic enthusiasm about unwanted event" },
          { statement: "The presentation was... not entirely without merit", tone: "understatement", explanation: "British understatement for 'quite good'" },
          { statement: "A fire drill during the fire safety training. How convenient.", tone: "ironic", explanation: "Situational irony - safety training interrupted by safety event" },
          { statement: "I'm probably the last person who should give advice on punctuality", tone: "self-deprecating", explanation: "Making fun of oneself" }
        ]},
        { type: "humor-transformation", instruction: "Transform each statement to the indicated humor type", items: [
          { original: "This is terrible news", target: "British understatement", transformed: "This is... not ideal" },
          { original: "I'm excited about the audit", target: "Sarcasm", transformed: "Oh, I'm absolutely thrilled about the audit" },
          { original: "She's an expert", target: "Self-deprecating (contrast)", transformed: "Unlike me, she actually knows what she's doing" },
          { original: "The budget was cut", target: "Deadpan delivery", transformed: "So. The budget. It's been... adjusted." }
        ]},
        { type: "context-appropriate-humor", instruction: "Which humor type is most appropriate for each context?", items: [
          { context: "Team meeting after a difficult week", appropriate: "British understatement", explanation: "Softens the situation without being dismissive" },
          { context: "Email to new client about a delay", appropriate: "None - avoid humor", explanation: "Formal client communication requires professionalism" },
          { context: "Coffee chat with close colleague", appropriate: "Sarcasm", explanation: "Established relationship allows sarcasm" },
          { context: "Job interview when asked about a weakness", appropriate: "Self-deprecating", explanation: "Shows self-awareness and humility" }
        ]},
        { type: "implicit-tone-decoding", instruction: "What does the speaker likely mean given the tone?", items: [
          { statement: "Well, that went well. (flat tone, after project failure)", meaning: "It was a disaster", explanation: "Ironic - saying opposite of literal meaning" },
          { statement: "Not bad. (British, about excellent champagne)", meaning: "Excellent", explanation: "British understatement - not bad = very good" },
          { statement: "I'm not exactly a morning person. (about someone who hates mornings)", meaning: "I strongly dislike mornings", explanation: "Understatement minimizes the truth" },
          { statement: "Oh joy. (about Monday morning)", meaning: "I'm not happy", explanation: "Sarcastic - opposite of literal enthusiasm" }
        ]}
      ],
      modelDialogue: {
        title: "Office Humor in a Team Meeting",
        context: "Weekly team meeting after a challenging week with IT outages",
        dialogue: [
          { speaker: "Manager", text: "So, that was quite a week. I believe the technical term is 'character building.'", note: "British understatement + irony" },
          { speaker: "Developer", text: "Character building? I think my character has enough muscles now, thanks.", note: "Self-deprecating response playing on the metaphor" },
          { speaker: "Manager", text: "*deadpan* I'm told the server outage was an 'unscheduled opportunity for downtime.'", note: "Deadpan delivery of corporate euphemism" },
          { speaker: "Support Lead", text: "Oh, the customers loved it. Nothing says 'customer delight' like 48 hours of error messages.", note: "Sarcasm about negative situation" },
          { speaker: "Manager", text: "I believe the official feedback was... 'not entirely positive.'", note: "Classic British understatement" },
          { speaker: "Developer", text: "'Not entirely positive'? I've seen friendlier messages in spam folders.", note: "Ironic comparison" },
          { speaker: "Manager", text: "Well, at least we learned something. I'm not entirely sure what yet, but something.", note: "Self-deprecating conclusion" },
          { speaker: "Support Lead", text: "The learning experience continues! Oh, joy.", note: "Sarcastic enthusiasm" }
        ],
        keyTakeaways: [
          "Humor can defuse tension after difficult situations",
          "British understatement softens criticism",
          "Self-deprecation builds team rapport",
          "Sarcasm works when the whole team understands the context"
        ]
      },
      pronunciationFocus: {
        title: "Humor and Irony Vocabulary",
        titleEs: "Vocabulario de humor e ironía",
        sounds: [
          { symbol: "/ˈaɪrəni/", word: "irony", tip: "EYE-ruh-nee, three syllables" },
          { symbol: "/ˈsɑːkæzəm/", word: "sarcasm", tip: "SAR-kaz-um, emphasis on first syllable" },
          { symbol: "/ˈdedpæn/", word: "deadpan", tip: "DED-pan, equal stress on both parts" },
          { symbol: "/ˌtʌŋɪnˈtʃiːk/", word: "tongue-in-cheek", tip: "Emphasis on 'cheek'" }
        ]
      },
      culturalNote: {
        title: "British vs American Humor",
        titleEs: "Humor británico vs americano",
        content: "British and American humor differ significantly. British humor tends toward understatement, self-deprecation, and dry wit. American humor often involves more obvious punchlines and enthusiasm. What's considered funny varies by culture, industry, and relationship. In international business, use humor cautiously - irony and sarcasm translate poorly across cultures.",
        contentEs: "El humor británico y americano difieren significativamente. El británico tiende al understatement, autocrítica y wit seco. El americano suele tener punchlines más obvios y entusiasmo. Lo que se considera gracioso varía por cultura, industria y relación. En negocios internacionales, usa el humor con cautela: ironía y sarcasmo se traducen mal entre culturas.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "If a British person says 'The weather's not great', what do they likely mean?", options: ["It's acceptable", "It's terrible", "It's improving", "It's average"], correctIndex: 1, explanation: "British understatement - 'not great' often means awful" },
        { question: "What is 'self-deprecating humor'?", options: ["Making fun of others", "Serious criticism", "Making fun of yourself", "Dark humor"], correctIndex: 2, explanation: "Self-deprecation = humorously criticizing yourself" },
        { question: "'Well, that went well' after a disaster is an example of:", options: ["Understatement", "Irony", "Both", "Neither"], correctIndex: 2, explanation: "It's both ironic (saying opposite of reality) and an understatement" },
        { question: "When is sarcasm most appropriate in business?", options: ["In formal emails", "With unfamiliar clients", "In casual conversation with colleagues you know well", "In presentations"], correctIndex: 2, explanation: "Sarcasm requires established relationships and clear tone" }
      ],
      guidedProduction: {
        scenario: "Your team just survived a challenging quarter with multiple problems. Use humor appropriately to address the situation in a team meeting while maintaining professionalism.",
        promptQuestions: [
          "How would you describe the quarter using British understatement?",
          "What self-deprecating observation could you make about your own role?",
          "How might you use gentle irony about the challenges?",
          "What sarcastic comment could acknowledge frustrations while staying professional?",
          "How would you close with humor while pivoting to optimism?"
        ],
        sampleResponse: "Well, that quarter was... interesting. I'm not exactly the most crisis-resistant manager - I may have panic-ordered office snacks three separate times. The irony of having our busiest week during 'mental health awareness month' wasn't lost on anyone. But hey, at least we all got plenty of 'character building.' Oh, joy. That said, we survived, we learned, and next quarter can only be... slightly less 'interesting.'"
      },
      connectionToPrevious: "Idioms provide the foundation for understanding cultural humor",
      connectionToNext: "Register shifting requires knowing when humor is appropriate"
    },
    {
      id: 3,
      title: "Register Shifting",
      titleEs: "Cambio de Registro",
      introduction: {
        title: "🔄 Cambio de Registro",
        explanation: "Los hablantes nativos cambian fluidamente entre registros según el contexto. Esta habilidad marca el dominio verdadero del idioma.",
        keyPoints: [
          "Registro formal: 'I would be most grateful if you could...', 'Please be advised that...'",
          "Registro neutral: 'Could you please...', 'I wanted to let you know...'",
          "Registro informal: 'Can you...?', 'Just a heads up...'",
          "Registro coloquial: 'Hey, could ya...?', 'FYI...'",
          "Code-switching: cambiar registro mid-conversation según la audiencia"
        ],
        examples: [
          { english: "Formal: 'I would appreciate it if you could respond at your earliest convenience.' → Informal: 'Get back to me when you can.'", spanish: "Formal: 'Agradecería que respondiera a su conveniencia más temprana.' → Informal: 'Respóndeme cuando puedas.'", explanation: "Mismo mensaje, diferentes registros" },
          { english: "In an email to CEO: 'Please find attached...' vs To colleague: 'Here's that file you wanted.'", spanish: "En email al CEO: 'Adjunto encontrará...' vs A un colega: 'Aquí está el archivo que querías.'", explanation: "Ajustando al destinatario" },
          { english: "Starting formal, then: 'But between you and me, the whole thing is a mess.'", spanish: "Comenzando formal, luego: 'Pero entre tú y yo, todo es un desastre.'", explanation: "Code-switching para crear confianza" }
        ],
        tips: [
          "💡 El registro incorrecto puede ofender o parecer extraño",
          "💡 Cuando dudes, usa registro neutral",
          "💡 Observa cómo te hablan y ajusta tu nivel"
        ],
        whenToUse: [
          'En emails corporativos: "I would be most grateful if you could..." para superiores',
          'En reuniones: code-switching de formal a "between you and me" para crear confianza',
          'En presentaciones: registro elevado para apertura, más cercano para Q&A',
          'En networking: adaptar "Please be advised that..." vs "Just a heads up..." según audiencia'
        ],
        whenNotToUse: [
          'En documentos legales → mantén registro formal consistente, evita coloquialismos',
          'Con amigos cercanos → "Please find attached" suena ridículo; usa lenguaje natural',
          'En contextos multiculturales → el registro muy informal puede malinterpretarse'
        ]
      },
      objectives: ["Identificar diferentes registros", "Cambiar registro fluidamente", "Elegir el registro apropiado"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-register-shift"],
      vocabulary: {
        nouns: [
          { id: "l12t3_n1", word: "register", translation: "registro", type: "noun", definition: "level of formality", definitionEs: "nivel de formalidad", example: "Use the appropriate register.", exampleEs: "Usa el registro apropiado.", related: [], difficulty: 2 },
        ],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l12t3_e1", word: "I would be most grateful if you could...", translation: "Le estaría muy agradecido si pudiera...", type: "expression", definition: "very formal request", definitionEs: "solicitud muy formal", example: "I would be most grateful if you could review this.", exampleEs: "Le estaría muy agradecido si pudiera revisar esto.", related: [], difficulty: 2 },
          { id: "l12t3_e2", word: "Please be advised that...", translation: "Se le informa que...", type: "expression", definition: "formal notification", definitionEs: "notificación formal", example: "Please be advised that the office will close early.", exampleEs: "Se le informa que la oficina cerrará temprano.", related: [], difficulty: 2 },
          { id: "l12t3_e3", word: "Just a heads up...", translation: "Solo para que sepas...", type: "expression", definition: "informal notice", definitionEs: "aviso informal", example: "Just a heads up – the meeting was moved.", exampleEs: "Solo para que sepas – la reunión se movió.", related: [], difficulty: 1 },
          { id: "l12t3_e4", word: "FYI (For Your Information)", translation: "Para tu información", type: "expression", definition: "casual information sharing", definitionEs: "compartir información casual", example: "FYI, I'll be late tomorrow.", exampleEs: "Para tu información, llegaré tarde mañana.", related: [], difficulty: 1 },
          { id: "l12t3_e5", word: "Please find attached...", translation: "Adjunto encontrará...", type: "expression", definition: "formal email language", definitionEs: "lenguaje de email formal", example: "Please find attached the report.", exampleEs: "Adjunto encontrará el informe.", related: [], difficulty: 1 },
          { id: "l12t3_e6", word: "Here's that [thing] you wanted", translation: "Aquí está ese [cosa] que querías", type: "expression", definition: "casual sharing", definitionEs: "compartir casual", example: "Here's that file you wanted.", exampleEs: "Aquí está el archivo que querías.", related: [], difficulty: 1 },
          { id: "l12t3_e7", word: "Between you and me...", translation: "Entre tú y yo...", type: "expression", definition: "confidential, informal", definitionEs: "confidencial, informal", example: "Between you and me, I don't think it'll work.", exampleEs: "Entre tú y yo, no creo que funcione.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t3_cm1", wrong: "Using 'FYI' in email to CEO", correct: "Using 'I wanted to bring to your attention...' with CEO", explanation: "Abbreviations and casual language are inappropriate with senior executives", explanationEs: "Abbreviations and casual language are inappropriate with senior executives", category: "usage" },
        { id: "l12t3_cm2", wrong: "Hey! Just following up on that thing we discussed... (to client)", correct: "Dear [Name], I hope this message finds you well. I'm writing to follow up on our recent discussion...", explanation: "Overly casual language with clients damages professional image", explanationEs: "Overly casual language with clients damages professional image", category: "usage" },
        { id: "l12t3_cm3", wrong: "Please be advised that I'll see you at lunch (to close friend)", correct: "See you at lunch! / Catch you at lunch!", explanation: "Overly formal language with friends creates distance", explanationEs: "Overly formal language with friends creates distance", category: "usage" },
        { id: "l12t3_cm4", wrong: "Mixing registers mid-sentence: 'I would be most grateful if you could kinda help me out'", correct: "Choose one register and maintain it throughout", explanation: "Inconsistent register sounds awkward and confuses the message", explanationEs: "Inconsistent register sounds awkward and confuses the message", category: "usage" },
        { id: "l12t3_cm5", wrong: "Using Latin abbreviations (e.g., i.e., etc.) in spoken English", correct: "Say 'for example', 'that is', and 'and so on' in speech; abbreviations are for writing", explanation: "Reading abbreviations aloud sounds stilted; spell out the words in spoken contexts", explanationEs: "Reading abbreviations aloud sounds stilted; spell out the words in spoken contexts", category: "usage" }
      ],
      exercises: [
        { type: "register-identification", instruction: "Identify the register level of each phrase (Very Formal / Formal / Neutral / Informal / Very Informal)", items: [
          { phrase: "I would be most grateful if you could furnish me with the relevant documentation", register: "Very Formal", context: "Legal or diplomatic correspondence" },
          { phrase: "Could you please send me the documents when you get a chance?", register: "Neutral", context: "Standard professional email" },
          { phrase: "Hey, can you shoot me those docs?", register: "Very Informal", context: "Text to close colleague" },
          { phrase: "Please find attached the requested documents for your review", register: "Formal", context: "Business correspondence" },
          { phrase: "Here are those files you asked about", register: "Informal", context: "Email to known colleague" }
        ]},
        { type: "register-transformation", instruction: "Transform the message to match the indicated register", items: [
          { original: "FYI, the meeting got moved to 3", targetRegister: "Formal", options: ["Please be advised that the meeting has been rescheduled to 3:00 PM", "Just letting you know the meeting's at 3 now", "Heads up - meeting's at 3"], correct: 0 },
          { original: "I would appreciate it if you could provide your feedback at your earliest convenience", targetRegister: "Informal", options: ["Let me know what you think when you can", "Feedback would be appreciated", "Your thoughts would be valued"], correct: 0 },
          { original: "The project is experiencing significant delays", targetRegister: "Very Informal", options: ["The project has encountered obstacles", "The project's running super late", "Project delays have been noted"], correct: 1 },
          { original: "Wanna grab lunch?", targetRegister: "Neutral", options: ["Would you like to have lunch together?", "I request the pleasure of your company for the midday meal", "Lunch?"], correct: 0 }
        ]},
        { type: "audience-matching", instruction: "Choose the appropriate register for each audience", scenarios: [
          { audience: "CEO of partner company, first email", message: "Requesting a meeting", options: ["I would be honored to arrange a meeting at your convenience", "Would you be free to meet sometime?", "Let's set up a call"], correct: 0 },
          { audience: "Teammate you work with daily", message: "Sharing a document", options: ["Please find attached the aforementioned document", "Here's that file we discussed", "I hereby transmit the referenced materials"], correct: 1 },
          { audience: "New client after initial meeting", message: "Following up", options: ["Hey! Great meeting you!", "It was a pleasure meeting you. I wanted to follow up on our discussion.", "Yo, good chat yesterday"], correct: 1 },
          { audience: "Your direct manager in a casual culture", message: "Requesting time off", options: ["I would be most grateful for permission to take leave", "I was hoping to take Friday off if that works?", "I hereby request authorized absence"], correct: 1 }
        ]},
        { type: "code-switching", instruction: "Identify where register shifts occur and whether they're appropriate", dialogues: [
          { conversation: "Email to CEO: 'Dear Ms. Johnson, Thank you for your time yesterday. BTW, I'll send those projections this afternoon.'" , issue: "BTW (informal) clashes with formal opening", correction: "Replace 'BTW' with 'Additionally' or 'I will also'" },
          { conversation: "To colleague: 'Please be advised that I have enclosed herewith the documents... LOL just kidding, here they are!'" , issue: "Intentional register shift for humor can work with close colleagues", correction: "Acceptable with established rapport, awkward otherwise" },
          { conversation: "Client call: 'We're totally stoked about this partnership. I mean, we're very enthusiastic about this opportunity.'", issue: "Self-correction from too casual to appropriate", correction: "Good recovery - shows awareness; better to start at right level" }
        ]}
      ],
      modelDialogue: {
        title: "Register Shifting Through a Workday",
        context: "Same person communicating with different audiences throughout one day",
        dialogue: [
          { speaker: "Morning email to Board Chair", text: "Dear Mr. Harrison, I hope this message finds you well. I am writing to respectfully request your guidance on the proposed acquisition timeline. I would be most grateful for any insights you might share.", note: "Very formal - senior external stakeholder" },
          { speaker: "Email to direct manager", text: "Hi Sarah, Quick question about the acquisition timeline - do you have 10 minutes today to discuss? Let me know what works.", note: "Neutral-informal - established working relationship" },
          { speaker: "Slack to teammate", text: "Hey! Got time for a quick sync on the acquisition stuff? Nothing urgent, just want to compare notes", note: "Informal - peer relationship" },
          { speaker: "Phone call with external client", text: "Good afternoon, this is [Name] from [Company]. I'm calling to follow up on our proposal and answer any questions you might have.", note: "Formal - client relationship" },
          { speaker: "Text to work friend", text: "Ugh this acquisition thing is killing me 😅 Drinks after work?", note: "Very informal - personal relationship" },
          { speaker: "Presentation to board", text: "Ladies and gentlemen, thank you for your time today. I'll be presenting our analysis of the proposed acquisition and our strategic recommendations.", note: "Very formal - board presentation" }
        ],
        keyTakeaways: [
          "Same person, same topic, completely different registers based on audience",
          "Formality increases with: seniority, external status, public setting",
          "Informality is acceptable with: peers, established relationships, private communication",
          "Reading the situation is as important as language skills"
        ]
      },
      pronunciationFocus: {
        title: "Formal Register Vocabulary",
        titleEs: "Vocabulario de registro formal",
        sounds: [
          { symbol: "/ˈredʒɪstər/", word: "register", tip: "REJ-is-ter, soft 'g' like 'j'" },
          { symbol: "/hɪəˈwɪð/", word: "herewith", tip: "Formal writing word, rarely spoken" },
          { symbol: "/əˌfɔːˈmenʃənd/", word: "aforementioned", tip: "uh-FOR-men-shund" },
          { symbol: "/ˌef.waɪˈaɪ/", word: "FYI", tip: "Spelled out: eff-why-eye" }
        ]
      },
      culturalNote: {
        title: "Register Expectations by Culture",
        titleEs: "Expectativas de registro por cultura",
        content: "Register expectations vary by culture and industry. Tech companies often use casual language even with executives ('Hey Mark'), while law firms and banks maintain formality. American business culture tends slightly more casual than British. When uncertain, err formal - you can always relax later, but recovering from too casual is difficult.",
        contentEs: "Las expectativas de registro varían por cultura e industria. Las empresas tecnológicas suelen usar lenguaje casual incluso con ejecutivos ('Hey Mark'), mientras que bufetes y bancos mantienen formalidad. La cultura empresarial americana tiende ligeramente más casual que la británica. Cuando dudes, usa formal: siempre puedes relajarte después, pero recuperarse de demasiado casual es difícil.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "What register is 'Please be advised that...'?", options: ["Very informal", "Informal", "Formal", "Neutral"], correctIndex: 2, explanation: "Legal/business formal language" },
        { question: "When is 'FYI' appropriate?", options: ["Board presentations", "Client emails", "Internal communication with colleagues", "All professional contexts"], correctIndex: 2, explanation: "FYI is casual, best for internal/informal use" },
        { question: "You've been emailing a client formally. They respond casually. You should:", options: ["Maintain your formal register", "Match their casual register", "Become even more formal", "Switch to very informal"], correctIndex: 1, explanation: "When the other party relaxes, you can too - they've set the tone" },
        { question: "What's the main risk of using the wrong register?", options: ["Grammar errors", "Appearing unprofessional or distant", "Legal issues", "Nothing significant"], correctIndex: 1, explanation: "Wrong register damages relationships and professional image" }
      ],
      guidedProduction: {
        scenario: "Write three versions of the same message (announcing a project delay) for three different audiences.",
        promptQuestions: [
          "How would you phrase this for the C-suite in a formal email?",
          "How would you tell your direct team in a team chat?",
          "How would you mention it to a work friend over coffee?"
        ],
        sampleResponse: "C-Suite: 'I regret to inform you that the project timeline has been revised. We now anticipate completion by Q3, rather than Q2. I have attached a detailed analysis of the factors contributing to this adjustment.'\n\nTeam chat: 'Hey team - heads up that we're pushing the deadline to Q3. Let's sync tomorrow to talk through the new timeline.'\n\nWork friend: 'Ugh, project got pushed again. Another quarter of this madness. At least we have more time to get it right, I guess?'"
      },
      connectionToPrevious: "Humor appropriateness depends heavily on register",
      connectionToNext: "Literary devices vary by register - formal writing uses more"
    },
    {
      id: 4,
      title: "Literary Devices in Professional Writing",
      titleEs: "Recursos Literarios en Escritura Profesional",
      introduction: {
        title: "✍️ Recursos Literarios Profesionales",
        explanation: "Los recursos literarios no son solo para novelas. Los mejores escritores de negocios los usan para hacer su comunicación más memorable e impactante.",
        keyPoints: [
          "Aliteración: 'Performance, Precision, Perfection' (eslóganes, títulos)",
          "Metáfora: 'We need to plant seeds now for future growth'",
          "Personificación: 'The data speaks for itself', 'Numbers don't lie'",
          "Paralelismo: 'Not only did we meet the deadline, we exceeded expectations'",
          "Anáfora: 'We will innovate. We will adapt. We will succeed.'"
        ],
        examples: [
          { english: "Our strategy rests on three pillars: innovation, integration, and impact.", spanish: "Nuestra estrategia se basa en tres pilares: innovación, integración e impacto.", explanation: "Aliteración + regla de tres" },
          { english: "We've planted the seeds of change, and now we're starting to see growth.", spanish: "Hemos plantado las semillas del cambio, y ahora estamos empezando a ver crecimiento.", explanation: "Metáfora extendida" },
          { english: "Ask not what your company can do for you, but what you can do for your company.", spanish: "No preguntes qué puede hacer tu empresa por ti, sino qué puedes hacer tú por tu empresa.", explanation: "Antítesis (paralelo de JFK)" }
        ],
        tips: [
          "💡 La regla de tres es poderosísima en presentaciones",
          "💡 Las metáforas deben ser consistentes - no mezcles",
          "💡 Usa recursos con moderación para mayor impacto"
        ],
        whenToUse: [
          'En eslóganes y títulos: "Performance, Precision, Perfection" (aliteración)',
          'En presentaciones ejecutivas: "We will innovate. We will adapt. We will succeed." (anáfora)',
          'En informes estratégicos: "Our strategy rests on three pillars: innovation, integration, impact"',
          'En discursos persuasivos: metáforas extendidas como "plant seeds for future growth"'
        ],
        whenNotToUse: [
          'En documentación técnica → claridad literal sobre impacto retórico',
          'En emails breves de coordinación → evita paralelismo excesivo que suene forzado',
          'Mezclar metáforas incompatibles: "plant seeds" + "navegar aguas" en la misma frase'
        ]
      },
      objectives: ["Usar recursos literarios profesionalmente", "Crear escritura memorable", "Emplear paralelismo efectivo"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-literary-conditionals", "c2-discourse-cohesion"],
      vocabulary: {
        nouns: [
          { id: "l12t4_n1", word: "alliteration", translation: "aliteración", type: "noun", definition: "repeated starting sounds", definitionEs: "sonidos iniciales repetidos", example: "The alliteration makes it catchy.", exampleEs: "La aliteración lo hace pegadizo.", related: [], difficulty: 2 },
          { id: "l12t4_n2", word: "parallelism", translation: "paralelismo", type: "noun", definition: "similar structure repeated", definitionEs: "estructura similar repetida", example: "Use parallelism for emphasis.", exampleEs: "Usa paralelismo para énfasis.", related: [], difficulty: 2 },
          { id: "l12t4_n3", word: "personification", translation: "personificación", type: "noun", definition: "giving human traits to things", definitionEs: "dar rasgos humanos a cosas", example: "The personification makes it vivid.", exampleEs: "La personificación lo hace vívido.", related: [], difficulty: 2 },
        ],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l12t4_e1", word: "The data speaks for itself", translation: "Los datos hablan por sí mismos", type: "expression", definition: "personification of data", definitionEs: "personificación de datos", example: "I don't need to explain – the data speaks for itself.", exampleEs: "No necesito explicar – los datos hablan por sí mismos.", related: [], difficulty: 1 },
          { id: "l12t4_e2", word: "We will [X]. We will [Y]. We will [Z].", translation: "Vamos a [X]. Vamos a [Y]. Vamos a [Z].", type: "expression", definition: "anaphora for emphasis", definitionEs: "anáfora para énfasis", example: "We will adapt. We will innovate. We will lead.", exampleEs: "Nos adaptaremos. Innovaremos. Lideraremos.", related: [], difficulty: 1 },
          { id: "l12t4_e3", word: "Plant the seeds of [X]", translation: "Plantar las semillas de [X]", type: "expression", definition: "metaphor for beginning", definitionEs: "metáfora para comienzo", example: "Let's plant the seeds of change.", exampleEs: "Plantemos las semillas del cambio.", related: [], difficulty: 1 },
          { id: "l12t4_e4", word: "Not only [X], but also [Y]", translation: "No solo [X], sino también [Y]", type: "expression", definition: "parallel structure", definitionEs: "estructura paralela", example: "Not only did we finish, but we excelled.", exampleEs: "No solo terminamos, sino que sobresalimos.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t4_cm1", wrong: "We planted seeds of change and now we're driving momentum", correct: "We planted seeds of change and now we're harvesting the results", explanation: "Don't mix metaphors - stay within the same domain (agriculture)", explanationEs: "Don't mix metaphors - stay within the same domain (agriculture)", category: "usage" },
        { id: "l12t4_cm2", wrong: "Performance, Quality, Excellence (weak alliteration)", correct: "Performance, Precision, Perfection (strong alliteration)", explanation: "For alliteration to be effective, sounds must actually match", explanationEs: "For alliteration to be effective, sounds must actually match", category: "vocabulary" },
        { id: "l12t4_cm3", wrong: "We will innovate. We will adapt. We will probably succeed.", correct: "We will innovate. We will adapt. We will succeed.", explanation: "Anaphora loses power with hedging words - be decisive", explanationEs: "Anaphora loses power with hedging words - be decisive", category: "usage" },
        { id: "l12t4_cm4", wrong: "The numbers don't lie and speak for themselves simultaneously", correct: "The numbers speak for themselves", explanation: "Redundant personification weakens impact - one strong image is enough", explanationEs: "Redundant personification weakens impact - one strong image is enough", category: "usage" },
        { id: "l12t4_cm5", wrong: "We need to synergize our learnings going forward into the future", correct: "We need to apply what we have learned", explanation: "Stacking buzzwords ('synergize', 'learnings', 'going forward', 'into the future') creates corporate noise, not persuasion", explanationEs: "Stacking buzzwords ('synergize', 'learnings', 'going forward', 'into the future') creates corporate noise, not persuasion", category: "usage" }
      ],
      exercises: [
        { type: "device-identification", instruction: "Identify the literary device used in each business statement", items: [
          { statement: "Our strategy stands on three pillars: innovation, integration, and impact", device: ["Alliteration", "Metaphor", "Personification", "Anaphora"], correct: 0, explanation: "Three I-words: innovation, integration, impact" },
          { statement: "We will fight for market share. We will fight for our customers. We will fight for our future.", device: ["Parallelism", "Alliteration", "Anaphora", "Metaphor"], correct: 2, explanation: "Repeated beginning: 'We will fight'" },
          { statement: "The data screams for attention", device: ["Alliteration", "Personification", "Parallelism", "Simile"], correct: 1, explanation: "Data given human ability (screaming)" },
          { statement: "Our company is like a ship navigating through stormy waters", device: ["Metaphor", "Simile", "Personification", "Anaphora"], correct: 1, explanation: "Uses 'like' - comparison with 'like/as' is simile" },
          { statement: "Not only did we meet the deadline, we exceeded every expectation", device: ["Anaphora", "Alliteration", "Parallelism", "Personification"], correct: 2, explanation: "Balanced structure: not only X, but also Y" }
        ]},
        { type: "metaphor-extension", instruction: "Complete the extended metaphor consistently", items: [
          { start: "Our startup is in its infancy. We're learning to", options: ["drive fast", "walk before we run", "spread our wings"], correct: 1, explanation: "Stay with human development metaphor" },
          { start: "We're navigating rough waters, but with the right", options: ["fuel", "crew and compass", "engine"], correct: 1, explanation: "Stay with nautical metaphor" },
          { start: "The seeds of innovation have been planted. Now we need to", options: ["accelerate growth", "nurture and water them", "drive results"], correct: 1, explanation: "Stay with agricultural metaphor" },
          { start: "The foundation is solid. Now it's time to", options: ["plant seeds", "set sail", "build the structure"], correct: 2, explanation: "Stay with construction metaphor" }
        ]},
        { type: "create-parallelism", instruction: "Rewrite using parallel structure", items: [
          { original: "We need to innovate, adaptation is important, and we should lead the market", improved: "We need to innovate, adapt, and lead" },
          { original: "The project requires planning carefully, to execute precisely, and thorough evaluation", improved: "The project requires careful planning, precise execution, and thorough evaluation" },
          { original: "Our goals are: growing revenue, cost reduction, and to improve customer satisfaction", improved: "Our goals are: growing revenue, reducing costs, and improving customer satisfaction" }
        ]},
        { type: "rule-of-three", instruction: "Create impactful statements using the rule of three", prompts: [
          { topic: "Company values", example: "We value integrity, innovation, and impact.", yourTurn: "Create your own three-word values statement" },
          { topic: "Product benefits", example: "Faster. Smarter. Better.", yourTurn: "Create a three-word product statement" },
          { topic: "Call to action", example: "Learn. Build. Succeed.", yourTurn: "Create a three-word call to action" },
          { topic: "Vision statement", example: "We envision a future that is sustainable, equitable, and prosperous.", yourTurn: "Create a three-adjective vision" }
        ]},
        { type: "device-identification-advanced", instruction: "Identify the literary device in each professional statement", items: [
          { statement: "Our competitors are breathing down our necks", device: "Personification", explanation: "Competitors given human action (breathing)" },
          { statement: "We will listen. We will learn. We will lead.", device: "Anaphora", explanation: "Repeated 'We will' at start of each clause" },
          { statement: "The market is a battlefield and we are warriors", device: "Metaphor", explanation: "Market compared to battlefield without like/as" },
          { statement: "Swift, smart, strategic - that's our approach", device: "Alliteration", explanation: "Three S-words" }
        ]},
        { type: "literary-transformation", instruction: "Transform the plain statement using the indicated device", items: [
          { plain: "We need to work together", device: "Metaphor", transformed: "We need to row in the same direction" },
          { plain: "Our goals are innovation and growth", device: "Anaphora", transformed: "We will innovate. We will grow." },
          { plain: "The data shows clear results", device: "Personification", transformed: "The data speaks for itself" },
          { plain: "Our product is fast and reliable", device: "Alliteration", transformed: "Our product is fast, focused, and faultless" }
        ]},
        { type: "metaphor-consistency-check", instruction: "Which completion maintains metaphor consistency?", items: [
          { start: "We've planted the seeds of change. Now we must", options: ["nurture and water them", "drive the results", "accelerate growth"], correct: 0 },
          { start: "The company is navigating stormy waters. We need a", options: ["strong engine", "reliable compass and crew", "better fuel"], correct: 1 },
          { start: "We're building the foundation. Next we", options: ["plant seeds", "construct the structure", "set sail"], correct: 1 },
          { start: "The project is in its infancy. We're", options: ["driving forward", "learning to walk before we run", "flying high"], correct: 1 }
        ]},
        { type: "professional-device-application", instruction: "Choose the most effective literary device for each business context", items: [
          { context: "CEO keynote opening", bestDevice: "Extended metaphor", explanation: "Creates narrative thread for speech" },
          { context: "Product slogan", bestDevice: "Alliteration", explanation: "Memorable, catchy" },
          { context: "Addressing criticism in report", bestDevice: "Personification", explanation: "The data speaks - deflects personal blame" },
          { context: "Call to action in presentation", bestDevice: "Anaphora", explanation: "Builds momentum and emphasis" }
        ]}
      ],
      modelDialogue: {
        title: "CEO Keynote Using Literary Devices",
        context: "Annual company meeting - CEO addressing all employees about the year ahead",
        dialogue: [
          { speaker: "CEO", text: "Good morning, everyone. This year, we stand at a crossroads. The path we choose will define our next decade.", note: "Metaphor: crossroads = decision point" },
          { speaker: "CEO", text: "We have planted the seeds of innovation. We have nurtured them through challenging seasons. And now, we are ready to harvest.", note: "Extended metaphor (agriculture) + anaphora (We have...)" },
          { speaker: "CEO", text: "Our mission is clear: to connect, to create, to conquer.", note: "Alliteration + rule of three" },
          { speaker: "CEO", text: "The market speaks, and it says: customers want more than products. They want partners.", note: "Personification + parallelism" },
          { speaker: "CEO", text: "Not only will we meet their expectations - we will exceed them. Not only will we compete - we will lead.", note: "Double anaphora with parallelism" },
          { speaker: "CEO", text: "This is not just a business strategy. This is a promise. To our customers. To our shareholders. To ourselves.", note: "Parallelism + rule of three" },
          { speaker: "CEO", text: "Together, we will navigate the storms ahead. Together, we will reach new shores.", note: "Extended nautical metaphor + anaphora" },
          { speaker: "CEO", text: "The question is not whether we can succeed. The question is: how high will we soar?", note: "Rhetorical question + metaphor" }
        ],
        keyTakeaways: [
          "Literary devices make speeches memorable and quotable",
          "Extended metaphors create coherent narrative threads",
          "The rule of three creates rhythm and emphasis",
          "Parallelism builds momentum and conviction"
        ]
      },
      pronunciationFocus: {
        title: "Literary Device Terminology",
        titleEs: "Terminología de recursos literarios",
        sounds: [
          { symbol: "/əˌlɪtəˈreɪʃən/", word: "alliteration", tip: "uh-LIT-er-AY-shun, emphasis on 'AY'" },
          { symbol: "/ˈmetəfɔːr/", word: "metaphor", tip: "MET-uh-for, not 'meta-four'" },
          { symbol: "/pəˌsɒnɪfɪˈkeɪʃən/", word: "personification", tip: "per-SON-if-ih-KAY-shun" },
          { symbol: "/ˈpærəlelɪzəm/", word: "parallelism", tip: "PAR-uh-lel-iz-um" }
        ]
      },
      culturalNote: {
        title: "Storytelling in Business Writing",
        titleEs: "Storytelling en escritura profesional",
        content: "Business writing in English increasingly values storytelling and emotional engagement. Steve Jobs was famous for using literary devices in product launches. However, different cultures have different expectations - German business culture values directness over flourish, while American business culture embraces inspirational rhetoric. Know your audience.",
        contentEs: "La escritura profesional en inglés valora cada vez más el storytelling y el engagement emocional. Steve Jobs era famoso por usar recursos literarios en lanzamientos. Sin embargo, culturas diferentes tienen expectativas distintas: la alemana valora directness sobre flourish; la americana abraza la retórica inspiracional. Conoce a tu audiencia.",
        region: "Global"
      },
      consolidationQuiz: [
        { question: "What is the 'rule of three'?", options: ["Using exactly three metaphors", "Presenting ideas in groups of three for impact", "Repeating words three times", "Having three-word sentences"], correctIndex: 1, explanation: "Ideas in threes are memorable: 'Life, liberty, pursuit of happiness'" },
        { question: "Which is an example of personification?", options: ["Sales are like a river", "The data speaks for itself", "Strong, smart, successful", "We will lead, we will win"], correctIndex: 1, explanation: "Personification gives human qualities (speaking) to non-human things (data)" },
        { question: "What's wrong with 'We planted seeds of innovation and drove results'?", options: ["Too many metaphors", "Mixed metaphors (agriculture + driving)", "Too informal", "Grammatically incorrect"], correctIndex: 1, explanation: "Mixed metaphors confuse - stick to one domain" },
        { question: "What makes effective parallelism?", options: ["Different structures for variety", "Same grammatical structure for each element", "Using as many words as possible", "Avoiding repetition"], correctIndex: 1, explanation: "Parallel structure means matching grammatical forms" }
      ],
      guidedProduction: {
        scenario: "Write the opening paragraph of a company-wide email announcing a new initiative. Use at least 3 different literary devices.",
        promptQuestions: [
          "What extended metaphor could frame your announcement?",
          "How could you use the rule of three?",
          "Where might personification add impact?",
          "Can you create parallel structure for emphasis?"
        ],
        sampleResponse: "Team, we're embarking on a journey that will transform how we work. This isn't just a new initiative - it's our compass for the future. We've built the foundation. We've assembled the team. Now, it's time to build something extraordinary. The market is calling for innovation, and we're answering with action, ambition, and achievement."
      },
      connectionToPrevious: "Literary devices work best in formal registers",
      connectionToNext: "Euphemisms are a form of careful word choice like metaphor"
    },
    {
      id: 5,
      title: "Euphemisms and Diplomatic Language",
      titleEs: "Eufemismos y Lenguaje Diplomático",
      introduction: {
        title: "🎭 Eufemismos y Diplomacia",
        explanation: "Los eufemismos suavizan realidades duras. En negocios, son esenciales para comunicar malas noticias sin crear conflicto innecesario.",
        keyPoints: [
          "Despidos: 'downsizing', 'rightsizing', 'letting go', 'making redundant' (UK)",
          "Problemas: 'challenges', 'opportunities for improvement', 'areas of concern'",
          "Fracasos: 'learning experience', 'didn't meet expectations', 'fell short'",
          "Rechazo: 'We've decided to go in a different direction'",
          "Muerte empresarial: 'sunset the product', 'discontinue', 'phase out'"
        ],
        examples: [
          { english: "We're going to have to let some people go as part of our restructuring efforts.", spanish: "Vamos a tener que dejar ir a algunas personas como parte de nuestros esfuerzos de reestructuración.", explanation: "Despidos suavizados" },
          { english: "The product didn't meet market expectations, so we've decided to sunset it.", spanish: "El producto no cumplió las expectativas del mercado, así que decidimos descontinuarlo.", explanation: "Discontinuar producto" },
          { english: "We appreciate your interest, but we've decided to pursue other candidates.", spanish: "Agradecemos su interés, pero hemos decidido seguir con otros candidatos.", explanation: "Rechazo diplomático" }
        ],
        tips: [
          "💡 Los eufemismos son necesarios pero no deben engañar",
          "💡 'Downsizing' es más aceptable que 'firing people'",
          "💡 En UK, 'redundancy' es el término estándar para despidos"
        ],
        whenToUse: [
          'En comunicados de RRHH: "We\'re going to have to let some people go as part of restructuring"',
          'Al rechazar candidatos: "We\'ve decided to go in a different direction"',
          'En informes de resultados: "The product didn\'t meet expectations, so we\'ve decided to sunset it"',
          'En feedback delicado: "There are opportunities for improvement" en lugar de "you failed"'
        ],
        whenNotToUse: [
          'En contextos legales o médicos → precisión sobre diplomacia: evita ambigüedad',
          'Con equipos que necesitan feedback directo → "areas of concern" puede diluir urgencia',
          'Cuando el eufemismo oculta la verdad → "rightsizing" puede sonar cínico si no hay empatía'
        ]
      },
      objectives: ["Usar eufemismos apropiadamente", "Comunicar malas noticias diplomáticamente", "Entender lenguaje corporativo indirecto"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-discourse-cohesion", "c2-register-shift"],
      vocabulary: {
        nouns: [
          { id: "l12t5_n1", word: "euphemism", translation: "eufemismo", type: "noun", definition: "mild expression for harsh reality", definitionEs: "expresión suave para realidad dura", example: "'Passed away' is a euphemism for 'died'.", exampleEs: "'Falleció' es un eufemismo de 'murió'.", related: [], difficulty: 2 },
          { id: "l12t5_n2", word: "downsizing", translation: "reducción de personal", type: "noun", definition: "layoffs", definitionEs: "despidos", example: "The company announced downsizing.", exampleEs: "La empresa anunció reducción de personal.", related: ["downsize"], difficulty: 2 },
          { id: "l12t5_n3", word: "redundancy (UK)", translation: "despido por reestructuración", type: "noun", definition: "job loss due to restructuring", definitionEs: "pérdida de empleo por reestructuración", example: "She was made redundant.", exampleEs: "Fue despedida por reestructuración.", related: ["redundant"], difficulty: 2 },
        ],
        verbs: [
          { id: "l12t5_v1", word: "let go", translation: "dejar ir/despedir", type: "verb", definition: "to fire (euphemism)", definitionEs: "despedir (eufemismo)", example: "We had to let him go.", exampleEs: "Tuvimos que dejarlo ir.", related: [], difficulty: 1 },
          { id: "l12t5_v2", word: "sunset (a product)", translation: "descontinuar", type: "verb", definition: "to phase out", definitionEs: "eliminar gradualmente", example: "We're sunsetting that feature.", exampleEs: "Estamos descontinuando esa función.", related: [], difficulty: 2 },
          { id: "l12t5_v3", word: "phase out", translation: "eliminar gradualmente", type: "verb", definition: "to discontinue gradually", definitionEs: "descontinuar gradualmente", example: "We're phasing out the old system.", exampleEs: "Estamos eliminando gradualmente el viejo sistema.", related: [], difficulty: 1 },
        ],
        adjectives: [],
        expressions: [
          { id: "l12t5_e1", word: "pursue other candidates/opportunities", translation: "seguir con otros candidatos/oportunidades", type: "expression", definition: "polite rejection", definitionEs: "rechazo cortés", example: "We've decided to pursue other candidates.", exampleEs: "Hemos decidido seguir con otros candidatos.", related: [], difficulty: 1 },
          { id: "l12t5_e2", word: "go in a different direction", translation: "ir en una dirección diferente", type: "expression", definition: "polite rejection of proposal", definitionEs: "rechazo cortés de propuesta", example: "We've decided to go in a different direction.", exampleEs: "Hemos decidido ir en una dirección diferente.", related: [], difficulty: 1 },
          { id: "l12t5_e3", word: "opportunity for improvement", translation: "oportunidad de mejora", type: "expression", definition: "euphemism for problem", definitionEs: "eufemismo para problema", example: "I see this as an opportunity for improvement.", exampleEs: "Veo esto como una oportunidad de mejora.", related: [], difficulty: 1 },
          { id: "l12t5_e4", word: "didn't meet expectations", translation: "no cumplió expectativas", type: "expression", definition: "euphemism for failure", definitionEs: "eufemismo para fracaso", example: "The launch didn't meet expectations.", exampleEs: "El lanzamiento no cumplió expectativas.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t5_cm1", wrong: "Using euphemisms when clarity is essential (safety/legal)", correct: "Use direct language for critical safety or legal information", explanation: "Euphemisms can be dangerous when people need clear instructions", explanationEs: "Euphemisms can be dangerous when people need clear instructions", category: "usage" },
        { id: "l12t5_cm2", wrong: "We're excited to let you go to pursue new opportunities", correct: "We have made the difficult decision to eliminate your position", explanation: "Don't use positive language for negative news - it's manipulative", explanationEs: "Don't use positive language for negative news - it's manipulative", category: "usage" },
        { id: "l12t5_cm3", wrong: "Overusing euphemisms until message is unclear", correct: "Balance diplomacy with clarity", explanation: "Too many euphemisms make communication vague and frustrating", explanationEs: "Too many euphemisms make communication vague and frustrating", category: "usage" },
        { id: "l12t5_cm4", wrong: "Your performance has opportunities for improvement (when firing someone)", correct: "Unfortunately, your performance has not met the required standards", explanation: "Euphemisms shouldn't completely obscure serious messages", explanationEs: "Euphemisms shouldn't completely obscure serious messages", category: "usage" },
        { id: "l12t5_cm5", wrong: "Describing a price rise as 'a value realignment'", correct: "If clarity is required, say 'a price increase'; if diplomatic softening is appropriate, 'a pricing adjustment'", explanation: "Euphemisms must still be comprehensible; purely opaque jargon erodes trust", explanationEs: "Euphemisms must still be comprehensible; purely opaque jargon erodes trust", category: "usage" }
      ],
      exercises: [
        { type: "euphemism-decoding", instruction: "What does each corporate euphemism actually mean?", items: [
          { euphemism: "We're rightsizing the organization", actualMeaning: ["Hiring more people", "Laying off employees", "Reorganizing departments"], correct: 1 },
          { euphemism: "We've decided to sunset this product", actualMeaning: ["Launch a new version", "Discontinue/kill the product", "Rebrand the product"], correct: 1 },
          { euphemism: "We're going to have to let you go", actualMeaning: ["Give you a vacation", "Fire you", "Promote you"], correct: 1 },
          { euphemism: "The candidate was overqualified", actualMeaning: ["Too experienced", "We wanted someone cheaper/different", "Extremely talented"], correct: 1 },
          { euphemism: "We're pursuing other opportunities", actualMeaning: ["Expanding operations", "Rejecting this option", "Considering multiple paths"], correct: 1 }
        ]},
        { type: "diplomatic-transformation", instruction: "Transform the direct statement into diplomatic language", items: [
          { direct: "Your idea is bad and won't work", diplomatic: ["That's an interesting perspective. Have you considered the implementation challenges?", "Your idea is somewhat problematic", "I hate this idea"], correct: 0 },
          { direct: "You're fired", diplomatic: ["You're terminated", "We've made the difficult decision to eliminate your position", "Get out"], correct: 1 },
          { direct: "The project failed completely", diplomatic: ["The project was a disaster", "The project didn't achieve its intended outcomes", "The project died"], correct: 1 },
          { direct: "I don't want to do this", diplomatic: ["No", "I have some concerns about this approach that I'd like to discuss", "This is stupid"], correct: 1 }
        ]},
        { type: "uk-us-corporate", instruction: "Match the UK and US equivalents", pairs: [
          { uk: "made redundant", us: "laid off", context: "Job loss due to restructuring" },
          { uk: "taking early retirement", us: "being let go", context: "Forced departure framed positively" },
          { uk: "development opportunity", us: "growth area", context: "Weakness/problem" },
          { uk: "quite good", us: "excellent", context: "British understatement" }
        ]},
        { type: "appropriate-euphemism", instruction: "Choose the most appropriate euphemism for each situation", scenarios: [
          { situation: "Informing employees about layoffs in a company-wide email", options: ["We're firing a bunch of people", "We're implementing a workforce reduction", "People are losing their jobs because of bad management"], correct: 1, explanation: "Professional, neutral language appropriate for formal communication" },
          { situation: "Rejecting a job candidate", options: ["You didn't get the job", "We've decided to move forward with other candidates", "Someone better applied"], correct: 1, explanation: "Diplomatic rejection that preserves candidate's dignity" },
          { situation: "Describing a product that's being discontinued", options: ["This product is dead", "We're sunsetting this product line", "Nobody bought this thing"], correct: 1, explanation: "'Sunset' is standard business euphemism for discontinuation" },
          { situation: "Giving feedback on poor performance", options: ["You're doing a terrible job", "There are areas where we'd like to see improvement", "You've been identified as a poor performer"], correct: 1, explanation: "Focus on improvement rather than criticism" }
        ]},
        { type: "euphemism-to-direct-matching", instruction: "Match each euphemism to its direct meaning", items: [
          { euphemism: "between jobs", direct: "unemployed" },
          { euphemism: "economically challenged", direct: "poor" },
          { euphemism: "passed away", direct: "died" },
          { euphemism: "pre-owned", direct: "used" },
          { euphemism: "let go", direct: "fired" },
          { euphemism: "downsizing", direct: "layoffs" }
        ]},
        { type: "euphemism-fill-blank", instruction: "Complete with the appropriate euphemism", items: [
          { sentence: "We've decided to _____ the legacy product by year-end", options: ["sunset", "kill", "destroy"], correct: 0 },
          { sentence: "The candidate was _____ for the role", options: ["overqualified", "too old", "rejected"], correct: 0 },
          { sentence: "We're pursuing other _____ at this time", options: ["opportunities", "companies", "candidates"], correct: 0 },
          { sentence: "The initiative didn't _____ expectations", options: ["meet", "exceed", "fulfill"], correct: 0 }
        ]},
        { type: "euphemism-decoding-advanced", instruction: "What does each corporate euphemism actually mean?", items: [
          { euphemism: "We're going in a different direction", actualMeaning: ["We're rejecting your proposal", "We're changing strategy", "We're moving offices"], correct: 0 },
          { euphemism: "This is a development opportunity", actualMeaning: ["You need to improve", "We're promoting you", "New training available"], correct: 0 },
          { euphemism: "We're rightsizing the organization", actualMeaning: ["Laying off employees", "Hiring more people", "Reorganizing departments only"], correct: 0 },
          { euphemism: "The project didn't achieve its intended outcomes", actualMeaning: ["The project failed", "The project was delayed", "The project was successful"], correct: 0 }
        ]},
        { type: "euphemism-appropriateness", instruction: "Is the euphemism appropriate for the context?", items: [
          { euphemism: "'passed away' in medical report", appropriate: false, explanation: "Medical/legal contexts require direct language" },
          { euphemism: "'let go' in HR meeting about layoffs", appropriate: true, explanation: "Standard professional euphemism" },
          { euphemism: "'sunset' for product discontinuation in investor call", appropriate: true, explanation: "Common business terminology" },
          { euphemism: "'opportunity for improvement' when firing someone for cause", appropriate: false, explanation: "Too vague for serious performance issues" }
        ]}
      ],
      modelDialogue: {
        title: "Delivering Difficult News Diplomatically",
        context: "Manager informing team about organizational changes including layoffs",
        dialogue: [
          { speaker: "Manager", text: "Thank you all for coming. I wanted to share some news about organizational changes that will affect our team.", note: "Neutral framing, prepares for difficult news" },
          { speaker: "Manager", text: "As you know, the company is going through a period of restructuring to position us for future growth.", note: "'Restructuring' - standard euphemism for changes" },
          { speaker: "Manager", text: "Unfortunately, this means we'll be reducing the size of our team. Some positions will be eliminated.", note: "Clear but diplomatic - 'positions eliminated' not 'people fired'" },
          { speaker: "Team member", text: "When you say positions will be eliminated, what does that mean exactly?", note: "Asking for clarity beyond euphemism" },
          { speaker: "Manager", text: "It means that some of our colleagues will be leaving the company. Those affected will receive comprehensive support including severance packages and outplacement services.", note: "Clarifying while maintaining dignity" },
          { speaker: "Team member", text: "How were these decisions made?", note: "Direct question" },
          { speaker: "Manager", text: "Leadership evaluated all roles based on strategic alignment and future business needs. This wasn't a reflection of individual performance.", note: "'Strategic alignment' - professional framing" },
          { speaker: "Manager", text: "I know this is difficult news. I'm here to answer questions and provide support as we navigate this transition together.", note: "'Transition' - softer than 'layoffs'" }
        ],
        keyTakeaways: [
          "Euphemisms soften difficult messages while maintaining clarity",
          "Be prepared to clarify when people ask for plain language",
          "Focus on support and next steps, not just the bad news",
          "'Transition', 'restructuring', 'changes' are standard softening terms"
        ]
      },
      pronunciationFocus: {
        title: "Corporate Euphemism Vocabulary",
        titleEs: "Vocabulario de eufemismos corporativos",
        sounds: [
          { symbol: "/ˈjuːfəmɪzəm/", word: "euphemism", tip: "YOO-fuh-miz-um" },
          { symbol: "/rɪˈdʌndənsi/", word: "redundancy", tip: "ri-DUN-dun-see" },
          { symbol: "/riːˈstrʌktʃərɪŋ/", word: "restructuring", tip: "ree-STRUK-chur-ing" },
          { symbol: "/ˈaʊtpleɪsmənt/", word: "outplacement", tip: "OUT-place-ment" }
        ]
      },
      culturalNote: {
        title: "Corporate Euphemisms by Culture",
        titleEs: "Eufemismos corporativos por cultura",
        content: "Corporate euphemisms vary by country and industry. American business favors 'let go', 'downsize', 'rightsize'. British business uses 'made redundant', 'early retirement'. Japanese business culture is even more indirect. Understanding these cultural differences prevents misunderstandings in international business.",
        contentEs: "Los eufemismos corporativos varían por país e industria. El negocio americano favorece 'let go', 'downsize', 'rightsize'. El británico usa 'made redundant', 'early retirement'. La cultura japonesa es aún más indirecta. Entender estas diferencias previene malentendidos en negocios internacionales.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "What does 'We're sunsetting this product' mean?", options: ["Launching at sunset", "Discontinuing/killing the product", "Rebranding", "Improving"], correctIndex: 1, explanation: "'Sunset' as a verb means to phase out or discontinue" },
        { question: "When are euphemisms NOT appropriate?", options: ["In rejection letters", "When firing someone", "In safety-critical instructions", "In performance reviews"], correctIndex: 2, explanation: "Safety instructions need absolute clarity" },
        { question: "'Made redundant' is primarily used in:", options: ["American English", "British English", "Australian English only", "Indian English only"], correctIndex: 1, explanation: "British term for being laid off" },
        { question: "What's wrong with 'We're excited to announce layoffs'?", options: ["Grammatically incorrect", "Positive language for negative news is manipulative", "Too formal", "Too informal"], correctIndex: 1, explanation: "Don't combine positive emotions with negative news" }
      ],
      guidedProduction: {
        scenario: "You need to inform your team that a project they worked hard on has been cancelled due to budget cuts.",
        promptQuestions: [
          "How would you open the announcement diplomatically?",
          "What euphemism would you use for 'cancelled'?",
          "How would you acknowledge the team's effort?",
          "What positive framing could you add?"
        ],
        sampleResponse: "Team, I want to share an update about Project Atlas. Due to a strategic reprioritization of resources, we've made the difficult decision to sunset the project. I want to be clear: this decision reflects budget constraints, not the quality of your work. The insights we gained will inform future initiatives, and I'll ensure your contributions are recognized. I'm happy to discuss how we'll transition and what this means for your roles going forward."
      },
      connectionToPrevious: "Euphemisms are a diplomatic form of word choice",
      connectionToNext: "Collocations require knowing the right word combinations"
    },
    {
      id: 6,
      title: "Collocations at Native Level",
      titleEs: "Colocaciones a Nivel Nativo",
      introduction: {
        title: "🔗 Colocaciones Nativas",
        explanation: "Las colocaciones son combinaciones de palabras que suenan 'correctas' a los nativos. Dominarlas es clave para sonar natural.",
        keyPoints: [
          "Adverbio + adjetivo: 'highly unlikely', 'deeply concerned', 'utterly ridiculous'",
          "Verbo + sustantivo: 'raise concerns', 'draw conclusions', 'reach a decision'",
          "Sustantivo + sustantivo: 'turning point', 'ground rules', 'key factor'",
          "Adjetivo + sustantivo: 'vested interest', 'sweeping changes', 'steep learning curve'",
          "Errores comunes: 'make a decision' (no 'do'), 'heavy rain' (no 'strong')"
        ],
        examples: [
          { english: "I have grave concerns about this approach – it's highly unlikely to succeed.", spanish: "Tengo serias preocupaciones sobre este enfoque – es altamente improbable que tenga éxito.", explanation: "grave concerns + highly unlikely" },
          { english: "We need to implement sweeping changes to address the steep learning curve.", spanish: "Necesitamos implementar cambios radicales para abordar la curva de aprendizaje pronunciada.", explanation: "sweeping changes + steep learning curve" },
          { english: "All stakeholders have a vested interest in the outcome.", spanish: "Todas las partes interesadas tienen un interés personal en el resultado.", explanation: "vested interest" }
        ],
        tips: [
          "💡 'Heavy rain', no 'strong rain'; 'strong wind', no 'heavy wind'",
          "💡 'Make a mistake', no 'do a mistake'",
          "💡 Lee mucho en inglés para absorber colocaciones naturalmente"
        ],
        whenToUse: [
          'En escritura profesional: "I have grave concerns about this approach – highly unlikely to succeed"',
          'En presentaciones: "We need to implement sweeping changes to address the steep learning curve"',
          'En análisis: "All stakeholders have a vested interest in the outcome"',
          'En negociación: "We need to reach a decision" y "draw conclusions from the data"'
        ],
        whenNotToUse: [
          'Evita calcos del español: "make a decision" no "take a decision" (UK sí, US no)',
          'No inventes colocaciones: "heavy wind" suena mal → usa "strong wind"',
          'En contextos creativos → las colocaciones fijas pueden limitar; conoce las reglas para romperlas'
        ]
      },
      objectives: ["Usar colocaciones correctamente", "Evitar errores comunes", "Sonar más natural"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c2-discourse-cohesion"],
      vocabulary: {
        nouns: [
          { id: "l12t6_n1", word: "vested interest", translation: "interés personal/creado", type: "noun", definition: "personal stake in outcome", definitionEs: "interés personal en resultado", example: "They have a vested interest.", exampleEs: "Tienen un interés personal.", related: [], difficulty: 2 },
          { id: "l12t6_n2", word: "turning point", translation: "punto de inflexión", type: "noun", definition: "moment of change", definitionEs: "momento de cambio", example: "That was the turning point.", exampleEs: "Ese fue el punto de inflexión.", related: [], difficulty: 1 },
          { id: "l12t6_n3", word: "learning curve", translation: "curva de aprendizaje", type: "noun", definition: "process of learning", definitionEs: "proceso de aprendizaje", example: "There's a steep learning curve.", exampleEs: "Hay una curva de aprendizaje pronunciada.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l12t6_v1", word: "raise concerns", translation: "plantear preocupaciones", type: "verb", definition: "to express worry", definitionEs: "expresar preocupación", example: "I'd like to raise some concerns.", exampleEs: "Me gustaría plantear algunas preocupaciones.", related: [], difficulty: 1 },
          { id: "l12t6_v2", word: "draw conclusions", translation: "sacar conclusiones", type: "verb", definition: "to reach conclusions", definitionEs: "llegar a conclusiones", example: "Let's not draw conclusions too quickly.", exampleEs: "No saquemos conclusiones demasiado rápido.", related: [], difficulty: 1 },
          { id: "l12t6_v3", word: "reach a decision", translation: "llegar a una decisión", type: "verb", definition: "to decide", definitionEs: "decidir", example: "Have you reached a decision?", exampleEs: "¿Han llegado a una decisión?", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l12t6_a1", word: "highly unlikely", translation: "altamente improbable", type: "adjective", definition: "very improbable", definitionEs: "muy improbable", example: "That's highly unlikely.", exampleEs: "Eso es altamente improbable.", related: [], difficulty: 1 },
          { id: "l12t6_a2", word: "deeply concerned", translation: "profundamente preocupado", type: "adjective", definition: "very worried", definitionEs: "muy preocupado", example: "I'm deeply concerned about this.", exampleEs: "Estoy profundamente preocupado por esto.", related: [], difficulty: 1 },
          { id: "l12t6_a3", word: "utterly ridiculous", translation: "completamente ridículo", type: "adjective", definition: "totally absurd", definitionEs: "totalmente absurdo", example: "That's utterly ridiculous.", exampleEs: "Eso es completamente ridículo.", related: [], difficulty: 1 },
          { id: "l12t6_a4", word: "sweeping changes", translation: "cambios radicales", type: "adjective", definition: "major comprehensive changes", definitionEs: "cambios importantes y comprensivos", example: "We need sweeping changes.", exampleEs: "Necesitamos cambios radicales.", related: [], difficulty: 2 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t6_cm1", wrong: "do a decision", correct: "make a decision", explanation: "'Make' collocates with 'decision', not 'do'", explanationEs: "'Make' collocates with 'decision', not 'do'", category: "vocabulary" },
        { id: "l12t6_cm2", wrong: "strong rain", correct: "heavy rain", explanation: "'Heavy' collocates with rain; 'strong' with wind", explanationEs: "'Heavy' collocates with rain; 'strong' with wind", category: "vocabulary" },
        { id: "l12t6_cm3", wrong: "do a mistake", correct: "make a mistake", explanation: "'Make' collocates with 'mistake', not 'do'", explanationEs: "'Make' collocates with 'mistake', not 'do'", category: "vocabulary" },
        { id: "l12t6_cm4", wrong: "absolutely interested", correct: "highly/very interested OR absolutely fascinating", explanation: "'Absolutely' collocates with extreme adjectives, not gradable ones", explanationEs: "'Absolutely' collocates with extreme adjectives, not gradable ones", category: "vocabulary" },
        { id: "l12t6_cm5", wrong: "I have a big interest in this", correct: "I have a keen/strong interest in this", explanation: "'Keen' or 'strong' collocates with interest, not 'big'", explanationEs: "'Keen' or 'strong' collocates with interest, not 'big'", category: "vocabulary" }
      ],
      exercises: [
        { type: "collocation-matching", instruction: "Match the words to form correct collocations", pairs: [
          { word: "raise", matches: ["concerns", "problems", "issues"], incorrect: ["conclusions", "decisions"] },
          { word: "draw", matches: ["conclusions", "attention"], incorrect: ["concerns", "decisions"] },
          { word: "reach", matches: ["a decision", "an agreement", "a conclusion"], incorrect: ["a concern", "an issue"] },
          { word: "highly", matches: ["unlikely", "successful", "recommended"], incorrect: ["impossible", "perfect"] },
          { word: "deeply", matches: ["concerned", "moved", "affected"], incorrect: ["happy", "successful"] },
          { word: "grave", matches: ["concerns", "doubts", "consequences"], incorrect: ["improvements", "opportunities"] }
        ]},
        { type: "error-correction", instruction: "Correct the collocation errors in these sentences", items: [
          { incorrect: "We need to do a decision by Friday", correct: "We need to make a decision by Friday", explanation: "make a decision" },
          { incorrect: "The project has a large learning curve", correct: "The project has a steep learning curve", explanation: "steep learning curve" },
          { incorrect: "Let's not jump to ideas", correct: "Let's not jump to conclusions", explanation: "jump to conclusions" },
          { incorrect: "This caused big changes across the organization", correct: "This caused sweeping changes across the organization", explanation: "sweeping changes" },
          { incorrect: "I have strong concerns about this approach", correct: "I have grave/serious concerns about this approach", explanation: "grave/serious concerns" },
          { incorrect: "That's completely impossible", correct: "That's utterly/absolutely impossible", explanation: "utterly/absolutely impossible" }
        ]},
        { type: "adverb-adjective-matching", instruction: "Choose the correct intensifying adverb for each adjective", items: [
          { adjective: "unlikely", options: ["highly", "deeply", "utterly"], correct: 0, explanation: "highly unlikely is the standard collocation" },
          { adjective: "concerned", options: ["utterly", "deeply", "totally"], correct: 1, explanation: "deeply concerned is the standard collocation" },
          { adjective: "ridiculous", options: ["deeply", "highly", "utterly/absolutely"], correct: 2, explanation: "utterly/absolutely ridiculous" },
          { adjective: "successful", options: ["deeply", "highly", "utterly"], correct: 1, explanation: "highly successful" },
          { adjective: "moved", options: ["utterly", "highly", "deeply"], correct: 2, explanation: "deeply moved (emotional)" }
        ]},
        { type: "verb-noun-completion", instruction: "Complete with the correct verb collocation", items: [
          { sentence: "We need to _____ concerns about the budget", options: ["raise", "do", "create"], correct: 0 },
          { sentence: "Don't _____ conclusions until we have all the facts", options: ["make", "draw", "take"], correct: 1 },
          { sentence: "Have they _____ a decision yet?", options: ["done", "taken", "reached"], correct: 2 },
          { sentence: "This could _____ serious consequences", options: ["make", "have", "do"], correct: 1 },
          { sentence: "She _____ a key role in the project", options: ["made", "played", "did"], correct: 1 }
        ]}
      ],
      modelDialogue: {
        title: "Strategic Meeting Using Native-Level Collocations",
        context: "Executive team discussing market expansion concerns",
        dialogue: [
          { speaker: "CEO", text: "I'd like to raise some concerns about the timeline. We haven't reached a decision on the key factors.", note: "raise concerns, reach a decision, key factors" },
          { speaker: "CFO", text: "I share your grave concerns. It's highly unlikely we'll meet the Q3 deadline.", note: "grave concerns, highly unlikely" },
          { speaker: "COO", text: "The implementation has a steep learning curve. We're still at a turning point.", note: "steep learning curve, turning point" },
          { speaker: "CMO", text: "Let's not draw conclusions too quickly. Every stakeholder has a vested interest in the outcome.", note: "draw conclusions, vested interest" },
          { speaker: "CEO", text: "Fair point. But I'm deeply concerned about the competitive landscape.", note: "deeply concerned" },
          { speaker: "CFO", text: "We need sweeping changes to our approach. The current plan is utterly inadequate.", note: "sweeping changes, utterly inadequate" },
          { speaker: "COO", text: "Before we make any decisions, we should have all the facts. Jumping to conclusions would be a grave mistake.", note: "make decisions, jumping to conclusions, grave mistake" },
          { speaker: "CEO", text: "Agreed. Let's reach an agreement on next steps today.", note: "reach an agreement" }
        ],
        keyTakeaways: [
          "Native speakers use collocations unconsciously - learning them makes you sound natural",
          "Adverb + adjective collocations show sophistication (deeply concerned, highly unlikely)",
          "Verb + noun collocations vary (make/reach/draw + different nouns)",
          "Using wrong collocations marks you as non-native even with perfect grammar"
        ]
      },
      pronunciationFocus: {
        title: "Collocation Vocabulary",
        titleEs: "Vocabulario de colocaciones",
        sounds: [
          { symbol: "/ˈvestɪd/", word: "vested", tip: "VES-tid, not 'vehs-ted'" },
          { symbol: "/ˈʌtərli/", word: "utterly", tip: "UT-ter-lee, T sound clear" },
          { symbol: "/stiːp/", word: "steep", tip: "Long 'ee' sound" },
          { symbol: "/ɡreɪv/", word: "grave", tip: "Like 'brave' but with G" }
        ]
      },
      culturalNote: {
        title: "Mastering Collocations",
        titleEs: "Dominar las colocaciones",
        content: "Collocations are perhaps the biggest challenge for advanced learners because they're arbitrary - there's no logical reason why we say 'heavy rain' not 'strong rain', or 'make a decision' not 'do a decision'. The only way to master them is extensive exposure to native English through reading, listening, and noting patterns.",
        contentEs: "Las colocaciones son quizás el mayor reto para aprendices avanzados porque son arbitrarias: no hay razón lógica para 'heavy rain' vs 'strong rain', o 'make a decision' vs 'do a decision'. La única forma de dominarlas es exposición extensa al inglés nativo mediante lectura, escucha y anotar patrones.",
        region: "Global"
      },
      consolidationQuiz: [
        { question: "Which is correct?", options: ["Do a mistake", "Make a mistake", "Have a mistake", "Take a mistake"], correctIndex: 1, explanation: "'Make a mistake' is the correct collocation" },
        { question: "Complete: We need to _____ a decision", options: ["do", "make", "have", "get"], correctIndex: 1, explanation: "'Make a decision' or 'reach a decision'" },
        { question: "Which adverb goes with 'concerned'?", options: ["Highly", "Utterly", "Deeply", "Totally"], correctIndex: 2, explanation: "'Deeply concerned' is the standard collocation" },
        { question: "Which is correct?", options: ["Big interest", "Large interest", "Keen interest", "Heavy interest"], correctIndex: 2, explanation: "'Keen interest' is the correct collocation" }
      ],
      guidedProduction: {
        scenario: "Write a brief executive summary using at least 8 different native-level collocations correctly.",
        promptQuestions: [
          "How would you express serious worry? (grave/deep + concerns)",
          "How would you talk about making choices? (reach/make + decision)",
          "How would you describe major changes? (sweeping + changes)",
          "How would you express probability? (highly + likely/unlikely)"
        ],
        sampleResponse: "I have grave concerns about our current trajectory. The market data makes it highly unlikely that we'll reach our targets. Before we draw conclusions, we should consider all key factors. Stakeholders have a vested interest in this decision. I recommend we make sweeping changes to our strategy. There's a steep learning curve, but I'm deeply committed to this transformation. Let's reach an agreement on priorities today."
      },
      connectionToPrevious: "Euphemisms require correct word combinations",
      connectionToNext: "Connotations show why word choice matters beyond collocations"
    },
    {
      id: 7,
      title: "Subtle Connotations and Word Choice",
      titleEs: "Connotaciones Sutiles y Elección de Palabras",
      introduction: {
        title: "🎯 Connotaciones y Elección de Palabras",
        explanation: "Las palabras tienen significados denotativos (literales) y connotativos (emocionales). A nivel C2, debes elegir palabras por sus connotaciones.",
        keyPoints: [
          "Positivo vs negativo: 'frugal' (positivo) vs 'cheap' (negativo)",
          "Formal vs informal: 'commence' vs 'start' vs 'kick off'",
          "Intensidad: 'dislike' < 'hate' < 'loathe' < 'despise'",
          "Registro: 'deceased' (formal) vs 'dead' (neutral) vs 'passed' (euphemism)",
          "Matices: 'assertive' (positivo) vs 'aggressive' (negativo)"
        ],
        examples: [
          { english: "He's frugal. (positive) vs He's cheap. (negative) – same meaning, different feeling", spanish: "Es frugal. (positivo) vs Es tacaño. (negativo) – mismo significado, diferente sensación", explanation: "Connotación positiva vs negativa" },
          { english: "She's assertive in meetings. vs She's aggressive in meetings.", spanish: "Ella es asertiva en reuniones. vs Ella es agresiva en reuniones.", explanation: "Asertivo = positivo; agresivo = negativo" },
          { english: "The project will commence next week. vs The project kicks off next week.", spanish: "El proyecto comenzará la próxima semana. vs El proyecto arranca la próxima semana.", explanation: "Formal vs informal" }
        ],
        tips: [
          "💡 'Slender' es halagador; 'skinny' puede ser crítico",
          "💡 'Childlike' es positivo; 'childish' es negativo",
          "💡 Usa diccionarios que incluyan información sobre connotaciones"
        ],
        whenToUse: [
          'En feedback: "She\'s assertive in meetings" (positivo) vs "aggressive" (negativo)',
          'En descripciones: "frugal" para elogiar vs "cheap" para criticar – mismo significado, distinta carga',
          'En escritura formal: "commence" vs "kick off" según registro del documento',
          'En matices emocionales: "dislike" < "hate" < "loathe" < "despise" según intensidad deseada'
        ],
        whenNotToUse: [
          'No uses "cheap" para describir a alguien frugal → connotación negativa ofensiva',
          'Evita "aggressive" cuando quieres elogiar iniciativa → usa "assertive" o "driven"',
          'En documentación técnica → "deceased" puede ser apropiado; "passed" es eufemismo, no neutro'
        ]
      },
      objectives: ["Elegir palabras por connotación", "Entender matices emocionales", "Comunicar con precisión"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-pragmatic-implicature"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [
          { id: "l12t7_a1", word: "frugal (+) vs cheap (-)", translation: "frugal vs tacaño", type: "adjective", definition: "careful with money vs unwilling to spend", definitionEs: "cuidadoso con dinero vs no dispuesto a gastar", example: "She's frugal, not cheap.", exampleEs: "Es frugal, no tacaña.", related: [], difficulty: 2 },
          { id: "l12t7_a2", word: "assertive (+) vs aggressive (-)", translation: "asertivo vs agresivo", type: "adjective", definition: "confident vs forcefully hostile", definitionEs: "confiado vs hostilmente forzoso", example: "Be assertive, not aggressive.", exampleEs: "Sé asertivo, no agresivo.", related: [], difficulty: 2 },
          { id: "l12t7_a3", word: "childlike (+) vs childish (-)", translation: "infantil (bueno) vs infantil (malo)", type: "adjective", definition: "innocent/pure vs immature", definitionEs: "inocente/puro vs inmaduro", example: "His childlike wonder is endearing.", exampleEs: "Su asombro infantil es encantador.", related: [], difficulty: 2 },
          { id: "l12t7_a4", word: "slender (+) vs skinny (-)", translation: "esbelto vs flaco", type: "adjective", definition: "gracefully thin vs too thin", definitionEs: "elegantemente delgado vs demasiado delgado", example: "She has a slender figure.", exampleEs: "Tiene una figura esbelta.", related: [], difficulty: 2 },
          { id: "l12t7_a5", word: "confident (+) vs arrogant (-)", translation: "confiado vs arrogante", type: "adjective", definition: "self-assured vs overly proud", definitionEs: "seguro de sí mismo vs excesivamente orgulloso", example: "He's confident but not arrogant.", exampleEs: "Él es confiado pero no arrogante.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l12t7_e1", word: "commence (formal) / start / kick off (informal)", translation: "comenzar (formal) / empezar / arrancar (informal)", type: "expression", definition: "different registers of 'begin'", definitionEs: "diferentes registros de 'comenzar'", example: "The meeting will commence at 9.", exampleEs: "La reunión comenzará a las 9.", related: [], difficulty: 1 },
          { id: "l12t7_e2", word: "deceased (formal) / dead / passed (euphemism)", translation: "difunto (formal) / muerto / fallecido (eufemismo)", type: "expression", definition: "different ways to say 'dead'", definitionEs: "diferentes formas de decir 'muerto'", example: "The deceased left a will.", exampleEs: "El difunto dejó un testamento.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t7_cm1", wrong: "He's very cheap with money (meaning careful)", correct: "He's very frugal / economical with money", explanation: "'Cheap' has negative connotation; use 'frugal' for positive", explanationEs: "'Cheap' has negative connotation; use 'frugal' for positive", category: "vocabulary" },
        { id: "l12t7_cm2", wrong: "She was aggressive in negotiations (meaning effective)", correct: "She was assertive in negotiations", explanation: "'Aggressive' is negative; 'assertive' is positive", explanationEs: "'Aggressive' is negative; 'assertive' is positive", category: "vocabulary" },
        { id: "l12t7_cm3", wrong: "His childish enthusiasm was inspiring", correct: "His childlike enthusiasm was inspiring", explanation: "'Childlike' is positive (innocent); 'childish' is negative (immature)", explanationEs: "'Childlike' is positive (innocent); 'childish' is negative (immature)", category: "vocabulary" },
        { id: "l12t7_cm4", wrong: "The skinny model looked elegant (meaning slender)", correct: "The slender model looked elegant", explanation: "'Slender' is complimentary; 'skinny' can be critical", explanationEs: "'Slender' is complimentary; 'skinny' can be critical", category: "vocabulary" },
        { id: "l12t7_cm5", wrong: "His eccentric approach alienated colleagues (meaning creative)", correct: "His unconventional approach surprised colleagues", explanation: "'Eccentric' implies oddness bordering on social dysfunction; 'unconventional' or 'innovative' carry a more positive charge", explanationEs: "'Eccentric' implies oddness bordering on social dysfunction; 'unconventional' or 'innovative' carry a more positive charge", category: "vocabulary" }
      ],
      exercises: [
        { type: "connotation-identification", instruction: "Identify whether each word has positive (+), negative (-), or neutral (=) connotation", items: [
          { word: "frugal", connotation: "+", explanation: "Positive - wisely careful with money" },
          { word: "cheap", connotation: "-", explanation: "Negative - unwilling to spend, low quality" },
          { word: "economical", connotation: "=", explanation: "Neutral - factually describes saving money" },
          { word: "assertive", connotation: "+", explanation: "Positive - confident, stands up for self" },
          { word: "aggressive", connotation: "-", explanation: "Negative - hostile, forceful" },
          { word: "firm", connotation: "=", explanation: "Neutral to positive - determined" },
          { word: "stubborn", connotation: "-", explanation: "Negative - unreasonably inflexible" },
          { word: "determined", connotation: "+", explanation: "Positive - committed, persistent" },
          { word: "slender", connotation: "+", explanation: "Positive - gracefully thin" },
          { word: "skinny", connotation: "-", explanation: "Negative - too thin, unhealthy" },
          { word: "thin", connotation: "=", explanation: "Neutral - factual description" }
        ]},
        { type: "word-choice-pairs", instruction: "Choose the more appropriate word for each professional context", scenarios: [
          { context: "Describing a colleague's negotiation style positively", options: ["aggressive", "assertive"], correct: 1, explanation: "'Assertive' is positive; 'aggressive' suggests hostility" },
          { context: "Praising someone's money management", options: ["cheap", "frugal"], correct: 1, explanation: "'Frugal' is positive; 'cheap' is critical" },
          { context: "Describing a CEO's decision-making positively", options: ["stubborn", "determined"], correct: 1, explanation: "'Determined' is positive; 'stubborn' is negative" },
          { context: "Complimenting someone's figure", options: ["skinny", "slender"], correct: 1, explanation: "'Slender' is complimentary; 'skinny' can be critical" },
          { context: "Describing someone who questions everything positively", options: ["nosy", "curious"], correct: 1, explanation: "'Curious' is positive; 'nosy' is intrusive" },
          { context: "Praising attention to detail", options: ["nitpicky", "meticulous"], correct: 1, explanation: "'Meticulous' is positive; 'nitpicky' is annoying" }
        ]},
        { type: "intensity-ordering", instruction: "Arrange words from weakest to strongest intensity", sets: [
          { words: ["loathe", "dislike", "hate", "despise"], correctOrder: ["dislike", "hate", "loathe", "despise"], category: "negative feeling toward something" },
          { words: ["good", "excellent", "adequate", "outstanding"], correctOrder: ["adequate", "good", "excellent", "outstanding"], category: "quality" },
          { words: ["upset", "furious", "annoyed", "livid"], correctOrder: ["annoyed", "upset", "furious", "livid"], category: "anger" },
          { words: ["pleased", "ecstatic", "content", "delighted"], correctOrder: ["content", "pleased", "delighted", "ecstatic"], category: "happiness" }
        ]},
        { type: "connotation-rewrite", instruction: "Rewrite each sentence changing the connotation as indicated", items: [
          { original: "The manager is very aggressive", makePositive: "The manager is very assertive/driven" },
          { original: "She's quite slim", makeNegative: "She's quite skinny" },
          { original: "He's stubborn about his ideas", makePositive: "He's determined/committed to his ideas" },
          { original: "She's nosy about office gossip", makeNeutral: "She's curious about office news" },
          { original: "The plan is cheap", makePositive: "The plan is economical/cost-effective" }
        ]},
        { type: "connotation-word-choice", instruction: "Choose the word with the correct connotation for each context", items: [
          { context: "Praising a colleague's negotiation style", options: ["assertive", "aggressive"], correct: 0 },
          { context: "Describing someone who saves money wisely", options: ["frugal", "cheap"], correct: 0 },
          { context: "Complimenting someone's persistence", options: ["determined", "stubborn"], correct: 0 },
          { context: "Describing attention to detail positively", options: ["meticulous", "nitpicky"], correct: 0 },
          { context: "Describing someone who asks many questions", options: ["curious", "nosy"], correct: 0 }
        ]},
        { type: "connotation-pairs", instruction: "Identify which word in each pair has positive connotation", items: [
          { pair: ["frugal", "cheap"], positive: 0 },
          { pair: ["childlike", "childish"], positive: 0 },
          { pair: ["slender", "skinny"], positive: 0 },
          { pair: ["assertive", "aggressive"], positive: 0 },
          { pair: ["inquisitive", "nosy"], positive: 0 }
        ]},
        { type: "connotation-context-application", instruction: "Select the most appropriate word for the professional context", items: [
          { context: "Performance review - employee doesn't give up easily", word: "determined", explanation: "Positive framing" },
          { context: "Describing budget-conscious approach", word: "economical", explanation: "Neutral/professional" },
          { context: "Feedback on someone who speaks up in meetings", word: "assertive", explanation: "Positive" },
          { context: "Describing a thin colleague in a compliment", word: "slender", explanation: "Complimentary" }
        ]},
        { type: "connotation-intensity", instruction: "Arrange from most negative to most positive connotation", items: [
          { set: ["stingy", "economical", "frugal"], order: [0, 1, 2] },
          { set: ["aggressive", "firm", "assertive"], order: [0, 2, 1] },
          { set: ["skinny", "thin", "slender"], order: [0, 1, 2] },
          { set: ["childish", "youthful", "childlike"], order: [0, 1, 2] }
        ]}
      ],
      modelDialogue: {
        title: "Performance Review: Connotation Matters",
        context: "Manager giving feedback using carefully chosen words",
        dialogue: [
          { speaker: "Manager", text: "Sarah, I want to discuss your performance. First, I appreciate how determined you are to meet deadlines.", note: "Using 'determined' (positive) not 'stubborn'" },
          { speaker: "Sarah", text: "Thank you. I do push hard to deliver on time.", note: "'Push hard' - neutral/positive" },
          { speaker: "Manager", text: "Your attention to detail is meticulous. The reports are always thorough.", note: "'Meticulous' (positive) not 'nitpicky'" },
          { speaker: "Manager", text: "One area for growth: in meetings, you could be more assertive sharing your ideas.", note: "'Assertive' (positive) - encouraging confidence" },
          { speaker: "Sarah", text: "I've been told before I can be too quiet. Or some said 'timid.'", note: "'Timid' has more negative connotation than 'quiet'" },
          { speaker: "Manager", text: "I'd say 'thoughtful' rather than timid. You think before speaking - that's valuable.", note: "Reframing with positive connotation" },
          { speaker: "Manager", text: "Your colleagues describe you as curious and engaged. Those are strengths.", note: "'Curious' (positive) not 'nosy'" },
          { speaker: "Sarah", text: "I appreciate you framing it that way. It helps me see my strengths differently.", note: "Acknowledging the power of word choice" }
        ],
        keyTakeaways: [
          "Word choice in feedback significantly impacts how it's received",
          "Same behavior can be framed positively or negatively",
          "Positive connotations motivate; negative ones demoralize",
          "Choose words that are honest but constructive"
        ]
      },
      pronunciationFocus: {
        title: "Connotation and Trait Vocabulary",
        titleEs: "Vocabulario de connotación y rasgos",
        sounds: [
          { symbol: "/ˈfruːɡəl/", word: "frugal", tip: "FROO-gul" },
          { symbol: "/məˈtɪkjələs/", word: "meticulous", tip: "meh-TIK-yoo-lus" },
          { symbol: "/əˈsɜːtɪv/", word: "assertive", tip: "uh-SUR-tiv" },
          { symbol: "/ˌkɒnəˈteɪʃən/", word: "connotation", tip: "kon-uh-TAY-shun" }
        ]
      },
      culturalNote: {
        title: "Connotation Across Cultures",
        titleEs: "Connotación entre culturas",
        content: "Connotation awareness is crucial for international communication. What seems positive in one culture may be negative in another. 'Ambitious' is positive in American English but can be negative in British English (implying ruthlessness). 'Childlike' is positive in English but may not translate well. Always consider cultural context when choosing emotionally loaded words.",
        contentEs: "La conciencia de connotación es crucial para comunicación internacional. Lo que parece positivo en una cultura puede ser negativo en otra. 'Ambitious' es positivo en inglés americano pero puede ser negativo en británico (implicando crueldad). 'Childlike' es positivo en inglés pero puede no traducirse bien. Siempre considera el contexto cultural al elegir palabras cargadas emocionalmente.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "Which word has a positive connotation for someone who spends carefully?", options: ["Cheap", "Stingy", "Frugal", "Tight-fisted"], correctIndex: 2, explanation: "'Frugal' implies wisdom; others imply unwillingness" },
        { question: "'Childlike' vs 'Childish': which is positive?", options: ["Childlike", "Childish", "Both", "Neither"], correctIndex: 0, explanation: "'Childlike' (innocent) is positive; 'childish' (immature) is negative" },
        { question: "Arrange from least to most intense: dislike, loathe, hate", options: ["hate, dislike, loathe", "dislike, hate, loathe", "loathe, hate, dislike", "dislike, loathe, hate"], correctIndex: 1, explanation: "dislike < hate < loathe in intensity" },
        { question: "In professional feedback, which is better: 'You're stubborn' or 'You're determined'?", options: ["Stubborn", "Determined", "Same meaning", "Both negative"], correctIndex: 1, explanation: "'Determined' frames persistence positively" }
      ],
      guidedProduction: {
        scenario: "Write a brief character description using words with positive connotations, then rewrite it using words with negative connotations for the same traits.",
        promptQuestions: [
          "How would you positively describe someone who asks many questions? (curious vs nosy)",
          "How would you positively describe someone who spends little? (frugal vs cheap)",
          "How would you positively describe someone who doesn't give up? (determined vs stubborn)",
          "How would you positively describe someone who speaks their mind? (assertive vs aggressive)"
        ],
        sampleResponse: "POSITIVE: Maria is a curious professional who asks thoughtful questions. She's frugal with budgets without sacrificing quality. Her determined approach ensures projects succeed. In meetings, she's assertive and confident.\n\nNEGATIVE (same person): Maria is a nosy employee who constantly interrogates colleagues. She's cheap with budgets to a fault. Her stubborn approach creates friction. In meetings, she's aggressive and domineering."
      },
      connectionToPrevious: "Collocations are about correct combinations; connotations are about emotional impact",
      connectionToNext: "Implicit meaning requires understanding connotations beneath the surface"
    },
    {
      id: 8,
      title: "Implicit Meaning and Reading Between the Lines",
      titleEs: "Significado Implícito y Leer Entre Líneas",
      introduction: {
        title: "🔮 Significado Implícito",
        explanation: "A nivel C2, debes entender no solo lo que se dice, sino lo que se implica. Esto es crucial en comunicación profesional y diplomática.",
        keyPoints: [
          "Negación suave: 'That's an interesting approach' = probablemente no me gusta",
          "Hesitación: 'I'll see what I can do' = probablemente no",
          "Condiciones imposibles: 'If we had unlimited budget...' = no lo tenemos",
          "Preguntas retóricas negativas: 'Is that really the best approach?' = no lo es",
          "Silencio estratégico: lo que NO se dice puede ser más importante"
        ],
        examples: [
          { english: "Manager: 'That's certainly one way to look at it.' (Implicit: I disagree)", spanish: "Gerente: 'Esa es ciertamente una manera de verlo.' (Implícito: No estoy de acuerdo)", explanation: "Acuerdo superficial, desacuerdo implícito" },
          { english: "I'll have to think about it and get back to you. (Often means 'no')", spanish: "Tendré que pensarlo y comunicarme contigo. (A menudo significa 'no')", explanation: "Rechazo indirecto" },
          { english: "That's above my pay grade. (Implicit: I don't want to decide / not my responsibility)", spanish: "Eso está por encima de mi nivel salarial. (Implícito: No quiero decidir / no es mi responsabilidad)", explanation: "Evitando responsabilidad" }
        ],
        tips: [
          "💡 'Interesting' sin entusiasmo a menudo significa desaprobación",
          "💡 Presta atención al tono y al lenguaje corporal",
          "💡 Lo que la gente evita decir puede ser la información clave"
        ],
        whenToUse: [
          'Al detectar desacuerdo diplomático: "That\'s certainly one way to look at it" = I disagree',
          'Rechazo indirecto profesional: "I\'ll have to think about it and get back to you" = often no',
          'Evitar responsabilidad: "That\'s above my pay grade" = no quiero decidir',
          'En negociación: "If we had unlimited budget..." = condicional imposible, no lo tenemos'
        ],
        whenNotToUse: [
          'En comunicaciones críticas → si "I\'ll see what I can do" puede malinterpretarse, sé explícito',
          'Con equipos multiculturales → el significado implícito británico/americano puede perderse',
          'Cuando la claridad es legalmente necesaria → evita ambigüedad deliberada'
        ]
      },
      objectives: ["Entender significados implícitos", "Detectar rechazo indirecto", "Leer entre líneas"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-pragmatic-implicature"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l12t8_e1", word: "That's an interesting approach", translation: "Ese es un enfoque interesante", type: "expression", definition: "often means disagreement", definitionEs: "a menudo significa desacuerdo", example: "That's an interesting approach... (but I don't agree)", exampleEs: "Ese es un enfoque interesante... (pero no estoy de acuerdo)", related: [], difficulty: 2 },
          { id: "l12t8_e2", word: "I'll see what I can do", translation: "Veré qué puedo hacer", type: "expression", definition: "often means probably not", definitionEs: "a menudo significa probablemente no", example: "I'll see what I can do. (= probably nothing)", exampleEs: "Veré qué puedo hacer. (= probablemente nada)", related: [], difficulty: 1 },
          { id: "l12t8_e3", word: "That's above my pay grade", translation: "Eso está por encima de mi nivel", type: "expression", definition: "avoiding responsibility", definitionEs: "evitando responsabilidad", example: "That decision is above my pay grade.", exampleEs: "Esa decisión está por encima de mi nivel.", related: [], difficulty: 2 },
          { id: "l12t8_e4", word: "I'll get back to you", translation: "Te contactaré", type: "expression", definition: "often means delayed/no response", definitionEs: "a menudo significa respuesta retrasada/sin respuesta", example: "Let me think about it and I'll get back to you.", exampleEs: "Déjame pensarlo y te contactaré.", related: [], difficulty: 1 },
          { id: "l12t8_e5", word: "Is that really the best approach?", translation: "¿Es ese realmente el mejor enfoque?", type: "expression", definition: "implies it isn't", definitionEs: "implica que no lo es", example: "Is that really the best use of our time?", exampleEs: "¿Es ese realmente el mejor uso de nuestro tiempo?", related: [], difficulty: 1 },
          { id: "l12t8_e6", word: "With all due respect...", translation: "Con todo el debido respeto...", type: "expression", definition: "often precedes disagreement", definitionEs: "a menudo precede desacuerdo", example: "With all due respect, I disagree.", exampleEs: "Con todo el debido respeto, no estoy de acuerdo.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t8_cm1", wrong: "Taking 'That's interesting' at face value in business", correct: "Recognize that 'interesting' without enthusiasm often signals disapproval", explanation: "Flat delivery of 'interesting' is often diplomatic disagreement", explanationEs: "Flat delivery of 'interesting' is often diplomatic disagreement", category: "usage" },
        { id: "l12t8_cm2", wrong: "Assuming 'I'll get back to you' means they will", correct: "Understand it often means 'probably no' or delayed indefinitely", explanation: "This phrase is frequently used to avoid immediate rejection", explanationEs: "This phrase is frequently used to avoid immediate rejection", category: "usage" },
        { id: "l12t8_cm3", wrong: "Not noticing what's NOT being said", correct: "Pay attention to topics being avoided - they may be the key issues", explanation: "Strategic silence often reveals more than words", explanationEs: "Strategic silence often reveals more than words", category: "usage" },
        { id: "l12t8_cm4", wrong: "Interpreting 'With all due respect' as actual respect", correct: "Prepare for disagreement when you hear 'With all due respect'", explanation: "This phrase signals upcoming challenge to your position", explanationEs: "This phrase signals upcoming challenge to your position", category: "usage" },
        { id: "l12t8_cm5", wrong: "Taking 'We should catch up soon' as a firm appointment", correct: "Treat 'We should catch up soon' as a social pleasantry unless a date is agreed", explanation: "In British English especially, vague social invitations are often polite closings, not genuine commitments", explanationEs: "In British English especially, vague social invitations are often polite closings, not genuine commitments", category: "usage" }
      ],
      exercises: [
        { type: "implicit-decoding", instruction: "What does each statement likely REALLY mean?", items: [
          { statement: "That's an interesting idea...", implicitMeaning: ["I love it", "I probably disagree", "Tell me more"], correct: 1, context: "Said with flat tone, no follow-up questions" },
          { statement: "I'll have to run it by my team", implicitMeaning: ["Enthusiastic yes", "Polite delay/soft no", "Definitely will discuss"], correct: 1, context: "Response to a proposal" },
          { statement: "That's above my pay grade", implicitMeaning: ["I'll escalate this", "I don't want to deal with this", "I need a raise"], correct: 1, context: "Response to a difficult request" },
          { statement: "We'll keep your resume on file", implicitMeaning: ["You're a top candidate", "We'll call you soon", "You didn't get the job"], correct: 2, context: "After an interview" },
          { statement: "Let me think about it", implicitMeaning: ["Genuinely considering", "Likely no", "Definitely yes"], correct: 1, context: "Immediate response to request" },
          { statement: "I appreciate your enthusiasm", implicitMeaning: ["Great job!", "Calm down / you're being too much", "Keep up the energy"], correct: 1, context: "After someone pushes hard for an idea" }
        ]},
        { type: "contextual-interpretation", instruction: "What does the silence or omission suggest?", scenarios: [
          { situation: "Your proposal addressed cost, timeline, and quality. The response only mentions cost savings.", question: "What might be the concern?", interpretation: "Timeline and/or quality may be issues they're not addressing directly" },
          { situation: "In a team meeting, everyone discusses the project except one key stakeholder who says nothing.", question: "What might this suggest?", interpretation: "The silent stakeholder may disagree or have concerns they're not voicing publicly" },
          { situation: "The email praise mentions 'effort' and 'dedication' but not 'results' or 'success'", question: "What might this mean?", interpretation: "Results may not have met expectations despite hard work" },
          { situation: "After your presentation, the executive says 'Let's discuss this offline'", question: "What might this suggest?", interpretation: "There may be concerns they don't want to raise publicly - could be positive or negative" }
        ]},
        { type: "rhetorical-question-analysis", instruction: "Analyze what these rhetorical questions actually communicate", items: [
          { question: "Is that really the best use of our resources?", actualMeaning: "I don't think that's the best use of our resources", tone: "Diplomatic disagreement" },
          { question: "Have we considered all the implications?", actualMeaning: "I don't think we've thought this through", tone: "Cautious concern" },
          { question: "Shouldn't we wait for more data?", actualMeaning: "I think we should wait for more data", tone: "Suggesting delay" },
          { question: "Is everyone comfortable with this approach?", actualMeaning: "I have concerns about this approach", tone: "Seeking allies in disagreement" }
        ]},
        { type: "diplomatic-phrases-practice", instruction: "Match the diplomatic phrase with its likely real meaning", pairs: [
          { diplomatic: "That's certainly one way to look at it", realMeaning: "I disagree with your perspective" },
          { diplomatic: "I hear what you're saying", realMeaning: "I understand but don't agree" },
          { diplomatic: "We should probably touch base later", realMeaning: "I'm not deciding now / probably no" },
          { diplomatic: "That's ambitious", realMeaning: "That's unrealistic" },
          { diplomatic: "We might need to revisit the timeline", realMeaning: "The deadline is going to be missed" }
        ]},
        { type: "implicit-reading-comprehension", instruction: "Read the passage and infer the implicit meaning", items: [
          { passage: "The feedback praised your dedication and effort. Results were not mentioned.", inference: "Results may have been disappointing", explanation: "Praising effort without results often implies results fell short" },
          { passage: "We'll keep your resume on file for future opportunities.", inference: "You didn't get the job", explanation: "Standard polite rejection phrase" },
          { passage: "That's an interesting approach. Let me think about it.", inference: "Likely rejection or serious concerns", explanation: "Interesting + delay often signals no" },
          { passage: "The proposal addresses cost well. We'll need to discuss further.", inference: "Timeline or quality may be concerns", explanation: "Focusing on one aspect implies others are problematic" }
        ]},
        { type: "inference-from-silence", instruction: "What might the omission or silence suggest?", items: [
          { situation: "Performance review mentions 'growth areas' but not 'strengths'", inference: "Performance may be below expectations" },
          { situation: "Email says 'I'll get back to you' with no timeline", inference: "May not respond or will delay indefinitely" },
          { situation: "Response to proposal only addresses one of three points you raised", inference: "The unaddressed points may be the real concerns" },
          { situation: "Someone says 'I appreciate your enthusiasm' after you pushed for an idea", inference: "They may want you to calm down or back off" }
        ]},
        { type: "implicit-meaning-matching", instruction: "Match the statement to its implicit meaning", items: [
          { statement: "I'll have to run it by my team", implicit: "Polite delay / soft no" },
          { statement: "That's above my pay grade", implicit: "I don't want to deal with this" },
          { statement: "We should probably revisit this", implicit: "I have concerns / probably no" },
          { statement: "I see what you're saying", implicit: "I understand but don't agree" }
        ]},
        { type: "reading-between-lines", instruction: "What is the speaker really communicating?", items: [
          { statement: "Your presentation was... comprehensive. (long pause)", realMeaning: "It was too long or unfocused", explanation: "Pause + single adjective often signals criticism" },
          { statement: "We're exploring several options at this stage", realMeaning: "Your proposal isn't the only one / we're not committed", explanation: "Vague language suggests non-commitment" },
          { statement: "I'll see what I can do", realMeaning: "Probably nothing", explanation: "Classic soft no" },
          { statement: "Let's take this offline", realMeaning: "I don't want to discuss this publicly", explanation: "Could be positive or negative - needs private discussion" }
        ]}
      ],
      modelDialogue: {
        title: "Reading Between the Lines in a Business Meeting",
        context: "Team discussing a proposal - demonstrating implicit communication",
        dialogue: [
          { speaker: "Presenter", text: "So that's my proposal. I think it's a game-changer for Q4.", note: "Enthusiastic pitch" },
          { speaker: "Senior Manager", text: "That's... interesting. *pause* You've clearly put a lot of effort into this.", note: "RED FLAG: 'Interesting' + pause + praising effort (not results) = likely skepticism" },
          { speaker: "Presenter", text: "Thank you. What are your thoughts on the implementation timeline?", note: "Testing the waters" },
          { speaker: "Senior Manager", text: "Well, that's above my pay grade. I'll need to run it by the executive team.", note: "'Above my pay grade' + 'run it by' = deflection, not commitment" },
          { speaker: "Finance Lead", text: "Is this really the best use of our Q4 budget?", note: "Rhetorical question = 'I don't think so'" },
          { speaker: "Senior Manager", text: "Let's park that for now. We should probably touch base after I've had time to think about it.", note: "'Park' + 'think about it' = delayed/soft no" },
          { speaker: "Presenter (later, aside)", text: "So... that didn't go well.", note: "Presenter correctly read the implicit rejection" },
          { speaker: "Colleague", text: "No. When Linda says 'interesting' like that, it means 'absolutely not.'", note: "Confirming the implicit meaning" }
        ],
        keyTakeaways: [
          "'Interesting' without enthusiasm often means disapproval",
          "Praising 'effort' instead of 'results' is a red flag",
          "Rhetorical questions usually contain the speaker's real opinion",
          "'I'll think about it' and 'Let's touch base later' often mean delayed rejection"
        ]
      },
      pronunciationFocus: {
        title: "Implicit Communication Vocabulary",
        titleEs: "Vocabulario de comunicación implícita",
        sounds: [
          { symbol: "/ɪmˈplɪsɪt/", word: "implicit", tip: "im-PLIS-it" },
          { symbol: "/rɪˈtɒrɪkəl/", word: "rhetorical", tip: "ri-TOR-i-kul" },
          { symbol: "/ˈnjuːɑːns/", word: "nuance", tip: "NYOO-ahns" },
          { symbol: "/ˈsʌbtekst/", word: "subtext", tip: "SUB-tekst" }
        ]
      },
      culturalNote: {
        title: "Indirect Communication Across Cultures",
        titleEs: "Comunicación indirecta entre culturas",
        content: "Indirect communication is highly cultural. British and Japanese business culture often relies heavily on implicit meaning - rejection is rarely direct. American business tends to be more explicit, though still uses softening language. In some cultures, direct rejection is considered rude; in others, indirect rejection is seen as dishonest. Understanding these differences is essential for international business.",
        contentEs: "La comunicación indirecta es altamente cultural. La cultura británica y japonesa suele depender mucho del significado implícito: el rechazo rara vez es directo. La americana tiende a ser más explícita, aunque usa lenguaje suavizado. En algunas culturas el rechazo directo es grosero; en otras el indirecto se ve como deshonesto. Entender estas diferencias es esencial para negocios internacionales.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "When someone says 'That's interesting...' with a flat tone, they likely:", options: ["Love your idea", "Are neutral", "Disagree or are skeptical", "Need more information"], correctIndex: 2, explanation: "Flat 'interesting' often signals diplomatic disagreement" },
        { question: "'I'll get back to you' often means:", options: ["They will definitely respond", "Delayed or indirect 'no'", "They're very interested", "They need your contact info"], correctIndex: 1, explanation: "This phrase frequently avoids immediate rejection" },
        { question: "Rhetorical questions like 'Is that really the best approach?' usually:", options: ["Seek information", "Express the speaker's opposing view", "Are genuine questions", "Show enthusiasm"], correctIndex: 1, explanation: "Rhetorical questions often contain the speaker's opinion" },
        { question: "If feedback praises your 'effort' but not 'results', this suggests:", options: ["Great success", "Moderate performance", "Results may be disappointing", "Nothing specific"], correctIndex: 2, explanation: "Praising effort without mentioning results is often a subtle criticism" }
      ],
      guidedProduction: {
        scenario: "Write a diplomatic email declining a proposal you've received, using implicit language rather than direct rejection.",
        promptQuestions: [
          "How would you acknowledge the proposal positively without committing?",
          "What diplomatic phrase could you use to signal concerns?",
          "How might you delay without outright refusing?",
          "What implicit meaning would your phrases carry?"
        ],
        sampleResponse: "Thank you for sharing this proposal. It's certainly an interesting approach, and I can see you've put significant effort into it. I'd like to run it by a few colleagues and perhaps revisit some of the assumptions. Let's touch base in a few weeks once I've had time to give it the consideration it deserves. In the meantime, you might want to explore how this aligns with our current strategic priorities.\n\n[Implicit meaning: I have concerns, I'm not committing, the timeline is vague because I'm unlikely to pursue this, and I'm suggesting you might find it doesn't fit our priorities.]"
      },
      connectionToPrevious: "Connotations affect explicit meaning; implicit meaning goes beneath the surface",
      connectionToNext: "Cultural references often carry implicit meanings from their origins"
    },
    {
      id: 9,
      title: "Cultural References in English",
      titleEs: "Referencias Culturales en Inglés",
      introduction: {
        title: "🌍 Referencias Culturales",
        explanation: "El inglés está lleno de referencias culturales de literatura, historia, deportes y cultura pop que los nativos usan constantemente.",
        keyPoints: [
          "Literatura: 'Catch-22', 'Big Brother', 'a Dickensian situation'",
          "Mitología/Biblia: 'Herculean task', 'a Good Samaritan', 'a Judas'",
          "Deportes: 'touch base', 'ballpark figure', 'home run', 'drop the ball'",
          "Historia: 'Waterloo', 'a Pyrrhic victory', 'crossing the Rubicon'",
          "Cultura pop: 'jump the shark', '15 minutes of fame', 'the elephant in the room'"
        ],
        examples: [
          { english: "Getting approval from both departments is a real Catch-22 situation.", spanish: "Obtener aprobación de ambos departamentos es una verdadera situación Catch-22.", explanation: "Del libro de Joseph Heller - situación sin salida" },
          { english: "Implementing this will be a Herculean task, but not impossible.", spanish: "Implementar esto será una tarea hercúlea, pero no imposible.", explanation: "Referencia a los trabajos de Hércules" },
          { english: "Let's not ignore the elephant in the room – we're over budget.", spanish: "No ignoremos el elefante en la habitación – estamos por encima del presupuesto.", explanation: "El problema obvio que nadie menciona" }
        ],
        tips: [
          "💡 'Catch-22' = situación donde cualquier acción lleva al mismo problema",
          "💡 'Jump the shark' = el momento donde algo empieza a declinar (de Happy Days)",
          "💡 Conocer estas referencias mejora enormemente tu comprensión"
        ],
        whenToUse: [
          'En análisis empresarial: "Getting approval from both departments is a real Catch-22 situation"',
          'En descripción de desafíos: "Implementing this will be a Herculean task, but not impossible"',
          'En reuniones directas: "Let\'s not ignore the elephant in the room – we\'re over budget"',
          'En escritura periodística: "a Pyrrhic victory", "crossing the Rubicon", "ballpark figure"'
        ],
        whenNotToUse: [
          'Con audiencia internacional no anglófona → "Pandora\'s box" o "Achilles heel" pueden confundir',
          'En documentos técnicos traducibles → las referencias culturales no se localizan bien',
          'No abuses de referencias literarias en contextos de negocio → puede sonar pretensioso'
        ]
      },
      objectives: ["Entender referencias culturales comunes", "Usar referencias apropiadamente", "Conectar con hablantes nativos"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c2-pragmatic-implicature"],
      vocabulary: {
        nouns: [
          { id: "l12t9_n1", word: "Catch-22", translation: "situación sin salida", type: "noun", definition: "no-win situation", definitionEs: "situación donde no puedes ganar", example: "It's a Catch-22.", exampleEs: "Es una situación sin salida.", related: [], difficulty: 2 },
          { id: "l12t9_n2", word: "Big Brother", translation: "Gran Hermano", type: "noun", definition: "authoritarian surveillance", definitionEs: "vigilancia autoritaria", example: "It feels like Big Brother is watching.", exampleEs: "Se siente como si el Gran Hermano estuviera vigilando.", related: [], difficulty: 2 },
          { id: "l12t9_n3", word: "Good Samaritan", translation: "Buen Samaritano", type: "noun", definition: "helpful stranger", definitionEs: "extraño que ayuda", example: "A Good Samaritan helped me.", exampleEs: "Un Buen Samaritano me ayudó.", related: [], difficulty: 1 },
        ],
        verbs: [],
        adjectives: [
          { id: "l12t9_a1", word: "Herculean (task)", translation: "hercúleo", type: "adjective", definition: "requiring great effort", definitionEs: "requiriendo gran esfuerzo", example: "It's a Herculean task.", exampleEs: "Es una tarea hercúlea.", related: [], difficulty: 2 },
          { id: "l12t9_a2", word: "Dickensian", translation: "dickensiano", type: "adjective", definition: "reminiscent of Dickens' works (poverty, social problems)", definitionEs: "que recuerda a las obras de Dickens (pobreza, problemas sociales)", example: "The working conditions are Dickensian.", exampleEs: "Las condiciones de trabajo son dickensianas.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l12t9_e1", word: "the elephant in the room", translation: "el elefante en la habitación", type: "expression", definition: "obvious problem no one mentions", definitionEs: "problema obvio que nadie menciona", example: "Let's address the elephant in the room.", exampleEs: "Abordemos el elefante en la habitación.", related: [], difficulty: 1 },
          { id: "l12t9_e2", word: "cross the Rubicon", translation: "cruzar el Rubicón", type: "expression", definition: "pass point of no return", definitionEs: "pasar el punto sin retorno", example: "We've crossed the Rubicon now.", exampleEs: "Ya cruzamos el Rubicón.", related: [], difficulty: 2 },
          { id: "l12t9_e3", word: "meet your Waterloo", translation: "encontrar tu Waterloo", type: "expression", definition: "suffer decisive defeat", definitionEs: "sufrir derrota decisiva", example: "The project met its Waterloo.", exampleEs: "El proyecto encontró su Waterloo.", related: [], difficulty: 2 },
          { id: "l12t9_e4", word: "fifteen minutes of fame", translation: "quince minutos de fama", type: "expression", definition: "brief celebrity (from Andy Warhol)", definitionEs: "celebridad breve (de Andy Warhol)", example: "Everyone gets their fifteen minutes of fame.", exampleEs: "Todos obtienen sus quince minutos de fama.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t9_cm1", wrong: "Using 'Catch-22' to mean any difficult situation", correct: "'Catch-22' specifically means a paradox where any choice leads to the same problem", explanation: "Catch-22 is a specific type of no-win situation, not just any challenge", explanationEs: "Catch-22 is a specific type of no-win situation, not just any challenge", category: "vocabulary" },
        { id: "l12t9_cm2", wrong: "Using 'elephant in the room' for any problem", correct: "'Elephant in the room' is an obvious issue everyone avoids mentioning", explanation: "The key is that it's obvious AND being avoided, not just any problem", explanationEs: "The key is that it's obvious AND being avoided, not just any problem", category: "vocabulary" },
        { id: "l12t9_cm3", wrong: "Confusing 'Herculean' with 'impossible'", correct: "'Herculean' means requiring great effort but achievable", explanation: "Hercules completed his tasks - they were hard but possible", explanationEs: "Hercules completed his tasks - they were hard but possible", category: "vocabulary" },
        { id: "l12t9_cm4", wrong: "Using references the audience doesn't know", correct: "Match cultural references to your audience's knowledge", explanation: "Using obscure references alienates rather than impresses", explanationEs: "Using obscure references alienates rather than impresses", category: "usage" },
        { id: "l12t9_cm5", wrong: "Describing a hopeless romantic situation as 'a Catch-22'", correct: "Use 'Catch-22' only for a self-defeating paradox (e.g., needing a job to get experience, needing experience to get a job)", explanation: "Catch-22 requires a specific circular logic trap; not all difficult situations qualify", explanationEs: "Catch-22 requires a specific circular logic trap; not all difficult situations qualify", category: "vocabulary" }
      ],
      exercises: [
        { type: "reference-origin", instruction: "Match each cultural reference to its origin", items: [
          { reference: "Catch-22", origin: ["Greek mythology", "Joseph Heller novel", "Shakespeare play", "Biblical story"], correct: 1, explanation: "From Joseph Heller's 1961 novel about absurd military bureaucracy" },
          { reference: "Big Brother", origin: ["Orwell's 1984", "Greek mythology", "American history", "Technology term"], correct: 0, explanation: "From George Orwell's dystopian novel about surveillance state" },
          { reference: "Herculean task", origin: ["Roman history", "Greek mythology", "Biblical story", "Shakespeare"], correct: 1, explanation: "From Hercules' twelve labors in Greek mythology" },
          { reference: "fifteen minutes of fame", origin: ["Hollywood movie", "Andy Warhol", "TV show", "News article"], correct: 1, explanation: "Andy Warhol's prediction about future celebrity culture" },
          { reference: "cross the Rubicon", origin: ["Julius Caesar", "Greek mythology", "Biblical story", "Shakespeare"], correct: 0, explanation: "Caesar crossing the Rubicon river started a civil war - point of no return" },
          { reference: "Good Samaritan", origin: ["Roman law", "Greek philosophy", "Biblical parable", "Shakespeare"], correct: 2, explanation: "From Jesus's parable about helping strangers" }
        ]},
        { type: "context-application", instruction: "Choose the most appropriate cultural reference for each situation", scenarios: [
          { situation: "A regulation requires certification to get experience, but you need experience to get certification", bestReference: ["Catch-22", "Herculean task", "Elephant in the room"], correct: 0, explanation: "Classic Catch-22 - paradoxical rule" },
          { situation: "The company's surveillance of employees has become intrusive", bestReference: ["Big Brother", "Catch-22", "Herculean task"], correct: 0, explanation: "Big Brother = surveillance state" },
          { situation: "The project will require enormous effort to complete", bestReference: ["Catch-22", "Herculean task", "Fifteen minutes of fame"], correct: 1, explanation: "Herculean = requiring great effort" },
          { situation: "Once we announce this, there's no going back", bestReference: ["Elephant in the room", "Crossing the Rubicon", "Fifteen minutes of fame"], correct: 1, explanation: "Crossing the Rubicon = point of no return" },
          { situation: "Everyone knows the CEO is underperforming but nobody mentions it", bestReference: ["Catch-22", "Elephant in the room", "Herculean task"], correct: 1, explanation: "Elephant in the room = obvious issue being avoided" }
        ]},
        { type: "sports-business-idioms", instruction: "Match these sports-origin idioms to their meanings", items: [
          { idiom: "touch base", meaning: "Connect briefly / check in", origin: "Baseball - touching bases while running" },
          { idiom: "ballpark figure", meaning: "Rough estimate", origin: "Baseball - approximate like stadium boundaries" },
          { idiom: "drop the ball", meaning: "Fail at a responsibility", origin: "Various ball sports - letting the ball fall" },
          { idiom: "move the goalposts", meaning: "Change the rules/targets unfairly", origin: "Football/soccer - moving goals to prevent scoring" },
          { idiom: "hit a home run", meaning: "Achieve great success", origin: "Baseball - best possible hit" },
          { idiom: "level playing field", meaning: "Fair conditions for all", origin: "Sports - equal terrain for competition" }
        ]},
        { type: "literary-references", instruction: "Explain what these literary references mean in business context", items: [
          { reference: "It's a Dickensian workplace", meaning: "Poor working conditions, reminiscent of Victorian-era poverty", source: "Charles Dickens' novels about social problems" },
          { reference: "Opening a Pandora's box", meaning: "Unleashing many unforeseen problems", source: "Greek myth - box containing all evils" },
          { reference: "A Judas in the team", meaning: "A traitor", source: "Biblical - Judas betrayed Jesus" },
          { reference: "Tilting at windmills", meaning: "Fighting imaginary enemies or impossible causes", source: "Don Quixote attacking windmills thinking they were giants" }
        ]},
        { type: "cultural-reference-matching", instruction: "Match each cultural reference to its meaning", items: [
          { reference: "Catch-22", meaning: "Paradoxical no-win situation" },
          { reference: "Big Brother", meaning: "Surveillance and control" },
          { reference: "elephant in the room", meaning: "Obvious issue everyone avoids" },
          { reference: "fifteen minutes of fame", meaning: "Brief celebrity" },
          { reference: "Good Samaritan", meaning: "Helpful stranger" },
          { reference: "meet your Waterloo", meaning: "Suffer decisive defeat" }
        ]},
        { type: "reference-context-application", instruction: "Choose the correct cultural reference for each situation", items: [
          { situation: "A rule requires experience to get certified, but you need certification to get experience", reference: "Catch-22" },
          { situation: "Everyone knows the CEO is underperforming but no one mentions it", reference: "elephant in the room" },
          { situation: "The task will require enormous effort but is achievable", reference: "Herculean task" },
          { situation: "Once we announce this, there's no going back", reference: "crossing the Rubicon" }
        ]},
        { type: "reference-origin-advanced", instruction: "Match reference to its cultural origin", items: [
          { reference: "Pyrrhic victory", origin: "King Pyrrhus of Epirus - costly wins" },
          { reference: "Dickensian", origin: "Charles Dickens - poverty, social ills" },
          { reference: "jump the shark", origin: "Happy Days TV show - decline" },
          { reference: "ballpark figure", origin: "Baseball - rough estimate" }
        ]},
        { type: "reference-appropriateness", instruction: "Is the cultural reference used correctly?", items: [
          { sentence: "Getting approval is a real Catch-22 - we need A to get B, and B to get A", correct: true },
          { sentence: "The project was a Catch-22 because it was very difficult", correct: false, explanation: "Catch-22 requires paradox, not just difficulty" },
          { sentence: "Let's address the elephant in the room - our budget overrun", correct: true },
          { sentence: "We have an elephant in the room - a small typo in the report", correct: false, explanation: "Elephant = obvious major issue, not minor" }
        ]}
      ],
      modelDialogue: {
        title: "Board Strategy Discussion Using Cultural References",
        context: "Executive team discussing competitive challenges",
        dialogue: [
          { speaker: "CEO", text: "Let's address the elephant in the room. Our main competitor has been disrupting our core market.", note: "elephant in the room = obvious issue being avoided" },
          { speaker: "CFO", text: "Getting regulatory approval for our response will be a Herculean task, but not impossible.", note: "Herculean = difficult but achievable" },
          { speaker: "CMO", text: "We're in a Catch-22. We need market share to get the best suppliers, but we need suppliers to gain market share.", note: "Catch-22 = paradoxical situation" },
          { speaker: "COO", text: "If we commit to this strategy, we're crossing the Rubicon. There's no going back.", note: "crossing the Rubicon = point of no return" },
          { speaker: "CEO", text: "Every competitor gets their fifteen minutes of fame. Theirs might be over sooner than they think.", note: "fifteen minutes of fame = brief success" },
          { speaker: "CFO", text: "Let's not meet our Waterloo through overconfidence, though.", note: "Waterloo = decisive defeat" },
          { speaker: "CMO", text: "Agreed. We need to touch base with customers before making any bold moves. Let's get a ballpark figure on market sentiment.", note: "Sports idioms: touch base = connect, ballpark = estimate" },
          { speaker: "CEO", text: "Good. Let's leave no stone unturned in our research. I don't want any surprises that turn this into a Pyrrhic victory.", note: "Combining references effectively" }
        ],
        keyTakeaways: [
          "Cultural references add sophistication to strategic discussions",
          "Historical references carry weight for major decisions",
          "Literary references show education and add color",
          "Sports idioms are common in American business"
        ]
      },
      pronunciationFocus: {
        title: "Cultural Reference Pronunciation",
        titleEs: "Pronunciación de referencias culturales",
        sounds: [
          { symbol: "/dɪˈkenzɪən/", word: "Dickensian", tip: "di-KEN-zee-un" },
          { symbol: "/ˈruːbɪkɒn/", word: "Rubicon", tip: "ROO-bi-kon" },
          { symbol: "/ˌwɔːtəˈluː/", word: "Waterloo", tip: "waw-ter-LOO" },
          { symbol: "/ˌhɜːkjʊˈliːən/", word: "Herculean", tip: "hur-kyoo-LEE-un" }
        ]
      },
      culturalNote: {
        title: "Cultural References Across English-Speaking Countries",
        titleEs: "Referencias culturales entre países anglófonos",
        content: "Cultural references vary significantly across English-speaking countries. American business uses many sports idioms (baseball, football). British business may use cricket references ('sticky wicket') that Americans won't understand. International business requires sensitivity to which references will translate across cultures. Classical references (Greek/Roman) tend to be more universal among educated speakers.",
        contentEs: "Las referencias culturales varían significativamente entre países anglófonos. El negocio americano usa muchos idioms deportivos (béisbol, fútbol). El británico puede usar referencias de cricket ('sticky wicket') que los americanos no entienden. Los negocios internacionales requieren sensibilidad sobre qué referencias se traducen entre culturas. Las referencias clásicas (griego/romano) tienden a ser más universales entre hablantes educados.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "What is a 'Catch-22'?", options: ["A type of game", "A paradoxical situation with no good solution", "A legal problem", "A type of contract"], correctIndex: 1, explanation: "From Heller's novel - a paradox where any choice leads to the same problem" },
        { question: "'Crossing the Rubicon' refers to:", options: ["Starting a river business", "Passing a point of no return", "Making a compromise", "Swimming competition"], correctIndex: 1, explanation: "Caesar's crossing committed Rome to civil war - irrevocable" },
        { question: "'Big Brother' in business context suggests:", options: ["Family ownership", "Surveillance and control", "Mentorship program", "Competitor analysis"], correctIndex: 1, explanation: "From Orwell's 1984 - authoritarian surveillance" },
        { question: "'Elephant in the room' means:", options: ["A big competitor", "An expensive problem", "An obvious issue being ignored", "A large meeting room"], correctIndex: 2, explanation: "Something obvious that everyone pretends not to see" }
      ],
      guidedProduction: {
        scenario: "Write a brief strategy memo using at least 4 different cultural references appropriately.",
        promptQuestions: [
          "Is there an obvious issue being avoided? (elephant in the room)",
          "Are there paradoxical challenges? (Catch-22)",
          "Are there difficult but achievable tasks? (Herculean)",
          "Is there a point of no return? (crossing the Rubicon)",
          "Any risks of hollow victories? (Pyrrhic)"
        ],
        sampleResponse: "STRATEGIC MEMO: Let's address the elephant in the room - our market share has declined for three consecutive quarters. Reversing this trend will be a Herculean task, but achievable with the right strategy. We face a Catch-22: cutting prices would boost volume but destroy margins, while maintaining prices continues market share erosion. If we pursue the acquisition strategy, we're crossing the Rubicon - there's no going back. Let's ensure this doesn't become a Pyrrhic victory where we 'win' but deplete our resources. We need to touch base with all stakeholders before proceeding."
      },
      connectionToPrevious: "Implicit meaning often comes through cultural references",
      connectionToNext: "Cohesive devices help connect ideas when using complex references"
    },
    {
      id: 10,
      title: "Advanced Cohesive Devices",
      titleEs: "Dispositivos de Cohesión Avanzados",
      introduction: {
        title: "🔗 Cohesión Avanzada",
        explanation: "La cohesión conecta ideas de manera fluida. Los dispositivos avanzados de cohesión crean textos profesionales y pulidos.",
        keyPoints: [
          "Referencia: 'the former/latter', 'the aforementioned', 'as noted above'",
          "Sustitución: 'the same', 'such', 'do so', 'as such'",
          "Elipsis: 'if so', 'if not', 'when necessary'",
          "Conectores sofisticados: 'notwithstanding', 'insofar as', 'whereby'",
          "Transiciones: 'That said,', 'Be that as it may,', 'Having said that,'"
        ],
        examples: [
          { english: "We evaluated options A and B. The former is cost-effective; the latter offers more flexibility.", spanish: "Evaluamos las opciones A y B. La primera es rentable; la segunda ofrece más flexibilidad.", explanation: "former/latter" },
          { english: "The policy applies to all employees. As such, managers must ensure compliance.", spanish: "La política aplica a todos los empleados. Como tal, los gerentes deben asegurar el cumplimiento.", explanation: "'As such' conectando consecuencia" },
          { english: "Notwithstanding the challenges, we remain committed to the timeline.", spanish: "No obstante los desafíos, permanecemos comprometidos con el cronograma.", explanation: "'Notwithstanding' = a pesar de" }
        ],
        tips: [
          "💡 'The former/latter' solo funciona con dos elementos",
          "💡 'As such' conecta lo anterior con su consecuencia",
          "💡 Estos dispositivos son más comunes en escritura que en habla"
        ],
        whenToUse: [
          'En informes y documentos formales: "The aforementioned concerns were addressed"',
          'En escritura académica para conectar párrafos: "Notwithstanding the evidence..."',
          'En presentaciones ejecutivas: "The former approach offers X; the latter, Y"',
          'En contratos y textos legales: "...whereby the parties agree to..."'
        ],
        whenNotToUse: [
          'En emails informales → suena pomposo: usa "about that" en vez de "the aforementioned"',
          'En conversación casual → nadie dice "notwithstanding": usa "despite" o "even though"',
          'En textos cortos donde no hay antecedente claro para "the former/latter"'
        ]
      },
      objectives: ["Usar dispositivos de cohesión avanzados", "Crear textos fluidos y conectados", "Escribir profesionalmente"],
      estimatedMinutes: 35,
      grammarTheoryIds: ["c2-discourse-cohesion"],
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l12t10_e1", word: "the former / the latter", translation: "el/la primero(a) / el/la segundo(a)", type: "expression", definition: "first/second of two", definitionEs: "primero/segundo de dos", example: "I prefer the former over the latter.", exampleEs: "Prefiero el primero sobre el segundo.", related: [], difficulty: 2 },
          { id: "l12t10_e2", word: "as such", translation: "como tal/por lo tanto", type: "expression", definition: "therefore/in that capacity", definitionEs: "por lo tanto/en esa capacidad", example: "This is urgent. As such, we must act now.", exampleEs: "Esto es urgente. Por lo tanto, debemos actuar ahora.", related: [], difficulty: 2 },
          { id: "l12t10_e3", word: "the aforementioned", translation: "lo mencionado anteriormente", type: "expression", definition: "mentioned before", definitionEs: "mencionado antes", example: "The aforementioned issues must be resolved.", exampleEs: "Los problemas mencionados anteriormente deben resolverse.", related: [], difficulty: 2 },
          { id: "l12t10_e4", word: "notwithstanding", translation: "no obstante", type: "expression", definition: "despite", definitionEs: "a pesar de", example: "Notwithstanding the risks, we proceed.", exampleEs: "No obstante los riesgos, procedemos.", related: [], difficulty: 2 },
          { id: "l12t10_e5", word: "That said, / Having said that,", translation: "Dicho esto,", type: "expression", definition: "introducing contrast", definitionEs: "introduciendo contraste", example: "The plan is good. That said, we need more data.", exampleEs: "El plan es bueno. Dicho esto, necesitamos más datos.", related: [], difficulty: 1 },
          { id: "l12t10_e6", word: "insofar as", translation: "en la medida en que", type: "expression", definition: "to the extent that", definitionEs: "en la medida en que", example: "Insofar as I know, this is correct.", exampleEs: "En la medida en que sé, esto es correcto.", related: [], difficulty: 2 },
          { id: "l12t10_e7", word: "whereby", translation: "por el cual/mediante el cual", type: "expression", definition: "by which", definitionEs: "por el cual", example: "A system whereby employees can report issues.", exampleEs: "Un sistema mediante el cual los empleados pueden reportar problemas.", related: [], difficulty: 2 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t10_cm1", wrong: "Using 'the former/latter' with more than two items", correct: "Use 'the former/latter' only with exactly two items", explanation: "Former = first of two; latter = second of two; for three+ use 'the first', 'the second', etc.", explanationEs: "Former = first of two; latter = second of two; for three+ use 'the first', 'the second', etc.", category: "grammar" },
        { id: "l12t10_cm2", wrong: "'Notwithstanding' used casually", correct: "Reserve 'notwithstanding' for formal writing", explanation: "This is highly formal; casual use sounds pretentious", explanationEs: "This is highly formal; casual use sounds pretentious", category: "usage" },
        { id: "l12t10_cm3", wrong: "'As such' used to mean 'therefore' loosely", correct: "'As such' connects to a specific preceding noun/role", explanation: "As such = 'in that capacity' or 'as that thing', not just 'therefore'", explanationEs: "As such = 'in that capacity' or 'as that thing', not just 'therefore'", category: "grammar" },
        { id: "l12t10_cm4", wrong: "Overusing cohesive devices making text heavy", correct: "Use cohesive devices strategically, not constantly", explanation: "Too many formal connectors makes writing feel stiff and bureaucratic", explanationEs: "Too many formal connectors makes writing feel stiff and bureaucratic", category: "usage" },
        { id: "l12t10_cm5", wrong: "'The aforementioned' used without having mentioned the subject", correct: "'Aforementioned' refers to something already named in the text; check there is a clear antecedent", explanation: "'Aforementioned' is an anaphoric device — it must refer back to something specific already stated", explanationEs: "'Aforementioned' is an anaphoric device — it must refer back to something specific already stated", category: "grammar" }
      ],
      exercises: [
        { type: "former-latter-practice", instruction: "Complete using 'the former' or 'the latter' correctly", items: [
          { sentence: "We compared cloud hosting and on-premise solutions. _____ is cheaper; _____ offers more control.", answers: ["The former (cloud)", "the latter (on-premise)"] },
          { sentence: "Sarah and Mike both applied. _____ has more experience; _____ shows more potential.", answers: ["The former (Sarah)", "the latter (Mike)"] },
          { sentence: "Quality vs. speed: _____ builds reputation; _____ captures opportunity.", answers: ["The former (quality)", "the latter (speed)"] }
        ]},
        { type: "cohesive-device-selection", instruction: "Choose the most appropriate cohesive device", items: [
          { context: "Introducing contrast after making a point", options: ["As such", "That said", "Whereby", "Insofar as"], correct: 1, explanation: "'That said' introduces a contrasting point" },
          { context: "Showing something is a consequence of what was just stated", options: ["Notwithstanding", "The latter", "As such", "That said"], correct: 2, explanation: "'As such' connects a consequence to a preceding statement" },
          { context: "Expressing 'despite' formally", options: ["That said", "Notwithstanding", "As such", "Whereby"], correct: 1, explanation: "'Notwithstanding' = despite" },
          { context: "Describing a mechanism or system", options: ["The former", "As such", "Whereby", "That said"], correct: 2, explanation: "'Whereby' describes how something works" },
          { context: "Limiting the scope of a statement", options: ["Notwithstanding", "Insofar as", "The latter", "That said"], correct: 1, explanation: "'Insofar as' = to the extent that" }
        ]},
        { type: "text-cohesion", instruction: "Connect these sentences using appropriate cohesive devices", items: [
          { sentences: ["We evaluated two options: expansion and consolidation.", "Expansion is riskier.", "Consolidation is safer."], improved: "We evaluated two options: expansion and consolidation. The former is riskier; the latter is safer." },
          { sentences: ["This is a high-priority project.", "All team members must meet deadlines."], improved: "This is a high-priority project. As such, all team members must meet deadlines." },
          { sentences: ["We faced significant challenges.", "We still met our targets."], improved: "Notwithstanding the significant challenges, we still met our targets." },
          { sentences: ["The plan has many strengths.", "There are some concerns I should mention."], improved: "The plan has many strengths. That said, there are some concerns I should mention." }
        ]},
        { type: "formal-writing-transformation", instruction: "Make these sentences more formal using advanced cohesive devices", items: [
          { informal: "Even though there were problems, we finished on time", formal: "Notwithstanding the challenges encountered, we completed the project on schedule" },
          { informal: "This is urgent, so we need to act fast", formal: "This matter is urgent. As such, immediate action is required" },
          { informal: "Like I said before, we need more resources", formal: "As noted in the aforementioned discussion, additional resources are necessary" },
          { informal: "We have a system where employees can give feedback anonymously", formal: "We have implemented a mechanism whereby employees may submit feedback anonymously" }
        ]},
        { type: "connector-fill-blank", instruction: "Fill in the blank with the appropriate cohesive device", items: [
          { sentence: "We evaluated Option A and Option B. _____ is cheaper; _____ offers more flexibility.", options: ["The former... the latter", "The first... the second", "As such... whereby"], correct: 0 },
          { sentence: "This is a high-priority initiative. _____, all teams must prioritize it.", options: ["As such", "Notwithstanding", "Whereby"], correct: 0 },
          { sentence: "_____ the market volatility, we achieved our targets.", options: ["Notwithstanding", "As such", "The former"], correct: 0 },
          { sentence: "The plan has merits. _____, there are concerns we must address.", options: ["That said", "As such", "Whereby"], correct: 0 }
        ]},
        { type: "cohesive-device-matching", instruction: "Match the cohesive device to its function", items: [
          { device: "the former / the latter", function: "Referencing first/second of two items" },
          { device: "as such", function: "Connecting consequence to preceding statement" },
          { device: "notwithstanding", function: "Expressing despite/although" },
          { device: "whereby", function: "Describing mechanism or process" },
          { device: "insofar as", function: "Limiting scope of statement" }
        ]},
        { type: "connector-appropriateness", instruction: "Choose the best connector for each transition", items: [
          { context: "Introducing contrast after making a positive point", options: ["As such", "That said", "Whereby", "The former"], correct: 1 },
          { context: "Showing that something follows logically from what was stated", options: ["Notwithstanding", "As such", "That said", "Insofar as"], correct: 1 },
          { context: "Expressing 'despite' in formal writing", options: ["That said", "Notwithstanding", "As such", "The latter"], correct: 1 },
          { context: "Describing how a system works", options: ["The former", "Whereby", "That said", "As such"], correct: 1 }
        ]},
        { type: "cohesive-text-completion", instruction: "Complete the passage with appropriate cohesive devices", items: [
          { passage: "We compared in-house development and outsourcing. _____ required more upfront investment; _____ offered faster time-to-market. _____, we chose a hybrid approach.", answers: ["The former", "the latter", "That said"] },
          { passage: "The policy applies to all employees. _____, managers must ensure compliance.", answers: ["As such"] },
          { passage: "_____ current data indicates, we project growth in Q4.", answers: ["Insofar as"] }
        ]}
      ],
      modelDialogue: {
        title: "Executive Report Presentation Using Cohesive Devices",
        context: "CFO presenting quarterly results to the board using polished, connected language",
        dialogue: [
          { speaker: "CFO", text: "Today I'll present our Q3 results. As noted in the pre-read materials, this quarter presented unique challenges.", note: "'As noted in' - referencing previous information" },
          { speaker: "CFO", text: "We evaluated two strategic responses: aggressive expansion and defensive consolidation. The former carried higher risk; the latter offered stability.", note: "former/latter for clear comparison" },
          { speaker: "CFO", text: "We chose consolidation. As such, our resource allocation shifted toward core business units.", note: "'As such' connecting decision to consequence" },
          { speaker: "CFO", text: "Notwithstanding the market headwinds, we achieved 98% of our revenue target.", note: "'Notwithstanding' = despite" },
          { speaker: "CFO", text: "That said, there are areas requiring attention. The aforementioned supply chain issues persist.", note: "'That said' introduces concern; 'aforementioned' references earlier mention" },
          { speaker: "CFO", text: "We've implemented a system whereby departments can flag bottlenecks in real-time.", note: "'Whereby' describes mechanism" },
          { speaker: "CFO", text: "Insofar as current trends continue, we project similar performance in Q4.", note: "'Insofar as' limits scope of projection" },
          { speaker: "CFO", text: "Be that as it may, we remain cautiously optimistic about the fiscal year overall.", note: "'Be that as it may' = nevertheless" }
        ],
        keyTakeaways: [
          "Cohesive devices create professional, polished presentations",
          "'Former/latter' clarifies references to two items",
          "'As such' and 'notwithstanding' add formality",
          "These devices are more common in written/prepared speech than spontaneous conversation"
        ]
      },
      pronunciationFocus: {
        title: "Formal Cohesive Device Pronunciation",
        titleEs: "Pronunciación de dispositivos cohesivos formales",
        sounds: [
          { symbol: "/ˌnɒtwɪðˈstændɪŋ/", word: "notwithstanding", tip: "not-with-STAN-ding" },
          { symbol: "/əˌfɔːˈmenʃənd/", word: "aforementioned", tip: "uh-FOR-men-shund" },
          { symbol: "/weəˈbaɪ/", word: "whereby", tip: "wair-BY" },
          { symbol: "/ˌɪnsəˈfɑː/", word: "insofar", tip: "in-so-FAR" }
        ]
      },
      culturalNote: {
        title: "Formal Cohesive Devices in English",
        titleEs: "Dispositivos cohesivos formales en inglés",
        content: "These formal cohesive devices are characteristic of academic, legal, and executive communication in English. They're more common in written language than spoken. American English tends to use them slightly less than British English. Overuse can make communication feel bureaucratic or pretentious - use them for impact, not for every sentence.",
        contentEs: "Estos dispositivos cohesivos formales son característicos de la comunicación académica, legal y ejecutiva en inglés. Son más comunes en lenguaje escrito que hablado. El inglés americano tiende a usarlos ligeramente menos que el británico. El uso excesivo puede hacer que la comunicación parezca burocrática o pretenciosa: úsalos para impacto, no en cada oración.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "'The former/the latter' can be used with:", options: ["Any number of items", "Exactly two items", "Three or more items", "One item only"], correctIndex: 1, explanation: "Former = first of two; latter = second of two" },
        { question: "'As such' is used to:", options: ["Show contrast", "Connect a consequence to preceding information", "Introduce examples", "Show time sequence"], correctIndex: 1, explanation: "'As such' = 'in that capacity' or 'therefore based on that'" },
        { question: "'Notwithstanding' means:", options: ["Because of", "In addition to", "Despite", "According to"], correctIndex: 2, explanation: "Notwithstanding = despite, regardless of" },
        { question: "When should you use 'whereby'?", options: ["To show contrast", "To describe a mechanism or system", "To introduce a list", "To summarize"], correctIndex: 1, explanation: "Whereby = by which, through which" }
      ],
      guidedProduction: {
        scenario: "Write a formal executive summary (3-4 sentences) using at least 4 different advanced cohesive devices.",
        promptQuestions: [
          "What two options or items could you compare? (former/latter)",
          "What consequence follows from your main point? (as such)",
          "What contrast or concession should you acknowledge? (that said, notwithstanding)",
          "Is there a mechanism or system to describe? (whereby)"
        ],
        sampleResponse: "This quarter, we evaluated two strategic paths: market expansion and product innovation. The former offered higher growth potential; the latter provided more sustainable competitive advantage. We selected innovation. As such, R&D investment increased by 40%. Notwithstanding initial concerns about short-term profitability, the strategy has yielded promising early results. That said, continued monitoring is essential. We have established a framework whereby progress is reviewed monthly and adjustments are made accordingly."
      },
      connectionToPrevious: "Cultural references require cohesive devices to integrate smoothly",
      connectionToNext: "Literature and creative writing build on cohesive devices for analysis"
    },
    {
      id: 11,
      title: "Literature, Poetry and Creative Writing",
      titleEs: "Literatura, Poesía y Escritura Creativa",
      introduction: {
        title: "📚 Literatura, Poesía y Escritura Creativa",
        explanation: "Analizar literatura, comprender dispositivos poéticos y dominar técnicas de escritura creativa son habilidades que distinguen el dominio avanzado del inglés. La terminología literaria te permite discutir textos con precisión y sofisticación.",
        keyPoints: [
          "Dispositivos literarios: metáfora, alegoría, simbolismo, símil",
          "Estructura poética: estrofa, verso, prosa, ritmo",
          "Análisis narrativo: protagonista, trama, punto de vista",
          "Retórica y sintaxis: cómo el lenguaje crea efecto",
          "Escritura creativa: transformación, imitación, experimentación"
        ],
        examples: [
          { english: "The metaphor 'time is money' shapes how we think about productivity.", spanish: "La metáfora 'el tiempo es dinero' moldea cómo pensamos sobre la productividad.", explanation: "Metáfora extendida" },
          { english: "The poem's symbolism suggests the protagonist's inner conflict.", spanish: "El simbolismo del poema sugiere el conflicto interno del protagonista.", explanation: "Análisis literario" },
          { english: "The prose flows rhythmically while the verse maintains a strict structure.", spanish: "La prosa fluye rítmicamente mientras el verso mantiene una estructura estricta.", explanation: "Prosa vs verso" }
        ],
        tips: [
          "💡 'Metaphor' = comparación implícita; 'simile' = comparación con 'like' o 'as'",
          "💡 'Allegory' = historia con significado más profundo (ej: Animal Farm)",
          "💡 La retórica es el arte de la persuasión persuasiva"
        ],
        whenToUse: ["En análisis literario y discusión de textos", "En escritura creativa y poesía", "En discusiones académicas sobre literatura", "Al enseñar o explicar literatura en inglés"],
        whenNotToUse: ["No uses terminología literaria excesiva en conversación casual", "Evita términos como 'allegory' o 'stanza' cuando no son relevantes", "No mezcles jerga literaria con lenguaje de negocios"]
      },
      objectives: ["Analizar literatura con terminología precisa", "Comprender dispositivos poéticos", "Aplicar técnicas de escritura creativa"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c2-literary-conditionals", "c2-discourse-cohesion"],
      vocabulary: {
        nouns: [
          { id: "l12t11_n1", word: "metaphor", translation: "metáfora", type: "noun", definition: "implicit comparison without like/as", definitionEs: "comparación implícita sin like/as", example: "The metaphor 'life is a journey' is common.", exampleEs: "La metáfora 'la vida es un viaje' es común.", related: ["metaphorical"], difficulty: 2 },
          { id: "l12t11_n2", word: "allegory", translation: "alegoría", type: "noun", definition: "story with deeper symbolic meaning", definitionEs: "historia con significado simbólico más profundo", example: "Animal Farm is an allegory.", exampleEs: "Rebelión en la granja es una alegoría.", related: ["allegorical"], difficulty: 2 },
          { id: "l12t11_n3", word: "protagonist", translation: "protagonista", type: "noun", definition: "main character", definitionEs: "personaje principal", example: "The protagonist faces a moral dilemma.", exampleEs: "El protagonista enfrenta un dilema moral.", related: [], difficulty: 1 },
          { id: "l12t11_n4", word: "stanza", translation: "estrofa", type: "noun", definition: "group of lines in a poem", definitionEs: "grupo de versos en un poema", example: "Each stanza has four lines.", exampleEs: "Cada estrofa tiene cuatro versos.", related: [], difficulty: 2 },
          { id: "l12t11_n5", word: "narrative", translation: "narrativa", type: "noun", definition: "story or account of events", definitionEs: "historia o relato de eventos", example: "The narrative unfolds chronologically.", exampleEs: "La narrativa se desarrolla cronológicamente.", related: ["narrate"], difficulty: 2 },
          { id: "l12t11_n6", word: "symbolism", translation: "simbolismo", type: "noun", definition: "use of symbols to represent ideas", definitionEs: "uso de símbolos para representar ideas", example: "The symbolism in the novel is rich.", exampleEs: "El simbolismo en la novela es rico.", related: ["symbol"], difficulty: 2 },
          { id: "l12t11_n7", word: "prose", translation: "prosa", type: "noun", definition: "written language without meter", definitionEs: "lenguaje escrito sin métrica", example: "She writes poetry and prose.", exampleEs: "Escribe poesía y prosa.", related: [], difficulty: 1 },
          { id: "l12t11_n8", word: "verse", translation: "verso", type: "noun", definition: "line of poetry; metrical writing", definitionEs: "línea de poesía; escritura métrica", example: "The verse follows a strict rhyme scheme.", exampleEs: "El verso sigue un esquema de rima estricto.", related: [], difficulty: 2 },
          { id: "l12t11_n9", word: "rhetoric", translation: "retórica", type: "noun", definition: "art of effective persuasion", definitionEs: "arte de la persuasión efectiva", example: "His rhetoric was powerful.", exampleEs: "Su retórica era poderosa.", related: ["rhetorical"], difficulty: 2 },
          { id: "l12t11_n10", word: "syntax", translation: "sintaxis", type: "noun", definition: "arrangement of words in sentences", definitionEs: "ordenamiento de palabras en oraciones", example: "The unusual syntax creates tension.", exampleEs: "La sintaxis inusual crea tensión.", related: ["syntactic"], difficulty: 2 }
        ],
        verbs: [],
        adjectives: [],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t11_cm1", wrong: "Using 'metaphor' for any comparison", correct: "Metaphor = implicit comparison; simile = explicit comparison with like/as", explanation: "A simile is 'as brave as a lion'; a metaphor is 'he was a lion'", explanationEs: "A simile is 'as brave as a lion'; a metaphor is 'he was a lion'", category: "vocabulary" },
        { id: "l12t11_cm2", wrong: "Confusing 'prose' and 'verse'", correct: "Prose = ordinary writing; verse = metrical/poetic lines", explanation: "Novels are prose; poems are typically verse", explanationEs: "Novels are prose; poems are typically verse", category: "vocabulary" },
        { id: "l12t11_cm3", wrong: "Using 'protagonist' for any character", correct: "Protagonist = main character; antagonist = opposing character", explanation: "Protagonist drives the story; antagonist opposes them", explanationEs: "Protagonist drives the story; antagonist opposes them", category: "vocabulary" },
        { id: "l12t11_cm4", wrong: "Saying 'the allegory means' when discussing symbolism", correct: "Allegory = entire narrative with deeper meaning; symbolism = use of symbols", explanation: "Allegory is broader; symbolism is one device within it", explanationEs: "Allegory is broader; symbolism is one device within it", category: "vocabulary" },
        { id: "l12t11_cm5", wrong: "Using 'rhetoric' negatively only", correct: "Rhetoric can be positive (persuasive art) or negative (empty rhetoric)", explanation: "Rhetoric is the art of persuasion; context determines meaning", explanationEs: "Rhetoric is the art of persuasion; context determines meaning", category: "vocabulary" }
      ],
      exercises: [
        { type: "device-identification", instruction: "Identify the literary device used in each example", items: [
          { statement: "Her smile was a ray of sunshine.", device: ["Metaphor", "Simile", "Allegory", "Symbolism"], correct: 0, explanation: "Implicit comparison - smile IS sunshine" },
          { statement: "The white dove symbolizes peace.", device: ["Metaphor", "Simile", "Allegory", "Symbolism"], correct: 3, explanation: "Dove represents peace" },
          { statement: "The entire novel is an allegory for totalitarianism.", device: ["Metaphor", "Simile", "Allegory", "Symbolism"], correct: 2, explanation: "Whole narrative has deeper meaning" },
          { statement: "He fought like a lion.", device: ["Metaphor", "Simile", "Allegory", "Symbolism"], correct: 1, explanation: "Explicit comparison with 'like'" }
        ]},
        { type: "transformation", instruction: "Transform the plain statement using the indicated device", items: [
          { plain: "She was very sad", device: "Metaphor", transformed: "Her heart was a stone" },
          { plain: "Time passes quickly", device: "Metaphor", transformed: "Time is a thief" },
          { plain: "The city was busy", device: "Personification", transformed: "The city never slept" },
          { plain: "He was brave", device: "Simile", transformed: "He was as brave as a lion" }
        ]},
        { type: "literary-analysis", instruction: "Analyze the literary elements in each passage", items: [
          { passage: "The protagonist stood at the crossroads, each path shrouded in mist.", elements: ["Symbolism (crossroads = choice)", "Metaphor (mist = uncertainty)", "Narrative tension"], explanation: "Multiple devices create meaning" },
          { passage: "The first stanza introduces the theme; the second develops it.", elements: ["Structure (stanza)", "Narrative progression", "Poetic form"], explanation: "Stanza structure analysis" },
          { passage: "The prose flows like a river, while the verse remains contained.", elements: ["Simile (prose like river)", "Contrast (prose vs verse)", "Metaphor for writing style"], explanation: "Comparing prose and verse" }
        ]},
        { type: "creative-writing", instruction: "Complete the creative writing using the indicated device", items: [
          { prompt: "Write a metaphor for 'hope'", example: "Hope is an anchor in stormy seas" },
          { prompt: "Write a simile for 'silence'", example: "The silence was as thick as fog" },
          { prompt: "Write a symbolic image for 'freedom'", example: "A bird breaking free from a cage" },
          { prompt: "Describe a protagonist's dilemma in one sentence", example: "The protagonist faced a choice between loyalty and truth" }
        ]}
      ],
      modelDialogue: {
        title: "Discussing a Poem",
        context: "Two friends discussing a poem they've read",
        dialogue: [
          { speaker: "A", text: "What did you think of the symbolism in the second stanza?", note: "Using literary terminology" },
          { speaker: "B", text: "The dove as a symbol of peace seemed almost too obvious, but the allegory of the journey really worked for me.", note: "Distinguishing symbolism from allegory" },
          { speaker: "A", text: "I loved the metaphor of time as a thief. The syntax in that line was unusual – it really made you pause.", note: "Discussing metaphor and syntax" },
          { speaker: "B", text: "The protagonist's journey mirrors the narrative of loss and recovery. The prose sections were beautifully written.", note: "Narrative analysis" },
          { speaker: "A", text: "The rhetoric in the final verse was powerful – it really persuaded me of the poem's message.", note: "Rhetoric in poetry" },
          { speaker: "B", text: "The contrast between verse and prose created a fascinating rhythm.", note: "Prose vs verse" }
        ],
        keyTakeaways: [
          "Literary terminology enables precise discussion of texts",
          "Metaphor, symbolism, and allegory have distinct meanings",
          "Prose and verse refer to different structural forms",
          "Syntax and rhetoric affect how readers experience a text"
        ]
      },
      pronunciationFocus: {
        title: "Literary Terminology",
        titleEs: "Terminología literaria",
        sounds: [
          { symbol: "/ˈæləɡɔːri/", word: "allegory", tip: "AL-uh-gor-ee" },
          { symbol: "/prəˈtæɡənɪst/", word: "protagonist", tip: "pruh-TAG-uh-nist" },
          { symbol: "/ˈstænzə/", word: "stanza", tip: "STAN-zuh" },
          { symbol: "/ˈretərɪk/", word: "rhetoric", tip: "RET-uh-rik" }
        ]
      },
      culturalNote: {
        title: "English Literary Tradition",
        titleEs: "Tradición literaria inglesa",
        content: "English literary tradition has rich terminology from Greek and Latin. Understanding these terms helps you engage with literature in English-speaking academic and cultural contexts. Book clubs, literary festivals, and creative writing courses often use this vocabulary.",
        contentEs: "La tradición literaria inglesa tiene rica terminología del griego y latín. Entender estos términos te ayuda a participar en literatura en contextos académicos y culturales anglófonos. Los clubes de lectura, festivales literarios y cursos de escritura creativa suelen usar este vocabulario.",
        region: "Global"
      },
      consolidationQuiz: [
        { question: "What is the difference between metaphor and simile?", options: ["No difference", "Metaphor uses like/as; simile doesn't", "Simile uses like/as; metaphor doesn't", "Simile is longer"], correctIndex: 2, explanation: "Simile = explicit comparison (like/as); metaphor = implicit" },
        { question: "'Allegory' means:", options: ["A type of poem", "A story with deeper symbolic meaning", "A character", "A rhyme scheme"], correctIndex: 1, explanation: "Allegory = entire narrative representing something else" },
        { question: "Prose is:", options: ["Poetry with meter", "Ordinary written language without meter", "A type of stanza", "Rhyming verse"], correctIndex: 1, explanation: "Prose = non-metrical writing" },
        { question: "The protagonist is:", options: ["The villain", "The main character", "The narrator", "A minor character"], correctIndex: 1, explanation: "Protagonist = main character of the story" }
      ],
      guidedProduction: {
        scenario: "Write a brief analysis of a poem or short story using at least 5 literary terms (metaphor, symbolism, protagonist, narrative, etc.).",
        promptQuestions: [
          "What literary devices does the text use?",
          "How does the protagonist develop?",
          "What symbolism can you identify?",
          "How does the narrative structure affect meaning?",
          "What is the role of rhetoric or syntax?"
        ],
        sampleResponse: "In this poem, the protagonist's journey serves as an allegory for the human experience of loss. The metaphor of the 'winter storm' symbolizes emotional hardship, while the narrative structure – moving from despair to hope – mirrors the protagonist's inner transformation. The prose sections provide context, while the verse captures the emotional intensity. The rhetoric of the final stanza persuades the reader of the poem's central message about resilience."
      },
      connectionToPrevious: "Cohesive devices help structure literary analysis",
      connectionToNext: "Debate and public speaking use rhetoric for persuasion"
    },
    {
      id: 12,
      title: "Debate and Public Speaking",
      titleEs: "Debate y Oratoria",
      introduction: {
        title: "🎤 Debate y Oratoria",
        explanation: "El debate formal y la oratoria requieren técnicas retóricas, argumentación lógica y la capacidad de responder a objeciones. Dominar este vocabulario te permite participar en discusiones estructuradas y presentaciones persuasivas.",
        keyPoints: [
          "Aristóteles: ethos (credibilidad), pathos (emoción), logos (lógica)",
          "Estructura del debate: proposición, contraargumento, refutación",
          "Falacias lógicas: errores en el razonamiento",
          "Concesión: reconocer puntos válidos del oponente",
          "Elocuencia: fluidez y persuasión en el habla"
        ],
        examples: [
          { english: "The speaker's rebuttal effectively addressed the opposition's main argument.", spanish: "La refutación del orador abordó efectivamente el argumento principal de la oposición.", explanation: "Rebuttal en debate" },
          { english: "The proposition was clear: we should invest in renewable energy.", spanish: "La proposición era clara: debemos invertir en energía renovable.", explanation: "Proposition" },
          { english: "She made a concession to her opponent's point before presenting her counterargument.", spanish: "Hizo una concesión al punto de su oponente antes de presentar su contraargumento.", explanation: "Concession" }
        ],
        tips: [
          "💡 Ethos = credibilidad; pathos = emoción; logos = lógica",
          "💡 Una 'fallacy' es un error en el razonamiento",
          "💡 La concesión fortalece tu argumento al mostrar imparcialidad"
        ],
        whenToUse: ["En debates formales e informales", "En presentaciones persuasivas", "En discusiones académicas sobre argumentación", "Al evaluar argumentos y razonamiento"],
        whenNotToUse: ["No uses jerga de debate en conversación casual", "Evita 'rebuttal' o 'proposition' cuando no hay debate estructurado", "No mezcles ethos/pathos/logos sin contexto"]
      },
      objectives: ["Usar técnicas de debate efectivamente", "Aplicar estrategias retóricas", "Identificar y evitar falacias"],
      estimatedMinutes: 40,
      grammarTheoryIds: ["c2-emphasis-patterns", "c2-discourse-cohesion"],
      vocabulary: {
        nouns: [
          { id: "l12t12_n1", word: "rhetoric", translation: "retórica", type: "noun", definition: "art of effective persuasion", definitionEs: "arte de la persuasión efectiva", example: "His rhetoric was compelling.", exampleEs: "Su retórica era convincente.", related: ["rhetorical"], difficulty: 2 },
          { id: "l12t12_n2", word: "rebuttal", translation: "refutación", type: "noun", definition: "counterargument to opponent's point", definitionEs: "contraargumento al punto del oponente", example: "She delivered a strong rebuttal.", exampleEs: "Presentó una refutación sólida.", related: ["rebut"], difficulty: 2 },
          { id: "l12t12_n3", word: "fallacy", translation: "falacia", type: "noun", definition: "error in reasoning", definitionEs: "error en el razonamiento", example: "That's a logical fallacy.", exampleEs: "Eso es una falacia lógica.", related: ["fallacious"], difficulty: 2 },
          { id: "l12t12_n4", word: "proposition", translation: "proposición", type: "noun", definition: "statement to be debated", definitionEs: "afirmación a debatir", example: "The proposition was clear.", exampleEs: "La proposición era clara.", related: [], difficulty: 2 },
          { id: "l12t12_n5", word: "concession", translation: "concesión", type: "noun", definition: "acknowledging opponent's valid point", definitionEs: "reconocer un punto válido del oponente", example: "She made a concession to strengthen her argument.", exampleEs: "Hizo una concesión para fortalecer su argumento.", related: ["concede"], difficulty: 2 },
          { id: "l12t12_n6", word: "eloquence", translation: "elocuencia", type: "noun", definition: "fluent, persuasive speaking", definitionEs: "habla fluida y persuasiva", example: "His eloquence captivated the audience.", exampleEs: "Su elocuencia cautivó a la audiencia.", related: ["eloquent"], difficulty: 2 },
          { id: "l12t12_n7", word: "pathos", translation: "pathos", type: "noun", definition: "emotional appeal", definitionEs: "apelación emocional", example: "The speech appealed to pathos.", exampleEs: "El discurso apeló al pathos.", related: [], difficulty: 2 },
          { id: "l12t12_n8", word: "ethos", translation: "ethos", type: "noun", definition: "credibility/authority appeal", definitionEs: "apelación a credibilidad/autoridad", example: "She established ethos through her expertise.", exampleEs: "Estableció ethos con su experiencia.", related: [], difficulty: 2 },
          { id: "l12t12_n9", word: "logos", translation: "logos", type: "noun", definition: "logical appeal", definitionEs: "apelación lógica", example: "The argument relied on logos.", exampleEs: "El argumento se basaba en logos.", related: [], difficulty: 2 },
          { id: "l12t12_n10", word: "persuasion", translation: "persuasión", type: "noun", definition: "act of convincing", definitionEs: "acto de convencer", example: "Effective persuasion requires balance.", exampleEs: "La persuasión efectiva requiere equilibrio.", related: ["persuade"], difficulty: 1 }
        ],
        verbs: [],
        adjectives: [],
        expressions: [],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        { id: "l12t12_cm1", wrong: "Using 'rebuttal' for any response", correct: "Rebuttal = direct counter to opponent's specific argument", explanation: "Rebuttal addresses the opposition's argument; not just any reply", explanationEs: "Rebuttal addresses the opposition's argument; not just any reply", category: "vocabulary" },
        { id: "l12t12_cm2", wrong: "Confusing ethos, pathos, and logos", correct: "Ethos = credibility; pathos = emotion; logos = logic", explanation: "Three distinct appeals in Aristotle's rhetoric", explanationEs: "Three distinct appeals in Aristotle's rhetoric", category: "vocabulary" },
        { id: "l12t12_cm3", wrong: "Avoiding concession entirely", correct: "Concession strengthens arguments by showing fairness", explanation: "Acknowledging valid points builds credibility", explanationEs: "Acknowledging valid points builds credibility", category: "usage" },
        { id: "l12t12_cm4", wrong: "Using 'fallacy' for any wrong opinion", correct: "Fallacy = specific error in reasoning structure", explanation: "Fallacy is a formal logic error, not just disagreement", explanationEs: "Fallacy is a formal logic error, not just disagreement", category: "vocabulary" },
        { id: "l12t12_cm5", wrong: "Saying 'the proposition is' when meaning 'the proposal is'", correct: "Proposition = debatable statement; proposal = suggestion", explanation: "Proposition is debate-specific; proposal is general", explanationEs: "Proposition is debate-specific; proposal is general", category: "vocabulary" }
      ],
      exercises: [
        { type: "appeal-identification", instruction: "Identify whether each uses ethos, pathos, or logos", items: [
          { statement: "As a doctor with 20 years of experience, I can tell you...", appeal: ["Ethos", "Pathos", "Logos"], correct: 0, explanation: "Credibility/authority" },
          { statement: "The data clearly shows a 40% increase.", appeal: ["Ethos", "Pathos", "Logos"], correct: 2, explanation: "Logical evidence" },
          { statement: "Imagine the children who will suffer without this program.", appeal: ["Ethos", "Pathos", "Logos"], correct: 1, explanation: "Emotional appeal" },
          { statement: "The study concluded that...", appeal: ["Ethos", "Pathos", "Logos"], correct: 2, explanation: "Logical evidence" }
        ]},
        { type: "fallacy-identification", instruction: "Identify the type of fallacy in each argument", items: [
          { argument: "Everyone believes this, so it must be true.", fallacy: ["Ad populum (bandwagon)", "Straw man", "Ad hominem", "False dilemma"], correct: 0, explanation: "Appeal to popularity" },
          { argument: "You're wrong because you're not an expert.", fallacy: ["Ad populum", "Straw man", "Ad hominem", "False dilemma"], correct: 2, explanation: "Attacking the person" },
          { argument: "Either you support this or you're against progress.", fallacy: ["Ad populum", "Straw man", "Ad hominem", "False dilemma"], correct: 3, explanation: "False either/or" },
          { argument: "She said we should be careful. So she wants us to do nothing.", fallacy: ["Ad populum", "Straw man", "Ad hominem", "False dilemma"], correct: 1, explanation: "Misrepresenting opponent's position" }
        ]},
        { type: "debate-structure", instruction: "Put the debate elements in correct order", items: [
          { elements: ["Proposition", "Rebuttal", "Concession", "Counterargument"], order: "Proposition → Rebuttal → Concession → Counterargument", explanation: "Standard debate flow" },
          { elements: ["Opening statement", "Evidence", "Conclusion"], order: "Opening → Evidence → Conclusion", explanation: "Basic structure" }
        ]},
        { type: "concession-practice", instruction: "Choose the best concession for each opponent's point", items: [
          { opponentPoint: "Your plan would be expensive.", concession: ["Granted, there are costs, but the long-term benefits outweigh them.", "You're wrong.", "That's not relevant."], correct: 0 },
          { opponentPoint: "Other countries have tried this and failed.", concession: ["Admittedly, some attempts have failed, but conditions have changed.", "No they haven't.", "That's a fallacy."], correct: 0 },
          { opponentPoint: "This would take years to implement.", concession: ["I concede that implementation would take time, however the urgency justifies it.", "It wouldn't.", "So what?"], correct: 0 }
        ]}
      ],
      modelDialogue: {
        title: "Formal Debate Exchange",
        context: "Two debaters in a formal debate on environmental policy",
        dialogue: [
          { speaker: "Affirmative", text: "The proposition before us is clear: we must invest in renewable energy now.", note: "Stating the proposition" },
          { speaker: "Negative", text: "I'll offer a rebuttal to that. The costs are prohibitive.", note: "Delivering rebuttal" },
          { speaker: "Affirmative", text: "I'll make a concession: yes, initial costs are high. However, the pathos of the climate crisis demands action, and the logos of our economic models show long-term gains.", note: "Concession + pathos + logos" },
          { speaker: "Negative", text: "That argument relies on a fallacy – you're appealing to emotion rather than evidence.", note: "Identifying fallacy" },
          { speaker: "Affirmative", text: "My ethos as an economist supports my credibility. The data – pure logos – is on my side.", note: "Ethos and logos" },
          { speaker: "Negative", text: "Your persuasion is skilled, but eloquence alone doesn't win debates. We need substance.", note: "Distinguishing eloquence from substance" }
        ],
        keyTakeaways: [
          "Ethos, pathos, logos are the three pillars of persuasion",
          "Rebuttal directly addresses opponent's arguments",
          "Concession shows fairness and strengthens credibility",
          "Recognizing fallacies improves argument quality"
        ]
      },
      pronunciationFocus: {
        title: "Debate and Rhetoric Vocabulary",
        titleEs: "Vocabulario de debate y retórica",
        sounds: [
          { symbol: "/rɪˈbʌtl/", word: "rebuttal", tip: "ri-BUT-ul" },
          { symbol: "/ˈfæləsi/", word: "fallacy", tip: "FAL-uh-see" },
          { symbol: "/ˌprɒpəˈzɪʃn/", word: "proposition", tip: "prop-uh-ZISH-un" },
          { symbol: "/ˈeləkwəns/", word: "eloquence", tip: "EL-uh-kwens" }
        ]
      },
      culturalNote: {
        title: "Formal Debate in English-Speaking Education",
        titleEs: "Debate formal en educación anglófona",
        content: "Formal debate is a respected tradition in English-speaking education (Oxford Union, Cambridge Union). Understanding debate terminology helps in academic settings, legal proceedings, and public discourse. The ethos-pathos-logos framework comes from Aristotle and remains influential.",
        contentEs: "El debate formal es una tradición respetada en la educación anglófona (Oxford Union, Cambridge Union). Entender la terminología de debate ayuda en contextos académicos, procedimientos legales y discurso público. El marco ethos-pathos-logos viene de Aristóteles y sigue siendo influyente.",
        region: "UK, US"
      },
      consolidationQuiz: [
        { question: "Ethos appeals to:", options: ["Emotion", "Logic", "Credibility", "Popularity"], correctIndex: 2, explanation: "Ethos = credibility/authority" },
        { question: "A rebuttal is:", options: ["An opening statement", "A counter to an opponent's argument", "A conclusion", "A concession"], correctIndex: 1, explanation: "Rebuttal = direct counterargument" },
        { question: "Making a concession means:", options: ["Surrendering", "Acknowledging a valid point from the opponent", "Ignoring the opposition", "Appealing to emotion"], correctIndex: 1, explanation: "Concession = acknowledging opponent's valid point" },
        { question: "A logical fallacy is:", options: ["A strong argument", "An error in reasoning", "A type of concession", "An emotional appeal"], correctIndex: 1, explanation: "Fallacy = error in reasoning structure" }
      ],
      guidedProduction: {
        scenario: "Prepare a 1-minute argument on a topic of your choice using ethos, pathos, and logos. Include one concession and one rebuttal to a potential counterargument.",
        promptQuestions: [
          "What is your proposition?",
          "How will you establish ethos (credibility)?",
          "Where will you use pathos (emotional appeal)?",
          "What logical evidence (logos) supports your case?",
          "What concession could you make to strengthen your argument?",
          "What rebuttal would you offer to the main counterargument?"
        ],
        sampleResponse: "PROPOSITION: We should invest in public transportation. ETHOS: As someone who has studied urban planning for a decade... PATHOS: Imagine the families who spend hours in traffic instead of with their children. LOGOS: Studies show that every dollar invested in transit returns three in economic benefits. CONCESSION: Granted, construction costs are high. However, the long-term savings justify the investment. REBUTTAL: To those who say it's too expensive – the cost of inaction is far greater in pollution, lost productivity, and health impacts."
      },
      connectionToPrevious: "Literature uses rhetoric; debate applies it explicitly",
      connectionToNext: "Level 12 complete - you've mastered near-native English sophistication"
    },
  ]
};

export default level12;
