// Pronunciación - Pronunciation Guide
// IPA, Word Stress, Sentence Stress, Intonation, Connected Speech, Silent Letters

// === IPA PHONETICS ===
export interface PhoneticSound {
  id: string;
  symbol: string; // IPA symbol
  type: 'vowel' | 'consonant';
  category: 'short_vowel' | 'long_vowel' | 'diphthong' | 'voiced_consonant' | 'unvoiced_consonant';
  description: string;
  descriptionEs: string;
  mouthPosition: string;
  examples: {
    word: string;
    ipa: string;
    audio?: string;
  }[];
  commonMistakes?: string;
  level: number;
}

export const phoneticSounds: PhoneticSound[] = [
  // SHORT VOWELS
  {
    id: 'ph-001',
    symbol: 'ɪ',
    type: 'vowel',
    category: 'short_vowel',
    description: 'Short i sound',
    descriptionEs: 'Sonido i corto (entre i y e)',
    mouthPosition: 'Tongue high and forward, lips relaxed',
    examples: [
      { word: 'bit', ipa: '/bɪt/' },
      { word: 'sit', ipa: '/sɪt/' },
      { word: 'fish', ipa: '/fɪʃ/' },
      { word: 'live', ipa: '/lɪv/' }
    ],
    commonMistakes: 'Spanish speakers often say /i/ instead. "Bit" should NOT sound like "beat".',
    level: 2
  },
  {
    id: 'ph-002',
    symbol: 'e',
    type: 'vowel',
    category: 'short_vowel',
    description: 'Short e sound',
    descriptionEs: 'Sonido e corto',
    mouthPosition: 'Tongue mid-height, mouth slightly open',
    examples: [
      { word: 'bed', ipa: '/bed/' },
      { word: 'red', ipa: '/red/' },
      { word: 'ten', ipa: '/ten/' },
      { word: 'head', ipa: '/hed/' }
    ],
    level: 2
  },
  {
    id: 'ph-003',
    symbol: 'æ',
    type: 'vowel',
    category: 'short_vowel',
    description: 'Short a sound (cat sound)',
    descriptionEs: 'Sonido entre a y e',
    mouthPosition: 'Mouth open, tongue low and front',
    examples: [
      { word: 'cat', ipa: '/kæt/' },
      { word: 'hat', ipa: '/hæt/' },
      { word: 'bad', ipa: '/bæd/' },
      { word: 'man', ipa: '/mæn/' }
    ],
    commonMistakes: 'This sound doesn\'t exist in Spanish. It\'s between "a" and "e".',
    level: 2
  },
  {
    id: 'ph-004',
    symbol: 'ʌ',
    type: 'vowel',
    category: 'short_vowel',
    description: 'Short u sound (cup sound)',
    descriptionEs: 'Sonido u/a corto',
    mouthPosition: 'Mouth slightly open, tongue in center',
    examples: [
      { word: 'cup', ipa: '/kʌp/' },
      { word: 'but', ipa: '/bʌt/' },
      { word: 'love', ipa: '/lʌv/' },
      { word: 'sun', ipa: '/sʌn/' }
    ],
    commonMistakes: 'Don\'t confuse with the "oo" sound. "Cup" should not sound like "coop".',
    level: 2
  },
  {
    id: 'ph-005',
    symbol: 'ɒ',
    type: 'vowel',
    category: 'short_vowel',
    description: 'Short o sound (British)',
    descriptionEs: 'Sonido o corto (británico)',
    mouthPosition: 'Mouth round and open, tongue back and low',
    examples: [
      { word: 'hot', ipa: '/hɒt/' },
      { word: 'lot', ipa: '/lɒt/' },
      { word: 'dog', ipa: '/dɒɡ/' },
      { word: 'stop', ipa: '/stɒp/' }
    ],
    level: 3
  },
  {
    id: 'ph-006',
    symbol: 'ʊ',
    type: 'vowel',
    category: 'short_vowel',
    description: 'Short oo sound',
    descriptionEs: 'Sonido u corto',
    mouthPosition: 'Lips rounded, tongue back and high',
    examples: [
      { word: 'book', ipa: '/bʊk/' },
      { word: 'put', ipa: '/pʊt/' },
      { word: 'good', ipa: '/ɡʊd/' },
      { word: 'look', ipa: '/lʊk/' }
    ],
    commonMistakes: 'Different from long /uː/. "Book" should NOT rhyme with "Luke".',
    level: 2
  },
  {
    id: 'ph-007',
    symbol: 'ə',
    type: 'vowel',
    category: 'short_vowel',
    description: 'Schwa - the most common vowel sound',
    descriptionEs: 'Schwa - el sonido vocálico más común',
    mouthPosition: 'Mouth relaxed, tongue in center (neutral position)',
    examples: [
      { word: 'about', ipa: '/əˈbaʊt/' },
      { word: 'banana', ipa: '/bəˈnɑːnə/' },
      { word: 'the', ipa: '/ðə/' },
      { word: 'a', ipa: '/ə/' }
    ],
    commonMistakes: 'This appears in unstressed syllables. Say it quickly and softly.',
    level: 2
  },
  // LONG VOWELS
  {
    id: 'ph-008',
    symbol: 'iː',
    type: 'vowel',
    category: 'long_vowel',
    description: 'Long ee sound',
    descriptionEs: 'Sonido i largo',
    mouthPosition: 'Tongue very high and forward, lips spread',
    examples: [
      { word: 'see', ipa: '/siː/' },
      { word: 'beach', ipa: '/biːtʃ/' },
      { word: 'eat', ipa: '/iːt/' },
      { word: 'key', ipa: '/kiː/' }
    ],
    level: 2
  },
  {
    id: 'ph-009',
    symbol: 'ɑː',
    type: 'vowel',
    category: 'long_vowel',
    description: 'Long a sound (father)',
    descriptionEs: 'Sonido a largo',
    mouthPosition: 'Mouth wide open, tongue low and back',
    examples: [
      { word: 'car', ipa: '/kɑː/' },
      { word: 'father', ipa: '/ˈfɑːðə/' },
      { word: 'arm', ipa: '/ɑːm/' },
      { word: 'heart', ipa: '/hɑːt/' }
    ],
    level: 2
  },
  {
    id: 'ph-010',
    symbol: 'ɔː',
    type: 'vowel',
    category: 'long_vowel',
    description: 'Long or sound',
    descriptionEs: 'Sonido o largo',
    mouthPosition: 'Lips rounded, mouth fairly open',
    examples: [
      { word: 'door', ipa: '/dɔː/' },
      { word: 'more', ipa: '/mɔː/' },
      { word: 'law', ipa: '/lɔː/' },
      { word: 'call', ipa: '/kɔːl/' }
    ],
    level: 2
  },
  {
    id: 'ph-011',
    symbol: 'uː',
    type: 'vowel',
    category: 'long_vowel',
    description: 'Long oo sound',
    descriptionEs: 'Sonido u largo',
    mouthPosition: 'Lips very rounded, tongue high and back',
    examples: [
      { word: 'food', ipa: '/fuːd/' },
      { word: 'blue', ipa: '/bluː/' },
      { word: 'shoe', ipa: '/ʃuː/' },
      { word: 'moon', ipa: '/muːn/' }
    ],
    level: 2
  },
  {
    id: 'ph-012',
    symbol: 'ɜː',
    type: 'vowel',
    category: 'long_vowel',
    description: 'Long er sound (bird)',
    descriptionEs: 'Sonido er largo',
    mouthPosition: 'Lips slightly rounded, tongue in center',
    examples: [
      { word: 'bird', ipa: '/bɜːd/' },
      { word: 'word', ipa: '/wɜːd/' },
      { word: 'nurse', ipa: '/nɜːs/' },
      { word: 'learn', ipa: '/lɜːn/' }
    ],
    level: 3
  },
  // DIPHTHONGS
  {
    id: 'ph-013',
    symbol: 'eɪ',
    type: 'vowel',
    category: 'diphthong',
    description: 'Long a sound (day)',
    descriptionEs: 'Diptongo ei',
    mouthPosition: 'Start with mouth open, move to /ɪ/ position',
    examples: [
      { word: 'day', ipa: '/deɪ/' },
      { word: 'make', ipa: '/meɪk/' },
      { word: 'rain', ipa: '/reɪn/' },
      { word: 'say', ipa: '/seɪ/' }
    ],
    level: 2
  },
  {
    id: 'ph-014',
    symbol: 'aɪ',
    type: 'vowel',
    category: 'diphthong',
    description: 'Long i sound (my)',
    descriptionEs: 'Diptongo ai',
    mouthPosition: 'Start with mouth wide open, move to /ɪ/ position',
    examples: [
      { word: 'my', ipa: '/maɪ/' },
      { word: 'time', ipa: '/taɪm/' },
      { word: 'like', ipa: '/laɪk/' },
      { word: 'buy', ipa: '/baɪ/' }
    ],
    level: 2
  },
  {
    id: 'ph-015',
    symbol: 'ɔɪ',
    type: 'vowel',
    category: 'diphthong',
    description: 'oy sound (boy)',
    descriptionEs: 'Diptongo oi',
    mouthPosition: 'Start with rounded lips, move to /ɪ/ position',
    examples: [
      { word: 'boy', ipa: '/bɔɪ/' },
      { word: 'toy', ipa: '/tɔɪ/' },
      { word: 'coin', ipa: '/kɔɪn/' },
      { word: 'voice', ipa: '/vɔɪs/' }
    ],
    level: 2
  },
  {
    id: 'ph-016',
    symbol: 'aʊ',
    type: 'vowel',
    category: 'diphthong',
    description: 'ow sound (how)',
    descriptionEs: 'Diptongo au',
    mouthPosition: 'Start with mouth open, move to /ʊ/ position',
    examples: [
      { word: 'how', ipa: '/haʊ/' },
      { word: 'now', ipa: '/naʊ/' },
      { word: 'out', ipa: '/aʊt/' },
      { word: 'house', ipa: '/haʊs/' }
    ],
    level: 2
  },
  {
    id: 'ph-017',
    symbol: 'əʊ',
    type: 'vowel',
    category: 'diphthong',
    description: 'oh sound (go)',
    descriptionEs: 'Diptongo ou',
    mouthPosition: 'Start with lips relaxed, move to rounded /ʊ/ position',
    examples: [
      { word: 'go', ipa: '/ɡəʊ/' },
      { word: 'home', ipa: '/həʊm/' },
      { word: 'show', ipa: '/ʃəʊ/' },
      { word: 'know', ipa: '/nəʊ/' }
    ],
    level: 2
  },
  // KEY CONSONANTS (difficult for Spanish speakers)
  {
    id: 'ph-018',
    symbol: 'θ',
    type: 'consonant',
    category: 'unvoiced_consonant',
    description: 'Voiceless th (think)',
    descriptionEs: 'Th sin voz (similar a la z castellana)',
    mouthPosition: 'Tongue between teeth, air flows through',
    examples: [
      { word: 'think', ipa: '/θɪŋk/' },
      { word: 'three', ipa: '/θriː/' },
      { word: 'thank', ipa: '/θæŋk/' },
      { word: 'bath', ipa: '/bɑːθ/' }
    ],
    commonMistakes: 'Don\'t say /t/ or /s/. Tongue must be between teeth.',
    level: 2
  },
  {
    id: 'ph-019',
    symbol: 'ð',
    type: 'consonant',
    category: 'voiced_consonant',
    description: 'Voiced th (this)',
    descriptionEs: 'Th con voz (similar a la d suave)',
    mouthPosition: 'Same as /θ/ but with voice',
    examples: [
      { word: 'this', ipa: '/ðɪs/' },
      { word: 'that', ipa: '/ðæt/' },
      { word: 'mother', ipa: '/ˈmʌðə/' },
      { word: 'weather', ipa: '/ˈweðə/' }
    ],
    commonMistakes: 'Don\'t say /d/. Keep tongue between teeth with vibration.',
    level: 2
  },
  {
    id: 'ph-020',
    symbol: 'ʃ',
    type: 'consonant',
    category: 'unvoiced_consonant',
    description: 'sh sound',
    descriptionEs: 'Sonido sh (como pedir silencio)',
    mouthPosition: 'Lips rounded and pushed forward, tongue raised',
    examples: [
      { word: 'she', ipa: '/ʃiː/' },
      { word: 'ship', ipa: '/ʃɪp/' },
      { word: 'wash', ipa: '/wɒʃ/' },
      { word: 'nation', ipa: '/ˈneɪʃən/' }
    ],
    level: 2
  },
  {
    id: 'ph-021',
    symbol: 'ʒ',
    type: 'consonant',
    category: 'voiced_consonant',
    description: 'zh sound (measure)',
    descriptionEs: 'Sonido zh (versión sonora de sh)',
    mouthPosition: 'Same as /ʃ/ but with voice',
    examples: [
      { word: 'measure', ipa: '/ˈmeʒə/' },
      { word: 'vision', ipa: '/ˈvɪʒən/' },
      { word: 'garage', ipa: '/ɡəˈrɑːʒ/' },
      { word: 'decision', ipa: '/dɪˈsɪʒən/' }
    ],
    level: 3
  },
  {
    id: 'ph-022',
    symbol: 'v',
    type: 'consonant',
    category: 'voiced_consonant',
    description: 'v sound',
    descriptionEs: 'Sonido v (labio inferior toca dientes superiores)',
    mouthPosition: 'Lower lip touches upper teeth, with voice',
    examples: [
      { word: 'very', ipa: '/ˈveri/' },
      { word: 'love', ipa: '/lʌv/' },
      { word: 'have', ipa: '/hæv/' },
      { word: 'never', ipa: '/ˈnevə/' }
    ],
    commonMistakes: 'NOT like Spanish "v" (which sounds like b). Upper teeth must touch lower lip.',
    level: 2
  },
  {
    id: 'ph-023',
    symbol: 'ŋ',
    type: 'consonant',
    category: 'voiced_consonant',
    description: 'ng sound',
    descriptionEs: 'Sonido ng (nasal)',
    mouthPosition: 'Back of tongue touches soft palate, air through nose',
    examples: [
      { word: 'sing', ipa: '/sɪŋ/' },
      { word: 'thing', ipa: '/θɪŋ/' },
      { word: 'ring', ipa: '/rɪŋ/' },
      { word: 'running', ipa: '/ˈrʌnɪŋ/' }
    ],
    commonMistakes: 'Don\'t add a hard /g/ after. "Sing" should NOT sound like "sing-g".',
    level: 2
  },
  {
    id: 'ph-024',
    symbol: 'r',
    type: 'consonant',
    category: 'voiced_consonant',
    description: 'English r sound',
    descriptionEs: 'Sonido r inglés (muy diferente al español)',
    mouthPosition: 'Tongue curled back, NOT touching anything',
    examples: [
      { word: 'red', ipa: '/red/' },
      { word: 'right', ipa: '/raɪt/' },
      { word: 'very', ipa: '/ˈveri/' },
      { word: 'car', ipa: '/kɑː/' }
    ],
    commonMistakes: 'English R is NOT rolled like Spanish R. Tongue doesn\'t touch the roof.',
    level: 2
  },
  {
    id: 'ph-025',
    symbol: 'h',
    type: 'consonant',
    category: 'unvoiced_consonant',
    description: 'h sound',
    descriptionEs: 'Sonido h aspirada',
    mouthPosition: 'Mouth open, air flows from throat',
    examples: [
      { word: 'hello', ipa: '/həˈləʊ/' },
      { word: 'have', ipa: '/hæv/' },
      { word: 'home', ipa: '/həʊm/' },
      { word: 'happy', ipa: '/ˈhæpi/' }
    ],
    commonMistakes: 'Spanish speakers often skip the /h/. "Hello" should NOT sound like "ello".',
    level: 2
  }
];

