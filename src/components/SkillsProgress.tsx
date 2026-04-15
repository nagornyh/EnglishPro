import { memo } from 'react';
import { motion } from 'framer-motion';
import { Mic, PenTool, Headphones, BookOpen, MessageSquare, Volume2 } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  progress: number; // 0-100
  activitiesCompleted: number;
  totalActivities: number;
}

interface SkillsProgressProps {
  skills?: Skill[];
  compact?: boolean;
}

const defaultSkills: Skill[] = [
  { 
    id: 'speaking', 
    name: 'Speaking', 
    icon: <Mic className="w-5 h-5" />, 
    color: '#f59e0b', 
    progress: 0,
    activitiesCompleted: 0,
    totalActivities: 50
  },
  { 
    id: 'listening', 
    name: 'Listening', 
    icon: <Headphones className="w-5 h-5" />, 
    color: '#6366f1', 
    progress: 0,
    activitiesCompleted: 0,
    totalActivities: 50
  },
  { 
    id: 'reading', 
    name: 'Reading', 
    icon: <BookOpen className="w-5 h-5" />, 
    color: '#10b981', 
    progress: 0,
    activitiesCompleted: 0,
    totalActivities: 50
  },
  { 
    id: 'writing', 
    name: 'Writing', 
    icon: <PenTool className="w-5 h-5" />, 
    color: '#8b5cf6', 
    progress: 0,
    activitiesCompleted: 0,
    totalActivities: 50
  },
  { 
    id: 'grammar', 
    name: 'Grammar', 
    icon: <MessageSquare className="w-5 h-5" />, 
    color: '#06b6d4', 
    progress: 0,
    activitiesCompleted: 0,
    totalActivities: 50
  },
  { 
    id: 'pronunciation', 
    name: 'Pronunciation', 
    icon: <Volume2 className="w-5 h-5" />, 
    color: '#ec4899', 
    progress: 0,
    activitiesCompleted: 0,
    totalActivities: 50
  },
];

export function SkillsProgress({ skills = defaultSkills, compact = false }: SkillsProgressProps) {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg"
            style={{ backgroundColor: `${skill.color}15` }}
          >
            <span style={{ color: skill.color }}>{skill.icon}</span>
            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
            <span 
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${skill.color}30`, color: skill.color }}
            >
              {skill.progress}%
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="heading-4 text-white mb-4">Progreso por Habilidad</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative p-4 rounded-xl"
            style={{ backgroundColor: `${skill.color}10` }}
          >
            {/* Icon and Name */}
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${skill.color}25` }}
              >
                <span style={{ color: skill.color }}>{skill.icon}</span>
              </div>
              <div>
                <p className="font-medium text-white">{skill.name}</p>
                <p className="text-xs text-gray-400">
                  {skill.activitiesCompleted}/{skill.totalActivities} actividades
                </p>
              </div>
            </div>

            {/* Circular Progress */}
            <div className="relative w-24 h-24 mx-auto">
              <svg className="w-24 h-24 transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-dark-600"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke={skill.color}
                  strokeWidth="8"
                  fill="transparent"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: '0 251.2' }}
                  animate={{ 
                    strokeDasharray: `${(skill.progress / 100) * 251.2} 251.2`
                  }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </svg>
              {/* Percentage text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className="text-xl font-bold"
                  style={{ color: skill.color }}
                >
                  {skill.progress}%
                </span>
              </div>
            </div>

            {/* Level indicator */}
            <div className="mt-3 text-center">
              <span 
                className="text-xs font-medium px-2 py-1 rounded-full"
                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
              >
                {getSkillLevel(skill.progress)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function getSkillLevel(progress: number): string {
  if (progress >= 90) return 'Maestro';
  if (progress >= 75) return 'Avanzado';
  if (progress >= 50) return 'Intermedio';
  if (progress >= 25) return 'Básico';
  return 'Principiante';
}

// Mini version for sidebar or header
export function SkillsMini({ skills = defaultSkills }: { skills?: Skill[] }) {
  return (
    <div className="flex items-center gap-1">
      {skills.slice(0, 4).map((skill) => (
        <div
          key={skill.id}
          className="relative w-8 h-8 group cursor-pointer"
          title={`${skill.name}: ${skill.progress}%`}
        >
          <svg className="w-8 h-8 transform -rotate-90">
            <circle
              cx="16"
              cy="16"
              r="12"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              className="text-dark-600"
            />
            <circle
              cx="16"
              cy="16"
              r="12"
              stroke={skill.color}
              strokeWidth="3"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={`${(skill.progress / 100) * 75.4} 75.4`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs" style={{ color: skill.color }}>
              {skill.icon}
            </span>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-dark-600 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
            {skill.name}: {skill.progress}%
          </div>
        </div>
      ))}
    </div>
  );
}

// Memoized version for performance
export const MemoizedSkillsProgress = memo(SkillsProgress);

export default SkillsProgress;
