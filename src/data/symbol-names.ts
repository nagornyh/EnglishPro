// Symbol Names in English — Essential for keyboard literacy and technical English
// Nombres de símbolos en inglés — Esencial para programadores, profesionales y uso diario

export interface SymbolEntry {
  symbol: string;
  name: string;
  nameEs: string;
  alternativeNames?: string[];
  pronunciation: string; // Spanish phonetic approximation
  category: SymbolCategory;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  usageExamples: {
    context: string;
    contextEs: string;
    example: string;
  }[];
  commonMistake?: {
    wrong: string;
    correct: string;
    explanation: string;
  };
  techUsage?: string; // How it's used in programming/tech
}

export type SymbolCategory =
  | 'punctuation'
  | 'math'
  | 'brackets'
  | 'currency'
  | 'tech'
  | 'typography'
  | 'keyboard';

export const symbolNames: SymbolEntry[] = [
  // ══════════════════════════════════════════════════════════
  // A1 — Punctuation Basics
  // ══════════════════════════════════════════════════════════
  {
    symbol: '.',
    name: 'Period',
    nameEs: 'Punto',
    alternativeNames: ['Full stop (British English)', 'Dot'],
    pronunciation: 'Píriod',
    category: 'punctuation',
    level: 'A1',
    usageExamples: [
      {
        context: 'End of sentence',
        contextEs: 'Final de oración',
        example: 'I like coffee.',
      },
      {
        context: 'Abbreviations',
        contextEs: 'Abreviaturas',
        example: 'Mr. Smith, Dr. Jones, U.S.A.',
      },
      {
        context: 'Decimals',
        contextEs: 'Decimales (¡al revés que en español!)',
        example: 'The price is $3.99 (three dollars and ninety-nine cents)',
      },
      {
        context: 'Web/Email addresses',
        contextEs: 'Direcciones web/email (se dice "dot")',
        example: 'www DOT google DOT com',
      },
    ],
    commonMistake: {
      wrong: 'In Spanish: 3,99 € — In English: 3.99',
      correct: 'English uses period for decimals and comma for thousands: 1,000.50',
      explanation: 'English and Spanish swap the use of period and comma in numbers',
    },
    techUsage: 'Called "dot" in URLs, email, file extensions (.pdf, .jpg). In programming: object property access (object.property)',
  },
  {
    symbol: ',',
    name: 'Comma',
    nameEs: 'Coma',
    pronunciation: 'Cóma',
    category: 'punctuation',
    level: 'A1',
    usageExamples: [
      {
        context: 'Lists',
        contextEs: 'Listas',
        example: 'I need eggs, milk, and bread.',
      },
      {
        context: 'Thousands separator',
        contextEs: 'Separador de miles (¡al revés que en español!)',
        example: 'The population is 1,000,000 (one million)',
      },
      {
        context: 'After introductory words',
        contextEs: 'Después de palabras introductorias',
        example: 'However, I think we should wait.',
      },
    ],
    commonMistake: {
      wrong: '1.000.000 (Spanish thousands separator)',
      correct: '1,000,000 (English thousands separator)',
      explanation: 'In English, comma separates thousands. Period separates decimals.',
    },
    techUsage: 'Separates values in CSV files, function arguments in programming: print("hello", "world")',
  },
  {
    symbol: '?',
    name: 'Question mark',
    nameEs: 'Signo de interrogación',
    pronunciation: 'Cuéstion mark',
    category: 'punctuation',
    level: 'A1',
    usageExamples: [
      {
        context: 'Direct questions',
        contextEs: 'Preguntas directas',
        example: 'Where are you from?',
      },
      {
        context: 'IMPORTANT: English only uses ONE question mark — at the END',
        contextEs: 'IMPORTANTE: Solo se usa al FINAL (no hay ¿ de apertura)',
        example: 'Do you like pizza? (NOT ¿Do you like pizza?)',
      },
    ],
    commonMistake: {
      wrong: '¿Where are you from?',
      correct: 'Where are you from?',
      explanation: 'English does NOT use an opening question mark (¿). Only the closing one.',
    },
  },
  {
    symbol: '!',
    name: 'Exclamation mark',
    nameEs: 'Signo de exclamación',
    alternativeNames: ['Exclamation point (American English)', 'Bang (informal/tech)'],
    pronunciation: 'Exclaméishon mark',
    category: 'punctuation',
    level: 'A1',
    usageExamples: [
      {
        context: 'Exclamations',
        contextEs: 'Exclamaciones (solo al final)',
        example: 'What a beautiful day!',
      },
      {
        context: 'Commands/Warnings',
        contextEs: 'Órdenes/Advertencias',
        example: 'Stop! Don\'t touch that!',
      },
    ],
    commonMistake: {
      wrong: '¡Hello!',
      correct: 'Hello!',
      explanation: 'English does NOT use an opening exclamation mark (¡). Only the closing one.',
    },
    techUsage: 'In programming: "not" operator (!true = false). Called "bang" by developers.',
  },
  {
    symbol: "'",
    name: 'Apostrophe',
    nameEs: 'Apóstrofo',
    pronunciation: 'Apóstrofi',
    category: 'punctuation',
    level: 'A1',
    usageExamples: [
      {
        context: 'Contractions',
        contextEs: 'Contracciones',
        example: "I'm (I am), don't (do not), it's (it is), can't (cannot)",
      },
      {
        context: 'Possession',
        contextEs: 'Posesión',
        example: "John's book, the dog's tail, my mother's house",
      },
      {
        context: 'CAREFUL: its vs it\'s',
        contextEs: 'CUIDADO: its (posesivo) vs it\'s (it is)',
        example: "It's (it is) a nice car. Its (posesivo) color is red.",
      },
    ],
    commonMistake: {
      wrong: "The dogs tail / Its raining",
      correct: "The dog's tail / It's raining",
      explanation: "Apostrophe is essential in English for contractions and possessives — it doesn't exist in Spanish",
    },
  },
  {
    symbol: '"',
    name: 'Quotation marks',
    nameEs: 'Comillas',
    alternativeNames: ['Double quotes', 'Inverted commas (British English)'],
    pronunciation: 'Cuotéishon marks',
    category: 'punctuation',
    level: 'A1',
    usageExamples: [
      {
        context: 'Direct speech',
        contextEs: 'Discurso directo',
        example: 'She said, "I love this city."',
      },
      {
        context: 'Titles of articles/songs',
        contextEs: 'Títulos de artículos/canciones',
        example: 'Have you read "The Tell-Tale Heart"?',
      },
    ],
    techUsage: 'Strings in most programming languages: "Hello World". In search engines: exact phrase search.',
  },

  // ══════════════════════════════════════════════════════════
  // A1 — Math Symbols
  // ══════════════════════════════════════════════════════════
  {
    symbol: '+',
    name: 'Plus sign',
    nameEs: 'Signo de más / Signo de suma',
    alternativeNames: ['Plus'],
    pronunciation: 'Plas sain',
    category: 'math',
    level: 'A1',
    usageExamples: [
      {
        context: 'Addition',
        contextEs: 'Suma',
        example: '2 + 3 = 5 → "Two plus three equals five"',
      },
      {
        context: 'Positive/More',
        contextEs: 'Positivo/Más',
        example: "It's 5+ years of experience (five plus years)",
      },
    ],
    techUsage: 'Addition operator. String concatenation in some languages: "hello" + "world"',
  },
  {
    symbol: '-',
    name: 'Minus sign',
    nameEs: 'Signo de menos / Signo de resta',
    alternativeNames: ['Hyphen (when connecting words)', 'Dash'],
    pronunciation: 'Máinas sain',
    category: 'math',
    level: 'A1',
    usageExamples: [
      {
        context: 'Subtraction',
        contextEs: 'Resta',
        example: '10 - 3 = 7 → "Ten minus three equals seven"',
      },
      {
        context: 'Negative numbers',
        contextEs: 'Números negativos',
        example: '-5°C → "Minus five degrees" or "Negative five degrees"',
      },
      {
        context: 'Hyphen in compound words',
        contextEs: 'Guión en palabras compuestas',
        example: 'well-known, twenty-one, self-confident',
      },
    ],
    techUsage: 'Subtraction operator. Used in kebab-case naming: my-variable-name',
  },
  {
    symbol: '=',
    name: 'Equals sign',
    nameEs: 'Signo de igual',
    alternativeNames: ['Equal sign'],
    pronunciation: 'Íkuals sain',
    category: 'math',
    level: 'A1',
    usageExamples: [
      {
        context: 'Mathematics',
        contextEs: 'Matemáticas',
        example: '2 + 2 = 4 → "Two plus two equals four"',
      },
      {
        context: 'Equality/equivalence',
        contextEs: 'Igualdad/equivalencia',
        example: '1 km = 0.62 miles',
      },
    ],
    techUsage: 'Assignment in programming: let x = 5. Double equals (==) for comparison. Triple equals (===) for strict comparison.',
  },
  {
    symbol: '×',
    name: 'Multiplication sign',
    nameEs: 'Signo de multiplicación',
    alternativeNames: ['Times'],
    pronunciation: 'Taimz',
    category: 'math',
    level: 'A1',
    usageExamples: [
      {
        context: 'Multiplication',
        contextEs: 'Multiplicación',
        example: '3 × 4 = 12 → "Three times four equals twelve"',
      },
      {
        context: 'Dimensions',
        contextEs: 'Dimensiones (se lee "by")',
        example: 'A 10 × 12 room → "A ten by twelve room"',
      },
    ],
    techUsage: 'In programming, asterisk (*) is used instead: 3 * 4',
  },
  {
    symbol: '÷',
    name: 'Division sign',
    nameEs: 'Signo de división',
    alternativeNames: ['Divided by'],
    pronunciation: 'Diváidid bai',
    category: 'math',
    level: 'A1',
    usageExamples: [
      {
        context: 'Division',
        contextEs: 'División',
        example: '12 ÷ 4 = 3 → "Twelve divided by four equals three"',
      },
    ],
    techUsage: 'In programming, forward slash (/) is used instead: 12 / 4',
  },
  {
    symbol: '%',
    name: 'Percent sign',
    nameEs: 'Signo de porcentaje',
    alternativeNames: ['Percent', 'Percentage sign'],
    pronunciation: 'Persént sain',
    category: 'math',
    level: 'A1',
    usageExamples: [
      {
        context: 'Percentages',
        contextEs: 'Porcentajes',
        example: '50% → "Fifty percent" (NOT "fifty per cent")',
      },
      {
        context: 'Sales',
        contextEs: 'Ofertas',
        example: '20% off → "Twenty percent off"',
      },
    ],
    techUsage: 'Modulo (remainder) operator in programming: 10 % 3 = 1. In URLs: %20 = space',
  },

  // ══════════════════════════════════════════════════════════
  // A2 — Brackets & Parentheses
  // ══════════════════════════════════════════════════════════
  {
    symbol: '( )',
    name: 'Parentheses',
    nameEs: 'Paréntesis',
    alternativeNames: ['Round brackets (British English)', 'Parens (informal)'],
    pronunciation: 'Paréntesis',
    category: 'brackets',
    level: 'A2',
    usageExamples: [
      {
        context: 'Additional information',
        contextEs: 'Información adicional',
        example: 'The movie (which was released in 2020) won three awards.',
      },
      {
        context: 'How to read them aloud',
        contextEs: 'Cómo leerlos en voz alta',
        example: '"Open parenthesis" ... "Close parenthesis" or "In parentheses"',
      },
    ],
    techUsage: 'Function calls: print("hello"). Grouping expressions: (2 + 3) * 4',
  },
  {
    symbol: '[ ]',
    name: 'Square brackets',
    nameEs: 'Corchetes',
    alternativeNames: ['Brackets'],
    pronunciation: 'Scuéar brákets',
    category: 'brackets',
    level: 'A2',
    usageExamples: [
      {
        context: 'Editorial additions in quotes',
        contextEs: 'Adiciones editoriales en citas',
        example: 'He said, "I went [to the store] yesterday."',
      },
      {
        context: 'Phonetic transcription',
        contextEs: 'Transcripción fonética',
        example: 'water [ˈwɔːtər]',
      },
    ],
    techUsage: 'Array access: myArray[0]. In regex: character class [a-z].',
  },
  {
    symbol: '{ }',
    name: 'Curly braces',
    nameEs: 'Llaves',
    alternativeNames: ['Braces', 'Curly brackets'],
    pronunciation: 'Kérli bréisis',
    category: 'brackets',
    level: 'A2',
    usageExamples: [
      {
        context: 'Sets in mathematics',
        contextEs: 'Conjuntos en matemáticas',
        example: '{1, 2, 3, 4, 5}',
      },
      {
        context: 'How to say them',
        contextEs: 'Cómo decirlos',
        example: '"Open brace" ... "Close brace" or "In braces"',
      },
    ],
    techUsage: 'Code blocks in most languages: if (x) { ... }. Objects/dictionaries: { key: "value" }',
  },
  {
    symbol: '< >',
    name: 'Angle brackets',
    nameEs: 'Paréntesis angulares / Signos de mayor y menor que',
    alternativeNames: ['Less than / Greater than', 'Chevrons'],
    pronunciation: 'Ángol brákets',
    category: 'brackets',
    level: 'A2',
    usageExamples: [
      {
        context: 'Comparison in math',
        contextEs: 'Comparación en matemáticas',
        example: '5 > 3 → "Five is greater than three". 2 < 7 → "Two is less than seven"',
      },
    ],
    techUsage: 'HTML tags: <div></div>. Generic types: Array<string>. Comparison operators.',
  },

  // ══════════════════════════════════════════════════════════
  // A2 — Currency & Common Symbols
  // ══════════════════════════════════════════════════════════
  {
    symbol: '$',
    name: 'Dollar sign',
    nameEs: 'Signo de dólar',
    pronunciation: 'Dólar sain',
    category: 'currency',
    level: 'A2',
    usageExamples: [
      {
        context: 'Prices (symbol goes BEFORE the number)',
        contextEs: 'Precios (el símbolo va ANTES del número)',
        example: '$5.99 → "Five dollars and ninety-nine cents"',
      },
    ],
    commonMistake: {
      wrong: '5.99$ or 5,99$',
      correct: '$5.99',
      explanation: 'In English, the dollar sign goes BEFORE the number, unlike in many other languages',
    },
    techUsage: 'Variable prefix in PHP: $variable. Template literals: ${expression}. jQuery: $(selector)',
  },
  {
    symbol: '€',
    name: 'Euro sign',
    nameEs: 'Signo de euro',
    pronunciation: 'Yúrou sain',
    category: 'currency',
    level: 'A2',
    usageExamples: [
      {
        context: 'Euro prices (position varies by country)',
        contextEs: 'Precios en euros (posición varía por país)',
        example: '€50 or 50€ — "Fifty euros"',
      },
    ],
  },
  {
    symbol: '£',
    name: 'Pound sign',
    nameEs: 'Signo de libra (esterlina)',
    pronunciation: 'Páund sain',
    category: 'currency',
    level: 'A2',
    usageExamples: [
      {
        context: 'British currency',
        contextEs: 'Moneda británica',
        example: '£10 → "Ten pounds"',
      },
    ],
    commonMistake: {
      wrong: 'Confusing # (hash/number sign) with £ (pound sterling)',
      correct: '£ = British pound (money). # = number sign/hash (NOT money)',
      explanation: 'Americans sometimes call # a "pound sign" (phone context), but £ is the currency symbol',
    },
  },

  // ══════════════════════════════════════════════════════════
  // A2 — More Punctuation
  // ══════════════════════════════════════════════════════════
  {
    symbol: ':',
    name: 'Colon',
    nameEs: 'Dos puntos',
    pronunciation: 'Cóulon',
    category: 'punctuation',
    level: 'A2',
    usageExamples: [
      {
        context: 'Time',
        contextEs: 'Hora (en inglés se usa ":", no "." como en español)',
        example: '3:30 PM → "Three thirty PM"',
      },
      {
        context: 'Lists',
        contextEs: 'Introducir listas',
        example: 'I need three things: a pen, paper, and tape.',
      },
      {
        context: 'Ratios',
        contextEs: 'Proporciones',
        example: '2:1 → "Two to one"',
      },
    ],
    commonMistake: {
      wrong: '3.30 PM (using period for time)',
      correct: '3:30 PM (using colon for time)',
      explanation: 'English uses colon (:) for time, not period (.) as in some European formats',
    },
    techUsage: 'Key-value separator in JSON: {"name": "John"}. Port separator in URLs: localhost:3000',
  },
  {
    symbol: ';',
    name: 'Semicolon',
    nameEs: 'Punto y coma',
    pronunciation: 'Semicóulon',
    category: 'punctuation',
    level: 'A2',
    usageExamples: [
      {
        context: 'Connecting related independent clauses',
        contextEs: 'Conectar oraciones independientes relacionadas',
        example: 'I love coffee; my sister prefers tea.',
      },
      {
        context: 'Complex lists',
        contextEs: 'Listas complejas',
        example: 'I visited Paris, France; Rome, Italy; and Berlin, Germany.',
      },
    ],
    techUsage: 'Statement terminator in C, Java, JavaScript: let x = 5;',
  },
  {
    symbol: '...',
    name: 'Ellipsis',
    nameEs: 'Puntos suspensivos',
    pronunciation: 'Elípsis',
    category: 'punctuation',
    level: 'A2',
    usageExamples: [
      {
        context: 'Trailing off / hesitation',
        contextEs: 'Dejar una idea en el aire',
        example: 'Well, I was thinking...',
      },
      {
        context: 'Omission in quotes',
        contextEs: 'Omisión en citas',
        example: '"To be ... that is the question."',
      },
    ],
    techUsage: 'Spread operator in JavaScript: ...array. Rest parameters: function(...args)',
  },

  // ══════════════════════════════════════════════════════════
  // B1 — Tech & Special Characters
  // ══════════════════════════════════════════════════════════
  {
    symbol: '@',
    name: 'At sign',
    nameEs: 'Arroba',
    alternativeNames: ['At', 'At symbol'],
    pronunciation: 'At sain',
    category: 'tech',
    level: 'B1',
    usageExamples: [
      {
        context: 'Email addresses',
        contextEs: 'Direcciones de email',
        example: 'john@gmail.com → "john AT gmail DOT com"',
      },
      {
        context: 'Social media mentions',
        contextEs: 'Menciones en redes sociales',
        example: '@username → "at username"',
      },
      {
        context: 'Price per unit',
        contextEs: 'Precio por unidad',
        example: '10 items @ $5 each → "Ten items at five dollars each"',
      },
    ],
    techUsage: 'Decorators in Python/TypeScript: @Component. Email addresses. CSS media queries.',
  },
  {
    symbol: '#',
    name: 'Hash sign',
    nameEs: 'Signo de número / Almohadilla / Numeral',
    alternativeNames: ['Number sign', 'Pound sign (US phones)', 'Hashtag', 'Octothorpe'],
    pronunciation: 'Jash sain',
    category: 'tech',
    level: 'B1',
    usageExamples: [
      {
        context: 'Hashtags on social media',
        contextEs: 'Hashtags en redes sociales',
        example: '#learning → "hashtag learning"',
      },
      {
        context: 'Number symbol',
        contextEs: 'Símbolo de número',
        example: 'Room #302 → "Room number three-oh-two"',
      },
      {
        context: 'Phone systems',
        contextEs: 'Sistemas telefónicos',
        example: '"Press pound" or "Press hash" at the end',
      },
    ],
    techUsage: 'Comments in Python/Ruby: # this is a comment. CSS ID selector: #myElement. Hex colors: #FF5733',
  },
  {
    symbol: '&',
    name: 'Ampersand',
    nameEs: 'Y comercial / Ampersand',
    alternativeNames: ['And sign'],
    pronunciation: 'Ámpersan',
    category: 'tech',
    level: 'B1',
    usageExamples: [
      {
        context: 'Instead of "and" in names/titles',
        contextEs: 'En lugar de "and" en nombres/títulos',
        example: 'Johnson & Johnson, Barnes & Noble',
      },
      {
        context: 'How to say it',
        contextEs: 'Cómo decirlo',
        example: '"Smith and Jones" or "Smith ampersand Jones" (formal)',
      },
    ],
    techUsage: 'Logical AND in programming: && (double ampersand). URL parameters: ?name=John&age=30. HTML entity: &amp;',
  },
  {
    symbol: '*',
    name: 'Asterisk',
    nameEs: 'Asterisco',
    alternativeNames: ['Star'],
    pronunciation: 'Ásterisk',
    category: 'tech',
    level: 'B1',
    usageExamples: [
      {
        context: 'Footnotes',
        contextEs: 'Notas al pie',
        example: 'Free shipping* (*conditions apply)',
      },
      {
        context: 'Multiplication in tech/math',
        contextEs: 'Multiplicación en tecnología',
        example: '3 * 4 = 12',
      },
      {
        context: 'Emphasis in text',
        contextEs: 'Énfasis en texto',
        example: 'I *really* need this → "I really need this" (bold/italic)',
      },
    ],
    techUsage: 'Multiplication operator: 3 * 4. Wildcard: *.txt (all text files). Pointer in C: *ptr. Markdown bold: **bold**',
  },
  {
    symbol: '/',
    name: 'Forward slash',
    nameEs: 'Barra inclinada / Barra diagonal',
    alternativeNames: ['Slash', 'Stroke'],
    pronunciation: 'Fóruard slash',
    category: 'tech',
    level: 'B1',
    usageExamples: [
      {
        context: 'Web addresses',
        contextEs: 'Direcciones web',
        example: 'https://www.google.com/search → "...dot com slash search"',
      },
      {
        context: 'Alternatives',
        contextEs: 'Alternativas',
        example: 'his/her → "his or her"',
      },
      {
        context: 'Dates (US format)',
        contextEs: 'Fechas (formato americano)',
        example: '02/19/2026 → February 19, 2026 (month/day/year)',
      },
    ],
    commonMistake: {
      wrong: 'Confusing / (forward slash) with \\ (backslash)',
      correct: '/ = forward slash (URLs). \\ = backslash (Windows file paths)',
      explanation: 'Forward slash leans forward (/), backslash leans back (\\). URLs always use forward slash.',
    },
    techUsage: 'Division: 10 / 2. URL paths. Regex delimiters: /pattern/. Comments: // single line',
  },
  {
    symbol: '\\',
    name: 'Backslash',
    nameEs: 'Barra invertida / Barra inversa',
    pronunciation: 'Bákslash',
    category: 'tech',
    level: 'B1',
    usageExamples: [
      {
        context: 'Windows file paths',
        contextEs: 'Rutas de archivos en Windows',
        example: 'C:\\Users\\Documents\\file.txt',
      },
      {
        context: 'How to distinguish from forward slash',
        contextEs: 'Cómo distinguir de la barra normal',
        example: "/ = forward slash (goes forward). \\ = backslash (goes back).",
      },
    ],
    techUsage: 'Escape character: \\n (new line), \\t (tab), \\\\ (literal backslash). Windows paths: C:\\Users\\',
  },
  {
    symbol: '_',
    name: 'Underscore',
    nameEs: 'Guión bajo',
    alternativeNames: ['Underline'],
    pronunciation: 'Ánderscore',
    category: 'tech',
    level: 'B1',
    usageExamples: [
      {
        context: 'Spaces in usernames/URLs',
        contextEs: 'Espacios en nombres de usuario/URLs',
        example: 'john_smith → "john underscore smith"',
      },
      {
        context: 'Fill-in-the-blank',
        contextEs: 'Llenar espacios en blanco',
        example: 'My name is _____.',
      },
    ],
    techUsage: 'Variable naming: my_variable (snake_case). Private convention: _privateMethod. Unused variable: _',
  },
  {
    symbol: '|',
    name: 'Vertical bar',
    nameEs: 'Barra vertical / Pleca',
    alternativeNames: ['Pipe', 'Bar'],
    pronunciation: 'Páip',
    category: 'tech',
    level: 'B1',
    usageExamples: [
      {
        context: 'Alternatives in informal writing',
        contextEs: 'Alternativas en escritura informal',
        example: 'Yes | No | Maybe',
      },
    ],
    techUsage: 'Pipe operator in terminal: ls | grep "file". Logical OR: || (double pipe). Union types in TypeScript: string | number',
  },
  {
    symbol: '~',
    name: 'Tilde',
    nameEs: 'Virgulilla / Tilde de la ñ',
    pronunciation: 'Tílda',
    category: 'tech',
    level: 'B1',
    usageExamples: [
      {
        context: 'Approximately',
        contextEs: 'Aproximadamente',
        example: '~50 people → "approximately fifty people"',
      },
    ],
    commonMistake: {
      wrong: 'Calling it "tilde" in Spanish context (ñ)',
      correct: 'In English, "tilde" refers to this specific character: ~',
      explanation: 'In Spanish, "tilde" can mean any accent mark. In English, "tilde" specifically means the ~ symbol.',
    },
    techUsage: 'Home directory in Unix: ~/Documents. Bitwise NOT: ~value. Approximate versions: ~1.0.0',
  },

  // ══════════════════════════════════════════════════════════
  // B1 — Typography
  // ══════════════════════════════════════════════════════════
  {
    symbol: '—',
    name: 'Em dash',
    nameEs: 'Raya / Guión largo',
    pronunciation: 'Em dash',
    category: 'typography',
    level: 'B1',
    usageExamples: [
      {
        context: 'Parenthetical statements (stronger than commas)',
        contextEs: 'Incisos (más fuerte que las comas)',
        example: 'The store—which opened last year—is very popular.',
      },
      {
        context: 'Dramatic pause',
        contextEs: 'Pausa dramática',
        example: 'I opened the door and saw—nothing.',
      },
    ],
    commonMistake: {
      wrong: 'Using hyphen (-) instead of em dash (—)',
      correct: 'Hyphen: well-known. Em dash: I love coffee—especially espresso.',
      explanation: 'English has three horizontal marks: hyphen (-), en dash (–), em dash (—). They are NOT interchangeable.',
    },
  },
  {
    symbol: '–',
    name: 'En dash',
    nameEs: 'Guión medio / Semirraya',
    pronunciation: 'En dash',
    category: 'typography',
    level: 'B1',
    usageExamples: [
      {
        context: 'Ranges',
        contextEs: 'Rangos',
        example: 'pages 10–20, Monday–Friday, 2020–2025',
      },
      {
        context: 'Scores',
        contextEs: 'Puntuaciones',
        example: 'The final score was 3–1.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // B2 — Advanced/Special Symbols
  // ══════════════════════════════════════════════════════════
  {
    symbol: '©',
    name: 'Copyright symbol',
    nameEs: 'Símbolo de copyright',
    pronunciation: 'Cópyrait',
    category: 'typography',
    level: 'B2',
    usageExamples: [
      {
        context: 'Legal notices',
        contextEs: 'Avisos legales',
        example: '© 2026 EnglishPro. All rights reserved.',
      },
    ],
  },
  {
    symbol: '®',
    name: 'Registered trademark',
    nameEs: 'Marca registrada',
    pronunciation: 'Réyisterd tréidmark',
    category: 'typography',
    level: 'B2',
    usageExamples: [
      {
        context: 'Brand names',
        contextEs: 'Nombres de marca',
        example: 'Microsoft® Windows®',
      },
    ],
  },
  {
    symbol: '™',
    name: 'Trademark',
    nameEs: 'Marca comercial',
    pronunciation: 'Tréidmark',
    category: 'typography',
    level: 'B2',
    usageExamples: [
      {
        context: 'Unregistered trademarks',
        contextEs: 'Marcas no registradas',
        example: 'CleanTech™ Solutions',
      },
    ],
  },
  {
    symbol: '^',
    name: 'Caret',
    nameEs: 'Acento circunflejo / Signo de intercalación',
    alternativeNames: ['Circumflex', 'Hat'],
    pronunciation: 'Kéret',
    category: 'tech',
    level: 'B2',
    usageExamples: [
      {
        context: 'Exponentiation in informal writing',
        contextEs: 'Exponentes en escritura informal',
        example: '2^3 = 8 → "Two to the power of three"',
      },
    ],
    techUsage: 'Exponentiation: 2^3. Regex: start of string ^hello. Bitwise XOR. In npm: ^1.0.0 (compatible with)',
  },
  {
    symbol: '`',
    name: 'Backtick',
    nameEs: 'Acento grave / Tilde invertida',
    alternativeNames: ['Grave accent', 'Backquote'],
    pronunciation: 'Báktik',
    category: 'tech',
    level: 'B2',
    usageExamples: [
      {
        context: 'How to identify it on keyboard',
        contextEs: 'Cómo encontrarlo en el teclado',
        example: 'Usually top-left key, below Esc. The key with ~ and `',
      },
    ],
    techUsage: 'Template literals in JS: `Hello ${name}`. Code in Markdown: `inline code`. SQL identifiers: `table_name`',
  },

  // ══════════════════════════════════════════════════════════
  // B2 — Keyboard-Specific
  // ══════════════════════════════════════════════════════════
  {
    symbol: 'Tab',
    name: 'Tab key',
    nameEs: 'Tecla de tabulación',
    pronunciation: 'Tab',
    category: 'keyboard',
    level: 'B2',
    usageExamples: [
      {
        context: 'Indentation',
        contextEs: 'Indentación / Sangría',
        example: '"Press Tab to indent the paragraph."',
      },
      {
        context: 'Moving between fields',
        contextEs: 'Moverse entre campos',
        example: '"Press Tab to go to the next field."',
      },
    ],
    techUsage: 'Indentation in code. Tab character: \\t. Auto-complete in terminal/IDE.',
  },
  {
    symbol: 'Enter / Return',
    name: 'Enter key',
    nameEs: 'Tecla Enter / Tecla Intro',
    alternativeNames: ['Return key (Mac)', 'Carriage return'],
    pronunciation: 'Énter',
    category: 'keyboard',
    level: 'B2',
    usageExamples: [
      {
        context: 'Confirming actions',
        contextEs: 'Confirmar acciones',
        example: '"Press Enter to submit." / "Hit Enter."',
      },
    ],
    techUsage: 'New line character: \\n. Form submission. Command execution in terminal.',
  },
  {
    symbol: 'Shift',
    name: 'Shift key',
    nameEs: 'Tecla Mayúsculas / Tecla Shift',
    pronunciation: 'Shift',
    category: 'keyboard',
    level: 'B2',
    usageExamples: [
      {
        context: 'Capital letters',
        contextEs: 'Letras mayúsculas',
        example: '"Hold Shift and press A to type a capital A."',
      },
      {
        context: 'Special characters',
        contextEs: 'Caracteres especiales',
        example: '"Shift + 2 gives you @ on US keyboards."',
      },
    ],
  },
  {
    symbol: 'Ctrl / Cmd',
    name: 'Control key / Command key',
    nameEs: 'Tecla Control / Tecla Comando',
    pronunciation: 'Contról / Cománd',
    category: 'keyboard',
    level: 'B2',
    usageExamples: [
      {
        context: 'Keyboard shortcuts',
        contextEs: 'Atajos de teclado',
        example: '"Ctrl+C to copy, Ctrl+V to paste" (Cmd on Mac)',
      },
    ],
  },
  {
    symbol: 'Alt',
    name: 'Alt key',
    nameEs: 'Tecla Alt / Tecla Alternativa',
    alternativeNames: ['Option key (Mac)'],
    pronunciation: 'Alt / Ólternativ',
    category: 'keyboard',
    level: 'B2',
    usageExamples: [
      {
        context: 'Keyboard shortcuts',
        contextEs: 'Atajos de teclado',
        example: '"Alt+Tab to switch between windows." (Windows)',
      },
    ],
  },
  {
    symbol: 'Esc',
    name: 'Escape key',
    nameEs: 'Tecla Escape',
    pronunciation: 'Eskéip',
    category: 'keyboard',
    level: 'B2',
    usageExamples: [
      {
        context: 'Canceling actions',
        contextEs: 'Cancelar acciones',
        example: '"Press Esc to close the dialog." / "Press Escape to cancel."',
      },
    ],
  },
  {
    symbol: 'Delete / Backspace',
    name: 'Delete key / Backspace key',
    nameEs: 'Tecla Suprimir / Tecla Retroceso',
    pronunciation: 'Delít / Bákspeis',
    category: 'keyboard',
    level: 'B2',
    usageExamples: [
      {
        context: 'Deleting text',
        contextEs: 'Borrar texto',
        example: '"Backspace deletes to the left. Delete deletes to the right."',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // C1 — Rare/Specialized Symbols
  // ══════════════════════════════════════════════════════════
  {
    symbol: '§',
    name: 'Section sign',
    nameEs: 'Signo de sección / Párrafo',
    pronunciation: 'Sékshon sain',
    category: 'typography',
    level: 'C1',
    usageExamples: [
      {
        context: 'Legal references',
        contextEs: 'Referencias legales',
        example: '§ 101 → "Section one-oh-one"',
      },
    ],
  },
  {
    symbol: '¶',
    name: 'Pilcrow',
    nameEs: 'Calderón / Signo de párrafo',
    alternativeNames: ['Paragraph mark'],
    pronunciation: 'Pílcrou',
    category: 'typography',
    level: 'C1',
    usageExamples: [
      {
        context: 'Paragraph mark in editing',
        contextEs: 'Marca de párrafo en edición de texto',
        example: 'Click ¶ in Word to show formatting marks.',
      },
    ],
  },
  {
    symbol: '†',
    name: 'Dagger',
    nameEs: 'Cruz / Obelisco',
    alternativeNames: ['Obelisk'],
    pronunciation: 'Dáger',
    category: 'typography',
    level: 'C1',
    usageExamples: [
      {
        context: 'Second footnote marker (after *)',
        contextEs: 'Segundo marcador de nota al pie',
        example: '† See Appendix B for details.',
      },
      {
        context: 'Deceased person',
        contextEs: 'Persona fallecida',
        example: 'John Smith (1940†2020)',
      },
    ],
  },
  {
    symbol: '°',
    name: 'Degree symbol',
    nameEs: 'Símbolo de grado',
    pronunciation: 'Digrí símbol',
    category: 'math',
    level: 'A2',
    usageExamples: [
      {
        context: 'Temperature',
        contextEs: 'Temperatura',
        example: '72°F → "Seventy-two degrees Fahrenheit". 22°C → "Twenty-two degrees Celsius"',
      },
      {
        context: 'Angles',
        contextEs: 'Ángulos',
        example: '90° → "Ninety degrees". A 180° turn → "A one-eighty-degree turn"',
      },
    ],
    commonMistake: {
      wrong: 'Most Americans use Fahrenheit, not Celsius',
      correct: '32°F = 0°C (freezing). 72°F = 22°C (room temp). 212°F = 100°C (boiling).',
      explanation: 'When speaking English with Americans, use Fahrenheit. With British people, Celsius is used.',
    },
  },
  {
    symbol: '∞',
    name: 'Infinity symbol',
    nameEs: 'Símbolo de infinito',
    pronunciation: 'Infíniti',
    category: 'math',
    level: 'B2',
    usageExamples: [
      {
        context: 'Mathematics / Infinite',
        contextEs: 'Matemáticas / Infinito',
        example: '∞ → "infinity"',
      },
    ],
  },
  {
    symbol: '≠',
    name: 'Not equal to',
    nameEs: 'Diferente de / No igual a',
    pronunciation: 'Nót íkual tu',
    category: 'math',
    level: 'B2',
    usageExamples: [
      {
        context: 'Inequality',
        contextEs: 'Desigualdad',
        example: '5 ≠ 3 → "Five is not equal to three"',
      },
    ],
    techUsage: 'In programming: != or !== (not equal)',
  },
  {
    symbol: '≈',
    name: 'Approximately equal to',
    nameEs: 'Aproximadamente igual a',
    pronunciation: 'Apróximatli íkual tu',
    category: 'math',
    level: 'B2',
    usageExamples: [
      {
        context: 'Approximations',
        contextEs: 'Aproximaciones',
        example: 'π ≈ 3.14 → "Pi is approximately equal to three point one four"',
      },
    ],
  },
  {
    symbol: '≤',
    name: 'Less than or equal to',
    nameEs: 'Menor o igual que',
    pronunciation: 'Les dan or íkual tu',
    category: 'math',
    level: 'B2',
    usageExamples: [
      {
        context: 'Mathematics / Conditions',
        contextEs: 'Matemáticas / Condiciones',
        example: 'x ≤ 10 → "X is less than or equal to ten"',
      },
    ],
    techUsage: 'In programming: <=',
  },
  {
    symbol: '≥',
    name: 'Greater than or equal to',
    nameEs: 'Mayor o igual que',
    pronunciation: 'Gréiter dan or íkual tu',
    category: 'math',
    level: 'B2',
    usageExamples: [
      {
        context: 'Mathematics / Requirements',
        contextEs: 'Matemáticas / Requisitos',
        example: 'Age ≥ 18 → "Age is greater than or equal to eighteen"',
      },
    ],
    techUsage: 'In programming: >=',
  },
];

// ══════════════════════════════════════════════════════════
// Helper functions
// ══════════════════════════════════════════════════════════

export const getSymbolsByLevel = (level: string): SymbolEntry[] =>
  symbolNames.filter(s => s.level === level);

export const getSymbolsByCategory = (category: SymbolCategory): SymbolEntry[] =>
  symbolNames.filter(s => s.category === category);

export const searchSymbol = (query: string): SymbolEntry | undefined => {
  const q = query.toLowerCase().trim();
  return symbolNames.find(s =>
    s.symbol.toLowerCase() === q ||
    s.name.toLowerCase().includes(q) ||
    s.nameEs.toLowerCase().includes(q) ||
    s.alternativeNames?.some(n => n.toLowerCase().includes(q))
  );
};

export const getSymbolByName = (name: string): SymbolEntry | undefined => {
  const q = name.toLowerCase().trim();
  return symbolNames.find(s =>
    s.name.toLowerCase() === q ||
    s.alternativeNames?.some(n => n.toLowerCase() === q)
  );
};

export const getTotalSymbolCount = (): number => symbolNames.length;