// === WORD STRESS ===
export interface WordStressRule {
  id: string;
  rule: string;
  ruleEs: string;
  explanation: string;
  examples: {
    word: string;
    stress: string; // Stressed syllable in CAPS
    ipa: string;
  }[];
  exceptions?: string[];
  level: number;
}

export const wordStressRules: WordStressRule[] = [
  {
    id: 'ws-001',
    rule: 'Two-syllable NOUNS: stress on first syllable',
    ruleEs: 'Sustantivos de dos sílabas: acento en primera sílaba',
    explanation: 'Most two-syllable nouns are stressed on the first syllable.',
    examples: [
      { word: 'table', stress: 'TA-ble', ipa: '/ˈteɪbəl/' },
      { word: 'water', stress: 'WA-ter', ipa: '/ˈwɔːtə/' },
      { word: 'window', stress: 'WIN-dow', ipa: '/ˈwɪndəʊ/' },
      { word: 'student', stress: 'STU-dent', ipa: '/ˈstjuːdənt/' }
    ],
    level: 2
  },
  {
    id: 'ws-002',
    rule: 'Two-syllable VERBS: stress on second syllable',
    ruleEs: 'Verbos de dos sílabas: acento en segunda sílaba',
    explanation: 'Most two-syllable verbs are stressed on the second syllable.',
    examples: [
      { word: 'begin', stress: 'be-GIN', ipa: '/bɪˈɡɪn/' },
      { word: 'decide', stress: 'de-CIDE', ipa: '/dɪˈsaɪd/' },
      { word: 'relax', stress: 're-LAX', ipa: '/rɪˈlæks/' },
      { word: 'prefer', stress: 'pre-FER', ipa: '/prɪˈfɜː/' }
    ],
    level: 2
  },
  {
    id: 'ws-003',
    rule: 'Same word, different stress = different meaning',
    ruleEs: 'Misma palabra, diferente acento = diferente significado',
    explanation: 'Some words change meaning based on stress (noun vs verb).',
    examples: [
      { word: 'present (n)', stress: 'PRE-sent', ipa: '/ˈprezənt/' },
      { word: 'present (v)', stress: 'pre-SENT', ipa: '/prɪˈzent/' },
      { word: 'record (n)', stress: 'RE-cord', ipa: '/ˈrekɔːd/' },
      { word: 'record (v)', stress: 're-CORD', ipa: '/rɪˈkɔːd/' },
      { word: 'object (n)', stress: 'OB-ject', ipa: '/ˈɒbdʒɪkt/' },
      { word: 'object (v)', stress: 'ob-JECT', ipa: '/əbˈdʒekt/' }
    ],
    level: 3
  },
  {
    id: 'ws-004',
    rule: 'Words ending in -tion, -sion: stress on syllable before',
    ruleEs: 'Palabras terminadas en -tion, -sion: acento en sílaba anterior',
    explanation: 'The stress falls on the syllable immediately before -tion/-sion.',
    examples: [
      { word: 'information', stress: 'in-for-MA-tion', ipa: '/ˌɪnfəˈmeɪʃən/' },
      { word: 'education', stress: 'ed-u-CA-tion', ipa: '/ˌedʒuˈkeɪʃən/' },
      { word: 'decision', stress: 'de-CI-sion', ipa: '/dɪˈsɪʒən/' },
      { word: 'television', stress: 'te-le-VI-sion', ipa: '/ˈtelɪvɪʒən/' }
    ],
    level: 3
  },
  {
    id: 'ws-005',
    rule: 'Words ending in -ic: stress on syllable before',
    ruleEs: 'Palabras terminadas en -ic: acento en sílaba anterior',
    explanation: 'The stress falls on the syllable immediately before -ic.',
    examples: [
      { word: 'economic', stress: 'e-co-NO-mic', ipa: '/ˌiːkəˈnɒmɪk/' },
      { word: 'fantastic', stress: 'fan-TAS-tic', ipa: '/fænˈtæstɪk/' },
      { word: 'democratic', stress: 'de-mo-CRA-tic', ipa: '/ˌdeməˈkrætɪk/' },
      { word: 'scientific', stress: 'sci-en-TI-fic', ipa: '/ˌsaɪənˈtɪfɪk/' }
    ],
    exceptions: ['Arabic, Catholic, lunatic, arithmetic (as noun)'],
    level: 3
  },
  {
    id: 'ws-006',
    rule: 'Compound nouns: stress on first word',
    ruleEs: 'Sustantivos compuestos: acento en primera palabra',
    explanation: 'In compound nouns, the first word is usually stressed.',
    examples: [
      { word: 'football', stress: 'FOOT-ball', ipa: '/ˈfʊtbɔːl/' },
      { word: 'bedroom', stress: 'BED-room', ipa: '/ˈbedruːm/' },
      { word: 'sunglasses', stress: 'SUN-glasses', ipa: '/ˈsʌnɡlɑːsɪz/' },
      { word: 'toothpaste', stress: 'TOOTH-paste', ipa: '/ˈtuːθpeɪst/' }
    ],
    level: 3
  }
];

