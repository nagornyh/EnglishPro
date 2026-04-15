/**
 * Parametric Exercise Generator
 * 
 * Generates unlimited exercise variations from templates,
 * so grammar modules never run out of practice material.
 * Uses combinatorial expansion of subjects, verbs, objects, etc.
 */

export type ExerciseType = 'fill-blank' | 'transformation' | 'error-correction' | 'multiple-choice';

export interface GeneratedExercise {
  type: ExerciseType;
  prompt: string;
  promptEs: string;
  answer: string;
  options?: string[];      // for multiple-choice
  correctIndex?: number;   // for multiple-choice
  hint?: string;
  hintEs?: string;
  grammarPoint: string;
  grammarPointEs: string;
}

// ── Template Types ───────────────────────────────────────────────────────

interface FillBlankTemplate {
  pattern: string;       // "S ___ (V) O every day."
  patternEs: string;
  subjects: string[];
  verbs: Array<{ base: string; transformed: string; baseEs: string }>;
  objects: string[];
  grammarPoint: string;
  grammarPointEs: string;
}

interface TransformTemplate {
  direction: 'affirmative-to-negative' | 'affirmative-to-question' | 'present-to-past' | 'active-to-passive' | 'direct-to-reported' | 'to-inversion' | 'conditional-transform' | 'to-hedging' | 'to-nominalization' | 'to-discourse-cohesion' | 'register-shift' | 'to-cleft' | 'to-passive-reporting';
  directionLabelEs: string;
  entries: Array<{
    original: string;
    originalEs: string;
    transformed: string;
  }>;
  grammarPoint: string;
  grammarPointEs: string;
}

interface ErrorCorrectionTemplate {
  entries: Array<{
    incorrect: string;
    correct: string;
    whyEs: string;
  }>;
  grammarPoint: string;
  grammarPointEs: string;
}

// ── Template Data ────────────────────────────────────────────────────────

