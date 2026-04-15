// Exercise Variation Service
// Ensures users see content in multiple formats to achieve deep learning

export type ExerciseFormat = 
  | 'flashcard' 
  | 'multiple-choice' 
  | 'fill-blank' 
  | 'translation' 
  | 'dictation'
  | 'word-scramble'
  | 'match-pairs'
  | 'open-writing';

export interface FormatHistory {
  contentId: string;
  formats: {
    format: ExerciseFormat;
    timestamp: number;
    wasCorrect: boolean;
  }[];
}

export interface SmartDistractor {
  text: string;
  reason: string; // Why this is a good distractor
  errorType?: string; // Related error type for feedback
}

// Common confusions for smart distractors
const CONFUSIONS: Record<string, SmartDistractor[]> = {
  // Articles
  'a': [
    { text: 'an', reason: 'Vowel sound confusion', errorType: 'article-usage' },
    { text: 'the', reason: 'Specific vs general', errorType: 'article-usage' },
    { text: '', reason: 'Missing article', errorType: 'article-usage' },
  ],
  'an': [
    { text: 'a', reason: 'Vowel sound confusion', errorType: 'article-usage' },
    { text: 'the', reason: 'Specific vs general', errorType: 'article-usage' },
  ],
  'the': [
    { text: 'a', reason: 'General vs specific', errorType: 'article-usage' },
    { text: 'an', reason: 'General vs specific', errorType: 'article-usage' },
    { text: '', reason: 'Zero article needed', errorType: 'article-usage' },
  ],

  // There/Their/They're
  'there': [
    { text: "their", reason: 'Possession vs location', errorType: 'spelling' },
    { text: "they're", reason: 'Contraction confusion', errorType: 'spelling' },
  ],
  'their': [
    { text: 'there', reason: 'Location vs possession', errorType: 'spelling' },
    { text: "they're", reason: 'Contraction confusion', errorType: 'spelling' },
  ],
  "they're": [
    { text: 'there', reason: 'Location vs contraction', errorType: 'spelling' },
    { text: 'their', reason: 'Possession vs contraction', errorType: 'spelling' },
  ],

  // Your/You're
  'your': [
    { text: "you're", reason: 'Possession vs contraction', errorType: 'spelling' },
  ],
  "you're": [
    { text: 'your', reason: 'Contraction vs possession', errorType: 'spelling' },
  ],

  // Its/It's
  'its': [
    { text: "it's", reason: 'Possession vs contraction', errorType: 'apostrophe-possession' },
  ],
  "it's": [
    { text: 'its', reason: 'Contraction vs possession', errorType: 'apostrophe-possession' },
  ],

  // Make/Do
  'make': [
    { text: 'do', reason: 'Make vs Do confusion', errorType: 'make-vs-do' },
  ],
  'do': [
    { text: 'make', reason: 'Do vs Make confusion', errorType: 'make-vs-do' },
  ],

  // Say/Tell
  'say': [
    { text: 'tell', reason: 'Say vs Tell confusion', errorType: 'say-vs-tell' },
    { text: 'speak', reason: 'Communication verb confusion' },
    { text: 'talk', reason: 'Communication verb confusion' },
  ],
  'tell': [
    { text: 'say', reason: 'Tell vs Say confusion', errorType: 'say-vs-tell' },
    { text: 'speak', reason: 'Communication verb confusion' },
  ],

  // Borrow/Lend
  'borrow': [
    { text: 'lend', reason: 'Direction confusion', errorType: 'borrow-vs-lend' },
  ],
  'lend': [
    { text: 'borrow', reason: 'Direction confusion', errorType: 'borrow-vs-lend' },
  ],

  // Present Perfect indicators
  'have': [
    { text: 'has', reason: 'Subject agreement', errorType: 'subject-verb-agreement' },
    { text: 'had', reason: 'Tense confusion', errorType: 'tense-consistency' },
  ],
  'has': [
    { text: 'have', reason: 'Subject agreement', errorType: 'subject-verb-agreement' },
    { text: 'had', reason: 'Tense confusion', errorType: 'tense-consistency' },
  ],

  // Since/For
  'since': [
    { text: 'for', reason: 'Point vs duration', errorType: 'present-perfect-vs-past' },
  ],
  'for': [
    { text: 'since', reason: 'Duration vs point', errorType: 'present-perfect-vs-past' },
  ],

  // To/Too/Two
  'to': [
    { text: 'too', reason: 'Preposition vs adverb', errorType: 'spelling' },
    { text: 'two', reason: 'Number confusion', errorType: 'spelling' },
  ],
  'too': [
    { text: 'to', reason: 'Adverb vs preposition', errorType: 'spelling' },
    { text: 'two', reason: 'Number confusion', errorType: 'spelling' },
  ],

  // Much/Many
  'much': [
    { text: 'many', reason: 'Uncountable vs countable', errorType: 'grammar' },
  ],
  'many': [
    { text: 'much', reason: 'Countable vs uncountable', errorType: 'grammar' },
  ],

  // Fewer/Less
  'fewer': [
    { text: 'less', reason: 'Countable vs uncountable', errorType: 'grammar' },
  ],
  'less': [
    { text: 'fewer', reason: 'Uncountable vs countable', errorType: 'grammar' },
  ],
};