// === SENTENCE STRESS ===
export interface SentenceStressPattern {
  id: string;
  concept: string;
  conceptEs: string;
  explanation: string;
  examples: {
    sentence: string;
    stressed: string; // CAPS = stressed
    meaning?: string;
  }[];
  level: number;
}

export const sentenceStressPatterns: SentenceStressPattern[] = [
  {
    id: 'ss-001',
    concept: 'Content Words vs Function Words',
    conceptEs: 'Palabras de Contenido vs Palabras Funcionales',
    explanation: 'Content words (nouns, main verbs, adjectives, adverbs) are stressed. Function words (articles, prepositions, pronouns, auxiliaries) are usually unstressed.',
    examples: [
      { sentence: 'The cat sat on the mat.', stressed: 'The CAT SAT on the MAT.' },
      { sentence: 'I want to go to the store.', stressed: 'I WANT to GO to the STORE.' },
      { sentence: 'She is reading a book.', stressed: 'She is READING a BOOK.' }
    ],
    level: 3
  },
  {
    id: 'ss-002',
    concept: 'Contrastive Stress',
    conceptEs: 'Acento Contrastivo',
    explanation: 'Stress changes to contrast or correct information.',
    examples: [
      { sentence: 'I didn\'t say HE stole the money.', stressed: 'I didn\'t say HE stole the money.', meaning: '(I said someone else did)' },
      { sentence: 'I didn\'t say he STOLE the money.', stressed: 'I didn\'t say he STOLE the money.', meaning: '(He maybe borrowed it)' },
      { sentence: 'I didn\'t SAY he stole the money.', stressed: 'I didn\'t SAY he stole the money.', meaning: '(I just implied it)' }
    ],
    level: 4
  },
  {
    id: 'ss-003',
    concept: 'New Information Stress',
    conceptEs: 'Acento en Información Nueva',
    explanation: 'New information in a sentence is stressed.',
    examples: [
      { sentence: 'Q: Where did you go? A: I went to the STORE.', stressed: 'I went to the STORE.', meaning: '(Store is new info)' },
      { sentence: 'Q: Who went to the store? A: I went to the store.', stressed: 'I went to the store.', meaning: '(I is stressed, already know about store)' }
    ],
    level: 4
  }
];

