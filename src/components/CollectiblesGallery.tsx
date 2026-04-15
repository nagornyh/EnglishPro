import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Medal, 
  Palette, 
  Crown,
  Lock,
  Check
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { 
  badges, 
  titles, 
  themeUnlocks,
  getUnlockedBadges,
  getUnlockedTitles,
  getUnlockedThemes,
  getNextUnlockable,
  rarityColors,
  type Collectible,
  type UserTitle,
  type ThemeUnlock,
} from '../data/collectibles';

type TabType = 'badges' | 'titles' | 'themes';

export default function CollectiblesGallery() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<TabType>('badges');
  const [unlockedBadges, setUnlockedBadges] = useState<Collectible[]>([]);
  const [unlockedTitles, setUnlockedTitles] = useState<UserTitle[]>([]);
  const [unlockedThemes, setUnlockedThemes] = useState<ThemeUnlock[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [nextUnlock, setNextUnlock] = useState<any>(null);

  useEffect(() => {
    if (user) {
      setUnlockedBadges(getUnlockedBadges(user));
      setUnlockedTitles(getUnlockedTitles(user));
      setUnlockedThemes(getUnlockedThemes(user));
      setNextUnlock(getNextUnlockable(user));
      
      // Load selected title from localStorage
      const savedTitle = localStorage.getItem(`selectedTitle_${user.id}`);
      if (savedTitle) setSelectedTitle(savedTitle);
    }
  }, [user?.progress.totalXP, user?.streakData.longestStreak]);

  const selectTitle = (titleId: string) => {
    if (!user) return;
    setSelectedTitle(titleId);
    localStorage.setItem(`selectedTitle_${user.id}`, titleId);
  };

  if (!user) return null;

  const tabs = [
    { id: 'badges' as TabType, label: 'Insignias', icon: <Medal className="w-4 h-4" />, count: `${unlockedBadges.length}/${badges.length}` },
    { id: 'titles' as TabType, label: 'Títulos', icon: <Crown className="w-4 h-4" />, count: `${unlockedTitles.length}/${titles.length}` },
    { id: 'themes' as TabType, label: 'Temas', icon: <Palette className="w-4 h-4" />, count: `${unlockedThemes.length}/${themeUnlocks.length}` },
  ];

  return (
    <div className="space-y-4">
      {/* Next Unlock Preview */}
      {nextUnlock && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent-primary/20 flex items-center justify-center text-2xl">
              {nextUnlock.item.icon || '🎁'}
            </div>
            <div className="flex-1">
              <p className="text-xs text-accent-primary">Próximo desbloqueo</p>
              <p className="text-white font-medium">{nextUnlock.item.nameEs || nextUnlock.item.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-1.5 bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${nextUnlock.progressPercent}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400">
                  {Math.round(nextUnlock.progressPercent)}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tabs */}
      <div className="flex gap-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg transition-all ${
              activeTab === tab.id
                ? 'bg-accent-primary text-white'
                : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
            }`}
          >
            {tab.icon}
            <span className="text-sm font-medium">{tab.label}</span>
            <span className="text-xs opacity-70">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'badges' && (
          <motion.div
            key="badges"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
          >
            {badges.map(badge => {
              const isUnlocked = unlockedBadges.some(b => b.id === badge.id);
              
              return (
                <motion.div
                  key={badge.id}
                  whileHover={{ scale: isUnlocked ? 1.05 : 1 }}
                  className={`relative p-3 rounded-xl text-center transition-all ${
                    isUnlocked 
                      ? 'bg-dark-700 border border-dark-500' 
                      : 'bg-dark-800 border border-dark-700 opacity-50'
                  }`}
                >
                  {/* Rarity indicator */}
                  <div className={`absolute top-1 right-1 w-2 h-2 rounded-full bg-gradient-to-r ${rarityColors[badge.rarity]}`} />
                  
                  <div className="text-3xl mb-2">
                    {isUnlocked ? badge.icon : <Lock className="w-6 h-6 mx-auto text-gray-600" />}
                  </div>
                  <p className={`text-xs font-medium truncate ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                    {badge.nameEs}
                  </p>
                  <p className="text-[10px] text-gray-500 truncate">
                    {badge.descriptionEs}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === 'titles' && (
          <motion.div
            key="titles"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-2"
          >
            {titles.map(title => {
              const isUnlocked = unlockedTitles.some(t => t.id === title.id);
              const isSelected = selectedTitle === title.id;
              
              return (
                <motion.div
                  key={title.id}
                  whileHover={{ scale: isUnlocked ? 1.01 : 1 }}
                  onClick={() => isUnlocked && selectTitle(title.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-accent-primary/20 border-2 border-accent-primary'
                      : isUnlocked 
                      ? 'bg-dark-700 border border-dark-500 hover:border-dark-400' 
                      : 'bg-dark-800 border border-dark-700 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${title.color}20` }}
                  >
                    {isUnlocked ? (
                      <Crown className="w-5 h-5" style={{ color: title.color }} />
                    ) : (
                      <Lock className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <p 
                      className="font-medium"
                      style={{ color: isUnlocked ? title.color : '#6b7280' }}
                    >
                      {title.nameEs}
                    </p>
                    <p className="text-xs text-gray-500">
                      {title.unlockCondition.type === 'xp' && `${title.unlockCondition.value.toLocaleString()} XP`}
                      {title.unlockCondition.type === 'streak' && `Racha de ${title.unlockCondition.value} días`}
                      {title.unlockCondition.type === 'level' && `Nivel ${title.unlockCondition.value}`}
                    </p>
                  </div>

                  {isSelected && (
                    <div className="flex items-center gap-1 text-accent-primary text-sm">
                      <Check className="w-4 h-4" />
                      <span>Activo</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === 'themes' && (
          <motion.div
            key="themes"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {themeUnlocks.map(theme => {
              const isUnlocked = unlockedThemes.some(t => t.id === theme.id);
              
              return (
                <motion.div
                  key={theme.id}
                  whileHover={{ scale: isUnlocked ? 1.03 : 1 }}
                  className={`relative overflow-hidden rounded-xl transition-all ${
                    isUnlocked 
                      ? 'cursor-pointer' 
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  {/* Theme Preview */}
                  <div 
                    className="h-24 p-3"
                    style={{ backgroundColor: theme.preview.primary }}
                  >
                    <div 
                      className="h-full rounded-lg p-2"
                      style={{ backgroundColor: theme.preview.secondary }}
                    >
                      <div 
                        className="w-1/2 h-2 rounded"
                        style={{ backgroundColor: theme.preview.accent }}
                      />
                      <div className="mt-2 space-y-1">
                        <div className="w-full h-1.5 bg-gray-700/50 rounded" />
                        <div className="w-3/4 h-1.5 bg-gray-700/50 rounded" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Theme Name */}
                  <div className="p-2 bg-dark-700 flex items-center justify-between">
                    <span className={`text-sm font-medium ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                      {theme.nameEs}
                    </span>
                    {!isUnlocked && <Lock className="w-4 h-4 text-gray-600" />}
                  </div>

                  {/* Lock Overlay */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-dark-900/60 flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="w-6 h-6 text-gray-500 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">
                          {theme.unlockCondition.type === 'xp' && `${theme.unlockCondition.value} XP`}
                          {theme.unlockCondition.type === 'streak' && `${theme.unlockCondition.value} días`}
                          {theme.unlockCondition.type === 'level' && `Nivel ${theme.unlockCondition.value}`}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
