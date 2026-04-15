// Notification Service for English Learning App
// Handles study reminders and notification management

export interface NotificationSettings {
  enabled: boolean;
  dailyReminder: boolean;
  reminderTime: string; // HH:mm format
  streakReminder: boolean;
  weeklyReport: boolean;
  achievementNotify: boolean;
}

const DEFAULT_SETTINGS: NotificationSettings = {
  enabled: false,
  dailyReminder: true,
  reminderTime: '19:00',
  streakReminder: true,
  weeklyReport: false,
  achievementNotify: true,
};

class NotificationService {
  private settings: NotificationSettings;
  private scheduledTimers: Map<string, number> = new Map();

  constructor() {
    this.settings = this.loadSettings();
    this.initializeNotifications();
  }

  // Load settings from localStorage
  private loadSettings(): NotificationSettings {
    try {
      const stored = localStorage.getItem('notification_settings');
      if (stored) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.error('Error loading notification settings:', e);
    }
    return DEFAULT_SETTINGS;
  }

  // Save settings to localStorage
  saveSettings(settings: Partial<NotificationSettings>): void {
    this.settings = { ...this.settings, ...settings };
    localStorage.setItem('notification_settings', JSON.stringify(this.settings));
    this.rescheduleNotifications();
  }

  getSettings(): NotificationSettings {
    return { ...this.settings };
  }

  // Check if notifications are supported
  isSupported(): boolean {
    return 'Notification' in window && 'serviceWorker' in navigator;
  }

