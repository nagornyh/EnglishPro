// Crossword Puzzles - Predefined crosswords by level
// Each puzzle focuses on vocabulary from that level

export interface CrosswordPuzzle {
  id: string;
  name: string;
  nameEs: string;
  level: number;
  difficulty: 'easy' | 'medium' | 'hard';
  gridSize: number;
  words: CrosswordWord[];
  theme?: string;
  themeEs?: string;
}

export interface CrosswordWord {
  word: string;
  clue: string;
  clueEs: string;
  row: number;
  col: number;
  direction: 'across' | 'down';
  number: number;
}

export const CROSSWORD_PUZZLES: CrosswordPuzzle[] = [
  // Level 1 - Basic Vocabulary
  {
    id: 'level1-basics',
    name: 'Basic Words',
    nameEs: 'Palabras Básicas',
    level: 1,
    difficulty: 'easy',
    gridSize: 10,
    theme: 'Everyday Objects',
    themeEs: 'Objetos Cotidianos',
    words: [
      { word: 'BOOK', clue: 'You read this', clueEs: 'Lo lees', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'WATER', clue: 'Clear liquid you drink', clueEs: 'Líquido claro que bebes', row: 0, col: 0, direction: 'down', number: 1 },
      { word: 'PHONE', clue: 'Device for calls', clueEs: 'Dispositivo para llamadas', row: 2, col: 2, direction: 'across', number: 2 },
      { word: 'TABLE', clue: 'Furniture with flat top', clueEs: 'Mueble con superficie plana', row: 1, col: 4, direction: 'down', number: 3 },
      { word: 'CHAIR', clue: 'You sit on this', clueEs: 'Te sientas en esto', row: 4, col: 0, direction: 'across', number: 4 },
      { word: 'APPLE', clue: 'Red or green fruit', clueEs: 'Fruta roja o verde', row: 4, col: 4, direction: 'down', number: 5 },
      { word: 'HOUSE', clue: 'Building where you live', clueEs: 'Edificio donde vives', row: 6, col: 1, direction: 'across', number: 6 },
      { word: 'CAR', clue: 'Vehicle with 4 wheels', clueEs: 'Vehículo con 4 ruedas', row: 3, col: 7, direction: 'down', number: 7 },
    ],
  },
  {
    id: 'level1-family',
    name: 'Family Members',
    nameEs: 'Miembros de la Familia',
    level: 1,
    difficulty: 'easy',
    gridSize: 10,
    theme: 'Family',
    themeEs: 'Familia',
    words: [
      { word: 'MOTHER', clue: 'Female parent', clueEs: 'Padre femenino', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'FATHER', clue: 'Male parent', clueEs: 'Padre masculino', row: 0, col: 0, direction: 'down', number: 1 },
      { word: 'SISTER', clue: 'Female sibling', clueEs: 'Hermana', row: 2, col: 2, direction: 'across', number: 2 },
      { word: 'BROTHER', clue: 'Male sibling', clueEs: 'Hermano', row: 1, col: 4, direction: 'down', number: 3 },
      { word: 'SON', clue: 'Male child', clueEs: 'Hijo', row: 4, col: 0, direction: 'across', number: 4 },
      { word: 'DAUGHTER', clue: 'Female child', clueEs: 'Hija', row: 6, col: 1, direction: 'across', number: 5 },
      { word: 'AUNT', clue: 'Sister of parent', clueEs: 'Tía', row: 3, col: 7, direction: 'down', number: 6 },
      { word: 'UNCLE', clue: 'Brother of parent', clueEs: 'Tío', row: 5, col: 5, direction: 'down', number: 7 },
    ],
  },
  // Level 2 - Intermediate Vocabulary
  {
    id: 'level2-emotions',
    name: 'Feelings & Emotions',
    nameEs: 'Sentimientos y Emociones',
    level: 2,
    difficulty: 'medium',
    gridSize: 12,
    theme: 'Emotions',
    themeEs: 'Emociones',
    words: [
      { word: 'HAPPY', clue: 'Feeling joy', clueEs: 'Sentir alegría', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'ANGRY', clue: 'Feeling mad', clueEs: 'Sentir enojo', row: 0, col: 0, direction: 'down', number: 1 },
      { word: 'EXCITED', clue: 'Very enthusiastic', clueEs: 'Muy entusiasmado', row: 2, col: 1, direction: 'across', number: 2 },
      { word: 'NERVOUS', clue: 'Feeling worried or anxious', clueEs: 'Sentirse preocupado', row: 1, col: 5, direction: 'down', number: 3 },
      { word: 'TIRED', clue: 'Needing rest', clueEs: 'Necesitando descanso', row: 4, col: 0, direction: 'across', number: 4 },
      { word: 'SCARED', clue: 'Feeling fear', clueEs: 'Sentir miedo', row: 4, col: 3, direction: 'down', number: 5 },
      { word: 'PROUD', clue: 'Feeling pleased with achievement', clueEs: 'Sentirse orgulloso', row: 6, col: 2, direction: 'across', number: 6 },
      { word: 'JEALOUS', clue: 'Envious of others', clueEs: 'Envidioso', row: 5, col: 7, direction: 'down', number: 7 },
      { word: 'CONFUSED', clue: 'Not understanding', clueEs: 'Sin entender', row: 8, col: 0, direction: 'across', number: 8 },
    ],
  },
  {
    id: 'level2-travel',
    name: 'Travel Words',
    nameEs: 'Palabras de Viaje',
    level: 2,
    difficulty: 'medium',
    gridSize: 12,
    theme: 'Travel',
    themeEs: 'Viajes',
    words: [
      { word: 'AIRPORT', clue: 'Where planes depart', clueEs: 'Donde salen los aviones', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'TICKET', clue: 'Paper to board transport', clueEs: 'Papel para abordar', row: 0, col: 4, direction: 'down', number: 2 },
      { word: 'LUGGAGE', clue: 'Bags for travel', clueEs: 'Equipaje', row: 2, col: 1, direction: 'across', number: 3 },
      { word: 'PASSPORT', clue: 'ID document for travel', clueEs: 'Documento de identidad', row: 1, col: 2, direction: 'down', number: 4 },
      { word: 'HOTEL', clue: 'Place to stay', clueEs: 'Lugar para hospedarse', row: 4, col: 0, direction: 'across', number: 5 },
      { word: 'TOURIST', clue: 'Person visiting places', clueEs: 'Persona que visita', row: 3, col: 6, direction: 'down', number: 6 },
      { word: 'FLIGHT', clue: 'Airplane trip', clueEs: 'Viaje en avión', row: 6, col: 2, direction: 'across', number: 7 },
      { word: 'VACATION', clue: 'Holiday time', clueEs: 'Tiempo de vacaciones', row: 5, col: 8, direction: 'down', number: 8 },
    ],
  },
  // Level 3 - Advanced Vocabulary
  {
    id: 'level3-business',
    name: 'Business Terms',
    nameEs: 'Términos de Negocios',
    level: 3,
    difficulty: 'hard',
    gridSize: 14,
    theme: 'Business',
    themeEs: 'Negocios',
    words: [
      { word: 'MEETING', clue: 'Gathering to discuss', clueEs: 'Reunión para discutir', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'DEADLINE', clue: 'Final date for task', clueEs: 'Fecha límite', row: 0, col: 0, direction: 'down', number: 1 },
      { word: 'CONTRACT', clue: 'Legal agreement', clueEs: 'Acuerdo legal', row: 2, col: 2, direction: 'across', number: 2 },
      { word: 'BUDGET', clue: 'Financial plan', clueEs: 'Plan financiero', row: 1, col: 5, direction: 'down', number: 3 },
      { word: 'PROFIT', clue: 'Money gained', clueEs: 'Dinero ganado', row: 4, col: 0, direction: 'across', number: 4 },
      { word: 'COLLEAGUE', clue: 'Work partner', clueEs: 'Compañero de trabajo', row: 3, col: 8, direction: 'down', number: 5 },
      { word: 'NEGOTIATE', clue: 'Discuss to reach agreement', clueEs: 'Discutir para acordar', row: 6, col: 1, direction: 'across', number: 6 },
      { word: 'INVOICE', clue: 'Bill for services', clueEs: 'Factura', row: 5, col: 10, direction: 'down', number: 7 },
      { word: 'SCHEDULE', clue: 'Plan of activities', clueEs: 'Plan de actividades', row: 8, col: 0, direction: 'across', number: 8 },
      { word: 'STRATEGY', clue: 'Plan to achieve goal', clueEs: 'Plan para lograr meta', row: 7, col: 5, direction: 'down', number: 9 },
    ],
  },
  {
    id: 'level3-technology',
    name: 'Technology',
    nameEs: 'Tecnología',
    level: 3,
    difficulty: 'hard',
    gridSize: 14,
    theme: 'Tech',
    themeEs: 'Tecnología',
    words: [
      { word: 'SOFTWARE', clue: 'Computer programs', clueEs: 'Programas de computadora', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'DATABASE', clue: 'Organized data storage', clueEs: 'Almacenamiento de datos', row: 0, col: 0, direction: 'down', number: 1 },
      { word: 'NETWORK', clue: 'Connected computers', clueEs: 'Computadoras conectadas', row: 2, col: 3, direction: 'across', number: 2 },
      { word: 'ALGORITHM', clue: 'Step-by-step procedure', clueEs: 'Procedimiento paso a paso', row: 1, col: 6, direction: 'down', number: 3 },
      { word: 'BROWSER', clue: 'Web navigation app', clueEs: 'App de navegación web', row: 4, col: 0, direction: 'across', number: 4 },
      { word: 'SECURITY', clue: 'Protection from threats', clueEs: 'Protección contra amenazas', row: 3, col: 9, direction: 'down', number: 5 },
      { word: 'DOWNLOAD', clue: 'Get file from internet', clueEs: 'Obtener archivo de internet', row: 6, col: 1, direction: 'across', number: 6 },
      { word: 'PASSWORD', clue: 'Secret access code', clueEs: 'Código secreto de acceso', row: 5, col: 11, direction: 'down', number: 7 },
      { word: 'WIRELESS', clue: 'Without cables', clueEs: 'Sin cables', row: 8, col: 2, direction: 'across', number: 8 },
    ],
  },
  // Mixed difficulty crosswords
  {
    id: 'mixed-food',
    name: 'Food & Cooking',
    nameEs: 'Comida y Cocina',
    level: 2,
    difficulty: 'medium',
    gridSize: 12,
    theme: 'Food',
    themeEs: 'Comida',
    words: [
      { word: 'BREAKFAST', clue: 'Morning meal', clueEs: 'Comida de la mañana', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'RECIPE', clue: 'Cooking instructions', clueEs: 'Instrucciones de cocina', row: 0, col: 0, direction: 'down', number: 1 },
      { word: 'KITCHEN', clue: 'Room for cooking', clueEs: 'Habitación para cocinar', row: 2, col: 2, direction: 'across', number: 2 },
      { word: 'INGREDIENT', clue: 'Component of dish', clueEs: 'Componente de plato', row: 1, col: 5, direction: 'down', number: 3 },
      { word: 'DELICIOUS', clue: 'Very tasty', clueEs: 'Muy sabroso', row: 4, col: 0, direction: 'across', number: 4 },
      { word: 'VEGETABLE', clue: 'Plant food like carrots', clueEs: 'Alimento vegetal', row: 3, col: 8, direction: 'down', number: 5 },
      { word: 'HUNGRY', clue: 'Wanting food', clueEs: 'Queriendo comer', row: 6, col: 1, direction: 'across', number: 6 },
      { word: 'SPICY', clue: 'Hot-flavored food', clueEs: 'Comida picante', row: 5, col: 9, direction: 'down', number: 7 },
    ],
  },
  {
    id: 'mixed-weather',
    name: 'Weather',
    nameEs: 'Clima',
    level: 1,
    difficulty: 'easy',
    gridSize: 10,
    theme: 'Weather',
    themeEs: 'Clima',
    words: [
      { word: 'SUNNY', clue: 'Bright with sun', clueEs: 'Brillante con sol', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'STORM', clue: 'Bad weather with wind', clueEs: 'Mal tiempo con viento', row: 0, col: 0, direction: 'down', number: 1 },
      { word: 'CLOUD', clue: 'White in the sky', clueEs: 'Blanco en el cielo', row: 2, col: 2, direction: 'across', number: 2 },
      { word: 'RAIN', clue: 'Water falling from sky', clueEs: 'Agua cayendo del cielo', row: 1, col: 4, direction: 'down', number: 3 },
      { word: 'COLD', clue: 'Low temperature', clueEs: 'Baja temperatura', row: 4, col: 0, direction: 'across', number: 4 },
      { word: 'WIND', clue: 'Moving air', clueEs: 'Aire en movimiento', row: 3, col: 6, direction: 'down', number: 5 },
      { word: 'SNOW', clue: 'White frozen precipitation', clueEs: 'Precipitación blanca', row: 6, col: 1, direction: 'across', number: 6 },
      { word: 'HOT', clue: 'High temperature', clueEs: 'Alta temperatura', row: 5, col: 7, direction: 'down', number: 7 },
    ],
  },

  // ===== LEVELS 4-13 =====

  // Level 4 (B1) - Work & Career
  {
    id: 'level4-work',
    name: 'Work & Career',
    nameEs: 'Trabajo y Carrera',
    level: 4,
    difficulty: 'medium',
    gridSize: 14,
    theme: 'Career',
    themeEs: 'Carrera',
    words: [
      { word: 'SALARY', clue: 'Monthly payment for work', clueEs: 'Pago mensual por trabajo', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'SKILLS', clue: 'Abilities you have', clueEs: 'Habilidades que tienes', row: 0, col: 0, direction: 'down', number: 1 },
      { word: 'RESUME', clue: 'Document listing experience', clueEs: 'Documento con experiencia', row: 2, col: 3, direction: 'across', number: 2 },
      { word: 'MANAGER', clue: 'Person who leads a team', clueEs: 'Persona que lidera un equipo', row: 1, col: 7, direction: 'down', number: 3 },
      { word: 'INTERVIEW', clue: 'Job selection meeting', clueEs: 'Reunión de selección', row: 4, col: 0, direction: 'across', number: 4 },
      { word: 'PROMOTE', clue: 'Move to higher position', clueEs: 'Subir a mayor puesto', row: 3, col: 11, direction: 'down', number: 5 },
      { word: 'RETIRE', clue: 'Stop working permanently', clueEs: 'Dejar de trabajar', row: 6, col: 2, direction: 'across', number: 6 },
      { word: 'PROJECT', clue: 'Task with specific goal', clueEs: 'Tarea con meta específica', row: 5, col: 9, direction: 'down', number: 7 },
    ],
  },

  // Level 5 (B1) - Health & Medicine
  {
    id: 'level5-health',
    name: 'Health & Medicine',
    nameEs: 'Salud y Medicina',
    level: 5,
    difficulty: 'medium',
    gridSize: 14,
    theme: 'Health',
    themeEs: 'Salud',
    words: [
      { word: 'SYMPTOM', clue: 'Sign of illness', clueEs: 'Señal de enfermedad', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'SURGERY', clue: 'Medical operation', clueEs: 'Operación médica', row: 0, col: 0, direction: 'down', number: 1 },
      { word: 'VACCINE', clue: 'Injection for prevention', clueEs: 'Inyección preventiva', row: 2, col: 3, direction: 'across', number: 2 },
      { word: 'CHRONIC', clue: 'Long-lasting condition', clueEs: 'Condición de larga duración', row: 1, col: 8, direction: 'down', number: 3 },
      { word: 'DIAGNOSE', clue: 'Identify an illness', clueEs: 'Identificar una enfermedad', row: 4, col: 0, direction: 'across', number: 4 },
      { word: 'PATIENT', clue: 'Person receiving treatment', clueEs: 'Persona recibiendo tratamiento', row: 3, col: 10, direction: 'down', number: 5 },
      { word: 'ALLERGY', clue: 'Reaction to substance', clueEs: 'Reacción a sustancia', row: 6, col: 2, direction: 'across', number: 6 },
      { word: 'PHARMACY', clue: 'Place to buy medicine', clueEs: 'Lugar para comprar medicina', row: 5, col: 6, direction: 'down', number: 7 },
    ],
  },

  // Level 6 (B2) - Environment
  {
    id: 'level6-environment',
    name: 'Environment & Climate',
    nameEs: 'Medio Ambiente y Clima',
    level: 6,
    difficulty: 'hard',
    gridSize: 15,
    theme: 'Environment',
    themeEs: 'Medio Ambiente',
    words: [
      { word: 'POLLUTION', clue: 'Contamination of nature', clueEs: 'Contaminación de la naturaleza', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'RENEWABLE', clue: 'Energy that can be replenished', clueEs: 'Energía que se puede reponer', row: 0, col: 5, direction: 'down', number: 2 },
      { word: 'BIODIVERSITY', clue: 'Variety of life forms', clueEs: 'Variedad de formas de vida', row: 2, col: 0, direction: 'across', number: 3 },
      { word: 'EROSION', clue: 'Wearing away of soil', clueEs: 'Desgaste del suelo', row: 1, col: 9, direction: 'down', number: 4 },
      { word: 'DEFORESTATION', clue: 'Clearing of forests', clueEs: 'Tala de bosques', row: 4, col: 0, direction: 'across', number: 5 },
      { word: 'ECOSYSTEM', clue: 'System of living things', clueEs: 'Sistema de seres vivos', row: 3, col: 11, direction: 'down', number: 6 },
      { word: 'CARBON', clue: 'Element in greenhouse gases', clueEs: 'Elemento en gases de efecto invernadero', row: 6, col: 2, direction: 'across', number: 7 },
    ],
  },

  // Level 7 (B2) - Economics
  {
    id: 'level7-economics',
    name: 'Economics & Finance',
    nameEs: 'Economía y Finanzas',
    level: 7,
    difficulty: 'hard',
    gridSize: 15,
    theme: 'Finance',
    themeEs: 'Finanzas',
    words: [
      { word: 'INFLATION', clue: 'Rising price levels', clueEs: 'Aumento del nivel de precios', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'INVESTMENT', clue: 'Putting money in assets', clueEs: 'Poner dinero en activos', row: 0, col: 3, direction: 'down', number: 2 },
      { word: 'RECESSION', clue: 'Economic downturn', clueEs: 'Recesión económica', row: 2, col: 0, direction: 'across', number: 3 },
      { word: 'DIVIDEND', clue: 'Profit paid to shareholders', clueEs: 'Ganancia pagada a accionistas', row: 1, col: 8, direction: 'down', number: 4 },
      { word: 'SUBSIDY', clue: 'Government financial aid', clueEs: 'Ayuda financiera del gobierno', row: 4, col: 1, direction: 'across', number: 5 },
      { word: 'MONOPOLY', clue: 'Single seller controls market', clueEs: 'Un solo vendedor controla el mercado', row: 3, col: 10, direction: 'down', number: 6 },
      { word: 'DEFICIT', clue: 'Spending more than income', clueEs: 'Gastar más de lo que ingresa', row: 6, col: 0, direction: 'across', number: 7 },
    ],
  },

  // Level 8 (C1) - Politics & Society
  {
    id: 'level8-politics',
    name: 'Politics & Society',
    nameEs: 'Política y Sociedad',
    level: 8,
    difficulty: 'hard',
    gridSize: 15,
    theme: 'Politics',
    themeEs: 'Política',
    words: [
      { word: 'DEMOCRACY', clue: 'Rule by the people', clueEs: 'Gobierno del pueblo', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'LEGISLATION', clue: 'Making of laws', clueEs: 'Creación de leyes', row: 0, col: 5, direction: 'down', number: 2 },
      { word: 'SOVEREIGNTY', clue: 'Supreme power of a state', clueEs: 'Poder supremo de un estado', row: 2, col: 0, direction: 'across', number: 3 },
      { word: 'AMENDMENT', clue: 'Change to a law', clueEs: 'Cambio a una ley', row: 1, col: 9, direction: 'down', number: 4 },
      { word: 'REFERENDUM', clue: 'Direct public vote', clueEs: 'Voto público directo', row: 4, col: 0, direction: 'across', number: 5 },
      { word: 'BUREAUCRACY', clue: 'Complex official system', clueEs: 'Sistema oficial complejo', row: 3, col: 10, direction: 'down', number: 6 },
      { word: 'ALLIANCE', clue: 'Agreement between groups', clueEs: 'Acuerdo entre grupos', row: 6, col: 2, direction: 'across', number: 7 },
    ],
  },

  // Level 9 (C1) - Science & Research
  {
    id: 'level9-science',
    name: 'Science & Research',
    nameEs: 'Ciencia e Investigación',
    level: 9,
    difficulty: 'hard',
    gridSize: 15,
    theme: 'Science',
    themeEs: 'Ciencia',
    words: [
      { word: 'HYPOTHESIS', clue: 'Testable scientific prediction', clueEs: 'Predicción científica comprobable', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'EMPIRICAL', clue: 'Based on observation', clueEs: 'Basado en observación', row: 0, col: 5, direction: 'down', number: 2 },
      { word: 'METHODOLOGY', clue: 'System of methods used', clueEs: 'Sistema de métodos usados', row: 2, col: 0, direction: 'across', number: 3 },
      { word: 'CATALYST', clue: 'Substance speeding reaction', clueEs: 'Sustancia que acelera reacción', row: 1, col: 9, direction: 'down', number: 4 },
      { word: 'SYNTHESIS', clue: 'Combining elements into whole', clueEs: 'Combinar elementos en un todo', row: 4, col: 0, direction: 'across', number: 5 },
      { word: 'PEER', clue: 'Equal in status (___-review)', clueEs: 'Igual en estatus (___-revisión)', row: 3, col: 11, direction: 'down', number: 6 },
      { word: 'VARIABLE', clue: 'Factor that can change', clueEs: 'Factor que puede cambiar', row: 6, col: 1, direction: 'across', number: 7 },
    ],
  },

  // Level 10 (C1) - Philosophy & Ethics
  {
    id: 'level10-philosophy',
    name: 'Philosophy & Ethics',
    nameEs: 'Filosofía y Ética',
    level: 10,
    difficulty: 'hard',
    gridSize: 15,
    theme: 'Philosophy',
    themeEs: 'Filosofía',
    words: [
      { word: 'EPISTEMOLOGY', clue: 'Study of knowledge', clueEs: 'Estudio del conocimiento', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'MORALITY', clue: 'Principles of right and wrong', clueEs: 'Principios de bien y mal', row: 0, col: 7, direction: 'down', number: 2 },
      { word: 'OBJECTIVITY', clue: 'Not influenced by feelings', clueEs: 'Sin influencia de sentimientos', row: 2, col: 0, direction: 'across', number: 3 },
      { word: 'PARADOX', clue: 'Contradictory truth', clueEs: 'Verdad contradictoria', row: 1, col: 10, direction: 'down', number: 4 },
      { word: 'DETERMINISM', clue: 'Events are causally fixed', clueEs: 'Los eventos están causalmente fijos', row: 4, col: 0, direction: 'across', number: 5 },
      { word: 'NIHILISM', clue: 'Life has no meaning', clueEs: 'La vida no tiene significado', row: 3, col: 10, direction: 'down', number: 6 },
      { word: 'PRAGMATIC', clue: 'Dealing with actual facts', clueEs: 'Tratar con hechos reales', row: 6, col: 1, direction: 'across', number: 7 },
    ],
  },

  // Level 11 (C2) - Advanced Academic
  {
    id: 'level11-academic',
    name: 'Advanced Academic',
    nameEs: 'Vocabulario Académico Avanzado',
    level: 11,
    difficulty: 'hard',
    gridSize: 15,
    theme: 'Academic',
    themeEs: 'Académico',
    words: [
      { word: 'EXTRAPOLATE', clue: 'Extend conclusions beyond data', clueEs: 'Extender conclusiones más allá de los datos', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'SCRUTINIZE', clue: 'Examine closely', clueEs: 'Examinar de cerca', row: 0, col: 7, direction: 'down', number: 2 },
      { word: 'CORROBORATE', clue: 'Confirm with evidence', clueEs: 'Confirmar con evidencia', row: 2, col: 0, direction: 'across', number: 3 },
      { word: 'POSTULATE', clue: 'Suggest as basis for theory', clueEs: 'Sugerir como base de teoría', row: 1, col: 10, direction: 'down', number: 4 },
      { word: 'JUXTAPOSE', clue: 'Place side by side for contrast', clueEs: 'Colocar lado a lado para contrastar', row: 4, col: 0, direction: 'across', number: 5 },
      { word: 'AMBIGUOUS', clue: 'Having more than one meaning', clueEs: 'Que tiene más de un significado', row: 3, col: 11, direction: 'down', number: 6 },
      { word: 'NUANCED', clue: 'Having subtle distinctions', clueEs: 'Con distinciones sutiles', row: 6, col: 0, direction: 'across', number: 7 },
    ],
  },

  // Level 12 (C2) - Literary & Rhetorical
  {
    id: 'level12-literary',
    name: 'Literary & Rhetoric',
    nameEs: 'Literario y Retórica',
    level: 12,
    difficulty: 'hard',
    gridSize: 15,
    theme: 'Literature',
    themeEs: 'Literatura',
    words: [
      { word: 'ALLEGORY', clue: 'Story with hidden meaning', clueEs: 'Historia con significado oculto', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'HYPERBOLE', clue: 'Extreme exaggeration', clueEs: 'Exageración extrema', row: 0, col: 4, direction: 'down', number: 2 },
      { word: 'METAPHOR', clue: 'Comparison without like/as', clueEs: 'Comparación sin like/as', row: 2, col: 1, direction: 'across', number: 3 },
      { word: 'SOLILOQUY', clue: 'Character speaking to self', clueEs: 'Personaje hablando solo', row: 1, col: 8, direction: 'down', number: 4 },
      { word: 'RHETORIC', clue: 'Effective use of language', clueEs: 'Uso efectivo del lenguaje', row: 4, col: 0, direction: 'across', number: 5 },
      { word: 'EUPHEMISM', clue: 'Mild word for harsh reality', clueEs: 'Palabra suave para realidad dura', row: 3, col: 10, direction: 'down', number: 6 },
      { word: 'SATIRE', clue: 'Mocking criticism through humor', clueEs: 'Crítica burlona mediante humor', row: 6, col: 2, direction: 'across', number: 7 },
    ],
  },

  // Level 13 (C2+) - Mastery Vocabulary
  {
    id: 'level13-mastery',
    name: 'Mastery Vocabulary',
    nameEs: 'Vocabulario de Maestría',
    level: 13,
    difficulty: 'hard',
    gridSize: 15,
    theme: 'Advanced',
    themeEs: 'Avanzado',
    words: [
      { word: 'OBFUSCATE', clue: 'Make unclear or obscure', clueEs: 'Hacer poco claro u oscuro', row: 0, col: 0, direction: 'across', number: 1 },
      { word: 'CIRCUMVENT', clue: 'Find a way around obstacle', clueEs: 'Encontrar manera de rodear obstáculo', row: 0, col: 6, direction: 'down', number: 2 },
      { word: 'PROLIFERATE', clue: 'Grow rapidly in number', clueEs: 'Crecer rápidamente en número', row: 2, col: 0, direction: 'across', number: 3 },
      { word: 'POLARIZE', clue: 'Divide into opposing groups', clueEs: 'Dividir en grupos opuestos', row: 1, col: 10, direction: 'down', number: 4 },
      { word: 'HEGEMONY', clue: 'Dominance over others', clueEs: 'Dominancia sobre otros', row: 4, col: 1, direction: 'across', number: 5 },
      { word: 'EPHEMERAL', clue: 'Lasting for a very short time', clueEs: 'Que dura muy poco tiempo', row: 3, col: 9, direction: 'down', number: 6 },
      { word: 'SYNERGY', clue: 'Combined effort greater than parts', clueEs: 'Esfuerzo combinado mayor que las partes', row: 6, col: 0, direction: 'across', number: 7 },
    ],
  },
];

