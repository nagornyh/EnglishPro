/**
 * Analytics Service - Análisis inteligente del progreso del usuario
 * Detecta patrones, debilidades y genera recomendaciones personalizadas
 */

import db from './database';
import type { User } from '../types';

// Types
export interface SkillMetrics {
  skill: string;
  skillEs: string;
  accuracy: number;
  totalAttempts: number;
  correctAttempts: number;
  trend: 'improving' | 'stable' | 'declining';
  recentAccuracy: number; // Last 7 days
  weakAreas: string[];
}

export interface CategoryMetrics {
  category: string;
  categoryEs: string;
  mastery: number; // 0-100
  wordsLearned: number;
  wordsTotal: number;
  mistakeCount: number;
  commonMistakes: MistakePattern[];
}

export interface MistakePattern {
  type: string;
  description: string;
  count: number;
  examples: string[];
  suggestion: string;
}

export interface LearningInsight {
  type: 'strength' | 'weakness' | 'opportunity' | 'milestone';
  title: string;
  description: string;
  recommendation?: string;
  icon: string;
  priority: number;
}

export interface WeeklyReport {
  weekStart: Date;
  weekEnd: Date;
  totalXP: number;
  lessonsCompleted: number;
  wordsLearned: number;
  timeSpentMinutes: number;
  averageAccuracy: number;
  daysActive: number;
  skillProgress: SkillMetrics[];
  insights: LearningInsight[];
  comparedToLastWeek: {
    xp: number;
    lessons: number;
    accuracy: number;
    time: number;
  };
}

export interface StudyRecommendation {
  activity: string;
  reason: string;
  urgency: 'high' | 'medium' | 'low';
  estimatedTime: number; // minutes
  expectedImprovement: string;
}

// Constants
const SKILL_NAMES: Record<string, string> = {
  vocabulary: 'Vocabulario',
  grammar: 'Gramática',
  listening: 'Comprensión Auditiva',
  speaking: 'Pronunciación',
  reading: 'Lectura',
  writing: 'Escritura',
  translation: 'Traducción',
};

const STORAGE_KEY_PREFIX = 'analytics_';

// Helper functions
function getStorageKey(userId: string, key: string): string {
  return `${STORAGE_KEY_PREFIX}${userId}_${key}`;
}

function saveToStorage(userId: string, key: string, data: any): void {
  try {
    localStorage.setItem(getStorageKey(userId, key), JSON.stringify(data));
  } catch (e) {
    console.error('Error saving analytics data:', e);
  }
}

function loadFromStorage<T>(userId: string, key: string): T | null {
  try {
    const data = localStorage.getItem(getStorageKey(userId, key));
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Error loading analytics data:', e);
    return null;
  }
}