// === INTONATION ===
export interface IntonationPattern {
  id: string;
  pattern: string;
  patternEs: string;
  type: 'rising' | 'falling' | 'fall-rise';
  usage: string[];
  usageEs: string[];
  examples: {
    sentence: string;
    intonation: string; // Description like "↗ rising at end"
  }[];
  level: number;
}

export const intonationPatterns: IntonationPattern[] = [
  {
    id: 'int-001',
    pattern: 'Falling Intonation ↘',
    patternEs: 'Entonación Descendente ↘',
    type: 'falling',
    usage: [
      'Statements/facts',
      'Wh- questions',
      'Commands',
      'Exclamations',
      'At the end of lists (last item)'
    ],
    usageEs: [
      'Afirmaciones/hechos',
      'Preguntas Wh-',
      'Órdenes',
      'Exclamaciones',
      'Al final de listas (último elemento)'
    ],
    examples: [
      { sentence: 'I live in New York.', intonation: 'I live in New ↘YORK.' },
      { sentence: 'Where do you work?', intonation: 'Where do you ↘WORK?' },
      { sentence: 'Close the door.', intonation: 'Close the ↘DOOR.' },
      { sentence: 'What a beautiful day!', intonation: 'What a beautiful ↘DAY!' }
    ],
    level: 3
  },
  {
    id: 'int-002',
    pattern: 'Rising Intonation ↗',
    patternEs: 'Entonación Ascendente ↗',
    type: 'rising',
    usage: [
      'Yes/No questions',
      'Showing surprise',
      'Checking understanding',
      'Being polite/tentative',
      'List items (not final)'
    ],
    usageEs: [
      'Preguntas de sí/no',
      'Mostrar sorpresa',
      'Verificar comprensión',
      'Ser cortés/tentativo',
      'Elementos de lista (no final)'
    ],
    examples: [
      { sentence: 'Are you coming?', intonation: 'Are you ↗COMING?' },
      { sentence: 'Really?', intonation: '↗REALLY?' },
      { sentence: 'You understand?', intonation: 'You under↗STAND?' },
      { sentence: 'I bought apples, oranges...', intonation: 'I bought ↗APPLES, ↗ORANGES...' }
    ],
    level: 3
  },
  {
    id: 'int-003',
    pattern: 'Fall-Rise Intonation ↘↗',
    patternEs: 'Entonación Descendente-Ascendente ↘↗',
    type: 'fall-rise',
    usage: [
      'Uncertainty/doubt',
      'Contradiction',
      'Implying "but..."',
      'Incomplete thoughts',
      'Polite corrections'
    ],
    usageEs: [
      'Incertidumbre/duda',
      'Contradicción',
      'Implicando "pero..."',
      'Pensamientos incompletos',
      'Correcciones corteses'
    ],
    examples: [
      { sentence: 'Well... (uncertainty)', intonation: '↘↗WELL...' },
      { sentence: 'I could help... (but...)', intonation: 'I ↘↗COULD help...' },
      { sentence: 'It\'s nice... (implying a problem)', intonation: 'It\'s ↘↗NICE...' }
    ],
    level: 4
  }
];

