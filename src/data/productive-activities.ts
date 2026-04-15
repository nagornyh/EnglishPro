// Productive Activities — five new activity types not covered in the core lesson flow.
// Actividades productivas — cinco tipos nuevos que fomentan la producción activa del idioma.
//
// Types:
//  1. picture-labelling    → A1–A2  (vocabulary activation with visual anchor)
//  2. sentence-ordering    → A1–B1  (grammar awareness through scrambled tokens)
//  3. paraphrase-challenge → B1–B2  (expressing the same meaning differently)
//  4. register-swap        → B2–C1  (shifting from informal to formal and vice versa)
//  5. argument-builder     → B2–C2  (constructing a structured argument from prompts)

export type ProductiveActivityType =
  | 'picture-labelling'
  | 'sentence-ordering'
  | 'paraphrase-challenge'
  | 'register-swap'
  | 'argument-builder';

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type CefrNumeric = 1 | 2 | 3 | 4 | 5 | 6;

// ─── Shared base ─────────────────────────────────────────────────────────────

interface BaseActivity {
  id: string;
  type: ProductiveActivityType;
  title: string;
  titleEs: string;
  level: CefrLevel;
  cefrLevel: CefrNumeric;
  topic: string;
  topicEs: string;
  instructionEn: string;
  instructionEs: string;
  timeMinutes: number;
  skill: 'writing' | 'speaking' | 'both';
  tip?: string;
  tipEs?: string;
}

// ─── 1. Picture-Labelling ─────────────────────────────────────────────────────

export interface PictureLabellingActivity extends BaseActivity {
  type: 'picture-labelling';
  imageDescription: string;         // what the scene depicts
  imageDescriptionEs: string;
  labels: PictureLabel[];
  bonusTask?: string;
  bonusTaskEs?: string;
}

export interface PictureLabel {
  id: string;
  targetWord: string;
  targetWordEs: string;
  hint?: string;
  alternativeAccepted?: string[];
}

// ─── 2. Sentence-Ordering ─────────────────────────────────────────────────────

export interface SentenceOrderingActivity extends BaseActivity {
  type: 'sentence-ordering';
  items: SentenceOrderingItem[];
}

export interface SentenceOrderingItem {
  id: string;
  tokens: string[];               // shuffled tokens the learner must reorder
  correctOrder: number[];         // indices of tokens in correct order (0-based)
  targetSentence: string;         // the complete correct sentence
  translationEs: string;
  grammarNote: string;
  grammarNoteEs: string;
}

// ─── 3. Paraphrase-Challenge ──────────────────────────────────────────────────

export interface ParaphraseChallengeActivity extends BaseActivity {
  type: 'paraphrase-challenge';
  items: ParaphraseItem[];
}

export interface ParaphraseItem {
  id: string;
  original: string;
  translationEs: string;
  constraint: string;        // e.g. "Use a passive construction"
  constraintEs: string;
  modelAnswer: string;       // one acceptable paraphrase
  alternativeAnswers?: string[];
  focusStructure: string;    // grammatical structure being practised
  explanationEs: string;
}

// ─── 4. Register-Swap ────────────────────────────────────────────────────────

export interface RegisterSwapActivity extends BaseActivity {
  type: 'register-swap';
  direction: 'informal-to-formal' | 'formal-to-informal';
  context: string;
  contextEs: string;
  items: RegisterSwapItem[];
}

export interface RegisterSwapItem {
  id: string;
  original: string;
  originalRegister: 'informal' | 'formal';
  targetRegister: 'informal' | 'formal';
  modelAnswer: string;
  alternativeAnswers?: string[];
  keyChanges: string[];       // what specifically was changed
  keyChangesEs: string[];
  explanationEs: string;
}

// ─── 5. Argument-Builder ─────────────────────────────────────────────────────

export interface ArgumentBuilderActivity extends BaseActivity {
  type: 'argument-builder';
  motion: string;             // the proposition to argue for or against
  motionEs: string;
  side: 'for' | 'against' | 'both';
  scaffoldSteps: ArgumentStep[];
  usefulLanguage: UsefulLanguageItem[];
  modelParagraph?: string;
  modelParagraphEs?: string;
}

export interface ArgumentStep {
  step: number;
  prompt: string;
  promptEs: string;
  example?: string;
}

export interface UsefulLanguageItem {
  function: string;
  functionEs: string;
  phrases: string[];
}

// ─── Union type ───────────────────────────────────────────────────────────────

export type ProductiveActivity =
  | PictureLabellingActivity
  | SentenceOrderingActivity
  | ParaphraseChallengeActivity
  | RegisterSwapActivity
  | ArgumentBuilderActivity;

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