const fillBlankTemplates: Record<string, FillBlankTemplate[]> = {
  'a1-present-simple': [
    {
      pattern: 'S V O every day.',
      patternEs: 'S V O todos los días.',
      subjects: ['She', 'He', 'My sister', 'The teacher', 'My father', 'It'],
      verbs: [
        { base: 'play', transformed: 'plays', baseEs: 'jugar' },
        { base: 'like', transformed: 'likes', baseEs: 'gustar' },
        { base: 'eat', transformed: 'eats', baseEs: 'comer' },
        { base: 'read', transformed: 'reads', baseEs: 'leer' },
        { base: 'drink', transformed: 'drinks', baseEs: 'beber' },
        { base: 'watch', transformed: 'watches', baseEs: 'ver' },
        { base: 'wash', transformed: 'washes', baseEs: 'lavar' },
        { base: 'study', transformed: 'studies', baseEs: 'estudiar' },
      ],
      objects: ['football', 'chocolate', 'breakfast', 'books', 'coffee', 'TV', 'the dishes', 'English'],
      grammarPoint: 'Present Simple – 3rd person singular (-s/-es/-ies)',
      grammarPointEs: 'Presente Simple – 3ª persona singular (-s/-es/-ies)',
    },
    {
      pattern: 'S V O.',
      patternEs: 'S V O.',
      subjects: ['I', 'You', 'We', 'They', 'My friends', 'The students'],
      verbs: [
        { base: 'play', transformed: 'play', baseEs: 'jugar' },
        { base: 'like', transformed: 'like', baseEs: 'gustar' },
        { base: 'eat', transformed: 'eat', baseEs: 'comer' },
        { base: 'read', transformed: 'read', baseEs: 'leer' },
        { base: 'live', transformed: 'live in', baseEs: 'vivir en' },
        { base: 'work', transformed: 'work at', baseEs: 'trabajar en' },
      ],
      objects: ['tennis', 'pizza', 'salads', 'newspapers', 'London', 'the hospital'],
      grammarPoint: 'Present Simple – 1st/2nd/plural (no -s)',
      grammarPointEs: 'Presente Simple – 1ª/2ª/plural (sin -s)',
    },
  ],
  'a1-to-be': [
    {
      pattern: 'S V A.',
      patternEs: 'S V A.',
      subjects: ['I', 'She', 'He', 'We', 'They', 'It', 'The cat', 'My parents'],
      verbs: [
        { base: 'be', transformed: 'am', baseEs: 'ser/estar' },
        { base: 'be', transformed: 'is', baseEs: 'ser/estar' },
        { base: 'be', transformed: 'are', baseEs: 'ser/estar' },
      ],
      objects: ['happy', 'tired', 'from Spain', 'a student', 'at home', 'ten years old', 'very big', 'cold'],
      grammarPoint: 'TO BE – am/is/are',
      grammarPointEs: 'TO BE – am/is/are',
    }
  ],
  'a2-past-simple': [
    {
      pattern: 'S V O yesterday.',
      patternEs: 'S V O ayer.',
      subjects: ['She', 'He', 'I', 'We', 'They', 'My brother', 'The children'],
      verbs: [
        { base: 'go', transformed: 'went', baseEs: 'ir' },
        { base: 'buy', transformed: 'bought', baseEs: 'comprar' },
        { base: 'see', transformed: 'saw', baseEs: 'ver' },
        { base: 'eat', transformed: 'ate', baseEs: 'comer' },
        { base: 'make', transformed: 'made', baseEs: 'hacer' },
        { base: 'take', transformed: 'took', baseEs: 'coger' },
        { base: 'write', transformed: 'wrote', baseEs: 'escribir' },
        { base: 'find', transformed: 'found', baseEs: 'encontrar' },
      ],
      objects: ['to the park', 'a new car', 'that film', 'sushi', 'a cake', 'the bus', 'an email', 'the keys'],
      grammarPoint: 'Past Simple – irregular verbs',
      grammarPointEs: 'Pasado Simple – verbos irregulares',
    },
    {
      pattern: 'S V O last week.',
      patternEs: 'S V O la semana pasada.',
      subjects: ['I', 'She', 'They', 'We', 'He', 'My friend'],
      verbs: [
        { base: 'play', transformed: 'played', baseEs: 'jugar' },
        { base: 'visit', transformed: 'visited', baseEs: 'visitar' },
        { base: 'watch', transformed: 'watched', baseEs: 'ver' },
        { base: 'cook', transformed: 'cooked', baseEs: 'cocinar' },
        { base: 'clean', transformed: 'cleaned', baseEs: 'limpiar' },
        { base: 'listen to', transformed: 'listened to', baseEs: 'escuchar' },
      ],
      objects: ['tennis', 'the museum', 'a documentary', 'dinner for everyone', 'the house', 'the radio'],
      grammarPoint: 'Past Simple – regular verbs (-ed)',
      grammarPointEs: 'Pasado Simple – verbos regulares (-ed)',
    },
  ],
  'b1-present-perfect': [
    {
      pattern: 'S ___ (have + V3) O.',
      patternEs: 'S ___ (have + participio) O.',
      subjects: ['I', 'You', 'We', 'They', 'My friends', 'The students'],
      verbs: [
        { base: 'visit', transformed: 'have visited', baseEs: 'visitar' },
        { base: 'live', transformed: 'have lived', baseEs: 'vivir' },
        { base: 'see', transformed: 'have seen', baseEs: 'ver' },
        { base: 'eat', transformed: 'have eaten', baseEs: 'comer' },
        { base: 'be', transformed: 'have been', baseEs: 'estar' },
        { base: 'read', transformed: 'have read', baseEs: 'leer' },
        { base: 'write', transformed: 'have written', baseEs: 'escribir' },
        { base: 'finish', transformed: 'have finished', baseEs: 'terminar' },
      ],
      objects: ['Paris three times', 'here since 2010', 'that film already', 'Japanese food before', 'to Japan twice', 'this book', 'many emails', 'my homework'],
      grammarPoint: 'Present Perfect – have + past participle (I/we/they)',
      grammarPointEs: 'Present Perfect – have + participio (I/we/they)',
    },
    {
      pattern: 'S ___ (has + V3) O.',
      patternEs: 'S ___ (has + participio) O.',
      subjects: ['She', 'He', 'It', 'My mother', 'The teacher', 'The project'],
      verbs: [
        { base: 'visit', transformed: 'has visited', baseEs: 'visitar' },
        { base: 'live', transformed: 'has lived', baseEs: 'vivir' },
        { base: 'work', transformed: 'has worked', baseEs: 'trabajar' },
        { base: 'see', transformed: 'has seen', baseEs: 'ver' },
        { base: 'eat', transformed: 'has eaten', baseEs: 'comer' },
        { base: 'be', transformed: 'has been', baseEs: 'estar' },
        { base: 'finish', transformed: 'has finished', baseEs: 'terminar' },
        { base: 'start', transformed: 'has started', baseEs: 'empezar' },
      ],
      objects: ['Paris three times', 'here since 2010', 'here for five years', 'that film already', 'Japanese food before', 'to Japan twice', 'the report', 'already'],
      grammarPoint: 'Present Perfect – has + past participle (he/she/it)',
      grammarPointEs: 'Present Perfect – has + participio (he/she/it)',
    },
  ],
  'b1-present-perfect-vs-past-simple': [
    {
      pattern: 'S V O.',
      patternEs: 'S V O.',
      subjects: ['I', 'She', 'He', 'We', 'They'],
      verbs: [
        { base: 'visit', transformed: 'have visited', baseEs: 'visitar' },
        { base: 'live', transformed: 'have lived', baseEs: 'vivir' },
        { base: 'work', transformed: 'has worked', baseEs: 'trabajar' },
        { base: 'see', transformed: 'have seen', baseEs: 'ver' },
        { base: 'eat', transformed: 'have eaten', baseEs: 'comer' },
        { base: 'be', transformed: 'have been', baseEs: 'estar' },
      ],
      objects: ['Paris three times', 'here since 2010', 'here for five years', 'that film already', 'Japanese food before', 'to Japan twice'],
      grammarPoint: 'Present Perfect with since/for/already/before/ever/never',
      grammarPointEs: 'Present Perfect con since/for/already/before/ever/never',
    }
  ],
  'b2-second-conditional': [
    {
      pattern: 'If S ___ (V-past), S would V O.',
      patternEs: 'Si S ___ (V-pasado), S would V O. Completa con pasado simple.',
      subjects: ['If I', 'If she', 'If he', 'If we', 'If they', 'If you'],
      verbs: [
        { base: 'have', transformed: 'had', baseEs: 'tener' },
        { base: 'have', transformed: 'had', baseEs: 'tener' },
        { base: 'have', transformed: 'had', baseEs: 'tener' },
        { base: 'have', transformed: 'had', baseEs: 'tener' },
        { base: 'have', transformed: 'had', baseEs: 'tener' },
        { base: 'have', transformed: 'had', baseEs: 'tener' },
      ],
      objects: ['more money, I would travel', 'more time, she would help you', 'enough time, he would finish', 'a car, we would drive there', 'the chance, they would apply', 'her number, you would call her'],
      grammarPoint: 'Second Conditional – If + Past Simple, would + infinitive',
      grammarPointEs: 'Segunda Condicional – Si + Pasado Simple, would + infinitivo',
    },
    {
      pattern: 'If S V-past O, S ___ (would + V) A.',
      patternEs: 'Si S V-past O, S ___ (would + V) A. Completa la cláusula principal.',
      subjects: ['If I had more time, I', 'If she studied harder, she', 'If we lived closer, we', 'If they knew the truth, they', 'If he spoke English, he', 'If you asked me, I'],
      verbs: [
        { base: 'read', transformed: 'would read', baseEs: 'leer' },
        { base: 'pass', transformed: 'would pass', baseEs: 'aprobar' },
        { base: 'visit', transformed: 'would visit', baseEs: 'visitar' },
        { base: 'tell', transformed: 'would tell', baseEs: 'decir' },
        { base: 'get', transformed: 'would get', baseEs: 'conseguir' },
        { base: 'help', transformed: 'would help', baseEs: 'ayudar' },
      ],
      objects: ['more books', 'the exam', 'more often', 'you everything', 'a better job', 'you immediately'],
      grammarPoint: 'Second Conditional – would + infinitive in main clause',
      grammarPointEs: 'Segunda Condicional – would + infinitivo en la cláusula principal',
    },
  ],
  'b2-passive-advanced': [
    {
      pattern: 'S V by O.',
      patternEs: 'S V por O.',
      subjects: ['The report', 'The decision', 'The building', 'The law', 'The investigation', 'The contract'],
      verbs: [
        { base: 'write', transformed: 'was written', baseEs: 'escribir' },
        { base: 'make', transformed: 'was made', baseEs: 'tomar' },
        { base: 'design', transformed: 'was designed', baseEs: 'diseñar' },
        { base: 'approve', transformed: 'was approved', baseEs: 'aprobar' },
        { base: 'conduct', transformed: 'was conducted', baseEs: 'conducir' },
        { base: 'sign', transformed: 'was signed', baseEs: 'firmar' },
      ],
      objects: ['the committee', 'the board', 'a famous architect', 'Parliament', 'an independent team', 'both parties'],
      grammarPoint: 'Passive voice – past simple',
      grammarPointEs: 'Voz pasiva – pasado simple',
    },
    {
      pattern: 'S ___ (have been + V3) by O.',
      patternEs: 'S ___ (have been + V3) por O.',
      subjects: ['The project', 'The house', 'The report', 'The research', 'The application', 'The evidence'],
      verbs: [
        { base: 'complete', transformed: 'has been completed', baseEs: 'completar' },
        { base: 'sell', transformed: 'has been sold', baseEs: 'vender' },
        { base: 'review', transformed: 'has been reviewed', baseEs: 'revisar' },
        { base: 'publish', transformed: 'has been published', baseEs: 'publicar' },
        { base: 'reject', transformed: 'has been rejected', baseEs: 'rechazar' },
        { base: 'gather', transformed: 'has been gathered', baseEs: 'reunir' },
      ],
      objects: ['the team', 'a private buyer', 'the lawyers', 'the publisher', 'the committee', 'the police'],
      grammarPoint: 'Passive voice – present perfect (have/has been + past participle)',
      grammarPointEs: 'Voz pasiva – presente perfecto (have/has been + participio)',
    },
  ],
  'b2-reported-speech': [
    {
      pattern: 'She said she ___ (V) O.',
      patternEs: 'She said she ___ (V) O. Estilo indirecto – pasado.',
      subjects: ['She said she', 'He said he', 'They said they', 'I told her I', 'He told me he', 'She told us she'],
      verbs: [
        { base: 'be', transformed: 'was', baseEs: 'ser/estar' },
        { base: 'have', transformed: 'had', baseEs: 'tener' },
        { base: 'go', transformed: 'had gone', baseEs: 'ir' },
        { base: 'see', transformed: 'had seen', baseEs: 'ver' },
        { base: 'finish', transformed: 'had finished', baseEs: 'terminar' },
        { base: 'work', transformed: 'was working', baseEs: 'trabajar' },
      ],
      objects: ['tired', 'a headache', 'home early', 'the film', 'the report', 'from home'],
      grammarPoint: 'Reported Speech – backshift (present → past, past → past perfect)',
      grammarPointEs: 'Estilo indirecto – cambio de tiempos (presente → pasado, pasado → pasado perfecto)',
    },
    {
      pattern: 'He asked if/whether S ___ (V) O.',
      patternEs: 'He asked if/whether S ___ (V) O. Preguntas en estilo indirecto.',
      subjects: ['He asked if I', 'She asked whether he', 'They asked if we', 'I asked if she', 'She asked if they', 'He asked whether I'],
      verbs: [
        { base: 'be', transformed: 'was', baseEs: 'ser/estar' },
        { base: 'have', transformed: 'had', baseEs: 'tener' },
        { base: 'go', transformed: 'had gone', baseEs: 'ir' },
        { base: 'know', transformed: 'knew', baseEs: 'saber' },
        { base: 'finish', transformed: 'had finished', baseEs: 'terminar' },
        { base: 'want', transformed: 'wanted', baseEs: 'querer' },
      ],
      objects: ['ready', 'finished', 'to the meeting', 'the answer', 'the work', 'to help'],
      grammarPoint: 'Reported Speech – yes/no questions (if/whether + backshift)',
      grammarPointEs: 'Estilo indirecto – preguntas sí/no (if/whether + cambio de tiempos)',
    },
  ],
  'c1-inversion': [
    {
      pattern: 'Adv ___ (aux) S V O.',
      patternEs: 'Adv ___ (aux) S V O. Inversión con adverbios negativos.',
      subjects: ['Never', 'Seldom', 'Rarely', 'Hardly', 'Scarcely', 'No sooner'],
      verbs: [
        { base: 'have', transformed: 'have', baseEs: 'auxiliar have' },
        { base: 'does', transformed: 'does', baseEs: 'auxiliar does' },
        { base: 'have', transformed: 'have', baseEs: 'auxiliar have' },
        { base: 'had', transformed: 'had', baseEs: 'auxiliar had' },
        { base: 'had', transformed: 'had', baseEs: 'auxiliar had' },
        { base: 'had', transformed: 'had', baseEs: 'auxiliar had' },
      ],
      objects: ['I seen such a beautiful sunset', 'she complains about the service', 'we met such interesting people', 'we arrived when it started raining', 'we finished when the phone rang', 'we left than he arrived'],
      grammarPoint: 'Inversion – negative adverbials (Never, Seldom, Hardly, etc.)',
      grammarPointEs: 'Inversión – adverbios negativos (Never, Seldom, Hardly, etc.)',
    },
    {
      pattern: 'Only + adv ___ (aux) S V O.',
      patternEs: 'Only + adv ___ (aux) S V O. Inversión con "only".',
      subjects: ['Only after he finished', 'Only when she had arrived', 'Only if we agree', 'Only then', 'Only later', 'Only once we had met'],
      verbs: [
        { base: 'did', transformed: 'did', baseEs: 'auxiliar did' },
        { base: 'did', transformed: 'did', baseEs: 'auxiliar did' },
        { base: 'will', transformed: 'will', baseEs: 'auxiliar will' },
        { base: 'did', transformed: 'did', baseEs: 'auxiliar did' },
        { base: 'did', transformed: 'did', baseEs: 'auxiliar did' },
        { base: 'did', transformed: 'did', baseEs: 'auxiliar did' },
      ],
      objects: ['he leave', 'we start', 'we sign', 'I understood the problem', 'we discovered the truth', 'we became friends'],
      grammarPoint: 'Inversion – "only" + adverbial (Only after, Only when, etc.)',
      grammarPointEs: 'Inversión – "only" + adverbio (Only after, Only when, etc.)',
    },
  ],
  'c1-mixed-conditionals': [
    {
      pattern: 'If S ___ (had + V3), S would V O.',
      patternEs: 'Si S ___ (had + V3), S would V O. Condicional mixto: pasado → presente.',
      subjects: ['If I', 'If she', 'If he', 'If they', 'If we', 'If you'],
      verbs: [
        { base: 'study', transformed: 'had studied', baseEs: 'estudiar' },
        { base: 'take', transformed: 'had taken', baseEs: 'tomar' },
        { base: 'listen', transformed: 'had listened', baseEs: 'escuchar' },
        { base: 'save', transformed: 'had saved', baseEs: 'ahorrar' },
        { base: 'practise', transformed: 'had practised', baseEs: 'practicar' },
        { base: 'accept', transformed: 'had accepted', baseEs: 'aceptar' },
      ],
      objects: ['harder, I would have a better job now', 'the job, she would be earning more today', 'to my advice, he would not be in trouble now', 'more money, they would be on holiday now', 'more, we would speak better English now', 'the offer, you would be working here now'],
      grammarPoint: 'Mixed Conditional – If + Past Perfect, would + infinitive (past condition, present result)',
      grammarPointEs: 'Condicional mixto – Si + Pasado Perfecto, would + infinitivo (condición pasada, resultado presente)',
    },
    {
      pattern: 'If S ___ (V-past), S would have V3 O.',
      patternEs: 'Si S ___ (V-past), S would have V3 O. Condicional mixto: presente → pasado.',
      subjects: ['If I', 'If she', 'If he', 'If they', 'If we', 'If you'],
      verbs: [
        { base: 'be', transformed: 'were', baseEs: 'ser/estar' },
        { base: 'like', transformed: 'liked', baseEs: 'gustar' },
        { base: 'have', transformed: 'had', baseEs: 'tener' },
        { base: 'know', transformed: 'knew', baseEs: 'saber' },
        { base: 'want', transformed: 'wanted', baseEs: 'querer' },
        { base: 'trust', transformed: 'trusted', baseEs: 'confiar' },
      ],
      objects: ['taller, I would have joined the team', 'more confident, she would have applied for the job', 'richer, he would have bought the house', 'braver, they would have told the truth', 'more time, we would have visited you', 'me, you would have called earlier'],
      grammarPoint: 'Mixed Conditional – If + Past Simple, would have + past participle (present condition, past result)',
      grammarPointEs: 'Condicional mixto – Si + Pasado Simple, would have + participio (condición presente, resultado pasado)',
    },
  ],
  'c1-hedging': [
    {
      pattern: '___ (V) that O.',
      patternEs: '___ (V) que O. Usa lenguaje de hedging.',
      subjects: [''],
      verbs: [
        { base: 'argue', transformed: 'It could be argued', baseEs: 'argumentar' },
        { base: 'suggest', transformed: 'One might suggest', baseEs: 'sugerir' },
        { base: 'appear', transformed: 'There appears to be', baseEs: 'parecer' },
        { base: 'seem', transformed: 'It would seem', baseEs: 'parecer' },
        { base: 'indicate', transformed: 'The evidence would indicate', baseEs: 'indicar' },
        { base: 'assume', transformed: 'It may be assumed', baseEs: 'asumir' },
      ],
      objects: ['that climate change is a serious issue', 'that the policy has failed', 'that further research is needed', 'that the results are inconclusive', 'that the economy is recovering', 'that the theory requires revision'],
      grammarPoint: 'Hedging language – It could be argued, One might suggest, There appears to be',
      grammarPointEs: 'Lenguaje de hedging – It could be argued, One might suggest, There appears to be',
    },
  ],
  'c1-nominalization': [
    {
      pattern: 'The ___ (V) of O.',
      patternEs: 'La ___ (V) de O. Convierte el verbo en sustantivo.',
      subjects: ['The'],
      verbs: [
        { base: 'investigate', transformed: 'investigation', baseEs: 'investigar' },
        { base: 'improve', transformed: 'improvement', baseEs: 'mejorar' },
        { base: 'analyze', transformed: 'analysis', baseEs: 'analizar' },
        { base: 'develop', transformed: 'development', baseEs: 'desarrollar' },
        { base: 'implement', transformed: 'implementation', baseEs: 'implementar' },
        { base: 'evaluate', transformed: 'evaluation', baseEs: 'evaluar' },
        { base: 'demonstrate', transformed: 'demonstration', baseEs: 'demostrar' },
        { base: 'consider', transformed: 'consideration', baseEs: 'considerar' },
      ],
      objects: ['of the matter will take time', 'of the system was significant', 'of the data revealed new patterns', 'of the project took five years', 'of the policy met with resistance', 'of the programme showed positive results', 'of the theory was convincing', 'of all factors is essential'],
      grammarPoint: 'Nominalization – converting verbs to nouns (investigate→investigation, improve→improvement)',
      grammarPointEs: 'Nominalización – convertir verbos en sustantivos (investigate→investigation, improve→improvement)',
    },
  ],
  'c2-discourse-cohesion': [
    {
      pattern: '___ , O.',
      patternEs: '___ , O. Conectores para texto académico.',
      subjects: [''],
      verbs: [
        { base: 'furthermore', transformed: 'Furthermore', baseEs: 'además' },
        { base: 'notwithstanding', transformed: 'Notwithstanding', baseEs: 'no obstante' },
        { base: 'in light of', transformed: 'In light of', baseEs: 'a la luz de' },
        { base: 'consequently', transformed: 'Consequently', baseEs: 'consecuentemente' },
        { base: 'nevertheless', transformed: 'Nevertheless', baseEs: 'no obstante' },
        { base: 'accordingly', transformed: 'Accordingly', baseEs: 'en consecuencia' },
        { base: 'moreover', transformed: 'Moreover', baseEs: 'además' },
        { base: 'henceforth', transformed: 'Henceforth', baseEs: 'de ahora en adelante' },
      ],
      objects: ['the evidence suggests a different conclusion', 'these findings, we must reconsider the hypothesis', 'the foregoing, the proposal merits approval', 'the data was inconsistent', 'the study has limitations', 'the committee decided to proceed', 'the results support the theory', 'the new regulations will apply'],
      grammarPoint: 'Discourse cohesion – linking devices for academic text (Furthermore, Notwithstanding, In light of)',
      grammarPointEs: 'Cohesión discursiva – conectores para texto académico (Furthermore, Notwithstanding, In light of)',
    },
  ],
  'c2-register-shift': [
    {
      pattern: 'S ___ (V) O.',
      patternEs: 'S ___ (V) O. Cambia a registro formal.',
      subjects: ['The meeting', 'The committee', 'The company', 'We', 'The negotiations', 'The project'],
      verbs: [
        { base: 'start', transformed: 'commenced', baseEs: 'empezar' },
        { base: 'get', transformed: 'acquired', baseEs: 'conseguir' },
        { base: 'end', transformed: 'concluded', baseEs: 'terminar' },
        { base: 'need', transformed: 'require', baseEs: 'necesitar' },
        { base: 'use', transformed: 'utilised', baseEs: 'usar' },
        { base: 'try', transformed: 'endeavoured', baseEs: 'intentar' },
      ],
      objects: ['at 9 a.m.', 'the necessary permits', 'successfully', 'further clarification', 'existing resources', 'to resolve the matter'],
      grammarPoint: 'Register shift – formal/informal (commence→start, acquire→get)',
      grammarPointEs: 'Cambio de registro – formal/informal (commence→start, acquire→get)',
    },
  ],
  'c1-cleft-sentences': [
    {
      pattern: '___ that O.',
      patternEs: '___ que O. Estructuras de relieve (cleft).',
      subjects: [''],
      verbs: [
        { base: 'weather', transformed: 'It was the weather', baseEs: 'tiempo' },
        { base: 'need', transformed: 'What we need', baseEs: 'necesitar' },
        { base: 'manager', transformed: 'It is the manager', baseEs: 'gerente' },
        { base: 'surprised', transformed: 'What surprised me', baseEs: 'sorprender' },
        { base: 'money', transformed: 'It is money', baseEs: 'dinero' },
        { base: 'policy', transformed: 'It was the policy', baseEs: 'política' },
      ],
      objects: ['that caused the delay', 'is more time', 'who made the decision', 'was his reaction', 'that matters most', 'that led to the crisis'],
      grammarPoint: 'Cleft sentences – It is X that..., What we need is...',
      grammarPointEs: 'Oraciones de relieve – It is X that..., What we need is...',
    },
  ],
  'c1-passive-reporting': [
    {
      pattern: '___ (V) that O.',
      patternEs: '___ (V) que O. Estructuras de reporte pasivo.',
      subjects: [''],
      verbs: [
        { base: 'believe', transformed: 'It is believed', baseEs: 'creer' },
        { base: 'say', transformed: 'He is said', baseEs: 'decir' },
        { base: 'expect', transformed: 'It is expected', baseEs: 'esperar' },
        { base: 'report', transformed: 'She is reported', baseEs: 'informar' },
        { base: 'think', transformed: 'It is thought', baseEs: 'pensar' },
        { base: 'know', transformed: 'He is known', baseEs: 'saber' },
      ],
      objects: ['that he will resign', 'to have left the country', 'that the deal will go through', 'to be considering an offer', 'that the reforms will succeed', 'to have made significant contributions'],
      grammarPoint: 'Passive reporting – It is believed that..., He is said to...',
      grammarPointEs: 'Reporte pasivo – It is believed that..., He is said to...',
    },
  ],
  // Alias matching grammarTheoryIds in level data
  'a1-verb-to-be': [
    {
      pattern: 'S ___ (be) A.',
      patternEs: 'S ___ (ser/estar) A.',
      subjects: ['I', 'She', 'He', 'It', 'We', 'They', 'The cat', 'My parents'],
      verbs: [
        { base: 'be', transformed: 'am', baseEs: 'ser/estar' },
        { base: 'be', transformed: 'is', baseEs: 'ser/estar' },
        { base: 'be', transformed: 'are', baseEs: 'ser/estar' },
      ],
      objects: ['happy', 'tired', 'from Spain', 'a student', 'at home', 'ten years old', 'very big', 'cold'],
      grammarPoint: 'Verb TO BE – am/is/are',
      grammarPointEs: 'Verbo TO BE – am/is/are',
    }
  ],
  'a1-articles': [
    {
      pattern: 'S is ___ N.',
      patternEs: 'S es ___ N.',
      subjects: ['This', 'That', 'It'],
      verbs: [
        { base: 'be', transformed: 'a', baseEs: 'un/una (consonante)' },
        { base: 'be', transformed: 'an', baseEs: 'un/una (vocal)' },
      ],
      objects: ['book', 'table', 'apple', 'orange', 'egg', 'cat', 'umbrella', 'university'],
      grammarPoint: 'Articles a/an – before consonant/vowel sounds',
      grammarPointEs: 'Artículos a/an – antes de sonidos consonante/vocal',
    }
  ],
  'a1-plurals': [
    {
      pattern: 'S sees two ___ (N-pl).',
      patternEs: 'S ve dos ___ (N-plural).',
      subjects: ['I', 'She', 'He', 'We'],
      verbs: [
        { base: 'cat', transformed: 'cats', baseEs: 'gato' },
        { base: 'dog', transformed: 'dogs', baseEs: 'perro' },
        { base: 'box', transformed: 'boxes', baseEs: 'caja' },
        { base: 'bus', transformed: 'buses', baseEs: 'autobús' },
        { base: 'baby', transformed: 'babies', baseEs: 'bebé' },
        { base: 'city', transformed: 'cities', baseEs: 'ciudad' },
        { base: 'child', transformed: 'children', baseEs: 'niño' },
        { base: 'woman', transformed: 'women', baseEs: 'mujer' },
      ],
      objects: ['in the park', 'at the zoo', 'in the shop', 'in the class'],
      grammarPoint: 'Plural nouns – regular and irregular',
      grammarPointEs: 'Plurales – regulares e irregulares',
    }
  ],
  'a2-present-continuous': [
    {
      pattern: 'S ___ (V-ing) O now.',
      patternEs: 'S ___ (V-ing) O ahora.',
      subjects: ['She', 'He', 'I', 'We', 'They', 'The children'],
      verbs: [
        { base: 'read', transformed: 'is reading', baseEs: 'leer' },
        { base: 'watch', transformed: 'is watching', baseEs: 'ver' },
        { base: 'eat', transformed: 'is eating', baseEs: 'comer' },
        { base: 'work', transformed: 'is working', baseEs: 'trabajar' },
        { base: 'study', transformed: 'is studying', baseEs: 'estudiar' },
        { base: 'play', transformed: 'are playing', baseEs: 'jugar' },
        { base: 'make', transformed: 'is making', baseEs: 'hacer' },
        { base: 'run', transformed: 'is running', baseEs: 'correr' },
      ],
      objects: ['a book', 'a film', 'dinner', 'from home', 'for the exam', 'football', 'a cake', 'in the park'],
      grammarPoint: 'Present Continuous – is/are + -ing',
      grammarPointEs: 'Presente Continuo – is/are + -ing',
    }
  ],
  'a2-comparatives-superlatives': [
    {
      pattern: 'She is ___ (adj-comp) than him.',
      patternEs: 'Ella es ___ que él. Completa con el comparativo.',
      subjects: ['She', 'He', 'This car', 'My sister', 'The new model'],
      verbs: [
        { base: 'tall', transformed: 'taller', baseEs: 'alto → más alto' },
        { base: 'old', transformed: 'older', baseEs: 'mayor → más mayor' },
        { base: 'fast', transformed: 'faster', baseEs: 'rápido → más rápido' },
        { base: 'happy', transformed: 'happier', baseEs: 'feliz → más feliz' },
        { base: 'expensive', transformed: 'more expensive', baseEs: 'caro → más caro' },
        { base: 'interesting', transformed: 'more interesting', baseEs: 'interesante → más interesante' },
        { base: 'good', transformed: 'better', baseEs: 'bueno → mejor' },
        { base: 'bad', transformed: 'worse', baseEs: 'malo → peor' },
      ],
      objects: ['her brother', 'the old one', 'the bus', 'me', 'last year\'s'],
      grammarPoint: 'Comparatives – -er / more / irregular',
      grammarPointEs: 'Comparativos – -er / more / irregulares',
    }
  ],
  'b1-first-conditional': [
    {
      pattern: 'If S ___ (V), S will V O.',
      patternEs: 'Si S ___ (V), S V O. Completa el If-clause.',
      subjects: ['If it', 'If she', 'If you', 'If they', 'If he', 'If we'],
      verbs: [
        { base: 'rain', transformed: 'rains', baseEs: 'llover' },
        { base: 'study', transformed: 'studies', baseEs: 'estudiar' },
        { base: 'work hard', transformed: 'work hard', baseEs: 'trabajar duro' },
        { base: 'miss the bus', transformed: 'miss the bus', baseEs: 'perder el autobús' },
        { base: 'call me', transformed: 'call me', baseEs: 'llamarme' },
        { base: 'save money', transformed: 'save money', baseEs: 'ahorrar' },
        { base: 'hurry', transformed: 'hurry', baseEs: 'darse prisa' },
      ],
      objects: ['we\'ll stay home', 'she\'ll pass the exam', 'they\'ll succeed', 'they\'ll be late', 'I\'ll answer', 'we can travel'],
      grammarPoint: 'First Conditional – If + Present Simple, will + infinitive',
      grammarPointEs: 'Primera Condicional – Si + Presente Simple, will + infinitivo',
    },
    {
      pattern: 'If S V, S ___ (V) O.',
      patternEs: 'Si S V, S ___ (V) O. Completa con will + verbo.',
      subjects: ['If you come early, we', 'If she calls, I', 'If they agree, we', 'If he asks, she', 'If we leave now, we', 'If it rains tomorrow, they'],
      verbs: [
        { base: 'help', transformed: 'will help', baseEs: 'ayudar' },
        { base: 'tell', transformed: 'will tell', baseEs: 'decir' },
        { base: 'join', transformed: 'will join', baseEs: 'unirse' },
        { base: 'give', transformed: 'will give', baseEs: 'dar' },
        { base: 'arrive', transformed: 'will arrive', baseEs: 'llegar' },
        { base: 'stay', transformed: 'will stay', baseEs: 'quedarse' },
      ],
      objects: ['you with the project', 'her the news', 'them for dinner', 'him the answer', 'on time', 'at home'],
      grammarPoint: 'First Conditional – main clause with will',
      grammarPointEs: 'Primera Condicional – cláusula principal con will',
    },
  ],
  'b1-passive-voice': [
    {
      pattern: 'S ___ (be+V3) by O.',
      patternEs: 'S ___ (ser + V3) por O.',
      subjects: ['The book', 'The cake', 'The letter', 'The car', 'These products', 'The report'],
      verbs: [
        { base: 'write', transformed: 'is written', baseEs: 'escribir' },
        { base: 'bake', transformed: 'is baked', baseEs: 'hornear' },
        { base: 'send', transformed: 'is sent', baseEs: 'enviar' },
        { base: 'make', transformed: 'is made', baseEs: 'fabricar' },
        { base: 'sell', transformed: 'are sold', baseEs: 'vender' },
        { base: 'prepare', transformed: 'is prepared', baseEs: 'preparar' },
      ],
      objects: ['a famous author', 'my grandmother', 'the secretary', 'robots', 'local stores', 'the team'],
      grammarPoint: 'Passive voice – present simple (is/are + past participle)',
      grammarPointEs: 'Voz pasiva – presente simple (is/are + participio)',
    },
    {
      pattern: 'S ___ (be+V3) O.',
      patternEs: 'S ___ (ser + V3) O. Pasiva en pasado.',
      subjects: ['The house', 'The film', 'The letter', 'The car', 'The documents', 'The meeting'],
      verbs: [
        { base: 'build', transformed: 'was built', baseEs: 'construir' },
        { base: 'release', transformed: 'was released', baseEs: 'estrenar' },
        { base: 'send', transformed: 'was sent', baseEs: 'enviar' },
        { base: 'repair', transformed: 'was repaired', baseEs: 'reparar' },
        { base: 'sign', transformed: 'were signed', baseEs: 'firmar' },
        { base: 'cancel', transformed: 'was cancelled', baseEs: 'cancelar' },
      ],
      objects: ['in 1990', 'last month', 'yesterday', 'by a mechanic', 'yesterday morning', 'due to bad weather'],
      grammarPoint: 'Passive voice – past simple (was/were + past participle)',
      grammarPointEs: 'Voz pasiva – pasado simple (was/were + participio)',
    },
  ],
};