// False friends (Spanish speakers)
const FALSE_FRIENDS_DISTRACTORS: Record<string, SmartDistractor[]> = {
  'actually': [
    { text: 'currently', reason: 'False friend: actualmente', errorType: 'false-friends' },
  ],
  'currently': [
    { text: 'actually', reason: 'False friend: actualmente', errorType: 'false-friends' },
  ],
  'sensible': [
    { text: 'sensitive', reason: 'False friend: sensible', errorType: 'false-friends' },
  ],
  'sensitive': [
    { text: 'sensible', reason: 'False friend: sensible', errorType: 'false-friends' },
  ],
  'library': [
    { text: 'bookstore', reason: 'False friend: librería', errorType: 'false-friends' },
  ],
  'embarrassed': [
    { text: 'pregnant', reason: 'False friend: embarazada', errorType: 'false-friends' },
  ],
  'success': [
    { text: 'event', reason: 'False friend: suceso', errorType: 'false-friends' },
  ],
  'realize': [
    { text: 'achieve', reason: 'False friend: realizar', errorType: 'false-friends' },
  ],
  'attend': [
    { text: 'assist', reason: 'False friend: atender', errorType: 'false-friends' },
  ],
  'assist': [
    { text: 'attend', reason: 'False friend: asistir', errorType: 'false-friends' },
  ],
};

// Format progression (from recognition to production)
const FORMAT_DIFFICULTY: Record<ExerciseFormat, number> = {
  'flashcard': 1,
  'multiple-choice': 2,
  'match-pairs': 2,
  'word-scramble': 3,
  'fill-blank': 4,
  'translation': 5,
  'dictation': 6,
  'open-writing': 7,
};

const HISTORY_KEY = 'exercise_format_history';

class ExerciseVariationService {
  private formatHistory: Map<string, FormatHistory> = new Map();

  constructor() {
    this.loadHistory();
  }

  private loadHistory(): void {
    const saved = localStorage.getItem(HISTORY_KEY);
    if (saved) {
      const entries: [string, FormatHistory][] = JSON.parse(saved);
      this.formatHistory = new Map(entries);
    }
  }

  private saveHistory(): void {
    const entries = Array.from(this.formatHistory.entries());
    // Keep only last 500 content items
    if (entries.length > 500) {
      entries.splice(0, entries.length - 500);
      this.formatHistory = new Map(entries);
    }
    localStorage.setItem(HISTORY_KEY, JSON.stringify(entries));
  }

