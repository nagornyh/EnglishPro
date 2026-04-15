/**
 * Teoría ligada al *tipo de actividad* del flujo de lección (no solo al primer grammarTheoryId de la tarea).
 * Se concatena con los módulos de la tarea en getContextualTheoryModules (salvo pasos con teoría exclusiva).
 */
import type { GrammarTheoryModule } from './grammar-theory';

const miniExercises = {
  recognition: [
    {
      sentence: 'This hook module supports the current activity type in the lesson flow.',
      question: 'Activity-aligned theory (yes/no):',
      options: ['yes', 'no', 'maybe', 'never'],
      correct: 0,
      explanationEs: 'La teoría del FAB/Repasar se adapta al paso actual.',
    },
  ],
  controlled: [
    {
      prompt: 'Use this panel while you practise.',
      promptEs: 'Usa este panel mientras practicas esta actividad.',
      answer: 'ok',
      hint: 'Read the explanation tabs above',
    },
  ],
};

export const practiceActivityTheoryModules: GrammarTheoryModule[] = [
  {
    id: 'practice-aural-communication',
    title: 'Listening & pronunciation (activity focus)',
    titleEs: 'Escucha, sonidos y pronunciación (enfoque de la actividad)',
    level: 'A1',
    cefrLevel: 1,
    category: 'sentences',
    priority: 'medium',
    prerequisiteIds: [],
    explanation:
      'This step trains your ear and your pronunciation — not a single grammar tense. Listen for stress, word boundaries, and sounds that do not exist in Spanish (/θ/, /ð/ vowel reductions). Use replay, minimal pairs, and dictation to connect sounds to spelling.',
    explanationEs:
      'En este paso entrenas oído y pronunciación, no un solo tiempo verbal. Presta atención al acento, a los límites de palabra y a sonidos que no existen en español (/θ/, /ð/, vocales reducidas). Repite la escucha, usa pares mínimos y dictado para unir sonido y ortografía.',
    formationRules: [
      {
        label: 'Practical habits',
        labelEs: 'Hábitos prácticos',
        steps: [
          {
            step: 'Listen once for gist; a second time for each word.',
            stepEs: 'Escucha una vez la idea general; otra vez palabra a palabra.',
            example: 'Shadowing: repeat out loud right after the speaker.',
            translation: 'Repite en voz alta justo después del hablante.',
          },
          {
            step: 'Link spelling to sound — English is not phonetic.',
            stepEs: 'Une ortografía y sonido — el inglés no es fonético.',
            example: 'through /θruː/ vs through vs thought /θɔːt/',
            translation: 'Misma letra, distintos sonidos según la palabra.',
          },
        ],
      },
    ],
    l1Contrast: {
      concept: 'Spanish has fewer vowel sounds; English has more reduced vowels',
      conceptEs: 'El español tiene menos vocales; el inglés más vocales reducidas',
      spanishBehavior: 'Spanish vowels are clear and full; English unstressed syllables often use /ə/.',
      englishBehavior: 'Weak forms: "can" /kən/, "and" /ən/ in fast speech.',
      contrastExamples: [
        { english: 'photography /fəˈtɒɡrəfi/', spanish: 'fotografía (todas las vocales claras)', note: 'Schwa /ə/ in unstressed syllables.' },
      ],
    },
    predictedErrors: [
      {
        error: 'Adding /e/ before sp- clusters: *espeak',
        correction: 'speak /spiːk/',
        whyEs: 'No añadas una vocal de apoyo antes de sp-, st-, sc- al hablar inglés.',
        frequency: 'common',
      },
    ],
    exercises: miniExercises,
    recycleInTopics: [],
    tipEs: '💡 Dedica este paso al sonido, no a la gramática de la lección. Imita el ritmo y las pausas, no solo las palabras sueltas.',
  },
  {
    id: 'practice-reading-long-texts',
    title: 'Reading comprehension (activity focus)',
    titleEs: 'Comprensión lectora (enfoque de la actividad)',
    level: 'A2',
    cefrLevel: 2,
    category: 'sentences',
    priority: 'medium',
    prerequisiteIds: [],
    explanation:
      'Reading activities test global understanding, scanning for details, and inferring meaning from context. Skim first for topic and structure; then read questions; then scan for evidence in the text. Linking words (however, although, because) signal logical relations.',
    explanationEs:
      'La lectura evalúa idea global, búsqueda de detalles e inferencias con contexto. Hojea primero el tema y la estructura; lee las preguntas; vuelve al texto a buscar evidencia. Los conectores (however, although, because) marcan la lógica entre oraciones.',
    formationRules: [
      {
        label: 'A workable sequence',
        labelEs: 'Secuencia que funciona',
        steps: [
          {
            step: 'Title + first/last paragraph → main idea',
            stepEs: 'Título + primer y último párrafo → idea principal',
            example: 'Headings and topic sentences carry the outline.',
            translation: 'Títulos y frases tema marcan el esquema.',
          },
        ],
      },
    ],
    l1Contrast: {
      concept: 'English pronouns must trace back clearly to a noun',
      conceptEs: 'Los pronombres en inglés deben remitir con claridad',
      spanishBehavior: 'Spanish tolerates omission of the subject; English does not.',
      englishBehavior: '"It/they/this" must have a clear referent in the text.',
      contrastExamples: [
        { english: 'The policy failed. It was unpopular.', spanish: 'La política fracasó. Era impopular.', note: 'It = the policy.' },
      ],
    },
    predictedErrors: [
      {
        error: 'Translating word-by-word without checking cohesion',
        correction: 'Track references and connectors across sentences',
        whyEs: 'La cohesión en inglés se marca con pronombres y conectores; léelos en cadena.',
        frequency: 'common',
      },
    ],
    exercises: miniExercises,
    recycleInTopics: ['b1-linking-words'],
    tipEs: '💡 Subraya solo las líneas donde encuentras la respuesta; así entrenas “evidencia en el texto”.',
  },
  {
    id: 'practice-lexical-collocation',
    title: 'Vocabulary, chunks & collocations (activity focus)',
    titleEs: 'Vocabulario, colocaciones y memorización (enfoque de la actividad)',
    level: 'A1',
    cefrLevel: 1,
    category: 'nouns',
    priority: 'medium',
    prerequisiteIds: [],
    explanation:
      'Vocabulary steps reward learning words as chunks (adjective + noun, verb + preposition) rather than isolated glosses. Collocations are conventional pairings: *make a decision*, not *do a decision*. Mnemonics, families of words, and crosswords reinforce networks of related forms.',
    explanationEs:
      'En vocabulario conviene aprender “trozos” de idioma (adjetivo + nombre, verbo + preposición), no solo glosarios sueltos. Las colocaciones son parejas frecuentes: make a decision, no *do a decision*. Familias de palabras, nemotécnicos y crucigramas refuerzan redes de formas.',
    formationRules: [
      {
        label: 'Chunks beat single words',
        labelEs: 'Los bloques ganan a la palabra suelta',
        steps: [
          {
            step: 'Store “make progress”, “take a risk”, “pay attention”.',
            stepEs: 'Memoriza make progress, take a risk, pay attention.',
            example: 'light verb + noun pattern in English',
            translation: 'verbo ligero + nombre en inglés',
          },
        ],
      },
    ],
    l1Contrast: {
      concept: 'Spanish and English collocations differ',
      conceptEs: 'Las colocaciones difieren entre español e inglés',
      spanishBehavior: '"Tomar una decisión"',
      englishBehavior: '"Make a decision"',
      contrastExamples: [
        { english: 'make a mistake', spanish: 'cometer un error', note: 'Not *do a mistake*.' },
      ],
    },
    predictedErrors: [
      {
        error: '*strong rain',
        correction: 'heavy rain',
        whyEs: 'Las colocaciones no son literales; heavy + rain es la pareja natural.',
        frequency: 'very common',
      },
    ],
    exercises: miniExercises,
    recycleInTopics: ['b1-linking-words', 'a1-plurals'],
    tipEs: '💡 Cuando repitas tarjetas, di la palabra en una mini frase de dos o tres palabras.',
  },
  {
    id: 'practice-spoken-interaction',
    title: 'Dialogue & situational speaking (activity focus)',
    titleEs: 'Diálogo y oral situacional (enfoque de la actividad)',
    level: 'A1',
    cefrLevel: 1,
    category: 'pragmatics',
    priority: 'medium',
    prerequisiteIds: [],
    explanation:
      'Conversation steps practise turn-taking, fixed phrases (greetings, apologies, requests), and appropriate register. Grammar matters, but appropriateness — politeness, clarity, short turns — matters equally.',
    explanationEs:
      'Los pasos de conversación practican turnos, frases hechas (saludos, disculpas, peticiones) y registro adecuado. La gramática importa, pero también la cortesía, la claridad y los turnos breves.',
    formationRules: [
      {
        label: 'Softening requests',
        labelEs: 'Suavizar peticiones',
        steps: [
          {
            step: 'Could you…? / Would you mind…? / I was wondering if…',
            stepEs: 'Could you…? / Would you mind…? / I was wondering if…',
            example: 'Could you send it by Friday?',
            translation: '¿Podrías enviarlo para el viernes?',
          },
        ],
      },
    ],
    l1Contrast: {
      concept: 'Spanish directness vs English hedging',
      conceptEs: 'Franqueza española vs atenuación inglesa',
      spanishBehavior: '"Dámelo" can sound normal in Spanish.',
      englishBehavior: '"Could you pass me…?" sounds more natural in English.',
      contrastExamples: [
        { english: 'I was hoping we could reschedule.', spanish: 'Esperaba que pudiéramos cambiar la fecha.', note: 'Past continuous softens the request.' },
      ],
    },
    predictedErrors: [
      {
        error: 'Open the window! (to a stranger)',
        correction: 'Could you open the window, please?',
        whyEs: 'Las peticiones directas pueden sonar bruscas en inglés sin suavizado.',
        frequency: 'common',
      },
    ],
    exercises: miniExercises,
    recycleInTopics: ['a2-imperatives', 'c1-hedging'],
    tipEs: '💡 Memoriza 5 frases “puente” por situación (saludar, pedir, disculparte, agradecer).',
  },
  {
    id: 'practice-written-output-activities',
    title: 'Writing & transformations (activity focus)',
    titleEs: 'Escritura y transformaciones (enfoque de la actividad)',
    level: 'A2',
    cefrLevel: 2,
    category: 'syntax',
    priority: 'medium',
    prerequisiteIds: [],
    explanation:
      'Writing and transformation tasks connect accuracy (verb forms, agreement) and discourse (connectors, paragraphing). Plan one idea per sentence; use an explicit subject each time; check tense consistency across the paragraph.',
    explanationEs:
      'La escritura y las transformaciones combinan precisión (verbos, concordancia) y discurso (conectores, párrafos). Una idea clara por oración; sujeto explícito siempre; revisa que los tiempos no contradigan el marco temporal del texto.',
    formationRules: [
      {
        label: 'Before you submit',
        labelEs: 'Antes de enviar',
        steps: [
          {
            step: 'Time frame → tense frame (yesterday = Past Simple; since = Perfect, etc.)',
            stepEs: 'Marco temporal → tiempos (ayer = pasado; since = perfecto, etc.)',
            example: 'Underline time words; align every finite verb.',
            translation: 'Subraya marcas de tiempo; alinea cada verbo finito.',
          },
        ],
      },
    ],
    l1Contrast: {
      concept: 'Spanish allows subject drop; written English rarely does',
      conceptEs: 'El español omite sujeto; el inglés escrito casi nunca',
      spanishBehavior: '"Fui al parque" — subject clear from verb ending',
      englishBehavior: '"I went to the park" — subject required',
      contrastExamples: [
        { english: 'Is expensive. → It is expensive.', spanish: 'Es caro.', note: 'Dummy "it" for impersonal statements.' },
      ],
    },
    predictedErrors: [
      {
        error: 'Tense shift inside one narrative without signal',
        correction: 'Keep Past Simple storyline unless you introduce flashback rules',
        whyEs: 'Mezclar pasado y presente sin señalar el cambio confunde al lector.',
        frequency: 'common',
      },
    ],
    exercises: miniExercises,
    recycleInTopics: ['b1-linking-words', 'a2-past-simple'],
    tipEs: '💡 Lee en voz alta lo que escribiste: si atropallas la respiración, la frase suele ser demasiado larga.',
  },
  {
    id: 'practice-false-cognates',
    title: 'False friends (activity focus)',
    titleEs: 'Falsos amigos (enfoque de la actividad)',
    level: 'A2',
    cefrLevel: 2,
    category: 'pragmatics',
    priority: 'medium',
    prerequisiteIds: [],
    explanation:
      'Cognates look similar but diverge in meaning or register: *actual* ≠ actual (English "current/real"); *sensible* ≠ sensible (English "sensitive/reasonable"). Treat each pair as a new lexical entry.',
    explanationEs:
      'Los cognados parecen iguales pero divergen: actual ≠ actual en inglés (current/real); sensible ≠ sensible (sensitive/reasonable). Trata cada par como una entrada léxica nueva.',
    formationRules: [
      {
        label: 'Verify before you reuse',
        labelEs: 'Comprueba antes de repetir',
        steps: [
          {
            step: 'Check English example sentences in a learner dictionary.',
            stepEs: 'Mira oraciones de ejemplo en un diccionario para aprendices.',
            example: 'Eventually ≠ eventualmente (often “finally” in English).',
            translation: 'Eventually suele ser “finalmente”, no “eventualmente”.',
          },
        ],
      },
    ],
    l1Contrast: {
      concept: 'Similar spelling ≠ safe translation',
      conceptEs: 'Ortografía parecida ≠ traducción segura',
      spanishBehavior: '"Asistir" often means attend, not assist.',
      englishBehavior: '"Assist" = ayudar; attend a meeting = ir / estar presente.',
      contrastExamples: [
        { english: 'I attended the lecture.', spanish: 'Asistí a la conferencia.', note: 'Not *assisted the lecture*.' },
      ],
    },
    predictedErrors: [
      {
        error: 'I am very constipated today. (meaning cold)',
        correction: 'I have a bad cold.',
        whyEs: 'False friend: constipated ≠ constipado (resfriado).',
        frequency: 'very common',
      },
    ],
    exercises: miniExercises,
    recycleInTopics: [],
    tipEs: '💡 Cada vez que una palabra “suene española”, sospecha y busca un ejemplo inglés.',
  },
  {
    id: 'practice-formulaic-expressions',
    title: 'Idioms & phrasal verbs (activity focus)',
    titleEs: 'Modismos y phrasal verbs (enfoque de la actividad)',
    level: 'B1',
    cefrLevel: 3,
    category: 'discourse',
    priority: 'medium',
    prerequisiteIds: [],
    explanation:
      'Idioms and phrasal verbs are multi-word units: their meaning is not the sum of parts (*give up* = quit). Learn them as wholes with one example context; note separable vs inseparable phrasal verbs for object placement.',
    explanationEs:
      'Los modismos y phrasal verbs son unidades: el significado no suma las partes (give up = rendirse). Apréndelos enteros con un ejemplo; separables (pick it up) vs inseparables (run into).',
    formationRules: [
      {
        label: 'Object placement (separable)',
        labelEs: 'Colocación del objeto (separables)',
        steps: [
          {
            step: 'NP object: turn the light off / turn off the light',
            stepEs: 'Objeto largo: suele ir después de la partícula',
            example: 'turn it off — pronoun between verb and particle',
            translation: 'pronombre entre verbo y partícula',
          },
        ],
      },
    ],
    l1Contrast: {
      concept: 'Spanish verbal periphrasis ≠ English phrasal pattern',
      conceptEs: 'Las perifrasis españolas no calcan el phrasal inglés',
      spanishBehavior: '"Dejar de fumar"',
      englishBehavior: '"Give up smoking" / "quit smoking"',
      contrastExamples: [
        { english: 'She looked after the children.', spanish: 'Cuidó a los niños.', note: 'look after ≠ look + después.' },
      ],
    },
    predictedErrors: [
      {
        error: '*discuss about the plan',
        correction: 'discuss the plan',
        whyEs: '"Discuss" ya incluye la idea de “sobre”; no añadas about.',
        frequency: 'common',
      },
    ],
    exercises: miniExercises,
    recycleInTopics: [],
    tipEs: '💡 Anota phrasal + una micro-oración real; sin contexto no fijan en la memoria.',
  },
  {
    id: 'practice-culture-and-context',
    title: 'Culture, register & curiosity (activity focus)',
    titleEs: 'Cultura, registro y curiosidades (enfoque de la actividad)',
    level: 'A1',
    cefrLevel: 1,
    category: 'pragmatics',
    priority: 'low',
    prerequisiteIds: [],
    explanation:
      'Cultural notes explain *when* and *how* English is used — not just grammar rules. Register (formal/neutral/informal) and politeness strategies differ between UK, US, and other varieties. Fun facts reinforce motivation and memory through story, not drills.',
    explanationEs:
      'Las notas culturales explican cuándo y cómo se usa el inglés, no solo reglas. El registro (formal/neutral/informal) y la cortesía varían entre Reino Unido, EE. UU. y otras variedades. Los datos curiosos refuerzan motivación y memoria mediante historia, no solo ejercicios.',
    formationRules: [
      {
        label: 'Observe, then imitate',
        labelEs: 'Observa, luego imita',
        steps: [
          {
            step: 'Notice who speaks to whom and what form of address they use.',
            stepEs: 'Fíjate quién habla con quién y qué trato emplea.',
            example: 'Titles + surname in formal emails vs first names in chat.',
            translation: 'Títulos + apellido en correo formal vs nombre de pila en chat.',
          },
        ],
      },
    ],
    l1Contrast: {
      concept: 'Spanish tú/usted vs English you',
      conceptEs: 'Tú/usted vs you',
      spanishBehavior: 'Morphological politeness on pronouns and verbs.',
      englishBehavior: 'Politeness is lexical (Could you…) and tonal, not pronoun choice only.',
      contrastExamples: [
        { english: 'Would you be able to…?', spanish: '¿Podría usted…?', note: 'English stacks softeners without changing "you".' },
      ],
    },
    predictedErrors: [
      {
        error: 'Over-formalising casual chat',
        correction: 'Match the channel: text friends differently from a job email',
        whyEs: 'Copiar frases muy formales en chats puede sonar distante.',
        frequency: 'occasional',
      },
    ],
    exercises: miniExercises,
    recycleInTopics: ['c2-register-shift'],
    tipEs: '💡 Cultura + curiosidad = ancla emocional; vuelve a la lección gramatical cuando practiques producción.',
  },
];