const transformTemplates: Record<string, TransformTemplate[]> = {
  'a1-present-simple': [
    {
      direction: 'affirmative-to-negative',
      directionLabelEs: 'Afirmativa → Negativa',
      entries: [
        { original: 'She likes chocolate.', originalEs: 'A ella le gusta el chocolate.', transformed: "She doesn't like chocolate." },
        { original: 'He plays tennis.', originalEs: 'Él juega tenis.', transformed: "He doesn't play tennis." },
        { original: 'It rains a lot.', originalEs: 'Llueve mucho.', transformed: "It doesn't rain a lot." },
        { original: 'My cat eats fish.', originalEs: 'Mi gato come pescado.', transformed: "My cat doesn't eat fish." },
        { original: 'She works here.', originalEs: 'Ella trabaja aquí.', transformed: "She doesn't work here." },
        { original: 'The train leaves at 8.', originalEs: 'El tren sale a las 8.', transformed: "The train doesn't leave at 8." },
      ],
      grammarPoint: 'Present Simple negative – 3rd person',
      grammarPointEs: 'Presente Simple negativo – 3ª persona',
    },
    {
      direction: 'affirmative-to-question',
      directionLabelEs: 'Afirmativa → Pregunta',
      entries: [
        { original: 'You like coffee.', originalEs: 'Te gusta el café.', transformed: 'Do you like coffee?' },
        { original: 'She speaks English.', originalEs: 'Ella habla inglés.', transformed: 'Does she speak English?' },
        { original: 'They live in Madrid.', originalEs: 'Viven en Madrid.', transformed: 'Do they live in Madrid?' },
        { original: 'He works at night.', originalEs: 'Él trabaja de noche.', transformed: 'Does he work at night?' },
        { original: 'We need help.', originalEs: 'Necesitamos ayuda.', transformed: 'Do we need help?' },
        { original: 'It costs £10.', originalEs: 'Cuesta 10 libras.', transformed: 'Does it cost £10?' },
      ],
      grammarPoint: 'Present Simple questions – do/does',
      grammarPointEs: 'Preguntas Presente Simple – do/does',
    },
  ],
  'a2-past-simple': [
    {
      direction: 'present-to-past',
      directionLabelEs: 'Presente → Pasado',
      entries: [
        { original: 'She goes to school.', originalEs: 'Ella va al colegio.', transformed: 'She went to school.' },
        { original: 'They buy fruit.', originalEs: 'Compran fruta.', transformed: 'They bought fruit.' },
        { original: 'I see my friend.', originalEs: 'Veo a mi amigo.', transformed: 'I saw my friend.' },
        { original: 'He eats pizza.', originalEs: 'Él come pizza.', transformed: 'He ate pizza.' },
        { original: 'We have breakfast.', originalEs: 'Desayunamos.', transformed: 'We had breakfast.' },
        { original: 'She writes a letter.', originalEs: 'Ella escribe una carta.', transformed: 'She wrote a letter.' },
      ],
      grammarPoint: 'Past Simple – irregular transformations',
      grammarPointEs: 'Pasado Simple – transformaciones irregulares',
    },
  ],
  'a1-verb-to-be': [
    {
      direction: 'affirmative-to-negative',
      directionLabelEs: 'Afirmativa → Negativa',
      entries: [
        { original: 'She is happy.', originalEs: 'Ella está contenta.', transformed: "She isn't happy." },
        { original: 'They are ready.', originalEs: 'Están listos.', transformed: "They aren't ready." },
        { original: 'I am tired.', originalEs: 'Estoy cansado/a.', transformed: "I'm not tired." },
        { original: 'He is a doctor.', originalEs: 'Él es médico.', transformed: "He isn't a doctor." },
        { original: 'We are at home.', originalEs: 'Estamos en casa.', transformed: "We aren't at home." },
        { original: 'It is cold today.', originalEs: 'Hace frío hoy.', transformed: "It isn't cold today." },
      ],
      grammarPoint: 'Verb TO BE – negative (isn\'t/aren\'t)',
      grammarPointEs: 'Verbo TO BE – negativo (isn\'t/aren\'t)',
    },
    {
      direction: 'affirmative-to-question',
      directionLabelEs: 'Afirmativa → Pregunta',
      entries: [
        { original: 'She is a teacher.', originalEs: 'Ella es profesora.', transformed: 'Is she a teacher?' },
        { original: 'They are from Spain.', originalEs: 'Son de España.', transformed: 'Are they from Spain?' },
        { original: 'He is at school.', originalEs: 'Él está en el colegio.', transformed: 'Is he at school?' },
        { original: 'You are happy.', originalEs: 'Estás contento/a.', transformed: 'Are you happy?' },
        { original: 'It is expensive.', originalEs: 'Es caro.', transformed: 'Is it expensive?' },
        { original: 'We are late.', originalEs: 'Llegamos tarde.', transformed: 'Are we late?' },
      ],
      grammarPoint: 'Verb TO BE – questions (Is/Are...?)',
      grammarPointEs: 'Verbo TO BE – preguntas (Is/Are...?)',
    },
  ],
  'a2-present-continuous': [
    {
      direction: 'affirmative-to-negative',
      directionLabelEs: 'Afirmativa → Negativa',
      entries: [
        { original: 'She is watching TV.', originalEs: 'Ella está viendo la tele.', transformed: "She isn't watching TV." },
        { original: 'They are playing football.', originalEs: 'Están jugando al fútbol.', transformed: "They aren't playing football." },
        { original: 'He is working right now.', originalEs: 'Él está trabajando ahora mismo.', transformed: "He isn't working right now." },
        { original: 'I am reading a book.', originalEs: 'Estoy leyendo un libro.', transformed: "I'm not reading a book." },
        { original: 'We are having lunch.', originalEs: 'Estamos comiendo.', transformed: "We aren't having lunch." },
        { original: 'It is raining.', originalEs: 'Está lloviendo.', transformed: "It isn't raining." },
      ],
      grammarPoint: 'Present Continuous – negative',
      grammarPointEs: 'Presente Continuo – negativo',
    },
  ],
  'b1-first-conditional': [
    {
      direction: 'affirmative-to-negative',
      directionLabelEs: 'Transforma a condicional negativo',
      entries: [
        { original: 'If it rains, we will stay home.', originalEs: 'Si llueve, nos quedaremos en casa.', transformed: "If it doesn't rain, we won't stay home." },
        { original: 'If she studies, she will pass.', originalEs: 'Si estudia, aprobará.', transformed: "If she doesn't study, she won't pass." },
        { original: 'If you hurry, you will catch the bus.', originalEs: 'Si te das prisa, cogerás el autobús.', transformed: "If you don't hurry, you won't catch the bus." },
        { original: 'If he saves money, he will buy a car.', originalEs: 'Si ahorra, comprará un coche.', transformed: "If he doesn't save money, he won't buy a car." },
        { original: 'If they work hard, they will succeed.', originalEs: 'Si trabajan duro, tendrán éxito.', transformed: "If they don't work hard, they won't succeed." },
        { original: 'If we leave now, we will be on time.', originalEs: 'Si salimos ahora, llegaremos a tiempo.', transformed: "If we don't leave now, we won't be on time." },
      ],
      grammarPoint: 'First Conditional – negative form',
      grammarPointEs: 'Primera Condicional – forma negativa',
    },
  ],
  'b1-passive-voice': [
    {
      direction: 'active-to-passive',
      directionLabelEs: 'Activa → Pasiva',
      entries: [
        { original: 'Someone wrote the book in 1985.', originalEs: 'Alguien escribió el libro en 1985.', transformed: 'The book was written in 1985.' },
        { original: 'The chef cooks the meals every day.', originalEs: 'El chef prepara las comidas cada día.', transformed: 'The meals are cooked every day.' },
        { original: 'A mechanic repaired the car.', originalEs: 'Un mecánico reparó el coche.', transformed: 'The car was repaired (by a mechanic).' },
        { original: 'They are building a new school.', originalEs: 'Están construyendo un colegio nuevo.', transformed: 'A new school is being built.' },
        { original: 'The teacher marks the tests.', originalEs: 'La profesora corrige los exámenes.', transformed: 'The tests are marked by the teacher.' },
        { original: 'They will announce the results tomorrow.', originalEs: 'Anunciarán los resultados mañana.', transformed: 'The results will be announced tomorrow.' },
      ],
      grammarPoint: 'Passive voice – active to passive transformation',
      grammarPointEs: 'Voz pasiva – transformación de activa a pasiva',
    },
  ],
  'b1-present-perfect': [
    {
      direction: 'present-to-past',
      directionLabelEs: 'Presente → Present Perfect',
      entries: [
        { original: 'She lives in London.', originalEs: 'Ella vive en Londres.', transformed: 'She has lived in London (since 2020).' },
        { original: 'I see him every day.', originalEs: 'Lo veo todos los días.', transformed: 'I have seen him today.' },
        { original: 'They work here.', originalEs: 'Ellos trabajan aquí.', transformed: 'They have worked here for five years.' },
        { original: 'He eats sushi.', originalEs: 'Él come sushi.', transformed: 'He has eaten sushi before.' },
        { original: 'We go to Paris.', originalEs: 'Vamos a París.', transformed: 'We have been to Paris three times.' },
        { original: 'She finishes the report.', originalEs: 'Ella termina el informe.', transformed: 'She has finished the report.' },
      ],
      grammarPoint: 'Present Perfect – expressing experience, duration, recent completion',
      grammarPointEs: 'Present Perfect – expresar experiencia, duración, finalización reciente',
    },
    {
      direction: 'affirmative-to-question',
      directionLabelEs: 'Afirmativa → Pregunta (Have you ever...?)',
      entries: [
        { original: 'I have been to Japan.', originalEs: 'He estado en Japón.', transformed: 'Have you ever been to Japan?' },
        { original: 'She has seen that film.', originalEs: 'Ella ha visto esa película.', transformed: 'Has she ever seen that film?' },
        { original: 'They have eaten sushi.', originalEs: 'Han comido sushi.', transformed: 'Have they ever eaten sushi?' },
        { original: 'He has visited New York.', originalEs: 'Él ha visitado Nueva York.', transformed: 'Has he ever visited New York?' },
        { original: 'We have tried Indian food.', originalEs: 'Hemos probado comida india.', transformed: 'Have we ever tried Indian food?' },
        { original: 'She has read that book.', originalEs: 'Ella ha leído ese libro.', transformed: 'Has she ever read that book?' },
      ],
      grammarPoint: 'Present Perfect – Have you ever...? (experiences)',
      grammarPointEs: 'Present Perfect – Have you ever...? (experiencias)',
    },
  ],
  'b2-second-conditional': [
    {
      direction: 'conditional-transform',
      directionLabelEs: 'Transforma a Segunda Condicional',
      entries: [
        { original: 'I don\'t have money, so I can\'t travel.', originalEs: 'No tengo dinero, así que no puedo viajar.', transformed: 'If I had money, I would travel.' },
        { original: 'She isn\'t here, so she can\'t help.', originalEs: 'Ella no está aquí, así que no puede ayudar.', transformed: 'If she were here, she would help.' },
        { original: 'He doesn\'t speak French, so he won\'t get the job.', originalEs: 'Él no habla francés, así que no conseguirá el trabajo.', transformed: 'If he spoke French, he would get the job.' },
        { original: 'We don\'t have time, so we won\'t visit them.', originalEs: 'No tenemos tiempo, así que no los visitaremos.', transformed: 'If we had time, we would visit them.' },
        { original: 'They don\'t know the truth, so they won\'t tell you.', originalEs: 'No saben la verdad, así que no te la dirán.', transformed: 'If they knew the truth, they would tell you.' },
        { original: 'I don\'t have her number, so I can\'t call her.', originalEs: 'No tengo su número, así que no puedo llamarla.', transformed: 'If I had her number, I would call her.' },
      ],
      grammarPoint: 'Second Conditional – hypothetical situations (If + Past, would + infinitive)',
      grammarPointEs: 'Segunda Condicional – situaciones hipotéticas (Si + Pasado, would + infinitivo)',
    },
  ],
  'b2-passive-advanced': [
    {
      direction: 'active-to-passive',
      directionLabelEs: 'Activa → Pasiva (tiempos avanzados)',
      entries: [
        { original: 'The committee has approved the proposal.', originalEs: 'El comité ha aprobado la propuesta.', transformed: 'The proposal has been approved by the committee.' },
        { original: 'They had completed the project before the deadline.', originalEs: 'Habían completado el proyecto antes del plazo.', transformed: 'The project had been completed before the deadline.' },
        { original: 'Someone will deliver the package tomorrow.', originalEs: 'Alguien entregará el paquete mañana.', transformed: 'The package will be delivered tomorrow.' },
        { original: 'The police are investigating the case.', originalEs: 'La policía está investigando el caso.', transformed: 'The case is being investigated by the police.' },
        { original: 'They had built the bridge by 1990.', originalEs: 'Habían construido el puente en 1990.', transformed: 'The bridge had been built by 1990.' },
        { original: 'The company will have finished the work by Friday.', originalEs: 'La empresa habrá terminado el trabajo para el viernes.', transformed: 'The work will have been finished by Friday.' },
      ],
      grammarPoint: 'Advanced Passive – present perfect, past perfect, future, continuous',
      grammarPointEs: 'Voz pasiva avanzada – presente perfecto, pasado perfecto, futuro, continuo',
    },
  ],
  'b2-reported-speech': [
    {
      direction: 'direct-to-reported',
      directionLabelEs: 'Estilo directo → Estilo indirecto',
      entries: [
        { original: '"I am tired," she said.', originalEs: '"Estoy cansada," dijo ella.', transformed: 'She said (that) she was tired.' },
        { original: '"We have finished," they said.', originalEs: '"Hemos terminado," dijeron ellos.', transformed: 'They said (that) they had finished.' },
        { original: '"I saw him yesterday," he said.', originalEs: '"Lo vi ayer," dijo él.', transformed: 'He said (that) he had seen him the day before.' },
        { original: '"She is working from home," he told me.', originalEs: '"Ella trabaja desde casa," me dijo él.', transformed: 'He told me (that) she was working from home.' },
        { original: '"I will call you tomorrow," she said.', originalEs: '"Te llamaré mañana," dijo ella.', transformed: 'She said (that) she would call me the next day.' },
        { original: '"We can help you," they said.', originalEs: '"Podemos ayudarte," dijeron ellos.', transformed: 'They said (that) they could help me.' },
      ],
      grammarPoint: 'Reported Speech – statements (backshift of tenses)',
      grammarPointEs: 'Estilo indirecto – afirmaciones (cambio de tiempos)',
    },
    {
      direction: 'direct-to-reported',
      directionLabelEs: 'Pregunta directa → Estilo indirecto',
      entries: [
        { original: '"Are you ready?" he asked.', originalEs: '"¿Estás listo?" preguntó él.', transformed: 'He asked if/whether I was ready.' },
        { original: '"Have you finished?" she asked.', originalEs: '"¿Has terminado?" preguntó ella.', transformed: 'She asked if/whether I had finished.' },
        { original: '"Where do you live?" he asked.', originalEs: '"¿Dónde vives?" preguntó él.', transformed: 'He asked where I lived.' },
        { original: '"When did you arrive?" they asked.', originalEs: '"¿Cuándo llegaste?" preguntaron ellos.', transformed: 'They asked when I had arrived.' },
        { original: '"Can you help me?" she asked.', originalEs: '"¿Puedes ayudarme?" preguntó ella.', transformed: 'She asked if/whether I could help her.' },
        { original: '"What time does it start?" he asked.', originalEs: '"¿A qué hora empieza?" preguntó él.', transformed: 'He asked what time it started.' },
      ],
      grammarPoint: 'Reported Speech – questions (if/whether, wh-words)',
      grammarPointEs: 'Estilo indirecto – preguntas (if/whether, pronombres wh-)',
    },
  ],
  'c1-inversion': [
    {
      direction: 'to-inversion',
      directionLabelEs: 'Transforma usando inversión',
      entries: [
        { original: 'I have never seen such a beautiful sunset.', originalEs: 'Nunca he visto un atardecer tan bonito.', transformed: 'Never have I seen such a beautiful sunset.' },
        { original: 'She seldom complains about the service.', originalEs: 'Rara vez se queja del servicio.', transformed: 'Seldom does she complain about the service.' },
        { original: 'We had hardly arrived when it started raining.', originalEs: 'Apenas habíamos llegado cuando empezó a llover.', transformed: 'Hardly had we arrived when it started raining.' },
        { original: 'We had no sooner left than he arrived.', originalEs: 'No habíamos salido cuando llegó él.', transformed: 'No sooner had we left than he arrived.' },
        { original: 'I understood the problem only then.', originalEs: 'Solo entonces entendí el problema.', transformed: 'Only then did I understand the problem.' },
        { original: 'He left only after he had finished.', originalEs: 'Solo se fue después de terminar.', transformed: 'Only after he had finished did he leave.' },
      ],
      grammarPoint: 'Inversion – negative adverbials and "only"',
      grammarPointEs: 'Inversión – adverbios negativos y "only"',
    },
  ],
  'c1-mixed-conditionals': [
    {
      direction: 'conditional-transform',
      directionLabelEs: 'Transforma a Condicional Mixto (pasado → presente)',
      entries: [
        { original: 'I didn\'t study hard, so I don\'t have a good job now.', originalEs: 'No estudié duro, así que no tengo un buen trabajo ahora.', transformed: 'If I had studied hard, I would have a better job now.' },
        { original: 'She didn\'t take the job, so she isn\'t earning more today.', originalEs: 'No aceptó el trabajo, así que no gana más hoy.', transformed: 'If she had taken the job, she would be earning more today.' },
        { original: 'They didn\'t save money, so they aren\'t on holiday now.', originalEs: 'No ahorraron dinero, así que no están de vacaciones ahora.', transformed: 'If they had saved money, they would be on holiday now.' },
        { original: 'He didn\'t listen to my advice, so he is in trouble now.', originalEs: 'No escuchó mi consejo, así que está en problemas ahora.', transformed: 'If he had listened to my advice, he would not be in trouble now.' },
        { original: 'We didn\'t practise enough, so we don\'t speak better English now.', originalEs: 'No practicamos suficiente, así que no hablamos mejor inglés ahora.', transformed: 'If we had practised enough, we would speak better English now.' },
        { original: 'You didn\'t accept the offer, so you aren\'t working here now.', originalEs: 'No aceptaste la oferta, así que no trabajas aquí ahora.', transformed: 'If you had accepted the offer, you would be working here now.' },
      ],
      grammarPoint: 'Mixed Conditional – past condition, present result (If + Past Perfect, would + infinitive)',
      grammarPointEs: 'Condicional mixto – condición pasada, resultado presente (Si + Pasado Perfecto, would + infinitivo)',
    },
    {
      direction: 'conditional-transform',
      directionLabelEs: 'Transforma a Condicional Mixto (presente → pasado)',
      entries: [
        { original: 'I\'m not tall, so I didn\'t join the basketball team.', originalEs: 'No soy alto, así que no me uní al equipo de baloncesto.', transformed: 'If I were taller, I would have joined the basketball team.' },
        { original: 'She isn\'t confident, so she didn\'t apply for the job.', originalEs: 'No es segura de sí misma, así que no solicitó el trabajo.', transformed: 'If she were more confident, she would have applied for the job.' },
        { original: 'He doesn\'t have money, so he didn\'t buy the house.', originalEs: 'No tiene dinero, así que no compró la casa.', transformed: 'If he had more money, he would have bought the house.' },
        { original: 'They aren\'t brave, so they didn\'t tell the truth.', originalEs: 'No son valientes, así que no dijeron la verdad.', transformed: 'If they were braver, they would have told the truth.' },
        { original: 'We don\'t have time, so we didn\'t visit you.', originalEs: 'No tenemos tiempo, así que no te visitamos.', transformed: 'If we had more time, we would have visited you.' },
        { original: 'You don\'t trust me, so you didn\'t call earlier.', originalEs: 'No confías en mí, así que no llamaste antes.', transformed: 'If you trusted me, you would have called earlier.' },
      ],
      grammarPoint: 'Mixed Conditional – present condition, past result (If + Past Simple, would have + past participle)',
      grammarPointEs: 'Condicional mixto – condición presente, resultado pasado (Si + Pasado Simple, would have + participio)',
    },
  ],
  'c1-hedging': [
    {
      direction: 'to-hedging',
      directionLabelEs: 'Transforma usando lenguaje de hedging',
      entries: [
        { original: 'Climate change is a serious issue.', originalEs: 'El cambio climático es un problema serio.', transformed: 'It could be argued that climate change is a serious issue.' },
        { original: 'The policy has failed.', originalEs: 'La política ha fracasado.', transformed: 'One might suggest that the policy has failed.' },
        { original: 'Further research is needed.', originalEs: 'Se necesita más investigación.', transformed: 'There appears to be a need for further research.' },
        { original: 'The results are conclusive.', originalEs: 'Los resultados son concluyentes.', transformed: 'It would seem that the results are conclusive.' },
        { original: 'The economy is recovering.', originalEs: 'La economía se está recuperando.', transformed: 'The evidence would indicate that the economy is recovering.' },
        { original: 'The theory requires revision.', originalEs: 'La teoría requiere revisión.', transformed: 'It may be assumed that the theory requires revision.' },
      ],
      grammarPoint: 'Hedging language – It could be argued, One might suggest, There appears to be',
      grammarPointEs: 'Lenguaje de hedging – It could be argued, One might suggest, There appears to be',
    },
  ],
  'c1-nominalization': [
    {
      direction: 'to-nominalization',
      directionLabelEs: 'Transforma el verbo en sustantivo (nominalización)',
      entries: [
        { original: 'They investigated the matter.', originalEs: 'Investigaron el asunto.', transformed: 'The investigation of the matter took time.' },
        { original: 'The system improved significantly.', originalEs: 'El sistema mejoró significativamente.', transformed: 'The improvement of the system was significant.' },
        { original: 'They analyzed the data.', originalEs: 'Analizaron los datos.', transformed: 'The analysis of the data revealed new patterns.' },
        { original: 'They developed the project over five years.', originalEs: 'Desarrollaron el proyecto durante cinco años.', transformed: 'The development of the project took five years.' },
        { original: 'They implemented the policy.', originalEs: 'Implementaron la política.', transformed: 'The implementation of the policy met with resistance.' },
        { original: 'They evaluated the programme.', originalEs: 'Evaluaron el programa.', transformed: 'The evaluation of the programme showed positive results.' },
      ],
      grammarPoint: 'Nominalization – converting verbs to nouns (investigate→investigation, improve→improvement)',
      grammarPointEs: 'Nominalización – convertir verbos en sustantivos (investigate→investigation, improve→improvement)',
    },
  ],
  'c2-discourse-cohesion': [
    {
      direction: 'to-discourse-cohesion',
      directionLabelEs: 'Añade conectores discursivos apropiados',
      entries: [
        { original: 'The evidence suggests a different conclusion. The data was inconsistent.', originalEs: 'La evidencia sugiere otra conclusión. Los datos eran inconsistentes.', transformed: 'The evidence suggests a different conclusion. Furthermore, the data was inconsistent.' },
        { original: 'The study has limitations. The results support the theory.', originalEs: 'El estudio tiene limitaciones. Los resultados apoyan la teoría.', transformed: 'The study has limitations. Nevertheless, the results support the theory.' },
        { original: 'We must reconsider the hypothesis. These findings are significant.', originalEs: 'Debemos reconsiderar la hipótesis. Estos hallazgos son significativos.', transformed: 'In light of these findings, we must reconsider the hypothesis.' },
        { original: 'The proposal merits approval. The foregoing has been considered.', originalEs: 'La propuesta merece aprobación. Lo anterior ha sido considerado.', transformed: 'Notwithstanding the foregoing, the proposal merits approval.' },
        { original: 'The committee decided to proceed. The new regulations will apply.', originalEs: 'El comité decidió proceder. Las nuevas regulaciones aplicarán.', transformed: 'Accordingly, the committee decided to proceed. Henceforth, the new regulations will apply.' },
        { original: 'The data was inconclusive. More research is needed.', originalEs: 'Los datos eran inconcluyentes. Se necesita más investigación.', transformed: 'Consequently, the data was inconclusive. Moreover, more research is needed.' },
      ],
      grammarPoint: 'Discourse cohesion – linking devices for academic text (Furthermore, Notwithstanding, In light of)',
      grammarPointEs: 'Cohesión discursiva – conectores para texto académico (Furthermore, Notwithstanding, In light of)',
    },
  ],
  'c2-register-shift': [
    {
      direction: 'register-shift',
      directionLabelEs: 'Transforma a registro formal',
      entries: [
        { original: 'We will start the meeting at 9.', originalEs: 'Empezaremos la reunión a las 9.', transformed: 'The meeting will commence at 9.' },
        { original: 'We got the contract.', originalEs: 'Conseguimos el contrato.', transformed: 'We acquired the contract.' },
        { original: 'The meeting ended successfully.', originalEs: 'La reunión terminó con éxito.', transformed: 'The meeting concluded successfully.' },
        { original: 'We need more information.', originalEs: 'Necesitamos más información.', transformed: 'We require further clarification.' },
        { original: 'We used the existing resources.', originalEs: 'Usamos los recursos existentes.', transformed: 'We utilised the existing resources.' },
        { original: 'We tried to resolve the matter.', originalEs: 'Intentamos resolver el asunto.', transformed: 'We endeavoured to resolve the matter.' },
      ],
      grammarPoint: 'Register shift – formal/informal (commence→start, acquire→get)',
      grammarPointEs: 'Cambio de registro – formal/informal (commence→start, acquire→get)',
    },
  ],
  'c1-cleft-sentences': [
    {
      direction: 'to-cleft',
      directionLabelEs: 'Transforma usando estructura de relieve (cleft)',
      entries: [
        { original: 'The weather caused the delay.', originalEs: 'El tiempo causó el retraso.', transformed: 'It was the weather that caused the delay.' },
        { original: 'We need more time.', originalEs: 'Necesitamos más tiempo.', transformed: 'What we need is more time.' },
        { original: 'The manager made the decision.', originalEs: 'El gerente tomó la decisión.', transformed: 'It is the manager who made the decision.' },
        { original: 'His reaction surprised me.', originalEs: 'Su reacción me sorprendió.', transformed: 'What surprised me was his reaction.' },
        { original: 'Money matters most.', originalEs: 'El dinero importa más.', transformed: 'It is money that matters most.' },
        { original: 'The policy led to the crisis.', originalEs: 'La política llevó a la crisis.', transformed: 'It was the policy that led to the crisis.' },
      ],
      grammarPoint: 'Cleft sentences – It is X that..., What we need is...',
      grammarPointEs: 'Oraciones de relieve – It is X that..., What we need is...',
    },
  ],
  'c1-passive-reporting': [
    {
      direction: 'to-passive-reporting',
      directionLabelEs: 'Transforma a estructura de reporte pasivo',
      entries: [
        { original: 'People believe he will resign.', originalEs: 'La gente cree que dimitirá.', transformed: 'It is believed that he will resign.' },
        { original: 'People say he has left the country.', originalEs: 'Dicen que ha dejado el país.', transformed: 'He is said to have left the country.' },
        { original: 'People expect the deal will go through.', originalEs: 'Se espera que el trato salga adelante.', transformed: 'It is expected that the deal will go through.' },
        { original: 'Reports say she is considering an offer.', originalEs: 'Los informes dicen que está considerando una oferta.', transformed: 'She is reported to be considering an offer.' },
        { original: 'People think the reforms will succeed.', originalEs: 'La gente piensa que las reformas tendrán éxito.', transformed: 'It is thought that the reforms will succeed.' },
        { original: 'Everyone knows he has made significant contributions.', originalEs: 'Todo el mundo sabe que ha hecho contribuciones significativas.', transformed: 'He is known to have made significant contributions.' },
      ],
      grammarPoint: 'Passive reporting – It is believed that..., He is said to...',
      grammarPointEs: 'Reporte pasivo – It is believed that..., He is said to...',
    },
  ],
};

