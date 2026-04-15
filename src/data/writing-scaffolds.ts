// Writing Scaffolds - Progressive writing tasks by CEFR level
// Plantillas de escritura progresivas por nivel CEFR
// Each level provides structured templates, models, and self-assessment checklists

export interface WritingScaffold {
  id: string;
  title: string;
  titleEs: string;
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  genre: 'form' | 'message' | 'email' | 'description' | 'narrative' | 'opinion' | 'essay' | 'report' | 'review' | 'letter';
  objective: string;
  objectiveEs: string;
  modelText: {
    text: string;
    annotations: { highlight: string; note: string; noteEs: string }[];
  };
  template: {
    section: string;
    sectionEs: string;
    guidance: string;
    guidanceEs: string;
    usefulPhrases: string[];
    minWords?: number;
  }[];
  checklist: {
    item: string;
    itemEs: string;
    category: 'content' | 'grammar' | 'vocabulary' | 'organization' | 'register';
  }[];
  commonMistakes: {
    wrong: string;
    correct: string;
    tip: string;
    tipEs: string;
  }[];
}

export const writingScaffolds: WritingScaffold[] = [
  // === A1: FILLING IN FORMS & SHORT MESSAGES ===
  {
    id: 'ws-a1-form',
    title: 'Filling in a Registration Form',
    titleEs: 'Rellenar un formulario de registro',
    level: 1,
    genre: 'form',
    objective: 'Fill in personal information accurately on forms (name, address, nationality, etc.)',
    objectiveEs: 'Completar información personal correctamente en formularios (nombre, dirección, nacionalidad, etc.)',
    modelText: {
      text: 'First Name: María\nLast Name: García López\nDate of Birth: 15/03/1995\nNationality: Spanish\nEmail: maria.garcia@email.com\nPhone: +34 612 345 678\nAddress: 25 Oak Street, Apartment 3B, London, UK\nOccupation: Software Engineer',
      annotations: [
        { highlight: 'García López', note: 'Full surname — include both if you have two', noteEs: 'Apellido completo — incluye ambos si tienes dos' },
        { highlight: '15/03/1995', note: 'UK: DD/MM/YYYY | US: MM/DD/YYYY', noteEs: 'UK: DD/MM/AAAA | EEUU: MM/DD/AAAA' },
        { highlight: 'Spanish', note: 'Nationalities are capitalized in English', noteEs: 'Las nacionalidades se escriben con mayúscula en inglés' },
      ]
    },
    template: [
      { section: 'Personal Details', sectionEs: 'Datos Personales', guidance: 'Write your name exactly as it appears on your passport', guidanceEs: 'Escribe tu nombre exactamente como aparece en tu pasaporte', usefulPhrases: ['First Name / Given Name', 'Last Name / Surname / Family Name', 'Middle Name'] },
      { section: 'Contact Information', sectionEs: 'Información de Contacto', guidance: 'Include country code for phone numbers', guidanceEs: 'Incluye código de país para números de teléfono', usefulPhrases: ['Email address', 'Phone number', 'Home address'] },
    ],
    checklist: [
      { item: 'Name spelled correctly', itemEs: 'Nombre escrito correctamente', category: 'content' },
      { item: 'Date format matches the country\'s standard', itemEs: 'Formato de fecha coincide con el estándar del país', category: 'content' },
      { item: 'Nationality is capitalized', itemEs: 'Nacionalidad con mayúscula', category: 'grammar' },
    ],
    commonMistakes: [
      { wrong: 'Nationality: spanish', correct: 'Nationality: Spanish', tip: 'Always capitalize nationalities and languages in English', tipEs: 'Siempre escribe nacionalidades e idiomas con mayúscula en inglés' },
      { wrong: 'Date of Birth: March 15 1995', correct: 'Date of Birth: 15/03/1995 or March 15, 1995', tip: 'Use consistent date formatting with proper punctuation', tipEs: 'Usa formato de fecha consistente con puntuación adecuada' },
    ]
  },
  {
    id: 'ws-a1-message',
    title: 'Short Text Messages',
    titleEs: 'Mensajes de texto cortos',
    level: 1,
    genre: 'message',
    objective: 'Write short messages to friends: plans, requests, information',
    objectiveEs: 'Escribir mensajes cortos a amigos: planes, solicitudes, información',
    modelText: {
      text: 'Hi Anna! Are you free on Saturday? I want to go to the new Italian restaurant near the park. We can meet at 7 PM. Let me know! 😊 María',
      annotations: [
        { highlight: 'Hi Anna!', note: 'Informal greeting for friends', noteEs: 'Saludo informal para amigos' },
        { highlight: 'Are you free on Saturday?', note: 'Asking about availability', noteEs: 'Preguntando disponibilidad' },
        { highlight: 'Let me know!', note: 'Common way to ask for a reply', noteEs: 'Forma común de pedir respuesta' },
      ]
    },
    template: [
      { section: 'Greeting', sectionEs: 'Saludo', guidance: 'Use Hi/Hey + name for friends', guidanceEs: 'Usa Hi/Hey + nombre para amigos', usefulPhrases: ['Hi!', 'Hey!', 'Hello!'] },
      { section: 'Main message', sectionEs: 'Mensaje principal', guidance: 'Be clear and direct. State your plan/question.', guidanceEs: 'Sé claro y directo. Di tu plan/pregunta.', usefulPhrases: ['Are you free on...?', 'Do you want to...?', 'Can you...?', 'I want to...'], minWords: 15 },
      { section: 'Closing', sectionEs: 'Cierre', guidance: 'End with a friendly phrase', guidanceEs: 'Termina con una frase amistosa', usefulPhrases: ['Let me know!', 'See you soon!', 'Talk later!'] },
    ],
    checklist: [
      { item: 'Message is clear and easy to understand', itemEs: 'El mensaje es claro y fácil de entender', category: 'content' },
      { item: 'Time and place are specific', itemEs: 'Hora y lugar son específicos', category: 'content' },
      { item: 'Tone is appropriate (informal for friends)', itemEs: 'Tono es apropiado (informal para amigos)', category: 'register' },
    ],
    commonMistakes: [
      { wrong: 'I want that we go to restaurant', correct: 'I want to go to the restaurant', tip: 'Use "want to + verb", not "want that"', tipEs: 'Usa "want to + verbo", no "want that"' },
    ]
  },
  // === B1: SEMI-FORMAL EMAILS ===
  {
    id: 'ws-b1-email',
    title: 'Semi-Formal Email',
    titleEs: 'Email semi-formal',
    level: 2,
    genre: 'email',
    objective: 'Write semi-formal emails: complaints, inquiries, requests',
    objectiveEs: 'Escribir emails semi-formales: quejas, consultas, solicitudes',
    modelText: {
      text: 'Subject: Inquiry about English courses\n\nDear Sir/Madam,\n\nI am writing to inquire about the English courses available at your language school.\n\nI am particularly interested in intensive courses that run in July. Could you please send me information about schedules, prices, and class sizes?\n\nI currently have a B1 level and would like to reach B2 by September. Is this realistic with your program?\n\nI look forward to hearing from you.\n\nBest regards,\nMaría García',
      annotations: [
        { highlight: 'Dear Sir/Madam', note: 'When you don\'t know the person\'s name', noteEs: 'Cuando no conoces el nombre de la persona' },
        { highlight: 'I am writing to inquire about', note: 'Standard opening for inquiries', noteEs: 'Apertura estándar para consultas' },
        { highlight: 'Could you please', note: 'Polite request formula', noteEs: 'Fórmula de petición educada' },
        { highlight: 'I look forward to hearing from you', note: 'Standard professional closing', noteEs: 'Cierre profesional estándar' },
        { highlight: 'Best regards', note: 'Semi-formal sign-off', noteEs: 'Despedida semi-formal' },
      ]
    },
    template: [
      { section: 'Subject line', sectionEs: 'Línea de asunto', guidance: 'Clear and specific (5-8 words)', guidanceEs: 'Clara y específica (5-8 palabras)', usefulPhrases: ['Inquiry about...', 'Request for...', 'Complaint regarding...'] },
      { section: 'Greeting', sectionEs: 'Saludo', guidance: 'Use Dear + name/title or Sir/Madam', guidanceEs: 'Usa Dear + nombre/título o Sir/Madam', usefulPhrases: ['Dear Mr./Ms. [name]', 'Dear Sir/Madam', 'Dear Hiring Manager'] },
      { section: 'Opening paragraph', sectionEs: 'Párrafo de apertura', guidance: 'State your purpose clearly in the first sentence', guidanceEs: 'Indica tu propósito claramente en la primera frase', usefulPhrases: ['I am writing to inquire about...', 'I am writing to request...', 'I am writing to complain about...'], minWords: 15 },
      { section: 'Body', sectionEs: 'Cuerpo', guidance: 'Give details. One idea per paragraph.', guidanceEs: 'Da detalles. Una idea por párrafo.', usefulPhrases: ['I would be grateful if...', 'Could you please...', 'I would like to know...'], minWords: 30 },
      { section: 'Closing', sectionEs: 'Cierre', guidance: 'End with a forward-looking phrase + sign-off', guidanceEs: 'Termina con una frase hacia el futuro + despedida', usefulPhrases: ['I look forward to hearing from you.', 'Thank you for your time.', 'Best regards, / Kind regards, / Yours faithfully,'] },
    ],
    checklist: [
      { item: 'Subject line is clear and informative', itemEs: 'La línea de asunto es clara e informativa', category: 'organization' },
      { item: 'Purpose stated in first paragraph', itemEs: 'Propósito indicado en el primer párrafo', category: 'organization' },
      { item: 'Polite and professional tone', itemEs: 'Tono educado y profesional', category: 'register' },
      { item: 'No contractions (don\'t → do not) in formal emails', itemEs: 'Sin contracciones (don\'t → do not) en emails formales', category: 'register' },
      { item: 'Correct greeting and sign-off match', itemEs: 'Saludo y despedida correctos coinciden', category: 'organization' },
      { item: 'Request is clear and includes specifics', itemEs: 'La solicitud es clara e incluye detalles', category: 'content' },
    ],
    commonMistakes: [
      { wrong: 'Dear Mr. García, ... Yours faithfully', correct: 'Dear Mr. García, ... Yours sincerely', tip: '"Yours faithfully" = when you DON\'T know the name. "Yours sincerely" = when you DO know the name.', tipEs: '"Yours faithfully" = cuando NO conoces el nombre. "Yours sincerely" = cuando SÍ conoces el nombre.' },
      { wrong: 'I am writing for ask about...', correct: 'I am writing to ask/inquire about...', tip: 'Use "to + infinitive" for purpose, not "for + infinitive"', tipEs: 'Usa "to + infinitivo" para propósito, no "for + infinitivo"' },
    ]
  },
  // === B2: OPINION ESSAY ===
  {
    id: 'ws-b2-opinion',
    title: 'Opinion Essay',
    titleEs: 'Ensayo de opinión',
    level: 3,
    genre: 'opinion',
    objective: 'Write a structured opinion essay with arguments and examples',
    objectiveEs: 'Escribir un ensayo de opinión estructurado con argumentos y ejemplos',
    modelText: {
      text: 'Should social media be banned for children under 16?\n\nIn recent years, social media has become an integral part of young people\'s lives. While some argue that it helps children develop digital skills, I firmly believe that children under 16 should not have access to social media platforms.\n\nFirst and foremost, social media has been linked to increased anxiety and depression among teenagers. According to recent studies, young people who spend more than three hours daily on social media are twice as likely to experience mental health issues.\n\nFurthermore, social media exposes children to cyberbullying, which can have devastating consequences. Unlike traditional bullying, online harassment follows children home and can be relentless.\n\nAdmittedly, some might argue that social media helps children stay connected with friends. However, this benefit does not outweigh the significant risks to their mental wellbeing.\n\nIn conclusion, while social media offers some advantages, the potential harm to children\'s mental health justifies restricting access until they are mature enough to handle it responsibly.',
      annotations: [
        { highlight: 'I firmly believe that', note: 'Strong opinion statement in the introduction', noteEs: 'Declaración de opinión firme en la introducción' },
        { highlight: 'First and foremost', note: 'Strong transition for first argument', noteEs: 'Transición fuerte para primer argumento' },
        { highlight: 'Furthermore', note: 'Adding another argument', noteEs: 'Añadiendo otro argumento' },
        { highlight: 'Admittedly', note: 'Acknowledging the opposing view (concession)', noteEs: 'Reconociendo la opinión contraria (concesión)' },
        { highlight: 'However, this benefit does not outweigh', note: 'Refuting the counterargument', noteEs: 'Refutando el contraargumento' },
        { highlight: 'In conclusion', note: 'Standard essay closing', noteEs: 'Cierre estándar de ensayo' },
      ]
    },
    template: [
      { section: 'Introduction', sectionEs: 'Introducción', guidance: 'Hook + context + clear thesis statement (your opinion)', guidanceEs: 'Gancho + contexto + declaración de tesis clara (tu opinión)', usefulPhrases: ['In recent years...', 'It is often argued that...', 'I firmly/strongly believe that...', 'In my opinion...'], minWords: 40 },
      { section: 'Body Paragraph 1', sectionEs: 'Párrafo de desarrollo 1', guidance: 'Topic sentence + supporting evidence + example', guidanceEs: 'Oración temática + evidencia de apoyo + ejemplo', usefulPhrases: ['First and foremost...', 'One of the main reasons is...', 'According to...', 'For example/instance...'], minWords: 50 },
      { section: 'Body Paragraph 2', sectionEs: 'Párrafo de desarrollo 2', guidance: 'Second argument + evidence + example', guidanceEs: 'Segundo argumento + evidencia + ejemplo', usefulPhrases: ['Furthermore...', 'In addition...', 'Moreover...', 'Another key point is...'], minWords: 50 },
      { section: 'Counterargument + Refutation', sectionEs: 'Contraargumento + Refutación', guidance: 'Acknowledge opposing view, then explain why your position is stronger', guidanceEs: 'Reconoce la opinión opuesta, luego explica por qué tu posición es más fuerte', usefulPhrases: ['Admittedly...', 'Some might argue that...', 'However...', 'Nevertheless, this does not outweigh...'], minWords: 30 },
      { section: 'Conclusion', sectionEs: 'Conclusión', guidance: 'Restate your opinion + summarize key points + final thought', guidanceEs: 'Reafirma tu opinión + resume puntos clave + pensamiento final', usefulPhrases: ['In conclusion...', 'To sum up...', 'All things considered...', 'Taking everything into account...'], minWords: 30 },
    ],
    checklist: [
      { item: 'Clear thesis statement in introduction', itemEs: 'Declaración de tesis clara en la introducción', category: 'content' },
      { item: 'Each body paragraph has a topic sentence', itemEs: 'Cada párrafo tiene oración temática', category: 'organization' },
      { item: 'Arguments supported with evidence/examples', itemEs: 'Argumentos apoyados con evidencia/ejemplos', category: 'content' },
      { item: 'Counterargument acknowledged and refuted', itemEs: 'Contraargumento reconocido y refutado', category: 'content' },
      { item: 'Linking words used to connect ideas', itemEs: 'Conectores usados para enlazar ideas', category: 'organization' },
      { item: 'Formal register maintained throughout', itemEs: 'Registro formal mantenido en todo el texto', category: 'register' },
      { item: 'No first person in arguments (use evidence instead)', itemEs: 'Evitar primera persona en argumentos (usar evidencia)', category: 'register' },
      { item: 'Varied vocabulary (no word repetition)', itemEs: 'Vocabulario variado (sin repetición de palabras)', category: 'vocabulary' },
    ],
    commonMistakes: [
      { wrong: 'I think social media is bad because it\'s bad for children.', correct: 'Social media poses significant risks to children\'s mental health because...', tip: 'Avoid circular reasoning. Give specific evidence.', tipEs: 'Evita razonamiento circular. Da evidencia específica.' },
      { wrong: 'In conclusion, social media is bad.', correct: 'In conclusion, while social media offers connectivity, the risks to children\'s wellbeing outweigh the benefits.', tip: 'Don\'t just repeat your opinion — synthesize your arguments in the conclusion.', tipEs: 'No repitas solo tu opinión — sintetiza tus argumentos en la conclusión.' },
    ]
  },
  // === B2: ARGUMENTATIVE ESSAY (FOR & AGAINST) ===
  {
    id: 'ws-b2-essay',
    title: 'Argumentative Essay (For & Against)',
    titleEs: 'Ensayo argumentativo (A favor y en contra)',
    level: 4,
    genre: 'essay',
    objective: 'Write a balanced argumentative essay analyzing both sides before drawing a conclusion',
    objectiveEs: 'Escribir un ensayo argumentativo equilibrado analizando ambos lados antes de sacar una conclusión',
    modelText: {
      text: 'Remote Work: The Future of Employment or a Passing Trend?\n\nThe COVID-19 pandemic accelerated the adoption of remote work globally, fundamentally altering how organizations operate. This essay examines whether remote work represents a sustainable model for the future or merely a temporary response to extraordinary circumstances.\n\nProponents of remote work point to substantial evidence of increased productivity. A Stanford study found that remote workers were 13% more productive, attributing this to fewer distractions and eliminating commute time. Moreover, companies benefit from reduced overhead costs and access to a global talent pool unconstrained by geographical boundaries.\n\nConversely, critics raise compelling concerns about the erosion of workplace culture and collaboration. Spontaneous interactions — the "water-cooler conversations" that often spark innovation — are significantly diminished in virtual environments. Furthermore, the blurring of work-life boundaries can lead to burnout, with remote workers reporting longer hours and difficulty disconnecting.\n\nUltimately, the most viable approach appears to be a hybrid model that combines the flexibility of remote work with the collaborative benefits of in-person interaction. Organizations that adopt such a model can harness the advantages of both approaches while mitigating their respective drawbacks.\n\nIn light of the evidence presented, it is reasonable to conclude that remote work, in some form, is here to stay. However, its implementation must be thoughtful and adaptive, recognizing that no single model suits all industries or individuals.',
      annotations: [
        { highlight: 'fundamentally altering', note: 'Strong academic vocabulary', noteEs: 'Vocabulario académico fuerte' },
        { highlight: 'Proponents of', note: 'Formal way to introduce supporters', noteEs: 'Forma formal de introducir defensores' },
        { highlight: 'Conversely', note: 'Signaling the opposing argument', noteEs: 'Señalando el argumento opuesto' },
        { highlight: 'Ultimately', note: 'Moving toward the conclusion/synthesis', noteEs: 'Moviendo hacia la conclusión/síntesis' },
        { highlight: 'In light of the evidence presented', note: 'Formal conclusion opener', noteEs: 'Apertura formal de conclusión' },
      ]
    },
    template: [
      { section: 'Introduction', sectionEs: 'Introducción', guidance: 'Context + research question or thesis. Do NOT state your opinion yet if writing balanced essay.', guidanceEs: 'Contexto + pregunta de investigación o tesis. NO declares tu opinión aún si escribes ensayo equilibrado.', usefulPhrases: ['This essay examines...', 'The question of whether... has generated considerable debate.', 'In recent decades, the issue of... has come to the fore.'], minWords: 50 },
      { section: 'Arguments FOR', sectionEs: 'Argumentos A FAVOR', guidance: 'Present 2-3 strong arguments with evidence, data, or expert opinion', guidanceEs: 'Presenta 2-3 argumentos fuertes con evidencia, datos u opinión experta', usefulPhrases: ['Proponents argue that...', 'Research suggests that...', 'A compelling argument in favour is...', 'This is further supported by...'], minWords: 80 },
      { section: 'Arguments AGAINST', sectionEs: 'Argumentos EN CONTRA', guidance: 'Present 2-3 counterarguments equally strongly', guidanceEs: 'Presenta 2-3 contraargumentos con igual fuerza', usefulPhrases: ['Conversely...', 'Critics contend that...', 'However, this view overlooks...', 'A significant drawback is...'], minWords: 80 },
      { section: 'Synthesis / Your Position', sectionEs: 'Síntesis / Tu posición', guidance: 'Weigh both sides and present your informed position or a nuanced conclusion', guidanceEs: 'Sopesa ambos lados y presenta tu posición informada o una conclusión matizada', usefulPhrases: ['Ultimately...', 'On balance...', 'The most viable approach...', 'While both perspectives have merit...'], minWords: 40 },
      { section: 'Conclusion', sectionEs: 'Conclusión', guidance: 'Final assessment + future outlook or recommendation', guidanceEs: 'Evaluación final + perspectiva futura o recomendación', usefulPhrases: ['In light of the evidence...', 'It is reasonable to conclude that...', 'Looking ahead...', 'The key takeaway is...'], minWords: 40 },
    ],
    checklist: [
      { item: 'Both sides presented fairly and with evidence', itemEs: 'Ambos lados presentados justamente y con evidencia', category: 'content' },
      { item: 'Academic tone maintained (no contractions, no "I think")', itemEs: 'Tono académico mantenido (sin contracciones, sin "I think")', category: 'register' },
      { item: 'Sophisticated linking devices used', itemEs: 'Conectores sofisticados utilizados', category: 'vocabulary' },
      { item: 'Hedging language where appropriate (might, could, tends to)', itemEs: 'Lenguaje moderador donde sea apropiado (might, could, tends to)', category: 'vocabulary' },
      { item: 'Clear paragraph structure (topic → support → transition)', itemEs: 'Estructura de párrafo clara (tema → apoyo → transición)', category: 'organization' },
      { item: 'Conclusion synthesizes rather than just summarizes', itemEs: 'La conclusión sintetiza en lugar de solo resumir', category: 'content' },
      { item: 'Sources/evidence referenced (even if hypothetical)', itemEs: 'Fuentes/evidencia referenciadas (incluso si hipotéticas)', category: 'content' },
      { item: 'No grammatical errors', itemEs: 'Sin errores gramaticales', category: 'grammar' },
    ],
    commonMistakes: [
      { wrong: 'In my opinion, remote work is good.', correct: 'The evidence suggests that remote work offers substantial benefits.', tip: 'In academic essays, use evidence-based language rather than personal opinion markers.', tipEs: 'En ensayos académicos, usa lenguaje basado en evidencia en lugar de marcadores de opinión personal.' },
      { wrong: 'On the other hand, remote work is bad.', correct: 'Conversely, remote work presents significant challenges in terms of...', tip: 'Avoid simplistic "good/bad" judgments. Use nuanced, specific language.', tipEs: 'Evita juicios simplistas "bueno/malo". Usa lenguaje matizado y específico.' },
    ]
  },
  // === C1 (Level 5): ACADEMIC ARGUMENTATIVE ESSAY ===
  {
    id: 'ws-c1-essay',
    title: 'Academic Argumentative Essay',
    titleEs: 'Ensayo argumentativo académico',
    level: 5,
    genre: 'essay',
    objective: 'Write a well-structured academic argumentative essay with thesis, evidence, counterargument, and rebuttal',
    objectiveEs: 'Escribir un ensayo argumentativo académico bien estructurado con tesis, evidencia, contraargumento y refutación',
    modelText: {
      text: 'The Role of Technology in Education: A Double-Edged Sword\n\nIt is widely acknowledged that technology has transformed educational practices in the 21st century. This essay argues that while digital tools offer unprecedented access to learning resources, their uncritical adoption may undermine deep learning and critical thinking.\n\nA compelling argument can be made that technology enhances educational outcomes. Interactive platforms enable personalised learning, and vast online repositories provide students with instant access to global knowledge. Research from leading universities indicates that blended learning approaches can improve retention rates by up to 40%.\n\nNevertheless, critics contend that screen-based learning fosters superficial engagement. The constant availability of information may discourage memorisation and analytical depth. Furthermore, the digital divide exacerbates inequality, leaving disadvantaged students behind.\n\nIn light of these considerations, educators must strike a balance: leveraging technology where it adds value whilst preserving space for reflection and direct human interaction. Policymakers should invest in teacher training and equitable access to ensure technology serves rather than dominates the learning process.',
      annotations: [
        { highlight: 'It is widely acknowledged that', note: 'Academic hedging — presents claim as consensus', noteEs: 'Moderación académica — presenta la afirmación como consenso' },
        { highlight: 'A compelling argument can be made', note: 'Formal way to introduce your argument', noteEs: 'Forma formal de introducir tu argumento' },
        { highlight: 'Nevertheless, critics contend', note: 'Introducing counterargument with formal register', noteEs: 'Introduciendo contraargumento con registro formal' },
        { highlight: 'In light of these considerations', note: 'Academic conclusion opener', noteEs: 'Apertura académica de conclusión' },
      ]
    },
    template: [
      { section: 'Introduction', sectionEs: 'Introducción', guidance: 'Hook + context + clear thesis statement', guidanceEs: 'Gancho + contexto + declaración de tesis clara', usefulPhrases: ['It is widely acknowledged that...', 'This essay argues that...', 'The question of whether... merits careful examination.'], minWords: 40 },
      { section: 'Body 1 — Argument + Evidence', sectionEs: 'Cuerpo 1 — Argumento + Evidencia', guidance: 'Topic sentence + supporting evidence + data or examples', guidanceEs: 'Oración temática + evidencia de apoyo + datos o ejemplos', usefulPhrases: ['A compelling argument can be made...', 'Research indicates that...', 'Evidence suggests that...', 'Furthermore...'], minWords: 50 },
      { section: 'Body 2 — Counterargument + Rebuttal', sectionEs: 'Cuerpo 2 — Contraargumento + Refutación', guidance: 'Acknowledge opposing view, then refute with evidence', guidanceEs: 'Reconoce la opinión opuesta, luego refuta con evidencia', usefulPhrases: ['Nevertheless, critics contend...', 'It could be argued that...', 'However, this view overlooks...', 'A more nuanced perspective would suggest...'], minWords: 50 },
      { section: 'Conclusion', sectionEs: 'Conclusión', guidance: 'Summary of key points + call to action or recommendation', guidanceEs: 'Resumen de puntos clave + llamada a la acción o recomendación', usefulPhrases: ['In light of these considerations...', 'It is therefore essential that...', 'Policymakers should...', 'The key takeaway is...'], minWords: 40 },
    ],
    checklist: [
      { item: 'Register consistency maintained throughout', itemEs: 'Consistencia de registro mantenida en todo el texto', category: 'register' },
      { item: 'Hedging used appropriately (might, could, tends to, it appears)', itemEs: 'Moderación usada apropiadamente (might, could, tends to, it appears)', category: 'vocabulary' },
      { item: 'Cohesive devices link paragraphs and ideas', itemEs: 'Conectores cohesivos enlazan párrafos e ideas', category: 'organization' },
      { item: 'Each paragraph has a clear topic sentence', itemEs: 'Cada párrafo tiene oración temática clara', category: 'organization' },
    ],
    commonMistakes: [
      { wrong: 'Mixing formal and informal register (e.g. "stuff", "gonna")', correct: 'Maintain formal academic register throughout', tip: 'Avoid colloquial expressions in academic writing', tipEs: 'Evita expresiones coloquiales en escritura académica' },
      { wrong: 'Overusing "I think" or "In my opinion"', correct: 'Use evidence-based phrasing: "Evidence suggests...", "It appears that..."', tip: 'Academic writing favours impersonal, evidence-based claims', tipEs: 'La escritura académica favorece afirmaciones impersonales basadas en evidencia' },
      { wrong: 'Weak or missing topic sentences', correct: 'Each body paragraph should open with a clear, arguable claim', tip: 'Topic sentences guide the reader and structure your argument', tipEs: 'Las oraciones temáticas guían al lector y estructuran tu argumento' },
    ]
  },
  // === C1 (Level 5): BUSINESS ANALYSIS REPORT ===
  {
    id: 'ws-c1-report',
    title: 'Business Analysis Report',
    titleEs: 'Informe de análisis empresarial',
    level: 5,
    genre: 'report',
    objective: 'Write an executive-summary style business report with findings, analysis, and recommendations',
    objectiveEs: 'Escribir un informe empresarial estilo resumen ejecutivo con hallazgos, análisis y recomendaciones',
    modelText: {
      text: 'Executive Summary: Q3 Market Trends Analysis\n\nThis report examines the key market trends observed during the third quarter of 2024 and their implications for strategic planning.\n\nThe data indicates a notable shift towards sustainable products, with 67% of consumers expressing willingness to pay a premium for eco-friendly alternatives. Furthermore, digital adoption has accelerated across all demographics, particularly among the 55+ age group, where online engagement increased by 23% year-on-year.\n\nAnalysis of competitor activity reveals that three major players have launched sustainability-focused product lines. This suggests that market differentiation will increasingly depend on credible environmental credentials rather than price alone.\n\nIt is recommended that the organisation prioritise investment in sustainable supply chains and enhance digital touchpoints for older demographics. A pilot programme should be initiated by Q1 2025 to test consumer response before full-scale rollout.',
      annotations: [
        { highlight: 'This report examines', note: 'Standard report opening', noteEs: 'Apertura estándar de informe' },
        { highlight: 'The data indicates', note: 'Presenting findings with evidence', noteEs: 'Presentando hallazgos con evidencia' },
        { highlight: 'It is recommended that', note: 'Formal recommendation formula', noteEs: 'Fórmula formal de recomendación' },
      ]
    },
    template: [
      { section: 'Executive Summary', sectionEs: 'Resumen Ejecutivo', guidance: 'Brief overview of the report\'s purpose and scope', guidanceEs: 'Resumen breve del propósito y alcance del informe', usefulPhrases: ['This report examines...', 'The purpose of this report is to...', 'The following analysis addresses...'], minWords: 30 },
      { section: 'Findings', sectionEs: 'Hallazgos', guidance: 'Present key data and observations objectively', guidanceEs: 'Presenta datos clave y observaciones de forma objetiva', usefulPhrases: ['The data indicates...', 'Findings suggest that...', 'It was observed that...', 'Surveys reveal that...'], minWords: 50 },
      { section: 'Analysis', sectionEs: 'Análisis', guidance: 'Interpret the findings and explain their significance', guidanceEs: 'Interpreta los hallazgos y explica su importancia', usefulPhrases: ['Analysis reveals...', 'This suggests that...', 'The implications are...', 'In light of these findings...'], minWords: 40 },
      { section: 'Recommendations', sectionEs: 'Recomendaciones', guidance: 'Clear, actionable recommendations based on the analysis', guidanceEs: 'Recomendaciones claras y accionables basadas en el análisis', usefulPhrases: ['It is recommended that...', 'The organisation should...', 'Consideration should be given to...', 'A pilot programme is advised...'], minWords: 40 },
    ],
    checklist: [
      { item: 'Formal register maintained throughout', itemEs: 'Registro formal mantenido en todo el texto', category: 'register' },
      { item: 'Data and findings presented clearly', itemEs: 'Datos y hallazgos presentados claramente', category: 'content' },
      { item: 'Passive voice used where appropriate for objectivity', itemEs: 'Voz pasiva usada donde sea apropiado para objetividad', category: 'grammar' },
      { item: 'Recommendations are specific and actionable', itemEs: 'Las recomendaciones son específicas y accionables', category: 'content' },
    ],
    commonMistakes: [
      { wrong: 'Being too colloquial (e.g. "pretty much", "a lot of")', correct: 'Use formal equivalents: "considerably", "a significant proportion"', tip: 'Business reports require professional, precise language', tipEs: 'Los informes empresariales requieren lenguaje profesional y preciso' },
      { wrong: 'Failing to support claims with data', correct: 'Every claim should be backed by evidence or figures', tip: 'Reports must be evidence-based; avoid unsupported assertions', tipEs: 'Los informes deben basarse en evidencia; evita afirmaciones sin respaldo' },
    ]
  },
  // === C2 (Level 6): CRITICAL REVIEW / ANALYSIS ===
  {
    id: 'ws-c2-critique',
    title: 'Critical Review / Analysis',
    titleEs: 'Reseña crítica / Análisis',
    level: 6,
    genre: 'review',
    objective: 'Write a balanced critical review evaluating strengths, limitations, and implications',
    objectiveEs: 'Escribir una reseña crítica equilibrada evaluando fortalezas, limitaciones e implicaciones',
    modelText: {
      text: 'A Critical Evaluation of Smith et al.\'s Methodology\n\nThe author posits that qualitative approaches yield richer insights than quantitative methods in studying workplace motivation. This review examines the methodological rigour of their 2023 study and assesses the validity of their conclusions.\n\nA significant strength of the research lies in its triangulation of data sources. Interviews, focus groups, and observational notes were employed, thereby enhancing the credibility of the findings. The sampling strategy, whilst purposive, appears well-justified given the exploratory nature of the inquiry.\n\nA significant limitation pertains to the generalisability of the results. The study draws upon a single organisation in the financial sector, which may limit the transferability of findings to other contexts. Furthermore, the absence of member checking raises questions regarding the interpretation of participant responses.\n\nNotwithstanding these merits and shortcomings, the study makes a valuable contribution to the field. The author\'s reflexive account of their positionality adds transparency. It is anticipated that future research will build upon these foundations by employing longitudinal designs and cross-sector comparisons.',
      annotations: [
        { highlight: 'The author posits', note: 'Formal way to introduce the author\'s claim', noteEs: 'Forma formal de introducir la afirmación del autor' },
        { highlight: 'A significant limitation pertains to', note: 'Academic phrasing for critique', noteEs: 'Fraseo académico para crítica' },
        { highlight: 'Notwithstanding these merits', note: 'Balanced evaluation — acknowledging both sides', noteEs: 'Evaluación equilibrada — reconociendo ambos lados' },
      ]
    },
    template: [
      { section: 'Overview', sectionEs: 'Visión general', guidance: 'Introduce the work and your evaluative focus', guidanceEs: 'Introduce la obra y tu enfoque evaluativo', usefulPhrases: ['The author posits...', 'This review examines...', 'The central thesis concerns...'], minWords: 40 },
      { section: 'Strengths', sectionEs: 'Fortalezas', guidance: 'Identify and explain the work\'s strengths with evidence', guidanceEs: 'Identifica y explica las fortalezas de la obra con evidencia', usefulPhrases: ['A significant strength lies in...', 'The approach is commendable in that...', 'Notably...'], minWords: 40 },
      { section: 'Limitations', sectionEs: 'Limitaciones', guidance: 'Critically assess weaknesses or gaps', guidanceEs: 'Evalúa críticamente debilidades o lagunas', usefulPhrases: ['A significant limitation pertains to...', 'It could be argued that...', 'The study would have benefited from...'], minWords: 40 },
      { section: 'Evaluation', sectionEs: 'Evaluación', guidance: 'Weigh strengths and limitations; offer balanced judgment', guidanceEs: 'Sopesa fortalezas y limitaciones; ofrece juicio equilibrado', usefulPhrases: ['Notwithstanding these merits...', 'On balance...', 'The contribution to the field is...'], minWords: 30 },
      { section: 'Implications', sectionEs: 'Implicaciones', guidance: 'Discuss implications for practice or future research', guidanceEs: 'Discute implicaciones para la práctica o investigación futura', usefulPhrases: ['It is anticipated that...', 'Future research might...', 'The findings suggest that...'], minWords: 30 },
    ],
    checklist: [
      { item: 'Academic register maintained throughout', itemEs: 'Registro académico mantenido en todo el texto', category: 'register' },
      { item: 'Balanced evaluation (strengths and limitations)', itemEs: 'Evaluación equilibrada (fortalezas y limitaciones)', category: 'content' },
      { item: 'Hedging used to qualify claims', itemEs: 'Moderación usada para matizar afirmaciones', category: 'vocabulary' },
      { item: 'Nominalisation used appropriately', itemEs: 'Nominalización usada apropiadamente', category: 'grammar' },
      { item: 'Discourse cohesion (linking ideas across sections)', itemEs: 'Cohesión discursiva (enlazando ideas entre secciones)', category: 'organization' },
    ],
    commonMistakes: [
      { wrong: 'Being overly assertive (lack of hedging)', correct: 'Use hedging: "may", "appears to", "it could be argued"', tip: 'Critical reviews require nuanced, qualified language', tipEs: 'Las reseñas críticas requieren lenguaje matizado y cualificado' },
      { wrong: 'Repetitive lexical choices', correct: 'Vary vocabulary: "limitation" / "drawback" / "shortcoming"', tip: 'Demonstrate lexical range at C2 level', tipEs: 'Demuestra amplitud léxica a nivel C2' },
      { wrong: 'Underdeveloped analysis', correct: 'Explain why something is a strength/limitation, not just state it', tip: 'Analysis requires justification and elaboration', tipEs: 'El análisis requiere justificación y elaboración' },
    ]
  },
  // === C2 (Level 6): FORMAL RESEARCH / BUSINESS PROPOSAL ===
  {
    id: 'ws-c2-proposal',
    title: 'Formal Research Proposal / Business Proposal',
    titleEs: 'Propuesta formal de investigación / Propuesta empresarial',
    level: 6,
    genre: 'letter',
    objective: 'Write a formal proposal with background, objectives, methodology, outcomes, and timeline',
    objectiveEs: 'Escribir una propuesta formal con contexto, objetivos, metodología, resultados esperados y cronograma',
    modelText: {
      text: 'Research Proposal Abstract: Digital Literacy in Adult Education\n\nThis proposal sets forth a research design to investigate the effectiveness of blended learning interventions in adult literacy programmes. The study is situated within the context of declining participation rates in traditional adult education and the growing demand for digital skills in the labour market.\n\nThe primary objective is to ascertain whether integrated digital components enhance learner engagement and outcomes when compared to conventional classroom-only delivery. A mixed-methods approach will be employed, comprising a randomised controlled trial and in-depth interviews with participants and facilitators.\n\nIt is anticipated that the findings will inform policy development in adult education and provide a replicable framework for curriculum design. The proposed timeline spans eighteen months, with data collection scheduled for months 4–10 and analysis for months 11–14. Dissemination of results is planned for month 16.',
      annotations: [
        { highlight: 'This proposal sets forth', note: 'Formal proposal opening', noteEs: 'Apertura formal de propuesta' },
        { highlight: 'The primary objective is to ascertain', note: 'Precise objective formulation', noteEs: 'Formulación precisa del objetivo' },
        { highlight: 'It is anticipated that', note: 'Hedged prediction for expected outcomes', noteEs: 'Predicción matizada para resultados esperados' },
      ]
    },
    template: [
      { section: 'Background / Context', sectionEs: 'Contexto / Antecedentes', guidance: 'Establish the rationale and situate the proposal', guidanceEs: 'Establece la justificación y sitúa la propuesta', usefulPhrases: ['This proposal sets forth...', 'The study is situated within...', 'In light of...'], minWords: 40 },
      { section: 'Objectives', sectionEs: 'Objetivos', guidance: 'State clear, specific, measurable objectives', guidanceEs: 'Indica objetivos claros, específicos y medibles', usefulPhrases: ['The primary objective is to ascertain...', 'This study aims to...', 'The key questions to be addressed are...'], minWords: 30 },
      { section: 'Methodology', sectionEs: 'Metodología', guidance: 'Describe the approach, design, and methods', guidanceEs: 'Describe el enfoque, diseño y métodos', usefulPhrases: ['A mixed-methods approach will be employed...', 'Data will be collected via...', 'The sample will comprise...'], minWords: 40 },
      { section: 'Expected Outcomes', sectionEs: 'Resultados esperados', guidance: 'Outline anticipated results and their significance', guidanceEs: 'Esboza resultados anticipados y su importancia', usefulPhrases: ['It is anticipated that...', 'The findings will inform...', 'It is expected that...'], minWords: 30 },
      { section: 'Timeline', sectionEs: 'Cronograma', guidance: 'Provide a clear schedule of activities', guidanceEs: 'Proporciona un calendario claro de actividades', usefulPhrases: ['The proposed timeline spans...', 'Data collection is scheduled for...', 'Dissemination is planned for...'], minWords: 25 },
    ],
    checklist: [
      { item: 'Frozen/formal register maintained', itemEs: 'Registro formal/congelado mantenido', category: 'register' },
      { item: 'Nominalised structures used appropriately', itemEs: 'Estructuras nominalizadas usadas apropiadamente', category: 'grammar' },
      { item: 'Hedging used for predictions and claims', itemEs: 'Moderación usada para predicciones y afirmaciones', category: 'vocabulary' },
      { item: 'Coherent argumentation throughout', itemEs: 'Argumentación coherente en todo el texto', category: 'organization' },
      { item: 'Precise, unambiguous objectives', itemEs: 'Objetivos precisos y no ambiguos', category: 'content' },
    ],
    commonMistakes: [
      { wrong: 'Register inconsistency (mixing formal and informal)', correct: 'Maintain frozen/formal register throughout', tip: 'Proposals require consistent professional tone', tipEs: 'Las propuestas requieren tono profesional consistente' },
      { wrong: 'Vague objectives (e.g. "to improve things")', correct: 'Use precise verbs: "to ascertain", "to evaluate", "to compare"', tip: 'Objectives must be specific and measurable', tipEs: 'Los objetivos deben ser específicos y medibles' },
      { wrong: 'Missing hedging in predictions', correct: 'Use "it is anticipated that", "it is expected that"', tip: 'Avoid overconfident claims about future outcomes', tipEs: 'Evita afirmaciones excesivamente seguras sobre resultados futuros' },
    ]
  },
];  // end of existing scaffolds

