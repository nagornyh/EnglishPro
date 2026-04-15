import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

interface TaskIntroductionProps {
  introduction: {
    title: string;
    explanation: string;
    keyPoints: string[];
    examples?: { english: string; spanish: string; explanation?: string }[];
    tips?: string[];
  };
  onContinue: () => void;
  taskTitle: string;
}

export default function TaskIntroduction({ introduction, onContinue, taskTitle }: TaskIntroductionProps) {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/20 text-accent-primary mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Introducción</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {introduction.title}
          </h1>
          <p className="text-gray-400">{taskTitle}</p>
        </motion.div>

        {/* Explanation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card bg-gradient-to-br from-dark-700/50 to-dark-800/50 border-accent-primary/20"
        >
          <p className="text-gray-200 text-lg leading-relaxed">
            {introduction.explanation}
          </p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
            <CheckCircle className="w-5 h-5 text-accent-success" />
            Puntos Clave
          </h3>
          <ul className="space-y-3">
            {introduction.keyPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-300">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Examples */}
        {introduction.examples && introduction.examples.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
              📝 Ejemplos Prácticos
            </h3>
            <div className="space-y-4">
              {introduction.examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-xl bg-dark-700/50 border border-dark-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <div className="flex-1">
                      <p className="text-white font-medium flex items-center gap-2">
                        <span className="text-blue-400 text-sm font-bold">EN</span>
                        {example.english}
                      </p>
                    </div>
                    <div className="hidden md:block text-gray-500">→</div>
                    <div className="flex-1">
                      <p className="text-gray-300 flex items-center gap-2">
                        <span className="text-yellow-400 text-sm font-bold">ES</span>
                        {example.spanish}
                      </p>
                    </div>
                  </div>
                  {example.explanation && (
                    <p className="mt-2 text-sm text-gray-500 italic">
                      ℹ️ {example.explanation}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tips */}
        {introduction.tips && introduction.tips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="card bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              Consejos Útiles
            </h3>
            <ul className="space-y-2">
              {introduction.tips.map((tip, index) => (
                <li key={index} className="text-gray-300">
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center pt-4"
        >
          <button
            onClick={onContinue}
            className="btn-primary text-lg px-8 py-4 flex items-center gap-3"
          >
            <span>¡Entendido! Comenzar Actividades</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
