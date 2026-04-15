// Simplified News Articles - For reading practice at different levels
// Each article is adapted to specific CEFR levels

export interface NewsArticle {
  id: string;
  title: string;
  titleEs: string;
  level: 1 | 2 | 3 | 4 | 5 | 6; // CEFR level equivalent (A1-C2)
  category: 'technology' | 'science' | 'culture' | 'environment' | 'health' | 'sports' | 'world' | 'business' | 'education';
  readingTime: number; // minutes
  content: string;
  vocabulary: { word: string; definition: string; definitionEs: string }[];
  comprehensionQuestions: {
    question: string;
    questionEs: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    explanationEs: string;
  }[];
  discussionQuestions: { english: string; spanish: string }[];
  datePublished: string;
  imageDescription?: string;
  summary?: string;
  summaryEs?: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  // Level 1 - Beginner
  {
    id: 'news-1-1',
    title: 'New Park Opens in City Center',
    titleEs: 'Nuevo Parque Abre en el Centro de la Ciudad',
    level: 1,
    category: 'world',
    readingTime: 2,
    datePublished: '2026-01-15',
    imageDescription: 'A beautiful green park with trees and benches',
    content: `A new park opened yesterday in the city center. The park has many trees and flowers. There are benches where people can sit and relax.

The park has a playground for children. Kids can play on swings and slides. There is also a small pond with ducks.

Many families came to see the new park. "It's very beautiful," said Maria, a mother with two children. "My kids love it."

The park is open every day from 6 AM to 10 PM. Entry is free for everyone.`,
    vocabulary: [
      { word: 'park', definition: 'A public area with grass and trees', definitionEs: 'Un área pública con pasto y árboles' },
      { word: 'bench', definition: 'A long seat for several people', definitionEs: 'Un asiento largo para varias personas' },
      { word: 'playground', definition: 'An area where children play', definitionEs: 'Un área donde juegan los niños' },
      { word: 'pond', definition: 'A small body of water', definitionEs: 'Un pequeño cuerpo de agua' },
      { word: 'entry', definition: 'The act of going into a place', definitionEs: 'El acto de entrar a un lugar' },
    ],
    comprehensionQuestions: [
      {
        question: 'Where did the new park open?',
        questionEs: '¿Dónde abrió el nuevo parque?',
        options: ['In the mountains', 'In the city center', 'Near the beach', 'In a small town'],
        correctAnswer: 1,
        explanation: 'The article says "A new park opened yesterday in the city center."',
        explanationEs: 'El artículo dice "Un nuevo parque abrió ayer en el centro de la ciudad."',
      },
      {
        question: 'What animals are in the pond?',
        questionEs: '¿Qué animales hay en el estanque?',
        options: ['Fish', 'Ducks', 'Frogs', 'Swans'],
        correctAnswer: 1,
        explanation: 'The article mentions "a small pond with ducks."',
        explanationEs: 'El artículo menciona "un pequeño estanque con patos."',
      },
      {
        question: 'How much does it cost to enter the park?',
        questionEs: '¿Cuánto cuesta entrar al parque?',
        options: ['$5', '$10', 'Free', '$2'],
        correctAnswer: 2,
        explanation: 'The article states "Entry is free for everyone."',
        explanationEs: 'El artículo dice "La entrada es gratis para todos."',
      },
    ],
    discussionQuestions: [
      { english: 'Do you like parks? Why or why not?', spanish: '¿Te gustan los parques? ¿Por qué o por qué no?' },
      { english: 'What do you like to do in a park?', spanish: '¿Qué te gusta hacer en un parque?' },
    ],
  },
  {
    id: 'news-1-2',
    title: 'Local Dog Finds Lost Child',
    titleEs: 'Perro Local Encuentra Niño Perdido',
    level: 1,
    category: 'world',
    readingTime: 2,
    datePublished: '2026-01-18',
    content: `A dog named Max helped find a lost child yesterday. The three-year-old boy walked away from his home and got lost in the forest.

Max is a big brown dog. He lives near the forest with his owner, Mr. Johnson. When Max heard people calling for the child, he started to search.

After one hour, Max found the boy sitting under a tree. The boy was cold but safe. Max stayed with the boy until help came.

The boy's parents were very happy. "Max is a hero," said the mother. The family gave Max a big bone as a thank you.`,
    vocabulary: [
      { word: 'lost', definition: 'Unable to find your way', definitionEs: 'Sin poder encontrar el camino' },
      { word: 'forest', definition: 'A large area with many trees', definitionEs: 'Un área grande con muchos árboles' },
      { word: 'search', definition: 'To look for something', definitionEs: 'Buscar algo' },
      { word: 'safe', definition: 'Not in danger', definitionEs: 'Fuera de peligro' },
      { word: 'hero', definition: 'A person or animal who helps others', definitionEs: 'Una persona o animal que ayuda a otros' },
    ],
    comprehensionQuestions: [
      {
        question: 'What is the dog\'s name?',
        questionEs: '¿Cómo se llama el perro?',
        options: ['Buddy', 'Max', 'Rex', 'Charlie'],
        correctAnswer: 1,
        explanation: 'The article says "A dog named Max helped find a lost child."',
        explanationEs: 'El artículo dice "Un perro llamado Max ayudó a encontrar un niño perdido."',
      },
      {
        question: 'Where did Max find the boy?',
        questionEs: '¿Dónde encontró Max al niño?',
        options: ['In a house', 'Under a tree', 'Near a river', 'On a road'],
        correctAnswer: 1,
        explanation: 'The article says "Max found the boy sitting under a tree."',
        explanationEs: 'El artículo dice "Max encontró al niño sentado bajo un árbol."',
      },
      {
        question: 'What did the family give Max?',
        questionEs: '¿Qué le dio la familia a Max?',
        options: ['A toy', 'A big bone', 'Food', 'A new house'],
        correctAnswer: 1,
        explanation: 'The article states the family gave Max a big bone as a thank you.',
        explanationEs: 'El artículo dice que la familia le dio a Max un gran hueso como agradecimiento.',
      },
    ],
    discussionQuestions: [
      { english: 'Do you have a pet? Tell me about it.', spanish: '¿Tienes una mascota? Cuéntame de ella.' },
      { english: 'Why are dogs good helpers?', spanish: '¿Por qué los perros son buenos ayudantes?' },
    ],
  },
  // Level 2 - Elementary
  {
    id: 'news-2-1',
    title: 'Scientists Discover New Ocean Species',
    titleEs: 'Científicos Descubren Nueva Especie Oceánica',
    level: 2,
    category: 'science',
    readingTime: 3,
    datePublished: '2026-01-10',
    content: `Scientists have discovered a new type of fish in the deep ocean. The fish lives 3,000 meters below the surface, where it is very dark and cold.

The fish has a special light on its head that helps it see in the darkness. Scientists named it "Luminos" because it produces its own light. This process is called bioluminescence.

Dr. Sarah Chen led the research team. She said, "This discovery shows us that there is still so much to learn about our oceans. We believe there are many more species waiting to be discovered."

The team used a special robot submarine to explore the deep ocean. The robot has cameras and can withstand the extreme pressure at great depths.

This is the third new species the team has found this year. Their research helps us understand how life adapts to extreme conditions.`,
    vocabulary: [
      { word: 'species', definition: 'A group of similar living things', definitionEs: 'Un grupo de seres vivos similares' },
      { word: 'surface', definition: 'The top layer of something', definitionEs: 'La capa superior de algo' },
      { word: 'bioluminescence', definition: 'Light produced by living things', definitionEs: 'Luz producida por seres vivos' },
      { word: 'submarine', definition: 'A vehicle that goes underwater', definitionEs: 'Un vehículo que va bajo el agua' },
      { word: 'extreme', definition: 'Very great or severe', definitionEs: 'Muy grande o severo' },
    ],
    comprehensionQuestions: [
      {
        question: 'How deep does the new fish live?',
        questionEs: '¿A qué profundidad vive el nuevo pez?',
        options: ['100 meters', '1,000 meters', '3,000 meters', '10,000 meters'],
        correctAnswer: 2,
        explanation: 'The article states "The fish lives 3,000 meters below the surface."',
        explanationEs: 'El artículo dice "El pez vive 3,000 metros bajo la superficie."',
      },
      {
        question: 'Why is the fish named "Luminos"?',
        questionEs: '¿Por qué el pez se llama "Luminos"?',
        options: ['Because it is colorful', 'Because it produces light', 'Because it is fast', 'Because it is large'],
        correctAnswer: 1,
        explanation: 'The fish was named Luminos because it produces its own light.',
        explanationEs: 'El pez fue llamado Luminos porque produce su propia luz.',
      },
      {
        question: 'How did scientists explore the deep ocean?',
        questionEs: '¿Cómo exploraron los científicos el océano profundo?',
        options: ['By diving', 'With a robot submarine', 'From a boat', 'With satellites'],
        correctAnswer: 1,
        explanation: 'The team used a special robot submarine to explore.',
        explanationEs: 'El equipo usó un submarino robot especial para explorar.',
      },
    ],
    discussionQuestions: [
      { english: 'What other animals do you think live in the deep ocean?', spanish: '¿Qué otros animales crees que viven en el océano profundo?' },
      { english: 'Would you like to explore the ocean? Why?', spanish: '¿Te gustaría explorar el océano? ¿Por qué?' },
    ],
  },
  {
    id: 'news-2-2',
    title: 'Electric Cars Become More Popular',
    titleEs: 'Los Autos Eléctricos Se Vuelven Más Populares',
    level: 2,
    category: 'technology',
    readingTime: 3,
    datePublished: '2026-01-12',
    content: `More people are buying electric cars than ever before. Last year, electric car sales increased by 40% compared to the previous year.

Electric cars use batteries instead of gasoline. This makes them better for the environment because they don't produce pollution when driving. Many governments offer discounts to people who buy electric cars.

One challenge is finding places to charge the batteries. However, the number of charging stations is growing quickly. Many shopping centers and parking lots now have charging points.

Car expert John Miller says, "Electric cars are improving every year. They can now travel 400 to 500 kilometers on a single charge. In a few years, most new cars will be electric."

Some people worry about the cost, but prices are going down. Used electric cars are now available at affordable prices.`,
    vocabulary: [
      { word: 'battery', definition: 'A device that stores electricity', definitionEs: 'Un dispositivo que almacena electricidad' },
      { word: 'gasoline', definition: 'Fuel for traditional cars', definitionEs: 'Combustible para autos tradicionales' },
      { word: 'pollution', definition: 'Harmful substances in the environment', definitionEs: 'Sustancias dañinas en el ambiente' },
      { word: 'charging station', definition: 'A place to charge electric vehicles', definitionEs: 'Un lugar para cargar vehículos eléctricos' },
      { word: 'affordable', definition: 'Not expensive, can be bought easily', definitionEs: 'No costoso, se puede comprar fácilmente' },
    ],
    comprehensionQuestions: [
      {
        question: 'By how much did electric car sales increase?',
        questionEs: '¿Cuánto aumentaron las ventas de autos eléctricos?',
        options: ['20%', '30%', '40%', '50%'],
        correctAnswer: 2,
        explanation: 'The article says sales increased by 40%.',
        explanationEs: 'El artículo dice que las ventas aumentaron un 40%.',
      },
      {
        question: 'Why are electric cars better for the environment?',
        questionEs: '¿Por qué los autos eléctricos son mejores para el medio ambiente?',
        options: ['They are faster', 'They don\'t produce pollution', 'They are cheaper', 'They are smaller'],
        correctAnswer: 1,
        explanation: 'Electric cars don\'t produce pollution when driving.',
        explanationEs: 'Los autos eléctricos no producen contaminación al conducir.',
      },
      {
        question: 'How far can electric cars travel on one charge?',
        questionEs: '¿Qué distancia pueden recorrer los autos eléctricos con una carga?',
        options: ['100-200 km', '200-300 km', '400-500 km', '600-700 km'],
        correctAnswer: 2,
        explanation: 'They can now travel 400 to 500 kilometers on a single charge.',
        explanationEs: 'Ahora pueden viajar 400 a 500 kilómetros con una sola carga.',
      },
    ],
    discussionQuestions: [
      { english: 'Would you buy an electric car? Why or why not?', spanish: '¿Comprarías un auto eléctrico? ¿Por qué o por qué no?' },
      { english: 'How can we help the environment?', spanish: '¿Cómo podemos ayudar al medio ambiente?' },
    ],
  },
  // Level 3 - Intermediate
  {
    id: 'news-3-1',
    title: 'Remote Work Changes City Life',
    titleEs: 'El Trabajo Remoto Cambia la Vida en la Ciudad',
    level: 3,
    category: 'culture',
    readingTime: 4,
    datePublished: '2026-01-08',
    content: `The rise of remote work is transforming how people live and where they choose to settle. A recent survey found that 35% of workers now work from home at least three days a week, compared to just 5% before the pandemic.

This shift has had significant effects on urban areas. Many workers have moved away from expensive city centers to smaller towns or suburban areas. They're seeking more space, lower costs, and a better quality of life.

Real estate expert Amanda Torres explains, "We're seeing a reversal of decades-long trends. People used to move to cities for job opportunities. Now, with remote work, they have more flexibility."

However, this change presents challenges for cities. Some downtown areas have seen decreased foot traffic, affecting local businesses like restaurants and coffee shops. City planners are working on solutions to revitalize these areas.

On the positive side, reduced commuting has lowered carbon emissions and given workers more time with their families. Studies show that remote workers report higher job satisfaction and better work-life balance.

Companies are adapting too. Many have adopted hybrid models, requiring employees to come to the office only a few days per week. This approach aims to maintain team collaboration while offering flexibility.`,
    vocabulary: [
      { word: 'transforming', definition: 'Changing significantly', definitionEs: 'Cambiando significativamente' },
      { word: 'survey', definition: 'A study that collects information from people', definitionEs: 'Un estudio que recolecta información de personas' },
      { word: 'suburban', definition: 'Areas outside city centers', definitionEs: 'Áreas fuera de los centros de ciudad' },
      { word: 'flexibility', definition: 'The ability to adapt or change', definitionEs: 'La capacidad de adaptarse o cambiar' },
      { word: 'hybrid', definition: 'A combination of two different things', definitionEs: 'Una combinación de dos cosas diferentes' },
      { word: 'revitalize', definition: 'To bring new life or energy to something', definitionEs: 'Dar nueva vida o energía a algo' },
    ],
    comprehensionQuestions: [
      {
        question: 'What percentage of workers now work from home at least three days a week?',
        questionEs: '¿Qué porcentaje de trabajadores ahora trabajan desde casa al menos tres días a la semana?',
        options: ['15%', '25%', '35%', '45%'],
        correctAnswer: 2,
        explanation: 'The article states that 35% of workers now work from home at least three days a week.',
        explanationEs: 'El artículo dice que el 35% de los trabajadores ahora trabajan desde casa al menos tres días a la semana.',
      },
      {
        question: 'What are workers seeking when they move away from cities?',
        questionEs: '¿Qué buscan los trabajadores cuando se mudan fuera de las ciudades?',
        options: ['Higher salaries', 'More space, lower costs, better quality of life', 'Better weather', 'More job opportunities'],
        correctAnswer: 1,
        explanation: 'Workers are seeking more space, lower costs, and a better quality of life.',
        explanationEs: 'Los trabajadores buscan más espacio, menores costos y mejor calidad de vida.',
      },
      {
        question: 'What is one benefit of reduced commuting?',
        questionEs: '¿Cuál es un beneficio de reducir el desplazamiento?',
        options: ['Higher salaries', 'Lower carbon emissions', 'More job opportunities', 'Better internet'],
        correctAnswer: 1,
        explanation: 'Reduced commuting has lowered carbon emissions.',
        explanationEs: 'Reducir el desplazamiento ha disminuido las emisiones de carbono.',
      },
    ],
    discussionQuestions: [
      { english: 'Would you prefer to work from home or in an office? Why?', spanish: '¿Preferirías trabajar desde casa o en una oficina? ¿Por qué?' },
      { english: 'How do you think cities will change in the next 10 years?', spanish: '¿Cómo crees que cambiarán las ciudades en los próximos 10 años?' },
    ],
  },
  {
    id: 'news-3-2',
    title: 'AI Tools Transform Education',
    titleEs: 'Herramientas de IA Transforman la Educación',
    level: 3,
    category: 'technology',
    readingTime: 4,
    datePublished: '2026-01-14',
    content: `Artificial intelligence is revolutionizing education at all levels, from elementary schools to universities. New AI-powered tools are helping teachers personalize learning and giving students instant feedback on their work.

One of the most popular applications is AI tutoring systems. These programs can identify areas where students struggle and provide targeted practice. Unlike traditional methods, AI tutors are available 24/7 and can adapt to each student's pace.

Professor Michael Chang from Stanford University notes, "We're seeing students make faster progress with AI assistance. The technology doesn't replace teachers—it enhances their ability to help each student individually."

However, there are concerns about over-reliance on technology. Critics argue that students need to develop critical thinking skills that AI cannot teach. There are also questions about data privacy and ensuring equal access to these tools.

Schools are implementing guidelines to balance AI use with traditional learning methods. Many institutions require students to complete certain assignments without AI assistance to ensure they're developing fundamental skills.

The technology continues to evolve rapidly. Language learning apps now use AI to have conversations with learners in their target language. Math programs can solve problems step-by-step, explaining each calculation. Writing assistants help students improve their essays while encouraging original thinking.`,
    vocabulary: [
      { word: 'revolutionizing', definition: 'Completely changing something', definitionEs: 'Cambiando algo completamente' },
      { word: 'personalize', definition: 'To make suitable for individual needs', definitionEs: 'Hacer adecuado para necesidades individuales' },
      { word: 'targeted', definition: 'Aimed at a specific goal', definitionEs: 'Dirigido a un objetivo específico' },
      { word: 'over-reliance', definition: 'Depending too much on something', definitionEs: 'Depender demasiado de algo' },
      { word: 'fundamental', definition: 'Basic and essential', definitionEs: 'Básico y esencial' },
      { word: 'evolve', definition: 'To develop gradually', definitionEs: 'Desarrollarse gradualmente' },
    ],
    comprehensionQuestions: [
      {
        question: 'What is one advantage of AI tutoring systems?',
        questionEs: '¿Cuál es una ventaja de los sistemas de tutoría con IA?',
        options: ['They are cheaper', 'They are available 24/7', 'They replace teachers', 'They only work online'],
        correctAnswer: 1,
        explanation: 'AI tutors are available 24/7 and can adapt to each student\'s pace.',
        explanationEs: 'Los tutores de IA están disponibles 24/7 y pueden adaptarse al ritmo de cada estudiante.',
      },
      {
        question: 'According to Professor Chang, what is AI\'s role in education?',
        questionEs: 'Según el Profesor Chang, ¿cuál es el papel de la IA en la educación?',
        options: ['To replace teachers', 'To enhance teachers\' ability to help students', 'To reduce costs', 'To eliminate homework'],
        correctAnswer: 1,
        explanation: 'AI enhances teachers\' ability to help each student individually.',
        explanationEs: 'La IA mejora la capacidad de los maestros para ayudar a cada estudiante individualmente.',
      },
      {
        question: 'What concern do critics have about AI in education?',
        questionEs: '¿Qué preocupación tienen los críticos sobre la IA en la educación?',
        options: ['It\'s too expensive', 'Students might over-rely on it', 'It\'s too complicated', 'Teachers don\'t understand it'],
        correctAnswer: 1,
        explanation: 'Critics argue about over-reliance on technology.',
        explanationEs: 'Los críticos argumentan sobre la dependencia excesiva de la tecnología.',
      },
    ],
    discussionQuestions: [
      { english: 'How has technology changed your learning experience?', spanish: '¿Cómo ha cambiado la tecnología tu experiencia de aprendizaje?' },
      { english: 'What are the advantages and disadvantages of AI in education?', spanish: '¿Cuáles son las ventajas y desventajas de la IA en la educación?' },
    ],
  },
  // Level 1 - Additional articles
  {
    id: 'news-a1-tech',
    title: 'New App Helps People Learn Languages',
    titleEs: 'Nueva App Ayuda a las Personas a Aprender Idiomas',
    level: 1,
    category: 'technology',
    readingTime: 2,
    datePublished: '2026-02-10',
    summary: 'A new phone app helps people learn languages with pictures and games.',
    summaryEs: 'Una nueva app de teléfono ayuda a las personas a aprender idiomas con imágenes y juegos.',
    content: `A new app helps people learn languages. The app uses pictures and games. It is free to download.

Many people use the app every day. You can learn English, Spanish, and other languages. The app speaks words and shows pictures.

"I like it very much," says Tom, a student. "I learn five new words every day." The app works on phones and tablets.

The company says ten million people use the app. It is very popular in many countries.`,
    vocabulary: [
      { word: 'app', definition: 'A program on a phone or computer', definitionEs: 'Un programa en un teléfono o computadora' },
      { word: 'download', definition: 'To get something from the internet', definitionEs: 'Obtener algo de internet' },
      { word: 'tablet', definition: 'A flat computer you can hold', definitionEs: 'Una computadora plana que puedes sostener' },
      { word: 'popular', definition: 'Liked by many people', definitionEs: 'Que le gusta a muchas personas' },
      { word: 'company', definition: 'A business or organization', definitionEs: 'Un negocio u organización' },
    ],
    comprehensionQuestions: [
      {
        question: 'What does the app help people do?',
        questionEs: '¿Qué ayuda la app a las personas a hacer?',
        options: ['Cook food', 'Learn languages', 'Play music', 'Take photos'],
        correctAnswer: 1,
        explanation: 'The article says "A new app helps people learn languages."',
        explanationEs: 'El artículo dice "Una nueva app ayuda a las personas a aprender idiomas."',
      },
      {
        question: 'How many people use the app?',
        questionEs: '¿Cuántas personas usan la app?',
        options: ['One million', 'Five million', 'Ten million', 'Twenty million'],
        correctAnswer: 2,
        explanation: 'The company says ten million people use the app.',
        explanationEs: 'La empresa dice que diez millones de personas usan la app.',
      },
      {
        question: 'What does Tom learn every day?',
        questionEs: '¿Qué aprende Tom cada día?',
        options: ['Songs', 'Five new words', 'Games', 'Pictures'],
        correctAnswer: 1,
        explanation: 'Tom says "I learn five new words every day."',
        explanationEs: 'Tom dice "Aprendo cinco palabras nuevas cada día."',
      },
    ],
    discussionQuestions: [
      { english: 'Do you use apps to learn? Which ones?', spanish: '¿Usas apps para aprender? ¿Cuáles?' },
      { english: 'What language do you want to learn?', spanish: '¿Qué idioma quieres aprender?' },
    ],
  },
  {
    id: 'news-a1-health',
    title: 'Sleep Is Important for Health',
    titleEs: 'Dormir Es Importante para la Salud',
    level: 1,
    category: 'health',
    readingTime: 2,
    datePublished: '2026-02-12',
    summary: 'Doctors say people need seven to eight hours of sleep every night.',
    summaryEs: 'Los doctores dicen que las personas necesitan siete a ocho horas de sueño cada noche.',
    content: `Doctors say sleep is very important. People need seven to eight hours of sleep every night. Good sleep helps your body and your brain.

When you sleep well, you feel good in the morning. You have more energy. You can think better. Children need more sleep than adults.

Bad sleep can make you tired and sick. Do not use your phone before bed. The light from the phone is bad for sleep.

"Go to bed at the same time every night," says Dr. Lee. "Your body likes routine." Many people around the world do not sleep enough.`,
    vocabulary: [
      { word: 'sleep', definition: 'Rest for your body and mind', definitionEs: 'Descanso para tu cuerpo y mente' },
      { word: 'energy', definition: 'The power to do things', definitionEs: 'La fuerza para hacer cosas' },
      { word: 'routine', definition: 'Doing the same thing regularly', definitionEs: 'Hacer lo mismo regularmente' },
      { word: 'adult', definition: 'A grown-up person', definitionEs: 'Una persona adulta' },
      { word: 'sick', definition: 'Not healthy, ill', definitionEs: 'No saludable, enfermo' },
    ],
    comprehensionQuestions: [
      {
        question: 'How many hours of sleep do people need?',
        questionEs: '¿Cuántas horas de sueño necesitan las personas?',
        options: ['Three to four', 'Five to six', 'Seven to eight', 'Nine to ten'],
        correctAnswer: 2,
        explanation: 'People need seven to eight hours of sleep every night.',
        explanationEs: 'Las personas necesitan siete a ocho horas de sueño cada noche.',
      },
      {
        question: 'What does Dr. Lee recommend?',
        questionEs: '¿Qué recomienda el Dr. Lee?',
        options: ['Use your phone', 'Go to bed at the same time', 'Sleep less', 'Wake up late'],
        correctAnswer: 1,
        explanation: 'Dr. Lee says "Go to bed at the same time every night."',
        explanationEs: 'El Dr. Lee dice "Ve a la cama a la misma hora cada noche."',
      },
      {
        question: 'Why is phone light bad before bed?',
        questionEs: '¿Por qué la luz del teléfono es mala antes de dormir?',
        options: ['It costs money', 'It is bad for sleep', 'It is too bright', 'It makes noise'],
        correctAnswer: 1,
        explanation: 'The light from the phone is bad for sleep.',
        explanationEs: 'La luz del teléfono es mala para el sueño.',
      },
    ],
    discussionQuestions: [
      { english: 'How many hours do you sleep? Is it enough?', spanish: '¿Cuántas horas duermes? ¿Es suficiente?' },
      { english: 'What do you do before you go to bed?', spanish: '¿Qué haces antes de ir a la cama?' },
    ],
  },
  {
    id: 'news-a1-sports',
    title: 'Children Run in School Race',
    titleEs: 'Niños Corren en Carrera Escolar',
    level: 1,
    category: 'sports',
    readingTime: 2,
    datePublished: '2026-02-14',
    summary: 'Two hundred children ran a race at their school. Everyone had fun.',
    summaryEs: 'Doscientos niños corrieron una carrera en su escuela. Todos se divirtieron.',
    content: `Two hundred children ran a race at Green Hill School last Friday. The race was one kilometer long. Boys and girls from ages six to twelve took part.

The weather was sunny and warm. Parents came to watch. They stood at the finish line and cheered. "Run, run!" they shouted.

Maria, age eight, won the race for girls. "I am very happy," she said. "I run every day with my dad." The school gave medals to the first three runners.

Everyone had fun. The principal says the school will have the race again next year. Exercise is good for children.`,
    vocabulary: [
      { word: 'race', definition: 'A competition to see who is fastest', definitionEs: 'Una competencia para ver quién es más rápido' },
      { word: 'finish line', definition: 'The end of a race', definitionEs: 'El final de una carrera' },
      { word: 'cheered', definition: 'Shouted to encourage someone', definitionEs: 'Gritó para animar a alguien' },
      { word: 'medal', definition: 'A prize for winning', definitionEs: 'Un premio por ganar' },
      { word: 'principal', definition: 'The leader of a school', definitionEs: 'El líder de una escuela' },
    ],
    comprehensionQuestions: [
      {
        question: 'How long was the race?',
        questionEs: '¿Qué tan larga era la carrera?',
        options: ['Five hundred meters', 'One kilometer', 'Two kilometers', 'Five kilometers'],
        correctAnswer: 1,
        explanation: 'The race was one kilometer long.',
        explanationEs: 'La carrera era de un kilómetro de largo.',
      },
      {
        question: 'Who won the race for girls?',
        questionEs: '¿Quién ganó la carrera para niñas?',
        options: ['Tom', 'Maria', 'The principal', 'A parent'],
        correctAnswer: 1,
        explanation: 'Maria, age eight, won the race for girls.',
        explanationEs: 'María, de ocho años, ganó la carrera para niñas.',
      },
      {
        question: 'What did the school give to the first three runners?',
        questionEs: '¿Qué dio la escuela a los primeros tres corredores?',
        options: ['Money', 'Medals', 'Books', 'Shoes'],
        correctAnswer: 1,
        explanation: 'The school gave medals to the first three runners.',
        explanationEs: 'La escuela dio medallas a los primeros tres corredores.',
      },
    ],
    discussionQuestions: [
      { english: 'Do you like running? Why or why not?', spanish: '¿Te gusta correr? ¿Por qué o por qué no?' },
      { english: 'What sports do you do at school?', spanish: '¿Qué deportes haces en la escuela?' },
    ],
  },
  {
    id: 'news-a1-environment',
    title: 'City Plants New Trees',
    titleEs: 'La Ciudad Planta Nuevos Árboles',
    level: 1,
    category: 'environment',
    readingTime: 2,
    datePublished: '2026-02-16',
    summary: 'The city planted five hundred new trees. Trees make the air clean.',
    summaryEs: 'La ciudad plantó quinientos árboles nuevos. Los árboles hacen el aire limpio.',
    content: `The city planted five hundred new trees last month. Workers put trees on streets and in parks. The trees are young and small now.

Trees are good for the city. They make the air clean. They give shade when it is hot. Birds and animals can live in trees.

Mayor Johnson says, "We want more green spaces. Trees make our city beautiful." The city will plant more trees next year.

People can help too. They can water the trees near their homes. Everyone likes the new trees. "The street looks better now," says Mrs. Chen.`,
    vocabulary: [
      { word: 'planted', definition: 'Put seeds or trees in the ground', definitionEs: 'Poner semillas o árboles en la tierra' },
      { word: 'shade', definition: 'Cool dark area away from sun', definitionEs: 'Área fresca y oscura lejos del sol' },
      { word: 'mayor', definition: 'The leader of a city', definitionEs: 'El líder de una ciudad' },
      { word: 'water', definition: 'To give water to plants', definitionEs: 'Dar agua a las plantas' },
      { word: 'spaces', definition: 'Areas or places', definitionEs: 'Áreas o lugares' },
    ],
    comprehensionQuestions: [
      {
        question: 'How many trees did the city plant?',
        questionEs: '¿Cuántos árboles plantó la ciudad?',
        options: ['One hundred', 'Three hundred', 'Five hundred', 'One thousand'],
        correctAnswer: 2,
        explanation: 'The city planted five hundred new trees.',
        explanationEs: 'La ciudad plantó quinientos árboles nuevos.',
      },
      {
        question: 'Why are trees good for the city?',
        questionEs: '¿Por qué los árboles son buenos para la ciudad?',
        options: ['They are tall', 'They make the air clean', 'They are cheap', 'They are old'],
        correctAnswer: 1,
        explanation: 'Trees make the air clean.',
        explanationEs: 'Los árboles hacen el aire limpio.',
      },
      {
        question: 'How can people help the trees?',
        questionEs: '¿Cómo pueden las personas ayudar a los árboles?',
        options: ['Cut them', 'Water them', 'Move them', 'Paint them'],
        correctAnswer: 1,
        explanation: 'People can water the trees near their homes.',
        explanationEs: 'Las personas pueden regar los árboles cerca de sus casas.',
      },
    ],
    discussionQuestions: [
      { english: 'Are there many trees where you live?', spanish: '¿Hay muchos árboles donde vives?' },
      { english: 'Why do you think trees are important?', spanish: '¿Por qué crees que los árboles son importantes?' },
    ],
  },
  // Level 2 - Additional articles
  {
    id: 'news-a2-climate',
    title: 'More People Recycle Their Waste',
    titleEs: 'Más Personas Reciclan Sus Residuos',
    level: 2,
    category: 'environment',
    readingTime: 3,
    datePublished: '2026-02-08',
    summary: 'Recycling increased in cities. People separate plastic, paper, and glass.',
    summaryEs: 'El reciclaje aumentó en las ciudades. Las personas separan plástico, papel y vidrio.',
    content: `Recycling has increased in many cities over the past year. A new report shows that 60% of households now separate their waste. People put plastic, paper, and glass in different bins.

The government started a campaign to teach people about recycling. They put up posters and sent information to schools. Children learned to recycle at home and told their parents.

"We used to throw everything in one bin," said Mrs. Rodriguez. "Now we have three bins in the kitchen. It was easy to learn." Recycling helps the environment because less waste goes to landfills.

Some cities offer rewards for recycling. Families can get discounts at local shops when they recycle regularly. The program will expand to more areas next year.`,
    vocabulary: [
      { word: 'recycle', definition: 'To use materials again', definitionEs: 'Usar materiales de nuevo' },
      { word: 'household', definition: 'A home and the people who live there', definitionEs: 'Un hogar y las personas que viven allí' },
      { word: 'campaign', definition: 'A plan to achieve something', definitionEs: 'Un plan para lograr algo' },
      { word: 'landfill', definition: 'A place where waste is buried', definitionEs: 'Un lugar donde se entierra la basura' },
      { word: 'expand', definition: 'To grow or get bigger', definitionEs: 'Crecer o hacerse más grande' },
    ],
    comprehensionQuestions: [
      {
        question: 'What percentage of households now separate their waste?',
        questionEs: '¿Qué porcentaje de hogares ahora separa sus residuos?',
        options: ['40%', '50%', '60%', '70%'],
        correctAnswer: 2,
        explanation: '60% of households now separate their waste.',
        explanationEs: 'El 60% de los hogares ahora separa sus residuos.',
      },
      {
        question: 'Where did children learn about recycling?',
        questionEs: '¿Dónde aprendieron los niños sobre el reciclaje?',
        options: ['At home only', 'At school', 'On television', 'In parks'],
        correctAnswer: 1,
        explanation: 'The government sent information to schools.',
        explanationEs: 'El gobierno envió información a las escuelas.',
      },
      {
        question: 'What can families get when they recycle regularly?',
        questionEs: '¿Qué pueden obtener las familias cuando reciclan regularmente?',
        options: ['Free food', 'Discounts at shops', 'New bins', 'Money'],
        correctAnswer: 1,
        explanation: 'Families can get discounts at local shops.',
        explanationEs: 'Las familias pueden obtener descuentos en tiendas locales.',
      },
    ],
    discussionQuestions: [
      { english: 'Do you recycle at home? What do you recycle?', spanish: '¿Reciclas en casa? ¿Qué reciclas?' },
      { english: 'What else can we do to help the environment?', spanish: '¿Qué más podemos hacer para ayudar al medio ambiente?' },
    ],
  },
  {
    id: 'news-a2-sports',
    title: 'Thousands Run City Marathon',
    titleEs: 'Miles Corren el Maratón de la Ciudad',
    level: 2,
    category: 'sports',
    readingTime: 3,
    datePublished: '2026-02-11',
    summary: 'Fifteen thousand people ran the annual city marathon. Runners came from 45 countries.',
    summaryEs: 'Quince mil personas corrieron el maratón anual de la ciudad. Los corredores vinieron de 45 países.',
    content: `Fifteen thousand people ran the city marathon last Sunday. The race was 42 kilometers long. Runners came from 45 different countries to take part.

The winner was Kenji Tanaka from Japan. He finished in two hours and ten minutes. "I trained for six months," he said. "The weather was perfect today." The first woman to finish was Emma Wilson from Australia.

Many people ran to raise money for charity. They asked friends and family to donate for each kilometer they completed. The event raised over two million dollars for hospitals and schools.

Spectators lined the streets to cheer. Some runners wore funny costumes. Everyone had a great time. The marathon will return next year on the first Sunday of March.`,
    vocabulary: [
      { word: 'marathon', definition: 'A long running race of 42 kilometers', definitionEs: 'Una carrera larga de 42 kilómetros' },
      { word: 'charity', definition: 'Organization that helps people in need', definitionEs: 'Organización que ayuda a personas necesitadas' },
      { word: 'donate', definition: 'To give money or things to help', definitionEs: 'Dar dinero o cosas para ayudar' },
      { word: 'spectator', definition: 'A person who watches an event', definitionEs: 'Una persona que observa un evento' },
      { word: 'costume', definition: 'Special clothes for an occasion', definitionEs: 'Ropa especial para una ocasión' },
    ],
    comprehensionQuestions: [
      {
        question: 'How many people ran the marathon?',
        questionEs: '¿Cuántas personas corrieron el maratón?',
        options: ['Five thousand', 'Ten thousand', 'Fifteen thousand', 'Twenty thousand'],
        correctAnswer: 2,
        explanation: 'Fifteen thousand people ran the city marathon.',
        explanationEs: 'Quince mil personas corrieron el maratón de la ciudad.',
      },
      {
        question: 'Where did the winner come from?',
        questionEs: '¿De dónde vino el ganador?',
        options: ['Australia', 'Japan', 'USA', 'UK'],
        correctAnswer: 1,
        explanation: 'The winner was Kenji Tanaka from Japan.',
        explanationEs: 'El ganador fue Kenji Tanaka de Japón.',
      },
      {
        question: 'Why did some people run the marathon?',
        questionEs: '¿Por qué algunas personas corrieron el maratón?',
        options: ['To win money', 'To raise money for charity', 'To get fit', 'To meet friends'],
        correctAnswer: 1,
        explanation: 'Many people ran to raise money for charity.',
        explanationEs: 'Muchas personas corrieron para recaudar dinero para caridad.',
      },
    ],
    discussionQuestions: [
      { english: 'Would you like to run a marathon? Why or why not?', spanish: '¿Te gustaría correr un maratón? ¿Por qué o por qué no?' },
      { english: 'What sports events do you like to watch?', spanish: '¿Qué eventos deportivos te gusta ver?' },
    ],
  },
  {
    id: 'news-a2-education',
    title: 'Schools Use Tablets for Learning',
    titleEs: 'Las Escuelas Usan Tablets para Aprender',
    level: 2,
    category: 'education',
    readingTime: 3,
    datePublished: '2026-02-13',
    summary: 'Many schools now give tablets to students. Teachers say it helps learning.',
    summaryEs: 'Muchas escuelas ahora dan tablets a los estudiantes. Los maestros dicen que ayuda al aprendizaje.',
    content: `More and more schools are giving tablets to their students. In Riverdale District, every student from grade 5 to grade 12 received a tablet this year. The tablets have educational apps and access to online books.

Teachers say the tablets help students learn at their own pace. "Students can watch videos again if they don't understand," said Mr. Davis, a math teacher. "They can also do extra practice at home."

Parents had mixed reactions at first. Some worried about screen time. The school set rules: no games during class, and tablets stay at school overnight for charging. Students seem to enjoy the new tools.

The district plans to add more subjects to the tablets next year. They also want to train parents to use the parent app, which shows their child's progress.`,
    vocabulary: [
      { word: 'district', definition: 'An area with its own schools', definitionEs: 'Un área con sus propias escuelas' },
      { word: 'pace', definition: 'Speed of doing something', definitionEs: 'Velocidad de hacer algo' },
      { word: 'screen time', definition: 'Time spent looking at screens', definitionEs: 'Tiempo mirando pantallas' },
      { word: 'charging', definition: 'Adding power to a battery', definitionEs: 'Agregar energía a una batería' },
      { word: 'progress', definition: 'Improvement over time', definitionEs: 'Mejora con el tiempo' },
    ],
    comprehensionQuestions: [
      {
        question: 'Which students received tablets?',
        questionEs: '¿Qué estudiantes recibieron tablets?',
        options: ['Grades 1-4', 'Grades 5-12', 'Only grade 12', 'All grades'],
        correctAnswer: 1,
        explanation: 'Every student from grade 5 to grade 12 received a tablet.',
        explanationEs: 'Cada estudiante de quinto a doceavo grado recibió una tablet.',
      },
      {
        question: 'What did some parents worry about?',
        questionEs: '¿Sobre qué se preocuparon algunos padres?',
        options: ['The cost', 'Screen time', 'Lost tablets', 'Internet access'],
        correctAnswer: 1,
        explanation: 'Some parents worried about screen time.',
        explanationEs: 'Algunos padres se preocuparon por el tiempo de pantalla.',
      },
      {
        question: 'Where do tablets stay overnight?',
        questionEs: '¿Dónde permanecen las tablets durante la noche?',
        options: ['At home', 'At school', 'In the car', 'With the teacher'],
        correctAnswer: 1,
        explanation: 'Tablets stay at school overnight for charging.',
        explanationEs: 'Las tablets permanecen en la escuela durante la noche para cargar.',
      },
    ],
    discussionQuestions: [
      { english: 'Do you use technology in your school? How?', spanish: '¿Usas tecnología en tu escuela? ¿Cómo?' },
      { english: 'What are the pros and cons of tablets in class?', spanish: '¿Cuáles son los pros y contras de las tablets en clase?' },
    ],
  },
  {
    id: 'news-a2-culture',
    title: 'Museum Opens Free for Children',
    titleEs: 'Museo Abre Gratis para Niños',
    level: 2,
    category: 'culture',
    readingTime: 3,
    datePublished: '2026-02-15',
    summary: 'The National Museum now offers free entry for children under 12. Families visit more often.',
    summaryEs: 'El Museo Nacional ahora ofrece entrada gratis para niños menores de 12 años. Las familias visitan más seguido.',
    content: `The National Museum changed its policy last month. Now children under 12 can enter for free. Before, families paid for everyone. The museum wanted more families to visit.

"We want children to love art and history," said the museum director. "When it's free for kids, parents bring them more often." Visitor numbers increased by 35% in the first month.

The museum also added a new children's area. Kids can touch replicas of ancient objects and dress up in historical costumes. There are workshops every weekend where children make their own art.

Parents still pay the normal price. The museum gets money from the government and from donations. "It's a good investment," said the director. "These children will be our future visitors."`,
    vocabulary: [
      { word: 'policy', definition: 'A rule or way of doing things', definitionEs: 'Una regla o forma de hacer las cosas' },
      { word: 'replica', definition: 'A copy of something', definitionEs: 'Una copia de algo' },
      { word: 'workshop', definition: 'A class where you learn by doing', definitionEs: 'Una clase donde aprendes haciendo' },
      { word: 'donation', definition: 'Money or things given to help', definitionEs: 'Dinero o cosas dadas para ayudar' },
      { word: 'investment', definition: 'Spending money for future benefit', definitionEs: 'Gastar dinero para beneficio futuro' },
    ],
    comprehensionQuestions: [
      {
        question: 'Who can enter the museum for free?',
        questionEs: '¿Quién puede entrar al museo gratis?',
        options: ['Everyone', 'Children under 12', 'Students', 'Seniors'],
        correctAnswer: 1,
        explanation: 'Children under 12 can enter for free.',
        explanationEs: 'Los niños menores de 12 pueden entrar gratis.',
      },
      {
        question: 'By how much did visitor numbers increase?',
        questionEs: '¿Cuánto aumentaron los visitantes?',
        options: ['25%', '35%', '45%', '55%'],
        correctAnswer: 1,
        explanation: 'Visitor numbers increased by 35%.',
        explanationEs: 'El número de visitantes aumentó un 35%.',
      },
      {
        question: 'What can children do in the new area?',
        questionEs: '¿Qué pueden hacer los niños en la nueva área?',
        options: ['Buy souvenirs', 'Touch replicas and dress up', 'Watch movies', 'Eat food'],
        correctAnswer: 1,
        explanation: 'Kids can touch replicas and dress up in historical costumes.',
        explanationEs: 'Los niños pueden tocar réplicas y vestirse con trajes históricos.',
      },
    ],
    discussionQuestions: [
      { english: 'Do you like visiting museums? Why?', spanish: '¿Te gusta visitar museos? ¿Por qué?' },
      { english: 'What kind of museum would you like to visit?', spanish: '¿Qué tipo de museo te gustaría visitar?' },
    ],
  },
  // Level 3 - Additional articles
  {
    id: 'news-b1-business',
    title: 'Small Businesses Adapt to Online Sales',
    titleEs: 'Pequeños Negocios Se Adaptan a las Ventas en Línea',
    level: 3,
    category: 'business',
    readingTime: 4,
    datePublished: '2026-02-05',
    summary: 'Local shops are selling more online. They use social media and delivery apps to reach customers.',
    summaryEs: 'Las tiendas locales venden más en línea. Usan redes sociales y apps de entrega para llegar a los clientes.',
    content: `Small businesses have transformed their operations over the past few years. Many local shops that once relied on foot traffic now sell a significant portion of their products online. They've adopted social media marketing and partnered with delivery apps to reach customers who prefer shopping from home.

Maria Santos runs a bakery in the city center. "When the pandemic started, we had to change quickly," she explains. "We created an Instagram page and started taking orders by phone. Now we use an app that handles deliveries. Our online sales are almost 40% of our total revenue."

However, the transition hasn't been easy for everyone. Some older business owners struggle with technology. Local business associations have started offering free workshops on digital marketing and e-commerce. The government has also provided grants to help small businesses build their online presence.

Experts predict that the blend of physical and online retail will continue. Customers enjoy the convenience of ordering online while still valuing the personal service that small businesses offer.`,
    vocabulary: [
      { word: 'revenue', definition: 'Money earned from sales', definitionEs: 'Dinero ganado de ventas' },
      { word: 'transition', definition: 'Change from one state to another', definitionEs: 'Cambio de un estado a otro' },
      { word: 'e-commerce', definition: 'Buying and selling online', definitionEs: 'Comprar y vender en línea' },
      { word: 'grants', definition: 'Money given for a specific purpose', definitionEs: 'Dinero dado para un propósito específico' },
      { word: 'blend', definition: 'A mixture of different things', definitionEs: 'Una mezcla de cosas diferentes' },
    ],
    comprehensionQuestions: [
      {
        question: 'What percentage of Maria\'s bakery revenue comes from online sales?',
        questionEs: '¿Qué porcentaje de los ingresos de la panadería de María viene de ventas en línea?',
        options: ['20%', '30%', '40%', '50%'],
        correctAnswer: 2,
        explanation: 'Online sales are almost 40% of total revenue.',
        explanationEs: 'Las ventas en línea son casi el 40% de los ingresos totales.',
      },
      {
        question: 'What help do business associations offer?',
        questionEs: '¿Qué ayuda ofrecen las asociaciones de negocios?',
        options: ['Free products', 'Workshops on digital marketing', 'Delivery drivers', 'Store locations'],
        correctAnswer: 1,
        explanation: 'They offer free workshops on digital marketing and e-commerce.',
        explanationEs: 'Ofrecen talleres gratuitos sobre marketing digital y comercio electrónico.',
      },
      {
        question: 'What do customers still value about small businesses?',
        questionEs: '¿Qué valoran los clientes aún de los pequeños negocios?',
        options: ['Low prices', 'Personal service', 'Big stores', 'Fast delivery only'],
        correctAnswer: 1,
        explanation: 'Customers value the personal service that small businesses offer.',
        explanationEs: 'Los clientes valoran el servicio personal que ofrecen los pequeños negocios.',
      },
    ],
    discussionQuestions: [
      { english: 'Do you prefer shopping online or in stores? Why?', spanish: '¿Prefieres comprar en línea o en tiendas? ¿Por qué?' },
      { english: 'How have small businesses in your area changed?', spanish: '¿Cómo han cambiado los pequeños negocios en tu área?' },
    ],
  },
  {
    id: 'news-b1-science',
    title: 'Scientists Find Water on Distant Planet',
    titleEs: 'Científicos Encuentran Agua en Planeta Distante',
    level: 3,
    category: 'science',
    readingTime: 4,
    datePublished: '2026-02-07',
    summary: 'A new telescope detected water vapor on a planet 110 light-years away. It could support life.',
    summaryEs: 'Un nuevo telescopio detectó vapor de agua en un planeta a 110 años luz. Podría albergar vida.',
    content: `Astronomers have made an exciting discovery using a powerful new space telescope. They detected water vapor in the atmosphere of a planet located 110 light-years from Earth. The planet, named K2-18b, orbits within its star's habitable zone, where temperatures might allow liquid water to exist.

"This is a significant step forward," said Dr. Elena Vasquez, who led the research team. "We've found water on planets before, but this one has conditions that could potentially support life. We need more observations to understand its full composition."

The planet is much larger than Earth—about eight times the mass—and is classified as a "mini-Neptune." Scientists aren't sure yet whether it has a rocky surface or a deep ocean. Future telescopes will provide clearer data.

The discovery has sparked interest in similar planets. Researchers plan to study dozens of exoplanets in habitable zones over the next decade. Finding signs of life beyond Earth remains one of science's greatest goals.`,
    vocabulary: [
      { word: 'habitable', definition: 'Suitable for living', definitionEs: 'Adecuado para vivir' },
      { word: 'composition', definition: 'What something is made of', definitionEs: 'De qué está hecho algo' },
      { word: 'exoplanet', definition: 'A planet outside our solar system', definitionEs: 'Un planeta fuera de nuestro sistema solar' },
      { word: 'sparked', definition: 'Caused or triggered', definitionEs: 'Causó o provocó' },
      { word: 'orbit', definition: 'To travel around a star or planet', definitionEs: 'Viajar alrededor de una estrella o planeta' },
    ],
    comprehensionQuestions: [
      {
        question: 'How far is the planet K2-18b from Earth?',
        questionEs: '¿A qué distancia está el planeta K2-18b de la Tierra?',
        options: ['11 light-years', '110 light-years', '1,100 light-years', '11,000 light-years'],
        correctAnswer: 1,
        explanation: 'The planet is located 110 light-years from Earth.',
        explanationEs: 'El planeta está ubicado a 110 años luz de la Tierra.',
      },
      {
        question: 'What makes K2-18b special?',
        questionEs: '¿Qué hace especial a K2-18b?',
        options: ['It is very small', 'It has water and is in the habitable zone', 'It is close to Earth', 'It has no atmosphere'],
        correctAnswer: 1,
        explanation: 'It has water vapor and orbits in the habitable zone.',
        explanationEs: 'Tiene vapor de agua y orbita en la zona habitable.',
      },
      {
        question: 'What will scientists do next?',
        questionEs: '¿Qué harán los científicos después?',
        options: ['Visit the planet', 'Study more exoplanets', 'Build a new telescope', 'Stop research'],
        correctAnswer: 1,
        explanation: 'Researchers plan to study dozens of exoplanets.',
        explanationEs: 'Los investigadores planean estudiar docenas de exoplanetas.',
      },
    ],
    discussionQuestions: [
      { english: 'Do you think there is life on other planets? Why?', spanish: '¿Crees que hay vida en otros planetas? ¿Por qué?' },
      { english: 'Would you want to travel to space? Why or why not?', spanish: '¿Te gustaría viajar al espacio? ¿Por qué o por qué no?' },
    ],
  },
  // Level 4 - B2 articles
  {
    id: 'news-b2-climate',
    title: 'Climate Summit Reaches Agreement on Carbon Targets',
    titleEs: 'Cumbre Climática Alcanza Acuerdo sobre Metas de Carbono',
    level: 4,
    category: 'environment',
    readingTime: 5,
    datePublished: '2026-02-03',
    summary: 'World leaders agreed to stricter carbon reduction targets. Developing nations will receive climate finance.',
    summaryEs: 'Los líderes mundiales acordaron metas más estrictas de reducción de carbono. Las naciones en desarrollo recibirán financiamiento climático.',
    content: `After two weeks of intense negotiations, delegates at the International Climate Summit have finally reached a landmark agreement. The new pact commits participating nations to reduce carbon emissions by 50% by 2035, compared to 2020 levels. This represents a significant strengthening of previous commitments, though environmental groups argue it still falls short of what science demands.

A key breakthrough was the establishment of a climate finance fund for developing nations. Wealthy countries agreed to contribute $100 billion annually to help poorer nations transition to renewable energy and adapt to climate impacts. "This is a matter of justice," stated the delegate from Kenya. "We did not create this crisis, but we suffer its consequences most severely."

Critics have pointed out that the agreement lacks binding enforcement mechanisms. Countries that fail to meet their targets face no concrete penalties. Nevertheless, supporters emphasize that the framework creates accountability through transparent reporting and peer pressure.

The agreement also addresses deforestation, pledging to halt net forest loss by 2030. Brazil and Indonesia, home to the world's largest rainforests, have committed to the initiative. Scientists warn that protecting these ecosystems is crucial for limiting global temperature rise.`,
    vocabulary: [
      { word: 'landmark', definition: 'Important and influential', definitionEs: 'Importante e influyente' },
      { word: 'binding', definition: 'Legally required', definitionEs: 'Legalmente requerido' },
      { word: 'accountability', definition: 'Responsibility for actions', definitionEs: 'Responsabilidad por las acciones' },
      { word: 'deforestation', definition: 'Cutting down forests', definitionEs: 'Talar bosques' },
      { word: 'pledging', definition: 'Making a formal promise', definitionEs: 'Hacer una promesa formal' },
    ],
    comprehensionQuestions: [
      {
        question: 'By how much must nations reduce carbon emissions by 2035?',
        questionEs: '¿En cuánto deben las naciones reducir las emisiones de carbono para 2035?',
        options: ['30%', '40%', '50%', '60%'],
        correctAnswer: 2,
        explanation: 'The pact commits nations to reduce emissions by 50% by 2035.',
        explanationEs: 'El pacto compromete a las naciones a reducir emisiones un 50% para 2035.',
      },
      {
        question: 'How much will wealthy countries contribute annually to the climate fund?',
        questionEs: '¿Cuánto contribuirán los países ricos anualmente al fondo climático?',
        options: ['$50 billion', '$100 billion', '$200 billion', '$500 billion'],
        correctAnswer: 1,
        explanation: 'Wealthy countries agreed to contribute $100 billion annually.',
        explanationEs: 'Los países ricos acordaron contribuir $100 mil millones anualmente.',
      },
      {
        question: 'What do critics say about the agreement?',
        questionEs: '¿Qué dicen los críticos sobre el acuerdo?',
        options: ['It is too expensive', 'It lacks binding enforcement', 'It helps only rich countries', 'It is too strict'],
        correctAnswer: 1,
        explanation: 'The agreement lacks binding enforcement mechanisms.',
        explanationEs: 'El acuerdo carece de mecanismos de cumplimiento vinculantes.',
      },
      {
        question: 'When do nations pledge to halt net forest loss?',
        questionEs: '¿Cuándo se comprometen las naciones a detener la pérdida neta de bosques?',
        options: ['2025', '2028', '2030', '2035'],
        correctAnswer: 2,
        explanation: 'Pledging to halt net forest loss by 2030.',
        explanationEs: 'Comprometiéndose a detener la pérdida neta de bosques para 2030.',
      },
    ],
    discussionQuestions: [
      { english: 'Do you think the climate agreement is strong enough? Why?', spanish: '¿Crees que el acuerdo climático es lo suficientemente fuerte? ¿Por qué?' },
      { english: 'What can individuals do to reduce their carbon footprint?', spanish: '¿Qué pueden hacer los individuos para reducir su huella de carbono?' },
    ],
  },
  {
    id: 'news-b2-health',
    title: 'New Vaccine Shows Promise Against Respiratory Virus',
    titleEs: 'Nueva Vacuna Muestra Promesa Contra Virus Respiratorio',
    level: 4,
    category: 'health',
    readingTime: 5,
    datePublished: '2026-02-06',
    summary: 'A universal vaccine candidate reduced severe illness by 75% in trials. It could protect against multiple virus strains.',
    summaryEs: 'Un candidato a vacuna universal redujo la enfermedad grave un 75% en ensayos. Podría proteger contra múltiples cepas del virus.',
    content: `Pharmaceutical company BioVax has announced encouraging results from Phase III trials of its experimental respiratory vaccine. The vaccine, which targets a protein common to multiple virus strains, reduced severe illness by 75% compared to a placebo group. If approved, it could offer broader protection than current vaccines that focus on single pathogens.

"The concept of a universal vaccine has been a goal for decades," said Dr. Patricia Wong, the trial's lead investigator. "We're not there yet, but these results suggest we're moving in the right direction. The vaccine appears to trigger a robust immune response across different viral variants."

Regulatory approval could take another 12 to 18 months. The company must submit comprehensive safety data and demonstrate that the vaccine works in diverse populations. Health authorities have expressed cautious optimism, noting that respiratory infections remain a major cause of hospitalization worldwide.

Some experts have raised concerns about the vaccine's durability. Initial data suggests protection may wane after 18 months, potentially requiring booster shots. The company is investigating whether adjuvants could extend the duration of immunity.`,
    vocabulary: [
      { word: 'placebo', definition: 'Inactive substance used in trials', definitionEs: 'Sustancia inactiva usada en ensayos' },
      { word: 'pathogen', definition: 'Organism that causes disease', definitionEs: 'Organismo que causa enfermedad' },
      { word: 'robust', definition: 'Strong and effective', definitionEs: 'Fuerte y efectivo' },
      { word: 'durability', definition: 'How long something lasts', definitionEs: 'Cuánto tiempo dura algo' },
      { word: 'adjuvant', definition: 'Substance that enhances vaccine response', definitionEs: 'Sustancia que mejora la respuesta a la vacuna' },
    ],
    comprehensionQuestions: [
      {
        question: 'By how much did the vaccine reduce severe illness?',
        questionEs: '¿En cuánto redujo la vacuna la enfermedad grave?',
        options: ['50%', '65%', '75%', '90%'],
        correctAnswer: 2,
        explanation: 'The vaccine reduced severe illness by 75%.',
        explanationEs: 'La vacuna redujo la enfermedad grave un 75%.',
      },
      {
        question: 'What makes this vaccine different from current ones?',
        questionEs: '¿Qué hace diferente a esta vacuna de las actuales?',
        options: ['It is cheaper', 'It targets multiple virus strains', 'It has no side effects', 'It works faster'],
        correctAnswer: 1,
        explanation: 'It targets a protein common to multiple virus strains.',
        explanationEs: 'Apunta a una proteína común a múltiples cepas del virus.',
      },
      {
        question: 'What concern have experts raised?',
        questionEs: '¿Qué preocupación han expresado los expertos?',
        options: ['It is too expensive', 'Protection may wane after 18 months', 'It causes allergies', 'It is hard to produce'],
        correctAnswer: 1,
        explanation: 'Protection may wane after 18 months.',
        explanationEs: 'La protección puede disminuir después de 18 meses.',
      },
    ],
    discussionQuestions: [
      { english: 'How important are vaccines for public health?', spanish: '¿Qué tan importantes son las vacunas para la salud pública?' },
      { english: 'Would you take a new vaccine? What would you consider?', spanish: '¿Tomarías una nueva vacuna? ¿Qué considerarías?' },
    ],
  },
  {
    id: 'news-b2-tech',
    title: 'AI Companies Face New Regulations in Europe',
    titleEs: 'Empresas de IA Enfrentan Nuevas Regulaciones en Europa',
    level: 4,
    category: 'technology',
    readingTime: 5,
    datePublished: '2026-02-09',
    summary: 'The EU AI Act requires transparency and risk assessments. Tech firms must comply by 2027.',
    summaryEs: 'La Ley de IA de la UE requiere transparencia y evaluaciones de riesgo. Las empresas tecnológicas deben cumplir para 2027.',
    content: `The European Union's Artificial Intelligence Act has entered into force, establishing the world's first comprehensive legal framework for AI systems. The legislation categorizes AI applications by risk level: unacceptable, high, limited, and minimal. Systems deemed to pose unacceptable risks—such as social scoring or real-time biometric identification in public spaces—are banned outright.

High-risk applications, including AI used in hiring, credit scoring, and critical infrastructure, must undergo rigorous conformity assessments. Companies must ensure transparency, human oversight, and accuracy. "We're building trust through accountability," stated the EU commissioner for digital policy. "Citizens deserve to know when they're interacting with AI."

Tech giants have expressed mixed reactions. Some welcome clarity after years of regulatory uncertainty, while others warn that compliance costs could disadvantage European firms against competitors in less regulated markets. Startups have been granted longer transition periods and simplified requirements.

The act also addresses generative AI. Systems like chatbots must disclose that content is AI-generated, and general-purpose AI models above certain capability thresholds face additional obligations. Penalties for non-compliance can reach up to 7% of global annual revenue.`,
    vocabulary: [
      { word: 'framework', definition: 'A set of rules or structure', definitionEs: 'Un conjunto de reglas o estructura' },
      { word: 'conformity', definition: 'Meeting required standards', definitionEs: 'Cumplir estándares requeridos' },
      { word: 'oversight', definition: 'Supervision or monitoring', definitionEs: 'Supervisión o monitoreo' },
      { word: 'compliance', definition: 'Following rules or laws', definitionEs: 'Seguir reglas o leyes' },
      { word: 'threshold', definition: 'A limit or level that triggers something', definitionEs: 'Un límite o nivel que activa algo' },
    ],
    comprehensionQuestions: [
      {
        question: 'What type of AI systems are banned?',
        questionEs: '¿Qué tipo de sistemas de IA están prohibidos?',
        options: ['All AI', 'Social scoring and real-time biometric ID', 'Chatbots', 'AI in hiring'],
        correctAnswer: 1,
        explanation: 'Unacceptable risks like social scoring and real-time biometric ID are banned.',
        explanationEs: 'Riesgos inaceptables como puntuación social e identificación biométrica en tiempo real están prohibidos.',
      },
      {
        question: 'By when must companies comply?',
        questionEs: '¿Para cuándo deben las empresas cumplir?',
        options: ['2025', '2026', '2027', '2028'],
        correctAnswer: 2,
        explanation: 'Tech firms must comply by 2027.',
        explanationEs: 'Las empresas tecnológicas deben cumplir para 2027.',
      },
      {
        question: 'What must generative AI systems disclose?',
        questionEs: '¿Qué deben divulgar los sistemas de IA generativa?',
        options: ['Their algorithms', 'That content is AI-generated', 'User data', 'Training data'],
        correctAnswer: 1,
        explanation: 'Systems must disclose that content is AI-generated.',
        explanationEs: 'Los sistemas deben divulgar que el contenido es generado por IA.',
      },
    ],
    discussionQuestions: [
      { english: 'Should AI be regulated? Why or why not?', spanish: '¿Debería regularse la IA? ¿Por qué o por qué no?' },
      { english: 'What risks does AI pose to society?', spanish: '¿Qué riesgos representa la IA para la sociedad?' },
    ],
  },
  {
    id: 'news-b2-sports',
    title: 'Olympic Committee Approves New Sports for 2028 Games',
    titleEs: 'Comité Olímpico Aprueba Nuevos Deportes para Juegos 2028',
    level: 4,
    category: 'sports',
    readingTime: 5,
    datePublished: '2026-02-14',
    summary: 'Cricket, flag football, and squash will debut at LA 2028. The move aims to attract younger audiences.',
    summaryEs: 'El críquet, fútbol bandera y squash debutarán en LA 2028. La medida busca atraer audiencias más jóvenes.',
    content: `The International Olympic Committee has voted to include five new sports in the 2028 Los Angeles Games. Cricket, flag football, baseball-softball, lacrosse, and squash will make their Olympic debut or return. The decision reflects the IOC's strategy to appeal to younger, more diverse audiences and to include sports with strong followings in regions underrepresented in the current program.

Cricket's inclusion is particularly significant. The sport has over two billion fans globally, primarily in South Asia, and has not appeared at the Olympics since 1900. "This is a historic moment for cricket," said the International Cricket Council president. "The Olympics will introduce our sport to millions who have never seen it."

Flag football—a non-contact version of American football—has grown rapidly in popularity, especially among women. The NFL has invested heavily in promoting the format. Critics argue that adding too many sports dilutes the Olympic brand and increases costs for host cities.

The LA organizing committee welcomed the additions, noting that several of the new sports require minimal infrastructure. Squash can be played in existing venues, and flag football needs only a field. The 2028 program will feature 33 sports in total.`,
    vocabulary: [
      { word: 'debut', definition: 'First appearance', definitionEs: 'Primera aparición' },
      { word: 'dilutes', definition: 'Makes weaker or less concentrated', definitionEs: 'Hace más débil o menos concentrado' },
      { word: 'infrastructure', definition: 'Buildings and facilities needed', definitionEs: 'Edificios e instalaciones necesarias' },
      { word: 'venue', definition: 'Place where an event happens', definitionEs: 'Lugar donde ocurre un evento' },
      { word: 'underrepresented', definition: 'Not sufficiently represented', definitionEs: 'No suficientemente representado' },
    ],
    comprehensionQuestions: [
      {
        question: 'When did cricket last appear at the Olympics?',
        questionEs: '¿Cuándo apareció el críquet por última vez en los Juegos Olímpicos?',
        options: ['1950', '1900', '2000', 'Never'],
        correctAnswer: 1,
        explanation: 'Cricket has not appeared since 1900.',
        explanationEs: 'El críquet no ha aparecido desde 1900.',
      },
      {
        question: 'Why did the IOC add new sports?',
        questionEs: '¿Por qué el COI agregó nuevos deportes?',
        options: ['To reduce costs', 'To appeal to younger audiences', 'To replace old sports', 'To shorten the Games'],
        correctAnswer: 1,
        explanation: 'The strategy is to appeal to younger, more diverse audiences.',
        explanationEs: 'La estrategia es atraer audiencias más jóvenes y diversas.',
      },
      {
        question: 'What do critics say about adding new sports?',
        questionEs: '¿Qué dicen los críticos sobre agregar nuevos deportes?',
        options: ['It is too expensive', 'It dilutes the Olympic brand', 'It is unfair', 'It takes too long'],
        correctAnswer: 1,
        explanation: 'Critics argue it dilutes the Olympic brand.',
        explanationEs: 'Los críticos argumentan que diluye la marca olímpica.',
      },
    ],
    discussionQuestions: [
      { english: 'Which new Olympic sports interest you most? Why?', spanish: '¿Qué nuevos deportes olímpicos te interesan más? ¿Por qué?' },
      { english: 'Should the Olympics include more or fewer sports?', spanish: '¿Deberían los Juegos Olímpicos incluir más o menos deportes?' },
    ],
  },
  // Level 5 - C1 articles
  {
    id: 'news-c1-education',
    title: 'Universities Grapple with AI in Academic Integrity',
    titleEs: 'Universidades Luchan con la IA en la Integridad Académica',
    level: 5,
    category: 'education',
    readingTime: 6,
    datePublished: '2026-02-02',
    summary: 'Institutions debate how to address AI-generated work. Some embrace AI as a tool; others see it as cheating.',
    summaryEs: 'Las instituciones debaten cómo abordar el trabajo generado por IA. Algunas aceptan la IA como herramienta; otras la ven como trampa.',
    content: `The proliferation of sophisticated AI writing tools has thrust academic institutions into an ethical quandary. Universities worldwide are struggling to formulate coherent policies that distinguish between legitimate use of AI as a research aid and its deployment as a means to circumvent academic integrity requirements. The challenge is compounded by the difficulty of reliably detecting AI-generated content, as detection tools have proven unreliable and easily circumvented.

Proponents of integrating AI into pedagogy argue that banning these tools is both impractical and shortsighted. "Students will encounter AI in their professional lives," contends Professor James Mitchell of Oxford. "Our task is to teach them to use it responsibly—to critique, verify, and synthesize—rather than to pretend it doesn't exist." Several institutions have adopted this approach, requiring students to disclose AI use and to submit process documentation alongside final submissions.

Conversely, traditionalists maintain that uncritical AI adoption undermines the fundamental purpose of higher education: developing independent critical thinking. "The act of writing is itself a form of thinking," argues Dr. Sarah Chen. "Outsourcing that process to AI short-circuits the intellectual development we're trying to foster." Some departments have reverted to in-class, handwritten examinations for core courses.

The debate has spilled into accreditation discussions. Quality assurance bodies are considering whether learning outcomes need redefinition to account for an AI-augmented landscape. Meanwhile, students report confusion and anxiety about inconsistent policies across departments and institutions.`,
    vocabulary: [
      { word: 'proliferation', definition: 'Rapid increase in number', definitionEs: 'Aumento rápido en número' },
      { word: 'quandary', definition: 'Difficult situation with no clear answer', definitionEs: 'Situación difícil sin respuesta clara' },
      { word: 'circumvent', definition: 'To avoid or get around', definitionEs: 'Evitar o sortear' },
      { word: 'pedagogy', definition: 'The method and practice of teaching', definitionEs: 'El método y práctica de enseñar' },
      { word: 'accreditation', definition: 'Official recognition of quality', definitionEs: 'Reconocimiento oficial de calidad' },
    ],
    comprehensionQuestions: [
      {
        question: 'Why is it difficult to create AI policies?',
        questionEs: '¿Por qué es difícil crear políticas sobre IA?',
        options: ['AI is too expensive', 'Detection tools are unreliable', 'Students refuse', 'Professors disagree'],
        correctAnswer: 1,
        explanation: 'Detection tools have proven unreliable and easily circumvented.',
        explanationEs: 'Las herramientas de detección han demostrado ser poco confiables y fáciles de sortear.',
      },
      {
        question: 'What do proponents of AI integration suggest?',
        questionEs: '¿Qué sugieren los defensores de la integración de IA?',
        options: ['Ban AI completely', 'Teach responsible use', 'Use only for research', 'Limit to graduate students'],
        correctAnswer: 1,
        explanation: 'Teach students to use it responsibly—critique, verify, synthesize.',
        explanationEs: 'Enseñar a los estudiantes a usarla responsablemente—criticar, verificar, sintetizar.',
      },
      {
        question: 'What have some departments done for core courses?',
        questionEs: '¿Qué han hecho algunos departamentos para cursos básicos?',
        options: ['Eliminated exams', 'Reverted to in-class handwritten exams', 'Required more essays', 'Used AI for grading'],
        correctAnswer: 1,
        explanation: 'Some have reverted to in-class, handwritten examinations.',
        explanationEs: 'Algunos han vuelto a exámenes escritos a mano en clase.',
      },
    ],
    discussionQuestions: [
      { english: 'Is using AI for assignments cheating? Where do you draw the line?', spanish: '¿Usar IA para tareas es hacer trampa? ¿Dónde trazas la línea?' },
      { english: 'How should universities prepare students for an AI world?', spanish: '¿Cómo deberían las universidades preparar a los estudiantes para un mundo con IA?' },
    ],
  },
  {
    id: 'news-c1-business',
    title: 'Central Banks Navigate Divergent Inflation Trajectories',
    titleEs: 'Bancos Centrales Navegan Trayectorias Inflacionarias Divergentes',
    level: 5,
    category: 'business',
    readingTime: 6,
    datePublished: '2026-02-04',
    summary: 'Monetary policy diverges as economies show different inflation dynamics. Rate decisions reflect local conditions.',
    summaryEs: 'La política monetaria diverge mientras las economías muestran dinámicas inflacionarias diferentes. Las decisiones de tasas reflejan condiciones locales.',
    content: `The global monetary policy landscape has become increasingly fragmented as central banks respond to markedly different inflation dynamics within their respective economies. Whereas the Federal Reserve has signaled a gradual easing cycle following a sustained decline in US inflation, the European Central Bank remains cautious, with core inflation in the eurozone proving stickier than anticipated. Meanwhile, emerging market central banks face the additional complexity of capital flow volatility as interest rate differentials widen.

"The era of synchronized global monetary policy appears to be over, at least for now," observed Dr. Helena Forsberg, chief economist at a major investment bank. "We're seeing a return to fundamentals—each central bank must prioritize its domestic mandate. The spillover effects, however, mean that no decision is made in isolation." Currency markets have reflected this divergence, with the dollar weakening against the euro as investors price in different rate paths.

Analysts note that labor market conditions are driving much of the variation. The US has seen a notable cooling in wage growth and job creation, whereas European labor markets remain tight. Japan presents yet another scenario, with the Bank of Japan cautiously exiting negative interest rates after decades of deflationary pressure.

The implications for global growth remain uncertain. Tighter financial conditions in some regions could dampen demand, while easier policy elsewhere might fuel asset bubbles. Multilateral institutions have urged coordination, but sovereign priorities continue to take precedence.`,
    vocabulary: [
      { word: 'trajectory', definition: 'Path or direction of development', definitionEs: 'Ruta o dirección de desarrollo' },
      { word: 'stickier', definition: 'More persistent, harder to change', definitionEs: 'Más persistente, más difícil de cambiar' },
      { word: 'spillover', definition: 'Secondary effect that spreads', definitionEs: 'Efecto secundario que se propaga' },
      { word: 'mandate', definition: 'Official instruction or mission', definitionEs: 'Instrucción o misión oficial' },
      { word: 'deflationary', definition: 'Related to falling prices', definitionEs: 'Relacionado con precios en caída' },
    ],
    comprehensionQuestions: [
      {
        question: 'How does US monetary policy differ from the ECB?',
        questionEs: '¿Cómo difiere la política monetaria de EE.UU. del BCE?',
        options: ['US is more aggressive', 'Fed is easing while ECB is cautious', 'ECB is cutting rates', 'They are identical'],
        correctAnswer: 1,
        explanation: 'Fed signals gradual easing while ECB remains cautious.',
        explanationEs: 'La Fed señala un relajamiento gradual mientras el BCE permanece cauteloso.',
      },
      {
        question: 'What is driving policy variation?',
        questionEs: '¿Qué está impulsando la variación de políticas?',
        options: ['Currency exchange', 'Labor market conditions', 'Political pressure', 'Oil prices'],
        correctAnswer: 1,
        explanation: 'Labor market conditions are driving much of the variation.',
        explanationEs: 'Las condiciones del mercado laboral están impulsando gran parte de la variación.',
      },
      {
        question: 'What have multilateral institutions urged?',
        questionEs: '¿Qué han instado las instituciones multilaterales?',
        options: ['Higher rates', 'Coordination', 'Independence', 'Transparency'],
        correctAnswer: 1,
        explanation: 'Multilateral institutions have urged coordination.',
        explanationEs: 'Las instituciones multilaterales han instado a la coordinación.',
      },
    ],
    discussionQuestions: [
      { english: 'Should central banks coordinate their policies?',
        spanish: '¿Deberían los bancos centrales coordinar sus políticas?' },
      { english: 'How do interest rates affect your daily life?',
        spanish: '¿Cómo afectan las tasas de interés tu vida diaria?' },
    ],
  },
  {
    id: 'news-c1-culture',
    title: 'Digital Restoration Revives Lost Masterpieces',
    titleEs: 'Restauración Digital Revive Obras Maestras Perdidas',
    level: 5,
    category: 'culture',
    readingTime: 6,
    datePublished: '2026-02-11',
    summary: 'AI and imaging technologies reconstruct artworks destroyed in conflicts. Ethical questions arise about authenticity.',
    summaryEs: 'La IA y tecnologías de imagen reconstruyen obras destruidas en conflictos. Surgen preguntas éticas sobre autenticidad.',
    content: `Art historians and technologists are collaborating on an ambitious project to digitally reconstruct masterpieces lost to war, fire, and neglect. Using AI algorithms trained on surviving photographs, sketches, and descriptions, teams have created high-fidelity reconstructions of works that were destroyed during the World Wars—including the Amber Room and countless paintings from the Dresden Museum. The results are displayed in immersive VR experiences, allowing viewers to "walk through" spaces that no longer exist.

The initiative raises profound questions about authenticity and the nature of art. "A replica, no matter how sophisticated, can never replicate the aura of the original," argues philosopher Dr. Maria Santos. "The physical object carries the weight of history—the brushstrokes, the aging, the very materiality that connects us to the artist's moment." Others counter that accessibility matters more than fetishizing originals; most people would never have seen these works otherwise.

Museums are divided on whether to exhibit digital reconstructions alongside originals. The Louvre has embraced the approach for educational purposes, while the Prado maintains a stricter separation. Copyright and ownership of AI-generated reconstructions remain legally ambiguous, particularly when the source material spans multiple collections and nations.

The technology continues to advance. Researchers are now attempting to reconstruct lost music and performances from written scores and contemporary accounts. The line between preservation and creation grows increasingly blurred.`,
    vocabulary: [
      { word: 'fidelity', definition: 'Accuracy and exactness', definitionEs: 'Precisión y exactitud' },
      { word: 'aura', definition: 'Distinctive atmosphere or quality', definitionEs: 'Atmósfera o cualidad distintiva' },
      { word: 'materiality', definition: 'Physical substance or quality', definitionEs: 'Sustancia o cualidad física' },
      { word: 'fetishizing', definition: 'Treating with excessive reverence', definitionEs: 'Tratar con reverencia excesiva' },
      { word: 'ambiguous', definition: 'Unclear or open to interpretation', definitionEs: 'Poco claro o abierto a interpretación' },
    ],
    comprehensionQuestions: [
      {
        question: 'What was the Amber Room?',
        questionEs: '¿Qué era la Sala de Ámbar?',
        options: ['A museum', 'A lost masterpiece', 'A technology', 'A country'],
        correctAnswer: 1,
        explanation: 'A work destroyed during the World Wars.',
        explanationEs: 'Una obra destruida durante las Guerras Mundiales.',
      },
      {
        question: 'What concern does Dr. Santos raise?',
        questionEs: '¿Qué preocupación plantea la Dra. Santos?',
        options: ['Cost', 'Authenticity and the aura of originals', 'Technology limits', 'Copyright'],
        correctAnswer: 1,
        explanation: 'A replica can never replicate the aura of the original.',
        explanationEs: 'Una réplica nunca puede replicar el aura del original.',
      },
      {
        question: 'How do the Louvre and Prado differ?',
        questionEs: '¿Cómo difieren el Louvre y el Prado?',
        options: ['Louvre rejects reconstructions', 'Louvre embraces them for education; Prado separates', 'Both reject', 'Both embrace'],
        correctAnswer: 1,
        explanation: 'Louvre has embraced for education; Prado maintains stricter separation.',
        explanationEs: 'El Louvre lo ha adoptado con fines educativos; el Prado mantiene una separación más estricta.',
      },
    ],
    discussionQuestions: [
      { english: 'Can a digital reconstruction be "real" art?', spanish: '¿Puede una reconstrucción digital ser arte "real"?' },
      { english: 'Should we preserve art digitally when originals are lost?', spanish: '¿Deberíamos preservar el arte digitalmente cuando se pierden los originales?' },
    ],
  },
  {
    id: 'news-c1-environment',
    title: 'Biodiversity Framework Faces Implementation Hurdles',
    titleEs: 'Marco de Biodiversidad Enfrenta Obstáculos de Implementación',
    level: 5,
    category: 'environment',
    readingTime: 6,
    datePublished: '2026-02-13',
    summary: 'The Kunming-Montreal agreement set ambitious targets. Funding gaps and political will threaten progress.',
    summaryEs: 'El acuerdo Kunming-Montreal estableció metas ambiciosas. Brechas de financiamiento y voluntad política amenazan el progreso.',
    content: `One year after the adoption of the Kunming-Montreal Global Biodiversity Framework, implementation progress remains uneven. The agreement, hailed as the "Paris moment" for nature, commits signatories to halt and reverse biodiversity loss by 2030 through 23 targets—including protecting 30% of land and sea, restoring degraded ecosystems, and phasing out harmful subsidies. Yet the financial architecture to support these goals remains inadequate.

Developing nations, which harbor the majority of the world's biodiversity, have consistently argued that conservation cannot occur without substantial resource transfers. The framework calls for $200 billion annually in biodiversity finance, with $20 billion flowing from developed to developing countries by 2025. Current commitments fall short, and the newly established Global Biodiversity Fund has received pledges covering only a fraction of its target.

Political headwinds complicate matters further. Several governments have faced domestic pressure to prioritize economic development over environmental protection. The tension between conservation and livelihoods is particularly acute in tropical forest nations, where communities depend on natural resources. Indigenous peoples' rights and their role as stewards of biodiversity have gained recognition in the framework, but translating that into actionable policies has proven difficult.

Scientists warn that the window for meaningful action is closing. Ecosystem collapse can occur abruptly once tipping points are crossed. Monitoring and reporting mechanisms are still being developed, leaving uncertainty about whether nations are on track.`,
    vocabulary: [
      { word: 'hailed', definition: 'Praised or acclaimed', definitionEs: 'Elogiado o aclamado' },
      { word: 'subsidies', definition: 'Financial support from government', definitionEs: 'Apoyo financiero del gobierno' },
      { word: 'headwinds', definition: 'Forces working against progress', definitionEs: 'Fuerzas que trabajan contra el progreso' },
      { word: 'stewards', definition: 'People who protect and manage', definitionEs: 'Personas que protegen y gestionan' },
      { word: 'tipping points', definition: 'Critical thresholds for irreversible change', definitionEs: 'Umbrales críticos para cambio irreversible' },
    ],
    comprehensionQuestions: [
      {
        question: 'What does the 30x30 target refer to?',
        questionEs: '¿A qué se refiere la meta 30x30?',
        options: ['30% emissions cut by 2030', 'Protecting 30% of land and sea', '30 billion in funding', '30 countries'],
        correctAnswer: 1,
        explanation: 'Protecting 30% of land and sea.',
        explanationEs: 'Proteger el 30% de tierra y mar.',
      },
      {
        question: 'Why do developing nations need resource transfers?',
        questionEs: '¿Por qué las naciones en desarrollo necesitan transferencias de recursos?',
        options: ['They have no biodiversity', 'They harbor most biodiversity but need funds', 'They refuse to act', 'They have too much money'],
        correctAnswer: 1,
        explanation: 'They harbor the majority of biodiversity; conservation needs resources.',
        explanationEs: 'Albergan la mayoría de la biodiversidad; la conservación necesita recursos.',
      },
      {
        question: 'What do scientists warn about?',
        questionEs: '¿Qué advierten los científicos?',
        options: ['Funding will increase', 'The window for action is closing', 'Politics will resolve it', 'Technology will fix it'],
        correctAnswer: 1,
        explanation: 'The window for meaningful action is closing.',
        explanationEs: 'La ventana para una acción significativa se está cerrando.',
      },
    ],
    discussionQuestions: [
      { english: 'How can we balance conservation with economic development?', spanish: '¿Cómo podemos equilibrar la conservación con el desarrollo económico?' },
      { english: 'What role should indigenous communities play?', spanish: '¿Qué papel deberían jugar las comunidades indígenas?' },
    ],
  },
  // Level 6 - C2 articles
  {
    id: 'news-c2-tech',
    title: 'The Epistemological Implications of Large Language Models',
    titleEs: 'Las Implicaciones Epistemológicas de los Modelos de Lenguaje Grandes',
    level: 6,
    category: 'technology',
    readingTime: 7,
    datePublished: '2026-02-01',
    summary: 'Philosophers and AI researchers debate whether LLMs generate knowledge or merely simulate it. The distinction matters for education and trust.',
    summaryEs: 'Filósofos e investigadores de IA debaten si los LLM generan conocimiento o solo lo simulan. La distinción importa para la educación y la confianza.',
    content: `The ascendancy of large language models has precipitated a philosophical reckoning within epistemology—the branch of philosophy concerned with the nature and scope of knowledge. As these systems produce increasingly coherent and seemingly authoritative responses, scholars are grappling with a fundamental question: do LLMs possess, generate, or merely simulate knowledge? The distinction carries profound implications for how we ought to integrate such tools into educational, legal, and scientific contexts.

Proponents of the "extended mind" thesis argue that LLMs function as cognitive prosthetics, extending human epistemic capabilities in much the same way that writing and calculators have historically done. From this perspective, the system-plus-user constitutes a novel epistemic agent; the model's outputs, when properly contextualized and verified, constitute genuine knowledge. Critics retort that LLMs lack the intentionality and world-engagement that characterize genuine understanding. They produce statistically plausible text without grasping meaning—a "stochastic parrot," in one influential formulation.

The debate echoes earlier controversies surrounding the Turing Test and Chinese Room thought experiment. What does it mean to "understand" when the behavioral evidence is indistinguishable? Some philosophers suggest reframing the question: rather than asking whether machines know, we might ask what epistemic responsibilities we incur when we rely on their outputs. The precautionary principle would counsel skepticism; the pragmatist might argue that utility trumps metaphysical certainty.

Educational institutions find themselves at the epicenter of these tensions. If LLMs can produce essays that satisfy grading rubrics, does the assignment retain its pedagogical value? Or does the very act of discerning reliable from unreliable AI output become the new literacy? The curriculum of the future may less resemble the transmission of content than the cultivation of epistemic vigilance.`,
    vocabulary: [
      { word: 'epistemology', definition: 'Study of knowledge and belief', definitionEs: 'Estudio del conocimiento y la creencia' },
      { word: 'prosthetics', definition: 'Artificial extensions or replacements', definitionEs: 'Extensiones o reemplazos artificiales' },
      { word: 'intentionality', definition: 'Directedness toward objects or states', definitionEs: 'Direccionalidad hacia objetos o estados' },
      { word: 'stochastic', definition: 'Randomly determined', definitionEs: 'Determinado aleatoriamente' },
      { word: 'epistemic', definition: 'Relating to knowledge', definitionEs: 'Relacionado con el conocimiento' },
    ],
    comprehensionQuestions: [
      {
        question: 'What is the "extended mind" thesis?',
        questionEs: '¿Qué es la tesis de la "mente extendida"?',
        options: ['LLMs replace humans', 'LLMs extend human epistemic capabilities like prosthetics', 'LLMs are dangerous', 'LLMs cannot think'],
        correctAnswer: 1,
        explanation: 'LLMs function as cognitive prosthetics extending human epistemic capabilities.',
        explanationEs: 'Los LLM funcionan como prótesis cognitivas que extienden las capacidades epistémicas humanas.',
      },
      {
        question: 'What do critics say LLMs lack?',
        questionEs: '¿Qué dicen los críticos que les falta a los LLM?',
        options: ['Speed', 'Intentionality and world-engagement', 'Data', 'Languages'],
        correctAnswer: 1,
        explanation: 'LLMs lack intentionality and world-engagement that characterize understanding.',
        explanationEs: 'Los LLM carecen de intencionalidad y compromiso con el mundo que caracterizan el entendimiento.',
      },
      {
        question: 'What might the curriculum of the future emphasize?',
        questionEs: '¿Qué podría enfatizar el currículo del futuro?',
        options: ['Memorization', 'Cultivation of epistemic vigilance', 'More exams', 'Less technology'],
        correctAnswer: 1,
        explanation: 'The cultivation of epistemic vigilance rather than content transmission.',
        explanationEs: 'El cultivo de la vigilancia epistémica en lugar de la transmisión de contenido.',
      },
      {
        question: 'What does "stochastic parrot" suggest about LLMs?',
        questionEs: '¿Qué sugiere "loro estocástico" sobre los LLM?',
        options: ['They are intelligent', 'They produce plausible text without grasping meaning', 'They are creative', 'They understand context'],
        correctAnswer: 1,
        explanation: 'They produce statistically plausible text without grasping meaning.',
        explanationEs: 'Producen texto estadísticamente plausible sin captar el significado.',
      },
    ],
    discussionQuestions: [
      { english: 'Can a machine "know" something? What would that require?', spanish: '¿Puede una máquina "saber" algo? ¿Qué requeriría?' },
      { english: 'How should we teach critical evaluation of AI outputs?', spanish: '¿Cómo deberíamos enseñar la evaluación crítica de las salidas de IA?' },
    ],
  },
  {
    id: 'news-c2-science',
    title: 'Quantum Supremacy and the Redefinition of Computational Intractability',
    titleEs: 'Supremacía Cuántica y la Redefinición de la Intratabilidad Computacional',
    level: 6,
    category: 'science',
    readingTime: 7,
    datePublished: '2026-02-08',
    summary: 'Quantum computers achieve tasks that would take classical computers millennia. Cryptography and drug discovery face transformation.',
    summaryEs: 'Las computadoras cuánticas logran tareas que tomarían milenios a las clásicas. La criptografía y el descubrimiento de fármacos enfrentan transformación.',
    content: `The attainment of quantum supremacy—the demonstration that a quantum computer can solve a problem infeasible for classical machines—has evolved from theoretical possibility to experimental reality. Researchers at multiple institutions have now performed computations that would require thousands of years on the most powerful supercomputers, completing them in minutes. The implications extend far beyond bragging rights; they portend a fundamental reconfiguration of what we consider computationally tractable.

Cryptography stands as the most immediate domain of impact. Much of modern digital security rests on the assumption that factoring large numbers remains computationally infeasible. Shor's algorithm, run on a sufficiently powerful quantum computer, would render RSA encryption obsolete. The cryptographic community has anticipated this eventuality, developing post-quantum algorithms designed to resist quantum attack. The transition, however, entails replacing infrastructure embedded across the global digital economy—a logistical and economic undertaking of staggering scale.

Beyond cryptography, quantum simulation promises to revolutionize materials science and drug discovery. Modeling molecular interactions at quantum mechanical fidelity has long been a bottleneck; classical computers scale exponentially with system size. Quantum computers, by exploiting superposition and entanglement, offer a qualitatively different scaling. Pharmaceutical companies are investing heavily in quantum-enabled molecular modeling, anticipating breakthroughs in understanding protein folding and drug-target interactions.

Skeptics caution that practical applications remain years away. Current quantum computers are error-prone and require extreme isolation from environmental interference. Error correction schemes consume substantial qubit overhead. Nevertheless, the trajectory is clear: we are witnessing the emergence of a new computational paradigm, with consequences we are only beginning to apprehend.`,
    vocabulary: [
      { word: 'tractable', definition: 'Manageable or solvable', definitionEs: 'Manejable o soluble' },
      { word: 'portend', definition: 'To signal or foreshadow', definitionEs: 'Señalar o presagiar' },
      { word: 'entanglement', definition: 'Quantum correlation between particles', definitionEs: 'Correlación cuántica entre partículas' },
      { word: 'paradigm', definition: 'A fundamental model or framework', definitionEs: 'Un modelo o marco fundamental' },
      { word: 'apprehend', definition: 'To understand or perceive', definitionEs: 'Entender o percibir' },
    ],
    comprehensionQuestions: [
      {
        question: 'What would Shor\'s algorithm on a quantum computer affect?',
        questionEs: '¿Qué afectaría el algoritmo de Shor en una computadora cuántica?',
        options: ['Weather prediction', 'RSA encryption', 'Social media', 'Gaming'],
        correctAnswer: 1,
        explanation: 'It would render RSA encryption obsolete.',
        explanationEs: 'Haría obsoleta la encriptación RSA.',
      },
      {
        question: 'What advantage do quantum computers offer for molecular modeling?',
        questionEs: '¿Qué ventaja ofrecen las computadoras cuánticas para el modelado molecular?',
        options: ['They are cheaper', 'Different scaling via superposition and entanglement', 'They are faster at everything', 'They need less power'],
        correctAnswer: 1,
        explanation: 'They offer qualitatively different scaling by exploiting superposition and entanglement.',
        explanationEs: 'Ofrecen un escalado cualitativamente diferente al explotar superposición y entrelazamiento.',
      },
      {
        question: 'What do skeptics caution?',
        questionEs: '¿Qué advierten los escépticos?',
        options: ['Quantum is a hoax', 'Practical applications remain years away', 'It is too expensive', 'It will never work'],
        correctAnswer: 1,
        explanation: 'Practical applications remain years away.',
        explanationEs: 'Las aplicaciones prácticas siguen estando a años de distancia.',
      },
    ],
    discussionQuestions: [
      { english: 'How should society prepare for post-quantum cryptography?', spanish: '¿Cómo debería la sociedad prepararse para la criptografía post-cuántica?' },
      { english: 'What ethical considerations arise from quantum computing?', spanish: '¿Qué consideraciones éticas surgen de la computación cuántica?' },
    ],
  },
  {
    id: 'news-c2-health',
    title: 'The Promise and Peril of Gene-Editing Therapies',
    titleEs: 'La Promesa y el Peligro de las Terapias de Edición Génica',
    level: 6,
    category: 'health',
    readingTime: 7,
    datePublished: '2026-02-15',
    summary: 'CRISPR-based treatments show remarkable success for genetic diseases. Germline editing raises unresolved ethical and regulatory questions.',
    summaryEs: 'Los tratamientos basados en CRISPR muestran éxito notable para enfermedades genéticas. La edición germinal plantea preguntas éticas y regulatorias no resueltas.',
    content: `The therapeutic application of CRISPR-Cas9 and related gene-editing technologies has transitioned from laboratory curiosity to clinical reality. Several gene therapies have received regulatory approval for the treatment of inherited disorders—sickle cell disease, beta-thalassemia, and certain forms of congenital blindness among them. The results, in selected patients, have been nothing short of transformative: individuals who faced progressive disability or early mortality now lead substantially normal lives. The scientific community rightly celebrates these achievements while acknowledging the considerable challenges that remain.

Somatic cell editing—modifying genetic material in non-reproductive cells—poses relatively contained ethical questions. The changes affect only the individual receiving treatment and are not heritable. Germline editing, by contrast, alters the genetic constitution of embryos, with modifications transmitted to all future descendants. The prospect of "designer babies" or the elimination of perceived genetic "defects" evokes a dystopian history of eugenics. International consensus has largely converged on a moratorium for germline editing, though the strength of that consensus varies, and some nations have proven more permissive.

The technical challenges are formidable. Off-target effects—unintended edits at sites resembling the target sequence—remain a concern despite improved specificity. Delivery mechanisms for introducing editing machinery into the right cells remain imperfect. And the cost of approved therapies, often in the millions per patient, raises acute questions of distributive justice. Who will have access to these interventions when healthcare systems are already strained?

The path forward requires sustained dialogue among scientists, ethicists, policymakers, and patient communities. The promise of alleviating human suffering is genuine; the perils of misuse or overreach are equally real. How we navigate this terrain will define not only the future of medicine but our collective understanding of what it means to be human.`,
    vocabulary: [
      { word: 'somatic', definition: 'Relating to body cells, not reproductive', definitionEs: 'Relacionado con células del cuerpo, no reproductivas' },
      { word: 'heritable', definition: 'Passed to offspring', definitionEs: 'Transmitido a la descendencia' },
      { word: 'eugenics', definition: 'Controlled breeding for "improvement"', definitionEs: 'Cría controlada para "mejora"' },
      { word: 'moratorium', definition: 'Temporary prohibition', definitionEs: 'Prohibición temporal' },
      { word: 'distributive', definition: 'Relating to distribution of resources', definitionEs: 'Relacionado con la distribución de recursos' },
    ],
    comprehensionQuestions: [
      {
        question: 'What is the key difference between somatic and germline editing?',
        questionEs: '¿Cuál es la diferencia clave entre edición somática y germinal?',
        options: ['Cost', 'Germline changes are heritable', 'Speed', 'Somatic is harder'],
        correctAnswer: 1,
        explanation: 'Germline edits are transmitted to offspring; somatic edits affect only the individual.',
        explanationEs: 'Las ediciones germinales se transmiten a la descendencia; las somáticas afectan solo al individuo.',
      },
      {
        question: 'What has international consensus largely agreed on?',
        questionEs: '¿En qué ha acordado en gran parte el consenso internacional?',
        options: ['Full approval', 'Moratorium on germline editing', 'Ban on all gene editing', 'No regulation'],
        correctAnswer: 1,
        explanation: 'International consensus has converged on a moratorium for germline editing.',
        explanationEs: 'El consenso internacional ha convergido en una moratoria para la edición germinal.',
      },
      {
        question: 'What concern do "off-target effects" refer to?',
        questionEs: '¿A qué se refiere la preocupación por "efectos fuera del objetivo"?',
        options: ['Cost', 'Unintended edits at similar sites', 'Slow results', 'Patient refusal'],
        correctAnswer: 1,
        explanation: 'Unintended edits at sites resembling the target sequence.',
        explanationEs: 'Ediciones no intencionadas en sitios que se parecen a la secuencia objetivo.',
      },
    ],
    discussionQuestions: [
      { english: 'Where should we draw the line with gene editing?', spanish: '¿Dónde deberíamos trazar la línea con la edición génica?' },
      { english: 'How can we ensure equitable access to gene therapies?', spanish: '¿Cómo podemos asegurar acceso equitativo a las terapias génicas?' },
    ],
  },
  {
    id: 'news-c2-culture',
    title: 'The Resurgence of Analog in a Digital Age',
    titleEs: 'El Resurgimiento de lo Analógico en una Era Digital',
    level: 6,
    category: 'culture',
    readingTime: 7,
    datePublished: '2026-02-18',
    summary: 'Vinyl, film photography, and print books experience a renaissance. The trend reflects a desire for materiality and slowness.',
    summaryEs: 'El vinilo, la fotografía en película y los libros impresos experimentan un renacimiento. La tendencia refleja un deseo de materialidad y lentitud.',
    content: `Amid the relentless digitization of cultural consumption, a curious countercurrent has emerged: the resurgence of analog media. Vinyl record sales have surpassed CDs for the first time in decades; film photography is experiencing a renaissance among millennials and Gen Z; independent bookstores report robust growth even as e-readers proliferate. This phenomenon cannot be dismissed as mere nostalgia—it reflects, rather, a more profound recalibration of our relationship with cultural objects and the act of consumption itself.

Sociologists and cultural theorists have proposed various explanations. The "materiality thesis" suggests that physical objects afford a sense of ownership and permanence that digital files, with their ethereal and potentially ephemeral existence, cannot replicate. A vinyl record is a thing—you can hold it, display it, lend it. A streaming subscription grants access but not possession. The distinction matters for how we construct identity and curate our environments.

The "slow culture" hypothesis links the trend to broader disenchantment with the pace of digital life. The infinite scroll, the algorithmically curated feed, the instant gratification—these produce a kind of cognitive exhaustion. Analog media, by contrast, impose friction: you must flip a record, advance film manually, turn physical pages. That friction creates space for attention, for the kind of sustained engagement that deep appreciation requires.

Critics argue that the analog revival is largely an affluent, urban phenomenon—aesthetic preference masquerading as philosophy. The cost of vinyl, film, and artisanal print runs excludes many. And the environmental footprint of physical media, from vinyl's PVC to paper production, cannot be ignored. Yet the trend persists, suggesting that the human desire for tangible connection to culture is not easily extinguished by convenience.`,
    vocabulary: [
      { word: 'countercurrent', definition: 'A flow opposing the main trend', definitionEs: 'Una corriente que se opone a la tendencia principal' },
      { word: 'recalibration', definition: 'Adjustment or realignment', definitionEs: 'Ajuste o realineación' },
      { word: 'ethereal', definition: 'Delicate, insubstantial', definitionEs: 'Delicado, insustancial' },
      { word: 'ephemeral', definition: 'Short-lived, temporary', definitionEs: 'De corta duración, temporal' },
      { word: 'masquerading', definition: 'Disguising or pretending', definitionEs: 'Disfrazando o pretendiendo' },
    ],
    comprehensionQuestions: [
      {
        question: 'What does the "materiality thesis" suggest?',
        questionEs: '¿Qué sugiere la "tesis de la materialidad"?',
        options: ['Digital is better', 'Physical objects afford ownership and permanence', 'Analog is cheaper', 'Young people prefer digital'],
        correctAnswer: 1,
        explanation: 'Physical objects afford a sense of ownership and permanence.',
        explanationEs: 'Los objetos físicos ofrecen un sentido de propiedad y permanencia.',
      },
      {
        question: 'What does the "slow culture" hypothesis link the trend to?',
        questionEs: '¿A qué vincula la hipótesis de "cultura lenta" la tendencia?',
        options: ['Lower prices', 'Disenchantment with digital pace', 'Better quality', 'Environmental concerns'],
        correctAnswer: 1,
        explanation: 'Links to disenchantment with the pace of digital life.',
        explanationEs: 'Vincula con el desencanto con el ritmo de la vida digital.',
      },
      {
        question: 'What criticism do skeptics raise?',
        questionEs: '¿Qué crítica plantean los escépticos?',
        options: ['Analog is better', 'It is largely an affluent, urban phenomenon', 'Digital is dying', 'Young people reject it'],
        correctAnswer: 1,
        explanation: 'The analog revival is largely an affluent, urban phenomenon.',
        explanationEs: 'El resurgimiento analógico es en gran parte un fenómeno urbano acomodado.',
      },
    ],
    discussionQuestions: [
      { english: 'Do you prefer physical or digital media? Why?', spanish: '¿Prefieres medios físicos o digitales? ¿Por qué?' },
      { english: 'Is the analog trend meaningful or just consumer preference?', spanish: '¿Es la tendencia analógica significativa o solo preferencia del consumidor?' },
    ],
  },
];

export default NEWS_ARTICLES;
