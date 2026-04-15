import type { Level } from '../../types';

export const level1: Level = {
  id: 1,
  name: "Absolute Beginner",
  cefrLevel: "A1",
  description: "Primeros pasos en inglés: saludos, presentaciones y vocabulario esencial",
  totalTasks: 10,
  estimatedHours: 8,
  color: "#10b981",
  icon: "🌱",
  tasks: [
    {
      id: 1,
      title: "Greetings and Introductions",
      titleEs: "Saludos y Presentaciones",
      objectives: [
        "Saludar en diferentes momentos del día",
        "Presentarse y preguntar el nombre",
        "Despedirse apropiadamente",
        "Usar expresiones básicas de cortesía"
      ],
      introduction: {
        title: "🌟 Saludos y Presentaciones en Inglés",
        explanation: "Los saludos son las primeras palabras que aprendemos en cualquier idioma. En inglés, usamos diferentes saludos según el momento del día y el nivel de formalidad. También aprenderás a presentarte y a usar expresiones de cortesía básicas que te ayudarán en cualquier conversación.",
        keyPoints: [
          "En inglés usamos 'Good morning' (Buenos días), 'Good afternoon' (Buenas tardes) y 'Good evening' (Buenas noches - al llegar)",
          "'Good night' solo se usa para DESPEDIRSE por la noche, no para saludar",
          "'Hello' y 'Hi' son saludos informales que puedes usar en cualquier momento del día",
          "Para preguntar el nombre usamos 'What's your name?' (¿Cuál es tu nombre?)",
          "'Nice to meet you' (Mucho gusto) se dice al conocer a alguien por primera vez"
        ],
        examples: [
          { english: "Hello! My name is María.", spanish: "¡Hola! Mi nombre es María.", explanation: "Saludo informal + presentación básica" },
          { english: "Good morning! How are you?", spanish: "¡Buenos días! ¿Cómo estás?", explanation: "Saludo formal de mañana + pregunta de cortesía" },
          { english: "Nice to meet you. I'm Juan.", spanish: "Mucho gusto. Soy Juan.", explanation: "Expresión al conocer a alguien" },
          { english: "Goodbye! See you later!", spanish: "¡Adiós! ¡Hasta luego!", explanation: "Despedida informal" }
        ],
        tips: [
          "💡 'How are you?' es más una cortesía que una pregunta real. La respuesta común es 'I'm fine, thanks!' aunque no te sientas perfecto.",
          "💡 En contextos informales, puedes decir 'Hey!' en lugar de 'Hello'",
          "💡 'Bye!' es la forma corta e informal de 'Goodbye'"
        ],
        whenToUse: [
          "Al encontrarte con alguien por primera vez",
          "Al iniciar una conversación",
          "Al llegar a un lugar (tienda, oficina, etc.)",
          "Al despedirte de alguien"
        ],
        whenNotToUse: [
          "No uses 'Good night' para saludar - solo para despedirte",
          "No uses 'Hey' con personas mayores o en situaciones formales",
          "No respondas solo 'Fine' sin 'thank you' - puede sonar grosero"
        ]
      },
      estimatedMinutes: 15,
      connectionToNext: "Una vez que sabes saludar, en la siguiente lección aprenderás los números para poder dar tu edad, teléfono y más información personal.",
      grammarTheoryIds: ['a1-verb-to-be', 'a1-subject-pronouns'],
      
      // ============================================
      // ERRORES COMUNES
      // ============================================
      commonMistakes: [
        {
          id: "l1t1_cm1",
          wrong: "Good night! (al llegar a una fiesta)",
          correct: "Good evening!",
          explanation: "'Good night' is ONLY for saying goodbye at night, not for greeting someone.",
          explanationEs: "'Good night' SOLO se usa para despedirse por la noche, no para saludar a alguien.",
          category: "usage"
        },
        {
          id: "l1t1_cm2",
          wrong: "I am call María.",
          correct: "My name is María. / I'm María.",
          explanation: "We say 'My name is...' or 'I am...' (not 'I am call').",
          explanationEs: "Decimos 'My name is...' o 'I am...' (no 'I am call').",
          category: "grammar"
        },
        {
          id: "l1t1_cm3",
          wrong: "How are you? - Yes.",
          correct: "How are you? - I'm fine, thank you!",
          explanation: "'How are you?' is not a yes/no question. Answer with how you feel.",
          explanationEs: "'How are you?' no es una pregunta de sí/no. Responde diciendo cómo estás.",
          category: "usage"
        },
        {
          id: "l1t1_cm4",
          wrong: "Nice to meet you. - Nice to meet you also.",
          correct: "Nice to meet you. - Nice to meet you too!",
          explanation: "Use 'too' (not 'also') at the end of the response.",
          explanationEs: "Usa 'too' (no 'also') al final de la respuesta.",
          category: "vocabulary"
        },
        {
          id: "l1t1_cm5",
          wrong: "Goodbye! - Goodbye! See you the later!",
          correct: "Goodbye! - Goodbye! See you later!",
          explanation: "'See you later' has no article. Don't say 'the later'.",
          explanationEs: "'See you later' no lleva artículo. No digas 'the later'.",
          category: "grammar"
        }
      ],
      
      // ============================================
      // EJERCICIOS ESPECÍFICOS
      // ============================================
      exercises: [
        {
          id: "l1t1_ex1",
          type: "situational",
          title: "Choose the Right Greeting",
          titleEs: "Elige el Saludo Correcto",
          instruction: "Select the appropriate greeting for each situation.",
          instructionEs: "Selecciona el saludo apropiado para cada situación.",
          difficulty: 1,
          items: [
            {
              id: "l1t1_ex1_1",
              prompt: "It's 9:00 AM. You arrive at your office.",
              promptEs: "Son las 9:00 AM. Llegas a tu oficina.",
              options: ["Good night!", "Good morning!", "Good evening!"],
              correctAnswer: "Good morning!",
              explanation: "In the morning (before 12:00 PM), we say 'Good morning'.",
              explanationEs: "En la mañana (antes de las 12:00 PM), decimos 'Good morning'."
            },
            {
              id: "l1t1_ex1_2",
              prompt: "It's 3:00 PM. You meet your friend at a café.",
              promptEs: "Son las 3:00 PM. Te encuentras con tu amigo en un café.",
              options: ["Good morning!", "Good afternoon!", "Good night!"],
              correctAnswer: "Good afternoon!",
              explanation: "In the afternoon (12:00 PM - 6:00 PM), we say 'Good afternoon'.",
              explanationEs: "En la tarde (12:00 PM - 6:00 PM), decimos 'Good afternoon'."
            },
            {
              id: "l1t1_ex1_3",
              prompt: "It's 8:00 PM. You arrive at a dinner party.",
              promptEs: "Son las 8:00 PM. Llegas a una cena.",
              options: ["Good evening!", "Good night!", "Good afternoon!"],
              correctAnswer: "Good evening!",
              explanation: "'Good evening' is used when ARRIVING at night. 'Good night' is for leaving.",
              explanationEs: "'Good evening' se usa al LLEGAR por la noche. 'Good night' es para irse."
            },
            {
              id: "l1t1_ex1_4",
              prompt: "It's 11:00 PM. You're leaving your friend's house to go home.",
              promptEs: "Son las 11:00 PM. Te vas de casa de tu amigo a dormir.",
              options: ["Good evening!", "Good night!", "See you morning!"],
              correctAnswer: "Good night!",
              explanation: "'Good night' is used when saying goodbye at night or going to bed.",
              explanationEs: "'Good night' se usa al despedirse por la noche o ir a dormir."
            }
          ]
        },
        {
          id: "l1t1_ex2",
          type: "error-correction",
          title: "Fix the Mistakes",
          titleEs: "Corrige los Errores",
          instruction: "Find and correct the error in each sentence.",
          instructionEs: "Encuentra y corrige el error en cada oración.",
          difficulty: 1,
          items: [
            {
              id: "l1t1_ex2_1",
              prompt: "Hello! I am call Pedro.",
              correctAnswer: "Hello! My name is Pedro.",
              hint: "How do we say our name in English?",
              hintEs: "¿Cómo decimos nuestro nombre en inglés?",
              explanation: "We say 'My name is...' or 'I'm...' to introduce ourselves.",
              explanationEs: "Decimos 'My name is...' o 'I'm...' para presentarnos."
            },
            {
              id: "l1t1_ex2_2",
              prompt: "Good night! (said when arriving at 8 PM)",
              correctAnswer: "Good evening!",
              hint: "Is 'Good night' for arriving or leaving?",
              hintEs: "¿'Good night' es para llegar o irse?",
              explanation: "'Good night' is only for saying goodbye. Use 'Good evening' when arriving.",
              explanationEs: "'Good night' solo es para despedirse. Usa 'Good evening' al llegar."
            },
            {
              id: "l1t1_ex2_3",
              prompt: "How are you? - Yes, thank you.",
              correctAnswer: "How are you? - I'm fine, thank you.",
              hint: "'How are you?' asks about your state, not yes/no.",
              hintEs: "'How are you?' pregunta por tu estado, no es sí/no.",
              explanation: "Answer 'How are you?' with how you feel: 'I'm fine', 'I'm good', etc.",
              explanationEs: "Responde 'How are you?' con cómo te sientes: 'I'm fine', 'I'm good', etc."
            },
            {
              id: "l1t1_ex2_4",
              prompt: "Nice to meet you! - Nice to meet you also!",
              correctAnswer: "Nice to meet you! - Nice to meet you too!",
              hint: "What word do we use at the end instead of 'also'?",
              hintEs: "¿Qué palabra usamos al final en lugar de 'also'?",
              explanation: "At the end of a sentence, use 'too', not 'also'.",
              explanationEs: "Al final de una oración, usa 'too', no 'also'."
            }
          ]
        },
        {
          id: "l1t1_ex3",
          type: "transformation",
          title: "Formal to Informal",
          titleEs: "De Formal a Informal",
          instruction: "Change these formal expressions to informal ones.",
          instructionEs: "Cambia estas expresiones formales a informales.",
          difficulty: 1,
          items: [
            {
              id: "l1t1_ex3_1",
              prompt: "Good morning! (informal version)",
              correctAnswer: "Hi!",
              explanation: "'Hi' or 'Hey' are informal greetings that work any time of day.",
              explanationEs: "'Hi' o 'Hey' son saludos informales que funcionan a cualquier hora."
            },
            {
              id: "l1t1_ex3_2",
              prompt: "Goodbye! (informal version)",
              correctAnswer: "Bye!",
              explanation: "'Bye' is the casual, short form of 'Goodbye'.",
              explanationEs: "'Bye' es la forma casual y corta de 'Goodbye'."
            },
            {
              id: "l1t1_ex3_3",
              prompt: "Hello, my name is Carlos. (informal version)",
              correctAnswer: "Hi, I'm Carlos.",
              explanation: "'Hi' + 'I'm' is more casual than 'Hello' + 'my name is'.",
              explanationEs: "'Hi' + 'I'm' es más casual que 'Hello' + 'my name is'."
            }
          ]
        },
        {
          id: "l1t1_ex4",
          type: "gap-fill",
          title: "Complete the Conversation",
          titleEs: "Completa la Conversación",
          instruction: "Fill in the blanks with the correct word or phrase.",
          instructionEs: "Llena los espacios con la palabra o frase correcta.",
          difficulty: 1,
          items: [
            {
              id: "l1t1_ex4_1",
              prompt: "A: Hello! _____ your name? B: My name is Ana.",
              correctAnswer: "What's",
              explanation: "'What's your name?' is how we ask someone's name.",
              explanationEs: "'What's your name?' es cómo preguntamos el nombre de alguien."
            },
            {
              id: "l1t1_ex4_2",
              prompt: "A: Nice to _____ you! B: Nice to meet you too!",
              correctAnswer: "meet",
              explanation: "'Nice to meet you' is the expression when meeting someone new.",
              explanationEs: "'Nice to meet you' es la expresión al conocer a alguien nuevo."
            },
            {
              id: "l1t1_ex4_3",
              prompt: "A: How _____ you? B: I'm fine, thank you!",
              correctAnswer: "are",
              explanation: "'How are you?' is the question asking about someone's wellbeing.",
              explanationEs: "'How are you?' es la pregunta sobre el bienestar de alguien."
            },
            {
              id: "l1t1_ex4_4",
              prompt: "A: Goodbye! B: Bye! _____ you later!",
              correctAnswer: "See",
              explanation: "'See you later' is a common informal goodbye.",
              explanationEs: "'See you later' es una despedida informal común."
            }
          ]
        }
      ],
      
      // ============================================
      // DIÁLOGO MODELO
      // ============================================
      modelDialogue: {
        id: "l1t1_dialogue",
        title: "Meeting a New Classmate",
        titleEs: "Conociendo a un Nuevo Compañero",
        context: "Two students meet on the first day of English class.",
        contextEs: "Dos estudiantes se conocen el primer día de clase de inglés.",
        speakers: [
          { id: "s1", name: "Carlos", role: "New student" },
          { id: "s2", name: "Emma", role: "Classmate" }
        ],
        lines: [
          { speakerId: "s1", text: "Hello!", textEs: "¡Hola!", note: "Carlos initiates with a friendly greeting", noteEs: "Carlos inicia con un saludo amigable" },
          { speakerId: "s2", text: "Hi! How are you?", textEs: "¡Hola! ¿Cómo estás?", note: "Emma responds and asks about his wellbeing", noteEs: "Emma responde y pregunta por su bienestar" },
          { speakerId: "s1", text: "I'm fine, thank you! And you?", textEs: "¡Estoy bien, gracias! ¿Y tú?", note: "Returns the question - very polite!", noteEs: "Devuelve la pregunta - ¡muy cortés!" },
          { speakerId: "s2", text: "I'm great, thanks! What's your name?", textEs: "¡Estoy genial, gracias! ¿Cuál es tu nombre?", note: "She asks his name", noteEs: "Ella pregunta su nombre" },
          { speakerId: "s1", text: "My name is Carlos. And you?", textEs: "Mi nombre es Carlos. ¿Y tú?", note: "He introduces himself", noteEs: "Él se presenta" },
          { speakerId: "s2", text: "I'm Emma. Nice to meet you, Carlos!", textEs: "Soy Emma. ¡Mucho gusto, Carlos!", note: "She uses the shorter 'I'm' form", noteEs: "Ella usa la forma más corta 'I'm'" },
          { speakerId: "s1", text: "Nice to meet you too, Emma!", textEs: "¡Mucho gusto también, Emma!", note: "He responds with 'too' at the end", noteEs: "Él responde con 'too' al final" },
          { speakerId: "s2", text: "See you in class! Bye!", textEs: "¡Nos vemos en clase! ¡Adiós!", note: "Informal goodbye", noteEs: "Despedida informal" },
          { speakerId: "s1", text: "Goodbye! See you later!", textEs: "¡Adiós! ¡Hasta luego!", note: "Another way to say goodbye", noteEs: "Otra forma de despedirse" }
        ],
        keyPhrases: [
          { phrase: "How are you?", translation: "¿Cómo estás?", usage: "Standard greeting question" },
          { phrase: "I'm fine, thank you!", translation: "¡Estoy bien, gracias!", usage: "Common response to 'How are you?'" },
          { phrase: "What's your name?", translation: "¿Cuál es tu nombre?", usage: "Asking someone's name" },
          { phrase: "Nice to meet you!", translation: "¡Mucho gusto!", usage: "When meeting someone for the first time" },
          { phrase: "See you later!", translation: "¡Hasta luego!", usage: "Informal way to say goodbye" }
        ],
        variations: [
          { original: "My name is Carlos", alternative: "I'm Carlos", note: "'I'm' is more casual and common" },
          { original: "I'm fine", alternative: "I'm good / I'm great / I'm okay", note: "Different ways to express how you feel" },
          { original: "See you later", alternative: "See you / See you soon / Catch you later", note: "Various informal goodbyes" }
        ]
      },
      
      // ============================================
      // ENFOQUE EN PRONUNCIACIÓN
      // ============================================
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/h/",
            description: "The 'h' sound - breath out gently",
            descriptionEs: "El sonido 'h' - exhala suavemente",
            examples: [
              { word: "Hello", transcription: "/həˈloʊ/" },
              { word: "Hi", transcription: "/haɪ/" },
              { word: "How", transcription: "/haʊ/" }
            ],
            tips: ["In Spanish 'h' is silent, but in English you must pronounce it!", "Put your hand in front of your mouth - you should feel air"]
          },
          {
            symbol: "/iː/",
            description: "Long 'ee' sound",
            descriptionEs: "Sonido largo 'ii'",
            examples: [
              { word: "meet", transcription: "/miːt/" },
              { word: "please", transcription: "/pliːz/" },
              { word: "evening", transcription: "/ˈiːvnɪŋ/" }
            ],
            tips: ["Stretch the sound - it's longer than Spanish 'i'", "Smile slightly when making this sound"]
          }
        ],
        commonProblems: [
          { word: "Hello", wrong: "Elo", correct: "Hello (with H)", tip: "Remember to breathe out the H sound" },
          { word: "How", wrong: "Jow", correct: "How", tip: "H in English is softer than Spanish J" },
          { word: "Thank you", wrong: "Tank you", correct: "THank you", tip: "TH: tongue between teeth!" }
        ],
        minimalPairs: [
          { word1: "hi", word2: "eye", soundDifference: "/h/ vs no /h/" },
          { word1: "heat", word2: "eat", soundDifference: "/h/ vs no /h/" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "How are YOU?", meaning: "Questions with 'how' often rise at the end" },
          { pattern: "Falling ↘", example: "Nice to MEET you.", meaning: "Statements fall at the end" }
        ]
      },
      
      // ============================================
      // NOTA CULTURAL
      // ============================================
      culturalNote: {
        title: "Greetings Around the English-Speaking World",
        titleEs: "Saludos en el Mundo Angloparlante",
        content: "In English-speaking countries, it's common to say 'How are you?' as part of a greeting, without expecting a detailed answer. The typical response is 'Fine, thanks!' or 'Good, thanks!' even if you're not feeling great. It's considered polite to ask 'And you?' in return. In the US, people often say 'Hey!' informally, while in the UK, 'Hiya!' or 'Alright?' are common casual greetings. In Australia, you might hear 'G'day!' (Good day).",
        contentEs: "En países de habla inglesa, es común decir 'How are you?' como parte del saludo, sin esperar una respuesta detallada. La respuesta típica es 'Fine, thanks!' o 'Good, thanks!' aunque no te sientas muy bien. Se considera cortés preguntar 'And you?' de vuelta. En EE.UU., la gente dice 'Hey!' informalmente, mientras que en Reino Unido, 'Hiya!' o 'Alright?' son saludos casuales comunes. En Australia, podrías escuchar 'G'day!' (Buen día).",
        regions: ["US", "UK", "Australia"],
        formalityLevel: "neutral"
      },
      
      // ============================================
      // QUIZ DE CONSOLIDACIÓN
      // ============================================
      consolidationQuiz: {
        id: "l1t1_quiz",
        title: "Greetings Mastery Check",
        titleEs: "Prueba de Dominio de Saludos",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l1t1_q1",
            type: "multiple-choice",
            question: "It's 10:00 AM. What do you say?",
            questionEs: "Son las 10:00 AM. ¿Qué dices?",
            options: ["Good afternoon!", "Good evening!", "Good morning!", "Good night!"],
            correctAnswer: "Good morning!",
            explanation: "Before noon (12:00 PM), we say 'Good morning'.",
            explanationEs: "Antes del mediodía (12:00 PM), decimos 'Good morning'.",
            points: 10
          },
          {
            id: "l1t1_q2",
            type: "multiple-choice",
            question: "You meet someone for the first time. After introductions, you say:",
            questionEs: "Conoces a alguien por primera vez. Después de presentarte, dices:",
            options: ["Good night!", "How old are you?", "Nice to meet you!", "See you later!"],
            correctAnswer: "Nice to meet you!",
            explanation: "'Nice to meet you' is the appropriate phrase when meeting someone new.",
            explanationEs: "'Nice to meet you' es la frase apropiada al conocer a alguien nuevo.",
            points: 10
          },
          {
            id: "l1t1_q3",
            type: "fill-blank",
            question: "Complete: A: How are you? B: I'm _____, thank you!",
            questionEs: "Completa: A: How are you? B: I'm _____, thank you!",
            correctAnswer: ["fine", "good", "great", "well", "okay"],
            explanation: "We respond to 'How are you?' with words like 'fine', 'good', 'great', etc.",
            explanationEs: "Respondemos a 'How are you?' con palabras como 'fine', 'good', 'great', etc.",
            points: 10
          },
          {
            id: "l1t1_q4",
            type: "true-false",
            question: "'Good night' can be used to greet someone when you arrive at a party at 9 PM.",
            questionEs: "'Good night' se puede usar para saludar a alguien al llegar a una fiesta a las 9 PM.",
            correctAnswer: "false",
            explanation: "'Good night' is ONLY for saying goodbye. Use 'Good evening' when arriving.",
            explanationEs: "'Good night' es SOLO para despedirse. Usa 'Good evening' al llegar.",
            points: 10
          },
          {
            id: "l1t1_q5",
            type: "multiple-choice",
            question: "What's the informal way to say 'Hello'?",
            questionEs: "¿Cuál es la forma informal de decir 'Hello'?",
            options: ["Good morning", "Goodbye", "Hi", "Thank you"],
            correctAnswer: "Hi",
            explanation: "'Hi' is the informal, casual version of 'Hello'.",
            explanationEs: "'Hi' es la versión informal y casual de 'Hello'.",
            points: 10
          },
          {
            id: "l1t1_q6",
            type: "ordering",
            question: "Put this conversation in order:",
            questionEs: "Pon esta conversación en orden:",
            options: [
              "Nice to meet you too!",
              "Hello! What's your name?",
              "I'm fine, thank you. And you?",
              "My name is Sara. Nice to meet you!",
              "I'm great! How are you?"
            ],
            correctAnswer: [
              "Hello! What's your name?",
              "My name is Sara. Nice to meet you!",
              "Nice to meet you too!",
              "How are you?",
              "I'm fine, thank you. And you?"
            ],
            explanation: "A typical introduction follows: greeting → names → 'nice to meet you' → how are you.",
            explanationEs: "Una introducción típica sigue: saludo → nombres → 'nice to meet you' → how are you.",
            points: 20
          },
          {
            id: "l1t1_q7",
            type: "multiple-choice",
            question: "Someone says 'Nice to meet you!' How do you respond?",
            questionEs: "Alguien dice 'Nice to meet you!' ¿Cómo respondes?",
            options: ["Yes, thanks!", "Nice to meet you too!", "I'm fine!", "Goodbye!"],
            correctAnswer: "Nice to meet you too!",
            explanation: "We respond with 'Nice to meet you too!' using 'too' at the end.",
            explanationEs: "Respondemos con 'Nice to meet you too!' usando 'too' al final.",
            points: 10
          },
          {
            id: "l1t1_q8",
            type: "matching",
            question: "Match the greeting with the time of day:",
            questionEs: "Relaciona el saludo con el momento del día:",
            options: ["Good morning", "Good afternoon", "Good evening", "Good night"],
            correctAnswer: ["Before 12 PM", "12 PM - 6 PM", "After 6 PM (arriving)", "Saying goodbye at night"],
            explanation: "Each greeting is used at a specific time or situation.",
            explanationEs: "Cada saludo se usa en un momento o situación específica.",
            points: 20
          }
        ]
      },
      
      // ============================================
      // PRODUCCIÓN GUIADA
      // ============================================
      guidedProduction: {
        id: "l1t1_production",
        title: "Your First Conversation",
        titleEs: "Tu Primera Conversación",
        type: "both",
        scenario: "You're at a coffee shop and someone sits next to you. Start a conversation, introduce yourself, and then say goodbye.",
        scenarioEs: "Estás en una cafetería y alguien se sienta a tu lado. Inicia una conversación, preséntate, y luego despídete.",
        prompts: [
          {
            id: "l1t1_prod1",
            instruction: "Greet the person (informal is fine since you're at a coffee shop)",
            instructionEs: "Saluda a la persona (informal está bien ya que estás en una cafetería)",
            hints: ["Hi!", "Hello!", "Hey!"],
            hintsEs: ["¡Hola!", "¡Hola!", "¡Hey!"],
            requiredElements: ["greeting"]
          },
          {
            id: "l1t1_prod2",
            instruction: "Ask how they are doing",
            instructionEs: "Pregunta cómo están",
            hints: ["How are you?", "How's it going?"],
            hintsEs: ["¿Cómo estás?", "¿Cómo te va?"],
            requiredElements: ["how are you question"]
          },
          {
            id: "l1t1_prod3",
            instruction: "Introduce yourself with your name",
            instructionEs: "Preséntate con tu nombre",
            hints: ["My name is...", "I'm..."],
            hintsEs: ["Mi nombre es...", "Soy..."],
            requiredElements: ["name introduction"]
          },
          {
            id: "l1t1_prod4",
            instruction: "Say 'nice to meet you' and then say goodbye",
            instructionEs: "Di 'mucho gusto' y luego despídete",
            hints: ["Nice to meet you!", "Bye!", "See you later!"],
            hintsEs: ["¡Mucho gusto!", "¡Adiós!", "¡Hasta luego!"],
            requiredElements: ["nice to meet you", "goodbye"]
          }
        ],
        modelResponse: "Hi! How are you? I'm great, thanks! My name is [Your Name]. Nice to meet you! Well, I have to go. Bye! See you later!",
        modelResponseEs: "¡Hola! ¿Cómo estás? ¡Estoy genial, gracias! Mi nombre es [Tu Nombre]. ¡Mucho gusto! Bueno, me tengo que ir. ¡Adiós! ¡Hasta luego!",
        evaluationCriteria: [
          "Used appropriate greeting",
          "Asked 'How are you?'",
          "Introduced yourself correctly",
          "Said 'Nice to meet you'",
          "Used an appropriate goodbye"
        ],
        evaluationCriteriaEs: [
          "Usó un saludo apropiado",
          "Preguntó 'How are you?'",
          "Se presentó correctamente",
          "Dijo 'Nice to meet you'",
          "Usó una despedida apropiada"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l1t1_n1", word: "name", translation: "nombre", type: "noun", definition: "what someone is called", definitionEs: "cómo se llama alguien", example: "My name is John.", exampleEs: "Mi nombre es John.", related: [], difficulty: 1 },
          { id: "l1t1_n2", word: "morning", translation: "mañana", type: "noun", definition: "the early part of the day", definitionEs: "la primera parte del día", example: "Good morning!", exampleEs: "¡Buenos días!", related: ["afternoon", "evening"], difficulty: 1 },
          { id: "l1t1_n3", word: "afternoon", translation: "tarde", type: "noun", definition: "the time between noon and evening", definitionEs: "el tiempo entre el mediodía y la noche", example: "Good afternoon!", exampleEs: "¡Buenas tardes!", related: ["morning", "evening"], difficulty: 1 },
          { id: "l1t1_n4", word: "evening", translation: "noche (temprano)", type: "noun", definition: "the end of the day", definitionEs: "el final del día", example: "Good evening!", exampleEs: "¡Buenas noches!", related: ["morning", "afternoon"], difficulty: 1 },
          { id: "l1t1_n5", word: "night", translation: "noche", type: "noun", definition: "the dark part of the day", definitionEs: "la parte oscura del día", example: "Good night! Sleep well.", exampleEs: "¡Buenas noches! Que duermas bien.", related: ["day"], difficulty: 1 },
          { id: "l1t1_n6", word: "friend", translation: "amigo/a", type: "noun", definition: "a person you like and enjoy being with", definitionEs: "una persona que te agrada y con quien disfrutas estar", example: "She is my friend.", exampleEs: "Ella es mi amiga.", related: ["friendship"], difficulty: 1 },
          { id: "l1t1_n7", word: "pleasure", translation: "placer", type: "noun", definition: "a feeling of happiness or enjoyment", definitionEs: "un sentimiento de felicidad o disfrute", example: "Nice to meet you! The pleasure is mine.", exampleEs: "¡Mucho gusto! El placer es mío.", related: ["pleased"], difficulty: 1 },
        ],
        verbs: [
          { id: "l1t1_v1", word: "meet", translation: "conocer", type: "verb", definition: "to see and speak to someone for the first time", definitionEs: "ver y hablar con alguien por primera vez", example: "Nice to meet you!", exampleEs: "¡Mucho gusto en conocerte!", related: ["meeting"], difficulty: 1 },
          { id: "l1t1_v2", word: "call", translation: "llamar", type: "verb", definition: "to give someone a name", definitionEs: "darle un nombre a alguien", example: "You can call me Mike.", exampleEs: "Puedes llamarme Mike.", related: ["called"], difficulty: 1 },
          { id: "l1t1_v3", word: "spell", translation: "deletrear", type: "verb", definition: "to say the letters of a word", definitionEs: "decir las letras de una palabra", example: "How do you spell your name?", exampleEs: "¿Cómo se deletrea tu nombre?", related: ["spelling"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l1t1_a1", word: "nice", translation: "agradable/simpático", type: "adjective", definition: "pleasant or enjoyable", definitionEs: "agradable o placentero", example: "Nice to meet you!", exampleEs: "¡Encantado de conocerte!", related: ["nicely"], difficulty: 1 },
          { id: "l1t1_a2", word: "fine", translation: "bien", type: "adjective", definition: "good or satisfactory", definitionEs: "bueno o satisfactorio", example: "I'm fine, thank you.", exampleEs: "Estoy bien, gracias.", related: [], difficulty: 1 },
          { id: "l1t1_a3", word: "great", translation: "genial/excelente", type: "adjective", definition: "very good", definitionEs: "muy bueno", example: "I'm great, thanks!", exampleEs: "¡Estoy genial, gracias!", related: ["greatly"], difficulty: 1 },
        ],
        expressions: [
          { id: "l1t1_e1", word: "Hello", translation: "Hola", type: "expression", definition: "a greeting", definitionEs: "un saludo", example: "Hello! How are you?", exampleEs: "¡Hola! ¿Cómo estás?", related: ["Hi"], difficulty: 1 },
          { id: "l1t1_e2", word: "How are you?", translation: "¿Cómo estás?", type: "expression", definition: "asking about someone's wellbeing", definitionEs: "preguntar por el bienestar de alguien", example: "Hello! How are you?", exampleEs: "¡Hola! ¿Cómo estás?", related: [], difficulty: 1 },
          { id: "l1t1_e3", word: "Nice to meet you", translation: "Mucho gusto", type: "expression", definition: "said when meeting someone for the first time", definitionEs: "se dice al conocer a alguien por primera vez", example: "Nice to meet you, I'm Sarah.", exampleEs: "Mucho gusto, soy Sarah.", related: [], difficulty: 1 },
          { id: "l1t1_e4", word: "Goodbye", translation: "Adiós", type: "expression", definition: "what you say when leaving", definitionEs: "lo que dices al irte", example: "Goodbye! See you tomorrow!", exampleEs: "¡Adiós! ¡Nos vemos mañana!", related: ["Bye"], difficulty: 1 },
          { id: "l1t1_e5", word: "See you later", translation: "Hasta luego", type: "expression", definition: "said when leaving someone you'll see again", definitionEs: "se dice al dejar a alguien que verás de nuevo", example: "See you later!", exampleEs: "¡Hasta luego!", related: [], difficulty: 1 },
          { id: "l1t1_e6", word: "Thank you", translation: "Gracias", type: "expression", definition: "expressing gratitude", definitionEs: "expresar gratitud", example: "Thank you very much!", exampleEs: "¡Muchas gracias!", related: ["Thanks"], difficulty: 1 },
          { id: "l1t1_e7", word: "You're welcome", translation: "De nada", type: "expression", definition: "response to thank you", definitionEs: "respuesta a 'gracias'", example: "You're welcome!", exampleEs: "¡De nada!", related: [], difficulty: 1 },
          { id: "l1t1_e8", word: "Please", translation: "Por favor", type: "expression", definition: "used for polite requests", definitionEs: "se usa para peticiones educadas", example: "Please sit down.", exampleEs: "Por favor, siéntate.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 2,
      title: "Numbers 1-100",
      titleEs: "Números del 1 al 100",
      objectives: [
        "Contar del 1 al 20",
        "Aprender las decenas (20, 30, 40...)",
        "Formar números compuestos",
        "Usar números en contexto"
      ],
      introduction: {
        title: "🔢 Los Números en Inglés",
        explanation: "Los números son fundamentales para la comunicación diaria. Los usamos para dar nuestro número de teléfono, nuestra edad, precios, direcciones y mucho más. En inglés, una vez que aprendes los números del 1 al 20 y las decenas, ¡puedes formar cualquier número!",
        keyPoints: [
          "Los números del 1-12 son únicos y debes memorizarlos: one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve",
          "Del 13 al 19 terminan en '-teen': thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen",
          "Las decenas terminan en '-ty': twenty (20), thirty (30), forty (40), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90)",
          "Los números compuestos se forman uniendo decena + unidad: twenty-one (21), thirty-five (35)",
          "¡Cuidado! 'Fifteen' NO es 'fiveteen' y 'forty' NO tiene 'u' (no es 'fourty')"
        ],
        examples: [
          { english: "I'm twenty-five years old.", spanish: "Tengo veinticinco años.", explanation: "Edad con número compuesto" },
          { english: "My phone number is 555-1234.", spanish: "Mi número de teléfono es 555-1234.", explanation: "Los números se dicen uno por uno" },
          { english: "There are thirty students in class.", spanish: "Hay treinta estudiantes en clase.", explanation: "Cantidad con decena" }
        ],
        tips: [
          "💡 Al dar números de teléfono, decimos cada dígito por separado: 5-5-5 (five-five-five)",
          "💡 'Zero' también puede decirse 'oh' en contextos informales como números de teléfono",
          "💡 Practica contando objetos a tu alrededor para memorizar los números"
        ],
        whenToUse: [
          "Al dar tu edad: 'I'm twenty-five years old'",
          "Al dar tu número de teléfono",
          "Al preguntar precios: 'How much is it?'",
          "Al dar direcciones: 'It's on 42nd Street'"
        ],
        whenNotToUse: [
          "No uses 'and' entre decenas y unidades: 'twenty-five', NO 'twenty and five'",
          "Para el año, no decimos 'two thousand twenty-five', decimos 'twenty twenty-five'"
        ]
      },
      estimatedMinutes: 20,
      connectionToPrevious: "Ahora que sabes saludar, necesitas números para dar tu edad y teléfono cuando te presentes.",
      connectionToNext: "Con los números dominados, podrás describir objetos usando colores y formas en la siguiente lección.",
      grammarTheoryIds: ['a1-plurals'],
      
      commonMistakes: [
        {
          id: "l1t2_cm1",
          wrong: "fourty",
          correct: "forty",
          explanation: "'Forty' has no 'u'. Don't write 'fourty'.",
          explanationEs: "'Forty' no tiene 'u'. No escribas 'fourty'.",
          category: "vocabulary"
        },
        {
          id: "l1t2_cm2",
          wrong: "fiveteen",
          correct: "fifteen",
          explanation: "'Fifteen' changes 'five' to 'fif-'. Not 'fiveteen'.",
          explanationEs: "'Fifteen' cambia 'five' a 'fif-'. No es 'fiveteen'.",
          category: "vocabulary"
        },
        {
          id: "l1t2_cm3",
          wrong: "threeteen",
          correct: "thirteen",
          explanation: "'Thirteen' changes 'three' to 'thir-'. Not 'threeteen'.",
          explanationEs: "'Thirteen' cambia 'three' a 'thir-'. No es 'threeteen'.",
          category: "vocabulary"
        },
        {
          id: "l1t2_cm4",
          wrong: "twenty-five years",
          correct: "twenty-five years old",
          explanation: "Always add 'old' when talking about age: 'I am X years OLD'.",
          explanationEs: "Siempre añade 'old' al hablar de edad: 'I am X years OLD'.",
          category: "grammar"
        },
        {
          id: "l1t2_cm5",
          wrong: "I have twenty and five years",
          correct: "I am twenty-five years old",
          explanation: "Use 'I am' + age + 'years old'. Don't translate literally from Spanish.",
          explanationEs: "Usa 'I am' + edad + 'years old'. No traduzcas literalmente del español.",
          category: "grammar"
        }
      ],
      
      exercises: [
        {
          id: "l1t2_ex1",
          type: "gap-fill",
          title: "Write the Number",
          titleEs: "Escribe el Número",
          instruction: "Write the number in English.",
          instructionEs: "Escribe el número en inglés.",
          difficulty: 1,
          items: [
            { id: "l1t2_ex1_1", prompt: "13 = _____", correctAnswer: "thirteen", explanation: "13 is 'thirteen' (thir + teen)", explanationEs: "13 es 'thirteen' (thir + teen)" },
            { id: "l1t2_ex1_2", prompt: "15 = _____", correctAnswer: "fifteen", explanation: "15 is 'fifteen' (fif + teen)", explanationEs: "15 es 'fifteen' (fif + teen)" },
            { id: "l1t2_ex1_3", prompt: "40 = _____", correctAnswer: "forty", explanation: "40 is 'forty' (no 'u'!)", explanationEs: "40 es 'forty' (¡sin 'u'!)" },
            { id: "l1t2_ex1_4", prompt: "21 = _____", correctAnswer: "twenty-one", explanation: "21 = twenty + one = twenty-one", explanationEs: "21 = twenty + one = twenty-one" },
            { id: "l1t2_ex1_5", prompt: "99 = _____", correctAnswer: "ninety-nine", explanation: "99 = ninety + nine = ninety-nine", explanationEs: "99 = ninety + nine = ninety-nine" }
          ]
        },
        {
          id: "l1t2_ex2",
          type: "error-correction",
          title: "Fix the Number Mistakes",
          titleEs: "Corrige los Errores de Números",
          instruction: "Find and fix the spelling mistake in each number.",
          instructionEs: "Encuentra y corrige el error de ortografía en cada número.",
          difficulty: 1,
          items: [
            { id: "l1t2_ex2_1", prompt: "fourty-two", correctAnswer: "forty-two", explanation: "'Forty' has no 'u'.", explanationEs: "'Forty' no tiene 'u'." },
            { id: "l1t2_ex2_2", prompt: "fiveteen", correctAnswer: "fifteen", explanation: "'Fifteen' uses 'fif-' not 'five-'.", explanationEs: "'Fifteen' usa 'fif-' no 'five-'." },
            { id: "l1t2_ex2_3", prompt: "threeteen", correctAnswer: "thirteen", explanation: "'Thirteen' uses 'thir-' not 'three-'.", explanationEs: "'Thirteen' usa 'thir-' no 'three-'." },
            { id: "l1t2_ex2_4", prompt: "ninty", correctAnswer: "ninety", explanation: "'Ninety' keeps the 'e' from 'nine'.", explanationEs: "'Ninety' conserva la 'e' de 'nine'." }
          ]
        },
        {
          id: "l1t2_ex3",
          type: "situational",
          title: "Numbers in Real Life",
          titleEs: "Números en la Vida Real",
          instruction: "Choose the correct way to say the number in each situation.",
          instructionEs: "Elige la forma correcta de decir el número en cada situación.",
          difficulty: 1,
          items: [
            {
              id: "l1t2_ex3_1",
              prompt: "Your age is 28. How do you say it?",
              promptEs: "Tu edad es 28. ¿Cómo lo dices?",
              options: ["I have twenty-eight years", "I am twenty-eight years old", "I am twenty-eight years"],
              correctAnswer: "I am twenty-eight years old",
              explanation: "For age, use 'I am + number + years old'.",
              explanationEs: "Para la edad, usa 'I am + número + years old'."
            },
            {
              id: "l1t2_ex3_2",
              prompt: "Your phone number is 555-0123. How do you say '0'?",
              promptEs: "Tu número de teléfono es 555-0123. ¿Cómo dices '0'?",
              options: ["zero", "oh", "Both are correct"],
              correctAnswer: "Both are correct",
              explanation: "In phone numbers, both 'zero' and 'oh' are acceptable.",
              explanationEs: "En números de teléfono, tanto 'zero' como 'oh' son aceptables."
            },
            {
              id: "l1t2_ex3_3",
              prompt: "A shirt costs $35. You ask:",
              promptEs: "Una camisa cuesta $35. Preguntas:",
              options: ["How much it costs?", "How many is it?", "How much is it?"],
              correctAnswer: "How much is it?",
              explanation: "'How much is it?' is the correct question for prices.",
              explanationEs: "'How much is it?' es la pregunta correcta para precios."
            }
          ]
        },
        {
          id: "l1t2_ex4",
          type: "matching",
          title: "Match Numbers to Words",
          titleEs: "Relaciona Números con Palabras",
          instruction: "Match each number with its English word.",
          instructionEs: "Relaciona cada número con su palabra en inglés.",
          difficulty: 1,
          items: [
            { id: "l1t2_ex4_1", prompt: "12", correctAnswer: "twelve" },
            { id: "l1t2_ex4_2", prompt: "30", correctAnswer: "thirty" },
            { id: "l1t2_ex4_3", prompt: "50", correctAnswer: "fifty" },
            { id: "l1t2_ex4_4", prompt: "18", correctAnswer: "eighteen" },
            { id: "l1t2_ex4_5", prompt: "100", correctAnswer: "one hundred" }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l1t2_dialogue",
        title: "Exchanging Phone Numbers",
        titleEs: "Intercambiando Números de Teléfono",
        context: "Two coworkers exchange contact information.",
        contextEs: "Dos compañeros de trabajo intercambian información de contacto.",
        speakers: [
          { id: "s1", name: "Ana", role: "Coworker 1" },
          { id: "s2", name: "Tom", role: "Coworker 2" }
        ],
        lines: [
          { speakerId: "s1", text: "Hi Tom! What's your phone number?", textEs: "¡Hola Tom! ¿Cuál es tu número de teléfono?", note: "Direct question for phone number", noteEs: "Pregunta directa por el teléfono" },
          { speakerId: "s2", text: "It's 555-3847.", textEs: "Es 555-3847.", note: "Says each digit: five-five-five, three-eight-four-seven", noteEs: "Dice cada dígito: five-five-five, three-eight-four-seven" },
          { speakerId: "s1", text: "Can you repeat that, please?", textEs: "¿Puedes repetirlo, por favor?", note: "Polite request to repeat", noteEs: "Petición cortés de repetir" },
          { speakerId: "s2", text: "Sure! Five-five-five, three-eight-four-seven.", textEs: "¡Claro! Cinco-cinco-cinco, tres-ocho-cuatro-siete.", note: "Repeats slowly", noteEs: "Repite lentamente" },
          { speakerId: "s1", text: "Got it! And how old are you?", textEs: "¡Listo! ¿Y cuántos años tienes?", note: "Asking age", noteEs: "Preguntando la edad" },
          { speakerId: "s2", text: "I'm thirty-two years old. And you?", textEs: "Tengo treinta y dos años. ¿Y tú?", note: "Full age expression", noteEs: "Expresión completa de edad" },
          { speakerId: "s1", text: "I'm twenty-eight.", textEs: "Tengo veintiocho.", note: "Short form is also okay", noteEs: "La forma corta también está bien" }
        ],
        keyPhrases: [
          { phrase: "What's your phone number?", translation: "¿Cuál es tu número de teléfono?", usage: "Asking for a phone number" },
          { phrase: "Can you repeat that?", translation: "¿Puedes repetir eso?", usage: "Asking someone to say something again" },
          { phrase: "How old are you?", translation: "¿Cuántos años tienes?", usage: "Asking someone's age" },
          { phrase: "I'm X years old", translation: "Tengo X años", usage: "Telling your age" }
        ],
        variations: [
          { original: "I'm thirty-two years old", alternative: "I'm thirty-two", note: "'Years old' can be omitted in casual speech" },
          { original: "What's your phone number?", alternative: "Can I have your number?", note: "More casual way to ask" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/θ/",
            description: "The 'th' sound in 'three' - tongue between teeth",
            descriptionEs: "El sonido 'th' en 'three' - lengua entre los dientes",
            examples: [
              { word: "three", transcription: "/θriː/" },
              { word: "thirteen", transcription: "/θɜːˈtiːn/" },
              { word: "thirty", transcription: "/ˈθɜːti/" }
            ],
            tips: ["Put your tongue between your teeth and blow air", "It's NOT like Spanish 't' or 's'"]
          },
          {
            symbol: "/iː/ vs /ɪ/",
            description: "Long 'ee' vs short 'i' - important for -teen vs -ty",
            descriptionEs: "Sonido 'ii' largo vs 'i' corta - importante para -teen vs -ty",
            examples: [
              { word: "thirteen (long)", transcription: "/θɜːˈtiːn/" },
              { word: "thirty (short)", transcription: "/ˈθɜːti/" },
              { word: "fifteen", transcription: "/fɪfˈtiːn/" },
              { word: "fifty", transcription: "/ˈfɪfti/" }
            ],
            tips: ["'-teen' has a LONG 'ee' sound and stress at the end", "'-ty' has a SHORT 'i' and stress at the beginning"]
          }
        ],
        commonProblems: [
          { word: "three", wrong: "tree", correct: "th-ree", tip: "Tongue between teeth for 'th'" },
          { word: "thirteen", wrong: "THIR-teen", correct: "thir-TEEN", tip: "Stress on '-teen'" },
          { word: "thirty", wrong: "thir-TY", correct: "THIR-ty", tip: "Stress on 'thir-'" }
        ],
        minimalPairs: [
          { word1: "thirteen", word2: "thirty", soundDifference: "Stress position + vowel length" },
          { word1: "fourteen", word2: "forty", soundDifference: "Stress position + vowel length" },
          { word1: "fifteen", word2: "fifty", soundDifference: "Stress position + vowel length" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "What's your phone NUMBER?", meaning: "Questions rise at the end" },
          { pattern: "List pattern ↗↗↘", example: "Five, five, five, three, eight, four, SEVEN.", meaning: "Rise on each item, fall on the last" }
        ]
      },
      
      culturalNote: {
        title: "Numbers in Different Contexts",
        titleEs: "Números en Diferentes Contextos",
        content: "In the US, phone numbers are typically given as three digits, then four (555-1234). The number '0' is often pronounced 'oh' in phone numbers and addresses. When talking about money, Americans say 'twenty-five dollars' not 'twenty-five dollars zero cents' for whole amounts. In the UK, people often say numbers differently: '1,500' might be 'fifteen hundred' instead of 'one thousand five hundred'.",
        contentEs: "En EE.UU., los números de teléfono típicamente se dan como tres dígitos, luego cuatro (555-1234). El número '0' frecuentemente se pronuncia 'oh' en teléfonos y direcciones. Al hablar de dinero, los americanos dicen 'twenty-five dollars' no 'twenty-five dollars zero cents' para cantidades enteras. En Reino Unido, la gente dice números diferente: '1,500' puede ser 'fifteen hundred' en lugar de 'one thousand five hundred'.",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l1t2_quiz",
        title: "Numbers Mastery Check",
        titleEs: "Prueba de Dominio de Números",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l1t2_q1",
            type: "multiple-choice",
            question: "How do you spell 40?",
            questionEs: "¿Cómo se escribe 40?",
            options: ["fourty", "forty", "fourten", "forteen"],
            correctAnswer: "forty",
            explanation: "'Forty' has no 'u'.",
            explanationEs: "'Forty' no tiene 'u'.",
            points: 10
          },
          {
            id: "l1t2_q2",
            type: "multiple-choice",
            question: "How do you say your age in English?",
            questionEs: "¿Cómo dices tu edad en inglés?",
            options: ["I have 25 years", "I am 25 years old", "I have 25 years old", "I am 25 years"],
            correctAnswer: "I am 25 years old",
            explanation: "Use 'I am + number + years old' for age.",
            explanationEs: "Usa 'I am + número + years old' para la edad.",
            points: 10
          },
          {
            id: "l1t2_q3",
            type: "fill-blank",
            question: "The number 15 in English is _____",
            questionEs: "El número 15 en inglés es _____",
            correctAnswer: ["fifteen"],
            explanation: "15 = fifteen (fif + teen).",
            explanationEs: "15 = fifteen (fif + teen).",
            points: 10
          },
          {
            id: "l1t2_q4",
            type: "multiple-choice",
            question: "Which number is pronounced with stress on the LAST syllable?",
            questionEs: "¿Qué número se pronuncia con énfasis en la ÚLTIMA sílaba?",
            options: ["Thirty", "Forty", "Thirteen", "Twenty"],
            correctAnswer: "Thirteen",
            explanation: "Numbers ending in '-teen' have stress on 'teen': thirTEEN.",
            explanationEs: "Los números que terminan en '-teen' tienen énfasis en 'teen': thirTEEN.",
            points: 10
          },
          {
            id: "l1t2_q5",
            type: "true-false",
            question: "In phone numbers, '0' can be pronounced as 'oh'.",
            questionEs: "En números de teléfono, '0' se puede pronunciar como 'oh'.",
            correctAnswer: "true",
            explanation: "'Zero' and 'oh' are both acceptable for 0 in phone numbers.",
            explanationEs: "'Zero' y 'oh' son aceptables para 0 en números de teléfono.",
            points: 10
          },
          {
            id: "l1t2_q6",
            type: "multiple-choice",
            question: "What is 73 in English?",
            questionEs: "¿Qué es 73 en inglés?",
            options: ["seventy-three", "seventy three", "seventythree", "seventy and three"],
            correctAnswer: "seventy-three",
            explanation: "Compound numbers use a hyphen: seventy-three.",
            explanationEs: "Los números compuestos usan guión: seventy-three.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l1t2_production",
        title: "Share Your Numbers",
        titleEs: "Comparte Tus Números",
        type: "speaking",
        scenario: "You're filling out a form and need to say your personal information out loud.",
        scenarioEs: "Estás llenando un formulario y necesitas decir tu información personal en voz alta.",
        prompts: [
          {
            id: "l1t2_prod1",
            instruction: "Say your age using 'I am X years old'",
            instructionEs: "Di tu edad usando 'I am X years old'",
            hints: ["I am twenty-five years old", "I am thirty years old"],
            hintsEs: ["Tengo veinticinco años", "Tengo treinta años"],
            requiredElements: ["I am", "years old"]
          },
          {
            id: "l1t2_prod2",
            instruction: "Say a phone number: 555-8721",
            instructionEs: "Di un número de teléfono: 555-8721",
            hints: ["five-five-five, eight-seven-two-one"],
            hintsEs: ["cinco-cinco-cinco, ocho-siete-dos-uno"],
            requiredElements: ["individual digits"]
          },
          {
            id: "l1t2_prod3",
            instruction: "Count from 10 to 20",
            instructionEs: "Cuenta del 10 al 20",
            hints: ["ten, eleven, twelve, thirteen..."],
            hintsEs: ["diez, once, doce, trece..."],
            requiredElements: ["all numbers 10-20"]
          }
        ],
        modelResponse: "I am twenty-eight years old. My phone number is five-five-five, eight-seven-two-one. Ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty.",
        modelResponseEs: "Tengo veintiocho años. Mi número de teléfono es cinco-cinco-cinco, ocho-siete-dos-uno. Diez, once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve, veinte.",
        evaluationCriteria: [
          "Used correct structure for age",
          "Pronounced numbers clearly",
          "Said phone number digit by digit",
          "Counted correctly with proper pronunciation"
        ],
        evaluationCriteriaEs: [
          "Usó la estructura correcta para la edad",
          "Pronunció los números claramente",
          "Dijo el teléfono dígito por dígito",
          "Contó correctamente con pronunciación adecuada"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l1t2_n1", word: "number", translation: "número", type: "noun", definition: "a symbol representing a quantity", definitionEs: "un símbolo que representa una cantidad", example: "What's your phone number?", exampleEs: "¿Cuál es tu número de teléfono?", related: [], difficulty: 1 },
          { id: "l1t2_n2", word: "zero", translation: "cero", type: "noun", definition: "the number 0", definitionEs: "el número 0", example: "Zero degrees is very cold.", exampleEs: "Cero grados es muy frío.", related: [], difficulty: 1 },
          { id: "l1t2_n3", word: "one", translation: "uno", type: "noun", definition: "the number 1", definitionEs: "el número 1", example: "I have one brother.", exampleEs: "Tengo un hermano.", related: ["first"], difficulty: 1 },
          { id: "l1t2_n4", word: "two", translation: "dos", type: "noun", definition: "the number 2", definitionEs: "el número 2", example: "I have two sisters.", exampleEs: "Tengo dos hermanas.", related: ["second"], difficulty: 1 },
          { id: "l1t2_n5", word: "three", translation: "tres", type: "noun", definition: "the number 3", definitionEs: "el número 3", example: "There are three cats.", exampleEs: "Hay tres gatos.", related: ["third"], difficulty: 1 },
          { id: "l1t2_n6", word: "four", translation: "cuatro", type: "noun", definition: "the number 4", definitionEs: "el número 4", example: "Four seasons in a year.", exampleEs: "Cuatro estaciones en un año.", related: ["fourth"], difficulty: 1 },
          { id: "l1t2_n7", word: "five", translation: "cinco", type: "noun", definition: "the number 5", definitionEs: "el número 5", example: "I have five fingers.", exampleEs: "Tengo cinco dedos.", related: ["fifth"], difficulty: 1 },
          { id: "l1t2_n8", word: "ten", translation: "diez", type: "noun", definition: "the number 10", definitionEs: "el número 10", example: "Count to ten.", exampleEs: "Cuenta hasta diez.", related: ["tenth"], difficulty: 1 },
          { id: "l1t2_n9", word: "twenty", translation: "veinte", type: "noun", definition: "the number 20", definitionEs: "el número 20", example: "I'm twenty years old.", exampleEs: "Tengo veinte años.", related: [], difficulty: 1 },
          { id: "l1t2_n10", word: "hundred", translation: "cien", type: "noun", definition: "the number 100", definitionEs: "el número 100", example: "One hundred percent!", exampleEs: "¡Cien por ciento!", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l1t2_v1", word: "count", translation: "contar", type: "verb", definition: "to say numbers in order", definitionEs: "decir números en orden", example: "Can you count to 100?", exampleEs: "¿Puedes contar hasta 100?", related: ["counting"], difficulty: 1 },
          { id: "l1t2_v2", word: "add", translation: "sumar", type: "verb", definition: "to put numbers together", definitionEs: "juntar números", example: "Add 5 and 3.", exampleEs: "Suma 5 y 3.", related: ["addition"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l1t2_a1", word: "first", translation: "primero", type: "adjective", definition: "coming before all others", definitionEs: "que viene antes que todos los demás", example: "This is my first class.", exampleEs: "Esta es mi primera clase.", related: ["one"], difficulty: 1 },
          { id: "l1t2_a2", word: "second", translation: "segundo", type: "adjective", definition: "coming after the first", definitionEs: "que viene después del primero", example: "The second door on the left.", exampleEs: "La segunda puerta a la izquierda.", related: ["two"], difficulty: 1 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 3,
      title: "Colors and Shapes",
      titleEs: "Colores y Formas",
      objectives: [
        "Nombrar los colores básicos",
        "Identificar formas geométricas",
        "Describir objetos por su color",
        "Usar colores en oraciones simples"
      ],
      introduction: {
        title: "🎨 Colores y Formas en Inglés",
        explanation: "Los colores y las formas son palabras que usamos constantemente para describir el mundo que nos rodea. Desde elegir ropa hasta dar direcciones, estas palabras te ayudarán a comunicarte de manera más precisa y descriptiva.",
        keyPoints: [
          "Los colores básicos en inglés son: red (rojo), blue (azul), green (verde), yellow (amarillo), orange (naranja), purple (morado), black (negro), white (blanco)",
          "Para describir tonos usamos 'light' (claro) o 'dark' (oscuro): light blue (azul claro), dark green (verde oscuro)",
          "Las formas básicas son: circle (círculo), square (cuadrado), triangle (triángulo), rectangle (rectángulo)",
          "En inglés, el color va ANTES del sustantivo: 'a red car' (un carro rojo), no 'a car red'"
        ],
        examples: [
          { english: "The sky is blue.", spanish: "El cielo es azul.", explanation: "Color como adjetivo después del verbo 'to be'" },
          { english: "I have a red car.", spanish: "Tengo un carro rojo.", explanation: "El color va antes del sustantivo" },
          { english: "Draw a green circle.", spanish: "Dibuja un círculo verde.", explanation: "Color + forma" }
        ],
        tips: [
          "💡 'Orange' es tanto el color como la fruta. ¡An orange is orange! (Una naranja es naranja)",
          "💡 Algunos colores tienen variaciones: pink (rosa), gray/grey (gris), brown (marrón)",
          "💡 Asocia colores con objetos comunes: red apple, blue sky, green grass"
        ],
        whenToUse: [
          "Describir objetos: 'I want the blue shirt'",
          "Dar direcciones: 'It's the white building'",
          "Hablar de preferencias: 'My favorite color is green'"
        ],
        whenNotToUse: [
          "No pongas el color después del sustantivo: 'a car red' ❌ → 'a red car' ✓",
          "No uses 'colour' en EE.UU. (es británico)"
        ]
      },
      estimatedMinutes: 15,
      connectionToPrevious: "Ahora que sabes números, aprenderás colores para describir 'three RED apples' o 'two BLUE cars'.",
      connectionToNext: "Los colores te ayudarán a describir a tu familia: 'My mom has brown hair'.",
      grammarTheoryIds: ['a1-plurals', 'a1-articles'],
      
      commonMistakes: [
        {
          id: "l1t3_cm1",
          wrong: "a car red",
          correct: "a red car",
          explanation: "In English, adjectives (including colors) go BEFORE the noun.",
          explanationEs: "En inglés, los adjetivos (incluidos los colores) van ANTES del sustantivo.",
          category: "grammar"
        },
        {
          id: "l1t3_cm2",
          wrong: "The car is red color",
          correct: "The car is red",
          explanation: "Don't say 'red color'. Just say 'red'.",
          explanationEs: "No digas 'red color'. Solo di 'red'.",
          category: "usage"
        },
        {
          id: "l1t3_cm3",
          wrong: "My favorite color is the blue",
          correct: "My favorite color is blue",
          explanation: "Don't use 'the' before colors when speaking generally.",
          explanationEs: "No uses 'the' antes de colores cuando hablas en general.",
          category: "grammar"
        },
        {
          id: "l1t3_cm4",
          wrong: "a squear",
          correct: "a square",
          explanation: "'Square' is spelled with 'qua' not 'quea'.",
          explanationEs: "'Square' se escribe con 'qua' no 'quea'.",
          category: "vocabulary"
        },
        {
          id: "l1t3_cm5",
          wrong: "purpul",
          correct: "purple",
          explanation: "'Purple' is spelled with 'ur' and 'le' at the end.",
          explanationEs: "'Purple' se escribe con 'ur' y 'le' al final.",
          category: "vocabulary"
        }
      ],
      
      exercises: [
        {
          id: "l1t3_ex1",
          type: "situational",
          title: "Describe What You See",
          titleEs: "Describe Lo Que Ves",
          instruction: "Choose the correct description for each image.",
          instructionEs: "Elige la descripción correcta para cada imagen.",
          difficulty: 1,
          items: [
            {
              id: "l1t3_ex1_1",
              prompt: "🍎 (a fruit that is NOT green)",
              promptEs: "🍎 (una fruta que NO es verde)",
              options: ["A green apple", "A red apple", "A blue apple"],
              correctAnswer: "A red apple",
              explanation: "Apples can be red, green, or yellow. This emoji shows a red apple.",
              explanationEs: "Las manzanas pueden ser rojas, verdes o amarillas. Este emoji muestra una manzana roja."
            },
            {
              id: "l1t3_ex1_2",
              prompt: "☀️ (the sun)",
              promptEs: "☀️ (el sol)",
              options: ["The sun is blue", "The sun is yellow", "The sun is purple"],
              correctAnswer: "The sun is yellow",
              explanation: "The sun is typically described as yellow.",
              explanationEs: "El sol se describe típicamente como amarillo."
            },
            {
              id: "l1t3_ex1_3",
              prompt: "🌊 (the ocean)",
              promptEs: "🌊 (el océano)",
              options: ["The ocean is red", "The ocean is green", "The ocean is blue"],
              correctAnswer: "The ocean is blue",
              explanation: "The ocean is typically described as blue.",
              explanationEs: "El océano se describe típicamente como azul."
            },
            {
              id: "l1t3_ex1_4",
              prompt: "🍊 (a citrus fruit)",
              promptEs: "🍊 (una fruta cítrica)",
              options: ["An orange is orange", "An orange is purple", "An orange is black"],
              correctAnswer: "An orange is orange",
              explanation: "'Orange' is both the fruit and the color!",
              explanationEs: "'Orange' es tanto la fruta como el color!"
            }
          ]
        },
        {
          id: "l1t3_ex2",
          type: "error-correction",
          title: "Fix the Color Order",
          titleEs: "Corrige el Orden del Color",
          instruction: "Rewrite the sentence with the correct word order.",
          instructionEs: "Reescribe la oración con el orden correcto de palabras.",
          difficulty: 1,
          items: [
            { id: "l1t3_ex2_1", prompt: "I have a car blue.", correctAnswer: "I have a blue car.", explanation: "Color goes BEFORE the noun.", explanationEs: "El color va ANTES del sustantivo." },
            { id: "l1t3_ex2_2", prompt: "She has a bag black.", correctAnswer: "She has a black bag.", explanation: "Color goes BEFORE the noun.", explanationEs: "El color va ANTES del sustantivo." },
            { id: "l1t3_ex2_3", prompt: "It's a house white.", correctAnswer: "It's a white house.", explanation: "Color goes BEFORE the noun.", explanationEs: "El color va ANTES del sustantivo." },
            { id: "l1t3_ex2_4", prompt: "I want the shirt green.", correctAnswer: "I want the green shirt.", explanation: "Color goes BEFORE the noun.", explanationEs: "El color va ANTES del sustantivo." }
          ]
        },
        {
          id: "l1t3_ex3",
          type: "gap-fill",
          title: "Complete with Colors",
          titleEs: "Completa con Colores",
          instruction: "Fill in the blank with the correct color.",
          instructionEs: "Llena el espacio con el color correcto.",
          difficulty: 1,
          items: [
            { id: "l1t3_ex3_1", prompt: "The grass is _____.", correctAnswer: "green", hint: "Think of nature 🌿", hintEs: "Piensa en la naturaleza 🌿" },
            { id: "l1t3_ex3_2", prompt: "Snow is _____.", correctAnswer: "white", hint: "Think of winter ❄️", hintEs: "Piensa en invierno ❄️" },
            { id: "l1t3_ex3_3", prompt: "The night sky is _____.", correctAnswer: "black", hint: "When there are no stars 🌑", hintEs: "Cuando no hay estrellas 🌑" },
            { id: "l1t3_ex3_4", prompt: "Bananas are _____.", correctAnswer: "yellow", hint: "A bright, happy color 🍌", hintEs: "Un color brillante y alegre 🍌" }
          ]
        },
        {
          id: "l1t3_ex4",
          type: "matching",
          title: "Match Colors and Objects",
          titleEs: "Relaciona Colores y Objetos",
          instruction: "Match each object with its typical color.",
          instructionEs: "Relaciona cada objeto con su color típico.",
          difficulty: 1,
          items: [
            { id: "l1t3_ex4_1", prompt: "Sky", correctAnswer: "blue" },
            { id: "l1t3_ex4_2", prompt: "Grass", correctAnswer: "green" },
            { id: "l1t3_ex4_3", prompt: "Sun", correctAnswer: "yellow" },
            { id: "l1t3_ex4_4", prompt: "Blood", correctAnswer: "red" },
            { id: "l1t3_ex4_5", prompt: "Night", correctAnswer: "black" }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l1t3_dialogue",
        title: "Shopping for Clothes",
        titleEs: "Comprando Ropa",
        context: "A customer asks for help in a clothing store.",
        contextEs: "Un cliente pide ayuda en una tienda de ropa.",
        speakers: [
          { id: "s1", name: "Customer", role: "Shopper" },
          { id: "s2", name: "Employee", role: "Store worker" }
        ],
        lines: [
          { speakerId: "s1", text: "Excuse me, do you have this shirt in blue?", textEs: "Disculpe, ¿tiene esta camisa en azul?", note: "Asking about a specific color", noteEs: "Preguntando por un color específico" },
          { speakerId: "s2", text: "Yes! We have blue, green, and red.", textEs: "¡Sí! Tenemos azul, verde y rojo.", note: "Listing available colors", noteEs: "Listando colores disponibles" },
          { speakerId: "s1", text: "I like the blue one. And do you have black pants?", textEs: "Me gusta la azul. ¿Y tienen pantalones negros?", note: "'The blue one' refers to 'the blue shirt'", noteEs: "'The blue one' se refiere a 'la camisa azul'" },
          { speakerId: "s2", text: "Yes, the black pants are over there.", textEs: "Sí, los pantalones negros están allá.", note: "Pointing to location", noteEs: "Señalando ubicación" },
          { speakerId: "s1", text: "Perfect! What's your favorite color?", textEs: "¡Perfecto! ¿Cuál es tu color favorito?", note: "Small talk", noteEs: "Conversación casual" },
          { speakerId: "s2", text: "My favorite color is purple!", textEs: "¡Mi color favorito es el morado!", note: "Expressing preference", noteEs: "Expresando preferencia" }
        ],
        keyPhrases: [
          { phrase: "Do you have this in [color]?", translation: "¿Tiene esto en [color]?", usage: "Asking for something in a specific color" },
          { phrase: "What's your favorite color?", translation: "¿Cuál es tu color favorito?", usage: "Asking about color preference" },
          { phrase: "My favorite color is...", translation: "Mi color favorito es...", usage: "Stating your preference" },
          { phrase: "The [color] one", translation: "El/La [color]", usage: "Referring to an item by its color" }
        ],
        variations: [
          { original: "Do you have this in blue?", alternative: "Is this available in blue?", note: "More formal alternative" },
          { original: "I like the blue one", alternative: "I'll take the blue one", note: "When you're ready to buy" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/r/",
            description: "The English 'r' - tongue doesn't touch anything",
            descriptionEs: "La 'r' inglesa - la lengua no toca nada",
            examples: [
              { word: "red", transcription: "/red/" },
              { word: "green", transcription: "/ɡriːn/" },
              { word: "orange", transcription: "/ˈɔːrɪndʒ/" }
            ],
            tips: ["English 'r' is NOT rolled like Spanish 'r'", "Curl your tongue back slightly"]
          },
          {
            symbol: "/ʌ/",
            description: "The 'uh' sound in colors like 'purple'",
            descriptionEs: "El sonido 'uh' en colores como 'purple'",
            examples: [
              { word: "purple", transcription: "/ˈpɜːrpl/" },
              { word: "color", transcription: "/ˈkʌlər/" }
            ],
            tips: ["Short sound, like 'uh'", "Mouth is relaxed and slightly open"]
          }
        ],
        commonProblems: [
          { word: "yellow", wrong: "yelo", correct: "YEL-low", tip: "Two syllables, not one" },
          { word: "purple", wrong: "pur-pul", correct: "PUR-ple", tip: "Ends with 'ple' not 'pul'" },
          { word: "orange", wrong: "o-RAN-ge", correct: "OR-ange", tip: "Stress on first syllable" }
        ],
        minimalPairs: [
          { word1: "red", word2: "led", soundDifference: "/r/ vs /l/" },
          { word1: "blue", word2: "blew", soundDifference: "Same pronunciation! (homophones)" },
          { word1: "white", word2: "wait", soundDifference: "/aɪ/ vs /eɪ/" }
        ],
        intonationPatterns: [
          { pattern: "List ↗↗↘", example: "Red, blue, and GREEN.", meaning: "Rising on items, falling on last" },
          { pattern: "Falling ↘", example: "It's BLUE.", meaning: "Statements fall at the end" }
        ]
      },
      
      culturalNote: {
        title: "Colors and Meanings",
        titleEs: "Colores y Significados",
        content: "Colors have different meanings in English-speaking cultures. Blue can mean 'sad' ('I'm feeling blue'). Green can mean 'environmentally friendly' ('going green') or 'inexperienced' ('greenhorn'). Red means 'danger' or 'stop' (traffic lights). In business, 'being in the black' means making profit, while 'being in the red' means losing money. 'White lie' is a small, harmless lie. Americans say 'gray' while British people say 'grey' - both are correct!",
        contentEs: "Los colores tienen diferentes significados en culturas angloparlantes. Blue puede significar 'triste' ('I'm feeling blue'). Green puede significar 'ecológico' ('going green') o 'inexperto' ('greenhorn'). Red significa 'peligro' o 'alto' (semáforos). En negocios, 'being in the black' significa tener ganancias, mientras 'being in the red' significa perder dinero. 'White lie' es una mentira pequeña e inofensiva. Los americanos dicen 'gray' mientras los británicos dicen 'grey' - ¡ambos son correctos!",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l1t3_quiz",
        title: "Colors & Shapes Mastery Check",
        titleEs: "Prueba de Dominio de Colores y Formas",
        passingScore: 70,
        timeLimit: 240,
        questions: [
          {
            id: "l1t3_q1",
            type: "multiple-choice",
            question: "Where does the color go in English?",
            questionEs: "¿Dónde va el color en inglés?",
            options: ["After the noun: 'a car red'", "Before the noun: 'a red car'", "Either position is correct"],
            correctAnswer: "Before the noun: 'a red car'",
            explanation: "In English, adjectives (including colors) go BEFORE the noun.",
            explanationEs: "En inglés, los adjetivos (incluidos los colores) van ANTES del sustantivo.",
            points: 10
          },
          {
            id: "l1t3_q2",
            type: "multiple-choice",
            question: "How do you describe a dark tone of blue?",
            questionEs: "¿Cómo describes un tono oscuro de azul?",
            options: ["Blue dark", "Dark blue", "Darker blue"],
            correctAnswer: "Dark blue",
            explanation: "'Dark' or 'light' go before the color: dark blue, light green.",
            explanationEs: "'Dark' o 'light' van antes del color: dark blue, light green.",
            points: 10
          },
          {
            id: "l1t3_q3",
            type: "fill-blank",
            question: "A shape with four equal sides is a _____",
            questionEs: "Una forma con cuatro lados iguales es un _____",
            correctAnswer: ["square"],
            explanation: "A square has four equal sides.",
            explanationEs: "Un cuadrado tiene cuatro lados iguales.",
            points: 10
          },
          {
            id: "l1t3_q4",
            type: "multiple-choice",
            question: "What color is 'orange' the fruit?",
            questionEs: "¿De qué color es 'orange' la fruta?",
            options: ["Red", "Yellow", "Orange", "Green"],
            correctAnswer: "Orange",
            explanation: "The fruit and the color share the same name: orange!",
            explanationEs: "¡La fruta y el color comparten el mismo nombre: orange!",
            points: 10
          },
          {
            id: "l1t3_q5",
            type: "true-false",
            question: "'The sky is blue color' is correct English.",
            questionEs: "'The sky is blue color' es inglés correcto.",
            correctAnswer: "false",
            explanation: "Don't add 'color' after the color name. Say 'The sky is blue'.",
            explanationEs: "No añadas 'color' después del nombre del color. Di 'The sky is blue'.",
            points: 10
          },
          {
            id: "l1t3_q6",
            type: "multiple-choice",
            question: "A shape with three sides is a _____",
            questionEs: "Una forma con tres lados es un _____",
            options: ["Circle", "Square", "Triangle", "Rectangle"],
            correctAnswer: "Triangle",
            explanation: "Triangle = three (tri) angles/sides.",
            explanationEs: "Triangle = tres (tri) ángulos/lados.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l1t3_production",
        title: "Describe Your World",
        titleEs: "Describe Tu Mundo",
        type: "both",
        scenario: "Look around your room and describe 5 objects using colors.",
        scenarioEs: "Mira alrededor de tu habitación y describe 5 objetos usando colores.",
        prompts: [
          {
            id: "l1t3_prod1",
            instruction: "Describe something you're wearing using a color",
            instructionEs: "Describe algo que llevas puesto usando un color",
            hints: ["I'm wearing a blue shirt", "My shoes are black"],
            hintsEs: ["Llevo una camisa azul", "Mis zapatos son negros"],
            requiredElements: ["color + clothing item"]
          },
          {
            id: "l1t3_prod2",
            instruction: "Tell me your favorite color",
            instructionEs: "Dime tu color favorito",
            hints: ["My favorite color is green"],
            hintsEs: ["Mi color favorito es el verde"],
            requiredElements: ["My favorite color is..."]
          },
          {
            id: "l1t3_prod3",
            instruction: "Describe an object in your room with its color",
            instructionEs: "Describe un objeto en tu habitación con su color",
            hints: ["I have a white desk", "There is a black chair"],
            hintsEs: ["Tengo un escritorio blanco", "Hay una silla negra"],
            requiredElements: ["color + object"]
          }
        ],
        modelResponse: "I'm wearing a blue shirt. My favorite color is green. I have a white desk in my room. There's a black chair next to it. My phone is red.",
        modelResponseEs: "Llevo una camisa azul. Mi color favorito es el verde. Tengo un escritorio blanco en mi habitación. Hay una silla negra al lado. Mi teléfono es rojo.",
        evaluationCriteria: [
          "Color comes before the noun",
          "Used at least 3 different colors",
          "Sentences are grammatically correct",
          "Expressed favorite color correctly"
        ],
        evaluationCriteriaEs: [
          "El color va antes del sustantivo",
          "Usó al menos 3 colores diferentes",
          "Las oraciones son gramaticalmente correctas",
          "Expresó el color favorito correctamente"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l1t3_n1", word: "color", translation: "color", type: "noun", definition: "red, blue, green, etc.", definitionEs: "rojo, azul, verde, etc.", example: "What's your favorite color?", exampleEs: "¿Cuál es tu color favorito?", related: ["colorful"], difficulty: 1 },
          { id: "l1t3_n2", word: "red", translation: "rojo", type: "noun", definition: "the color of blood", definitionEs: "el color de la sangre", example: "The apple is red.", exampleEs: "La manzana es roja.", related: [], difficulty: 1 },
          { id: "l1t3_n3", word: "blue", translation: "azul", type: "noun", definition: "the color of the sky", definitionEs: "el color del cielo", example: "The sky is blue.", exampleEs: "El cielo es azul.", related: [], difficulty: 1 },
          { id: "l1t3_n4", word: "green", translation: "verde", type: "noun", definition: "the color of grass", definitionEs: "el color del pasto", example: "The grass is green.", exampleEs: "El pasto es verde.", related: [], difficulty: 1 },
          { id: "l1t3_n5", word: "yellow", translation: "amarillo", type: "noun", definition: "the color of the sun", definitionEs: "el color del sol", example: "The sun is yellow.", exampleEs: "El sol es amarillo.", related: [], difficulty: 1 },
          { id: "l1t3_n6", word: "orange", translation: "naranja", type: "noun", definition: "a color between red and yellow", definitionEs: "un color entre rojo y amarillo", example: "An orange is orange.", exampleEs: "Una naranja es naranja.", related: [], difficulty: 1 },
          { id: "l1t3_n7", word: "purple", translation: "morado", type: "noun", definition: "a color mixing red and blue", definitionEs: "un color mezclando rojo y azul", example: "Grapes are purple.", exampleEs: "Las uvas son moradas.", related: [], difficulty: 1 },
          { id: "l1t3_n8", word: "black", translation: "negro", type: "noun", definition: "the darkest color", definitionEs: "el color más oscuro", example: "The night is black.", exampleEs: "La noche es negra.", related: [], difficulty: 1 },
          { id: "l1t3_n9", word: "white", translation: "blanco", type: "noun", definition: "the lightest color", definitionEs: "el color más claro", example: "Snow is white.", exampleEs: "La nieve es blanca.", related: [], difficulty: 1 },
          { id: "l1t3_n10", word: "circle", translation: "círculo", type: "noun", definition: "a round shape", definitionEs: "una forma redonda", example: "The wheel is a circle.", exampleEs: "La rueda es un círculo.", related: ["circular"], difficulty: 1 },
          { id: "l1t3_n11", word: "square", translation: "cuadrado", type: "noun", definition: "a shape with four equal sides", definitionEs: "una forma con cuatro lados iguales", example: "A box is a square.", exampleEs: "Una caja es un cuadrado.", related: [], difficulty: 1 },
          { id: "l1t3_n12", word: "triangle", translation: "triángulo", type: "noun", definition: "a shape with three sides", definitionEs: "una forma con tres lados", example: "A pyramid has triangles.", exampleEs: "Una pirámide tiene triángulos.", related: [], difficulty: 1 },
        ],
        verbs: [],
        adjectives: [
          { id: "l1t3_a1", word: "colorful", translation: "colorido", type: "adjective", definition: "having many colors", definitionEs: "que tiene muchos colores", example: "The rainbow is colorful.", exampleEs: "El arcoíris es colorido.", related: ["color"], difficulty: 1 },
          { id: "l1t3_a2", word: "dark", translation: "oscuro", type: "adjective", definition: "with little light", definitionEs: "con poca luz", example: "Dark blue is nice.", exampleEs: "El azul oscuro es bonito.", related: ["darkness"], difficulty: 1 },
          { id: "l1t3_a3", word: "light", translation: "claro", type: "adjective", definition: "not dark", definitionEs: "que no es oscuro", example: "Light green is my favorite.", exampleEs: "El verde claro es mi favorito.", related: [], difficulty: 1 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 4,
      title: "Family Members",
      titleEs: "Miembros de la Familia",
      introduction: {
        title: "👨‍👩‍👧‍👦 La Familia en Inglés",
        explanation: "Hablar de nuestra familia es uno de los temas más comunes en cualquier conversación. Aprender los nombres de los miembros de la familia te permitirá presentar a tus seres queridos y entender cuando otros hablan de los suyos.",
        keyPoints: [
          "Familia nuclear: mother/mom (mamá), father/dad (papá), sister (hermana), brother (hermano)",
          "Abuelos: grandmother/grandma (abuela), grandfather/grandpa (abuelo), grandparents (abuelos)",
          "Tíos y primos: uncle (tío), aunt (tía), cousin (primo/a) - ¡'cousin' sirve para ambos géneros!",
          "Familia política: mother-in-law (suegra), father-in-law (suegro), brother-in-law (cuñado)",
          "En inglés no distinguimos género en algunos términos: 'cousin' = primo O prima, 'grandparent' = abuelo O abuela"
        ],
        examples: [
          { english: "This is my mother.", spanish: "Esta es mi mamá.", explanation: "Presentando a un familiar" },
          { english: "I have two brothers and one sister.", spanish: "Tengo dos hermanos y una hermana.", explanation: "Describiendo hermanos" },
          { english: "My grandmother is 80 years old.", spanish: "Mi abuela tiene 80 años.", explanation: "Hablando de la edad de un familiar" }
        ],
        tips: [
          "💡 'Mom' y 'Dad' son más informales que 'Mother' y 'Father'",
          "💡 'Siblings' es la palabra para referirse a todos los hermanos y hermanas juntos",
          "💡 Para evitar confusión entre 'cousin' masculino y femenino, puedes decir 'my male cousin' o 'my female cousin'"
        ],
        whenToUse: [
          "Presentando familia: 'This is my brother, John'",
          "Describiendo tu familia: 'I have a big family'",
          "Preguntando sobre familia: 'Do you have any siblings?'"
        ],
        whenNotToUse: [
          "No uses 'brother' para amigos cercanos (usa 'friend' o informalmente 'bro')",
          "No confundas 'parents' (padres) con 'relatives' (parientes en general)"
        ]
      },
      objectives: [
        "Nombrar miembros de la familia inmediata",
        "Describir relaciones familiares",
        "Presentar a su familia",
        "Usar posesivos básicos"
      ],
      estimatedMinutes: 20,
      connectionToPrevious: "Ahora puedes combinar colores con familia: 'My sister has brown hair', 'My dad has blue eyes'.",
      connectionToNext: "Los términos de familia te ayudarán a describir partes del cuerpo de tus familiares.",
      grammarTheoryIds: ['a1-subject-pronouns', 'a1-verb-to-be'],
      
      commonMistakes: [
        {
          id: "l1t4_cm1",
          wrong: "I have 25 years old",
          correct: "I am 25 years old",
          explanation: "Use 'am' (to be), not 'have' for age in English.",
          explanationEs: "Usa 'am' (ser/estar), no 'have' para la edad en inglés.",
          category: "grammar"
        },
        {
          id: "l1t4_cm2",
          wrong: "My brother he is tall",
          correct: "My brother is tall",
          explanation: "Don't use both a noun and pronoun for the same subject.",
          explanationEs: "No uses sustantivo y pronombre para el mismo sujeto.",
          category: "grammar"
        },
        {
          id: "l1t4_cm3",
          wrong: "I have two sisters and two brothers, so I have four brothers",
          correct: "I have four siblings",
          explanation: "'Siblings' means brothers AND sisters together.",
          explanationEs: "'Siblings' significa hermanos Y hermanas juntos.",
          category: "vocabulary"
        },
        {
          id: "l1t4_cm4",
          wrong: "She is my cousin sister",
          correct: "She is my cousin",
          explanation: "'Cousin' already means a relative - don't add 'sister' or 'brother'.",
          explanationEs: "'Cousin' ya significa un pariente - no añadas 'sister' o 'brother'.",
          category: "vocabulary"
        },
        {
          id: "l1t4_cm5",
          wrong: "My father has 50 years",
          correct: "My father is 50 years old",
          explanation: "Always use 'to be' + 'years old' for age.",
          explanationEs: "Siempre usa 'to be' + 'years old' para la edad.",
          category: "grammar"
        }
      ],
      
      exercises: [
        {
          id: "l1t4_ex1",
          type: "matching",
          title: "Match Family Relationships",
          titleEs: "Relaciona Parentescos",
          instruction: "Match each term with its description.",
          instructionEs: "Relaciona cada término con su descripción.",
          difficulty: 1,
          items: [
            { id: "l1t4_ex1_1", prompt: "Your mother's mother", correctAnswer: "grandmother" },
            { id: "l1t4_ex1_2", prompt: "Your father's brother", correctAnswer: "uncle" },
            { id: "l1t4_ex1_3", prompt: "Your aunt's children", correctAnswer: "cousins" },
            { id: "l1t4_ex1_4", prompt: "Your brother's daughter", correctAnswer: "niece" },
            { id: "l1t4_ex1_5", prompt: "Brothers and sisters together", correctAnswer: "siblings" }
          ]
        },
        {
          id: "l1t4_ex2",
          type: "error-correction",
          title: "Fix the Family Sentences",
          titleEs: "Corrige las Oraciones de Familia",
          instruction: "Find and correct the error in each sentence.",
          instructionEs: "Encuentra y corrige el error en cada oración.",
          difficulty: 1,
          items: [
            { id: "l1t4_ex2_1", prompt: "My mother she is a teacher.", correctAnswer: "My mother is a teacher.", explanation: "Remove the extra pronoun 'she'.", explanationEs: "Quita el pronombre extra 'she'." },
            { id: "l1t4_ex2_2", prompt: "I have 30 years old.", correctAnswer: "I am 30 years old.", explanation: "Use 'am' not 'have' for age.", explanationEs: "Usa 'am' no 'have' para la edad." },
            { id: "l1t4_ex2_3", prompt: "My cousin brother lives in Mexico.", correctAnswer: "My cousin lives in Mexico.", explanation: "Just say 'cousin', not 'cousin brother'.", explanationEs: "Solo di 'cousin', no 'cousin brother'." },
            { id: "l1t4_ex2_4", prompt: "She is the sister of me.", correctAnswer: "She is my sister.", explanation: "Use possessive 'my', not 'of me'.", explanationEs: "Usa el posesivo 'my', no 'of me'." }
          ]
        },
        {
          id: "l1t4_ex3",
          type: "gap-fill",
          title: "Complete the Family Tree",
          titleEs: "Completa el Árbol Familiar",
          instruction: "Fill in the blank with the correct family member.",
          instructionEs: "Llena el espacio con el miembro de familia correcto.",
          difficulty: 1,
          items: [
            { id: "l1t4_ex3_1", prompt: "My mother's husband is my _____.", correctAnswer: "father", hint: "Your male parent", hintEs: "Tu padre" },
            { id: "l1t4_ex3_2", prompt: "My sister's son is my _____.", correctAnswer: "nephew", hint: "A male relative, child of sibling", hintEs: "Un pariente masculino, hijo de hermano/a" },
            { id: "l1t4_ex3_3", prompt: "My father's parents are my _____.", correctAnswer: "grandparents", hint: "Both grandmother and grandfather", hintEs: "Abuela y abuelo juntos" },
            { id: "l1t4_ex3_4", prompt: "My mother's sister is my _____.", correctAnswer: "aunt", hint: "A female relative of your parents' generation", hintEs: "Una pariente femenina de la generación de tus padres" }
          ]
        },
        {
          id: "l1t4_ex4",
          type: "situational",
          title: "Family Introductions",
          titleEs: "Presentaciones de Familia",
          instruction: "Choose the correct way to introduce family members.",
          instructionEs: "Elige la forma correcta de presentar a familiares.",
          difficulty: 1,
          items: [
            {
              id: "l1t4_ex4_1",
              prompt: "You want to introduce your mom to a friend",
              promptEs: "Quieres presentar a tu mamá a un amigo",
              options: ["My mother she is Maria", "This is my mother, Maria", "Is my mother Maria"],
              correctAnswer: "This is my mother, Maria",
              explanation: "'This is my...' is the standard way to introduce someone.",
              explanationEs: "'This is my...' es la forma estándar de presentar a alguien."
            },
            {
              id: "l1t4_ex4_2",
              prompt: "Someone asks if you have siblings",
              promptEs: "Alguien pregunta si tienes hermanos",
              options: ["Yes, I have one brother", "Yes, I am one brother", "Yes, I have brother one"],
              correctAnswer: "Yes, I have one brother",
              explanation: "'I have' + number + family member.",
              explanationEs: "'I have' + número + miembro de familia."
            },
            {
              id: "l1t4_ex4_3",
              prompt: "You want to say your father's age",
              promptEs: "Quieres decir la edad de tu padre",
              options: ["My father has 50 years", "My father is 50", "My father have 50 years old"],
              correctAnswer: "My father is 50",
              explanation: "Use 'is' + age. 'Years old' is optional.",
              explanationEs: "Usa 'is' + edad. 'Years old' es opcional."
            }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l1t4_dialogue",
        title: "Meeting the Family",
        titleEs: "Conociendo a la Familia",
        context: "Two friends are looking at a family photo together.",
        contextEs: "Dos amigos están mirando una foto familiar juntos.",
        speakers: [
          { id: "s1", name: "Ana", role: "Friend showing photos" },
          { id: "s2", name: "Tom", role: "Friend looking at photos" }
        ],
        lines: [
          { speakerId: "s1", text: "Look, this is my family!", textEs: "¡Mira, esta es mi familia!", note: "Introducing the photo", noteEs: "Presentando la foto" },
          { speakerId: "s2", text: "Oh, nice! Who is this?", textEs: "¡Oh, qué bien! ¿Quién es este?", note: "Asking about someone", noteEs: "Preguntando por alguien" },
          { speakerId: "s1", text: "This is my father. His name is Carlos.", textEs: "Este es mi padre. Se llama Carlos.", note: "Introducing father", noteEs: "Presentando al padre" },
          { speakerId: "s2", text: "And who is the woman next to him?", textEs: "¿Y quién es la mujer junto a él?", note: "Asking about another person", noteEs: "Preguntando por otra persona" },
          { speakerId: "s1", text: "That's my mother. She is a teacher.", textEs: "Esa es mi madre. Es maestra.", note: "Adding information about occupation", noteEs: "Añadiendo información sobre ocupación" },
          { speakerId: "s2", text: "Do you have any siblings?", textEs: "¿Tienes hermanos?", note: "Asking about brothers and sisters", noteEs: "Preguntando por hermanos" },
          { speakerId: "s1", text: "Yes! I have one brother and one sister. My brother is 25 and my sister is 18.", textEs: "¡Sí! Tengo un hermano y una hermana. Mi hermano tiene 25 y mi hermana tiene 18.", note: "Describing siblings with ages", noteEs: "Describiendo hermanos con edades" },
          { speakerId: "s2", text: "Is your sister older or younger than you?", textEs: "¿Tu hermana es mayor o menor que tú?", note: "Asking about comparative age", noteEs: "Preguntando sobre edad comparativa" },
          { speakerId: "s1", text: "She is younger. I am 22.", textEs: "Es menor. Yo tengo 22.", note: "Comparing ages", noteEs: "Comparando edades" }
        ],
        keyPhrases: [
          { phrase: "This is my...", translation: "Este/Esta es mi...", usage: "Introducing family members" },
          { phrase: "Who is this?", translation: "¿Quién es este/esta?", usage: "Asking about someone in a photo" },
          { phrase: "Do you have any siblings?", translation: "¿Tienes hermanos?", usage: "Asking about brothers and sisters" },
          { phrase: "I have [number] [family member]", translation: "Tengo [número] [familiar]", usage: "Describing family composition" },
          { phrase: "older/younger than", translation: "mayor/menor que", usage: "Comparing ages" }
        ],
        variations: [
          { original: "This is my father", alternative: "This is my dad", note: "More informal" },
          { original: "Do you have any siblings?", alternative: "Do you have brothers or sisters?", note: "More explicit" },
          { original: "She is younger", alternative: "She is my younger sister", note: "More complete" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/ð/",
            description: "The 'th' sound in 'mother', 'father', 'brother'",
            descriptionEs: "El sonido 'th' en 'mother', 'father', 'brother'",
            examples: [
              { word: "mother", transcription: "/ˈmʌðər/" },
              { word: "father", transcription: "/ˈfɑːðər/" },
              { word: "brother", transcription: "/ˈbrʌðər/" }
            ],
            tips: ["Put your tongue between your teeth", "It's a VOICED sound - use your vocal cords", "Not like 'd' or 'z'"]
          },
          {
            symbol: "/æ/",
            description: "The 'a' sound in 'dad', 'grandma', 'family'",
            descriptionEs: "El sonido 'a' en 'dad', 'grandma', 'family'",
            examples: [
              { word: "dad", transcription: "/dæd/" },
              { word: "grandma", transcription: "/ˈɡrænmɑː/" },
              { word: "family", transcription: "/ˈfæməli/" }
            ],
            tips: ["Open your mouth wide", "Sound between 'a' and 'e'", "Like saying 'ah' at the dentist, but shorter"]
          }
        ],
        commonProblems: [
          { word: "mother", wrong: "muder", correct: "MUH-ther", tip: "The 'th' is voiced, tongue between teeth" },
          { word: "daughter", wrong: "dow-ter", correct: "DAW-ter", tip: "The 'gh' is silent!" },
          { word: "aunt", wrong: "ant", correct: "ant/ahnt", tip: "In US: 'ant', in UK: 'ahnt' - both correct" }
        ],
        minimalPairs: [
          { word1: "mother", word2: "muther", soundDifference: "/ð/ vs /d/ - mother is correct" },
          { word1: "father", word2: "fodder", soundDifference: "/ð/ vs /d/ and vowel sounds" },
          { word1: "brother", word2: "broder", soundDifference: "/ð/ vs /d/ - don't confuse!" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "Is THIS your mother?", meaning: "Yes/no question rises" },
          { pattern: "Falling ↘", example: "This is my MOTHER.", meaning: "Statements fall at the end" }
        ]
      },
      
      culturalNote: {
        title: "Family Terms Across Cultures",
        titleEs: "Términos Familiares Entre Culturas",
        content: "In English-speaking cultures, using first names for family members (calling your aunt 'Susan' instead of 'Aunt Susan') can be more common than in Spanish-speaking cultures. The term 'family' can mean just immediate family (parents and siblings) or extended family (grandparents, aunts, uncles, cousins). Americans often say 'folks' informally to mean 'parents': 'My folks live in Texas.' In the UK, 'mum' is more common than 'mom'. Step-family members (stepmother, stepfather, etc.) are increasingly common and accepted. In business contexts, it's normal to ask 'Do you have family?' but not to ask detailed personal questions.",
        contentEs: "En culturas angloparlantes, usar nombres de pila para familiares (llamar a tu tía 'Susan' en vez de 'Aunt Susan') puede ser más común que en culturas hispanohablantes. El término 'family' puede significar solo familia inmediata (padres y hermanos) o familia extendida (abuelos, tíos, primos). Los americanos dicen 'folks' informalmente para 'parents': 'My folks live in Texas.' En UK, 'mum' es más común que 'mom'. Los miembros de familias reconstituidas (madrastra, padrastro, etc.) son cada vez más comunes y aceptados. En contextos de negocios, es normal preguntar 'Do you have family?' pero no hacer preguntas personales detalladas.",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l1t4_quiz",
        title: "Family Vocabulary Mastery Check",
        titleEs: "Prueba de Dominio de Vocabulario Familiar",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l1t4_q1",
            type: "multiple-choice",
            question: "How do you say age in English?",
            questionEs: "¿Cómo dices la edad en inglés?",
            options: ["I have 25 years", "I am 25 years old", "I have 25 years old"],
            correctAnswer: "I am 25 years old",
            explanation: "In English, we use 'to be' (am/is/are) + age, not 'have'.",
            explanationEs: "En inglés, usamos 'to be' (am/is/are) + edad, no 'have'.",
            points: 10
          },
          {
            id: "l1t4_q2",
            type: "multiple-choice",
            question: "What word means 'brothers and sisters'?",
            questionEs: "¿Qué palabra significa 'hermanos y hermanas'?",
            options: ["Family", "Siblings", "Parents", "Children"],
            correctAnswer: "Siblings",
            explanation: "'Siblings' is the collective term for brothers and sisters.",
            explanationEs: "'Siblings' es el término colectivo para hermanos y hermanas.",
            points: 10
          },
          {
            id: "l1t4_q3",
            type: "fill-blank",
            question: "My father's mother is my _____.",
            questionEs: "La madre de mi padre es mi _____.",
            correctAnswer: ["grandmother", "grandma"],
            explanation: "Grandmother = your parent's mother.",
            explanationEs: "Grandmother = la madre de tu padre o madre.",
            points: 10
          },
          {
            id: "l1t4_q4",
            type: "multiple-choice",
            question: "How do you introduce your mom to someone?",
            questionEs: "¿Cómo presentas a tu mamá a alguien?",
            options: ["My mother she is Maria", "This is my mother, Maria", "Is my mother, Maria"],
            correctAnswer: "This is my mother, Maria",
            explanation: "'This is my...' is the standard introduction phrase.",
            explanationEs: "'This is my...' es la frase estándar de presentación.",
            points: 10
          },
          {
            id: "l1t4_q5",
            type: "true-false",
            question: "'Cousin' in English specifies if it's male or female.",
            questionEs: "'Cousin' en inglés especifica si es masculino o femenino.",
            correctAnswer: "false",
            explanation: "'Cousin' is gender-neutral. Use 'male cousin' or 'female cousin' to specify.",
            explanationEs: "'Cousin' es neutro en género. Usa 'male cousin' o 'female cousin' para especificar.",
            points: 10
          },
          {
            id: "l1t4_q6",
            type: "multiple-choice",
            question: "What is the informal word for 'mother' in American English?",
            questionEs: "¿Cuál es la palabra informal para 'mother' en inglés americano?",
            options: ["Mum", "Mom", "Mama", "Ma"],
            correctAnswer: "Mom",
            explanation: "'Mom' is American English. 'Mum' is British English.",
            explanationEs: "'Mom' es inglés americano. 'Mum' es inglés británico.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l1t4_production",
        title: "Describe Your Family",
        titleEs: "Describe Tu Familia",
        type: "both",
        scenario: "You're showing photos to a new friend and describing your family members.",
        scenarioEs: "Estás mostrando fotos a un nuevo amigo y describiendo a los miembros de tu familia.",
        prompts: [
          {
            id: "l1t4_prod1",
            instruction: "Introduce your mother and say something about her",
            instructionEs: "Presenta a tu madre y di algo sobre ella",
            hints: ["This is my mother. Her name is...", "She is a teacher/nurse/etc."],
            hintsEs: ["Esta es mi madre. Se llama...", "Es maestra/enfermera/etc."],
            requiredElements: ["This is my mother", "information about her"]
          },
          {
            id: "l1t4_prod2",
            instruction: "Say how many siblings you have (or if you don't have any)",
            instructionEs: "Di cuántos hermanos tienes (o si no tienes)",
            hints: ["I have two brothers", "I don't have any siblings"],
            hintsEs: ["Tengo dos hermanos", "No tengo hermanos"],
            requiredElements: ["I have/don't have", "number + sibling type"]
          },
          {
            id: "l1t4_prod3",
            instruction: "Describe a grandparent using their age",
            instructionEs: "Describe a un abuelo usando su edad",
            hints: ["My grandfather is 75 years old", "My grandma is retired"],
            hintsEs: ["Mi abuelo tiene 75 años", "Mi abuela está jubilada"],
            requiredElements: ["grandparent term", "age with 'is...years old'"]
          },
          {
            id: "l1t4_prod4",
            instruction: "Compare ages of two family members",
            instructionEs: "Compara las edades de dos miembros de la familia",
            hints: ["My sister is older than me", "My brother is younger"],
            hintsEs: ["Mi hermana es mayor que yo", "Mi hermano es menor"],
            requiredElements: ["older/younger than"]
          }
        ],
        modelResponse: "This is my mother. Her name is Maria and she is a nurse. I have one brother and one sister. My brother is 28 years old and my sister is 22. My grandfather is 78 years old. He lives with us. My brother is older than me, but my sister is younger.",
        modelResponseEs: "Esta es mi madre. Se llama María y es enfermera. Tengo un hermano y una hermana. Mi hermano tiene 28 años y mi hermana tiene 22. Mi abuelo tiene 78 años. Vive con nosotros. Mi hermano es mayor que yo, pero mi hermana es menor.",
        evaluationCriteria: [
          "Used 'This is my...' for introductions",
          "Used 'I have' correctly for describing family",
          "Used 'is...years old' for ages, not 'has'",
          "Used comparative adjectives (older/younger) correctly"
        ],
        evaluationCriteriaEs: [
          "Usó 'This is my...' para presentaciones",
          "Usó 'I have' correctamente para describir familia",
          "Usó 'is...years old' para edades, no 'has'",
          "Usó adjetivos comparativos (older/younger) correctamente"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l1t4_n1", word: "family", translation: "familia", type: "noun", definition: "parents and children", definitionEs: "padres e hijos", example: "My family is big.", exampleEs: "Mi familia es grande.", related: [], difficulty: 1 },
          { id: "l1t4_n2", word: "mother", translation: "madre", type: "noun", definition: "a female parent", definitionEs: "una mamá", example: "My mother is kind.", exampleEs: "Mi madre es amable.", related: ["mom"], difficulty: 1 },
          { id: "l1t4_n3", word: "father", translation: "padre", type: "noun", definition: "a male parent", definitionEs: "un papá", example: "My father works hard.", exampleEs: "Mi padre trabaja duro.", related: ["dad"], difficulty: 1 },
          { id: "l1t4_n4", word: "brother", translation: "hermano", type: "noun", definition: "a male sibling", definitionEs: "un hermano varón", example: "I have one brother.", exampleEs: "Tengo un hermano.", related: [], difficulty: 1 },
          { id: "l1t4_n5", word: "sister", translation: "hermana", type: "noun", definition: "a female sibling", definitionEs: "una hermana mujer", example: "My sister is older than me.", exampleEs: "Mi hermana es mayor que yo.", related: [], difficulty: 1 },
          { id: "l1t4_n6", word: "grandmother", translation: "abuela", type: "noun", definition: "mother of your parent", definitionEs: "la madre de tu padre o madre", example: "My grandmother bakes cookies.", exampleEs: "Mi abuela hornea galletas.", related: ["grandma"], difficulty: 1 },
          { id: "l1t4_n7", word: "grandfather", translation: "abuelo", type: "noun", definition: "father of your parent", definitionEs: "el padre de tu padre o madre", example: "My grandfather tells stories.", exampleEs: "Mi abuelo cuenta historias.", related: ["grandpa"], difficulty: 1 },
          { id: "l1t4_n8", word: "son", translation: "hijo", type: "noun", definition: "a male child", definitionEs: "un hijo varón", example: "He is my son.", exampleEs: "Él es mi hijo.", related: [], difficulty: 1 },
          { id: "l1t4_n9", word: "daughter", translation: "hija", type: "noun", definition: "a female child", definitionEs: "una hija mujer", example: "She is my daughter.", exampleEs: "Ella es mi hija.", related: [], difficulty: 1 },
          { id: "l1t4_n10", word: "parents", translation: "padres", type: "noun", definition: "mother and father", definitionEs: "madre y padre", example: "My parents love me.", exampleEs: "Mis padres me aman.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l1t4_v1", word: "love", translation: "amar", type: "verb", definition: "to care deeply for someone", definitionEs: "querer mucho a alguien", example: "I love my family.", exampleEs: "Amo a mi familia.", related: ["loving"], difficulty: 1 },
          { id: "l1t4_v2", word: "live", translation: "vivir", type: "verb", definition: "to have your home somewhere", definitionEs: "tener tu casa en algún lugar", example: "I live with my parents.", exampleEs: "Vivo con mis padres.", related: ["living"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l1t4_a1", word: "old", translation: "viejo/mayor", type: "adjective", definition: "having lived many years", definitionEs: "que ha vivido muchos años", example: "My grandfather is old.", exampleEs: "Mi abuelo es mayor.", related: ["older"], difficulty: 1 },
          { id: "l1t4_a2", word: "young", translation: "joven", type: "adjective", definition: "not old", definitionEs: "que no es viejo", example: "My sister is young.", exampleEs: "Mi hermana es joven.", related: ["younger"], difficulty: 1 },
        ],
        expressions: [
          { id: "l1t4_e1", word: "This is my...", translation: "Este/a es mi...", type: "expression", definition: "introducing someone", definitionEs: "presentar a alguien", example: "This is my mother.", exampleEs: "Esta es mi madre.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 5,
      title: "The Body",
      titleEs: "El Cuerpo Humano",
      introduction: {
        title: "🦴 Las Partes del Cuerpo en Inglés",
        explanation: "Conocer las partes del cuerpo es esencial para visitas médicas, describir síntomas o simplemente hablar de ti mismo. En esta lección aprenderás vocabulario que usarás en situaciones cotidianas y de emergencia.",
        keyPoints: [
          "La cabeza: head (cabeza), eye/eyes (ojo/ojos), ear/ears (oreja/orejas), nose (nariz), mouth (boca)",
          "El torso: arm/arms (brazo/brazos), hand/hands (mano/manos), finger/fingers (dedo/dedos de la mano)",
          "Las piernas: leg/legs (pierna/piernas), foot/feet (pie/pies) - ¡Atención al plural irregular!",
          "Para decir que algo duele usamos 'hurt': 'My head hurts' (Me duele la cabeza)",
          "Los plurales irregulares son importantes: foot → feet, tooth → teeth"
        ],
        examples: [
          { english: "My head hurts.", spanish: "Me duele la cabeza.", explanation: "Describiendo dolor" },
          { english: "I have two hands.", spanish: "Tengo dos manos.", explanation: "Contando partes del cuerpo" },
          { english: "Touch your nose!", spanish: "¡Toca tu nariz!", explanation: "Instrucciones con partes del cuerpo" }
        ],
        tips: [
          "💡 'Foot' (pie) tiene plural irregular: 'feet'. No digas 'foots'",
          "💡 En inglés usamos 'have' no 'tener' para dolor: 'I have a headache' (Tengo dolor de cabeza)",
          "💡 Para ojos y cabello usamos 'have': 'I have brown eyes' (Tengo ojos café)"
        ],
        whenToUse: [
          "En el doctor: 'My back hurts', 'I have a headache'",
          "Describiendo personas: 'She has blue eyes', 'He has big hands'",
          "Dando instrucciones: 'Raise your hand', 'Close your eyes'"
        ],
        whenNotToUse: [
          "No digas 'I have pain in my head' - di 'I have a headache' o 'My head hurts'",
          "No confundas 'foot' (pie) con 'leg' (pierna)"
        ]
      },
      objectives: [
        "Nombrar partes del cuerpo",
        "Describir síntomas básicos",
        "Usar el verbo 'have' con partes del cuerpo",
        "Aprender vocabulario de salud básico"
      ],
      estimatedMinutes: 15,
      connectionToPrevious: "Ahora puedes describir a tu familia con más detalle: 'My mom has brown eyes', 'My dad has big hands'.",
      connectionToNext: "El vocabulario del cuerpo te ayudará a pedir comida y describir gustos: 'My stomach is hungry'.",
      grammarTheoryIds: ['a1-verb-to-be', 'a1-subject-pronouns'],
      
      commonMistakes: [
        {
          id: "l1t5_cm1",
          wrong: "I have two foots",
          correct: "I have two feet",
          explanation: "'Foot' has an irregular plural: 'feet', not 'foots'.",
          explanationEs: "'Foot' tiene un plural irregular: 'feet', no 'foots'.",
          category: "vocabulary"
        },
        {
          id: "l1t5_cm2",
          wrong: "My head is hurting me",
          correct: "My head hurts",
          explanation: "Simply say 'hurts' - don't add 'is' or 'me'.",
          explanationEs: "Simplemente di 'hurts' - no añadas 'is' o 'me'.",
          category: "grammar"
        },
        {
          id: "l1t5_cm3",
          wrong: "I have pain in my stomach",
          correct: "I have a stomachache / My stomach hurts",
          explanation: "Use the compound word 'stomachache' or 'My [body part] hurts'.",
          explanationEs: "Usa la palabra compuesta 'stomachache' o 'My [parte del cuerpo] hurts'.",
          category: "usage"
        },
        {
          id: "l1t5_cm4",
          wrong: "I have the eyes blue",
          correct: "I have blue eyes",
          explanation: "Adjective before noun, no article 'the' needed.",
          explanationEs: "Adjetivo antes del sustantivo, no se necesita artículo 'the'.",
          category: "grammar"
        },
        {
          id: "l1t5_cm5",
          wrong: "My tooths hurt",
          correct: "My teeth hurt",
          explanation: "'Tooth' has an irregular plural: 'teeth', not 'tooths'.",
          explanationEs: "'Tooth' tiene un plural irregular: 'teeth', no 'tooths'.",
          category: "vocabulary"
        }
      ],
      
      exercises: [
        {
          id: "l1t5_ex1",
          type: "matching",
          title: "Match Body Parts to Functions",
          titleEs: "Relaciona Partes del Cuerpo con Funciones",
          instruction: "Match each body part with what it does.",
          instructionEs: "Relaciona cada parte del cuerpo con lo que hace.",
          difficulty: 1,
          items: [
            { id: "l1t5_ex1_1", prompt: "You see with these", correctAnswer: "eyes" },
            { id: "l1t5_ex1_2", prompt: "You hear with these", correctAnswer: "ears" },
            { id: "l1t5_ex1_3", prompt: "You smell with this", correctAnswer: "nose" },
            { id: "l1t5_ex1_4", prompt: "You walk with these", correctAnswer: "feet" },
            { id: "l1t5_ex1_5", prompt: "You write with this", correctAnswer: "hand" }
          ]
        },
        {
          id: "l1t5_ex2",
          type: "error-correction",
          title: "Fix the Body Sentences",
          titleEs: "Corrige las Oraciones del Cuerpo",
          instruction: "Find and correct the error in each sentence.",
          instructionEs: "Encuentra y corrige el error en cada oración.",
          difficulty: 1,
          items: [
            { id: "l1t5_ex2_1", prompt: "I have two foots.", correctAnswer: "I have two feet.", explanation: "Foot → feet (irregular plural).", explanationEs: "Foot → feet (plural irregular)." },
            { id: "l1t5_ex2_2", prompt: "My tooths are white.", correctAnswer: "My teeth are white.", explanation: "Tooth → teeth (irregular plural).", explanationEs: "Tooth → teeth (plural irregular)." },
            { id: "l1t5_ex2_3", prompt: "She has the eyes green.", correctAnswer: "She has green eyes.", explanation: "No 'the', adjective before noun.", explanationEs: "Sin 'the', adjetivo antes del sustantivo." },
            { id: "l1t5_ex2_4", prompt: "My head is hurting.", correctAnswer: "My head hurts.", explanation: "Use simple present for pain.", explanationEs: "Usa presente simple para dolor." }
          ]
        },
        {
          id: "l1t5_ex3",
          type: "gap-fill",
          title: "Complete Body Descriptions",
          titleEs: "Completa las Descripciones del Cuerpo",
          instruction: "Fill in the blank with the correct body part.",
          instructionEs: "Llena el espacio con la parte del cuerpo correcta.",
          difficulty: 1,
          items: [
            { id: "l1t5_ex3_1", prompt: "I smell with my _____.", correctAnswer: "nose", hint: "On your face, above your mouth", hintEs: "En tu cara, arriba de tu boca" },
            { id: "l1t5_ex3_2", prompt: "I have ten _____ on my hands.", correctAnswer: "fingers", hint: "The small parts at the end of your hands", hintEs: "Las partes pequeñas al final de tus manos" },
            { id: "l1t5_ex3_3", prompt: "I think with my _____.", correctAnswer: "head", hint: "On top of your body", hintEs: "En la parte superior de tu cuerpo" },
            { id: "l1t5_ex3_4", prompt: "I walk with my _____ and _____.", correctAnswer: "legs and feet", hint: "Lower body parts", hintEs: "Partes inferiores del cuerpo" }
          ]
        },
        {
          id: "l1t5_ex4",
          type: "situational",
          title: "At the Doctor's Office",
          titleEs: "En el Consultorio del Doctor",
          instruction: "Choose the correct way to describe your symptoms.",
          instructionEs: "Elige la forma correcta de describir tus síntomas.",
          difficulty: 1,
          items: [
            {
              id: "l1t5_ex4_1",
              prompt: "You have pain in your head",
              promptEs: "Tienes dolor en tu cabeza",
              options: ["I have pain in my head", "My head hurts", "My head is paining"],
              correctAnswer: "My head hurts",
              explanation: "'My [body part] hurts' is the natural way to express pain.",
              explanationEs: "'My [parte del cuerpo] hurts' es la forma natural de expresar dolor."
            },
            {
              id: "l1t5_ex4_2",
              prompt: "You need to describe your tooth pain",
              promptEs: "Necesitas describir tu dolor de diente",
              options: ["I have a toothache", "My tooth is paining", "I have tooth pain"],
              correctAnswer: "I have a toothache",
              explanation: "Use compound words: headache, toothache, stomachache.",
              explanationEs: "Usa palabras compuestas: headache, toothache, stomachache."
            },
            {
              id: "l1t5_ex4_3",
              prompt: "You can't see well",
              promptEs: "No puedes ver bien",
              options: ["My eyes are bad", "I have problems with my eyes", "My eyes don't work"],
              correctAnswer: "I have problems with my eyes",
              explanation: "Polite way to describe vision issues.",
              explanationEs: "Forma educada de describir problemas de visión."
            }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l1t5_dialogue",
        title: "Visiting the Doctor",
        titleEs: "Visitando al Doctor",
        context: "A patient talks to the doctor about health problems.",
        contextEs: "Un paciente habla con el doctor sobre problemas de salud.",
        speakers: [
          { id: "s1", name: "Doctor", role: "Medical professional" },
          { id: "s2", name: "Patient", role: "Someone who is sick" }
        ],
        lines: [
          { speakerId: "s1", text: "Hello! What seems to be the problem today?", textEs: "¡Hola! ¿Cuál parece ser el problema hoy?", note: "Doctor greeting", noteEs: "Saludo del doctor" },
          { speakerId: "s2", text: "My head hurts. I have a terrible headache.", textEs: "Me duele la cabeza. Tengo un dolor de cabeza terrible.", note: "Two ways to say the same thing", noteEs: "Dos formas de decir lo mismo" },
          { speakerId: "s1", text: "I see. Does anything else hurt?", textEs: "Entiendo. ¿Te duele algo más?", note: "Asking about other symptoms", noteEs: "Preguntando por otros síntomas" },
          { speakerId: "s2", text: "Yes, my throat hurts too. And my ears.", textEs: "Sí, me duele la garganta también. Y los oídos.", note: "Listing multiple body parts", noteEs: "Listando múltiples partes del cuerpo" },
          { speakerId: "s1", text: "Open your mouth, please. Let me look at your throat.", textEs: "Abre la boca, por favor. Déjame ver tu garganta.", note: "Doctor giving instructions", noteEs: "Doctor dando instrucciones" },
          { speakerId: "s2", text: "Aaah...", textEs: "Aaah...", note: "Following instructions", noteEs: "Siguiendo instrucciones" },
          { speakerId: "s1", text: "Your throat is red. Does it hurt when you swallow?", textEs: "Tu garganta está roja. ¿Te duele cuando tragas?", note: "Specific symptom question", noteEs: "Pregunta de síntoma específico" },
          { speakerId: "s2", text: "Yes, it hurts a lot.", textEs: "Sí, duele mucho.", note: "Confirming symptom", noteEs: "Confirmando síntoma" }
        ],
        keyPhrases: [
          { phrase: "My [body part] hurts", translation: "Me duele [parte del cuerpo]", usage: "Expressing pain in a specific area" },
          { phrase: "I have a [body part]-ache", translation: "Tengo dolor de [parte del cuerpo]", usage: "Common for head, tooth, stomach, back" },
          { phrase: "Open your [body part]", translation: "Abre tu [parte del cuerpo]", usage: "Following doctor's instructions" },
          { phrase: "Does it hurt?", translation: "¿Duele?", usage: "Asking about pain" }
        ],
        variations: [
          { original: "My head hurts", alternative: "I have a headache", note: "Same meaning, different structure" },
          { original: "Does it hurt?", alternative: "Is it painful?", note: "More formal" },
          { original: "My throat hurts", alternative: "I have a sore throat", note: "Common expression" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/θ/",
            description: "The voiceless 'th' in 'mouth', 'tooth', 'throat'",
            descriptionEs: "El 'th' sin voz en 'mouth', 'tooth', 'throat'",
            examples: [
              { word: "mouth", transcription: "/maʊθ/" },
              { word: "tooth", transcription: "/tuːθ/" },
              { word: "throat", transcription: "/θroʊt/" }
            ],
            tips: ["Tongue between teeth", "No vibration in throat", "Like a snake's hiss"]
          },
          {
            symbol: "/ʊ/",
            description: "The short 'oo' sound in 'foot'",
            descriptionEs: "El sonido 'oo' corto en 'foot'",
            examples: [
              { word: "foot", transcription: "/fʊt/" },
              { word: "good", transcription: "/ɡʊd/" }
            ],
            tips: ["Short sound, not long like 'food'", "Lips slightly rounded"]
          }
        ],
        commonProblems: [
          { word: "knee", wrong: "k-nee", correct: "nee", tip: "The 'k' is silent!" },
          { word: "stomach", wrong: "sto-MACK", correct: "STUH-muk", tip: "Stress on first syllable, 'ch' sounds like 'k'" },
          { word: "muscle", wrong: "muss-cle", correct: "MUSS-ul", tip: "The 'c' is silent" }
        ],
        minimalPairs: [
          { word1: "foot", word2: "food", soundDifference: "/ʊ/ vs /uː/ - short vs long 'oo'" },
          { word1: "mouth", word2: "mouse", soundDifference: "/θ/ vs /s/ - different ending" },
          { word1: "teeth", word2: "tease", soundDifference: "/θ/ vs /z/ - voiceless vs voiced" }
        ],
        intonationPatterns: [
          { pattern: "Falling ↘", example: "My head HURTS.", meaning: "Statement about pain falls" },
          { pattern: "Rising ↗", example: "Does your head HURT?", meaning: "Yes/no questions rise" }
        ]
      },
      
      culturalNote: {
        title: "Talking About Health",
        titleEs: "Hablando de Salud",
        content: "In English-speaking countries, people often don't discuss health issues in detail unless asked specifically. 'How are you?' is usually a greeting, not a real health inquiry - just answer 'Fine, thanks!' In medical settings, doctors may ask you to describe your pain on a scale of 1-10. British English uses 'poorly' or 'unwell' instead of 'sick' (which means 'vomiting' in UK). In the US, you 'call in sick' to work; in the UK, you 'phone in sick'. Remember that 'hurt' is for physical pain, while 'ache' is usually duller, continuous pain (headache, backache).",
        contentEs: "En países angloparlantes, la gente no suele discutir problemas de salud en detalle a menos que se les pregunte específicamente. '¿How are you?' es usualmente un saludo, no una pregunta real de salud - solo responde 'Fine, thanks!' En entornos médicos, los doctores pueden pedirte que describas tu dolor en una escala del 1-10. El inglés británico usa 'poorly' o 'unwell' en vez de 'sick' (que significa 'vomitar' en UK). En EE.UU., 'call in sick' al trabajo; en UK, 'phone in sick'. Recuerda que 'hurt' es para dolor físico, mientras 'ache' es usualmente dolor más sordo y continuo (headache, backache).",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l1t5_quiz",
        title: "Body Parts Mastery Check",
        titleEs: "Prueba de Dominio de Partes del Cuerpo",
        passingScore: 70,
        timeLimit: 240,
        questions: [
          {
            id: "l1t5_q1",
            type: "multiple-choice",
            question: "What is the plural of 'foot'?",
            questionEs: "¿Cuál es el plural de 'foot'?",
            options: ["Foots", "Feet", "Feets", "Foot"],
            correctAnswer: "Feet",
            explanation: "'Foot' has an irregular plural: 'feet'.",
            explanationEs: "'Foot' tiene un plural irregular: 'feet'.",
            points: 10
          },
          {
            id: "l1t5_q2",
            type: "multiple-choice",
            question: "How do you say you have pain in your head?",
            questionEs: "¿Cómo dices que tienes dolor en tu cabeza?",
            options: ["I have pain in my head", "My head is hurting me", "My head hurts", "My head has pain"],
            correctAnswer: "My head hurts",
            explanation: "'My [body part] hurts' is the natural expression.",
            explanationEs: "'My [parte del cuerpo] hurts' es la expresión natural.",
            points: 10
          },
          {
            id: "l1t5_q3",
            type: "fill-blank",
            question: "I see with my _____.",
            questionEs: "Veo con mis _____.",
            correctAnswer: ["eyes"],
            explanation: "Eyes are for seeing.",
            explanationEs: "Los ojos son para ver.",
            points: 10
          },
          {
            id: "l1t5_q4",
            type: "multiple-choice",
            question: "What is the plural of 'tooth'?",
            questionEs: "¿Cuál es el plural de 'tooth'?",
            options: ["Tooths", "Teeth", "Toothes", "Teeths"],
            correctAnswer: "Teeth",
            explanation: "'Tooth' has an irregular plural: 'teeth'.",
            explanationEs: "'Tooth' tiene un plural irregular: 'teeth'.",
            points: 10
          },
          {
            id: "l1t5_q5",
            type: "true-false",
            question: "'I have blue eyes' is the correct way to describe eye color.",
            questionEs: "'I have blue eyes' es la forma correcta de describir el color de ojos.",
            correctAnswer: "true",
            explanation: "Yes! 'I have' + adjective + body part (plural).",
            explanationEs: "¡Sí! 'I have' + adjetivo + parte del cuerpo (plural).",
            points: 10
          },
          {
            id: "l1t5_q6",
            type: "multiple-choice",
            question: "How many fingers do you have in total?",
            questionEs: "¿Cuántos dedos tienes en total?",
            options: ["Eight", "Ten", "Five", "Twenty"],
            correctAnswer: "Ten",
            explanation: "You have 10 fingers (5 on each hand).",
            explanationEs: "Tienes 10 dedos (5 en cada mano).",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l1t5_production",
        title: "Describe Yourself",
        titleEs: "Descríbete",
        type: "both",
        scenario: "You're describing yourself to someone who can't see you (like on the phone).",
        scenarioEs: "Estás describiéndote a alguien que no puede verte (como por teléfono).",
        prompts: [
          {
            id: "l1t5_prod1",
            instruction: "Describe your eye color",
            instructionEs: "Describe el color de tus ojos",
            hints: ["I have brown eyes", "I have green eyes"],
            hintsEs: ["Tengo ojos café", "Tengo ojos verdes"],
            requiredElements: ["I have", "color + eyes"]
          },
          {
            id: "l1t5_prod2",
            instruction: "Describe your hair",
            instructionEs: "Describe tu cabello",
            hints: ["I have long brown hair", "I have short black hair"],
            hintsEs: ["Tengo cabello largo y café", "Tengo cabello corto y negro"],
            requiredElements: ["I have", "length/color + hair"]
          },
          {
            id: "l1t5_prod3",
            instruction: "Describe something that hurts today (or invent one)",
            instructionEs: "Describe algo que te duele hoy (o inventa uno)",
            hints: ["My back hurts", "I have a headache"],
            hintsEs: ["Me duele la espalda", "Tengo dolor de cabeza"],
            requiredElements: ["My...hurts OR I have a...ache"]
          },
          {
            id: "l1t5_prod4",
            instruction: "Count your fingers and toes",
            instructionEs: "Cuenta tus dedos de manos y pies",
            hints: ["I have ten fingers and ten toes"],
            hintsEs: ["Tengo diez dedos de las manos y diez de los pies"],
            requiredElements: ["I have", "ten fingers", "ten toes"]
          }
        ],
        modelResponse: "I have brown eyes and long black hair. My nose is small. I have ten fingers and ten toes. Today, my back hurts a little because I worked a lot.",
        modelResponseEs: "Tengo ojos cafés y cabello largo y negro. Mi nariz es pequeña. Tengo diez dedos de las manos y diez de los pies. Hoy, me duele un poco la espalda porque trabajé mucho.",
        evaluationCriteria: [
          "Used 'I have' for physical descriptions",
          "Adjective before noun (brown eyes, not eyes brown)",
          "Used 'hurts' or '-ache' correctly for pain",
          "Used correct irregular plurals (feet, teeth)"
        ],
        evaluationCriteriaEs: [
          "Usó 'I have' para descripciones físicas",
          "Adjetivo antes del sustantivo (brown eyes, no eyes brown)",
          "Usó 'hurts' o '-ache' correctamente para dolor",
          "Usó plurales irregulares correctos (feet, teeth)"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l1t5_n1", word: "head", translation: "cabeza", type: "noun", definition: "the top part of your body", definitionEs: "la parte superior de tu cuerpo", example: "My head hurts.", exampleEs: "Me duele la cabeza.", related: [], difficulty: 1 },
          { id: "l1t5_n2", word: "eye", translation: "ojo", type: "noun", definition: "the part you see with", definitionEs: "la parte con la que ves", example: "I have brown eyes.", exampleEs: "Tengo ojos café.", related: ["eyes"], difficulty: 1 },
          { id: "l1t5_n3", word: "ear", translation: "oreja", type: "noun", definition: "the part you hear with", definitionEs: "la parte con la que oyes", example: "I have two ears.", exampleEs: "Tengo dos orejas.", related: ["ears"], difficulty: 1 },
          { id: "l1t5_n4", word: "nose", translation: "nariz", type: "noun", definition: "the part you smell with", definitionEs: "la parte con la que hueles", example: "My nose is big.", exampleEs: "Mi nariz es grande.", related: [], difficulty: 1 },
          { id: "l1t5_n5", word: "mouth", translation: "boca", type: "noun", definition: "the part you eat with", definitionEs: "la parte con la que comes", example: "Open your mouth.", exampleEs: "Abre la boca.", related: [], difficulty: 1 },
          { id: "l1t5_n6", word: "hand", translation: "mano", type: "noun", definition: "the part at the end of your arm", definitionEs: "la parte al final de tu brazo", example: "Wash your hands.", exampleEs: "Lava tus manos.", related: ["hands"], difficulty: 1 },
          { id: "l1t5_n7", word: "arm", translation: "brazo", type: "noun", definition: "the part between shoulder and hand", definitionEs: "la parte entre el hombro y la mano", example: "I broke my arm.", exampleEs: "Me rompí el brazo.", related: ["arms"], difficulty: 1 },
          { id: "l1t5_n8", word: "leg", translation: "pierna", type: "noun", definition: "the part you walk with", definitionEs: "la parte con la que caminas", example: "My leg is tired.", exampleEs: "Mi pierna está cansada.", related: ["legs"], difficulty: 1 },
          { id: "l1t5_n9", word: "foot", translation: "pie", type: "noun", definition: "the part at the end of your leg", definitionEs: "la parte al final de tu pierna", example: "My foot hurts.", exampleEs: "Me duele el pie.", related: ["feet"], difficulty: 1 },
          { id: "l1t5_n10", word: "finger", translation: "dedo (mano)", type: "noun", definition: "the five parts of your hand", definitionEs: "las cinco partes de tu mano", example: "I cut my finger.", exampleEs: "Me corté el dedo.", related: ["fingers"], difficulty: 1 },
        ],
        verbs: [
          { id: "l1t5_v1", word: "hurt", translation: "doler", type: "verb", definition: "to feel pain", definitionEs: "sentir dolor", example: "My head hurts.", exampleEs: "Me duele la cabeza.", related: ["pain"], difficulty: 1 },
          { id: "l1t5_v2", word: "touch", translation: "tocar", type: "verb", definition: "to put your hand on something", definitionEs: "poner tu mano sobre algo", example: "Touch your nose.", exampleEs: "Toca tu nariz.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l1t5_a1", word: "big", translation: "grande", type: "adjective", definition: "large in size", definitionEs: "grande de tamaño", example: "I have big hands.", exampleEs: "Tengo manos grandes.", related: ["bigger"], difficulty: 1 },
          { id: "l1t5_a2", word: "small", translation: "pequeño", type: "adjective", definition: "little in size", definitionEs: "pequeño de tamaño", example: "She has small feet.", exampleEs: "Ella tiene pies pequeños.", related: ["smaller"], difficulty: 1 },
        ],
        expressions: [],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 6,
      title: "Food and Drinks",
      titleEs: "Comida y Bebidas",
      introduction: {
        title: "🍽️ Comida y Bebidas en Inglés",
        explanation: "La comida es un tema universal. Ya sea en un restaurante, de compras o cocinando, necesitarás este vocabulario constantemente. Aprenderás a nombrar alimentos, expresar tus gustos y hacer pedidos básicos.",
        keyPoints: [
          "Comidas del día: breakfast (desayuno), lunch (almuerzo), dinner (cena)",
          "Para expresar gustos usamos 'like': 'I like pizza' (Me gusta la pizza)",
          "Para expresar hambre/sed: 'I'm hungry' (Tengo hambre), 'I'm thirsty' (Tengo sed)",
          "'Some' se usa en oraciones afirmativas: 'I want some water'",
          "'Any' se usa en preguntas y negaciones: 'Do you have any coffee?'"
        ],
        examples: [
          { english: "I'm hungry. I want some pizza.", spanish: "Tengo hambre. Quiero algo de pizza.", explanation: "Expresando hambre y deseo" },
          { english: "Do you like coffee?", spanish: "¿Te gusta el café?", explanation: "Preguntando sobre gustos" },
          { english: "I don't have any milk.", spanish: "No tengo leche.", explanation: "Negación con 'any'" }
        ],
        tips: [
          "💡 En inglés decimos 'I'm hungry' (estoy hambriento) no 'I have hungry'",
          "💡 'Chicken' es tanto el animal (pollo) como la carne",
          "💡 'Rice' y 'bread' son incontables - no tienen plural"
        ],
        whenToUse: [
          "En restaurantes: 'I would like some water, please'",
          "De compras: 'Do you have any fresh bread?'",
          "Expresando gustos: 'I like Italian food', 'I don't like spicy food'"
        ],
        whenNotToUse: [
          "No digas 'I have hungry' - di 'I am hungry'",
          "No digas 'a rice' - 'rice' es incontable"
        ]
      },
      objectives: [
        "Nombrar alimentos comunes",
        "Expresar gustos con 'like'",
        "Pedir comida de forma básica",
        "Usar 'some' y 'any'"
      ],
      estimatedMinutes: 20,
      connectionToPrevious: "Ahora que conoces partes del cuerpo, puedes decir 'I'm hungry' (mi estómago quiere comida).",
      connectionToNext: "Los días de la semana te ayudarán a planear tus comidas: 'On Monday, I eat pasta'.",
      grammarTheoryIds: ['a1-articles', 'a1-there-is-are'],
      
      commonMistakes: [
        {
          id: "l1t6_cm1",
          wrong: "I have hungry",
          correct: "I am hungry",
          explanation: "Use 'am' (to be), not 'have' for hunger/thirst in English.",
          explanationEs: "Usa 'am' (ser/estar), no 'have' para hambre/sed en inglés.",
          category: "grammar"
        },
        {
          id: "l1t6_cm2",
          wrong: "I want a rice",
          correct: "I want some rice",
          explanation: "Rice is uncountable - use 'some', not 'a'.",
          explanationEs: "Rice es incontable - usa 'some', no 'a'.",
          category: "grammar"
        },
        {
          id: "l1t6_cm3",
          wrong: "Do you have some coffee?",
          correct: "Do you have any coffee?",
          explanation: "Use 'any' in questions and negatives, 'some' in affirmatives.",
          explanationEs: "Usa 'any' en preguntas y negaciones, 'some' en afirmativas.",
          category: "grammar"
        },
        {
          id: "l1t6_cm4",
          wrong: "I like the pizza",
          correct: "I like pizza",
          explanation: "Don't use 'the' when talking about things in general.",
          explanationEs: "No uses 'the' cuando hablas de cosas en general.",
          category: "grammar"
        },
        {
          id: "l1t6_cm5",
          wrong: "I eat the breakfast at 8",
          correct: "I eat breakfast at 8",
          explanation: "No article before meals (breakfast, lunch, dinner).",
          explanationEs: "Sin artículo antes de comidas (breakfast, lunch, dinner).",
          category: "grammar"
        }
      ],
      
      exercises: [
        {
          id: "l1t6_ex1",
          type: "gap-fill",
          title: "Some or Any?",
          titleEs: "¿Some o Any?",
          instruction: "Fill in the blank with 'some' or 'any'.",
          instructionEs: "Llena el espacio con 'some' o 'any'.",
          difficulty: 1,
          items: [
            { id: "l1t6_ex1_1", prompt: "I want _____ coffee.", correctAnswer: "some", hint: "Affirmative sentence", hintEs: "Oración afirmativa" },
            { id: "l1t6_ex1_2", prompt: "Do you have _____ milk?", correctAnswer: "any", hint: "Question", hintEs: "Pregunta" },
            { id: "l1t6_ex1_3", prompt: "I don't have _____ bread.", correctAnswer: "any", hint: "Negative sentence", hintEs: "Oración negativa" },
            { id: "l1t6_ex1_4", prompt: "There is _____ water in the glass.", correctAnswer: "some", hint: "Affirmative sentence", hintEs: "Oración afirmativa" }
          ]
        },
        {
          id: "l1t6_ex2",
          type: "error-correction",
          title: "Fix the Food Sentences",
          titleEs: "Corrige las Oraciones de Comida",
          instruction: "Find and correct the error in each sentence.",
          instructionEs: "Encuentra y corrige el error en cada oración.",
          difficulty: 1,
          items: [
            { id: "l1t6_ex2_1", prompt: "I have hungry.", correctAnswer: "I am hungry.", explanation: "Use 'am', not 'have' for hungry.", explanationEs: "Usa 'am', no 'have' para hambre." },
            { id: "l1t6_ex2_2", prompt: "I want a rice.", correctAnswer: "I want some rice.", explanation: "'Rice' is uncountable - use 'some'.", explanationEs: "'Rice' es incontable - usa 'some'." },
            { id: "l1t6_ex2_3", prompt: "I like the pizza.", correctAnswer: "I like pizza.", explanation: "No 'the' for general statements.", explanationEs: "Sin 'the' para afirmaciones generales." },
            { id: "l1t6_ex2_4", prompt: "I eat the breakfast at 8.", correctAnswer: "I eat breakfast at 8.", explanation: "No article before meals.", explanationEs: "Sin artículo antes de comidas." }
          ]
        },
        {
          id: "l1t6_ex3",
          type: "matching",
          title: "Match Foods to Categories",
          titleEs: "Relaciona Comidas con Categorías",
          instruction: "Match each food with its category.",
          instructionEs: "Relaciona cada comida con su categoría.",
          difficulty: 1,
          items: [
            { id: "l1t6_ex3_1", prompt: "Apple, banana, orange", correctAnswer: "fruits" },
            { id: "l1t6_ex3_2", prompt: "Carrot, broccoli, tomato", correctAnswer: "vegetables" },
            { id: "l1t6_ex3_3", prompt: "Chicken, beef, pork", correctAnswer: "meat" },
            { id: "l1t6_ex3_4", prompt: "Water, juice, milk", correctAnswer: "drinks" },
            { id: "l1t6_ex3_5", prompt: "Bread, rice, pasta", correctAnswer: "carbohydrates" }
          ]
        },
        {
          id: "l1t6_ex4",
          type: "situational",
          title: "At a Restaurant",
          titleEs: "En un Restaurante",
          instruction: "Choose the correct way to order food.",
          instructionEs: "Elige la forma correcta de pedir comida.",
          difficulty: 1,
          items: [
            {
              id: "l1t6_ex4_1",
              prompt: "You want to order water",
              promptEs: "Quieres pedir agua",
              options: ["Give me water", "I would like some water, please", "Water me"],
              correctAnswer: "I would like some water, please",
              explanation: "'I would like' is polite for ordering.",
              explanationEs: "'I would like' es educado para pedir."
            },
            {
              id: "l1t6_ex4_2",
              prompt: "You want to know if they have pizza",
              promptEs: "Quieres saber si tienen pizza",
              options: ["You have pizza?", "Do you have any pizza?", "There is pizza?"],
              correctAnswer: "Do you have any pizza?",
              explanation: "'Do you have any...' is correct for questions.",
              explanationEs: "'Do you have any...' es correcto para preguntas."
            },
            {
              id: "l1t6_ex4_3",
              prompt: "You want to say you're very hungry",
              promptEs: "Quieres decir que tienes mucha hambre",
              options: ["I have much hungry", "I am very hungry", "I am very hunger"],
              correctAnswer: "I am very hungry",
              explanation: "'I am hungry' with 'very' for emphasis.",
              explanationEs: "'I am hungry' con 'very' para énfasis."
            }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l1t6_dialogue",
        title: "Ordering at a Café",
        titleEs: "Ordenando en un Café",
        context: "A customer orders food and drinks at a café.",
        contextEs: "Un cliente ordena comida y bebidas en un café.",
        speakers: [
          { id: "s1", name: "Waiter", role: "Server" },
          { id: "s2", name: "Customer", role: "Guest" }
        ],
        lines: [
          { speakerId: "s1", text: "Hi! What would you like today?", textEs: "¡Hola! ¿Qué le gustaría hoy?", note: "Polite greeting and question", noteEs: "Saludo y pregunta educados" },
          { speakerId: "s2", text: "I'm hungry. Do you have any sandwiches?", textEs: "Tengo hambre. ¿Tienen sandwiches?", note: "Using 'any' in questions", noteEs: "Usando 'any' en preguntas" },
          { speakerId: "s1", text: "Yes! We have chicken, ham, and vegetable sandwiches.", textEs: "¡Sí! Tenemos de pollo, jamón y vegetales.", note: "Listing options", noteEs: "Listando opciones" },
          { speakerId: "s2", text: "I would like a chicken sandwich, please.", textEs: "Quisiera un sandwich de pollo, por favor.", note: "Polite ordering with 'would like'", noteEs: "Pedido educado con 'would like'" },
          { speakerId: "s1", text: "Would you like something to drink?", textEs: "¿Le gustaría algo de tomar?", note: "Offering drinks", noteEs: "Ofreciendo bebidas" },
          { speakerId: "s2", text: "Yes, I'm thirsty. I would like some coffee, please.", textEs: "Sí, tengo sed. Quisiera café, por favor.", note: "Using 'some' in affirmatives", noteEs: "Usando 'some' en afirmativas" },
          { speakerId: "s1", text: "Do you want milk in your coffee?", textEs: "¿Quiere leche en su café?", note: "Follow-up question", noteEs: "Pregunta de seguimiento" },
          { speakerId: "s2", text: "No, thank you. I don't like milk in my coffee.", textEs: "No, gracias. No me gusta la leche en mi café.", note: "Polite refusal + preference", noteEs: "Rechazo educado + preferencia" }
        ],
        keyPhrases: [
          { phrase: "I would like...", translation: "Me gustaría...", usage: "Polite way to order" },
          { phrase: "Do you have any...?", translation: "¿Tienen...?", usage: "Asking about availability" },
          { phrase: "I'm hungry/thirsty", translation: "Tengo hambre/sed", usage: "Expressing need for food/drink" },
          { phrase: "I (don't) like...", translation: "(No) me gusta...", usage: "Expressing preferences" }
        ],
        variations: [
          { original: "I would like", alternative: "I'll have", note: "More casual ordering" },
          { original: "I'm hungry", alternative: "I'm starving", note: "More emphatic (very hungry)" },
          { original: "I would like some coffee", alternative: "Can I get a coffee?", note: "Casual American" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/ʌ/",
            description: "The 'uh' sound in 'lunch', 'hungry', 'cup'",
            descriptionEs: "El sonido 'uh' en 'lunch', 'hungry', 'cup'",
            examples: [
              { word: "lunch", transcription: "/lʌntʃ/" },
              { word: "hungry", transcription: "/ˈhʌŋɡri/" },
              { word: "cup", transcription: "/kʌp/" }
            ],
            tips: ["Short sound, like 'uh'", "Mouth relaxed and open", "Not like Spanish 'u'"]
          },
          {
            symbol: "/ɪ/",
            description: "The short 'i' sound in 'drink', 'milk', 'chicken'",
            descriptionEs: "El sonido 'i' corto en 'drink', 'milk', 'chicken'",
            examples: [
              { word: "drink", transcription: "/drɪŋk/" },
              { word: "milk", transcription: "/mɪlk/" },
              { word: "chicken", transcription: "/ˈtʃɪkɪn/" }
            ],
            tips: ["Short, relaxed 'i'", "Not as tense as Spanish 'i'", "Quick sound"]
          }
        ],
        commonProblems: [
          { word: "vegetable", wrong: "ve-ge-TA-ble", correct: "VEJ-tuh-bul", tip: "3 syllables in American English, stress on first" },
          { word: "chocolate", wrong: "cho-co-LA-te", correct: "CHAWK-lit", tip: "2 syllables in English, not 4!" },
          { word: "coffee", wrong: "co-FEE", correct: "KAW-fee", tip: "Stress on first syllable" }
        ],
        minimalPairs: [
          { word1: "lunch", word2: "launch", soundDifference: "/ʌ/ vs /ɔː/ - different vowels" },
          { word1: "eat", word2: "it", soundDifference: "/iː/ vs /ɪ/ - long vs short" },
          { word1: "food", word2: "foot", soundDifference: "/uː/ vs /ʊ/ - long vs short" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "Would you like some coffee?", meaning: "Offers rise at the end" },
          { pattern: "List ↗↗↘", example: "We have chicken, ham, and BEEF.", meaning: "Rise on items, fall on last" }
        ]
      },
      
      culturalNote: {
        title: "Eating Habits in English-Speaking Countries",
        titleEs: "Hábitos Alimenticios en Países Angloparlantes",
        content: "Meal times vary: breakfast (7-9 AM), lunch (12-1 PM), dinner (6-8 PM). In the US, 'dinner' is the main evening meal, while in the UK, some call it 'tea' or 'supper'. Tipping is important in US restaurants (15-20%), but less common in the UK. 'Please' and 'thank you' are essential when ordering. Americans often ask for 'checks' while British people ask for the 'bill'. Saying 'I'm full' is polite after eating; 'I'm stuffed' is casual. 'Doggy bag' or 'to-go box' is acceptable for taking leftovers home in the US.",
        contentEs: "Los horarios de comida varían: desayuno (7-9 AM), almuerzo (12-1 PM), cena (6-8 PM). En EE.UU., 'dinner' es la comida principal de la noche, mientras en UK algunos la llaman 'tea' o 'supper'. La propina es importante en restaurantes de EE.UU. (15-20%), pero menos común en UK. 'Please' y 'thank you' son esenciales al ordenar. Los americanos piden 'checks' mientras los británicos piden 'bill'. Decir 'I'm full' es educado después de comer; 'I'm stuffed' es casual. 'Doggy bag' o 'to-go box' es aceptable para llevarse sobras en EE.UU.",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l1t6_quiz",
        title: "Food & Drinks Mastery Check",
        titleEs: "Prueba de Dominio de Comida y Bebidas",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l1t6_q1",
            type: "multiple-choice",
            question: "How do you say 'Tengo hambre' in English?",
            questionEs: "¿Cómo dices 'Tengo hambre' en inglés?",
            options: ["I have hungry", "I am hungry", "I have hunger", "I am hunger"],
            correctAnswer: "I am hungry",
            explanation: "Use 'I am' (to be) for hunger, not 'I have'.",
            explanationEs: "Usa 'I am' (ser/estar) para hambre, no 'I have'.",
            points: 10
          },
          {
            id: "l1t6_q2",
            type: "multiple-choice",
            question: "Which is correct for a question?",
            questionEs: "¿Cuál es correcta para una pregunta?",
            options: ["Do you have some water?", "Do you have any water?", "Do you have a water?"],
            correctAnswer: "Do you have any water?",
            explanation: "Use 'any' in questions and negatives.",
            explanationEs: "Usa 'any' en preguntas y negaciones.",
            points: 10
          },
          {
            id: "l1t6_q3",
            type: "fill-blank",
            question: "I eat _____ at 8 AM. (morning meal)",
            questionEs: "Como _____ a las 8 AM. (comida de la mañana)",
            correctAnswer: ["breakfast"],
            explanation: "Breakfast is the morning meal.",
            explanationEs: "Breakfast es la comida de la mañana.",
            points: 10
          },
          {
            id: "l1t6_q4",
            type: "multiple-choice",
            question: "Which sentence is WRONG?",
            questionEs: "¿Cuál oración está MAL?",
            options: ["I like pizza", "I like the pizza", "I want some pizza"],
            correctAnswer: "I like the pizza",
            explanation: "Don't use 'the' for general likes. Say 'I like pizza'.",
            explanationEs: "No uses 'the' para gustos generales. Di 'I like pizza'.",
            points: 10
          },
          {
            id: "l1t6_q5",
            type: "true-false",
            question: "'Rice' can have a plural form: 'rices'.",
            questionEs: "'Rice' puede tener forma plural: 'rices'.",
            correctAnswer: "false",
            explanation: "'Rice' is uncountable - it doesn't have a plural.",
            explanationEs: "'Rice' es incontable - no tiene plural.",
            points: 10
          },
          {
            id: "l1t6_q6",
            type: "multiple-choice",
            question: "What is the polite way to order?",
            questionEs: "¿Cuál es la forma educada de pedir?",
            options: ["Give me coffee", "I would like some coffee, please", "Coffee for me"],
            correctAnswer: "I would like some coffee, please",
            explanation: "'I would like...please' is the polite way to order.",
            explanationEs: "'I would like...please' es la forma educada de ordenar.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l1t6_production",
        title: "Order Your Meal",
        titleEs: "Ordena Tu Comida",
        type: "both",
        scenario: "You're at a restaurant and need to order a complete meal.",
        scenarioEs: "Estás en un restaurante y necesitas ordenar una comida completa.",
        prompts: [
          {
            id: "l1t6_prod1",
            instruction: "Say you're hungry and ask if they have sandwiches",
            instructionEs: "Di que tienes hambre y pregunta si tienen sandwiches",
            hints: ["I'm hungry. Do you have any sandwiches?"],
            hintsEs: ["Tengo hambre. ¿Tienen sandwiches?"],
            requiredElements: ["I'm hungry", "Do you have any"]
          },
          {
            id: "l1t6_prod2",
            instruction: "Order a chicken sandwich politely",
            instructionEs: "Ordena un sandwich de pollo educadamente",
            hints: ["I would like a chicken sandwich, please"],
            hintsEs: ["Quisiera un sandwich de pollo, por favor"],
            requiredElements: ["I would like", "please"]
          },
          {
            id: "l1t6_prod3",
            instruction: "Say you're thirsty and order a drink",
            instructionEs: "Di que tienes sed y ordena una bebida",
            hints: ["I'm thirsty. I would like some water, please"],
            hintsEs: ["Tengo sed. Quisiera agua, por favor"],
            requiredElements: ["I'm thirsty", "some"]
          },
          {
            id: "l1t6_prod4",
            instruction: "Tell them one food you like and one you don't like",
            instructionEs: "Diles una comida que te gusta y una que no",
            hints: ["I like pizza but I don't like fish"],
            hintsEs: ["Me gusta la pizza pero no me gusta el pescado"],
            requiredElements: ["I like", "I don't like"]
          }
        ],
        modelResponse: "I'm hungry. Do you have any sandwiches? I would like a chicken sandwich, please. I'm also thirsty. Can I have some orange juice? I like chicken a lot, but I don't like fish.",
        modelResponseEs: "Tengo hambre. ¿Tienen sandwiches? Quisiera un sandwich de pollo, por favor. También tengo sed. ¿Puedo tener jugo de naranja? Me gusta mucho el pollo, pero no me gusta el pescado.",
        evaluationCriteria: [
          "Used 'I'm hungry/thirsty' correctly (not 'I have hungry')",
          "Used 'any' in questions",
          "Used 'some' in affirmative requests",
          "Used 'I would like' or 'Can I have' for polite ordering",
          "Expressed likes and dislikes correctly"
        ],
        evaluationCriteriaEs: [
          "Usó 'I'm hungry/thirsty' correctamente (no 'I have hungry')",
          "Usó 'any' en preguntas",
          "Usó 'some' en peticiones afirmativas",
          "Usó 'I would like' o 'Can I have' para ordenar educadamente",
          "Expresó gustos correctamente"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l1t6_n1", word: "food", translation: "comida", type: "noun", definition: "what you eat", definitionEs: "lo que comes", example: "The food is delicious.", exampleEs: "La comida está deliciosa.", related: [], difficulty: 1 },
          { id: "l1t6_n2", word: "water", translation: "agua", type: "noun", definition: "a clear liquid you drink", definitionEs: "un líquido claro que bebes", example: "I drink water every day.", exampleEs: "Bebo agua todos los días.", related: [], difficulty: 1 },
          { id: "l1t6_n3", word: "bread", translation: "pan", type: "noun", definition: "a baked food made from flour", definitionEs: "un alimento horneado hecho de harina", example: "I eat bread for breakfast.", exampleEs: "Como pan en el desayuno.", related: [], difficulty: 1 },
          { id: "l1t6_n4", word: "milk", translation: "leche", type: "noun", definition: "a white liquid from cows", definitionEs: "un líquido blanco de las vacas", example: "I drink milk with cereal.", exampleEs: "Tomo leche con cereal.", related: [], difficulty: 1 },
          { id: "l1t6_n5", word: "apple", translation: "manzana", type: "noun", definition: "a round red or green fruit", definitionEs: "una fruta redonda roja o verde", example: "An apple a day...", exampleEs: "Una manzana al día...", related: [], difficulty: 1 },
          { id: "l1t6_n6", word: "rice", translation: "arroz", type: "noun", definition: "small white grains", definitionEs: "granos pequeños blancos", example: "I eat rice with chicken.", exampleEs: "Como arroz con pollo.", related: [], difficulty: 1 },
          { id: "l1t6_n7", word: "chicken", translation: "pollo", type: "noun", definition: "meat from a bird", definitionEs: "carne de ave", example: "I like chicken.", exampleEs: "Me gusta el pollo.", related: [], difficulty: 1 },
          { id: "l1t6_n8", word: "coffee", translation: "café", type: "noun", definition: "a hot brown drink", definitionEs: "una bebida caliente marrón", example: "I drink coffee in the morning.", exampleEs: "Tomo café en la mañana.", related: [], difficulty: 1 },
          { id: "l1t6_n9", word: "tea", translation: "té", type: "noun", definition: "a hot drink made from leaves", definitionEs: "una bebida caliente hecha de hojas", example: "Would you like some tea?", exampleEs: "¿Te gustaría té?", related: [], difficulty: 1 },
          { id: "l1t6_n10", word: "egg", translation: "huevo", type: "noun", definition: "food that comes from hens", definitionEs: "alimento que viene de las gallinas", example: "I have eggs for breakfast.", exampleEs: "Desayuno huevos.", related: ["eggs"], difficulty: 1 },
        ],
        verbs: [
          { id: "l1t6_v1", word: "eat", translation: "comer", type: "verb", definition: "to put food in your mouth", definitionEs: "poner comida en tu boca", example: "I eat breakfast at 8.", exampleEs: "Desayuno a las 8.", related: ["eating"], difficulty: 1 },
          { id: "l1t6_v2", word: "drink", translation: "beber", type: "verb", definition: "to swallow liquid", definitionEs: "tragar líquido", example: "I drink water.", exampleEs: "Tomo agua.", related: ["drinking"], difficulty: 1 },
          { id: "l1t6_v3", word: "like", translation: "gustar", type: "verb", definition: "to enjoy something", definitionEs: "disfrutar algo", example: "I like pizza.", exampleEs: "Me gusta la pizza.", related: [], difficulty: 1 },
          { id: "l1t6_v4", word: "want", translation: "querer", type: "verb", definition: "to desire something", definitionEs: "desear algo", example: "I want some coffee.", exampleEs: "Quiero café.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l1t6_a1", word: "hungry", translation: "hambriento", type: "adjective", definition: "wanting food", definitionEs: "que quiere comida", example: "I'm hungry!", exampleEs: "¡Tengo hambre!", related: ["hunger"], difficulty: 1 },
          { id: "l1t6_a2", word: "thirsty", translation: "sediento", type: "adjective", definition: "wanting a drink", definitionEs: "que quiere beber", example: "I'm thirsty.", exampleEs: "Tengo sed.", related: ["thirst"], difficulty: 1 },
          { id: "l1t6_a3", word: "delicious", translation: "delicioso", type: "adjective", definition: "very good to eat", definitionEs: "muy bueno para comer", example: "This is delicious!", exampleEs: "¡Esto está delicioso!", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l1t6_e1", word: "I'm hungry", translation: "Tengo hambre", type: "expression", definition: "saying you want food", definitionEs: "decir que quieres comida", example: "I'm hungry. Let's eat.", exampleEs: "Tengo hambre. Comamos.", related: [], difficulty: 1 },
          { id: "l1t6_e2", word: "I'm thirsty", translation: "Tengo sed", type: "expression", definition: "saying you want a drink", definitionEs: "decir que quieres beber", example: "I'm thirsty. I need water.", exampleEs: "Tengo sed. Necesito agua.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 7,
      title: "Days and Months",
      titleEs: "Días y Meses",
      introduction: {
        title: "📅 Días y Meses en Inglés",
        explanation: "Saber los días de la semana y los meses es fundamental para hacer citas, planear eventos y hablar sobre rutinas. En inglés, los días y meses SIEMPRE se escriben con mayúscula inicial.",
        keyPoints: [
          "Días: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
          "En inglés la semana comienza el DOMINGO (Sunday), no el lunes",
          "Los días y meses SIEMPRE van con mayúscula: 'Monday' no 'monday'",
          "Usamos 'on' con días: 'on Monday' (el lunes)",
          "Usamos 'in' con meses: 'in January' (en enero)"
        ],
        examples: [
          { english: "Today is Monday.", spanish: "Hoy es lunes.", explanation: "Diciendo el día actual" },
          { english: "See you on Friday!", spanish: "¡Nos vemos el viernes!", explanation: "Usando 'on' con días" },
          { english: "My birthday is in May.", spanish: "Mi cumpleaños es en mayo.", explanation: "Usando 'in' con meses" }
        ],
        tips: [
          "💡 'Wednesday' se pronuncia 'WENZ-day', la 'd' del medio es silenciosa",
          "💡 'Tuesday' se pronuncia 'TYUZ-day', no 'TUS-day'",
          "💡 Abreviaciones comunes: Mon, Tue, Wed, Thu, Fri, Sat, Sun"
        ],
        whenToUse: [
          "Haciendo citas: 'Let's meet on Thursday'",
          "Hablando de rutinas: 'I work on Mondays'",
          "Fechas especiales: 'Christmas is in December'"
        ],
        whenNotToUse: [
          "No uses minúsculas: 'monday' ❌ → 'Monday' ✓",
          "No uses 'in' con días: 'in Monday' ❌ → 'on Monday' ✓"
        ]
      },
      objectives: [
        "Nombrar los días de la semana",
        "Nombrar los meses del año",
        "Hablar sobre fechas",
        "Expresar rutinas semanales"
      ],
      estimatedMinutes: 15,
      connectionToPrevious: "Ahora puedes decir cuándo comes: 'On Monday, I eat pizza for dinner'.",
      connectionToNext: "Los días te ayudarán a decir cuándo usas objetos: 'I use my computer on weekdays'.",
      grammarTheoryIds: ['a2-prepositions-time-place', 'a1-present-simple'],
      
      commonMistakes: [
        {
          id: "l1t7_cm1",
          wrong: "I work in Monday",
          correct: "I work on Monday",
          explanation: "Use 'ON' with days, not 'in'.",
          explanationEs: "Usa 'ON' con días, no 'in'.",
          category: "grammar"
        },
        {
          id: "l1t7_cm2",
          wrong: "My birthday is on January",
          correct: "My birthday is in January",
          explanation: "Use 'IN' with months, not 'on'.",
          explanationEs: "Usa 'IN' con meses, no 'on'.",
          category: "grammar"
        },
        {
          id: "l1t7_cm3",
          wrong: "Today is monday",
          correct: "Today is Monday",
          explanation: "Days and months ALWAYS start with a capital letter.",
          explanationEs: "Los días y meses SIEMPRE empiezan con mayúscula.",
          category: "vocabulary"
        },
        {
          id: "l1t7_cm4",
          wrong: "I go to work in the Mondays",
          correct: "I go to work on Mondays",
          explanation: "No 'the' before days. Use plural for routines.",
          explanationEs: "Sin 'the' antes de días. Usa plural para rutinas.",
          category: "grammar"
        },
        {
          id: "l1t7_cm5",
          wrong: "The class is in the Wednesday",
          correct: "The class is on Wednesday",
          explanation: "No 'the' before days when talking about schedules.",
          explanationEs: "Sin 'the' antes de días cuando hablas de horarios.",
          category: "grammar"
        }
      ],
      
      exercises: [
        {
          id: "l1t7_ex1",
          type: "gap-fill",
          title: "ON or IN?",
          titleEs: "¿ON o IN?",
          instruction: "Fill in the blank with 'on' or 'in'.",
          instructionEs: "Llena el espacio con 'on' o 'in'.",
          difficulty: 1,
          items: [
            { id: "l1t7_ex1_1", prompt: "I work _____ Monday.", correctAnswer: "on", hint: "Days use 'on'", hintEs: "Los días usan 'on'" },
            { id: "l1t7_ex1_2", prompt: "My birthday is _____ July.", correctAnswer: "in", hint: "Months use 'in'", hintEs: "Los meses usan 'in'" },
            { id: "l1t7_ex1_3", prompt: "See you _____ Friday!", correctAnswer: "on", hint: "Days use 'on'", hintEs: "Los días usan 'on'" },
            { id: "l1t7_ex1_4", prompt: "It's cold _____ January.", correctAnswer: "in", hint: "Months use 'in'", hintEs: "Los meses usan 'in'" }
          ]
        },
        {
          id: "l1t7_ex2",
          type: "reorder",
          title: "Order the Days",
          titleEs: "Ordena los Días",
          instruction: "Put the days in the correct order (Sunday first).",
          instructionEs: "Pon los días en orden correcto (Domingo primero).",
          difficulty: 1,
          items: [
            { id: "l1t7_ex2_1", prompt: "Monday, Sunday, Tuesday", correctAnswer: "Sunday, Monday, Tuesday", explanation: "Week starts with Sunday in English.", explanationEs: "La semana empieza con Sunday en inglés." },
            { id: "l1t7_ex2_2", prompt: "Thursday, Wednesday, Friday", correctAnswer: "Wednesday, Thursday, Friday", explanation: "Wed(4), Thu(5), Fri(6).", explanationEs: "Mié(4), Jue(5), Vie(6)." },
            { id: "l1t7_ex2_3", prompt: "Saturday, Friday, Sunday", correctAnswer: "Friday, Saturday, Sunday", explanation: "Fri(6), Sat(7), Sun(1 of next week).", explanationEs: "Vie(6), Sáb(7), Dom(1 de la siguiente semana)." }
          ]
        },
        {
          id: "l1t7_ex3",
          type: "error-correction",
          title: "Fix the Date Sentences",
          titleEs: "Corrige las Oraciones de Fecha",
          instruction: "Find and correct the error in each sentence.",
          instructionEs: "Encuentra y corrige el error en cada oración.",
          difficulty: 1,
          items: [
            { id: "l1t7_ex3_1", prompt: "I go to school in monday.", correctAnswer: "I go to school on Monday.", explanation: "Capital letter + 'on' with days.", explanationEs: "Mayúscula + 'on' con días." },
            { id: "l1t7_ex3_2", prompt: "My birthday is on March.", correctAnswer: "My birthday is in March.", explanation: "Use 'in' with months.", explanationEs: "Usa 'in' con meses." },
            { id: "l1t7_ex3_3", prompt: "We have class in the Fridays.", correctAnswer: "We have class on Fridays.", explanation: "No 'the', use 'on' with days.", explanationEs: "Sin 'the', usa 'on' con días." },
            { id: "l1t7_ex3_4", prompt: "Today is the tuesday.", correctAnswer: "Today is Tuesday.", explanation: "No 'the', capital letter required.", explanationEs: "Sin 'the', se requiere mayúscula." }
          ]
        },
        {
          id: "l1t7_ex4",
          type: "matching",
          title: "Match Months to Seasons",
          titleEs: "Relaciona Meses con Estaciones",
          instruction: "Match each month with its season (Northern Hemisphere).",
          instructionEs: "Relaciona cada mes con su estación (Hemisferio Norte).",
          difficulty: 1,
          items: [
            { id: "l1t7_ex4_1", prompt: "January", correctAnswer: "winter" },
            { id: "l1t7_ex4_2", prompt: "April", correctAnswer: "spring" },
            { id: "l1t7_ex4_3", prompt: "July", correctAnswer: "summer" },
            { id: "l1t7_ex4_4", prompt: "October", correctAnswer: "fall/autumn" },
            { id: "l1t7_ex4_5", prompt: "December", correctAnswer: "winter" }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l1t7_dialogue",
        title: "Making an Appointment",
        titleEs: "Haciendo una Cita",
        context: "Two friends are trying to schedule a meeting.",
        contextEs: "Dos amigos están tratando de programar una reunión.",
        speakers: [
          { id: "s1", name: "Lisa", role: "Friend 1" },
          { id: "s2", name: "Mark", role: "Friend 2" }
        ],
        lines: [
          { speakerId: "s1", text: "Hey Mark! What day is today?", textEs: "¡Oye Mark! ¿Qué día es hoy?", note: "Asking about the current day", noteEs: "Preguntando por el día actual" },
          { speakerId: "s2", text: "Today is Wednesday.", textEs: "Hoy es miércoles.", note: "Simple answer with day", noteEs: "Respuesta simple con día" },
          { speakerId: "s1", text: "Great! Are you free on Friday?", textEs: "¡Genial! ¿Estás libre el viernes?", note: "Using 'on' with day", noteEs: "Usando 'on' con día" },
          { speakerId: "s2", text: "Friday? Sorry, I work on Fridays.", textEs: "¿Viernes? Lo siento, trabajo los viernes.", note: "Plural for regular routine", noteEs: "Plural para rutina regular" },
          { speakerId: "s1", text: "What about Saturday?", textEs: "¿Qué tal el sábado?", note: "Suggesting alternative", noteEs: "Sugiriendo alternativa" },
          { speakerId: "s2", text: "Saturday is perfect! What time?", textEs: "¡El sábado es perfecto! ¿A qué hora?", note: "Agreeing to the day", noteEs: "Aceptando el día" },
          { speakerId: "s1", text: "How about 3 PM? Is that okay?", textEs: "¿Qué tal a las 3 PM? ¿Está bien?", note: "Suggesting time", noteEs: "Sugiriendo hora" },
          { speakerId: "s2", text: "Perfect! See you on Saturday at 3!", textEs: "¡Perfecto! ¡Nos vemos el sábado a las 3!", note: "Confirming", noteEs: "Confirmando" }
        ],
        keyPhrases: [
          { phrase: "What day is today?", translation: "¿Qué día es hoy?", usage: "Asking about the current day" },
          { phrase: "Are you free on [day]?", translation: "¿Estás libre el [día]?", usage: "Asking about availability" },
          { phrase: "I work on [days]", translation: "Trabajo los [días]", usage: "Describing routine with days" },
          { phrase: "See you on [day]!", translation: "¡Nos vemos el [día]!", usage: "Confirming a meeting" }
        ],
        variations: [
          { original: "Are you free on Friday?", alternative: "Can you do Friday?", note: "More casual" },
          { original: "What about Saturday?", alternative: "How about Saturday?", note: "Same meaning" },
          { original: "Saturday is perfect", alternative: "Saturday works for me", note: "Common expression" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/z/",
            description: "The 'z' sound at end of 'Tuesday', 'Wednesday', etc.",
            descriptionEs: "El sonido 'z' al final de 'Tuesday', 'Wednesday', etc.",
            examples: [
              { word: "Tuesday", transcription: "/ˈtuːzdeɪ/" },
              { word: "Wednesday", transcription: "/ˈwenzdeɪ/" },
              { word: "Thursday", transcription: "/ˈθɜːrzdeɪ/" }
            ],
            tips: ["'-day' sounds like 'day' but often reduced to 'dee'", "The 'z' is soft, not strong"]
          },
          {
            symbol: "/ˈweŋz/",
            description: "Wednesday pronunciation - silent 'd' and 'e'",
            descriptionEs: "Pronunciación de Wednesday - 'd' y 'e' silenciosas",
            examples: [
              { word: "Wednesday", transcription: "/ˈwenzdeɪ/" }
            ],
            tips: ["WENZ-day, NOT Wed-nes-day", "Only 2 syllables!", "Middle letters are silent"]
          }
        ],
        commonProblems: [
          { word: "Wednesday", wrong: "wed-NES-day", correct: "WENZ-day", tip: "The 'd' and 'e' are silent!" },
          { word: "Tuesday", wrong: "TUS-day", correct: "TYUZ-day", tip: "Start with 'tyoo' sound" },
          { word: "February", wrong: "feb-ru-A-ry", correct: "FEB-ru-er-y", tip: "Many people skip the first 'r'" }
        ],
        minimalPairs: [
          { word1: "Monday", word2: "Sunday", soundDifference: "/mʌn/ vs /sʌn/ - different first sounds" },
          { word1: "March", word2: "match", soundDifference: "Different ending: /tʃ/ vs /tʃ/ - same!" },
          { word1: "June", word2: "July", soundDifference: "Different months, easy to confuse" }
        ],
        intonationPatterns: [
          { pattern: "Falling ↘", example: "Today is MONDAY.", meaning: "Statements fall" },
          { pattern: "Rising ↗", example: "Is today MONDAY?", meaning: "Yes/no questions rise" }
        ]
      },
      
      culturalNote: {
        title: "Calendar Differences",
        titleEs: "Diferencias de Calendario",
        content: "In most English-speaking countries, the week starts on SUNDAY, not Monday. This is reflected in calendars, planners, and schedules. Americans write dates as Month/Day/Year (12/25/2024), while British use Day/Month/Year (25/12/2024) - this can cause confusion! 'Weekend' means Saturday and Sunday. 'Weekday' means Monday through Friday. When Americans say 'next Tuesday', they usually mean the coming Tuesday, but this can be ambiguous. 'This Tuesday' is clearer. TGIF (Thank God It's Friday) is a popular expression celebrating the end of the work week.",
        contentEs: "En la mayoría de países angloparlantes, la semana comienza el DOMINGO, no el lunes. Esto se refleja en calendarios, agendas y horarios. Los americanos escriben fechas como Mes/Día/Año (12/25/2024), mientras los británicos usan Día/Mes/Año (25/12/2024) - ¡esto puede causar confusión! 'Weekend' significa sábado y domingo. 'Weekday' significa de lunes a viernes. Cuando los americanos dicen 'next Tuesday', usualmente quieren decir el próximo martes, pero puede ser ambiguo. 'This Tuesday' es más claro. TGIF (Thank God It's Friday) es una expresión popular celebrando el fin de la semana laboral.",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l1t7_quiz",
        title: "Days & Months Mastery Check",
        titleEs: "Prueba de Dominio de Días y Meses",
        passingScore: 70,
        timeLimit: 240,
        questions: [
          {
            id: "l1t7_q1",
            type: "multiple-choice",
            question: "Which preposition do we use with days?",
            questionEs: "¿Qué preposición usamos con días?",
            options: ["in", "on", "at", "to"],
            correctAnswer: "on",
            explanation: "We say 'ON Monday', 'ON Friday', etc.",
            explanationEs: "Decimos 'ON Monday', 'ON Friday', etc.",
            points: 10
          },
          {
            id: "l1t7_q2",
            type: "multiple-choice",
            question: "Which preposition do we use with months?",
            questionEs: "¿Qué preposición usamos con meses?",
            options: ["in", "on", "at", "to"],
            correctAnswer: "in",
            explanation: "We say 'IN January', 'IN July', etc.",
            explanationEs: "Decimos 'IN January', 'IN July', etc.",
            points: 10
          },
          {
            id: "l1t7_q3",
            type: "fill-blank",
            question: "The day after Friday is _____.",
            questionEs: "El día después de Friday es _____.",
            correctAnswer: ["Saturday"],
            explanation: "Friday → Saturday → Sunday",
            explanationEs: "Friday → Saturday → Sunday",
            points: 10
          },
          {
            id: "l1t7_q4",
            type: "true-false",
            question: "In English calendars, the week starts on Monday.",
            questionEs: "En calendarios en inglés, la semana empieza el lunes.",
            correctAnswer: "false",
            explanation: "In English-speaking countries, the week usually starts on SUNDAY.",
            explanationEs: "En países angloparlantes, la semana usualmente empieza el DOMINGO.",
            points: 10
          },
          {
            id: "l1t7_q5",
            type: "multiple-choice",
            question: "How do you pronounce 'Wednesday'?",
            questionEs: "¿Cómo pronuncias 'Wednesday'?",
            options: ["wed-NES-day", "WENZ-day", "wed-en-day", "wed-nes-DAY"],
            correctAnswer: "WENZ-day",
            explanation: "The 'd' and second 'e' are silent: WENZ-day.",
            explanationEs: "La 'd' y la segunda 'e' son silenciosas: WENZ-day.",
            points: 10
          },
          {
            id: "l1t7_q6",
            type: "multiple-choice",
            question: "Which is correct?",
            questionEs: "¿Cuál es correcta?",
            options: ["I work in the Mondays", "I work on Mondays", "I work at Mondays"],
            correctAnswer: "I work on Mondays",
            explanation: "'On' + day (plural for routines), no article needed.",
            explanationEs: "'On' + día (plural para rutinas), sin artículo.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l1t7_production",
        title: "Your Weekly Schedule",
        titleEs: "Tu Horario Semanal",
        type: "both",
        scenario: "Describe your typical week and talk about important dates.",
        scenarioEs: "Describe tu semana típica y habla sobre fechas importantes.",
        prompts: [
          {
            id: "l1t7_prod1",
            instruction: "Say what day today is",
            instructionEs: "Di qué día es hoy",
            hints: ["Today is Monday", "Today is Friday"],
            hintsEs: ["Hoy es lunes", "Hoy es viernes"],
            requiredElements: ["Today is"]
          },
          {
            id: "l1t7_prod2",
            instruction: "Tell me what you do on Mondays",
            instructionEs: "Dime qué haces los lunes",
            hints: ["On Mondays, I work", "I go to school on Mondays"],
            hintsEs: ["Los lunes, trabajo", "Voy a la escuela los lunes"],
            requiredElements: ["on Monday(s)"]
          },
          {
            id: "l1t7_prod3",
            instruction: "Say when your birthday is (month)",
            instructionEs: "Di cuándo es tu cumpleaños (mes)",
            hints: ["My birthday is in July", "My birthday is in December"],
            hintsEs: ["Mi cumpleaños es en julio", "Mi cumpleaños es en diciembre"],
            requiredElements: ["in + month"]
          },
          {
            id: "l1t7_prod4",
            instruction: "Suggest meeting a friend on a specific day",
            instructionEs: "Sugiere encontrarte con un amigo un día específico",
            hints: ["Are you free on Saturday?", "Let's meet on Friday"],
            hintsEs: ["¿Estás libre el sábado?", "Reunámonos el viernes"],
            requiredElements: ["on + day"]
          }
        ],
        modelResponse: "Today is Wednesday. On Mondays, I go to work. On Saturdays, I relax at home. My birthday is in October. Are you free on Friday? Let's meet for coffee!",
        modelResponseEs: "Hoy es miércoles. Los lunes, voy al trabajo. Los sábados, descanso en casa. Mi cumpleaños es en octubre. ¿Estás libre el viernes? ¡Reunámonos para un café!",
        evaluationCriteria: [
          "Used 'on' with days",
          "Used 'in' with months",
          "Capitalized days and months",
          "Used correct day order"
        ],
        evaluationCriteriaEs: [
          "Usó 'on' con días",
          "Usó 'in' con meses",
          "Escribió días y meses con mayúscula",
          "Usó orden correcto de días"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l1t7_n1", word: "Monday", translation: "lunes", type: "noun", definition: "the first day of the week", definitionEs: "el primer día de la semana", example: "I work on Monday.", exampleEs: "Trabajo el lunes.", related: [], difficulty: 1 },
          { id: "l1t7_n2", word: "Tuesday", translation: "martes", type: "noun", definition: "the second day of the week", definitionEs: "el segundo día de la semana", example: "See you on Tuesday.", exampleEs: "Nos vemos el martes.", related: [], difficulty: 1 },
          { id: "l1t7_n3", word: "Wednesday", translation: "miércoles", type: "noun", definition: "the third day of the week", definitionEs: "el tercer día de la semana", example: "Wednesday is busy.", exampleEs: "El miércoles estoy ocupado.", related: [], difficulty: 1 },
          { id: "l1t7_n4", word: "Thursday", translation: "jueves", type: "noun", definition: "the fourth day of the week", definitionEs: "el cuarto día de la semana", example: "Thursday is almost Friday.", exampleEs: "El jueves es casi viernes.", related: [], difficulty: 1 },
          { id: "l1t7_n5", word: "Friday", translation: "viernes", type: "noun", definition: "the fifth day of the week", definitionEs: "el quinto día de la semana", example: "Thank God it's Friday!", exampleEs: "¡Gracias a Dios es viernes!", related: [], difficulty: 1 },
          { id: "l1t7_n6", word: "Saturday", translation: "sábado", type: "noun", definition: "the sixth day of the week", definitionEs: "el sexto día de la semana", example: "I relax on Saturday.", exampleEs: "Descanso el sábado.", related: [], difficulty: 1 },
          { id: "l1t7_n7", word: "Sunday", translation: "domingo", type: "noun", definition: "the seventh day of the week", definitionEs: "el séptimo día de la semana", example: "Sunday is a day of rest.", exampleEs: "El domingo es un día de descanso.", related: [], difficulty: 1 },
          { id: "l1t7_n8", word: "week", translation: "semana", type: "noun", definition: "seven days", definitionEs: "siete días", example: "See you next week!", exampleEs: "¡Nos vemos la próxima semana!", related: ["weekly"], difficulty: 1 },
          { id: "l1t7_n9", word: "month", translation: "mes", type: "noun", definition: "about 30 days", definitionEs: "aproximadamente 30 días", example: "My birthday is next month.", exampleEs: "Mi cumpleaños es el próximo mes.", related: ["monthly"], difficulty: 1 },
          { id: "l1t7_n10", word: "year", translation: "año", type: "noun", definition: "12 months", definitionEs: "12 meses", example: "Happy New Year!", exampleEs: "¡Feliz Año Nuevo!", related: ["yearly"], difficulty: 1 },
        ],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l1t7_e1", word: "What day is it?", translation: "¿Qué día es?", type: "expression", definition: "asking about the day", definitionEs: "preguntando por el día", example: "What day is it today?", exampleEs: "¿Qué día es hoy?", related: [], difficulty: 1 },
          { id: "l1t7_e2", word: "Today is...", translation: "Hoy es...", type: "expression", definition: "saying the day", definitionEs: "diciendo el día", example: "Today is Monday.", exampleEs: "Hoy es lunes.", related: [], difficulty: 1 },
        ],
        adverbs: [
          { id: "l1t7_d1", word: "today", translation: "hoy", type: "adverb", definition: "this day", definitionEs: "este día", example: "Today is a good day.", exampleEs: "Hoy es un buen día.", related: [], difficulty: 1 },
          { id: "l1t7_d2", word: "tomorrow", translation: "mañana", type: "adverb", definition: "the next day", definitionEs: "el día siguiente", example: "See you tomorrow!", exampleEs: "¡Nos vemos mañana!", related: [], difficulty: 1 },
          { id: "l1t7_d3", word: "yesterday", translation: "ayer", type: "adverb", definition: "the day before today", definitionEs: "el día antes de hoy", example: "I saw him yesterday.", exampleEs: "Lo vi ayer.", related: [], difficulty: 1 },
        ],
        prepositions: [],
      }
    },
    {
      id: 8,
      title: "Common Objects",
      titleEs: "Objetos Comunes",
      introduction: {
        title: "📦 Objetos Comunes en Inglés",
        explanation: "Estamos rodeados de objetos todos los días. Saber nombrarlos te ayudará a pedir cosas, dar instrucciones y describir tu entorno. También aprenderás a usar 'this' y 'that' para señalar objetos.",
        keyPoints: [
          "'This' (esto/este) se usa para objetos CERCA de ti: 'This is my book' (Este es mi libro)",
          "'That' (eso/ese) se usa para objetos LEJOS de ti: 'That is your pen' (Ese es tu bolígrafo)",
          "Para preguntar: 'What is this?' (¿Qué es esto?) / 'What is that?' (¿Qué es eso?)",
          "Plurales: 'these' (estos) y 'those' (esos): 'These are my keys' (Estas son mis llaves)"
        ],
        examples: [
          { english: "This is my phone.", spanish: "Este es mi teléfono.", explanation: "Objeto cerca" },
          { english: "What is that?", spanish: "¿Qué es eso?", explanation: "Preguntando sobre algo lejos" },
          { english: "Open the door, please.", spanish: "Abre la puerta, por favor.", explanation: "Dando instrucciones" }
        ],
        tips: [
          "💡 'Key' puede ser llave (de puerta) o tecla (de teclado)",
          "💡 'Phone' es la forma corta de 'telephone' - ambas son correctas",
          "💡 En inglés británico se dice 'mobile phone', en americano 'cell phone'"
        ],
        whenToUse: [
          "Identificando objetos: 'This is my laptop', 'That is your bag'",
          "Pidiendo cosas: 'Can I use your pen?'",
          "Dando instrucciones: 'Please close the window'"
        ],
        whenNotToUse: [
          "No confundas 'this/these' (cerca) con 'that/those' (lejos)",
          "No uses 'a' con objetos específicos: 'This is a my book' ❌"
        ]
      },
      objectives: [
        "Nombrar objetos cotidianos",
        "Usar 'this' y 'that'",
        "Preguntar '¿Qué es esto?'",
        "Describir objetos simples"
      ],
      estimatedMinutes: 15,
      connectionToPrevious: "Ahora puedes hablar de objetos con días: 'On Monday, I use my computer'.",
      connectionToNext: "Los objetos te ayudarán a practicar verbos: 'I open the door', 'I close the window'.",
      grammarTheoryIds: ['a1-articles', 'a1-there-is-are'],
      
      commonMistakes: [
        {
          id: "l1t8_cm1",
          wrong: "This is a my book",
          correct: "This is my book",
          explanation: "Don't use both 'a' and a possessive ('my').",
          explanationEs: "No uses 'a' y un posesivo ('my') juntos.",
          category: "grammar"
        },
        {
          id: "l1t8_cm2",
          wrong: "These is my keys",
          correct: "These are my keys",
          explanation: "'These' is plural, so use 'are', not 'is'.",
          explanationEs: "'These' es plural, así que usa 'are', no 'is'.",
          category: "grammar"
        },
        {
          id: "l1t8_cm3",
          wrong: "What is these?",
          correct: "What are these?",
          explanation: "'These' is plural, use 'are'.",
          explanationEs: "'These' es plural, usa 'are'.",
          category: "grammar"
        },
        {
          id: "l1t8_cm4",
          wrong: "Close the door (pointing at something far away)",
          correct: "Close that door",
          explanation: "Use 'that' for objects far from you.",
          explanationEs: "Usa 'that' para objetos lejos de ti.",
          category: "usage"
        },
        {
          id: "l1t8_cm5",
          wrong: "The table is maked of wood",
          correct: "The table is made of wood",
          explanation: "'Made' is the correct past participle, not 'maked'.",
          explanationEs: "'Made' es el participio pasado correcto, no 'maked'.",
          category: "grammar"
        }
      ],
      
      exercises: [
        {
          id: "l1t8_ex1",
          type: "gap-fill",
          title: "This, That, These, or Those?",
          titleEs: "¿This, That, These, o Those?",
          instruction: "Fill in the blank with the correct demonstrative.",
          instructionEs: "Llena el espacio con el demostrativo correcto.",
          difficulty: 1,
          items: [
            { id: "l1t8_ex1_1", prompt: "_____ is my pen. (pointing at pen in your hand)", correctAnswer: "This", hint: "Close to you, singular", hintEs: "Cerca de ti, singular" },
            { id: "l1t8_ex1_2", prompt: "_____ is your car over there.", correctAnswer: "That", hint: "Far from you, singular", hintEs: "Lejos de ti, singular" },
            { id: "l1t8_ex1_3", prompt: "_____ are my keys. (holding keys)", correctAnswer: "These", hint: "Close to you, plural", hintEs: "Cerca de ti, plural" },
            { id: "l1t8_ex1_4", prompt: "_____ are beautiful mountains. (pointing at distant mountains)", correctAnswer: "Those", hint: "Far from you, plural", hintEs: "Lejos de ti, plural" }
          ]
        },
        {
          id: "l1t8_ex2",
          type: "error-correction",
          title: "Fix the Object Sentences",
          titleEs: "Corrige las Oraciones de Objetos",
          instruction: "Find and correct the error in each sentence.",
          instructionEs: "Encuentra y corrige el error en cada oración.",
          difficulty: 1,
          items: [
            { id: "l1t8_ex2_1", prompt: "This is a my phone.", correctAnswer: "This is my phone.", explanation: "Don't use 'a' with possessives.", explanationEs: "No uses 'a' con posesivos." },
            { id: "l1t8_ex2_2", prompt: "These is my books.", correctAnswer: "These are my books.", explanation: "'These' is plural, use 'are'.", explanationEs: "'These' es plural, usa 'are'." },
            { id: "l1t8_ex2_3", prompt: "What is those?", correctAnswer: "What are those?", explanation: "'Those' is plural, use 'are'.", explanationEs: "'Those' es plural, usa 'are'." },
            { id: "l1t8_ex2_4", prompt: "The chair is maked of wood.", correctAnswer: "The chair is made of wood.", explanation: "'Made' is the correct form.", explanationEs: "'Made' es la forma correcta." }
          ]
        },
        {
          id: "l1t8_ex3",
          type: "matching",
          title: "Match Objects to Locations",
          titleEs: "Relaciona Objetos con Lugares",
          instruction: "Match each object with where you typically find it.",
          instructionEs: "Relaciona cada objeto con dónde lo encuentras típicamente.",
          difficulty: 1,
          items: [
            { id: "l1t8_ex3_1", prompt: "Bed, pillow, blanket", correctAnswer: "bedroom" },
            { id: "l1t8_ex3_2", prompt: "Stove, refrigerator, dishes", correctAnswer: "kitchen" },
            { id: "l1t8_ex3_3", prompt: "Soap, towel, toilet", correctAnswer: "bathroom" },
            { id: "l1t8_ex3_4", prompt: "Desk, computer, chair", correctAnswer: "office" },
            { id: "l1t8_ex3_5", prompt: "TV, sofa, remote", correctAnswer: "living room" }
          ]
        },
        {
          id: "l1t8_ex4",
          type: "situational",
          title: "Identify the Object",
          titleEs: "Identifica el Objeto",
          instruction: "Choose the correct way to ask about or identify objects.",
          instructionEs: "Elige la forma correcta de preguntar o identificar objetos.",
          difficulty: 1,
          items: [
            {
              id: "l1t8_ex4_1",
              prompt: "You want to know what something far away is",
              promptEs: "Quieres saber qué es algo que está lejos",
              options: ["What is this?", "What is that?", "What is it?"],
              correctAnswer: "What is that?",
              explanation: "'That' is for objects far from you.",
              explanationEs: "'That' es para objetos lejos de ti."
            },
            {
              id: "l1t8_ex4_2",
              prompt: "You're showing your phone to someone",
              promptEs: "Le estás mostrando tu teléfono a alguien",
              options: ["That is my phone", "This is my phone", "It is my phone"],
              correctAnswer: "This is my phone",
              explanation: "'This' is for objects close to you that you're showing.",
              explanationEs: "'This' es para objetos cerca de ti que estás mostrando."
            },
            {
              id: "l1t8_ex4_3",
              prompt: "You want to ask someone to close the window (far from both of you)",
              promptEs: "Quieres pedir a alguien que cierre la ventana (lejos de ambos)",
              options: ["Close this window", "Close that window", "Close a window"],
              correctAnswer: "Close that window",
              explanation: "'That' for objects far from the speaker.",
              explanationEs: "'That' para objetos lejos del hablante."
            }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l1t8_dialogue",
        title: "Finding Lost Objects",
        titleEs: "Encontrando Objetos Perdidos",
        context: "Two roommates are looking for things in their apartment.",
        contextEs: "Dos compañeros de cuarto están buscando cosas en su apartamento.",
        speakers: [
          { id: "s1", name: "Sara", role: "Roommate looking for things" },
          { id: "s2", name: "Mike", role: "Roommate helping" }
        ],
        lines: [
          { speakerId: "s1", text: "Mike! Where are my keys?", textEs: "¡Mike! ¿Dónde están mis llaves?", note: "Asking about location", noteEs: "Preguntando sobre ubicación" },
          { speakerId: "s2", text: "What are those on the table?", textEs: "¿Qué son esas en la mesa?", note: "Pointing at distant objects", noteEs: "Señalando objetos distantes" },
          { speakerId: "s1", text: "Oh! Those are my keys! Thanks!", textEs: "¡Oh! ¡Esas son mis llaves! ¡Gracias!", note: "Identifying plural objects", noteEs: "Identificando objetos plurales" },
          { speakerId: "s2", text: "And what is this? Is this your phone?", textEs: "¿Y qué es esto? ¿Es este tu teléfono?", note: "Picking up nearby object", noteEs: "Levantando objeto cercano" },
          { speakerId: "s1", text: "Yes, that's my phone! Where was it?", textEs: "¡Sí, ese es mi teléfono! ¿Dónde estaba?", note: "'That' because Mike has it now", noteEs: "'That' porque Mike lo tiene ahora" },
          { speakerId: "s2", text: "It was under this book.", textEs: "Estaba debajo de este libro.", note: "Book near Mike", noteEs: "Libro cerca de Mike" },
          { speakerId: "s1", text: "Can you open that window? It's hot.", textEs: "¿Puedes abrir esa ventana? Hace calor.", note: "Window far from Sara", noteEs: "Ventana lejos de Sara" },
          { speakerId: "s2", text: "Sure! No problem.", textEs: "¡Claro! No hay problema.", note: "Agreeing to help", noteEs: "Accediendo a ayudar" }
        ],
        keyPhrases: [
          { phrase: "What is this?", translation: "¿Qué es esto?", usage: "Asking about something close to you" },
          { phrase: "What is that?", translation: "¿Qué es eso?", usage: "Asking about something far from you" },
          { phrase: "These are my...", translation: "Estos/as son mis...", usage: "Identifying plural objects near you" },
          { phrase: "Can you open/close that...?", translation: "¿Puedes abrir/cerrar ese/esa...?", usage: "Requesting action on distant object" }
        ],
        variations: [
          { original: "Can you open that window?", alternative: "Could you open that window?", note: "More polite" },
          { original: "Where are my keys?", alternative: "Have you seen my keys?", note: "More common question" },
          { original: "That's my phone", alternative: "That one is mine", note: "Using 'mine'" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/ðɪs/",
            description: "The voiced 'th' in 'this', 'that', 'these', 'those'",
            descriptionEs: "El 'th' sonoro en 'this', 'that', 'these', 'those'",
            examples: [
              { word: "this", transcription: "/ðɪs/" },
              { word: "that", transcription: "/ðæt/" },
              { word: "these", transcription: "/ðiːz/" },
              { word: "those", transcription: "/ðoʊz/" }
            ],
            tips: ["Put tongue between teeth", "Let your voice vibrate", "Don't say 'dis' or 'dat'"]
          },
          {
            symbol: "/oʊ/",
            description: "The 'o' sound in 'phone', 'close', 'those'",
            descriptionEs: "El sonido 'o' en 'phone', 'close', 'those'",
            examples: [
              { word: "phone", transcription: "/foʊn/" },
              { word: "close", transcription: "/kloʊz/" },
              { word: "those", transcription: "/ðoʊz/" }
            ],
            tips: ["Start with 'o' and glide to 'u'", "Not just 'o', but 'ou'", "Round your lips"]
          }
        ],
        commonProblems: [
          { word: "this", wrong: "dis", correct: "this", tip: "Tongue between teeth for 'th'" },
          { word: "computer", wrong: "com-PU-ter", correct: "com-PYOO-ter", tip: "The 'pu' sounds like 'pyoo'" },
          { word: "key", wrong: "kay", correct: "kee", tip: "Long 'ee' sound, not 'ay'" }
        ],
        minimalPairs: [
          { word1: "this", word2: "these", soundDifference: "/ɪ/ vs /iː/ - short vs long vowel" },
          { word1: "close", word2: "clothes", soundDifference: "Nearly same! Clothes has 'th' sound" },
          { word1: "desk", word2: "disk", soundDifference: "/e/ vs /ɪ/ - different vowels" }
        ],
        intonationPatterns: [
          { pattern: "Rising ↗", example: "Is THIS your book?", meaning: "Yes/no questions rise" },
          { pattern: "Falling ↘", example: "This is my PHONE.", meaning: "Statements fall" }
        ]
      },
      
      culturalNote: {
        title: "Borrowing and Lending",
        titleEs: "Pedir y Prestar",
        content: "In English, 'borrow' and 'lend' have opposite meanings that many learners confuse: YOU borrow FROM someone (receive), but you lend TO someone (give). 'Can I borrow your pen?' is correct, not 'Can you borrow me your pen?' When someone asks to borrow something in English-speaking cultures, it's polite to ask. Personal space and belongings are respected. You might hear 'Help yourself' which means you can use something freely. In offices, items like staplers and pens are often shared. 'The' is used when both people know which object: 'Pass me the pen' (the one we can both see).",
        contentEs: "En inglés, 'borrow' y 'lend' tienen significados opuestos que muchos estudiantes confunden: TÚ borrowes FROM alguien (recibes), pero lendes TO alguien (das). 'Can I borrow your pen?' es correcto, no 'Can you borrow me your pen?' Cuando alguien pide prestado algo en culturas angloparlantes, es educado pedir. Se respeta el espacio personal y las pertenencias. Puedes escuchar 'Help yourself' que significa que puedes usar algo libremente. En oficinas, objetos como grapadoras y bolígrafos se comparten frecuentemente. 'The' se usa cuando ambas personas saben qué objeto: 'Pass me the pen' (el que ambos podemos ver).",
        regions: ["US", "UK"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l1t8_quiz",
        title: "Common Objects Mastery Check",
        titleEs: "Prueba de Dominio de Objetos Comunes",
        passingScore: 70,
        timeLimit: 240,
        questions: [
          {
            id: "l1t8_q1",
            type: "multiple-choice",
            question: "Which word do you use for an object CLOSE to you?",
            questionEs: "¿Qué palabra usas para un objeto CERCA de ti?",
            options: ["That", "Those", "This", "There"],
            correctAnswer: "This",
            explanation: "'This' = close (singular), 'That' = far (singular).",
            explanationEs: "'This' = cerca (singular), 'That' = lejos (singular).",
            points: 10
          },
          {
            id: "l1t8_q2",
            type: "multiple-choice",
            question: "Which is correct for plural objects FAR from you?",
            questionEs: "¿Cuál es correcta para objetos plurales LEJOS de ti?",
            options: ["This are", "These are", "Those are", "That are"],
            correctAnswer: "Those are",
            explanation: "'Those' = far + plural.",
            explanationEs: "'Those' = lejos + plural.",
            points: 10
          },
          {
            id: "l1t8_q3",
            type: "fill-blank",
            question: "_____ is my book. (holding it in your hand)",
            questionEs: "_____ es mi libro. (teniéndolo en tu mano)",
            correctAnswer: ["This"],
            explanation: "'This' for objects close to you.",
            explanationEs: "'This' para objetos cerca de ti.",
            points: 10
          },
          {
            id: "l1t8_q4",
            type: "true-false",
            question: "'This is a my phone' is correct English.",
            questionEs: "'This is a my phone' es inglés correcto.",
            correctAnswer: "false",
            explanation: "Don't use 'a' with possessives. Say 'This is my phone'.",
            explanationEs: "No uses 'a' con posesivos. Di 'This is my phone'.",
            points: 10
          },
          {
            id: "l1t8_q5",
            type: "multiple-choice",
            question: "How do you ask about a distant object?",
            questionEs: "¿Cómo preguntas sobre un objeto distante?",
            options: ["What is this?", "What is that?", "What is these?", "What is those?"],
            correctAnswer: "What is that?",
            explanation: "'That' for singular objects far from you.",
            explanationEs: "'That' para objetos singulares lejos de ti.",
            points: 10
          },
          {
            id: "l1t8_q6",
            type: "multiple-choice",
            question: "Complete: 'These _____ my keys.'",
            questionEs: "Completa: 'These _____ my keys.'",
            options: ["is", "are", "am", "be"],
            correctAnswer: "are",
            explanation: "'These' is plural, so use 'are'.",
            explanationEs: "'These' es plural, así que usa 'are'.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l1t8_production",
        title: "Describe Your Space",
        titleEs: "Describe Tu Espacio",
        type: "both",
        scenario: "Look around your room and describe the objects you see.",
        scenarioEs: "Mira alrededor de tu habitación y describe los objetos que ves.",
        prompts: [
          {
            id: "l1t8_prod1",
            instruction: "Point to something close to you and identify it",
            instructionEs: "Señala algo cerca de ti e identifícalo",
            hints: ["This is my phone", "This is my laptop"],
            hintsEs: ["Este es mi teléfono", "Esta es mi laptop"],
            requiredElements: ["This is"]
          },
          {
            id: "l1t8_prod2",
            instruction: "Point to something far from you and identify it",
            instructionEs: "Señala algo lejos de ti e identifícalo",
            hints: ["That is my bed", "That is the door"],
            hintsEs: ["Esa es mi cama", "Esa es la puerta"],
            requiredElements: ["That is"]
          },
          {
            id: "l1t8_prod3",
            instruction: "Ask about something you don't know the name of (pretend)",
            instructionEs: "Pregunta sobre algo que no sabes el nombre (finge)",
            hints: ["What is this?", "What is that?"],
            hintsEs: ["¿Qué es esto?", "¿Qué es eso?"],
            requiredElements: ["What is"]
          },
          {
            id: "l1t8_prod4",
            instruction: "Describe multiple objects near you",
            instructionEs: "Describe múltiples objetos cerca de ti",
            hints: ["These are my books", "These are my keys"],
            hintsEs: ["Estos son mis libros", "Estas son mis llaves"],
            requiredElements: ["These are"]
          }
        ],
        modelResponse: "This is my phone. It's on the table. That is my bed over there. What is that on the wall? Oh, it's a clock! These are my books on the desk. I have many books.",
        modelResponseEs: "Este es mi teléfono. Está en la mesa. Esa es mi cama allá. ¿Qué es eso en la pared? ¡Oh, es un reloj! Estos son mis libros en el escritorio. Tengo muchos libros.",
        evaluationCriteria: [
          "Used 'this' for close singular objects",
          "Used 'that' for far singular objects",
          "Used 'these/those' correctly for plurals",
          "Used 'is' with singular, 'are' with plural"
        ],
        evaluationCriteriaEs: [
          "Usó 'this' para objetos singulares cercanos",
          "Usó 'that' para objetos singulares lejanos",
          "Usó 'these/those' correctamente para plurales",
          "Usó 'is' con singular, 'are' con plural"
        ]
      },
      vocabulary: {
        nouns: [
          { id: "l1t8_n1", word: "book", translation: "libro", type: "noun", definition: "pages with writing", definitionEs: "páginas con escritura", example: "I'm reading a book.", exampleEs: "Estoy leyendo un libro.", related: ["books"], difficulty: 1 },
          { id: "l1t8_n2", word: "pen", translation: "bolígrafo", type: "noun", definition: "a tool for writing", definitionEs: "una herramienta para escribir", example: "Can I borrow your pen?", exampleEs: "¿Puedo usar tu bolígrafo?", related: ["pens"], difficulty: 1 },
          { id: "l1t8_n3", word: "phone", translation: "teléfono", type: "noun", definition: "a device for calling", definitionEs: "un dispositivo para llamar", example: "My phone is new.", exampleEs: "Mi teléfono es nuevo.", related: ["phones"], difficulty: 1 },
          { id: "l1t8_n4", word: "computer", translation: "computadora", type: "noun", definition: "an electronic machine", definitionEs: "una máquina electrónica", example: "I use the computer for work.", exampleEs: "Uso la computadora para trabajar.", related: ["computers"], difficulty: 1 },
          { id: "l1t8_n5", word: "table", translation: "mesa", type: "noun", definition: "furniture with a flat top", definitionEs: "mueble con superficie plana", example: "The book is on the table.", exampleEs: "El libro está en la mesa.", related: ["tables"], difficulty: 1 },
          { id: "l1t8_n6", word: "chair", translation: "silla", type: "noun", definition: "furniture for sitting", definitionEs: "mueble para sentarse", example: "Please, sit on this chair.", exampleEs: "Por favor, siéntate en esta silla.", related: ["chairs"], difficulty: 1 },
          { id: "l1t8_n7", word: "door", translation: "puerta", type: "noun", definition: "what you open to enter", definitionEs: "lo que abres para entrar", example: "Close the door, please.", exampleEs: "Cierra la puerta, por favor.", related: ["doors"], difficulty: 1 },
          { id: "l1t8_n8", word: "window", translation: "ventana", type: "noun", definition: "glass opening in a wall", definitionEs: "abertura de vidrio en la pared", example: "Open the window.", exampleEs: "Abre la ventana.", related: ["windows"], difficulty: 1 },
          { id: "l1t8_n9", word: "key", translation: "llave", type: "noun", definition: "a metal object for locks", definitionEs: "un objeto de metal para cerraduras", example: "Where are my keys?", exampleEs: "¿Dónde están mis llaves?", related: ["keys"], difficulty: 1 },
          { id: "l1t8_n10", word: "bag", translation: "bolsa", type: "noun", definition: "a container to carry things", definitionEs: "un contenedor para llevar cosas", example: "My bag is heavy.", exampleEs: "Mi bolsa está pesada.", related: ["bags"], difficulty: 1 },
        ],
        verbs: [
          { id: "l1t8_v1", word: "open", translation: "abrir", type: "verb", definition: "to make not closed", definitionEs: "hacer que no esté cerrado", example: "Open the door.", exampleEs: "Abre la puerta.", related: ["opening"], difficulty: 1 },
          { id: "l1t8_v2", word: "close", translation: "cerrar", type: "verb", definition: "to make not open", definitionEs: "hacer que no esté abierto", example: "Close the window.", exampleEs: "Cierra la ventana.", related: ["closing"], difficulty: 1 },
          { id: "l1t8_v3", word: "use", translation: "usar", type: "verb", definition: "to do something with", definitionEs: "hacer algo con", example: "I use my phone every day.", exampleEs: "Uso mi teléfono todos los días.", related: ["using"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l1t8_a1", word: "new", translation: "nuevo", type: "adjective", definition: "recently made", definitionEs: "recientemente hecho", example: "My phone is new.", exampleEs: "Mi teléfono es nuevo.", related: [], difficulty: 1 },
          { id: "l1t8_a2", word: "old", translation: "viejo", type: "adjective", definition: "not new", definitionEs: "que no es nuevo", example: "This is an old book.", exampleEs: "Este es un libro viejo.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l1t8_e1", word: "What is this?", translation: "¿Qué es esto?", type: "expression", definition: "asking about something", definitionEs: "preguntando sobre algo", example: "What is this?", exampleEs: "¿Qué es esto?", related: [], difficulty: 1 },
          { id: "l1t8_e2", word: "This is a...", translation: "Esto es un/a...", type: "expression", definition: "identifying something", definitionEs: "identificando algo", example: "This is a book.", exampleEs: "Esto es un libro.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 9,
      title: "Basic Verbs",
      titleEs: "Verbos Básicos",
      introduction: {
        title: "⚡ Verbos Básicos en Inglés",
        explanation: "Los verbos son el corazón de cualquier oración. Los verbos 'be' (ser/estar), 'have' (tener) y 'do' (hacer) son los más importantes y usados en inglés. Dominarlos es esencial para construir oraciones correctas.",
        keyPoints: [
          "El verbo 'BE' tiene tres formas en presente: am (I), is (he/she/it), are (you/we/they)",
          "El verbo 'HAVE' cambia a 'HAS' con he/she/it: 'She has a car'",
          "Para negar usamos 'don't' (do not) o 'doesn't' (does not): 'I don't know', 'He doesn't work'",
          "'Do' y 'does' también se usan como auxiliares para preguntas y negaciones",
          "En presente simple, los verbos con he/she/it añaden -s o -es: 'She works', 'He goes'"
        ],
        examples: [
          { english: "I am a student.", spanish: "Soy un estudiante.", explanation: "Verbo 'be' - identidad" },
          { english: "She has two cats.", spanish: "Ella tiene dos gatos.", explanation: "Verbo 'have' con tercera persona" },
          { english: "I don't understand.", spanish: "No entiendo.", explanation: "Negación con 'do'" }
        ],
        tips: [
          "💡 'I am' se contrae a 'I'm', 'You are' a 'You're', 'He is' a 'He's'",
          "💡 'Do' y 'Make' no son lo mismo: 'do homework', 'make breakfast'",
          "💡 'Get' es muy versátil: get up (levantarse), get home (llegar a casa), get tired (cansarse)"
        ],
        whenToUse: [
          "Describiendo estados: 'I am tired', 'She is happy'",
          "Describiendo posesiones: 'I have a car', 'He has a dog'",
          "Acciones regulares: 'I work every day', 'She goes to school'"
        ],
        whenNotToUse: [
          "No uses 'do' como auxiliar con 'be': 'I don't be tired' ❌ → 'I'm not tired' ✓",
          "No olvides la 's' en tercera persona: 'He work' ❌ → 'He works' ✓"
        ]
      },
      objectives: [
        "Usar 'be', 'have', 'do'",
        "Conjugar en presente simple",
        "Formar oraciones afirmativas",
        "Formar oraciones negativas"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "Ahora puedes usar verbos con objetos: 'I open the door', 'She has a book'.",
      connectionToNext: "Los verbos te preparan para hacer preguntas: 'Do you have...?', 'Are you...?'",
      grammarTheoryIds: ['a1-verb-to-be', 'a1-present-simple'],
      
      commonMistakes: [
        {
          id: "l1t9_cm1",
          wrong: "She have a car",
          correct: "She has a car",
          explanation: "'Have' becomes 'has' with he/she/it.",
          explanationEs: "'Have' se convierte en 'has' con he/she/it.",
          category: "grammar"
        },
        {
          id: "l1t9_cm2",
          wrong: "He don't work",
          correct: "He doesn't work",
          explanation: "Use 'doesn't' (not 'don't') with he/she/it.",
          explanationEs: "Usa 'doesn't' (no 'don't') con he/she/it.",
          category: "grammar"
        },
        {
          id: "l1t9_cm3",
          wrong: "I don't be tired",
          correct: "I'm not tired / I am not tired",
          explanation: "Don't use 'do' as auxiliary with 'be'. Just use 'not' after 'be'.",
          explanationEs: "No uses 'do' como auxiliar con 'be'. Solo usa 'not' después de 'be'.",
          category: "grammar"
        },
        {
          id: "l1t9_cm4",
          wrong: "She work every day",
          correct: "She works every day",
          explanation: "Add '-s' to verbs with he/she/it in present simple.",
          explanationEs: "Añade '-s' a verbos con he/she/it en presente simple.",
          category: "grammar"
        },
        {
          id: "l1t9_cm5",
          wrong: "I am have a car",
          correct: "I have a car",
          explanation: "Don't use 'am' with 'have'. 'Have' is a main verb here.",
          explanationEs: "No uses 'am' con 'have'. 'Have' es un verbo principal aquí.",
          category: "grammar"
        }
      ],
      
      exercises: [
        {
          id: "l1t9_ex1",
          type: "gap-fill",
          title: "Be: Am, Is, or Are?",
          titleEs: "Be: ¿Am, Is, o Are?",
          instruction: "Fill in the blank with the correct form of 'be'.",
          instructionEs: "Llena el espacio con la forma correcta de 'be'.",
          difficulty: 1,
          items: [
            { id: "l1t9_ex1_1", prompt: "I _____ a student.", correctAnswer: "am", hint: "I + am", hintEs: "I + am" },
            { id: "l1t9_ex1_2", prompt: "She _____ happy.", correctAnswer: "is", hint: "She + is", hintEs: "She + is" },
            { id: "l1t9_ex1_3", prompt: "They _____ my friends.", correctAnswer: "are", hint: "They + are", hintEs: "They + are" },
            { id: "l1t9_ex1_4", prompt: "You _____ very smart.", correctAnswer: "are", hint: "You + are (always)", hintEs: "You + are (siempre)" }
          ]
        },
        {
          id: "l1t9_ex2",
          type: "gap-fill",
          title: "Have or Has?",
          titleEs: "¿Have o Has?",
          instruction: "Fill in the blank with 'have' or 'has'.",
          instructionEs: "Llena el espacio con 'have' o 'has'.",
          difficulty: 1,
          items: [
            { id: "l1t9_ex2_1", prompt: "I _____ two brothers.", correctAnswer: "have", hint: "I, you, we, they + have", hintEs: "I, you, we, they + have" },
            { id: "l1t9_ex2_2", prompt: "She _____ a new car.", correctAnswer: "has", hint: "He, she, it + has", hintEs: "He, she, it + has" },
            { id: "l1t9_ex2_3", prompt: "We _____ homework.", correctAnswer: "have", hint: "We + have", hintEs: "We + have" },
            { id: "l1t9_ex2_4", prompt: "My dog _____ brown eyes.", correctAnswer: "has", hint: "Dog = it + has", hintEs: "Dog = it + has" }
          ]
        },
        {
          id: "l1t9_ex3",
          type: "error-correction",
          title: "Fix the Verb Errors",
          titleEs: "Corrige los Errores de Verbos",
          instruction: "Find and correct the error in each sentence.",
          instructionEs: "Encuentra y corrige el error en cada oración.",
          difficulty: 1,
          items: [
            { id: "l1t9_ex3_1", prompt: "She have a dog.", correctAnswer: "She has a dog.", explanation: "'Have' becomes 'has' with she/he/it.", explanationEs: "'Have' se convierte en 'has' con she/he/it." },
            { id: "l1t9_ex3_2", prompt: "He don't like pizza.", correctAnswer: "He doesn't like pizza.", explanation: "Use 'doesn't' with he/she/it.", explanationEs: "Usa 'doesn't' con he/she/it." },
            { id: "l1t9_ex3_3", prompt: "I don't be happy.", correctAnswer: "I'm not happy.", explanation: "Don't use 'do' with 'be'.", explanationEs: "No uses 'do' con 'be'." },
            { id: "l1t9_ex3_4", prompt: "She work on Mondays.", correctAnswer: "She works on Mondays.", explanation: "Add '-s' with he/she/it.", explanationEs: "Añade '-s' con he/she/it." }
          ]
        },
        {
          id: "l1t9_ex4",
          type: "transformation",
          title: "Make It Negative",
          titleEs: "Hazlo Negativo",
          instruction: "Change the affirmative sentence to negative.",
          instructionEs: "Cambia la oración afirmativa a negativa.",
          difficulty: 1,
          items: [
            { id: "l1t9_ex4_1", prompt: "I am tired.", correctAnswer: "I am not tired. / I'm not tired.", explanation: "Be + not (no 'do' needed).", explanationEs: "Be + not (no se necesita 'do')." },
            { id: "l1t9_ex4_2", prompt: "She has a car.", correctAnswer: "She doesn't have a car.", explanation: "Use 'doesn't' + base form 'have' (not 'has').", explanationEs: "Usa 'doesn't' + forma base 'have' (no 'has')." },
            { id: "l1t9_ex4_3", prompt: "They work here.", correctAnswer: "They don't work here.", explanation: "Use 'don't' with they.", explanationEs: "Usa 'don't' con they." },
            { id: "l1t9_ex4_4", prompt: "He likes coffee.", correctAnswer: "He doesn't like coffee.", explanation: "Use 'doesn't' + base form (no 's').", explanationEs: "Usa 'doesn't' + forma base (sin 's')." }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l1t9_dialogue",
        title: "Getting to Know Someone",
        titleEs: "Conociendo a Alguien",
        context: "Two people meet and talk about themselves.",
        contextEs: "Dos personas se conocen y hablan de sí mismas.",
        speakers: [
          { id: "s1", name: "John", role: "Person A" },
          { id: "s2", name: "Maria", role: "Person B" }
        ],
        lines: [
          { speakerId: "s1", text: "Hi! I'm John. What's your name?", textEs: "¡Hola! Soy John. ¿Cómo te llamas?", note: "Contraction: I'm = I am", noteEs: "Contracción: I'm = I am" },
          { speakerId: "s2", text: "Hi John! I'm Maria. Nice to meet you!", textEs: "¡Hola John! Soy Maria. ¡Mucho gusto!", note: "Common greeting", noteEs: "Saludo común" },
          { speakerId: "s1", text: "Are you a student?", textEs: "¿Eres estudiante?", note: "Question with 'be'", noteEs: "Pregunta con 'be'" },
          { speakerId: "s2", text: "Yes, I am. I study English. What do you do?", textEs: "Sí, lo soy. Estudio inglés. ¿A qué te dedicas?", note: "'Do' as auxiliary + main verb", noteEs: "'Do' como auxiliar + verbo principal" },
          { speakerId: "s1", text: "I'm a teacher. I have three classes today.", textEs: "Soy maestro. Tengo tres clases hoy.", note: "'Be' for profession, 'have' for possession", noteEs: "'Be' para profesión, 'have' para posesión" },
          { speakerId: "s2", text: "Do you like your job?", textEs: "¿Te gusta tu trabajo?", note: "'Do' for questions with other verbs", noteEs: "'Do' para preguntas con otros verbos" },
          { speakerId: "s1", text: "Yes, I do! I love teaching. Do you work?", textEs: "¡Sí! Me encanta enseñar. ¿Trabajas?", note: "Short answer: Yes, I do", noteEs: "Respuesta corta: Yes, I do" },
          { speakerId: "s2", text: "No, I don't. I'm a full-time student.", textEs: "No, no trabajo. Soy estudiante de tiempo completo.", note: "Negative: I don't", noteEs: "Negativo: I don't" }
        ],
        keyPhrases: [
          { phrase: "I'm [name/profession]", translation: "Soy [nombre/profesión]", usage: "Introducing yourself or stating identity" },
          { phrase: "I have [something]", translation: "Tengo [algo]", usage: "Expressing possession" },
          { phrase: "Do you [verb]?", translation: "¿Tú [verbo]?", usage: "Asking yes/no questions" },
          { phrase: "Yes, I do / No, I don't", translation: "Sí / No", usage: "Short answers" }
        ],
        variations: [
          { original: "I'm a teacher", alternative: "I work as a teacher", note: "Alternative way to state profession" },
          { original: "What do you do?", alternative: "What's your job?", note: "More direct question" },
          { original: "I don't work", alternative: "I'm not working right now", note: "For temporary situation" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/æm/",
            description: "The sound of 'am' - often reduced to /əm/ in speech",
            descriptionEs: "El sonido de 'am' - frecuentemente reducido a /əm/ al hablar",
            examples: [
              { word: "I am", transcription: "/aɪ æm/ → /aɪm/" },
              { word: "I am happy", transcription: "/aɪm ˈhæpi/" }
            ],
            tips: ["'I'm' is more common than 'I am' in speech", "Contractions are normal and natural"]
          },
          {
            symbol: "/həv/",
            description: "The 'have' sound - often reduced",
            descriptionEs: "El sonido de 'have' - frecuentemente reducido",
            examples: [
              { word: "I have", transcription: "/aɪ hæv/ → /aɪv/" },
              { word: "has", transcription: "/hæz/" }
            ],
            tips: ["'I've' is common in contractions", "'Has' keeps the /z/ sound clearly"]
          }
        ],
        commonProblems: [
          { word: "does", wrong: "does (like 'dose')", correct: "duz", tip: "Sounds like 'duz', not 'dose'" },
          { word: "doesn't", wrong: "does-ent", correct: "duh-zint", tip: "Quick two syllables: DUH-zint" },
          { word: "don't", wrong: "do-not", correct: "dohnt", tip: "One syllable, rhymes with 'won't'" }
        ],
        minimalPairs: [
          { word1: "do", word2: "to", soundDifference: "/d/ vs /t/ - voiced vs voiceless" },
          { word1: "has", word2: "as", soundDifference: "/h/ - don't drop the 'h'!" },
          { word1: "have", word2: "half", soundDifference: "/v/ vs /f/ - voiced vs voiceless" }
        ],
        intonationPatterns: [
          { pattern: "Falling ↘", example: "I HAVE a dog.", meaning: "Statements fall" },
          { pattern: "Rising ↗", example: "Do you HAVE a dog?", meaning: "Yes/no questions rise" }
        ]
      },
      
      culturalNote: {
        title: "Using Contractions",
        titleEs: "Usando Contracciones",
        content: "In English, contractions (I'm, don't, doesn't, she's, they're) are completely normal and widely used in both spoken and written English, especially in informal contexts. NOT using contractions can sound overly formal or even robotic. 'I am fine' sounds more formal than 'I'm fine'. In professional emails, contractions are acceptable. Only in very formal documents (legal, academic) might you avoid them. Native speakers almost always use contractions in speech. Learning to use and understand contractions is essential for natural-sounding English. Common contractions: I'm, you're, he's, she's, it's, we're, they're, don't, doesn't, isn't, aren't, can't, won't.",
        contentEs: "En inglés, las contracciones (I'm, don't, doesn't, she's, they're) son completamente normales y ampliamente usadas tanto en inglés hablado como escrito, especialmente en contextos informales. NO usar contracciones puede sonar demasiado formal o incluso robótico. 'I am fine' suena más formal que 'I'm fine'. En emails profesionales, las contracciones son aceptables. Solo en documentos muy formales (legales, académicos) podrías evitarlas. Los hablantes nativos casi siempre usan contracciones al hablar. Aprender a usar y entender contracciones es esencial para un inglés que suene natural.",
        regions: ["US", "UK", "Australia"],
        formalityLevel: "neutral"
      },
      
      consolidationQuiz: {
        id: "l1t9_quiz",
        title: "Basic Verbs Mastery Check",
        titleEs: "Prueba de Dominio de Verbos Básicos",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l1t9_q1",
            type: "multiple-choice",
            question: "Complete: 'She _____ a new car.'",
            questionEs: "Completa: 'She _____ a new car.'",
            options: ["have", "has", "is have", "am have"],
            correctAnswer: "has",
            explanation: "'Have' becomes 'has' with he/she/it.",
            explanationEs: "'Have' se convierte en 'has' con he/she/it.",
            points: 10
          },
          {
            id: "l1t9_q2",
            type: "multiple-choice",
            question: "What is the negative of 'He works here'?",
            questionEs: "¿Cuál es el negativo de 'He works here'?",
            options: ["He don't work here", "He doesn't works here", "He doesn't work here", "He not works here"],
            correctAnswer: "He doesn't work here",
            explanation: "Use 'doesn't' + base form (no 's' on the verb).",
            explanationEs: "Usa 'doesn't' + forma base (sin 's' en el verbo).",
            points: 10
          },
          {
            id: "l1t9_q3",
            type: "fill-blank",
            question: "I _____ a student. (be)",
            questionEs: "I _____ a student. (be)",
            correctAnswer: ["am", "'m"],
            explanation: "I + am (or I'm).",
            explanationEs: "I + am (o I'm).",
            points: 10
          },
          {
            id: "l1t9_q4",
            type: "multiple-choice",
            question: "Which is WRONG?",
            questionEs: "¿Cuál está MAL?",
            options: ["I don't like pizza", "I'm not tired", "I don't be happy", "She doesn't work"],
            correctAnswer: "I don't be happy",
            explanation: "Don't use 'do' with 'be'. Say 'I'm not happy'.",
            explanationEs: "No uses 'do' con 'be'. Di 'I'm not happy'.",
            points: 10
          },
          {
            id: "l1t9_q5",
            type: "true-false",
            question: "'I'm' is an informal way of saying 'I am' and shouldn't be used.",
            questionEs: "'I'm' es una forma informal de decir 'I am' y no debería usarse.",
            correctAnswer: "false",
            explanation: "Contractions like 'I'm' are normal and widely used in English.",
            explanationEs: "Las contracciones como 'I'm' son normales y muy usadas en inglés.",
            points: 10
          },
          {
            id: "l1t9_q6",
            type: "multiple-choice",
            question: "Complete: 'They _____ students.'",
            questionEs: "Completa: 'They _____ students.'",
            options: ["is", "am", "are", "be"],
            correctAnswer: "are",
            explanation: "They + are.",
            explanationEs: "They + are.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l1t9_production",
        title: "Describe Yourself and Others",
        titleEs: "Descríbete a Ti y a Otros",
        type: "both",
        scenario: "Introduce yourself and describe people you know using basic verbs.",
        scenarioEs: "Preséntate y describe a personas que conoces usando verbos básicos.",
        prompts: [
          {
            id: "l1t9_prod1",
            instruction: "Introduce yourself using 'I am'",
            instructionEs: "Preséntate usando 'I am'",
            hints: ["I'm John. I'm a student", "I'm Maria. I'm 25 years old"],
            hintsEs: ["Soy John. Soy estudiante", "Soy Maria. Tengo 25 años"],
            requiredElements: ["I am / I'm"]
          },
          {
            id: "l1t9_prod2",
            instruction: "Say something you have",
            instructionEs: "Di algo que tienes",
            hints: ["I have a dog", "I have two brothers"],
            hintsEs: ["Tengo un perro", "Tengo dos hermanos"],
            requiredElements: ["I have"]
          },
          {
            id: "l1t9_prod3",
            instruction: "Describe what a family member does (use he/she + verb+s)",
            instructionEs: "Describe qué hace un familiar (usa he/she + verb+s)",
            hints: ["My mother works as a nurse", "My father likes sports"],
            hintsEs: ["Mi madre trabaja como enfermera", "A mi padre le gustan los deportes"],
            requiredElements: ["He/She + verb with -s"]
          },
          {
            id: "l1t9_prod4",
            instruction: "Say something you DON'T do or like",
            instructionEs: "Di algo que NO haces o te gusta",
            hints: ["I don't like fish", "I don't work on Sundays"],
            hintsEs: ["No me gusta el pescado", "No trabajo los domingos"],
            requiredElements: ["don't"]
          }
        ],
        modelResponse: "I'm Carlos. I'm a software developer. I'm 28 years old. I have a sister and a dog. My sister works as a doctor. She likes her job. I don't like cooking, but I like eating!",
        modelResponseEs: "Soy Carlos. Soy desarrollador de software. Tengo 28 años. Tengo una hermana y un perro. Mi hermana trabaja como doctora. Le gusta su trabajo. No me gusta cocinar, ¡pero me gusta comer!",
        evaluationCriteria: [
          "Used 'am/is/are' correctly",
          "Used 'have/has' correctly",
          "Added '-s' to verbs with he/she/it",
          "Used 'don't/doesn't' correctly for negatives"
        ],
        evaluationCriteriaEs: [
          "Usó 'am/is/are' correctamente",
          "Usó 'have/has' correctamente",
          "Añadió '-s' a verbos con he/she/it",
          "Usó 'don't/doesn't' correctamente para negativos"
        ]
      },
      vocabulary: {
        nouns: [],
        verbs: [
          { id: "l1t9_v1", word: "be", translation: "ser/estar", type: "verb", definition: "to exist or have identity", definitionEs: "existir o tener identidad", example: "I am a student. He is happy.", exampleEs: "Soy estudiante. Él está feliz.", related: ["am", "is", "are"], difficulty: 1 },
          { id: "l1t9_v2", word: "have", translation: "tener", type: "verb", definition: "to possess something", definitionEs: "poseer algo", example: "I have a car. She has a dog.", exampleEs: "Tengo un carro. Ella tiene un perro.", related: ["has"], difficulty: 1 },
          { id: "l1t9_v3", word: "do", translation: "hacer", type: "verb", definition: "to perform an action", definitionEs: "realizar una acción", example: "I do my homework.", exampleEs: "Hago mi tarea.", related: ["does"], difficulty: 1 },
          { id: "l1t9_v4", word: "go", translation: "ir", type: "verb", definition: "to move to a place", definitionEs: "moverse a un lugar", example: "I go to school.", exampleEs: "Voy a la escuela.", related: ["goes", "going"], difficulty: 1 },
          { id: "l1t9_v5", word: "come", translation: "venir", type: "verb", definition: "to move toward", definitionEs: "moverse hacia", example: "Come here, please.", exampleEs: "Ven aquí, por favor.", related: ["comes", "coming"], difficulty: 1 },
          { id: "l1t9_v6", word: "see", translation: "ver", type: "verb", definition: "to look at with eyes", definitionEs: "mirar con los ojos", example: "I see a bird.", exampleEs: "Veo un pájaro.", related: ["sees", "seeing"], difficulty: 1 },
          { id: "l1t9_v7", word: "know", translation: "saber/conocer", type: "verb", definition: "to have information", definitionEs: "tener información", example: "I know the answer.", exampleEs: "Sé la respuesta.", related: ["knows"], difficulty: 1 },
          { id: "l1t9_v8", word: "get", translation: "obtener/conseguir", type: "verb", definition: "to receive or obtain", definitionEs: "recibir u obtener", example: "I get good grades.", exampleEs: "Obtengo buenas notas.", related: ["gets", "getting"], difficulty: 1 },
          { id: "l1t9_v9", word: "make", translation: "hacer/fabricar", type: "verb", definition: "to create something", definitionEs: "crear algo", example: "I make breakfast.", exampleEs: "Hago el desayuno.", related: ["makes", "making"], difficulty: 1 },
          { id: "l1t9_v10", word: "take", translation: "tomar/llevar", type: "verb", definition: "to grab or carry", definitionEs: "agarrar o llevar", example: "Take your umbrella.", exampleEs: "Lleva tu paraguas.", related: ["takes", "taking"], difficulty: 1 },
        ],
        adjectives: [],
        expressions: [
          { id: "l1t9_e1", word: "I am...", translation: "Yo soy/estoy...", type: "expression", definition: "stating identity or state", definitionEs: "declarando identidad o estado", example: "I am happy.", exampleEs: "Estoy feliz.", related: [], difficulty: 1 },
          { id: "l1t9_e2", word: "I have...", translation: "Yo tengo...", type: "expression", definition: "stating possession", definitionEs: "declarando posesión", example: "I have a question.", exampleEs: "Tengo una pregunta.", related: [], difficulty: 1 },
          { id: "l1t9_e3", word: "I don't...", translation: "Yo no...", type: "expression", definition: "negative form", definitionEs: "forma negativa", example: "I don't understand.", exampleEs: "No entiendo.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
    {
      id: 10,
      title: "Simple Questions",
      titleEs: "Preguntas Simples",
      introduction: {
        title: "❓ Preguntas en Inglés",
        explanation: "Hacer preguntas es fundamental para cualquier conversación. En inglés, las preguntas tienen una estructura específica diferente al español. Aprenderás las palabras interrogativas y cómo formar preguntas correctamente.",
        keyPoints: [
          "Palabras WH: What (qué), Where (dónde), When (cuándo), Who (quién), Why (por qué), How (cómo)",
          "Preguntas con 'be': invertimos el orden - 'You are happy' → 'Are you happy?'",
          "Preguntas con otros verbos: usamos Do/Does - 'You like pizza' → 'Do you like pizza?'",
          "'How much' para cantidad/precio (incontables), 'How many' para número (contables)",
          "En preguntas WH el auxiliar va después: 'Where do you live?' no 'Where you live?'"
        ],
        examples: [
          { english: "What is your name?", spanish: "¿Cuál es tu nombre?", explanation: "Pregunta WH con 'be'" },
          { english: "Where do you work?", spanish: "¿Dónde trabajas?", explanation: "Pregunta WH con 'do'" },
          { english: "Do you speak Spanish?", spanish: "¿Hablas español?", explanation: "Pregunta sí/no" }
        ],
        tips: [
          "💡 En preguntas con 'does', el verbo principal NO lleva 's': 'Does she like...?' no 'Does she likes...?'",
          "💡 'What' vs 'Which': 'What' para opciones ilimitadas, 'Which' para opciones limitadas",
          "💡 'How old are you?' es la forma de preguntar la edad, no 'What is your age?'"
        ],
        whenToUse: [
          "Obteniendo información específica: 'What time is it?', 'Where is the bank?'",
          "Confirmando algo: 'Is this your book?', 'Do you understand?'",
          "Conociendo personas: 'What's your name?', 'Where are you from?'"
        ],
        whenNotToUse: [
          "No uses 'do' con 'be': 'Do you are tired?' ❌ → 'Are you tired?' ✓",
          "No añadas 's' después de does: 'Does she likes?' ❌ → 'Does she like?' ✓"
        ]
      },
      objectives: [
        "Usar palabras interrogativas (What, Where, Who)",
        "Formar preguntas con 'be'",
        "Formar preguntas con 'do/does'",
        "Responder preguntas básicas"
      ],
      estimatedMinutes: 25,
      connectionToPrevious: "Ahora puedes preguntar sobre todo lo que aprendiste: 'Do you have a car?', 'What is your name?'",
      connectionToNext: "¡Felicitaciones! Completaste Level 1. En Level 2 aprenderás más estructuras gramaticales.",
      grammarTheoryIds: ['a1-verb-to-be', 'a2-question-formation'],
      
      commonMistakes: [
        {
          id: "l1t10_cm1",
          wrong: "Do you are happy?",
          correct: "Are you happy?",
          explanation: "Don't use 'do' with the verb 'be'. Just invert the subject and 'be'.",
          explanationEs: "No uses 'do' con el verbo 'be'. Solo invierte el sujeto y 'be'.",
          category: "grammar"
        },
        {
          id: "l1t10_cm2",
          wrong: "Does she likes coffee?",
          correct: "Does she like coffee?",
          explanation: "After 'does', use the base form of the verb (no 's').",
          explanationEs: "Después de 'does', usa la forma base del verbo (sin 's').",
          category: "grammar"
        },
        {
          id: "l1t10_cm3",
          wrong: "Where you live?",
          correct: "Where do you live?",
          explanation: "WH questions need 'do/does' with regular verbs: WHERE + DO + subject + verb",
          explanationEs: "Las preguntas WH necesitan 'do/does' con verbos regulares: WHERE + DO + sujeto + verbo",
          category: "grammar"
        },
        {
          id: "l1t10_cm4",
          wrong: "What means this word?",
          correct: "What does this word mean?",
          explanation: "Follow the question structure: WHAT + DOES + subject + verb (base form)",
          explanationEs: "Sigue la estructura: QUÉ + DOES + sujeto + verbo (forma base)",
          category: "grammar"
        },
        {
          id: "l1t10_cm5",
          wrong: "How many years you have?",
          correct: "How old are you?",
          explanation: "In English we say 'How old are you?' not 'How many years do you have?'",
          explanationEs: "En inglés decimos 'How old are you?' no 'How many years do you have?'",
          category: "expression"
        }
      ],
      
      exercises: [
        {
          id: "l1t10_ex1",
          type: "gap-fill",
          title: "WH Words",
          titleEs: "Palabras WH",
          instruction: "Fill in the correct WH word: What, Where, When, Who, Why, How",
          instructionEs: "Llena con la palabra WH correcta: What, Where, When, Who, Why, How",
          difficulty: 1,
          items: [
            { id: "l1t10_ex1_1", prompt: "_____ is your name?", correctAnswer: "What", hint: "Asking about things/info", hintEs: "Preguntando sobre cosas/info" },
            { id: "l1t10_ex1_2", prompt: "_____ do you live?", correctAnswer: "Where", hint: "Asking about place", hintEs: "Preguntando sobre lugar" },
            { id: "l1t10_ex1_3", prompt: "_____ is your birthday?", correctAnswer: "When", hint: "Asking about time", hintEs: "Preguntando sobre tiempo" },
            { id: "l1t10_ex1_4", prompt: "_____ is your teacher?", correctAnswer: "Who", hint: "Asking about a person", hintEs: "Preguntando sobre una persona" },
            { id: "l1t10_ex1_5", prompt: "_____ are you sad?", correctAnswer: "Why", hint: "Asking about reason", hintEs: "Preguntando sobre razón" },
            { id: "l1t10_ex1_6", prompt: "_____ are you?", correctAnswer: "How", hint: "Asking about state/manner", hintEs: "Preguntando sobre estado/manera" }
          ]
        },
        {
          id: "l1t10_ex2",
          type: "gap-fill",
          title: "Do or Does?",
          titleEs: "¿Do o Does?",
          instruction: "Fill in with 'do' or 'does'.",
          instructionEs: "Llena con 'do' o 'does'.",
          difficulty: 1,
          items: [
            { id: "l1t10_ex2_1", prompt: "_____ you like pizza?", correctAnswer: "Do", hint: "You + do", hintEs: "You + do" },
            { id: "l1t10_ex2_2", prompt: "_____ she work here?", correctAnswer: "Does", hint: "She + does", hintEs: "She + does" },
            { id: "l1t10_ex2_3", prompt: "Where _____ they live?", correctAnswer: "do", hint: "They + do", hintEs: "They + do" },
            { id: "l1t10_ex2_4", prompt: "What _____ he want?", correctAnswer: "does", hint: "He + does", hintEs: "He + does" }
          ]
        },
        {
          id: "l1t10_ex3",
          type: "transformation",
          title: "Make Questions",
          titleEs: "Haz Preguntas",
          instruction: "Transform the statement into a question.",
          instructionEs: "Transforma la afirmación en pregunta.",
          difficulty: 1,
          items: [
            { id: "l1t10_ex3_1", prompt: "You are a student.", correctAnswer: "Are you a student?", explanation: "With 'be', invert subject and verb.", explanationEs: "Con 'be', invierte sujeto y verbo." },
            { id: "l1t10_ex3_2", prompt: "She likes coffee.", correctAnswer: "Does she like coffee?", explanation: "Add 'does' at start, remove 's' from verb.", explanationEs: "Añade 'does' al inicio, quita 's' del verbo." },
            { id: "l1t10_ex3_3", prompt: "They have a car.", correctAnswer: "Do they have a car?", explanation: "Add 'do' at start for yes/no question.", explanationEs: "Añade 'do' al inicio para pregunta sí/no." },
            { id: "l1t10_ex3_4", prompt: "He is happy.", correctAnswer: "Is he happy?", explanation: "Invert 'he' and 'is'.", explanationEs: "Invierte 'he' e 'is'." }
          ]
        },
        {
          id: "l1t10_ex4",
          type: "error-correction",
          title: "Fix the Question",
          titleEs: "Corrige la Pregunta",
          instruction: "Find and correct the error.",
          instructionEs: "Encuentra y corrige el error.",
          difficulty: 1,
          items: [
            { id: "l1t10_ex4_1", prompt: "Do you are tired?", correctAnswer: "Are you tired?", explanation: "Don't use 'do' with 'be'.", explanationEs: "No uses 'do' con 'be'." },
            { id: "l1t10_ex4_2", prompt: "Does he likes pizza?", correctAnswer: "Does he like pizza?", explanation: "After 'does', use base form (no 's').", explanationEs: "Después de 'does', usa forma base (sin 's')." },
            { id: "l1t10_ex4_3", prompt: "Where you work?", correctAnswer: "Where do you work?", explanation: "WH questions need 'do/does'.", explanationEs: "Las preguntas WH necesitan 'do/does'." },
            { id: "l1t10_ex4_4", prompt: "How many years do you have?", correctAnswer: "How old are you?", explanation: "Use 'How old are you?' for age.", explanationEs: "Usa 'How old are you?' para la edad." }
          ]
        }
      ],
      
      modelDialogue: {
        id: "l1t10_dialogue",
        title: "Asking for Information",
        titleEs: "Pidiendo Información",
        context: "A tourist asks a local person for information.",
        contextEs: "Un turista pide información a una persona local.",
        speakers: [
          { id: "s1", name: "Tourist", role: "Visitor asking questions" },
          { id: "s2", name: "Local", role: "Helpful resident" }
        ],
        lines: [
          { speakerId: "s1", text: "Excuse me, can I ask you something?", textEs: "Disculpe, ¿puedo preguntarle algo?", note: "Polite question opener", noteEs: "Inicio cortés de pregunta" },
          { speakerId: "s2", text: "Of course! What do you need?", textEs: "¡Claro! ¿Qué necesita?", note: "WH question with 'do'", noteEs: "Pregunta WH con 'do'" },
          { speakerId: "s1", text: "Where is the train station?", textEs: "¿Dónde está la estación de tren?", note: "Where + is (be question)", noteEs: "Where + is (pregunta con be)" },
          { speakerId: "s2", text: "It's on Main Street, two blocks from here.", textEs: "Está en Main Street, a dos cuadras de aquí.", note: "Giving location", noteEs: "Dando ubicación" },
          { speakerId: "s1", text: "What time does it close?", textEs: "¿A qué hora cierra?", note: "What time + does", noteEs: "What time + does" },
          { speakerId: "s2", text: "I think it closes at 10 PM. But I'm not sure.", textEs: "Creo que cierra a las 10 PM. Pero no estoy seguro.", note: "Polite uncertainty", noteEs: "Incertidumbre cortés" },
          { speakerId: "s1", text: "Do you know if there's a bus?", textEs: "¿Sabe si hay un autobús?", note: "Indirect question with 'do'", noteEs: "Pregunta indirecta con 'do'" },
          { speakerId: "s2", text: "Yes, there is. Bus number 7 goes there.", textEs: "Sí, hay uno. El autobús número 7 va allí.", note: "Short answer: Yes, there is", noteEs: "Respuesta corta: Yes, there is" },
          { speakerId: "s1", text: "Thank you so much! You're very helpful.", textEs: "¡Muchas gracias! Es muy amable.", note: "Polite thanks", noteEs: "Agradecimiento cortés" }
        ],
        keyPhrases: [
          { phrase: "Excuse me, can I ask...?", translation: "Disculpe, ¿puedo preguntar...?", usage: "Polite way to start asking questions" },
          { phrase: "Where is...?", translation: "¿Dónde está...?", usage: "Asking for location" },
          { phrase: "What time does...?", translation: "¿A qué hora...?", usage: "Asking about schedules" },
          { phrase: "Do you know if...?", translation: "¿Sabe si...?", usage: "Asking for information politely" }
        ],
        variations: [
          { original: "Where is the train station?", alternative: "How do I get to the train station?", note: "Asking for directions instead of location" },
          { original: "What time does it close?", alternative: "When does it close?", note: "Using 'when' instead of 'what time'" },
          { original: "Do you know if there's a bus?", alternative: "Is there a bus?", note: "More direct question" }
        ]
      },
      
      pronunciationFocus: {
        sounds: [
          {
            symbol: "/w/",
            description: "The 'w' sound in WH words - lips rounded then open",
            descriptionEs: "El sonido 'w' en palabras WH - labios redondeados y luego abiertos",
            examples: [
              { word: "what", transcription: "/wɒt/" },
              { word: "where", transcription: "/weər/" },
              { word: "when", transcription: "/wen/" }
            ],
            tips: ["Round your lips like saying 'oo' then open to the vowel", "The 'h' in 'wh' is usually silent in American English"]
          },
          {
            symbol: "/aɪ/",
            description: "The diphthong in 'why'",
            descriptionEs: "El diptongo en 'why'",
            examples: [
              { word: "why", transcription: "/waɪ/" },
              { word: "my", transcription: "/maɪ/" },
              { word: "time", transcription: "/taɪm/" }
            ],
            tips: ["Start with mouth open, end with smile (ah → ee)", "Two sounds blended together"]
          }
        ],
        commonProblems: [
          { word: "what", wrong: "guat", correct: "wot", tip: "Use lips, not throat for 'w'" },
          { word: "where", wrong: "were", correct: "wair", tip: "Remember 'where' rhymes with 'air'" },
          { word: "who", wrong: "joo", correct: "hoo", tip: "'Who' is the exception - says 'h' sound!" }
        ],
        minimalPairs: [
          { word1: "what", word2: "want", soundDifference: "Final consonant /t/ vs /nt/" },
          { word1: "where", word2: "wear", soundDifference: "Same sound! Both /weər/" },
          { word1: "when", word2: "then", soundDifference: "/w/ vs /ð/ at the start" }
        ],
        intonationPatterns: [
          { pattern: "Falling ↘", example: "Where do you LIVE? ↘", meaning: "WH questions fall at the end" },
          { pattern: "Rising ↗", example: "Do you like PIZza? ↗", meaning: "Yes/No questions rise at the end" },
          { pattern: "Fall-Rise ↘↗", example: "Is THIS your book? ↘↗", meaning: "Offering or requesting confirmation" }
        ]
      },
      
      culturalNote: {
        title: "Asking Questions Politely",
        titleEs: "Haciendo Preguntas Cortésmente",
        content: "In English-speaking cultures, how you ask a question matters as much as what you ask. Direct questions like 'How old are you?' or 'How much do you earn?' can be considered rude in many situations. It's common to soften questions with phrases like 'May I ask...?', 'Do you mind if I ask...?', or 'Could you tell me...?'. Also, 'Excuse me' before a question shows politeness. For strangers, it's polite to thank them for their help, even if brief: 'Thank you for your time'. Small talk questions about weather, sports, or general topics are considered friendly openers. However, questions about salary, age, weight, religion, or politics are often considered too personal for casual conversations. When someone says 'How are you?', they usually expect a brief positive answer like 'Fine, thanks!' rather than a detailed response.",
        contentEs: "En culturas angloparlantes, cómo preguntas importa tanto como qué preguntas. Preguntas directas como '¿Cuántos años tienes?' o '¿Cuánto ganas?' pueden considerarse groseras en muchas situaciones. Es común suavizar preguntas con frases como 'May I ask...?', 'Do you mind if I ask...?', o 'Could you tell me...?'. También, 'Excuse me' antes de una pregunta muestra cortesía. Con extraños, es cortés agradecer su ayuda, aunque sea breve: 'Thank you for your time'. Las preguntas de conversación casual sobre clima, deportes o temas generales se consideran amigables. Sin embargo, preguntas sobre salario, edad, peso, religión o política se consideran muy personales para conversaciones casuales. Cuando alguien dice 'How are you?', usualmente esperan una respuesta breve positiva como 'Fine, thanks!' en lugar de una respuesta detallada.",
        regions: ["US", "UK", "Canada"],
        formalityLevel: "formal"
      },
      
      consolidationQuiz: {
        id: "l1t10_quiz",
        title: "Simple Questions Mastery Check",
        titleEs: "Prueba de Dominio de Preguntas Simples",
        passingScore: 70,
        timeLimit: 300,
        questions: [
          {
            id: "l1t10_q1",
            type: "multiple-choice",
            question: "Which WH word asks about LOCATION?",
            questionEs: "¿Cuál palabra WH pregunta sobre UBICACIÓN?",
            options: ["What", "Where", "When", "Who"],
            correctAnswer: "Where",
            explanation: "Where = location (dónde).",
            explanationEs: "Where = ubicación (dónde).",
            points: 10
          },
          {
            id: "l1t10_q2",
            type: "multiple-choice",
            question: "Complete: '_____ she like pizza?'",
            questionEs: "Completa: '_____ she like pizza?'",
            options: ["Do", "Does", "Is", "Are"],
            correctAnswer: "Does",
            explanation: "She + does for yes/no questions.",
            explanationEs: "She + does para preguntas sí/no.",
            points: 10
          },
          {
            id: "l1t10_q3",
            type: "multiple-choice",
            question: "Which question is CORRECT?",
            questionEs: "¿Cuál pregunta es CORRECTA?",
            options: ["Do you are happy?", "Are you happy?", "You are happy?", "Is you happy?"],
            correctAnswer: "Are you happy?",
            explanation: "With 'be', invert subject and verb: Are you...?",
            explanationEs: "Con 'be', invierte sujeto y verbo: Are you...?",
            points: 10
          },
          {
            id: "l1t10_q4",
            type: "fill-blank",
            question: "_____ is your favorite color?",
            questionEs: "_____ is your favorite color?",
            correctAnswer: ["What"],
            explanation: "'What' asks about things or information.",
            explanationEs: "'What' pregunta sobre cosas o información.",
            points: 10
          },
          {
            id: "l1t10_q5",
            type: "multiple-choice",
            question: "What is WRONG with: 'Does he works here?'",
            questionEs: "¿Qué está MAL en: 'Does he works here?'",
            options: ["'Does' should be 'Do'", "'works' should be 'work'", "'he' should be 'him'", "Nothing, it's correct"],
            correctAnswer: "'works' should be 'work'",
            explanation: "After 'does', use base form (no 's'): Does he work?",
            explanationEs: "Después de 'does', usa forma base (sin 's'): Does he work?",
            points: 10
          },
          {
            id: "l1t10_q6",
            type: "true-false",
            question: "In English, 'How old are you?' means '¿Cuántos años tienes?'",
            questionEs: "En inglés, 'How old are you?' significa '¿Cuántos años tienes?'",
            correctAnswer: "true",
            explanation: "Yes, 'How old are you?' is how we ask about age.",
            explanationEs: "Sí, 'How old are you?' es cómo preguntamos la edad.",
            points: 10
          }
        ]
      },
      
      guidedProduction: {
        id: "l1t10_production",
        title: "Ask Questions About Someone",
        titleEs: "Haz Preguntas Sobre Alguien",
        type: "both",
        scenario: "You want to know about a new classmate. Form questions to learn about them.",
        scenarioEs: "Quieres conocer a un nuevo compañero. Formula preguntas para saber de él/ella.",
        prompts: [
          {
            id: "l1t10_prod1",
            instruction: "Ask their name (use 'what')",
            instructionEs: "Pregunta su nombre (usa 'what')",
            hints: ["What is your name?", "What's your name?"],
            hintsEs: ["¿Cuál es tu nombre?"],
            requiredElements: ["What", "name"]
          },
          {
            id: "l1t10_prod2",
            instruction: "Ask where they live (use 'where')",
            instructionEs: "Pregunta dónde viven (usa 'where')",
            hints: ["Where do you live?", "Where are you from?"],
            hintsEs: ["¿Dónde vives?", "¿De dónde eres?"],
            requiredElements: ["Where", "do/are"]
          },
          {
            id: "l1t10_prod3",
            instruction: "Ask if they like something (yes/no question)",
            instructionEs: "Pregunta si les gusta algo (pregunta sí/no)",
            hints: ["Do you like sports?", "Do you like music?"],
            hintsEs: ["¿Te gustan los deportes?", "¿Te gusta la música?"],
            requiredElements: ["Do you like"]
          },
          {
            id: "l1t10_prod4",
            instruction: "Ask about their family (how many siblings?)",
            instructionEs: "Pregunta sobre su familia (¿cuántos hermanos?)",
            hints: ["Do you have brothers or sisters?", "How many siblings do you have?"],
            hintsEs: ["¿Tienes hermanos o hermanas?", "¿Cuántos hermanos tienes?"],
            requiredElements: ["Do you have / How many"]
          }
        ],
        modelResponse: "What is your name? Where do you live? Where are you from? Do you like sports? Do you have brothers or sisters? How many siblings do you have? What is your favorite food? How old are you?",
        modelResponseEs: "¿Cuál es tu nombre? ¿Dónde vives? ¿De dónde eres? ¿Te gustan los deportes? ¿Tienes hermanos o hermanas? ¿Cuántos hermanos tienes? ¿Cuál es tu comida favorita? ¿Cuántos años tienes?",
        evaluationCriteria: [
          "Used WH words correctly",
          "Used 'do/does' correctly in questions",
          "Proper question structure",
          "Correct word order"
        ],
        evaluationCriteriaEs: [
          "Usó palabras WH correctamente",
          "Usó 'do/does' correctamente en preguntas",
          "Estructura de pregunta apropiada",
          "Orden de palabras correcto"
        ]
      },
      vocabulary: {
        nouns: [],
        verbs: [],
        adjectives: [],
        expressions: [
          { id: "l1t10_e1", word: "What?", translation: "¿Qué?", type: "expression", definition: "asking about things", definitionEs: "preguntando sobre cosas", example: "What is your name?", exampleEs: "¿Cómo te llamas?", related: [], difficulty: 1 },
          { id: "l1t10_e2", word: "Where?", translation: "¿Dónde?", type: "expression", definition: "asking about places", definitionEs: "preguntando sobre lugares", example: "Where do you live?", exampleEs: "¿Dónde vives?", related: [], difficulty: 1 },
          { id: "l1t10_e3", word: "Who?", translation: "¿Quién?", type: "expression", definition: "asking about people", definitionEs: "preguntando sobre personas", example: "Who is she?", exampleEs: "¿Quién es ella?", related: [], difficulty: 1 },
          { id: "l1t10_e4", word: "When?", translation: "¿Cuándo?", type: "expression", definition: "asking about time", definitionEs: "preguntando sobre tiempo", example: "When is your birthday?", exampleEs: "¿Cuándo es tu cumpleaños?", related: [], difficulty: 1 },
          { id: "l1t10_e5", word: "Why?", translation: "¿Por qué?", type: "expression", definition: "asking about reasons", definitionEs: "preguntando sobre razones", example: "Why are you sad?", exampleEs: "¿Por qué estás triste?", related: [], difficulty: 1 },
          { id: "l1t10_e6", word: "How?", translation: "¿Cómo?", type: "expression", definition: "asking about manner", definitionEs: "preguntando sobre manera", example: "How are you?", exampleEs: "¿Cómo estás?", related: [], difficulty: 1 },
          { id: "l1t10_e7", word: "How much?", translation: "¿Cuánto?", type: "expression", definition: "asking about quantity/price", definitionEs: "preguntando sobre cantidad/precio", example: "How much is this?", exampleEs: "¿Cuánto cuesta esto?", related: [], difficulty: 1 },
          { id: "l1t10_e8", word: "How many?", translation: "¿Cuántos?", type: "expression", definition: "asking about number", definitionEs: "preguntando sobre número", example: "How many brothers do you have?", exampleEs: "¿Cuántos hermanos tienes?", related: [], difficulty: 1 },
          { id: "l1t10_e9", word: "Do you...?", translation: "¿Tú...?", type: "expression", definition: "yes/no question", definitionEs: "pregunta sí/no", example: "Do you speak English?", exampleEs: "¿Hablas inglés?", related: [], difficulty: 1 },
          { id: "l1t10_e10", word: "Are you...?", translation: "¿Eres/Estás...?", type: "expression", definition: "yes/no question with be", definitionEs: "pregunta sí/no con be", example: "Are you ready?", exampleEs: "¿Estás listo?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      }
    },
  ]
};

export default level1;
