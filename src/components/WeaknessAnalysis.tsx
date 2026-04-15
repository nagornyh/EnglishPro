import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Minus,
  Target,
  Lightbulb,
  ArrowRight,
  BarChart3,
  BookOpen,
  Mic,
  Headphones,
  PenTool,
  Languages,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import analyticsService from '../services/analyticsService';
import { errorClassifications } from '../data/error-classification';
import type { 
  SkillMetrics, 
  MistakePattern, 
  LearningInsight,
  StudyRecommendation 
} from '../services/analyticsService';

const skillIcons: Record<string, React.ReactNode> = {
  vocabulary: <BookOpen className="w-5 h-5" />,
  grammar: <PenTool className="w-5 h-5" />,
  listening: <Headphones className="w-5 h-5" />,
  speaking: <Mic className="w-5 h-5" />,
  translation: <Languages className="w-5 h-5" />,
  reading: <BookOpen className="w-5 h-5" />,
  writing: <PenTool className="w-5 h-5" />,
};

const trendIcons: Record<string, React.ReactNode> = {
  improving: <TrendingUp className="w-4 h-4 text-green-400" />,
  stable: <Minus className="w-4 h-4 text-gray-400" />,
  declining: <TrendingDown className="w-4 h-4 text-red-400" />,
};