  // Record that a content item was practiced in a format
  recordPractice(contentId: string, format: ExerciseFormat, wasCorrect: boolean): void {
    let history = this.formatHistory.get(contentId);
    if (!history) {
      history = { contentId, formats: [] };
    }
    
    history.formats.push({
      format,
      timestamp: Date.now(),
      wasCorrect,
    });

    // Keep only last 10 practices per content
    if (history.formats.length > 10) {
      history.formats.shift();
    }

    this.formatHistory.set(contentId, history);
    this.saveHistory();
  }

  // Get the next recommended format for content
  getNextFormat(contentId: string, availableFormats: ExerciseFormat[]): ExerciseFormat {
    const history = this.formatHistory.get(contentId);
    
    if (!history || history.formats.length === 0) {
      // New content: start with recognition
      return this.getEasiestFormat(availableFormats);
    }

    // Get recent formats (last 3)
    const recentFormats = history.formats
      .slice(-3)
      .map(f => f.format);

    // Get accuracy for this content
    const recentPractices = history.formats.slice(-5);
    const accuracy = recentPractices.filter(p => p.wasCorrect).length / recentPractices.length;

    // If struggling (< 60% accuracy), use easier format
    if (accuracy < 0.6) {
      const currentDifficulty = Math.min(...recentFormats.map(f => FORMAT_DIFFICULTY[f]));
      const easierFormats = availableFormats.filter(f => FORMAT_DIFFICULTY[f] <= currentDifficulty);
      return this.pickDifferentFormat(recentFormats, easierFormats.length > 0 ? easierFormats : availableFormats);
    }

    // If doing well (> 80% accuracy), progress to harder format
    if (accuracy > 0.8) {
      const currentDifficulty = Math.max(...recentFormats.map(f => FORMAT_DIFFICULTY[f]));
      const harderFormats = availableFormats.filter(f => FORMAT_DIFFICULTY[f] > currentDifficulty);
      if (harderFormats.length > 0) {
        return this.getEasiestFormat(harderFormats);
      }
    }

    // Otherwise, vary the format (avoid repeating)
    return this.pickDifferentFormat(recentFormats, availableFormats);
  }

  private getEasiestFormat(formats: ExerciseFormat[]): ExerciseFormat {
    return formats.reduce((easiest, format) => 
      FORMAT_DIFFICULTY[format] < FORMAT_DIFFICULTY[easiest] ? format : easiest
    );
  }