export const productiveActivities: ProductiveActivity[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // PICTURE LABELLING — A1
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'pl-a1-kitchen',
    type: 'picture-labelling',
    title: 'Label the Kitchen',
    titleEs: 'Etiqueta la Cocina',
    level: 'A1',
    cefrLevel: 1,
    topic: 'Home and household objects',
    topicEs: 'Casa y objetos del hogar',
    instructionEn: 'Look at the picture of a kitchen. Type the correct English word for each numbered item.',
    instructionEs: 'Mira la imagen de una cocina. Escribe la palabra correcta en inglés para cada elemento numerado.',
    timeMinutes: 8,
    skill: 'writing',
    imageDescription: 'A typical modern kitchen viewed from the doorway. A fridge is on the left, a cooker in the centre, a sink under a window, cupboards above and below the counter, a kettle and toaster on the worktop, and a table with chairs in the corner.',
    imageDescriptionEs: 'Una cocina moderna típica vista desde la puerta. Un frigorífico a la izquierda, una cocina en el centro, un fregadero bajo la ventana, armarios arriba y abajo de la encimera, un hervidor y una tostadora sobre la encimera, y una mesa con sillas en la esquina.',
    labels: [
      { id: '1', targetWord: 'fridge', targetWordEs: 'frigorífico / nevera', hint: 'keeps food cold', alternativeAccepted: ['refrigerator'] },
      { id: '2', targetWord: 'cooker', targetWordEs: 'cocina (electrodoméstico)', hint: 'you cook on it', alternativeAccepted: ['oven', 'stove'] },
      { id: '3', targetWord: 'sink', targetWordEs: 'fregadero', hint: 'you wash up here' },
      { id: '4', targetWord: 'cupboard', targetWordEs: 'armario', hint: 'storage above the counter', alternativeAccepted: ['cabinet'] },
      { id: '5', targetWord: 'kettle', targetWordEs: 'hervidor' },
      { id: '6', targetWord: 'toaster', targetWordEs: 'tostadora' },
      { id: '7', targetWord: 'worktop', targetWordEs: 'encimera', alternativeAccepted: ['counter', 'countertop'] },
      { id: '8', targetWord: 'chair', targetWordEs: 'silla' },
      { id: '9', targetWord: 'table', targetWordEs: 'mesa' },
      { id: '10', targetWord: 'window', targetWordEs: 'ventana' },
    ],
    bonusTask: 'Write three sentences about your own kitchen using "There is / There are".',
    bonusTaskEs: 'Escribe tres oraciones sobre tu cocina usando "There is / There are".',
    tip: 'In British English: "cooker" (the appliance), NOT "kitchen". Kitchen = the room!',
    tipEs: '"Cooker" = el electrodoméstico en inglés británico. "Kitchen" = la habitación. ¡No los confundas!',
  },

  {
    id: 'pl-a2-town',
    type: 'picture-labelling',
    title: 'Label the Town',
    titleEs: 'Etiqueta la Ciudad',
    level: 'A2',
    cefrLevel: 2,
    topic: 'Places in a town',
    topicEs: 'Lugares en una ciudad',
    instructionEn: 'Look at the map of a town centre. Label each numbered building or place.',
    instructionEs: 'Mira el mapa del centro de una ciudad. Etiqueta cada edificio o lugar numerado.',
    timeMinutes: 10,
    skill: 'writing',
    imageDescription: 'A bird\'s-eye view map of a town centre showing: a supermarket, a pharmacy, a post office, a bank, a library, a bus station, a park, a hotel, a police station and a restaurant.',
    imageDescriptionEs: 'Vista aérea de un centro urbano con: supermercado, farmacia, correos, banco, biblioteca, estación de autobús, parque, hotel, comisaría y restaurante.',
    labels: [
      { id: '1', targetWord: 'supermarket', targetWordEs: 'supermercado' },
      { id: '2', targetWord: 'pharmacy', targetWordEs: 'farmacia', alternativeAccepted: ['chemist', 'drugstore'] },
      { id: '3', targetWord: 'post office', targetWordEs: 'correos / oficina de correos' },
      { id: '4', targetWord: 'bank', targetWordEs: 'banco' },
      { id: '5', targetWord: 'library', targetWordEs: 'biblioteca' },
      { id: '6', targetWord: 'bus station', targetWordEs: 'estación de autobús' },
      { id: '7', targetWord: 'park', targetWordEs: 'parque' },
      { id: '8', targetWord: 'hotel', targetWordEs: 'hotel' },
      { id: '9', targetWord: 'police station', targetWordEs: 'comisaría' },
      { id: '10', targetWord: 'restaurant', targetWordEs: 'restaurante' },
    ],
    bonusTask: 'Write directions from the hotel to the library using: go straight, turn left/right, take the first/second street.',
    bonusTaskEs: 'Escribe instrucciones desde el hotel hasta la biblioteca usando: go straight, turn left/right, take the first/second street.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SENTENCE ORDERING — A1, A2, B1
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'so-a1-present-simple',
    type: 'sentence-ordering',
    title: 'Build Present Simple Sentences',
    titleEs: 'Construye Oraciones en Presente Simple',
    level: 'A1',
    cefrLevel: 1,
    topic: 'Daily routines',
    topicEs: 'Rutinas diarias',
    instructionEn: 'Put the words in the correct order to make a sentence.',
    instructionEs: 'Pon las palabras en el orden correcto para formar una oración.',
    timeMinutes: 10,
    skill: 'writing',
    items: [
      {
        id: 's1',
        tokens: ['breakfast', 'always', 'She', 'at', 'seven', 'has', '.'],
        correctOrder: [2, 1, 0, 5, 3, 4, 6],
        targetSentence: 'She always has breakfast at seven.',
        translationEs: 'Ella siempre desayuna a las siete.',
        grammarNote: 'Adverb of frequency (always) goes BEFORE the main verb, AFTER the subject.',
        grammarNoteEs: 'El adverbio de frecuencia (always) va ANTES del verbo principal, DESPUÉS del sujeto: S + always + V.',
      },
      {
        id: 's2',
        tokens: ['not', 'do', 'coffee', 'drink', 'I', '.'],
        correctOrder: [4, 0, 1, 3, 2, 5],
        targetSentence: 'I do not drink coffee.',
        translationEs: 'Yo no bebo café.',
        grammarNote: 'Negative present simple: subject + do not / does not + base verb.',
        grammarNoteEs: 'Negativa del presente simple: sujeto + do not / does not + infinitivo. NO añadimos -s al verbo después de "don\'t".',
      },
      {
        id: 's3',
        tokens: ['he', 'Does', 'a', 'car', 'have', '?'],
        correctOrder: [1, 0, 4, 2, 3, 5],
        targetSentence: 'Does he have a car?',
        translationEs: '¿Tiene él un coche?',
        grammarNote: 'Yes/no questions: Does + subject + base verb + ...?',
        grammarNoteEs: 'Preguntas de sí/no: Does + sujeto + verbo base + ...? El auxiliar "does" va al principio.',
      },
      {
        id: 's4',
        tokens: ['work', 'My', 'in', 'sister', 'school', 'a', '.'],
        correctOrder: [1, 3, 0, 2, 5, 4, 6],
        targetSentence: 'My sister works in a school.',
        translationEs: 'Mi hermana trabaja en un colegio.',
        grammarNote: 'Third person singular (he/she/it) adds -s to the verb: work → works.',
        grammarNoteEs: 'Tercera persona singular (he/she/it) añade -s al verbo: work → works.',
      },
      {
        id: 's5',
        tokens: ['do', 'What', 'do', 'they', 'evenings', 'in', '?'],
        correctOrder: [1, 2, 3, 0, 5, 4, 6],
        targetSentence: 'What do they do in the evenings?',
        translationEs: '¿Qué hacen ellos por las tardes/noches?',
        grammarNote: 'Wh- question word + do + subject + base verb.',
        grammarNoteEs: 'Preguntas con Wh- : What/Where/When + do/does + sujeto + verbo base.',
      },
    ],
    tip: 'Check: does the subject have -s on the verb? Does the question start with do/does?',
    tipEs: 'Comprueba: ¿el sujeto lleva -s en el verbo? ¿La pregunta empieza con do/does?',
  },

  {
    id: 'so-a2-past-simple',
    type: 'sentence-ordering',
    title: 'Build Past Simple Sentences',
    titleEs: 'Construye Oraciones en Pasado Simple',
    level: 'A2',
    cefrLevel: 2,
    topic: 'Narrating past events',
    topicEs: 'Narrar eventos pasados',
    instructionEn: 'Reorder the words to make correct past simple sentences.',
    instructionEs: 'Reordena las palabras para formar oraciones correctas en pasado simple.',
    timeMinutes: 12,
    skill: 'writing',
    items: [
      {
        id: 's1',
        tokens: ['visited', 'last', 'We', 'museum', 'year', 'the', '.'],
        correctOrder: [2, 0, 5, 3, 1, 4, 6],
        targetSentence: 'We visited the museum last year.',
        translationEs: 'Visitamos el museo el año pasado.',
        grammarNote: 'Regular past simple: verb + -ed. "Last year" usually goes at the end.',
        grammarNoteEs: 'Pasado simple regular: verbo + -ed. Las expresiones de tiempo (last year, yesterday) suelen ir al final.',
      },
      {
        id: 's2',
        tokens: ["didn't", 'They', 'the', 'match', 'win', '.'],
        correctOrder: [1, 0, 4, 2, 3, 5],
        targetSentence: "They didn't win the match.",
        translationEs: 'Ellos no ganaron el partido.',
        grammarNote: 'Negative past simple: subject + did not (didn\'t) + base (infinitive) verb.',
        grammarNoteEs: 'Negativa del pasado: sujeto + did not (didn\'t) + infinitivo. El verbo vuelve a su forma base después de "didn\'t".',
      },
      {
        id: 's3',
        tokens: ['did', 'Where', 'you', 'go', 'holiday', 'on', '?'],
        correctOrder: [1, 0, 2, 3, 5, 4, 6],
        targetSentence: 'Where did you go on holiday?',
        translationEs: '¿Adónde fuiste de vacaciones?',
        grammarNote: 'Past question: Wh- word + did + subject + base verb.',
        grammarNoteEs: 'Pregunta en pasado: Wh- + did + sujeto + verbo base. ¡"Go", no "went"! "Did" ya lleva la marca de pasado.',
      },
      {
        id: 's4',
        tokens: ['told', 'the', 'teacher', 'him', 'The', 'truth', '.'],
        correctOrder: [4, 2, 0, 3, 1, 5, 6],
        targetSentence: 'The teacher told him the truth.',
        translationEs: 'El maestro le dijo la verdad.',
        grammarNote: '"Told" is the irregular past of "tell". Pattern: subject + verb + object + object.',
        grammarNoteEs: '"Told" es el pasado irregular de "tell" (decir). Patrón con doble objeto: sujeto + verbo + objeto indirecto + objeto directo.',
      },
    ],
  },

  {
    id: 'so-b1-present-perfect',
    type: 'sentence-ordering',
    title: 'Present Perfect vs Past Simple',
    titleEs: 'Presente Perfecto vs Pasado Simple',
    level: 'B1',
    cefrLevel: 3,
    topic: 'Experience and recent events',
    topicEs: 'Experiencias y eventos recientes',
    instructionEn: 'Reorder the words. Decide whether the sentence uses Past Simple or Present Perfect and why.',
    instructionEs: 'Reordena las palabras. Decide si la oración usa Pasado Simple o Presente Perfecto y explica por qué.',
    timeMinutes: 15,
    skill: 'writing',
    items: [
      {
        id: 's1',
        tokens: ['have', 'I', 'never', 'tried', 'sushi', '.'],
        correctOrder: [1, 0, 2, 3, 4, 5],
        targetSentence: 'I have never tried sushi.',
        translationEs: 'Nunca he probado el sushi.',
        grammarNote: 'Present Perfect with "never" = life experience without specific time.',
        grammarNoteEs: 'Presente Perfecto con "never" = experiencia vital sin tiempo específico. En español decimos "he probado", igual que en inglés: have + past participle.',
      },
      {
        id: 's2',
        tokens: ['ate', 'She', 'lunch', 'ago', 'an', 'hour', '.'],
        correctOrder: [1, 0, 2, 4, 5, 3, 6],
        targetSentence: 'She ate lunch an hour ago.',
        translationEs: 'Ella almorzó hace una hora.',
        grammarNote: '"Ago" → Past Simple only. Specific finished time in the past = Past Simple.',
        grammarNoteEs: '"Ago" (hace + tiempo) siempre requiere Pasado Simple. Tiempo específico terminado = Pasado Simple, no Presente Perfecto.',
      },
      {
        id: 's3',
        tokens: ['already', 'has', 'the', 'report', 'finished', 'He', '.'],
        correctOrder: [5, 1, 0, 4, 2, 3, 6],
        targetSentence: 'He has already finished the report.',
        translationEs: 'Ya ha terminado el informe.',
        grammarNote: '"Already" with Present Perfect signals a result relevant to now.',
        grammarNoteEs: '"Already" + Presente Perfecto: la acción ya ocurrió y el resultado es relevante ahora. "Already" va entre el auxiliar y el participio.',
      },
      {
        id: 's4',
        tokens: ['did', 'you', 'meet', 'When', 'them', '?'],
        correctOrder: [3, 0, 1, 2, 4, 5],
        targetSentence: 'When did you meet them?',
        translationEs: '¿Cuándo los conociste?',
        grammarNote: '"When" + specific time question → Past Simple (not Present Perfect).',
        grammarNoteEs: '"When" pregunta por un momento específico → Pasado Simple. NUNCA "When have you met them?" En inglés, las preguntas con "when" usan Pasado Simple.',
      },
    ],
    tip: 'Key triggers: ago/yesterday/last = Past Simple. Never/ever/already/just/yet = Present Perfect.',
    tipEs: 'Señales clave: ago/yesterday/last → Pasado Simple. Never/ever/already/just/yet → Presente Perfecto.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PARAPHRASE CHALLENGE — B1, B2
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'pc-b1-passive',
    type: 'paraphrase-challenge',
    title: 'Passive Voice Paraphrase',
    titleEs: 'Paráfrasis con Voz Pasiva',
    level: 'B1',
    cefrLevel: 3,
    topic: 'Processes and events',
    topicEs: 'Procesos y eventos',
    instructionEn: 'Rewrite each sentence using the passive voice. You may omit the agent if it is unimportant.',
    instructionEs: 'Reescribe cada oración usando la voz pasiva. Puedes omitir el agente si no es importante.',
    timeMinutes: 15,
    skill: 'writing',
    items: [
      {
        id: 'p1',
        original: 'Someone stole my bike last night.',
        translationEs: 'Alguien robó mi bici anoche.',
        constraint: 'Use passive voice, omit the agent.',
        constraintEs: 'Usa la voz pasiva, omite el agente.',
        modelAnswer: 'My bike was stolen last night.',
        focusStructure: 'Past simple passive: was/were + past participle',
        explanationEs: '"My bike" pasa a ser el sujeto. "was stolen" = was + past participle de steal. Como no sabemos quién robó, no incluimos "by someone".',
      },
      {
        id: 'p2',
        original: 'They are building a new hospital.',
        translationEs: 'Están construyendo un nuevo hospital.',
        constraint: 'Use passive voice.',
        constraintEs: 'Usa la voz pasiva.',
        modelAnswer: 'A new hospital is being built.',
        focusStructure: 'Present continuous passive: is/are being + past participle',
        explanationEs: '"is being built" = presente continuo pasivo. El proceso en progreso queda en el centro. "They" desaparece como agente desconocido/general.',
      },
      {
        id: 'p3',
        original: 'The manager will announce the results tomorrow.',
        translationEs: 'El director anunciará los resultados mañana.',
        constraint: 'Use future passive. Keep the agent.',
        constraintEs: 'Usa el futuro pasivo. Mantén el agente.',
        modelAnswer: 'The results will be announced by the manager tomorrow.',
        alternativeAnswers: ['The results will be announced tomorrow by the manager.'],
        focusStructure: 'Future passive: will be + past participle',
        explanationEs: '"will be announced" = futuro pasivo. El agente es importante aquí (es el director), así que lo mantenemos con "by the manager".',
      },
      {
        id: 'p4',
        original: 'People have spoken English in this region for centuries.',
        translationEs: 'La gente ha hablado inglés en esta región durante siglos.',
        constraint: 'Use present perfect passive.',
        constraintEs: 'Usa el presente perfecto pasivo.',
        modelAnswer: 'English has been spoken in this region for centuries.',
        focusStructure: 'Present perfect passive: has/have been + past participle',
        explanationEs: '"has been spoken" = presente perfecto pasivo. "People" desaparece como agente genérico. Nota: "English" → 3ª persona singular → "has been".',
      },
    ],
    tip: 'Passive pattern: be (in the right tense) + past participle. The object of the active becomes the subject.',
    tipEs: 'Fórmula pasiva: verbo "be" (en el tiempo correcto) + participio. El objeto del activo se convierte en sujeto del pasivo.',
  },

  {
    id: 'pc-b2-conditionals',
    type: 'paraphrase-challenge',
    title: 'Conditional Paraphrase',
    titleEs: 'Paráfrasis con Condicionales',
    level: 'B2',
    cefrLevel: 4,
    topic: 'Hypothetical situations',
    topicEs: 'Situaciones hipotéticas',
    instructionEn: 'Paraphrase each sentence using the conditional type indicated. Change the form but keep the meaning.',
    instructionEs: 'Parafrasea cada oración usando el tipo de condicional indicado. Cambia la forma pero mantén el significado.',
    timeMinutes: 18,
    skill: 'writing',
    items: [
      {
        id: 'p1',
        original: 'I don\'t know the answer, so I can\'t help you.',
        translationEs: 'No sé la respuesta, así que no puedo ayudarte.',
        constraint: 'Rewrite as a second conditional.',
        constraintEs: 'Reescribe como condicional 2.',
        modelAnswer: 'If I knew the answer, I could help you.',
        focusStructure: 'Second conditional: If + past simple, would/could + infinitive',
        explanationEs: '"If I knew" — pasado simple para expresar una hipótesis irreal en el presente. "could help" porque la posibilidad depende de la condición. NO "would know".',
      },
      {
        id: 'p2',
        original: 'You didn\'t study, so you failed the exam.',
        translationEs: 'No estudiaste, así que suspendiste el examen.',
        constraint: 'Rewrite as a third conditional.',
        constraintEs: 'Reescribe como condicional 3.',
        modelAnswer: 'If you had studied, you would have passed the exam.',
        alternativeAnswers: ['Had you studied, you would have passed the exam.'],
        focusStructure: 'Third conditional: If + past perfect, would have + past participle',
        explanationEs: '"If you had studied" = pasado perfecto. Imaginamos el pasado diferente. "would have passed" = resultado hipotético en el pasado.',
      },
      {
        id: 'p3',
        original: 'Call me if you need anything.',
        translationEs: 'Llámame si necesitas algo.',
        constraint: 'Rewrite using "should" inversion (formal style).',
        constraintEs: 'Reescribe con inversión con "should" (estilo formal).',
        modelAnswer: 'Should you need anything, call me.',
        focusStructure: 'Formal inversion with should: Should + subject + infinitive, ...',
        explanationEs: '"Should you need" = inversión formal. Equivalente a "If you should need". Muy común en inglés escrito formal (cartas, contratos): "Should you require further assistance..."',
      },
      {
        id: 'p4',
        original: 'A better education system would reduce inequality.',
        translationEs: 'Un mejor sistema educativo reduciría la desigualdad.',
        constraint: 'Rewrite using "were to" (formal hypothetical).',
        constraintEs: 'Reescribe usando "were to" (hipotético formal).',
        modelAnswer: 'Were the education system to improve, inequality would be reduced.',
        focusStructure: 'Formal inversion: Were + subject + to + infinitive, would + infinitive',
        explanationEs: '"Were the system to improve" = hipotético formal con inversión. Equivale a "If the system were to improve". Usar en ensayos, discursos formales.',
      },
    ],
    tip: 'Each conditional type maps to a different time/reality: 0=fact, 1=likely, 2=unlikely present, 3=impossible past.',
    tipEs: 'Cada tipo de condicional corresponde a un tiempo/realidad diferente: 0=hecho, 1=probable futuro, 2=hipótesis presente, 3=hipótesis pasada imposible.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // REGISTER SWAP — B2, C1
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'rs-b2-email',
    type: 'register-swap',
    title: 'From Informal to Formal Email',
    titleEs: 'De Correo Informal a Formal',
    level: 'B2',
    cefrLevel: 4,
    topic: 'Professional communication',
    topicEs: 'Comunicación profesional',
    instructionEn: 'Rewrite each informal phrase or sentence in a formal register suitable for a professional email.',
    instructionEs: 'Reescribe cada frase o oración informal en un registro formal adecuado para un correo profesional.',
    direction: 'informal-to-formal',
    context: 'You are writing to a potential employer to ask about a job vacancy.',
    contextEs: 'Estás escribiendo a un posible empleador para preguntar sobre una vacante de empleo.',
    timeMinutes: 20,
    skill: 'writing',
    items: [
      {
        id: 'r1',
        original: 'Hey! I saw your job ad and I wanna apply.',
        originalRegister: 'informal',
        targetRegister: 'formal',
        modelAnswer: 'I am writing to express my interest in the position advertised on your website.',
        keyChanges: ['Remove "Hey" → use "Dear + name/title"', '"wanna" → "would like to"', 'Add full purpose statement'],
        keyChangesEs: ['Elimina "Hey" → usa "Dear + nombre/cargo"', '"wanna" → "would like to / wish to"', 'Añade una frase de propósito completa'],
        explanationEs: 'En un correo formal, la apertura y la primera oración establecen el tono. "I am writing to..." es la fórmula estándar para indicar el propósito.',
      },
      {
        id: 'r2',
        original: "I'm really good at talking to people and I'm a quick learner.",
        originalRegister: 'informal',
        targetRegister: 'formal',
        modelAnswer: 'I have strong interpersonal skills and am able to acquire new competencies efficiently.',
        alternativeAnswers: ['I possess excellent communication skills and demonstrate an ability to learn new skills rapidly.'],
        keyChanges: ['"really good at talking to people" → "strong interpersonal / communication skills"', '"quick learner" → "acquire new competencies efficiently"'],
        keyChangesEs: ['"really good at" → "have strong / possess"', '"talking to people" → "interpersonal/communication skills"', '"quick learner" → "acquire new competencies" (léxico técnico de RRHH)'],
        explanationEs: 'En inglés profesional se usan sustantivos y frases nominales: "interpersonal skills", "competencies". Evita los coloquialismos aunque sean gramaticalmente correctos.',
      },
      {
        id: 'r3',
        original: "I'd love to come for an interview. Just let me know when!",
        originalRegister: 'informal',
        targetRegister: 'formal',
        modelAnswer: 'I would welcome the opportunity to attend an interview at your earliest convenience.',
        keyChanges: ['"I\'d love to" → "I would welcome the opportunity to"', '"Just let me know when" → "at your earliest convenience"'],
        keyChangesEs: ['"I\'d love to" → "I would welcome the opportunity"', '"Just let me know" → "at your earliest convenience" o "at a time that is convenient for you"'],
        explanationEs: '"At your earliest convenience" es una fórmula estándar de cortesía formal que elimina la presión de la fecha y suena más profesional.',
      },
      {
        id: 'r4',
        original: "Looking forward to hearing back from you. Thanks!",
        originalRegister: 'informal',
        targetRegister: 'formal',
        modelAnswer: 'I look forward to hearing from you. Yours sincerely, [Name]',
        alternativeAnswers: ['I await your response with interest. Yours faithfully, [Name]'],
        keyChanges: ['"Thanks!" → "Yours sincerely/faithfully"', '"hearing back" → "hearing from you"', 'Add correct formal closing'],
        keyChangesEs: ['"Thanks!" → cierre formal: "Yours sincerely" (si sabes el nombre) / "Yours faithfully" (si no sabes el nombre)', '"hearing back" → "hearing from you"'],
        explanationEs: 'El cierre es fundamental: "Yours sincerely" cuando sabes el nombre del destinatario; "Yours faithfully" cuando escribes "Dear Sir/Madam".',
      },
    ],
    tip: 'Formal English: full forms (I am, not I\'m), no slang, more complex noun phrases, set phrases like "I look forward to...".',
    tipEs: 'Inglés formal: formas plenas (I am, no I\'m), sin argot, frases nominales más complejas, fórmulas fijas como "I look forward to hearing from you."',
  },

  {
    id: 'rs-c1-reporting',
    type: 'register-swap',
    title: 'From Spoken to Written Academic Register',
    titleEs: 'Del Registro Oral al Académico Escrito',
    level: 'C1',
    cefrLevel: 5,
    topic: 'Academic writing and spoken language',
    topicEs: 'Escritura académica y lengua oral',
    instructionEn: 'These informal spoken ideas must be rewritten in formal academic prose. Maintain the meaning but raise the register significantly.',
    instructionEs: 'Estas ideas informales orales deben reescribirse en prosa académica formal. Mantén el significado pero eleva considerablemente el registro.',
    direction: 'informal-to-formal',
    context: 'These are notes from an oral discussion that need to be incorporated into an academic essay.',
    contextEs: 'Estas son notas de una discusión oral que deben incorporarse a un ensayo académico.',
    timeMinutes: 25,
    skill: 'writing',
    items: [
      {
        id: 'r1',
        original: 'Social media is obviously bad for teenagers and it makes them feel bad about themselves.',
        originalRegister: 'informal',
        targetRegister: 'formal',
        modelAnswer: 'Research suggests that prolonged exposure to social media platforms may have a detrimental effect on adolescent self-esteem.',
        keyChanges: ['Hedge "obviously" → "research suggests"', '"bad for" → "detrimental effect on"', '"feel bad about themselves" → "adolescent self-esteem"', 'Add modality: "may have"'],
        keyChangesEs: ['Elimina "obviously" — en académico se evitan afirmaciones absolutas', '"bad for" → "detrimental effect on" (nominalización)', '"feel bad about themselves" → "self-esteem" (concepto técnico)', '"may have" → hedging: evita afirmaciones absolutas'],
        explanationEs: 'El registro académico usa nominalizaciones ("effect" vs "makes them feel"), hedging ("may", "suggests") y léxico técnico de las ciencias sociales.',
      },
      {
        id: 'r2',
        original: 'Lots of companies are getting richer while their workers are getting paid less and less.',
        originalRegister: 'informal',
        targetRegister: 'formal',
        modelAnswer: 'A growing number of corporations are experiencing significant increases in profit margins while simultaneously reducing the real wages of their workforce.',
        keyChanges: ['"Lots of" → "A growing number of"', '"getting richer" → "experiencing increases in profit margins"', '"getting paid less and less" → "reducing real wages"'],
        keyChangesEs: ['"Lots of" → "A growing number of / an increasing proportion of"', '"getting richer" → nominalización: "experiencing increases in profit margins"', '"paid less and less" → "reduction in real wages" o "declining real wages"'],
        explanationEs: 'En prosa académica se prefieren las nominalizaciones: "experience an increase" en lugar de "get richer". También se evita el lenguaje demasiado directo o emocional.',
      },
      {
        id: 'r3',
        original: 'It\'s pretty clear that the government just doesn\'t care about poor people.',
        originalRegister: 'informal',
        targetRegister: 'formal',
        modelAnswer: 'The available evidence arguably indicates that current government policy fails to adequately address the needs of economically disadvantaged populations.',
        keyChanges: ['"Pretty clear" → "arguably indicates"', '"just doesn\'t care" → "fails to adequately address the needs of"', '"poor people" → "economically disadvantaged populations"'],
        keyChangesEs: ['"pretty clear" → hedging: "arguably indicates", "suggests"', '"doesn\'t care" → "fails to address" (más neutro y académico)', '"poor people" → "economically disadvantaged/marginalised populations" (terminología sociológica)'],
        explanationEs: '"Arguably" suaviza la afirmación y la hace defendible. Las ciencias sociales prefieren términos neutros como "economically disadvantaged" a las cargas emocionales.',
      },
    ],
    tip: 'Academic register hallmarks: hedging (arguably/may), nominalisation (improve → improvement), passive structures, no contractions.',
    tipEs: 'Rasgos del registro académico: hedging (arguably, may, suggests), nominalización (improve → improvement), pasivas, sin contracciones.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ARGUMENT BUILDER — B2, C1, C2
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'ab-b2-social-media',
    type: 'argument-builder',
    title: 'Argument Builder: Social Media and Young People',
    titleEs: 'Constructor de Argumentos: Redes Sociales y Jóvenes',
    level: 'B2',
    cefrLevel: 4,
    topic: 'Technology and society',
    topicEs: 'Tecnología y sociedad',
    instructionEn: 'Use the scaffolding steps below to build a well-structured paragraph arguing FOR or AGAINST the motion.',
    instructionEs: 'Usa los pasos de andamiaje a continuación para construir un párrafo bien estructurado a favor o en contra de la proposición.',
    timeMinutes: 25,
    skill: 'writing',
    motion: 'Social media does more harm than good to young people.',
    motionEs: 'Las redes sociales hacen más daño que bien a los jóvenes.',
    side: 'both',
    scaffoldSteps: [
      { step: 1, prompt: 'State your main claim clearly.', promptEs: 'Declara tu idea principal de forma clara.', example: 'Social media has a predominantly negative impact on the mental health of young people.' },
      { step: 2, prompt: 'Give specific evidence or an example to support it.', promptEs: 'Da una evidencia o ejemplo específico para apoyarla.', example: 'Studies have shown that heavy social media use is correlated with increased rates of anxiety and depression in adolescents.' },
      { step: 3, prompt: 'Explain WHY this evidence supports your claim (the "so what?").', promptEs: 'Explica POR QUÉ esta evidencia apoya tu idea (el "¿y qué?").', example: 'This suggests that the constant comparison to curated images of others\' lives can damage young people\'s self-esteem.' },
      { step: 4, prompt: 'Acknowledge a counter-argument briefly.', promptEs: 'Reconoce brevemente un contraargumento.', example: 'While some argue that social media provides valuable communities for marginalised young people...' },
      { step: 5, prompt: 'Refute or qualify the counter-argument.', promptEs: 'Refuta o matiza el contraargumento.', example: '...these benefits, though real, do not outweigh the documented psychological risks for the majority of users.' },
    ],
    usefulLanguage: [
      { function: 'Stating a claim', functionEs: 'Hacer una afirmación', phrases: ['It is argued that...', 'Research suggests that...', 'There is compelling evidence that...'] },
      { function: 'Adding evidence', functionEs: 'Añadir evidencia', phrases: ['Studies have shown that...', 'According to...', 'A survey conducted by... found that...'] },
      { function: 'Explaining relevance', functionEs: 'Explicar la relevancia', phrases: ['This suggests that...', 'This indicates that...', 'This demonstrates that...'] },
      { function: 'Conceding a point', functionEs: 'Conceder un punto', phrases: ['While it is true that...', 'Although some argue that...', 'It cannot be denied that...'] },
      { function: 'Refuting', functionEs: 'Refutar', phrases: ['...this does not outweigh...', '...this argument fails to account for...', '...the evidence points in the opposite direction.'] },
    ],
    modelParagraph: 'It is argued that social media has a predominantly negative impact on the mental health of young people. Research conducted by the Royal Society for Public Health found that platforms such as Instagram are strongly correlated with increased rates of anxiety, depression, and poor body image in adolescents. This suggests that the constant comparison to curated images of others\' apparently perfect lives can cause lasting damage to developing self-esteem. While some advocates point to the communities and support networks that social media can provide for isolated young people, a benefit which is genuine and should not be dismissed, these positive outcomes do not outweigh the documented psychological harm that affects the majority of young users. Structural change — such as age verification, algorithm regulation, and mandatory digital literacy education — is therefore urgently required.',
    modelParagraphEs: 'Este es un ejemplo de párrafo argumentativo completo siguiendo los 5 pasos de andamiaje. Nota: (1) afirmación → (2) evidencia → (3) explicación → (4) contraargumento → (5) refutación + llamada a la acción.',
    tip: 'A strong argument does not ignore counterarguments — it engages with them and then refutes them. This is what makes writing convincing.',
    tipEs: 'Un argumento sólido no ignora los contraargumentos, los enfrenta y los refuta. Esto es lo que hace que la escritura sea convincente.',
  },

  {
    id: 'ab-c1-technology-ethics',
    type: 'argument-builder',
    title: 'Argument Builder: Artificial Intelligence in the Workplace',
    titleEs: 'Constructor de Argumentos: Inteligencia Artificial en el Trabajo',
    level: 'C1',
    cefrLevel: 5,
    topic: 'Technology, employment and ethics',
    topicEs: 'Tecnología, empleo y ética',
    instructionEn: 'Write two paragraphs of an academic essay arguing AGAINST the motion. Use hedging language and formal register throughout.',
    instructionEs: 'Escribe dos párrafos de un ensayo académico argumentando EN CONTRA de la proposición. Usa lenguaje de distanciamiento y registro formal.',
    timeMinutes: 35,
    skill: 'writing',
    motion: 'The widespread adoption of artificial intelligence in the workplace is net beneficial for society.',
    motionEs: 'La adopción generalizada de inteligencia artificial en el trabajo es beneficiosa para la sociedad en términos netos.',
    side: 'against',
    scaffoldSteps: [
      { step: 1, prompt: 'Open with a concession — acknowledge what is true in the "for" position.', promptEs: 'Abre con una concesión — reconoce lo que es verdad en la posición "a favor".', example: 'Proponents of AI adoption rightly observe that automation can eliminate dangerous, repetitive tasks and significantly increase productive efficiency...' },
      { step: 2, prompt: 'Introduce your main objection with a pivot word (however, yet, nevertheless).', promptEs: 'Introduce tu objeción principal con una palabra pivote (however, yet, nevertheless).', example: '...however, this optimistic framing tends to obscure the profound distributional question of who, precisely, benefits from these efficiency gains.' },
      { step: 3, prompt: 'Develop with specific evidence: economic, social or ethical.', promptEs: 'Desarrolla con evidencia específica: económica, social o ética.', example: 'Research by economists Daron Acemoglu and Pascual Restrepo has demonstrated that AI-driven automation disproportionately displaces middle-skill workers...' },
      { step: 4, prompt: 'Extend the argument to a second dimension (e.g. from economic to ethical, or from individual to societal).', promptEs: 'Extiende el argumento a una segunda dimensión (p.ej. de lo económico a lo ético, de lo individual a lo social).', example: 'Beyond the economic dimension, there are deeper questions of agency and dignity...' },
      { step: 5, prompt: 'End your second paragraph with a conditional or hypothetical that shows what WOULD need to be true for AI to be net beneficial.', promptEs: 'Termina tu segundo párrafo con un condicional o hipotético que muestre qué tendría que ser cierto para que la IA fuera beneficiosa en términos netos.', example: 'Were the gains from AI to be shared equitably — through redistributive taxation, retraining programmes, or reduced working hours — the case for net benefit would be considerably stronger. In the current institutional context, however, this remains a hypothetical rather than a policy reality.' },
    ],
    usefulLanguage: [
      { function: 'Conceding while arguing against', functionEs: 'Conceder mientras argumentas en contra', phrases: ['While it is undeniable that...', 'Proponents rightly observe that...', 'There is clearly some merit in the claim that...', '...this framing, however, obscures...'] },
      { function: 'Introducing a counter-claim', functionEs: 'Introducir un contraargumento', phrases: ['Nevertheless, a closer examination reveals...', 'This argument, however, fails to account for...', 'What this position does not address is...'] },
      { function: 'Hedging claims', functionEs: 'Expresar afirmaciones con cautela', phrases: ['There is compelling evidence to suggest that...', 'It could be argued that...', 'The evidence points toward...', 'One might reasonably conclude that...'] },
      { function: 'Conditional / hypothetical', functionEs: 'Condicional / hipotético', phrases: ['Were these conditions to be met...', 'Only if...were...would...', 'In the absence of such measures, it is difficult to envisage...'] },
    ],
    tip: 'At C1, the sophistication of an academic argument lies not in what you assert but in how carefully you qualify, concede and distinguish.',
    tipEs: 'En C1, la sofisticación de un argumento académico no está en lo que afirmas sino en cómo matizas, concedes y distingues con precisión.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NEW ACTIVITIES — Paraphrase C1, Argument Builder C2
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'pc-c1-nominalisation',
    type: 'paraphrase-challenge',
    title: 'Academic Nominalisation Paraphrase',
    titleEs: 'Paráfrasis con Nominalización Académica',
    level: 'C1',
    cefrLevel: 5,
    topic: 'Academic writing style',
    topicEs: 'Estilo de escritura académica',
    instructionEn: 'Rewrite each sentence using nominalisation. Transform verbs and adjectives into noun phrases to achieve a more formal, academic register.',
    instructionEs: 'Reescribe cada oración usando nominalización. Transforma verbos y adjetivos en frases nominales para lograr un registro más formal y académico.',
    timeMinutes: 20,
    skill: 'writing',
    items: [
      {
        id: 'p1',
        original: 'The government decided to reduce spending, which caused unemployment to rise.',
        translationEs: 'El gobierno decidió reducir el gasto, lo que causó que el desempleo aumentara.',
        constraint: 'Use nominalisation. Start with "The government\'s..."',
        constraintEs: 'Usa nominalización. Empieza con "The government\'s..."',
        modelAnswer: "The government's decision to reduce spending resulted in a rise in unemployment.",
        alternativeAnswers: ["The government's decision to cut spending led to an increase in unemployment."],
        focusStructure: 'Nominalisation: verb → noun (decide → decision, reduce → reduction); clause → noun phrase',
        explanationEs: '"decided to reduce" → "decision to reduce"; "caused...to rise" → "resulted in a rise". La nominalización convierte procesos (verbos) en entidades (sustantivos), típico del registro académico.',
      },
      {
        id: 'p2',
        original: 'Researchers discovered that the drug was effective, so they recommended its use.',
        translationEs: 'Los investigadores descubrieron que el fármaco era efectivo, por lo que recomendaron su uso.',
        constraint: 'Use nominalisation. Omit the agent where appropriate.',
        constraintEs: 'Usa nominalización. Omite el agente cuando sea apropiado.',
        modelAnswer: 'The discovery of the drug\'s effectiveness led to a recommendation for its use.',
        focusStructure: 'Nominalisation with -tion/-ment suffixes; passive-like structures without explicit agent',
        explanationEs: '"discovered" → "discovery"; "was effective" → "effectiveness"; "recommended" → "recommendation". El agente (researchers) se omite para un tono más impersonal y objetivo.',
      },
      {
        id: 'p3',
        original: 'If we analyse the data carefully, we will understand the pattern.',
        translationEs: 'Si analizamos los datos con cuidado, entenderemos el patrón.',
        constraint: 'Rewrite using a nominal phrase. Use "Careful..." or "A careful..."',
        constraintEs: 'Reescribe usando una frase nominal. Usa "Careful..." o "A careful..."',
        modelAnswer: 'A careful analysis of the data will lead to an understanding of the pattern.',
        focusStructure: 'Conditional clause → nominal subject; abstract nouns for processes',
        explanationEs: '"If we analyse carefully" → "A careful analysis"; "we will understand" → "will lead to an understanding". La nominalización elimina el sujeto humano y da mayor objetividad.',
      },
      {
        id: 'p4',
        original: 'The company failed to meet its targets, which disappointed the shareholders.',
        translationEs: 'La empresa no cumplió sus objetivos, lo que decepcionó a los accionistas.',
        constraint: 'Use nominalisation. Emphasise the failure and its consequence.',
        constraintEs: 'Usa nominalización. Enfatiza el fracaso y su consecuencia.',
        modelAnswer: 'The company\'s failure to meet its targets resulted in shareholder disappointment.',
        focusStructure: 'Failure (noun), disappointment (noun); cause-effect with nominal phrases',
        explanationEs: '"failed" → "failure"; "disappointed" → "disappointment". Sustantivos abstractos para estados y resultados en lugar de verbos de acción.',
      },
    ],
    tip: 'Academic writing favours nouns over verbs. Look for -tion, -ment, -ness, -ity suffixes to nominalise.',
    tipEs: 'La escritura académica prefiere sustantivos sobre verbos. Busca sufijos -tion, -ment, -ness, -ity para nominalizar.',
  },

  {
    id: 'ab-c2-language-identity',
    type: 'argument-builder',
    title: 'Argument Builder: Language and National Identity',
    titleEs: 'Constructor de Argumentos: Lengua e Identidad Nacional',
    level: 'C2',
    cefrLevel: 6,
    topic: 'Linguistics, identity and politics',
    topicEs: 'Lingüística, identidad y política',
    instructionEn: 'Write two well-structured paragraphs arguing FOR the motion. Use sophisticated hedging, concessive structures, and precise academic vocabulary. Engage with potential counterarguments.',
    instructionEs: 'Escribe dos párrafos bien estructurados argumentando A FAVOR de la proposición. Usa hedging sofisticado, estructuras concesivas y vocabulario académico preciso. Aborda los posibles contraargumentos.',
    timeMinutes: 40,
    skill: 'writing',
    motion: 'A shared national language is a necessary condition for social cohesion in multilingual societies.',
    motionEs: 'Una lengua nacional compartida es una condición necesaria para la cohesión social en sociedades multilingües.',
    side: 'for',
    scaffoldSteps: [
      { step: 1, prompt: 'Establish the conceptual framework: define "social cohesion" and "necessary condition" with precision.', promptEs: 'Establece el marco conceptual: define "cohesión social" y "condición necesaria" con precisión.', example: 'Social cohesion, understood as the capacity of a polity to sustain collective action and mutual trust among its members, may be analysed in terms of its preconditions...' },
      { step: 2, prompt: 'Present your main thesis with appropriate hedging.', promptEs: 'Presenta tu tesis principal con hedging apropiado.', example: 'It could be argued that linguistic diversity, whilst enriching in certain respects, introduces coordination costs that a common vehicular language mitigates.' },
      { step: 3, prompt: 'Develop with evidence: historical, sociological, or institutional.', promptEs: 'Desarrolla con evidencia: histórica, sociológica o institucional.', example: 'The experience of states such as Belgium and Canada suggests that institutional multilingualism, though workable, requires substantial resources and can exacerbate territorial and identity-based cleavages.' },
      { step: 4, prompt: 'Acknowledge the strongest counterargument — e.g. that linguistic diversity can be a source of strength.', promptEs: 'Reconoce el contraargumento más fuerte — p.ej. que la diversidad lingüística puede ser una fuente de fortaleza.', example: 'Admittedly, proponents of linguistic pluralism rightly point to cases such as Switzerland, where multiple official languages coexist with high levels of social trust...' },
      { step: 5, prompt: 'Refute or qualify the counterargument while reinforcing your position.', promptEs: 'Refuta o matiza el contraargumento reforzando tu posición.', example: '...nevertheless, the Swiss case may be the exception that proves the rule: a small, wealthy, federal polity with centuries of institutional accommodation. The generalisability of this model to larger, more heterogeneous societies remains questionable.' },
    ],
    usefulLanguage: [
      { function: 'Establishing conceptual precision', functionEs: 'Establecer precisión conceptual', phrases: ['Understood as...', 'May be analysed in terms of...', 'A necessary condition is one such that...', 'It is worth distinguishing between...'] },
      { function: 'Hedging claims', functionEs: 'Matizar afirmaciones', phrases: ['It could be argued that...', 'The evidence suggests that...', 'One might reasonably conclude that...', 'There is a case to be made for...'] },
      { function: 'Concessive acknowledgment', functionEs: 'Reconocimiento concesivo', phrases: ['Admittedly, proponents of X rightly point to...', 'Whilst it is true that...', 'It cannot be denied that...', 'Critics have a point when they argue that...'] },
      { function: 'Qualified refutation', functionEs: 'Refutación matizada', phrases: ['Nevertheless, this argument fails to account for...', 'The generalisability of this model remains questionable.', '...may be the exception that proves the rule.', 'A closer examination reveals that...'] },
    ],
    modelParagraph: 'Social cohesion, understood as the capacity of a polity to sustain collective action and mutual trust among its members, may be analysed in terms of its preconditions. It could be argued that linguistic diversity, whilst enriching in certain respects, introduces coordination costs that a common vehicular language mitigates. The experience of states such as Belgium and Canada suggests that institutional multilingualism, though workable, requires substantial resources and can exacerbate territorial and identity-based cleavages. Admittedly, proponents of linguistic pluralism rightly point to cases such as Switzerland, where multiple official languages coexist with high levels of social trust. Nevertheless, the Swiss case may be the exception that proves the rule: a small, wealthy, federal polity with centuries of institutional accommodation. The generalisability of this model to larger, more heterogeneous societies remains questionable. Thus, whilst a shared language is not sufficient for cohesion, it may plausibly be regarded as a necessary — though not the only — condition in many contemporary contexts.',
    modelParagraphEs: 'Ejemplo de párrafo argumentativo C2 siguiendo los 5 pasos. Nota: marco conceptual → tesis con hedging → evidencia → concesión → refutación matizada → conclusión condicional.',
    tip: 'At C2, avoid absolutism. Use "may", "plausibly", "arguably". A strong argument acknowledges complexity.',
    tipEs: 'En C2, evita el absolutismo. Usa "may", "plausibly", "arguably". Un argumento sólido reconoce la complejidad.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NEW ADDITIONS — 8 activities
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'pl-a2-office',
    type: 'picture-labelling',
    title: 'Label the Office',
    titleEs: 'Etiqueta la Oficina',
    level: 'A2',
    cefrLevel: 2,
    topic: 'Workplace and office equipment',
    topicEs: 'Lugar de trabajo y equipo de oficina',
    instructionEn: 'Look at the picture of an office. Type the correct English word for each numbered item.',
    instructionEs: 'Mira la imagen de una oficina. Escribe la palabra correcta en inglés para cada elemento numerado.',
    timeMinutes: 10,
    skill: 'writing',
    imageDescription: 'A typical office with a desk, computer, monitor, keyboard, mouse, printer, filing cabinet, bookshelf, chair, lamp, and wastepaper basket.',
    imageDescriptionEs: 'Una oficina típica con escritorio, ordenador, monitor, teclado, ratón, impresora, archivador, estantería, silla, lámpara y papelera.',
    labels: [
      { id: '1', targetWord: 'desk', targetWordEs: 'escritorio' },
      { id: '2', targetWord: 'computer', targetWordEs: 'ordenador', alternativeAccepted: ['PC', 'laptop'] },
      { id: '3', targetWord: 'monitor', targetWordEs: 'monitor' },
      { id: '4', targetWord: 'keyboard', targetWordEs: 'teclado' },
      { id: '5', targetWord: 'mouse', targetWordEs: 'ratón' },
      { id: '6', targetWord: 'printer', targetWordEs: 'impresora' },
      { id: '7', targetWord: 'filing cabinet', targetWordEs: 'archivador', alternativeAccepted: ['file cabinet'] },
      { id: '8', targetWord: 'bookshelf', targetWordEs: 'estantería', alternativeAccepted: ['shelf'] },
      { id: '9', targetWord: 'lamp', targetWordEs: 'lámpara' },
      { id: '10', targetWord: 'wastepaper basket', targetWordEs: 'papelera', alternativeAccepted: ['bin', 'wastebasket'] },
    ],
    bonusTask: 'Write three sentences about your workplace or study room using "There is / There are".',
    bonusTaskEs: 'Escribe tres oraciones sobre tu lugar de trabajo o estudio usando "There is / There are".',
    tip: 'British English: "office" = the room; "desk" = the furniture. American English often uses "bathroom" for "toilet".',
    tipEs: '"Office" = la habitación. "Desk" = el mueble. "Wastepaper basket" = papelera en inglés británico.',
  },

  {
    id: 'so-b2-relative-clauses',
    type: 'sentence-ordering',
    title: 'Build Complex Sentences with Relative Clauses',
    titleEs: 'Construye Oraciones Complejas con Cláusulas Relativas',
    level: 'B2',
    cefrLevel: 4,
    topic: 'Relative clauses and complex sentences',
    topicEs: 'Cláusulas relativas y oraciones complejas',
    instructionEn: 'Reorder the words to form correct sentences with defining or non-defining relative clauses.',
    instructionEs: 'Reordena las palabras para formar oraciones correctas con cláusulas relativas especificativas o explicativas.',
    timeMinutes: 15,
    skill: 'writing',
    items: [
      {
        id: 's1',
        tokens: ['book', 'which', 'I', 'the', 'bought', 'yesterday', 'is', 'very', 'interesting', '.'],
        correctOrder: [3, 0, 1, 2, 4, 5, 6, 7, 8, 9],
        targetSentence: 'The book which I bought yesterday is very interesting.',
        translationEs: 'El libro que compré ayer es muy interesante.',
        grammarNote: 'Defining relative clause: which/that refers to "the book". Subject of the clause is "I".',
        grammarNoteEs: 'Cláusula especificativa: which/that se refiere a "the book". El sujeto de la cláusula es "I".',
      },
      {
        id: 's2',
        tokens: ['London', ',', 'where', 'I', 'lived', 'for', 'five', 'years', ',', 'is', 'expensive', '.'],
        correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        targetSentence: 'London, where I lived for five years, is expensive.',
        translationEs: 'Londres, donde viví cinco años, es caro.',
        grammarNote: 'Non-defining relative clause: commas around it. "Where" for place.',
        grammarNoteEs: 'Cláusula explicativa: va entre comas. "Where" para lugar.',
      },
      {
        id: 's3',
        tokens: ['person', 'whose', 'The', 'car', 'was', 'stolen', 'reported', 'it', 'to', 'the', 'police', '.'],
        correctOrder: [2, 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        targetSentence: 'The person whose car was stolen reported it to the police.',
        translationEs: 'La persona cuyo coche fue robado lo reportó a la policía.',
        grammarNote: '"Whose" = possessive relative pronoun. "Whose car" = the car of whom.',
        grammarNoteEs: '"Whose" = pronombre relativo posesivo. "Whose car" = el coche de quien.',
      },
      {
        id: 's4',
        tokens: ['is', 'the', 'reason', 'why', 'she', 'left', 'That', '.'],
        correctOrder: [6, 0, 1, 2, 3, 4, 5, 7],
        targetSentence: 'That is the reason why she left.',
        translationEs: 'Esa es la razón por la que se fue. Todavía se desconoce.',
        grammarNote: '"Why" = for which reason. Used after "reason".',
        grammarNoteEs: '"Why" = por la cual razón. Se usa después de "reason".',
      },
    ],
    tip: 'Defining: no commas, essential info. Non-defining: commas, extra info. "Which" can replace "that" in defining clauses for things. "Whose" = possessive.',
    tipEs: 'Especificativa: sin comas, información esencial. Explicativa: con comas, información extra. "Which" puede reemplazar "that" en cláusulas relativas para cosas.',
  },

  {
    id: 'pc-a2-simple-paraphrase',
    type: 'paraphrase-challenge',
    title: 'Simple Paraphrase',
    titleEs: 'Paráfrasis Simple',
    level: 'A2',
    cefrLevel: 2,
    topic: 'Expressing the same meaning differently',
    topicEs: 'Expresar el mismo significado de diferente forma',
    instructionEn: 'Rewrite each sentence using different words but keeping the same meaning. Use the structure suggested.',
    instructionEs: 'Reescribe cada oración usando palabras diferentes pero manteniendo el mismo significado. Usa la estructura sugerida.',
    timeMinutes: 12,
    skill: 'writing',
    items: [
      {
        id: 'p1',
        original: 'I don\'t have any money.',
        translationEs: 'No tengo dinero.',
        constraint: 'Use "I have" in a negative way.',
        constraintEs: 'Usa "I have" de forma negativa.',
        modelAnswer: 'I have no money.',
        focusStructure: 'no + noun = not any + noun',
        explanationEs: '"I have no money" = "I don\'t have any money". Ambas formas son correctas en inglés.',
      },
      {
        id: 'p2',
        original: 'She is very tall.',
        translationEs: 'Ella es muy alta.',
        constraint: 'Use "quite" instead of "very".',
        constraintEs: 'Usa "quite" en lugar de "very".',
        modelAnswer: 'She is quite tall.',
        alternativeAnswers: ['She is rather tall.'],
        focusStructure: 'quite / rather = intensifiers',
        explanationEs: '"Quite" y "rather" son alternativas a "very" para expresar grado.',
      },
      {
        id: 'p3',
        original: 'I want to go to the cinema.',
        translationEs: 'Quiero ir al cine.',
        constraint: 'Use "would like to" instead of "want to".',
        constraintEs: 'Usa "would like to" en lugar de "want to".',
        modelAnswer: 'I would like to go to the cinema.',
        focusStructure: 'would like to = more polite than want to',
        explanationEs: '"Would like to" es más formal y educado que "want to".',
      },
    ],
    tip: 'Paraphrasing at A2 often means using synonyms or simpler structures. "I don\'t have" = "I have no".',
    tipEs: 'Parafrasear en A2 suele significar usar sinónimos o estructuras más simples.',
  },

  {
    id: 'rs-c2-academic-formal',
    type: 'register-swap',
    title: 'C2 Register Shift: Academic to Formal Legal',
    titleEs: 'Cambio de Registro C2: Académico a Formal Legal',
    level: 'C2',
    cefrLevel: 6,
    topic: 'Legal and formal academic register',
    topicEs: 'Registro legal y académico formal',
    instructionEn: 'Rewrite each sentence shifting from academic to formal legal register, or vice versa. Pay attention to precision and formulaic phrasing.',
    instructionEs: 'Reescribe cada oración cambiando del registro académico al formal legal, o viceversa. Presta atención a la precisión y las fórmulas fijas.',
    direction: 'informal-to-formal',
    context: 'You are adapting text for a legal document or formal contract from academic prose.',
    contextEs: 'Estás adaptando texto para un documento legal o contrato formal a partir de prosa académica.',
    timeMinutes: 25,
    skill: 'writing',
    items: [
      {
        id: 'r1',
        original: 'We both agree to the stuff in the contract.',
        originalRegister: 'informal',
        targetRegister: 'formal',
        modelAnswer: 'The parties hereto agree to the terms and conditions herein set forth.',
        keyChanges: ['"We both" → "The parties hereto"', '"stuff" → "terms and conditions"', '"in the contract" → "herein set forth"'],
        keyChangesEs: ['"We both" → "The parties hereto"', '"stuff" → "terms and conditions"', '"in the contract" → "herein set forth"'],
        explanationEs: 'El registro legal usa fórmulas fijas como "hereto", "herein", "set forth" para mayor precisión y tradición formal.',
      },
      {
        id: 'r2',
        original: 'If you break the contract, we can sue you.',
        originalRegister: 'informal',
        targetRegister: 'formal',
        modelAnswer: 'In the event of any breach of the terms herein, the aggrieved party shall be entitled to pursue such remedies as may be available at law.',
        keyChanges: ['"If you break" → "In the event of any breach"', '"we can sue" → "shall be entitled to pursue remedies"', 'Add "aggrieved party"'],
        keyChangesEs: ['"break" → "breach" (formal legal)', '"sue" → "pursue remedies at law"', 'Eliminar pronombres personales directos'],
        explanationEs: 'El registro legal evita "you/we" directos y usa "the aggrieved party", "shall", "remedies at law".',
      },
      {
        id: 'r3',
        original: 'This agreement ends when both sides say so.',
        originalRegister: 'informal',
        targetRegister: 'formal',
        modelAnswer: 'This agreement shall terminate upon mutual written consent of the parties.',
        keyChanges: ['"ends" → "shall terminate"', '"when both sides say so" → "upon mutual written consent"'],
        keyChangesEs: ['"ends" → "shall terminate"', '"when both sides say so" → "upon mutual written consent of the parties"'],
        explanationEs: '"Upon mutual written consent" es la fórmula legal estándar para "when both agree in writing".',
      },
    ],
    tip: 'Legal register: "hereto", "herein", "thereof", "shall", "pursuant to", "notwithstanding". Avoid contractions.',
    tipEs: 'Registro legal: hereto, herein, thereof, shall, pursuant to, notwithstanding. Sin contracciones.',
  },

  {
    id: 'ab-b1-work-from-home',
    type: 'argument-builder',
    title: 'Argument Builder: Working from Home',
    titleEs: 'Constructor de Argumentos: Trabajar desde Casa',
    level: 'B1',
    cefrLevel: 3,
    topic: 'Work and lifestyle',
    topicEs: 'Trabajo y estilo de vida',
    instructionEn: 'Use the scaffolding steps below to build a short paragraph arguing FOR or AGAINST the motion.',
    instructionEs: 'Usa los pasos de andamiaje a continuación para construir un párrafo corto a favor o en contra de la proposición.',
    timeMinutes: 20,
    skill: 'writing',
    motion: 'Working from home is better than working in an office.',
    motionEs: 'Trabajar desde casa es mejor que trabajar en una oficina.',
    side: 'both',
    scaffoldSteps: [
      { step: 1, prompt: 'State your opinion clearly.', promptEs: 'Expresa tu opinión de forma clara.', example: 'I think working from home has many advantages.' },
      { step: 2, prompt: 'Give one or two reasons to support your opinion.', promptEs: 'Da una o dos razones para apoyar tu opinión.', example: 'First, you save time because you do not need to travel. Second, you can work in a comfortable environment.' },
      { step: 3, prompt: 'Give an example if you can.', promptEs: 'Da un ejemplo si puedes.', example: 'For example, I often work from my kitchen table and I feel more relaxed.' },
      { step: 4, prompt: 'Mention the other side briefly.', promptEs: 'Menciona brevemente el otro punto de vista.', example: 'Of course, some people prefer the office because they like to see their colleagues.' },
      { step: 5, prompt: 'Repeat your opinion or conclusion.', promptEs: 'Repite tu opinión o conclusión.', example: 'In conclusion, I believe that working from home is better for most people.' },
    ],
    usefulLanguage: [
      { function: 'Stating opinion', functionEs: 'Expresar opinión', phrases: ['I think that...', 'In my opinion...', 'I believe that...'] },
      { function: 'Giving reasons', functionEs: 'Dar razones', phrases: ['First...', 'Second...', 'Another reason is...', 'Because...'] },
      { function: 'Giving examples', functionEs: 'Dar ejemplos', phrases: ['For example...', 'For instance...', 'Such as...'] },
      { function: 'Concluding', functionEs: 'Concluir', phrases: ['In conclusion...', 'To sum up...', 'All in all...'] },
    ],
    modelParagraph: 'I think working from home has many advantages. First, you save time because you do not need to travel to the office. Second, you can work in a comfortable environment. For example, I often work from my kitchen table and I feel more relaxed. Of course, some people prefer the office because they like to see their colleagues. However, in conclusion, I believe that working from home is better for most people.',
    modelParagraphEs: 'Ejemplo de párrafo argumentativo B1 siguiendo los 5 pasos: opinión → razones → ejemplo → otro punto de vista → conclusión.',
    tip: 'At B1, keep sentences simple. Use "First", "Second", "For example" to connect your ideas.',
    tipEs: 'En B1, mantén las oraciones simples. Usa "First", "Second", "For example" para conectar tus ideas.',
  },

  {
    id: 'pc-c2-inversion',
    type: 'paraphrase-challenge',
    title: 'C2 Inversion and Emphasis Paraphrase',
    titleEs: 'Paráfrasis C2 con Inversión y Énfasis',
    level: 'C2',
    cefrLevel: 6,
    topic: 'Advanced syntax and emphasis',
    topicEs: 'Sintaxis avanzada y énfasis',
    instructionEn: 'Paraphrase each sentence using inversion, fronting, or cleft structures to achieve emphasis. Maintain the exact meaning.',
    instructionEs: 'Parafrasea cada oración usando inversión, fronting o estructuras hendidas para lograr énfasis. Mantén el significado exacto.',
    timeMinutes: 22,
    skill: 'writing',
    items: [
      {
        id: 'p1',
        original: 'I have never seen such a beautiful sunset.',
        translationEs: 'Nunca he visto un atardecer tan hermoso.',
        constraint: 'Use negative inversion.',
        constraintEs: 'Usa inversión negativa.',
        modelAnswer: 'Never have I seen such a beautiful sunset.',
        focusStructure: 'Never/Rarely/Seldom + auxiliary + subject + main verb',
        explanationEs: 'Inversión negativa: el adverbio negativo va al inicio, seguido del auxiliar y el sujeto. "Never have I" = más enfático que "I have never".',
      },
      {
        id: 'p2',
        original: 'The real problem is the lack of funding.',
        translationEs: 'El verdadero problema es la falta de financiación.',
        constraint: 'Use a cleft sentence with "What" or "It".',
        constraintEs: 'Usa una oración hendida con "What" o "It".',
        modelAnswer: 'What the real problem is is the lack of funding.',
        alternativeAnswers: ['It is the lack of funding that is the real problem.'],
        focusStructure: 'Cleft: What-clause or It-cleft + be + focus',
        explanationEs: 'Oración hendida: "What" o "It" enfatiza un elemento. "It is X that..." = "Lo que es X es..."',
      },
      {
        id: 'p3',
        original: 'She had only just arrived when the meeting started.',
        translationEs: 'Acababa de llegar cuando empezó la reunión.',
        constraint: 'Use "No sooner" + inversion.',
        constraintEs: 'Usa "No sooner" + inversión.',
        modelAnswer: 'No sooner had she arrived than the meeting started.',
        focusStructure: 'No sooner had + subject + past participle + than',
        explanationEs: '"No sooner...than" = "apenas...cuando". Inversión obligatoria: "had she arrived" no "she had arrived".',
      },
      {
        id: 'p4',
        original: 'We understood the situation only after he explained it.',
        translationEs: 'Solo entendimos la situación después de que él la explicó.',
        constraint: 'Use "Only after" + inversion.',
        constraintEs: 'Usa "Only after" + inversión.',
        modelAnswer: 'Only after he explained it did we understand the situation.',
        focusStructure: 'Only + time expression + auxiliary + subject + main verb',
        explanationEs: '"Only after" al inicio requiere inversión: "did we understand" en lugar de "we understood".',
      },
    ],
    tip: 'Inversion: negative/restrictive adverbs (Never, Rarely, Only after) + auxiliary + subject + verb. "Did we" not "we did".',
    tipEs: 'Inversión: adverbios negativos + auxiliar + sujeto + verbo. "Did we" no "we did".',
  },

  {
    id: 'so-c1-adverbial-clauses',
    type: 'sentence-ordering',
    title: 'Build C1 Sentences with Adverbial Clauses',
    titleEs: 'Construye Oraciones C1 con Cláusulas Adverbiales',
    level: 'C1',
    cefrLevel: 5,
    topic: 'Complex adverbial clauses and subordination',
    topicEs: 'Cláusulas adverbiales complejas y subordinación',
    instructionEn: 'Reorder the words to form correct sentences with adverbial clauses (concession, reason, result, condition).',
    instructionEs: 'Reordena las palabras para formar oraciones correctas con cláusulas adverbiales (concesión, razón, resultado, condición).',
    timeMinutes: 18,
    skill: 'writing',
    items: [
      {
        id: 's1',
        tokens: ['exam', ',', 'he', 'remained', 'optimistic', '.', 'Despite', 'failing', 'the'],
        correctOrder: [6, 7, 8, 0, 1, 2, 3, 4, 5],
        targetSentence: 'Despite failing the exam, he remained optimistic.',
        translationEs: 'A pesar de suspender el examen, se mantuvo optimista.',
        grammarNote: 'Despite + -ing form (gerund). "Despite failing" = although he failed.',
        grammarNoteEs: 'Despite + forma -ing (gerundio). "Despite failing" = aunque suspendió.',
      },
      {
        id: 's2',
        tokens: ['demand', 'that', 'we', 'could', 'not', 'meet', 'it', '.', 'Such', 'was', 'the'],
        correctOrder: [8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7],
        targetSentence: 'Such was the demand that we could not meet it.',
        translationEs: 'Tal era la demanda que no pudimos satisfacerla.',
        grammarNote: 'Such + be + subject = inversion for emphasis. "Such was" = "The demand was so great".',
        grammarNoteEs: 'Such + be + sujeto = inversión para énfasis. "Such was" = "La demanda era tan grande".',
      },
      {
        id: 's3',
        tokens: ['known', 'I', 'he', 'would', 'come', ',', 'I', 'have', 'would', 'have', 'stayed', '.', 'Had'],
        correctOrder: [12, 1, 0, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11],
        targetSentence: 'Had I known he would come, I would have stayed.',
        translationEs: 'De haber sabido que vendría, me habría quedado.',
        grammarNote: 'Third conditional inversion: Had + subject + past participle + comma + would have + past participle.',
        grammarNoteEs: 'Inversión del tercer condicional: Had + sujeto + participio + would have + participio.',
      },
      {
        id: 's4',
        tokens: ['Notwithstanding', 'objections', 'the', ',', 'committee', 'proceed', 'voted', 'to', 'with', 'the', 'plan', '.'],
        correctOrder: [0, 2, 1, 3, 4, 6, 7, 5, 8, 9, 10, 11],
        targetSentence: 'Notwithstanding the objections, the committee voted to proceed with the plan.',
        translationEs: 'No obstante las objeciones, el comité votó para proceder con el plan.',
        grammarNote: '"Notwithstanding" = despite, in spite of. Formal register. Preposition-like.',
        grammarNoteEs: '"Notwithstanding" = a pesar de, no obstante. Registro formal.',
      },
    ],
    tip: 'C1 adverbials: Despite/In spite of + -ing. Such + be + subject. Had + subject + past participle (inversion).',
    tipEs: 'Adverbiales C1: Despite + -ing. Such + be + sujeto. Had + sujeto + participio (inversión).',
  },

  {
    id: 'pl-b1-transport',
    type: 'picture-labelling',
    title: 'Label the Transport Hub',
    titleEs: 'Etiqueta el Hub de Transporte',
    level: 'B1',
    cefrLevel: 3,
    topic: 'Transport and travel infrastructure',
    topicEs: 'Transporte e infraestructura de viajes',
    instructionEn: 'Look at the picture of a transport hub (bus station, train station). Label each numbered item with the correct vocabulary.',
    instructionEs: 'Mira la imagen de un hub de transporte (estación de autobús, estación de tren). Etiqueta cada elemento numerado con el vocabulario correcto.',
    timeMinutes: 12,
    skill: 'writing',
    imageDescription: 'A busy transport hub showing: a departure board, ticket office, platform, waiting room, luggage trolley, information desk, timetable, escalator, lift, and barrier.',
    imageDescriptionEs: 'Un hub de transporte concurrido con: panel de salidas, taquilla, andén, sala de espera, carrito de equipaje, mostrador de información, horario, escalera mecánica, ascensor y barrera.',
    labels: [
      { id: '1', targetWord: 'departure board', targetWordEs: 'panel de salidas', hint: 'shows times and trains' },
      { id: '2', targetWord: 'ticket office', targetWordEs: 'taquilla', alternativeAccepted: ['ticket counter'] },
      { id: '3', targetWord: 'platform', targetWordEs: 'andén' },
      { id: '4', targetWord: 'waiting room', targetWordEs: 'sala de espera' },
      { id: '5', targetWord: 'luggage trolley', targetWordEs: 'carrito de equipaje', alternativeAccepted: ['luggage cart', 'baggage trolley'] },
      { id: '6', targetWord: 'information desk', targetWordEs: 'mostrador de información' },
      { id: '7', targetWord: 'timetable', targetWordEs: 'horario' },
      { id: '8', targetWord: 'escalator', targetWordEs: 'escalera mecánica' },
      { id: '9', targetWord: 'lift', targetWordEs: 'ascensor', alternativeAccepted: ['elevator'] },
      { id: '10', targetWord: 'barrier', targetWordEs: 'barrera', hint: 'you need a ticket to pass' },
    ],
    bonusTask: 'Write a short paragraph describing a journey you made using: departure, platform, timetable, and at least three other words from the list.',
    bonusTaskEs: 'Escribe un párrafo corto describiendo un viaje que hiciste usando: departure, platform, timetable, y al menos otras tres palabras de la lista.',
    tip: 'British: "platform", "timetable", "lift". American: "ticket counter", "schedule", "elevator".',
    tipEs: 'Británico: platform, timetable, lift. Americano: ticket counter, schedule, elevator.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NEW A1 ACTIVITIES — Picture labelling, Sentence ordering, Paraphrase
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'pl-a1-body-parts',
    type: 'picture-labelling',
    title: 'Label the Body',
    titleEs: 'Etiqueta el Cuerpo',
    level: 'A1',
    cefrLevel: 1,
    topic: 'Body parts',
    topicEs: 'Partes del cuerpo',
    instructionEn: 'Look at the picture of a person. Type the correct English word for each numbered body part.',
    instructionEs: 'Mira la imagen de una persona. Escribe la palabra correcta en inglés para cada parte del cuerpo numerada.',
    timeMinutes: 8,
    skill: 'writing',
    imageDescription: 'A simple front view of a person (or body diagram) showing: head, eyes, nose, mouth, ears, neck, shoulders, arms, hands, fingers, chest, stomach, legs, knees, feet.',
    imageDescriptionEs: 'Vista frontal simple de una persona (o diagrama del cuerpo) mostrando: cabeza, ojos, nariz, boca, orejas, cuello, hombros, brazos, manos, dedos, pecho, estómago, piernas, rodillas, pies.',
    labels: [
      { id: '1', targetWord: 'head', targetWordEs: 'cabeza' },
      { id: '2', targetWord: 'eyes', targetWordEs: 'ojos' },
      { id: '3', targetWord: 'nose', targetWordEs: 'nariz' },
      { id: '4', targetWord: 'mouth', targetWordEs: 'boca' },
      { id: '5', targetWord: 'ears', targetWordEs: 'orejas' },
      { id: '6', targetWord: 'neck', targetWordEs: 'cuello' },
      { id: '7', targetWord: 'arms', targetWordEs: 'brazos', alternativeAccepted: ['arm'] },
      { id: '8', targetWord: 'hands', targetWordEs: 'manos', alternativeAccepted: ['hand'] },
      { id: '9', targetWord: 'legs', targetWordEs: 'piernas', alternativeAccepted: ['leg'] },
      { id: '10', targetWord: 'feet', targetWordEs: 'pies', alternativeAccepted: ['foot'] },
    ],
    bonusTask: 'Write three sentences about your body using "I have..." (e.g. I have two hands).',
    bonusTaskEs: 'Escribe tres oraciones sobre tu cuerpo usando "I have..." (ej: I have two hands).',
    tip: 'Remember: "feet" is plural of "foot". "teeth" is plural of "tooth".',
    tipEs: '"Feet" es el plural de "foot". "Teeth" es el plural de "tooth".',
  },

  {
    id: 'so-a1-question-formation',
    type: 'sentence-ordering',
    title: 'Build Basic Questions',
    titleEs: 'Construye Preguntas Básicas',
    level: 'A1',
    cefrLevel: 1,
    topic: 'Question formation',
    topicEs: 'Formación de preguntas',
    instructionEn: 'Put the words in the correct order to make a question.',
    instructionEs: 'Pon las palabras en el orden correcto para formar una pregunta.',
    timeMinutes: 10,
    skill: 'writing',
    items: [
      {
        id: 's1',
        tokens: ['your', 'name', '?', 'What', 'is'],
        correctOrder: [3, 4, 0, 1, 2],
        targetSentence: 'What is your name?',
        translationEs: '¿Cómo te llamas?',
        grammarNote: 'Wh- question: What + is + your + noun?',
        grammarNoteEs: 'Pregunta Wh-: What + is + your + sustantivo?',
      },
      {
        id: 's2',
        tokens: ['you', 'from', '?', 'Where', 'are'],
        correctOrder: [3, 4, 0, 1, 2],
        targetSentence: 'Where are you from?',
        translationEs: '¿De dónde eres?',
        grammarNote: 'Wh- question: Where + are + you + from?',
        grammarNoteEs: 'Pregunta Wh-: Where + are + you + from?',
      },
      {
        id: 's3',
        tokens: ['old', 'you', '?', 'How', 'are'],
        correctOrder: [3, 4, 0, 1, 2],
        targetSentence: 'How old are you?',
        translationEs: '¿Cuántos años tienes?',
        grammarNote: 'How + adjective + be + subject? (fixed expression)',
        grammarNoteEs: 'How + adjetivo + be + sujeto? (expresión fija)',
      },
      {
        id: 's4',
        tokens: ['this', '?', 'What', 'is'],
        correctOrder: [2, 3, 0, 1],
        targetSentence: 'What is this?',
        translationEs: '¿Qué es esto?',
        grammarNote: 'What + is + this/that?',
        grammarNoteEs: 'What + is + this/that?',
      },
      {
        id: 's5',
        tokens: ['do', 'you', '?', 'What', 'do'],
        correctOrder: [3, 0, 1, 4, 2],
        targetSentence: 'What do you do?',
        translationEs: '¿A qué te dedicas?',
        grammarNote: 'What + do + subject + do? (for job)',
        grammarNoteEs: 'What + do + sujeto + do? (para profesión)',
      },
    ],
    tip: 'Wh- questions start with What, Where, When, Who, How. The word order changes: Wh- + auxiliary + subject + verb?',
    tipEs: 'Las preguntas Wh- empiezan con What, Where, When, Who, How. El orden cambia: Wh- + auxiliar + sujeto + verbo?',
  },

  {
    id: 'pc-a1-greetings-farewells',
    type: 'paraphrase-challenge',
    title: 'Simple Greetings and Farewells',
    titleEs: 'Saludos y Despedidas Simples',
    level: 'A1',
    cefrLevel: 1,
    topic: 'Greetings and farewells',
    topicEs: 'Saludos y despedidas',
    instructionEn: 'Rewrite each phrase using different words but keeping the same meaning. Use the structure suggested.',
    instructionEs: 'Reescribe cada frase usando palabras diferentes pero manteniendo el mismo significado. Usa la estructura sugerida.',
    timeMinutes: 8,
    skill: 'writing',
    items: [
      {
        id: 'p1',
        original: 'Hello!',
        translationEs: '¡Hola!',
        constraint: 'Use "Hi" instead.',
        constraintEs: 'Usa "Hi" en su lugar.',
        modelAnswer: 'Hi!',
        focusStructure: 'Hi = Hello (informal greeting)',
        explanationEs: '"Hi" y "Hello" son saludos informales equivalentes.',
      },
      {
        id: 'p2',
        original: 'Goodbye!',
        translationEs: '¡Adiós!',
        constraint: 'Use "Bye" instead.',
        constraintEs: 'Usa "Bye" en su lugar.',
        modelAnswer: 'Bye!',
        alternativeAnswers: ['Bye bye!'],
        focusStructure: 'Bye = Goodbye (informal farewell)',
        explanationEs: '"Bye" es la forma corta e informal de "Goodbye".',
      },
      {
        id: 'p3',
        original: 'How are you?',
        translationEs: '¿Cómo estás?',
        constraint: 'Use "How are things?" or "How\'s it going?"',
        constraintEs: 'Usa "How are things?" o "How\'s it going?"',
        modelAnswer: 'How are things?',
        alternativeAnswers: ["How's it going?", 'How are you doing?'],
        focusStructure: 'Alternative ways to ask about someone\'s wellbeing',
        explanationEs: '"How are things?" y "How\'s it going?" son formas alternativas de preguntar cómo está alguien.',
      },
      {
        id: 'p4',
        original: 'See you later!',
        translationEs: '¡Hasta luego!',
        constraint: 'Use "See you" or "See you soon"',
        constraintEs: 'Usa "See you" o "See you soon"',
        modelAnswer: 'See you soon!',
        alternativeAnswers: ['See you!', 'See you tomorrow!'],
        focusStructure: 'Informal farewells with "see you"',
        explanationEs: '"See you soon", "See you" y "See you tomorrow" son despedidas informales equivalentes.',
      },
    ],
    tip: 'At A1, paraphrasing often means using a shorter or more informal version of the same phrase.',
    tipEs: 'En A1, parafrasear suele significar usar una versión más corta o informal de la misma frase.',
  },
];

// ─── Helper functions ─────────────────────────────────────────────────────────

export const getActivitiesByType = (type: ProductiveActivityType): ProductiveActivity[] =>
  productiveActivities.filter(a => a.type === type);

export const getActivitiesByLevel = (level: CefrLevel): ProductiveActivity[] =>
  productiveActivities.filter(a => a.level === level);

export const getActivitiesByCefrLevel = (cefrLevel: CefrNumeric): ProductiveActivity[] =>
  productiveActivities.filter(a => a.cefrLevel === cefrLevel);

export const getActivitiesBySkill = (skill: 'writing' | 'speaking' | 'both'): ProductiveActivity[] =>
  productiveActivities.filter(a => a.skill === skill);

export const getActivityById = (id: string): ProductiveActivity | undefined =>
  productiveActivities.find(a => a.id === id);

export const getActivitiesByTopic = (topic: string): ProductiveActivity[] =>
  productiveActivities.filter(a =>
    a.topic.toLowerCase().includes(topic.toLowerCase()) ||
    a.topicEs.toLowerCase().includes(topic.toLowerCase())
  );

export const getTotalProductiveActivityCount = (): number => productiveActivities.length;
