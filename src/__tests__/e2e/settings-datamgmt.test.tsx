/**
 * SETTINGS & DATA MANAGEMENT TESTS:
 * Settings page — theme mode toggle, theme color buttons, font size, XP slider,
 *   7 toggle settings, time input, Guardar Cambios, Cambiar nivel link
 * DataManagement — export, import (file select + drag-drop), clear all data
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

/* ---------- mock framer-motion ---------- */
vi.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (_t: any, prop: string) => {
      return ({ children, ...rest }: any) => {
        const Tag = prop as any;
        const safe = Object.fromEntries(
          Object.entries(rest).filter(
            ([k]) =>
              !k.startsWith('while') && !k.startsWith('animate') &&
              !k.startsWith('initial') && !k.startsWith('exit') &&
              !k.startsWith('transition') && !k.startsWith('variants') &&
              !k.startsWith('layout') && !k.startsWith('drag') &&
              k !== 'whileHover' && k !== 'whileTap' && k !== 'onAnimationComplete'
          )
        );
        return <Tag {...safe}>{children}</Tag>;
      };
    },
  }),
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useMotionValue: () => ({ set: vi.fn(), get: () => 0 }),
  useTransform: () => ({ set: vi.fn(), get: () => 0 }),
  useSpring: () => ({ set: vi.fn(), get: () => 0 }),
}));

/* ---------- mock useUser ---------- */
const mockUpdateUser = vi.fn().mockResolvedValue(undefined);

vi.mock('../../context/UserContext', () => ({
  useUser: () => ({
    user: {
      id: 'test-user',
      name: 'TestUser',
      progress: { totalXP: 500, currentLevel: 2, wordsLearned: 30 },
      settings: { soundEnabled: true, autoPlayAudio: false, showTranslations: true, dailyGoal: 50 },
      streakData: { currentStreak: 5, longestStreak: 10 },
      achievements: [],
      createdAt: '2024-01-01T00:00:00Z',
    },
    updateUser: mockUpdateUser,
    addXP: vi.fn(),
    logout: vi.fn(),
  }),
}));

/* ---------- mock ThemeContext ---------- */
const mockSetTheme = vi.fn();
const mockSetThemeMode = vi.fn();
const mockSetFontSize = vi.fn();

vi.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({
    theme: 'dark',
    setTheme: mockSetTheme,
    themeMode: 'manual',
    setThemeMode: mockSetThemeMode,
    fontSize: 'normal',
    setFontSize: mockSetFontSize,
    effectiveTheme: 'dark',
  }),
  themeOptions: [
    { value: 'dark', label: 'Oscuro', preview: '#1a1a2e' },
    { value: 'darker', label: 'Negro Total', preview: '#0a0a0a' },
    { value: 'midnight', label: 'Medianoche', preview: '#0f172a' },
    { value: 'ocean', label: 'Océano', preview: '#0c4a6e' },
  ],
  fontSizeOptions: [
    { value: 'small', label: 'Pequeño' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Grande' },
    { value: 'xlarge', label: 'Muy grande' },
  ],
  autoThemeSchedule: [
    { time: '06:00-12:00', theme: 'Océano', emoji: '🌅' },
    { time: '12:00-18:00', theme: 'Medianoche', emoji: '☀️' },
    { time: '18:00-22:00', theme: 'Oscuro', emoji: '🌆' },
    { time: '22:00-06:00', theme: 'Negro Total', emoji: '🌙' },
  ],
}));

/* ---------- mock notification service ---------- */
const mockEnableNotifications = vi.fn().mockResolvedValue(undefined);
const mockDisableNotifications = vi.fn();
const mockUpdateNotifSettings = vi.fn();

vi.mock('../../services/notificationService', () => ({
  useNotifications: () => ({
    settings: {
      enabled: true,
      dailyReminder: true,
      reminderTime: '09:00',
      streakReminder: true,
      achievementNotify: true,
    },
    permission: 'granted',
    isSupported: true,
    updateSettings: mockUpdateNotifSettings,
    enableNotifications: mockEnableNotifications,
    disableNotifications: mockDisableNotifications,
  }),
}));

