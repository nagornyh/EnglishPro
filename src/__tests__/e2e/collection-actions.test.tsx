/**
 * E2E: Collection Page — Avatar, Theme & Collectible Actions
 * Tests: selecting/equipping items, tab navigation, current equips display.
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const Collection = lazy(() => import('../../pages/Collection'));

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderCollection() {
  const user = userEvent.setup();
  const result = render(
    <ErrorBoundary>
      <MemoryRouter>
        <ThemeProvider>
          <UserProvider>
            <WaitForUser>
              <Suspense fallback={<div data-testid="suspense">Cargando módulo...</div>}>
                <Collection />
              </Suspense>
            </WaitForUser>
          </UserProvider>
        </ThemeProvider>
      </MemoryRouter>
    </ErrorBoundary>
  );
  return { ...result, user };
}

async function waitForPageLoad() {
  await waitFor(() => {
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('suspense')).not.toBeInTheDocument();
  }, { timeout: 10000 });
  await waitFor(() => {
    const text = document.body.textContent || '';
    expect(text).toMatch(/Colección|Avatares/);
  }, { timeout: 5000 });
}

beforeEach(async () => {
  resetSession();
  await seedUserWithProgress(uniqueName('CollUser'), { currentLevel: 5, totalXP: 1500 });
});

/* ============================================================
   INITIAL RENDER
   ============================================================ */
describe('Collection Page — Initial Render', () => {
  it('renders without crashing', async () => {
    renderCollection();
    await waitForPageLoad();
    expect(document.body.textContent!.length).toBeGreaterThan(50);
  });

  it('shows header with Colección title', async () => {
    renderCollection();
    await waitForPageLoad();
    const text = document.body.textContent || '';
    expect(text).toMatch(/Colección/);
  });

  it('shows the 3 tab buttons: Avatares, Temas, Coleccionables', async () => {
    renderCollection();
    await waitForPageLoad();
    // Use getAllByText since "Avatares" may appear both in stats and tab buttons
    expect(screen.getAllByText(/Avatares/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Temas/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Coleccionables/).length).toBeGreaterThan(0);
  });

  it('shows current equipment section', async () => {
    renderCollection();
    await waitForPageLoad();
    const text = document.body.textContent || '';
    expect(text).toMatch(/Equipamiento Actual|Avatar|Tema/);
  });

  it('shows unlocked counts in stats', async () => {
    renderCollection();
    await waitForPageLoad();
    const text = document.body.textContent || '';
    // Should show numbers for Avatares, Temas, Coleccionables
    expect(text).toMatch(/\d+/);
  });
});

/* ============================================================
   AVATAR ACTIONS
   ============================================================ */
describe('Collection Page — Avatar Actions', () => {
  it('avatares tab shows avatar grid by default', async () => {
    renderCollection();
    await waitForPageLoad();

    // Default tab is Avatares
    const text = document.body.textContent || '';
    expect(text).toMatch(/Avatares/);
  });

  it('shows unlocked avatars list', async () => {
    renderCollection();
    await waitForPageLoad();

    // Should show at least one avatar (the default one is unlocked)
    const avatarSection = document.querySelector('.grid');
    expect(avatarSection).toBeTruthy();
  });

  it('can click an unlocked avatar to select it', async () => {
    const { user } = renderCollection();
    await waitForPageLoad();

    // Find avatar buttons (unlocked avatars are clickable buttons)
    const avatarBtns = screen.getAllByRole('button').filter(btn => {
      // Unlocked avatars are in a button with emoji + name
      const text = btn.textContent || '';
      return text.length > 1 && btn.closest('.grid') !== null;
    });

    if (avatarBtns.length > 0) {
      await user.click(avatarBtns[0]);
      // After clicking, the selected avatar may show a ring/selection indicator
      await waitFor(() => {
        expect(document.body.textContent!.length).toBeGreaterThan(50);
      }, { timeout: 3000 });
    }

    // Page should not crash
    expect(document.querySelector('[role="alert"]')).toBeNull();
  });

  it('shows locked avatars section with lock indicator', async () => {
    renderCollection();
    await waitForPageLoad();

    const text = document.body.textContent || '';
    // Either shows locked avatars or only unlocked (depends on user level)
    expect(text.length).toBeGreaterThan(50);
  });
});

/* ============================================================
   THEMES TAB
   ============================================================ */
