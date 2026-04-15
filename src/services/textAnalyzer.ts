// Text Analyzer Service for Production Exercises
// Analyzes written responses and provides feedback

export interface AnalysisResult {
  isCorrect: boolean;
  score: number; // 0-100
  similarity: number; // 0-1 for text comparison
  feedback: string[];
  corrections: Correction[];
  suggestions: string[];
  grammarIssues: GrammarIssue[];
  spellingErrors: SpellingError[];
}

export interface Correction {
  original: string;
  corrected: string;
  type: 'spelling' | 'grammar' | 'word-choice' | 'punctuation';
  explanation: string;
}

export interface GrammarIssue {
  text: string;
  issue: string;
  suggestion: string;
  rule: string;
}

export interface SpellingError {
  word: string;
  suggestions: string[];
  position: number;
}

// Common spelling mistakes mapping
const COMMON_MISSPELLINGS: Record<string, string> = {
  'recieve': 'receive',
  'occured': 'occurred',
  'seperate': 'separate',
  'definately': 'definitely',
  'accomodate': 'accommodate',
  'occassion': 'occasion',
  'independant': 'independent',
  'begining': 'beginning',
  'beleive': 'believe',
  'existance': 'existence',
  'goverment': 'government',
  'imediately': 'immediately',
  'necesary': 'necessary',
  'occurence': 'occurrence',
  'posession': 'possession',
  'refered': 'referred',
  'untill': 'until',
  'wierd': 'weird',
  'writting': 'writing',
  'tommorow': 'tomorrow',
  'tounge': 'tongue',
  'truely': 'truly',
  'usefull': 'useful',
  'wellcome': 'welcome',
  'wich': 'which',
  'wonderfull': 'wonderful',
  'basicly': 'basically',
  'diffrent': 'different',
  'enviroment': 'environment',
  'exersice': 'exercise',
  'finaly': 'finally',
  'foward': 'forward',
  'freind': 'friend',
  'happend': 'happened',
  'intresting': 'interesting',
  'knowlege': 'knowledge',
  'libary': 'library',
  'mispell': 'misspell',
  'noticable': 'noticeable',
  'paralell': 'parallel',
  'probaly': 'probably',
  'reccomend': 'recommend',
  'religous': 'religious',
  'rythm': 'rhythm',
  'succesful': 'successful',
  'suprised': 'surprised',
  'thier': 'their',
  'tought': 'thought',
};

// Common grammar patterns to check
const GRAMMAR_PATTERNS: Array<{
  pattern: RegExp;
  issue: string;
  rule: string;
  suggestion: string;
}> = [
  {
    pattern: /\bi\b(?!\s*(am|was|will|would|have|had|can|could|should|might|must|'m|'ll|'d|'ve))/gi,
    issue: 'Lowercase "i" should be capitalized',
    rule: 'The pronoun "I" is always capitalized in English',
    suggestion: 'I',
  },
  {
    pattern: /\bhe\s+don't\b/gi,
    issue: 'Subject-verb disagreement',
    rule: 'Third person singular uses "doesn\'t", not "don\'t"',
    suggestion: 'he doesn\'t',
  },
  {
    pattern: /\bshe\s+don't\b/gi,
    issue: 'Subject-verb disagreement',
    rule: 'Third person singular uses "doesn\'t", not "don\'t"',
    suggestion: 'she doesn\'t',
  },
  {
    pattern: /\bit\s+don't\b/gi,
    issue: 'Subject-verb disagreement',
    rule: 'Third person singular uses "doesn\'t", not "don\'t"',
    suggestion: 'it doesn\'t',
  },
  {
    pattern: /\bmore\s+better\b/gi,
    issue: 'Double comparative',
    rule: 'Use either "more" or "-er", not both',
    suggestion: 'better',
  },
  {
    pattern: /\bmost\s+best\b/gi,
    issue: 'Double superlative',
    rule: 'Use either "most" or "-est", not both',
    suggestion: 'best',
  },
  {
    pattern: /\bshould\s+of\b/gi,
    issue: 'Incorrect phrase',
    rule: '"Should of" should be "should have" (contracted: should\'ve)',
    suggestion: 'should have',
  },
  {
    pattern: /\bcould\s+of\b/gi,
    issue: 'Incorrect phrase',
    rule: '"Could of" should be "could have" (contracted: could\'ve)',
    suggestion: 'could have',
  },
  {
    pattern: /\bwould\s+of\b/gi,
    issue: 'Incorrect phrase',
    rule: '"Would of" should be "would have" (contracted: would\'ve)',
    suggestion: 'would have',
  },
  {
    pattern: /\byour\s+(welcome|the\s+best)\b/gi,
    issue: 'Your vs You\'re',
    rule: '"Your" is possessive, "You\'re" = "You are"',
    suggestion: 'you\'re',
  },
  {
    pattern: /\btheir\s+(going|coming|leaving)\b/gi,
    issue: 'Their vs They\'re',
    rule: '"Their" is possessive, "They\'re" = "They are"',
    suggestion: 'they\'re',
  },
  {
    pattern: /\bits\s+(a|the|going|coming)\b/gi,
    issue: 'Its vs It\'s',
    rule: '"Its" is possessive, "It\'s" = "It is"',
    suggestion: 'it\'s',
  },
  {
    pattern: /\ba\s+[aeiou]/gi,
    issue: 'Article usage',
    rule: 'Use "an" before words starting with a vowel sound',
    suggestion: 'an',
  },
];

