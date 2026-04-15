// Grammar Theory Modules — Progressive explanations A1→C2
// Módulos de Teoría Gramatical — Explicaciones progresivas A1→C2
// Each module is self-contained: explanation + formation rules + L1 contrast + predicted errors + exercises

import { practiceActivityTheoryModules } from './practice-activity-theory-modules';

export interface GrammarTheoryModule {
  id: string;
  title: string;
  titleEs: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  cefrLevel: 1 | 2 | 3 | 4 | 5 | 6;
  category: 'verbs' | 'nouns' | 'pronouns' | 'adjectives' | 'adverbs' | 'prepositions' | 'articles' | 'questions' | 'sentences' | 'clauses' | 'discourse' | 'pragmatics' | 'syntax' | 'verb-tenses';
  priority: 'critical' | 'high' | 'medium' | 'low';
  prerequisiteIds: string[];
  // Core explanation
  explanation: string;
  explanationEs: string;
  // Formation rules step by step
  formationRules: {
    label: string;
    labelEs: string;
    formula?: string;
    steps: { step: string; stepEs: string; example: string; translation: string }[];
  }[];
  // Signal words / time expressions
  signalWords?: { word: string; meaning: string; meaningEs: string }[];
  // Contrast with Spanish L1
  l1Contrast: {
    concept: string;
    conceptEs: string;
    spanishBehavior: string;
    englishBehavior: string;
    contrastExamples: { english: string; spanish: string; note: string }[];
  };
  // Predicted errors for Spanish speakers
  predictedErrors: {
    error: string;
    correction: string;
    whyEs: string;
    frequency: 'very common' | 'common' | 'occasional';
  }[];
  // Quick recognition exercises
  exercises: {
    recognition: { sentence: string; question: string; options: string[]; correct: number; explanationEs: string }[];
    controlled: { prompt: string; promptEs: string; answer: string; hint?: string }[];
  };
  // Link to recycling
  recycleInTopics: string[];
  tipEs: string;
}

export const grammarTheory: GrammarTheoryModule[] = [

  // ═══════════════════════════════════════════════
  // A1 — MODULE 1: Verb TO BE
  // ═══════════════════════════════════════════════
  {
    id: 'a1-verb-to-be',
    title: 'The Verb TO BE',
    titleEs: 'El Verbo TO BE (ser/estar)',
    level: 'A1',
    cefrLevel: 1,
    category: 'verbs',
    priority: 'critical',
    prerequisiteIds: [],
    explanation: 'TO BE is the most important verb in English. It is used to describe identity, characteristics, location, states, and to form many other structures. Unlike Spanish, English ALWAYS requires the subject pronoun before the verb.',
    explanationEs: 'TO BE es el verbo más importante del inglés. Se usa para describir identidad, características, ubicación, estados y para formar muchas otras estructuras. A diferencia del español, el inglés SIEMPRE requiere el pronombre sujeto antes del verbo.',
    formationRules: [
      {
        label: 'Affirmative (full forms)',
        labelEs: 'Afirmativo (formas completas)',
        formula: 'Subject + am/is/are',
        steps: [
          { step: 'I + am', stepEs: 'Yo + am', example: 'I am happy.', translation: 'Yo estoy feliz.' },
          { step: 'He/She/It + is', stepEs: 'Él/Ella/Eso + is', example: 'She is a teacher.', translation: 'Ella es profesora.' },
          { step: 'You/We/They + are', stepEs: 'Tú/Nosotros/Ellos + are', example: 'They are students.', translation: 'Ellos son estudiantes.' },
        ]
      },
      {
        label: 'Contractions (spoken English)',
        labelEs: 'Contracciones (inglés hablado)',
        formula: "Subject + 'm / 's / 're",
        steps: [
          { step: "I am → I'm", stepEs: "I am → I'm", example: "I'm from Spain.", translation: 'Soy de España.' },
          { step: "He is → He's / She is → She's / It is → It's", stepEs: "He is → He's etc.", example: "He's tired.", translation: 'Él está cansado.' },
          { step: "You are → You're / We are → We're / They are → They're", stepEs: "You are → You're etc.", example: "We're ready.", translation: 'Estamos listos.' },
        ]
      },
      {
        label: 'Negative',
        labelEs: 'Negativo',
        formula: 'Subject + am/is/are + not',
        steps: [
          { step: 'I am not → I\'m not', stepEs: 'I am not (no hay contracción de I\'m not)', example: "I'm not tired.", translation: 'No estoy cansado.' },
          { step: 'He/She/It is not → isn\'t', stepEs: 'He/She/It is not → isn\'t', example: "She isn't here.", translation: 'Ella no está aquí.' },
          { step: 'You/We/They are not → aren\'t', stepEs: 'You/We/They are not → aren\'t', example: "They aren't ready.", translation: 'No están listos.' },
        ]
      },
      {
        label: 'Questions',
        labelEs: 'Preguntas',
        formula: 'Am/Is/Are + Subject + ?',
        steps: [
          { step: 'Invert: put am/is/are BEFORE the subject', stepEs: 'Invertir: poner am/is/are ANTES del sujeto', example: 'Are you a student?', translation: '¿Eres estudiante?' },
          { step: 'Short answers: Yes, I am. / No, I\'m not.', stepEs: 'Respuestas cortas', example: 'Is she Spanish? — Yes, she is.', translation: '¿Es ella española? — Sí, lo es.' },
        ]
      }
    ],
    signalWords: [
      { word: 'very', meaning: 'intensifier with to be', meaningEs: 'intensificador con to be' },
      { word: 'really', meaning: 'intensifier', meaningEs: 'realmente / muy' },
      { word: 'quite', meaning: 'moderately', meaningEs: 'bastante (moderado)' },
    ],
    l1Contrast: {
      concept: 'Subject pronouns are mandatory in English',
      conceptEs: 'Los pronombres sujeto son obligatorios en inglés',
      spanishBehavior: 'In Spanish, the subject pronoun is usually omitted: "Soy médico", "Estoy bien", "Es tarde"',
      englishBehavior: 'In English, the subject pronoun is ALWAYS required: "I am a doctor", "I am fine", "It is late"',
      contrastExamples: [
        { english: 'I am a doctor.', spanish: 'Soy médico.', note: 'English needs "I", Spanish drops it.' },
        { english: "It's cold today.", spanish: 'Hace frío hoy.', note: '"It" is mandatory even without a real subject.' },
        { english: "She's from Madrid.", spanish: 'Es de Madrid.', note: '"She" must be stated.' },
        { english: 'BE has two Spanish equivalents: SER (permanent) and ESTAR (temporary)', spanish: 'SER vs ESTAR', note: 'English uses only one verb for both.' },
      ]
    },
    predictedErrors: [
      { error: 'Is cold today.', correction: "It's cold today.", whyEs: 'En español se dice "Hace frío" sin pronombre. En inglés "it" es obligatorio.', frequency: 'very common' },
      { error: 'Am tired.', correction: "I'm tired.", whyEs: 'El pronombre sujeto nunca se omite en inglés.', frequency: 'very common' },
      { error: 'She be happy.', correction: 'She is happy.', whyEs: 'TO BE no es un verbo regular; no se usa el infinitivo como en español.', frequency: 'common' },
      { error: 'He is very very tall.', correction: 'He is very tall.', whyEs: 'En español se puede redoubling "muy muy". En inglés se usa "extremely" o "incredibly".', frequency: 'common' },
      { error: "I no am tired.", correction: "I'm not tired.", whyEs: 'La negación en inglés es "am/is/are + not", no "no + verbo".', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ she from Italy?', question: 'Which form of TO BE completes this question?', options: ['Am', 'Is', 'Are', 'Be'], correct: 1, explanationEs: 'Con He/She/It usamos IS.' },
        { sentence: 'We _____ students at this school.', question: 'Which form is correct?', options: ["'re", "'m", "'s", 'be'], correct: 0, explanationEs: 'Con We/You/They usamos ARE (contracción: \'re).' },
        { sentence: 'Choose the correct negative:', question: '', options: ["I don't am tired.", "I no am tired.", "I'm not tired.", "I amn't tired."], correct: 2, explanationEs: 'La forma negativa de "I am" es "I\'m not" (nunca I amn\'t).' },
        { sentence: 'It _____ very cold today.', question: 'Which form completes this sentence?', options: ['am', 'is', 'are', 'be'], correct: 1, explanationEs: 'It = 3ª persona singular → IS.' },
        { sentence: 'My parents _____ from Argentina.', question: 'Which form is correct?', options: ['is', 'am', 'are', 'be'], correct: 2, explanationEs: '"My parents" = they → ARE.' },
        { sentence: '_____ it late? — Yes, it _____.', question: 'Complete the question and short answer:', options: ['Is / is', 'Are / are', 'Is / does', 'Does / is'], correct: 0, explanationEs: 'It → Is. Short answer: Yes, it is.' },
        { sentence: 'Maria and I _____ happy.', question: 'Which is correct?', options: ['is', 'am', 'are', 'be'], correct: 2, explanationEs: '"Maria and I" = we → ARE.' },
      ],
      controlled: [
        { prompt: 'Complete: She ___ a nurse.', promptEs: 'Completa: Ella ___ enfermera.', answer: 'is', hint: 'He/She/It → ?' },
        { prompt: 'Make negative: They are ready.', promptEs: 'Haz negativo: Ellos están listos.', answer: "They aren't ready.", hint: 'are + not → ?' },
        { prompt: 'Make question: You are from Brazil.', promptEs: 'Haz pregunta: Eres de Brasil.', answer: 'Are you from Brazil?', hint: 'Invert subject and verb.' },
        { prompt: 'Complete: I ___ 25 years old.', promptEs: 'Completa: Yo ___ 25 años.', answer: 'am', hint: 'I → ?' },
        { prompt: 'Make negative: He is a teacher.', promptEs: 'Haz negativo: Él es profesor.', answer: "He isn't a teacher.", hint: 'is + not → ?' },
        { prompt: 'Complete: ___ cold today. (Use "it")', promptEs: 'Completa: ___ frío hoy. (Usa "it")', answer: "It's cold today.", hint: 'It + is → contraction' },
        { prompt: 'Make question: They are Spanish.', promptEs: 'Haz pregunta: Ellos son españoles.', answer: 'Are they Spanish?', hint: 'Invert: Are + they' },
        { prompt: 'Correct this: Am tired today.', promptEs: 'Corrige esto: Am tired today.', answer: "I'm tired today.", hint: 'Subject pronoun is ALWAYS required' },
      ]
    },
    recycleInTopics: ['a1-present-simple', 'a2-past-simple', 'b1-passive-voice', 'a1-there-is-are'],
    tipEs: '💡 Truco: la forma "IT\'S" es una de las más usadas en inglés. "It\'s cold", "It\'s late", "It\'s Monday" — ¡apréndetela bien!'
  },

  // ═══════════════════════════════════════════════
  // A1 — MODULE 2: Subject Pronouns
  // ═══════════════════════════════════════════════
  {
    id: 'a1-subject-pronouns',
    title: 'Subject Pronouns',
    titleEs: 'Pronombres Sujeto',
    level: 'A1',
    cefrLevel: 1,
    category: 'pronouns',
    priority: 'critical',
    prerequisiteIds: ['a1-verb-to-be'],
    explanation: 'Subject pronouns replace a noun as the subject of a sentence. They are ALWAYS required in English, unlike Spanish, where they are often omitted.',
    explanationEs: 'Los pronombres sujeto reemplazan a un sustantivo como sujeto de la oración. Son SIEMPRE obligatorios en inglés, a diferencia del español donde suelen omitirse.',
    formationRules: [
      {
        label: 'The 7 subject pronouns',
        labelEs: 'Los 7 pronombres sujeto',
        steps: [
          { step: 'I — 1st person singular', stepEs: 'I — 1ª persona singular', example: 'I am a student.', translation: 'Yo soy estudiante.' },
          { step: 'You — 2nd person (singular AND plural)', stepEs: 'You — 2ª persona (singular Y plural)', example: 'You are my friend. / You are my friends.', translation: 'Tú eres mi amigo. / Ustedes son mis amigos.' },
          { step: 'He — 3rd person singular masculine', stepEs: 'He — 3ª persona singular masculino', example: 'He is my brother.', translation: 'Él es mi hermano.' },
          { step: 'She — 3rd person singular feminine', stepEs: 'She — 3ª persona singular femenino', example: 'She is my sister.', translation: 'Ella es mi hermana.' },
          { step: 'It — 3rd person singular (things, animals, weather)', stepEs: 'It — 3ª persona singular (cosas, animales, clima)', example: "It's a big dog. It's raining.", translation: 'Es un perro grande. Está lloviendo.' },
          { step: 'We — 1st person plural', stepEs: 'We — 1ª persona plural', example: 'We are from Mexico.', translation: 'Somos de México.' },
          { step: 'They — 3rd person plural (people AND things)', stepEs: 'They — 3ª persona plural (personas Y cosas)', example: 'They are teachers. They are expensive.', translation: 'Son profesores. Son caros.' },
        ]
      }
    ],
    l1Contrast: {
      concept: '"You" covers tú/usted/vosotros/ustedes',
      conceptEs: '"You" cubre tú/usted/vosotros/ustedes',
      spanishBehavior: 'Spanish has separate forms: tú (informal singular), usted (formal singular), vosotros (informal plural, Spain), ustedes (formal plural / all plural in Latin America)',
      englishBehavior: '"You" is used for ALL of these — formal/informal, singular/plural. Context and tone convey formality.',
      contrastExamples: [
        { english: 'You are very kind, Dr. Smith.', spanish: 'Usted es muy amable, Dr. Smith.', note: '"You" is used formally.' },
        { english: 'Are you coming tonight? (to one friend)', spanish: '¿Vienes esta noche?', note: '"You" is also informal singular.' },
        { english: 'They (= things)', spanish: 'Ellos/Ellas', note: '"They" is used for things in English: "Where are my keys? They\'re on the table."' },
        { english: 'It (= animals, babies when gender unknown)', spanish: 'Él/Ella', note: 'Spanish assigns gender to animals; English uses "it" unless gender is known.' },
      ]
    },
    predictedErrors: [
      { error: 'Is a good movie. (no subject)', correction: "It's a good movie.", whyEs: '"It" es obligatorio para cosas, conceptos, clima, distancia y tiempo.', frequency: 'very common' },
      { error: 'My dog, he is big.', correction: 'My dog is big. / He is big.', whyEs: 'En inglés no se puede repetir el sujeto con un pronombre (excepto para énfasis muy formal).', frequency: 'common' },
      { error: 'The problems, they are difficult.', correction: 'The problems are difficult.', whyEs: 'No se duplica el sujeto sustantivo + pronombre en inglés estándar.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'My cat is black. _____ is very playful.', question: 'Which pronoun replaces "my cat"?', options: ['He', 'She', 'It', 'They'], correct: 2, explanationEs: 'Los animales (cuando no sabemos el género) usan "it".' },
        { sentence: 'María and I are ready. _____ can start now.', question: 'Which pronoun?', options: ['They', 'We', 'You', 'I'], correct: 1, explanationEs: 'María and I = We.' },
        { sentence: 'The weather is nice today. _____ is sunny and warm.', question: 'Which pronoun for weather?', options: ['He', 'She', 'It', 'They'], correct: 2, explanationEs: 'Clima, tiempo y fenómenos naturales usan "it".' },
        { sentence: 'My brother works in Madrid. _____ is a doctor.', question: 'Which pronoun replaces "my brother"?', options: ['She', 'He', 'It', 'They'], correct: 1, explanationEs: 'Brother = masculino → He.' },
        { sentence: 'The keys are on the table. Where are _____?', question: 'Which pronoun for "the keys"?', options: ['it', 'they', 'them', 'we'], correct: 1, explanationEs: 'Keys = plural things → They (sujeto).' },
      ],
      controlled: [
        { prompt: 'Replace with pronoun: "The book is interesting."', promptEs: 'Reemplaza con pronombre: "El libro es interesante."', answer: 'It is interesting.', hint: 'book = thing → ?' },
        { prompt: 'Replace with pronoun: "John and Mary are here."', promptEs: 'Reemplaza con pronombre: "John y Mary están aquí."', answer: 'They are here.', hint: 'John and Mary = plural people → ?' },
        { prompt: 'Complete: "_____ is 3 o\'clock. We need to leave."', promptEs: 'Completa: "_____ son las 3. Tenemos que irnos."', answer: "It's 3 o'clock.", hint: 'Hora y tiempo usan "it".' },
        { prompt: 'Replace with pronoun: "The hotel has a swimming pool."', promptEs: 'Reemplaza con pronombre: "El hotel tiene piscina."', answer: 'It has a swimming pool.', hint: 'Hotel = cosa → It' },
        { prompt: 'Complete: "Ana and you are late. _____ should hurry."', promptEs: 'Completa: "Ana y tú llegáis tarde. _____ deberíais daros prisa."', answer: 'You should hurry.', hint: 'Ana and you = you (2ª persona plural)' },
      ]
    },
    recycleInTopics: ['a1-present-simple', 'a1-verb-to-be', 'a2-past-simple'],
    tipEs: '💡 "IT" es el pronombre más olvidado por hispanohablantes. Úsalo para: cosas, animales (género desconocido), clima (it\'s raining), tiempo (it\'s 3 o\'clock), distancia (it\'s 5km).'
  },

  // ═══════════════════════════════════════════════
  // A1 — MODULE: Possessive Adjectives
  // ═══════════════════════════════════════════════
  {
    id: 'a1-possessive-adjectives',
    title: 'Possessive Adjectives',
    titleEs: 'Adjetivos Posesivos',
    level: 'A1',
    cefrLevel: 1,
    category: 'pronouns',
    priority: 'critical',
    prerequisiteIds: ['a1-subject-pronouns'],
    explanation: 'Possessive adjectives (my, your, his, her, its, our, their) show ownership or relationship. They ALWAYS come before the noun they describe. Unlike Spanish, English does not use articles with body parts when the owner is clear — we say "my head hurts" not "the head hurts me". Each possessive matches a subject pronoun: I→my, you→your, he→his, she→her, it→its, we→our, they→their.',
    explanationEs: 'Los adjetivos posesivos (my, your, his, her, its, our, their) muestran posesión o relación. SIEMPRE van antes del sustantivo que describen. A diferencia del español, el inglés no usa artículos con partes del cuerpo cuando el dueño está claro — decimos "my head hurts" (me duele la cabeza), no "the head hurts me". Cada posesivo corresponde a un pronombre sujeto: I→my, you→your, he→his, she→her, it→its, we→our, they→their.',
    formationRules: [
      {
        label: 'The 7 possessive adjectives',
        labelEs: 'Los 7 adjetivos posesivos',
        formula: 'Possessive + noun (always before the noun)',
        steps: [
          { step: 'my — belongs to I', stepEs: 'my — pertenece a yo', example: 'This is my book.', translation: 'Este es mi libro.' },
          { step: 'your — belongs to you', stepEs: 'your — pertenece a tú/usted/ustedes', example: 'Is this your bag?', translation: '¿Es tu bolso?' },
          { step: 'his — belongs to he', stepEs: 'his — pertenece a él', example: 'His car is red.', translation: 'Su coche (de él) es rojo.' },
          { step: 'her — belongs to she', stepEs: 'her — pertenece a ella', example: 'Her name is Maria.', translation: 'Su nombre (de ella) es María.' },
          { step: 'its — belongs to it', stepEs: 'its — pertenece a ello (cosa/animal)', example: 'The dog wagged its tail.', translation: 'El perro movió su cola.' },
          { step: 'our — belongs to we', stepEs: 'our — pertenece a nosotros', example: 'Our house is big.', translation: 'Nuestra casa es grande.' },
          { step: 'their — belongs to they', stepEs: 'their — pertenece a ellos', example: 'Their children are at school.', translation: 'Sus hijos están en el colegio.' },
        ]
      }
    ],
    l1Contrast: {
      concept: 'Spanish uses articles where English uses possessives',
      conceptEs: 'El español usa artículos donde el inglés usa posesivos',
      spanishBehavior: 'In Spanish we say "me duele la cabeza" (the head hurts me) — the article "la" is used with body parts. Spanish also uses "su" for his/her/its/their, causing ambiguity.',
      englishBehavior: 'English uses possessive adjectives with body parts: "my head hurts". We never say "the head hurts me". Each person has a distinct possessive: his vs her vs its vs their.',
      contrastExamples: [
        { english: 'My head hurts.', spanish: 'Me duele la cabeza.', note: 'English: possessive + body part. Spanish: article + body part.' },
        { english: 'She washed her hair.', spanish: 'Se lavó el pelo.', note: 'English needs "her" before hair. Spanish uses reflexive + article.' },
        { english: 'He broke his arm.', spanish: 'Se rompió el brazo.', note: 'English: his arm. Spanish: el brazo (with reflexive).' },
        { english: 'its vs it\'s', spanish: 'N/A', note: '"Its" = possessive (the dog and its tail). "It\'s" = it is. Never confuse them!' },
      ]
    },
    predictedErrors: [
      { error: 'She loves his mother. (when meaning her own)', correction: 'She loves her mother.', whyEs: 'Confusión his/her: "his" = de él, "her" = de ella. Con "she" el posesivo es "her".', frequency: 'very common' },
      { error: 'The head hurts.', correction: 'My head hurts.', whyEs: 'En español decimos "me duele la cabeza" con artículo. En inglés usamos posesivo: my head.', frequency: 'very common' },
      { error: "The dog wagged it's tail.", correction: "The dog wagged its tail.", whyEs: '"Its" (sin apóstrofo) = posesivo. "It\'s" = it is. El posesivo de "it" nunca lleva apóstrofo.', frequency: 'very common' },
      { error: 'I hurt the leg.', correction: 'I hurt my leg.', whyEs: 'Con partes del cuerpo, el inglés usa posesivo (my leg), no artículo (the leg).', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ name is John. (talking about a man)', question: 'Which possessive is correct?', options: ['Her', 'His', 'Its', 'Their'], correct: 1, explanationEs: 'John = he → his.' },
        { sentence: 'The cat is washing _____ paws.', question: 'Which possessive for an animal?', options: ["it's", 'its', 'his', 'her'], correct: 1, explanationEs: '"Its" (sin apóstrofo) = posesivo de it. "It\'s" = it is.' },
        { sentence: 'Maria and I live in _____ apartment.', question: 'Maria and I = we, so:', options: ['my', 'our', 'their', 'your'], correct: 1, explanationEs: 'Maria and I = we → our.' },
        { sentence: 'She loves _____ mother very much. (her own mother)', question: 'Which possessive?', options: ['his', 'her', 'its', 'their'], correct: 1, explanationEs: 'She → her. "His" sería de él.' },
        { sentence: '_____ head hurts. (you are speaking)', question: 'Complete with the correct possessive:', options: ['The', 'My', 'Your', 'His'], correct: 1, explanationEs: 'Si hablas de ti mismo: I → my. Nunca "the head" en este contexto.' },
        { sentence: 'The children are doing _____ homework.', question: 'Children = they, so:', options: ['his', 'her', 'its', 'their'], correct: 3, explanationEs: 'Children = they → their.' },
      ],
      controlled: [
        { prompt: 'Complete: This is _____ book. (you are talking about your book)', promptEs: 'Completa: Este es _____ libro. (hablas de tu libro)', answer: 'my', hint: 'I → ?' },
        { prompt: 'Complete: _____ car is blue. (talking about a woman\'s car)', promptEs: 'Completa: _____ coche es azul. (el coche de una mujer)', answer: 'Her', hint: 'She → ?' },
        { prompt: 'Correct: The dog wagged it\'s tail.', promptEs: 'Corrige: The dog wagged it\'s tail.', answer: "The dog wagged its tail.", hint: 'Posesivo de it = its (sin apóstrofo)' },
        { prompt: 'Translate: Me duele la cabeza.', promptEs: 'Traduce: Me duele la cabeza.', answer: 'My head hurts.', hint: 'Usa posesivo, no artículo' },
        { prompt: 'Complete: We love _____ country. (our country)', promptEs: 'Completa: Amamos _____ país. (nuestro país)', answer: 'our', hint: 'We → ?' },
        { prompt: 'Complete: The students are in _____ classroom.', promptEs: 'Completa: Los estudiantes están en _____ aula.', answer: 'their', hint: 'The students = they → ?' },
      ]
    },
    recycleInTopics: ['a1-present-simple', 'a2-past-simple'],
    tipEs: '💡 Regla de oro: el posesivo SIEMPRE va antes del sustantivo. Con partes del cuerpo (head, arm, leg, hair), usa SIEMPRE el posesivo en inglés: my head, her hair, his arm — nunca "the head" o "the hair" cuando el dueño está claro. Y recuerda: its (posesivo) ≠ it\'s (it is).'
  },

  // ═══════════════════════════════════════════════
  // A1 — MODULE: Object Pronouns
  // ═══════════════════════════════════════════════
  {
    id: 'a1-object-pronouns',
    title: 'Object Pronouns',
    titleEs: 'Pronombres Objeto',
    level: 'A1',
    cefrLevel: 1,
    category: 'pronouns',
    priority: 'high',
    prerequisiteIds: ['a1-subject-pronouns', 'a1-possessive-adjectives'],
    explanation: 'Object pronouns (me, you, him, her, it, us, them) replace the noun that receives the action. They go AFTER the verb or after a preposition. Unlike subject pronouns, they cannot be the subject of a sentence. The key rule: object pronouns always come after the verb or preposition, never before it.',
    explanationEs: 'Los pronombres objeto (me, you, him, her, it, us, them) reemplazan al sustantivo que recibe la acción. Van DESPUÉS del verbo o de una preposición. A diferencia de los pronombres sujeto, no pueden ser el sujeto de la oración. La regla clave: los pronombres objeto siempre van después del verbo o preposición, nunca antes.',
    formationRules: [
      {
        label: 'The 7 object pronouns',
        labelEs: 'Los 7 pronombres objeto',
        formula: 'Subject + verb + object pronoun | preposition + object pronoun',
        steps: [
          { step: 'me — object of I', stepEs: 'me — objeto de yo', example: 'She loves me. Call me later.', translation: 'Ella me ama. Llámame más tarde.' },
          { step: 'you — object of you', stepEs: 'you — objeto de tú/usted/ustedes', example: 'I need you. I\'ll help you.', translation: 'Te necesito. Te ayudaré.' },
          { step: 'him — object of he', stepEs: 'him — objeto de él', example: 'I saw him yesterday. Give it to him.', translation: 'Lo vi ayer. Dáselo a él.' },
          { step: 'her — object of she', stepEs: 'her — objeto de ella', example: 'I know her. I\'m waiting for her.', translation: 'La conozco. La estoy esperando.' },
          { step: 'it — object of it', stepEs: 'it — objeto de ello', example: 'I bought it. Look at it.', translation: 'Lo compré. Míralo.' },
          { step: 'us — object of we', stepEs: 'us — objeto de nosotros', example: 'They invited us. Come with us.', translation: 'Nos invitaron. Ven con nosotros.' },
          { step: 'them — object of they', stepEs: 'them — objeto de ellos', example: 'I met them. I gave it to them.', translation: 'Los conocí. Se lo di a ellos.' },
        ]
      },
      {
        label: 'Position: after verb or preposition',
        labelEs: 'Posición: después del verbo o preposición',
        steps: [
          { step: 'After verb: Subject + verb + object pronoun', stepEs: 'Después del verbo', example: 'She called me. He loves her. We need them.', translation: 'Ella me llamó. Él la ama. Los necesitamos.' },
          { step: 'After preposition: preposition + object pronoun', stepEs: 'Después de preposición', example: 'for me, to him, with us, about them', translation: 'para mí, a él, con nosotros, sobre ellos' },
        ]
      }
    ],
    l1Contrast: {
      concept: 'Spanish puts object pronouns before the verb; English puts them after',
      conceptEs: 'El español pone los pronombres objeto antes del verbo; el inglés los pone después',
      spanishBehavior: 'Spanish often puts object pronouns BEFORE the verb: "me gusta" (I like it), "te llamo" (I\'ll call you). Spanish has reflexive pronouns (me, te, se) that English doesn\'t use the same way.',
      englishBehavior: 'English object pronouns ALWAYS go after the verb or preposition: "I like it", "I\'ll call you". "Give it to me" — never "Give me it" when "it" is a pronoun (though "Give me the book" is fine).',
      contrastExamples: [
        { english: 'I like it.', spanish: 'Me gusta.', note: 'Spanish: "me" before "gusta". English: "it" after "like".' },
        { english: 'She gave the book to me.', spanish: 'Ella me dio el libro.', note: 'Spanish: "me" before verb. English: "to me" after the object.' },
        { english: 'Call me tomorrow.', spanish: 'Llámame mañana.', note: 'Both put pronoun after imperative — similar here.' },
        { english: 'I need him.', spanish: 'Lo necesito.', note: 'Spanish "lo" before verb. English "him" after "need".' },
      ]
    },
    predictedErrors: [
      { error: 'She gave to me the book.', correction: 'She gave me the book. / She gave the book to me.', whyEs: 'En inglés: "give + person + thing" o "give + thing + to + person". No "give to me the book".', frequency: 'very common' },
      { error: 'I saw he yesterday.', correction: 'I saw him yesterday.', whyEs: 'Después del verbo va el pronombre OBJETO (him), no el sujeto (he).', frequency: 'very common' },
      { error: 'Me like pizza.', correction: 'I like pizza.', whyEs: 'Interferencia del español "me gusta". En inglés el sujeto es "I", no "me". "Me" es objeto.', frequency: 'very common' },
      { error: 'She loves I.', correction: 'She loves me.', whyEs: 'Después de "loves" va el objeto: me, no I. I es sujeto.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She gave the present to _____.', question: 'Which object pronoun? (you are the receiver)', options: ['I', 'me', 'my', 'mine'], correct: 1, explanationEs: 'Objeto de la preposición "to" → me (no I).' },
        { sentence: 'I met _____ at the party. (talking about a man)', question: 'Which is correct?', options: ['he', 'him', 'his', 'her'], correct: 1, explanationEs: 'Objeto del verbo "met" → him.' },
        { sentence: 'Can you help _____? (asking for yourself)', question: 'Complete:', options: ['I', 'me', 'my', 'we'], correct: 1, explanationEs: 'Objeto de "help" → me.' },
        { sentence: 'They invited _____ to the wedding. (you and your family)', question: 'Which pronoun?', options: ['we', 'us', 'our', 'they'], correct: 1, explanationEs: 'We = nosotros, objeto → us.' },
        { sentence: 'I don\'t know _____. (talking about a woman)', question: 'Which object pronoun?', options: ['she', 'her', 'hers', 'they'], correct: 1, explanationEs: 'Objeto de "know" → her.' },
      ],
      controlled: [
        { prompt: 'Replace with pronoun: I saw John yesterday.', promptEs: 'Reemplaza con pronombre: Vi a John ayer.', answer: 'I saw him yesterday.', hint: 'John = he → objeto = ?' },
        { prompt: 'Complete: She gave the keys to _____. (you)', promptEs: 'Completa: Ella te dio las llaves.', answer: 'me', hint: 'you (receiver) → objeto = ?' },
        { prompt: 'Correct: I saw she at the cinema.', promptEs: 'Corrige: I saw she at the cinema.', answer: 'I saw her at the cinema.', hint: 'Después del verbo va pronombre objeto' },
        { prompt: 'Complete: Come with _____. (we)', promptEs: 'Completa: Ven con nosotros.', answer: 'us', hint: 'we → objeto = ?' },
        { prompt: 'Replace with pronoun: I need to talk to Maria.', promptEs: 'Reemplaza con pronombre: Necesito hablar con María.', answer: 'I need to talk to her.', hint: 'Maria = she → objeto = ?' },
      ]
    },
    recycleInTopics: ['a1-present-simple', 'a2-past-simple'],
    tipEs: '💡 Los pronombres objeto van SIEMPRE después del verbo o preposición. Si el pronombre hace la acción → sujeto (I, he, she). Si recibe la acción → objeto (me, him, her). "I saw him" = yo (sujeto) vi a él (objeto).'
  },

  // ═══════════════════════════════════════════════
  // A1 — MODULE 3: Present Simple
  // ═══════════════════════════════════════════════
  {
    id: 'a1-present-simple',
    title: 'Present Simple',
    titleEs: 'Presente Simple',
    level: 'A1',
    cefrLevel: 1,
    category: 'verbs',
    priority: 'critical',
    prerequisiteIds: ['a1-verb-to-be', 'a1-subject-pronouns'],
    explanation: 'The Present Simple is used for habits, routines, facts, and general truths. It is NOT used for things happening right now (use Present Continuous for that). The key rule: add -s or -es to the verb in the 3rd person singular (he/she/it).',
    explanationEs: 'El Presente Simple se usa para hábitos, rutinas, hechos y verdades generales. NO se usa para lo que está pasando ahora mismo (usa el Presente Continuo para eso). La regla clave: añade -s o -es al verbo en la 3ª persona del singular (he/she/it).',
    formationRules: [
      {
        label: 'Affirmative',
        labelEs: 'Afirmativo',
        formula: 'Subject + base verb (+ -s/-es for he/she/it)',
        steps: [
          { step: 'I/You/We/They + base verb', stepEs: 'Yo/Tú/Nosotros/Ellos + verbo base', example: 'I work at a hospital. They live in Madrid.', translation: 'Trabajo en un hospital. Viven en Madrid.' },
          { step: 'He/She/It + verb + -s', stepEs: 'He/She/It + verbo + -s', example: 'She works at a hospital.', translation: 'Ella trabaja en un hospital.' },
          { step: 'Spelling rules for -s: verbs ending in -ch, -sh, -ss, -x, -o → add -es', stepEs: 'Reglas ortográficas: verbos que terminan en -ch, -sh, -ss, -x, -o → añade -es', example: 'watch → watches, wash → washes, go → goes, do → does', translation: 'mira, lava, va, hace' },
          { step: 'Verbs ending in consonant + -y → change y to i and add -es', stepEs: 'Verbos que terminan en consonante + -y → cambia y a i y añade -es', example: 'study → studies, fly → flies, carry → carries', translation: 'estudia, vuela, carga' },
        ]
      },
      {
        label: 'Negative',
        labelEs: 'Negativo',
        formula: 'Subject + do not (don\'t) / does not (doesn\'t) + base verb',
        steps: [
          { step: 'I/You/We/They + don\'t + verb', stepEs: 'Yo/Tú/Nosotros/Ellos + don\'t + verbo', example: "I don't like coffee. They don't work on Sundays.", translation: 'No me gusta el café. No trabajan los domingos.' },
          { step: 'He/She/It + doesn\'t + verb (base form — NO -s!)', stepEs: 'He/She/It + doesn\'t + verbo (forma base — ¡SIN -s!)', example: "She doesn't like coffee.", translation: 'A ella no le gusta el café.' },
        ]
      },
      {
        label: 'Questions',
        labelEs: 'Preguntas',
        formula: 'Do/Does + Subject + base verb + ?',
        steps: [
          { step: 'Do + I/you/we/they + verb?', stepEs: 'Do + yo/tú/nosotros/ellos + verbo?', example: 'Do you speak English?', translation: '¿Hablas inglés?' },
          { step: 'Does + he/she/it + verb (base form — NO -s!)', stepEs: 'Does + él/ella/ello + verbo (forma base — ¡SIN -s!)', example: 'Does she speak Italian?', translation: '¿Habla ella italiano?' },
          { step: 'Short answers: Yes, I do. / No, I don\'t. / Yes, she does. / No, she doesn\'t.', stepEs: 'Respuestas cortas', example: 'Do you like pizza? — Yes, I do.', translation: '¿Te gusta la pizza? — Sí.' },
        ]
      }
    ],
    signalWords: [
      { word: 'always', meaning: 'every time, 100%', meaningEs: 'siempre' },
      { word: 'usually', meaning: 'most of the time, ~80%', meaningEs: 'normalmente, usualmente' },
      { word: 'often', meaning: 'frequently, ~60%', meaningEs: 'a menudo, frecuentemente' },
      { word: 'sometimes', meaning: 'occasionally, ~40%', meaningEs: 'a veces' },
      { word: 'rarely / seldom', meaning: 'not very often, ~20%', meaningEs: 'raramente, pocas veces' },
      { word: 'never', meaning: '0%', meaningEs: 'nunca' },
      { word: 'every day/week/year', meaning: 'regular frequency', meaningEs: 'cada día/semana/año' },
      { word: 'on Mondays', meaning: 'recurring day', meaningEs: 'los lunes (habitualmente)' },
    ],
    l1Contrast: {
      concept: 'The 3rd person -s is unique to English',
      conceptEs: 'La -s de 3ª persona es única del inglés',
      spanishBehavior: 'Spanish conjugates all persons differently: hablo, hablas, habla, hablamos, habláis, hablan',
      englishBehavior: 'English only changes in 3rd person singular: I work, you work, he/she WORKS — the -s is tiny but critical!',
      contrastExamples: [
        { english: 'He works every day.', spanish: 'Trabaja todos los días.', note: 'The -s on "works" is mandatory.' },
        { english: "She doesn't work on Sundays.", spanish: 'No trabaja los domingos.', note: 'After doesn\'t, use BASE form (no -s): "doesn\'t work" NOT "doesn\'t works".' },
        { english: 'Does he speak French?', spanish: '¿Habla francés?', note: 'DO/DOES acts as the auxiliary — the main verb stays in base form.' },
      ]
    },
    predictedErrors: [
      { error: 'She work every day.', correction: 'She works every day.', whyEs: 'El estudiante olvida la -s de 3ª persona singular.', frequency: 'very common' },
      { error: "She doesn't works here.", correction: "She doesn't work here.", whyEs: 'Después de doesn\'t el verbo va en forma base (sin -s). La -s ya está en "doesn\'t".', frequency: 'very common' },
      { error: 'Does she speaks English?', correction: 'Does she speak English?', whyEs: 'Does ya hace la función de 3ª persona. El verbo principal va en forma base.', frequency: 'very common' },
      { error: 'I am like coffee.', correction: 'I like coffee.', whyEs: 'Interferencia del español: "Yo estoy gustar" no existe. Los verbos de estado (like, love, know, understand) van en Present Simple, no Continuous.', frequency: 'common' },
      { error: 'He no likes pizza.', correction: "He doesn't like pizza.", whyEs: 'La negación en inglés usa el auxiliar DO/DOES, no el adverbio "no" directamente.', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'My brother _____ in London.', question: 'Which is correct?', options: ['live', 'lives', 'is live', 'does live'], correct: 1, explanationEs: '"My brother" = 3ª persona singular → necesita -s.' },
        { sentence: 'She _____ like vegetables.', question: 'Complete the negative:', options: ["don't", "doesn't", "isn't", "not"], correct: 1, explanationEs: 'He/She/It → doesn\'t (not don\'t).' },
        { sentence: '_____ your parents speak English?', question: 'Which auxiliary?', options: ['Do', 'Does', 'Are', 'Is'], correct: 0, explanationEs: '"Your parents" = they = plural → DO.' },
        { sentence: 'The shop _____ at 9 o\'clock every morning.', question: 'Which is correct?', options: ['open', 'opens', 'is open', 'does opens'], correct: 1, explanationEs: '"The shop" = it = 3ª persona singular → opens.' },
        { sentence: 'Maria _____ coffee, she prefers tea.', question: 'Complete the negative:', options: ["don't drink", "doesn't drink", "doesn't drinks", "isn't drink"], correct: 1, explanationEs: 'Maria = she → doesn\'t + forma base "drink".' },
        { sentence: 'Where _____ your best friend _____?', question: 'Complete the question:', options: ['do / lives', 'does / live', 'does / lives', 'is / live'], correct: 1, explanationEs: '"Your best friend" = he/she → Does + forma base "live".' },
        { sentence: 'My parents _____ (go) to church every Sunday.', question: 'Which form is correct?', options: ['goes', 'go', 'does go', 'going'], correct: 1, explanationEs: '"My parents" = they = plural → forma base "go" sin -s.' },
        { sentence: 'He _____ (fly) to New York twice a year.', question: 'Which is correct?', options: ['flys', 'flies', 'flyes', 'fly'], correct: 1, explanationEs: 'Fly → consonante + y → flies (cambia y a i, añade -es).' },
      ],
      controlled: [
        { prompt: 'Write the 3rd person: study', promptEs: 'Escribe la 3ª persona: study', answer: 'studies', hint: 'consonant + y → ?' },
        { prompt: 'Make negative: He watches TV every night.', promptEs: 'Haz negativo: Él ve la tele cada noche.', answer: "He doesn't watch TV every night.", hint: "doesn't + base form" },
        { prompt: 'Make question: She plays the guitar.', promptEs: 'Haz pregunta: Ella toca la guitarra.', answer: 'Does she play the guitar?', hint: 'Does + subject + base verb?' },
        { prompt: 'Write the 3rd person: wash', promptEs: 'Escribe la 3ª persona: wash', answer: 'washes', hint: '-sh → add -es' },
        { prompt: 'Make negative: They live in Barcelona.', promptEs: 'Haz negativo: Ellos viven en Barcelona.', answer: "They don't live in Barcelona.", hint: "They = don't + base form" },
        { prompt: 'Make question: You drink coffee in the morning.', promptEs: 'Haz pregunta: Tú bebes café por la mañana.', answer: 'Do you drink coffee in the morning?', hint: 'Do + you + base verb?' },
        { prompt: 'Write the 3rd person: go', promptEs: 'Escribe la 3ª persona: go', answer: 'goes', hint: '-o → add -es' },
        { prompt: 'Correct this: Does she likes chocolate?', promptEs: 'Corrige esto: Does she likes chocolate?', answer: 'Does she like chocolate?', hint: 'After DOES, base form (no -s)' },
      ]
    },
    recycleInTopics: ['a2-present-continuous', 'a2-present-simple-vs-continuous', 'b1-present-perfect'],
    tipEs: '💡 Regla de oro: si el sujeto del verbo es HE, SHE o IT, añade -S al verbo en afirmativo. En negativo y preguntas, usa DOES y el verbo vuelve a la forma base.'
  },

  // ═══════════════════════════════════════════════
  // A1 — MODULE 4: Articles A / An / The / Zero Article
  // ═══════════════════════════════════════════════
  {
    id: 'a1-articles',
    title: 'Articles: A, An, The and Zero Article',
    titleEs: 'Artículos: A, An, The y Artículo Cero',
    level: 'A1',
    cefrLevel: 1,
    category: 'articles',
    priority: 'critical',
    prerequisiteIds: ['a1-subject-pronouns'],
    explanation: 'English has three article situations: A/An (indefinite — any one of many), The (definite — a specific one both parties know), and Zero Article (no article — used with uncountable nouns, proper names, and generalizations).',
    explanationEs: 'El inglés tiene tres situaciones de artículo: A/An (indefinido — cualquiera de muchos), The (definido — uno específico que ambas partes conocen) y Artículo Cero (sin artículo — usado con sustantivos incontables, nombres propios y generalizaciones).',
    formationRules: [
      {
        label: 'A / An — Indefinite Article',
        labelEs: 'A / An — Artículo Indefinido',
        formula: 'A + consonant sound | An + vowel sound',
        steps: [
          { step: 'Use A before consonant SOUNDS', stepEs: 'Usa A antes de SONIDOS consonánticos', example: 'a book, a car, a university (/ju/), a European', translation: 'un libro, un carro, una universidad, un europeo' },
          { step: 'Use An before vowel SOUNDS', stepEs: 'Usa An antes de SONIDOS vocálicos', example: 'an apple, an hour (silent h), an MBA (/em/)', translation: 'una manzana, una hora, un MBA' },
          { step: 'Use A/An with singular countable nouns only', stepEs: 'Usa A/An solo con sustantivos contables singulares', example: "She's a doctor. It's an interesting idea.", translation: 'Ella es médica. Es una idea interesante.' },
        ]
      },
      {
        label: 'The — Definite Article',
        labelEs: 'The — Artículo Definido',
        steps: [
          { step: 'Use The when both parties know which one (mentioned before)', stepEs: 'Usa The cuando ambas partes saben cuál es (mencionado antes)', example: 'I bought a car. The car is red.', translation: 'Compré un coche. El coche es rojo.' },
          { step: 'Use The when there is only one', stepEs: 'Usa The cuando solo hay uno', example: 'the sun, the moon, the president, the internet', translation: 'el sol, la luna, el presidente, el internet' },
          { step: 'Use The with superlatives and ordinals', stepEs: 'Usa The con superlativos y ordinales', example: "the best, the first, the tallest building", translation: 'el mejor, el primero, el edificio más alto' },
          { step: 'Use The with unique things you can point to', stepEs: 'Usa The con cosas únicas que puedes señalar', example: "Can you open the door? Pass me the salt.", translation: '¿Puedes abrir la puerta? Pásame la sal.' },
        ]
      },
      {
        label: 'Zero Article (no article)',
        labelEs: 'Artículo Cero (sin artículo)',
        steps: [
          { step: 'No article with plural nouns for generalizations', stepEs: 'Sin artículo con sustantivos plurales para generalizaciones', example: 'Dogs are intelligent. (all dogs in general)', translation: 'Los perros son inteligentes. (todos los perros en general)' },
          { step: 'No article with uncountable nouns for generalizations', stepEs: 'Sin artículo con sustantivos incontables para generalizaciones', example: 'Water is essential. I love music.', translation: 'El agua es esencial. Me encanta la música.' },
          { step: 'No article with most proper nouns (names, countries, cities)', stepEs: 'Sin artículo con la mayoría de nombres propios', example: 'Spain is beautiful. I live in London. Her name is Ana.', translation: 'España es hermosa. Vivo en Londres. Se llama Ana.' },
          { step: 'No article with meals, languages, sports, school subjects', stepEs: 'Sin artículo con comidas, idiomas, deportes, asignaturas escolares', example: 'I had breakfast. She speaks French. He plays tennis.', translation: 'Desayuné. Habla francés. Juega al tenis.' },
        ]
      }
    ],
    l1Contrast: {
      concept: 'Spanish uses articles where English does not — especially with generalizations',
      conceptEs: 'El español usa artículos donde el inglés no — especialmente con generalizaciones',
      spanishBehavior: 'Spanish uses definite articles with generalizations: "Los perros son inteligentes", "El agua es esencial", "Me gusta la música"',
      englishBehavior: 'English drops the article for generalizations: "Dogs are intelligent", "Water is essential", "I love music"',
      contrastExamples: [
        { english: 'I love music. (not "the music")', spanish: 'Me encanta la música.', note: 'Generalization: no article in English.' },
        { english: 'Dogs are loyal. (not "the dogs")', spanish: 'Los perros son leales.', note: 'All dogs in general: zero article.' },
        { english: "Life is short. (not 'the life')", spanish: 'La vida es corta.', note: 'Abstract generalizations: no article.' },
        { english: "She's a doctor. (not 'She's doctor')", spanish: 'Es médica. (no artículo en español)', note: 'English DOES use article with professions; Spanish does NOT.' },
      ]
    },
    predictedErrors: [
      { error: 'The life is short.', correction: 'Life is short.', whyEs: 'En español "la vida es corta" lleva artículo. En inglés las generalizaciones abstractas no llevan artículo.', frequency: 'very common' },
      { error: 'I love the music.', correction: 'I love music. (general) / I love the music. (specific music)', whyEs: '"I love the music" implica una música específica. Para decir que te gusta en general, no lleva artículo.', frequency: 'very common' },
      { error: "She's doctor.", correction: "She's a doctor.", whyEs: 'En inglés siempre se usa A/An antes de profesiones. En español no se usa artículo.', frequency: 'very common' },
      { error: 'I have a umbrella.', correction: 'I have an umbrella.', whyEs: '"Umbrella" empieza por sonido vocálico /ʌ/, así que se usa "an".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ apple a day keeps the doctor away.', question: 'Which article?', options: ['A', 'An', 'The', '(no article)'], correct: 1, explanationEs: '"Apple" empieza por sonido vocálico → An.' },
        { sentence: 'I love _____ dogs.', question: 'Generalización sobre todos los perros:', options: ['a', 'the', '(no article)', 'an'], correct: 2, explanationEs: 'Generalización con plural → artículo cero.' },
        { sentence: 'Can you close _____ window, please?', question: 'Ambos saben qué ventana es (hay una en la habitación):', options: ['a', 'an', 'the', '(no article)'], correct: 2, explanationEs: 'The → specific window both people know about.' },
        { sentence: 'I need _____ hour to finish this report.', question: 'Which article before "hour"?', options: ['a', 'an', 'the', '(no article)'], correct: 1, explanationEs: '"Hour" tiene h muda → sonido vocálico → An.' },
        { sentence: '_____ life is beautiful when you travel.', question: 'Generalización abstracta:', options: ['A', 'The', '(no article)', 'An'], correct: 2, explanationEs: 'Generalización sobre "life" → artículo cero. Error común: "The life".' },
      ],
      controlled: [
        { prompt: 'Add correct article or write "—" for zero: ___ water is good for you.', promptEs: 'Añade el artículo correcto o escribe "—" para artículo cero: ___ agua es buena para ti.', answer: '— (no article)', hint: 'Generalization + uncountable → ?' },
        { prompt: 'Correct this: She is nurse.', promptEs: 'Corrige esto: She is nurse.', answer: 'She is a nurse.', hint: 'Professions need a/an.' },
        { prompt: 'Complete: "I had _____ breakfast at 8."', promptEs: 'Completa: "Tomé _____ desayuno a las 8."', answer: '— (no article)', hint: 'Meals (breakfast, lunch, dinner) = zero article' },
        { prompt: 'Correct: I have a umbrella in my car.', promptEs: 'Corrige: Tengo un paraguas en mi coche.', answer: 'I have an umbrella in my car.', hint: 'Umbrella = sonido vocálico /ʌ/' },
        { prompt: 'Complete: "_____ information you gave me was very useful."', promptEs: 'Completa: "_____ información que me diste fue muy útil."', answer: 'The information', hint: 'Información específica (la que diste) → The' },
      ]
    },
    recycleInTopics: ['a2-countable-uncountable', 'b1-relative-clauses', 'b2-advanced-articles'],
    tipEs: '💡 Regla práctica: ¿Primera mención? → A/AN. ¿Ya mencionado o único? → THE. ¿General/abstracto/nombre propio? → sin artículo. La pregunta clave es: ¿saben ambos de QUÉ concreto estamos hablando?'
  },

  // ═══════════════════════════════════════════════
  // A1 — MODULE 5: There is / There are
  // ═══════════════════════════════════════════════
  {
    id: 'a1-there-is-are',
    title: 'There is / There are',
    titleEs: 'There is / There are (hay)',
    level: 'A1',
    cefrLevel: 1,
    category: 'sentences',
    priority: 'high',
    prerequisiteIds: ['a1-verb-to-be', 'a1-articles'],
    explanation: '"There is" and "There are" are used to say that something exists or is present in a place. This structure is translated as "hay" in Spanish — a single word for both singular and plural.',
    explanationEs: '"There is" y "There are" se usan para decir que algo existe o está presente en un lugar. Esta estructura se traduce como "hay" en español — una sola palabra para singular y plural.',
    formationRules: [
      {
        label: 'Basic forms',
        labelEs: 'Formas básicas',
        formula: 'There is + singular noun | There are + plural noun',
        steps: [
          { step: "There is (there's) + a/an/one + singular noun", stepEs: "There is (there's) + a/an/one + sustantivo singular", example: "There's a cat in the garden.", translation: 'Hay un gato en el jardín.' },
          { step: "There are + number/some/plural noun", stepEs: "There are + número/some + sustantivo plural", example: 'There are three books on the table.', translation: 'Hay tres libros en la mesa.' },
          { step: 'Negative: There isn\'t / There aren\'t', stepEs: 'Negativo: There isn\'t / There aren\'t', example: "There isn't any milk. There aren't any students.", translation: 'No hay leche. No hay estudiantes.' },
          { step: 'Question: Is there...? / Are there...?', stepEs: 'Pregunta: Is there...? / Are there...?', example: 'Is there a bank near here? Are there any seats?', translation: '¿Hay un banco cerca? ¿Hay asientos?' },
        ]
      },
      {
        label: 'Some / Any with there is/are',
        labelEs: 'Some / Any con there is/are',
        steps: [
          { step: 'Use SOME in affirmative sentences', stepEs: 'Usa SOME en oraciones afirmativas', example: 'There are some apples in the fridge.', translation: 'Hay algunas manzanas en la nevera.' },
          { step: 'Use ANY in negatives and questions', stepEs: 'Usa ANY en negativos y preguntas', example: "There aren't any eggs. Are there any tickets?", translation: 'No hay huevos. ¿Hay entradas?' },
        ]
      }
    ],
    l1Contrast: {
      concept: '"Hay" = there is AND there are',
      conceptEs: '"Hay" = there is Y there are',
      spanishBehavior: '"Hay" works for both singular and plural: "Hay un libro", "Hay libros"',
      englishBehavior: 'English distinguishes: "There IS a book" (singular) vs "There ARE books" (plural)',
      contrastExamples: [
        { english: 'There is a problem.', spanish: 'Hay un problema.', note: 'Singular → There IS.' },
        { english: 'There are many problems.', spanish: 'Hay muchos problemas.', note: 'Plural → There ARE.' },
        { english: "There isn't any coffee.", spanish: 'No hay café.', note: 'Uncountable → There isn\'t (singular).' },
      ]
    },
    predictedErrors: [
      { error: 'There are a cat.', correction: 'There is a cat.', whyEs: '"A cat" es singular → There IS.', frequency: 'very common' },
      { error: 'Is a bank near here?', correction: 'Is there a bank near here?', whyEs: 'La estructura requiere "there" — no se puede omitir.', frequency: 'very common' },
      { error: 'There is many students.', correction: 'There are many students.', whyEs: '"Many students" es plural → There ARE.', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ a pharmacy near here?', question: 'Which is correct?', options: ['Is there', 'Are there', 'There is', 'Has there'], correct: 0, explanationEs: 'Pregunta con sustantivo singular → Is there?' },
        { sentence: 'There _____ some eggs in the fridge.', question: 'is or are?', options: ['is', 'are', "isn't", "aren't"], correct: 1, explanationEs: '"Eggs" es plural → There ARE.' },
        { sentence: 'There _____ a problem with the computer.', question: 'Singular noun — which verb?', options: ['are', 'is', 'have', 'has'], correct: 1, explanationEs: '"A problem" es singular → There IS. Error común en español: "hay un problema" se traduce con "is".' },
        { sentence: '_____ any milk left?', question: 'Question with uncountable noun:', options: ['Is there', 'Are there', 'There is', 'Has there'], correct: 0, explanationEs: 'Pregunta con sustantivo incontable (milk) → Is there.' },
        { sentence: 'There _____ many students in the classroom today.', question: 'Plural noun — correct form:', options: ['is', 'are', "isn't", "aren't"], correct: 1, explanationEs: '"Many students" es plural → There ARE. Error común: "There is many" (incorrecto).' },
      ],
      controlled: [
        { prompt: 'Say there is a big supermarket in your town.', promptEs: 'Di que hay un gran supermercado en tu ciudad.', answer: 'There is a big supermarket in my town.', hint: 'There + is/are + a/an...' },
        { prompt: 'Make negative: There are some chairs.', promptEs: 'Haz negativo: Hay algunas sillas.', answer: "There aren't any chairs.", hint: "some → any in negatives" },
        { prompt: 'Ask: "¿Hay un banco cerca?"', promptEs: 'Pregunta: ¿Hay un banco cerca?', answer: 'Is there a bank near here?', hint: 'Question + singular → Is there...?' },
        { prompt: 'Complete: "_____ three apples on the table."', promptEs: 'Completa: Hay tres manzanas en la mesa.', answer: 'There are three apples on the table.', hint: 'Plural noun → There are' },
        { prompt: 'Make negative: There is some coffee.', promptEs: 'Haz negativo: Hay café.', answer: "There isn't any coffee.", hint: 'Uncountable → There isn\'t; some → any' },
      ]
    },
    recycleInTopics: ['a2-there-was-were', 'b1-passive-voice'],
    tipEs: '💡 ¿Cómo recordar is/are? Busca el sustantivo que viene después: si es singular → IS. Si es plural → ARE. "There\'s" (contracción) solo se usa con singular.'
  },

  // ═══════════════════════════════════════════════
  // A1 — MODULE 6: Plurals
  // ═══════════════════════════════════════════════
  {
    id: 'a1-plurals',
    title: 'Plural Nouns',
    titleEs: 'Sustantivos en Plural',
    level: 'A1',
    cefrLevel: 1,
    category: 'nouns',
    priority: 'high',
    prerequisiteIds: ['a1-articles'],
    explanation: 'Most English nouns form their plural by adding -s or -es. However, some nouns are irregular. Unlike Spanish, nouns in English do NOT change for gender — there is only one plural form.',
    explanationEs: 'La mayoría de los sustantivos ingleses forman su plural añadiendo -s o -es. Sin embargo, algunos sustantivos son irregulares. A diferencia del español, los sustantivos en inglés NO cambian por género — solo hay una forma de plural.',
    formationRules: [
      {
        label: 'Regular plurals',
        labelEs: 'Plurales regulares',
        steps: [
          { step: 'Most nouns: add -s', stepEs: 'La mayoría: añade -s', example: 'book → books, car → cars, dog → dogs', translation: 'libro → libros, coche → coches, perro → perros' },
          { step: 'Nouns ending in -s, -ss, -sh, -ch, -x, -z: add -es', stepEs: 'Terminados en -s, -ss, -sh, -ch, -x, -z: añade -es', example: 'bus → buses, box → boxes, watch → watches, dish → dishes', translation: 'autobús → autobuses, caja → cajas, reloj → relojes, plato → platos' },
          { step: 'Nouns ending in consonant + -y: change y → i and add -es', stepEs: 'Terminados en consonante + -y: cambia y → i y añade -es', example: 'city → cities, baby → babies, party → parties', translation: 'ciudad → ciudades, bebé → bebés, fiesta → fiestas' },
          { step: 'Nouns ending in vowel + -y: just add -s', stepEs: 'Terminados en vocal + -y: solo añade -s', example: 'day → days, key → keys, boy → boys', translation: 'día → días, llave → llaves, niño → niños' },
          { step: 'Nouns ending in -f or -fe: change f → v and add -es', stepEs: 'Terminados en -f o -fe: cambia f → v y añade -es', example: 'leaf → leaves, knife → knives, wife → wives (BUT: roof → roofs)', translation: 'hoja → hojas, cuchillo → cuchillos, esposa → esposas' },
        ]
      },
      {
        label: 'Irregular plurals',
        labelEs: 'Plurales irregulares',
        steps: [
          { step: 'Vowel change', stepEs: 'Cambio de vocal', example: 'man → men, woman → women, foot → feet, tooth → teeth, goose → geese', translation: 'hombre → hombres, mujer → mujeres, pie → pies, diente → dientes, ganso → gansos' },
          { step: 'Completely different', stepEs: 'Completamente diferente', example: 'child → children, person → people, mouse → mice, ox → oxen', translation: 'niño → niños, persona → personas, ratón → ratones, buey → bueyes' },
          { step: 'Same singular and plural (zero plural)', stepEs: 'Igual en singular y plural (plural cero)', example: 'sheep → sheep, fish → fish, deer → deer, species → species', translation: 'oveja/ovejas, pez/peces, ciervo/ciervos, especie/especies' },
        ]
      }
    ],
    l1Contrast: {
      concept: 'No gender agreement in English plurals',
      conceptEs: 'Sin concordancia de género en los plurales ingleses',
      spanishBehavior: 'Spanish adjectives agree in gender and number: "los coches rojos", "las casas rojas"',
      englishBehavior: 'English adjectives NEVER change: "the red cars", "the red houses" — same form always',
      contrastExamples: [
        { english: 'big houses, big cars, big dogs', spanish: 'casas grandes, coches grandes, perros grandes', note: '"big" never changes in English.' },
        { english: 'children (not "childs")', spanish: 'niños/niñas', note: 'Completely irregular — must memorize.' },
        { english: 'people (not "peoples" for individuals)', spanish: 'personas / gente', note: '"People" is already plural. "Peoples" means ethnic groups.' },
      ]
    },
    predictedErrors: [
      { error: 'childs', correction: 'children', whyEs: 'Irregular — debe memorizarse.', frequency: 'very common' },
      { error: 'womans', correction: 'women', whyEs: 'Irregular — cambio de vocal: woman → women.', frequency: 'very common' },
      { error: 'informations', correction: 'information (uncountable)', whyEs: '"Information" es incontable en inglés y no tiene plural.', frequency: 'very common' },
      { error: 'advices', correction: 'advice (uncountable) / pieces of advice', whyEs: '"Advice" es incontable. Para contar: "two pieces of advice".', frequency: 'common' },
      { error: 'furnitures', correction: 'furniture (uncountable) / pieces of furniture', whyEs: '"Furniture" es incontable en inglés.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'There are three _____ in the garden.', question: 'Plural of "child":', options: ['childs', 'children', 'childrens', 'child'], correct: 1, explanationEs: 'Irregular: child → children.' },
        { sentence: 'She gave me some _____. (advice)', question: 'Which is correct?', options: ['advices', 'advices', 'advice', 'an advice'], correct: 2, explanationEs: '"Advice" es incontable — no tiene plural.' },
        { sentence: 'I need to buy new _____ for the office. (shelf)', question: 'Plural of shelf:', options: ['shelfs', 'shelves', 'shelfes', 'shelf'], correct: 1, explanationEs: 'f → v + es: shelf → shelves.' },
        { sentence: 'There are five _____ in the meeting room. (person)', question: 'Plural of person:', options: ['persons', 'people', 'peoples', 'person'], correct: 1, explanationEs: 'Person → people (irregular). "Peoples" = grupos étnicos.' },
        { sentence: 'The hotel has two _____ and three _____. (key, box)', question: 'Correct plurals:', options: ['keys / boxs', 'keys / boxes', 'keies / boxes', 'keyes / boxies'], correct: 1, explanationEs: 'key + s; box + es (termina en x).' },
      ],
      controlled: [
        { prompt: 'Write the plural: tooth', promptEs: 'Escribe el plural: tooth', answer: 'teeth', hint: 'Vowel change irregular' },
        { prompt: 'Write the plural: city', promptEs: 'Escribe el plural: city', answer: 'cities', hint: 'consonant + y → ?' },
        { prompt: 'Write the plural: knife', promptEs: 'Escribe el plural: knife', answer: 'knives', hint: 'f → v + es' },
        { prompt: 'Complete: "I have three _____ (baby) and two _____ (child)."', promptEs: 'Completa con los plurales correctos.', answer: 'babies / children', hint: 'baby → babies (y→i+es); child → children (irregular)' },
        { prompt: 'Write the plural: woman', promptEs: 'Escribe el plural: woman', answer: 'women', hint: 'Irregular: cambio de vocal (no womans)' },
      ]
    },
    recycleInTopics: ['a1-articles', 'a2-countable-uncountable', 'a1-there-is-are'],
    tipEs: '💡 Lista de incontables más importantes que causan errores: information, advice, furniture, equipment, luggage, money, news, homework, research, work, traffic, weather, bread, water, rice, hair. ¡Ninguno lleva plural!'
  },

  // ═══════════════════════════════════════════════
  // A2 — MODULE 1: Present Continuous
  // ═══════════════════════════════════════════════
  {
    id: 'a2-present-continuous',
    title: 'Present Continuous',
    titleEs: 'Presente Continuo (Progresivo)',
    level: 'A2',
    cefrLevel: 2,
    category: 'verbs',
    priority: 'critical',
    prerequisiteIds: ['a1-present-simple', 'a1-verb-to-be'],
    explanation: 'The Present Continuous is used for actions happening RIGHT NOW at the moment of speaking, temporary situations, and planned future arrangements. It is formed with TO BE + verb-ing.',
    explanationEs: 'El Presente Continuo se usa para acciones que suceden AHORA MISMO en el momento de hablar, situaciones temporales y planes futuros. Se forma con TO BE + verbo-ing.',
    formationRules: [
      {
        label: 'Formation',
        labelEs: 'Formación',
        formula: 'Subject + am/is/are + verb-ing',
        steps: [
          { step: 'Affirmative: Subject + is/am/are + verb-ing', stepEs: 'Afirmativo: Sujeto + is/am/are + verbo-ing', example: "I'm studying right now. She's working late.", translation: 'Estoy estudiando ahora mismo. Ella está trabajando hasta tarde.' },
          { step: 'Negative: Subject + is/am/are + not + verb-ing', stepEs: 'Negativo', example: "It isn't raining. They aren't watching TV.", translation: 'No está lloviendo. No están viendo la tele.' },
          { step: 'Question: Is/Am/Are + Subject + verb-ing?', stepEs: 'Pregunta', example: 'Are you listening? Is he coming?', translation: '¿Estás escuchando? ¿Viene él?' },
        ]
      },
      {
        label: 'Spelling rules for -ing',
        labelEs: 'Reglas ortográficas para -ing',
        steps: [
          { step: 'Most verbs: just add -ing', stepEs: 'La mayoría: solo añade -ing', example: 'work → working, read → reading, play → playing', translation: 'trabajar → trabajando, leer → leyendo, jugar → jugando' },
          { step: 'Verbs ending in silent -e: drop the -e and add -ing', stepEs: 'Verbos terminados en -e muda: quita la -e y añade -ing', example: 'make → making, write → writing, live → living', translation: 'hacer → haciendo, escribir → escribiendo, vivir → viviendo' },
          { step: 'Short verbs ending in consonant-vowel-consonant: double the final consonant', stepEs: 'Verbos cortos terminados en consonante-vocal-consonante: dobla la consonante final', example: 'run → running, sit → sitting, swim → swimming, stop → stopping', translation: 'correr → corriendo, sentarse → sentándose, nadar → nadando, parar → parando' },
          { step: 'Exception: do NOT double w, x, y', stepEs: 'Excepción: NO dobles w, x, y', example: 'fix → fixing (not fixxing), row → rowing', translation: 'arreglar → arreglando, remar → remando' },
        ]
      },
      {
        label: 'Stative verbs (CANNOT use -ing)',
        labelEs: 'Verbos de estado (NO se pueden usar con -ing)',
        steps: [
          { step: 'Mental/Perception: know, understand, believe, think (opinion), see, hear, smell, taste, feel', stepEs: 'Mental/Percepción', example: "I know the answer. (NOT I'm knowing)", translation: 'Sé la respuesta. (NO Estoy sabiendo)' },
          { step: 'Emotion/Desire: love, hate, like, want, need, prefer, wish', stepEs: 'Emoción/Deseo', example: "She loves coffee. (NOT She's loving coffee)", translation: 'Ella ama el café. (NO Ella está amando el café)' },
          { step: 'Possession: have (possession), own, belong, contain', stepEs: 'Posesión', example: "He has a car. (NOT He's having a car)", translation: 'Él tiene un coche. (NO Él está teniendo un coche)' },
        ]
      }
    ],
    signalWords: [
      { word: 'right now', meaning: 'at this exact moment', meaningEs: 'ahora mismo' },
      { word: 'at the moment', meaning: 'currently', meaningEs: 'en este momento' },
      { word: 'currently', meaning: 'at this time', meaningEs: 'actualmente, en este momento' },
      { word: 'Look! Listen!', meaning: 'signals something happening now', meaningEs: 'señala algo que pasa ahora' },
      { word: 'today / this week', meaning: 'temporary (not a habit)', meaningEs: 'hoy / esta semana (temporal)' },
      { word: 'tonight / tomorrow', meaning: 'planned arrangement', meaningEs: 'esta noche / mañana (plan)' },
    ],
    l1Contrast: {
      concept: "Spanish uses present tense where English requires continuous",
      conceptEs: 'El español usa el presente donde el inglés requiere el continuo',
      spanishBehavior: 'Spanish present tense covers both habits AND current actions: "Trabajo" = both "I work" and "I am working"',
      englishBehavior: 'English has separate tenses: "I work" (habit) vs "I\'m working" (right now)',
      contrastExamples: [
        { english: "I'm reading a book right now.", spanish: 'Estoy leyendo un libro / Leo un libro ahora mismo.', note: 'English must use continuous for current action.' },
        { english: "I'm living in Paris this year. (temporary)", spanish: 'Este año vivo en París.', note: 'Temporary situation → continuous in English.' },
        { english: "I know the answer. (NOT I'm knowing)", spanish: 'Sé la respuesta.', note: 'Stative verb — no continuous form.' },
      ]
    },
    predictedErrors: [
      { error: "I am knowing the answer.", correction: "I know the answer.", whyEs: '"Know" es un verbo de estado — nunca se usa en continuo.', frequency: 'very common' },
      { error: "She is liking chocolate.", correction: "She likes chocolate.", whyEs: '"Like" es un verbo de estado/emoción — solo se usa en simple.', frequency: 'very common' },
      { error: "He is working since 8am.", correction: "He has been working since 8am.", whyEs: 'Para expresar una acción que empezó en el pasado y continúa, se usa el Present Perfect Continuous.', frequency: 'common' },
      { error: "writting, runing, makeing", correction: "writing, running, making", whyEs: 'Reglas ortográficas: dobla la consonante final en CVC; quita la -e muda antes de -ing.', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She _____ (work) in the garden at the moment.', question: 'Present Continuous:', options: ['works', 'is working', 'working', 'work'], correct: 1, explanationEs: '"At the moment" → Present Continuous: is + working.' },
        { sentence: 'I _____ (know) the answer.', question: 'But "know" is a stative verb:', options: ["I'm knowing", 'I know', 'I am knowing', 'I knowing'], correct: 1, explanationEs: '"Know" es estativo — usa Present Simple.' },
        { sentence: 'Look! The children _____ (play) in the park.', question: 'Action happening now:', options: ['play', 'are playing', 'plays', 'playing'], correct: 1, explanationEs: '"Look!" señala algo que pasa ahora → Present Continuous.' },
        { sentence: 'We _____ (fly) to Barcelona next Tuesday. The tickets are booked.', question: 'Future arrangement:', options: ['fly', 'are flying', 'will fly', 'flying'], correct: 1, explanationEs: 'Plan futuro ya organizado → Present Continuous.' },
        { sentence: 'She _____ (love) chocolate. It\'s her favourite.', question: 'Stative verb:', options: ["is loving", 'loves', 'loving', 'love'], correct: 1, explanationEs: '"Love" es estativo — siempre Present Simple, nunca -ing.' },
      ],
      controlled: [
        { prompt: 'Write -ing form of: swim', promptEs: 'Escribe la forma -ing de: swim', answer: 'swimming', hint: 'CVC rule: double the m' },
        { prompt: 'Write -ing form of: make', promptEs: 'Escribe la forma -ing de: make', answer: 'making', hint: 'Drop silent -e' },
        { prompt: 'Make sentence: she / study / right now', promptEs: 'Haz oración: ella / estudiar / ahora mismo', answer: "She's studying right now.", hint: 'she + is + verb-ing' },
        { prompt: 'Write -ing form of: run', promptEs: 'Escribe la forma -ing de: run', answer: 'running', hint: 'CVC: double the n' },
        { prompt: 'Complete: They _____ (have) a meeting at 3pm tomorrow.', promptEs: 'Completa: Tienen reunión mañana a las 3.', answer: 'are having', hint: 'Plan futuro → am/is/are + verb-ing' },
      ]
    },
    recycleInTopics: ['a2-present-simple-vs-continuous', 'b1-past-continuous', 'b1-future-continuous'],
    tipEs: '💡 Pregunta clave: ¿Es un hábito o costumbre? → Present Simple. ¿Está pasando AHORA MISMO o es temporal? → Present Continuous. Los verbos de estado (know, like, love, want, need, have, see, hear, understand, believe) casi nunca van en continuo.'
  },

  // ═══════════════════════════════════════════════
  // A2 — MODULE: Present Simple vs Present Continuous
  // ═══════════════════════════════════════════════
  {
    id: 'a2-present-simple-vs-continuous',
    title: 'Present Simple vs Present Continuous',
    titleEs: 'Presente Simple vs Presente Continuo',
    level: 'A2',
    cefrLevel: 2,
    category: 'verb-tenses',
    priority: 'critical',
    prerequisiteIds: ['a1-present-simple', 'a2-present-continuous'],
    explanation: 'Present Simple is used for habits, routines, facts, and permanent states. Present Continuous is used for actions happening NOW, temporary situations, and future arrangements. A critical rule: state verbs (like, know, want, understand, believe, need, have for possession) do NOT use the continuous form — they stay in Present Simple even when the action is "in progress" in a sense.',
    explanationEs: 'El Presente Simple se usa para hábitos, rutinas, hechos y estados permanentes. El Presente Continuo se usa para acciones que pasan AHORA, situaciones temporales y planes futuros. Regla crítica: los verbos de estado (like, know, want, understand, believe, need, have de posesión) NO usan la forma continua — se quedan en Presente Simple.',
    formationRules: [
      {
        label: 'When to use Present Simple',
        labelEs: 'Cuándo usar Presente Simple',
        formula: 'Subject + base verb (-s for he/she/it)',
        steps: [
          { step: 'Habits and routines', stepEs: 'Hábitos y rutinas', example: 'I usually have coffee at 8. She works on Mondays.', translation: 'Normalmente tomo café a las 8. Ella trabaja los lunes.' },
          { step: 'Facts and general truths', stepEs: 'Hechos y verdades generales', example: 'Water boils at 100°C. The sun rises in the east.', translation: 'El agua hierve a 100°C. El sol sale por el este.' },
          { step: 'Permanent states', stepEs: 'Estados permanentes', example: 'I live in Madrid. She speaks three languages.', translation: 'Vivo en Madrid. Ella habla tres idiomas.' },
          { step: 'State verbs (always Simple)', stepEs: 'Verbos de estado (siempre Simple)', example: 'I like pizza. I know the answer. I want to go. I understand.', translation: 'Me gusta la pizza. Sé la respuesta. Quiero ir. Entiendo.' },
        ]
      },
      {
        label: 'When to use Present Continuous',
        labelEs: 'Cuándo usar Presente Continuo',
        formula: 'Subject + am/is/are + verb-ing',
        steps: [
          { step: 'Happening NOW', stepEs: 'Pasando AHORA', example: "I'm studying. She's cooking dinner.", translation: 'Estoy estudiando. Ella está cocinando la cena.' },
          { step: 'Temporary situations', stepEs: 'Situaciones temporales', example: "I'm living with my parents until I find a flat.", translation: 'Estoy viviendo con mis padres hasta que encuentre piso.' },
          { step: 'Future arrangements (planned)', stepEs: 'Planes futuros (ya organizados)', example: "We're flying to Paris next week.", translation: 'Volamos a París la semana que viene.' },
          { step: 'State verbs list — NEVER use -ing', stepEs: 'Lista de verbos de estado — NUNCA usan -ing', example: 'like, love, hate, want, need, prefer, know, understand, believe, think (opinion), see, hear, smell, taste, feel, have (possess), own, belong', translation: 'gustar, amar, odiar, querer, necesitar, preferir, saber, entender, creer, pensar (opinión), ver, oír, oler, saborear, sentir, tener (poseer), poseer, pertenecer' },
        ]
      }
    ],
    signalWords: [
      { word: 'always, usually, every day, on Mondays', meaning: 'Present Simple — habits', meaningEs: 'Presente Simple — hábitos' },
      { word: 'now, right now, at the moment, currently, today', meaning: 'Present Continuous — now/temporary', meaningEs: 'Presente Continuo — ahora/temporal' },
    ],
    l1Contrast: {
      concept: 'Spanish uses present tense for both; English requires the distinction',
      conceptEs: 'El español usa presente para ambos; el inglés exige la distinción',
      spanishBehavior: 'Spanish uses the same present tense: "trabajo" can mean "I work" (habit) or "I\'m working" (now). "Me gusta" is always simple. Context clarifies.',
      englishBehavior: 'English REQUIRES the distinction. "I work" ≠ "I\'m working". You must choose. State verbs (like, know, want) never take -ing in English.',
      contrastExamples: [
        { english: 'I work here. (habit) vs I\'m working here. (now/temporary)', spanish: 'Trabajo aquí. (both meanings possible)', note: 'English forces the choice.' },
        { english: "I'm liking this song.", spanish: 'Me gusta esta canción.', note: 'Like is a state verb — no continuous in English. Correct: I like this song.' },
        { english: 'I know the answer. (NOT I\'m knowing)', spanish: 'Sé la respuesta.', note: 'Know is stative — always Simple.' },
      ]
    },
    predictedErrors: [
      { error: 'I am work now.', correction: "I'm working now.", whyEs: 'Para acciones en curso se usa am/is/are + verb-ing, no am + verbo base.', frequency: 'very common' },
      { error: "I'm liking pizza.", correction: 'I like pizza.', whyEs: '"Like" es verbo de estado. Nunca se usa en continuo.', frequency: 'very common' },
      { error: "She's having a car.", correction: 'She has a car.', whyEs: '"Have" de posesión es estativo. Para posesión: Present Simple.', frequency: 'common' },
      { error: "I'm understanding now.", correction: 'I understand now.', whyEs: '"Understand" es estativo — no usa -ing.', frequency: 'common' },
      { error: 'I work right now. (when meaning "at this moment")', correction: "I'm working right now.", whyEs: '"Right now" indica momento actual → Present Continuous.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She _____ (work) in a bank. She\'s been there for 5 years.', question: 'Habit or temporary?', options: ['works', 'is working', 'working', 'work'], correct: 0, explanationEs: '5 años = permanente, hábito → Present Simple.' },
        { sentence: 'Shh! I _____ (listen) to the news.', question: 'What is happening now?', options: ['listen', 'am listening', 'listening', 'listens'], correct: 1, explanationEs: 'Ahora mismo → Present Continuous.' },
        { sentence: 'I _____ (like) this song. Can we play it again?', question: 'State verb?', options: ["like", "am liking", "liking", "likes"], correct: 0, explanationEs: '"Like" es estativo — siempre Present Simple.' },
        { sentence: 'We _____ (have) a party next Saturday. Everyone is invited.', question: 'Future arrangement?', options: ['have', 'are having', 'having', 'has'], correct: 1, explanationEs: 'Plan futuro ya organizado → Present Continuous.' },
        { sentence: 'He _____ (know) the answer. He\'s very smart.', question: 'State verb?', options: ['knows', 'is knowing', 'knowing', 'know'], correct: 0, explanationEs: '"Know" es estativo — Present Simple.' },
        { sentence: 'What _____ you _____ (do) right now?', question: 'At this moment?', options: ['do / do', 'are / doing', 'do / doing', 'is / doing'], correct: 1, explanationEs: '"Right now" → Present Continuous: are + doing.' },
      ],
      controlled: [
        { prompt: 'Choose: I _____ (work) in an office. I\'ve had this job for 3 years.', promptEs: 'Elige: Trabajo en una oficina. Llevo 3 años en este trabajo.', answer: 'work', hint: 'Permanente → Simple' },
        { prompt: 'Choose: Be quiet! The baby _____ (sleep).', promptEs: 'Elige: ¡Silencio! El bebé está durmiendo.', answer: 'is sleeping', hint: 'Ahora mismo → Continuous' },
        { prompt: 'Correct: I am wanting to go home.', promptEs: 'Corrige: I am wanting to go home.', answer: 'I want to go home.', hint: 'Want = state verb' },
        { prompt: 'Choose: She _____ (study) for her exam at the moment.', promptEs: 'Elige: Ella está estudiando para su examen en este momento.', answer: 'is studying', hint: 'At the moment → Continuous' },
        { prompt: 'Choose: Water _____ (boil) at 100 degrees.', promptEs: 'Elige: El agua hierve a 100 grados.', answer: 'boils', hint: 'Fact → Simple' },
        { prompt: 'Choose: We _____ (fly) to Rome next month. The tickets are booked.', promptEs: 'Elige: Volamos a Roma el mes que viene. Los billetes están reservados.', answer: 'are flying', hint: 'Future arrangement → Continuous' },
      ]
    },
    recycleInTopics: ['b1-present-perfect-vs-past-simple'],
    tipEs: '💡 Pregunta clave: ¿Es un hábito, hecho o estado permanente? → Simple. ¿Pasa ahora, es temporal o es un plan futuro? → Continuous. Y recuerda: like, know, want, understand, believe, have (poseer) NUNCA llevan -ing.'
  },

  // ═══════════════════════════════════════════════
  // PRACTICE HOOK: Irregular verbs (infinitive → past → participle)
  // Used by the irregular-verbs lesson step — not tied to a single CEFR grammarTheoryId on tasks
  // ═══════════════════════════════════════════════
  {
    id: 'practice-irregular-verb-forms',
    title: 'Irregular verbs: three forms',
    titleEs: 'Verbos irregulares: infinitivo, pasado y participio',
    level: 'A2',
    cefrLevel: 2,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['a1-present-simple'],
    explanation: 'English verbs have three principal parts: base form (infinitive without "to"), Past Simple, and past participle. Regular verbs add -ed to the last two: work → worked → worked. Irregular verbs change unpredictably — you must learn each pattern: think → thought → thought; go → went → gone; see → saw → seen.',
    explanationEs: 'Los verbos ingleses tienen tres formas principales: forma base (infinitivo sin "to"), pasado simple y participio pasado. Los regulares añaden -ed a las dos últimas: work → worked → worked. Los irregulares cambian de forma distinta en cada verbo — hay que memorizar: think → thought → thought; go → went → gone; see → saw → seen.',
    formationRules: [
      {
        label: 'The three columns',
        labelEs: 'Las tres columnas',
        formula: 'infinitive | Past Simple | past participle',
        steps: [
          { step: 'Column 1 — base form (same as I/you/we/they in present)', stepEs: 'Columna 1 — forma base (como I/you/we/they en presente)', example: 'think, do, write, begin', translation: 'pensar, hacer, escribir, empezar' },
          { step: 'Column 2 — Past Simple (finished past actions)', stepEs: 'Columna 2 — Pasado Simple (acciones pasadas terminadas)', example: 'I thought about it yesterday. She wrote a letter.', translation: 'Ayer pensé en ello. Ella escribió una carta.' },
          { step: 'Column 3 — past participle (perfect tenses, passive)', stepEs: 'Columna 3 — participio pasado (tiempos perfectos, pasiva)', example: 'I have thought about it. The letter was written.', translation: 'He pensado en ello. La carta fue escrita.' },
        ]
      },
      {
        label: 'Same form twice (common)',
        labelEs: 'Misma forma dos veces (muy frecuente)',
        formula: 'base = past = participle',
        steps: [
          { step: 'Some verbs repeat', stepEs: 'Algunos verbos repiten la forma', example: 'cost → cost → cost | put → put → put | cut → cut → cut', translation: 'costar, poner, cortar' },
          { step: 'Past and participle match but differ from base', stepEs: 'Pasado y participio iguales, distintos del infinitivo', example: 'bring → brought → brought | feel → felt → felt', translation: 'traer, sentir' },
        ]
      },
      {
        label: 'Spanish speaker pitfalls',
        labelEs: 'Errores típicos de hispanohablantes',
        steps: [
          { step: 'Do not invent *-ed on irregular verbs', stepEs: 'No inventes *-ed en irregulares', example: '*thinked → thought (NOT *thinked)', translation: 'No existe "thinked"' },
          { step: 'Past Simple ≠ past participle for many verbs', stepEs: 'Pasado simple ≠ participio en muchos verbos', example: 'I saw her (NOT *I seen). I have seen her.', translation: 'Vi a / He visto a' },
        ]
      }
    ],
    signalWords: [
      { word: 'yesterday / last… / ago', meaning: 'Past Simple', meaningEs: 'suele ir con Pasado Simple' },
      { word: 'have/has + participle', meaning: 'Present Perfect', meaningEs: 'have/has + participio' },
    ],
    l1Contrast: {
      concept: 'Spanish often uses one past form where English splits Simple vs participle',
      conceptEs: 'El español a menudo usa una sola forma donde el inglés separa pasado simple y participio',
      spanishBehavior: '"Pensé" and "he pensado" both come from the same verb mentally; English "I thought" vs "I have thought" is a different grammar choice.',
      englishBehavior: 'You must know the 2nd column for Past Simple alone, and the 3rd for have/has/had + participle and passive (be + participle).',
      contrastExamples: [
        { english: 'I thought you knew.', spanish: 'Pensé que sabías.', note: 'Past Simple — narrated moment.' },
        { english: "I've thought about it a lot.", spanish: 'He pensado mucho en ello.', note: 'Present Perfect — link to now.' },
      ]
    },
    predictedErrors: [
      { error: 'I thinked about it.', correction: 'I thought about it.', whyEs: '"Think" es irregular: think → thought → thought.', frequency: 'very common' },
      { error: 'I have went there.', correction: 'I have gone there.', whyEs: 'Tras have/has el verbo va en participio (gone), no en pasado simple (went).', frequency: 'very common' },
      { error: 'She writed an email.', correction: 'She wrote an email.', whyEs: 'Write → wrote → written. No existe "writed".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'Yesterday I _____ (think) about the exam.', question: 'Past Simple of think:', options: ['thinked', 'thought', 'thoughted', 'think'], correct: 1, explanationEs: 'think → thought (irregular).' },
        { sentence: 'I have never _____ (see) such a beautiful sunset.', question: 'Past participle of see:', options: ['saw', 'seen', 'seed', 'seeing'], correct: 1, explanationEs: 'have + participio → seen (no "saw").' },
        { sentence: 'They _____ (go) home early yesterday.', question: 'Past Simple of go:', options: ['gone', 'goed', 'went', 'goes'], correct: 2, explanationEs: 'Pasado simple de go → went.' },
      ],
      controlled: [
        { prompt: 'Past Simple of: begin', promptEs: 'Pasado simple de: begin', answer: 'began', hint: 'irregular' },
        { prompt: 'Past participle of: write', promptEs: 'Participio pasado de: write', answer: 'written', hint: 'write → wrote → ?' },
        { prompt: 'Correct: I have ate breakfast.', promptEs: 'Corrige: I have ate breakfast.', answer: 'I have eaten breakfast.', hint: 'have + participio; eat → eaten' },
      ]
    },
    recycleInTopics: ['a2-past-simple', 'b1-present-perfect-vs-past-simple'],
    tipEs: '💡 En esta actividad debes escribir la 2ª columna (pasado simple) y la 3ª (participio). Si no estás seguro, memoriza por familia: think/thought, bring/brought, go/went/gone.'
  },

  // ═══════════════════════════════════════════════
  // A2 — MODULE 2: Past Simple
  // ═══════════════════════════════════════════════
  {
    id: 'a2-past-simple',
    title: 'Past Simple',
    titleEs: 'Pasado Simple',
    level: 'A2',
    cefrLevel: 2,
    category: 'verbs',
    priority: 'critical',
    prerequisiteIds: ['a1-present-simple'],
    explanation: 'Past Simple is used for completed actions at a specific time in the past. Regular verbs add -ed. There are ~200 common irregular verbs that must be memorized. The auxiliary DID is used for negatives and questions.',
    explanationEs: 'El Pasado Simple se usa para acciones completadas en un momento específico del pasado. Los verbos regulares añaden -ed. Hay ~200 verbos irregulares comunes que deben memorizarse. El auxiliar DID se usa para negativos y preguntas.',
    formationRules: [
      {
        label: 'Regular verbs',
        labelEs: 'Verbos regulares',
        formula: 'verb + -ed',
        steps: [
          { step: 'Most verbs: add -ed', stepEs: 'La mayoría: añade -ed', example: 'work → worked, play → played, watch → watched', translation: 'trabajé/trabajó, jugué/jugó, miré/miró' },
          { step: 'Verbs ending in -e: add -d only', stepEs: 'Terminados en -e: solo añade -d', example: 'live → lived, love → loved, dance → danced', translation: 'vivió, amó, bailó' },
          { step: 'Verbs ending in consonant + y: change y → i add -ed', stepEs: 'Terminados en consonante + y: cambia y → i añade -ed', example: 'study → studied, try → tried, carry → carried', translation: 'estudió, intentó, cargó' },
          { step: 'CVC verbs (1 syllable): double final consonant + -ed', stepEs: 'Verbos CVC (1 sílaba): dobla la consonante final + -ed', example: 'stop → stopped, drop → dropped, plan → planned', translation: 'paró, dejó caer, planeó' },
        ]
      },
      {
        label: '-ed pronunciation (3 sounds)',
        labelEs: 'Pronunciación de -ed (3 sonidos)',
        steps: [
          { step: '/t/ after voiceless sounds: p, k, f, s, ch, sh', stepEs: '/t/ después de sonidos sordos', example: 'walked /wɔːkt/, laughed /læft/, kissed /kɪst/', translation: 'caminó, rio, besó' },
          { step: '/d/ after voiced sounds and vowels', stepEs: '/d/ después de sonidos sonoros y vocales', example: 'played /pleɪd/, lived /lɪvd/, opened /ˈoʊpənd/', translation: 'jugó, vivió, abrió' },
          { step: '/ɪd/ after t and d sounds', stepEs: '/ɪd/ después de sonidos t y d', example: 'waited /ˈweɪtɪd/, needed /ˈniːdɪd/, started /ˈstɑːrtɪd/', translation: 'esperó, necesitó, empezó' },
        ]
      },
      {
        label: 'Negative and Questions with DID',
        labelEs: 'Negativo y Preguntas con DID',
        formula: "didn't + base verb | Did + subject + base verb?",
        steps: [
          { step: "Negative: Subject + didn't + base verb (not -ed!)", stepEs: 'Negativo: Sujeto + didn\'t + verbo base (¡no -ed!)', example: "I didn't go. She didn't work.", translation: 'No fui. Ella no trabajó.' },
          { step: 'Question: Did + Subject + base verb + ?', stepEs: 'Pregunta: Did + Sujeto + verbo base + ?', example: 'Did you go? Did she work?', translation: '¿Fuiste? ¿Trabajó ella?' },
          { step: 'Short answers: Yes, I did. / No, I didn\'t.', stepEs: 'Respuestas cortas', example: "Did you enjoy it? — Yes, I did!", translation: '¿Lo disfrutaste? — ¡Sí!' },
        ]
      }
    ],
    signalWords: [
      { word: 'yesterday', meaning: 'the day before today', meaningEs: 'ayer' },
      { word: 'last night/week/year', meaning: 'the previous period', meaningEs: 'anoche/la semana pasada/el año pasado' },
      { word: 'ago', meaning: 'X time before now: "two days ago"', meaningEs: 'hace: "hace dos días"' },
      { word: 'in 2010 / in March', meaning: 'specific past time', meaningEs: 'en 2010 / en marzo' },
      { word: 'when I was young', meaning: 'past time period', meaningEs: 'cuando era joven' },
    ],
    l1Contrast: {
      concept: 'Past Simple vs. Spanish Pretérito Indefinido and Imperfecto',
      conceptEs: 'Past Simple vs. Pretérito Indefinido e Imperfecto español',
      spanishBehavior: 'Spanish distinguishes: pretérito indefinido (completed: "fui") vs imperfecto (repeated/background: "iba, era, tenía")',
      englishBehavior: 'English Past Simple is used for BOTH completed actions AND habits in the past. Context + signal words clarify meaning.',
      contrastExamples: [
        { english: 'I went to school every day.', spanish: 'Iba al colegio todos los días.', note: 'Habit in past → Past Simple in English (like Spanish imperfecto).' },
        { english: 'I went to the cinema yesterday.', spanish: 'Fui al cine ayer.', note: 'Completed action → Past Simple = pretérito indefinido.' },
        { english: 'She was tired. (state)', spanish: 'Estaba cansada.', note: '"Was" for states = Spanish imperfecto.' },
      ]
    },
    predictedErrors: [
      { error: "I didn't went to school.", correction: "I didn't go to school.", whyEs: 'Después de didn\'t, el verbo va en forma base. "Went" ya es pasado — no se combina con didn\'t.', frequency: 'very common' },
      { error: "Did she went?", correction: "Did she go?", whyEs: 'Did ya indica pasado; el verbo principal va en forma base.', frequency: 'very common' },
      { error: "He writed a letter.", correction: "He wrote a letter.", whyEs: '"Write" es irregular: write → wrote → written.', frequency: 'common' },
      { error: "Yesterday I have seen her.", correction: "Yesterday I saw her.", whyEs: 'Con "yesterday" (tiempo específico) se usa Past Simple, no Present Perfect.', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She _____ (not go) to the party last night.', question: 'Correct negative form:', options: ["didn't went", "didn't go", "not went", "gone not"], correct: 1, explanationEs: "didn't + base verb form." },
        { sentence: '_____ you enjoy the film?', question: 'Question form:', options: ['Did', 'Does', 'Do', 'Was'], correct: 0, explanationEs: 'Para Past Simple questions usamos DID.' },
        { sentence: 'I _____ (see) her yesterday at the airport.', question: 'Specific past time:', options: ['have seen', 'saw', 'seen', 'have saw'], correct: 1, explanationEs: '"Yesterday" = tiempo específico → Past Simple (saw).' },
        { sentence: '_____ she _____ (buy) the tickets?', question: 'Past Simple question:', options: ['Did / buy', 'Does / buy', 'Did / bought', 'Was / buy'], correct: 0, explanationEs: 'Did + sujeto + verbo base. El verbo NO lleva -ed.' },
        { sentence: 'He _____ (not finish) the report last week.', question: 'Negative Past Simple:', options: ["didn't finished", "didn't finish", "not finished", "wasn't finish"], correct: 1, explanationEs: "didn't + verbo base (finish), nunca 'didn't finished'." },
      ],
      controlled: [
        { prompt: 'Past Simple of: write', promptEs: 'Pasado de: write', answer: 'wrote', hint: 'Irregular verb!' },
        { prompt: 'Past Simple of: go', promptEs: 'Pasado de: go', answer: 'went', hint: 'Irregular!' },
        { prompt: 'Make negative: I visited Paris last summer.', promptEs: 'Haz negativo: Visité París el verano pasado.', answer: "I didn't visit Paris last summer.", hint: "didn't + base form" },
        { prompt: 'Past Simple of: study (regular)', promptEs: 'Pasado de: study (regular)', answer: 'studied', hint: 'y → i + ed' },
        { prompt: 'Make question: She left at 5pm.', promptEs: 'Haz pregunta: Ella se fue a las 5.', answer: 'Did she leave at 5pm?', hint: 'Did + subject + base verb' },
      ]
    },
    recycleInTopics: ['b1-present-perfect-vs-past-simple', 'a2-past-continuous', 'b1-past-perfect'],
    tipEs: '💡 El error más frecuente: usar "went, saw, did" después de "didn\'t". Recuerda: didn\'t ya contiene el pasado. El verbo principal SIEMPRE va en forma base: "didn\'t go", "didn\'t see", "didn\'t do".'
  },

  // ═══════════════════════════════════════════════
  // B1 — MODULE 1: Present Perfect vs Past Simple
  // ═══════════════════════════════════════════════
  {
    id: 'b1-present-perfect-vs-past-simple',
    title: 'Present Perfect vs Past Simple',
    titleEs: 'Present Perfect vs. Pasado Simple',
    level: 'B1',
    cefrLevel: 3,
    category: 'verbs',
    priority: 'critical',
    prerequisiteIds: ['a2-past-simple'],
    explanation: 'This is the most important grammar distinction for Spanish speakers. Present Perfect (have/has + past participle) connects past to present — no specific time given. Past Simple describes a completed action at a SPECIFIC past time.',
    explanationEs: 'Esta es la distinción gramatical más importante para hispanohablantes. El Present Perfect (have/has + participio pasado) conecta el pasado con el presente — no se da un tiempo específico. El Pasado Simple describe una acción completada en un momento ESPECÍFICO del pasado.',
    formationRules: [
      {
        label: 'Present Perfect formation',
        labelEs: 'Formación del Present Perfect',
        formula: 'Subject + have/has + past participle',
        steps: [
          { step: 'I/You/We/They + have + past participle', stepEs: 'I/You/We/They + have + participio pasado', example: "I have visited Rome. They've finished.", translation: 'He visitado Roma. Han terminado.' },
          { step: 'He/She/It + has + past participle', stepEs: 'He/She/It + has + participio pasado', example: "She has lived in France. He's broken his leg.", translation: 'Ella ha vivido en Francia. Se ha roto la pierna.' },
          { step: 'Regular past participles: base verb + -ed (same as Past Simple)', stepEs: 'Participios regulares: verbo base + -ed', example: 'work → worked, finish → finished, live → lived', translation: 'trabajado, terminado, vivido' },
          { step: 'Irregular past participles: must memorize (3rd column)', stepEs: 'Participios irregulares: deben memorizarse (3ª columna)', example: 'go → went → GONE | see → saw → SEEN | do → did → DONE', translation: 'ido, visto, hecho' },
        ]
      },
      {
        label: 'When to use Present Perfect',
        labelEs: 'Cuándo usar el Present Perfect',
        steps: [
          { step: 'Experience in life — no specific time (ever/never)', stepEs: 'Experiencia en la vida — sin tiempo específico (ever/never)', example: "Have you ever been to Japan? I've never tried sushi.", translation: '¿Has estado alguna vez en Japón? Nunca he probado el sushi.' },
          { step: 'Recent action with present result (just/already/yet)', stepEs: 'Acción reciente con resultado presente (just/already/yet)', example: "I've just finished. She's already left. Have you eaten yet?", translation: 'Acabo de terminar. Ella ya se ha ido. ¿Ya has comido?' },
          { step: 'Unfinished time period (today, this week, this year)', stepEs: 'Período de tiempo no terminado', example: "I've drunk three coffees today. We've had a lot of rain this month.", translation: 'He tomado tres cafés hoy. Hemos tenido mucha lluvia este mes.' },
          { step: 'Continuation from past to present (for/since)', stepEs: 'Continuación del pasado al presente (for/since)', example: "I've lived here for 5 years. She's worked here since 2019.", translation: 'He vivido aquí por 5 años. Ella trabaja aquí desde 2019.' },
        ]
      },
      {
        label: 'When to use Past Simple instead',
        labelEs: 'Cuándo usar el Pasado Simple en cambio',
        steps: [
          { step: 'Specific finished time: yesterday, last week, in 2010, ago, when...', stepEs: 'Tiempo pasado específico y terminado', example: 'I visited Rome in 2018. She left yesterday.', translation: 'Visité Roma en 2018. Ella se fue ayer.' },
          { step: 'The person is dead (they cannot still be doing it)', stepEs: 'La persona está muerta', example: 'Shakespeare wrote 37 plays. (NOT has written — he\'s dead)', translation: 'Shakespeare escribió 37 obras. (no "ha escrito" — está muerto)' },
          { step: 'Narrative — a sequence of events', stepEs: 'Narración — secuencia de eventos', example: 'She came in, sat down, opened her bag and took out a pen.', translation: 'Entró, se sentó, abrió su bolso y sacó un bolígrafo.' },
        ]
      }
    ],
    signalWords: [
      { word: 'ever / never', meaning: 'Present Perfect — life experience', meaningEs: 'Present Perfect — experiencia en la vida' },
      { word: 'just', meaning: 'Present Perfect — very recently', meaningEs: 'Present Perfect — hace muy poco' },
      { word: 'already', meaning: 'Present Perfect — sooner than expected', meaningEs: 'Present Perfect — antes de lo esperado' },
      { word: 'yet', meaning: 'Present Perfect — expected but not done (negatives/questions)', meaningEs: 'Present Perfect — esperado pero no hecho (negativos/preguntas)' },
      { word: 'for', meaning: 'Present Perfect — duration: "for 5 years"', meaningEs: 'Present Perfect — duración: "por 5 años"' },
      { word: 'since', meaning: 'Present Perfect — start point: "since 2019"', meaningEs: 'Present Perfect — punto de inicio: "desde 2019"' },
      { word: 'yesterday / last / ago / in [year]', meaning: 'Past Simple — specific time', meaningEs: 'Pasado Simple — tiempo específico' },
      { word: 'when...', meaning: 'Past Simple — specific past context', meaningEs: 'Pasado Simple — contexto pasado específico' },
    ],
    l1Contrast: {
      concept: 'Spanish Pretérito Perfecto vs Pretérito Indefinido — different from English!',
      conceptEs: 'El Pretérito Perfecto español vs Pretérito Indefinido — ¡diferente al inglés!',
      spanishBehavior: 'In Spain: "He ido" (recent/connected to present) vs "Fui" (further past). In Latin America: "Fui" is used for BOTH — "he ido" is rare.',
      englishBehavior: 'English Present Perfect = Spanish "he ido" (Spain) BUT the rules are different. The key is: with a specific past time → ALWAYS Past Simple in English.',
      contrastExamples: [
        { english: 'I went to London last year. (NOT have gone)', spanish: 'Fui a Londres el año pasado.', note: '"Last year" = specific time → Past Simple only.' },
        { english: "I've been to London. (no time mentioned)", spanish: 'He estado en Londres. / He ido a Londres.', note: 'No specific time → Present Perfect.' },
        { english: "I've just arrived. (just = very recent)", spanish: 'Acabo de llegar.', note: '"Just" → Present Perfect in English.' },
        { english: "Did you go out yesterday? (NOT Have you gone)", spanish: '¿Saliste ayer?', note: '"Yesterday" forces Past Simple.' },
      ]
    },
    predictedErrors: [
      { error: 'I have gone to Paris last year.', correction: 'I went to Paris last year.', whyEs: '"Last year" es un tiempo pasado específico y terminado → siempre Pasado Simple.', frequency: 'very common' },
      { error: 'Did you ever go to Japan?', correction: 'Have you ever been to Japan?', whyEs: '"Ever" con experiencias de vida → Present Perfect.', frequency: 'very common' },
      { error: 'I live here since 5 years.', correction: "I've lived here for 5 years.", whyEs: 'Para una situación que continúa desde el pasado hasta ahora → Present Perfect + for (duración) / since (punto de inicio).', frequency: 'very common' },
      { error: 'He has broke his arm.', correction: 'He has broken his arm.', whyEs: '"Break" es irregular: break → broke → BROKEN. El participio es "broken", no "broke".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She _____ to Japan three times in her life.', question: 'No specific time — life experience:', options: ['went', 'has been', 'was', 'had been'], correct: 1, explanationEs: 'Experiencia en la vida sin tiempo específico → Present Perfect.' },
        { sentence: 'I _____ to Rome in 2020.', question: '"In 2020" = specific time:', options: ['have been', 'went', 'have went', 'go'], correct: 1, explanationEs: 'Tiempo específico y pasado → Pasado Simple.' },
        { sentence: 'Have you finished _____?', question: 'Signal word for "not yet but expected":',  options: ['already', 'yet', 'just', 'ever'], correct: 1, explanationEs: '"Yet" en preguntas = ¿ya...? (se esperaba que sucediera).' },
        { sentence: 'She _____ in Madrid for ten years. (still lives there)', question: 'Unfinished period — continuation to present:', options: ['lived', 'has lived', 'was living', 'had lived'], correct: 1, explanationEs: 'For + duración con situación que continúa → Present Perfect.' },
        { sentence: 'Shakespeare _____ over 30 plays before he died.', question: 'Person is dead — completed past:', options: ['has written', 'wrote', 'had written', 'was writing'], correct: 1, explanationEs: 'Personas muertas → acciones completadas en el pasado → Past Simple.' },
      ],
      controlled: [
        { prompt: 'Correct: I have seen her yesterday.', promptEs: 'Corrige: Yo la vi ayer.', answer: 'I saw her yesterday.', hint: '"Yesterday" = specific past → Past Simple' },
        { prompt: "Complete with for/since: I've worked here ___ 2018.", promptEs: 'Completa con for/since: Trabajo aquí ___ 2018.', answer: 'since', hint: 'Point in time → since | Duration → for' },
        { prompt: "Complete: I've _____ (never / eat) sushi in my life.", promptEs: 'Completa: Nunca he comido sushi en mi vida.', answer: "I've never eaten sushi in my life.", hint: 'ever/never + life experience → Present Perfect' },
        { prompt: 'Correct: I have went to Paris last summer.', promptEs: 'Corrige: Fui a París el verano pasado.', answer: 'I went to Paris last summer.', hint: '"Last summer" = specific time → Past Simple. Also: go→went (irregular)' },
        { prompt: "Complete with for/since: We've known each other ___ five years.", promptEs: 'Completa con for/since: Nos conocemos desde hace cinco años.', answer: 'for', hint: 'Duration (five years) → for' },
      ]
    },
    recycleInTopics: ['b1-present-perfect-continuous', 'b2-past-perfect'],
    tipEs: '💡 Regla de oro: ¿Hay una expresión de tiempo pasado específico (yesterday, last week, in 2018, ago, when...)? → Pasado Simple SIEMPRE. ¿No hay tiempo específico y conecta el pasado con el presente? → Present Perfect.'
  },

  // ═══════════════════════════════════════════════
  // B1 — MODULE 2: the Passive Voice
  // ═══════════════════════════════════════════════
  {
    id: 'b1-passive-voice',
    title: 'The Passive Voice',
    titleEs: 'La Voz Pasiva',
    level: 'B1',
    cefrLevel: 3,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['a1-verb-to-be', 'a2-past-simple', 'b1-present-perfect-vs-past-simple'],
    explanation: 'The Passive Voice shifts focus from who does the action (agent) to what receives the action (patient). It is formed with BE + past participle. Used when the agent is unknown, unimportant, or obvious.',
    explanationEs: 'La Voz Pasiva desplaza el foco de quién realiza la acción (agente) a qué recibe la acción (paciente). Se forma con BE + participio pasado. Se usa cuando el agente es desconocido, poco importante u obvio.',
    formationRules: [
      {
        label: 'Formation across all tenses',
        labelEs: 'Formación en todos los tiempos verbales',
        formula: 'Object becomes subject + correct form of BE + past participle',
        steps: [
          { step: 'Present Simple Passive: is/are + past participle', stepEs: 'Pasiva de Presente Simple', example: 'English is spoken here. Cars are made in factories.', translation: 'Aquí se habla inglés. Los coches se fabrican en fábricas.' },
          { step: 'Past Simple Passive: was/were + past participle', stepEs: 'Pasiva de Pasado Simple', example: 'The letter was written in 1920. The windows were broken.', translation: 'La carta fue escrita en 1920. Las ventanas estaban rotas.' },
          { step: 'Present Perfect Passive: has/have been + past participle', stepEs: 'Pasiva de Present Perfect', example: 'The report has been submitted. New laws have been passed.', translation: 'El informe ha sido enviado. Se han aprobado nuevas leyes.' },
          { step: 'Future Passive: will be + past participle', stepEs: 'Pasiva de Futuro', example: 'The project will be completed next month.', translation: 'El proyecto se completará el próximo mes.' },
        ]
      },
      {
        label: 'By-agent (optional)',
        labelEs: 'Por + agente (opcional)',
        steps: [
          { step: 'Add "by + agent" only when the agent is important/interesting', stepEs: 'Añade "by + agente" solo cuando el agente es importante/interesante', example: 'The Mona Lisa was painted by Leonardo da Vinci.', translation: 'La Mona Lisa fue pintada por Leonardo da Vinci.' },
          { step: 'Omit "by..." when agent is obvious, unknown, or unimportant', stepEs: 'Omite "by..." cuando el agente es obvio, desconocido o poco importante', example: 'My car was stolen last night. (by thieves — obvious)', translation: 'Me robaron el coche anoche.' },
        ]
      }
    ],
    l1Contrast: {
      concept: 'Passive in English vs. "Se" construction in Spanish',
      conceptEs: 'La pasiva en inglés vs la construcción "se" en español',
      spanishBehavior: 'Spanish often uses "se" for passive: "Se habla inglés aquí", "Se venden coches", "Se construyó en 1900"',
      englishBehavior: 'English uses BE + past participle, not a reflexive: "English is spoken here", "Cars are sold", "It was built in 1900"',
      contrastExamples: [
        { english: 'English is spoken here.', spanish: 'Aquí se habla inglés.', note: '"Se habla" → "is spoken" in English.' },
        { english: 'The bridge was built in 1890.', spanish: 'Se construyó el puente en 1890. / El puente fue construido en 1890.', note: 'Both Spanish forms map to one English passive.' },
        { english: 'Mistakes were made.', spanish: 'Se cometieron errores.', note: 'Passive hides the agent — common in formal/political language.' },
      ]
    },
    predictedErrors: [
      { error: 'The letter was wrote by her.', correction: 'The letter was written by her.', whyEs: '"Write" es irregular: write → wrote → WRITTEN. En la pasiva siempre va el participio pasado (3ª columna).', frequency: 'common' },
      { error: 'English is speak here.', correction: 'English is spoken here.', whyEs: 'La pasiva requiere el participio pasado (spoken), no el verbo base (speak).', frequency: 'very common' },
      { error: 'The car was stolen by someone.', correction: 'The car was stolen.', whyEs: '"By someone" es redundante e innecesario cuando el agente es desconocido o irrelevante.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'This bridge _____ in 1889. (build)', question: 'Past Simple Passive:', options: ['built', 'was built', 'has built', 'were built'], correct: 1, explanationEs: 'Pasado simple pasivo: was/were + past participle.' },
        { sentence: 'Over 1 billion cups of coffee _____ every day. (drink)', question: 'Present Simple Passive:', options: ['drunk', 'drinks', 'are drunk', 'is drank'], correct: 2, explanationEs: '"Cups" = plural → are + drunk (participio de drink).' },
        { sentence: 'The letter _____ by the secretary yesterday. (write)', question: 'Past Simple Passive — irregular verb:', options: ['was wrote', 'was written', 'wrote', 'has been written'], correct: 1, explanationEs: 'write→wrote→written. Pasiva: was + written.' },
        { sentence: 'Spanish _____ in many countries. (speak)', question: 'Present Simple Passive — avoid "se habla" calque:', options: ['speaks', 'is spoken', 'is speak', 'spoken'], correct: 1, explanationEs: 'BE + participio pasado. "Is speak" es error común (falta participio).' },
        { sentence: 'The new hospital _____ next month. (open)', question: 'Future Passive:', options: ['will open', 'will be opened', 'is opened', 'opens'], correct: 1, explanationEs: 'will be + past participle.' },
      ],
      controlled: [
        { prompt: 'Change to passive: Someone stole my wallet.', promptEs: 'Cambia a pasiva: Alguien me robó la cartera.', answer: 'My wallet was stolen.', hint: 'Past Simple Passive — no need for "by someone"' },
        { prompt: 'Change to passive: They will deliver the package tomorrow.', promptEs: 'Cambia a pasiva: Entregarán el paquete mañana.', answer: 'The package will be delivered tomorrow.', hint: 'Future passive: will be + pp' },
        { prompt: 'Change to passive: They have cancelled the flight.', promptEs: 'Cambia a pasiva: Han cancelado el vuelo.', answer: 'The flight has been cancelled.', hint: 'Present Perfect Passive: has/have been + pp' },
        { prompt: 'Correct: The report was wrote by Maria.', promptEs: 'Corrige: El informe fue escrito por María.', answer: 'The report was written by Maria.', hint: 'write → written (participio irregular)' },
        { prompt: 'Change to passive: People speak English here.', promptEs: 'Cambia a pasiva: Aquí se habla inglés.', answer: 'English is spoken here.', hint: 'Present Simple Passive: is/are + pp' },
      ]
    },
    recycleInTopics: ['b2-passive-advanced', 'c1-complex-passives'],
    tipEs: '💡 Cuándo usar la pasiva: (1) No sabes quién hizo la acción. (2) No importa quién la hizo. (3) Quieres poner el foco en lo que le pasó al objeto, no en quién lo hizo. (4) Estilo formal/académico.'
  },

  // ═══════════════════════════════════════════════
  // B2 — MODULE 1: Conditionals (All Types)
  // ═══════════════════════════════════════════════
  {
    id: 'b2-conditionals-all',
    title: 'Conditionals: All Types',
    titleEs: 'Condicionales: Todos los Tipos',
    level: 'B2',
    cefrLevel: 4,
    category: 'clauses',
    priority: 'critical',
    prerequisiteIds: ['a2-past-simple', 'b1-present-perfect-vs-past-simple'],
    explanation: 'English has four main conditional types, each expressing a different degree of reality or possibility. The "Mixed Conditional" combines elements from different types to express mixed time references.',
    explanationEs: 'El inglés tiene cuatro tipos principales de condicional, cada uno expresando un grado diferente de realidad o posibilidad. El "Condicional Mixto" combina elementos de diferentes tipos para expresar referencias temporales mixtas.',
    formationRules: [
      {
        label: 'Zero Conditional — General truths',
        labelEs: 'Condicional Cero — Verdades generales',
        formula: 'If + Present Simple, Present Simple',
        steps: [
          { step: 'Use for: universal truths, scientific facts, things always true', stepEs: 'Usar para: verdades universales, hechos científicos', example: 'If you heat water to 100°C, it boils.', translation: 'Si calientas el agua a 100°C, hierve.' },
          { step: '"When" can replace "if" with same meaning', stepEs: '"When" puede reemplazar "if" con el mismo significado', example: 'When you press this button, the light turns on.', translation: 'Cuando presionas este botón, se enciende la luz.' },
        ]
      },
      {
        label: 'First Conditional — Real possibility',
        labelEs: 'Primer Condicional — Posibilidad real',
        formula: 'If + Present Simple, will + base verb',
        steps: [
          { step: 'Use for: real/likely future situations', stepEs: 'Usar para: situaciones futuras reales/probables', example: 'If it rains tomorrow, I\'ll stay home.', translation: 'Si llueve mañana, me quedaré en casa.' },
          { step: 'Can also use: might, may, can, should, must in result clause', stepEs: 'También se puede usar: might, may, can, should en la cláusula resultado', example: "If you study hard, you might pass. If you're late, you should call.", translation: 'Si estudias duro, podrías aprobar. Si llegas tarde, deberías llamar.' },
        ]
      },
      {
        label: 'Second Conditional — Hypothetical/unlikely',
        labelEs: 'Segundo Condicional — Hipotético/improbable',
        formula: 'If + Past Simple, would + base verb',
        steps: [
          { step: 'Use for: imaginary situations, unlikely events, advice', stepEs: 'Usar para: situaciones imaginarias, eventos improbables, consejo', example: "If I were rich, I'd travel the world.", translation: 'Si fuera rico, viajaría por el mundo.' },
          { step: '"Were" is used for ALL persons (not "was") in formal English', stepEs: '"Were" se usa para TODAS las personas (no "was") en inglés formal', example: 'If I were you, I would apologize. If she were here...', translation: 'Si yo fuera tú, me disculparía. Si ella estuviera aquí...' },
          { step: 'Could/might instead of would for less certainty', stepEs: 'Could/might en lugar de would para menos certeza', example: "If I studied more, I could pass.", translation: 'Si estudiara más, podría aprobar.' },
        ]
      },
      {
        label: 'Third Conditional — Impossible (past regret)',
        labelEs: 'Tercer Condicional — Imposible (arrepentimiento del pasado)',
        formula: 'If + Past Perfect, would have + past participle',
        steps: [
          { step: 'Use for: imagining a different past, regrets, criticism', stepEs: 'Usar para: imaginar un pasado diferente, arrepentimientos, críticas', example: "If I had studied harder, I would have passed the exam.", translation: 'Si hubiera estudiado más, habría aprobado el examen.' },
          { step: 'Could/might have instead of would have', stepEs: 'Could/might have en lugar de would have', example: "If she had left earlier, she might have caught the train.", translation: 'Si hubiera salido antes, podría haber cogido el tren.' },
        ]
      },
      {
        label: 'Mixed Conditional — Mixed time reference',
        labelEs: 'Condicional Mixto — Referencia temporal mixta',
        steps: [
          { step: 'Past → Present: If + Past Perfect, would + base verb', stepEs: 'Pasado → Presente: If + Past Perfect, would + base verb', example: "If I had studied medicine, I would be a doctor now.", translation: 'Si hubiera estudiado medicina, sería médico ahora.' },
          { step: 'Present → Past: If + Past Simple, would have + past participle', stepEs: 'Presente → Pasado: If + Past Simple, would have + past participle', example: "If I weren't so shy, I would have spoken to her.", translation: 'Si no fuera tan tímido, le habría hablado.' },
        ]
      }
    ],
    signalWords: [
      { word: 'if', meaning: 'introduces the condition', meaningEs: 'introduce la condición' },
      { word: 'unless', meaning: 'if not: "unless it rains" = if it doesn\'t rain', meaningEs: 'a menos que, si no' },
      { word: 'as long as / provided that', meaning: 'only if this condition is met', meaningEs: 'siempre que, con tal de que' },
      { word: 'even if', meaning: 'regardless of the condition', meaningEs: 'incluso si, aunque' },
      { word: 'imagine / suppose / what if', meaning: 'hypothetical framing', meaningEs: 'imagina / supón / ¿y si...?' },
    ],
    l1Contrast: {
      concept: '"Would" never goes in the IF clause in English',
      conceptEs: '"Would" nunca va en la cláusula IF en inglés',
      spanishBehavior: 'In Spanish it\'s possible: "Si lo haría, lo haría" (colloquial) — but even in Spanish this is considered incorrect in formal registers',
      englishBehavior: 'NEVER use "would" in the if-clause: WRONG: "If I would go..." | CORRECT: "If I went..."',
      contrastExamples: [
        { english: 'If I had more time, I would exercise.', spanish: 'Si tuviera más tiempo, haría ejercicio.', note: '"Would" only in main clause, never in IF clause.' },
        { english: 'If you had called, I would have come.', spanish: 'Si hubieras llamado, habría venido.', note: 'Third conditional: both "had" and "would have" — never "would" + "would have".' },
        { english: 'If I were you, I\'d apologize.', spanish: 'Yo en tu lugar me disculparía.', note: '"Were" for all persons in formal/written English.' },
      ]
    },
    predictedErrors: [
      { error: 'If I would have money, I would travel.', correction: "If I had money, I would travel.", whyEs: '"Would" NUNCA va en la cláusula IF. Usa el Pasado Simple en la condición.', frequency: 'very common' },
      { error: 'If I would have studied, I would have passed.', correction: 'If I had studied, I would have passed.', whyEs: 'Tercer condicional: IF + Past Perfect (had studied), resultado: would have + participio.', frequency: 'very common' },
      { error: "If I was you, I'd leave.", correction: "If I were you, I'd leave.", whyEs: 'En inglés formal/estándar, el segundo condicional usa "were" para todas las personas.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'If she _____ harder, she would have passed.', question: 'Third Conditional — past condition:', options: ['studied', 'had studied', 'would study', 'has studied'], correct: 1, explanationEs: 'Tercer condicional: If + Past Perfect (had studied).' },
        { sentence: 'If it _____ tomorrow, we\'ll cancel the picnic.', question: 'First conditional — real possibility:', options: ['will rain', 'rained', 'rains', 'would rain'], correct: 2, explanationEs: 'Primer condicional: If + Present Simple, will...' },
        { sentence: 'If you heat water to 100°C, it _____.', question: 'Zero conditional — general truth:', options: ['will boil', 'boils', 'would boil', 'boiled'], correct: 1, explanationEs: 'Condicional cero: Present Simple en ambas cláusulas.' },
        { sentence: 'If I _____ (have) more time, I would exercise more.', question: 'Second conditional:', options: ['have', 'had', 'would have', 'will have'], correct: 1, explanationEs: 'Segundo condicional: If + Past Simple. Nunca "would" en la condición.' },
        { sentence: '_____ I known, I would have helped.', question: 'Formal inversion (3rd conditional):', options: ['If', 'Had', 'Would', 'Have'], correct: 1, explanationEs: 'Inversión formal: Had I known = If I had known.' },
      ],
      controlled: [
        { prompt: "Complete: If I ___ (be) you, I'd talk to him.", promptEs: 'Completa: Si yo fuera tú, hablaría con él.', answer: 'were', hint: 'Second conditional: "were" for all persons (formal)' },
        { prompt: "Make into Third Conditional: I didn't see the sign. I turned the wrong way.", promptEs: 'Tercer condicional: No vi la señal. Giré mal.', answer: "If I had seen the sign, I wouldn't have turned the wrong way.", hint: 'If + Past Perfect, would have + pp' },
        { prompt: 'Complete: If she _____ (leave) earlier, she _____ (catch) the train.', promptEs: 'Tercer condicional: Si hubiera salido antes, habría cogido el tren.', answer: 'If she had left earlier, she would have caught the train.', hint: 'Past Perfect + would have + pp' },
        { prompt: 'Correct: If I would have studied, I would have passed.', promptEs: 'Corrige el error común en tercer condicional.', answer: 'If I had studied, I would have passed.', hint: 'Nunca "would" en la cláusula if' },
        { prompt: 'Zero conditional: When/If you _____ (press) the button, the light _____ (turn) on.', promptEs: 'Condicional cero: Cuando presionas el botón, se enciende la luz.', answer: 'When/If you press the button, the light turns on.', hint: 'Present Simple en ambas' },
      ]
    },
    recycleInTopics: ['b2-wish-if-only', 'c1-inversion-conditionals'],
    tipEs: '💡 Regla de oro: NUNCA "would" en la cláusula IF. Para recordar los tipos: 0=siempre verdad (presente+presente), 1=posible futuro (presente+will), 2=hipotético ahora (pasado+would), 3=pasado imposible (past perfect+would have).'
  },

  // ═══════════════════════════════════════════════
  // C1 — MODULE 1: Inversion
  // ═══════════════════════════════════════════════
  {
    id: 'c1-inversion',
    title: 'Inversion for Emphasis',
    titleEs: 'Inversión para Énfasis',
    level: 'C1',
    cefrLevel: 5,
    category: 'sentences',
    priority: 'high',
    prerequisiteIds: ['b2-conditionals-all', 'b1-passive-voice'],
    explanation: 'Inversion — placing the auxiliary before the subject — is used in advanced English for emphasis, formal writing, and literary style. It typically occurs after negative or restrictive adverbials placed at the front of a sentence.',
    explanationEs: 'La inversión — colocar el auxiliar antes del sujeto — se usa en inglés avanzado para énfasis, escritura formal y estilo literario. Ocurre típicamente después de adverbiales negativos o restrictivos colocados al inicio de la oración.',
    formationRules: [
      {
        label: 'Inversion after negative adverbials',
        labelEs: 'Inversión después de adverbiales negativos',
        formula: 'Negative adverb + Auxiliary + Subject + Main Verb',
        steps: [
          { step: 'Never, rarely, seldom + have/has/had or do/does/did + subject', stepEs: 'Never, rarely, seldom + auxiliar + sujeto', example: 'Never have I seen such beauty. Rarely does she make mistakes.', translation: 'Nunca había visto tal belleza. Rara vez comete errores.' },
          { step: 'Hardly/Scarcely/Barely...when + auxiliary + subject', stepEs: 'Hardly/Scarcely/Barely...when + auxiliar + sujeto', example: 'Hardly had I arrived when the phone rang.', translation: 'Apenas había llegado cuando sonó el teléfono.' },
          { step: 'Not only...but also + inversion in first clause', stepEs: 'Not only...but also + inversión en primera cláusula', example: 'Not only did she win the race, but she also set a new record.', translation: 'No solo ganó la carrera, sino que también estableció un nuevo récord.' },
          { step: 'No sooner...than + Past Perfect inverted', stepEs: 'No sooner...than + Past Perfect invertido', example: 'No sooner had I sat down than the doorbell rang.', translation: 'Apenas me había sentado cuando sonó el timbre.' },
        ]
      },
      {
        label: 'Inversion with conditionals (formal)',
        labelEs: 'Inversión con condicionales (formal)',
        steps: [
          { step: 'Should (1st conditional): Should you need help → If you should need help', stepEs: '"Should" al inicio reemplaza "If...should"', example: 'Should you have any questions, please don\'t hesitate to contact me.', translation: 'Si tuvieras alguna pregunta, no dudes en contactarme.' },
          { step: 'Were (2nd conditional): Were I in your position → If I were in your position', stepEs: '"Were" al inicio reemplaza "If...were"', example: "Were I to win the lottery, I'd donate half.", translation: 'Si ganara la lotería, donaría la mitad.' },
          { step: 'Had (3rd conditional): Had I known → If I had known', stepEs: '"Had" al inicio reemplaza "If...had"', example: "Had she arrived earlier, she wouldn't have missed the train.", translation: 'Si hubiera llegado antes, no habría perdido el tren.' },
        ]
      },
      {
        label: 'Inversion after "only" phrases',
        labelEs: 'Inversión después de frases con "only"',
        steps: [
          { step: 'Only after, only when, only if + inversion', stepEs: 'Only after, only when, only if + inversión', example: 'Only after he left did she start crying. Only when I read it did I understand.', translation: 'Solo después de que él se fue empezó a llorar. Solo cuando lo leí lo entendí.' },
          { step: 'Only then, only there + inversion', stepEs: '', example: 'Only then did I realize my mistake.', translation: 'Solo entonces me di cuenta de mi error.' },
        ]
      }
    ],
    l1Contrast: {
      concept: 'Spanish does not have this inversion rule',
      conceptEs: 'El español no tiene esta regla de inversión',
      spanishBehavior: '"Nunca había visto tal belleza" — normal word order works fine in Spanish with "nunca" at the start',
      englishBehavior: '"Never had I seen such beauty" — auxiliary (had) must come before subject (I) in formal English',
      contrastExamples: [
        { english: 'Rarely does she complain.', spanish: 'Raramente se queja.', note: 'Normal order in Spanish; inversion required in formal English.' },
        { english: 'Not until midnight did they arrive.', spanish: 'No llegaron hasta medianoche.', note: 'Spanish keeps normal order; English inverts.' },
        { english: 'Had I known, I would have helped.', spanish: 'Si hubiera sabido, habría ayudado.', note: 'Formal conditional inversion — no "if" needed.' },
      ]
    },
    predictedErrors: [
      { error: 'Never I have seen this.', correction: 'Never have I seen this.', whyEs: 'Con adverbios negativos al inicio, el auxiliar debe ir ANTES del sujeto: Never + have + I.', frequency: 'very common' },
      { error: 'Not only she won, but she also...', correction: 'Not only did she win, but she also...', whyEs: '"Not only" al inicio requiere inversión con DO/DID en la primera cláusula.', frequency: 'common' },
      { error: 'Should you will need help...', correction: 'Should you need help...', whyEs: 'En la inversión condicional con "should", el verbo principal va en forma base (no will).', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ had I sat down when the phone rang.', question: 'Complete with inversion:', options: ['Barely', 'Just', 'Almost', 'Nearly'], correct: 0, explanationEs: '"Barely...when" es una construcción de inversión frecuente.' },
        { sentence: 'Not only _____ the prize, but she also received a scholarship.', question: 'Inversion after "not only":', options: ['she won', 'did she win', 'she did win', 'won she'], correct: 1, explanationEs: '"Not only" requiere inversión: did + sujeto + verbo base.' },
        { sentence: '_____ had we arrived when it started raining.', question: 'Complete with inversion:', options: ['Barely', 'Almost', 'Just', 'Nearly'], correct: 0, explanationEs: 'Barely/Scarcely/Hardly...when + inversión.' },
        { sentence: '_____ then did I understand the full picture.', question: 'Inversion after "only" phrase:', options: ['Only', 'Just', 'Only when', 'Only after'], correct: 0, explanationEs: 'Only then + inversion: did I understand.' },
        { sentence: '_____ I known, I would have helped.', question: 'Formal conditional inversion — no "if":', options: ['If', 'Had', 'If had', 'Had if'], correct: 1, explanationEs: 'Had I known = If I had known.' },
      ],
      controlled: [
        { prompt: 'Rewrite with inversion: If you have any complaints, please contact us.', promptEs: 'Reescribe con inversión: Si tienes quejas, por favor contáctenos.', answer: 'Should you have any complaints, please contact us.', hint: 'Should + subject + base verb (no "if")' },
        { prompt: 'Rewrite with inversion: I had never seen anything so beautiful.', promptEs: 'Reescribe con inversión: Nunca había visto nada tan hermoso.', answer: 'Never had I seen anything so beautiful.', hint: 'Never + had + I + rest of sentence' },
        { prompt: 'Rewrite with inversion: If I had realized the problem, I would have acted.', promptEs: 'Reescribe con inversión condicional formal:', answer: 'Had I realized the problem, I would have acted.', hint: 'Had + subject + past participle (remove "if")' },
        { prompt: 'Correct: Never I have seen such a mess.', promptEs: 'Corrige: Nunca he visto semejante desastre.', answer: 'Never have I seen such a mess.', hint: 'Never + auxiliary + subject' },
        { prompt: 'Rewrite with inversion: She rarely complains about anything.', promptEs: 'Reescribe con inversión: Rara vez se queja de nada.', answer: 'Rarely does she complain about anything.', hint: 'Rarely + does + subject + base verb' },
      ]
    },
    recycleInTopics: ['c1-cleft-sentences', 'c2-fronting-topicalization'],
    tipEs: '💡 La inversión es sobre todo escrita y formal. En inglés hablado informal, no se usa. Es muy útil en: correos formales, cartas, ensayos académicos y C1/C2 exams (CAE, CPE). El examinador la valora mucho.'
  },

  // ═══════════════════════════════════════════════
  // C1 — MODULE 2: Cleft Sentences
  // ═══════════════════════════════════════════════
  {
    id: 'c1-cleft-sentences',
    title: 'Cleft Sentences for Focus and Emphasis',
    titleEs: 'Oraciones Escindidas para Foco y Énfasis',
    level: 'C1',
    cefrLevel: 5,
    category: 'sentences',
    priority: 'high',
    prerequisiteIds: ['b1-passive-voice', 'c1-inversion'],
    explanation: 'Cleft sentences split a simple sentence into two clauses to place emphasis on a specific element. There are two main types: "It is/was...that/who" and "What...is/was". They are particularly common in spoken English for contrast and focus.',
    explanationEs: 'Las oraciones escindidas dividen una oración simple en dos cláusulas para poner énfasis en un elemento específico. Hay dos tipos principales: "It is/was...that/who" y "What...is/was". Son especialmente comunes en inglés hablado para contraste y foco.',
    formationRules: [
      {
        label: 'It-cleft: "It is/was + X + that/who..."',
        labelEs: 'It-cleft: "It is/was + X + that/who..."',
        formula: 'It + is/was + emphasized element + that/who + rest of sentence',
        steps: [
          { step: 'Emphasize Subject: It was Maria who called.', stepEs: 'Énfasis en el sujeto', example: 'It was Maria who called. (not John)', translation: 'Fue María quien llamó. (no John)' },
          { step: 'Emphasize Object: It was the report that I lost.', stepEs: 'Énfasis en el objeto', example: 'It was the report that I lost. (not my keys)', translation: 'Fue el informe lo que perdí. (no mis llaves)' },
          { step: 'Emphasize Time: It was in 1969 that man walked on the moon.', stepEs: 'Énfasis en el tiempo', example: 'It was in 1969 that man first walked on the moon.', translation: 'Fue en 1969 cuando el hombre pisó la luna por primera vez.' },
          { step: 'Emphasize Reason: It is because I care that I tell you this.', stepEs: 'Énfasis en la razón', example: 'It is because I care that I say this.', translation: 'Es porque me importa por lo que digo esto.' },
        ]
      },
      {
        label: 'Wh-cleft: "What + clause + is/was + X"',
        labelEs: 'Wh-cleft: "What + cláusula + is/was + X"',
        formula: 'What + subject + verb + is/was + emphasized element',
        steps: [
          { step: 'What I need is a holiday.', stepEs: 'Lo que necesito es unas vacaciones.', example: 'What I need is some rest. What she wants is recognition.', translation: 'Lo que quiero es descanso. Lo que quiere es reconocimiento.' },
          { step: 'Can emphasize verbs: What she did was ignore us.', stepEs: 'Puede enfatizar verbos', example: 'What he did was leave without saying goodbye.', translation: 'Lo que hizo fue irse sin decir adiós.' },
          { step: 'Reversed wh-cleft for even more emphasis: A holiday is what I need.', stepEs: 'Wh-cleft invertido para más énfasis', example: 'Extra support is what these students need.', translation: 'Apoyo extra es lo que estos estudiantes necesitan.' },
        ]
      }
    ],
    l1Contrast: {
      concept: 'Spanish has similar structures but formed differently',
      conceptEs: 'El español tiene estructuras similares pero formadas de manera diferente',
      spanishBehavior: 'Spanish: "Fue María quien llamó", "Lo que necesito es descanso" — these parallel the English cleft structures closely',
      englishBehavior: '"It was Maria who called", "What I need is rest" — very similar to Spanish in this case!',
      contrastExamples: [
        { english: 'It was YESTERDAY that I saw him. (not today)', spanish: 'Fue ayer cuando lo vi. (no hoy)', note: 'Very parallel to Spanish.' },
        { english: 'What surprised me was her reaction.', spanish: 'Lo que me sorprendió fue su reacción.', note: 'Almost identical structure.' },
        { english: 'It is the children who suffer most in war.', spanish: 'Son los niños quienes más sufren en la guerra.', note: 'Natural in both languages.' },
      ]
    },
    predictedErrors: [
      { error: 'It was Maria that she called.', correction: 'It was Maria who called.', whyEs: 'No se añade un sujeto extra (she) después del elemento enfatizado. La cláusula de relativo reemplaza al sujeto.', frequency: 'common' },
      { error: 'What I need it is a holiday.', correction: 'What I need is a holiday.', whyEs: 'No se añade un pronombre extra (it) antes del verbo "is". "What I need" ya es el sujeto.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ the noise that kept me awake, not the heat.', question: 'Complete the it-cleft:', options: ['It was', 'That was', 'What was', 'There was'], correct: 0, explanationEs: 'It-cleft: It was + elemento enfatizado + that...' },
        { sentence: '_____ I want is more time.', question: 'Complete the wh-cleft:', options: ['That', 'It', 'What', 'Which'], correct: 2, explanationEs: 'Wh-cleft: What + sujeto + verbo + is/was + elemento enfatizado.' },
        { sentence: '_____ was in 1969 that man first walked on the moon.', question: 'It-cleft for time emphasis:', options: ['That', 'It', 'What', 'When'], correct: 1, explanationEs: 'It was + tiempo + that...' },
        { sentence: '_____ made the difference was her support.', question: 'Wh-cleft — what caused the result:', options: ['It', 'That', 'What', 'Which'], correct: 2, explanationEs: 'What + verb + was + focus.' },
        { sentence: 'Correct: What I need it is a holiday.', question: 'Common Spanish speaker error:', options: ['What I need is a holiday.', 'What I need it is a holiday.', 'That I need is a holiday.', 'It I need is a holiday.'], correct: 0, explanationEs: 'No "it" extra. "What I need" ya es el sujeto.' },
        { sentence: '_____ the children who suffer most in war.', question: 'It-cleft for subject emphasis:', options: ['What is', 'It is', 'That is', 'They are'], correct: 1, explanationEs: 'It is + sujeto + who/that...' },
      ],
      controlled: [
        { prompt: 'Rewrite with cleft to emphasize "teamwork": Teamwork made us successful.', promptEs: 'Reescribe con oración escindida para enfatizar "teamwork":', answer: 'What made us successful was teamwork. / It was teamwork that made us successful.', hint: 'What/It...was/that' },
        { prompt: 'Rewrite with cleft to emphasize "her kindness": I remember her kindness most.', promptEs: 'Reescribe enfatizando "her kindness":', answer: "What I remember most is her kindness.", hint: 'What I remember most is...' },
        { prompt: 'Rewrite with it-cleft to emphasize "yesterday": I saw him yesterday.', promptEs: 'Reescribe con it-cleft enfatizando "yesterday":', answer: 'It was yesterday that I saw him.', hint: 'It was + focus + that + rest' },
        { prompt: 'Complete the wh-cleft: _____ surprised me was his reaction.', promptEs: 'Completa el wh-cleft: Lo que me sorprendió fue su reacción.', answer: 'What surprised me was his reaction.', hint: 'What + subject + verb + was + focus' },
        { prompt: 'Correct: It was Maria that she called.', promptEs: 'Corrige: Fue María quien llamó.', answer: 'It was Maria who called.', hint: 'No añadir sujeto extra (she) después del elemento enfatizado' },
      ]
    },
    recycleInTopics: ['c1-fronting', 'c2-pragmatic-emphasis'],
    tipEs: '💡 Las oraciones escindidas sirven para contrastar: "It was JOHN who broke it (not Peter)". En el inglés hablado se enfatiza con la voz. En el escrito, la estructura misma hace el trabajo. Son muy valoradas en el CAE y CPE.'
  },

  // ─── A2 ADDITIONAL MODULES ─────────────────────────────────────────────────

  {
    id: 'a2-past-continuous',
    title: 'Past Continuous',
    titleEs: 'Pasado Continuo',
    level: 'A2',
    cefrLevel: 2,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['a2-past-simple'],
    explanation: 'The Past Continuous describes an action that was in progress at a specific moment in the past, or a background action interrupted by a shorter past simple event.',
    explanationEs: 'El Past Continuous describe una acción que estaba en progreso en un momento específico del pasado, o una acción de fondo interrumpida por un evento más corto en Past Simple.',
    formationRules: [
      {
        label: 'Affirmative',
        labelEs: 'Afirmativo',
        formula: 'Subject + was/were + verb-ing',
        steps: [
          { step: 'Use WAS with I / he / she / it', stepEs: 'Usa WAS con I / he / she / it', example: 'She was sleeping.', translation: 'Ella estaba durmiendo.' },
          { step: 'Use WERE with you / we / they', stepEs: 'Usa WERE con you / we / they', example: 'They were playing.', translation: 'Ellos estaban jugando.' },
        ]
      },
      {
        label: 'Interrupted action (when/while)',
        labelEs: 'Acción interrumpida (when/while)',
        formula: 'Past Continuous (background) + when/while + Past Simple (interruption)',
        steps: [
          { step: 'The longer action uses Past Continuous', stepEs: 'La acción más larga usa Past Continuous', example: 'I was cooking when the phone rang.', translation: 'Estaba cocinando cuando sonó el teléfono.' },
          { step: '"While" introduces the continuous action', stepEs: '"While" introduce la acción continua', example: 'While I was reading, he arrived.', translation: 'Mientras leía, él llegó.' },
        ]
      },
    ],
    signalWords: [
      { word: 'when', meaning: 'introduces the interrupting event', meaningEs: 'introduce el evento interruptor' },
      { word: 'while', meaning: 'introduces the background action in progress', meaningEs: 'introduce la acción de fondo en progreso' },
      { word: 'at that moment / at 8 pm', meaning: 'specific point in time', meaningEs: 'momento específico del pasado' },
    ],
    l1Contrast: {
      concept: 'Background vs. interruption',
      conceptEs: 'Acción de fondo vs. interrupción',
      spanishBehavior: 'Spanish uses Imperfecto for background + Indefinido for interruption (yo leía cuando él llegó)',
      englishBehavior: 'English uses Past Continuous for background + Past Simple for interruption (I was reading when he arrived)',
      contrastExamples: [
        { english: 'I was watching TV when the lights went out.', spanish: 'Estaba viendo la tele cuando se fue la luz.', note: 'watching = was watching (continuous background); went out = past simple (interruption)' },
        { english: 'While I was cooking, the phone rang.', spanish: 'Mientras cocinaba, sonó el teléfono.', note: '"While" introduces the longer background action — must use Past Continuous.' },
        { english: 'She was driving to work when she saw the accident.', spanish: 'Conducía al trabajo cuando vio el accidente.', note: 'Background (driving) = Past Continuous; short event (saw) = Past Simple.' },
      ]
    },
    predictedErrors: [
      { error: 'I was watch TV.', correction: 'I was watching TV.', whyEs: 'El auxiliar was/were necesita el gerundio (-ing).', frequency: 'very common' },
      { error: 'While I read, he called.', correction: 'While I was reading, he called.', whyEs: 'Con while, la acción de fondo debe estar en Past Continuous, no Past Simple.', frequency: 'very common' },
      { error: 'She were sleeping.', correction: 'She was sleeping.', whyEs: 'She es singular → was, no were.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'They _____ football when it started to rain.', question: 'Choose the correct form:', options: ['played', 'were playing', 'play', 'are playing'], correct: 1, explanationEs: '"when it started to rain" indica interrupción → la acción de fondo es Past Continuous.' },
        { sentence: 'While she _____ a shower, someone knocked.', question: 'Choose the correct form:', options: ['had', 'has', 'was having', 'is having'], correct: 2, explanationEs: '"While" + acción de fondo en progreso → Past Continuous.' },
        { sentence: 'I _____ dinner when the doorbell rang.', question: 'Background action in progress:', options: ['cooked', 'was cooking', 'cook', 'am cooking'], correct: 1, explanationEs: 'La acción de fondo (cocinar) estaba en progreso cuando sonó el timbre.' },
        { sentence: 'At 9 pm last night, we _____ a film.', question: 'Action at a specific moment in the past:', options: ['watched', 'were watching', 'watch', 'have watched'], correct: 1, explanationEs: '"At 9 pm" = momento específico → Past Continuous.' },
        { sentence: 'She _____ her homework when her laptop crashed.', question: 'Long action interrupted by short event:', options: ['did', 'was doing', 'does', 'had done'], correct: 1, explanationEs: 'Acción larga (hacer deberes) interrumpida → was doing.' },
      ],
      controlled: [
        { prompt: 'What were you doing at 10 pm yesterday?', promptEs: '¿Qué estabas haciendo a las 10 pm ayer?', answer: 'I was [sleeping / watching TV / reading]...', hint: 'was/were + verb-ing' },
        { prompt: 'Complete: "I _____ (study) when my friend _____ (call) me."', promptEs: 'Completa con los tiempos correctos:', answer: 'I was studying when my friend called me.', hint: 'Past Continuous + Past Simple' },
        { prompt: 'Complete: "While she _____ (drive) to work, she _____ (see) an accident."', promptEs: 'Completa: Mientras conducía al trabajo, vio un accidente.', answer: 'was driving / saw', hint: 'While + Past Continuous; short event = Past Simple' },
        { prompt: 'Answer: "What were you doing when the power went out?"', promptEs: 'Responde: ¿Qué estabas haciendo cuando se fue la luz?', answer: 'I was [watching TV / cooking / working / etc.] when the power went out.', hint: 'was/were + verb-ing' },
        { prompt: 'Complete: "The phone _____ (ring) while I _____ (have) a shower."', promptEs: 'Completa: El teléfono sonó mientras me duchaba.', answer: 'rang / was having', hint: 'Short event = Past Simple; background = Past Continuous' },
      ]
    },
    recycleInTopics: ['b1-past-perfect', 'b1-narrative-tenses'],
    tipEs: '💡 Truco mental: el Past Continuous es la "película de fondo" y el Past Simple es el "evento que interrumpe". Imagina que estás grabando — la cámara ya estaba grabando (continuous) cuando algo pasó (simple).'
  },

  {
    id: 'a2-going-to-vs-will',
    title: 'Going to vs. Will — Future Forms',
    titleEs: 'Going to vs. Will — Formas de Futuro',
    level: 'A2',
    cefrLevel: 2,
    category: 'verbs',
    priority: 'critical',
    prerequisiteIds: ['a1-present-simple', 'a2-present-continuous'],
    explanation: 'English has two main future forms at A2 level: "going to" for plans and predictions based on present evidence, and "will" for spontaneous decisions and general predictions.',
    explanationEs: 'El inglés tiene dos formas principales de futuro en A2: "going to" para planes ya decididos y predicciones basadas en evidencia presente, y "will" para decisiones espontáneas y predicciones generales.',
    formationRules: [
      {
        label: 'Going to — plans and evidence-based predictions',
        labelEs: 'Going to — planes y predicciones con evidencia',
        formula: 'Subject + am/is/are + going to + base verb',
        steps: [
          { step: 'Use for plans decided before the moment of speaking', stepEs: 'Para planes decididos antes del momento de hablar', example: "I'm going to visit my parents this weekend.", translation: 'Voy a visitar a mis padres este fin de semana.' },
          { step: 'Use when you can see evidence something will happen', stepEs: 'Cuando puedes ver evidencia de que algo va a ocurrir', example: 'Look at those clouds — it\'s going to rain.', translation: 'Mira esas nubes — va a llover.' },
        ]
      },
      {
        label: 'Will — spontaneous decisions and general predictions',
        labelEs: 'Will — decisiones espontáneas y predicciones generales',
        formula: 'Subject + will + base verb',
        steps: [
          { step: 'Use for decisions made at the moment of speaking', stepEs: 'Para decisiones tomadas en el momento de hablar', example: "The phone is ringing — I'll answer it!", translation: 'Está sonando el teléfono — ¡lo cojo yo!' },
          { step: 'Use for general future predictions (no evidence)', stepEs: 'Para predicciones futuras generales (sin evidencia visible)', example: 'I think robots will replace many jobs.', translation: 'Creo que los robots reemplazarán muchos empleos.' },
        ]
      },
    ],
    signalWords: [
      { word: 'I think / I believe', meaning: 'signals general prediction → will', meaningEs: 'señala predicción general → will' },
      { word: 'Look! / Watch out!', meaning: 'visible evidence → going to', meaningEs: 'evidencia visible → going to' },
      { word: 'I\'ve decided to...', meaning: 'pre-decided plan → going to', meaningEs: 'plan ya decidido → going to' },
    ],
    l1Contrast: {
      concept: 'Future tense vs. two future forms',
      conceptEs: 'Un solo futuro en español vs. dos formas de futuro en inglés',
      spanishBehavior: 'Spanish often uses one future form (iré / voy a ir) — both can be interchangeable in many contexts',
      englishBehavior: 'English distinguishes: "will" = spontaneous/general; "going to" = planned/evidence-based. Mixing them causes register errors.',
      contrastExamples: [
        { english: "A: The phone is ringing! B: I'll get it! (spontaneous)", spanish: '¡Ya lo cojo yo! (decisión en el momento)', note: 'NOT "I\'m going to get it" — that would imply you had planned to answer it in advance.' },
        { english: "I'm going to study medicine. (plan)", spanish: 'Voy a estudiar medicina. (plan)', note: 'NOT "I will study medicine" unless you\'re just predicting/stating it generally.' },
        { english: "Look at those clouds — it's going to rain! (evidence)", spanish: 'Mira esas nubes — va a llover!', note: 'Visible evidence → going to. NOT "it will rain" when you can see the clouds.' },
        { english: "I think prices will rise next year. (general prediction)", spanish: 'Creo que los precios subirán el año que viene.', note: 'No visible evidence, just opinion → will.' },
      ]
    },
    predictedErrors: [
      { error: 'I will go to the cinema tonight. (when it\'s a plan)', correction: "I'm going to go to the cinema tonight.", whyEs: 'Para planes ya decididos, se usa going to, no will.', frequency: 'very common' },
      { error: "Look, it will rain! (seeing dark clouds)", correction: "Look, it's going to rain!", whyEs: 'Con evidencia visible, se usa going to.', frequency: 'very common' },
      { error: 'I am not going to will eat that.', correction: "I'm not going to eat that. / I won't eat that.", whyEs: 'No se mezclan going to y will en la misma frase.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: 'The phone is ringing. "Don\'t worry, _____ answer it."', question: 'Which fits best?', options: ["I'm going to", "I will", 'I am', 'I shall'], correct: 1, explanationEs: 'Decisión espontánea en el momento → will.' },
        { sentence: 'I\'ve booked a flight. _____ fly to Tokyo next week.', question: 'Which fits best?', options: ["I'll", "I'm going to", 'I am', 'I will be'], correct: 1, explanationEs: 'Plan ya decidido (vuelo reservado) → going to.' },
        { sentence: 'Look at those dark clouds! It _____ rain.', question: 'Visible evidence:', options: ['will', "is going to", 'shall', 'is'], correct: 1, explanationEs: 'Evidencia visible (nubes) → going to.' },
        { sentence: 'A: "I\'m thirsty." B: "_____ get you some water."', question: 'Spontaneous offer:', options: ["I'm going to", "I'll", 'I am', 'I would'], correct: 1, explanationEs: 'Ofrecimiento en el momento → will.' },
        { sentence: 'We\'ve arranged everything. We _____ get married in June.', question: 'Pre-decided plan:', options: ['will', "are going to", 'are', 'will be'], correct: 1, explanationEs: 'Plan ya organizado → going to.' },
      ],
      controlled: [
        { prompt: 'Tell your partner about one plan you have for next weekend.', promptEs: 'Cuéntale a tu compañero un plan que tienes para el próximo fin de semana.', answer: "I'm going to [visit/do/watch/go]...", hint: 'Use going to for plans.' },
        { prompt: 'React spontaneously: Someone drops their bag.', promptEs: 'Reacciona espontáneamente: alguien se le cae la bolsa.', answer: "I'll pick it up for you!", hint: "Use will for spontaneous decision." },
        { prompt: 'Complete: They _____ (buy) a new car. They\'ve decided.', promptEs: 'Completa: Van a comprar un coche nuevo. Ya lo decidieron.', answer: "are going to buy", hint: 'Plan decidido → going to' },
        { prompt: 'Complete: A: "The doorbell!" B: "I _____ (get) it."', promptEs: 'Completa: A: "¡El timbre!" B: "Yo..."', answer: "I'll get it", hint: 'Decisión espontánea → will' },
        { prompt: 'Complete: I think prices _____ (rise) next year.', promptEs: 'Completa: Creo que los precios subirán el año que viene.', answer: 'will rise', hint: 'Predicción general sin evidencia → will' },
      ]
    },
    recycleInTopics: ['b1-future-continuous', 'b1-future-perfect', 'b2-future-in-the-past'],
    tipEs: '💡 Regla mental rápida: "going to" = tengo evidencia o ya lo decidí antes; "will" = lo decido AHORA mismo o es solo mi opinión sobre el futuro. Si puedes decir "ya tenía pensado esto", usa going to.'
  },

  {
    id: 'a2-comparatives-superlatives',
    title: 'Comparatives and Superlatives',
    titleEs: 'Comparativos y Superlativos',
    level: 'A2',
    cefrLevel: 2,
    category: 'adjectives',
    priority: 'critical',
    prerequisiteIds: ['a1-present-simple'],
    explanation: 'Comparatives compare two things; superlatives identify the extreme in a group. Short adjectives add -er/-est; long adjectives use more/most.',
    explanationEs: 'Los comparativos comparan dos elementos; los superlativos identifican el extremo en un grupo. Los adjetivos cortos añaden -er/-est; los largos usan more/most.',
    formationRules: [
      {
        label: 'Short adjectives (1 syllable): add -er / -est',
        labelEs: 'Adjetivos cortos (1 sílaba): añadir -er / -est',
        formula: 'adj + -er than / the + adj + -est',
        steps: [
          { step: 'Comparative: adjective + -er + than', stepEs: 'Comparativo: adjetivo + -er + than', example: 'My car is faster than yours.', translation: 'Mi coche es más rápido que el tuyo.' },
          { step: 'Superlative: the + adjective + -est', stepEs: 'Superlativo: the + adjetivo + -est', example: 'This is the tallest building in the city.', translation: 'Este es el edificio más alto de la ciudad.' },
          { step: 'Spelling: CVC → double final consonant', stepEs: 'Ortografía: consonante-vocal-consonante → doblar consonante final', example: 'big → bigger / biggest; hot → hotter / hottest', translation: 'grande → más grande / el más grande' },
        ]
      },
      {
        label: 'Long adjectives (2+ syllables): use more/most',
        labelEs: 'Adjetivos largos (2+ sílabas): usar more/most',
        formula: 'more + adj + than / the most + adj',
        steps: [
          { step: 'Comparative: more + adjective + than', stepEs: 'Comparativo: more + adjetivo + than', example: 'London is more expensive than Madrid.', translation: 'Londres es más caro que Madrid.' },
          { step: 'Superlative: the most + adjective', stepEs: 'Superlativo: the most + adjetivo', example: 'It was the most interesting film I have seen.', translation: 'Fue la película más interesante que he visto.' },
        ]
      },
      {
        label: 'Irregular forms',
        labelEs: 'Formas irregulares',
        steps: [
          { step: 'good → better → best', stepEs: 'bueno → mejor → el mejor', example: 'Her Spanish is better than mine.', translation: 'Su español es mejor que el mío.' },
          { step: 'bad → worse → worst', stepEs: 'malo → peor → el peor', example: 'This is the worst coffee I have ever had.', translation: 'Este es el peor café que he tomado.' },
          { step: 'far → further/farther → furthest/farthest', stepEs: 'lejos → más lejos → el más lejos', example: 'The station is further than I thought.', translation: 'La estación está más lejos de lo que pensaba.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Position and structure of comparison',
      conceptEs: 'Posición y estructura de la comparación',
      spanishBehavior: 'Spanish: más + adj + que / el/la más + adj. The adjective never changes form.',
      englishBehavior: 'English changes the adjective form (faster / more expensive). Never use "more faster" — choose ONE method.',
      contrastExamples: [
        { english: 'She is more intelligent than him.', spanish: 'Ella es más inteligente que él.', note: 'Long adjective → "more" in English; "más" + adjective in Spanish.' },
        { english: 'He is taller than his brother.', spanish: 'Es más alto que su hermano.', note: 'Short adjective → -er in English; "más" + adjective in Spanish.' },
        { english: 'This is the best pizza I\'ve ever had.', spanish: 'Esta es la mejor pizza que he probado.', note: 'Irregular: good → better → best. Never "the most best".' },
        { english: 'She is more beautiful than her sister.', spanish: 'Es más guapa que su hermana.', note: '2+ syllables → more + adjective. Spanish always uses "más".' },
      ]
    },
    predictedErrors: [
      { error: 'She is more taller than me.', correction: 'She is taller than me.', whyEs: 'No se mezclan -er y "more". "Tall" es corto → solo -er.', frequency: 'very common' },
      { error: 'This is the most best pizza.', correction: 'This is the best pizza.', whyEs: '"Best" ya es superlativo irregular. No añadir "most".', frequency: 'common' },
      { error: 'He is more old than her.', correction: 'He is older than her.', whyEs: '"Old" es monosílabo → -er, no "more".', frequency: 'common' },
      { error: 'It is the interestingest film.', correction: 'It is the most interesting film.', whyEs: '"Interesting" tiene 4 sílabas → the most, no -est.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: 'A cheetah is _____ an elephant. (fast)', question: 'Complete with comparative:', options: ['more fast than', 'faster than', 'fastest than', 'the fastest than'], correct: 1, explanationEs: '"Fast" es monosílabo → faster than.' },
        { sentence: 'It was _____ day of my life. (happy)', question: 'Complete with superlative:', options: ['the most happiest', 'the happier', 'the happiest', 'most happy'], correct: 2, explanationEs: '"Happy" (2 sílabas, -y) → the happiest (y→i+est).' },
      ],
      controlled: [
        { prompt: 'Compare two cities you know using bigger, more expensive, more beautiful.', promptEs: 'Compara dos ciudades que conozcas usando comparativos.', answer: '[City A] is bigger/more expensive/more beautiful than [City B].', hint: '-er than / more...than' },
        { prompt: "What is the most difficult subject you've studied?", promptEs: '¿Cuál es la asignatura más difícil que has estudiado?', answer: 'The most difficult subject I have studied is...', hint: 'the most + adjective' },
      ]
    },
    recycleInTopics: ['b1-as-as-comparisons', 'b2-modified-comparisons'],
    tipEs: '💡 Regla de las sílabas: 1 sílaba → -er/-est (fast/faster/fastest). 2+ sílabas → more/most (beautiful/more beautiful). Excepción: adjetivos de 2 sílabas terminados en -y, -er, -ow, -le también usan -er/-est (easy→easier, clever→cleverer).'
  },

  {
    id: 'a2-countable-uncountable',
    title: 'Countable and Uncountable Nouns — Quantifiers',
    titleEs: 'Sustantivos Contables e Incontables — Cuantificadores',
    level: 'A2',
    cefrLevel: 2,
    category: 'nouns',
    priority: 'critical',
    prerequisiteIds: ['a1-plurals', 'a1-articles'],
    explanation: 'Countable nouns can be counted (one apple, two apples). Uncountable nouns cannot be counted and have no plural (water, advice, money). Different quantifiers are used for each type.',
    explanationEs: 'Los sustantivos contables se pueden contar (one apple, two apples). Los incontables no se pueden contar y no tienen plural (water, advice, money). Cada tipo usa cuantificadores distintos.',
    formationRules: [
      {
        label: 'Quantifiers for COUNTABLE nouns',
        labelEs: 'Cuantificadores para sustantivos CONTABLES',
        steps: [
          { step: 'a / an (singular); some / any (plural)', stepEs: 'a/an (singular); some/any (plural)', example: 'I need a pen. I have some books. Have you got any questions?', translation: 'Necesito un boli. Tengo algunos libros. ¿Tienes alguna pregunta?' },
          { step: 'How many...? for questions', stepEs: 'How many...? para preguntas', example: 'How many chairs are there?', translation: '¿Cuántas sillas hay?' },
          { step: 'a few (some), few (almost none)', stepEs: 'a few (algunos), few (casi ninguno)', example: 'I have a few friends here. / I have few friends — I\'m lonely.', translation: 'Tengo algunos amigos aquí. / Tengo pocos amigos — estoy solo.' },
        ]
      },
      {
        label: 'Quantifiers for UNCOUNTABLE nouns',
        labelEs: 'Cuantificadores para sustantivos INCONTABLES',
        steps: [
          { step: 'some / any — no article "a/an"', stepEs: 'some / any — sin artículo "a/an"', example: 'I need some information. Is there any water?', translation: 'Necesito información. ¿Hay agua?' },
          { step: 'How much...? for questions', stepEs: 'How much...? para preguntas', example: 'How much money do you have?', translation: '¿Cuánto dinero tienes?' },
          { step: 'a little (some), little (almost none)', stepEs: 'a little (algo), little (casi nada)', example: 'Add a little salt. There is little hope.', translation: 'Añade un poco de sal. Hay poca esperanza.' },
          { step: 'Partitives: a piece of, a cup of, a bottle of...', stepEs: 'Partitivos: a piece of, a cup of, a bottle of...', example: 'a piece of advice, a cup of coffee, a bottle of water', translation: 'un consejo, una taza de café, una botella de agua' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Nouns that are uncountable in English but countable in Spanish',
      conceptEs: 'Sustantivos incontables en inglés pero contables en español',
      spanishBehavior: 'Spanish: "un consejo" (a piece of advice), "una información" (a piece of information), "unos muebles" (some furniture)',
      englishBehavior: 'English: advice, information, furniture, luggage, news, progress, research are UNCOUNTABLE — no "an advice", no "informations".',
      contrastExamples: [
        { english: 'Let me give you some advice. (NOT "an advice")', spanish: 'Déjame darte un consejo.', note: '"Advice" is uncountable in English. Use "a piece of advice" if you want to count it.' },
        { english: 'The news is bad today. (NOT "the news are")', spanish: 'Las noticias son malas hoy.', note: '"News" is grammatically singular/uncountable in English.' },
        { english: 'I need some information. (NOT "informations")', spanish: 'Necesito información / unas informaciones.', note: '"Information" has no plural in English.' },
        { english: 'We have a lot of furniture. (NOT "furnitures")', spanish: 'Tenemos muchos muebles.', note: '"Furniture" is uncountable; use "a lot of" or "pieces of furniture".' },
      ]
    },
    predictedErrors: [
      { error: 'Can you give me an advice?', correction: 'Can you give me some advice? / a piece of advice?', whyEs: '"Advice" es incontable en inglés — no lleva "a/an".', frequency: 'very common' },
      { error: 'I have many homeworks.', correction: 'I have a lot of homework.', whyEs: '"Homework" es incontable — no tiene plural y no usa "many".', frequency: 'very common' },
      { error: 'How many money do you have?', correction: 'How much money do you have?', whyEs: '"Money" es incontable → How much, no How many.', frequency: 'very common' },
      { error: 'I need some informations.', correction: 'I need some information.', whyEs: '"Information" es incontable — sin plural.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'How _____ sugar do you want?', question: 'many or much?', options: ['many', 'much', 'few', 'any'], correct: 1, explanationEs: '"Sugar" es incontable → How much.' },
        { sentence: 'I only have _____ friends in this city.', question: 'a few or a little?', options: ['a little', 'a few', 'little', 'much'], correct: 1, explanationEs: '"Friends" es contable → a few.' },
        { sentence: 'Can you give me _____ advice about the interview?', question: 'some or a?', options: ['an', 'a', 'some', 'any'], correct: 2, explanationEs: '"Advice" es incontable → some (nunca "an advice").' },
        { sentence: 'I need _____ information about the flight.', question: 'Correct quantifier:', options: ['an information', 'some information', 'informations', 'many information'], correct: 1, explanationEs: '"Information" es incontable: some + singular, sin plural.' },
        { sentence: 'There is _____ traffic today. I was late.', question: 'a lot of or many?', options: ['many', 'a lot of', 'much', 'lots'], correct: 1, explanationEs: '"Traffic" es incontable → a lot of (no "many traffic").' },
      ],
      controlled: [
        { prompt: 'Ask about: water / books / time / chairs / money / friends', promptEs: 'Haz preguntas con How much / How many:', answer: 'How much water / how many books / how much time / how many chairs / how much money / how many friends', hint: 'How much (uncountable) / How many (countable)' },
        { prompt: 'Correct: I have many homeworks to do.', promptEs: 'Corrige: Tengo muchas tareas que hacer.', answer: 'I have a lot of homework to do.', hint: 'Homework es incontable' },
        { prompt: 'Complete: I need _____ (advice) about my career.', promptEs: 'Completa: Necesito consejos sobre mi carrera.', answer: 'some advice', hint: 'Advice incontable → some, sin plural' },
        { prompt: 'Complete: How _____ luggage do you have?', promptEs: 'Completa: ¿Cuánto equipaje tienes?', answer: 'much', hint: 'Luggage es incontable' },
        { prompt: 'Complete: There are _____ people at the meeting.', promptEs: 'Completa: Hay algunas personas en la reunión.', answer: 'a few', hint: 'People contable → a few' },
      ]
    },
    recycleInTopics: ['b1-quantifiers-advanced', 'b2-determiners'],
    tipEs: '💡 Lista de incontables que engañan a los hispanohablantes: advice, information, news, furniture, luggage, baggage, homework, progress, research, knowledge, traffic, weather, music. Ninguno tiene plural ni va con a/an.'
  },

  {
    id: 'a2-can-could-modals',
    title: 'Can, Could and Would — Basic Modals',
    titleEs: 'Can, Could y Would — Modales Básicos',
    level: 'A2',
    cefrLevel: 2,
    category: 'verbs',
    priority: 'critical',
    prerequisiteIds: ['a1-present-simple'],
    explanation: 'Can expresses ability and permission. Could is the past of can and is also used for polite requests. Would is used for polite offers and requests.',
    explanationEs: 'Can expresa habilidad y permiso. Could es el pasado de can y también se usa para peticiones educadas. Would se usa para ofrecimientos y peticiones educadas.',
    formationRules: [
      {
        label: 'CAN — ability and permission',
        labelEs: 'CAN — habilidad y permiso',
        formula: 'Subject + can/cannot + base verb',
        steps: [
          { step: 'Ability: can = know how to do something', stepEs: 'Habilidad: can = saber hacer algo', example: 'She can speak three languages.', translation: 'Ella habla tres idiomas (sabe hacerlo).' },
          { step: 'Permission: Can I...? = asking if allowed', stepEs: 'Permiso: Can I...? = pedir permiso', example: 'Can I leave early today?', translation: '¿Puedo salir antes hoy?' },
          { step: 'Negative: cannot / can\'t', stepEs: 'Negativo: cannot / can\'t', example: "I can't swim.", translation: 'No sé nadar.' },
        ]
      },
      {
        label: 'COULD — past ability and polite requests',
        labelEs: 'COULD — habilidad pasada y peticiones educadas',
        steps: [
          { step: 'Past ability: could = was able to (general)', stepEs: 'Habilidad pasada: could = era capaz de (general)', example: 'When I was young, I could run very fast.', translation: 'Cuando era joven, podía correr muy rápido.' },
          { step: 'Polite request: Could you...? (more formal than can)', stepEs: 'Petición educada: Could you...? (más formal que can)', example: 'Could you help me, please?', translation: '¿Podría ayudarme, por favor?' },
        ]
      },
      {
        label: 'WOULD — polite offers and requests',
        labelEs: 'WOULD — ofrecimientos y peticiones educadas',
        steps: [
          { step: "Would you like...? = polite offer", stepEs: "Would you like...? = ofrecimiento educado", example: 'Would you like a coffee?', translation: '¿Quieres / Le apetece un café?' },
          { step: "I'd like... = polite way to state what you want", stepEs: "I'd like... = forma educada de pedir algo", example: "I'd like a table for two, please.", translation: 'Quisiera una mesa para dos, por favor.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Modal verbs do not change form',
      conceptEs: 'Los verbos modales no cambian de forma',
      spanishBehavior: 'Spanish conjugates: puedo, puedes, puede, podemos, podéis, pueden',
      englishBehavior: 'English modals NEVER add -s/-ed. "She can" (NOT "she cans"). "He could" (NOT "he coulds"). No infinitive "to" after them.',
      contrastExamples: [
        { english: 'She can drive. (NOT "she cans" / NOT "she can to drive")', spanish: 'Ella sabe conducir / Ella puede conducir.', note: 'No -s in third person; no "to" after can/could/would.' },
        { english: 'He must go. (NOT "he musts" / NOT "he must to go")', spanish: 'Él debe ir.', note: 'Modals never add -s for 3rd person; no "to" before the main verb.' },
        { english: 'Would you like a coffee? (NOT "would you like to a coffee")', spanish: '¿Quieres un café?', note: 'Would you like + noun. For verb: Would you like to have a coffee?' },
      ]
    },
    predictedErrors: [
      { error: 'She cans play the piano.', correction: 'She can play the piano.', whyEs: 'Los modales nunca añaden -s en tercera persona.', frequency: 'very common' },
      { error: 'I can to swim.', correction: 'I can swim.', whyEs: 'Después de los modales, NO se usa "to" antes del infinitivo.', frequency: 'very common' },
      { error: "He couldn't to come.", correction: "He couldn't come.", whyEs: 'Mismo error: modal + base verb, sin "to".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'When he was five, he _____ read already.', question: 'Choose correctly:', options: ['can', 'could', 'would', 'should'], correct: 1, explanationEs: 'Habilidad en el pasado → could.' },
        { sentence: '_____ you like some more tea?', question: 'Polite offer:', options: ['Can', 'Could', 'Would', 'Should'], correct: 2, explanationEs: '"Would you like...?" es la fórmula estándar para ofrecimientos educados.' },
        { sentence: 'She _____ speak three languages. She\'s a translator.', question: 'Present ability:', options: ['cans', 'can', 'could', 'is can'], correct: 1, explanationEs: 'Habilidad en presente → can. Los modales no llevan -s.' },
        { sentence: '_____ I use your phone? Mine is dead.', question: 'Asking permission:', options: ['Would', 'Could', 'Can', 'Should'], correct: 2, explanationEs: '"Can I...?" pide permiso de forma directa. Could también es correcto (más formal).' },
        { sentence: 'I\'d like _____ a table for two, please.', question: 'Polite request:', options: ['to book', 'book', 'booking', 'booked'], correct: 0, explanationEs: '"I\'d like to + infinitive" es la forma educada de pedir algo.' },
      ],
      controlled: [
        { prompt: 'Ask a classmate politely to open the window.', promptEs: 'Pide educadamente a un compañero que abra la ventana.', answer: 'Could you open the window, please? / Would you mind opening the window?', hint: 'Could you...? / Would you...?' },
        { prompt: 'Tell someone 3 things you could do as a child that you cannot do now.', promptEs: 'Cuenta 3 cosas que podías hacer de niño pero ahora no puedes.', answer: 'When I was a child, I could... but now I can\'t...', hint: 'could (past) vs. can\'t (present)' },
        { prompt: 'Correct: She cans play the piano.', promptEs: 'Corrige: Ella sabe tocar el piano.', answer: 'She can play the piano.', hint: 'Los modales nunca llevan -s' },
        { prompt: 'Correct: I can to swim.', promptEs: 'Corrige: Sé nadar.', answer: 'I can swim.', hint: 'Modal + verbo base, sin "to"' },
        { prompt: 'Complete: _____ you like _____ (have) dinner with us tonight?', promptEs: 'Completa: ¿Te gustaría cenar con nosotros esta noche?', answer: 'Would you like to have dinner with us tonight?', hint: 'Would you like + to-infinitive' },
      ]
    },
    recycleInTopics: ['b1-modal-deduction', 'b1-modal-obligation', 'b2-modal-perfects'],
    tipEs: '💡 Los modales en inglés son los verbos más cortos y más usados. Regla de oro: modal + base verb (sin to, sin -s, sin -ed). "Would you like?" y "Could you?" son imprescindibles para sonar educado en inglés.'
  },

  {
    id: 'a2-must-have-to-should',
    title: 'Must, Have to, Should — Obligation and Advice',
    titleEs: 'Must, Have to, Should — Obligación y Consejo',
    level: 'A2',
    cefrLevel: 2,
    category: 'verbs',
    priority: 'critical',
    prerequisiteIds: ['a1-present-simple', 'a2-can-could-modals'],
    explanation: 'Must expresses strong obligation (internal or from rules). Have to expresses external obligation or necessity. Should gives advice or recommendation. Mustn\'t means prohibition (you must NOT do it). Don\'t have to means no obligation — it is optional (NOT the same as mustn\'t!). This distinction is critical: mustn\'t = forbidden; don\'t have to = not necessary.',
    explanationEs: 'Must expresa obligación fuerte (interna o de reglas). Have to expresa obligación externa o necesidad. Should da consejo o recomendación. Mustn\'t significa prohibición (no debes hacerlo). Don\'t have to significa que no hay obligación — es opcional (¡NO es lo mismo que mustn\'t!). Esta distinción es crítica: mustn\'t = prohibido; don\'t have to = no es necesario.',
    formationRules: [
      {
        label: 'MUST — internal obligation, rules',
        labelEs: 'MUST — obligación interna, reglas',
        formula: 'Subject + must + base verb',
        steps: [
          { step: 'Strong obligation (internal feeling or rule)', stepEs: 'Obligación fuerte (sentimiento interno o regla)', example: 'I must finish this today. You must wear a seatbelt.', translation: 'Debo terminar esto hoy. Debes llevar cinturón.' },
          { step: 'Mustn\'t = prohibition (you must NOT)', stepEs: 'Mustn\'t = prohibición (no debes)', example: "You mustn't smoke here. Students mustn't use phones in class.", translation: 'No debes fumar aquí. Los estudiantes no deben usar móviles en clase.' },
          { step: 'No -s in 3rd person; no "to" after must', stepEs: 'Sin -s en 3ª persona; sin "to" después de must', example: 'He must go. (NOT he musts / NOT he must to go)', translation: 'Él debe ir.' },
        ]
      },
      {
        label: 'HAVE TO — external obligation, necessity',
        labelEs: 'HAVE TO — obligación externa, necesidad',
        formula: 'Subject + have/has to + base verb',
        steps: [
          { step: 'External obligation (boss, law, situation)', stepEs: 'Obligación externa (jefe, ley, situación)', example: 'I have to work on Saturday. She has to get up early.', translation: 'Tengo que trabajar el sábado. Ella tiene que levantarse temprano.' },
          { step: "Don't have to = no obligation (optional)", stepEs: "Don't have to = no hay obligación (opcional)", example: "You don't have to come. (It's optional — you can if you want)", translation: 'No tienes que venir. (Es opcional)' },
          { step: 'CRITICAL: mustn\'t ≠ don\'t have to', stepEs: 'CRÍTICO: mustn\'t ≠ don\'t have to', example: "You mustn't drink and drive. (forbidden) vs You don't have to drive. (optional)", translation: 'No debes beber y conducir. (prohibido) vs No tienes que conducir. (opcional)' },
        ]
      },
      {
        label: 'SHOULD — advice, recommendation',
        labelEs: 'SHOULD — consejo, recomendación',
        formula: 'Subject + should + base verb',
        steps: [
          { step: 'Advice (softer than must)', stepEs: 'Consejo (más suave que must)', example: 'You should see a doctor. He should study more.', translation: 'Deberías ir al médico. Debería estudiar más.' },
          { step: "Shouldn't = negative advice", stepEs: "Shouldn't = consejo negativo", example: "You shouldn't eat so much sugar.", translation: 'No deberías comer tanto azúcar.' },
          { step: 'No "to" after should', stepEs: 'Sin "to" después de should', example: 'You should go. (NOT you should to go)', translation: 'Deberías ir.' },
        ]
      }
    ],
    l1Contrast: {
      concept: 'Spanish "deber" vs "tener que" — similar but nuance differs',
      conceptEs: 'Español "deber" vs "tener que" — similar pero la matiz difiere',
      spanishBehavior: 'Spanish uses "deber" for must and "tener que" for have to. "No debes" = mustn\'t (prohibition). "No tienes que" = don\'t have to (optional). The negative forms map well, but learners often confuse mustn\'t and don\'t have to.',
      englishBehavior: 'Mustn\'t = prohibition (strong). Don\'t have to = no obligation (you can choose). "You mustn\'t tell anyone" ≠ "You don\'t have to tell anyone" — the first forbids, the second says it\'s optional.',
      contrastExamples: [
        { english: "You mustn't smoke here.", spanish: 'No debes fumar aquí.', note: 'Prohibition — both map well.' },
        { english: "You don't have to come.", spanish: 'No tienes que venir.', note: 'Optional — no obligation. Different from mustn\'t!' },
        { english: 'He must go. (NOT he musts)', spanish: 'Él debe ir.', note: 'Modals never add -s in English.' },
        { english: 'You should study. (NOT "should to study")', spanish: 'Deberías estudiar.', note: 'No "to" after should, must, can, etc.' },
      ]
    },
    predictedErrors: [
      { error: "You mustn't come tomorrow. (meaning: it's optional)", correction: "You don't have to come tomorrow.", whyEs: 'Mustn\'t = prohibido. Si es opcional, usa "don\'t have to".', frequency: 'very common' },
      { error: 'I must to go now.', correction: 'I must go now.', whyEs: 'Después de must, can, should NO se usa "to".', frequency: 'very common' },
      { error: 'He musts finish the report.', correction: 'He must finish the report.', whyEs: 'Los modales nunca añaden -s en 3ª persona.', frequency: 'very common' },
      { error: 'You should to study more.', correction: 'You should study more.', whyEs: 'Should + verbo base, sin "to".', frequency: 'very common' },
      { error: "You don't have to park here. (meaning: it's forbidden)", correction: "You mustn't park here.", whyEs: 'Si está prohibido, usa mustn\'t. Don\'t have to = opcional.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'It\'s optional — you _____ come if you don\'t want to.', question: 'Optional = no obligation:', options: ["mustn't", "don't have to", "shouldn't", "must"], correct: 1, explanationEs: 'Opcional = don\'t have to. Mustn\'t = prohibido.' },
        { sentence: 'Smoking _____ in this building. It\'s forbidden.', question: 'Forbidden = prohibition:', options: ["mustn't", "don't have to", "doesn't have to", "shouldn't"], correct: 0, explanationEs: 'Prohibido = mustn\'t.' },
        { sentence: 'You look tired. You _____ go to bed early.', question: 'Advice?', options: ['must', 'have to', 'should', 'must to'], correct: 2, explanationEs: 'Consejo = should.' },
        { sentence: 'She _____ work on Sundays. Her boss says so.', question: 'External obligation:', options: ['must', 'has to', 'should', 'musts'], correct: 1, explanationEs: 'Obligación externa (el jefe) = have to.' },
        { sentence: 'I _____ finish this report today. I promised.', question: 'Internal obligation:', options: ['have to', 'must', 'should to', 'must to'], correct: 1, explanationEs: 'Obligación interna/promesa = must.' },
        { sentence: 'He _____ study more. (advice)', question: 'Which is correct?', options: ['should to', 'should', 'musts', 'have to'], correct: 1, explanationEs: 'Consejo = should + base verb (sin to).' },
      ],
      controlled: [
        { prompt: 'Complete: It\'s optional. You _____ come. (no obligation)', promptEs: 'Completa: Es opcional. No tienes que venir.', answer: "don't have to", hint: 'Optional = ?' },
        { prompt: 'Complete: It\'s forbidden. You _____ smoke here.', promptEs: 'Completa: Está prohibido. No debes fumar aquí.', answer: "mustn't", hint: 'Prohibition = ?' },
        { prompt: 'Correct: You should to see a doctor.', promptEs: 'Corrige: You should to see a doctor.', answer: 'You should see a doctor.', hint: 'Should + base verb, no "to"' },
        { prompt: 'Correct: He musts leave now.', promptEs: 'Corrige: He musts leave now.', answer: 'He must leave now.', hint: 'Modals never add -s' },
        { prompt: 'Complete: She _____ (have to) get up at 6. Her job requires it.', promptEs: 'Completa: Ella tiene que levantarse a las 6. Su trabajo lo exige.', answer: 'has to', hint: 'External obligation, 3rd person' },
        { prompt: 'Choose: You _____ tell anyone. (it\'s a secret — forbidden)', promptEs: 'Elige: No debes contárselo a nadie. (es un secreto)', answer: "mustn't", hint: 'Forbidden = mustn\'t' },
      ]
    },
    recycleInTopics: ['b1-modal-deduction', 'a2-can-could-modals'],
    tipEs: '💡 La diferencia más importante: MUSTN\'T = prohibido (no lo hagas). DON\'T HAVE TO = no es necesario (puedes si quieres). "You mustn\'t drive drunk" ≠ "You don\'t have to drive" — el primero prohíbe, el segundo dice que es opcional. Y recuerda: must, should, can + verbo base, NUNCA "to" ni -s.'
  },

  // ─── B1 ADDITIONAL MODULES ─────────────────────────────────────────────────

  {
    id: 'b1-reported-speech',
    title: 'Reported Speech',
    titleEs: 'Estilo Indirecto (Reported Speech)',
    level: 'B1',
    cefrLevel: 3,
    category: 'sentences',
    priority: 'critical',
    prerequisiteIds: ['a2-past-simple', 'a2-going-to-vs-will'],
    explanation: 'Reported speech (indirect speech) is used to report what someone said without quoting their exact words. Tenses, pronouns, and time expressions usually shift back.',
    explanationEs: 'El estilo indirecto se usa para reportar lo que alguien dijo sin citar sus palabras exactas. Los tiempos verbales, pronombres y expresiones de tiempo suelen retroceder.',
    formationRules: [
      {
        label: 'Tense backshift',
        labelEs: 'Retroceso de tiempos verbales',
        steps: [
          { step: 'Present Simple → Past Simple', stepEs: 'Presente Simple → Pasado Simple', example: '"I live in London." → She said she lived in London.', translation: '"Vivo en Londres." → Dijo que vivía en Londres.' },
          { step: 'Present Continuous → Past Continuous', stepEs: 'Presente Continuo → Pasado Continuo', example: '"I\'m working." → He said he was working.', translation: '"Estoy trabajando." → Dijo que estaba trabajando.' },
          { step: 'Past Simple → Past Perfect', stepEs: 'Pasado Simple → Past Perfect', example: '"I went." → She said she had gone.', translation: '"Fui." → Dijo que había ido.' },
          { step: 'Will → Would', stepEs: 'Will → Would', example: '"I will call." → He said he would call.', translation: '"Llamaré." → Dijo que llamaría.' },
          { step: 'Can → Could', stepEs: 'Can → Could', example: '"I can help." → She said she could help.', translation: '"Puedo ayudar." → Dijo que podía ayudar.' },
        ]
      },
      {
        label: 'Reporting verbs',
        labelEs: 'Verbos de reporte',
        steps: [
          { step: 'say (+ that) — general statements', stepEs: 'say (+ that) — declaraciones generales', example: 'She said (that) she was tired.', translation: 'Dijo que estaba cansada.' },
          { step: 'tell + person — must have object', stepEs: 'tell + persona — requiere objeto', example: 'She told me she was tired.', translation: 'Me dijo que estaba cansada.' },
          { step: 'ask + (person) + if/whether — yes/no questions', stepEs: 'ask + (persona) + if/whether — preguntas sí/no', example: 'He asked (me) if I was ready.', translation: 'Me preguntó si estaba listo.' },
          { step: 'ask + (person) + wh-word — information questions', stepEs: 'ask + (persona) + wh-word — preguntas de información', example: 'She asked where I lived.', translation: 'Preguntó dónde vivía.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Tense backshift and pronoun changes',
      conceptEs: 'Retroceso temporal y cambio de pronombres',
      spanishBehavior: 'Spanish also backshifts (dijo que venía) but the rules are similar enough. The key differences are in reporting questions.',
      englishBehavior: 'In reported questions: NO inversion (normal word order), NO auxiliary DO/DOES. "She asked where I lived." NOT "She asked where did I live."',
      contrastExamples: [
        { english: 'He asked where I lived. (NOT where did I live)', spanish: 'Preguntó dónde vivía.', note: 'Reported questions use normal word order, not question word order.' },
        { english: 'She said she was tired. (NOT she said she is tired — usually)', spanish: 'Dijo que estaba cansada.', note: 'Backshift: is → was. (Backshift may be skipped if still true: "She said she is from France" — still true now)' },
        { english: 'She told me she would come. (NOT she will come)', spanish: 'Me dijo que vendría.', note: 'Will → would in backshift.' },
        { english: 'He said he could help. (NOT he can help)', spanish: 'Dijo que podía ayudar.', note: 'Can → could in backshift.' },
      ]
    },
    predictedErrors: [
      { error: 'She said me she was tired.', correction: 'She told me she was tired. / She said she was tired.', whyEs: '"Say" no lleva objeto de persona. "Tell" sí requiere objeto (tell me, tell him).', frequency: 'very common' },
      { error: 'He asked where did I live.', correction: 'He asked where I lived.', whyEs: 'En preguntas indirectas, el orden es normal (SVP), no el de pregunta directa.', frequency: 'very common' },
      { error: 'She said that she will come.', correction: 'She said that she would come.', whyEs: 'Will → would en el retroceso temporal del estilo indirecto.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '"I don\'t like cheese." She said _____.', question: 'Report this:', options: ['she didn\'t liked cheese', 'she doesn\'t like cheese', 'she didn\'t like cheese', 'she not like cheese'], correct: 2, explanationEs: "Present Simple → Past Simple; don't → didn't." },
        { sentence: '"Are you coming?" He asked me _____.', question: 'Report this question:', options: ['if I was coming', 'if was I coming', 'that I was coming', 'whether did I come'], correct: 0, explanationEs: 'Yes/no question → ask + if/whether + normal word order.' },
        { sentence: '"I will call you tomorrow." He said _____.', question: 'Report with backshift:', options: ['he will call me tomorrow', 'he would call me the next day', 'he would call me tomorrow', 'he called me tomorrow'], correct: 1, explanationEs: 'Will → would; tomorrow → the next day.' },
        { sentence: '"Where did you go?" She asked _____.', question: 'Reported wh-question:', options: ['where did I go', 'where I went', 'where I had gone', 'where I go'], correct: 1, explanationEs: 'Orden normal (no inversión). Past Simple → Past Simple o Past Perfect.' },
        { sentence: 'She _____ me she was leaving.', question: 'Say or tell?', options: ['said', 'told', 'said to', 'told to'], correct: 1, explanationEs: '"Tell" requiere objeto de persona (tell me). "Say" no lleva objeto directo de persona.' },
      ],
      controlled: [
        { prompt: 'Report: "I\'m very busy today," she said.', promptEs: 'Reporta esta frase en estilo indirecto:', answer: 'She said (that) she was very busy that day.', hint: 'Present Continuous → Past Continuous; today → that day' },
        { prompt: 'Report the question: "Where do you work?" he asked.', promptEs: 'Reporta la pregunta en estilo indirecto:', answer: 'He asked (me) where I worked.', hint: 'ask + where + normal word order, Present → Past' },
        { prompt: 'Report: "I can help you," she said.', promptEs: 'Reporta: "Puedo ayudarte," dijo ella.', answer: 'She said (that) she could help me.', hint: 'Can → could; I → me' },
        { prompt: 'Correct: He asked where did I live.', promptEs: 'Corrige: Preguntó dónde vivía.', answer: 'He asked where I lived.', hint: 'Orden normal en reported questions' },
        { prompt: 'Report: "Did you see the film?" she asked me.', promptEs: 'Reporta: "¿Viste la película?" me preguntó.', answer: 'She asked me if/whether I had seen the film.', hint: 'Yes/no → ask + if/whether + normal order' },
      ]
    },
    recycleInTopics: ['b2-reported-speech-advanced'],
    tipEs: '💡 Los dos errores más comunes: (1) "Said me" en lugar de "told me". (2) Orden de pregunta directa en pregunta indirecta. Regla: en reported question, olvida el auxiliar y usa orden normal: She asked where I LIVED (no "where did I live").'
  },

  {
    id: 'b1-relative-clauses',
    title: 'Relative Clauses',
    titleEs: 'Oraciones de Relativo',
    level: 'B1',
    cefrLevel: 3,
    category: 'clauses',
    priority: 'critical',
    prerequisiteIds: ['a2-past-simple'],
    explanation: 'Relative clauses add information about a noun using relative pronouns: who (people), which (things), that (people/things), where (places), whose (possession).',
    explanationEs: 'Las oraciones de relativo añaden información sobre un sustantivo usando pronombres relativos: who (personas), which (cosas), that (personas/cosas), where (lugares), whose (posesión).',
    formationRules: [
      {
        label: 'Defining relative clauses (no commas)',
        labelEs: 'Oraciones de relativo especificativas (sin comas)',
        steps: [
          { step: 'who = for people (as subject or object)', stepEs: 'who = para personas (sujeto u objeto)', example: 'The man who called you is outside.', translation: 'El hombre que te llamó está fuera.' },
          { step: 'which = for things', stepEs: 'which = para cosas', example: 'The film which won the award was excellent.', translation: 'La película que ganó el premio fue excelente.' },
          { step: 'that = for people or things (informal)', stepEs: 'that = para personas o cosas (informal)', example: 'The book that I bought is fascinating.', translation: 'El libro que compré es fascinante.' },
          { step: 'where = for places', stepEs: 'where = para lugares', example: 'This is the restaurant where we met.', translation: 'Este es el restaurante donde nos conocimos.' },
          { step: 'whose = possession', stepEs: "whose = posesión", example: 'The student whose essay won the prize is from Italy.', translation: 'El estudiante cuyo ensayo ganó el premio es de Italia.' },
        ]
      },
      {
        label: 'Object relative clauses — pronoun can be omitted',
        labelEs: 'Relativas de objeto — el pronombre puede omitirse',
        steps: [
          { step: 'When the relative pronoun is the OBJECT, it can be dropped', stepEs: 'Cuando el pronombre relativo es OBJETO, puede omitirse', example: 'The film (that) I watched was great. = The film that I watched was great.', translation: 'La película que vi fue genial.' },
          { step: 'When it is the SUBJECT, it cannot be dropped', stepEs: 'Cuando es SUJETO, no puede omitirse', example: 'The woman who lives next door is a doctor. (NOT: The woman lives next door is a doctor)', translation: 'La mujer que vive al lado es médica.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'No personal pronoun after the relative pronoun',
      conceptEs: 'No se añade pronombre personal después del relativo',
      spanishBehavior: 'Spanish: La chica que la vi ayer... (sometimes heard in colloquial speech, though incorrect in formal Spanish)',
      englishBehavior: 'English: The girl who I saw yesterday... (NOT "The girl who I saw her yesterday")',
      contrastExamples: [
        { english: 'The man who called you... (NOT "who he called you")', spanish: 'El hombre que te llamó...', note: 'Do NOT add "he/she/it" after "who/which/that" — the relative pronoun replaces the subject pronoun.' },
        { english: 'The book (that) I bought is great. (object can be omitted)', spanish: 'El libro que compré es genial.', note: 'When relative is object, "that" can be dropped. Spanish always keeps "que".' },
        { english: 'The woman who lives next door... (person → who, NOT which)', spanish: 'La mujer que vive al lado...', note: 'People = who; things = which. Spanish uses "que" for both.' },
      ]
    },
    predictedErrors: [
      { error: 'The woman which called is outside.', correction: 'The woman who called is outside.', whyEs: '"Which" es para cosas; las personas usan "who" o "that".', frequency: 'very common' },
      { error: 'The book who I bought.', correction: 'The book which / that I bought.', whyEs: '"Who" es para personas; los objetos usan "which" o "that".', frequency: 'very common' },
      { error: 'The man who he called you.', correction: 'The man who called you.', whyEs: 'No se añade el pronombre "he" después del relativo — "who" ya hace la función de sujeto.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She is the teacher _____ helped me most.', question: 'Choose the correct relative pronoun:', options: ['which', 'who', 'whose', 'where'], correct: 1, explanationEs: 'Persona + sujeto → who.' },
        { sentence: "This is the house _____ Shakespeare was born.", question: 'Choose the correct relative pronoun:', options: ['who', 'which', 'where', 'that'], correct: 2, explanationEs: 'Lugar → where.' },
        { sentence: 'The student _____ essay won the prize is from Italy.', question: 'Possession:', options: ['who', 'which', 'whose', 'whom'], correct: 2, explanationEs: 'Posesión (cuyo ensayo) → whose.' },
      ],
      controlled: [
        { prompt: 'Combine: "I have a friend. She speaks five languages."', promptEs: 'Combina las dos frases con una cláusula de relativo:', answer: 'I have a friend who speaks five languages.', hint: 'who = person, subject' },
        { prompt: 'Combine: "That\'s the café. We had our first date there."', promptEs: 'Combina las dos frases:', answer: "That's the café where we had our first date.", hint: 'where = place' },
        { prompt: 'Combine: "I bought a book. The book was very expensive."', promptEs: 'Combina las dos frases (cosa como objeto):', answer: 'I bought a book that/which was very expensive.', hint: 'which/that = thing. Object can be omitted: "The book I bought" but here subject is needed.' },
        { prompt: 'Correct: The woman which called is outside.', promptEs: 'Corrige: La mujer que llamó está fuera.', answer: 'The woman who called is outside.', hint: 'Personas → who (no which)' },
        { prompt: 'Combine: "That\'s the man. His car was stolen."', promptEs: 'Combina las dos frases:', answer: "That's the man whose car was stolen.", hint: 'whose = posesión' },
      ]
    },
    recycleInTopics: ['b2-non-defining-relative-clauses', 'b2-reduced-relative-clauses'],
    tipEs: '💡 Truco: WHO para personas, WHICH para cosas, WHERE para lugares, WHOSE para posesión. THAT puede sustituir a who y which en oraciones especificativas. Si el relativo es objeto, puedes omitirlo: "The film I watched" (no need for "that").'
  },

  {
    id: 'b1-modal-deduction',
    title: 'Modal Verbs for Deduction and Probability',
    titleEs: 'Verbos Modales para Deducción y Probabilidad',
    level: 'B1',
    cefrLevel: 3,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['a2-can-could-modals'],
    explanation: 'Must, can\'t, might, may and could are used to express degrees of certainty about present or past situations based on deduction.',
    explanationEs: 'Must, can\'t, might, may y could se usan para expresar distintos grados de certeza sobre situaciones presentes o pasadas basadas en deducción.',
    formationRules: [
      {
        label: 'Present deduction',
        labelEs: 'Deducción en el presente',
        steps: [
          { step: 'must + base verb = almost certain it is true (positive)', stepEs: 'must + infinitivo = casi seguro que es verdad (positivo)', example: "She's been working for 12 hours — she must be exhausted.", translation: 'Lleva 12 horas trabajando — debe de estar agotada.' },
          { step: "can't + base verb = almost certain it is NOT true", stepEs: "can't + infinitivo = casi seguro que NO es verdad", example: "He can't be the thief — he was with me all night.", translation: 'No puede ser el ladrón — estuvo conmigo toda la noche.' },
          { step: 'might / may / could + base verb = possible (50% or less)', stepEs: 'might / may / could + infinitivo = posible (50% o menos)', example: 'She might be in a meeting. / He could be lost.', translation: 'Puede que esté en una reunión. / Puede que esté perdido.' },
        ]
      },
      {
        label: 'Past deduction',
        labelEs: 'Deducción en el pasado',
        steps: [
          { step: 'must have + past participle = certain it happened', stepEs: 'must have + participio = seguro que ocurrió', example: 'She must have left early — her coat is gone.', translation: 'Debe de haber salido pronto — su abrigo no está.' },
          { step: "can't have + past participle = certain it didn't happen", stepEs: "can't have + participio = seguro que no ocurrió", example: "He can't have passed the exam — he never studied.", translation: 'No puede haber aprobado el examen — nunca estudió.' },
          { step: 'might / may / could have + past participle = possible', stepEs: 'might / may / could have + participio = posible', example: 'She might have missed the train.', translation: 'Puede que haya perdido el tren.' },
        ]
      },
    ],
    l1Contrast: {
      concept: '"Must" for deduction vs. "must" for obligation',
      conceptEs: '"Must" para deducción vs. "must" para obligación',
      spanishBehavior: 'Spanish "debe de + infinitive" = deduction; "debe + infinitive" = obligation (distinction often collapsed in speech)',
      englishBehavior: 'English uses the SAME "must" for both: context tells you which meaning. "You must be tired" = deduction. "You must submit by Friday" = obligation.',
      contrastExamples: [
        { english: 'You must be joking! (deduction — I\'m certain you are)', spanish: '¡Debe de ser broma! (deducción)', note: '"Must" here = certainty/deduction, not obligation.' },
        { english: "She can't be 50 — she looks so young. (deduction)", spanish: 'No puede tener 50 años — parece muy joven. (deducción)', note: "Can't = negative certainty in deduction." },
        { english: "She mustn't be at home. (WRONG for deduction)", spanish: 'No debe de estar en casa.', note: "For negative deduction use CAN'T, not mustn't. Mustn't = prohibition only." },
        { english: 'He must have left early. (past deduction)', spanish: 'Debe de haber salido pronto.', note: 'Past deduction: must have + past participle. NOT "must be left".' },
      ]
    },
    predictedErrors: [
      { error: "She mustn't be at home — she's not answering.", correction: "She can't be at home — she's not answering.", whyEs: '"Mustn\'t" expresa prohibición, no deducción negativa. Para deducción negativa usa "can\'t".', frequency: 'very common' },
      { error: 'He must be arrived.', correction: 'He must have arrived.', whyEs: 'Para deducción en el pasado: must have + participio pasado.', frequency: 'common' },
      { error: 'It might is raining.', correction: 'It might be raining.', whyEs: 'Después del modal, siempre base verb (be), no forma conjugada.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: "She's been crying — she _____ be very upset.", question: 'Express certainty:', options: ['might', 'must', "can't", 'could'], correct: 1, explanationEs: 'Evidencia clara → certeza positiva → must.' },
        { sentence: "He _____ have eaten all the cake — he hates chocolate!", question: 'Express impossibility:', options: ['must', 'might', "can't", 'may'], correct: 2, explanationEs: 'Imposible → certainty negative → can\'t have.' },
        { sentence: 'The lights are off but the TV is on. They _____ be at home.', question: 'Possible but uncertain:', options: ['must', "can't", 'might', 'couldn\'t'], correct: 2, explanationEs: 'Evidencia contradictoria → posible pero incierto → might/could.' },
      ],
      controlled: [
        { prompt: "It's 11pm and your flatmate isn't home. Make 3 deductions.", promptEs: 'Son las 11pm y tu compañero no está en casa. Haz 3 deducciones.', answer: 'He/she might be at a party. / He/she could be working late. / He/she must have forgotten his/her keys.', hint: 'must (certain) / might/could (possible) / can\'t (impossible)' },
        { prompt: "Complete: She's been crying — she _____ be very upset.", promptEs: 'Completa: Ha estado llorando — debe de estar muy molesta.', answer: 'must', hint: 'Evidencia clara → certeza positiva → must' },
        { prompt: "Correct: She mustn't be at home — her car isn't there.", promptEs: 'Corrige: No debe de estar en casa — su coche no está.', answer: "She can't be at home — her car isn't there.", hint: "mustn't = prohibición; can't = deducción negativa" },
        { prompt: 'Past deduction: The door was open. Someone _____ (leave) in a hurry.', promptEs: 'Deducción pasada: La puerta estaba abierta. Alguien _____ (irse) con prisa.', answer: 'must have left', hint: 'must have + past participle' },
        { prompt: 'Complete: It _____ (be) raining — the ground is dry.', promptEs: 'Completa: No puede estar lloviendo — el suelo está seco.', answer: "can't be", hint: 'Imposibilidad en presente → can\'t + base verb' },
      ]
    },
    recycleInTopics: ['b2-modal-perfects', 'c1-modal-nuance'],
    tipEs: '💡 Escala de certeza: must (95% seguro) > should (70%) > may/might/could (50%) > can\'t (0% — imposible). "Mustn\'t" ≠ "can\'t" en deducción. Mustn\'t = prohibición; Can\'t = imposibilidad lógica.'
  },

  {
    id: 'b1-future-forms',
    title: 'Future Forms — Will, Going to, Present Continuous, May/Might',
    titleEs: 'Formas de Futuro — Repaso Completo B1',
    level: 'B1',
    cefrLevel: 3,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['a2-going-to-vs-will', 'a2-present-continuous'],
    explanation: 'B1 learners need to distinguish four ways to express the future in English: will, going to, Present Continuous (for personal plans), and may/might (for uncertainty).',
    explanationEs: 'En B1 se distinguen cuatro formas de expresar el futuro en inglés: will, going to, Presente Continuo (planes personales) y may/might (incertidumbre).',
    formationRules: [
      {
        label: 'Summary of future uses',
        labelEs: 'Resumen de usos del futuro',
        steps: [
          { step: "Will — spontaneous decisions, promises, predictions", stepEs: "Will — decisiones espontáneas, promesas, predicciones", example: "I'll call you tonight. / It'll rain tomorrow.", translation: "Te llamaré esta noche. / Mañana lloverá." },
          { step: "Going to — pre-decided plans, evidence-based predictions", stepEs: "Going to — planes ya decididos, predicciones con evidencia", example: "I'm going to apply for the job. / Look — it's going to fall!", translation: "Voy a solicitar el trabajo. / ¡Mira, se va a caer!" },
          { step: "Present Continuous — fixed future arrangements (date/place set)", stepEs: "Presente Continuo — citas y planes concretos ya organizados", example: "I'm meeting Sara at 7pm tomorrow. (booked/arranged)", translation: "Quedo con Sara a las 7 de la tarde mañana. (ya acordado)" },
          { step: "May/Might — uncertain future possibilities", stepEs: "May/Might — posibilidades futuras inciertas", example: "I might go to the party — I'm not sure.", translation: "Puede que vaya a la fiesta — no estoy seguro." },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Four ways to express the future',
      conceptEs: 'Cuatro formas de expresar el futuro donde el español usa principalmente dos',
      spanishBehavior: 'Spanish mainly uses: futuro simple (iré) and ir a + infinitive (voy a ir). Present tense is also used for arranged events.',
      englishBehavior: 'English distinguishes more clearly: will (volition/spontaneous), going to (planned/evidence), Present Continuous (arranged with others), may/might (uncertain).',
      contrastExamples: [
        { english: "I'm having dinner with Tom tomorrow. (arrangement, Present Continuous)", spanish: "Mañana ceno con Tom. (presente con valor futuro)", note: "In English, 'dining' is already arranged → Present Continuous, not will or going to." },
        { english: "I'm meeting Dr García at 10:30. (fixed appointment)", spanish: 'Quedo con el Dr García a las 10:30.', note: 'Pre-arranged with time/place → Present Continuous.' },
        { english: "I might go to the party — I'm not sure. (uncertainty)", spanish: 'Puede que vaya a la fiesta — no estoy seguro.', note: 'Uncertain possibility → might/may, not will.' },
      ]
    },
    predictedErrors: [
      { error: "I will meet Tom tomorrow at 8. (when it's arranged)", correction: "I'm meeting Tom tomorrow at 8.", whyEs: 'Para planes ya concretados con otra persona (hora y lugar fijados), se prefiere Present Continuous.', frequency: 'common' },
      { error: 'Maybe I will go, but I am not sure.', correction: 'I might go — I\'m not sure.', whyEs: '"Might" expresa incertidumbre directamente sin necesitar "maybe" + will.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'The sky is getting dark. It _____ rain.', question: 'Visible evidence prediction:', options: ["will", "is going to", "might", "is"], correct: 1, explanationEs: 'Evidencia visible (cielo oscuro) → going to.' },
        { sentence: 'A: "I forgot my wallet!" B: "Don\'t worry, _____ lend you some money."', question: 'Spontaneous decision:', options: ["I'm going to", "I'll", "I might", "I'm"], correct: 1, explanationEs: 'Decisión tomada en el momento → will.' },
        { sentence: 'I _____ meet Dr García at 10:30 tomorrow — it\'s already in his calendar.', question: 'Pre-arranged appointment:', options: ["will", "am going to", "am meeting", "might"], correct: 2, explanationEs: 'Cita ya fijada con hora y lugar → Present Continuous.' },
        { sentence: 'A: "Should I bring an umbrella?" B: "It _____ rain — the forecast is uncertain."', question: 'Uncertain possibility:', options: ["will", "is going to", "is", "might"], correct: 3, explanationEs: 'Posibilidad incierta → might/may.' },
        { sentence: 'I\'ve decided: I _____ apply for that promotion next month.', question: 'Pre-decided plan:', options: ["will", "am going to", "might", "am"], correct: 1, explanationEs: 'Decisión ya tomada de antemano → going to.' },
        { sentence: 'Careful! That glass _____ fall off the table!', question: 'Immediate evidence-based prediction:', options: ["will", "is going to", "might", "may"], correct: 1, explanationEs: 'Evidencia inmediata e inminente → going to.' },
      ],
      controlled: [
        { prompt: 'Describe your plans for next weekend using at least three different future forms.', promptEs: 'Describe tus planes para el próximo fin de semana usando al menos tres formas de futuro diferentes.', answer: "I'm going to visit my parents (plan). I'm having lunch with a friend on Saturday (arrangement). It might rain so I'll stay in on Sunday (might + will).", hint: 'going to / Present Continuous / might / will' },
        { prompt: 'Your friend says "I\'m hungry." Respond with a spontaneous offer using will, then explain what you already planned using going to.', promptEs: 'Tu amigo dice "Tengo hambre." Responde con una oferta espontánea usando will, luego explica lo que ya tenías planeado con going to.', answer: "I'll make you a sandwich! But actually I'm going to cook pasta for dinner — I already bought the ingredients.", hint: 'will for the spontaneous offer, going to for the pre-decided plan' },
        { prompt: 'You have a job interview on Thursday at 9am (already confirmed). Tell your flatmate about it.', promptEs: 'Tienes una entrevista de trabajo el jueves a las 9am (ya confirmada). Cuéntaselo a tu compañero de piso.', answer: "I'm having a job interview on Thursday at nine. It's at their London office.", hint: 'Use Present Continuous for arranged events: I am having / I am meeting' },
        { prompt: 'Explain the difference: "I\'ll drive you" vs. "I\'m going to drive you" vs. "I\'m driving you."', promptEs: 'Explica la diferencia entre las tres formas.', answer: "'I'll drive you' = spontaneous decision made now. 'I'm going to drive you' = I already decided this before. 'I'm driving you' = it's been arranged — possibly a booking or agreed time.", hint: 'will = spontaneous; going to = pre-decided; Present Continuous = fixed arrangement' },
      ]
    },
    recycleInTopics: ['b2-future-perfect', 'b2-future-continuous'],
    tipEs: '💡 Test rápido: ¿Ya lo tenías planeado? → going to. ¿Lo decides ahora mismo? → will. ¿Ya tienes cita con alguien a hora y lugar concreto? → Present Continuous. ¿No estás seguro? → might/may.'
  },

  // ─── B2 ADDITIONAL MODULES ─────────────────────────────────────────────────

  {
    id: 'b2-wish-if-only',
    title: 'Wish and If Only — Expressing Regrets and Desires',
    titleEs: 'Wish e If Only — Deseos y Lamentos',
    level: 'B2',
    cefrLevel: 4,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['b2-conditionals-all'],
    explanation: '"Wish" and "if only" are used to express wishes that are contrary to reality, regrets about the past, and desires for other people to change their behaviour.',
    explanationEs: '"Wish" e "if only" se usan para expresar deseos contrarios a la realidad, lamentarse del pasado y desear que otras personas cambien de comportamiento.',
    formationRules: [
      {
        label: 'Wish + Past Simple (present wish — unreal)',
        labelEs: 'Wish + Past Simple (deseo presente — irreal)',
        steps: [
          { step: 'wish + Past Simple = want something different NOW (but it is not the case)', stepEs: 'wish + Past Simple = querer algo diferente AHORA (pero no es así)', example: 'I wish I lived by the sea. (But I live in the city.)', translation: 'Ojalá viviera junto al mar. (Pero vivo en la ciudad.)' },
          { step: 'wish + were (NOT was) is formally preferred for all subjects', stepEs: 'wish + were (NOT was) es formalmente preferido para todos los sujetos', example: 'I wish I were taller. / I wish it were warmer.', translation: 'Ojalá fuera más alto. / Ojalá hiciera más calor.' },
        ]
      },
      {
        label: 'Wish + Past Perfect (past regret)',
        labelEs: 'Wish + Past Perfect (lamento sobre el pasado)',
        steps: [
          { step: 'wish + Past Perfect = regret about something in the past — it cannot be changed', stepEs: 'wish + Past Perfect = lamento sobre algo pasado — ya no se puede cambiar', example: 'I wish I had studied harder. (I didn\'t, and now I regret it.)', translation: 'Ojalá hubiera estudiado más. (No lo hice y lo lamento.)' },
        ]
      },
      {
        label: 'Wish + would (desire for change in others\' behaviour)',
        labelEs: 'Wish + would (deseo de que alguien cambie su comportamiento)',
        steps: [
          { step: 'wish + person + would = annoyed at someone\'s repeated behaviour', stepEs: 'wish + persona + would = fastidio por el comportamiento repetido de alguien', example: 'I wish he would stop interrupting me.', translation: 'Ojalá dejara de interrumpirme.' },
          { step: 'CANNOT use wish + I would (for your own behaviour)', stepEs: 'NO se puede usar wish + I would (para el propio comportamiento)', example: 'I wish I could stop smoking. (NOT: I wish I would stop)', translation: 'Ojalá pudiera dejar de fumar.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Tense shift in wish clauses parallels Spanish subjunctive',
      conceptEs: 'El cambio de tiempo en wish es paralelo al subjuntivo español',
      spanishBehavior: '"Ojalá + subjuntivo presente" = wish + past simple. "Ojalá + subjuntivo pasado (hubiera)" = wish + past perfect.',
      englishBehavior: 'English uses a tense shift (present wish → past simple; past regret → past perfect) rather than subjunctive mood.',
      contrastExamples: [
        { english: 'I wish I were rich. = Si fuera rico... / Ojalá fuera rico.', spanish: 'Ojalá fuera rico. (subjuntivo imperfecto)', note: '"Were" is preferred over "was" in formal English after wish.' },
        { english: 'I wish I had been there. = Ojalá hubiera estado allí.', spanish: 'Ojalá hubiera estado allí. (subjuntivo pluscuamperfecto)', note: 'Past Perfect in English = pluscuamperfecto de subjuntivo in Spanish' },
        { english: 'I wish you would stop. (wish for change in others)', spanish: 'Ojalá pararas. / Desearía que pararas.', note: 'Wish + would = desire for someone else to change. Not used for self.' },
      ]
    },
    predictedErrors: [
      { error: 'I wish I would be richer.', correction: 'I wish I were richer.', whyEs: 'Para deseos sobre uno mismo en el presente, NO se usa would. Se usa Past Simple (were).', frequency: 'very common' },
      { error: 'I wish I had more money now.', correction: 'I wish I had more money. (present wish, using past simple)', whyEs: '"Now" es redundante. "I wish I had" ya expresa un deseo presente.', frequency: 'occasional' },
      { error: 'I wish I have studied harder.', correction: 'I wish I had studied harder.', whyEs: 'Para lamentos del pasado: wish + Past Perfect (had + participio).', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'I wish I _____ play the guitar. (but I can\'t)', question: 'Present wish:', options: ['can', 'could', 'will', 'would'], correct: 1, explanationEs: 'Deseo presente irreal → Past Simple de "can" = could.' },
        { sentence: 'She wishes she _____ left him sooner.', question: 'Past regret:', options: ['has', 'had', 'was', 'would have'], correct: 1, explanationEs: 'Lamento del pasado → wish + Past Perfect (had + participio).' },
        { sentence: 'I wish my brother _____ stop playing loud music at night.', question: 'Desire for someone else to change:', options: ['will', 'would', 'could', 'should'], correct: 1, explanationEs: 'Deseo de que otra persona cambie → wish + would.' },
        { sentence: 'I wish I _____ taller. (present unreal)', question: 'Formal preference for "be":', options: ['was', 'were', 'am', 'be'], correct: 1, explanationEs: 'Formalmente se prefiere "were" para todos los sujetos tras wish.' },
        { sentence: 'Correct: I wish I would be richer.', question: 'Present wish about yourself:', options: ['I wish I were richer.', 'I wish I would be richer.', 'I wish I am richer.', 'I wish I will be richer.'], correct: 0, explanationEs: 'Para deseos sobre uno mismo en presente: Past Simple (were), NO would.' },
      ],
      controlled: [
        { prompt: 'Write 2 present wishes about your life.', promptEs: 'Escribe 2 deseos presentes sobre tu vida.', answer: 'I wish I lived in a bigger city. / I wish I could speak French.', hint: 'wish + Past Simple' },
        { prompt: 'Write 1 past regret using wish.', promptEs: 'Escribe un lamento del pasado usando wish.', answer: 'I wish I had started learning English earlier.', hint: 'wish + had + past participle' },
        { prompt: 'Correct: I wish I have studied harder for the exam.', promptEs: 'Corrige: Ojalá hubiera estudiado más para el examen.', answer: 'I wish I had studied harder for the exam.', hint: 'Past regret → had + past participle' },
        { prompt: 'Write a wish about someone else\'s annoying habit (use wish + would).', promptEs: 'Escribe un deseo sobre un hábito molesto de otra persona:', answer: 'I wish he would stop interrupting me.', hint: 'wish + person + would + base verb' },
        { prompt: 'Complete: If only I _____ (know) the answer then!', promptEs: 'Completa: ¡Ojalá hubiera sabido la respuesta entonces!', answer: 'If only I had known the answer then!', hint: 'if only = wish; past regret → had + pp' },
      ]
    },
    recycleInTopics: ['c1-hypothetical-structures', 'c1-mixed-conditionals-advanced'],
    tipEs: '💡 Mapa mental: wish + [Past Simple] = "ojalá ahora" (irreal presente). Wish + [Past Perfect] = "ojalá antes" (lamento pasado). Wish + [would] = "ojalá él/ella cambiara" (no para "yo"). Si te confundes, piensa en qué condicional usarías: 2nd conditional → wish + past; 3rd conditional → wish + had + pp.'
  },

  {
    id: 'b2-passive-advanced',
    title: 'Advanced Passive Voice — All Tenses and Structures',
    titleEs: 'Voz Pasiva Avanzada — Todos los Tiempos y Estructuras',
    level: 'B2',
    cefrLevel: 4,
    category: 'sentences',
    priority: 'high',
    prerequisiteIds: ['b1-passive-voice'],
    explanation: 'At B2 level, passive voice is used across all tenses, in modal structures, in impersonal reporting constructions, and to achieve formal and academic register.',
    explanationEs: 'En B2, la voz pasiva se usa en todos los tiempos, en estructuras modales, en construcciones impersonales de reporte y para lograr un registro formal y académico.',
    formationRules: [
      {
        label: 'Passive in all tenses',
        labelEs: 'Pasiva en todos los tiempos',
        steps: [
          { step: 'Present Simple passive: am/is/are + pp', stepEs: 'Presente Simple pasivo: am/is/are + pp', example: 'The report is written every month.', translation: 'El informe se escribe cada mes.' },
          { step: 'Past Simple passive: was/were + pp', stepEs: 'Pasado Simple pasivo: was/were + pp', example: 'The building was designed in 1920.', translation: 'El edificio fue diseñado en 1920.' },
          { step: 'Present Perfect passive: has/have been + pp', stepEs: 'Present Perfect pasivo: has/have been + pp', example: 'The contract has been signed.', translation: 'El contrato ha sido firmado.' },
          { step: 'Future passive: will be + pp', stepEs: 'Futuro pasivo: will be + pp', example: 'The results will be announced tomorrow.', translation: 'Los resultados serán anunciados mañana.' },
          { step: 'Modal passive: modal + be + pp', stepEs: 'Modal pasivo: modal + be + pp', example: 'The problem should be addressed urgently.', translation: 'El problema debería ser abordado urgentemente.' },
        ]
      },
      {
        label: 'Impersonal passive reporting',
        labelEs: 'Pasiva impersonal de reporte',
        steps: [
          { step: 'It is said / believed / reported / thought + that + clause', stepEs: 'It is said / believed / reported / thought + that + cláusula', example: 'It is believed that the economy will recover.', translation: 'Se cree que la economía se recuperará.' },
          { step: 'Subject + is said / believed / thought + to + infinitive', stepEs: 'Sujeto + is said/believed/thought + to + infinitivo', example: 'The economy is believed to be recovering.', translation: 'Se cree que la economía se está recuperando.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Passive in formal writing vs. active preference in Spanish',
      conceptEs: 'La pasiva en escritura formal vs. preferencia por la activa en español',
      spanishBehavior: 'Spanish often uses "se" passive (se construyó, se dice, se cree) rather than an agent passive.',
      englishBehavior: 'English uses full passive constructions extensively in academic/formal writing. The agent (by...) can be added or omitted. Impersonal passive reporting is very common in journalism and academic English.',
      contrastExamples: [
        { english: 'It is thought that climate change will worsen. (impersonal passive)', spanish: 'Se cree que el cambio climático empeorará. (se + activo)', note: 'The English passive sounds formal; the Spanish "se" construction sounds natural.' },
      ]
    },
    predictedErrors: [
      { error: 'The car was broke last week.', correction: 'The car was broken last week.', whyEs: 'Necesita participio pasado (broken), no pasado simple (broke).', frequency: 'very common' },
      { error: 'It is said that he has been arrested by the police.', correction: 'He is said to have been arrested by the police. / It is said that he was arrested.', whyEs: 'Las dos construcciones de pasiva impersonal no se mezclan.', frequency: 'common' },
      { error: 'The report has written by her.', correction: 'The report has been written by her.', whyEs: 'Present Perfect pasivo: has been + participio, no has + participio directamente.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'The new hospital _____ next year. (open)', question: 'Future passive:', options: ['is opened', 'will open', 'will be opened', 'is going to opened'], correct: 2, explanationEs: 'Futuro pasivo: will be + participio pasado.' },
        { sentence: '_____ that the CEO will resign.', question: 'Impersonal passive:', options: ['It is rumoured', 'They rumour', 'It rumours', 'It was rumoured'], correct: 0, explanationEs: '"It is rumoured that..." = construcción pasiva impersonal de reporte, presente.' },
        { sentence: 'The contract _____ (sign) last week. Everything is ready.', question: 'Present Perfect Passive:', options: ['has been signed', 'was signed', 'has signed', 'signed'], correct: 0, explanationEs: 'Resultado en el presente → Present Perfect Passive: has been + pp.' },
        { sentence: 'The problem _____ (address) urgently. It\'s critical.', question: 'Modal passive:', options: ['should be addressed', 'should address', 'should addressed', 'should be address'], correct: 0, explanationEs: 'Modal pasivo: modal + be + participio pasado.' },
        { sentence: 'He _____ (say) to be the best candidate for the job.', question: 'Impersonal passive (subject form):', options: ['is said', 'says', 'is say', 'said'], correct: 0, explanationEs: 'Subject + is said + to-infinitive. Se dice que él es...' },
      ],
      controlled: [
        { prompt: 'Rewrite actively: "The manager approved the proposal yesterday."', promptEs: 'Reescribe en pasiva:', answer: 'The proposal was approved (by the manager) yesterday.', hint: 'was/were + past participle' },
        { prompt: 'Create a news headline using impersonal passive: "People believe the suspect fled abroad."', promptEs: 'Crea un titular de noticia usando pasiva impersonal:', answer: 'It is believed that the suspect fled abroad. / The suspect is believed to have fled abroad.', hint: 'It is believed that... / Subject + is believed to...' },
        { prompt: 'Change to passive: They should complete the project by Friday.', promptEs: 'Cambia a pasiva: Deberían completar el proyecto para el viernes.', answer: 'The project should be completed by Friday.', hint: 'Modal + be + pp' },
        { prompt: 'Correct: The report has written by her.', promptEs: 'Corrige: El informe ha sido escrito por ella.', answer: 'The report has been written by her.', hint: 'Present Perfect pasivo: has been + pp' },
        { prompt: 'Impersonal passive: "People think she is leaving." → She _____', promptEs: 'Pasiva impersonal: Se cree que ella se va.', answer: 'She is thought to be leaving.', hint: 'Subject + is thought + to-infinitive' },
      ]
    },
    recycleInTopics: ['c1-complex-passives', 'c1-academic-writing'],
    tipEs: '💡 La pasiva en inglés formal tiene dos valores clave: (1) Ocultar el agente cuando es obvio o irrelevante. (2) Crear distancia impersonal en textos académicos y periodísticos. "It is reported/believed/said/understood that..." son fórmulas esenciales para el C1.'
  },

  {
    id: 'b2-participle-clauses',
    title: 'Participle Clauses',
    titleEs: 'Cláusulas de Participio',
    level: 'B2',
    cefrLevel: 4,
    category: 'clauses',
    priority: 'high',
    prerequisiteIds: ['b1-passive-voice', 'b1-relative-clauses'],
    explanation: 'Participle clauses use -ing (active), -ed (passive), or perfect participle (having + pp) to replace full subordinate clauses, making English more concise and formal.',
    explanationEs: 'Las cláusulas de participio usan -ing (activo), -ed (pasivo) o participio perfecto (having + pp) para reemplazar cláusulas subordinadas completas, haciendo el inglés más conciso y formal.',
    formationRules: [
      {
        label: 'Present participle (-ing) — active, simultaneous or causal',
        labelEs: 'Participio de presente (-ing) — activo, simultáneo o causal',
        steps: [
          { step: 'Replaces a subject clause when subjects are the same', stepEs: 'Reemplaza una cláusula con mismo sujeto', example: 'Seeing no alternative, she decided to leave. = Because/As she saw no alternative, she decided to leave.', translation: 'Al no ver otra alternativa, decidió marcharse.' },
          { step: 'Can also replace relative clauses', stepEs: 'También puede reemplazar oraciones de relativo', example: 'The woman standing by the door is my boss. = The woman who is standing by the door.', translation: 'La mujer que está junto a la puerta es mi jefa.' },
        ]
      },
      {
        label: 'Past participle (-ed) — passive meaning',
        labelEs: 'Participio pasado (-ed) — significado pasivo',
        steps: [
          { step: 'Replaces a passive relative clause', stepEs: 'Reemplaza una oración de relativo pasiva', example: 'The report written by the committee was controversial. = The report which was written by the committee.', translation: 'El informe escrito por el comité fue polémico.' },
        ]
      },
      {
        label: 'Perfect participle (having + pp) — action before main verb',
        labelEs: 'Participio perfecto (having + pp) — acción anterior al verbo principal',
        steps: [
          { step: 'Used when the participle action happens BEFORE the main clause', stepEs: 'Cuando la acción del participio ocurre ANTES que la cláusula principal', example: 'Having finished the exam, she left the room immediately.', translation: 'Habiendo terminado el examen, abandonó la sala de inmediato.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Participle clauses require the SAME subject as the main clause',
      conceptEs: 'Las cláusulas de participio requieren el MISMO sujeto que la cláusula principal',
      spanishBehavior: 'Spanish gerund phrases sometimes allow different subjects: "Habiendo terminado Juan, salimos." but English is stricter.',
      englishBehavior: 'English participle clauses MUST have the same subject as the main clause. "Walking down the street, my phone rang" is a dangling participle ERROR (my phone was not walking).',
      contrastExamples: [
        { english: 'Walking to work, I found a wallet. ✓ (I was walking — I found)', spanish: 'Mientras caminaba al trabajo, encontré una cartera.', note: 'Same subject (I) — correct.' },
        { english: "Walking to work, my phone rang. ✗ (my phone wasn't walking)", spanish: 'Mientras caminaba al trabajo, me sonó el móvil.', note: 'Different subjects — dangling participle in English. Restructure: "While I was walking to work, my phone rang."' },
      ]
    },
    predictedErrors: [
      { error: 'Being tired, the lesson was difficult.', correction: 'Being tired, I found the lesson difficult.', whyEs: 'El sujeto del participio (yo, que estaba cansado) debe ser el mismo que el de la cláusula principal.', frequency: 'common' },
      { error: 'Having been left, he becomes angry.', correction: 'Having been left alone, he became angry.', whyEs: 'Having been + pp (pasiva perfecta) debe completarse correctamente y mantener coherencia temporal.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ the letter, she realised she had made a mistake.', question: 'Complete with a participle clause:', options: ['After read', 'Reading', 'Read', 'Having read'], correct: 3, explanationEs: 'La lectura ocurrió ANTES de darse cuenta → perfect participle: Having read.' },
        { sentence: 'The car _____ outside belongs to the director.', question: 'Which form fits (passive meaning)?', options: ['parking', 'parked', 'having parked', 'parks'], correct: 1, explanationEs: 'El coche fue aparcado (pasivo) → past participle: parked.' },
        { sentence: '_____ no alternative, she resigned.', question: 'Causal — action before main verb:', options: ['Seeing', 'Seen', 'Having seen', 'To see'], correct: 2, explanationEs: 'Vio antes de dimitir → perfect participle: Having seen.' },
      ],
      controlled: [
        { prompt: 'Reduce: "Because he was exhausted, he went straight to bed."', promptEs: 'Reduce la oración usando cláusula de participio:', answer: 'Being exhausted, he went straight to bed.', hint: '-ing for simultaneous/causal' },
        { prompt: 'Reduce: "After she had finished cooking, she sat down to eat."', promptEs: 'Reduce la oración usando participio perfecto:', answer: 'Having finished cooking, she sat down to eat.', hint: 'Having + past participle' },
        { prompt: 'Reduce: "The report which was written by the committee was controversial."', promptEs: 'Reduce la oración de relativo pasiva:', answer: 'The report written by the committee was controversial.', hint: 'Passive relative → past participle (-ed)' },
        { prompt: 'Correct: Being tired, the lesson was difficult.', promptEs: 'Corrige: Estando cansado, la lección era difícil.', answer: 'Being tired, I found the lesson difficult.', hint: 'El sujeto del participio debe coincidir con el de la cláusula principal' },
        { prompt: 'Reduce: "The woman who is standing by the door is my boss."', promptEs: 'Reduce la oración de relativo activa:', answer: 'The woman standing by the door is my boss.', hint: 'Active relative clause → -ing participle' },
      ]
    },
    recycleInTopics: ['c1-nominalization', 'c1-condensed-language'],
    tipEs: '💡 Las cláusulas de participio son un sello del inglés académico y periodístico. Tres formas: taking (activo, simultáneo/causal), taken (pasivo), having taken (anterior). Regla de oro: el sujeto del participio SIEMPRE coincide con el sujeto de la cláusula principal.'
  },

  // ─── C1 ADDITIONAL MODULES ─────────────────────────────────────────────────

  {
    id: 'c1-subjunctive',
    title: 'The Subjunctive Mood in English',
    titleEs: 'El Modo Subjuntivo en Inglés',
    level: 'C1',
    cefrLevel: 5,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['b2-conditionals-all', 'b2-passive-advanced'],
    explanation: 'The English subjunctive is used in formal contexts after verbs of suggestion/recommendation, in conditional expressions, and in fixed phrases. It uses the base form of the verb with no inflection.',
    explanationEs: 'El subjuntivo inglés se usa en contextos formales tras verbos de sugerencia/recomendación, en expresiones condicionales y en frases hechas. Usa la forma base del verbo sin conjugar.',
    formationRules: [
      {
        label: 'Mandative subjunctive (after suggestion/recommendation verbs)',
        labelEs: 'Subjuntivo mandativo (tras verbos de sugerencia/recomendación)',
        formula: 'verb of demanding/suggesting + that + subject + BASE VERB (no -s, no was/were)',
        steps: [
          { step: 'After: suggest, recommend, insist, demand, propose, request, require', stepEs: 'Tras: suggest, recommend, insist, demand, propose, request, require', example: 'The doctor recommended that she rest for a week.', translation: 'El médico recomendó que ella descansara una semana.' },
          { step: 'Third person singular: NO -s (not "rests")', stepEs: 'Tercera persona singular: SIN -s (no "rests")', example: 'It is essential that every student submit the form.', translation: 'Es esencial que cada estudiante entregue el formulario.' },
          { step: 'Negative subjunctive: that + subject + NOT + base verb', stepEs: 'Subjuntivo negativo: that + sujeto + NOT + base verb', example: 'She insisted that he not leave the room.', translation: 'Insistió en que él no saliera de la habitación.' },
          { step: 'TO BE in subjunctive: always "be", not "is/are/was"', stepEs: 'TO BE en subjuntivo: siempre "be", nunca "is/are/was"', example: 'It is important that the information be kept confidential.', translation: 'Es importante que la información se mantenga confidencial.' },
        ]
      },
      {
        label: 'Fixed subjunctive expressions',
        labelEs: 'Expresiones fijas con subjuntivo',
        steps: [
          { step: 'If need be = if necessary', stepEs: 'If need be = si fuera necesario', example: 'Call me, if need be.', translation: 'Llámame, si fuera necesario.' },
          { step: 'Be that as it may = even if that is true', stepEs: 'Be that as it may = sea como sea', example: 'Be that as it may, we must act.', translation: 'Sea como sea, debemos actuar.' },
          { step: 'As it were = so to speak (softening)', stepEs: 'As it were = por así decirlo', example: "He's the brains of the operation, as it were.", translation: 'Es el cerebro de la operación, por así decirlo.' },
          { step: 'Suffice it to say = it is enough to say', stepEs: 'Suffice it to say = basta con decir', example: "Suffice it to say, things went badly.", translation: 'Basta decir que las cosas fueron mal.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'English subjunctive is rare but NOT nonexistent',
      conceptEs: 'El subjuntivo inglés es raro pero NO inexistente',
      spanishBehavior: 'Spanish uses subjunctive very widely: after conjunctions of purpose, time, concession, all verbs of emotion, doubt, recommendation, etc.',
      englishBehavior: 'English uses subjunctive only in formal/written contexts after specific verbs (suggest, demand, insist, recommend, require, propose) and in set phrases. In informal English, "should" or constructions with "to" replace it.',
      contrastExamples: [
        { english: 'I suggest that he apply for the position. (formal subjunctive)', spanish: 'Sugiero que él solicite el puesto. (subjuntivo normal)', note: '"Apply" (not "applies") = mandative subjunctive. In informal English: "I suggest that he should apply" or "I suggest him applying."' },
        { english: 'It is vital that she be informed immediately. (formal)', spanish: 'Es vital que ella sea informada de inmediato.', note: '"Be" (not "is") = subjunctive after adjective of importance.' },
      ]
    },
    predictedErrors: [
      { error: 'The committee recommended that she goes to the meeting.', correction: 'The committee recommended that she go to the meeting.', whyEs: 'Subjuntivo mandativo: base verb sin -s en tercera persona.', frequency: 'very common' },
      { error: 'It is vital that the report is submitted today.', correction: 'It is vital that the report be submitted today.', whyEs: '"Be" (no "is") en el subjuntivo tras adjetivos de necesidad/importancia.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'The judge insisted that the witness _____ the full truth.', question: 'Subjunctive form:', options: ['tells', 'tell', 'told', 'would tell'], correct: 1, explanationEs: 'insist that + base verb (sin -s) = subjuntivo mandativo.' },
        { sentence: 'It is crucial that every delegate _____ present at the vote.', question: 'Subjunctive of TO BE:', options: ['is', 'are', 'be', 'were'], correct: 2, explanationEs: '"Be" es la forma subjuntiva de to be (no "is").' },
        { sentence: 'She demanded that he _____ the documents immediately.', question: 'Mandative subjunctive:', options: ['submits', 'submit', 'submitted', 'would submit'], correct: 1, explanationEs: 'demand that + base verb (sin -s).' },
      ],
      controlled: [
        { prompt: 'Rewrite formally: "The manager thinks she should take time off."', promptEs: 'Reescribe de forma formal con subjuntivo:', answer: 'The manager recommends / suggests that she take time off.', hint: 'recommend/suggest + that + base verb (no -s)' },
        { prompt: 'Use the phrase "if need be" in a sentence about your work or studies.', promptEs: 'Usa "if need be" en una frase sobre tu trabajo o estudios.', answer: 'I will work through the weekend, if need be.', hint: '"If need be" = if it is necessary' },
        { prompt: 'Correct: The committee recommended that she goes to the meeting.', promptEs: 'Corrige: El comité recomendó que ella fuera a la reunión.', answer: 'The committee recommended that she go to the meeting.', hint: 'Subjuntivo mandativo: base verb sin -s' },
        { prompt: 'Rewrite: It is vital that the report is submitted today.', promptEs: 'Reescribe con subjuntivo formal:', answer: 'It is vital that the report be submitted today.', hint: 'be (no "is") en subjuntivo tras adjetivos de necesidad' },
        { prompt: 'Complete: She insisted that he _____ (not leave) the room.', promptEs: 'Completa: Insistió en que él no saliera de la habitación.', answer: 'She insisted that he not leave the room.', hint: 'Subjuntivo negativo: that + subject + NOT + base verb' },
      ]
    },
    recycleInTopics: ['c1-formal-writing', 'c2-archaisms-and-formality'],
    tipEs: '💡 El subjuntivo inglés es "raro pero distinguido" — su uso correcto es una señal inmediata de C1/C2. Contexto principal: suggest/recommend/insist/demand/require/propose + that + sujeto + BASE VERB (sin -s, sin inflección). En escritura formal, "be" en lugar de "is/are".'
  },

  {
    id: 'c1-nominalization',
    title: 'Nominalization — Turning Verbs into Nouns',
    titleEs: 'Nominalización — Convertir Verbos en Sustantivos',
    level: 'C1',
    cefrLevel: 5,
    category: 'discourse',
    priority: 'high',
    prerequisiteIds: ['b2-passive-advanced', 'b2-participle-clauses'],
    explanation: 'Nominalization converts verbs and adjectives into nouns to create a more formal, dense, and academic writing style. It is a key feature of professional and academic English.',
    explanationEs: 'La nominalización convierte verbos y adjetivos en sustantivos para crear un estilo escrito más formal, denso y académico. Es una característica clave del inglés profesional y académico.',
    formationRules: [
      {
        label: 'Common nominalization suffixes',
        labelEs: 'Sufijos de nominalización más comunes',
        steps: [
          { step: '-tion / -sion: decide → decision, produce → production, discuss → discussion', stepEs: '-tion / -sion: decidir → decisión, producir → producción, discutir → discusión', example: 'The government made a decision. (decided → decision)', translation: 'El gobierno tomó una decisión.' },
          { step: '-ment: develop → development, achieve → achievement, improve → improvement', stepEs: '-ment: desarrollar → desarrollo', example: 'Significant improvement was noted.', translation: 'Se observó una mejora significativa.' },
          { step: '-ance / -ence: perform → performance, exist → existence, depend → dependence', stepEs: '-ance / -ence: actuar → actuación, existir → existencia', example: "The team's performance exceeded expectations.", translation: 'El rendimiento del equipo superó las expectativas.' },
          { step: '-al: approve → approval, dismiss → dismissal, propose → proposal', stepEs: '-al: aprobar → aprobación, despedir → despido', example: 'The proposal was rejected.', translation: 'La propuesta fue rechazada.' },
          { step: '-ure: fail → failure, expose → exposure, press → pressure', stepEs: '-ure: fallar → fallo, exponer → exposición', example: 'Failure to comply will result in penalties.', translation: 'El incumplimiento conllevará sanciones.' },
        ]
      },
      {
        label: 'Effect of nominalization on style',
        labelEs: 'Efecto de la nominalización en el estilo',
        steps: [
          { step: 'INFORMAL (verb-heavy): "They decided to investigate how technology affects young people."', stepEs: 'INFORMAL (con verbos): "Decidieron investigar cómo la tecnología afecta a los jóvenes."', example: 'They decided to investigate...', translation: 'Decidieron investigar...' },
          { step: 'FORMAL (nominalized): "The decision to investigate the effect of technology on young people was announced."', stepEs: 'FORMAL (nominalizado): "Se anunció la decisión de investigar el efecto de la tecnología en los jóvenes."', example: 'The decision to investigate the effect...', translation: 'La decisión de investigar el efecto...' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Nominalization is also common in formal Spanish',
      conceptEs: 'La nominalización también es común en el español formal',
      spanishBehavior: '"La implementación de la normativa" (Spanish uses nominalization heavily in academic/legal register)',
      englishBehavior: 'English academic/professional writing takes nominalization even further than Spanish. Over-nominalization (known as "zombie nouns") can make writing opaque. Balance is key.',
      contrastExamples: [
        { english: 'WEAK: "The committee failed to make an implementation of the strategy."\nBETTER: "The committee failed to implement the strategy."', spanish: 'El comité no logró implementar la estrategia.', note: '"Implementation" is correct when used as subject/object, but unnecessary when a simpler verb phrase works.' },
      ]
    },
    predictedErrors: [
      { error: 'The analyse of data showed clear patterns.', correction: 'The analysis of data showed clear patterns.', whyEs: 'La nominalización de "analyse" es "analysis" (forma irregular). No "the analyse".', frequency: 'common' },
      { error: 'They made a discussion about the results.', correction: 'They discussed the results. / They held a discussion about the results.', whyEs: '"Make a discussion" no es idiomático. Se dice "have/hold a discussion" o directamente "discuss".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'Identify the nominalization: "The rapid deterioration of the infrastructure required immediate intervention."', question: 'How many nominalizations are there?', options: ['1', '2', '3', '4'], correct: 1, explanationEs: '"deterioration" (to deteriorate) + "intervention" (to intervene) = 2 nominalizations.' },
        { sentence: '"The implementation of the new policy was delayed." — Which verb was nominalized?', question: 'Identify the source verb:', options: ['delay', 'implement', 'policy', 'new'], correct: 1, explanationEs: 'implementation ← to implement.' },
      ],
      controlled: [
        { prompt: 'Nominalize: "The company decided to expand, and this affected employment positively."', promptEs: 'Nominaliza para lograr un registro más formal:', answer: "The company's decision to expand had a positive effect on employment.", hint: 'decide → decision; affect → effect' },
        { prompt: 'Nominalize: "They failed to comply with the regulations, so they were fined."', promptEs: 'Nominaliza la oración:', answer: 'Their failure to comply with regulations resulted in a fine.', hint: 'fail → failure; fine → fine (noun)' },
        { prompt: 'Nominalize: "The committee approved the proposal."', promptEs: 'Nominaliza para registro formal:', answer: 'The committee gave its approval to the proposal. / The proposal received the committee\'s approval.', hint: 'approve → approval' },
        { prompt: 'Correct: The analyse of data showed clear patterns.', promptEs: 'Corrige: El análisis de datos mostró patrones claros.', answer: 'The analysis of data showed clear patterns.', hint: 'analyse → analysis (forma irregular)' },
        { prompt: 'Nominalize: "They investigated the cause of the accident."', promptEs: 'Nominaliza la oración:', answer: 'Their investigation into the cause of the accident was completed.', hint: 'investigate → investigation' },
      ]
    },
    recycleInTopics: ['c2-academic-register', 'c2-lexical-density'],
    tipEs: '💡 La nominalización es el marcador más claro del registro académico y formal en inglés. Transforma: investigate → investigation, decide → decision, develop → development, achieve → achievement. Pero cuidado: el exceso de nominalización hace el texto opaco ("zombie nouns"). El C1 sabe cuándo nominalizar y cuándo no.'
  },

  {
    id: 'c1-hedging',
    title: 'Hedging Language — Expressing Caution and Uncertainty',
    titleEs: 'Lenguaje de Cobertura (Hedging) — Expresar Cautela e Incertidumbre',
    level: 'C1',
    cefrLevel: 5,
    category: 'pragmatics',
    priority: 'high',
    prerequisiteIds: ['b1-modal-deduction', 'b2-passive-advanced'],
    explanation: 'Hedging is the use of cautious or vague language to indicate that a statement is not certain, to soften claims, or to show academic objectivity. It is essential in academic writing, research, and professional communication.',
    explanationEs: 'El hedging es el uso de lenguaje cauteloso o vago para indicar que una afirmación no es del todo cierta, suavizar afirmaciones o mostrar objetividad académica. Es esencial en la escritura académica, la investigación y la comunicación profesional.',
    formationRules: [
      {
        label: 'Modal hedges',
        labelEs: 'Modales de cobertura',
        steps: [
          { step: 'may / might / could: possible but not certain', stepEs: 'may / might / could: posible pero no seguro', example: 'These findings may suggest a link between diet and mental health.', translation: 'Estos hallazgos pueden sugerir un vínculo entre la dieta y la salud mental.' },
          { step: 'would: hypothetical or impersonal distancing', stepEs: 'would: distancia hipotética o impersonal', example: 'This would appear to support the hypothesis.', translation: 'Esto parecería apoyar la hipótesis.' },
          { step: 'should: something expected but not guaranteed', stepEs: 'should: algo esperado pero no garantizado', example: 'The results should be interpreted with caution.', translation: 'Los resultados deberían interpretarse con cautela.' },
        ]
      },
      {
        label: 'Epistemic verb hedges',
        labelEs: 'Verbos epistémicos de cobertura',
        steps: [
          { step: 'seem / appear + to: observable but not proven', stepEs: 'seem / appear + to: observable pero no probado', example: 'The patient appears to be responding to treatment.', translation: 'El paciente parece estar respondiendo al tratamiento.' },
          { step: 'tend to: general pattern with exceptions', stepEs: 'tend to: patrón general con excepciones', example: 'Younger learners tend to acquire pronunciation more naturally.', translation: 'Los aprendientes más jóvenes tienden a adquirir la pronunciación más naturalmente.' },
          { step: 'suggest / indicate / imply: data-driven cautious claim', stepEs: 'suggest / indicate / imply: afirmación cautelosa basada en datos', example: 'The data suggests a correlation, not a causal relationship.', translation: 'Los datos sugieren una correlación, no una relación causal.' },
        ]
      },
      {
        label: 'Adverbial and adjectival hedges',
        labelEs: 'Hedges adverbiales y adjetivales',
        steps: [
          { step: 'apparently, seemingly, presumably, possibly, arguably', stepEs: 'apparently, seemingly, presumably, possibly, arguably', example: 'Arguably the most significant finding is...', translation: 'El hallazgo posiblemente más significativo es...' },
          { step: 'to some extent, in some cases, under certain conditions', stepEs: 'to some extent, in some cases, under certain conditions', example: 'The results are valid to some extent.', translation: 'Los resultados son válidos en cierta medida.' },
          { step: 'it is possible / likely / probable that...', stepEs: 'it is possible / likely / probable that...', example: 'It is likely that further research will be needed.', translation: 'Es probable que sea necesaria más investigación.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Hedging as epistemic politeness',
      conceptEs: 'El hedging como cortesía epistémica',
      spanishBehavior: 'Spanish academic writing hedges less explicitly, relying more on subjunctive mood and set phrases like "cabe señalar que", "parece que", "podría sostenerse que".',
      englishBehavior: 'English academic writing uses hedging very explicitly and extensively. Failing to hedge in academic English makes claims sound arrogant or unsubstantiated. Over-hedging sounds weak — balance is key.',
      contrastExamples: [
        { english: '"The results suggest a possible link between X and Y." (hedged claim)', spanish: '"Los resultados sugieren un posible vínculo entre X e Y." (similar hedging)', note: 'Note "suggest" (not "prove") + "possible" (not "definite") — two layers of hedging in the same sentence.' },
      ]
    },
    predictedErrors: [
      { error: 'This study proves that all teenagers are addicted to social media.', correction: 'This study suggests that many teenagers may be heavily influenced by social media.', whyEs: '"Proves" y "all" son afirmaciones absolutas e indefendibles. El estilo académico requiere hedging: "suggests", "may be", "many".', frequency: 'very common' },
      { error: 'The data seems indicating high levels.', correction: 'The data seems to indicate high levels. / The data appears to indicate...', whyEs: '"Seem/appear" van seguidos de "to + infinitivo", no de gerundio.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'Identify ALL hedging devices: "This result might arguably suggest that, to some extent, the relationship between stress and performance is more complex than previously assumed."', question: 'How many hedging devices are used?', options: ['2', '3', '4', '5'], correct: 2, explanationEs: '"might" + "arguably" + "to some extent" + "more complex than previously assumed" = 4 hedging devices.' },
        { sentence: '"The patient _____ to be responding to treatment." — Best epistemic hedge:', question: 'Which verb best hedges this medical observation?', options: ['is', 'appears', 'proves', 'demonstrates'], correct: 1, explanationEs: '"Appears to" = observable but not proven — hedging.' },
      ],
      controlled: [
        { prompt: 'Make this claim more academic: "Social media causes depression in teenagers."', promptEs: 'Haz esta afirmación más académica con hedging:', answer: 'Research suggests that heavy social media use may be associated with increased rates of depression among some teenagers.', hint: 'suggest / may / some / be associated with (not "cause")' },
        { prompt: 'Write a hedged claim about any topic you know well.', promptEs: 'Escribe una afirmación con hedging sobre cualquier tema que conozcas bien.', answer: 'It would appear that regular exercise tends to have a positive effect on mood, at least in some individuals.', hint: 'would appear / tend to / at least in some cases' },
        { prompt: 'Correct: The data seems indicating high levels.', promptEs: 'Corrige: Los datos parecen indicar niveles altos.', answer: 'The data seems to indicate high levels.', hint: 'seem/appear + to + infinitive (no -ing)' },
        { prompt: 'Add hedging: "All teenagers are addicted to social media."', promptEs: 'Añade hedging a esta afirmación absoluta:', answer: 'Many teenagers may be heavily influenced by social media.', hint: 'Evitar "all" y "addicted"; usar "many", "may", "influenced"' },
        { prompt: 'Complete: It is _____ that further research will be needed.', promptEs: 'Completa con hedging: Es _____ que será necesaria más investigación.', answer: 'It is likely that further research will be needed.', hint: 'likely / possible / probable' },
      ]
    },
    recycleInTopics: ['c2-academic-register', 'c2-discourse-cohesion'],
    tipEs: '💡 El hedging tiene tres funciones: (1) Ser honesto sobre la incertidumbre. (2) Sonar académicamente objetivo. (3) Proteger tu argumento de refutación fácil. Frase modelo para memorizar: "The data suggests that X may be related to Y in certain contexts." — 3 capas de hedging en una sola frase.'
  },

  // ─── C2 MODULES ────────────────────────────────────────────────────────────

  {
    id: 'c2-discourse-cohesion',
    title: 'Discourse Cohesion and Coherence',
    titleEs: 'Cohesión y Coherencia del Discurso',
    level: 'C2',
    cefrLevel: 6,
    category: 'discourse',
    priority: 'high',
    prerequisiteIds: ['c1-hedging', 'c1-nominalization', 'c1-cleft-sentences'],
    explanation: 'At C2 level, discourse cohesion goes beyond basic connectors. It involves sophisticated use of reference, substitution, ellipsis, lexical cohesion, and information structure to create seamless, professional text.',
    explanationEs: 'En C2, la cohesión del discurso va más allá de los conectores básicos. Implica el uso sofisticado de referencia, sustitución, elipsis, cohesión léxica y estructura informativa para crear textos fluidos y profesionales.',
    formationRules: [
      {
        label: 'Lexical cohesion: chains and repetition strategies',
        labelEs: 'Cohesión léxica: cadenas y estrategias de repetición',
        steps: [
          { step: 'Synonyms and near-synonyms avoid repetition', stepEs: 'Sinónimos y cuasi-sinónimos evitan la repetición', example: 'The study examined poverty. The research analysed deprivation. This investigation found...', translation: 'El estudio examinó la pobreza. La investigación analizó la privación. Este análisis encontró...' },
          { step: 'Superordinates: replace specific terms with general ones', stepEs: 'Superordinados: reemplazar términos específicos por generales', example: 'The Airbus A380 landed safely. The aircraft had experienced... The vehicle carried...', translation: 'El Airbus A380 aterrizó con seguridad. La aeronave había experimentado... El vehículo transportaba...' },
          { step: 'Lexical reiteration with attitude: reframe the same idea with evaluative vocabulary', stepEs: 'Reiteración léxica con actitud: replantear la misma idea con vocabulario evaluativo', example: '"The policy was introduced. This controversial measure attracted criticism. The ill-conceived initiative..."', translation: '"La política fue introducida. Esta polémica medida atrajo críticas. La iniciativa mal concebida..."' },
        ]
      },
      {
        label: 'Grammatical cohesion: reference, substitution, ellipsis',
        labelEs: 'Cohesión gramatical: referencia, sustitución, elipsis',
        steps: [
          { step: 'Reference: this/that/these/those/such + noun to refer back', stepEs: 'Referencia: this/that/these/those/such + sustantivo para referirse a algo mencionado', example: 'The company collapsed. This failure shocked the market. Such events are increasingly common.', translation: 'La empresa quebró. Este fracaso impactó al mercado. Tales eventos son cada vez más comunes.' },
          { step: 'Substitution with "do so / do this": replaces a whole verb phrase', stepEs: 'Sustitución con "do so / do this": reemplaza toda una frase verbal', example: 'She recommended taking a break, and I did so. / He wanted to resign, but she persuaded him not to.', translation: 'Ella recomendó tomar un descanso, y lo hice. / Quería dimitir, pero ella le convenció de que no.' },
          { step: 'Ellipsis: omit recoverable information for fluency', stepEs: 'Elipsis: omitir información recuperable para mejorar la fluidez', example: '"Can you finish this?" "I\'ll try [to finish it]." / "Will you come?" "I might [come]."', translation: '"¿Puedes terminar esto?" "Intentaré." / "¿Vendrás?" "Puede."' },
        ]
      },
      {
        label: 'Information structure: Given-New and Theme-Rheme',
        labelEs: 'Estructura informativa: Dado-Nuevo y Tema-Rema',
        steps: [
          { step: 'Begin sentences with GIVEN (known) information, end with NEW information', stepEs: 'Comenzar con información DADA (conocida), terminar con información NUEVA', example: 'The new policy [given: already mentioned] was announced last week. It will take effect [new] in January [new].', translation: 'La nueva política se anunció la semana pasada. Entrará en vigor en enero.' },
          { step: 'Passive voice allows reorganisation of Given-New', stepEs: 'La voz pasiva permite reorganizar lo dado y lo nuevo', example: '"Einstein developed the theory" vs. "The theory was developed by Einstein" — different emphasis, same facts.', translation: 'Distinta información en posición de énfasis según el contexto previo.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Cohesion strategies differ across languages',
      conceptEs: 'Las estrategias de cohesión difieren entre lenguas',
      spanishBehavior: 'Spanish tolerates more pronoun dropping (pro-drop) and relies heavily on verb endings to maintain reference. Explicit subjects are often omitted.',
      englishBehavior: 'English generally requires explicit subjects and pronouns. Cohesion is achieved through lexical choice, reference words (this/that/such), and information placement rather than morphology.',
      contrastExamples: [
        { english: '"The report was released. It revealed serious flaws. These findings prompted..."', spanish: '"El informe se publicó. Revelaba graves fallos. Estos hallazgos motivaron..."', note: 'Both languages use demonstrative reference ("these findings" / "estos hallazgos") but English maintains the explicit subject ("it") where Spanish would drop it.' },
      ]
    },
    predictedErrors: [
      { error: 'The government introduced new laws. They are controversial. They have caused protests. They will be reviewed.', correction: 'The government introduced new laws. These controversial measures have prompted widespread protests and are currently under review.', whyEs: 'Repetir "they" sin variación léxica crea un texto mecánico. En C2, se varía la referencia con sinónimos, superordinados y estructuras nominales.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '"The company launched a new product. This bold move surprised investors. Such decisions often signal a strategic shift."', question: 'How many different cohesive reference devices are used for "product/move/decisions"?', options: ['1', '2', '3', '4'], correct: 2, explanationEs: '"This bold move" (referencia + evaluación) + "Such decisions" (generalización) = 2 sophisticated cohesive devices.' },
        { sentence: '"She recommended taking a break, and I did so." — What does "did so" replace?', question: 'Substitution:', options: ['taking a break', 'recommended', 'she', 'I'], correct: 0, explanationEs: '"Do so" sustituye toda la frase verbal "taking a break".' },
        { sentence: 'Which improves cohesion? "The policy was introduced. _____ measure attracted criticism."', question: 'Reference + evaluation:', options: ['This', 'This controversial', 'The', 'A'], correct: 1, explanationEs: '"This controversial" añade referencia y actitud evaluativa.' },
      ],
      controlled: [
        { prompt: 'Rewrite with better cohesion (use synonyms, reference words, ellipsis):\n"The report found problems. The problems are serious. The problems need to be fixed. Experts should fix the problems quickly."', promptEs: 'Reescribe con mejor cohesión:', answer: 'The report identified serious problems. These issues require urgent attention. Experts have been urged to address them without delay.', hint: 'Use: these issues / them / identified / urged / without delay' },
        { prompt: 'Replace repetition with "do so": "He wanted to resign, but she persuaded him not to resign."', promptEs: 'Sustituye la repetición con "do so" o elipsis:', answer: 'He wanted to resign, but she persuaded him not to.', hint: 'Elipsis: omit "resign" (recuperable)' },
        { prompt: 'Improve: "The study examined poverty. The research analysed poverty. The investigation found poverty."', promptEs: 'Mejora la cohesión léxica (evita repetición):', answer: 'The study examined poverty. The research analysed deprivation. This investigation found widespread need.', hint: 'Sinónimos: deprivation, need. Referencia: this investigation' },
        { prompt: 'Add cohesive reference: "The Airbus A380 landed safely. _____ had experienced turbulence."', promptEs: 'Añade referencia con superordinado:', answer: 'The aircraft had experienced turbulence.', hint: 'Superordinado: aircraft (más general que Airbus A380)' },
        { prompt: 'Complete with ellipsis: "Can you finish this?" "I\'ll try _____."', promptEs: 'Completa con elipsis: ¿Puedes terminar esto? Intentaré.', answer: "I'll try [to].", hint: 'Omitir "to finish it" — información recuperable' },
      ]
    },
    recycleInTopics: ['c2-register-shift', 'c2-pragmatic-implicature'],
    tipEs: '💡 El texto bien cohesionado en C2 "fluye" — el lector no tiene que releer. Cuatro herramientas: (1) Cadenas léxicas (sinónimos/superordinados). (2) Palabras de referencia (this/these/such). (3) Elipsis donde la información es recuperable. (4) Estructura Dado→Nuevo: información conocida al inicio, nueva al final de la oración.'
  },

  {
    id: 'c2-register-shift',
    title: 'Register Shift and Style Variation',
    titleEs: 'Cambio de Registro y Variación de Estilo',
    level: 'C2',
    cefrLevel: 6,
    category: 'pragmatics',
    priority: 'high',
    prerequisiteIds: ['c1-hedging', 'c1-nominalization', 'c1-subjunctive'],
    explanation: 'C2 speakers can shift consciously between formal, neutral, and informal registers, recognise the stylistic implications of lexical choices, and adapt language to context, relationship, and purpose.',
    explanationEs: 'Los hablantes de C2 pueden cambiar conscientemente entre registros formales, neutros e informales, reconocer las implicaciones estilísticas de las elecciones léxicas y adaptar el lenguaje al contexto, la relación y el propósito.',
    formationRules: [
      {
        label: 'The register spectrum',
        labelEs: 'El espectro del registro',
        steps: [
          { step: 'FROZEN / LEGAL: "The aforementioned party shall be liable for any breach thereof."', stepEs: 'CONGELADO / LEGAL: fórmulas legales y rituales', example: 'Hereinafter referred to as "the Company"...', translation: '(fórmulas legales, documentos oficiales)' },
          { step: 'FORMAL / ACADEMIC: Nominalization, passive, hedging, Latinate vocabulary', stepEs: 'FORMAL / ACADÉMICO: nominalización, pasiva, hedging, vocabulario latinista', example: 'The investigation yielded inconclusive results.', translation: 'La investigación arrojó resultados no concluyentes.' },
          { step: 'NEUTRAL / PROFESSIONAL: Direct but polite; active voice preferred', stepEs: 'NEUTRAL / PROFESIONAL: directo pero educado; preferencia por la voz activa', example: 'We have reviewed your application and will contact you shortly.', translation: 'Hemos revisado tu solicitud y te contactaremos pronto.' },
          { step: 'INFORMAL / COLLOQUIAL: Contractions, phrasal verbs, ellipsis, slang', stepEs: 'INFORMAL / COLOQUIAL: contracciones, phrasal verbs, elipsis, argot', example: "We've looked over your stuff — we'll get back to you.", translation: 'Hemos visto tus cosas. Ya te diremos.' },
        ]
      },
      {
        label: 'Key register markers',
        labelEs: 'Marcadores clave de registro',
        steps: [
          { step: 'Vocabulary: use (neutral) / utilise (formal) / use up (informal phrasal)', stepEs: 'Vocabulario: use (neutro) / utilise (formal) / use up (informal)', example: 'to get → to obtain (formal) / to nab (very informal)', translation: 'conseguir → obtener (formal) / pillar/agarrar (informal)' },
          { step: 'Syntax: passive (formal) → active (neutral/informal)', stepEs: 'Sintaxis: pasiva (formal) → activa (neutro/informal)', example: '"It has been decided that..." (formal) vs. "We\'ve decided to..." (neutral)', translation: '"Se ha decidido que..." vs. "Hemos decidido..."' },
          { step: 'Pragmatic directness: indirect requests (formal) vs. direct (informal)', stepEs: 'Directness pragmática: peticiones indirectas (formal) vs. directas (informal)', example: '"Would it be possible to extend the deadline?" (formal) vs. "Can you give me more time?" (informal)', translation: '¿Sería posible ampliar el plazo? vs. ¿Me das más tiempo?' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Register awareness across two languages',
      conceptEs: 'Conciencia del registro en dos lenguas',
      spanishBehavior: 'Spanish formal register uses "usted", passive ("se procederá a"), subjunctive, and Latinate vocabulary. Informal uses "tú", contractions ("¿qué pasa?"), and slang.',
      englishBehavior: 'English lacks the formal/informal pronoun distinction (no tú/usted), so register is signalled entirely through vocabulary choice, syntax, and pragmatic conventions — making register errors harder to spot but equally important.',
      contrastExamples: [
        { english: '"I am writing to enquire about the vacancy." (formal)\n"Just checking if the job\'s still going?" (very informal)', spanish: '"Me pongo en contacto para interesarme por el puesto." (formal)\n"Que si el trabajo sigue libre." (coloquial)', note: 'The same communicative act; radically different registers. C2 can use either appropriately.' },
      ]
    },
    predictedErrors: [
      { error: 'Dear John, I am writing to say that the stuff you sent was pretty good. Cheers!', correction: 'A formal letter should use "Dear Mr. [Surname]," and formal vocabulary throughout, not "stuff", "pretty good", or "Cheers"', whyEs: 'Mezcla de registro formal (estructura de carta) con informal léxico y cierre. La consistencia de registro es esencial en C2.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'Sort from most to least formal: (a) "We require your immediate attention to this matter." (b) "You need to sort this out now." (c) "This matter warrants prompt consideration."', question: 'Correct order (most → least formal):', options: ['a, b, c', 'c, a, b', 'a, c, b', 'c, b, a'], correct: 1, explanationEs: '"warrants prompt consideration" (C) = most formal; "requires your immediate attention" (A) = formal; "sort this out" (B) = informal phrasal verb.' },
        { sentence: '"Would it be possible to extend the deadline?" — Register:', question: 'What register is this request?', options: ['Informal', 'Formal', 'Neutral', 'Slang'], correct: 1, explanationEs: 'Petición indirecta = registro formal.' },
        { sentence: 'Which is a register error? Formal letter: "Dear John, the stuff you sent was pretty good. Cheers!"', question: 'Identify the inconsistency:', options: ['Dear John', 'stuff / pretty good / Cheers', 'you sent', 'was'], correct: 1, explanationEs: 'Mezcla registro formal (estructura) con léxico informal (stuff, pretty good, Cheers).' },
      ],
      controlled: [
        { prompt: 'Rewrite in formal register: "The new policy is a disaster and nobody likes it."', promptEs: 'Reescribe en registro formal:', answer: 'The newly implemented policy has attracted significant criticism and appears to lack broad support among stakeholders.', hint: 'nominalization + hedging + passive + formal vocabulary' },
        { prompt: 'Rewrite in informal register: "The implementation of the aforementioned strategy has been met with considerable scepticism."', promptEs: 'Reescribe en registro informal:', answer: "Nobody really bought into the new plan.", hint: 'phrasal verbs + contractions + simple vocabulary' },
        { prompt: 'Formal alternative for: "We\'ve decided to..."', promptEs: 'Alternativa formal para: Hemos decidido...', answer: 'It has been decided that...', hint: 'Pasiva impersonal' },
        { prompt: 'Informal alternative for: "I am writing to enquire about the vacancy."', promptEs: 'Alternativa informal para: Me pongo en contacto para interesarme por el puesto.', answer: "Just checking if the job's still going?", hint: 'Contracciones + phrasal + coloquial' },
        { prompt: 'Correct register: Rewrite for a job application: "Can you give me more time?"', promptEs: 'Corrige el registro para una solicitud de empleo:', answer: 'Would it be possible to extend the deadline?', hint: 'Petición indirecta formal' },
      ]
    },
    recycleInTopics: ['c2-discourse-cohesion', 'c2-pragmatic-implicature'],
    tipEs: '💡 El registro no es solo vocabulario — es un sistema completo: elección léxica + sintaxis + pragmática + actitud. En C2, el error no es usar palabras incorrectas sino usar palabras correctas en el registro incorrecto. "Commence" en un texto de WhatsApp y "start" en un documento legal son igualmente erróneos en sus contextos.'
  },

  {
    id: 'c2-pragmatic-implicature',
    title: 'Pragmatic Implicature and Indirect Communication',
    titleEs: 'Implicatura Pragmática y Comunicación Indirecta',
    level: 'C2',
    cefrLevel: 6,
    category: 'pragmatics',
    priority: 'medium',
    prerequisiteIds: ['c1-hedging', 'c2-register-shift'],
    explanation: 'At C2 level, learners understand not just what is said but what is implied (implicature), including understatement, irony, euphemism, and the pragmatic principles that govern cooperative conversation.',
    explanationEs: 'En C2, los aprendientes entienden no solo lo que se dice sino lo que se implica (implicatura), incluyendo understatement, ironía, eufemismo y los principios pragmáticos que rigen la conversación cooperativa.',
    formationRules: [
      {
        label: "Grice's Maxims and implicature",
        labelEs: 'Las Máximas de Grice y la implicatura',
        steps: [
          { step: 'Quantity: say enough, but not too much. Flouting it generates implicature.', stepEs: 'Cantidad: di suficiente pero no demasiado. Violarlo genera implicatura.', example: '"Can you pass the salt?" → Literal: Can you physically? Real meaning: Please pass it.', translation: '¿Puedes pasar la sal? → ¿Tienes capacidad física? vs. Pásame la sal.' },
          { step: 'Quality: say what you believe to be true. Flouting it = irony.', stepEs: 'Cualidad: di lo que crees verdadero. Violarlo = ironía.', example: '"Oh, brilliant!" (when something goes badly wrong) = sarcasm', translation: '"¡Brillante!" (cuando algo sale muy mal) = sarcasmo' },
          { step: 'Relation: be relevant. Flouting it = indirect refusal or topic avoidance.', stepEs: 'Relación: sé relevante. Violarlo = rechazo indirecto o evasión.', example: 'A: "Do you want to come to my party?" B: "I have an early start tomorrow." (=indirect refusal)', translation: 'A: ¿Vienes a mi fiesta? B: Tengo que madrugar. (=rechazo indirecto)' },
        ]
      },
      {
        label: 'British understatement and litotes',
        labelEs: 'Understatement británico y lítotes',
        steps: [
          { step: 'Understatement: saying less than what is meant (very British)', stepEs: 'Understatement: decir menos de lo que se quiere decir (muy británico)', example: '"It\'s not bad at all." = It\'s excellent. / "I\'m a bit tired." = completely exhausted.', translation: '"No está nada mal." = Es excelente. / "Estoy un poco cansado." = completamente agotado.' },
          { step: 'Litotes: double negative for positive (softened)', stepEs: 'Lítote: doble negativo para afirmativo (suavizado)', example: '"Not uncommon" = quite common. "Not insignificant" = important. "Not entirely wrong" = somewhat right.', translation: '"No es infrecuente" = bastante común. "No es insignificante" = importante.' },
        ]
      },
      {
        label: 'Euphemism and face-threatening acts',
        labelEs: 'Eufemismo y actos amenazantes para la imagen',
        steps: [
          { step: 'Euphemism: using softer language for difficult topics', stepEs: 'Eufemismo: usar lenguaje más suave para temas difíciles', example: '"Between jobs" (unemployed), "let go" (fired), "pass away" (die), "economical with the truth" (lying).', translation: '"Entre trabajos" (desempleado), "dejar ir" (despedir), "fallecer" (morir).' },
          { step: 'Positive face: respect for autonomy and approval needs', stepEs: 'Imagen positiva: respeto por la autonomía y la necesidad de aprobación', example: '"I wonder if you might possibly be able to...?" (extreme politeness = high face threat)', translation: '"Me preguntaba si sería posible que tú quizás pudieras...?" (hipercortesía = alta amenaza a la imagen)' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Degrees of indirectness across cultures',
      conceptEs: 'Grados de indirectness entre culturas',
      spanishBehavior: 'Spanish communication tends to be more direct than British English. "No me gusta" is acceptable where British English would say "It\'s not quite what I had in mind."',
      englishBehavior: 'British English has a strong tradition of indirectness, understatement, and face-saving. "That\'s quite an interesting approach" from a British person may mean "I strongly disagree." American English is more direct.',
      contrastExamples: [
        { english: '"We might want to revisit this aspect." (British professional = this is wrong, change it)', spanish: '"Habría que repensar esto." (algo así en español formal)', note: 'In British professional contexts, indirect criticism is the norm. Taking "might want to revisit" literally (as optional) is a costly cross-cultural misunderstanding.' },
      ]
    },
    predictedErrors: [
      { error: 'Taking "It\'s a bit warm in here, isn\'t it?" as only a weather remark when someone is asking you to open a window.', correction: 'Indirect requests in English often take the form of observations or questions. Respond to the implied request, not just the literal words.', whyEs: 'La implicatura conversacional en inglés (especialmente en contextos británicos) requiere interpretar el significado implícito, no solo el literal.', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: '"I\'ve heard worse." (said of a performance)', question: 'What does this really mean pragmatically?', options: ['It was very good', 'It was average or poor but said politely', 'It was the worst they had heard', 'It was genuinely competitive'], correct: 1, explanationEs: '"I\'ve heard worse" = understatement. No dice que fue bueno — solo que no fue el peor. Elogio mínimo = crítica velada.' },
        { sentence: 'A: "Do you like my new haircut?" B: "It\'s certainly very... bold."', question: 'What is B implying?', options: ['It looks very professional', 'They do not like it but are being polite', 'They think it is fashionable', 'They are genuinely impressed'], correct: 1, explanationEs: 'La pausa ("very... bold") y la elección de "bold" (atrevido, llamativo) implican desaprobación sin decirla directamente.' },
        { sentence: '"Not uncommon" — What does this litotes mean?', question: 'Double negative for positive:', options: ['Very rare', 'Quite common', 'Impossible', 'Unusual'], correct: 1, explanationEs: 'Litotes: not + negative = positive suavizado.' },
        { sentence: 'A: "Do you want to come to my party?" B: "I have an early start tomorrow." — B means:', question: 'Indirect refusal:', options: ['Yes, I will come', 'I am refusing indirectly', 'I will decide later', 'I need more information'], correct: 1, explanationEs: 'Flouting Relation: B evita responder directamente = rechazo cortés.' },
        { sentence: '"Between jobs" is a euphemism for:', question: 'Softer language:', options: ['travelling', 'unemployed', 'retired', 'studying'], correct: 1, explanationEs: 'Eufemismo para "desempleado".' },
      ],
      controlled: [
        { prompt: 'You think your colleague\'s report is badly written. Write a British English tactful comment (implicature, not direct criticism).', promptEs: 'Tu colega ha escrito un informe malo. Escribe un comentario diplomático al estilo del inglés británico:', answer: '"This is certainly an interesting first draft — there might be a few areas we could develop further, particularly in terms of structure and clarity."', hint: 'Use: interesting (neutral), might, could, a few areas, develop further (= it needs a lot of work)' },
        { prompt: 'Rewrite with understatement: "The food was terrible."', promptEs: 'Reescribe con understatement británico:', answer: 'The food wasn\'t great. / The food left something to be desired.', hint: 'Decir menos de lo que se quiere decir' },
        { prompt: 'Use litotes: "It is quite common."', promptEs: 'Reescribe con lítote (doble negativo):', answer: 'It is not uncommon.', hint: 'not + negative adjective = positive' },
        { prompt: 'Euphemism for "fired":', promptEs: 'Eufemismo para "despedido":', answer: 'let go / made redundant / released', hint: 'Lenguaje más suave' },
        { prompt: 'Indirect request: Someone says "It\'s a bit warm in here, isn\'t it?" — What might they want?', promptEs: 'Petición indirecta: ¿Qué podrían querer?', answer: 'They might want you to open a window / turn on the air conditioning.', hint: 'Las observaciones pueden ser peticiones encubiertas' },
      ]
    },
    recycleInTopics: ['c2-discourse-cohesion', 'c2-register-shift'],
    tipEs: '💡 La implicatura es el dominio lingüístico más difícil de alcanzar en una L2 porque requiere no solo conocer las palabras sino entender las convenciones sociales y culturales que rigen cuándo NO decir las cosas directamente. En el inglés británico: "quite good" = mediocre; "not bad" = bueno; "I see what you mean" = no estoy de acuerdo. Un hablante de C2 entiende —y usa— este código.'
  },

  // ─── A2 MODULES ───────────────────────────────────────────────────────────────

  {
    id: 'a2-prepositions-time-place',
    title: 'Prepositions of Time and Place: IN, ON, AT',
    titleEs: 'Preposiciones de tiempo y lugar: IN, ON, AT',
    level: 'A2',
    cefrLevel: 2,
    category: 'prepositions',
    priority: 'critical',
    prerequisiteIds: [],
    explanation: 'English uses three distinct prepositions — IN, ON, and AT — to express time and place, each with specific rules. For time: "in" is used for longer periods (months, years, seasons, parts of the day), "on" for specific days and dates, and "at" for precise times and certain fixed expressions. For place: "in" indicates enclosed or large areas (countries, cities, rooms), "on" indicates surfaces or lines (streets, floors), and "at" indicates specific points or locations (addresses, buildings). Mastering this three-way distinction is essential for clear communication at the A2 level.',
    explanationEs: 'El inglés utiliza tres preposiciones distintas — IN, ON y AT — para expresar tiempo y lugar, cada una con reglas específicas. Para el tiempo: "in" se usa para periodos largos (meses, años, estaciones, partes del día), "on" para días y fechas específicas, y "at" para horas exactas y ciertas expresiones fijas. Para el lugar: "in" indica espacios cerrados o grandes (países, ciudades, habitaciones), "on" superficies o líneas (calles, pisos), y "at" puntos o ubicaciones específicas (direcciones, edificios). Dominar esta distinción triple es esencial para la comunicación clara a nivel A2.',
    formationRules: [
      {
        label: 'Prepositions of Time',
        labelEs: 'Preposiciones de tiempo',
        formula: 'IN + month/year/season/part of day | ON + day/date | AT + clock time/fixed expressions',
        steps: [
          { step: 'Use IN for months, years, seasons, and parts of the day', stepEs: 'Usa IN para meses, años, estaciones y partes del día', example: 'I was born in March / in 2001 / in summer / in the morning.', translation: 'Nací en marzo / en 2001 / en verano / por la mañana.' },
          { step: 'Use ON for specific days and dates', stepEs: 'Usa ON para días y fechas específicas', example: 'The meeting is on Monday / on 5th July / on Christmas Day.', translation: 'La reunión es el lunes / el 5 de julio / el día de Navidad.' },
          { step: 'Use AT for precise clock times and fixed expressions', stepEs: 'Usa AT para horas exactas y expresiones fijas', example: 'Class starts at 9 o\'clock / at noon / at night / at the weekend.', translation: 'La clase empieza a las 9 / al mediodía / por la noche / el fin de semana.' },
        ]
      },
      {
        label: 'Prepositions of Place',
        labelEs: 'Preposiciones de lugar',
        formula: 'IN + enclosed/large area | ON + surface/line | AT + specific point',
        steps: [
          { step: 'Use IN for countries, cities, rooms, and enclosed spaces', stepEs: 'Usa IN para países, ciudades, habitaciones y espacios cerrados', example: 'She lives in Spain / in Madrid / in a small flat.', translation: 'Ella vive en España / en Madrid / en un piso pequeño.' },
          { step: 'Use ON for streets, surfaces, and floors', stepEs: 'Usa ON para calles, superficies y pisos', example: 'The shop is on Main Street / on the second floor / on the table.', translation: 'La tienda está en Main Street / en el segundo piso / sobre la mesa.' },
          { step: 'Use AT for specific addresses and points', stepEs: 'Usa AT para direcciones y puntos específicos', example: 'I\'ll meet you at the station / at 25 Park Avenue / at school.', translation: 'Te encontraré en la estación / en el 25 de Park Avenue / en la escuela.' },
        ]
      }
    ],
    signalWords: [
      { word: 'in the morning', meaning: 'during the morning hours', meaningEs: 'por la mañana' },
      { word: 'on Monday', meaning: 'on a specific day', meaningEs: 'el lunes' },
      { word: 'at 3 o\'clock', meaning: 'at a precise time', meaningEs: 'a las 3 en punto' },
      { word: 'in Spain', meaning: 'inside a country', meaningEs: 'en España' },
      { word: 'at the station', meaning: 'at a specific point/place', meaningEs: 'en la estación' },
    ],
    l1Contrast: {
      concept: 'Three prepositions vs. one',
      conceptEs: 'Tres preposiciones frente a una',
      spanishBehavior: 'Spanish uses "en" for almost all time and place contexts where English distinguishes IN, ON, and AT. "En marzo", "en lunes", "en la mesa" all use the same preposition.',
      englishBehavior: 'English strictly separates IN (enclosed/long periods), ON (surfaces/specific days), and AT (points/precise times). Using the wrong one sounds unnatural.',
      contrastExamples: [
        { english: 'I live on Main Street.', spanish: 'Vivo en Main Street.', note: 'Spanish "en" → English "on" for streets.' },
        { english: 'The concert is at 8 p.m. on Saturday in July.', spanish: 'El concierto es a las 8 el sábado en julio.', note: 'English uses three different prepositions in one sentence; Spanish uses "a/el/en".' },
      ]
    },
    predictedErrors: [
      { error: 'I live in Main Street.', correction: 'I live on Main Street.', whyEs: 'En español se dice "en Main Street", pero en inglés las calles llevan ON, no IN.', frequency: 'very common' },
      { error: 'I arrive in Monday.', correction: 'I arrive on Monday.', whyEs: 'Los días de la semana siempre llevan ON en inglés, no IN.', frequency: 'very common' },
      { error: 'See you in 3 o\'clock.', correction: 'See you at 3 o\'clock.', whyEs: 'Las horas exactas siempre van con AT en inglés.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'The train leaves ___ 7:30 ___ the morning ___ Friday.', question: 'Choose the correct prepositions to complete this sentence.', options: ['at / in / on', 'in / at / on', 'on / in / at', 'at / on / in'], correct: 0, explanationEs: 'AT para la hora (7:30), IN para la parte del día (the morning), ON para el día específico (Friday).' },
        { sentence: 'My grandmother lives ___ a small village ___ the south of France.', question: 'Which prepositions correctly complete the sentence?', options: ['on / at', 'in / in', 'at / on', 'in / at'], correct: 1, explanationEs: 'IN para un pueblo (espacio cerrado/zona) e IN para una región geográfica amplia.' },
        { sentence: 'The meeting is ___ 15th March ___ 2025.', question: 'Date and year:', options: ['on / in', 'in / on', 'at / in', 'on / on'], correct: 0, explanationEs: 'ON para fechas específicas; IN para años.' },
        { sentence: 'I\'ll meet you ___ the airport ___ noon.', question: 'Place and time:', options: ['at / at', 'in / in', 'on / at', 'at / on'], correct: 0, explanationEs: 'AT para lugares específicos (airport) y horas exactas (noon).' },
        { sentence: 'We usually have lunch ___ 1 o\'clock ___ the afternoon.', question: 'Precise time and part of day:', options: ['at / in', 'in / at', 'on / in', 'at / on'], correct: 0, explanationEs: 'AT para hora exacta; IN para la tarde (part of day).' },
      ],
      controlled: [
        { prompt: 'Complete: "I have an appointment ___ Tuesday ___ 10 a.m."', promptEs: 'Completa: "Tengo una cita ___ martes ___ las 10."', answer: 'on / at', hint: 'Day = ON, precise time = AT' },
        { prompt: 'Complete: "She works ___ a bank ___ Oxford Street."', promptEs: 'Completa: "Ella trabaja ___ un banco ___ Oxford Street."', answer: 'in / on', hint: 'Enclosed space = IN, street = ON' },
        { prompt: 'Complete: "The shop opens ___ 9 ___ the morning and closes ___ 8 ___ night."', promptEs: 'Completa con las preposiciones correctas.', answer: 'at / in / at / at', hint: 'at + hour; in the morning; at night' },
        { prompt: 'Complete: "I was born ___ 1990 ___ summer."', promptEs: 'Completa: Nací en 1990 en verano.', answer: 'in / in', hint: 'Year and season = IN' },
        { prompt: 'Complete: "The conference is ___ the 20th ___ June ___ Barcelona."', promptEs: 'Completa: La conferencia es el 20 de junio en Barcelona.', answer: 'on / of / in', hint: 'Date = ON; city = IN' },
      ]
    },
    recycleInTopics: ['a2-there-was-were', 'a2-frequency-adverbs'],
    tipEs: '💡 El truco es pensar así: IN = dentro de algo o periodo largo, ON = encima de / día concreto, AT = punto exacto. Cuando dudes, piensa si es un espacio grande (IN), una superficie o día (ON), o un punto exacto (AT). ¡Cuidado! "At night" y "in the morning" son excepciones que hay que memorizar.'
  },

  {
    id: 'a2-question-formation',
    title: 'Question Formation with DO/DOES/DID',
    titleEs: 'Formación de preguntas con DO/DOES/DID',
    level: 'A2',
    cefrLevel: 2,
    category: 'questions',
    priority: 'critical',
    prerequisiteIds: ['a1-present-simple'],
    explanation: 'In English, most questions in the present simple and past simple require an auxiliary verb (DO, DOES, or DID) that does not exist in Spanish. The structure is: Question word + auxiliary + subject + base verb. DOES is used with he/she/it in the present, DO with I/you/we/they, and DID with all subjects in the past. When the auxiliary is added, the main verb stays in its base form (no -s, no -ed). This is one of the most important structures to master at A2.',
    explanationEs: 'En inglés, la mayoría de las preguntas en presente simple y pasado simple requieren un verbo auxiliar (DO, DOES o DID) que no existe en español. La estructura es: Palabra interrogativa + auxiliar + sujeto + verbo base. DOES se usa con he/she/it en presente, DO con I/you/we/they, y DID con todos los sujetos en pasado. Cuando se añade el auxiliar, el verbo principal se queda en forma base (sin -s, sin -ed). Es una de las estructuras más importantes del nivel A2.',
    formationRules: [
      {
        label: 'Yes/No Questions',
        labelEs: 'Preguntas de sí/no',
        formula: 'DO/DOES/DID + subject + base verb + ...?',
        steps: [
          { step: 'Choose the correct auxiliary: DO (I/you/we/they), DOES (he/she/it), DID (past)', stepEs: 'Elige el auxiliar correcto: DO (I/you/we/they), DOES (he/she/it), DID (pasado)', example: 'Do you like coffee? / Does she work here? / Did they arrive?', translation: '¿Te gusta el café? / ¿Trabaja ella aquí? / ¿Llegaron?' },
          { step: 'Keep the main verb in base form (no -s, no -ed)', stepEs: 'Mantén el verbo principal en forma base (sin -s, sin -ed)', example: 'Does he play tennis? (NOT: Does he plays...)', translation: '¿Juega él al tenis? (NO: Does he plays...)' },
        ]
      },
      {
        label: 'Wh- Questions',
        labelEs: 'Preguntas con Wh-',
        formula: 'Wh-word + DO/DOES/DID + subject + base verb + ...?',
        steps: [
          { step: 'Place the question word first, then the auxiliary', stepEs: 'Coloca la palabra interrogativa primero, luego el auxiliar', example: 'Where do you live? / What does she want? / When did it happen?', translation: '¿Dónde vives? / ¿Qué quiere ella? / ¿Cuándo pasó?' },
          { step: 'Exception: When WHO/WHAT is the subject, no auxiliary is needed', stepEs: 'Excepción: Cuando WHO/WHAT es el sujeto, no se necesita auxiliar', example: 'Who called you? (NOT: Who did call you?)', translation: '¿Quién te llamó?' },
        ]
      }
    ],
    signalWords: [
      { word: 'what', meaning: 'asks about a thing or action', meaningEs: 'pregunta por una cosa o acción' },
      { word: 'where', meaning: 'asks about a place', meaningEs: 'pregunta por un lugar' },
      { word: 'when', meaning: 'asks about a time', meaningEs: 'pregunta por un momento' },
      { word: 'why', meaning: 'asks about a reason', meaningEs: 'pregunta por una razón' },
      { word: 'how', meaning: 'asks about manner or quantity', meaningEs: 'pregunta por manera o cantidad' },
    ],
    l1Contrast: {
      concept: 'Auxiliary-based questions vs. intonation-only',
      conceptEs: 'Preguntas con auxiliar frente a solo entonación',
      spanishBehavior: 'Spanish can form questions simply by changing intonation ("¿Tú vives aquí?") or inverting subject-verb ("¿Vives tú aquí?"). No auxiliary verb is needed.',
      englishBehavior: 'English requires DO/DOES/DID as an auxiliary in present/past simple questions. Simply changing intonation ("You live here?") is informal and not standard.',
      contrastExamples: [
        { english: 'Where do you live?', spanish: '¿Dónde vives?', note: 'English needs "do" as auxiliary; Spanish simply inverts or uses intonation.' },
        { english: 'What does this word mean?', spanish: '¿Qué significa esta palabra?', note: 'English: Wh + DOES + subject + base verb. Spanish: no auxiliary needed.' },
      ]
    },
    predictedErrors: [
      { error: 'Where you live?', correction: 'Where do you live?', whyEs: 'En español no hay auxiliar, pero en inglés es obligatorio poner DO/DOES/DID en las preguntas.', frequency: 'very common' },
      { error: 'What means this?', correction: 'What does this mean?', whyEs: 'Es un calco del español "¿Qué significa esto?". En inglés hay que usar el auxiliar DOES + verbo base.', frequency: 'very common' },
      { error: 'Did she went to school?', correction: 'Did she go to school?', whyEs: 'Cuando usas DID, el verbo principal debe ir en forma base, no en pasado.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ your parents _____ in Madrid?', question: 'Choose the correct auxiliary and verb form.', options: ['Do / live', 'Does / live', 'Do / lives', 'Did / lived'], correct: 0, explanationEs: '"Your parents" es plural → DO. Con DO, el verbo va en forma base: live.' },
        { sentence: 'What time _____ the film _____ last night?', question: 'Which auxiliary and verb form is correct?', options: ['does / start', 'did / started', 'did / start', 'do / start'], correct: 2, explanationEs: '"Last night" = pasado → DID. Después de DID, el verbo va en forma base: start (no started).' },
        { sentence: 'Where _____ she _____? (work)', question: 'Present simple question with he/she/it:', options: ['does / works', 'does / work', 'do / work', 'is / working'], correct: 1, explanationEs: 'Does + she + verb base. Error común: "Does she works?".' },
        { sentence: '_____ you _____ any questions? (have)', question: 'Yes/No question with "you":', options: ['Do / have', 'Does / have', 'Did / had', 'Are / having'], correct: 0, explanationEs: 'You = DO. Verbo en base: have (no has).' },
        { sentence: 'When _____ they _____ the meeting? (start)', question: 'Past question:', options: ['do / start', 'did / started', 'did / start', 'were / started'], correct: 2, explanationEs: 'DID + base verb. "Started" es incorrecto después de DID.' },
      ],
      controlled: [
        { prompt: 'Make a question: "She speaks French."', promptEs: 'Haz una pregunta: "Ella habla francés."', answer: 'Does she speak French?', hint: 'She = DOES + base verb (speak, not speaks)' },
        { prompt: 'Make a question: "They went to the cinema yesterday."', promptEs: 'Haz una pregunta: "Fueron al cine ayer."', answer: 'Did they go to the cinema yesterday?', hint: 'Past = DID + base verb (go, not went)' },
        { prompt: 'Make a question: "He lives in London."', promptEs: 'Haz una pregunta: "Él vive en Londres."', answer: 'Where does he live?', hint: 'Wh + DOES + subject + base verb' },
        { prompt: 'Correct: What means "expensive"?', promptEs: 'Corrige: ¿Qué significa "expensive"?', answer: 'What does "expensive" mean?', hint: 'Calco del español: en inglés hace falta DOES + mean' },
        { prompt: 'Make a question: "They bought a new car last year."', promptEs: 'Haz una pregunta: Compraron un coche nuevo el año pasado.', answer: 'Did they buy a new car last year?', hint: 'DID + base verb (buy, not bought)' },
      ]
    },
    recycleInTopics: ['a2-there-was-were', 'a2-frequency-adverbs'],
    tipEs: '💡 Recuerda la regla de oro: DO/DOES/DID "absorben" la marca de tiempo y persona. Por eso el verbo principal siempre queda en forma base. Si dices "Does she speaks?", estás marcando la tercera persona dos veces. Piensa: un solo marcador por pregunta.'
  },

  {
    id: 'a2-there-was-were',
    title: 'There was / There were',
    titleEs: 'There was / There were',
    level: 'A2',
    cefrLevel: 2,
    category: 'sentences',
    priority: 'high',
    prerequisiteIds: ['a1-there-is-are'],
    explanation: 'To talk about existence in the past, English uses "there was" (singular) and "there were" (plural). This follows the same pattern as "there is/are" but in the past tense. "There was" is used with singular and uncountable nouns, and "there were" is used with plural nouns. Negative forms are "there wasn\'t" and "there weren\'t". Question forms are "Was there...?" and "Were there...?". This distinction is crucial because the verb must agree with the noun that follows.',
    explanationEs: 'Para hablar de existencia en el pasado, el inglés usa "there was" (singular) y "there were" (plural). Sigue el mismo patrón que "there is/are" pero en pasado. "There was" se usa con sustantivos singulares e incontables, y "there were" con sustantivos plurales. Las formas negativas son "there wasn\'t" y "there weren\'t". Las formas interrogativas son "Was there...?" y "Were there...?". Esta distinción es crucial porque el verbo debe concordar con el sustantivo que le sigue.',
    formationRules: [
      {
        label: 'Affirmative and Negative',
        labelEs: 'Afirmativo y negativo',
        formula: 'There was/were + noun | There wasn\'t/weren\'t + noun',
        steps: [
          { step: 'Use "there was" for singular/uncountable nouns', stepEs: 'Usa "there was" para sustantivos singulares/incontables', example: 'There was a big park near my house. / There was a lot of traffic.', translation: 'Había un parque grande cerca de mi casa. / Había mucho tráfico.' },
          { step: 'Use "there were" for plural nouns', stepEs: 'Usa "there were" para sustantivos plurales', example: 'There were many students in the class.', translation: 'Había muchos estudiantes en la clase.' },
          { step: 'Add not (wasn\'t / weren\'t) for negatives', stepEs: 'Añade not (wasn\'t / weren\'t) para negativos', example: 'There wasn\'t any milk. / There weren\'t any chairs.', translation: 'No había leche. / No había sillas.' },
        ]
      },
      {
        label: 'Questions',
        labelEs: 'Preguntas',
        formula: 'Was/Were there + noun + ...?',
        steps: [
          { step: 'Invert "there" and "was/were" to form questions', stepEs: 'Invierte "there" y "was/were" para formar preguntas', example: 'Was there a cinema in your town? / Were there many people at the party?', translation: '¿Había un cine en tu pueblo? / ¿Había mucha gente en la fiesta?' },
        ]
      }
    ],
    signalWords: [
      { word: 'ago', meaning: 'in the past (time marker)', meaningEs: 'hace (marcador temporal)' },
      { word: 'last year', meaning: 'the previous year', meaningEs: 'el año pasado' },
      { word: 'in those days', meaning: 'during that past period', meaningEs: 'en aquellos tiempos' },
      { word: 'when I was young', meaning: 'during childhood', meaningEs: 'cuando era joven' },
    ],
    l1Contrast: {
      concept: 'Singular/plural agreement vs. invariable form',
      conceptEs: 'Concordancia singular/plural frente a forma invariable',
      spanishBehavior: 'Spanish uses "había" (imperfect of "haber") for both singular and plural without changing form: "Había un gato" / "Había muchos gatos". The verb never changes.',
      englishBehavior: 'English requires agreement: "there was" for singular and "there were" for plural. Using "there was" with a plural noun is a common error for Spanish speakers.',
      contrastExamples: [
        { english: 'There were many people at the concert.', spanish: 'Había muchas personas en el concierto.', note: '"Había" is invariable in Spanish; English must use "were" for plural.' },
        { english: 'There was only one option.', spanish: 'Había solo una opción.', note: 'Same "había" in Spanish, but English switches to "was" for singular.' },
      ]
    },
    predictedErrors: [
      { error: 'There was many people at the party.', correction: 'There were many people at the party.', whyEs: '"Many people" es plural, por lo que hay que usar "were", no "was". En español "había" no cambia, pero en inglés sí.', frequency: 'very common' },
      { error: 'There was a lot of problems.', correction: 'There were a lot of problems.', whyEs: '"A lot of problems" es plural → were. Cuidado: "a lot of" no determina por sí solo si se usa was/were; depende del sustantivo.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'There _____ three cats and a dog in the garden yesterday.', question: 'Which verb form is correct?', options: ['was', 'were', 'is', 'are'], correct: 1, explanationEs: 'El sujeto real es "three cats and a dog" (plural) → were. En inglés el verbo concuerda con el sustantivo que sigue a "there".' },
        { sentence: '_____ there a library in your old school?', question: 'Which verb correctly starts this question?', options: ['Were', 'Was', 'Did', 'Is'], correct: 1, explanationEs: '"A library" es singular → Was there.' },
        { sentence: 'There _____ a lot of people at the concert last Saturday.', question: 'People = plural:', options: ['was', 'were', 'is', 'are'], correct: 1, explanationEs: '"People" es plural → were. Error común: "There was many people".' },
        { sentence: '_____ there any milk in the fridge this morning?', question: 'Milk = uncountable (singular):', options: ['Were', 'Was', 'Did', 'Are'], correct: 1, explanationEs: 'Milk = incontable → Was there.' },
        { sentence: 'There _____ many problems with the project.', question: 'Problems = plural:', options: ['was', 'were', "wasn't", 'is'], correct: 1, explanationEs: '"A lot of/many + plural" → were. Cuidado con "a lot of problems".' },
      ],
      controlled: [
        { prompt: 'Complete: "When I was a child, there _____ (be) a beautiful garden behind my house."', promptEs: 'Completa: "Cuando era niño, _____ (haber) un jardín bonito detrás de mi casa."', answer: 'was', hint: '"A beautiful garden" is singular → was' },
        { prompt: 'Make negative: "There were some tickets available."', promptEs: 'Haz negativo: Había entradas disponibles.', answer: "There weren't any tickets available.", hint: 'were → weren\'t; some → any' },
        { prompt: 'Ask: Were there many tourists in your city last summer?', promptEs: 'Pregunta: ¿Había muchos turistas en tu ciudad el verano pasado?', answer: 'Were there many tourists in your city last summer?', hint: 'Plural → Were there' },
        { prompt: 'Complete: "There _____ (be) only one flight to Madrid that day."', promptEs: 'Completa: Solo había un vuelo a Madrid ese día.', answer: 'was', hint: 'One flight = singular' },
        { prompt: 'Complete: "_____ there a supermarket near your old flat?"', promptEs: 'Completa la pregunta: ¿Había un supermercado cerca de tu antiguo piso?', answer: 'Was there', hint: 'A supermarket = singular' },
      ]
    },
    recycleInTopics: ['a2-prepositions-time-place', 'a2-question-formation'],
    tipEs: '💡 En español "había" nunca cambia: "había un gato", "había mil gatos". Pero en inglés SÍ cambia: "there was a cat" vs. "there were a thousand cats". Truco: mira siempre lo que viene DESPUÉS de was/were. Si es plural, usa WERE.'
  },

  {
    id: 'a2-frequency-adverbs',
    title: 'Frequency Adverbs and Their Position',
    titleEs: 'Adverbios de frecuencia y su posición',
    level: 'A2',
    cefrLevel: 2,
    category: 'adverbs',
    priority: 'high',
    prerequisiteIds: ['a1-present-simple'],
    explanation: 'Frequency adverbs (always, usually, often, sometimes, rarely, never) tell us how often something happens. In English, their position in the sentence follows strict rules: they go BEFORE the main verb but AFTER the verb BE. With auxiliary verbs (can, will, have), the adverb goes between the auxiliary and the main verb. "Sometimes" and "usually" can also go at the beginning or end of a sentence, but other adverbs like "always" and "never" cannot. This word order is very different from Spanish.',
    explanationEs: 'Los adverbios de frecuencia (always, usually, often, sometimes, rarely, never) nos dicen con qué frecuencia ocurre algo. En inglés, su posición en la oración sigue reglas estrictas: van ANTES del verbo principal pero DESPUÉS del verbo BE. Con verbos auxiliares (can, will, have), el adverbio va entre el auxiliar y el verbo principal. "Sometimes" y "usually" también pueden ir al principio o al final de la oración, pero otros como "always" y "never" no. Este orden es muy diferente del español.',
    formationRules: [
      {
        label: 'Position with Main Verbs and BE',
        labelEs: 'Posición con verbos principales y BE',
        formula: 'Subject + adverb + main verb | Subject + BE + adverb',
        steps: [
          { step: 'Place the adverb BEFORE the main verb', stepEs: 'Coloca el adverbio ANTES del verbo principal', example: 'I always eat breakfast. / She never drinks coffee.', translation: 'Siempre desayuno. / Ella nunca bebe café.' },
          { step: 'Place the adverb AFTER the verb BE', stepEs: 'Coloca el adverbio DESPUÉS del verbo BE', example: 'He is always late. / They are usually happy.', translation: 'Él siempre llega tarde. / Ellos suelen estar contentos.' },
          { step: 'With auxiliaries: auxiliary + adverb + main verb', stepEs: 'Con auxiliares: auxiliar + adverbio + verbo principal', example: 'I can never remember her name. / She has always loved music.', translation: 'Nunca puedo recordar su nombre. / Siempre le ha encantado la música.' },
        ]
      },
      {
        label: 'Frequency Scale',
        labelEs: 'Escala de frecuencia',
        steps: [
          { step: 'Learn the scale from 100% to 0%', stepEs: 'Aprende la escala del 100% al 0%', example: 'always (100%) > usually (80%) > often (60%) > sometimes (40%) > rarely (10%) > never (0%)', translation: 'siempre > normalmente > a menudo > a veces > raramente > nunca' },
        ]
      }
    ],
    signalWords: [
      { word: 'always', meaning: '100% of the time', meaningEs: 'siempre (100%)' },
      { word: 'usually', meaning: 'about 80% of the time', meaningEs: 'normalmente (80%)' },
      { word: 'often', meaning: 'about 60% of the time', meaningEs: 'a menudo (60%)' },
      { word: 'sometimes', meaning: 'about 40% of the time', meaningEs: 'a veces (40%)' },
      { word: 'never', meaning: '0% of the time', meaningEs: 'nunca (0%)' },
    ],
    l1Contrast: {
      concept: 'Fixed adverb position vs. flexible placement',
      conceptEs: 'Posición fija del adverbio frente a colocación flexible',
      spanishBehavior: 'In Spanish, adverb position is relatively flexible: "Siempre voy al gimnasio" / "Voy siempre al gimnasio" / "Voy al gimnasio siempre" — all are acceptable and natural.',
      englishBehavior: 'In English, the position is much more rigid: "I always go to the gym" is correct. "I go always to the gym" sounds wrong. The adverb must come before the main verb.',
      contrastExamples: [
        { english: 'I always go to the gym.', spanish: 'Siempre voy al gimnasio. / Voy siempre al gimnasio.', note: 'Spanish allows the adverb before or after the verb; English requires it before.' },
        { english: 'She is never late.', spanish: 'Ella nunca llega tarde.', note: 'After BE in English; in Spanish "nunca" usually goes before the verb.' },
      ]
    },
    predictedErrors: [
      { error: 'I go always to the gym.', correction: 'I always go to the gym.', whyEs: 'En español el adverbio puede ir después del verbo, pero en inglés los adverbios de frecuencia van ANTES del verbo principal.', frequency: 'very common' },
      { error: 'She always is happy.', correction: 'She is always happy.', whyEs: 'Con el verbo BE, el adverbio va DESPUÉS, no antes: "She is always happy".', frequency: 'common' },
      { error: 'Never I eat meat.', correction: 'I never eat meat.', whyEs: '"Never" no puede empezar una oración normal (solo en inversiones formales). Va después del sujeto.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She _____ takes the bus to work.', question: 'Where does the adverb "usually" go in this sentence?', options: ['She usually takes...', 'Usually she takes...', 'She takes usually...', 'She takes... usually'], correct: 0, explanationEs: 'El adverbio de frecuencia va ANTES del verbo principal "takes". "She usually takes the bus to work."' },
        { sentence: 'They are _____ tired after work.', question: 'Where does "always" go with the verb BE?', options: ['They always are tired...', 'They are always tired...', 'Always they are tired...', 'They are tired always...'], correct: 1, explanationEs: 'Con el verbo BE, el adverbio va DESPUÉS: "They are always tired after work."' },
        { sentence: 'I _____ eat meat. I\'m vegetarian.', question: 'Correct position for "never":', options: ['I never eat...', 'Never I eat...', 'I eat never...', 'I eat... never'], correct: 0, explanationEs: 'Never va ANTES del verbo principal. Error común: "I eat never".' },
        { sentence: 'He can _____ remember people\'s names.', question: 'With auxiliary "can", where does "never" go?', options: ['He never can remember...', 'He can never remember...', 'He can remember never...', 'Never he can remember...'], correct: 1, explanationEs: 'Con auxiliar: auxiliar + adverbio + verbo principal.' },
        { sentence: 'We _____ late for meetings.', question: 'Where does "are sometimes" go?', options: ['We sometimes are late...', 'We are sometimes late...', 'Sometimes we are late...', 'We are late sometimes...'], correct: 1, explanationEs: 'Con BE: Subject + BE + adverb + complement. "Sometimes" también puede ir al final.' },
      ],
      controlled: [
        { prompt: 'Put the adverb in the correct position: "She (often) goes to the cinema."', promptEs: 'Pon el adverbio en la posición correcta: "Ella (a menudo) va al cine."', answer: 'She often goes to the cinema.', hint: 'Adverb before main verb' },
        { prompt: 'Put the adverb in the correct position: "We (never) are bored in class."', promptEs: 'Pon el adverbio en la posición correcta: "Nosotros (nunca) estamos aburridos en clase."', answer: 'We are never bored in class.', hint: 'Adverb after BE' },
        { prompt: 'Correct: "I go always to the gym on Mondays."', promptEs: 'Corrige: Siempre voy al gimnasio los lunes.', answer: 'I always go to the gym on Mondays.', hint: 'Adverb before main verb (not after)' },
        { prompt: 'Put the adverb: "She (always) is busy on Fridays."', promptEs: 'Pon el adverbio: Ella siempre está ocupada los viernes.', answer: 'She is always busy on Fridays.', hint: 'With BE: adverb AFTER the verb' },
        { prompt: 'Complete: "My boss _____ (usually) arrives at 9."', promptEs: 'Completa: Mi jefe normalmente llega a las 9.', answer: 'usually arrives', hint: 'Usually before main verb' },
      ]
    },
    recycleInTopics: ['a2-question-formation', 'a2-prepositions-time-place'],
    tipEs: '💡 Regla mnemotécnica: los adverbios de frecuencia son "tímidos" — se esconden ANTES del verbo principal, pero el verbo BE es "fuerte" y los empuja detrás de él. Piensa: "I always eat" (el adverbio se esconde delante) vs. "I am always hungry" (BE empuja al adverbio detrás).'
  },

  {
    id: 'a2-too-enough',
    title: 'Too and Enough',
    titleEs: 'Too y Enough',
    level: 'A2',
    cefrLevel: 2,
    category: 'adjectives',
    priority: 'medium',
    prerequisiteIds: [],
    explanation: '"Too" and "enough" are used to talk about degree, but they follow different word order rules. "Too" means "more than necessary" and goes BEFORE adjectives and adverbs (too hot, too quickly). "Enough" means "sufficient" and goes AFTER adjectives and adverbs (big enough, fast enough) but BEFORE nouns (enough money, enough time). Both can be followed by "to + infinitive" to express purpose or result. Getting the word order right is essential for natural-sounding English.',
    explanationEs: '"Too" y "enough" se usan para hablar de grado, pero siguen reglas de orden diferentes. "Too" significa "demasiado" y va ANTES de adjetivos y adverbios (too hot, too quickly). "Enough" significa "suficiente" y va DESPUÉS de adjetivos y adverbios (big enough, fast enough) pero ANTES de sustantivos (enough money, enough time). Ambos pueden ir seguidos de "to + infinitivo" para expresar propósito o resultado. Es esencial dominar el orden para sonar natural en inglés.',
    formationRules: [
      {
        label: 'Too + Adjective/Adverb',
        labelEs: 'Too + Adjetivo/Adverbio',
        formula: 'too + adjective/adverb (+ to + infinitive)',
        steps: [
          { step: '"Too" always goes BEFORE the adjective or adverb', stepEs: '"Too" siempre va ANTES del adjetivo o adverbio', example: 'This coffee is too hot to drink.', translation: 'Este café está demasiado caliente para beber.' },
          { step: 'It expresses excess — more than what is needed or desired', stepEs: 'Expresa exceso — más de lo necesario o deseado', example: 'He drives too fast. / She\'s too young to drive.', translation: 'Conduce demasiado rápido. / Es demasiado joven para conducir.' },
        ]
      },
      {
        label: 'Adjective/Adverb + Enough | Enough + Noun',
        labelEs: 'Adjetivo/Adverbio + Enough | Enough + Sustantivo',
        formula: 'adjective/adverb + enough (+ to + infinitive) | enough + noun',
        steps: [
          { step: '"Enough" goes AFTER adjectives and adverbs', stepEs: '"Enough" va DESPUÉS de adjetivos y adverbios', example: 'Is your soup warm enough? / She ran fast enough to win.', translation: '¿Está tu sopa suficientemente caliente? / Corrió suficientemente rápido para ganar.' },
          { step: '"Enough" goes BEFORE nouns', stepEs: '"Enough" va ANTES de sustantivos', example: 'We don\'t have enough time. / There aren\'t enough chairs.', translation: 'No tenemos suficiente tiempo. / No hay suficientes sillas.' },
        ]
      }
    ],
    signalWords: [
      { word: 'too', meaning: 'excessively, more than needed', meaningEs: 'demasiado' },
      { word: 'enough', meaning: 'sufficiently, to the necessary degree', meaningEs: 'suficiente(mente)' },
      { word: 'too ... to', meaning: 'so much that it prevents something', meaningEs: 'demasiado ... para' },
      { word: 'enough ... to', meaning: 'sufficiently to achieve something', meaningEs: 'lo suficiente ... para' },
    ],
    l1Contrast: {
      concept: 'Word order: pre-adjective vs. post-adjective placement',
      conceptEs: 'Orden: posición antes o después del adjetivo',
      spanishBehavior: 'In Spanish, "suficiente" and "suficientemente" go BEFORE the adjective: "suficientemente grande", "bastante grande". "Demasiado" also usually precedes: "demasiado grande".',
      englishBehavior: 'In English, "too" goes before (too big) — similar to Spanish — but "enough" goes AFTER the adjective (big enough), which is the opposite of Spanish "suficientemente grande".',
      contrastExamples: [
        { english: 'The room is big enough for everyone.', spanish: 'La habitación es suficientemente grande para todos.', note: '"Enough" comes AFTER "big" in English, but "suficientemente" comes BEFORE "grande" in Spanish.' },
        { english: 'There is enough food for everyone.', spanish: 'Hay suficiente comida para todos.', note: 'Before nouns, both English and Spanish place the word before: "enough food" / "suficiente comida".' },
      ]
    },
    predictedErrors: [
      { error: 'It\'s enough big for me.', correction: 'It\'s big enough for me.', whyEs: 'En español decimos "suficientemente grande", con el adverbio delante. Pero en inglés "enough" va DESPUÉS del adjetivo: "big enough".', frequency: 'very common' },
      { error: 'She is too much tired.', correction: 'She is too tired.', whyEs: '"Too" ya intensifica el adjetivo; no se necesita "much". "Too tired" = demasiado cansada.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'The box is _____ heavy _____ carry.', question: 'Choose the correct combination.', options: ['too / to', 'enough / to', 'too / for', 'enough / for'], correct: 0, explanationEs: '"Too heavy to carry" = demasiado pesada para cargar. TOO + adjetivo + TO + infinitivo.' },
        { sentence: 'He isn\'t _____ to ride a bike alone.', question: 'Which option correctly completes the sentence?', options: ['enough old', 'old enough', 'too old', 'old too'], correct: 1, explanationEs: '"Old enough" — el adjetivo va ANTES de "enough": He isn\'t old enough to ride a bike alone.' },
        { sentence: 'She\'s _____ young _____ watch this film.', question: 'Excess — too young to watch:', options: ['too / to', 'enough / to', 'too / for', 'enough / for'], correct: 0, explanationEs: 'Exceso: "too young to watch". Error común: "too much young" (incorrecto — "too" ya intensifica).' },
        { sentence: 'We don\'t have _____ time to finish.', question: 'Sufficient quantity — enough before noun:', options: ['enough', 'too', 'enough of', 'too much'], correct: 0, explanationEs: '"Enough" va ANTES de sustantivos: "enough time". Con sustantivos: enough + noun.' },
        { sentence: 'The room isn\'t _____ for everyone.', question: 'Big + enough (adjective after):', options: ['enough big', 'big enough', 'too big', 'big too'], correct: 1, explanationEs: 'Error común: "enough big" (español: "suficientemente grande"). En inglés: "big enough" — adjetivo ANTES de enough.' },
      ],
      controlled: [
        { prompt: 'Rewrite: "The water is very cold. I can\'t swim." → "The water is..."', promptEs: 'Reescribe: "El agua está muy fría. No puedo nadar." → "El agua está..."', answer: 'The water is too cold to swim.', hint: 'too + adjective + to + infinitive' },
        { prompt: 'Correct: "It\'s enough big for me."', promptEs: 'Corrige: Es suficientemente grande para mí.', answer: 'It\'s big enough for me.', hint: 'adjective + enough (not enough + adjective)' },
        { prompt: 'Complete: "I don\'t have _____ money to buy it."', promptEs: 'Completa: No tengo suficiente dinero para comprarlo.', answer: 'I don\'t have enough money to buy it.', hint: 'enough + noun' },
        { prompt: 'Rewrite: "The soup is very hot. I can\'t eat it." → "The soup is..."', promptEs: 'Reescribe: La sopa está muy caliente. No puedo comerla.', answer: 'The soup is too hot to eat.', hint: 'too + adjective + to + infinitive' },
        { prompt: 'Complete: "She is _____ to drive." (she is 18 years old)', promptEs: 'Completa: Ella es suficientemente mayor para conducir.', answer: 'She is old enough to drive.', hint: 'adjective + enough + to' },
      ]
    },
    recycleInTopics: ['a2-so-such', 'a2-question-formation'],
    tipEs: '💡 Truco para recordar: "TOO" va delante (como en español: "demasiado grande" → "too big"). Pero "ENOUGH" va detrás del adjetivo (al revés del español): "big enough", NO "enough big". Con sustantivos, "enough" sí va delante: "enough money". Resumen: TOO + adj, adj + ENOUGH, ENOUGH + noun.'
  },

  {
    id: 'a2-so-such',
    title: 'So and Such',
    titleEs: 'So y Such',
    level: 'A2',
    cefrLevel: 2,
    category: 'adverbs',
    priority: 'medium',
    prerequisiteIds: [],
    explanation: '"So" and "such" are both used for emphasis, but they follow different grammatical patterns. "So" is used before adjectives and adverbs WITHOUT a noun: "so beautiful", "so quickly". "Such" is used before noun phrases (with or without adjectives): "such a beautiful day", "such nice people". Both are often followed by "that" clauses to express result. The key distinction is whether a noun follows: no noun → so; noun → such. With singular countable nouns, "a/an" comes between "such" and the noun.',
    explanationEs: '"So" y "such" se usan para dar énfasis, pero siguen patrones gramaticales diferentes. "So" se usa antes de adjetivos y adverbios SIN sustantivo: "so beautiful", "so quickly". "Such" se usa antes de frases nominales (con o sin adjetivo): "such a beautiful day", "such nice people". Ambos van a menudo seguidos de cláusulas con "that" para expresar resultado. La distinción clave es si hay sustantivo: sin sustantivo → so; con sustantivo → such. Con sustantivos contables singulares, "a/an" va entre "such" y el sustantivo.',
    formationRules: [
      {
        label: 'So + Adjective/Adverb',
        labelEs: 'So + Adjetivo/Adverbio',
        formula: 'so + adjective/adverb (+ that + clause)',
        steps: [
          { step: 'Use "so" directly before an adjective or adverb (no noun follows)', stepEs: 'Usa "so" directamente antes de un adjetivo o adverbio (sin sustantivo)', example: 'The film was so boring that I fell asleep.', translation: 'La película era tan aburrida que me dormí.' },
          { step: 'Also used in exclamations', stepEs: 'También se usa en exclamaciones', example: 'You are so kind! / She speaks so clearly!', translation: '¡Eres tan amable! / ¡Habla tan claro!' },
        ]
      },
      {
        label: 'Such (+ a/an) + Noun Phrase',
        labelEs: 'Such (+ a/an) + Frase nominal',
        formula: 'such + a/an + (adjective) + singular noun | such + (adjective) + plural/uncountable noun',
        steps: [
          { step: 'Use "such a/an" with singular countable nouns', stepEs: 'Usa "such a/an" con sustantivos contables singulares', example: 'It was such a beautiful day that we went to the beach.', translation: 'Fue un día tan bonito que fuimos a la playa.' },
          { step: 'Use "such" (no article) with plural or uncountable nouns', stepEs: 'Usa "such" (sin artículo) con sustantivos plurales o incontables', example: 'They are such nice people! / It was such good news!', translation: '¡Son personas tan amables! / ¡Fue una noticia tan buena!' },
        ]
      }
    ],
    signalWords: [
      { word: 'so', meaning: 'to such a degree (before adjective/adverb)', meaningEs: 'tan (antes de adjetivo/adverbio)' },
      { word: 'such', meaning: 'of that kind/degree (before noun phrase)', meaningEs: 'tan/tal (antes de frase nominal)' },
      { word: 'that', meaning: 'introduces the result clause', meaningEs: 'que (introduce la cláusula de resultado)' },
      { word: 'such a', meaning: 'emphasizer before singular count noun', meaningEs: 'un/una ... tan (antes de sustantivo singular)' },
    ],
    l1Contrast: {
      concept: 'So/Such distinction vs. single Spanish "tan"',
      conceptEs: 'Distinción so/such frente al único "tan" español',
      spanishBehavior: 'Spanish uses "tan" before both adjectives and adjective+noun combinations: "tan bonito" (so beautiful), "un día tan bonito" (such a beautiful day). There is no need to switch between two different words.',
      englishBehavior: 'English requires "so" when there is no noun (so beautiful) and "such" when there is a noun (such a beautiful day). Mixing them up is a very common error.',
      contrastExamples: [
        { english: 'It was so beautiful! / It was such a beautiful day!', spanish: '¡Era tan bonito! / ¡Era un día tan bonito!', note: 'Spanish uses "tan" in both; English switches between "so" (no noun) and "such a" (with noun).' },
        { english: 'They were so friendly. / They were such friendly people.', spanish: 'Eran tan amables. / Eran personas tan amables.', note: '"So" for adjective alone; "such" when a noun follows.' },
      ]
    },
    predictedErrors: [
      { error: 'It was a so beautiful day.', correction: 'It was such a beautiful day.', whyEs: 'Cuando hay un sustantivo ("day"), se usa SUCH, no SO. "Such a beautiful day", no "a so beautiful day".', frequency: 'very common' },
      { error: 'She is such pretty!', correction: 'She is so pretty!', whyEs: 'Sin sustantivo, se usa SO: "so pretty". SUCH necesita un sustantivo: "such a pretty girl".', frequency: 'common' },
      { error: 'It was such beautiful!', correction: 'It was so beautiful!', whyEs: 'Sin sustantivo → SO. "Such" solo se usa cuando hay un sustantivo (o frase nominal) que le siga.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'It was _____ a long journey that we stopped twice.', question: 'Which word correctly completes the sentence?', options: ['so', 'such', 'too', 'very'], correct: 1, explanationEs: 'Hay sustantivo ("journey") → SUCH. "It was such a long journey that we stopped twice."' },
        { sentence: 'The music was _____ loud that I couldn\'t hear you.', question: 'Which word completes this correctly?', options: ['such', 'such a', 'so', 'enough'], correct: 2, explanationEs: 'No hay sustantivo después de "loud" → SO. "The music was so loud that..."' },
        { sentence: 'They are _____ nice people! I really enjoy working with them.', question: 'With plural noun:', options: ['so', 'such', 'such a', 'so a'], correct: 1, explanationEs: 'Con sustantivo plural: such + noun. "Such nice people".' },
        { sentence: 'The exam was _____ difficult that many students failed.', question: 'Adjective only (no noun):', options: ['such', 'such a', 'so', 'enough'], correct: 2, explanationEs: 'Solo adjetivo (difficult) → SO. Error común: "such difficult".' },
        { sentence: 'It was _____ good news that I couldn\'t believe it.', question: 'Uncountable noun:', options: ['so', 'such', 'such a', 'a so'], correct: 1, explanationEs: 'News = incontable → such (sin a). "Such good news".' },
      ],
      controlled: [
        { prompt: 'Combine: "The book was very interesting. I read it in one day." Use SO...THAT.', promptEs: 'Combina: "El libro era muy interesante. Lo leí en un día." Usa SO...THAT.', answer: 'The book was so interesting that I read it in one day.', hint: 'so + adjective + that + result clause' },
        { prompt: 'Correct: "It was a so beautiful day."', promptEs: 'Corrige: Era un día tan bonito.', answer: 'It was such a beautiful day.', hint: 'Con sustantivo → such a (no "a so")' },
        { prompt: 'Complete: "She is _____ pretty!" (emphasis, no noun)', promptEs: 'Completa: ¡Es tan guapa!', answer: 'so pretty', hint: 'Solo adjetivo → so' },
        { prompt: 'Complete: "It was _____ a boring film that we left early."', promptEs: 'Completa: Era una película tan aburrida que nos fuimos pronto.', answer: 'such', hint: 'such a + adjective + singular noun' },
        { prompt: 'Combine: "The weather was bad. We stayed at home." Use SUCH...THAT.', promptEs: 'Combina con such. El tiempo era malo. Nos quedamos en casa.', answer: 'It was such bad weather that we stayed at home.', hint: 'such + (adj) + uncountable noun' },
      ]
    },
    recycleInTopics: ['a2-too-enough', 'a2-frequency-adverbs'],
    tipEs: '💡 Regla simple: si después hay un sustantivo, usa SUCH; si no hay sustantivo (solo adjetivo), usa SO. "So beautiful" (sin sustantivo) vs. "Such a beautiful day" (con sustantivo). Piensa: SO = solo adjetivo, SUCH = sustantivo incluido.'
  },

  {
    id: 'a2-imperatives',
    title: 'Imperatives: Positive and Negative',
    titleEs: 'Imperativo: positivo y negativo',
    level: 'A2',
    cefrLevel: 2,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: [],
    explanation: 'Imperatives are used to give commands, instructions, advice, and make requests. In English, the imperative is formed simply by using the base form of the verb without any subject — the subject "you" is implied. For negative imperatives, add "Don\'t" (or "Do not") before the base verb. English imperatives are the same regardless of whether you are speaking to one person or many, and whether formally or informally. This contrasts significantly with Spanish, which has different imperative forms for tú, vosotros, usted, and ustedes.',
    explanationEs: 'El imperativo se usa para dar órdenes, instrucciones, consejos y hacer peticiones. En inglés, se forma simplemente usando la forma base del verbo sin sujeto — el sujeto "you" está implícito. Para el imperativo negativo, se añade "Don\'t" (o "Do not") antes del verbo base. El imperativo en inglés es igual sin importar si hablas a una o varias personas, o si es formal o informal. Esto contrasta mucho con el español, que tiene diferentes formas imperativas para tú, vosotros, usted y ustedes.',
    formationRules: [
      {
        label: 'Positive Imperative',
        labelEs: 'Imperativo positivo',
        formula: 'Base verb + complement',
        steps: [
          { step: 'Use the base form of the verb (no subject, no conjugation)', stepEs: 'Usa la forma base del verbo (sin sujeto, sin conjugación)', example: 'Open the door. / Sit down. / Listen carefully.', translation: 'Abre la puerta. / Siéntate. / Escucha con atención.' },
          { step: 'Add "please" to make it more polite', stepEs: 'Añade "please" para hacerlo más cortés', example: 'Please wait here. / Close the window, please.', translation: 'Por favor, espere aquí. / Cierre la ventana, por favor.' },
        ]
      },
      {
        label: 'Negative Imperative',
        labelEs: 'Imperativo negativo',
        formula: 'Don\'t + base verb + complement',
        steps: [
          { step: 'Add "Don\'t" before the base verb to form negative commands', stepEs: 'Añade "Don\'t" antes del verbo base para formar órdenes negativas', example: 'Don\'t run in the corridor! / Don\'t touch that!', translation: '¡No corras por el pasillo! / ¡No toques eso!' },
          { step: '"Do not" is the full form, used in formal signs and written notices', stepEs: '"Do not" es la forma completa, usada en carteles formales y avisos escritos', example: 'Do not enter. / Do not feed the animals.', translation: 'No entrar. / No alimentar a los animales.' },
        ]
      }
    ],
    signalWords: [
      { word: 'please', meaning: 'added for politeness', meaningEs: 'por favor (para cortesía)' },
      { word: 'don\'t', meaning: 'negative imperative marker', meaningEs: 'marcador de imperativo negativo' },
      { word: 'let\'s', meaning: 'suggestion for group action (1st person plural)', meaningEs: 'sugiere acción en grupo (1ª persona plural)' },
      { word: 'be careful', meaning: 'common imperative expression', meaningEs: 'expresión imperativa común (ten cuidado)' },
    ],
    l1Contrast: {
      concept: 'One form for all vs. multiple conjugated forms',
      conceptEs: 'Una forma para todo frente a múltiples formas conjugadas',
      spanishBehavior: 'Spanish has different imperative forms depending on tú (abre), usted (abra), vosotros (abrid), ustedes (abran). Negative imperatives use the subjunctive (no abras, no abra). Reflexive pronouns attach to the end (siéntate).',
      englishBehavior: 'English uses just one form for all: "Open" works for singular, plural, formal, and informal. For negatives, simply add "Don\'t" — no subjunctive needed. Pronouns don\'t attach to the verb.',
      contrastExamples: [
        { english: 'Sit down. (to one person or many, formal or informal)', spanish: 'Siéntate. / Siéntense. / Sentaos.', note: 'English: one form. Spanish: multiple forms depending on formality and number.' },
        { english: 'Don\'t run!', spanish: '¡No corras! / ¡No corra! / ¡No corráis!', note: 'English: Don\'t + base verb. Spanish: subjunctive with different forms.' },
      ]
    },
    predictedErrors: [
      { error: 'Not run!', correction: 'Don\'t run!', whyEs: 'En español el negativo es "No + subjuntivo" (No corras). En inglés SIEMPRE se necesita "Don\'t" + verbo base para el imperativo negativo.', frequency: 'very common' },
      { error: 'Sit you down.', correction: 'Sit down.', whyEs: 'En inglés el imperativo no lleva sujeto explícito. "Sit down" (no "Sit you down"). El "you" está implícito.', frequency: 'common' },
      { error: 'Don\'t to worry.', correction: 'Don\'t worry.', whyEs: 'Después de "Don\'t" va el verbo en forma base directamente, sin "to".', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ the door when you leave.', question: 'Which form correctly completes this imperative?', options: ['Closing', 'Closes', 'Close', 'To close'], correct: 2, explanationEs: 'El imperativo usa la forma base del verbo sin sujeto: "Close the door when you leave."' },
        { sentence: '_____ forget to bring your homework tomorrow.', question: 'Which word starts this negative imperative?', options: ['Not', 'No', 'Don\'t', 'Doesn\'t'], correct: 2, explanationEs: 'El imperativo negativo en inglés siempre empieza con "Don\'t": "Don\'t forget to bring your homework."' },
        { sentence: '_____ quiet, please. The baby is sleeping.', question: 'Imperative with BE:', options: ['Be', 'You be', 'Being', 'To be'], correct: 0, explanationEs: 'Con BE el imperativo es "Be" (forma base).' },
        { sentence: '_____ run in the corridor! It\'s dangerous.', question: 'Negative command:', options: ['Not', 'No', 'Don\'t', 'Doesn\'t'], correct: 2, explanationEs: 'Siempre Don\'t + verbo base. Error común: "Not run".' },
        { sentence: '_____ down and relax. You look tired.', question: 'Positive imperative:', options: ['Sit', 'Sitting', 'To sit', 'You sit'], correct: 0, explanationEs: 'Imperativo = forma base del verbo sin sujeto.' },
      ],
      controlled: [
        { prompt: 'Give a negative command: your friend is about to touch a hot pan.', promptEs: 'Da una orden negativa: tu amigo va a tocar una sartén caliente.', answer: 'Don\'t touch that!', hint: 'Don\'t + base verb' },
        { prompt: 'Give instructions to a tourist: "Turn left at the traffic lights."', promptEs: 'Da instrucciones a un turista: Gira a la izquierda en el semáforo.', answer: 'Turn left at the traffic lights.', hint: 'Base verb, no subject' },
        { prompt: 'Correct: "Not smoke here."', promptEs: 'Corrige: No fumar aquí.', answer: "Don't smoke here.", hint: 'Negative imperative = Don\'t + base verb' },
        { prompt: 'Give polite advice: "Please wait here for a moment."', promptEs: 'Da un consejo cortés: Por favor espera aquí un momento.', answer: 'Please wait here for a moment.', hint: 'Please + base verb' },
        { prompt: 'Sign for a museum: "Do not take photos."', promptEs: 'Cartel para museo: No hacer fotos.', answer: 'Do not take photos.', hint: 'Formal negative: Do not + base verb' },
      ]
    },
    recycleInTopics: ['a2-question-formation', 'a2-frequency-adverbs'],
    tipEs: '💡 El imperativo inglés es mucho más simple que el español: una sola forma para todo el mundo. "Open" sirve para tú, usted, vosotros y ustedes. Para el negativo, solo añade "Don\'t". Nunca digas "Not + verbo" — en inglés siempre es "Don\'t + verbo base".'
  },

  {
    id: 'a2-both-either-neither',
    title: 'Both, Either, Neither',
    titleEs: 'Both, Either, Neither',
    level: 'A2',
    cefrLevel: 2,
    category: 'pronouns',
    priority: 'low',
    prerequisiteIds: [],
    explanation: '"Both", "either", and "neither" are used to talk about two things or people. "Both" means the two together (both...and). "Either" means one or the other, it doesn\'t matter which (either...or), and is also used in negative sentences to mean "also not". "Neither" means not one and not the other (neither...nor) and takes an affirmative verb because the negation is already in "neither". These words have specific grammatical patterns: "both...and", "either...or", "neither...nor". Understanding their use avoids common double-negative errors.',
    explanationEs: '"Both", "either" y "neither" se usan para hablar de dos cosas o personas. "Both" significa los dos juntos (both...and = tanto...como). "Either" significa uno u otro, no importa cuál (either...or = o...o), y también se usa en oraciones negativas para decir "tampoco". "Neither" significa ni uno ni otro (neither...nor = ni...ni) y lleva verbo afirmativo porque la negación ya está en "neither". Estas palabras tienen patrones específicos: "both...and", "either...or", "neither...nor". Entender su uso evita errores comunes de doble negación.',
    formationRules: [
      {
        label: 'Both...and / Either...or / Neither...nor',
        labelEs: 'Both...and / Either...or / Neither...nor',
        formula: 'Both A and B | Either A or B | Neither A nor B',
        steps: [
          { step: '"Both...and" links two positive items (inclusive)', stepEs: '"Both...and" une dos elementos positivos (inclusivo)', example: 'Both coffee and tea are available. / She speaks both English and French.', translation: 'Tanto el café como el té están disponibles. / Habla tanto inglés como francés.' },
          { step: '"Either...or" presents two options (choose one)', stepEs: '"Either...or" presenta dos opciones (elige una)', example: 'You can have either cake or ice cream. / Either call me or send a message.', translation: 'Puedes tomar o tarta o helado. / O me llamas o me mandas un mensaje.' },
          { step: '"Neither...nor" excludes both options (negative)', stepEs: '"Neither...nor" excluye ambas opciones (negativo)', example: 'Neither the bus nor the train was on time.', translation: 'Ni el autobús ni el tren llegaron a tiempo.' },
        ]
      },
      {
        label: 'Either/Neither in Short Responses',
        labelEs: 'Either/Neither en respuestas cortas',
        steps: [
          { step: 'Use "neither" for agreeing with a negative statement (with inversion)', stepEs: 'Usa "neither" para estar de acuerdo con una oración negativa (con inversión)', example: '"I don\'t like spiders." — "Neither do I."', translation: '"No me gustan las arañas." — "A mí tampoco."' },
          { step: 'Use "either" at the end of a negative sentence to mean "also not"', stepEs: 'Usa "either" al final de una oración negativa para decir "tampoco"', example: '"I don\'t like it either."', translation: '"A mí tampoco me gusta."' },
        ]
      }
    ],
    signalWords: [
      { word: 'both', meaning: 'the two (inclusive)', meaningEs: 'ambos/los dos (inclusivo)' },
      { word: 'either', meaning: 'one or the other / also not', meaningEs: 'cualquiera de los dos / tampoco' },
      { word: 'neither', meaning: 'not one and not the other', meaningEs: 'ninguno de los dos / ni...ni' },
      { word: 'nor', meaning: 'paired with neither', meaningEs: 'ni (pareja de neither)' },
    ],
    l1Contrast: {
      concept: 'Three distinct words vs. simpler Spanish system',
      conceptEs: 'Tres palabras distintas frente al sistema español más simple',
      spanishBehavior: 'Spanish uses "ambos/los dos" (both), "cualquiera" or "o...o" (either...or), and "ninguno/ni...ni" (neither...nor). The negative "ni...ni" uses a negative verb in Spanish: "Ni el coche ni la moto funcionan" (negative context already).',
      englishBehavior: 'English "neither...nor" takes an AFFIRMATIVE verb: "Neither the car nor the bike works" (no double negative). "Either" in negative sentences replaces "too/also": "I don\'t like it either" (not "I don\'t like it too").',
      contrastExamples: [
        { english: 'Neither do I. / I don\'t like it either.', spanish: 'Ni yo. / A mí tampoco.', note: 'English uses "neither" with inversion or "either" at the end. Spanish uses "ni yo" or "tampoco".' },
        { english: 'Neither the teacher nor the students were ready.', spanish: 'Ni el profesor ni los estudiantes estaban listos.', note: '"Neither...nor" + affirmative verb in English; "ni...ni" in Spanish with the negation naturally implied.' },
      ]
    },
    predictedErrors: [
      { error: 'Neither I like it.', correction: 'I don\'t like it either. / Neither do I.', whyEs: '"Neither" no puede ir al principio de una oración declarativa simple. Usa "I don\'t like it either" o, para respuestas cortas, "Neither do I" (con inversión).', frequency: 'common' },
      { error: 'I don\'t like it too.', correction: 'I don\'t like it either.', whyEs: 'En oraciones negativas, se usa "either" (tampoco), no "too" (también). "Too" solo se usa en afirmativas.', frequency: 'very common' },
      { error: 'Neither the bus nor the train were not on time.', correction: 'Neither the bus nor the train was on time.', whyEs: '"Neither...nor" ya es negativo; añadir "not" es doble negación, que es incorrecta en inglés estándar.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '"I can\'t swim." — "_____ can I."', question: 'Which word correctly completes this response?', options: ['Either', 'Neither', 'Both', 'Too'], correct: 1, explanationEs: 'Para estar de acuerdo con una frase negativa se usa "Neither": "Neither can I" (= Yo tampoco).' },
        { sentence: 'You can choose _____ the red shirt _____ the blue one.', question: 'Which pair of words completes this sentence?', options: ['both / and', 'neither / nor', 'either / or', 'either / and'], correct: 2, explanationEs: '"Either...or" para dar a elegir entre dos opciones: "either the red shirt or the blue one".' },
        { sentence: '_____ coffee _____ tea is fine. I like both.', question: 'One or the other (doesn\'t matter which):', options: ['Both / and', 'Either / or', 'Neither / nor', 'Either / and'], correct: 1, explanationEs: 'Cualquiera de los dos vale → Either...or.' },
        { sentence: '"I don\'t like spicy food." — "_____ do I."', question: 'Agreeing with negative:', options: ['Either', 'Neither', 'Too', 'So'], correct: 1, explanationEs: 'Estar de acuerdo con negativa → Neither do I. "Too" y "So" son para afirmativas.' },
        { sentence: '_____ my brother _____ my sister could come to the wedding.', question: 'Not one and not the other:', options: ['Both / and', 'Either / or', 'Neither / nor', 'Either / nor'], correct: 2, explanationEs: 'Ninguno de los dos → Neither...nor. El verbo va en afirmativo.' },
      ],
      controlled: [
        { prompt: 'Respond to agree: "I don\'t like horror films." → (you also don\'t like them)', promptEs: 'Responde para estar de acuerdo: "No me gustan las películas de terror." → (a ti tampoco)', answer: 'Neither do I. / I don\'t like them either.', hint: 'Use "Neither do I" or "I don\'t... either"' },
        { prompt: 'Correct: "I don\'t want to go too."', promptEs: 'Corrige: Yo tampoco quiero ir.', answer: "I don't want to go either.", hint: 'En negativas: either, no too' },
        { prompt: 'Complete: "_____ the bus _____ the train was on time." (neither)', promptEs: 'Completa: Ni el autobús ni el tren llegó a tiempo.', answer: 'Neither / nor', hint: 'neither...nor + affirmative verb' },
        { prompt: 'Complete: "She speaks _____ English _____ French." (both)', promptEs: 'Completa: Habla tanto inglés como francés.', answer: 'both / and', hint: 'both...and = los dos' },
        { prompt: 'Respond: "I haven\'t been to Japan." (you haven\'t either)', promptEs: 'Responde: No he estado en Japón. (tú tampoco)', answer: "Neither have I. / I haven't either.", hint: 'Agree with negative' },
      ]
    },
    recycleInTopics: ['a2-question-formation', 'a2-so-such'],
    tipEs: '💡 Piensa en semáforos: BOTH = verde (los dos sí), EITHER = amarillo (uno u otro), NEITHER = rojo (ninguno de los dos). Recuerda: "Neither" ya es negativo, así que el verbo va en AFIRMATIVO. Y en frases negativas, di "either" al final, nunca "too": "I don\'t like it either" (no "I don\'t like it too").'
  },

  // ─── B1: First Conditional ──────────────────────────────────────────
  {
    id: 'b1-first-conditional',
    title: 'First Conditional: Real Future Possibilities',
    titleEs: 'Primer Condicional: Posibilidades Reales en el Futuro',
    level: 'B1',
    cefrLevel: 3,
    category: 'clauses',
    priority: 'critical',
    prerequisiteIds: ['a2-going-to-vs-will'],
    explanation: 'The first conditional is used to talk about real and possible situations in the future. It is formed with "if + present simple" in the condition clause and "will + base form" in the result clause. The if-clause can come first or second; when it comes first, use a comma before the result clause. This structure expresses things the speaker thinks are likely or genuinely possible.',
    explanationEs: 'El primer condicional se usa para hablar de situaciones reales y posibles en el futuro. Se forma con "if + presente simple" en la cláusula condicional y "will + forma base" en la cláusula de resultado. La cláusula con "if" puede ir primero o segundo; cuando va primero, se usa una coma antes de la cláusula de resultado. Esta estructura expresa cosas que el hablante cree probables o genuinamente posibles.',
    formationRules: [
      {
        label: 'First Conditional Structure',
        labelEs: 'Estructura del Primer Condicional',
        formula: 'If + subject + present simple, subject + will + base form',
        steps: [
          { step: 'Write the if-clause using the present simple tense (NOT will)', stepEs: 'Escribe la cláusula con "if" usando el presente simple (NO "will")', example: 'If it rains...', translation: 'Si llueve...' },
          { step: 'Add the result clause with will + base form', stepEs: 'Añade la cláusula de resultado con will + forma base', example: 'If it rains, I will take an umbrella.', translation: 'Si llueve, llevaré un paraguas.' },
          { step: 'You can reverse the order — no comma needed when "if" comes second', stepEs: 'Puedes invertir el orden — no se necesita coma cuando "if" va segundo', example: 'I will take an umbrella if it rains.', translation: 'Llevaré un paraguas si llueve.' },
        ]
      }
    ],
    signalWords: [
      { word: 'if', meaning: 'introduces the condition', meaningEs: 'introduce la condición' },
      { word: 'unless', meaning: 'means "if not"', meaningEs: 'significa "si no"' },
      { word: 'as long as', meaning: 'provided that', meaningEs: 'siempre que / con tal de que' },
      { word: 'in case', meaning: 'as a precaution', meaningEs: 'por si acaso' },
    ],
    l1Contrast: {
      concept: 'Tense in the if-clause',
      conceptEs: 'Tiempo verbal en la cláusula con "si"',
      spanishBehavior: 'Spanish uses present indicative in the if-clause ("Si vienes, te lo digo"), which maps fairly well. However, some learners insert "will" in the if-clause by analogy with the future meaning.',
      englishBehavior: 'English NEVER uses "will" in the if-clause of a first conditional. The present simple is used even though the meaning is future: "If you come" (not "If you will come").',
      contrastExamples: [
        { english: 'If you study hard, you will pass the exam.', spanish: 'Si estudias mucho, aprobarás el examen.', note: 'Present simple after "if" in English, present indicative after "si" in Spanish — similar structure.' },
        { english: 'If it rains, we\'ll stay home.', spanish: 'Si llueve, nos quedaremos en casa.', note: 'English uses present simple (rains), NOT future (will rain), after "if". Spanish similarly uses present indicative.' },
      ]
    },
    predictedErrors: [
      { error: 'If I will pass the exam, I will celebrate.', correction: 'If I pass the exam, I will celebrate.', whyEs: 'En inglés, la cláusula con "if" en el primer condicional NUNCA lleva "will". Se usa el presente simple aunque el significado sea futuro.', frequency: 'very common' },
      { error: 'If it rains, I stay home.', correction: 'If it rains, I\'ll stay home.', whyEs: 'La cláusula de resultado necesita "will" para indicar el futuro. Sin "will" suena como una rutina general, no una posibilidad futura.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'If she _____ (finish) early, she will call you.', question: 'What is the correct form of "finish" in this first conditional?', options: ['will finish', 'finishes', 'finished', 'is finishing'], correct: 1, explanationEs: 'En el primer condicional, la cláusula con "if" usa el presente simple: "finishes". No se usa "will" después de "if".' },
        { sentence: 'We\'ll go to the beach if the weather _____ nice.', question: 'Choose the correct verb form.', options: ['will be', 'is', 'would be', 'was'], correct: 1, explanationEs: 'Presente simple después de "if" en el primer condicional: "if the weather is nice", aunque hablamos del futuro.' },
        { sentence: 'If you _____ (miss) the bus, you\'ll be late for the meeting.', question: 'First conditional if-clause:', options: ['will miss', 'miss', 'missed', 'would miss'], correct: 1, explanationEs: 'NUNCA "will" después de "if". Presente simple: miss.' },
        { sentence: '_____ you pass the exam if you study hard?', question: 'Question form:', options: ['Will', 'Do', 'Would', 'Are'], correct: 0, explanationEs: 'La cláusula de resultado lleva "will" en preguntas: Will you pass...?' },
        { sentence: 'We won\'t go out if it _____ (rain).', question: 'Negative result, if-clause:', options: ['will rain', 'rains', 'rained', 'would rain'], correct: 1, explanationEs: 'If-clause siempre presente simple, nunca will.' },
      ],
      controlled: [
        { prompt: 'Complete: If I _____ (have) time tomorrow, I _____ (help) you.', promptEs: 'Completa: Si tengo tiempo mañana, te ayudaré.', answer: 'If I have time tomorrow, I will help you.', hint: 'Present simple in if-clause, will in result clause' },
        { prompt: 'Make a first conditional: you / not study → you / fail', promptEs: 'Forma un primer condicional: tú / no estudiar → tú / suspender', answer: 'If you don\'t study, you will fail.', hint: 'If + present simple negative, will + base form' },
        { prompt: 'Complete: If the flight _____ (delay), we _____ (miss) our connection.', promptEs: 'Completa: Si el vuelo se retrasa, perderemos la conexión.', answer: 'If the flight is delayed, we will miss our connection.', hint: 'Passive: is delayed' },
        { prompt: 'Correct: If I will have time, I will call you.', promptEs: 'Corrige: Si tendré tiempo, te llamaré.', answer: 'If I have time, I will call you.', hint: 'No "will" en la cláusula if' },
        { prompt: 'Make first conditional: it / rain tomorrow → we / stay home', promptEs: 'Primer condicional: si llueve mañana → nos quedamos en casa', answer: 'If it rains tomorrow, we will stay home.', hint: 'If + present, will + base' },
      ]
    },
    recycleInTopics: ['b1-second-conditional', 'b1-unless-in-case'],
    tipEs: '💡 Regla de oro: NUNCA pongas "will" después de "if" en el primer condicional. Piensa: "If + PRESENTE, WILL + verbo". Es como una promesa: "Si pasa X (real), entonces haré Y". ¡El "if" ya indica futuro, no necesitas "will" dos veces!'
  },

  // ─── B1: Second Conditional ─────────────────────────────────────────
  {
    id: 'b1-second-conditional',
    title: 'Second Conditional: Unreal Present/Future',
    titleEs: 'Segundo Condicional: Presente/Futuro Irreal',
    level: 'B1',
    cefrLevel: 3,
    category: 'clauses',
    priority: 'critical',
    prerequisiteIds: ['b1-first-conditional'],
    explanation: 'The second conditional is used to talk about unreal, hypothetical, or unlikely situations in the present or future. It is formed with "if + past simple" in the condition clause and "would + base form" in the result clause. Even though the past simple is used, the meaning is NOT about the past — it signals unreality. Formally, "were" is preferred over "was" for all subjects after "if".',
    explanationEs: 'El segundo condicional se usa para hablar de situaciones irreales, hipotéticas o improbables en el presente o futuro. Se forma con "if + pasado simple" en la cláusula condicional y "would + forma base" en la cláusula de resultado. Aunque se usa el pasado simple, el significado NO es pasado — señala irrealidad. Formalmente, se prefiere "were" sobre "was" para todos los sujetos después de "if".',
    formationRules: [
      {
        label: 'Second Conditional Structure',
        labelEs: 'Estructura del Segundo Condicional',
        formula: 'If + subject + past simple, subject + would + base form',
        steps: [
          { step: 'Write the if-clause using the past simple (to signal unreality)', stepEs: 'Escribe la cláusula con "if" usando el pasado simple (para señalar irrealidad)', example: 'If I had a million dollars...', translation: 'Si tuviera un millón de dólares...' },
          { step: 'Add the result clause with would + base form', stepEs: 'Añade la cláusula de resultado con would + forma base', example: 'If I had a million dollars, I would travel the world.', translation: 'Si tuviera un millón de dólares, viajaría por el mundo.' },
          { step: 'Use "were" instead of "was" in formal English (for all subjects)', stepEs: 'Usa "were" en vez de "was" en inglés formal (para todos los sujetos)', example: 'If I were you, I would accept the offer.', translation: 'Si yo fuera tú, aceptaría la oferta.' },
        ]
      }
    ],
    signalWords: [
      { word: 'if', meaning: 'introduces the hypothetical condition', meaningEs: 'introduce la condición hipotética' },
      { word: 'would', meaning: 'signals the unreal result', meaningEs: 'señala el resultado irreal' },
      { word: 'imagine', meaning: 'often introduces hypothetical scenarios', meaningEs: 'a menudo introduce escenarios hipotéticos' },
      { word: 'suppose', meaning: '"what if" — introduces a hypothesis', meaningEs: '"y si" — introduce una hipótesis' },
    ],
    l1Contrast: {
      concept: 'Past form for unreal present meaning',
      conceptEs: 'Forma pasada para un significado presente irreal',
      spanishBehavior: 'Spanish uses the imperfect subjunctive ("Si tuviera/tuviese dinero, viajaría") which is clearly a subjunctive mood, distinct from the indicative past.',
      englishBehavior: 'English uses the past simple form in the if-clause, but the meaning is present/future unreal. This "tense shift" (present meaning → past form) confuses learners because the past simple usually refers to past time.',
      contrastExamples: [
        { english: 'If I had more time, I would learn Japanese.', spanish: 'Si tuviera más tiempo, aprendería japonés.', note: 'English past simple "had" = Spanish imperfect subjunctive "tuviera". Both signal unreality, but English reuses the past form.' },
        { english: 'If I were you, I wouldn\'t worry.', spanish: 'Si yo fuera tú, no me preocuparía.', note: '"Were" is used for all subjects in formal English (including "I were"), paralleling Spanish "fuera".' },
      ]
    },
    predictedErrors: [
      { error: 'If I would have money, I would buy a car.', correction: 'If I had money, I would buy a car.', whyEs: 'NUNCA uses "would" en la cláusula con "if" del segundo condicional. Se usa el pasado simple: "If I had" (no "If I would have").', frequency: 'very common' },
      { error: 'If I was you, I would study more.', correction: 'If I were you, I would study more.', whyEs: 'En inglés formal, se usa "were" (no "was") para todos los sujetos en el segundo condicional. "If I were you" es la forma estándar.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'If she _____ (know) the answer, she would tell us.', question: 'What is the correct form for this second conditional?', options: ['knows', 'would know', 'knew', 'has known'], correct: 2, explanationEs: 'El segundo condicional usa el pasado simple en la cláusula con "if": "knew". Señala una situación irreal en el presente.' },
        { sentence: 'What would you do if you _____ (win) the lottery?', question: 'Choose the correct verb form.', options: ['win', 'won', 'would win', 'will win'], correct: 1, explanationEs: 'Pasado simple "won" en la cláusula con "if" para una situación hipotética. No se usa "would" ni "will" después de "if".' },
        { sentence: 'If I _____ you, I would accept the offer.', question: 'Formal "be" for all persons:', options: ['was', 'were', 'am', 'would be'], correct: 1, explanationEs: 'En inglés formal: "If I were you" (were para todas las personas).' },
        { sentence: 'If we _____ (have) more budget, we could hire more staff.', question: 'Second conditional:', options: ['have', 'had', 'would have', 'will have'], correct: 1, explanationEs: 'If + Past Simple. "Would" NUNCA va en la cláusula if.' },
        { sentence: 'She would travel more if she _____ (have) more time.', question: 'Unreal present:', options: ['has', 'had', 'would have', 'will have'], correct: 1, explanationEs: 'Situación irreal en presente → Past Simple en la condición.' },
      ],
      controlled: [
        { prompt: 'Complete: If I _____ (be) rich, I _____ (donate) to charity.', promptEs: 'Completa: Si yo fuera rico, donaría a caridad.', answer: 'If I were rich, I would donate to charity.', hint: 'Use "were" for formal English, "would" in the result' },
        { prompt: 'Make a second conditional: she / speak Chinese → she / get that job', promptEs: 'Forma un segundo condicional: ella / hablar chino → ella / conseguir ese trabajo', answer: 'If she spoke Chinese, she would get that job.', hint: 'Past simple in if-clause, would + base form in result' },
        { prompt: 'Correct: If I would have money, I would buy a car.', promptEs: 'Corrige: Si tuviera dinero, compraría un coche.', answer: 'If I had money, I would buy a car.', hint: 'Nunca "would" en la cláusula if' },
        { prompt: 'Complete: If the hotel _____ (be) cheaper, we _____ (stay) there.', promptEs: 'Completa: Si el hotel fuera más barato, nos quedaríamos allí.', answer: 'If the hotel were cheaper, we would stay there.', hint: 'were (formal) + would' },
        { prompt: 'Give advice: Your friend wants to improve their English.', promptEs: 'Da un consejo con segundo condicional sobre mejorar el inglés.', answer: 'If I were you, I would practise every day. / If you practised more, you would improve.', hint: 'If I were you / If you + past...' },
      ]
    },
    recycleInTopics: ['b1-first-conditional', 'b2-third-conditional', 'b1-wish-if-only'],
    tipEs: '💡 Truco: el segundo condicional usa el pasado para hablar del PRESENTE irreal. Piensa en ello como un "mundo paralelo": "If I had wings, I would fly" (Si tuviera alas, volaría). ¡No pasa ni pasó! Y recuerda: NUNCA "If I would..." — sería como decir "Si yo haría..." en español, que tampoco suena bien.'
  },

  // ─── B1: Gerund vs. Infinitive ──────────────────────────────────────
  {
    id: 'b1-gerund-vs-infinitive',
    title: 'Gerund vs. Infinitive After Verbs',
    titleEs: 'Gerundio vs. Infinitivo Después de Verbos',
    level: 'B1',
    cefrLevel: 3,
    category: 'verbs',
    priority: 'critical',
    prerequisiteIds: ['a2-present-continuous'],
    explanation: 'In English, some verbs must be followed by the gerund (-ing form), others by the to-infinitive, and some accept both — sometimes with a change in meaning. Verbs like "enjoy, finish, mind, avoid, suggest" take the gerund. Verbs like "want, decide, hope, agree, plan" take the to-infinitive. Verbs like "stop, remember, try" change meaning depending on which form follows them.',
    explanationEs: 'En inglés, algunos verbos deben ir seguidos del gerundio (forma -ing), otros del infinitivo con "to", y algunos aceptan ambos — a veces con cambio de significado. Verbos como "enjoy, finish, mind, avoid, suggest" llevan gerundio. Verbos como "want, decide, hope, agree, plan" llevan infinitivo con "to". Verbos como "stop, remember, try" cambian de significado dependiendo de la forma que les siga.',
    formationRules: [
      {
        label: 'Verbs + Gerund (-ing)',
        labelEs: 'Verbos + Gerundio (-ing)',
        formula: 'verb + verb-ing',
        steps: [
          { step: 'Identify verbs that require the gerund: enjoy, finish, mind, avoid, suggest, consider, practise, keep, deny, imagine', stepEs: 'Identifica verbos que requieren gerundio: enjoy, finish, mind, avoid, suggest, consider, practise, keep, deny, imagine', example: 'I enjoy reading before bed.', translation: 'Disfruto leyendo/leer antes de dormir.' },
          { step: 'After prepositions, always use the gerund', stepEs: 'Después de preposiciones, siempre usa el gerundio', example: 'She is good at solving problems.', translation: 'Ella es buena resolviendo problemas.' },
        ]
      },
      {
        label: 'Verbs + To-infinitive',
        labelEs: 'Verbos + Infinitivo con "to"',
        formula: 'verb + to + base form',
        steps: [
          { step: 'Identify verbs that require the to-infinitive: want, decide, hope, agree, plan, expect, learn, offer, promise, refuse', stepEs: 'Identifica verbos que requieren infinitivo con "to": want, decide, hope, agree, plan, expect, learn, offer, promise, refuse', example: 'She decided to leave early.', translation: 'Ella decidió irse temprano.' },
          { step: 'Some verbs take both forms with different meanings: "stop doing" (cease the action) vs. "stop to do" (pause in order to do)', stepEs: 'Algunos verbos aceptan ambas formas con significados diferentes: "stop doing" (dejar de) vs. "stop to do" (parar para hacer)', example: 'He stopped smoking. (= He quit) / He stopped to smoke. (= He paused to have a cigarette)', translation: 'Dejó de fumar. / Paró para fumar.' },
        ]
      }
    ],
    signalWords: [
      { word: 'enjoy / mind / avoid', meaning: 'always followed by -ing', meaningEs: 'siempre seguidos de -ing' },
      { word: 'want / decide / hope', meaning: 'always followed by to + verb', meaningEs: 'siempre seguidos de to + verbo' },
      { word: 'stop / remember / try', meaning: 'change meaning with -ing vs. to', meaningEs: 'cambian de significado con -ing vs. to' },
      { word: 'after prepositions', meaning: 'always use -ing', meaningEs: 'siempre usa -ing' },
    ],
    l1Contrast: {
      concept: 'Gerund vs. infinitive verb complementation',
      conceptEs: 'Complementación verbal: gerundio vs. infinitivo',
      spanishBehavior: 'Spanish almost always uses the infinitive after another verb: "Disfruto nadar", "Quiero comer", "Evito conducir". There is no equivalent split between gerund and infinitive complements.',
      englishBehavior: 'English requires learners to memorize which verbs take -ing and which take to+infinitive. Using the wrong one sounds unnatural: "I enjoy swimming" (NOT "I enjoy to swim"). This distinction does not exist in Spanish.',
      contrastExamples: [
        { english: 'I enjoy swimming. (NOT: I enjoy to swim.)', spanish: 'Disfruto nadar.', note: 'Spanish uses infinitive; English requires -ing after "enjoy". Direct translation leads to errors.' },
        { english: 'I want to travel. (NOT: I want travelling.)', spanish: 'Quiero viajar.', note: 'Both languages use an equivalent of the infinitive here, so this pattern feels more natural for Spanish speakers.' },
      ]
    },
    predictedErrors: [
      { error: 'I enjoy to play football.', correction: 'I enjoy playing football.', whyEs: '"Enjoy" siempre va seguido de gerundio (-ing). En español decimos "Disfruto jugar" (infinitivo), pero en inglés es "enjoy playing" (gerundio).', frequency: 'very common' },
      { error: 'I stopped to smoke last year.', correction: 'I stopped smoking last year.', whyEs: '"Stopped to smoke" significa "paré para fumar" (una pausa). "Stopped smoking" significa "dejé de fumar" (abandoné el hábito). El significado cambia completamente.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She avoids _____ (eat) fast food.', question: 'What form of "eat" follows "avoids"?', options: ['to eat', 'eating', 'eat', 'eaten'], correct: 1, explanationEs: '"Avoid" siempre va seguido de gerundio: "avoids eating". Nunca se dice "avoids to eat".' },
        { sentence: 'They decided _____ (move) to another city.', question: 'What form of "move" follows "decided"?', options: ['moving', 'to move', 'move', 'moved'], correct: 1, explanationEs: '"Decide" siempre va seguido de infinitivo con "to": "decided to move". Nunca se dice "decided moving".' },
      ],
      controlled: [
        { prompt: 'Complete: I don\'t mind _____ (wait) for you.', promptEs: 'Completa: No me importa esperar(-te).', answer: 'I don\'t mind waiting for you.', hint: '"Mind" takes the gerund (-ing)' },
        { prompt: 'Complete: We hope _____ (see) you soon.', promptEs: 'Completa: Esperamos verte pronto.', answer: 'We hope to see you soon.', hint: '"Hope" takes the to-infinitive' },
      ]
    },
    recycleInTopics: ['b1-reported-speech', 'b1-passive-voice', 'b2-advanced-gerund-infinitive'],
    tipEs: '💡 No hay una regla mágica: hay que MEMORIZAR qué verbos llevan -ing y cuáles llevan "to". Truco: haz dos listas y pégalas donde las veas a diario. Los verbos de "disfrute" suelen llevar -ing (enjoy, love, like doing), mientras que los de "intención futura" suelen llevar "to" (want, plan, decide to do). Y cuidado con "stop": ¡"stopped doing" ≠ "stopped to do"!'
  },

  // ─── B1: Used to and Would ──────────────────────────────────────────
  {
    id: 'b1-used-to-would',
    title: 'Used to and Would for Past Habits',
    titleEs: '"Used to" y "Would" para Hábitos Pasados',
    level: 'B1',
    cefrLevel: 3,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['a2-past-simple'],
    explanation: '"Used to + base form" describes past states and habits that are no longer true. "Would + base form" can also describe repeated past actions (habits), but CANNOT describe past states. Be careful not to confuse "used to do" (past habit) with "be used to doing" (be accustomed to) — they have completely different meanings and structures.',
    explanationEs: '"Used to + forma base" describe estados y hábitos pasados que ya no son ciertos. "Would + forma base" también puede describir acciones pasadas repetidas (hábitos), pero NO puede describir estados pasados. Ten cuidado de no confundir "used to do" (hábito pasado) con "be used to doing" (estar acostumbrado a) — tienen significados y estructuras completamente diferentes.',
    formationRules: [
      {
        label: 'Used to: Past Habits and States',
        labelEs: 'Used to: Hábitos y Estados Pasados',
        formula: 'subject + used to + base form',
        steps: [
          { step: 'Use "used to" for habits AND states that no longer exist', stepEs: 'Usa "used to" para hábitos Y estados que ya no existen', example: 'I used to live in Madrid. (state — no longer true)', translation: 'Yo vivía/solía vivir en Madrid.' },
          { step: 'Negative: didn\'t use to (note: no "d" on "use")', stepEs: 'Negativo: didn\'t use to (nota: sin "d" en "use")', example: 'She didn\'t use to like coffee.', translation: 'A ella no le gustaba/solía gustar el café.' },
          { step: 'Question: Did + subject + use to...?', stepEs: 'Pregunta: Did + sujeto + use to...?', example: 'Did you use to play sports as a child?', translation: '¿Solías hacer deporte de niño?' },
        ]
      },
      {
        label: 'Would: Repeated Past Actions Only',
        labelEs: 'Would: Solo Acciones Pasadas Repetidas',
        formula: 'subject + would + base form (for repeated actions only)',
        steps: [
          { step: '"Would" can replace "used to" for repeated ACTIONS (not states)', stepEs: '"Would" puede reemplazar "used to" para ACCIONES repetidas (no estados)', example: 'Every summer, we would go to the beach.', translation: 'Cada verano, íbamos a la playa.' },
          { step: 'NEVER use "would" for past states', stepEs: 'NUNCA uses "would" para estados pasados', example: '✗ He would be tall. → ✓ He used to be tall.', translation: '✗ Él sería alto. → ✓ Él solía ser alto.' },
        ]
      }
    ],
    signalWords: [
      { word: 'used to', meaning: 'signals a past habit or state (no longer true)', meaningEs: 'señala un hábito o estado pasado (ya no es cierto)' },
      { word: 'would', meaning: 'signals a repeated past action (not a state)', meaningEs: 'señala una acción pasada repetida (no un estado)' },
      { word: 'when I was young', meaning: 'common context for used to / would', meaningEs: 'contexto común para used to / would' },
      { word: 'in those days', meaning: 'sets the scene for past habits', meaningEs: 'establece el contexto para hábitos pasados' },
      { word: 'every summer / always', meaning: 'signals habitual repetition', meaningEs: 'señala repetición habitual' },
    ],
    l1Contrast: {
      concept: '"Used to" vs. "be used to" and limitations of "would"',
      conceptEs: '"Used to" vs. "be used to" y limitaciones de "would"',
      spanishBehavior: 'Spanish "solía + infinitivo" covers both states and habits. "Estar acostumbrado a" translates "be used to". Learners often mix up "used to do" and "be used to doing" because "used to" appears in both.',
      englishBehavior: '"Used to do" = past habit/state (no longer true). "Be used to doing" = be accustomed to (present). "Would" can only replace "used to" for repeated ACTIONS, never for states like "be, have, know, live".',
      contrastExamples: [
        { english: 'I used to smoke. (past habit, no longer true)', spanish: 'Yo solía fumar. / Yo fumaba antes.', note: '"Used to" for a past habit. Can also say "I would smoke" since it\'s an action.' },
        { english: 'I\'m used to waking up early. (= I\'m accustomed to it)', spanish: 'Estoy acostumbrado a levantarme temprano.', note: 'Completely different from "I used to wake up early" (= I used to but not anymore).' },
      ]
    },
    predictedErrors: [
      { error: 'I use to play tennis every weekend.', correction: 'I used to play tennis every weekend.', whyEs: 'En afirmativas, siempre se escribe "used to" (con "d"). Sin la "d" solo aparece en negativas/preguntas con "did": "didn\'t use to", "Did you use to...?"', frequency: 'very common' },
      { error: 'He would be tall when he was young.', correction: 'He used to be tall when he was young.', whyEs: '"Would" NO puede usarse con estados (be, have, know, like, live). Para estados pasados, usa "used to": "He used to be tall".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'When I was a child, I _____ climb trees every day.', question: 'Which option is correct for a repeated past action?', options: ['used to', 'would', 'Both are correct', 'was used to'], correct: 2, explanationEs: 'Subir a árboles es una ACCIÓN repetida, así que tanto "used to" como "would" son correctos aquí.' },
        { sentence: 'She _____ have long hair, but now it\'s short.', question: 'Which option is correct for a past state?', options: ['would', 'used to', 'Both are correct', 'is used to'], correct: 1, explanationEs: 'Tener pelo largo es un ESTADO, no una acción. Solo "used to" puede usarse con estados; "would" no es posible aquí.' },
      ],
      controlled: [
        { prompt: 'Write about a past habit using "used to": I / walk to school', promptEs: 'Escribe sobre un hábito pasado usando "used to": yo / caminar al colegio', answer: 'I used to walk to school.', hint: 'subject + used to + base form' },
        { prompt: 'Rewrite using "would": Every evening, we used to play cards.', promptEs: 'Reescribe usando "would": Cada noche, solíamos jugar a las cartas.', answer: 'Every evening, we would play cards.', hint: '"Play" is a repeated action, so "would" works here' },
      ]
    },
    recycleInTopics: ['a2-past-simple', 'b1-past-continuous', 'b2-narrative-tenses'],
    tipEs: '💡 Regla clave: "would" es solo para ACCIONES repetidas en el pasado (correr, jugar, ir...). Para ESTADOS (ser, tener, vivir, saber...), solo puedes usar "used to". Y cuidado: "I used to do" (solía hacer) ≠ "I\'m used to doing" (estoy acostumbrado a hacer). ¡Son estructuras completamente diferentes!'
  },

  // ─── B1: Defining vs. Non-defining Relative Clauses ─────────────────
  {
    id: 'b1-defining-vs-nondefining-relative',
    title: 'Defining vs. Non-defining Relative Clauses',
    titleEs: 'Oraciones de Relativo Especificativas vs. Explicativas',
    level: 'B1',
    cefrLevel: 3,
    category: 'clauses',
    priority: 'high',
    prerequisiteIds: ['b1-relative-clauses'],
    explanation: 'Defining relative clauses identify which person or thing we mean — they are essential to the meaning and have NO commas. Non-defining relative clauses add extra information about something already identified — they are enclosed in commas and use "who/which/whose" but NEVER "that". Removing a defining clause changes the meaning; removing a non-defining clause does not.',
    explanationEs: 'Las oraciones de relativo especificativas identifican a qué persona o cosa nos referimos — son esenciales para el significado y NO llevan comas. Las explicativas añaden información extra sobre algo ya identificado — van entre comas y usan "who/which/whose" pero NUNCA "that". Eliminar una especificativa cambia el significado; eliminar una explicativa no lo cambia.',
    formationRules: [
      {
        label: 'Defining Relative Clauses',
        labelEs: 'Oraciones de Relativo Especificativas',
        formula: 'noun + who/which/that + clause (NO commas)',
        steps: [
          { step: 'Use who/that for people, which/that for things — no commas', stepEs: 'Usa who/that para personas, which/that para cosas — sin comas', example: 'The woman who lives next door is a doctor.', translation: 'La mujer que vive al lado es doctora.' },
          { step: 'The clause is ESSENTIAL — removing it changes the meaning', stepEs: 'La cláusula es ESENCIAL — eliminarla cambia el significado', example: '"The woman is a doctor" — which woman? We need the clause to know.', translation: '"La mujer es doctora" — ¿qué mujer? Necesitamos la cláusula para saberlo.' },
        ]
      },
      {
        label: 'Non-defining Relative Clauses',
        labelEs: 'Oraciones de Relativo Explicativas',
        formula: 'noun + , + who/which + clause + , (WITH commas, NO "that")',
        steps: [
          { step: 'Use commas to separate the extra information', stepEs: 'Usa comas para separar la información extra', example: 'My brother, who lives in London, is visiting us.', translation: 'Mi hermano, que vive en Londres, nos está visitando.' },
          { step: 'NEVER use "that" in non-defining clauses', stepEs: 'NUNCA uses "that" en cláusulas explicativas', example: '✗ Paris, that is the capital of France... → ✓ Paris, which is the capital of France...', translation: '✗ París, that es la capital... → ✓ París, which es la capital...' },
        ]
      }
    ],
    signalWords: [
      { word: 'who', meaning: 'for people (both types)', meaningEs: 'para personas (ambos tipos)' },
      { word: 'which', meaning: 'for things (both types)', meaningEs: 'para cosas (ambos tipos)' },
      { word: 'that', meaning: 'ONLY in defining clauses', meaningEs: 'SOLO en cláusulas especificativas' },
      { word: 'whose', meaning: 'possessive (both types)', meaningEs: 'posesivo (ambos tipos)' },
      { word: 'commas', meaning: 'mark non-defining clauses', meaningEs: 'marcan las cláusulas explicativas' },
    ],
    l1Contrast: {
      concept: 'Comma usage and "that" restriction in relative clauses',
      conceptEs: 'Uso de comas y restricción de "that" en relativas',
      spanishBehavior: 'Spanish uses "que" for both defining and non-defining clauses. Commas are used in non-defining clauses, but since "que" works everywhere, Spanish speakers may not notice the "that" restriction in English.',
      englishBehavior: 'English bans "that" in non-defining (comma) clauses. Only "who/which/whose" are allowed. Also, the relative pronoun can be omitted in defining clauses when it\'s the object, but NEVER in non-defining clauses.',
      contrastExamples: [
        { english: 'The book that/which I bought is great. (defining — no commas)', spanish: 'El libro que compré es genial.', note: '"That" or "which" both work in defining clauses. Spanish just uses "que".' },
        { english: 'This book, which I bought yesterday, is great. (non-defining — commas, NO "that")', spanish: 'Este libro, que compré ayer, es genial.', note: 'Spanish uses "que" in both; English requires "which" (never "that") with commas.' },
      ]
    },
    predictedErrors: [
      { error: 'My sister that lives in London is coming.', correction: 'My sister, who lives in London, is coming.', whyEs: 'Si solo tienes UNA hermana, la información es extra (no esencial para identificarla), así que necesitas comas y "who" (no "that"). Es una cláusula explicativa.', frequency: 'very common' },
      { error: 'Paris, that is the capital of France, is beautiful.', correction: 'Paris, which is the capital of France, is beautiful.', whyEs: 'En cláusulas explicativas (con comas), NUNCA se usa "that". Se debe usar "which" para cosas y "who" para personas.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'The man _____ called you is my uncle.', question: 'Is this a defining or non-defining clause? Choose the best relative pronoun.', options: ['who (defining)', ', who (non-defining)', 'which', ', that'], correct: 0, explanationEs: 'Es ESPECIFICATIVA (defining): identifica QUÉ hombre. Sin comas, "who" o "that" son correctos.' },
        { sentence: 'My car, _____ is very old, broke down again.', question: 'Choose the correct option for this non-defining clause.', options: ['that', 'which', 'who', 'where'], correct: 1, explanationEs: 'Es EXPLICATIVA (non-defining): ya sabemos qué coche (mi coche). Con comas, se usa "which" para cosas. "That" NO está permitido.' },
        { sentence: 'Paris, _____ is the capital of France, is beautiful.', question: 'Non-defining — "that" is not allowed:', options: ['that', 'which', 'who', 'where'], correct: 1, explanationEs: 'Con comas (explicativa): NUNCA "that". Solo "which" para cosas. Error común: "Paris, that is..."' },
        { sentence: 'The book _____ I bought yesterday is interesting.', question: 'Defining — which relative pronoun works?', options: ['which', 'that', 'Both which and that', 'who'], correct: 2, explanationEs: 'Es ESPECIFICATIVA (sin comas): tanto "which" como "that" son correctos. "That" es más común en habla.' },
        { sentence: 'My sister, _____ lives in Madrid, is a doctor.', question: 'I have only one sister. Correct pronoun:', options: ['that', 'which', 'who', 'whom'], correct: 2, explanationEs: 'Solo una hermana → la info es extra (explicativa). Con comas se usa "who" para personas. "That" no está permitido.' },
      ],
      controlled: [
        { prompt: 'Combine: I have a friend. She speaks five languages. (defining)', promptEs: 'Combina: Tengo una amiga. Ella habla cinco idiomas. (especificativa)', answer: 'I have a friend who speaks five languages.', hint: 'No commas — the clause defines which friend' },
        { prompt: 'Correct: "Paris, that is the capital of France, is beautiful."', promptEs: 'Corrige: París, que es la capital de Francia, es bonito.', answer: 'Paris, which is the capital of France, is beautiful.', hint: 'Non-defining: never "that" — use "which"' },
        { prompt: 'Combine: My mother is here. She is 60 years old. (non-defining)', promptEs: 'Combina: Mi madre está aquí. Ella tiene 60 años. (explicativa)', answer: 'My mother, who is 60 years old, is here.', hint: 'Commas — extra info about one mother' },
        { prompt: 'Combine: The woman works here. She called you. (defining)', promptEs: 'Combina: La mujer trabaja aquí. Ella te llamó. (especificativa)', answer: 'The woman who called you works here.', hint: 'No commas — identifies which woman' },
        { prompt: 'Correct: "My brother, that lives in London, is visiting."', promptEs: 'Corrige: Mi hermano, que vive en Londres, nos visita.', answer: 'My brother, who lives in London, is visiting.', hint: 'Non-defining: use "who", never "that"' },
      ]
    },
    recycleInTopics: ['b1-relative-clauses', 'b2-reduced-relative-clauses'],
    tipEs: '💡 Truco de las comas: si puedes quitar la información entre comas y la frase SIGUE teniendo sentido completo, es EXPLICATIVA (non-defining) → usa comas y NUNCA "that". Si al quitar la cláusula no sabes de quién/qué hablas, es ESPECIFICATIVA (defining) → sin comas, y "that" sí es válido. Ejemplo: "My mother, who is 60, ..." (solo tengo una madre, la info es extra).'
  },

  // ─── B1: Present Perfect Continuous ─────────────────────────────────
  {
    id: 'b1-present-perfect-continuous',
    title: 'Present Perfect Continuous',
    titleEs: 'Presente Perfecto Continuo',
    level: 'B1',
    cefrLevel: 3,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['b1-present-perfect-vs-past-simple'],
    explanation: 'The present perfect continuous is formed with "have/has been + verb-ing". It is used for actions that started in the past and are still continuing, or have recently stopped with visible results. It emphasizes the duration or ongoing nature of the action. Use "for" with a period of time and "since" with a starting point.',
    explanationEs: 'El presente perfecto continuo se forma con "have/has been + verbo-ing". Se usa para acciones que empezaron en el pasado y aún continúan, o que han parado recientemente con resultados visibles. Enfatiza la duración o naturaleza continua de la acción. Usa "for" con un período de tiempo y "since" con un punto de inicio.',
    formationRules: [
      {
        label: 'Present Perfect Continuous Formation',
        labelEs: 'Formación del Presente Perfecto Continuo',
        formula: 'subject + have/has + been + verb-ing',
        steps: [
          { step: 'Use "have been" for I/you/we/they and "has been" for he/she/it', stepEs: 'Usa "have been" para I/you/we/they y "has been" para he/she/it', example: 'I have been waiting for an hour.', translation: 'He estado esperando / Llevo esperando una hora.' },
          { step: 'Add the main verb in -ing form', stepEs: 'Añade el verbo principal en forma -ing', example: 'She has been studying all morning.', translation: 'Ella ha estado estudiando / Lleva estudiando toda la mañana.' },
          { step: 'Negative: subject + have/has + not + been + verb-ing', stepEs: 'Negativo: sujeto + have/has + not + been + verbo-ing', example: 'They haven\'t been sleeping well lately.', translation: 'No han estado durmiendo bien últimamente.' },
        ]
      }
    ],
    signalWords: [
      { word: 'for', meaning: 'duration of time (for 3 hours, for weeks)', meaningEs: 'duración de tiempo (durante 3 horas, durante semanas)' },
      { word: 'since', meaning: 'starting point (since Monday, since 2020)', meaningEs: 'punto de inicio (desde el lunes, desde 2020)' },
      { word: 'all day/morning/week', meaning: 'emphasizes continuous duration', meaningEs: 'enfatiza duración continua' },
      { word: 'lately / recently', meaning: 'connects past activity to present', meaningEs: 'conecta actividad pasada con el presente' },
      { word: 'How long...?', meaning: 'typical question for this tense', meaningEs: 'pregunta típica para este tiempo' },
    ],
    l1Contrast: {
      concept: 'Expressing ongoing duration from past to present',
      conceptEs: 'Expresar duración continua del pasado al presente',
      spanishBehavior: 'Spanish uses "llevar + gerundio" ("Llevo esperando 2 horas") or the present tense with "desde" ("Espero desde las 3"). There is no direct equivalent structure with an auxiliary like "have been".',
      englishBehavior: 'English uses "have/has been + -ing" to emphasize ongoing activity with duration. Learners often use present continuous ("I am waiting for 2 hours") instead, which doesn\'t convey the past-to-present connection.',
      contrastExamples: [
        { english: 'I have been waiting for 2 hours.', spanish: 'Llevo 2 horas esperando. / He estado esperando 2 horas.', note: 'Spanish "llevar + gerundio" ≈ present perfect continuous. Using present continuous ("I am waiting for 2 hours") is incorrect.' },
        { english: 'It has been raining since morning.', spanish: 'Lleva lloviendo desde la mañana. / Ha estado lloviendo desde la mañana.', note: '"Since" marks the starting point. Spanish uses "desde" with "llevar" or present tense.' },
      ]
    },
    predictedErrors: [
      { error: 'I am waiting for 2 hours.', correction: 'I have been waiting for 2 hours.', whyEs: 'Para expresar una acción que empezó en el pasado y continúa hasta ahora con duración, usa el presente perfecto continuo, no el presente continuo.', frequency: 'very common' },
      { error: 'It has been raining since 3 hours.', correction: 'It has been raining for 3 hours.', whyEs: '"Since" se usa con un PUNTO en el tiempo (since 3 o\'clock, since Monday). "For" se usa con un PERÍODO de tiempo (for 3 hours, for two days).', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'You look tired. _____ you _____ (run)?', question: 'Complete using the present perfect continuous.', options: ['Are / running', 'Have / been running', 'Did / run', 'Were / running'], correct: 1, explanationEs: 'La acción reciente tiene resultados visibles (estás cansado). Se usa el presente perfecto continuo: "Have you been running?"' },
        { sentence: 'She _____ (study) English for five years.', question: 'Choose the correct form to show an ongoing action.', options: ['studies', 'has been studying', 'is studying', 'studied'], correct: 1, explanationEs: '"For five years" indica duración desde el pasado hasta ahora. El presente perfecto continuo enfatiza la acción en curso: "has been studying".' },
        { sentence: 'It _____ (rain) since this morning.', question: 'Action started in the past and continues:', options: ['rains', 'raining', 'has been raining', 'is raining'], correct: 2, explanationEs: '"Since" marca el inicio. Acción que empezó y continúa → Present Perfect Continuous.' },
        { sentence: 'I _____ (wait) for 30 minutes. Where are you?', question: 'Duration from past to now:', options: ['am waiting', 'wait', 'have been waiting', 'waited'], correct: 2, explanationEs: 'Duración desde el pasado hasta ahora: "have been waiting". Error común: "I am waiting for 30 minutes".' },
        { sentence: 'They _____ (work) on this project all week.', question: 'Ongoing activity with duration:', options: ['work', 'are working', 'have been working', 'worked'], correct: 2, explanationEs: '"All week" indica duración continua. Se usa "have been working".' },
      ],
      controlled: [
        { prompt: 'Complete: They _____ (live) here since 2018.', promptEs: 'Completa: Ellos han estado viviendo / Llevan viviendo aquí desde 2018.', answer: 'They have been living here since 2018.', hint: 'have + been + verb-ing; "since" for a point in time' },
        { prompt: 'Make a question: How long / you / learn / English?', promptEs: 'Forma una pregunta: ¿Cuánto tiempo llevas aprendiendo inglés?', answer: 'How long have you been learning English?', hint: 'How long + have + subject + been + verb-ing' },
        { prompt: 'Complete: "I _____ (work) here for three years." (still working)', promptEs: 'Completa: Llevo tres años trabajando aquí.', answer: 'I have been working here for three years.', hint: 'for + period; have been + -ing' },
        { prompt: 'Correct: "I am waiting for 2 hours."', promptEs: 'Corrige: Llevo esperando 2 horas.', answer: 'I have been waiting for 2 hours.', hint: 'Duration from past to now → Present Perfect Continuous' },
        { prompt: 'Complete: "She _____ (look) for a job lately."', promptEs: 'Completa: Ella ha estado buscando trabajo últimamente.', answer: 'She has been looking for a job lately.', hint: 'lately + have been + -ing' },
      ]
    },
    recycleInTopics: ['b1-present-perfect-vs-past-simple', 'b2-perfect-tenses-review'],
    tipEs: '💡 Piensa en el presente perfecto continuo como una "línea del tiempo" que va DESDE un punto en el pasado HASTA ahora: ——→ AHORA. Usa "for" para la DURACIÓN de la línea (for 3 hours) y "since" para el INICIO de la línea (since 2 o\'clock). Si alguien te dice "You look tired!", responde: "I\'ve been running!" (¡llevo corriendo!).'
  },

  // ─── B1: Quantifiers ────────────────────────────────────────────────
  {
    id: 'b1-quantifiers',
    title: 'Quantifiers: Much, Many, A lot of, Few, Little',
    titleEs: 'Cuantificadores: Much, Many, A lot of, Few, Little',
    level: 'B1',
    cefrLevel: 3,
    category: 'nouns',
    priority: 'medium',
    prerequisiteIds: ['a2-countable-uncountable'],
    explanation: 'Quantifiers indicate how much or how many. "Much" is used with uncountable nouns (mostly in negatives and questions), "many" with countable plural nouns, and "a lot of" with both. "Few / a few" modify countable nouns, while "little / a little" modify uncountable nouns. Note the important difference: "few/little" (without "a") = almost none (negative), "a few/a little" (with "a") = some, enough (positive).',
    explanationEs: 'Los cuantificadores indican cuánto o cuántos. "Much" se usa con sustantivos incontables (sobre todo en negativas y preguntas), "many" con sustantivos contables en plural, y "a lot of" con ambos. "Few / a few" modifican contables, mientras que "little / a little" modifican incontables. Nota la diferencia importante: "few/little" (sin "a") = casi nada (negativo), "a few/a little" (con "a") = algunos, suficiente (positivo).',
    formationRules: [
      {
        label: 'Quantifiers with Countable and Uncountable Nouns',
        labelEs: 'Cuantificadores con Sustantivos Contables e Incontables',
        formula: 'much + uncountable / many + countable plural / a lot of + both',
        steps: [
          { step: '"Much" for uncountable nouns (mainly negatives and questions)', stepEs: '"Much" para incontables (principalmente negativas y preguntas)', example: 'There isn\'t much time. / Is there much milk?', translation: 'No hay mucho tiempo. / ¿Hay mucha leche?' },
          { step: '"Many" for countable plural nouns', stepEs: '"Many" para sustantivos contables en plural', example: 'There are many students in the class.', translation: 'Hay muchos estudiantes en la clase.' },
          { step: '"A lot of" works with both (especially in affirmative sentences)', stepEs: '"A lot of" funciona con ambos (especialmente en oraciones afirmativas)', example: 'She has a lot of friends. / We need a lot of water.', translation: 'Ella tiene muchos amigos. / Necesitamos mucha agua.' },
        ]
      },
      {
        label: 'Few/A few vs. Little/A little',
        labelEs: 'Few/A few vs. Little/A little',
        formula: 'few/a few + countable plural / little/a little + uncountable',
        steps: [
          { step: '"A few" (= some, positive) vs. "few" (= almost none, negative) — for countable nouns', stepEs: '"A few" (= algunos, positivo) vs. "few" (= casi ninguno, negativo) — para contables', example: 'I have a few friends here. (positive) / I have few friends here. (negative — almost none)', translation: 'Tengo algunos amigos aquí. / Tengo pocos amigos aquí (casi ninguno).' },
          { step: '"A little" (= some, positive) vs. "little" (= almost none, negative) — for uncountable nouns', stepEs: '"A little" (= algo, positivo) vs. "little" (= casi nada, negativo) — para incontables', example: 'There is a little hope. (positive) / There is little hope. (negative — almost none)', translation: 'Hay algo de esperanza. / Hay poca esperanza (casi nada).' },
        ]
      }
    ],
    signalWords: [
      { word: 'much', meaning: 'large quantity — uncountable (neg./questions)', meaningEs: 'gran cantidad — incontable (neg./preguntas)' },
      { word: 'many', meaning: 'large number — countable plural', meaningEs: 'gran número — contable plural' },
      { word: 'a lot of', meaning: 'large quantity — both types (affirmative)', meaningEs: 'gran cantidad — ambos tipos (afirmativa)' },
      { word: 'a few / few', meaning: 'some / almost none — countable', meaningEs: 'algunos / casi ninguno — contable' },
      { word: 'a little / little', meaning: 'some / almost none — uncountable', meaningEs: 'algo / casi nada — incontable' },
    ],
    l1Contrast: {
      concept: 'Countable/uncountable distinction in quantifiers',
      conceptEs: 'Distinción contable/incontable en cuantificadores',
      spanishBehavior: 'Spanish uses "mucho/mucha/muchos/muchas" for all, agreeing in gender and number but not distinguishing countable from uncountable. "Poco/poca/pocos/pocas" works the same way — no separate forms exist.',
      englishBehavior: 'English forces a choice: "much" (uncountable) vs. "many" (countable). "Few" (countable) vs. "little" (uncountable). Spanish speakers often use "much" with countable nouns because "mucho" works for both in Spanish.',
      contrastExamples: [
        { english: 'I don\'t have much money. / I don\'t have many coins.', spanish: 'No tengo mucho dinero. / No tengo muchas monedas.', note: 'English uses "much" (uncountable: money) vs. "many" (countable: coins). Spanish "mucho/muchas" just agree in gender/number.' },
        { english: 'There is little milk left. / There are few eggs left.', spanish: 'Queda poca leche. / Quedan pocos huevos.', note: '"Little" for uncountable (milk), "few" for countable (eggs). Spanish "poca/pocos" just agree in gender/number.' },
      ]
    },
    predictedErrors: [
      { error: 'I have much friends.', correction: 'I have many friends. / I have a lot of friends.', whyEs: '"Friends" es CONTABLE, así que se usa "many" o "a lot of". "Much" solo va con incontables. Además, "much" suena raro en afirmativas; mejor usar "a lot of".', frequency: 'very common' },
      { error: 'There are few milk in the fridge.', correction: 'There is little milk in the fridge.', whyEs: '"Milk" es INCONTABLE, así que se usa "little" (no "few"). Además, el verbo debe ser "is" (singular) con incontables, no "are".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'How _____ sugar do you want in your tea?', question: 'Choose the correct quantifier for this uncountable noun.', options: ['many', 'much', 'few', 'a lot'], correct: 1, explanationEs: '"Sugar" es INCONTABLE, así que se usa "much" en preguntas: "How much sugar...?" (no "How many").' },
        { sentence: 'There are _____ people in the park today.', question: 'Choose the best option for a large quantity (affirmative).', options: ['much', 'a lot of', 'little', 'a little'], correct: 1, explanationEs: '"People" es contable. En afirmativas, "a lot of" es la opción más natural (también valdría "many", pero "much" es incorrecto con contables).' },
        { sentence: 'I have _____ friends here. (positive — some)', question: 'A few vs few — positive meaning:', options: ['a few', 'few', 'a little', 'little'], correct: 0, explanationEs: '"A few" = algunos (positivo). "Few" sin "a" = casi ninguno (negativo).' },
        { sentence: 'There is _____ milk left. (almost none — negative)', question: 'Little vs a little for uncountable:', options: ['a little', 'little', 'a few', 'few'], correct: 1, explanationEs: '"Little" sin "a" = casi nada (negativo). "A little" = algo (positivo). Milk es incontable.' },
        { sentence: 'She doesn\'t have _____ time. (uncountable, negative)', question: 'Much vs many in negative:', options: ['many', 'much', 'few', 'a lot'], correct: 1, explanationEs: '"Time" es INCONTABLE. En negativas: "much". Error común: "many time" (incorrecto).' },
      ],
      controlled: [
        { prompt: 'Complete: She doesn\'t have _____ (much/many) experience.', promptEs: 'Completa: Ella no tiene mucha experiencia.', answer: 'She doesn\'t have much experience.', hint: '"Experience" (in general sense) is uncountable → much' },
        { prompt: 'Correct: "I have much friends."', promptEs: 'Corrige: Tengo muchos amigos.', answer: 'I have many friends. / I have a lot of friends.', hint: 'Countable plural → many or a lot of' },
        { prompt: 'Complete: "There are _____ eggs left." (almost none — negative)', promptEs: 'Completa: Quedan pocos huevos.', answer: 'There are few eggs left.', hint: 'few + countable (negative, no "a")' },
        { prompt: 'Complete: "Can I have _____ water?" (some — positive)', promptEs: 'Completa: ¿Puedo tener un poco de agua?', answer: 'Can I have a little water?', hint: 'a little + uncountable (positive)' },
        { prompt: 'Correct: "There are few milk in the fridge."', promptEs: 'Corrige: Hay poca leche en la nevera.', answer: 'There is little milk in the fridge.', hint: 'Milk is uncountable → little; verb is singular' },
      ]
    },
    recycleInTopics: ['a2-countable-uncountable', 'b1-some-any-no', 'b2-advanced-quantifiers'],
    tipEs: '💡 Truco rápido: ¿Puedes contarlo con los dedos? → MANY / FEW (countable). ¿No puedes contarlo? → MUCH / LITTLE (uncountable). Y para afirmativas, "a lot of" es tu comodín: funciona con TODO. Recuerda: "a few" y "a little" (con "a") son POSITIVOS (= algunos); "few" y "little" (sin "a") son NEGATIVOS (= casi nada).'
  },

  // ═══════════════════════════════════════════════
  // B1 — MODULE: Past Perfect
  // ═══════════════════════════════════════════════
  {
    id: 'b1-past-perfect',
    title: 'Past Perfect (had + past participle)',
    titleEs: 'Pasado Perfecto (had + participio pasado)',
    level: 'B1',
    cefrLevel: 3,
    category: 'verb-tenses',
    priority: 'critical',
    prerequisiteIds: ['a2-past-simple'],
    explanation: 'The Past Perfect is used for actions completed BEFORE another past action. It expresses "the earlier past" in a sequence of events. Structure: had + past participle. It is commonly used with before, after, when, by the time, already, just, and never. Essential for narratives and the third conditional.',
    explanationEs: 'El Past Perfect se usa para acciones completadas ANTES de otra acción pasada. Expresa "el pasado más antiguo" en una secuencia de eventos. Estructura: had + participio pasado. Se usa frecuentemente con before, after, when, by the time, already, just y never. Esencial para narraciones y el tercer condicional.',
    formationRules: [
      {
        label: 'Affirmative',
        labelEs: 'Afirmativo',
        formula: 'Subject + had + past participle',
        steps: [
          { step: 'All persons use "had" (no change for he/she/it)', stepEs: 'Todas las personas usan "had" (sin cambio para he/she/it)', example: 'I had finished. She had left. They had eaten.', translation: 'Yo había terminado. Ella se había ido. Ellos habían comido.' },
          { step: 'Use for the action that happened first', stepEs: 'Usa para la acción que ocurrió primero', example: 'When I arrived, the film had already started.', translation: 'Cuando llegué, la película ya había empezado.' },
        ]
      },
      {
        label: 'Negative',
        labelEs: 'Negativo',
        formula: "Subject + hadn't + past participle",
        steps: [
          { step: "Contraction: had not → hadn't", stepEs: "Contracción: had not → hadn't", example: "She hadn't seen him before that day.", translation: 'Ella no lo había visto antes de ese día.' },
        ]
      },
      {
        label: 'Questions',
        labelEs: 'Preguntas',
        formula: 'Had + subject + past participle?',
        steps: [
          { step: 'Invert: put "had" before the subject', stepEs: 'Invertir: poner "had" antes del sujeto', example: 'Had you finished when she called?', translation: '¿Habías terminado cuando ella llamó?' },
          { step: 'Short answers: Yes, I had. / No, I hadn\'t.', stepEs: 'Respuestas cortas', example: 'Had they left? — Yes, they had.', translation: '¿Se habían ido? — Sí, se habían ido.' },
        ]
      }
    ],
    signalWords: [
      { word: 'before', meaning: 'earlier than another past action', meaningEs: 'antes de otra acción pasada' },
      { word: 'after', meaning: 'following another past action', meaningEs: 'después de otra acción pasada' },
      { word: 'by the time', meaning: 'before a specific past moment', meaningEs: 'para cuando / antes de que' },
      { word: 'already', meaning: 'completed before that point', meaningEs: 'ya (completado antes)' },
      { word: 'just', meaning: 'very recently before that point', meaningEs: 'acabar de (antes de ese momento)' },
      { word: 'never (before that point)', meaning: 'not at any time before', meaningEs: 'nunca (antes de ese momento)' },
      { word: 'as soon as', meaning: 'immediately after', meaningEs: 'tan pronto como' },
      { word: 'when (= after)', meaning: 'after the first action', meaningEs: 'cuando (= después de)' },
    ],
    l1Contrast: {
      concept: 'Spanish Pretérito Pluscuamperfecto maps directly',
      conceptEs: 'El Pretérito Pluscuamperfecto español se corresponde directamente',
      spanishBehavior: 'Spanish has "había + participio" (pretérito pluscuamperfecto) which maps directly to Past Perfect. However, Spanish speakers often skip it and use simple past (pretérito indefinido) instead, especially in informal speech.',
      englishBehavior: 'English requires Past Perfect when one past action clearly happened before another. Using Past Simple for both can make the sequence unclear. English narratives rely on Past Perfect to establish the order of events.',
      contrastExamples: [
        { english: 'When I arrived, she had already left.', spanish: 'Cuando llegué, ella ya se había ido.', note: 'Direct equivalent: había + participio = had + pp.' },
        { english: 'I had never seen him before that day.', spanish: 'Nunca lo había visto antes de ese día.', note: 'Same structure in both languages.' },
        { english: 'By the time we got there, the show had finished.', spanish: 'Para cuando llegamos, el espectáculo había terminado.', note: '"By the time" + Past Perfect is common in English.' },
      ]
    },
    predictedErrors: [
      { error: 'I had went to the shop.', correction: 'I had gone to the shop.', whyEs: 'Después de "had" siempre va el PARTICIPIO PASADO (3ª columna). "Went" es pasado simple; "gone" es participio.', frequency: 'very common' },
      { error: 'When I arrived, she left. (sequence unclear)', correction: 'When I arrived, she had left.', whyEs: 'Si ella se fue ANTES de que tú llegaras, necesitas Past Perfect para la acción más antigua.', frequency: 'very common' },
      { error: 'After I had went home, I watched TV.', correction: 'After I had gone home, I watched TV.', whyEs: '"Had" + participio: "go" → went → GONE. Nunca "had went".', frequency: 'common' },
      { error: 'She had never see that film before.', correction: 'She had never seen that film before.', whyEs: 'Después de "had" va el participio: see → saw → SEEN.', frequency: 'common' },
      { error: 'When the police arrived, the thief already escaped.', correction: 'When the police arrived, the thief had already escaped.', whyEs: 'El ladrón escapó ANTES de que llegara la policía. Necesitas "had escaped" para la acción anterior.', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'When I got to the station, the train _____.', question: 'The train left before you arrived. Choose the correct form:', options: ['left', 'had left', 'has left', 'was leaving'], correct: 1, explanationEs: 'La acción anterior (el tren salir) va en Past Perfect: had left.' },
        { sentence: 'She _____ never _____ to Japan before 2020.', question: 'Complete with Past Perfect:', options: ['had / been', 'has / been', 'had / went', 'has / gone'], correct: 0, explanationEs: 'Past Perfect: had + participio. "Been" es el participio de "go" (para visitar).' },
        { sentence: 'By the time we arrived, they _____ dinner.', question: 'They finished dinner before we arrived:', options: ['finished', 'had finished', 'have finished', 'were finishing'], correct: 1, explanationEs: '"By the time" + acción pasada → la acción completada antes va en Past Perfect.' },
        { sentence: 'I _____ (go) home before the meeting ended.', question: 'I left first. Correct form:', options: ['had gone', 'went', 'have gone', 'had went'], correct: 0, explanationEs: 'Acción anterior → Past Perfect. Participio de "go" = "gone", no "went".' },
        { sentence: '_____ you _____ (finish) when she called?', question: 'Past Perfect question form:', options: ['Had / finished', 'Did / finish', 'Have / finished', 'Were / finishing'], correct: 0, explanationEs: 'Pregunta en Past Perfect: Had + sujeto + participio.' },
        { sentence: 'After she _____ (leave), I realized my mistake.', question: 'She left first. Correct form:', options: ['had left', 'left', 'has left', 'had leaved'], correct: 0, explanationEs: '"After" + Past Perfect para la acción que ocurrió primero.' },
      ],
      controlled: [
        { prompt: 'Complete: When I woke up, my brother _____ (already / go) to work.', promptEs: 'Completa: Cuando me desperté, mi hermano ya _____ (ir) al trabajo.', answer: 'When I woke up, my brother had already gone to work.', hint: 'had + past participle of "go"' },
        { prompt: 'Complete: I _____ (never / see) such a beautiful sunset before that day.', promptEs: 'Completa: Nunca _____ (ver) un atardecer tan hermoso antes de ese día.', answer: 'I had never seen such a beautiful sunset before that day.', hint: 'had never + past participle' },
        { prompt: 'Make negative: She had finished the report.', promptEs: 'Haz negativo: Ella había terminado el informe.', answer: "She hadn't finished the report.", hint: "hadn't + past participle" },
        { prompt: 'Complete: By the time the police arrived, the thieves _____ (escape).', promptEs: 'Completa: Para cuando llegó la policía, los ladrones _____ (escapar).', answer: 'By the time the police arrived, the thieves had escaped.', hint: 'Past Perfect for the earlier action' },
        { prompt: 'Correct: After I had went home, I had dinner.', promptEs: 'Corrige: Después de que había ido a casa, cené.', answer: 'After I had gone home, I had dinner.', hint: 'had + past participle (gone, not went)' },
        { prompt: 'Sequence: (1) The film started. (2) I arrived. Write one sentence.', promptEs: 'Secuencia: (1) La película empezó. (2) Llegué. Escribe una oración.', answer: 'When I arrived, the film had already started.', hint: 'The film started first → Past Perfect' },
      ]
    },
    recycleInTopics: ['b2-conditionals-all', 'b1-reported-speech'],
    tipEs: '💡 Truco: Past Perfect = "el pasado del pasado". Si hay dos acciones en el pasado, la que ocurrió PRIMERO va en Past Perfect. Pregúntate: ¿cuál pasó antes? Esa lleva "had + participio". Y recuerda: "had went" NO existe — siempre "had gone".'
  },

  // ═══════════════════════════════════════════════
  // B1 — MODULE: Linking Words (Basic Connectors)
  // ═══════════════════════════════════════════════
  {
    id: 'b1-linking-words',
    title: 'Linking Words: Contrast, Cause, Result, Addition',
    titleEs: 'Conectores: Contraste, Causa, Resultado, Adición',
    level: 'B1',
    cefrLevel: 3,
    category: 'discourse',
    priority: 'high',
    prerequisiteIds: ['a1-present-simple'],
    explanation: 'Linking words connect ideas and show relationships between clauses. Four main types: Addition (also, moreover, furthermore) adds information. Contrast (however, although, despite, in spite of) shows opposition. Cause (because, since, due to, as) explains reasons. Result (so, therefore, consequently, as a result) shows consequences. Position and punctuation matter: "although" needs a clause; "despite" needs a noun or gerund. "However" needs a semicolon or period before it.',
    explanationEs: 'Los conectores unen ideas y muestran relaciones entre cláusulas. Cuatro tipos principales: Adición (also, moreover, furthermore) añade información. Contraste (however, although, despite, in spite of) muestra oposición. Causa (because, since, due to, as) explica razones. Resultado (so, therefore, consequently, as a result) muestra consecuencias. La posición y la puntuación importan: "although" necesita una cláusula; "despite" necesita sustantivo o gerundio. "However" necesita punto y coma o punto antes.',
    formationRules: [
      {
        label: 'Addition',
        labelEs: 'Adición',
        formula: 'also, moreover, furthermore — add information',
        steps: [
          { step: '"Also" usually goes before the main verb or at the start of a clause', stepEs: '"Also" suele ir antes del verbo principal o al inicio de la cláusula', example: 'She speaks English. She also speaks French. / She is kind. Also, she is very intelligent.', translation: 'Ella habla inglés. También habla francés. / Es amable. Además, es muy inteligente.' },
          { step: '"Moreover" and "furthermore" start a new sentence (formal)', stepEs: '"Moreover" y "furthermore" inician una nueva oración (formal)', example: 'The hotel was cheap. Moreover, it was very clean.', translation: 'El hotel era barato. Además, estaba muy limpio.' },
        ]
      },
      {
        label: 'Contrast',
        labelEs: 'Contraste',
        formula: 'however / although / despite / in spite of',
        steps: [
          { step: '"However" = starts new sentence. Needs semicolon (;) or period (.) before it', stepEs: '"However" = inicia nueva oración. Necesita punto y coma o punto antes', example: 'I was tired. However, I went to the party. / I was tired; however, I went.', translation: 'Estaba cansado. Sin embargo, fui a la fiesta.' },
          { step: '"Although" + clause (subject + verb). Can start the sentence or go in the middle', stepEs: '"Although" + cláusula (sujeto + verbo). Puede iniciar la oración o ir en medio', example: 'Although it was raining, we went out. / We went out although it was raining.', translation: 'Aunque llovía, salimos.' },
          { step: '"Despite" / "In spite of" + noun or gerund (NOT a clause)', stepEs: '"Despite" / "In spite of" + sustantivo o gerundio (NO una cláusula)', example: 'Despite the rain, we went out. / In spite of feeling tired, she continued.', translation: 'A pesar de la lluvia, salimos. / A pesar de sentirse cansada, continuó.' },
        ]
      },
      {
        label: 'Cause',
        labelEs: 'Causa',
        formula: 'because, since, due to, as',
        steps: [
          { step: '"Because" + clause. Most common for cause', stepEs: '"Because" + cláusula. El más común para causa', example: 'I stayed home because I was ill.', translation: 'Me quedé en casa porque estaba enfermo.' },
          { step: '"Since" and "as" can start the sentence (more formal)', stepEs: '"Since" y "as" pueden iniciar la oración (más formal)', example: 'Since you are here, let\'s start. / As it was late, we left.', translation: 'Ya que estás aquí, empecemos. / Como era tarde, nos fuimos.' },
          { step: '"Due to" + noun (not clause). "Due to the rain"', stepEs: '"Due to" + sustantivo (no cláusula)', example: 'The match was cancelled due to the rain.', translation: 'El partido se canceló debido a la lluvia.' },
        ]
      },
      {
        label: 'Result',
        labelEs: 'Resultado',
        formula: 'so, therefore, consequently, as a result',
        steps: [
          { step: '"So" + clause. Informal and common', stepEs: '"So" + cláusula. Informal y común', example: 'I was tired, so I went to bed early.', translation: 'Estaba cansado, así que me acosté temprano.' },
          { step: '"Therefore", "consequently", "as a result" — start new sentence or after semicolon (formal)', stepEs: 'Inician nueva oración o van después de punto y coma (formal)', example: 'He failed the exam. Therefore, he had to retake it.', translation: 'Suspende el examen. Por tanto, tuvo que repetirlo.' },
        ]
      }
    ],
    signalWords: [
      { word: 'also', meaning: 'addition — before verb or start of clause', meaningEs: 'adición — antes del verbo o al inicio' },
      { word: 'moreover / furthermore', meaning: 'addition — start of new sentence', meaningEs: 'adición — inicio de nueva oración' },
      { word: 'however', meaning: 'contrast — needs ; or . before it', meaningEs: 'contraste — necesita ; o . antes' },
      { word: 'although', meaning: 'contrast — + clause', meaningEs: 'contraste — + cláusula' },
      { word: 'despite / in spite of', meaning: 'contrast — + noun/gerund', meaningEs: 'contraste — + sustantivo/gerundio' },
      { word: 'because / since / as', meaning: 'cause — + clause', meaningEs: 'causa — + cláusula' },
      { word: 'due to', meaning: 'cause — + noun', meaningEs: 'causa — + sustantivo' },
      { word: 'so / therefore / consequently', meaning: 'result', meaningEs: 'resultado' },
    ],
    l1Contrast: {
      concept: 'Spanish connectors vs English — variety required',
      conceptEs: 'Conectores en español vs inglés — se requiere variedad',
      spanishBehavior: 'Spanish "sin embargo" = however, "aunque" = although, "debido a" = due to. Spanish speakers often use "pero" (but) for everything when speaking English.',
      englishBehavior: 'English requires variety. Using "but" for all contrast sounds repetitive. "However" (sentence connector) vs "although" (subordinator) have different structures. "Despite" and "although" are NOT interchangeable: despite + noun, although + clause.',
      contrastExamples: [
        { english: 'However, I decided to go. (new sentence)', spanish: 'Sin embargo, decidí ir.', note: 'Same idea. "However" needs comma after.' },
        { english: 'Although it was expensive, I bought it.', spanish: 'Aunque era caro, lo compré.', note: 'Although + clause. Direct equivalent.' },
        { english: 'Despite the cost, I bought it.', spanish: 'A pesar del costo, lo compré.', note: 'Despite + noun. NOT "despite it was expensive".' },
      ]
    },
    predictedErrors: [
      { error: 'Despite of the rain, we went out.', correction: 'Despite the rain, we went out. / In spite of the rain, we went out.', whyEs: '"Despite" NO lleva "of". Solo "in spite of" lleva "of".', frequency: 'very common' },
      { error: 'Although it was raining, but we went out.', correction: 'Although it was raining, we went out. / It was raining, but we went out.', whyEs: 'No combines "although" con "but". Usa uno u otro. "Although" ya expresa contraste.', frequency: 'very common' },
      { error: 'In despite of the weather...', correction: 'In spite of the weather... / Despite the weather...', whyEs: 'La forma correcta es "in spite of" o "despite" (sin "in"). No existe "in despite of".', frequency: 'common' },
      { error: 'I was tired however I went to the party.', correction: 'I was tired. However, I went to the party. / I was tired; however, I went.', whyEs: '"However" conecta oraciones. Necesita punto, punto y coma o punto y coma antes, y coma después.', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ the rain, we decided to go for a walk.', question: 'Choose: despite or although? (rain = noun)', options: ['Despite', 'Although', 'Despite of', 'In despite of'], correct: 0, explanationEs: '"Despite" + sustantivo ("the rain"). "Although" necesitaría una cláusula.' },
        { sentence: '_____ it was raining, we went out.', question: 'Choose the correct connector for a clause:', options: ['Although', 'Despite', 'In spite of', 'Despite of'], correct: 0, explanationEs: 'Cláusula (it was raining) → "although". "Despite" va con sustantivo.' },
        { sentence: 'I was very tired. _____, I went to the party.', question: 'Contrast connector starting a new sentence:', options: ['However', 'But', 'Although', 'Despite'], correct: 0, explanationEs: 'Inicio de nueva oración con contraste → "However" (con coma después).' },
        { sentence: 'The match was cancelled _____ the bad weather.', question: 'Cause with a noun phrase:', options: ['due to', 'because', 'since', 'although'], correct: 0, explanationEs: '"Due to" + sustantivo ("the bad weather"). "Because" y "since" van con cláusulas.' },
        { sentence: 'She studied hard. _____, she passed the exam.', question: 'Result connector (formal):', options: ['Therefore', 'But', 'Although', 'Because'], correct: 0, explanationEs: '"Therefore" introduce resultado/consecuencia. Va al inicio de la nueva oración.' },
        { sentence: 'I love coffee. _____, I don\'t drink it at night.', question: 'Addition connector for extra information:', options: ['Also', 'Moreover', 'However', 'Because'], correct: 2, explanationEs: 'Aquí hay contraste (amo el café PERO no lo tomo de noche). "However" es correcto.' },
      ],
      controlled: [
        { prompt: 'Correct: Despite of the traffic, I arrived on time.', promptEs: 'Corrige: A pesar del tráfico, llegué a tiempo.', answer: 'Despite the traffic, I arrived on time.', hint: 'Despite has no "of"' },
        { prompt: 'Complete: _____ (although/despite) she was tired, she finished the race.', promptEs: 'Completa con although o despite: _____ estaba cansada, terminó la carrera.', answer: 'Although she was tired, she finished the race.', hint: 'Clause (subject + verb) → although' },
        { prompt: 'Combine: It was expensive. I bought it. (use "however")', promptEs: 'Combina: Era caro. Lo compré. (usa "however")', answer: 'It was expensive. However, I bought it.', hint: 'However starts new sentence; comma after' },
        { prompt: 'Complete: The flight was delayed _____ (due to/because) the storm.', promptEs: 'Completa: El vuelo se retrasó _____ la tormenta.', answer: 'The flight was delayed due to the storm.', hint: 'Noun phrase → due to' },
        { prompt: 'Correct: Although it was late, but we continued working.', promptEs: 'Corrige: Aunque era tarde, pero seguimos trabajando.', answer: 'Although it was late, we continued working.', hint: 'Never use although + but together' },
      ]
    },
    recycleInTopics: ['c1-advanced-linking-devices'],
    tipEs: '💡 Truco: ¿Sustantivo o gerundio? → "despite" / "in spite of". ¿Sujeto + verbo (cláusula)? → "although". Y recuerda: "despite" sin "of"; "in spite of" con "of". Nunca "although" + "but" juntos.'
  },

  // ═══════════════════════════════════════════════
  // B1 — MODULE: Modals of Obligation (Must/Have to/Should across tenses)
  // ═══════════════════════════════════════════════
  {
    id: 'b1-modals-obligation',
    title: 'Must, Have to, Should — Past, Present and Future',
    titleEs: 'Must, Have to, Should — Pasado, Presente y Futuro',
    level: 'B1',
    cefrLevel: 3,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['a2-must-have-to-should', 'a2-can-could-modals'],
    explanation: 'This module extends A2 knowledge of must, have to, and should to past and future. Past obligation: "had to" (must has NO past form — use "had to"). Future: "will have to", "won\'t have to". Perfect modal: "should have + past participle" = it was a good idea but you didn\'t do it (advice or regret about the past). Critical: "must" cannot be used in the past — there is no "musted".',
    explanationEs: 'Este módulo amplía el conocimiento A2 de must, have to y should al pasado y futuro. Obligación pasada: "had to" (must NO tiene forma pasada — usa "had to"). Futuro: "will have to", "won\'t have to". Modal perfecto: "should have + participio" = era buena idea pero no lo hiciste (consejo o arrepentimiento sobre el pasado). Crítico: "must" no puede usarse en pasado — no existe "musted".',
    formationRules: [
      {
        label: 'Past obligation',
        labelEs: 'Obligación pasada',
        formula: 'had to / didn\'t have to / should have + past participle',
        steps: [
          { step: '"Had to" = past obligation (replaces "must" — there is no "musted")', stepEs: '"Had to" = obligación pasada (reemplaza a "must" — no existe "musted")', example: 'I had to work yesterday. She had to leave early.', translation: 'Tuve que trabajar ayer. Ella tuvo que irse temprano.' },
          { step: '"Didn\'t have to" = no obligation in the past', stepEs: '"Didn\'t have to" = no había obligación en el pasado', example: "I didn't have to go to the meeting.", translation: 'No tuve que ir a la reunión.' },
          { step: '"Should have + pp" = regret or advice about the past (you didn\'t do it)', stepEs: '"Should have + pp" = arrepentimiento o consejo sobre el pasado (no lo hiciste)', example: "I should have studied harder. You should have told me.", translation: 'Debería haber estudiado más. Deberías haberme dicho.' },
        ]
      },
      {
        label: 'Future obligation',
        labelEs: 'Obligación futura',
        formula: 'will have to / won\'t have to',
        steps: [
          { step: '"Will have to" = future obligation', stepEs: '"Will have to" = obligación futura', example: 'I will have to work tomorrow. / I\'ll have to call her.', translation: 'Tendré que trabajar mañana. Tendré que llamarla.' },
          { step: '"Won\'t have to" = no future obligation', stepEs: '"Won\'t have to" = no habrá obligación', example: "You won't have to pay. We won't have to wait.", translation: 'No tendrás que pagar. No tendremos que esperar.' },
        ]
      },
      {
        label: 'Perfect modal: should have done',
        labelEs: 'Modal perfecto: should have done',
        formula: 'should have + past participle = regret / past advice',
        steps: [
          { step: 'Use when: it was a good idea but you didn\'t do it', stepEs: 'Usa cuando: era buena idea pero no lo hiciste', example: "I should have left earlier. (I didn't — now I'm late)", translation: 'Debería haber salido antes. (No lo hice — ahora llego tarde)' },
          { step: 'Negative: shouldn\'t have + pp = you did it but it was wrong', stepEs: 'Negativo: shouldn\'t have + pp = lo hiciste pero estuvo mal', example: "You shouldn't have said that. (You did say it — it was a mistake)", translation: 'No deberías haber dicho eso.' },
        ]
      }
    ],
    signalWords: [
      { word: 'had to', meaning: 'past obligation (replaces must)', meaningEs: 'obligación pasada (reemplaza a must)' },
      { word: "didn't have to", meaning: 'no past obligation', meaningEs: 'no había obligación en el pasado' },
      { word: 'will have to', meaning: 'future obligation', meaningEs: 'obligación futura' },
      { word: 'should have + pp', meaning: 'regret / past advice not followed', meaningEs: 'arrepentimiento / consejo pasado no seguido' },
    ],
    l1Contrast: {
      concept: 'Spanish "debería haber" and "tuve que"',
      conceptEs: 'Español "debería haber" y "tuve que"',
      spanishBehavior: 'Spanish "debería haber + participio" = should have + pp. "Tuve que" = had to. The structure is similar. However, English has no past form for "must" — you must use "had to".',
      englishBehavior: 'English "must" has NO past form. Never say "musted" or "I must go yesterday". Use "had to". "Should have done" is distinct from "must have done" (deduction) — don\'t mix them.',
      contrastExamples: [
        { english: 'I had to leave early yesterday.', spanish: 'Tuve que irme temprano ayer.', note: 'Direct equivalent. "Had to" = past of must/have to.' },
        { english: 'I should have called you. (I didn\'t)', spanish: 'Debería haberte llamado.', note: 'Same meaning: regret about not doing something.' },
        { english: 'I musted go. (WRONG)', spanish: 'Tuve que ir.', note: '"Musted" does not exist. Use "had to".' },
      ]
    },
    predictedErrors: [
      { error: 'I musted go to the doctor yesterday.', correction: 'I had to go to the doctor yesterday.', whyEs: '"Must" NO tiene pasado. Siempre usa "had to" para obligación pasada.', frequency: 'very common' },
      { error: 'She should has gone to the party.', correction: 'She should have gone to the party.', whyEs: 'Después de "should" va "have" (no "has"). La estructura es: should have + participio.', frequency: 'very common' },
      { error: 'I must to go yesterday.', correction: 'I had to go yesterday.', whyEs: 'Doble error: "must" no lleva "to", y "must" no tiene forma pasada. Usa "had to".', frequency: 'common' },
      { error: 'I should have must go. (mixing should have with must)', correction: 'I should have gone. / I had to go.', whyEs: 'No mezcles "should have" con "must". "Should have" + participio = arrepentimiento. "Had to" = obligación pasada.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'I _____ go to the meeting yesterday. (obligation)', question: 'Past obligation — correct form:', options: ['had to', 'must', 'musted', 'have to'], correct: 0, explanationEs: 'Obligación pasada → "had to". "Must" no tiene forma pasada.' },
        { sentence: 'She _____ have told me the truth. (regret — she didn\'t tell me)', question: 'Regret about the past:', options: ['should', 'must', 'had to', 'should has'], correct: 0, explanationEs: '"Should have + pp" = arrepentimiento. Ella no me lo dijo — debería haberlo hecho.' },
        { sentence: 'We _____ work next Saturday. (future obligation)', question: 'Future obligation:', options: ['will have to', 'must', 'have to', 'had to'], correct: 0, explanationEs: 'Obligación futura → "will have to".' },
        { sentence: 'You _____ have said that. (you said it — it was wrong)', question: 'Criticism about something done:', options: ["shouldn't", "mustn't", "didn't have to", "hadn't to"], correct: 0, explanationEs: '"Shouldn\'t have + pp" = no deberías haberlo hecho (pero lo hiciste).' },
        { sentence: 'He _____ to leave early yesterday.', question: 'Correct past form of "have to":', options: ['had', 'must', 'has', 'musted'], correct: 0, explanationEs: 'Pasado de "have to" = "had to".' },
        { sentence: 'I _____ have gone to the party. I regret it now.', question: 'Regret — I didn\'t go:', options: ['should', 'must', 'had to', 'would'], correct: 0, explanationEs: '"Should have gone" = debería haber ido (pero no fui).' },
      ],
      controlled: [
        { prompt: 'Correct: I musted work last weekend.', promptEs: 'Corrige: Tuve que trabajar el fin de semana pasado.', answer: 'I had to work last weekend.', hint: 'Must has no past form' },
        { prompt: 'Complete: She _____ (should have) called me. (regret)', promptEs: 'Completa: Ella _____ haberme llamado. (arrepentimiento)', answer: 'She should have called me.', hint: 'should have + past participle' },
        { prompt: 'Complete: We _____ (future obligation) finish this by Friday.', promptEs: 'Completa: _____ (obligación futura) terminar esto para el viernes.', answer: 'We will have to finish this by Friday.', hint: 'will have to' },
        { prompt: 'Correct: You should has studied more.', promptEs: 'Corrige: Deberías haber estudiado más.', answer: 'You should have studied more.', hint: 'should have, not should has' },
        { prompt: 'Complete: I _____ (no obligation) go to the office yesterday.', promptEs: 'Completa: No _____ ir a la oficina ayer.', answer: "I didn't have to go to the office yesterday.", hint: 'No past obligation = didn\'t have to' },
      ]
    },
    recycleInTopics: ['b1-modal-deduction', 'b2-conditionals-all'],
    tipEs: '💡 Truco clave: "must" NO tiene pasado. Si quieres decir "tuve que", usa SIEMPRE "had to". Y "should have + participio" = arrepentimiento (era buena idea pero no lo hice). "Should" + "has" NUNCA — siempre "should have".'
  },

  // ═══════════════════════════════════════════════
  // B2 — MODULE: Future Perfect
  // ═══════════════════════════════════════════════
  {
    id: 'b2-future-perfect',
    title: 'Future Perfect: Will have + Past Participle',
    titleEs: 'Futuro Perfecto: Will have + Participio Pasado',
    level: 'B2',
    cefrLevel: 4,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['b1-present-perfect-vs-past-simple'],
    explanation: 'The Future Perfect is used to talk about actions that will be completed before a specific point in the future. It is formed with "will have" + past participle. It often answers the question "What will have happened by then?"',
    explanationEs: 'El Futuro Perfecto se usa para hablar de acciones que estarán completadas antes de un momento específico en el futuro. Se forma con "will have" + participio pasado. A menudo responde a la pregunta "¿Qué habrá pasado para entonces?"',
    formationRules: [
      {
        label: 'Affirmative',
        labelEs: 'Afirmativo',
        formula: 'Subject + will have + past participle',
        steps: [
          { step: 'Choose your subject', stepEs: 'Elige el sujeto', example: 'By next year, she will have graduated.', translation: 'Para el próximo año, ella se habrá graduado.' },
          { step: 'Add "will have" + past participle of the main verb', stepEs: 'Añade "will have" + participio pasado del verbo principal', example: 'They will have finished the project by Friday.', translation: 'Habrán terminado el proyecto para el viernes.' },
          { step: 'Include a future time marker (by, before, by the time)', stepEs: 'Incluye un marcador temporal futuro (by, before, by the time)', example: 'By the time you arrive, I will have cooked dinner.', translation: 'Para cuando llegues, habré preparado la cena.' },
        ]
      },
      {
        label: 'Negative & Questions',
        labelEs: 'Negativo y Preguntas',
        formula: 'Subject + will not have + past participle / Will + subject + have + past participle?',
        steps: [
          { step: 'Negative: add "not" after "will"', stepEs: 'Negativo: añade "not" después de "will"', example: 'I won\'t have finished by 5 PM.', translation: 'No habré terminado para las 5 PM.' },
          { step: 'Question: invert "will" and the subject', stepEs: 'Pregunta: invierte "will" y el sujeto', example: 'Will you have left by then?', translation: '¿Te habrás ido para entonces?' },
        ]
      }
    ],
    signalWords: [
      { word: 'by (the time)', meaning: 'before or at a specific point', meaningEs: 'para (cuando) / antes de' },
      { word: 'by next…', meaning: 'before the next period', meaningEs: 'para el próximo…' },
      { word: 'before', meaning: 'earlier than a point in time', meaningEs: 'antes de' },
      { word: 'in X years', meaning: 'within a number of years from now', meaningEs: 'en X años' },
    ],
    l1Contrast: {
      concept: 'Future Perfect usage frequency',
      conceptEs: 'Frecuencia de uso del Futuro Perfecto',
      spanishBehavior: 'Spanish has "habré + participio" (e.g., "habré terminado") but speakers often avoid it, preferring simpler constructions like the present or "ya" + present perfect.',
      englishBehavior: 'English uses the Future Perfect regularly with "by" time expressions. It is a natural and common tense in formal and informal English to talk about completion before a future deadline.',
      contrastExamples: [
        { english: 'By next year, I will have saved enough money.', spanish: 'Para el próximo año, habré ahorrado suficiente dinero.', note: 'Direct equivalent exists but Spanish speakers tend to say "ya tendré suficiente dinero" instead.' },
        { english: 'She will have left by the time we arrive.', spanish: 'Ella ya se habrá ido cuando lleguemos.', note: 'Spanish often adds "ya" for emphasis; English relies on the tense itself.' },
      ]
    },
    predictedErrors: [
      { error: 'By next year I will finish my degree.', correction: 'By next year I will have finished my degree.', whyEs: 'Con "by next year" necesitas el Futuro Perfecto ("will have finished"), no el futuro simple, porque hablas de algo completado ANTES de ese momento.', frequency: 'very common' },
      { error: 'I will have went to three countries by December.', correction: 'I will have gone to three countries by December.', whyEs: '"Went" es el pasado simple. Después de "will have" se usa el PARTICIPIO PASADO: "gone" (no "went").', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'By the end of this month, she _____ all her exams.', question: 'Choose the correct Future Perfect form.', options: ['will finish', 'will have finished', 'is finishing', 'has finished'], correct: 1, explanationEs: '"By the end of this month" indica un punto futuro. Necesitamos el Futuro Perfecto: "will have finished".' },
        { sentence: 'They _____ the house by the time we get there.', question: 'Select the correct tense.', options: ['will have left', 'will leave', 'are leaving', 'left'], correct: 0, explanationEs: '"By the time we get there" señala un momento futuro antes del cual la acción se completará. Se usa "will have left".' },
        { sentence: 'By next year, I _____ (graduate) from university.', question: 'Completion before a future point:', options: ['will graduate', 'will have graduated', 'graduate', 'graduated'], correct: 1, explanationEs: '"By next year" → Futuro Perfecto. La acción estará completada antes de ese momento.' },
        { sentence: '_____ you _____ (finish) the report by 5 PM?', question: 'Future Perfect question form:', options: ['Will / have finished', 'Do / finish', 'Have / finished', 'Are / finishing'], correct: 0, explanationEs: 'Pregunta en Futuro Perfecto: Will + subject + have + past participle.' },
        { sentence: 'She _____ (not/arrive) by the time the meeting starts.', question: 'Negative Future Perfect:', options: ['won\'t arrive', 'won\'t have arrived', 'will not arrive', 'hasn\'t arrived'], correct: 1, explanationEs: 'Negativo: won\'t have + participio. "By the time" indica punto futuro.' },
      ],
      controlled: [
        { prompt: 'Complete: By 2030, scientists _____ (discover) a cure.', promptEs: 'Completa: Para 2030, los científicos _____ (descubrir) una cura.', answer: 'By 2030, scientists will have discovered a cure.', hint: 'will have + past participle of "discover"' },
        { prompt: 'Complete: I _____ (not/read) the whole book by tomorrow.', promptEs: 'Completa: No _____ (leer) todo el libro para mañana.', answer: 'I won\'t have read the whole book by tomorrow.', hint: 'won\'t have + past participle of "read"' },
        { prompt: 'Complete: By the time you arrive, I _____ (cook) dinner.', promptEs: 'Completa: Para cuando llegues, habré preparado la cena.', answer: 'By the time you arrive, I will have cooked dinner.', hint: 'will have + past participle' },
        { prompt: 'Correct: "By next year I will finish my degree."', promptEs: 'Corrige: Para el próximo año habré terminado mi carrera.', answer: 'By next year I will have finished my degree.', hint: 'By + future point → Future Perfect' },
        { prompt: 'Complete: They _____ (move) to the new house by June.', promptEs: 'Completa: Se habrán mudado a la nueva casa para junio.', answer: 'They will have moved to the new house by June.', hint: 'will have + past participle of "move"' },
      ]
    },
    recycleInTopics: ['b2-future-continuous', 'b1-present-perfect-vs-past-simple', 'b2-advanced-tense-review'],
    tipEs: '💡 Piensa en el Futuro Perfecto como "mirar hacia atrás desde el futuro". Imagínate en diciembre y miras atrás: ¿qué habrás completado? → "By December, I will have finished my course." Siempre busca las pistas: BY, BEFORE, BY THE TIME.'
  },

  // ═══════════════════════════════════════════════
  // B2 — MODULE: Future Continuous
  // ═══════════════════════════════════════════════
  {
    id: 'b2-future-continuous',
    title: 'Future Continuous: Will be + -ing',
    titleEs: 'Futuro Continuo: Will be + -ing',
    level: 'B2',
    cefrLevel: 4,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['a2-going-to-vs-will'],
    explanation: 'The Future Continuous describes actions that will be in progress at a specific time in the future. It is also used for planned or expected future events, and in polite/tentative questions. It is formed with "will be" + verb-ing.',
    explanationEs: 'El Futuro Continuo describe acciones que estarán en progreso en un momento específico del futuro. También se usa para eventos futuros planeados o esperados, y para preguntas corteses o tentativas. Se forma con "will be" + verbo-ing.',
    formationRules: [
      {
        label: 'Affirmative',
        labelEs: 'Afirmativo',
        formula: 'Subject + will be + verb-ing',
        steps: [
          { step: 'Choose the subject', stepEs: 'Elige el sujeto', example: 'This time tomorrow, I will be flying to London.', translation: 'Mañana a estas horas, estaré volando a Londres.' },
          { step: 'Add "will be" + the -ing form of the main verb', stepEs: 'Añade "will be" + la forma -ing del verbo principal', example: 'At 8 PM tonight, they will be having dinner.', translation: 'A las 8 PM esta noche, estarán cenando.' },
        ]
      },
      {
        label: 'Negative, Questions & Polite Use',
        labelEs: 'Negativo, Preguntas y Uso Cortés',
        formula: 'Will + subject + be + verb-ing? / Subject + won\'t be + verb-ing',
        steps: [
          { step: 'Negative: add "not" after "will"', stepEs: 'Negativo: añade "not" después de "will"', example: 'I won\'t be working this weekend.', translation: 'No estaré trabajando este fin de semana.' },
          { step: 'Question: invert "will" and subject', stepEs: 'Pregunta: invierte "will" y el sujeto', example: 'Will you be using the car tonight?', translation: '¿Estarás usando el coche esta noche?' },
          { step: 'Polite/tentative: use in questions for polite inquiries', stepEs: 'Cortés/tentativo: usa en preguntas para consultas educadas', example: 'Will you be needing anything else?', translation: '¿Necesitará algo más?' },
        ]
      }
    ],
    signalWords: [
      { word: 'this time tomorrow', meaning: 'at this exact time the next day', meaningEs: 'mañana a estas horas' },
      { word: 'at + specific time', meaning: 'at a particular clock time', meaningEs: 'a las + hora específica' },
      { word: 'all day/week/morning', meaning: 'throughout the entire period', meaningEs: 'todo el día/semana/mañana' },
      { word: 'still', meaning: 'continuing an action', meaningEs: 'todavía / aún' },
    ],
    l1Contrast: {
      concept: 'Polite/tentative use of Future Continuous',
      conceptEs: 'Uso cortés/tentativo del Futuro Continuo',
      spanishBehavior: 'Spanish "estaré + gerundio" exists for actions in progress ("estaré trabajando") but is NOT used for polite or tentative questions. Spanish uses conditional ("¿necesitaría algo más?") for politeness.',
      englishBehavior: 'English uses Future Continuous both for actions in progress at a future time AND for polite/tentative questions: "Will you be needing anything else?" sounds softer and more polite than "Do you need anything else?"',
      contrastExamples: [
        { english: 'Will you be joining us for dinner?', spanish: '¿Vas a venir a cenar con nosotros?', note: 'English Future Continuous adds politeness; Spanish uses a simple "ir a + infinitivo" or conditional.' },
        { english: 'This time next week, I\'ll be lying on a beach.', spanish: 'La próxima semana a estas horas, estaré tumbado en la playa.', note: 'Direct structural parallel here — both languages express an action in progress in the future.' },
      ]
    },
    predictedErrors: [
      { error: 'This time tomorrow I will sit on a plane.', correction: 'This time tomorrow I will be sitting on a plane.', whyEs: '"This time tomorrow" indica un momento específico en el futuro → la acción estará EN PROGRESO, así que necesitas "will be sitting" (Futuro Continuo).', frequency: 'very common' },
      { error: 'At 5 PM I will be work.', correction: 'At 5 PM I will be working.', whyEs: 'Después de "will be" se necesita la forma -ING del verbo: "working" (no la forma base "work").', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'At 10 AM tomorrow, I _____ a meeting with my boss.', question: 'Choose the correct Future Continuous form.', options: ['will have', 'will be having', 'am having', 'have'], correct: 1, explanationEs: '"At 10 AM tomorrow" señala un momento específico en el futuro. La acción estará en progreso → "will be having".' },
        { sentence: '_____ you _____ the report this afternoon?', question: 'Complete the polite Future Continuous question.', options: ['Will … be finishing', 'Do … finish', 'Are … finishing', 'Have … finished'], correct: 0, explanationEs: 'Una pregunta cortés sobre planes futuros usa el Futuro Continuo: "Will you be finishing…?"' },
        { sentence: 'This time tomorrow, I _____ on a plane to New York.', question: 'Action in progress at a specific future time:', options: ['will sit', 'will be sitting', 'sit', 'am sitting'], correct: 1, explanationEs: '"This time tomorrow" = momento exacto. La acción estará en progreso → "will be sitting".' },
        { sentence: 'At 8 PM tonight, they _____ dinner.', question: 'Future Continuous: action in progress:', options: ['will have', 'will be having', 'have', 'are having'], correct: 1, explanationEs: '"At 8 PM tonight" = momento específico. "Will be having" = estarán cenando en ese instante.' },
        { sentence: '_____ you _____ (use) the car tonight? (polite question)', question: 'Polite Future Continuous:', options: ['Will … be using', 'Do … use', 'Are … using', 'Have … used'], correct: 0, explanationEs: 'Pregunta cortés sobre planes futuros: "Will you be using...?" suena más educado que "Will you use...?"' },
      ],
      controlled: [
        { prompt: 'Complete: Don\'t call me at 9. I _____ (sleep).', promptEs: 'Completa: No me llames a las 9. Estaré _____ (dormir).', answer: 'Don\'t call me at 9. I will be sleeping.', hint: 'will be + -ing form of "sleep"' },
        { prompt: 'Complete: This time next week, I _____ (lie) on a beach.', promptEs: 'Completa: La próxima semana a estas horas estaré _____ (tumbado) en la playa.', answer: 'This time next week, I will be lying on a beach.', hint: 'will be + -ing' },
        { prompt: 'Correct: "This time tomorrow I will sit on a plane."', promptEs: 'Corrige: Mañana a estas horas estaré sentado en un avión.', answer: 'This time tomorrow I will be sitting on a plane.', hint: 'Action in progress → will be + -ing' },
        { prompt: 'Complete: At 8 PM tonight, she _____ (work) late.', promptEs: 'Completa: A las 8 esta noche estará trabajando hasta tarde.', answer: 'At 8 PM tonight, she will be working late.', hint: 'will be + verb-ing' },
        { prompt: 'Make a polite question: "Will you need anything else?"', promptEs: 'Haz una pregunta cortés: ¿Necesitará algo más?', answer: 'Will you be needing anything else?', hint: 'Polite Future Continuous: will be + -ing' },
      ]
    },
    recycleInTopics: ['b2-future-perfect', 'a2-going-to-vs-will', 'b2-future-forms-review'],
    tipEs: '💡 El Futuro Continuo es como "una foto del futuro": imagina un momento exacto (mañana a las 3, el lunes por la noche…) y describe qué estará PASANDO en ese instante. Truco extra: si quieres sonar más educado en inglés, usa "Will you be + -ing?" en vez de "Will you + base verb?"'
  },

  // ═══════════════════════════════════════════════
  // B2 — MODULE: Causative Have/Get
  // ═══════════════════════════════════════════════
  {
    id: 'b2-causative-have-get',
    title: 'Causative: Have/Get Something Done',
    titleEs: 'Causativo: Have/Get Something Done',
    level: 'B2',
    cefrLevel: 4,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['b1-passive-voice'],
    explanation: 'The causative is used when someone else performs an action for you, often a professional service. The structure is "have/get + object + past participle". "Have something done" is neutral; "get something done" is slightly more informal.',
    explanationEs: 'El causativo se usa cuando otra persona realiza una acción por ti, a menudo un servicio profesional. La estructura es "have/get + objeto + participio pasado". "Have something done" es neutro; "get something done" es ligeramente más informal.',
    formationRules: [
      {
        label: 'Causative with "have"',
        labelEs: 'Causativo con "have"',
        formula: 'Subject + have + object + past participle',
        steps: [
          { step: 'Identify the subject (the person who arranges the action)', stepEs: 'Identifica el sujeto (la persona que encarga la acción)', example: 'I had my car repaired.', translation: 'Hice reparar mi coche. (= Alguien lo reparó por mí.)' },
          { step: 'Use "have" in the appropriate tense + object + past participle', stepEs: 'Usa "have" en el tiempo adecuado + objeto + participio pasado', example: 'She has her nails done every week.', translation: 'Ella se hace las uñas cada semana.' },
          { step: 'Change the tense of "have" to match the time frame', stepEs: 'Cambia el tiempo de "have" según el marco temporal', example: 'We are having the house painted next week.', translation: 'Nos van a pintar la casa la próxima semana.' },
        ]
      },
      {
        label: 'Causative with "get"',
        labelEs: 'Causativo con "get"',
        formula: 'Subject + get + object + past participle',
        steps: [
          { step: 'Use "get" instead of "have" for informal contexts', stepEs: 'Usa "get" en lugar de "have" para contextos informales', example: 'I got my phone fixed yesterday.', translation: 'Me arreglaron el teléfono ayer.' },
          { step: '"Get" can also imply effort or difficulty', stepEs: '"Get" también puede implicar esfuerzo o dificultad', example: 'I finally got the document signed.', translation: 'Finalmente conseguí que firmaran el documento.' },
        ]
      }
    ],
    signalWords: [
      { word: 'have … done', meaning: 'arrange for someone to do something', meaningEs: 'hacer que alguien haga algo (causativo)' },
      { word: 'get … done/fixed/repaired', meaning: 'arrange or manage for something to be done', meaningEs: 'conseguir/lograr que algo se haga' },
      { word: 'professionally', meaning: 'by a professional', meaningEs: 'profesionalmente / por un profesional' },
    ],
    l1Contrast: {
      concept: 'Causative structure',
      conceptEs: 'Estructura causativa',
      spanishBehavior: 'Spanish uses "mandar/hacer + infinitive" (e.g., "mandé reparar mi coche") or reflexive constructions ("me corté el pelo" — but this is ambiguous: did you cut it yourself or did someone else?). No past participle is needed.',
      englishBehavior: 'English uses "have/get + object + PAST PARTICIPLE". The past participle is essential. Without it, the meaning changes completely: "I cut my hair" = I did it myself; "I had my hair cut" = a hairdresser did it.',
      contrastExamples: [
        { english: 'I had my hair cut yesterday.', spanish: 'Me corté el pelo ayer. (= alguien me lo cortó)', note: 'In English, "I cut my hair" means YOU did it. "I had my hair cut" means a professional did it. Spanish is ambiguous.' },
        { english: 'We need to get the roof repaired.', spanish: 'Necesitamos mandar reparar el techo.', note: 'English uses past participle "repaired" after the object; Spanish uses infinitive "reparar" after "mandar".' },
      ]
    },
    predictedErrors: [
      { error: 'I cut my hair yesterday. (when a hairdresser did it)', correction: 'I had my hair cut yesterday.', whyEs: 'Si otra persona (un peluquero) te cortó el pelo, en inglés DEBES usar la estructura causativa: "have + object + past participle". Si dices "I cut my hair", significa que TÚ MISMO lo hiciste.', frequency: 'very common' },
      { error: 'I had repaired my car.', correction: 'I had my car repaired.', whyEs: 'El orden correcto es "had + OBJETO + participio pasado": "had my car repaired". "I had repaired my car" es pasado perfecto (= yo lo reparé), no causativo.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She _____ her dress _____ for the wedding.', question: 'Choose the correct causative form.', options: ['had … made', 'has … make', 'got … making', 'did … made'], correct: 0, explanationEs: 'Causativo: "had + objeto (her dress) + participio pasado (made)". Alguien le hizo el vestido para la boda.' },
        { sentence: 'We need to _____ the windows _____.', question: 'Complete the causative with "get".', options: ['get … cleaned', 'get … cleaning', 'get … clean', 'getting … cleaned'], correct: 0, explanationEs: 'Causativo con "get": "get + objeto (the windows) + participio pasado (cleaned)".' },
      ],
      controlled: [
        { prompt: 'Rewrite using causative: A mechanic serviced my car last week.', promptEs: 'Reescribe usando el causativo: Un mecánico revisó mi coche la semana pasada.', answer: 'I had my car serviced last week.', hint: 'had + object + past participle' },
        { prompt: 'Rewrite using "get": A technician is going to install the software.', promptEs: 'Reescribe usando "get": Un técnico va a instalar el software.', answer: 'I\'m going to get the software installed.', hint: 'get + object + past participle' },
      ]
    },
    recycleInTopics: ['b1-passive-voice', 'b2-advanced-passives', 'b2-formal-writing'],
    tipEs: '💡 La clave del causativo: NO haces la acción tú — otra persona la hace POR TI. Estructura infalible: HAVE/GET + OBJETO + PARTICIPIO PASADO. Ejemplo mental: "I had [my teeth] [checked]" = fui al dentista y ÉL revisó mis dientes. Si dices "I checked my teeth", ¡significa que tú mismo te miraste los dientes!'
  },

  // ═══════════════════════════════════════════════
  // B2 — MODULE: Emphasis with Cleft Sentences
  // ═══════════════════════════════════════════════
  {
    id: 'b2-emphasis-cleft-sentences',
    title: 'Emphasis with Cleft Sentences: It is/was... that/who',
    titleEs: 'Énfasis con Oraciones Escindidas: It is/was... that/who',
    level: 'B2',
    cefrLevel: 4,
    category: 'sentences',
    priority: 'medium',
    prerequisiteIds: [],
    explanation: 'Cleft sentences split a simple sentence into two clauses to emphasize one part. "It-clefts" use "It is/was + focus + that/who". "Wh-clefts" use "What + subject + verb + is/was + focus". They are common in both spoken and written English for emphasis and contrast.',
    explanationEs: 'Las oraciones escindidas (cleft sentences) dividen una oración simple en dos cláusulas para enfatizar una parte. Los "it-clefts" usan "It is/was + foco + that/who". Los "wh-clefts" usan "What + sujeto + verbo + is/was + foco". Son comunes tanto en inglés hablado como escrito para dar énfasis y contraste.',
    formationRules: [
      {
        label: 'It-cleft',
        labelEs: 'It-cleft (escindida con "It")',
        formula: 'It + is/was + focus element + that/who + rest of sentence',
        steps: [
          { step: 'Identify the element you want to emphasize', stepEs: 'Identifica el elemento que quieres enfatizar', example: 'John broke the window. → It was John who broke the window.', translation: 'Fue John quien rompió la ventana.' },
          { step: 'Place it after "It is/was" and add "that/who" + the rest', stepEs: 'Colócalo después de "It is/was" y añade "that/who" + el resto', example: 'She needs more time. → It is more time that she needs.', translation: 'Es más tiempo lo que ella necesita.' },
        ]
      },
      {
        label: 'Wh-cleft (pseudo-cleft)',
        labelEs: 'Wh-cleft (pseudo-escindida)',
        formula: 'What + subject + verb + is/was + focus element',
        steps: [
          { step: 'Start with "What" + the subject and verb', stepEs: 'Empieza con "What" + sujeto y verbo', example: 'I need a holiday. → What I need is a holiday.', translation: 'Lo que necesito es unas vacaciones.' },
          { step: 'End with "is/was" + the focused element', stepEs: 'Termina con "is/was" + el elemento enfatizado', example: 'She said something surprising. → What she said was something surprising.', translation: 'Lo que dijo fue algo sorprendente.' },
        ]
      }
    ],
    signalWords: [
      { word: 'It is/was … that', meaning: 'introduces emphasis on a specific element', meaningEs: 'introduce énfasis en un elemento específico' },
      { word: 'It is/was … who', meaning: 'emphasizes a person', meaningEs: 'enfatiza una persona' },
      { word: 'What … is/was', meaning: 'introduces a wh-cleft for emphasis', meaningEs: 'introduce un wh-cleft para dar énfasis' },
    ],
    l1Contrast: {
      concept: 'Emphasis strategies',
      conceptEs: 'Estrategias de énfasis',
      spanishBehavior: 'Spanish primarily relies on word order changes and stress/intonation for emphasis: "JUAN rompió la ventana" (stress on Juan), or moving the focused element: "Lo que necesito es tiempo". Spanish does have "es/fue… quien/que" but it is less rigid in structure.',
      englishBehavior: 'English has relatively fixed word order, so emphasis requires structural changes like cleft sentences: "It was JOHN who broke the window." Simply stressing a word is possible in speech but not in writing, making cleft sentences essential for written emphasis.',
      contrastExamples: [
        { english: 'It was the noise that woke me up.', spanish: 'Fue el ruido lo que me despertó.', note: 'Similar structure exists in Spanish, but English "It was … that" is more formulaic and rigid.' },
        { english: 'What I want is a clear answer.', spanish: 'Lo que quiero es una respuesta clara.', note: 'Wh-cleft has a close parallel in Spanish ("Lo que…"), making it easier to learn.' },
      ]
    },
    predictedErrors: [
      { error: 'What I need money is.', correction: 'What I need is money.', whyEs: 'En el wh-cleft, el orden es: "What + sujeto + verbo + IS/WAS + foco". El verbo "is" va ANTES del elemento enfatizado, no al final.', frequency: 'common' },
      { error: 'It was her that helped me. (very formal context)', correction: 'It was she who helped me.', whyEs: 'En contextos formales, se prefiere el pronombre sujeto "she" y "who" en lugar de "her" y "that". En contextos informales, "It was her that…" es aceptable.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ the manager _____ made the final decision.', question: 'Complete the it-cleft sentence.', options: ['It was … who', 'What was … that', 'There was … who', 'That was … which'], correct: 0, explanationEs: 'It-cleft para enfatizar una persona: "It was the manager who made the final decision."' },
        { sentence: '_____ bothers me _____ his attitude.', question: 'Complete the wh-cleft.', options: ['What … is', 'It … that', 'That … is', 'Which … was'], correct: 0, explanationEs: 'Wh-cleft: "What bothers me is his attitude." Estructura: What + sujeto + verbo + is + foco.' },
      ],
      controlled: [
        { prompt: 'Rewrite for emphasis on "the weather": The weather ruined our picnic.', promptEs: 'Reescribe enfatizando "the weather": El clima arruinó nuestro picnic.', answer: 'It was the weather that ruined our picnic.', hint: 'It was + focus + that + rest' },
      ]
    },
    recycleInTopics: ['b2-inversion-after-negatives', 'b2-formal-writing', 'b2-advanced-word-order'],
    tipEs: '💡 Las cleft sentences son tu herramienta de "foco" en inglés. Pregúntate: ¿qué quiero destacar? Si es una PERSONA → "It was [persona] WHO…". Si es una COSA/IDEA → "It was [cosa] THAT…". O empieza con "What": "What I really want is…" — ¡suena muy natural y enfático!'
  },

  // ═══════════════════════════════════════════════
  // B2 — MODULE: Inversion After Negative Adverbials
  // ═══════════════════════════════════════════════
  {
    id: 'b2-inversion-after-negatives',
    title: 'Inversion After Negative Adverbials',
    titleEs: 'Inversión Después de Adverbios Negativos',
    level: 'B2',
    cefrLevel: 4,
    category: 'sentences',
    priority: 'medium',
    prerequisiteIds: [],
    explanation: 'When a negative or restrictive adverbial is placed at the beginning of a sentence for emphasis, the subject and auxiliary verb are inverted (like a question). This structure is formal and emphatic. Common triggers include "never", "rarely", "seldom", "not only", "hardly", "no sooner", and "under no circumstances".',
    explanationEs: 'Cuando un adverbio negativo o restrictivo se coloca al principio de la oración para dar énfasis, el sujeto y el verbo auxiliar se invierten (como en una pregunta). Esta estructura es formal y enfática. Los desencadenantes comunes incluyen "never", "rarely", "seldom", "not only", "hardly", "no sooner" y "under no circumstances".',
    formationRules: [
      {
        label: 'Inversion after negative adverbials',
        labelEs: 'Inversión tras adverbios negativos',
        formula: 'Negative adverbial + auxiliary + subject + main verb',
        steps: [
          { step: 'Move the negative adverbial to the start of the sentence', stepEs: 'Mueve el adverbio negativo al inicio de la oración', example: 'I have never seen such beauty. → Never have I seen such beauty.', translation: 'Nunca he visto tal belleza.' },
          { step: 'Invert the auxiliary and subject (as in a question)', stepEs: 'Invierte el auxiliar y el sujeto (como en una pregunta)', example: 'She rarely goes out. → Rarely does she go out.', translation: 'Rara vez sale ella.' },
          { step: 'If there is no auxiliary, add "do/does/did"', stepEs: 'Si no hay auxiliar, añade "do/does/did"', example: 'He seldom complains. → Seldom does he complain.', translation: 'Pocas veces se queja.' },
        ]
      },
      {
        label: 'Not only … but also (with inversion)',
        labelEs: 'Not only … but also (con inversión)',
        formula: 'Not only + auxiliary + subject + verb, but (also) + clause',
        steps: [
          { step: 'Start with "Not only" and invert the first clause', stepEs: 'Empieza con "Not only" e invierte la primera cláusula', example: 'Not only did he apologize, but he also bought her flowers.', translation: 'No solo se disculpó, sino que también le compró flores.' },
          { step: 'The second clause ("but also") keeps normal word order', stepEs: 'La segunda cláusula ("but also") mantiene el orden normal', example: 'Not only was she late, but she had also forgotten the documents.', translation: 'No solo llegó tarde, sino que también había olvidado los documentos.' },
        ]
      }
    ],
    signalWords: [
      { word: 'never', meaning: 'at no time', meaningEs: 'nunca' },
      { word: 'rarely / seldom', meaning: 'almost never', meaningEs: 'rara vez / pocas veces' },
      { word: 'not only … but also', meaning: 'both … and (emphatic)', meaningEs: 'no solo … sino también' },
      { word: 'hardly / scarcely', meaning: 'almost not / barely', meaningEs: 'apenas' },
      { word: 'under no circumstances', meaning: 'in no situation whatsoever', meaningEs: 'bajo ninguna circunstancia' },
    ],
    l1Contrast: {
      concept: 'Subject-verb inversion',
      conceptEs: 'Inversión sujeto-verbo',
      spanishBehavior: 'Spanish inverts subject and verb naturally and frequently in many contexts: "Llegó María", "Nunca dijo nada". Inversion is common and does not carry a special formal register.',
      englishBehavior: 'English inversion is highly restricted. It normally occurs only in questions. When used with negative adverbials, it sounds very FORMAL and EMPHATIC. Students must learn that this is a specific stylistic device, not the default word order.',
      contrastExamples: [
        { english: 'Never have I seen such a beautiful sunset.', spanish: 'Nunca he visto una puesta de sol tan bonita.', note: 'English requires inversion (have I) after "Never" at the start. Spanish keeps normal order.' },
        { english: 'Not only was he rude, but he was also dishonest.', spanish: 'No solo fue grosero, sino que también fue deshonesto.', note: 'English inverts "was he" after "Not only". Spanish does not invert.' },
      ]
    },
    predictedErrors: [
      { error: 'Never I have seen such a thing.', correction: 'Never have I seen such a thing.', whyEs: 'Cuando "Never" va al principio de la oración, DEBES invertir auxiliar y sujeto: "Never HAVE I seen" (no "Never I have").', frequency: 'very common' },
      { error: 'Not only he was late, but he also forgot the keys.', correction: 'Not only was he late, but he also forgot the keys.', whyEs: '"Not only" al principio exige inversión en la primera cláusula: "Not only WAS HE late" (no "Not only he was").', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'Rarely _____ such talent in a young musician.', question: 'Choose the correct inverted form.', options: ['do we see', 'we see', 'we do see', 'see we'], correct: 0, explanationEs: 'Después de "Rarely" al inicio, se invierte: auxiliar "do" + sujeto "we" + verbo base "see". → "Rarely do we see…"' },
        { sentence: 'Not only _____ the exam, but she also got the highest mark.', question: 'Complete the inverted structure.', options: ['did she pass', 'she passed', 'she did pass', 'passed she'], correct: 0, explanationEs: '"Not only" al inicio requiere inversión: "did she pass". La segunda cláusula con "but" mantiene el orden normal.' },
      ],
      controlled: [
        { prompt: 'Rewrite with inversion: I have seldom heard such nonsense.', promptEs: 'Reescribe con inversión: Pocas veces he oído tal disparate.', answer: 'Seldom have I heard such nonsense.', hint: 'Seldom + auxiliary + subject + past participle' },
      ]
    },
    recycleInTopics: ['b2-emphasis-cleft-sentences', 'b2-formal-writing', 'c1-advanced-inversion'],
    tipEs: '💡 La inversión con adverbios negativos es como "modo pregunta" pero NO es una pregunta — es una DECLARACIÓN enfática y formal. Regla de oro: si empiezas con NEVER/RARELY/NOT ONLY/HARDLY → invierte como si fuera pregunta. Ejemplo fácil de recordar: "Never have I ever…" (¡como el juego!).'
  },

  // ═══════════════════════════════════════════════
  // B2 — MODULE: Whatever, Whoever, Wherever…
  // ═══════════════════════════════════════════════
  {
    id: 'b2-whoever-whatever-wherever',
    title: 'Whatever, Whoever, Wherever, However, Whenever',
    titleEs: 'Whatever, Whoever, Wherever, However, Whenever',
    level: 'B2',
    cefrLevel: 4,
    category: 'pronouns',
    priority: 'low',
    prerequisiteIds: ['b1-relative-clauses'],
    explanation: 'Compound relatives (whatever, whoever, wherever, however, whenever) combine a relative pronoun with "-ever" to mean "any … that" or "no matter …". They introduce clauses of concession or free choice. "Whoever" = any person who, "whatever" = anything that, "wherever" = any place where, "whenever" = any time when, "however" = in any way that / no matter how.',
    explanationEs: 'Los relativos compuestos (whatever, whoever, wherever, however, whenever) combinan un pronombre relativo con "-ever" para significar "cualquier… que" o "no importa…". Introducen cláusulas de concesión o elección libre. "Whoever" = cualquier persona que, "whatever" = cualquier cosa que, "wherever" = cualquier lugar donde, "whenever" = cualquier momento en que, "however" = de cualquier manera que / no importa cómo.',
    formationRules: [
      {
        label: 'Compound relatives as subjects/objects',
        labelEs: 'Relativos compuestos como sujetos/objetos',
        formula: 'Whoever/Whatever/Wherever/Whenever/However + clause (present simple for general meaning)',
        steps: [
          { step: 'Choose the appropriate compound relative', stepEs: 'Elige el relativo compuesto adecuado', example: 'Whoever comes to the party is welcome.', translation: 'Quienquiera que venga a la fiesta es bienvenido.' },
          { step: 'Use present simple (NOT future) in the clause after the compound relative', stepEs: 'Usa presente simple (NO futuro) en la cláusula después del relativo compuesto', example: 'Whatever happens, I\'ll support you.', translation: 'Pase lo que pase, te apoyaré.' },
          { step: 'The main clause can use any appropriate tense', stepEs: 'La cláusula principal puede usar cualquier tiempo verbal apropiado', example: 'Wherever she goes, she makes friends.', translation: 'Dondequiera que vaya, hace amigos.' },
        ]
      },
      {
        label: '"No matter" equivalents',
        labelEs: 'Equivalentes con "No matter"',
        formula: 'No matter + wh-word = -ever compound relative',
        steps: [
          { step: 'Replace compound relatives with "no matter + wh-word" for the same meaning', stepEs: 'Reemplaza los relativos compuestos con "no matter + wh-word" para el mismo significado', example: 'No matter what you say, I won\'t change my mind. (= Whatever you say…)', translation: 'No importa lo que digas, no cambiaré de opinión.' },
          { step: '"However" + adjective/adverb = "no matter how" + adjective/adverb', stepEs: '"However" + adjetivo/adverbio = "no matter how" + adjetivo/adverbio', example: 'However hard you try, you can\'t please everyone.', translation: 'Por mucho que lo intentes, no puedes complacer a todos.' },
        ]
      }
    ],
    signalWords: [
      { word: 'whatever', meaning: 'anything that / no matter what', meaningEs: 'lo que sea / no importa qué' },
      { word: 'whoever', meaning: 'any person who / no matter who', meaningEs: 'quienquiera que / no importa quién' },
      { word: 'wherever', meaning: 'any place where / no matter where', meaningEs: 'dondequiera que / no importa dónde' },
      { word: 'whenever', meaning: 'any time when / no matter when', meaningEs: 'cuando sea que / no importa cuándo' },
      { word: 'however', meaning: 'in any way / no matter how', meaningEs: 'como sea que / no importa cómo' },
    ],
    l1Contrast: {
      concept: 'Compound relatives vs. Spanish equivalents',
      conceptEs: 'Relativos compuestos vs. equivalentes en español',
      spanishBehavior: 'Spanish has "quienquiera", "lo que sea", "dondequiera", "cuando sea", "como sea" but they are much less common in everyday speech. Spanish speakers often prefer "no importa quién/qué/dónde" or just subjunctive constructions.',
      englishBehavior: 'English compound relatives (whoever, whatever, wherever, etc.) are very common in both spoken and written English. They are followed by present simple (not future), which contrasts with Spanish subjunctive usage.',
      contrastExamples: [
        { english: 'Whatever you decide, I\'ll be happy.', spanish: 'Lo que sea que decidas, estaré contento.', note: 'English uses present simple "decide" after "whatever". Spanish uses subjunctive "decidas".' },
        { english: 'Whoever wins the election will face many challenges.', spanish: 'Quienquiera que gane la elección enfrentará muchos desafíos.', note: 'English "whoever wins" (present simple). Spanish "quienquiera que gane" (subjunctive). Spanish "quienquiera" sounds literary.' },
      ]
    },
    predictedErrors: [
      { error: 'Whoever will come is welcome.', correction: 'Whoever comes is welcome.', whyEs: 'Después de "whoever" (y otros compuestos con -ever), se usa PRESENTE SIMPLE, no futuro. Es como las condicionales: "if" → presente simple. Aquí: "whoever" → presente simple.', frequency: 'very common' },
      { error: 'Whatever you will do, do it well.', correction: 'Whatever you do, do it well.', whyEs: 'Misma regla: después de "whatever" no se usa "will". Se usa presente simple: "Whatever you do" (no "Whatever you will do").', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ you go, I\'ll follow you.', question: 'Choose the correct compound relative.', options: ['Wherever', 'Whatever', 'However', 'Whenever'], correct: 0, explanationEs: '"Wherever" = dondequiera que. "Wherever you go" = "Dondequiera que vayas". Se refiere a LUGAR.' },
        { sentence: '_____ hard she studies, she can\'t pass the exam.', question: 'Choose the correct compound relative.', options: ['However', 'Whatever', 'Whoever', 'Wherever'], correct: 0, explanationEs: '"However" + adjetivo/adverbio = no importa cuán. "However hard she studies" = "por mucho que estudie".' },
        { sentence: '_____ wins the competition will receive a scholarship.', question: 'Choose the correct compound relative.', options: ['Whatever', 'Whoever', 'However', 'Wherever'], correct: 1, explanationEs: '"Whoever" = quienquiera que; se refiere a una PERSONA.' },
        { sentence: '_____ she says, I trust her completely.', question: 'Things (not people):', options: ['Whoever', 'Whenever', 'Whatever', 'However'], correct: 2, explanationEs: '"Whatever" = cualquier cosa que; se refiere a COSAS, no personas.' },
        { sentence: 'You can call me _____ you feel lonely.', question: 'Time-based compound relative:', options: ['whenever', 'wherever', 'whoever', 'however'], correct: 0, explanationEs: '"Whenever" = en cualquier momento que; se refiere a TIEMPO.' },
        { sentence: '_____ you will decide, tell me soon. (Find the error)', question: 'Correct the error:', options: ['Whatever you will decide', 'Whatever you decide', 'Whichever you will decide', 'However you decide'], correct: 1, explanationEs: 'Después de "-ever" se usa PRESENTE SIMPLE, no will. Correcto: "Whatever you decide".' },
      ],
      controlled: [
        { prompt: 'Rewrite: No matter what you say, I won\'t believe you.', promptEs: 'Reescribe: No importa lo que digas, no te creeré.', answer: 'Whatever you say, I won\'t believe you.', hint: '"No matter what" = "whatever"' },
        { prompt: 'Rewrite: No matter who calls, tell them I\'m busy.', promptEs: 'Reescribe: No importa quién llame, dile que estoy ocupado.', answer: 'Whoever calls, tell them I\'m busy.', hint: '"No matter who" = "whoever"' },
        { prompt: 'Rewrite: No matter how tired I am, I always exercise.', promptEs: 'Reescribe: No importa lo cansado que esté, siempre hago ejercicio.', answer: 'However tired I am, I always exercise.', hint: '"No matter how" + adj = "however" + adj' },
        { prompt: 'Rewrite: No matter where they hide, the police will find them.', promptEs: 'Reescribe: No importa dónde se escondan, la policía los encontrará.', answer: 'Wherever they hide, the police will find them.', hint: '"No matter where" = "wherever"' },
        { prompt: 'Rewrite: No matter when you arrive, dinner will be ready.', promptEs: 'Reescribe: No importa cuando llegues, la cena estará lista.', answer: 'Whenever you arrive, dinner will be ready.', hint: '"No matter when" = "whenever"' },
      ]
    },
    recycleInTopics: ['b1-relative-clauses', 'b2-concession-clauses', 'b2-formal-register'],
    tipEs: '💡 Los "-ever" son como comodines del inglés: "whatever" = ¡lo que sea!, "whoever" = ¡quien sea!, "wherever" = ¡donde sea! Regla clave: NUNCA uses "will" después de ellos → usa PRESENTE SIMPLE. Y recuerda: "however" + adjetivo = "por muy [adjetivo] que…" (However tired you are = Por muy cansado que estés).'
  },

  // ═══════════════════════════════════════════════
  // B2 — Narrative Tenses (Past Simple vs Past Continuous vs Past Perfect)
  // ═══════════════════════════════════════════════
  {
    id: 'b2-narrative-tenses',
    title: 'Narrative Tenses: Past Simple, Continuous and Perfect Together',
    titleEs: 'Tiempos Narrativos: Past Simple, Continuous y Perfect Juntos',
    level: 'B2',
    cefrLevel: 4,
    category: 'verb-tenses',
    priority: 'high',
    prerequisiteIds: ['a2-past-simple', 'a2-past-continuous', 'b1-past-perfect'],
    explanation: 'In narratives, three past tenses work together: Past Simple (main events in sequence), Past Continuous (background or setting), and Past Perfect (earlier events that happened before the main story). For example: "I was walking (background) when I saw (main event) the man who had stolen (earlier event) my bag." Past Simple drives the story forward; Past Continuous sets the scene; Past Perfect shows what had already happened. Mastering this mix is essential for storytelling, formal writing, and clear chronological descriptions.',
    explanationEs: 'En las narraciones, tres tiempos pasados trabajan juntos: Past Simple (eventos principales en secuencia), Past Continuous (fondo o escenario) y Past Perfect (eventos anteriores al relato principal). Por ejemplo: "Estaba caminando (fondo) cuando vi (evento principal) al hombre que había robado (evento anterior) mi bolso." El Past Simple avanza la historia; el Past Continuous ambienta; el Past Perfect muestra lo que ya había ocurrido. Dominar esta combinación es esencial para contar historias y escribir con claridad cronológica.',
    formationRules: [
      {
        label: 'Past Simple — main events in sequence',
        labelEs: 'Past Simple — eventos principales en secuencia',
        formula: 'Subject + V2 (past form)',
        steps: [
          { step: 'Use Past Simple for the main events that move the story forward', stepEs: 'Usa Past Simple para los eventos principales que avanzan la historia', example: 'She opened the door, walked in, and sat down.', translation: 'Abrió la puerta, entró y se sentó.' },
          { step: 'Often used with: then, suddenly, after that, finally', stepEs: 'A menudo con: then, suddenly, after that, finally', example: 'Then she heard a noise. Suddenly the lights went out.', translation: 'Entonces oyó un ruido. De repente se apagaron las luces.' },
        ]
      },
      {
        label: 'Past Continuous — background and setting',
        labelEs: 'Past Continuous — fondo y escenario',
        formula: 'Subject + was/were + -ing',
        steps: [
          { step: 'Use Past Continuous for ongoing actions that provide context or atmosphere', stepEs: 'Usa Past Continuous para acciones en curso que dan contexto o atmósfera', example: 'The rain was falling. People were hurrying home.', translation: 'La lluvia estaba cayendo. La gente se apresuraba a casa.' },
          { step: 'Often used with: while, as, when (for the longer background action)', stepEs: 'A menudo con: while, as, when (para la acción de fondo más larga)', example: 'While I was waiting for the bus, I saw an old friend.', translation: 'Mientras esperaba el autobús, vi a un viejo amigo.' },
        ]
      },
      {
        label: 'Past Perfect — earlier events (before the main story)',
        labelEs: 'Past Perfect — eventos anteriores (antes del relato principal)',
        formula: 'Subject + had + past participle',
        steps: [
          { step: 'Use Past Perfect for events that happened BEFORE the main narrative time', stepEs: 'Usa Past Perfect para eventos que ocurrieron ANTES del tiempo narrativo principal', example: 'I recognised the man who had stolen my bag the week before.', translation: 'Reconocí al hombre que había robado mi bolso la semana anterior.' },
          { step: 'Often used with: already, before, by the time, earlier', stepEs: 'A menudo con: already, before, by the time, earlier', example: 'By the time the police arrived, the thief had already escaped.', translation: 'Cuando llegó la policía, el ladrón ya había escapado.' },
        ]
      }
    ],
    signalWords: [
      { word: 'while / as', meaning: 'introduce background (Past Continuous)', meaningEs: 'introducen el fondo (Past Continuous)' },
      { word: 'then / suddenly', meaning: 'introduce main events (Past Simple)', meaningEs: 'introducen eventos principales (Past Simple)' },
      { word: 'already / before / by the time', meaning: 'introduce earlier events (Past Perfect)', meaningEs: 'introducen eventos anteriores (Past Perfect)' },
    ],
    l1Contrast: {
      concept: 'Spanish has similar structures but uses subjunctive in some contexts',
      conceptEs: 'El español tiene estructuras similares pero usa subjuntivo en algunos contextos',
      spanishBehavior: 'Spanish has similar structures but uses subjunctive mood in some contexts where English uses indicative. "Estaba caminando cuando vi al hombre que había robado mi bolso" maps well. Spanish speakers often overuse past simple and underuse Past Continuous and Past Perfect in narratives.',
      englishBehavior: 'English uses a clear three-tense system: Past Simple for main events, Past Continuous for background, Past Perfect for earlier events. The indicative is used throughout; no subjunctive in these narrative contexts.',
      contrastExamples: [
        { english: 'I was walking when I saw the man who had stolen my bag.', spanish: 'Estaba caminando cuando vi al hombre que había robado mi bolso.', note: 'Maps well. Spanish speakers often say "I walked" instead of "I was walking" for background.' },
        { english: 'While she was cooking, the phone rang.', spanish: 'Mientras cocinaba, sonó el teléfono.', note: '"While I walked" is wrong in English; use "while I was walking".' },
        { english: 'I had already left when he arrived.', spanish: 'Ya me había ido cuando llegó.', note: 'Spanish speakers may say "I already left" instead of "I had already left".' },
      ]
    },
    predictedErrors: [
      { error: 'Using only Past Simple in narratives (no background or earlier events)', correction: 'Use Past Continuous for background, Past Perfect for earlier events.', whyEs: 'En español a veces se usa más el indefinido. En inglés las narraciones ricas combinan los tres tiempos.', frequency: 'very common' },
      { error: '"While I walked, I saw him."', correction: 'While I was walking, I saw him.', whyEs: 'Tras "while" y "as" la acción de fondo va en Past Continuous, no Past Simple.', frequency: 'very common' },
      { error: '"I already saw the film before she told me."', correction: 'I had already seen the film before she told me.', whyEs: 'Si algo ocurrió antes de otro evento pasado, usa Past Perfect (had + participio).', frequency: 'common' },
      { error: 'Confusing the roles: using Past Perfect for main events or Past Simple for earlier events', correction: 'Past Simple = main events; Past Perfect = events before the main story.', whyEs: 'El Past Perfect siempre indica "antes de" otro momento pasado. El Past Simple avanza la historia.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She _____ (cook) dinner when the doorbell _____ (ring).', question: 'Choose the correct tenses for this mini-narrative:', options: ['cooked / rang', 'was cooking / rang', 'had cooked / rang', 'cooked / was ringing'], correct: 1, explanationEs: 'Background: was cooking. Main event (interruption): rang. Past Continuous + Past Simple.' },
        { sentence: 'By the time we _____ (arrive), the concert _____ (already / start).', question: 'Choose the correct tenses:', options: ['arrived / already started', 'arrived / had already started', 'had arrived / started', 'arrived / was starting'], correct: 1, explanationEs: 'El concierto empezó ANTES de que llegáramos → Past Perfect (had already started).' },
        { sentence: 'While they _____ (wait) for the bus, it _____ (start) to rain.', question: 'Which combination is correct?', options: ['waited / started', 'were waiting / started', 'had waited / started', 'waited / had started'], correct: 1, explanationEs: 'While + Past Continuous (background). Main event: started (Past Simple).' },
        { sentence: 'He _____ (realise) he _____ (leave) his keys at home.', question: 'Choose the correct tenses:', options: ['realised / left', 'realised / had left', 'had realised / left', 'was realising / had left'], correct: 1, explanationEs: 'Dejó las llaves ANTES de darse cuenta → Past Perfect (had left).' },
        { sentence: 'I _____ (walk) through the park when I _____ (see) someone I _____ (meet) years ago.', question: 'Complete the narrative:', options: ['walked / saw / met', 'was walking / saw / had met', 'had walked / saw / met', 'was walking / had seen / met'], correct: 1, explanationEs: 'Background: was walking. Main event: saw. Earlier event (before seeing): had met.' },
        { sentence: 'She _____ (already / go) to bed when her phone _____ (ring).', question: 'Choose the correct tenses:', options: ['already went / rang', 'had already gone / rang', 'was already going / rang', 'went / had rung'], correct: 1, explanationEs: 'Se había ido a la cama ANTES de que sonara el teléfono → Past Perfect + Past Simple.' },
      ],
      controlled: [
        { prompt: 'Complete: While I _____ (read), someone _____ (knock) on the door.', promptEs: 'Completa: Mientras yo _____ (leer), alguien _____ (llamar) a la puerta.', answer: 'was reading / knocked', hint: 'Background = Past Continuous; main event = Past Simple' },
        { prompt: 'Complete: She _____ (not / see) him before that day because he _____ (move) abroad years earlier.', promptEs: 'Completa: Ella no _____ (ver) a él antes de ese día porque él _____ (mudarse) al extranjero años antes.', answer: "hadn't seen / had moved", hint: 'Both events before "that day" → Past Perfect' },
        { prompt: 'Rewrite as a narrative: "I waited for the bus. The bus arrived. I got on." Use Past Continuous for the first action.', promptEs: 'Reescribe como narración usando Past Continuous para la primera acción:', answer: 'I was waiting for the bus when it arrived. I got on.', hint: 'Background: was waiting. Main event: arrived.' },
        { prompt: 'Complete: By the time the police _____ (arrive), the thieves _____ (already / escape).', promptEs: 'Completa: Cuando la policía _____ (llegar), los ladrones _____ (escapar) ya.', answer: 'arrived / had already escaped', hint: 'Escape happened before arrival → Past Perfect' },
        { prompt: 'Write a two-sentence mini-narrative: someone was doing something (background) when something happened (main event).', promptEs: 'Escribe una mini-narración de dos oraciones: alguien estaba haciendo algo (fondo) cuando algo ocurrió (evento principal).', answer: 'I was having a shower when the phone rang. / She was driving to work when she saw the accident.', hint: 'Past Continuous + when + Past Simple' },
      ]
    },
    recycleInTopics: ['b1-past-perfect', 'c1-inversion'],
    tipEs: '💡 Truco para contar historias: (1) Past Continuous = el escenario ("estaba lloviendo", "la gente corría"). (2) Past Simple = lo que pasó ("vi", "sonó", "entró"). (3) Past Perfect = lo que ya había pasado antes ("había robado", "había conocido"). Piensa en capas: fondo (continuous) → evento (simple) → anterior (perfect).'
  },

  // ═══════════════════════════════════════════════
  // B2 — Advanced Reported Speech (Reporting Verbs)
  // ═══════════════════════════════════════════════
  {
    id: 'b2-reported-speech-advanced',
    title: 'Advanced Reported Speech: Reporting Verbs and Patterns',
    titleEs: 'Reported Speech Avanzado: Verbos de Reporte y Patrones',
    level: 'B2',
    cefrLevel: 4,
    category: 'clauses',
    priority: 'high',
    prerequisiteIds: ['b1-reported-speech'],
    explanation: 'Beyond basic "said" and "told", English has many reporting verbs with different grammatical patterns: admit + -ing, deny + -ing, suggest + -ing or that clause, recommend + that + subjunctive, warn + not to, promise + to, refuse + to, insist + on/-ing/that, accuse + of + -ing. These verbs add nuance and help avoid repetitive "he said/she said". Each pattern must be learned: suggest takes -ing or that, but recommend takes that + base verb (subjunctive); advise and warn take object + to infinitive.',
    explanationEs: 'Más allá de "said" y "told", el inglés tiene muchos verbos de reporte con patrones gramaticales distintos: admit + -ing, deny + -ing, suggest + -ing o that, recommend + that + subjuntivo, warn + not to, promise + to, refuse + to, insist + on/-ing/that, accuse + of + -ing. Estos verbos añaden matiz y evitan el repetitivo "he said/she said". Cada patrón debe aprenderse: suggest admite -ing o that, pero recommend lleva that + base verb (subjuntivo); advise y warn llevan objeto + to infinitive.',
    formationRules: [
      {
        label: 'Verb + to infinitive (promise, agree, offer, refuse, threaten)',
        labelEs: 'Verbo + to infinitivo (promise, agree, offer, refuse, threaten)',
        formula: 'verb + to + base verb',
        steps: [
          { step: 'promise, agree, offer, refuse, threaten + to infinitive', stepEs: 'promise, agree, offer, refuse, threaten + to infinitivo', example: 'She promised to help. He refused to leave. They agreed to meet.', translation: 'Prometió ayudar. Se negó a marcharse. Acordaron reunirse.' },
        ]
      },
      {
        label: 'Verb + -ing (admit, deny, suggest)',
        labelEs: 'Verbo + -ing (admit, deny, suggest)',
        formula: 'verb + -ing (gerund)',
        steps: [
          { step: 'admit, deny, suggest + -ing (no "to" before -ing)', stepEs: 'admit, deny, suggest + -ing (sin "to" antes de -ing)', example: 'He admitted stealing the money. She denied doing it. I suggest going early.', translation: 'Admitió haber robado el dinero. Negó haberlo hecho. Sugiero ir temprano.' },
          { step: 'suggest can also take: suggest + that + clause (subjunctive: base verb)', stepEs: 'suggest también admite: suggest + that + cláusula (subjuntivo: verbo base)', example: 'She suggested that we leave early.', translation: 'Sugirió que saliéramos temprano.' },
        ]
      },
      {
        label: 'Verb + object + to infinitive (advise, warn, encourage, remind)',
        labelEs: 'Verbo + objeto + to infinitivo (advise, warn, encourage, remind)',
        formula: 'verb + person + to + base verb',
        steps: [
          { step: 'advise, warn, encourage, remind, invite, ask + person + to infinitive', stepEs: 'advise, warn, encourage, remind, invite, ask + persona + to infinitivo', example: 'She advised me to see a doctor. He warned us not to go there.', translation: 'Me aconsejó que viera a un médico. Nos advirtió que no fuéramos allí.' },
          { step: 'warn + not to: negative infinitive', stepEs: 'warn + not to: infinitivo negativo', example: 'They warned him not to touch the wire.', translation: 'Le advirtieron que no tocara el cable.' },
        ]
      },
      {
        label: 'Verb + that clause (insist, recommend, suggest)',
        labelEs: 'Verbo + that cláusula (insist, recommend, suggest)',
        formula: 'verb + that + subject + base verb (subjunctive)',
        steps: [
          { step: 'recommend, suggest, insist, demand + that + subject + BASE VERB (no -s, no tense)', stepEs: 'recommend, suggest, insist, demand + that + sujeto + VERBO BASE (subjuntivo)', example: 'The doctor recommended that she rest. She insisted that he apologise.', translation: 'El médico recomendó que descansara. Insistió en que se disculpara.' },
          { step: 'accuse + of + -ing (not "to"): accuse someone of doing something', stepEs: 'accuse + of + -ing (no "to"): accuse someone of doing something', example: 'She accused him of lying.', translation: 'Lo acusó de mentir.' },
        ]
      }
    ],
    signalWords: [
      { word: 'admit / deny', meaning: 'verb + -ing', meaningEs: 'verbo + -ing' },
      { word: 'suggest / recommend', meaning: 'verb + -ing or that + subjunctive', meaningEs: 'verbo + -ing o that + subjuntivo' },
      { word: 'advise / warn', meaning: 'verb + object + to infinitive', meaningEs: 'verbo + objeto + to infinitivo' },
      { word: 'promise / refuse', meaning: 'verb + to infinitive', meaningEs: 'verbo + to infinitivo' },
    ],
    l1Contrast: {
      concept: 'Spanish uses subjunctive with many reporting verbs',
      conceptEs: 'El español usa subjuntivo con muchos verbos de reporte',
      spanishBehavior: 'Spanish uses subjunctive with many reporting verbs: "sugirió que fuéramos", "recomendó que descansara". English uses subjunctive only with formal verbs (recommend, suggest, insist + that + base verb) but infinitive patterns elsewhere (advise + to, warn + not to).',
      englishBehavior: 'English has fixed patterns: suggest + -ing or that; recommend + that + base verb (not "to"); advise/warn + object + to. No "suggest someone to do" — wrong. "He suggested me to go" is incorrect; use "He suggested (that) I go" or "He suggested going".',
      contrastExamples: [
        { english: 'She suggested (that) we go. / She suggested going.', spanish: 'Sugirió que fuéramos. / Sugirió ir.', note: 'English: suggest + that + base verb OR suggest + -ing. Never "suggest someone to go".' },
        { english: 'He advised me to see a doctor.', spanish: 'Me aconsejó que viera a un médico.', note: 'advise + object + to infinitive. Spanish uses subjunctive in the that-clause.' },
        { english: 'She accused him of stealing.', spanish: 'Lo acusó de robar.', note: 'accuse + of + -ing. Never "accuse to" or "accuse someone to steal".' },
      ]
    },
    predictedErrors: [
      { error: '"He suggested me to go."', correction: 'He suggested (that) I go. / He suggested going.', whyEs: 'Suggest NO lleva objeto + to. Usa "suggest + that + base verb" o "suggest + -ing".', frequency: 'very common' },
      { error: '"She recommended to go."', correction: 'She recommended (that) we go. / She recommended going.', whyEs: 'Recommend NO va seguido de "to infinitive" solo. Usa "recommend + that + base verb" o "recommend + -ing".', frequency: 'very common' },
      { error: '"He denied to do it."', correction: 'He denied doing it.', whyEs: 'Deny va con -ing, no con to infinitive. Admit y deny siempre + -ing.', frequency: 'common' },
      { error: '"She accused me to steal."', correction: 'She accused me of stealing.', whyEs: 'Accuse + of + -ing. Nunca "accuse + to" ni "accuse someone to do".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She _____ me to see a doctor.', question: 'Choose the correct reporting verb:', options: ['suggested', 'advised', 'recommended to', 'said'], correct: 1, explanationEs: 'advise + object + to infinitive. "suggest" no lleva objeto + to.' },
        { sentence: 'He _____ stealing the money.', question: 'Which verb and pattern?', options: ['denied to', 'denied', 'refused', 'refused to'], correct: 1, explanationEs: 'deny + -ing. "He denied stealing" (gerundio). "refuse" va con to infinitive.' },
        { sentence: 'The teacher _____ that we _____ the homework.', question: 'Complete with recommend + subjunctive:', options: ['recommended / do', 'recommended / to do', 'recommended / did', 'suggested me / do'], correct: 0, explanationEs: 'recommend + that + base verb (subjunctive). "recommended that we do".' },
        { sentence: 'She _____ him _____ the wire.', question: 'Choose warn + negative:', options: ['warned / not to touch', 'warned / to not touch', 'warned / don\'t touch', 'said / not touch'], correct: 0, explanationEs: 'warn + object + not to + base verb. "warned him not to touch".' },
        { sentence: 'He _____ to help us with the project.', question: 'Which verb + to infinitive?', options: ['suggested', 'promised', 'denied', 'admitted'], correct: 1, explanationEs: 'promise + to infinitive. suggest/deny/admit van con -ing o that.' },
        { sentence: 'They _____ her _____ to the party.', question: 'Choose the correct pattern:', options: ['accused / to come', 'invited / to come', 'suggested / to come', 'denied / to come'], correct: 1, explanationEs: 'invite + object + to infinitive. "accuse" va con "of + -ing"; "suggest" no lleva objeto + to.' },
      ],
      controlled: [
        { prompt: 'Report: "You should see a doctor," the nurse said to me.', promptEs: 'Reporta: "Deberías ver a un médico," me dijo la enfermera.', answer: 'The nurse advised me to see a doctor.', hint: 'advise + object + to infinitive' },
        { prompt: 'Report: "I didn\'t take the money," he said.', promptEs: 'Reporta: "No tomé el dinero," dijo él.', answer: 'He denied taking the money.', hint: 'deny + -ing' },
        { prompt: 'Report: "Let\'s go to the cinema," she said.', promptEs: 'Reporta: "Vamos al cine," dijo ella.', answer: 'She suggested going to the cinema. / She suggested (that) we go to the cinema.', hint: 'suggest + -ing or that + base verb' },
        { prompt: 'Report: "Don\'t touch that!" he said to the children.', promptEs: 'Reporta: "¡No toquéis eso!" les dijo a los niños.', answer: 'He warned the children not to touch it.', hint: 'warn + object + not to + base verb' },
        { prompt: 'Report: "You stole my wallet!" she said to him.', promptEs: 'Reporta: "¡Robaste mi cartera!" le dijo a él.', answer: 'She accused him of stealing her wallet.', hint: 'accuse + object + of + -ing' },
      ]
    },
    recycleInTopics: ['c1-nominalization', 'c1-hedging'],
    tipEs: '💡 Truco para los verbos de reporte: agrupa por patrón. (1) + to: promise, agree, offer, refuse. (2) + -ing: admit, deny, suggest. (3) + objeto + to: advise, warn, encourage, remind. (4) + that + base: recommend, suggest, insist. Y recuerda: NUNCA "suggest someone to" ni "recommend to" solo — son los errores más frecuentes.'
  },

  // ═══════════════════════════════════════════════
  // C1 — Complex Noun Phrases
  // ═══════════════════════════════════════════════
  {
    id: 'c1-complex-noun-phrases',
    title: 'Complex Noun Phrases',
    titleEs: 'Grupos Nominales Complejos',
    level: 'C1',
    cefrLevel: 5,
    category: 'syntax',
    priority: 'high',
    prerequisiteIds: ['b2-participle-clauses'],
    explanation: 'Complex noun phrases are a hallmark of advanced English. They allow speakers and writers to pack a great deal of information into a single noun phrase by stacking pre-modifiers (adjectives, nouns, participles) before the head noun and post-modifiers (prepositional phrases, relative clauses, participle clauses) after it. Mastering noun phrase construction is essential for academic writing, professional communication, and understanding dense texts such as news articles, reports, and legal documents.',
    explanationEs: 'Los grupos nominales complejos son una marca del inglés avanzado. Permiten condensar gran cantidad de información en un solo grupo nominal apilando pre-modificadores (adjetivos, sustantivos, participios) antes del núcleo y post-modificadores (frases preposicionales, cláusulas de relativo, cláusulas de participio) después. Dominar la construcción de grupos nominales es esencial para la escritura académica, la comunicación profesional y la comprensión de textos densos como artículos de prensa, informes y documentos legales.',
    formationRules: [
      {
        label: 'Pre-modification: Adjective Order (OSASCOMP)',
        labelEs: 'Pre-modificación: Orden de Adjetivos (OSASCOMP)',
        formula: 'Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose + NOUN',
        steps: [
          { step: 'Opinion comes first: beautiful, horrible, lovely', stepEs: 'La opinión va primero: beautiful, horrible, lovely', example: 'a beautiful large old rectangular brown Italian wooden dining table', translation: 'una hermosa mesa de comedor italiana de madera marrón rectangular antigua y grande' },
          { step: 'Stack noun modifiers directly before head noun', stepEs: 'Los sustantivos modificadores van justo antes del núcleo', example: 'a government research funding proposal', translation: 'una propuesta de financiación de investigación gubernamental' },
          { step: 'Use compound modifiers with hyphens', stepEs: 'Usa modificadores compuestos con guiones', example: 'a well-known, internationally-recognised, award-winning scientist', translation: 'un científico conocido, reconocido internacionalmente y galardonado' },
        ]
      },
      {
        label: 'Post-modification: Extending the noun phrase',
        labelEs: 'Post-modificación: Extender el grupo nominal',
        steps: [
          { step: 'Prepositional phrases: the report on climate change', stepEs: 'Frases preposicionales: the report on climate change', example: 'the impact of rising sea levels on coastal communities', translation: 'el impacto del aumento del nivel del mar en las comunidades costeras' },
          { step: 'Relative clauses: the students who passed the exam', stepEs: 'Cláusulas de relativo: the students who passed the exam', example: 'the policy that was introduced last year', translation: 'la política que se introdujo el año pasado' },
          { step: 'Participle clauses: the results published last week', stepEs: 'Cláusulas de participio: the results published last week', example: 'the data collected from participants living in rural areas', translation: 'los datos recopilados de participantes que viven en zonas rurales' },
        ]
      },
      {
        label: 'Compression: Turning clauses into modifiers',
        labelEs: 'Compresión: Convertir cláusulas en modificadores',
        steps: [
          { step: 'Relative clause → participle: people who live in cities → people living in cities / city dwellers', stepEs: 'Cláusula de relativo → participio', example: 'the report which was published recently → the recently published report', translation: 'el informe que fue publicado recientemente → el informe publicado recientemente' },
          { step: 'Clause → compound modifier: a system that saves energy → an energy-saving system', stepEs: 'Cláusula → modificador compuesto', example: 'a decision that changes lives → a life-changing decision', translation: 'una decisión que cambia vidas → una decisión que cambia la vida' },
          { step: 'Full sentence → dense NP: The government funded the report recently. The report is about environmental impact. → the recently published government-funded report on environmental impact', stepEs: 'Oración completa → GN denso', example: 'the recently published government-funded report on environmental impact assessment', translation: 'el informe recientemente publicado y financiado por el gobierno sobre evaluación del impacto ambiental' },
        ]
      },
    ],
    signalWords: [
      { word: 'pre-modified', meaning: 'having modifiers placed before the head noun', meaningEs: 'que tiene modificadores antes del sustantivo núcleo' },
      { word: 'post-modified', meaning: 'having modifiers placed after the head noun', meaningEs: 'que tiene modificadores después del sustantivo núcleo' },
      { word: 'head noun', meaning: 'the main noun in a noun phrase', meaningEs: 'el sustantivo principal de un grupo nominal' },
      { word: 'compound modifier', meaning: 'a multi-word modifier joined by hyphens', meaningEs: 'un modificador de varias palabras unidas por guiones' },
    ],
    l1Contrast: {
      concept: 'Adjective placement: before vs. after the noun',
      conceptEs: 'Posición del adjetivo: antes vs. después del sustantivo',
      spanishBehavior: 'Spanish typically places adjectives AFTER the noun: "el informe publicado recientemente por el gobierno sobre el impacto ambiental". Noun-noun modification is done with prepositions: "mesa de madera", "propuesta de financiación".',
      englishBehavior: 'English stacks modifiers BEFORE the noun: "the recently published government-funded environmental impact report". Nouns can directly modify other nouns without prepositions: "wood table", "funding proposal".',
      contrastExamples: [
        { english: 'the recently published government-funded report', spanish: 'el informe publicado recientemente financiado por el gobierno', note: 'English compresses; Spanish expands with prepositions and post-placed participles.' },
        { english: 'a well-known international research centre', spanish: 'un centro de investigación internacional muy conocido', note: 'English pre-modifies; Spanish post-modifies with "de" and adjectives after.' },
        { english: 'energy-saving devices', spanish: 'dispositivos de ahorro de energía', note: 'English uses compound modifier; Spanish uses prepositional chain.' },
      ]
    },
    predictedErrors: [
      { error: 'a wooden old big table', correction: 'a big old wooden table', whyEs: 'El orden de adjetivos en inglés es fijo: Opinion-Size-Age-Shape-Colour-Origin-Material-Purpose. "Big" (tamaño) va antes de "old" (edad) que va antes de "wooden" (material).', frequency: 'very common' },
      { error: 'people who live in the city should use public transport', correction: 'city dwellers should use public transport', whyEs: 'En C1, se espera compresión: en lugar de cláusulas de relativo largas, usa grupos nominales compactos. "people who live in the city" → "city dwellers" o "city residents".', frequency: 'common' },
      { error: 'a table of wood', correction: 'a wooden table / a wood table', whyEs: 'Traducción directa del español "mesa de madera". En inglés, el material se expresa como adjetivo pre-modificador, no con preposición.', frequency: 'common' },
      { error: 'the by the government funded report', correction: 'the government-funded report', whyEs: 'No se puede traducir literalmente la estructura española con preposiciones dentro del grupo nominal. En inglés, se comprime en un modificador compuesto con guión.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: 'Which is the correct adjective order?', question: 'Choose the correctly ordered noun phrase:', options: ['a leather brown Italian old bag', 'an old brown Italian leather bag', 'a brown old leather Italian bag', 'an Italian old brown leather bag'], correct: 1, explanationEs: 'Orden correcto: Age (old) + Colour (brown) + Origin (Italian) + Material (leather) + Noun (bag).' },
        { sentence: 'The report _____ on environmental policy was released yesterday.', question: 'Choose the best post-modifier:', options: ['which focusing', 'focused', 'focusing', 'that focus'], correct: 2, explanationEs: '"focusing on" es una cláusula de participio presente que actúa como post-modificador del sustantivo "report".' },
        { sentence: 'Which sentence uses the most compressed noun phrase?', question: 'Select the most C1-appropriate version:', options: ['The system that was designed to save energy was installed.', 'The energy-saving system was installed.', 'The system for saving of energy was installed.', 'The system which saves energy was installed.'], correct: 1, explanationEs: '"the energy-saving system" es la forma más comprimida y natural en C1. Convierte la cláusula relativa en un modificador compuesto.' },
        { sentence: 'a _____ scientist', question: 'Choose the correctly hyphenated compound modifier:', options: ['well known internationally recognised', 'well-known, internationally-recognised', 'well known-internationally recognised', 'well-known internationally recognised'], correct: 1, explanationEs: 'Los modificadores compuestos multi-palabra llevan guiones cuando van antes del sustantivo: "well-known", "internationally-recognised".' },
      ],
      controlled: [
        { prompt: 'Compress: "a decision that changed the lives of many people"', promptEs: 'Comprime: "una decisión que cambió la vida de muchas personas"', answer: 'a life-changing decision', hint: 'Use a compound modifier with a hyphen.' },
        { prompt: 'Compress: "students who come from countries where English is not spoken"', promptEs: 'Comprime: "estudiantes de países donde no se habla inglés"', answer: 'students from non-English-speaking countries', hint: 'Use a compound modifier for the country description.' },
        { prompt: 'Put in correct order: published / recently / government-funded / the / report / on environmental impact', promptEs: 'Pon en orden correcto: published / recently / government-funded / the / report / on environmental impact', answer: 'the recently published government-funded report on environmental impact', hint: 'Determiner + adverb + participle + noun modifier + head noun + prepositional phrase.' },
      ]
    },
    recycleInTopics: ['b2-participle-clauses', 'c1-academic-writing', 'c2-register-and-style'],
    tipEs: '💡 Truco para el orden de adjetivos: OSASCOMP = Opinión-Tamaño-Edad-Forma-Color-Origen-Material-Propósito. Y para la compresión: si puedes decirlo con menos palabras, hazlo. "People who live in cities" → "city residents". "A report that was funded by the government" → "a government-funded report". En el examen C1, la compresión es oro.'
  },

  // ═══════════════════════════════════════════════
  // C1 — Advanced Linking and Discourse Markers
  // ═══════════════════════════════════════════════
  {
    id: 'c1-advanced-linking-devices',
    title: 'Advanced Linking and Discourse Markers',
    titleEs: 'Conectores y Marcadores Discursivos Avanzados',
    level: 'C1',
    cefrLevel: 5,
    category: 'discourse',
    priority: 'high',
    prerequisiteIds: ['b2-concession-clauses'],
    explanation: 'At C1 level, learners must go beyond basic linkers (however, moreover, therefore) and master sophisticated discourse markers that signal concession, addition, reformulation, and contrast with nuance. These devices are essential for cohesive academic essays, formal presentations, and scoring high on Cambridge Advanced (CAE) and similar exams. Key markers include: "be that as it may", "having said that", "let alone", "not to mention", "by the same token", and "in light of".',
    explanationEs: 'En el nivel C1, los estudiantes deben ir más allá de los conectores básicos (however, moreover, therefore) y dominar marcadores discursivos sofisticados que señalan concesión, adición, reformulación y contraste con matiz. Estos dispositivos son esenciales para ensayos académicos cohesivos, presentaciones formales y obtener alta puntuación en Cambridge Advanced (CAE) y exámenes similares. Marcadores clave incluyen: "be that as it may", "having said that", "let alone", "not to mention", "by the same token" e "in light of".',
    formationRules: [
      {
        label: 'Concessive markers: Acknowledging a point then continuing',
        labelEs: 'Marcadores concesivos: Reconocer un punto y continuar',
        steps: [
          { step: 'Be that as it may + main clause: acknowledges a fact then pivots', stepEs: '"Be that as it may" + cláusula principal: reconoce un hecho y gira', example: 'The project is expensive. Be that as it may, the potential benefits outweigh the costs.', translation: 'El proyecto es caro. Sea como fuere, los beneficios potenciales superan los costes.' },
          { step: 'Having said that / That being said: softens a contrast', stepEs: '"Having said that" / "That being said": suaviza un contraste', example: 'The results were disappointing. Having said that, we did learn a great deal from the experience.', translation: 'Los resultados fueron decepcionantes. Dicho esto, aprendimos mucho de la experiencia.' },
          { step: 'Much as I appreciate / understand / admire: concession before disagreement', stepEs: '"Much as I appreciate": concesión antes de desacuerdo', example: 'Much as I appreciate your concern, I believe we should proceed as planned.', translation: 'Por mucho que agradezca tu preocupación, creo que deberíamos proceder según lo planeado.' },
          { step: 'Notwithstanding + noun / the fact that: formal concession', stepEs: '"Notwithstanding" + sustantivo: concesión formal', example: 'Notwithstanding the risks, the board approved the proposal.', translation: 'A pesar de los riesgos, la junta aprobó la propuesta.' },
        ]
      },
      {
        label: 'Additive intensifiers: Emphasizing additional points',
        labelEs: 'Intensificadores aditivos: Enfatizar puntos adicionales',
        steps: [
          { step: 'Not to mention + noun/gerund: adds a strong additional point', stepEs: '"Not to mention" + sustantivo/gerundio: añade un punto fuerte adicional', example: 'The trip was exhausting, not to mention incredibly expensive.', translation: 'El viaje fue agotador, por no mencionar increíblemente caro.' },
          { step: 'Let alone + harder/more extreme item: "X is hard, let alone Y (even harder)"', stepEs: '"Let alone" + elemento más difícil/extremo', example: 'She can barely run a mile, let alone a marathon.', translation: 'Apenas puede correr una milla, y mucho menos un maratón.' },
          { step: 'To say nothing of + noun: literary addition', stepEs: '"To say nothing of" + sustantivo: adición literaria', example: 'The policy failed economically, to say nothing of its social consequences.', translation: 'La política fracasó económicamente, por no hablar de sus consecuencias sociales.' },
        ]
      },
      {
        label: 'Reformulation and equivalence markers',
        labelEs: 'Marcadores de reformulación y equivalencia',
        steps: [
          { step: 'In other words / That is to say / To put it another way: rephrasing', stepEs: 'Marcadores de reformulación: parafrasear', example: 'The experiment was inconclusive. In other words, we need to repeat it.', translation: 'El experimento fue inconcluyente. En otras palabras, necesitamos repetirlo.' },
          { step: 'By the same token: drawing a parallel consequence', stepEs: '"By the same token": sacar una consecuencia paralela', example: 'If we expect students to be punctual, by the same token, teachers should arrive on time.', translation: 'Si esperamos que los estudiantes sean puntuales, del mismo modo, los profesores deberían llegar a tiempo.' },
          { step: 'In light of / In view of + noun: considering evidence', stepEs: '"In light of" / "In view of" + sustantivo: considerando evidencia', example: 'In light of recent developments, the company has revised its strategy.', translation: 'A la luz de los acontecimientos recientes, la empresa ha revisado su estrategia.' },
        ]
      },
    ],
    signalWords: [
      { word: 'be that as it may', meaning: 'despite that; even so', meaningEs: 'sea como fuere; aun así' },
      { word: 'having said that', meaning: 'despite what I just said', meaningEs: 'dicho esto; habiendo dicho eso' },
      { word: 'notwithstanding', meaning: 'in spite of; despite', meaningEs: 'a pesar de; no obstante' },
      { word: 'let alone', meaning: 'used to say that something is even less likely', meaningEs: 'y mucho menos; ni hablar de' },
      { word: 'not to mention', meaning: 'in addition to (emphasising something extra)', meaningEs: 'por no mencionar; sin contar' },
      { word: 'by the same token', meaning: 'for the same reason; similarly', meaningEs: 'del mismo modo; por la misma razón' },
      { word: 'in light of', meaning: 'considering; taking into account', meaningEs: 'a la luz de; en vista de' },
      { word: 'much as', meaning: 'although (+ appreciation/understanding)', meaningEs: 'por mucho que; aunque' },
    ],
    l1Contrast: {
      concept: 'Discourse marker register differences between Spanish and English',
      conceptEs: 'Diferencias de registro en marcadores discursivos entre español e inglés',
      spanishBehavior: 'Spanish uses heavy connectors frequently in everyday speech: "sin embargo", "no obstante", "a pesar de que", "por consiguiente". They sound natural in both formal and semi-formal registers. Spanish speakers tend to overuse these in English.',
      englishBehavior: 'English discourse markers are more register-sensitive. "However" is semi-formal. "Be that as it may" and "notwithstanding" are very formal/written. "Having said that" is common in speech. Using overly formal markers in casual English sounds unnatural.',
      contrastExamples: [
        { english: 'Having said that, I still think we should try.', spanish: 'Dicho esto, sigo pensando que deberíamos intentarlo.', note: '"Having said that" is natural in both spoken and written English. "Dicho esto" works the same way in Spanish.' },
        { english: 'She can barely walk, let alone run.', spanish: 'Apenas puede caminar, y mucho menos correr.', note: '"Let alone" requires the HARDER item second. Common error: reversing the order.' },
        { english: 'Be that as it may, we must continue.', spanish: 'Sea como fuere, debemos continuar.', note: 'Very formal in both languages. In English, used mainly in writing and formal debate.' },
      ]
    },
    predictedErrors: [
      { error: 'On the other hand, the project has benefits.', correction: 'On the one hand, there are risks. On the other hand, there are significant benefits.', whyEs: '"On the other hand" necesita ir precedido de "on the one hand" para formar el par completo. Usarlo solo sugiere un contraste que no se ha establecido.', frequency: 'very common' },
      { error: 'She can barely run a marathon, let alone a mile.', correction: 'She can barely run a mile, let alone a marathon.', whyEs: '"Let alone" introduce el elemento MÁS difícil o extremo. Primero lo fácil, luego lo difícil: "barely a mile, let alone a marathon".', frequency: 'common' },
      { error: 'Notwithstanding, the evidence suggests...', correction: 'Notwithstanding the evidence / Notwithstanding the fact that...', whyEs: '"Notwithstanding" normalmente necesita un complemento (sustantivo o "the fact that + clause"). No se usa solo como conector independiente.', frequency: 'occasional' },
      { error: 'Be that as it may be, we should continue.', correction: 'Be that as it may, we should continue.', whyEs: 'La frase fija es "be that as it may" (sin "be" al final). Es una expresión idiomática que no se modifica.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She can barely afford rent, _____ a holiday abroad.', question: 'Choose the correct linking device:', options: ['not to mention', 'let alone', 'to say nothing of', 'having said that'], correct: 1, explanationEs: '"Let alone" se usa para decir que algo es aún MENOS probable. Si apenas puede pagar el alquiler, mucho menos unas vacaciones.' },
        { sentence: 'The data is incomplete. _____, we can still draw some preliminary conclusions.', question: 'Choose the correct concessive marker:', options: ['Be that as it may', 'Not to mention', 'By the same token', 'In light of'], correct: 0, explanationEs: '"Be that as it may" = sea como fuere. Reconoce el problema (datos incompletos) y continúa con la conclusión.' },
        { sentence: '_____ your hard work, I feel the proposal needs significant revision.', question: 'Choose the correct expression:', options: ['Much as I appreciate', 'Not to mention', 'Having said that', 'Let alone'], correct: 0, explanationEs: '"Much as I appreciate" = por mucho que agradezca. Concesión educada antes de un desacuerdo.' },
        { sentence: '_____ recent budget cuts, the department has restructured its priorities.', question: 'Choose the correct marker:', options: ['Having said that', 'In light of', 'Let alone', 'Not to mention'], correct: 1, explanationEs: '"In light of" = a la luz de. Se usa para indicar que una acción se toma considerando cierta evidencia o circunstancias.' },
      ],
      controlled: [
        { prompt: 'Complete: "The food was terrible, _____ overpriced." (add an extra negative point)', promptEs: 'Completa: "La comida era terrible, _____ carísima." (añade un punto negativo extra)', answer: 'not to mention', hint: '"not to mention" adds emphasis to an additional point.' },
        { prompt: 'Rewrite using "let alone": "He cannot cook an egg. He definitely cannot cook a gourmet meal."', promptEs: 'Reescribe usando "let alone":', answer: 'He can barely cook an egg, let alone a gourmet meal.', hint: 'Easy item first, then "let alone" + harder item.' },
        { prompt: 'Connect: "The reviews were harsh." + "We learned valuable lessons." using concessive marker.', promptEs: 'Conecta las dos oraciones usando un marcador concesivo:', answer: 'The reviews were harsh. Having said that, we learned valuable lessons.', hint: 'Use "Having said that" or "Be that as it may" to connect.' },
      ]
    },
    recycleInTopics: ['b2-concession-clauses', 'c1-academic-writing', 'c2-register-and-style'],
    tipEs: '💡 Nivel de formalidad de los conectores C1: MUY FORMAL (escrito): "be that as it may", "notwithstanding", "to say nothing of". SEMI-FORMAL (escrito/hablado): "having said that", "in light of", "by the same token". INFORMAL/HABLADO: "mind you", "that said". Truco para "let alone": siempre va de FÁCIL → DIFÍCIL: "can\'t walk, let alone run" (✓), nunca al revés.'
  },

  // ═══════════════════════════════════════════════
  // C1 — Distancing and Impersonal Language
  // ═══════════════════════════════════════════════
  {
    id: 'c1-distancing-language',
    title: 'Distancing and Impersonal Language',
    titleEs: 'Lenguaje Distanciador e Impersonal',
    level: 'C1',
    cefrLevel: 5,
    category: 'pragmatics',
    priority: 'medium',
    prerequisiteIds: ['c1-hedging'],
    explanation: 'Distancing and impersonal language allows speakers and writers to present information objectively, avoid personal attribution, and hedge claims in academic, journalistic, and professional contexts. Key structures include impersonal "it" with passive reporting verbs (it is believed that, it has been suggested that), "there" as an impersonal subject (there appears to be, there is said to be), and distancing use of "would" (this would suggest, one would expect). These are essential for academic essays, research papers, and formal reports.',
    explanationEs: 'El lenguaje distanciador e impersonal permite a hablantes y escritores presentar información de manera objetiva, evitar atribución personal y matizar afirmaciones en contextos académicos, periodísticos y profesionales. Las estructuras clave incluyen el "it" impersonal con verbos de reporte en pasiva (it is believed that, it has been suggested that), "there" como sujeto impersonal (there appears to be, there is said to be), y el uso distanciador de "would" (this would suggest, one would expect). Son esenciales para ensayos académicos, artículos de investigación e informes formales.',
    formationRules: [
      {
        label: 'Impersonal "it" structures',
        labelEs: 'Estructuras impersonales con "it"',
        formula: 'It + is/has been + past participle + that + clause',
        steps: [
          { step: 'It is believed / thought / considered + that: general belief', stepEs: '"It is believed/thought/considered that": creencia general', example: 'It is widely believed that climate change is accelerating.', translation: 'Se cree ampliamente que el cambio climático se está acelerando.' },
          { step: 'It has been suggested / argued / claimed + that: reported view', stepEs: '"It has been suggested/argued/claimed that": opinión reportada', example: 'It has been suggested that the policy needs revision.', translation: 'Se ha sugerido que la política necesita revisión.' },
          { step: 'It is widely acknowledged / generally accepted + that: consensus', stepEs: '"It is widely acknowledged/generally accepted that": consenso', example: 'It is generally accepted that exercise improves mental health.', translation: 'Se acepta generalmente que el ejercicio mejora la salud mental.' },
          { step: 'It would appear / seem + that: cautious observation', stepEs: '"It would appear/seem that": observación cautelosa', example: 'It would appear that the initial findings were inaccurate.', translation: 'Parecería que los hallazgos iniciales eran inexactos.' },
        ]
      },
      {
        label: '"There" as impersonal subject',
        labelEs: '"There" como sujeto impersonal',
        formula: 'There + appears/seems/is said/is believed + to be/to have',
        steps: [
          { step: 'There appears / seems to be + noun: cautious existence', stepEs: '"There appears/seems to be" + sustantivo: existencia cautelosa', example: 'There appears to be a significant gap in the research.', translation: 'Parece haber una brecha significativa en la investigación.' },
          { step: 'There is said / believed / reported to be: indirect reporting', stepEs: '"There is said/believed/reported to be": reporte indirecto', example: 'There is said to be a hidden passage beneath the castle.', translation: 'Se dice que hay un pasaje oculto debajo del castillo.' },
          { step: 'There is no denying that / There is little doubt that: strong impersonal assertion', stepEs: '"There is no denying/little doubt that": aserción impersonal fuerte', example: 'There is little doubt that technology has transformed education.', translation: 'Hay pocas dudas de que la tecnología ha transformado la educación.' },
        ]
      },
      {
        label: 'Distancing with "would" and "one"',
        labelEs: 'Distanciamiento con "would" y "one"',
        steps: [
          { step: 'This/The evidence would suggest + that: tentative conclusion', stepEs: '"This/The evidence would suggest that": conclusión tentativa', example: 'The evidence would suggest that early intervention is crucial.', translation: 'La evidencia sugeriría que la intervención temprana es crucial.' },
          { step: 'One might argue / expect / assume + that: impersonal opinion', stepEs: '"One might argue/expect/assume that": opinión impersonal', example: 'One might argue that the benefits outweigh the risks.', translation: 'Se podría argumentar que los beneficios superan los riesgos.' },
          { step: 'It could be argued that: depersonalized disagreement', stepEs: '"It could be argued that": desacuerdo despersonalizado', example: 'It could be argued that the government has not done enough.', translation: 'Se podría argumentar que el gobierno no ha hecho suficiente.' },
        ]
      },
    ],
    signalWords: [
      { word: 'it is believed that', meaning: 'people generally believe that', meaningEs: 'se cree que' },
      { word: 'it has been suggested that', meaning: 'someone has proposed that', meaningEs: 'se ha sugerido que' },
      { word: 'there appears to be', meaning: 'it seems there is', meaningEs: 'parece haber' },
      { word: 'one might argue', meaning: 'a person could reasonably say', meaningEs: 'se podría argumentar' },
      { word: 'the evidence would suggest', meaning: 'the data tentatively indicates', meaningEs: 'la evidencia sugeriría' },
      { word: 'it is widely acknowledged', meaning: 'most people accept that', meaningEs: 'se reconoce ampliamente' },
    ],
    l1Contrast: {
      concept: 'Impersonal constructions: Spanish "se" vs. English "it/there" passives',
      conceptEs: 'Construcciones impersonales: "se" español vs. pasivas con "it/there" en inglés',
      spanishBehavior: 'Spanish uses reflexive "se" constructions extensively for impersonal statements: "se cree que", "se dice que", "se ha demostrado que". These are simple and very common in all registers.',
      englishBehavior: 'English uses "it + passive + that" (it is believed that) or "there + be + said/believed + to" (there is said to be). These structures are more complex and primarily used in formal/academic contexts. Spoken English prefers "people say", "they think".',
      contrastExamples: [
        { english: 'It is believed that the economy will recover.', spanish: 'Se cree que la economía se recuperará.', note: 'Spanish "se cree" is one word; English needs "it is believed that" — a longer construction.' },
        { english: 'There is said to be a treasure hidden in the mountain.', spanish: 'Se dice que hay un tesoro escondido en la montaña.', note: 'English "there is said to be" combines impersonal "there" with passive reporting. Spanish simply uses "se dice que hay".' },
        { english: 'One might argue that the policy is unfair.', spanish: 'Se podría argumentar que la política es injusta.', note: '"One" as impersonal subject is very formal in English. Spanish "se" is neutral in register.' },
      ]
    },
    predictedErrors: [
      { error: 'People say that the economy will recover.', correction: 'It is believed / widely held that the economy will recover.', whyEs: '"People say" es demasiado directo e informal para escritura académica. En C1, se esperan estructuras impersonales: "It is believed that" o "It is widely held that".', frequency: 'very common' },
      { error: 'It is said by experts that the theory is correct.', correction: 'It is widely accepted / generally held that the theory is correct.', whyEs: 'Añadir "by experts" en una estructura impersonal la hace redundante y torpe. La estructura impersonal ya implica que la fuente es inespecífica. Si quieres citar expertos: "Experts suggest that..."', frequency: 'common' },
      { error: 'It can be argued that the results are not significant.', correction: 'It could be argued that the results are not significant.', whyEs: '"Could" es más tentativo y académico que "can" en contextos de distanciamiento. "Can" suena demasiado directo y seguro; "could" es más matizado.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ that regular exercise reduces the risk of heart disease.', question: 'Choose the best impersonal structure:', options: ['People know', 'It is widely acknowledged', 'Everyone says', 'We all believe'], correct: 1, explanationEs: '"It is widely acknowledged that" es la estructura impersonal formal apropiada para C1. Las otras opciones son demasiado directas o informales.' },
        { sentence: '_____ a significant correlation between sleep quality and academic performance.', question: 'Choose the best impersonal "there" structure:', options: ['There has', 'There appears to be', 'It has', 'There is having'], correct: 1, explanationEs: '"There appears to be" es la estructura impersonal cautelosa con "there". Más tentativa que "there is", perfecta para afirmaciones académicas.' },
        { sentence: '_____ that the current approach is insufficient.', question: 'Choose the best distancing expression:', options: ['I think', 'One might argue', 'You could say', 'Everybody knows'], correct: 1, explanationEs: '"One might argue that" es impersonal y tentativo — perfecto para escritura académica C1. Evita la primera persona y el tono directo.' },
      ],
      controlled: [
        { prompt: 'Make impersonal: "Scientists believe that the virus mutates rapidly."', promptEs: 'Haz impersonal: "Los científicos creen que el virus muta rápidamente."', answer: 'It is believed that the virus mutates rapidly.', hint: 'It + is + past participle + that...' },
        { prompt: 'Make impersonal: "People say there is a ghost in the old building."', promptEs: 'Haz impersonal: "La gente dice que hay un fantasma en el edificio viejo."', answer: 'There is said to be a ghost in the old building.', hint: 'There + is said + to be...' },
        { prompt: 'Rewrite with distancing: "I think the data shows we need to change our strategy."', promptEs: 'Reescribe con distanciamiento: "Creo que los datos muestran que necesitamos cambiar nuestra estrategia."', answer: 'The data would suggest that a change in strategy is needed.', hint: 'Use "would suggest" to distance and passive for the conclusion.' },
      ]
    },
    recycleInTopics: ['c1-hedging', 'c1-academic-writing', 'c2-register-and-style'],
    tipEs: '💡 El truco del "triángulo de distanciamiento": (1) "It" impersonal: "It is believed that..." — quitas al agente. (2) "There" impersonal: "There appears to be..." — suavizas la existencia. (3) "Would": "The evidence would suggest..." — haces tentativa la conclusión. Cuanto más formal el texto, más distanciamiento necesitas. En el CAE/CPE, los examinadores BUSCAN estas estructuras. Recuerda: en español usas "se" para todo esto; en inglés tienes que elegir entre "it", "there", "one" y "would".'
  },

  // ═══════════════════════════════════════════════
  // C1 — Mixed Conditionals in Depth
  // ═══════════════════════════════════════════════
  {
    id: 'c1-mixed-conditionals-advanced',
    title: 'Mixed Conditionals in Depth',
    titleEs: 'Condicionales Mixtos en Profundidad',
    level: 'C1',
    cefrLevel: 5,
    category: 'verb-tenses',
    priority: 'high',
    prerequisiteIds: ['b2-conditionals-all'],
    explanation: 'Mixed conditionals combine elements from different conditional types to express complex hypothetical relationships where the time of the condition and the time of the result are different. There are four main patterns: (1) Past condition → present result ("If I had studied medicine, I would be a doctor now"), (2) Present condition → past result ("If I were braver, I would have spoken up"), (3) Past condition → future result ("If she hadn\'t missed the train, she would be arriving now"), and (4) Inverted conditionals without "if" (Had I known, Were she to agree, Should they decide). Mastery of these patterns is a key C1 competence.',
    explanationEs: 'Los condicionales mixtos combinan elementos de diferentes tipos condicionales para expresar relaciones hipotéticas complejas donde el tiempo de la condición y el tiempo del resultado son diferentes. Hay cuatro patrones principales: (1) Condición pasada → resultado presente ("If I had studied medicine, I would be a doctor now"), (2) Condición presente → resultado pasado ("If I were braver, I would have spoken up"), (3) Condición pasada → resultado futuro ("If she hadn\'t missed the train, she would be arriving now"), y (4) Condicionales invertidos sin "if" (Had I known, Were she to agree, Should they decide). Dominar estos patrones es una competencia clave de C1.',
    formationRules: [
      {
        label: 'Past condition → Present result',
        labelEs: 'Condición pasada → Resultado presente',
        formula: 'If + past perfect, would + base verb (present meaning)',
        steps: [
          { step: 'If + had + past participle, ... would + base verb', stepEs: 'If + had + participio pasado, ... would + verbo base', example: 'If I had studied medicine, I would be a doctor now.', translation: 'Si hubiera estudiado medicina, sería médico ahora.' },
          { step: 'The condition is PAST (something that didn\'t happen), the result is PRESENT (current situation)', stepEs: 'La condición es PASADA (algo que no ocurrió), el resultado es PRESENTE (situación actual)', example: 'If she had taken the job, she wouldn\'t be unemployed today.', translation: 'Si hubiera aceptado el trabajo, no estaría desempleada hoy.' },
          { step: 'Time markers help: past condition (yesterday, last year) → present result (now, today)', stepEs: 'Los marcadores temporales ayudan: condición pasada (ayer, el año pasado) → resultado presente (ahora, hoy)', example: 'If we had left earlier, we would be there by now.', translation: 'Si hubiéramos salido antes, ya estaríamos allí.' },
        ]
      },
      {
        label: 'Present condition → Past result',
        labelEs: 'Condición presente → Resultado pasado',
        formula: 'If + past simple, would have + past participle',
        steps: [
          { step: 'If + past simple (present/permanent meaning), ... would have + past participle', stepEs: 'If + pasado simple (significado presente/permanente), ... would have + participio pasado', example: 'If I were braver, I would have spoken up at the meeting.', translation: 'Si yo fuera más valiente, habría hablado en la reunión.' },
          { step: 'The condition is about a PRESENT characteristic or state, the result is about a PAST event', stepEs: 'La condición trata sobre una característica o estado PRESENTE, el resultado sobre un evento PASADO', example: 'If she weren\'t so shy, she would have asked for a promotion.', translation: 'Si ella no fuera tan tímida, habría pedido un ascenso.' },
          { step: 'Note: "If I were" (subjunctive) is preferred in formal English over "If I was"', stepEs: 'Nota: "If I were" (subjuntivo) es preferido en inglés formal sobre "If I was"', example: 'If he weren\'t so stubborn, he would have accepted the offer.', translation: 'Si no fuera tan terco, habría aceptado la oferta.' },
        ]
      },
      {
        label: 'Inverted conditionals (without "if")',
        labelEs: 'Condicionales invertidos (sin "if")',
        formula: 'Had/Were/Should + subject + ... , main clause',
        steps: [
          { step: 'Had + subject + past participle = If + subject + had + past participle', stepEs: 'Had + sujeto + participio pasado = If + sujeto + had + participio pasado', example: 'Had I known about the delay, I would have taken a different route.', translation: 'De haber sabido del retraso, habría tomado una ruta diferente.' },
          { step: 'Were + subject + to + base verb = If + subject + were to', stepEs: 'Were + sujeto + to + verbo base = If + sujeto + were to', example: 'Were she to agree, we could start the project immediately.', translation: 'Si ella estuviera de acuerdo, podríamos empezar el proyecto inmediatamente.' },
          { step: 'Should + subject + base verb = If + subject + should / If + subject + present', stepEs: 'Should + sujeto + verbo base = If + sujeto + should / presente', example: 'Should they decide to expand, they will need additional funding.', translation: 'Si decidieran expandirse, necesitarán financiación adicional.' },
        ]
      },
    ],
    signalWords: [
      { word: 'had I known', meaning: 'inverted form of "if I had known"', meaningEs: 'forma invertida de "si hubiera sabido"' },
      { word: 'were she to', meaning: 'inverted form of "if she were to"', meaningEs: 'forma invertida de "si ella fuera a"' },
      { word: 'should you need', meaning: 'inverted form of "if you need/should need"', meaningEs: 'forma invertida de "si necesitaras"' },
      { word: 'by now', meaning: 'at this point in time (signals present result)', meaningEs: 'a estas alturas (señala resultado presente)' },
      { word: 'today / now', meaning: 'time marker for present result in mixed conditional', meaningEs: 'marcador temporal para resultado presente en condicional mixto' },
    ],
    l1Contrast: {
      concept: 'Mixed conditionals: Spanish subjunctive flexibility vs. English fixed verb-form combinations',
      conceptEs: 'Condicionales mixtos: flexibilidad del subjuntivo español vs. combinaciones fijas de formas verbales en inglés',
      spanishBehavior: 'Spanish mixes subjunctive tenses naturally: "Si hubiera estudiado (pluscuamperfecto subjuntivo), sería (condicional simple) médico". The subjunctive system makes mixing feel natural. Inversion in conditionals is very rare in Spanish.',
      englishBehavior: 'English requires specific verb-form combinations: past perfect + would + base verb, OR past simple + would have + past participle. Inversion (Had I known, Were she here, Should you need) is formal and literary but tested at C1/C2.',
      contrastExamples: [
        { english: 'If I had studied, I would be a doctor now.', spanish: 'Si hubiera estudiado, sería médico ahora.', note: 'Past perfect (had studied) → present result (would be). Spanish: pluscuamperfecto subjuntivo → condicional simple. Very parallel.' },
        { english: 'If I were braver, I would have spoken up.', spanish: 'Si fuera más valiente, habría hablado.', note: 'Present state (were braver) → past result (would have spoken). Spanish: imperfecto subjuntivo → condicional compuesto.' },
        { english: 'Had I known, I would have helped.', spanish: 'De haberlo sabido, habría ayudado.', note: 'Inverted conditional. Spanish uses "de + infinitivo compuesto" as an alternative to "si + pluscuamperfecto subjuntivo".' },
      ]
    },
    predictedErrors: [
      { error: 'If I would have studied, I would be a doctor.', correction: 'If I had studied, I would be a doctor.', whyEs: 'Error MUY frecuente: usar "would" en la cláusula del "if". En inglés, NUNCA se pone "would" después de "if" en condicionales. Es "If I HAD studied", no "If I would have studied".', frequency: 'very common' },
      { error: 'If I was braver, I would have spoken up.', correction: 'If I were braver, I would have spoken up.', whyEs: 'En condicionales hipotéticos, se prefiere "were" para todas las personas en inglés formal (subjuntivo): "If I were", "If he were", "If she were". "Was" se acepta en inglés informal pero no en C1.', frequency: 'common' },
      { error: 'If I had known, I would helped.', correction: 'If I had known, I would have helped.', whyEs: 'El resultado del tercer condicional requiere "would HAVE + participio pasado". No se puede omitir "have": "would have helped" (no "would helped").', frequency: 'common' },
      { error: 'I had known about it, I would have acted differently.', correction: 'Had I known about it, I would have acted differently.', whyEs: 'En la inversión condicional, el sujeto debe ir entre "had" y el participio: "Had I known" (no "I had known" — eso suena a afirmación normal, no a condicional invertido).', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: 'If she _____ the job offer, she _____ working abroad now.', question: 'Choose the correct mixed conditional forms:', options: ['accepted / would be', 'had accepted / would be', 'would accept / was', 'has accepted / will be'], correct: 1, explanationEs: 'Condicional mixto: condición pasada (had accepted) → resultado presente (would be). Ella no aceptó en el PASADO → efecto en el PRESENTE.' },
        { sentence: '_____ I known about the traffic, I would have left earlier.', question: 'Choose the correct inverted form:', options: ['If', 'Had', 'Have', 'Should'], correct: 1, explanationEs: '"Had I known" = "If I had known". Es la forma invertida formal del tercer condicional. "Had" reemplaza a "If" y el sujeto se invierte.' },
        { sentence: 'If he _____ so lazy, he _____ the deadline last week.', question: 'Choose the correct present→past mixed conditional:', options: ['weren\'t / would have met', 'hadn\'t been / would meet', 'isn\'t / would have met', 'wasn\'t / would meet'], correct: 0, explanationEs: 'Condición presente (weren\'t so lazy — es perezoso AHORA) → resultado pasado (would have met — no cumplió el plazo LA SEMANA PASADA). "Weren\'t" (subjuntivo) es preferido en C1.' },
        { sentence: '_____ she to resign, the whole team would collapse.', question: 'Choose the correct inverted conditional:', options: ['Should', 'Were', 'Had', 'If'], correct: 1, explanationEs: '"Were she to resign" = "If she were to resign". Inversión con "were + to + infinitivo" para hipótesis formales sobre el futuro.' },
      ],
      controlled: [
        { prompt: 'Rewrite with inversion: "If I had realized the importance, I would have paid more attention."', promptEs: 'Reescribe con inversión: "Si me hubiera dado cuenta de la importancia, habría prestado más atención."', answer: 'Had I realized the importance, I would have paid more attention.', hint: 'Had + subject + past participle (remove "if").' },
        { prompt: 'Create a mixed conditional (past→present): "I didn\'t learn French as a child. I can\'t speak it now."', promptEs: 'Crea un condicional mixto (pasado→presente):', answer: 'If I had learned French as a child, I would be able to speak it now.', hint: 'If + had + past participle, would + base verb + now.' },
        { prompt: 'Create a mixed conditional (present→past): "He is very proud. He did not ask for help."', promptEs: 'Crea un condicional mixto (presente→pasado):', answer: 'If he weren\'t so proud, he would have asked for help.', hint: 'If + past simple (present meaning), would have + past participle (past result).' },
      ]
    },
    recycleInTopics: ['b2-conditionals-all', 'c1-inversion', 'c2-hypothetical-past'],
    tipEs: '💡 Los condicionales mixtos son como un viaje en el tiempo: mezclas CUANDO fue la condición con CUANDO es el resultado. Truco: pregúntate "¿La condición es pasada o presente?" y "¿El resultado es pasado o presente?". Si son DIFERENTES → ¡condicional mixto! Para la inversión formal, recuerda: Had I known = Si hubiera sabido, Were she here = Si ella estuviera aquí, Should you need = Si necesitaras. Y la regla de oro: NUNCA "would" después de "if".'
  },

  // ═══════════════════════════════════════════════
  // C2 — Complex Tag Questions
  // ═══════════════════════════════════════════════
  {
    id: 'c2-complex-tag-questions',
    title: 'Complex Tag Questions',
    titleEs: 'Tag Questions Complejas',
    level: 'C2',
    cefrLevel: 6,
    category: 'pragmatics',
    priority: 'medium',
    prerequisiteIds: ['b1-modal-deduction'],
    explanation: 'At C2 level, tag questions go far beyond simple polarity reversal. When the subject is a negative word (nobody, nothing, no one, nowhere), the tag must be POSITIVE because the sentence is already negative. Indefinite pronouns require careful pronoun agreement in the tag: everybody/everyone/someone/anyone → "they"; something/anything/nothing/everything → "it". Several special patterns exist: "Let\'s go" → "shall we?", "I am right" → "aren\'t I?" (NOT "amn\'t I"), and imperatives use "will you / won\'t you / would you" as softening or invitation tags. Mastering these patterns is essential for natural, fluent English.',
    explanationEs: 'En nivel C2, las tag questions van mucho más allá de la simple inversión de polaridad. Cuando el sujeto es una palabra negativa (nobody, nothing, no one), la tag debe ser POSITIVA porque la oración ya es negativa. Los pronombres indefinidos requieren concordancia cuidadosa: everybody/everyone/someone/anyone → "they"; something/anything/nothing/everything → "it". Existen varios patrones especiales: "Let\'s go" → "shall we?", "I am right" → "aren\'t I?" (NO "amn\'t I"), y los imperativos usan "will you / won\'t you / would you" como tags de suavización o invitación.',
    formationRules: [
      {
        label: 'Negative subject tags',
        labelEs: 'Tags con sujeto negativo',
        formula: 'Negative subject + verb, positive tag?',
        steps: [
          { step: 'Nobody/no one/nothing = already negative → tag must be POSITIVE', stepEs: 'Nobody/no one/nothing = ya negativo → la tag debe ser POSITIVA', example: 'Nobody came, did they?', translation: 'Nadie vino, ¿verdad?' },
          { step: 'Nothing works here → use "it" + positive auxiliary in tag', stepEs: 'Nothing works here → usa "it" + auxiliar positivo en la tag', example: 'Nothing works, does it?', translation: 'Nada funciona, ¿verdad?' },
          { step: 'There\'s no solution → "there" stays in the tag', stepEs: 'There\'s no solution → "there" se mantiene en la tag', example: 'There\'s no solution, is there?', translation: 'No hay solución, ¿verdad?' },
        ]
      },
      {
        label: 'Indefinite pronoun agreement',
        labelEs: 'Concordancia de pronombres indefinidos',
        formula: 'Everybody/someone/anyone → they; something/everything → it',
        steps: [
          { step: 'Everybody/everyone/somebody/someone/anyone → use "they" in the tag', stepEs: 'Everybody/everyone/somebody/someone/anyone → usa "they" en la tag', example: 'Everybody knows the answer, don\'t they?', translation: 'Todos saben la respuesta, ¿no?' },
          { step: 'Something/everything/anything → use "it" in the tag', stepEs: 'Something/everything/anything → usa "it" en la tag', example: 'Something happened, didn\'t it?', translation: 'Algo pasó, ¿no?' },
        ]
      },
      {
        label: 'Special tag patterns',
        labelEs: 'Patrones especiales de tags',
        steps: [
          { step: 'Let\'s + verb → "shall we?"', stepEs: 'Let\'s + verbo → "shall we?"', example: 'Let\'s go, shall we?', translation: 'Vamos, ¿vale?' },
          { step: 'I am + complement → "aren\'t I?" (NOT "amn\'t I")', stepEs: 'I am + complemento → "aren\'t I?" (NO "amn\'t I")', example: 'I\'m right, aren\'t I?', translation: 'Tengo razón, ¿no?' },
          { step: 'Imperative → "will you / won\'t you / would you" (invitation or softener)', stepEs: 'Imperativo → "will you / won\'t you / would you" (invitación o suavizador)', example: 'Have a seat, won\'t you?', translation: 'Siéntate, ¿quieres?' },
          { step: 'She\'d rather + verb → "wouldn\'t she?" (d = would)', stepEs: 'She\'d rather + verbo → "wouldn\'t she?" (d = would)', example: 'She\'d rather stay, wouldn\'t she?', translation: 'Ella preferiría quedarse, ¿no?' },
        ]
      },
    ],
    signalWords: [
      { word: 'nobody / no one', meaning: 'negative subject — requires positive tag', meaningEs: 'sujeto negativo — requiere tag positiva' },
      { word: 'nothing', meaning: 'negative subject (use "it" in tag)', meaningEs: 'sujeto negativo (usa "it" en la tag)' },
      { word: 'everybody / everyone', meaning: 'use "they" in the tag', meaningEs: 'usa "they" en la tag' },
      { word: 'let\'s', meaning: 'tag = "shall we?"', meaningEs: 'tag = "shall we?"' },
      { word: 'I am', meaning: 'tag = "aren\'t I?"', meaningEs: 'tag = "aren\'t I?"' },
    ],
    l1Contrast: {
      concept: 'Tag questions: Spanish universal "¿no?" / "¿verdad?" vs. English auxiliary-matching tags',
      conceptEs: 'Tag questions: "¿no?" / "¿verdad?" universal en español vs. tags con auxiliar concordante en inglés',
      spanishBehavior: 'Spanish uses "¿no?" or "¿verdad?" universally for all tag questions regardless of tense, subject, or polarity. "Nadie vino, ¿verdad?" "Todos lo saben, ¿no?" No auxiliary matching is needed.',
      englishBehavior: 'English requires the tag to match the auxiliary, tense, subject pronoun, AND reverse the polarity. Negative statements (including those with nobody/nothing) get positive tags. Special forms exist for "let\'s", "I am", and imperatives.',
      contrastExamples: [
        { english: 'Nobody came, did they?', spanish: 'Nadie vino, ¿verdad?', note: '"Nobody" makes the sentence negative → tag must be positive ("did they?"). Spanish just uses "¿verdad?" regardless.' },
        { english: 'Everybody knows, don\'t they?', spanish: 'Todos lo saben, ¿no?', note: '"Everybody" is singular in form but plural in meaning → "they" in the tag. Spanish: "todos" is naturally plural.' },
        { english: 'I\'m right, aren\'t I?', spanish: 'Tengo razón, ¿no?', note: 'Special form: "aren\'t I?" (not "amn\'t I?" which doesn\'t exist). Spanish simply adds "¿no?".' },
      ]
    },
    predictedErrors: [
      { error: 'Everybody knows, doesn\'t he?', correction: 'Everybody knows, don\'t they?', whyEs: '"Everybody" parece singular pero en las tag questions se trata como plural con "they". Es un error de concordancia muy común para hispanohablantes que asocian "everybody" con "él/todo el mundo" (singular).', frequency: 'common' },
      { error: 'Nothing is ready, isn\'t it?', correction: 'Nothing is ready, is it?', whyEs: '"Nothing" ya es negativo, así que la tag debe ser POSITIVA ("is it?"). Usar "isn\'t it?" crea un doble negativo incorrecto. Regla: si el sujeto es negativo (nobody, nothing, no one), la tag es positiva.', frequency: 'very common' },
      { error: 'I am right, amn\'t I?', correction: 'I\'m right, aren\'t I?', whyEs: '"Amn\'t" no existe en inglés estándar. La forma correcta es "aren\'t I?" — es la única excepción donde "aren\'t" se usa con "I". Es una irregularidad que hay que memorizar.', frequency: 'common' },
      { error: 'Let\'s go, will we?', correction: 'Let\'s go, shall we?', whyEs: 'La tag para "let\'s" siempre es "shall we?" — nunca "will we?" ni "won\'t we?". Es una forma fija que hay que aprender.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: 'Nobody called yesterday, _____ ?', question: 'Choose the correct tag:', options: ['didn\'t they', 'did they', 'didn\'t he', 'haven\'t they'], correct: 1, explanationEs: '"Nobody" hace la oración negativa → la tag debe ser positiva: "did they?". Usamos "they" como pronombre genérico para "nobody".' },
        { sentence: 'Everybody enjoyed the party, _____ ?', question: 'Choose the correct tag:', options: ['didn\'t he', 'don\'t they', 'didn\'t they', 'didn\'t we'], correct: 2, explanationEs: '"Everybody" se refiere a personas en plural → "they". El verbo es pasado (enjoyed) → "didn\'t they?".' },
        { sentence: 'Let\'s take a break, _____ ?', question: 'Choose the correct tag:', options: ['will we', 'shall we', 'won\'t we', 'do we'], correct: 1, explanationEs: '"Let\'s" siempre lleva la tag "shall we?". Es una forma fija.' },
        { sentence: 'I\'m being unreasonable, _____ ?', question: 'Choose the correct tag:', options: ['amn\'t I', 'aren\'t I', 'isn\'t I', 'am not I'], correct: 1, explanationEs: '"I am" / "I\'m" siempre lleva la tag "aren\'t I?". "Amn\'t I" no existe en inglés estándar.' },
        { sentence: 'Nothing is ready yet, _____ ?', question: 'Negative subject (nothing):', options: ['isn\'t it', 'is it', 'are they', 'isn\'t there'], correct: 1, explanationEs: '"Nothing" ya es negativo → tag positiva. "it" para "nothing".' },
      ],
      controlled: [
        { prompt: 'Add the correct tag: "Nothing has changed, _____ ?"', promptEs: 'Añade la tag correcta: "Nada ha cambiado, _____ ?"', answer: 'Nothing has changed, has it?', hint: '"Nothing" = already negative → positive tag. Auxiliary = "has", pronoun for "nothing" = "it".' },
        { prompt: 'Add the correct tag: "Someone left their bag here, _____ ?"', promptEs: 'Añade la tag correcta: "Alguien dejó su bolsa aquí, _____ ?"', answer: 'Someone left their bag here, didn\'t they?', hint: '"Someone" is positive → negative tag. Use "they" for "someone". Past tense → "didn\'t".' },
        { prompt: 'Add the correct tag: "Have a seat, _____ ?" (polite invitation)', promptEs: 'Añade la tag correcta: "Siéntate, _____ ?" (invitación cortés)', answer: 'Have a seat, won\'t you?', hint: 'Imperative invitation → "won\'t you?" as a polite softener.' },
        { prompt: 'Correct: Everybody knows, doesn\'t he?', promptEs: 'Corrige: Todos lo saben, ¿no?', answer: 'Everybody knows, don\'t they?', hint: 'Everybody → "they" en la tag (no "he")' },
        { prompt: 'Add the correct tag: "There\'s no point waiting, _____ ?"', promptEs: 'Añade la tag correcta: "No tiene sentido esperar, _____ ?"', answer: "There's no point waiting, is there?", hint: '"There" se mantiene en la tag. Negativo → tag positiva.' },
      ]
    },
    recycleInTopics: ['b1-tag-questions', 'c1-pragmatics', 'c2-discourse-markers'],
    tipEs: '💡 La regla universal de las tag questions: oración negativa → tag positiva, oración positiva → tag negativa. Pero OJO: "nobody", "nothing", "no one", "never", "hardly", "scarcely" ya son negativos aunque no tengan "not". Así que "Nobody came" es negativo → "did they?" (positivo). Y recuerda los tres patrones especiales: Let\'s → shall we, I am → aren\'t I, imperativo → will/won\'t/would you.'
  },

  // ═══════════════════════════════════════════════
  // C2 — Formal and Literary Conditionals
  // ═══════════════════════════════════════════════
  {
    id: 'c2-literary-conditionals',
    title: 'Formal and Literary Conditionals',
    titleEs: 'Condicionales Formales y Literarios',
    level: 'C2',
    cefrLevel: 6,
    category: 'verb-tenses',
    priority: 'medium',
    prerequisiteIds: ['c1-mixed-conditionals-advanced'],
    explanation: 'At C2 level, conditionals extend beyond standard if-clauses into formal, literary, and archaic patterns. These include: (1) "Were I to know" = "If I knew" (formal present/future hypothesis), (2) "Had it not been for" = "If it hadn\'t been for" (past counterfactual attribution), (3) "Should you require" = "If you should require" (formal future unlikely), (4) "But for + noun" = "If it were not for" (concise attribution), (5) "Lest + subjunctive" = "in order that ... not" (formal purpose/prevention). These structures are common in legal, academic, and literary texts, and are tested in CPE/C2 examinations.',
    explanationEs: 'En nivel C2, los condicionales se extienden más allá de las cláusulas estándar con "if" hacia patrones formales, literarios y arcaicos: (1) "Were I to know" = "Si yo supiera" (hipótesis formal presente/futura), (2) "Had it not been for" = "De no haber sido por" (contrafactual pasado de atribución), (3) "Should you require" = "Si necesitara" (futuro improbable formal), (4) "But for + sustantivo" = "Si no fuera por" (atribución concisa), (5) "Lest + subjuntivo" = "para que no" (propósito/prevención formal). Estas estructuras son comunes en textos legales, académicos y literarios.',
    formationRules: [
      {
        label: 'Were + subject + to infinitive (present/future)',
        labelEs: 'Were + sujeto + to infinitivo (presente/futuro)',
        formula: 'Were + S + to + base verb, S + would/could/might + base verb',
        steps: [
          { step: 'Replace "If + subject + were to" with "Were + subject + to"', stepEs: 'Reemplaza "If + sujeto + were to" por "Were + sujeto + to"', example: 'Were I to discover the truth, I would be devastated.', translation: 'Si yo descubriera la verdad, estaría devastado.' },
          { step: 'This form sounds formal/literary and is used in written English', stepEs: 'Esta forma suena formal/literaria y se usa en inglés escrito', example: 'Were it not for the fact that she\'s qualified, we wouldn\'t consider her.', translation: 'Si no fuera por el hecho de que está cualificada, no la consideraríamos.' },
        ]
      },
      {
        label: 'Had + subject + past participle (past counterfactual)',
        labelEs: 'Had + sujeto + participio pasado (contrafactual pasado)',
        formula: 'Had + S + (not) + past participle, S + would have + past participle',
        steps: [
          { step: 'Replace "If + subject + had (not)" with "Had + subject + (not)"', stepEs: 'Reemplaza "If + sujeto + had (not)" por "Had + sujeto + (not)"', example: 'Had it not been for your help, I would have failed.', translation: 'De no haber sido por tu ayuda, habría fracasado.' },
          { step: '"Had it not been for" = "If it had not been for" = "But for"', stepEs: '"Had it not been for" = "If it had not been for" = "But for"', example: 'Had she not intervened, the situation would have worsened.', translation: 'Si ella no hubiera intervenido, la situación habría empeorado.' },
        ]
      },
      {
        label: 'Should + subject + base form (future unlikely)',
        labelEs: 'Should + sujeto + forma base (futuro improbable)',
        formula: 'Should + S + base verb, imperative / S + will/would + verb',
        steps: [
          { step: 'Replace "If + subject + should" with "Should + subject"', stepEs: 'Reemplaza "If + sujeto + should" por "Should + sujeto"', example: 'Should you require any assistance, please do not hesitate to contact us.', translation: 'Si necesitara alguna asistencia, no dude en contactarnos.' },
          { step: 'Common in formal letters, legal documents, and business English', stepEs: 'Común en cartas formales, documentos legales e inglés de negocios', example: 'Should the need arise, we will provide additional resources.', translation: 'Si surgiera la necesidad, proporcionaremos recursos adicionales.' },
        ]
      },
      {
        label: 'But for + noun/gerund',
        labelEs: 'But for + sustantivo/gerundio',
        formula: 'But for + noun, S + would (have) + verb',
        steps: [
          { step: '"But for" = "If it were not for" (present) or "If it had not been for" (past)', stepEs: '"But for" = "Si no fuera por" (presente) o "Si no hubiera sido por" (pasado)', example: 'But for the rain, we would have had a wonderful picnic.', translation: 'De no ser por la lluvia, habríamos tenido un picnic maravilloso.' },
          { step: 'Very concise form — replaces an entire if-clause with just two words + a noun', stepEs: 'Forma muy concisa — reemplaza toda una cláusula con solo dos palabras + sustantivo', example: 'But for his courage, many lives would have been lost.', translation: 'Si no fuera por su valentía, muchas vidas se habrían perdido.' },
        ]
      },
    ],
    signalWords: [
      { word: 'were I/he/she to', meaning: 'formal inverted conditional (present/future hypothesis)', meaningEs: 'condicional invertido formal (hipótesis presente/futura)' },
      { word: 'had it not been for', meaning: 'formal inverted past counterfactual', meaningEs: 'contrafactual pasado invertido formal' },
      { word: 'should you/he/she', meaning: 'formal future unlikely conditional', meaningEs: 'condicional futuro improbable formal' },
      { word: 'but for', meaning: 'concise form meaning "if it were/had not been for"', meaningEs: 'forma concisa que significa "si no fuera/hubiera sido por"' },
      { word: 'lest', meaning: 'formal "in order that ... not" / "for fear that"', meaningEs: 'formal "para que no" / "por miedo a que"' },
    ],
    l1Contrast: {
      concept: 'Literary conditionals: Spanish subjunctive vs. English inversion and archaic forms',
      conceptEs: 'Condicionales literarios: subjuntivo español vs. inversión y formas arcaicas en inglés',
      spanishBehavior: 'Spanish uses the subjunctive mood for similar formal/literary effects: "Si acaso necesitara..." (imperfecto de subjuntivo), "De no haber sido por..." (infinitivo compuesto). The subjunctive is a natural part of everyday Spanish grammar.',
      englishBehavior: 'English achieves formality through inversion (Were I, Had she, Should you) which sounds literary or archaic. "Lest" requires a bare subjunctive ("lest he find out") or "should" ("lest he should find out"). These forms are rare in spoken English but common in formal writing.',
      contrastExamples: [
        { english: 'Were I to know the answer, I would tell you.', spanish: 'Si yo supiera la respuesta, te la diría.', note: 'English uses inversion (Were I to know) for literary effect. Spanish uses the imperfect subjunctive (supiera) naturally.' },
        { english: 'Had it not been for the scholarship, she wouldn\'t have graduated.', spanish: 'De no haber sido por la beca, no se habría graduado.', note: 'Both languages have a concise form: English "Had it not been for" ≈ Spanish "De no haber sido por".' },
        { english: 'Lest anyone forget, the deadline is tomorrow.', spanish: 'Para que nadie olvide, la fecha límite es mañana.', note: '"Lest" + bare subjunctive is very formal/archaic in English. Spanish "para que no" + subjunctive is everyday language.' },
      ]
    },
    predictedErrors: [
      { error: 'Were I would know the answer, I would tell you.', correction: 'Were I to know the answer, I would tell you.', whyEs: 'Después de la inversión "Were I", NUNCA se pone "would". La estructura es "Were I to + infinitivo" (no "Were I would"). "Would" solo aparece en la cláusula de resultado.', frequency: 'common' },
      { error: 'Lest he doesn\'t find out the truth.', correction: 'Lest he find out the truth.', whyEs: '"Lest" ya significa "para que no", así que añadir "doesn\'t" crea un doble negativo. Después de "lest" se usa el subjuntivo desnudo: "lest he find" (no "finds", no "doesn\'t find").', frequency: 'common' },
      { error: 'But for she helped me, I would have failed.', correction: 'But for her help, I would have failed.', whyEs: '"But for" va seguido de un SUSTANTIVO o GERUNDIO, nunca de una cláusula completa. "But for her help" (sustantivo), NO "But for she helped me" (cláusula).', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ the government to increase taxes, there would be widespread protests.', question: 'Choose the correct inverted form:', options: ['Should', 'Were', 'Had', 'If'], correct: 1, explanationEs: '"Were the government to increase" = "If the government were to increase". Inversión formal para hipótesis presente/futura.' },
        { sentence: '_____ it not been for the firefighters\' quick response, the building would have been destroyed.', question: 'Choose the correct word:', options: ['Were', 'Should', 'Had', 'But'], correct: 2, explanationEs: '"Had it not been for" = "If it had not been for". Inversión formal para contrafactual pasado.' },
        { sentence: '_____ you wish to make a complaint, please fill in the form below.', question: 'Choose the correct formal conditional:', options: ['Were', 'Had', 'Should', 'Lest'], correct: 2, explanationEs: '"Should you wish" = "If you should wish" = "If you wish" (formal). Patrón formal para formularios y correspondencia oficial.' },
        { sentence: 'But for _____, she would never have learned to speak English fluently.', question: 'What follows "But for"?', options: ['she had a great teacher', 'having a great teacher', 'a great teacher', 'that she had a great teacher'], correct: 2, explanationEs: '"But for" + SUSTANTIVO (o gerundio). Nunca seguido de cláusula completa.' },
        { sentence: 'He spoke quietly lest he _____ the sleeping child.', question: 'Lest + subjunctive/should:', options: ['wakes', 'would wake', 'wake', 'is waking'], correct: 2, explanationEs: '"Lest" + subjuntivo desnudo (base form). "lest he wake" = para que no despertara.' },
        { sentence: '_____ I to resign, who would replace me?', question: 'Formal inversion for a present hypothesis:', options: ['Should', 'Had', 'Were', 'If'], correct: 2, explanationEs: '"Were I to resign" = "If I were to resign". Inversión formal con were.' },
      ],
      controlled: [
        { prompt: 'Rewrite formally: "If it hadn\'t been for his warning, we would have walked into a trap."', promptEs: 'Reescribe formalmente: "Si no hubiera sido por su advertencia, habríamos caído en una trampa."', answer: 'Had it not been for his warning, we would have walked into a trap.', hint: 'Replace "If it hadn\'t been for" with "Had it not been for" (inversion).' },
        { prompt: 'Rewrite using "but for": "If it weren\'t for your support, I couldn\'t continue."', promptEs: 'Reescribe usando "but for": "Si no fuera por tu apoyo, no podría continuar."', answer: 'But for your support, I couldn\'t continue.', hint: '"But for" + noun replaces the entire if-clause.' },
        { prompt: 'Rewrite formally: "If a candidate should fail the exam, they may retake it in September."', promptEs: 'Reescribe formalmente: "Si un candidato suspendiera el examen, puede repetirlo en septiembre."', answer: 'Should a candidate fail the exam, they may retake it in September.', hint: 'Invert "if + subject + should" → "Should + subject + base verb".' },
        { prompt: 'Rewrite as a literary conditional: "If she had arrived earlier, she would have caught the train."', promptEs: 'Reescribe como condicional literario: "Si hubiera llegado antes, habría cogido el tren."', answer: 'Had she arrived earlier, she would have caught the train.', hint: 'Drop "if" and move "had" before the subject.' },
        { prompt: 'Complete formally: "___ you require further information, please do not hesitate to contact me." (Use Should)', promptEs: 'Completa formalmente usando Should.', answer: 'Should you require further information, please do not hesitate to contact me.', hint: 'Should + subject + base verb (no "if").' },
      ]
    },
    recycleInTopics: ['c1-mixed-conditionals-advanced', 'c1-inversion', 'c2-academic-writing'],
    tipEs: '💡 Los condicionales literarios son el "modo subjuntivo" del inglés — pero con inversión en vez de conjugación. Memoriza estas tres fórmulas: (1) Were I to + infinitivo = Si yo + imperfecto subjuntivo, (2) Had I + participio = Si yo hubiera + participio, (3) Should you + base = Si usted + imperfecto subjuntivo. Y "but for" es tu atajo para "if it were/had not been for" — super útil en el CPE. Nunca pongas "would" después de la inversión.'
  },

  // ═══════════════════════════════════════════════
  // C2 — Vague Language and Approximation
  // ═══════════════════════════════════════════════
  {
    id: 'c2-vague-language',
    title: 'Vague Language and Approximation',
    titleEs: 'Lenguaje Vago y Aproximación',
    level: 'C2',
    cefrLevel: 6,
    category: 'pragmatics',
    priority: 'high',
    prerequisiteIds: ['c1-hedging'],
    explanation: 'Vague language is a defining feature of natural spoken English. Far from being lazy or imprecise, it serves crucial pragmatic functions: building rapport, avoiding over-commitment, softening statements, and approximating quantities. English has a remarkably rich system: (1) Softeners: "sort of", "kind of" before adjectives, nouns, or verbs ("I sort of agree"), (2) Approximators: "-ish" suffix ("sixish", "greenish"), "or so" ("ten minutes or so"), "roughly", "give or take", (3) Category markers: "and stuff", "and things", "and whatnot", "and so on", (4) Hedged quantities: "about", "around", "approximately", "in the region of", "something like". Mastering this system is essential for sounding natural rather than overly formal or robotic.',
    explanationEs: 'El lenguaje vago es una característica definitoria del inglés hablado natural. Lejos de ser perezoso o impreciso, cumple funciones pragmáticas cruciales: crear complicidad, evitar comprometerse demasiado, suavizar afirmaciones y aproximar cantidades. El inglés tiene un sistema notablemente rico: (1) Suavizadores: "sort of", "kind of" antes de adjetivos, sustantivos o verbos, (2) Aproximadores: sufijo "-ish", "or so", "roughly", "give or take", (3) Marcadores de categoría: "and stuff", "and things", "and whatnot", "and so on", (4) Cantidades matizadas: "about", "around", "approximately", "in the region of", "something like".',
    formationRules: [
      {
        label: 'Softeners: sort of / kind of',
        labelEs: 'Suavizadores: sort of / kind of',
        steps: [
          { step: 'Before adjectives: "It\'s sort of blue" (not exactly blue)', stepEs: 'Antes de adjetivos: "It\'s sort of blue" (no exactamente azul)', example: 'The movie was kind of boring, to be honest.', translation: 'La película fue como aburrida, para ser honesto.' },
          { step: 'Before nouns: "It\'s sort of a problem" (downplaying)', stepEs: 'Antes de sustantivos: "It\'s sort of a problem" (minimizando)', example: 'He\'s kind of a genius when it comes to maths.', translation: 'Es como un genio cuando se trata de matemáticas.' },
          { step: 'Before verbs: "I sort of agree" (partial agreement)', stepEs: 'Antes de verbos: "I sort of agree" (acuerdo parcial)', example: 'I kind of expected this to happen.', translation: 'Como que esperaba que esto pasara.' },
        ]
      },
      {
        label: 'Approximators: -ish, or so, roughly, give or take',
        labelEs: 'Aproximadores: -ish, or so, roughly, give or take',
        steps: [
          { step: 'Add "-ish" to numbers, times, colors, adjectives: "sixish", "greenish", "tallish"', stepEs: 'Añade "-ish" a números, horas, colores, adjetivos: "sixish", "greenish", "tallish"', example: 'I\'ll be there at sevenish.', translation: 'Estaré allí como a las siete.' },
          { step: '"Or so" after quantities: "ten minutes or so", "fifty or so people"', stepEs: '"Or so" después de cantidades: "ten minutes or so", "fifty or so people"', example: 'It costs twenty pounds or so.', translation: 'Cuesta unas veinte libras.' },
          { step: '"Give or take" for approximate ranges: "an hour, give or take"', stepEs: '"Give or take" para rangos aproximados: "an hour, give or take"', example: 'The journey takes three hours, give or take.', translation: 'El viaje dura tres horas, más o menos.' },
        ]
      },
      {
        label: 'Category markers: and stuff, and things, and whatnot',
        labelEs: 'Marcadores de categoría: and stuff, and things, and whatnot',
        steps: [
          { step: '"And stuff / and things" after listing examples (informal)', stepEs: '"And stuff / and things" después de listar ejemplos (informal)', example: 'We bought snacks and drinks and stuff.', translation: 'Compramos aperitivos y bebidas y esas cosas.' },
          { step: '"And whatnot / and so on / and so forth" (slightly more formal)', stepEs: '"And whatnot / and so on / and so forth" (ligeramente más formal)', example: 'They discussed budgets, timelines, and whatnot.', translation: 'Discutieron presupuestos, plazos y demás.' },
          { step: '"And things like that / and that sort of thing" (explicit category reference)', stepEs: '"And things like that / and that sort of thing" (referencia explícita de categoría)', example: 'She enjoys hiking, cycling, and things like that.', translation: 'Disfruta del senderismo, ciclismo y cosas así.' },
        ]
      },
      {
        label: 'Hedged quantities: about, around, approximately, in the region of',
        labelEs: 'Cantidades matizadas: about, around, approximately, in the region of',
        steps: [
          { step: 'Informal: "about / around" + number', stepEs: 'Informal: "about / around" + número', example: 'I\'m about thirty. / There were around fifty people.', translation: 'Tengo unos treinta. / Había unas cincuenta personas.' },
          { step: 'Formal: "approximately / in the region of / something like" + number', stepEs: 'Formal: "approximately / in the region of / something like" + número', example: 'The project will cost in the region of two million pounds.', translation: 'El proyecto costará en torno a dos millones de libras.' },
          { step: '"Something like" is versatile — informal but precise-sounding', stepEs: '"Something like" es versátil — informal pero suena preciso', example: 'Something like 40% of students drop out in the first year.', translation: 'Algo así como el 40% de los estudiantes abandonan en el primer año.' },
        ]
      },
    ],
    signalWords: [
      { word: 'sort of / kind of', meaning: 'softens adjectives, nouns, or verbs', meaningEs: 'suaviza adjetivos, sustantivos o verbos' },
      { word: '-ish', meaning: 'suffix for approximation (time, color, quality)', meaningEs: 'sufijo de aproximación (hora, color, cualidad)' },
      { word: 'or so', meaning: 'approximately (after a number)', meaningEs: 'aproximadamente (después de un número)' },
      { word: 'and stuff / and whatnot', meaning: 'category marker (= and similar things)', meaningEs: 'marcador de categoría (= y cosas similares)' },
      { word: 'in the region of', meaning: 'formal approximation for quantities', meaningEs: 'aproximación formal para cantidades' },
      { word: 'give or take', meaning: 'plus or minus a small amount', meaningEs: 'más o menos una cantidad pequeña' },
    ],
    l1Contrast: {
      concept: 'Vague language: Spanish "como" / "más o menos" vs. English\'s rich multi-layered system',
      conceptEs: 'Lenguaje vago: "como" / "más o menos" en español vs. el rico sistema multi-nivel del inglés',
      spanishBehavior: 'Spanish uses "como" ("Tengo como 30 años"), "más o menos", "y esas cosas", "y tal" for vagueness. The system is simpler and more concentrated around fewer expressions.',
      englishBehavior: 'English has a much richer vague language system with distinct registers: informal (sort of, -ish, and stuff), neutral (about, around, or so), and formal (approximately, in the region of, and so forth). Using the right level of vagueness for the context is a C2 skill.',
      contrastExamples: [
        { english: 'I\'m thirty-ish. / I\'m about thirty. / I\'m around thirty.', spanish: 'Tengo como 30 años. / Tengo más o menos 30 años.', note: 'English offers three different approximation strategies for the same concept; Spanish mainly uses "como" or "más o menos".' },
        { english: 'We bought food, drinks, and stuff.', spanish: 'Compramos comida, bebidas y esas cosas.', note: '"And stuff" = "y esas cosas". English also has "and things", "and whatnot", "and so on" — each with a slightly different register.' },
        { english: 'It costs in the region of £500.', spanish: 'Cuesta alrededor de 500 libras.', note: '"In the region of" is formal English for "approximately". Spanish would use "alrededor de" or "en torno a" for all registers.' },
      ]
    },
    predictedErrors: [
      { error: 'The project costs more or less two million.', correction: 'The project costs approximately / in the region of / about two million.', whyEs: '"More or less" es un calco directo de "más o menos". En inglés, "more or less" se usa más para grado ("I more or less agree") que para cantidades numéricas. Para cantidades, usa "about", "around", "approximately" o "in the region of".', frequency: 'very common' },
      { error: 'This is sort of important information that we need to discuss. (in a formal report)', correction: 'This is rather / somewhat important information that we need to discuss.', whyEs: '"Sort of" y "kind of" son informales. En textos formales, usa "rather", "somewhat", "fairly", "to some extent". Usar "sort of" en un informe académico suena inapropiado.', frequency: 'common' },
      { error: 'I arrive at six more or less.', correction: 'I\'ll arrive at sixish. / I\'ll arrive at about six. / I\'ll arrive at six or so.', whyEs: 'Calco de "llego a las seis más o menos". En inglés natural: "at sixish" (informal), "at about six" (neutral), "at six or so" (neutral). "More or less" no se usa típicamente para horas.', frequency: 'common' },
      { error: 'We discussed budgets, timelines, and that.', correction: 'We discussed budgets, timelines, and whatnot. / and things like that. / and so on.', whyEs: '"And that" existe en inglés británico informal, pero suena muy coloquial. "And whatnot", "and things like that", "and so on" son alternativas más naturales en la mayoría de contextos.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: 'The repair will cost _____ £200.', question: 'Choose the most natural approximation for a spoken context:', options: ['more or less', 'in the region of', 'about', 'approximately'], correct: 2, explanationEs: 'En contexto hablado informal, "about" es la forma más natural. "Approximately" y "in the region of" son formales. "More or less" es un calco del español "más o menos" y suena poco natural con cantidades.' },
        { sentence: 'She\'s _____ a perfectionist — she checks everything three times.', question: 'Choose the correct softener:', options: ['more or less', 'kind of', 'approximately', 'in the region of'], correct: 1, explanationEs: '"Kind of" se usa como suavizador antes de sustantivos y adjetivos. "More or less", "approximately" y "in the region of" se usan para cantidades, no para describir personas.' },
        { sentence: 'We need to buy plates, cups, napkins, _____.', question: 'Choose the most natural category marker:', options: ['and more or less', 'and stuff like that', 'and approximately', 'and sort of'], correct: 1, explanationEs: '"And stuff like that" es un marcador de categoría natural que indica "y cosas similares". Las otras opciones no funcionan como marcadores de categoría.' },
        { sentence: 'The meeting lasted two hours, _____.', question: 'Choose the most natural approximation:', options: ['more or less', 'sort of', 'give or take', 'kind of'], correct: 2, explanationEs: '"Give or take" se usa después de cantidades para indicar una aproximación: "two hours, give or take" = "dos horas, más o menos". "More or less" podría funcionar aquí pero "give or take" es más natural e idiomático en inglés.' },
        { sentence: 'Formal approximation for "about £2 million":', question: 'Register-appropriate:', options: ['more or less 2 million', 'in the region of 2 million', 'sort of 2 million', 'kind of 2 million'], correct: 1, explanationEs: '"In the region of" = formal. "Sort of/kind of" no se usan con cantidades.' },
      ],
      controlled: [
        { prompt: 'Make this more natural with vague language: "I will arrive at exactly 6 PM."', promptEs: 'Hazlo más natural con lenguaje vago: "Llegaré exactamente a las 6 PM."', answer: 'I\'ll arrive at sixish. / I\'ll get there at about six.', hint: 'Use "-ish" or "about" to soften the time.' },
        { prompt: 'Soften this statement: "I agree with that proposal."', promptEs: 'Suaviza esta afirmación: "Estoy de acuerdo con esa propuesta."', answer: 'I sort of agree with that proposal. / I kind of agree with that proposal.', hint: 'Use "sort of" or "kind of" before the verb to express partial agreement.' },
        { prompt: 'Add a category marker: "They serve pizza, pasta, salads..."', promptEs: 'Añade un marcador de categoría: "Sirven pizza, pasta, ensaladas..."', answer: 'They serve pizza, pasta, salads, and things like that. / ...and whatnot. / ...and stuff.', hint: 'Complete the list with "and things like that", "and whatnot", or "and stuff".' },
        { prompt: 'Correct: The project costs more or less two million.', promptEs: 'Corrige: El proyecto cuesta más o menos dos millones.', answer: 'The project costs approximately / about / in the region of two million.', hint: '"More or less" es calco; usa about/approximately' },
        { prompt: 'Add approximator: "There were _____ fifty people at the event."', promptEs: 'Añade aproximador: Había unas cincuenta personas en el evento.', answer: 'There were about / around / approximately fifty people at the event.', hint: 'about, around, or approximately' },
      ]
    },
    recycleInTopics: ['c1-hedging', 'c2-metalinguistic-hedging', 'c2-register-and-style'],
    tipEs: '💡 El lenguaje vago NO es pereza — es una habilidad social esencial del inglés. Los nativos lo usan constantemente. Truco de registro: INFORMAL: "sort of, kind of, -ish, and stuff" → con amigos. NEUTRAL: "about, around, or so, and so on" → conversación general. FORMAL: "approximately, in the region of, and so forth, somewhat" → trabajo/academia. El error #1 de hispanohablantes: usar "more or less" para todo (calco de "más o menos"). En inglés, hay docenas de alternativas — ¡úsalas!'
  },

  // ═══════════════════════════════════════════════
  // C2 — Emphasis and Focus Patterns
  // ═══════════════════════════════════════════════
  {
    id: 'c2-emphasis-patterns',
    title: 'Emphasis and Focus Patterns',
    titleEs: 'Patrones de Énfasis y Foco',
    level: 'C2',
    cefrLevel: 6,
    category: 'syntax',
    priority: 'high',
    prerequisiteIds: ['b2-emphasis-cleft-sentences', 'c1-cleft-extraposition'],
    explanation: 'English has a fixed word order (SVO), so it cannot simply rearrange words for emphasis the way Spanish does. Instead, English uses special syntactic structures to highlight, focus, or emphasize particular elements: (1) Wh-clefts: "What I really need is more time", (2) The thing/point/problem is + clause: "The thing is, I can\'t afford it", (3) It-clefts: "It\'s the deadline that worries me", (4) All I + verb + be: "All I want is peace", (5) Emphatic do/does/did: "I DO understand your concern", (6) Negative fronting: "Not only did he resign, but he also sued the company". These patterns are essential for expressive, natural English at C2 level.',
    explanationEs: 'El inglés tiene un orden fijo de palabras (SVO), así que no puede simplemente reorganizar las palabras para dar énfasis como hace el español. En su lugar, usa estructuras sintácticas especiales para destacar, enfocar o enfatizar elementos particulares: (1) Wh-clefts: "What I really need is more time", (2) The thing/point/problem is + cláusula, (3) It-clefts: "It\'s the deadline that worries me", (4) All I + verbo + be: "All I want is peace", (5) Do/does/did enfático, (6) Fronting negativo: "Not only did he resign, but he also sued the company".',
    formationRules: [
      {
        label: 'Wh-clefts (pseudo-clefts)',
        labelEs: 'Wh-clefts (pseudo-hendidas)',
        formula: 'What + S + V + be + FOCUS',
        steps: [
          { step: 'Move the focused element to the end after "be"', stepEs: 'Mueve el elemento enfocado al final después de "be"', example: 'What I really need is more time.', translation: 'Lo que realmente necesito es más tiempo.' },
          { step: 'Can use what, where, when, who, how, the reason why, the way', stepEs: 'Puede usar what, where, when, who, how, the reason why, the way', example: 'What happened was that the server crashed.', translation: 'Lo que pasó fue que el servidor se cayó.' },
          { step: 'The reason (why) I\'m here is to discuss the budget.', stepEs: 'The reason (why) I\'m here is to discuss the budget.', example: 'The reason why I called is to confirm the appointment.', translation: 'La razón por la que llamé es para confirmar la cita.' },
        ]
      },
      {
        label: 'The thing/point/problem is + clause',
        labelEs: 'The thing/point/problem is + cláusula',
        formula: 'The thing/point/problem/fact + is + (that) + clause',
        steps: [
          { step: '"The thing is" introduces a key point or complication', stepEs: '"The thing is" introduce un punto clave o complicación', example: 'The thing is, we don\'t have enough budget.', translation: 'El asunto es que no tenemos suficiente presupuesto.' },
          { step: '"The point is" refocuses the discussion', stepEs: '"The point is" reenfoca la discusión', example: 'The point is that nobody actually reads the manual.', translation: 'El punto es que nadie lee realmente el manual.' },
        ]
      },
      {
        label: 'Emphatic do / does / did',
        labelEs: 'Do / does / did enfático',
        formula: 'S + DO/DOES/DID + base verb (stressed in speech)',
        steps: [
          { step: 'Add "do/does/did" before the base verb to emphasize truth or contrast', stepEs: 'Añade "do/does/did" antes del verbo base para enfatizar verdad o contraste', example: 'I DO understand your concern. (I really do)', translation: 'Sí que entiendo tu preocupación.' },
          { step: 'Often used to contradict, insist, or express surprise', stepEs: 'Se usa para contradecir, insistir o expresar sorpresa', example: 'She DOES know about the meeting — I told her myself.', translation: 'Ella SÍ sabe de la reunión — yo misma se lo dije.' },
          { step: '"Did" for emphatic past: "I DID send the email" (contradicting a claim)', stepEs: '"Did" para pasado enfático: "I DID send the email" (contradiciendo una afirmación)', example: 'We DID warn them, but they didn\'t listen.', translation: 'SÍ que les advertimos, pero no escucharon.' },
        ]
      },
      {
        label: 'All I + verb + be + complement',
        labelEs: 'All I + verbo + be + complemento',
        formula: 'All + S + V + be + focus element',
        steps: [
          { step: '"All" at the start limits and emphasizes what follows', stepEs: '"All" al inicio limita y enfatiza lo que sigue', example: 'All I want is a bit of peace and quiet.', translation: 'Todo lo que quiero es un poco de paz y tranquilidad.' },
          { step: 'Similar to wh-clefts but more restrictive ("the only thing")', stepEs: 'Similar a wh-clefts pero más restrictivo ("lo único")', example: 'All we need is your signature on this form.', translation: 'Lo único que necesitamos es tu firma en este formulario.' },
        ]
      },
    ],
    signalWords: [
      { word: 'what ... is/was', meaning: 'wh-cleft for focusing information', meaningEs: 'wh-cleft para enfocar información' },
      { word: 'the thing/point is', meaning: 'introduces a key point or complication', meaningEs: 'introduce un punto clave o complicación' },
      { word: 'do/does/did + base verb', meaning: 'emphatic auxiliary for emphasis or contradiction', meaningEs: 'auxiliar enfático para énfasis o contradicción' },
      { word: 'all I/we + verb + is', meaning: 'restrictive focus (= the only thing)', meaningEs: 'foco restrictivo (= lo único)' },
      { word: 'not only ... but also', meaning: 'fronted negative for dramatic emphasis', meaningEs: 'negativo frontalizado para énfasis dramático' },
    ],
    l1Contrast: {
      concept: 'Emphasis: Spanish flexible word order vs. English special syntactic structures',
      conceptEs: 'Énfasis: orden flexible de palabras en español vs. estructuras sintácticas especiales en inglés',
      spanishBehavior: 'Spanish can freely rearrange word order for emphasis: "Tiempo es lo que necesito" (OSV), "A JUAN le di el libro" (fronted object), "SÍ que lo sé" (emphatic "sí que"). Prosody (stress and intonation) also plays a major role.',
      englishBehavior: 'English word order is fixed (SVO), so emphasis requires special structures: cleft sentences (What I need is..., It\'s X that...), emphatic do/does/did ("I DO know"), and negative fronting ("Not only did..."). Simply changing word order sounds ungrammatical in English.',
      contrastExamples: [
        { english: 'What I need is time. / It\'s time that I need.', spanish: 'Tiempo es lo que necesito. / Lo que necesito es tiempo.', note: 'Spanish can front "tiempo" directly. English needs a cleft structure: "What I need is..." or "It\'s ... that I...".' },
        { english: 'I DO understand. / I really DO care.', spanish: 'SÍ que entiendo. / De verdad que me importa.', note: 'Spanish uses "sí que" for emphasis. English uses emphatic "do/does/did" before the base verb.' },
        { english: 'Not only did he resign, but he also sued them.', spanish: 'No solo renunció, sino que también los demandó.', note: 'Both languages have "not only...but also" but English REQUIRES subject-verb inversion after fronted "not only".' },
      ]
    },
    predictedErrors: [
      { error: 'What I need is to have more time to complete the project and submit it before the deadline.', correction: 'What I need is more time. / The thing is, I need more time to complete the project.', whyEs: 'Los wh-clefts funcionan mejor con complementos cortos y enfocados. Un complemento muy largo después de "is" pierde el efecto de foco. Mejor: simplifica el foco o usa "the thing is" para introducir la idea completa.', frequency: 'common' },
      { error: 'She knows about the problem. (when meaning to emphasize "she DOES know")', correction: 'She DOES know about the problem.', whyEs: 'Sin "does" enfático, la oración es una simple afirmación. Para contradecir o enfatizar que SÍ sabe, hay que añadir "DOES": "She DOES know". En español usarías "SÍ que sabe" o entonación fuerte.', frequency: 'very common' },
      { error: 'Time is what I need. (calque of "Tiempo es lo que necesito")', correction: 'What I need is time.', whyEs: 'Aunque "Time is what I need" es gramaticalmente correcto, el patrón natural en inglés es "What I need is time" (wh-cleft). Poner el foco primero es un calco del orden español.', frequency: 'common' },
      { error: 'Not only he resigned, but he also sued the company.', correction: 'Not only did he resign, but he also sued the company.', whyEs: '"Not only" al inicio de oración REQUIERE inversión: "Not only DID he resign" (no "Not only he resigned"). Es una regla obligatoria de inversión negativa en inglés.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ I want is a simple explanation.', question: 'Choose the correct word to create emphasis:', options: ['What', 'All', 'The thing', 'Which'], correct: 1, explanationEs: '"All I want is..." = "Lo único que quiero es...". Patrón restrictivo que limita a una sola cosa. "What I want is..." también funciona pero "All" es más restrictivo y enfático aquí.' },
        { sentence: 'She _____ apologize — I heard her say it.', question: 'Choose the correct emphatic form:', options: ['does', 'did', 'was', 'had'], correct: 1, explanationEs: '"She DID apologize" = "Ella SÍ se disculpó". El auxiliar enfático "did" confirma que la acción ocurrió, contradeciendo una posible duda. Pasado → "did".' },
        { sentence: '_____ happened was that the system crashed during the update.', question: 'Complete the wh-cleft:', options: ['What', 'It', 'The thing', 'All'], correct: 0, explanationEs: '"What happened was (that)..." es un wh-cleft que narra un evento enfocándolo. "What" inicia la cláusula relativa libre.' },
        { sentence: 'Not only _____ he fail the test, but he also lost his notes.', question: 'Choose the correct inverted form:', options: ['has', 'was', 'did', 'had'], correct: 2, explanationEs: '"Not only" al inicio requiere inversión auxiliar. El verbo es pasado ("fail" → "failed") → auxiliar "did" + "fail" (base form).' },
      ],
      controlled: [
        { prompt: 'Rewrite for emphasis: "I need your honesty." (use a wh-cleft)', promptEs: 'Reescribe con énfasis: "Necesito tu honestidad." (usa un wh-cleft)', answer: 'What I need is your honesty.', hint: 'What + I + verb + is + FOCUS.' },
        { prompt: 'Contradict the claim "You don\'t care about this project." using emphatic "do".', promptEs: 'Contradice la afirmación "No te importa este proyecto." usando "do" enfático.', answer: 'I DO care about this project!', hint: 'Subject + DO + base verb (in capitals or stressed in speech).' },
        { prompt: 'Rewrite with emphasis: "He not only passed the exam. He also got the highest mark."', promptEs: 'Reescribe con énfasis: "No solo aprobó el examen. También sacó la nota más alta."', answer: 'Not only did he pass the exam, but he also got the highest mark.', hint: 'Not only + auxiliary inversion + but (also) + normal order.' },
        { prompt: 'Use "All I + verb + be": "I only want peace."', promptEs: 'Usa "All I + verbo + be": Solo quiero paz.', answer: 'All I want is peace.', hint: 'All I want is + complement' },
        { prompt: 'Add emphatic "did": "She sent the email." (contradicting someone who said she didn\'t)', promptEs: 'Añade "did" enfático: Ella envió el email. (contradiciendo)', answer: 'She DID send the email.', hint: 'Subject + DID + base verb' },
      ]
    },
    recycleInTopics: ['b2-emphasis-cleft-sentences', 'c1-cleft-extraposition', 'c2-academic-writing'],
    tipEs: '💡 En español, mueves las palabras para enfatizar: "TIEMPO es lo que necesito". En inglés no puedes — usas estructuras especiales. Las 4 herramientas de énfasis: (1) Wh-cleft: "What I need is TIME" (foco al final). (2) Emphatic DO: "I DO understand" (sí que + verbo). (3) All + sujeto + verbo: "All I want is peace" (lo ÚNICO que). (4) Negative fronting: "Not only did he..." (inversión obligatoria). Regla de oro: cuanto más quieras enfatizar, más estructura necesitas.'
  },

  // ═══════════════════════════════════════════════
  // C2 — Metalinguistic Commentary and Hedging
  // ═══════════════════════════════════════════════
  {
    id: 'c2-metalinguistic-hedging',
    title: 'Metalinguistic Commentary and Hedging',
    titleEs: 'Comentario Metalingüístico y Hedging',
    level: 'C2',
    cefrLevel: 6,
    category: 'pragmatics',
    priority: 'medium',
    prerequisiteIds: ['c1-hedging', 'c2-vague-language'],
    explanation: 'Metalinguistic commentary involves stepping outside your message to comment on the language itself — how you\'re choosing to express something, the accuracy of a word or phrase, or the strength of a claim. This is a hallmark of sophisticated C2 English. Key patterns include: (1) Qualification phrases: "strictly speaking", "broadly/loosely speaking", "in a sense", "in a way", (2) Metaphor markers: "as it were", "so to speak", "if you will/like", "in a manner of speaking", (3) Understatement markers: "to say the least", "to put it mildly", "that\'s putting it mildly", (4) Lexical apology: "for want of a better word", "for lack of a better term", "to coin a phrase". These devices signal linguistic awareness and precision.',
    explanationEs: 'El comentario metalingüístico implica salir de tu mensaje para comentar sobre el lenguaje mismo — cómo estás eligiendo expresar algo, la exactitud de una palabra o frase, o la fuerza de una afirmación. Es un sello del inglés sofisticado de nivel C2. Patrones clave: (1) Frases de cualificación: "strictly speaking", "broadly/loosely speaking", "in a sense", (2) Marcadores de metáfora: "as it were", "so to speak", "if you will", (3) Marcadores de atenuación: "to say the least", "to put it mildly", (4) Disculpa léxica: "for want of a better word", "for lack of a better term".',
    formationRules: [
      {
        label: 'Qualification phrases: strictly/broadly/loosely speaking',
        labelEs: 'Frases de cualificación: strictly/broadly/loosely speaking',
        steps: [
          { step: '"Strictly speaking" = technically correct, by the exact definition', stepEs: '"Strictly speaking" = técnicamente correcto, por la definición exacta', example: 'Strictly speaking, a tomato is a fruit, not a vegetable.', translation: 'Estrictamente hablando, un tomate es una fruta, no una verdura.' },
          { step: '"Broadly/loosely speaking" = in general terms, not precisely', stepEs: '"Broadly/loosely speaking" = en términos generales, no con precisión', example: 'Broadly speaking, the economy has improved this year.', translation: 'En términos generales, la economía ha mejorado este año.' },
          { step: '"In a sense / in a way" = from one perspective, partly true', stepEs: '"In a sense / in a way" = desde una perspectiva, parcialmente cierto', example: 'In a sense, every language is equally complex.', translation: 'En cierto sentido, todos los idiomas son igualmente complejos.' },
        ]
      },
      {
        label: 'Metaphor markers: as it were, so to speak, if you will',
        labelEs: 'Marcadores de metáfora: as it were, so to speak, if you will',
        steps: [
          { step: '"As it were" signals a creative or unusual use of language', stepEs: '"As it were" señala un uso creativo o inusual del lenguaje', example: 'He\'s the captain of the ship, as it were — he makes all the decisions.', translation: 'Es el capitán del barco, por así decirlo — él toma todas las decisiones.' },
          { step: '"So to speak" / "if you will" mark a figurative expression', stepEs: '"So to speak" / "if you will" marcan una expresión figurada', example: 'The project is our baby, so to speak.', translation: 'El proyecto es nuestro bebé, por así decirlo.' },
          { step: '"In a manner of speaking" = in a way (slightly more formal)', stepEs: '"In a manner of speaking" = en cierta forma (ligeramente más formal)', example: 'She\'s the backbone of the team, in a manner of speaking.', translation: 'Ella es la columna vertebral del equipo, en cierta manera.' },
        ]
      },
      {
        label: 'Understatement markers: to say the least, to put it mildly',
        labelEs: 'Marcadores de atenuación: to say the least, to put it mildly',
        steps: [
          { step: '"To say the least" implies the reality is much stronger', stepEs: '"To say the least" implica que la realidad es mucho más fuerte', example: 'The results were disappointing, to say the least.', translation: 'Los resultados fueron decepcionantes, por decir lo menos.' },
          { step: '"To put it mildly" signals deliberate understatement', stepEs: '"To put it mildly" señala atenuación deliberada', example: 'He was upset, to put it mildly. (He was furious!)', translation: 'Estaba disgustado, por decirlo suavemente. (¡Estaba furioso!)' },
          { step: '"That\'s putting it mildly" responds to someone else\'s understatement', stepEs: '"That\'s putting it mildly" responde a la atenuación de otra persona', example: '"It was a tough year." "That\'s putting it mildly!"', translation: '"Fue un año difícil." "¡Eso es quedarse corto!"' },
        ]
      },
      {
        label: 'Lexical apology: for want of a better word, for lack of a better term',
        labelEs: 'Disculpa léxica: for want of a better word, for lack of a better term',
        steps: [
          { step: '"For want/lack of a better word/term" apologizes for imprecise language', stepEs: '"For want/lack of a better word/term" se disculpa por lenguaje impreciso', example: 'He has a certain charisma, for want of a better word.', translation: 'Tiene un cierto carisma, a falta de una palabra mejor.' },
          { step: '"To coin a phrase" introduces a creative new expression (sometimes ironic)', stepEs: '"To coin a phrase" introduce una expresión creativa nueva (a veces irónica)', example: 'We need to "think outside the box", to coin a phrase.', translation: 'Necesitamos "pensar fuera de la caja", como se suele decir.' },
        ]
      },
    ],
    signalWords: [
      { word: 'strictly speaking', meaning: 'technically, by the exact definition', meaningEs: 'técnicamente, por la definición exacta' },
      { word: 'as it were / so to speak', meaning: 'marks figurative or metaphorical language', meaningEs: 'marca lenguaje figurado o metafórico' },
      { word: 'to say the least', meaning: 'signals deliberate understatement', meaningEs: 'señala atenuación deliberada' },
      { word: 'to put it mildly', meaning: 'indicates the reality is much stronger', meaningEs: 'indica que la realidad es mucho más fuerte' },
      { word: 'for want of a better word', meaning: 'apologizes for imprecise vocabulary', meaningEs: 'se disculpa por vocabulario impreciso' },
      { word: 'if you will / if you like', meaning: 'softens or marks a creative expression', meaningEs: 'suaviza o marca una expresión creativa' },
    ],
    l1Contrast: {
      concept: 'Metalinguistic commentary: Spanish "por así decirlo" vs. English\'s extensive system',
      conceptEs: 'Comentario metalingüístico: "por así decirlo" en español vs. el extenso sistema del inglés',
      spanishBehavior: 'Spanish has "por así decirlo", "por decirlo de alguna manera", "en cierto sentido", "estrictamente hablando" — but they are used less frequently than their English counterparts, especially in everyday conversation.',
      englishBehavior: 'English speakers use metalinguistic commentary FAR more frequently, especially in academic and professional contexts. These phrases signal precision, politeness, and linguistic self-awareness. Not using them at C2 level can make speech sound blunt or overconfident.',
      contrastExamples: [
        { english: 'He\'s the engine of the team, as it were.', spanish: 'Es el motor del equipo, por así decirlo.', note: '"As it were" ≈ "por así decirlo". Both mark a metaphor, but English speakers use these markers more frequently.' },
        { english: 'Strictly speaking, whales are not fish.', spanish: 'Estrictamente hablando, las ballenas no son peces.', note: 'Direct parallel: "strictly speaking" = "estrictamente hablando". Same function, similar frequency in formal contexts.' },
        { english: 'The food was terrible, to say the least.', spanish: 'La comida era terrible, por decir lo menos.', note: '"To say the least" signals that something is deliberately understated. Spanish "por decir lo menos" exists but is less common.' },
      ]
    },
    predictedErrors: [
      { error: 'He is, so to speak, the leader. He is, so to speak, also the treasurer. So to speak, he runs everything.', correction: 'He is the leader, so to speak. He also manages the budget.', whyEs: 'Sobreusar "so to speak" en cada oración suena repetitivo y pierde su efecto. Úsalo solo cuando realmente quieras marcar una expresión como figurada o inusual — no como muletilla.', frequency: 'common' },
      { error: 'Strictly speaking, I think this is a bad idea.', correction: 'Frankly speaking, I think this is a bad idea. / To be honest, I think this is a bad idea.', whyEs: '"Strictly speaking" se refiere a definiciones técnicas o hechos, NO a opiniones personales. Para opiniones, usa "frankly speaking", "to be honest", "in my view". Error: confundir "estrictamente" (hechos) con "francamente" (opiniones).', frequency: 'common' },
      { error: 'The situation is bad, to put it mildly. (when the situation is only slightly bad)', correction: 'The situation is somewhat concerning. / The situation could be better.', whyEs: '"To put it mildly" implica que la realidad es MUCHO peor de lo que dices. Solo úsalo cuando quieras crear un efecto de atenuación dramática. Si la situación solo es "un poco mala", no necesitas este marcador.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____, a penguin is a bird, even though it can\'t fly.', question: 'Choose the best metalinguistic marker:', options: ['So to speak', 'Strictly speaking', 'To say the least', 'For want of a better word'], correct: 1, explanationEs: '"Strictly speaking" introduce un hecho técnicamente correcto que puede sorprender: un pingüino ES un ave, aunque no vuele. Es una cuestión de definición exacta.' },
        { sentence: 'The project was a disaster, _____.', question: 'Choose the best understatement marker:', options: ['strictly speaking', 'so to speak', 'to say the least', 'if you will'], correct: 2, explanationEs: '"To say the least" señala que "disaster" es incluso una atenuación — la realidad fue aún peor. Perfecto para atenuación dramática.' },
        { sentence: 'He\'s the _____ of the department — he keeps everything running smoothly.', question: 'Complete with a metaphor + marker: "backbone, ___"', options: ['strictly speaking', 'for want of a better word', 'as it were', 'to put it mildly'], correct: 2, explanationEs: '"As it were" marca "backbone" como metáfora: obviamente no es literalmente la columna vertebral, sino figuradamente la persona esencial.' },
        { sentence: '"Broadly speaking, the economy has improved." — What does "broadly speaking" signal?', question: 'Qualification phrase:', options: ['Exact definition', 'General terms, not precise', 'Understatement', 'Metaphor'], correct: 1, explanationEs: '"Broadly speaking" = en términos generales, no con precisión.' },
        { sentence: 'Correct: "Strictly speaking, I think this is wrong."', question: 'Register error — use instead:', options: ['Frankly speaking / To be honest', 'To say the least', 'As it were', 'For want of a better word'], correct: 0, explanationEs: '"Strictly speaking" es para hechos técnicos, no opiniones. Para opiniones: frankly speaking, to be honest.' },
      ],
      controlled: [
        { prompt: 'Add a metalinguistic marker: "The team has a certain energy that\'s hard to describe — a _____ magic, _____."', promptEs: 'Añade un marcador metalingüístico: "El equipo tiene cierta energía difícil de describir — una especie de magia, _____."', answer: 'The team has a certain energy — a kind of magic, for want of a better word.', hint: 'Use "for want of a better word" to apologize for the imprecise term "magic".' },
        { prompt: 'Mark the following as understatement: "His reaction to losing the contract was intense."', promptEs: 'Marca lo siguiente como atenuación: "Su reacción al perder el contrato fue intensa."', answer: 'His reaction to losing the contract was intense, to put it mildly.', hint: 'Add "to put it mildly" at the end to signal the reality was much worse.' },
        { prompt: 'Qualify this with a technical precision marker: "Tomatoes are vegetables — well, actually..."', promptEs: 'Cualifica esto con un marcador de precisión técnica: "Los tomates son verduras — bueno, en realidad..."', answer: 'Well, strictly speaking, tomatoes are actually fruits, not vegetables.', hint: 'Use "strictly speaking" to introduce the technically correct fact.' },
        { prompt: 'Add "as it were" to mark a metaphor: "He\'s the brains of the operation."', promptEs: 'Añade "as it were" para marcar la metáfora:', answer: "He's the brains of the operation, as it were.", hint: 'as it were = por así decirlo' },
        { prompt: 'Respond to understatement: A says "It was a tough year." You agree it was much worse. Say:', promptEs: 'Responde a la atenuación: A dice "Fue un año difícil." Tú crees que fue mucho peor.', answer: "That's putting it mildly!", hint: 'Respuesta a understatement de otra persona' },
      ]
    },
    recycleInTopics: ['c1-hedging', 'c2-vague-language', 'c2-academic-writing'],
    tipEs: '💡 El comentario metalingüístico es como poner comillas mentales alrededor de tus palabras. Cuatro herramientas: (1) PRECISIÓN: "strictly/broadly speaking" → ¿qué tan exacto soy? (2) METÁFORA: "as it were / so to speak / if you will" → estoy usando lenguaje figurado. (3) ATENUACIÓN: "to say the least / to put it mildly" → la realidad es MUCHO más fuerte. (4) DISCULPA: "for want of a better word" → sé que esta no es la palabra perfecta. En inglés académico y profesional, estos marcadores son ESENCIALES — muestran que eres consciente de cómo usas el lenguaje.'
  },

  // ═══════════════════════════════════════════════
  // A1 — Demonstratives (this/that/these/those)
  // ═══════════════════════════════════════════════
  {
    id: 'a1-demonstratives',
    title: 'Demonstratives: This, That, These, Those',
    titleEs: 'Demostrativos: This, That, These, Those',
    level: 'A1',
    cefrLevel: 1,
    category: 'pronouns',
    priority: 'critical',
    prerequisiteIds: ['a1-plurals'],
    explanation: 'Demonstratives point to people, things, or ideas and show their distance from the speaker. "This" and "these" refer to things near the speaker; "that" and "those" refer to things farther away. Unlike Spanish, English has only two distance levels (near/far) and uses the same forms for both adjectives (this book) and pronouns (this is my book).',
    explanationEs: 'Los demostrativos señalan personas, cosas o ideas e indican su distancia respecto al hablante. "This" y "these" se refieren a lo cercano; "that" y "those" a lo lejano. A diferencia del español, el inglés solo tiene dos niveles de distancia (cerca/lejos) y usa las mismas formas como adjetivos (this book) y pronombres (this is my book).',
    formationRules: [
      {
        label: 'Singular: this (near) / that (far)',
        labelEs: 'Singular: this (cerca) / that (lejos)',
        formula: 'this/that + singular noun',
        steps: [
          { step: 'THIS = este/esta/esto (cerca del hablante)', stepEs: 'THIS = este/esta/esto (cerca del hablante)', example: 'This book is interesting. This is my car.', translation: 'Este libro es interesante. Este es mi coche.' },
          { step: 'THAT = ese/esa/aquel/aquella (lejos del hablante)', stepEs: 'THAT = ese/esa/aquel/aquella (lejos del hablante)', example: 'That house is old. That is my brother.', translation: 'Esa casa es vieja. Ese es mi hermano.' },
        ]
      },
      {
        label: 'Plural: these (near) / those (far)',
        labelEs: 'Plural: these (cerca) / those (lejos)',
        formula: 'these/those + plural noun',
        steps: [
          { step: 'THESE = estos/estas (cerca, plural)', stepEs: 'THESE = estos/estas (cerca, plural)', example: 'These apples are fresh. These are my keys.', translation: 'Estas manzanas están frescas. Estas son mis llaves.' },
          { step: 'THOSE = esos/esas/aquellos/aquellas (lejos, plural)', stepEs: 'THOSE = esos/esas/aquellos/aquellas (lejos, plural)', example: 'Those children are playing. Those are my friends.', translation: 'Esos niños están jugando. Esos son mis amigos.' },
        ]
      },
      {
        label: 'Demonstratives as pronouns (without noun)',
        labelEs: 'Demostrativos como pronombres (sin sustantivo)',
        formula: 'This/That/These/Those + verb',
        steps: [
          { step: 'When used alone, they replace the noun entirely', stepEs: 'Cuando se usan solos, reemplazan al sustantivo por completo', example: 'What is this? — This is a present. What are those? — Those are flowers.', translation: '¿Qué es esto? — Esto es un regalo. ¿Qué son esos? — Esos son flores.' },
          { step: 'In introductions: "This is..." (never "He/She is" for introductions)', stepEs: 'En presentaciones: "This is..." (nunca "He/She is" para presentar)', example: 'This is my wife. These are my parents.', translation: 'Esta es mi mujer. Estos son mis padres.' },
        ]
      },
    ],
    signalWords: [
      { word: 'this', meaning: 'singular, near', meaningEs: 'singular, cerca' },
      { word: 'that', meaning: 'singular, far', meaningEs: 'singular, lejos' },
      { word: 'these', meaning: 'plural, near', meaningEs: 'plural, cerca' },
      { word: 'those', meaning: 'plural, far', meaningEs: 'plural, lejos' },
    ],
    l1Contrast: {
      concept: 'Spanish has three distance levels; English has two',
      conceptEs: 'El español tiene tres niveles de distancia; el inglés tiene dos',
      spanishBehavior: 'Spanish distinguishes: este/esta (cerca), ese/esa (medio), aquel/aquella (lejos). Spanish also has gender agreement: este libro, esta casa.',
      englishBehavior: 'English has only near (this/these) and far (that/those). No gender. The same form works as adjective and pronoun.',
      contrastExamples: [
        { english: 'This book / That book (no gender)', spanish: 'Este libro / Ese libro / Aquel libro (género y distancia)', note: 'English: no gender. Spanish: three levels of distance.' },
        { english: 'This is my car. (pronoun)', spanish: 'Este es mi coche.', note: 'Both use demonstrative as subject. Spanish "este" agrees with "coche" (masc); English "this" is invariable.' },
        { english: 'What is this? (pointing)', spanish: '¿Qué es esto?', note: 'Direct parallel. "This" and "esto" both refer to something unidentified.' },
      ]
    },
    predictedErrors: [
      { error: 'This books are mine.', correction: 'These books are mine.', whyEs: 'Con sustantivos plurales se usa THESE (cerca) o THOSE (lejos), no THIS/THAT.', frequency: 'very common' },
      { error: 'That is my parents.', correction: 'Those are my parents.', whyEs: '"Parents" es plural → THOSE. Además el verbo debe concordar: Those ARE.', frequency: 'very common' },
      { error: 'He is my brother. (when introducing)', correction: 'This is my brother.', whyEs: 'En presentaciones se usa "This is..." no "He is...". "He is" describe; "This is" presenta.', frequency: 'common' },
      { error: 'These is my bag.', correction: 'This is my bag.', whyEs: 'Si es singular (bag), usa THIS. THESE va con plural. Concordancia: This IS, These ARE.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____ apples are delicious. (pointing at apples near you)', question: 'Choose the correct demonstrative:', options: ['This', 'That', 'These', 'Those'], correct: 2, explanationEs: 'Manzanas (plural) + cerca = THESE.' },
        { sentence: '_____ is my teacher. (pointing at a person)', question: 'Introduction:', options: ['He', 'She', 'This', 'That'], correct: 2, explanationEs: 'En presentaciones: "This is..." (o "That is" si está lejos).' },
        { sentence: 'What are _____? (pointing at things far away)', question: 'Plural, far:', options: ['this', 'that', 'these', 'those'], correct: 3, explanationEs: 'Plural + lejos = THOSE.' },
        { sentence: '_____ book on the table is mine.', question: 'Singular, near:', options: ['This', 'That', 'These', 'Those'], correct: 0, explanationEs: 'Libro (singular) + cerca = THIS.' },
        { sentence: '_____ children over there are my cousins.', question: 'Plural, far:', options: ['This', 'That', 'These', 'Those'], correct: 3, explanationEs: 'Niños (plural) + lejos ("over there") = THOSE.' },
      ],
      controlled: [
        { prompt: 'Complete: _____ (cerca, singular) is my house.', promptEs: 'Completa: _____ (cerca, singular) es mi casa.', answer: 'This', hint: 'Singular + near = this' },
        { prompt: 'Complete: _____ (lejos, plural) are my friends.', promptEs: 'Completa: _____ (lejos, plural) son mis amigos.', answer: 'Those', hint: 'Plural + far = those' },
        { prompt: 'Introduce your mother to a friend. Say:', promptEs: 'Presenta a tu madre a un amigo.', answer: 'This is my mother.', hint: 'Use "This is" for introductions' },
        { prompt: 'Correct: This keys are mine.', promptEs: 'Corrige: This keys are mine.', answer: 'These keys are mine.', hint: 'Keys = plural → these' },
      ]
    },
    recycleInTopics: ['a1-articles', 'a1-there-is-are', 'a2-prepositions-time-place'],
    tipEs: '💡 Truco: THIS y THESE tienen "T" al principio = cerca (near). THAT y THOSE tienen "TH" = allí (there). Para recordar singular/plural: this/that = 4 letras cada uno; these/those = 5 letras = plural.'
  },

  // ═══════════════════════════════════════════════
  // A2 — Adverbs of Manner
  // ═══════════════════════════════════════════════
  {
    id: 'a2-adverbs-manner',
    title: 'Adverbs of Manner',
    titleEs: 'Adverbios de Modo',
    level: 'A2',
    cefrLevel: 2,
    category: 'adverbs',
    priority: 'high',
    prerequisiteIds: ['a1-present-simple', 'a2-present-continuous'],
    explanation: 'Adverbs of manner describe HOW an action is performed. In English, most adverbs of manner are formed by adding -ly to the adjective (quick → quickly, slow → slowly). They typically go after the main verb or at the end of the clause. Unlike Spanish, where many adverbs look like adjectives (rápido, lento), English clearly distinguishes adjective (quick) from adverb (quickly).',
    explanationEs: 'Los adverbios de modo describen CÓMO se realiza una acción. En inglés, la mayoría se forman añadiendo -ly al adjetivo (quick → quickly). Van típicamente después del verbo principal. A diferencia del español, donde muchos adverbios se parecen a los adjetivos (rápido, lento), el inglés distingue claramente adjetivo (quick) de adverbio (quickly).',
    formationRules: [
      {
        label: 'Regular formation: adjective + -ly',
        labelEs: 'Formación regular: adjetivo + -ly',
        formula: 'adjective + -ly = adverb',
        steps: [
          { step: 'Add -ly to most adjectives', stepEs: 'Añade -ly a la mayoría de los adjetivos', example: 'quick → quickly, slow → slowly, careful → carefully', translation: 'rápido → rápidamente, lento → lentamente, cuidadoso → cuidadosamente' },
          { step: 'Adjectives ending in -y: change -y to -i and add -ly', stepEs: 'Adjetivos en -y: cambia -y por -i y añade -ly', example: 'happy → happily, easy → easily, angry → angrily', translation: 'feliz → felizmente, fácil → fácilmente' },
          { step: 'Adjectives ending in -le: drop -e, add -ly', stepEs: 'Adjetivos en -le: quita -e, añade -ly', example: 'simple → simply, gentle → gently, possible → possibly', translation: 'simple → simplemente, gentil → gentilmente' },
        ]
      },
      {
        label: 'Position: after the verb or at end of clause',
        labelEs: 'Posición: después del verbo o al final de la cláusula',
        formula: 'Subject + Verb + Adverb',
        steps: [
          { step: 'With normal verbs: adverb goes AFTER the verb', stepEs: 'Con verbos normales: el adverbio va DESPUÉS del verbo', example: 'She speaks quickly. He drives carefully.', translation: 'Ella habla rápido. Él conduce con cuidado.' },
          { step: 'With verb + object: adverb goes AFTER the object', stepEs: 'Con verbo + objeto: el adverbio va DESPUÉS del objeto', example: 'She speaks English fluently. He closed the door quietly.', translation: 'Ella habla inglés con fluidez. Cerró la puerta en silencio.' },
          { step: 'With BE: adverb goes after the adjective', stepEs: 'Con BE: el adverbio va después del adjetivo', example: 'She is always beautifully dressed.', translation: 'Ella siempre va vestida elegantemente.' },
        ]
      },
      {
        label: 'Irregular adverbs (same form as adjective)',
        labelEs: 'Adverbios irregulares (misma forma que el adjetivo)',
        steps: [
          { step: 'Some common adverbs have the same form as the adjective', stepEs: 'Algunos adverbios comunes tienen la misma forma que el adjetivo', example: 'fast, hard, late, early, daily, weekly', translation: 'rápido, duro, tarde, temprano, diario, semanal' },
          { step: 'NEVER use -ly with these: fast (NOT fastly), hard (NOT hardly = apenas)', stepEs: 'NUNCA uses -ly con estos: fast (NO fastly), hard (hardly = apenas)', example: 'He runs fast. She works hard. (NOT: fastly, hardly)', translation: 'Él corre rápido. Ella trabaja duro.' },
        ]
      },
    ],
    signalWords: [
      { word: 'quickly', meaning: 'in a quick way', meaningEs: 'rápidamente' },
      { word: 'slowly', meaning: 'in a slow way', meaningEs: 'lentamente' },
      { word: 'carefully', meaning: 'with care', meaningEs: 'cuidadosamente' },
      { word: 'well', meaning: 'irregular adverb from good', meaningEs: 'bien (de good)' },
    ],
    l1Contrast: {
      concept: 'Spanish often uses adjective form as adverb; English requires -ly',
      conceptEs: 'El español a menudo usa la forma del adjetivo como adverbio; el inglés requiere -ly',
      spanishBehavior: 'Spanish uses the same form for many adverbs: "habla rápido", "conduce lento", "trabaja duro". The -mente form exists (rápidamente) but the short form is very common in speech.',
      englishBehavior: 'English MUST use the adverb form (-ly) after verbs. Using the adjective ("She speaks quick") is ungrammatical. "She speaks quickly" is correct.',
      contrastExamples: [
        { english: 'She speaks quickly. (adverb)', spanish: 'Ella habla rápido. (adjetivo como adverbio)', note: 'Spanish "rápido" = adjective form used as adverb. English requires "quickly".' },
        { english: 'He works hard. (irregular adverb)', spanish: 'Él trabaja duro.', note: '"Hard" is both adjective and adverb. "Hardly" means "apenas", not "duro".' },
        { english: 'She drives carefully.', spanish: 'Ella conduce con cuidado. / Conduce cuidadosamente.', note: 'Spanish can use "con + noun" or -mente. English: carefully.' },
      ]
    },
    predictedErrors: [
      { error: 'She speaks very quick.', correction: 'She speaks very quickly.', whyEs: 'Después de un verbo de acción se usa el adverbio (-ly). "Quick" es adjetivo; "quickly" es adverbio.', frequency: 'very common' },
      { error: 'He works hardly.', correction: 'He works hard.', whyEs: '"Hardly" significa "apenas", no "duro". Para "trabajar duro" = work hard (sin -ly).', frequency: 'very common' },
      { error: 'She sings good.', correction: 'She sings well.', whyEs: '"Good" es adjetivo. El adverbio de "good" es "well" (irregular). Después de "sings" va el adverbio.', frequency: 'very common' },
      { error: 'He ran fastly.', correction: 'He ran fast.', whyEs: '"Fast" es adverbio irregular: misma forma que el adjetivo. No existe "fastly".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'She speaks English very _____.', question: 'Choose: good (adj) or well (adv):', options: ['good', 'well', 'goodly', 'goods'], correct: 1, explanationEs: 'Después de "speaks" (verbo) va adverbio. Good → well (irregular).' },
        { sentence: 'He works very _____. (meaning: con esfuerzo)', question: 'Hard vs hardly:', options: ['hard', 'hardly', 'harder', 'hardly'], correct: 0, explanationEs: 'Work hard = trabajar duro. Hardly = apenas.' },
        { sentence: 'The children played _____ in the garden.', question: 'Adverb of "happy":', options: ['happy', 'happily', 'happier', 'happiness'], correct: 1, explanationEs: 'Happy → happily (y → i + ly).' },
        { sentence: 'She drives _____. (careful)', question: 'Form the adverb:', options: ['careful', 'carefully', 'carefuly', 'carefull'], correct: 1, explanationEs: 'Careful + ly = carefully.' },
        { sentence: 'He ran _____ to catch the bus.', question: 'Fast is irregular:', options: ['fastly', 'fast', 'quickly', 'quick'], correct: 1, explanationEs: 'Fast es adverbio irregular: misma forma que adjetivo. "Quickly" también sería correcto.' },
      ],
      controlled: [
        { prompt: 'Form the adverb: quick', promptEs: 'Forma el adverbio: quick', answer: 'quickly', hint: 'adjective + -ly' },
        { prompt: 'Complete: She sings _____. (good)', promptEs: 'Completa: Ella canta _____. (bien)', answer: 'well', hint: 'Good → well (irregular)' },
        { prompt: 'Correct: He speaks English very good.', promptEs: 'Corrige: Él habla inglés muy bien.', answer: 'He speaks English very well.', hint: 'Adverb after verb' },
        { prompt: 'Complete: They worked _____ all night. (hard = duro)', promptEs: 'Completa: Trabajaron _____ toda la noche.', answer: 'hard', hint: 'Hard is both adj and adv' },
      ]
    },
    recycleInTopics: ['a2-comparatives-superlatives', 'a2-frequency-adverbs', 'a2-past-simple'],
    tipEs: '💡 Regla de oro: si la palabra describe CÓMO se hace una acción (verbo), usa -ly. Si describe un sustantivo (qué cosa), usa el adjetivo sin -ly. "A quick answer" (adjetivo) vs "He answered quickly" (adverbio). Excepción: good→well, fast→fast, hard→hard.'
  },

  // ═══════════════════════════════════════════════
  // B1 — Third Conditional
  // ═══════════════════════════════════════════════
  {
    id: 'b1-third-conditional',
    title: 'Third Conditional — Imagining the Past',
    titleEs: 'Tercer Condicional — Imaginar el Pasado',
    level: 'B1',
    cefrLevel: 3,
    category: 'clauses',
    priority: 'high',
    prerequisiteIds: ['a2-past-simple', 'b1-present-perfect-vs-past-simple'],
    explanation: 'The Third Conditional is used to imagine a different past — to talk about situations that did NOT happen and their hypothetical results. It expresses regret, criticism, or speculation about past events. The structure is: If + Past Perfect, would have + past participle. Both the condition and the result are impossible because they refer to the past.',
    explanationEs: 'El Tercer Condicional se usa para imaginar un pasado diferente — para hablar de situaciones que NO ocurrieron y sus resultados hipotéticos. Expresa arrepentimiento, crítica o especulación sobre el pasado. Estructura: If + Past Perfect, would have + participio. Tanto la condición como el resultado son imposibles porque se refieren al pasado.',
    formationRules: [
      {
        label: 'Basic structure',
        labelEs: 'Estructura básica',
        formula: 'If + Past Perfect, would have + past participle',
        steps: [
          { step: 'IF clause: If + subject + had + past participle', stepEs: 'Cláusula IF: If + sujeto + had + participio pasado', example: 'If I had known, I would have told you.', translation: 'Si lo hubiera sabido, te lo habría dicho.' },
          { step: 'Result clause: subject + would/could/might have + past participle', stepEs: 'Cláusula resultado: sujeto + would/could/might have + participio', example: 'If she had left earlier, she could have caught the train.', translation: 'Si hubiera salido antes, podría haber cogido el tren.' },
          { step: 'NEVER use "would" in the IF clause', stepEs: 'NUNCA uses "would" en la cláusula IF', example: 'WRONG: If I would have studied. CORRECT: If I had studied.', translation: 'INCORRECTO: Si hubiera estudiado (con would).' },
        ]
      },
      {
        label: 'Negative forms',
        labelEs: 'Formas negativas',
        formula: 'If + hadn\'t + pp, wouldn\'t have + pp',
        steps: [
          { step: 'Negative condition: If + subject + hadn\'t + past participle', stepEs: 'Condición negativa: If + hadn\'t + participio', example: "If I hadn't forgotten my keys, I wouldn't have been locked out.", translation: 'Si no hubiera olvidado las llaves, no me habría quedado fuera.' },
          { step: 'Negative result: wouldn\'t/couldn\'t have + past participle', stepEs: 'Resultado negativo: wouldn\'t/couldn\'t have + participio', example: "If he had listened, he wouldn't have made that mistake.", translation: 'Si hubiera escuchado, no habría cometido ese error.' },
        ]
      },
      {
        label: 'Formal inversion (Had I known...)',
        labelEs: 'Inversión formal (Had I known...)',
        formula: 'Had + Subject + past participle',
        steps: [
          { step: 'Replace "If" with inverted "Had" for formal/written style', stepEs: 'Reemplaza "If" por "Had" invertido para estilo formal', example: 'Had I known, I would have helped. (= If I had known...)', translation: 'De haberlo sabido, habría ayudado.' },
          { step: 'No comma needed when result comes first', stepEs: 'No hace falta coma cuando el resultado va primero', example: 'I would have called had I had your number.', translation: 'Habría llamado de haber tenido tu número.' },
        ]
      },
    ],
    signalWords: [
      { word: 'if', meaning: 'introduces the unreal past condition', meaningEs: 'introduce la condición pasada irreal' },
      { word: 'had', meaning: 'Past Perfect in condition', meaningEs: 'Past Perfect en la condición' },
      { word: 'would have / could have / might have', meaning: 'hypothetical past result', meaningEs: 'resultado hipotético pasado' },
    ],
    l1Contrast: {
      concept: 'Third conditional parallels Spanish "si + pluscuamperfecto subjuntivo + condicional compuesto"',
      conceptEs: 'El tercer condicional es paralelo al "si + pluscuamperfecto subjuntivo + condicional compuesto"',
      spanishBehavior: 'Spanish: "Si hubiera/hubiese estudiado, habría aprobado." The structure is very similar. Common error: using "would" in the si-clause (Si habría estudiado — incorrect in both languages).',
      englishBehavior: 'English: If + had + pp, would have + pp. The key difference: Spanish speakers often wrongly add "would" in the if-clause by calquing "habría" from the result onto the condition.',
      contrastExamples: [
        { english: 'If I had known, I would have come.', spanish: 'Si hubiera sabido, habría venido.', note: 'Direct parallel. Had = hubiera; would have = habría.' },
        { english: 'If she had called, I would have answered.', spanish: 'Si ella hubiera llamado, yo habría contestado.', note: 'Same logical structure. Never "If she would have called".' },
        { english: 'Had I known... (formal)', spanish: 'De haber sabido... / De haberlo sabido...', note: 'Both languages have a formal inverted form without "if".' },
      ]
    },
    predictedErrors: [
      { error: 'If I would have studied, I would have passed.', correction: 'If I had studied, I would have passed.', whyEs: '"Would" NUNCA va en la cláusula IF. La condición usa Past Perfect (had + participio).', frequency: 'very common' },
      { error: 'If I had went, I would have seen her.', correction: 'If I had gone, I would have seen her.', whyEs: 'Después de "had" va el participio pasado (gone), no el pasado simple (went).', frequency: 'very common' },
      { error: 'If she would have left earlier...', correction: 'If she had left earlier...', whyEs: 'Calque del español: no traslades "habría" a la condición. Solo "had" + participio en la condición.', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'If she _____ harder, she would have passed the exam.', question: 'Third conditional — condition:', options: ['studied', 'had studied', 'would study', 'has studied'], correct: 1, explanationEs: 'If + Past Perfect (had studied).' },
        { sentence: 'If I _____ (know), I would have told you.', question: 'Complete the condition:', options: ['knew', 'had known', 'would have known', 'know'], correct: 1, explanationEs: 'Had + past participle. Know → known.' },
        { sentence: '_____ I known, I would have helped.', question: 'Formal inversion:', options: ['If', 'Had', 'Would', 'Have'], correct: 1, explanationEs: 'Had I known = If I had known (formal).' },
        { sentence: 'If they _____ (leave) earlier, they wouldn\'t have missed the flight.', question: 'Negative result, complete condition:', options: ['left', 'had left', 'would leave', 'have left'], correct: 1, explanationEs: 'If + had + past participle.' },
        { sentence: 'Correct: If I would have called, she would have answered.', question: 'Find the error:', options: ['If I had called', 'If I would call', 'If I have called', 'If I called'], correct: 0, explanationEs: 'Never "would" in the if-clause.' },
      ],
      controlled: [
        { prompt: 'Third conditional: I didn\'t see the email. I missed the meeting.', promptEs: 'Tercer condicional: No vi el email. Perdí la reunión.', answer: "If I had seen the email, I wouldn't have missed the meeting.", hint: 'If + had + pp, would/wouldn\'t have + pp' },
        { prompt: 'Correct: If she would have studied, she would have passed.', promptEs: 'Corrige el error común.', answer: 'If she had studied, she would have passed.', hint: 'No "would" in if-clause' },
        { prompt: 'Complete: If he _____ (tell) me, I _____ (help) him.', promptEs: 'Completa: Si me lo hubiera dicho, le habría ayudado.', answer: 'If he had told me, I would have helped him.', hint: 'Past Perfect + would have + pp' },
        { prompt: 'Rewrite formally: If I had known about the problem...', promptEs: 'Reescribe formalmente: Si hubiera sabido del problema...', answer: 'Had I known about the problem...', hint: 'Inversion: Had + subject + pp' },
      ]
    },
    recycleInTopics: ['b2-conditionals-all', 'b2-wish-if-only', 'b1-reported-speech'],
    tipEs: '💡 Regla de oro: NUNCA "would" en la cláusula IF. La condición siempre es: If + had + participio. El resultado: would/could/might have + participio. Para recordar: "habría" en español va SOLO en el resultado, nunca en el "si".'
  },

  // ═══════════════════════════════════════════════
  // B1 — Wish + Past Simple
  // ═══════════════════════════════════════════════
  {
    id: 'b1-wish-past',
    title: 'Wish + Past Simple — Present Unreal Wishes',
    titleEs: 'Wish + Past Simple — Deseos Presentes Irreales',
    level: 'B1',
    cefrLevel: 3,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['a2-past-simple', 'b1-present-perfect-vs-past-simple'],
    explanation: '"Wish" followed by Past Simple expresses a desire for something to be different in the PRESENT — but it is not the case. The situation is unreal or contrary to fact. We use Past Simple (or "were" for all persons in formal English) after "wish" even though we are talking about the present. This parallels the Spanish "Ojalá + subjuntivo imperfecto" (Ojalá tuviera, Ojalá fuera).',
    explanationEs: '"Wish" seguido de Past Simple expresa un deseo de que algo fuera diferente en el PRESENTE — pero no es así. La situación es irreal. Usamos Past Simple (o "were" para todas las personas en inglés formal) después de "wish" aunque hablemos del presente. Es paralelo al español "Ojalá + subjuntivo imperfecto".',
    formationRules: [
      {
        label: 'Basic structure: wish + Past Simple',
        labelEs: 'Estructura básica: wish + Past Simple',
        formula: 'Subject + wish + (that) + Subject + Past Simple',
        steps: [
          { step: 'wish expresses a present unreal desire', stepEs: 'wish expresa un deseo presente irreal', example: 'I wish I had more time. (I don\'t have more time.)', translation: 'Ojalá tuviera más tiempo. (No tengo más tiempo.)' },
          { step: 'The verb after wish is in Past Simple even though it refers to NOW', stepEs: 'El verbo después de wish va en Past Simple aunque se refiera al presente', example: 'She wishes she lived in Paris. (She doesn\'t live there.)', translation: 'Ella desea vivir en París. (No vive allí.)' },
          { step: '"That" is optional and usually omitted', stepEs: '"That" es opcional y normalmente se omite', example: 'I wish (that) I knew the answer.', translation: 'Ojalá supiera la respuesta.' },
        ]
      },
      {
        label: 'Wish + were (for "be" — formal preference)',
        labelEs: 'Wish + were (para "be" — preferencia formal)',
        formula: 'wish + subject + were',
        steps: [
          { step: 'For the verb "be", use WERE for all persons in formal/written English', stepEs: 'Para el verbo "be", usa WERE para todas las personas en inglés formal', example: 'I wish I were taller. I wish it were Friday.', translation: 'Ojalá fuera más alto. Ojalá fuera viernes.' },
          { step: 'In informal speech, "was" is common for I/he/she/it', stepEs: 'En habla informal, "was" es común para I/he/she/it', example: 'I wish I was richer. (informal but widely used)', translation: 'Ojalá fuera más rico.' },
          { step: 'Were is always used in fixed expressions: "I wish I were you"', stepEs: 'Were se usa siempre en expresiones fijas', example: 'If I were you, I\'d apologize. I wish I were you.', translation: 'Si yo fuera tú, me disculparía.' },
        ]
      },
      {
        label: 'Wish + could (for ability)',
        labelEs: 'Wish + could (para habilidad)',
        formula: 'wish + subject + could + base verb',
        steps: [
          { step: 'For present inability, use could (past form of can)', stepEs: 'Para incapacidad presente, usa could (forma pasada de can)', example: 'I wish I could speak Japanese. (I can\'t.)', translation: 'Ojalá pudiera hablar japonés.' },
          { step: 'Could is a modal — no -s for third person', stepEs: 'Could es modal — no lleva -s en tercera persona', example: 'He wishes he could swim. (NOT: coulds)', translation: 'Él desea poder nadar.' },
        ]
      },
    ],
    signalWords: [
      { word: 'wish', meaning: 'expresses unreal present desire', meaningEs: 'expresa deseo presente irreal' },
      { word: 'if only', meaning: 'stronger than wish, same structure', meaningEs: 'más fuerte que wish, misma estructura' },
    ],
    l1Contrast: {
      concept: 'Wish + Past Simple parallels Spanish "Ojalá + subjuntivo imperfecto"',
      conceptEs: 'Wish + Past Simple es paralelo a "Ojalá + subjuntivo imperfecto"',
      spanishBehavior: 'Spanish: "Ojalá tuviera dinero", "Ojalá fuera más alto", "Ojalá pudiera volar". The subjunctive imperfect (tuviera, fuera, pudiera) expresses the same unreality.',
      englishBehavior: 'English uses a tense shift: present wish → Past Simple. The past form does NOT mean past time; it signals unreality. "I wish I had" = Ojalá tuviera (present), not "I wish I had had" (that would be past regret).',
      contrastExamples: [
        { english: 'I wish I had more time. (present)', spanish: 'Ojalá tuviera más tiempo.', note: 'Had = tuviera (subjuntivo imperfecto). Both refer to present, not past.' },
        { english: 'I wish I were you.', spanish: 'Ojalá fuera tú.', note: 'Were = fuera. Formal English prefers "were" for all persons.' },
        { english: 'I wish I could fly.', spanish: 'Ojalá pudiera volar.', note: 'Could = pudiera. Past form for present unreality.' },
      ]
    },
    predictedErrors: [
      { error: 'I wish I have more money.', correction: 'I wish I had more money.', whyEs: 'Para deseos presentes irreales: wish + Past Simple. "Have" es presente; necesitas "had" (pasado con valor de irrealidad).', frequency: 'very common' },
      { error: 'I wish I would be taller.', correction: 'I wish I were taller.', whyEs: 'Para deseos sobre uno mismo en el presente NO se usa "would". Se usa Past Simple (were). "Would" se usa para deseos sobre otros.', frequency: 'very common' },
      { error: 'She wishes she has a car.', correction: 'She wishes she had a car.', whyEs: 'Después de wish: Past Simple. Has → had. La tercera persona no lleva -s en la cláusula de wish.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'I wish I _____ play the piano. (but I can\'t)', question: 'Present unreal ability:', options: ['can', 'could', 'will', 'would'], correct: 1, explanationEs: 'Incapacidad presente irreal → could (past of can).' },
        { sentence: 'She wishes she _____ in a bigger city.', question: 'Present unreal situation (live):', options: ['lives', 'live', 'lived', 'living'], correct: 2, explanationEs: 'Wish + Past Simple. Live → lived.' },
        { sentence: 'I wish I _____ taller. (formal)', question: 'Be with wish:', options: ['am', 'was', 'were', 'be'], correct: 2, explanationEs: 'Formalmente se prefiere "were" para todos los sujetos.' },
        { sentence: 'We wish we _____ (have) more free time.', question: 'Complete:', options: ['have', 'had', 'would have', 'has'], correct: 1, explanationEs: 'Wish + Past Simple. Have → had.' },
        { sentence: 'Correct: I wish I would be rich.', question: 'Present wish about yourself:', options: ['I wish I were rich.', 'I wish I would be rich.', 'I wish I am rich.', 'I wish I will be rich.'], correct: 0, explanationEs: 'No "would" for wish about yourself.' },
      ],
      controlled: [
        { prompt: 'Complete: I wish I _____ (have) more time for hobbies.', promptEs: 'Completa: Ojalá tuviera más tiempo para hobbies.', answer: 'I wish I had more time for hobbies.', hint: 'wish + Past Simple' },
        { prompt: 'Write a wish about a skill you don\'t have:', promptEs: 'Escribe un deseo sobre una habilidad que no tienes.', answer: 'I wish I could speak French. / I wish I could swim.', hint: 'wish + could + base verb' },
        { prompt: 'Correct: She wishes she has a better job.', promptEs: 'Corrige: Ella desea tener un mejor trabajo.', answer: 'She wishes she had a better job.', hint: 'has → had' },
        { prompt: 'Complete: I wish it _____ (be) Friday today.', promptEs: 'Completa: Ojalá fuera viernes hoy.', answer: 'I wish it were Friday today.', hint: 'were for all persons (formal)' },
      ]
    },
    recycleInTopics: ['b2-wish-if-only', 'b1-third-conditional', 'b2-conditionals-all'],
    tipEs: '💡 Truco: "Wish" + pasado = deseo AHORA (irreal). Si el verbo va en pasado después de wish, es porque el inglés usa el pasado para indicar irrealidad, no tiempo pasado. Piensa: "Ojalá tuviera" = "I wish I had" — ambos son presente irreal.'
  },

  // ═══════════════════════════════════════════════
  // B2 — Mixed Conditionals
  // ═══════════════════════════════════════════════
  {
    id: 'b2-mixed-conditionals',
    title: 'Mixed Conditionals — Mixed Time References',
    titleEs: 'Condicionales Mixtos — Referencias Temporales Mixtas',
    level: 'B2',
    cefrLevel: 4,
    category: 'clauses',
    priority: 'high',
    prerequisiteIds: ['b1-third-conditional', 'b2-conditionals-all'],
    explanation: 'Mixed conditionals combine different time references: a past condition with a present result, or a present condition with a past result. They are used when the condition and result refer to different times. The two main types are: (1) Past condition → Present result: If + Past Perfect, would + base verb. (2) Present condition → Past result: If + Past Simple, would have + past participle.',
    explanationEs: 'Los condicionales mixtos combinan referencias temporales diferentes: una condición pasada con un resultado presente, o una condición presente con un resultado pasado. Se usan cuando la condición y el resultado se refieren a tiempos distintos. Los dos tipos principales: (1) Condición pasada → Resultado presente. (2) Condición presente → Resultado pasado.',
    formationRules: [
      {
        label: 'Type 1: Past condition → Present result',
        labelEs: 'Tipo 1: Condición pasada → Resultado presente',
        formula: 'If + Past Perfect, would + base verb',
        steps: [
          { step: 'The condition is in the past (Past Perfect); the result affects NOW', stepEs: 'La condición está en el pasado; el resultado afecta al presente', example: 'If I had studied medicine, I would be a doctor now.', translation: 'Si hubiera estudiado medicina, sería médico ahora.' },
          { step: 'Use for: past decisions/actions with present consequences', stepEs: 'Usar para: decisiones/acciones pasadas con consecuencias presentes', example: "If she hadn't left him, she would still be married.", translation: 'Si no lo hubiera dejado, seguiría casada.' },
          { step: 'Result clause uses would/could/might + base verb (NOT would have)', stepEs: 'La cláusula resultado usa would/could/might + verbo base (NO would have)', example: 'If I had learned Spanish as a child, I could speak it fluently now.', translation: 'Si hubiera aprendido español de niño, podría hablarlo con fluidez ahora.' },
        ]
      },
      {
        label: 'Type 2: Present condition → Past result',
        labelEs: 'Tipo 2: Condición presente → Resultado pasado',
        formula: 'If + Past Simple, would have + past participle',
        steps: [
          { step: 'The condition is a general present characteristic; the result was in the past', stepEs: 'La condición es una característica presente general; el resultado fue en el pasado', example: "If I weren't so shy, I would have spoken to her at the party.", translation: 'Si no fuera tan tímido, le habría hablado en la fiesta.' },
          { step: 'Use for: explaining a past failure by a present trait', stepEs: 'Usar para: explicar un fracaso pasado por un rasgo presente', example: "If he were more organized, he wouldn't have missed the deadline.", translation: 'Si fuera más organizado, no habría perdido el plazo.' },
        ]
      },
      {
        label: 'Inversion in mixed conditionals',
        labelEs: 'Inversión en condicionales mixtos',
        formula: 'Had + Subject + pp (formal)',
        steps: [
          { step: 'Type 1 mixed: Had I known... = If I had known...', stepEs: 'Tipo 1 mixto: Had I known... = Si hubiera sabido...', example: 'Had I studied harder, I would have a better job now.', translation: 'De haber estudiado más, tendría un mejor trabajo ahora.' },
          { step: 'Same inversion rule as third conditional', stepEs: 'Misma regla de inversión que el tercer condicional', example: 'Had she accepted the offer, she would be living in Paris now.', translation: 'De haber aceptado la oferta, estaría viviendo en París ahora.' },
        ]
      },
    ],
    signalWords: [
      { word: 'now', meaning: 'signals present result', meaningEs: 'señala resultado presente' },
      { word: 'still', meaning: 'ongoing present state', meaningEs: 'estado presente continuo' },
      { word: 'would + base verb', meaning: 'present/future result', meaningEs: 'resultado presente/futuro' },
      { word: 'would have + pp', meaning: 'past result', meaningEs: 'resultado pasado' },
    ],
    l1Contrast: {
      concept: 'Mixed conditionals: Spanish uses same structure with mixed times',
      conceptEs: 'Condicionales mixtos: el español usa la misma estructura con tiempos mixtos',
      spanishBehavior: 'Spanish: "Si hubiera estudiado medicina, sería médico ahora." The structure is parallel. Spanish speakers may confuse which tense goes where when both times differ.',
      englishBehavior: 'English follows strict rules: Past Perfect in if-clause = past condition. Would + base = present result. Would have + pp = past result. The key is matching the correct result form to the time of the result.',
      contrastExamples: [
        { english: 'If I had studied harder, I would be at university now.', spanish: 'Si hubiera estudiado más, estaría en la universidad ahora.', note: 'Past condition (had studied), present result (would be).' },
        { english: "If I weren't so lazy, I would have finished the project.", spanish: 'Si no fuera tan vago, habría terminado el proyecto.', note: 'Present trait (weren\'t), past result (would have finished).' },
      ]
    },
    predictedErrors: [
      { error: 'If I had studied medicine, I would have been a doctor now.', correction: 'If I had studied medicine, I would be a doctor now.', whyEs: 'El resultado es AHORA (presente), no en el pasado. Usa "would be", no "would have been".', frequency: 'very common' },
      { error: 'If I weren\'t shy, I would speak to her.', correction: "If I weren't so shy, I would have spoken to her at the party.", whyEs: 'Si el resultado (hablarle) fue en el pasado, usa "would have spoken". "Would speak" es presente/futuro.', frequency: 'common' },
      { error: 'If I had known, I would have tell you.', correction: 'If I had known, I would have told you.', whyEs: 'Would have + participio pasado (told), no infinitivo (tell).', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'If I _____ (study) medicine, I would be a doctor now.', question: 'Past condition, present result:', options: ['studied', 'had studied', 'would study', 'have studied'], correct: 1, explanationEs: 'Condición pasada → Past Perfect. Resultado presente → would be.' },
        { sentence: 'If she _____ (leave) earlier, she _____ (be) at home now.', question: 'Mixed conditional type 1:', options: ['had left / would be', 'left / would be', 'had left / would have been', 'left / would have been'], correct: 0, explanationEs: 'Past condition (had left), present result (would be).' },
        { sentence: '_____ I known, I would have helped.', question: 'Formal inversion (past condition):', options: ['If', 'Had', 'Would', 'Have'], correct: 1, explanationEs: 'Had I known = If I had known.' },
        { sentence: 'If I _____ (be) more confident, I would have asked for a raise.', question: 'Present condition, past result:', options: ['am', 'were', 'had been', 'would be'], correct: 1, explanationEs: 'Condición presente (característica) → Past Simple (were). Resultado pasado → would have asked.' },
        { sentence: 'Correct: If I had learned French, I would have speak it now.', question: 'Find the error:', options: ['would speak', 'would have spoken', 'would be speaking', 'would have speak'], correct: 0, explanationEs: 'Resultado presente → would + base verb (speak). "Now" = present.' },
      ],
      controlled: [
        { prompt: 'Mixed conditional: I didn\'t study. I\'m not a doctor now.', promptEs: 'Condicional mixto: No estudié. No soy médico ahora.', answer: "If I had studied medicine, I would be a doctor now.", hint: 'Past condition + present result' },
        { prompt: 'Complete: If she _____ (accept) the job, she _____ (live) in London now.', promptEs: 'Completa: Si hubiera aceptado el trabajo, viviría en Londres ahora.', answer: 'If she had accepted the job, she would be living in London now.', hint: 'had accepted + would be living' },
        { prompt: 'Present condition, past result: I\'m shy. I didn\'t talk to her.', promptEs: 'Condición presente, resultado pasado: Soy tímido. No le hablé.', answer: "If I weren't so shy, I would have talked to her.", hint: 'If + Past Simple (were), would have + pp' },
        { prompt: 'Correct: If I had known, I would have be there.', promptEs: 'Corrige: Si hubiera sabido, habría estado allí.', answer: 'If I had known, I would have been there.', hint: 'would have + past participle (been)' },
      ]
    },
    recycleInTopics: ['b2-conditionals-all', 'b2-wish-if-only', 'c1-inversion'],
    tipEs: '💡 Mapa: ¿El resultado es AHORA o EN EL PASADO? Si es ahora → would + verbo base. Si fue en el pasado → would have + participio. La condición: ¿pasado? → had + pp. ¿Presente (rasgo)? → Past Simple (were, had, etc.).'
  },

  // ═══════════════════════════════════════════════
  // C1 — Ellipsis and Substitution
  // ═══════════════════════════════════════════════
  {
    id: 'c1-ellipsis-substitution',
    title: 'Ellipsis and Substitution',
    titleEs: 'Elipsis y Sustitución',
    level: 'C1',
    cefrLevel: 5,
    category: 'discourse',
    priority: 'high',
    prerequisiteIds: ['b1-relative-clauses', 'b2-participle-clauses'],
    explanation: 'Ellipsis is the omission of words that are recoverable from context. Substitution is replacing a word or phrase with a pro-form (so, do, one, not). Both create cohesion and avoid repetition in spoken and written English. Mastery of ellipsis and substitution is essential for natural, fluent discourse.',
    explanationEs: 'La elipsis es la omisión de palabras recuperables del contexto. La sustitución es reemplazar una palabra o frase con un pro-forma (so, do, one, not). Ambos crean cohesión y evitan repetición. El dominio de elipsis y sustitución es esencial para un discurso natural y fluido.',
    formationRules: [
      {
        label: 'Verbal ellipsis and substitution with DO',
        labelEs: 'Elipsis y sustitución verbal con DO',
        formula: 'Subject + do/does/did (replaces verb phrase)',
        steps: [
          { step: 'Use "do/does/did" to replace a verb phrase in responses', stepEs: 'Usa "do/does/did" para reemplazar una frase verbal en respuestas', example: '"Do you like jazz?" "Yes, I do." (do = like jazz)', translation: '"¿Te gusta el jazz?" "Sí."' },
          { step: 'Avoid repeating the full verb: "She works harder than I do"', stepEs: 'Evita repetir el verbo completo', example: 'He runs faster than she does. I enjoyed it more than they did.', translation: 'Él corre más rápido que ella. Lo disfruté más que ellos.' },
          { step: 'So/Neither + auxiliary + subject for agreement', stepEs: 'So/Neither + auxiliar + sujeto para acuerdo', example: '"I love it." "So do I." "I can\'t swim." "Neither can I."', translation: '"A mí también." "Yo tampoco."' },
        ]
      },
      {
        label: 'Nominal substitution with ONE/ONES',
        labelEs: 'Sustitución nominal con ONE/ONES',
        formula: 'one (singular) / ones (plural)',
        steps: [
          { step: 'ONE replaces a countable noun (singular)', stepEs: 'ONE reemplaza un sustantivo contable singular', example: 'I need a new phone. This one is broken. Which one do you want?', translation: 'Necesito un móvil nuevo. Este está roto. ¿Cuál quieres?' },
          { step: 'ONES replaces a countable noun (plural)', stepEs: 'ONES reemplaza un sustantivo contable plural', example: 'I prefer the red apples to the green ones. These shoes are too small — do you have bigger ones?', translation: 'Prefiero las manzanas rojas a las verdes. ¿Tienes unas más grandes?' },
          { step: 'ONE/ONES often follow a determiner or adjective', stepEs: 'ONE/ONES suelen seguir a un determinante o adjetivo', example: 'the big one, a cheap one, the best ones', translation: 'el grande, uno barato, los mejores' },
        ]
      },
      {
        label: 'Clausal substitution with SO and NOT',
        labelEs: 'Sustitución clausal con SO y NOT',
        formula: 'so (positive) / not (negative)',
        steps: [
          { step: 'SO replaces a positive that-clause', stepEs: 'SO reemplaza una cláusula that positiva', example: '"Is he coming?" "I think so." (= I think he is coming.)', translation: '"¿Viene?" "Creo que sí."' },
          { step: 'NOT replaces a negative that-clause', stepEs: 'NOT reemplaza una cláusula that negativa', example: '"Will it rain?" "I hope not." (= I hope it won\'t rain.)', translation: '"¿Lloverá?" "Espero que no."' },
          { step: 'Common verbs: think, hope, believe, expect, suppose, imagine', stepEs: 'Verbos comunes: think, hope, believe, expect, suppose, imagine', example: 'I believe so. I don\'t expect so. I suppose not.', translation: 'Creo que sí. No espero que sí. Supongo que no.' },
        ]
      },
    ],
    signalWords: [
      { word: 'so', meaning: 'replaces positive clause', meaningEs: 'reemplaza cláusula positiva' },
      { word: 'not', meaning: 'replaces negative clause', meaningEs: 'reemplaza cláusula negativa' },
      { word: 'one/ones', meaning: 'replaces countable noun', meaningEs: 'reemplaza sustantivo contable' },
      { word: 'do/does/did', meaning: 'replaces verb phrase', meaningEs: 'reemplaza frase verbal' },
    ],
    l1Contrast: {
      concept: 'Spanish uses different strategies for ellipsis and substitution',
      conceptEs: 'El español usa estrategias diferentes para elipsis y sustitución',
      spanishBehavior: 'Spanish often repeats the verb or uses "lo/la/los/las" for nominal substitution. "Creo que sí" exists but "I think so" has a different structure. Spanish may repeat: "¿Te gusta?" "Sí, me gusta."',
      englishBehavior: 'English strongly prefers substitution (do, so, not, one/ones) over repetition. "Do you like it?" "Yes, I do." — the "do" is mandatory. Repeating "like it" sounds unnatural.',
      contrastExamples: [
        { english: '"Do you like it?" "Yes, I do."', spanish: '"¿Te gusta?" "Sí." / "Sí, me gusta."', note: 'English requires "do" in short answer. Spanish can just say "Sí" or repeat.' },
        { english: 'I prefer the red one to the blue one.', spanish: 'Prefiero el rojo al azul. / Prefiero el rojo al azul.', note: 'English needs "one" after the adjective. Spanish can use just the adjective (el rojo).' },
        { english: '"Is she coming?" "I hope not."', spanish: '"¿Viene?" "Espero que no."', note: 'Both use a negative substitute. English "not" replaces the whole clause.' },
      ]
    },
    predictedErrors: [
      { error: '"Do you like coffee?" "Yes, I like."', correction: '"Do you like coffee?" "Yes, I do."', whyEs: 'En respuestas cortas con verbos normales (no auxiliares), se usa do/does/did. No se puede omitir y dejar solo "like".', frequency: 'very common' },
      { error: 'I prefer the red to the blue.', correction: 'I prefer the red one to the blue one.', whyEs: 'En inglés, después del adjetivo se necesita "one" cuando sustituyes un sustantivo contable. En español "el rojo" basta.', frequency: 'common' },
      { error: '"Will it rain?" "I don\'t think it will rain."', correction: '"Will it rain?" "I don\'t think so."', whyEs: 'Repetir la cláusula completa suena pesado. "I don\'t think so" es natural. "So" sustituye "it will rain".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '"Do you speak French?" "Yes, I _____."', question: 'Short answer:', options: ['speak', 'do', 'speak it', 'do speak'], correct: 1, explanationEs: 'Do/does/did sustituye la frase verbal. "I do" = I speak French.' },
        { sentence: 'I prefer the black shoes to the brown _____.', question: 'Nominal substitution:', options: ['one', 'ones', 'shoes', 'them'], correct: 1, explanationEs: 'Shoes = plural → ones. "The brown ones" = los marrones.' },
        { sentence: '"Is the meeting cancelled?" "I _____ so."', question: 'Clausal substitution (positive):', options: ['hope', 'think', 'believe', 'All correct'], correct: 3, explanationEs: 'I hope/think/believe so = Creo que sí / Espero que sí.' },
        { sentence: 'She works harder than I _____.', question: 'Verbal substitution:', options: ['work', 'do', 'am', 'have'], correct: 1, explanationEs: '"Do" sustituye "work". Than I do = que yo.' },
        { sentence: '"Will they agree?" "I _____ not."', question: 'Negative clausal substitution:', options: ['hope', 'think', 'expect', 'All correct'], correct: 3, explanationEs: 'I hope/think/expect not = Espero/Creo que no.' },
      ],
      controlled: [
        { prompt: 'Short answer: "Do you play tennis?" (Yes)', promptEs: 'Respuesta corta: ¿Juegas al tenis? (Sí)', answer: 'Yes, I do.', hint: 'do replaces "play tennis"' },
        { prompt: 'Substitute: "I prefer the new car to the old _____."', promptEs: 'Sustituye: Prefiero el coche nuevo al viejo.', answer: 'I prefer the new car to the old one.', hint: 'one for singular countable' },
        { prompt: '"Is she leaving?" Respond with "I hope not."', promptEs: '"¿Se va?" Responde con "Espero que no."', answer: "I hope not.", hint: 'not replaces negative clause' },
        { prompt: 'Agreement: "I love this song." (You too)', promptEs: 'Acuerdo: Me encanta esta canción. (Tú también)', answer: 'So do I.', hint: 'So + auxiliary + subject' },
      ]
    },
    recycleInTopics: ['c2-discourse-cohesion', 'c1-hedging', 'b1-reported-speech'],
    tipEs: '💡 Cuatro pro-formas clave: (1) DO/DOES/DID → sustituye verbos. (2) ONE/ONES → sustituye sustantivos contables. (3) SO → sustituye cláusula positiva (I think so). (4) NOT → sustituye cláusula negativa (I hope not). En español a menudo se omite o se repite; en inglés se sustituye.'
  },

  // ═══════════════════════════════════════════════
  // C1 — Passive Reporting Structures
  // ═══════════════════════════════════════════════
  {
    id: 'c1-passive-reporting',
    title: 'Passive Reporting Structures',
    titleEs: 'Estructuras Pasivas de Reporte',
    level: 'C1',
    cefrLevel: 5,
    category: 'sentences',
    priority: 'high',
    prerequisiteIds: ['b2-passive-advanced', 'b1-reported-speech'],
    explanation: 'Passive reporting structures are used to report information, beliefs, or claims without stating the source explicitly. They are essential in academic writing, journalism, and formal discourse. Two main patterns: (1) It + passive verb + that-clause: "It is said that...", "It has been reported that...". (2) Subject + passive verb + to-infinitive: "He is said to be...", "The company is believed to have...".',
    explanationEs: 'Las estructuras pasivas de reporte se usan para informar creencias o afirmaciones sin citar la fuente explícitamente. Son esenciales en escritura académica, periodismo y discurso formal. Dos patrones: (1) It + verbo pasivo + that-clause. (2) Sujeto + verbo pasivo + to-infinitive.',
    formationRules: [
      {
        label: 'It + passive verb + that-clause',
        labelEs: 'It + verbo pasivo + that-clause',
        formula: 'It is/was/has been + said/believed/reported/thought/expected + that + clause',
        steps: [
          { step: 'Common reporting verbs: say, believe, report, think, expect, assume, claim, understand', stepEs: 'Verbos comunes: say, believe, report, think, expect, assume, claim, understand', example: 'It is believed that the economy will recover. It has been reported that the minister will resign.', translation: 'Se cree que la economía se recuperará. Se ha informado de que el ministro dimitirá.' },
          { step: 'Tense in that-clause matches the time of the reported situation', stepEs: 'El tiempo en la that-clause coincide con el tiempo de la situación reportada', example: 'It is thought that he lives abroad. It was said that she had left.', translation: 'Se cree que vive en el extranjero. Se dijo que se había ido.' },
          { step: 'Used when the focus is on the information, not the source', stepEs: 'Se usa cuando el foco está en la información, no en la fuente', example: 'It is understood that negotiations are ongoing.', translation: 'Se entiende que las negociaciones continúan.' },
        ]
      },
      {
        label: 'Subject + passive verb + to-infinitive',
        labelEs: 'Sujeto + verbo pasivo + to-infinitive',
        formula: 'Subject + is/are/was/were + said/believed/thought + to-infinitive',
        steps: [
          { step: 'Present/future: Subject + is said + to-infinitive', stepEs: 'Presente/futuro: Sujeto + is said + to-infinitive', example: 'He is said to be the richest man in the country. She is expected to win.', translation: 'Se dice que es el hombre más rico. Se espera que gane.' },
          { step: 'Past: Subject + is said + to have + past participle', stepEs: 'Pasado: Sujeto + is said + to have + participio', example: 'He is said to have left the country. The building is believed to have been built in 1900.', translation: 'Se dice que ha dejado el país. Se cree que el edificio fue construido en 1900.' },
          { step: 'Continuous: Subject + is said + to be + -ing', stepEs: 'Continuo: Sujeto + is said + to be + -ing', example: 'She is thought to be considering an offer.', translation: 'Se cree que está considerando una oferta.' },
        ]
      },
      {
        label: 'Choosing between the two structures',
        labelEs: 'Elegir entre las dos estructuras',
        steps: [
          { step: 'It-clause: when the subject of the reported clause is long or complex', stepEs: 'It-clause: cuando el sujeto de la cláusula reportada es largo o complejo', example: 'It is believed that the new policy will affect millions of people.', translation: 'Se cree que la nueva política afectará a millones.' },
          { step: 'Subject form: when you want to put the reported subject in focus', stepEs: 'Forma con sujeto: cuando quieres poner el sujeto reportado en foco', example: 'The minister is expected to resign tomorrow.', translation: 'Se espera que el ministro dimita mañana.' },
        ]
      },
    ],
    signalWords: [
      { word: 'it is said/believed/reported', meaning: 'impersonal passive reporting', meaningEs: 'pasiva impersonal de reporte' },
      { word: 'is/are expected to', meaning: 'expectation about subject', meaningEs: 'expectativa sobre el sujeto' },
      { word: 'is/are thought to have', meaning: 'past belief about subject', meaningEs: 'creencia pasada sobre el sujeto' },
    ],
    l1Contrast: {
      concept: 'Spanish "se" passive vs. English passive reporting',
      conceptEs: 'Pasiva con "se" en español vs. estructuras pasivas de reporte en inglés',
      spanishBehavior: 'Spanish uses "se cree que", "se dice que", "se espera que" — very similar structure. The subject form "Él es considerado el mejor" exists but is less common than "Se considera que él es el mejor."',
      englishBehavior: 'English uses both structures extensively. The subject + passive + to-infinitive is MORE common in English than the equivalent in Spanish, especially in news and academic writing.',
      contrastExamples: [
        { english: 'It is believed that he will win.', spanish: 'Se cree que ganará.', note: 'Direct parallel. Both use impersonal passive.' },
        { english: 'He is believed to be the best candidate.', spanish: 'Se cree que es el mejor candidato.', note: 'English prefers the subject form for conciseness. Spanish often keeps "se cree que".' },
        { english: 'The company is expected to announce results tomorrow.', spanish: 'Se espera que la empresa anuncie los resultados mañana.', note: 'English: subject first. Spanish: "se" + clause.' },
      ]
    },
    predictedErrors: [
      { error: 'It is said that he has been left the country.', correction: 'He is said to have left the country. / It is said that he has left the country.', whyEs: 'No mezcles las dos estructuras. "Has been left" es incorrecto — "left" aquí es verbo (irse), no participio de "leave" (dejar).', frequency: 'common' },
      { error: 'He is said that he is rich.', correction: 'He is said to be rich. / It is said that he is rich.', whyEs: 'Con la forma "Subject + is said" va "to-infinitive", no "that-clause". Si usas "that", empieza con "It is said that".', frequency: 'very common' },
      { error: 'It is believed the economy to recover.', correction: 'It is believed that the economy will recover.', whyEs: 'Después de "It is believed" con that-clause, la cláusula debe ser completa (sujeto + verbo). No "to recover" directamente.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'He _____ to be the best candidate for the job.', question: 'Passive reporting (subject form):', options: ['is said', 'says', 'is say', 'said'], correct: 0, explanationEs: 'Subject + is said + to-infinitive.' },
        { sentence: '_____ that the CEO will resign next month.', question: 'It-clause:', options: ['It is reported', 'It reports', 'They report', 'It has reported'], correct: 0, explanationEs: 'It is reported that + clause.' },
        { sentence: 'She is thought _____ abroad last year.', question: 'Past reporting:', options: ['to leave', 'to have left', 'to left', 'to be left'], correct: 1, explanationEs: 'Past: to have + past participle.' },
        { sentence: '_____ is expected to make an announcement today.', question: 'Subject form:', options: ['It', 'The government', 'There', 'That'], correct: 1, explanationEs: 'The government is expected to... = Se espera que el gobierno...' },
        { sentence: 'Correct: He is said that he is leaving.', question: 'Find the correct form:', options: ['He is said to be leaving.', 'It is said that he is leaving.', 'Both A and B', 'He is said he is leaving.'], correct: 2, explanationEs: 'Both are correct. Subject form: to be leaving. It-clause: that he is leaving.' },
      ],
      controlled: [
        { prompt: 'Transform: "People say he is a genius." (use passive reporting)', promptEs: 'Transforma: Dicen que es un genio.', answer: 'He is said to be a genius. / It is said that he is a genius.', hint: 'Subject + is said + to be / It is said that' },
        { prompt: 'Transform: "People believe she left the country." (past)', promptEs: 'Transforma: Creen que dejó el país.', answer: 'She is believed to have left the country.', hint: 'to have + past participle' },
        { prompt: 'Complete: The minister _____ (expect) to resign tomorrow.', promptEs: 'Completa: Se espera que el ministro dimita mañana.', answer: 'The minister is expected to resign tomorrow.', hint: 'is expected + to-infinitive' },
        { prompt: 'Correct: He is said that he has won the election.', promptEs: 'Corrige: Se dice que ha ganado las elecciones.', answer: 'He is said to have won the election.', hint: 'Subject form uses to-infinitive, not that-clause' },
      ]
    },
    recycleInTopics: ['c1-academic-writing', 'b2-passive-advanced', 'c2-register-shift'],
    tipEs: '💡 Dos estructuras, una elección: (1) It is said that + SUJETO + VERBO — cuando el sujeto es largo. (2) SUJETO + is said + to-infinitive — cuando quieres destacar al sujeto. Para pasado: to have + participio. Nunca mezcles: "He is said that..." es incorrecto.'
  },

  // ═══════════════════════════════════════════════
  // C2 — Subjunctive in Formal English
  // ═══════════════════════════════════════════════
  {
    id: 'c2-formal-subjunctive',
    title: 'Subjunctive in Formal English',
    titleEs: 'Subjuntivo en Inglés Formal',
    level: 'C2',
    cefrLevel: 6,
    category: 'verbs',
    priority: 'medium',
    prerequisiteIds: ['c1-subjunctive', 'c2-register-shift'],
    explanation: 'The formal subjunctive in English is used in legal, academic, and formal writing to express necessity, importance, or hypothetical conditions. Unlike the mandative subjunctive (recommend that he go), the formal subjunctive includes: (1) Fixed expressions: "as it were", "be that as it may", "so be it". (2) Conditional clauses in formal/legal language: "If need be", "Whether it be". (3) Wishes and formal optatives: "Long live the King!", "God save the Queen." The base form of the verb is used (without -s for 3rd person).',
    explanationEs: 'El subjuntivo formal en inglés se usa en lenguaje legal, académico y formal para expresar necesidad, importancia o condiciones hipotéticas. Incluye: (1) Expresiones fijas. (2) Cláusulas condicionales formales/legales. (3) Deseos y optativos formales. Se usa la forma base del verbo (sin -s en 3ª persona).',
    formationRules: [
      {
        label: 'Fixed subjunctive expressions',
        labelEs: 'Expresiones fijas con subjuntivo',
        formula: 'Base form of verb (no -s)',
        steps: [
          { step: '"Be that as it may" = de todos modos, aun así', stepEs: '"Be that as it may" = de todos modos, aun así', example: 'Be that as it may, we must proceed with the plan.', translation: 'Sea como sea, debemos proceder con el plan.' },
          { step: '"So be it" = que así sea, aceptado', stepEs: '"So be it" = que así sea, aceptado', example: 'If that is your decision, so be it.', translation: 'Si esa es tu decisión, que así sea.' },
          { step: '"As it were" = por así decirlo (marks figurative language)', stepEs: '"As it were" = por así decirlo', example: 'He is, as it were, the soul of the project.', translation: 'Él es, por así decirlo, el alma del proyecto.' },
        ]
      },
      {
        label: 'Conditional subjunctive: If need be, Whether it be',
        labelEs: 'Subjuntivo condicional: If need be, Whether it be',
        formula: 'If/Whether + subject + base verb',
        steps: [
          { step: '"If need be" = si es necesario, si hace falta', stepEs: '"If need be" = si es necesario, si hace falta', example: 'I will work all night if need be.', translation: 'Trabajaré toda la noche si hace falta.' },
          { step: '"Whether it be X or Y" = ya sea X o Y', stepEs: '"Whether it be X or Y" = ya sea X o Y', example: 'We will support you, whether it be financially or morally.', translation: 'Te apoyaremos, ya sea financiera o moralmente.' },
          { step: '"Come what may" = pase lo que pase', stepEs: '"Come what may" = pase lo que pase', example: 'Come what may, I will stand by you.', translation: 'Pase lo que pase, estaré a tu lado.' },
        ]
      },
      {
        label: 'Optative subjunctive: Long live..., God save...',
        labelEs: 'Subjuntivo optativo: Long live..., God save...',
        formula: 'Long/God + base verb + subject',
        steps: [
          { step: 'Inverted order for formal wishes and blessings', stepEs: 'Orden invertido para deseos y bendiciones formales', example: 'Long live the King! God save the Queen!', translation: '¡Viva el Rey! ¡Dios salve a la Reina!' },
          { step: 'Fixed expressions: "Heaven forbid", "Suffice it to say"', stepEs: 'Expresiones fijas', example: 'Heaven forbid that such a thing should happen. Suffice it to say that we disagreed.', translation: 'Dios no quiera que tal cosa ocurra. Basta con decir que no estábamos de acuerdo.' },
          { step: 'Base form only — no tense marking', stepEs: 'Solo forma base — sin marca de tiempo', example: 'Be he friend or foe, we shall receive him.', translation: 'Ya sea amigo o enemigo, lo recibiremos.' },
        ]
      },
    ],
    signalWords: [
      { word: 'be that as it may', meaning: 'nevertheless, regardless', meaningEs: 'de todos modos, aun así' },
      { word: 'if need be', meaning: 'if necessary', meaningEs: 'si es necesario' },
      { word: 'whether it be', meaning: 'whether it is (formal)', meaningEs: 'ya sea que sea' },
      { word: 'long live', meaning: 'formal wish for longevity', meaningEs: 'viva (deseo formal)' },
    ],
    l1Contrast: {
      concept: 'Spanish subjunctive is pervasive; English formal subjunctive is rare and formulaic',
      conceptEs: 'El subjuntivo español es omnipresente; el subjuntivo formal inglés es raro y formulaico',
      spanishBehavior: 'Spanish uses subjunctive in countless contexts: wishes, doubts, emotions, after certain conjunctions. "Que viva", "sea como sea", "venga lo que venga" are common.',
      englishBehavior: 'English formal subjunctive is limited to fixed expressions and very formal/legal register. Most "subjunctive" contexts in English use modals (should, might) or indicative. The base-form subjunctive survives mainly in set phrases.',
      contrastExamples: [
        { english: 'Be that as it may, we must act.', spanish: 'Sea como sea, debemos actuar.', note: 'Both use subjunctive. "Be" = "sea".' },
        { english: 'Long live the King!', spanish: '¡Viva el Rey!', note: 'Identical structure: base form + subject. ¡Viva! = Long live!' },
        { english: 'If need be, I will help.', spanish: 'Si hace falta, ayudaré.', note: 'English "if need be" is fossilized subjunctive. Spanish uses indicative "hace" in the equivalent.' },
      ]
    },
    predictedErrors: [
      { error: 'Be that as it may, but we should consider...', correction: 'Be that as it may, we should consider...', whyEs: '"Be that as it may" ya introduce una concesión. No añadas "but" — suena redundante.', frequency: 'occasional' },
      { error: 'Long lives the King!', correction: 'Long live the King!', whyEs: 'El subjuntivo usa la forma base "live", no "lives". Es una fórmula fija invariable.', frequency: 'common' },
      { error: 'If needs be, I will do it.', correction: 'If need be, I will do it.', whyEs: '"If need be" es una expresión fija. "Need" va sin -s (es subjuntivo/forma base).', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '_____, we must proceed with caution.', question: 'Fixed expression (nevertheless):', options: ['Be that as it may', 'So be it', 'If need be', 'Long live'], correct: 0, explanationEs: 'Be that as it may = sea como sea, de todos modos.' },
        { sentence: '_____ the King! (formal wish)', question: 'Optative subjunctive:', options: ['Long live', 'Long lives', 'Live long', 'Lives long'], correct: 0, explanationEs: 'Long live + subject. Base form "live", not "lives".' },
        { sentence: 'I will help you, _____ financially or with advice.', question: 'Whether structure:', options: ['whether it is', 'whether it be', 'if it is', 'if it be'], correct: 1, explanationEs: 'Whether it be X or Y = ya sea X o Y (formal).' },
        { sentence: 'If _____ be, I will work overtime.', question: 'Conditional subjunctive:', options: ['need', 'needs', 'necessary', 'needing'], correct: 0, explanationEs: 'If need be = si es necesario. "Need" sin -s.' },
        { sentence: 'Correct: "If that is your decision, so be it." — What does "so be it" mean?', question: 'Meaning:', options: ['I disagree', 'I accept', 'I will change it', 'I refuse'], correct: 1, explanationEs: 'So be it = que así sea, aceptado.' },
      ],
      controlled: [
        { prompt: 'Complete: _____, we will not give up.', promptEs: 'Completa: _____, no nos rendiremos. (sea como sea)', answer: 'Be that as it may', hint: 'Fixed expression' },
        { prompt: 'Formal wish: "¡Viva la República!"', promptEs: 'Deseo formal: ¡Viva la República!', answer: 'Long live the Republic!', hint: 'Long + base verb + subject' },
        { prompt: 'Complete: I will do whatever it takes, _____ (si es necesario).', promptEs: 'Completa: Haré lo que sea necesario, _____.', answer: 'if need be', hint: 'If need be' },
        { prompt: 'Correct: Long lives the Queen!', promptEs: 'Corrige: ¡Viva la Reina!', answer: 'Long live the Queen!', hint: 'Base form, not "lives"' },
      ]
    },
    recycleInTopics: ['c1-subjunctive', 'c2-academic-writing', 'c2-register-shift'],
    tipEs: '💡 El subjuntivo formal en inglés es como fósiles gramaticales: sobrevive en expresiones fijas. Tres grupos: (1) CONCESIÓN: "Be that as it may", "So be it". (2) CONDICIÓN: "If need be", "Whether it be", "Come what may". (3) OPTATIVO: "Long live...", "God save...". Siempre forma base del verbo — sin -s, sin -ed.'
  },

  // ═══════════════════════════════════════════════
  // C2 — Nominalization in Academic English
  // ═══════════════════════════════════════════════
  {
    id: 'c2-nominalization',
    title: 'Nominalization in Academic English',
    titleEs: 'Nominalización en Inglés Académico',
    level: 'C2',
    cefrLevel: 6,
    category: 'nouns',
    priority: 'high',
    prerequisiteIds: ['c1-nominalization', 'c2-register-shift'],
    explanation: 'Nominalization is the conversion of verbs and adjectives into nouns to achieve a formal, impersonal academic register. At C2 level, learners master sophisticated nominalization patterns: verb→noun (analyse→analysis, discover→discovery), adjective→noun (effective→effectiveness, stable→stability), and clause→noun phrase. This creates denser, more authoritative prose typical of academic and professional writing.',
    explanationEs: 'La nominalización es la conversión de verbos y adjetivos en sustantivos para lograr un registro académico formal e impersonal. En C2, se dominan patrones sofisticados: verbo→sustantivo, adjetivo→sustantivo, y cláusula→frase nominal. Crea prosa más densa y autoritaria típica de la escritura académica.',
    formationRules: [
      {
        label: 'Verb to noun: common suffixes',
        labelEs: 'Verbo a sustantivo: sufijos comunes',
        formula: 'Verb + -tion/-ment/-ence/-ance/-al',
        steps: [
          { step: '-tion: analyse→analysis, decide→decision, produce→production', stepEs: '-tion: analizar→análisis, decidir→decisión', example: 'The analysis of the data revealed significant patterns.', translation: 'El análisis de los datos reveló patrones significativos.' },
          { step: '-ment: develop→development, improve→improvement, govern→government', stepEs: '-ment: desarrollar→desarrollo, mejorar→mejora', example: 'The development of new technologies has accelerated.', translation: 'El desarrollo de nuevas tecnologías se ha acelerado.' },
          { step: '-ence/-ance: depend→dependence, appear→appearance, resist→resistance', stepEs: '-ence/-ance: depender→dependencia, aparecer→aparición', example: 'The dependence of the economy on oil is well documented.', translation: 'La dependencia de la economía del petróleo está bien documentada.' },
        ]
      },
      {
        label: 'Adjective to noun',
        labelEs: 'Adjetivo a sustantivo',
        formula: 'Adjective + -ness/-ity/-ence',
        steps: [
          { step: '-ness: effective→effectiveness, aware→awareness, stable→stability (→-ity)', stepEs: '-ness: efectivo→efectividad, consciente→conciencia', example: 'The effectiveness of the intervention was measured.', translation: 'Se midió la efectividad de la intervención.' },
          { step: '-ity: possible→possibility, complex→complexity, diverse→diversity', stepEs: '-ity: posible→posibilidad, complejo→complejidad', example: 'The complexity of the issue requires careful consideration.', translation: 'La complejidad del asunto requiere consideración cuidadosa.' },
        ]
      },
      {
        label: 'Clause to noun phrase',
        labelEs: 'Cláusula a frase nominal',
        steps: [
          { step: 'Replace finite clause with nominal subject', stepEs: 'Reemplazar cláusula finita con sujeto nominal', example: '"If we analyse carefully" → "A careful analysis"', translation: 'Si analizamos con cuidado → Un análisis cuidadoso' },
          { step: 'Use abstract nouns for processes and states', stepEs: 'Usar sustantivos abstractos para procesos y estados', example: '"The company failed" → "The company\'s failure"', translation: 'La empresa fracasó → El fracaso de la empresa' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Spanish uses more verbal structures; English academic prefers nominal',
      conceptEs: 'El español usa más estructuras verbales; el inglés académico prefiere nominal',
      spanishBehavior: 'Spanish academic writing often retains verbal structures: "Se analizó", "Se descubrió que". Nominalization exists but is less pervasive than in English.',
      englishBehavior: 'English academic writing strongly favours nominalization: "The analysis revealed", "The discovery that". Verbs are often "light" (make, have, lead to) supporting nominal arguments.',
      contrastExamples: [
        { english: 'The implementation of the policy resulted in widespread change.', spanish: 'La implementación de la política resultó en un cambio generalizado.', note: 'Both can nominalize; English does it more consistently for register.' },
        { english: 'A careful examination of the evidence suggests...', spanish: 'Si examinamos la evidencia con cuidado, sugiere...', note: 'English: nominal subject. Spanish: often conditional clause with verb.' },
      ]
    },
    predictedErrors: [
      { error: 'The analyse of the data shows...', correction: 'The analysis of the data shows...', whyEs: '"Analyse" es verbo; el sustantivo es "analysis". Atención a la ortografía: -yse (verbo) vs -ysis (sustantivo).', frequency: 'common' },
      { error: 'The government\'s decide to cut spending...', correction: 'The government\'s decision to cut spending...', whyEs: 'Después del posesivo se necesita el sustantivo "decision", no el verbo "decide".', frequency: 'common' },
      { error: 'An effective intervention was measured.', correction: 'The effectiveness of the intervention was measured.', whyEs: 'En nominalización académica se mide "effectiveness" (la cualidad), no "intervention" (el objeto).', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: 'Which is the correct nominalization of "to discover"?', question: 'Verb → noun:', options: ['discovery', 'discoverment', 'discoveration', 'discoverence'], correct: 0, explanationEs: 'discover → discovery. Patrón -y para verbos que terminan en -er.' },
        { sentence: '"The _____ of the policy was unexpected." (from "to implement")', question: 'Complete with nominal form:', options: ['implement', 'implementation', 'implementment', 'implementance'], correct: 1, explanationEs: 'implement → implementation. Sufijo -tion.' },
        { sentence: 'Which sentence is more academic?', question: 'Register:', options: ['We analysed the data and found patterns.', 'The analysis of the data revealed significant patterns.', 'We did an analysis.', 'Our analysis showed patterns.'], correct: 1, explanationEs: 'La nominalización "The analysis...revealed" es más formal e impersonal que estructuras con "we".' },
        { sentence: '"Stable" → noun?', question: 'Adjective to noun:', options: ['stableness', 'stability', 'stabileness', 'stabilization'], correct: 1, explanationEs: 'stable → stability. -ity para adjetivos en -able/-ible.' },
      ],
      controlled: [
        { prompt: 'Nominalize: "The researchers discovered that the drug was effective."', promptEs: 'Nominaliza: Los investigadores descubrieron que el fármaco era efectivo.', answer: 'The discovery of the drug\'s effectiveness...', hint: 'discover→discovery, effective→effectiveness' },
        { prompt: 'Rewrite with nominalization: "If we examine the evidence carefully, we will understand."', promptEs: 'Reescribe con nominalización: Si examinamos la evidencia con cuidado, entenderemos.', answer: 'A careful examination of the evidence will lead to understanding.', hint: 'examine→examination, understand→understanding' },
        { prompt: 'Nominalize: "The company failed to meet its targets."', promptEs: 'Nominaliza: La empresa no cumplió sus objetivos.', answer: 'The company\'s failure to meet its targets...', hint: 'failed→failure' },
      ]
    },
    recycleInTopics: ['c2-register-shift', 'c2-discourse-cohesion', 'c2-textual-metadiscourse'],
    tipEs: '💡 La nominalización en C2 convierte procesos (verbos) en entidades (sustantivos). Busca sufijos: -tion, -ment, -ness, -ity. El resultado: prosa más densa, impersonal y autoritaria.'
  },

  // ═══════════════════════════════════════════════
  // C2 — Fronting and Preposing
  // ═══════════════════════════════════════════════
  {
    id: 'c2-fronting-and-preposing',
    title: 'Fronting and Preposing',
    titleEs: 'Fronting y Preposición de Elementos',
    level: 'C2',
    cefrLevel: 6,
    category: 'syntax',
    priority: 'medium',
    prerequisiteIds: ['c1-cleft-sentences', 'c2-emphasis-patterns'],
    explanation: 'Fronting (or preposing) is the movement of a constituent to sentence-initial position for emphasis, contrast, or cohesion. At C2 level, learners use fronting of objects, complements, adverbials, and predicative adjectives to create sophisticated information structure and rhetorical effect. Common patterns: object fronting ("This I cannot accept"), complement fronting ("A complete disaster it was"), and adverbial fronting ("Only then did we realise").',
    explanationEs: 'El fronting (o preposición) es el desplazamiento de un constituyente a la posición inicial de la oración para énfasis, contraste o cohesión. En C2 se usa el fronting de objetos, complementos, adverbios y adjetivos predicativos para crear estructura informativa sofisticada.',
    formationRules: [
      {
        label: 'Object fronting',
        labelEs: 'Fronting de objeto',
        formula: 'Object + subject + verb (or Subject + auxiliary + verb)',
        steps: [
          { step: 'Direct object moved to front for emphasis', stepEs: 'Objeto directo desplazado al frente para énfasis', example: 'This proposal I cannot support. (normal: I cannot support this proposal.)', translation: 'Esta propuesta no puedo apoyar.' },
          { step: 'Often used with contrast or in formal register', stepEs: 'A menudo usado con contraste o en registro formal', example: 'Money we have; time we do not.', translation: 'Dinero tenemos; tiempo no.' },
        ]
      },
      {
        label: 'Complement and predicative fronting',
        labelEs: 'Fronting de complemento y predicativo',
        steps: [
          { step: 'Subject complement moved to front', stepEs: 'Complemento predicativo desplazado al frente', example: 'A complete disaster it was. (normal: It was a complete disaster.)', translation: 'Un desastre completo fue.' },
          { step: 'Adjective fronting for emphasis', stepEs: 'Fronting de adjetivo para énfasis', example: 'Strange it may seem, but he refused. (Strange as it may seem...)', translation: 'Por extraño que parezca, se negó.' },
        ]
      },
      {
        label: 'Adverbial fronting with inversion',
        labelEs: 'Fronting adverbial con inversión',
        steps: [
          { step: 'Negative/restrictive adverbs trigger subject-auxiliary inversion', stepEs: 'Adverbios negativos/restrictivos provocan inversión sujeto-auxiliar', example: 'Only then did we realise the truth.', translation: 'Solo entonces nos dimos cuenta de la verdad.' },
          { step: 'So + adjective fronting: "So great was the demand that..."', stepEs: 'So + adjetivo al frente', example: 'So intense was the debate that it lasted hours.', translation: 'Tan intenso fue el debate que duró horas.' },
        ]
      },
    ],
    l1Contrast: {
      concept: 'Spanish uses different word order for emphasis',
      conceptEs: 'El español usa distinto orden de palabras para énfasis',
      spanishBehavior: 'Spanish achieves emphasis through intonation, dislocation (left/right), or "lo que" clefts. Object fronting exists ("Esto no lo acepto") but patterns differ.',
      englishBehavior: 'English fronting is marked and formal. Object fronting ("This I cannot accept") is rare in speech, common in formal writing. Inversion after fronted adverbs is obligatory.',
      contrastExamples: [
        { english: 'This I cannot accept.', spanish: 'Esto no lo puedo aceptar. / Esto no acepto.', note: 'Spanish may use clitic "lo" or different structure.' },
        { english: 'Only then did we understand.', spanish: 'Solo entonces entendimos.', note: 'Spanish does NOT invert after "solo entonces"; English MUST invert (did we).' },
      ]
    },
    predictedErrors: [
      { error: 'Only then we realised.', correction: 'Only then did we realise.', whyEs: 'Tras "Only then" el inglés requiere inversión: auxiliar + sujeto. "Did we realise", no "we realised".', frequency: 'very common' },
      { error: 'This I cannot to accept.', correction: 'This I cannot accept.', whyEs: 'Tras "cannot" va el infinitivo sin "to". "Cannot accept", no "cannot to accept".', frequency: 'common' },
      { error: 'So great the demand was that...', correction: 'So great was the demand that...', whyEs: 'Con "So + adjective" al inicio, se invierte: "was the demand", no "the demand was".', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '"_____ did we realise the mistake." (Only after / Only then)', question: 'Correct fronting with inversion:', options: ['Only after we', 'Only then', 'Only when we', 'Only we'], correct: 1, explanationEs: 'Only then + inversión: did we realise.' },
        { sentence: 'Which is correct object fronting?', question: 'Object fronting:', options: ['This proposal I cannot support.', 'This proposal I cannot to support.', 'This proposal cannot I support.', 'I this proposal cannot support.'], correct: 0, explanationEs: 'Objeto al frente + sujeto + verbo. "Cannot support" sin "to".' },
        { sentence: '"So intense _____ the debate that..."', question: 'So + adjective fronting:', options: ['was', 'the debate was', 'did', 'had'], correct: 0, explanationEs: 'So + adjective requiere inversión: was the debate.' },
        { sentence: 'Fronting for emphasis: "It was a disaster." →', question: 'Complement fronting:', options: ['A disaster it was.', 'It was a disaster.', 'Was it a disaster.', 'Disaster it was.'], correct: 0, explanationEs: 'Complemento "a disaster" al frente: A disaster it was.' },
      ],
      controlled: [
        { prompt: 'Front the object: "I cannot accept this offer."', promptEs: 'Pon el objeto al frente: No puedo aceptar esta oferta.', answer: 'This offer I cannot accept.', hint: 'Object + subject + verb' },
        { prompt: 'Complete with inversion: "Only when the results arrived _____ we understand."', promptEs: 'Completa con inversión: Solo cuando llegaron los resultados _____ entendimos.', answer: 'did we', hint: 'Auxiliar + sujeto' },
        { prompt: 'Front the complement: "It was a complete failure."', promptEs: 'Pon el complemento al frente: Fue un fracaso completo.', answer: 'A complete failure it was.', hint: 'Complement + it + was' },
      ]
    },
    recycleInTopics: ['c2-emphasis-patterns', 'c2-discourse-cohesion', 'c2-register-shift'],
    tipEs: '💡 Fronting mueve elementos al inicio para énfasis. Regla clave: adverbios restrictivos (Only, Never, So + adj) al inicio → INVERSIÓN obligatoria (auxiliar + sujeto).'
  },

  // ═══════════════════════════════════════════════
  // C2 — Stance Markers and Evaluation
  // ═══════════════════════════════════════════════
  {
    id: 'c2-stance-markers',
    title: 'Stance Markers and Evaluation',
    titleEs: 'Marcadores de Postura y Evaluación',
    level: 'C2',
    cefrLevel: 6,
    category: 'adverbs',
    priority: 'high',
    prerequisiteIds: ['c1-hedging', 'c2-register-shift'],
    explanation: 'Stance markers express the speaker\'s or writer\'s attitude, certainty, or evaluation toward the proposition. At C2 level, learners use sophisticated stance markers: epistemic (apparently, supposedly, allegedly, arguably), evidential (reportedly, according to), and evaluative (regrettably, fortunately, surprisingly). These allow nuanced positioning and hedging in academic and professional discourse.',
    explanationEs: 'Los marcadores de postura expresan la actitud, certeza o evaluación del hablante hacia la proposición. En C2 se usan marcadores sofisticados: epistémicos (aparentemente, supuestamente), evidenciales (según informes) y evaluativos (lamentablemente, afortunadamente).',
    formationRules: [
      {
        label: 'Epistemic stance: certainty and source',
        labelEs: 'Postura epistémica: certeza y fuente',
        steps: [
          { step: 'apparently = según parece, se dice (distancia)', stepEs: 'apparently = según parece', example: 'Apparently, the meeting has been postponed.', translation: 'Al parecer, la reunión se ha pospuesto.' },
          { step: 'supposedly = supuestamente (often implies doubt)', stepEs: 'supposedly = supuestamente', example: 'He is supposedly an expert, but I have my doubts.', translation: 'Supuestamente es un experto, pero tengo mis dudas.' },
          { step: 'allegedly = presuntamente (legal/formal)', stepEs: 'allegedly = presuntamente', example: 'The defendant allegedly committed the offence.', translation: 'El acusado presuntamente cometió el delito.' },
          { step: 'arguably = podría argumentarse (academic hedging)', stepEs: 'arguably = podría argumentarse', example: 'This is arguably the most important finding.', translation: 'Podría argumentarse que este es el hallazgo más importante.' },
        ]
      },
      {
        label: 'Evidential stance: source of information',
        labelEs: 'Postura evidencial: fuente de información',
        steps: [
          { step: 'reportedly = según informes', stepEs: 'reportedly = según informes', example: 'Reportedly, sales have increased by 20%.', translation: 'Según informes, las ventas han aumentado un 20%.' },
          { step: 'according to + source', stepEs: 'according to + fuente', example: 'According to the latest data, inflation is falling.', translation: 'Según los últimos datos, la inflación está bajando.' },
        ]
      },
      {
        label: 'Evaluative stance: attitude',
        labelEs: 'Postura evaluativa: actitud',
        steps: [
          { step: 'regrettably, unfortunately = lamentablemente', stepEs: 'regrettably = lamentablemente', example: 'Regrettably, we cannot proceed with the project.', translation: 'Lamentablemente, no podemos continuar con el proyecto.' },
          { step: 'fortunately, surprisingly = afortunadamente, sorprendentemente', stepEs: 'fortunately = afortunadamente', example: 'Fortunately, the damage was minimal.', translation: 'Afortunadamente, los daños fueron mínimos.' },
        ]
      },
    ],
    signalWords: [
      { word: 'apparently', meaning: 'according to what is said, with distance', meaningEs: 'según parece, con distancia' },
      { word: 'supposedly', meaning: 'claimed to be true, often with doubt', meaningEs: 'supuestamente, a menudo con duda' },
      { word: 'allegedly', meaning: 'claimed without proof (legal)', meaningEs: 'presuntamente (legal)' },
      { word: 'arguably', meaning: 'can be argued, academic hedging', meaningEs: 'podría argumentarse' },
    ],
    l1Contrast: {
      concept: 'Spanish stance markers: positioning and register',
      conceptEs: 'Marcadores de postura en español: posicionamiento y registro',
      spanishBehavior: 'Spanish uses "aparentemente", "supuestamente", "presuntamente", "según", "lamentablemente". Similar semantic range but collocation may differ.',
      englishBehavior: 'English stance adverbs typically occur sentence-initially or before the main verb. "Apparently" and "supposedly" can imply scepticism; "allegedly" is strongly associated with legal context.',
      contrastExamples: [
        { english: 'Apparently, he has resigned.', spanish: 'Al parecer, ha dimitido.', note: 'Both express hearsay with distance.' },
        { english: 'The minister allegedly accepted bribes.', spanish: 'El ministro presuntamente aceptó sobornos.', note: 'Legal/formal context. "Allegedly" often before the verb.' },
      ]
    },
    predictedErrors: [
      { error: 'He is apparently an expert.', correction: 'He is supposedly an expert. (if implying doubt) / He is apparently an expert. (if neutral)', whyEs: '"Apparently" es más neutral; "supposedly" suele implicar escepticismo. Elige según la intención.', frequency: 'common' },
      { error: 'According to me, this is wrong.', correction: 'In my view / I think / In my opinion, this is wrong.', whyEs: '"According to" requiere una fuente externa (According to the report, According to John). No "according to me".', frequency: 'very common' },
      { error: 'Regrettably that we cannot attend.', correction: 'Regrettably, we cannot attend.', whyEs: '"Regrettably" es un adverbio de oración; no introduce "that"-clause. Va seguido de coma y oración completa.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: '"_____ the meeting has been cancelled." (hearsay, with distance)', question: 'Epistemic stance:', options: ['Apparently', 'Regrettably', 'Fortunately', 'Surprisingly'], correct: 0, explanationEs: 'Apparently = según parece, con distancia.' },
        { sentence: 'Which implies doubt or scepticism?', question: 'Stance nuance:', options: ['apparently', 'supposedly', 'reportedly', 'according to'], correct: 1, explanationEs: '"Supposedly" suele implicar que el hablante duda.' },
        { sentence: '"According to _____" — correct?', question: 'According to + source:', options: ['me', 'the report', 'my opinion', 'I think'], correct: 1, explanationEs: '"According to" requiere fuente externa: the report, the data, John. No "according to me".' },
        { sentence: '"_____ we cannot proceed." (expressing regret)', question: 'Evaluative stance:', options: ['Regrettably', 'Apparently', 'Arguably', 'Reportedly'], correct: 0, explanationEs: 'Regrettably = lamentablemente.' },
      ],
      controlled: [
        { prompt: 'Express hearsay with distance: "The deal has fallen through."', promptEs: 'Expresa rumor con distancia: El trato se ha caído.', answer: 'Apparently, the deal has fallen through.', hint: 'Apparently' },
        { prompt: 'Academic hedging: "This is the best approach."', promptEs: 'Hedging académico: Este es el mejor enfoque.', answer: 'This is arguably the best approach.', hint: 'arguably' },
        { prompt: 'Correct: "According to me, we should wait."', promptEs: 'Corrige: Según yo, deberíamos esperar.', answer: 'In my view / In my opinion, we should wait.', hint: 'No "according to me"' },
      ]
    },
    recycleInTopics: ['c1-hedging', 'c2-register-shift', 'c2-pragmatic-implicature'],
    tipEs: '💡 Stance markers posicionan al hablante. "Apparently" = neutral/hearsay. "Supposedly" = con duda. "Allegedly" = legal. "According to" + fuente externa, NUNCA "according to me".'
  },

  // ═══════════════════════════════════════════════
  // C2 — Textual Metadiscourse
  // ═══════════════════════════════════════════════
  {
    id: 'c2-textual-metadiscourse',
    title: 'Textual Metadiscourse',
    titleEs: 'Metadiscurso Textual',
    level: 'C2',
    cefrLevel: 6,
    category: 'discourse',
    priority: 'high',
    prerequisiteIds: ['c2-discourse-cohesion', 'c2-register-shift'],
    explanation: 'Textual metadiscourse comprises expressions that organise discourse, guide the reader through the text, and signal the structure of the argument. At C2 level, learners use sophisticated organisers: sequencing (firstly, secondly, in the first place), additive (furthermore, moreover, in addition), contrastive (however, nevertheless, having said that), and conclusive (to conclude, in sum, to summarise). These create clear, professional text structure.',
    explanationEs: 'El metadiscurso textual comprende expresiones que organizan el discurso, guían al lector y señalan la estructura del argumento. En C2 se usan organizadores sofisticados: secuencia, adición, contraste y conclusión.',
    formationRules: [
      {
        label: 'Sequencing and ordering',
        labelEs: 'Secuenciación y orden',
        steps: [
          { step: 'Firstly, secondly, thirdly — formal enumeration', stepEs: 'Firstly, secondly — enumeración formal', example: 'Firstly, we must consider the cost. Secondly, the timeline.', translation: 'En primer lugar, debemos considerar el coste. En segundo, el calendario.' },
          { step: 'In the first place, to begin with', stepEs: 'In the first place = en primer lugar', example: 'In the first place, the evidence is inconclusive.', translation: 'En primer lugar, la evidencia no es concluyente.' },
        ]
      },
      {
        label: 'Additive and elaborative',
        labelEs: 'Aditivo y elaborativo',
        steps: [
          { step: 'Furthermore, moreover, in addition — add information', stepEs: 'Furthermore = además, más aún', example: 'The data is reliable. Furthermore, it has been independently verified.', translation: 'Los datos son fiables. Además, han sido verificados independientemente.' },
          { step: 'Having said that, that said — introduce qualification', stepEs: 'Having said that = dicho esto, no obstante', example: 'The results are promising. Having said that, more research is needed.', translation: 'Los resultados son prometedores. Dicho esto, se necesita más investigación.' },
        ]
      },
      {
        label: 'Contrastive and conclusive',
        labelEs: 'Contrastivo y conclusivo',
        steps: [
          { step: 'However, nevertheless, nonetheless — contrast', stepEs: 'However = sin embargo', example: 'The policy has merits. However, implementation remains challenging.', translation: 'La política tiene méritos. Sin embargo, la implementación sigue siendo un reto.' },
          { step: 'To conclude, in sum, to summarise — signal conclusion', stepEs: 'To conclude = para concluir', example: 'To conclude, the evidence supports a cautious approach.', translation: 'Para concluir, la evidencia apoya un enfoque cauteloso.' },
        ]
      },
    ],
    signalWords: [
      { word: 'firstly', meaning: 'first in a sequence', meaningEs: 'en primer lugar' },
      { word: 'having said that', meaning: 'introduce qualification after a claim', meaningEs: 'dicho esto, no obstante' },
      { word: 'to conclude', meaning: 'signal conclusion', meaningEs: 'para concluir' },
      { word: 'furthermore', meaning: 'add information', meaningEs: 'además, más aún' },
    ],
    l1Contrast: {
      concept: 'Discourse organisers across languages',
      conceptEs: 'Organizadores del discurso entre lenguas',
      spanishBehavior: 'Spanish uses "en primer lugar", "además", "sin embargo", "para concluir". Similar function; some expressions are calques (e.g. "en conclusión").',
      englishBehavior: 'English academic discourse favours explicit organisers. "Having said that" and "that said" are very common for qualification. "Firstly" is formal; "first" is also acceptable.',
      contrastExamples: [
        { english: 'Having said that, we must be cautious.', spanish: 'Dicho esto, debemos ser cautelosos.', note: 'Both use equivalent "having said that" / "dicho esto".' },
        { english: 'To conclude, the findings suggest...', spanish: 'Para concluir, los hallazgos sugieren...', note: 'Parallel structure.' },
      ]
    },
    predictedErrors: [
      { error: 'First, we consider X. Second, we consider Y.', correction: 'Firstly, we consider X. Secondly, we consider Y. (or: First... Second... — both acceptable)', whyEs: '"Firstly" y "secondly" son más formales en enumeración. "First" y "second" también son correctos pero menos académicos.', frequency: 'occasional' },
      { error: 'Having said that, but we must...', correction: 'Having said that, we must...', whyEs: '"Having said that" ya introduce contraste. No añadas "but" — es redundante.', frequency: 'common' },
      { error: 'To conclude with, the evidence shows...', correction: 'To conclude, the evidence shows...', whyEs: '"To conclude" no lleva "with". "To conclude with" es incorrecto.', frequency: 'occasional' },
    ],
    exercises: {
      recognition: [
        { sentence: 'Which signals a conclusion?', question: 'Conclusive marker:', options: ['Furthermore', 'Firstly', 'To conclude', 'Having said that'], correct: 2, explanationEs: 'To conclude = para concluir.' },
        { sentence: '"The results are positive. _____, more testing is needed." (qualification)', question: 'Qualification marker:', options: ['Furthermore', 'Having said that', 'Firstly', 'To conclude'], correct: 1, explanationEs: 'Having said that = dicho esto, introduce matización.' },
        { sentence: 'Which is correct?', question: 'Sequencing:', options: ['Firstly, secondly, thirdly', 'First, second, third', 'Both are acceptable', 'First, secondly, third'], correct: 2, explanationEs: 'Ambas formas son correctas. Firstly/secondly más formal.' },
        { sentence: '"_____ the cost is high, the benefits outweigh it." (contrast)', question: 'Contrastive marker:', options: ['Furthermore', 'Having said that', 'To conclude', 'Firstly'], correct: 1, explanationEs: 'Having said that introduce contraste o matización.' },
      ],
      controlled: [
        { prompt: 'Introduce a conclusion: "The evidence supports the hypothesis."', promptEs: 'Introduce una conclusión: La evidencia apoya la hipótesis.', answer: 'To conclude, the evidence supports the hypothesis.', hint: 'To conclude' },
        { prompt: 'Add qualification: "The plan is sound. _____ we need more funding."', promptEs: 'Añade matización: El plan es sólido. _____ necesitamos más financiación.', answer: 'Having said that,', hint: 'Having said that' },
        { prompt: 'Correct: "Having said that, but we disagree."', promptEs: 'Corrige: Dicho esto, pero no estamos de acuerdo.', answer: 'Having said that, we disagree.', hint: 'No "but" después de Having said that' },
      ]
    },
    recycleInTopics: ['c2-discourse-cohesion', 'c2-register-shift', 'c2-nominalization'],
    tipEs: '💡 Metadiscurso textual organiza el texto. Secuencia: Firstly, Secondly. Adición: Furthermore. Matización: Having said that. Conclusión: To conclude. Evita redundancia: "Having said that, but" es incorrecto.'
  },

  // ═══════════════════════════════════════════════
  // B1 — MODULE: Should / Shouldn't for Advice
  // ═══════════════════════════════════════════════
  {
    id: 'b1-advice-should',
    title: 'Should and Shouldn\'t for Advice',
    titleEs: 'Should y Shouldn\'t para Consejos',
    level: 'B1',
    cefrLevel: 3,
    category: 'verbs',
    priority: 'high',
    prerequisiteIds: ['a2-must-have-to-should'],
    explanation: 'Should and shouldn\'t are used to give advice, recommendations, or opinions. They are softer than must and express what is advisable rather than obligatory. Should is a modal verb — it takes the base form of the verb (no "to") and has no -s in the third person. For past advice or regret, use "should have + past participle".',
    explanationEs: 'Should y shouldn\'t se usan para dar consejos, recomendaciones u opiniones. Son más suaves que must y expresan lo que es aconsejable en lugar de obligatorio. Should es un verbo modal — lleva el verbo en forma base (sin "to") y no añade -s en tercera persona. Para consejo o arrepentimiento en el pasado, usa "should have + participio pasado".',
    formationRules: [
      {
        label: 'Affirmative advice',
        labelEs: 'Consejo afirmativo',
        formula: 'Subject + should + base verb',
        steps: [
          { step: 'Should = advice or recommendation (softer than must)', stepEs: 'Should = consejo o recomendación (más suave que must)', example: 'You should see a doctor. He should apologise.', translation: 'Deberías ir al médico. Debería disculparse.' },
          { step: 'No "to" after should; no -s in 3rd person', stepEs: 'Sin "to" después de should; sin -s en 3ª persona', example: 'She should go. (NOT she should to go / she shoulds go)', translation: 'Ella debería ir.' },
          { step: 'Common contexts: health, study, behaviour, decisions', stepEs: 'Contextos comunes: salud, estudio, comportamiento, decisiones', example: 'You should get more sleep. They should consider the options.', translation: 'Deberías dormir más. Deberían considerar las opciones.' },
        ]
      },
      {
        label: 'Negative advice',
        labelEs: 'Consejo negativo',
        formula: 'Subject + shouldn\'t + base verb',
        steps: [
          { step: "Shouldn't = negative advice (you advise against something)", stepEs: "Shouldn't = consejo negativo (aconsejas en contra)", example: "You shouldn't eat so much sugar. He shouldn't drive when tired.", translation: 'No deberías comer tanto azúcar. No debería conducir cuando está cansado.' },
          { step: "Contraction: should not → shouldn't", stepEs: "Contracción: should not → shouldn't", example: "You shouldn't worry. (You should not worry.)", translation: 'No deberías preocuparte.' },
        ]
      },
      {
        label: 'Questions with should',
        labelEs: 'Preguntas con should',
        formula: 'Should + subject + base verb?',
        steps: [
          { step: 'Asking for advice: Should I...? What should I...?', stepEs: 'Pedir consejo: Should I...? What should I...?', example: 'Should I call her? What should I wear?', translation: '¿Debería llamarla? ¿Qué debería ponerme?' },
          { step: 'Giving advice in response', stepEs: 'Dar consejo en respuesta', example: 'Yes, you should. / No, you shouldn\'t.', translation: 'Sí, deberías. / No, no deberías.' },
        ]
      }
    ],
    l1Contrast: {
      concept: 'Spanish "debería" vs English should',
      conceptEs: 'Español "debería" vs inglés should',
      spanishBehavior: 'Spanish "debería" (conditional of deber) maps well to should. "No deberías" = shouldn\'t. Spanish speakers may add "to" after should (deber + infinitivo) or add -s in 3rd person.',
      englishBehavior: 'Should + base verb (no "to"). No -s for he/she/it. "He should go" not "he shoulds go" or "he should to go".',
      contrastExamples: [
        { english: 'You should see a doctor.', spanish: 'Deberías ir al médico.', note: 'Direct equivalent. Should + base verb.' },
        { english: 'She should apologise. (NOT she shoulds / should to apologise)', spanish: 'Ella debería disculparse.', note: 'No -s, no "to" after should.' },
        { english: "You shouldn't worry.", spanish: 'No deberías preocuparte.', note: "Shouldn't = contracción de should not." },
      ]
    },
    predictedErrors: [
      { error: 'You should to see a doctor.', correction: 'You should see a doctor.', whyEs: 'Después de should NO se usa "to". Should + verbo base.', frequency: 'very common' },
      { error: 'He shoulds study more.', correction: 'He should study more.', whyEs: 'Los modales nunca añaden -s en 3ª persona.', frequency: 'very common' },
      { error: 'You should seeing a doctor.', correction: 'You should see a doctor.', whyEs: 'Should + infinitivo sin "to" (base form), no gerundio.', frequency: 'common' },
      { error: 'I should to go now.', correction: 'I should go now.', whyEs: 'Should + verbo base. Nunca "should to".', frequency: 'very common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'You look tired. You _____ rest.', question: 'Advice:', options: ['should', 'should to', 'shoulds', 'should to'], correct: 0, explanationEs: 'Consejo = should + verbo base.' },
        { sentence: 'She _____ apologise for what she said.', question: 'Which is correct?', options: ['should', 'shoulds', 'should to', 'should to'], correct: 0, explanationEs: 'Should + base verb. No -s, no "to".' },
        { sentence: 'You _____ eat so much junk food. (negative advice)', question: 'Negative advice:', options: ["shouldn't", "don't should", "should not to", "shouldn't to"], correct: 0, explanationEs: "Consejo negativo = shouldn't + base verb." },
        { sentence: '_____ I call her or wait?', question: 'Asking for advice:', options: ['Should', 'Do I should', 'Should I to', 'I should'], correct: 0, explanationEs: 'Pregunta de consejo: Should + sujeto + verbo base.' },
        { sentence: 'He _____ have told me. (regret — he didn\'t tell me)', question: 'Past advice/regret:', options: ['should', 'shoulds', 'should to', 'should have'], correct: 3, explanationEs: 'Arrepentimiento sobre el pasado = should have + participio.' },
      ],
      controlled: [
        { prompt: 'Correct: You should to see a doctor.', promptEs: 'Corrige: Deberías ir al médico.', answer: 'You should see a doctor.', hint: 'Should + base verb, no "to"' },
        { prompt: 'Correct: He shoulds apologise.', promptEs: 'Corrige: Él debería disculparse.', answer: 'He should apologise.', hint: 'Modals never add -s' },
        { prompt: 'Give advice: I have a headache.', promptEs: 'Da un consejo: Tengo dolor de cabeza.', answer: 'You should take a rest. / You should see a doctor.', hint: 'should + base verb' },
        { prompt: 'Negative advice: She drives too fast.', promptEs: 'Consejo negativo: Conduce muy rápido.', answer: "She shouldn't drive so fast.", hint: "shouldn't + base verb" },
        { prompt: 'Ask for advice: (about calling someone)', promptEs: 'Pide consejo: (sobre llamar a alguien)', answer: 'Should I call her?', hint: 'Should + I + base verb?' },
      ]
    },
    recycleInTopics: ['b1-modals-obligation', 'b1-modal-deduction'],
    tipEs: '💡 Should + verbo base (sin "to"). Nunca "should to" ni "shoulds". Para arrepentimiento en el pasado: "I should have gone" (debería haber ido). Should = consejo; must = obligación fuerte.'
  },

  // ═══════════════════════════════════════════════
  // B2 — MODULE: Discourse Markers
  // ═══════════════════════════════════════════════
  {
    id: 'b2-discourse-markers',
    title: 'Discourse Markers: However, Nevertheless, Furthermore',
    titleEs: 'Marcadores Discursivos: However, Nevertheless, Furthermore',
    level: 'B2',
    cefrLevel: 4,
    category: 'discourse',
    priority: 'high',
    prerequisiteIds: ['b1-linking-words'],
    explanation: 'Discourse markers are words or phrases that organise and connect ideas in spoken and written discourse. They signal relationships between clauses: contrast (however, nevertheless, on the contrary), addition (furthermore, moreover, in addition), sequence (firstly, secondly, finally), and conclusion (therefore, in conclusion, to sum up). Position and punctuation matter: "however" and "nevertheless" typically start a new sentence and need a semicolon or period before them.',
    explanationEs: 'Los marcadores discursivos son palabras o frases que organizan y conectan ideas en el discurso oral y escrito. Señalan relaciones entre cláusulas: contraste (however, nevertheless, on the contrary), adición (furthermore, moreover, in addition), secuencia (firstly, secondly, finally) y conclusión (therefore, in conclusion, to sum up). La posición y puntuación importan: "however" y "nevertheless" suelen iniciar una nueva oración y necesitan punto y coma o punto antes.',
    formationRules: [
      {
        label: 'Contrast markers',
        labelEs: 'Marcadores de contraste',
        formula: 'however / nevertheless / on the contrary',
        steps: [
          { step: '"However" = contrast, starts new sentence. Semicolon or period before; comma after', stepEs: '"However" = contraste, inicia nueva oración. Punto y coma o punto antes; coma después', example: 'I was tired. However, I went to the meeting. / I was tired; however, I went.', translation: 'Estaba cansado. Sin embargo, fui a la reunión.' },
          { step: '"Nevertheless" = despite that, more formal than however', stepEs: '"Nevertheless" = a pesar de eso, más formal que however', example: 'The results were disappointing. Nevertheless, we must continue.', translation: 'Los resultados fueron decepcionantes. No obstante, debemos continuar.' },
          { step: '"On the contrary" = the opposite is true', stepEs: '"On the contrary" = lo contrario es cierto', example: 'It wasn\'t difficult. On the contrary, it was quite easy.', translation: 'No fue difícil. Al contrario, fue bastante fácil.' },
        ]
      },
      {
        label: 'Addition markers',
        labelEs: 'Marcadores de adición',
        formula: 'furthermore / moreover / in addition',
        steps: [
          { step: '"Furthermore" and "moreover" add information, often in formal writing', stepEs: '"Furthermore" y "moreover" añaden información, a menudo en escritura formal', example: 'The plan is cost-effective. Furthermore, it is environmentally sound.', translation: 'El plan es rentable. Además, es ambientalmente sólido.' },
          { step: '"In addition" can start a sentence or be followed by a comma', stepEs: '"In addition" puede iniciar una oración o ir seguido de coma', example: 'In addition, we need to consider the timeline.', translation: 'Además, necesitamos considerar el cronograma.' },
        ]
      },
      {
        label: 'Sequence and conclusion',
        labelEs: 'Secuencia y conclusión',
        formula: 'firstly / secondly / finally / in conclusion / to sum up',
        steps: [
          { step: 'Sequence: firstly, secondly, thirdly, finally — organise arguments', stepEs: 'Secuencia: firstly, secondly, thirdly, finally — organizan argumentos', example: 'Firstly, we need funding. Secondly, we need staff. Finally, we need time.', translation: 'En primer lugar, necesitamos financiación. En segundo lugar, personal. Finalmente, tiempo.' },
          { step: 'Conclusion: in conclusion, to sum up, to conclude — signal the end', stepEs: 'Conclusión: in conclusion, to sum up, to conclude — señalan el final', example: 'In conclusion, the benefits outweigh the costs.', translation: 'En conclusión, los beneficios superan los costos.' },
        ]
      }
    ],
    l1Contrast: {
      concept: 'Spanish "sin embargo" / "no obstante" vs English discourse markers',
      conceptEs: 'Español "sin embargo" / "no obstante" vs marcadores en inglés',
      spanishBehavior: 'Spanish "sin embargo" = however, "no obstante" = nevertheless. Spanish speakers may overuse "but" or forget punctuation. "Furthermore" and "moreover" have no single-word Spanish equivalent — "además" covers both.',
      englishBehavior: 'Each marker has a specific register. "However" needs proper punctuation (; or . before). "Furthermore" and "moreover" are more formal than "also". Avoid "but" + "however" in the same sentence.',
      contrastExamples: [
        { english: 'I was tired. However, I continued.', spanish: 'Estaba cansado. Sin embargo, continué.', note: 'However starts new sentence; comma after.' },
        { english: 'The cost is high. Furthermore, the timeline is tight.', spanish: 'El costo es alto. Además, el cronograma es ajustado.', note: 'Furthermore = formal addition.' },
        { english: 'It wasn\'t a failure. On the contrary, it was a success.', spanish: 'No fue un fracaso. Al contrario, fue un éxito.', note: 'On the contrary = the opposite.' },
      ]
    },
    predictedErrors: [
      { error: 'I was tired however I continued.', correction: 'I was tired. However, I continued. / I was tired; however, I continued.', whyEs: '"However" conecta oraciones. Necesita punto o punto y coma antes, y coma después.', frequency: 'very common' },
      { error: 'Although it was expensive, however I bought it.', correction: 'Although it was expensive, I bought it. / It was expensive; however, I bought it.', whyEs: 'No combines "although" con "however". Usa uno u otro para contraste.', frequency: 'very common' },
      { error: 'In the contrary, it was easy.', correction: 'On the contrary, it was easy.', whyEs: 'La expresión correcta es "on the contrary", no "in the contrary".', frequency: 'common' },
      { error: 'Furthermore, we need more time. And also more money.', correction: 'Furthermore, we need more time and more money.', whyEs: '"Furthermore" ya introduce adición. Evita "and also" redundante.', frequency: 'common' },
    ],
    exercises: {
      recognition: [
        { sentence: 'The project was risky. _____, we decided to proceed.', question: 'Contrast marker (formal):', options: ['Nevertheless', 'And', 'Because', 'So'], correct: 0, explanationEs: '"Nevertheless" = a pesar de eso, contraste formal.' },
        { sentence: 'The plan is feasible. _____, it is cost-effective.', question: 'Addition marker (formal):', options: ['Furthermore', 'But', 'However', 'Although'], correct: 0, explanationEs: '"Furthermore" añade información en tono formal.' },
        { sentence: 'It wasn\'t a problem. _____, it was an opportunity.', question: 'The opposite is true:', options: ['On the contrary', 'In the contrary', 'However', 'Nevertheless'], correct: 0, explanationEs: '"On the contrary" = lo contrario es cierto.' },
        { sentence: '_____ we need to define the scope. _____ we need a budget.', question: 'Sequence markers:', options: ['Firstly / Secondly', 'However / Furthermore', 'Because / So', 'Nevertheless / Moreover'], correct: 0, explanationEs: 'Secuencia de argumentos: firstly, secondly.' },
        { sentence: '_____, the benefits outweigh the costs.', question: 'Conclusion marker:', options: ['In conclusion', 'However', 'Furthermore', 'Nevertheless'], correct: 0, explanationEs: '"In conclusion" señala el cierre del argumento.' },
      ],
      controlled: [
        { prompt: 'Correct: I was tired however I went.', promptEs: 'Corrige: Estaba cansado sin embargo fui.', answer: 'I was tired. However, I went.', hint: 'However needs ; or . before, comma after' },
        { prompt: 'Complete: The results were poor. _____, we must continue. (contrast, formal)', promptEs: 'Completa: Los resultados fueron pobres. _____, debemos continuar.', answer: 'Nevertheless', hint: 'Formal contrast marker' },
        { prompt: 'Complete: The proposal is strong. _____, it is affordable.', promptEs: 'Completa: La propuesta es sólida. _____, es asequible.', answer: 'Furthermore', hint: 'Addition marker' },
        { prompt: 'Correct: In the contrary, it was simple.', promptEs: 'Corrige: En el contrario, fue simple.', answer: 'On the contrary, it was simple.', hint: 'On the contrary, not in the contrary' },
        { prompt: 'Combine: It was expensive. I bought it. (use "however")', promptEs: 'Combina: Era caro. Lo compré. (usa "however")', answer: 'It was expensive. However, I bought it.', hint: 'However starts new sentence' },
      ]
    },
    recycleInTopics: ['c1-advanced-linking-devices', 'c1-hedging'],
    tipEs: '💡 However y nevertheless necesitan punto o punto y coma antes. "On the contrary" (no "in the contrary"). Furthermore/moreover = adición formal. Evita although + however juntos.'
  },

  ...practiceActivityTheoryModules,
];

// Helper functions
export const getTheoryByLevel = (level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'): GrammarTheoryModule[] =>
  grammarTheory.filter(m => m.level === level);

export const getTheoryByCefrLevel = (cefrLevel: number): GrammarTheoryModule[] =>
  grammarTheory.filter(m => m.cefrLevel === cefrLevel);

export const getTheoryByCategory = (category: GrammarTheoryModule['category']): GrammarTheoryModule[] =>
  grammarTheory.filter(m => m.category === category);

export const getTheoryById = (id: string): GrammarTheoryModule | undefined =>
  grammarTheory.find(m => m.id === id);

export const getTheoryByPriority = (priority: GrammarTheoryModule['priority']): GrammarTheoryModule[] =>
  grammarTheory.filter(m => m.priority === priority);

export const getPrerequisiteChain = (id: string): GrammarTheoryModule[] => {
  const module = getTheoryById(id);
  if (!module) return [];
  const chain: GrammarTheoryModule[] = [];
  const visited = new Set<string>();
  const traverse = (moduleId: string) => {
    if (visited.has(moduleId)) return;
    visited.add(moduleId);
    const m = getTheoryById(moduleId);
    if (!m) return;
    m.prerequisiteIds.forEach(traverse);
    chain.push(m);
  };
  traverse(id);
  return chain;
};
