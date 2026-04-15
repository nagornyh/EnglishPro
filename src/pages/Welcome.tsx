import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Plus, Trash2, ArrowRight, Sparkles, Upload } from 'lucide-react';
import { useUser } from '../context/UserContext';
import db from '../services/database';

export default function Welcome() {
  const navigate = useNavigate();
  const { users, login, createUser, deleteUser, isLoading } = useUser();
  const [showNewUser, setShowNewUser] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [error, setError] = useState('');
  const [importState, setImportState] = useState<'idle' | 'preview' | 'importing' | 'error'>('idle');
  const [importPreviewName, setImportPreviewName] = useState('');
  const [importError, setImportError] = useState('');
  const [pendingImportText, setPendingImportText] = useState<string | null>(null);
  const importInputRef = useRef<HTMLInputElement>(null);

  const handleImportFile = async (file: File) => {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!data.user?.id || !data.user?.name) throw new Error('Formato inválido');
      setPendingImportText(text);
      setImportPreviewName(data.user.name);
      setImportState('preview');
    } catch {
      setImportError('El archivo no es válido. Asegúrate de usar un archivo exportado desde EnglishPro.');
      setImportState('error');
    }
  };

  const confirmImport = async () => {
    if (!pendingImportText) return;
    setImportState('importing');
    try {
      await db.importUserData(pendingImportText);
      window.location.reload();
    } catch {
      setImportError('Error al importar. Intenta de nuevo.');
      setImportState('error');
    }
  };

  const handleLogin = async (userId: string) => {
    try {
      await login(userId);
      navigate('/');
    } catch (err) {
      setError('Error al iniciar sesión');
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim()) {
      setError('Por favor ingresa un nombre');
      return;
    }

    try {
      const user = await createUser(newUserName.trim());
      await login(user.id);
      navigate('/select-level');
    } catch (err: any) {
      setError(err.message || 'Error al crear usuario');
    }
  };

  const handleDelete = async (e: React.MouseEvent, userId: string) => {
    e.stopPropagation();
    if (confirm('¿Eliminar este perfil y todo su progreso? Esta acción no se puede deshacer.')) {
      await deleteUser(userId);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-lg w-full"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary mb-6 shadow-xl shadow-accent-primary/30"
          >
            <span className="text-5xl">🎓</span>
          </motion.div>
          
          <h1 className="heading-1 gradient-text mb-3">EnglishPro</h1>
          <p className="text-xl text-gray-400">Tu camino hacia el dominio del inglés</p>
        </div>

        {/* User Selection */}
        <div className="card">
          {!showNewUser ? (
            <>
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-accent-primary" />
                {users.filter(u => !u.isAdmin).length > 0 ? 'Selecciona tu perfil' : 'Crea tu perfil'}
              </h2>

              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              {users.length > 0 && (
                <div className="space-y-3 mb-6">
                  {[...users].sort((a, b) => (b.isAdmin ? 1 : 0) - (a.isAdmin ? 1 : 0)).map((user, index) => (
                    <motion.div
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleLogin(user.id)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleLogin(user.id); }}
                      className={`w-full p-4 glass rounded-xl flex items-center justify-between group hover:border-accent-primary/50 transition-all cursor-pointer ${user.isAdmin ? 'border border-amber-500/40 bg-amber-500/5' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${user.isAdmin ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-accent-primary to-accent-secondary'}`}>
                          {user.isAdmin ? '⚙' : user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-white">{user.name}</p>
                            {user.isAdmin && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                ADMIN · Sin restricciones
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-400">
                            {user.isAdmin ? 'Modo tester — todas las actividades desbloqueadas' : `Nivel ${user.progress.currentLevel} • ${user.progress.totalXP} XP`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => handleDelete(e, user.id)}
                          className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                          title="Eliminar perfil"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-accent-primary transition-colors" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              <button
                onClick={() => setShowNewUser(true)}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                <span>Crear Nuevo Perfil</span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-dark-500" />
                <span className="text-xs text-gray-500">o</span>
                <div className="flex-1 h-px bg-dark-500" />
              </div>

              {/* Import progress */}
              <input
                ref={importInputRef}
                type="file"
                accept=".json"
                className="hidden"
                onChange={e => { const f = e.target.files?.[0]; if (f) handleImportFile(f); e.target.value = ''; }}
              />

              {importState === 'idle' && (
                <button
                  onClick={() => importInputRef.current?.click()}
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>Restaurar progreso guardado</span>
                </button>
              )}

              {importState === 'preview' && (
                <div className="rounded-xl border border-accent-primary/30 bg-accent-primary/5 p-4 space-y-3">
                  <p className="text-sm text-gray-300">
                    Se encontró el perfil <strong className="text-white">{importPreviewName}</strong>. ¿Restaurar este progreso?
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { setImportState('idle'); setPendingImportText(null); }}
                      className="btn-secondary flex-1 text-sm py-2"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={confirmImport}
                      className="btn-primary flex-1 text-sm py-2 flex items-center justify-center gap-1"
                    >
                      <Upload className="w-4 h-4" />
                      Restaurar
                    </button>
                  </div>
                </div>
              )}

              {importState === 'importing' && (
                <div className="flex items-center justify-center gap-2 py-3 text-sm text-accent-primary">
                  <div className="spinner w-4 h-4" />
                  Restaurando...
                </div>
              )}

              {importState === 'error' && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 space-y-2">
                  <p className="text-sm text-red-400">{importError}</p>
                  <button
                    onClick={() => { setImportState('idle'); setImportError(''); }}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Intentar de nuevo
                  </button>
                </div>
              )}
            </>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleCreateUser}
            >
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-primary" />
                Nuevo Perfil
              </h2>

              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  ¿Cómo te llamas?
                </label>
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  placeholder="Tu nombre"
                  className="input-field"
                  autoFocus
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowNewUser(false);
                    setError('');
                  }}
                  className="btn-secondary flex-1"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Comenzar
                </button>
              </div>
            </motion.form>
          )}
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            { emoji: '📚', label: '13 Niveles' },
            { emoji: '🎮', label: '15+ Actividades' },
            { emoji: '📊', label: 'Progreso' },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-3"
            >
              <span className="text-2xl">{feature.emoji}</span>
              <p className="text-sm text-gray-400 mt-1">{feature.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