const errorCorrectionTemplates: Record<string, ErrorCorrectionTemplate[]> = {
  'a1-present-simple': [
    {
      entries: [
        { incorrect: 'She play football.', correct: 'She plays football.', whyEs: '3ª persona singular → añade -s: play → plays' },
        { incorrect: 'He don\'t like fish.', correct: "He doesn't like fish.", whyEs: '3ª persona → doesn\'t (no "don\'t")' },
        { incorrect: 'Does she likes music?', correct: 'Does she like music?', whyEs: 'Después de does → verbo base (sin -s)' },
        { incorrect: 'I am play tennis.', correct: 'I play tennis.', whyEs: 'Present Simple NO usa "am/is/are" + verbo. Solo: sujeto + verbo' },
        { incorrect: 'She watchs TV.', correct: 'She watches TV.', whyEs: 'Verbos terminados en -ch → añade -es: watch → watches' },
        { incorrect: 'He studys English.', correct: 'He studies English.', whyEs: 'Consonante + y → cambia y por i + es: study → studies' },
        { incorrect: 'My mother work in a hospital.', correct: 'My mother works in a hospital.', whyEs: '"My mother" = she (3ª persona) → works' },
        { incorrect: 'The children plays outside.', correct: 'The children play outside.', whyEs: '"The children" = they (plural) → NO -s' },
      ],
      grammarPoint: 'Present Simple – common errors',
      grammarPointEs: 'Presente Simple – errores comunes',
    },
  ],
  'a1-articles-a-an-the': [
    {
      entries: [
        { incorrect: 'She is teacher.', correct: 'She is a teacher.', whyEs: 'Profesiones en inglés necesitan artículo: a/an + profesión' },
        { incorrect: 'I have a umbrella.', correct: 'I have an umbrella.', whyEs: 'Antes de sonido vocálico → "an" (no "a"): an umbrella' },
        { incorrect: 'I go to the school every day.', correct: 'I go to school every day.', whyEs: 'Instituciones como rutina → sin "the": go to school/work/church' },
        { incorrect: 'He is an European.', correct: 'He is a European.', whyEs: '"European" empieza con sonido /j/ (consonante) → "a" European' },
        { incorrect: 'I like the chocolate.', correct: 'I like chocolate.', whyEs: 'Cosas en general → sin artículo: I like chocolate (en general)' },
        { incorrect: 'Sun is very hot today.', correct: 'The sun is very hot today.', whyEs: 'Cosas únicas → "the": the sun, the moon, the Earth' },
      ],
      grammarPoint: 'Articles – a/an/the/Ø',
      grammarPointEs: 'Artículos – a/an/the/Ø',
    },
  ],
  'a2-past-simple': [
    {
      entries: [
        { incorrect: 'She didn\'t went to school.', correct: "She didn't go to school.", whyEs: 'Después de didn\'t → verbo BASE (go), no pasado (went)' },
        { incorrect: 'Did you went home?', correct: 'Did you go home?', whyEs: 'Después de did → verbo BASE (go), no pasado (went)' },
        { incorrect: 'I was go to the cinema.', correct: 'I went to the cinema.', whyEs: 'Past Simple NO usa "was" + verbo. Solo: sujeto + verbo pasado' },
        { incorrect: 'He buyed a car.', correct: 'He bought a car.', whyEs: 'Buy es irregular: buy → bought (no "buyed")' },
        { incorrect: 'They was happy.', correct: 'They were happy.', whyEs: 'They + were (no "was"). Was: I/he/she/it. Were: you/we/they' },
        { incorrect: 'I didn\'t knew the answer.', correct: "I didn't know the answer.", whyEs: 'Después de didn\'t → verbo BASE (know), no pasado (knew)' },
      ],
      grammarPoint: 'Past Simple – common errors',
      grammarPointEs: 'Pasado Simple – errores comunes',
    },
  ],
  'b1-present-perfect-vs-past-simple': [
    {
      entries: [
        { incorrect: 'I have seen him yesterday.', correct: 'I saw him yesterday.', whyEs: '"Yesterday" = tiempo definido → Past Simple (no Present Perfect)' },
        { incorrect: 'She has been to Paris last year.', correct: 'She went to Paris last year.', whyEs: '"Last year" = tiempo definido pasado → Past Simple' },
        { incorrect: 'I live here since 2015.', correct: 'I have lived here since 2015.', whyEs: '"Since" + punto de inicio → Present Perfect (no Present Simple)' },
        { incorrect: 'Did you ever eat sushi?', correct: 'Have you ever eaten sushi?', whyEs: '"Ever" + experiencia de vida → Present Perfect' },
        { incorrect: 'I already finished.', correct: 'I have already finished.', whyEs: '"Already" → Present Perfect (acción reciente con relevancia actual)' },
        { incorrect: 'He has went home.', correct: 'He has gone home.', whyEs: 'Past participle de "go" = gone (no "went"). Went = pasado simple.' },
      ],
      grammarPoint: 'Present Perfect vs Past Simple – choosing the right tense',
      grammarPointEs: 'Present Perfect vs Pasado Simple – elegir el tiempo correcto',
    },
  ],
  'a1-verb-to-be': [
    {
      entries: [
        { incorrect: 'She are happy.', correct: 'She is happy.', whyEs: 'She/He/It → IS (no "are")' },
        { incorrect: 'I is tired.', correct: 'I am tired.', whyEs: 'I → AM (no "is")' },
        { incorrect: 'They is at home.', correct: 'They are at home.', whyEs: 'They/We/You → ARE (no "is")' },
        { incorrect: 'He are a student.', correct: 'He is a student.', whyEs: 'He/She/It → IS (no "are")' },
        { incorrect: 'Is she are tired?', correct: 'Is she tired?', whyEs: 'Pregunta con IS: Is she + adjetivo? No se usa "are" después de "is"' },
        { incorrect: 'We is from Spain.', correct: 'We are from Spain.', whyEs: 'We/You/They → ARE (no "is")' },
        { incorrect: 'It am cold today.', correct: 'It is cold today.', whyEs: 'It → IS (solo I → am)' },
        { incorrect: 'She no is happy.', correct: "She isn't happy.", whyEs: 'Negativo: isn\'t / aren\'t (no "no is")' },
      ],
      grammarPoint: 'Verb TO BE – am/is/are common errors',
      grammarPointEs: 'Verbo TO BE – errores comunes con am/is/are',
    },
  ],
  'a1-plurals': [
    {
      entries: [
        { incorrect: 'Two childs are playing.', correct: 'Two children are playing.', whyEs: 'child → children (plural irregular, no "childs")' },
        { incorrect: 'She has three babys.', correct: 'She has three babies.', whyEs: 'Consonante + y → cambia y por i + es: baby → babies' },
        { incorrect: 'I need two boxs.', correct: 'I need two boxes.', whyEs: 'Terminados en -x/-s/-ch/-sh → añade -es: box → boxes' },
        { incorrect: 'There are five womans.', correct: 'There are five women.', whyEs: 'woman → women (plural irregular)' },
        { incorrect: 'She has two foots.', correct: 'She has two feet.', whyEs: 'foot → feet (plural irregular)' },
        { incorrect: 'He saw many mouses.', correct: 'He saw many mice.', whyEs: 'mouse → mice (plural irregular)' },
        { incorrect: 'Three knifes are on the table.', correct: 'Three knives are on the table.', whyEs: '-fe → ve + s: knife → knives' },
        { incorrect: 'I see two policemans.', correct: 'I see two policemen.', whyEs: 'policeman → policemen (compound irregular: man → men)' },
      ],
      grammarPoint: 'Plural nouns – common errors',
      grammarPointEs: 'Plurales – errores comunes',
    },
  ],
  'a2-present-continuous': [
    {
      entries: [
        { incorrect: 'She is play tennis now.', correct: 'She is playing tennis now.', whyEs: 'Presente Continuo: is/are + VERBO-ING (no verbo base)' },
        { incorrect: 'I am not study right now.', correct: "I'm not studying right now.", whyEs: 'Negativo Continuo: am/is/are + NOT + VERBO-ING' },
        { incorrect: 'He watching TV.', correct: 'He is watching TV.', whyEs: 'Presente Continuo SIEMPRE necesita is/are antes del -ing' },
        { incorrect: 'They are runing fast.', correct: 'They are running fast.', whyEs: 'CVC corta → dobla la consonante: run → running' },
        { incorrect: 'She is likeing this film.', correct: 'She likes this film.', whyEs: 'like, love, want = verbos de estado → NO se usan en continuo normalmente' },
        { incorrect: 'We are have lunch now.', correct: 'We are having lunch now.', whyEs: 'have (poseer/comer): have → having (e muda + ing)' },
        { incorrect: 'Is they playing outside?', correct: 'Are they playing outside?', whyEs: 'They/We/You → ARE (no "is") en preguntas' },
        { incorrect: 'She is swiming in the pool.', correct: 'She is swimming in the pool.', whyEs: 'swim → swimming (CVC: dobla m antes de -ing)' },
      ],
      grammarPoint: 'Present Continuous – common errors',
      grammarPointEs: 'Presente Continuo – errores comunes',
    },
  ],
  'b1-first-conditional': [
    {
      entries: [
        { incorrect: 'If it will rain, we will stay home.', correct: 'If it rains, we will stay home.', whyEs: 'En la cláusula If → Presente Simple (NO will): If it rains...' },
        { incorrect: 'If she study hard, she will pass.', correct: 'If she studies hard, she will pass.', whyEs: '3ª persona en If-clause → añade -s: If she studies...' },
        { incorrect: 'If you will hurry, you will catch the bus.', correct: "If you hurry, you'll catch the bus.", whyEs: 'Cláusula If → sin will. Solo la cláusula resultado usa will' },
        { incorrect: 'If he works hard, he will succeeds.', correct: 'If he works hard, he will succeed.', whyEs: 'Después de will → verbo BASE (sin -s): will succeed' },
        { incorrect: 'Unless he don\'t study, he will fail.', correct: "Unless he studies, he will fail.", whyEs: 'Unless = If...not. Unless + afirmativo: Unless he studies...' },
        { incorrect: 'If they call me, I will called you.', correct: 'If they call me, I will call you.', whyEs: 'will + verbo BASE: will call (no will + pasado)' },
      ],
      grammarPoint: 'First Conditional – common errors',
      grammarPointEs: 'Primera Condicional – errores comunes',
    },
  ],
  'b1-passive-voice': [
    {
      entries: [
        { incorrect: 'The letter was writed by her.', correct: 'The letter was written by her.', whyEs: 'write → written (participio irregular). Pasiva: be + participio pasado' },
        { incorrect: 'The car is repairing by a mechanic.', correct: 'The car is being repaired by a mechanic.', whyEs: 'Pasiva continua: is/are + being + participio (no solo participio)' },
        { incorrect: 'The book was wrote last year.', correct: 'The book was written last year.', whyEs: 'write → written (no "wrote" en pasiva; wrote = pasado simple activo)' },
        { incorrect: 'Meals is cooked every day.', correct: 'Meals are cooked every day.', whyEs: 'Meals = plural → are (plural) cooked' },
        { incorrect: 'The results will announced tomorrow.', correct: 'The results will be announced tomorrow.', whyEs: 'Pasiva futura: will BE + participio (no olvidar "be")' },
        { incorrect: 'He was arrested by the polices.', correct: 'He was arrested by the police.', whyEs: '"police" es plural sin -s en inglés: the police are...' },
      ],
      grammarPoint: 'Passive voice – common errors',
      grammarPointEs: 'Voz pasiva – errores comunes',
    },
  ],
  'b1-present-perfect': [
    {
      entries: [
        { incorrect: 'I have went to Paris.', correct: 'I have been to Paris.', whyEs: 'go → gone (participio). "went" es pasado simple, no participio' },
        { incorrect: 'She has live here since 2010.', correct: 'She has lived here since 2010.', whyEs: 'Present Perfect: have/has + participio pasado (lived, no live)' },
        { incorrect: 'Have you ever ate sushi?', correct: 'Have you ever eaten sushi?', whyEs: 'eat → eaten (participio irregular). "ate" es pasado simple' },
        { incorrect: 'He has never been in Japan.', correct: 'He has never been to Japan.', whyEs: 'Con países/ciudades: "been to" (no "been in") para visitar' },
        { incorrect: 'I have finished my work yesterday.', correct: 'I finished my work yesterday.', whyEs: '"Yesterday" = tiempo definido → Past Simple (no Present Perfect)' },
        { incorrect: 'She has written the report last week.', correct: 'She wrote the report last week.', whyEs: '"Last week" = tiempo definido → Past Simple' },
        { incorrect: 'We are living here for five years.', correct: 'We have lived here for five years.', whyEs: '"For" + duración con relevancia actual → Present Perfect' },
        { incorrect: 'He has buyed a new car.', correct: 'He has bought a new car.', whyEs: 'buy → bought (participio irregular, no "buyed")' },
      ],
      grammarPoint: 'Present Perfect – common errors',
      grammarPointEs: 'Present Perfect – errores comunes',
    },
  ],
  'b2-second-conditional': [
    {
      entries: [
        { incorrect: 'If I would have money, I would travel.', correct: 'If I had money, I would travel.', whyEs: 'Cláusula If → Past Simple (had), NO "would have" en la condición' },
        { incorrect: 'If she was here, she would help.', correct: 'If she were here, she would help.', whyEs: 'Con "If I/he/she were" (subjuntivo) es más formal; "were" es correcto en condicionales' },
        { incorrect: 'If he would speak French, he would get the job.', correct: 'If he spoke French, he would get the job.', whyEs: 'Cláusula If → Past Simple (spoke), sin "would"' },
        { incorrect: 'If we had time, we would visited them.', correct: 'If we had time, we would visit them.', whyEs: 'Después de would → verbo BASE (visit), no pasado' },
        { incorrect: 'If I had her number, I will call her.', correct: 'If I had her number, I would call her.', whyEs: 'Segunda condicional → would (no will) en la cláusula principal' },
        { incorrect: 'If they knew the truth, they would told you.', correct: 'If they knew the truth, they would tell you.', whyEs: 'would + infinitivo (tell), no would + pasado (told)' },
      ],
      grammarPoint: 'Second Conditional – common errors',
      grammarPointEs: 'Segunda Condicional – errores comunes',
    },
  ],
  'b2-passive-advanced': [
    {
      entries: [
        { incorrect: 'The proposal has been approve by the committee.', correct: 'The proposal has been approved by the committee.', whyEs: 'Pasiva perfecta: have been + PARTICIPIO (approved)' },
        { incorrect: 'The case is being investigate by the police.', correct: 'The case is being investigated by the police.', whyEs: 'Pasiva continua: is being + PARTICIPIO (investigated)' },
        { incorrect: 'The work will have been finish by Friday.', correct: 'The work will have been finished by Friday.', whyEs: 'Pasiva futuro perfecto: will have been + PARTICIPIO (finished)' },
        { incorrect: 'The bridge had been build by 1990.', correct: 'The bridge had been built by 1990.', whyEs: 'build → built (participio irregular)' },
        { incorrect: 'The package will be deliver tomorrow.', correct: 'The package will be delivered tomorrow.', whyEs: 'Pasiva futura: will be + PARTICIPIO (delivered)' },
        { incorrect: 'The project had been completed by they.', correct: 'The project had been completed by them.', whyEs: 'Después de "by" → pronombre objeto: them (no they)' },
      ],
      grammarPoint: 'Advanced Passive – common errors',
      grammarPointEs: 'Voz pasiva avanzada – errores comunes',
    },
  ],
  'b2-reported-speech': [
    {
      entries: [
        { incorrect: 'She said she is tired.', correct: 'She said she was tired.', whyEs: 'Backshift: presente → pasado (is → was) en estilo indirecto' },
        { incorrect: 'He said he had seen him yesterday.', correct: 'He said he had seen him the day before.', whyEs: '"Yesterday" cambia a "the day before" en estilo indirecto' },
        { incorrect: 'She said she will call me tomorrow.', correct: 'She said she would call me the next day.', whyEs: 'Backshift: will → would; "tomorrow" → "the next day"' },
        { incorrect: 'He asked me where did I live.', correct: 'He asked me where I lived.', whyEs: 'En preguntas indirectas: orden afirmativo (where I lived), no interrogativo' },
        { incorrect: 'She asked if was I ready.', correct: 'She asked if I was ready.', whyEs: 'Orden: if + sujeto + verbo (if I was ready)' },
        { incorrect: 'They said they can help me.', correct: 'They said they could help me.', whyEs: 'Backshift: can → could en estilo indirecto' },
      ],
      grammarPoint: 'Reported Speech – common errors',
      grammarPointEs: 'Estilo indirecto – errores comunes',
    },
  ],
  'c1-inversion': [
    {
      entries: [
        { incorrect: 'Never I have seen such a beautiful sunset.', correct: 'Never have I seen such a beautiful sunset.', whyEs: 'Inversión: Never + auxiliar + sujeto (have I seen)' },
        { incorrect: 'Seldom she complains about the service.', correct: 'Seldom does she complain about the service.', whyEs: 'Inversión con "seldom": Seldom + does + sujeto + verbo base' },
        { incorrect: 'Hardly we had arrived when it started raining.', correct: 'Hardly had we arrived when it started raining.', whyEs: 'Inversión: Hardly + had + sujeto + participio' },
        { incorrect: 'No sooner we had left than he arrived.', correct: 'No sooner had we left than he arrived.', whyEs: 'Inversión: No sooner + had + sujeto + participio' },
        { incorrect: 'Only then I understood the problem.', correct: 'Only then did I understand the problem.', whyEs: 'Inversión con "only": Only then + did + sujeto + verbo base' },
        { incorrect: 'Only after he had finished he left.', correct: 'Only after he had finished did he leave.', whyEs: 'Inversión en la cláusula principal: did he leave (no "he left")' },
      ],
      grammarPoint: 'Inversion – common errors',
      grammarPointEs: 'Inversión – errores comunes',
    },
  ],
  'c1-mixed-conditionals': [
    {
      entries: [
        { incorrect: 'If I had studied hard, I would have had a better job now.', correct: 'If I had studied hard, I would have a better job now.', whyEs: 'Condicional mixto: condición pasada (had studied) + resultado presente (would have) con infinitivo' },
        { incorrect: 'If she had taken the job, she would be earned more today.', correct: 'If she had taken the job, she would be earning more today.', whyEs: 'Resultado presente en curso: would be + -ing (earning)' },
        { incorrect: 'If I were taller, I would have join the team.', correct: 'If I were taller, I would have joined the team.', whyEs: 'would have + participio (joined), no infinitivo' },
        { incorrect: 'If he had listened, he would not have been in trouble now.', correct: 'If he had listened, he would not be in trouble now.', whyEs: 'Resultado presente: would be (no "would have been"). Would have been = resultado pasado' },
        { incorrect: 'If we had practised more, we would spoke better English now.', correct: 'If we had practised more, we would speak better English now.', whyEs: 'Después de would → infinitivo (speak), no pasado (spoke)' },
        { incorrect: 'If you had accepted the offer, you would have been working here now.', correct: 'If you had accepted the offer, you would be working here now.', whyEs: 'Resultado presente: would be working (no would have been)' },
      ],
      grammarPoint: 'Mixed Conditionals – common errors',
      grammarPointEs: 'Condicionales mixtos – errores comunes',
    },
  ],
  'a1-articles': [
    {
      entries: [
        { incorrect: 'She is teacher.', correct: 'She is a teacher.', whyEs: 'Profesiones → artículo indefinido: a/an + profesión' },
        { incorrect: 'I have a umbrella.', correct: 'I have an umbrella.', whyEs: 'Sonido vocal inicial (/ʌ/) → "an": an umbrella' },
        { incorrect: 'He is a honest man.', correct: 'He is an honest man.', whyEs: '"honest" empieza con sonido vocal (/ɒ/) → "an": an honest man' },
        { incorrect: 'I like the music in general.', correct: 'I like music.', whyEs: 'Cosas en general → sin artículo: I like music (no "the music")' },
        { incorrect: 'She goes to the school every day.', correct: 'She goes to school every day.', whyEs: 'Instituciones como función → sin "the": go to school/work' },
        { incorrect: 'He is an European student.', correct: 'He is a European student.', whyEs: '"European" empieza con sonido /j/ (consonante) → "a"' },
      ],
      grammarPoint: 'Articles a/an/the – common errors',
      grammarPointEs: 'Artículos a/an/the – errores comunes',
    },
  ],
  'c1-hedging': [
    {
      entries: [
        { incorrect: 'Climate change is definitely a serious issue.', correct: 'It could be argued that climate change is a serious issue.', whyEs: 'Hedging evita afirmaciones absolutas: usa "It could be argued" en lugar de "definitely"' },
        { incorrect: 'The policy has failed without doubt.', correct: 'One might suggest that the policy has failed.', whyEs: 'Hedging: sustituye afirmación directa por "One might suggest"' },
        { incorrect: 'Further research is necessary.', correct: 'There appears to be a need for further research.', whyEs: 'Hedging: "There appears to be" suaviza la afirmación' },
        { incorrect: 'The results prove the theory.', correct: 'The evidence would indicate that the results support the theory.', whyEs: 'Hedging: "would indicate" en lugar de "prove" para evitar certeza absoluta' },
      ],
      grammarPoint: 'Hedging language – common errors',
      grammarPointEs: 'Lenguaje de hedging – errores comunes',
    },
  ],
  'c1-nominalization': [
    {
      entries: [
        { incorrect: 'They investigate the matter and it will take time.', correct: 'The investigation of the matter will take time.', whyEs: 'Nominalización: verbo "investigate" → sustantivo "investigation"' },
        { incorrect: 'The system improved significantly.', correct: 'The improvement of the system was significant.', whyEs: 'Nominalización: "improved" → "improvement" (sustantivo)' },
        { incorrect: 'They analyzed the data and revealed new patterns.', correct: 'The analysis of the data revealed new patterns.', whyEs: 'Nominalización: "analyzed" → "analysis"' },
        { incorrect: 'They implemented the policy and met with resistance.', correct: 'The implementation of the policy met with resistance.', whyEs: 'Nominalización: "implemented" → "implementation"' },
      ],
      grammarPoint: 'Nominalization – common errors',
      grammarPointEs: 'Nominalización – errores comunes',
    },
  ],
  'c1-cleft-sentences': [
    {
      entries: [
        { incorrect: 'The weather caused the delay.', correct: 'It was the weather that caused the delay.', whyEs: 'Cleft: usa "It was X that..." para enfatizar el sujeto' },
        { incorrect: 'We need more time.', correct: 'What we need is more time.', whyEs: 'Cleft con "What": What we need is... (énfasis en el complemento)' },
        { incorrect: 'The manager made the decision.', correct: 'It is the manager who made the decision.', whyEs: 'Cleft con persona: "It is X who..." (no "that" para personas)' },
        { incorrect: 'His reaction surprised me.', correct: 'What surprised me was his reaction.', whyEs: 'Cleft: "What surprised me was..." para enfatizar el objeto' },
        { incorrect: 'It was the meeting what started late.', correct: 'It was the meeting that started late.', whyEs: 'En cleft sentences con cosas/eventos se usa "that", no "what"' },
        { incorrect: 'It is the budget what concerns them most.', correct: 'It is the budget that concerns them most.', whyEs: 'Después de "It is X" con sustantivo inanimado → "that", no "what"' },
        { incorrect: 'It was her attitude what caused the conflict.', correct: 'It was her attitude that caused the conflict.', whyEs: 'Cleft con sustantivo abstracto: "that" (no "what") introduce la cláusula' },
      ],
      grammarPoint: 'Cleft sentences – common errors',
      grammarPointEs: 'Oraciones de relieve – errores comunes',
    },
  ],
  'c1-passive-reporting': [
    {
      entries: [
        { incorrect: 'People believe he will resign.', correct: 'It is believed that he will resign.', whyEs: 'Reporte pasivo: "People believe" → "It is believed that"' },
        { incorrect: 'People say he has left the country.', correct: 'He is said to have left the country.', whyEs: 'Reporte pasivo con infinitivo: "He is said to have + participio" para pasado' },
        { incorrect: 'People expect the deal will go through.', correct: 'It is expected that the deal will go through.', whyEs: 'Reporte pasivo: "People expect" → "It is expected that"' },
        { incorrect: 'Reports say she is considering an offer.', correct: 'She is reported to be considering an offer.', whyEs: 'Reporte pasivo: "She is reported to be + -ing" para acción en curso' },
        { incorrect: 'It is believe that the reforms will succeed.', correct: 'It is believed that the reforms will succeed.', whyEs: 'Pasivo: be + participio pasado (believed), no infinitivo (believe)' },
        { incorrect: 'It is think that the economy is recovering.', correct: 'It is thought that the economy is recovering.', whyEs: 'Pasivo de reporte: "is thought" (participio), no "is think"' },
        { incorrect: 'It is report that sales have increased.', correct: 'It is reported that sales have increased.', whyEs: 'Pasivo: "is reported" (participio pasado), no "is report"' },
      ],
      grammarPoint: 'Passive reporting – common errors',
      grammarPointEs: 'Reporte pasivo – errores comunes',
    },
  ],
  'c2-discourse-cohesion': [
    {
      entries: [
        { incorrect: 'The evidence suggests a conclusion. The data was inconsistent.', correct: 'The evidence suggests a conclusion. Furthermore, the data was inconsistent.', whyEs: 'Cohesión: añade conector "Furthermore" para añadir información' },
        { incorrect: 'The study has limitations. The results support the theory.', correct: 'The study has limitations. Nevertheless, the results support the theory.', whyEs: 'Cohesión: "Nevertheless" conecta contraste/concesión' },
        { incorrect: 'We must reconsider. These findings are significant.', correct: 'In light of these findings, we must reconsider.', whyEs: 'Cohesión: "In light of" introduce la causa o razón' },
        { incorrect: 'The proposal merits approval. The foregoing has been considered.', correct: 'Notwithstanding the foregoing, the proposal merits approval.', whyEs: 'Cohesión: "Notwithstanding" = a pesar de, para concesión formal' },
      ],
      grammarPoint: 'Discourse cohesion – common errors',
      grammarPointEs: 'Cohesión discursiva – errores comunes',
    },
  ],
  'c2-register-shift': [
    {
      entries: [
        { incorrect: 'We will start the meeting at 9.', correct: 'The meeting will commence at 9.', whyEs: 'Registro formal: "start" → "commence"' },
        { incorrect: 'We got the contract.', correct: 'We acquired the contract.', whyEs: 'Registro formal: "got" → "acquired"' },
        { incorrect: 'We need more information.', correct: 'We require further clarification.', whyEs: 'Registro formal: "need" → "require"; "more information" → "further clarification"' },
        { incorrect: 'We tried to resolve the matter.', correct: 'We endeavoured to resolve the matter.', whyEs: 'Registro formal: "tried" → "endeavoured"' },
      ],
      grammarPoint: 'Register shift – common errors',
      grammarPointEs: 'Cambio de registro – errores comunes',
    },
  ],
};

