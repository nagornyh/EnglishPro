import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import scaffoldingService from '../services/scaffoldingService';
import adaptiveEngine from '../services/adaptiveEngine';
import type { ScaffoldConfig, UserPerformance } from '../services/scaffoldingService';

interface ScaffoldingContextType {
  isLoading: boolean;
  getConfig: (topicId: string) => ScaffoldConfig;
  getLevel: (topicId: string) => number;
  /** Get scaffold level informed by the adaptive engine for a given skill+user */
  getAdaptiveLevel: (userId: string, skill: string) => number;
  getPerformance: (topicId: string) => UserPerformance | null;
  recordAttempt: (topicId: string, isCorrect: boolean) => Promise<{
    newLevel: number;
    levelChanged: boolean;
    message?: string;
  }>;
  resetTopic: (topicId: string) => Promise<void>;
  getProgressSummary: () => {
    topicsByLevel: Record<number, number>;
    averageLevel: number;
    totalTopics: number;
    masteredTopics: number;
  };
  getTopicsForReview: () => string[];
  getLevelName: (level: number) => string;
  getLevelDescription: (level: number) => string;
}

const ScaffoldingContext = createContext<ScaffoldingContextType | null>(null);

export function ScaffoldingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    scaffoldingService.init().then(() => {
      setIsLoading(false);
    });
  }, []);

  const getLevelName = (level: number): string => {
    const names = ['Principiante', 'Básico', 'Intermedio', 'Avanzado', 'Dominio'];
    return names[level] || 'Desconocido';
  };

  const getLevelDescription = (level: number): string => {
    const descriptions = [
      'Máximo apoyo: traducciones, pistas, banco de palabras y ejemplos',
      'Alto apoyo: traducciones, pistas y banco de palabras',
      'Apoyo medio: traducciones y pistas disponibles',
      'Bajo apoyo: solo pistas disponibles cuando las necesites',
      'Sin apoyo: dominas este tema - practica de forma independiente',
    ];
    return descriptions[level] || '';
  };

  const value: ScaffoldingContextType = {
    isLoading,
    getConfig: (topicId) => scaffoldingService.getScaffoldConfig(topicId),
    getLevel: (topicId) => scaffoldingService.getScaffoldLevel(topicId),
    getAdaptiveLevel: (userId, skill) => adaptiveEngine.getScaffoldLevel(userId, skill),
    getPerformance: (topicId) => scaffoldingService.getPerformance(topicId),
    recordAttempt: (topicId, isCorrect) => scaffoldingService.recordAttempt(topicId, isCorrect),
    resetTopic: (topicId) => scaffoldingService.resetTopic(topicId),
    getProgressSummary: () => scaffoldingService.getProgressSummary(),
    getTopicsForReview: () => scaffoldingService.getTopicsForReview(),
    getLevelName,
    getLevelDescription,
  };

  return (
    <ScaffoldingContext.Provider value={value}>
      {children}
    </ScaffoldingContext.Provider>
  );
}

export function useScaffolding() {
  const context = useContext(ScaffoldingContext);
  if (!context) {
    throw new Error('useScaffolding must be used within a ScaffoldingProvider');
  }
  return context;
}

// Helper component to display scaffolding level
export function ScaffoldingBadge({ topicId, className = '' }: { topicId: string; className?: string }) {
  const { getLevel, getLevelName } = useScaffolding();
  const level = getLevel(topicId);

  const colors = [
    'bg-red-500/20 text-red-400 border-red-500/30',
    'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'bg-green-500/20 text-green-400 border-green-500/30',
  ];

  return (
    <span className={`px-2 py-1 text-xs rounded border ${colors[level]} ${className}`}>
      {getLevelName(level)}
    </span>
  );
}

// Helper component to show scaffold config info
export function ScaffoldingInfo({ config }: { config: ScaffoldConfig }) {
  const features = [];

  if (config.showTranslation) features.push('📝 Traducciones');
  if (config.showHints) features.push('💡 Pistas');
  if (config.showWordBank) features.push('📚 Banco de palabras');
  if (config.showFirstLetter) features.push('🔤 Primera letra');
  if (config.showExamples) features.push('📖 Ejemplos');
  if (config.timeLimit) features.push(`⏱️ Límite: ${config.timeLimit}s`);

  return (
    <div className="flex flex-wrap gap-2 text-xs">
      {features.map((f, i) => (
        <span key={i} className="px-2 py-1 bg-dark-600 rounded-full text-gray-400">
          {f}
        </span>
      ))}
    </div>
  );
}
