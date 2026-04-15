import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Check, AlertTriangle, Download } from 'lucide-react';
import { useUser } from '../context/UserContext';
import db from '../services/database';

interface SaveProgressButtonProps {
  floating?: boolean;
}

export default function SaveProgressButton({ floating = true }: SaveProgressButtonProps) {
  const { user } = useUser();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showExitWarning, setShowExitWarning] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  // Track changes
  useEffect(() => {
    if (!user) return;

    const handleActivity = () => {
      setHasUnsavedChanges(true);
      setSaved(false);
    };

    // Listen for activity completion events
    window.addEventListener('activityComplete', handleActivity);
    window.addEventListener('lessonComplete', handleActivity);
    window.addEventListener('xpGained', handleActivity);

    return () => {
      window.removeEventListener('activityComplete', handleActivity);
      window.removeEventListener('lessonComplete', handleActivity);
      window.removeEventListener('xpGained', handleActivity);
    };
  }, [user]);

  // Warn before closing/refreshing
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '¿Estás seguro? Tienes cambios sin guardar. Exporta tu progreso antes de salir.';
        return e.returnValue;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const handleSave = useCallback(async () => {
    if (!user || saving) return;

    setSaving(true);
    try {
      const data = await db.exportUserData(user.id);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const date = new Date().toISOString().split('T')[0];
      const time = new Date().toTimeString().split(' ')[0].replace(/:/g, '-');
      a.download = `englishpro-${user.name}-${date}_${time}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setHasUnsavedChanges(false);
      setSaved(true);
      setLastSaved(new Date().toLocaleTimeString());
      
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving:', error);
      alert('Error al guardar. Intenta de nuevo.');
    } finally {
      setSaving(false);
    }
  }, [user, saving]);

  // Load last saved time from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('lastExportTime');
    if (stored) {
      setLastSaved(new Date(stored).toLocaleString());
    }
  }, []);

  // Save last export time
  useEffect(() => {
    if (saved) {
      localStorage.setItem('lastExportTime', new Date().toISOString());
    }
  }, [saved]);

  if (!user) return null;

  // Floating button version
  if (floating) {
    return (
      <>
        {/* Floating Save Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col items-end gap-2"
        >
          {/* Unsaved changes indicator */}
          <AnimatePresence>
            {hasUnsavedChanges && !saved && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Cambios sin guardar</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Last saved time */}
          {lastSaved && !hasUnsavedChanges && (
            <div className="text-xs text-gray-500">
              Último guardado: {lastSaved}
            </div>
          )}

          {/* Save button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            disabled={saving}
            className={`
              flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all
              ${hasUnsavedChanges 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : saved 
                  ? 'bg-green-500 text-white'
                  : 'bg-dark-600 hover:bg-dark-500 text-gray-300'
              }
              ${saving ? 'opacity-75 cursor-not-allowed' : ''}
            `}
          >
            {saving ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Guardando...</span>
              </>
            ) : saved ? (
              <>
                <Check className="w-5 h-5" />
                <span>¡Guardado!</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Guardar Progreso</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Exit Warning Modal */}
        <AnimatePresence>
          {showExitWarning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay p-4"
              onClick={() => setShowExitWarning(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-700 rounded-2xl p-6 max-w-md w-full"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">¿Guardar antes de salir?</h3>
                    <p className="text-gray-400">
                      Tienes cambios sin guardar. Si cierras sin guardar, perderás tu progreso reciente.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowExitWarning(false)}
                    className="flex-1 btn-secondary"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => {
                      handleSave();
                      setShowExitWarning(false);
                    }}
                    className="flex-1 btn-primary flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    Guardar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Inline version for Settings page
  return (
    <button
      onClick={handleSave}
      disabled={saving}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg transition-all
        ${hasUnsavedChanges 
          ? 'bg-amber-500 hover:bg-amber-600 text-white' 
          : 'bg-dark-600 hover:bg-dark-500 text-gray-300'
        }
      `}
    >
      {saving ? (
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <Download className="w-5 h-5" />
      )}
      <span>{saving ? 'Guardando...' : 'Guardar Progreso'}</span>
    </button>
  );
}

// Hook to dispatch events when activities complete
export function useProgressTracking() {
  const dispatchChange = useCallback(() => {
    window.dispatchEvent(new CustomEvent('activityComplete'));
  }, []);

  const dispatchLessonComplete = useCallback(() => {
    window.dispatchEvent(new CustomEvent('lessonComplete'));
  }, []);

  const dispatchXPGained = useCallback(() => {
    window.dispatchEvent(new CustomEvent('xpGained'));
  }, []);

  return { dispatchChange, dispatchLessonComplete, dispatchXPGained };
}
