// Can-Do Statements aligned with CEFR descriptors
// "Now you can..." statements for tracking communicative competence
// Each level has statements across the four skills + interaction

export interface CanDoStatement {
  id: string;
  level: 1 | 2 | 3 | 4;
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  skill: 'listening' | 'reading' | 'speaking' | 'writing' | 'interaction';
  statement: string;
  statementEs: string;
  evidenceTask: string;
  evidenceTaskEs: string;
  selfAssessment: 'not-yet' | 'with-help' | 'independently' | 'confidently';
}

export const canDoStatements: CanDoStatement[] = [
  // === LEVEL 1 / A1 ===
  // Listening
  { id: 'cd-a1-lis-1', level: 1, cefrLevel: 'A1', skill: 'listening', statement: 'I can understand simple greetings and farewells.', statementEs: 'Puedo entender saludos y despedidas simples.', evidenceTask: 'Understand "Hello, how are you? Nice to meet you. Goodbye!" in a conversation.', evidenceTaskEs: 'Entender "Hello, how are you? Nice to meet you. Goodbye!" en una conversación.', selfAssessment: 'not-yet' },
  { id: 'cd-a1-lis-2', level: 1, cefrLevel: 'A1', skill: 'listening', statement: 'I can understand numbers, prices, and times when spoken slowly.', statementEs: 'Puedo entender números, precios y horas cuando se hablan lentamente.', evidenceTask: 'Listen to: "The train departs at 3:15 and costs £12.50."', evidenceTaskEs: 'Escuchar: "The train departs at 3:15 and costs £12.50."', selfAssessment: 'not-yet' },
  { id: 'cd-a1-lis-3', level: 1, cefrLevel: 'A1', skill: 'listening', statement: 'I can understand simple instructions (Go straight, turn left, sit down).', statementEs: 'Puedo entender instrucciones simples (Go straight, turn left, sit down).', evidenceTask: 'Follow a set of simple directions on a map.', evidenceTaskEs: 'Seguir un conjunto de direcciones simples en un mapa.', selfAssessment: 'not-yet' },
  // Reading
  { id: 'cd-a1-rea-1', level: 1, cefrLevel: 'A1', skill: 'reading', statement: 'I can understand short, simple texts like signs, menus, and timetables.', statementEs: 'Puedo entender textos cortos y simples como señales, menús y horarios.', evidenceTask: 'Read a café menu and identify what you can order under £5.', evidenceTaskEs: 'Leer un menú de café e identificar qué puedes pedir por menos de £5.', selfAssessment: 'not-yet' },
  { id: 'cd-a1-rea-2', level: 1, cefrLevel: 'A1', skill: 'reading', statement: 'I can understand simple personal messages and postcards.', statementEs: 'Puedo entender mensajes personales simples y postales.', evidenceTask: 'Read a short email from a friend about their holiday and answer: Where are they? Are they having fun?', evidenceTaskEs: 'Leer un email corto de un amigo sobre sus vacaciones y responder: ¿Dónde están? ¿Se están divirtiendo?', selfAssessment: 'not-yet' },
  // Speaking
  { id: 'cd-a1-spe-1', level: 1, cefrLevel: 'A1', skill: 'speaking', statement: 'I can introduce myself and say where I am from.', statementEs: 'Puedo presentarme y decir de dónde soy.', evidenceTask: 'Record yourself: "My name is..., I\'m from..., I\'m a..., I like..."', evidenceTaskEs: 'Grábate: "My name is..., I\'m from..., I\'m a..., I like..."', selfAssessment: 'not-yet' },
  { id: 'cd-a1-spe-2', level: 1, cefrLevel: 'A1', skill: 'speaking', statement: 'I can ask and answer simple questions about daily routines.', statementEs: 'Puedo hacer y responder preguntas simples sobre rutinas diarias.', evidenceTask: 'Answer: What time do you wake up? What do you have for breakfast? How do you get to work?', evidenceTaskEs: 'Responder: What time do you wake up? What do you have for breakfast? How do you get to work?', selfAssessment: 'not-yet' },
  // Writing
  { id: 'cd-a1-wri-1', level: 1, cefrLevel: 'A1', skill: 'writing', statement: 'I can fill in forms with personal details.', statementEs: 'Puedo rellenar formularios con datos personales.', evidenceTask: 'Complete a hotel registration form in English.', evidenceTaskEs: 'Completar un formulario de registro de hotel en inglés.', selfAssessment: 'not-yet' },
  { id: 'cd-a1-wri-2', level: 1, cefrLevel: 'A1', skill: 'writing', statement: 'I can write short, simple messages to friends.', statementEs: 'Puedo escribir mensajes cortos y simples a amigos.', evidenceTask: 'Write a WhatsApp message inviting a friend to dinner.', evidenceTaskEs: 'Escribir un mensaje de WhatsApp invitando a un amigo a cenar.', selfAssessment: 'not-yet' },
  // Interaction
  { id: 'cd-a1-int-1', level: 1, cefrLevel: 'A1', skill: 'interaction', statement: 'I can order food and drinks in a restaurant.', statementEs: 'Puedo pedir comida y bebidas en un restaurante.', evidenceTask: 'Role-play ordering a meal using: "I\'d like...", "Can I have...?"', evidenceTaskEs: 'Simular pedir una comida usando: "I\'d like...", "Can I have...?"', selfAssessment: 'not-yet' },

  // === LEVEL 2 / B1 ===
  // Listening
  { id: 'cd-b1-lis-1', level: 2, cefrLevel: 'B1', skill: 'listening', statement: 'I can understand the main points of clear standard speech on familiar topics.', statementEs: 'Puedo entender los puntos principales de un discurso claro sobre temas familiares.', evidenceTask: 'Watch a 3-minute news report and summarize the 3 main points.', evidenceTaskEs: 'Ver un reportaje de 3 minutos y resumir los 3 puntos principales.', selfAssessment: 'not-yet' },
  { id: 'cd-b1-lis-2', level: 2, cefrLevel: 'B1', skill: 'listening', statement: 'I can understand someone describing their experiences and plans.', statementEs: 'Puedo entender a alguien describiendo sus experiencias y planes.', evidenceTask: 'Listen to a podcast where someone describes a trip and note: where, when, highlights.', evidenceTaskEs: 'Escuchar un podcast donde alguien describe un viaje y anotar: dónde, cuándo, momentos destacados.', selfAssessment: 'not-yet' },
  // Reading
  { id: 'cd-b1-rea-1', level: 2, cefrLevel: 'B1', skill: 'reading', statement: 'I can understand texts about everyday topics (emails, articles, advertisements).', statementEs: 'Puedo entender textos sobre temas cotidianos (emails, artículos, anuncios).', evidenceTask: 'Read a product review and decide: Would you buy this product? Why/why not?', evidenceTaskEs: 'Leer una reseña de producto y decidir: ¿Comprarías este producto? ¿Por qué/por qué no?', selfAssessment: 'not-yet' },
  { id: 'cd-b1-rea-2', level: 2, cefrLevel: 'B1', skill: 'reading', statement: 'I can understand the plot of a simplified story or novel.', statementEs: 'Puedo entender la trama de una historia o novela simplificada.', evidenceTask: 'Read a graded reader (B1 level) and write a 5-sentence summary.', evidenceTaskEs: 'Leer una lectura graduada (nivel B1) y escribir un resumen de 5 oraciones.', selfAssessment: 'not-yet' },
  // Speaking
  { id: 'cd-b1-spe-1', level: 2, cefrLevel: 'B1', skill: 'speaking', statement: 'I can describe experiences, events, and aspirations giving reasons and explanations.', statementEs: 'Puedo describir experiencias, eventos y aspiraciones dando razones y explicaciones.', evidenceTask: 'Talk for 2 minutes about your best holiday: describe what happened, why it was special.', evidenceTaskEs: 'Hablar 2 minutos sobre tus mejores vacaciones: describir qué pasó, por qué fue especial.', selfAssessment: 'not-yet' },
  { id: 'cd-b1-spe-2', level: 2, cefrLevel: 'B1', skill: 'speaking', statement: 'I can express opinions using because, I think, in my opinion.', statementEs: 'Puedo expresar opiniones usando because, I think, in my opinion.', evidenceTask: 'Answer: "Should children use smartphones?" Give your opinion with 2 reasons.', evidenceTaskEs: 'Responder: "Should children use smartphones?" Da tu opinión con 2 razones.', selfAssessment: 'not-yet' },
  // Writing
  { id: 'cd-b1-wri-1', level: 2, cefrLevel: 'B1', skill: 'writing', statement: 'I can write simple connected text on familiar topics.', statementEs: 'Puedo escribir texto conectado simple sobre temas familiares.', evidenceTask: 'Write an email to a friend (100 words) describing your new job.', evidenceTaskEs: 'Escribir un email a un amigo (100 palabras) describiendo tu nuevo trabajo.', selfAssessment: 'not-yet' },
  // Interaction
  { id: 'cd-b1-int-1', level: 2, cefrLevel: 'B1', skill: 'interaction', statement: 'I can handle most situations likely to arise while travelling.', statementEs: 'Puedo manejar la mayoría de situaciones que surjan al viajar.', evidenceTask: 'Role-play: complain at a hotel about a noisy room and request a change.', evidenceTaskEs: 'Simular: quejarte en un hotel por una habitación ruidosa y pedir un cambio.', selfAssessment: 'not-yet' },

  // === LEVEL 3 / B2 ===
  // Listening
  { id: 'cd-b2-lis-1', level: 3, cefrLevel: 'B2', skill: 'listening', statement: 'I can understand extended speech and lectures on complex topics in my field.', statementEs: 'Puedo entender discursos extensos y conferencias sobre temas complejos en mi campo.', evidenceTask: 'Watch a TED Talk (10+ min) and write a summary of the main argument + 2 supporting points.', evidenceTaskEs: 'Ver una charla TED (10+ min) y escribir un resumen del argumento principal + 2 puntos de apoyo.', selfAssessment: 'not-yet' },
  { id: 'cd-b2-lis-2', level: 3, cefrLevel: 'B2', skill: 'listening', statement: 'I can understand most TV news and current affairs programs.', statementEs: 'Puedo entender la mayoría de noticias de TV y programas de actualidad.', evidenceTask: 'Watch BBC News for 15 minutes and list the 5 main stories covered.', evidenceTaskEs: 'Ver BBC News 15 minutos y listar las 5 noticias principales cubiertas.', selfAssessment: 'not-yet' },
  // Reading
  { id: 'cd-b2-rea-1', level: 3, cefrLevel: 'B2', skill: 'reading', statement: 'I can read articles on contemporary issues and understand the author\'s viewpoint.', statementEs: 'Puedo leer artículos sobre temas contemporáneos y entender el punto de vista del autor.', evidenceTask: 'Read a Guardian opinion piece and identify: 1) the thesis, 2) the main argument, 3) the author\'s bias.', evidenceTaskEs: 'Leer un artículo de opinión del Guardian e identificar: 1) la tesis, 2) el argumento principal, 3) el sesgo del autor.', selfAssessment: 'not-yet' },
  // Speaking
  { id: 'cd-b2-spe-1', level: 3, cefrLevel: 'B2', skill: 'speaking', statement: 'I can present clear, detailed descriptions on complex subjects and develop arguments.', statementEs: 'Puedo presentar descripciones claras y detalladas sobre temas complejos y desarrollar argumentos.', evidenceTask: 'Give a 3-minute presentation on "The pros and cons of remote work" with structured arguments.', evidenceTaskEs: 'Dar una presentación de 3 minutos sobre "Los pros y contras del teletrabajo" con argumentos estructurados.', selfAssessment: 'not-yet' },
  // Writing
  { id: 'cd-b2-wri-1', level: 3, cefrLevel: 'B2', skill: 'writing', statement: 'I can write clear, detailed text on a wide range of subjects, including essays and reports.', statementEs: 'Puedo escribir texto claro y detallado sobre una amplia gama de temas, incluyendo ensayos e informes.', evidenceTask: 'Write a 250-word opinion essay on a current topic with introduction, 2 body paragraphs, and conclusion.', evidenceTaskEs: 'Escribir un ensayo de opinión de 250 palabras sobre un tema actual con introducción, 2 párrafos de desarrollo y conclusión.', selfAssessment: 'not-yet' },
  // Interaction
  { id: 'cd-b2-int-1', level: 3, cefrLevel: 'B2', skill: 'interaction', statement: 'I can interact with a degree of fluency that makes regular interaction with native speakers possible.', statementEs: 'Puedo interactuar con un grado de fluidez que hace posible la interacción regular con nativos.', evidenceTask: 'Hold a 5-minute debate with a partner about a controversial topic, presenting and defending your position.', evidenceTaskEs: 'Mantener un debate de 5 minutos con un compañero sobre un tema controvertido, presentando y defendiendo tu posición.', selfAssessment: 'not-yet' },

  // === LEVEL 4 / C1 ===
  // Listening
  { id: 'cd-c1-lis-1', level: 4, cefrLevel: 'C1', skill: 'listening', statement: 'I can understand extended speech even when it is not clearly structured and relationships are only implied.', statementEs: 'Puedo entender discursos extensos incluso cuando no están claramente estructurados y las relaciones solo se implican.', evidenceTask: 'Listen to a podcast debate and identify the implicit disagreements between speakers.', evidenceTaskEs: 'Escuchar un debate en podcast e identificar los desacuerdos implícitos entre hablantes.', selfAssessment: 'not-yet' },
  // Reading
  { id: 'cd-c1-rea-1', level: 4, cefrLevel: 'C1', skill: 'reading', statement: 'I can understand long, complex texts, appreciating distinctions of style and implicit meaning.', statementEs: 'Puedo entender textos largos y complejos, apreciando distinciones de estilo y significado implícito.', evidenceTask: 'Read a literary extract and analyze: tone, narrative technique, and the author\'s implied message.', evidenceTaskEs: 'Leer un extracto literario y analizar: tono, técnica narrativa y el mensaje implícito del autor.', selfAssessment: 'not-yet' },
  // Speaking
  { id: 'cd-c1-spe-1', level: 4, cefrLevel: 'C1', skill: 'speaking', statement: 'I can express myself fluently and spontaneously without much obvious searching for expressions.', statementEs: 'Puedo expresarme con fluidez y espontaneidad sin mucha búsqueda obvia de expresiones.', evidenceTask: 'Respond to an unexpected question for 2 minutes without preparation, maintaining fluency and coherence.', evidenceTaskEs: 'Responder a una pregunta inesperada durante 2 minutos sin preparación, manteniendo fluidez y coherencia.', selfAssessment: 'not-yet' },
  // Writing
  { id: 'cd-c1-wri-1', level: 4, cefrLevel: 'C1', skill: 'writing', statement: 'I can write well-structured, detailed text on complex subjects in an appropriate style.', statementEs: 'Puedo escribir texto bien estructurado y detallado sobre temas complejos en un estilo apropiado.', evidenceTask: 'Write a 400-word argumentative essay that presents both sides of an issue and draws a nuanced conclusion.', evidenceTaskEs: 'Escribir un ensayo argumentativo de 400 palabras que presente ambos lados de un tema y saque una conclusión matizada.', selfAssessment: 'not-yet' },
  // Interaction
  { id: 'cd-c1-int-1', level: 4, cefrLevel: 'C1', skill: 'interaction', statement: 'I can use language flexibly and effectively for social, academic, and professional purposes.', statementEs: 'Puedo usar el idioma de forma flexible y efectiva para propósitos sociales, académicos y profesionales.', evidenceTask: 'Role-play a job interview: answer competency-based questions using the STAR method (Situation, Task, Action, Result).', evidenceTaskEs: 'Simular una entrevista de trabajo: responder preguntas basadas en competencias usando el método STAR (Situación, Tarea, Acción, Resultado).', selfAssessment: 'not-yet' },
];

// Helper functions
export const getCanDoByLevel = (level: number): CanDoStatement[] => {
  return canDoStatements.filter(cd => cd.level === level);
};

export const getCanDoBySkill = (skill: CanDoStatement['skill']): CanDoStatement[] => {
  return canDoStatements.filter(cd => cd.skill === skill);
};

export const getCanDoByLevelAndSkill = (level: number, skill: CanDoStatement['skill']): CanDoStatement[] => {
  return canDoStatements.filter(cd => cd.level === level && cd.skill === skill);
};

// Get completion percentage for a level
export const getLevelCompletionPercentage = (level: number, assessments: Map<string, CanDoStatement['selfAssessment']>): number => {
  const levelStatements = getCanDoByLevel(level);
  if (levelStatements.length === 0) return 0;
  const completed = levelStatements.filter(cd => {
    const assessment = assessments.get(cd.id);
    return assessment === 'independently' || assessment === 'confidently';
  }).length;
  return Math.round((completed / levelStatements.length) * 100);
};