// ── Generator Functions ──────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function resolveToBeForm(subject: string): string {
  const s = subject.toLowerCase();
  if (s === 'i') return 'am';
  if (['he', 'she', 'it', 'the cat', 'my sister', 'my father', 'the teacher'].some(p => s === p || s.startsWith(p))) return 'is';
  return 'are';
}

/**
 * Generate fill-blank exercises for a grammar module ID.
 * Returns randomized exercises that never repeat exactly.
 */
export function generateFillBlanks(moduleId: string, count: number = 8): GeneratedExercise[] {
  const templates = fillBlankTemplates[moduleId];
  if (!templates || templates.length === 0) return [];

  const exercises: GeneratedExercise[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && exercises.length < count; attempt++) {
    const tmpl = pickRandom(templates);
    const subject = pickRandom(tmpl.subjects);
    const verb = pickRandom(tmpl.verbs);
    const obj = pickRandom(tmpl.objects);

    // For TO BE, resolve the correct form
    let transformed = verb.transformed;
    if (verb.base === 'be') {
      transformed = resolveToBeForm(subject);
    }
    // For 3rd person non-be verbs, already pre-set in template data

    const key = `${subject}-${verb.base}-${obj}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const sentence = `${subject} ___ (${verb.base}) ${obj}.`;

    exercises.push({
      type: 'fill-blank',
      prompt: sentence,
      promptEs: `Completa: ${subject} ___ (${verb.baseEs}) ${obj}.`,
      answer: transformed,
      hint: `${verb.base} → ${transformed}`,
      hintEs: `${verb.baseEs}: ${verb.base} → ${transformed}`,
      grammarPoint: tmpl.grammarPoint,
      grammarPointEs: tmpl.grammarPointEs,
    });
  }

  return shuffle(exercises).slice(0, count);
}

/**
 * Generate transformation exercises for a grammar module ID.
 */
export function generateTransformations(moduleId: string, count: number = 6): GeneratedExercise[] {
  const templates = transformTemplates[moduleId];
  if (!templates || templates.length === 0) return [];

  const exercises: GeneratedExercise[] = [];

  for (const tmpl of templates) {
    const shuffled = shuffle(tmpl.entries);
    for (const entry of shuffled) {
      if (exercises.length >= count) break;
      exercises.push({
        type: 'transformation',
        prompt: `${tmpl.directionLabelEs}: ${entry.original}`,
        promptEs: entry.originalEs,
        answer: entry.transformed,
        hint: tmpl.directionLabelEs,
        hintEs: tmpl.directionLabelEs,
        grammarPoint: tmpl.grammarPoint,
        grammarPointEs: tmpl.grammarPointEs,
      });
    }
  }

  return shuffle(exercises).slice(0, count);
}

/**
 * Generate error correction exercises for a grammar module ID.
 */
export function generateErrorCorrections(moduleId: string, count: number = 6): GeneratedExercise[] {
  const templates = errorCorrectionTemplates[moduleId];
  if (!templates || templates.length === 0) return [];

  const exercises: GeneratedExercise[] = [];

  for (const tmpl of templates) {
    const shuffled = shuffle(tmpl.entries);
    for (const entry of shuffled) {
      if (exercises.length >= count) break;
      exercises.push({
        type: 'error-correction',
        prompt: `Corrige el error: "${entry.incorrect}"`,
        promptEs: entry.whyEs,
        answer: entry.correct,
        hint: entry.whyEs,
        hintEs: entry.whyEs,
        grammarPoint: tmpl.grammarPoint,
        grammarPointEs: tmpl.grammarPointEs,
      });
    }
  }

  return shuffle(exercises).slice(0, count);
}

/**
 * Generate multiple-choice exercises from fill-blank templates.
 * Creates distractors by picking wrong verb forms.
 */
export function generateMultipleChoice(moduleId: string, count: number = 8): GeneratedExercise[] {
  const templates = fillBlankTemplates[moduleId];
  if (!templates || templates.length === 0) return [];

  const exercises: GeneratedExercise[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && exercises.length < count; attempt++) {
    const tmpl = pickRandom(templates);
    const subject = pickRandom(tmpl.subjects);
    const verb = pickRandom(tmpl.verbs);
    const obj = pickRandom(tmpl.objects);

    let correctForm = verb.transformed;
    if (verb.base === 'be') {
      correctForm = resolveToBeForm(subject);
    }

    const key = `mc-${subject}-${verb.base}-${obj}`;
    if (seen.has(key)) continue;
    seen.add(key);

    // Generate distractors from other verb forms
    const allForms = tmpl.verbs
      .map(v => v.base === 'be' ? resolveToBeForm(subject) : v.transformed)
      .filter(f => f !== correctForm);
    const distractors = shuffle(allForms).slice(0, 3);

    // If we don't have enough distractors, add the base form
    while (distractors.length < 3) {
      const fallback = verb.base !== correctForm ? verb.base : verb.base + 's';
      if (!distractors.includes(fallback)) distractors.push(fallback);
      else break;
    }

    const options = shuffle([correctForm, ...distractors.slice(0, 3)]);
    const correctIndex = options.indexOf(correctForm);

    exercises.push({
      type: 'multiple-choice',
      prompt: `${subject} ___ ${obj}.`,
      promptEs: `Elige la forma correcta del verbo "${verb.base}"`,
      answer: correctForm,
      options,
      correctIndex,
      grammarPoint: tmpl.grammarPoint,
      grammarPointEs: tmpl.grammarPointEs,
    });
  }

  return shuffle(exercises).slice(0, count);
}

/**
 * Generate a mixed practice set for a module.
 * Combines fill-blank, transformation, error-correction, and multiple-choice.
 */
export function generateMixedPractice(moduleId: string, count: number = 12): GeneratedExercise[] {
  const perType = Math.ceil(count / 4);
  const all = [
    ...generateFillBlanks(moduleId, perType),
    ...generateTransformations(moduleId, perType),
    ...generateErrorCorrections(moduleId, perType),
    ...generateMultipleChoice(moduleId, perType),
  ];
  return shuffle(all).slice(0, count);
}

/**
 * Check if a module has generator templates available.
 */
export function hasGeneratorTemplates(moduleId: string): boolean {
  return !!(
    fillBlankTemplates[moduleId]?.length ||
    transformTemplates[moduleId]?.length ||
    errorCorrectionTemplates[moduleId]?.length
  );
}

/**
 * Get all module IDs that have generator templates.
 */
export function getModulesWithGenerators(): string[] {
  const ids = new Set<string>();
  for (const id of Object.keys(fillBlankTemplates)) ids.add(id);
  for (const id of Object.keys(transformTemplates)) ids.add(id);
  for (const id of Object.keys(errorCorrectionTemplates)) ids.add(id);
  return Array.from(ids);
}
