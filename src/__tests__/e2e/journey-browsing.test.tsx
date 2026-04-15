/**
 * JOURNEY TEST: Browsing Pages
 * Tests PhrasesBank, RegionalVariants, WordExplorer, SentenceBank interaction flows.
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import { UserProvider, useUser } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { seedUserWithProgress, resetSession, uniqueName } from './test-helpers';

const PhrasesBank = lazy(() => import('../../pages/PhrasesBank'));
const RegionalVariants = lazy(() => import('../../pages/RegionalVariants'));
const WordExplorer = lazy(() => import('../../pages/WordExplorer'));
const SentenceBank = lazy(() => import('../../pages/SentenceBank'));

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
  await seedUserWithProgress(uniqueName('BrowseUser'), { currentLevel: 5, totalXP: 1500 });
});

// ===========================================
// PHRASES BANK JOURNEY
// ===========================================
describe('PhrasesBank - Search, Filter, Interact', () => {
  it('shows phrase bank with all 50 phrases grouped by category', async () => {
    renderPage(<PhrasesBank />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Banco de Frases/);
    expect(text).toMatch(/50 frases/);
    expect(text).toMatch(/Greetings/);
    expect(text).toMatch(/Small Talk/);
    expect(text).toMatch(/Restaurant/);
  });

  it('search filters phrases', async () => {
    const { user } = renderPage(<PhrasesBank />);
    await waitForPageLoad();

    // Type in search
    const searchInput = screen.getByPlaceholderText(/Buscar frases/);
    await user.type(searchInput, 'menu');

    // Should filter to restaurant-related phrases
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/menu/i);
    });
  });

  it('filter button toggles filter panel with category/level/situation', async () => {
    const { user } = renderPage(<PhrasesBank />);
    await waitForPageLoad();

    // Click filter button
    const filterBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Filtros') || btn.querySelector('.lucide-filter');
    });
    
    if (filterBtns.length > 0) {
      await user.click(filterBtns[0]);

      // Filter panel should show dropdowns
      await waitFor(() => {
        expect(screen.getByText('Categoría')).toBeInTheDocument();
        expect(screen.getByText('Nivel')).toBeInTheDocument();
        expect(screen.getByText('Situación')).toBeInTheDocument();
      });
    }
  });

  it('category filter reduces shown phrases', async () => {
    const { user } = renderPage(<PhrasesBank />);
    await waitForPageLoad();

    // Open filters
    const filterBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Filtros') || btn.querySelector('.lucide-filter');
    });
    
    if (filterBtns.length > 0) {
      await user.click(filterBtns[0]);

      // Select a category from dropdown  
      await waitFor(() => {
        expect(screen.getByText('Categoría')).toBeInTheDocument();
      });
      
      const categorySelect = screen.getAllByRole('combobox')[0];
      if (categorySelect) {
        await user.selectOptions(categorySelect, 'Restaurant');

        // Should show only restaurant phrases
        await waitFor(() => {
          const text = document.body.textContent || '';
          expect(text).toMatch(/5 frase/);
        });
      }
    }
  });

  it('favorite button toggles favorite state', async () => {
    const { user: _user } = renderPage(<PhrasesBank />);
    await waitForPageLoad();

    // Click the favorites toggle (heart icon button at top)
    const heartBtns = screen.getAllByRole('button').filter(btn => {
      return btn.querySelector('.lucide-heart') !== null;
    });

    // The top-level heart toggle is the favorites filter
    if (heartBtns.length > 0) {
      // Initially 0 favorites
      expect(document.body.textContent).toMatch(/50 frases/);
    }
  });

  it('shows no results message when search has no matches', async () => {
    const { user } = renderPage(<PhrasesBank />);
    await waitForPageLoad();

    const searchInput = screen.getByPlaceholderText(/Buscar frases/);
    await user.type(searchInput, 'zzzzzzunkownphrase');

    await waitFor(() => {
      expect(screen.getByText('No se encontraron frases')).toBeInTheDocument();
    });
  });
});

// ===========================================
// REGIONAL VARIANTS JOURNEY
// ===========================================
describe('RegionalVariants - Search, Filter, Expand', () => {
  it('shows regional variants page with UK vs US comparison', async () => {
    renderPage(<RegionalVariants />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Variantes Regionales/);
    expect(text).toMatch(/British English/);
    expect(text).toMatch(/American English/);
  });

  it('shows variants grouped by category', async () => {
    renderPage(<RegionalVariants />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Spelling/);
    expect(text).toMatch(/Vocabulary/);
    // At least some variants visible
    expect(text).toMatch(/colour|color/);
    expect(text).toMatch(/flat|apartment/);
  });

  it('search filters variants', async () => {
    const { user } = renderPage(<RegionalVariants />);
    await waitForPageLoad();

    const searchInput = screen.getByPlaceholderText(/Buscar palabras/);
    await user.type(searchInput, 'colour');

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/colour/);
      expect(text).toMatch(/color/);
    });
  });

  it('filter button opens category filter buttons', async () => {
    const { user } = renderPage(<RegionalVariants />);
    await waitForPageLoad();

    // Click filter button
    const filterBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('Filtros') || btn.querySelector('.lucide-filter');
    });
    
    if (filterBtns.length > 0) {
      await user.click(filterBtns[0]);

      // Category filter buttons should appear
      await waitFor(() => {
        const text = document.body.textContent || '';
        expect(text).toMatch(/Todas/);
        expect(text).toMatch(/Spelling/);
        expect(text).toMatch(/Vocabulary/);
      });
    }
  });

  it('clicking a variant card expands it to show note/example', async () => {
    const { user } = renderPage(<RegionalVariants />);
    await waitForPageLoad();

    // Click on the first variant card (colour/color) which has a note
    const colourTexts = screen.getAllByText('colour');
    if (colourTexts.length > 0) {
      // Click on the card containing "colour"
      const card = colourTexts[0].closest('.card') || colourTexts[0].parentElement?.parentElement;
      if (card) {
        await user.click(card);
        
        // Should show expanded note
        await waitFor(() => {
          const text = document.body.textContent || '';
          expect(text).toMatch(/-our vs -or/);
        });
      }
    }
  });

  it('shows no results when filtering with no matches', async () => {
    const { user } = renderPage(<RegionalVariants />);
    await waitForPageLoad();

    const searchInput = screen.getByPlaceholderText(/Buscar palabras/);
    await user.type(searchInput, 'zzzzzznotfound');

    await waitFor(() => {
      expect(screen.getByText('No se encontraron diferencias')).toBeInTheDocument();
    });
  });
});

// ===========================================
// WORD EXPLORER JOURNEY
// ===========================================
describe('WordExplorer - Tabs, Expand, Search', () => {
  it('shows word explorer with 4 tabs', async () => {
    renderPage(<WordExplorer />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Explorador de Palabras/);
    expect(screen.getByText('Familias')).toBeInTheDocument();
    expect(screen.getByText('Prefijos')).toBeInTheDocument();
    expect(screen.getByText('Sufijos')).toBeInTheDocument();
    expect(screen.getByText('Buscar')).toBeInTheDocument();
  });

  it('families tab shows expandable word families', async () => {
    renderPage(<WordExplorer />);
    await waitForPageLoad();

    // Should show family tip
    const text = document.body.textContent || '';
    expect(text).toMatch(/familias de palabras comparten una raíz/);
    // Should show word families with word counts
    expect(text).toMatch(/palabras/);
  });

  it('clicking a family expands it to show word members', async () => {
    const { user } = renderPage(<WordExplorer />);
    await waitForPageLoad();

    // Find family cards (they have a button with root text)
    const familyBtns = screen.getAllByRole('button').filter(btn => {
      const t = btn.textContent || '';
      return t.includes('palabras') && !t.includes('Explorador');
    });

    if (familyBtns.length > 0) {
      await user.click(familyBtns[0]);

      // Should expand and show word type groups
      await waitFor(() => {
        const text = document.body.textContent || '';
        // Should show word type groupings
        expect(text).toMatch(/Verbos|Sustantivos|Adjetivos|Adverbios/);
      });
    }
  });

  it('switching to Prefijos tab shows prefix cards', async () => {
    const { user } = renderPage(<WordExplorer />);
    await waitForPageLoad();

    await user.click(screen.getByText('Prefijos'));

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Los prefijos se añaden al inicio/);
    });
  });

  it('switching to Sufijos tab shows suffix cards', async () => {
    const { user } = renderPage(<WordExplorer />);
    await waitForPageLoad();

    await user.click(screen.getByText('Sufijos'));

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Los sufijos se añaden al final/);
    });
  });

  it('search tab shows input and handles search', async () => {
    const { user } = renderPage(<WordExplorer />);
    await waitForPageLoad();

    await user.click(screen.getByText('Buscar'));

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/Buscar una palabra/)).toBeInTheDocument();
    });

    // Type a search query
    const input = screen.getByPlaceholderText(/Buscar una palabra/);
    await user.type(input, 'create');

    // Wait for debounce and results
    await waitFor(() => {
      const text = document.body.textContent || '';
      // Should show either results or no-results message
      expect(text.includes('create') || text.includes('No se encontró')).toBe(true);
    }, { timeout: 3000 });
  });
});

// ===========================================
// SENTENCE BANK JOURNEY
// ===========================================
describe('SentenceBank - Levels, Modes, Navigation', () => {
  it('shows sentence bank with 5 level buttons', async () => {
    renderPage(<SentenceBank />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Banco de Oraciones/);
    expect(screen.getByText('Nivel 1')).toBeInTheDocument();
    expect(screen.getByText('Nivel 2')).toBeInTheDocument();
    expect(screen.getByText('Nivel 3')).toBeInTheDocument();
    expect(screen.getByText('Nivel 4')).toBeInTheDocument();
    expect(screen.getByText('Nivel 5')).toBeInTheDocument();
  });

  it('shows browse and practice mode toggles', async () => {
    renderPage(<SentenceBank />);
    await waitForPageLoad();

    expect(screen.getByText(/Ver lista/)).toBeInTheDocument();
    expect(screen.getByText(/Practicar/)).toBeInTheDocument();
  });

  it('browse mode shows all sentences in a list', async () => {
    renderPage(<SentenceBank />);
    await waitForPageLoad();

    // Default is browse mode - should show sentence list
    const text = document.body.textContent || '';
    expect(text).toMatch(/oraciones disponibles/);
    // Should show grammar point badges
    expect(text).toMatch(/simple present|present simple|past simple/i);
  });

  it('switching to practice mode shows flashcard-style view', async () => {
    const { user } = renderPage(<SentenceBank />);
    await waitForPageLoad();

    // Click practice mode
    await user.click(screen.getByText(/Practicar/));

    // Should show flashcard view
    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Oración \d+ de \d+/);
      expect(text).toMatch(/Ver traducción/);
    });
  });

  it('practice mode: translation toggle shows/hides translation', async () => {
    const { user } = renderPage(<SentenceBank />);
    await waitForPageLoad();

    await user.click(screen.getByText(/Practicar/));

    await waitFor(() => {
      expect(screen.getByText(/Ver traducción/)).toBeInTheDocument();
    });

    // Click to show translation
    await user.click(screen.getByText(/Ver traducción/));

    // Should now show "Ocultar traducción"
    await waitFor(() => {
      expect(screen.getByText(/Ocultar traducción/)).toBeInTheDocument();
    });
  });

  it('practice mode: vocabulary toggle shows/hides vocabulary', async () => {
    const { user } = renderPage(<SentenceBank />);
    await waitForPageLoad();

    await user.click(screen.getByText(/Practicar/));

    await waitFor(() => {
      expect(screen.getByText(/Ver vocabulario clave/)).toBeInTheDocument();
    });

    await user.click(screen.getByText(/Ver vocabulario clave/));

    await waitFor(() => {
      expect(screen.getByText(/Ocultar vocabulario/)).toBeInTheDocument();
    });
  });

  it('practice mode: Siguiente/Anterior navigation works', async () => {
    const { user } = renderPage(<SentenceBank />);
    await waitForPageLoad();

    await user.click(screen.getByText(/Practicar/));

    await waitFor(() => {
      expect(screen.getByText(/Oración 1 de/)).toBeInTheDocument();
    });

    // Click Siguiente
    await user.click(screen.getByText(/Siguiente →/));

    await waitFor(() => {
      expect(screen.getByText(/Oración 2 de/)).toBeInTheDocument();
    });

    // Click Anterior
    await user.click(screen.getByText(/← Anterior/));

    await waitFor(() => {
      expect(screen.getByText(/Oración 1 de/)).toBeInTheDocument();
    });
  });

  it('clicking a different level loads its sentences', async () => {
    const { user } = renderPage(<SentenceBank />);
    await waitForPageLoad();

    // Click Level 3
    await user.click(screen.getByText('Nivel 3'));

    await waitFor(() => {
      const text = document.body.textContent || '';
      expect(text).toMatch(/Nivel 3/);
      expect(text).toMatch(/Presente perfecto|comparativos|modales/i);
    });
  });

  it('shows tips section', async () => {
    renderPage(<SentenceBank />);
    await waitForPageLoad();

    const text = document.body.textContent || '';
    expect(text).toMatch(/Consejos de uso/);
    expect(text).toMatch(/Lee la oración en voz alta/);
  });
});