// Main Analytics Service
export const analyticsService = {
  /**
   * Track an activity result for analytics
   */
  async trackActivity(
    userId: string,
    activityType: string,
    category: string,
    correct: number,
    total: number,
    timeSpent: number,
    details?: Record<string, any>
  ): Promise<void> {
    const history = loadFromStorage<any[]>(userId, 'activity_history') || [];
    
    history.push({
      timestamp: new Date().toISOString(),
      activityType,
      category,
      correct,
      total,
      accuracy: total > 0 ? (correct / total) * 100 : 0,
      timeSpent,
      details,
    });

    // Keep only last 500 activities
    if (history.length > 500) {
      history.splice(0, history.length - 500);
    }

    saveToStorage(userId, 'activity_history', history);

    // Track mistakes
    if (details?.mistakes) {
      await this.trackMistakes(userId, details.mistakes);
    }
  },

  /**
   * Track specific mistakes for pattern analysis
   */
  async trackMistakes(
    userId: string,
    mistakes: Array<{ type: string; expected: string; actual: string; context?: string }>
  ): Promise<void> {
    const allMistakes = loadFromStorage<any[]>(userId, 'mistakes') || [];
    
    mistakes.forEach(mistake => {
      allMistakes.push({
        ...mistake,
        timestamp: new Date().toISOString(),
      });
    });

    // Keep only last 300 mistakes
    if (allMistakes.length > 300) {
      allMistakes.splice(0, allMistakes.length - 300);
    }

    saveToStorage(userId, 'mistakes', allMistakes);
  },

  /**
   * Get skill metrics for a user
   */
  getSkillMetrics(userId: string): SkillMetrics[] {
    const history = loadFromStorage<any[]>(userId, 'activity_history') || [];
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const skillMap = new Map<string, { correct: number; total: number; recent: { correct: number; total: number } }>();

    history.forEach(activity => {
      const skill = this.activityToSkill(activity.activityType);
      if (!skill) return;

      const current = skillMap.get(skill) || { correct: 0, total: 0, recent: { correct: 0, total: 0 } };
      current.correct += activity.correct;
      current.total += activity.total;

      if (new Date(activity.timestamp) >= weekAgo) {
        current.recent.correct += activity.correct;
        current.recent.total += activity.total;
      }

      skillMap.set(skill, current);
    });

    const metrics: SkillMetrics[] = [];

    skillMap.forEach((data, skill) => {
      const accuracy = data.total > 0 ? (data.correct / data.total) * 100 : 0;
      const recentAccuracy = data.recent.total > 0 ? (data.recent.correct / data.recent.total) * 100 : accuracy;
      
      let trend: 'improving' | 'stable' | 'declining' = 'stable';
      if (recentAccuracy > accuracy + 5) trend = 'improving';
      else if (recentAccuracy < accuracy - 5) trend = 'declining';

      metrics.push({
        skill,
        skillEs: SKILL_NAMES[skill] || skill,
        accuracy: Math.round(accuracy),
        totalAttempts: data.total,
        correctAttempts: data.correct,
        trend,
        recentAccuracy: Math.round(recentAccuracy),
        weakAreas: [], // Calculated below
      });
    });

    return metrics.sort((a, b) => b.totalAttempts - a.totalAttempts);
  },

  /**
   * Get weakness analysis
   */
  getWeaknessAnalysis(userId: string): { weakSkills: SkillMetrics[]; weakCategories: CategoryMetrics[]; patterns: MistakePattern[] } {
    const skills = this.getSkillMetrics(userId);
    const mistakes = loadFromStorage<any[]>(userId, 'mistakes') || [];

    // Find weak skills (accuracy < 70% or declining)
    const weakSkills = skills.filter(s => s.accuracy < 70 || s.trend === 'declining');

    // Analyze mistake patterns
    const patternMap = new Map<string, { count: number; examples: string[] }>();
    
    mistakes.forEach(m => {
      const key = m.type || 'general';
      const current = patternMap.get(key) || { count: 0, examples: [] };
      current.count++;
      if (current.examples.length < 3) {
        current.examples.push(`${m.expected} → ${m.actual}`);
      }
      patternMap.set(key, current);
    });

    const patterns: MistakePattern[] = [];
    patternMap.forEach((data, type) => {
      patterns.push({
        type,
        description: this.getMistakeDescription(type),
        count: data.count,
        examples: data.examples,
        suggestion: this.getMistakeSuggestion(type),
      });
    });

    // Sort by frequency
    patterns.sort((a, b) => b.count - a.count);

    return {
      weakSkills: weakSkills.slice(0, 3),
      weakCategories: [], // Would need vocabulary tracking data
      patterns: patterns.slice(0, 5),
    };
  },

  /**
   * Generate learning insights
   */
  generateInsights(user: User): LearningInsight[] {
    const insights: LearningInsight[] = [];
    const skills = this.getSkillMetrics(user.id);
    const weakness = this.getWeaknessAnalysis(user.id);

    // Strengths
    const strongSkills = skills.filter(s => s.accuracy >= 85 && s.totalAttempts >= 10);
    if (strongSkills.length > 0) {
      insights.push({
        type: 'strength',
        title: `Dominas ${strongSkills[0].skillEs}`,
        description: `Tu precisión en ${strongSkills[0].skillEs.toLowerCase()} es del ${strongSkills[0].accuracy}%. ¡Excelente trabajo!`,
        icon: '💪',
        priority: 3,
      });
    }

    // Weaknesses
    if (weakness.weakSkills.length > 0) {
      const weakest = weakness.weakSkills[0];
      insights.push({
        type: 'weakness',
        title: `${weakest.skillEs} necesita práctica`,
        description: `Tu precisión es del ${weakest.accuracy}%. Con práctica diaria puedes mejorar.`,
        recommendation: `Dedica 10 minutos diarios a ejercicios de ${weakest.skillEs.toLowerCase()}.`,
        icon: '🎯',
        priority: 1,
      });
    }

    // Streak milestone
    if (user.streakData.currentStreak >= 7) {
      insights.push({
        type: 'milestone',
        title: `¡Racha de ${user.streakData.currentStreak} días!`,
        description: 'La consistencia es clave para el aprendizaje. ¡Sigue así!',
        icon: '🔥',
        priority: 2,
      });
    }

    // Opportunity
    const inactiveSkills = ['vocabulary', 'grammar', 'listening', 'speaking', 'reading', 'writing']
      .filter(s => !skills.find(sk => sk.skill === s));
    
    if (inactiveSkills.length > 0) {
      insights.push({
        type: 'opportunity',
        title: `Explora ${SKILL_NAMES[inactiveSkills[0]]}`,
        description: `No has practicado ${SKILL_NAMES[inactiveSkills[0]].toLowerCase()} aún. ¡Es una gran oportunidad para crecer!`,
        icon: '🌟',
        priority: 4,
      });
    }

    // Improvement trend
    const improving = skills.filter(s => s.trend === 'improving');
    if (improving.length > 0) {
      insights.push({
        type: 'milestone',
        title: `Mejorando en ${improving[0].skillEs}`,
        description: `Tu precisión reciente ha subido. ¡El esfuerzo está dando frutos!`,
        icon: '📈',
        priority: 2,
      });
    }

    return insights.sort((a, b) => a.priority - b.priority).slice(0, 4);
  },

  /**
   * Get study recommendations
   */
  getStudyRecommendations(user: User): StudyRecommendation[] {
    const weakness = this.getWeaknessAnalysis(user.id);
    const recommendations: StudyRecommendation[] = [];

    // Based on weak skills
    weakness.weakSkills.forEach(skill => {
      recommendations.push({
        activity: this.skillToActivity(skill.skill),
        reason: `Tu precisión en ${skill.skillEs.toLowerCase()} es ${skill.accuracy}%`,
        urgency: skill.accuracy < 50 ? 'high' : skill.accuracy < 70 ? 'medium' : 'low',
        estimatedTime: 10,
        expectedImprovement: '+5-10% precisión',
      });
    });

    // Based on mistake patterns
    weakness.patterns.slice(0, 2).forEach(pattern => {
      recommendations.push({
        activity: this.patternToActivity(pattern.type),
        reason: `Cometiste ${pattern.count} errores de tipo "${pattern.description}"`,
        urgency: pattern.count > 10 ? 'high' : 'medium',
        estimatedTime: 15,
        expectedImprovement: 'Reducir errores comunes',
      });
    });

    // General recommendations
    if (recommendations.length < 3) {
      recommendations.push({
        activity: 'flashcards',
        reason: 'Repaso general de vocabulario',
        urgency: 'low',
        estimatedTime: 5,
        expectedImprovement: 'Mantener conocimientos',
      });
    }

    return recommendations.slice(0, 4);
  },

  /**
   * Generate weekly report
   */
  async generateWeeklyReport(user: User): Promise<WeeklyReport> {
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - 7);
    
    // Get daily stats for the week
    const dailyStats = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      const stats = await db.getDailyStats(user.id, dateStr);
      if (stats) dailyStats.push(stats);
    }

    const totalXP = dailyStats.reduce((sum, s) => sum + (s.xpEarned || 0), 0);
    const lessonsCompleted = dailyStats.reduce((sum, s) => sum + (s.lessonsCompleted || 0), 0);
    const wordsLearned = dailyStats.reduce((sum, s) => sum + (s.wordsReviewed || 0), 0);
    const timeSpentMinutes = dailyStats.reduce((sum, s) => sum + (s.timeSpentMinutes || 0), 0);
    const accuracies = dailyStats.filter(s => s.accuracy).map(s => s.accuracy!);
    const averageAccuracy = accuracies.length > 0 
      ? Math.round(accuracies.reduce((sum, a) => sum + a, 0) / accuracies.length)
      : 0;

    return {
      weekStart,
      weekEnd: now,
      totalXP,
      lessonsCompleted,
      wordsLearned,
      timeSpentMinutes,
      averageAccuracy,
      daysActive: dailyStats.length,
      skillProgress: this.getSkillMetrics(user.id),
      insights: this.generateInsights(user),
      comparedToLastWeek: {
        xp: 0, // Would need previous week data
        lessons: 0,
        accuracy: 0,
        time: 0,
      },
    };
  },

  // Helper methods
  activityToSkill(activityType: string): string | null {
    const mapping: Record<string, string> = {
      'flashcards': 'vocabulary',
      'multiple-choice': 'vocabulary',
      'match-pairs': 'vocabulary',
      'fill-blanks': 'grammar',
      'sentence-builder': 'grammar',
      'word-scramble': 'vocabulary',
      'translation': 'translation',
      'listening': 'listening',
      'speaking': 'speaking',
      'reading': 'reading',
      'writing': 'writing',
    };
    return mapping[activityType] || null;
  },

  skillToActivity(skill: string): string {
    const mapping: Record<string, string> = {
      'vocabulary': 'flashcards',
      'grammar': 'fill-blanks',
      'listening': 'listening',
      'speaking': 'speaking',
      'translation': 'translation',
      'reading': 'reading',
      'writing': 'writing',
    };
    return mapping[skill] || 'quiz';
  },

  patternToActivity(patternType: string): string {
    const mapping: Record<string, string> = {
      'spelling': 'word-scramble',
      'vocabulary': 'flashcards',
      'grammar': 'sentence-builder',
      'translation': 'translation',
      'tense': 'fill-blanks',
    };
    return mapping[patternType] || 'quiz';
  },

  getMistakeDescription(type: string): string {
    const descriptions: Record<string, string> = {
      'spelling': 'Errores de ortografía',
      'vocabulary': 'Confusión de vocabulario',
      'grammar': 'Errores gramaticales',
      'translation': 'Traducción incorrecta',
      'tense': 'Tiempo verbal incorrecto',
      'preposition': 'Uso de preposiciones',
      'article': 'Artículos',
      'word-order': 'Orden de palabras',
      'general': 'Errores generales',
    };
    return descriptions[type] || type;
  },

  getMistakeSuggestion(type: string): string {
    const suggestions: Record<string, string> = {
      'spelling': 'Practica escribiendo las palabras varias veces',
      'vocabulary': 'Usa flashcards para reforzar el significado',
      'grammar': 'Revisa las reglas gramaticales correspondientes',
      'translation': 'Aprende frases completas, no solo palabras',
      'tense': 'Estudia los marcadores temporales',
      'preposition': 'Memoriza las preposiciones con verbos comunes',
      'article': 'Practica con textos de lectura',
      'word-order': 'Estudia la estructura de oraciones en inglés',
      'general': 'Revisa el material y practica más',
    };
    return suggestions[type] || 'Practica más ejercicios de este tipo';
  },

  /**
   * Export all analytics data
   */
  exportAnalytics(userId: string): object {
    return {
      activityHistory: loadFromStorage(userId, 'activity_history'),
      mistakes: loadFromStorage(userId, 'mistakes'),
      exportDate: new Date().toISOString(),
    };
  },

  /**
   * Import analytics data
   */
  importAnalytics(userId: string, data: any): void {
    if (data.activityHistory) {
      saveToStorage(userId, 'activity_history', data.activityHistory);
    }
    if (data.mistakes) {
      saveToStorage(userId, 'mistakes', data.mistakes);
    }
  },

  /**
   * Clear all analytics data
   */
  clearAnalytics(userId: string): void {
    localStorage.removeItem(getStorageKey(userId, 'activity_history'));
    localStorage.removeItem(getStorageKey(userId, 'mistakes'));
  },
};

export default analyticsService;
