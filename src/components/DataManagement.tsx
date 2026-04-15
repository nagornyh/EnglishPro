import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Upload, 
  FileJson, 
  HardDrive,
  Clock,
  Trash2,
  RefreshCw
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import db from '../services/database';
import Alert from './Alert';

interface DataSummary {
  user: {
    name: string;
    xp: number;
    level: number;
    streak: number;
    createdAt: string;
  };
  stats: {
    completedLessons: number;
    wordsLearned: number;
    totalTimeMinutes: number;
    achievementsUnlocked: number;
  };
  exportDate: string;
  version: string;
}

export default function DataManagement() {
  const { user } = useUser();
  const [exporting, setExporting] = useState(false);
  const [importing, setImporting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [previewData, setPreviewData] = useState<DataSummary | null>(null);
  const [importFile, setImportFile] = useState<File | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [storageInfo, setStorageInfo] = useState<{ used: string; available: string } | null>(null);

  // Calculate storage info
  const checkStorage = async () => {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      try {
        const estimate = await navigator.storage.estimate();
        const used = formatBytes(estimate.usage || 0);
        const available = formatBytes(estimate.quota || 0);
        setStorageInfo({ used, available });
      } catch (e) {
        console.log('Storage estimation not supported');
      }
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Export functionality
  const handleExport = async () => {
    if (!user) return;
    setExporting(true);
    setMessage(null);
    
    try {
      const data = await db.exportUserData(user.id);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      
      const date = new Date();
      const timestamp = date.toISOString().replace(/[:.]/g, '-').slice(0, 19);
      a.download = `englishpro-${user.name}-${timestamp}.json`;
      
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setMessage({ type: 'success', text: '¡Datos exportados correctamente!' });
    } catch (error) {
      console.error('Export failed:', error);
      setMessage({ type: 'error', text: 'Error al exportar datos' });
    }
    
    setExporting(false);
  };

  // Drag and drop handlers
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === 'application/json') {
      await processFile(file);
    } else {
      setMessage({ type: 'error', text: 'Por favor, selecciona un archivo JSON válido' });
    }
  }, []);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  // Cache parsed import data to avoid reading the file twice
  const [parsedImportData, setParsedImportData] = useState<string | null>(null);

  const processFile = async (file: File) => {
    setImportFile(file);
    setMessage(null);
    
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      
      // Validate required structure: must have user with id, and progress data
      if (
        data.user &&
        typeof data.user.id === 'string' &&
        typeof data.user.name === 'string' &&
        (Array.isArray(data.completedLessons) || data.completedLessons === undefined)
      ) {
        // Cache raw text so confirmImport doesn't re-read the file
        setParsedImportData(text);

        const summary: DataSummary = {
          user: {
            name: data.user.name || 'Usuario',
            // Map the real export format (progress.totalXP, etc.)
            xp: data.user.progress?.totalXP ?? data.user.xp ?? 0,
            level: data.user.progress?.currentLevel ?? data.user.level ?? 1,
            streak: data.user.streakData?.currentStreak ?? data.user.streak ?? 0,
            createdAt: data.user.createdAt || new Date().toISOString(),
          },
          stats: {
            completedLessons: data.completedLessons?.length || 0,
            wordsLearned: data.vocabularyProgress?.length || 0,
            totalTimeMinutes: Math.round((data.dailyStats?.reduce((acc: number, s: any) => 
              acc + (s.timeSpentSeconds || s.timeSpentMinutes || 0), 0) || 0) / 60),
            achievementsUnlocked: data.user?.achievements?.filter((a: any) => a.unlockedAt)?.length || 0,
          },
          exportDate: data.exportedAt || data.exportDate || 'Desconocido',
          version: data.version || '1.0',
        };
        setPreviewData(summary);
      } else {
        throw new Error('Formato de archivo inválido');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'El archivo no tiene un formato válido' });
      setImportFile(null);
      setParsedImportData(null);
      setPreviewData(null);
    }
  };

  const confirmImport = async () => {
    if (!importFile && !parsedImportData) return;
    setImporting(true);
    
    try {
      // Use cached text instead of re-reading the file
      const text = parsedImportData || await importFile!.text();
      await db.importUserData(text);
      setMessage({ type: 'success', text: '¡Datos importados correctamente! Recargando...' });
      setTimeout(() => window.location.reload(), 1500);
    } catch (error) {
      console.error('Import failed:', error);
      setMessage({ type: 'error', text: 'Error al importar los datos' });
    }
    
    setImporting(false);
  };

  const cancelImport = () => {
    setImportFile(null);
    setPreviewData(null);
    setMessage(null);
  };

  const clearAllData = async () => {
    if (!user) return;
    
    const confirmed = window.confirm(
      '⚠️ ¿Estás seguro de que quieres eliminar TODOS tus datos?\n\n' +
      'Esta acción eliminará:\n' +
      '• Tu perfil y configuración\n' +
      '• Todo tu progreso y XP\n' +
      '• Logros desbloqueados\n' +
      '• Historial de palabras aprendidas\n\n' +
      '¡Esta acción NO se puede deshacer!'
    );
    
    if (confirmed) {
      const doubleConfirm = window.confirm(
        '🚨 ÚLTIMA ADVERTENCIA 🚨\n\n' +
        '¿Realmente quieres eliminar todo tu progreso?\n' +
        'Escribe "ELIMINAR" para confirmar.'
      );
      
      if (doubleConfirm) {
        try {
          await db.clearAllData();
          window.location.reload();
        } catch (error) {
          setMessage({ type: 'error', text: 'Error al eliminar datos' });
        }
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Message Alert */}
      <AnimatePresence>
        {message && (
          <Alert
            type={message.type === 'success' ? 'success' : 'error'}
            message={message.text}
          />
        )}
      </AnimatePresence>

      {/* Export Section */}
      <div className="p-4 bg-dark-700/50 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <Download className="w-5 h-5 text-accent-primary" />
          <span className="font-medium text-white">Exportar Progreso</span>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Descarga una copia de seguridad de tu progreso en formato JSON. 
          Incluye tu perfil, lecciones completadas, vocabulario aprendido y logros.
        </p>
        <button
          onClick={handleExport}
          disabled={exporting}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {exporting ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              Exportando...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Descargar Backup
            </>
          )}
        </button>
      </div>

      {/* Import Section with Drag & Drop */}
      <div className="p-4 bg-dark-700/50 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <Upload className="w-5 h-5 text-accent-primary" />
          <span className="font-medium text-white">Importar Progreso</span>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Restaura tu progreso desde un archivo de backup. 
          Esto reemplazará todos los datos actuales.
        </p>

        {!previewData ? (
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`
              border-2 border-dashed rounded-xl p-8 text-center transition-all
              ${dragActive 
                ? 'border-accent-primary bg-accent-primary/10' 
                : 'border-dark-500 hover:border-dark-400'
              }
            `}
          >
            <FileJson className={`w-12 h-12 mx-auto mb-4 ${dragActive ? 'text-accent-primary' : 'text-gray-500'}`} />
            <p className="text-gray-300 mb-2">
              Arrastra y suelta tu archivo aquí
            </p>
            <p className="text-sm text-gray-500 mb-4">o</p>
            <label className="btn-secondary inline-flex items-center gap-2 cursor-pointer">
              <Upload className="w-4 h-4" />
              Seleccionar archivo
              <input
                type="file"
                accept=".json"
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-dark-500 rounded-xl p-4 space-y-4"
          >
            <div className="flex items-center gap-3">
              <FileJson className="w-8 h-8 text-accent-primary" />
              <div>
                <p className="font-medium text-white">{importFile?.name}</p>
                <p className="text-xs text-gray-400">
                  Exportado: {new Date(previewData.exportDate).toLocaleString('es-ES')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-dark-600/50 rounded-lg p-3">
                <p className="text-gray-400">Usuario</p>
                <p className="font-medium text-white">{previewData.user.name}</p>
              </div>
              <div className="bg-dark-600/50 rounded-lg p-3">
                <p className="text-gray-400">Nivel</p>
                <p className="font-medium text-white">{previewData.user.level}</p>
              </div>
              <div className="bg-dark-600/50 rounded-lg p-3">
                <p className="text-gray-400">XP Total</p>
                <p className="font-medium text-accent-primary">{previewData.user.xp.toLocaleString()}</p>
              </div>
              <div className="bg-dark-600/50 rounded-lg p-3">
                <p className="text-gray-400">Racha</p>
                <p className="font-medium text-orange-400">{previewData.user.streak} días 🔥</p>
              </div>
              <div className="bg-dark-600/50 rounded-lg p-3">
                <p className="text-gray-400">Lecciones</p>
                <p className="font-medium text-white">{previewData.stats.completedLessons}</p>
              </div>
              <div className="bg-dark-600/50 rounded-lg p-3">
                <p className="text-gray-400">Palabras</p>
                <p className="font-medium text-white">{previewData.stats.wordsLearned}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={cancelImport}
                className="btn-secondary flex-1"
              >
                Cancelar
              </button>
              <button
                onClick={confirmImport}
                disabled={importing}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                {importing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Importando...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Confirmar Importación
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Storage Info */}
      <button
        onClick={checkStorage}
        className="w-full p-4 bg-dark-700/50 rounded-xl flex items-center justify-between hover:bg-dark-600 transition-colors"
      >
        <div className="flex items-center gap-3">
          <HardDrive className="w-5 h-5 text-accent-primary" />
          <div className="text-left">
            <p className="font-medium text-white">Almacenamiento local</p>
            <p className="text-sm text-gray-400">
              {storageInfo 
                ? `Usando ${storageInfo.used} de ${storageInfo.available}` 
                : 'Click para ver información'}
            </p>
          </div>
        </div>
        <Clock className="w-4 h-4 text-gray-500" />
      </button>

      {/* Danger Zone */}
      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <Trash2 className="w-5 h-5 text-red-400" />
          <span className="font-medium text-red-400">Zona de Peligro</span>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Eliminar permanentemente todos los datos de la aplicación.
          Esta acción no se puede deshacer.
        </p>
        <button
          onClick={clearAllData}
          className="w-full p-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
        >
          Eliminar todos mis datos
        </button>
      </div>
    </div>
  );
}
