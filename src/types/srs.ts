// Spaced Repetition System Types

export interface ReviewCard {
  id: string;
  lessonId?: string;
  type: 'vocabulary' | 'grammar' | 'phrase' | 'idiom';
  front: {
    text: string;
    audio?: string;
    image?: string;
  };
  back: {
    text: string;
    translation: string;
    example?: string;
    notes?: string;
  };
  // SM-2 Algorithm fields
  easeFactor: number; // 1.3 - 2.5 (default 2.5)
  interval: number; // Days until next review
  repetitions: number; // Successful reviews in a row
  nextReview: string; // ISO date string
  lastReview?: string;
  // Stats
  totalReviews: number;
  correctReviews: number;
  lapses: number; // Times forgotten after learning
  createdAt: string;
}

export interface ReviewSession {
  id: string;
  date: string;
  userId: string;
  cardsReviewed: number;
  correctCount: number;
  duration: number; // seconds
  newCards: number;
  reviewedCards: number;
}

export interface ReviewQuality {
  value: 0 | 1 | 2 | 3 | 4 | 5;
  label: string;
  description: string;
  color: string;
}

export const REVIEW_QUALITIES: ReviewQuality[] = [
  { value: 0, label: 'Olvido total', description: 'No recordé nada', color: 'red' },
  { value: 1, label: 'Incorrecto', description: 'Respuesta incorrecta, pero lo reconocí', color: 'red' },
  { value: 2, label: 'Difícil', description: 'Correcto con mucha dificultad', color: 'orange' },
  { value: 3, label: 'Bien', description: 'Correcto con algo de esfuerzo', color: 'yellow' },
  { value: 4, label: 'Fácil', description: 'Correcto con poco esfuerzo', color: 'green' },
  { value: 5, label: 'Perfecto', description: 'Respuesta instantánea', color: 'emerald' },
];

export interface DailyReviewStats {
  date: string;
  userId: string;
  cardsReviewed: number;
  newCardsLearned: number;
  accuracy: number;
  timeSpent: number;
  streakMaintained: boolean;
}

export interface SRSSettings {
  newCardsPerDay: number;
  reviewsPerDay: number;
  learnSteps: number[]; // Minutes between learning steps
  graduatingInterval: number; // Days
  easyInterval: number; // Days
  lapseNewInterval: number; // Percentage of old interval after lapse
}

export const DEFAULT_SRS_SETTINGS: SRSSettings = {
  newCardsPerDay: 20,
  reviewsPerDay: 100,
  learnSteps: [1, 10], // 1 minute, then 10 minutes
  graduatingInterval: 1,
  easyInterval: 4,
  lapseNewInterval: 0.5,
};