// === CONNECTED SPEECH ===
export interface ConnectedSpeech {
  id: string;
  phenomenon: string;
  phenomenonEs: string;
  explanation: string;
  explanationEs: string;
  examples: {
    written: string;
    spoken: string;
    ipa?: string;
  }[];
  level: number;
}

export const connectedSpeech: ConnectedSpeech[] = [
  {
    id: 'cs-001',
    phenomenon: 'Linking (consonant to vowel)',
    phenomenonEs: 'Enlace (consonante a vocal)',
    explanation: 'When a word ends in a consonant and the next starts with a vowel, they connect smoothly.',
    explanationEs: 'Cuando una palabra termina en consonante y la siguiente empieza en vocal, se conectan suavemente.',
    examples: [
      { written: 'turn off', spoken: 'tur-noff', ipa: '/tɜːˈnɒf/' },
      { written: 'an apple', spoken: 'a-napple', ipa: '/əˈnæpəl/' },
      { written: 'check in', spoken: 'che-kin', ipa: '/ˈtʃekɪn/' },
      { written: 'pick it up', spoken: 'pi-ki-tup', ipa: '/ˈpɪkɪtʌp/' }
    ],
    level: 4
  },
  {
    id: 'cs-002',
    phenomenon: 'Intrusive sounds',
    phenomenonEs: 'Sonidos intrusivos',
    explanation: 'Extra sounds are added between vowels for smoother speech.',
    explanationEs: 'Se agregan sonidos extra entre vocales para un habla más fluida.',
    examples: [
      { written: 'go away', spoken: 'go-w-away (intrusive /w/)', ipa: '/ɡəʊwəˈweɪ/' },
      { written: 'I agree', spoken: 'I-y-agree (intrusive /j/)', ipa: '/aɪjəˈɡriː/' },
      { written: 'law and order', spoken: 'law-r-and order (intrusive /r/)', ipa: '/lɔːrəndˈɔːdə/' }
    ],
    level: 5
  },
  {
    id: 'cs-003',
    phenomenon: 'Elision (sound deletion)',
    phenomenonEs: 'Elisión (eliminación de sonidos)',
    explanation: 'Some sounds are dropped in fast speech.',
    explanationEs: 'Algunos sonidos se omiten en el habla rápida.',
    examples: [
      { written: 'next door', spoken: 'nex-door (t dropped)', ipa: '/ˈneksdɔː/' },
      { written: 'last night', spoken: 'las-night (t dropped)', ipa: '/ˈlɑːsnaɪt/' },
      { written: 'probably', spoken: 'probly', ipa: '/ˈprɒbli/' },
      { written: 'comfortable', spoken: 'comftable', ipa: '/ˈkʌmftəbəl/' }
    ],
    level: 4
  },
  {
    id: 'cs-004',
    phenomenon: 'Assimilation (sounds change)',
    phenomenonEs: 'Asimilación (cambio de sonidos)',
    explanation: 'Sounds change to become more similar to neighboring sounds.',
    explanationEs: 'Los sonidos cambian para parecerse más a los sonidos vecinos.',
    examples: [
      { written: 'in Paris', spoken: 'im Paris (/n/ → /m/ before /p/)', ipa: '/ɪmˈpærɪs/' },
      { written: 'ten boys', spoken: 'tem boys (/n/ → /m/ before /b/)', ipa: '/ˈtemˌbɔɪz/' },
      { written: 'good girl', spoken: 'goob girl (/d/ → /b/ before /g/)', ipa: '/ˈɡʊbɡɜːl/' }
    ],
    level: 5
  },
  {
    id: 'cs-005',
    phenomenon: 'Weak Forms',
    phenomenonEs: 'Formas Débiles',
    explanation: 'Function words have weak (reduced) forms in natural speech.',
    explanationEs: 'Las palabras funcionales tienen formas débiles (reducidas) en el habla natural.',
    examples: [
      { written: 'and', spoken: '/ænd/ → /ənd/ → /ən/ → /n/', ipa: '/ən/' },
      { written: 'to', spoken: '/tuː/ → /tə/', ipa: '/tə/' },
      { written: 'for', spoken: '/fɔː/ → /fə/', ipa: '/fə/' },
      { written: 'can', spoken: '/kæn/ → /kən/', ipa: '/kən/' },
      { written: 'have', spoken: '/hæv/ → /həv/ → /əv/', ipa: '/əv/' },
      { written: 'of', spoken: '/ɒv/ → /əv/', ipa: '/əv/' }
    ],
    level: 4
  },
  {
    id: 'cs-006',
    phenomenon: 'Contractions',
    phenomenonEs: 'Contracciones',
    explanation: 'Common word combinations are shortened.',
    explanationEs: 'Combinaciones comunes de palabras se acortan.',
    examples: [
      { written: 'going to', spoken: 'gonna', ipa: '/ˈɡɒnə/' },
      { written: 'want to', spoken: 'wanna', ipa: '/ˈwɒnə/' },
      { written: 'got to', spoken: 'gotta', ipa: '/ˈɡɒtə/' },
      { written: 'kind of', spoken: 'kinda', ipa: '/ˈkaɪndə/' },
      { written: 'sort of', spoken: 'sorta', ipa: '/ˈsɔːtə/' },
      { written: 'don\'t know', spoken: 'dunno', ipa: '/dəˈnəʊ/' }
    ],
    level: 3
  }
];

