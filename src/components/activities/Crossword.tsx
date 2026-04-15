// Crossword Activity Component
// Interactive crossword puzzles for vocabulary practice

import { useState, useEffect, useCallback } from 'react';
import type { CrosswordPuzzle, CrosswordWord } from '../../data/crossword-puzzles';
import { CROSSWORD_PUZZLES, placeWordsOnGrid, createEmptyGrid } from '../../data/crossword-puzzles';

interface CrosswordProps {
  levelId?: number;
  onComplete?: (score: number, total: number) => void;
  onXPGain?: (xp: number) => void;
}

export default function Crossword({ levelId = 1, onComplete, onXPGain }: CrosswordProps) {
  const [puzzle, setPuzzle] = useState<CrosswordPuzzle | null>(null);
  const [userGrid, setUserGrid] = useState<string[][]>([]);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [selectedWord, setSelectedWord] = useState<CrosswordWord | null>(null);
  const [direction, setDirection] = useState<'across' | 'down'>('across');
  const [completed, setCompleted] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [checkedCells, setCheckedCells] = useState<Set<string>>(new Set());
  const [wrongCells, setWrongCells] = useState<Set<string>>(new Set());
  const [startTime] = useState(Date.now());

  // Load puzzle for level
  useEffect(() => {
    const levelPuzzles = CROSSWORD_PUZZLES.filter(p => p.level === levelId);
    if (levelPuzzles.length > 0) {
      const randomPuzzle = levelPuzzles[Math.floor(Math.random() * levelPuzzles.length)];
      setPuzzle(randomPuzzle);
      setUserGrid(createEmptyGrid(randomPuzzle.gridSize));
    }
  }, [levelId]);

  // Get solution grid
  const solutionGrid = puzzle ? placeWordsOnGrid(puzzle) : [];

  // Check if cell is part of puzzle
  const isActiveCell = useCallback((row: number, col: number): boolean => {
    if (!puzzle) return false;
    return solutionGrid[row]?.[col] !== '';
  }, [puzzle, solutionGrid]);

  // Get word number for cell
  const getCellNumber = useCallback((row: number, col: number): number | null => {
    if (!puzzle) return null;
    const word = puzzle.words.find(w => w.row === row && w.col === col);
    return word?.number || null;
  }, [puzzle]);

  // Handle cell click
  const handleCellClick = (row: number, col: number) => {
    if (!isActiveCell(row, col)) return;
    
    if (selectedCell?.row === row && selectedCell?.col === col) {
      // Toggle direction on same cell click
      setDirection(d => d === 'across' ? 'down' : 'across');
    } else {
      setSelectedCell({ row, col });
    }

    // Find word for this cell
    const word = puzzle?.words.find(w => {
      if (w.direction === direction) {
        if (w.direction === 'across') {
          return w.row === row && col >= w.col && col < w.col + w.word.length;
        } else {
          return w.col === col && row >= w.row && row < w.row + w.word.length;
        }
      }
      return false;
    });
    setSelectedWord(word || null);
  };

  // Handle keyboard input
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!selectedCell || !puzzle) return;

    const { row, col } = selectedCell;

    if (e.key === 'Backspace') {
      // Clear current cell and move back
      const newGrid = [...userGrid];
      newGrid[row][col] = '';
      setUserGrid(newGrid);
      
      // Move to previous cell
      if (direction === 'across' && col > 0 && isActiveCell(row, col - 1)) {
        setSelectedCell({ row, col: col - 1 });
      } else if (direction === 'down' && row > 0 && isActiveCell(row - 1, col)) {
        setSelectedCell({ row: row - 1, col });
      }
    } else if (e.key === 'ArrowRight') {
      if (col < puzzle.gridSize - 1 && isActiveCell(row, col + 1)) {
        setSelectedCell({ row, col: col + 1 });
      }
    } else if (e.key === 'ArrowLeft') {
      if (col > 0 && isActiveCell(row, col - 1)) {
        setSelectedCell({ row, col: col - 1 });
      }
    } else if (e.key === 'ArrowDown') {
      if (row < puzzle.gridSize - 1 && isActiveCell(row + 1, col)) {
        setSelectedCell({ row: row + 1, col });
      }
    } else if (e.key === 'ArrowUp') {
      if (row > 0 && isActiveCell(row - 1, col)) {
        setSelectedCell({ row: row - 1, col });
      }
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      // Enter letter
      const newGrid = [...userGrid];
      newGrid[row][col] = e.key.toUpperCase();
      setUserGrid(newGrid);

      // Move to next cell
      if (direction === 'across') {
        if (col < puzzle.gridSize - 1 && isActiveCell(row, col + 1)) {
          setSelectedCell({ row, col: col + 1 });
        }
      } else {
        if (row < puzzle.gridSize - 1 && isActiveCell(row + 1, col)) {
          setSelectedCell({ row: row + 1, col });
        }
      }
    }
  }, [selectedCell, puzzle, userGrid, direction, isActiveCell]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Check answers
  const checkAnswers = () => {
    if (!puzzle) return;
    
    const newWrongCells = new Set<string>();
    const newCheckedCells = new Set<string>();
    let allCorrect = true;

    for (let row = 0; row < puzzle.gridSize; row++) {
      for (let col = 0; col < puzzle.gridSize; col++) {
        const solution = solutionGrid[row][col];
        if (solution) {
          const key = `${row}-${col}`;
          newCheckedCells.add(key);
          if (userGrid[row][col] !== solution) {
            newWrongCells.add(key);
            allCorrect = false;
          }
        }
      }
    }

    setCheckedCells(newCheckedCells);
    setWrongCells(newWrongCells);

    if (allCorrect) {
      handleCompletion();
    }
  };

  // Handle completion
  const handleCompletion = () => {
    setCompleted(true);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const baseXP = puzzle ? puzzle.words.length * 10 : 50;
    const timeBonus = Math.max(0, 50 - Math.floor(timeSpent / 60)); // Bonus for speed
    const totalXP = baseXP + timeBonus;
    
    onXPGain?.(totalXP);
    onComplete?.(puzzle?.words.length || 0, puzzle?.words.length || 0);
  };

  // Reveal one letter
  const revealLetter = () => {
    if (!selectedCell || !puzzle) return;
    
    const { row, col } = selectedCell;
    const solution = solutionGrid[row][col];
    
    if (solution) {
      const newGrid = [...userGrid];
      newGrid[row][col] = solution;
      setUserGrid(newGrid);
    }
  };

  // Select different puzzle
  const selectPuzzle = (puzzleId: string) => {
    const newPuzzle = CROSSWORD_PUZZLES.find(p => p.id === puzzleId);
    if (newPuzzle) {
      setPuzzle(newPuzzle);
      setUserGrid(createEmptyGrid(newPuzzle.gridSize));
      setSelectedCell(null);
      setSelectedWord(null);
      setCompleted(false);
      setCheckedCells(new Set());
      setWrongCells(new Set());
    }
  };

  if (!puzzle) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">{puzzle.name}</h2>
        <p className="text-gray-400">{puzzle.nameEs}</p>
        {puzzle.theme && (
          <span className="inline-block mt-2 px-3 py-1 bg-primary-600/30 text-primary-300 rounded-full text-sm">
            {puzzle.theme} / {puzzle.themeEs}
          </span>
        )}
      </div>

      {/* Puzzle selector */}
      <div className="mb-4 flex flex-wrap gap-2">
        {CROSSWORD_PUZZLES.filter(p => p.level === levelId).map(p => (
          <button
            key={p.id}
            onClick={() => selectPuzzle(p.id)}
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${
              p.id === puzzle.id
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Crossword Grid */}
        <div className="bg-dark-800 rounded-xl p-4">
          <div
            className="grid gap-0.5 mx-auto"
            style={{
              gridTemplateColumns: `repeat(${puzzle.gridSize}, minmax(0, 1fr))`,
              maxWidth: `${puzzle.gridSize * 36}px`,
            }}
          >
            {Array.from({ length: puzzle.gridSize }).map((_, row) =>
              Array.from({ length: puzzle.gridSize }).map((_, col) => {
                const isActive = isActiveCell(row, col);
                const cellNumber = getCellNumber(row, col);
                const isSelected = selectedCell?.row === row && selectedCell?.col === col;
                const isInWord = selectedWord && (
                  selectedWord.direction === 'across'
                    ? selectedWord.row === row && col >= selectedWord.col && col < selectedWord.col + selectedWord.word.length
                    : selectedWord.col === col && row >= selectedWord.row && row < selectedWord.row + selectedWord.word.length
                );
                const cellKey = `${row}-${col}`;
                const isWrong = wrongCells.has(cellKey);
                const isChecked = checkedCells.has(cellKey) && !isWrong;

                return (
                  <div
                    key={`${row}-${col}`}
                    onClick={() => handleCellClick(row, col)}
                    className={`
                      relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center
                      text-lg font-bold border transition-colors cursor-pointer
                      ${!isActive ? 'bg-dark-900 border-dark-900' : ''}
                      ${isActive && !isSelected && !isInWord ? 'bg-dark-700 border-dark-600 text-white' : ''}
                      ${isInWord && !isSelected ? 'bg-primary-900/50 border-primary-700' : ''}
                      ${isSelected ? 'bg-primary-600 border-primary-500 text-white' : ''}
                      ${isWrong ? 'bg-red-900/50 border-red-600' : ''}
                      ${isChecked ? 'bg-green-900/50 border-green-600' : ''}
                    `}
                  >
                    {cellNumber && (
                      <span className="absolute top-0 left-0.5 text-[8px] text-gray-400">
                        {cellNumber}
                      </span>
                    )}
                    {isActive && (
                      <span className={isWrong ? 'text-red-400' : isChecked ? 'text-green-400' : ''}>
                        {userGrid[row]?.[col] || ''}
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Controls */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <button
              onClick={checkAnswers}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors"
            >
              ✓ Verificar
            </button>
            <button
              onClick={revealLetter}
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition-colors"
            >
              💡 Revelar letra
            </button>
            <button
              onClick={() => setShowHints(!showHints)}
              className="px-4 py-2 bg-dark-600 text-gray-300 rounded-lg hover:bg-dark-500 transition-colors"
            >
              {showHints ? '🙈 Ocultar pistas' : '👀 Ver pistas'}
            </button>
          </div>
        </div>

        {/* Clues */}
        <div className="bg-dark-800 rounded-xl p-4 max-h-[500px] overflow-y-auto">
          {/* Across */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-primary-400">→</span> Across (Horizontal)
            </h3>
            <div className="space-y-2">
              {puzzle.words
                .filter(w => w.direction === 'across')
                .sort((a, b) => a.number - b.number)
                .map(word => (
                  <div
                    key={word.word}
                    onClick={() => {
                      setSelectedCell({ row: word.row, col: word.col });
                      setDirection('across');
                      setSelectedWord(word);
                    }}
                    className={`p-2 rounded-lg cursor-pointer transition-colors ${
                      selectedWord?.word === word.word && direction === 'across'
                        ? 'bg-primary-600/30 border border-primary-500'
                        : 'hover:bg-dark-700'
                    }`}
                  >
                    <span className="font-bold text-primary-400">{word.number}.</span>{' '}
                    <span className="text-gray-300">{showHints ? word.clueEs : word.clue}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Down */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-accent-400">↓</span> Down (Vertical)
            </h3>
            <div className="space-y-2">
              {puzzle.words
                .filter(w => w.direction === 'down')
                .sort((a, b) => a.number - b.number)
                .map(word => (
                  <div
                    key={word.word}
                    onClick={() => {
                      setSelectedCell({ row: word.row, col: word.col });
                      setDirection('down');
                      setSelectedWord(word);
                    }}
                    className={`p-2 rounded-lg cursor-pointer transition-colors ${
                      selectedWord?.word === word.word && direction === 'down'
                        ? 'bg-accent-600/30 border border-accent-500'
                        : 'hover:bg-dark-700'
                    }`}
                  >
                    <span className="font-bold text-accent-400">{word.number}.</span>{' '}
                    <span className="text-gray-300">{showHints ? word.clueEs : word.clue}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Completion Modal */}
      {completed && (
        <div className="modal-overlay p-4">
          <div className="bg-dark-800 rounded-2xl p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-2">¡Crucigrama Completado!</h2>
            <p className="text-gray-400 mb-6">
              Has completado "{puzzle.name}" correctamente
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => {
                  const levelPuzzles = CROSSWORD_PUZZLES.filter(p => p.level === levelId);
                  const randomPuzzle = levelPuzzles[Math.floor(Math.random() * levelPuzzles.length)];
                  selectPuzzle(randomPuzzle.id);
                }}
                className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-500 transition-colors"
              >
                Otro crucigrama
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
