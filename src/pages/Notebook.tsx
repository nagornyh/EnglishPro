// Notebook Page Component
// Personal study notebook with notes, vocabulary lists, and study sessions

import { useState, useEffect, useRef, useCallback } from 'react';
import { notebookService } from '../services/notebookService';
import type { NotebookEntry, VocabList, StudySession } from '../services/notebookService';
import { useUser } from '../context/UserContext';

type TabType = 'notes' | 'vocab-lists' | 'sessions';

export default function Notebook() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<TabType>('notes');
  const [entries, setEntries] = useState<NotebookEntry[]>([]);
  const [vocabLists, setVocabLists] = useState<VocabList[]>([]);
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal states
  const [showEntryModal, setShowEntryModal] = useState(false);
  const [showVocabModal, setShowVocabModal] = useState(false);
  const [editingEntry, setEditingEntry] = useState<NotebookEntry | null>(null);
  const [editingList, setEditingList] = useState<VocabList | null>(null);

  // Load data - with stale request guard
  const loadIdRef = useRef(0);
  
  useEffect(() => {
    if (user?.id) {
      loadData();
    }
  }, [user?.id]);

  const loadData = useCallback(async () => {
    if (!user?.id) return;
    const loadId = ++loadIdRef.current;
    setLoading(true);
    try {
      await notebookService.init();
      const [userEntries, userLists, userSessions] = await Promise.all([
        notebookService.getEntriesByUser(user.id),
        notebookService.getVocabListsByUser(user.id),
        notebookService.getStudySessionsByUser(user.id),
      ]);
      // Only update state if this is still the latest request
      if (loadId !== loadIdRef.current) return;
      setEntries(userEntries);
      setVocabLists(userLists);
      setSessions(userSessions);
    } catch (error) {
      console.error('Error loading notebook data:', error);
    } finally {
      if (loadId === loadIdRef.current) {
        setLoading(false);
      }
    }
  }, [user?.id]);

  // Entry form state
  const [entryForm, setEntryForm] = useState({
    type: 'note' as NotebookEntry['type'],
    title: '',
    content: '',
    tags: ''
  });

  // Save entry
  const handleSaveEntry = async () => {
    if (!user?.id || !entryForm.title.trim()) return;

    try {
      if (editingEntry) {
        await notebookService.updateEntry(editingEntry.id, {
          title: entryForm.title,
          content: entryForm.content,
          tags: entryForm.tags.split(',').map(t => t.trim()).filter(Boolean),
        });
      } else {
        await notebookService.createEntry(
          user.id,
          entryForm.type,
          entryForm.title,
          entryForm.content,
          entryForm.tags.split(',').map(t => t.trim()).filter(Boolean)
        );
      }
      
      await loadData();
      setShowEntryModal(false);
      setEditingEntry(null);
      setEntryForm({ type: 'note', title: '', content: '', tags: '' });
    } catch (error) {
      console.error('Error saving entry:', error);
    }
  };

  // Delete entry
  const handleDeleteEntry = async (id: string) => {
    try {
      await notebookService.deleteEntry(id);
      await loadData();
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  // Vocab list form
  const [listForm, setListForm] = useState({
    name: '',
    description: '',
    color: '#6366f1'
  });

  // Save vocab list
  const handleSaveList = async () => {
    if (!user?.id || !listForm.name.trim()) return;

    try {
      if (editingList) {
        await notebookService.updateVocabList(editingList.id, {
          name: listForm.name,
          description: listForm.description,
          color: listForm.color,
        });
      } else {
        await notebookService.createVocabList(
          user.id,
          listForm.name,
          listForm.description,
          listForm.color
        );
      }
      
      await loadData();
      setShowVocabModal(false);
      setEditingList(null);
      setListForm({ name: '', description: '', color: '#6366f1' });
    } catch (error) {
      console.error('Error saving vocab list:', error);
    }
  };

  // Type icons
  const typeIcons: Record<NotebookEntry['type'], string> = {
    note: '📝',
    vocabulary: '📚',
    sentence: '💬',
    rule: '📐',
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 to-accent-900 rounded-2xl p-6 mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">📓 Mi Cuaderno</h1>
        <p className="text-gray-300">Tu espacio personal de estudio</p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-dark-900/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-primary-400">{entries.length}</p>
            <p className="text-gray-500 text-xs">Notas</p>
          </div>
          <div className="bg-dark-900/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-accent-400">{vocabLists.length}</p>
            <p className="text-gray-500 text-xs">Listas</p>
          </div>
          <div className="bg-dark-900/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-yellow-400">{sessions.length}</p>
            <p className="text-gray-500 text-xs">Sesiones</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(['notes', 'vocab-lists', 'sessions'] as TabType[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
              activeTab === tab 
                ? 'bg-primary-600 text-white' 
                : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
            }`}
          >
            {tab === 'notes' && '📝 Notas'}
            {tab === 'vocab-lists' && '📚 Vocabulario'}
            {tab === 'sessions' && '📊 Sesiones'}
          </button>
        ))}
      </div>

      {/* Notes Tab */}
      {activeTab === 'notes' && (
        <div>
          {/* Add button */}
          <button
            onClick={() => {
              setEditingEntry(null);
              setEntryForm({ type: 'note', title: '', content: '', tags: '' });
              setShowEntryModal(true);
            }}
            className="w-full mb-6 py-4 bg-dark-700 rounded-xl border-2 border-dashed border-dark-500 text-gray-400 hover:bg-dark-600 hover:border-primary-500 hover:text-white transition-all"
          >
            + Agregar nueva nota
          </button>

          {/* Entries list */}
          <div className="space-y-4">
            {entries.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-5xl mb-4">📝</p>
                <p>No tienes notas todavía</p>
                <p className="text-sm">Crea tu primera nota para empezar</p>
              </div>
            ) : (
              entries.map(entry => (
                <div key={entry.id} className="bg-dark-800 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{typeIcons[entry.type]}</span>
                      <div>
                        <h3 className="font-bold text-white">{entry.title}</h3>
                        <p className="text-gray-500 text-xs">
                          {new Date(entry.createdAt).toLocaleDateString()}
                          {entry.isFavorite && ' ⭐'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingEntry(entry);
                          setEntryForm({
                            type: entry.type,
                            title: entry.title,
                            content: entry.content,
                            tags: entry.tags.join(', ')
                          });
                          setShowEntryModal(true);
                        }}
                        className="text-gray-500 hover:text-white"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDeleteEntry(entry.id)}
                        className="text-gray-500 hover:text-red-400"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm whitespace-pre-wrap">{entry.content}</p>
                  
                  {entry.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-dark-700 rounded text-xs text-gray-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Vocab Lists Tab */}
      {activeTab === 'vocab-lists' && (
        <div>
          {/* Add button */}
          <button
            onClick={() => {
              setEditingList(null);
              setListForm({ name: '', description: '', color: '#6366f1' });
              setShowVocabModal(true);
            }}
            className="w-full mb-6 py-4 bg-dark-700 rounded-xl border-2 border-dashed border-dark-500 text-gray-400 hover:bg-dark-600 hover:border-primary-500 hover:text-white transition-all"
          >
            + Crear nueva lista
          </button>

          {/* Lists */}
          <div className="space-y-4">
            {vocabLists.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-5xl mb-4">📚</p>
                <p>No tienes listas de vocabulario</p>
                <p className="text-sm">Crea tu primera lista para organizar palabras</p>
              </div>
            ) : (
              vocabLists.map(list => (
                <div 
                  key={list.id} 
                  className="bg-dark-800 rounded-xl p-5"
                  style={{ borderLeft: `4px solid ${list.color}` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-white">{list.name}</h3>
                      <p className="text-gray-500 text-sm">{list.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">
                        {list.words.length} palabras
                      </span>
                      <button
                        onClick={() => {
                          setEditingList(list);
                          setListForm({
                            name: list.name,
                            description: list.description,
                            color: list.color
                          });
                          setShowVocabModal(true);
                        }}
                        className="text-gray-500 hover:text-white"
                      >
                        ✏️
                      </button>
                    </div>
                  </div>
                  
                  {/* Word preview */}
                  {list.words.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {list.words.slice(0, 5).map(word => (
                        <span 
                          key={word.id} 
                          className={`px-3 py-1 rounded text-sm ${
                            word.mastered 
                              ? 'bg-green-900/30 text-green-400' 
                              : 'bg-dark-700 text-gray-300'
                          }`}
                        >
                          {word.word}
                        </span>
                      ))}
                      {list.words.length > 5 && (
                        <span className="px-3 py-1 text-gray-500 text-sm">
                          +{list.words.length - 5} más
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Sessions Tab */}
      {activeTab === 'sessions' && (
        <div>
          {sessions.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-5xl mb-4">📊</p>
              <p>No hay sesiones registradas</p>
              <p className="text-sm">Tus sesiones de estudio aparecerán aquí</p>
            </div>
          ) : (
            <div className="space-y-4">
              {sessions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(session => (
                <div key={session.id} className="bg-dark-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-white font-medium">
                        {new Date(session.date).toLocaleDateString('es-ES', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long'
                        })}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {session.duration} minutos de estudio
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary-400">
                        {session.wordsReviewed} palabras
                      </p>
                      <p className="text-gray-500 text-sm">
                        {Math.round(session.accuracy)}% precisión
                      </p>
                    </div>
                  </div>
                  
                  {session.activitiesCompleted.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {session.activitiesCompleted.map((activity, i) => (
                        <span key={i} className="px-2 py-1 bg-dark-700 rounded text-xs text-gray-400">
                          {activity}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {session.notes && (
                    <p className="mt-3 text-gray-400 text-sm italic">
                      📝 {session.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Entry Modal */}
      {showEntryModal && (
        <div className="modal-overlay p-4">
          <div className="bg-dark-800 rounded-2xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold text-white mb-4">
              {editingEntry ? 'Editar Nota' : 'Nueva Nota'}
            </h2>
            
            {/* Type selector */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Tipo</label>
              <div className="grid grid-cols-4 gap-2">
                {(['note', 'vocabulary', 'sentence', 'rule'] as NotebookEntry['type'][]).map(type => (
                  <button
                    key={type}
                    onClick={() => setEntryForm(prev => ({ ...prev, type }))}
                    className={`py-2 rounded-lg text-center transition-colors ${
                      entryForm.type === type
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
                    }`}
                  >
                    <span className="text-xl">{typeIcons[type]}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Title */}
            <div className="mb-4">
              <label className="form-label">Título</label>
              <input
                type="text"
                value={entryForm.title}
                onChange={(e) => setEntryForm(prev => ({ ...prev, title: e.target.value }))}
                className="input-field"
                placeholder="Título de la nota"
              />
            </div>
            
            {/* Content */}
            <div className="mb-4">
              <label className="form-label">Contenido</label>
              <textarea
                value={entryForm.content}
                onChange={(e) => setEntryForm(prev => ({ ...prev, content: e.target.value }))}
                className="input-field"
                placeholder="Escribe aquí..."
              />
            </div>
            
            {/* Tags */}
            <div className="mb-6">
              <label className="form-label">Etiquetas (separadas por coma)</label>
              <input
                type="text"
                value={entryForm.tags}
                onChange={(e) => setEntryForm(prev => ({ ...prev, tags: e.target.value }))}
                className="input-field"
                placeholder="gramática, verbos, importante"
              />
            </div>
            
            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowEntryModal(false);
                  setEditingEntry(null);
                }}
                className="flex-1 py-3 bg-dark-600 text-gray-300 rounded-xl hover:bg-dark-500"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveEntry}
                disabled={!entryForm.title.trim()}
                className="flex-1 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 disabled:opacity-50"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Vocab List Modal */}
      {showVocabModal && (
        <div className="modal-overlay p-4">
          <div className="bg-dark-800 rounded-2xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold text-white mb-4">
              {editingList ? 'Editar Lista' : 'Nueva Lista de Vocabulario'}
            </h2>
            
            {/* Name */}
            <div className="mb-4">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                value={listForm.name}
                onChange={(e) => setListForm(prev => ({ ...prev, name: e.target.value }))}
                className="input-field"
                placeholder="Mi lista de vocabulario"
              />
            </div>
            
            {/* Description */}
            <div className="mb-4">
              <label className="form-label">Descripción</label>
              <input
                type="text"
                value={listForm.description}
                onChange={(e) => setListForm(prev => ({ ...prev, description: e.target.value }))}
                className="input-field"
                placeholder="Palabras de tecnología"
              />
            </div>
            
            {/* Color */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">Color</label>
              <div className="flex gap-2">
                {['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'].map(color => (
                  <button
                    key={color}
                    onClick={() => setListForm(prev => ({ ...prev, color }))}
                    className={`w-8 h-8 rounded-full transition-transform ${
                      listForm.color === color ? 'scale-125 ring-2 ring-white' : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowVocabModal(false);
                  setEditingList(null);
                }}
                className="flex-1 py-3 bg-dark-600 text-gray-300 rounded-xl hover:bg-dark-500"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveList}
                disabled={!listForm.name.trim()}
                className="flex-1 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 disabled:opacity-50"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