// === SILENT LETTERS ===
export interface SilentLetter {
  id: string;
  letter: string;
  pattern: string;
  examples: {
    word: string;
    pronunciation: string;
    ipa: string;
  }[];
  level: number;
}

export const silentLetters: SilentLetter[] = [
  {
    id: 'sl-001',
    letter: 'K',
    pattern: 'Silent K before N',
    examples: [
      { word: 'knife', pronunciation: 'nife', ipa: '/naɪf/' },
      { word: 'know', pronunciation: 'no', ipa: '/nəʊ/' },
      { word: 'knee', pronunciation: 'nee', ipa: '/niː/' },
      { word: 'knock', pronunciation: 'nock', ipa: '/nɒk/' },
      { word: 'knight', pronunciation: 'nite', ipa: '/naɪt/' }
    ],
    level: 2
  },
  {
    id: 'sl-002',
    letter: 'W',
    pattern: 'Silent W before R',
    examples: [
      { word: 'write', pronunciation: 'rite', ipa: '/raɪt/' },
      { word: 'wrong', pronunciation: 'rong', ipa: '/rɒŋ/' },
      { word: 'wrap', pronunciation: 'rap', ipa: '/ræp/' },
      { word: 'wrist', pronunciation: 'rist', ipa: '/rɪst/' }
    ],
    level: 2
  },
  {
    id: 'sl-003',
    letter: 'B',
    pattern: 'Silent B after M or before T',
    examples: [
      { word: 'climb', pronunciation: 'clime', ipa: '/klaɪm/' },
      { word: 'thumb', pronunciation: 'thum', ipa: '/θʌm/' },
      { word: 'bomb', pronunciation: 'bom', ipa: '/bɒm/' },
      { word: 'doubt', pronunciation: 'dowt', ipa: '/daʊt/' },
      { word: 'debt', pronunciation: 'det', ipa: '/det/' }
    ],
    level: 2
  },
  {
    id: 'sl-004',
    letter: 'H',
    pattern: 'Silent H at word start (some words)',
    examples: [
      { word: 'hour', pronunciation: 'our', ipa: '/aʊə/' },
      { word: 'honest', pronunciation: 'onest', ipa: '/ˈɒnɪst/' },
      { word: 'honor/honour', pronunciation: 'onor', ipa: '/ˈɒnə/' },
      { word: 'heir', pronunciation: 'air', ipa: '/eə/' }
    ],
    level: 2
  },
  {
    id: 'sl-005',
    letter: 'G',
    pattern: 'Silent G before N',
    examples: [
      { word: 'sign', pronunciation: 'sine', ipa: '/saɪn/' },
      { word: 'design', pronunciation: 'desine', ipa: '/dɪˈzaɪn/' },
      { word: 'foreign', pronunciation: 'foren', ipa: '/ˈfɒrən/' },
      { word: 'gnat', pronunciation: 'nat', ipa: '/næt/' }
    ],
    level: 3
  },
  {
    id: 'sl-006',
    letter: 'L',
    pattern: 'Silent L before consonants',
    examples: [
      { word: 'talk', pronunciation: 'tawk', ipa: '/tɔːk/' },
      { word: 'walk', pronunciation: 'wawk', ipa: '/wɔːk/' },
      { word: 'could', pronunciation: 'cood', ipa: '/kʊd/' },
      { word: 'would', pronunciation: 'wood', ipa: '/wʊd/' },
      { word: 'half', pronunciation: 'haf', ipa: '/hɑːf/' },
      { word: 'calm', pronunciation: 'cam', ipa: '/kɑːm/' }
    ],
    level: 2
  },
  {
    id: 'sl-007',
    letter: 'T',
    pattern: 'Silent T in some common words',
    examples: [
      { word: 'listen', pronunciation: 'lissen', ipa: '/ˈlɪsən/' },
      { word: 'castle', pronunciation: 'cassel', ipa: '/ˈkɑːsəl/' },
      { word: 'whistle', pronunciation: 'whissel', ipa: '/ˈwɪsəl/' },
      { word: 'often', pronunciation: 'offen (or often)', ipa: '/ˈɒfən/' },
      { word: 'Christmas', pronunciation: 'Crismas', ipa: '/ˈkrɪsməs/' }
    ],
    level: 3
  },
  {
    id: 'sl-008',
    letter: 'E',
    pattern: 'Silent E at word end (magic E)',
    examples: [
      { word: 'make', pronunciation: 'mayk (makes a long)', ipa: '/meɪk/' },
      { word: 'time', pronunciation: 'taym (makes i long)', ipa: '/taɪm/' },
      { word: 'home', pronunciation: 'hohm (makes o long)', ipa: '/həʊm/' },
      { word: 'cute', pronunciation: 'kyoot (makes u long)', ipa: '/kjuːt/' }
    ],
    level: 2
  }
];

// Helper functions
export const getSoundsByType = (type: PhoneticSound['type']): PhoneticSound[] => {
  return phoneticSounds.filter(s => s.type === type);
};

export const getSoundsByCategory = (category: PhoneticSound['category']): PhoneticSound[] => {
  return phoneticSounds.filter(s => s.category === category);
};

export const getContentByLevel = (level: number) => {
  return {
    sounds: phoneticSounds.filter(s => s.level <= level),
    stressRules: wordStressRules.filter(r => r.level <= level),
    sentenceStress: sentenceStressPatterns.filter(p => p.level <= level),
    intonation: intonationPatterns.filter(p => p.level <= level),
    connectedSpeech: connectedSpeech.filter(c => c.level <= level),
    silentLetters: silentLetters.filter(s => s.level <= level)
  };
};

export default {
  phoneticSounds,
  wordStressRules,
  sentenceStressPatterns,
  intonationPatterns,
  connectedSpeech,
  silentLetters
};
