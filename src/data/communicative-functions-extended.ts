// Extended Communicative Functions
// Additional functions for real-world situations

export interface ExtendedFunction {
  id: string;
  function: string;
  functionEs: string;
  level: number;
  category: 'directions' | 'reservations' | 'descriptions' | 'narration' | 'preferences' | 'instructions' | 'emotions' | 'social' | 'shopping' | 'travel';
  expressions: {
    expression: string;
    expressionEs: string;
    pronunciation: string; // Spanish phonetic approximation
    usage: string;
  }[];
  dialogue?: {
    context: string;
    contextEs: string;
    lines: { speaker: string; text: string; textEs: string }[];
  };
}

export const extendedFunctions: ExtendedFunction[] = [
  // === GIVING DIRECTIONS ===
  {
    id: 'func-directions',
    function: 'Giving Directions',
    functionEs: 'Dar Direcciones',
    level: 2,
    category: 'directions',
    expressions: [
      { expression: 'Go straight ahead', expressionEs: 'Sigue derecho', pronunciation: 'Góu stréit ajéd', usage: 'Continue in the same direction' },
      { expression: 'Turn left/right', expressionEs: 'Gira a la izquierda/derecha', pronunciation: 'Tern left/ráit', usage: 'Change direction' },
      { expression: 'Take the first/second left/right', expressionEs: 'Toma la primera/segunda a la izquierda/derecha', pronunciation: 'Téik de ferst/sécond left/ráit', usage: 'Specific turn instruction' },
      { expression: 'Go past the...', expressionEs: 'Pasa el/la...', pronunciation: 'Góu past de...', usage: 'Continue beyond something' },
      { expression: 'It\'s on your left/right', expressionEs: 'Está a tu izquierda/derecha', pronunciation: 'Its on ior left/ráit', usage: 'Location' },
      { expression: 'It\'s next to / opposite / between', expressionEs: 'Está al lado de / frente a / entre', pronunciation: 'Its next tu / óposit / bitwín', usage: 'Relative location' },
      { expression: 'Go around the corner', expressionEs: 'Da la vuelta a la esquina', pronunciation: 'Góu aráund de córner', usage: 'Turn the corner' },
      { expression: 'Cross the street/bridge', expressionEs: 'Cruza la calle/el puente', pronunciation: 'Cros de strit/brídch', usage: 'Go across' },
      { expression: 'It\'s about 5 minutes away', expressionEs: 'Está a unos 5 minutos', pronunciation: 'Its abáut fáiv mínits awéi', usage: 'Distance by time' },
      { expression: 'You can\'t miss it', expressionEs: 'No tiene pérdida', pronunciation: 'Iú cant mis it', usage: 'Easy to find' }
    ],
    dialogue: {
      context: 'Asking for directions to the train station',
      contextEs: 'Preguntando cómo llegar a la estación de tren',
      lines: [
        { speaker: 'Tourist', text: 'Excuse me, how do I get to the train station?', textEs: 'Disculpe, ¿cómo llego a la estación de tren?' },
        { speaker: 'Local', text: 'Go straight ahead for two blocks, then turn right at the traffic lights.', textEs: 'Siga derecho por dos cuadras, luego gire a la derecha en el semáforo.' },
        { speaker: 'Tourist', text: 'And then?', textEs: '¿Y luego?' },
        { speaker: 'Local', text: 'It\'s on your left, next to the supermarket. You can\'t miss it.', textEs: 'Está a su izquierda, al lado del supermercado. No tiene pérdida.' }
      ]
    }
  },

  // === MAKING RESERVATIONS ===
  {
    id: 'func-reservations',
    function: 'Making Reservations',
    functionEs: 'Hacer Reservaciones',
    level: 3,
    category: 'reservations',
    expressions: [
      { expression: 'I\'d like to book/reserve a table', expressionEs: 'Me gustaría reservar una mesa', pronunciation: 'Áid láik tu buk/risérv a téibol', usage: 'Restaurant' },
      { expression: 'I\'d like to make a reservation', expressionEs: 'Me gustaría hacer una reservación', pronunciation: 'Áid láik tu méik a reservéishon', usage: 'General' },
      { expression: 'For how many people?', expressionEs: '¿Para cuántas personas?', pronunciation: 'For jáu méni pípol?', usage: 'Question about party size' },
      { expression: 'Do you have availability for...?', expressionEs: '¿Tienen disponibilidad para...?', pronunciation: 'Du iú jav availabíliti for...?', usage: 'Checking availability' },
      { expression: 'What time would you like?', expressionEs: '¿A qué hora le gustaría?', pronunciation: 'Wot táim wud iú láik?', usage: 'Time preference' },
      { expression: 'Under what name?', expressionEs: '¿A nombre de quién?', pronunciation: 'Ánder wot néim?', usage: 'Name for booking' },
      { expression: 'I have a reservation under [name]', expressionEs: 'Tengo una reservación a nombre de [nombre]', pronunciation: 'Ái jav a reservéishon ánder...', usage: 'Claiming reservation' },
      { expression: 'I need to cancel/change my reservation', expressionEs: 'Necesito cancelar/cambiar mi reservación', pronunciation: 'Ái níd tu cánsel/chéinch mái reservéishon', usage: 'Modifying booking' },
      { expression: 'Is there a deposit required?', expressionEs: '¿Se requiere depósito?', pronunciation: 'Is dér a dipósit rikuáierd?', usage: 'Asking about payment' },
      { expression: 'We\'re fully booked', expressionEs: 'Estamos completos', pronunciation: 'Wír fúli bukt', usage: 'No availability' }
    ],
    dialogue: {
      context: 'Booking a hotel room',
      contextEs: 'Reservando una habitación de hotel',
      lines: [
        { speaker: 'Guest', text: 'Hello, I\'d like to book a room for two nights.', textEs: 'Hola, me gustaría reservar una habitación por dos noches.' },
        { speaker: 'Receptionist', text: 'Certainly. For what dates?', textEs: 'Por supuesto. ¿Para qué fechas?' },
        { speaker: 'Guest', text: 'From the 15th to the 17th of March.', textEs: 'Del 15 al 17 de marzo.' },
        { speaker: 'Receptionist', text: 'Would you prefer a single or double room?', textEs: '¿Prefiere habitación sencilla o doble?' },
        { speaker: 'Guest', text: 'A double, please. Does it include breakfast?', textEs: 'Doble, por favor. ¿Incluye desayuno?' }
      ]
    }
  },

  // === DESCRIBING PEOPLE/OBJECTS ===
  {
    id: 'func-descriptions',
    function: 'Describing People and Objects',
    functionEs: 'Describir Personas y Objetos',
    level: 2,
    category: 'descriptions',
    expressions: [
      { expression: 'He/She is tall/short/medium height', expressionEs: 'Él/Ella es alto/a, bajo/a, de estatura media', pronunciation: 'Ji/Shi is tol/short/mídium jáit', usage: 'Height' },
      { expression: 'He/She has blonde/dark/curly hair', expressionEs: 'Tiene pelo rubio/oscuro/rizado', pronunciation: 'Ji/Shi jas blond/dark/kérli jér', usage: 'Hair' },
      { expression: 'He/She is wearing...', expressionEs: 'Lleva puesto...', pronunciation: 'Ji/Shi is wéring...', usage: 'Clothing' },
      { expression: 'He/She looks like...', expressionEs: 'Se parece a...', pronunciation: 'Ji/Shi luks láik...', usage: 'Resemblance' },
      { expression: 'It\'s made of wood/metal/plastic', expressionEs: 'Está hecho de madera/metal/plástico', pronunciation: 'Its méid of wud/métol/plástic', usage: 'Material' },
      { expression: 'It\'s round/square/rectangular', expressionEs: 'Es redondo/cuadrado/rectangular', pronunciation: 'Its ráund/skwér/rectángiular', usage: 'Shape' },
      { expression: 'It\'s about this big/size', expressionEs: 'Es más o menos así de grande', pronunciation: 'Its abáut dis big/sáis', usage: 'Size' },
      { expression: 'It\'s used for...', expressionEs: 'Se usa para...', pronunciation: 'Its iúsd for...', usage: 'Function' },
      { expression: 'It\'s similar to...', expressionEs: 'Es similar a...', pronunciation: 'Its símilar tu...', usage: 'Comparison' },
      { expression: 'It looks like...', expressionEs: 'Parece...', pronunciation: 'It luks láik...', usage: 'Appearance' }
    ]
  },

  // === NARRATING EVENTS ===
  {
    id: 'func-narrating',
    function: 'Narrating Events (Sequencing)',
    functionEs: 'Narrar Eventos (Secuencia)',
    level: 3,
    category: 'narration',
    expressions: [
      { expression: 'First / Firstly / First of all', expressionEs: 'Primero / En primer lugar', pronunciation: 'Ferst / Férstli / Ferst of ol', usage: 'Beginning' },
      { expression: 'Then / After that / Next', expressionEs: 'Luego / Después de eso / Siguiente', pronunciation: 'Den / Áfter dat / Next', usage: 'Sequence' },
      { expression: 'Meanwhile / In the meantime', expressionEs: 'Mientras tanto', pronunciation: 'Mínwail / In de míntaim', usage: 'Simultaneous' },
      { expression: 'Eventually / Finally / In the end', expressionEs: 'Finalmente / Al final', pronunciation: 'Ivénchuli / Fáinali / In de end', usage: 'Conclusion' },
      { expression: 'Suddenly / All of a sudden', expressionEs: 'De repente', pronunciation: 'Sádenli / Ol of a sáden', usage: 'Unexpected event' },
      { expression: 'As soon as', expressionEs: 'Tan pronto como', pronunciation: 'As sun as', usage: 'Immediate sequence' },
      { expression: 'Before/After (that)', expressionEs: 'Antes/Después (de eso)', pronunciation: 'Bifór/Áfter (dat)', usage: 'Time reference' },
      { expression: 'By the time...', expressionEs: 'Para cuando...', pronunciation: 'Bái de táim...', usage: 'Point in time' },
      { expression: 'While / As', expressionEs: 'Mientras', pronunciation: 'Wáil / As', usage: 'During' },
      { expression: 'Just then / At that moment', expressionEs: 'Justo entonces / En ese momento', pronunciation: 'Chast den / At dat móment', usage: 'Specific moment' }
    ]
  },

  // === EXPRESSING PREFERENCES ===
  {
    id: 'func-preferences',
    function: 'Expressing Preferences',
    functionEs: 'Expresar Preferencias',
    level: 3,
    category: 'preferences',
    expressions: [
      { expression: 'I prefer... to...', expressionEs: 'Prefiero... a...', pronunciation: 'Ái prifér... tu...', usage: 'General preference' },
      { expression: 'I\'d prefer to...', expressionEs: 'Preferiría...', pronunciation: 'Áid prifér tu...', usage: 'Specific situation' },
      { expression: 'I\'d rather... (than...)', expressionEs: 'Preferiría... (que...)', pronunciation: 'Áid ráder... (dan...)', usage: 'Choice between options' },
      { expression: 'I like... better than...', expressionEs: 'Me gusta más... que...', pronunciation: 'Ái láik... béter dan...', usage: 'Comparison' },
      { expression: 'My favorite is...', expressionEs: 'Mi favorito es...', pronunciation: 'Mái féivorit is...', usage: 'Top choice' },
      { expression: 'I\'m not keen on...', expressionEs: 'No me entusiasma...', pronunciation: 'Áim not kín on...', usage: 'Mild dislike' },
      { expression: 'I\'d rather not...', expressionEs: 'Preferiría no...', pronunciation: 'Áid ráder not...', usage: 'Declining politely' },
      { expression: 'If I had to choose, I\'d...', expressionEs: 'Si tuviera que elegir, yo...', pronunciation: 'If ái jad tu chús, áid...', usage: 'Hypothetical choice' },
      { expression: 'Given the choice, I\'d...', expressionEs: 'Si pudiera elegir, yo...', pronunciation: 'Gíven de chóis, áid...', usage: 'Preference' },
      { expression: 'I\'m more of a... person', expressionEs: 'Soy más de...', pronunciation: 'Áim mór of a... pérson', usage: 'General tendency' }
    ]
  },

  // === GIVING INSTRUCTIONS ===
  {
    id: 'func-instructions',
    function: 'Giving Instructions',
    functionEs: 'Dar Instrucciones',
    level: 2,
    category: 'instructions',
    expressions: [
      { expression: 'First, you need to...', expressionEs: 'Primero, necesitas...', pronunciation: 'Ferst, iú níd tu...', usage: 'Starting' },
      { expression: 'Make sure (that) you...', expressionEs: 'Asegúrate de que...', pronunciation: 'Méik shur (dat) iú...', usage: 'Important step' },
      { expression: 'Don\'t forget to...', expressionEs: 'No olvides...', pronunciation: 'Dóunt forgét tu...', usage: 'Reminder' },
      { expression: 'Be careful not to...', expressionEs: 'Ten cuidado de no...', pronunciation: 'Bi kérful not tu...', usage: 'Warning' },
      { expression: 'Once you\'ve done that...', expressionEs: 'Una vez que hayas hecho eso...', pronunciation: 'Wáns iúv dan dat...', usage: 'Next step' },
      { expression: 'Remember to...', expressionEs: 'Recuerda...', pronunciation: 'Riménber tu...', usage: 'Important point' },
      { expression: 'After that, you should...', expressionEs: 'Después de eso, deberías...', pronunciation: 'Áfter dat, iú shud...', usage: 'Sequence' },
      { expression: 'Try not to...', expressionEs: 'Trata de no...', pronunciation: 'Trái not tu...', usage: 'Caution' },
      { expression: 'The trick is to...', expressionEs: 'El truco es...', pronunciation: 'De trik is tu...', usage: 'Tip' },
      { expression: 'You\'ll need...', expressionEs: 'Necesitarás...', pronunciation: 'Iúl níd...', usage: 'Requirements' }
    ]
  },

  // === EXPRESSING SURPRISE ===
  {
    id: 'func-surprise',
    function: 'Expressing Surprise',
    functionEs: 'Expresar Sorpresa',
    level: 2,
    category: 'emotions',
    expressions: [
      { expression: 'Really?!', expressionEs: '¿En serio?', pronunciation: 'Ríli?!', usage: 'Mild surprise' },
      { expression: 'No way!', expressionEs: '¡No puede ser!', pronunciation: 'Nóu wéi!', usage: 'Disbelief' },
      { expression: 'You\'re kidding!', expressionEs: '¡Estás bromeando!', pronunciation: 'Iúr kíding!', usage: 'Disbelief (informal)' },
      { expression: 'I can\'t believe it!', expressionEs: '¡No lo puedo creer!', pronunciation: 'Ái cant bilív it!', usage: 'Strong surprise' },
      { expression: 'That\'s amazing/incredible!', expressionEs: '¡Eso es increíble!', pronunciation: 'Dats améizing/incrédibol!', usage: 'Positive surprise' },
      { expression: 'Are you serious?', expressionEs: '¿Hablas en serio?', pronunciation: 'Ar iú sírius?', usage: 'Seeking confirmation' },
      { expression: 'What a surprise!', expressionEs: '¡Qué sorpresa!', pronunciation: 'Wot a serpráis!', usage: 'Pleasant surprise' },
      { expression: 'I never expected that!', expressionEs: '¡Nunca esperé eso!', pronunciation: 'Ái néver expécted dat!', usage: 'Unexpected' },
      { expression: 'You don\'t say!', expressionEs: '¡No me digas!', pronunciation: 'Iú dóunt séi!', usage: 'Mild sarcasm or surprise' },
      { expression: 'Wow! / Oh my God!', expressionEs: '¡Guau! / ¡Dios mío!', pronunciation: 'Wáu! / Óu mái God!', usage: 'Exclamations' }
    ]
  },

  // === CONGRATULATING ===
  {
    id: 'func-congratulating',
    function: 'Congratulating',
    functionEs: 'Felicitar',
    level: 2,
    category: 'social',
    expressions: [
      { expression: 'Congratulations!', expressionEs: '¡Felicidades!', pronunciation: 'Congratuléishons!', usage: 'Achievement' },
      { expression: 'Well done!', expressionEs: '¡Bien hecho!', pronunciation: 'Wel dan!', usage: 'Good performance' },
      { expression: 'Great job!', expressionEs: '¡Excelente trabajo!', pronunciation: 'Gréit chob!', usage: 'Work achievement' },
      { expression: 'I\'m so happy for you!', expressionEs: '¡Estoy muy feliz por ti!', pronunciation: 'Áim sóu jápi for iú!', usage: 'Personal happiness' },
      { expression: 'You deserve it!', expressionEs: '¡Te lo mereces!', pronunciation: 'Iú disérv it!', usage: 'Recognition' },
      { expression: 'That\'s wonderful news!', expressionEs: '¡Qué maravillosa noticia!', pronunciation: 'Dats wánderful niús!', usage: 'Good news' },
      { expression: 'Way to go!', expressionEs: '¡Así se hace!', pronunciation: 'Wéi tu góu!', usage: 'Encouragement (US)' },
      { expression: 'I knew you could do it!', expressionEs: '¡Sabía que podías hacerlo!', pronunciation: 'Ái niú iú cud du it!', usage: 'Belief in person' },
      { expression: 'Keep up the good work!', expressionEs: '¡Sigue así!', pronunciation: 'Kíp ap de gud werk!', usage: 'Encouragement to continue' },
      { expression: 'You\'ve earned it!', expressionEs: '¡Te lo has ganado!', pronunciation: 'Iúv ernd it!', usage: 'Deserved success' }
    ]
  },

  // === EXPRESSING SYMPATHY ===
  {
    id: 'func-sympathy',
    function: 'Expressing Sympathy',
    functionEs: 'Expresar Compasión/Simpatía',
    level: 3,
    category: 'emotions',
    expressions: [
      { expression: 'I\'m sorry to hear that', expressionEs: 'Lamento escuchar eso', pronunciation: 'Áim sóri tu jír dat', usage: 'Bad news' },
      { expression: 'That\'s too bad', expressionEs: 'Qué lástima', pronunciation: 'Dats tu bad', usage: 'Mild sympathy' },
      { expression: 'What a shame!', expressionEs: '¡Qué pena!', pronunciation: 'Wot a shéim!', usage: 'Disappointment' },
      { expression: 'I\'m so sorry for your loss', expressionEs: 'Lo siento mucho por tu pérdida', pronunciation: 'Áim sóu sóri for iór los', usage: 'Death' },
      { expression: 'My thoughts are with you', expressionEs: 'Mis pensamientos están contigo', pronunciation: 'Mái zots ar wid iú', usage: 'Difficult time' },
      { expression: 'If there\'s anything I can do...', expressionEs: 'Si hay algo que pueda hacer...', pronunciation: 'If dérs énizing ái can du...', usage: 'Offering help' },
      { expression: 'I feel for you', expressionEs: 'Te comprendo', pronunciation: 'Ái fíl for iú', usage: 'Empathy' },
      { expression: 'That must be really hard', expressionEs: 'Eso debe ser muy difícil', pronunciation: 'Dat mast bi ríli jard', usage: 'Acknowledgment' },
      { expression: 'I hope things get better soon', expressionEs: 'Espero que las cosas mejoren pronto', pronunciation: 'Ái jóup zings guet béter sun', usage: 'Wishing well' },
      { expression: 'Take care of yourself', expressionEs: 'Cuídate', pronunciation: 'Téik kér of iorsélf', usage: 'Caring' }
    ]
  },

  // === OFFERING ===
  {
    id: 'func-offering',
    function: 'Offering',
    functionEs: 'Ofrecer',
    level: 2,
    category: 'social',
    expressions: [
      { expression: 'Would you like...?', expressionEs: '¿Te gustaría...?', pronunciation: 'Wud iú láik...?', usage: 'Polite offer' },
      { expression: 'Can I get you something?', expressionEs: '¿Te traigo algo?', pronunciation: 'Can ái guet iú sámzing?', usage: 'General offer' },
      { expression: 'Let me help you with that', expressionEs: 'Déjame ayudarte con eso', pronunciation: 'Let mi jelp iú wid dat', usage: 'Offering help' },
      { expression: 'Shall I...?', expressionEs: '¿Quieres que yo...?', pronunciation: 'Shal ái...?', usage: 'Offering to do something' },
      { expression: 'I\'ll get it for you', expressionEs: 'Te lo traigo', pronunciation: 'Áil guet it for iú', usage: 'Volunteering' },
      { expression: 'Help yourself', expressionEs: 'Sírvete', pronunciation: 'Jelp iorsélf', usage: 'Inviting to take' },
      { expression: 'Feel free to...', expressionEs: 'Siéntete libre de...', pronunciation: 'Fíl fri tu...', usage: 'Permission' },
      { expression: 'Can I offer you...?', expressionEs: '¿Puedo ofrecerte...?', pronunciation: 'Can ái ófer iú...?', usage: 'Formal offer' },
      { expression: 'It\'s on me', expressionEs: 'Yo invito', pronunciation: 'Its on mi', usage: 'Paying' },
      { expression: 'Don\'t hesitate to ask', expressionEs: 'No dudes en preguntar', pronunciation: 'Dóunt jésiteit tu ask', usage: 'Open offer' }
    ]
  },

  // === SHOPPING ===
  {
    id: 'func-shopping',
    function: 'Shopping',
    functionEs: 'Compras',
    level: 2,
    category: 'shopping',
    expressions: [
      { expression: 'How much is this?', expressionEs: '¿Cuánto cuesta esto?', pronunciation: 'Jáu mach is dis?', usage: 'Price inquiry' },
      { expression: 'Do you have this in another size/color?', expressionEs: '¿Tiene esto en otra talla/color?', pronunciation: 'Du iú jav dis in anáder sáis/cólor?', usage: 'Options' },
      { expression: 'I\'m just looking, thanks', expressionEs: 'Solo estoy mirando, gracias', pronunciation: 'Áim chast lúking, zenks', usage: 'Browsing' },
      { expression: 'Can I try this on?', expressionEs: '¿Puedo probarme esto?', pronunciation: 'Can ái trái dis on?', usage: 'Fitting room' },
      { expression: 'Where are the fitting rooms?', expressionEs: '¿Dónde están los probadores?', pronunciation: 'Wér ar de fíting rums?', usage: 'Location' },
      { expression: 'Do you accept credit cards?', expressionEs: '¿Aceptan tarjetas de crédito?', pronunciation: 'Du iú acsépt crédit cards?', usage: 'Payment' },
      { expression: 'Can I have a receipt, please?', expressionEs: '¿Me da el recibo, por favor?', pronunciation: 'Can ái jav a risít, plís?', usage: 'Receipt' },
      { expression: 'Is there a discount?', expressionEs: '¿Hay descuento?', pronunciation: 'Is dér a discáunt?', usage: 'Sale' },
      { expression: 'I\'ll take it', expressionEs: 'Me lo llevo', pronunciation: 'Áil téik it', usage: 'Buying decision' },
      { expression: 'Can I return this?', expressionEs: '¿Puedo devolver esto?', pronunciation: 'Can ái ritérn dis?', usage: 'Returns' }
    ]
  },

  // === TRAVEL ===
  {
    id: 'func-travel',
    function: 'Travel Situations',
    functionEs: 'Situaciones de Viaje',
    level: 2,
    category: 'travel',
    expressions: [
      { expression: 'Where is the nearest...?', expressionEs: '¿Dónde está el/la más cercano/a...?', pronunciation: 'Wér is de nírest...?', usage: 'Finding places' },
      { expression: 'How do I get to...?', expressionEs: '¿Cómo llego a...?', pronunciation: 'Jáu du ái guet tu...?', usage: 'Directions' },
      { expression: 'Is it far from here?', expressionEs: '¿Está lejos de aquí?', pronunciation: 'Is it far from jír?', usage: 'Distance' },
      { expression: 'What time does it leave/arrive?', expressionEs: '¿A qué hora sale/llega?', pronunciation: 'Wot táim das it liv/aráiv?', usage: 'Schedule' },
      { expression: 'A single/return ticket, please', expressionEs: 'Un boleto de ida/ida y vuelta, por favor', pronunciation: 'A síngol/ritérn tíket, plís', usage: 'Buying tickets' },
      { expression: 'Which platform?', expressionEs: '¿En qué andén?', pronunciation: 'Wich plátform?', usage: 'Train/bus' },
      { expression: 'Is this seat taken?', expressionEs: '¿Está ocupado este asiento?', pronunciation: 'Is dis sít téiken?', usage: 'Finding seat' },
      { expression: 'Where can I exchange money?', expressionEs: '¿Dónde puedo cambiar dinero?', pronunciation: 'Wér can ái exchéinch máni?', usage: 'Currency' },
      { expression: 'Do you have a map?', expressionEs: '¿Tiene un mapa?', pronunciation: 'Du iú jav a map?', usage: 'Navigation' },
      { expression: 'I\'ve lost my luggage', expressionEs: 'He perdido mi equipaje', pronunciation: 'Áiv lost mái láguech', usage: 'Problem' }
    ]
  }
];

// Helper functions
export const getExtendedFunctionsByCategory = (category: ExtendedFunction['category']): ExtendedFunction[] => {
  return extendedFunctions.filter(f => f.category === category);
};

export const getExtendedFunctionsByLevel = (level: number): ExtendedFunction[] => {
  return extendedFunctions.filter(f => f.level <= level);
};

export default extendedFunctions;
