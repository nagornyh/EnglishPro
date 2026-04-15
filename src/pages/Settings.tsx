import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Volume2, 
  Save,
  User,
  Globe,
  Database,
  Palette,
  Type,
  Bell,
  Clock,
  RotateCcw,
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useTheme, themeOptions, fontSizeOptions, autoThemeSchedule } from '../context/ThemeContext';
import { useNotifications } from '../services/notificationService';
import DataManagement from '../components/DataManagement';

export default function Settings() {
  const { user, updateUser } = useUser();
  const { theme, setTheme, themeMode, setThemeMode, fontSize, setFontSize, effectiveTheme } = useTheme();
  const { 
    settings: notifSettings, 
    permission, 
    isSupported,
    updateSettings: updateNotifSettings,
    enableNotifications,
    disableNotifications 
  } = useNotifications();
  const [saved, setSaved] = useState(false);

  if (!user) return null;

  const [settings, setSettings] = useState({
    soundEnabled: user.settings.soundEnabled,
    autoPlayAudio: user.settings.autoPlayAudio,
    showTranslations: user.settings.showTranslations,
    dailyGoal: user.settings.dailyGoal,
  });

  const handleSave = async () => {
    await updateUser({
      settings: {
        ...user.settings,
        ...settings,
      }
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full space-y-6 max-w-3xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="heading-2 text-white mb-2">Configuración</h1>
        <p className="text-gray-400">Personaliza tu experiencia de aprendizaje</p>
      </motion.div>

      {/* Profile Section */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-6 h-6 text-accent-primary" />
          <h2 className="text-xl font-bold text-white">Perfil</h2>
        </div>

        <div className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-xl">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center text-2xl font-bold text-white">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-xl font-semibold text-white">{user.name}</p>
            <p className="text-sm text-gray-400">
              Miembro desde {new Date(user.createdAt).toLocaleDateString('es-ES')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Appearance Settings */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center gap-3 mb-6">
          <Palette className="w-6 h-6 text-accent-primary" />
          <h2 className="text-xl font-bold text-white">Apariencia</h2>
        </div>

        <div className="space-y-6">
          {/* Theme Mode */}
          <div>
            <p className="font-medium text-white mb-3">Modo de tema</p>
            <div className="flex gap-3">
              <button
                onClick={() => setThemeMode('manual')}
                className={`flex-1 p-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
                  themeMode === 'manual'
                    ? 'border-accent-primary bg-accent-primary/10 text-white'
                    : 'border-dark-500 text-gray-400 hover:border-dark-400'
                }`}
              >
                <Palette className="w-5 h-5" />
                Manual
              </button>
              <button
                onClick={() => setThemeMode('auto')}
                className={`flex-1 p-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
                  themeMode === 'auto'
                    ? 'border-accent-primary bg-accent-primary/10 text-white'
                    : 'border-dark-500 text-gray-400 hover:border-dark-400'
                }`}
              >
                <Clock className="w-5 h-5" />
                Automático
              </button>
            </div>
            
            {themeMode === 'auto' && (
              <div className="mt-4 p-4 bg-dark-700/50 rounded-xl">
                <p className="text-sm text-gray-400 mb-3">El tema cambia según la hora del día:</p>
                <div className="grid grid-cols-2 gap-2">
                  {autoThemeSchedule.map((item) => (
                    <div 
                      key={item.time} 
                      className={`flex items-center gap-2 p-2 rounded-lg ${
                        item.theme === (effectiveTheme === 'dark' ? 'Oscuro' : 
                                        effectiveTheme === 'darker' ? 'Negro Total' : 
                                        effectiveTheme === 'midnight' ? 'Medianoche' : 'Océano')
                          ? 'bg-accent-primary/20 border border-accent-primary/50'
                          : 'bg-dark-600'
                      }`}
                    >
                      <span>{item.emoji}</span>
                      <div>
                        <p className="text-xs text-gray-400">{item.time}</p>
                        <p className="text-sm text-white">{item.theme}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Theme Selection - only show if manual */}
          {themeMode === 'manual' && (
            <div>
              <p className="font-medium text-white mb-3">Tema</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      theme === option.value
                        ? 'border-accent-primary bg-accent-primary/10'
                        : 'border-dark-500 hover:border-dark-400'
                    }`}
                  >
                    <div 
                      className="w-full h-8 rounded-lg mb-2"
                      style={{ backgroundColor: option.preview }}
                    />
                    <p className="text-sm text-white">{option.label}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Font Size Selection */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Type className="w-5 h-5 text-accent-primary" />
              <p className="font-medium text-white">Tamaño de texto</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {fontSizeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFontSize(option.value)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    fontSize === option.value
                      ? 'border-accent-primary bg-accent-primary/10 text-white'
                      : 'border-dark-500 text-gray-400 hover:border-dark-400'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              El tamaño actual afecta todo el texto de la aplicación
            </p>
          </div>
        </div>
      </motion.div>

      {/* Notification Settings */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-accent-primary" />
          <h2 className="text-xl font-bold text-white">Notificaciones</h2>
        </div>

        {!isSupported ? (
          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
            <p className="text-amber-400">
              Las notificaciones no están soportadas en este navegador.
            </p>
          </div>
        ) : permission === 'denied' ? (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="text-red-400">
              Las notificaciones están bloqueadas. Actívalas en la configuración del navegador.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <ToggleSetting
              label="Activar notificaciones"
              description="Recibe recordatorios para practicar"
              enabled={notifSettings.enabled}
              onChange={async (v) => {
                if (v) {
                  await enableNotifications();
                } else {
                  disableNotifications();
                }
              }}
            />

            {notifSettings.enabled && (
              <>
                <ToggleSetting
                  label="Recordatorio diario"
                  description="Notificación a tu hora preferida"
                  enabled={notifSettings.dailyReminder}
                  onChange={(v) => updateNotifSettings({ dailyReminder: v })}
                />

                {notifSettings.dailyReminder && (
                  <div className="p-4 bg-dark-700/50 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">Hora del recordatorio</p>
                        <p className="text-sm text-gray-400">Cuándo quieres que te avisemos</p>
                      </div>
                      <input
                        type="time"
                        value={notifSettings.reminderTime}
                        onChange={(e) => updateNotifSettings({ reminderTime: e.target.value })}
                        className="bg-dark-600 text-white px-3 py-2 rounded-lg border border-dark-500 focus:border-accent-primary outline-none"
                      />
                    </div>
                  </div>
                )}

                <ToggleSetting
                  label="Alerta de racha"
                  description="Aviso si estás por perder tu racha"
                  enabled={notifSettings.streakReminder}
                  onChange={(v) => updateNotifSettings({ streakReminder: v })}
                />

                <ToggleSetting
                  label="Logros"
                  description="Notificación al desbloquear logros"
                  enabled={notifSettings.achievementNotify}
                  onChange={(v) => updateNotifSettings({ achievementNotify: v })}
                />
              </>
            )}
          </div>
        )}
      </motion.div>

      {/* Sound Settings */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center gap-3 mb-6">
          <Volume2 className="w-6 h-6 text-accent-primary" />
          <h2 className="text-xl font-bold text-white">Sonido</h2>
        </div>

        <div className="space-y-4">
          <ToggleSetting
            label="Efectos de sonido"
            description="Sonidos de retroalimentación en actividades"
            enabled={settings.soundEnabled}
            onChange={(v) => setSettings({ ...settings, soundEnabled: v })}
          />
          <ToggleSetting
            label="Reproducción automática"
            description="Reproducir pronunciación automáticamente"
            enabled={settings.autoPlayAudio}
            onChange={(v) => setSettings({ ...settings, autoPlayAudio: v })}
          />
        </div>
      </motion.div>

      {/* Learning Settings */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-accent-primary" />
          <h2 className="text-xl font-bold text-white">Aprendizaje</h2>
        </div>

        <div className="space-y-4">
          <ToggleSetting
            label="Mostrar traducciones"
            description="Ver traducciones al español"
            enabled={settings.showTranslations}
            onChange={(v) => setSettings({ ...settings, showTranslations: v })}
          />

          <Link
            to="/change-level"
            className="p-4 bg-dark-700/50 rounded-xl flex items-center justify-between group hover:bg-dark-600/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-accent-primary" />
              <div>
                <p className="font-medium text-white">Cambiar nivel</p>
                <p className="text-sm text-gray-400">Selecciona otro nivel si ya dominas el actual</p>
              </div>
            </div>
            <span className="text-gray-500 group-hover:text-accent-primary transition-colors">→</span>
          </Link>

          <div className="p-4 bg-dark-700/50 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium text-white">Meta diaria de XP</p>
                <p className="text-sm text-gray-400">Cuántos XP quieres ganar por día</p>
              </div>
              <span className="text-2xl font-bold text-accent-primary">{settings.dailyGoal}</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              step="10"
              value={settings.dailyGoal}
              onChange={(e) => setSettings({ ...settings, dailyGoal: Number(e.target.value) })}
              className="w-full accent-accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>10 XP</span>
              <span>200 XP</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Data Management */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center gap-3 mb-6">
          <Database className="w-6 h-6 text-accent-primary" />
          <h2 className="text-xl font-bold text-white">Gestión de Datos</h2>
        </div>

        <DataManagement />
      </motion.div>

      {/* Save Button */}
      <motion.div variants={itemVariants}>
        <button
          onClick={handleSave}
          className={`
            btn-primary w-full flex items-center justify-center gap-2
            ${saved ? 'bg-green-500 hover:bg-green-500' : ''}
          `}
        >
          <Save className="w-5 h-5" />
          {saved ? '¡Guardado!' : 'Guardar Cambios'}
        </button>
      </motion.div>

      {/* Version Info */}
      <motion.div variants={itemVariants} className="text-center text-sm text-gray-500">
        <p>EnglishPro v1.0.0</p>
        <p>Hecho con ❤️ para aprender inglés</p>
      </motion.div>
    </motion.div>
  );
}

interface ToggleSettingProps {
  label: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
}

function ToggleSetting({ label, description, enabled, onChange }: ToggleSettingProps) {
  return (
    <div className="p-4 bg-dark-700/50 rounded-xl flex items-center justify-between">
      <div>
        <p className="font-medium text-white">{label}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`
          w-14 h-8 rounded-full transition-colors relative
          ${enabled ? 'bg-accent-primary' : 'bg-dark-500'}
        `}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full absolute top-1"
          animate={{ left: enabled ? '30px' : '4px' }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </button>
    </div>
  );
}
