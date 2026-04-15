import type { ListeningExercise } from '../types';

// Available voices with accent information
export const availableAccents = [
  { id: 'us', name: 'American English', code: 'en-US', flag: '🇺🇸' },
  { id: 'uk', name: 'British English', code: 'en-GB', flag: '🇬🇧' },
  { id: 'au', name: 'Australian English', code: 'en-AU', flag: '🇦🇺' },
  { id: 'ie', name: 'Irish English', code: 'en-IE', flag: '🇮🇪' },
  { id: 'in', name: 'Indian English', code: 'en-IN', flag: '🇮🇳' },
];

export const speechSpeeds = [
  { id: 'slow', name: 'Slow', rate: 0.7, description: 'Slower pace for beginners' },
  { id: 'normal', name: 'Normal', rate: 1.0, description: 'Natural speaking pace' },
  { id: 'fast', name: 'Fast', rate: 1.3, description: 'Challenge yourself!' },
];

export const listeningExercises: ListeningExercise[] = [
  // ============================================
  // BEGINNER EXERCISES - Short, clear sentences
  // ============================================
  {
    id: 'listen_1',
    type: 'dictation',
    title: 'Simple Greetings',
    titleEs: 'Saludos Simples',
    difficulty: 1,
    audioText: 'Hello, my name is Sarah. Nice to meet you.',
    translation: 'Hola, mi nombre es Sarah. Mucho gusto.',
    hints: ['The speaker introduces herself', 'Common greeting phrase'],
    hintsEs: ['La persona se presenta', 'Frase común de saludo'],
    keywords: ['hello', 'name', 'nice', 'meet'],
    duration: 4,
    questions: [
      {
        id: 'q1',
        type: 'fill-blank',
        question: 'Complete: Hello, my ____ is Sarah.',
        questionEs: 'Completa: Hello, my ____ is Sarah.',
        options: ['name', 'names', 'named', 'naming'],
        correctAnswer: 'name',
        points: 10,
      },
      {
        id: 'q2',
        type: 'dictation',
        question: 'Type what you hear',
        questionEs: 'Escribe lo que escuches',
        correctAnswer: 'Hello, my name is Sarah. Nice to meet you.',
        points: 20,
      },
    ],
    levelId: 1,
    vocabularyIds: [],
  },
  {
    id: 'listen_2',
    type: 'comprehension',
    title: 'At the Store',
    titleEs: 'En la Tienda',
    difficulty: 1,
    audioText: 'Can I help you? Yes, I am looking for a red shirt. The red shirts are over there, near the window.',
    translation: '¿Puedo ayudarte? Sí, estoy buscando una camisa roja. Las camisas rojas están por allá, cerca de la ventana.',
    hints: ['Shopping conversation', 'Colors and clothing'],
    hintsEs: ['Conversación de compras', 'Colores y ropa'],
    keywords: ['help', 'looking', 'shirt', 'window'],
    duration: 7,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What color shirt is the person looking for?',
        questionEs: '¿De qué color es la camisa que busca la persona?',
        options: ['Blue', 'Red', 'Green', 'White'],
        correctAnswer: 'Red',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'Where are the shirts located?',
        questionEs: '¿Dónde están las camisas?',
        options: ['Near the door', 'Near the window', 'On the table', 'Upstairs'],
        correctAnswer: 'Near the window',
        points: 10,
      },
    ],
    levelId: 1,
    vocabularyIds: [],
  },

  // ============================================
  // INTERMEDIATE EXERCISES - Longer dialogues
  // ============================================
  {
    id: 'listen_3',
    type: 'comprehension',
    title: 'Making Plans',
    titleEs: 'Haciendo Planes',
    difficulty: 2,
    audioText: 'Hey, are you free this weekend? I was thinking we could go to the new Italian restaurant downtown. It opened last month and I heard the pasta is amazing. Sure, that sounds great! What time were you thinking? How about Saturday at seven? Perfect, I will meet you there.',
    translation: 'Oye, ¿estás libre este fin de semana? Estaba pensando que podríamos ir al nuevo restaurante italiano del centro. Abrió el mes pasado y escuché que la pasta es increíble. Claro, ¡suena genial! ¿A qué hora estabas pensando? ¿Qué tal el sábado a las siete? Perfecto, te veré allá.',
    hints: ['Two friends making plans', 'Restaurant and time mentioned'],
    hintsEs: ['Dos amigos haciendo planes', 'Se menciona restaurante y hora'],
    keywords: ['weekend', 'restaurant', 'Saturday', 'seven'],
    duration: 15,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What type of restaurant do they plan to visit?',
        questionEs: '¿Qué tipo de restaurante planean visitar?',
        options: ['Mexican', 'Chinese', 'Italian', 'Japanese'],
        correctAnswer: 'Italian',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'When did the restaurant open?',
        questionEs: '¿Cuándo abrió el restaurante?',
        options: ['Last week', 'Last month', 'Last year', 'Yesterday'],
        correctAnswer: 'Last month',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What day and time will they meet?',
        questionEs: '¿Qué día y hora se encontrarán?',
        options: ['Friday at 6', 'Saturday at 7', 'Sunday at 8', 'Saturday at 6'],
        correctAnswer: 'Saturday at 7',
        points: 15,
      },
    ],
    levelId: 3,
    vocabularyIds: [],
  },
  {
    id: 'listen_4',
    type: 'dictation',
    title: 'Phone Message',
    titleEs: 'Mensaje Telefónico',
    difficulty: 2,
    audioText: 'Hi, this is Doctor Martinez calling from the Downtown Clinic. I am calling to confirm your appointment for Tuesday at two thirty in the afternoon. Please call us back at five five five, one two three four to confirm. Thank you.',
    translation: 'Hola, habla el Doctor Martínez llamando de la Clínica Downtown. Llamo para confirmar su cita para el martes a las dos y media de la tarde. Por favor llámenos al cinco cinco cinco, uno dos tres cuatro para confirmar. Gracias.',
    hints: ['Medical office message', 'Contains date, time, and phone number'],
    hintsEs: ['Mensaje de consultorio médico', 'Contiene fecha, hora y número de teléfono'],
    keywords: ['doctor', 'appointment', 'Tuesday', 'confirm'],
    duration: 12,
    questions: [
      {
        id: 'q1',
        type: 'fill-blank',
        question: 'The appointment is on ____ at 2:30 PM.',
        questionEs: 'La cita es el ____ a las 2:30 PM.',
        options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        correctAnswer: 'Tuesday',
        points: 10,
      },
      {
        id: 'q2',
        type: 'dictation',
        question: 'Write the phone number mentioned',
        questionEs: 'Escribe el número de teléfono mencionado',
        correctAnswer: '555-1234',
        points: 15,
      },
    ],
    levelId: 4,
    vocabularyIds: [],
  },

  // ============================================
  // ADVANCED EXERCISES - Natural speech, complex topics
  // ============================================
  {
    id: 'listen_5',
    type: 'comprehension',
    title: 'Job Interview Discussion',
    titleEs: 'Discusión de Entrevista de Trabajo',
    difficulty: 3,
    audioText: 'So, tell me about your experience with project management. Well, in my previous role, I led a team of eight people on a software development project. We faced several challenges, including tight deadlines and budget constraints. However, by implementing agile methodologies and holding daily stand-up meetings, we were able to deliver the project two weeks ahead of schedule and under budget. That is impressive. How did you handle conflicts within the team? I believe in open communication. When conflicts arose, I would arrange one-on-one meetings to understand each perspective, and then facilitate a group discussion to find a solution that everyone could agree on.',
    translation: 'Entonces, cuéntame sobre tu experiencia con gestión de proyectos. Bueno, en mi rol anterior, lideré un equipo de ocho personas en un proyecto de desarrollo de software. Enfrentamos varios desafíos, incluyendo plazos ajustados y restricciones de presupuesto. Sin embargo, al implementar metodologías ágiles y tener reuniones diarias, pudimos entregar el proyecto dos semanas antes de lo programado y por debajo del presupuesto. Eso es impresionante. ¿Cómo manejaste los conflictos dentro del equipo? Creo en la comunicación abierta. Cuando surgían conflictos, organizaba reuniones uno a uno para entender cada perspectiva, y luego facilitaba una discusión grupal para encontrar una solución con la que todos pudieran estar de acuerdo.',
    hints: ['Professional interview setting', 'Discussion about leadership and teamwork'],
    hintsEs: ['Entorno de entrevista profesional', 'Discusión sobre liderazgo y trabajo en equipo'],
    keywords: ['project', 'team', 'challenges', 'communication', 'conflicts'],
    duration: 40,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'How many people were on the team?',
        questionEs: '¿Cuántas personas había en el equipo?',
        options: ['5', '6', '8', '10'],
        correctAnswer: '8',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What methodology did they implement?',
        questionEs: '¿Qué metodología implementaron?',
        options: ['Waterfall', 'Agile', 'Lean', 'Six Sigma'],
        correctAnswer: 'Agile',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'How was the project delivered compared to schedule?',
        questionEs: '¿Cómo se entregó el proyecto comparado con el cronograma?',
        options: ['On time', 'Two weeks late', 'Two weeks early', 'One month early'],
        correctAnswer: 'Two weeks early',
        points: 15,
      },
      {
        id: 'q4',
        type: 'fill-blank',
        question: 'The speaker believes in open ____.',
        questionEs: 'El hablante cree en ____ abierta.',
        options: ['communication', 'negotiation', 'debate', 'discussion'],
        correctAnswer: 'communication',
        points: 10,
      },
    ],
    levelId: 8,
    vocabularyIds: [],
  },
  {
    id: 'listen_6',
    type: 'comprehension',
    title: 'News Report',
    titleEs: 'Reporte de Noticias',
    difficulty: 3,
    audioText: 'In today\'s top story, the city council has approved a new initiative to promote sustainable transportation. Starting next month, residents will have access to a city-wide electric bicycle sharing program. The program aims to reduce carbon emissions by encouraging citizens to choose eco-friendly transportation options for short trips. The mayor stated that this is just the first step in their comprehensive plan to make the city carbon neutral by 2035. Critics, however, have raised concerns about the cost of the program and its accessibility for residents in suburban areas.',
    translation: 'En la noticia principal de hoy, el consejo de la ciudad ha aprobado una nueva iniciativa para promover el transporte sostenible. A partir del próximo mes, los residentes tendrán acceso a un programa de bicicletas eléctricas compartidas en toda la ciudad. El programa busca reducir las emisiones de carbono alentando a los ciudadanos a elegir opciones de transporte ecológicas para viajes cortos. El alcalde declaró que este es solo el primer paso en su plan integral para hacer la ciudad carbono neutral para 2035. Los críticos, sin embargo, han expresado preocupaciones sobre el costo del programa y su accesibilidad para residentes en áreas suburbanas.',
    hints: ['News broadcast format', 'Environmental and city planning topic'],
    hintsEs: ['Formato de noticiero', 'Tema ambiental y de planificación urbana'],
    keywords: ['sustainable', 'bicycle', 'carbon', 'emissions', '2035'],
    duration: 35,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What type of program was approved?',
        questionEs: '¿Qué tipo de programa fue aprobado?',
        options: ['Electric car sharing', 'Electric bicycle sharing', 'Public bus system', 'Subway expansion'],
        correctAnswer: 'Electric bicycle sharing',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What is the city\'s target year for carbon neutrality?',
        questionEs: '¿Cuál es el año meta de la ciudad para neutralidad de carbono?',
        options: ['2025', '2030', '2035', '2040'],
        correctAnswer: '2035',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What concerns did critics raise?',
        questionEs: '¿Qué preocupaciones plantearon los críticos?',
        options: ['Safety issues', 'Cost and accessibility', 'Environmental impact', 'Traffic congestion'],
        correctAnswer: 'Cost and accessibility',
        points: 15,
      },
    ],
    levelId: 10,
    vocabularyIds: [],
  },

  // ============================================
  // DICTATION EXERCISES - Focus on spelling
  // ============================================
  {
    id: 'listen_7',
    type: 'dictation',
    title: 'Common Phrases',
    titleEs: 'Frases Comunes',
    difficulty: 1,
    audioText: 'I would like a cup of coffee, please.',
    translation: 'Me gustaría una taza de café, por favor.',
    hints: ['Polite request', 'Common ordering phrase'],
    hintsEs: ['Petición educada', 'Frase común para ordenar'],
    keywords: ['would', 'like', 'cup', 'coffee', 'please'],
    duration: 3,
    questions: [
      {
        id: 'q1',
        type: 'dictation',
        question: 'Write exactly what you hear',
        questionEs: 'Escribe exactamente lo que escuchas',
        correctAnswer: 'I would like a cup of coffee, please.',
        points: 25,
      },
    ],
    levelId: 2,
    vocabularyIds: [],
  },
  {
    id: 'listen_8',
    type: 'dictation',
    title: 'Spelling Challenge',
    titleEs: 'Desafío de Ortografía',
    difficulty: 2,
    audioText: 'The weather forecast says it will be beautiful tomorrow.',
    translation: 'El pronóstico del clima dice que estará hermoso mañana.',
    hints: ['Weather related', 'Contains challenging spelling words'],
    hintsEs: ['Relacionado con el clima', 'Contiene palabras con ortografía desafiante'],
    keywords: ['weather', 'forecast', 'beautiful', 'tomorrow'],
    duration: 4,
    questions: [
      {
        id: 'q1',
        type: 'dictation',
        question: 'Write exactly what you hear',
        questionEs: 'Escribe exactamente lo que escuchas',
        correctAnswer: 'The weather forecast says it will be beautiful tomorrow.',
        points: 30,
      },
    ],
    levelId: 5,
    vocabularyIds: [],
  },

  // ============================================
  // LEVEL 6 (B1) EXERCISES
  // ============================================
  {
    id: 'listen_level6_comp',
    type: 'comprehension',
    title: 'Workplace Announcement',
    titleEs: 'Anuncio en el Lugar de Trabajo',
    difficulty: 2,
    audioText: 'Good morning, everyone. I have an important announcement to make. Starting next month, we will be implementing a new flexible working policy. Employees will be able to work from home up to three days per week, provided they complete their tasks and attend the mandatory team meetings on Tuesdays and Thursdays. Please speak to your line manager if you have any questions or need to discuss your individual arrangements. The full policy document will be sent to your email by the end of this week.',
    translation: 'Buenos días a todos. Tengo un anuncio importante que hacer. A partir del próximo mes, implementaremos una nueva política de trabajo flexible. Los empleados podrán trabajar desde casa hasta tres días por semana, siempre que completen sus tareas y asistan a las reuniones obligatorias del equipo los martes y jueves. Por favor hablen con su gerente de línea si tienen alguna pregunta o necesitan discutir sus arreglos individuales. El documento completo de la política se enviará a su correo antes del final de esta semana.',
    hints: ['Company policy announcement', 'Flexible working and meeting schedule'],
    hintsEs: ['Anuncio de política de la empresa', 'Trabajo flexible y horario de reuniones'],
    keywords: ['flexible', 'policy', 'mandatory', 'arrangements'],
    duration: 25,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'How many days per week can employees work from home?',
        questionEs: '¿Cuántos días por semana pueden los empleados trabajar desde casa?',
        options: ['One', 'Two', 'Three', 'Five'],
        correctAnswer: 'Three',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'When are the mandatory team meetings?',
        questionEs: '¿Cuándo son las reuniones obligatorias del equipo?',
        options: ['Mondays and Wednesdays', 'Tuesdays and Thursdays', 'Fridays only', 'Every day'],
        correctAnswer: 'Tuesdays and Thursdays',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'When will the full policy document be sent?',
        questionEs: '¿Cuándo se enviará el documento completo de la política?',
        options: ['Today', 'By the end of this week', 'Next month', 'Next Tuesday'],
        correctAnswer: 'By the end of this week',
        points: 10,
      },
    ],
    levelId: 6,
    vocabularyIds: [],
  },
  {
    id: 'listen_level6_dict',
    type: 'dictation',
    title: 'Professional Email Dictation',
    titleEs: 'Dictado de Correo Profesional',
    difficulty: 2,
    audioText: 'Thank you for your email regarding the project deadline. I would like to confirm that we are on track to deliver the final report by the end of next week. Please let me know if you need any additional information.',
    translation: 'Gracias por su correo respecto al plazo del proyecto. Me gustaría confirmar que estamos en camino de entregar el reporte final antes del final de la próxima semana. Por favor hágame saber si necesita información adicional.',
    hints: ['Professional email style', 'Contains polite phrases and time expressions'],
    hintsEs: ['Estilo de correo profesional', 'Contiene frases educadas y expresiones de tiempo'],
    keywords: ['deadline', 'confirm', 'deliver', 'additional'],
    duration: 12,
    questions: [
      {
        id: 'q1',
        type: 'dictation',
        question: 'Write exactly what you hear',
        questionEs: 'Escribe exactamente lo que escuchas',
        correctAnswer: 'Thank you for your email regarding the project deadline. I would like to confirm that we are on track to deliver the final report by the end of next week. Please let me know if you need any additional information.',
        points: 35,
      },
    ],
    levelId: 6,
    vocabularyIds: [],
  },

  // ============================================
  // LEVEL 7 (B2) EXERCISES
  // ============================================
  {
    id: 'listen_level7_comp',
    type: 'comprehension',
    title: 'University Lecture: Renewable Energy',
    titleEs: 'Conferencia Universitaria: Energía Renovable',
    difficulty: 2,
    audioText: 'Today we will explore the role of renewable energy in addressing climate change. Solar and wind power have become increasingly cost-effective over the past decade, with solar panel prices dropping by more than eighty percent since 2010. However, one of the main challenges remains energy storage — we need efficient batteries to store excess energy when the sun is not shining or the wind is not blowing. Governments and private companies are investing heavily in research to develop better storage solutions. The transition to a fully renewable grid will require not only technological advances but also significant changes to our infrastructure and energy consumption habits.',
    translation: 'Hoy exploraremos el papel de la energía renovable en abordar el cambio climático. La energía solar y eólica se ha vuelto cada vez más rentable durante la última década, con los precios de los paneles solares cayendo más del ochenta por ciento desde 2010. Sin embargo, uno de los principales desafíos sigue siendo el almacenamiento de energía — necesitamos baterías eficientes para almacenar el exceso de energía cuando no brilla el sol o no sopla el viento. Los gobiernos y las empresas privadas están invirtiendo fuertemente en investigación para desarrollar mejores soluciones de almacenamiento. La transición a una red completamente renovable requerirá no solo avances tecnológicos sino también cambios significativos en nuestra infraestructura y hábitos de consumo energético.',
    hints: ['Academic lecture on energy', 'Compare costs, challenges, and solutions'],
    hintsEs: ['Conferencia académica sobre energía', 'Compara costos, desafíos y soluciones'],
    keywords: ['renewable', 'storage', 'infrastructure', 'transition'],
    duration: 45,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'By how much have solar panel prices dropped since 2010?',
        questionEs: '¿Cuánto han caído los precios de los paneles solares desde 2010?',
        options: ['Twenty percent', 'Fifty percent', 'More than eighty percent', 'Ninety percent'],
        correctAnswer: 'More than eighty percent',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What is described as one of the main challenges for renewable energy?',
        questionEs: '¿Qué se describe como uno de los principales desafíos de la energía renovable?',
        options: ['Cost of installation', 'Energy storage', 'Government regulations', 'Public awareness'],
        correctAnswer: 'Energy storage',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What does the speaker say the transition to a renewable grid will require?',
        questionEs: '¿Qué dice el orador que requerirá la transición a una red renovable?',
        options: [
          'Only technological advances',
          'Technological advances and changes to infrastructure and consumption habits',
          'Government funding only',
          'Reducing energy demand',
        ],
        correctAnswer: 'Technological advances and changes to infrastructure and consumption habits',
        points: 15,
      },
    ],
    levelId: 7,
    vocabularyIds: [],
  },
  {
    id: 'listen_level7_dict',
    type: 'dictation',
    title: 'Academic Dictation: Research Findings',
    titleEs: 'Dictado Académico: Hallazgos de Investigación',
    difficulty: 2,
    audioText: 'The study concluded that regular physical exercise has a significant positive impact on mental health. Participants who exercised at least three times per week reported lower levels of stress and anxiety compared to those who led a sedentary lifestyle. These findings suggest that healthcare providers should consider recommending exercise as part of a comprehensive treatment plan.',
    translation: 'El estudio concluyó que el ejercicio físico regular tiene un impacto positivo significativo en la salud mental. Los participantes que hicieron ejercicio al menos tres veces por semana reportaron niveles más bajos de estrés y ansiedad en comparación con aquellos que llevaban un estilo de vida sedentario. Estos hallazgos sugieren que los proveedores de atención médica deberían considerar recomendar el ejercicio como parte de un plan de tratamiento integral.',
    hints: ['Academic research summary', 'Focus on cause-effect and comparative structures'],
    hintsEs: ['Resumen de investigación académica', 'Enfócate en estructuras de causa-efecto y comparativas'],
    keywords: ['exercise', 'mental health', 'sedentary', 'treatment'],
    duration: 18,
    questions: [
      {
        id: 'q1',
        type: 'dictation',
        question: 'Write exactly what you hear',
        questionEs: 'Escribe exactamente lo que escuchas',
        correctAnswer: 'The study concluded that regular physical exercise has a significant positive impact on mental health. Participants who exercised at least three times per week reported lower levels of stress and anxiety compared to those who led a sedentary lifestyle. These findings suggest that healthcare providers should consider recommending exercise as part of a comprehensive treatment plan.',
        points: 40,
      },
    ],
    levelId: 7,
    vocabularyIds: [],
  },

  // ============================================
  // PRONUNCIATION FOCUS
  // ============================================
  {
    id: 'listen_9',
    type: 'comprehension',
    title: 'Minimal Pairs - Ship vs Sheep',
    titleEs: 'Pares Mínimos - Ship vs Sheep',
    difficulty: 2,
    audioText: 'Did you see the ship? No, I saw the sheep. The ship is in the harbor. The sheep is in the field. Can you tell the difference?',
    translation: '¿Viste el barco? No, vi la oveja. El barco está en el puerto. La oveja está en el campo. ¿Puedes notar la diferencia?',
    hints: ['Focus on /i/ vs /iː/ sounds', 'Short i vs long ee'],
    hintsEs: ['Enfócate en los sonidos /i/ vs /iː/', 'i corta vs ee larga'],
    keywords: ['ship', 'sheep', 'harbor', 'field'],
    duration: 8,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Where is the ship?',
        questionEs: '¿Dónde está el barco?',
        options: ['In the field', 'In the harbor', 'On the road', 'At the farm'],
        correctAnswer: 'In the harbor',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'Where is the sheep?',
        questionEs: '¿Dónde está la oveja?',
        options: ['In the field', 'In the harbor', 'On the ship', 'At the store'],
        correctAnswer: 'In the field',
        points: 10,
      },
    ],
    levelId: 3,
    vocabularyIds: [],
  },
  {
    id: 'listen_10',
    type: 'comprehension',
    title: 'Contractions Practice',
    titleEs: 'Práctica de Contracciones',
    difficulty: 2,
    audioText: "I've been working here for five years. She's already left for the day. They're planning to arrive around noon. We've got plenty of time. It's going to rain later, isn't it?",
    translation: 'He estado trabajando aquí por cinco años. Ella ya se fue por el día. Ellos planean llegar alrededor del mediodía. Tenemos mucho tiempo. Va a llover más tarde, ¿verdad?',
    hints: ['Listen for contracted forms', "I've, She's, They're, We've, It's"],
    hintsEs: ['Escucha las formas contraídas', "I've, She's, They're, We've, It's"],
    keywords: ['working', 'already', 'planning', 'plenty', 'rain'],
    duration: 12,
    questions: [
      {
        id: 'q1',
        type: 'fill-blank',
        question: '______ been working here for five years.',
        questionEs: '______ estado trabajando aquí por cinco años.',
        options: ["I've", "I'm", 'I', "I'd"],
        correctAnswer: "I've",
        points: 10,
      },
      {
        id: 'q2',
        type: 'fill-blank',
        question: '______ planning to arrive around noon.',
        questionEs: '______ planean llegar alrededor del mediodía.',
        options: ['They', "They'd", "They're", "There's"],
        correctAnswer: "They're",
        points: 10,
      },
      {
        id: 'q3',
        type: 'fill-blank',
        question: '______ going to rain later.',
        questionEs: 'Va a llover más tarde.',
        options: ['Its', "It's", 'Is', "It'd"],
        correctAnswer: "It's",
        points: 10,
      },
    ],
    levelId: 4,
    vocabularyIds: [],
  },

  // ============================================
  // ADVANCED EXERCISES - Extra difficulty 3
  // ============================================
  {
    id: 'listen_11',
    type: 'comprehension',
    title: 'Academic Lecture Excerpt',
    titleEs: 'Extracto de Conferencia Académica',
    difficulty: 3,
    audioText: 'Today we are going to examine the concept of cognitive dissonance, which was first introduced by psychologist Leon Festinger in 1957. Cognitive dissonance refers to the mental discomfort experienced when a person holds two or more contradictory beliefs simultaneously. To resolve this discomfort, individuals tend to engage in a variety of psychological strategies: they may rationalize away one of the conflicting beliefs, seek out information that confirms their existing view, or in rare cases, they may actually change their behavior or beliefs. This phenomenon has important implications for how we understand decision-making, persuasion, and attitude change in everyday life.',
    translation: 'Hoy vamos a examinar el concepto de disonancia cognitiva, que fue introducido por primera vez por el psicólogo Leon Festinger en 1957. La disonancia cognitiva se refiere al malestar mental que experimenta una persona cuando sostiene dos o más creencias contradictorias simultáneamente. Para resolver este malestar, las personas tienden a utilizar diversas estrategias psicológicas: pueden racionalizar una de las creencias en conflicto, buscar información que confirme su visión existente, o en raros casos, pueden cambiar su comportamiento o creencias. Este fenómeno tiene importantes implicaciones para cómo entendemos la toma de decisiones, la persuasión y el cambio de actitud en la vida cotidiana.',
    hints: ['Academic psychology lecture', 'Technical vocabulary is expected'],
    hintsEs: ['Conferencia académica de psicología', 'Se espera vocabulario técnico'],
    keywords: ['cognitive', 'dissonance', 'beliefs', 'contradictory', 'Festinger'],
    duration: 45,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Who introduced cognitive dissonance?',
        questionEs: '¿Quién introdujo el concepto de disonancia cognitiva?',
        options: ['Freud', 'Festinger', 'Piaget', 'Skinner'],
        correctAnswer: 'Festinger',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'When was the theory introduced?',
        questionEs: '¿Cuándo fue introducida la teoría?',
        options: ['1947', '1957', '1967', '1977'],
        correctAnswer: '1957',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What does cognitive dissonance describe?',
        questionEs: '¿Qué describe la disonancia cognitiva?',
        options: [
          'The ability to multitask',
          'Discomfort from holding contradictory beliefs',
          'Difficulty learning new information',
          'Resistance to persuasion',
        ],
        correctAnswer: 'Discomfort from holding contradictory beliefs',
        points: 15,
      },
      {
        id: 'q4',
        type: 'fill-blank',
        question: 'People may ____ one of two conflicting beliefs to reduce discomfort.',
        questionEs: 'Las personas pueden ____ una de dos creencias en conflicto para reducir el malestar.',
        options: ['rationalize', 'memorize', 'ignore', 'create'],
        correctAnswer: 'rationalize',
        points: 15,
      },
    ],
    levelId: 9,
    vocabularyIds: [],
  },
  {
    id: 'listen_12',
    type: 'comprehension',
    title: 'Debate: Technology & Privacy',
    titleEs: 'Debate: Tecnología y Privacidad',
    difficulty: 3,
    audioText: 'The proliferation of digital devices and social media platforms has fundamentally altered our relationship with privacy. On one hand, tech companies argue that data collection enables personalised services and enhances user experience. On the other hand, critics contend that the vast accumulation of personal data represents an unprecedented threat to civil liberties. The crux of the issue lies in informed consent: do users truly understand what data is being collected, how it is being used, and who has access to it? Recent legislative efforts such as the GDPR in Europe attempt to redress this imbalance by granting individuals greater control over their personal information. However, enforcing these regulations across international jurisdictions remains a formidable challenge.',
    translation: 'La proliferación de dispositivos digitales y plataformas de redes sociales ha alterado fundamentalmente nuestra relación con la privacidad. Por un lado, las empresas tecnológicas argumentan que la recopilación de datos permite servicios personalizados y mejora la experiencia del usuario. Por otro lado, los críticos sostienen que la vasta acumulación de datos personales representa una amenaza sin precedentes para las libertades civiles. El quid del asunto reside en el consentimiento informado: ¿realmente entienden los usuarios qué datos se recopilan, cómo se usan y quién tiene acceso a ellos? Esfuerzos legislativos recientes como el RGPD en Europa intentan corregir este desequilibrio otorgando a las personas mayor control sobre su información personal. Sin embargo, aplicar estas regulaciones en jurisdicciones internacionales sigue siendo un desafío formidable.',
    hints: ['Complex debate with formal vocabulary', 'British accent expected'],
    hintsEs: ['Debate complejo con vocabulario formal', 'Se espera acento británico'],
    keywords: ['privacy', 'data', 'consent', 'GDPR', 'legislation'],
    duration: 50,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What do tech companies argue about data collection?',
        questionEs: '¿Qué argumentan las empresas tecnológicas sobre la recopilación de datos?',
        options: [
          'It is unethical and should be banned',
          'It enables personalised services',
          'It is only used for advertising',
          'It is not a security risk',
        ],
        correctAnswer: 'It enables personalised services',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What does GDPR stand for in context?',
        questionEs: '¿Qué representa el RGPD en este contexto?',
        options: [
          'A social media platform',
          'A European data protection regulation',
          'A global technology company',
          'An international court ruling',
        ],
        correctAnswer: 'A European data protection regulation',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What is described as the "crux" of the privacy issue?',
        questionEs: '¿Qué se describe como el "quid" del problema de privacidad?',
        options: [
          'The cost of digital devices',
          'Informed consent and what users know about their data',
          'The speed of internet connections',
          'The number of social media platforms',
        ],
        correctAnswer: 'Informed consent and what users know about their data',
        points: 15,
      },
    ],
    levelId: 10,
    vocabularyIds: [],
  },
  {
    id: 'listen_13',
    type: 'dictation',
    title: 'Advanced Dictation: Formal Prose',
    titleEs: 'Dictado Avanzado: Prosa Formal',
    difficulty: 3,
    audioText: 'The inherent complexity of language acquisition suggests that exposure alone is insufficient; structured practice and meaningful interaction are indispensable components of genuine fluency.',
    translation: 'La complejidad inherente de la adquisición del lenguaje sugiere que la exposición sola es insuficiente; la práctica estructurada y la interacción significativa son componentes indispensables de la fluidez genuina.',
    hints: ['Formal academic sentence', 'Pay attention to long compound adjectives'],
    hintsEs: ['Oración académica formal', 'Presta atención a los adjetivos compuestos largos'],
    keywords: ['acquisition', 'insufficient', 'indispensable', 'fluency'],
    duration: 10,
    questions: [
      {
        id: 'q1',
        type: 'dictation',
        question: 'Write exactly what you hear',
        questionEs: 'Escribe exactamente lo que escuchas',
        correctAnswer: 'The inherent complexity of language acquisition suggests that exposure alone is insufficient; structured practice and meaningful interaction are indispensable components of genuine fluency.',
        points: 40,
      },
    ],
    levelId: 11,
    vocabularyIds: [],
  },
  {
    id: 'listen_14',
    type: 'comprehension',
    title: 'Documentary: Neuroscience of Habit',
    titleEs: 'Documental: Neurociencia del Hábito',
    difficulty: 3,
    audioText: 'Neuroscientists have discovered that habits are encoded in the basal ganglia, a region of the brain that operates largely below the level of conscious awareness. When a behaviour is repeated consistently in a specific context, the neural pathway associated with it becomes increasingly reinforced — a process known as long-term potentiation. This is why breaking a habit requires more than willpower; it demands rewiring the neural circuitry itself. The most effective strategy, according to current research, is not to eliminate a habit but to replace it: substituting the routine while maintaining the same cue and reward structure that the brain has come to associate with the behaviour.',
    translation: 'Los neurocientíficos han descubierto que los hábitos se codifican en los ganglios basales, una región del cerebro que opera en gran medida por debajo del nivel de la conciencia. Cuando un comportamiento se repite consistentemente en un contexto específico, la vía neural asociada con él se refuerza cada vez más, un proceso conocido como potenciación a largo plazo. Por eso romper un hábito requiere más que fuerza de voluntad; exige reconfigurar el propio circuito neural. La estrategia más efectiva, según la investigación actual, no es eliminar un hábito sino reemplazarlo: sustituyendo la rutina mientras se mantiene la misma señal y estructura de recompensa que el cerebro ha llegado a asociar con el comportamiento.',
    hints: ['Scientific documentary narration style', 'Dense vocabulary, listen carefully'],
    hintsEs: ['Estilo de narración de documental científico', 'Vocabulario denso, escucha con cuidado'],
    keywords: ['basal ganglia', 'neural', 'potentiation', 'habit', 'circuitry'],
    duration: 50,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Where in the brain are habits encoded?',
        questionEs: '¿Dónde en el cerebro se codifican los hábitos?',
        options: ['Cerebral cortex', 'Basal ganglia', 'Hippocampus', 'Amygdala'],
        correctAnswer: 'Basal ganglia',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What is long-term potentiation?',
        questionEs: '¿Qué es la potenciación a largo plazo?',
        options: [
          'A type of memory loss',
          'Reinforcement of neural pathways through repetition',
          'The conscious control of habits',
          'A form of brain damage',
        ],
        correctAnswer: 'Reinforcement of neural pathways through repetition',
        points: 15,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What does research say is the most effective habit-change strategy?',
        questionEs: '¿Qué dice la investigación que es la estrategia más efectiva para cambiar hábitos?',
        options: [
          'Using pure willpower',
          'Eliminating the habit completely',
          'Replacing the routine while keeping the same cue and reward',
          'Avoiding situations that trigger the habit',
        ],
        correctAnswer: 'Replacing the routine while keeping the same cue and reward',
        points: 15,
      },
    ],
    levelId: 12,
    vocabularyIds: [],
  },

  // ============================================
  // NEW LISTENING EXERCISES — LevelIds 9–12
  // ============================================

  {
    id: 'listen_15',
    type: 'comprehension',
    title: 'University Lecture: Climate Policy',
    titleEs: 'Conferencia Universitaria: Política Climática',
    difficulty: 3,
    audioText: 'Today we will examine the evolution of climate policy over the past three decades. The Kyoto Protocol, adopted in 1997, established the first legally binding emissions targets for developed nations. However, its effectiveness was limited by the absence of major emitters such as the United States and China. The Paris Agreement of 2015 marked a significant shift: rather than imposing top-down targets, it invited each nation to submit its own nationally determined contributions. This approach has been praised for its inclusivity but criticised for lacking enforcement mechanisms. The key question for policymakers now is whether voluntary commitments can achieve the rapid decarbonisation that science demands.',
    translation: 'Hoy examinaremos la evolución de la política climática durante las últimas tres décadas. El Protocolo de Kioto, adoptado en 1997, estableció los primeros objetivos de emisiones legalmente vinculantes para las naciones desarrolladas. Sin embargo, su efectividad fue limitada por la ausencia de grandes emisores como Estados Unidos y China. El Acuerdo de París de 2015 marcó un cambio significativo: en lugar de imponer objetivos desde arriba, invitó a cada nación a presentar sus propias contribuciones determinadas a nivel nacional. Este enfoque ha sido elogiado por su inclusividad pero criticado por carecer de mecanismos de aplicación. La pregunta clave para los responsables políticos ahora es si los compromisos voluntarios pueden lograr la descarbonización rápida que la ciencia exige.',
    hints: ['Academic lecture on international policy', 'Compare Kyoto vs Paris approaches'],
    hintsEs: ['Conferencia académica sobre política internacional', 'Compara enfoques de Kioto vs París'],
    keywords: ['Kyoto', 'Paris', 'emissions', 'contributions', 'decarbonisation'],
    duration: 55,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'When was the Kyoto Protocol adopted?',
        questionEs: '¿Cuándo fue adoptado el Protocolo de Kioto?',
        options: ['1987', '1992', '1997', '2002'],
        correctAnswer: '1997',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What limitation did the Kyoto Protocol face?',
        questionEs: '¿Qué limitación enfrentó el Protocolo de Kioto?',
        options: ['It was too expensive', 'Major emitters like the US and China did not participate', 'It only covered Europe', 'It had no scientific basis'],
        correctAnswer: 'Major emitters like the US and China did not participate',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'How does the Paris Agreement differ from Kyoto in its approach?',
        questionEs: '¿En qué se diferencia el Acuerdo de París de Kioto en su enfoque?',
        options: ['It imposes stricter penalties', 'Each nation submits its own voluntary contributions', 'It only applies to developing countries', 'It focuses on adaptation rather than mitigation'],
        correctAnswer: 'Each nation submits its own voluntary contributions',
        points: 15,
      },
      {
        id: 'q4',
        type: 'fill-blank',
        question: 'The Paris approach has been criticised for lacking ____ mechanisms.',
        questionEs: 'El enfoque de París ha sido criticado por carecer de mecanismos de ____.',
        options: ['scientific', 'enforcement', 'financial', 'technical'],
        correctAnswer: 'enforcement',
        points: 10,
      },
    ],
    levelId: 9,
    vocabularyIds: [],
  },

  {
    id: 'listen_16',
    type: 'comprehension',
    title: 'TED-style Talk: The Future of Work',
    titleEs: 'Charla estilo TED: El Futuro del Trabajo',
    difficulty: 3,
    audioText: 'The nature of work is undergoing a transformation unprecedented in human history. Automation and artificial intelligence are not merely replacing manual labour; they are increasingly capable of performing cognitive tasks that were once the exclusive domain of highly educated professionals. Radiologists, legal researchers, and even creative writers are finding that algorithms can match or exceed their output in certain domains. This raises a profound question: what will humans do when machines can do almost everything? Some argue that we will be liberated to pursue more meaningful, creative, and interpersonal work. Others fear a future of technological unemployment and growing inequality. The answer will depend not on technology alone, but on the political and economic choices we make in the coming decades.',
    translation: 'La naturaleza del trabajo está experimentando una transformación sin precedentes en la historia humana. La automatización y la inteligencia artificial no solo están reemplazando el trabajo manual; son cada vez más capaces de realizar tareas cognitivas que alguna vez fueron dominio exclusivo de profesionales altamente educados. Los radiólogos, investigadores legales e incluso escritores creativos están descubriendo que los algoritmos pueden igualar o superar su producción en ciertos dominios. Esto plantea una pregunta profunda: ¿qué harán los humanos cuando las máquinas puedan hacer casi todo? Algunos argumentan que seremos liberados para perseguir un trabajo más significativo, creativo e interpersonal. Otros temen un futuro de desempleo tecnológico y creciente desigualdad. La respuesta dependerá no solo de la tecnología, sino de las elecciones políticas y económicas que tomemos en las próximas décadas.',
    hints: ['TED-style presentation', 'Balanced discussion of automation impacts'],
    hintsEs: ['Presentación estilo TED', 'Discusión equilibrada sobre impactos de la automatización'],
    keywords: ['automation', 'cognitive', 'algorithms', 'unemployment', 'inequality'],
    duration: 50,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'According to the speaker, what type of work is AI increasingly able to perform?',
        questionEs: 'Según el orador, ¿qué tipo de trabajo es la IA cada vez más capaz de realizar?',
        options: ['Only manual labour', 'Cognitive tasks once done by professionals', 'Agricultural work only', 'Customer service exclusively'],
        correctAnswer: 'Cognitive tasks once done by professionals',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'Which professions are mentioned as affected by algorithms?',
        questionEs: '¿Qué profesiones se mencionan como afectadas por los algoritmos?',
        options: ['Teachers and nurses only', 'Radiologists, legal researchers, and creative writers', 'Construction workers and drivers', 'Chefs and artists'],
        correctAnswer: 'Radiologists, legal researchers, and creative writers',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What does the speaker say the future of work depends on?',
        questionEs: '¿De qué dice el orador que depende el futuro del trabajo?',
        options: ['Technology alone', 'Political and economic choices we make', 'The speed of AI development', 'Education reform only'],
        correctAnswer: 'Political and economic choices we make',
        points: 15,
      },
    ],
    levelId: 10,
    vocabularyIds: [],
  },

  {
    id: 'listen_17',
    type: 'dictation',
    title: 'Advanced Dictation: Academic Argument',
    titleEs: 'Dictado Avanzado: Argumento Académico',
    difficulty: 3,
    audioText: 'It could be argued that the distinction between natural and artificial intelligence has become increasingly blurred, insofar as both systems process information through complex networks of interconnected nodes that adapt their responses based on accumulated experience.',
    translation: 'Podría argumentarse que la distinción entre inteligencia natural y artificial se ha vuelto cada vez más difusa, en la medida en que ambos sistemas procesan información a través de redes complejas de nodos interconectados que adaptan sus respuestas basándose en la experiencia acumulada.',
    hints: ['Formal academic sentence', 'Focus on subordinate clauses and hedging'],
    hintsEs: ['Oración académica formal', 'Enfócate en las oraciones subordinadas y el hedging'],
    keywords: ['distinction', 'blurred', 'interconnected', 'accumulated'],
    duration: 12,
    questions: [
      {
        id: 'q1',
        type: 'dictation',
        question: 'Write exactly what you hear',
        questionEs: 'Escribe exactamente lo que escuchas',
        correctAnswer: 'It could be argued that the distinction between natural and artificial intelligence has become increasingly blurred, insofar as both systems process information through complex networks of interconnected nodes that adapt their responses based on accumulated experience.',
        points: 45,
      },
    ],
    levelId: 11,
    vocabularyIds: [],
  },

  {
    id: 'listen_18',
    type: 'comprehension',
    title: 'Philosophy Podcast: Moral Responsibility',
    titleEs: 'Podcast de Filosofía: Responsabilidad Moral',
    difficulty: 3,
    audioText: 'The question of whether we possess genuine free will, or whether our actions are ultimately determined by prior causes beyond our control, has preoccupied philosophers for millennia. Compatibilists argue that free will and determinism can coexist: what matters for moral responsibility is not whether we could have done otherwise in some metaphysical sense, but whether our actions flow from our own desires, beliefs, and character. Incompatibilists, by contrast, insist that determinism would undermine responsibility entirely; if every event is the inevitable result of prior causes, then praise and blame become incoherent. The stakes are high: our practices of holding one another accountable, of criminal justice and moral evaluation, seem to presuppose that agents are in some meaningful sense the authors of their actions. Resolving this debate may require us to refine our concepts of freedom, causation, and what it means to be a person.',
    translation: 'La cuestión de si poseemos un libre albedrío genuino, o si nuestras acciones están determinadas por causas previas más allá de nuestro control, ha preocupado a los filósofos durante milenios. Los compatibilistas argumentan que el libre albedrío y el determinismo pueden coexistir: lo que importa para la responsabilidad moral no es si podríamos haber actuado de otra manera en algún sentido metafísico, sino si nuestras acciones fluyen de nuestros propios deseos, creencias y carácter. Los incompatibilistas, por el contrario, insisten en que el determinismo socavaría la responsabilidad por completo; si cada evento es el resultado inevitable de causas previas, entonces el elogio y la culpa se vuelven incoherentes. Las consecuencias son importantes: nuestras prácticas de hacernos responsables unos a otros, de justicia penal y evaluación moral, parecen presuponer que los agentes son en algún sentido significativo los autores de sus acciones. Resolver este debate puede requerir que refinemos nuestros conceptos de libertad, causalidad y lo que significa ser una persona.',
    hints: ['Dense philosophical discourse', 'Compatibilism vs incompatibilism'],
    hintsEs: ['Discurso filosófico denso', 'Compatibilismo vs incompatibilismo'],
    keywords: ['free will', 'determinism', 'compatibilist', 'responsibility', 'incoherent'],
    duration: 65,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What do compatibilists believe about free will and determinism?',
        questionEs: '¿Qué creen los compatibilistas sobre el libre albedrío y el determinismo?',
        options: ['They are mutually exclusive', 'They can coexist', 'Determinism is false', 'Free will is an illusion'],
        correctAnswer: 'They can coexist',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'According to compatibilists, what matters for moral responsibility?',
        questionEs: 'Según los compatibilistas, ¿qué importa para la responsabilidad moral?',
        options: ['Whether we could have done otherwise in a metaphysical sense', 'Whether our actions flow from our own desires, beliefs, and character', 'Whether we were physically free to move', 'Whether we knew the consequences'],
        correctAnswer: 'Whether our actions flow from our own desires, beliefs, and character',
        points: 15,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What do incompatibilists claim would happen if determinism were true?',
        questionEs: '¿Qué afirman los incompatibilistas que pasaría si el determinismo fuera verdadero?',
        options: ['We would have more freedom', 'Responsibility would be undermined entirely', 'Moral praise would increase', 'Criminal justice would improve'],
        correctAnswer: 'Responsibility would be undermined entirely',
        points: 15,
      },
      {
        id: 'q4',
        type: 'fill-blank',
        question: 'Our practices of holding one another ____ seem to presuppose that agents are authors of their actions.',
        questionEs: 'Nuestras prácticas de ____ mutuamente parecen presuponer que los agentes son autores de sus acciones.',
        options: ['responsible', 'accountable', 'guilty', 'liable'],
        correctAnswer: 'accountable',
        points: 10,
      },
    ],
    levelId: 12,
    vocabularyIds: [],
  },

  // ============================================
  // NEW EXERCISES — LevelIds 2, 5, 8, 13
  // ============================================

  {
    id: 'listen_19',
    type: 'comprehension',
    title: 'At the Café',
    titleEs: 'En el Café',
    difficulty: 1,
    audioText: 'Can I have a menu, please? I would like a sandwich and a glass of orange juice. How much is that? That will be six pounds fifty. Here you are. Thank you. Enjoy your meal!',
    translation: '¿Puedo tener un menú, por favor? Me gustaría un sándwich y un vaso de jugo de naranja. ¿Cuánto cuesta? Serán seis libras cincuenta. Aquí tiene. Gracias. ¡Buen provecho!',
    hints: ['Ordering food at a café', 'Prices and polite requests'],
    hintsEs: ['Pidiendo comida en un café', 'Precios y peticiones educadas'],
    keywords: ['menu', 'sandwich', 'orange juice', 'pounds'],
    duration: 12,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What does the customer want to drink?',
        questionEs: '¿Qué quiere beber el cliente?',
        options: ['Coffee', 'Tea', 'Orange juice', 'Water'],
        correctAnswer: 'Orange juice',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'How much does the order cost?',
        questionEs: '¿Cuánto cuesta el pedido?',
        options: ['Five pounds', 'Six pounds fifty', 'Seven pounds', 'Eight pounds'],
        correctAnswer: 'Six pounds fifty',
        points: 10,
      },
    ],
    levelId: 2,
    vocabularyIds: [],
  },
  {
    id: 'listen_20',
    type: 'comprehension',
    title: 'Travel Plans',
    titleEs: 'Planes de Viaje',
    difficulty: 2,
    audioText: 'I am planning a trip to Barcelona next month. I have already booked my flight and hotel. I am thinking about visiting the Sagrada Familia and the Gothic Quarter. Do you have any recommendations for restaurants? I have heard the tapas there are excellent.',
    translation: 'Estoy planeando un viaje a Barcelona el próximo mes. Ya reservé mi vuelo y hotel. Estoy pensando en visitar la Sagrada Familia y el Barrio Gótico. ¿Tienes alguna recomendación de restaurantes? He escuchado que las tapas allí son excelentes.',
    hints: ['Travel conversation', 'Barcelona landmarks and food'],
    hintsEs: ['Conversación de viaje', 'Monumentos y comida de Barcelona'],
    keywords: ['Barcelona', 'flight', 'Sagrada Familia', 'tapas'],
    duration: 18,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What has the speaker already booked?',
        questionEs: '¿Qué ha reservado ya el hablante?',
        options: ['Restaurants only', 'Flight and hotel', 'Museum tickets', 'Train tickets'],
        correctAnswer: 'Flight and hotel',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'Which landmark does the speaker want to visit?',
        questionEs: '¿Qué monumento quiere visitar el hablante?',
        options: ['The Alhambra', 'Sagrada Familia', 'Park Güell only', 'The Prado Museum'],
        correctAnswer: 'Sagrada Familia',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What type of food does the speaker mention?',
        questionEs: '¿Qué tipo de comida menciona el hablante?',
        options: ['Paella', 'Tapas', 'Churros', 'Gazpacho'],
        correctAnswer: 'Tapas',
        points: 10,
      },
    ],
    levelId: 5,
    vocabularyIds: [],
  },
  {
    id: 'listen_21',
    type: 'comprehension',
    title: 'Economic Policy Debate',
    titleEs: 'Debate sobre Política Económica',
    difficulty: 3,
    audioText: 'The debate over fiscal stimulus versus austerity has dominated economic policy discussions since the global financial crisis. Proponents of stimulus argue that government spending during recessions can kickstart demand and prevent prolonged unemployment. Austerity advocates, by contrast, contend that excessive public debt undermines long-term growth and investor confidence. Empirical evidence remains contested: some studies suggest that multiplier effects of government spending are substantial, whilst others find that debt overhangs suppress private investment. The optimal policy likely depends on country-specific factors such as debt levels, monetary policy space, and institutional credibility.',
    translation: 'El debate entre estímulo fiscal y austeridad ha dominado las discusiones de política económica desde la crisis financiera global. Los defensores del estímulo argumentan que el gasto gubernamental durante las recesiones puede reactivar la demanda y prevenir el desempleo prolongado. Los defensores de la austeridad, por el contrario, sostienen que el exceso de deuda pública socava el crecimiento a largo plazo y la confianza de los inversores. La evidencia empírica sigue siendo controvertida: algunos estudios sugieren que los efectos multiplicadores del gasto gubernamental son sustanciales, mientras que otros encuentran que el exceso de deuda suprime la inversión privada. La política óptima probablemente depende de factores específicos de cada país como los niveles de deuda, el espacio de política monetaria y la credibilidad institucional.',
    hints: ['Academic economics discussion', 'Compare stimulus vs austerity arguments'],
    hintsEs: ['Discusión académica de economía', 'Compara argumentos de estímulo vs austeridad'],
    keywords: ['fiscal', 'austerity', 'stimulus', 'debt', 'multiplier'],
    duration: 55,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What do stimulus proponents argue government spending can do?',
        questionEs: '¿Qué argumentan los defensores del estímulo que puede hacer el gasto gubernamental?',
        options: ['Reduce inflation', 'Kickstart demand and prevent prolonged unemployment', 'Lower interest rates', 'Increase exports'],
        correctAnswer: 'Kickstart demand and prevent prolonged unemployment',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What do austerity advocates claim excessive debt undermines?',
        questionEs: '¿Qué afirman los defensores de la austeridad que socava el exceso de deuda?',
        options: ['Short-term employment', 'Long-term growth and investor confidence', 'Consumer spending', 'Government efficiency'],
        correctAnswer: 'Long-term growth and investor confidence',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What does the speaker say the optimal policy depends on?',
        questionEs: '¿De qué dice el orador que depende la política óptima?',
        options: ['A single universal formula', 'Country-specific factors like debt levels and institutional credibility', 'Only monetary policy', 'International agreements'],
        correctAnswer: 'Country-specific factors like debt levels and institutional credibility',
        points: 15,
      },
    ],
    levelId: 8,
    vocabularyIds: [],
  },
  {
    id: 'listen_22',
    type: 'dictation',
    title: 'Dictation: Economic Theory',
    titleEs: 'Dictado: Teoría Económica',
    difficulty: 3,
    audioText: 'The efficient market hypothesis posits that asset prices fully reflect all available information, thereby rendering it impossible to consistently outperform the market through stock selection or market timing.',
    translation: 'La hipótesis del mercado eficiente postula que los precios de los activos reflejan plenamente toda la información disponible, lo que hace imposible superar consistentemente al mercado mediante la selección de acciones o el timing del mercado.',
    hints: ['Formal academic sentence', 'Finance and economics terminology'],
    hintsEs: ['Oración académica formal', 'Terminología de finanzas y economía'],
    keywords: ['efficient', 'hypothesis', 'asset', 'outperform'],
    duration: 12,
    questions: [
      {
        id: 'q1',
        type: 'dictation',
        question: 'Write exactly what you hear',
        questionEs: 'Escribe exactamente lo que escuchas',
        correctAnswer: 'The efficient market hypothesis posits that asset prices fully reflect all available information, thereby rendering it impossible to consistently outperform the market through stock selection or market timing.',
        points: 45,
      },
    ],
    levelId: 8,
    vocabularyIds: [],
  },
  {
    id: 'listen_23',
    type: 'comprehension',
    title: 'Literary Theory: Postcolonial Critique',
    titleEs: 'Teoría Literaria: Crítica Poscolonial',
    difficulty: 3,
    audioText: 'Postcolonial literary theory interrogates the ways in which colonial discourse has constructed the colonised subject as the antithesis of European rationality and civilisation. Edward Said\'s concept of Orientalism demonstrated how Western representations of the East have historically served to legitimise imperial domination by portraying colonised peoples as exotic, irrational, and in need of enlightenment. Subsequent scholars, including Homi Bhabha and Gayatri Spivak, have complicated this framework by examining the ambivalence and hybridity inherent in colonial encounters. The subaltern, as Spivak famously argued, cannot speak within the dominant epistemic structures that have historically silenced marginalised voices. Contemporary postcolonial criticism continues to grapple with questions of agency, representation, and the possibility of recuperating subaltern perspectives.',
    translation: 'La teoría literaria poscolonial interroga las formas en que el discurso colonial ha construido al sujeto colonizado como la antítesis de la racionalidad y civilización europeas. El concepto de Orientalismo de Edward Said demostró cómo las representaciones occidentales de Oriente han servido históricamente para legitimar la dominación imperial al retratar a los pueblos colonizados como exóticos, irracionales y necesitados de ilustración. Estudiosos posteriores, incluyendo a Homi Bhabha y Gayatri Spivak, han complicado este marco al examinar la ambivalencia e hibridad inherentes a los encuentros coloniales. El subalterno, como argumentó famosamente Spivak, no puede hablar dentro de las estructuras epistémicas dominantes que históricamente han silenciado las voces marginadas. La crítica poscolonial contemporánea sigue lidiando con cuestiones de agencia, representación y la posibilidad de recuperar perspectivas subalternas.',
    hints: ['Dense literary theory', 'Postcolonial studies and key theorists'],
    hintsEs: ['Teoría literaria densa', 'Estudios poscoloniales y teóricos clave'],
    keywords: ['Orientalism', 'Said', 'Spivak', 'subaltern', 'hybridity'],
    duration: 65,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Who developed the concept of Orientalism?',
        questionEs: '¿Quién desarrolló el concepto de Orientalismo?',
        options: ['Homi Bhabha', 'Edward Said', 'Gayatri Spivak', 'Frantz Fanon'],
        correctAnswer: 'Edward Said',
        points: 10,
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'According to Said, what purpose did Western representations of the East serve?',
        questionEs: 'Según Said, ¿qué propósito cumplieron las representaciones occidentales de Oriente?',
        options: ['To promote tourism', 'To legitimise imperial domination', 'To encourage trade', 'To foster cultural exchange'],
        correctAnswer: 'To legitimise imperial domination',
        points: 10,
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What did Spivak argue about the subaltern?',
        questionEs: '¿Qué argumentó Spivak sobre el subalterno?',
        options: ['The subaltern speaks clearly', 'The subaltern cannot speak within dominant epistemic structures', 'The subaltern has full agency', 'The subaltern represents the coloniser'],
        correctAnswer: 'The subaltern cannot speak within dominant epistemic structures',
        points: 15,
      },
      {
        id: 'q4',
        type: 'fill-blank',
        question: 'Bhabha and Spivak examined the ____ and hybridity inherent in colonial encounters.',
        questionEs: 'Bhabha y Spivak examinaron la ____ e hibridad inherentes a los encuentros coloniales.',
        options: ['clarity', 'ambivalence', 'simplicity', 'certainty'],
        correctAnswer: 'ambivalence',
        points: 10,
      },
    ],
    levelId: 13,
    vocabularyIds: [],
  },
  {
    id: 'listen_24',
    type: 'dictation',
    title: 'C2+ Dictation: Philosophical Prose',
    titleEs: 'Dictado C2+: Prosa Filosófica',
    difficulty: 3,
    audioText: 'The phenomenological reduction, as Husserl conceived it, entails bracketing the natural attitude in order to attend to the structures of consciousness itself, thereby disclosing the intentional character of all experience.',
    translation: 'La reducción fenomenológica, tal como la concibió Husserl, implica poner entre paréntesis la actitud natural para atender a las estructuras de la conciencia misma, revelando así el carácter intencional de toda experiencia.',
    hints: ['Philosophical terminology', 'Phenomenology and Husserl'],
    hintsEs: ['Terminología filosófica', 'Fenomenología y Husserl'],
    keywords: ['phenomenological', 'bracketing', 'intentional', 'consciousness'],
    duration: 12,
    questions: [
      {
        id: 'q1',
        type: 'dictation',
        question: 'Write exactly what you hear',
        questionEs: 'Escribe exactamente lo que escuchas',
        correctAnswer: 'The phenomenological reduction, as Husserl conceived it, entails bracketing the natural attitude in order to attend to the structures of consciousness itself, thereby disclosing the intentional character of all experience.',
        points: 50,
      },
    ],
    levelId: 13,
    vocabularyIds: [],
  },
];