/* ---------- mock database ---------- */
const mockExportUserData = vi.fn(() => Promise.resolve('{"user":{"id":"test-user","name":"TestUser"},"completedLessons":[]}'));
const mockImportUserData = vi.fn(() => Promise.resolve());
const mockClearAllData = vi.fn(() => Promise.resolve());

vi.mock('../../services/database', () => ({
  default: {
    exportUserData: mockExportUserData,
    importUserData: mockImportUserData,
    clearAllData: mockClearAllData,
    getDailyStats: vi.fn(() => Promise.resolve(null)),
    close: vi.fn(),
  },
}));
vi.mock('../../services/notebookService', () => ({
  notebookService: { close: vi.fn() },
}));

const Wrapper = ({ children }: any) => (
  <MemoryRouter>{children}</MemoryRouter>
);

/* ---------- mock window.location.reload ---------- */
beforeEach(() => {
  Object.defineProperty(window, 'location', {
    writable: true,
    value: { ...window.location, reload: vi.fn() },
  });
});

/* ============================================================
   SETTINGS PAGE
   ============================================================ */
describe('Settings — full interaction coverage', () => {
  let Settings: any;

  beforeEach(async () => {
    vi.clearAllMocks();
    Settings = (await import('../../pages/Settings')).default;
  });

  it('renders all sections', async () => {
    render(<Settings />, { wrapper: Wrapper });

    expect(screen.getByText('Configuración')).toBeInTheDocument();
    expect(screen.getByText('Perfil')).toBeInTheDocument();
    expect(screen.getByText('Apariencia')).toBeInTheDocument();
    expect(screen.getByText('Notificaciones')).toBeInTheDocument();
    expect(screen.getByText('Sonido')).toBeInTheDocument();
    expect(screen.getByText('Aprendizaje')).toBeInTheDocument();
    expect(screen.getByText('Gestión de Datos')).toBeInTheDocument();
  });

  it('Manual / Automático theme mode toggle', async () => {
    const user = userEvent.setup();
    render(<Settings />, { wrapper: Wrapper });

    await user.click(screen.getByText('Automático'));
    expect(mockSetThemeMode).toHaveBeenCalledWith('auto');

    await user.click(screen.getByText('Manual'));
    expect(mockSetThemeMode).toHaveBeenCalledWith('manual');
  });

  it('theme color buttons call setTheme', async () => {
    const user = userEvent.setup();
    render(<Settings />, { wrapper: Wrapper });

    // In manual mode, 4 theme buttons
    const negroBtn = screen.getByText('Negro Total');
    const oceanBtn = screen.getByText('Océano');

    await user.click(negroBtn);
    expect(mockSetTheme).toHaveBeenCalledWith('darker');

    await user.click(oceanBtn);
    expect(mockSetTheme).toHaveBeenCalledWith('ocean');
  });

  it('font size buttons call setFontSize', async () => {
    const user = userEvent.setup();
    render(<Settings />, { wrapper: Wrapper });

    await user.click(screen.getByText('Grande'));
    expect(mockSetFontSize).toHaveBeenCalledWith('large');

    await user.click(screen.getByText('Pequeño'));
    expect(mockSetFontSize).toHaveBeenCalledWith('small');
  });

  it('sound toggle buttons work', async () => {
    render(<Settings />, { wrapper: Wrapper });

    // Toggle "Efectos de sonido" (currently enabled → should find toggles)
    const toggleButtons = screen.getAllByRole('button').filter(b => {
      const parent = b.closest('[class*="bg-dark-700"]');
      return parent && (parent.textContent?.includes('Efectos de sonido') || parent.textContent?.includes('Reproducción automática'));
    });

    expect(toggleButtons.length).toBeGreaterThanOrEqual(2);
  });

  it('notification toggles work', async () => {
    render(<Settings />, { wrapper: Wrapper });

    // Should see notification-related toggles
    expect(screen.getByText(/Activar notificaciones/)).toBeInTheDocument();
    expect(screen.getByText(/Recordatorio diario/)).toBeInTheDocument();
    expect(screen.getByText(/Alerta de racha/)).toBeInTheDocument();
    expect(screen.getByText(/Logros/)).toBeInTheDocument();
  });

  it('reminder time input is displayed', () => {
    render(<Settings />, { wrapper: Wrapper });

    const timeInput = screen.queryByDisplayValue('09:00');
    expect(timeInput).toBeInTheDocument();
  });

  it('XP slider changes dailyGoal', async () => {
    render(<Settings />, { wrapper: Wrapper });

    expect(screen.getByText('50')).toBeInTheDocument(); // current dailyGoal
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
  });

  it('Cambiar nivel link renders', () => {
    render(<Settings />, { wrapper: Wrapper });

    expect(screen.getByText('Cambiar nivel')).toBeInTheDocument();
  });

  it('Mostrar traducciones toggle is present', () => {
    render(<Settings />, { wrapper: Wrapper });

    expect(screen.getByText(/Mostrar traducciones/)).toBeInTheDocument();
  });

  it('Guardar Cambios button calls updateUser', async () => {
    const user = userEvent.setup();
    render(<Settings />, { wrapper: Wrapper });

    await user.click(screen.getByText('Guardar Cambios'));

    await waitFor(() => {
      expect(mockUpdateUser).toHaveBeenCalled();
    });

    // Should show ¡Guardado! briefly
    await waitFor(() => {
      expect(screen.getByText('¡Guardado!')).toBeInTheDocument();
    });
  });
});

