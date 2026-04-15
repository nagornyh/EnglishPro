/**
 * Shared test helpers for E2E integration tests.
 * Provides render wrappers with all required providers + utility functions.
 */

import { render, type RenderOptions, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, type ReactElement } from 'react';
import { UserProvider } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import db from '../../services/database';

function LoadingFallback() {
  return <div data-testid="loading">Cargando...</div>;
}

interface AppRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialRoute?: string;
}

/**
 * Renders a component with all app providers (Theme, User, Router).
 */
export function renderWithProviders(ui: ReactElement, options: AppRenderOptions = {}) {
  const { initialRoute = '/', ...renderOptions } = options;
  const user = userEvent.setup();

  const result = render(ui, {
    wrapper: ({ children }) => (
      <ErrorBoundary>
        <MemoryRouter initialEntries={[initialRoute]}>
          <ThemeProvider>
            <UserProvider>
              <Suspense fallback={<LoadingFallback />}>
                {children}
              </Suspense>
            </UserProvider>
          </ThemeProvider>
        </MemoryRouter>
      </ErrorBoundary>
    ),
    ...renderOptions,
  });

  return { ...result, user };
}

/**
 * Creates a test user directly in IndexedDB and sets up localStorage session.
 */
export async function seedTestUser(name = 'TestUser') {
  await db.init();
  const user = await db.createUser(name);
  localStorage.setItem('currentUserId', user.id);
  return user;
}

/**
 * Creates a user with specific progress state.
 */
export async function seedUserWithProgress(
  name = 'TestUser',
  overrides: { currentLevel?: number; totalXP?: number; wordsLearned?: number; lessonsCompleted?: number } = {}
) {
  await db.init();
  const user = await db.createUser(name);
  const updated = {
    ...user,
    progress: {
      ...user.progress,
      currentLevel: overrides.currentLevel ?? 1,
      totalXP: overrides.totalXP ?? 500,
      wordsLearned: overrides.wordsLearned ?? 30,
      lessonsCompleted: overrides.lessonsCompleted ?? 5,
    },
    streakData: {
      ...user.streakData,
      currentStreak: 3,
      longestStreak: 7,
    },
  };
  await db.updateUser(updated);
  localStorage.setItem('currentUserId', updated.id);
  return updated;
}

/**
 * Waits for the initial loading state to resolve.
 */
export async function waitForAppReady() {
  await waitFor(() => {
    expect(screen.queryByText('Cargando...')).not.toBeInTheDocument();
    expect(screen.queryByText('Cargando EnglishPro...')).not.toBeInTheDocument();
  }, { timeout: 5000 });
}

let userCounter = 0;

/**
 * Generates a unique user name per test to avoid IndexedDB conflicts.
 */
export function uniqueName(base: string) {
  return `${base}_${++userCounter}_${Date.now()}`;
}

/**
 * Lightweight cleanup between tests - just clears localStorage.
 * Avoids deleting IndexedDB which blocks in fake-indexeddb.
 */
export function resetSession() {
  localStorage.clear();
}

export { screen, waitFor, userEvent };