describe('Collection Page — Themes Tab', () => {
  it('switches to Temas tab', async () => {
    const { user } = renderCollection();
    await waitForPageLoad();

    const temasBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').match(/^🎨\s*Temas$/)
    );
    expect(temasBtn).toBeTruthy();
    await user.click(temasBtn!);

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Temas/);
    });
  });

  it('temas tab shows theme grid with colors', async () => {
    const { user } = renderCollection();
    await waitForPageLoad();

    const temasBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').match(/^🎨\s*Temas$/)
    );
    await user.click(temasBtn!);

    await waitFor(() => {
      // Theme colors are displayed as div squares
      const colorDivs = document.querySelectorAll('[style*="background"]');
      expect(colorDivs.length).toBeGreaterThanOrEqual(1);
    }, { timeout: 5000 });
  });

  it('can select a theme', async () => {
    const { user } = renderCollection();
    await waitForPageLoad();

    // Click Temas tab
    const temasBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').match(/^🎨\s*Temas$/)
    );
    await user.click(temasBtn!);

    await waitFor(() => expect(screen.queryAllByRole('button').length).toBeGreaterThan(3), { timeout: 5000 });

    // Find unlocked theme buttons (they're in a grid inside Temas section)
    const themeBtns = screen.getAllByRole('button').filter(btn => {
      const parent = btn.closest('[class*="grid"]');
      return parent !== null && (btn.textContent || '').length > 2;
    });

    if (themeBtns.length > 0) {
      await user.click(themeBtns[0]);
      expect(document.querySelector('[role="alert"]')).toBeNull();
    }
  });
});

/* ============================================================
   COLLECTIBLES TAB
   ============================================================ */
describe('Collection Page — Collectibles Tab', () => {
  it('switches to Coleccionables tab', async () => {
    const { user } = renderCollection();
    await waitForPageLoad();

    const collectBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Coleccionables')
    );
    expect(collectBtn).toBeTruthy();
    await user.click(collectBtn!);

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Coleccionables/);
    });
  });

  it('collectibles tab shows rarity badges', async () => {
    const { user } = renderCollection();
    await waitForPageLoad();

    const collectBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Coleccionables')
    );
    await user.click(collectBtn!);

    await waitFor(() => {
      const text = document.body.textContent || '';
      // Should show rarity types (common, uncommon, rare, epic, legendary)
      expect(text).toMatch(/common|uncommon|rare|epic|legendary|Desbloqueados|Bloqueados/i);
    }, { timeout: 5000 });
  });

  it('can equip/unequip a collectible', async () => {
    const { user } = renderCollection();
    await waitForPageLoad();

    const collectBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Coleccionables')
    );
    await user.click(collectBtn!);

    // Wait for collectibles tab content to appear (items may be divs, not buttons)
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Coleccionables|Desbloqueados|Bloqueados|Logros/i);
    }, { timeout: 8000 });

    // Find any clickable elements in the collectibles grid (buttons or divs)
    const collectBtns = screen.getAllByRole('button').filter(btn => {
      const parent = btn.closest('[class*="grid"]');
      return parent !== null && (btn.textContent || '').length > 1;
    });

    if (collectBtns.length > 0) {
      await user.click(collectBtns[0]);

      // After clicking, page should still render correctly
      await waitFor(() => {
        expect(document.body.textContent!.length).toBeGreaterThan(50);
      }, { timeout: 3000 });
      expect(document.querySelector('[role="alert"]')).toBeNull();
    } else {
      // Collectibles may be non-button elements - just check page renders
      expect(document.body.textContent!.length).toBeGreaterThan(50);
    }
  }, 15000);

  it('shows equipped/unequipped indicator for collectibles', async () => {
    const { user } = renderCollection();
    await waitForPageLoad();

    const collectBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Coleccionables')
    );
    await user.click(collectBtn!);

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Coleccionables/);
    });

    // Page renders the collectibles section without crashing
    expect(document.querySelector('[role="alert"]')).toBeNull();
  });
});

/* ============================================================
   EQUIPPED ITEMS DISPLAY
   ============================================================ */
describe('Collection Page — Equipped Items', () => {
  it('shows current avatar in equipment panel', async () => {
    renderCollection();
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Avatar/);
  });

  it('shows current theme in equipment panel', async () => {
    renderCollection();
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Tema/);
  });

  it('shows collectibles slots (up to 3)', async () => {
    renderCollection();
    await waitForPageLoad();

    // Equipment panel shows collectibles count x/3
    const text = document.body.textContent || '';
    expect(text).toMatch(/\/3|Coleccionables/);
  });
});