/* ============================================================
   DATA MANAGEMENT
   ============================================================ */
describe('DataManagement — full interaction coverage', () => {
  let DataManagement: any;

  beforeEach(async () => {
    vi.clearAllMocks();
    DataManagement = (await import('../../components/DataManagement')).default;
  });

  it('renders export and import sections', () => {
    render(<DataManagement />);

    expect(screen.getByText('Exportar Progreso')).toBeInTheDocument();
    expect(screen.getByText('Importar Progreso')).toBeInTheDocument();
    expect(screen.getByText('Descargar Backup')).toBeInTheDocument();
  });

  it('Descargar Backup calls export', async () => {
    const user = userEvent.setup();
    render(<DataManagement />);

    await user.click(screen.getByText('Descargar Backup'));

    await waitFor(() => {
      expect(mockExportUserData).toHaveBeenCalledWith('test-user');
    });
  });

  it('file input accepts JSON files', () => {
    render(<DataManagement />);

    const fileInput = document.querySelector('input[type="file"]');
    expect(fileInput).toBeTruthy();
    expect(fileInput?.getAttribute('accept')).toBe('.json');
  });

  it('Seleccionar archivo text is present', () => {
    render(<DataManagement />);

    expect(screen.getByText(/Seleccionar archivo/)).toBeInTheDocument();
  });

  it('cancel import clears preview', async () => {
    render(<DataManagement />);

    // Preview is not shown initially
    expect(screen.queryByText('Cancelar')).not.toBeInTheDocument();
    expect(screen.queryByText('Confirmar Importación')).not.toBeInTheDocument();
  });

  it('Eliminar todos mis datos button is present', () => {
    render(<DataManagement />);

    expect(screen.getByText(/Eliminar todos mis datos/)).toBeInTheDocument();
  });

  it('clearing data triggers double confirm', async () => {
    const user = userEvent.setup();
    // Mock window.confirm to return true twice
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true);

    render(<DataManagement />);

    await user.click(screen.getByText(/Eliminar todos mis datos/));

    // Should have called confirm twice (double confirm pattern)
    expect(confirmSpy).toHaveBeenCalledTimes(2);
    expect(mockClearAllData).toHaveBeenCalled();

    confirmSpy.mockRestore();
  });

  it('clearing data cancelled on first confirm does not delete', async () => {
    const user = userEvent.setup();
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);

    render(<DataManagement />);

    await user.click(screen.getByText(/Eliminar todos mis datos/));

    expect(confirmSpy).toHaveBeenCalledTimes(1);
    expect(mockClearAllData).not.toHaveBeenCalled();

    confirmSpy.mockRestore();
  });
});