// Helper function to create empty grid
export function createEmptyGrid(size: number): string[][] {
  return Array(size).fill(null).map(() => Array(size).fill(''));
}

// Helper function to place words on grid
export function placeWordsOnGrid(puzzle: CrosswordPuzzle): string[][] {
  const grid = createEmptyGrid(puzzle.gridSize);
  
  for (const wordData of puzzle.words) {
    const { word, row, col, direction } = wordData;
    for (let i = 0; i < word.length; i++) {
      if (direction === 'across') {
        grid[row][col + i] = word[i];
      } else {
        grid[row + i][col] = word[i];
      }
    }
  }
  
  return grid;
}

// Helper to check if answer is correct
export function checkCrosswordAnswer(
  puzzle: CrosswordPuzzle,
  userGrid: string[][]
): { correct: boolean; wrongCells: { row: number; col: number }[] } {
  const solutionGrid = placeWordsOnGrid(puzzle);
  const wrongCells: { row: number; col: number }[] = [];
  
  for (let row = 0; row < puzzle.gridSize; row++) {
    for (let col = 0; col < puzzle.gridSize; col++) {
      const solution = solutionGrid[row][col];
      const user = userGrid[row][col]?.toUpperCase() || '';
      
      if (solution && solution !== user) {
        wrongCells.push({ row, col });
      }
    }
  }
  
  return {
    correct: wrongCells.length === 0,
    wrongCells,
  };
}

export default CROSSWORD_PUZZLES;
