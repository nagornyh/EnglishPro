// Trouble Words Service
// Tracks and manages words the user consistently struggles with

export interface TroubleWord {
  word: string;
  translation?: string;
  errorCount: number;
  successCount: number;
  lastError: number;
  lastSuccess?: number;
  errorTypes: string[];
  contexts: string[]; // Example sentences where errors occurred
  notes?: string;
}

export interface TroubleWordStats {
  totalTroubleWords: number;
  improvedThisWeek: number;
  needsAttention: number;
  masteredFromTrouble: number;
}

const TROUBLE_WORDS_KEY = 'trouble_words';
const ERROR_THRESHOLD = 2; // Minimum errors to be considered trouble
const MASTERY_RATIO = 3; // Success/error ratio to consider mastered

class TroubleWordsService {
  private troubleWords: Map<string, TroubleWord> = new Map();

  constructor() {
    this.loadTroubleWords();
  }

  private loadTroubleWords(): void {
    const saved = localStorage.getItem(TROUBLE_WORDS_KEY);
    if (saved) {
      const entries: [string, TroubleWord][] = JSON.parse(saved);
      this.troubleWords = new Map(entries);
    }
  }

  private saveTroubleWords(): void {
    const entries = Array.from(this.troubleWords.entries());
    localStorage.setItem(TROUBLE_WORDS_KEY, JSON.stringify(entries));
  }

  // Record an error with a word
  recordError(
    word: string,
    errorType: string,
    context?: string,
    translation?: string
  ): void {
    const key = word.toLowerCase().trim();
    let troubleWord = this.troubleWords.get(key);

    if (!troubleWord) {
      troubleWord = {
        word: key,
        translation,
        errorCount: 0,
        successCount: 0,
        lastError: Date.now(),
        errorTypes: [],
        contexts: [],
      };
    }

    troubleWord.errorCount++;
    troubleWord.lastError = Date.now();
    
    if (errorType && !troubleWord.errorTypes.includes(errorType)) {
      troubleWord.errorTypes.push(errorType);
    }
    
    if (context && !troubleWord.contexts.includes(context)) {
      troubleWord.contexts.push(context);
      // Keep only last 5 contexts
      if (troubleWord.contexts.length > 5) {
        troubleWord.contexts.shift();
      }
    }

    if (translation && !troubleWord.translation) {
      troubleWord.translation = translation;
    }

    this.troubleWords.set(key, troubleWord);
    this.saveTroubleWords();
  }

  // Record a success with a word
  recordSuccess(word: string): void {
    const key = word.toLowerCase().trim();
    const troubleWord = this.troubleWords.get(key);

    if (troubleWord) {
      troubleWord.successCount++;
      troubleWord.lastSuccess = Date.now();
      this.troubleWords.set(key, troubleWord);
      this.saveTroubleWords();
    }
  }

  // Get all trouble words (above error threshold)
  getTroubleWords(): TroubleWord[] {
    return Array.from(this.troubleWords.values())
      .filter(tw => tw.errorCount >= ERROR_THRESHOLD)
      .filter(tw => !this.isMastered(tw))
      .sort((a, b) => {
        // Sort by: most recent error, then by error count
        const recencyScore = (b.lastError - a.lastError) / (1000 * 60 * 60 * 24); // Days
        const errorScore = b.errorCount - a.errorCount;
        return errorScore + recencyScore * 0.1;
      });
  }

  // Get words that need urgent attention (many errors, few successes)
  getUrgentWords(limit: number = 10): TroubleWord[] {
    return this.getTroubleWords()
      .filter(tw => tw.successCount < tw.errorCount)
      .slice(0, limit);
  }

  // Get words for night review (errors from today)
  getNightReviewWords(): TroubleWord[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startOfDay = today.getTime();

    return Array.from(this.troubleWords.values())
      .filter(tw => tw.lastError >= startOfDay)
      .sort((a, b) => b.lastError - a.lastError);
  }

  // Check if a word is mastered
  private isMastered(troubleWord: TroubleWord): boolean {
    return troubleWord.successCount >= troubleWord.errorCount * MASTERY_RATIO;
  }

  // Get mastered trouble words (for celebration)
  getMasteredWords(): TroubleWord[] {
    return Array.from(this.troubleWords.values())
      .filter(tw => tw.errorCount >= ERROR_THRESHOLD)
      .filter(tw => this.isMastered(tw));
  }

  // Get stats about trouble words
  getStats(): TroubleWordStats {
    const allTrouble = Array.from(this.troubleWords.values())
      .filter(tw => tw.errorCount >= ERROR_THRESHOLD);

    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const improvedThisWeek = allTrouble.filter(tw => 
      tw.lastSuccess && tw.lastSuccess > oneWeekAgo && tw.successCount > 0
    ).length;

    return {
      totalTroubleWords: allTrouble.filter(tw => !this.isMastered(tw)).length,
      improvedThisWeek,
      needsAttention: allTrouble.filter(tw => 
        tw.successCount < tw.errorCount && !this.isMastered(tw)
      ).length,
      masteredFromTrouble: allTrouble.filter(tw => this.isMastered(tw)).length,
    };
  }

  // Check if a word is a trouble word
  isTroubleWord(word: string): boolean {
    const key = word.toLowerCase().trim();
    const troubleWord = this.troubleWords.get(key);
    if (!troubleWord) return false;
    return troubleWord.errorCount >= ERROR_THRESHOLD && !this.isMastered(troubleWord);
  }

  // Get improvement percentage for a word
  getImprovementPercentage(word: string): number {
    const key = word.toLowerCase().trim();
    const troubleWord = this.troubleWords.get(key);
    if (!troubleWord || troubleWord.errorCount === 0) return 0;

    const totalAttempts = troubleWord.errorCount + troubleWord.successCount;
    return Math.round((troubleWord.successCount / totalAttempts) * 100);
  }

  // Add a note to a trouble word
  addNote(word: string, note: string): void {
    const key = word.toLowerCase().trim();
    const troubleWord = this.troubleWords.get(key);
    if (troubleWord) {
      troubleWord.notes = note;
      this.troubleWords.set(key, troubleWord);
      this.saveTroubleWords();
    }
  }

  // Get practice sentences for a trouble word
  getPracticeSentences(word: string): string[] {
    const key = word.toLowerCase().trim();
    const troubleWord = this.troubleWords.get(key);
    if (!troubleWord) return [];

    return troubleWord.contexts;
  }

  // Clear mastered words from history
  clearMasteredWords(): number {
    const mastered = this.getMasteredWords();
    mastered.forEach(tw => {
      this.troubleWords.delete(tw.word);
    });
    this.saveTroubleWords();
    return mastered.length;
  }

  // Export trouble words for review
  exportTroubleWords(): string {
    const words = this.getTroubleWords();
    return words.map(tw => 
      `${tw.word}${tw.translation ? ` - ${tw.translation}` : ''}\n` +
      `  Errors: ${tw.errorCount}, Successes: ${tw.successCount}\n` +
      `  Types: ${tw.errorTypes.join(', ')}\n` +
      `  Contexts: ${tw.contexts.join('; ')}\n`
    ).join('\n');
  }
}

export const troubleWordsService = new TroubleWordsService();
export default troubleWordsService;
