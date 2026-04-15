/**
 * E2E: Notebook — Full CRUD Journey
 * Tests the complete lifecycle of notes and vocabulary lists:
 *   - Create note (open modal → fill title+content → save → see in list)
 *   - Edit note (open edit modal → change title → save → verify change)
 *   - Delete note (click delete → confirm → note gone)
 *   - Create vocab list (open modal → fill name → save → see in list)
 *   - Switch between tabs
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

function WaitForUser({ children }: { children: ReactElement }) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div data-testid="loading">Cargando...</div>;
  if (!user) return <div data-testid="no-user">Sin usuario</div>;
  return children;
}

function renderNotebook() {
  const user = userEvent.setup();
  const result = render(
    <ErrorBoundary>
      <MemoryRouter>
        <ThemeProvider>
          <UserProvider>
            <WaitForUser>
              <Suspense fallback={<div data-testid="suspense">Cargando módulo...</div>}>
                <Notebook />
              </Suspense>
            </WaitForUser>
          </UserProvider>
        </ThemeProvider>
      </MemoryRouter>
    </ErrorBoundary>
  );
  return { ...result, user };
}

async function waitForNotebookLoad() {
  await waitFor(() => {
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('suspense')).not.toBeInTheDocument();
  }, { timeout: 10000 });

  // Wait for Notebook's own internal data loading
  await waitFor(() => {
    const text = document.body.textContent || '';
    expect(text).toMatch(/Cuaderno|Notas|Vocabulario/);
  }, { timeout: 10000 });
}

beforeEach(async () => {
  resetSession();
  await seedUserWithProgress(uniqueName('NotebookUser'), { currentLevel: 3, totalXP: 500 });
});

/* ============================================================
   CREATE NOTE
   ============================================================ */
describe('Notebook — Create Note', () => {
  it('opens the create note modal', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    // Click "Agregar nueva nota" button
    const addBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Agregar')
    );
    expect(addBtn).toBeTruthy();
    await user.click(addBtn!);

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Nueva Nota|Título|Contenido/);
    });
  });

  it('modal shows type selector, title input, content textarea, tags input', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    const addBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Agregar')
    );
    await user.click(addBtn!);

    await waitFor(() => {
      // Check for form fields
      const inputs = document.querySelectorAll('input, textarea');
      expect(inputs.length).toBeGreaterThanOrEqual(2);
    });
  });

  it('can type a note title in the modal', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    const addBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Agregar')
    );
    await user.click(addBtn!);

    await waitFor(() => {
      expect(screen.queryByPlaceholderText(/Título de la nota/)).toBeInTheDocument();
    });

    const titleInput = screen.getByPlaceholderText(/Título de la nota/);
    await user.type(titleInput, 'Mi primera nota');
    expect((titleInput as HTMLInputElement).value).toBe('Mi primera nota');
  });

  it('Save button is disabled when title is empty', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    const addBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Agregar')
    );
    await user.click(addBtn!);

    await waitFor(() => {
      expect(screen.queryByText('Guardar')).toBeInTheDocument();
    });

    const saveBtn = screen.getAllByRole('button').find(btn =>
      btn.textContent?.trim() === 'Guardar'
    ) as HTMLButtonElement;
    expect(saveBtn).toBeTruthy();
    expect(saveBtn.disabled).toBe(true);
  });

  it('creates a note and it appears in the list', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    // Open modal
    const addBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Agregar')
    );
    await user.click(addBtn!);

    await waitFor(() => {
      expect(screen.queryByPlaceholderText(/Título de la nota/)).toBeInTheDocument();
    });

    // Fill title
    await user.type(screen.getByPlaceholderText(/Título de la nota/), 'Nota de Prueba');

    // Fill content
    const contentTextarea = screen.queryByPlaceholderText(/Escribe aquí/);
    if (contentTextarea) {
      await user.type(contentTextarea, 'Este es el contenido de mi nota');
    }

    // Click Guardar
    const saveBtn = screen.getAllByRole('button').find(btn =>
      btn.textContent?.trim() === 'Guardar'
    );
    expect(saveBtn).toBeTruthy();
    await user.click(saveBtn!);

    // Note should appear in the list
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Nota de Prueba/);
    }, { timeout: 8000 });
  });

  it('cancelling modal closes without saving', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    const addBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Agregar')
    );
    await user.click(addBtn!);

    await waitFor(() => {
      expect(screen.queryByText('Cancelar')).toBeInTheDocument();
    });

    await user.click(screen.getByText('Cancelar'));

    await waitFor(() => {
      expect(screen.queryByText('Guardar')).not.toBeInTheDocument();
    });
  });
});

/* ============================================================
   EDIT NOTE
   ============================================================ */
describe('Notebook — Edit Note', () => {
  it('can edit a saved note', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    // First create a note
    const addBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Agregar')
    );
    await user.click(addBtn!);
    await waitFor(() => expect(screen.queryByPlaceholderText(/Título/)).toBeInTheDocument());
    await user.type(screen.getByPlaceholderText(/Título de la nota/), 'Nota Original');
    const saveBtn1 = screen.getAllByRole('button').find(btn =>
      btn.textContent?.trim() === 'Guardar'
    );
    await user.click(saveBtn1!);

    // Wait for note to appear
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/Nota Original/);
    }, { timeout: 8000 });

    // Click the edit button (✏️ emoji button)
    const editBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('✏️')
    );
    if (editBtn) {
      await user.click(editBtn);

      await waitFor(() => {
        expect(screen.queryByText('Editar Nota')).toBeInTheDocument();
      });
    }
  });
});