class TextAnalyzerService {
  // Main analysis function
  analyzeText(userText: string, expectedAnswer?: string | string[]): AnalysisResult {
    const corrections: Correction[] = [];
    const grammarIssues: GrammarIssue[] = [];
    const spellingErrors: SpellingError[] = [];
    const feedback: string[] = [];
    const suggestions: string[] = [];
    
    // Normalize text
    const normalizedUser = this.normalizeText(userText);
    
    // Check spelling
    const words = userText.split(/\s+/);
    words.forEach((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
      if (COMMON_MISSPELLINGS[cleanWord]) {
        spellingErrors.push({
          word: cleanWord,
          suggestions: [COMMON_MISSPELLINGS[cleanWord]],
          position: index,
        });
        corrections.push({
          original: cleanWord,
          corrected: COMMON_MISSPELLINGS[cleanWord],
          type: 'spelling',
          explanation: `"${cleanWord}" should be spelled "${COMMON_MISSPELLINGS[cleanWord]}"`,
        });
      }
    });
    
    // Check grammar patterns
    GRAMMAR_PATTERNS.forEach(({ pattern, issue, rule, suggestion }) => {
      const matches = userText.match(pattern);
      if (matches) {
        matches.forEach(match => {
          grammarIssues.push({
            text: match,
            issue,
            suggestion,
            rule,
          });
          corrections.push({
            original: match,
            corrected: suggestion,
            type: 'grammar',
            explanation: rule,
          });
        });
      }
    });
    
    // Check punctuation
    if (userText.length > 0 && !/[.!?]$/.test(userText.trim())) {
      feedback.push('💡 Consider ending your sentence with proper punctuation (. ! ?)');
    }
    
    // Check capitalization of first letter
    if (userText.length > 0 && /^[a-z]/.test(userText)) {
      feedback.push('💡 Remember to capitalize the first letter of a sentence');
      corrections.push({
        original: userText[0],
        corrected: userText[0].toUpperCase(),
        type: 'punctuation',
        explanation: 'Capitalize the first letter of a sentence',
      });
    }
    
    // Compare with expected answer if provided
    let isCorrect = true;
    let score = 100;
    let similarity = 1;
    
    if (expectedAnswer) {
      const expectedArray = Array.isArray(expectedAnswer) ? expectedAnswer : [expectedAnswer];
      const normalizedExpected = expectedArray.map(a => this.normalizeText(a));
      
      // Check for exact match (ignoring case and extra spaces)
      const exactMatch = normalizedExpected.some(exp => 
        this.normalizeText(userText) === exp
      );
      
      if (exactMatch) {
        isCorrect = true;
        score = 100;
        similarity = 1;
        feedback.push('✅ ¡Perfecto! Tu respuesta es correcta.');
      } else {
        // Check for close match (fuzzy matching)
        const similarities = normalizedExpected.map(exp => 
          this.calculateSimilarity(normalizedUser, exp)
        );
        const maxSimilarity = Math.max(...similarities);
        similarity = maxSimilarity;
        
        if (maxSimilarity >= 0.9) {
          isCorrect = true;
          score = 95;
          feedback.push('✅ ¡Casi perfecto! Pequeños detalles de escritura.');
        } else if (maxSimilarity >= 0.7) {
          isCorrect = true;
          score = 80;
          feedback.push('✅ ¡Bien! Tu respuesta es aceptable pero podría mejorarse.');
          suggestions.push(`Una respuesta más precisa sería: "${expectedArray[0]}"`);
        } else if (maxSimilarity >= 0.5) {
          isCorrect = false;
          score = 50;
          feedback.push('⚠️ Tu respuesta tiene los elementos básicos pero necesita corrección.');
          suggestions.push(`La respuesta esperada era: "${expectedArray[0]}"`);
        } else {
          isCorrect = false;
          score = Math.round(maxSimilarity * 100);
          feedback.push('❌ Tu respuesta no coincide con lo esperado.');
          suggestions.push(`La respuesta correcta es: "${expectedArray[0]}"`);
        }
      }
    }
    
    // Deduct points for errors
    score = Math.max(0, score - (spellingErrors.length * 5) - (grammarIssues.length * 10));
    
    // Add general suggestions based on issues
    if (spellingErrors.length > 0) {
      suggestions.push(`📝 Revisa la ortografía de: ${spellingErrors.map(e => e.word).join(', ')}`);
    }
    if (grammarIssues.length > 0) {
      suggestions.push(`📖 Revisa las reglas gramaticales relacionadas con: ${grammarIssues.map(g => g.issue).join(', ')}`);
    }
    
    return {
      isCorrect: isCorrect && spellingErrors.length === 0 && grammarIssues.length === 0,
      score,
      similarity,
      feedback,
      corrections,
      suggestions,
      grammarIssues,
      spellingErrors,
    };
  }