  private pickDifferentFormat(recent: ExerciseFormat[], available: ExerciseFormat[]): ExerciseFormat {
    // Filter out recently used formats if possible
    const notRecent = available.filter(f => !recent.includes(f));
    const pool = notRecent.length > 0 ? notRecent : available;
    
    // Random selection from pool
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // Generate smart distractors for multiple choice
  generateSmartDistractors(
    correctAnswer: string,
    count: number = 3,
    userErrorHistory?: string[]
  ): SmartDistractor[] {
    const distractors: SmartDistractor[] = [];
    const lowerAnswer = correctAnswer.toLowerCase();

    // Check for known confusions
    if (CONFUSIONS[lowerAnswer]) {
      distractors.push(...CONFUSIONS[lowerAnswer]);
    }

    // Check for false friends
    if (FALSE_FRIENDS_DISTRACTORS[lowerAnswer]) {
      distractors.push(...FALSE_FRIENDS_DISTRACTORS[lowerAnswer]);
    }

    // Add distractors based on user's error history
    if (userErrorHistory) {
      userErrorHistory.forEach(error => {
        if (!distractors.find(d => d.text === error)) {
          distractors.push({
            text: error,
            reason: 'Previous user error',
          });
        }
      });
    }

    // If we don't have enough, generate variations
    if (distractors.length < count) {
      const variations = this.generateVariations(correctAnswer);
      variations.forEach(v => {
        if (!distractors.find(d => d.text === v.text)) {
          distractors.push(v);
        }
      });
    }

    // Shuffle and return requested count
    return this.shuffleArray(distractors).slice(0, count);
  }

  private generateVariations(word: string): SmartDistractor[] {
    const variations: SmartDistractor[] = [];
    
    // Common spelling variations
    if (word.length > 3) {
      // Double letter removal/addition
      for (let i = 0; i < word.length - 1; i++) {
        if (word[i] === word[i + 1]) {
          variations.push({
            text: word.slice(0, i) + word.slice(i + 1),
            reason: 'Missing double letter',
          });
        } else {
          const doubled = word.slice(0, i + 1) + word[i] + word.slice(i + 1);
          variations.push({
            text: doubled,
            reason: 'Extra double letter',
          });
        }
      }

      // ie/ei swap
      if (word.includes('ie')) {
        variations.push({
          text: word.replace('ie', 'ei'),
          reason: 'ie/ei confusion',
          errorType: 'ie-vs-ei',
        });
      }
      if (word.includes('ei')) {
        variations.push({
          text: word.replace('ei', 'ie'),
          reason: 'ei/ie confusion',
          errorType: 'ie-vs-ei',
        });
      }
    }

    return variations;
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Check if user is ready for production exercises
  isReadyForProduction(contentId: string): boolean {
    const history = this.formatHistory.get(contentId);
    if (!history) return false;

    const recentPractices = history.formats.slice(-5);
    if (recentPractices.length < 3) return false;

    const accuracy = recentPractices.filter(p => p.wasCorrect).length / recentPractices.length;
    return accuracy >= 0.8;
  }

  // Get mastery level for content (0-100)
  getMasteryLevel(contentId: string): number {
    const history = this.formatHistory.get(contentId);
    if (!history || history.formats.length === 0) return 0;

    const practices = history.formats;
    
    // Factors: accuracy, variety of formats, recency
    const accuracy = practices.filter(p => p.wasCorrect).length / practices.length;
    const uniqueFormats = new Set(practices.map(p => p.format)).size;
    const formatVariety = Math.min(uniqueFormats / 4, 1); // Max at 4 different formats
    
    const lastPractice = practices[practices.length - 1];
    const daysSinceLastPractice = (Date.now() - lastPractice.timestamp) / (1000 * 60 * 60 * 24);
    const recencyBonus = Math.max(0, 1 - daysSinceLastPractice / 7); // Decays over 7 days

    // Weighted average
    const mastery = (accuracy * 0.5 + formatVariety * 0.3 + recencyBonus * 0.2) * 100;
    return Math.round(mastery);
  }

  // Balance recognition vs production exercises in a session
  balanceSessionFormats(
    contentItems: string[],
    sessionLength: number = 10
  ): { contentId: string; format: ExerciseFormat }[] {
    const session: { contentId: string; format: ExerciseFormat }[] = [];
    const allFormats: ExerciseFormat[] = ['flashcard', 'multiple-choice', 'fill-blank', 'translation'];

    // Start with easier formats (warm-up)
    const warmUpCount = Math.ceil(sessionLength * 0.2);
    const mainCount = Math.ceil(sessionLength * 0.6);
    const coolDownCount = sessionLength - warmUpCount - mainCount;

    // Warm-up: recognition exercises
    for (let i = 0; i < warmUpCount && i < contentItems.length; i++) {
      session.push({
        contentId: contentItems[i],
        format: Math.random() > 0.5 ? 'flashcard' : 'multiple-choice',
      });
    }

    // Main: progressive difficulty
    for (let i = warmUpCount; i < warmUpCount + mainCount && i < contentItems.length; i++) {
      const format = this.getNextFormat(contentItems[i], allFormats);
      session.push({ contentId: contentItems[i], format });
    }

    // Cool-down: mastered content
    const masteredContent = contentItems.filter(c => this.getMasteryLevel(c) > 70);
    for (let i = 0; i < coolDownCount; i++) {
      const content = masteredContent[i % masteredContent.length] || contentItems[i % contentItems.length];
      session.push({
        contentId: content,
        format: 'multiple-choice', // Easy format for confidence
      });
    }

    return session;
  }
}

export const exerciseVariationService = new ExerciseVariationService();
export default exerciseVariationService;
