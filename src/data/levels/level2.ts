import type { Level } from '../../types';

export const level2: Level = {
  id: 2,
  name: "Elementary",
  cefrLevel: "A1+",
  description: "Rutinas diarias, profesiones, comida y lugares",
  totalTasks: 10,
  estimatedHours: 12,
  color: "#22c55e",
  icon: "🌿",
  tasks: [
    {
      id: 1,
      title: "Daily Routines",
      titleEs: "Rutinas Diarias",
      introduction: {
        title: "⏰ Rutinas Diarias en Inglés",
        explanation: "Describir tu día a día es una de las conversaciones más comunes. Aprenderás a hablar sobre tus actividades diarias usando el presente simple y los adverbios de frecuencia.",
        keyPoints: [
          "El presente simple describe rutinas y hábitos: 'I wake up at 7' (Me despierto a las 7)",
          "Con he/she/it añadimos -s o -es: 'She works', 'He watches'",
          "Adverbios de frecuencia: always (siempre), usually (usualmente), often (a menudo), sometimes (a veces), never (nunca)",
          "Los adverbios van ANTES del verbo principal pero DESPUÉS de 'be': 'I always wake up early' pero 'I am always tired'",
          "Para hablar de horarios usamos 'at': 'at 7 AM', 'at noon', 'at midnight'"
        ],
        examples: [
          { english: "I wake up at 6:30 every day.", spanish: "Me despierto a las 6:30 todos los días.", explanation: "Rutina con hora específica" },
          { english: "She usually has breakfast at home.", spanish: "Ella usualmente desayuna en casa.", explanation: "Adverbio de frecuencia" },
          { english: "I never work on weekends.", spanish: "Nunca trabajo los fines de semana.", explanation: "Negación con adverbio" }
        ],
        tips: [
          "💡 'Have breakfast/lunch/dinner' - en inglés usamos 'have' no 'eat' para las comidas principales",
          "💡 'Get up' (levantarse de la cama) es diferente de 'wake up' (despertarse)",
          "💡 'Go to work' pero 'go home' (sin 'to') - 'home' no lleva preposición"
        ],
        whenToUse: [
          "Describiendo tu día típico: 'I wake up at 7, then I have breakfast...'",
          "Hablando de hábitos: 'I always exercise in the morning'",
          "Preguntando sobre rutinas: 'What time do you usually get up?'"
        ],
        whenNotToUse: [
          "No uses presente simple para acciones en progreso ahora mismo: 'I work now' ❌ → 'I'm working now' ✓",
          "No confundas 'go to home' ❌ → 'go home' ✓ (sin 'to')"
        ]
      },
      objectives: [
        "Describir actividades diarias",
        "Usar el presente simple correctamente",
        "Hablar sobre horarios y frecuencia"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "En Level 1 aprendiste verbos básicos. Ahora los usarás para describir tu día a día.",
      connectionToNext: "Las rutinas te preparan para hablar de tu trabajo y profesión.",
      grammarTheoryIds: ['a1-present-simple', 'a2-frequency-adverbs'],
      
      commonMistakes: [
        {
          id: "l2t1_cm1",
          wrong: "I always am tired",
          correct: "I am always tired",
          explanation: "Adverbs go AFTER 'be', not before: I am always tired.",
          explanationEs: "Los adverbios van DESPUÉS de 'be', no antes: I am always tired.",
          category: "grammar"
        },
        {
          id: "l2t1_cm2",
          wrong: "She wake up at 7",
          correct: "She wakes up at 7",
          explanation: "Add '-s' to verbs with he/she/it in present simple.",
          explanationEs: "Añade '-s' a verbos con he/she/it en presente simple.",
          category: "grammar"
        },
        {
          id: "l2t1_cm3",
          wrong: "I go to home at 6 PM",
          correct: "I go home at 6 PM",
          explanation: "'Home' doesn't need 'to'. Say 'go home', not 'go to home'.",
          explanationEs: "'Home' no necesita 'to'. Di 'go home', no 'go to home'.",
          category: "vocabulary"
        },
        {
          id: "l2t1_cm4",
          wrong: "I eat breakfast at 8",
          correct: "I have breakfast at 8",
          explanation: "We say 'have breakfast/lunch/dinner', not 'eat breakfast'.",
          explanationEs: "Decimos 'have breakfast/lunch/dinner', no 'eat breakfast'.",
          category: "vocabulary"
        },
        {
          id: "l2t1_cm5",
          wrong: "She watchs TV every night",
          correct: "She watches TV every night",
          explanation: "Verbs ending in -ch add '-es': watch → watches.",
          explanationEs: "Verbos terminados en -ch añaden '-es': watch → watches.",
          category: "spelling"
        }
      ],
      
      exercises: [
        {
          id: "l2t1_ex1",
          type: "gap-fill",
          title: "Adverb Position",
          titleEs: "Posición del Adverbio",
          instruction: "Put the adverb in the correct position.",
          instructionEs: "Coloca el adverbio en la posición correcta.",
          difficulty: 1,
          items: [
            { id: "l2t1_ex1_1", prompt: "I _____ wake up at 6. (always)", correctAnswer: "always", hint: "Adverb before main verb", hintEs: "Adverbio antes del verbo principal" },
            { id: "l2t1_ex1_2", prompt: "She is _____ late. (never)", correctAnswer: "never", hint: "Adverb after 'be'", hintEs: "Adverbio después de 'be'" },
            { id: "l2t1_ex1_3", prompt: "They _____ have breakfast. (usually)", correctAnswer: "usually", hint: "Adverb before 'have'", hintEs: "Adverbio antes de 'have'" },
            { id: "l2t1_ex1_4", prompt: "I am _____ tired after work. (often)", correctAnswer: "often", hint: "Adverb after 'am'", hintEs: "Adverbio después de 'am'" }
          ]
        },
        {
          id: "l2t1_ex2",
          type: "transformation",
          title: "Third Person Verbs",
          titleEs: "Verbos en Tercera Persona",
          instruction: "Change the verb for he/she.",
          instructionEs: "Cambia el verbo para he/she.",
          difficulty: 1,
          items: [
            { id: "l2t1_ex2_1", prompt: "I wake up at 7. → She _____", correctAnswer: "She wakes up at 7.", explanation: "wake → wakes", explanationEs: "wake → wakes" },
            { id: "l2t1_ex2_2", prompt: "I go to work. → He _____", correctAnswer: "He goes to work.", explanation: "go → goes", explanationEs: "go → goes" },
            { id: "l2t1_ex2_3", prompt: "I watch TV. → She _____", correctAnswer: "She watches TV.", explanation: "watch → watches (-ch + es)", explanationEs: "watch → watches (-ch + es)" },
            { id: "l2t1_ex2_4", prompt: "I have breakfast. → He _____", correctAnswer: "He has breakfast.", explanation: "have → has (irregular)", explanationEs: "have → has (irregular)" }
          ]
        },
        {
          id: "l2t1_ex3",
          type: "error-correction",
          title: "Fix the Routine Sentences",
          titleEs: "Corrige las Oraciones de Rutina",
          instruction: "Find and correct the error.",
          instructionEs: "Encuentra y corrige el error.",
          difficulty: 1,
          items: [
            { id: "l2t1_ex3_1", prompt: "She always is happy.", correctAnswer: "She is always happy.", explanation: "Adverb after 'be'.", explanationEs: "Adverbio después de 'be'." },
            { id: "l2t1_ex3_2", prompt: "He go to work at 9.", correctAnswer: "He goes to work at 9.", explanation: "He + goes (add -es).", explanationEs: "He + goes (añade -es)." },
            { id: "l2t1_ex3_3", prompt: "I go to home at 6.", correctAnswer: "I go home at 6.", explanation: "No 'to' before 'home'.", explanationEs: "Sin 'to' antes de 'home'." },
            { id: "l2t1_ex3_4", prompt: "She eat breakfast at 8.", correctAnswer: "She has breakfast at 8.", explanation: "'Have' (not 'eat') + 's' for she.", explanationEs: "'Have' (no 'eat') + 's' para she." }
          ]
        },
        {
          id: "l2t1_ex4",
          type: "reorder",
          title: "Order the Daily Routine",
          titleEs: "Ordena la Rutina Diaria",
          instruction: "Put the words in the correct order.",
          instructionEs: "Pon las palabras en el orden correcto.",
          difficulty: 1,
          items: [
            { id: "l2t1_ex4_1", prompt: "usually / I / at 7 / wake up", correctAnswer: "I usually wake up at 7.", explanation: "Subject + adverb + verb + time", explanationEs: "Sujeto + adverbio + verbo + tiempo" },
            { id: "l2t1_ex4_2", prompt: "breakfast / she / at 8 / has / always", correctAnswer: "She always has breakfast at 8.", explanation: "Subject + adverb + verb + object + time", explanationEs: "Sujeto + adverbio + verbo + objeto + tiempo" },
            { id: "l2t1_ex4_3", prompt: "on weekends / never / work / I", correctAnswer: "I never work on weekends.", explanation: "Subject + adverb + verb + time", explanationEs: "Sujeto + adverbio + verbo + tiempo" },
            { id: "l2t1_ex4_4", prompt: "tired / after work / is / he / often", correctAnswer: "He is often tired after work.", explanation: "Subject + be + adverb + adjective + time", explanationEs: "Sujeto + be + adverbio + adjetivo + tiempo" }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l2t1_dialogue",
        title: "Talking About Your Day",
        titleEs: "Hablando de Tu Día",
        context: "Two friends talk about their daily routines.",
        contextEs: "Dos amigos hablan de sus rutinas diarias.",
        speakers: [
          { id: "s1", name: "Anna", role: "Early bird" },
          { id: "s2", name: "Tom", role: "Night owl" }
        ],
        lines: [
          { speakerId: "s1", text: "What time do you usually wake up?", textEs: "¿A qué hora te despiertas normalmente?", note: "Question with frequency adverb", noteEs: "Pregunta con adverbio de frecuencia" },
          { speakerId: "s2", text: "I usually wake up at 9 AM. I'm not a morning person!", textEs: "Normalmente me despierto a las 9 AM. ¡No soy persona de mañanas!", note: "Using 'usually'", noteEs: "Usando 'usually'" },
          { speakerId: "s1", text: "Wow! I always get up at 6. I like mornings.", textEs: "¡Vaya! Yo siempre me levanto a las 6. Me gustan las mañanas.", note: "'Always' before verb", noteEs: "'Always' antes del verbo" },
          { speakerId: "s2", text: "What do you do after you get up?", textEs: "¿Qué haces después de levantarte?", note: "Asking about routine", noteEs: "Preguntando sobre rutina" },
          { speakerId: "s1", text: "I take a shower and have breakfast. Then I go to work.", textEs: "Me ducho y desayuno. Luego voy al trabajo.", note: "'Have breakfast', 'go to work'", noteEs: "'Have breakfast', 'go to work'" },
          { speakerId: "s2", text: "I never have breakfast. I just have coffee.", textEs: "Yo nunca desayuno. Solo tomo café.", note: "'Never' for negative habit", noteEs: "'Never' para hábito negativo" },
          { speakerId: "s1", text: "What time do you go to bed?", textEs: "¿A qué hora te acuestas?", note: "'Go to bed'", noteEs: "'Go to bed'" },
          { speakerId: "s2", text: "I usually go to bed at 1 AM. I often watch TV late.", textEs: "Normalmente me acuesto a la 1 AM. A menudo veo TV hasta tarde.", note: "'Often' for frequency", noteEs: "'Often' para frecuencia" },
          { speakerId: "s1", text: "That's very late! I'm always in bed by 10 PM.", textEs: "¡Eso es muy tarde! Yo siempre estoy en cama para las 10 PM.", note: "'In bed' = lying in bed", noteEs: "'In bed' = acostado" }
        ],
        keyPhrases: [
          { phrase: "What time do you...?", translation: "¿A qué hora...?", usage: "Asking about routine times" },
          { phrase: "I usually/always/never...", translation: "Normalmente/Siempre/Nunca...", usage: "Describing frequency" },
          { phrase: "I'm (not) a morning person", translation: "(No) Soy persona de mañanas", usage: "Describing sleep preference" },
          { phrase: "go to bed", translation: "ir a la cama/acostarse", usage: "Talking about sleep" }
        ],
        variations: [
          { original: "What time do you wake up?", alternative: "When do you get up?", note: "Using 'when' instead of 'what time'" },
          { original: "I'm not a morning person", alternative: "I'm a night owl", note: "Idiomatic expression for night preference" },
          { original: "I have breakfast", alternative: "I eat breakfast", note: "'Eat' is also acceptable but 'have' is more common" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/ʌ/",
            description: "The 'u' sound in 'up' - short and open",
            descriptionEs: "El sonido 'u' en 'up' - corto y abierto",
            examples: [
              { word: "up", transcription: "/ʌp/" },
              { word: "lunch", transcription: "/lʌntʃ/" },
              { word: "brush", transcription: "/brʌʃ/" }
            ],
            tips: ["Keep it short, like a relaxed 'ah'", "Not like Spanish 'u'"]
          },
          {
            symbol: "/eɪ/",
            description: "The diphthong in 'wake' and 'late'",
            descriptionEs: "El diptongo en 'wake' y 'late'",
            examples: [
              { word: "wake", transcription: "/weɪk/" },
              { word: "late", transcription: "/leɪt/" },
              { word: "day", transcription: "/deɪ/" }
            ],
            tips: ["Start with 'e' and glide to 'ee'", "Two sounds in one"]
          }
        ],
        commonProblems: [
          { word: "usually", wrong: "oo-soo-ally", correct: "YOO-zhoo-uh-lee", tip: "Stress on first syllable, 's' sounds like 'zh'" },
          { word: "breakfast", wrong: "break-fast", correct: "BREK-fuhst", tip: "Only two syllables, not three" },
          { word: "shower", wrong: "show-er", correct: "SHOW-er", tip: "Rhymes with 'power'" }
        ],
        minimalPairs: [
          { word1: "wake", word2: "work", soundDifference: "/eɪ/ vs /ɜː/ - different vowels" },
          { word1: "bed", word2: "bad", soundDifference: "/e/ vs /æ/ - closed vs open" },
          { word1: "lunch", word2: "launch", soundDifference: "/ʌ/ vs /ɔː/ - short vs long" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "Do you wake up EARLY?↗", meaning: "Yes/no question rises" },
          { pattern: "Falling ↘", example: "I wake up at SEVEN.↘", meaning: "Statements fall at end" },
          { pattern: "List ↗↗↘", example: "I wake up↗, have breakfast↗, and go to work↘", meaning: "Lists rise, last item falls" }
        ]
      },
      
      culturalNote: {
        title: "Daily Routine Differences",
        titleEs: "Diferencias en Rutinas Diarias",
        content: "Daily routines vary greatly between cultures. In the US and UK, people typically eat dinner between 5-7 PM, much earlier than in Spanish-speaking countries (8-10 PM). Lunch breaks are usually shorter (30 min - 1 hour) and often eaten at the desk. 'Brunch' (breakfast + lunch) is popular on weekends, usually around 10 AM - 2 PM. The concept of 'siesta' doesn't exist in most English-speaking countries, so stores and businesses stay open all day. Work hours typically are 9 AM - 5 PM ('nine to five'), which is a common expression meaning a regular office job. 'Happy hour' (drinks after work, usually 5-7 PM) is a common social activity. In the UK, afternoon tea (around 4 PM) is a cultural tradition, though less common today.",
        contentEs: "Las rutinas diarias varían mucho entre culturas. En EEUU y Reino Unido, la gente típicamente cena entre 5-7 PM, mucho más temprano que en países hispanohablantes (8-10 PM). Los descansos para almorzar suelen ser más cortos (30 min - 1 hora) y frecuentemente se come en el escritorio. El 'brunch' (desayuno + almuerzo) es popular los fines de semana, usualmente entre 10 AM - 2 PM. El concepto de 'siesta' no existe en la mayoría de países angloparlantes, por lo que las tiendas y negocios permanecen abiertos todo el día. El horario de trabajo típico es 9 AM - 5 PM ('nine to five'), que es una expresión común para un trabajo de oficina regular. 'Happy hour' (bebidas después del trabajo, usualmente 5-7 PM) es una actividad social común. En Reino Unido, el té de la tarde (alrededor de las 4 PM) es una tradición cultural, aunque menos común hoy.",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l2t1_quiz",
        title: "Daily Routines Mastery Check",
        titleEs: "Prueba de Dominio de Rutinas Diarias",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l2t1_q1",
            type: "multiple-choice",
            question: "Where does the adverb go? 'She is _____ tired.'",
            questionEs: "¿Dónde va el adverbio? 'She is _____ tired.'",
            options: ["always before 'is'", "always after 'is'", "always at the end", "always at the start"],
            correctAnswer: "always after 'is'",
            explanation: "Adverbs go AFTER 'be': She is always tired.",
            explanationEs: "Los adverbios van DESPUÉS de 'be': She is always tired.",
            points: 10
          },
          {
            id: "l2t1_q2",
            type: "multiple-choice",
            question: "Which is CORRECT?",
            questionEs: "¿Cuál es CORRECTO?",
            options: ["I go to home at 6", "I go home at 6", "I go at home at 6", "I go the home at 6"],
            correctAnswer: "I go home at 6",
            explanation: "'Home' doesn't need 'to': go home (not 'go to home').",
            explanationEs: "'Home' no necesita 'to': go home (no 'go to home').",
            points: 10
          },
          {
            id: "l2t1_q3",
            type: "fill-blank",
            question: "She _____ (watch) TV every evening.",
            questionEs: "She _____ (watch) TV every evening.",
            correctAnswer: ["watches"],
            explanation: "Watch → watches with she (add -es after -ch).",
            explanationEs: "Watch → watches con she (añade -es después de -ch).",
            points: 10
          },
          {
            id: "l2t1_q4",
            type: "multiple-choice",
            question: "Which expression is most common?",
            questionEs: "¿Cuál expresión es más común?",
            options: ["I eat breakfast", "I have breakfast", "I take breakfast", "I do breakfast"],
            correctAnswer: "I have breakfast",
            explanation: "We say 'have breakfast/lunch/dinner' in English.",
            explanationEs: "Decimos 'have breakfast/lunch/dinner' en inglés.",
            points: 10
          },
          {
            id: "l2t1_q5",
            type: "true-false",
            question: "'I always wake up early' - the adverb position is correct.",
            questionEs: "'I always wake up early' - la posición del adverbio es correcta.",
            correctAnswer: "true",
            explanation: "Adverbs go BEFORE main verbs: I always wake up.",
            explanationEs: "Los adverbios van ANTES de verbos principales: I always wake up.",
            points: 10
          },
          {
            id: "l2t1_q6",
            type: "multiple-choice",
            question: "What's the difference between 'wake up' and 'get up'?",
            questionEs: "¿Cuál es la diferencia entre 'wake up' y 'get up'?",
            options: ["They are the same", "wake up = stop sleeping, get up = get out of bed", "get up = stop sleeping, wake up = get out of bed", "wake up is formal, get up is informal"],
            correctAnswer: "wake up = stop sleeping, get up = get out of bed",
            explanation: "Wake up = eyes open; get up = physically leave the bed.",
            explanationEs: "Wake up = abrir los ojos; get up = salir físicamente de la cama.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l2t1_production",
        title: "Describe Your Daily Routine",
        titleEs: "Describe Tu Rutina Diaria",
        type: "both",
        scenario: "Tell someone about your typical weekday from morning to night.",
        scenarioEs: "Cuéntale a alguien sobre tu día típico de semana desde la mañana hasta la noche.",
        prompts: [
          {
            id: "l2t1_prod1",
            instruction: "Say what time you wake up and get up",
            instructionEs: "Di a qué hora te despiertas y te levantas",
            hints: ["I usually wake up at...", "I get up at..."],
            hintsEs: ["Normalmente me despierto a las...", "Me levanto a las..."],
            requiredElements: ["wake up", "time"]
          },
          {
            id: "l2t1_prod2",
            instruction: "Describe your morning routine (shower, breakfast)",
            instructionEs: "Describe tu rutina de la mañana (ducha, desayuno)",
            hints: ["I take a shower", "I have breakfast at..."],
            hintsEs: ["Me ducho", "Desayuno a las..."],
            requiredElements: ["shower OR breakfast"]
          },
          {
            id: "l2t1_prod3",
            instruction: "Say what time you go to work/school and finish",
            instructionEs: "Di a qué hora vas al trabajo/escuela y terminas",
            hints: ["I go to work at...", "I finish work at..."],
            hintsEs: ["Voy al trabajo a las...", "Termino de trabajar a las..."],
            requiredElements: ["go to", "time"]
          },
          {
            id: "l2t1_prod4",
            instruction: "Describe your evening and when you go to bed",
            instructionEs: "Describe tu noche y cuándo te acuestas",
            hints: ["In the evening, I usually...", "I go to bed at..."],
            hintsEs: ["Por la noche, normalmente...", "Me acuesto a las..."],
            requiredElements: ["evening activity", "go to bed"]
          }
        ],
        modelResponse: "I usually wake up at 7 AM. I take a shower and have breakfast at 7:30. I go to work at 8:30 and finish at 5 PM. In the evening, I often watch TV or read a book. I always go to bed at 11 PM.",
        modelResponseEs: "Normalmente me despierto a las 7 AM. Me ducho y desayuno a las 7:30. Voy al trabajo a las 8:30 y termino a las 5 PM. Por la noche, a menudo veo TV o leo un libro. Siempre me acuesto a las 11 PM.",
        evaluationCriteria: [
          "Used present simple correctly",
          "Used adverbs of frequency appropriately",
          "Said 'have breakfast' (not 'eat breakfast')",
          "Said 'go home' (not 'go to home')"
        ],
        evaluationCriteriaEs: [
          "Usó presente simple correctamente",
          "Usó adverbios de frecuencia apropiadamente",
          "Dijo 'have breakfast' (no 'eat breakfast')",
          "Dijo 'go home' (no 'go to home')"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l2t1_n1", word: "breakfast", translation: "desayuno", type: "noun", definition: "the first meal of the day", definitionEs: "la primera comida del día", example: "I have breakfast at 7 AM.", exampleEs: "Desayuno a las 7 AM.", related: ["lunch", "dinner"], difficulty: 1 },
          { id: "l2t1_n2", word: "lunch", translation: "almuerzo", type: "noun", definition: "the meal eaten in the middle of the day", definitionEs: "la comida del mediodía", example: "I eat lunch at noon.", exampleEs: "Almuerzo al mediodía.", related: ["breakfast", "dinner"], difficulty: 1 },
          { id: "l2t1_n3", word: "dinner", translation: "cena", type: "noun", definition: "the main meal of the day, usually in the evening", definitionEs: "la comida principal del día, usualmente por la noche", example: "We have dinner at 7 PM.", exampleEs: "Cenamos a las 7 PM.", related: ["breakfast", "lunch"], difficulty: 1 },
          { id: "l2t1_n4", word: "shower", translation: "ducha", type: "noun", definition: "washing your body with water", definitionEs: "lavarse el cuerpo con agua", example: "I take a shower every morning.", exampleEs: "Me ducho todas las mañanas.", related: ["bath"], difficulty: 1 },
          { id: "l2t1_n5", word: "work", translation: "trabajo", type: "noun", definition: "activity that you do to earn money", definitionEs: "actividad que haces para ganar dinero", example: "I go to work at 9 AM.", exampleEs: "Voy al trabajo a las 9 AM.", related: ["job", "office"], difficulty: 1 },
          { id: "l2t1_n6", word: "bed", translation: "cama", type: "noun", definition: "furniture for sleeping", definitionEs: "mueble para dormir", example: "I go to bed at 11 PM.", exampleEs: "Me voy a la cama a las 11 PM.", related: ["sleep", "bedroom"], difficulty: 1 },
          { id: "l2t1_n7", word: "alarm", translation: "alarma", type: "noun", definition: "a device that wakes you up", definitionEs: "un dispositivo que te despierta", example: "My alarm rings at 6:30.", exampleEs: "Mi alarma suena a las 6:30.", related: ["clock"], difficulty: 1 },
          { id: "l2t1_n8", word: "commute", translation: "viaje al trabajo", type: "noun", definition: "the journey to work", definitionEs: "el trayecto al trabajo", example: "My commute takes 30 minutes.", exampleEs: "Mi viaje al trabajo toma 30 minutos.", related: ["travel"], difficulty: 2 },
        ],
        verbs: [
          { id: "l2t1_v1", word: "wake up", translation: "despertarse", type: "verb", definition: "to stop sleeping", definitionEs: "dejar de dormir", example: "I wake up at 6 AM every day.", exampleEs: "Me despierto a las 6 AM todos los días.", related: ["get up"], difficulty: 1 },
          { id: "l2t1_v2", word: "get up", translation: "levantarse", type: "verb", definition: "to get out of bed", definitionEs: "salir de la cama", example: "I get up and take a shower.", exampleEs: "Me levanto y me ducho.", related: ["wake up"], difficulty: 1 },
          { id: "l2t1_v3", word: "brush", translation: "cepillar", type: "verb", definition: "to clean with a brush", definitionEs: "limpiar con un cepillo", example: "I brush my teeth twice a day.", exampleEs: "Me cepillo los dientes dos veces al día.", related: [], difficulty: 1 },
          { id: "l2t1_v4", word: "start", translation: "empezar", type: "verb", definition: "to begin", definitionEs: "comenzar", example: "I start work at 9 AM.", exampleEs: "Empiezo a trabajar a las 9 AM.", related: ["begin"], difficulty: 1 },
          { id: "l2t1_v5", word: "finish", translation: "terminar", type: "verb", definition: "to complete or end", definitionEs: "completar o finalizar", example: "I finish work at 5 PM.", exampleEs: "Termino de trabajar a las 5 PM.", related: ["end"], difficulty: 1 },
          { id: "l2t1_v6", word: "prepare", translation: "preparar", type: "verb", definition: "to make ready", definitionEs: "dejar listo", example: "I prepare breakfast for my family.", exampleEs: "Preparo el desayuno para mi familia.", related: ["make"], difficulty: 1 },
          { id: "l2t1_v7", word: "relax", translation: "relajarse", type: "verb", definition: "to rest and become calm", definitionEs: "descansar y calmarse", example: "I relax in the evening.", exampleEs: "Me relajo por la noche.", related: ["rest"], difficulty: 1 },
          { id: "l2t1_v8", word: "exercise", translation: "hacer ejercicio", type: "verb", definition: "to do physical activity", definitionEs: "hacer actividad física", example: "I exercise three times a week.", exampleEs: "Hago ejercicio tres veces a la semana.", related: ["workout"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l2t1_a1", word: "early", translation: "temprano", type: "adjective", definition: "before the usual time", definitionEs: "antes del tiempo usual", example: "I wake up early.", exampleEs: "Me despierto temprano.", related: ["late"], difficulty: 1 },
          { id: "l2t1_a2", word: "late", translation: "tarde", type: "adjective", definition: "after the usual time", definitionEs: "después del tiempo usual", example: "I go to bed late on weekends.", exampleEs: "Me acuesto tarde los fines de semana.", related: ["early"], difficulty: 1 },
          { id: "l2t1_a3", word: "busy", translation: "ocupado", type: "adjective", definition: "having a lot to do", definitionEs: "que tiene mucho que hacer", example: "I am very busy on Mondays.", exampleEs: "Estoy muy ocupado los lunes.", related: ["free"], difficulty: 1 },
          { id: "l2t1_a4", word: "tired", translation: "cansado", type: "adjective", definition: "needing sleep or rest", definitionEs: "que necesita dormir o descansar", example: "I feel tired after work.", exampleEs: "Me siento cansado después del trabajo.", related: ["exhausted"], difficulty: 1 },
        ],
        expressions: [
          { id: "l2t1_e1", word: "What time do you...?", translation: "¿A qué hora...?", type: "expression", definition: "asking about time of activities", definitionEs: "preguntar sobre la hora de actividades", example: "What time do you wake up?", exampleEs: "¿A qué hora te despiertas?", related: [], difficulty: 1 },
          { id: "l2t1_e2", word: "every day", translation: "todos los días", type: "expression", definition: "each day", definitionEs: "cada día", example: "I exercise every day.", exampleEs: "Hago ejercicio todos los días.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l2t1_d1", word: "usually", translation: "usualmente", type: "adverb", definition: "most of the time", definitionEs: "la mayor parte del tiempo", example: "I usually wake up at 7.", exampleEs: "Usualmente me despierto a las 7.", related: [], difficulty: 1 },
          { id: "l2t1_d2", word: "always", translation: "siempre", type: "adverb", definition: "every time", definitionEs: "cada vez", example: "I always have breakfast.", exampleEs: "Siempre desayuno.", related: [], difficulty: 1 },
          { id: "l2t1_d3", word: "never", translation: "nunca", type: "adverb", definition: "not at any time", definitionEs: "en ningún momento", example: "I never skip breakfast.", exampleEs: "Nunca me salto el desayuno.", related: [], difficulty: 1 },
          { id: "l2t1_d4", word: "sometimes", translation: "a veces", type: "adverb", definition: "occasionally", definitionEs: "ocasionalmente", example: "I sometimes work from home.", exampleEs: "A veces trabajo desde casa.", related: [], difficulty: 1 },
          { id: "l2t1_d5", word: "often", translation: "a menudo", type: "adverb", definition: "frequently", definitionEs: "frecuentemente", example: "I often go to the gym.", exampleEs: "A menudo voy al gimnasio.", related: [], difficulty: 1 },
        ],
        prepositions: [],
      }
    },
    {
      id: 2,
      title: "Jobs and Professions",
      titleEs: "Trabajos y Profesiones",
      introduction: {
        title: "💼 Trabajos y Profesiones en Inglés",
        explanation: "Hablar sobre tu trabajo es esencial en presentaciones y networking. Aprenderás a nombrar profesiones y describir lo que haces profesionalmente.",
        keyPoints: [
          "Usamos 'a/an' antes de profesiones: 'I am A teacher', 'She is AN engineer'",
          "Para preguntar el trabajo de alguien: 'What do you do?' o 'What's your job?'",
          "Para decir dónde trabajas: 'I work at a hospital', 'I work in an office', 'I work for a company'",
          "'At' para lugares específicos, 'in' para áreas generales, 'for' para compañías"
        ],
        examples: [
          { english: "I'm a software developer.", spanish: "Soy desarrollador de software.", explanation: "Usando artículo con profesión" },
          { english: "What do you do for a living?", spanish: "¿A qué te dedicas?", explanation: "Preguntando sobre trabajo" },
          { english: "She works at a bank.", spanish: "Ella trabaja en un banco.", explanation: "Lugar de trabajo" }
        ],
        tips: [
          "💡 No olvides el artículo: 'I am A doctor' no 'I am doctor'",
          "💡 'Job' es tu trabajo específico, 'work' es más general",
          "💡 Algunas profesiones no tienen género: 'doctor', 'engineer', 'teacher'"
        ],
        whenToUse: [
          "Presentándote profesionalmente: 'Hi, I'm John. I'm a software engineer.'",
          "Networking: 'What do you do?', 'I work in marketing.'",
          "Describiendo responsabilidades: 'I manage a team of 5 people.'"
        ],
        whenNotToUse: [
          "No omitas el artículo: 'I am doctor' ❌ → 'I am a doctor' ✓",
          "No confundas work/job: 'I go to my job' ❌ → 'I go to work' ✓"
        ]
      },
      objectives: [
        "Nombrar profesiones comunes",
        "Describir trabajos y responsabilidades",
        "Usar 'a/an' con profesiones"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "Tu rutina incluye ir al trabajo. Ahora aprenderás a hablar de tu profesión.",
      connectionToNext: "Después de los trabajos, aprenderás los lugares donde trabajamos y compramos.",
      grammarTheoryIds: ['a1-verb-to-be', 'a1-subject-pronouns'],
      
      commonMistakes: [
        {
          id: "l2t2_cm1",
          wrong: "I am doctor",
          correct: "I am a doctor",
          explanation: "Always use 'a/an' before professions: I am A doctor.",
          explanationEs: "Siempre usa 'a/an' antes de profesiones: I am A doctor.",
          category: "grammar"
        },
        {
          id: "l2t2_cm2",
          wrong: "She is engineer",
          correct: "She is an engineer",
          explanation: "Use 'an' before vowel sounds: an engineer, an architect.",
          explanationEs: "Usa 'an' antes de sonidos de vocal: an engineer, an architect.",
          category: "grammar"
        },
        {
          id: "l2t2_cm3",
          wrong: "I work in a hospital",
          correct: "I work at a hospital",
          explanation: "Use 'at' for specific places: at a hospital, at a school.",
          explanationEs: "Usa 'at' para lugares específicos: at a hospital, at a school.",
          category: "vocabulary"
        },
        {
          id: "l2t2_cm4",
          wrong: "What is your work?",
          correct: "What do you do? / What's your job?",
          explanation: "The common ways to ask about jobs are 'What do you do?' or 'What's your job?'",
          explanationEs: "Las formas comunes de preguntar sobre trabajo son 'What do you do?' o 'What's your job?'",
          category: "expression"
        },
        {
          id: "l2t2_cm5",
          wrong: "I work like a teacher",
          correct: "I work as a teacher",
          explanation: "Use 'work as' (not 'work like') for professions.",
          explanationEs: "Usa 'work as' (no 'work like') para profesiones.",
          category: "vocabulary"
        }
      ],
      
      exercises: [
        {
          id: "l2t2_ex1",
          type: "gap-fill",
          title: "A or An?",
          titleEs: "¿A o An?",
          instruction: "Fill in with 'a' or 'an'.",
          instructionEs: "Llena con 'a' o 'an'.",
          difficulty: 1,
          items: [
            { id: "l2t2_ex1_1", prompt: "She is _____ teacher.", correctAnswer: "a", hint: "'Teacher' starts with consonant sound", hintEs: "'Teacher' empieza con sonido de consonante" },
            { id: "l2t2_ex1_2", prompt: "He is _____ engineer.", correctAnswer: "an", hint: "'Engineer' starts with vowel sound", hintEs: "'Engineer' empieza con sonido de vocal" },
            { id: "l2t2_ex1_3", prompt: "I am _____ accountant.", correctAnswer: "an", hint: "'Accountant' starts with 'a' vowel", hintEs: "'Accountant' empieza con vocal 'a'" },
            { id: "l2t2_ex1_4", prompt: "My father is _____ pilot.", correctAnswer: "a", hint: "'Pilot' starts with 'p' consonant", hintEs: "'Pilot' empieza con consonante 'p'" }
          ]
        },
        {
          id: "l2t2_ex2",
          type: "gap-fill",
          title: "Work Prepositions: at, in, for",
          titleEs: "Preposiciones de Trabajo: at, in, for",
          instruction: "Fill in with 'at', 'in', or 'for'.",
          instructionEs: "Llena con 'at', 'in', o 'for'.",
          difficulty: 1,
          items: [
            { id: "l2t2_ex2_1", prompt: "I work _____ a hospital.", correctAnswer: "at", hint: "Specific place = at", hintEs: "Lugar específico = at" },
            { id: "l2t2_ex2_2", prompt: "She works _____ an office.", correctAnswer: "in", hint: "General area = in", hintEs: "Área general = in" },
            { id: "l2t2_ex2_3", prompt: "He works _____ Google.", correctAnswer: "for", hint: "Company name = for", hintEs: "Nombre de empresa = for" },
            { id: "l2t2_ex2_4", prompt: "I work _____ marketing.", correctAnswer: "in", hint: "Department/field = in", hintEs: "Departamento/campo = in" }
          ]
        },
        {
          id: "l2t2_ex3",
          type: "matching",
          title: "Match Jobs with Workplaces",
          titleEs: "Relaciona Trabajos con Lugares de Trabajo",
          instruction: "Match each profession with where they work.",
          instructionEs: "Relaciona cada profesión con donde trabajan.",
          difficulty: 1,
          items: [
            { id: "l2t2_ex3_1", prompt: "doctor", correctAnswer: "hospital", hint: "Treats patients", hintEs: "Trata pacientes" },
            { id: "l2t2_ex3_2", prompt: "teacher", correctAnswer: "school", hint: "Teaches students", hintEs: "Enseña a estudiantes" },
            { id: "l2t2_ex3_3", prompt: "chef", correctAnswer: "restaurant", hint: "Cooks food", hintEs: "Cocina comida" },
            { id: "l2t2_ex3_4", prompt: "pilot", correctAnswer: "airplane/airport", hint: "Flies planes", hintEs: "Pilotea aviones" }
          ]
        },
        {
          id: "l2t2_ex4",
          type: "error-correction",
          title: "Fix the Job Sentences",
          titleEs: "Corrige las Oraciones de Trabajos",
          instruction: "Find and correct the error.",
          instructionEs: "Encuentra y corrige el error.",
          difficulty: 1,
          items: [
            { id: "l2t2_ex4_1", prompt: "I am teacher.", correctAnswer: "I am a teacher.", explanation: "Add 'a' before the profession.", explanationEs: "Añade 'a' antes de la profesión." },
            { id: "l2t2_ex4_2", prompt: "She works like a nurse.", correctAnswer: "She works as a nurse.", explanation: "Use 'as' (not 'like') for professions.", explanationEs: "Usa 'as' (no 'like') para profesiones." },
            { id: "l2t2_ex4_3", prompt: "He is a engineer.", correctAnswer: "He is an engineer.", explanation: "Use 'an' before vowel sounds.", explanationEs: "Usa 'an' antes de sonidos de vocal." },
            { id: "l2t2_ex4_4", prompt: "What is your work?", correctAnswer: "What do you do? / What's your job?", explanation: "Common expressions for asking about jobs.", explanationEs: "Expresiones comunes para preguntar sobre trabajo." }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l2t2_dialogue",
        title: "Networking at a Conference",
        titleEs: "Networking en una Conferencia",
        context: "Two professionals meet at a business conference.",
        contextEs: "Dos profesionales se conocen en una conferencia de negocios.",
        speakers: [
          { id: "s1", name: "Sarah", role: "Marketing manager" },
          { id: "s2", name: "David", role: "Software developer" }
        ],
        lines: [
          { speakerId: "s1", text: "Hi, I'm Sarah. Nice to meet you!", textEs: "Hola, soy Sarah. ¡Mucho gusto!", note: "Professional introduction", noteEs: "Presentación profesional" },
          { speakerId: "s2", text: "Hi Sarah, I'm David. Nice to meet you too!", textEs: "Hola Sarah, soy David. ¡Igualmente!", note: "Returning the greeting", noteEs: "Respondiendo el saludo" },
          { speakerId: "s1", text: "So, what do you do?", textEs: "Entonces, ¿a qué te dedicas?", note: "Asking about profession", noteEs: "Preguntando sobre profesión" },
          { speakerId: "s2", text: "I'm a software developer. I work for a tech company.", textEs: "Soy desarrollador de software. Trabajo para una empresa de tecnología.", note: "'A' before profession, 'for' before company", noteEs: "'A' antes de profesión, 'for' antes de empresa" },
          { speakerId: "s1", text: "That sounds interesting! What do you do exactly?", textEs: "¡Suena interesante! ¿Qué haces exactamente?", note: "Asking for details", noteEs: "Pidiendo detalles" },
          { speakerId: "s2", text: "I design and build mobile apps. How about you?", textEs: "Diseño y construyo apps móviles. ¿Y tú?", note: "Describing tasks", noteEs: "Describiendo tareas" },
          { speakerId: "s1", text: "I'm a marketing manager. I work at a media company.", textEs: "Soy gerente de marketing. Trabajo en una empresa de medios.", note: "'At' for workplace", noteEs: "'At' para lugar de trabajo" },
          { speakerId: "s2", text: "That's great! Do you like your job?", textEs: "¡Qué bien! ¿Te gusta tu trabajo?", note: "Showing interest", noteEs: "Mostrando interés" },
          { speakerId: "s1", text: "Yes, I love it! It's challenging but rewarding.", textEs: "¡Sí, me encanta! Es desafiante pero gratificante.", note: "Expressing job satisfaction", noteEs: "Expresando satisfacción laboral" }
        ],
        keyPhrases: [
          { phrase: "What do you do?", translation: "¿A qué te dedicas?", usage: "Asking about someone's job" },
          { phrase: "I'm a [profession]", translation: "Soy [profesión]", usage: "Stating your profession" },
          { phrase: "I work for/at [place]", translation: "Trabajo para/en [lugar]", usage: "Saying where you work" },
          { phrase: "What do you do exactly?", translation: "¿Qué haces exactamente?", usage: "Asking for more details" }
        ],
        variations: [
          { original: "What do you do?", alternative: "What do you do for a living?", note: "More specific about work" },
          { original: "I'm a software developer", alternative: "I work as a software developer", note: "Using 'work as'" },
          { original: "Do you like your job?", alternative: "Do you enjoy what you do?", note: "More conversational" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/ər/",
            description: "The unstressed -er ending in professions",
            descriptionEs: "El final -er sin acento en profesiones",
            examples: [
              { word: "teacher", transcription: "/ˈtiːtʃər/" },
              { word: "doctor", transcription: "/ˈdɒktər/" },
              { word: "engineer", transcription: "/ˌendʒɪˈnɪər/" }
            ],
            tips: ["The -er is weak, like 'uh'", "Don't pronounce 'r' clearly in British English"]
          },
          {
            symbol: "/dʒ/",
            description: "The 'j' sound as in 'job' and 'manager'",
            descriptionEs: "El sonido 'j' como en 'job' y 'manager'",
            examples: [
              { word: "job", transcription: "/dʒɒb/" },
              { word: "manager", transcription: "/ˈmænɪdʒər/" },
              { word: "engineer", transcription: "/ˌendʒɪˈnɪər/" }
            ],
            tips: ["Like Spanish 'y' in 'ya' but stronger", "Tongue touches roof of mouth"]
          }
        ],
        commonProblems: [
          { word: "engineer", wrong: "en-gi-NEER", correct: "en-ji-NEER", tip: "Stress on last syllable, 'g' sounds like 'j'" },
          { word: "lawyer", wrong: "LAW-yer", correct: "LOY-er", tip: "Two syllables, 'aw' sounds like 'oy'" },
          { word: "accountant", wrong: "a-COWN-tant", correct: "uh-KOUN-tuhnt", tip: "First 'a' is weak 'uh'" }
        ],
        minimalPairs: [
          { word1: "work", word2: "walk", soundDifference: "/ɜː/ vs /ɔː/ - different vowels" },
          { word1: "job", word2: "jab", soundDifference: "/ɒ/ vs /æ/ - rounded vs spread" },
          { word1: "nurse", word2: "worse", soundDifference: "/n/ vs /w/ at start" }
        ],
        intonationPatterns: [
          { pattern: "Falling ↘", example: "I'm a TEACHER.↘", meaning: "Statements fall" },
          { pattern: "Rising ↗", example: "Are you a DOCTOR?↗", meaning: "Yes/no questions rise" },
          { pattern: "List ↗↗↘", example: "I design↗, build↗, and test apps↘", meaning: "Lists: rise then fall" }
        ]
      },
      
      culturalNote: {
        title: "Talking About Work in English",
        titleEs: "Hablando de Trabajo en Inglés",
        content: "In English-speaking cultures, 'What do you do?' is one of the first questions asked when meeting someone new. This isn't considered intrusive - it's a standard conversation starter. However, asking about salary ('How much do you earn?') is considered very rude and too personal. When describing your job, be prepared to explain what your company does and your specific responsibilities. In the US, job titles are often inflated (everyone seems to be a 'manager' or 'director'). In the UK, job titles tend to be more modest. 'Work-life balance' is increasingly important in English-speaking countries. Phrases like 'nine-to-five job' (regular hours) or 'burning the midnight oil' (working late) are common. The expression 'living for the weekend' shows that many people see work as just a means to enjoy their free time.",
        contentEs: "En culturas angloparlantes, '¿A qué te dedicas?' es una de las primeras preguntas al conocer a alguien nuevo. Esto no se considera intrusivo - es un inicio de conversación estándar. Sin embargo, preguntar sobre el salario ('¿Cuánto ganas?') se considera muy grosero y demasiado personal. Al describir tu trabajo, prepárate para explicar qué hace tu empresa y tus responsabilidades específicas. En EEUU, los títulos de trabajo suelen ser inflados (todos parecen ser 'manager' o 'director'). En UK, los títulos tienden a ser más modestos. El 'work-life balance' (equilibrio trabajo-vida) es cada vez más importante en países angloparlantes. Frases como 'nine-to-five job' (trabajo de horario regular) o 'burning the midnight oil' (trabajando hasta tarde) son comunes.",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l2t2_quiz",
        title: "Jobs and Professions Mastery Check",
        titleEs: "Prueba de Dominio de Trabajos y Profesiones",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l2t2_q1",
            type: "multiple-choice",
            question: "Which is CORRECT?",
            questionEs: "¿Cuál es CORRECTO?",
            options: ["I am teacher", "I am a teacher", "I am the teacher", "I am one teacher"],
            correctAnswer: "I am a teacher",
            explanation: "Use 'a/an' before professions: I am A teacher.",
            explanationEs: "Usa 'a/an' antes de profesiones: I am A teacher.",
            points: 10
          },
          {
            id: "l2t2_q2",
            type: "multiple-choice",
            question: "Complete: 'She is _____ engineer.'",
            questionEs: "Completa: 'She is _____ engineer.'",
            options: ["a", "an", "the", "one"],
            correctAnswer: "an",
            explanation: "Use 'an' before vowel sounds: an engineer.",
            explanationEs: "Usa 'an' antes de sonidos de vocal: an engineer.",
            points: 10
          },
          {
            id: "l2t2_q3",
            type: "multiple-choice",
            question: "Complete: 'I work _____ Google.'",
            questionEs: "Completa: 'I work _____ Google.'",
            options: ["at", "in", "for", "on"],
            correctAnswer: "for",
            explanation: "Use 'for' with company names: work for Google.",
            explanationEs: "Usa 'for' con nombres de empresas: work for Google.",
            points: 10
          },
          {
            id: "l2t2_q4",
            type: "fill-blank",
            question: "A person who teaches is called a _____.",
            questionEs: "Una persona que enseña se llama _____.",
            correctAnswer: ["teacher"],
            explanation: "Teacher = a person who teaches.",
            explanationEs: "Teacher = una persona que enseña.",
            points: 10
          },
          {
            id: "l2t2_q5",
            type: "multiple-choice",
            question: "Which question asks about someone's job?",
            questionEs: "¿Cuál pregunta es sobre el trabajo de alguien?",
            options: ["What is your work?", "What do you do?", "How do you work?", "Which is your job?"],
            correctAnswer: "What do you do?",
            explanation: "'What do you do?' is the standard way to ask about jobs.",
            explanationEs: "'What do you do?' es la forma estándar de preguntar sobre trabajos.",
            points: 10
          },
          {
            id: "l2t2_q6",
            type: "true-false",
            question: "'I work like a teacher' is correct English.",
            questionEs: "'I work like a teacher' es inglés correcto.",
            correctAnswer: "false",
            explanation: "Say 'I work AS a teacher', not 'like'.",
            explanationEs: "Di 'I work AS a teacher', no 'like'.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l2t2_production",
        title: "Describe Your Job",
        titleEs: "Describe Tu Trabajo",
        type: "both",
        scenario: "You meet someone at a party and they ask about your work.",
        scenarioEs: "Conoces a alguien en una fiesta y te preguntan sobre tu trabajo.",
        prompts: [
          {
            id: "l2t2_prod1",
            instruction: "Say your profession (remember 'a/an'!)",
            instructionEs: "Di tu profesión (¡recuerda 'a/an'!)",
            hints: ["I'm a...", "I work as a..."],
            hintsEs: ["Soy un/a...", "Trabajo como..."],
            requiredElements: ["a/an + profession"]
          },
          {
            id: "l2t2_prod2",
            instruction: "Say where you work (at/in/for)",
            instructionEs: "Di dónde trabajas (at/in/for)",
            hints: ["I work at a...", "I work for...", "I work in..."],
            hintsEs: ["Trabajo en un...", "Trabajo para...", "Trabajo en..."],
            requiredElements: ["work + preposition"]
          },
          {
            id: "l2t2_prod3",
            instruction: "Describe what you do in your job",
            instructionEs: "Describe qué haces en tu trabajo",
            hints: ["I help people with...", "I design...", "I teach..."],
            hintsEs: ["Ayudo a personas con...", "Diseño...", "Enseño..."],
            requiredElements: ["job responsibilities"]
          },
          {
            id: "l2t2_prod4",
            instruction: "Say if you like your job and why",
            instructionEs: "Di si te gusta tu trabajo y por qué",
            hints: ["I like my job because...", "It's challenging/interesting..."],
            hintsEs: ["Me gusta mi trabajo porque...", "Es desafiante/interesante..."],
            requiredElements: ["opinion + reason"]
          }
        ],
        modelResponse: "I'm a software developer. I work for a tech company called TechCorp. I design and build mobile applications. I really like my job because it's creative and I learn new things every day.",
        modelResponseEs: "Soy desarrollador de software. Trabajo para una empresa de tecnología llamada TechCorp. Diseño y construyo aplicaciones móviles. Me gusta mucho mi trabajo porque es creativo y aprendo cosas nuevas todos los días.",
        evaluationCriteria: [
          "Used 'a/an' correctly with profession",
          "Used correct preposition (at/in/for)",
          "Described job responsibilities",
          "Expressed opinion about job"
        ],
        evaluationCriteriaEs: [
          "Usó 'a/an' correctamente con profesión",
          "Usó preposición correcta (at/in/for)",
          "Describió responsabilidades del trabajo",
          "Expresó opinión sobre el trabajo"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l2t2_n1", word: "doctor", translation: "doctor/médico", type: "noun", definition: "a person who treats sick people", definitionEs: "una persona que trata a enfermos", example: "The doctor works at the hospital.", exampleEs: "El doctor trabaja en el hospital.", related: ["nurse", "patient"], difficulty: 1 },
          { id: "l2t2_n2", word: "teacher", translation: "profesor", type: "noun", definition: "a person who teaches", definitionEs: "una persona que enseña", example: "The teacher explains the lesson.", exampleEs: "El profesor explica la lección.", related: ["student", "school"], difficulty: 1 },
          { id: "l2t2_n3", word: "engineer", translation: "ingeniero", type: "noun", definition: "a person who designs and builds things", definitionEs: "una persona que diseña y construye cosas", example: "The engineer designs buildings.", exampleEs: "El ingeniero diseña edificios.", related: [], difficulty: 1 },
          { id: "l2t2_n4", word: "nurse", translation: "enfermero/a", type: "noun", definition: "a person who takes care of sick people", definitionEs: "una persona que cuida a enfermos", example: "The nurse helps the doctor.", exampleEs: "El enfermero ayuda al doctor.", related: ["doctor", "hospital"], difficulty: 1 },
          { id: "l2t2_n5", word: "lawyer", translation: "abogado", type: "noun", definition: "a person who knows the law", definitionEs: "una persona que conoce la ley", example: "The lawyer goes to court.", exampleEs: "El abogado va a la corte.", related: ["judge"], difficulty: 1 },
          { id: "l2t2_n6", word: "chef", translation: "chef/cocinero", type: "noun", definition: "a professional cook", definitionEs: "un cocinero profesional", example: "The chef cooks delicious food.", exampleEs: "El chef cocina comida deliciosa.", related: ["restaurant", "kitchen"], difficulty: 1 },
          { id: "l2t2_n7", word: "police officer", translation: "policía", type: "noun", definition: "a person who enforces the law", definitionEs: "una persona que hace cumplir la ley", example: "The police officer protects people.", exampleEs: "El policía protege a la gente.", related: [], difficulty: 1 },
          { id: "l2t2_n8", word: "firefighter", translation: "bombero", type: "noun", definition: "a person who puts out fires", definitionEs: "una persona que apaga incendios", example: "The firefighter is very brave.", exampleEs: "El bombero es muy valiente.", related: ["fire"], difficulty: 1 },
          { id: "l2t2_n9", word: "accountant", translation: "contador", type: "noun", definition: "a person who works with money and finances", definitionEs: "una persona que trabaja con dinero y finanzas", example: "The accountant manages the company's finances.", exampleEs: "El contador gestiona las finanzas de la empresa.", related: ["money"], difficulty: 2 },
          { id: "l2t2_n10", word: "pilot", translation: "piloto", type: "noun", definition: "a person who flies airplanes", definitionEs: "una persona que pilotea aviones", example: "The pilot flies planes around the world.", exampleEs: "El piloto vuela aviones por todo el mundo.", related: ["airplane"], difficulty: 1 },
        ],
        verbs: [
          { id: "l2t2_v1", word: "work", translation: "trabajar", type: "verb", definition: "to do a job", definitionEs: "hacer un trabajo", example: "I work in an office.", exampleEs: "Trabajo en una oficina.", related: ["job"], difficulty: 1 },
          { id: "l2t2_v2", word: "teach", translation: "enseñar", type: "verb", definition: "to give lessons", definitionEs: "dar lecciones", example: "She teaches English to students.", exampleEs: "Ella enseña inglés a estudiantes.", related: ["learn"], difficulty: 1 },
          { id: "l2t2_v3", word: "help", translation: "ayudar", type: "verb", definition: "to assist someone", definitionEs: "asistir a alguien", example: "Nurses help patients every day.", exampleEs: "Los enfermeros ayudan a pacientes todos los días.", related: [], difficulty: 1 },
          { id: "l2t2_v4", word: "design", translation: "diseñar", type: "verb", definition: "to plan or create something", definitionEs: "planear o crear algo", example: "Engineers design new products.", exampleEs: "Los ingenieros diseñan nuevos productos.", related: [], difficulty: 1 },
          { id: "l2t2_v5", word: "manage", translation: "gestionar", type: "verb", definition: "to be in charge of", definitionEs: "estar a cargo de", example: "She manages a team of 10 people.", exampleEs: "Ella gestiona un equipo de 10 personas.", related: ["lead"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l2t2_a1", word: "professional", translation: "profesional", type: "adjective", definition: "related to a job or career", definitionEs: "relacionado con un trabajo o carrera", example: "She has a professional attitude.", exampleEs: "Ella tiene una actitud profesional.", related: [], difficulty: 2 },
          { id: "l2t2_a2", word: "skilled", translation: "hábil", type: "adjective", definition: "having ability or expertise", definitionEs: "con habilidad o experiencia", example: "He is a skilled worker.", exampleEs: "Él es un trabajador hábil.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l2t2_e1", word: "What do you do?", translation: "¿A qué te dedicas?", type: "expression", definition: "asking about someone's job", definitionEs: "preguntar sobre el trabajo de alguien", example: "What do you do? I'm a teacher.", exampleEs: "¿A qué te dedicas? Soy profesor.", related: [], difficulty: 1 },
          { id: "l2t2_e2", word: "I work as a...", translation: "Trabajo como...", type: "expression", definition: "describing your job", definitionEs: "describir tu trabajo", example: "I work as a software developer.", exampleEs: "Trabajo como desarrollador de software.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [
          { id: "l2t2_p1", word: "at", translation: "en", type: "preposition", definition: "location for work", definitionEs: "ubicación del trabajo", example: "I work at a hospital.", exampleEs: "Trabajo en un hospital.", related: [], difficulty: 1 },
        ],
      }
    },
    {
      id: 3,
      title: "Places in Town",
      titleEs: "Lugares en la Ciudad",
      introduction: {
        title: "🏙️ Lugares en la Ciudad en Inglés",
        explanation: "Saber nombrar lugares y pedir/dar direcciones es vital cuando viajas o vives en un lugar nuevo. Aprenderás vocabulario de lugares y las preposiciones necesarias para ubicarlos.",
        keyPoints: [
          "Lugares comunes: bank (banco), hospital, supermarket, library (biblioteca), pharmacy (farmacia)",
          "Para preguntar ubicación: 'Where is the bank?' / 'How do I get to the station?'",
          "Preposiciones de lugar: next to (al lado de), between (entre), opposite (enfrente de), behind (detrás de)",
          "Direcciones: 'Turn left/right', 'Go straight', 'Cross the street'"
        ],
        examples: [
          { english: "Where is the nearest hospital?", spanish: "¿Dónde está el hospital más cercano?", explanation: "Preguntando ubicación" },
          { english: "The pharmacy is next to the bank.", spanish: "La farmacia está al lado del banco.", explanation: "Preposición de lugar" },
          { english: "Turn left at the traffic light.", spanish: "Gira a la izquierda en el semáforo.", explanation: "Dando direcciones" }
        ],
        tips: [
          "💡 'Library' (biblioteca) ≠ 'Bookstore' (librería) - ¡Falso amigo!",
          "💡 En UK se dice 'chemist's', en US 'pharmacy' o 'drugstore'",
          "💡 'Go straight on' es más común en inglés británico, 'Go straight ahead' en americano"
        ],
        whenToUse: [
          "Pidiendo direcciones: 'Excuse me, where is the nearest pharmacy?'",
          "Dando indicaciones: 'Go straight and turn left at the corner.'",
          "Describiendo ubicaciones: 'The restaurant is between the bank and the cinema.'"
        ],
        whenNotToUse: [
          "No confundas 'library' con 'bookstore': 'I buy books at the library' ❌ → 'I buy books at the bookstore' ✓",
          "No uses 'in front of' y 'opposite' indistintamente: 'opposite' implica estar al otro lado de algo"
        ]
      },
      objectives: [
        "Nombrar lugares comunes en una ciudad",
        "Dar y entender direcciones básicas",
        "Usar preposiciones de lugar"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "Donde trabajamos (jobs) está en algún lugar de la ciudad. Ahora aprenderás esos lugares.",
      connectionToNext: "En los lugares de la ciudad puedes comprar comida. Siguiente: Food and Cooking.",
      grammarTheoryIds: ['a1-there-is-are', 'a2-prepositions-time-place'],
      
      commonMistakes: [
        {
          id: "l2t3_cm1",
          wrong: "Where is a bank?",
          correct: "Where is THE bank? / Where is A bank?",
          explanation: "'The' for specific bank, 'a' when you need any bank nearby.",
          explanationEs: "'The' para un banco específico, 'a' cuando necesitas cualquier banco cercano.",
          category: "grammar"
        },
        {
          id: "l2t3_cm2",
          wrong: "I go to library.",
          correct: "I go to THE library.",
          explanation: "Use 'the' with specific places: the hospital, the bank, the library.",
          explanationEs: "Usa 'the' con lugares específicos: the hospital, the bank, the library.",
          category: "grammar"
        },
        {
          id: "l2t3_cm3",
          wrong: "The bank is in front the park.",
          correct: "The bank is in front OF the park.",
          explanation: "'In front' always needs 'of': in front OF something.",
          explanationEs: "'In front' siempre necesita 'of': in front OF something.",
          category: "preposition"
        },
        {
          id: "l2t3_cm4",
          wrong: "I want to go the hospital.",
          correct: "I want to go TO the hospital.",
          explanation: "'Go' needs 'to': go TO a place.",
          explanationEs: "'Go' necesita 'to': go TO a place.",
          category: "preposition"
        },
        {
          id: "l2t3_cm5",
          wrong: "The station is in the left.",
          correct: "The station is ON the left.",
          explanation: "Use 'on the left/right', not 'in'.",
          explanationEs: "Usa 'on the left/right', no 'in'.",
          category: "preposition"
        }
      ],
      
      exercises: [
        {
          id: "l2t3_ex1",
          type: "gap-fill",
          title: "Prepositions of Place",
          titleEs: "Preposiciones de Lugar",
          instruction: "Fill in with the correct preposition: next to, opposite, between, behind.",
          instructionEs: "Llena con la preposición correcta: next to, opposite, between, behind.",
          difficulty: 1,
          items: [
            { id: "l2t3_ex1_1", prompt: "The cafe is _____ the bank and the library.", correctAnswer: "between", hint: "In the middle of two places", hintEs: "En medio de dos lugares" },
            { id: "l2t3_ex1_2", prompt: "The restaurant is _____ the park.", correctAnswer: "opposite", hint: "Facing the park across the street", hintEs: "Frente al parque, al otro lado" },
            { id: "l2t3_ex1_3", prompt: "The pharmacy is _____ the hospital.", correctAnswer: "next to", hint: "Beside, very close", hintEs: "Al lado, muy cerca" },
            { id: "l2t3_ex1_4", prompt: "The parking lot is _____ the building.", correctAnswer: "behind", hint: "At the back", hintEs: "En la parte trasera" }
          ]
        },
        {
          id: "l2t3_ex2",
          type: "gap-fill",
          title: "Giving Directions",
          titleEs: "Dando Direcciones",
          instruction: "Complete the directions with: turn, go straight, cross, pass.",
          instructionEs: "Completa las direcciones con: turn, go straight, cross, pass.",
          difficulty: 1,
          items: [
            { id: "l2t3_ex2_1", prompt: "_____ left at the traffic light.", correctAnswer: "Turn", hint: "Change direction", hintEs: "Cambiar dirección" },
            { id: "l2t3_ex2_2", prompt: "_____ for two blocks.", correctAnswer: "Go straight", hint: "Continue forward", hintEs: "Continuar adelante" },
            { id: "l2t3_ex2_3", prompt: "_____ the street at the crosswalk.", correctAnswer: "Cross", hint: "Go to the other side", hintEs: "Ir al otro lado" },
            { id: "l2t3_ex2_4", prompt: "_____ the bank and you'll see the library.", correctAnswer: "Pass", hint: "Go by", hintEs: "Pasar junto a" }
          ]
        },
        {
          id: "l2t3_ex3",
          type: "matching",
          title: "Places and What You Do There",
          titleEs: "Lugares y Qué Haces Ahí",
          instruction: "Match each place with what you can do there.",
          instructionEs: "Relaciona cada lugar con lo que puedes hacer ahí.",
          difficulty: 1,
          items: [
            { id: "l2t3_ex3_1", prompt: "library", correctAnswer: "borrow books", hint: "Not buy, borrow", hintEs: "No comprar, pedir prestado" },
            { id: "l2t3_ex3_2", prompt: "pharmacy", correctAnswer: "buy medicine", hint: "Medical supplies", hintEs: "Suministros médicos" },
            { id: "l2t3_ex3_3", prompt: "bank", correctAnswer: "get money", hint: "Financial transactions", hintEs: "Transacciones financieras" },
            { id: "l2t3_ex3_4", prompt: "cinema", correctAnswer: "watch movies", hint: "Entertainment", hintEs: "Entretenimiento" }
          ]
        },
        {
          id: "l2t3_ex4",
          type: "error-correction",
          title: "Fix the Direction Sentences",
          titleEs: "Corrige las Oraciones de Direcciones",
          instruction: "Find and correct the error.",
          instructionEs: "Encuentra y corrige el error.",
          difficulty: 1,
          items: [
            { id: "l2t3_ex4_1", prompt: "The bank is in front the park.", correctAnswer: "The bank is in front OF the park.", explanation: "'In front' requires 'of'.", explanationEs: "'In front' requiere 'of'." },
            { id: "l2t3_ex4_2", prompt: "The station is in the left.", correctAnswer: "The station is ON the left.", explanation: "Use 'on' with left/right.", explanationEs: "Usa 'on' con left/right." },
            { id: "l2t3_ex4_3", prompt: "I go to library every day.", correctAnswer: "I go to THE library every day.", explanation: "Need 'the' before library.", explanationEs: "Necesitas 'the' antes de library." },
            { id: "l2t3_ex4_4", prompt: "Turn to left at the corner.", correctAnswer: "Turn left at the corner.", explanation: "No 'to' needed: Turn left/right.", explanationEs: "No necesitas 'to': Turn left/right." }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l2t3_dialogue",
        title: "Asking for Directions",
        titleEs: "Pidiendo Direcciones",
        context: "A tourist asks a local for directions to the museum.",
        contextEs: "Un turista le pide direcciones a un local para llegar al museo.",
        speakers: [
          { id: "s1", name: "Tourist", role: "Looking for the museum" },
          { id: "s2", name: "Local", role: "Giving directions" }
        ],
        lines: [
          { speakerId: "s1", text: "Excuse me, where is the museum?", textEs: "Disculpe, ¿dónde está el museo?", note: "Polite way to start", noteEs: "Forma educada de empezar" },
          { speakerId: "s2", text: "The museum? It's not far from here.", textEs: "¿El museo? No está lejos de aquí.", note: "Confirming what they're looking for", noteEs: "Confirmando qué buscan" },
          { speakerId: "s1", text: "How do I get there?", textEs: "¿Cómo llego?", note: "Asking for directions", noteEs: "Pidiendo direcciones" },
          { speakerId: "s2", text: "Go straight for two blocks.", textEs: "Sigue recto por dos cuadras.", note: "First instruction", noteEs: "Primera instrucción" },
          { speakerId: "s1", text: "Go straight, OK.", textEs: "Sigo recto, OK.", note: "Confirming understanding", noteEs: "Confirmando entendimiento" },
          { speakerId: "s2", text: "Then turn right at the traffic light.", textEs: "Luego gira a la derecha en el semáforo.", note: "Second instruction", noteEs: "Segunda instrucción" },
          { speakerId: "s2", text: "The museum is on the left, next to the library.", textEs: "El museo está a la izquierda, al lado de la biblioteca.", note: "Final location with preposition", noteEs: "Ubicación final con preposición" },
          { speakerId: "s1", text: "So, straight, right at the traffic light, and it's on the left?", textEs: "Entonces, recto, derecha en el semáforo, y está a la izquierda?", note: "Summarizing directions", noteEs: "Resumiendo las direcciones" },
          { speakerId: "s2", text: "Exactly! You can't miss it.", textEs: "¡Exacto! No tiene pérdida.", note: "Confirming", noteEs: "Confirmando" },
          { speakerId: "s1", text: "Thank you so much!", textEs: "¡Muchas gracias!", note: "Thanking", noteEs: "Agradeciendo" }
        ],
        keyPhrases: [
          { phrase: "Excuse me, where is...?", translation: "Disculpe, ¿dónde está...?", usage: "Polite way to ask for location" },
          { phrase: "How do I get there?", translation: "¿Cómo llego?", usage: "Asking for directions" },
          { phrase: "It's on the left/right", translation: "Está a la izquierda/derecha", usage: "Indicating side" },
          { phrase: "You can't miss it", translation: "No tiene pérdida", usage: "It's easy to find" }
        ],
        variations: [
          { original: "Excuse me", alternative: "Sorry to bother you", note: "More formal" },
          { original: "Go straight", alternative: "Walk straight ahead", note: "More specific" },
          { original: "Turn right", alternative: "Take a right", note: "More casual" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/θ/",
            description: "The 'th' sound in 'the', 'there', 'that'",
            descriptionEs: "El sonido 'th' en 'the', 'there', 'that'",
            examples: [
              { word: "the", transcription: "/ðə/" },
              { word: "there", transcription: "/ðeə/" },
              { word: "that", transcription: "/ðæt/" }
            ],
            tips: ["Put tongue between teeth", "Don't say 'd' - 'de' is wrong"]
          },
          {
            symbol: "/aɪ/",
            description: "The diphthong in 'right', 'library'",
            descriptionEs: "El diptongo en 'right', 'library'",
            examples: [
              { word: "right", transcription: "/raɪt/" },
              { word: "library", transcription: "/ˈlaɪbrəri/" },
              { word: "behind", transcription: "/bɪˈhaɪnd/" }
            ],
            tips: ["Starts with 'ah' moves to 'ee'", "Like Spanish 'ai' in 'aire'"]
          }
        ],
        commonProblems: [
          { word: "library", wrong: "LI-bra-ry (4 syllables)", correct: "LAI-brer-ee (3 syllables)", tip: "Only 3 syllables, stress on first" },
          { word: "opposite", wrong: "o-po-SITE", correct: "O-puh-zit", tip: "Stress on first syllable" },
          { word: "museum", wrong: "MU-se-um", correct: "myoo-ZEE-um", tip: "Stress on second syllable" }
        ],
        minimalPairs: [
          { word1: "right", word2: "light", soundDifference: "/r/ vs /l/ at start" },
          { word1: "turn", word2: "learn", soundDifference: "/t/ vs /l/ at start" },
          { word1: "street", word2: "straight", soundDifference: "Different vowels" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "Excuse me?↗", meaning: "Getting attention politely" },
          { pattern: "Falling ↘", example: "Turn LEFT at the corner.↘", meaning: "Instructions fall, with stress on key word" },
          { pattern: "Fall-Rise ↘↗", example: "The museum?↘↗", meaning: "Confirming what someone said" }
        ]
      },
      
      culturalNote: {
        title: "Asking for Directions in English-Speaking Countries",
        titleEs: "Pidiendo Direcciones en Países Angloparlantes",
        content: "In English-speaking countries, it's completely normal to ask strangers for directions, but always start with 'Excuse me' to be polite. People generally enjoy helping tourists. However, be prepared - not everyone knows their area well! GPS and smartphones are increasingly used, so you might hear 'Let me check on my phone.' Distance is often given in 'blocks' in cities (especially in the US) or 'minutes walking.' In the UK, you might hear references to pubs or other landmarks: 'past the Red Lion pub.' Americans tend to give directions in terms of distance ('about half a mile'), while British people often use time ('about 5 minutes walk'). If someone says 'You can't miss it,' it means the place is easy to find. Don't be surprised if people walk with you part of the way to help you find it!",
        contentEs: "En países angloparlantes, es completamente normal pedir direcciones a desconocidos, pero siempre empieza con 'Excuse me' para ser educado. La gente generalmente disfruta ayudar a turistas. Sin embargo, prepárate - ¡no todos conocen bien su área! GPS y smartphones se usan cada vez más, así que podrías escuchar 'Let me check on my phone.' La distancia se da frecuentemente en 'blocks' (cuadras) en ciudades (especialmente en EEUU) o 'minutes walking.' En UK podrías escuchar referencias a pubs u otros puntos de referencia. Los americanos tienden a dar direcciones en términos de distancia ('about half a mile'), mientras los británicos usan tiempo ('about 5 minutes walk').",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l2t3_quiz",
        title: "Places in Town Mastery Check",
        titleEs: "Prueba de Dominio de Lugares en la Ciudad",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l2t3_q1",
            type: "multiple-choice",
            question: "The pharmacy is _____ the hospital.",
            questionEs: "The pharmacy is _____ the hospital.",
            options: ["next", "next to", "near from", "beside from"],
            correctAnswer: "next to",
            explanation: "'Next to' means beside. 'Next' alone doesn't work here.",
            explanationEs: "'Next to' significa al lado. 'Next' solo no funciona aquí.",
            points: 10
          },
          {
            id: "l2t3_q2",
            type: "multiple-choice",
            question: "How do you ask for location politely?",
            questionEs: "¿Cómo preguntas ubicación educadamente?",
            options: ["Where is the bank?", "Excuse me, where is the bank?", "Say me where is bank", "Bank is where?"],
            correctAnswer: "Excuse me, where is the bank?",
            explanation: "Start with 'Excuse me' to be polite.",
            explanationEs: "Empieza con 'Excuse me' para ser educado.",
            points: 10
          },
          {
            id: "l2t3_q3",
            type: "multiple-choice",
            question: "Complete: 'The museum is _____ the left.'",
            questionEs: "Completa: 'The museum is _____ the left.'",
            options: ["in", "at", "on", "to"],
            correctAnswer: "on",
            explanation: "Use 'on' with left/right: on the left, on the right.",
            explanationEs: "Usa 'on' con left/right: on the left, on the right.",
            points: 10
          },
          {
            id: "l2t3_q4",
            type: "fill-blank",
            question: "_____ straight for two blocks.",
            questionEs: "_____ recto por dos cuadras.",
            correctAnswer: ["Go"],
            explanation: "'Go straight' means continue forward.",
            explanationEs: "'Go straight' significa continuar adelante.",
            points: 10
          },
          {
            id: "l2t3_q5",
            type: "true-false",
            question: "'Library' and 'bookstore' mean the same thing.",
            questionEs: "'Library' y 'bookstore' significan lo mismo.",
            correctAnswer: "false",
            explanation: "Library = borrow books (biblioteca). Bookstore = buy books (librería).",
            explanationEs: "Library = pedir libros prestados (biblioteca). Bookstore = comprar libros (librería).",
            points: 10
          },
          {
            id: "l2t3_q6",
            type: "multiple-choice",
            question: "The cafe is _____ the bank and the library.",
            questionEs: "The cafe is _____ the bank and the library.",
            options: ["between", "next to", "in front of", "behind"],
            correctAnswer: "between",
            explanation: "'Between' = in the middle of two things.",
            explanationEs: "'Between' = en medio de dos cosas.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l2t3_production",
        title: "Give Directions to a Tourist",
        titleEs: "Da Direcciones a un Turista",
        type: "both",
        scenario: "A tourist asks you how to get from the train station to the museum in your city.",
        scenarioEs: "Un turista te pregunta cómo llegar de la estación de tren al museo en tu ciudad.",
        prompts: [
          {
            id: "l2t3_prod1",
            instruction: "Start politely and confirm the place they want",
            instructionEs: "Empieza educadamente y confirma el lugar que quieren",
            hints: ["The museum? It's not far...", "Sure, I can help you..."],
            hintsEs: ["¿El museo? No está lejos...", "Claro, puedo ayudarte..."],
            requiredElements: ["polite response"]
          },
          {
            id: "l2t3_prod2",
            instruction: "Give the first direction (go straight, turn, etc.)",
            instructionEs: "Da la primera dirección (sigue recto, gira, etc.)",
            hints: ["Go straight for...", "Walk down this street..."],
            hintsEs: ["Sigue recto por...", "Camina por esta calle..."],
            requiredElements: ["direction verb"]
          },
          {
            id: "l2t3_prod3",
            instruction: "Give the second direction with a landmark",
            instructionEs: "Da la segunda dirección con un punto de referencia",
            hints: ["Turn left at the...", "When you see the..., turn..."],
            hintsEs: ["Gira a la izquierda en el...", "Cuando veas el..., gira..."],
            requiredElements: ["turn + landmark"]
          },
          {
            id: "l2t3_prod4",
            instruction: "Describe where the museum is (use prepositions)",
            instructionEs: "Describe dónde está el museo (usa preposiciones)",
            hints: ["The museum is on the left...", "It's next to the..."],
            hintsEs: ["El museo está a la izquierda...", "Está al lado del..."],
            requiredElements: ["preposition of place"]
          }
        ],
        modelResponse: "The museum? Sure, it's not far. Go straight for two blocks. Then turn right at the traffic light. Walk past the park and you'll see it. The museum is on the left, next to the library. You can't miss it!",
        modelResponseEs: "¿El museo? Claro, no está lejos. Sigue recto por dos cuadras. Luego gira a la derecha en el semáforo. Pasa el parque y lo verás. El museo está a la izquierda, al lado de la biblioteca. ¡No tiene pérdida!",
        evaluationCriteria: [
          "Responded politely",
          "Used direction verbs correctly",
          "Included at least one preposition of place",
          "Gave clear, logical directions"
        ],
        evaluationCriteriaEs: [
          "Respondió educadamente",
          "Usó verbos de dirección correctamente",
          "Incluyó al menos una preposición de lugar",
          "Dio direcciones claras y lógicas"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l2t3_n1", word: "hospital", translation: "hospital", type: "noun", definition: "a place where sick people receive treatment", definitionEs: "un lugar donde personas enfermas reciben tratamiento", example: "The hospital is on Main Street.", exampleEs: "El hospital está en Main Street.", related: ["doctor", "nurse"], difficulty: 1 },
          { id: "l2t3_n2", word: "supermarket", translation: "supermercado", type: "noun", definition: "a large store selling food and household items", definitionEs: "una tienda grande que vende comida y artículos del hogar", example: "I buy groceries at the supermarket.", exampleEs: "Compro comestibles en el supermercado.", related: ["store", "shop"], difficulty: 1 },
          { id: "l2t3_n3", word: "bank", translation: "banco", type: "noun", definition: "a place where you keep money", definitionEs: "un lugar donde guardas dinero", example: "I need to go to the bank.", exampleEs: "Necesito ir al banco.", related: ["money"], difficulty: 1 },
          { id: "l2t3_n4", word: "pharmacy", translation: "farmacia", type: "noun", definition: "a store that sells medicine", definitionEs: "una tienda que vende medicina", example: "You can buy medicine at the pharmacy.", exampleEs: "Puedes comprar medicina en la farmacia.", related: ["medicine"], difficulty: 1 },
          { id: "l2t3_n5", word: "library", translation: "biblioteca", type: "noun", definition: "a place with books to borrow", definitionEs: "un lugar con libros para pedir prestados", example: "I study at the library.", exampleEs: "Estudio en la biblioteca.", related: ["book"], difficulty: 1 },
          { id: "l2t3_n6", word: "restaurant", translation: "restaurante", type: "noun", definition: "a place where you can buy and eat meals", definitionEs: "un lugar donde puedes comprar y comer comidas", example: "Let's eat at that restaurant.", exampleEs: "Comamos en ese restaurante.", related: ["food", "menu"], difficulty: 1 },
          { id: "l2t3_n7", word: "park", translation: "parque", type: "noun", definition: "a public area with grass and trees", definitionEs: "un área pública con pasto y árboles", example: "Children play in the park.", exampleEs: "Los niños juegan en el parque.", related: [], difficulty: 1 },
          { id: "l2t3_n8", word: "station", translation: "estación", type: "noun", definition: "a place where trains or buses stop", definitionEs: "un lugar donde paran trenes o buses", example: "The train station is nearby.", exampleEs: "La estación de tren está cerca.", related: ["train", "bus"], difficulty: 1 },
          { id: "l2t3_n9", word: "museum", translation: "museo", type: "noun", definition: "a building where art or historical objects are displayed", definitionEs: "un edificio donde se exhiben arte u objetos históricos", example: "We visited the art museum.", exampleEs: "Visitamos el museo de arte.", related: ["art"], difficulty: 1 },
          { id: "l2t3_n10", word: "cinema", translation: "cine", type: "noun", definition: "a place where you watch movies", definitionEs: "un lugar donde ves películas", example: "Let's go to the cinema tonight.", exampleEs: "Vamos al cine esta noche.", related: ["movie", "film"], difficulty: 1 },
        ],
        verbs: [
          { id: "l2t3_v1", word: "turn", translation: "girar", type: "verb", definition: "to change direction", definitionEs: "cambiar de dirección", example: "Turn left at the corner.", exampleEs: "Gira a la izquierda en la esquina.", related: [], difficulty: 1 },
          { id: "l2t3_v2", word: "cross", translation: "cruzar", type: "verb", definition: "to go from one side to the other", definitionEs: "ir de un lado al otro", example: "Cross the street carefully.", exampleEs: "Cruza la calle con cuidado.", related: [], difficulty: 1 },
          { id: "l2t3_v3", word: "pass", translation: "pasar", type: "verb", definition: "to go by something", definitionEs: "pasar junto a algo", example: "Pass the bank and continue straight.", exampleEs: "Pasa el banco y continúa recto.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l2t3_a1", word: "near", translation: "cerca", type: "adjective", definition: "a short distance away", definitionEs: "a poca distancia", example: "The bank is near the park.", exampleEs: "El banco está cerca del parque.", related: ["close"], difficulty: 1 },
          { id: "l2t3_a2", word: "far", translation: "lejos", type: "adjective", definition: "a long distance away", definitionEs: "a gran distancia", example: "The airport is far from here.", exampleEs: "El aeropuerto está lejos de aquí.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l2t3_e1", word: "Where is...?", translation: "¿Dónde está...?", type: "expression", definition: "asking for location", definitionEs: "preguntar por ubicación", example: "Where is the nearest bank?", exampleEs: "¿Dónde está el banco más cercano?", related: [], difficulty: 1 },
          { id: "l2t3_e2", word: "How do I get to...?", translation: "¿Cómo llego a...?", type: "expression", definition: "asking for directions", definitionEs: "preguntar direcciones", example: "How do I get to the station?", exampleEs: "¿Cómo llego a la estación?", related: [], difficulty: 1 },
          { id: "l2t3_e3", word: "Go straight", translation: "Sigue recto", type: "expression", definition: "continue forward", definitionEs: "continuar adelante", example: "Go straight for two blocks.", exampleEs: "Sigue recto por dos cuadras.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [
          { id: "l2t3_p1", word: "next to", translation: "al lado de", type: "preposition", definition: "beside", definitionEs: "al lado de", example: "The bank is next to the pharmacy.", exampleEs: "El banco está al lado de la farmacia.", related: [], difficulty: 1 },
          { id: "l2t3_p2", word: "between", translation: "entre", type: "preposition", definition: "in the middle of two things", definitionEs: "en medio de dos cosas", example: "The cafe is between the bank and the library.", exampleEs: "El café está entre el banco y la biblioteca.", related: [], difficulty: 1 },
          { id: "l2t3_p3", word: "opposite", translation: "enfrente de", type: "preposition", definition: "facing", definitionEs: "frente a", example: "The restaurant is opposite the park.", exampleEs: "El restaurante está enfrente del parque.", related: [], difficulty: 1 },
          { id: "l2t3_p4", word: "behind", translation: "detrás de", type: "preposition", definition: "at the back of", definitionEs: "detrás de", example: "The parking is behind the building.", exampleEs: "El estacionamiento está detrás del edificio.", related: [], difficulty: 1 },
        ],
      }
    },
    {
      id: 4,
      title: "Food and Cooking",
      titleEs: "Comida y Cocina",
      introduction: {
        title: "🍳 Comida y Cocina en Inglés",
        explanation: "Expandiremos tu vocabulario de comida para incluir ingredientes, métodos de cocción y cómo pedir en restaurantes de manera educada.",
        keyPoints: [
          "Tipos de comida: vegetables (verduras), fruit (fruta), meat (carne), fish (pescado)",
          "Métodos de cocción: cook (cocinar), bake (hornear), fry (freír), boil (hervir)",
          "Sabores: sweet (dulce), salty (salado), spicy (picante), sour (ácido)",
          "Para pedir: 'I'd like...' / 'Can I have...?' / 'Could I get...?'"
        ],
        examples: [
          { english: "I'd like a salad, please.", spanish: "Me gustaría una ensalada, por favor.", explanation: "Pidiendo educadamente" },
          { english: "This soup is too salty.", spanish: "Esta sopa está muy salada.", explanation: "Describiendo sabor" },
          { english: "I don't eat spicy food.", spanish: "No como comida picante.", explanation: "Expresando preferencia" }
        ],
        tips: [
          "💡 'Cook' es general, pero hay verbos específicos: fry, bake, roast, grill, steam",
          "💡 'I'd like' es más educado que 'I want'",
          "💡 'Dessert' (postre) ≠ 'Desert' (desierto) - ¡Pronunciación diferente!"
        ],
        whenToUse: [
          "En restaurantes: 'I'd like the chicken, please.'",
          "Describiendo comida: 'This is too spicy for me.'",
          "Explicando cómo cocinar: 'First, boil the water. Then add the pasta.'"
        ],
        whenNotToUse: [
          "No uses 'I want' en restaurantes: 'I want a coffee' ❌ → 'I'd like a coffee, please' ✓",
          "No confundas 'cook' con 'cooker': 'cook' es persona/verbo, 'cooker' es electrodoméstico"
        ]
      },
      objectives: [
        "Nombrar alimentos y bebidas",
        "Describir comidas",
        "Expresar gustos y preferencias"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "En la ciudad hay restaurantes donde compramos comida. Ahora aprenderás más vocabulario culinario.",
      connectionToNext: "Después de comer, hablaremos del clima - tema universal de conversación.",
      grammarTheoryIds: ['a1-articles', 'a2-countable-uncountable'],
      
      commonMistakes: [
        {
          id: "l2t4_cm1",
          wrong: "I want a coffee.",
          correct: "I'd like a coffee, please.",
          explanation: "'I'd like' is more polite than 'I want' when ordering.",
          explanationEs: "'I'd like' es más educado que 'I want' al ordenar.",
          category: "expression"
        },
        {
          id: "l2t4_cm2",
          wrong: "This tastes deliciously.",
          correct: "This tastes delicious.",
          explanation: "After 'taste/smell/look/feel/sound' use adjective, not adverb.",
          explanationEs: "Después de 'taste/smell/look/feel/sound' usa adjetivo, no adverbio.",
          category: "grammar"
        },
        {
          id: "l2t4_cm3",
          wrong: "I'm not eat meat.",
          correct: "I don't eat meat.",
          explanation: "Use 'don't/doesn't' for habits, not 'am not/is not'.",
          explanationEs: "Usa 'don't/doesn't' para hábitos, no 'am not/is not'.",
          category: "grammar"
        },
        {
          id: "l2t4_cm4",
          wrong: "The soup is very salt.",
          correct: "The soup is very salty.",
          explanation: "'Salt' is noun, 'salty' is adjective. Use -y adjectives for tastes.",
          explanationEs: "'Salt' es sustantivo, 'salty' es adjetivo. Usa adjetivos con -y para sabores.",
          category: "vocabulary"
        },
        {
          id: "l2t4_cm5",
          wrong: "I cooked the pasta in the cooker.",
          correct: "I cooked the pasta in a pot / on the stove.",
          explanation: "'Cooker' is the appliance (UK) or stove. You cook IN a pot/pan.",
          explanationEs: "'Cooker' es el electrodoméstico/estufa. Cocinas EN una olla/sartén.",
          category: "vocabulary"
        }
      ],
      
      exercises: [
        {
          id: "l2t4_ex1",
          type: "gap-fill",
          title: "Cooking Methods",
          titleEs: "Métodos de Cocción",
          instruction: "Fill in with the correct cooking verb: fry, bake, boil, grill.",
          instructionEs: "Llena con el verbo de cocina correcto: fry, bake, boil, grill.",
          difficulty: 1,
          items: [
            { id: "l2t4_ex1_1", prompt: "_____ eggs in a frying pan with oil.", correctAnswer: "Fry", hint: "Cook in hot oil", hintEs: "Cocinar en aceite caliente" },
            { id: "l2t4_ex1_2", prompt: "_____ a cake in the oven for 30 minutes.", correctAnswer: "Bake", hint: "Cook in an oven", hintEs: "Cocinar en un horno" },
            { id: "l2t4_ex1_3", prompt: "_____ water for tea.", correctAnswer: "Boil", hint: "Heat until bubbles", hintEs: "Calentar hasta que burbujee" },
            { id: "l2t4_ex1_4", prompt: "_____ the steak on the barbecue.", correctAnswer: "Grill", hint: "Cook with direct heat from below", hintEs: "Cocinar con calor directo desde abajo" }
          ]
        },
        {
          id: "l2t4_ex2",
          type: "gap-fill",
          title: "Taste Adjectives",
          titleEs: "Adjetivos de Sabor",
          instruction: "Complete with: sweet, salty, spicy, sour.",
          instructionEs: "Completa con: sweet, salty, spicy, sour.",
          difficulty: 1,
          items: [
            { id: "l2t4_ex2_1", prompt: "Lemons are very _____.", correctAnswer: "sour", hint: "Like citrus", hintEs: "Como cítricos" },
            { id: "l2t4_ex2_2", prompt: "Chocolate cake is _____.", correctAnswer: "sweet", hint: "Like sugar", hintEs: "Como azúcar" },
            { id: "l2t4_ex2_3", prompt: "Mexican food can be very _____.", correctAnswer: "spicy", hint: "Hot like chili", hintEs: "Picante como chile" },
            { id: "l2t4_ex2_4", prompt: "French fries with too much salt are _____.", correctAnswer: "salty", hint: "Too much salt", hintEs: "Demasiada sal" }
          ]
        },
        {
          id: "l2t4_ex3",
          type: "matching",
          title: "Food Categories",
          titleEs: "Categorías de Comida",
          instruction: "Match the food with its category.",
          instructionEs: "Relaciona la comida con su categoría.",
          difficulty: 1,
          items: [
            { id: "l2t4_ex3_1", prompt: "apple, banana, orange", correctAnswer: "fruit", hint: "From trees", hintEs: "De árboles" },
            { id: "l2t4_ex3_2", prompt: "carrot, broccoli, onion", correctAnswer: "vegetables", hint: "From gardens", hintEs: "De huertos" },
            { id: "l2t4_ex3_3", prompt: "beef, chicken, pork", correctAnswer: "meat", hint: "From animals", hintEs: "De animales" },
            { id: "l2t4_ex3_4", prompt: "salmon, tuna, shrimp", correctAnswer: "seafood", hint: "From the ocean", hintEs: "Del océano" }
          ]
        },
        {
          id: "l2t4_ex4",
          type: "transformation",
          title: "Polite Ordering",
          titleEs: "Ordenar Educadamente",
          instruction: "Make these sentences more polite for a restaurant.",
          instructionEs: "Haz estas oraciones más educadas para un restaurante.",
          difficulty: 1,
          items: [
            { id: "l2t4_ex4_1", prompt: "I want a coffee.", correctAnswer: "I'd like a coffee, please.", hint: "Use 'I'd like' + please", hintEs: "Usa 'I'd like' + please" },
            { id: "l2t4_ex4_2", prompt: "Give me the menu.", correctAnswer: "Could I have the menu, please?", hint: "Use 'Could I have'", hintEs: "Usa 'Could I have'" },
            { id: "l2t4_ex4_3", prompt: "I want the check.", correctAnswer: "Could I have the check, please?", hint: "Use 'Could I have'", hintEs: "Usa 'Could I have'" },
            { id: "l2t4_ex4_4", prompt: "More water.", correctAnswer: "Could I have some more water, please?", hint: "Full polite request", hintEs: "Solicitud educada completa" }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l2t4_dialogue",
        title: "Ordering at a Restaurant",
        titleEs: "Ordenando en un Restaurante",
        context: "A customer orders lunch at a restaurant.",
        contextEs: "Un cliente ordena almuerzo en un restaurante.",
        speakers: [
          { id: "s1", name: "Waiter", role: "Restaurant server" },
          { id: "s2", name: "Customer", role: "Ordering food" }
        ],
        lines: [
          { speakerId: "s1", text: "Good afternoon. Are you ready to order?", textEs: "Buenas tardes. ¿Está listo para ordenar?", note: "Greeting and asking", noteEs: "Saludando y preguntando" },
          { speakerId: "s2", text: "Yes, I'd like the grilled chicken, please.", textEs: "Sí, me gustaría el pollo a la parrilla, por favor.", note: "Polite ordering with 'I'd like'", noteEs: "Ordenando educadamente con 'I'd like'" },
          { speakerId: "s1", text: "Would you like any sides with that?", textEs: "¿Le gustaría algún acompañamiento?", note: "Offering options", noteEs: "Ofreciendo opciones" },
          { speakerId: "s2", text: "What sides do you have?", textEs: "¿Qué acompañamientos tienen?", note: "Asking for options", noteEs: "Preguntando por opciones" },
          { speakerId: "s1", text: "We have fries, salad, or steamed vegetables.", textEs: "Tenemos papas fritas, ensalada o verduras al vapor.", note: "Listing options", noteEs: "Listando opciones" },
          { speakerId: "s2", text: "I'll have the salad, please. And could I have a glass of water?", textEs: "Tomaré la ensalada, por favor. ¿Y podría traerme un vaso de agua?", note: "'I'll have' for deciding", noteEs: "'I'll have' para decidir" },
          { speakerId: "s1", text: "Of course. Sparkling or still?", textEs: "Por supuesto. ¿Con gas o sin gas?", note: "Clarifying", noteEs: "Clarificando" },
          { speakerId: "s2", text: "Still water, please.", textEs: "Sin gas, por favor.", note: "Simple answer", noteEs: "Respuesta simple" },
          { speakerId: "s1", text: "Perfect. Your food will be ready in about 15 minutes.", textEs: "Perfecto. Su comida estará lista en unos 15 minutos.", note: "Confirming order", noteEs: "Confirmando orden" },
          { speakerId: "s2", text: "Thank you.", textEs: "Gracias.", note: "Being polite", noteEs: "Siendo educado" }
        ],
        keyPhrases: [
          { phrase: "I'd like..., please", translation: "Me gustaría..., por favor", usage: "Polite way to order" },
          { phrase: "I'll have...", translation: "Tomaré...", usage: "Deciding what to eat" },
          { phrase: "Could I have...?", translation: "¿Podría traerme...?", usage: "Requesting something" },
          { phrase: "What ... do you have?", translation: "¿Qué ... tienen?", usage: "Asking about options" }
        ],
        variations: [
          { original: "I'd like", alternative: "I'll have", note: "Both polite for ordering" },
          { original: "Would you like", alternative: "Do you want", note: "First is more formal" },
          { original: "Could I have", alternative: "Can I get", note: "Second more casual (US)" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/ʊ/",
            description: "The short 'oo' sound in 'cook', 'look', 'good'",
            descriptionEs: "El sonido corto 'oo' en 'cook', 'look', 'good'",
            examples: [
              { word: "cook", transcription: "/kʊk/" },
              { word: "good", transcription: "/gʊd/" },
              { word: "sugar", transcription: "/ˈʃʊgər/" }
            ],
            tips: ["Short 'oo', not long like 'food'", "Lips slightly rounded"]
          },
          {
            symbol: "/uː/",
            description: "The long 'oo' sound in 'food', 'fruit', 'soup'",
            descriptionEs: "El sonido largo 'oo' en 'food', 'fruit', 'soup'",
            examples: [
              { word: "food", transcription: "/fuːd/" },
              { word: "fruit", transcription: "/fruːt/" },
              { word: "soup", transcription: "/suːp/" }
            ],
            tips: ["Long 'oo', like 'blue'", "Lips more rounded than /ʊ/"]
          }
        ],
        commonProblems: [
          { word: "vegetable", wrong: "ve-ge-TA-ble", correct: "VEJ-tuh-buhl (3 syllables)", tip: "Only 3 syllables, stress on first" },
          { word: "dessert", wrong: "DE-sert (like desert)", correct: "di-ZERT", tip: "Stress on second syllable, different from 'desert'" },
          { word: "receipt", wrong: "re-SEIPT", correct: "ri-SEET", tip: "The 'p' is silent" }
        ],
        minimalPairs: [
          { word1: "food", word2: "foot", soundDifference: "/uː/ vs /ʊ/ - long vs short" },
          { word1: "cook", word2: "coke", soundDifference: "/ʊ/ vs /əʊ/ - different vowels" },
          { word1: "taste", word2: "test", soundDifference: "/eɪ/ vs /e/ - diphthong vs monophthong" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "Would you like some DESSERT?↗", meaning: "Yes/no questions rise" },
          { pattern: "Falling ↘", example: "I'd like the CHICKEN.↘", meaning: "Statements and decisions fall" },
          { pattern: "List ↗↗↘", example: "We have fries↗, salad↗, or vegetables↘", meaning: "Lists: rise then fall on last item" }
        ]
      },
      
      culturalNote: {
        title: "Dining Etiquette in English-Speaking Countries",
        titleEs: "Etiqueta al Comer en Países Angloparlantes",
        content: "Tipping is a significant part of dining culture in the US (15-20% is standard), while in the UK it's around 10-15% and optional in Australia. In the US, saying 'I'd like' or 'I'll have' is expected - saying just 'I want' can sound rude. Waiters in the US are typically very attentive and may ask 'How is everything?' during your meal - it's polite to respond even if briefly. Splitting the bill ('going Dutch') is common among friends. In the UK, you might hear 'Could I have the bill?' while in the US it's 'Could I have the check?' Portion sizes in the US tend to be larger than in Europe, and taking leftovers home ('doggy bag' or 'to-go box') is perfectly acceptable. Saying 'please' and 'thank you' frequently is expected and appreciated.",
        contentEs: "La propina es parte importante de la cultura gastronómica en EEUU (15-20% es estándar), mientras en UK es 10-15% y opcional en Australia. En EEUU, decir 'I'd like' o 'I'll have' es esperado - solo decir 'I want' puede sonar grosero. Los meseros en EEUU son muy atentos y pueden preguntar 'How is everything?' durante tu comida. Dividir la cuenta ('going Dutch') es común entre amigos. En UK escucharás 'the bill', en US 'the check'. Las porciones en EEUU tienden a ser más grandes que en Europa, y llevarse la comida sobrante ('to-go box') es perfectamente aceptable.",
        regions: ["US", "UK", "Australia"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l2t4_quiz",
        title: "Food and Cooking Mastery Check",
        titleEs: "Prueba de Dominio de Comida y Cocina",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l2t4_q1",
            type: "multiple-choice",
            question: "Which is the POLITE way to order in a restaurant?",
            questionEs: "¿Cuál es la forma EDUCADA de ordenar en un restaurante?",
            options: ["I want a coffee.", "I'd like a coffee, please.", "Give me a coffee.", "Coffee."],
            correctAnswer: "I'd like a coffee, please.",
            explanation: "'I'd like' + 'please' is polite for ordering.",
            explanationEs: "'I'd like' + 'please' es educado para ordenar.",
            points: 10
          },
          {
            id: "l2t4_q2",
            type: "multiple-choice",
            question: "How do you cook a cake?",
            questionEs: "¿Cómo cocinas un pastel?",
            options: ["You fry it.", "You boil it.", "You bake it.", "You grill it."],
            correctAnswer: "You bake it.",
            explanation: "Bake = cook in an oven. Cakes are baked.",
            explanationEs: "Bake = cocinar en un horno. Los pasteles se hornean.",
            points: 10
          },
          {
            id: "l2t4_q3",
            type: "multiple-choice",
            question: "'This soup tastes _____.' Fill in correctly:",
            questionEs: "'This soup tastes _____.' Completa correctamente:",
            options: ["deliciously", "delicious", "deliciousness", "as delicious"],
            correctAnswer: "delicious",
            explanation: "After 'taste/smell/look/feel' use adjective, not adverb.",
            explanationEs: "Después de 'taste/smell/look/feel' usa adjetivo, no adverbio.",
            points: 10
          },
          {
            id: "l2t4_q4",
            type: "fill-blank",
            question: "Lemons have a _____ taste.",
            questionEs: "Los limones tienen un sabor _____.",
            correctAnswer: ["sour"],
            explanation: "Sour = acidic taste, like lemons and vinegar.",
            explanationEs: "Sour = sabor ácido, como limones y vinagre.",
            points: 10
          },
          {
            id: "l2t4_q5",
            type: "multiple-choice",
            question: "'Could I have the _____, please?' (to pay at the end)",
            questionEs: "'Could I have the _____, please?' (para pagar al final)",
            options: ["menu", "check/bill", "receipt", "tip"],
            correctAnswer: "check/bill",
            explanation: "Check (US) or bill (UK) = what you pay. Receipt = proof of payment after.",
            explanationEs: "Check (US) o bill (UK) = lo que pagas. Receipt = comprobante después.",
            points: 10
          },
          {
            id: "l2t4_q6",
            type: "true-false",
            question: "'I don't eat meat' uses 'am not' because it's a permanent state.",
            questionEs: "'I don't eat meat' usa 'am not' porque es un estado permanente.",
            correctAnswer: "false",
            explanation: "For habits and preferences, use 'don't/doesn't', not 'am not/is not'.",
            explanationEs: "Para hábitos y preferencias, usa 'don't/doesn't', no 'am not/is not'.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l2t4_production",
        title: "Order a Meal at a Restaurant",
        titleEs: "Ordena una Comida en un Restaurante",
        type: "spoken",
        scenario: "You are at a restaurant and the waiter asks what you'd like to order.",
        scenarioEs: "Estás en un restaurante y el mesero pregunta qué te gustaría ordenar.",
        prompts: [
          {
            id: "l2t4_prod1",
            instruction: "Order a main dish politely",
            instructionEs: "Ordena un plato principal educadamente",
            hints: ["I'd like the...", "I'll have the..."],
            hintsEs: ["Me gustaría el/la...", "Tomaré el/la..."],
            requiredElements: ["polite phrase + dish"]
          },
          {
            id: "l2t4_prod2",
            instruction: "Ask what sides are available",
            instructionEs: "Pregunta qué acompañamientos hay disponibles",
            hints: ["What sides do you have?", "What comes with it?"],
            hintsEs: ["¿Qué acompañamientos tienen?", "¿Qué viene con eso?"],
            requiredElements: ["question about options"]
          },
          {
            id: "l2t4_prod3",
            instruction: "Request a drink",
            instructionEs: "Pide una bebida",
            hints: ["Could I also have...?", "And I'd like..."],
            hintsEs: ["¿Podría también tener...?", "Y me gustaría..."],
            requiredElements: ["polite request + drink"]
          },
          {
            id: "l2t4_prod4",
            instruction: "Ask for the check at the end",
            instructionEs: "Pide la cuenta al final",
            hints: ["Could I have the check/bill?", "The check, please."],
            hintsEs: ["¿Podría traerme la cuenta?", "La cuenta, por favor."],
            requiredElements: ["request for bill"]
          }
        ],
        modelResponse: "I'd like the grilled salmon, please. What sides do you have? I'll have the vegetables. Could I also have a glass of white wine? ... That was delicious! Could I have the check, please?",
        modelResponseEs: "Me gustaría el salmón a la parrilla, por favor. ¿Qué acompañamientos tienen? Tomaré las verduras. ¿Podría también tener una copa de vino blanco? ... ¡Estuvo delicioso! ¿Podría traerme la cuenta, por favor?",
        evaluationCriteria: [
          "Used polite ordering phrases",
          "Asked appropriate questions",
          "Made complete requests",
          "Said please/thank you"
        ],
        evaluationCriteriaEs: [
          "Usó frases educadas para ordenar",
          "Hizo preguntas apropiadas",
          "Hizo solicitudes completas",
          "Dijo please/thank you"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l2t4_n1", word: "vegetable", translation: "verdura", type: "noun", definition: "a plant or part of a plant used as food", definitionEs: "una planta o parte de planta usada como comida", example: "Vegetables are healthy.", exampleEs: "Las verduras son saludables.", related: ["carrot", "tomato"], difficulty: 1 },
          { id: "l2t4_n2", word: "fruit", translation: "fruta", type: "noun", definition: "the sweet product of a tree or plant", definitionEs: "el producto dulce de un árbol o planta", example: "I eat fruit every day.", exampleEs: "Como fruta todos los días.", related: ["apple", "banana"], difficulty: 1 },
          { id: "l2t4_n3", word: "meat", translation: "carne", type: "noun", definition: "flesh of animals used as food", definitionEs: "carne de animales usada como comida", example: "I don't eat much meat.", exampleEs: "No como mucha carne.", related: ["beef", "chicken"], difficulty: 1 },
          { id: "l2t4_n4", word: "fish", translation: "pescado", type: "noun", definition: "an animal that lives in water, used as food", definitionEs: "un animal que vive en el agua, usado como comida", example: "Fish is good for your health.", exampleEs: "El pescado es bueno para tu salud.", related: ["salmon"], difficulty: 1 },
          { id: "l2t4_n5", word: "pasta", translation: "pasta", type: "noun", definition: "Italian food made from flour and water", definitionEs: "comida italiana hecha de harina y agua", example: "I love Italian pasta.", exampleEs: "Amo la pasta italiana.", related: ["spaghetti"], difficulty: 1 },
          { id: "l2t4_n6", word: "soup", translation: "sopa", type: "noun", definition: "liquid food made by boiling vegetables or meat", definitionEs: "comida líquida hecha hirviendo verduras o carne", example: "Hot soup is perfect for winter.", exampleEs: "La sopa caliente es perfecta para invierno.", related: [], difficulty: 1 },
          { id: "l2t4_n7", word: "salad", translation: "ensalada", type: "noun", definition: "a mixture of raw vegetables", definitionEs: "una mezcla de verduras crudas", example: "I'll have a salad for lunch.", exampleEs: "Tomaré una ensalada para almuerzo.", related: [], difficulty: 1 },
          { id: "l2t4_n8", word: "dessert", translation: "postre", type: "noun", definition: "sweet food eaten after a meal", definitionEs: "comida dulce que se come después de una comida", example: "Would you like some dessert?", exampleEs: "¿Te gustaría un postre?", related: ["cake", "ice cream"], difficulty: 1 },
        ],
        verbs: [
          { id: "l2t4_v1", word: "cook", translation: "cocinar", type: "verb", definition: "to prepare food by heating", definitionEs: "preparar comida calentando", example: "I cook dinner every evening.", exampleEs: "Cocino la cena cada noche.", related: [], difficulty: 1 },
          { id: "l2t4_v2", word: "bake", translation: "hornear", type: "verb", definition: "to cook in an oven", definitionEs: "cocinar en un horno", example: "She bakes delicious cakes.", exampleEs: "Ella hornea pasteles deliciosos.", related: [], difficulty: 1 },
          { id: "l2t4_v3", word: "fry", translation: "freír", type: "verb", definition: "to cook in hot oil", definitionEs: "cocinar en aceite caliente", example: "I fry eggs for breakfast.", exampleEs: "Frío huevos para el desayuno.", related: [], difficulty: 1 },
          { id: "l2t4_v4", word: "boil", translation: "hervir", type: "verb", definition: "to heat liquid until it bubbles", definitionEs: "calentar líquido hasta que burbujee", example: "Boil water for the pasta.", exampleEs: "Hierve agua para la pasta.", related: [], difficulty: 1 },
          { id: "l2t4_v5", word: "taste", translation: "probar/saber", type: "verb", definition: "to perceive flavor", definitionEs: "percibir el sabor", example: "This soup tastes delicious!", exampleEs: "¡Esta sopa sabe deliciosa!", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l2t4_a1", word: "delicious", translation: "delicioso", type: "adjective", definition: "very good to eat", definitionEs: "muy bueno para comer", example: "This cake is delicious!", exampleEs: "¡Este pastel está delicioso!", related: ["tasty"], difficulty: 1 },
          { id: "l2t4_a2", word: "spicy", translation: "picante", type: "adjective", definition: "having a strong, hot flavor", definitionEs: "teniendo un sabor fuerte y caliente", example: "I love spicy food.", exampleEs: "Amo la comida picante.", related: [], difficulty: 1 },
          { id: "l2t4_a3", word: "sweet", translation: "dulce", type: "adjective", definition: "having the taste of sugar", definitionEs: "teniendo el sabor del azúcar", example: "The dessert is very sweet.", exampleEs: "El postre está muy dulce.", related: [], difficulty: 1 },
          { id: "l2t4_a4", word: "salty", translation: "salado", type: "adjective", definition: "having a lot of salt", definitionEs: "teniendo mucha sal", example: "This soup is too salty.", exampleEs: "Esta sopa está muy salada.", related: [], difficulty: 1 },
          { id: "l2t4_a5", word: "fresh", translation: "fresco", type: "adjective", definition: "recently made or obtained", definitionEs: "recientemente hecho u obtenido", example: "I buy fresh vegetables.", exampleEs: "Compro verduras frescas.", related: [], difficulty: 1 },
          { id: "l2t4_a6", word: "healthy", translation: "saludable", type: "adjective", definition: "good for your health", definitionEs: "bueno para tu salud", example: "Fruits are very healthy.", exampleEs: "Las frutas son muy saludables.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l2t4_e1", word: "I'd like...", translation: "Me gustaría...", type: "expression", definition: "polite way to order", definitionEs: "forma educada de ordenar", example: "I'd like a glass of water, please.", exampleEs: "Me gustaría un vaso de agua, por favor.", related: [], difficulty: 1 },
          { id: "l2t4_e2", word: "Can I have...?", translation: "¿Puedo tener...?", type: "expression", definition: "asking for something", definitionEs: "pidiendo algo", example: "Can I have the menu, please?", exampleEs: "¿Puedo tener el menú, por favor?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 5,
      title: "Weather and Seasons",
      titleEs: "Clima y Estaciones",
      introduction: {
        title: "🌤️ Clima y Estaciones en Inglés",
        explanation: "El clima es un tema universal de conversación. Aprenderás a describir el clima, las estaciones y hacer predicciones simples.",
        keyPoints: [
          "Estaciones: spring (primavera), summer (verano), autumn/fall (otoño), winter (invierno)",
          "Clima: sunny (soleado), cloudy (nublado), rainy (lluvioso), windy (ventoso), snowy (nevado)",
          "Para preguntar: 'What's the weather like?' - NO 'How is the weather?'",
          "Para describir: 'It's sunny', 'It's raining' (llueve), 'It's going to rain' (va a llover)"
        ],
        examples: [
          { english: "What's the weather like today?", spanish: "¿Cómo está el clima hoy?", explanation: "Preguntando sobre el clima" },
          { english: "It's going to rain tomorrow.", spanish: "Va a llover mañana.", explanation: "Predicción" },
          { english: "I love autumn because of the colors.", spanish: "Me encanta el otoño por los colores.", explanation: "Preferencia de estación" }
        ],
        tips: [
          "💡 'Autumn' es británico, 'Fall' es americano - ambos son correctos",
          "💡 Usamos 'It' impersonal para el clima: 'It's raining', no 'Is raining'",
          "💡 Temperature: 'degrees Celsius' (°C) en la mayoría del mundo, 'degrees Fahrenheit' (°F) en USA"
        ],
        whenToUse: [
          "Small talk: 'Lovely weather today, isn't it?'",
          "Planificando: 'What's the weather going to be like this weekend?'",
          "Describiendo: 'It's been really cold this week.'"
        ],
        whenNotToUse: [
          "No omitas 'it': 'Is raining' ❌ → 'It is raining' ✓",
          "No uses 'How is the weather?': Di 'What's the weather like?' ✓"
        ]
      },
      objectives: [
        "Describir el clima",
        "Hablar sobre las estaciones del año",
        "Hacer predicciones sobre el clima"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "Cuando cocinas, el clima afecta qué quieres comer. Sopa caliente en invierno, ensaladas en verano.",
      connectionToNext: "El clima afecta qué ropa compramos. Siguiente: Shopping.",
      grammarTheoryIds: ['a1-verb-to-be', 'a2-prepositions-time-place'],
      
      commonMistakes: [
        {
          id: "l2t5_cm1",
          wrong: "Is raining today.",
          correct: "It's raining today.",
          explanation: "Always use 'It' with weather: It's raining, It's sunny, It's cold.",
          explanationEs: "Siempre usa 'It' con el clima: It's raining, It's sunny, It's cold.",
          category: "grammar"
        },
        {
          id: "l2t5_cm2",
          wrong: "How is the weather?",
          correct: "What's the weather like?",
          explanation: "The correct question is 'What's the weather LIKE?' not 'How is...'",
          explanationEs: "La pregunta correcta es 'What's the weather LIKE?' no 'How is...'",
          category: "expression"
        },
        {
          id: "l2t5_cm3",
          wrong: "The weather is rain.",
          correct: "It's raining. / It's rainy. / There's rain.",
          explanation: "'Rain' is a verb or noun. Use 'rainy' (adjective) or 'It's raining' (verb).",
          explanationEs: "'Rain' es verbo o sustantivo. Usa 'rainy' (adjetivo) o 'It's raining' (verbo).",
          category: "grammar"
        },
        {
          id: "l2t5_cm4",
          wrong: "Today is very sun.",
          correct: "Today is very sunny. / It's very sunny today.",
          explanation: "'Sun' is noun, 'sunny' is adjective. Use -y adjectives for weather.",
          explanationEs: "'Sun' es sustantivo, 'sunny' es adjetivo. Usa adjetivos con -y para el clima.",
          category: "vocabulary"
        },
        {
          id: "l2t5_cm5",
          wrong: "I like the winter.",
          correct: "I like winter.",
          explanation: "Seasons don't need 'the': 'in summer', 'I love spring'.",
          explanationEs: "Las estaciones no necesitan 'the': 'in summer', 'I love spring'.",
          category: "grammar"
        }
      ],
      
      exercises: [
        {
          id: "l2t5_ex1",
          type: "gap-fill",
          title: "Weather Adjectives",
          titleEs: "Adjetivos del Clima",
          instruction: "Complete with the correct weather adjective: sunny, cloudy, rainy, windy, snowy.",
          instructionEs: "Completa con el adjetivo de clima correcto: sunny, cloudy, rainy, windy, snowy.",
          difficulty: 1,
          items: [
            { id: "l2t5_ex1_1", prompt: "The sun is shining. It's a _____ day.", correctAnswer: "sunny", hint: "From 'sun'", hintEs: "De 'sun'" },
            { id: "l2t5_ex1_2", prompt: "There's white stuff falling from the sky. It's _____.", correctAnswer: "snowy", hint: "From 'snow'", hintEs: "De 'snow'" },
            { id: "l2t5_ex1_3", prompt: "It's hard to see the sun. The sky is _____.", correctAnswer: "cloudy", hint: "From 'cloud'", hintEs: "De 'cloud'" },
            { id: "l2t5_ex1_4", prompt: "Hold onto your hat! It's very _____ today.", correctAnswer: "windy", hint: "From 'wind'", hintEs: "De 'wind'" }
          ]
        },
        {
          id: "l2t5_ex2",
          type: "gap-fill",
          title: "Season Activities",
          titleEs: "Actividades por Estación",
          instruction: "Match the activity with the most likely season.",
          instructionEs: "Relaciona la actividad con la estación más probable.",
          difficulty: 1,
          items: [
            { id: "l2t5_ex2_1", prompt: "People go skiing in _____.", correctAnswer: "winter", hint: "Cold season with snow", hintEs: "Estación fría con nieve" },
            { id: "l2t5_ex2_2", prompt: "Flowers bloom in _____.", correctAnswer: "spring", hint: "After winter, before summer", hintEs: "Después de invierno, antes de verano" },
            { id: "l2t5_ex2_3", prompt: "People go to the beach in _____.", correctAnswer: "summer", hint: "Hottest season", hintEs: "Estación más caliente" },
            { id: "l2t5_ex2_4", prompt: "Leaves turn red and fall in _____.", correctAnswer: "autumn", hint: "Before winter (also called 'fall')", hintEs: "Antes de invierno (también llamado 'fall')" }
          ]
        },
        {
          id: "l2t5_ex3",
          type: "transformation",
          title: "Weather Descriptions",
          titleEs: "Descripciones del Clima",
          instruction: "Change the noun to make a correct weather sentence.",
          instructionEs: "Cambia el sustantivo para hacer una oración correcta del clima.",
          difficulty: 1,
          items: [
            { id: "l2t5_ex3_1", prompt: "There is sun today.", correctAnswer: "It's sunny today.", hint: "Use the adjective form", hintEs: "Usa la forma adjetiva" },
            { id: "l2t5_ex3_2", prompt: "There is rain.", correctAnswer: "It's raining. / It's rainy.", hint: "Use verb (-ing) or adjective (-y)", hintEs: "Usa verbo (-ing) o adjetivo (-y)" },
            { id: "l2t5_ex3_3", prompt: "There is wind.", correctAnswer: "It's windy.", hint: "Add -y to make adjective", hintEs: "Añade -y para hacer adjetivo" },
            { id: "l2t5_ex3_4", prompt: "There is cloud.", correctAnswer: "It's cloudy.", hint: "Add -y to make adjective", hintEs: "Añade -y para hacer adjetivo" }
          ]
        },
        {
          id: "l2t5_ex4",
          type: "error-correction",
          title: "Fix the Weather Sentences",
          titleEs: "Corrige las Oraciones del Clima",
          instruction: "Find and correct the error.",
          instructionEs: "Encuentra y corrige el error.",
          difficulty: 1,
          items: [
            { id: "l2t5_ex4_1", prompt: "Is raining outside.", correctAnswer: "It's raining outside.", explanation: "Always use 'It' with weather.", explanationEs: "Siempre usa 'It' con el clima." },
            { id: "l2t5_ex4_2", prompt: "How is the weather today?", correctAnswer: "What's the weather like today?", explanation: "Use 'What...like?' not 'How...?'", explanationEs: "Usa 'What...like?' no 'How...?'" },
            { id: "l2t5_ex4_3", prompt: "I love the summer.", correctAnswer: "I love summer.", explanation: "Seasons don't need 'the'.", explanationEs: "Las estaciones no necesitan 'the'." },
            { id: "l2t5_ex4_4", prompt: "Today is very sun.", correctAnswer: "Today is very sunny.", explanation: "'Sunny' is the adjective, 'sun' is noun.", explanationEs: "'Sunny' es el adjetivo, 'sun' es sustantivo." }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l2t5_dialogue",
        title: "Small Talk About Weather",
        titleEs: "Charla Casual Sobre el Clima",
        context: "Two colleagues talk while waiting for a meeting.",
        contextEs: "Dos colegas conversan mientras esperan una reunión.",
        speakers: [
          { id: "s1", name: "Anna", role: "Starting conversation" },
          { id: "s2", name: "Ben", role: "Responding" }
        ],
        lines: [
          { speakerId: "s1", text: "Lovely weather today, isn't it?", textEs: "Qué buen clima hoy, ¿no?", note: "Classic British weather small talk", noteEs: "Típica charla británica del clima" },
          { speakerId: "s2", text: "Yes, it's beautiful! Finally some sunshine.", textEs: "¡Sí, está hermoso! Por fin algo de sol.", note: "Agreeing enthusiastically", noteEs: "Acordando con entusiasmo" },
          { speakerId: "s1", text: "I hope it stays like this for the weekend.", textEs: "Espero que siga así para el fin de semana.", note: "Expressing hope about future weather", noteEs: "Expresando esperanza sobre el clima futuro" },
          { speakerId: "s2", text: "Me too! What's the forecast?", textEs: "¡Yo también! ¿Cuál es el pronóstico?", note: "Asking about weather prediction", noteEs: "Preguntando sobre predicción del clima" },
          { speakerId: "s1", text: "They say it's going to rain on Saturday.", textEs: "Dicen que va a llover el sábado.", note: "Using 'going to' for predictions", noteEs: "Usando 'going to' para predicciones" },
          { speakerId: "s2", text: "Oh no! I was planning to go hiking.", textEs: "¡Oh no! Estaba planeando ir de excursión.", note: "Past continuous for plans", noteEs: "Pasado continuo para planes" },
          { speakerId: "s1", text: "Well, you never know. The weather can change quickly.", textEs: "Bueno, nunca se sabe. El clima puede cambiar rápido.", note: "Being optimistic", noteEs: "Siendo optimista" },
          { speakerId: "s2", text: "True! Last week they said it would rain, but it was sunny all day.", textEs: "¡Cierto! La semana pasada dijeron que llovería, pero estuvo soleado todo el día.", note: "Talking about past predictions", noteEs: "Hablando de predicciones pasadas" }
        ],
        keyPhrases: [
          { phrase: "What's the weather like?", translation: "¿Cómo está el clima?", usage: "Asking about current weather" },
          { phrase: "It's going to rain", translation: "Va a llover", usage: "Predicting future weather" },
          { phrase: "Lovely weather, isn't it?", translation: "Qué buen clima, ¿no?", usage: "Starting small talk" },
          { phrase: "What's the forecast?", translation: "¿Cuál es el pronóstico?", usage: "Asking about weather predictions" }
        ],
        variations: [
          { original: "Lovely weather", alternative: "Nice day", note: "More casual" },
          { original: "It's going to rain", alternative: "It looks like rain", note: "Based on observation" },
          { original: "What's the forecast?", alternative: "What do they say?", note: "More informal" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/w/",
            description: "The 'w' sound in 'weather', 'winter', 'warm'",
            descriptionEs: "El sonido 'w' en 'weather', 'winter', 'warm'",
            examples: [
              { word: "weather", transcription: "/ˈweðər/" },
              { word: "winter", transcription: "/ˈwɪntər/" },
              { word: "warm", transcription: "/wɔːrm/" }
            ],
            tips: ["Round your lips like saying 'oo'", "Not like Spanish 'b' or 'v'"]
          },
          {
            symbol: "/ð/",
            description: "The soft 'th' in 'weather', 'the'",
            descriptionEs: "La 'th' suave en 'weather', 'the'",
            examples: [
              { word: "weather", transcription: "/ˈweðər/" },
              { word: "the", transcription: "/ðə/" },
              { word: "this", transcription: "/ðɪs/" }
            ],
            tips: ["Tongue between teeth", "Voiced (you can feel vibration)"]
          }
        ],
        commonProblems: [
          { word: "weather", wrong: "WEA-ter", correct: "WE-ther", tip: "Soft 'th' sound, tongue between teeth" },
          { word: "windy", wrong: "WEEN-dy", correct: "WIN-dee", tip: "Short 'i' like 'wind'" },
          { word: "autumn", wrong: "AW-tum-n", correct: "AW-tuhm", tip: "The 'n' is silent" }
        ],
        minimalPairs: [
          { word1: "weather", word2: "whether", soundDifference: "Same pronunciation! Context tells them apart" },
          { word1: "cold", word2: "called", soundDifference: "/kəʊld/ vs /kɔːld/ - different vowels" },
          { word1: "rain", word2: "reign", soundDifference: "Same pronunciation! Different meanings" }
        ],
        intonationPatterns: [
          { pattern: "Tag question ↗", example: "Lovely weather, ISN'T it?↗", meaning: "Expecting agreement" },
          { pattern: "Falling ↘", example: "It's going to RAIN tomorrow.↘", meaning: "Certain prediction" },
          { pattern: "Rising ↗", example: "Is it going to RAIN?↗", meaning: "Yes/no question" }
        ]
      },
      
      culturalNote: {
        title: "Weather Talk: The British National Pastime",
        titleEs: "Hablar del Clima: El Pasatiempo Nacional Británico",
        content: "Talking about the weather is extremely important in British culture. It's the safest and most common way to start a conversation with strangers. Phrases like 'Lovely weather, isn't it?' or 'Terrible weather we're having!' are used daily. This isn't because the British are obsessed with weather, but because it's a neutral, non-invasive topic that everyone can relate to. In the US, weather talk is also common but less ritualistic. Americans might use it as small talk but will often move to other topics quickly. British people, however, can discuss weather in surprising detail: 'It's a bit nippy' (cold), 'It's muggy' (humid), 'It's drizzling' (light rain). The expression 'British weather' itself implies unpredictable, often rainy conditions. Fun fact: The average Brit talks about weather for about 2 months of their life!",
        contentEs: "Hablar del clima es extremadamente importante en la cultura británica. Es la forma más segura y común de empezar una conversación con desconocidos. Frases como 'Lovely weather, isn't it?' o 'Terrible weather we're having!' se usan a diario. Esto no es porque los británicos estén obsesionados con el clima, sino porque es un tema neutral y no invasivo con el que todos pueden relacionarse. En EEUU, hablar del clima también es común pero menos ritualístico. Los americanos lo usan como charla pero suelen pasar a otros temas rápidamente. Los británicos pueden discutir el clima en detalle sorprendente: 'It's nippy' (frío), 'It's muggy' (húmedo), 'It's drizzling' (llovizna). ¡Dato curioso: el británico promedio habla del clima unos 2 meses de su vida!",
        regions: ["UK", "US"],
        formalityLevel: "informal"
      },
      
      consolidationQuiz: {
        id: "l2t5_quiz",
        title: "Weather and Seasons Mastery Check",
        titleEs: "Prueba de Dominio de Clima y Estaciones",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l2t5_q1",
            type: "multiple-choice",
            question: "How do you ask about the weather?",
            questionEs: "¿Cómo preguntas sobre el clima?",
            options: ["How is the weather?", "What's the weather like?", "What is the weather?", "Which weather is it?"],
            correctAnswer: "What's the weather like?",
            explanation: "'What's the weather LIKE?' is the correct form in English.",
            explanationEs: "'What's the weather LIKE?' es la forma correcta en inglés.",
            points: 10
          },
          {
            id: "l2t5_q2",
            type: "multiple-choice",
            question: "Complete: '_____ raining outside.'",
            questionEs: "Completa: '_____ raining outside.'",
            options: ["Is", "It's", "The weather", "Today"],
            correctAnswer: "It's",
            explanation: "Always use 'It' with weather: It's raining, It's sunny.",
            explanationEs: "Siempre usa 'It' con el clima: It's raining, It's sunny.",
            points: 10
          },
          {
            id: "l2t5_q3",
            type: "multiple-choice",
            question: "Which is correct?",
            questionEs: "¿Cuál es correcto?",
            options: ["I love the summer.", "I love summer.", "I love a summer.", "I love in summer."],
            correctAnswer: "I love summer.",
            explanation: "Seasons don't need articles: spring, summer, autumn, winter.",
            explanationEs: "Las estaciones no necesitan artículos: spring, summer, autumn, winter.",
            points: 10
          },
          {
            id: "l2t5_q4",
            type: "fill-blank",
            question: "There are many clouds. The sky is _____.",
            questionEs: "Hay muchas nubes. El cielo está _____.",
            correctAnswer: ["cloudy"],
            explanation: "Cloud (noun) → Cloudy (adjective)",
            explanationEs: "Cloud (sustantivo) → Cloudy (adjetivo)",
            points: 10
          },
          {
            id: "l2t5_q5",
            type: "multiple-choice",
            question: "In which season do leaves fall?",
            questionEs: "¿En qué estación caen las hojas?",
            options: ["Spring", "Summer", "Autumn/Fall", "Winter"],
            correctAnswer: "Autumn/Fall",
            explanation: "Autumn (UK) or Fall (US) is when leaves fall from trees.",
            explanationEs: "Autumn (UK) o Fall (US) es cuando las hojas caen de los árboles.",
            points: 10
          },
          {
            id: "l2t5_q6",
            type: "true-false",
            question: "'How is the weather?' is correct English.",
            questionEs: "'How is the weather?' es inglés correcto.",
            correctAnswer: "false",
            explanation: "Use 'What's the weather LIKE?' not 'How is the weather?'",
            explanationEs: "Usa 'What's the weather LIKE?' no 'How is the weather?'",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l2t5_production",
        title: "Describe Today's Weather",
        titleEs: "Describe el Clima de Hoy",
        type: "both",
        scenario: "A friend from another country asks about the weather where you live.",
        scenarioEs: "Un amigo de otro país pregunta sobre el clima donde vives.",
        prompts: [
          {
            id: "l2t5_prod1",
            instruction: "Describe today's weather",
            instructionEs: "Describe el clima de hoy",
            hints: ["It's sunny/cloudy/rainy...", "Today is very warm/cold..."],
            hintsEs: ["Está soleado/nublado/lluvioso...", "Hoy está muy cálido/frío..."],
            requiredElements: ["weather adjective or verb"]
          },
          {
            id: "l2t5_prod2",
            instruction: "Say what season it is and what it's usually like",
            instructionEs: "Di qué estación es y cómo es normalmente",
            hints: ["It's summer here...", "In winter, it usually..."],
            hintsEs: ["Es verano aquí...", "En invierno, normalmente..."],
            requiredElements: ["season + typical weather"]
          },
          {
            id: "l2t5_prod3",
            instruction: "Make a prediction about tomorrow's weather",
            instructionEs: "Haz una predicción sobre el clima de mañana",
            hints: ["It's going to...", "Tomorrow will be..."],
            hintsEs: ["Va a...", "Mañana estará..."],
            requiredElements: ["future prediction"]
          },
          {
            id: "l2t5_prod4",
            instruction: "Say which season you prefer and why",
            instructionEs: "Di qué estación prefieres y por qué",
            hints: ["I prefer summer because...", "My favorite season is..."],
            hintsEs: ["Prefiero el verano porque...", "Mi estación favorita es..."],
            requiredElements: ["preference + reason"]
          }
        ],
        modelResponse: "It's sunny and warm today - perfect weather! We're in the middle of spring here, so it's usually mild with some rain. Tomorrow it's going to be cloudy, but I hope it won't rain. My favorite season is autumn because I love the colorful leaves and cooler temperatures.",
        modelResponseEs: "Hoy está soleado y cálido - ¡clima perfecto! Estamos en medio de la primavera aquí, así que normalmente es templado con algo de lluvia. Mañana va a estar nublado, pero espero que no llueva. Mi estación favorita es el otoño porque me encantan las hojas de colores y las temperaturas más frescas.",
        evaluationCriteria: [
          "Used weather vocabulary correctly",
          "Described season accurately",
          "Made a future prediction",
          "Expressed preference with reason"
        ],
        evaluationCriteriaEs: [
          "Usó vocabulario del clima correctamente",
          "Describió la estación correctamente",
          "Hizo una predicción futura",
          "Expresó preferencia con razón"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l2t5_n1", word: "weather", translation: "clima", type: "noun", definition: "the condition of the atmosphere", definitionEs: "la condición de la atmósfera", example: "The weather is nice today.", exampleEs: "El clima está agradable hoy.", related: [], difficulty: 1 },
          { id: "l2t5_n2", word: "spring", translation: "primavera", type: "noun", definition: "the season between winter and summer", definitionEs: "la estación entre invierno y verano", example: "Flowers bloom in spring.", exampleEs: "Las flores florecen en primavera.", related: [], difficulty: 1 },
          { id: "l2t5_n3", word: "summer", translation: "verano", type: "noun", definition: "the warmest season", definitionEs: "la estación más cálida", example: "I love swimming in summer.", exampleEs: "Me encanta nadar en verano.", related: [], difficulty: 1 },
          { id: "l2t5_n4", word: "autumn", translation: "otoño", type: "noun", definition: "the season between summer and winter", definitionEs: "la estación entre verano e invierno", example: "Leaves fall in autumn.", exampleEs: "Las hojas caen en otoño.", related: ["fall"], difficulty: 1 },
          { id: "l2t5_n5", word: "winter", translation: "invierno", type: "noun", definition: "the coldest season", definitionEs: "la estación más fría", example: "It snows in winter.", exampleEs: "Nieva en invierno.", related: [], difficulty: 1 },
          { id: "l2t5_n6", word: "rain", translation: "lluvia", type: "noun", definition: "water falling from clouds", definitionEs: "agua cayendo de las nubes", example: "Don't forget your umbrella, there's rain.", exampleEs: "No olvides tu paraguas, hay lluvia.", related: [], difficulty: 1 },
          { id: "l2t5_n7", word: "snow", translation: "nieve", type: "noun", definition: "frozen water falling from clouds", definitionEs: "agua congelada cayendo de las nubes", example: "Children love playing in the snow.", exampleEs: "A los niños les encanta jugar en la nieve.", related: [], difficulty: 1 },
          { id: "l2t5_n8", word: "sun", translation: "sol", type: "noun", definition: "the star that gives light and heat", definitionEs: "la estrella que da luz y calor", example: "The sun is shining brightly.", exampleEs: "El sol brilla intensamente.", related: [], difficulty: 1 },
          { id: "l2t5_n9", word: "cloud", translation: "nube", type: "noun", definition: "white or gray mass in the sky", definitionEs: "masa blanca o gris en el cielo", example: "There are many clouds today.", exampleEs: "Hay muchas nubes hoy.", related: [], difficulty: 1 },
          { id: "l2t5_n10", word: "wind", translation: "viento", type: "noun", definition: "air moving outside", definitionEs: "aire moviéndose afuera", example: "The wind is very strong today.", exampleEs: "El viento está muy fuerte hoy.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l2t5_v1", word: "rain", translation: "llover", type: "verb", definition: "when water falls from clouds", definitionEs: "cuando cae agua de las nubes", example: "It's raining outside.", exampleEs: "Está lloviendo afuera.", related: [], difficulty: 1 },
          { id: "l2t5_v2", word: "snow", translation: "nevar", type: "verb", definition: "when snow falls from clouds", definitionEs: "cuando cae nieve de las nubes", example: "It's snowing in the mountains.", exampleEs: "Está nevando en las montañas.", related: [], difficulty: 1 },
          { id: "l2t5_v3", word: "shine", translation: "brillar", type: "verb", definition: "to give light", definitionEs: "dar luz", example: "The sun is shining today.", exampleEs: "El sol brilla hoy.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l2t5_a1", word: "sunny", translation: "soleado", type: "adjective", definition: "with a lot of sunlight", definitionEs: "con mucha luz solar", example: "It's a beautiful sunny day.", exampleEs: "Es un hermoso día soleado.", related: [], difficulty: 1 },
          { id: "l2t5_a2", word: "cloudy", translation: "nublado", type: "adjective", definition: "with many clouds", definitionEs: "con muchas nubes", example: "The sky is cloudy today.", exampleEs: "El cielo está nublado hoy.", related: [], difficulty: 1 },
          { id: "l2t5_a3", word: "rainy", translation: "lluvioso", type: "adjective", definition: "with a lot of rain", definitionEs: "con mucha lluvia", example: "April is very rainy.", exampleEs: "Abril es muy lluvioso.", related: [], difficulty: 1 },
          { id: "l2t5_a4", word: "windy", translation: "ventoso", type: "adjective", definition: "with a lot of wind", definitionEs: "con mucho viento", example: "It's too windy for a picnic.", exampleEs: "Está muy ventoso para un picnic.", related: [], difficulty: 1 },
          { id: "l2t5_a5", word: "warm", translation: "cálido", type: "adjective", definition: "pleasantly hot", definitionEs: "agradablemente caliente", example: "The weather is warm today.", exampleEs: "El clima está cálido hoy.", related: [], difficulty: 1 },
          { id: "l2t5_a6", word: "cold", translation: "frío", type: "adjective", definition: "having a low temperature", definitionEs: "teniendo temperatura baja", example: "It's very cold outside.", exampleEs: "Está muy frío afuera.", related: [], difficulty: 1 },
          { id: "l2t5_a7", word: "hot", translation: "caluroso", type: "adjective", definition: "having a high temperature", definitionEs: "teniendo temperatura alta", example: "Summer is very hot here.", exampleEs: "El verano es muy caluroso aquí.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l2t5_e1", word: "What's the weather like?", translation: "¿Cómo está el clima?", type: "expression", definition: "asking about weather", definitionEs: "preguntar sobre el clima", example: "What's the weather like today?", exampleEs: "¿Cómo está el clima hoy?", related: [], difficulty: 1 },
          { id: "l2t5_e2", word: "It's going to...", translation: "Va a...", type: "expression", definition: "predicting weather", definitionEs: "predecir el clima", example: "It's going to rain tomorrow.", exampleEs: "Va a llover mañana.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 6,
      title: "Shopping",
      titleEs: "Compras",
      introduction: {
        title: "🛍️ Compras en Inglés",
        explanation: "Ir de compras es una actividad cotidiana. Aprenderás a preguntar precios, tallas, pagar y devolver productos en inglés.",
        keyPoints: [
          "Preguntar precio: 'How much is this?' / 'How much does this cost?'",
          "Tallas: small (S), medium (M), large (L), extra-large (XL)",
          "Formas de pago: 'cash' (efectivo), 'credit card' (tarjeta de crédito), 'debit card' (tarjeta débito)",
          "Para probarse ropa: 'Can I try this on?' / 'Where is the fitting room?'"
        ],
        examples: [
          { english: "How much is this shirt?", spanish: "¿Cuánto cuesta esta camisa?", explanation: "Preguntando precio" },
          { english: "Do you have this in a larger size?", spanish: "¿Tienen esto en una talla más grande?", explanation: "Preguntando por talla" },
          { english: "I'd like to return this.", spanish: "Me gustaría devolver esto.", explanation: "Haciendo una devolución" }
        ],
        tips: [
          "💡 'Shop' (UK) vs 'Store' (US) - ambos significan tienda",
          "💡 'I'm just looking' es la respuesta educada cuando un vendedor ofrece ayuda",
          "💡 'Receipt' (recibo) se pronuncia 'ri-SEET', la 'p' es silenciosa"
        ],
        whenToUse: [
          "Pidiendo precio: 'How much is this / does this cost?'",
          "Pidiendo talla: 'Do you have this in a smaller/larger size?'",
          "Pagando: 'Can I pay by card? / I'll pay cash.'"
        ],
        whenNotToUse: [
          "No uses 'How much costs this?': Di 'How much does this cost?' ✓",
          "No digas 'I take this': Di 'I'll take this' ✓"
        ]
      },
      objectives: [
        "Vocabulario de compras",
        "Preguntar precios",
        "Describir productos"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "El clima afecta qué ropa necesitas comprar. Ahora aprenderás a ir de compras.",
      connectionToNext: "Al comprar, a veces te sientes mal. Siguiente: Health and Body.",
      grammarTheoryIds: ['a2-comparatives-superlatives', 'a2-can-could-modals'],
      
      commonMistakes: [
        {
          id: "l2t6_cm1",
          wrong: "How much costs this?",
          correct: "How much does this cost? / How much is this?",
          explanation: "Two ways to ask: 'How much IS this?' or 'How much DOES this cost?'",
          explanationEs: "Dos formas de preguntar: 'How much IS this?' o 'How much DOES this cost?'",
          category: "grammar"
        },
        {
          id: "l2t6_cm2",
          wrong: "I take this.",
          correct: "I'll take this.",
          explanation: "Use 'I'll take' (future) when deciding to buy something.",
          explanationEs: "Usa 'I'll take' (futuro) cuando decides comprar algo.",
          category: "grammar"
        },
        {
          id: "l2t6_cm3",
          wrong: "It's too much expensive.",
          correct: "It's too expensive.",
          explanation: "'Too' already modifies the adjective. Don't add 'much'.",
          explanationEs: "'Too' ya modifica el adjetivo. No añadas 'much'.",
          category: "grammar"
        },
        {
          id: "l2t6_cm4",
          wrong: "Can I pay with card?",
          correct: "Can I pay BY card?",
          explanation: "Use 'pay BY' for payment methods: by card, by cash, by check.",
          explanationEs: "Usa 'pay BY' para métodos de pago: by card, by cash, by check.",
          category: "preposition"
        },
        {
          id: "l2t6_cm5",
          wrong: "This is a good prize.",
          correct: "This is a good price.",
          explanation: "'Price' = cost. 'Prize' = reward for winning.",
          explanationEs: "'Price' = costo. 'Prize' = premio por ganar.",
          category: "vocabulary"
        }
      ],
      
      exercises: [
        {
          id: "l2t6_ex1",
          type: "gap-fill",
          title: "Shopping Questions",
          titleEs: "Preguntas de Compras",
          instruction: "Complete the shopping questions correctly.",
          instructionEs: "Completa las preguntas de compras correctamente.",
          difficulty: 1,
          items: [
            { id: "l2t6_ex1_1", prompt: "How much _____ this shirt?", correctAnswer: "is", hint: "How much + is", hintEs: "How much + is" },
            { id: "l2t6_ex1_2", prompt: "How much _____ this cost?", correctAnswer: "does", hint: "How much + does + cost", hintEs: "How much + does + cost" },
            { id: "l2t6_ex1_3", prompt: "Can I _____ this on?", correctAnswer: "try", hint: "Try on = probarse", hintEs: "Try on = probarse" },
            { id: "l2t6_ex1_4", prompt: "Do you have this in a _____ size?", correctAnswer: "different/larger/smaller", hint: "Asking for another size", hintEs: "Pidiendo otra talla" }
          ]
        },
        {
          id: "l2t6_ex2",
          type: "gap-fill",
          title: "Payment Methods",
          titleEs: "Métodos de Pago",
          instruction: "Complete with the correct preposition or word.",
          instructionEs: "Completa con la preposición o palabra correcta.",
          difficulty: 1,
          items: [
            { id: "l2t6_ex2_1", prompt: "Can I pay _____ credit card?", correctAnswer: "by", hint: "pay BY card", hintEs: "pay BY card" },
            { id: "l2t6_ex2_2", prompt: "I'd like to pay _____ cash.", correctAnswer: "in", hint: "pay IN cash is also correct", hintEs: "pay IN cash también es correcto" },
            { id: "l2t6_ex2_3", prompt: "Here's your _____. Thank you for shopping with us.", correctAnswer: "receipt", hint: "Proof of purchase", hintEs: "Comprobante de compra" },
            { id: "l2t6_ex2_4", prompt: "Do you have any _____? (special offers)", correctAnswer: "sales/discounts", hint: "Lower prices", hintEs: "Precios más bajos" }
          ]
        },
        {
          id: "l2t6_ex3",
          type: "matching",
          title: "Shop Assistant Phrases",
          titleEs: "Frases del Vendedor",
          instruction: "Match the phrase with its purpose.",
          instructionEs: "Relaciona la frase con su propósito.",
          difficulty: 1,
          items: [
            { id: "l2t6_ex3_1", prompt: "Can I help you?", correctAnswer: "offering assistance", hint: "First thing assistant says", hintEs: "Primero que dice el vendedor" },
            { id: "l2t6_ex3_2", prompt: "The fitting rooms are over there.", correctAnswer: "showing location", hint: "Where to try clothes", hintEs: "Dónde probarse ropa" },
            { id: "l2t6_ex3_3", prompt: "Would you like a bag?", correctAnswer: "offering service", hint: "After purchase", hintEs: "Después de la compra" },
            { id: "l2t6_ex3_4", prompt: "That's €25.99, please.", correctAnswer: "stating the price", hint: "At checkout", hintEs: "En la caja" }
          ]
        },
        {
          id: "l2t6_ex4",
          type: "error-correction",
          title: "Fix the Shopping Sentences",
          titleEs: "Corrige las Oraciones de Compras",
          instruction: "Find and correct the error.",
          instructionEs: "Encuentra y corrige el error.",
          difficulty: 1,
          items: [
            { id: "l2t6_ex4_1", prompt: "How much costs this?", correctAnswer: "How much does this cost? / How much is this?", explanation: "Correct question structure.", explanationEs: "Estructura de pregunta correcta." },
            { id: "l2t6_ex4_2", prompt: "I take this shirt.", correctAnswer: "I'll take this shirt.", explanation: "Use 'I'll take' when buying.", explanationEs: "Usa 'I'll take' al comprar." },
            { id: "l2t6_ex4_3", prompt: "Can I pay with card?", correctAnswer: "Can I pay by card?", explanation: "Use 'by' with payment methods.", explanationEs: "Usa 'by' con métodos de pago." },
            { id: "l2t6_ex4_4", prompt: "This is a good prize.", correctAnswer: "This is a good price.", explanation: "Price = cost. Prize = reward.", explanationEs: "Price = costo. Prize = premio." }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l2t6_dialogue",
        title: "At a Clothing Store",
        titleEs: "En una Tienda de Ropa",
        context: "A customer is looking for a new jacket.",
        contextEs: "Un cliente busca una chaqueta nueva.",
        speakers: [
          { id: "s1", name: "Assistant", role: "Store employee" },
          { id: "s2", name: "Customer", role: "Shopping" }
        ],
        lines: [
          { speakerId: "s1", text: "Good afternoon! Can I help you?", textEs: "¡Buenas tardes! ¿Puedo ayudarle?", note: "Standard greeting", noteEs: "Saludo estándar" },
          { speakerId: "s2", text: "Yes, I'm looking for a jacket.", textEs: "Sí, busco una chaqueta.", note: "'Looking for' = searching", noteEs: "'Looking for' = buscando" },
          { speakerId: "s1", text: "What size are you?", textEs: "¿Qué talla es usted?", note: "Asking for size", noteEs: "Preguntando talla" },
          { speakerId: "s2", text: "I'm a medium, I think.", textEs: "Soy mediana, creo.", note: "S, M, L, XL", noteEs: "S, M, L, XL" },
          { speakerId: "s1", text: "Here's a nice one. Would you like to try it on?", textEs: "Aquí hay una bonita. ¿Le gustaría probársela?", note: "Suggesting to try", noteEs: "Sugiriendo probar" },
          { speakerId: "s2", text: "Yes, please. Where's the fitting room?", textEs: "Sí, por favor. ¿Dónde está el probador?", note: "Asking for fitting room", noteEs: "Preguntando por probador" },
          { speakerId: "s1", text: "It's over there, on the right.", textEs: "Está por ahí, a la derecha.", note: "Giving directions", noteEs: "Dando direcciones" },
          { speakerId: "s2", text: "It fits perfectly! How much is it?", textEs: "¡Me queda perfecta! ¿Cuánto cuesta?", note: "Fit = size is right", noteEs: "Fit = la talla es correcta" },
          { speakerId: "s1", text: "It's £79.99. It's on sale - normally it's £99.", textEs: "Son £79.99. Está en oferta - normalmente son £99.", note: "Mentioning the discount", noteEs: "Mencionando el descuento" },
          { speakerId: "s2", text: "Great! I'll take it. Can I pay by card?", textEs: "¡Genial! Me la llevo. ¿Puedo pagar con tarjeta?", note: "'I'll take it' = deciding to buy", noteEs: "'I'll take it' = decidiendo comprar" },
          { speakerId: "s1", text: "Of course. Here's your receipt. Thank you!", textEs: "Por supuesto. Aquí está su recibo. ¡Gracias!", note: "Completing the sale", noteEs: "Completando la venta" }
        ],
        keyPhrases: [
          { phrase: "I'm looking for...", translation: "Estoy buscando...", usage: "Saying what you want" },
          { phrase: "Can I try this on?", translation: "¿Puedo probarme esto?", usage: "Asking to try clothes" },
          { phrase: "How much is it?", translation: "¿Cuánto cuesta?", usage: "Asking the price" },
          { phrase: "I'll take it.", translation: "Me lo/la llevo.", usage: "Deciding to buy" }
        ],
        variations: [
          { original: "I'm looking for", alternative: "I'd like to see", note: "Slightly more formal" },
          { original: "I'll take it", alternative: "I'll have it", note: "Same meaning" },
          { original: "Can I pay by card?", alternative: "Do you take cards?", note: "More casual" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/aɪ/",
            description: "The 'i' sound in 'buy', 'price', 'try'",
            descriptionEs: "El sonido 'i' en 'buy', 'price', 'try'",
            examples: [
              { word: "buy", transcription: "/baɪ/" },
              { word: "price", transcription: "/praɪs/" },
              { word: "try", transcription: "/traɪ/" }
            ],
            tips: ["Like saying 'ah' then 'ee' quickly", "Similar to Spanish 'ai'"]
          },
          {
            symbol: "Silent letters",
            description: "Silent 'p' in 'receipt'",
            descriptionEs: "La 'p' silenciosa en 'receipt'",
            examples: [
              { word: "receipt", transcription: "/rɪˈsiːt/" },
              { word: "clothes", transcription: "/kləʊðz/" },
              { word: "half", transcription: "/hɑːf/" }
            ],
            tips: ["Receipt = ri-SEET, not re-SEIPT", "Clothes is one syllable"]
          }
        ],
        commonProblems: [
          { word: "receipt", wrong: "re-SEIPT", correct: "ri-SEET", tip: "The 'p' is silent" },
          { word: "clothes", wrong: "clo-THES (2 syllables)", correct: "KLOHTHZ (1 syllable)", tip: "Just one syllable, 'th' sound" },
          { word: "expensive", wrong: "ex-pen-SIV", correct: "ik-SPEN-siv", tip: "Stress on second syllable" }
        ],
        minimalPairs: [
          { word1: "price", word2: "prize", soundDifference: "/s/ vs /z/ - different meanings!" },
          { word1: "buy", word2: "by", soundDifference: "Same pronunciation, different spellings" },
          { word1: "sale", word2: "sell", soundDifference: "/eɪ/ vs /e/ - noun vs verb" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "Can I PAY by card?↗", meaning: "Yes/no question" },
          { pattern: "Falling ↘", example: "I'll TAKE this one.↘", meaning: "Decision/statement" },
          { pattern: "High pitch", example: "THAT'S expensive!", meaning: "Expressing surprise" }
        ]
      },
      
      culturalNote: {
        title: "Shopping Culture in English-Speaking Countries",
        titleEs: "Cultura de Compras en Países Angloparlantes",
        content: "In the UK and US, shop assistants are generally helpful but not pushy. 'Can I help you?' is standard, and 'I'm just looking, thanks' is a perfectly acceptable response. Unlike some countries, there's usually no bargaining in regular stores - prices are fixed. However, at markets or when buying cars, negotiation is expected. 'Is that your best price?' is a common phrase. Sales are big events, especially 'Black Friday' (day after Thanksgiving in the US) and 'Boxing Day' (December 26 in the UK and Commonwealth). Returns are usually easy in the US with receipt - many stores have generous return policies (sometimes up to 90 days). In the UK, you have legal rights to return faulty goods. Tipping is not expected in shops. Saying 'please' and 'thank you' is very important - shop assistants will notice if you don't!",
        contentEs: "En UK y EEUU, los vendedores son generalmente serviciales pero no insistentes. 'Can I help you?' es estándar, y 'I'm just looking, thanks' es una respuesta perfectamente aceptable. A diferencia de algunos países, usualmente no hay regateo en tiendas normales - los precios son fijos. Sin embargo, en mercados o al comprar autos, la negociación es esperada. Las rebajas son eventos grandes, especialmente 'Black Friday' (día después de Thanksgiving en EEUU) y 'Boxing Day' (26 de diciembre en UK). Las devoluciones son usualmente fáciles en EEUU con recibo - muchas tiendas tienen políticas generosas (a veces hasta 90 días). No se espera propina en tiendas. ¡Decir 'please' y 'thank you' es muy importante - los vendedores lo notarán si no lo haces!",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l2t6_quiz",
        title: "Shopping Mastery Check",
        titleEs: "Prueba de Dominio de Compras",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l2t6_q1",
            type: "multiple-choice",
            question: "How do you ask the price?",
            questionEs: "¿Cómo preguntas el precio?",
            options: ["How much costs this?", "How much is this?", "What costs this?", "Which is the price?"],
            correctAnswer: "How much is this?",
            explanation: "'How much IS this?' or 'How much DOES this cost?'",
            explanationEs: "'How much IS this?' o 'How much DOES this cost?'",
            points: 10
          },
          {
            id: "l2t6_q2",
            type: "multiple-choice",
            question: "You want to buy a shirt. You say:",
            questionEs: "Quieres comprar una camisa. Dices:",
            options: ["I take this shirt.", "I'll take this shirt.", "I'm taking this shirt.", "I have this shirt."],
            correctAnswer: "I'll take this shirt.",
            explanation: "'I'll take' is used when deciding to buy something.",
            explanationEs: "'I'll take' se usa cuando decides comprar algo.",
            points: 10
          },
          {
            id: "l2t6_q3",
            type: "multiple-choice",
            question: "Complete: 'Can I pay _____ credit card?'",
            questionEs: "Completa: 'Can I pay _____ credit card?'",
            options: ["with", "by", "in", "for"],
            correctAnswer: "by",
            explanation: "Use 'pay BY' for payment methods: by card, by cash.",
            explanationEs: "Usa 'pay BY' para métodos de pago: by card, by cash.",
            points: 10
          },
          {
            id: "l2t6_q4",
            type: "fill-blank",
            question: "I want to check if the shirt fits. 'Can I _____ this _____?'",
            questionEs: "Quiero ver si la camisa me queda. 'Can I _____ this _____?'",
            correctAnswer: ["try", "on"],
            explanation: "'Try on' = put on clothes to see if they fit.",
            explanationEs: "'Try on' = ponerse ropa para ver si queda.",
            points: 10
          },
          {
            id: "l2t6_q5",
            type: "multiple-choice",
            question: "What do you say when you don't need help in a store?",
            questionEs: "¿Qué dices cuando no necesitas ayuda en una tienda?",
            options: ["No, go away.", "I'm just looking, thanks.", "I don't want help.", "Leave me."],
            correctAnswer: "I'm just looking, thanks.",
            explanation: "This is the polite way to decline assistance.",
            explanationEs: "Esta es la forma educada de rechazar ayuda.",
            points: 10
          },
          {
            id: "l2t6_q6",
            type: "true-false",
            question: "'Price' and 'prize' have the same meaning.",
            questionEs: "'Price' y 'prize' tienen el mismo significado.",
            correctAnswer: "false",
            explanation: "Price = cost. Prize = reward for winning.",
            explanationEs: "Price = costo. Prize = premio por ganar.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l2t6_production",
        title: "Buy Something in a Store",
        titleEs: "Compra Algo en una Tienda",
        type: "spoken",
        scenario: "You're in a clothing store and want to buy a new pair of jeans.",
        scenarioEs: "Estás en una tienda de ropa y quieres comprar unos jeans nuevos.",
        prompts: [
          {
            id: "l2t6_prod1",
            instruction: "Tell the assistant what you're looking for",
            instructionEs: "Dile al vendedor qué estás buscando",
            hints: ["I'm looking for...", "I'd like to see..."],
            hintsEs: ["Estoy buscando...", "Me gustaría ver..."],
            requiredElements: ["item you want"]
          },
          {
            id: "l2t6_prod2",
            instruction: "Ask about a different size or color",
            instructionEs: "Pregunta por otra talla o color",
            hints: ["Do you have this in...?", "Is there a...?"],
            hintsEs: ["¿Tienen esto en...?", "¿Hay un/a...?"],
            requiredElements: ["size or color question"]
          },
          {
            id: "l2t6_prod3",
            instruction: "Ask to try it on and ask the price",
            instructionEs: "Pide probártelo y pregunta el precio",
            hints: ["Can I try this on?", "How much is it?"],
            hintsEs: ["¿Puedo probarme esto?", "¿Cuánto cuesta?"],
            requiredElements: ["try on + price question"]
          },
          {
            id: "l2t6_prod4",
            instruction: "Decide to buy and ask about payment",
            instructionEs: "Decide comprar y pregunta sobre el pago",
            hints: ["I'll take it.", "Can I pay by...?"],
            hintsEs: ["Me lo llevo.", "¿Puedo pagar con...?"],
            requiredElements: ["decision + payment"]
          }
        ],
        modelResponse: "I'm looking for a pair of jeans. Do you have these in a size 32? Can I try them on? Where's the fitting room? ... These fit great! How much are they? I'll take them. Can I pay by card?",
        modelResponseEs: "Estoy buscando unos jeans. ¿Tienen estos en talla 32? ¿Puedo probármelos? ¿Dónde está el probador? ... ¡Me quedan genial! ¿Cuánto cuestan? Me los llevo. ¿Puedo pagar con tarjeta?",
        evaluationCriteria: [
          "Stated what you're looking for",
          "Asked about size/color",
          "Asked to try on",
          "Made a purchase decision correctly"
        ],
        evaluationCriteriaEs: [
          "Dijiste qué estás buscando",
          "Preguntaste por talla/color",
          "Pediste probártelo",
          "Tomaste decisión de compra correctamente"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l2t6_n1", word: "shop", translation: "tienda", type: "noun", definition: "a place where you buy things", definitionEs: "un lugar donde compras cosas", example: "I'm going to the shop.", exampleEs: "Voy a la tienda.", related: ["store"], difficulty: 1 },
          { id: "l2t6_n2", word: "price", translation: "precio", type: "noun", definition: "how much something costs", definitionEs: "cuánto cuesta algo", example: "What's the price of this shirt?", exampleEs: "¿Cuál es el precio de esta camisa?", related: ["cost"], difficulty: 1 },
          { id: "l2t6_n3", word: "size", translation: "talla/tamaño", type: "noun", definition: "how big or small something is", definitionEs: "qué tan grande o pequeño es algo", example: "What size do you need?", exampleEs: "¿Qué talla necesitas?", related: [], difficulty: 1 },
          { id: "l2t6_n4", word: "sale", translation: "oferta/venta", type: "noun", definition: "when items are sold at lower prices", definitionEs: "cuando artículos se venden a precios más bajos", example: "There's a big sale this weekend.", exampleEs: "Hay una gran oferta este fin de semana.", related: ["discount"], difficulty: 1 },
          { id: "l2t6_n5", word: "receipt", translation: "recibo", type: "noun", definition: "paper showing what you bought", definitionEs: "papel que muestra lo que compraste", example: "Keep the receipt for returns.", exampleEs: "Guarda el recibo para devoluciones.", related: [], difficulty: 1 },
          { id: "l2t6_n6", word: "cash", translation: "efectivo", type: "noun", definition: "money in bills and coins", definitionEs: "dinero en billetes y monedas", example: "Do you accept cash?", exampleEs: "¿Aceptan efectivo?", related: ["money"], difficulty: 1 },
          { id: "l2t6_n7", word: "credit card", translation: "tarjeta de crédito", type: "noun", definition: "plastic card for payments", definitionEs: "tarjeta de plástico para pagos", example: "Can I pay by credit card?", exampleEs: "¿Puedo pagar con tarjeta de crédito?", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l2t6_v1", word: "buy", translation: "comprar", type: "verb", definition: "to get something by paying", definitionEs: "obtener algo pagando", example: "I want to buy a new phone.", exampleEs: "Quiero comprar un teléfono nuevo.", related: ["purchase"], difficulty: 1 },
          { id: "l2t6_v2", word: "sell", translation: "vender", type: "verb", definition: "to give something for money", definitionEs: "dar algo por dinero", example: "They sell fresh bread here.", exampleEs: "Venden pan fresco aquí.", related: [], difficulty: 1 },
          { id: "l2t6_v3", word: "pay", translation: "pagar", type: "verb", definition: "to give money for something", definitionEs: "dar dinero por algo", example: "How much did you pay for it?", exampleEs: "¿Cuánto pagaste por eso?", related: [], difficulty: 1 },
          { id: "l2t6_v4", word: "try on", translation: "probarse", type: "verb", definition: "to put on clothes to see if they fit", definitionEs: "ponerse ropa para ver si queda", example: "Can I try on this dress?", exampleEs: "¿Puedo probarme este vestido?", related: [], difficulty: 1 },
          { id: "l2t6_v5", word: "return", translation: "devolver", type: "verb", definition: "to give something back", definitionEs: "devolver algo", example: "I want to return this item.", exampleEs: "Quiero devolver este artículo.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l2t6_a1", word: "cheap", translation: "barato", type: "adjective", definition: "not costing a lot", definitionEs: "que no cuesta mucho", example: "This shirt is very cheap.", exampleEs: "Esta camisa es muy barata.", related: ["inexpensive"], difficulty: 1 },
          { id: "l2t6_a2", word: "expensive", translation: "caro", type: "adjective", definition: "costing a lot of money", definitionEs: "que cuesta mucho dinero", example: "This watch is too expensive.", exampleEs: "Este reloj es muy caro.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l2t6_e1", word: "How much is this?", translation: "¿Cuánto cuesta esto?", type: "expression", definition: "asking the price", definitionEs: "preguntando el precio", example: "How much is this bag?", exampleEs: "¿Cuánto cuesta esta bolsa?", related: [], difficulty: 1 },
          { id: "l2t6_e2", word: "I'm just looking", translation: "Solo estoy mirando", type: "expression", definition: "when you don't need help", definitionEs: "cuando no necesitas ayuda", example: "Thanks, I'm just looking.", exampleEs: "Gracias, solo estoy mirando.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 7,
      title: "Health and Body",
      titleEs: "Salud y Cuerpo",
      introduction: {
        title: "🏥 Salud y Cuerpo en Inglés",
        explanation: "Poder describir síntomas y problemas de salud es crucial, especialmente cuando viajas. Aprenderás vocabulario médico esencial y cómo comunicarte con profesionales de salud.",
        keyPoints: [
          "Dolores comunes: headache (dolor de cabeza), stomachache (dolor de estómago), backache (dolor de espalda)",
          "Síntomas: fever (fiebre), cough (tos), cold (resfriado), flu (gripe)",
          "Para describir: 'I have a...' / 'My ... hurts' / 'I feel...'",
          "Consejos: 'You should...' / 'You shouldn't...' / 'Why don't you...?'"
        ],
        examples: [
          { english: "I have a terrible headache.", spanish: "Tengo un dolor de cabeza terrible.", explanation: "Describiendo síntomas" },
          { english: "You should see a doctor.", spanish: "Deberías ver a un doctor.", explanation: "Dando consejo" },
          { english: "I've been coughing all week.", spanish: "He estado tosiendo toda la semana.", explanation: "Duración del síntoma" }
        ],
        tips: [
          "💡 'Sick' (US) vs 'Ill' (UK) - ambos significan enfermo",
          "💡 'I have a cold' (tengo resfriado) - usamos 'have' no 'am'",
          "💡 'Ache' se usa en palabras compuestas: headACHE, toothACHE, stomachACHE"
        ],
        whenToUse: [
          "Describiendo síntomas: 'I have a headache / My back hurts'",
          "Pidiendo consejo: 'What should I do?'",
          "Dando consejo: 'You should take some medicine'"
        ],
        whenNotToUse: [
          "No digas 'I am sick of flu': Di 'I have the flu' ✓",
          "No digas 'My head is hurting me': Di 'My head hurts' ✓"
        ]
      },
      objectives: [
        "Describir síntomas y problemas de salud",
        "Vocabulario médico básico",
        "Dar consejos de salud"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "Después de ir de compras, a veces necesitas cuidar tu salud.",
      connectionToNext: "Cuando te sientes bien, puedes disfrutar de tus hobbies.",
      grammarTheoryIds: ['a1-verb-to-be', 'a2-can-could-modals'],
      
      commonMistakes: [
        {
          id: "l2t7_cm1",
          wrong: "I am sick of flu.",
          correct: "I have the flu.",
          explanation: "Use 'have' with illnesses: have a cold, have the flu, have a headache.",
          explanationEs: "Usa 'have' con enfermedades: have a cold, have the flu, have a headache.",
          category: "grammar"
        },
        {
          id: "l2t7_cm2",
          wrong: "My head is hurting me.",
          correct: "My head hurts. / I have a headache.",
          explanation: "'My [body part] hurts' - no need for 'me' at the end.",
          explanationEs: "'My [body part] hurts' - no necesitas 'me' al final.",
          category: "grammar"
        },
        {
          id: "l2t7_cm3",
          wrong: "I feel me tired.",
          correct: "I feel tired.",
          explanation: "'Feel + adjective' with no object pronoun.",
          explanationEs: "'Feel + adjetivo' sin pronombre objeto.",
          category: "grammar"
        },
        {
          id: "l2t7_cm4",
          wrong: "I catched a cold.",
          correct: "I caught a cold.",
          explanation: "'Catch' is irregular: catch → caught → caught.",
          explanationEs: "'Catch' es irregular: catch → caught → caught.",
          category: "irregular verb"
        },
        {
          id: "l2t7_cm5",
          wrong: "You should to rest.",
          correct: "You should rest.",
          explanation: "After 'should', use the base verb without 'to'.",
          explanationEs: "Después de 'should', usa el verbo base sin 'to'.",
          category: "modal verbs"
        }
      ],
      
      exercises: [
        {
          id: "l2t7_ex1",
          type: "gap-fill",
          title: "Describing Symptoms",
          titleEs: "Describiendo Síntomas",
          instruction: "Complete with the correct word.",
          instructionEs: "Completa con la palabra correcta.",
          difficulty: 1,
          items: [
            { id: "l2t7_ex1_1", prompt: "I _____ a terrible headache.", correctAnswer: "have", hint: "have + illness", hintEs: "have + enfermedad" },
            { id: "l2t7_ex1_2", prompt: "My stomach _____.", correctAnswer: "hurts", hint: "Body part + hurts", hintEs: "Parte del cuerpo + hurts" },
            { id: "l2t7_ex1_3", prompt: "I don't _____ well today.", correctAnswer: "feel", hint: "Feel + adjective", hintEs: "Feel + adjetivo" },
            { id: "l2t7_ex1_4", prompt: "She _____ a high fever.", correctAnswer: "has", hint: "Third person: has", hintEs: "Tercera persona: has" }
          ]
        },
        {
          id: "l2t7_ex2",
          type: "gap-fill",
          title: "Giving Advice with Should",
          titleEs: "Dando Consejos con Should",
          instruction: "Complete the advice with should + verb.",
          instructionEs: "Completa el consejo con should + verbo.",
          difficulty: 1,
          items: [
            { id: "l2t7_ex2_1", prompt: "You _____ see a doctor.", correctAnswer: "should", hint: "should + base verb", hintEs: "should + verbo base" },
            { id: "l2t7_ex2_2", prompt: "You shouldn't _____ to work today.", correctAnswer: "go", hint: "After should/shouldn't: base verb", hintEs: "Después de should/shouldn't: verbo base" },
            { id: "l2t7_ex2_3", prompt: "She should _____ some medicine.", correctAnswer: "take", hint: "take medicine", hintEs: "take medicine" },
            { id: "l2t7_ex2_4", prompt: "You should _____ more water.", correctAnswer: "drink", hint: "Good for health", hintEs: "Bueno para la salud" }
          ]
        },
        {
          id: "l2t7_ex3",
          type: "matching",
          title: "Body Parts and Problems",
          titleEs: "Partes del Cuerpo y Problemas",
          instruction: "Match the symptom with its body part.",
          instructionEs: "Relaciona el síntoma con su parte del cuerpo.",
          difficulty: 1,
          items: [
            { id: "l2t7_ex3_1", prompt: "headache", correctAnswer: "head", hint: "Pain in the...", hintEs: "Dolor en la..." },
            { id: "l2t7_ex3_2", prompt: "stomachache", correctAnswer: "stomach", hint: "Pain in the...", hintEs: "Dolor en el..." },
            { id: "l2t7_ex3_3", prompt: "toothache", correctAnswer: "tooth", hint: "Pain in the...", hintEs: "Dolor en el..." },
            { id: "l2t7_ex3_4", prompt: "sore throat", correctAnswer: "throat", hint: "Pain in the...", hintEs: "Dolor en la..." }
          ]
        },
        {
          id: "l2t7_ex4",
          type: "error-correction",
          title: "Fix the Health Sentences",
          titleEs: "Corrige las Oraciones de Salud",
          instruction: "Find and correct the error.",
          instructionEs: "Encuentra y corrige el error.",
          difficulty: 1,
          items: [
            { id: "l2t7_ex4_1", prompt: "I am sick of flu.", correctAnswer: "I have the flu.", explanation: "Use 'have' with illnesses.", explanationEs: "Usa 'have' con enfermedades." },
            { id: "l2t7_ex4_2", prompt: "You should to rest.", correctAnswer: "You should rest.", explanation: "No 'to' after should.", explanationEs: "No 'to' después de should." },
            { id: "l2t7_ex4_3", prompt: "I catched a cold.", correctAnswer: "I caught a cold.", explanation: "Catch is irregular: caught.", explanationEs: "Catch es irregular: caught." },
            { id: "l2t7_ex4_4", prompt: "My head is hurting me.", correctAnswer: "My head hurts.", explanation: "Simple present, no 'me'.", explanationEs: "Presente simple, sin 'me'." }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l2t7_dialogue",
        title: "At the Doctor's Office",
        titleEs: "En el Consultorio Médico",
        context: "A patient visits the doctor feeling unwell.",
        contextEs: "Un paciente visita al doctor sintiéndose mal.",
        speakers: [
          { id: "s1", name: "Doctor", role: "Medical professional" },
          { id: "s2", name: "Patient", role: "Feeling sick" }
        ],
        lines: [
          { speakerId: "s1", text: "Good morning. What seems to be the problem?", textEs: "Buenos días. ¿Cuál parece ser el problema?", note: "Doctor's standard opening", noteEs: "Apertura estándar del doctor" },
          { speakerId: "s2", text: "I don't feel well. I have a bad headache and a sore throat.", textEs: "No me siento bien. Tengo un fuerte dolor de cabeza y dolor de garganta.", note: "Describing symptoms", noteEs: "Describiendo síntomas" },
          { speakerId: "s1", text: "How long have you felt like this?", textEs: "¿Hace cuánto tiempo se siente así?", note: "Asking duration", noteEs: "Preguntando duración" },
          { speakerId: "s2", text: "Since yesterday morning. I've also been coughing a lot.", textEs: "Desde ayer por la mañana. También he estado tosiendo mucho.", note: "Present perfect for duration", noteEs: "Presente perfecto para duración" },
          { speakerId: "s1", text: "Do you have a fever?", textEs: "¿Tiene fiebre?", note: "'Have' with symptoms", noteEs: "'Have' con síntomas" },
          { speakerId: "s2", text: "Yes, I think so. I feel very hot.", textEs: "Sí, creo que sí. Me siento muy caliente.", note: "Confirming symptom", noteEs: "Confirmando síntoma" },
          { speakerId: "s1", text: "Let me check your temperature. It's 38.5°C. You have the flu.", textEs: "Déjeme revisar su temperatura. Es 38.5°C. Tiene gripe.", note: "Diagnosis", noteEs: "Diagnóstico" },
          { speakerId: "s2", text: "What should I do?", textEs: "¿Qué debería hacer?", note: "Asking for advice", noteEs: "Pidiendo consejo" },
          { speakerId: "s1", text: "You should rest and drink plenty of fluids. Take this medicine twice a day.", textEs: "Debería descansar y beber mucho líquido. Tome esta medicina dos veces al día.", note: "Giving medical advice", noteEs: "Dando consejo médico" },
          { speakerId: "s2", text: "Should I stay home from work?", textEs: "¿Debería quedarme en casa sin ir al trabajo?", note: "Asking about restrictions", noteEs: "Preguntando sobre restricciones" },
          { speakerId: "s1", text: "Yes, you shouldn't go to work for at least three days. Get well soon!", textEs: "Sí, no debería ir al trabajo por al menos tres días. ¡Que se mejore pronto!", note: "Final advice", noteEs: "Consejo final" }
        ],
        keyPhrases: [
          { phrase: "What seems to be the problem?", translation: "¿Cuál parece ser el problema?", usage: "Doctor asking about symptoms" },
          { phrase: "I have a...", translation: "Tengo un/a...", usage: "Describing symptoms" },
          { phrase: "How long have you felt like this?", translation: "¿Hace cuánto tiempo se siente así?", usage: "Asking about duration" },
          { phrase: "You should...", translation: "Debería...", usage: "Giving advice" }
        ],
        variations: [
          { original: "What seems to be the problem?", alternative: "What brings you in today?", note: "More casual" },
          { original: "I don't feel well", alternative: "I'm not feeling well", note: "Same meaning, continuous" },
          { original: "You should rest", alternative: "I'd recommend resting", note: "More formal advice" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/eɪ/",
            description: "The sound in 'ache' and 'pain'",
            descriptionEs: "El sonido en 'ache' y 'pain'",
            examples: [
              { word: "ache", transcription: "/eɪk/" },
              { word: "pain", transcription: "/peɪn/" },
              { word: "take", transcription: "/teɪk/" }
            ],
            tips: ["Like saying 'ay' in Spanish", "Think: headache, stomachache"]
          },
          {
            symbol: "/ɔː/",
            description: "The sound in 'cough' and 'caught'",
            descriptionEs: "El sonido en 'cough' y 'caught'",
            examples: [
              { word: "cough", transcription: "/kɒf/" },
              { word: "caught", transcription: "/kɔːt/" },
              { word: "doctor", transcription: "/ˈdɒktər/" }
            ],
            tips: ["Mouth round, like saying 'aw'", "British: more open, American: more closed"]
          }
        ],
        commonProblems: [
          { word: "headache", wrong: "head-AH-chay", correct: "HEAD-ayk", tip: "Stress on first syllable, 'ache' rhymes with 'make'" },
          { word: "cough", wrong: "cow-ff / coo-ff", correct: "KOFF", tip: "The 'ough' is pronounced like 'off'" },
          { word: "medicine", wrong: "me-di-CI-ne", correct: "MED-i-sin", tip: "Only 3 syllables, stress on first" }
        ],
        minimalPairs: [
          { word1: "sick", word2: "seek", soundDifference: "/ɪ/ vs /iː/ - short vs long vowel" },
          { word1: "fill", word2: "feel", soundDifference: "/ɪ/ vs /iː/ - 'I feel ill'" },
          { word1: "pain", word2: "pen", soundDifference: "/eɪ/ vs /e/ - different vowels" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "Do you have a FEVER?↗", meaning: "Yes/no question" },
          { pattern: "Falling ↘", example: "I have a HEADache.↘", meaning: "Statement" },
          { pattern: "Sympathetic", example: "Oh no!↘ That's TERRible.↘", meaning: "Expressing sympathy" }
        ]
      },
      
      culturalNote: {
        title: "Healthcare in English-Speaking Countries",
        titleEs: "Salud en Países Angloparlantes",
        content: "Healthcare systems differ significantly between English-speaking countries. In the UK, the National Health Service (NHS) provides free healthcare at the point of use - you just go to your 'GP' (General Practitioner, your regular doctor). In the US, healthcare is mostly private and can be very expensive without insurance. When calling for emergency services, dial 999 in the UK, 911 in the US, and 000 in Australia. For non-emergencies in the UK, call 111. Pharmacies (called 'chemists' in the UK) can give advice for minor ailments. 'Paracetamol' (UK) is called 'Tylenol' or 'acetaminophen' in the US. When you're sick, it's common to say 'I'm not feeling well' or 'I'm under the weather' (informal). Saying 'Get well soon!' is a standard way to wish someone recovery.",
        contentEs: "Los sistemas de salud difieren significativamente entre países angloparlantes. En UK, el NHS (National Health Service) provee atención médica gratuita - simplemente vas a tu 'GP' (General Practitioner, tu médico de cabecera). En EEUU, la atención médica es mayormente privada y puede ser muy cara sin seguro. Para emergencias, marca 999 en UK, 911 en EEUU, y 000 en Australia. Para no emergencias en UK, llama al 111. Las farmacias (llamadas 'chemists' en UK) pueden dar consejos para malestares menores. 'Paracetamol' (UK) se llama 'Tylenol' o 'acetaminophen' en EEUU. Cuando estás enfermo, es común decir 'I'm not feeling well' o 'I'm under the weather' (informal). '¡Get well soon!' es la forma estándar de desear recuperación.",
        regions: ["UK", "US"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l2t7_quiz",
        title: "Health and Body Mastery Check",
        titleEs: "Prueba de Dominio de Salud y Cuerpo",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l2t7_q1",
            type: "multiple-choice",
            question: "How do you say you have flu?",
            questionEs: "¿Cómo dices que tienes gripe?",
            options: ["I am sick of flu.", "I am with flu.", "I have the flu.", "I have flu sick."],
            correctAnswer: "I have the flu.",
            explanation: "Use 'have' with illnesses: I have a cold, I have the flu.",
            explanationEs: "Usa 'have' con enfermedades: I have a cold, I have the flu.",
            points: 10
          },
          {
            id: "l2t7_q2",
            type: "multiple-choice",
            question: "Complete: 'You _____ rest more.'",
            questionEs: "Completa: 'You _____ rest more.'",
            options: ["should to", "should", "should of", "should be"],
            correctAnswer: "should",
            explanation: "After 'should', use the base verb: should + rest.",
            explanationEs: "Después de 'should', usa el verbo base: should + rest.",
            points: 10
          },
          {
            id: "l2t7_q3",
            type: "multiple-choice",
            question: "My stomach _____.",
            questionEs: "My stomach _____.",
            options: ["is hurting me", "hurts", "hurt me", "is hurt"],
            correctAnswer: "hurts",
            explanation: "'My [body part] hurts' - simple present, no 'me'.",
            explanationEs: "'My [body part] hurts' - presente simple, sin 'me'.",
            points: 10
          },
          {
            id: "l2t7_q4",
            type: "fill-blank",
            question: "I _____ a cold last week. (catch - past)",
            questionEs: "I _____ a cold last week. (catch - pasado)",
            correctAnswer: ["caught"],
            explanation: "Catch is irregular: catch → caught → caught.",
            explanationEs: "Catch es irregular: catch → caught → caught.",
            points: 10
          },
          {
            id: "l2t7_q5",
            type: "multiple-choice",
            question: "What does 'I don't feel well' mean?",
            questionEs: "¿Qué significa 'I don't feel well'?",
            options: ["I can't feel anything", "I am sick", "I don't like this feeling", "I feel something wrong"],
            correctAnswer: "I am sick",
            explanation: "'I don't feel well' is a polite way to say you're sick.",
            explanationEs: "'I don't feel well' es una forma educada de decir que estás enfermo.",
            points: 10
          },
          {
            id: "l2t7_q6",
            type: "true-false",
            question: "Pain in the head is called 'headache'.",
            questionEs: "El dolor en la cabeza se llama 'headache'.",
            correctAnswer: "true",
            explanation: "Headache = head + ache (dolor). Stomachache, backache, toothache follow the same pattern.",
            explanationEs: "Headache = head + ache (dolor). Stomachache, backache, toothache siguen el mismo patrón.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l2t7_production",
        title: "Describe Your Symptoms to a Doctor",
        titleEs: "Describe tus Síntomas a un Doctor",
        type: "spoken",
        scenario: "You're at the doctor's office with cold symptoms.",
        scenarioEs: "Estás en el consultorio médico con síntomas de resfriado.",
        prompts: [
          {
            id: "l2t7_prod1",
            instruction: "Tell the doctor how you feel",
            instructionEs: "Dile al doctor cómo te sientes",
            hints: ["I don't feel well...", "I have..."],
            hintsEs: ["No me siento bien...", "Tengo..."],
            requiredElements: ["general feeling description"]
          },
          {
            id: "l2t7_prod2",
            instruction: "Describe your specific symptoms",
            instructionEs: "Describe tus síntomas específicos",
            hints: ["I have a...", "My... hurts"],
            hintsEs: ["Tengo un/a...", "Me duele el/la..."],
            requiredElements: ["at least 2 symptoms"]
          },
          {
            id: "l2t7_prod3",
            instruction: "Say how long you've had these symptoms",
            instructionEs: "Di cuánto tiempo has tenido estos síntomas",
            hints: ["Since...", "For... days"],
            hintsEs: ["Desde...", "Por... días"],
            requiredElements: ["duration of symptoms"]
          },
          {
            id: "l2t7_prod4",
            instruction: "Ask for advice",
            instructionEs: "Pide consejo",
            hints: ["What should I do?", "Should I...?"],
            hintsEs: ["¿Qué debería hacer?", "¿Debería...?"],
            requiredElements: ["question asking for advice"]
          }
        ],
        modelResponse: "I don't feel well today. I have a bad headache and a sore throat. My body also aches. I've had these symptoms since yesterday morning. I've also been coughing a lot. What should I do? Should I stay home from work?",
        modelResponseEs: "No me siento bien hoy. Tengo un fuerte dolor de cabeza y dolor de garganta. También me duele el cuerpo. He tenido estos síntomas desde ayer por la mañana. También he estado tosiendo mucho. ¿Qué debería hacer? ¿Debería quedarme en casa sin ir al trabajo?",
        evaluationCriteria: [
          "Used 'I have a...' for symptoms",
          "Used 'My... hurts' correctly",
          "Mentioned duration (since/for)",
          "Asked for advice with 'should'"
        ],
        evaluationCriteriaEs: [
          "Usaste 'I have a...' para síntomas",
          "Usaste 'My... hurts' correctamente",
          "Mencionaste duración (since/for)",
          "Pediste consejo con 'should'"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l2t7_n1", word: "headache", translation: "dolor de cabeza", type: "noun", definition: "pain in the head", definitionEs: "dolor en la cabeza", example: "I have a terrible headache.", exampleEs: "Tengo un dolor de cabeza terrible.", related: ["pain"], difficulty: 1 },
          { id: "l2t7_n2", word: "cold", translation: "resfriado", type: "noun", definition: "a common illness", definitionEs: "una enfermedad común", example: "I caught a cold.", exampleEs: "Me resfrié.", related: ["flu"], difficulty: 1 },
          { id: "l2t7_n3", word: "fever", translation: "fiebre", type: "noun", definition: "high body temperature", definitionEs: "temperatura corporal alta", example: "She has a high fever.", exampleEs: "Ella tiene fiebre alta.", related: ["temperature"], difficulty: 1 },
          { id: "l2t7_n4", word: "medicine", translation: "medicina", type: "noun", definition: "something you take when sick", definitionEs: "algo que tomas cuando estás enfermo", example: "Take this medicine twice a day.", exampleEs: "Toma esta medicina dos veces al día.", related: ["pill"], difficulty: 1 },
          { id: "l2t7_n5", word: "appointment", translation: "cita", type: "noun", definition: "arranged meeting with a doctor", definitionEs: "reunión programada con un médico", example: "I have a doctor's appointment.", exampleEs: "Tengo una cita con el médico.", related: [], difficulty: 1 },
          { id: "l2t7_n6", word: "symptom", translation: "síntoma", type: "noun", definition: "sign of illness", definitionEs: "señal de enfermedad", example: "What are your symptoms?", exampleEs: "¿Cuáles son sus síntomas?", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l2t7_v1", word: "hurt", translation: "doler", type: "verb", definition: "to feel pain", definitionEs: "sentir dolor", example: "My back hurts.", exampleEs: "Me duele la espalda.", related: ["ache"], difficulty: 1 },
          { id: "l2t7_v2", word: "cough", translation: "toser", type: "verb", definition: "to push air out with noise", definitionEs: "expulsar aire con ruido", example: "I've been coughing all day.", exampleEs: "He estado tosiendo todo el día.", related: [], difficulty: 1 },
          { id: "l2t7_v3", word: "sneeze", translation: "estornudar", type: "verb", definition: "to push air out through nose suddenly", definitionEs: "expulsar aire por la nariz de repente", example: "I can't stop sneezing.", exampleEs: "No puedo dejar de estornudar.", related: [], difficulty: 1 },
          { id: "l2t7_v4", word: "feel", translation: "sentirse", type: "verb", definition: "to experience a sensation", definitionEs: "experimentar una sensación", example: "I don't feel well today.", exampleEs: "No me siento bien hoy.", related: [], difficulty: 1 },
          { id: "l2t7_v5", word: "rest", translation: "descansar", type: "verb", definition: "to relax or sleep", definitionEs: "relajarse o dormir", example: "You should rest more.", exampleEs: "Deberías descansar más.", related: ["relax"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l2t7_a1", word: "sick", translation: "enfermo", type: "adjective", definition: "not healthy", definitionEs: "no saludable", example: "I feel sick today.", exampleEs: "Me siento enfermo hoy.", related: ["ill"], difficulty: 1 },
          { id: "l2t7_a2", word: "healthy", translation: "saludable", type: "adjective", definition: "in good condition", definitionEs: "en buena condición", example: "Exercise keeps you healthy.", exampleEs: "El ejercicio te mantiene saludable.", related: [], difficulty: 1 },
          { id: "l2t7_a3", word: "dizzy", translation: "mareado", type: "adjective", definition: "feeling like spinning", definitionEs: "sintiendo como si girara", example: "I feel dizzy when I stand up.", exampleEs: "Me siento mareado cuando me levanto.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l2t7_e1", word: "What's wrong?", translation: "¿Qué te pasa?", type: "expression", definition: "asking about a problem", definitionEs: "preguntando sobre un problema", example: "What's wrong? You look pale.", exampleEs: "¿Qué te pasa? Te ves pálido.", related: [], difficulty: 1 },
          { id: "l2t7_e2", word: "I don't feel well", translation: "No me siento bien", type: "expression", definition: "saying you're sick", definitionEs: "diciendo que estás enfermo", example: "I don't feel well. I need to rest.", exampleEs: "No me siento bien. Necesito descansar.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 8,
      title: "Hobbies and Free Time",
      titleEs: "Pasatiempos y Tiempo Libre",
      introduction: {
        title: "🎮 Pasatiempos y Tiempo Libre en Inglés",
        explanation: "Hablar sobre hobbies es una excelente forma de conectar con otras personas. Aprenderás a describir tus pasatiempos y preguntar a otros sobre los suyos.",
        keyPoints: [
          "'Play' se usa para deportes con pelota y música: 'play football', 'play guitar'",
          "'Go' + ing para actividades: 'go swimming', 'go hiking', 'go shopping'",
          "'Do' para actividades sin pelota: 'do yoga', 'do karate', 'do exercise'",
          "Para expresar interés: 'I'm into...', 'I enjoy...', 'I'm keen on...'"
        ],
        examples: [
          { english: "In my free time, I play video games.", spanish: "En mi tiempo libre, juego videojuegos.", explanation: "Describiendo hobby" },
          { english: "I'm really into photography.", spanish: "Me gusta mucho la fotografía.", explanation: "Expresando interés fuerte" },
          { english: "What do you do for fun?", spanish: "¿Qué haces para divertirte?", explanation: "Preguntando sobre hobbies" }
        ],
        tips: [
          "💡 'Play THE guitar' pero 'play football' (sin artículo para deportes)",
          "💡 'Boring' (aburrido, lo que causa) vs 'Bored' (aburrido, cómo me siento)",
          "💡 'Hobby' es singular, 'Hobbies' es plural"
        ],
        whenToUse: [
          "Hablando de hobbies: 'I play/go/do...'",
          "Expresando interés: 'I'm into... / I enjoy...'",
          "Preguntando: 'What do you do for fun?'"
        ],
        whenNotToUse: [
          "No digas 'I play yoga': Di 'I do yoga' ✓",
          "No digas 'I do swimming': Di 'I go swimming' ✓",
          "No digas 'I'm boring': Di 'I'm bored' ✓ (feeling)"
        ]
      },
      objectives: [
        "Hablar sobre hobbies",
        "Describir actividades de ocio",
        "Expresar preferencias"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "Cuando estás saludable, puedes disfrutar de tus hobbies.",
      connectionToNext: "Para llegar a tus actividades, necesitas transporte.",
      grammarTheoryIds: ['a1-present-simple', 'a2-frequency-adverbs'],
      
      commonMistakes: [
        {
          id: "l2t8_cm1",
          wrong: "I play yoga / I play swimming.",
          correct: "I do yoga. / I go swimming.",
          explanation: "Play = sports with ball/music. Do = martial arts, yoga. Go = verb+ing activities.",
          explanationEs: "Play = deportes con pelota/música. Do = artes marciales, yoga. Go = actividades con verbo+ing.",
          category: "collocation"
        },
        {
          id: "l2t8_cm2",
          wrong: "I play guitar.",
          correct: "I play THE guitar.",
          explanation: "With musical instruments: play THE piano, play THE violin.",
          explanationEs: "Con instrumentos musicales: play THE piano, play THE violin.",
          category: "article"
        },
        {
          id: "l2t8_cm3",
          wrong: "I'm boring.",
          correct: "I'm bored. / This movie is boring.",
          explanation: "-ED = how you feel. -ING = what causes the feeling.",
          explanationEs: "-ED = cómo te sientes. -ING = lo que causa el sentimiento.",
          category: "adjectives"
        },
        {
          id: "l2t8_cm4",
          wrong: "I like play tennis.",
          correct: "I like playing tennis. / I like to play tennis.",
          explanation: "After 'like': like + verb-ing OR like + to + verb.",
          explanationEs: "Después de 'like': like + verbo-ing O like + to + verbo.",
          category: "gerund/infinitive"
        },
        {
          id: "l2t8_cm5",
          wrong: "What is your hobby?",
          correct: "What are your hobbies? / What do you do for fun?",
          explanation: "More natural to ask about hobbies (plural) or use 'what do you do for fun'.",
          explanationEs: "Más natural preguntar sobre hobbies (plural) o usar 'what do you do for fun'.",
          category: "naturalness"
        }
      ],
      
      exercises: [
        {
          id: "l2t8_ex1",
          type: "gap-fill",
          title: "Play, Go, or Do?",
          titleEs: "¿Play, Go o Do?",
          instruction: "Complete with play, go, or do.",
          instructionEs: "Completa con play, go o do.",
          difficulty: 1,
          items: [
            { id: "l2t8_ex1_1", prompt: "I _____ swimming every weekend.", correctAnswer: "go", hint: "Go + verb-ing", hintEs: "Go + verbo-ing" },
            { id: "l2t8_ex1_2", prompt: "She _____ the piano beautifully.", correctAnswer: "plays", hint: "Musical instruments", hintEs: "Instrumentos musicales" },
            { id: "l2t8_ex1_3", prompt: "He _____ karate on Tuesdays.", correctAnswer: "does", hint: "Martial arts", hintEs: "Artes marciales" },
            { id: "l2t8_ex1_4", prompt: "They _____ football after school.", correctAnswer: "play", hint: "Sports with ball", hintEs: "Deportes con pelota" }
          ]
        },
        {
          id: "l2t8_ex2",
          type: "gap-fill",
          title: "Bored vs Boring",
          titleEs: "Bored vs Boring",
          instruction: "Complete with -ED or -ING adjective.",
          instructionEs: "Completa con adjetivo en -ED o -ING.",
          difficulty: 1,
          items: [
            { id: "l2t8_ex2_1", prompt: "This book is very _____ (interest).", correctAnswer: "interesting", hint: "What the book causes", hintEs: "Lo que el libro causa" },
            { id: "l2t8_ex2_2", prompt: "I'm _____ in photography (interest).", correctAnswer: "interested", hint: "How you feel", hintEs: "Cómo te sientes" },
            { id: "l2t8_ex2_3", prompt: "That movie was so _____ (bore).", correctAnswer: "boring", hint: "What the movie caused", hintEs: "Lo que la película causó" },
            { id: "l2t8_ex2_4", prompt: "We were _____ during the lecture (bore).", correctAnswer: "bored", hint: "How we felt", hintEs: "Cómo nos sentimos" }
          ]
        },
        {
          id: "l2t8_ex3",
          type: "matching",
          title: "Hobbies and Interests",
          titleEs: "Hobbies e Intereses",
          instruction: "Match the hobby expression with its category.",
          instructionEs: "Relaciona la expresión de hobby con su categoría.",
          difficulty: 1,
          items: [
            { id: "l2t8_ex3_1", prompt: "go hiking", correctAnswer: "outdoor activity", hint: "Go + verb-ing", hintEs: "Go + verbo-ing" },
            { id: "l2t8_ex3_2", prompt: "play the guitar", correctAnswer: "music", hint: "Play + THE + instrument", hintEs: "Play + THE + instrumento" },
            { id: "l2t8_ex3_3", prompt: "do yoga", correctAnswer: "exercise", hint: "Do + activity", hintEs: "Do + actividad" },
            { id: "l2t8_ex3_4", prompt: "collect stamps", correctAnswer: "collecting hobby", hint: "Collecting things", hintEs: "Coleccionar cosas" }
          ]
        },
        {
          id: "l2t8_ex4",
          type: "error-correction",
          title: "Fix the Hobby Sentences",
          titleEs: "Corrige las Oraciones de Hobbies",
          instruction: "Find and correct the error.",
          instructionEs: "Encuentra y corrige el error.",
          difficulty: 1,
          items: [
            { id: "l2t8_ex4_1", prompt: "I play yoga every morning.", correctAnswer: "I do yoga every morning.", explanation: "Do + yoga, karate, exercise.", explanationEs: "Do + yoga, karate, exercise." },
            { id: "l2t8_ex4_2", prompt: "She plays guitar well.", correctAnswer: "She plays THE guitar well.", explanation: "Play THE + instrument.", explanationEs: "Play THE + instrumento." },
            { id: "l2t8_ex4_3", prompt: "I'm very boring today.", correctAnswer: "I'm very bored today.", explanation: "-ED = how you feel.", explanationEs: "-ED = cómo te sientes." },
            { id: "l2t8_ex4_4", prompt: "I like play video games.", correctAnswer: "I like playing video games.", explanation: "Like + verb-ing.", explanationEs: "Like + verbo-ing." }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l2t8_dialogue",
        title: "Talking About Hobbies",
        titleEs: "Hablando de Hobbies",
        context: "Two colleagues chat during lunch break.",
        contextEs: "Dos colegas charlan durante el almuerzo.",
        speakers: [
          { id: "s1", name: "Alex", role: "Asking about hobbies" },
          { id: "s2", name: "Sam", role: "Sharing interests" }
        ],
        lines: [
          { speakerId: "s1", text: "So, what do you do for fun?", textEs: "Entonces, ¿qué haces para divertirte?", note: "Natural way to ask", noteEs: "Forma natural de preguntar" },
          { speakerId: "s2", text: "Well, I'm really into photography. I take photos every weekend.", textEs: "Bueno, me gusta mucho la fotografía. Tomo fotos cada fin de semana.", note: "'Into' = interested in", noteEs: "'Into' = interesado en" },
          { speakerId: "s1", text: "That sounds interesting! Do you take photos of nature?", textEs: "¡Eso suena interesante! ¿Tomas fotos de la naturaleza?", note: "Showing interest", noteEs: "Mostrando interés" },
          { speakerId: "s2", text: "Yes, mostly. I go hiking in the mountains and take landscape photos.", textEs: "Sí, mayormente. Voy de senderismo a las montañas y tomo fotos de paisajes.", note: "Go hiking = go + verb-ing", noteEs: "Go hiking = go + verbo-ing" },
          { speakerId: "s1", text: "That's cool! Do you play any sports?", textEs: "¡Qué bien! ¿Practicas algún deporte?", note: "Play + sports", noteEs: "Play + deportes" },
          { speakerId: "s2", text: "I play tennis on Tuesdays and I do yoga in the mornings.", textEs: "Juego tenis los martes y hago yoga por las mañanas.", note: "Play tennis, do yoga", noteEs: "Play tennis, do yoga" },
          { speakerId: "s1", text: "Wow, you're really active! I should exercise more.", textEs: "¡Guau, eres muy activo! Yo debería hacer más ejercicio.", note: "'Should' for suggestion", noteEs: "'Should' para sugerencia" },
          { speakerId: "s2", text: "What about you? What do you enjoy doing?", textEs: "¿Y tú? ¿Qué te gusta hacer?", note: "'Enjoy doing' = like doing", noteEs: "'Enjoy doing' = like doing" },
          { speakerId: "s1", text: "I'm interested in music. I play the guitar and listen to all kinds of music.", textEs: "Me interesa la música. Toco la guitarra y escucho todo tipo de música.", note: "Play THE guitar", noteEs: "Play THE guitar" },
          { speakerId: "s2", text: "We should play together sometime!", textEs: "¡Deberíamos tocar juntos alguna vez!", note: "Making a suggestion", noteEs: "Haciendo una sugerencia" }
        ],
        keyPhrases: [
          { phrase: "What do you do for fun?", translation: "¿Qué haces para divertirte?", usage: "Asking about hobbies" },
          { phrase: "I'm into...", translation: "Me gusta/interesa...", usage: "Expressing interest" },
          { phrase: "I enjoy + verb-ing", translation: "Disfruto + verbo", usage: "Talking about what you like" },
          { phrase: "That sounds interesting!", translation: "¡Eso suena interesante!", usage: "Showing interest" }
        ],
        variations: [
          { original: "What do you do for fun?", alternative: "What are your hobbies?", note: "More direct" },
          { original: "I'm into photography", alternative: "I'm really keen on photography", note: "British style" },
          { original: "That sounds interesting", alternative: "That's so cool!", note: "More casual" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/ɪ/ vs /iː/",
            description: "Short vs long 'i' sound",
            descriptionEs: "Sonido 'i' corto vs largo",
            examples: [
              { word: "interesting", transcription: "/ˈɪn.trəs.tɪŋ/" },
              { word: "reading", transcription: "/ˈriː.dɪŋ/" },
              { word: "listening", transcription: "/ˈlɪs.ən.ɪŋ/" }
            ],
            tips: ["Short /ɪ/ = relaxed, like 'sit'", "Long /iː/ = tense, like 'seat'"]
          },
          {
            symbol: "Word stress in -ING words",
            description: "Stress usually stays on root word",
            descriptionEs: "El acento usualmente queda en la raíz",
            examples: [
              { word: "interesting", transcription: "IN-ter-est-ing" },
              { word: "swimming", transcription: "SWIM-ming" },
              { word: "relaxing", transcription: "re-LAX-ing" }
            ],
            tips: ["The -ing is never stressed", "Find the root word's stress"]
          }
        ],
        commonProblems: [
          { word: "guitar", wrong: "gui-TAR", correct: "gi-TAR", tip: "Stress on second syllable, /gɪˈtɑːr/" },
          { word: "interesting", wrong: "in-ter-EST-ing", correct: "IN-ter-es-ting", tip: "Stress on first syllable" },
          { word: "photography", wrong: "pho-TO-gra-phy", correct: "pho-TOG-ra-phy", tip: "Stress on second syllable: fo-TOG-ra-fee" }
        ],
        minimalPairs: [
          { word1: "live", word2: "leave", soundDifference: "/ɪ/ vs /iː/ - I live here / I leave now" },
          { word1: "boring", word2: "bored", soundDifference: "Different endings, different meanings" },
          { word1: "play", word2: "pray", soundDifference: "/l/ vs /r/ - common difficulty" }
        ],
        intonationPatterns: [
          { pattern: "Excited rising ↗", example: "That sounds AMAZING!↗", meaning: "Showing enthusiasm" },
          { pattern: "Falling ↘", example: "I play tennis on Tuesdays.↘", meaning: "Stating a fact" },
          { pattern: "List intonation", example: "I like swimming↗, hiking↗, and photography↘", meaning: "Listing hobbies" }
        ]
      },
      
      culturalNote: {
        title: "Hobbies and Social Life in English-Speaking Countries",
        titleEs: "Hobbies y Vida Social en Países Angloparlantes",
        content: "Hobbies are an important topic for small talk in English-speaking countries. When meeting new people, 'What do you do for fun?' or 'Any hobbies?' are common questions. People often join clubs or groups for their hobbies - book clubs, hiking groups, photography societies. In the UK, pub quizzes and gardening are popular pastimes. In the US, sports fandom (being a big fan of a team) is a huge part of social life. Saying 'I'm into...' is very casual and common among younger speakers. When someone shares a hobby, it's polite to show interest by asking follow-up questions. 'That's cool!' or 'That sounds interesting!' are good responses. Unlike some cultures, it's perfectly fine to say you enjoy solitary hobbies like reading or video games - people won't think it's strange.",
        contentEs: "Los hobbies son un tema importante para conversación casual en países angloparlantes. Al conocer gente nueva, '¿What do you do for fun?' o '¿Any hobbies?' son preguntas comunes. La gente a menudo se une a clubes o grupos por sus hobbies - clubes de lectura, grupos de senderismo, sociedades de fotografía. En UK, los pub quizzes y la jardinería son pasatiempos populares. En EEUU, ser fan de deportes (ser un gran seguidor de un equipo) es una gran parte de la vida social. Decir 'I'm into...' es muy casual y común entre hablantes jóvenes. Cuando alguien comparte un hobby, es educado mostrar interés haciendo preguntas de seguimiento. '¡That's cool!' o '¡That sounds interesting!' son buenas respuestas.",
        regions: ["US", "UK"],
        formalityLevel: "informal"
      },
      
      consolidationQuiz: {
        id: "l2t8_quiz",
        title: "Hobbies and Free Time Mastery Check",
        titleEs: "Prueba de Dominio de Hobbies y Tiempo Libre",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l2t8_q1",
            type: "multiple-choice",
            question: "Complete: I _____ yoga every morning.",
            questionEs: "Completa: I _____ yoga every morning.",
            options: ["play", "go", "do", "make"],
            correctAnswer: "do",
            explanation: "Do + yoga, karate, exercise, martial arts.",
            explanationEs: "Do + yoga, karate, exercise, artes marciales.",
            points: 10
          },
          {
            id: "l2t8_q2",
            type: "multiple-choice",
            question: "Complete: She plays _____ piano beautifully.",
            questionEs: "Completa: She plays _____ piano beautifully.",
            options: ["a", "the", "-", "an"],
            correctAnswer: "the",
            explanation: "Play THE + musical instrument: the piano, the guitar, the violin.",
            explanationEs: "Play THE + instrumento musical: the piano, the guitar, the violin.",
            points: 10
          },
          {
            id: "l2t8_q3",
            type: "multiple-choice",
            question: "This book is so _____! I love it!",
            questionEs: "¡Este libro es tan _____! ¡Me encanta!",
            options: ["interested", "interesting", "interestingly", "interest"],
            correctAnswer: "interesting",
            explanation: "-ING = what causes the feeling. The book causes interest.",
            explanationEs: "-ING = lo que causa el sentimiento. El libro causa interés.",
            points: 10
          },
          {
            id: "l2t8_q4",
            type: "multiple-choice",
            question: "I'm _____ in photography.",
            questionEs: "Estoy _____ en fotografía.",
            options: ["interesting", "interested", "interest", "interestingly"],
            correctAnswer: "interested",
            explanation: "-ED = how you feel. You feel the interest.",
            explanationEs: "-ED = cómo te sientes. Tú sientes el interés.",
            points: 10
          },
          {
            id: "l2t8_q5",
            type: "fill-blank",
            question: "I like _____ (play) tennis. (gerund form)",
            questionEs: "Me gusta _____ (play) tenis. (forma gerundio)",
            correctAnswer: ["playing"],
            explanation: "After 'like': like + verb-ing OR like + to + verb.",
            explanationEs: "Después de 'like': like + verbo-ing O like + to + verbo.",
            points: 10
          },
          {
            id: "l2t8_q6",
            type: "true-false",
            question: "You say 'I play hiking' for the outdoor activity.",
            questionEs: "Dices 'I play hiking' para la actividad al aire libre.",
            correctAnswer: "false",
            explanation: "Go + verb-ing: go hiking, go swimming, go shopping.",
            explanationEs: "Go + verbo-ing: go hiking, go swimming, go shopping.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l2t8_production",
        title: "Tell Someone About Your Hobbies",
        titleEs: "Cuéntale a Alguien Sobre tus Hobbies",
        type: "spoken",
        scenario: "You're meeting a new colleague and they ask about your free time.",
        scenarioEs: "Conoces a un nuevo colega y te pregunta sobre tu tiempo libre.",
        prompts: [
          {
            id: "l2t8_prod1",
            instruction: "Say what you're interested in",
            instructionEs: "Di qué te interesa",
            hints: ["I'm into...", "I'm interested in..."],
            hintsEs: ["Me gusta/interesa...", "Estoy interesado en..."],
            requiredElements: ["interest expression"]
          },
          {
            id: "l2t8_prod2",
            instruction: "Mention an activity using play, go, or do",
            instructionEs: "Menciona una actividad usando play, go o do",
            hints: ["I play...", "I go...", "I do..."],
            hintsEs: ["Yo juego/toco...", "Voy a...", "Hago..."],
            requiredElements: ["correct verb + activity"]
          },
          {
            id: "l2t8_prod3",
            instruction: "Say when or how often you do it",
            instructionEs: "Di cuándo o con qué frecuencia lo haces",
            hints: ["Every weekend...", "On Saturdays..."],
            hintsEs: ["Cada fin de semana...", "Los sábados..."],
            requiredElements: ["time expression"]
          },
          {
            id: "l2t8_prod4",
            instruction: "Ask your colleague about their hobbies",
            instructionEs: "Pregúntale a tu colega sobre sus hobbies",
            hints: ["What do you do for fun?", "What about you?"],
            hintsEs: ["¿Qué haces para divertirte?", "¿Y tú?"],
            requiredElements: ["question about hobbies"]
          }
        ],
        modelResponse: "I'm really into music - I play the guitar and I'm learning the piano too. I also enjoy being active, so I go swimming twice a week and I do yoga in the mornings. What do you do for fun? Are you into any sports?",
        modelResponseEs: "Me gusta mucho la música - toco la guitarra y estoy aprendiendo piano también. También disfruto ser activo, así que voy a nadar dos veces por semana y hago yoga por las mañanas. ¿Qué haces para divertirte? ¿Te gustan algunos deportes?",
        evaluationCriteria: [
          "Used 'I'm into...' or similar correctly",
          "Used play/go/do correctly with activity",
          "Included frequency or time",
          "Asked about their hobbies naturally"
        ],
        evaluationCriteriaEs: [
          "Usaste 'I'm into...' o similar correctamente",
          "Usaste play/go/do correctamente con actividad",
          "Incluiste frecuencia o tiempo",
          "Preguntaste sobre sus hobbies de forma natural"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l2t8_n1", word: "hobby", translation: "pasatiempo", type: "noun", definition: "activity done for enjoyment", definitionEs: "actividad hecha por placer", example: "My hobby is reading.", exampleEs: "Mi pasatiempo es leer.", related: [], difficulty: 1 },
          { id: "l2t8_n2", word: "sport", translation: "deporte", type: "noun", definition: "physical activity or game", definitionEs: "actividad física o juego", example: "Football is a popular sport.", exampleEs: "El fútbol es un deporte popular.", related: [], difficulty: 1 },
          { id: "l2t8_n3", word: "music", translation: "música", type: "noun", definition: "sounds organized pleasantly", definitionEs: "sonidos organizados agradablemente", example: "I listen to music every day.", exampleEs: "Escucho música todos los días.", related: [], difficulty: 1 },
          { id: "l2t8_n4", word: "movie", translation: "película", type: "noun", definition: "a film shown in cinema", definitionEs: "una película mostrada en el cine", example: "Let's watch a movie tonight.", exampleEs: "Veamos una película esta noche.", related: ["film"], difficulty: 1 },
          { id: "l2t8_n5", word: "game", translation: "juego", type: "noun", definition: "activity for entertainment", definitionEs: "actividad para entretenimiento", example: "We played a fun game.", exampleEs: "Jugamos un juego divertido.", related: [], difficulty: 1 },
          { id: "l2t8_n6", word: "concert", translation: "concierto", type: "noun", definition: "live music performance", definitionEs: "presentación de música en vivo", example: "I went to a concert last night.", exampleEs: "Fui a un concierto anoche.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l2t8_v1", word: "play", translation: "jugar/tocar", type: "verb", definition: "to engage in games or music", definitionEs: "participar en juegos o música", example: "I play guitar in my free time.", exampleEs: "Toco guitarra en mi tiempo libre.", related: [], difficulty: 1 },
          { id: "l2t8_v2", word: "read", translation: "leer", type: "verb", definition: "to look at and understand text", definitionEs: "mirar y entender texto", example: "I read books every night.", exampleEs: "Leo libros cada noche.", related: [], difficulty: 1 },
          { id: "l2t8_v3", word: "watch", translation: "ver/mirar", type: "verb", definition: "to look at something for a period", definitionEs: "mirar algo por un período", example: "I watch TV after dinner.", exampleEs: "Veo TV después de cenar.", related: [], difficulty: 1 },
          { id: "l2t8_v4", word: "listen", translation: "escuchar", type: "verb", definition: "to pay attention to sounds", definitionEs: "prestar atención a sonidos", example: "I listen to podcasts.", exampleEs: "Escucho podcasts.", related: [], difficulty: 1 },
          { id: "l2t8_v5", word: "collect", translation: "coleccionar", type: "verb", definition: "to gather items as a hobby", definitionEs: "juntar artículos como hobby", example: "I collect stamps from different countries.", exampleEs: "Colecciono estampillas de diferentes países.", related: [], difficulty: 1 },
          { id: "l2t8_v6", word: "draw", translation: "dibujar", type: "verb", definition: "to make pictures with pencil", definitionEs: "hacer dibujos con lápiz", example: "I like to draw in my free time.", exampleEs: "Me gusta dibujar en mi tiempo libre.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l2t8_a1", word: "interesting", translation: "interesante", type: "adjective", definition: "attracting attention", definitionEs: "que atrae atención", example: "This book is very interesting.", exampleEs: "Este libro es muy interesante.", related: [], difficulty: 1 },
          { id: "l2t8_a2", word: "boring", translation: "aburrido", type: "adjective", definition: "not interesting", definitionEs: "no interesante", example: "That movie was boring.", exampleEs: "Esa película fue aburrida.", related: [], difficulty: 1 },
          { id: "l2t8_a3", word: "fun", translation: "divertido", type: "adjective", definition: "enjoyable", definitionEs: "disfrutable", example: "Playing games is fun.", exampleEs: "Jugar juegos es divertido.", related: [], difficulty: 1 },
          { id: "l2t8_a4", word: "relaxing", translation: "relajante", type: "adjective", definition: "making you feel calm", definitionEs: "que te hace sentir tranquilo", example: "Reading is very relaxing.", exampleEs: "Leer es muy relajante.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l2t8_e1", word: "In my free time...", translation: "En mi tiempo libre...", type: "expression", definition: "talking about leisure", definitionEs: "hablando de ocio", example: "In my free time, I go hiking.", exampleEs: "En mi tiempo libre, voy de senderismo.", related: [], difficulty: 1 },
          { id: "l2t8_e2", word: "I'm into...", translation: "Me gusta mucho...", type: "expression", definition: "expressing interest", definitionEs: "expresando interés", example: "I'm into photography.", exampleEs: "Me gusta mucho la fotografía.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 9,
      title: "Transportation",
      titleEs: "Transporte",
      introduction: {
        title: "🚌 Transporte en Inglés",
        explanation: "Saber usar el transporte público es esencial cuando viajas. Aprenderás a comprar billetes, preguntar horarios y entender anuncios de transporte.",
        keyPoints: [
          "Medios de transporte: bus, train, taxi, plane (avión), subway/underground (metro)",
          "Tipos de billete: single/one-way (ida), return/round-trip (ida y vuelta)",
          "Para preguntar: 'When does the next train leave?' / 'Which platform?'",
          "'Take' para transporte público: 'take the bus', 'take a taxi'"
        ],
        examples: [
          { english: "A return to Manchester, please.", spanish: "Un billete de ida y vuelta a Manchester, por favor.", explanation: "Comprando billete" },
          { english: "What time does the train arrive?", spanish: "¿A qué hora llega el tren?", explanation: "Preguntando horario" },
          { english: "I missed my bus!", spanish: "¡Perdí mi autobús!", explanation: "Expresando que no alcanzaste el transporte" }
        ],
        tips: [
          "💡 'Subway' (US) = 'Underground' o 'Tube' (UK) = Metro",
          "💡 'Catch a train' y 'Take a train' significan lo mismo",
          "💡 'Platform' (andén de tren) vs 'Stop' (parada de bus)"
        ],
        whenToUse: [
          "Comprando billete: 'A single/return to..., please'",
          "Preguntando hora: 'What time does the train leave/arrive?'",
          "Preguntando lugar: 'Which platform/stop?'"
        ],
        whenNotToUse: [
          "No digas 'A ticket to go and return': Di 'A return ticket' ✓",
          "No digas 'I lost the bus': Di 'I missed the bus' ✓ (miss = fail to catch)"
        ]
      },
      objectives: [
        "Vocabulario de transporte",
        "Comprar billetes",
        "Dar y seguir direcciones"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "Usas el transporte para llegar a donde practicas tus hobbies.",
      connectionToNext: "El Present Continuous te ayudará a describir lo que está pasando ahora mientras viajas.",
      grammarTheoryIds: ['a2-prepositions-time-place', 'a1-present-simple'],
      
      commonMistakes: [
        {
          id: "l2t9_cm1",
          wrong: "I lost the bus.",
          correct: "I missed the bus.",
          explanation: "'Miss' = fail to catch. 'Lose' = can't find something you had.",
          explanationEs: "'Miss' = no alcanzar. 'Lose' = no encontrar algo que tenías.",
          category: "vocabulary"
        },
        {
          id: "l2t9_cm2",
          wrong: "I go to work by foot.",
          correct: "I go to work ON foot.",
          explanation: "Use 'on foot' for walking, but 'by + vehicle' (by bus, by train).",
          explanationEs: "Usa 'on foot' para caminar, pero 'by + vehículo' (by bus, by train).",
          category: "preposition"
        },
        {
          id: "l2t9_cm3",
          wrong: "I take the bus to the work.",
          correct: "I take the bus to work.",
          explanation: "No article before work, home, school when talking about purpose.",
          explanationEs: "Sin artículo antes de work, home, school cuando hablas del propósito.",
          category: "article"
        },
        {
          id: "l2t9_cm4",
          wrong: "The train arrives to London.",
          correct: "The train arrives IN/AT London.",
          explanation: "'Arrive IN' for cities/countries. 'Arrive AT' for stations/airports.",
          explanationEs: "'Arrive IN' para ciudades/países. 'Arrive AT' para estaciones/aeropuertos.",
          category: "preposition"
        },
        {
          id: "l2t9_cm5",
          wrong: "What time leaves the train?",
          correct: "What time does the train leave?",
          explanation: "Use auxiliary 'does' in questions: does + subject + base verb.",
          explanationEs: "Usa auxiliar 'does' en preguntas: does + sujeto + verbo base.",
          category: "question formation"
        }
      ],
      
      exercises: [
        {
          id: "l2t9_ex1",
          type: "gap-fill",
          title: "Transportation Prepositions",
          titleEs: "Preposiciones de Transporte",
          instruction: "Complete with the correct preposition.",
          instructionEs: "Completa con la preposición correcta.",
          difficulty: 1,
          items: [
            { id: "l2t9_ex1_1", prompt: "I go to work _____ bus.", correctAnswer: "by", hint: "by + vehicle", hintEs: "by + vehículo" },
            { id: "l2t9_ex1_2", prompt: "She goes to school _____ foot.", correctAnswer: "on", hint: "on foot = walking", hintEs: "on foot = caminando" },
            { id: "l2t9_ex1_3", prompt: "The train arrives _____ the station at 3 PM.", correctAnswer: "at", hint: "arrive AT buildings/stations", hintEs: "arrive AT edificios/estaciones" },
            { id: "l2t9_ex1_4", prompt: "We're flying _____ New York tomorrow.", correctAnswer: "to", hint: "fly TO destination", hintEs: "fly TO destino" }
          ]
        },
        {
          id: "l2t9_ex2",
          type: "gap-fill",
          title: "Buying Tickets",
          titleEs: "Comprando Billetes",
          instruction: "Complete the ticket buying dialogue.",
          instructionEs: "Completa el diálogo de compra de billetes.",
          difficulty: 1,
          items: [
            { id: "l2t9_ex2_1", prompt: "A _____ to London, please. (one-way)", correctAnswer: "single", hint: "UK: single, US: one-way", hintEs: "UK: single, US: one-way" },
            { id: "l2t9_ex2_2", prompt: "A _____ to Paris, please. (round trip)", correctAnswer: "return", hint: "UK: return, US: round-trip", hintEs: "UK: return, US: round-trip" },
            { id: "l2t9_ex2_3", prompt: "Which _____ does the train leave from?", correctAnswer: "platform", hint: "Where you wait for trains", hintEs: "Donde esperas los trenes" },
            { id: "l2t9_ex2_4", prompt: "Is there a direct _____ or do I need to change?", correctAnswer: "train/service", hint: "Without stopping", hintEs: "Sin parar" }
          ]
        },
        {
          id: "l2t9_ex3",
          type: "matching",
          title: "Transport Vocabulary UK vs US",
          titleEs: "Vocabulario de Transporte UK vs US",
          instruction: "Match British and American terms.",
          instructionEs: "Relaciona términos británicos y americanos.",
          difficulty: 1,
          items: [
            { id: "l2t9_ex3_1", prompt: "underground/tube (UK)", correctAnswer: "subway (US)", hint: "Metro", hintEs: "Metro" },
            { id: "l2t9_ex3_2", prompt: "return ticket (UK)", correctAnswer: "round-trip ticket (US)", hint: "Ida y vuelta", hintEs: "Ida y vuelta" },
            { id: "l2t9_ex3_3", prompt: "single ticket (UK)", correctAnswer: "one-way ticket (US)", hint: "Solo ida", hintEs: "Solo ida" },
            { id: "l2t9_ex3_4", prompt: "lorry (UK)", correctAnswer: "truck (US)", hint: "Vehículo grande de carga", hintEs: "Vehículo grande de carga" }
          ]
        },
        {
          id: "l2t9_ex4",
          type: "error-correction",
          title: "Fix the Transport Sentences",
          titleEs: "Corrige las Oraciones de Transporte",
          instruction: "Find and correct the error.",
          instructionEs: "Encuentra y corrige el error.",
          difficulty: 1,
          items: [
            { id: "l2t9_ex4_1", prompt: "I lost the bus this morning.", correctAnswer: "I missed the bus this morning.", explanation: "Miss = fail to catch transport.", explanationEs: "Miss = no alcanzar el transporte." },
            { id: "l2t9_ex4_2", prompt: "What time leaves the train?", correctAnswer: "What time does the train leave?", explanation: "Use 'does' in questions.", explanationEs: "Usa 'does' en preguntas." },
            { id: "l2t9_ex4_3", prompt: "I go to work by foot.", correctAnswer: "I go to work on foot.", explanation: "'On foot' for walking.", explanationEs: "'On foot' para caminar." },
            { id: "l2t9_ex4_4", prompt: "The train arrives to London at 5.", correctAnswer: "The train arrives in London at 5.", explanation: "Arrive IN cities.", explanationEs: "Arrive IN ciudades." }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l2t9_dialogue",
        title: "At the Train Station",
        titleEs: "En la Estación de Tren",
        context: "A traveler buys a ticket to Manchester.",
        contextEs: "Un viajero compra un billete a Manchester.",
        speakers: [
          { id: "s1", name: "Ticket Agent", role: "Station employee" },
          { id: "s2", name: "Traveler", role: "Buying a ticket" }
        ],
        lines: [
          { speakerId: "s2", text: "Hello. A return to Manchester, please.", textEs: "Hola. Un billete de ida y vuelta a Manchester, por favor.", note: "Return = round-trip", noteEs: "Return = ida y vuelta" },
          { speakerId: "s1", text: "Certainly. When are you traveling?", textEs: "Por supuesto. ¿Cuándo viaja?", note: "Standard question", noteEs: "Pregunta estándar" },
          { speakerId: "s2", text: "I'm leaving today and coming back on Friday.", textEs: "Salgo hoy y vuelvo el viernes.", note: "Present continuous for plans", noteEs: "Presente continuo para planes" },
          { speakerId: "s1", text: "The next train to Manchester leaves at 10:45 from platform 8.", textEs: "El próximo tren a Manchester sale a las 10:45 del andén 8.", note: "Giving schedule info", noteEs: "Dando información de horario" },
          { speakerId: "s2", text: "Is it a direct train, or do I need to change?", textEs: "¿Es un tren directo, o necesito hacer transbordo?", note: "Asking about connections", noteEs: "Preguntando sobre conexiones" },
          { speakerId: "s1", text: "It's direct. You'll arrive in Manchester at 12:30.", textEs: "Es directo. Llegará a Manchester a las 12:30.", note: "Arrive IN city", noteEs: "Arrive IN ciudad" },
          { speakerId: "s2", text: "Perfect. How much is that?", textEs: "Perfecto. ¿Cuánto es?", note: "Asking the price", noteEs: "Preguntando el precio" },
          { speakerId: "s1", text: "That's £45.50. Would you like to pay by card?", textEs: "Son £45.50. ¿Desea pagar con tarjeta?", note: "Standard checkout", noteEs: "Cobro estándar" },
          { speakerId: "s2", text: "Yes, please. Here you are.", textEs: "Sí, por favor. Aquí tiene.", note: "Paying", noteEs: "Pagando" },
          { speakerId: "s1", text: "Here's your ticket. Platform 8 is through the barriers on your left.", textEs: "Aquí está su billete. El andén 8 está pasando las barreras a su izquierda.", note: "Giving directions", noteEs: "Dando direcciones" },
          { speakerId: "s2", text: "Thank you. Have a nice day!", textEs: "Gracias. ¡Que tenga un buen día!", note: "Polite closing", noteEs: "Cierre educado" }
        ],
        keyPhrases: [
          { phrase: "A return to..., please", translation: "Un billete de ida y vuelta a..., por favor", usage: "Buying round-trip ticket" },
          { phrase: "Is it a direct train?", translation: "¿Es un tren directo?", usage: "Asking about connections" },
          { phrase: "What time does the train leave?", translation: "¿A qué hora sale el tren?", usage: "Asking departure time" },
          { phrase: "Which platform?", translation: "¿Qué andén?", usage: "Asking where to go" }
        ],
        variations: [
          { original: "A return to Manchester", alternative: "A round-trip to Manchester", note: "US style" },
          { original: "Is it a direct train?", alternative: "Is this a nonstop service?", note: "Alternative phrasing" },
          { original: "How much is that?", alternative: "What's the total?", note: "More casual" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/eɪ/",
            description: "The sound in 'train' and 'station'",
            descriptionEs: "El sonido en 'train' y 'station'",
            examples: [
              { word: "train", transcription: "/treɪn/" },
              { word: "station", transcription: "/ˈsteɪ.ʃən/" },
              { word: "late", transcription: "/leɪt/" }
            ],
            tips: ["Like saying 'ay' in Spanish 'hay'", "Mouth starts open, then closes"]
          },
          {
            symbol: "/aɪ/",
            description: "The sound in 'arrive' and 'drive'",
            descriptionEs: "El sonido en 'arrive' y 'drive'",
            examples: [
              { word: "arrive", transcription: "/əˈraɪv/" },
              { word: "drive", transcription: "/draɪv/" },
              { word: "flight", transcription: "/flaɪt/" }
            ],
            tips: ["Like 'ah' + 'ee' together", "Similar to Spanish 'ai'"]
          }
        ],
        commonProblems: [
          { word: "bus", wrong: "BOOS", correct: "BUS (/bʌs/)", tip: "Short 'u', not long 'oo'" },
          { word: "delayed", wrong: "de-LAY-ed (3 syllables)", correct: "de-LAYD (2 syllables)", tip: "The -ed is just /d/, not /ɪd/" },
          { word: "platform", wrong: "plat-FORM", correct: "PLAT-form", tip: "Stress on first syllable" }
        ],
        minimalPairs: [
          { word1: "train", word2: "plane", soundDifference: "/tr/ vs /pl/ - both have the same /eɪ/ sound" },
          { word1: "miss", word2: "mess", soundDifference: "/ɪ/ vs /e/ - I miss my train / What a mess!" },
          { word1: "leave", word2: "live", soundDifference: "/iː/ vs /ɪ/ - I leave at 5 / I live here" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "Is it a direct TRAIN?↗", meaning: "Yes/no question" },
          { pattern: "Falling ↘", example: "The train leaves at TEN.↘", meaning: "Giving information" },
          { pattern: "Urgency", example: "Hurry! We'll MISS the train!", meaning: "Expressing urgency" }
        ]
      },
      
      culturalNote: {
        title: "Public Transport in English-Speaking Countries",
        titleEs: "Transporte Público en Países Angloparlantes",
        content: "Public transport culture varies greatly. In the UK, queuing (standing in line) is very important - people get genuinely annoyed if you skip the queue! Train tickets are often cheaper if booked in advance online. The London Underground (the 'Tube') has an 'Oyster card' for easy payment - similar to a transit card. In the US, public transport is less common in most cities (except NYC, Chicago, and a few others), and many people drive. Uber and Lyft are very popular. In the UK, 'mind the gap' is the famous announcement on the Tube warning passengers about the space between the train and platform. Tipping taxi drivers is common (10-15% in the US, rounding up in the UK). If you're running late, saying 'Sorry, my train was delayed' is a very British excuse! Note: 'Subway' in Britain often means an underground pedestrian passage, not the metro.",
        contentEs: "La cultura del transporte público varía mucho. En UK, hacer cola es muy importante - la gente se molesta genuinamente si te saltas la fila. Los billetes de tren a menudo son más baratos si los reservas con anticipación online. El Underground de Londres (el 'Tube') tiene una 'Oyster card' para pago fácil. En EEUU, el transporte público es menos común en la mayoría de ciudades (excepto NYC, Chicago, y algunas otras), y muchas personas conducen. Uber y Lyft son muy populares. En UK, 'mind the gap' es el famoso anuncio del Tube advirtiendo sobre el espacio entre el tren y la plataforma. Dar propina a taxistas es común (10-15% en EEUU, redondear hacia arriba en UK). Si llegas tarde, decir 'Sorry, my train was delayed' es una excusa muy británica!",
        regions: ["UK", "US"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l2t9_quiz",
        title: "Transportation Mastery Check",
        titleEs: "Prueba de Dominio de Transporte",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l2t9_q1",
            type: "multiple-choice",
            question: "How do you say you didn't catch the bus?",
            questionEs: "¿Cómo dices que no alcanzaste el bus?",
            options: ["I lost the bus.", "I missed the bus.", "I failed the bus.", "I forgot the bus."],
            correctAnswer: "I missed the bus.",
            explanation: "'Miss' = fail to catch transport. 'Lose' = can't find something.",
            explanationEs: "'Miss' = no alcanzar transporte. 'Lose' = no encontrar algo.",
            points: 10
          },
          {
            id: "l2t9_q2",
            type: "multiple-choice",
            question: "Complete: I go to work _____ foot.",
            questionEs: "Completa: I go to work _____ foot.",
            options: ["by", "on", "with", "in"],
            correctAnswer: "on",
            explanation: "'On foot' for walking. 'By + vehicle' for transport.",
            explanationEs: "'On foot' para caminar. 'By + vehículo' para transporte.",
            points: 10
          },
          {
            id: "l2t9_q3",
            type: "multiple-choice",
            question: "You want a ticket to go and come back. You say:",
            questionEs: "Quieres un billete de ida y vuelta. Dices:",
            options: ["A single to London", "A return to London", "A double to London", "A back ticket to London"],
            correctAnswer: "A return to London",
            explanation: "Return = round-trip ticket. Single = one-way ticket.",
            explanationEs: "Return = billete de ida y vuelta. Single = billete de ida.",
            points: 10
          },
          {
            id: "l2t9_q4",
            type: "fill-blank",
            question: "What time _____ the train leave?",
            questionEs: "What time _____ the train leave?",
            correctAnswer: ["does"],
            explanation: "Questions: What time + does + subject + base verb.",
            explanationEs: "Preguntas: What time + does + sujeto + verbo base.",
            points: 10
          },
          {
            id: "l2t9_q5",
            type: "multiple-choice",
            question: "'Subway' in the US is called _____ in the UK.",
            questionEs: "'Subway' en EEUU se llama _____ en UK.",
            options: ["Metro", "Underground/Tube", "Train", "Bus"],
            correctAnswer: "Underground/Tube",
            explanation: "US: subway. UK: underground or the Tube (in London).",
            explanationEs: "EEUU: subway. UK: underground o the Tube (en Londres).",
            points: 10
          },
          {
            id: "l2t9_q6",
            type: "true-false",
            question: "You say 'The train arrives to London' for the destination.",
            questionEs: "Dices 'The train arrives to London' para el destino.",
            correctAnswer: "false",
            explanation: "Arrive IN cities: The train arrives IN London. Arrive AT stations.",
            explanationEs: "Arrive IN ciudades: The train arrives IN London. Arrive AT estaciones.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l2t9_production",
        title: "Buy a Train Ticket",
        titleEs: "Compra un Billete de Tren",
        type: "spoken",
        scenario: "You need to buy a train ticket from London to Edinburgh.",
        scenarioEs: "Necesitas comprar un billete de tren de Londres a Edimburgo.",
        prompts: [
          {
            id: "l2t9_prod1",
            instruction: "Ask for the ticket you need (type and destination)",
            instructionEs: "Pide el billete que necesitas (tipo y destino)",
            hints: ["A return/single to..., please"],
            hintsEs: ["Un billete de ida y vuelta/solo ida a..., por favor"],
            requiredElements: ["ticket type + destination"]
          },
          {
            id: "l2t9_prod2",
            instruction: "Ask about the departure time",
            instructionEs: "Pregunta sobre la hora de salida",
            hints: ["What time does the train leave?", "When is the next train?"],
            hintsEs: ["¿A qué hora sale el tren?", "¿Cuándo es el próximo tren?"],
            requiredElements: ["time question"]
          },
          {
            id: "l2t9_prod3",
            instruction: "Ask if it's direct or if you need to change",
            instructionEs: "Pregunta si es directo o si necesitas hacer transbordo",
            hints: ["Is it a direct train?", "Do I need to change?"],
            hintsEs: ["¿Es un tren directo?", "¿Necesito hacer transbordo?"],
            requiredElements: ["connection question"]
          },
          {
            id: "l2t9_prod4",
            instruction: "Ask which platform and say how you'll pay",
            instructionEs: "Pregunta qué andén y di cómo pagarás",
            hints: ["Which platform?", "Can I pay by card?"],
            hintsEs: ["¿Qué andén?", "¿Puedo pagar con tarjeta?"],
            requiredElements: ["platform question + payment"]
          }
        ],
        modelResponse: "Hello, a return to Edinburgh, please. What time does the next train leave? Is it a direct train, or do I need to change? How long does it take? Which platform does it leave from? Can I pay by card?",
        modelResponseEs: "Hola, un billete de ida y vuelta a Edimburgo, por favor. ¿A qué hora sale el próximo tren? ¿Es un tren directo, o necesito hacer transbordo? ¿Cuánto tarda? ¿De qué andén sale? ¿Puedo pagar con tarjeta?",
        evaluationCriteria: [
          "Asked for correct ticket type",
          "Asked about departure time correctly",
          "Asked about direct/connection",
          "Asked about platform"
        ],
        evaluationCriteriaEs: [
          "Pediste el tipo de billete correcto",
          "Preguntaste sobre hora de salida correctamente",
          "Preguntaste sobre directo/transbordo",
          "Preguntaste sobre el andén"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l2t9_n1", word: "bus", translation: "autobús", type: "noun", definition: "large vehicle for passengers", definitionEs: "vehículo grande para pasajeros", example: "I take the bus to work.", exampleEs: "Tomo el bus para ir al trabajo.", related: [], difficulty: 1 },
          { id: "l2t9_n2", word: "train", translation: "tren", type: "noun", definition: "vehicle on rails", definitionEs: "vehículo sobre rieles", example: "The train arrives at 10 AM.", exampleEs: "El tren llega a las 10 AM.", related: [], difficulty: 1 },
          { id: "l2t9_n3", word: "taxi", translation: "taxi", type: "noun", definition: "car you pay to ride in", definitionEs: "auto en el que pagas para viajar", example: "Let's take a taxi.", exampleEs: "Tomemos un taxi.", related: ["cab"], difficulty: 1 },
          { id: "l2t9_n4", word: "bicycle", translation: "bicicleta", type: "noun", definition: "two-wheeled vehicle", definitionEs: "vehículo de dos ruedas", example: "I ride my bicycle to school.", exampleEs: "Voy a la escuela en bicicleta.", related: ["bike"], difficulty: 1 },
          { id: "l2t9_n5", word: "ticket", translation: "billete", type: "noun", definition: "paper allowing travel", definitionEs: "papel que permite viajar", example: "Where can I buy a ticket?", exampleEs: "¿Dónde puedo comprar un billete?", related: [], difficulty: 1 },
          { id: "l2t9_n6", word: "platform", translation: "andén", type: "noun", definition: "where you wait for trains", definitionEs: "donde esperas los trenes", example: "The train leaves from platform 5.", exampleEs: "El tren sale del andén 5.", related: [], difficulty: 1 },
          { id: "l2t9_n7", word: "stop", translation: "parada", type: "noun", definition: "where buses stop", definitionEs: "donde paran los buses", example: "The bus stop is nearby.", exampleEs: "La parada de bus está cerca.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l2t9_v1", word: "arrive", translation: "llegar", type: "verb", definition: "to reach a place", definitionEs: "llegar a un lugar", example: "We arrive at noon.", exampleEs: "Llegamos al mediodía.", related: [], difficulty: 1 },
          { id: "l2t9_v2", word: "leave", translation: "salir", type: "verb", definition: "to go away from", definitionEs: "irse de", example: "The train leaves at 3 PM.", exampleEs: "El tren sale a las 3 PM.", related: ["depart"], difficulty: 1 },
          { id: "l2t9_v3", word: "catch", translation: "tomar/coger", type: "verb", definition: "to get on transport", definitionEs: "subirse al transporte", example: "I need to catch the 8 o'clock bus.", exampleEs: "Necesito tomar el bus de las 8.", related: [], difficulty: 1 },
          { id: "l2t9_v4", word: "miss", translation: "perder", type: "verb", definition: "to fail to catch", definitionEs: "no alcanzar", example: "I missed my train!", exampleEs: "¡Perdí mi tren!", related: [], difficulty: 1 },
          { id: "l2t9_v5", word: "drive", translation: "conducir", type: "verb", definition: "to operate a vehicle", definitionEs: "manejar un vehículo", example: "Can you drive?", exampleEs: "¿Sabes conducir?", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l2t9_a1", word: "delayed", translation: "retrasado", type: "adjective", definition: "late", definitionEs: "tarde", example: "The train is delayed by 20 minutes.", exampleEs: "El tren está retrasado 20 minutos.", related: ["late"], difficulty: 1 },
          { id: "l2t9_a2", word: "crowded", translation: "lleno de gente", type: "adjective", definition: "with many people", definitionEs: "con muchas personas", example: "The bus is very crowded.", exampleEs: "El bus está muy lleno.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l2t9_e1", word: "A single to...", translation: "Un billete de ida a...", type: "expression", definition: "one-way ticket", definitionEs: "billete de ida", example: "A single to London, please.", exampleEs: "Un billete de ida a Londres, por favor.", related: [], difficulty: 1 },
          { id: "l2t9_e2", word: "A return to...", translation: "Un billete de ida y vuelta a...", type: "expression", definition: "round trip ticket", definitionEs: "billete de ida y vuelta", example: "A return to Paris, please.", exampleEs: "Un billete de ida y vuelta a París, por favor.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 10,
      title: "Present Continuous",
      titleEs: "Presente Continuo",
      introduction: {
        title: "🔄 Presente Continuo en Inglés",
        explanation: "El presente continuo describe acciones que están ocurriendo AHORA MISMO. Es diferente del presente simple que describe rutinas. Es como el gerundio en español.",
        keyPoints: [
          "Estructura: Subject + am/is/are + verbo-ING: 'I am reading', 'She is working'",
          "Negativos: Subject + am/is/are + NOT + verbo-ING: 'I'm not sleeping'",
          "Preguntas: Am/Is/Are + subject + verbo-ING?: 'Are you listening?'",
          "Palabras clave: right now, at the moment, currently, today",
          "Presente Simple (rutina): 'I work at 9' vs Presente Continuo (ahora): 'I'm working now'"
        ],
        examples: [
          { english: "I'm studying English right now.", spanish: "Estoy estudiando inglés ahora mismo.", explanation: "Acción en progreso" },
          { english: "She isn't working today.", spanish: "Ella no está trabajando hoy.", explanation: "Negativo" },
          { english: "What are you doing?", spanish: "¿Qué estás haciendo?", explanation: "Pregunta común" }
        ],
        tips: [
          "💡 Algunos verbos NO usan presente continuo: know, want, like, love, hate (verbos de estado)",
          "💡 'I'm loving it' es un eslogan, pero normalmente decimos 'I love it'",
          "💡 Para formar el -ING: 'make' → 'making' (sin la 'e'), 'run' → 'running' (dobla consonante)"
        ],
        whenToUse: [
          "Acciones en progreso AHORA: 'I'm reading a book right now.'",
          "Situaciones temporales: 'She's living in London this month.'",
          "Planes futuros confirmados: 'I'm meeting John tomorrow.'"
        ],
        whenNotToUse: [
          "NO con verbos de estado: 'I am knowing him' ❌ → 'I know him' ✓",
          "NO para rutinas: 'I am working every day' ❌ → 'I work every day' ✓",
          "NO con 'want/need/like': 'I am wanting coffee' ❌ → 'I want coffee' ✓"
        ]
      },
      objectives: [
        "Formar oraciones en presente continuo",
        "Describir acciones en progreso",
        "Diferenciar present simple y continuous"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "Ahora puedes describir lo que está pasando mientras viajas o esperas el transporte.",
      connectionToNext: "El presente continuo es fundamental para comunicarte sobre lo que ocurre ahora. En el siguiente nivel, expandirás con pasado y futuro.",
      grammarTheoryIds: ['a2-present-continuous'],
      
      commonMistakes: [
        {
          id: "l2t10_cm1",
          wrong: "I am knowing him.",
          correct: "I know him.",
          explanation: "'Know' is a stative verb - it describes a state, not an action. Use present simple.",
          explanationEs: "'Know' es un verbo de estado - describe un estado, no una acción. Usa presente simple.",
          category: "stative verbs"
        },
        {
          id: "l2t10_cm2",
          wrong: "She is work now.",
          correct: "She is working now.",
          explanation: "Present continuous: am/is/are + verb-ING. Don't forget the -ING!",
          explanationEs: "Presente continuo: am/is/are + verbo-ING. ¡No olvides el -ING!",
          category: "structure"
        },
        {
          id: "l2t10_cm3",
          wrong: "I am runing.",
          correct: "I am running.",
          explanation: "Short vowel + consonant: double the consonant (run → running, sit → sitting, swim → swimming).",
          explanationEs: "Vocal corta + consonante: dobla la consonante (run → running, sit → sitting, swim → swimming).",
          category: "spelling"
        },
        {
          id: "l2t10_cm4",
          wrong: "I am makeing dinner.",
          correct: "I am making dinner.",
          explanation: "Verbs ending in 'e': remove the 'e' before adding -ING (make → making, come → coming).",
          explanationEs: "Verbos que terminan en 'e': quita la 'e' antes de añadir -ING (make → making, come → coming).",
          category: "spelling"
        },
        {
          id: "l2t10_cm5",
          wrong: "What you are doing?",
          correct: "What are you doing?",
          explanation: "Questions: invert the subject and am/is/are. What ARE YOU doing?",
          explanationEs: "Preguntas: invierte el sujeto y am/is/are. What ARE YOU doing?",
          category: "question formation"
        }
      ],
      
      exercises: [
        {
          id: "l2t10_ex1",
          type: "gap-fill",
          title: "Form the Present Continuous",
          titleEs: "Forma el Presente Continuo",
          instruction: "Complete with the correct form of the present continuous.",
          instructionEs: "Completa con la forma correcta del presente continuo.",
          difficulty: 1,
          items: [
            { id: "l2t10_ex1_1", prompt: "I _____ (read) a book right now.", correctAnswer: "am reading", hint: "I + am + verb-ING", hintEs: "I + am + verbo-ING" },
            { id: "l2t10_ex1_2", prompt: "She _____ (work) at the moment.", correctAnswer: "is working", hint: "She + is + verb-ING", hintEs: "She + is + verbo-ING" },
            { id: "l2t10_ex1_3", prompt: "They _____ (play) in the park.", correctAnswer: "are playing", hint: "They + are + verb-ING", hintEs: "They + are + verbo-ING" },
            { id: "l2t10_ex1_4", prompt: "We _____ (not watch) TV.", correctAnswer: "aren't watching/are not watching", hint: "Negative: am/is/are + NOT + verb-ING", hintEs: "Negativo: am/is/are + NOT + verbo-ING" }
          ]
        },
        {
          id: "l2t10_ex2",
          type: "gap-fill",
          title: "Spelling Rules for -ING",
          titleEs: "Reglas de Ortografía para -ING",
          instruction: "Write the -ING form correctly.",
          instructionEs: "Escribe la forma -ING correctamente.",
          difficulty: 1,
          items: [
            { id: "l2t10_ex2_1", prompt: "run → _____", correctAnswer: "running", hint: "Double the 'n'", hintEs: "Dobla la 'n'" },
            { id: "l2t10_ex2_2", prompt: "make → _____", correctAnswer: "making", hint: "Remove the 'e'", hintEs: "Quita la 'e'" },
            { id: "l2t10_ex2_3", prompt: "swim → _____", correctAnswer: "swimming", hint: "Double the 'm'", hintEs: "Dobla la 'm'" },
            { id: "l2t10_ex2_4", prompt: "come → _____", correctAnswer: "coming", hint: "Remove the 'e'", hintEs: "Quita la 'e'" }
          ]
        },
        {
          id: "l2t10_ex3",
          type: "multiple-choice",
          title: "Present Simple or Present Continuous?",
          titleEs: "¿Presente Simple o Presente Continuo?",
          instruction: "Choose the correct sentence.",
          instructionEs: "Elige la oración correcta.",
          difficulty: 1,
          items: [
            { id: "l2t10_ex3_1", prompt: "Routine (every day)", correctAnswer: "I work every day.", options: ["I work every day.", "I am working every day."], hint: "Routines = Present Simple", hintEs: "Rutinas = Presente Simple" },
            { id: "l2t10_ex3_2", prompt: "Right now", correctAnswer: "She is cooking now.", options: ["She cooks now.", "She is cooking now."], hint: "Now = Present Continuous", hintEs: "Ahora = Presente Continuo" },
            { id: "l2t10_ex3_3", prompt: "State verb (know)", correctAnswer: "I know him.", options: ["I am knowing him.", "I know him."], hint: "State verbs = always Simple", hintEs: "Verbos de estado = siempre Simple" },
            { id: "l2t10_ex3_4", prompt: "At the moment", correctAnswer: "They are studying.", options: ["They study.", "They are studying."], hint: "At the moment = Continuous", hintEs: "At the moment = Continuo" }
          ]
        },
        {
          id: "l2t10_ex4",
          type: "error-correction",
          title: "Fix the Present Continuous",
          titleEs: "Corrige el Presente Continuo",
          instruction: "Find and correct the error.",
          instructionEs: "Encuentra y corrige el error.",
          difficulty: 1,
          items: [
            { id: "l2t10_ex4_1", prompt: "She is work now.", correctAnswer: "She is working now.", explanation: "Need: is + verb-ING.", explanationEs: "Necesitas: is + verbo-ING." },
            { id: "l2t10_ex4_2", prompt: "I am runing fast.", correctAnswer: "I am running fast.", explanation: "Run → running (double 'n').", explanationEs: "Run → running (dobla 'n')." },
            { id: "l2t10_ex4_3", prompt: "What you are doing?", correctAnswer: "What are you doing?", explanation: "Invert: are you.", explanationEs: "Invierte: are you." },
            { id: "l2t10_ex4_4", prompt: "I am wanting coffee.", correctAnswer: "I want coffee.", explanation: "'Want' is a stative verb - use Simple.", explanationEs: "'Want' es verbo de estado - usa Simple." }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l2t10_dialogue",
        title: "A Phone Call",
        titleEs: "Una Llamada Telefónica",
        context: "Sarah calls her friend Mike to see what he's doing.",
        contextEs: "Sarah llama a su amigo Mike para ver qué está haciendo.",
        speakers: [
          { id: "s1", name: "Sarah", role: "Calling" },
          { id: "s2", name: "Mike", role: "At home" }
        ],
        lines: [
          { speakerId: "s1", text: "Hi Mike! What are you doing right now?", textEs: "¡Hola Mike! ¿Qué estás haciendo ahora mismo?", note: "Standard question", noteEs: "Pregunta estándar" },
          { speakerId: "s2", text: "Hey Sarah! I'm watching TV at the moment. Why?", textEs: "¡Hola Sarah! Estoy viendo TV en este momento. ¿Por qué?", note: "Describing current action", noteEs: "Describiendo acción actual" },
          { speakerId: "s1", text: "I'm thinking about going to the mall. Want to come?", textEs: "Estoy pensando en ir al centro comercial. ¿Quieres venir?", note: "Plan being considered", noteEs: "Plan considerándose" },
          { speakerId: "s2", text: "Hmm, I'm not doing anything important. Sure!", textEs: "Hmm, no estoy haciendo nada importante. ¡Claro!", note: "Negative present continuous", noteEs: "Presente continuo negativo" },
          { speakerId: "s1", text: "Great! My brother is driving, so we can pick you up.", textEs: "¡Genial! Mi hermano está manejando, así que podemos recogerte.", note: "Another person's action", noteEs: "Acción de otra persona" },
          { speakerId: "s2", text: "Perfect. Where are you right now?", textEs: "Perfecto. ¿Dónde estás ahora mismo?", note: "Present location", noteEs: "Ubicación presente" },
          { speakerId: "s1", text: "We're leaving my house now. We're coming to get you.", textEs: "Estamos saliendo de mi casa ahora. Vamos a recogerte.", note: "Present continuous for now + near future", noteEs: "Presente continuo para ahora + futuro cercano" },
          { speakerId: "s2", text: "Okay, I'm getting ready. See you in 10!", textEs: "Okay, me estoy preparando. ¡Nos vemos en 10!", note: "Action starting now", noteEs: "Acción empezando ahora" }
        ],
        keyPhrases: [
          { phrase: "What are you doing?", translation: "¿Qué estás haciendo?", usage: "Asking about current action" },
          { phrase: "I'm [verb]-ing right now", translation: "Estoy [verbo] ahora mismo", usage: "Describing what you're doing" },
          { phrase: "I'm not doing anything", translation: "No estoy haciendo nada", usage: "Negative form" },
          { phrase: "We're coming", translation: "Estamos yendo/venimos", usage: "Future plan happening now" }
        ],
        variations: [
          { original: "What are you doing?", alternative: "What are you up to?", note: "More casual" },
          { original: "I'm watching TV", alternative: "Just watching TV", note: "Very informal" },
          { original: "I'm thinking about going", alternative: "I'm considering going", note: "More formal" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/ɪŋ/",
            description: "The -ING ending",
            descriptionEs: "La terminación -ING",
            examples: [
              { word: "working", transcription: "/ˈwɜːkɪŋ/" },
              { word: "reading", transcription: "/ˈriːdɪŋ/" },
              { word: "doing", transcription: "/ˈduːɪŋ/" }
            ],
            tips: ["The 'ng' is one sound, not 'n' + 'g'", "Tongue touches the back of your mouth", "Don't say 'workin' (though casual speech does!)"]
          },
          {
            symbol: "Contractions",
            description: "How to pronounce I'm, he's, they're",
            descriptionEs: "Cómo pronunciar I'm, he's, they're",
            examples: [
              { word: "I'm working", transcription: "/aɪm ˈwɜːkɪŋ/" },
              { word: "She's reading", transcription: "/ʃiːz ˈriːdɪŋ/" },
              { word: "They're playing", transcription: "/ðeɪr ˈpleɪɪŋ/" }
            ],
            tips: ["Contractions are natural - use them!", "I'm = one syllable", "They're sounds like 'there'"]
          }
        ],
        commonProblems: [
          { word: "studying", wrong: "stu-DY-ing (3 syllables)", correct: "STUD-y-ing (3 syllables)", tip: "Stress on first syllable" },
          { word: "doing", wrong: "DO-ing (2 clear syllables)", correct: "DOO-ing (almost one syllable)", tip: "Very smooth transition" },
          { word: "listening", wrong: "lis-TEN-ing", correct: "LIS-ten-ing", tip: "Stress on first syllable, middle 't' often silent" }
        ],
        minimalPairs: [
          { word1: "watching", word2: "washing", soundDifference: "/ɒ/ vs /ɔː/ - I'm watching TV / I'm washing clothes" },
          { word1: "working", word2: "walking", soundDifference: "Different first vowel - at work vs physical walking" },
          { word1: "reading", word2: "riding", soundDifference: "/iː/ vs /aɪ/ - reading a book / riding a bike" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "Are you WORKING?↗", meaning: "Yes/no question" },
          { pattern: "Falling ↘", example: "I'm working right NOW.↘", meaning: "Statement" },
          { pattern: "Falling wh-question ↘", example: "What are you DOING?↘", meaning: "WH-questions usually fall" }
        ]
      },
      
      culturalNote: {
        title: "The Present Continuous in Daily Life",
        titleEs: "El Presente Continuo en la Vida Diaria",
        content: "English speakers use the present continuous constantly in everyday conversation. 'What are you doing?' is probably one of the most common questions you'll hear and ask. When someone calls you, they often ask 'Am I interrupting? What are you doing?' It's polite to describe your current activity: 'Oh, I'm just watching TV' or 'I'm working, but I can talk for a minute.' On social media, people often post about what they're doing: 'Having coffee at my favorite café!' (the 'I'm' is often dropped in casual written English). The present continuous is also very common for plans: 'What are you doing tonight?' means 'What are your plans?' not literally 'what action are you performing right now.' Understanding this double use (current action AND future plans) is key to natural English.",
        contentEs: "Los hablantes de inglés usan el presente continuo constantemente en conversaciones diarias. '¿What are you doing?' es probablemente una de las preguntas más comunes que escucharás y harás. Cuando alguien te llama, a menudo preguntan '¿Am I interrupting? What are you doing?' Es educado describir tu actividad actual: 'Oh, I'm just watching TV' o 'I'm working, but I can talk for a minute.' En redes sociales, la gente a menudo publica sobre lo que está haciendo: 'Having coffee at my favorite café!' (el 'I'm' a menudo se omite en inglés escrito casual). El presente continuo también es muy común para planes: '¿What are you doing tonight?' significa '¿Cuáles son tus planes?' no literalmente 'qué acción estás realizando ahora mismo.'",
        regions: ["US", "UK"],
        formalityLevel: "informal"
      },
      
      consolidationQuiz: {
        id: "l2t10_quiz",
        title: "Present Continuous Mastery Check",
        titleEs: "Prueba de Dominio del Presente Continuo",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l2t10_q1",
            type: "multiple-choice",
            question: "What is the present continuous of 'I read'?",
            questionEs: "¿Cuál es el presente continuo de 'I read'?",
            options: ["I read", "I am read", "I am reading", "I reading"],
            correctAnswer: "I am reading",
            explanation: "Present continuous: Subject + am/is/are + verb-ING.",
            explanationEs: "Presente continuo: Sujeto + am/is/are + verbo-ING.",
            points: 10
          },
          {
            id: "l2t10_q2",
            type: "multiple-choice",
            question: "Which is correct for 'run' in -ING form?",
            questionEs: "¿Cuál es correcto para 'run' en forma -ING?",
            options: ["runing", "running", "runeing", "runing"],
            correctAnswer: "running",
            explanation: "Short vowel + consonant: double the consonant (run → running).",
            explanationEs: "Vocal corta + consonante: dobla la consonante (run → running).",
            points: 10
          },
          {
            id: "l2t10_q3",
            type: "multiple-choice",
            question: "Which verb CAN'T be used in present continuous?",
            questionEs: "¿Qué verbo NO PUEDE usarse en presente continuo?",
            options: ["work", "eat", "know", "read"],
            correctAnswer: "know",
            explanation: "'Know' is a stative verb - it describes a state, not an action.",
            explanationEs: "'Know' es un verbo de estado - describe un estado, no una acción.",
            points: 10
          },
          {
            id: "l2t10_q4",
            type: "fill-blank",
            question: "She _____ (not work) today. She's sick.",
            questionEs: "She _____ (not work) today. Está enferma.",
            correctAnswer: ["isn't working", "is not working"],
            explanation: "Negative: Subject + am/is/are + NOT + verb-ING.",
            explanationEs: "Negativo: Sujeto + am/is/are + NOT + verbo-ING.",
            points: 10
          },
          {
            id: "l2t10_q5",
            type: "multiple-choice",
            question: "Form the question: 'What _____ you _____ right now?'",
            questionEs: "Forma la pregunta: 'What _____ you _____ right now?'",
            options: ["do / do", "are / doing", "is / doing", "are / do"],
            correctAnswer: "are / doing",
            explanation: "Questions: Wh- + am/is/are + subject + verb-ING.",
            explanationEs: "Preguntas: Wh- + am/is/are + sujeto + verbo-ING.",
            points: 10
          },
          {
            id: "l2t10_q6",
            type: "true-false",
            question: "You say 'I am wanting coffee' to describe what you want now.",
            questionEs: "Dices 'I am wanting coffee' para describir lo que quieres ahora.",
            correctAnswer: "false",
            explanation: "'Want' is a stative verb. Always use 'I want coffee', not 'I am wanting'.",
            explanationEs: "'Want' es un verbo de estado. Siempre usa 'I want coffee', no 'I am wanting'.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l2t10_production",
        title: "Describe What's Happening",
        titleEs: "Describe Lo Que Está Pasando",
        type: "spoken",
        scenario: "Describe what you and people around you are doing right now.",
        scenarioEs: "Describe lo que tú y las personas a tu alrededor están haciendo ahora mismo.",
        prompts: [
          {
            id: "l2t10_prod1",
            instruction: "Say what YOU are doing right now",
            instructionEs: "Di lo que TÚ estás haciendo ahora mismo",
            hints: ["I'm studying...", "I'm learning..."],
            hintsEs: ["Estoy estudiando...", "Estoy aprendiendo..."],
            requiredElements: ["I am + verb-ING"]
          },
          {
            id: "l2t10_prod2",
            instruction: "Describe what someone else is doing (or not doing)",
            instructionEs: "Describe lo que otra persona está haciendo (o no está haciendo)",
            hints: ["My friend is...", "He/She is not..."],
            hintsEs: ["Mi amigo está...", "Él/Ella no está..."],
            requiredElements: ["He/She/They + is/are + verb-ING"]
          },
          {
            id: "l2t10_prod3",
            instruction: "Ask a question about what someone is doing",
            instructionEs: "Haz una pregunta sobre lo que alguien está haciendo",
            hints: ["What are you doing?", "Is she working?"],
            hintsEs: ["¿Qué estás haciendo?", "¿Está ella trabajando?"],
            requiredElements: ["Question with present continuous"]
          },
          {
            id: "l2t10_prod4",
            instruction: "Describe a temporary situation happening this week",
            instructionEs: "Describe una situación temporal que está pasando esta semana",
            hints: ["This week, I'm...", "Currently, we are..."],
            hintsEs: ["Esta semana, estoy...", "Actualmente, estamos..."],
            requiredElements: ["Temporary situation + present continuous"]
          }
        ],
        modelResponse: "Right now, I'm studying English on my computer. I'm learning about the present continuous. My sister is watching TV in the living room - she isn't studying today. What are you doing? Are you learning English too? This week, I'm practicing every day because I have an exam next week.",
        modelResponseEs: "Ahora mismo, estoy estudiando inglés en mi computadora. Estoy aprendiendo sobre el presente continuo. Mi hermana está viendo TV en la sala - ella no está estudiando hoy. ¿Qué estás haciendo? ¿Estás aprendiendo inglés también? Esta semana, estoy practicando cada día porque tengo un examen la próxima semana.",
        evaluationCriteria: [
          "Used 'I am + verb-ING' correctly",
          "Described someone else with 'is/are + verb-ING'",
          "Formed a question correctly",
          "Used present continuous for temporary situation"
        ],
        evaluationCriteriaEs: [
          "Usaste 'I am + verbo-ING' correctamente",
          "Describiste a otra persona con 'is/are + verbo-ING'",
          "Formaste una pregunta correctamente",
          "Usaste presente continuo para situación temporal"
        ]
      },
      vocabulary: {
        nouns: [],
        verbs: [
          { id: "l2t10_v1", word: "happening", translation: "ocurriendo", type: "verb", definition: "taking place now", definitionEs: "sucediendo ahora", example: "What is happening here?", exampleEs: "¿Qué está pasando aquí?", related: [], difficulty: 1 },
          { id: "l2t10_v2", word: "waiting", translation: "esperando", type: "verb", definition: "staying until something happens", definitionEs: "quedarse hasta que algo pase", example: "I am waiting for the bus.", exampleEs: "Estoy esperando el bus.", related: [], difficulty: 1 },
          { id: "l2t10_v3", word: "looking", translation: "mirando/buscando", type: "verb", definition: "using eyes or searching", definitionEs: "usando los ojos o buscando", example: "She is looking for her keys.", exampleEs: "Ella está buscando sus llaves.", related: [], difficulty: 1 },
          { id: "l2t10_v4", word: "running", translation: "corriendo", type: "verb", definition: "moving fast on feet", definitionEs: "moviéndose rápido con los pies", example: "The children are running in the park.", exampleEs: "Los niños están corriendo en el parque.", related: [], difficulty: 1 },
          { id: "l2t10_v5", word: "sleeping", translation: "durmiendo", type: "verb", definition: "resting with eyes closed", definitionEs: "descansando con los ojos cerrados", example: "The baby is sleeping now.", exampleEs: "El bebé está durmiendo ahora.", related: [], difficulty: 1 },
          { id: "l2t10_v6", word: "studying", translation: "estudiando", type: "verb", definition: "learning about a subject", definitionEs: "aprendiendo sobre un tema", example: "I am studying for my exam.", exampleEs: "Estoy estudiando para mi examen.", related: [], difficulty: 1 },
        ],
        adjectives: [],
        expressions: [
          { id: "l2t10_e1", word: "What are you doing?", translation: "¿Qué estás haciendo?", type: "expression", definition: "asking about current action", definitionEs: "preguntando sobre acción actual", example: "What are you doing right now?", exampleEs: "¿Qué estás haciendo ahora mismo?", related: [], difficulty: 1 },
          { id: "l2t10_e2", word: "I'm -ing...", translation: "Estoy + gerundio...", type: "expression", definition: "describing current action", definitionEs: "describiendo acción actual", example: "I'm reading a book.", exampleEs: "Estoy leyendo un libro.", related: [], difficulty: 1 },
          { id: "l2t10_e3", word: "right now", translation: "ahora mismo", type: "expression", definition: "at this moment", definitionEs: "en este momento", example: "I'm cooking right now.", exampleEs: "Estoy cocinando ahora mismo.", related: [], difficulty: 1 },
          { id: "l2t10_e4", word: "at the moment", translation: "en este momento", type: "expression", definition: "currently", definitionEs: "actualmente", example: "She's working at the moment.", exampleEs: "Ella está trabajando en este momento.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l2t10_d1", word: "currently", translation: "actualmente", type: "adverb", definition: "at the present time", definitionEs: "en el tiempo presente", example: "I'm currently learning Spanish.", exampleEs: "Actualmente estoy aprendiendo español.", related: [], difficulty: 1 },
          { id: "l2t10_d2", word: "still", translation: "todavía", type: "adverb", definition: "continuing to happen", definitionEs: "continuando ocurriendo", example: "She's still sleeping.", exampleEs: "Ella todavía está durmiendo.", related: [], difficulty: 1 },
        ],
        prepositions: [],
      }
    },
  ]
};

export default level2;
