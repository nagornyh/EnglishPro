import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Trophy, 
  Zap, 
  Star,
  ChevronRight,
  ChevronLeft,
  X,
  Sparkles,
  GraduationCap,
  Brain,
  Calendar
} from 'lucide-react';

interface OnboardingTutorialProps {
  onComplete: () => void;
  userName?: string;
}

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  tip?: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    id: 'welcome',
    title: '¡Bienvenido a EnglishPro!',
    description: 'Tu camino hacia el dominio del inglés comienza aquí. Te guiaremos a través de las funciones principales de la app.',
    icon: <Sparkles className="w-12 h-12 text-yellow-400" />,
    tip: 'Solo te tomará 1 minuto conocer la app',
  },
  {
    id: 'levels',
    title: '13 Niveles Progresivos',
    description: 'Desde principiante hasta avanzado, cada nivel contiene 10 tareas cuidadosamente diseñadas con vocabulario, gramática y ejercicios prácticos.',
    icon: <GraduationCap className="w-12 h-12 text-blue-400" />,
    tip: 'Completa las tareas en orden para un aprendizaje óptimo',
  },
  {
    id: 'activities',
    title: 'Actividades Variadas',
    description: 'Flashcards, quiz, traducción, escucha, ahorcado y más. Cada actividad refuerza tu aprendizaje de forma diferente.',
    icon: <Brain className="w-12 h-12 text-purple-400" />,
    tip: 'Alterna entre actividades para no aburrirte',
  },
  {
    id: 'xp',
    title: 'Gana XP y Sube de Nivel',
    description: 'Cada ejercicio completado te da puntos de experiencia. Alcanza metas diarias y desbloquea logros especiales.',
    icon: <Zap className="w-12 h-12 text-accent-primary" />,
    tip: 'Tu meta diaria es alcanzable, ¡no la ignores!',
  },
  {
    id: 'streak',
    title: 'Mantén tu Racha 🔥',
    description: 'Practica cada día para mantener tu racha activa. Las rachas largas desbloquean logros especiales y muestran tu dedicación.',
    icon: <Calendar className="w-12 h-12 text-orange-400" />,
    tip: 'Solo necesitas completar una actividad al día',
  },
  {
    id: 'achievements',
    title: 'Desbloquea Logros',
    description: 'Más de 20 logros por descubrir. Desde completar tu primera lección hasta dominar todo el contenido.',
    icon: <Trophy className="w-12 h-12 text-yellow-500" />,
    tip: 'Revisa tus logros desde el menú de perfil',
  },
  {
    id: 'save',
    title: 'Guarda tu Progreso',
    description: 'Tu progreso se guarda automáticamente. También puedes exportar e importar tus datos desde Configuración.',
    icon: <Target className="w-12 h-12 text-green-400" />,
    tip: 'Exporta regularmente para no perder tu progreso',
  },
  {
    id: 'start',
    title: '¡Comienza tu Aventura!',
    description: 'Estás listo para empezar. Te recomendamos hacer primero el Test de Nivelación para personalizar tu experiencia.',
    icon: <Star className="w-12 h-12 text-yellow-400" />,
    tip: 'El test de nivelación es opcional pero muy útil',
  },
];

export default function OnboardingTutorial({ onComplete, userName }: OnboardingTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const skip = () => {
    onComplete();
  };

  const step = tutorialSteps[currentStep];
  const isLastStep = currentStep === tutorialSteps.length - 1;
  const isFirstStep = currentStep === 0;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="modal-overlay modal-overlay-strong p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-dark-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Skip button */}
        <div className="flex justify-end p-4 pb-0">
          <button
            onClick={skip}
            className="text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1 text-sm"
          >
            Omitir <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-4 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                className="w-24 h-24 mx-auto mb-6 bg-dark-700 rounded-full flex items-center justify-center"
              >
                {step.icon}
              </motion.div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-4">
                {isFirstStep && userName ? `¡Hola, ${userName}!` : step.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Tip */}
              {step.tip && (
                <div className="bg-accent-primary/10 border border-accent-primary/20 rounded-xl p-4 mb-6">
                  <p className="text-sm text-accent-primary flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {step.tip}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 pb-6">
          {tutorialSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentStep ? 1 : -1);
                setCurrentStep(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStep
                  ? 'w-8 bg-accent-primary'
                  : index < currentStep
                  ? 'bg-accent-primary/50'
                  : 'bg-dark-600'
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 p-6 pt-0">
          <button
            onClick={goPrev}
            disabled={isFirstStep}
            className={`
              flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transition-all
              ${isFirstStep 
                ? 'bg-dark-700/50 text-gray-600 cursor-not-allowed' 
                : 'bg-dark-700 text-white hover:bg-dark-600'
              }
            `}
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>
          <button
            onClick={goNext}
            className="flex-1 btn-primary py-3 flex items-center justify-center gap-2"
          >
            {isLastStep ? (
              <>
                ¡Comenzar!
                <Sparkles className="w-5 h-5" />
              </>
            ) : (
              <>
                Siguiente
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// Hook to manage onboarding state
export function useOnboarding() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    const seen = localStorage.getItem('hasSeenOnboarding');
    setHasSeenOnboarding(seen === 'true');
    if (seen !== 'true') {
      setShowOnboarding(true);
    }
  }, []);

  const completeOnboarding = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setShowOnboarding(false);
    setHasSeenOnboarding(true);
  };

  const resetOnboarding = () => {
    localStorage.removeItem('hasSeenOnboarding');
    setShowOnboarding(true);
    setHasSeenOnboarding(false);
  };

  return {
    showOnboarding,
    hasSeenOnboarding,
    completeOnboarding,
    resetOnboarding,
  };
}
