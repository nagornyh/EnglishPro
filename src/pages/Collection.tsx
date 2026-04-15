// Collection Page Component
// View and manage unlocked avatars, themes, and collectibles

import { useState, useEffect } from 'react';
import { gamificationService } from '../services/gamificationService';
import type { 
  Avatar, Theme, Collectible, 
  UserGamificationData 
} from '../services/gamificationService';

type TabType = 'avatars' | 'themes' | 'collectibles';

export default function Collection() {
  const [activeTab, setActiveTab] = useState<TabType>('avatars');
  const [gamificationData, setGamificationData] = useState<UserGamificationData | null>(null);
  const [unlockedAvatars, setUnlockedAvatars] = useState<Avatar[]>([]);
  const [lockedAvatars, setLockedAvatars] = useState<Avatar[]>([]);
  const [unlockedThemes, setUnlockedThemes] = useState<Theme[]>([]);
  const [lockedThemes, setLockedThemes] = useState<Theme[]>([]);
  const [unlockedCollectibles, setUnlockedCollectibles] = useState<Collectible[]>([]);
  const [lockedCollectibles, setLockedCollectibles] = useState<Collectible[]>([]);

  // Load data
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setGamificationData(gamificationService.getData());
    setUnlockedAvatars(gamificationService.getUnlockedAvatars());
    setLockedAvatars(gamificationService.getLockedAvatars());
    setUnlockedThemes(gamificationService.getUnlockedThemes());
    setLockedThemes(gamificationService.getLockedThemes());
    setUnlockedCollectibles(gamificationService.getUnlockedCollectibles());
    setLockedCollectibles(gamificationService.getLockedCollectibles());
  };

  // Select avatar
  const selectAvatar = (avatarId: string) => {
    if (gamificationService.setAvatar(avatarId)) {
      setGamificationData(gamificationService.getData());
    }
  };

  // Select theme
  const selectTheme = (themeId: string) => {
    if (gamificationService.setTheme(themeId)) {
      setGamificationData(gamificationService.getData());
    }
  };

  // Equip/unequip collectible
  const toggleCollectible = (collectibleId: string) => {
    const equipped = gamificationData?.equippedCollectibles || [];
    if (equipped.includes(collectibleId)) {
      gamificationService.unequipCollectible(collectibleId);
    } else {
      gamificationService.equipCollectible(collectibleId);
    }
    setGamificationData(gamificationService.getData());
  };

  // Rarity colors
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400 bg-gray-500/20';
      case 'uncommon': return 'text-green-400 bg-green-500/20';
      case 'rare': return 'text-blue-400 bg-blue-500/20';
      case 'epic': return 'text-purple-400 bg-purple-500/20';
      case 'legendary': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const currentAvatar = gamificationService.getCurrentAvatar();
  const currentTheme = gamificationService.getCurrentTheme();

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 to-accent-900 rounded-2xl p-6 mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">🏆 Mi Colección</h1>
        <p className="text-gray-300">Personaliza tu experiencia de aprendizaje</p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-dark-900/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-primary-400">{unlockedAvatars.length}</p>
            <p className="text-gray-500 text-xs">Avatares</p>
          </div>
          <div className="bg-dark-900/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-accent-400">{unlockedThemes.length}</p>
            <p className="text-gray-500 text-xs">Temas</p>
          </div>
          <div className="bg-dark-900/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-yellow-400">{unlockedCollectibles.length}</p>
            <p className="text-gray-500 text-xs">Coleccionables</p>
          </div>
        </div>
      </div>

      {/* Current Equips */}
      <div className="bg-dark-800 rounded-xl p-5 mb-6">
        <h2 className="text-lg font-bold text-white mb-4">✨ Equipamiento Actual</h2>
        
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <div className="text-center">
            <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center text-4xl mb-2">
              {currentAvatar.emoji}
            </div>
            <p className="text-white text-sm font-medium">{currentAvatar.name}</p>
            <p className="text-gray-500 text-xs">Avatar</p>
          </div>
          
          {/* Theme colors */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.primaryColor}, ${currentTheme.secondaryColor})`
              }}
            >
              <span className="text-2xl">🎨</span>
            </div>
            <p className="text-white text-sm font-medium">{currentTheme.name}</p>
            <p className="text-gray-500 text-xs">Tema</p>
          </div>
          
          {/* Equipped collectibles */}
          <div className="flex-1">
            <p className="text-gray-500 text-xs mb-2">Coleccionables ({gamificationData?.equippedCollectibles.length || 0}/3)</p>
            <div className="flex gap-2">
              {gamificationService.getEquippedCollectibles().map(c => (
                <div key={c.id} className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-xl">
                  {c.emoji}
                </div>
              ))}
              {Array(3 - (gamificationData?.equippedCollectibles.length || 0)).fill(0).map((_, i) => (
                <div key={i} className="w-10 h-10 bg-dark-700/50 rounded-lg flex items-center justify-center text-gray-600">
                  +
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(['avatars', 'themes', 'collectibles'] as TabType[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
              activeTab === tab 
                ? 'bg-primary-600 text-white' 
                : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
            }`}
          >
            {tab === 'avatars' && '👤 Avatares'}
            {tab === 'themes' && '🎨 Temas'}
            {tab === 'collectibles' && '🏅 Coleccionables'}
          </button>
        ))}
      </div>

      {/* Avatars Tab */}
      {activeTab === 'avatars' && (
        <div className="space-y-6">
          {/* Unlocked */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Desbloqueados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {unlockedAvatars.map(avatar => (
                <button
                  key={avatar.id}
                  onClick={() => selectAvatar(avatar.id)}
                  className={`p-4 bg-dark-700 rounded-xl text-center transition-all ${
                    gamificationData?.currentAvatar === avatar.id 
                      ? 'ring-2 ring-primary-500' 
                      : 'hover:bg-dark-600'
                  }`}
                >
                  <div className="text-5xl mb-2">{avatar.emoji}</div>
                  <p className="text-white font-medium text-sm">{avatar.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getRarityColor(avatar.rarity)}`}>
                    {avatar.rarity}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Locked */}
          {lockedAvatars.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-500 mb-4">🔒 Bloqueados</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {lockedAvatars.map(avatar => (
                  <div
                    key={avatar.id}
                    className="p-4 bg-dark-800 rounded-xl text-center opacity-50"
                  >
                    <div className="text-5xl mb-2 grayscale">{avatar.emoji}</div>
                    <p className="text-gray-400 font-medium text-sm">{avatar.name}</p>
                    <p className="text-gray-600 text-xs mt-1">{avatar.unlockCondition.descriptionEs}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Themes Tab */}
      {activeTab === 'themes' && (
        <div className="space-y-6">
          {/* Unlocked */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Desbloqueados</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {unlockedThemes.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => selectTheme(theme.id)}
                  className={`p-5 bg-dark-700 rounded-xl text-left transition-all ${
                    gamificationData?.currentTheme === theme.id 
                      ? 'ring-2 ring-primary-500' 
                      : 'hover:bg-dark-600'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div 
                      className="w-12 h-12 rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`
                      }}
                    />
                    <div>
                      <p className="text-white font-bold">{theme.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getRarityColor(theme.rarity)}`}>
                        {theme.rarity}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{theme.descriptionEs}</p>
                  
                  {/* Color preview */}
                  <div className="flex gap-2 mt-3">
                    <div 
                      className="w-8 h-8 rounded" 
                      style={{ backgroundColor: theme.primaryColor }}
                      title="Primary"
                    />
                    <div 
                      className="w-8 h-8 rounded" 
                      style={{ backgroundColor: theme.secondaryColor }}
                      title="Secondary"
                    />
                    <div 
                      className="w-8 h-8 rounded" 
                      style={{ backgroundColor: theme.accentColor }}
                      title="Accent"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Locked */}
          {lockedThemes.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-500 mb-4">🔒 Bloqueados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {lockedThemes.map(theme => (
                  <div
                    key={theme.id}
                    className="p-5 bg-dark-800 rounded-xl text-left opacity-50"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-lg bg-dark-600" />
                      <div>
                        <p className="text-gray-400 font-bold">{theme.name}</p>
                        <p className="text-gray-600 text-xs">{theme.unlockCondition.descriptionEs}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Collectibles Tab */}
      {activeTab === 'collectibles' && (
        <div className="space-y-6">
          {/* Unlocked */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Desbloqueados</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {unlockedCollectibles.map(collectible => {
                const isEquipped = gamificationData?.equippedCollectibles.includes(collectible.id);
                return (
                  <button
                    key={collectible.id}
                    onClick={() => toggleCollectible(collectible.id)}
                    className={`p-4 bg-dark-700 rounded-xl text-center transition-all ${
                      isEquipped ? 'ring-2 ring-yellow-500' : 'hover:bg-dark-600'
                    }`}
                  >
                    <div className="text-4xl mb-2">{collectible.emoji}</div>
                    <p className="text-white font-medium text-sm">{collectible.name}</p>
                    <p className="text-gray-500 text-xs mb-2">{collectible.nameEs}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getRarityColor(collectible.rarity)}`}>
                      {collectible.rarity}
                    </span>
                    {collectible.xpBonus && (
                      <p className="text-yellow-400 text-xs mt-2">+{collectible.xpBonus}% XP</p>
                    )}
                    {isEquipped && (
                      <div className="mt-2 text-yellow-400 text-xs">✓ Equipado</div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Locked */}
          {lockedCollectibles.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-500 mb-4">🔒 Bloqueados</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {lockedCollectibles.map(collectible => (
                  <div
                    key={collectible.id}
                    className="p-4 bg-dark-800 rounded-xl text-center opacity-50"
                  >
                    <div className="text-4xl mb-2 grayscale">{collectible.emoji}</div>
                    <p className="text-gray-400 font-medium text-sm">{collectible.name}</p>
                    <p className="text-gray-600 text-xs mt-1">{collectible.unlockCondition.descriptionEs}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
