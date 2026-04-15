/**
 * Error-Based Exercise Generator (C3)
 * Generates targeted exercises from user's error patterns and weak areas.
 * Works with the adaptive engine and error-tracking service.
 */

import adaptiveEngine from './adaptiveEngine';
import type { DifficultySnapshot } from './adaptiveEngine';

export interface ErrorBasedExercise {
  id: string;
  type: 'fill-blank' | 'multiple-choice' | 'correction' | 'transformation';
  skill: string;
  difficulty: number;
  question: string;
  questionEs: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  explanationEs: string;
}

// Grammar exercise templates by difficulty
const GRAMMAR_TEMPLATES: ErrorBasedExercise[] = [
  // Level 1 - Basic
  { id: 'g1', type: 'fill-blank', skill: 'grammar', difficulty: 1, question: 'She ___ a student.', questionEs: 'Ella ___ una estudiante.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: 'Use "is" for he/she/it with the verb to be.', explanationEs: 'Usa "is" para he/she/it con el verbo to be.' },
  { id: 'g2', type: 'fill-blank', skill: 'grammar', difficulty: 1, question: 'They ___ playing football.', questionEs: 'Ellos ___ jugando fútbol.', options: ['is', 'are', 'am', 'was'], correctAnswer: 'are', explanation: 'Use "are" for they/we/you.', explanationEs: 'Usa "are" para they/we/you.' },
  { id: 'g3', type: 'correction', skill: 'grammar', difficulty: 1, question: 'Find the error: "He don\'t like coffee."', questionEs: 'Encuentra el error: "He don\'t like coffee."', correctAnswer: "He doesn't like coffee.", explanation: 'Use "doesn\'t" (does not) for third person singular.', explanationEs: 'Usa "doesn\'t" para tercera persona singular.' },
  { id: 'g4', type: 'fill-blank', skill: 'grammar', difficulty: 1, question: 'I ___ to school every day.', questionEs: 'Yo ___ a la escuela todos los días.', options: ['go', 'goes', 'going', 'went'], correctAnswer: 'go', explanation: 'Use base form for I/you/we/they in present simple.', explanationEs: 'Usa la forma base para I/you/we/they en presente simple.' },

  // Level 2 - Elementary
  { id: 'g5', type: 'fill-blank', skill: 'grammar', difficulty: 2, question: 'She ___ to the store yesterday.', questionEs: 'Ella ___ a la tienda ayer.', options: ['go', 'went', 'goes', 'gone'], correctAnswer: 'went', explanation: '"Go" → "went" in past simple (irregular verb).', explanationEs: '"Go" → "went" en pasado simple (verbo irregular).' },
  { id: 'g6', type: 'multiple-choice', skill: 'grammar', difficulty: 2, question: 'Which is correct? "I have ___ my homework."', questionEs: '¿Cuál es correcta? "I have ___ my homework."', options: ['do', 'did', 'done', 'doing'], correctAnswer: 'done', explanation: 'Present perfect uses have/has + past participle.', explanationEs: 'El present perfect usa have/has + participio pasado.' },
  { id: 'g7', type: 'transformation', skill: 'grammar', difficulty: 2, question: 'Transform to negative: "She likes chocolate."', questionEs: 'Transforma a negativo: "She likes chocolate."', correctAnswer: "She doesn't like chocolate.", explanation: 'Add "doesn\'t" and use base form of the verb.', explanationEs: 'Agrega "doesn\'t" y usa la forma base del verbo.' },

  // Level 3 - Intermediate
  { id: 'g8', type: 'fill-blank', skill: 'grammar', difficulty: 3, question: 'If I ___ rich, I would travel the world.', questionEs: 'Si yo ___ rico, viajaría por el mundo.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', explanation: 'Second conditional uses "were" for all subjects.', explanationEs: 'El segundo condicional usa "were" para todos los sujetos.' },
  { id: 'g9', type: 'fill-blank', skill: 'grammar', difficulty: 3, question: 'The report ___ by the manager yesterday.', questionEs: 'El informe ___ por el gerente ayer.', options: ['wrote', 'was written', 'written', 'writes'], correctAnswer: 'was written', explanation: 'Passive voice: was/were + past participle.', explanationEs: 'Voz pasiva: was/were + participio pasado.' },
  { id: 'g10', type: 'correction', skill: 'grammar', difficulty: 3, question: 'Find the error: "I used to going there."', questionEs: 'Encuentra el error: "I used to going there."', correctAnswer: 'I used to go there.', explanation: '"Used to" is followed by the base form, not -ing.', explanationEs: '"Used to" va seguido de la forma base, no de -ing.' },

  // Level 4 - Upper Intermediate
  { id: 'g11', type: 'fill-blank', skill: 'grammar', difficulty: 4, question: 'By next year, she ___ her degree.', questionEs: 'Para el próximo año, ella ___ su título.', options: ['finishes', 'will finish', 'will have finished', 'finished'], correctAnswer: 'will have finished', explanation: 'Future perfect for actions completed before a future point.', explanationEs: 'Futuro perfecto para acciones completadas antes de un punto futuro.' },
  { id: 'g12', type: 'fill-blank', skill: 'grammar', difficulty: 4, question: 'Not only ___ she smart, but she\'s also kind.', questionEs: 'No solo ___ ella inteligente, sino también amable.', options: ['is', 'was', 'does', 'has'], correctAnswer: 'is', explanation: 'Inversion after "Not only" for emphasis.', explanationEs: 'Inversión después de "Not only" para énfasis.' },

  // Level 5 - Advanced
  { id: 'g13', type: 'fill-blank', skill: 'grammar', difficulty: 5, question: 'Had I known, I ___ differently.', questionEs: 'Si lo hubiera sabido, ___ diferente.', options: ['would act', 'would have acted', 'acted', 'had acted'], correctAnswer: 'would have acted', explanation: 'Third conditional with inversion: Had + subject + past participle.', explanationEs: 'Tercer condicional con inversión: Had + sujeto + participio pasado.' },
  { id: 'g14', type: 'correction', skill: 'grammar', difficulty: 5, question: 'Find the error: "Seldom he goes to the cinema."', questionEs: 'Encuentra el error: "Seldom he goes to the cinema."', correctAnswer: 'Seldom does he go to the cinema.', explanation: 'Negative adverbs at the start require subject-auxiliary inversion.', explanationEs: 'Los adverbios negativos al inicio requieren inversión sujeto-auxiliar.' },
];

// Vocabulary exercise templates
const VOCABULARY_TEMPLATES: ErrorBasedExercise[] = [
  { id: 'v1', type: 'multiple-choice', skill: 'vocabulary', difficulty: 1, question: 'What does "happy" mean?', questionEs: '¿Qué significa "happy"?', options: ['triste', 'feliz', 'enojado', 'cansado'], correctAnswer: 'feliz', explanation: '"Happy" means feeling or showing pleasure.', explanationEs: '"Happy" significa sentir o mostrar alegría.' },
  { id: 'v2', type: 'multiple-choice', skill: 'vocabulary', difficulty: 1, question: 'Choose the opposite of "cold":', questionEs: 'Elige el opuesto de "cold":', options: ['warm', 'fast', 'tall', 'old'], correctAnswer: 'warm', explanation: '"Cold" ↔ "warm/hot" are antonyms.', explanationEs: '"Cold" ↔ "warm/hot" son antónimos.' },
  { id: 'v3', type: 'multiple-choice', skill: 'vocabulary', difficulty: 2, question: '"To make up one\'s mind" means:', questionEs: '"To make up one\'s mind" significa:', options: ['olvidar', 'decidirse', 'imaginar', 'preocuparse'], correctAnswer: 'decidirse', explanation: '"Make up one\'s mind" = to decide.', explanationEs: '"Make up one\'s mind" = decidir.' },
  { id: 'v4', type: 'multiple-choice', skill: 'vocabulary', difficulty: 3, question: '"To pull someone\'s leg" means:', questionEs: '"To pull someone\'s leg" significa:', options: ['lastimar', 'ayudar', 'bromear', 'engañar'], correctAnswer: 'bromear', explanation: '"Pull someone\'s leg" = to joke with someone.', explanationEs: '"Pull someone\'s leg" = bromear con alguien.' },
  { id: 'v5', type: 'fill-blank', skill: 'vocabulary', difficulty: 3, question: 'She felt ___ after the long hike. (exhausted/exciting)', questionEs: 'Ella se sentía ___ después de la larga caminata.', options: ['exhausted', 'exciting', 'exhausting', 'excited'], correctAnswer: 'exhausted', explanation: '-ed adjectives describe how someone feels; -ing describes the cause.', explanationEs: 'Los adjetivos en -ed describen cómo se siente alguien; -ing describe la causa.' },
  { id: 'v6', type: 'multiple-choice', skill: 'vocabulary', difficulty: 4, question: '"Ubiquitous" means:', questionEs: '"Ubiquitous" significa:', options: ['raro', 'omnipresente', 'invisible', 'antiguo'], correctAnswer: 'omnipresente', explanation: '"Ubiquitous" = found everywhere, very common.', explanationEs: '"Ubiquitous" = que se encuentra en todas partes.' },
  { id: 'v7', type: 'multiple-choice', skill: 'vocabulary', difficulty: 5, question: '"To eschew" means:', questionEs: '"To eschew" significa:', options: ['masticar', 'evitar', 'elegir', 'describir'], correctAnswer: 'evitar', explanation: '"Eschew" = to deliberately avoid or keep away from.', explanationEs: '"Eschew" = evitar deliberadamente.' },
];

// Listening/Comprehension templates
const COMPREHENSION_TEMPLATES: ErrorBasedExercise[] = [
  { id: 'c1', type: 'multiple-choice', skill: 'reading', difficulty: 1, question: '"She couldn\'t afford the dress." What does "afford" mean?', questionEs: '"She couldn\'t afford the dress." ¿Qué significa "afford"?', options: ['encontrar', 'permitirse', 'probar', 'elegir'], correctAnswer: 'permitirse', explanation: '"Afford" means to have enough money for something.', explanationEs: '"Afford" significa tener suficiente dinero para algo.' },
  { id: 'c2', type: 'multiple-choice', skill: 'reading', difficulty: 2, question: '"Despite the setback, they persevered." What does "persevered" mean?', questionEs: '"Despite the setback, they persevered." ¿Qué significa "persevered"?', options: ['se rindieron', 'persistieron', 'discutieron', 'celebraron'], correctAnswer: 'persistieron', explanation: '"Persevere" = continue despite difficulties.', explanationEs: '"Persevere" = continuar a pesar de las dificultades.' },
  { id: 'c3', type: 'multiple-choice', skill: 'reading', difficulty: 3, question: '"His argument was compelling." What does "compelling" mean?', questionEs: '"His argument was compelling." ¿Qué significa "compelling"?', options: ['aburrido', 'convincente', 'confuso', 'largo'], correctAnswer: 'convincente', explanation: '"Compelling" = evoking interest or attention convincingly.', explanationEs: '"Compelling" = que evoca interés o atención de forma convincente.' },
];

/**
 * Generate a set of error-based exercises personalized for the user.
 */
export function generateErrorBasedExercises(
  userId: string,
  count: number = 10,
): ErrorBasedExercise[] {
  const snapshot: DifficultySnapshot = adaptiveEngine.getSnapshot(userId);
  const exercises: ErrorBasedExercise[] = [];
  const allTemplates = [...GRAMMAR_TEMPLATES, ...VOCABULARY_TEMPLATES, ...COMPREHENSION_TEMPLATES];

  // Priority 1: exercises for weak skills (below 65% accuracy)
  const weakSkills = snapshot.skills
    .filter(s => s.totalAttempts >= 3 && s.accuracy < 65)
    .sort((a, b) => a.accuracy - b.accuracy);

  for (const ws of weakSkills) {
    const matching = allTemplates.filter(t =>
      t.skill === ws.skill &&
      Math.abs(t.difficulty - ws.level) <= 1
    );
    const picked = matching.slice(0, Math.ceil(count / 3));
    exercises.push(...picked);
  }

  // Priority 2: exercises for recommended focus areas
  for (const focusSkill of snapshot.recommendedFocus) {
    if (exercises.length >= count) break;
    const level = snapshot.skills.find(s => s.skill === focusSkill)?.level ?? 1;
    const matching = allTemplates.filter(t =>
      t.skill === focusSkill &&
      Math.abs(t.difficulty - level) <= 1 &&
      !exercises.some(e => e.id === t.id)
    );
    exercises.push(...matching.slice(0, 2));
  }

  // Priority 3: fill remaining slots with exercises at user's overall level
  if (exercises.length < count) {
    const level = Math.round(snapshot.overallLevel);
    const remaining = allTemplates.filter(t =>
      Math.abs(t.difficulty - level) <= 1 &&
      !exercises.some(e => e.id === t.id)
    );
    // Shuffle for variety
    const shuffled = remaining.sort(() => Math.random() - 0.5);
    exercises.push(...shuffled.slice(0, count - exercises.length));
  }

  return exercises.slice(0, count);
}

/**
 * Get a quick review set focusing on the user's weakest area.
 */
export function getWeakestSkillExercises(userId: string, count: number = 5): ErrorBasedExercise[] {
  const snapshot = adaptiveEngine.getSnapshot(userId);
  const weakest = snapshot.weakestSkill;
  if (!weakest) return [];

  const level = snapshot.skills.find(s => s.skill === weakest)?.level ?? 1;
  const allTemplates = [...GRAMMAR_TEMPLATES, ...VOCABULARY_TEMPLATES, ...COMPREHENSION_TEMPLATES];

  return allTemplates
    .filter(t => t.skill === weakest && Math.abs(t.difficulty - level) <= 1)
    .slice(0, count);
}
