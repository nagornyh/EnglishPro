// Idioms & Expresiones Idiomáticas en Inglés
// Frases que solo tienen sentido en inglés y no se pueden traducir literalmente

export interface Idiom {
  id: string;
  idiom: string;
  literalMeaning: string; // Traducción literal (para mostrar que no tiene sentido)
  actualMeaning: string;
  meaningEs: string;
  example: string;
  exampleEs: string;
  origin?: string;
  category: 'work' | 'emotions' | 'time' | 'money' | 'relationships' | 'success' | 'failure' | 'body' | 'animals' | 'food' | 'weather' | 'general';
  level: number;
  commonIn: ('spoken' | 'written' | 'business' | 'informal')[];
}

export const idioms: Idiom[] = [
  // === TRABAJO Y NEGOCIOS ===
  {
    id: 'idiom-001',
    idiom: 'Break the ice',
    literalMeaning: 'Romper el hielo',
    actualMeaning: 'To start a conversation in a social situation',
    meaningEs: 'Iniciar una conversación en una situación social incómoda',
    example: 'I told a joke to break the ice at the meeting.',
    exampleEs: 'Conté un chiste para romper el hielo en la reunión.',
    origin: 'From the practice of breaking ice to allow ships to pass; extended to social situations',
    category: 'relationships',
    level: 3,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-002',
    idiom: 'Think outside the box',
    literalMeaning: 'Pensar fuera de la caja',
    actualMeaning: 'To think creatively and unconventionally',
    meaningEs: 'Pensar de manera creativa y no convencional',
    example: 'We need to think outside the box to solve this problem.',
    exampleEs: 'Necesitamos pensar de manera creativa para resolver este problema.',
    origin: 'Management consulting jargon from the 1970s — the "box" represents conventional limits',
    category: 'work',
    level: 4,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-003',
    idiom: 'Get the ball rolling',
    literalMeaning: 'Hacer rodar la pelota',
    actualMeaning: 'To start a process or activity',
    meaningEs: 'Poner en marcha algo, iniciar un proceso',
    example: 'Let\'s get the ball rolling with the first presentation.',
    exampleEs: 'Comencemos con la primera presentación.',
    origin: 'From sports — getting the ball rolling starts the game',
    category: 'work',
    level: 4,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-004',
    idiom: 'Hands are tied',
    literalMeaning: 'Manos están atadas',
    actualMeaning: 'Unable to act freely due to restrictions',
    meaningEs: 'No poder actuar libremente debido a restricciones',
    example: 'I\'d like to help, but my hands are tied.',
    exampleEs: 'Me gustaría ayudar, pero no puedo hacer nada.',
    origin: 'Metaphor for being bound or restricted, like having hands literally tied',
    category: 'work',
    level: 4,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-005',
    idiom: 'In the same boat',
    literalMeaning: 'En el mismo barco',
    actualMeaning: 'In the same difficult situation',
    meaningEs: 'En la misma situación difícil',
    example: 'We\'re all in the same boat with these budget cuts.',
    exampleEs: 'Todos estamos en la misma situación con estos recortes.',
    origin: 'Nautical — passengers in a boat share the same fate in a storm',
    category: 'work',
    level: 3,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-006',
    idiom: 'Back to square one',
    literalMeaning: 'Volver al cuadrado uno',
    actualMeaning: 'To start over from the beginning',
    meaningEs: 'Volver a empezar desde el principio',
    example: 'The client rejected the proposal, so we\'re back to square one.',
    exampleEs: 'El cliente rechazó la propuesta, así que volvemos a empezar.',
    origin: 'From board games — players sent back to the first square after a penalty',
    category: 'work',
    level: 4,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-007',
    idiom: 'Cut corners',
    literalMeaning: 'Cortar esquinas',
    actualMeaning: 'To do something in the easiest or cheapest way, often sacrificing quality',
    meaningEs: 'Tomar atajos, ahorrar de manera que afecta la calidad',
    example: 'Don\'t cut corners on safety procedures.',
    exampleEs: 'No te saltes los procedimientos de seguridad.',
    origin: 'From carpentry — cutting corners instead of proper mitres saves time but weakens joints',
    category: 'work',
    level: 5,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-008',
    idiom: 'The bottom line',
    literalMeaning: 'La línea de abajo',
    actualMeaning: 'The most important factor; the final result',
    meaningEs: 'Lo más importante; el resultado final',
    example: 'The bottom line is we need to increase sales.',
    exampleEs: 'Lo más importante es que necesitamos aumentar las ventas.',
    origin: 'From accounting — the bottom line of a financial statement shows net profit',
    category: 'work',
    level: 5,
    commonIn: ['spoken', 'business', 'written']
  },
  {
    id: 'idiom-009',
    idiom: 'Touch base',
    literalMeaning: 'Tocar base',
    actualMeaning: 'To make contact or communicate briefly',
    meaningEs: 'Hacer contacto o comunicarse brevemente',
    example: 'Let\'s touch base next week about the project.',
    exampleEs: 'Hablemos la próxima semana sobre el proyecto.',
    origin: 'From baseball — runners touch base to be safe; extended to brief contact in business',
    category: 'work',
    level: 5,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-010',
    idiom: 'Burn the midnight oil',
    literalMeaning: 'Quemar el aceite de medianoche',
    actualMeaning: 'To work late into the night',
    meaningEs: 'Trabajar hasta muy tarde en la noche',
    example: 'I had to burn the midnight oil to finish the report.',
    exampleEs: 'Tuve que trabajar hasta tarde para terminar el informe.',
    origin: 'Before electricity, people used oil lamps to work at night',
    category: 'work',
    level: 5,
    commonIn: ['spoken', 'informal']
  },

  // === EMOCIONES ===
  {
    id: 'idiom-011',
    idiom: 'On cloud nine',
    literalMeaning: 'En la nube nueve',
    actualMeaning: 'Extremely happy',
    meaningEs: 'Extremadamente feliz, en las nubes',
    example: 'She\'s been on cloud nine since she got the job.',
    exampleEs: 'Ha estado felicísima desde que consiguió el trabajo.',
    origin: 'From cloud classification — the ninth cloud was considered the highest and most blissful',
    category: 'emotions',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-012',
    idiom: 'Under the weather',
    literalMeaning: 'Bajo el clima',
    actualMeaning: 'Feeling ill or sick',
    meaningEs: 'Sentirse enfermo o mal',
    example: 'I\'m feeling a bit under the weather today.',
    exampleEs: 'Me siento un poco mal hoy.',
    origin: 'From nautical terminology - sick sailors were sent below deck',
    category: 'emotions',
    level: 3,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-013',
    idiom: 'Hit the roof',
    literalMeaning: 'Golpear el techo',
    actualMeaning: 'To become very angry',
    meaningEs: 'Ponerse muy furioso',
    example: 'Dad hit the roof when he saw my grades.',
    exampleEs: 'Papá se puso furioso cuando vio mis notas.',
    origin: 'Metaphor for explosive anger — hitting the roof suggests the ceiling cannot contain it',
    category: 'emotions',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-014',
    idiom: 'Bite the bullet',
    literalMeaning: 'Morder la bala',
    actualMeaning: 'To endure a painful situation with courage',
    meaningEs: 'Aguantar una situación difícil con valentía',
    example: 'I had to bite the bullet and tell her the truth.',
    exampleEs: 'Tuve que armarme de valor y decirle la verdad.',
    origin: 'Soldiers bit bullets during surgery without anesthesia',
    category: 'emotions',
    level: 5,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-015',
    idiom: 'Spill the beans',
    literalMeaning: 'Derramar los frijoles',
    actualMeaning: 'To reveal a secret',
    meaningEs: 'Revelar un secreto',
    example: 'Who spilled the beans about the surprise party?',
    exampleEs: '¿Quién reveló lo de la fiesta sorpresa?',
    origin: 'Ancient Greece — votes were cast with beans; spilling them revealed the result prematurely',
    category: 'emotions',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-016',
    idiom: 'Get something off your chest',
    literalMeaning: 'Sacarte algo del pecho',
    actualMeaning: 'To talk about something that has been bothering you',
    meaningEs: 'Hablar sobre algo que te ha estado molestando',
    example: 'I need to get something off my chest.',
    exampleEs: 'Necesito desahogarme.',
    origin: 'Metaphor — emotional burden weighs on the chest; speaking relieves the pressure',
    category: 'emotions',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-017',
    idiom: 'Down in the dumps',
    literalMeaning: 'Abajo en los basureros',
    actualMeaning: 'Feeling sad or depressed',
    meaningEs: 'Sentirse triste o deprimido',
    example: 'He\'s been down in the dumps since the breakup.',
    exampleEs: 'Ha estado muy deprimido desde la ruptura.',
    origin: '"Dumps" meant a dull, gloomy state; the phrase suggests being low like in a rubbish heap',
    category: 'emotions',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-018',
    idiom: 'Keep your chin up',
    literalMeaning: 'Mantén tu barbilla arriba',
    actualMeaning: 'Stay positive in difficult times',
    meaningEs: 'Mantente positivo en tiempos difíciles',
    example: 'Keep your chin up! Things will get better.',
    exampleEs: '¡Ánimo! Las cosas mejorarán.',
    origin: 'Body posture — keeping chin up prevents a defeated, downcast appearance',
    category: 'emotions',
    level: 3,
    commonIn: ['spoken', 'informal']
  },

  // === TIEMPO ===
  {
    id: 'idiom-019',
    idiom: 'Once in a blue moon',
    literalMeaning: 'Una vez en una luna azul',
    actualMeaning: 'Very rarely',
    meaningEs: 'Muy rara vez',
    example: 'I only eat fast food once in a blue moon.',
    exampleEs: 'Solo como comida rápida de vez en cuando.',
    origin: 'A blue moon is the second full moon in a calendar month, which is rare',
    category: 'time',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-020',
    idiom: 'Beat around the bush',
    literalMeaning: 'Golpear alrededor del arbusto',
    actualMeaning: 'To avoid talking directly about a topic',
    meaningEs: 'Andarse con rodeos, no ir al grano',
    example: 'Stop beating around the bush and tell me what happened.',
    exampleEs: 'Deja de andar con rodeos y dime qué pasó.',
    origin: 'From hunting - beating bushes to flush out game',
    category: 'time',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-021',
    idiom: 'In the nick of time',
    literalMeaning: 'En la muesca del tiempo',
    actualMeaning: 'Just in time; at the last possible moment',
    meaningEs: 'Justo a tiempo',
    example: 'We arrived in the nick of time to catch the train.',
    exampleEs: 'Llegamos justo a tiempo para coger el tren.',
    origin: 'From "nick" meaning a notch — the last notch on a tally stick before it\'s too late',
    category: 'time',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-022',
    idiom: 'Time flies',
    literalMeaning: 'El tiempo vuela',
    actualMeaning: 'Time passes quickly',
    meaningEs: 'El tiempo pasa rápido',
    example: 'Time flies when you\'re having fun.',
    exampleEs: 'El tiempo vuela cuando te diviertes.',
    origin: 'Latin "tempus fugit" — time flies; ancient observation that pleasant moments pass quickly',
    category: 'time',
    level: 2,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-023',
    idiom: 'Call it a day',
    literalMeaning: 'Llamarlo un día',
    actualMeaning: 'To stop working on something',
    meaningEs: 'Dejar de trabajar, dar por terminado el día',
    example: 'Let\'s call it a day and continue tomorrow.',
    exampleEs: 'Dejémoslo aquí y continuemos mañana.',
    origin: 'From work — calling it a day meant declaring the workday finished',
    category: 'time',
    level: 4,
    commonIn: ['spoken', 'business', 'informal']
  },

  // === DINERO ===
  {
    id: 'idiom-024',
    idiom: 'Break the bank',
    literalMeaning: 'Romper el banco',
    actualMeaning: 'To cost a lot of money',
    meaningEs: 'Costar mucho dinero',
    example: 'This gift won\'t break the bank.',
    exampleEs: 'Este regalo no te arruinará.',
    origin: 'From gambling — breaking the bank meant winning more than the house could pay',
    category: 'money',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-025',
    idiom: 'Cost an arm and a leg',
    literalMeaning: 'Costar un brazo y una pierna',
    actualMeaning: 'To be very expensive',
    meaningEs: 'Ser muy caro',
    example: 'That car cost me an arm and a leg.',
    exampleEs: 'Ese carro me costó un ojo de la cara.',
    origin: 'Painters charged extra for portraits — arms and legs were expensive to paint',
    category: 'money',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-026',
    idiom: 'Make ends meet',
    literalMeaning: 'Hacer que los extremos se encuentren',
    actualMeaning: 'To have just enough money to live on',
    meaningEs: 'Llegar a fin de mes con lo justo',
    example: 'With prices rising, it\'s hard to make ends meet.',
    exampleEs: 'Con los precios subiendo, es difícil llegar a fin de mes.',
    origin: 'From budgeting — making income and expenses "meet" at the ends of the ledger',
    category: 'money',
    level: 5,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-027',
    idiom: 'Put money aside',
    literalMeaning: 'Poner dinero a un lado',
    actualMeaning: 'To save money for future use',
    meaningEs: 'Ahorrar dinero para el futuro',
    example: 'I try to put money aside every month.',
    exampleEs: 'Intento ahorrar algo de dinero cada mes.',
    origin: 'Literal — physically setting money apart for future use; extended to any form of saving',
    category: 'money',
    level: 3,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-028',
    idiom: 'Money doesn\'t grow on trees',
    literalMeaning: 'El dinero no crece en los árboles',
    actualMeaning: 'Money is not easily obtained',
    meaningEs: 'El dinero no es fácil de conseguir',
    example: 'You can\'t buy everything - money doesn\'t grow on trees!',
    exampleEs: 'No puedes comprar todo - ¡el dinero no crece en los árboles!',
    origin: 'Proverbial wisdom — unlike fruit, money requires effort to obtain and is finite',
    category: 'money',
    level: 3,
    commonIn: ['spoken', 'informal']
  },

  // === ÉXITO Y FRACASO ===
  {
    id: 'idiom-029',
    idiom: 'Hit the nail on the head',
    literalMeaning: 'Golpear el clavo en la cabeza',
    actualMeaning: 'To be exactly right about something',
    meaningEs: 'Dar en el clavo, acertar completamente',
    example: 'You hit the nail on the head with that analysis.',
    exampleEs: 'Diste en el clavo con ese análisis.',
    origin: 'From carpentry — hitting the nail head directly drives it in correctly',
    category: 'success',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-030',
    idiom: 'Miss the boat',
    literalMeaning: 'Perder el barco',
    actualMeaning: 'To miss an opportunity',
    meaningEs: 'Perder una oportunidad',
    example: 'If you don\'t apply now, you\'ll miss the boat.',
    exampleEs: 'Si no aplicas ahora, perderás la oportunidad.',
    origin: 'Nautical — missing the departure of a ship meant losing the chance to travel',
    category: 'failure',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-031',
    idiom: 'A piece of cake',
    literalMeaning: 'Un pedazo de pastel',
    actualMeaning: 'Something very easy',
    meaningEs: 'Algo muy fácil (pan comido)',
    example: 'The exam was a piece of cake.',
    exampleEs: 'El examen fue pan comido.',
    origin: 'Slave-era US — winning a cake at a contest was easy; cake walks were simple games',
    category: 'success',
    level: 3,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-032',
    idiom: 'Go the extra mile',
    literalMeaning: 'Ir la milla extra',
    actualMeaning: 'To make more effort than expected',
    meaningEs: 'Hacer un esfuerzo extra',
    example: 'She always goes the extra mile for her clients.',
    exampleEs: 'Ella siempre hace un esfuerzo extra por sus clientes.',
    origin: 'Biblical — Jesus said to go a second mile when forced to go one (Matthew 5:41)',
    category: 'success',
    level: 4,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-033',
    idiom: 'The ball is in your court',
    literalMeaning: 'La pelota está en tu cancha',
    actualMeaning: 'It\'s your turn to take action',
    meaningEs: 'Es tu turno de actuar',
    example: 'I\'ve made my offer - the ball is in your court.',
    exampleEs: 'He hecho mi oferta - ahora te toca a ti.',
    origin: 'From tennis — the ball in your court means it\'s your turn to respond',
    category: 'success',
    level: 5,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-034',
    idiom: 'Throw in the towel',
    literalMeaning: 'Tirar la toalla',
    actualMeaning: 'To give up or admit defeat',
    meaningEs: 'Rendirse, tirar la toalla',
    example: 'After three attempts, I threw in the towel.',
    exampleEs: 'Después de tres intentos, me rendí.',
    origin: 'From boxing - a trainer throws a towel to stop a fight',
    category: 'failure',
    level: 4,
    commonIn: ['spoken', 'informal']
  },

  // === CUERPO ===
  {
    id: 'idiom-035',
    idiom: 'Keep an eye on',
    literalMeaning: 'Mantener un ojo en',
    actualMeaning: 'To watch or monitor something',
    meaningEs: 'Vigilar algo, estar pendiente de',
    example: 'Can you keep an eye on my bag?',
    exampleEs: '¿Puedes vigilar mi bolsa?',
    origin: 'Literal — keeping an eye on something means watching it closely',
    category: 'body',
    level: 3,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-036',
    idiom: 'Give someone the cold shoulder',
    literalMeaning: 'Dar a alguien el hombro frío',
    actualMeaning: 'To ignore someone deliberately',
    meaningEs: 'Ignorar a alguien deliberadamente',
    example: 'She gave me the cold shoulder at the party.',
    exampleEs: 'Me ignoró completamente en la fiesta.',
    origin: 'Medieval custom — cold meat (shoulder) was served to unwelcome guests',
    category: 'body',
    level: 5,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-037',
    idiom: 'Add fuel to the fire',
    literalMeaning: 'Añadir combustible al fuego',
    actualMeaning: 'To make a bad situation worse',
    meaningEs: 'Empeorar una situación ya mala',
    example: 'His angry response just added fuel to the fire.',
    exampleEs: 'Su respuesta enfadada solo echó leña al fuego.',
    origin: 'Literal — adding fuel makes fire burn stronger; extended to worsening conflicts',
    category: 'emotions',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-038',
    idiom: 'Put your foot in your mouth',
    literalMeaning: 'Poner tu pie en tu boca',
    actualMeaning: 'To say something embarrassing or inappropriate',
    meaningEs: 'Decir algo vergonzoso o inapropiado (meter la pata)',
    example: 'I really put my foot in my mouth when I mentioned her ex.',
    exampleEs: 'Realmente metí la pata cuando mencioné a su ex.',
    origin: 'Metaphor — putting foot in mouth suggests saying something you immediately regret',
    category: 'body',
    level: 5,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-039',
    idiom: 'Play it by ear',
    literalMeaning: 'Tocarlo de oído',
    actualMeaning: 'To decide what to do as a situation develops',
    meaningEs: 'Improvisar según la situación',
    example: 'I don\'t have a plan - I\'ll just play it by ear.',
    exampleEs: 'No tengo un plan - simplemente improvisaré.',
    origin: 'From music — playing by ear means performing without sheet music, relying on listening',
    category: 'body',
    level: 4,
    commonIn: ['spoken', 'informal']
  },

  // === ANIMALES ===
  {
    id: 'idiom-040',
    idiom: 'Let the cat out of the bag',
    literalMeaning: 'Dejar salir al gato de la bolsa',
    actualMeaning: 'To reveal a secret accidentally',
    meaningEs: 'Revelar un secreto accidentalmente',
    example: 'Who let the cat out of the bag about the promotion?',
    exampleEs: '¿Quién reveló lo del ascenso?',
    origin: 'Medieval markets — sellers sometimes swapped a pig for a cat in a bag; revealing the cat exposed the cheat',
    category: 'animals',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-041',
    idiom: 'Kill two birds with one stone',
    literalMeaning: 'Matar dos pájaros de un tiro',
    actualMeaning: 'To accomplish two things with one action',
    meaningEs: 'Lograr dos cosas con una sola acción',
    example: 'By working from home, I kill two birds with one stone.',
    exampleEs: 'Al trabajar desde casa, mato dos pájaros de un tiro.',
    origin: 'From Ovid\'s Metamorphoses — a single stone could kill two birds',
    category: 'animals',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-042',
    idiom: 'The elephant in the room',
    literalMeaning: 'El elefante en la habitación',
    actualMeaning: 'An obvious problem that everyone ignores',
    meaningEs: 'Un problema obvio que todos ignoran',
    example: 'The budget cut is the elephant in the room.',
    exampleEs: 'El recorte de presupuesto es el tema que nadie quiere mencionar.',
    origin: 'From a fable — an elephant in a room is too obvious to ignore',
    category: 'animals',
    level: 6,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-043',
    idiom: 'When pigs fly',
    literalMeaning: 'Cuando los cerdos vuelen',
    actualMeaning: 'Something that will never happen',
    meaningEs: 'Algo que nunca va a pasar',
    example: 'He\'ll clean his room when pigs fly.',
    exampleEs: 'Él limpiará su cuarto cuando las ranas críen pelo.',
    origin: 'Proverbial impossibility — pigs cannot fly, so it will never happen',
    category: 'animals',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-044',
    idiom: 'Curiosity killed the cat',
    literalMeaning: 'La curiosidad mató al gato',
    actualMeaning: 'Being too curious can lead to trouble',
    meaningEs: 'Ser demasiado curioso puede traer problemas',
    example: 'Don\'t ask too many questions - curiosity killed the cat.',
    exampleEs: 'No hagas tantas preguntas - la curiosidad mató al gato.',
    origin: '16th-century proverb — the original included "but satisfaction brought it back"; warns against prying',
    category: 'animals',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-045',
    idiom: 'A fish out of water',
    literalMeaning: 'Un pez fuera del agua',
    actualMeaning: 'Someone uncomfortable in an unfamiliar situation',
    meaningEs: 'Alguien incómodo en una situación desconocida',
    example: 'I felt like a fish out of water at the formal event.',
    exampleEs: 'Me sentí como pez fuera del agua en el evento formal.',
    origin: 'Literal — a fish out of water cannot survive; extended to humans in wrong environments',
    category: 'animals',
    level: 4,
    commonIn: ['spoken', 'informal']
  },

  // === COMIDA ===
  {
    id: 'idiom-046',
    idiom: 'Bring home the bacon',
    literalMeaning: 'Traer el tocino a casa',
    actualMeaning: 'To earn money for the family',
    meaningEs: 'Ganar dinero para la familia',
    example: 'Both parents need to bring home the bacon these days.',
    exampleEs: 'Hoy en día ambos padres necesitan trabajar.',
    origin: 'Medieval England — winning a side of bacon at a village contest proved you could provide for your family',
    category: 'food',
    level: 5,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-047',
    idiom: 'Have a lot on your plate',
    literalMeaning: 'Tener mucho en tu plato',
    actualMeaning: 'To have many responsibilities',
    meaningEs: 'Tener muchas responsabilidades',
    example: 'I can\'t help right now - I have a lot on my plate.',
    exampleEs: 'No puedo ayudar ahora - tengo muchas cosas pendientes.',
    origin: 'From dining — a full plate suggests many tasks to "consume" or complete',
    category: 'food',
    level: 4,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-048',
    idiom: 'Take something with a grain of salt',
    literalMeaning: 'Tomar algo con un grano de sal',
    actualMeaning: 'To not take something too seriously',
    meaningEs: 'No tomar algo muy en serio',
    example: 'Take his advice with a grain of salt.',
    exampleEs: 'No te tomes su consejo muy en serio.',
    origin: 'Pliny the Elder wrote that a grain of salt could counteract poison — extended to skepticism',
    category: 'food',
    level: 5,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-049',
    idiom: 'The cream of the crop',
    literalMeaning: 'La crema de la cosecha',
    actualMeaning: 'The best of a group',
    meaningEs: 'Lo mejor de un grupo (la crema y nata)',
    example: 'These students are the cream of the crop.',
    exampleEs: 'Estos estudiantes son lo mejor de lo mejor.',
    origin: 'From farming — cream rises to the top of milk; the best of a harvest is the "cream" of the crop',
    category: 'food',
    level: 5,
    commonIn: ['spoken', 'written']
  },
  {
    id: 'idiom-050',
    idiom: 'Cry over spilled milk',
    literalMeaning: 'Llorar sobre leche derramada',
    actualMeaning: 'To be upset about something that cannot be changed',
    meaningEs: 'Lamentarse por algo que no se puede cambiar',
    example: 'Don\'t cry over spilled milk - move on!',
    exampleEs: 'No llores sobre leche derramada - ¡sigue adelante!',
    origin: 'Proverb — what is done cannot be undone; crying over spilled milk is pointless',
    category: 'food',
    level: 4,
    commonIn: ['spoken', 'informal']
  },

  // === CLIMA/NATURALEZA ===
  {
    id: 'idiom-051',
    idiom: 'A storm in a teacup',
    literalMeaning: 'Una tormenta en una taza de té',
    actualMeaning: 'A big fuss over a small issue',
    meaningEs: 'Hacer una montaña de un grano de arena',
    example: 'The argument was just a storm in a teacup.',
    exampleEs: 'La discusión fue una tormenta en un vaso de agua.',
    origin: 'Cicero used "tempest in a teapot"; the teacup version became popular in 19th-century Britain',
    category: 'weather',
    level: 5,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-052',
    idiom: 'It\'s raining cats and dogs',
    literalMeaning: 'Está lloviendo gatos y perros',
    actualMeaning: 'It\'s raining very heavily',
    meaningEs: 'Está lloviendo mucho (a cántaros)',
    example: 'Don\'t go out - it\'s raining cats and dogs!',
    exampleEs: '¡No salgas - está lloviendo a cántaros!',
    origin: '17th-century England — possibly from Norse "cat-dogs" meaning downpour, or from drainage pipes',
    category: 'weather',
    level: 3,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-053',
    idiom: 'Every cloud has a silver lining',
    literalMeaning: 'Toda nube tiene un forro de plata',
    actualMeaning: 'Something positive can come from a bad situation',
    meaningEs: 'Algo positivo puede salir de una mala situación',
    example: 'I lost my job but every cloud has a silver lining - I found a better one.',
    exampleEs: 'Perdí mi trabajo pero no hay mal que por bien no venga - encontré uno mejor.',
    origin: 'John Milton\'s Comus (1634) — clouds have silver linings when backlit by the sun',
    category: 'weather',
    level: 5,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-054',
    idiom: 'Save for a rainy day',
    literalMeaning: 'Guardar para un día lluvioso',
    actualMeaning: 'To save money for future difficulties',
    meaningEs: 'Ahorrar dinero para dificultades futuras',
    example: 'I always try to save for a rainy day.',
    exampleEs: 'Siempre trato de ahorrar para tiempos difíciles.',
    origin: 'Rainy days prevent outdoor work — saving ensures you have resources when income stops',
    category: 'weather',
    level: 4,
    commonIn: ['spoken', 'informal']
  },

  // === GENERALES / AVANZADOS ===
  {
    id: 'idiom-055',
    idiom: 'Bite off more than you can chew',
    literalMeaning: 'Morder más de lo que puedes masticar',
    actualMeaning: 'To take on more responsibility than you can handle',
    meaningEs: 'Abarcar más de lo que puedes manejar',
    example: 'I bit off more than I could chew with this project.',
    exampleEs: 'Me comprometí con más de lo que podía manejar con este proyecto.',
    origin: 'Literal — taking too large a bite of food; extended to overcommitting to tasks',
    category: 'general',
    level: 5,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-056',
    idiom: 'Actions speak louder than words',
    literalMeaning: 'Las acciones hablan más fuerte que las palabras',
    actualMeaning: 'What you do is more important than what you say',
    meaningEs: 'Lo que haces es más importante que lo que dices',
    example: 'He promises a lot but actions speak louder than words.',
    exampleEs: 'Promete mucho pero los hechos hablan más que las palabras.',
    origin: 'Attributed to Abraham Lincoln; the idea dates to ancient Greece — deeds outweigh rhetoric',
    category: 'general',
    level: 4,
    commonIn: ['spoken', 'written']
  },
  {
    id: 'idiom-057',
    idiom: 'The early bird catches the worm',
    literalMeaning: 'El pájaro temprano atrapa el gusano',
    actualMeaning: 'Those who start early have an advantage',
    meaningEs: 'Quien madruga, Dios le ayuda',
    example: 'I always arrive first - the early bird catches the worm.',
    exampleEs: 'Siempre llego primero - quien madruga, Dios le ayuda.',
    origin: '17th-century proverb — worms surface at dawn, so early birds get the best pickings',
    category: 'general',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-058',
    idiom: 'Better late than never',
    literalMeaning: 'Mejor tarde que nunca',
    actualMeaning: 'It\'s better to do something late than not at all',
    meaningEs: 'Es mejor hacer algo tarde que no hacerlo',
    example: 'You finally finished the report? Better late than never!',
    exampleEs: '¿Por fin terminaste el informe? ¡Más vale tarde que nunca!',
    origin: 'Chaucer used this in The Canterbury Tales; Latin "potius sero quam numquam"',
    category: 'general',
    level: 3,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-059',
    idiom: 'Don\'t judge a book by its cover',
    literalMeaning: 'No juzgues un libro por su portada',
    actualMeaning: 'Don\'t judge something/someone by appearance alone',
    meaningEs: 'No juzgues algo/alguien solo por su apariencia',
    example: 'That restaurant looks shabby but don\'t judge a book by its cover.',
    exampleEs: 'Ese restaurante se ve descuidado pero no juzgues por las apariencias.',
    origin: 'From the 1946 novel Murder in the Glass — appearances can be deceiving',
    category: 'general',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-060',
    idiom: 'Easier said than done',
    literalMeaning: 'Más fácil decirlo que hacerlo',
    actualMeaning: 'Something is more difficult in practice than in theory',
    meaningEs: 'Algo es más difícil en la práctica que en la teoría',
    example: 'Losing weight is easier said than done.',
    exampleEs: 'Perder peso es más fácil decirlo que hacerlo.',
    origin: '15th-century — saying something is simple compared to the effort of doing it',
    category: 'general',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-061',
    idiom: 'Get out of hand',
    literalMeaning: 'Salirse de la mano',
    actualMeaning: 'To become out of control',
    meaningEs: 'Salirse de control',
    example: 'The situation got out of hand quickly.',
    exampleEs: 'La situación se salió de control rápidamente.',
    origin: 'From horsemanship — a horse "out of hand" cannot be controlled by the reins',
    category: 'general',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-062',
    idiom: 'Give the benefit of the doubt',
    literalMeaning: 'Dar el beneficio de la duda',
    actualMeaning: 'To believe someone is innocent until proven guilty',
    meaningEs: 'Creer en la inocencia de alguien hasta que se pruebe lo contrario',
    example: 'I\'ll give him the benefit of the doubt this time.',
    exampleEs: 'Le daré el beneficio de la duda esta vez.',
    origin: 'Legal principle — when evidence is uncertain, the accused receives the benefit',
    category: 'general',
    level: 5,
    commonIn: ['spoken', 'written']
  },
  {
    id: 'idiom-063',
    idiom: 'Jump on the bandwagon',
    literalMeaning: 'Saltar al carro de la banda',
    actualMeaning: 'To follow a trend or join what\'s popular',
    meaningEs: 'Seguir una tendencia, subirse al tren',
    example: 'Everyone jumped on the cryptocurrency bandwagon.',
    exampleEs: 'Todos se subieron al tren de las criptomonedas.',
    origin: '19th-century US politics — circus bandwagons carried musicians; politicians "jumped on" to gain visibility',
    category: 'general',
    level: 6,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-064',
    idiom: 'Pull someone\'s leg',
    literalMeaning: 'Tirar de la pierna de alguien',
    actualMeaning: 'To joke with someone, to tease',
    meaningEs: 'Bromear con alguien, tomar el pelo',
    example: 'Relax, I was just pulling your leg!',
    exampleEs: '¡Tranquilo, solo te estaba tomando el pelo!',
    origin: '19th-century — possibly from thieves tripping victims by pulling their legs',
    category: 'general',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-065',
    idiom: 'Read between the lines',
    literalMeaning: 'Leer entre líneas',
    actualMeaning: 'To understand the hidden meaning',
    meaningEs: 'Entender el significado oculto',
    example: 'You have to read between the lines in politics.',
    exampleEs: 'Tienes que leer entre líneas en la política.',
    origin: 'From cryptography — secret messages were written in invisible ink between visible lines',
    category: 'general',
    level: 5,
    commonIn: ['spoken', 'written']
  },
  {
    id: 'idiom-066',
    idiom: 'See eye to eye',
    literalMeaning: 'Ver ojo a ojo',
    actualMeaning: 'To agree with someone',
    meaningEs: 'Estar de acuerdo con alguien',
    example: 'We don\'t see eye to eye on this issue.',
    exampleEs: 'No estamos de acuerdo en este tema.',
    origin: 'Biblical — to see eye to eye meant to agree; from Isaiah 52:8',
    category: 'relationships',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-067',
    idiom: 'Speak of the devil',
    literalMeaning: 'Hablar del diablo',
    actualMeaning: 'Said when someone you were just talking about arrives',
    meaningEs: 'Dicho cuando alguien de quien hablabas aparece (hablando del rey de Roma)',
    example: 'Speak of the devil! We were just talking about you.',
    exampleEs: '¡Hablando del rey de Roma! Justo hablábamos de ti.',
    origin: 'Shortened from "Speak of the devil and he shall appear" — medieval superstition',
    category: 'general',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-068',
    idiom: 'Take it easy',
    literalMeaning: 'Tomarlo fácil',
    actualMeaning: 'To relax, not to worry',
    meaningEs: 'Relajarse, no preocuparse',
    example: 'Take it easy - everything will be fine.',
    exampleEs: 'Tómatelo con calma - todo estará bien.',
    origin: 'American slang from the 1920s — relax and don\'t exert yourself',
    category: 'general',
    level: 2,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-069',
    idiom: 'Two heads are better than one',
    literalMeaning: 'Dos cabezas son mejor que una',
    actualMeaning: 'Working together produces better results',
    meaningEs: 'Trabajar juntos produce mejores resultados (cuatro ojos ven más que dos)',
    example: 'Let\'s solve this together - two heads are better than one.',
    exampleEs: 'Resolvamos esto juntos - cuatro ojos ven más que dos.',
    origin: 'John Heywood\'s 1546 proverb collection — collaboration yields better solutions',
    category: 'general',
    level: 4,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-070',
    idiom: 'Under no circumstances',
    literalMeaning: 'Bajo ninguna circunstancia',
    actualMeaning: 'Never, absolutely not',
    meaningEs: 'Nunca, absolutamente no',
    example: 'Under no circumstances should you give out your password.',
    exampleEs: 'Bajo ninguna circunstancia debes dar tu contraseña.',
    origin: 'Formal legal language — "circumstances" refers to conditions; "under" suggests being subject to',
    category: 'general',
    level: 5,
    commonIn: ['spoken', 'written', 'business']
  },

  // === LEVEL 2 — Simple, common idioms ===
  {
    id: 'idiom-071',
    idiom: 'Easy come easy go',
    literalMeaning: 'Fácil viene fácil se va',
    actualMeaning: 'Something gained quickly can be lost quickly',
    meaningEs: 'Lo que fácilmente se gana, fácilmente se pierde',
    example: 'I lost the money at the casino — easy come easy go.',
    exampleEs: 'Perdí el dinero en el casino — lo que fácil viene, fácil se va.',
    origin: '17th-century proverb about the fleeting nature of easily acquired wealth',
    category: 'money',
    level: 2,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-072',
    idiom: 'Best of both worlds',
    literalMeaning: 'Lo mejor de ambos mundos',
    actualMeaning: 'The benefits of two different things combined',
    meaningEs: 'Los beneficios de dos cosas diferentes combinadas',
    example: 'Working from home gives me the best of both worlds.',
    exampleEs: 'Trabajar desde casa me da lo mejor de ambos mundos.',
    origin: 'From the idea of combining the advantages of two separate realms or choices',
    category: 'success',
    level: 2,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-073',
    idiom: 'Hit the books',
    literalMeaning: 'Golpear los libros',
    actualMeaning: 'To study hard',
    meaningEs: 'Estudiar mucho, empollar',
    example: 'I need to hit the books for my exam tomorrow.',
    exampleEs: 'Necesito estudiar mucho para mi examen de mañana.',
    origin: 'American college slang from the 1910s — "hit" suggests attacking the books with effort',
    category: 'work',
    level: 2,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-074',
    idiom: 'Practice makes perfect',
    literalMeaning: 'La práctica hace al maestro',
    actualMeaning: 'Repeating an activity improves your skill',
    meaningEs: 'Repetir una actividad mejora tu habilidad',
    example: 'Keep trying — practice makes perfect!',
    exampleEs: '¡Sigue intentando — la práctica hace al maestro!',
    origin: 'Latin "uses prompt facit" — use makes mastery; adopted into English in the 16th century',
    category: 'success',
    level: 2,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-075',
    idiom: 'When in Rome do as the Romans do',
    literalMeaning: 'Cuando en Roma haz como los romanos',
    actualMeaning: 'Adapt to local customs when visiting a new place',
    meaningEs: 'Adaptarse a las costumbres locales cuando se visita un lugar nuevo',
    example: 'I tried the local food — when in Rome do as the Romans do!',
    exampleEs: 'Probé la comida local — ¡donde fueres haz lo que vieres!',
    origin: 'From St Ambrose\'s advice to St Augustine in the 4th century',
    category: 'general',
    level: 2,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-076',
    idiom: 'Hold your horses',
    literalMeaning: 'Sujeta tus caballos',
    actualMeaning: 'Wait, slow down, or be patient',
    meaningEs: 'Espera, ve más despacio o ten paciencia',
    example: 'Hold your horses! Let me finish explaining first.',
    exampleEs: '¡Espera! Déjame terminar de explicar primero.',
    origin: 'From horse-drawn transport — holding the reins to slow or stop the horses',
    category: 'time',
    level: 2,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-077',
    idiom: 'Break a leg',
    literalMeaning: 'Romper una pierna',
    actualMeaning: 'Good luck (said to performers before a show)',
    meaningEs: 'Buena suerte (dicho a artistas antes de una actuación)',
    example: 'Break a leg in your audition tomorrow!',
    exampleEs: '¡Mucha mierda en tu audición de mañana!',
    origin: 'Theatre superstition — wishing good luck directly was considered bad luck, so the opposite was said',
    category: 'success',
    level: 2,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-078',
    idiom: 'On the same page',
    literalMeaning: 'En la misma página',
    actualMeaning: 'In agreement; thinking the same way',
    meaningEs: 'De acuerdo; pensando igual',
    example: 'Let\'s make sure we\'re all on the same page before we start.',
    exampleEs: 'Asegurémonos de que todos estamos de acuerdo antes de empezar.',
    origin: 'From reading — everyone following the same page ensures shared understanding',
    category: 'work',
    level: 2,
    commonIn: ['spoken', 'business', 'informal']
  },

  // === LEVEL 3 — Intermediate idioms ===
  {
    id: 'idiom-079',
    idiom: 'The grass is always greener',
    literalMeaning: 'La hierba siempre es más verde',
    actualMeaning: 'Other people\'s situations seem better than your own',
    meaningEs: 'La situación de otros parece mejor que la propia',
    example: 'She envied her neighbour\'s job — the grass is always greener.',
    exampleEs: 'Envidió el trabajo de su vecino — la hierba del vecino siempre es más verde.',
    origin: 'From the Latin proverb "alterius non sit qui suus esse potest" — Ovid; the full phrase is "the grass is always greener on the other side"',
    category: 'emotions',
    level: 3,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-080',
    idiom: 'You can\'t have your cake and eat it too',
    literalMeaning: 'No puedes tener tu pastel y comértelo también',
    actualMeaning: 'You cannot have two incompatible things at once',
    meaningEs: 'No puedes tener dos cosas incompatibles a la vez',
    example: 'You can\'t work less and earn more — you can\'t have your cake and eat it too.',
    exampleEs: 'No puedes trabajar menos y ganar más — no se puede tener todo.',
    origin: '16th-century proverb — once you eat the cake, you no longer have it',
    category: 'general',
    level: 3,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-081',
    idiom: 'Don\'t put all your eggs in one basket',
    literalMeaning: 'No pongas todos tus huevos en una canasta',
    actualMeaning: 'Don\'t risk everything on a single venture',
    meaningEs: 'No arriesgues todo en una sola empresa',
    example: 'Invest in different stocks — don\'t put all your eggs in one basket.',
    exampleEs: 'Invierte en diferentes acciones — no pongas todos los huevos en la misma cesta.',
    origin: 'From Miguel de Cervantes\' Don Quixote — spreading risk like spreading eggs across baskets',
    category: 'money',
    level: 3,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-082',
    idiom: 'Let sleeping dogs lie',
    literalMeaning: 'Deja a los perros dormidos en paz',
    actualMeaning: 'Avoid stirring up old problems or conflicts',
    meaningEs: 'Evitar despertar problemas o conflictos antiguos',
    example: 'I won\'t mention the argument — let sleeping dogs lie.',
    exampleEs: 'No mencionaré la discusión — mejor no remover el pasado.',
    origin: 'From Chaucer — waking a sleeping dog may provoke an attack; extended to avoiding unnecessary trouble',
    category: 'relationships',
    level: 3,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-083',
    idiom: 'A blessing in disguise',
    literalMeaning: 'Una bendición disfrazada',
    actualMeaning: 'Something that seems bad but turns out to be good',
    meaningEs: 'Algo que parece malo pero resulta ser bueno',
    example: 'Losing that job was a blessing in disguise — I found a better one.',
    exampleEs: 'Perder ese trabajo fue una bendición disfrazada — encontré uno mejor.',
    origin: 'From a 1746 hymn by Joseph Addison — misfortunes may hide divine blessings',
    category: 'success',
    level: 3,
    commonIn: ['spoken', 'informal']
  },

  // === LEVEL 6 — C2 sophisticated idioms ===
  {
    id: 'idiom-084',
    idiom: 'The writing is on the wall',
    literalMeaning: 'La escritura está en la pared',
    actualMeaning: 'The signs indicate that something bad will happen',
    meaningEs: 'Los signos indican que algo malo va a pasar',
    example: 'With sales falling for six months, the writing is on the wall.',
    exampleEs: 'Con las ventas cayendo durante seis meses, está claro lo que va a pasar.',
    origin: 'From the biblical story of Belshazzar\'s feast',
    category: 'general',
    level: 6,
    commonIn: ['spoken', 'written', 'business']
  },
  {
    id: 'idiom-085',
    idiom: 'A double-edged sword',
    literalMeaning: 'Una espada de doble filo',
    actualMeaning: 'Something that has both advantages and disadvantages',
    meaningEs: 'Algo que tiene ventajas y desventajas',
    example: 'Social media is a double-edged sword for businesses.',
    exampleEs: 'Las redes sociales son un arma de doble filo para las empresas.',
    origin: 'Medieval — a two-edged blade cuts both ways; benefits can also cause harm',
    category: 'general',
    level: 6,
    commonIn: ['spoken', 'written', 'business']
  },
  {
    id: 'idiom-086',
    idiom: 'Throw the baby out with the bathwater',
    literalMeaning: 'Tirar al bebé con el agua del baño',
    actualMeaning: 'To discard something valuable when getting rid of something unwanted',
    meaningEs: 'Descartar algo valioso al eliminar lo no deseado',
    example: 'Don\'t throw the baby out with the bathwater — keep the good parts of the plan.',
    exampleEs: 'No tires el bebé con el agua del baño — mantén las partes buenas del plan.',
    origin: 'German proverb — in medieval times, the whole family shared bathwater; babies were bathed last',
    category: 'general',
    level: 6,
    commonIn: ['spoken', 'written']
  },
  {
    id: 'idiom-087',
    idiom: 'Move the goalposts',
    literalMeaning: 'Mover las porterías',
    actualMeaning: 'To change the rules or criteria during a process',
    meaningEs: 'Cambiar las reglas o criterios durante un proceso',
    example: 'They keep moving the goalposts — every week there\'s a new requirement.',
    exampleEs: 'Siguen cambiando las reglas — cada semana hay un nuevo requisito.',
    origin: 'From football — moving goalposts would make scoring impossible; unfair rule changes',
    category: 'work',
    level: 6,
    commonIn: ['spoken', 'business']
  },
  {
    id: 'idiom-088',
    idiom: 'Caught between a rock and a hard place',
    literalMeaning: 'Atrapado entre una roca y un lugar duro',
    actualMeaning: 'Facing two equally difficult options',
    meaningEs: 'Enfrentar dos opciones igualmente difíciles',
    example: 'I\'m caught between a rock and a hard place — I can\'t please both sides.',
    exampleEs: 'Estoy entre la espada y la pared — no puedo complacer a ambos bandos.',
    origin: 'From Greek mythology — Odysseus had to sail between Scylla and Charybdis; modern variant from mining',
    category: 'general',
    level: 6,
    commonIn: ['spoken', 'written', 'business']
  },
  {
    id: 'idiom-089',
    idiom: 'Skating on thin ice',
    literalMeaning: 'Patinar sobre hielo fino',
    actualMeaning: 'Taking a risk; in a dangerous or precarious situation',
    meaningEs: 'Arriesgarse; en una situación peligrosa o precaria',
    example: 'You\'re skating on thin ice with those comments.',
    exampleEs: 'Estás jugando con fuego con esos comentarios.',
    origin: 'Literal danger — thin ice may break; extended to risky behaviour',
    category: 'general',
    level: 6,
    commonIn: ['spoken', 'informal']
  },
  {
    id: 'idiom-090',
    idiom: 'Leave no stone unturned',
    literalMeaning: 'No dejar piedra sin remover',
    actualMeaning: 'To try every possible method to achieve something',
    meaningEs: 'Probar todos los métodos posibles para lograr algo',
    example: 'We left no stone unturned in our search for the solution.',
    exampleEs: 'No dejamos piedra sin remover en nuestra búsqueda de la solución.',
    origin: 'From the Greek oracle at Delphi — Polycrates was told to leave no stone unturned to find treasure',
    category: 'success',
    level: 6,
    commonIn: ['spoken', 'written', 'business']
  }
];

// Helper functions
export const getIdiomsByCategory = (category: Idiom['category']): Idiom[] => {
  return idioms.filter(i => i.category === category);
};

export const getIdiomsByLevel = (level: number): Idiom[] => {
  return idioms.filter(i => i.level <= level);
};

export const getIdiomsByContext = (context: 'spoken' | 'written' | 'business' | 'informal'): Idiom[] => {
  return idioms.filter(i => i.commonIn.includes(context));
};

export const searchIdiom = (term: string): Idiom[] => {
  const searchTerm = term.toLowerCase();
  return idioms.filter(i => 
    i.idiom.toLowerCase().includes(searchTerm) ||
    i.actualMeaning.toLowerCase().includes(searchTerm) ||
    i.meaningEs.toLowerCase().includes(searchTerm)
  );
};

export default idioms;
