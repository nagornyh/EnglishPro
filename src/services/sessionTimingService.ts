// Session Timing Service
// Manages optimal timing, fatigue detection, and session structure

export interface SessionState {
  startTime: number;
  exerciseCount: number;
  correctCount: number;
  streakLength: number;
  responseTimes: number[]; // Last N response times in ms
  lastBreakTime?: number;
  pausedTime: number; // Total time paused
}

export interface TimingRecommendation {
  action: 'continue' | 'short-break' | 'long-break' | 'end-session';
  reason: string;
  breakDuration?: number; // In minutes
  encouragement?: string;
}

export interface SessionSummary {
  duration: number; // In minutes
  exercisesCompleted: number;
  accuracy: number;
  averageResponseTime: number;
  longestStreak: number;
  fatigueEvents: number;
  focusScore: number; // 0-100
}

const SESSION_KEY = 'current_session';
const HISTORY_KEY = 'session_history';

// Timing thresholds
const OPTIMAL_SESSION_LENGTH = 20 * 60 * 1000; // 20 minutes
const MAX_SESSION_LENGTH = 45 * 60 * 1000; // 45 minutes
const SHORT_BREAK_INTERVAL = 10 * 60 * 1000; // 10 minutes
const RESPONSE_TIME_THRESHOLD = 1.5; // 150% of baseline = fatigue indicator

class SessionTimingService {
  private session: SessionState | null = null;
  private baselineResponseTime: number = 3000; // Will be calculated from history
  private longestStreak: number = 0;
  private fatigueEvents: number = 0;

  constructor() {
    this.loadSession();
    this.loadBaseline();
  }

