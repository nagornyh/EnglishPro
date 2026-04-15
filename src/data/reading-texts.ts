// Graduated Reading Texts A1→C1
// Textos de Lectura Graduados A1→C1
// Each text has: content, comprehension questions, vocabulary focus, reading strategy

export interface ReadingText {
  id: string;
  title: string;
  titleEs: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  cefrLevel: 1 | 2 | 3 | 4 | 5 | 6;
  genre: 'notice' | 'email' | 'message' | 'article' | 'narrative' | 'description' | 'opinion' | 'formal-letter' | 'review' | 'news' | 'essay' | 'literary';
  topic: string;
  topicEs: string;
  wordCount: number;
  text: string;
  // Key vocabulary from the text
  vocabulary: { word: string; definition: string; translation: string }[];
  // Comprehension questions
  questions: {
    id: string;
    type: 'multiple-choice' | 'true-false' | 'short-answer' | 'find-word';
    question: string;
    questionEs: string;
    options?: string[];
    correct: string | number;
    explanationEs: string;
  }[];
  // Reading strategy focus
  readingStrategy: string;
  readingStrategyEs: string;
  // Grammar/language point highlighted
  grammarFocus?: string;
  grammarFocusEs?: string;
  // Link to grammar theory modules for cross-referencing
  grammarTheoryIds?: string[];
}

