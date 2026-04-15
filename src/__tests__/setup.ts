/**
 * Vitest global test setup
 * Runs before every test file.
 */

import 'fake-indexeddb/auto';
import { vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

// Silence console.error for expected React/test warnings
const originalError = console.error.bind(console.error);
console.error = (...args: unknown[]) => {
  const msg = String(args[0] ?? '');
  if (
    msg.includes('Warning: ReactDOM.render') ||
    msg.includes('act(') ||
    msg.includes('Not implemented: navigation') ||
    msg.includes('Error: Not implemented: HTMLCanvasElement') ||
    msg.includes('inside a test was not wrapped in act')
  ) {
    return;
  }
  originalError(...args);
};

// Stub window.confirm
vi.stubGlobal('confirm', () => true);

// Stub window.scrollTo
vi.stubGlobal('scrollTo', vi.fn());

// Stub matchMedia for responsive tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Stub IntersectionObserver
vi.stubGlobal('IntersectionObserver', class {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
});

// Stub ResizeObserver
vi.stubGlobal('ResizeObserver', class {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
});

// Stub speechSynthesis for pronunciation features
vi.stubGlobal('speechSynthesis', {
  speak: vi.fn(),
  cancel: vi.fn(),
  pause: vi.fn(),
  resume: vi.fn(),
  getVoices: () => [],
  speaking: false,
  paused: false,
  pending: false,
  onvoiceschanged: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
});

// Stub SpeechSynthesisUtterance
vi.stubGlobal('SpeechSynthesisUtterance', class {
  text = '';
  lang = '';
  rate = 1;
  pitch = 1;
  volume = 1;
  voice = null;
  onend = null;
  onerror = null;
  addEventListener = vi.fn();
  removeEventListener = vi.fn();
});

// Reset all mocks and clear storage between tests
afterEach(async () => {
  vi.clearAllMocks();
  localStorage.clear();
  // Close IndexedDB connections to avoid InvalidStateError when next test opens them
  const { default: db } = await import('../services/database');
  const { notebookService } = await import('../services/notebookService');
  db.close();
  notebookService.close();
});