export default function WeaknessAnalysis() {
  const { user } = useUser();
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllPatterns, setShowAllPatterns] = useState(false);

  const [skills, setSkills] = useState<SkillMetrics[]>([]);
  const [weakness, setWeakness] = useState<{
    weakSkills: SkillMetrics[];
    weakCategories: any[];
    patterns: MistakePattern[];
  } | null>(null);
  const [insights, setInsights] = useState<LearningInsight[]>([]);
  const [recommendations, setRecommendations] = useState<StudyRecommendation[]>([]);

  useEffect(() => {
    if (!user) return;

    setSkills(analyticsService.getSkillMetrics(user.id));
    setWeakness(analyticsService.getWeaknessAnalysis(user.id));
    setInsights(analyticsService.generateInsights(user));
    setRecommendations(analyticsService.getStudyRecommendations(user));
  }, [user]);

  if (!user) return null;

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 4);
  const visiblePatterns = showAllPatterns ? weakness?.patterns : weakness?.patterns.slice(0, 3);

  const urgencyColors = {
    high: 'bg-red-500/20 text-red-400 border-red-500/30',
    medium: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    low: 'bg-green-500/20 text-green-400 border-green-500/30',
  };

  const insightIcons: Record<string, string> = {
    strength: '💪',
    weakness: '🎯',
    opportunity: '🌟',
    milestone: '🏆',
  };

  return (
    <div className="space-y-6">
      {/* Insights Section */}
      {insights.length > 0 && (
        <section>
          <h2 className="heading-4 text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            Análisis de tu Aprendizaje
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {insights.map((insight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`card ${
                  insight.type === 'weakness' 
                    ? 'border-red-500/30 bg-red-500/5' 
                    : insight.type === 'strength'
                    ? 'border-green-500/30 bg-green-500/5'
                    : 'border-accent-primary/30 bg-accent-primary/5'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{insight.icon || insightIcons[insight.type]}</span>
                  <div>
                    <h3 className="font-semibold text-white">{insight.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{insight.description}</p>
                    {insight.recommendation && (
                      <p className="text-sm text-accent-primary mt-2">
                        💡 {insight.recommendation}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Skills Overview */}
      <section>
        <h2 className="heading-4 text-white mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-accent-primary" />
          Rendimiento por Habilidad
        </h2>
        
        {skills.length === 0 ? (
          <div className="card text-center py-8">
            <Sparkles className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400">
              Completa más actividades para ver tu análisis de habilidades
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {visibleSkills.map((skill, idx) => (
                <motion.div
                  key={skill.skill}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`card ${
                    skill.accuracy < 60 
                      ? 'border-red-500/20' 
                      : skill.accuracy >= 85 
                      ? 'border-green-500/20'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      skill.accuracy < 60 
                        ? 'bg-red-500/20 text-red-400' 
                        : skill.accuracy >= 85 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-accent-primary/20 text-accent-primary'
                    }`}>
                      {skillIcons[skill.skill] || <Target className="w-5 h-5" />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-white">{skill.skillEs}</span>
                        <div className="flex items-center gap-2">
                          {trendIcons[skill.trend]}
                          <span className={`font-bold ${
                            skill.accuracy < 60 ? 'text-red-400' 
                            : skill.accuracy >= 85 ? 'text-green-400'
                            : 'text-white'
                          }`}>
                            {skill.accuracy}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            skill.accuracy < 60 ? 'bg-red-500' 
                            : skill.accuracy >= 85 ? 'bg-green-500'
                            : 'bg-accent-primary'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.accuracy}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
                        <span>{skill.totalAttempts} intentos</span>
                        <span>
                          {skill.trend === 'improving' && '📈 Mejorando'}
                          {skill.trend === 'declining' && '📉 En descenso'}
                          {skill.trend === 'stable' && '➡️ Estable'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {skills.length > 4 && (
              <button
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="w-full mt-3 py-2 text-sm text-accent-primary hover:text-accent-secondary flex items-center justify-center gap-1"
              >
                {showAllSkills ? (
                  <>Ver menos <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Ver todas ({skills.length}) <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            )}
          </>
        )}
      </section>

      {/* Mistake Patterns */}
      {weakness && weakness.patterns.length > 0 && (
        <section>
          <h2 className="heading-4 text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Patrones de Error
          </h2>
          
          <div className="space-y-3">
            {visiblePatterns?.map((pattern, idx) => (
              <motion.div
                key={pattern.type}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="card border-amber-500/20"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-white">{pattern.description}</h3>
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded text-sm">
                    {pattern.count} errores
                  </span>
                </div>
                
                {pattern.examples.length > 0 && (
                  <div className="bg-dark-700/50 rounded-lg p-2 mb-2">
                    <p className="text-xs text-gray-500 mb-1">Ejemplos:</p>
                    <div className="space-y-1">
                      {pattern.examples.map((ex, i) => (
                        <p key={i} className="text-sm text-gray-300 font-mono">{ex}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                <p className="text-sm text-accent-primary">
                  💡 {pattern.suggestion}
                </p>
              </motion.div>
            ))}
          </div>

          {weakness.patterns.length > 3 && (
            <button
              onClick={() => setShowAllPatterns(!showAllPatterns)}
              className="w-full mt-3 py-2 text-sm text-accent-primary hover:text-accent-secondary flex items-center justify-center gap-1"
            >
              {showAllPatterns ? (
                <>Ver menos <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Ver todos ({weakness.patterns.length}) <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          )}
        </section>
      )}

      {/* Error Type Breakdown — powered by error-classification data */}
      {(() => {
        const level = user.progress.currentLevel;
        // Map lesson level (1-13) to error-classification level (1-4)
        const ecLevel: 1 | 2 | 3 | 4 = level <= 3 ? 1 : level <= 5 ? 2 : level <= 9 ? 3 : 4;
        const relevantErrors = errorClassifications.filter(e => e.level <= ecLevel);
        const byType = relevantErrors.reduce<Record<string, typeof relevantErrors>>(
          (acc, e) => { (acc[e.errorType] ??= []).push(e); return acc; }, {}
        );
        const typeColors: Record<string, string> = {
          'l1-interference': 'border-orange-500/30 bg-orange-500/5 text-orange-400',
          'overgeneralization': 'border-blue-500/30 bg-blue-500/5 text-blue-400',
          'simplification': 'border-purple-500/30 bg-purple-500/5 text-purple-400',
          'developmental': 'border-green-500/30 bg-green-500/5 text-green-400',
          'fossilization': 'border-red-500/30 bg-red-500/5 text-red-400',
          'avoidance': 'border-gray-500/30 bg-gray-500/5 text-gray-400',
        };
        const shown = Object.entries(byType).slice(0, 4);
        if (shown.length === 0) return null;
        return (
          <section>
            <h2 className="heading-4 text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              Tipos de Error Lingüístico
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {shown.map(([type, errors]) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`card border ${typeColors[type] ?? 'border-gray-500/30'}`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-white text-sm">{errors[0].labelEs}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${typeColors[type] ?? ''}`}>
                      {errors.length}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">{errors[0].descriptionEs}</p>
                  <p className="text-xs text-gray-500">
                    💡 {errors[0].remediation.strategyEs}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        );
      })()}

      {/* Study Recommendations */}
      {recommendations.length > 0 && (
        <section>
          <h2 className="heading-4 text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-400" />
            Recomendaciones de Estudio
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {recommendations.map((rec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`card border ${urgencyColors[rec.urgency]}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-white capitalize">
                    Practicar {rec.activity.replace('-', ' ')}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    rec.urgency === 'high' ? 'bg-red-500/20 text-red-400' :
                    rec.urgency === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {rec.urgency === 'high' ? 'Urgente' : rec.urgency === 'medium' ? 'Recomendado' : 'Opcional'}
                  </span>
                </div>
                
                <p className="text-sm text-gray-400 mb-3">{rec.reason}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>⏱️ {rec.estimatedTime} min</span>
                    <span>📈 {rec.expectedImprovement}</span>
                  </div>
                  
                  <Link
                    to={`/practice/${rec.activity}`}
                    className="flex items-center gap-1 text-accent-primary hover:text-accent-secondary text-sm font-medium"
                  >
                    Practicar <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
