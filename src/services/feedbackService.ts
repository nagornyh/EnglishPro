// Feedback Service - Provides detailed explanations and contextual feedback
// Helps users understand WHY they made mistakes, not just that they did

export interface DetailedFeedback {
  explanation: string;
  explanationEs: string;
  rule?: string;
  examples: {
    correct: string;
    incorrect: string;
    explanation: string;
  }[];
  relatedTopic?: string;
  relatedTopicPath?: string;
  tip?: string;
  tipEs?: string;
}

export interface PerformanceComparison {
  topic: string;
  previousAccuracy: number;
  currentAccuracy: number;
  improvement: number;
  message: string;
  messageEs: string;
  trend: 'improving' | 'stable' | 'declining';
}

export interface PredictedError {
  type: string;
  description: string;
  descriptionEs: string;
  probability: number;
  preventionTip: string;
  preventionTipEs: string;
}

// Error categories and their explanations
const ERROR_EXPLANATIONS: Record<string, Record<string, DetailedFeedback>> = {
  grammar: {
    'subject-verb-agreement': {
      explanation: "The verb must agree with the subject in number (singular/plural).",
      explanationEs: "El verbo debe concordar con el sujeto en número (singular/plural).",
      rule: "Singular subjects take singular verbs; plural subjects take plural verbs.",
      examples: [
        { correct: "She works here.", incorrect: "She work here.", explanation: "'She' is singular, so use 'works'" },
        { correct: "They work here.", incorrect: "They works here.", explanation: "'They' is plural, so use 'work'" },
      ],
      relatedTopic: "Present Simple",
      relatedTopicPath: "/grammar",
      tip: "Remember: He/She/It adds -s to the verb",
      tipEs: "Recuerda: He/She/It añade -s al verbo",
    },
    'article-usage': {
      explanation: "Articles (a, an, the) indicate whether a noun is specific or general.",
      explanationEs: "Los artículos (a, an, the) indican si un sustantivo es específico o general.",
      rule: "'The' for specific things, 'a/an' for general, no article for general plurals/uncountables.",
      examples: [
        { correct: "I saw a dog.", incorrect: "I saw dog.", explanation: "First mention of a countable noun needs 'a'" },
        { correct: "The dog was big.", incorrect: "A dog was big.", explanation: "Second mention (specific) uses 'the'" },
        { correct: "I love music.", incorrect: "I love the music.", explanation: "General concepts don't need articles" },
      ],
      relatedTopic: "Articles",
      tip: "When in doubt with general concepts, try without an article first",
      tipEs: "En caso de duda con conceptos generales, prueba primero sin artículo",
    },
    'tense-consistency': {
      explanation: "Keep the same tense throughout a sentence or related sentences.",
      explanationEs: "Mantén el mismo tiempo verbal a lo largo de una oración o oraciones relacionadas.",
      rule: "Don't switch between past, present, and future without a reason.",
      examples: [
        { correct: "I went to the store and bought milk.", incorrect: "I went to the store and buy milk.", explanation: "Both actions are in the past" },
        { correct: "She says she is tired.", incorrect: "She says she was tired.", explanation: "Reported speech in present tense" },
      ],
      relatedTopic: "Verb Tenses",
      relatedTopicPath: "/grammar",
    },
    'present-perfect-vs-past': {
      explanation: "Present Perfect connects past to present; Past Simple is finished past.",
      explanationEs: "El Present Perfect conecta el pasado con el presente; el Past Simple es pasado terminado.",
      rule: "Use Present Perfect for: experiences, recent events, unfinished time periods.",
      examples: [
        { correct: "I have lived here for 5 years.", incorrect: "I lived here for 5 years.", explanation: "Still living here = Present Perfect" },
        { correct: "I visited Paris in 2020.", incorrect: "I have visited Paris in 2020.", explanation: "Specific past time = Past Simple" },
      ],
      relatedTopic: "Present Perfect",
      tip: "If you mention WHEN (yesterday, in 2020), use Past Simple",
      tipEs: "Si mencionas CUÁNDO (ayer, en 2020), usa Past Simple",
    },
    'conditional-structure': {
      explanation: "Conditional sentences follow specific patterns based on probability.",
      explanationEs: "Las oraciones condicionales siguen patrones específicos según la probabilidad.",
      rule: "First: If + present, will + base. Second: If + past, would + base.",
      examples: [
        { correct: "If it rains, I will stay home.", incorrect: "If it will rain, I will stay home.", explanation: "First conditional: present in if-clause" },
        { correct: "If I were rich, I would travel.", incorrect: "If I was rich, I will travel.", explanation: "Second conditional: were + would" },
      ],
      relatedTopic: "Conditionals",
    },
    'gerund-vs-infinitive': {
      explanation: "Some verbs are followed by gerund (-ing), others by infinitive (to + verb).",
      explanationEs: "Algunos verbos van seguidos de gerundio (-ing), otros de infinitivo (to + verbo).",
      rule: "Enjoy, avoid, suggest → gerund. Want, decide, hope → infinitive.",
      examples: [
        { correct: "I enjoy swimming.", incorrect: "I enjoy to swim.", explanation: "'Enjoy' is always followed by -ing" },
        { correct: "I want to go.", incorrect: "I want going.", explanation: "'Want' is always followed by 'to'" },
      ],
      tip: "Some verbs (like, love, hate) can take both with slight meaning differences",
      tipEs: "Algunos verbos (like, love, hate) pueden llevar ambos con ligeras diferencias de significado",
    },
  },
  vocabulary: {
    'make-vs-do': {
      explanation: "MAKE = create something new. DO = perform an action/activity.",
      explanationEs: "MAKE = crear algo nuevo. DO = realizar una acción/actividad.",
      rule: "MAKE: breakfast, money, decisions, mistakes. DO: homework, exercise, business, a favor.",
      examples: [
        { correct: "I made a mistake.", incorrect: "I did a mistake.", explanation: "Mistakes are 'created' → MAKE" },
        { correct: "I did my homework.", incorrect: "I made my homework.", explanation: "Homework is an activity → DO" },
      ],
      tip: "When you create a physical result, usually MAKE. When you complete a task, usually DO.",
      tipEs: "Cuando creas un resultado físico, usualmente MAKE. Cuando completas una tarea, usualmente DO.",
    },
    'say-vs-tell': {
      explanation: "SAY = words/content. TELL = inform someone (needs a person).",
      explanationEs: "SAY = palabras/contenido. TELL = informar a alguien (necesita una persona).",
      rule: "Say something. Tell someone something. Tell + person is required.",
      examples: [
        { correct: "She said hello.", incorrect: "She told hello.", explanation: "No person mentioned → SAY" },
        { correct: "She told me the truth.", incorrect: "She said me the truth.", explanation: "Person mentioned → TELL" },
      ],
    },
    'borrow-vs-lend': {
      explanation: "BORROW = take temporarily. LEND = give temporarily.",
      explanationEs: "BORROW = tomar prestado. LEND = prestar (dar).",
      rule: "You borrow FROM someone. You lend TO someone.",
      examples: [
        { correct: "Can I borrow your pen?", incorrect: "Can I lend your pen?", explanation: "You're taking → BORROW" },
        { correct: "Can you lend me your pen?", incorrect: "Can you borrow me your pen?", explanation: "You're giving → LEND" },
      ],
    },
    'false-friends': {
      explanation: "These words look like Spanish words but have different meanings.",
      explanationEs: "Estas palabras parecen palabras en español pero tienen significados diferentes.",
      rule: "Always verify words that look familiar - they might be false friends!",
      examples: [
        { correct: "Actually = en realidad", incorrect: "Actually ≠ actualmente", explanation: "Actually means 'in reality', not 'currently'" },
        { correct: "Sensible = sensato", incorrect: "Sensible ≠ sensible", explanation: "Sensible means 'practical/reasonable'" },
        { correct: "Library = biblioteca", incorrect: "Library ≠ librería", explanation: "Library is where you borrow books" },
      ],
      tip: "When a word looks Spanish, double-check its real meaning!",
      tipEs: "¡Cuando una palabra parece española, verifica su significado real!",
    },
  },
  spelling: {
    'double-letters': {
      explanation: "Many English words have unexpected double letters.",
      explanationEs: "Muchas palabras en inglés tienen letras dobles inesperadas.",
      rule: "Common patterns: -ss-, -mm-, -cc-, -ll-, -rr-",
      examples: [
        { correct: "necessary", incorrect: "necesary", explanation: "One 'c', two 's'" },
        { correct: "accommodate", incorrect: "accomodate", explanation: "Two 'c', two 'm'" },
        { correct: "occurred", incorrect: "occured", explanation: "Two 'r'" },
      ],
      tip: "When in doubt, the double letter is usually in the middle of the word",
      tipEs: "En caso de duda, la letra doble suele estar en el medio de la palabra",
    },
    'ie-vs-ei': {
      explanation: "The classic 'i before e' rule with exceptions.",
      explanationEs: "La clásica regla 'i antes de e' con excepciones.",
      rule: "'I before E, except after C, or when sounding like A'",
      examples: [
        { correct: "believe", incorrect: "beleive", explanation: "I before E" },
        { correct: "receive", incorrect: "recieve", explanation: "Except after C" },
        { correct: "neighbor", incorrect: "nieghbor", explanation: "Sounds like A → EI" },
      ],
    },
    'silent-letters': {
      explanation: "English has many words with letters that aren't pronounced.",
      explanationEs: "El inglés tiene muchas palabras con letras que no se pronuncian.",
      rule: "Common silent letters: k (before n), w (before r), b (after m), g (before n)",
      examples: [
        { correct: "know /noʊ/", incorrect: "know /knoʊ/", explanation: "K is silent before N" },
        { correct: "write /raɪt/", incorrect: "write /wraɪt/", explanation: "W is silent before R" },
        { correct: "climb /klaɪm/", incorrect: "climb /klaɪmb/", explanation: "B is silent after M" },
      ],
    },
  },
  punctuation: {
    'apostrophe-possession': {
      explanation: "Apostrophes show possession or contractions, not plurals.",
      explanationEs: "Los apóstrofes muestran posesión o contracciones, no plurales.",
      rule: "Singular: 's. Plural ending in s: s'. Never use for regular plurals.",
      examples: [
        { correct: "The dog's tail", incorrect: "The dogs tail", explanation: "One dog owns the tail" },
        { correct: "The dogs' tails", incorrect: "The dog's tails", explanation: "Multiple dogs own the tails" },
        { correct: "Two dogs", incorrect: "Two dog's", explanation: "Regular plural - no apostrophe" },
      ],
    },
    'comma-usage': {
      explanation: "Commas separate items, clauses, and introductory elements.",
      explanationEs: "Las comas separan elementos, cláusulas y elementos introductorios.",
      rule: "Use commas in lists, after introductory phrases, and before coordinating conjunctions.",
      examples: [
        { correct: "I bought apples, oranges, and bananas.", incorrect: "I bought apples oranges and bananas.", explanation: "Commas separate list items" },
        { correct: "However, I disagree.", incorrect: "However I disagree.", explanation: "Comma after introductory word" },
      ],
    },
  },
};

