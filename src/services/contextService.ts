// Contextual Examples Service
// Generates personalized examples based on user interests and profession

export interface UserInterests {
  profession?: string;
  hobbies: string[];
  topics: string[];
  goals: string[];
}

export interface ContextualExample {
  sentence: string;
  translation: string;
  context: string;
  vocabulary: string[];
}

// Profession-based vocabulary and contexts
const professionContexts: Record<string, {
  vocabulary: string[];
  scenarios: string[];
  collocations: string[];
}> = {
  software: {
    vocabulary: ['deploy', 'debug', 'refactor', 'implement', 'sprint', 'repository', 'commit', 'merge', 'pull request', 'code review'],
    scenarios: ['team meeting', 'code review', 'client presentation', 'debugging session', 'sprint planning'],
    collocations: ['run tests', 'push code', 'fix bugs', 'ship features', 'meet deadlines'],
  },
  marketing: {
    vocabulary: ['campaign', 'engagement', 'conversion', 'brand', 'target audience', 'metrics', 'ROI', 'content', 'lead', 'funnel'],
    scenarios: ['pitch meeting', 'campaign planning', 'analytics review', 'client call', 'brainstorming session'],
    collocations: ['run a campaign', 'increase engagement', 'drive conversions', 'build brand awareness', 'generate leads'],
  },
  healthcare: {
    vocabulary: ['patient', 'diagnosis', 'treatment', 'symptoms', 'prescription', 'vital signs', 'medical history', 'referral', 'consultation'],
    scenarios: ['patient consultation', 'team rounds', 'medical conference', 'emergency situation', 'follow-up appointment'],
    collocations: ['take vitals', 'run tests', 'prescribe medication', 'schedule appointment', 'review results'],
  },
  finance: {
    vocabulary: ['investment', 'portfolio', 'assets', 'liabilities', 'revenue', 'budget', 'forecast', 'audit', 'compliance', 'stakeholder'],
    scenarios: ['quarterly review', 'budget meeting', 'client consultation', 'audit preparation', 'investment pitch'],
    collocations: ['manage portfolio', 'allocate resources', 'meet targets', 'reduce costs', 'increase revenue'],
  },
  education: {
    vocabulary: ['curriculum', 'assessment', 'lesson plan', 'learning outcomes', 'engagement', 'feedback', 'differentiation', 'rubric'],
    scenarios: ['classroom teaching', 'parent meeting', 'staff meeting', 'student conference', 'professional development'],
    collocations: ['deliver lesson', 'assess progress', 'provide feedback', 'meet standards', 'engage students'],
  },
  general: {
    vocabulary: ['meeting', 'project', 'deadline', 'team', 'goal', 'challenge', 'solution', 'progress', 'feedback', 'collaboration'],
    scenarios: ['office meeting', 'project update', 'team discussion', 'performance review', 'networking event'],
    collocations: ['meet deadline', 'achieve goals', 'solve problems', 'provide updates', 'work together'],
  },
};

// Hobby-based contexts
const hobbyContexts: Record<string, {
  vocabulary: string[];
  scenarios: string[];
}> = {
  sports: {
    vocabulary: ['training', 'competition', 'score', 'team', 'coach', 'match', 'tournament', 'fitness', 'workout'],
    scenarios: ['gym conversation', 'sports event', 'training session', 'team meeting'],
  },
  music: {
    vocabulary: ['concert', 'rehearsal', 'performance', 'rhythm', 'melody', 'instrument', 'band', 'practice'],
    scenarios: ['concert discussion', 'music lesson', 'band practice', 'record store'],
  },
  travel: {
    vocabulary: ['destination', 'itinerary', 'reservation', 'flight', 'accommodation', 'excursion', 'local', 'cuisine'],
    scenarios: ['travel planning', 'airport', 'hotel check-in', 'tour guide', 'restaurant abroad'],
  },
  cooking: {
    vocabulary: ['recipe', 'ingredients', 'preparation', 'seasoning', 'technique', 'cuisine', 'dish', 'flavor'],
    scenarios: ['cooking class', 'grocery shopping', 'recipe discussion', 'restaurant review'],
  },
  technology: {
    vocabulary: ['gadget', 'app', 'software', 'update', 'feature', 'device', 'innovation', 'tech'],
    scenarios: ['tech store', 'product review', 'troubleshooting', 'new device setup'],
  },
  reading: {
    vocabulary: ['novel', 'author', 'chapter', 'plot', 'character', 'genre', 'review', 'recommendation'],
    scenarios: ['book club', 'library', 'bookstore', 'discussion group'],
  },
};

