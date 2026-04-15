// Vocabulario Técnico de IT y Trabajo
// Technical English for IT professionals and workplace communication

export interface TechTerm {
  id: string;
  term: string;
  pronunciation?: string;
  translation: string;
  definition: string;
  definitionEs: string;
  example: string;
  exampleEs: string;
  category: 'programming' | 'networking' | 'hardware' | 'software' | 'database' | 'security' | 'agile' | 'workplace' | 'meetings' | 'email' | 'management' | 'cloud';
  level: number;
  relatedTerms?: string[];
}

export const techTerms: TechTerm[] = [
  // === PROGRAMACIÓN ===
  {
    id: 'tech-001',
    term: 'API (Application Programming Interface)',
    pronunciation: '/ˌeɪ piː ˈaɪ/',
    translation: 'Interfaz de Programación de Aplicaciones',
    definition: 'A set of rules and protocols that allows different software applications to communicate with each other',
    definitionEs: 'Un conjunto de reglas y protocolos que permite que diferentes aplicaciones de software se comuniquen entre sí',
    example: 'We need to integrate with their REST API to fetch user data.',
    exampleEs: 'Necesitamos integrarnos con su API REST para obtener datos de usuarios.',
    category: 'programming',
    level: 5,
    relatedTerms: ['REST', 'endpoint', 'JSON']
  },
  {
    id: 'tech-002',
    term: 'Bug',
    translation: 'Error/Fallo',
    definition: 'An error or flaw in a computer program that causes it to produce incorrect or unexpected results',
    definitionEs: 'Un error o defecto en un programa que causa resultados incorrectos o inesperados',
    example: 'We found a critical bug in the login system.',
    exampleEs: 'Encontramos un error crítico en el sistema de inicio de sesión.',
    category: 'programming',
    level: 3,
    relatedTerms: ['debug', 'fix', 'patch']
  },
  {
    id: 'tech-003',
    term: 'Debug',
    pronunciation: '/diːˈbʌɡ/',
    translation: 'Depurar',
    definition: 'The process of finding and fixing errors in computer programs',
    definitionEs: 'El proceso de encontrar y corregir errores en programas de computadora',
    example: 'I spent all morning debugging this function.',
    exampleEs: 'Pasé toda la mañana depurando esta función.',
    category: 'programming',
    level: 4,
    relatedTerms: ['bug', 'breakpoint', 'log']
  },
  {
    id: 'tech-004',
    term: 'Deploy',
    pronunciation: '/dɪˈplɔɪ/',
    translation: 'Desplegar/Implementar',
    definition: 'To make a software application available for use, typically by moving it to a production server',
    definitionEs: 'Hacer que una aplicación de software esté disponible para su uso, típicamente moviéndola a un servidor de producción',
    example: 'We will deploy the new version on Friday.',
    exampleEs: 'Desplegaremos la nueva versión el viernes.',
    category: 'programming',
    level: 5,
    relatedTerms: ['release', 'rollback', 'CI/CD']
  },
  {
    id: 'tech-005',
    term: 'Repository (Repo)',
    pronunciation: '/rɪˈpɒzɪtəri/',
    translation: 'Repositorio',
    definition: 'A storage location for software code, typically managed by version control systems',
    definitionEs: 'Un lugar de almacenamiento para código de software, típicamente gestionado por sistemas de control de versiones',
    example: 'Clone the repository from GitHub to start working.',
    exampleEs: 'Clona el repositorio de GitHub para empezar a trabajar.',
    category: 'programming',
    level: 4,
    relatedTerms: ['Git', 'commit', 'branch']
  },
  {
    id: 'tech-006',
    term: 'Framework',
    pronunciation: '/ˈfreɪmwɜːk/',
    translation: 'Marco de trabajo',
    definition: 'A platform for developing software applications that provides a foundation and structure',
    definitionEs: 'Una plataforma para desarrollar aplicaciones que proporciona una base y estructura',
    example: 'React is a popular JavaScript framework for building user interfaces.',
    exampleEs: 'React es un framework de JavaScript popular para construir interfaces de usuario.',
    category: 'programming',
    level: 4,
    relatedTerms: ['library', 'SDK', 'platform']
  },
  {
    id: 'tech-007',
    term: 'Refactor',
    pronunciation: '/riːˈfæktər/',
    translation: 'Refactorizar',
    definition: 'To restructure existing code without changing its external behavior to improve its quality',
    definitionEs: 'Reestructurar código existente sin cambiar su comportamiento externo para mejorar su calidad',
    example: 'We need to refactor this module to make it more maintainable.',
    exampleEs: 'Necesitamos refactorizar este módulo para hacerlo más mantenible.',
    category: 'programming',
    level: 6,
    relatedTerms: ['clean code', 'technical debt', 'legacy']
  },
  {
    id: 'tech-008',
    term: 'Sprint',
    pronunciation: '/sprɪnt/',
    translation: 'Sprint',
    definition: 'A fixed time period during which specific work must be completed in Agile methodology',
    definitionEs: 'Un período de tiempo fijo durante el cual se debe completar un trabajo específico en metodología Agile',
    example: 'This feature will be delivered in the next sprint.',
    exampleEs: 'Esta funcionalidad se entregará en el próximo sprint.',
    category: 'agile',
    level: 5,
    relatedTerms: ['Scrum', 'backlog', 'standup']
  },
  {
    id: 'tech-009',
    term: 'Merge',
    pronunciation: '/mɜːdʒ/',
    translation: 'Fusionar/Combinar',
    definition: 'To combine changes from different branches of code into one',
    definitionEs: 'Combinar cambios de diferentes ramas de código en una sola',
    example: 'Please review and merge my pull request.',
    exampleEs: 'Por favor revisa y fusiona mi pull request.',
    category: 'programming',
    level: 4,
    relatedTerms: ['branch', 'pull request', 'conflict']
  },
  {
    id: 'tech-010',
    term: 'Backend',
    pronunciation: '/ˈbæk.end/',
    translation: 'Backend (servidor)',
    definition: 'The server-side part of a software application that handles data processing and storage',
    definitionEs: 'La parte del servidor de una aplicación que maneja el procesamiento y almacenamiento de datos',
    example: 'The backend team is working on the database optimization.',
    exampleEs: 'El equipo de backend está trabajando en la optimización de la base de datos.',
    category: 'programming',
    level: 4,
    relatedTerms: ['frontend', 'server', 'API']
  },
  {
    id: 'tech-011',
    term: 'Frontend',
    pronunciation: '/ˈfrʌnt.end/',
    translation: 'Frontend (cliente)',
    definition: 'The client-side part of a software application that users interact with directly',
    definitionEs: 'La parte del cliente de una aplicación con la que los usuarios interactúan directamente',
    example: 'We need a frontend developer to improve the user interface.',
    exampleEs: 'Necesitamos un desarrollador frontend para mejorar la interfaz de usuario.',
    category: 'programming',
    level: 4,
    relatedTerms: ['backend', 'UI', 'UX']
  },

  // === REDES ===
  {
    id: 'tech-012',
    term: 'Bandwidth',
    pronunciation: '/ˈbændwɪdθ/',
    translation: 'Ancho de banda',
    definition: 'The maximum rate of data transfer across a network',
    definitionEs: 'La tasa máxima de transferencia de datos a través de una red',
    example: 'We need more bandwidth to handle the increased traffic.',
    exampleEs: 'Necesitamos más ancho de banda para manejar el aumento de tráfico.',
    category: 'networking',
    level: 5,
    relatedTerms: ['throughput', 'latency', 'connection']
  },
  {
    id: 'tech-013',
    term: 'Firewall',
    pronunciation: '/ˈfaɪərwɔːl/',
    translation: 'Cortafuegos',
    definition: 'A network security system that monitors and controls incoming and outgoing network traffic',
    definitionEs: 'Un sistema de seguridad de red que monitorea y controla el tráfico de red entrante y saliente',
    example: 'The firewall blocked the suspicious connection.',
    exampleEs: 'El cortafuegos bloqueó la conexión sospechosa.',
    category: 'security',
    level: 4,
    relatedTerms: ['security', 'port', 'network']
  },
  {
    id: 'tech-014',
    term: 'Server',
    pronunciation: '/ˈsɜːvər/',
    translation: 'Servidor',
    definition: 'A computer or program that provides services to other computers or programs',
    definitionEs: 'Una computadora o programa que proporciona servicios a otras computadoras o programas',
    example: 'The server is down for maintenance.',
    exampleEs: 'El servidor está caído por mantenimiento.',
    category: 'hardware',
    level: 3,
    relatedTerms: ['client', 'hosting', 'uptime']
  },
  {
    id: 'tech-015',
    term: 'Downtime',
    pronunciation: '/ˈdaʊntaɪm/',
    translation: 'Tiempo de inactividad',
    definition: 'Period when a system is unavailable or not operational',
    definitionEs: 'Período en que un sistema no está disponible o no está operativo',
    example: 'We need to minimize downtime during the migration.',
    exampleEs: 'Necesitamos minimizar el tiempo de inactividad durante la migración.',
    category: 'networking',
    level: 5,
    relatedTerms: ['uptime', 'availability', 'SLA']
  },
  {
    id: 'tech-016',
    term: 'Latency',
    pronunciation: '/ˈleɪtənsi/',
    translation: 'Latencia',
    definition: 'The delay before data transfer begins following an instruction',
    definitionEs: 'El retraso antes de que comience la transferencia de datos después de una instrucción',
    example: 'High latency is causing slow response times.',
    exampleEs: 'La alta latencia está causando tiempos de respuesta lentos.',
    category: 'networking',
    level: 6,
    relatedTerms: ['ping', 'response time', 'bandwidth']
  },

  // === CLOUD ===
  {
    id: 'tech-017',
    term: 'Cloud Computing',
    pronunciation: '/klaʊd kəmˈpjuːtɪŋ/',
    translation: 'Computación en la nube',
    definition: 'Delivery of computing services over the internet including servers, storage, and databases',
    definitionEs: 'Entrega de servicios de computación a través de internet incluyendo servidores, almacenamiento y bases de datos',
    example: 'We moved our infrastructure to cloud computing.',
    exampleEs: 'Movimos nuestra infraestructura a la computación en la nube.',
    category: 'cloud',
    level: 4,
    relatedTerms: ['AWS', 'Azure', 'GCP']
  },
  {
    id: 'tech-018',
    term: 'Scalability',
    pronunciation: '/ˌskeɪləˈbɪləti/',
    translation: 'Escalabilidad',
    definition: 'The ability of a system to handle increasing amounts of work by adding resources',
    definitionEs: 'La capacidad de un sistema para manejar cantidades crecientes de trabajo agregando recursos',
    example: 'Scalability is crucial for handling traffic spikes.',
    exampleEs: 'La escalabilidad es crucial para manejar picos de tráfico.',
    category: 'cloud',
    level: 6,
    relatedTerms: ['scale up', 'scale out', 'elastic']
  },
  {
    id: 'tech-019',
    term: 'Container',
    pronunciation: '/kənˈteɪnər/',
    translation: 'Contenedor',
    definition: 'A lightweight, standalone package that includes everything needed to run a piece of software',
    definitionEs: 'Un paquete ligero e independiente que incluye todo lo necesario para ejecutar un software',
    example: 'We use Docker containers for our microservices.',
    exampleEs: 'Usamos contenedores Docker para nuestros microservicios.',
    category: 'cloud',
    level: 7,
    relatedTerms: ['Docker', 'Kubernetes', 'microservices']
  },
  {
    id: 'tech-020',
    term: 'Instance',
    pronunciation: '/ˈɪnstəns/',
    translation: 'Instancia',
    definition: 'A virtual server running in the cloud',
    definitionEs: 'Un servidor virtual ejecutándose en la nube',
    example: 'Spin up a new instance to handle the load.',
    exampleEs: 'Levanta una nueva instancia para manejar la carga.',
    category: 'cloud',
    level: 5,
    relatedTerms: ['VM', 'EC2', 'compute']
  },

  // === BASE DE DATOS ===
  {
    id: 'tech-021',
    term: 'Query',
    pronunciation: '/ˈkwɪəri/',
    translation: 'Consulta',
    definition: 'A request for data from a database',
    definitionEs: 'Una solicitud de datos de una base de datos',
    example: 'This query is taking too long to execute.',
    exampleEs: 'Esta consulta está tardando demasiado en ejecutarse.',
    category: 'database',
    level: 4,
    relatedTerms: ['SQL', 'index', 'table']
  },
  {
    id: 'tech-022',
    term: 'Schema',
    pronunciation: '/ˈskiːmə/',
    translation: 'Esquema',
    definition: 'The structure that defines the organization of data in a database',
    definitionEs: 'La estructura que define la organización de datos en una base de datos',
    example: 'We need to update the database schema.',
    exampleEs: 'Necesitamos actualizar el esquema de la base de datos.',
    category: 'database',
    level: 5,
    relatedTerms: ['table', 'column', 'migration']
  },
  {
    id: 'tech-023',
    term: 'Backup',
    pronunciation: '/ˈbækʌp/',
    translation: 'Respaldo/Copia de seguridad',
    definition: 'A copy of data stored separately for recovery purposes',
    definitionEs: 'Una copia de datos almacenada por separado para propósitos de recuperación',
    example: 'Always create a backup before making changes.',
    exampleEs: 'Siempre crea un respaldo antes de hacer cambios.',
    category: 'database',
    level: 3,
    relatedTerms: ['restore', 'recovery', 'snapshot']
  },

  // === SEGURIDAD ===
  {
    id: 'tech-024',
    term: 'Authentication',
    pronunciation: '/ɔːˌθentɪˈkeɪʃn/',
    translation: 'Autenticación',
    definition: 'The process of verifying the identity of a user or system',
    definitionEs: 'El proceso de verificar la identidad de un usuario o sistema',
    example: 'Two-factor authentication adds an extra layer of security.',
    exampleEs: 'La autenticación de dos factores agrega una capa extra de seguridad.',
    category: 'security',
    level: 4,
    relatedTerms: ['authorization', 'login', 'credentials']
  },
  {
    id: 'tech-025',
    term: 'Encryption',
    pronunciation: '/ɪnˈkrɪpʃn/',
    translation: 'Cifrado/Encriptación',
    definition: 'The process of converting data into a code to prevent unauthorized access',
    definitionEs: 'El proceso de convertir datos en un código para prevenir acceso no autorizado',
    example: 'All sensitive data is protected by encryption.',
    exampleEs: 'Todos los datos sensibles están protegidos por cifrado.',
    category: 'security',
    level: 5,
    relatedTerms: ['decrypt', 'SSL', 'HTTPS']
  },
  {
    id: 'tech-026',
    term: 'Vulnerability',
    pronunciation: '/ˌvʌlnərəˈbɪləti/',
    translation: 'Vulnerabilidad',
    definition: 'A weakness in a system that can be exploited by attackers',
    definitionEs: 'Una debilidad en un sistema que puede ser explotada por atacantes',
    example: 'The security audit found several vulnerabilities.',
    exampleEs: 'La auditoría de seguridad encontró varias vulnerabilidades.',
    category: 'security',
    level: 6,
    relatedTerms: ['exploit', 'patch', 'CVE']
  },
  {
    id: 'tech-027',
    term: 'Breach',
    pronunciation: '/briːtʃ/',
    translation: 'Brecha/Violación',
    definition: 'An incident where data is accessed without authorization',
    definitionEs: 'Un incidente donde se accede a datos sin autorización',
    example: 'The data breach affected millions of users.',
    exampleEs: 'La violación de datos afectó a millones de usuarios.',
    category: 'security',
    level: 6,
    relatedTerms: ['hack', 'leak', 'incident']
  },

  // === METODOLOGÍAS AGILE ===
  {
    id: 'tech-028',
    term: 'Standup',
    pronunciation: '/ˈstændʌp/',
    translation: 'Reunión diaria',
    definition: 'A short daily meeting where team members share progress and blockers',
    definitionEs: 'Una reunión corta diaria donde los miembros del equipo comparten progreso y obstáculos',
    example: 'We have standup at 9 AM every day.',
    exampleEs: 'Tenemos la reunión diaria a las 9 AM todos los días.',
    category: 'agile',
    level: 5,
    relatedTerms: ['Scrum', 'daily', 'blocker']
  },
  {
    id: 'tech-029',
    term: 'Backlog',
    pronunciation: '/ˈbæklɒɡ/',
    translation: 'Lista de pendientes',
    definition: 'A prioritized list of work items waiting to be done',
    definitionEs: 'Una lista priorizada de elementos de trabajo pendientes',
    example: 'Add this task to the product backlog.',
    exampleEs: 'Agrega esta tarea al backlog del producto.',
    category: 'agile',
    level: 5,
    relatedTerms: ['sprint', 'user story', 'priority']
  },
  {
    id: 'tech-030',
    term: 'Stakeholder',
    pronunciation: '/ˈsteɪkˌhəʊldər/',
    translation: 'Interesado/Parte interesada',
    definition: 'A person with an interest in or influence over a project',
    definitionEs: 'Una persona con interés o influencia en un proyecto',
    example: 'We need stakeholder approval before proceeding.',
    exampleEs: 'Necesitamos la aprobación de los interesados antes de continuar.',
    category: 'agile',
    level: 6,
    relatedTerms: ['sponsor', 'product owner', 'team']
  },
  {
    id: 'tech-031',
    term: 'User Story',
    pronunciation: '/ˈjuːzər ˈstɔːri/',
    translation: 'Historia de usuario',
    definition: 'A short description of a feature from the end user perspective',
    definitionEs: 'Una breve descripción de una funcionalidad desde la perspectiva del usuario final',
    example: 'Write a user story for the new login feature.',
    exampleEs: 'Escribe una historia de usuario para la nueva función de inicio de sesión.',
    category: 'agile',
    level: 5,
    relatedTerms: ['acceptance criteria', 'epic', 'task']
  },
  {
    id: 'tech-032',
    term: 'Retrospective',
    pronunciation: '/ˌretrəˈspektɪv/',
    translation: 'Retrospectiva',
    definition: 'A meeting to reflect on what went well and what can be improved',
    definitionEs: 'Una reunión para reflexionar sobre lo que salió bien y lo que se puede mejorar',
    example: 'Let\'s discuss this in the sprint retrospective.',
    exampleEs: 'Discutamos esto en la retrospectiva del sprint.',
    category: 'agile',
    level: 6,
    relatedTerms: ['feedback', 'improvement', 'sprint review']
  },

  // === TRABAJO Y OFICINA ===
  {
    id: 'tech-033',
    term: 'Deadline',
    pronunciation: '/ˈdedlaɪn/',
    translation: 'Fecha límite',
    definition: 'The latest time by which something must be completed',
    definitionEs: 'El tiempo límite para cuando algo debe estar completado',
    example: 'The deadline for this project is next Friday.',
    exampleEs: 'La fecha límite para este proyecto es el próximo viernes.',
    category: 'workplace',
    level: 2,
    relatedTerms: ['due date', 'milestone', 'timeline']
  },
  {
    id: 'tech-034',
    term: 'Remote Work',
    pronunciation: '/rɪˈməʊt wɜːk/',
    translation: 'Trabajo remoto',
    definition: 'Working from a location outside the traditional office',
    definitionEs: 'Trabajar desde un lugar fuera de la oficina tradicional',
    example: 'Our company supports remote work.',
    exampleEs: 'Nuestra empresa apoya el trabajo remoto.',
    category: 'workplace',
    level: 3,
    relatedTerms: ['WFH', 'telecommute', 'hybrid']
  },
  {
    id: 'tech-035',
    term: 'Onboarding',
    pronunciation: '/ˈɒnbɔːdɪŋ/',
    translation: 'Incorporación',
    definition: 'The process of integrating a new employee into an organization',
    definitionEs: 'El proceso de integrar a un nuevo empleado en una organización',
    example: 'The onboarding process takes about two weeks.',
    exampleEs: 'El proceso de incorporación toma aproximadamente dos semanas.',
    category: 'workplace',
    level: 5,
    relatedTerms: ['training', 'orientation', 'hire']
  },
  {
    id: 'tech-036',
    term: 'Feedback',
    pronunciation: '/ˈfiːdbæk/',
    translation: 'Retroalimentación',
    definition: 'Information about reactions to a product or performance',
    definitionEs: 'Información sobre reacciones a un producto o desempeño',
    example: 'I appreciate your feedback on my presentation.',
    exampleEs: 'Agradezco tu retroalimentación sobre mi presentación.',
    category: 'workplace',
    level: 3,
    relatedTerms: ['review', 'input', 'response']
  },
  {
    id: 'tech-037',
    term: 'Deliverable',
    pronunciation: '/dɪˈlɪvərəbl/',
    translation: 'Entregable',
    definition: 'A tangible or intangible product that must be produced as part of a project',
    definitionEs: 'Un producto tangible o intangible que debe producirse como parte de un proyecto',
    example: 'The main deliverable is a working prototype.',
    exampleEs: 'El principal entregable es un prototipo funcional.',
    category: 'workplace',
    level: 5,
    relatedTerms: ['output', 'result', 'milestone']
  },

  // === REUNIONES ===
  {
    id: 'tech-038',
    term: 'Agenda',
    pronunciation: '/əˈdʒendə/',
    translation: 'Agenda/Orden del día',
    definition: 'A list of items to be discussed at a meeting',
    definitionEs: 'Una lista de puntos a discutir en una reunión',
    example: 'Let me share the meeting agenda.',
    exampleEs: 'Permíteme compartir la agenda de la reunión.',
    category: 'meetings',
    level: 3,
    relatedTerms: ['minutes', 'schedule', 'topic']
  },
  {
    id: 'tech-039',
    term: 'Follow-up',
    pronunciation: '/ˈfɒləʊ ʌp/',
    translation: 'Seguimiento',
    definition: 'An action taken to continue or check progress after an initial action',
    definitionEs: 'Una acción tomada para continuar o verificar el progreso después de una acción inicial',
    example: 'I\'ll send a follow-up email with the action items.',
    exampleEs: 'Enviaré un correo de seguimiento con los puntos de acción.',
    category: 'meetings',
    level: 4,
    relatedTerms: ['action item', 'next steps', 'check-in']
  },
  {
    id: 'tech-040',
    term: 'Action Item',
    pronunciation: '/ˈækʃn ˈaɪtəm/',
    translation: 'Punto de acción/Tarea',
    definition: 'A task that needs to be completed as a result of a meeting',
    definitionEs: 'Una tarea que debe completarse como resultado de una reunión',
    example: 'Here are the action items from today\'s meeting.',
    exampleEs: 'Aquí están los puntos de acción de la reunión de hoy.',
    category: 'meetings',
    level: 4,
    relatedTerms: ['task', 'to-do', 'assignment']
  },
  {
    id: 'tech-041',
    term: 'Sync / Sync-up',
    pronunciation: '/sɪŋk/',
    translation: 'Sincronización/Reunión de sincronización',
    definition: 'A meeting to align on progress and coordinate efforts',
    definitionEs: 'Una reunión para alinearse en el progreso y coordinar esfuerzos',
    example: 'Let\'s have a quick sync to discuss the status.',
    exampleEs: 'Hagamos una sincronización rápida para discutir el estado.',
    category: 'meetings',
    level: 5,
    relatedTerms: ['alignment', 'catch-up', 'touch base']
  },
  {
    id: 'tech-042',
    term: 'On the same page',
    pronunciation: '/ɒn ðə seɪm peɪdʒ/',
    translation: 'En la misma sintonía',
    definition: 'To have the same understanding about something',
    definitionEs: 'Tener el mismo entendimiento sobre algo',
    example: 'Let\'s make sure we\'re on the same page before the presentation.',
    exampleEs: 'Asegurémonos de estar en la misma sintonía antes de la presentación.',
    category: 'meetings',
    level: 4,
    relatedTerms: ['aligned', 'agreed', 'understood']
  },

  // === EMAIL Y COMUNICACIÓN ===
  {
    id: 'tech-043',
    term: 'CC (Carbon Copy)',
    pronunciation: '/siː siː/',
    translation: 'Copia (Con copia)',
    definition: 'To send a copy of an email to additional recipients',
    definitionEs: 'Enviar una copia de un correo a destinatarios adicionales',
    example: 'Please CC the manager on this email.',
    exampleEs: 'Por favor pon en copia al gerente en este correo.',
    category: 'email',
    level: 2,
    relatedTerms: ['BCC', 'forward', 'reply all']
  },
  {
    id: 'tech-044',
    term: 'FYI (For Your Information)',
    pronunciation: '/ˌef waɪ ˈaɪ/',
    translation: 'Para tu información',
    definition: 'Used to share information that may be useful but requires no action',
    definitionEs: 'Usado para compartir información que puede ser útil pero no requiere acción',
    example: 'FYI, the meeting has been moved to 3 PM.',
    exampleEs: 'Para tu información, la reunión se movió a las 3 PM.',
    category: 'email',
    level: 2,
    relatedTerms: ['heads up', 'note', 'info']
  },
  {
    id: 'tech-045',
    term: 'ASAP (As Soon As Possible)',
    pronunciation: '/eɪˌes.eɪˈpiː/',
    translation: 'Lo antes posible',
    definition: 'Requesting that something be done as quickly as possible',
    definitionEs: 'Solicitando que algo se haga lo más rápido posible',
    example: 'Please send the report ASAP.',
    exampleEs: 'Por favor envía el informe lo antes posible.',
    category: 'email',
    level: 2,
    relatedTerms: ['urgent', 'priority', 'immediately']
  },
  {
    id: 'tech-046',
    term: 'ETA (Estimated Time of Arrival)',
    pronunciation: '/ˌiː.tiːˈeɪ/',
    translation: 'Hora estimada de llegada/finalización',
    definition: 'The expected time when something will be completed or arrive',
    definitionEs: 'El tiempo esperado cuando algo estará completado o llegará',
    example: 'What\'s the ETA for the bug fix?',
    exampleEs: '¿Cuál es el tiempo estimado para la corrección del bug?',
    category: 'email',
    level: 3,
    relatedTerms: ['estimate', 'timeline', 'due date']
  },
  {
    id: 'tech-047',
    term: 'Loop in',
    pronunciation: '/luːp ɪn/',
    translation: 'Incluir/Agregar a la conversación',
    definition: 'To include someone in a conversation or communication',
    definitionEs: 'Incluir a alguien en una conversación o comunicación',
    example: 'Let me loop in the tech lead on this discussion.',
    exampleEs: 'Déjame incluir al líder técnico en esta discusión.',
    category: 'email',
    level: 4,
    relatedTerms: ['CC', 'include', 'involve']
  },
  {
    id: 'tech-048',
    term: 'Heads up',
    pronunciation: '/hedz ʌp/',
    translation: 'Aviso previo',
    definition: 'A warning or notification about something',
    definitionEs: 'Una advertencia o notificación sobre algo',
    example: 'Just a heads up, the server will be down tonight.',
    exampleEs: 'Solo un aviso, el servidor estará caído esta noche.',
    category: 'email',
    level: 3,
    relatedTerms: ['FYI', 'alert', 'notice']
  },

  // === GESTIÓN ===
  {
    id: 'tech-049',
    term: 'Bottleneck',
    pronunciation: '/ˈbɒtlnek/',
    translation: 'Cuello de botella',
    definition: 'A point of congestion that slows down a process',
    definitionEs: 'Un punto de congestión que ralentiza un proceso',
    example: 'The approval process is a bottleneck in our workflow.',
    exampleEs: 'El proceso de aprobación es un cuello de botella en nuestro flujo.',
    category: 'management',
    level: 5,
    relatedTerms: ['blocker', 'constraint', 'obstacle']
  },
  {
    id: 'tech-050',
    term: 'Bandwidth (figurative)',
    pronunciation: '/ˈbændwɪdθ/',
    translation: 'Capacidad/Disponibilidad',
    definition: 'The amount of time or energy someone has available',
    definitionEs: 'La cantidad de tiempo o energía que alguien tiene disponible',
    example: 'I don\'t have the bandwidth to take on more projects.',
    exampleEs: 'No tengo la capacidad para asumir más proyectos.',
    category: 'management',
    level: 5,
    relatedTerms: ['capacity', 'availability', 'workload']
  },
  {
    id: 'tech-051',
    term: 'KPI (Key Performance Indicator)',
    pronunciation: '/ˌkeɪ piː ˈaɪ/',
    translation: 'Indicador Clave de Rendimiento',
    definition: 'A measurable value that demonstrates how effectively objectives are being achieved',
    definitionEs: 'Un valor medible que demuestra qué tan efectivamente se están logrando los objetivos',
    example: 'Our main KPI is customer satisfaction score.',
    exampleEs: 'Nuestro principal KPI es el puntaje de satisfacción del cliente.',
    category: 'management',
    level: 6,
    relatedTerms: ['metric', 'goal', 'OKR']
  },
  {
    id: 'tech-052',
    term: 'Scope Creep',
    pronunciation: '/skəʊp kriːp/',
    translation: 'Ampliación del alcance',
    definition: 'Uncontrolled changes or growth in a project\'s scope',
    definitionEs: 'Cambios o crecimiento no controlados en el alcance de un proyecto',
    example: 'We need to avoid scope creep on this project.',
    exampleEs: 'Necesitamos evitar la ampliación del alcance en este proyecto.',
    category: 'management',
    level: 7,
    relatedTerms: ['requirements', 'change request', 'baseline']
  },
  {
    id: 'tech-053',
    term: 'Leverage',
    pronunciation: '/ˈlevərɪdʒ/',
    translation: 'Aprovechar/Apalancarse',
    definition: 'To use something to maximum advantage',
    definitionEs: 'Usar algo para obtener la máxima ventaja',
    example: 'We can leverage this technology to improve efficiency.',
    exampleEs: 'Podemos aprovechar esta tecnología para mejorar la eficiencia.',
    category: 'management',
    level: 6,
    relatedTerms: ['utilize', 'capitalize', 'exploit']
  },
  {
    id: 'tech-054',
    term: 'Pivot',
    pronunciation: '/ˈpɪvət/',
    translation: 'Pivotar/Cambiar de dirección',
    definition: 'To change strategy or direction significantly',
    definitionEs: 'Cambiar de estrategia o dirección significativamente',
    example: 'The company had to pivot during the pandemic.',
    exampleEs: 'La empresa tuvo que pivotar durante la pandemia.',
    category: 'management',
    level: 6,
    relatedTerms: ['change', 'adapt', 'shift']
  },
  {
    id: 'tech-055',
    term: 'Streamline',
    pronunciation: '/ˈstriːmlaɪn/',
    translation: 'Optimizar/Simplificar',
    definition: 'To make a process more efficient by removing unnecessary steps',
    definitionEs: 'Hacer un proceso más eficiente eliminando pasos innecesarios',
    example: 'We need to streamline our approval process.',
    exampleEs: 'Necesitamos optimizar nuestro proceso de aprobación.',
    category: 'management',
    level: 6,
    relatedTerms: ['optimize', 'simplify', 'improve']
  },

  // === TÉRMINOS ADICIONALES ===
  {
    id: 'tech-056',
    term: 'Workaround',
    pronunciation: '/ˈwɜːkəraʊnd/',
    translation: 'Solución temporal',
    definition: 'A temporary solution to bypass a problem',
    definitionEs: 'Una solución temporal para evitar un problema',
    example: 'We found a workaround until the bug is fixed.',
    exampleEs: 'Encontramos una solución temporal hasta que se arregle el error.',
    category: 'programming',
    level: 4,
    relatedTerms: ['fix', 'patch', 'hack']
  },
  {
    id: 'tech-057',
    term: 'POC (Proof of Concept)',
    pronunciation: '/piː əʊ siː/',
    translation: 'Prueba de concepto',
    definition: 'A demonstration that a concept or idea is feasible',
    definitionEs: 'Una demostración de que un concepto o idea es factible',
    example: 'Let\'s build a POC before committing to the full project.',
    exampleEs: 'Hagamos una prueba de concepto antes de comprometernos con el proyecto completo.',
    category: 'management',
    level: 6,
    relatedTerms: ['prototype', 'MVP', 'demo']
  },
  {
    id: 'tech-058',
    term: 'MVP (Minimum Viable Product)',
    pronunciation: '/ˌem viː ˈpiː/',
    translation: 'Producto Mínimo Viable',
    definition: 'A product with just enough features to satisfy early customers',
    definitionEs: 'Un producto con las características mínimas para satisfacer a los primeros clientes',
    example: 'Our MVP will be ready by the end of the month.',
    exampleEs: 'Nuestro MVP estará listo a fin de mes.',
    category: 'agile',
    level: 6,
    relatedTerms: ['POC', 'iteration', 'launch']
  },
  {
    id: 'tech-059',
    term: 'EOD (End of Day)',
    pronunciation: '/ˌiː əʊ ˈdiː/',
    translation: 'Fin del día',
    definition: 'By the end of the business day',
    definitionEs: 'Para el final del día laboral',
    example: 'I need this report by EOD.',
    exampleEs: 'Necesito este informe para el final del día.',
    category: 'email',
    level: 3,
    relatedTerms: ['deadline', 'COB', 'today']
  },
  {
    id: 'tech-060',
    term: 'OOO (Out of Office)',
    pronunciation: '/ˌəʊ əʊ ˈəʊ/',
    translation: 'Fuera de oficina',
    definition: 'Not available at work, usually on vacation or leave',
    definitionEs: 'No disponible en el trabajo, usualmente de vacaciones o permiso',
    example: 'I\'ll be OOO next week.',
    exampleEs: 'Estaré fuera de oficina la próxima semana.',
    category: 'email',
    level: 3,
    relatedTerms: ['vacation', 'leave', 'away']
  },
  {
    id: 'tech-061',
    term: 'Technical Debt',
    pronunciation: '/ˈteknɪkl det/',
    translation: 'Deuda técnica',
    definition: 'The cost of rework caused by choosing quick solutions over better approaches',
    definitionEs: 'El costo de retrabajo causado por elegir soluciones rápidas sobre mejores enfoques',
    example: 'We need to address the technical debt in this module.',
    exampleEs: 'Necesitamos abordar la deuda técnica en este módulo.',
    category: 'programming',
    level: 7,
    relatedTerms: ['refactor', 'legacy', 'maintenance']
  },
  {
    id: 'tech-062',
    term: 'Blocker',
    pronunciation: '/ˈblɒkər/',
    translation: 'Bloqueador/Impedimento',
    definition: 'An issue that prevents progress on a task',
    definitionEs: 'Un problema que impide el progreso en una tarea',
    example: 'Do you have any blockers for today?',
    exampleEs: '¿Tienes algún impedimento para hoy?',
    category: 'agile',
    level: 4,
    relatedTerms: ['obstacle', 'issue', 'dependency']
  },
  {
    id: 'tech-063',
    term: 'Rollback',
    pronunciation: '/ˈrəʊlbæk/',
    translation: 'Revertir',
    definition: 'To return to a previous version or state',
    definitionEs: 'Volver a una versión o estado anterior',
    example: 'We had to rollback the deployment.',
    exampleEs: 'Tuvimos que revertir el despliegue.',
    category: 'programming',
    level: 5,
    relatedTerms: ['revert', 'undo', 'restore']
  },
  {
    id: 'tech-064',
    term: 'SLA (Service Level Agreement)',
    pronunciation: '/ˌes el ˈeɪ/',
    translation: 'Acuerdo de Nivel de Servicio',
    definition: 'A commitment between a service provider and client regarding service standards',
    definitionEs: 'Un compromiso entre un proveedor de servicios y un cliente sobre estándares de servicio',
    example: 'The SLA guarantees 99.9% uptime.',
    exampleEs: 'El SLA garantiza 99.9% de disponibilidad.',
    category: 'management',
    level: 7,
    relatedTerms: ['uptime', 'availability', 'contract']
  },
  {
    id: 'tech-065',
    term: 'Sandbox',
    pronunciation: '/ˈsændbɒks/',
    translation: 'Entorno de pruebas',
    definition: 'An isolated environment for testing without affecting production',
    definitionEs: 'Un entorno aislado para pruebas sin afectar producción',
    example: 'Test the changes in the sandbox first.',
    exampleEs: 'Prueba los cambios en el entorno de pruebas primero.',
    category: 'programming',
    level: 5,
    relatedTerms: ['staging', 'development', 'test environment']
  }
];

// Helper functions
export const getTechTermsByCategory = (category: TechTerm['category']): TechTerm[] => {
  return techTerms.filter(t => t.category === category);
};

export const getTechTermsByLevel = (level: number): TechTerm[] => {
  return techTerms.filter(t => t.level <= level);
};

export const searchTechTerm = (term: string): TechTerm[] => {
  const searchTerm = term.toLowerCase();
  return techTerms.filter(t => 
    t.term.toLowerCase().includes(searchTerm) ||
    t.definition.toLowerCase().includes(searchTerm) ||
    t.translation.toLowerCase().includes(searchTerm)
  );
};

export default techTerms;