  // Request notification permission
  async requestPermission(): Promise<boolean> {
    if (!this.isSupported()) {
      console.log('Notifications not supported');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission === 'denied') {
      return false;
    }

    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  // Get current permission status
  getPermissionStatus(): NotificationPermission | 'unsupported' {
    if (!this.isSupported()) return 'unsupported';
    return Notification.permission;
  }

  // Initialize notifications if enabled
  private async initializeNotifications(): Promise<void> {
    if (!this.settings.enabled) return;

    const hasPermission = await this.requestPermission();
    if (!hasPermission) {
      this.settings.enabled = false;
      this.saveSettings({ enabled: false });
      return;
    }

    this.scheduleNotifications();
  }

  // Enable notifications
  async enable(): Promise<boolean> {
    const hasPermission = await this.requestPermission();
    if (!hasPermission) {
      return false;
    }

    this.settings.enabled = true;
    this.saveSettings({ enabled: true });
    this.scheduleNotifications();
    return true;
  }

  // Disable notifications
  disable(): void {
    this.settings.enabled = false;
    this.saveSettings({ enabled: false });
    this.clearAllScheduled();
  }

  // Schedule daily reminder
  private scheduleNotifications(): void {
    this.clearAllScheduled();

    if (!this.settings.enabled) return;

    if (this.settings.dailyReminder) {
      this.scheduleDailyReminder();
    }

    if (this.settings.streakReminder) {
      this.scheduleStreakCheck();
    }
  }

  // Reschedule all notifications
  private rescheduleNotifications(): void {
    this.scheduleNotifications();
  }

  // Clear all scheduled notifications
  private clearAllScheduled(): void {
    this.scheduledTimers.forEach((timerId) => {
      clearTimeout(timerId);
      clearInterval(timerId);
    });
    this.scheduledTimers.clear();
  }

  // Schedule daily reminder
  private scheduleDailyReminder(): void {
    const [hours, minutes] = this.settings.reminderTime.split(':').map(Number);
    const now = new Date();
    const reminderTime = new Date();
    reminderTime.setHours(hours, minutes, 0, 0);

    // If time has passed today, schedule for tomorrow
    if (reminderTime <= now) {
      reminderTime.setDate(reminderTime.getDate() + 1);
    }

    const delay = reminderTime.getTime() - now.getTime();

    const showReminder = () => {
      // Check if user has practiced today
      const todayKey = new Date().toISOString().split('T')[0];
      const lastPractice = localStorage.getItem('last_practice_date');
      
      if (lastPractice !== todayKey) {
        this.showNotification(
          '📚 ¡Hora de practicar!',
          'No olvides tu sesión de inglés de hoy. ¡Mantén tu racha!',
          { url: '/' }
        );
      }

      // Reschedule for next day
      const nextTimeout = setTimeout(showReminder, 24 * 60 * 60 * 1000);
      this.scheduledTimers.set('daily_reminder', nextTimeout as unknown as number);
    };

    const timerId = setTimeout(showReminder, delay);
    this.scheduledTimers.set('daily_reminder', timerId as unknown as number);
  }

  // Schedule streak check (evening reminder if no practice)
  private scheduleStreakCheck(): void {
    // Check at 21:00 if user hasn't practiced
    const now = new Date();
    const checkTime = new Date();
    checkTime.setHours(21, 0, 0, 0);

    if (checkTime <= now) {
      checkTime.setDate(checkTime.getDate() + 1);
    }

    const delay = checkTime.getTime() - now.getTime();

    const checkStreak = () => {
      const todayKey = new Date().toISOString().split('T')[0];
      const lastPractice = localStorage.getItem('last_practice_date');
      const currentStreak = parseInt(localStorage.getItem('current_streak') || '0', 10);
      
      if (lastPractice !== todayKey && currentStreak > 0) {
        this.showNotification(
          '🔥 ¡No pierdas tu racha!',
          `Llevas ${currentStreak} día${currentStreak > 1 ? 's' : ''} seguidos. ¡Practica 5 minutos para mantenerla!`,
          { url: '/', urgent: true }
        );
      }

      // Reschedule for next day
      const nextTimeout = setTimeout(checkStreak, 24 * 60 * 60 * 1000);
      this.scheduledTimers.set('streak_check', nextTimeout as unknown as number);
    };

    const timerId = setTimeout(checkStreak, delay);
    this.scheduledTimers.set('streak_check', timerId as unknown as number);
  }

  // Show a notification
  async showNotification(
    title: string,
    body: string,
    options: { url?: string; urgent?: boolean; tag?: string } = {}
  ): Promise<void> {
    if (!this.settings.enabled) return;

    const hasPermission = this.getPermissionStatus() === 'granted';
    if (!hasPermission) return;

    try {
      // Try to use service worker notification
      const registration = await navigator.serviceWorker.ready;
      await registration.showNotification(title, {
        body,
        icon: '/icons/icon-192x192.png',
        badge: '/icons/badge-72x72.png',
        tag: options.tag || 'english-app-notification',
        requireInteraction: options.urgent || false,
        data: { url: options.url || '/' },
        vibrate: options.urgent ? [200, 100, 200] : [100, 50, 100],
      } as NotificationOptions);
    } catch (e) {
      // Fallback to regular notification
      try {
        new Notification(title, {
          body,
          icon: '/icons/icon-192x192.png',
          tag: options.tag || 'english-app-notification',
        });
      } catch (e2) {
        console.error('Failed to show notification:', e2);
      }
    }
  }

  // Send achievement notification
  async notifyAchievement(achievementName: string, description: string): Promise<void> {
    if (!this.settings.achievementNotify) return;

    await this.showNotification(
      `🏆 ¡Nuevo logro desbloqueado!`,
      `${achievementName}: ${description}`,
      { tag: 'achievement', url: '/achievements' }
    );
  }

  // Send streak milestone notification
  async notifyStreakMilestone(days: number): Promise<void> {
    const milestones = [7, 14, 30, 50, 100, 200, 365];
    if (!milestones.includes(days)) return;

    await this.showNotification(
      `🔥 ¡Racha de ${days} días!`,
      '¡Increíble dedicación! Sigue así.',
      { tag: 'streak-milestone', url: '/' }
    );
  }

  // Send level up notification
  async notifyLevelUp(newLevel: string): Promise<void> {
    await this.showNotification(
      `📈 ¡Subiste de nivel!`,
      `Has alcanzado el nivel ${newLevel}. ¡Felicidades!`,
      { tag: 'level-up', url: '/progress' }
    );
  }

  // Mark that user has practiced today
  recordPractice(): void {
    const todayKey = new Date().toISOString().split('T')[0];
    localStorage.setItem('last_practice_date', todayKey);
  }
}

// Export singleton instance
export const notificationService = new NotificationService();

// React hook for notification settings
import { useState, useEffect, useCallback } from 'react';

export function useNotifications() {
  const [settings, setSettings] = useState<NotificationSettings>(
    notificationService.getSettings()
  );
  const [permission, setPermission] = useState<NotificationPermission | 'unsupported'>(
    notificationService.getPermissionStatus()
  );

  useEffect(() => {
    setPermission(notificationService.getPermissionStatus());
  }, []);

  const updateSettings = useCallback((newSettings: Partial<NotificationSettings>) => {
    notificationService.saveSettings(newSettings);
    setSettings(notificationService.getSettings());
  }, []);

  const enableNotifications = useCallback(async () => {
    const success = await notificationService.enable();
    if (success) {
      setSettings(notificationService.getSettings());
      setPermission('granted');
    }
    return success;
  }, []);

  const disableNotifications = useCallback(() => {
    notificationService.disable();
    setSettings(notificationService.getSettings());
  }, []);

  const requestPermission = useCallback(async () => {
    const granted = await notificationService.requestPermission();
    setPermission(notificationService.getPermissionStatus());
    return granted;
  }, []);

  return {
    settings,
    permission,
    isSupported: notificationService.isSupported(),
    updateSettings,
    enableNotifications,
    disableNotifications,
    requestPermission,
    showNotification: notificationService.showNotification.bind(notificationService),
    notifyAchievement: notificationService.notifyAchievement.bind(notificationService),
    recordPractice: notificationService.recordPractice.bind(notificationService),
  };
}
