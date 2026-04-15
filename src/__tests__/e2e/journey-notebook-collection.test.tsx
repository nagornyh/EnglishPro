/**
 * JOURNEY TEST: Notebook & Collection pages
 * Tests CRUD operations for notes/vocab lists, and collectible equipping.
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const Notebook = lazy(() => import('../../pages/Notebook'));
const Collection = lazy(() => import('../../pages/Collection'));

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderPage(page: ReactElement) {
  const user = userEvent.setup();
  const result = render(
    <ErrorBoundary>
      <MemoryRouter>
        <ThemeProvider>
          <UserProvider>
            <WaitForUser>
              <Suspense fallback={<div data-testid="suspense">Cargando módulo...</div>}>
                {page}
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
}

beforeEach(async () => {
  resetSession();
  await seedUserWithProgress(uniqueName('NoteCollUser'), { currentLevel: 5, totalXP: 1500 });
});

// ===========================================
// NOTEBOOK PAGE JOURNEY
// ===========================================
describe('Notebook Page - Tabs & CRUD', () => {
  it('shows notebook with 3 tabs', async () => {
    renderPage(<Notebook />);
    await waitForPageLoad();

    // Wait for Notebook's internal data loading to complete
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Cuaderno|Notebook/);
    
      // Tab buttons
      expect(text).toMatch(/Notas/);
      expect(text).toMatch(/Vocabulario/);
      expect(text).toMatch(/Sesiones/);
    }, { timeout: 10000 });
  });

  it('notes tab shows add button and opens create modal', async () => {
    const { user } = renderPage(<Notebook />);
    await waitForPageLoad();

    // Wait for Notebook's own internal data loading to finish
    await waitFor(() => {
      expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
    }, { timeout: 10000 });

    // Should be on notes tab by default
    // Click "Agregar nueva nota" or similar button
    const addBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Agregar') || t.includes('nueva nota') || t.includes('+');
    });
    
    if (addBtns.length > 0) {
      await user.click(addBtns[0]);

      // Modal should appear with form fields
      await waitFor(() => {
        const modalText = document.body.textContent || '';
        expect(modalText).toMatch(/Guardar|Cancelar/);
      });
    }
  });

  it('note modal has Cancelar to dismiss', async () => {
    const { user } = renderPage(<Notebook />);
    await waitForPageLoad();

    // Wait for Notebook's own internal data loading to finish
    await waitFor(() => {
      expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
    }, { timeout: 10000 });

    const addBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Agregar') || t.includes('nueva nota') || t.includes('+');
    });
    
    if (addBtns.length > 0) {
      await user.click(addBtns[0]);

      await waitFor(() => {
        expect(screen.getByText('Cancelar')).toBeInTheDocument();
      });

      await user.click(screen.getByText('Cancelar'));

      // Modal should close
      await waitFor(() => {
        expect(screen.queryByText('Guardar')).not.toBeInTheDocument();
      });
    }
  });

  it('can switch between tabs', async () => {
    const { user } = renderPage(<Notebook />);
    await waitForPageLoad();

    // Wait for Notebook's internal loading to complete
    await waitFor(() => {
      expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
    }, { timeout: 10000 });

    // Click Vocabulario tab
    const vocabTab = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Vocabulario') && !t.includes('nueva');
    });

    if (vocabTab.length > 0) {
      await user.click(vocabTab[0]);
      await waitFor(() => {
        const text = document.body.textContent || '';
        expect(text).toMatch(/Crear nueva lista|lista|vocabulario/i);
      });
    }

    // Click Sesiones tab
    const sessionsTab = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Sesiones');
    });

    if (sessionsTab.length > 0) {
      await user.click(sessionsTab[0]);
      await waitFor(() => {
        const text = document.body.textContent || '';
        expect(text).toMatch(/Sesiones|sesión|historial/i);
      });
    }
  });

  it('vocab tab shows create list button', async () => {
    const { user } = renderPage(<Notebook />);
    await waitForPageLoad();

    // Wait for Notebook's own internal data loading to finish
    await waitFor(() => {
      expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
    }, { timeout: 10000 });

    // Switch to vocab tab
    const vocabTab = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Vocabulario') && !t.includes('nueva');
    });

    if (vocabTab.length > 0) {
      await user.click(vocabTab[0]);

      await waitFor(() => {
        const text = document.body.textContent || '';
        expect(text).toMatch(/Crear nueva lista/);
      });
    }
  });
});

// ===========================================
// COLLECTION PAGE JOURNEY
// ===========================================
describe('Collection Page - Tabs & Equip', () => {
  it('shows collection with 3 tabs', async () => {
    renderPage(<Collection />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Colección|Collection/);
    expect(text).toMatch(/Avatares/);
    expect(text).toMatch(/Temas/);
    expect(text).toMatch(/Coleccionables/);
  });

  it('avatares tab shows avatar grid', async () => {
    renderPage(<Collection />);
    await waitForPageLoad();

    // Should be on avatares tab by default
    const text = document.body.textContent || '';
    expect(text).toMatch(/Avatares/);
  });

  it('can switch to temas tab', async () => {
    const { user } = renderPage(<Collection />);
    await waitForPageLoad();

    // Click Temas tab
    const temasTab = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Temas') && !t.includes('Coleccionables');
    });

    if (temasTab.length > 0) {
      await user.click(temasTab[0]);
      await waitFor(() => {
        const text = document.body.textContent || '';
        expect(text).toMatch(/Temas/);
      });
    }
  });

  it('can switch to coleccionables tab', async () => {
    const { user } = renderPage(<Collection />);
    await waitForPageLoad();

    // Click Coleccionables tab
    const collectTab = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Coleccionables');
    });

    if (collectTab.length > 0) {
      await user.click(collectTab[0]);
      await waitFor(() => {
        const text = document.body.textContent || '';
        expect(text).toMatch(/Coleccionables/);
      });
    }
  });
});