  private loadSession(): void {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      this.session = JSON.parse(saved);
    }
  }

  private saveSession(): void {
    if (this.session) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(this.session));
    }
  }

  private loadBaseline(): void {
    const history = localStorage.getItem(HISTORY_KEY);
    if (history) {
      const sessions: SessionSummary[] = JSON.parse(history);
      if (sessions.length > 0) {
        // Use average of last 5 sessions
        const recent = sessions.slice(-5);
        const avgResponseTime = recent.reduce((sum, s) => sum + s.averageResponseTime, 0) / recent.length;
        this.baselineResponseTime = avgResponseTime || 3000;
      }
    }
  }

  // Start a new session
  startSession(): void {
    this.session = {
      startTime: Date.now(),
      exerciseCount: 0,
      correctCount: 0,
      streakLength: 0,
      responseTimes: [],
      pausedTime: 0,
    };
    this.longestStreak = 0;
    this.fatigueEvents = 0;
    this.saveSession();
  }

  // Record an exercise completion
  recordExercise(wasCorrect: boolean, responseTime: number): TimingRecommendation {
    if (!this.session) {
      this.startSession();
    }

    this.session!.exerciseCount++;
    if (wasCorrect) {
      this.session!.correctCount++;
      this.session!.streakLength++;
      if (this.session!.streakLength > this.longestStreak) {
        this.longestStreak = this.session!.streakLength;
      }
    } else {
      this.session!.streakLength = 0;
    }

    // Track response time (keep last 10)
    this.session!.responseTimes.push(responseTime);
    if (this.session!.responseTimes.length > 10) {
      this.session!.responseTimes.shift();
    }

    this.saveSession();
    return this.checkTiming();
  }

  // Record a break taken
  recordBreak(duration: number): void {
    if (this.session) {
      this.session.lastBreakTime = Date.now();
      this.session.pausedTime += duration;
      this.saveSession();
    }
  }

  // Check timing and provide recommendations
  private checkTiming(): TimingRecommendation {
    if (!this.session) {
      return { action: 'continue', reason: 'No active session' };
    }

    const activeTime = Date.now() - this.session.startTime - this.session.pausedTime;
    const timeSinceBreak = this.session.lastBreakTime 
      ? Date.now() - this.session.lastBreakTime 
      : activeTime;

    // Check for fatigue (response time increase)
    const isFatigued = this.detectFatigue();
    if (isFatigued) {
      this.fatigueEvents++;
    }

    // End session if too long
    if (activeTime > MAX_SESSION_LENGTH) {
      return {
        action: 'end-session',
        reason: '¡Gran sesión! Has practicado por más de 45 minutos.',
        encouragement: '🏆 Tu cerebro necesita descanso para consolidar lo aprendido.',
      };
    }

    // Suggest long break if optimal time exceeded and fatigued
    if (activeTime > OPTIMAL_SESSION_LENGTH && isFatigued) {
      return {
        action: 'long-break',
        reason: 'Llevas un buen rato. Detectamos señales de fatiga.',
        breakDuration: 15,
        encouragement: '🧘 Un descanso largo ayudará a que recuerdes mejor.',
      };
    }

    // Suggest short break if interval exceeded
    if (timeSinceBreak > SHORT_BREAK_INTERVAL) {
      return {
        action: 'short-break',
        reason: '10 minutos de concentración. ¡Buen trabajo!',
        breakDuration: 2,
        encouragement: '☕ Un breve descanso mejora la retención.',
      };
    }

    // Suggest break if fatigued even if time is okay
    if (isFatigued && this.session.exerciseCount > 10) {
      return {
        action: 'short-break',
        reason: 'Tus tiempos de respuesta están aumentando.',
        breakDuration: 3,
        encouragement: '🌟 Descansa los ojos un momento.',
      };
    }

    // Continue with encouragement
    const encouragements = this.getContextualEncouragement();
    return {
      action: 'continue',
      reason: 'Todo bien',
      encouragement: encouragements,
    };
  }

  // Detect fatigue based on response times
  private detectFatigue(): boolean {
    if (!this.session || this.session.responseTimes.length < 5) {
      return false;
    }

    const recent = this.session.responseTimes.slice(-3);
    const avgRecent = recent.reduce((a, b) => a + b, 0) / recent.length;
    
    return avgRecent > this.baselineResponseTime * RESPONSE_TIME_THRESHOLD;
  }

  // Get contextual encouragement based on performance
  private getContextualEncouragement(): string {
    if (!this.session) return '';

    const accuracy = this.session.correctCount / Math.max(this.session.exerciseCount, 1);
    const streak = this.session.streakLength;

    if (streak >= 10) {
      return '🔥 ¡Racha de 10! ¡Estás en llamas!';
    }
    if (streak >= 5) {
      return '⭐ ¡5 correctas seguidas! ¡Sigue así!';
    }
    if (accuracy >= 0.9 && this.session.exerciseCount >= 5) {
      return '🎯 ¡Precisión excelente!';
    }
    if (accuracy >= 0.7 && this.session.exerciseCount >= 5) {
      return '💪 ¡Buen progreso!';
    }
    if (this.session.exerciseCount === 5) {
      return '🚀 ¡Ya llevas 5 ejercicios!';
    }
    if (this.session.exerciseCount === 10) {
      return '🎉 ¡10 ejercicios completados!';
    }

    return '';
  }

  // End session and save summary
  endSession(): SessionSummary {
    if (!this.session) {
      return this.getEmptySummary();
    }

    const duration = (Date.now() - this.session.startTime - this.session.pausedTime) / 60000;
    const accuracy = this.session.exerciseCount > 0 
      ? this.session.correctCount / this.session.exerciseCount 
      : 0;
    const avgResponseTime = this.session.responseTimes.length > 0
      ? this.session.responseTimes.reduce((a, b) => a + b, 0) / this.session.responseTimes.length
      : 0;

    // Calculate focus score
    const focusScore = this.calculateFocusScore();

    const summary: SessionSummary = {
      duration,
      exercisesCompleted: this.session.exerciseCount,
      accuracy,
      averageResponseTime: avgResponseTime,
      longestStreak: this.longestStreak,
      fatigueEvents: this.fatigueEvents,
      focusScore,
    };

    // Save to history
    this.saveSessionHistory(summary);

    // Clear current session
    this.session = null;
    sessionStorage.removeItem(SESSION_KEY);

    return summary;
  }

  private calculateFocusScore(): number {
    if (!this.session || this.session.exerciseCount === 0) return 0;

    // Factors: accuracy, consistency (response time variance), streak ratio
    const accuracy = this.session.correctCount / this.session.exerciseCount;
    
    // Response time consistency
    let consistency = 1;
    if (this.session.responseTimes.length > 2) {
      const avg = this.session.responseTimes.reduce((a, b) => a + b, 0) / this.session.responseTimes.length;
      const variance = this.session.responseTimes.reduce((sum, t) => sum + Math.pow(t - avg, 2), 0) / this.session.responseTimes.length;
      const stdDev = Math.sqrt(variance);
      consistency = Math.max(0, 1 - (stdDev / avg));
    }

    // Fatigue penalty
    const fatiguePenalty = Math.min(this.fatigueEvents * 0.05, 0.3);

    const focusScore = (accuracy * 0.5 + consistency * 0.3 + (1 - fatiguePenalty) * 0.2) * 100;
    return Math.round(focusScore);
  }

  private saveSessionHistory(summary: SessionSummary): void {
    const history = localStorage.getItem(HISTORY_KEY);
    let sessions: SessionSummary[] = history ? JSON.parse(history) : [];
    
    sessions.push(summary);
    
    // Keep only last 30 sessions
    if (sessions.length > 30) {
      sessions = sessions.slice(-30);
    }

    localStorage.setItem(HISTORY_KEY, JSON.stringify(sessions));
  }

  private getEmptySummary(): SessionSummary {
    return {
      duration: 0,
      exercisesCompleted: 0,
      accuracy: 0,
      averageResponseTime: 0,
      longestStreak: 0,
      fatigueEvents: 0,
      focusScore: 0,
    };
  }

  // Get optimal practice times based on history
  getOptimalPracticeTimes(): { hour: number; score: number }[] {
    const history = localStorage.getItem(HISTORY_KEY);
    if (!history) return [];

    const sessions: (SessionSummary & { startTime?: number })[] = JSON.parse(history);
    
    // Group by hour of day
    const hourStats: Map<number, { total: number; count: number }> = new Map();
    
    sessions.forEach(s => {
      if (s.startTime) {
        const hour = new Date(s.startTime).getHours();
        const stats = hourStats.get(hour) || { total: 0, count: 0 };
        stats.total += s.focusScore;
        stats.count++;
        hourStats.set(hour, stats);
      }
    });

    return Array.from(hourStats.entries())
      .map(([hour, stats]) => ({
        hour,
        score: Math.round(stats.total / stats.count),
      }))
      .sort((a, b) => b.score - a.score);
  }

  // Check if it's a good time to practice
  isGoodTimeToStudy(): { isGood: boolean; reason: string } {
    const hour = new Date().getHours();
    
    // Late night
    if (hour >= 23 || hour < 6) {
      return {
        isGood: false,
        reason: 'Es tarde. El sueño es importante para la memoria.',
      };
    }

    // Optimal times (based on research)
    if ((hour >= 10 && hour <= 12) || (hour >= 16 && hour <= 18)) {
      return {
        isGood: true,
        reason: '¡Excelente momento para estudiar! Tu concentración está en su pico.',
      };
    }

    return {
      isGood: true,
      reason: 'Buen momento para una sesión de práctica.',
    };
  }

  // Get current session info
  getCurrentSession(): SessionState | null {
    return this.session;
  }

  // Get session duration in minutes
  getSessionDuration(): number {
    if (!this.session) return 0;
    return (Date.now() - this.session.startTime - this.session.pausedTime) / 60000;
  }
}

export const sessionTimingService = new SessionTimingService();
export default sessionTimingService;
