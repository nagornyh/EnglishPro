/** Consejos de pronunciación (EN → ES) para textos del data set */

const PRONUNCIATION_TIP_ES: Record<string, string> = {
  "'-day' sounds like 'day' but often reduced to 'dee'":
    "«-day» suena como «day», pero a menudo se reduce a «di».",
  "'-teen' has a LONG 'ee' sound and stress at the end":
    "«-teen» tiene una «i» larga (como «ii») y el acento va al final.",
  "'-ty' has a SHORT 'i' and stress at the beginning":
    "«-ty» tiene una «i» corta y el acento va al principio.",
  "'Has' keeps the /z/ sound clearly":
    "En «has» se mantiene claro el sonido /z/.",
  "'I'm' is more common than 'I am' in speech":
    "En el habla, «I'm» es más frecuente que «I am».",
  "'I've' is common in contractions":
    "«I've» es muy habitual en contracciones.",
  'British: more open, American: more closed':
    'Versión británica más abierta; la americana, más cerrada.',
  'Clothes is one syllable':
    '«Clothes» es una sola sílaba.',
  'Contractions are natural - use them!':
    'Las contracciones son naturales: ¡úsalas!',
  'Contractions are normal and natural':
    'Las contracciones son normales y suenan naturales.',
  'Curl your tongue back slightly':
    'Enrosca un poco la lengua hacia atrás (no la reviences).',
  "Don't pronounce 'r' clearly in British English":
    "En inglés británico no se pronuncia la «r» con mucha fuerza al final de sílaba.",
  "Don't say 'd' - 'de' is wrong":
    "No digas «de» con «d» fuerte; suena mal en este contexto.",
  "Don't say 'dis' or 'dat'":
    "No digas «dis» o «dat»; el sonido es interdental.",
  "Don't say 'workin' (though casual speech does!)":
    "En registro cuidado evita «workin»; en habla coloquial a veces se omite la «g».",
  "English 'r' is NOT rolled like Spanish 'r'":
    "La «r» inglesa no es vibrante como en español.",
  "Find the root word's stress":
    "Fíjate en el acento de la palabra raíz.",
  "I'm = one syllable":
    "«I'm» es una sola sílaba.",
  "In Spanish 'h' is silent, but in English you must pronounce it!":
    'En español la «h» es muda; en inglés ¡debes aspirarla!',
  "It's NOT like Spanish 't' or 's'":
    "No es como la «t» ni como la «s» del español.",
  "It's a VOICED sound - use your vocal cords":
    "Es un sonido SONORO: vibraen las cuerdas vocales.",
  "Keep it short, like a relaxed 'ah'":
    "Mantenlo corto, como una «a» relajada.",
  'Let your voice vibrate':
    'Deja vibrar la voz (sonoro).',
  "Like 'ah' + 'ee' together":
    "Como «a» seguida de «i», unidas.",
  "Like Spanish 'ai' in 'aire'":
    'Parecido al «ai» de «aire» en español.',
  "Like Spanish 'y' in 'ya' but stronger":
    'Similar a la «y» de «ya» en español, pero más marcada.',
  "Like a snake's hiss":
    'Como un silbido suave (sorda).',
  "Like saying 'ah' at the dentist, but shorter":
    'Como la «a» abierta del dentista, pero más corta.',
  "Like saying 'ah' then 'ee' quickly":
    'Di «a» y enseguida «i», rápido.',
  "Like saying 'ay' in Spanish":
    'Parecido al diptongo «ay» en español.',
  "Like saying 'ay' in Spanish 'hay'":
    'Parecido al «ay» de «hay» en español.',
  'Lips more rounded than /ʊ/':
    'Labios más redondeados que en /ʊ/.',
  'Lips slightly rounded':
    'Labios ligeramente redondeados.',
  "Long 'oo', like 'blue'":
    "«oo» larga, como en «blue».",
  "Long /iː/ = tense, like 'seat'":
    '/iː/ larga y tensa, como en «seat».',
  'Middle letters are silent':
    'Las letras del medio no se pronuncian.',
  'Mouth is relaxed and slightly open':
    'Boca relajada y un poco abierta.',
  'Mouth relaxed and open':
    'Boca relajada y abierta.',
  "Mouth round, like saying 'aw'":
    'Boca redondeada, como una «o» abierta.',
  'Mouth starts open, then closes':
    'Empiezas con la boca abierta y la vas cerrando.',
  'No vibration in throat':
    'Sin vibración en la garganta (sordo).',
  "Not as tense as Spanish 'i'":
    'Menos tensa que la «i» española.',
  "Not just 'o', but 'ou'":
    'No es solo «o», es como «ou».',
  "Not like 'd' or 'z'":
    'No es como «d» ni como «z» españolas.',
  "Not like Spanish 'b' or 'v'":
    'No es como la «b» ni la «v» del español.',
  "Not like Spanish 'u'":
    'No es como la «u» española.',
  'Only 2 syllables!':
    '¡Solo dos sílabas!',
  'Open your mouth wide':
    'Abre bien la boca.',
  'Place tongue between teeth — not /t/ or /s/':
    'Lengua entre los dientes; no es /t/ ni /s/.',
  'Put tongue between teeth':
    'Lengua entre los dientes.',
  'Put your hand in front of your mouth - you should feel air':
    'Pon la mano delante de la boca: debes notar el aire.',
  'Put your tongue between your teeth':
    'Coloca la lengua entre los dientes.',
  'Put your tongue between your teeth and blow air':
    'Lengua entre los dientes y sopla aire.',
  'Quick sound':
    'Sonido breve y rápido.',
  'Receipt = ri-SEET, not re-SEIPT':
    '«Receipt»: acento en -seet-, no «reseipt».',
  'Round your lips':
    'Redondea los labios.',
  "Round your lips like saying 'oo'":
    'Redondea los labios como para decir «uu».',
  "Round your lips like saying 'oo' then open to the vowel":
    'Empieza con labios redondeados («uu») y abre hacia la vocal.',
  "Short 'oo', not long like 'food'":
    "«oo» corta, no larga como en «food».",
  "Short /ɪ/ = relaxed, like 'sit'":
    '/ɪ/ corta y relajada, como en «sit».',
  "Short sound, like 'uh'":
    'Sonido corto, como una «ə» relajada.',
  "Short sound, not long like 'food'":
    'Sonido corto, no largo como en «food».',
  "Short, relaxed 'i'":
    "«i» corta y relajada.",
  "Similar to Spanish 'ai'":
    'Parecido al diptongo «ai» español.',
  'Smile slightly when making this sound':
    'Sonríe un poco al articular este sonido.',
  "Sound between 'a' and 'e'":
    'Un sonido entre «a» y «e».',
  'Spanish speakers often make this too long — keep it short and relaxed':
    'Los hispanohablantes a veces lo alargan demasiado: mantenlo corto y relajado.',
  "Start with 'e' and glide to 'ee'":
    'Empieza en «e» y desliza hacia «ii».',
  "Start with 'o' and glide to 'u'":
    'Empieza en «o» y desliza hacia «u».',
  'Start with mouth open, end with smile (ah → ee)':
    'Empieza con boca abierta («a») y termina sonriendo («i»).',
  "Starts with 'ah' moves to 'ee'":
    'De «a» abierta pasas a «i».',
  "Stretch the sound - it's longer than Spanish 'i'":
    'Alarga el sonido: es más largo que la «i» española.',
  "The 'h' in 'wh' is usually silent in American English":
    "En inglés americano la «h» de «wh» suele omitirse.",
  "The 'ng' is one sound, not 'n' + 'g'":
    "«ng» es un solo sonido nasal, no «n» + «g».",
  "The 'z' is soft, not strong":
    'La «z» es suave, no fuerte.',
  "The -er is weak, like 'uh'":
    'La sílaba -er suena débil, como «ə».',
  'The -ing is never stressed':
    'La terminación -ing no lleva el acento.',
  "They're sounds like 'there'":
    "«They're» suena como «there».",
  'Think: headache, stomachache':
    'Piensa en «headache», «stomachache».',
  'Tongue between teeth':
    'Lengua entre los dientes.',
  'Tongue touches roof of mouth':
    'La lengua toca el paladar.',
  'Tongue touches the back of your mouth':
    'La lengua va hacia atrás en la boca.',
  'Two sounds blended together':
    'Dos sonidos en un solo movimiento.',
  'Two sounds in one':
    'Dos sonidos unidos.',
  'Voiced (you can feel vibration)':
    'Sonoro (notas vibración en la garganta).',
  'WENZ-day, NOT Wed-nes-day':
    'Se dice «UÉNZ-dei», no «Wed-nes-day».',
  // Nivel avanzado (palabra suelta + tip)
  "PIR-ik, not 'pie-rik' - the 'y' is short":
    "Se dice «PI-rik», no «pai-rik»; la «y» es breve.",
  'uh-KIL-eez, emphasis on second syllable':
    "«a-KÍ-lihz»; el acento va en la segunda sílaba.",
  "Rhymes with 'trucks', short 'u' sound":
    "Rima con «trucks»; «u» corta.",
  "ROO-bi-kon, not 'rub-i-kon'":
    "«RU-bi-kon», no «rab-i-kon».",
};

export function pronunciationTipDisplayEs(tip: string): string {
  const trimmed = tip.trim();
  return PRONUNCIATION_TIP_ES[trimmed] ?? trimmed;
}