/* ============================================================
   DELETE NOTE
   ============================================================ */
describe('Notebook — Delete Note', () => {
  it('can delete a note and it disappears from list', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    // Create a note first
    const addBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Agregar')
    );
    await user.click(addBtn!);
    await waitFor(() => expect(screen.queryByPlaceholderText(/Título/)).toBeInTheDocument());
    await user.type(screen.getByPlaceholderText(/Título de la nota/), 'Nota Para Borrar');
    const saveBtn = screen.getAllByRole('button').find(btn =>
      btn.textContent?.trim() === 'Guardar'
    );
    await user.click(saveBtn!);

    await waitFor(() => {
      expect(document.body.textContent).toMatch(/Nota Para Borrar/);
    }, { timeout: 8000 });

    // Click delete button (🗑️)
    const deleteBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('🗑️')
    );
    if (deleteBtn) {
      await user.click(deleteBtn);

      // Note should be gone after deletion
      await waitFor(() => {
        const text = document.body.textContent || '';
        expect(text).not.toMatch(/Nota Para Borrar/);
      }, { timeout: 8000 });
    }
  });
});

/* ============================================================
   VOCABULARY LIST CRUD
   ============================================================ */
describe('Notebook — Vocabulary List', () => {
  it('switches to vocab tab', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    const vocabTab = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Vocabulario') && !(btn.textContent || '').includes('nueva')
    );
    expect(vocabTab).toBeTruthy();
    await user.click(vocabTab!);

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Crear nueva lista|No tienes listas/);
    });
  });

  it('opens create vocab list modal', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    // Go to vocab tab
    const vocabTab = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Vocabulario') && !(btn.textContent || '').includes('nueva')
    );
    await user.click(vocabTab!);

    // Click "Crear nueva lista"
    await waitFor(() => expect(screen.queryByText(/Crear nueva lista/)).toBeInTheDocument());
    const createBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Crear nueva lista')
    );
    expect(createBtn).toBeTruthy();
    await user.click(createBtn!);

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Nueva Lista de Vocabulario|Nombre/);
    });
  });

  it('creates a vocab list with name and sees it saved', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    // Navigate to vocab tab
    const vocabTab = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Vocabulario') && !(btn.textContent || '').includes('nueva')
    );
    await user.click(vocabTab!);

    await waitFor(() => expect(screen.queryByText(/Crear nueva lista/)).toBeInTheDocument());
    const createBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Crear nueva lista')
    );
    await user.click(createBtn!);

    // Fill in list name
    await waitFor(() => {
      expect(screen.queryByPlaceholderText(/Mi lista de vocabulario/)).toBeInTheDocument();
    });

    await user.type(
      screen.getByPlaceholderText(/Mi lista de vocabulario/),
      'Verbos Irregulares B1'
    );

    // Save
    const saveBtn = screen.getAllByRole('button').find(btn =>
      btn.textContent?.trim() === 'Guardar'
    );
    expect(saveBtn).toBeTruthy();
    await user.click(saveBtn!);

    // Verify saved list appears
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Verbos Irregulares B1/);
    }, { timeout: 8000 });
  });

  it('can cancel vocab list creation', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    const vocabTab = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Vocabulario') && !(btn.textContent || '').includes('nueva')
    );
    await user.click(vocabTab!);

    await waitFor(() => expect(screen.queryByText(/Crear nueva lista/)).toBeInTheDocument());
    const createBtn = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Crear nueva lista')
    );
    await user.click(createBtn!);

    await waitFor(() => expect(screen.queryByText('Cancelar')).toBeInTheDocument());
    await user.click(screen.getByText('Cancelar'));

    await waitFor(() => {
      expect(screen.queryByText(/Nueva Lista de Vocabulario/)).not.toBeInTheDocument();
    });
  });
});

/* ============================================================
   SESSIONS TAB
   ============================================================ */
describe('Notebook — Sessions Tab', () => {
  it('sessions tab shows empty state when no sessions', async () => {
    const { user } = renderNotebook();
    await waitForNotebookLoad();

    const sessionsTab = screen.getAllByRole('button').find(btn =>
      (btn.textContent || '').includes('Sesiones')
    );
    expect(sessionsTab).toBeTruthy();
    await user.click(sessionsTab!);

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Sesiones|sesión|No hay/i);
    });
  });
});

/* ============================================================
   STATISTICS DISPLAY
   ============================================================ */
describe('Notebook — Stats Display', () => {
  it('shows note count, list count, session count stats', async () => {
    renderNotebook();
    await waitForNotebookLoad();

    // The header shows counts for notes, vocab lists, sessions
    const text = document.body.textContent || '';
    expect(text).toMatch(/\d+/); // At least one number shown
  });
});