// Helper functions
export function getListeningByLevel(levelId: number): ListeningExercise[] {
  return listeningExercises.filter(e => e.levelId === levelId);
}

export function getListeningByDifficulty(difficulty: 1 | 2 | 3): ListeningExercise[] {
  return listeningExercises.filter(e => e.difficulty === difficulty);
}

export function getListeningByType(type: ListeningExercise['type']): ListeningExercise[] {
  return listeningExercises.filter(e => e.type === type);
}

export function getListeningById(id: string): ListeningExercise | undefined {
  return listeningExercises.find(e => e.id === id);
}

// Text-to-speech helper
export function speakText(
  text: string,
  options: {
    accent?: string;
    rate?: number;
    pitch?: number;
    volume?: number;
    onEnd?: () => void;
    onError?: (error: Error) => void;
  } = {}
): SpeechSynthesisUtterance | null {
  if (!('speechSynthesis' in window)) {
    console.warn('Text-to-speech not supported');
    options.onError?.(new Error('Text-to-speech not supported'));
    return null;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Set voice based on accent
  const voices = window.speechSynthesis.getVoices();
  const accentCode = options.accent || 'en-US';
  const matchingVoice = voices.find(v => v.lang === accentCode) || 
                        voices.find(v => v.lang.startsWith('en'));
  
  if (matchingVoice) {
    utterance.voice = matchingVoice;
  }

  utterance.rate = options.rate ?? 1.0;
  utterance.pitch = options.pitch ?? 1.0;
  utterance.volume = options.volume ?? 1.0;

  if (options.onEnd) {
    utterance.onend = options.onEnd;
  }

  if (options.onError) {
    utterance.onerror = (event) => {
      options.onError?.(new Error(event.error));
    };
  }

  window.speechSynthesis.speak(utterance);
  
  return utterance;
}

// Check browser TTS support
export function checkTTSSupport(): {
  supported: boolean;
  voices: SpeechSynthesisVoice[];
  englishVoices: SpeechSynthesisVoice[];
} {
  if (!('speechSynthesis' in window)) {
    return { supported: false, voices: [], englishVoices: [] };
  }

  const voices = window.speechSynthesis.getVoices();
  const englishVoices = voices.filter(v => v.lang.startsWith('en'));

  return {
    supported: true,
    voices,
    englishVoices,
  };
}

export default listeningExercises;
