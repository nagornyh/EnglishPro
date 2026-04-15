// Contextual Vocabulary Scenarios - Vocabulary in real-world situations
// Vocabulario contextualizado en situaciones del mundo real
// Each scenario provides vocabulary within a meaningful context (CEFR-aligned)

export interface VocabScenario {
  id: string;
  title: string;
  titleEs: string;
  level: 1 | 2 | 3 | 4;
  setting: string;
  settingEs: string;
  situation: string;
  situationEs: string;
  keyVocabulary: {
    word: string;
    translation: string;
    partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'expression';
    definition: string;
    exampleInContext: string;
  }[];
  usefulPhrases: {
    phrase: string;
    translation: string;
    whenToUse: string;
  }[];
  miniDialogue: {
    speaker: 'A' | 'B';
    line: string;
    lineEs: string;
    note?: string;
  }[];
  practiceTask: {
    instruction: string;
    instructionEs: string;
    type: 'roleplay' | 'gap-fill' | 'ordering' | 'matching';
  };
}

export const vocabScenarios: VocabScenario[] = [
  // === A1 SCENARIOS ===
  {
    id: 'vs-a1-first-day-london',
    title: 'First Day in London',
    titleEs: 'Primer día en Londres',
    level: 1,
    setting: 'Airport → Taxi → Hotel',
    settingEs: 'Aeropuerto → Taxi → Hotel',
    situation: 'You just arrived in London. You need to get from the airport to your hotel.',
    situationEs: 'Acabas de llegar a Londres. Necesitas ir del aeropuerto a tu hotel.',
    keyVocabulary: [
      { word: 'arrival', translation: 'llegada', partOfSpeech: 'noun', definition: 'The act of reaching a place', exampleInContext: 'The arrivals hall is on the ground floor.' },
      { word: 'luggage', translation: 'equipaje', partOfSpeech: 'noun', definition: 'Bags and suitcases for travel', exampleInContext: 'My luggage is on the carousel.' },
      { word: 'taxi rank', translation: 'parada de taxis', partOfSpeech: 'noun', definition: 'A place where taxis wait for passengers', exampleInContext: 'The taxi rank is outside the terminal.' },
      { word: 'check in', translation: 'registrarse', partOfSpeech: 'verb', definition: 'To register at a hotel', exampleInContext: 'I\'d like to check in, please.' },
      { word: 'key card', translation: 'tarjeta llave', partOfSpeech: 'noun', definition: 'Card used to open a hotel room', exampleInContext: 'Here is your key card. Room 405.' },
      { word: 'receipt', translation: 'recibo', partOfSpeech: 'noun', definition: 'Proof of payment', exampleInContext: 'Can I have a receipt, please?' },
    ],
    usefulPhrases: [
      { phrase: 'Excuse me, where is...?', translation: 'Disculpe, ¿dónde está...?', whenToUse: 'Asking for directions in the airport/hotel' },
      { phrase: 'How much is it to...?', translation: '¿Cuánto cuesta ir a...?', whenToUse: 'Asking a taxi driver the fare' },
      { phrase: 'I have a reservation under...', translation: 'Tengo una reserva a nombre de...', whenToUse: 'At hotel reception' },
      { phrase: 'Could you help me with my bags?', translation: '¿Podría ayudarme con mis maletas?', whenToUse: 'Asking for help politely' },
    ],
    miniDialogue: [
      { speaker: 'A', line: 'Good evening. I have a reservation under García.', lineEs: 'Buenas tardes. Tengo una reserva a nombre de García.' },
      { speaker: 'B', line: 'Welcome, Mr. García. Could I see your passport, please?', lineEs: 'Bienvenido, Sr. García. ¿Me permite su pasaporte, por favor?' },
      { speaker: 'A', line: 'Of course, here you are.', lineEs: 'Por supuesto, aquí tiene.' },
      { speaker: 'B', line: 'You\'re in room 405, fourth floor. Here\'s your key card.', lineEs: 'Está en la habitación 405, cuarta planta. Aquí tiene su tarjeta llave.' },
      { speaker: 'A', line: 'Thank you. What time is breakfast?', lineEs: 'Gracias. ¿A qué hora es el desayuno?' },
      { speaker: 'B', line: 'From 7 to 10 AM, in the restaurant on the first floor.', lineEs: 'De 7 a 10 de la mañana, en el restaurante de la primera planta.' },
    ],
    practiceTask: {
      instruction: 'Role-play: You arrive at a hotel. Check in and ask about breakfast, wifi, and checkout time.',
      instructionEs: 'Juego de roles: Llegas a un hotel. Regístrate y pregunta por el desayuno, wifi y hora de salida.',
      type: 'roleplay'
    }
  },
  {
    id: 'vs-a1-ordering-food',
    title: 'Ordering at a Restaurant',
    titleEs: 'Pidiendo en un restaurante',
    level: 1,
    setting: 'Restaurant',
    settingEs: 'Restaurante',
    situation: 'You are at a restaurant in an English-speaking country and need to order food.',
    situationEs: 'Estás en un restaurante en un país de habla inglesa y necesitas pedir comida.',
    keyVocabulary: [
      { word: 'menu', translation: 'carta/menú', partOfSpeech: 'noun', definition: 'List of food and drinks available', exampleInContext: 'Can I see the menu, please?' },
      { word: 'starter', translation: 'entrante', partOfSpeech: 'noun', definition: 'First course of a meal', exampleInContext: 'I\'ll have the soup as a starter.' },
      { word: 'main course', translation: 'plato principal', partOfSpeech: 'noun', definition: 'Principal dish of a meal', exampleInContext: 'For my main course, I\'d like the steak.' },
      { word: 'bill', translation: 'cuenta', partOfSpeech: 'noun', definition: 'The amount you have to pay', exampleInContext: 'Can we have the bill, please?' },
      { word: 'tip', translation: 'propina', partOfSpeech: 'noun', definition: 'Extra money for service', exampleInContext: 'Is the tip included?' },
      { word: 'still/sparkling water', translation: 'agua sin/con gas', partOfSpeech: 'noun', definition: 'Types of water', exampleInContext: 'Still water, please.' },
    ],
    usefulPhrases: [
      { phrase: 'I\'d like...', translation: 'Me gustaría...', whenToUse: 'Polite way to order' },
      { phrase: 'What do you recommend?', translation: '¿Qué me recomienda?', whenToUse: 'Asking for suggestions' },
      { phrase: 'I\'m allergic to...', translation: 'Soy alérgico a...', whenToUse: 'Informing about food allergies' },
      { phrase: 'Can I have the bill, please?', translation: '¿Me trae la cuenta, por favor?', whenToUse: 'When you want to pay' },
    ],
    miniDialogue: [
      { speaker: 'B', line: 'Good evening. Are you ready to order?', lineEs: 'Buenas tardes. ¿Están listos para pedir?' },
      { speaker: 'A', line: 'Yes, I\'d like the Caesar salad as a starter.', lineEs: 'Sí, me gustaría la ensalada César de entrante.' },
      { speaker: 'B', line: 'And for the main course?', lineEs: '¿Y de plato principal?' },
      { speaker: 'A', line: 'I\'ll have the grilled chicken, please.', lineEs: 'Tomaré el pollo a la plancha, por favor.' },
      { speaker: 'B', line: 'Would you like anything to drink?', lineEs: '¿Desea algo de beber?' },
      { speaker: 'A', line: 'A glass of red wine, please.', lineEs: 'Una copa de vino tinto, por favor.' },
    ],
    practiceTask: {
      instruction: 'Role-play: Order a three-course meal for two people. One person is vegetarian.',
      instructionEs: 'Juego de roles: Pide una comida de tres platos para dos personas. Una es vegetariana.',
      type: 'roleplay'
    }
  },
  // === A2-B1 SCENARIOS ===
  {
    id: 'vs-b1-job-interview',
    title: 'Job Interview',
    titleEs: 'Entrevista de trabajo',
    level: 2,
    setting: 'Office',
    settingEs: 'Oficina',
    situation: 'You have a job interview at an international company.',
    situationEs: 'Tienes una entrevista de trabajo en una empresa internacional.',
    keyVocabulary: [
      { word: 'resume / CV', translation: 'currículum', partOfSpeech: 'noun', definition: 'Document summarizing your experience', exampleInContext: 'I brought a copy of my resume.' },
      { word: 'strengths', translation: 'fortalezas', partOfSpeech: 'noun', definition: 'Things you are good at', exampleInContext: 'One of my strengths is problem-solving.' },
      { word: 'weaknesses', translation: 'debilidades', partOfSpeech: 'noun', definition: 'Areas you need to improve', exampleInContext: 'My biggest weakness is public speaking.' },
      { word: 'team player', translation: 'persona de equipo', partOfSpeech: 'noun', definition: 'Someone who works well with others', exampleInContext: 'I consider myself a team player.' },
      { word: 'salary', translation: 'salario', partOfSpeech: 'noun', definition: 'Regular payment for work', exampleInContext: 'What is the salary range for this position?' },
      { word: 'deadline', translation: 'fecha límite', partOfSpeech: 'noun', definition: 'The latest time something must be done', exampleInContext: 'I always meet my deadlines.' },
      { word: 'overtime', translation: 'horas extra', partOfSpeech: 'noun', definition: 'Extra hours beyond normal work', exampleInContext: 'Is overtime expected in this role?' },
    ],
    usefulPhrases: [
      { phrase: 'I\'m passionate about...', translation: 'Me apasiona...', whenToUse: 'Talking about motivation' },
      { phrase: 'In my previous role, I...', translation: 'En mi puesto anterior, yo...', whenToUse: 'Describing past experience' },
      { phrase: 'I\'m a quick learner.', translation: 'Aprendo rápido.', whenToUse: 'Highlighting adaptability' },
      { phrase: 'Could you tell me more about...?', translation: '¿Podría contarme más sobre...?', whenToUse: 'Asking questions to the interviewer' },
    ],
    miniDialogue: [
      { speaker: 'B', line: 'Tell me about yourself.', lineEs: 'Cuéntame sobre ti.', note: 'The most common opening question' },
      { speaker: 'A', line: 'I\'m a software developer with 5 years of experience. In my current role, I lead a team of four.', lineEs: 'Soy desarrollador de software con 5 años de experiencia. En mi puesto actual, lidero un equipo de cuatro personas.' },
      { speaker: 'B', line: 'What would you say is your greatest strength?', lineEs: '¿Cuál dirías que es tu mayor fortaleza?' },
      { speaker: 'A', line: 'I\'d say my ability to solve problems under pressure. For example, last month I fixed a critical bug in production within two hours.', lineEs: 'Diría que mi capacidad para resolver problemas bajo presión. Por ejemplo, el mes pasado solucioné un error crítico en producción en dos horas.' },
      { speaker: 'B', line: 'Do you have any questions for us?', lineEs: '¿Tienes alguna pregunta para nosotros?' },
      { speaker: 'A', line: 'Yes, could you tell me about the team I\'d be working with?', lineEs: 'Sí, ¿podría contarme sobre el equipo con el que trabajaría?' },
    ],
    practiceTask: {
      instruction: 'Role-play: Answer these 3 interview questions: 1) Tell me about yourself, 2) Why should we hire you?, 3) Where do you see yourself in 5 years?',
      instructionEs: 'Juego de roles: Responde estas 3 preguntas de entrevista: 1) Cuéntame sobre ti, 2) ¿Por qué deberíamos contratarte?, 3) ¿Dónde te ves en 5 años?',
      type: 'roleplay'
    }
  },
  {
    id: 'vs-b1-doctor-visit',
    title: 'Visiting the Doctor',
    titleEs: 'Visita al médico',
    level: 2,
    setting: 'Medical clinic',
    settingEs: 'Consultorio médico',
    situation: 'You feel unwell and need to describe your symptoms to a doctor.',
    situationEs: 'Te sientes mal y necesitas describir tus síntomas al médico.',
    keyVocabulary: [
      { word: 'appointment', translation: 'cita', partOfSpeech: 'noun', definition: 'Arranged meeting with the doctor', exampleInContext: 'I have an appointment at 3 PM.' },
      { word: 'symptom', translation: 'síntoma', partOfSpeech: 'noun', definition: 'Sign of illness', exampleInContext: 'What are your symptoms?' },
      { word: 'prescription', translation: 'receta médica', partOfSpeech: 'noun', definition: 'Doctor\'s written order for medicine', exampleInContext: 'The doctor wrote me a prescription.' },
      { word: 'sore throat', translation: 'dolor de garganta', partOfSpeech: 'noun', definition: 'Pain in the throat', exampleInContext: 'I have a sore throat and a cough.' },
      { word: 'dizzy', translation: 'mareado', partOfSpeech: 'adjective', definition: 'Feeling like things are spinning', exampleInContext: 'I\'ve been feeling dizzy all morning.' },
      { word: 'dosage', translation: 'dosis', partOfSpeech: 'noun', definition: 'Amount of medicine to take', exampleInContext: 'What\'s the correct dosage?' },
    ],
    usefulPhrases: [
      { phrase: 'I\'ve been feeling...', translation: 'He estado sintiéndome...', whenToUse: 'Describing ongoing symptoms' },
      { phrase: 'It hurts when I...', translation: 'Me duele cuando...', whenToUse: 'Describing pain triggers' },
      { phrase: 'How often should I take this?', translation: '¿Con qué frecuencia debo tomar esto?', whenToUse: 'Asking about medication' },
      { phrase: 'Is it serious?', translation: '¿Es grave?', whenToUse: 'Asking about severity' },
    ],
    miniDialogue: [
      { speaker: 'B', line: 'What seems to be the problem?', lineEs: '¿Cuál parece ser el problema?' },
      { speaker: 'A', line: 'I\'ve been having headaches for the past three days, and I feel very tired.', lineEs: 'He tenido dolores de cabeza durante los últimos tres días y me siento muy cansado.' },
      { speaker: 'B', line: 'Do you have any other symptoms? Fever? Nausea?', lineEs: '¿Tiene otros síntomas? ¿Fiebre? ¿Náuseas?' },
      { speaker: 'A', line: 'Yes, I\'ve had a slight fever, around 37.5.', lineEs: 'Sí, he tenido un poco de fiebre, alrededor de 37.5.' },
      { speaker: 'B', line: 'I\'ll prescribe some painkillers. Take two tablets every 8 hours.', lineEs: 'Le recetaré analgésicos. Tome dos pastillas cada 8 horas.' },
    ],
    practiceTask: {
      instruction: 'Describe your symptoms: headache for 2 days, sore throat, slight fever. Ask about medication.',
      instructionEs: 'Describe tus síntomas: dolor de cabeza por 2 días, dolor de garganta, fiebre leve. Pregunta sobre medicación.',
      type: 'roleplay'
    }
  },
  // === B2 SCENARIOS ===
  {
    id: 'vs-b2-negotiation',
    title: 'Business Negotiation',
    titleEs: 'Negociación empresarial',
    level: 3,
    setting: 'Meeting room',
    settingEs: 'Sala de reuniones',
    situation: 'You are negotiating a contract with a foreign partner.',
    situationEs: 'Estás negociando un contrato con un socio extranjero.',
    keyVocabulary: [
      { word: 'proposal', translation: 'propuesta', partOfSpeech: 'noun', definition: 'A plan suggested for consideration', exampleInContext: 'We\'d like to present our proposal.' },
      { word: 'terms and conditions', translation: 'términos y condiciones', partOfSpeech: 'noun', definition: 'Rules of an agreement', exampleInContext: 'We need to discuss the terms and conditions.' },
      { word: 'compromise', translation: 'compromiso / acuerdo intermedio', partOfSpeech: 'noun', definition: 'Agreement where both sides give up something', exampleInContext: 'Let\'s find a compromise.' },
      { word: 'leverage', translation: 'ventaja negociadora', partOfSpeech: 'noun', definition: 'Power to influence a situation', exampleInContext: 'Our market share gives us good leverage.' },
      { word: 'counteroffer', translation: 'contraoferta', partOfSpeech: 'noun', definition: 'Response offer to an initial offer', exampleInContext: 'We have a counteroffer to present.' },
      { word: 'bottom line', translation: 'resultado final / mínimo aceptable', partOfSpeech: 'noun', definition: 'The final amount or fundamental point', exampleInContext: 'What\'s your bottom line on the price?' },
      { word: 'deal-breaker', translation: 'condición inaceptable', partOfSpeech: 'noun', definition: 'Something that makes agreement impossible', exampleInContext: 'Late delivery is a deal-breaker for us.' },
    ],
    usefulPhrases: [
      { phrase: 'We\'d like to propose...', translation: 'Nos gustaría proponer...', whenToUse: 'Presenting your offer' },
      { phrase: 'I\'m afraid that\'s not acceptable.', translation: 'Me temo que eso no es aceptable.', whenToUse: 'Polite refusal' },
      { phrase: 'What if we were to...?', translation: '¿Qué tal si nosotros...?', whenToUse: 'Suggesting alternatives' },
      { phrase: 'I think we can work something out.', translation: 'Creo que podemos llegar a algo.', whenToUse: 'Showing willingness to negotiate' },
      { phrase: 'Let\'s meet halfway.', translation: 'Encontrémonos a mitad de camino.', whenToUse: 'Proposing compromise' },
    ],
    miniDialogue: [
      { speaker: 'A', line: 'Our initial proposal is €200 per unit for an order of 10,000 units.', lineEs: 'Nuestra propuesta inicial es €200 por unidad para un pedido de 10,000 unidades.' },
      { speaker: 'B', line: 'I\'m afraid that exceeds our budget. Could you consider €175?', lineEs: 'Me temo que eso excede nuestro presupuesto. ¿Podría considerar €175?' },
      { speaker: 'A', line: 'That\'s below our margin. What if we met halfway at €190?', lineEs: 'Eso está por debajo de nuestro margen. ¿Qué tal si nos encontramos a mitad de camino en €190?' },
      { speaker: 'B', line: 'We could agree to €185 if you include free shipping.', lineEs: 'Podríamos aceptar €185 si incluyen envío gratuito.' },
      { speaker: 'A', line: 'Let me discuss that with my team. I think we can work something out.', lineEs: 'Déjeme discutirlo con mi equipo. Creo que podemos llegar a algo.' },
    ],
    practiceTask: {
      instruction: 'Role-play: Negotiate a software licensing deal. Your budget is $50K. The seller wants $75K. Reach an agreement.',
      instructionEs: 'Juego de roles: Negocia una licencia de software. Tu presupuesto es $50K. El vendedor quiere $75K. Llega a un acuerdo.',
      type: 'roleplay'
    }
  },
  // === C1 SCENARIO ===
  {
    id: 'vs-c1-presentation',
    title: 'Presenting a Project',
    titleEs: 'Presentando un proyecto',
    level: 4,
    setting: 'Conference room / Webinar',
    settingEs: 'Sala de conferencias / Webinar',
    situation: 'You are presenting a project proposal to stakeholders and answering questions.',
    situationEs: 'Estás presentando una propuesta de proyecto a interesados y respondiendo preguntas.',
    keyVocabulary: [
      { word: 'stakeholder', translation: 'parte interesada', partOfSpeech: 'noun', definition: 'Person with interest in the project', exampleInContext: 'All key stakeholders must approve the proposal.' },
      { word: 'feasibility', translation: 'viabilidad', partOfSpeech: 'noun', definition: 'Whether something is possible/practical', exampleInContext: 'We conducted a feasibility study.' },
      { word: 'deliverable', translation: 'entregable', partOfSpeech: 'noun', definition: 'Concrete output or result', exampleInContext: 'The first deliverable is due in Q2.' },
      { word: 'milestone', translation: 'hito', partOfSpeech: 'noun', definition: 'Key point of progress', exampleInContext: 'We\'ve identified five major milestones.' },
      { word: 'scalable', translation: 'escalable', partOfSpeech: 'adjective', definition: 'Able to grow or expand', exampleInContext: 'The solution must be scalable.' },
      { word: 'ROI', translation: 'retorno de inversión', partOfSpeech: 'noun', definition: 'Return on Investment', exampleInContext: 'The projected ROI is 150% over 3 years.' },
      { word: 'bottleneck', translation: 'cuello de botella', partOfSpeech: 'noun', definition: 'Point causing delay in a process', exampleInContext: 'We identified the main bottleneck in production.' },
    ],
    usefulPhrases: [
      { phrase: 'I\'d like to walk you through...', translation: 'Me gustaría guiarles a través de...', whenToUse: 'Starting the presentation' },
      { phrase: 'As you can see from the data...', translation: 'Como pueden ver en los datos...', whenToUse: 'Referring to visual information' },
      { phrase: 'I\'d like to draw your attention to...', translation: 'Quisiera llamar su atención sobre...', whenToUse: 'Highlighting key points' },
      { phrase: 'That\'s a great question. Let me address that.', translation: 'Excelente pregunta. Permítame abordarla.', whenToUse: 'Handling Q&A' },
      { phrase: 'To sum up, the key takeaways are...', translation: 'En resumen, los puntos clave son...', whenToUse: 'Concluding the presentation' },
    ],
    miniDialogue: [
      { speaker: 'A', line: 'I\'d like to walk you through our proposal for the new CRM system.', lineEs: 'Me gustaría guiarles a través de nuestra propuesta para el nuevo sistema CRM.' },
      { speaker: 'A', line: 'As you can see from this chart, customer satisfaction has dropped 15% this year.', lineEs: 'Como pueden ver en este gráfico, la satisfacción del cliente ha caído un 15% este año.' },
      { speaker: 'B', line: 'What\'s the expected timeline for implementation?', lineEs: '¿Cuál es el plazo esperado de implementación?' },
      { speaker: 'A', line: 'We anticipate a 6-month rollout, with the first milestone — the pilot phase — in Q2.', lineEs: 'Anticipamos un despliegue de 6 meses, con el primer hito — la fase piloto — en Q2.' },
      { speaker: 'B', line: 'And what\'s the projected ROI?', lineEs: '¿Y cuál es el retorno de inversión proyectado?' },
      { speaker: 'A', line: 'Based on our feasibility study, we project 150% ROI within three years, with break-even in 18 months.', lineEs: 'Basándonos en nuestro estudio de viabilidad, proyectamos un ROI del 150% en tres años, con punto de equilibrio en 18 meses.' },
    ],
    practiceTask: {
      instruction: 'Present a 2-minute pitch for a project. Include: problem statement, solution, timeline, budget, and expected ROI.',
      instructionEs: 'Presenta un pitch de 2 minutos para un proyecto. Incluye: planteamiento del problema, solución, cronograma, presupuesto y ROI esperado.',
      type: 'roleplay'
    }
  },
];

// Helper functions
export const getScenariosByLevel = (level: number): VocabScenario[] => {
  return vocabScenarios.filter(s => s.level <= level);
};

export const getScenarioById = (id: string): VocabScenario | undefined => {
  return vocabScenarios.find(s => s.id === id);
};
