import type { Level } from '../../types';

export const level3: Level = {
  id: 3,
  name: "Pre-Intermediate",
  cefrLevel: "A2",
  description: "Viajes, compras, pasado simple y vida cotidiana",
  totalTasks: 10,
  estimatedHours: 12,
  color: "#84cc16",
  icon: "🌳",
  tasks: [
    {
      id: 1,
      title: "Travel and Transport",
      titleEs: "Viajes y Transporte",
      introduction: {
        title: "✈️ Viajes y Transporte en Inglés",
        explanation: "Viajar es una de las mejores experiencias de la vida, y saber comunicarte en inglés lo hace más fácil. Aprenderás todo el vocabulario necesario para moverte por aeropuertos, estaciones y reservar alojamiento.",
        keyPoints: [
          "Vocabulario de aeropuerto: airport, passport, boarding pass (tarjeta de embarque), gate (puerta), customs (aduana)",
          "Vocabulario de transporte: train, bus, taxi, subway/metro, ferry",
          "Para reservar: 'I'd like to book...', 'Do you have availability?', 'What time does it leave?'",
          "Diferencia: 'arrive AT' un lugar pequeño, 'arrive IN' una ciudad/país"
        ],
        examples: [
          { english: "I need to check in for my flight.", spanish: "Necesito hacer el check-in para mi vuelo.", explanation: "En el aeropuerto" },
          { english: "What time does the train depart?", spanish: "¿A qué hora sale el tren?", explanation: "Preguntando horarios" },
          { english: "I'd like to book a room for two nights.", spanish: "Me gustaría reservar una habitación por dos noches.", explanation: "Reservando hotel" }
        ],
        tips: [
          "💡 'Luggage' (equipaje) es incontable: 'my luggage' no 'my luggages'",
          "💡 'Book' como verbo significa 'reservar': 'book a flight', 'book a hotel'",
          "💡 'Customs' siempre va en plural en este contexto"
        ],
        whenToUse: ["En aeropuertos, estaciones y al tomar transporte público", "Al reservar hoteles, vuelos o actividades turísticas", "Pidiendo y dando direcciones en una ciudad nueva", "En conversaciones sobre viajes pasados o planes de viaje"],
        whenNotToUse: ["No uses vocabulario de viajes formal ('board', 'depart') en conversaciones casuales con amigos", "No digas 'I arrived to Madrid' — es 'I arrived IN Madrid'", "No uses 'luggage' como plural ('luggages' no existe)"]
      },
      objectives: ["Vocabulario de viajes", "Pedir direcciones", "Reservar hoteles y transporte"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l3t1_n1", word: "airport", translation: "aeropuerto", type: "noun", definition: "a place where planes take off and land", definitionEs: "un lugar donde los aviones despegan y aterrizan", example: "The airport is 20 minutes away.", exampleEs: "El aeropuerto está a 20 minutos.", related: ["flight", "plane"], difficulty: 1 },
          { id: "l3t1_n2", word: "passport", translation: "pasaporte", type: "noun", definition: "a document for international travel", definitionEs: "un documento para viajes internacionales", example: "Don't forget your passport.", exampleEs: "No olvides tu pasaporte.", related: ["visa", "ID"], difficulty: 1 },
          { id: "l3t1_n3", word: "luggage", translation: "equipaje", type: "noun", definition: "bags and suitcases for travel", definitionEs: "maletas y bolsas para viajar", example: "Please check your luggage.", exampleEs: "Por favor registre su equipaje.", related: ["suitcase", "bag"], difficulty: 1 },
          { id: "l3t1_n4", word: "boarding pass", translation: "tarjeta de embarque", type: "noun", definition: "a card that allows you to board a plane", definitionEs: "una tarjeta que te permite abordar un avión", example: "Here's your boarding pass.", exampleEs: "Aquí está su tarjeta de embarque.", related: ["ticket"], difficulty: 1 },
          { id: "l3t1_n5", word: "gate", translation: "puerta de embarque", type: "noun", definition: "the area where you board a plane", definitionEs: "el área donde abordas un avión", example: "Your flight departs from gate 15.", exampleEs: "Su vuelo sale de la puerta 15.", related: ["terminal"], difficulty: 1 },
          { id: "l3t1_n6", word: "customs", translation: "aduana", type: "noun", definition: "the place where luggage is checked at borders", definitionEs: "el lugar donde se revisa el equipaje en fronteras", example: "We need to go through customs.", exampleEs: "Necesitamos pasar por la aduana.", related: ["border"], difficulty: 2 },
          { id: "l3t1_n7", word: "reservation", translation: "reservación", type: "noun", definition: "an arrangement to have something kept for you", definitionEs: "un arreglo para que te guarden algo", example: "I have a reservation for tonight.", exampleEs: "Tengo una reservación para esta noche.", related: ["booking"], difficulty: 1 },
          { id: "l3t1_n8", word: "destination", translation: "destino", type: "noun", definition: "the place you are traveling to", definitionEs: "el lugar al que viajas", example: "What is your final destination?", exampleEs: "¿Cuál es su destino final?", related: ["arrival"], difficulty: 1 },
        ],
        verbs: [
          { id: "l3t1_v1", word: "travel", translation: "viajar", type: "verb", definition: "to go from one place to another", definitionEs: "ir de un lugar a otro", example: "I love to travel.", exampleEs: "Me encanta viajar.", related: ["trip", "journey"], difficulty: 1 },
          { id: "l3t1_v2", word: "arrive", translation: "llegar", type: "verb", definition: "to reach a place", definitionEs: "alcanzar un lugar", example: "We arrive at 10 AM.", exampleEs: "Llegamos a las 10 AM.", related: ["arrival"], difficulty: 1 },
          { id: "l3t1_v3", word: "depart", translation: "partir/salir", type: "verb", definition: "to leave a place", definitionEs: "dejar un lugar", example: "The train departs at 8 AM.", exampleEs: "El tren sale a las 8 AM.", related: ["departure"], difficulty: 1 },
          { id: "l3t1_v4", word: "book", translation: "reservar", type: "verb", definition: "to arrange to have something in advance", definitionEs: "arreglar tener algo por adelantado", example: "I booked a hotel room.", exampleEs: "Reservé una habitación de hotel.", related: ["reservation"], difficulty: 1 },
          { id: "l3t1_v5", word: "check in", translation: "registrarse", type: "verb", definition: "to register at a hotel or airport", definitionEs: "registrarse en un hotel o aeropuerto", example: "We need to check in two hours early.", exampleEs: "Necesitamos registrarnos dos horas antes.", related: ["check out"], difficulty: 1 },
          { id: "l3t1_v6", word: "pack", translation: "empacar", type: "verb", definition: "to put things in a bag for travel", definitionEs: "poner cosas en una bolsa para viajar", example: "I need to pack my suitcase.", exampleEs: "Necesito empacar mi maleta.", related: ["unpack"], difficulty: 1 },
        ],
        adjectives: [
          { id: "l3t1_a1", word: "delayed", translation: "retrasado", type: "adjective", definition: "late or behind schedule", definitionEs: "tarde o fuera de horario", example: "The flight is delayed by two hours.", exampleEs: "El vuelo está retrasado dos horas.", related: ["late"], difficulty: 1 },
          { id: "l3t1_a2", word: "direct", translation: "directo", type: "adjective", definition: "without stopping", definitionEs: "sin parar", example: "Is this a direct flight?", exampleEs: "¿Es este un vuelo directo?", related: [], difficulty: 1 },
          { id: "l3t1_a3", word: "available", translation: "disponible", type: "adjective", definition: "able to be used or obtained", definitionEs: "que puede ser usado u obtenido", example: "Are there any seats available?", exampleEs: "¿Hay asientos disponibles?", related: ["availability"], difficulty: 1 },
        ],
        expressions: [
          { id: "l3t1_e1", word: "How do I get to...?", translation: "¿Cómo llego a...?", type: "expression", definition: "asking for directions", definitionEs: "pidiendo direcciones", example: "How do I get to the airport?", exampleEs: "¿Cómo llego al aeropuerto?", related: [], difficulty: 1 },
          { id: "l3t1_e2", word: "I'd like to book...", translation: "Me gustaría reservar...", type: "expression", definition: "making a reservation", definitionEs: "haciendo una reservación", example: "I'd like to book a flight to Paris.", exampleEs: "Me gustaría reservar un vuelo a París.", related: [], difficulty: 1 },
          { id: "l3t1_e3", word: "What time does it leave?", translation: "¿A qué hora sale?", type: "expression", definition: "asking about departure time", definitionEs: "preguntando sobre la hora de salida", example: "What time does the bus leave?", exampleEs: "¿A qué hora sale el autobús?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [
          { id: "l3t1_p1", word: "by", translation: "en/por", type: "preposition", definition: "using a method of transport", definitionEs: "usando un método de transporte", example: "I travel by plane.", exampleEs: "Viajo en avión.", related: [], difficulty: 1 },
        ],
      },
      commonMistakes: [
        {
          id: "l3t1_cm1",
          wrong: "I arrived to Madrid at 5 PM.",
          correct: "I arrived in Madrid at 5 PM.",
          explanation: "We use 'arrive IN' for cities and countries, 'arrive AT' for specific places like stations or airports.",
          explanationEs: "Usamos 'arrive IN' para ciudades y países, 'arrive AT' para lugares específicos como estaciones o aeropuertos.",
          category: "usage"
        },
        {
          id: "l3t1_cm2",
          wrong: "My luggages are heavy.",
          correct: "My luggage is heavy.",
          explanation: "'Luggage' is uncountable in English. It has no plural form. Use 'luggage' or 'pieces of luggage'.",
          explanationEs: "'Luggage' es incontable en inglés. No tiene forma plural. Se usa 'luggage' o 'pieces of luggage'.",
          category: "grammar"
        },
        {
          id: "l3t1_cm3",
          wrong: "I want to do a reservation.",
          correct: "I want to make a reservation.",
          explanation: "In English we use 'make a reservation' or 'book', not 'do a reservation'.",
          explanationEs: "En inglés usamos 'make a reservation' o 'book', no 'do a reservation'.",
          category: "vocabulary"
        },
        {
          id: "l3t1_cm4",
          wrong: "The plane will arrive on 3 PM.",
          correct: "The plane will arrive at 3 PM.",
          explanation: "We use 'AT' for specific times, not 'on' or 'in'.",
          explanationEs: "Usamos 'AT' para horas específicas, no 'on' ni 'in'.",
          category: "grammar"
        },
        {
          id: "l3t1_cm5",
          wrong: "I traveled with the train to Paris.",
          correct: "I traveled by train to Paris.",
          explanation: "For means of transport we use 'by': by train, by plane, by bus, by car.",
          explanationEs: "Para medios de transporte usamos 'by': by train, by plane, by bus, by car.",
          category: "usage"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con la preposición correcta (at, in, to, by):",
          items: [
            { sentence: "We arrived ___ the airport two hours early.", answer: "at", hint: "Lugares específicos" },
            { sentence: "She arrived ___ Tokyo yesterday.", answer: "in", hint: "Ciudades" },
            { sentence: "I prefer to travel ___ train.", answer: "by", hint: "Medio de transporte" },
            { sentence: "The flight departs ___ 8:30 AM.", answer: "at", hint: "Horas" },
            { sentence: "How do I get ___ the station?", answer: "to", hint: "Destino" }
          ]
        },
        {
          type: "matching",
          instruction: "Une el vocabulario del aeropuerto con su definición:",
          pairs: [
            { term: "boarding pass", match: "card to get on the plane" },
            { term: "customs", match: "where luggage is checked at borders" },
            { term: "gate", match: "where you board the plane" },
            { term: "luggage", match: "bags and suitcases for travel" },
            { term: "destination", match: "the place you're traveling to" },
            { term: "reservation", match: "an arrangement booked in advance" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en estas oraciones:",
          items: [
            { incorrect: "I booked a fly to London.", correct: "I booked a flight to London.", hint: "'Fly' es verbo, el sustantivo es 'flight'" },
            { incorrect: "Please show me your passport and boarding ticket.", correct: "Please show me your passport and boarding pass.", hint: "Es 'boarding pass', no 'boarding ticket'" },
            { incorrect: "The custom is very busy today.", correct: "The customs is very busy today.", hint: "'Customs' siempre va en plural en este contexto" },
            { incorrect: "What hour does the train leave?", correct: "What time does the train leave?", hint: "Usamos 'time' no 'hour' para preguntar horarios" }
          ]
        },
        {
          type: "sentence-building",
          instruction: "Ordena las palabras para formar oraciones correctas:",
          items: [
            { words: ["like", "to", "I'd", "book", "a", "flight", "Paris", "to"], answer: "I'd like to book a flight to Paris." },
            { words: ["does", "what", "time", "train", "the", "depart", "?"], answer: "What time does the train depart?" },
            { words: ["is", "delayed", "by", "flight", "the", "hours", "two"], answer: "The flight is delayed by two hours." },
            { words: ["need", "check", "to", "we", "in", "early"], answer: "We need to check in early." }
          ]
        }
      ],
      modelDialogue: {
        title: "En el mostrador de check-in del aeropuerto",
        dialogue: [
          { speaker: "Agent", text: "Good morning. Can I see your passport and booking reference, please?", translation: "Buenos días. ¿Puedo ver su pasaporte y número de reserva, por favor?" },
          { speaker: "Traveler", text: "Of course. Here you go. I'd like a window seat if possible.", translation: "Por supuesto. Aquí tiene. Me gustaría un asiento de ventana si es posible." },
          { speaker: "Agent", text: "Let me check... Yes, I can give you seat 14A, it's a window seat.", translation: "Déjeme verificar... Sí, puedo darle el asiento 14A, es asiento de ventana." },
          { speaker: "Traveler", text: "Perfect! How many bags can I check in?", translation: "¡Perfecto! ¿Cuántas maletas puedo facturar?" },
          { speaker: "Agent", text: "You can check one bag up to 23 kilos. Do you have any carry-on luggage?", translation: "Puede facturar una maleta de hasta 23 kilos. ¿Tiene equipaje de mano?" },
          { speaker: "Traveler", text: "Yes, just this backpack. What time does boarding start?", translation: "Sí, solo esta mochila. ¿A qué hora comienza el embarque?" },
          { speaker: "Agent", text: "Boarding starts at 10:30 from gate B5. Here's your boarding pass.", translation: "El embarque comienza a las 10:30 en la puerta B5. Aquí está su tarjeta de embarque." },
          { speaker: "Traveler", text: "Thank you. Where is the security checkpoint?", translation: "Gracias. ¿Dónde está el control de seguridad?" },
          { speaker: "Agent", text: "Go straight ahead and turn right. You can't miss it. Have a nice flight!", translation: "Vaya recto y gire a la derecha. No tiene pierde. ¡Buen viaje!" }
        ],
        keyPhrases: [
          "Can I see your passport and booking reference?",
          "I'd like a window seat if possible",
          "How many bags can I check in?",
          "What time does boarding start?",
          "Here's your boarding pass"
        ]
      },
      pronunciationFocus: {
        title: "Sonidos clave en vocabulario de viajes",
        sounds: [
          { sound: "/eə/", word: "airport", tip: "Comienza con 'e' y termina con el sonido 'a' suave", tipEs: "Como en 'air' - no confundir con 'air' español" },
          { sound: "/dʒ/", word: "luggage", tip: "Sonido suave de 'j' como en 'job'", tipEs: "Más suave que la 'y' española en 'yo'" },
          { sound: "/aɪ/", word: "flight", tip: "Diptongo que suena como 'ai' en español", tipEs: "flight = /flaɪt/, no 'fleet'" }
        ],
        minimalPairs: [
          { word1: "flight", word2: "fleet", explanation: "flight /flaɪt/ = vuelo; fleet /fliːt/ = flota. La vocal cambia el significado." },
          { word1: "arrive", word2: "alive", explanation: "arrive /əˈraɪv/ = llegar; alive /əˈlaɪv/ = vivo. Atención a la 'r'." }
        ],
        intonation: [
          { pattern: "Rising for yes/no questions", example: "Do you have a reservation?↗", tip: "Sube la voz al final para sonar educado", tipEs: "En preguntas sí/no, la entonación ascendente suena más amigable" }
        ],
        commonErrors: [
          { word: "customs", wrong: "/kus-toms/", right: "/ˈkʌs.təmz/", note: "La 'u' suena como /ʌ/, no como 'u' española" },
          { word: "departure", wrong: "/de-par-TU-re/", right: "/dɪˈpɑː.tʃər/", note: "El acento está en la segunda sílaba" },
          { word: "aisle", wrong: "/ais-le/", right: "/aɪl/", note: "La 's' es muda, se pronuncia como 'isle'" }
        ]
      },
      culturalNote: {
        title: "Cultura de viajes y aeropuertos en países angloparlantes",
        titleEs: "Cultura de viajes y aeropuertos en países angloparlantes",
        content: "En aeropuertos de EE.UU. y UK, la seguridad es muy estricta. Debes llegar con anticipación (2-3 horas para vuelos internacionales). En EE.UU., quítate los zapatos en el control de seguridad. La propina para taxistas es 15-20% en EE.UU. En UK, el redondeo es suficiente. Los trenes británicos son puntuales pero caros; los estadounidenses menos usados que en Europa. 'Queue' en UK = 'line' en US para hacer fila. Los conductores de Uber/Lyft se saludan por su nombre en EE.UU.",
        contentEs: "En aeropuertos de EE.UU. y UK, la seguridad es muy estricta. Debes llegar con anticipación (2-3 horas para vuelos internacionales). En EE.UU., quítate los zapatos en el control de seguridad. La propina para taxistas es 15-20% en EE.UU. En UK, el redondeo es suficiente.",
        region: "General",
        examples: [
          "🇺🇸 En EE.UU.: 'Where's the restroom?' (baño)",
          "🇬🇧 En UK: 'Where's the toilet?' (baño)",
          "🇺🇸 'One-way ticket' = boleto de ida / 🇬🇧 'Single ticket'",
          "🇺🇸 'Round-trip' = ida y vuelta / 🇬🇧 'Return ticket'"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Qué preposición usamos para ciudades con 'arrive'?",
          questionEs: "¿Qué preposición usamos para ciudades con 'arrive'?",
          options: ["arrive at Paris", "arrive in Paris", "arrive to Paris", "arrive on Paris"],
          correctAnswer: 1,
          explanation: "Usamos 'arrive IN' para ciudades y países: 'arrive in Paris', 'arrive in France'.",
          explanationEs: "Usamos 'arrive IN' para ciudades y países: 'arrive in Paris', 'arrive in France'."
        },
        {
          question: "¿Cómo se dice correctamente 'hacer una reservación'?",
          questionEs: "¿Cómo se dice correctamente 'hacer una reservación'?",
          options: ["do a reservation", "make a reservation", "take a reservation", "have a reservation"],
          correctAnswer: 1,
          explanation: "'Make a reservation' o 'book' son las formas correctas.",
          explanationEs: "'Make a reservation' o 'book' son las formas correctas."
        },
        {
          question: "¿Cuál es el plural correcto de 'luggage'?",
          questionEs: "¿Cuál es el plural correcto de 'luggage'?",
          options: ["luggages", "luggage pieces", "luggage (no cambia)", "luggagies"],
          correctAnswer: 2,
          explanation: "'Luggage' es incontable, no tiene plural. Se dice 'pieces of luggage' para cantidades.",
          explanationEs: "'Luggage' es incontable, no tiene plural. Se dice 'pieces of luggage' para cantidades."
        },
        {
          question: "¿Qué medio de transporte usa la preposición 'on' en lugar de 'by'?",
          questionEs: "¿Qué medio de transporte usa la preposición 'on' en lugar de 'by'?",
          options: ["car", "taxi", "bicycle", "foot"],
          correctAnswer: 3,
          explanation: "Decimos 'on foot' para caminar, pero 'by car', 'by taxi', 'by bicycle'.",
          explanationEs: "Decimos 'on foot' para caminar, pero 'by car', 'by taxi', 'by bicycle'."
        },
        {
          question: "¿Qué documento te permite abordar un avión?",
          questionEs: "¿Qué documento te permite abordar un avión?",
          options: ["passport only", "boarding pass", "visa", "booking ticket"],
          correctAnswer: 1,
          explanation: "El 'boarding pass' (tarjeta de embarque) es lo que necesitas para abordar.",
          explanationEs: "El 'boarding pass' (tarjeta de embarque) es lo que necesitas para abordar."
        },
        {
          question: "'The flight is delayed' significa que el vuelo:",
          questionEs: "'The flight is delayed' significa que el vuelo:",
          options: ["fue cancelado", "está retrasado", "está lleno", "es directo"],
          correctAnswer: 1,
          explanation: "'Delayed' significa retrasado, fuera del horario previsto.",
          explanationEs: "'Delayed' significa retrasado, fuera del horario previsto."
        }
      ],
      guidedProduction: [
        {
          task: "Roleplay: Estás en el mostrador de check-in. El agente te pide tu pasaporte.",
          prompt: "Agent: 'Good morning. May I see your passport, please?' - ¿Cómo respondes?",
          promptEs: "Agente: 'Buenos días. ¿Puedo ver su pasaporte?' - ¿Cómo respondes?",
          sampleAnswer: "Of course, here you go. I'd also like to check in my luggage.",
          hints: ["Di 'here you go' al entregar algo", "Menciona tu equipaje", "Sé cortés"]
        },
        {
          task: "Reservar un vuelo por teléfono",
          prompt: "Necesitas reservar un vuelo a Londres para el próximo viernes. ¿Qué dices?",
          promptEs: "Necesitas reservar un vuelo a Londres para el próximo viernes. ¿Qué dices?",
          sampleAnswer: "Hello, I'd like to book a flight to London for next Friday. Do you have any availability?",
          hints: ["Usa 'I'd like to book'", "Especifica el destino", "Pregunta disponibilidad"]
        },
        {
          task: "Preguntar sobre un retraso",
          prompt: "Tu vuelo está retrasado. Pregunta al personal cuánto tiempo de retraso hay.",
          promptEs: "Tu vuelo está retrasado. Pregunta al personal cuánto tiempo de retraso hay.",
          sampleAnswer: "Excuse me, my flight is delayed. How long is the delay? When will we be boarding?",
          hints: ["Usa 'Excuse me' para ser cortés", "Pregunta el tiempo de retraso", "Pregunta sobre el embarque"]
        },
        {
          task: "Describir tu equipaje perdido",
          prompt: "Tu maleta se perdió. Descríbela al personal de la aerolínea.",
          promptEs: "Tu maleta se perdió. Descríbela al personal de la aerolínea.",
          sampleAnswer: "My luggage didn't arrive. It's a large black suitcase with a red tag. It has wheels.",
          hints: ["Describe el tamaño y color", "Menciona características distintivas", "Sé específico"]
        }
      ],
      connectionToPrevious: "En Level 2 aprendiste vocabulario de transporte básico (bus, taxi, car). Ahora expandimos a viajes internacionales con aeropuertos, vuelos y reservaciones.",
      connectionToNext: "El vocabulario de viajes será útil para las próximas lecciones sobre el hotel y restaurantes, donde usarás 'book', 'reservation' y más.",
      grammarTheoryIds: ['a2-prepositions-time-place', 'a2-past-simple', 'a2-question-formation']
    },
    {
      id: 2,
      title: "Past Simple - Regular Verbs",
      titleEs: "Pasado Simple - Verbos Regulares",
      introduction: {
        title: "📅 Pasado Simple - Verbos Regulares",
        explanation: "El pasado simple es fundamental para contar historias y hablar de experiencias pasadas. Con los verbos regulares, simplemente añadimos '-ed' al final del verbo.",
        keyPoints: [
          "Formación: verbo + ed: work → worked, play → played, watch → watched",
          "Verbos que terminan en 'e': solo añadir 'd': live → lived, arrive → arrived",
          "Verbos que terminan en consonante + 'y': cambiar 'y' por 'ied': study → studied, try → tried",
          "Negativos: didn't + verbo base: 'I didn't work yesterday'",
          "Preguntas: Did + sujeto + verbo base?: 'Did you work yesterday?'"
        ],
        examples: [
          { english: "I worked from home yesterday.", spanish: "Trabajé desde casa ayer.", explanation: "Afirmativo regular" },
          { english: "She didn't watch TV last night.", spanish: "Ella no vio TV anoche.", explanation: "Negativo" },
          { english: "Did they arrive on time?", spanish: "¿Llegaron a tiempo?", explanation: "Pregunta" }
        ],
        tips: [
          "💡 Pronunciación de '-ed': /t/ después de sonidos sordos (worked), /d/ después de sonidos sonoros (played), /ɪd/ después de 't' o 'd' (wanted)",
          "💡 El verbo después de 'did/didn't' va en forma BASE, sin '-ed'",
          "💡 Palabras de tiempo pasado: yesterday, last week, ago, in 2020"
        ],
        whenToUse: [
          "Al contar historias o experiencias pasadas: 'I worked yesterday'",
          "Al describir hechos completados: 'She studied all night'",
          "Al hablar de acciones terminadas con tiempo: 'They arrived last week'",
          "En biografías y narrativas: 'He lived in London for 5 years'"
        ],
        whenNotToUse: [
          "Para acciones en progreso en el pasado → usa Past Continuous: 'I was working' (NO 'I worked' en ese momento)",
          "Para hábitos pasados repetidos → usa 'used to': 'I used to work there' (NO 'I worked there' para rutinas)"
        ]
      },
      objectives: ["Formar oraciones en pasado simple", "Usar verbos regulares correctamente", "Hacer preguntas sobre el pasado"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l3t2_n1", word: "yesterday", translation: "ayer", type: "noun", definition: "the day before today", definitionEs: "el día antes de hoy", example: "I saw her yesterday.", exampleEs: "La vi ayer.", related: ["today", "tomorrow"], difficulty: 1 },
          { id: "l3t2_n2", word: "weekend", translation: "fin de semana", type: "noun", definition: "Saturday and Sunday", definitionEs: "sábado y domingo", example: "What did you do last weekend?", exampleEs: "¿Qué hiciste el fin de semana pasado?", related: ["weekday"], difficulty: 1 },
          { id: "l3t2_n3", word: "childhood", translation: "infancia", type: "noun", definition: "the time when you are a child", definitionEs: "el tiempo cuando eres niño", example: "I lived in Spain during my childhood.", exampleEs: "Viví en España durante mi infancia.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l3t2_v1", word: "worked", translation: "trabajé/trabajó", type: "verb", definition: "past of work", definitionEs: "pasado de trabajar", example: "I worked late yesterday.", exampleEs: "Trabajé tarde ayer.", related: ["work"], difficulty: 1 },
          { id: "l3t2_v2", word: "played", translation: "jugué/jugó", type: "verb", definition: "past of play", definitionEs: "pasado de jugar", example: "We played football last Sunday.", exampleEs: "Jugamos fútbol el domingo pasado.", related: ["play"], difficulty: 1 },
          { id: "l3t2_v3", word: "watched", translation: "vi/vio", type: "verb", definition: "past of watch", definitionEs: "pasado de ver/mirar", example: "I watched a movie last night.", exampleEs: "Vi una película anoche.", related: ["watch"], difficulty: 1 },
          { id: "l3t2_v4", word: "visited", translation: "visité/visitó", type: "verb", definition: "past of visit", definitionEs: "pasado de visitar", example: "We visited Paris last summer.", exampleEs: "Visitamos París el verano pasado.", related: ["visit"], difficulty: 1 },
          { id: "l3t2_v5", word: "studied", translation: "estudié/estudió", type: "verb", definition: "past of study", definitionEs: "pasado de estudiar", example: "She studied all night.", exampleEs: "Ella estudió toda la noche.", related: ["study"], difficulty: 1 },
          { id: "l3t2_v6", word: "cleaned", translation: "limpié/limpió", type: "verb", definition: "past of clean", definitionEs: "pasado de limpiar", example: "I cleaned my room this morning.", exampleEs: "Limpié mi habitación esta mañana.", related: ["clean"], difficulty: 1 },
          { id: "l3t2_v7", word: "cooked", translation: "cociné/cocinó", type: "verb", definition: "past of cook", definitionEs: "pasado de cocinar", example: "He cooked dinner for us.", exampleEs: "Él cocinó la cena para nosotros.", related: ["cook"], difficulty: 1 },
          { id: "l3t2_v8", word: "talked", translation: "hablé/habló", type: "verb", definition: "past of talk", definitionEs: "pasado de hablar", example: "We talked for hours.", exampleEs: "Hablamos por horas.", related: ["talk"], difficulty: 1 },
        ],
        adjectives: [],
        expressions: [
          { id: "l3t2_e1", word: "last week/month/year", translation: "la semana/mes/año pasado", type: "expression", definition: "the previous week/month/year", definitionEs: "la semana/mes/año anterior", example: "I started my job last month.", exampleEs: "Empecé mi trabajo el mes pasado.", related: [], difficulty: 1 },
          { id: "l3t2_e2", word: "...ago", translation: "hace...", type: "expression", definition: "in the past", definitionEs: "en el pasado", example: "I moved here two years ago.", exampleEs: "Me mudé aquí hace dos años.", related: [], difficulty: 1 },
          { id: "l3t2_e3", word: "What did you do?", translation: "¿Qué hiciste?", type: "expression", definition: "asking about past actions", definitionEs: "preguntando sobre acciones pasadas", example: "What did you do yesterday?", exampleEs: "¿Qué hiciste ayer?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l3t2_cm1",
          wrong: "I didn't watched TV last night.",
          correct: "I didn't watch TV last night.",
          explanation: "After 'didn't', the verb goes in BASE form (without -ed). 'Didn't' already indicates past tense.",
          explanationEs: "Después de 'didn't', el verbo va en forma BASE (sin -ed). El 'didn't' ya indica pasado.",
          category: "grammar"
        },
        {
          id: "l3t2_cm2",
          wrong: "Did you worked yesterday?",
          correct: "Did you work yesterday?",
          explanation: "In questions with 'did', the main verb goes in BASE form. 'Did' already indicates past tense.",
          explanationEs: "En preguntas con 'did', el verbo principal va en forma BASE. 'Did' ya indica pasado.",
          category: "grammar"
        },
        {
          id: "l3t2_cm3",
          wrong: "I studyed for the exam.",
          correct: "I studied for the exam.",
          explanation: "Verbs ending in consonant + 'y' change the 'y' to 'ied': study → studied, try → tried.",
          explanationEs: "Verbos terminados en consonante + 'y' cambian la 'y' por 'ied': study → studied, try → tried.",
          category: "grammar"
        },
        {
          id: "l3t2_cm4",
          wrong: "She arriveed at 5 PM.",
          correct: "She arrived at 5 PM.",
          explanation: "Verbs ending in 'e' only add 'd': arrive → arrived, live → lived.",
          explanationEs: "Verbos terminados en 'e' solo añaden 'd': arrive → arrived, live → lived.",
          category: "grammar"
        },
        {
          id: "l3t2_cm5",
          wrong: "Yesterday I work all day.",
          correct: "Yesterday I worked all day.",
          explanation: "With past time words like 'yesterday', you must use the verb in past tense.",
          explanationEs: "Con palabras de tiempo pasado como 'yesterday', debes usar el verbo en pasado.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con la forma correcta del pasado simple:",
          items: [
            { sentence: "She ___ (watch) a movie yesterday.", answer: "watched", hint: "verbo regular" },
            { sentence: "They ___ (play) tennis last weekend.", answer: "played", hint: "verbo regular" },
            { sentence: "I ___ (study) English for 2 hours.", answer: "studied", hint: "consonante + y" },
            { sentence: "We ___ (arrive) late to the party.", answer: "arrived", hint: "termina en e" },
            { sentence: "He ___ (not/call) me yesterday.", answer: "didn't call", hint: "negativo" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma las oraciones a la forma indicada:",
          items: [
            { original: "I work every day. (yesterday)", answer: "I worked yesterday.", type: "afirmativo" },
            { original: "She watches TV. (last night)", answer: "She watched TV last night.", type: "afirmativo" },
            { original: "I played football. (negativo)", answer: "I didn't play football.", type: "negativo" },
            { original: "They visited Paris. (pregunta)", answer: "Did they visit Paris?", type: "pregunta" },
            { original: "He studied a lot. (pregunta negativa)", answer: "Didn't he study a lot?", type: "pregunta negativa" }
          ]
        },
        {
          type: "pronunciation",
          instruction: "Clasifica estos verbos según la pronunciación de '-ed':",
          categories: ["/t/", "/d/", "/ɪd/"],
          items: [
            { verb: "worked", category: "/t/", reason: "sonido sordo antes de -ed" },
            { verb: "played", category: "/d/", reason: "sonido sonoro antes de -ed" },
            { verb: "wanted", category: "/ɪd/", reason: "termina en 't'" },
            { verb: "watched", category: "/t/", reason: "sonido sordo 'ch'" },
            { verb: "visited", category: "/ɪd/", reason: "termina en 't'" },
            { verb: "cleaned", category: "/d/", reason: "sonido sonoro 'n'" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en estas oraciones:",
          items: [
            { incorrect: "Did she watched the news?", correct: "Did she watch the news?", hint: "Forma base después de 'did'" },
            { incorrect: "I not worked yesterday.", correct: "I didn't work yesterday.", hint: "Negativo con 'didn't'" },
            { incorrect: "We stoped at the store.", correct: "We stopped at the store.", hint: "Doblar consonante después de vocal corta" },
            { incorrect: "They plaied basketball.", correct: "They played basketball.", hint: "Vocal + y = solo añadir -ed" }
          ]
        }
      ],
      modelDialogue: {
        title: "Hablando sobre el fin de semana pasado",
        dialogue: [
          { speaker: "Tom", text: "Hey! How was your weekend?", translation: "¡Hola! ¿Cómo estuvo tu fin de semana?" },
          { speaker: "Sarah", text: "It was great! I visited my parents on Saturday.", translation: "¡Estuvo genial! Visité a mis padres el sábado." },
          { speaker: "Tom", text: "Nice! What did you do?", translation: "¡Qué bien! ¿Qué hicieron?" },
          { speaker: "Sarah", text: "We cooked a big lunch together and talked for hours.", translation: "Cocinamos un gran almuerzo juntos y hablamos por horas." },
          { speaker: "Tom", text: "That sounds lovely. Did you stay the night?", translation: "Eso suena encantador. ¿Te quedaste a dormir?" },
          { speaker: "Sarah", text: "No, I didn't. I returned home in the evening. What about you?", translation: "No, no me quedé. Regresé a casa en la noche. ¿Y tú?" },
          { speaker: "Tom", text: "I stayed home and cleaned my apartment. Then I watched a movie.", translation: "Me quedé en casa y limpié mi apartamento. Luego vi una película." },
          { speaker: "Sarah", text: "What movie did you watch?", translation: "¿Qué película viste?" },
          { speaker: "Tom", text: "I watched that new action movie. I really enjoyed it!", translation: "Vi esa nueva película de acción. ¡La disfruté mucho!" }
        ],
        keyPhrases: [
          "How was your weekend?",
          "What did you do?",
          "I visited my parents",
          "Did you stay the night?",
          "No, I didn't"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de la terminación -ed",
        sounds: [
          { sound: "/t/", word: "worked", tip: "Después de sonidos sordos", tipEs: "Suena como 't' sorda, no como 'ed' completo" },
          { sound: "/d/", word: "played", tip: "Después de sonidos sonoros", tipEs: "Suena como 'd' suave" },
          { sound: "/ɪd/", word: "wanted", tip: "Después de /t/ o /d", tipEs: "Se añade sílaba extra -id" }
        ],
        minimalPairs: [
          { word1: "played", word2: "plate", explanation: "played /pleɪd/ vs plate /pleɪt/ - la -ed suena /d/, plate termina en /t/" },
          { word1: "lived", word2: "lift", explanation: "lived /lɪvd/ vs lift /lɪft/ - /d/ sonoro vs /t/ sordo al final" }
        ],
        intonation: [
          { pattern: "Rising for past tense questions", example: "Did you work yesterday?↗", tip: "Preguntas con 'Did' suben al final", tipEs: "La entonación ascendente indica pregunta" }
        ],
        commonErrors: [
          { word: "worked", wrong: "/wor-ked/", right: "/wɜːkt/", note: "Una sílaba, -ed suena /t/" },
          { word: "played", wrong: "/play-ed/", right: "/pleɪd/", note: "Una sílaba, -ed suena /d/" },
          { word: "started", wrong: "/star-td/", right: "/ˈstɑːr.tɪd/", note: "Dos sílabas, -ed suena /ɪd/" }
        ]
      },
      culturalNote: {
        title: "Hablando del pasado en conversaciones sociales",
        titleEs: "Hablando del pasado en conversaciones sociales",
        content: "En la cultura angloparlante, preguntar '¿Qué hiciste el fin de semana?' es una forma muy común de iniciar conversación el lunes. Se espera que compartas algo interesante, aunque sea simple. Los británicos tienden a ser más modestos ('I didn't do much'), mientras que los estadounidenses son más expresivos sobre sus actividades. Mencionar actividades pasadas ayuda a crear conexiones sociales.",
        contentEs: "Preguntar sobre el fin de semana es muy común el lunes. Los británicos son más modestos, los estadounidenses más expresivos.",
        region: "General",
        examples: [
          "🇺🇸 US: 'I had an amazing weekend! I went hiking and found this incredible waterfall!'",
          "🇬🇧 UK: 'It was quite nice, actually. Just pottered about the garden.'",
          "Respuesta típica si no hiciste mucho: 'Not much, just relaxed at home. How about you?'"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la forma correcta del pasado de 'study'?",
          questionEs: "¿Cuál es la forma correcta del pasado de 'study'?",
          options: ["studyed", "studied", "studed", "studid"],
          correctAnswer: 1,
          explanation: "Verbos terminados en consonante + y cambian la y por ied: study → studied.",
          explanationEs: "Verbos terminados en consonante + y cambian la y por ied: study → studied."
        },
        {
          question: "¿Qué oración es correcta?",
          questionEs: "¿Qué oración es correcta?",
          options: ["Did you watched the game?", "Did you watch the game?", "Do you watched the game?", "Did you watching the game?"],
          correctAnswer: 1,
          explanation: "Después de 'did' siempre usamos la forma base del verbo.",
          explanationEs: "Después de 'did' siempre usamos la forma base del verbo."
        },
        {
          question: "¿Cómo se pronuncia '-ed' en 'worked'?",
          questionEs: "¿Cómo se pronuncia '-ed' en 'worked'?",
          options: ["/ɪd/ como sílaba extra", "/d/ como en 'played'", "/t/ como en 'stopped'", "no se pronuncia"],
          correctAnswer: 2,
          explanation: "Después del sonido sordo /k/, -ed se pronuncia /t/.",
          explanationEs: "Después del sonido sordo /k/, -ed se pronuncia /t/."
        },
        {
          question: "Completa: 'She ___ (not/play) tennis yesterday.'",
          questionEs: "Completa: 'She ___ (not/play) tennis yesterday.'",
          options: ["not played", "didn't played", "didn't play", "don't play"],
          correctAnswer: 2,
          explanation: "Negativo en pasado: didn't + verbo base.",
          explanationEs: "Negativo en pasado: didn't + verbo base."
        },
        {
          question: "¿Cuál NO es un marcador de tiempo pasado?",
          questionEs: "¿Cuál NO es un marcador de tiempo pasado?",
          options: ["yesterday", "last week", "tomorrow", "two days ago"],
          correctAnswer: 2,
          explanation: "'Tomorrow' indica futuro, no pasado.",
          explanationEs: "'Tomorrow' indica futuro, no pasado."
        },
        {
          question: "¿Cómo se pronuncia '-ed' en 'visited'?",
          questionEs: "¿Cómo se pronuncia '-ed' en 'visited'?",
          options: ["/t/", "/d/", "/ɪd/", "no se pronuncia"],
          correctAnswer: 2,
          explanation: "Cuando el verbo termina en 't' o 'd', -ed se pronuncia /ɪd/ como sílaba extra.",
          explanationEs: "Cuando el verbo termina en 't' o 'd', -ed se pronuncia /ɪd/ como sílaba extra."
        }
      ],
      guidedProduction: [
        {
          task: "Cuenta qué hiciste ayer",
          prompt: "Describe tres actividades que hiciste ayer usando verbos regulares.",
          promptEs: "Describe tres actividades que hiciste ayer usando verbos regulares.",
          sampleAnswer: "Yesterday I worked from home until 6 PM. Then I cooked dinner and watched a documentary about nature.",
          hints: ["Usa marcadores de tiempo", "Incluye detalles", "Conecta las acciones"]
        },
        {
          task: "Pregunta sobre el pasado",
          prompt: "Tu amigo volvió de vacaciones. Hazle 3 preguntas sobre su viaje.",
          promptEs: "Tu amigo volvió de vacaciones. Hazle 3 preguntas sobre su viaje.",
          sampleAnswer: "How was your trip? Where did you stay? Did you visit any museums?",
          hints: ["Usa 'How was...?'", "Usa 'Did you...?'", "Pregunta detalles específicos"]
        },
        {
          task: "Responder preguntas sobre el pasado",
          prompt: "Responde estas preguntas en forma completa: Did you study English yesterday? Did you watch TV last night?",
          promptEs: "Responde estas preguntas en forma completa: Did you study English yesterday? Did you watch TV last night?",
          sampleAnswer: "Yes, I studied English for one hour yesterday. No, I didn't watch TV last night because I was tired.",
          hints: ["Responde con oración completa", "Añade detalles", "Practica afirmativo y negativo"]
        },
        {
          task: "Narrar un evento pasado",
          prompt: "Describe qué pasó la última vez que fuiste a un restaurante.",
          promptEs: "Describe qué pasó la última vez que fuiste a un restaurante.",
          sampleAnswer: "Last Saturday, I visited a new Italian restaurant. I ordered pasta and my friend ordered pizza. We talked and enjoyed the food. We stayed for two hours.",
          hints: ["Usa secuencia temporal", "Incluye varios verbos", "Describe la experiencia"]
        }
      ],
      connectionToPrevious: "En Level 2 usaste el presente simple para describir rutinas. Ahora con el pasado simple podrás contar qué hiciste ayer, el fin de semana pasado, etc.",
      connectionToNext: "En la siguiente lección aprenderás los verbos irregulares, que también usan el pasado simple pero con formas diferentes (go → went, see → saw).",
      grammarTheoryIds: ['a2-past-simple', 'a2-question-formation']
    },
    {
      id: 3,
      title: "Past Simple - Irregular Verbs",
      titleEs: "Pasado Simple - Verbos Irregulares",
      introduction: {
        title: "🔄 Pasado Simple - Verbos Irregulares",
        explanation: "Los verbos irregulares no siguen la regla de '-ed'. Cada uno tiene su propia forma de pasado que debes memorizar. Son muy comunes en inglés.",
        keyPoints: [
          "Verbos comunes: go → went, see → saw, eat → ate, have → had, do → did",
          "Más verbos: come → came, take → took, make → made, get → got, give → gave",
          "El verbo 'be': I/he/she/it was, we/you/they were",
          "Negativo y pregunta: igual que regulares: 'Did you go?', 'I didn't go'",
          "¡IMPORTANTE! Después de 'did/didn't', el verbo vuelve a su forma base"
        ],
        examples: [
          { english: "I went to the beach last weekend.", spanish: "Fui a la playa el fin de semana pasado.", explanation: "go → went" },
          { english: "She saw a great movie yesterday.", spanish: "Ella vio una gran película ayer.", explanation: "see → saw" },
          { english: "We were tired after the trip.", spanish: "Estábamos cansados después del viaje.", explanation: "be → were" }
        ],
        tips: [
          "💡 Los verbos más usados son irregulares - memorízalos con flashcards",
          "💡 'Read' se escribe igual pero se pronuncia diferente: /riːd/ (presente) vs /red/ (pasado)",
          "💡 Algunos no cambian: put → put, cut → cut, cost → cost"
        ],
        whenToUse: [
          "Al narrar experiencias: 'I went to the beach', 'She saw a movie'",
          "Al hablar de posesión pasada: 'I had a great time', 'We had dinner'",
          "Al describir estados pasados: 'I was tired', 'They were happy'",
          "En conversaciones sobre el fin de semana: 'What did you do?', 'I ate pizza'"
        ],
        whenNotToUse: [
          "Después de 'did/didn't' → usa forma base: 'Did you go?' (NO 'Did you went?')",
          "No mezcles was/were con otro verbo en pasado: 'She went' (NO 'She was go')"
        ]
      },
      objectives: ["Aprender verbos irregulares comunes", "Usar el verbo 'be' en pasado", "Formar oraciones con verbos irregulares"],
      estimatedMinutes: 30,
      vocabulary: {
        nouns: [],
        verbs: [
          { id: "l3t3_v1", word: "went", translation: "fui/fue", type: "verb", definition: "past of go", definitionEs: "pasado de ir", example: "I went to school by bus.", exampleEs: "Fui a la escuela en autobús.", related: ["go"], difficulty: 1 },
          { id: "l3t3_v2", word: "saw", translation: "vi/vio", type: "verb", definition: "past of see", definitionEs: "pasado de ver", example: "I saw him at the party.", exampleEs: "Lo vi en la fiesta.", related: ["see"], difficulty: 1 },
          { id: "l3t3_v3", word: "ate", translation: "comí/comió", type: "verb", definition: "past of eat", definitionEs: "pasado de comer", example: "We ate pizza for dinner.", exampleEs: "Comimos pizza para cenar.", related: ["eat"], difficulty: 1 },
          { id: "l3t3_v4", word: "had", translation: "tuve/tuvo", type: "verb", definition: "past of have", definitionEs: "pasado de tener", example: "She had a great time.", exampleEs: "Ella la pasó muy bien.", related: ["have"], difficulty: 1 },
          { id: "l3t3_v5", word: "came", translation: "vine/vino", type: "verb", definition: "past of come", definitionEs: "pasado de venir", example: "He came to my house.", exampleEs: "Él vino a mi casa.", related: ["come"], difficulty: 1 },
          { id: "l3t3_v6", word: "took", translation: "tomé/tomó", type: "verb", definition: "past of take", definitionEs: "pasado de tomar", example: "I took the bus to work.", exampleEs: "Tomé el autobús al trabajo.", related: ["take"], difficulty: 1 },
          { id: "l3t3_v7", word: "made", translation: "hice/hizo", type: "verb", definition: "past of make", definitionEs: "pasado de hacer", example: "She made a delicious cake.", exampleEs: "Ella hizo un pastel delicioso.", related: ["make"], difficulty: 1 },
          { id: "l3t3_v8", word: "got", translation: "conseguí/consiguió", type: "verb", definition: "past of get", definitionEs: "pasado de conseguir/obtener", example: "I got a new job.", exampleEs: "Conseguí un nuevo trabajo.", related: ["get"], difficulty: 1 },
          { id: "l3t3_v9", word: "gave", translation: "di/dio", type: "verb", definition: "past of give", definitionEs: "pasado de dar", example: "He gave me a present.", exampleEs: "Él me dio un regalo.", related: ["give"], difficulty: 1 },
          { id: "l3t3_v10", word: "was/were", translation: "era/estaba/fueron", type: "verb", definition: "past of be", definitionEs: "pasado de ser/estar", example: "I was tired. They were happy.", exampleEs: "Estaba cansado. Ellos estaban felices.", related: ["be"], difficulty: 1 },
          { id: "l3t3_v11", word: "bought", translation: "compré/compró", type: "verb", definition: "past of buy", definitionEs: "pasado de comprar", example: "I bought a new phone.", exampleEs: "Compré un teléfono nuevo.", related: ["buy"], difficulty: 1 },
          { id: "l3t3_v12", word: "thought", translation: "pensé/pensó", type: "verb", definition: "past of think", definitionEs: "pasado de pensar", example: "I thought it was interesting.", exampleEs: "Pensé que era interesante.", related: ["think"], difficulty: 1 },
        ],
        adjectives: [],
        expressions: [
          { id: "l3t3_e1", word: "What happened?", translation: "¿Qué pasó?", type: "expression", definition: "asking about a past event", definitionEs: "preguntando sobre un evento pasado", example: "What happened at the meeting?", exampleEs: "¿Qué pasó en la reunión?", related: [], difficulty: 1 },
          { id: "l3t3_e2", word: "How was...?", translation: "¿Cómo estuvo...?", type: "expression", definition: "asking about a past experience", definitionEs: "preguntando sobre una experiencia pasada", example: "How was your weekend?", exampleEs: "¿Cómo estuvo tu fin de semana?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l3t3_cm1",
          wrong: "I didn't went to the party.",
          correct: "I didn't go to the party.",
          explanation: "After 'didn't', the verb always goes in BASE form, not past tense. 'Didn't' already indicates past.",
          explanationEs: "Después de 'didn't', el verbo siempre va en forma BASE, no en pasado. El 'didn't' ya indica pasado.",
          category: "grammar"
        },
        {
          id: "l3t3_cm2",
          wrong: "Did you went shopping?",
          correct: "Did you go shopping?",
          explanation: "In questions with 'did', the main verb always goes in BASE form.",
          explanationEs: "En preguntas con 'did', el verbo principal siempre va en forma BASE.",
          category: "grammar"
        },
        {
          id: "l3t3_cm3",
          wrong: "She was go to the store.",
          correct: "She went to the store. / She was going to the store.",
          explanation: "Don't mix 'was/were' with another verb in past tense. Use only 'went' or use 'was going' (past continuous).",
          explanationEs: "No mezcles 'was/were' con otro verbo en pasado. Usa solo 'went' o usa 'was going' (pasado continuo).",
          category: "grammar"
        },
        {
          id: "l3t3_cm4",
          wrong: "We was happy yesterday.",
          correct: "We were happy yesterday.",
          explanation: "'Was' is used with I/he/she/it. 'Were' is used with we/you/they.",
          explanationEs: "'Was' se usa con I/he/she/it. 'Were' se usa con we/you/they.",
          category: "grammar"
        },
        {
          id: "l3t3_cm5",
          wrong: "He gived me a present.",
          correct: "He gave me a present.",
          explanation: "'Give' is irregular. The past tense is 'gave', not 'gived'.",
          explanationEs: "'Give' es irregular. El pasado es 'gave', no 'gived'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con la forma correcta del verbo irregular:",
          items: [
            { sentence: "She ___ (go) to Paris last summer.", answer: "went", hint: "go → went" },
            { sentence: "I ___ (see) a great movie yesterday.", answer: "saw", hint: "see → saw" },
            { sentence: "We ___ (have) dinner at 8 PM.", answer: "had", hint: "have → had" },
            { sentence: "They ___ (buy) a new car last month.", answer: "bought", hint: "buy → bought" },
            { sentence: "He ___ (make) a mistake.", answer: "made", hint: "make → made" }
          ]
        },
        {
          type: "matching",
          instruction: "Une cada verbo base con su forma pasada:",
          pairs: [
            { term: "go", match: "went" },
            { term: "see", match: "saw" },
            { term: "eat", match: "ate" },
            { term: "take", match: "took" },
            { term: "give", match: "gave" },
            { term: "buy", match: "bought" },
            { term: "think", match: "thought" },
            { term: "come", match: "came" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma las oraciones usando el verbo entre paréntesis:",
          items: [
            { original: "I ___ to the beach. (go - afirmativo)", answer: "I went to the beach.", type: "afirmativo" },
            { original: "___ you ___ the movie? (see - pregunta)", answer: "Did you see the movie?", type: "pregunta" },
            { original: "She ___ ___ breakfast. (have - negativo)", answer: "She didn't have breakfast.", type: "negativo" },
            { original: "They ___ tired after work. (be - afirmativo)", answer: "They were tired after work.", type: "afirmativo" },
            { original: "___ he ___ you a gift? (give - pregunta)", answer: "Did he give you a gift?", type: "pregunta" }
          ]
        },
        {
          type: "was-were",
          instruction: "Completa con 'was' o 'were':",
          items: [
            { sentence: "I ___ at home yesterday.", answer: "was", hint: "I = singular" },
            { sentence: "They ___ very happy.", answer: "were", hint: "they = plural" },
            { sentence: "She ___ a good student.", answer: "was", hint: "she = singular" },
            { sentence: "We ___ late for the meeting.", answer: "were", hint: "we = plural" },
            { sentence: "It ___ a beautiful day.", answer: "was", hint: "it = singular" },
            { sentence: "You ___ right about that.", answer: "were", hint: "you = siempre were" }
          ]
        }
      ],
      modelDialogue: {
        title: "Contando sobre un viaje pasado",
        dialogue: [
          { speaker: "Anna", text: "How was your trip to Italy?", translation: "¿Cómo estuvo tu viaje a Italia?" },
          { speaker: "Mike", text: "It was amazing! I had such a great time.", translation: "¡Estuvo increíble! La pasé muy bien." },
          { speaker: "Anna", text: "Where did you go?", translation: "¿A dónde fuiste?" },
          { speaker: "Mike", text: "I went to Rome, Florence, and Venice. Each city was beautiful.", translation: "Fui a Roma, Florencia y Venecia. Cada ciudad era hermosa." },
          { speaker: "Anna", text: "What did you see in Rome?", translation: "¿Qué viste en Roma?" },
          { speaker: "Mike", text: "I saw the Colosseum and the Vatican. I took so many photos!", translation: "Vi el Coliseo y el Vaticano. ¡Tomé tantas fotos!" },
          { speaker: "Anna", text: "Did you eat good food?", translation: "¿Comiste buena comida?" },
          { speaker: "Mike", text: "Oh yes! I ate pizza and pasta every day. I even made fresh pasta in a cooking class!", translation: "¡Oh sí! Comí pizza y pasta todos los días. ¡Incluso hice pasta fresca en una clase de cocina!" },
          { speaker: "Anna", text: "That sounds wonderful! How long were you there?", translation: "¡Eso suena maravilloso! ¿Cuánto tiempo estuviste allí?" },
          { speaker: "Mike", text: "I was there for ten days. It wasn't long enough!", translation: "Estuve allí por diez días. ¡No fue suficiente tiempo!" }
        ],
        keyPhrases: [
          "How was your trip?",
          "I had such a great time",
          "Where did you go?",
          "What did you see?",
          "Did you eat good food?",
          "How long were you there?"
        ]
      },
      pronunciationFocus: {
        title: "Pronunciación de verbos irregulares comunes",
        sounds: [
          { sound: "/eɪt/", word: "ate", tip: "Una sola sílaba, rima con 'eight'", tipEs: "No digas 'eiti' - es un solo sonido" },
          { sound: "/θɔːt/", word: "thought", tip: "El grupo 'ough' suena /ɔː/", tipEs: "Parecido a 'sport' pero con th" },
          { sound: "/red/", word: "read (pasado)", tip: "Se escribe igual que presente pero suena diferente", tipEs: "read pasado = /red/ como el color" }
        ],
        minimalPairs: [
          { word1: "read (presente)", word2: "read (pasado)", explanation: "read /riːd/ vs read /red/ - misma ortografía, diferente pronunciación" },
          { word1: "saw", word2: "so", explanation: "saw /sɔː/ = vi; so /səʊ/ = así. La vocal cambia el significado." }
        ],
        intonation: [
          { pattern: "Rising for 'Did you...?' questions", example: "Did you go to the party?↗", tip: "Sube la voz al final en preguntas sobre el pasado", tipEs: "La entonación ascendente indica pregunta abierta" }
        ],
        commonErrors: [
          { word: "ate", wrong: "/eɪ-ti/", right: "/eɪt/", note: "Una sola sílaba, rima con 'eight'" },
          { word: "said", wrong: "/seɪd/", right: "/sed/", note: "Suena como 'sed', no como 'seid'" },
          { word: "heard", wrong: "/hi-erd/", right: "/hɜːd/", note: "Suena como 'herd' (rebaño)" }
        ]
      },
      culturalNote: {
        title: "Contando historias en inglés",
        titleEs: "Contando historias en inglés",
        content: "Los angloparlantes adoran contar historias sobre sus experiencias. Usan muchos verbos irregulares naturalmente porque son los más comunes. Cuando cuentes una historia, añade detalles: no solo 'I went to Italy' sino 'I went to Italy last summer with my best friend.' Los estadounidenses tienden a ser más expresivos ('It was incredible!'), mientras que los británicos pueden ser más reservados ('It was quite nice').",
        contentEs: "Añade detalles al contar historias. Los estadounidenses son más expresivos, los británicos más reservados.",
        region: "General",
        examples: [
          "Añadir emoción: 'I had the best time of my life!'",
          "Secuencia: 'First I went to Rome, then I took a train to Florence.'",
          "Detalles sensoriales: 'The food was delicious. I ate the best pizza I ever had.'"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es el pasado de 'go'?",
          questionEs: "¿Cuál es el pasado de 'go'?",
          options: ["goed", "went", "gone", "going"],
          correctAnswer: 1,
          explanation: "'Go' es irregular. El pasado es 'went', no 'goed'.",
          explanationEs: "'Go' es irregular. El pasado es 'went', no 'goed'."
        },
        {
          question: "Completa: 'She ___ a beautiful dress at the store.'",
          questionEs: "Completa: 'She ___ a beautiful dress at the store.'",
          options: ["buyed", "bought", "boughted", "buying"],
          correctAnswer: 1,
          explanation: "'Buy' es irregular. El pasado es 'bought'.",
          explanationEs: "'Buy' es irregular. El pasado es 'bought'."
        },
        {
          question: "¿Cuál oración es correcta?",
          questionEs: "¿Cuál oración es correcta?",
          options: ["Did you saw the movie?", "Did you see the movie?", "Do you saw the movie?", "Did you seen the movie?"],
          correctAnswer: 1,
          explanation: "Después de 'did', usamos la forma base: 'see', no 'saw'.",
          explanationEs: "Después de 'did', usamos la forma base: 'see', no 'saw'."
        },
        {
          question: "Completa: 'They ___ very tired after the long trip.'",
          questionEs: "Completa: 'They ___ very tired after the long trip.'",
          options: ["was", "were", "be", "been"],
          correctAnswer: 1,
          explanation: "Con 'they' usamos 'were', no 'was'.",
          explanationEs: "Con 'they' usamos 'were', no 'was'."
        },
        {
          question: "¿Cuál es el pasado de 'think'?",
          questionEs: "¿Cuál es el pasado de 'think'?",
          options: ["thinked", "thought", "thinkt", "thank"],
          correctAnswer: 1,
          explanation: "'Think' es irregular. El pasado es 'thought'.",
          explanationEs: "'Think' es irregular. El pasado es 'thought'."
        }
      ],
      guidedProduction: [
        {
          task: "Cuenta sobre tu último fin de semana",
          prompt: "Usa al menos 5 verbos irregulares para describir tu último fin de semana.",
          promptEs: "Usa al menos 5 verbos irregulares para describir tu último fin de semana.",
          sampleAnswer: "Last weekend was great! On Saturday, I went to the park with friends. We ate lunch at a restaurant and had a wonderful time. I saw an old friend there. On Sunday, I made breakfast at home and thought about my plans for the week.",
          hints: ["Usa went, ate, had, saw, made", "Incluye detalles", "Describe ambos días"]
        },
        {
          task: "Hacer preguntas sobre una experiencia",
          prompt: "Tu amigo fue a una fiesta. Hazle 5 preguntas usando verbos irregulares.",
          promptEs: "Tu amigo fue a una fiesta. Hazle 5 preguntas usando verbos irregulares.",
          sampleAnswer: "How was the party? Who did you see there? What did you eat? Did you have fun? What time did you come home?",
          hints: ["Usa How was...?", "Pregunta con Did you...?", "Pregunta detalles específicos"]
        },
        {
          task: "Narrar con was/were",
          prompt: "Describe cómo era tu vida hace 5 años usando was/were.",
          promptEs: "Describe cómo era tu vida hace 5 años usando was/were.",
          sampleAnswer: "Five years ago, I was a student. My classes were difficult but interesting. My best friend was in the same class. We were always together. My schedule was very busy.",
          hints: ["Usa was para singular", "Usa were para plural/you", "Describe varias cosas"]
        },
        {
          task: "Contrastar antes y ahora",
          prompt: "Compara algo que hiciste en el pasado con lo que haces ahora.",
          promptEs: "Compara algo que hiciste en el pasado con lo que haces ahora.",
          sampleAnswer: "When I was a child, I ate a lot of candy. Now I eat more vegetables. I went to school by bus, but now I drive to work. I had more free time, but now I have more responsibilities.",
          hints: ["Usa verbos irregulares en pasado", "Contrasta con presente", "Usa 'When I was...'"]
        }
      ],
      connectionToPrevious: "En la lección anterior aprendiste verbos regulares con -ed. Ahora conoces los verbos irregulares más comunes. Ambos usan 'did' para preguntas y 'didn't' para negativos.",
      connectionToNext: "En las siguientes lecciones usarás el pasado simple (regular e irregular) para hablar de experiencias en el hotel, restaurantes y más situaciones de viaje.",
      grammarTheoryIds: ['a2-past-simple', 'a2-question-formation']
    },
    {
      id: 4,
      title: "At the Hotel",
      titleEs: "En el Hotel",
      introduction: {
        title: "🏨 En el Hotel",
        explanation: "Saber comunicarte en un hotel es esencial para cualquier viajero. Aprenderás a hacer reservaciones, pedir servicios y resolver problemas comunes.",
        keyPoints: [
          "Tipos de habitación: single room (individual), double room (doble), suite, twin room (dos camas)",
          "Servicios: room service, laundry (lavandería), Wi-Fi, breakfast included",
          "Check-in: 'I have a reservation', 'What time is check-out?', 'Can I have a wake-up call?'",
          "Problemas: 'The AC isn't working', 'There's no hot water', 'I need more towels'"
        ],
        examples: [
          { english: "I have a reservation under the name Smith.", spanish: "Tengo una reservación a nombre de Smith.", explanation: "Check-in" },
          { english: "Could I have a room with a view?", spanish: "¿Podría tener una habitación con vista?", explanation: "Petición educada" },
          { english: "The air conditioning isn't working.", spanish: "El aire acondicionado no funciona.", explanation: "Reportando un problema" }
        ],
        tips: [
          "💡 'Ground floor' (UK) = 'First floor' (US) - el piso de entrada",
          "💡 'En suite' significa que el baño está dentro de la habitación",
          "💡 'Complimentary' significa gratis/incluido: 'complimentary breakfast'"
        ],
        whenToUse: [
          "Al hacer check-in: 'I have a reservation under the name...'",
          "Al pedir servicios: 'Could I have extra towels?', 'Can I get a wake-up call?'",
          "Al reportar problemas: 'The AC isn't working', 'There's no hot water'",
          "Al hacer check-out: 'I'd like to check out', 'Can I have the bill?'"
        ],
        whenNotToUse: [
          "No uses 'I stay in this hotel' → 'I'm staying at this hotel' (presente continuo para estancia actual)",
          "No digas 'informations' → 'information' es incontable"
        ]
      },
      objectives: ["Hacer reservaciones de hotel", "Pedir servicios", "Resolver problemas en el hotel"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l3t4_n1", word: "reception", translation: "recepción", type: "noun", definition: "the desk where guests check in", definitionEs: "el escritorio donde los huéspedes se registran", example: "Please go to reception.", exampleEs: "Por favor vaya a recepción.", related: ["receptionist"], difficulty: 1 },
          { id: "l3t4_n2", word: "key card", translation: "tarjeta llave", type: "noun", definition: "a card that opens your room", definitionEs: "una tarjeta que abre tu habitación", example: "Here is your key card.", exampleEs: "Aquí está su tarjeta llave.", related: ["key"], difficulty: 1 },
          { id: "l3t4_n3", word: "elevator", translation: "ascensor", type: "noun", definition: "a machine that takes you to different floors", definitionEs: "una máquina que te lleva a diferentes pisos", example: "Take the elevator to the third floor.", exampleEs: "Tome el ascensor al tercer piso.", related: ["lift"], difficulty: 1 },
          { id: "l3t4_n4", word: "towel", translation: "toalla", type: "noun", definition: "cloth for drying yourself", definitionEs: "tela para secarse", example: "I need more towels, please.", exampleEs: "Necesito más toallas, por favor.", related: [], difficulty: 1 },
          { id: "l3t4_n5", word: "pillow", translation: "almohada", type: "noun", definition: "soft support for your head in bed", definitionEs: "soporte suave para la cabeza en la cama", example: "Can I have an extra pillow?", exampleEs: "¿Puedo tener una almohada extra?", related: [], difficulty: 1 },
          { id: "l3t4_n6", word: "bill", translation: "cuenta", type: "noun", definition: "the paper showing how much you owe", definitionEs: "el papel que muestra cuánto debes", example: "Can I have the bill, please?", exampleEs: "¿Me puede dar la cuenta, por favor?", related: ["invoice"], difficulty: 1 },
          { id: "l3t4_n7", word: "guest", translation: "huésped", type: "noun", definition: "a person staying at a hotel", definitionEs: "una persona hospedada en un hotel", example: "Guests can use the pool.", exampleEs: "Los huéspedes pueden usar la piscina.", related: [], difficulty: 1 },
          { id: "l3t4_n8", word: "floor", translation: "piso", type: "noun", definition: "a level of a building", definitionEs: "un nivel de un edificio", example: "Your room is on the fifth floor.", exampleEs: "Su habitación está en el quinto piso.", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l3t4_v1", word: "check out", translation: "hacer check-out", type: "verb", definition: "to leave a hotel and pay", definitionEs: "dejar un hotel y pagar", example: "I'd like to check out, please.", exampleEs: "Me gustaría hacer check-out, por favor.", related: ["check in"], difficulty: 1 },
          { id: "l3t4_v2", word: "confirm", translation: "confirmar", type: "verb", definition: "to say something is correct", definitionEs: "decir que algo es correcto", example: "I'd like to confirm my reservation.", exampleEs: "Me gustaría confirmar mi reservación.", related: ["confirmation"], difficulty: 1 },
          { id: "l3t4_v3", word: "request", translation: "solicitar", type: "verb", definition: "to ask for something", definitionEs: "pedir algo", example: "I'd like to request a late check-out.", exampleEs: "Me gustaría solicitar un check-out tardío.", related: [], difficulty: 2 },
          { id: "l3t4_v4", word: "complain", translation: "quejarse", type: "verb", definition: "to say you are not happy about something", definitionEs: "decir que no estás contento con algo", example: "I need to complain about the noise.", exampleEs: "Necesito quejarme del ruido.", related: ["complaint"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l3t4_a1", word: "comfortable", translation: "cómodo", type: "adjective", definition: "giving physical ease", definitionEs: "que da comodidad física", example: "The bed is very comfortable.", exampleEs: "La cama es muy cómoda.", related: ["comfort"], difficulty: 1 },
          { id: "l3t4_a2", word: "noisy", translation: "ruidoso", type: "adjective", definition: "making a lot of noise", definitionEs: "que hace mucho ruido", example: "The room is too noisy.", exampleEs: "La habitación es muy ruidosa.", related: ["noise"], difficulty: 1 },
        ],
        expressions: [
          { id: "l3t4_e1", word: "I have a reservation", translation: "Tengo una reservación", type: "expression", definition: "saying you have booked", definitionEs: "diciendo que has reservado", example: "I have a reservation for tonight.", exampleEs: "Tengo una reservación para esta noche.", related: [], difficulty: 1 },
          { id: "l3t4_e2", word: "What time is check-out?", translation: "¿A qué hora es el check-out?", type: "expression", definition: "asking about departure time", definitionEs: "preguntando sobre la hora de salida", example: "What time is check-out tomorrow?", exampleEs: "¿A qué hora es el check-out mañana?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l3t4_cm1",
          wrong: "I have a room reservation to the name of Smith.",
          correct: "I have a reservation under the name Smith.",
          explanation: "We use 'under the name' or 'in the name of', not 'to the name of'.",
          explanationEs: "Usamos 'under the name' o 'in the name of', no 'to the name of'.",
          category: "usage"
        },
        {
          id: "l3t4_cm2",
          wrong: "I want a room with a bath included.",
          correct: "I want a room with a private bathroom. / I want an en suite room.",
          explanation: "'En suite' means the bathroom is inside the room. 'Bath' only means the bathtub.",
          explanationEs: "'En suite' significa que el baño está dentro de la habitación. 'Bath' solo es la bañera.",
          category: "vocabulary"
        },
        {
          id: "l3t4_cm3",
          wrong: "The air condition doesn't work.",
          correct: "The air conditioning doesn't work.",
          explanation: "It's 'air conditioning' (noun), not 'air condition'. You can also say 'AC'.",
          explanationEs: "Es 'air conditioning' (sustantivo), no 'air condition'. También se puede decir 'AC'.",
          category: "vocabulary"
        },
        {
          id: "l3t4_cm4",
          wrong: "I stay in this hotel.",
          correct: "I'm staying at this hotel.",
          explanation: "We use 'at' with hotels, and the present continuous for current temporary actions.",
          explanationEs: "Usamos 'at' con hoteles, y el presente continuo para acciones temporales actuales.",
          category: "grammar"
        },
        {
          id: "l3t4_cm5",
          wrong: "Can I have informations about the hotel?",
          correct: "Can I have information about the hotel?",
          explanation: "'Information' is uncountable in English; it has no plural form.",
          explanationEs: "'Information' es incontable en inglés, no tiene forma plural.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las oraciones con la palabra correcta:",
          items: [
            { sentence: "I have a ___ under the name Johnson.", answer: "reservation", hint: "reservación" },
            { sentence: "Could I have an extra ___ for the bed?", answer: "pillow", hint: "para la cabeza" },
            { sentence: "What time is ___-out tomorrow?", answer: "check", hint: "salir del hotel" },
            { sentence: "The ___ conditioning isn't working.", answer: "air", hint: "AC" },
            { sentence: "Take the ___ to the fifth floor.", answer: "elevator", hint: "lift en UK" }
          ]
        },
        {
          type: "matching",
          instruction: "Une el problema con la solución apropiada:",
          pairs: [
            { term: "The room is too noisy", match: "Could I change to a quieter room?" },
            { term: "I need more towels", match: "Could you send some to my room?" },
            { term: "The AC isn't working", match: "Could someone come and fix it?" },
            { term: "I lost my key card", match: "Could I get a replacement?" },
            { term: "I want to stay longer", match: "Can I extend my reservation?" }
          ]
        },
        {
          type: "dialogue-completion",
          instruction: "Completa el diálogo de check-in:",
          items: [
            { prompt: "Receptionist: Good afternoon. How can I help you?", response: "Hello, I have a reservation for tonight.", hint: "Di que tienes reservación" },
            { prompt: "Receptionist: What name is it under?", response: "It's under [your name].", hint: "Di tu nombre" },
            { prompt: "Receptionist: Would you like a room with a view?", response: "Yes, please. That would be lovely.", hint: "Acepta la oferta" },
            { prompt: "Receptionist: Here's your key card. Your room is 405.", response: "Thank you. What time is check-out?", hint: "Pregunta la hora de salida" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en estas oraciones:",
          items: [
            { incorrect: "Where is the lift? I'm on the ground floor.", correct: "Where is the elevator? (US) / Where is the lift? (UK)", hint: "elevator (US) = lift (UK)" },
            { incorrect: "I want make a complaint.", correct: "I want to make a complaint.", hint: "want + to + verbo" },
            { incorrect: "The room is in the second floor.", correct: "The room is on the second floor.", hint: "ON the floor, no IN" },
            { incorrect: "Can I have the bill of my room?", correct: "Can I have the bill for my room?", hint: "bill FOR, no bill OF" }
          ]
        }
      ],
      modelDialogue: {
        title: "Resolviendo un problema en el hotel",
        dialogue: [
          { speaker: "Guest", text: "Excuse me, I'm having a problem with my room.", translation: "Disculpe, estoy teniendo un problema con mi habitación." },
          { speaker: "Receptionist", text: "I'm sorry to hear that. What seems to be the problem?", translation: "Lamento escuchar eso. ¿Cuál parece ser el problema?" },
          { speaker: "Guest", text: "The air conditioning isn't working and it's very hot.", translation: "El aire acondicionado no funciona y hace mucho calor." },
          { speaker: "Receptionist", text: "I apologize for the inconvenience. I'll send maintenance right away.", translation: "Me disculpo por el inconveniente. Enviaré mantenimiento inmediatamente." },
          { speaker: "Guest", text: "Thank you. Also, could I get some extra towels, please?", translation: "Gracias. Además, ¿podría conseguir algunas toallas extra, por favor?" },
          { speaker: "Receptionist", text: "Of course. I'll have housekeeping bring them to your room.", translation: "Por supuesto. Haré que limpieza las lleve a su habitación." },
          { speaker: "Guest", text: "One more thing - what time does the restaurant close?", translation: "Una cosa más - ¿a qué hora cierra el restaurante?" },
          { speaker: "Receptionist", text: "The restaurant closes at 10 PM, but room service is available 24 hours.", translation: "El restaurante cierra a las 10 PM, pero el servicio a la habitación está disponible 24 horas." },
          { speaker: "Guest", text: "That's great. Thank you for your help.", translation: "Eso es genial. Gracias por su ayuda." },
          { speaker: "Receptionist", text: "You're welcome. Please let us know if you need anything else.", translation: "De nada. Por favor háganos saber si necesita algo más." }
        ],
        keyPhrases: [
          "I'm having a problem with my room",
          "The air conditioning isn't working",
          "I apologize for the inconvenience",
          "Could I get some extra towels?",
          "Room service is available 24 hours"
        ]
      },
      pronunciationFocus: {
        title: "Vocabulario de hotel",
        sounds: [
          { sound: "/ʃ/", word: "reservation", tip: "El sonido 'sh' en -tion", tipEs: "Como 'sh' en 'show'" },
          { sound: "/swiːt/", word: "suite", tip: "Se pronuncia como 'sweet'", tipEs: "La 'u' y 'i' forman un solo sonido" },
          { sound: "/ˈkʌmf.tə.bəl/", word: "comfortable", tip: "3 sílabas, no 4", tipEs: "No digas 'com-for-TA-ble'" }
        ],
        minimalPairs: [
          { word1: "suite", word2: "suit", explanation: "suite /swiːt/ = habitación; suit /suːt/ = traje. Diferente vocal." },
          { word1: "floor", word2: "flour", explanation: "floor /flɔː/ = piso; flour /ˈflaʊə/ = harina. Misma ortografía inicial, diferente pronunciación." }
        ],
        intonation: [
          { pattern: "Polite requests with rising tone", example: "Could I have an extra towel, please?↗", tip: "Peticiones educadas suben suavemente al final", tipEs: "La entonación ascendente suena más cortés" }
        ],
        commonErrors: [
          { word: "comfortable", wrong: "/kom-for-TA-ble/", right: "/ˈkʌmf.tə.bəl/", note: "3 sílabas, no 4" },
          { word: "suite", wrong: "/su-it/", right: "/swiːt/", note: "Se pronuncia como 'sweet'" },
          { word: "concierge", wrong: "/kon-si-erj/", right: "/ˌkɒn.siˈeəʒ/", note: "Palabra francesa, la 'g' suena como 'zh'" }
        ]
      },
      culturalNote: {
        title: "Cultura hotelera en países angloparlantes",
        titleEs: "Cultura hotelera en países angloparlantes",
        content: "En hoteles de EE.UU. y UK, es común dejar propina a las personas que llevan tus maletas ($1-2 por maleta) y al servicio de limpieza ($2-5 por noche). El 'ground floor' en UK es el piso de entrada, pero en US el 'first floor' es el piso de entrada. Los hoteles estadounidenses suelen ofrecer hielo gratis (ice machine en cada piso), mientras que en Europa es menos común. El desayuno 'continental' es ligero (pan, café), mientras que el 'American breakfast' es completo.",
        contentEs: "Propina para maleteros ($1-2) y limpieza ($2-5/noche). UK: ground floor = entrada. US: first floor = entrada.",
        region: "General",
        examples: [
          "🇺🇸 US: 'First floor' = piso de entrada",
          "🇬🇧 UK: 'Ground floor' = piso de entrada, 'First floor' = un nivel arriba",
          "Propina para bellboy: $1-2 por maleta",
          "El 'complimentary breakfast' está incluido en el precio"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cómo se dice 'Tengo una reservación' en inglés?",
          questionEs: "¿Cómo se dice 'Tengo una reservación' en inglés?",
          options: ["I have a reserve", "I have a reservation", "I have reserved", "I am reservation"],
          correctAnswer: 1,
          explanation: "'I have a reservation' es la forma correcta de indicar que has reservado.",
          explanationEs: "'I have a reservation' es la forma correcta de indicar que has reservado."
        },
        {
          question: "¿Qué preposición usamos con pisos del edificio?",
          questionEs: "¿Qué preposición usamos con pisos del edificio?",
          options: ["in the third floor", "on the third floor", "at the third floor", "to the third floor"],
          correctAnswer: 1,
          explanation: "Usamos 'ON the floor', no 'in' o 'at'.",
          explanationEs: "Usamos 'ON the floor', no 'in' o 'at'."
        },
        {
          question: "'En suite bathroom' significa:",
          questionEs: "'En suite bathroom' significa:",
          options: ["baño compartido", "baño en el pasillo", "baño dentro de la habitación", "baño con bañera"],
          correctAnswer: 2,
          explanation: "'En suite' significa que el baño está dentro de la habitación, privado.",
          explanationEs: "'En suite' significa que el baño está dentro de la habitación, privado."
        },
        {
          question: "¿Cuál es la forma correcta de reportar un problema?",
          questionEs: "¿Cuál es la forma correcta de reportar un problema?",
          options: ["The AC doesn't works", "The AC isn't working", "The AC no work", "The AC not working"],
          correctAnswer: 1,
          explanation: "Usamos presente continuo: 'The AC isn't working'.",
          explanationEs: "Usamos presente continuo: 'The AC isn't working'."
        },
        {
          question: "'Complimentary breakfast' significa:",
          questionEs: "'Complimentary breakfast' significa:",
          options: ["desayuno delicioso", "desayuno completo", "desayuno incluido/gratis", "desayuno complementario"],
          correctAnswer: 2,
          explanation: "'Complimentary' significa incluido en el precio o gratis.",
          explanationEs: "'Complimentary' significa incluido en el precio o gratis."
        }
      ],
      guidedProduction: [
        {
          task: "Hacer check-in",
          prompt: "Llegas al hotel. Saluda y di que tienes una reservación a tu nombre.",
          promptEs: "Llegas al hotel. Saluda y di que tienes una reservación a tu nombre.",
          sampleAnswer: "Good afternoon. I have a reservation under the name García for two nights. Could I also have a room on a higher floor, please?",
          hints: ["Saluda primero", "Usa 'under the name'", "Añade una preferencia"]
        },
        {
          task: "Reportar un problema",
          prompt: "El agua caliente de tu habitación no funciona. Llama a recepción para quejarte.",
          promptEs: "El agua caliente de tu habitación no funciona. Llama a recepción para quejarte.",
          sampleAnswer: "Hello, this is room 302. I'm having a problem with the hot water - there isn't any. Could someone come and look at it, please?",
          hints: ["Di tu número de habitación", "Explica el problema claramente", "Pide ayuda educadamente"]
        },
        {
          task: "Pedir servicios adicionales",
          prompt: "Necesitas toallas extra y quieres saber si hay Wi-Fi gratis.",
          promptEs: "Necesitas toallas extra y quieres saber si hay Wi-Fi gratis.",
          sampleAnswer: "Excuse me, could I have some extra towels sent to my room, please? Also, is the Wi-Fi complimentary, and what's the password?",
          hints: ["Usa 'could I have'", "Combina dos peticiones", "Pregunta por el password"]
        },
        {
          task: "Hacer check-out",
          prompt: "Es hora de salir del hotel. Pide la cuenta y pregunta si puedes dejar el equipaje.",
          promptEs: "Es hora de salir del hotel. Pide la cuenta y pregunta si puedes dejar el equipaje.",
          sampleAnswer: "I'd like to check out, please. Can I have the bill? Also, my flight isn't until this evening - is it possible to leave my luggage here for a few hours?",
          hints: ["Di que quieres hacer check-out", "Pide la cuenta", "Pregunta sobre el equipaje"]
        }
      ],
      connectionToPrevious: "En Task 1 aprendiste vocabulario de viajes y aeropuerto. Ahora que llegaste a tu destino, necesitas comunicarte en el hotel usando expresiones similares ('I have a reservation', 'I'd like...').",
      connectionToNext: "En la siguiente lección aprenderás a pedir comida en restaurantes, usando estructuras similares como 'I'd like...', 'Could I have...?' que también usaste en el hotel.",
      grammarTheoryIds: ['a2-there-was-were', 'a2-can-could-modals', 'a2-question-formation']
    },
    {
      id: 5,
      title: "At the Restaurant",
      titleEs: "En el Restaurante",
      introduction: {
        title: "🍽️ En el Restaurante",
        explanation: "Comer fuera es una experiencia social importante. Aprenderás a pedir comida, hacer preguntas sobre el menú y manejar situaciones comunes en restaurantes.",
        keyPoints: [
          "Para pedir: 'I'd like...', 'I'll have...', 'Can I get...?'",
          "Preguntas útiles: 'What do you recommend?', 'Does this contain...?', 'Is this spicy?'",
          "Pagar: 'Can I have the bill?', 'Do you accept credit cards?', 'Keep the change'",
          "Problemas: 'This isn't what I ordered', 'Could I change my order?'"
        ],
        examples: [
          { english: "I'll have the steak, please.", spanish: "Voy a pedir el bistec, por favor.", explanation: "Haciendo un pedido" },
          { english: "What do you recommend?", spanish: "¿Qué recomienda?", explanation: "Pidiendo sugerencia" },
          { english: "Could we have separate bills?", spanish: "¿Podríamos tener cuentas separadas?", explanation: "Al pagar" }
        ],
        tips: [
          "💡 'Starter' (UK) = 'Appetizer' (US) = entrada",
          "💡 'Main course' = plato principal, 'Side dish' = acompañamiento",
          "💡 En USA la propina (tip) es 15-20%, en otros países varía"
        ],
        whenToUse: [
          "Al ordenar comida: 'I'd like...', 'I'll have the...'",
          "Al pedir recomendaciones: 'What do you recommend?'",
          "Al preguntar sobre ingredientes: 'Does this contain...?', 'I'm allergic to...'",
          "Al pagar: 'Can I have the bill?', 'Keep the change'"
        ],
        whenNotToUse: [
          "No uses 'I want' → suena demandante, usa 'I'd like' o 'I'll have'",
          "No digas 'I'll take a coffee' → usa 'I'll have a coffee' para consumir en el lugar"
        ]
      },
      objectives: ["Pedir comida en un restaurante", "Hacer preguntas sobre el menú", "Pagar la cuenta"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l3t5_n1", word: "menu", translation: "menú", type: "noun", definition: "a list of food and drinks", definitionEs: "una lista de comidas y bebidas", example: "Can I see the menu, please?", exampleEs: "¿Puedo ver el menú, por favor?", related: [], difficulty: 1 },
          { id: "l3t5_n2", word: "waiter", translation: "mesero/camarero", type: "noun", definition: "a person who serves food", definitionEs: "una persona que sirve comida", example: "The waiter took our order.", exampleEs: "El mesero tomó nuestra orden.", related: ["waitress"], difficulty: 1 },
          { id: "l3t5_n3", word: "starter", translation: "entrada", type: "noun", definition: "a small dish before the main course", definitionEs: "un plato pequeño antes del plato principal", example: "I'll have soup as a starter.", exampleEs: "Tomaré sopa de entrada.", related: ["appetizer"], difficulty: 1 },
          { id: "l3t5_n4", word: "main course", translation: "plato principal", type: "noun", definition: "the biggest dish in a meal", definitionEs: "el plato más grande de una comida", example: "For my main course, I'll have fish.", exampleEs: "De plato principal, comeré pescado.", related: [], difficulty: 1 },
          { id: "l3t5_n5", word: "tip", translation: "propina", type: "noun", definition: "extra money for the server", definitionEs: "dinero extra para el mesero", example: "I left a 20% tip.", exampleEs: "Dejé una propina del 20%.", related: [], difficulty: 1 },
          { id: "l3t5_n6", word: "reservation", translation: "reservación", type: "noun", definition: "a table booked in advance", definitionEs: "una mesa reservada por adelantado", example: "Do I need a reservation?", exampleEs: "¿Necesito una reservación?", related: [], difficulty: 1 },
          { id: "l3t5_n7", word: "ingredients", translation: "ingredientes", type: "noun", definition: "items used to make food", definitionEs: "elementos usados para hacer comida", example: "What ingredients are in this dish?", exampleEs: "¿Qué ingredientes tiene este plato?", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l3t5_v1", word: "order", translation: "pedir/ordenar", type: "verb", definition: "to ask for food in a restaurant", definitionEs: "solicitar comida en un restaurante", example: "Are you ready to order?", exampleEs: "¿Están listos para ordenar?", related: [], difficulty: 1 },
          { id: "l3t5_v2", word: "recommend", translation: "recomendar", type: "verb", definition: "to suggest something good", definitionEs: "sugerir algo bueno", example: "What do you recommend?", exampleEs: "¿Qué recomienda?", related: ["recommendation"], difficulty: 1 },
          { id: "l3t5_v3", word: "serve", translation: "servir", type: "verb", definition: "to bring food to customers", definitionEs: "llevar comida a los clientes", example: "They serve breakfast until 11.", exampleEs: "Sirven desayuno hasta las 11.", related: ["service"], difficulty: 1 },
          { id: "l3t5_v4", word: "book", translation: "reservar", type: "verb", definition: "to make a reservation", definitionEs: "hacer una reservación", example: "I'd like to book a table for two.", exampleEs: "Me gustaría reservar una mesa para dos.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l3t5_a1", word: "vegetarian", translation: "vegetariano", type: "adjective", definition: "without meat", definitionEs: "sin carne", example: "Do you have vegetarian options?", exampleEs: "¿Tienen opciones vegetarianas?", related: [], difficulty: 1 },
          { id: "l3t5_a2", word: "rare", translation: "poco cocido", type: "adjective", definition: "meat cooked a short time", definitionEs: "carne cocida poco tiempo", example: "I'd like my steak rare.", exampleEs: "Me gustaría mi bistec poco cocido.", related: [], difficulty: 2 },
          { id: "l3t5_a3", word: "well-done", translation: "bien cocido", type: "adjective", definition: "meat cooked a long time", definitionEs: "carne cocida mucho tiempo", example: "I prefer my meat well-done.", exampleEs: "Prefiero mi carne bien cocida.", related: [], difficulty: 2 },
        ],
        expressions: [
          { id: "l3t5_e1", word: "I'll have...", translation: "Voy a pedir...", type: "expression", definition: "ordering food", definitionEs: "pidiendo comida", example: "I'll have the chicken, please.", exampleEs: "Voy a pedir el pollo, por favor.", related: [], difficulty: 1 },
          { id: "l3t5_e2", word: "Can I have the bill?", translation: "¿Me trae la cuenta?", type: "expression", definition: "asking to pay", definitionEs: "pidiendo pagar", example: "Can I have the bill, please?", exampleEs: "¿Me trae la cuenta, por favor?", related: [], difficulty: 1 },
          { id: "l3t5_e3", word: "Keep the change", translation: "Quédese con el cambio", type: "expression", definition: "giving a tip", definitionEs: "dando propina", example: "Keep the change, please.", exampleEs: "Quédese con el cambio, por favor.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l3t5_cm1",
          wrong: "I want the chicken, please.",
          correct: "I'd like the chicken, please. / I'll have the chicken, please.",
          explanation: "'I want' sounds too direct or demanding. It's more polite to use 'I'd like' or 'I'll have'.",
          explanationEs: "'I want' suena muy directo/demandante. Es más educado usar 'I'd like' o 'I'll have'.",
          category: "usage"
        },
        {
          id: "l3t5_cm2",
          wrong: "The bill, please.",
          correct: "Can I have the bill, please? / Could I get the bill?",
          explanation: "Although understandable, it's more polite to ask a complete question instead of just saying 'the bill'.",
          explanationEs: "Aunque se entiende, es más educado hacer una pregunta completa en vez de solo decir 'the bill'.",
          category: "usage"
        },
        {
          id: "l3t5_cm3",
          wrong: "I'll take a coffee.",
          correct: "I'll have a coffee. / Can I get a coffee?",
          explanation: "'Take' is used more for takeaway food. For dining in, use 'have' or 'get'.",
          explanationEs: "'Take' se usa más para comida para llevar. Para consumir en el lugar, usa 'have' o 'get'.",
          category: "vocabulary"
        },
        {
          id: "l3t5_cm4",
          wrong: "What contains this dish?",
          correct: "What does this dish contain? / What's in this dish?",
          explanation: "In questions with 'what', you need the auxiliary 'does' before the subject.",
          explanationEs: "En preguntas con 'what', necesitas el auxiliar 'does' antes del sujeto.",
          category: "grammar"
        },
        {
          id: "l3t5_cm5",
          wrong: "I am allergic of nuts.",
          correct: "I'm allergic to nuts.",
          explanation: "The correct preposition is 'allergic TO', not 'of'.",
          explanationEs: "La preposición correcta es 'allergic TO', no 'of'.",
          category: "grammar"
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las oraciones para pedir en un restaurante:",
          items: [
            { sentence: "I'd ___ the grilled salmon, please.", answer: "like", hint: "forma educada" },
            { sentence: "What do you ___? Any specialties?", answer: "recommend", hint: "pedir sugerencia" },
            { sentence: "I'm allergic ___ shellfish.", answer: "to", hint: "preposición" },
            { sentence: "Can I have the ___, please? We're ready to pay.", answer: "bill", hint: "cuenta" },
            { sentence: "How would you like your steak? ___-done, please.", answer: "well", hint: "muy cocido" }
          ]
        },
        {
          type: "matching",
          instruction: "Une la pregunta del mesero con la respuesta apropiada:",
          pairs: [
            { term: "Are you ready to order?", match: "Yes, I'll have the pasta." },
            { term: "How would you like your steak?", match: "Medium rare, please." },
            { term: "Would you like any dessert?", match: "Just coffee, thanks." },
            { term: "Is everything okay?", match: "Yes, the food is delicious." },
            { term: "Will that be cash or card?", match: "Card, please." }
          ]
        },
        {
          type: "ordering-sequence",
          instruction: "Ordena estos eventos de una comida en restaurante:",
          items: [
            { step: 1, text: "The waiter brings the menu" },
            { step: 2, text: "You order your food" },
            { step: 3, text: "The waiter brings the starter" },
            { step: 4, text: "The waiter brings the main course" },
            { step: 5, text: "You ask for the bill" },
            { step: 6, text: "You leave a tip" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en estas oraciones de restaurante:",
          items: [
            { incorrect: "I want a table for two persons.", correct: "I'd like a table for two (people).", hint: "'People' es más natural que 'persons'" },
            { incorrect: "The chicken is tasting delicious.", correct: "The chicken tastes delicious.", hint: "Verbos de percepción no usan -ing" },
            { incorrect: "Can I pay with card?", correct: "Can I pay by card? / Can I pay with a credit card?", hint: "'By card' o 'with a credit card'" },
            { incorrect: "I'd like a water.", correct: "I'd like some water. / I'd like a glass of water.", hint: "'Water' es incontable" }
          ]
        }
      ],
      modelDialogue: {
        title: "Pidiendo comida en un restaurante",
        dialogue: [
          { speaker: "Waiter", text: "Good evening. Do you have a reservation?", translation: "Buenas noches. ¿Tienen reservación?" },
          { speaker: "Customer", text: "Yes, it's under the name Miller, for 7:30.", translation: "Sí, está a nombre de Miller, para las 7:30." },
          { speaker: "Waiter", text: "Perfect. Right this way. Here are your menus.", translation: "Perfecto. Por aquí. Aquí están sus menús." },
          { speaker: "Customer", text: "Thank you. What do you recommend?", translation: "Gracias. ¿Qué nos recomienda?" },
          { speaker: "Waiter", text: "The fish of the day is excellent, and the risotto is very popular.", translation: "El pescado del día es excelente, y el risotto es muy popular." },
          { speaker: "Customer", text: "I'll have the fish. Does it come with any sides?", translation: "Voy a pedir el pescado. ¿Viene con acompañamientos?" },
          { speaker: "Waiter", text: "Yes, it comes with vegetables and potatoes. How would you like it cooked?", translation: "Sí, viene con verduras y papas. ¿Cómo lo quiere cocido?" },
          { speaker: "Customer", text: "Grilled, please. And could I have a glass of white wine?", translation: "A la parrilla, por favor. ¿Y podría traerme una copa de vino blanco?" },
          { speaker: "Waiter", text: "Of course. Anything else to start?", translation: "Por supuesto. ¿Algo más para empezar?" },
          { speaker: "Customer", text: "Just some bread, please. Thank you!", translation: "Solo un poco de pan, por favor. ¡Gracias!" }
        ],
        keyPhrases: [
          "Do you have a reservation?",
          "It's under the name...",
          "What do you recommend?",
          "I'll have the...",
          "Does it come with any sides?",
          "Could I have a glass of...?"
        ]
      },
      pronunciationFocus: {
        title: "Vocabulario de restaurante",
        sounds: [
          { sound: "/ˈsæm.ən/", word: "salmon", tip: "La 'l' es muda", tipEs: "No digas 'sal-mon' - suena 'samen'" },
          { sound: "/rɪˈsiːt/", word: "receipt", tip: "La 'p' es muda", tipEs: "Suena como 're-SEET'" },
          { sound: "/ˌvedʒ.ɪˈteə.ri.ən/", word: "vegetarian", tip: "4 sílabas, acento en 'ter'", tipEs: "No digas 'vege-TAR-ian'" }
        ],
        minimalPairs: [
          { word1: "dessert", word2: "desert", explanation: "dessert /dɪˈzɜːt/ = postre; desert /ˈdezət/ = desierto. Acento diferente." },
          { word1: "course", word2: "coarse", explanation: "course /kɔːs/ = plato; coarse /kɔːs/ = áspero. Misma pronunciación en UK." }
        ],
        intonation: [
          { pattern: "Polite ordering with rising-falling", example: "I'll have the salmon, please.↘", tip: "Peticiones educadas bajan suavemente al final", tipEs: "El 'please' suaviza la petición" }
        ],
        commonErrors: [
          { word: "vegetarian", wrong: "/vege-TAR-ian/", right: "/ˌvedʒ.ɪˈteə.ri.ən/", note: "4 sílabas, acento en 'ter'" },
          { word: "cuisine", wrong: "/ku-i-sin/", right: "/kwɪˈziːn/", note: "Palabra francesa, suena 'kwi-ZEEN'" },
          { word: "salmon", wrong: "/sal-mon/", right: "/ˈsæm.ən/", note: "La 'l' es muda" }
        ]
      },
      culturalNote: {
        title: "Cultura de restaurantes en países angloparlantes",
        titleEs: "Cultura de restaurantes en países angloparlantes",
        content: "En EE.UU., la propina estándar es 15-20% del total antes de impuestos, y se considera obligatoria (los meseros dependen de ella). En UK, 10-12% es común pero opcional. En EE.UU., las porciones suelen ser grandes y puedes pedir una 'doggy bag' para llevarte lo que sobra. En UK esto es menos común pero aceptable. 'Splitting the bill' (dividir la cuenta) es normal entre amigos. Pedir agua del grifo ('tap water') es gratis y perfectamente aceptable.",
        contentEs: "US: propina 15-20% obligatoria. UK: 10-12% opcional. 'Tap water' = agua gratis del grifo.",
        region: "General",
        examples: [
          "🇺🇸 US: Propina 15-20% obligatoria",
          "🇬🇧 UK: Propina 10-12% opcional, 'service charge' a veces incluido",
          "'Can I get a doggy bag?' = ¿Puedo llevarme las sobras?",
          "'Could we get tap water?' = Pedir agua gratis del grifo"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la forma más educada de pedir comida?",
          options: ["I want the steak", "Give me the steak", "I'll have the steak, please", "Steak for me"],
          correctAnswer: 2,
          explanation: "'I'll have..., please' es la forma más educada y común."
        },
        {
          question: "'Rare, medium, well-done' se refiere a:",
          options: ["el tamaño de la porción", "el nivel de cocción de la carne", "el precio del plato", "la calidad del restaurante"],
          correctAnswer: 1,
          explanation: "Rare = poco cocido, medium = término medio, well-done = bien cocido."
        },
        {
          question: "¿Cuál es la forma correcta de decir 'soy alérgico'?",
          options: ["I'm allergic of", "I'm allergic to", "I'm allergic with", "I'm allergic for"],
          correctAnswer: 1,
          explanation: "La preposición correcta es 'allergic TO'."
        },
        {
          question: "En EE.UU., ¿cuál es la propina estándar en restaurantes?",
          options: ["5%", "10%", "15-20%", "No se da propina"],
          correctAnswer: 2,
          explanation: "En EE.UU. la propina es 15-20% y se considera obligatoria."
        },
        {
          question: "'Starter' en UK es lo mismo que:",
          options: ["main course", "appetizer", "dessert", "drink"],
          correctAnswer: 1,
          explanation: "'Starter' (UK) = 'appetizer' (US) = entrada."
        },
        {
          question: "¿Cómo pides agua gratis del grifo?",
          options: ["Can I have mineral water?", "Can I get tap water?", "Water, please", "Give me free water"],
          correctAnswer: 1,
          explanation: "'Tap water' es agua del grifo, normalmente gratis."
        }
      ],
      guidedProduction: [
        {
          task: "Hacer una reservación por teléfono",
          prompt: "Llama a un restaurante para reservar una mesa para 4 personas el sábado a las 8 PM.",
          promptEs: "Llama a un restaurante para reservar una mesa para 4 personas el sábado a las 8 PM.",
          sampleAnswer: "Hello, I'd like to make a reservation for Saturday evening, please. A table for four at 8 PM. The name is [your name]. Do you have any availability?",
          hints: ["Di el número de personas", "Especifica día y hora", "Da tu nombre"]
        },
        {
          task: "Pedir comida con preferencias especiales",
          prompt: "Eres vegetariano y quieres pedir. Pregunta por opciones y haz tu pedido.",
          promptEs: "Eres vegetariano y quieres pedir. Pregunta por opciones y haz tu pedido.",
          sampleAnswer: "Excuse me, do you have any vegetarian options? I'll have the vegetable risotto, please. Does it contain any dairy? I'd also like a side salad, please.",
          hints: ["Pregunta por opciones vegetarianas", "Haz tu pedido", "Pregunta sobre ingredientes"]
        },
        {
          task: "Reportar un problema con tu pedido",
          prompt: "Te trajeron un plato diferente al que pediste. Habla con el mesero.",
          promptEs: "Te trajeron un plato diferente al que pediste. Habla con el mesero.",
          sampleAnswer: "Excuse me, I'm sorry but this isn't what I ordered. I asked for the grilled chicken, not the fried chicken. Could you please check my order?",
          hints: ["Sé educado", "Explica el problema", "Pide que lo corrijan"]
        },
        {
          task: "Pedir la cuenta y pagar",
          prompt: "Terminaste de comer. Pide la cuenta, pregunta si aceptan tarjeta y deja propina.",
          promptEs: "Terminaste de comer. Pide la cuenta, pregunta si aceptan tarjeta y deja propina.",
          sampleAnswer: "Excuse me, can I have the bill, please? Do you accept credit cards? The food was excellent, thank you. You can keep the change.",
          hints: ["Pide la cuenta", "Pregunta forma de pago", "Comenta sobre la comida"]
        }
      ],
      connectionToPrevious: "En el hotel aprendiste a hacer peticiones educadas ('Could I have...?', 'I'd like...'). Ahora usas las mismas estructuras para pedir comida.",
      connectionToNext: "En la siguiente lección aprenderás a pedir y dar direcciones, útil cuando busques un buen restaurante que te recomendaron.",
      grammarTheoryIds: ['a2-can-could-modals', 'a2-imperatives', 'a2-question-formation']
    },
    {
      id: 6,
      title: "Asking for and Giving Directions",
      titleEs: "Pedir y Dar Direcciones",
      introduction: {
        title: "🗺️ Pedir y Dar Direcciones",
        explanation: "Perderse en una ciudad nueva es común. Saber pedir y dar direcciones te ayudará a encontrar cualquier lugar y a ayudar a otros turistas.",
        keyPoints: [
          "Pedir direcciones: 'Excuse me, how do I get to...?', 'Where is the nearest...?'",
          "Dar direcciones: 'Go straight', 'Turn left/right', 'It's on the corner'",
          "Puntos de referencia: 'next to', 'opposite', 'in front of', 'behind'",
          "Distancias: 'It's about 5 minutes walk', 'It's 2 blocks away', 'Take the second left'"
        ],
        examples: [
          { english: "Excuse me, how do I get to the train station?", spanish: "Disculpe, ¿cómo llego a la estación de tren?", explanation: "Pidiendo direcciones" },
          { english: "Go straight for two blocks, then turn left.", spanish: "Siga recto dos cuadras, luego gire a la izquierda.", explanation: "Dando direcciones" },
          { english: "It's opposite the bank.", spanish: "Está enfrente del banco.", explanation: "Usando punto de referencia" }
        ],
        tips: [
          "💡 'Block' (cuadra) es más común en USA, en UK usan distancias o minutos",
          "💡 'Take the first/second right' = 'Toma la primera/segunda a la derecha'",
          "💡 'You can't miss it' = 'No tiene pierde' (es muy fácil de encontrar)"
        ],
        whenToUse: [
          "Al estar perdido en una ciudad: 'Excuse me, how do I get to...?'",
          "Al dar indicaciones a turistas: 'Go straight', 'Turn left at the corner'",
          "Al usar puntos de referencia: 'It's opposite the bank', 'next to the park'",
          "Al describir distancias: 'It's about 5 minutes walk', '2 blocks away'"
        ],
        whenNotToUse: [
          "No digas 'Go to straight' → 'Go straight' (sin 'to')",
          "No olvides 'of' en 'in front of': 'in front the bank' ❌ → 'in front of the bank' ✓"
        ]
      },
      objectives: ["Pedir direcciones educadamente", "Dar direcciones claras", "Usar preposiciones de lugar"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l3t6_n1", word: "corner", translation: "esquina", type: "noun", definition: "where two streets meet", definitionEs: "donde dos calles se encuentran", example: "Turn at the corner.", exampleEs: "Gira en la esquina.", related: [], difficulty: 1 },
          { id: "l3t6_n2", word: "block", translation: "cuadra", type: "noun", definition: "the area between streets", definitionEs: "el área entre calles", example: "It's two blocks away.", exampleEs: "Está a dos cuadras.", related: [], difficulty: 1 },
          { id: "l3t6_n3", word: "traffic light", translation: "semáforo", type: "noun", definition: "lights that control traffic", definitionEs: "luces que controlan el tráfico", example: "Turn left at the traffic light.", exampleEs: "Gira a la izquierda en el semáforo.", related: [], difficulty: 1 },
          { id: "l3t6_n4", word: "roundabout", translation: "rotonda", type: "noun", definition: "a circular intersection", definitionEs: "una intersección circular", example: "Take the second exit at the roundabout.", exampleEs: "Toma la segunda salida en la rotonda.", related: [], difficulty: 2 },
          { id: "l3t6_n5", word: "pedestrian crossing", translation: "paso de peatones", type: "noun", definition: "where people cross the street", definitionEs: "donde la gente cruza la calle", example: "Cross at the pedestrian crossing.", exampleEs: "Cruza en el paso de peatones.", related: ["crosswalk"], difficulty: 2 },
          { id: "l3t6_n6", word: "landmark", translation: "punto de referencia", type: "noun", definition: "a recognizable building or place", definitionEs: "un edificio o lugar reconocible", example: "The cathedral is a famous landmark.", exampleEs: "La catedral es un punto de referencia famoso.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l3t6_v1", word: "turn", translation: "girar", type: "verb", definition: "to change direction", definitionEs: "cambiar de dirección", example: "Turn right at the corner.", exampleEs: "Gira a la derecha en la esquina.", related: [], difficulty: 1 },
          { id: "l3t6_v2", word: "cross", translation: "cruzar", type: "verb", definition: "to go to the other side", definitionEs: "ir al otro lado", example: "Cross the street here.", exampleEs: "Cruza la calle aquí.", related: [], difficulty: 1 },
          { id: "l3t6_v3", word: "continue", translation: "continuar", type: "verb", definition: "to keep going", definitionEs: "seguir adelante", example: "Continue straight for 100 meters.", exampleEs: "Continúa recto por 100 metros.", related: [], difficulty: 1 },
          { id: "l3t6_v4", word: "pass", translation: "pasar", type: "verb", definition: "to go by something", definitionEs: "ir junto a algo", example: "Pass the supermarket on your left.", exampleEs: "Pasa el supermercado a tu izquierda.", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l3t6_a1", word: "straight", translation: "recto", type: "adjective", definition: "in a direct line", definitionEs: "en línea directa", example: "Go straight ahead.", exampleEs: "Ve recto.", related: [], difficulty: 1 },
          { id: "l3t6_a2", word: "lost", translation: "perdido", type: "adjective", definition: "not knowing where you are", definitionEs: "sin saber dónde estás", example: "I'm lost. Can you help me?", exampleEs: "Estoy perdido. ¿Puede ayudarme?", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l3t6_e1", word: "Excuse me, how do I get to...?", translation: "Disculpe, ¿cómo llego a...?", type: "expression", definition: "asking for directions", definitionEs: "pidiendo direcciones", example: "Excuse me, how do I get to the museum?", exampleEs: "Disculpe, ¿cómo llego al museo?", related: [], difficulty: 1 },
          { id: "l3t6_e2", word: "You can't miss it", translation: "No tiene pierde", type: "expression", definition: "it's easy to find", definitionEs: "es fácil de encontrar", example: "It's the big red building. You can't miss it.", exampleEs: "Es el edificio grande rojo. No tiene pierde.", related: [], difficulty: 1 },
          { id: "l3t6_e3", word: "It's about... away", translation: "Está a unos...", type: "expression", definition: "describing distance", definitionEs: "describiendo distancia", example: "It's about five minutes away.", exampleEs: "Está a unos cinco minutos.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [
          { id: "l3t6_p1", word: "opposite", translation: "enfrente de", type: "preposition", definition: "facing something", definitionEs: "de frente a algo", example: "The bank is opposite the park.", exampleEs: "El banco está enfrente del parque.", related: ["across from"], difficulty: 1 },
          { id: "l3t6_p2", word: "past", translation: "más allá de", type: "preposition", definition: "beyond something", definitionEs: "más allá de algo", example: "Go past the church.", exampleEs: "Ve más allá de la iglesia.", related: [], difficulty: 1 },
        ],
      },
      commonMistakes: [
        {
          id: "l3t6_cm1",
          wrong: "Go to straight and turn at left.",
          correct: "Go straight and turn left.",
          explanation: "'Straight' es adverbio, no necesita 'to'. 'Turn left' no necesita 'at'."
        },
        {
          id: "l3t6_cm2",
          wrong: "It's in front the bank.",
          correct: "It's in front of the bank.",
          explanation: "La expresión completa es 'in front OF', no olvides 'of'."
        },
        {
          id: "l3t6_cm3",
          wrong: "The museum is near to the park.",
          correct: "The museum is near the park.",
          explanation: "'Near' no necesita 'to'. Se dice 'near the park' o 'close to the park'."
        },
        {
          id: "l3t6_cm4",
          wrong: "Turn in the corner.",
          correct: "Turn at the corner.",
          explanation: "Usamos 'AT the corner', no 'in'. También se puede decir 'on the corner'."
        },
        {
          id: "l3t6_cm5",
          wrong: "The station is at 5 minutes from here.",
          correct: "The station is 5 minutes from here.",
          explanation: "No usamos 'at' con distancias de tiempo. Simplemente: 'It's 5 minutes away'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con la preposición correcta (at, on, in front of, opposite, past):",
          items: [
            { sentence: "Turn left ___ the traffic light.", answer: "at", hint: "en un punto específico" },
            { sentence: "The pharmacy is ___ the bank.", answer: "opposite", hint: "enfrente" },
            { sentence: "Go ___ the church and it's on your right.", answer: "past", hint: "más allá de" },
            { sentence: "There's a bus stop ___ ___ ___ the hotel.", answer: "in front of", hint: "delante de" },
            { sentence: "The museum is ___ the corner of Main Street.", answer: "on", hint: "en la esquina" }
          ]
        },
        {
          type: "matching",
          instruction: "Une la dirección en inglés con su significado:",
          pairs: [
            { term: "Go straight ahead", match: "Sigue recto" },
            { term: "Turn right at the corner", match: "Gira a la derecha en la esquina" },
            { term: "Take the second left", match: "Toma la segunda a la izquierda" },
            { term: "It's on your left", match: "Está a tu izquierda" },
            { term: "Cross the street", match: "Cruza la calle" },
            { term: "Go past the supermarket", match: "Pasa el supermercado" }
          ]
        },
        {
          type: "map-reading",
          instruction: "Lee las direcciones y di a dónde llegas:",
          items: [
            { directions: "Start at the hotel. Go straight for two blocks. Turn left. It's the big building on your right.", answer: "museum", hint: "Edificio cultural grande" },
            { directions: "From the train station, turn right. Walk past the bank. It's opposite the park.", answer: "restaurant", hint: "Lugar para comer" },
            { directions: "Go straight and take the first right. It's on the corner, next to the pharmacy.", answer: "post office", hint: "Donde envías cartas" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en estas direcciones:",
          items: [
            { incorrect: "Go to straight for two blocks.", correct: "Go straight for two blocks.", hint: "'Straight' no necesita 'to'" },
            { incorrect: "Turn to the left at the bank.", correct: "Turn left at the bank.", hint: "'Turn left', no 'turn to the left'" },
            { incorrect: "It's in the corner.", correct: "It's on the corner. / It's at the corner.", hint: "ON o AT the corner" },
            { incorrect: "The hospital is near to here.", correct: "The hospital is near here. / close to here.", hint: "'Near' no necesita 'to'" }
          ]
        }
      ],
      modelDialogue: {
        title: "Pidiendo direcciones a un extraño",
        dialogue: [
          { speaker: "Tourist", text: "Excuse me, I'm looking for the train station. Can you help me?", translation: "Disculpe, estoy buscando la estación de tren. ¿Puede ayudarme?" },
          { speaker: "Local", text: "Of course! It's not far from here, about a 10-minute walk.", translation: "¡Por supuesto! No está lejos de aquí, como a 10 minutos caminando." },
          { speaker: "Tourist", text: "Great! How do I get there?", translation: "¡Genial! ¿Cómo llego?" },
          { speaker: "Local", text: "Go straight down this street for two blocks.", translation: "Siga recto por esta calle dos cuadras." },
          { speaker: "Tourist", text: "Okay, straight for two blocks. Then what?", translation: "Bien, recto dos cuadras. ¿Y luego?" },
          { speaker: "Local", text: "Then turn left at the traffic light. You'll see a big supermarket.", translation: "Luego gire a la izquierda en el semáforo. Verá un supermercado grande." },
          { speaker: "Tourist", text: "Turn left at the traffic light, past the supermarket...", translation: "Girar a la izquierda en el semáforo, pasando el supermercado..." },
          { speaker: "Local", text: "Exactly. Continue for about 100 meters. The station is on your right, opposite the park.", translation: "Exacto. Continúe unos 100 metros. La estación está a su derecha, enfrente del parque." },
          { speaker: "Tourist", text: "Opposite the park. Got it! Thank you so much!", translation: "Enfrente del parque. ¡Entendido! ¡Muchas gracias!" },
          { speaker: "Local", text: "You're welcome! You can't miss it – it's a big red building.", translation: "¡De nada! No tiene pierde – es un edificio rojo grande." }
        ],
        keyPhrases: [
          "Excuse me, I'm looking for...",
          "How do I get there?",
          "Go straight down this street",
          "Turn left at the traffic light",
          "It's on your right",
          "You can't miss it"
        ]
      },
      pronunciationFocus: {
        title: "Sonidos en vocabulario de direcciones",
        sounds: [
          { sound: "/aʊ/", examples: ["roundabout", "down", "around"], tip: "Diptongo que comienza con 'a' y cierra con 'u'" },
          { sound: "/ɔː/", examples: ["corner", "crosswalk", "north"], tip: "Vocal larga como 'or' en español" },
          { sound: "th /ð/", examples: ["the", "there", "this"], tip: "La lengua entre los dientes, con vibración" }
        ],
        commonErrors: [
          { word: "straight", wrong: "/es-trait/", right: "/streɪt/", note: "No añadas 'e' al principio" },
          { word: "pedestrian", wrong: "/pe-DES-trian/", right: "/pɪˈdes.tri.ən/", note: "4 sílabas, acento en 'des'" },
          { word: "avenue", wrong: "/a-ve-NUE/", right: "/ˈæv.ə.njuː/", note: "Acento en la primera sílaba" }
        ]
      },
      culturalNote: {
        title: "Dando y pidiendo direcciones en diferentes culturas",
        content: "En países angloparlantes, la gente generalmente está dispuesta a ayudar con direcciones. Es educado comenzar con 'Excuse me' antes de preguntar. Los estadounidenses suelen dar direcciones usando 'blocks' (cuadras), mientras que los británicos prefieren distancias en metros/millas o tiempo ('about 5 minutes walk'). En UK es común escuchar 'carry on' en lugar de 'continue'. Si no entiendes, es perfectamente aceptable decir 'Sorry, could you repeat that more slowly?'",
        examples: [
          "🇺🇸 US: 'Go two blocks north, then turn right'",
          "🇬🇧 UK: 'Carry on for about 200 metres, then turn right'",
          "Diferencias: 'Sidewalk' (US) = 'Pavement' (UK)",
          "Pedir repetición: 'Sorry, could you say that again?'"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cuál es la forma correcta de comenzar a pedir direcciones?",
          options: ["Hey, where is the bank?", "Excuse me, how do I get to the bank?", "Tell me where the bank is", "I want the bank"],
          correctAnswer: 1,
          explanation: "'Excuse me, how do I get to...?' es la forma más educada."
        },
        {
          question: "Completa: 'The pharmacy is ___ the park.'",
          options: ["in front", "opposite", "in front to", "across"],
          correctAnswer: 1,
          explanation: "'Opposite' significa enfrente de, frente a frente."
        },
        {
          question: "'You can't miss it' significa:",
          options: ["No puedes perderlo", "Es fácil de encontrar", "Está perdido", "Debes encontrarlo"],
          correctAnswer: 1,
          explanation: "Es una expresión que significa 'es muy fácil de encontrar, no tiene pierde'."
        },
        {
          question: "¿Cuál es la preposición correcta con 'corner'?",
          options: ["in the corner", "on/at the corner", "to the corner", "by the corner"],
          correctAnswer: 1,
          explanation: "Usamos 'on the corner' o 'at the corner' para indicar ubicación."
        },
        {
          question: "'Take the second left' significa:",
          options: ["Gira dos veces a la izquierda", "Toma la segunda calle a la izquierda", "Ve a la izquierda dos cuadras", "La segunda persona a la izquierda"],
          correctAnswer: 1,
          explanation: "Significa tomar la segunda calle que encuentres a la izquierda."
        },
        {
          question: "¿Cómo se dice 'pasando el banco' en inglés?",
          options: ["passing the bank", "past the bank", "pass the bank", "by the bank"],
          correctAnswer: 1,
          explanation: "'Past the bank' = pasando/más allá del banco."
        }
      ],
      guidedProduction: [
        {
          task: "Pedir direcciones al museo",
          prompt: "Estás en un hotel y quieres ir al museo de la ciudad. Pregunta al recepcionista cómo llegar.",
          sampleAnswer: "Excuse me, could you tell me how to get to the city museum? Is it far from here? Can I walk there?",
          hints: ["Comienza con 'Excuse me'", "Pregunta si está lejos", "Pregunta si se puede caminar"]
        },
        {
          task: "Dar direcciones a un turista",
          prompt: "Un turista te pregunta cómo llegar a la estación de tren. Está a 3 cuadras, gira a la derecha y luego a la izquierda.",
          sampleAnswer: "Sure! Go straight for three blocks. Turn right at the traffic light, then take the first left. The train station is on your right. You can't miss it!",
          hints: ["Da la dirección paso a paso", "Menciona puntos de referencia", "Termina con 'You can't miss it'"]
        },
        {
          task: "Pedir aclaración",
          prompt: "Alguien te dio direcciones pero no entendiste bien. Pide que te repitan.",
          sampleAnswer: "Sorry, could you repeat that more slowly, please? Did you say turn left at the traffic light? And then it's on the right?",
          hints: ["Pide que repitan", "Confirma lo que entendiste", "Haz preguntas específicas"]
        },
        {
          task: "Describir ubicación de tu casa",
          prompt: "Describe dónde está tu casa usando puntos de referencia cercanos.",
          sampleAnswer: "My house is on Oak Street, opposite the supermarket. It's about five minutes from the train station. There's a pharmacy on the corner, and my house is the blue one next to it.",
          hints: ["Menciona la calle", "Usa puntos de referencia", "Describe características"]
        }
      ],
      connectionToPrevious: "En el restaurante aprendiste a hacer preguntas educadas ('Could I...?'). Ahora usas frases similares ('Could you tell me...?') para pedir direcciones.",
      connectionToNext: "En la siguiente lección sobre compras de ropa, usarás direcciones cuando busques tiendas específicas y cuando te digan dónde están los probadores.",
      grammarTheoryIds: ['a2-prepositions-time-place', 'a2-imperatives', 'a2-question-formation']
    },
    {
      id: 7,
      title: "Shopping for Clothes",
      titleEs: "Comprando Ropa",
      introduction: {
        title: "👗 Comprando Ropa",
        explanation: "Comprar ropa requiere vocabulario específico sobre tallas, colores, materiales y estilos. Aprenderás a comunicarte efectivamente en tiendas de ropa.",
        keyPoints: [
          "Tallas: small (S), medium (M), large (L), XL - y específicas: size 38, size 10",
          "Probarse: 'Can I try this on?', 'Where are the fitting rooms?'",
          "Preguntar: 'Do you have this in a different size/color?', 'Does it come in blue?'",
          "Describir: 'It's too tight', 'It's too loose', 'It fits perfectly'"
        ],
        examples: [
          { english: "Do you have this shirt in a larger size?", spanish: "¿Tienen esta camisa en una talla más grande?", explanation: "Preguntando por otra talla" },
          { english: "It's too tight. Can I try the next size up?", spanish: "Está muy apretada. ¿Puedo probar la talla siguiente?", explanation: "Describiendo el ajuste" },
          { english: "I'll take it!", spanish: "¡Me lo llevo!", explanation: "Decidiendo comprar" }
        ],
        tips: [
          "💡 Las tallas varían entre países: USA, UK y EU tienen sistemas diferentes",
          "💡 'Fitting room' (UK) = 'Dressing room' (US)",
          "💡 'It suits you' = 'Te queda bien' (estilo), 'It fits you' = ajuste físico"
        ],
        whenToUse: [
          "Al buscar ropa en tiendas: 'I'm looking for...', 'Do you have this in...?'",
          "Al probarse prendas: 'Can I try this on?', 'Where are the fitting rooms?'",
          "Al describir el ajuste: 'It's too tight', 'It fits perfectly', 'Do you have a larger size?'",
          "Al decidir comprar: 'I'll take it!', 'Do you have this in a different color?'"
        ],
        whenNotToUse: [
          "No digas 'Can I prove this?' → usa 'Can I try this on?' (prove = demostrar)",
          "No digas 'It looks you good' → usa 'It looks good on you' o 'It suits you'"
        ]
      },
      objectives: ["Vocabulario de ropa y tallas", "Probarse y describir ajuste", "Comparar y elegir productos"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l3t7_n1", word: "fitting room", translation: "probador", type: "noun", definition: "a room to try on clothes", definitionEs: "un cuarto para probarse ropa", example: "Where are the fitting rooms?", exampleEs: "¿Dónde están los probadores?", related: ["dressing room"], difficulty: 1 },
          { id: "l3t7_n2", word: "size", translation: "talla", type: "noun", definition: "the measurement of clothes", definitionEs: "la medida de la ropa", example: "What size do you wear?", exampleEs: "¿Qué talla usas?", related: [], difficulty: 1 },
          { id: "l3t7_n3", word: "fabric", translation: "tela", type: "noun", definition: "the material clothes are made of", definitionEs: "el material del que está hecha la ropa", example: "This fabric is very soft.", exampleEs: "Esta tela es muy suave.", related: ["material"], difficulty: 2 },
          { id: "l3t7_n4", word: "discount", translation: "descuento", type: "noun", definition: "a reduction in price", definitionEs: "una reducción en el precio", example: "Is there a discount on this?", exampleEs: "¿Hay descuento en esto?", related: ["sale"], difficulty: 1 },
          { id: "l3t7_n5", word: "refund", translation: "reembolso", type: "noun", definition: "money returned for a purchase", definitionEs: "dinero devuelto por una compra", example: "Can I get a refund?", exampleEs: "¿Puedo obtener un reembolso?", related: [], difficulty: 2 },
          { id: "l3t7_n6", word: "cotton", translation: "algodón", type: "noun", definition: "a natural fabric", definitionEs: "una tela natural", example: "Is this 100% cotton?", exampleEs: "¿Es esto 100% algodón?", related: [], difficulty: 1 },
        ],
        verbs: [
          { id: "l3t7_v1", word: "try on", translation: "probarse", type: "verb", definition: "to put on clothes to check fit", definitionEs: "ponerse ropa para verificar el ajuste", example: "Can I try this on?", exampleEs: "¿Puedo probarme esto?", related: [], difficulty: 1 },
          { id: "l3t7_v2", word: "fit", translation: "quedar (de talla)", type: "verb", definition: "to be the right size", definitionEs: "ser de la talla correcta", example: "Does it fit?", exampleEs: "¿Te queda bien?", related: [], difficulty: 1 },
          { id: "l3t7_v3", word: "suit", translation: "quedar (de estilo)", type: "verb", definition: "to look good on someone", definitionEs: "verse bien en alguien", example: "That color suits you.", exampleEs: "Ese color te queda bien.", related: [], difficulty: 2 },
          { id: "l3t7_v4", word: "exchange", translation: "cambiar", type: "verb", definition: "to return and get something different", definitionEs: "devolver y obtener algo diferente", example: "Can I exchange this for a bigger size?", exampleEs: "¿Puedo cambiar esto por una talla más grande?", related: [], difficulty: 1 },
        ],
        adjectives: [
          { id: "l3t7_a1", word: "tight", translation: "apretado", type: "adjective", definition: "fitting very closely", definitionEs: "que ajusta muy ceñido", example: "These jeans are too tight.", exampleEs: "Estos jeans están muy apretados.", related: [], difficulty: 1 },
          { id: "l3t7_a2", word: "loose", translation: "holgado", type: "adjective", definition: "not fitting tightly", definitionEs: "que no ajusta ceñido", example: "This shirt is too loose.", exampleEs: "Esta camisa está muy holgada.", related: [], difficulty: 1 },
          { id: "l3t7_a3", word: "striped", translation: "rayado", type: "adjective", definition: "having lines", definitionEs: "que tiene líneas", example: "I like that striped shirt.", exampleEs: "Me gusta esa camisa rayada.", related: [], difficulty: 1 },
          { id: "l3t7_a4", word: "plain", translation: "liso", type: "adjective", definition: "without patterns", definitionEs: "sin patrones", example: "I prefer plain colors.", exampleEs: "Prefiero colores lisos.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l3t7_e1", word: "I'm just looking", translation: "Solo estoy mirando", type: "expression", definition: "not needing help", definitionEs: "no necesitando ayuda", example: "Thanks, I'm just looking.", exampleEs: "Gracias, solo estoy mirando.", related: [], difficulty: 1 },
          { id: "l3t7_e2", word: "I'll take it", translation: "Me lo llevo", type: "expression", definition: "deciding to buy", definitionEs: "decidiendo comprar", example: "It looks great. I'll take it!", exampleEs: "Se ve genial. ¡Me lo llevo!", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l3t7_cm1",
          wrong: "Can I prove this dress?",
          correct: "Can I try this dress on?",
          explanation: "'Prove' significa 'demostrar'. Para ropa usamos 'try on' (phrasal verb separable)."
        },
        {
          id: "l3t7_cm2",
          wrong: "This shirt is too much big for me.",
          correct: "This shirt is too big for me.",
          explanation: "Con adjetivos usamos 'too' directamente, sin 'much'. 'Too big', 'too tight'."
        },
        {
          id: "l3t7_cm3",
          wrong: "What is your tall?",
          correct: "How tall are you? / What's your height?",
          explanation: "Preguntamos con 'How tall are you?' o 'What's your height?', no 'what is your tall'."
        },
        {
          id: "l3t7_cm4",
          wrong: "I wear a size medium.",
          correct: "I wear (a) medium. / I'm a medium.",
          explanation: "Normalmente decimos 'I'm a medium' o 'I wear medium', no 'size medium'."
        },
        {
          id: "l3t7_cm5",
          wrong: "It looks you good.",
          correct: "It looks good on you.",
          explanation: "La estructura es 'It looks good ON you' o 'It suits you'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las oraciones de compras:",
          items: [
            { sentence: "Can I ___ this jacket ___?", answer: "try / on", hint: "phrasal verb" },
            { sentence: "Where are the ___ rooms?", answer: "fitting", hint: "probadores" },
            { sentence: "Do you have this in a ___ size?", answer: "larger/smaller", hint: "otra talla" },
            { sentence: "It's too ___. I need a bigger size.", answer: "tight", hint: "muy ceñido" },
            { sentence: "That color really ___ you!", answer: "suits", hint: "te queda bien" }
          ]
        },
        {
          type: "matching",
          instruction: "Une la descripción del problema con la solución:",
          pairs: [
            { term: "It's too tight", match: "I need a larger size" },
            { term: "It's too loose", match: "I need a smaller size" },
            { term: "It doesn't suit me", match: "Do you have a different color?" },
            { term: "It's too expensive", match: "Is there a discount?" },
            { term: "I changed my mind", match: "Can I return this?" }
          ]
        },
        {
          type: "dialogue-completion",
          instruction: "Completa el diálogo en la tienda de ropa:",
          items: [
            { prompt: "Shop assistant: Can I help you?", response: "Yes, I'm looking for a summer dress.", hint: "Di qué buscas" },
            { prompt: "Shop assistant: What size are you?", response: "I'm a medium, but I'd like to try it on first.", hint: "Di tu talla" },
            { prompt: "Shop assistant: How does it fit?", response: "It's a bit tight. Do you have it in large?", hint: "Describe el ajuste" },
            { prompt: "Shop assistant: Unfortunately, that's the last one.", response: "That's a pity. I'll keep looking then.", hint: "Responde a la mala noticia" }
          ]
        },
        {
          type: "role-classification",
          instruction: "Clasifica estas frases: ¿Las dice el cliente (C) o el vendedor (V)?",
          items: [
            { phrase: "Can I help you?", answer: "V" },
            { phrase: "I'm just looking, thanks.", answer: "C" },
            { phrase: "The fitting rooms are over there.", answer: "V" },
            { phrase: "I'll take it!", answer: "C" },
            { phrase: "Would you like to pay by cash or card?", answer: "V" },
            { phrase: "Do you have this in blue?", answer: "C" }
          ]
        }
      ],
      modelDialogue: {
        title: "Comprando ropa en una tienda",
        dialogue: [
          { speaker: "Assistant", text: "Hi there! Can I help you with anything?", translation: "¡Hola! ¿Puedo ayudarte con algo?" },
          { speaker: "Customer", text: "Yes, I'm looking for a nice shirt for a job interview.", translation: "Sí, estoy buscando una camisa bonita para una entrevista de trabajo." },
          { speaker: "Assistant", text: "Of course! What size are you?", translation: "¡Por supuesto! ¿Qué talla usas?" },
          { speaker: "Customer", text: "I'm a medium, I think. Do you have anything in blue?", translation: "Creo que soy mediana. ¿Tienen algo en azul?" },
          { speaker: "Assistant", text: "Yes, we have this lovely blue shirt. Would you like to try it on?", translation: "Sí, tenemos esta bonita camisa azul. ¿Te gustaría probártela?" },
          { speaker: "Customer", text: "Yes, please. Where are the fitting rooms?", translation: "Sí, por favor. ¿Dónde están los probadores?" },
          { speaker: "Assistant", text: "Just over there on the right. Let me know if you need a different size.", translation: "Justo allí a la derecha. Avísame si necesitas otra talla." },
          { speaker: "Customer", text: "Thanks! [After trying] It fits perfectly! How much is it?", translation: "¡Gracias! [Después de probarse] ¡Me queda perfecto! ¿Cuánto cuesta?" },
          { speaker: "Assistant", text: "It's $45, but we have 20% off today. So it's $36.", translation: "Cuesta $45, pero hoy tenemos 20% de descuento. Así que son $36." },
          { speaker: "Customer", text: "Great! I'll take it. Can I pay by card?", translation: "¡Genial! Me lo llevo. ¿Puedo pagar con tarjeta?" }
        ],
        keyPhrases: [
          "I'm looking for...",
          "What size are you?",
          "Would you like to try it on?",
          "It fits perfectly!",
          "I'll take it"
        ]
      },
      pronunciationFocus: {
        title: "Vocabulario de ropa y compras",
        sounds: [
          { sound: "Silent letters", examples: ["receipt /rɪˈsiːt/", "clothes /kləʊðz/"], tip: "La 'p' en receipt y la 'e' final en clothes son mudas" },
          { sound: "/aɪ/", examples: ["size", "tight", "price", "try"], tip: "Diptongo común en palabras de compras" },
          { sound: "/uː/", examples: ["loose", "suit", "blue"], tip: "Sonido largo de 'u'" }
        ],
        commonErrors: [
          { word: "clothes", wrong: "/klo-THES/", right: "/kləʊðz/", note: "Una sílaba, no dos. Suena como 'close'" },
          { word: "receipt", wrong: "/re-CEIPT/", right: "/rɪˈsiːt/", note: "La 'p' es muda" },
          { word: "cotton", wrong: "/ko-TON/", right: "/ˈkɒt.ən/", note: "Acento en la primera sílaba" }
        ]
      },
      culturalNote: {
        title: "Comprar ropa en países angloparlantes",
        content: "Las tallas de ropa varían mucho entre países. Una talla 'Medium' en USA es diferente a una 'Medium' en UK o Europa. En EE.UU., los dependientes tienden a ser muy atentos (a veces demasiado). Es normal decir 'I'm just looking' para que te dejen tranquilo. En UK, el servicio es menos intenso. La política de devoluciones suele ser generosa (28-30 días con recibo). Durante las 'sales' (rebajas), especialmente el Black Friday, las tiendas están muy llenas.",
        examples: [
          "Tallas US vs UK: US 6 = UK 10 en mujeres",
          "'I'm just browsing' = solo estoy mirando",
          "'Can I return this?' = ¿Puedo devolverlo?",
          "Black Friday y Boxing Day (UK) = grandes rebajas"
        ]
      },
      consolidationQuiz: [
        {
          question: "¿Cómo preguntas si puedes probarte algo?",
          options: ["Can I prove this?", "Can I try this on?", "Can I test this?", "Can I wear this?"],
          correctAnswer: 1,
          explanation: "'Try on' es el phrasal verb correcto para probarse ropa."
        },
        {
          question: "'It suits you' significa:",
          options: ["te queda de talla", "te queda bien (estilo/color)", "es cómodo", "es barato"],
          correctAnswer: 1,
          explanation: "'Suit' se refiere al estilo y color, 'fit' al tamaño."
        },
        {
          question: "Si la ropa es muy ceñida, dices:",
          options: ["It's too loose", "It's too tight", "It's too large", "It's too long"],
          correctAnswer: 1,
          explanation: "'Tight' = apretado, ceñido. Lo opuesto es 'loose' (holgado)."
        },
        {
          question: "¿Cómo decides comprar algo?",
          options: ["I buy it", "I get it", "I'll take it", "I want it"],
          correctAnswer: 2,
          explanation: "'I'll take it' es la expresión estándar para decir que compras algo."
        },
        {
          question: "'Fitting room' en USA es:",
          options: ["changing room", "dressing room", "trying room", "clothes room"],
          correctAnswer: 1,
          explanation: "'Fitting room' (UK) = 'dressing room' (US)."
        },
        {
          question: "Para preguntar si tienen otra talla, dices:",
          options: ["Do you have this in other size?", "Do you have this in a different size?", "Do you have this more big?", "Have you this size?"],
          correctAnswer: 1,
          explanation: "'Do you have this in a different size?' es la forma correcta."
        }
      ],
      guidedProduction: [
        {
          task: "Entrar a una tienda y buscar algo específico",
          prompt: "Entra a una tienda buscando unos jeans para una ocasión casual.",
          sampleAnswer: "Hi, I'm looking for some casual jeans. Do you have anything in dark blue? I'm usually a size 32.",
          hints: ["Saluda", "Di qué buscas", "Menciona color y talla"]
        },
        {
          task: "Describir un problema con la ropa",
          prompt: "Te probaste unos pantalones pero hay un problema. Explícalo al vendedor.",
          sampleAnswer: "These pants are a bit too long. Do you offer alterations? Or maybe you have a shorter length?",
          hints: ["Describe el problema", "Pregunta por soluciones", "Sé específico"]
        },
        {
          task: "Pedir ayuda con tallas",
          prompt: "No conoces el sistema de tallas del país. Pide ayuda.",
          sampleAnswer: "Excuse me, I'm not sure about sizes here. I'm usually a medium in my country. What would that be here? Could you measure me?",
          hints: ["Explica tu situación", "Da referencia", "Pide ayuda"]
        },
        {
          task: "Devolver un producto",
          prompt: "Quieres devolver una camisa que compraste porque no te queda bien.",
          sampleAnswer: "Hi, I'd like to return this shirt. I bought it yesterday but when I tried it at home, it didn't fit properly. Here's my receipt. Can I get a refund?",
          hints: ["Explica que quieres devolver", "Da la razón", "Muestra el recibo"]
        }
      ],
      connectionToPrevious: "En la lección de direcciones aprendiste a encontrar tiendas. Ahora que estás dentro, necesitas comunicarte efectivamente para comprar lo que necesitas.",
      connectionToNext: "En la siguiente lección aprenderás a describir personas, útil cuando vayas de compras con amigos y quieras decir 'That color suits you!' o describir qué tipo de ropa buscan.",
      grammarTheoryIds: ['a2-comparatives-superlatives', 'a2-can-could-modals']
    },
    {
      id: 8,
      title: "Describing People",
      titleEs: "Describiendo Personas",
      introduction: {
        title: "👤 Describiendo Personas",
        explanation: "Saber describir personas es útil para identificar a alguien o hablar de características físicas y de personalidad. Aprenderás vocabulario para descripciones completas.",
        keyPoints: [
          "Altura: tall, short, medium height, of average height",
          "Complexión: thin, slim, overweight, muscular, well-built",
          "Cabello: long, short, curly, straight, wavy, bald, blonde, brunette",
          "Ojos: blue eyes, green eyes, brown eyes, glasses, contact lenses"
        ],
        examples: [
          { english: "She's tall with long, curly hair.", spanish: "Ella es alta con cabello largo y rizado.", explanation: "Descripción física" },
          { english: "He's the one wearing glasses.", spanish: "Él es el que usa lentes.", explanation: "Identificando a alguien" },
          { english: "She's very friendly and outgoing.", spanish: "Ella es muy amigable y extrovertida.", explanation: "Describiendo personalidad" }
        ],
        tips: [
          "💡 'Slim' es positivo, 'skinny' puede ser negativo (muy flaco)",
          "💡 'He's got blue eyes' (UK) = 'He has blue eyes' (US)",
          "💡 Para describir edad: 'in his/her 20s/30s' = 'en sus veintes/treintas'"
        ],
        whenToUse: [
          'Al identificar a alguien: "She\'s the tall woman with curly hair"',
          'En la policía o emergencias: "He was wearing a blue jacket"',
          'Al presentar a personas: "My sister is very friendly and outgoing"',
          'Al describir personajes de libros o películas'
        ],
        whenNotToUse: [
          'Evita comentarios sobre peso de forma directa → usa "well-built" o "slim" en vez de "fat" o "skinny"',
          'No uses "old" directamente → prefiere "elderly" o "in his/her 60s"',
          'Cuidado con "look like" vs "be like": "look like" = apariencia, "be like" = personalidad'
        ]
      },
      objectives: ["Describir apariencia física", "Describir personalidad", "Identificar personas por su descripción"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l3t8_n1", word: "height", translation: "altura", type: "noun", definition: "how tall someone is", definitionEs: "qué tan alto es alguien", example: "What's your height?", exampleEs: "¿Cuál es tu altura?", related: [], difficulty: 1 },
          { id: "l3t8_n2", word: "appearance", translation: "apariencia", type: "noun", definition: "how someone looks", definitionEs: "cómo se ve alguien", example: "She cares about her appearance.", exampleEs: "Ella se preocupa por su apariencia.", related: [], difficulty: 2 },
          { id: "l3t8_n3", word: "personality", translation: "personalidad", type: "noun", definition: "someone's character", definitionEs: "el carácter de alguien", example: "He has a great personality.", exampleEs: "Él tiene una gran personalidad.", related: [], difficulty: 2 },
          { id: "l3t8_n4", word: "beard", translation: "barba", type: "noun", definition: "hair on a man's chin", definitionEs: "cabello en la barbilla de un hombre", example: "He has a long beard.", exampleEs: "Él tiene una barba larga.", related: ["mustache"], difficulty: 1 },
          { id: "l3t8_n5", word: "freckles", translation: "pecas", type: "noun", definition: "small brown spots on skin", definitionEs: "pequeñas manchas marrones en la piel", example: "She has freckles on her face.", exampleEs: "Ella tiene pecas en su cara.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l3t8_v1", word: "look like", translation: "parecerse a", type: "verb", definition: "to have a similar appearance", definitionEs: "tener una apariencia similar", example: "She looks like her mother.", exampleEs: "Ella se parece a su madre.", related: [], difficulty: 1 },
          { id: "l3t8_v2", word: "wear", translation: "usar/llevar puesto", type: "verb", definition: "to have clothes on", definitionEs: "tener ropa puesta", example: "He usually wears jeans.", exampleEs: "Él usualmente usa jeans.", related: [], difficulty: 1 },
          { id: "l3t8_v3", word: "recognize", translation: "reconocer", type: "verb", definition: "to know who someone is", definitionEs: "saber quién es alguien", example: "I didn't recognize him with his new haircut.", exampleEs: "No lo reconocí con su nuevo corte de cabello.", related: [], difficulty: 2 },
        ],
        adjectives: [
          { id: "l3t8_a1", word: "tall", translation: "alto", type: "adjective", definition: "of great height", definitionEs: "de gran altura", example: "He's very tall.", exampleEs: "Él es muy alto.", related: ["short"], difficulty: 1 },
          { id: "l3t8_a2", word: "slim", translation: "delgado", type: "adjective", definition: "thin in an attractive way", definitionEs: "delgado de manera atractiva", example: "She's slim and fit.", exampleEs: "Ella es delgada y en forma.", related: ["thin"], difficulty: 1 },
          { id: "l3t8_a3", word: "curly", translation: "rizado", type: "adjective", definition: "forming curves", definitionEs: "que forma curvas", example: "She has curly hair.", exampleEs: "Ella tiene cabello rizado.", related: ["straight", "wavy"], difficulty: 1 },
          { id: "l3t8_a4", word: "straight", translation: "lacio", type: "adjective", definition: "not curly", definitionEs: "no rizado", example: "He has straight black hair.", exampleEs: "Él tiene cabello negro lacio.", related: ["curly"], difficulty: 1 },
          { id: "l3t8_a5", word: "bald", translation: "calvo", type: "adjective", definition: "having no hair", definitionEs: "sin cabello", example: "My grandfather is bald.", exampleEs: "Mi abuelo es calvo.", related: [], difficulty: 1 },
          { id: "l3t8_a6", word: "friendly", translation: "amigable", type: "adjective", definition: "kind and pleasant", definitionEs: "amable y agradable", example: "She's very friendly.", exampleEs: "Ella es muy amigable.", related: [], difficulty: 1 },
          { id: "l3t8_a7", word: "outgoing", translation: "extrovertido", type: "adjective", definition: "sociable and confident", definitionEs: "sociable y confiado", example: "He's really outgoing.", exampleEs: "Él es muy extrovertido.", related: [], difficulty: 2 },
          { id: "l3t8_a8", word: "shy", translation: "tímido", type: "adjective", definition: "nervous around people", definitionEs: "nervioso con la gente", example: "She's a bit shy.", exampleEs: "Ella es un poco tímida.", related: [], difficulty: 1 },
        ],
        expressions: [
          { id: "l3t8_e1", word: "What does he/she look like?", translation: "¿Cómo es él/ella físicamente?", type: "expression", definition: "asking about appearance", definitionEs: "preguntando sobre apariencia", example: "What does your brother look like?", exampleEs: "¿Cómo es tu hermano físicamente?", related: [], difficulty: 1 },
          { id: "l3t8_e2", word: "He/She is of medium height", translation: "Él/Ella es de estatura media", type: "expression", definition: "describing average height", definitionEs: "describiendo altura promedio", example: "She's of medium height with brown hair.", exampleEs: "Ella es de estatura media con cabello marrón.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l3t8_cm1",
          wrong: "How is your friend?",
          correct: "What does your friend look like?",
          explanation: "'How is...?' pregunta por el estado de ánimo/salud. 'What does...look like?' pregunta por apariencia física."
        },
        {
          id: "l3t8_cm2",
          wrong: "She has hairs black and long.",
          correct: "She has long, black hair.",
          explanation: "'Hair' es incontable (no 'hairs'). El orden es: largo + color + sustantivo."
        },
        {
          id: "l3t8_cm3",
          wrong: "He is tall and has a beard long.",
          correct: "He is tall and has a long beard.",
          explanation: "Los adjetivos van ANTES del sustantivo en inglés: 'a long beard', no 'a beard long'."
        },
        {
          id: "l3t8_cm4",
          wrong: "She is blonde hair.",
          correct: "She has blonde hair. / She is blonde.",
          explanation: "Usamos 'have' para describir características: 'She HAS blonde hair' o simplemente 'She IS blonde'."
        },
        {
          id: "l3t8_cm5",
          wrong: "He looks his father.",
          correct: "He looks like his father.",
          explanation: "'Look like' es la expresión completa para 'parecerse a'. No olvides 'like'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las descripciones de personas:",
          items: [
            { sentence: "She ___ long, curly hair.", answer: "has", hint: "verbo para características" },
            { sentence: "What does your sister ___ like?", answer: "look", hint: "expresión de apariencia" },
            { sentence: "He's tall ___ blue eyes.", answer: "with", hint: "preposición" },
            { sentence: "She's ___ medium height.", answer: "of", hint: "estatura promedio" },
            { sentence: "He looks ___ his grandfather.", answer: "like", hint: "parecerse a" }
          ]
        },
        {
          type: "matching",
          instruction: "Une la descripción con su opuesto:",
          pairs: [
            { term: "tall", match: "short" },
            { term: "slim", match: "overweight" },
            { term: "curly hair", match: "straight hair" },
            { term: "outgoing", match: "shy" },
            { term: "young", match: "elderly" },
            { term: "dark hair", match: "blonde/fair hair" }
          ]
        },
        {
          type: "word-order",
          instruction: "Ordena las palabras para describir personas:",
          items: [
            { words: ["hair", "she", "long", "has", "brown"], answer: "She has long brown hair." },
            { words: ["like", "does", "what", "look", "he", "?"], answer: "What does he look like?" },
            { words: ["medium", "of", "is", "he", "height"], answer: "He is of medium height." },
            { words: ["wearing", "woman", "the", "glasses", "is"], answer: "The woman is wearing glasses." }
          ]
        },
        {
          type: "categorization",
          instruction: "Clasifica estos adjetivos: Apariencia Física (F) o Personalidad (P):",
          items: [
            { word: "tall", category: "F" },
            { word: "friendly", category: "P" },
            { word: "curly", category: "F" },
            { word: "shy", category: "P" },
            { word: "bald", category: "F" },
            { word: "outgoing", category: "P" },
            { word: "slim", category: "F" },
            { word: "cheerful", category: "P" }
          ]
        }
      ],
      modelDialogue: {
        title: "Describiendo a alguien para identificarlo",
        dialogue: [
          { speaker: "Amy", text: "I'm meeting my cousin at the airport. Can you help me look for her?", translation: "Voy a encontrarme con mi prima en el aeropuerto. ¿Puedes ayudarme a buscarla?" },
          { speaker: "Tom", text: "Sure! What does she look like?", translation: "¡Claro! ¿Cómo es ella físicamente?" },
          { speaker: "Amy", text: "She's about my height, maybe a bit taller. She has long, dark hair.", translation: "Es más o menos de mi estatura, quizás un poco más alta. Tiene cabello largo y oscuro." },
          { speaker: "Tom", text: "Is it curly or straight?", translation: "¿Es rizado o lacio?" },
          { speaker: "Amy", text: "Straight. And she usually wears glasses.", translation: "Lacio. Y usualmente usa lentes." },
          { speaker: "Tom", text: "What about her age? Is she older or younger than you?", translation: "¿Y su edad? ¿Es mayor o menor que tú?" },
          { speaker: "Amy", text: "She's in her mid-twenties. Oh, and she's quite slim.", translation: "Está a mediados de sus veintes. Ah, y es bastante delgada." },
          { speaker: "Tom", text: "What's she like as a person? Is she friendly?", translation: "¿Cómo es ella como persona? ¿Es amigable?" },
          { speaker: "Amy", text: "Very! She's really outgoing and fun to be around.", translation: "¡Mucho! Es muy extrovertida y divertido estar con ella." },
          { speaker: "Tom", text: "Look! Is that her? The tall woman with long dark hair and glasses?", translation: "¡Mira! ¿Es ella? ¿La mujer alta con cabello largo oscuro y lentes?" },
          { speaker: "Amy", text: "Yes, that's her! Thanks for helping me spot her!", translation: "¡Sí, es ella! ¡Gracias por ayudarme a encontrarla!" }
        ],
        keyPhrases: [
          "What does she look like?",
          "She's about my height",
          "She has long, dark hair",
          "She usually wears glasses",
          "What's she like as a person?"
        ]
      },
      pronunciationFocus: {
        title: "Sonidos en descripciones físicas",
        sounds: [
          { sound: "/eɪ/", examples: ["face", "wavy", "straight"], tip: "Diptongo común en palabras de apariencia" },
          { sound: "/aɪ/", examples: ["height", "eye", "slim"], tip: "Otro diptongo frecuente" },
          { sound: "Terminación -ly", examples: ["friendly", "curly", "elderly"], tip: "Se pronuncia /li/, no /lai/" }
        ],
        commonErrors: [
          { word: "height", wrong: "/heit/", right: "/haɪt/", note: "El 'eig' suena como 'ai'" },
          { word: "beard", wrong: "/bi-erd/", right: "/bɪəd/", note: "Una sílaba, no dos" },
          { word: "bald", wrong: "/bald/", right: "/bɔːld/", note: "La 'a' suena como 'o'" }
        ]
      },
      culturalNote: {
        title: "Describir personas en diferentes culturas",
        content: "En países angloparlantes, hay sensibilidad al describir el peso de las personas. Evita decir 'fat' (gordo) - es ofensivo. Usa 'overweight' o 'plus-size' si es necesario, aunque generalmente es mejor evitar el tema. 'Slim' es positivo, 'skinny' puede ser negativo. Para describir la edad, 'elderly' es más respetuoso que 'old'. En cuanto al cabello, 'blonde' se usa para mujeres, 'blond' para hombres, aunque 'blonde' se usa para ambos frecuentemente.",
        examples: [
          "Evitar: 'He's fat' → Preferir: 'He's a big guy' o evitar el tema",
          "Respetuoso: 'elderly woman' vs. informal/neutro: 'old lady'",
          "Para edad aproximada: 'She's in her thirties' (tiene treinta y tantos)",
          "'Fair' puede significar rubio o piel clara"
        ]
      },
      consolidationQuiz: [
        {
          question: "'What does he look like?' pregunta sobre:",
          options: ["cómo está de ánimo", "apariencia física", "personalidad", "preferencias"],
          correctAnswer: 1,
          explanation: "'What does he look like?' pregunta por apariencia física."
        },
        {
          question: "¿Cuál es el orden correcto de adjetivos?",
          options: ["hair brown long", "long hair brown", "brown long hair", "long brown hair"],
          correctAnswer: 3,
          explanation: "El orden es: tamaño/largo + color + sustantivo: 'long brown hair'."
        },
        {
          question: "'He looks like his father' significa:",
          options: ["le gusta su padre", "ve a su padre", "se parece a su padre", "busca a su padre"],
          correctAnswer: 2,
          explanation: "'Look like' significa parecerse físicamente a alguien."
        },
        {
          question: "Para describir alguien que es amigable y sociable, usamos:",
          options: ["shy", "outgoing", "bald", "slim"],
          correctAnswer: 1,
          explanation: "'Outgoing' describe a alguien sociable y extrovertido."
        },
        {
          question: "'She's in her mid-twenties' significa:",
          options: ["tiene 20 años", "tiene entre 23-27 años", "tiene más de 25", "es joven"],
          correctAnswer: 1,
          explanation: "'Mid-twenties' significa mediados de los veintes (24-26 aproximadamente)."
        },
        {
          question: "¿Qué palabra es más educada para describir a alguien mayor?",
          options: ["old", "elderly", "ancient", "aged"],
          correctAnswer: 1,
          explanation: "'Elderly' es la forma más respetuosa y educada."
        }
      ],
      guidedProduction: [
        {
          task: "Describir a un familiar",
          prompt: "Describe la apariencia física y personalidad de un familiar cercano.",
          sampleAnswer: "My mother is of medium height with short, curly brown hair. She's in her fifties and wears glasses. She's very friendly and always smiling. She looks a bit like me, especially our eyes.",
          hints: ["Describe altura y cabello", "Menciona edad aproximada", "Incluye personalidad"]
        },
        {
          task: "Identificar a alguien en una foto",
          prompt: "Describe a una persona para que otros la identifiquen en un grupo.",
          sampleAnswer: "He's the tall guy with the beard. He's wearing a blue shirt and glasses. He has short dark hair and he's standing next to the window.",
          hints: ["Da características distintivas", "Menciona ropa", "Indica ubicación"]
        },
        {
          task: "Describir a un amigo por teléfono",
          prompt: "Tu amigo va a recoger a alguien que no conoce. Descríbele a esa persona.",
          sampleAnswer: "She's quite tall, probably about 1.70m. She has long, straight blonde hair and blue eyes. She's slim and usually dresses casually. She's very outgoing, so she'll probably wave at you!",
          hints: ["Sé específico", "Incluye detalles de ropa habitual", "Menciona comportamiento"]
        },
        {
          task: "Comparar dos personas",
          prompt: "Compara la apariencia de dos hermanos o amigos.",
          sampleAnswer: "My brothers are very different. Tom is tall and slim with straight dark hair, while James is shorter and more muscular with curly hair. Tom is quiet and shy, but James is very outgoing. They don't look alike at all!",
          hints: ["Usa comparativos", "Contrasta características", "Incluye personalidad"]
        }
      ],
      connectionToPrevious: "En la lección de compras de ropa, describías cómo te quedaba la ropa. Ahora puedes describir a las personas que la usan y decir 'That color suits you!'",
      connectionToNext: "En la siguiente lección sobre planes y sugerencias, podrás describir a las personas con quienes planeas reunirte.",
      grammarTheoryIds: ['a2-comparatives-superlatives', 'a1-verb-to-be']
    },
    {
      id: 9,
      title: "Making Plans and Suggestions",
      titleEs: "Haciendo Planes y Sugerencias",
      introduction: {
        title: "📅 Haciendo Planes y Sugerencias",
        explanation: "Organizar actividades con amigos requiere saber proponer ideas, aceptar o rechazar educadamente y acordar detalles. Aprenderás expresiones útiles para la vida social.",
        keyPoints: [
          "Sugerir: 'Let's...', 'Why don't we...?', 'How about...?', 'What about...?'",
          "Aceptar: 'That sounds great!', 'Good idea!', 'I'd love to!', 'Sure, why not?'",
          "Rechazar: 'I'd love to, but...', 'Sorry, I can't', 'Maybe another time'",
          "Preguntar preferencia: 'Do you feel like...?', 'Would you like to...?'"
        ],
        examples: [
          { english: "Let's go to the cinema tonight.", spanish: "Vamos al cine esta noche.", explanation: "Sugiriendo" },
          { english: "How about meeting at 7?", spanish: "¿Qué tal si nos vemos a las 7?", explanation: "Proponiendo hora" },
          { english: "I'd love to, but I have to work.", spanish: "Me encantaría, pero tengo que trabajar.", explanation: "Rechazando educadamente" }
        ],
        tips: [
          "💡 'How about' y 'What about' van seguidos de -ing: 'How about going...?'",
          "💡 'Let's' = 'Let us' pero se usa para sugerencias, no permisos",
          "💡 Rechazar siempre con razón es más educado: 'Sorry, I can't. I have plans.'"
        ],
        whenToUse: [
          'Para organizar actividades con amigos: "Let\'s go to the cinema tonight"',
          'Para proponer horarios: "How about meeting at 7?"',
          'Para rechazar educadamente con alternativa: "I can\'t today, but how about tomorrow?"',
          'Para preguntar preferencias: "Would you like to eat out or cook at home?"'
        ],
        whenNotToUse: [
          'No uses "Let\'s" para dar órdenes → es una sugerencia, no una instrucción: "Let\'s go" = propuesta',
          'Evita "I want to..." para sugerir planes → suena egoísta: usa "How about...?" o "Why don\'t we...?"',
          'No rechaces sin dar razón → "No" solo es brusco: añade "Sorry, I can\'t because..."'
        ]
      },
      objectives: ["Hacer sugerencias", "Aceptar y rechazar invitaciones", "Coordinar planes"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l3t9_n1", word: "plan", translation: "plan", type: "noun", definition: "something you intend to do", definitionEs: "algo que pretendes hacer", example: "What are your plans for the weekend?", exampleEs: "¿Cuáles son tus planes para el fin de semana?", related: [], difficulty: 1 },
          { id: "l3t9_n2", word: "suggestion", translation: "sugerencia", type: "noun", definition: "an idea proposed", definitionEs: "una idea propuesta", example: "That's a great suggestion!", exampleEs: "¡Esa es una gran sugerencia!", related: ["suggest"], difficulty: 1 },
          { id: "l3t9_n3", word: "invitation", translation: "invitación", type: "noun", definition: "asking someone to do something", definitionEs: "pedir a alguien que haga algo", example: "Thanks for the invitation.", exampleEs: "Gracias por la invitación.", related: ["invite"], difficulty: 1 },
          { id: "l3t9_n4", word: "arrangement", translation: "acuerdo/arreglo", type: "noun", definition: "a plan made with someone", definitionEs: "un plan hecho con alguien", example: "Let me check my arrangements.", exampleEs: "Déjame revisar mis arreglos.", related: [], difficulty: 2 },
        ],
        verbs: [
          { id: "l3t9_v1", word: "suggest", translation: "sugerir", type: "verb", definition: "to propose an idea", definitionEs: "proponer una idea", example: "I suggest we leave early.", exampleEs: "Sugiero que salgamos temprano.", related: ["suggestion"], difficulty: 1 },
          { id: "l3t9_v2", word: "invite", translation: "invitar", type: "verb", definition: "to ask someone to come", definitionEs: "pedir a alguien que venga", example: "I'd like to invite you to dinner.", exampleEs: "Me gustaría invitarte a cenar.", related: ["invitation"], difficulty: 1 },
          { id: "l3t9_v3", word: "accept", translation: "aceptar", type: "verb", definition: "to say yes to something", definitionEs: "decir que sí a algo", example: "I accept your invitation.", exampleEs: "Acepto tu invitación.", related: [], difficulty: 1 },
          { id: "l3t9_v4", word: "refuse", translation: "rechazar", type: "verb", definition: "to say no to something", definitionEs: "decir que no a algo", example: "I had to refuse the offer.", exampleEs: "Tuve que rechazar la oferta.", related: [], difficulty: 2 },
          { id: "l3t9_v5", word: "arrange", translation: "organizar", type: "verb", definition: "to plan something", definitionEs: "planear algo", example: "Let's arrange a meeting.", exampleEs: "Organicemos una reunión.", related: ["arrangement"], difficulty: 2 },
        ],
        adjectives: [
          { id: "l3t9_a1", word: "free", translation: "libre", type: "adjective", definition: "not busy", definitionEs: "no ocupado", example: "Are you free tonight?", exampleEs: "¿Estás libre esta noche?", related: ["available"], difficulty: 1 },
          { id: "l3t9_a2", word: "available", translation: "disponible", type: "adjective", definition: "able to meet or do something", definitionEs: "capaz de reunirse o hacer algo", example: "I'm available on Saturday.", exampleEs: "Estoy disponible el sábado.", related: ["free"], difficulty: 1 },
        ],
        expressions: [
          { id: "l3t9_e1", word: "Let's...", translation: "Vamos a...", type: "expression", definition: "suggesting an activity", definitionEs: "sugiriendo una actividad", example: "Let's go for a walk.", exampleEs: "Vamos a dar un paseo.", related: [], difficulty: 1 },
          { id: "l3t9_e2", word: "How about...?", translation: "¿Qué tal...?", type: "expression", definition: "making a suggestion", definitionEs: "haciendo una sugerencia", example: "How about pizza tonight?", exampleEs: "¿Qué tal pizza esta noche?", related: [], difficulty: 1 },
          { id: "l3t9_e3", word: "That sounds great!", translation: "¡Eso suena genial!", type: "expression", definition: "accepting enthusiastically", definitionEs: "aceptando con entusiasmo", example: "Cinema? That sounds great!", exampleEs: "¿Cine? ¡Eso suena genial!", related: [], difficulty: 1 },
          { id: "l3t9_e4", word: "I'd love to, but...", translation: "Me encantaría, pero...", type: "expression", definition: "politely declining", definitionEs: "rechazando educadamente", example: "I'd love to, but I'm busy.", exampleEs: "Me encantaría, pero estoy ocupado.", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l3t9_cm1",
          wrong: "Let's to go to the cinema.",
          correct: "Let's go to the cinema.",
          explanation: "Después de 'Let's' va el verbo en forma base, SIN 'to': 'Let's go', no 'Let's to go'."
        },
        {
          id: "l3t9_cm2",
          wrong: "How about we go to the park?",
          correct: "How about going to the park?",
          explanation: "'How about' va seguido de verbo con -ing: 'How about going...?' o un sustantivo: 'How about pizza?'"
        },
        {
          id: "l3t9_cm3",
          wrong: "What about go for a walk?",
          correct: "What about going for a walk?",
          explanation: "'What about' también requiere -ing: 'What about going...?'"
        },
        {
          id: "l3t9_cm4",
          wrong: "I suggest to eat Italian food.",
          correct: "I suggest eating Italian food. / I suggest we eat Italian food.",
          explanation: "'Suggest' va seguido de -ing O 'that + subject + verb': 'suggest eating' o 'suggest (that) we eat'."
        },
        {
          id: "l3t9_cm5",
          wrong: "Do you want to go out? - Yes, I want.",
          correct: "Do you want to go out? - Yes, I'd love to. / Yes, I do.",
          explanation: "No decimos 'I want' solo. Usamos 'I'd love to' o 'Yes, I do'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa las sugerencias e invitaciones:",
          items: [
            { sentence: "Let's ___ for dinner tonight.", answer: "go", hint: "verbo base" },
            { sentence: "How about ___ to the beach?", answer: "going", hint: "verbo + -ing" },
            { sentence: "Are you ___ tomorrow evening?", answer: "free", hint: "disponible" },
            { sentence: "I'd love ___, but I have to work.", answer: "to", hint: "rechazar educadamente" },
            { sentence: "That ___ great! What time?", answer: "sounds", hint: "aceptar entusiastamente" }
          ]
        },
        {
          type: "matching",
          instruction: "Une las sugerencias con las respuestas apropiadas:",
          pairs: [
            { term: "Let's go to the cinema.", match: "Good idea! What film?" },
            { term: "How about pizza tonight?", match: "That sounds delicious!" },
            { term: "Would you like to come to my party?", match: "I'd love to! Thank you!" },
            { term: "Why don't we meet at 8?", match: "Perfect. See you then!" },
            { term: "Do you feel like going out?", match: "Not really. I'm tired." },
            { term: "Shall we take a taxi?", match: "Sure, why not?" }
          ]
        },
        {
          type: "transformation",
          instruction: "Transforma estas oraciones en sugerencias:",
          items: [
            { original: "We could go swimming.", transformed: "How about going swimming?" },
            { original: "We could watch a movie.", transformed: "Let's watch a movie!" },
            { original: "We could meet at 6.", transformed: "Why don't we meet at 6?" },
            { original: "We could try the new restaurant.", transformed: "What about trying the new restaurant?" }
          ]
        },
        {
          type: "categorization",
          instruction: "Clasifica: Aceptar (A) o Rechazar (R):",
          items: [
            { word: "That sounds great!", category: "A" },
            { word: "I'd love to, but I can't.", category: "R" },
            { word: "Good idea!", category: "A" },
            { word: "Sorry, I have other plans.", category: "R" },
            { word: "Sure, why not?", category: "A" },
            { word: "Maybe another time.", category: "R" },
            { word: "I'd love to!", category: "A" },
            { word: "I'm afraid I can't.", category: "R" }
          ]
        }
      ],
      modelDialogue: {
        title: "Organizando una salida de fin de semana",
        dialogue: [
          { speaker: "Maria", text: "Hey, are you free this Saturday?", translation: "Oye, ¿estás libre este sábado?" },
          { speaker: "James", text: "I think so. Why, what did you have in mind?", translation: "Creo que sí. ¿Por qué, qué tenías en mente?" },
          { speaker: "Maria", text: "How about going to the new art museum? I heard it's really good.", translation: "¿Qué tal ir al nuevo museo de arte? Escuché que es muy bueno." },
          { speaker: "James", text: "That sounds interesting! What time were you thinking?", translation: "¡Eso suena interesante! ¿A qué hora estabas pensando?" },
          { speaker: "Maria", text: "Let's meet around 11. We could have lunch afterwards.", translation: "Quedemos como a las 11. Podríamos almorzar después." },
          { speaker: "James", text: "Good idea! Where shall we meet?", translation: "¡Buena idea! ¿Dónde nos vemos?" },
          { speaker: "Maria", text: "Why don't we meet at the entrance of the museum?", translation: "¿Por qué no quedamos en la entrada del museo?" },
          { speaker: "James", text: "Perfect. Oh wait, I just remembered. I have a dentist appointment at 2.", translation: "Perfecto. Oh espera, acabo de recordar. Tengo cita con el dentista a las 2." },
          { speaker: "Maria", text: "No problem. We can do an early lunch. What about trying that new Italian place nearby?", translation: "No hay problema. Podemos almorzar temprano. ¿Qué tal probar ese nuevo restaurante italiano cerca?" },
          { speaker: "James", text: "That sounds great! So, 11 at the museum entrance, then lunch at the Italian restaurant.", translation: "¡Eso suena genial! Entonces, 11 en la entrada del museo, luego almuerzo en el restaurante italiano." },
          { speaker: "Maria", text: "Exactly! It's a plan. See you Saturday!", translation: "¡Exacto! Es un plan. ¡Nos vemos el sábado!" }
        ],
        keyPhrases: [
          "Are you free this Saturday?",
          "How about going to...?",
          "Let's meet around 11",
          "Why don't we meet at...?",
          "What about trying...?"
        ]
      },
      pronunciationFocus: {
        title: "Entonación en sugerencias y preguntas",
        sounds: [
          { sound: "Entonación ascendente", examples: ["How about pizza?↗", "Would you like to come?↗"], tip: "Las sugerencias/preguntas suben al final para sonar amigables" },
          { sound: "Contracción 'd", examples: ["I'd love to", "What'd you say?"], tip: "'d puede ser 'would' o 'had' según contexto" },
          { sound: "Shall /ʃæl/", examples: ["Shall we go?", "Shall I help?"], tip: "La 'a' suena como en 'cat', no como 'all'" }
        ],
        commonErrors: [
          { word: "suggestion", wrong: "/sug-ges-ti-on/", right: "/səˈdʒes.tʃən/", note: "La 'gg' suena como 'j'" },
          { word: "accept", wrong: "/ak-cept/", right: "/əkˈsept/", note: "Stress en segunda sílaba" },
          { word: "available", wrong: "/a-vai-la-ble/", right: "/əˈveɪ.lə.bəl/", note: "Stress en segunda sílaba" }
        ]
      },
      culturalNote: {
        title: "Haciendo planes en culturas angloparlantes",
        content: "En países angloparlantes, es muy común hacer planes con anticipación y confirmarlos cerca de la fecha. Si alguien dice 'We should get together sometime!' ('¡Deberíamos juntarnos alguna vez!'), a menudo es solo cortesía y no una invitación real. Una invitación real incluye fecha y lugar específicos. También es importante confirmar planes: 'Are we still on for Saturday?' ('¿Seguimos para el sábado?'). Cancelar a último momento se considera descortés.",
        examples: [
          "Invitación vaga (cortesía): 'We should do coffee sometime.'",
          "Invitación real: 'Would you like to have coffee on Tuesday at 3?'",
          "Confirmando: 'Just checking - are we still meeting tomorrow?'",
          "Cancelando educadamente: 'I'm really sorry, but something came up. Can we reschedule?'"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Let's' va seguido de:",
          options: ["verbo con 'to'", "verbo base", "verbo con -ing", "sustantivo"],
          correctAnswer: 1,
          explanation: "'Let's' va seguido de verbo en forma base: 'Let's go', no 'Let's to go'."
        },
        {
          question: "'How about' va seguido de:",
          options: ["verbo base", "verbo con 'to'", "verbo con -ing o sustantivo", "solo sustantivo"],
          correctAnswer: 2,
          explanation: "'How about' puede ir con -ing ('How about going') o sustantivo ('How about pizza')."
        },
        {
          question: "¿Cuál es una forma educada de rechazar una invitación?",
          options: ["No, I don't want to.", "No.", "I'd love to, but I can't.", "Maybe."],
          correctAnswer: 2,
          explanation: "'I'd love to, but...' muestra interés pero da una razón para no poder."
        },
        {
          question: "'Shall we go?' se usa para:",
          options: ["dar una orden", "hacer una sugerencia", "pedir información", "expresar obligación"],
          correctAnswer: 1,
          explanation: "'Shall we...?' es una forma de hacer sugerencias, similar a 'Let's'."
        },
        {
          question: "Para confirmar planes que ya hicieron:",
          options: ["Let's meet tomorrow", "Are we still on for tomorrow?", "Do you want to meet?", "Tomorrow is good"],
          correctAnswer: 1,
          explanation: "'Are we still on for...?' es la forma típica de confirmar planes existentes."
        },
        {
          question: "I suggest ___ Italian food.",
          options: ["to eat", "eating", "eat", "for eating"],
          correctAnswer: 1,
          explanation: "'Suggest' va seguido de -ing: 'I suggest eating...' o 'that we eat...'."
        }
      ],
      guidedProduction: [
        {
          task: "Proponer una salida",
          prompt: "Invita a un amigo al cine este fin de semana. Incluye qué película, día y hora.",
          sampleAnswer: "Hey, are you free on Saturday? There's a new action movie at the cinema. How about going to see it? We could go to the 7pm showing and grab dinner afterwards. What do you think?",
          hints: ["Pregunta disponibilidad", "Usa 'How about' o 'Let's'", "Sugiere hora específica"]
        },
        {
          task: "Rechazar educadamente y proponer alternativa",
          prompt: "Un amigo te invita a cenar el viernes, pero no puedes. Rechaza educadamente y sugiere otro día.",
          sampleAnswer: "I'd love to, but I'm afraid I can't make it on Friday - I have a work event. What about Saturday instead? I'm free in the evening. We could try that new Thai restaurant if you're interested!",
          hints: ["Muestra que te gustaría", "Da una razón", "Ofrece alternativa"]
        },
        {
          task: "Organizar una reunión de grupo",
          prompt: "Coordina con amigos para una fiesta de cumpleaños. Pregunta disponibilidad y haz sugerencias.",
          sampleAnswer: "Hey everyone! I'm thinking of organizing a birthday party for Ana. How about next Saturday evening? We could have it at my place or maybe rent a room at a restaurant. Let me know if you're available and which option sounds better to you!",
          hints: ["Presenta la idea", "Ofrece opciones", "Pide opiniones"]
        },
        {
          task: "Cambiar planes existentes",
          prompt: "Ya tenías planes con alguien pero necesitas cambiar la hora. Comunícalo y sugiere nueva hora.",
          sampleAnswer: "Hi! I'm sorry but I have to change our plans a bit. I can't make it at 3 anymore because my meeting got extended. Would 5 o'clock work for you instead? Or we could do it earlier, like at 12 for lunch? Let me know what works best for you.",
          hints: ["Disculpa por el cambio", "Explica brevemente", "Ofrece alternativas"]
        }
      ],
      connectionToPrevious: "Ahora puedes describir a las personas con quienes planeas reunirte usando el vocabulario de la lección anterior.",
      connectionToNext: "En la siguiente lección sobre contables e incontables, aprenderás a preguntar '¿Cuánto?' o '¿Cuántos?' al planear comidas o compras.",
      grammarTheoryIds: ['a2-going-to-vs-will', 'a2-imperatives']
    },
    {
      id: 10,
      title: "Countable and Uncountable Nouns",
      titleEs: "Sustantivos Contables e Incontables",
      introduction: {
        title: "📊 Sustantivos Contables e Incontables",
        explanation: "En inglés, algunos sustantivos se pueden contar (one apple, two apples) y otros no (water, information). Esta distinción afecta qué palabras usamos con ellos.",
        keyPoints: [
          "Contables: se pueden contar, tienen plural: 'one book, two books', 'an apple, apples'",
          "Incontables: no se cuentan, sin plural: 'water', 'information', 'advice', 'money'",
          "Con contables: 'a/an', 'many', 'few', 'a few', 'How many...?'",
          "Con incontables: 'some', 'much', 'little', 'a little', 'How much...?'",
          "Con ambos: 'some', 'any', 'a lot of', 'lots of'"
        ],
        examples: [
          { english: "How much water do you drink per day?", spanish: "¿Cuánta agua tomas al día?", explanation: "Incontable con 'how much'" },
          { english: "How many books do you have?", spanish: "¿Cuántos libros tienes?", explanation: "Contable con 'how many'" },
          { english: "I need some information about flights.", spanish: "Necesito algo de información sobre vuelos.", explanation: "Incontable con 'some'" }
        ],
        tips: [
          "💡 'Information', 'advice', 'news' son SIEMPRE incontables en inglés",
          "💡 Para hacer incontables contables, usamos medidas: 'a glass of water', 'a piece of advice'",
          "💡 'Furniture' (muebles) es incontable: 'some furniture' no 'furnitures'"
        ],
        whenToUse: [
          "Al preguntar cantidad de contables: 'How many books?', 'How many apples?'",
          "Al preguntar cantidad de incontables: 'How much water?', 'How much time?'",
          "Con sustantivos incontables: 'some information', 'a lot of advice', 'much money'",
          "Con sustantivos contables: 'many books', 'a few apples', 'several options'"
        ],
        whenNotToUse: [
          "No digas 'informations' o 'advices' → son incontables, sin plural",
          "No uses 'many' con incontables: 'How many money?' ❌ → 'How much money?' ✓"
        ]
      },
      objectives: ["Distinguir contables e incontables", "Usar cuantificadores correctamente", "Hacer preguntas de cantidad"],
      estimatedMinutes: 25,
      vocabulary: {
        nouns: [
          { id: "l3t10_n1", word: "information", translation: "información", type: "noun", definition: "facts about something (uncountable)", definitionEs: "hechos sobre algo (incontable)", example: "I need more information.", exampleEs: "Necesito más información.", related: [], difficulty: 1 },
          { id: "l3t10_n2", word: "advice", translation: "consejo", type: "noun", definition: "suggestions about what to do (uncountable)", definitionEs: "sugerencias sobre qué hacer (incontable)", example: "Can you give me some advice?", exampleEs: "¿Puedes darme algún consejo?", related: [], difficulty: 1 },
          { id: "l3t10_n3", word: "news", translation: "noticias", type: "noun", definition: "information about recent events (uncountable)", definitionEs: "información sobre eventos recientes (incontable)", example: "The news is good today.", exampleEs: "Las noticias son buenas hoy.", related: [], difficulty: 1 },
          { id: "l3t10_n4", word: "furniture", translation: "muebles", type: "noun", definition: "tables, chairs, etc. (uncountable)", definitionEs: "mesas, sillas, etc. (incontable)", example: "We bought new furniture.", exampleEs: "Compramos muebles nuevos.", related: [], difficulty: 2 },
          { id: "l3t10_n5", word: "luggage", translation: "equipaje", type: "noun", definition: "bags for travel (uncountable)", definitionEs: "maletas para viaje (incontable)", example: "Your luggage is heavy.", exampleEs: "Tu equipaje está pesado.", related: [], difficulty: 1 },
          { id: "l3t10_n6", word: "progress", translation: "progreso", type: "noun", definition: "improvement (uncountable)", definitionEs: "mejora (incontable)", example: "You're making good progress.", exampleEs: "Estás haciendo buen progreso.", related: [], difficulty: 2 },
        ],
        verbs: [],
        adjectives: [
          { id: "l3t10_a1", word: "much", translation: "mucho (incontable)", type: "adjective", definition: "a large amount", definitionEs: "una gran cantidad", example: "I don't have much time.", exampleEs: "No tengo mucho tiempo.", related: ["many"], difficulty: 1 },
          { id: "l3t10_a2", word: "many", translation: "muchos (contable)", type: "adjective", definition: "a large number", definitionEs: "un gran número", example: "There are many students.", exampleEs: "Hay muchos estudiantes.", related: ["much"], difficulty: 1 },
          { id: "l3t10_a3", word: "few", translation: "pocos", type: "adjective", definition: "a small number", definitionEs: "un pequeño número", example: "Few people came to the party.", exampleEs: "Pocas personas vinieron a la fiesta.", related: ["little"], difficulty: 1 },
          { id: "l3t10_a4", word: "little", translation: "poco (incontable)", type: "adjective", definition: "a small amount", definitionEs: "una pequeña cantidad", example: "There's little water left.", exampleEs: "Queda poca agua.", related: ["few"], difficulty: 1 },
        ],
        expressions: [
          { id: "l3t10_e1", word: "How much...?", translation: "¿Cuánto/a...?", type: "expression", definition: "asking about quantity (uncountable)", definitionEs: "preguntando sobre cantidad (incontable)", example: "How much money do you need?", exampleEs: "¿Cuánto dinero necesitas?", related: [], difficulty: 1 },
          { id: "l3t10_e2", word: "How many...?", translation: "¿Cuántos/as...?", type: "expression", definition: "asking about number (countable)", definitionEs: "preguntando sobre número (contable)", example: "How many apples do you want?", exampleEs: "¿Cuántas manzanas quieres?", related: [], difficulty: 1 },
          { id: "l3t10_e3", word: "a lot of / lots of", translation: "mucho/muchos", type: "expression", definition: "used with both types", definitionEs: "usado con ambos tipos", example: "There's a lot of food.", exampleEs: "Hay mucha comida.", related: [], difficulty: 1 },
          { id: "l3t10_e4", word: "a piece of", translation: "una pieza de", type: "expression", definition: "making uncountable countable", definitionEs: "haciendo incontable contable", example: "Can I have a piece of advice?", exampleEs: "¿Puedo tener un consejo?", related: [], difficulty: 1 },
        ],
        adverbs: [],
        prepositions: [],
      },
      commonMistakes: [
        {
          id: "l3t10_cm1",
          wrong: "I need some informations about the course.",
          correct: "I need some information about the course.",
          explanation: "'Information' es SIEMPRE incontable en inglés. No existe 'informations'."
        },
        {
          id: "l3t10_cm2",
          wrong: "She gave me many advices.",
          correct: "She gave me a lot of advice. / She gave me several pieces of advice.",
          explanation: "'Advice' es incontable. Usa 'pieces of advice' para contarlo."
        },
        {
          id: "l3t10_cm3",
          wrong: "The news are bad today.",
          correct: "The news is bad today.",
          explanation: "'News' parece plural pero es SINGULAR: 'The news is...', no 'The news are...'."
        },
        {
          id: "l3t10_cm4",
          wrong: "I bought new furnitures for my apartment.",
          correct: "I bought new furniture for my apartment.",
          explanation: "'Furniture' es incontable. Para especificar: 'pieces of furniture' o nombra los muebles."
        },
        {
          id: "l3t10_cm5",
          wrong: "How many money do you have?",
          correct: "How much money do you have?",
          explanation: "'Money' es incontable, usa 'How much', no 'How many'."
        }
      ],
      exercises: [
        {
          type: "fill-blanks",
          instruction: "Completa con 'much' o 'many':",
          items: [
            { sentence: "How ___ students are in your class?", answer: "many", hint: "contable" },
            { sentence: "I don't have ___ time today.", answer: "much", hint: "incontable" },
            { sentence: "How ___ water do you drink per day?", answer: "much", hint: "incontable" },
            { sentence: "There are too ___ cars in this city.", answer: "many", hint: "contable" },
            { sentence: "We don't have ___ information yet.", answer: "much", hint: "incontable" }
          ]
        },
        {
          type: "categorization",
          instruction: "Clasifica: Contable (C) o Incontable (U):",
          items: [
            { word: "apple", category: "C" },
            { word: "water", category: "U" },
            { word: "information", category: "U" },
            { word: "book", category: "C" },
            { word: "furniture", category: "U" },
            { word: "advice", category: "U" },
            { word: "student", category: "C" },
            { word: "money", category: "U" },
            { word: "luggage", category: "U" },
            { word: "suitcase", category: "C" }
          ]
        },
        {
          type: "error-correction",
          instruction: "Corrige los errores en estas oraciones:",
          items: [
            { incorrect: "I have many homeworks to do.", corrected: "I have a lot of homework to do." },
            { incorrect: "Can you give me an advice?", corrected: "Can you give me some advice? / a piece of advice?" },
            { incorrect: "The news are interesting today.", corrected: "The news is interesting today." },
            { incorrect: "How many bread do we need?", corrected: "How much bread do we need?" }
          ]
        },
        {
          type: "fill-blanks",
          instruction: "Completa con 'a few', 'few', 'a little', 'little':",
          items: [
            { sentence: "I have ___ friends in this city - I'm quite lonely.", answer: "few", hint: "negativo, contable" },
            { sentence: "I have ___ money left, enough for a coffee.", answer: "a little", hint: "positivo, incontable" },
            { sentence: "There are ___ good restaurants here - maybe 3 or 4.", answer: "a few", hint: "positivo, contable" },
            { sentence: "We have ___ time, we need to hurry.", answer: "little", hint: "negativo, incontable" }
          ]
        }
      ],
      modelDialogue: {
        title: "En el supermercado - Lista de compras",
        dialogue: [
          { speaker: "Mom", text: "Okay, let's check the shopping list. How much milk do we need?", translation: "Bien, revisemos la lista de compras. ¿Cuánta leche necesitamos?" },
          { speaker: "Tom", text: "We need two bottles. And how many eggs?", translation: "Necesitamos dos botellas. ¿Y cuántos huevos?" },
          { speaker: "Mom", text: "A dozen. Do we have much bread at home?", translation: "Una docena. ¿Tenemos mucho pan en casa?" },
          { speaker: "Tom", text: "No, there's little bread left. We should get a loaf.", translation: "No, queda poco pan. Deberíamos comprar una barra." },
          { speaker: "Mom", text: "Good idea. What about rice? How much rice do we have?", translation: "Buena idea. ¿Y arroz? ¿Cuánto arroz tenemos?" },
          { speaker: "Tom", text: "We have some, but let's get another bag. And we need a few apples.", translation: "Tenemos algo, pero compremos otra bolsa. Y necesitamos algunas manzanas." },
          { speaker: "Mom", text: "How many? Six?", translation: "¿Cuántas? ¿Seis?" },
          { speaker: "Tom", text: "Yes, about six. Oh, and we're running low on sugar.", translation: "Sí, como seis. Ah, y nos estamos quedando sin azúcar." },
          { speaker: "Mom", text: "Right, a bag of sugar then. Any other information on the list?", translation: "Correcto, una bolsa de azúcar entonces. ¿Alguna otra información en la lista?" },
          { speaker: "Tom", text: "Just some cheese and a bottle of olive oil.", translation: "Solo algo de queso y una botella de aceite de oliva." }
        ],
        keyPhrases: [
          "How much milk/bread/sugar?",
          "How many eggs/apples?",
          "a few apples (some, positive)",
          "little bread left (not enough, negative)",
          "a loaf of bread, a bag of sugar, a bottle of oil"
        ]
      },
      pronunciationFocus: {
        title: "Palabras con pronunciación engañosa",
        sounds: [
          { sound: "/juː/", examples: ["few /fjuː/", "view /vjuː/"], tip: "'Few' rima con 'view' y 'new'" },
          { sound: "Silent letters", examples: ["knowledge", "listen"], tip: "La 'k' en 'knowledge' es muda" },
          { sound: "/ʌ/", examples: ["much", "money", "some"], tip: "Sonido corto, como en 'cup'" }
        ],
        commonErrors: [
          { word: "furniture", wrong: "/fur-ni-ture/", right: "/ˈfɜː.nɪ.tʃər/", note: "La 'i' casi no se pronuncia" },
          { word: "luggage", wrong: "/lu-ga-ye/", right: "/ˈlʌɡ.ɪdʒ/", note: "La 'u' suena como 'a'" },
          { word: "advice", wrong: "/ad-vi-ce/", right: "/ədˈvaɪs/", note: "La 'c' suena como 's'" }
        ]
      },
      culturalNote: {
        title: "Medidas y expresiones de cantidad en el mundo angloparlante",
        content: "Los países angloparlantes usan diferentes sistemas de medida. EE.UU. usa el sistema imperial (gallons, pounds, ounces), mientras UK usa una mezcla. Para comida: 'a loaf of bread' (barra de pan), 'a dozen eggs' (docena de huevos), 'a pint of beer' (pinta de cerveza ≈ 473ml en US, 568ml en UK). En supermercados, los productos se venden por 'pack', 'bag', 'bottle', 'can', 'carton', 'box'. Es útil conocer estas expresiones.",
        examples: [
          "'A carton of milk' - cartón de leche",
          "'A can of soda' - lata de refresco",
          "'A jar of jam' - frasco de mermelada",
          "'A bunch of bananas' - racimo de bananas",
          "'A head of lettuce' - una lechuga"
        ]
      },
      consolidationQuiz: [
        {
          question: "'Information' es:",
          options: ["contable", "incontable", "ambos", "depende del contexto"],
          correctAnswer: 1,
          explanation: "'Information' es SIEMPRE incontable. No existe 'informations'."
        },
        {
          question: "Para sustantivos incontables usamos:",
          options: ["How many?", "How much?", "How few?", "How several?"],
          correctAnswer: 1,
          explanation: "'How much?' se usa con incontables: 'How much water/money/time?'"
        },
        {
          question: "'Few' vs 'a few': 'I have ___ friends' (tengo algunos):",
          options: ["few", "a few", "little", "a little"],
          correctAnswer: 1,
          explanation: "'A few' = algunos (positivo). 'Few' = muy pocos (negativo)."
        },
        {
          question: "'The news ___ good today.'",
          options: ["is", "are", "was being", "were"],
          correctAnswer: 0,
          explanation: "'News' es singular aunque termine en 's': 'The news IS...'"
        },
        {
          question: "Para contar 'advice' decimos:",
          options: ["two advices", "two advice", "two pieces of advice", "two advise"],
          correctAnswer: 2,
          explanation: "Usamos 'pieces of' para contar incontables: 'two pieces of advice'."
        },
        {
          question: "'I don't have ___ time' (muy poco tiempo, negativo):",
          options: ["many", "few", "a little", "much"],
          correctAnswer: 3,
          explanation: "'Much' con incontables en negativo: 'I don't have much time'."
        }
      ],
      guidedProduction: [
        {
          task: "Hacer una lista de compras",
          prompt: "Escribe una lista de compras usando cuantificadores correctos (some, a few, a little, etc.).",
          sampleAnswer: "Shopping list: We need some milk, a loaf of bread, a few eggs (about six), some cheese, a little butter, a bag of rice, and a bunch of bananas. We don't have much sugar left either.",
          hints: ["Usa 'some' para incontables y contables", "Especifica cantidades con contenedores", "Usa 'a few' para contables"]
        },
        {
          task: "Describir lo que hay en tu cocina",
          prompt: "Describe qué comida tienes en casa usando there is/are con cuantificadores.",
          sampleAnswer: "There's a lot of rice in the cupboard, but there's little pasta left. There are a few apples and some oranges in the fruit bowl. I have some milk, but I don't have much cheese. There are many cans of soup, but not much bread.",
          hints: ["Usa 'there is' con incontables", "Usa 'there are' con contables", "Incluye positivos y negativos"]
        },
        {
          task: "Preguntar sobre cantidades",
          prompt: "Escribe preguntas para tu compañero de cuarto sobre lo que necesitan comprar.",
          sampleAnswer: "How much coffee do we have? How many eggs are left? Is there any milk in the fridge? Do we have much bread? How many apples should I buy? Do we need any sugar?",
          hints: ["Alterna 'how much' y 'how many'", "Incluye 'any' en preguntas", "Sé específico"]
        },
        {
          task: "Comparar disponibilidad",
          prompt: "Compara lo que tienes 'mucho de' versus lo que tienes 'poco de' en tu casa.",
          sampleAnswer: "At home, we have a lot of books and many photos on the walls. There's lots of coffee because my mom loves it! But we have little space for furniture. There are few plants - I'd like more. We don't have much storage either.",
          hints: ["Usa 'a lot of' y 'lots of' para positivo", "Usa 'little/few' para negativo", "Mezcla contables e incontables"]
        }
      ],
      connectionToPrevious: "Al hacer planes y sugerencias en la lección anterior, ahora puedes especificar cantidades: 'How much pizza should we order?' '¿Cuánta pizza deberíamos pedir?'",
      connectionToNext: "Has completado el Level 3 Pre-Intermediate. En el siguiente nivel, avanzarás a contenido Intermediate con estructuras más complejas.",
      grammarTheoryIds: ['a2-countable-uncountable', 'a2-question-formation', 'b1-quantifiers']
    },
  ]
};

export default level3;