  // Normalize text for comparison
  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/['']/g, "'")
      .replace(/[""]/g, '"')
      .replace(/[.!?,;:]+$/, '');
  }

  // Calculate similarity between two strings (Levenshtein-based)
  private calculateSimilarity(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const distance = this.levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
  }

  // Levenshtein distance
  private levenshteinDistance(str1: string, str2: string): number {
    const matrix: number[][] = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2[i - 1] === str1[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  // Check if response is acceptable (flexible matching)
  isAcceptable(userText: string, acceptableAnswers: string[], threshold = 0.8): boolean {
    const normalized = this.normalizeText(userText);
    
    return acceptableAnswers.some(answer => {
      const normalizedAnswer = this.normalizeText(answer);
      
      // Exact match
      if (normalized === normalizedAnswer) return true;
      
      // Similarity check
      return this.calculateSimilarity(normalized, normalizedAnswer) >= threshold;
    });
  }

  // Get word count
  getWordCount(text: string): number {
    return text.trim().split(/\s+/).filter(w => w.length > 0).length;
  }

  // Get sentence count
  getSentenceCount(text: string): number {
    return text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  }

  // Analyze writing complexity
  analyzeComplexity(text: string): {
    wordCount: number;
    sentenceCount: number;
    avgWordsPerSentence: number;
    uniqueWords: number;
    lexicalDiversity: number;
  } {
    const words = text.toLowerCase().split(/\s+/).filter(w => w.length > 0);
    const sentences = this.getSentenceCount(text);
    const uniqueWords = new Set(words.map(w => w.replace(/[^a-z]/g, ''))).size;
    
    return {
      wordCount: words.length,
      sentenceCount: sentences,
      avgWordsPerSentence: sentences > 0 ? words.length / sentences : 0,
      uniqueWords,
      lexicalDiversity: words.length > 0 ? uniqueWords / words.length : 0,
    };
  }
}

export const textAnalyzer = new TextAnalyzerService();
export default textAnalyzer;