// Template sentences for different grammar structures
const sentenceTemplates: Record<string, string[]> = {
  present_simple: [
    "I usually {verb} {object} every {time_period}.",
    "Our team {verb}s {object} during {scenario}.",
    "A good {profession} always {verb}s {object}.",
    "{Subject} often {verb}s when {condition}.",
  ],
  present_continuous: [
    "I'm currently {verb}ing {object}.",
    "We're {verb}ing {object} this week.",
    "The team is {verb}ing on a new {object}.",
    "Right now, I'm {verb}ing {object} for {purpose}.",
  ],
  past_simple: [
    "Yesterday, I {verb_past} {object}.",
    "Last week, we {verb_past} {object} successfully.",
    "During the meeting, I {verb_past} {object}.",
    "When I started, I {verb_past} {object}.",
  ],
  present_perfect: [
    "I have {verb_pp} {object} many times.",
    "We have already {verb_pp} {object} this month.",
    "I've never {verb_pp} {object} before.",
    "Have you ever {verb_pp} {object}?",
  ],
  future: [
    "I will {verb} {object} tomorrow.",
    "We're going to {verb} {object} next week.",
    "I'll {verb} {object} after the meeting.",
    "We plan to {verb} {object} soon.",
  ],
  conditionals: [
    "If I {verb} {object}, I will {result}.",
    "If I had more time, I would {verb} {object}.",
    "I would {verb} {object} if I could.",
    "Unless we {verb} {object}, we won't {result}.",
  ],
  modals: [
    "You should {verb} {object} before the deadline.",
    "We might {verb} {object} next quarter.",
    "You must {verb} {object} to succeed.",
    "Could you {verb} {object} for me?",
  ],
};

class ContextService {
  private userInterests: UserInterests | null = null;

  setUserInterests(interests: UserInterests) {
    this.userInterests = interests;
    this.saveToStorage();
  }

  getUserInterests(): UserInterests | null {
    if (!this.userInterests) {
      this.loadFromStorage();
    }
    return this.userInterests;
  }

  private saveToStorage() {
    if (this.userInterests) {
      localStorage.setItem('user_interests', JSON.stringify(this.userInterests));
    }
  }

  private loadFromStorage() {
    const stored = localStorage.getItem('user_interests');
    if (stored) {
      this.userInterests = JSON.parse(stored);
    }
  }

  // Generate contextual examples based on user interests
  generateExamples(
    grammarTopic: string,
    count: number = 5
  ): ContextualExample[] {
    const interests = this.getUserInterests();
    const examples: ContextualExample[] = [];

    // Get profession context or use general
    const profContext = interests?.profession
      ? professionContexts[interests.profession] || professionContexts.general
      : professionContexts.general;

    // Get hobby contexts
    const hobbyContextsList = interests?.hobbies
      ? interests.hobbies
          .map(h => hobbyContexts[h])
          .filter(Boolean)
      : [];

    // Combine vocabulary and scenarios
    const allVocabulary = [
      ...profContext.vocabulary,
      ...hobbyContextsList.flatMap(h => h.vocabulary),
    ];
    const allScenarios = [
      ...profContext.scenarios,
      ...hobbyContextsList.flatMap(h => h.scenarios),
    ];
    const allCollocations = profContext.collocations || [];

    // Get templates for the grammar topic
    const templates = sentenceTemplates[grammarTopic] || sentenceTemplates.present_simple;

    for (let i = 0; i < count; i++) {
      const template = templates[Math.floor(Math.random() * templates.length)];
      const scenario = allScenarios[Math.floor(Math.random() * allScenarios.length)];
      const vocab = this.selectRandomItems(allVocabulary, 2);
      const collocation = allCollocations[Math.floor(Math.random() * allCollocations.length)];

      const example = this.fillTemplate(template, {
        verb: collocation?.split(' ')[0] || vocab[0],
        object: collocation?.split(' ').slice(1).join(' ') || vocab[1],
        scenario,
        profession: interests?.profession || 'professional',
      });

      examples.push({
        sentence: example.sentence,
        translation: example.translation,
        context: scenario,
        vocabulary: vocab,
      });
    }

    return examples;
  }