// User error history storage key
const ERROR_HISTORY_KEY = 'user_error_history';

interface ErrorHistoryEntry {
  type: string;
  category: string;
  timestamp: number;
  context?: string;
}

class FeedbackService {
  private errorHistory: ErrorHistoryEntry[] = [];

  constructor() {
    this.loadErrorHistory();
  }

  private loadErrorHistory(): void {
    const saved = localStorage.getItem(ERROR_HISTORY_KEY);
    if (saved) {
      this.errorHistory = JSON.parse(saved);
    }
  }

  private saveErrorHistory(): void {
    // Keep last 500 errors
    const trimmed = this.errorHistory.slice(-500);
    localStorage.setItem(ERROR_HISTORY_KEY, JSON.stringify(trimmed));
  }

  // Record an error for future predictions
  recordError(category: string, type: string, context?: string): void {
    this.errorHistory.push({
      type,
      category,
      timestamp: Date.now(),
      context,
    });
    this.saveErrorHistory();
  }

  // Get detailed explanation for an error
  getDetailedExplanation(category: string, errorType: string): DetailedFeedback | null {
    const categoryErrors = ERROR_EXPLANATIONS[category];
    if (!categoryErrors) return null;
    
    return categoryErrors[errorType] || null;
  }

  // Find best matching explanation based on error context
  findBestExplanation(errorText: string, correctAnswer: string): DetailedFeedback | null {
    const lowerError = errorText.toLowerCase();
    const lowerCorrect = correctAnswer.toLowerCase();

    // Check for common error patterns
    if (/\b(make|do)\b/.test(lowerError) && /\b(make|do)\b/.test(lowerCorrect)) {
      return ERROR_EXPLANATIONS.vocabulary['make-vs-do'];
    }
    if (/\b(say|tell)\b/.test(lowerError) && /\b(say|tell)\b/.test(lowerCorrect)) {
      return ERROR_EXPLANATIONS.vocabulary['say-vs-tell'];
    }
    if (/\b(borrow|lend)\b/.test(lowerError) && /\b(borrow|lend)\b/.test(lowerCorrect)) {
      return ERROR_EXPLANATIONS.vocabulary['borrow-vs-lend'];
    }
    
    // Check for subject-verb agreement
    if (/\b(he|she|it)\s+\w+[^s]\b/i.test(lowerError) && /\b(he|she|it)\s+\w+s\b/i.test(lowerCorrect)) {
      return ERROR_EXPLANATIONS.grammar['subject-verb-agreement'];
    }
    
    // Check for article issues
    if (/\b(a|an|the)\b/i.test(lowerCorrect) && !/\b(a|an|the)\b/i.test(lowerError)) {
      return ERROR_EXPLANATIONS.grammar['article-usage'];
    }

    // Check for present perfect vs past
    if (/\bhave\s+(been|had|done|gone|seen)\b/i.test(lowerCorrect) || 
        /\bhas\s+(been|had|done|gone|seen)\b/i.test(lowerCorrect)) {
      return ERROR_EXPLANATIONS.grammar['present-perfect-vs-past'];
    }

    return null;
  }

