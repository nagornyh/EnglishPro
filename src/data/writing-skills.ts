// Writing Skills - Habilidades de Escritura
// Email structure, punctuation, paragraphs, register

export interface WritingTopic {
  id: string;
  name: string;
  nameEs: string;
  level: number;
  category: 'emails' | 'punctuation' | 'paragraphs' | 'connectors' | 'register' | 'abbreviations';
  content: {
    section: string;
    sectionEs: string;
    points: {
      point: string;
      pointEs: string;
      examples?: string[];
    }[];
  }[];
}

export const writingSkills: WritingTopic[] = [
  // === EMAIL STRUCTURE ===
  {
    id: 'email-structure',
    name: 'Email Structure',
    nameEs: 'Estructura de Emails',
    level: 3,
    category: 'emails',
    content: [
      {
        section: 'Subject Line',
        sectionEs: 'Línea de Asunto',
        points: [
          { point: 'Keep it short and specific', pointEs: 'Mantenla corta y específica', examples: ['Meeting Request - March 15', 'Invoice #12345', 'Question about your product'] },
          { point: 'Don\'t use all caps (looks like shouting)', pointEs: 'No uses todo en mayúsculas (parece gritar)' },
          { point: 'Include action needed if urgent', pointEs: 'Incluye la acción necesaria si es urgente', examples: ['ACTION REQUIRED: Contract Review'] }
        ]
      },
      {
        section: 'Formal Opening',
        sectionEs: 'Saludo Formal',
        points: [
          { point: 'Dear Mr./Ms./Mrs. + Last Name', pointEs: 'Querido Sr./Sra./Srta. + Apellido', examples: ['Dear Mr. Smith,', 'Dear Ms. Johnson,'] },
          { point: 'Dear Sir or Madam (unknown recipient)', pointEs: 'Estimado/a señor/a (destinatario desconocido)' },
          { point: 'To Whom It May Concern (very formal)', pointEs: 'A quien corresponda (muy formal)' },
          { point: 'Dear [Name] (semi-formal)', pointEs: 'Estimado/a [Nombre]', examples: ['Dear John,', 'Dear Sarah,'] }
        ]
      },
      {
        section: 'Informal Opening',
        sectionEs: 'Saludo Informal',
        points: [
          { point: 'Hi [Name]', pointEs: 'Hola [Nombre]', examples: ['Hi John,', 'Hi there,'] },
          { point: 'Hello [Name]', pointEs: 'Hola [Nombre]' },
          { point: 'Hey [Name] (very casual)', pointEs: 'Hey [Nombre] (muy casual)' }
        ]
      },
      {
        section: 'Opening Lines',
        sectionEs: 'Líneas de Apertura',
        points: [
          { point: 'I hope this email finds you well.', pointEs: 'Espero que este correo le encuentre bien.' },
          { point: 'Thank you for your email.', pointEs: 'Gracias por su correo.' },
          { point: 'I am writing to inquire about...', pointEs: 'Le escribo para preguntar sobre...' },
          { point: 'I am writing regarding...', pointEs: 'Le escribo con respecto a...' },
          { point: 'Following our conversation...', pointEs: 'Siguiendo nuestra conversación...' },
          { point: 'Just a quick email to...', pointEs: 'Solo un correo rápido para... (informal)' }
        ]
      },
      {
        section: 'Formal Closing',
        sectionEs: 'Despedida Formal',
        points: [
          { point: 'Yours sincerely, (if you know the name)', pointEs: 'Atentamente, (si conoces el nombre)' },
          { point: 'Yours faithfully, (if you don\'t know name)', pointEs: 'Atentamente, (si no conoces el nombre)' },
          { point: 'Best regards,', pointEs: 'Saludos cordiales,' },
          { point: 'Kind regards,', pointEs: 'Un cordial saludo,' },
          { point: 'With best wishes,', pointEs: 'Con los mejores deseos,' }
        ]
      },
      {
        section: 'Informal Closing',
        sectionEs: 'Despedida Informal',
        points: [
          { point: 'Best,', pointEs: 'Saludos,' },
          { point: 'Thanks,', pointEs: 'Gracias,' },
          { point: 'Cheers, (UK)', pointEs: 'Saludos, (UK)' },
          { point: 'Take care,', pointEs: 'Cuídate,' },
          { point: 'Talk soon,', pointEs: 'Hablamos pronto,' }
        ]
      }
    ]
  },

  // === PUNCTUATION ===
  {
    id: 'punctuation',
    name: 'Punctuation Rules',
    nameEs: 'Reglas de Puntuación',
    level: 3,
    category: 'punctuation',
    content: [
      {
        section: 'Period / Full Stop (.)',
        sectionEs: 'Punto (.)',
        points: [
          { point: 'End of a sentence', pointEs: 'Fin de una oración', examples: ['I went to the store.', 'She is a doctor.'] },
          { point: 'After abbreviations', pointEs: 'Después de abreviaturas', examples: ['Dr.', 'Mr.', 'etc.'] },
          { point: 'NOT used in British English for titles', pointEs: 'NO se usa en inglés británico para títulos', examples: ['Mr Smith (UK)', 'Mr. Smith (US)'] }
        ]
      },
      {
        section: 'Comma (,)',
        sectionEs: 'Coma (,)',
        points: [
          { point: 'Before coordinating conjunctions (and, but, or, so)', pointEs: 'Antes de conjunciones coordinantes', examples: ['I like coffee, but she prefers tea.'] },
          { point: 'After introductory elements', pointEs: 'Después de elementos introductorios', examples: ['However, I disagree.', 'In my opinion, this is wrong.'] },
          { point: 'In lists', pointEs: 'En listas', examples: ['apples, oranges, and bananas'] },
          { point: 'Before and after non-essential information', pointEs: 'Antes y después de información no esencial', examples: ['My brother, who lives in Paris, is visiting.'] },
          { point: 'In dates and addresses', pointEs: 'En fechas y direcciones', examples: ['January 1, 2024', 'New York, NY'] },
          { point: 'After "yes" and "no"', pointEs: 'Después de "yes" y "no"', examples: ['Yes, I agree.', 'No, thank you.'] },
          { point: 'Oxford comma (optional but recommended)', pointEs: 'Coma de Oxford (opcional pero recomendada)', examples: ['red, white, and blue'] }
        ]
      },
      {
        section: 'Apostrophe (\')',
        sectionEs: 'Apóstrofe (\')',
        points: [
          { point: 'Contractions (missing letters)', pointEs: 'Contracciones (letras omitidas)', examples: ['don\'t (do not)', 'it\'s (it is)', 'I\'m (I am)'] },
          { point: 'Possessive (singular)', pointEs: 'Posesivo (singular)', examples: ['John\'s book', 'the dog\'s tail'] },
          { point: 'Possessive (plural ending in s)', pointEs: 'Posesivo (plural terminado en s)', examples: ['the students\' books', 'my parents\' house'] },
          { point: 'NOT used for plurals', pointEs: 'NO se usa para plurales', examples: ['Wrong: apple\'s → Right: apples'] },
          { point: 'Its vs It\'s', pointEs: 'Its vs It\'s', examples: ['Its = possessive (its tail)', 'It\'s = it is (It\'s raining)'] }
        ]
      },
      {
        section: 'Semicolon (;)',
        sectionEs: 'Punto y Coma (;)',
        points: [
          { point: 'Connect two related independent clauses', pointEs: 'Conectar dos cláusulas independientes relacionadas', examples: ['I love coffee; my sister prefers tea.'] },
          { point: 'Before conjunctive adverbs', pointEs: 'Antes de adverbios conjuntivos', examples: ['I was tired; however, I continued working.'] },
          { point: 'In complex lists', pointEs: 'En listas complejas', examples: ['We visited Paris, France; Rome, Italy; and London, England.'] }
        ]
      },
      {
        section: 'Colon (:)',
        sectionEs: 'Dos Puntos (:)',
        points: [
          { point: 'Before a list', pointEs: 'Antes de una lista', examples: ['I need three things: bread, milk, and eggs.'] },
          { point: 'Before an explanation', pointEs: 'Antes de una explicación', examples: ['There was one problem: we had no money.'] },
          { point: 'In time', pointEs: 'En la hora', examples: ['10:30 AM'] },
          { point: 'After salutation in formal letters', pointEs: 'Después del saludo en cartas formales', examples: ['Dear Sir:'] }
        ]
      },
      {
        section: 'Quotation Marks (" ")',
        sectionEs: 'Comillas (" ")',
        points: [
          { point: 'Direct speech', pointEs: 'Discurso directo', examples: ['She said, "I\'m tired."'] },
          { point: 'Titles of short works', pointEs: 'Títulos de obras cortas', examples: ['"The Raven" (poem)', '"Yesterday" (song)'] },
          { point: 'Irony or special meaning', pointEs: 'Ironía o significado especial', examples: ['He\'s such a "genius."'] },
          { point: 'Periods and commas inside (American)', pointEs: 'Puntos y comas adentro (americano)' },
          { point: 'Periods and commas outside (British)', pointEs: 'Puntos y comas afuera (británico)' }
        ]
      }
    ]
  },

  // === PARAGRAPH STRUCTURE ===
  {
    id: 'paragraphs',
    name: 'Paragraph Structure',
    nameEs: 'Estructura de Párrafos',
    level: 4,
    category: 'paragraphs',
    content: [
      {
        section: 'Topic Sentence',
        sectionEs: 'Oración Temática',
        points: [
          { point: 'First sentence of paragraph', pointEs: 'Primera oración del párrafo' },
          { point: 'States the main idea', pointEs: 'Presenta la idea principal' },
          { point: 'Should be clear and specific', pointEs: 'Debe ser clara y específica' },
          { point: 'Example: "Public transportation has many benefits for cities."', pointEs: 'Ejemplo: "El transporte público tiene muchos beneficios para las ciudades."' }
        ]
      },
      {
        section: 'Supporting Sentences',
        sectionEs: 'Oraciones de Apoyo',
        points: [
          { point: 'Explain, prove, or describe the topic sentence', pointEs: 'Explican, prueban o describen la oración temática' },
          { point: 'Include facts, examples, reasons', pointEs: 'Incluyen hechos, ejemplos, razones' },
          { point: 'Usually 3-5 sentences', pointEs: 'Usualmente 3-5 oraciones' },
          { point: 'Should flow logically', pointEs: 'Deben fluir lógicamente' }
        ]
      },
      {
        section: 'Concluding Sentence',
        sectionEs: 'Oración Conclusiva',
        points: [
          { point: 'Restates the main idea in different words', pointEs: 'Reformula la idea principal con otras palabras' },
          { point: 'Summarizes the supporting points', pointEs: 'Resume los puntos de apoyo' },
          { point: 'Signals the end of the paragraph', pointEs: 'Señala el final del párrafo' },
          { point: 'Transitions to next paragraph if needed', pointEs: 'Hace transición al siguiente párrafo si es necesario' }
        ]
      },
      {
        section: 'Paragraph Length',
        sectionEs: 'Longitud del Párrafo',
        points: [
          { point: 'Academic: 100-200 words', pointEs: 'Académico: 100-200 palabras' },
          { point: 'Online/blogs: shorter paragraphs (50-100 words)', pointEs: 'Online/blogs: párrafos más cortos (50-100 palabras)' },
          { point: 'Business emails: very short (2-3 sentences)', pointEs: 'Emails de negocios: muy cortos (2-3 oraciones)' },
          { point: 'One idea per paragraph', pointEs: 'Una idea por párrafo' }
        ]
      }
    ]
  },

  // === WRITTEN CONNECTORS ===
  {
    id: 'written-connectors',
    name: 'Written Connectors',
    nameEs: 'Conectores Escritos',
    level: 4,
    category: 'connectors',
    content: [
      {
        section: 'Addition',
        sectionEs: 'Adición',
        points: [
          { point: 'Furthermore / Moreover / In addition', pointEs: 'Además' },
          { point: 'Also / Additionally / Besides', pointEs: 'También / Adicionalmente' },
          { point: 'What is more / On top of that', pointEs: 'Además de eso' },
          { point: 'Not only... but also', pointEs: 'No solo... sino también' }
        ]
      },
      {
        section: 'Contrast',
        sectionEs: 'Contraste',
        points: [
          { point: 'However / Nevertheless / Nonetheless', pointEs: 'Sin embargo / No obstante' },
          { point: 'On the other hand / In contrast', pointEs: 'Por otro lado / En contraste' },
          { point: 'Although / Even though / Though', pointEs: 'Aunque' },
          { point: 'While / Whereas', pointEs: 'Mientras que' },
          { point: 'Despite / In spite of + noun/-ing', pointEs: 'A pesar de' }
        ]
      },
      {
        section: 'Cause & Effect',
        sectionEs: 'Causa y Efecto',
        points: [
          { point: 'Therefore / Thus / Hence / Consequently', pointEs: 'Por lo tanto / En consecuencia' },
          { point: 'As a result / As a consequence', pointEs: 'Como resultado' },
          { point: 'Because of / Due to / Owing to + noun', pointEs: 'Debido a' },
          { point: 'Since / As / Because + clause', pointEs: 'Ya que / Porque' },
          { point: 'For this reason / That is why', pointEs: 'Por esta razón' }
        ]
      },
      {
        section: 'Example',
        sectionEs: 'Ejemplo',
        points: [
          { point: 'For example / For instance', pointEs: 'Por ejemplo' },
          { point: 'Such as / Like', pointEs: 'Tales como / Como' },
          { point: 'To illustrate / To demonstrate', pointEs: 'Para ilustrar / Para demostrar' },
          { point: 'In particular / Particularly / Especially', pointEs: 'En particular / Especialmente' }
        ]
      },
      {
        section: 'Sequence',
        sectionEs: 'Secuencia',
        points: [
          { point: 'First / Firstly / To begin with', pointEs: 'Primero / En primer lugar' },
          { point: 'Second / Secondly / Next / Then', pointEs: 'Segundo / Luego' },
          { point: 'Finally / Lastly / Last but not least', pointEs: 'Finalmente / Por último' },
          { point: 'Meanwhile / In the meantime', pointEs: 'Mientras tanto' }
        ]
      },
      {
        section: 'Conclusion',
        sectionEs: 'Conclusión',
        points: [
          { point: 'In conclusion / To conclude', pointEs: 'En conclusión' },
          { point: 'To sum up / In summary / Overall', pointEs: 'En resumen / En general' },
          { point: 'All in all / On the whole', pointEs: 'En general / En conjunto' },
          { point: 'Taking everything into account', pointEs: 'Tomando todo en cuenta' }
        ]
      },
      {
        section: 'Emphasis',
        sectionEs: 'Énfasis',
        points: [
          { point: 'Indeed / In fact / Actually', pointEs: 'De hecho / En realidad' },
          { point: 'Certainly / Undoubtedly / Without doubt', pointEs: 'Ciertamente / Sin duda' },
          { point: 'Above all / Most importantly', pointEs: 'Sobre todo / Lo más importante' },
          { point: 'It should be noted that', pointEs: 'Cabe notar que' }
        ]
      }
    ]
  },

  // === FORMAL VS INFORMAL REGISTER ===
  {
    id: 'register',
    name: 'Formal vs Informal Writing',
    nameEs: 'Escritura Formal vs Informal',
    level: 4,
    category: 'register',
    content: [
      {
        section: 'Formal Writing Features',
        sectionEs: 'Características de la Escritura Formal',
        points: [
          { point: 'Avoid contractions', pointEs: 'Evitar contracciones', examples: ['do not (not don\'t)', 'cannot (not can\'t)'] },
          { point: 'Use passive voice when appropriate', pointEs: 'Usar voz pasiva cuando sea apropiado', examples: ['The report was submitted.'] },
          { point: 'Avoid phrasal verbs', pointEs: 'Evitar phrasal verbs', examples: ['discover (not find out)', 'investigate (not look into)'] },
          { point: 'Use formal vocabulary', pointEs: 'Usar vocabulario formal', examples: ['purchase (not buy)', 'require (not need)'] },
          { point: 'Complete sentences', pointEs: 'Oraciones completas' },
          { point: 'Third person', pointEs: 'Tercera persona', examples: ['One should consider...', 'It is recommended...'] }
        ]
      },
      {
        section: 'Informal Writing Features',
        sectionEs: 'Características de la Escritura Informal',
        points: [
          { point: 'Use contractions', pointEs: 'Usar contracciones', examples: ['don\'t, can\'t, I\'m'] },
          { point: 'Use active voice', pointEs: 'Usar voz activa', examples: ['I submitted the report.'] },
          { point: 'Use phrasal verbs', pointEs: 'Usar phrasal verbs', examples: ['find out, look into, come up with'] },
          { point: 'Use simple vocabulary', pointEs: 'Usar vocabulario simple', examples: ['buy, need, get'] },
          { point: 'Sentence fragments OK', pointEs: 'Fragmentos de oración OK', examples: ['Great idea!', 'Sounds good.'] },
          { point: 'First and second person', pointEs: 'Primera y segunda persona', examples: ['I think...', 'You should...'] }
        ]
      },
      {
        section: 'When to Use Formal Writing',
        sectionEs: 'Cuándo Usar Escritura Formal',
        points: [
          { point: 'Business emails to clients/superiors', pointEs: 'Emails de negocios a clientes/superiores' },
          { point: 'Academic essays and reports', pointEs: 'Ensayos y reportes académicos' },
          { point: 'Job applications and cover letters', pointEs: 'Solicitudes de trabajo y cartas de presentación' },
          { point: 'Legal documents', pointEs: 'Documentos legales' },
          { point: 'Official complaints', pointEs: 'Quejas oficiales' }
        ]
      },
      {
        section: 'When to Use Informal Writing',
        sectionEs: 'Cuándo Usar Escritura Informal',
        points: [
          { point: 'Emails to friends and colleagues', pointEs: 'Emails a amigos y colegas' },
          { point: 'Social media posts', pointEs: 'Publicaciones en redes sociales' },
          { point: 'Personal blogs', pointEs: 'Blogs personales' },
          { point: 'Text messages', pointEs: 'Mensajes de texto' },
          { point: 'Notes', pointEs: 'Notas' }
        ]
      }
    ]
  },

  // === COMMON ABBREVIATIONS ===
  {
    id: 'abbreviations',
    name: 'Common Abbreviations',
    nameEs: 'Abreviaciones Comunes',
    level: 3,
    category: 'abbreviations',
    content: [
      {
        section: 'Latin Abbreviations',
        sectionEs: 'Abreviaciones del Latín',
        points: [
          { point: 'etc. (et cetera) = and so on', pointEs: 'etc. = etcétera' },
          { point: 'e.g. (exempli gratia) = for example', pointEs: 'e.g. = por ejemplo' },
          { point: 'i.e. (id est) = that is / in other words', pointEs: 'i.e. = es decir' },
          { point: 'vs. (versus) = against / compared to', pointEs: 'vs. = contra / versus' },
          { point: 'et al. (et alii) = and others (people)', pointEs: 'et al. = y otros (personas)' },
          { point: 'N.B. (nota bene) = note well / important', pointEs: 'N.B. = nota importante' }
        ]
      },
      {
        section: 'Common English Abbreviations',
        sectionEs: 'Abreviaciones Comunes en Inglés',
        points: [
          { point: 'approx. = approximately', pointEs: 'aprox. = aproximadamente' },
          { point: 'dept. = department', pointEs: 'depto. = departamento' },
          { point: 'no. = number', pointEs: 'no. = número' },
          { point: 'p. / pp. = page / pages', pointEs: 'pág. / págs. = página / páginas' },
          { point: 'vol. = volume', pointEs: 'vol. = volumen' },
          { point: 'c. / ca. = circa (approximately, for dates)', pointEs: 'c. = circa (aproximadamente, para fechas)' }
        ]
      },
      {
        section: 'Email/Business Abbreviations',
        sectionEs: 'Abreviaciones de Email/Negocios',
        points: [
          { point: 'ASAP = As Soon As Possible', pointEs: 'ASAP = Lo antes posible' },
          { point: 'FYI = For Your Information', pointEs: 'FYI = Para tu información' },
          { point: 'TBD = To Be Determined', pointEs: 'TBD = Por determinar' },
          { point: 'TBC = To Be Confirmed', pointEs: 'TBC = Por confirmar' },
          { point: 'N/A = Not Applicable', pointEs: 'N/A = No aplica' },
          { point: 'Re: = Regarding / In reference to', pointEs: 'Re: = Con respecto a' },
          { point: 'CC = Carbon Copy', pointEs: 'CC = Con copia a' },
          { point: 'BCC = Blind Carbon Copy', pointEs: 'BCC = Con copia oculta a' }
        ]
      },
      {
        section: 'Academic Abbreviations',
        sectionEs: 'Abreviaciones Académicas',
        points: [
          { point: 'BA = Bachelor of Arts', pointEs: 'BA = Licenciatura en Artes' },
          { point: 'BS/BSc = Bachelor of Science', pointEs: 'BS = Licenciatura en Ciencias' },
          { point: 'MA = Master of Arts', pointEs: 'MA = Maestría en Artes' },
          { point: 'PhD = Doctor of Philosophy', pointEs: 'PhD = Doctorado' },
          { point: 'Prof. = Professor', pointEs: 'Prof. = Profesor' },
          { point: 'Dr. = Doctor', pointEs: 'Dr. = Doctor' }
        ]
      }
    ]
  }
];

// Helper functions
export const getWritingByCategory = (category: WritingTopic['category']): WritingTopic[] => {
  return writingSkills.filter(w => w.category === category);
};

export const getWritingByLevel = (level: number): WritingTopic[] => {
  return writingSkills.filter(w => w.level <= level);
};

export default writingSkills;