  private selectRandomItems<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  private fillTemplate(
    template: string,
    data: Record<string, string>
  ): { sentence: string; translation: string } {
    let sentence = template;

    // Simple replacements
    Object.entries(data).forEach(([key, value]) => {
      sentence = sentence.replace(new RegExp(`{${key}}`, 'g'), value);
    });

    // Handle verb forms
    sentence = sentence.replace(/{verb_past}/g, this.getPastForm(data.verb || 'work'));
    sentence = sentence.replace(/{verb_pp}/g, this.getPastParticiple(data.verb || 'work'));
    sentence = sentence.replace(/{verb}s/g, this.getThirdPerson(data.verb || 'work'));

    // Clean up any remaining placeholders
    sentence = sentence.replace(/{[^}]+}/g, '...');

    return {
      sentence,
      translation: '(Traducción contextual)', // Would need proper translation service
    };
  }

  private getPastForm(verb: string): string {
    const irregulars: Record<string, string> = {
      run: 'ran', write: 'wrote', make: 'made', take: 'took',
      give: 'gave', see: 'saw', go: 'went', do: 'did',
      have: 'had', meet: 'met', send: 'sent', build: 'built',
    };
    return irregulars[verb] || verb + 'ed';
  }

  private getPastParticiple(verb: string): string {
    const irregulars: Record<string, string> = {
      run: 'run', write: 'written', make: 'made', take: 'taken',
      give: 'given', see: 'seen', go: 'gone', do: 'done',
      have: 'had', meet: 'met', send: 'sent', build: 'built',
    };
    return irregulars[verb] || verb + 'ed';
  }

  private getThirdPerson(verb: string): string {
    if (verb.endsWith('s') || verb.endsWith('sh') || verb.endsWith('ch') || verb.endsWith('x') || verb.endsWith('o')) {
      return verb + 'es';
    }
    if (verb.endsWith('y') && !/[aeiou]y$/.test(verb)) {
      return verb.slice(0, -1) + 'ies';
    }
    return verb + 's';
  }

  // Get vocabulary relevant to user's context
  getRelevantVocabulary(_topic?: string): string[] {
    const interests = this.getUserInterests();
    if (!interests) return [];

    const profContext = interests.profession
      ? professionContexts[interests.profession]
      : professionContexts.general;

    const hobbyVocab = interests.hobbies
      .flatMap(h => hobbyContexts[h]?.vocabulary || []);

    return [...new Set([...profContext.vocabulary, ...hobbyVocab])];
  }

  // Get scenarios relevant to user's context
  getRelevantScenarios(): string[] {
    const interests = this.getUserInterests();
    if (!interests) return [];

    const profContext = interests.profession
      ? professionContexts[interests.profession]
      : professionContexts.general;

    const hobbyScenarios = interests.hobbies
      .flatMap(h => hobbyContexts[h]?.scenarios || []);

    return [...new Set([...profContext.scenarios, ...hobbyScenarios])];
  }

  // Get available professions
  static getProfessions(): string[] {
    return Object.keys(professionContexts);
  }

  // Get available hobbies
  static getHobbies(): string[] {
    return Object.keys(hobbyContexts);
  }
}

// Singleton instance
const contextService = new ContextService();
export default contextService;

export { professionContexts, hobbyContexts };