  // Predict likely errors based on user history
  getPredictedErrors(_exerciseType?: string, _topic?: string): PredictedError[] {
    const predictions: PredictedError[] = [];
    const recentErrors = this.errorHistory.filter(
      e => Date.now() - e.timestamp < 7 * 24 * 60 * 60 * 1000 // Last 7 days
    );

    // Count error frequencies
    const errorCounts: Record<string, number> = {};
    recentErrors.forEach(e => {
      const key = `${e.category}:${e.type}`;
      errorCounts[key] = (errorCounts[key] || 0) + 1;
    });

    // Find top error types
    const sortedErrors = Object.entries(errorCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

    sortedErrors.forEach(([key, count]) => {
      const [category, type] = key.split(':');
      const explanation = this.getDetailedExplanation(category, type);
      
      if (explanation) {
        const probability = Math.min(count / 10, 1); // Max 100%
        predictions.push({
          type,
          description: `Watch out for ${type.replace(/-/g, ' ')} errors`,
          descriptionEs: `Cuidado con errores de ${this.getSpanishErrorType(type)}`,
          probability,
          preventionTip: explanation.tip || explanation.explanation,
          preventionTipEs: explanation.tipEs || explanation.explanationEs,
        });
      }
    });

    return predictions;
  }

  private getSpanishErrorType(type: string): string {
    const translations: Record<string, string> = {
      'subject-verb-agreement': 'concordancia sujeto-verbo',
      'article-usage': 'uso de artículos',
      'tense-consistency': 'consistencia de tiempos',
      'present-perfect-vs-past': 'present perfect vs pasado',
      'make-vs-do': 'make vs do',
      'say-vs-tell': 'say vs tell',
      'double-letters': 'letras dobles',
      'ie-vs-ei': 'ie vs ei',
    };
    return translations[type] || type.replace(/-/g, ' ');
  }

  // Compare current performance with past
  compareWithPast(topic: string, currentAccuracy: number): PerformanceComparison {
    const key = `topic_history_${topic}`;
    const saved = localStorage.getItem(key);
    const history: number[] = saved ? JSON.parse(saved) : [];
    
    // Add current accuracy to history
    history.push(currentAccuracy);
    if (history.length > 20) history.shift(); // Keep last 20
    localStorage.setItem(key, JSON.stringify(history));

    const previousAccuracy = history.length > 1 
      ? history.slice(0, -1).reduce((a, b) => a + b, 0) / (history.length - 1)
      : currentAccuracy;

    const improvement = currentAccuracy - previousAccuracy;
    
    let trend: 'improving' | 'stable' | 'declining';
    let message: string;
    let messageEs: string;

    if (improvement > 5) {
      trend = 'improving';
      message = `Great progress! You improved by ${improvement.toFixed(0)}% in ${topic}!`;
      messageEs = `¡Gran progreso! Mejoraste ${improvement.toFixed(0)}% en ${topic}!`;
    } else if (improvement < -5) {
      trend = 'declining';
      message = `You seem to be struggling with ${topic}. Let's review it!`;
      messageEs = `Parece que ${topic} te está costando. ¡Vamos a repasarlo!`;
    } else {
      trend = 'stable';
      message = `Consistent performance in ${topic}. Keep practicing!`;
      messageEs = `Rendimiento consistente en ${topic}. ¡Sigue practicando!`;
    }

    return {
      topic,
      previousAccuracy,
      currentAccuracy,
      improvement,
      message,
      messageEs,
      trend,
    };
  }

  // Get encouraging message based on performance
  getEncouragingMessage(accuracy: number, _streak?: number): { message: string; messageEs: string } {
    if (accuracy >= 100) {
      return {
        message: "🌟 Perfect! You're mastering this!",
        messageEs: "🌟 ¡Perfecto! ¡Estás dominando esto!",
      };
    } else if (accuracy >= 90) {
      return {
        message: "🎯 Excellent! Almost perfect!",
        messageEs: "🎯 ¡Excelente! ¡Casi perfecto!",
      };
    } else if (accuracy >= 70) {
      return {
        message: "👍 Good job! Keep improving!",
        messageEs: "👍 ¡Buen trabajo! ¡Sigue mejorando!",
      };
    } else if (accuracy >= 50) {
      return {
        message: "💪 You're learning! Practice makes perfect!",
        messageEs: "💪 ¡Estás aprendiendo! ¡La práctica hace al maestro!",
      };
    } else {
      return {
        message: "🌱 Everyone starts somewhere. You'll get better!",
        messageEs: "🌱 Todos empezamos de algún lugar. ¡Mejorarás!",
      };
    }
  }

  // Get all explanations for a category
  getExplanationsForCategory(category: string): Record<string, DetailedFeedback> {
    return ERROR_EXPLANATIONS[category] || {};
  }
}

export const feedbackService = new FeedbackService();
export default feedbackService;
