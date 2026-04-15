// Situational Content - Real-life scenarios for practical English
// Covers emergencies, job interviews, travel, technology

export interface SituationalScenario {
  id: string;
  category: 'emergency' | 'job-interview' | 'travel' | 'technology' | 'social' | 'healthcare' | 'shopping';
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  difficulty: 1 | 2 | 3;
  icon: string;
  phrases: SituationalPhrase[];
  dialogue?: SituationalDialogue;
  tips: { english: string; spanish: string }[];
  culturalNotes?: { english: string; spanish: string }[];
}

export interface SituationalPhrase {
  id: string;
  phrase: string;
  translation: string;
  pronunciation?: string;
  usage: string;
  usageEs: string;
  formality: 'formal' | 'neutral' | 'informal';
  examples: { english: string; spanish: string }[];
}

export interface SituationalDialogue {
  title: string;
  titleEs: string;
  context: string;
  contextEs: string;
  lines: {
    speaker: string;
    text: string;
    textEs: string;
    note?: string;
  }[];
}

export const SITUATIONAL_SCENARIOS: SituationalScenario[] = [
  // ==================== EMERGENCIES ====================
  {
    id: 'emergency-general',
    category: 'emergency',
    name: 'General Emergencies',
    nameEs: 'Emergencias Generales',
    description: 'Essential phrases for emergency situations',
    descriptionEs: 'Frases esenciales para situaciones de emergencia',
    difficulty: 1,
    icon: '🚨',
    phrases: [
      {
        id: 'em1',
        phrase: 'Help! / Help me!',
        translation: '¡Ayuda! / ¡Ayúdame!',
        pronunciation: '/help/ /help mi/',
        usage: 'To call for immediate assistance',
        usageEs: 'Para pedir ayuda inmediata',
        formality: 'neutral',
        examples: [
          { english: 'Help! Someone call an ambulance!', spanish: '¡Ayuda! ¡Alguien llame una ambulancia!' },
        ],
      },
      {
        id: 'em2',
        phrase: 'Call 911 (US) / Call 999 (UK)',
        translation: 'Llama al 911 / Llama al 999',
        usage: 'Emergency services number',
        usageEs: 'Número de servicios de emergencia',
        formality: 'neutral',
        examples: [
          { english: 'Quick, call 911! There\'s been an accident.', spanish: '¡Rápido, llama al 911! Ha habido un accidente.' },
        ],
      },
      {
        id: 'em3',
        phrase: 'I need an ambulance / police / fire department',
        translation: 'Necesito una ambulancia / policía / bomberos',
        usage: 'To specify which emergency service you need',
        usageEs: 'Para especificar qué servicio de emergencia necesitas',
        formality: 'neutral',
        examples: [
          { english: 'There\'s a fire! I need the fire department immediately!', spanish: '¡Hay un incendio! ¡Necesito a los bomberos inmediatamente!' },
        ],
      },
      {
        id: 'em4',
        phrase: 'I\'m lost',
        translation: 'Estoy perdido/a',
        usage: 'When you don\'t know where you are',
        usageEs: 'Cuando no sabes dónde estás',
        formality: 'neutral',
        examples: [
          { english: 'Excuse me, I\'m lost. Can you help me?', spanish: 'Disculpe, estoy perdido. ¿Puede ayudarme?' },
        ],
      },
      {
        id: 'em5',
        phrase: 'I\'ve been robbed',
        translation: 'Me han robado',
        usage: 'To report a theft',
        usageEs: 'Para reportar un robo',
        formality: 'neutral',
        examples: [
          { english: 'Officer, I\'ve been robbed. Someone took my wallet.', spanish: 'Oficial, me han robado. Alguien tomó mi cartera.' },
        ],
      },
      {
        id: 'em6',
        phrase: 'There\'s been an accident',
        translation: 'Ha habido un accidente',
        usage: 'To report an accident',
        usageEs: 'Para reportar un accidente',
        formality: 'neutral',
        examples: [
          { english: 'There\'s been an accident on Main Street.', spanish: 'Ha habido un accidente en la Calle Principal.' },
        ],
      },
    ],
    dialogue: {
      title: 'Calling Emergency Services',
      titleEs: 'Llamando a Servicios de Emergencia',
      context: 'You witness a car accident and call 911',
      contextEs: 'Presencias un accidente de auto y llamas al 911',
      lines: [
        { speaker: 'Operator', text: '911, what\'s your emergency?', textEs: '911, ¿cuál es su emergencia?' },
        { speaker: 'You', text: 'There\'s been a car accident. Someone is hurt.', textEs: 'Ha habido un accidente de auto. Alguien está herido.' },
        { speaker: 'Operator', text: 'What\'s your location?', textEs: '¿Cuál es su ubicación?' },
        { speaker: 'You', text: 'I\'m on Oak Street, near the gas station.', textEs: 'Estoy en la Calle Oak, cerca de la gasolinera.' },
        { speaker: 'Operator', text: 'Is the person conscious?', textEs: '¿La persona está consciente?' },
        { speaker: 'You', text: 'Yes, but they\'re bleeding from their head.', textEs: 'Sí, pero está sangrando de la cabeza.' },
        { speaker: 'Operator', text: 'Help is on the way. Stay on the line.', textEs: 'La ayuda va en camino. Permanezca en la línea.' },
      ],
    },
    tips: [
      { english: 'Stay calm and speak clearly', spanish: 'Mantén la calma y habla claramente' },
      { english: 'Know the local emergency number', spanish: 'Conoce el número de emergencia local' },
      { english: 'Describe your location as precisely as possible', spanish: 'Describe tu ubicación lo más preciso posible' },
    ],
    culturalNotes: [
      { english: 'In the US, 911 connects to police, fire, and medical services', spanish: 'En EE.UU., el 911 conecta con policía, bomberos y servicios médicos' },
      { english: 'In the UK, use 999 or the EU number 112', spanish: 'En el Reino Unido, usa el 999 o el número europeo 112' },
    ],
  },
  {
    id: 'emergency-medical',
    category: 'emergency',
    name: 'Medical Emergencies',
    nameEs: 'Emergencias Médicas',
    description: 'Phrases for medical situations',
    descriptionEs: 'Frases para situaciones médicas',
    difficulty: 2,
    icon: '🏥',
    phrases: [
      {
        id: 'med1',
        phrase: 'I need a doctor',
        translation: 'Necesito un doctor',
        usage: 'Basic request for medical help',
        usageEs: 'Solicitud básica de ayuda médica',
        formality: 'neutral',
        examples: [
          { english: 'I need a doctor. I feel very sick.', spanish: 'Necesito un doctor. Me siento muy mal.' },
        ],
      },
      {
        id: 'med2',
        phrase: 'I\'m allergic to...',
        translation: 'Soy alérgico/a a...',
        usage: 'To inform about allergies',
        usageEs: 'Para informar sobre alergias',
        formality: 'neutral',
        examples: [
          { english: 'I\'m allergic to penicillin.', spanish: 'Soy alérgico a la penicilina.' },
          { english: 'I\'m allergic to peanuts.', spanish: 'Soy alérgico a los cacahuetes.' },
        ],
      },
      {
        id: 'med3',
        phrase: 'It hurts here',
        translation: 'Me duele aquí',
        usage: 'To indicate where you have pain',
        usageEs: 'Para indicar dónde tienes dolor',
        formality: 'neutral',
        examples: [
          { english: 'It hurts here, in my chest.', spanish: 'Me duele aquí, en el pecho.' },
        ],
      },
      {
        id: 'med4',
        phrase: 'I\'m having trouble breathing',
        translation: 'Tengo dificultad para respirar',
        usage: 'Describing respiratory distress',
        usageEs: 'Describir dificultad respiratoria',
        formality: 'neutral',
        examples: [
          { english: 'I\'m having trouble breathing. I need my inhaler.', spanish: 'Tengo dificultad para respirar. Necesito mi inhalador.' },
        ],
      },
      {
        id: 'med5',
        phrase: 'I take medication for...',
        translation: 'Tomo medicamento para...',
        usage: 'To inform about current medications',
        usageEs: 'Para informar sobre medicamentos actuales',
        formality: 'neutral',
        examples: [
          { english: 'I take medication for high blood pressure.', spanish: 'Tomo medicamento para la presión alta.' },
        ],
      },
    ],
    tips: [
      { english: 'Carry a medical ID card if you have conditions', spanish: 'Lleva una tarjeta médica si tienes condiciones' },
      { english: 'Know how to describe your symptoms in English', spanish: 'Aprende a describir tus síntomas en inglés' },
    ],
  },
  // ==================== JOB INTERVIEWS ====================
  {
    id: 'job-interview-basics',
    category: 'job-interview',
    name: 'Job Interview Basics',
    nameEs: 'Entrevista de Trabajo - Básico',
    description: 'Common phrases for job interviews',
    descriptionEs: 'Frases comunes para entrevistas de trabajo',
    difficulty: 2,
    icon: '💼',
    phrases: [
      {
        id: 'job1',
        phrase: 'Tell me about yourself',
        translation: 'Cuéntame sobre ti',
        usage: 'Common opening question - prepare a brief professional summary',
        usageEs: 'Pregunta de apertura común - prepara un resumen profesional breve',
        formality: 'formal',
        examples: [
          { english: 'I\'m a software developer with 5 years of experience...', spanish: 'Soy desarrollador de software con 5 años de experiencia...' },
        ],
      },
      {
        id: 'job2',
        phrase: 'What are your strengths?',
        translation: '¿Cuáles son tus fortalezas?',
        usage: 'Question about your positive qualities',
        usageEs: 'Pregunta sobre tus cualidades positivas',
        formality: 'formal',
        examples: [
          { english: 'My strengths include problem-solving and teamwork.', spanish: 'Mis fortalezas incluyen resolución de problemas y trabajo en equipo.' },
        ],
      },
      {
        id: 'job3',
        phrase: 'What are your weaknesses?',
        translation: '¿Cuáles son tus debilidades?',
        usage: 'Question about areas for improvement',
        usageEs: 'Pregunta sobre áreas de mejora',
        formality: 'formal',
        examples: [
          { english: 'I sometimes focus too much on details, but I\'m working on it.', spanish: 'A veces me enfoco demasiado en los detalles, pero estoy trabajando en ello.' },
        ],
      },
      {
        id: 'job4',
        phrase: 'Why do you want to work here?',
        translation: '¿Por qué quieres trabajar aquí?',
        usage: 'Show your knowledge of the company',
        usageEs: 'Muestra tu conocimiento de la empresa',
        formality: 'formal',
        examples: [
          { english: 'I admire your company\'s commitment to innovation.', spanish: 'Admiro el compromiso de su empresa con la innovación.' },
        ],
      },
      {
        id: 'job5',
        phrase: 'Where do you see yourself in 5 years?',
        translation: '¿Dónde te ves en 5 años?',
        usage: 'Question about career goals',
        usageEs: 'Pregunta sobre metas profesionales',
        formality: 'formal',
        examples: [
          { english: 'I see myself in a leadership role, contributing to the team\'s success.', spanish: 'Me veo en un rol de liderazgo, contribuyendo al éxito del equipo.' },
        ],
      },
      {
        id: 'job6',
        phrase: 'Do you have any questions for us?',
        translation: '¿Tienes alguna pregunta para nosotros?',
        usage: 'Always prepare questions to ask',
        usageEs: 'Siempre prepara preguntas para hacer',
        formality: 'formal',
        examples: [
          { english: 'What does a typical day look like in this role?', spanish: '¿Cómo es un día típico en este puesto?' },
          { english: 'What are the opportunities for growth?', spanish: '¿Cuáles son las oportunidades de crecimiento?' },
        ],
      },
    ],
    dialogue: {
      title: 'Job Interview',
      titleEs: 'Entrevista de Trabajo',
      context: 'Interview for a marketing position',
      contextEs: 'Entrevista para un puesto de marketing',
      lines: [
        { speaker: 'Interviewer', text: 'Good morning! Please, have a seat.', textEs: '¡Buenos días! Por favor, tome asiento.' },
        { speaker: 'You', text: 'Thank you. I\'m excited to be here.', textEs: 'Gracias. Estoy emocionado de estar aquí.' },
        { speaker: 'Interviewer', text: 'Tell me about yourself.', textEs: 'Cuénteme sobre usted.' },
        { speaker: 'You', text: 'I have three years of experience in digital marketing. I\'ve managed social media campaigns and increased engagement by 40%.', textEs: 'Tengo tres años de experiencia en marketing digital. He manejado campañas de redes sociales y aumenté el engagement en un 40%.' },
        { speaker: 'Interviewer', text: 'What interests you about this position?', textEs: '¿Qué le interesa de este puesto?' },
        { speaker: 'You', text: 'I\'m passionate about your brand\'s mission, and I believe my skills align well with your needs.', textEs: 'Me apasiona la misión de su marca, y creo que mis habilidades se alinean bien con sus necesidades.' },
      ],
    },
    tips: [
      { english: 'Research the company before the interview', spanish: 'Investiga la empresa antes de la entrevista' },
      { english: 'Prepare specific examples of your achievements', spanish: 'Prepara ejemplos específicos de tus logros' },
      { english: 'Dress professionally and arrive 10-15 minutes early', spanish: 'Vístete profesionalmente y llega 10-15 minutos antes' },
      { english: 'Make eye contact and give a firm handshake', spanish: 'Haz contacto visual y da un apretón de manos firme' },
    ],
    culturalNotes: [
      { english: 'In the US, it\'s common to discuss salary expectations', spanish: 'En EE.UU., es común discutir expectativas salariales' },
      { english: 'Send a thank-you email within 24 hours', spanish: 'Envía un correo de agradecimiento dentro de 24 horas' },
    ],
  },
  // ==================== TRAVEL ====================
  {
    id: 'travel-airport',
    category: 'travel',
    name: 'At the Airport',
    nameEs: 'En el Aeropuerto',
    description: 'Essential airport vocabulary and phrases',
    descriptionEs: 'Vocabulario y frases esenciales del aeropuerto',
    difficulty: 2,
    icon: '✈️',
    phrases: [
      {
        id: 'air1',
        phrase: 'I\'d like to check in',
        translation: 'Quisiera hacer el check-in',
        usage: 'At the airline counter',
        usageEs: 'En el mostrador de la aerolínea',
        formality: 'formal',
        examples: [
          { english: 'I\'d like to check in for flight AA123.', spanish: 'Quisiera hacer el check-in para el vuelo AA123.' },
        ],
      },
      {
        id: 'air2',
        phrase: 'Where is the boarding gate?',
        translation: '¿Dónde está la puerta de embarque?',
        usage: 'To find your gate',
        usageEs: 'Para encontrar tu puerta',
        formality: 'neutral',
        examples: [
          { english: 'Where is the boarding gate for flight to London?', spanish: '¿Dónde está la puerta de embarque para el vuelo a Londres?' },
        ],
      },
      {
        id: 'air3',
        phrase: 'I have a connecting flight',
        translation: 'Tengo un vuelo de conexión',
        usage: 'When you need to catch another flight',
        usageEs: 'Cuando necesitas tomar otro vuelo',
        formality: 'neutral',
        examples: [
          { english: 'I have a connecting flight to Paris. Do I need to go through security again?', spanish: 'Tengo un vuelo de conexión a París. ¿Necesito pasar por seguridad otra vez?' },
        ],
      },
      {
        id: 'air4',
        phrase: 'My flight has been delayed/cancelled',
        translation: 'Mi vuelo ha sido retrasado/cancelado',
        usage: 'When there are flight problems',
        usageEs: 'Cuando hay problemas con el vuelo',
        formality: 'neutral',
        examples: [
          { english: 'My flight has been cancelled. What are my options?', spanish: 'Mi vuelo ha sido cancelado. ¿Cuáles son mis opciones?' },
        ],
      },
      {
        id: 'air5',
        phrase: 'I\'d like an aisle/window seat',
        translation: 'Quisiera un asiento de pasillo/ventana',
        usage: 'Seat preference',
        usageEs: 'Preferencia de asiento',
        formality: 'formal',
        examples: [
          { english: 'I\'d like a window seat if available, please.', spanish: 'Quisiera un asiento de ventana si está disponible, por favor.' },
        ],
      },
      {
        id: 'air6',
        phrase: 'How much luggage can I bring?',
        translation: '¿Cuánto equipaje puedo llevar?',
        usage: 'To check baggage allowance',
        usageEs: 'Para verificar el límite de equipaje',
        formality: 'neutral',
        examples: [
          { english: 'How much luggage can I bring on board?', spanish: '¿Cuánto equipaje puedo llevar a bordo?' },
        ],
      },
    ],
    dialogue: {
      title: 'Check-in Counter',
      titleEs: 'Mostrador de Check-in',
      context: 'Checking in for an international flight',
      contextEs: 'Haciendo check-in para un vuelo internacional',
      lines: [
        { speaker: 'Agent', text: 'Good morning. Passport and booking confirmation, please.', textEs: 'Buenos días. Pasaporte y confirmación de reserva, por favor.' },
        { speaker: 'You', text: 'Here you go. I\'d like a window seat if possible.', textEs: 'Aquí tiene. Quisiera un asiento de ventana si es posible.' },
        { speaker: 'Agent', text: 'Let me check... Yes, I have 23A available. Any checked bags?', textEs: 'Déjeme ver... Sí, tengo el 23A disponible. ¿Alguna maleta para documentar?' },
        { speaker: 'You', text: 'Yes, one checked bag and one carry-on.', textEs: 'Sí, una maleta documentada y una de mano.' },
        { speaker: 'Agent', text: 'Please place your bag on the scale.', textEs: 'Por favor coloque su maleta en la báscula.' },
        { speaker: 'You', text: 'Is it within the weight limit?', textEs: '¿Está dentro del límite de peso?' },
        { speaker: 'Agent', text: 'Yes, it\'s fine. Here\'s your boarding pass. Gate B12, boarding at 2:30.', textEs: 'Sí, está bien. Aquí tiene su pase de abordar. Puerta B12, embarque a las 2:30.' },
      ],
    },
    tips: [
      { english: 'Arrive at least 2-3 hours before international flights', spanish: 'Llega al menos 2-3 horas antes de vuelos internacionales' },
      { english: 'Keep your passport and boarding pass easily accessible', spanish: 'Mantén tu pasaporte y pase de abordar accesibles' },
      { english: 'Check the liquid restrictions for carry-on luggage', spanish: 'Revisa las restricciones de líquidos para equipaje de mano' },
    ],
  },
  {
    id: 'travel-hotel',
    category: 'travel',
    name: 'At the Hotel',
    nameEs: 'En el Hotel',
    description: 'Hotel vocabulary and common requests',
    descriptionEs: 'Vocabulario de hotel y solicitudes comunes',
    difficulty: 1,
    icon: '🏨',
    phrases: [
      {
        id: 'hot1',
        phrase: 'I have a reservation',
        translation: 'Tengo una reservación',
        usage: 'When checking in',
        usageEs: 'Al hacer check-in',
        formality: 'formal',
        examples: [
          { english: 'I have a reservation under the name Smith.', spanish: 'Tengo una reservación a nombre de Smith.' },
        ],
      },
      {
        id: 'hot2',
        phrase: 'What time is check-out?',
        translation: '¿A qué hora es el check-out?',
        usage: 'To know when to leave',
        usageEs: 'Para saber cuándo salir',
        formality: 'neutral',
        examples: [
          { english: 'What time is check-out tomorrow?', spanish: '¿A qué hora es el check-out mañana?' },
        ],
      },
      {
        id: 'hot3',
        phrase: 'Is breakfast included?',
        translation: '¿El desayuno está incluido?',
        usage: 'To check meal inclusion',
        usageEs: 'Para verificar si incluye comida',
        formality: 'neutral',
        examples: [
          { english: 'Is breakfast included in the room rate?', spanish: '¿El desayuno está incluido en la tarifa?' },
        ],
      },
      {
        id: 'hot4',
        phrase: 'Could I have a wake-up call?',
        translation: '¿Podría tener una llamada de despertador?',
        usage: 'To request a morning call',
        usageEs: 'Para solicitar llamada matutina',
        formality: 'formal',
        examples: [
          { english: 'Could I have a wake-up call at 7 AM?', spanish: '¿Podría tener una llamada de despertador a las 7 AM?' },
        ],
      },
      {
        id: 'hot5',
        phrase: 'The room needs to be cleaned',
        translation: 'La habitación necesita limpieza',
        usage: 'To request housekeeping',
        usageEs: 'Para solicitar limpieza',
        formality: 'neutral',
        examples: [
          { english: 'The room needs to be cleaned. Could you send housekeeping?', spanish: 'La habitación necesita limpieza. ¿Podrían enviar a alguien?' },
        ],
      },
      {
        id: 'hot6',
        phrase: 'Is there Wi-Fi available?',
        translation: '¿Hay Wi-Fi disponible?',
        usage: 'To ask about internet',
        usageEs: 'Para preguntar sobre internet',
        formality: 'neutral',
        examples: [
          { english: 'Is there Wi-Fi available? What\'s the password?', spanish: '¿Hay Wi-Fi disponible? ¿Cuál es la contraseña?' },
        ],
      },
    ],
    tips: [
      { english: 'Request a quiet room if you\'re a light sleeper', spanish: 'Solicita una habitación tranquila si tienes sueño ligero' },
      { english: 'Ask about late check-out if you have a late flight', spanish: 'Pregunta sobre check-out tardío si tienes un vuelo tarde' },
    ],
  },
  // ==================== TECHNOLOGY ====================
  {
    id: 'technology-support',
    category: 'technology',
    name: 'Tech Support',
    nameEs: 'Soporte Técnico',
    description: 'Phrases for getting technical help',
    descriptionEs: 'Frases para obtener ayuda técnica',
    difficulty: 2,
    icon: '💻',
    phrases: [
      {
        id: 'tech1',
        phrase: 'My computer/phone isn\'t working',
        translation: 'Mi computadora/teléfono no funciona',
        usage: 'Basic problem description',
        usageEs: 'Descripción básica del problema',
        formality: 'neutral',
        examples: [
          { english: 'My computer isn\'t working. It won\'t turn on.', spanish: 'Mi computadora no funciona. No enciende.' },
        ],
      },
      {
        id: 'tech2',
        phrase: 'The internet connection is slow',
        translation: 'La conexión a internet está lenta',
        usage: 'To report internet issues',
        usageEs: 'Para reportar problemas de internet',
        formality: 'neutral',
        examples: [
          { english: 'The internet connection is slow. Pages take forever to load.', spanish: 'La conexión a internet está lenta. Las páginas tardan mucho en cargar.' },
        ],
      },
      {
        id: 'tech3',
        phrase: 'I forgot my password',
        translation: 'Olvidé mi contraseña',
        usage: 'Common account issue',
        usageEs: 'Problema común de cuenta',
        formality: 'neutral',
        examples: [
          { english: 'I forgot my password. How can I reset it?', spanish: 'Olvidé mi contraseña. ¿Cómo puedo restablecerla?' },
        ],
      },
      {
        id: 'tech4',
        phrase: 'Have you tried restarting it?',
        translation: '¿Has intentado reiniciarlo?',
        usage: 'Common troubleshooting suggestion',
        usageEs: 'Sugerencia común de solución',
        formality: 'neutral',
        examples: [
          { english: 'Have you tried restarting it? That often fixes the problem.', spanish: '¿Has intentado reiniciarlo? Eso suele arreglar el problema.' },
        ],
      },
      {
        id: 'tech5',
        phrase: 'I need to update my software',
        translation: 'Necesito actualizar mi software',
        usage: 'Software update request',
        usageEs: 'Solicitud de actualización',
        formality: 'neutral',
        examples: [
          { english: 'I need to update my software. What\'s the latest version?', spanish: 'Necesito actualizar mi software. ¿Cuál es la última versión?' },
        ],
      },
      {
        id: 'tech6',
        phrase: 'My account has been hacked',
        translation: 'Mi cuenta ha sido hackeada',
        usage: 'Security emergency',
        usageEs: 'Emergencia de seguridad',
        formality: 'neutral',
        examples: [
          { english: 'My account has been hacked. I\'m getting strange emails.', spanish: 'Mi cuenta ha sido hackeada. Estoy recibiendo correos extraños.' },
        ],
      },
    ],
    tips: [
      { english: 'Note down error messages exactly as they appear', spanish: 'Anota los mensajes de error exactamente como aparecen' },
      { english: 'Know basic tech terms in English for faster support', spanish: 'Conoce términos técnicos básicos en inglés para soporte más rápido' },
    ],
  },
  // ==================== HEALTHCARE ====================
  {
    id: 'healthcare-doctor',
    category: 'healthcare',
    name: 'Doctor\'s Visit',
    nameEs: 'Visita al Doctor',
    description: 'Phrases for medical appointments',
    descriptionEs: 'Frases para citas médicas',
    difficulty: 2,
    icon: '🩺',
    phrases: [
      {
        id: 'doc1',
        phrase: 'I\'d like to make an appointment',
        translation: 'Quisiera hacer una cita',
        usage: 'To schedule a visit',
        usageEs: 'Para programar una visita',
        formality: 'formal',
        examples: [
          { english: 'I\'d like to make an appointment with Dr. Smith.', spanish: 'Quisiera hacer una cita con el Dr. Smith.' },
        ],
      },
      {
        id: 'doc2',
        phrase: 'I\'ve been feeling unwell',
        translation: 'Me he sentido mal',
        usage: 'General symptom description',
        usageEs: 'Descripción general de síntomas',
        formality: 'neutral',
        examples: [
          { english: 'I\'ve been feeling unwell for three days.', spanish: 'Me he sentido mal por tres días.' },
        ],
      },
      {
        id: 'doc3',
        phrase: 'I have a headache/stomachache/fever',
        translation: 'Tengo dolor de cabeza/estómago/fiebre',
        usage: 'Specific symptoms',
        usageEs: 'Síntomas específicos',
        formality: 'neutral',
        examples: [
          { english: 'I have a terrible headache and a slight fever.', spanish: 'Tengo un terrible dolor de cabeza y un poco de fiebre.' },
        ],
      },
      {
        id: 'doc4',
        phrase: 'How often should I take this medication?',
        translation: '¿Con qué frecuencia debo tomar este medicamento?',
        usage: 'Medication instructions',
        usageEs: 'Instrucciones de medicación',
        formality: 'formal',
        examples: [
          { english: 'How often should I take this medication? With or without food?', spanish: '¿Con qué frecuencia debo tomar este medicamento? ¿Con o sin comida?' },
        ],
      },
      {
        id: 'doc5',
        phrase: 'Do I need a prescription for this?',
        translation: '¿Necesito receta para esto?',
        usage: 'At the pharmacy',
        usageEs: 'En la farmacia',
        formality: 'formal',
        examples: [
          { english: 'Do I need a prescription for this painkiller?', spanish: '¿Necesito receta para este analgésico?' },
        ],
      },
    ],
    tips: [
      { english: 'Bring a list of your current medications', spanish: 'Lleva una lista de tus medicamentos actuales' },
      { english: 'Write down your symptoms before the appointment', spanish: 'Escribe tus síntomas antes de la cita' },
    ],
  },
];

export default SITUATIONAL_SCENARIOS;