// ACT-5 fix: Writing scaffolds for levels 7 (B2+), 8 (C1), 9 (C2)
writingScaffolds.push(
  // === LEVEL 7: B2+ CRITICAL REVIEW ===
  {
    id: 'ws-b2-review',
    title: 'Writing a Critical Review (book / film / exhibition)',
    titleEs: 'Reseña crítica (libro / película / exposición)',
    level: 7,
    genre: 'review',
    objective: 'Write a balanced critical review (200-250 words) using hedging and evaluative language',
    objectiveEs: 'Escribir una reseña crítica equilibrada (200-250 palabras) usando moderación y lenguaje evaluativo',
    modelText: {
      text: 'The latest adaptation of "Pride and Prejudice" (2024, dir. Elara Obi) is, on the whole, a commendable achievement — though not without its flaws.\n\nThe film\'s greatest strength lies in its visual storytelling. The cinematography is stunning, capturing the claustrophobia of drawing rooms and the expanse of the countryside in equal measure. The lead performances are largely convincing, particularly Amara Joon as Elizabeth Bennet, who brings a contemporary assertiveness to the role without sacrificing period authenticity.\n\nHowever, the screenplay occasionally struggles to balance modernisation with fidelity to Austen\'s wit. Several of Darcy\'s more ambiguous moments are over-explained, removing the pleasure of inference for the viewer.\n\nOverall, this is a film worth watching, especially for newcomers to the story. More seasoned Austen devotees may find it somewhat reductive, but its visual ambition and strong central performance make it a worthwhile contribution to the genre.\n\nVerdict: 4/5',
      annotations: [
        { highlight: 'on the whole', note: 'Hedging: signals qualified praise', noteEs: 'Moderación: señala elogio matizado' },
        { highlight: 'largely convincing', note: 'Qualified adjective: avoids absolutes', noteEs: 'Adjetivo matizado: evita los absolutos' },
        { highlight: 'particularly...who brings', note: 'Specific praise with evidence', noteEs: 'Elogio específico con evidencia' },
        { highlight: 'However, the screenplay occasionally', note: 'Contrast: acknowledges weakness', noteEs: 'Contraste: reconoce debilidad' },
        { highlight: 'pleasure of inference', note: 'Sophisticated vocabulary for sophistication', noteEs: 'Vocabulario sofisticado para demostrar dominio' },
      ]
    },
    template: [
      { section: 'Hook + Overview', sectionEs: 'Gancho + Visión general', guidance: 'Open with a balanced thesis: qualified praise or qualified criticism', guidanceEs: 'Abre con una tesis equilibrada: elogio o crítica matizada', usefulPhrases: ['On the whole, this is...', '...is, for the most part,...', 'Despite its shortcomings,...', 'For all its ambition,...'], minWords: 25 },
      { section: 'Strengths', sectionEs: 'Puntos fuertes', guidance: 'Praise specific, concrete elements with evidence', guidanceEs: 'Elogia elementos específicos y concretos con evidencia', usefulPhrases: ['The greatest strength lies in...', 'Particularly effective is...', 'The standout feature is...', 'What works admirably is...'], minWords: 50 },
      { section: 'Weaknesses', sectionEs: 'Puntos débiles', guidance: 'Acknowledge flaws objectively, without dismissing the work', guidanceEs: 'Reconoce los defectos objetivamente, sin rechazar la obra', usefulPhrases: ['However, it falls short in...', 'One notable weakness is...', 'The film/book struggles to...', 'Less convincing is...'], minWords: 40 },
      { section: 'Recommendation + Verdict', sectionEs: 'Recomendación + Veredicto', guidance: 'Recommend or not, specifying the target audience', guidanceEs: 'Recomienda o no, especificando la audiencia objetivo', usefulPhrases: ['This is essential viewing for...', 'More suited to...', 'A worthwhile addition to...', 'Verdict: X/5'], minWords: 30 },
    ],
    checklist: [
      { item: 'Hedged language throughout (largely, somewhat, on the whole)', itemEs: 'Lenguaje moderado en todo el texto', category: 'vocabulary' },
      { item: 'Specific references to the work (not just vague praise)', itemEs: 'Referencias específicas a la obra (no solo elogio vago)', category: 'content' },
      { item: 'Balanced view: strengths AND weaknesses', itemEs: 'Vista equilibrada: fortalezas Y debilidades', category: 'organization' },
      { item: 'Evaluative adjectives at B2+ level', itemEs: 'Adjetivos evaluativos de nivel B2+', category: 'vocabulary' },
      { item: 'Appropriate semi-formal register', itemEs: 'Registro semiformal apropiado', category: 'register' },
    ],
    commonMistakes: [
      { wrong: 'It was very good. I liked it.', correct: 'It is a largely compelling piece, particularly in its...', tip: 'Use evaluative vocabulary, not just emotional reactions', tipEs: 'Usa vocabulario evaluativo, no solo reacciones emocionales' },
      { wrong: 'It was perfect! / It was terrible!', correct: 'Despite X, the overall effect is... / While X is impressive, Y falls short.', tip: 'Balance positive and negative points for credibility', tipEs: 'Equilibra puntos positivos y negativos para tener credibilidad' },
    ]
  },

  // === LEVEL 8: C1 FORMAL ANALYTICAL ESSAY ===
  {
    id: 'ws-c1-analytical',
    title: 'Analytical Essay: Discuss Both Views',
    titleEs: 'Ensayo analítico: Discute ambas visiones',
    level: 8,
    genre: 'essay',
    objective: 'Write a 280-320 word analytical essay with thesis, argument, counter-argument, and conclusion using complex syntax and C1 cohesive devices',
    objectiveEs: 'Escribir un ensayo analítico de 280-320 palabras con tesis, argumento, contraargumento y conclusión usando sintaxis compleja y dispositivos cohesivos C1',
    modelText: {
      text: 'The extent to which social media has benefited society is a matter of considerable debate. While proponents argue that it has democratised information and fostered global connectivity, critics contend that its negative effects — particularly on mental health and political discourse — outweigh these benefits.\n\nThose in favour of social media point to its unprecedented ability to connect individuals across geographical and cultural boundaries. Platforms such as X and Instagram have enabled marginalised communities to amplify their voices, fundamentally altering the dynamics of public discourse. Furthermore, businesses of all sizes have leveraged social media to reach global audiences at minimal cost.\n\nNevertheless, the drawbacks warrant serious consideration. A growing body of research links excessive social media use to elevated rates of anxiety and depression, particularly among adolescents. Moreover, the algorithmic promotion of sensationalist content has contributed to the proliferation of misinformation and the polarisation of public opinion.\n\nOn balance, it would appear that the benefits of social media are contingent upon how it is regulated and consumed. Provided it is used judiciously and governed by robust ethical frameworks, social media has the potential to be a force for good. However, without meaningful structural reform, the risks are likely to outweigh the rewards.',
      annotations: [
        { highlight: 'The extent to which...is a matter of considerable debate', note: 'C1 essay opener: nuanced framing', noteEs: 'Apertura de ensayo C1: encuadre matizado' },
        { highlight: 'While...critics contend', note: 'Contrast in the thesis sentence itself', noteEs: 'Contraste en la propia frase de tesis' },
        { highlight: 'a growing body of research', note: 'Academic hedging: distancing from personal opinion', noteEs: 'Moderación académica: distanciamiento de la opinión personal' },
        { highlight: 'On balance, it would appear that', note: 'Hedged conclusion: avoids overclaiming', noteEs: 'Conclusión moderada: evita afirmaciones excesivas' },
        { highlight: 'Provided it is used judiciously', note: 'Formal conditional (= if it is used wisely)', noteEs: 'Condicional formal (= si se usa sabiamente)' },
      ]
    },
    template: [
      { section: 'Introduction + Framing Thesis', sectionEs: 'Introducción + Tesis de encuadre', guidance: 'Present the issue and indicate both sides will be discussed', guidanceEs: 'Presenta el tema e indica que ambos lados serán discutidos', usefulPhrases: ['The extent to which... is a matter of debate.', 'While it is frequently argued that...', 'The question of whether... has generated significant discussion.'], minWords: 40 },
      { section: 'Argument FOR', sectionEs: 'Argumento A FAVOR', guidance: 'Present the strongest evidence for one side, with supporting examples', guidanceEs: 'Presenta la evidencia más sólida para un lado, con ejemplos de apoyo', usefulPhrases: ['Proponents argue that...', 'Those in favour contend that...', 'A key advantage is...', 'Furthermore,', 'In addition,'], minWords: 70 },
      { section: 'Counter-Argument', sectionEs: 'Contraargumento', guidance: 'Acknowledge and develop the opposing argument', guidanceEs: 'Reconoce y desarrolla el argumento contrario', usefulPhrases: ['Nevertheless,', 'Critics argue that...', 'However, this view overlooks...', 'A growing body of evidence suggests...'], minWords: 70 },
      { section: 'Hedged Conclusion', sectionEs: 'Conclusión moderada', guidance: 'Avoid taking a strong side; use conditional and hedging language', guidanceEs: 'Evita tomar partido fuerte; usa lenguaje condicional y moderado', usefulPhrases: ['On balance,', 'It would appear that...', 'Provided that...', 'Ultimately, the benefits are contingent upon...'], minWords: 50 },
    ],
    checklist: [
      { item: 'C1 cohesive devices used (nevertheless, furthermore, on balance)', itemEs: 'Dispositivos cohesivos C1 usados', category: 'organization' },
      { item: 'No first person (I think / In my opinion) in body paragraphs', itemEs: 'Sin primera persona en los párrafos del cuerpo', category: 'register' },
      { item: 'Both sides argued with equal depth', itemEs: 'Ambos lados argumentados con igual profundidad', category: 'content' },
      { item: 'Hedging in conclusion (it would appear, on balance)', itemEs: 'Moderación en la conclusión', category: 'vocabulary' },
      { item: 'Complex syntax: nominalisations, passives, relative clauses', itemEs: 'Sintaxis compleja: nominalizaciones, pasivas, oraciones de relativo', category: 'grammar' },
    ],
    commonMistakes: [
      { wrong: 'In my opinion, social media is bad.', correct: 'Critics argue that social media has a detrimental effect on...', tip: 'C1 essays use impersonal, distancing language in body paragraphs', tipEs: 'Los ensayos C1 usan lenguaje impersonal y distanciador en los párrafos del cuerpo' },
      { wrong: 'First, Second, Third, Finally', correct: 'Furthermore, / Moreover, / Nevertheless, / On balance,', tip: 'Use C1 cohesive devices, not mechanical transitional words', tipEs: 'Usa dispositivos cohesivos C1, no palabras de transición mecánicas' },
    ]
  },

  // === LEVEL 9: C2 ARGUMENTATIVE ESSAY WITH COUNTERPOINT ===
  {
    id: 'ws-c2-argument',
    title: 'C2 Argumentative Essay: Developing and Challenging a Thesis',
    titleEs: 'Ensayo argumentativo C2: Desarrollar y cuestionar una tesis',
    level: 9,
    genre: 'essay',
    objective: 'Write a sophisticated 350-word argumentative essay deploying C2-level discourse markers, nominalisation, hedging, and rhetorical variation',
    objectiveEs: 'Escribir un ensayo argumentativo sofisticado de 350 palabras usando marcadores de discurso C2, nominalización, moderación y variación retórica',
    modelText: {
      text: 'The proposition that artificial intelligence will render large swathes of the workforce redundant is, at first glance, compelling. The evidence for automating routine cognitive tasks is, after all, substantial. Yet an uncritical acceptance of this thesis risks obscuring a more nuanced reality.\n\nTo begin with, the conflation of automation with unemployment overlooks a historically consistent pattern: technological disruption invariably generates new categories of employment, even as it displaces existing ones. The mechanisation of agriculture did not, as some predicted, empty the labour market; rather, it liberated human capital for industrial and subsequently service-sector growth.\n\nFurthermore, the assumption that machines can replicate the full spectrum of human cognitive capacity is, at best, premature. Tasks requiring contextual empathy, ethical judgement, and creative synthesis remain decidedly resistant to algorithmic replication. The physician, the therapist, the architect — roles that demand not merely competence but wisdom — are, for the foreseeable future, irreducible to code.\n\nThat said, these arguments should not license complacency. The transition costs of technological disruption fall disproportionately on those with least economic resilience. Without proactive structural intervention — in the form of retraining programmes, earned income supplements, and redistributive fiscal policy — the efficiency gains of AI risk being appropriated by a narrow capital-owning class.\n\nIn short, the question is not whether AI will transform work — it will — but whether societies are equipped to manage that transformation equitably. The challenge, then, is less technological than political.',
      annotations: [
        { highlight: 'at first glance, compelling', note: 'Immediately qualified: signals the counter-argument coming', noteEs: 'Inmediatamente matizado: señala que viene el contraargumento' },
        { highlight: 'conflation of automation with unemployment', note: 'Nominalisation: complex noun phrase as subject', noteEs: 'Nominalización: sintagma nominal complejo como sujeto' },
        { highlight: 'That said,', note: 'C2 concession pivot: acknowledges the argument before rebuting', noteEs: 'Pivote de concesión C2: reconoce el argumento antes de rebatir' },
        { highlight: 'not whether... but whether', note: 'Parallel structure for rhetorical emphasis', noteEs: 'Estructura paralela para énfasis retórico' },
        { highlight: 'less technological than political', note: 'Chiasmic/antithetic close: memorable conclusion', noteEs: 'Cierre antitético memorable: el desafío es político, no tecnológico' },
      ]
    },
    template: [
      { section: 'Thesis + Immediate Qualification', sectionEs: 'Tesis + Calificación inmediata', guidance: 'State the proposition you will examine, then immediately signal its complexity', guidanceEs: 'Enuncia la proposición a examinar, luego señala inmediatamente su complejidad', usefulPhrases: ['The proposition that... is, at first glance,...', 'It is tempting to conclude that... Yet...', 'The claim that... invites scrutiny.'], minWords: 40 },
      { section: 'First line of argument', sectionEs: 'Primera línea de argumento', guidance: 'Develop your main supporting point with historical or logical evidence', guidanceEs: 'Desarrolla tu punto de apoyo principal con evidencia histórica o lógica', usefulPhrases: ['To begin with,', 'Historically,', 'The evidence consistently suggests that...', 'It is worth noting that...'], minWords: 70 },
      { section: 'Second line of argument', sectionEs: 'Segunda línea de argumento', guidance: 'Develop a separate, complementary argument', guidanceEs: 'Desarrolla un argumento separado y complementario', usefulPhrases: ['Furthermore,', 'A related point concerns...', 'Equally significant is...', 'It bears noting that...'], minWords: 60 },
      { section: 'Concession + Reframing', sectionEs: 'Concesión + Reformulación', guidance: 'Acknowledge the strongest counter-argument, then reframe it on your terms', guidanceEs: 'Reconoce el contraargumento más sólido, luego reformularlo en tus propios términos', usefulPhrases: ['That said,', 'It would be remiss to overlook...', 'Admittedly,...', 'This, however, should not license...'], minWords: 60 },
      { section: 'Epiphanic Conclusion', sectionEs: 'Conclusión epifánica', guidance: 'End with a reframing move that shifts the question level (e.g. from economic to political)', guidanceEs: 'Termina con un movimiento de reformulación que cambia el nivel de la pregunta', usefulPhrases: ['In short, the question is not whether... but whether...', 'The challenge, then, is less X than Y.', 'Ultimately, this is a matter of...'], minWords: 40 },
    ],
    checklist: [
      { item: 'Nominalised subjects used in at least 2 paragraphs', itemEs: 'Sujetos nominalizados en al menos 2 párrafos', category: 'grammar' },
      { item: 'C2 concession pivot: That said / Admittedly / Notwithstanding', itemEs: 'Pivote de concesión C2 usado', category: 'vocabulary' },
      { item: 'No first person pronouns', itemEs: 'Sin pronombres en primera persona', category: 'register' },
      { item: 'Parallel or antithetic structure in closing', itemEs: 'Estructura paralela o antitética en el cierre', category: 'organization' },
      { item: 'Three or more C2-level lexical items', itemEs: 'Tres o más ítems léxicos de nivel C2', category: 'vocabulary' },
      { item: 'Thesis reframed (not just restated) in conclusion', itemEs: 'Tesis reformulada (no solo repetida) en la conclusión', category: 'content' },
    ],
    commonMistakes: [
      { wrong: 'In conclusion, as I said, AI is good and bad.', correct: 'In short, the question is not whether AI will transform work but whether societies are equipped to manage that transformation equitably.', tip: 'C2 conclusions reframe the question, not just repeat the thesis', tipEs: 'Las conclusiones C2 reformulan la pregunta, no solo repiten la tesis' },
      { wrong: 'There are many advantages and disadvantages.', correct: 'The juxtaposition of efficiency gains and distributional inequities calls for...', tip: 'Use nominalisation and complex noun phrases instead of empty phrases', tipEs: 'Usa nominalización y sintagmas nominales complejos en lugar de frases vacías' },
    ]
  },

  // === LEVEL 10 (C1+): CRITICAL ANALYSIS ESSAY ===
  {
    id: 'ws-level10-critical-analysis',
    title: 'Critical Analysis Essay',
    titleEs: 'Ensayo de Análisis Crítico',
    level: 10,
    genre: 'essay',
    objective: 'Analyze a complex issue with evidence, counterarguments, and a nuanced conclusion',
    objectiveEs: 'Analizar un tema complejo con evidencia, contraargumentos y una conclusión matizada',
    modelText: {
      text: 'The Efficacy of Universal Basic Income: A Critical Examination\n\nThe proposition that universal basic income (UBI) could address rising inequality and technological displacement has gained considerable traction in policy circles. This essay critically examines the evidence for and against UBI, weighing empirical findings from pilot programmes against theoretical objections.\n\nProponents cite pilot studies in Finland and Kenya, where UBI recipients reported improved wellbeing and reduced stress without significant labour market withdrawal. Furthermore, the automation of routine jobs arguably necessitates a safety net that decouples subsistence from employment.\n\nCritics, however, raise substantive concerns. The fiscal cost of a meaningful UBI would require substantial tax increases or spending cuts elsewhere. Moreover, some economists contend that unconditional transfers could dampen labour force participation among certain demographics. The counterargument — that UBI might enable entrepreneurship and care work — remains empirically underdetermined.\n\nOn balance, the case for UBI is suggestive rather than conclusive. Pilot programmes have been limited in scale and duration; extrapolation to national implementation carries significant uncertainty. Policymakers would be well advised to pursue phased experimentation whilst investing in robust evaluation frameworks.',
      annotations: [
        { highlight: 'gained considerable traction', note: 'Academic phrasing for growing support', noteEs: 'Fraseo académico para apoyo creciente' },
        { highlight: 'critically examines', note: 'Signals analytical, evaluative approach', noteEs: 'Señala enfoque analítico y evaluativo' },
        { highlight: 'empirically underdetermined', note: 'Hedged claim: evidence is insufficient', noteEs: 'Afirmación matizada: la evidencia es insuficiente' },
        { highlight: 'suggestive rather than conclusive', note: 'Nuanced conclusion — avoids overclaiming', noteEs: 'Conclusión matizada — evita afirmaciones excesivas' },
      ]
    },
    template: [
      { section: 'Introduction + Thesis', sectionEs: 'Introducción + Tesis', guidance: 'Present the issue and your analytical framework; state that you will weigh evidence and counterarguments', guidanceEs: 'Presenta el tema y tu marco analítico; indica que sopesarás evidencia y contraargumentos', usefulPhrases: ['This essay critically examines...', 'The proposition that... has gained traction.', 'This analysis weighs... against...'], minWords: 50 },
      { section: 'Evidence FOR', sectionEs: 'Evidencia A FAVOR', guidance: 'Present empirical evidence, pilot studies, or expert opinion supporting the position', guidanceEs: 'Presenta evidencia empírica, estudios piloto u opinión experta que apoye la posición', usefulPhrases: ['Proponents cite...', 'Pilot studies indicate...', 'Furthermore,...', 'The evidence suggests...'], minWords: 80 },
      { section: 'Counterarguments + Rebuttal', sectionEs: 'Contraargumentos + Refutación', guidance: 'Acknowledge substantive objections; note where evidence is contested or insufficient', guidanceEs: 'Reconoce objeciones sustanciales; señala dónde la evidencia es controvertida o insuficiente', usefulPhrases: ['Critics, however, raise...', 'Moreover, some contend that...', 'The counterargument remains...', 'empirically underdetermined'], minWords: 80 },
      { section: 'Nuanced Conclusion', sectionEs: 'Conclusión matizada', guidance: 'Synthesise without overclaiming; recommend cautious next steps', guidanceEs: 'Sintetiza sin afirmar en exceso; recomienda pasos cautelosos', usefulPhrases: ['On balance,...', 'suggestive rather than conclusive', 'Policymakers would be well advised to...', 'whilst investing in...'], minWords: 50 },
    ],
    checklist: [
      { item: 'Complex issue analysed with evidence from multiple sources', itemEs: 'Tema complejo analizado con evidencia de múltiples fuentes', category: 'content' },
      { item: 'Counterarguments presented fairly and substantively', itemEs: 'Contraargumentos presentados de forma justa y sustancial', category: 'content' },
      { item: 'Hedging used appropriately (suggestive, arguably, remains underdetermined)', itemEs: 'Moderación usada apropiadamente', category: 'vocabulary' },
      { item: 'Conclusion synthesises without overclaiming', itemEs: 'La conclusión sintetiza sin afirmar en exceso', category: 'content' },
      { item: 'Formal academic register maintained', itemEs: 'Registro académico formal mantenido', category: 'register' },
    ],
    commonMistakes: [
      { wrong: 'UBI is definitely the solution.', correct: 'The case for UBI is suggestive rather than conclusive.', tip: 'Critical analysis requires hedged, nuanced conclusions', tipEs: 'El análisis crítico requiere conclusiones matizadas y moderadas' },
      { wrong: 'Everyone agrees that UBI works.', correct: 'Pilot studies indicate...; however, extrapolation carries significant uncertainty.', tip: 'Acknowledge contested evidence and limitations', tipEs: 'Reconoce evidencia controvertida y limitaciones' },
    ]
  },

  // === LEVEL 11 (C1+/C2): ACADEMIC RESEARCH ABSTRACT ===
  {
    id: 'ws-level11-abstract',
    title: 'Academic Research Abstract',
    titleEs: 'Resumen Académico de Investigación',
    level: 11,
    genre: 'report',
    objective: 'Write a research paper abstract with background, methods, results, and conclusions',
    objectiveEs: 'Escribir un resumen de artículo de investigación con antecedentes, métodos, resultados y conclusiones',
    modelText: {
      text: 'Abstract: This study investigates the relationship between bilingualism and cognitive reserve in ageing populations. A sample of 120 participants aged 65–80, comprising 60 early bilinguals and 60 monolinguals, completed a battery of executive function tasks and underwent structural MRI. Results indicated that bilinguals exhibited significantly higher scores on tasks measuring cognitive flexibility and inhibitory control, with no significant difference in processing speed. Neuroimaging revealed greater grey matter density in the anterior cingulate cortex among bilingual participants. These findings suggest that lifelong bilingualism may contribute to cognitive reserve and confer a protective effect against age-related cognitive decline. Limitations include the cross-sectional design and the impossibility of randomising bilingual status. Future research should employ longitudinal designs to establish causality.',
      annotations: [
        { highlight: 'This study investigates', note: 'Standard abstract opener — states purpose', noteEs: 'Apertura estándar de resumen — indica propósito' },
        { highlight: 'A sample of 120 participants', note: 'Methods: sample size and design', noteEs: 'Métodos: tamaño de muestra y diseño' },
        { highlight: 'Results indicated that', note: 'Transition to findings', noteEs: 'Transición a hallazgos' },
        { highlight: 'These findings suggest', note: 'Interpretation — hedged conclusion', noteEs: 'Interpretación — conclusión matizada' },
        { highlight: 'Limitations include', note: 'Acknowledging study constraints', noteEs: 'Reconociendo limitaciones del estudio' },
      ]
    },
    template: [
      { section: 'Background / Purpose', sectionEs: 'Antecedentes / Propósito', guidance: 'State the research question or objective in 1–2 sentences', guidanceEs: 'Indica la pregunta de investigación o objetivo en 1–2 oraciones', usefulPhrases: ['This study investigates...', 'The aim of this research is to...', 'We examined the relationship between...'], minWords: 25 },
      { section: 'Methods', sectionEs: 'Métodos', guidance: 'Describe sample, design, and key procedures concisely', guidanceEs: 'Describe muestra, diseño y procedimientos clave de forma concisa', usefulPhrases: ['A sample of N participants...', 'Participants completed...', 'Data were analysed using...', 'A randomised controlled trial was conducted...'], minWords: 40 },
      { section: 'Results', sectionEs: 'Resultados', guidance: 'Report key findings with statistical precision where relevant', guidanceEs: 'Reporta hallazgos clave con precisión estadística cuando sea relevante', usefulPhrases: ['Results indicated that...', 'Significant differences were found...', 'The analysis revealed...', 'No significant effect was observed...'], minWords: 40 },
      { section: 'Conclusions', sectionEs: 'Conclusiones', guidance: 'Interpret findings; state implications; acknowledge limitations', guidanceEs: 'Interpreta hallazgos; indica implicaciones; reconoce limitaciones', usefulPhrases: ['These findings suggest...', 'The results support the hypothesis that...', 'Limitations include...', 'Future research should...'], minWords: 35 },
    ],
    checklist: [
      { item: 'Background/purpose stated clearly', itemEs: 'Antecedentes/propósito indicados claramente', category: 'content' },
      { item: 'Methods section includes sample and design', itemEs: 'Sección de métodos incluye muestra y diseño', category: 'content' },
      { item: 'Results reported objectively', itemEs: 'Resultados reportados objetivamente', category: 'content' },
      { item: 'Conclusions hedged (suggest, may, indicate)', itemEs: 'Conclusiones matizadas (suggest, may, indicate)', category: 'vocabulary' },
      { item: 'Limitations acknowledged', itemEs: 'Limitaciones reconocidas', category: 'content' },
      { item: 'Concise, within typical abstract length (150–250 words)', itemEs: 'Conciso, dentro de la longitud típica de resumen (150–250 palabras)', category: 'organization' },
    ],
    commonMistakes: [
      { wrong: 'We proved that bilingualism prevents dementia.', correct: 'These findings suggest that bilingualism may contribute to cognitive reserve.', tip: 'Abstracts require hedged language; avoid overclaiming', tipEs: 'Los resúmenes requieren lenguaje matizado; evita afirmaciones excesivas' },
      { wrong: 'Omitting methods or limitations', correct: 'Include sample, design, key results, and at least one limitation', tip: 'A complete abstract covers all four sections', tipEs: 'Un resumen completo cubre las cuatro secciones' },
    ]
  },

  // === LEVEL 12 (C2): ARGUMENTATIVE POSITION PAPER ===
  {
    id: 'ws-level12-position-paper',
    title: 'Argumentative Position Paper',
    titleEs: 'Documento de Posición Argumentativo',
    level: 12,
    genre: 'essay',
    objective: 'Defend a thesis with sophisticated argumentation, rhetorical variation, and precise evidence',
    objectiveEs: 'Defender una tesis con argumentación sofisticada, variación retórica y evidencia precisa',
    modelText: {
      text: 'That democratic institutions are under strain in an era of algorithmic curation and polarised media ecosystems is scarcely contestable. This position paper advances the thesis that the remedy lies not in regulating speech per se, but in strengthening the epistemic infrastructure — the institutions and norms that enable citizens to distinguish reliable from unreliable information.\n\nThe case for content-based regulation, whilst intuitively appealing, founders on the problem of who decides. Historical precedent suggests that governments granted broad powers to restrict speech tend to expand those powers in ways that disproportionately silence marginalised voices. The better approach, therefore, is to invest in independent fact-checking bodies, media literacy education, and algorithmic transparency — measures that empower citizens without concentrating gatekeeping authority in the hands of the state.\n\nAdmittedly, such measures may prove insufficient in the face of coordinated disinformation campaigns. Yet the alternative — surrendering to the assumption that citizens cannot be trusted to evaluate evidence — is itself corrosive of democratic norms. The task, then, is to design interventions that bolster rather than bypass civic agency.\n\nIn sum, the defence of democracy in the digital age requires not less speech, but better infrastructure for navigating it. The challenge is institutional and pedagogical, not merely legal.',
      annotations: [
        { highlight: 'is scarcely contestable', note: 'C2-level assertion — confident but qualified', noteEs: 'Afirmación de nivel C2 — segura pero matizada' },
        { highlight: 'advances the thesis that', note: 'Formal way to state your position', noteEs: 'Forma formal de indicar tu posición' },
        { highlight: 'whilst intuitively appealing, founders on', note: 'Concession + refutation in one phrase', noteEs: 'Concesión + refutación en una frase' },
        { highlight: 'Admittedly,... Yet', note: 'Sophisticated concession pivot', noteEs: 'Pivote de concesión sofisticado' },
        { highlight: 'not less speech, but better infrastructure', note: 'Antithetic structure for rhetorical impact', noteEs: 'Estructura antitética para impacto retórico' },
      ]
    },
    template: [
      { section: 'Thesis Statement', sectionEs: 'Declaración de Tesis', guidance: 'State your position clearly; frame the debate', guidanceEs: 'Indica tu posición claramente; enmarca el debate', usefulPhrases: ['This position paper advances the thesis that...', 'It is argued here that...', 'The central claim is that...'], minWords: 40 },
      { section: 'Main Argument', sectionEs: 'Argumento Principal', guidance: 'Develop your primary line of reasoning with evidence', guidanceEs: 'Desarrolla tu línea principal de razonamiento con evidencia', usefulPhrases: ['The case for X founders on...', 'Historical precedent suggests...', 'The better approach, therefore, is...'], minWords: 80 },
      { section: 'Concession + Reframing', sectionEs: 'Concesión + Reformulación', guidance: 'Acknowledge the strongest objection; reframe it to strengthen your position', guidanceEs: 'Reconoce la objeción más sólida; reformúlala para fortalecer tu posición', usefulPhrases: ['Admittedly,...', 'Yet the alternative...', 'The task, then, is to...'], minWords: 60 },
      { section: 'Conclusion', sectionEs: 'Conclusión', guidance: 'Restate thesis with antithetic or parallel structure for impact', guidanceEs: 'Reafirma la tesis con estructura antitética o paralela para impacto', usefulPhrases: ['In sum,...', 'not X, but Y', 'The challenge is... not merely...'], minWords: 40 },
    ],
    checklist: [
      { item: 'Clear, defensible thesis stated early', itemEs: 'Tesis clara y defendible indicada temprano', category: 'content' },
      { item: 'Sophisticated concession pivot (Admittedly / Yet)', itemEs: 'Pivote de concesión sofisticado', category: 'vocabulary' },
      { item: 'Evidence and precedent cited', itemEs: 'Evidencia y precedente citados', category: 'content' },
      { item: 'Antithetic or parallel structure in conclusion', itemEs: 'Estructura antitética o paralela en la conclusión', category: 'organization' },
      { item: 'C2-level lexical range and nominalisation', itemEs: 'Rango léxico C2 y nominalización', category: 'vocabulary' },
    ],
    commonMistakes: [
      { wrong: 'Regulating speech is bad. End of story.', correct: 'The case for content-based regulation founders on the problem of who decides.', tip: 'Sophisticated argumentation addresses objections', tipEs: 'La argumentación sofisticada aborda objeciones' },
      { wrong: 'I think we should...', correct: 'The better approach, therefore, is to invest in...', tip: 'Position papers use impersonal, authoritative voice', tipEs: 'Los documentos de posición usan voz impersonal y autoritativa' },
    ]
  },

  // === LEVEL 13 (C2+): LITERARY CRITICAL RESPONSE ===
  {
    id: 'ws-level13-literary-criticism',
    title: 'Literary Critical Response',
    titleEs: 'Respuesta Crítica Literaria',
    level: 13,
    genre: 'review',
    objective: 'Analyze literary techniques, symbolism, and cultural context in a sophisticated critical response',
    objectiveEs: 'Analizar técnicas literarias, simbolismo y contexto cultural en una respuesta crítica sofisticada',
    modelText: {
      text: 'In Toni Morrison\'s Beloved, the eponymous ghost functions not merely as a supernatural device but as a materialisation of the unspeakable — the trauma of slavery that defies straightforward narration. Morrison\'s use of fragmented chronology mirrors the psychological dislocation of characters whose pasts have been violently ruptured. The recurring motif of water — the Middle Passage, Sethe\'s breaking of the amniotic sac, Beloved\'s emergence from the river — accumulates symbolic weight, linking birth, death, and the liminal space between.\n\nThe novel\'s engagement with the historical archive is deliberately partial. Morrison does not purport to represent slavery exhaustively; rather, she stages the impossibility of such representation. Beloved herself embodies what cannot be fully known or spoken: she is at once daughter, victim, and collective memory. This refusal of closure, of tidy resolution, constitutes an ethical stance — a recognition that certain wounds resist healing through narrative alone.\n\nRead within the context of the 1980s, when debates over reparations and national memory were gaining momentum, Beloved intervenes in a cultural moment preoccupied with forgetting. The novel insists that the past is not past; it haunts the present, demanding acknowledgment rather than assimilation. In this sense, Morrison\'s project is as much historiographic as it is literary.',
      annotations: [
        { highlight: 'materialisation of the unspeakable', note: 'Literary-critical vocabulary for symbolic function', noteEs: 'Vocabulario literario-crítico para función simbólica' },
        { highlight: 'fragmented chronology mirrors', note: 'Form-content analysis', noteEs: 'Análisis forma-contenido' },
        { highlight: 'accumulates symbolic weight', note: 'Tracing motif development', noteEs: 'Rastreando desarrollo del motivo' },
        { highlight: 'stages the impossibility of representation', note: 'Metacritical awareness', noteEs: 'Conciencia metacrítica' },
        { highlight: 'historiographic as it is literary', note: 'Placing work in broader cultural context', noteEs: 'Ubicando la obra en contexto cultural más amplio' },
      ]
    },
    template: [
      { section: 'Opening: Technique and Symbol', sectionEs: 'Apertura: Técnica y Símbolo', guidance: 'Introduce the work; identify a key technique or symbol and its function', guidanceEs: 'Introduce la obra; identifica una técnica o símbolo clave y su función', usefulPhrases: ['functions not merely as... but as...', 'The recurring motif of...', 'X mirrors / embodies / stages...'], minWords: 60 },
      { section: 'Close Reading', sectionEs: 'Lectura Cercana', guidance: 'Analyse specific passages; trace how technique and symbol develop', guidanceEs: 'Analiza pasajes específicos; rastrea cómo se desarrollan técnica y símbolo', usefulPhrases: ['The novel\'s engagement with...', 'X embodies what cannot be...', 'This refusal of closure...'], minWords: 70 },
      { section: 'Cultural / Historical Context', sectionEs: 'Contexto Cultural / Histórico', guidance: 'Situate the work in its moment; discuss its intervention in broader debates', guidanceEs: 'Sitúa la obra en su momento; discute su intervención en debates más amplios', usefulPhrases: ['Read within the context of...', 'intervenes in a cultural moment', 'The novel insists that...'], minWords: 50 },
      { section: 'Synthesis', sectionEs: 'Síntesis', guidance: 'Draw together technique, meaning, and context; offer a refined critical judgment', guidanceEs: 'Integra técnica, significado y contexto; ofrece un juicio crítico refinado', usefulPhrases: ['In this sense,...', 'as much X as it is Y', 'constitutes an ethical stance'], minWords: 40 },
    ],
    checklist: [
      { item: 'Specific techniques and symbols analysed', itemEs: 'Técnicas y símbolos específicos analizados', category: 'content' },
      { item: 'Close reading with textual evidence', itemEs: 'Lectura cercana con evidencia textual', category: 'content' },
      { item: 'Cultural/historical context integrated', itemEs: 'Contexto cultural/histórico integrado', category: 'content' },
      { item: 'Literary-critical vocabulary (motif, embodiment, staging)', itemEs: 'Vocabulario literario-crítico', category: 'vocabulary' },
      { item: 'Nuanced, non-reductive interpretation', itemEs: 'Interpretación matizada, no reductiva', category: 'content' },
    ],
    commonMistakes: [
      { wrong: 'The ghost is a symbol of the past.', correct: 'The ghost functions as a materialisation of the unspeakable — the trauma that defies straightforward narration.', tip: 'Literary analysis requires precise, developed claims', tipEs: 'El análisis literario requiere afirmaciones precisas y desarrolladas' },
      { wrong: 'The book is good because it\'s about slavery.', correct: 'The novel\'s engagement with the historical archive is deliberately partial; Morrison stages the impossibility of exhaustive representation.', tip: 'Avoid simplistic moral evaluation; analyse how meaning is constructed', tipEs: 'Evita evaluación moral simplista; analiza cómo se construye el significado' },
    ]
  }
);

export const getWritingScaffoldsByLevel = (level: number): WritingScaffold[] => {
  return writingScaffolds.filter(ws => ws.level <= level);
};

export const getWritingScaffoldsByGenre = (genre: WritingScaffold['genre']): WritingScaffold[] => {
  return writingScaffolds.filter(ws => ws.genre === genre);
};
