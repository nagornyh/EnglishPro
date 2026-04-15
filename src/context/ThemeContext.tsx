import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'dark' | 'darker' | 'midnight' | 'ocean';
type ThemeMode = 'manual' | 'auto';
type FontSize = 'small' | 'medium' | 'large' | 'xlarge';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  effectiveTheme: Theme;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

// Theme configurations
const themes: Record<Theme, Record<string, string>> = {
  dark: {
    '--bg-primary': '#0a0a0f',
    '--bg-secondary': '#12121a',
    '--bg-tertiary': '#1a1a2e',
    '--bg-card': '#16162a',
    '--accent-primary': '#6366f1',
    '--accent-secondary': '#8b5cf6',
  },
  darker: {
    '--bg-primary': '#000000',
    '--bg-secondary': '#0a0a0a',
    '--bg-tertiary': '#111111',
    '--bg-card': '#0f0f0f',
    '--accent-primary': '#6366f1',
    '--accent-secondary': '#8b5cf6',
  },
  midnight: {
    '--bg-primary': '#0d1117',
    '--bg-secondary': '#161b22',
    '--bg-tertiary': '#21262d',
    '--bg-card': '#1c2128',
    '--accent-primary': '#58a6ff',
    '--accent-secondary': '#8b5cf6',
  },
  ocean: {
    '--bg-primary': '#0a192f',
    '--bg-secondary': '#112240',
    '--bg-tertiary': '#1d3557',
    '--bg-card': '#172a45',
    '--accent-primary': '#64ffda',
    '--accent-secondary': '#00bcd4',
  },
};

// Font size configurations
const fontSizes: Record<FontSize, { base: string; scale: number }> = {
  small: { base: '14px', scale: 0.875 },
  medium: { base: '16px', scale: 1 },
  large: { base: '18px', scale: 1.125 },
  xlarge: { base: '20px', scale: 1.25 },
};

// Get theme based on time of day
function getAutoTheme(): Theme {
  const hour = new Date().getHours();
  
  // 6am - 12pm: Ocean (morning, fresh)
  if (hour >= 6 && hour < 12) {
    return 'ocean';
  }
  // 12pm - 6pm: Dark (afternoon, standard)
  if (hour >= 12 && hour < 18) {
    return 'dark';
  }
  // 6pm - 10pm: Midnight (evening, relaxed)
  if (hour >= 18 && hour < 22) {
    return 'midnight';
  }
  // 10pm - 6am: Darker (night, easy on eyes)
  return 'darker';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('app-theme') as Theme) || 'dark';
    }
    return 'dark';
  });

  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('app-theme-mode') as ThemeMode) || 'manual';
    }
    return 'manual';
  });

  const [autoTheme, setAutoTheme] = useState<Theme>(getAutoTheme);

  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('app-font-size') as FontSize) || 'medium';
    }
    return 'medium';
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('app-theme', newTheme);
  };

  const setThemeMode = (newMode: ThemeMode) => {
    setThemeModeState(newMode);
    localStorage.setItem('app-theme-mode', newMode);
  };

  const setFontSize = (newSize: FontSize) => {
    setFontSizeState(newSize);
    localStorage.setItem('app-font-size', newSize);
  };

  // Effective theme (auto or manual)
  const effectiveTheme = themeMode === 'auto' ? autoTheme : theme;

  // Update auto theme every minute
  useEffect(() => {
    if (themeMode !== 'auto') return;

    const updateAutoTheme = () => {
      setAutoTheme(getAutoTheme());
    };

    // Update immediately
    updateAutoTheme();

    // Check every minute for hour changes
    const interval = setInterval(updateAutoTheme, 60000);

    return () => clearInterval(interval);
  }, [themeMode]);

  // Apply theme CSS variables
  useEffect(() => {
    const root = document.documentElement;
    const themeVars = themes[effectiveTheme];
    
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Add theme class to body for additional styling
    document.body.className = document.body.className
      .replace(/theme-\w+/g, '')
      .trim();
    document.body.classList.add(`theme-${effectiveTheme}`);
  }, [effectiveTheme]);

  // Apply font size
  useEffect(() => {
    const root = document.documentElement;
    const sizeConfig = fontSizes[fontSize];
    
    root.style.fontSize = sizeConfig.base;
    root.style.setProperty('--font-scale', sizeConfig.scale.toString());
  }, [fontSize]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeMode, setThemeMode, fontSize, setFontSize, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Export theme options for settings UI
export const themeOptions: { value: Theme; label: string; preview: string }[] = [
  { value: 'dark', label: 'Oscuro', preview: '#12121a' },
  { value: 'darker', label: 'Negro Total', preview: '#000000' },
  { value: 'midnight', label: 'Medianoche', preview: '#0d1117' },
  { value: 'ocean', label: 'Océano', preview: '#0a192f' },
];

export const fontSizeOptions: { value: FontSize; label: string }[] = [
  { value: 'small', label: 'Pequeño' },
  { value: 'medium', label: 'Normal' },
  { value: 'large', label: 'Grande' },
  { value: 'xlarge', label: 'Muy grande' },
];

// Time ranges for auto theme
export const autoThemeSchedule = [
  { time: '6:00 - 12:00', theme: 'Océano', emoji: '🌅' },
  { time: '12:00 - 18:00', theme: 'Oscuro', emoji: '☀️' },
  { time: '18:00 - 22:00', theme: 'Medianoche', emoji: '🌆' },
  { time: '22:00 - 6:00', theme: 'Negro Total', emoji: '🌙' },
];