export const readingTexts: ReadingText[] = [

  // ─────────────────────────────────────────
  // A1 TEXTS
  // ─────────────────────────────────────────

  {
    id: 'a1-notice-cafe',
    title: 'Coffee Shop Notice',
    titleEs: 'Aviso de Cafetería',
    level: 'A1',
    cefrLevel: 1,
    genre: 'notice',
    topic: 'Daily life / Notices',
    topicEs: 'Vida cotidiana / Avisos',
    wordCount: 62,
    text: `CAFÉ LUNA — OPENING HOURS

Monday to Friday: 7:00 am – 8:00 pm
Saturday: 8:00 am – 10:00 pm
Sunday: CLOSED

We have hot drinks, sandwiches, cakes and salads.
Wi-Fi is FREE for all customers.

Special offer this week:
Buy 2 coffees and get 1 FREE!

No smoking inside.
Dogs are welcome.

Thank you for visiting Café Luna! ☕`,
    vocabulary: [
      { word: 'opening hours', definition: 'the times a place is open', translation: 'horario de apertura' },
      { word: 'closed', definition: 'not open', translation: 'cerrado' },
      { word: 'offer', definition: 'a special reduced price', translation: 'oferta' },
      { word: 'customers', definition: 'people who buy things', translation: 'clientes' },
      { word: 'welcome', definition: 'allowed / invited', translation: 'bienvenidos / permitidos' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What time does the café close on Friday?', questionEs: '¿A qué hora cierra la cafetería el viernes?', options: ['7:00 pm', '8:00 pm', '10:00 pm', '8:00 am'], correct: 1, explanationEs: 'Monday to Friday: 7:00 am – 8:00 pm → cierra a las 8:00 pm.' },
      { id: 'q2', type: 'true-false', question: 'The Wi-Fi costs money.', questionEs: 'El Wi-Fi cuesta dinero.', correct: 'false', explanationEs: '"Wi-Fi is FREE for all customers" → falso.' },
      { id: 'q3', type: 'true-false', question: 'You can bring your dog to the café.', questionEs: 'Puedes llevar a tu perro a la cafetería.', correct: 'true', explanationEs: '"Dogs are welcome" → verdadero.' },
      { id: 'q4', type: 'multiple-choice', question: 'What is the special offer?', questionEs: '¿Cuál es la oferta especial?', options: ['Free coffee every day', 'Buy 2 coffees, get 1 free', 'Free cake with every drink', '50% off on Sundays'], correct: 1, explanationEs: '"Buy 2 coffees and get 1 FREE!"' },
    ],
    readingStrategy: 'Scanning — look for specific information quickly',
    readingStrategyEs: 'Scanning — busca información específica rápidamente sin leer todo el texto',
    grammarFocus: 'Present Simple for facts and routines',
    grammarFocusEs: 'Presente Simple para hechos y rutinas',
    grammarTheoryIds: ['a1-present-simple'],
  },

  {
    id: 'a1-email-friend',
    title: 'Email from a New Friend',
    titleEs: 'Email de un Nuevo Amigo',
    level: 'A1',
    cefrLevel: 1,
    genre: 'email',
    topic: 'Personal introduction',
    topicEs: 'Presentación personal',
    wordCount: 89,
    text: `Hi! My name is Tom. I'm 22 years old and I'm from Manchester, England.

I'm a university student. I study computer science. I love music and sport. My favourite sport is football. I play football every Saturday with my friends.

I have a big family — two brothers and one sister. My mum is a teacher and my dad is a doctor.

I have a dog. His name is Max. He is very playful!

I speak English and a little Spanish. Do you speak Spanish?

Write back soon!
Tom`,
    vocabulary: [
      { word: 'favourite', definition: 'the one you like most (British spelling)', translation: 'favorito' },
      { word: 'playful', definition: 'likes to play a lot', translation: 'juguetón' },
      { word: 'a little', definition: 'not much, some', translation: 'un poco' },
      { word: 'write back', definition: 'reply to a letter/email', translation: 'responder (por carta/email)' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How old is Tom?', questionEs: '¿Cuántos años tiene Tom?', options: ['20', '21', '22', '23'], correct: 2, explanationEs: '"I\'m 22 years old"' },
      { id: 'q2', type: 'multiple-choice', question: "What is Tom's favourite sport?", questionEs: '¿Cuál es el deporte favorito de Tom?', options: ['Tennis', 'Swimming', 'Basketball', 'Football'], correct: 3, explanationEs: '"My favourite sport is football."' },
      { id: 'q3', type: 'true-false', question: "Tom's mother is a doctor.", questionEs: 'La madre de Tom es doctora.', correct: 'false', explanationEs: '"My mum is a teacher and my dad is a doctor." — la madre es profesora.' },
      { id: 'q4', type: 'short-answer', question: "What is Tom's dog called?", questionEs: '¿Cómo se llama el perro de Tom?', correct: 'Max', explanationEs: '"His name is Max."' },
    ],
    readingStrategy: 'Reading for detail — find specific facts about a person',
    readingStrategyEs: 'Lectura detallada — busca hechos específicos sobre una persona',
    grammarFocus: 'Present Simple with TO BE and regular verbs; possessive adjectives',
    grammarFocusEs: 'Presente Simple con TO BE y verbos regulares; adjetivos posesivos',
    grammarTheoryIds: ['a1-present-simple', 'a1-possessive-adjectives'],
  },

  {
    id: 'a1-menu',
    title: 'Restaurant Menu',
    titleEs: 'Menú de Restaurante',
    level: 'A1',
    cefrLevel: 1,
    genre: 'notice',
    topic: 'Food and drink / Numbers',
    topicEs: 'Comida y bebida / Números',
    wordCount: 75,
    text: `THE BLUE PLATE RESTAURANT

🍽️ STARTERS
Tomato soup .............. £4.50
Mixed salad ............... £5.00
Garlic bread .............. £3.50

🍽️ MAIN COURSES
Grilled chicken ........... £12.00
Vegetable pasta ........... £9.50
Fish and chips ............ £11.00

🍽️ DESSERTS
Ice cream (3 flavours: vanilla, chocolate, strawberry) ... £4.00
Chocolate cake ............ £4.50

🥤 DRINKS
Water / Juice / Soft drink ... £2.50
Coffee / Tea .............. £3.00

Service: 10% added to your bill`,
    vocabulary: [
      { word: 'starter', definition: 'the first part of a meal (appetizer)', translation: 'entrante, aperitivo' },
      { word: 'main course', definition: 'the principal dish of a meal', translation: 'plato principal' },
      { word: 'grilled', definition: 'cooked on a grill with direct heat', translation: 'a la parrilla' },
      { word: 'flavour', definition: 'taste variety (British spelling: flavor in AmE)', translation: 'sabor' },
      { word: 'bill', definition: 'the document showing how much you owe', translation: 'cuenta' },
      { word: 'service', definition: 'fee for the waiter/waitress', translation: 'servicio' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: "You order tomato soup, fish and chips, and a coffee. How much is it (before service)?", questionEs: 'Pides sopa de tomate, fish and chips y un café. ¿Cuánto es (antes del servicio)?', options: ['£17.50', '£18.00', '£18.50', '£19.00'], correct: 2, explanationEs: '£4.50 + £11.00 + £3.00 = £18.50' },
      { id: 'q2', type: 'multiple-choice', question: 'How many ice cream flavours are there?', questionEs: '¿Cuántos sabores de helado hay?', options: ['2', '3', '4', '5'], correct: 1, explanationEs: '"vanilla, chocolate, strawberry" = 3 flavours.' },
      { id: 'q3', type: 'true-false', question: 'The cheapest starter is the mixed salad.', questionEs: 'El entrante más barato es la ensalada mixta.', correct: 'false', explanationEs: 'Garlic bread = £3.50, which is cheaper than the mixed salad (£5.00).' },
    ],
    readingStrategy: 'Scanning for numbers and prices',
    readingStrategyEs: 'Scanning — buscar números y precios específicos rápidamente',
  },

  // ─────────────────────────────────────────
  // A2 TEXTS
  // ─────────────────────────────────────────

  {
    id: 'a2-email-holiday',
    title: 'Email About a Holiday',
    titleEs: 'Email Sobre Unas Vacaciones',
    level: 'A2',
    cefrLevel: 2,
    genre: 'email',
    topic: 'Travel and holidays',
    topicEs: 'Viajes y vacaciones',
    wordCount: 142,
    text: `Hi Sara!

How are you? I'm writing from Barcelona! I arrived three days ago and it's amazing here.

The weather is brilliant – very sunny and about 28 degrees. Perfect for the beach! Yesterday I visited the Sagrada Familia. It was incredible – I took hundreds of photos. In the afternoon, I walked around the Gothic Quarter. The streets are so narrow and beautiful.

The food is fantastic. Last night I tried paella for the first time and I loved it. I'm also eating a lot of tapas – they're so tasty and cheap!

The people here are very friendly. I bought a few Spanish phrases before I came, so I can say "hello", "thank you" and "where is the toilet?" – very important!

Tomorrow we're going to the beach all day, and in the evening we're having dinner at a restaurant near the hotel.

I don't want to go home! 😊

See you soon,
Emily`,
    vocabulary: [
      { word: 'brilliant', definition: 'excellent, wonderful (British informal)', translation: 'estupendo, genial' },
      { word: 'narrow', definition: 'not wide', translation: 'estrecho/a' },
      { word: 'tasty', definition: 'having a good flavour', translation: 'sabroso/a, rico/a' },
      { word: 'friendly', definition: 'kind and pleasant', translation: 'amable, simpático/a' },
      { word: 'phrase', definition: 'a short group of words', translation: 'frase, expresión' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How long has Emily been in Barcelona?', questionEs: '¿Cuánto tiempo lleva Emily en Barcelona?', options: ['One day', 'Two days', 'Three days', 'Four days'], correct: 2, explanationEs: '"I arrived three days ago"' },
      { id: 'q2', type: 'multiple-choice', question: 'What did she do yesterday afternoon?', questionEs: '¿Qué hizo ayer por la tarde?', options: ['Went to the beach', 'Visited the Sagrada Familia', 'Walked in the Gothic Quarter', 'Had dinner at a restaurant'], correct: 2, explanationEs: '"In the afternoon, I walked around the Gothic Quarter."' },
      { id: 'q3', type: 'true-false', question: 'Emily had paella before coming to Barcelona.', questionEs: 'Emily había comido paella antes de ir a Barcelona.', correct: 'false', explanationEs: '"I tried paella for the first time" → nunca la había comido antes.' },
      { id: 'q4', type: 'multiple-choice', question: "What is Emily's plan for tomorrow evening?", questionEs: '¿Cuál es el plan de Emily para mañana por la noche?', options: ['Go to the beach', 'Visit a museum', 'Have dinner at a restaurant', 'Go to a show'], correct: 2, explanationEs: '"in the evening we\'re having dinner at a restaurant near the hotel."' },
    ],
    readingStrategy: 'Reading for gist and detail — understand the main idea, then look for specific facts',
    readingStrategyEs: 'Lectura global y detallada — primero entiende la idea general, luego busca datos específicos',
    grammarFocus: 'Past Simple for completed actions; Present Continuous for future plans',
    grammarFocusEs: 'Pasado Simple para acciones completadas; Presente Continuo para planes futuros',
    grammarTheoryIds: ['a2-past-simple', 'a2-present-continuous'],
  },

  {
    id: 'a2-article-sport',
    title: 'Why People Love Running',
    titleEs: 'Por Qué la Gente Ama Correr',
    level: 'A2',
    cefrLevel: 2,
    genre: 'article',
    topic: 'Sport and health',
    topicEs: 'Deporte y salud',
    wordCount: 158,
    text: `Running is one of the most popular sports in the world. Millions of people run every day. But why do so many people love it?

Firstly, running is good for your health. It makes your heart stronger and helps you to stay at a healthy weight. Doctors say that 30 minutes of running, three times a week, is excellent for your body.

Secondly, running is cheap. You only need a good pair of shoes. You don't need a gym membership or expensive equipment.

Thirdly, you can run almost anywhere – in a park, on the beach, or in the mountains. You can run alone or with friends. Many people listen to music or podcasts while they run, which makes it more enjoyable.

Running is also great for your mental health. After a run, people often feel less stressed and more positive. Some runners say that long runs give them time to think and solve problems.

Are you thinking about starting to run? Start slowly with short distances. Even a 10-minute run every day can make a big difference to your health.`,
    vocabulary: [
      { word: 'popular', definition: 'liked by many people', translation: 'popular' },
      { word: 'membership', definition: 'paying to be a member of a club', translation: 'membresía, cuota de socio' },
      { word: 'equipment', definition: 'tools or items needed for an activity', translation: 'equipo, material' },
      { word: 'mental health', definition: 'the health of your mind and emotions', translation: 'salud mental' },
      { word: 'stressed', definition: 'feeling worried and tense', translation: 'estresado/a' },
      { word: 'distance', definition: 'the length of a journey', translation: 'distancia' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to doctors, how often should you run for good health?', questionEs: 'Según los médicos, ¿con qué frecuencia debes correr para estar sano?', options: ['Every day for 30 minutes', 'Three times a week for 30 minutes', 'Once a week for an hour', 'Twice a week for 20 minutes'], correct: 1, explanationEs: '"30 minutes of running, three times a week"' },
      { id: 'q2', type: 'true-false', question: 'You need to buy expensive equipment to start running.', questionEs: 'Necesitas comprar equipo caro para empezar a correr.', correct: 'false', explanationEs: '"You only need a good pair of shoes." → No es caro.' },
      { id: 'q3', type: 'multiple-choice', question: 'The text gives THREE main reasons why people love running. Which reason is NOT mentioned?', questionEs: '¿Cuál de estas razones NO se menciona en el texto?', options: ['It is good for physical health', 'It is cheap', 'It improves your social life', 'It is good for mental health'], correct: 2, explanationEs: 'Las tres razones son: salud física, económico, salud mental. No se menciona la vida social.' },
      { id: 'q4', type: 'short-answer', question: 'What advice does the text give to people who want to start running?', questionEs: '¿Qué consejo da el texto a quienes quieren empezar a correr?', correct: 'Start slowly with short distances', explanationEs: '"Start slowly with short distances. Even a 10-minute run every day can make a big difference."' },
    ],
    readingStrategy: 'Identifying text structure — topic sentences and supporting details',
    readingStrategyEs: 'Identificar la estructura del texto — oraciones temáticas y detalles de apoyo (cada párrafo = una razón)',
    grammarFocus: 'Firstly/Secondly/Thirdly — discourse markers for listing reasons',
    grammarFocusEs: 'Firstly/Secondly/Thirdly — marcadores del discurso para enumerar razones',
  },

  // ─────────────────────────────────────────
  // B1 TEXTS
  // ─────────────────────────────────────────

  {
    id: 'b1-article-social-media',
    title: 'Is Social Media Changing Friendship?',
    titleEs: '¿Las Redes Sociales Están Cambiando la Amistad?',
    level: 'B1',
    cefrLevel: 3,
    genre: 'opinion',
    topic: 'Technology and society',
    topicEs: 'Tecnología y sociedad',
    wordCount: 247,
    text: `Twenty years ago, keeping in touch with friends was simple: you called them on the phone, sent a letter, or met them face-to-face. Today, social media platforms like Instagram, WhatsApp, and TikTok have completely transformed the way we connect with others. But has this change been positive?

On one hand, social media has made it much easier to stay in contact with people. You can chat with a friend who lives on the other side of the world instantly and for free. People who move to a new country can maintain their friendships back home. Without social media, many of these relationships would probably disappear.

On the other hand, some researchers argue that social media is creating a generation of people who have hundreds of "friends" online but feel lonely in real life. A study by the University of Pennsylvania found that students who spent less time on social media reported feeling less lonely and less depressed. The theory is that seeing other people's "perfect" lives on Instagram makes us feel that our own lives are not good enough.

The reality is probably more complex. The quality of your online friendships depends on how you use social media. If you use it to have meaningful conversations, share experiences, and support friends who are going through difficult times, it can strengthen real relationships. However, if you use it mainly to "like" posts and scroll through photos, it may actually make you feel more isolated.

The key question is not whether social media is good or bad, but how we choose to use it.`,
    vocabulary: [
      { word: 'keeping in touch', definition: 'maintaining contact with someone', translation: 'mantenerse en contacto' },
      { word: 'transform', definition: 'change completely', translation: 'transformar' },
      { word: 'generation', definition: 'all people born around the same time', translation: 'generación' },
      { word: 'depressed', definition: 'very sad and without hope for a long time', translation: 'deprimido/a' },
      { word: 'meaningful', definition: 'having real importance and value', translation: 'significativo/a, con sentido' },
      { word: 'isolated', definition: 'alone, separated from others', translation: 'aislado/a' },
      { word: 'scroll', definition: 'move through content on a screen', translation: 'desplazarse, hacer scroll' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: "According to the text, what is ONE advantage of social media for friendships?", questionEs: 'Según el texto, ¿cuál es UNA ventaja de las redes sociales para las amistades?', options: ['It makes people happier', 'It helps people stay in contact across distance', 'It creates more meaningful relationships', 'It reduces loneliness'], correct: 1, explanationEs: '"You can chat with a friend who lives on the other side of the world instantly and for free."' },
      { id: 'q2', type: 'multiple-choice', question: 'What did the University of Pennsylvania study find?', questionEs: '¿Qué encontró el estudio de la Universidad de Pennsylvania?', options: ['Social media makes students happier', 'Less social media use leads to feelings of less loneliness', 'Instagram is more harmful than TikTok', "Students don't use social media much"], correct: 1, explanationEs: '"students who spent less time on social media reported feeling less lonely and less depressed."' },
      { id: 'q3', type: 'true-false', question: 'The author concludes that social media is definitely bad for friendship.', questionEs: 'El autor concluye que las redes sociales son definitivamente malas para la amistad.', correct: 'false', explanationEs: '"The reality is probably more complex" and "it depends on how you use it" — el autor no da un veredicto claro.' },
      { id: 'q4', type: 'short-answer', question: 'According to the text, when can social media strengthen real relationships?', questionEs: '¿Cuándo pueden las redes sociales fortalecer las relaciones reales?', correct: 'When used to have meaningful conversations, share experiences, and support friends', explanationEs: '"If you use it to have meaningful conversations, share experiences, and support friends..."' },
    ],
    readingStrategy: 'Understanding argument structure — identifying the writer\'s main point, evidence, and conclusion',
    readingStrategyEs: 'Comprender la estructura argumentativa — identificar el punto principal, la evidencia y la conclusión del autor',
    grammarFocus: 'On one hand / On the other hand — balancing an argument',
    grammarFocusEs: '"On one hand / On the other hand" — presentar dos lados de un argumento',
  },

  {
    id: 'b1-narrative-job-interview',
    title: 'The Job Interview',
    titleEs: 'La Entrevista de Trabajo',
    level: 'B1',
    cefrLevel: 3,
    genre: 'narrative',
    topic: 'Work / Narrative',
    topicEs: 'Trabajo / Narración',
    wordCount: 221,
    text: `It was the morning of the most important interview of Maria's life. She had applied for a position at a small tech company six weeks earlier, and last Monday she had finally received an invitation to attend an interview.

She had prepared thoroughly. She had researched the company, practised common interview questions with her flatmate, and had bought a new outfit especially for the occasion. The night before, she had laid everything out on the chair — jacket, blouse, trousers — so she would not waste time searching in the morning.

Despite all this preparation, things started to go wrong from the moment she woke up. She discovered that her alarm had not gone off, and she was already running twenty minutes late. Rushing to the bathroom, she knocked over a glass of water, which soaked her carefully selected trousers. She quickly changed into a different outfit — less perfect but at least dry.

On the underground, she got on the wrong train and had to get off at the next stop and wait for another one. By the time she arrived at the building, she was fifteen minutes late.

To her surprise, the interviewer was not angry. "Don't worry," he said with a smile. "Tell me — how did you handle the stress of being late today?" Maria took a deep breath. She had not expected the interview to start quite like this, but she smiled back and began to explain.`,
    vocabulary: [
      { word: 'apply for', definition: 'formally ask for a job or position', translation: 'solicitar, postularse para' },
      { word: 'thoroughly', definition: 'completely and carefully', translation: 'a fondo, minuciosamente' },
      { word: 'outfit', definition: 'a set of clothes worn together', translation: 'atuendo, conjunto' },
      { word: 'occasion', definition: 'a particular time or event', translation: 'ocasión, evento' },
      { word: 'soak', definition: 'make something completely wet', translation: 'empapar' },
      { word: 'handle', definition: 'deal with or manage a situation', translation: 'manejar, afrontar' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'Why did Maria choose her clothes the night before?', questionEs: '¿Por qué María eligió su ropa la noche anterior?', options: ['She wanted to impress the interviewer', 'So she would not waste time in the morning', 'Her flatmate told her to', 'It was her usual habit'], correct: 1, explanationEs: '"so she would not waste time searching in the morning"' },
      { id: 'q2', type: 'multiple-choice', question: 'What happened to her original outfit?', questionEs: '¿Qué le pasó a su atuendo original?', options: ['She could not find it', 'She spilled water on it', 'It was dirty', 'She decided it was not appropriate'], correct: 1, explanationEs: '"she knocked over a glass of water, which soaked her carefully selected trousers."' },
      { id: 'q3', type: 'true-false', question: 'The interviewer was angry because Maria was late.', questionEs: 'El entrevistador estaba enfadado porque María llegó tarde.', correct: 'false', explanationEs: '"To her surprise, the interviewer was not angry."' },
      { id: 'q4', type: 'short-answer', question: "What was the interviewer's first question?", questionEs: '¿Cuál fue la primera pregunta del entrevistador?', correct: 'How did you handle the stress of being late today?', explanationEs: '"how did you handle the stress of being late today?"' },
    ],
    readingStrategy: 'Following a narrative sequence — noticing time markers and the cause-effect chain of events',
    readingStrategyEs: 'Seguir una secuencia narrativa — fíjate en los marcadores de tiempo y la cadena causa-efecto',
    grammarFocus: 'Past Perfect for events before the narrative past — "she had prepared", "had not gone off"',
    grammarFocusEs: 'Past Perfect para eventos anteriores al pasado narrativo — "had prepared", "had not gone off"',
  },

  {
    id: 'b1-review-film',
    title: 'Film Review: The Quiet Ocean',
    titleEs: 'Crítica de Película: The Quiet Ocean',
    level: 'B1',
    cefrLevel: 3,
    genre: 'review',
    topic: 'Film and entertainment',
    topicEs: 'Cine y entretenimiento',
    wordCount: 195,
    text: `The Quiet Ocean ★★★★☆

Directed by Sofia Andrade, The Quiet Ocean tells the story of Elena, a marine biologist who travels to a remote island to study an endangered species of dolphin. What she discovers, however, goes far beyond science.

The film's greatest strength is its stunning photography. The underwater sequences are breathtaking — you feel as though you are actually floating alongside the dolphins. The cinematography alone is worth the price of admission.

The lead actress, Camila Reyes, delivers a powerful performance. Her character begins the film as a cold, ambitious scientist, but we watch her slowly change as she bonds with the local community. The transformation feels genuine and moving.

The script, however, has some weaknesses. The romantic subplot feels rushed, and the film's final act introduces some unlikely plot twists that strain credibility. There were moments in the last thirty minutes where the storyline felt more like a soap opera than the thoughtful drama it had promised to be.

Despite these flaws, The Quiet Ocean is a beautiful and ultimately rewarding film. It asks important questions about our relationship with the natural world without providing easy answers.

Recommended for lovers of nature documentaries and character-driven dramas alike.`,
    vocabulary: [
      { word: 'remote', definition: 'far away from other places', translation: 'remoto, alejado' },
      { word: 'endangered', definition: 'at risk of dying out completely', translation: 'en peligro de extinción' },
      { word: 'breathtaking', definition: 'very impressive and beautiful', translation: 'impresionante, que quita el aliento' },
      { word: 'genuine', definition: 'real and not fake', translation: 'genuino, auténtico' },
      { word: 'subplot', definition: 'a secondary story within the main story', translation: 'trama secundaria' },
      { word: 'credibility', definition: 'the quality of being believable', translation: 'credibilidad' },
      { word: 'flaw', definition: 'a fault or weakness', translation: 'defecto, fallo' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: "According to the reviewer, what is the film's greatest strength?", questionEs: "Según el crítico, ¿cuál es el mayor punto fuerte de la película?", options: ["The lead actress's performance", 'The script', 'The underwater photography', 'The romantic subplot'], correct: 2, explanationEs: '"The film\'s greatest strength is its stunning photography."' },
      { id: 'q2', type: 'true-false', question: "The reviewer thinks the film's ending is its best part.", questionEs: 'El crítico piensa que el final de la película es su mejor parte.', correct: 'false', explanationEs: '"the film\'s final act introduces some unlikely plot twists that strain credibility" — el crítico critica el final.' },
      { id: 'q3', type: 'multiple-choice', question: 'How does Elena change during the film?', questionEs: '¿Cómo cambia Elena durante la película?', options: ['She becomes more ambitious', 'She becomes less interested in science', 'She becomes warmer and connects with the community', 'She returns home and abandons her research'], correct: 2, explanationEs: '"she bonds with the local community. The transformation feels genuine and moving."' },
      { id: 'q4', type: 'multiple-choice', question: 'Overall, how does the reviewer feel about the film?', questionEs: 'En general, ¿qué piensa el crítico sobre la película?', options: ['Very negative — too many flaws', 'Mixed — some good parts but mainly disappointing', 'Mostly positive despite some weaknesses', 'Not sure — does not give a recommendation'], correct: 2, explanationEs: '"The Quiet Ocean is a beautiful and ultimately rewarding film" + recommended → mayoritariamente positivo.' },
    ],
    readingStrategy: 'Distinguishing positive from negative comments in a review',
    readingStrategyEs: 'Distinguir comentarios positivos de negativos en una crítica — busca palabras de contraste (however, despite)',
    grammarFocus: '"However" and "despite" to contrast positive and negative points',
    grammarFocusEs: '"However" y "despite" para contrastar puntos positivos y negativos',
    grammarTheoryIds: ['b1-passive-voice'],
  },

  // ─────────────────────────────────────────
  // B2 TEXTS
  // ─────────────────────────────────────────

  {
    id: 'b2-essay-ai',
    title: 'The Impact of Artificial Intelligence on Employment',
    titleEs: 'El Impacto de la Inteligencia Artificial en el Empleo',
    level: 'B2',
    cefrLevel: 4,
    genre: 'essay',
    topic: 'Technology and work',
    topicEs: 'Tecnología y trabajo',
    wordCount: 310,
    text: `Few technological developments in recent history have generated as much debate as artificial intelligence. While AI promises enormous benefits in fields ranging from medicine to climate science, its potential impact on employment has become a source of widespread anxiety. The fundamental question is not whether AI will change the labour market — it clearly will — but whether those changes will ultimately prove beneficial or catastrophic.

Those who welcome the AI revolution argue that history vindicates their optimism. The Industrial Revolution displaced millions of agricultural and craft workers, yet ultimately created far more employment than it destroyed. Technological innovation has consistently generated new types of work that were previously unimaginable. Proponents of AI suggest that as machines take over routine, repetitive tasks, humans will be freed to focus on more creative, interpersonal, and complex activities — the work that machines cannot easily replicate.

Critics, however, point out that this comparison may be misleading. Previous technological waves affected specific sectors and relatively limited skills. AI, by contrast, can perform an extremely wide range of cognitive tasks, from analysing legal documents to composing music. Moreover, the pace of AI development may be too rapid for economies to adjust. Workers displaced by automation may not have the time, resources, or opportunity to retrain for new roles.

The most balanced view, perhaps, is that the impact of AI on employment will depend largely on the policy choices that societies make. If governments invest in education and retraining programmes, strengthen social safety nets, and ensure that the productivity gains from AI are broadly shared, the transition could be managed smoothly. Without such interventions, however, the risk of significant social disruption is very real.

The technology itself is neither a cure nor a curse — it is a tool, and like all tools, its ultimate value depends on how wisely we choose to use it.`,
    vocabulary: [
      { word: 'vindicates', definition: 'proves to be correct or justified', translation: 'valida, justifica' },
      { word: 'displace', definition: 'force someone to leave their job or home', translation: 'desplazar, dejar sin trabajo' },
      { word: 'replicate', definition: 'copy or reproduce exactly', translation: 'replicar, reproducir' },
      { word: 'proponents', definition: 'people who support an idea', translation: 'defensores, partidarios' },
      { word: 'cognitive', definition: 'relating to thinking and mental processes', translation: 'cognitivo/a' },
      { word: 'retraining', definition: 'learning new skills for a new job', translation: 'reciclaje laboral, recualificación' },
      { word: 'disruption', definition: 'a major disturbance or change to a system', translation: 'disrupción, trastorno' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What is the main question the essay explores?', questionEs: '¿Cuál es la pregunta principal que explora el ensayo?', options: ['Whether AI is technically possible', 'Whether AI changes in the labor market will be good or bad', 'How fast AI is developing', 'Which jobs AI will replace first'], correct: 1, explanationEs: '"whether those changes will ultimately prove beneficial or catastrophic"' },
      { id: 'q2', type: 'multiple-choice', question: 'How do supporters of AI defend it against fears of unemployment?', questionEs: '¿Cómo defienden los partidarios de la IA frente al miedo al desempleo?', options: ['They say AI is not advanced enough to replace humans', 'They argue historical precedent shows technology creates more jobs than it destroys', 'They claim retraining is easy and affordable', 'They point out that AI only affects physical jobs'], correct: 1, explanationEs: '"The Industrial Revolution displaced millions...yet ultimately created far more employment than it destroyed."' },
      { id: 'q3', type: 'multiple-choice', question: "According to critics, why is the Industrial Revolution comparison misleading?", questionEs: "Según los críticos, ¿por qué es engañosa la comparación con la Revolución Industrial?", options: ['AI is cheaper than industrial machines', 'AI can perform a much wider range of tasks than previous technologies', 'The Industrial Revolution did not actually create jobs', 'Previous technology only affected agriculture'], correct: 1, explanationEs: '"AI, by contrast, can perform an extremely wide range of cognitive tasks"' },
      { id: 'q4', type: 'short-answer', question: 'What condition does the author give for a smooth transition to AI?', questionEs: '¿Qué condición da el autor para una transición suave hacia la IA?', correct: 'Government investment in education, retraining, social safety nets, and broad sharing of productivity gains', explanationEs: '"If governments invest in education and retraining programmes, strengthen social safety nets..."' },
    ],
    readingStrategy: 'Critical reading — identifying thesis, counterargument, and the author\'s own position',
    readingStrategyEs: 'Lectura crítica — identificar la tesis, el contraargumento y la posición propia del autor',
    grammarFocus: 'Complex sentence structures: "not...but", "while", "by contrast", "however"',
    grammarFocusEs: 'Estructuras complejas: "not...but", "while", "by contrast", "however" — conectores de un argumento académico',
    grammarTheoryIds: ['b2-participle-clauses'],
  },

  {
    id: 'b2-formal-letter',
    title: 'Formal Complaint Letter',
    titleEs: 'Carta Formal de Reclamación',
    level: 'B2',
    cefrLevel: 4,
    genre: 'formal-letter',
    topic: 'Formal writing / Complaints',
    topicEs: 'Escritura formal / Reclamaciones',
    wordCount: 248,
    text: `14 Blenheim Road
Oxford
OX2 7PQ

15 November 2025

Customer Services Manager
SkyConnect Broadband
15 Regent Street
London
EC1A 1BB

Dear Sir or Madam,

I am writing to express my extreme dissatisfaction with the service I have received from SkyConnect Broadband over the past two months.

I subscribed to your Premium Broadband package in September of this year, having been assured by your sales representative that the service would provide download speeds of up to 100Mbps. In practice, however, I have consistently experienced speeds of between 8 and 15Mbps. This is significantly below the advertised speed and is entirely inadequate for my purposes, as I regularly work from home and depend on a reliable, fast connection.

On three separate occasions — on 5 October, 22 October, and 7 November — I contacted your customer support line to report this issue. On each occasion I was informed that a technician would call within 48 hours. To date, no technician has contacted me, and the problem remains unresolved.

I would therefore request that you address this matter as a matter of urgency. Specifically, I require either a full technical investigation and resolution of the speed issue within 14 days, or a proportionate reduction in my monthly bill to reflect the service I am actually receiving. Should neither of these outcomes be achievable, I shall have no option but to terminate my contract and seek an alternative provider, without incurring any early termination fees.

I look forward to hearing from you within seven days of this letter.

Yours faithfully,
Jonathan Greaves`,
    vocabulary: [
      { word: 'dissatisfaction', definition: 'the feeling of not being satisfied', translation: 'insatisfacción' },
      { word: 'subscribe', definition: 'pay regularly for a service', translation: 'suscribirse, contratar' },
      { word: 'consistent', definition: 'happening repeatedly in the same way', translation: 'constante' },
      { word: 'inadequate', definition: 'not enough or not good enough', translation: 'inadecuado/a, insuficiente' },
      { word: 'unresolved', definition: 'not yet solved or completed', translation: 'sin resolver' },
      { word: 'proportionate', definition: 'appropriately sized in relation to something else', translation: 'proporcional' },
      { word: 'terminate', definition: 'officially end', translation: 'cancelar, dar por terminado' },
      { word: 'incur', definition: 'suffer a cost or penalty', translation: 'incurrir en, sufrir' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What speed was Mr. Greaves promised?', questionEs: '¿Qué velocidad le prometieron al Sr. Greaves?', options: ['Up to 8Mbps', 'Up to 15Mbps', 'Up to 100Mbps', 'Up to 50Mbps'], correct: 2, explanationEs: '"download speeds of up to 100Mbps"' },
      { id: 'q2', type: 'multiple-choice', question: 'How many times did he contact customer support?', questionEs: '¿Cuántas veces contactó con el servicio de atención al cliente?', options: ['Once', 'Twice', 'Three times', 'Four times'], correct: 2, explanationEs: '"On three separate occasions"' },
      { id: 'q3', type: 'true-false', question: 'A technician visited and fixed the problem.', questionEs: 'Un técnico visitó y resolvió el problema.', correct: 'false', explanationEs: '"no technician has contacted me, and the problem remains unresolved."' },
      { id: 'q4', type: 'multiple-choice', question: 'What will Mr. Greaves do if the problem is not resolved?', questionEs: '¿Qué hará el Sr. Greaves si el problema no se resuelve?', options: ['Take the company to court', 'Cancel his contract without paying fees', 'Reduce his monthly payment himself', "Write another letter"], correct: 1, explanationEs: '"terminate my contract and seek an alternative provider, without incurring any early termination fees."' },
    ],
    readingStrategy: 'Identifying register — formal language features: passive voice, formal vocabulary, impersonal structures',
    readingStrategyEs: 'Identificar el registro — características del lenguaje formal: voz pasiva, vocabulario formal, estructuras impersonales',
    grammarFocus: 'Formal language: "I am writing to...", "I would therefore request...", "Should...be achievable"',
    grammarFocusEs: 'Lenguaje formal: "I am writing to...", fórmulas de cortesía formal, condicional con should invertido',
    grammarTheoryIds: ['b2-passive-advanced'],
  },

  // ─────────────────────────────────────────
  // C1 TEXTS
  // ─────────────────────────────────────────

  {
    id: 'c1-essay-privacy',
    title: 'The Erosion of Privacy in the Digital Age',
    titleEs: 'La Erosión de la Privacidad en la Era Digital',
    level: 'C1',
    cefrLevel: 5,
    genre: 'essay',
    topic: 'Technology, privacy and society',
    topicEs: 'Tecnología, privacidad y sociedad',
    wordCount: 365,
    text: `Privacy, once considered a fundamental cornerstone of liberal democracy, is undergoing a profound transformation in the digital age. The proliferation of smartphones, social media platforms, and data-harvesting technologies has created a world in which vast quantities of personal information are routinely collected, analysed, and monetised by corporations and governments alike. Whether this development constitutes a genuine crisis or merely an uncomfortable but manageable trade-off is a question that has divided scholars, policymakers, and the public.

Those who sound the alarm point to the sheer scale of modern surveillance. Companies such as Google and Meta possess detailed profiles of billions of individuals, encompassing their political views, purchasing habits, health concerns, and intimate relationships. The philosopher Shoshana Zuboff has described this phenomenon as "surveillance capitalism" — an economic system built not merely on the extraction of natural resources, but on the extraction of human experience itself. The implications are far from trivial: targeted advertising can nudge behaviour, algorithmic systems can perpetuate social inequalities, and the aggregation of seemingly innocuous data points can reveal highly sensitive information about individuals without their awareness.

On the other side of the debate, technological determinists argue that erosion of privacy is an inevitable by-product of progress, and that the benefits of the data economy — personalised medicine, enhanced public safety, more efficient public services — outweigh the costs. They point to the fact that most users in democratic societies knowingly accept terms and conditions that grant extensive permissions to technology companies, suggesting that public concern, while genuine, may be overstated.

However, this second position rests on a questionable assumption: that meaningful consent exists. When privacy policies routinely run to tens of thousands of words and the alternative to acceptance is exclusion from essential digital services, the "consent" being given is arguably no consent at all. The law has begun to recognise this: the European Union's General Data Protection Regulation represents the most ambitious legislative attempt to date to rebalance the relationship between citizens and data-processing entities.

Ultimately, the preservation of privacy in the digital age will require more than individual vigilance. It demands structural solutions — robust regulation, algorithmic transparency, and a cultural shift toward treating personal data not as a commodity to be exploited, but as an extension of the individual's fundamental right to autonomy.`,
    vocabulary: [
      { word: 'proliferation', definition: 'rapid increase in numbers', translation: 'proliferación' },
      { word: 'monetise', definition: 'convert something into money', translation: 'monetizar' },
      { word: 'surveillance', definition: 'close observation, especially by authorities', translation: 'vigilancia' },
      { word: 'encompassing', definition: 'including a wide range of things', translation: 'abarcando, que incluye' },
      { word: 'nudge', definition: 'gently push someone in a particular direction', translation: 'empujar sutilmente, influenciar' },
      { word: 'perpetuate', definition: 'make something continue indefinitely', translation: 'perpetuar' },
      { word: 'aggregation', definition: 'combining many things into a whole', translation: 'agregación' },
      { word: 'innocuous', definition: 'not harmful or offensive', translation: 'inocuo, inofensivo' },
      { word: 'determinists', definition: 'people who believe outcomes are inevitable', translation: 'deterministas' },
      { word: 'autonomy', definition: 'the right to make your own decisions', translation: 'autonomía' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How does Shoshana Zuboff characterise the modern data economy?', questionEs: '¿Cómo caracteriza Shoshana Zuboff la economía de datos moderna?', options: ['As a positive development for democracy', 'As surveillance capitalism — extracting human experience for profit', 'As an inevitable but harmless change', 'As a minor extension of traditional capitalism'], correct: 1, explanationEs: '"surveillance capitalism" — an economic system built on the extraction of human experience itself.' },
      { id: 'q2', type: 'multiple-choice', question: "What is the main weakness the author identifies in the 'technological determinists' argument?", questionEs: '¿Cuál es la principal debilidad que el autor identifica en el argumento de los "deterministas tecnológicos"?', options: ['They ignore the benefits of technology', 'Their assumption of meaningful consent is flawed', 'They lack empirical evidence', 'They do not consider government regulation'], correct: 1, explanationEs: '"this second position rests on a questionable assumption: that meaningful consent exists."' },
      { id: 'q3', type: 'true-false', question: 'The author believes that individual behaviour change alone is sufficient to protect privacy.', questionEs: 'El autor cree que el cambio de comportamiento individual es suficiente para proteger la privacidad.', correct: 'false', explanationEs: '"the preservation of privacy...will require more than individual vigilance. It demands structural solutions."' },
      { id: 'q4', type: 'short-answer', question: 'What three structural solutions does the author propose to protect privacy?', questionEs: '¿Qué tres soluciones estructurales propone el autor para proteger la privacidad?', correct: 'Robust regulation, algorithmic transparency, and treating personal data as an extension of individual autonomy', explanationEs: '"robust regulation, algorithmic transparency, and a cultural shift toward treating personal data not as a commodity..."' },
    ],
    readingStrategy: 'Evaluating an argument — distinguishing the author\'s view from views they present but do not endorse',
    readingStrategyEs: 'Evaluar un argumento — distinguir la opinión del autor de las opiniones que presenta pero no respalda (distancing language: "they argue", "this position rests on...")',
    grammarFocus: 'Hedging and distancing language: "arguably", "arguably no consent at all", "rests on a questionable assumption"',
    grammarFocusEs: 'Lenguaje de distanciamiento y hedging: "arguably", "rests on a questionable assumption" — el autor muestra su postura sin ser demasiado directo',
    grammarTheoryIds: ['c1-hedging'],
  },

  // ─────────────────────────────────────────
  // A2 ADDITIONAL TEXTS
  // ─────────────────────────────────────────

  {
    id: 'a2-news-weather',
    title: 'Severe Weather Hits the South',
    titleEs: 'El Mal Tiempo Azota el Sur',
    level: 'A2',
    cefrLevel: 2,
    genre: 'article',
    topic: 'Weather and news',
    topicEs: 'Clima y noticias',
    wordCount: 115,
    text: `Heavy rain and strong winds hit the south of the country last weekend. Roads were closed and hundreds of homes lost electricity. The storms began on Friday night and continued until Sunday afternoon.

The fire service received more than 400 calls. Teams worked all night to help people who were trapped in their cars or in flooded buildings.

In some areas, schools were closed on Monday because the damage was too serious. Repair work is expected to take several weeks.

Meteorologists say the bad weather was caused by an unusual pattern of cold air from the north meeting warm air from the south. They are warning that more storms could arrive later this week.

The government has promised financial help for families whose homes were damaged.`,
    vocabulary: [
      { word: 'severe', definition: 'very bad or serious', translation: 'severo, grave' },
      { word: 'flooded', definition: 'covered with water', translation: 'inundado' },
      { word: 'trapped', definition: 'unable to escape', translation: 'atrapado' },
      { word: 'meteorologists', definition: 'scientists who study weather', translation: 'meteorólogos' },
      { word: 'financial', definition: 'related to money', translation: 'financiero' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How long did the storms last?', questionEs: '¿Cuánto duraron las tormentas?', options: ['One day', 'From Friday to Sunday', 'From Saturday to Monday', 'Only on Saturday'], correct: 1, explanationEs: '"The storms began on Friday night and continued until Sunday afternoon."' },
      { id: 'q2', type: 'true-false', question: 'All schools stayed open on Monday.', questionEs: 'Todos los colegios permanecieron abiertos el lunes.', correct: 'false', explanationEs: '"In some areas, schools were closed on Monday."' },
      { id: 'q3', type: 'multiple-choice', question: 'What caused the bad weather according to meteorologists?', questionEs: '¿Qué causó el mal tiempo según los meteorólogos?', options: ['A tropical storm from the sea', 'Cold air from the north meeting warm air from the south', 'An earthquake', 'An unusual heat wave'], correct: 1, explanationEs: '"cold air from the north meeting warm air from the south."' },
    ],
    readingStrategy: 'Skimming for the main idea — what, when, where, why, who',
    readingStrategyEs: 'Lectura rápida para identificar las 5 "W": qué, cuándo, dónde, por qué, quién',
    grammarFocus: 'Past simple for news reporting. Passive voice: "were closed", "were trapped".',
    grammarFocusEs: 'Pasado simple para noticias. Voz pasiva: "were closed", "were trapped" — muy común en noticias.',
    grammarTheoryIds: ['a2-past-simple', 'b1-passive-voice'],
  },

  {
    id: 'a2-email-making-plans',
    title: 'Making Plans for the Weekend',
    titleEs: 'Haciendo Planes para el Fin de Semana',
    level: 'A2',
    cefrLevel: 2,
    genre: 'email',
    topic: 'Social plans and leisure',
    topicEs: 'Planes sociales y ocio',
    wordCount: 130,
    text: `Hi Marta,

How are you? I'm writing to ask if you'd like to do something together this weekend.

On Saturday, there's a new exhibition at the Modern Art Museum — it's about street art from around the world. It opens at 10 am and it's free. I think it would be really interesting! After that, we could have lunch at that Italian restaurant near the park. They have a special menu on weekends.

If you prefer something more active, there's also a cycling event in the park on Sunday morning. It starts at 9 am and people of all abilities are welcome. I haven't done much cycling lately, but it could be fun!

Let me know which option you prefer, or if you have a different idea. We could also just meet for coffee if you're busy.

I hope to hear from you soon.

Best wishes,
Laura`,
    vocabulary: [
      { word: 'exhibition', definition: 'a public show of art or objects', translation: 'exposición' },
      { word: 'abilities', definition: 'skills or levels of skill', translation: 'habilidades, niveles' },
      { word: 'recently', definition: 'not long ago', translation: 'recientemente' },
      { word: 'prefer', definition: 'like better', translation: 'preferir' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What is the first activity Laura suggests?', questionEs: '¿Cuál es la primera actividad que propone Laura?', options: ['Cycling in the park', 'Having coffee', 'Visiting an art exhibition', 'Going to a concert'], correct: 2, explanationEs: '"there\'s a new exhibition at the Modern Art Museum."' },
      { id: 'q2', type: 'true-false', question: 'The exhibition costs money to enter.', questionEs: 'La exposición tiene precio de entrada.', correct: 'false', explanationEs: '"it\'s free."' },
      { id: 'q3', type: 'short-answer', question: 'What is Laura\'s third suggestion if Marta is busy?', questionEs: '¿Cuál es la tercera sugerencia de Laura si Marta está ocupada?', correct: 'Just meet for coffee', explanationEs: '"We could also just meet for coffee if you\'re busy."' },
    ],
    readingStrategy: 'Reading for specific detail — find key facts: price, time, location of each activity',
    readingStrategyEs: 'Lectura para encontrar detalles específicos: precio, hora, lugar de cada actividad propuesta',
    grammarFocus: '"Would like to", "could", "there\'s / there are" for suggestions and plans.',
    grammarFocusEs: '"Would like to", "could", "there\'s / there are" para hacer sugerencias y hablar de planes.',
    grammarTheoryIds: ['a2-can-could-modals', 'a1-there-is-are'],
  },

  {
    id: 'a2-instructions-recipe',
    title: 'How to Make a Simple Tomato Sauce',
    titleEs: 'Cómo Hacer una Salsa de Tomate Simple',
    level: 'A2',
    cefrLevel: 2,
    genre: 'notice',
    topic: 'Cooking and food',
    topicEs: 'Cocina y comida',
    wordCount: 140,
    text: `This easy tomato sauce is perfect for pasta or pizza. It takes about 30 minutes to make and serves four people.

INGREDIENTS
- 2 cans of chopped tomatoes
- 1 large onion, finely chopped
- 3 cloves of garlic, crushed
- 2 tablespoons of olive oil
- 1 teaspoon of sugar
- Salt and pepper to taste
- A small amount of fresh basil (optional)

METHOD
First, heat the olive oil in a large pan over medium heat. Add the onion and cook for five minutes, until it becomes soft and transparent.

Next, add the garlic and cook for one more minute. Then, pour in the tomatoes and stir everything together.

Add the sugar, salt, and pepper. The sugar helps to reduce the acidity of the tomatoes.

Bring the sauce to the boil, then reduce the heat and let it simmer for 20 minutes, stirring occasionally.

Finally, add the fresh basil if you are using it. Taste the sauce and adjust the seasoning.

Your sauce is ready to serve!`,
    vocabulary: [
      { word: 'cloves', definition: 'individual sections of garlic', translation: 'dientes (de ajo)' },
      { word: 'crushed', definition: 'pressed flat or broken', translation: 'machacado' },
      { word: 'simmer', definition: 'cook gently just below boiling point', translation: 'hervir a fuego lento' },
      { word: 'acidity', definition: 'sour quality', translation: 'acidez' },
      { word: 'seasoning', definition: 'salt, pepper and other flavourings', translation: 'condimento, sazón' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'Why is sugar added to the sauce?', questionEs: '¿Por qué se añade azúcar a la salsa?', options: ['To make it sweet', 'To reduce the acidity of the tomatoes', 'To help it thicken faster', 'It is optional'], correct: 1, explanationEs: '"The sugar helps to reduce the acidity of the tomatoes."' },
      { id: 'q2', type: 'multiple-choice', question: 'What is the LAST step in the method?', questionEs: '¿Cuál es el ÚLTIMO paso en el método?', options: ['Add the garlic', 'Bring the sauce to the boil', 'Add basil and taste for seasoning', 'Pour in the tomatoes'], correct: 2, explanationEs: '"add the fresh basil... Taste the sauce and adjust the seasoning."' },
      { id: 'q3', type: 'true-false', question: 'This recipe makes enough sauce for six people.', questionEs: 'Esta receta hace salsa suficiente para seis personas.', correct: 'false', explanationEs: '"It takes about 30 minutes to make and serves four people."' },
    ],
    readingStrategy: 'Following sequence — notice the linking words: First, Next, Then, Finally',
    readingStrategyEs: 'Seguir una secuencia de pasos — los conectores de secuencia: First, Next, Then, Finally ordenan las acciones.',
    grammarFocus: 'Imperative forms for instructions: "heat", "add", "stir", "bring", "reduce".',
    grammarFocusEs: 'Los imperativos para instrucciones: "heat" (calienta), "add" (añade). Muy común en recetas, manuales e instrucciones.',
    grammarTheoryIds: ['a2-imperatives'],
  },

  // ─────────────────────────────────────────
  // B2 ADDITIONAL TEXT
  // ─────────────────────────────────────────

  {
    id: 'b2-article-remote-work',
    title: 'The Remote Work Revolution: A New Normal or a Temporary Shift?',
    titleEs: 'La Revolución del Teletrabajo: ¿Una Nueva Normalidad o un Cambio Temporal?',
    level: 'B2',
    cefrLevel: 4,
    genre: 'article',
    topic: 'Work, technology and society',
    topicEs: 'Trabajo, tecnología y sociedad',
    wordCount: 280,
    text: `When the pandemic forced millions of workers into their homes in 2020, it was widely assumed to be a temporary measure. Few could have predicted that, years later, remote and hybrid working would become not just accepted but actively sought after by workers across a vast range of industries. The so-called "remote work revolution" has reshaped not only the labour market but also urban geography, family dynamics, and the way people define professional identity.

The productivity data is, at best, mixed. Some studies suggest that remote workers are more productive, thanks to the elimination of commuting time, fewer interruptions from colleagues, and greater flexibility to work during peak concentration hours. Other research, however, points to genuine losses: reduced spontaneous collaboration, the erosion of mentoring relationships (particularly for junior staff), and the difficulty of maintaining a strong organisational culture across dispersed teams.

Perhaps more significant than the question of productivity is the question of who benefits. For knowledge workers with large homes, good broadband, and no caring responsibilities, remote working can be genuinely liberating. For those in smaller accommodation, with young children or elderly relatives to care for, or working in industries where physical presence is required, the "revolution" has meant something very different — or nothing at all.

Companies, for their part, have realised that the issue is less about where work happens and more about how performance and collaboration are managed. The most successful organisations are not those that have simply replicated the office online, but those that have genuinely rethought their processes to accommodate different working patterns. Whether the current balance — some days in the office, some at home — will endure, or whether economic pressures or cultural backlash will tip the scales back towards full-time office work, remains to be seen.`,
    vocabulary: [
      { word: 'hybrid', definition: 'combining two different elements', translation: 'híbrido' },
      { word: 'sought after', definition: 'wanted and in demand', translation: 'buscado, demandado' },
      { word: 'dispersed', definition: 'spread over a wide area', translation: 'disperso' },
      { word: 'spontaneous', definition: 'happening naturally without planning', translation: 'espontáneo' },
      { word: 'replicated', definition: 'copied or reproduced exactly', translation: 'replicado' },
      { word: 'backlash', definition: 'a strong negative reaction', translation: 'reacción en contra, repercusión negativa' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to the text, what has the remote work trend affected beyond just working hours?', questionEs: 'Según el texto, ¿qué ha afectado la tendencia del teletrabajo más allá del horario laboral?', options: ['Only salaries', 'Urban geography, family dynamics and professional identity', 'Only technology infrastructure', 'Only commuting habits'], correct: 1, explanationEs: '"The remote work revolution has reshaped not only the labour market but also urban geography, family dynamics, and professional identity."' },
      { id: 'q2', type: 'multiple-choice', question: 'Who does the author suggest benefits MOST from remote working?', questionEs: '¿Quién sugiere el autor que se beneficia MÁS del teletrabajo?', options: ['Junior staff who need mentoring', 'Workers in large, well-connected homes without caring responsibilities', 'Workers in industrial sectors', 'All workers equally'], correct: 1, explanationEs: '"For knowledge workers with large homes, good broadband, and no caring responsibilities, remote working can be genuinely liberating."' },
      { id: 'q3', type: 'true-false', question: 'The text concludes that hybrid working will definitely become permanent.', questionEs: 'El texto concluye que el trabajo híbrido definitivamente se volverá permanente.', correct: 'false', explanationEs: '"Whether the current balance...will endure...remains to be seen."' },
      { id: 'q4', type: 'short-answer', question: 'What distinguishes the most successful companies, according to the final paragraph?', questionEs: '¿Qué distingue a las empresas más exitosas según el último párrafo?', correct: 'They rethought their processes rather than just replicating the office online', explanationEs: '"those that have genuinely rethought their processes to accommodate different working patterns."' },
    ],
    readingStrategy: 'Recognising argument balance — the writer presents multiple sides before evaluating them',
    readingStrategyEs: 'Reconocer el equilibrio argumentativo — el autor presenta varias perspectivas antes de evaluarlas. Busca los "sin embargo" (however) que marcan el cambio de postura.',
    grammarFocus: 'Discourse markers for contrast: "at best", "however", "for their part", "whether...or whether".',
    grammarFocusEs: 'Conectores de contraste y balance: "at best", "however", "for their part". "Whether...or whether" expresa incertidumbre elegante.',
  },

  // ─────────────────────────────────────────
  // C1 ADDITIONAL TEXTS
  // ─────────────────────────────────────────

  {
    id: 'c1-academic-abstract',
    title: 'The Bystander Effect Revisited: Technology and Moral Disengagement',
    titleEs: 'El Efecto Espectador Revisado: Tecnología y Desconexión Moral',
    level: 'C1',
    cefrLevel: 5,
    genre: 'essay',
    topic: 'Psychology, technology and ethics',
    topicEs: 'Psicología, tecnología y ética',
    wordCount: 260,
    text: `The bystander effect — the well-documented psychological phenomenon whereby individuals are less likely to intervene in an emergency situation when others are present — has been the subject of renewed scholarly attention in the context of digitally mediated social interaction. The original work of Darley and Latané (1968), which demonstrated that diffusion of responsibility and pluralistic ignorance could induce passivity even among morally motivated individuals, was grounded in face-to-face, physical contexts. A growing body of research now questions whether and how these mechanisms operate in online environments, where anonymity, physical distance, and the absence of real-time cues profoundly alter the social dynamics of witnessing harm.

Initial findings suggest that the bystander effect is not merely preserved in digital spaces but may, in certain conditions, be amplified. The asynchronous nature of many platforms means that users can observe content depicting distress — hateful comments, images of violence, or calls for help — without experiencing the same physiological arousal that typically accompanies witnessing harm in person. This attenuating effect on empathic response has been variously attributed to the framing of social media as "entertainment", the normative expectation of passive spectatorship, and the diffusion of moral responsibility across large, anonymous audiences.

Crucially, however, the relationship is not uniformly negative. Research suggests that platform design interventions — prominently surfacing reporting tools, displaying the number of users who have already acted, and reducing the subjective sense of anonymity — can meaningfully increase intervention rates. These findings point toward an optimistic, if demanding, conclusion: the moral failures of digital bystanders are not inevitable but are contingent on design choices that remain, at least in principle, within human control.`,
    vocabulary: [
      { word: 'bystander', definition: 'a person present at an event but not participating', translation: 'testigo, espectador (pasivo)' },
      { word: 'diffusion of responsibility', definition: 'the tendency for individuals to feel less responsible when others are present', translation: 'difusión de la responsabilidad' },
      { word: 'pluralistic ignorance', definition: 'mistakenly believing others have different private views', translation: 'ignorancia pluralista' },
      { word: 'asynchronous', definition: 'not happening at the same time', translation: 'asíncrono' },
      { word: 'contingent', definition: 'dependent on something uncertain', translation: 'contingente, que depende de' },
      { word: 'attenuating', definition: 'reducing the strength or effect', translation: 'atenuante' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to the text, how does digital anonymity affect the bystander effect?', questionEs: 'Según el texto, ¿cómo afecta el anonimato digital al efecto espectador?', options: ['It eliminates it completely', 'It may amplify it compared to physical settings', 'It makes people more likely to intervene', 'It has no significant effect'], correct: 1, explanationEs: '"the bystander effect is not merely preserved in digital spaces but may, in certain conditions, be amplified."' },
      { id: 'q2', type: 'true-false', question: 'The text argues that increased bystander passivity online is unavoidable.', questionEs: 'El texto argumenta que el aumento de la pasividad de los observadores online es inevitable.', correct: 'false', explanationEs: '"the moral failures of digital bystanders are not inevitable but are contingent on design choices."' },
      { id: 'q3', type: 'short-answer', question: 'Name two design interventions that research suggests can increase online intervention rates.', questionEs: 'Nombra dos intervenciones de diseño que la investigación sugiere que pueden aumentar las tasas de intervención online.', correct: 'Surfacing reporting tools prominently AND/OR displaying the number of users who have already acted AND/OR reducing anonymity', explanationEs: '"prominently surfacing reporting tools, displaying the number of users who have already acted, and reducing the subjective sense of anonymity."' },
    ],
    readingStrategy: 'Reading an academic abstract — identify: (1) the research question, (2) the key findings, (3) the conclusion',
    readingStrategyEs: 'Leer un abstract académico — identifica: (1) la pregunta de investigación, (2) los hallazgos clave, (3) la conclusión final.',
    grammarFocus: 'Academic hedging: "may be amplified", "variously attributed to", "suggest that", "at least in principle".',
    grammarFocusEs: 'Hedging académico: "may", "suggest", "variously attributed to" — el autor evita afirmaciones absolutas, característica del registro académico.',
    grammarTheoryIds: ['c1-hedging', 'b1-relative-clauses'],
  },

  {
    id: 'c1-literary-extract',
    title: 'Extract: "The City at Six O\'clock" (literary prose)',
    titleEs: 'Fragmento: "La Ciudad a las Seis" (prosa literaria)',
    level: 'C1',
    cefrLevel: 5,
    genre: 'narrative',
    topic: 'Urban life, isolation and time',
    topicEs: 'Vida urbana, aislamiento y tiempo',
    wordCount: 230,
    text: `By six o'clock, the city had put on its evening face. The grey, purposeful crowds of the afternoon — the people who walked fast and looked ahead, who made the pavements feel like corridors in a machine — had dissolved into something slower, something less resolved. Men stood outside pubs, jackets pulled around them against the autumn chill, holding pints they had not yet decided to drink. Women hurried home with bags that suggested the weight of decisions still to be made — what to cook, whether to call, how to say it.

She had walked this street most evenings for four years and had never been anything more than a shape among shapes. That was, she had sometimes thought, perhaps the greatest achievement of city life: the conferring of an absolute and mutual anonymity. The city did not know her. It did not withhold this knowledge; it simply had none to give. And there was a freedom in this, she supposed, though it sometimes arrived dressed as something colder.

The man on the corner was selling newspapers, though fewer people were buying them now. He called out in a voice that had once been sharp and was now merely habitual, a sonic signature more than an appeal. She recognised him — had passed him hundreds of times — but she had no name for him, and he had none for her. They were participants in the same small ceremony, enacted each evening at the threshold of this particular hour, which belonged to neither day nor night.`,
    vocabulary: [
      { word: 'purposeful', definition: 'having a clear aim or determination', translation: 'decidido, con propósito' },
      { word: 'resolved', definition: 'certain, decided in purpose', translation: 'resuelto, decidido' },
      { word: 'conferring', definition: 'granting or giving (formal)', translation: 'conferir, otorgar' },
      { word: 'withheld', definition: 'kept back and not given', translation: 'retenido, no revelado' },
      { word: 'habitual', definition: 'done as a habit; usual', translation: 'habitual, rutinario' },
      { word: 'threshold', definition: 'the point of beginning; a doorway', translation: 'umbral, punto de inicio' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How does the narrator characterise the freedom of urban anonymity?', questionEs: '¿Cómo caracteriza el narrador la libertad del anonimato urbano?', options: ['As something entirely positive', 'As something that can feel cold and lonely', 'As something the protagonist rejects', 'As something only experienced by the man on the corner'], correct: 1, explanationEs: '"there was a freedom in this, she supposed, though it sometimes arrived dressed as something colder."' },
      { id: 'q2', type: 'multiple-choice', question: 'What does the protagonist share with the newspaper seller?', questionEs: '¿Qué comparte la protagonista con el vendedor de periódicos?', options: ['They are friends', 'They take part in a daily, anonymous ritual at the same corner', 'They work in the same place', 'They walk the same route every day'], correct: 1, explanationEs: '"They were participants in the same small ceremony, enacted each evening."' },
      { id: 'q3', type: 'short-answer', question: 'The text describes "the threshold of...which belonged to neither day nor night." What moment is this describing?', questionEs: 'El texto describe "el umbral de...que no pertenecía ni al día ni a la noche." ¿Qué momento describe esto?', correct: 'The transitional period of dusk / early evening (six o\'clock)', explanationEs: 'Six o\'clock — the liminal threshold between day and night, between the working day and personal time.' },
    ],
    readingStrategy: 'Reading between the lines — inferring character emotions from physical detail and metaphor',
    readingStrategyEs: 'Leer entre líneas — inferir las emociones del personaje a partir de detalles físicos y metáforas. La prosa literaria raramente "dice" directamente lo que el personaje siente.',
    grammarFocus: 'Complex noun phrases and embedded clauses: "the people who walked fast and looked ahead, who made the pavements feel like corridors".',
    grammarFocusEs: 'Oraciones de relativo encadenadas: "the people who walked fast and looked ahead, who made the pavements feel like corridors" — característico de la prosa literaria sofisticada.',
    grammarTheoryIds: ['c1-cleft-sentences'],
  },

  {
    id: 'c1-interview-translator',
    title: 'In Conversation: The Art of Literary Translation',
    titleEs: 'En Conversación: El Arte de la Traducción Literaria',
    level: 'C1',
    cefrLevel: 5,
    genre: 'article',
    topic: 'Language, translation and culture',
    topicEs: 'Lengua, traducción y cultura',
    wordCount: 290,
    text: `Interviewer: You've spent thirty years working as a literary translator, primarily from Spanish and Portuguese into English. Many people think translation is essentially a mechanical process — find the equivalent word, put it in the right order. What's the reality?

Translator: [laughs] If only. That misconception is something I've heard throughout my career, and honestly, it makes the work both harder and more interesting. Translation is always, at some level, an interpretation. You are not transcribing; you are making thousands of invisible decisions. A single word can carry cultural resonance that simply does not exist in the target language. Do you translate it literally and add a footnote? Do you find a functional equivalent that loses the foreignness but preserves the tone? Or do you leave a trace of the original — let the reader feel, briefly, that they are in contact with something that resists easy transfer?

Interviewer: Is there a guiding principle you return to?

Translator: Fidelity — but not to the word. Fidelity to the effect. If the original text is funny, the translation must be funny, even if that requires entirely different cultural references. If the original is ambiguous — deliberately ambiguous — the translator has no right to resolve that ambiguity for the reader. Some of my most difficult moments have been with texts where the author has been brilliantly, consciously unclear, and editors, understandably, want clarity that was never there.

Interviewer: What do you say to people who claim that translation is a second-order art — somehow less creative or original than writing itself?

Translator: I say: translate a poem and tell me that again. The constraints are harder. You must be simultaneously faithful to meaning, sound, rhythm, cultural register and the particular mind of the author. A novelist has only their own voice to worry about. We carry two.`,
    vocabulary: [
      { word: 'transcribing', definition: 'copying something exactly in written form', translation: 'transcribir' },
      { word: 'resonance', definition: 'the quality of evoking lasting associations', translation: 'resonancia, eco' },
      { word: 'fidelity', definition: 'faithfulness; accuracy', translation: 'fidelidad' },
      { word: 'constraints', definition: 'limitations and restrictions', translation: 'restricciones, limitaciones' },
      { word: 'simultaneously', definition: 'at the same time', translation: 'simultáneamente' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What does the translator say fidelity in translation actually means?', questionEs: '¿Qué dice el traductor que significa en realidad la fidelidad en la traducción?', options: ['Translating every word exactly', 'Being faithful to the effect of the text, not the individual words', 'Using a footnote for every cultural reference', 'Preserving only the grammar structure'], correct: 1, explanationEs: '"Fidelity — but not to the word. Fidelity to the effect."' },
      { id: 'q2', type: 'true-false', question: 'The translator believes they should always clarify any ambiguity in the original text.', questionEs: 'El traductor cree que siempre debe clarificar cualquier ambigüedad del texto original.', correct: 'false', explanationEs: '"If the original is ambiguous — deliberately ambiguous — the translator has no right to resolve that ambiguity for the reader."' },
      { id: 'q3', type: 'short-answer', question: 'What are the five things the translator must be faithful to simultaneously when translating poetry?', questionEs: '¿Cuáles son las cinco cosas a las que el traductor debe ser fiel simultáneamente al traducir poesía?', correct: 'Meaning, sound, rhythm, cultural register and the particular mind of the author', explanationEs: '"simultaneously faithful to meaning, sound, rhythm, cultural register and the particular mind of the author."' },
    ],
    readingStrategy: 'Reading an interview — identify the interviewee\'s key positions and the evidence/examples they use to support them',
    readingStrategyEs: 'Leer una entrevista — identifica las posiciones clave del entrevistado y los argumentos o ejemplos que usa para apoyarlas.',
    grammarFocus: 'Embedded conditionals in argument: "If the original is funny... If the original is ambiguous..." Present simple used for general truths.',
    grammarFocusEs: 'Condicionales dentro de argumentos: "If the original is funny..." Presente simple para expresar verdades generales y principios del traductor.',
    grammarTheoryIds: ['b2-conditionals-all'],
  },

  // ─────────────────────────────────────────
  // A1 TEXTS (additional)
  // ─────────────────────────────────────────

  {
    id: 'a1-whatsapp-weekend',
    title: 'Weekend Plans Chat',
    titleEs: 'Chat sobre Planes del Fin de Semana',
    level: 'A1',
    cefrLevel: 1,
    genre: 'message',
    topic: 'Free time / Weekend plans',
    topicEs: 'Tiempo libre / Planes del fin de semana',
    wordCount: 68,
    text: `Emma: Hi Jake! What do you do on Saturdays? 😊
Jake: Hi! I usually go to the park. I like running. What about you?
Emma: I don't like running 😅 I prefer watching films at home.
Jake: Do you want to go to the cinema on Saturday?
Emma: Great idea! I love comedies. What time?
Jake: At 5 pm?
Emma: Perfect! See you there! 🎬`,
    vocabulary: [
      { word: 'usually', definition: 'most of the time', translation: 'normalmente' },
      { word: 'prefer', definition: 'to like one thing more than another', translation: 'preferir' },
      { word: 'cinema', definition: 'a place where you watch films (British English)', translation: 'cine' },
      { word: 'comedy', definition: 'a funny film or show', translation: 'comedia' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What does Jake usually do on Saturdays?', questionEs: '¿Qué hace Jake normalmente los sábados?', options: ['He watches films', 'He goes to the park', 'He goes to the cinema', 'He stays at home'], correct: 1, explanationEs: '"I usually go to the park."' },
      { id: 'q2', type: 'true-false', question: 'Emma likes running.', questionEs: 'A Emma le gusta correr.', correct: 'false', explanationEs: '"I don\'t like running" → a Emma no le gusta correr.' },
      { id: 'q3', type: 'multiple-choice', question: 'What kind of films does Emma love?', questionEs: '¿Qué tipo de películas le encantan a Emma?', options: ['Horror films', 'Action films', 'Comedies', 'Documentaries'], correct: 2, explanationEs: '"I love comedies."' },
      { id: 'q4', type: 'short-answer', question: 'What time do they plan to meet?', questionEs: '¿A qué hora quedan?', correct: '5 pm', explanationEs: '"At 5 pm?"' },
    ],
    readingStrategy: 'Reading a conversation — identify who says what and follow the turn-taking',
    readingStrategyEs: 'Leer una conversación — identifica quién dice qué y sigue los turnos de palabra.',
    grammarFocus: 'Present Simple for habits and likes/dislikes: "I usually go", "I don\'t like", "I love".',
    grammarFocusEs: 'Presente Simple para hábitos y gustos: "I usually go", "I don\'t like", "I love".',
    grammarTheoryIds: ['a1-present-simple'],
  },

  {
    id: 'a1-profile-social',
    title: 'Social Media Profile',
    titleEs: 'Perfil de Red Social',
    level: 'A1',
    cefrLevel: 1,
    genre: 'description',
    topic: 'Personal information / Countries and nationalities',
    topicEs: 'Información personal / Países y nacionalidades',
    wordCount: 72,
    text: `👤 Marta López

📍 Madrid, Spain
🎂 Age: 25

Hi! I'm Marta. I'm Spanish. I'm from Madrid but I live in London now. I'm a graphic designer.

I speak Spanish and English. I'm also learning French.

I love travelling and photography. My favourite city is Tokyo — it's amazing! I'm very interested in Japanese culture.

🐱 Cat mum: my cat is called Luna.`,
    vocabulary: [
      { word: 'graphic designer', definition: 'a person who creates visual content', translation: 'diseñadora gráfica' },
      { word: 'travelling', definition: 'going to different places (British spelling)', translation: 'viajar' },
      { word: 'photography', definition: 'the art of taking photos', translation: 'fotografía' },
      { word: 'culture', definition: 'the traditions and customs of a group of people', translation: 'cultura' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'Where does Marta live now?', questionEs: '¿Dónde vive Marta ahora?', options: ['Madrid', 'Tokyo', 'London', 'Paris'], correct: 2, explanationEs: '"I live in London now."' },
      { id: 'q2', type: 'true-false', question: 'Marta speaks three languages.', questionEs: 'Marta habla tres idiomas.', correct: 'false', explanationEs: 'She speaks Spanish and English and is learning French — so she speaks two fluently and is learning a third.' },
      { id: 'q3', type: 'short-answer', question: 'What is Marta\'s favourite city?', questionEs: '¿Cuál es la ciudad favorita de Marta?', correct: 'Tokyo', explanationEs: '"My favourite city is Tokyo."' },
      { id: 'q4', type: 'find-word', question: 'Find the word that means "the traditions and customs of a group of people".', questionEs: 'Encuentra la palabra que significa "las tradiciones y costumbres de un grupo de personas".', correct: 'culture', explanationEs: '"Japanese culture" — culture = cultura.' },
    ],
    readingStrategy: 'Reading a profile — quickly identify key personal facts',
    readingStrategyEs: 'Leer un perfil — identifica rápidamente los datos personales clave.',
    grammarFocus: 'TO BE for identity and description: "I\'m Marta", "I\'m Spanish", "I\'m a graphic designer", "it\'s amazing".',
    grammarFocusEs: 'TO BE para identidad y descripción: "I\'m Marta", "I\'m Spanish", "I\'m a graphic designer", "it\'s amazing".',
    grammarTheoryIds: ['a1-verb-to-be', 'a1-present-simple'],
  },

  {
    id: 'a1-notice-library',
    title: 'Library Rules',
    titleEs: 'Normas de la Biblioteca',
    level: 'A1',
    cefrLevel: 1,
    genre: 'notice',
    topic: 'Public places / Rules',
    topicEs: 'Lugares públicos / Normas',
    wordCount: 65,
    text: `📚 GREENFIELD PUBLIC LIBRARY — RULES

Opening hours: Mon–Sat 9:00 am – 7:00 pm

✅ You CAN:
• Borrow up to 5 books for 3 weeks
• Use the computers (max. 1 hour)
• Study in the quiet room

❌ Please DON'T:
• Eat or drink in the library
• Talk loudly
• Use your mobile phone

Return your books on time. Late fee: £0.50 per day.

Thank you! 📖`,
    vocabulary: [
      { word: 'borrow', definition: 'to take something and return it later', translation: 'tomar prestado' },
      { word: 'quiet', definition: 'with little or no noise', translation: 'tranquilo, silencioso' },
      { word: 'return', definition: 'to give something back', translation: 'devolver' },
      { word: 'late fee', definition: 'money you pay when you return something after the deadline', translation: 'recargo por retraso' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How many books can you borrow?', questionEs: '¿Cuántos libros puedes tomar prestados?', options: ['3', '5', '7', '10'], correct: 1, explanationEs: '"Borrow up to 5 books."' },
      { id: 'q2', type: 'true-false', question: 'You can eat in the library.', questionEs: 'Puedes comer en la biblioteca.', correct: 'false', explanationEs: '"Don\'t eat or drink in the library" → no puedes comer.' },
      { id: 'q3', type: 'multiple-choice', question: 'How much is the late fee per day?', questionEs: '¿Cuánto es el recargo por día de retraso?', options: ['£0.25', '£0.50', '£1.00', '£1.50'], correct: 1, explanationEs: '"Late fee: £0.50 per day."' },
      { id: 'q4', type: 'true-false', question: 'The library is open on Sundays.', questionEs: 'La biblioteca abre los domingos.', correct: 'false', explanationEs: '"Mon–Sat 9:00 am – 7:00 pm" → solo de lunes a sábado.' },
    ],
    readingStrategy: 'Scanning a rules notice — quickly identify what is allowed and what is not',
    readingStrategyEs: 'Leer un aviso de normas — identifica rápidamente lo que está permitido y lo que no.',
    grammarFocus: 'Imperatives and can/can\'t for rules: "Don\'t eat", "You CAN borrow", "Return your books".',
    grammarFocusEs: 'Imperativos y can/can\'t para normas: "Don\'t eat", "You CAN borrow", "Return your books".',
    grammarTheoryIds: ['a2-imperatives', 'a2-can-could-modals'],
  },

  {
    id: 'a1-email-booking',
    title: 'Hotel Booking Confirmation',
    titleEs: 'Confirmación de Reserva de Hotel',
    level: 'A1',
    cefrLevel: 1,
    genre: 'email',
    topic: 'Travel / Accommodation',
    topicEs: 'Viajes / Alojamiento',
    wordCount: 78,
    text: `Subject: Booking Confirmation — The Grand Hotel

Dear Mr Williams,

Thank you for your booking.

Room: Double room (Room 214)
Check-in: Friday 15th March
Check-out: Sunday 17th March (2 nights)
Price: £85 per night (total: £170)

There is a free car park behind the hotel. There are two restaurants in the hotel — an Italian restaurant and a café.

Breakfast is from 7:00 am to 10:00 am.

If you have any questions, please call us at 020 7946 0123.

Kind regards,
The Grand Hotel Team`,
    vocabulary: [
      { word: 'booking', definition: 'a reservation', translation: 'reserva' },
      { word: 'check-in', definition: 'the time you arrive and register at a hotel', translation: 'registro de entrada' },
      { word: 'check-out', definition: 'the time you leave a hotel', translation: 'registro de salida' },
      { word: 'car park', definition: 'a place to leave your car (British English = parking lot)', translation: 'aparcamiento' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How many nights is the booking for?', questionEs: '¿Para cuántas noches es la reserva?', options: ['1', '2', '3', '4'], correct: 1, explanationEs: '"2 nights" — del viernes 15 al domingo 17.' },
      { id: 'q2', type: 'true-false', question: 'The car park costs extra money.', questionEs: 'El aparcamiento cuesta dinero extra.', correct: 'false', explanationEs: '"There is a free car park" → es gratuito.' },
      { id: 'q3', type: 'short-answer', question: 'What is the total price?', questionEs: '¿Cuál es el precio total?', correct: '£170', explanationEs: '"total: £170"' },
    ],
    readingStrategy: 'Reading a formal email — locate key facts: dates, prices, important details',
    readingStrategyEs: 'Leer un email formal — localiza datos clave: fechas, precios, detalles importantes.',
    grammarFocus: 'There is/There are for describing what exists: "There is a free car park", "There are two restaurants".',
    grammarFocusEs: 'There is/There are para describir lo que hay: "There is a free car park", "There are two restaurants".',
    grammarTheoryIds: ['a1-there-is-are'],
  },

  {
    id: 'a1-description-flat',
    title: 'Flat for Rent',
    titleEs: 'Piso en Alquiler',
    level: 'A1',
    cefrLevel: 1,
    genre: 'description',
    topic: 'Home and rooms',
    topicEs: 'Hogar y habitaciones',
    wordCount: 74,
    text: `🏠 FLAT FOR RENT — Brighton, UK

Lovely 2-bedroom flat near the city centre.

There is a large living room with a comfortable sofa and a big TV. There are two bedrooms — one double and one single. The kitchen is small but modern. There is a new fridge and cooker.

The bathroom is clean and bright. There is a nice balcony with views of the sea.

Rent: £900 per month (bills not included).

Available from 1st April. No pets.`,
    vocabulary: [
      { word: 'flat', definition: 'an apartment (British English)', translation: 'piso, apartamento' },
      { word: 'rent', definition: 'money you pay to live in a place (or to let it)', translation: 'alquiler / alquilar' },
      { word: 'comfortable', definition: 'giving a feeling of ease and relaxation', translation: 'cómodo' },
      { word: 'available', definition: 'ready to use or occupy', translation: 'disponible' },
      { word: 'bills', definition: 'regular payments for services (electricity, water, etc.)', translation: 'facturas' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How many bedrooms does the flat have?', questionEs: '¿Cuántos dormitorios tiene el piso?', options: ['1', '2', '3', '4'], correct: 1, explanationEs: '"2-bedroom flat" / "There are two bedrooms."' },
      { id: 'q2', type: 'true-false', question: 'The kitchen is big.', questionEs: 'La cocina es grande.', correct: 'false', explanationEs: '"The kitchen is small but modern."' },
      { id: 'q3', type: 'short-answer', question: 'What can you see from the balcony?', questionEs: '¿Qué puedes ver desde el balcón?', correct: 'The sea', explanationEs: '"views of the sea"' },
      { id: 'q4', type: 'true-false', question: 'You can have a dog in this flat.', questionEs: 'Puedes tener un perro en este piso.', correct: 'false', explanationEs: '"No pets."' },
    ],
    readingStrategy: 'Reading a listing — scan for key information: size, features, price, conditions',
    readingStrategyEs: 'Leer un anuncio — busca información clave: tamaño, características, precio, condiciones.',
    grammarFocus: 'There is/There are with adjectives to describe rooms: "There is a large living room", "There are two bedrooms".',
    grammarFocusEs: 'There is/There are con adjetivos para describir habitaciones: "There is a large living room", "There are two bedrooms".',
    grammarTheoryIds: ['a1-there-is-are', 'a1-articles'],
  },

  // ─────────────────────────────────────────
  // A2 TEXTS (additional)
  // ─────────────────────────────────────────

  {
    id: 'a2-review-restaurant',
    title: 'Restaurant Review',
    titleEs: 'Reseña de Restaurante',
    level: 'A2',
    cefrLevel: 2,
    genre: 'review',
    topic: 'Food and eating out',
    topicEs: 'Comida y comer fuera',
    wordCount: 118,
    text: `⭐⭐⭐⭐ The Italian Corner — reviewed by Sarah M.

My husband and I visited The Italian Corner last Saturday for our anniversary. The restaurant was very busy, but the waiter found a table for us quickly.

I ordered the mushroom risotto and my husband had the grilled salmon. Both dishes were absolutely delicious! The risotto was creamy and the salmon was perfectly cooked.

For dessert, we shared a tiramisu. It was the best tiramisu I ever tasted!

The service was friendly and fast. The only problem was the music — it was a bit too loud.

The bill was £52 for two people, which I think is very reasonable.

I definitely recommend this restaurant!`,
    vocabulary: [
      { word: 'anniversary', definition: 'the date when an important event happened in a previous year', translation: 'aniversario' },
      { word: 'delicious', definition: 'very tasty; very good to eat', translation: 'delicioso' },
      { word: 'reasonable', definition: 'fair; not too expensive', translation: 'razonable, asequible' },
      { word: 'recommend', definition: 'to say that something is good and others should try it', translation: 'recomendar' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'When did Sarah visit the restaurant?', questionEs: '¿Cuándo visitó Sarah el restaurante?', options: ['Last Friday', 'Last Saturday', 'Last Sunday', 'Yesterday'], correct: 1, explanationEs: '"visited The Italian Corner last Saturday"' },
      { id: 'q2', type: 'true-false', question: 'Sarah ordered the grilled salmon.', questionEs: 'Sarah pidió el salmón a la parrilla.', correct: 'false', explanationEs: '"I ordered the mushroom risotto and my husband had the grilled salmon." → Sarah pidió el risotto.' },
      { id: 'q3', type: 'multiple-choice', question: 'What was the only negative thing about the restaurant?', questionEs: '¿Cuál fue la única cosa negativa del restaurante?', options: ['The food was cold', 'The waiter was slow', 'The music was too loud', 'The bill was expensive'], correct: 2, explanationEs: '"The only problem was the music — it was a bit too loud."' },
      { id: 'q4', type: 'short-answer', question: 'How much was the bill for two people?', questionEs: '¿Cuánto costó la cuenta para dos personas?', correct: '£52', explanationEs: '"The bill was £52 for two people."' },
    ],
    readingStrategy: 'Reading a review — distinguish positive and negative opinions and identify supporting details',
    readingStrategyEs: 'Leer una reseña — distingue opiniones positivas y negativas e identifica los detalles que las apoyan.',
    grammarFocus: 'Past Simple for narrating a past experience: "visited", "ordered", "was", "shared".',
    grammarFocusEs: 'Pasado Simple para narrar una experiencia pasada: "visited", "ordered", "was", "shared".',
    grammarTheoryIds: ['a2-past-simple'],
  },

  {
    id: 'a2-narrative-trip',
    title: 'A Weekend in the Countryside',
    titleEs: 'Un Fin de Semana en el Campo',
    level: 'A2',
    cefrLevel: 2,
    genre: 'narrative',
    topic: 'Travel / Weekends',
    topicEs: 'Viajes / Fines de semana',
    wordCount: 132,
    text: `Last weekend, my friends and I went to the Lake District for two days. It was amazing!

On Saturday morning, we drove from Manchester. First, we stopped at a small village for coffee. Then, we arrived at our cottage near the lake. It was very pretty — surrounded by green hills.

After that, we went for a long walk around the lake. The views were beautiful! We saw some sheep and even a wild rabbit.

In the evening, we cooked dinner together — pasta with vegetables. After dinner, we played cards and told funny stories.

On Sunday, we woke up early and went kayaking on the lake. It was so exciting! Then we had lunch at a local pub before driving home.

I want to go back next month!`,
    vocabulary: [
      { word: 'cottage', definition: 'a small house, usually in the countryside', translation: 'cabaña, casa de campo' },
      { word: 'surrounded', definition: 'with something all around it', translation: 'rodeado' },
      { word: 'views', definition: 'what you can see from a place (scenery)', translation: 'vistas' },
      { word: 'kayaking', definition: 'paddling a small boat on water', translation: 'hacer kayak' },
      { word: 'local', definition: 'from the area nearby', translation: 'local, de la zona' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'Where did they go last weekend?', questionEs: '¿Adónde fueron el fin de semana pasado?', options: ['London', 'The Lake District', 'Scotland', 'The coast'], correct: 1, explanationEs: '"went to the Lake District"' },
      { id: 'q2', type: 'multiple-choice', question: 'What did they do first when they arrived?', questionEs: '¿Qué hicieron primero al llegar?', options: ['They cooked dinner', 'They played cards', 'They went for a walk around the lake', 'They went kayaking'], correct: 2, explanationEs: '"After that, we went for a long walk around the lake." — after arriving at the cottage.' },
      { id: 'q3', type: 'true-false', question: 'They stayed in a hotel.', questionEs: 'Se alojaron en un hotel.', correct: 'false', explanationEs: '"we arrived at our cottage near the lake" → se alojaron en una cabaña.' },
      { id: 'q4', type: 'short-answer', question: 'What did they do on Sunday morning?', questionEs: '¿Qué hicieron el domingo por la mañana?', correct: 'They went kayaking on the lake', explanationEs: '"On Sunday, we woke up early and went kayaking on the lake."' },
    ],
    readingStrategy: 'Following a narrative sequence — use time markers (first, then, after that, on Sunday) to follow the order of events',
    readingStrategyEs: 'Seguir una secuencia narrativa — usa marcadores temporales (first, then, after that, on Sunday) para seguir el orden de los acontecimientos.',
    grammarFocus: 'Past Simple with irregular verbs and sequence connectors: "went", "drove", "stopped", "first… then… after that…".',
    grammarFocusEs: 'Pasado Simple con verbos irregulares y conectores de secuencia: "went", "drove", "stopped", "first… then… after that…".',
    grammarTheoryIds: ['a2-past-simple'],
  },

  {
    id: 'a2-news-local',
    title: 'New Park for Riverside Town',
    titleEs: 'Nuevo Parque para Riverside Town',
    level: 'A2',
    cefrLevel: 2,
    genre: 'news',
    topic: 'Local news / Community',
    topicEs: 'Noticias locales / Comunidad',
    wordCount: 128,
    text: `RIVERSIDE DAILY NEWS — 12 March

NEW PARK OPENS IN RIVERSIDE TOWN

A new park was opened yesterday in the centre of Riverside Town. The park was designed by local architects and it was built in just eight months.

The park has a large playground for children, a football pitch and a beautiful garden with more than 200 trees. A new café was also built next to the main entrance.

More than 500 people came to the opening ceremony. The mayor, Mrs Helen Clarke, said: "This park is going to be a wonderful place for families. We are going to organise free events every weekend this summer."

The park is going to be open every day from 7:00 am to 9:00 pm. Entrance is free.`,
    vocabulary: [
      { word: 'designed', definition: 'planned and drawn (how something will look)', translation: 'diseñado' },
      { word: 'playground', definition: 'an area for children to play in', translation: 'zona de juegos' },
      { word: 'entrance', definition: 'the way in; the door or gate to enter', translation: 'entrada' },
      { word: 'ceremony', definition: 'a formal public event', translation: 'ceremonia' },
      { word: 'mayor', definition: 'the leader of a town or city government', translation: 'alcaldesa / alcalde' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How long did it take to build the park?', questionEs: '¿Cuánto tardaron en construir el parque?', options: ['4 months', '6 months', '8 months', '12 months'], correct: 2, explanationEs: '"it was built in just eight months"' },
      { id: 'q2', type: 'true-false', question: 'You have to pay to enter the park.', questionEs: 'Hay que pagar para entrar al parque.', correct: 'false', explanationEs: '"Entrance is free."' },
      { id: 'q3', type: 'multiple-choice', question: 'What is going to happen every weekend in summer?', questionEs: '¿Qué va a pasar cada fin de semana en verano?', options: ['The park will close early', 'There will be free events', 'The café will offer free food', 'There will be football matches'], correct: 1, explanationEs: '"We are going to organise free events every weekend this summer."' },
      { id: 'q4', type: 'short-answer', question: 'How many people came to the opening ceremony?', questionEs: '¿Cuántas personas asistieron a la ceremonia de inauguración?', correct: 'More than 500', explanationEs: '"More than 500 people came to the opening ceremony."' },
    ],
    readingStrategy: 'Reading a news article — identify the main event (what happened), who was involved, when and where',
    readingStrategyEs: 'Leer un artículo de noticias — identifica el evento principal (qué pasó), quién, cuándo y dónde.',
    grammarFocus: 'Past Simple passive ("was opened", "was built") and going to for future plans ("is going to be", "are going to organise").',
    grammarFocusEs: 'Pasado Simple pasivo ("was opened", "was built") y going to para planes futuros ("is going to be", "are going to organise").',
    grammarTheoryIds: ['a2-past-simple', 'a2-going-to-vs-will'],
  },

  {
    id: 'a2-message-complaint',
    title: 'Complaint to an Online Shop',
    titleEs: 'Queja a una Tienda Online',
    level: 'A2',
    cefrLevel: 2,
    genre: 'email',
    topic: 'Shopping / Complaints',
    topicEs: 'Compras / Quejas',
    wordCount: 115,
    text: `Subject: Problem with my order — Order #4821

Dear Customer Service,

I am writing to complain about a product I bought from your website last week.

I ordered a blue jacket (size M) on Monday 3rd March. The jacket arrived on Thursday, but there were two problems. First, the colour was wrong — I received a black jacket, not a blue one. Second, the zipper was broken.

I paid £45.99 for this jacket and I am not happy with the quality.

I would like a full refund or a replacement, please. I would also like a prepaid label to return the item.

Could you please reply as soon as possible?

Thank you for your help.
Best regards,
Daniel Cooper`,
    vocabulary: [
      { word: 'complain', definition: 'to say that something is wrong or not satisfactory', translation: 'quejarse' },
      { word: 'refund', definition: 'money returned to you after you return a product', translation: 'reembolso' },
      { word: 'replacement', definition: 'a new product given in place of the faulty one', translation: 'sustitución, reemplazo' },
      { word: 'prepaid', definition: 'already paid for in advance', translation: 'prepagado, con franqueo pagado' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What colour jacket did Daniel order?', questionEs: '¿De qué color pidió Daniel la chaqueta?', options: ['Black', 'Blue', 'Green', 'Red'], correct: 1, explanationEs: '"I ordered a blue jacket."' },
      { id: 'q2', type: 'true-false', question: 'The only problem was the wrong colour.', questionEs: 'El único problema fue el color equivocado.', correct: 'false', explanationEs: '"there were two problems" — color equivocado y cremallera rota.' },
      { id: 'q3', type: 'multiple-choice', question: 'What does Daniel want?', questionEs: '¿Qué quiere Daniel?', options: ['A discount on his next order', 'A refund or a replacement', 'A different size', 'Free delivery'], correct: 1, explanationEs: '"I would like a full refund or a replacement."' },
      { id: 'q4', type: 'short-answer', question: 'How much did the jacket cost?', questionEs: '¿Cuánto costó la chaqueta?', correct: '£45.99', explanationEs: '"I paid £45.99 for this jacket."' },
    ],
    readingStrategy: 'Reading a complaint email — identify the problem, the facts and what the writer wants',
    readingStrategyEs: 'Leer un email de queja — identifica el problema, los hechos y lo que el escritor quiere.',
    grammarFocus: 'Past Simple for narrating events ("ordered", "arrived", "paid") and polite requests with "would like" ("I would like a refund").',
    grammarFocusEs: 'Pasado Simple para narrar hechos ("ordered", "arrived", "paid") y peticiones educadas con "would like" ("I would like a refund").',
    grammarTheoryIds: ['a2-past-simple'],
  },

  {
    id: 'a2-article-comparison',
    title: 'London vs Edinburgh: Which City Is Better?',
    titleEs: 'Londres vs Edimburgo: ¿Qué Ciudad Es Mejor?',
    level: 'A2',
    cefrLevel: 2,
    genre: 'article',
    topic: 'Cities / Travel',
    topicEs: 'Ciudades / Viajes',
    wordCount: 140,
    text: `London and Edinburgh are two of the most popular cities in the UK, but they are very different. Which one is better for a short holiday?

London is bigger and busier than Edinburgh. It has more museums, shops and restaurants. The public transport is excellent — the Underground is the fastest way to travel around the city. However, London is more expensive than Edinburgh, especially for hotels and food.

Edinburgh is smaller and quieter, but it is also very beautiful. The Old Town is older and more historic than most areas of London. Edinburgh Castle is one of the most impressive buildings in the UK.

The weather in Edinburgh is colder and rainier than in London, but many visitors say the city is friendlier and more relaxed.

In conclusion, London is better for shopping and nightlife, but Edinburgh is the best choice for history and nature lovers.`,
    vocabulary: [
      { word: 'popular', definition: 'liked by many people', translation: 'popular' },
      { word: 'especially', definition: 'more than usual; particularly', translation: 'especialmente' },
      { word: 'impressive', definition: 'making you feel admiration because it is very good or large', translation: 'impresionante' },
      { word: 'in conclusion', definition: 'finally; to summarise the main point', translation: 'en conclusión' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'Which city is more expensive?', questionEs: '¿Qué ciudad es más cara?', options: ['Edinburgh', 'London', 'They cost the same', 'The article doesn\'t say'], correct: 1, explanationEs: '"London is more expensive than Edinburgh."' },
      { id: 'q2', type: 'true-false', question: 'Edinburgh has better weather than London.', questionEs: 'Edimburgo tiene mejor clima que Londres.', correct: 'false', explanationEs: '"The weather in Edinburgh is colder and rainier than in London."' },
      { id: 'q3', type: 'multiple-choice', question: 'According to the article, what is Edinburgh best for?', questionEs: 'Según el artículo, ¿para qué es mejor Edimburgo?', options: ['Shopping and nightlife', 'Museums and restaurants', 'History and nature', 'Public transport'], correct: 2, explanationEs: '"Edinburgh is the best choice for history and nature lovers."' },
      { id: 'q4', type: 'find-word', question: 'Find the comparative form meaning "less noisy".', questionEs: 'Encuentra la forma comparativa que significa "menos ruidoso".', correct: 'quieter', explanationEs: '"Edinburgh is smaller and quieter" — quieter = más tranquilo.' },
    ],
    readingStrategy: 'Reading a comparison article — identify the criteria used and the conclusion reached',
    readingStrategyEs: 'Leer un artículo comparativo — identifica los criterios utilizados y la conclusión alcanzada.',
    grammarFocus: 'Comparatives and superlatives: "bigger", "more expensive", "the fastest", "the most impressive", "the best".',
    grammarFocusEs: 'Comparativos y superlativos: "bigger", "more expensive", "the fastest", "the most impressive", "the best".',
    grammarTheoryIds: ['a2-comparatives-superlatives'],
  },

  // ─────────────────────────────────────────
  // B1 TEXTS (additional)
  // ─────────────────────────────────────────

  {
    id: 'b1-article-travel-blog',
    title: 'Living Abroad: My First Year in Berlin',
    titleEs: 'Vivir en el Extranjero: Mi Primer Año en Berlín',
    level: 'B1',
    cefrLevel: 3,
    genre: 'article',
    topic: 'Travel and living abroad',
    topicEs: 'Viajes y vivir en el extranjero',
    wordCount: 210,
    text: `I have been living in Berlin for almost a year now, and it has been the most incredible experience of my life. Before I moved here, I had never lived away from my hometown in Spain, so everything was new and exciting.

Berlin is one of the most multicultural cities I have ever visited. I have met people from all over the world — from Brazil, Korea, Egypt, and many other countries. The food scene is amazing too. I have tried dishes I had never heard of before, like currywurst and döner kebab, which have become some of my favourite meals.

Of course, it has not all been easy. In my opinion, the hardest part has been learning German. I have been taking classes since September, but I still find it difficult to have long conversations. The grammar is much more complicated than I expected. However, most people in Berlin speak English, so I have managed to get by.

The best thing about living abroad is that it changes the way you see the world. I have become more independent, more open-minded, and more confident. I would strongly recommend the experience to anyone who is thinking about it. It is, without a doubt, the best decision I have ever made.`,
    vocabulary: [
      { word: 'multicultural', definition: 'including people from many different cultures', translation: 'multicultural' },
      { word: 'food scene', definition: 'the variety and culture of food in a place', translation: 'oferta gastronómica' },
      { word: 'get by', definition: 'manage to survive or live with difficulty', translation: 'arreglárselas, ir tirando' },
      { word: 'open-minded', definition: 'willing to consider new ideas', translation: 'de mente abierta' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How long has the writer been living in Berlin?', questionEs: '¿Cuánto tiempo lleva el autor viviendo en Berlín?', options: ['Six months', 'Almost a year', 'Two years', 'A few weeks'], correct: 1, explanationEs: '"I have been living in Berlin for almost a year now."' },
      { id: 'q2', type: 'true-false', question: 'The writer finds German easy to learn.', questionEs: 'El autor encuentra el alemán fácil de aprender.', correct: 'false', explanationEs: '"The grammar is much more complicated than I expected."' },
      { id: 'q3', type: 'multiple-choice', question: 'What does the writer say is the best thing about living abroad?', questionEs: '¿Qué dice el autor que es lo mejor de vivir en el extranjero?', options: ['The food', 'Meeting new people', 'It changes the way you see the world', 'Learning a new language'], correct: 2, explanationEs: '"The best thing about living abroad is that it changes the way you see the world."' },
      { id: 'q4', type: 'find-word', question: 'Find the superlative phrase used to describe the experience.', questionEs: 'Encuentra la frase superlativa usada para describir la experiencia.', correct: 'the most incredible experience', explanationEs: '"It has been the most incredible experience of my life" — superlativo: the most + adjetivo largo.' },
    ],
    readingStrategy: 'Identifying the writer\'s personal opinion — look for phrases like "In my opinion", "I would recommend", "the best"',
    readingStrategyEs: 'Identificar la opinión personal del autor — busca frases como "In my opinion", "I would recommend", "the best".',
    grammarFocus: 'Present Perfect for life experiences: "I have been living", "I have met", "I have ever visited", superlatives.',
    grammarFocusEs: 'Present Perfect para experiencias vitales: "I have been living", "I have met", "I have ever visited", superlativos.',
    grammarTheoryIds: ['b1-present-perfect-vs-past-simple'],
  },

  {
    id: 'b1-opinion-education',
    title: 'Should Schools Stop Giving Homework?',
    titleEs: '¿Deberían los Colegios Dejar de Poner Deberes?',
    level: 'B1',
    cefrLevel: 3,
    genre: 'opinion',
    topic: 'Education',
    topicEs: 'Educación',
    wordCount: 225,
    text: `Homework has been a part of school life for generations. However, a growing number of parents, teachers, and students are beginning to question whether it is truly beneficial. Should schools stop giving homework altogether?

On the one hand, supporters of homework argue that it helps students practise what they have learned in class. Without regular homework, students might forget important concepts and fall behind. Furthermore, homework teaches children valuable skills such as time management and self-discipline, which they will need later in life.

On the other hand, critics point out that many students already spend six or seven hours at school. They should have time to relax, play sports, or spend time with their families after school. Research has shown that too much homework can cause stress and anxiety, especially in younger children. In addition, homework can be unfair because not all families have the same resources. Some children have quiet rooms and helpful parents, while others do not.

In my view, a moderate amount of homework is acceptable, but teachers shouldn't give too much. Schools should focus on quality rather than quantity. Short, meaningful tasks are far more effective than hours of repetitive exercises. Moreover, teachers should consider alternative activities, such as reading for pleasure or working on creative projects, which can be equally educational.

Ultimately, the goal of education should be to inspire a love of learning — not to exhaust students with endless worksheets.`,
    vocabulary: [
      { word: 'beneficial', definition: 'having a good effect', translation: 'beneficioso/a' },
      { word: 'self-discipline', definition: 'the ability to make yourself do things you know you should do', translation: 'autodisciplina' },
      { word: 'anxiety', definition: 'a feeling of worry and nervousness', translation: 'ansiedad' },
      { word: 'moderate', definition: 'neither too much nor too little; reasonable', translation: 'moderado/a' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What skill do homework supporters say it develops?', questionEs: '¿Qué habilidad dicen los defensores de los deberes que estos desarrollan?', options: ['Creativity', 'Time management and self-discipline', 'Physical fitness', 'Social skills'], correct: 1, explanationEs: '"homework teaches children valuable skills such as time management and self-discipline"' },
      { id: 'q2', type: 'true-false', question: 'The writer thinks all homework should be banned.', questionEs: 'El autor piensa que todos los deberes deberían prohibirse.', correct: 'false', explanationEs: '"a moderate amount of homework is acceptable, but teachers shouldn\'t give too much."' },
      { id: 'q3', type: 'multiple-choice', question: 'Why can homework be unfair, according to the text?', questionEs: '¿Por qué pueden ser injustos los deberes, según el texto?', options: ['Some schools give more than others', 'Not all families have the same resources', 'Boys get more homework than girls', 'Teachers mark differently'], correct: 1, explanationEs: '"not all families have the same resources. Some children have quiet rooms and helpful parents, while others do not."' },
      { id: 'q4', type: 'short-answer', question: 'What alternatives to traditional homework does the writer suggest?', questionEs: '¿Qué alternativas a los deberes tradicionales sugiere el autor?', correct: 'Reading for pleasure or working on creative projects', explanationEs: '"reading for pleasure or working on creative projects, which can be equally educational."' },
    ],
    readingStrategy: 'Recognising connectors — track how "however", "on the one hand", "on the other hand", "furthermore", "in addition" organise the argument',
    readingStrategyEs: 'Reconocer conectores — observa cómo "however", "on the one hand", "on the other hand", "furthermore", "in addition" organizan el argumento.',
    grammarFocus: 'Modals for advice and opinion: should/shouldn\'t. Connectors: however, on the other hand, furthermore, in addition.',
    grammarFocusEs: 'Modales para consejo y opinión: should/shouldn\'t. Conectores: however, on the other hand, furthermore, in addition.',
    grammarTheoryIds: ['b1-modal-deduction'],
  },

  {
    id: 'b1-email-job-application',
    title: 'Cover Letter: Part-Time Shop Assistant',
    titleEs: 'Carta de Presentación: Dependiente a Tiempo Parcial',
    level: 'B1',
    cefrLevel: 3,
    genre: 'formal-letter',
    topic: 'Work and job applications',
    topicEs: 'Trabajo y solicitudes de empleo',
    wordCount: 195,
    text: `Dear Mr Thompson,

I am writing to apply for the position of part-time shop assistant at Green & Co. Bookshop, as advertised on your website on 10 February.

I am currently a second-year university student studying English Literature. I am available to work on Thursdays, Fridays, and weekends, which I believe fits the schedule you described in the advertisement.

I have previous experience in customer service, as I worked as a waiter at a busy café for six months last year. During that time, I developed strong communication skills and learned how to deal with customers in a professional and friendly manner. I am also an enthusiastic reader, which I believe makes me a particularly good fit for a bookshop environment.

I am a reliable, organised, and hard-working person. I am comfortable working both independently and as part of a team. I would be grateful if you could consider my application, and I am available for an interview at your earliest convenience.

I have attached my CV for your reference. Please do not hesitate to contact me if you require any further information.

I look forward to hearing from you.

Yours sincerely,
Laura Martínez`,
    vocabulary: [
      { word: 'apply for', definition: 'formally request something, especially a job', translation: 'solicitar' },
      { word: 'previous', definition: 'happening or existing before', translation: 'previo/a, anterior' },
      { word: 'reliable', definition: 'able to be trusted; dependable', translation: 'fiable, de confianza' },
      { word: 'at your earliest convenience', definition: 'as soon as possible (polite)', translation: 'en cuanto le sea posible' },
      { word: 'hesitate', definition: 'pause before doing something because of uncertainty', translation: 'dudar' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What job is Laura applying for?', questionEs: '¿Para qué puesto solicita Laura?', options: ['Waiter', 'University lecturer', 'Part-time shop assistant', 'Full-time manager'], correct: 2, explanationEs: '"I am writing to apply for the position of part-time shop assistant."' },
      { id: 'q2', type: 'true-false', question: 'Laura has never had a job before.', questionEs: 'Laura nunca ha tenido un trabajo antes.', correct: 'false', explanationEs: '"I worked as a waiter at a busy café for six months last year."' },
      { id: 'q3', type: 'find-word', question: 'Find the formal phrase meaning "I would appreciate it if you could...".', questionEs: 'Encuentra la frase formal que significa "Agradecería que usted pudiera...".', correct: 'I would be grateful if', explanationEs: '"I would be grateful if you could consider my application" — fórmula muy formal de petición cortés.' },
      { id: 'q4', type: 'multiple-choice', question: 'Why does Laura think she is a good fit for the bookshop?', questionEs: '¿Por qué cree Laura que encaja bien en la librería?', options: ['She has managed a bookshop before', 'She is an enthusiastic reader', 'She knows the owner', 'She has a literature degree'], correct: 1, explanationEs: '"I am also an enthusiastic reader, which I believe makes me a particularly good fit for a bookshop environment."' },
    ],
    readingStrategy: 'Analysing formal register — notice formulaic phrases like "I am writing to...", "I would be grateful if...", "Yours sincerely"',
    readingStrategyEs: 'Analizar el registro formal — observa fórmulas como "I am writing to...", "I would be grateful if...", "Yours sincerely".',
    grammarFocus: 'Formal register: "I am writing to...", "I would be grateful if...", "Please do not hesitate to...". Present Simple for facts, Past Simple for experience.',
    grammarFocusEs: 'Registro formal: "I am writing to...", "I would be grateful if...", "Please do not hesitate to...". Present Simple para hechos, Past Simple para experiencia.',
    grammarTheoryIds: ['b1-linking-words'],
  },

  {
    id: 'b1-news-environment',
    title: 'Plastic Pollution: A Growing Crisis',
    titleEs: 'Contaminación por Plástico: Una Crisis Creciente',
    level: 'B1',
    cefrLevel: 3,
    genre: 'news',
    topic: 'Environment',
    topicEs: 'Medio ambiente',
    wordCount: 220,
    text: `More than eight million tonnes of plastic are dumped into the world's oceans every year, according to a report published by the United Nations this week. The problem has been described as "one of the greatest environmental challenges of our time."

Plastic waste has been found in every ocean on the planet, from the Arctic to the Antarctic. It has been estimated that by 2050, there will be more plastic in the sea than fish. Sea turtles, dolphins, and seabirds are among the animals most affected, as they often mistake plastic bags and bottles for food.

Governments around the world have started to take action. Over sixty countries have introduced bans or taxes on single-use plastics, such as bags, straws, and cutlery. The European Union, for example, has banned the sale of plastic straws, plates, and cotton buds since 2021.

However, experts warn that government action alone will not be enough. Consumers will need to change their habits too. Simple actions, such as carrying a reusable water bottle, bringing your own shopping bags, and choosing products with less packaging, can make a significant difference.

Scientists are also developing new materials that will replace traditional plastics. These biodegradable alternatives are made from plants and will break down naturally, without harming the environment. If these innovations succeed, they will transform the packaging industry within the next decade.`,
    vocabulary: [
      { word: 'dump', definition: 'throw away carelessly, especially waste', translation: 'verter, tirar' },
      { word: 'single-use', definition: 'designed to be used only once', translation: 'de un solo uso' },
      { word: 'reusable', definition: 'able to be used again', translation: 'reutilizable' },
      { word: 'biodegradable', definition: 'able to decay naturally without harming the environment', translation: 'biodegradable' },
      { word: 'packaging', definition: 'materials used to wrap products', translation: 'embalaje, envases' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How much plastic enters the oceans each year?', questionEs: '¿Cuánto plástico llega a los océanos cada año?', options: ['Eight thousand tonnes', 'Eight million tonnes', 'Eighty million tonnes', 'The article doesn\'t say'], correct: 1, explanationEs: '"More than eight million tonnes of plastic are dumped into the world\'s oceans every year."' },
      { id: 'q2', type: 'true-false', question: 'By 2050, there will be less plastic than fish in the sea.', questionEs: 'Para 2050, habrá menos plástico que peces en el mar.', correct: 'false', explanationEs: '"It has been estimated that by 2050, there will be more plastic in the sea than fish."' },
      { id: 'q3', type: 'multiple-choice', question: 'What have over sixty countries done about plastic?', questionEs: '¿Qué han hecho más de sesenta países respecto al plástico?', options: ['Banned all plastic products', 'Introduced bans or taxes on single-use plastics', 'Stopped exporting plastic', 'Funded ocean clean-up projects'], correct: 1, explanationEs: '"Over sixty countries have introduced bans or taxes on single-use plastics."' },
      { id: 'q4', type: 'short-answer', question: 'What are biodegradable alternatives made from?', questionEs: '¿De qué están hechas las alternativas biodegradables?', correct: 'Plants', explanationEs: '"These biodegradable alternatives are made from plants and will break down naturally."' },
    ],
    readingStrategy: 'Scanning for numbers and data — practise finding specific figures, dates, and statistics quickly',
    readingStrategyEs: 'Escanear buscando números y datos — practica encontrar cifras, fechas y estadísticas rápidamente.',
    grammarFocus: 'Present Perfect Passive: "has been described", "has been found", "has been estimated". Will for predictions: "there will be", "they will transform".',
    grammarFocusEs: 'Present Perfect Pasivo: "has been described", "has been found", "has been estimated". Will para predicciones: "there will be", "they will transform".',
    grammarTheoryIds: ['b1-present-perfect-vs-past-simple', 'b1-passive-voice'],
  },

  {
    id: 'b1-narrative-unexpected',
    title: 'The Wrong Suitcase',
    titleEs: 'La Maleta Equivocada',
    level: 'B1',
    cefrLevel: 3,
    genre: 'narrative',
    topic: 'Travel / Unexpected events',
    topicEs: 'Viajes / Eventos inesperados',
    wordCount: 230,
    text: `It was a rainy Friday evening in November, and Tom was standing at the luggage carousel at Heathrow Airport. He was exhausted. He had been travelling for fourteen hours, and all he wanted was to collect his suitcase, take a taxi home, and go straight to bed.

The carousel started moving, and suitcases began to appear one by one. Tom was watching carefully when he spotted a large black suitcase that looked exactly like his. He grabbed it quickly and headed for the exit.

While he was waiting for a taxi outside the terminal, his phone rang. It was a woman who introduced herself as Sarah.

"Excuse me, I think you have taken my suitcase by mistake," she said. "I was standing near you at the carousel, and I noticed that you picked up a black bag which is identical to mine. I have yours — it has a small red ribbon on the handle."

Tom looked down and realised she was right. The suitcase that he was holding did not have his red ribbon. He felt embarrassed but also relieved that someone had noticed the mistake.

They agreed to meet at a café that was inside the terminal. When Tom walked in, he saw a woman who was sitting at a corner table with his suitcase next to her. They exchanged bags, laughed about the coincidence, and ended up chatting for over an hour.

That chance meeting was three years ago. Tom and Sarah, who discovered they had a lot in common, got married last summer.`,
    vocabulary: [
      { word: 'luggage carousel', definition: 'the rotating belt where passengers collect bags at an airport', translation: 'cinta de equipajes' },
      { word: 'exhausted', definition: 'extremely tired', translation: 'agotado/a' },
      { word: 'grab', definition: 'take something quickly with your hand', translation: 'agarrar, coger' },
      { word: 'embarrassed', definition: 'feeling ashamed or awkward', translation: 'avergonzado/a' },
      { word: 'coincidence', definition: 'a surprising situation where things happen at the same time by chance', translation: 'coincidencia' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'Why did Tom take the wrong suitcase?', questionEs: '¿Por qué cogió Tom la maleta equivocada?', options: ['He was in a hurry', 'It looked exactly like his', 'Sarah gave it to him', 'He couldn\'t read the label'], correct: 1, explanationEs: '"he spotted a large black suitcase that looked exactly like his."' },
      { id: 'q2', type: 'true-false', question: 'Sarah called Tom to tell him about the mistake.', questionEs: 'Sarah llamó a Tom para contarle el error.', correct: 'true', explanationEs: '"his phone rang. It was a woman who introduced herself as Sarah."' },
      { id: 'q3', type: 'find-word', question: 'Find the relative clause that describes where the café was.', questionEs: 'Encuentra la cláusula de relativo que describe dónde estaba la cafetería.', correct: 'that was inside the terminal', explanationEs: '"a café that was inside the terminal" — cláusula de relativo con "that".' },
      { id: 'q4', type: 'multiple-choice', question: 'What happened to Tom and Sarah in the end?', questionEs: '¿Qué les pasó a Tom y Sarah al final?', options: ['They never met again', 'They became business partners', 'They got married', 'They became neighbours'], correct: 2, explanationEs: '"Tom and Sarah, who discovered they had a lot in common, got married last summer."' },
    ],
    readingStrategy: 'Following a narrative — track the sequence of events using time markers (when, while, by the time, that...ago)',
    readingStrategyEs: 'Seguir una narrativa — sigue la secuencia de eventos usando marcadores temporales (when, while, by the time, that...ago).',
    grammarFocus: 'Past Simple + Past Continuous: "he was standing... when he spotted", "While he was waiting... his phone rang". Relative clauses: who, which, that.',
    grammarFocusEs: 'Past Simple + Past Continuous: "he was standing... when he spotted", "While he was waiting... his phone rang". Cláusulas de relativo: who, which, that.',
    grammarTheoryIds: ['a2-past-continuous', 'b1-relative-clauses'],
  },

  // ─────────────────────────────────────────
  // B2 TEXTS (additional)
  // ─────────────────────────────────────────

  {
    id: 'b2-essay-technology',
    title: 'Is Technology Making Us Lazier?',
    titleEs: '¿Nos Está Haciendo la Tecnología Más Perezosos?',
    level: 'B2',
    cefrLevel: 4,
    genre: 'essay',
    topic: 'Technology and society',
    topicEs: 'Tecnología y sociedad',
    wordCount: 320,
    text: `It is a common complaint that technology is making people lazier. From food delivery apps that mean we never have to cook, to voice assistants that switch off the lights so we do not have to get up from the sofa, modern inventions seem designed to minimise physical and mental effort. But is this criticism fair, or is it an oversimplification of a more nuanced reality?

Although it is true that certain technologies reduce the need for physical activity, it could be argued that they free people to spend their time on more meaningful pursuits. A century ago, washing clothes by hand took an entire morning. Today, a machine does it in an hour. If we did not have washing machines, we would not have time for the hobbies, careers, and social connections that make modern life richer. The real question is not whether technology reduces effort, but what we do with the time and energy it saves.

Despite this, there is growing evidence that our relationship with technology is not entirely healthy. Studies have shown that adults in developed countries spend an average of seven hours per day looking at screens. Social media algorithms are designed to keep us scrolling, and streaming platforms auto-play the next episode to discourage us from getting up. It could be argued that these technologies do not liberate us — they trap us.

The truth, as with most debates, lies somewhere in the middle. Technology itself is neutral. If we used it intentionally — to learn, to create, to connect — it would enhance our lives enormously. However, if we allow it to become a substitute for effort and engagement, we risk becoming not just lazier, but more passive, more isolated, and ultimately less fulfilled.

The responsibility lies not with the technology, but with the choices we make about how to use it.`,
    vocabulary: [
      { word: 'oversimplification', definition: 'making something seem simpler than it really is', translation: 'simplificación excesiva' },
      { word: 'nuanced', definition: 'having subtle differences or distinctions', translation: 'matizado/a, con matices' },
      { word: 'pursuits', definition: 'activities that you spend time doing', translation: 'actividades, ocupaciones' },
      { word: 'liberate', definition: 'set free', translation: 'liberar' },
      { word: 'fulfilled', definition: 'feeling satisfied and happy because of fully developing your abilities', translation: 'realizado/a, satisfecho/a' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What is the main argument of those who defend technology?', questionEs: '¿Cuál es el argumento principal de quienes defienden la tecnología?', options: ['Technology is not really reducing effort', 'Technology frees time for more meaningful activities', 'Technology only affects lazy people', 'Technology improves physical health'], correct: 1, explanationEs: '"it could be argued that they free people to spend their time on more meaningful pursuits."' },
      { id: 'q2', type: 'true-false', question: 'The writer believes technology is entirely positive.', questionEs: 'El autor cree que la tecnología es totalmente positiva.', correct: 'false', explanationEs: '"The truth, as with most debates, lies somewhere in the middle."' },
      { id: 'q3', type: 'multiple-choice', question: 'What does the phrase "it could be argued that these technologies do not liberate us — they trap us" suggest?', questionEs: '¿Qué sugiere la frase "it could be argued that these technologies do not liberate us — they trap us"?', options: ['Technology makes people physically trapped', 'Some technologies create addiction rather than freedom', 'People cannot afford technology', 'Technology is illegal'], correct: 1, explanationEs: 'El autor sugiere que en lugar de liberarnos, ciertas tecnologías crean dependencia.' },
      { id: 'q4', type: 'short-answer', question: 'According to the essay, what determines whether technology is good or bad?', questionEs: 'Según el ensayo, ¿qué determina si la tecnología es buena o mala?', correct: 'The choices we make about how to use it', explanationEs: '"The responsibility lies not with the technology, but with the choices we make about how to use it."' },
    ],
    readingStrategy: 'Evaluating hedging language — notice "it could be argued", "it is true that", "there is growing evidence" as markers of balanced argument',
    readingStrategyEs: 'Evaluar lenguaje de cobertura (hedging) — observa "it could be argued", "it is true that", "there is growing evidence" como marcadores de argumento equilibrado.',
    grammarFocus: 'Although/Despite contrast: "Although it is true that...", "Despite this". 2nd Conditional: "If we did not have..., we would not have...".',
    grammarFocusEs: 'Contraste con although/despite: "Although it is true that...", "Despite this". 2o Condicional: "If we did not have..., we would not have...".',
    grammarTheoryIds: ['b2-conditionals-all', 'b1-linking-words'],
  },

  {
    id: 'b2-news-economy',
    title: 'NovaTech Announces 3,000 Job Cuts Amid Restructuring',
    titleEs: 'NovaTech Anuncia 3.000 Despidos en Medio de una Reestructuración',
    level: 'B2',
    cefrLevel: 4,
    genre: 'news',
    topic: 'Business and economy',
    topicEs: 'Negocios y economía',
    wordCount: 290,
    text: `Silicon Valley-based technology giant NovaTech announced on Tuesday that approximately 3,000 employees would be laid off over the next three months as part of a major restructuring programme. The cuts represent roughly 12% of the company's global workforce.

In a statement released to the press, CEO David Chen said that the decision had been taken after "months of careful deliberation" and described the layoffs as "a painful but necessary step to ensure the company's long-term viability." He added that affected employees would be offered severance packages worth between three and six months' salary, along with career transition support.

Industry analysts had been predicting significant cuts at NovaTech for several months. The company's share price had fallen by 34% over the past year, and it was reported last quarter that revenue had declined for the third consecutive quarter. The job losses are expected to save the company approximately $450 million annually.

The announcement was met with sharp criticism from the Technology Workers' Union, whose spokesperson, Marta Reyes, stated that "these cuts are being made to protect shareholder profits, not to save the company." She pointed out that NovaTech had spent $2.1 billion on share buybacks in the previous financial year, a sum that she said could have been used to retain the workers who are now being dismissed.

Economists are divided on whether mass layoffs in the tech sector signal a broader downturn. Professor Alan Whitfield of the London School of Economics told the BBC that "the technology industry is undergoing a correction after years of over-hiring, but this does not necessarily indicate a recession." Others, however, have warned that rising interest rates and falling consumer confidence could lead to further job losses across multiple sectors in the coming months.`,
    vocabulary: [
      { word: 'laid off', definition: 'made redundant; dismissed from a job because it is no longer needed', translation: 'despedido (por reestructuración)' },
      { word: 'viability', definition: 'the ability to survive and succeed', translation: 'viabilidad' },
      { word: 'severance package', definition: 'money and benefits given to an employee who is dismissed', translation: 'indemnización por despido' },
      { word: 'consecutive', definition: 'following one after another without interruption', translation: 'consecutivo/a' },
      { word: 'downturn', definition: 'a period when economic activity decreases', translation: 'recesión, desaceleración' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What percentage of NovaTech\'s workforce will be cut?', questionEs: '¿Qué porcentaje de la plantilla de NovaTech será recortado?', options: ['3%', '12%', '34%', '50%'], correct: 1, explanationEs: '"The cuts represent roughly 12% of the company\'s global workforce."' },
      { id: 'q2', type: 'true-false', question: 'The Technology Workers\' Union supported the layoffs.', questionEs: 'El sindicato de trabajadores tecnológicos apoyó los despidos.', correct: 'false', explanationEs: '"The announcement was met with sharp criticism from the Technology Workers\' Union."' },
      { id: 'q3', type: 'multiple-choice', question: 'According to the union spokesperson, why were the cuts made?', questionEs: 'Según la portavoz del sindicato, ¿por qué se hicieron los recortes?', options: ['To save the company from bankruptcy', 'To invest in new technology', 'To protect shareholder profits', 'To move operations abroad'], correct: 2, explanationEs: '"these cuts are being made to protect shareholder profits, not to save the company."' },
      { id: 'q4', type: 'short-answer', question: 'How much did NovaTech spend on share buybacks last year?', questionEs: '¿Cuánto gastó NovaTech en recompra de acciones el año pasado?', correct: '$2.1 billion', explanationEs: '"NovaTech had spent $2.1 billion on share buybacks in the previous financial year."' },
    ],
    readingStrategy: 'Reading business news — identify the 5 Ws (Who, What, When, Where, Why) and distinguish facts from opinions',
    readingStrategyEs: 'Leer noticias de negocios — identifica las 5 preguntas (Quién, Qué, Cuándo, Dónde, Por qué) y distingue hechos de opiniones.',
    grammarFocus: 'Passive constructions: "would be laid off", "had been taken", "was met with". Reported speech: "He said that...", "She stated that...".',
    grammarFocusEs: 'Construcciones pasivas: "would be laid off", "had been taken", "was met with". Reported speech: "He said that...", "She stated that...".',
    grammarTheoryIds: ['b2-passive-advanced', 'b2-reported-speech-advanced'],
  },

  {
    id: 'b2-review-series',
    title: 'Review: "The Glass Bridge" (Season 2)',
    titleEs: 'Reseña: "The Glass Bridge" (Temporada 2)',
    level: 'B2',
    cefrLevel: 4,
    genre: 'review',
    topic: 'Entertainment / TV series',
    topicEs: 'Entretenimiento / Series de televisión',
    wordCount: 280,
    text: `After a critically acclaimed first season that captivated audiences worldwide, expectations for the second season of "The Glass Bridge" were, to put it mildly, stratospheric. Had the writers delivered another masterpiece? The answer is: somewhat.

The show's greatest strength remains its cast. Elena Voss is, arguably, the finest actress of her generation, and her portrayal of detective Maren Lindström continues to be utterly compelling. The scenes in which she interrogates suspects are among the most riveting television I have seen in years. Had the entire season maintained this level of intensity, it would undoubtedly have surpassed the first.

The problems begin with the plot. Where Season 1 was tightly structured, with each episode building tension towards a devastating conclusion, Season 2 feels somewhat unfocused. Several subplots are introduced and then inexplicably abandoned. The relationship between Lindström and her estranged brother, which initially seemed promising, leads nowhere. This is particularly frustrating given how skilfully the writers handled character arcs in the previous season.

The cinematography, on the other hand, is breathtaking. The Icelandic landscapes are filmed with a cold, haunting beauty that perfectly complements the show's dark themes. The soundtrack, composed by Ólafur Arnalds, is equally impressive — subtle, atmospheric, and deeply emotional.

Ultimately, "The Glass Bridge" Season 2 is a flawed but still highly watchable piece of television. It remains substantially better than most of what is currently available on streaming platforms. Had the writers spent more time tightening the narrative, this could have been truly exceptional. As it stands, it is merely very good — which, given the quality of the competition, may still be enough.

Rating: 3.5 out of 5 stars.`,
    vocabulary: [
      { word: 'critically acclaimed', definition: 'praised by professional reviewers', translation: 'aclamado por la crítica' },
      { word: 'compelling', definition: 'so interesting that you cannot stop watching or reading', translation: 'cautivador/a, absorbente' },
      { word: 'riveting', definition: 'extremely interesting and exciting', translation: 'fascinante, apasionante' },
      { word: 'estranged', definition: 'no longer close to someone, especially a family member', translation: 'distanciado/a' },
      { word: 'breathtaking', definition: 'extremely impressive or beautiful', translation: 'impresionante, que quita el aliento' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What does the reviewer think is the show\'s greatest strength?', questionEs: '¿Qué piensa el crítico que es el mayor punto fuerte de la serie?', options: ['The plot', 'The cast', 'The soundtrack', 'The cinematography'], correct: 1, explanationEs: '"The show\'s greatest strength remains its cast."' },
      { id: 'q2', type: 'true-false', question: 'The reviewer thinks Season 2 is better than Season 1.', questionEs: 'El crítico piensa que la temporada 2 es mejor que la temporada 1.', correct: 'false', explanationEs: 'El crítico describe problemas con la trama y dice que la temporada es "flawed but still highly watchable" — imperfecta pero entretenida.' },
      { id: 'q3', type: 'multiple-choice', question: 'What is the main criticism of Season 2?', questionEs: '¿Cuál es la crítica principal a la temporada 2?', options: ['The acting is poor', 'The plot is unfocused and subplots are abandoned', 'The cinematography is disappointing', 'The episodes are too short'], correct: 1, explanationEs: '"Season 2 feels somewhat unfocused. Several subplots are introduced and then inexplicably abandoned."' },
      { id: 'q4', type: 'find-word', question: 'Find the inverted conditional structure that begins with "Had".', questionEs: 'Encuentra la estructura condicional invertida que empieza con "Had".', correct: 'Had the writers spent more time tightening the narrative', explanationEs: '"Had the writers spent more time tightening the narrative, this could have been truly exceptional" — condicional invertido (3er condicional sin if).' },
    ],
    readingStrategy: 'Recognising hedging language in reviews — "somewhat", "arguably", "merely", "to put it mildly" soften criticism and opinions',
    readingStrategyEs: 'Reconocer lenguaje de cobertura en reseñas — "somewhat", "arguably", "merely", "to put it mildly" suavizan críticas y opiniones.',
    grammarFocus: 'Inverted conditionals: "Had the writers delivered...", "Had the entire season maintained...". Advanced adjectives and hedging: somewhat, arguably, merely.',
    grammarFocusEs: 'Condicionales invertidos: "Had the writers delivered...", "Had the entire season maintained...". Adjetivos avanzados y hedging: somewhat, arguably, merely.',
    grammarTheoryIds: ['b2-conditionals-all', 'b2-inversion-after-negatives'],
  },

  {
    id: 'b2-formal-complaint',
    title: 'Complaint to Greenfield Borough Council',
    titleEs: 'Reclamación al Ayuntamiento de Greenfield',
    level: 'B2',
    cefrLevel: 4,
    genre: 'formal-letter',
    topic: 'Civic life / Formal complaints',
    topicEs: 'Vida cívica / Reclamaciones formales',
    wordCount: 275,
    text: `37 Kingsway Road
Greenfield
GR4 8LP

3 February 2026

The Director of Environmental Services
Greenfield Borough Council
Council House, Market Square
Greenfield
GR1 1AA

Dear Sir or Madam,

I should like to draw your attention to the unacceptable condition of Riverside Park, which has deteriorated significantly over the past six months. As a resident who has used this park daily for over ten years, I feel compelled to express my deep concern.

Firstly, the park's main footpath has been severely damaged by tree roots and heavy rain, creating a surface that is dangerous for elderly visitors and parents with pushchairs. I am aware that a repair request was submitted by the Riverside Residents' Association in September, but no action has been taken to date.

Secondly, the children's play area, which was once the pride of the neighbourhood, has been left in a state of neglect. Two of the swings have been broken for at least three months, the safety surface has worn away, and the fence surrounding the area has been vandalised. It is deeply concerning that children are being exposed to these hazards.

Thirdly, rubbish is not being collected from the park bins with sufficient frequency. On several occasions, I have observed overflowing bins that have attracted rats and foxes. This represents a clear public health risk.

I understand that budget constraints may have contributed to these problems. However, I would respectfully argue that the maintenance of public green spaces should be considered a priority, not a luxury. Parks are essential for the physical and mental well-being of residents.

I should be grateful if you could provide a written response outlining the specific steps that will be taken to address these issues.

Yours faithfully,
Margaret Ashworth`,
    vocabulary: [
      { word: 'deteriorated', definition: 'become worse over time', translation: 'deteriorado, empeorado' },
      { word: 'compelled', definition: 'feeling that you must do something', translation: 'obligado/a, impelido/a' },
      { word: 'neglect', definition: 'the state of not being cared for or maintained', translation: 'abandono, dejadez' },
      { word: 'vandalised', definition: 'deliberately damaged or destroyed', translation: 'vandalizado/a' },
      { word: 'constraints', definition: 'limitations or restrictions', translation: 'restricciones, limitaciones' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How many specific problems does the writer mention?', questionEs: '¿Cuántos problemas específicos menciona la autora?', options: ['One', 'Two', 'Three', 'Four'], correct: 2, explanationEs: 'La autora menciona tres problemas: el camino dañado, el área de juegos infantiles en mal estado y la recogida de basura insuficiente.' },
      { id: 'q2', type: 'true-false', question: 'The Riverside Residents\' Association submitted a repair request that was acted upon.', questionEs: 'La Asociación de Vecinos de Riverside presentó una solicitud de reparación que fue atendida.', correct: 'false', explanationEs: '"a repair request was submitted...in September, but no action has been taken to date."' },
      { id: 'q3', type: 'find-word', question: 'Find the formal phrase used to introduce the purpose of the letter politely.', questionEs: 'Encuentra la frase formal usada para introducir cortésmente el propósito de la carta.', correct: 'I should like to draw your attention to', explanationEs: '"I should like to draw your attention to..." — fórmula muy formal para llamar la atención sobre un asunto.' },
      { id: 'q4', type: 'multiple-choice', question: 'What does the writer request at the end of the letter?', questionEs: '¿Qué solicita la autora al final de la carta?', options: ['A meeting with the director', 'Financial compensation', 'A written response with specific steps', 'The park to be closed'], correct: 2, explanationEs: '"I should be grateful if you could provide a written response outlining the specific steps that will be taken."' },
    ],
    readingStrategy: 'Analysing a formal complaint — identify the structure: introduction, specific complaints with evidence, request for action',
    readingStrategyEs: 'Analizar una reclamación formal — identifica la estructura: introducción, quejas específicas con evidencia, solicitud de acción.',
    grammarFocus: 'Formal register and passive: "has been severely damaged", "has been left", "is not being collected". Formal phrases: "I should like to draw your attention to...", "I should be grateful if...".',
    grammarFocusEs: 'Registro formal y voz pasiva: "has been severely damaged", "has been left", "is not being collected". Fórmulas formales: "I should like to draw your attention to...", "I should be grateful if...".',
    grammarTheoryIds: ['b2-passive-advanced', 'c2-register-shift'],
  },

  {
    id: 'b2-article-psychology',
    title: 'Why Do We Procrastinate?',
    titleEs: '¿Por Qué Procrastinamos?',
    level: 'B2',
    cefrLevel: 4,
    genre: 'article',
    topic: 'Psychology',
    topicEs: 'Psicología',
    wordCount: 310,
    text: `You have a deadline tomorrow. The task is important, and you know you should start it. Instead, you check your phone, make a cup of coffee, reorganise your desk, and watch three episodes of a series you have already seen. By the time you finally sit down to work, it is midnight. Why do we do this to ourselves?

Psychologists have been studying procrastination for decades, and the answers are more complex than simple laziness. Dr. Piers Steel, who has been researching the topic since the early 2000s, defines procrastination as "voluntarily delaying an intended course of action despite expecting to be worse off for the delay." In other words, we procrastinate even when we know it will make us feel bad.

One widely accepted explanation is that procrastination is an emotional regulation problem, not a time management one. When we face a task that triggers negative emotions — anxiety, boredom, self-doubt — our brain seeks immediate relief. Scrolling through social media provides instant comfort, whereas starting a difficult essay offers only distant, uncertain rewards. The brain, which has evolved to prioritise short-term threats and pleasures, chooses the easier option.

This is why traditional productivity advice — "just make a to-do list" or "break the task into smaller steps" — often fails. These strategies address the logistics of the task but not the emotions that drive avoidance. More effective approaches tackle the emotional dimension directly. Techniques such as self-compassion, which involves treating yourself kindly rather than criticising yourself for procrastinating, have been shown to reduce the behaviour significantly.

Interestingly, research has also revealed that procrastination tends to decrease with age. Younger adults, whose prefrontal cortex — the area of the brain responsible for planning and impulse control — is still developing, are considerably more likely to procrastinate than older adults. This suggests that some degree of procrastination may simply be a normal part of cognitive development.

Understanding why we procrastinate is the first step towards managing it — though, ironically, many readers will probably bookmark this article to read later.`,
    vocabulary: [
      { word: 'procrastination', definition: 'the act of delaying something that should be done', translation: 'procrastinación' },
      { word: 'voluntarily', definition: 'by choice; willingly', translation: 'voluntariamente' },
      { word: 'self-doubt', definition: 'lack of confidence in oneself', translation: 'inseguridad, dudas sobre uno mismo' },
      { word: 'impulse control', definition: 'the ability to resist acting on sudden urges', translation: 'control de impulsos' },
      { word: 'self-compassion', definition: 'being kind and understanding towards yourself', translation: 'autocompasión' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to the article, procrastination is primarily a problem of...', questionEs: 'Según el artículo, la procrastinación es principalmente un problema de...', options: ['Time management', 'Emotional regulation', 'Intelligence', 'Physical tiredness'], correct: 1, explanationEs: '"procrastination is an emotional regulation problem, not a time management one."' },
      { id: 'q2', type: 'true-false', question: 'Traditional productivity advice like making to-do lists is highly effective against procrastination.', questionEs: 'Los consejos de productividad tradicionales como hacer listas son muy eficaces contra la procrastinación.', correct: 'false', explanationEs: '"traditional productivity advice...often fails. These strategies address the logistics of the task but not the emotions that drive avoidance."' },
      { id: 'q3', type: 'multiple-choice', question: 'Why do younger adults procrastinate more, according to research?', questionEs: '¿Por qué procrastinan más los adultos jóvenes, según la investigación?', options: ['They have more free time', 'They have more distractions', 'Their prefrontal cortex is still developing', 'They have less motivation'], correct: 2, explanationEs: '"Younger adults, whose prefrontal cortex...is still developing, are considerably more likely to procrastinate."' },
      { id: 'q4', type: 'short-answer', question: 'What technique has been shown to reduce procrastination, according to the article?', questionEs: '¿Qué técnica ha demostrado reducir la procrastinación, según el artículo?', correct: 'Self-compassion', explanationEs: '"Techniques such as self-compassion...have been shown to reduce the behaviour significantly."' },
    ],
    readingStrategy: 'Reading academic articles — identify the research question, evidence cited, and conclusions drawn',
    readingStrategyEs: 'Leer artículos académicos — identifica la pregunta de investigación, la evidencia citada y las conclusiones extraídas.',
    grammarFocus: 'Present Perfect Continuous: "have been studying", "has been researching". Relative clauses: "who has been researching...", "which has evolved...", "whose prefrontal cortex...".',
    grammarFocusEs: 'Present Perfect Continuous: "have been studying", "has been researching". Cláusulas de relativo: "who has been researching...", "which has evolved...", "whose prefrontal cortex...".',
    grammarTheoryIds: ['b1-present-perfect-continuous', 'b1-defining-vs-nondefining-relative'],
  },

  // ===================== C1 TEXTS =====================

  {
    id: 'c1-essay-inequality',
    title: 'The Widening Gap: Income Inequality and the Erosion of Social Mobility',
    titleEs: 'La brecha creciente: desigualdad de ingresos y la erosión de la movilidad social',
    level: 'C1',
    cefrLevel: 5,
    genre: 'essay',
    topic: 'Income inequality and social mobility',
    topicEs: 'Desigualdad de ingresos y movilidad social',
    wordCount: 420,
    text: `It is widely acknowledged that the gap between the wealthiest and the poorest members of society has been increasing at an alarming rate over the past four decades. What was once considered a temporary feature of rapid economic growth has, in fact, become a deeply entrenched structural phenomenon that threatens the very foundations of democratic governance.

Not only has the concentration of wealth accelerated in advanced economies, but it has also given rise to a parallel decline in social mobility — the ability of individuals to improve their socioeconomic standing relative to their parents. In countries where intergenerational mobility was historically a defining national narrative, such as the United States, recent data paints a sobering picture: a child born into the lowest income quintile now has less than a ten per cent chance of reaching the top quintile in adulthood.

The causes of this trend are multifaceted. Globalisation and technological change have disproportionately rewarded highly skilled workers, leaving those without advanced qualifications increasingly marginalised. Simultaneously, the erosion of progressive taxation and the weakening of collective bargaining mechanisms have reduced the redistributive capacity of the state.

It is frequently argued that education is the great equaliser, yet the evidence suggests otherwise. Far from levelling the playing field, educational institutions often reproduce existing inequalities. Children from affluent backgrounds benefit from better-funded schools, private tutoring, and social networks that facilitate access to elite universities and high-paying careers. Meanwhile, those from disadvantaged communities face systemic barriers that no amount of individual effort can fully overcome.

Seldom do policymakers confront the uncomfortable truth that meritocracy, as currently practised, functions more as myth than reality. Were governments to invest meaningfully in early childhood education, affordable housing, and universal healthcare, the trajectory might be altered. Yet the political will to enact such reforms remains conspicuously absent, not least because those who benefit most from the status quo wield disproportionate influence over the legislative process.

The consequences of inaction are grave. Societies characterised by extreme inequality tend to exhibit higher rates of crime, poorer health outcomes, and lower levels of civic trust. In the long run, the failure to address this issue may prove not merely unjust but economically self-defeating, as a shrinking middle class undermines the consumer spending on which modern economies depend.`,
    vocabulary: [
      { word: 'entrenched', definition: 'firmly established and difficult to change', translation: 'arraigado' },
      { word: 'intergenerational', definition: 'relating to or affecting several generations', translation: 'intergeneracional' },
      { word: 'quintile', definition: 'each of five equal groups into which a population can be divided', translation: 'quintil' },
      { word: 'redistributive', definition: 'relating to the redistribution of wealth or income', translation: 'redistributivo' },
      { word: 'meritocracy', definition: 'a system in which advancement is based on ability and achievement', translation: 'meritocracia' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What does the essay identify as the main consequence of wealth concentration?', questionEs: '¿Cuál identifica el ensayo como la principal consecuencia de la concentración de riqueza?', options: ['Higher economic growth', 'A decline in social mobility', 'More educational opportunities', 'Greater political stability'], correct: 1, explanationEs: '"Not only has the concentration of wealth accelerated... but it has also given rise to a parallel decline in social mobility."' },
      { id: 'q2', type: 'true-false', question: 'The essay argues that education effectively equalises opportunities across social classes.', questionEs: 'El ensayo sostiene que la educación iguala eficazmente las oportunidades entre clases sociales.', correct: 'false', explanationEs: '"It is frequently argued that education is the great equaliser, yet the evidence suggests otherwise."' },
      { id: 'q3', type: 'short-answer', question: 'According to the essay, what percentage chance does a child born in the lowest quintile have of reaching the top quintile?', questionEs: 'Según el ensayo, ¿qué porcentaje de probabilidad tiene un niño nacido en el quintil más bajo de llegar al quintil más alto?', correct: 'Less than ten per cent', explanationEs: '"a child born into the lowest income quintile now has less than a ten per cent chance of reaching the top quintile."' },
      { id: 'q4', type: 'multiple-choice', question: 'What rhetorical device does the phrase "Not only has the concentration... but it has also..." exemplify?', questionEs: '¿Qué recurso retórico ejemplifica la frase "Not only has the concentration... but it has also..."?', options: ['Metaphor', 'Inversion with correlative conjunctions', 'Understatement', 'Personification'], correct: 1, explanationEs: 'La estructura "Not only + inversión auxiliar... but also..." es un ejemplo clásico de inversión con conjunciones correlativas para dar énfasis.' },
    ],
    readingStrategy: 'Evaluating argumentation — identify the thesis, supporting evidence, counterarguments, and rhetorical devices used to persuade',
    readingStrategyEs: 'Evaluar la argumentación — identifica la tesis, las pruebas de apoyo, los contraargumentos y los recursos retóricos utilizados para persuadir.',
    grammarFocus: 'Distancing language: "It is widely acknowledged", "It is frequently argued". Inversion: "Not only has... but also", "Seldom do policymakers". Complex noun phrases: "the redistributive capacity of the state".',
    grammarFocusEs: 'Lenguaje de distanciamiento: "It is widely acknowledged", "It is frequently argued". Inversión: "Not only has... but also", "Seldom do policymakers". Frases nominales complejas: "the redistributive capacity of the state".',
    grammarTheoryIds: ['c1-inversion', 'c1-distancing-language'],
  },

  {
    id: 'c1-news-climate',
    title: 'A Decade of Broken Promises: Why Climate Policy Continues to Fall Short',
    titleEs: 'Una década de promesas rotas: por qué la política climática sigue siendo insuficiente',
    level: 'C1',
    cefrLevel: 5,
    genre: 'news',
    topic: 'Climate policy failures',
    topicEs: 'Fracasos en la política climática',
    wordCount: 440,
    text: `Had governments acted decisively when the scientific consensus on climate change first crystallised in the early 1990s, there would now be considerably less urgency to the debate. Instead, three decades of incremental pledges, deferred targets, and outright policy reversals have left the world perilously close to breaching the 1.5°C warming threshold that scientists regard as a critical tipping point.

The gap between rhetoric and action has never been wider. At successive international summits, world leaders have made impassioned commitments to reduce greenhouse gas emissions, only for those commitments to be quietly abandoned or diluted once the cameras stopped rolling. The Paris Agreement of 2015, hailed at the time as a landmark achievement, is now widely seen as having been undermined by insufficient enforcement mechanisms and a voluntary compliance framework that allows nations to set their own — often inadequate — targets.

A recent report by the Intergovernmental Panel on Climate Change paints a bleak picture. Global emissions, which should have been declining sharply since 2020, have instead continued to rise, driven largely by the rapid industrialisation of emerging economies and the persistent reliance of developed nations on fossil fuel infrastructure. Had the transition to renewable energy been prioritised with the same urgency as military spending, the trajectory would almost certainly have been different.

Critics argue that the failure is not merely technical but fundamentally political. Fossil fuel industries, which have been extensively documented as having funded disinformation campaigns for decades, continue to exert enormous influence over policy decisions. Subsidies for oil, gas, and coal — estimated at over $5.9 trillion globally in 2023 — dwarf the investment directed towards clean energy alternatives.

Were the true environmental costs of carbon-intensive industries to be reflected in market prices, consumer behaviour would likely shift dramatically. Yet the political cost of implementing such measures — higher energy bills, job losses in traditional sectors — has consistently been deemed too high by governments focused on short-term electoral cycles.

The consequences of this collective failure are already being felt. Extreme weather events, once considered anomalies, have become disturbingly regular. Rising sea levels threaten coastal communities worldwide, and biodiversity loss has accelerated to what many scientists describe as the sixth mass extinction. If current trends are not reversed within the next decade, the damage may become irreversible — a legacy that future generations will have every right to condemn.`,
    vocabulary: [
      { word: 'crystallise', definition: 'to become definite and clear', translation: 'cristalizar' },
      { word: 'perilously', definition: 'in a way that is full of danger or risk', translation: 'peligrosamente' },
      { word: 'tipping point', definition: 'a critical threshold beyond which change becomes irreversible', translation: 'punto de inflexión' },
      { word: 'disinformation', definition: 'false information spread deliberately to deceive', translation: 'desinformación' },
      { word: 'anomaly', definition: 'something that deviates from what is standard or expected', translation: 'anomalía' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What grammatical structure does the opening sentence use to express a hypothetical past scenario?', questionEs: '¿Qué estructura gramatical usa la primera oración para expresar un escenario hipotético pasado?', options: ['Second conditional', 'Third conditional / mixed conditional', 'Zero conditional', 'First conditional'], correct: 1, explanationEs: '"Had governments acted... there would now be..." es un condicional mixto: condición pasada irreal (tercera) con resultado presente (segunda).' },
      { id: 'q2', type: 'true-false', question: 'The article states that global emissions have been declining sharply since 2020.', questionEs: 'El artículo afirma que las emisiones globales han estado disminuyendo drásticamente desde 2020.', correct: 'false', explanationEs: '"Global emissions, which should have been declining sharply since 2020, have instead continued to rise."' },
      { id: 'q3', type: 'short-answer', question: 'How much are global fossil fuel subsidies estimated at, according to the article?', questionEs: '¿A cuánto se estiman los subsidios globales a los combustibles fósiles, según el artículo?', correct: 'Over $5.9 trillion', explanationEs: '"Subsidies for oil, gas, and coal — estimated at over $5.9 trillion globally in 2023."' },
      { id: 'q4', type: 'multiple-choice', question: 'What does the article identify as the primary obstacle to effective climate policy?', questionEs: '¿Qué identifica el artículo como el principal obstáculo para una política climática eficaz?', options: ['Lack of scientific knowledge', 'Insufficient technology', 'Political and corporate interests', 'Public indifference'], correct: 2, explanationEs: '"Critics argue that the failure is not merely technical but fundamentally political." El artículo destaca la influencia de las industrias de combustibles fósiles y los ciclos electorales.' },
    ],
    readingStrategy: 'Critical reading of news analysis — distinguish between reported facts, expert opinions, and editorial interpretation',
    readingStrategyEs: 'Lectura crítica de análisis de noticias — distingue entre hechos reportados, opiniones de expertos e interpretación editorial.',
    grammarFocus: 'Mixed conditionals: "Had governments acted... there would now be". Advanced passive: "have been extensively documented as having funded". Formal inversion: "Were the true costs... to be reflected".',
    grammarFocusEs: 'Condicionales mixtos: "Had governments acted... there would now be". Pasiva avanzada: "have been extensively documented as having funded". Inversión formal: "Were the true costs... to be reflected".',
    grammarTheoryIds: ['c1-mixed-conditionals-advanced', 'b2-passive-advanced'],
  },

  {
    id: 'c1-opinion-ai-ethics',
    title: 'The Moral Machine: Who Bears Responsibility When AI Makes Decisions?',
    titleEs: 'La máquina moral: ¿quién asume la responsabilidad cuando la IA toma decisiones?',
    level: 'C1',
    cefrLevel: 5,
    genre: 'opinion',
    topic: 'Ethical implications of artificial intelligence',
    topicEs: 'Implicaciones éticas de la inteligencia artificial',
    wordCount: 410,
    text: `It remains to be seen whether artificial intelligence will prove to be humanity's greatest achievement or its most consequential miscalculation. What is clear, however, is that the ethical frameworks governing its deployment have failed to keep pace with the technology itself, leaving society dangerously exposed to risks that few fully comprehend.

One might argue that AI systems are merely tools, and that moral responsibility lies exclusively with those who design and deploy them. Yet this argument grows increasingly untenable as autonomous systems begin making decisions of genuine consequence — from determining creditworthiness and prison sentences to selecting targets in military engagements. It is the opacity of these systems that makes accountability so elusive: when an algorithm produces a discriminatory outcome, identifying precisely where the bias originated can be extraordinarily difficult.

What makes this issue particularly urgent is that AI does not simply reflect existing biases — it amplifies them. It is the data on which these systems are trained that encodes historical patterns of discrimination, and it is the scale at which they operate that transforms individual prejudices into systemic injustice. A biased hiring manager might affect dozens of candidates; a biased algorithm can affect millions.

Proponents of self-regulation within the technology industry contend that companies are best positioned to police their own innovations. One might be forgiven for finding this argument unconvincing. The commercial incentives driving AI development — speed to market, competitive advantage, shareholder returns — are fundamentally misaligned with the cautious, deliberative approach that ethical deployment demands.

It is for this reason that many ethicists advocate for robust governmental oversight, including mandatory algorithmic audits, transparency requirements, and clear legal liability for AI-driven harms. Such measures would not stifle innovation, as industry lobbyists invariably claim; rather, they would channel it in directions that serve the broader public interest.

The philosophical questions at stake are profound. If an autonomous vehicle must choose between two catastrophic outcomes, whose values should it encode? If a medical AI recommends a treatment that proves fatal, who is culpable — the developer, the hospital, or the machine itself? These are not hypothetical dilemmas; they are scenarios that are already unfolding.

It is precisely because no consensus exists on these questions that the conversation must intensify, not retreat into the comfortable assumption that technology, left to its own devices, will inevitably bend towards the good.`,
    vocabulary: [
      { word: 'untenable', definition: 'not able to be maintained or defended against criticism', translation: 'insostenible' },
      { word: 'opacity', definition: 'the quality of being difficult to understand; lack of transparency', translation: 'opacidad' },
      { word: 'elusive', definition: 'difficult to find, catch, or achieve', translation: 'esquivo, difícil de alcanzar' },
      { word: 'deliberative', definition: 'relating to careful consideration and discussion', translation: 'deliberativo' },
      { word: 'culpable', definition: 'deserving blame; guilty', translation: 'culpable' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What is the author\'s main concern about AI decision-making?', questionEs: '¿Cuál es la principal preocupación del autor sobre la toma de decisiones de la IA?', options: ['AI will replace all human jobs', 'Ethical frameworks have not kept pace with the technology', 'AI systems are too expensive', 'Governments are overregulating AI'], correct: 1, explanationEs: '"the ethical frameworks governing its deployment have failed to keep pace with the technology itself."' },
      { id: 'q2', type: 'true-false', question: 'The author believes the technology industry can effectively regulate itself regarding AI ethics.', questionEs: 'El autor cree que la industria tecnológica puede autorregularse eficazmente en materia de ética de la IA.', correct: 'false', explanationEs: '"One might be forgiven for finding this argument unconvincing." El autor rechaza claramente la autorregulación.' },
      { id: 'q3', type: 'find-word', question: 'Find the hedging expression in the first paragraph that indicates uncertainty about the future.', questionEs: 'Encuentra la expresión de atenuación (hedging) en el primer párrafo que indica incertidumbre sobre el futuro.', correct: 'It remains to be seen', explanationEs: '"It remains to be seen" es una expresión clásica de hedging que señala incertidumbre sobre el resultado futuro.' },
      { id: 'q4', type: 'multiple-choice', question: 'According to the text, what is the key difference between a biased human and a biased algorithm?', questionEs: 'Según el texto, ¿cuál es la diferencia clave entre un humano con prejuicios y un algoritmo con prejuicios?', options: ['Algorithms are more intelligent', 'Algorithms operate at a vastly larger scale', 'Algorithms are always more accurate', 'Human bias is more harmful'], correct: 1, explanationEs: '"A biased hiring manager might affect dozens of candidates; a biased algorithm can affect millions."' },
    ],
    readingStrategy: 'Identifying hedging and stance — recognise how the author signals certainty, uncertainty, and personal opinion through linguistic choices',
    readingStrategyEs: 'Identificar hedging y postura — reconoce cómo el autor señala certeza, incertidumbre y opinión personal mediante elecciones lingüísticas.',
    grammarFocus: 'Hedging expressions: "It remains to be seen", "One might argue", "One might be forgiven for". Cleft sentences: "It is the opacity... that makes", "It is the data... that encodes", "It is precisely because...".',
    grammarFocusEs: 'Expresiones de hedging: "It remains to be seen", "One might argue", "One might be forgiven for". Oraciones escindidas (cleft): "It is the opacity... that makes", "It is the data... that encodes", "It is precisely because...".',
    grammarTheoryIds: ['c1-hedging', 'c1-cleft-sentences'],
  },

  {
    id: 'c1-literary-modernism',
    title: 'Fragments Against the Void: A Critical Reading of Modernist Poetics',
    titleEs: 'Fragmentos contra el vacío: una lectura crítica de la poética modernista',
    level: 'C1',
    cefrLevel: 5,
    genre: 'literary',
    topic: 'Literary criticism of modernist poetry',
    topicEs: 'Crítica literaria de la poesía modernista',
    wordCount: 390,
    text: `That modernist poetry should have emerged from the ruins of the First World War seems, in retrospect, almost inevitable. The shattering of a civilisation's certainties — its faith in progress, in reason, in the benevolence of empire — demanded a form of expression equally fractured, equally resistant to the consolations of coherence.

T.S. Eliot's "The Waste Land" (1922), widely regarded as the defining work of literary modernism, exemplifies this rupture with devastating precision. Composed of fragments drawn from multiple literary traditions, mythological systems, and spoken registers, the poem refuses the reader the comfort of a single, unifying narrative voice. Instead, what one encounters is a polyphony of dislocated perspectives, each gesturing towards meaning without ever fully delivering it.

The opening lines — "April is the cruellest month, breeding / Lilacs out of the dead land" — subvert the pastoral tradition by recasting spring, conventionally a symbol of renewal, as an agent of cruelty. Having stripped nature of its redemptive associations, Eliot proceeds to construct a landscape in which beauty and desolation exist in unsettling proximity.

What is particularly striking about the poem, considered as a whole, is its method of juxtaposition. Classical allusions sit alongside fragments of popular song; the elevated diction of prophetic utterance gives way, without warning, to the banal chatter of a London pub. It is through these jarring transitions that Eliot achieves his most powerful effects, forcing the reader to confront the discontinuities of modern experience rather than retreating into the artificial unity of traditional verse forms.

Critics have long debated whether Eliot's fragmentary technique represents a lament for lost wholeness or an embrace of irreducible complexity. Were one to read the poem as purely elegiac, its more playful and satirical passages would remain inexplicable. Conversely, treating it exclusively as an exercise in ironic detachment would ignore the genuine anguish that pervades its most haunting sections.

Perhaps the most productive reading lies somewhere between these poles. Rooted in a profound sense of cultural crisis yet animated by a restless formal inventiveness, "The Waste Land" endures precisely because it resists the interpretive closure that lesser works invite. It demands, as all great literature does, that we return to it repeatedly, each reading yielding new configurations of meaning from the same enigmatic fragments.`,
    vocabulary: [
      { word: 'polyphony', definition: 'the simultaneous combination of multiple voices or perspectives', translation: 'polifonía' },
      { word: 'subvert', definition: 'to undermine or overturn the expected meaning or convention', translation: 'subvertir' },
      { word: 'juxtaposition', definition: 'the placement of contrasting elements side by side', translation: 'yuxtaposición' },
      { word: 'elegiac', definition: 'relating to or expressing sorrow or mourning', translation: 'elegíaco' },
      { word: 'enigmatic', definition: 'mysterious and difficult to interpret', translation: 'enigmático' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to the passage, why does "The Waste Land" reject a single narrative voice?', questionEs: 'Según el pasaje, ¿por qué "The Waste Land" rechaza una única voz narrativa?', options: ['Because Eliot could not decide on a narrator', 'To reflect the fractured certainties of post-war civilisation', 'Because multiple authors contributed', 'To appeal to a wider audience'], correct: 1, explanationEs: '"The shattering of a civilisation\'s certainties... demanded a form of expression equally fractured."' },
      { id: 'q2', type: 'true-false', question: 'The critic argues that the poem should be read exclusively as a lament for lost wholeness.', questionEs: 'El crítico sostiene que el poema debe leerse exclusivamente como un lamento por la plenitud perdida.', correct: 'false', explanationEs: '"Were one to read the poem as purely elegiac, its more playful and satirical passages would remain inexplicable." El crítico aboga por una lectura intermedia.' },
      { id: 'q3', type: 'short-answer', question: 'What literary technique does the critic identify as Eliot\'s most powerful tool in the poem?', questionEs: '¿Qué técnica literaria identifica el crítico como la herramienta más poderosa de Eliot en el poema?', correct: 'Juxtaposition', explanationEs: '"It is through these jarring transitions that Eliot achieves his most powerful effects."' },
      { id: 'q4', type: 'multiple-choice', question: 'What does the subjunctive "That modernist poetry should have emerged..." convey?', questionEs: '¿Qué transmite el subjuntivo "That modernist poetry should have emerged..."?', options: ['A command', 'A factual statement', 'A sense of retrospective inevitability and evaluation', 'A future prediction'], correct: 2, explanationEs: 'El subjuntivo con "should have" en esta posición expresa una evaluación retrospectiva: parece casi inevitable en retrospectiva.' },
    ],
    readingStrategy: 'Reading literary criticism — follow the critic\'s argument structure, identify supporting textual evidence, and evaluate the interpretive conclusions',
    readingStrategyEs: 'Leer crítica literaria — sigue la estructura argumentativa del crítico, identifica la evidencia textual de apoyo y evalúa las conclusiones interpretativas.',
    grammarFocus: 'Subjunctive: "That modernist poetry should have emerged". Complex participial phrases: "Having stripped nature of its redemptive associations", "Rooted in a profound sense... yet animated by". Evaluative language: "devastating precision", "unsettling proximity".',
    grammarFocusEs: 'Subjuntivo: "That modernist poetry should have emerged". Frases participiales complejas: "Having stripped nature of its redemptive associations", "Rooted in a profound sense... yet animated by". Lenguaje evaluativo: "devastating precision", "unsettling proximity".',
    grammarTheoryIds: ['c1-subjunctive', 'b2-participle-clauses'],
  },

  // ===================== C2 TEXTS =====================

  {
    id: 'c2-essay-consciousness',
    title: 'The Hard Problem Revisited: Consciousness, Computation, and the Limits of Materialism',
    titleEs: 'El problema difícil revisitado: conciencia, computación y los límites del materialismo',
    level: 'C2',
    cefrLevel: 6,
    genre: 'essay',
    topic: 'Consciousness and artificial intelligence',
    topicEs: 'Conciencia e inteligencia artificial',
    wordCount: 520,
    text: `It is a peculiarity of the contemporary intellectual landscape that the question of consciousness — arguably the most profound puzzle confronting human inquiry — should have become entangled with debates about artificial intelligence. That a digital system might one day be said to possess subjective experience strikes many philosophers as not merely implausible but conceptually incoherent; yet it is precisely this possibility that an increasing number of cognitive scientists and AI researchers have begun to entertain with considerable seriousness.

The so-called "hard problem" of consciousness, as formulated by David Chalmers in 1995, concerns the explanatory gap between physical processes in the brain and the qualitative character of subjective experience — what philosophers term "qualia." Why should the electrochemical activity of neurons give rise to the felt quality of seeing red, tasting coffee, or experiencing grief? No amount of functional description, however exhaustive, appears sufficient to bridge this gap, leading some theorists to conclude that consciousness may be an irreducible feature of reality rather than an emergent property of complex computation.

Were one to accept, for the sake of argument, computable functionalism — the thesis that mental states are constituted entirely by their functional roles — then it would follow, at least in principle, that any system capable of replicating the relevant computational architecture of the human brain could instantiate consciousness. This is the philosophical foundation upon which strong AI claims rest. Its proponents argue that there is nothing metaphysically special about biological neurons; what matters is the pattern of information processing, not the substrate in which it is realised.

Critics, however, have mounted formidable objections. John Searle's celebrated Chinese Room argument purports to demonstrate that syntactic manipulation of symbols — the essence of computation — is insufficient for genuine semantic understanding. A system might behave as though it comprehends language without any accompanying phenomenal experience whatsoever. It has been posited that such "zombie" systems could pass every behavioural test for consciousness while remaining, in the philosophically relevant sense, entirely devoid of inner life.

The implications extend well beyond academic philosophy. Should it transpire that advanced AI systems do possess some form of sentience, the ethical ramifications would be staggering. On what grounds could one justify subjecting a conscious entity to servitude, regardless of whether its substrate is carbon or silicon? Conversely, were society to attribute consciousness to systems that in fact lack it, resources and moral consideration might be misallocated on a vast scale.

What makes this debate so resistant to resolution is that consciousness, by its very nature, is accessible only from the first-person perspective. No external measurement can definitively establish its presence or absence in another system — biological or artificial. We infer consciousness in other humans largely on the basis of behavioural and physiological analogy; extending this inference to radically different architectures introduces uncertainties that our current conceptual apparatus is ill-equipped to handle.

It would be intellectually dishonest to pretend that any satisfactory resolution is imminent. The hard problem remains hard, and the advent of increasingly sophisticated AI systems has, if anything, rendered it harder still.`,
    vocabulary: [
      { word: 'qualia', definition: 'the subjective, conscious experiences associated with perception (e.g., the redness of red)', translation: 'qualia (experiencias subjetivas de la percepción)' },
      { word: 'functionalism', definition: 'the theory that mental states are defined by their functional roles rather than their physical composition', translation: 'funcionalismo' },
      { word: 'instantiate', definition: 'to represent or be a concrete example of an abstract concept', translation: 'instanciar, ejemplificar' },
      { word: 'substrate', definition: 'the underlying substance or material on which a process occurs', translation: 'sustrato' },
      { word: 'sentience', definition: 'the capacity to have subjective experiences and feelings', translation: 'sintiencia, capacidad de sentir' },
      { word: 'ramification', definition: 'a complex consequence of an action or event', translation: 'ramificación, consecuencia' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What is the "hard problem" of consciousness as described in the essay?', questionEs: '¿Cuál es el "problema difícil" de la conciencia según se describe en el ensayo?', options: ['Building AI that passes the Turing test', 'The gap between brain processes and subjective experience', 'Programming emotions into machines', 'Understanding neural networks'], correct: 1, explanationEs: '"the explanatory gap between physical processes in the brain and the qualitative character of subjective experience."' },
      { id: 'q2', type: 'true-false', question: 'The essay concludes that the hard problem of consciousness will likely be resolved within the next decade.', questionEs: 'El ensayo concluye que el problema difícil de la conciencia probablemente se resolverá en la próxima década.', correct: 'false', explanationEs: '"It would be intellectually dishonest to pretend that any satisfactory resolution is imminent."' },
      { id: 'q3', type: 'multiple-choice', question: 'What does Searle\'s Chinese Room argument attempt to demonstrate?', questionEs: '¿Qué intenta demostrar el argumento de la Habitación China de Searle?', options: ['That AI can truly understand language', 'That symbol manipulation alone is insufficient for genuine understanding', 'That Chinese is harder to process than English', 'That computers are faster than human brains'], correct: 1, explanationEs: '"syntactic manipulation of symbols — the essence of computation — is insufficient for genuine semantic understanding."' },
      { id: 'q4', type: 'short-answer', question: 'Why does the author say consciousness is particularly difficult to study scientifically?', questionEs: '¿Por qué dice el autor que la conciencia es particularmente difícil de estudiar científicamente?', correct: 'Because it is accessible only from the first-person perspective', explanationEs: '"consciousness, by its very nature, is accessible only from the first-person perspective. No external measurement can definitively establish its presence or absence."' },
    ],
    readingStrategy: 'Navigating philosophical argumentation — track thesis, objections, and counter-objections across extended reasoning chains; distinguish between positions the author endorses and those presented for consideration',
    readingStrategyEs: 'Navegar argumentación filosófica — sigue la tesis, objeciones y contra-objeciones a lo largo de cadenas de razonamiento extensas; distingue entre posiciones que el autor respalda y las que presenta para consideración.',
    grammarFocus: 'Metalinguistic hedging: "It is a peculiarity that... should have become", "Were one to accept", "It has been posited". Nominal groups: "the qualitative character of subjective experience", "the explanatory gap between physical processes". Subjunctive: "Should it transpire that".',
    grammarFocusEs: 'Hedging metalingüístico: "It is a peculiarity that... should have become", "Were one to accept", "It has been posited". Grupos nominales: "the qualitative character of subjective experience", "the explanatory gap between physical processes". Subjuntivo: "Should it transpire that".',
    grammarTheoryIds: ['c2-metalinguistic-hedging', 'c1-complex-noun-phrases', 'c1-subjunctive'],
  },

  {
    id: 'c2-literary-unreliable',
    title: 'Through the Cracked Looking-Glass: Unreliable Narration and the Architecture of Doubt',
    titleEs: 'A través del espejo roto: narración no fiable y la arquitectura de la duda',
    level: 'C2',
    cefrLevel: 6,
    genre: 'literary',
    topic: 'Literary analysis of unreliable narration',
    topicEs: 'Análisis literario de la narración no fiable',
    wordCount: 480,
    text: `Had the narrator of Kazuo Ishiguro's "The Remains of the Day" been forthright about his feelings, there would have been no novel worth writing — or, more precisely, no novel worth reading. It is the systematic suppression of emotional truth, the meticulous construction of a self-serving account of the past, that gives Stevens's narrative its devastating power. What the butler cannot bring himself to say becomes, paradoxically, the only thing the reader truly needs to hear.

The concept of the unreliable narrator, first theorised by Wayne C. Booth in 1961, has since become one of the most productive analytical tools in literary criticism. Yet the term itself is arguably misleading, implying as it does a straightforward binary between reliability and unreliability. In practice, the most compelling instances of narrative unreliability operate along a spectrum — one in which the narrator may be scrupulously accurate about certain facts while remaining profoundly self-deceived about their significance.

Stevens would never have admitted, even to himself, that his decades of slavish devotion to Lord Darlington constituted a form of moral abdication. His narration is not characterised by outright fabrication but by something far more insidious: a pattern of systematic omission and euphemistic reframing that allows him to preserve an image of professional dignity while the foundations of that dignity crumble beneath him.

It is instructive to compare Ishiguro's technique with that of Vladimir Nabokov in "Lolita." Whereas Stevens's unreliability stems from emotional repression, Humbert Humbert's derives from rhetorical virtuosity — a dazzling command of language deployed specifically to aestheticise and thereby obscure the horror of his actions. One might have expected that such transparent manipulation would alienate the reader entirely; instead, Nabokov forces us into a deeply uncomfortable complicity, compelling us to admire the prose even as we recoil from its purpose.

The critical question, then, is not simply whether a narrator is reliable but how and to what end unreliability functions within the text. In some cases, it serves as a vehicle for exploring the limits of self-knowledge — the ways in which individuals construct narratives about their own lives that protect them from truths they cannot bear to confront. In others, it becomes a tool for implicating the reader in the moral complexities of the story, demanding an active, suspicious mode of engagement rather than passive consumption.

What both approaches share is a fundamental scepticism about the transparency of language itself. If narrators cannot be trusted to represent reality faithfully, it follows that the very medium through which stories are told — language — is inherently slippery, shaped as much by what it conceals as by what it reveals. It is this insight that renders unreliable narration not merely a literary device but a philosophical statement about the nature of human communication.`,
    vocabulary: [
      { word: 'forthright', definition: 'direct and outspoken; honest and frank', translation: 'franco, directo' },
      { word: 'insidious', definition: 'proceeding in a gradual, subtle way but with harmful effects', translation: 'insidioso' },
      { word: 'abdication', definition: 'the act of renouncing or giving up a responsibility', translation: 'abdicación, renuncia' },
      { word: 'virtuosity', definition: 'great skill or brilliance in performance or technique', translation: 'virtuosismo' },
      { word: 'complicity', definition: 'involvement as an accomplice in a questionable act', translation: 'complicidad' },
      { word: 'scepticism', definition: 'a doubting or questioning attitude', translation: 'escepticismo' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to the analysis, what makes Stevens an unreliable narrator?', questionEs: 'Según el análisis, ¿qué hace de Stevens un narrador no fiable?', options: ['He deliberately lies about facts', 'He systematically omits and reframes emotional truths', 'He has a poor memory', 'He exaggerates his achievements'], correct: 1, explanationEs: '"not characterised by outright fabrication but by something far more insidious: a pattern of systematic omission and euphemistic reframing."' },
      { id: 'q2', type: 'true-false', question: 'The author argues that the term "unreliable narrator" accurately captures the complexity of the phenomenon.', questionEs: 'El autor sostiene que el término "narrador no fiable" captura con precisión la complejidad del fenómeno.', correct: 'false', explanationEs: '"the term itself is arguably misleading, implying as it does a straightforward binary between reliability and unreliability."' },
      { id: 'q3', type: 'short-answer', question: 'How does Humbert Humbert\'s unreliability differ from Stevens\'s, according to the passage?', questionEs: '¿En qué se diferencia la falta de fiabilidad de Humbert Humbert de la de Stevens, según el pasaje?', correct: 'It stems from rhetorical virtuosity rather than emotional repression', explanationEs: '"Whereas Stevens\'s unreliability stems from emotional repression, Humbert Humbert\'s derives from rhetorical virtuosity."' },
      { id: 'q4', type: 'multiple-choice', question: 'What broader philosophical claim does the author make about unreliable narration?', questionEs: '¿Qué afirmación filosófica más amplia hace el autor sobre la narración no fiable?', options: ['It is a modern invention', 'It reveals that language is inherently unable to represent reality transparently', 'It proves all literature is dishonest', 'It only works in first-person narratives'], correct: 1, explanationEs: '"language — is inherently slippery, shaped as much by what it conceals as by what it reveals."' },
    ],
    readingStrategy: 'Comparative literary analysis — evaluate how different authors employ the same technique to achieve distinct narrative and thematic effects',
    readingStrategyEs: 'Análisis literario comparativo — evalúa cómo diferentes autores emplean la misma técnica para lograr efectos narrativos y temáticos distintos.',
    grammarFocus: 'Past subjunctive / hypothetical meaning: "Had the narrator been forthright... there would have been". Modal perfects: "Stevens would never have admitted", "One might have expected". Evaluative adverbs: "paradoxically", "arguably", "profoundly".',
    grammarFocusEs: 'Subjuntivo pasado / significado hipotético: "Had the narrator been forthright... there would have been". Modales perfectos: "Stevens would never have admitted", "One might have expected". Adverbios evaluativos: "paradoxically", "arguably", "profoundly".',
    grammarTheoryIds: ['c1-subjunctive', 'c1-mixed-conditionals-advanced', 'c2-vague-language'],
  },

  {
    id: 'c2-news-geopolitics',
    title: 'The Fracturing Order: Power Shifts and the Decline of the Rules-Based System',
    titleEs: 'El orden fracturado: cambios de poder y el declive del sistema basado en reglas',
    level: 'C2',
    cefrLevel: 6,
    genre: 'news',
    topic: 'Geopolitical power shifts',
    topicEs: 'Cambios de poder geopolíticos',
    wordCount: 510,
    text: `It has been posited that the post-1945 international order — predicated upon multilateral institutions, collective security arrangements, and the broadly liberal economic framework championed by the United States — is undergoing a transformation so profound as to constitute, in effect, its dissolution. Whether this assessment proves prescient or premature will depend, in no small measure, on the capacity of existing institutions to adapt to a distribution of power that bears increasingly little resemblance to the configuration in which they were conceived.

The rise of China as a near-peer competitor to the United States has fundamentally altered the calculus of global governance. Beijing's assertion of sovereignty over contested maritime territories, its establishment of parallel financial institutions such as the Asian Infrastructure Investment Bank, and its deployment of economic statecraft through the Belt and Road Initiative collectively represent a systematic challenge to the architectural assumptions of the existing order. That this challenge has been mounted not through revolutionary upheaval but through the patient exploitation of the system's own mechanisms makes it all the more formidable.

Russia's invasion of Ukraine in 2022, by contrast, represented a more conventional — and in many respects more destabilising — rupture. The brazen violation of a neighbouring state's territorial integrity laid bare the limitations of a security architecture that had been predicated on the assumption of shared norms. It has since become evident that the deterrent function of international law, already weakened by selective enforcement, may have been dealt a blow from which recovery will prove exceptionally difficult.

The response of the so-called Global South to these developments has defied Western expectations. Rather than rallying behind the rules-based order, a significant number of nations have adopted positions of studied neutrality, calculating — not without justification — that their interests are better served by hedging between competing power centres than by aligning definitively with either. This recalibration reflects not merely opportunism but a deep-seated dissatisfaction with an international system perceived as having been structured to serve the interests of its architects at the expense of the wider membership.

The implications for the coming decades are sobering. A multipolar world, for all its theoretical appeal, carries with it the heightened risk of miscalculation, proxy conflict, and the erosion of the normative frameworks that have, however imperfectly, constrained the exercise of raw power since 1945. The Concert of Europe, the last comparable experiment in multipolarity, ultimately collapsed into the catastrophe of the First World War — a precedent that ought to give pause to those who celebrate the decline of unipolarity with unwarranted enthusiasm.

It would be reductive, however, to characterise the current moment as one of unmitigated decline. The very contestation that threatens the existing order may also, paradoxically, create the conditions for its renewal — provided that the legitimate grievances of marginalised actors are addressed and that the institutional architecture is reformed to reflect the realities of twenty-first-century power rather than the assumptions of 1945.`,
    vocabulary: [
      { word: 'predicated upon', definition: 'based on or founded upon a particular idea or assumption', translation: 'basado en, fundamentado en' },
      { word: 'prescient', definition: 'having or showing knowledge of events before they take place', translation: 'presciente, previsor' },
      { word: 'statecraft', definition: 'the skillful management of state affairs; diplomacy', translation: 'arte de gobernar, diplomacia' },
      { word: 'brazen', definition: 'bold and shameless; without embarrassment', translation: 'descarado' },
      { word: 'unmitigated', definition: 'absolute; not diminished or moderated in any way', translation: 'absoluto, sin paliativos' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How does the article characterise China\'s challenge to the international order?', questionEs: '¿Cómo caracteriza el artículo el desafío de China al orden internacional?', options: ['As a revolutionary military uprising', 'As a patient exploitation of the existing system\'s mechanisms', 'As an economic collapse', 'As a cultural transformation'], correct: 1, explanationEs: '"this challenge has been mounted not through revolutionary upheaval but through the patient exploitation of the system\'s own mechanisms."' },
      { id: 'q2', type: 'true-false', question: 'The article states that the Global South has overwhelmingly supported the Western rules-based order.', questionEs: 'El artículo afirma que el Sur Global ha apoyado abrumadoramente el orden basado en reglas occidental.', correct: 'false', explanationEs: '"Rather than rallying behind the rules-based order, a significant number of nations have adopted positions of studied neutrality."' },
      { id: 'q3', type: 'short-answer', question: 'What historical precedent does the article cite as a warning about multipolarity?', questionEs: '¿Qué precedente histórico cita el artículo como advertencia sobre la multipolaridad?', correct: 'The Concert of Europe and the First World War', explanationEs: '"The Concert of Europe, the last comparable experiment in multipolarity, ultimately collapsed into the catastrophe of the First World War."' },
      { id: 'q4', type: 'multiple-choice', question: 'What is the function of the phrase "It has been posited that" in the opening sentence?', questionEs: '¿Cuál es la función de la frase "It has been posited that" en la oración inicial?', options: ['To state the author\'s personal opinion directly', 'To distance the author from the claim while presenting it for consideration', 'To cite a specific source', 'To express certainty about the fact'], correct: 1, explanationEs: '"It has been posited that" es un recurso de distanciamiento que presenta una idea sin atribuirla a una fuente específica ni comprometerse personalmente con ella.' },
    ],
    readingStrategy: 'Analysing geopolitical discourse — identify framing devices, evaluate the balance between descriptive and evaluative language, and recognise how historical analogies function as argumentative tools',
    readingStrategyEs: 'Analizar discurso geopolítico — identifica recursos de encuadre, evalúa el equilibrio entre lenguaje descriptivo y evaluativo, y reconoce cómo las analogías históricas funcionan como herramientas argumentativas.',
    grammarFocus: 'Complex nominalization: "the patient exploitation of the system\'s own mechanisms", "the erosion of the normative frameworks". Advanced passive / distancing: "It has been posited that", "It has since become evident". Idiomatic expressions: "laid bare", "give pause".',
    grammarFocusEs: 'Nominalización compleja: "the patient exploitation of the system\'s own mechanisms", "the erosion of the normative frameworks". Pasiva avanzada / distanciamiento: "It has been posited that", "It has since become evident". Expresiones idiomáticas: "laid bare", "give pause".',
    grammarTheoryIds: ['c1-nominalization', 'b2-passive-advanced', 'c1-distancing-language'],
  },

  {
    id: 'c2-opinion-language',
    title: 'Whose Words? The Politics of Language and the Language of Politics',
    titleEs: '¿De quién son las palabras? La política del lenguaje y el lenguaje de la política',
    level: 'C2',
    cefrLevel: 6,
    genre: 'opinion',
    topic: 'The politics of language and power',
    topicEs: 'La política del lenguaje y el poder',
    wordCount: 490,
    text: `Is it not remarkable that the species which prides itself above all on its capacity for rational discourse should so consistently deploy language not to illuminate but to obscure? One would think, given the centrality of communication to every human endeavour, that clarity would be prized above all other linguistic virtues. Yet the evidence suggests precisely the opposite: that the most consequential uses of language — in politics, law, diplomacy, and corporate governance — are characterised not by transparency but by its studied avoidance.

Consider the lexicon of modern warfare. Civilians killed by errant missiles are not victims but "collateral damage." Torture is rebranded as "enhanced interrogation techniques." The forcible displacement of populations becomes "population transfer" or, more antiseptically still, "demographic restructuring." In each case, the euphemism performs a specific political function: it interposes a layer of abstraction between the act and its moral reality, rendering the unconscionable merely administrative.

Nowhere is this phenomenon more conspicuous than in the language of economic policy. When governments impose austerity measures that devastate public services, they speak of "fiscal consolidation" and "structural adjustment." When corporations eliminate thousands of jobs, they announce "workforce optimisation" or "right-sizing." The vocabulary is designed, with surgical precision, to divorce policy from consequence, cause from effect, decision from suffering.

But would it not be naive to suppose that this is merely a contemporary affliction? The manipulation of language for political ends is as old as politics itself. Thucydides observed, in his account of the Corcyrean revolution, that "words had to change their ordinary meaning and to take that which was now given them" — a description that could serve, virtually unaltered, as a commentary on any modern political crisis.

What has changed, one might argue, is not the impulse to manipulate but the infrastructure available for its execution. Never before have so few had the capacity to shape the linguistic environment of so many, through media ownership, algorithmic curation, and the industrialisation of public relations. The result is not a marketplace of ideas but something closer to a managed economy of discourse, in which certain framings are amplified and others systematically suppressed.

Rarely does one encounter, in mainstream political discourse, language that confronts uncomfortable realities without euphemistic mediation. This is not accidental; it is structural. Those who control the vocabulary control the boundaries of permissible thought — a principle that Orwell articulated with chilling clarity in his essay "Politics and the English Language" and that subsequent decades have done nothing to invalidate.

The antidote, if one exists, lies not in the futile pursuit of a perfectly neutral language — for no such thing is possible — but in the cultivation of a critical linguistic awareness: the habit of asking, whenever a new term enters the public lexicon, not merely what it means but what it is designed to conceal, who benefits from its adoption, and what alternative framings it forecloses. Only through such vigilance can the citizen hope to resist the quiet tyranny of words deployed in the service of power rather than truth.`,
    vocabulary: [
      { word: 'euphemism', definition: 'a mild or indirect word substituted for one considered too harsh or direct', translation: 'eufemismo' },
      { word: 'unconscionable', definition: 'not right or reasonable; morally unacceptable', translation: 'inconcebible, inadmisible' },
      { word: 'austerity', definition: 'difficult economic conditions created by government measures to reduce public expenditure', translation: 'austeridad' },
      { word: 'curation', definition: 'the selection, organisation, and presentation of content', translation: 'curación, selección' },
      { word: 'foreclose', definition: 'to rule out or prevent a course of action', translation: 'impedir, excluir' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What is the primary function of euphemism in political language, according to the author?', questionEs: '¿Cuál es la función principal del eufemismo en el lenguaje político, según el autor?', options: ['To make language more beautiful', 'To create abstraction that separates acts from their moral reality', 'To simplify complex ideas for the public', 'To honour diplomatic traditions'], correct: 1, explanationEs: '"the euphemism performs a specific political function: it interposes a layer of abstraction between the act and its moral reality."' },
      { id: 'q2', type: 'true-false', question: 'The author argues that linguistic manipulation is a uniquely modern phenomenon.', questionEs: 'El autor sostiene que la manipulación lingüística es un fenómeno exclusivamente moderno.', correct: 'false', explanationEs: '"The manipulation of language for political ends is as old as politics itself." El autor cita a Tucídides como ejemplo antiguo.' },
      { id: 'q3', type: 'find-word', question: 'Identify the rhetorical question the author uses in the opening sentence to establish an ironic tone.', questionEs: 'Identifica la pregunta retórica que el autor usa en la primera oración para establecer un tono irónico.', correct: 'Is it not remarkable that', explanationEs: '"Is it not remarkable that..." es una pregunta retórica irónica que establece desde el inicio la contradicción entre la racionalidad humana y el mal uso del lenguaje.' },
      { id: 'q4', type: 'multiple-choice', question: 'What does the author propose as the "antidote" to linguistic manipulation?', questionEs: '¿Qué propone el autor como "antídoto" contra la manipulación lingüística?', options: ['Creating a perfectly neutral language', 'Banning euphemisms in politics', 'Cultivating critical linguistic awareness', 'Returning to classical rhetoric'], correct: 2, explanationEs: '"the cultivation of a critical linguistic awareness: the habit of asking... not merely what it means but what it is designed to conceal."' },
    ],
    readingStrategy: 'Deconstructing rhetoric — identify how the author uses irony, rhetorical questions, and carefully chosen examples to build a persuasive argument about language itself',
    readingStrategyEs: 'Deconstruir la retórica — identifica cómo el autor usa la ironía, las preguntas retóricas y ejemplos cuidadosamente elegidos para construir un argumento persuasivo sobre el propio lenguaje.',
    grammarFocus: 'Irony and rhetorical questions: "Is it not remarkable that...?", "would it not be naive to suppose...?". Emphatic inversion: "Nowhere is this phenomenon more conspicuous", "Never before have so few", "Rarely does one encounter". Layered argumentation: multiple levels of qualification and nuance within single sentences.',
    grammarFocusEs: 'Ironía y preguntas retóricas: "Is it not remarkable that...?", "would it not be naive to suppose...?". Inversión enfática: "Nowhere is this phenomenon more conspicuous", "Never before have so few", "Rarely does one encounter". Argumentación estratificada: múltiples niveles de matización y matiz dentro de oraciones individuales.',
    grammarTheoryIds: ['c2-pragmatic-implicature', 'c1-inversion', 'c2-pragmatic-implicature'],
  },

  // ── C2 CONT-9 additions ───────────────────────────────────────────────────
  {
    id: 'c2-philosophy-time',
    title: 'The Tyranny of the Present: Temporal Experience and the Architecture of Memory',
    titleEs: 'La tiranía del presente: experiencia temporal y arquitectura de la memoria',
    level: 'C2',
    cefrLevel: 6,
    genre: 'essay',
    topic: 'Philosophy of time and memory',
    topicEs: 'Filosofía del tiempo y la memoria',
    wordCount: 450,
    text: `There is a peculiar asymmetry at the heart of conscious experience: we inhabit only the present, yet we are constituted, in large measure, by the past. The present, paradoxically, resists direct apprehension — the moment one attempts to seize it, it has already elapsed, transmuted into the amber of memory. This conundrum has preoccupied philosophers since Aristotle, who noted the puzzling way in which time seems simultaneously real and yet impossible to locate.

The cognitive scientist would frame the problem differently. Memory, we now understand, is not an archival record but a reconstructive process. Each act of recall is an act of invention: neural traces are reactivated, gaps are filled by inference and expectation, and the result is a plausible narrative rather than a faithful transcript. The memorial past, in other words, is not given but made — and remade with every subsequent act of remembering.

What are the consequences of this insight for our conception of personal identity? If the self is constituted by memory, and memory is constructive rather than reproductive, then the self is, in some sense, a work of ongoing fiction. This is not merely an epistemological curiosity; it carries profound ethical implications. The unreliability of eyewitness testimony, now extensively documented in forensic psychology, is merely the most legally consequential instance of a far more pervasive phenomenon.

Nor is the construction of the past a purely individual enterprise. Collective memory — the shared narrative that communities maintain about their histories — is subject to processes of selection, suppression, and idealisation that parallel those operating at the individual level. Nations remember their foundational myths with extraordinary fidelity while displaying remarkable amnesia about episodes that challenge the preferred self-image. The study of this selective commemoration, sometimes called mnemonic politics, has become one of the most productive intersections of psychology, history, and political theory.

What, then, are we to make of the present? If the past is reconstructed and the future merely projected, the present moment — the locus of actual experience — appears as the only domain of genuine contact with reality. Yet phenomenologists from Husserl to Merleau-Ponty have noted that the experienced present is itself extended: it encompasses what Husserl called "retention" (the just-past) and "protention" (the about-to-come), making it not a durationless point but a temporal arc of becoming. The present, it seems, contains its own temporal depth.`,
    vocabulary: [
      { word: 'conundrum', definition: 'a confusing and difficult problem or question', translation: 'dilema, acertijo' },
      { word: 'reconstructive', definition: 'involving the rebuilding or re-creation of something from available information', translation: 'reconstructivo' },
      { word: 'epistemological', definition: 'relating to the study of knowledge and how we know what we know', translation: 'epistemológico' },
      { word: 'mnemonic', definition: 'relating to or designed to assist the memory', translation: 'mnemonico, relativo a la memoria' },
      { word: 'protention', definition: 'in phenomenology, the immediate anticipation of what is about to occur in the present moment', translation: 'protención' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to the article, what is wrong with the idea that memory is an archival record?', questionEs: '¿Qué problema señala el artículo con la idea de que la memoria es un archivo?', options: ['Archives are too expensive to maintain', 'Memory actively reconstructs the past rather than passively storing it', 'Archives require physical space', 'Memory stores information alphabetically'], correct: 1, explanationEs: '"Memory, we now understand, is not an archival record but a reconstructive process... the result is a plausible narrative rather than a faithful transcript."' },
      { id: 'q2', type: 'true-false', question: 'The author argues that collective memory is more reliable than individual memory.', questionEs: 'El autor argumenta que la memoria colectiva es más fiable que la memoria individual.', correct: 'false', explanationEs: 'El artículo describe cómo la memoria colectiva también sufre "selection, suppression, and idealisation" — procesos paralelos a los individuales.' },
      { id: 'q3', type: 'short-answer', question: 'What does the term "mnemonic politics" refer to in this article?', questionEs: '¿A qué se refiere el término "mnemonic politics" en este artículo?', correct: 'The selective commemoration of collective/national history', explanationEs: '"The study of this selective commemoration, sometimes called mnemonic politics, has become one of the most productive intersections of psychology, history, and political theory."' },
      { id: 'q4', type: 'multiple-choice', question: 'What is the significance of Husserl\'s concepts of "retention" and "protention"?', questionEs: '¿Cuál es la relevancia de los conceptos de "retention" y "protention" de Husserl?', options: ['They prove that memory is unreliable', 'They show the present moment has no real duration', 'They show that the experienced present includes the just-past and about-to-come', 'They explain why archives fail'], correct: 2, explanationEs: '"the experienced present is itself extended: it encompasses... \'retention\' (the just-past) and \'protention\' (the about-to-come)."' },
    ],
    readingStrategy: 'Following a philosophical argument across disciplines — track how the author moves from philosophy to cognitive science to politics, noting how each step builds on the previous one to reach a synthesis',
    readingStrategyEs: 'Seguir un argumento filosófico entre disciplinas — observa cómo el autor se mueve de la filosofía a la ciencia cognitiva y luego a la política, notando cómo cada paso se construye sobre el anterior.',
    grammarFocus: 'Abstract nominalisation: "the architecture of memory", "the construction of the past", "selective commemoration". Hedged attribution: "we now understand", "it seems", phenomenologists... have noted". Contrastive structure: "not... but", "rather than".',
    grammarFocusEs: 'Nominalización abstracta: "the architecture of memory", "the construction of the past". Atribución con distanciamiento: "we now understand", "it seems". Estructura contrastiva: "not... but", "rather than".',
    grammarTheoryIds: ['c1-nominalization', 'c1-distancing-language', 'c2-vague-language'],
  },

  {
    id: 'c2-bioethics-enhancement',
    title: 'Beyond Therapy: Human Enhancement and the Shifting Boundaries of Medicine',
    titleEs: 'Más allá de la terapia: mejora humana y los límites cambiantes de la medicina',
    level: 'C2',
    cefrLevel: 6,
    genre: 'essay',
    topic: 'Bioethics and human enhancement',
    topicEs: 'Bioética y mejora humana',
    wordCount: 470,
    text: `Medicine has traditionally been defined by reference to a norm: the healthy body is the baseline, and the physician's task is to restore patients to it when illness or injury intervenes. This conception — essentially Aristotelian in its grounding — implies a clear distinction between therapy (restoring normal function) and enhancement (improving function beyond the normal baseline). For most of medical history, this distinction seemed self-evident. It no longer does.

The erosion of the therapy-enhancement boundary has been gradual but inexorable. Psychopharmacology offers, alongside treatments for clinical depression, drugs that healthy individuals use to sharpen focus, elevate mood, or reduce the need for sleep. Genetic editing, pending regulatory sanction, could theoretically be applied not only to eliminate heritable disease but to select for traits that are merely desirable rather than medically necessary. The border between correcting deficiency and manufacturing advantage is dissolving.

Defenders of enhancement tend to frame their position in terms of individual autonomy: if a competent adult wishes to augment their cognitive or physical capacities without harming others, on what grounds does the state or the medical profession presume to intervene? This is a powerful argument, and one that liberal political philosophy has found difficult to refute without resorting to premises that beg the question. The most philosophically robust objection is perhaps the one advanced by Michael Sandel, who suggests that the drive to enhancement reflects a troubling "hyperparenting" impulse — the desire to exert total control over the conditions of one's own life and those of one's children, crowding out the virtues of humility and openness to what is given.

A second objection concerns distributive justice. If enhancement technologies are expensive and unevenly available, they risk entrenching inequality not merely in opportunity but in capacity — creating a biological as well as an economic stratification of humanity. The spectre of a two-tier species, in which the enhanced and the unenhanced inhabit incommensurable experiential worlds, is not easily dismissed as science fiction.

What the debate reveals, ultimately, is that medicine cannot evade meta-ethical questions by retreating into clinical neutrality. Every decision about what to treat, and what to leave alone, embeds a normative vision of the good life — whether or not practitioners are conscious of the fact. The precondition for a coherent bioethics of enhancement is therefore not the resolution of disputed empirical questions but the recovery of a shared account of what human flourishing means — an account that a pluralist, liberal democracy is constitutionally ill-equipped to supply.`,
    vocabulary: [
      { word: 'inexorable', definition: 'impossible to stop or prevent; relentless', translation: 'inexorable, implacable' },
      { word: 'sanction', definition: 'official permission or approval', translation: 'autorización, sanción' },
      { word: 'beg the question', definition: 'to assume the truth of the very thing one is trying to prove (logical fallacy)', translation: 'petición de principio' },
      { word: 'incommensurable', definition: 'having no common standard of measurement; too different to be compared', translation: 'inconmensurable' },
      { word: 'stratification', definition: 'the division of a society or group into different levels or layers', translation: 'estratificación' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'Why does the author say the therapy-enhancement distinction "no longer seems self-evident"?', questionEs: '¿Por qué el autor dice que la distinción terapia-mejora "ya no parece evidente"?', options: ['Because all drugs have been banned', 'Because medicine has abandoned ethics', 'Because new technologies blur the line between restoring and improving function', 'Because therapy has become too expensive'], correct: 2, explanationEs: '"The border between correcting deficiency and manufacturing advantage is dissolving."' },
      { id: 'q2', type: 'true-false', question: 'According to the article, liberal political philosophy has successfully refuted the autonomy argument for enhancement.', questionEs: 'Según el artículo, la filosofía política liberal ha refutado con éxito el argumento de la autonomía para la mejora.', correct: 'false', explanationEs: '"This is a powerful argument, and one that liberal political philosophy has found difficult to refute."' },
      { id: 'q3', type: 'short-answer', question: 'What is Michael Sandel\'s main objection to human enhancement?', questionEs: '¿Cuál es la principal objeción de Michael Sandel a la mejora humana?', correct: 'It reflects a "hyperparenting" impulse that crowds out humility and openness to the given', explanationEs: '"the drive to enhancement reflects a troubling \'hyperparenting\' impulse — the desire to exert total control... crowding out the virtues of humility and openness to what is given."' },
      { id: 'q4', type: 'multiple-choice', question: 'What does the author identify as the real precondition for a coherent bioethics of enhancement?', questionEs: '¿Qué identifica el autor como la verdadera condición previa para una bioética coherente de la mejora?', options: ['Better clinical trials', 'A shared account of what human flourishing means', 'Stricter government regulation', 'More affordable enhancement technologies'], correct: 1, explanationEs: '"The precondition for a coherent bioethics of enhancement is... the recovery of a shared account of what human flourishing means."' },
    ],
    readingStrategy: 'Reading a philosophical policy argument — identify the problem, the competing positions, the strongest objection to each, and the author\'s own meta-level conclusion',
    readingStrategyEs: 'Leer un argumento filosófico de política — identifica el problema, las posiciones en conflicto, la objeción más fuerte a cada una, y la conclusión meta-nivel del autor.',
    grammarFocus: 'Complex relative clauses: "one that liberal political philosophy has found difficult to refute". Passive distancing in academic writing: "It has traditionally been defined", "is not easily dismissed". Conditional modality: "could theoretically be applied", "risk entrenching".',
    grammarFocusEs: 'Oraciones de relativo complejas. Pasiva de distanciamiento académico: "It has traditionally been defined". Modalidad condicional: "could theoretically be applied".',
    grammarTheoryIds: ['c1-distancing-language', 'b2-passive-advanced', 'c1-mixed-conditionals-advanced'],
  },

  {
    id: 'c2-linguistics-sapir-whorf',
    title: 'Does Language Shape Thought? Revisiting the Sapir–Whorf Hypothesis',
    titleEs: '¿Moldea el lenguaje el pensamiento? Revisando la hipótesis Sapir-Whorf',
    level: 'C2',
    cefrLevel: 6,
    genre: 'essay',
    topic: 'Language and cognition — Sapir-Whorf hypothesis',
    topicEs: 'Lenguaje y cognición — hipótesis de Sapir-Whorf',
    wordCount: 460,
    text: `Few ideas in the human sciences have enjoyed quite so dramatic a reversal of fortune as the Sapir–Whorf hypothesis. Proposed in its strong form in the mid-twentieth century, linguistic relativity held that the structure of a language determines its speakers' worldview — that Hopi speakers, by virtue of their language's treatment of time, inhabited a categorically different temporal experience from English speakers. The thesis was audacious and appealing; it was also, as subsequent empirical research consistently demonstrated, substantially wrong.

The collapse of strong Whorfianism in the second half of the twentieth century was precipitated by advances in cognitive science and cross-linguistic psychology. Pinker, among others, mounted a systematic assault on the hypothesis, arguing for the existence of a "language of thought" — mentalese — that is independent of and prior to any natural language. Colour perception studies proved particularly damaging: contrary to Whorfian predictions, speakers of languages with fewer colour terms did not perceive fewer colours but merely labelled them less precisely.

Yet the pendulum, as it so often does in intellectual history, has swung back. A more nuanced position — "weak" or "soft" Whorfianism — has accumulated impressive empirical support over the past two decades. The work of Lera Boroditsky and others has demonstrated that linguistic differences do exert measurable, if modest, influences on cognition. Russian speakers, who obligatorily distinguish light and dark blue with separate lexical items, respond marginally faster to colour discrimination tasks that cross this boundary. Spanish and English speakers, whose languages encode agency differently in descriptions of accidents, differ in their subsequent attribution of blame.

These effects are real, but they are probabilistic rather than deterministic, moderate rather than totalising, and often dependent on the specific cognitive domain under examination. Language nudges thought; it does not imprison it. The strong thesis was defeated; the weak thesis has been vindicated in a form its original proponents might barely recognise.

What remains genuinely open is the question of linguistic influence on high-level conceptual thought — the kind of abstract reasoning that underlies moral judgment, scientific theorising, or aesthetic evaluation. Here the evidence is thinner, the methodological challenges more formidable, and the theoretical stakes considerably higher. If it were to emerge that speakers of different languages not only label reality differently but reason about it differently at a fundamental level, the implications for translation theory, cross-cultural ethics, and international legal instruments would be considerable. The question is no longer whether language shapes thought, but how much, in which domains, and to what practical effect.`,
    vocabulary: [
      { word: 'precipitated', definition: 'caused something to happen suddenly or prematurely', translation: 'precipitado, causado' },
      { word: 'mentalese', definition: 'the hypothetical language-independent medium of mental representation', translation: 'lenguaje mental (mentalés)' },
      { word: 'obligatorily', definition: 'in a way that is required by the grammatical rules of a language', translation: 'obligatoriamente' },
      { word: 'probabilistic', definition: 'based on probability rather than certainty; not always producing the same result', translation: 'probabilístico' },
      { word: 'vindicated', definition: 'shown to be right after being questioned or doubted', translation: 'reivindicado, vindicado' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What was the main empirical challenge that undermined the strong Whorfian thesis?', questionEs: '¿Cuál fue el principal desafío empírico que debilitó la tesis whorfiana fuerte?', options: ['Philosophers found it logically contradictory', 'Colour perception studies showed speakers of all languages perceive the same colours', 'Hopi speakers proved to share the same temporal experience as English speakers', 'Pinker invented a better theory'], correct: 1, explanationEs: '"speakers of languages with fewer colour terms did not perceive fewer colours but merely labelled them less precisely."' },
      { id: 'q2', type: 'true-false', question: 'The article concludes that the Sapir-Whorf hypothesis has been completely discredited.', questionEs: 'El artículo concluye que la hipótesis de Sapir-Whorf ha quedado completamente desacreditada.', correct: 'false', explanationEs: 'El artículo describe cómo la versión "débil" ha sido "vindicated" — confirmada — con apoyo empírico impresionante.' },
      { id: 'q3', type: 'short-answer', question: 'What is the difference between "strong" and "weak" Whorfianism as described in the article?', questionEs: '¿Cuál es la diferencia entre el Whorfianism "fuerte" y "débil" según el artículo?', correct: 'Strong: language determines worldview; weak: language has modest, measurable, probabilistic effects on cognition', explanationEs: '"Language nudges thought; it does not imprison it." La versión fuerte fue refutada; la débil, parcialmente confirmada.' },
      { id: 'q4', type: 'multiple-choice', question: 'What is described as "genuinely open" at the end of the article?', questionEs: '¿Qué se describe como "genuinely open" al final del artículo?', options: ['Whether colour perception differs between languages', 'Whether the Hopi language is unusual', 'Whether language influences high-level conceptual and moral reasoning', 'Whether Pinker\'s theory is correct'], correct: 2, explanationEs: '"What remains genuinely open is the question of linguistic influence on high-level conceptual thought — the kind of abstract reasoning that underlies moral judgment."' },
    ],
    readingStrategy: 'Tracking a thesis through time — identify how the article presents the rise, fall, and partial rehabilitation of a single scientific hypothesis, paying attention to the qualifications at each stage',
    readingStrategyEs: 'Seguir una tesis a través del tiempo — identifica cómo el artículo presenta el auge, caída y rehabilitación parcial de una hipótesis científica, prestando atención a las matizaciones en cada etapa.',
    grammarFocus: 'Passive voice for scientific objectivity: "has been demonstrated", "were demonstrated", "has accumulated". Concession patterns: "The thesis was audacious... it was also... substantially wrong". Hedged future conditional: "If it were to emerge that... the implications would be considerable" (formal unreal conditional).',
    grammarFocusEs: 'Voz pasiva científica. Concesión: "The thesis was audacious... it was also... substantially wrong". Condicional hipotético formal: "If it were to emerge that...".',
    grammarTheoryIds: ['b2-passive-advanced', 'c1-mixed-conditionals-advanced', 'c1-distancing-language'],
  },

  // ─────────────────────────────────────────
  // NEW TEXTS (User Request)
  // ─────────────────────────────────────────

  {
    id: 'a1-daily-routines',
    title: 'My Daily Routine',
    titleEs: 'Mi Rutina Diaria',
    level: 'A1',
    cefrLevel: 1,
    genre: 'description',
    topic: 'Daily routines',
    topicEs: 'Rutinas diarias',
    wordCount: 92,
    text: `My name is Emma. I wake up at seven o'clock every morning. First, I have a shower and get dressed. Then I eat breakfast. I usually have cereal and milk. I leave home at half past eight and walk to work. I work in a small office. I finish work at five o'clock. In the evening, I cook dinner and watch television. I go to bed at ten o'clock. On weekends, I sleep later and meet my friends. I love my routine because it is simple and calm.`,
    vocabulary: [
      { word: 'wake up', definition: 'stop sleeping and open your eyes', translation: 'despertarse' },
      { word: 'get dressed', definition: 'put on your clothes', translation: 'vestirse' },
      { word: 'cereal', definition: 'breakfast food made from grains', translation: 'cereales' },
      { word: 'routine', definition: 'a regular way of doing things', translation: 'rutina' },
      { word: 'calm', definition: 'peaceful, not busy or noisy', translation: 'tranquilo/a' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What time does Emma wake up?', questionEs: '¿A qué hora se despierta Emma?', options: ['Six o\'clock', 'Seven o\'clock', 'Eight o\'clock', 'Nine o\'clock'], correct: 1, explanationEs: '"I wake up at seven o\'clock every morning."' },
      { id: 'q2', type: 'multiple-choice', question: 'What does Emma usually have for breakfast?', questionEs: '¿Qué desayuna Emma normalmente?', options: ['Toast and coffee', 'Cereal and milk', 'Eggs and juice', 'Fruit and yogurt'], correct: 1, explanationEs: '"I usually have cereal and milk."' },
      { id: 'q3', type: 'true-false', question: 'Emma drives to work.', questionEs: 'Emma va en coche al trabajo.', correct: 'false', explanationEs: '"I walk to work" — va caminando, no en coche.' },
      { id: 'q4', type: 'multiple-choice', question: 'What does Emma do in the evening?', questionEs: '¿Qué hace Emma por la noche?', options: ['She goes to the gym', 'She cooks dinner and watches television', 'She reads books', 'She studies English'], correct: 1, explanationEs: '"In the evening, I cook dinner and watch television."' },
    ],
    readingStrategy: 'Reading for detail — find specific facts about a daily schedule',
    readingStrategyEs: 'Lectura detallada — busca hechos específicos sobre un horario diario',
    grammarFocus: 'Present Simple for routines; time expressions (at seven, at half past eight)',
    grammarFocusEs: 'Presente Simple para rutinas; expresiones de tiempo (at seven, at half past eight)',
  },

  {
    id: 'b2-technology-education',
    title: 'Technology in Education: Opportunities and Challenges',
    titleEs: 'Tecnología en la Educación: Oportunidades y Desafíos',
    level: 'B2',
    cefrLevel: 4,
    genre: 'article',
    topic: 'Technology and education',
    topicEs: 'Tecnología y educación',
    wordCount: 278,
    text: `The integration of technology into education has transformed the way students learn and teachers instruct. Digital tools such as interactive whiteboards, educational apps, and online learning platforms have become commonplace in classrooms across the developed world. Proponents argue that technology personalises learning, allowing students to progress at their own pace and access resources that were previously unavailable. Furthermore, it prepares young people for a workforce that increasingly demands digital literacy.

However, critics raise legitimate concerns. The digital divide — the gap between those who have access to technology and those who do not — threatens to widen educational inequality. Students from disadvantaged backgrounds may lack the devices and internet connectivity required for effective online learning. Moreover, excessive screen time has been linked to attention difficulties and reduced physical activity among children. Some educators worry that an over-reliance on technology may undermine the development of critical thinking skills, as students may become accustomed to finding quick answers rather than engaging in deep, sustained inquiry.

The most balanced approach, perhaps, is to view technology as a tool rather than a replacement for traditional pedagogy. When used thoughtfully — to supplement rather than substitute for human interaction, to enhance rather than replace hands-on experimentation — technology can enrich the learning experience. The key lies in ensuring equitable access, training teachers to use these tools effectively, and maintaining a focus on the fundamental goals of education: fostering curiosity, creativity, and the ability to think independently.`,
    vocabulary: [
      { word: 'integration', definition: 'the process of combining things into a whole', translation: 'integración' },
      { word: 'digital divide', definition: 'the gap between people who have and do not have access to technology', translation: 'brecha digital' },
      { word: 'literacy', definition: 'the ability to use a particular skill or type of knowledge', translation: 'competencia, alfabetización' },
      { word: 'pedagogy', definition: 'the method and practice of teaching', translation: 'pedagogía' },
      { word: 'equitable', definition: 'fair and equal for everyone', translation: 'equitativo/a' },
      { word: 'sustained', definition: 'continuing for a long time without stopping', translation: 'sostenido/a, prolongado/a' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to proponents, what is one benefit of technology in education?', questionEs: 'Según los defensores, ¿cuál es un beneficio de la tecnología en la educación?', options: ['It reduces teacher workload', 'It personalises learning and allows students to progress at their own pace', 'It eliminates the need for exams', 'It replaces teachers entirely'], correct: 1, explanationEs: '"technology personalises learning, allowing students to progress at their own pace"' },
      { id: 'q2', type: 'multiple-choice', question: 'What is the "digital divide"?', questionEs: '¿Qué es la "brecha digital"?', options: ['A type of computer screen', 'The gap between those who have and do not have access to technology', 'A teaching method', 'A software programme'], correct: 1, explanationEs: '"the gap between those who have access to technology and those who do not"' },
      { id: 'q3', type: 'true-false', question: 'The article suggests that technology should replace traditional teaching methods completely.', questionEs: 'El artículo sugiere que la tecnología debe reemplazar completamente los métodos de enseñanza tradicionales.', correct: 'false', explanationEs: '"to view technology as a tool rather than a replacement for traditional pedagogy" — la tecnología debe complementar, no reemplazar.' },
      { id: 'q4', type: 'short-answer', question: 'What does the article say are the fundamental goals of education?', questionEs: '¿Cuáles son los objetivos fundamentales de la educación según el artículo?', correct: 'Fostering curiosity, creativity, and the ability to think independently', explanationEs: '"fostering curiosity, creativity, and the ability to think independently"' },
    ],
    readingStrategy: 'Identifying argument structure — main points, evidence, counterarguments, and conclusion',
    readingStrategyEs: 'Identificar la estructura argumentativa — puntos principales, evidencia, contraargumentos y conclusión',
    grammarFocus: 'Linking words for contrast and addition: However, Furthermore, Moreover; passive voice',
    grammarFocusEs: 'Conectores de contraste y adición: However, Furthermore, Moreover; voz pasiva',
  },

  {
    id: 'c2-philosophy-language',
    title: 'The Philosophy of Language: Meaning, Reference, and Reality',
    titleEs: 'La Filosofía del Lenguaje: Significado, Referencia y Realidad',
    level: 'C2',
    cefrLevel: 6,
    genre: 'essay',
    topic: 'Philosophy of language',
    topicEs: 'Filosofía del lenguaje',
    wordCount: 382,
    text: `The philosophy of language occupies a central position within analytic philosophy, for it addresses a question that lies at the intersection of metaphysics, epistemology, and logic: how do words and sentences succeed in representing the world? The problem is deceptively simple. When I utter the sentence "The cat is on the mat," I am making a claim about a particular state of affairs. But what, precisely, is the relationship between those sounds or marks on paper and the reality they purport to describe?

One influential answer, associated with Frege and later developed by philosophers such as Russell and Strawson, distinguishes between sense and reference. The reference of an expression is the object or objects in the world to which it refers — the actual cat, the actual mat. The sense, by contrast, is the mode of presentation, the way in which that object is given to us. Two expressions can have the same reference but different senses: "the morning star" and "the evening star" both refer to Venus, yet they convey different information. This distinction proved crucial for solving puzzles about identity statements and the nature of meaning.

A more radical challenge emerged with the work of Wittgenstein, whose later philosophy emphasised that meaning is use. Words do not derive their significance from an abstract correspondence with reality; rather, they acquire meaning through their role in what he called "language games" — the myriad activities and practices in which language is embedded. To understand a word is not to grasp a mental representation or a set of truth conditions, but to know how to use it appropriately in context. This view has profound implications: it suggests that meaning is inherently social, that there can be no private language, and that philosophical confusion often arises when we take words out of their natural habitat and ask what they "really" mean in isolation.

Contemporary debates continue to grapple with these questions. The tension between a representational view of language — in which words mirror or map onto reality — and a use-based or pragmatic view — in which meaning emerges from communicative practice — remains unresolved. What is clear is that the philosophy of language is not merely an abstract intellectual pursuit; it shapes our understanding of truth, knowledge, and the very possibility of human communication.`,
    vocabulary: [
      { word: 'deceptively', definition: 'in a way that is misleading; seeming simpler than it really is', translation: 'engañosamente' },
      { word: 'purport', definition: 'claim or appear to be something', translation: 'pretender, afirmar' },
      { word: 'mode of presentation', definition: 'the way in which something is given or shown to us', translation: 'modo de presentación' },
      { word: 'myriad', definition: 'a very large number of something', translation: 'miríada, infinidad' },
      { word: 'inherently', definition: 'in a way that is a basic part of something', translation: 'intrínsecamente' },
      { word: 'pragmatic', definition: 'relating to practical use rather than theory', translation: 'pragmático/a' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to Frege\'s distinction, what is the difference between "sense" and "reference"?', questionEs: 'Según la distinción de Frege, ¿cuál es la diferencia entre "sentido" y "referencia"?', options: ['Sense is the sound, reference is the meaning', 'Reference is the object in the world; sense is the mode of presentation', 'They are the same thing', 'Sense is always more important than reference'], correct: 1, explanationEs: '"The reference... is the object... to which it refers... The sense... is the mode of presentation, the way in which that object is given to us."' },
      { id: 'q2', type: 'multiple-choice', question: 'What example does the text give of two expressions with the same reference but different senses?', questionEs: '¿Qué ejemplo da el texto de dos expresiones con la misma referencia pero distinto sentido?', options: ['"Cat" and "mat"', '"The morning star" and "the evening star"', '"Word" and "sentence"', '"Truth" and "knowledge"'], correct: 1, explanationEs: '"the morning star" and "the evening star" both refer to Venus, yet they convey different information.' },
      { id: 'q3', type: 'true-false', question: 'Wittgenstein\'s later philosophy holds that meaning comes from an abstract correspondence between words and reality.', questionEs: 'La filosofía tardía de Wittgenstein sostiene que el significado proviene de una correspondencia abstracta entre palabras y realidad.', correct: 'false', explanationEs: '"Words do not derive their significance from an abstract correspondence with reality; rather, they acquire meaning through their role in... language games."' },
      { id: 'q4', type: 'short-answer', question: 'What two opposing views of language does the text say remain in tension in contemporary debates?', questionEs: '¿Qué dos visiones opuestas del lenguaje dice el texto que permanecen en tensión en los debates contemporáneos?', correct: 'A representational view (words mirror reality) vs a use-based or pragmatic view (meaning emerges from communicative practice)', explanationEs: '"The tension between a representational view... and a use-based or pragmatic view... remains unresolved."' },
    ],
    readingStrategy: 'Reading dense academic prose — identify key concepts, distinctions, and the progression of philosophical arguments',
    readingStrategyEs: 'Leer prosa académica densa — identifica conceptos clave, distinciones y la progresión de argumentos filosóficos',
    grammarFocus: 'Complex noun phrases; passive voice for objectivity; hedging: "proved crucial", "remains unresolved", "What is clear is that"',
    grammarFocusEs: 'Frases nominales complejas; voz pasiva para objetividad; matización: "proved crucial", "remains unresolved"',
  },

  // ─────────────────────────────────────────
  // NEW TEXTS (6 texts, 1 per CEFR level)
  // ─────────────────────────────────────────

  {
    id: 'a1-description-neighborhood',
    title: 'My Neighborhood',
    titleEs: 'Mi Barrio',
    level: 'A1',
    cefrLevel: 1,
    genre: 'description',
    topic: 'Places / Community',
    topicEs: 'Lugares / Comunidad',
    wordCount: 80,
    text: `I live in a quiet neighborhood in the north of the city. There is a small park near my house. Children play there every afternoon. Next to the park there is a supermarket. I buy food there every week.

There are two cafés on my street. I often have coffee with my friends on Saturday morning. The people in my neighborhood are very friendly. We say hello when we meet in the street.

There is a bus stop at the end of my road. The bus goes to the city centre in fifteen minutes. I like my neighborhood because it is safe and peaceful.`,
    vocabulary: [
      { word: 'neighborhood', definition: 'the area where you live', translation: 'barrio, vecindario' },
      { word: 'peaceful', definition: 'calm and quiet', translation: 'tranquilo/a, pacífico/a' },
      { word: 'bus stop', definition: 'a place where buses pick up passengers', translation: 'parada de autobús' },
      { word: 'friendly', definition: 'kind and pleasant', translation: 'amable, simpático/a' },
      { word: 'often', definition: 'many times, frequently', translation: 'a menudo, frecuentemente' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'Where is the park?', questionEs: '¿Dónde está el parque?', options: ['In the city centre', 'Near the author\'s house', 'Next to the supermarket', 'At the bus stop'], correct: 1, explanationEs: '"There is a small park near my house."' },
      { id: 'q2', type: 'true-false', question: 'The author has coffee with friends on Sunday.', questionEs: 'El autor toma café con amigos los domingos.', correct: 'false', explanationEs: '"I often have coffee with my friends on Saturday morning."' },
      { id: 'q3', type: 'short-answer', question: 'How long does the bus take to reach the city centre?', questionEs: '¿Cuánto tarda el autobús en llegar al centro?', correct: 'Fifteen minutes', explanationEs: '"The bus goes to the city centre in fifteen minutes."' },
      { id: 'q4', type: 'multiple-choice', question: 'Why does the author like the neighborhood?', questionEs: '¿Por qué le gusta al autor su barrio?', options: ['It is big', 'It is safe and peaceful', 'There are many shops', 'It is near the beach'], correct: 1, explanationEs: '"I like my neighborhood because it is safe and peaceful."' },
    ],
    readingStrategy: 'Reading for detail — identify key places and facts about a location',
    readingStrategyEs: 'Lectura detallada — identifica lugares clave y hechos sobre una ubicación',
    grammarFocus: 'There is/There are; Present Simple for habits; prepositions of place (near, next to, at the end of)',
    grammarFocusEs: 'There is/There are; Presente Simple para hábitos; preposiciones de lugar',
    grammarTheoryIds: ['a1-there-is-are'],
  },

  {
    id: 'a2-narrative-birthday',
    title: 'A Birthday Party',
    titleEs: 'Una Fiesta de Cumpleaños',
    level: 'A2',
    cefrLevel: 2,
    genre: 'narrative',
    topic: 'Celebrations / Social events',
    topicEs: 'Celebraciones / Eventos sociales',
    wordCount: 120,
    text: `Last Saturday was my friend Lucy's birthday. She invited me to her party at her house. I bought a present for her — a nice book about travel. I arrived at seven o'clock in the evening.

When I arrived, there were already about fifteen people there. Lucy's mother had made a big chocolate cake. We sang "Happy Birthday" and Lucy blew out the candles. She made a wish and we all clapped.

After the cake, we played some games. We had a lot of fun! At ten o'clock, I said goodbye and went home. I was tired but very happy. It was a wonderful party and I will never forget it.`,
    vocabulary: [
      { word: 'invite', definition: 'to ask someone to come to an event', translation: 'invitar' },
      { word: 'blow out', definition: 'to extinguish by blowing', translation: 'apagar (soplando)' },
      { word: 'wish', definition: 'a silent hope or desire (often on birthdays)', translation: 'deseo' },
      { word: 'clap', definition: 'to hit your hands together to show approval', translation: 'aplaudir' },
      { word: 'wonderful', definition: 'very good, excellent', translation: 'maravilloso/a' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What did the author buy for Lucy?', questionEs: '¿Qué compró el autor para Lucy?', options: ['A chocolate cake', 'A travel book', 'Candles', 'A game'], correct: 1, explanationEs: '"I bought a present for her — a nice book about travel."' },
      { id: 'q2', type: 'true-false', question: 'Lucy\'s mother made the cake.', questionEs: 'La madre de Lucy hizo la tarta.', correct: 'true', explanationEs: '"Lucy\'s mother had made a big chocolate cake."' },
      { id: 'q3', type: 'multiple-choice', question: 'What did they do after the cake?', questionEs: '¿Qué hicieron después de la tarta?', options: ['They went home', 'They played games', 'They sang again', 'They ate more food'], correct: 1, explanationEs: '"After the cake, we played some games."' },
      { id: 'q4', type: 'short-answer', question: 'What time did the author leave the party?', questionEs: '¿A qué hora se fue el autor de la fiesta?', correct: 'Ten o\'clock', explanationEs: '"At ten o\'clock, I said goodbye and went home."' },
    ],
    readingStrategy: 'Following a narrative sequence — notice time order and events',
    readingStrategyEs: 'Seguir una secuencia narrativa — fíjate en el orden temporal y los eventos',
    grammarFocus: 'Past Simple for completed events; time expressions (last Saturday, at seven, after the cake)',
    grammarFocusEs: 'Pasado Simple para eventos completados; expresiones de tiempo',
    grammarTheoryIds: ['a2-past-simple'],
  },

  {
    id: 'b1-opinion-social-media-teens',
    title: 'Social Media and Teenagers',
    titleEs: 'Redes Sociales y Adolescentes',
    level: 'B1',
    cefrLevel: 3,
    genre: 'opinion',
    topic: 'Technology / Youth and society',
    topicEs: 'Tecnología / Juventud y sociedad',
    wordCount: 200,
    text: `Social media has become a central part of teenage life. Most teenagers spend several hours a day on platforms like Instagram, TikTok, and Snapchat. But is this good or bad for them?

On the positive side, social media helps young people stay connected with friends and family. It can also be a place to learn new things, discover hobbies, and find support when they feel alone. Many teenagers say that social media makes them feel part of a community.

However, there are serious concerns. Studies show that too much time on social media can harm mental health. Teenagers often compare themselves to others and feel that their lives are not good enough. Cyberbullying is another problem — hurtful messages can spread quickly and are difficult to escape. Sleep is also affected, as many teenagers use their phones late at night.

In my opinion, social media is neither completely good nor completely bad. The key is balance. Parents and schools should help teenagers use social media in a healthy way. Limiting screen time and talking openly about the risks can make a real difference.`,
    vocabulary: [
      { word: 'cyberbullying', definition: 'bullying or harassment through digital means', translation: 'ciberacoso' },
      { word: 'concern', definition: 'worry or anxiety about something', translation: 'preocupación' },
      { word: 'balance', definition: 'a state of equilibrium; not too much of one thing', translation: 'equilibrio' },
      { word: 'screen time', definition: 'time spent looking at phones, tablets, or computers', translation: 'tiempo de pantalla' },
      { word: 'support', definition: 'help or encouragement', translation: 'apoyo' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to the text, what is ONE benefit of social media for teenagers?', questionEs: 'Según el texto, ¿cuál es UN beneficio de las redes sociales para adolescentes?', options: ['It improves sleep', 'It helps them stay connected with friends and family', 'It prevents cyberbullying', 'It makes them study more'], correct: 1, explanationEs: '"social media helps young people stay connected with friends and family."' },
      { id: 'q2', type: 'multiple-choice', question: 'What problem does the text mention about social media and sleep?', questionEs: '¿Qué problema menciona el texto sobre redes sociales y sueño?', options: ['Teenagers sleep too much', 'Many teenagers use their phones late at night', 'Social media has no effect on sleep', 'Schools ban phones at night'], correct: 1, explanationEs: '"Many teenagers use their phones late at night."' },
      { id: 'q3', type: 'true-false', question: 'The author thinks social media is completely bad for teenagers.', questionEs: 'El autor piensa que las redes sociales son completamente malas para los adolescentes.', correct: 'false', explanationEs: '"social media is neither completely good nor completely bad. The key is balance."' },
      { id: 'q4', type: 'short-answer', question: 'What does the author suggest can help teenagers use social media in a healthy way?', questionEs: '¿Qué sugiere el autor que puede ayudar a los adolescentes a usar las redes de forma saludable?', correct: 'Limiting screen time and talking openly about the risks', explanationEs: '"Limiting screen time and talking openly about the risks can make a real difference."' },
    ],
    readingStrategy: 'Identifying opinion structure — for/against points and the writer\'s conclusion',
    readingStrategyEs: 'Identificar la estructura de opinión — puntos a favor/en contra y la conclusión del autor',
    grammarFocus: 'On the positive side / However — presenting balanced arguments; In my opinion',
    grammarFocusEs: '"On the positive side" / "However" — presentar argumentos equilibrados',
    grammarTheoryIds: ['b1-linking-words'],
  },

  {
    id: 'b2-article-remote-revolution',
    title: 'Remote Work Revolution',
    titleEs: 'La Revolución del Teletrabajo',
    level: 'B2',
    cefrLevel: 4,
    genre: 'article',
    topic: 'Work / Technology and society',
    topicEs: 'Trabajo / Tecnología y sociedad',
    wordCount: 300,
    text: `The remote work revolution has transformed how millions of people earn a living. What began as an emergency measure during the pandemic has evolved into a permanent shift for many industries. Companies that once insisted on office presence now offer flexible arrangements, and employees have come to expect them.

Proponents argue that remote work increases productivity. Without long commutes, workers gain hours each week. They can focus in quiet environments and design their schedules around their most productive hours. Furthermore, companies can tap into a global talent pool, hiring the best candidates regardless of where they live. This has been a boon for people in rural areas or those with caregiving responsibilities who previously had limited options.

Critics, however, point to significant drawbacks. Collaboration suffers when teams are dispersed; spontaneous conversations and creative brainstorming are harder to replicate online. Junior employees miss out on informal mentoring and the subtle learning that happens in shared spaces. Company culture can erode when people rarely meet in person. There is also the risk of burnout, as the boundary between work and home blurs for those who work from their living rooms.

The future is likely to be hybrid. Many organisations have settled on a model of two or three days in the office, with the rest from home. This compromise aims to capture the benefits of both worlds. Whether it will succeed in the long term remains to be seen, but the remote work revolution has already left an indelible mark on the world of work.`,
    vocabulary: [
      { word: 'commute', definition: 'the journey to and from work', translation: 'desplazamiento al trabajo' },
      { word: 'boon', definition: 'something helpful or beneficial', translation: 'beneficio, bendición' },
      { word: 'dispersed', definition: 'spread over a wide area', translation: 'disperso' },
      { word: 'erode', definition: 'gradually wear away or weaken', translation: 'erosionar, debilitar' },
      { word: 'indelible', definition: 'cannot be removed or forgotten', translation: 'indeleble' },
      { word: 'blur', definition: 'become unclear or less distinct', translation: 'difuminar, desdibujar' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to proponents, how does remote work affect productivity?', questionEs: 'Según los defensores, ¿cómo afecta el teletrabajo a la productividad?', options: ['It decreases it', 'It increases it', 'It has no effect', 'It only helps senior staff'], correct: 1, explanationEs: '"Proponents argue that remote work increases productivity."' },
      { id: 'q2', type: 'multiple-choice', question: 'What do critics say is a problem for junior employees?', questionEs: '¿Qué dicen los críticos que es un problema para los empleados junior?', options: ['They work too many hours', 'They miss informal mentoring and learning in shared spaces', 'They earn less money', 'They prefer the office'], correct: 1, explanationEs: '"Junior employees miss out on informal mentoring and the subtle learning that happens in shared spaces."' },
      { id: 'q3', type: 'true-false', question: 'The article concludes that remote work will completely replace office work.', questionEs: 'El artículo concluye que el teletrabajo reemplazará completamente el trabajo en oficina.', correct: 'false', explanationEs: '"The future is likely to be hybrid... two or three days in the office, with the rest from home."' },
      { id: 'q4', type: 'short-answer', question: 'What model have many organisations settled on?', questionEs: '¿Qué modelo han adoptado muchas organizaciones?', correct: 'Hybrid — two or three days in the office, rest from home', explanationEs: '"a model of two or three days in the office, with the rest from home."' },
    ],
    readingStrategy: 'Recognising argument structure — advantages, disadvantages, and balanced conclusion',
    readingStrategyEs: 'Reconocer la estructura argumentativa — ventajas, desventajas y conclusión equilibrada',
    grammarFocus: 'Discourse markers: Furthermore, However, There is also; passive and active voice',
    grammarFocusEs: 'Marcadores del discurso: Furthermore, However; voz pasiva y activa',
    grammarTheoryIds: ['b2-participle-clauses'],
  },

  {
    id: 'c1-essay-ai-ethics',
    title: 'Artificial Intelligence Ethics',
    titleEs: 'Ética de la Inteligencia Artificial',
    level: 'C1',
    cefrLevel: 5,
    genre: 'essay',
    topic: 'Technology / Ethics and society',
    topicEs: 'Tecnología / Ética y sociedad',
    wordCount: 400,
    text: `The rapid advancement of artificial intelligence has prompted a profound ethical debate. As systems become capable of tasks that were once exclusively human — from medical diagnosis to legal analysis, from creative composition to autonomous decision-making — society is compelled to confront questions that philosophers have long pondered in the abstract. What obligations do we owe to entities that may exhibit intelligence? How do we ensure that the benefits of AI are distributed fairly? And who bears responsibility when an autonomous system causes harm?

One of the most pressing concerns is bias. AI systems are trained on data produced by humans, and that data often reflects historical inequalities and prejudices. A hiring algorithm trained on decades of employment records may perpetuate discrimination against underrepresented groups. A facial recognition system may perform less accurately for certain demographics. Addressing these issues requires not only technical solutions but a commitment to auditing, transparency, and diverse representation in the teams that build these systems.

A second cluster of concerns centres on autonomy and accountability. When a self-driving car is involved in an accident, who is liable — the manufacturer, the software developer, the owner, or the AI itself? Legal frameworks have not kept pace with technological change. Similarly, the use of AI in warfare, surveillance, and criminal justice raises acute questions about human agency and the right to explanation. Many argue that decisions that significantly affect human lives should not be made by opaque algorithms.

A third dimension is the long-term trajectory of AI development. Some researchers warn of existential risks: superintelligent systems that could act in ways misaligned with human values. Others dismiss such scenarios as speculative. Regardless of one's position, it is clear that the ethical governance of AI will require sustained, multidisciplinary effort — involving technologists, ethicists, policymakers, and the broader public. The choices we make in the coming decades will shape not only the role of AI in society but the very nature of that society itself.`,
    vocabulary: [
      { word: 'perpetuate', definition: 'to cause something to continue indefinitely', translation: 'perpetuar' },
      { word: 'opaque', definition: 'not transparent; difficult to understand', translation: 'opaco, poco transparente' },
      { word: 'misaligned', definition: 'not in agreement or harmony', translation: 'desalineado, en desacuerdo' },
      { word: 'liability', definition: 'legal responsibility for something', translation: 'responsabilidad legal' },
      { word: 'auditing', definition: 'systematic examination or review', translation: 'auditoría, revisión' },
      { word: 'trajectory', definition: 'the path of development over time', translation: 'trayectoria' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to the text, why might a hiring algorithm perpetuate discrimination?', questionEs: 'Según el texto, ¿por qué un algoritmo de contratación podría perpetuar la discriminación?', options: ['Because AI is inherently biased', 'Because it is trained on data that reflects historical inequalities', 'Because developers deliberately program it that way', 'Because it has no human oversight'], correct: 1, explanationEs: '"AI systems are trained on data produced by humans, and that data often reflects historical inequalities and prejudices."' },
      { id: 'q2', type: 'true-false', question: 'The text argues that legal frameworks have fully adapted to AI-related liability questions.', questionEs: 'El texto argumenta que los marcos legales se han adaptado completamente a las cuestiones de responsabilidad de la IA.', correct: 'false', explanationEs: '"Legal frameworks have not kept pace with technological change."' },
      { id: 'q3', type: 'short-answer', question: 'What does the text say is needed to address bias in AI systems?', questionEs: '¿Qué dice el texto que se necesita para abordar el sesgo en los sistemas de IA?', correct: 'Technical solutions, auditing, transparency, and diverse representation in development teams', explanationEs: '"Addressing these issues requires not only technical solutions but a commitment to auditing, transparency, and diverse representation."' },
      { id: 'q4', type: 'multiple-choice', question: 'What does the text conclude about the ethical governance of AI?', questionEs: '¿Qué concluye el texto sobre la gobernanza ética de la IA?', options: ['It is solely a technical matter', 'It will require sustained, multidisciplinary effort', 'It has already been solved', 'It is irrelevant to policymakers'], correct: 1, explanationEs: '"the ethical governance of AI will require sustained, multidisciplinary effort — involving technologists, ethicists, policymakers, and the broader public."' },
    ],
    readingStrategy: 'Reading a complex argument — identify the main ethical dimensions, evidence, and implications',
    readingStrategyEs: 'Leer un argumento complejo — identifica las dimensiones éticas principales, la evidencia y las implicaciones',
    grammarFocus: 'Complex nominalisation; hedging: "may", "could", "many argue"; passive for objectivity',
    grammarFocusEs: 'Nominalización compleja; matización; pasiva para objetividad',
    grammarTheoryIds: ['c1-nominalization', 'c1-distancing-language'],
  },

  {
    id: 'c2-essay-paradox-choice',
    title: 'The Paradox of Choice',
    titleEs: 'La Paradoja de la Elección',
    level: 'C2',
    cefrLevel: 6,
    genre: 'essay',
    topic: 'Psychology / Philosophy and society',
    topicEs: 'Psicología / Filosofía y sociedad',
    wordCount: 450,
    text: `Conventional wisdom holds that more choice is always better. The ability to choose from a vast array of options is widely regarded as a hallmark of freedom and prosperity. Supermarkets stock hundreds of varieties of cereal; streaming platforms offer thousands of films; dating apps present an apparently limitless pool of potential partners. Yet a growing body of psychological research suggests that this abundance may be counterproductive. The paradox of choice — the idea that an excess of options can lead to anxiety, paralysis, and diminished satisfaction — challenges some of our most deeply held assumptions about human flourishing.

The psychologist Barry Schwartz has been instrumental in popularising this concept. In experiments, participants asked to choose from a large assortment of jams or chocolates reported less satisfaction with their final selection than those presented with a smaller set. The mechanism appears to be twofold: first, the cognitive burden of evaluating many alternatives induces fatigue and decision aversion; second, the awareness of foregone alternatives — the "opportunity cost" of every choice — generates regret and a sense that one might have done better. When the stakes are low, such as selecting a flavour of jam, the effect is modest. When the stakes are high — choosing a career, a partner, a place to live — the psychological toll can be substantial.

The implications extend beyond individual psychology to the structure of society. Consumer culture thrives on the illusion of infinite choice, yet the proliferation of options may be contributing to rising levels of anxiety and a pervasive sense that one's life could always be otherwise. The "maximiser" — the person who seeks the optimal outcome in every domain — is particularly vulnerable. By contrast, "satisficers," who settle for "good enough" once certain criteria are met, tend to report higher well-being. This distinction has entered both popular discourse and academic psychology.

Whether the paradox of choice is a universal phenomenon or one that varies across cultures and contexts remains an open question. Some researchers argue that the effect is strongest in Western, individualistic societies where choice is fetishised. Others suggest that the relationship between choice and well-being is more nuanced — that some choice is essential, but that beyond a certain point, additional options yield diminishing returns. What seems clear is that the assumption that more is always better deserves to be scrutinised. In an age of abundance, the art of choosing wisely may depend as much on knowing what to ignore as on knowing what to select.`,
    vocabulary: [
      { word: 'counterproductive', definition: 'having the opposite of the desired effect', translation: 'contraproducente' },
      { word: 'foregone', definition: 'relinquished or given up', translation: 'renunciado, sacrificado' },
      { word: 'proliferation', definition: 'rapid increase in number', translation: 'proliferación' },
      { word: 'satisficer', definition: 'one who accepts "good enough" rather than seeking the optimal', translation: 'satisfacedor' },
      { word: 'fetishised', definition: 'treated with excessive or irrational devotion', translation: 'fetichizado' },
      { word: 'diminishing returns', definition: 'progressively smaller benefits from additional effort', translation: 'rendimientos decrecientes' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'According to Schwartz\'s experiments, how did participants with more options feel about their choice?', questionEs: 'Según los experimentos de Schwartz, ¿cómo se sintieron los participantes con más opciones sobre su elección?', options: ['More satisfied', 'Less satisfied', 'Indifferent', 'Relieved'], correct: 1, explanationEs: '"participants asked to choose from a large assortment... reported less satisfaction with their final selection than those presented with a smaller set."' },
      { id: 'q2', type: 'true-false', question: 'The text argues that "maximisers" tend to report higher well-being than "satisficers."', questionEs: 'El texto argumenta que los "maximisers" tienden a reportar mayor bienestar que los "satisficers."', correct: 'false', explanationEs: '"Satisficers... tend to report higher well-being." Los maximisers son más vulnerables.' },
      { id: 'q3', type: 'short-answer', question: 'What two mechanisms does the text suggest explain why excess choice reduces satisfaction?', questionEs: '¿Qué dos mecanismos sugiere el texto que explican por qué el exceso de elección reduce la satisfacción?', correct: 'Cognitive burden/decision fatigue AND awareness of foregone alternatives/opportunity cost leading to regret', explanationEs: '"first, the cognitive burden of evaluating many alternatives induces fatigue... second, the awareness of foregone alternatives... generates regret."' },
      { id: 'q4', type: 'multiple-choice', question: 'What does the text suggest about the art of choosing wisely in an age of abundance?', questionEs: '¿Qué sugiere el texto sobre el arte de elegir sabiamente en una era de abundancia?', options: ['One should always seek more options', 'It depends as much on knowing what to ignore as on knowing what to select', 'Choice is irrelevant to well-being', 'Maximising is the best strategy'], correct: 1, explanationEs: '"the art of choosing wisely may depend as much on knowing what to ignore as on knowing what to select."' },
    ],
    readingStrategy: 'Tracing a philosophical-psychological argument — identify the thesis, empirical support, mechanisms, and implications',
    readingStrategyEs: 'Seguir un argumento filosófico-psicológico — identifica la tesis, el apoyo empírico, los mecanismos y las implicaciones',
    grammarFocus: 'Abstract nominalisation; hedging: "may", "appears to be", "remains an open question"; concessive structures',
    grammarFocusEs: 'Nominalización abstracta; matización; estructuras concesivas',
    grammarTheoryIds: ['c1-nominalization', 'c1-distancing-language', 'c2-vague-language'],
  },

  // ─────────────────────────────────────────
  // NEW TEXTS — Message, Review, Literary (underrepresented genres)
  // ─────────────────────────────────────────

  {
    id: 'a1-message-meeting',
    title: 'Text Message About a Meeting',
    titleEs: 'Mensaje de Texto Sobre una Reunión',
    level: 'A1',
    cefrLevel: 1,
    genre: 'message',
    topic: 'Arranging a meeting / Daily plans',
    topicEs: 'Quedar / Planes del día',
    wordCount: 52,
    text: `Hi! Are you free tomorrow?
I want to meet you for coffee.
What time is good for you?
I can meet at 10 am or 3 pm.
Let me know! 🙂`,
    vocabulary: [
      { word: 'free', definition: 'available; not busy', translation: 'libre, disponible' },
      { word: 'meet', definition: 'to come together with someone', translation: 'quedar, encontrarse' },
      { word: 'good for you', definition: 'suitable or convenient for you', translation: 'bien para ti' },
      { word: 'let me know', definition: 'tell me; inform me', translation: 'avísame, dime' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What does the person want to do?', questionEs: '¿Qué quiere hacer la persona?', options: ['Go to the cinema', 'Meet for coffee', 'Have lunch', 'Study together'], correct: 1, explanationEs: '"I want to meet you for coffee."' },
      { id: 'q2', type: 'multiple-choice', question: 'What two times does the person suggest?', questionEs: '¿Qué dos horarios sugiere la persona?', options: ['9 am and 2 pm', '10 am and 3 pm', '11 am and 4 pm', '12 pm and 5 pm'], correct: 1, explanationEs: '"I can meet at 10 am or 3 pm."' },
      { id: 'q3', type: 'true-false', question: 'The message is about meeting today.', questionEs: 'El mensaje es sobre quedar hoy.', correct: 'false', explanationEs: '"Are you free tomorrow?" — el mensaje es sobre mañana.' },
    ],
    readingStrategy: 'Reading short messages — identify the main request and key details (when, what)',
    readingStrategyEs: 'Leer mensajes cortos — identifica la petición principal y los detalles clave (cuándo, qué)',
    grammarFocus: 'Present Simple for offers and suggestions: "I can meet", "What time is good"',
    grammarFocusEs: 'Presente Simple para ofertas y sugerencias: "I can meet", "What time is good"',
    grammarTheoryIds: ['a1-present-simple'],
  },

  {
    id: 'a2-message-whatsapp-planning',
    title: 'WhatsApp Group: Planning a Trip',
    titleEs: 'Grupo de WhatsApp: Planificando un Viaje',
    level: 'A2',
    cefrLevel: 2,
    genre: 'message',
    topic: 'Travel planning / Group coordination',
    topicEs: 'Planificación de viajes / Coordinación en grupo',
    wordCount: 98,
    text: `Maria: Hey everyone! Who wants to go to the beach next weekend?
Tom: Me! I'm in. What day?
Maria: Saturday or Sunday? I prefer Saturday.
Lisa: Saturday is better for me too. What time shall we leave?
Tom: How about 9 am? We can have lunch there.
Maria: Perfect! I'll bring sandwiches. Can someone bring drinks?
Lisa: I'll bring water and juice. Tom, can you drive?
Tom: Yes, no problem. I'll pick you both up at 8:45.
Maria: Great! See you Saturday! 🏖️`,
    vocabulary: [
      { word: "I'm in", definition: 'I agree; count me in', translation: 'cuenta conmigo' },
      { word: 'shall we', definition: 'suggesting or offering (formal/informal)', translation: '¿deberíamos? ¿vamos a?' },
      { word: 'pick up', definition: 'to collect someone in a car', translation: 'recoger en coche' },
      { word: 'bring', definition: 'to take something with you to a place', translation: 'llevar, traer' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What are they planning to do?', questionEs: '¿Qué planean hacer?', options: ['Go to the mountains', 'Go to the beach', 'Have a party', 'Go shopping'], correct: 1, explanationEs: '"Who wants to go to the beach next weekend?"' },
      { id: 'q2', type: 'multiple-choice', question: 'What day do they decide on?', questionEs: '¿Qué día deciden?', options: ['Friday', 'Saturday', 'Sunday', 'Monday'], correct: 1, explanationEs: '"Saturday is better for me too" — both prefer Saturday.' },
      { id: 'q3', type: 'short-answer', question: 'What time will Tom pick them up?', questionEs: '¿A qué hora los recogerá Tom?', correct: '8:45', explanationEs: '"I\'ll pick you both up at 8:45."' },
      { id: 'q4', type: 'true-false', question: 'Maria will bring the drinks.', questionEs: 'Maria llevará las bebidas.', correct: 'false', explanationEs: '"I\'ll bring sandwiches... Can someone bring drinks?" — Lisa brings drinks.' },
    ],
    readingStrategy: 'Following a group chat — track who says what and how the plan develops',
    readingStrategyEs: 'Seguir un chat grupal — rastrea quién dice qué y cómo se desarrolla el plan',
    grammarFocus: 'Future with will for offers and plans: "I\'ll bring", "I\'ll pick you up"',
    grammarFocusEs: 'Futuro con will para ofertas y planes: "I\'ll bring", "I\'ll pick you up"',
    grammarTheoryIds: ['a2-future-will'],
  },

  {
    id: 'b1-review-restaurant',
    title: 'Restaurant Review: The Green Table',
    titleEs: 'Reseña de Restaurante: The Green Table',
    level: 'B1',
    cefrLevel: 3,
    genre: 'review',
    topic: 'Food and dining / Restaurant reviews',
    topicEs: 'Comida y restaurantes / Reseñas',
    wordCount: 165,
    text: `The Green Table — 4/5 stars

I went to The Green Table with my family last week. It's a vegetarian restaurant in the city centre, and I had heard good things about it from friends.

We booked a table for 7 pm. When we arrived, the restaurant was quite full, but the staff were very welcoming. The menu has a lot of variety — there are dishes from different countries, and they use a lot of local ingredients.

I ordered the mushroom stroganoff and my daughter had the vegetable curry. Both were excellent. The stroganoff was creamy and full of flavour, and the curry had just the right amount of spice. The portions are generous, so we didn't need a starter.

The only downside was the wait. Our main courses took about 25 minutes to arrive, and the restaurant was quite noisy. But the food was worth it. The bill came to about £35 per person, which I think is fair for the quality.

I would definitely go back and recommend it to anyone who likes vegetarian food.`,
    vocabulary: [
      { word: 'booked', definition: 'reserved in advance', translation: 'reservamos' },
      { word: 'generous', definition: 'large in amount or size', translation: 'generoso, abundante' },
      { word: 'downside', definition: 'a disadvantage or negative aspect', translation: 'desventaja' },
      { word: 'worth it', definition: 'good enough to justify the cost or effort', translation: 'que vale la pena' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What type of restaurant is The Green Table?', questionEs: '¿Qué tipo de restaurante es The Green Table?', options: ['Italian', 'Vegetarian', 'Seafood', 'Fast food'], correct: 1, explanationEs: '"It\'s a vegetarian restaurant in the city centre."' },
      { id: 'q2', type: 'true-false', question: 'The reviewer thought the portions were too small.', questionEs: 'El reseñador pensó que las raciones eran demasiado pequeñas.', correct: 'false', explanationEs: '"The portions are generous, so we didn\'t need a starter."' },
      { id: 'q3', type: 'multiple-choice', question: 'What was the main negative point mentioned?', questionEs: '¿Cuál fue el principal punto negativo mencionado?', options: ['The food was cold', 'The wait was long and it was noisy', 'The staff were rude', 'It was too expensive'], correct: 1, explanationEs: '"The only downside was the wait... and the restaurant was quite noisy."' },
      { id: 'q4', type: 'short-answer', question: 'Approximately how much was the bill per person?', questionEs: '¿Aproximadamente cuánto fue la cuenta por persona?', correct: '£35', explanationEs: '"The bill came to about £35 per person."' },
    ],
    readingStrategy: 'Reading a review — identify strengths, weaknesses, and the overall recommendation',
    readingStrategyEs: 'Leer una reseña — identifica puntos fuertes, débiles y la recomendación general',
    grammarFocus: 'Past Simple for experience; Present Simple for general description; "would" for recommendation',
    grammarFocusEs: 'Pasado Simple para experiencia; Presente Simple para descripción; "would" para recomendación',
    grammarTheoryIds: ['b1-past-simple', 'b1-would'],
  },

  {
    id: 'b2-review-book',
    title: 'Book Review: "The Silent Hours"',
    titleEs: 'Reseña de Libro: "The Silent Hours"',
    level: 'B2',
    cefrLevel: 4,
    genre: 'review',
    topic: 'Literature / Book reviews',
    topicEs: 'Literatura / Reseñas de libros',
    wordCount: 245,
    text: `"The Silent Hours" by Claire Matthews — a compelling but flawed debut

Claire Matthews's first novel has been widely praised, and it is easy to see why. Set in a small coastal town in the 1940s, the story follows three characters whose lives become unexpectedly intertwined. The atmosphere is superb: Matthews has a real gift for evoking the damp, grey world of wartime Britain, and the sense of impending loss that hangs over every chapter is genuinely affecting.

The central character, Eleanor, is a young widow who has returned to her childhood home. Her grief is portrayed with sensitivity, and the gradual thawing of her emotional reserve as she forms new connections is one of the novel's strongest elements. The supporting cast is less well developed — Eleanor's neighbour, Thomas, feels somewhat one-dimensional, and the subplot involving a missing child, while initially gripping, is resolved in a way that many readers may find unsatisfying.

Where the novel truly excels is in its prose. Matthews writes with a precision and restraint that is rare in contemporary fiction. There are passages that linger in the mind long after the book is closed. However, the pacing occasionally sags in the middle section, and the final twist, though clever, relies on a coincidence that stretches credibility.

Overall, "The Silent Hours" is an impressive first novel that announces Matthews as a writer to watch. It is not without its weaknesses, but the strengths — the atmosphere, the prose, the central performance — more than compensate. I would recommend it to anyone who enjoys literary fiction with a historical setting.`,
    vocabulary: [
      { word: 'evoking', definition: 'bringing a feeling or memory to mind', translation: 'evocar' },
      { word: 'restraint', definition: 'controlled, not excessive', translation: 'contención, moderación' },
      { word: 'sags', definition: 'becomes slower or less interesting', translation: 'flojea, decae' },
      { word: 'stretches credibility', definition: 'is hard to believe', translation: 'resulta inverosímil' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What is the main setting of the novel?', questionEs: '¿Cuál es el escenario principal de la novela?', options: ['London in the 1960s', 'A coastal town in the 1940s', 'A village in the 1920s', 'Paris during the war'], correct: 1, explanationEs: '"Set in a small coastal town in the 1940s."' },
      { id: 'q2', type: 'true-false', question: 'The reviewer thinks the supporting characters are as well developed as Eleanor.', questionEs: 'El reseñador cree que los personajes secundarios están tan bien desarrollados como Eleanor.', correct: 'false', explanationEs: '"The supporting cast is less well developed... Thomas feels somewhat one-dimensional."' },
      { id: 'q3', type: 'multiple-choice', question: 'What does the reviewer say is one of the novel\'s main strengths?', questionEs: '¿Qué dice el reseñador que es una de las principales fortalezas de la novela?', options: ['The fast pacing', 'The prose and atmosphere', 'The surprising ending', 'The humour'], correct: 1, explanationEs: '"Where the novel truly excels is in its prose... The atmosphere is superb."' },
      { id: 'q4', type: 'short-answer', question: 'What weakness does the reviewer mention about the final twist?', questionEs: '¿Qué debilidad menciona el reseñador sobre el giro final?', correct: 'It relies on a coincidence that stretches credibility', explanationEs: '"the final twist... relies on a coincidence that stretches credibility."' },
    ],
    readingStrategy: 'Analysing a critical review — distinguish between praise and criticism, and identify the reviewer\'s overall stance',
    readingStrategyEs: 'Analizar una reseña crítica — distingue entre elogios y críticas, e identifica la postura general del reseñador',
    grammarFocus: 'Evaluative language; passive constructions; complex noun phrases',
    grammarFocusEs: 'Lenguaje evaluativo; construcciones pasivas; frases nominales complejas',
    grammarTheoryIds: ['b2-passive', 'b2-evaluative-language'],
  },

  {
    id: 'c1-literary-passage',
    title: 'Literary Passage: The Garden at Dusk',
    titleEs: 'Pasaje Literario: El Jardín al Atardecer',
    level: 'C1',
    cefrLevel: 5,
    genre: 'literary',
    topic: 'Literary fiction / Figurative language',
    topicEs: 'Ficción literaria / Lenguaje figurado',
    wordCount: 220,
    text: `The garden had surrendered to the evening. Shadows pooled beneath the hedges like spilled ink, and the last of the roses — those stubborn blooms that had clung to summer long after their sisters had faded — now hung their heads as if in quiet apology. A single lamp had been lit in the drawing room; its light fell across the lawn in a pale, uncertain wedge, as though the house itself were hesitating to acknowledge the approaching dark.

She had come here every evening for as long as she could remember, though she could no longer say whether it was the garden she sought or the absence of something else — the silence of the empty chairs, the stillness of the fountain that had not run in years. The past had a way of pressing in at this hour, not as memory exactly, but as a kind of atmospheric pressure, a weight that had nothing to do with the body and everything to do with the mind.

The old oak at the far end of the lawn had witnessed it all. Its branches, gnarled and patient, seemed to hold the accumulated wisdom of decades, or perhaps it was only that she had grown old enough to project such things onto indifferent nature. Either way, she found a certain comfort there, in the company of something that would outlast her.`,
    vocabulary: [
      { word: 'surrendered', definition: 'given in to; yielded to', translation: 'se había rendido a' },
      { word: 'stubborn', definition: 'determined not to change', translation: 'obstinado, persistente' },
      { word: 'gnarled', definition: 'twisted and rough with age', translation: 'nudoso, retorcido' },
      { word: 'project', definition: 'to attribute one\'s own feelings or ideas to something external', translation: 'proyectar' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'What does the simile "shadows pooled beneath the hedges like spilled ink" suggest?', questionEs: '¿Qué sugiere el símil "shadows pooled beneath the hedges like spilled ink"?', options: ['The garden is well-lit', 'The shadows are dark, fluid, and spreading', 'The hedges are black', 'Ink has been spilled'], correct: 1, explanationEs: 'The simile evokes dark, liquid, spreading shadows.' },
      { id: 'q2', type: 'true-false', question: 'The narrator is certain that she comes to the garden for the garden itself.', questionEs: 'La narradora está segura de que viene al jardín por el jardín en sí.', correct: 'false', explanationEs: '"she could no longer say whether it was the garden she sought or the absence of something else."' },
      { id: 'q3', type: 'multiple-choice', question: 'What does "atmospheric pressure" represent in this passage?', questionEs: '¿Qué representa la "presión atmosférica" en este pasaje?', options: ['The weather', 'The physical weight of the past', 'The emotional weight of memory and the past', 'The fountain'], correct: 2, explanationEs: '"a weight that had nothing to do with the body and everything to do with the mind."' },
      { id: 'q4', type: 'short-answer', question: 'What comfort does the narrator find in the oak tree?', questionEs: '¿Qué consuelo encuentra la narradora en el roble?', correct: 'The company of something that will outlast her', explanationEs: '"she found a certain comfort there, in the company of something that would outlast her."' },
    ],
    readingStrategy: 'Reading literary prose — identify figurative language (simile, metaphor, personification) and interpret symbolic meaning',
    readingStrategyEs: 'Leer prosa literaria — identifica el lenguaje figurado (símil, metáfora, personificación) e interpreta el significado simbólico',
    grammarFocus: 'Figurative language: simile ("like spilled ink"), personification ("the garden had surrendered"), metaphor ("atmospheric pressure"); complex subordination',
    grammarFocusEs: 'Lenguaje figurado: símil ("like spilled ink"), personificación ("the garden had surrendered"), metáfora ("atmospheric pressure"); subordinación compleja',
    grammarTheoryIds: ['c1-figurative-language', 'b2-participle-clauses'],
  },

  // ─────────────────────────────────────────
  // UNDERREPRESENTED GENRES
  // ─────────────────────────────────────────

  {
    id: 'b1-message-schedule',
    title: 'Work Group Chat: Schedule Change',
    titleEs: 'Chat de Grupo de Trabajo: Cambio de Horario',
    level: 'B1',
    cefrLevel: 3,
    genre: 'message',
    topic: 'Work / Schedule coordination',
    topicEs: 'Trabajo / Coordinación de horarios',
    wordCount: 95,
    text: `📱 Project Alpha Team Chat

Sarah: Hi everyone! Quick update — the client meeting has been moved from Tuesday 2pm to Thursday 10am. Can everyone confirm they can make it?

Mike: Thanks for letting us know. Thursday 10am works for me. I'll need to reschedule my dentist appointment though 😅

Lisa: No problem on my side. Should we send a calendar invite to the client as well?

Sarah: Yes, good idea. I'll send it today. Mike, the client asked if we could send the draft report by Wednesday afternoon. Is that possible?

Mike: I'll have it ready by Tuesday evening. That should give them time to review before the meeting.

Sarah: Perfect. Thanks both!`,
    vocabulary: [
      { word: 'reschedule', definition: 'to change the time of a planned event', translation: 'reprogramar' },
      { word: 'confirm', definition: 'to say that something is definitely true or will happen', translation: 'confirmar' },
      { word: 'draft', definition: 'a first version of a document before it is final', translation: 'borrador' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'When was the meeting originally scheduled?', questionEs: '¿Cuándo estaba programada la reunión originalmente?', options: ['Tuesday 10am', 'Tuesday 2pm', 'Thursday 2pm', 'Thursday 10am'], correct: 1, explanationEs: '"the client meeting has been moved from Tuesday 2pm"' },
      { id: 'q2', type: 'true-false', question: 'Mike needs to change his dentist appointment.', questionEs: 'Mike necesita cambiar su cita con el dentista.', correct: 'true', explanationEs: '"I\'ll need to reschedule my dentist appointment though"' },
      { id: 'q3', type: 'short-answer', question: 'By when will Mike send the draft report?', questionEs: '¿Para cuándo enviará Mike el borrador del informe?', correct: 'Tuesday evening', explanationEs: '"I\'ll have it ready by Tuesday evening."' },
    ],
    readingStrategy: 'Reading for detail in informal work communication — identify who does what and when',
    readingStrategyEs: 'Leer con detalle en comunicación laboral informal — identifica quién hace qué y cuándo',
    grammarFocus: 'Present and future for plans; phrasal verbs (let us know, move, reschedule)',
    grammarFocusEs: 'Presente y futuro para planes; phrasal verbs (let us know, move, reschedule)',
    grammarTheoryIds: ['b1-present-perfect', 'b1-first-conditional'],
  },

  {
    id: 'a2-description-apartment',
    title: 'Describing a New Apartment',
    titleEs: 'Describiendo un nuevo apartamento',
    level: 'A2',
    cefrLevel: 2,
    genre: 'description',
    topic: 'Home / Accommodation',
    topicEs: 'Hogar / Alojamiento',
    wordCount: 88,
    text: `My new apartment is in the centre of the city. It's small but very comfortable.

There are two bedrooms: one bedroom is big and has a big window. The other bedroom is smaller. I use it as a study room.

The living room is nice. There's a sofa, a TV, and a small table. I have some plants near the window.

The kitchen is modern. It has a fridge, an oven, and a dishwasher. I love cooking there!

The bathroom is clean and has a shower. There's no bath, but that's okay.

I have a small balcony. I can see the park from there. I really like my new apartment!`,
    vocabulary: [
      { word: 'comfortable', definition: 'pleasant to use or be in', translation: 'cómodo' },
      { word: 'balcony', definition: 'a platform outside a building where you can stand or sit', translation: 'balcón' },
      { word: 'modern', definition: 'new and using the latest ideas', translation: 'moderno' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'How many bedrooms does the apartment have?', questionEs: '¿Cuántas habitaciones tiene el apartamento?', options: ['One', 'Two', 'Three', 'Four'], correct: 1, explanationEs: '"There are two bedrooms"' },
      { id: 'q2', type: 'true-false', question: 'The apartment has a bath.', questionEs: 'El apartamento tiene bañera.', correct: 'false', explanationEs: '"There\'s no bath, but that\'s okay."' },
      { id: 'q3', type: 'short-answer', question: 'What can the person see from the balcony?', questionEs: '¿Qué puede ver la persona desde el balcón?', correct: 'The park', explanationEs: '"I can see the park from there."' },
    ],
    readingStrategy: 'Reading a description — identify the main features of a place',
    readingStrategyEs: 'Leer una descripción — identifica las características principales de un lugar',
    grammarFocus: 'There is/are; have/has; adjectives of size and quality',
    grammarFocusEs: 'There is/are; have/has; adjetivos de tamaño y calidad',
    grammarTheoryIds: ['a2-there-is-are', 'a2-present-simple'],
  },

  {
    id: 'c1-formal-letter-complaint',
    title: 'Formal Complaint Letter to a Company',
    titleEs: 'Carta Formal de Reclamación a una Empresa',
    level: 'C1',
    cefrLevel: 5,
    genre: 'formal-letter',
    topic: 'Formal writing / Complaints',
    topicEs: 'Escritura formal / Reclamaciones',
    wordCount: 285,
    text: `24 Wellington Gardens
London
SW12 4RT

18 February 2025

Customer Relations Department
Premier Electronics Ltd
45 Innovation Drive
Manchester
M1 2AB

Dear Sir or Madam,

I am writing to express my profound dissatisfaction with the manner in which my complaint regarding a defective laptop purchased from your premises on 15 December 2024 has been handled. Despite having submitted a formal request for a replacement on 3 January 2025, and having received written confirmation that my case would be prioritised, I have yet to receive either a replacement unit or a substantive response.

The laptop in question—a Premier Pro 15 model—exhibited a critical fault within three weeks of purchase: the screen would intermittently fail to display, rendering the device unsuitable for professional use. Given that I rely upon this equipment for my work as a freelance consultant, the prolonged delay has caused me considerable inconvenience and financial detriment.

I would therefore request that you address this matter as a matter of urgency. Specifically, I require either a full replacement of the unit within seven working days, or a full refund in accordance with the Consumer Rights Act 2015. Should neither of these outcomes be forthcoming, I shall have no alternative but to pursue the matter through the appropriate legal channels and to report the matter to the relevant trading standards authority.

I look forward to receiving your response within five working days of the date of this letter.

Yours faithfully,
Dr. Helena Mitchell`,
    vocabulary: [
      { word: 'profound', definition: 'very great or intense', translation: 'profundo' },
      { word: 'defective', definition: 'having a fault or flaw', translation: 'defectuoso' },
      { word: 'substantive', definition: 'having a firm basis in reality; significant', translation: 'sustancial' },
      { word: 'intermittently', definition: 'at irregular intervals; not continuously', translation: 'intermitentemente' },
      { word: 'detriment', definition: 'harm or damage', translation: 'perjuicio' },
      { word: 'forthcoming', definition: 'about to happen; available', translation: 'próximo' },
    ],
    questions: [
      { id: 'q1', type: 'multiple-choice', question: 'When did the customer purchase the laptop?', questionEs: '¿Cuándo compró el cliente el ordenador portátil?', options: ['3 January 2025', '15 December 2024', '18 February 2025', '15 December 2023'], correct: 1, explanationEs: '"purchased from your premises on 15 December 2024"' },
      { id: 'q2', type: 'multiple-choice', question: 'What is the main fault with the laptop?', questionEs: '¿Cuál es el principal defecto del portátil?', options: ['The keyboard does not work', 'The screen intermittently fails to display', 'The battery does not charge', 'The device overheats'], correct: 1, explanationEs: '"the screen would intermittently fail to display"' },
      { id: 'q3', type: 'true-false', question: 'The customer has already received a replacement unit.', questionEs: 'El cliente ya ha recibido una unidad de reemplazo.', correct: 'false', explanationEs: '"I have yet to receive either a replacement unit or a substantive response."' },
      { id: 'q4', type: 'multiple-choice', question: 'What will the customer do if the company does not resolve the issue?', questionEs: '¿Qué hará el cliente si la empresa no resuelve el problema?', options: ['Accept a partial refund', 'Pursue the matter through legal channels', 'Buy a new laptop elsewhere', 'Contact the manufacturer'], correct: 1, explanationEs: '"I shall have no alternative but to pursue the matter through the appropriate legal channels"' },
    ],
    readingStrategy: 'Analysing formal register — identify formal conventions, hedging, and legal references',
    readingStrategyEs: 'Analizar el registro formal — identifica convenciones formales, hedging y referencias legales',
    grammarFocus: 'Formal passive constructions; complex noun phrases; conditional clauses with "should"',
    grammarFocusEs: 'Construcciones pasivas formales; frases nominales complejas; cláusulas condicionales con "should"',
    grammarTheoryIds: ['c1-passive-reporting', 'b2-passive-advanced'],
  },
];

// Helper functions
export const getReadingTextsByLevel = (level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'): ReadingText[] =>
  readingTexts.filter(t => t.level === level);

export const getReadingTextsByCefrLevel = (cefrLevel: number): ReadingText[] =>
  readingTexts.filter(t => t.cefrLevel === cefrLevel);

export const getReadingTextsByGenre = (genre: ReadingText['genre']): ReadingText[] =>
  readingTexts.filter(t => t.genre === genre);

export const getReadingTextById = (id: string): ReadingText | undefined =>
  readingTexts.find(t => t.id === id);

export const getReadingTextsByTopic = (topic: string): ReadingText[] =>
  readingTexts.filter(t => t.topic.toLowerCase().includes(topic.toLowerCase()));
