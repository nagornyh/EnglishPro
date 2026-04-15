import { motion } from 'framer-motion';
import { 
  Globe, 
  MapPin, 
  ArrowRight,
  Sparkles,
  Users,
  BookOpen
} from 'lucide-react';
import type { CulturalNote as CulturalNoteType } from '../../types';

interface CulturalNoteProps {
  note: CulturalNoteType;
  taskTitle?: string;
  onContinue: () => void;
  variant?: 'full' | 'compact' | 'modal';
}

const formalityLabels: Record<string, { label: string; color: string; icon: string }> = {
  formal: { label: 'Formal', color: 'text-blue-400 bg-blue-500/20', icon: '👔' },
  neutral: { label: 'Neutral', color: 'text-gray-400 bg-gray-500/20', icon: '💬' },
  informal: { label: 'Informal', color: 'text-green-400 bg-green-500/20', icon: '🎉' },
};

const regionFlags: Record<string, string> = {
  UK: '🇬🇧',
  US: '🇺🇸',
  Australia: '🇦🇺',
  Canada: '🇨🇦',
  Ireland: '🇮🇪',
  'New Zealand': '🇳🇿',
  'South Africa': '🇿🇦',
  Global: '🌍',
};

export default function CulturalNote({ 
  note, 
  taskTitle,
  onContinue,
  variant = 'full'
}: CulturalNoteProps) {
  const formality = note.formalityLevel ? formalityLabels[note.formalityLevel] : null;

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="card bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
            <Globe className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-white mb-1">
              {note.titleEs || note.title}
            </h4>
            <p className="text-sm text-gray-400 line-clamp-3">
              {note.contentEs || note.content}
            </p>
            {note.regions && note.regions.length > 0 && (
              <div className="flex items-center gap-2 mt-2">
                {note.regions.slice(0, 3).map(region => (
                  <span key={region} className="text-lg" title={region}>
                    {regionFlags[region] || '🌐'}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'modal') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-dark-800 rounded-2xl border border-dark-600 p-6 max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
            <Globe className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <p className="text-xs text-indigo-400 uppercase tracking-wide">Nota Cultural</p>
            <h3 className="text-xl font-bold text-white">{note.titleEs || note.title}</h3>
          </div>
        </div>

        <p className="text-gray-300 mb-4">
          {note.contentEs || note.content}
        </p>

        {(note.regions || formality) && (
          <div className="flex items-center gap-3 mb-4">
            {note.regions && note.regions.length > 0 && (
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-dark-700">
                <MapPin className="w-4 h-4 text-gray-400" />
                {note.regions.map(region => (
                  <span key={region} className="text-lg" title={region}>
                    {regionFlags[region] || '🌐'}
                  </span>
                ))}
              </div>
            )}
            {formality && (
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${formality.color}`}>
                <span>{formality.icon}</span>
                <span className="text-sm">{formality.label}</span>
              </div>
            )}
          </div>
        )}

        <button
          onClick={onContinue}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          Entendido
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    );
  }

  // Full variant
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[70vh] py-8"
    >
      <div className="w-full max-w-5xl space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 mb-4">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">Nota Cultural</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {note.titleEs || note.title}
          </h1>
          {taskTitle && (
            <p className="text-gray-400">{taskTitle}</p>
          )}
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border-indigo-500/20"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-7 h-7 text-indigo-300" />
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-200 leading-relaxed">
                {note.contentEs || note.content}
              </p>
            </div>
          </div>
        </motion.div>

        {/* English version (if different) */}
        {note.contentEs && note.content && note.contentEs !== note.content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card bg-dark-700/50"
          >
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">En inglés</p>
                <p className="text-gray-400 italic">{note.content}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regions and Formality */}
        {(note.regions || formality) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {note.regions && note.regions.length > 0 && (
              <div className="card flex items-center gap-3 py-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">Aplica en:</span>
                <div className="flex items-center gap-2">
                  {note.regions.map(region => (
                    <span 
                      key={region} 
                      className="flex items-center gap-1 px-2 py-1 rounded-lg bg-dark-600"
                      title={region}
                    >
                      <span className="text-xl">{regionFlags[region] || '🌐'}</span>
                      <span className="text-sm text-gray-300">{region}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {formality && (
              <div className={`card flex items-center gap-2 py-3 ${formality.color}`}>
                <Users className="w-5 h-5" />
                <span>Nivel de formalidad:</span>
                <span className="font-semibold flex items-center gap-1">
                  {formality.icon} {formality.label}
                </span>
              </div>
            )}
          </motion.div>
        )}

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card bg-yellow-500/10 border-yellow-500/20"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <p className="text-gray-300">
              <span className="font-semibold text-yellow-400">Consejo: </span>
              Entender estas diferencias culturales te ayudará a comunicarte de manera más natural 
              y evitar malentendidos con hablantes nativos.
            </p>
          </div>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <button
            onClick={onContinue}
            className="btn-primary flex items-center gap-2 px-8"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
