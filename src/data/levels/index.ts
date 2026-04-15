import type { Level } from '../../types';
import { level1 } from './level1';
import { level2 } from './level2';
import { level3 } from './level3';
import { level4 } from './level4';
import { level5 } from './level5';
import { level6 } from './level6';
import { level7 } from './level7';
import { level8 } from './level8';
import { level9 } from './level9';
import { level10 } from './level10';
import { level11 } from './level11';
import { level12 } from './level12';
import { level13 } from './level13';

export const levels: Level[] = [
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  level10,
  level11,
  level12,
  level13,
];

export const getLevelById = (id: number): Level | undefined => {
  return levels.find(level => level.id === id);
};

export const getLevelColor = (id: number): string => {
  const level = getLevelById(id);
  return level?.color || '#6366f1';
};

export const getCefrDescription = (cefr: string): string => {
  const descriptions: Record<string, string> = {
    'A1': 'Principiante - Puede entender y usar expresiones básicas',
    'A1+': 'Principiante Alto - Puede comunicarse en situaciones simples',
    'A2': 'Básico - Puede describir aspectos de su vida y entorno',
    'B1': 'Intermedio - Puede manejar situaciones cotidianas',
    'B1+': 'Intermedio Alto - Puede expresar opiniones y planes',
    'B2': 'Intermedio Superior - Puede interactuar con fluidez',
    'B2+': 'Pre-Avanzado - Puede entender textos complejos',
    'C1': 'Avanzado - Puede usar el idioma de manera flexible',
    'C1+': 'Avanzado Alto - Puede producir textos claros y detallados',
    'C2': 'Maestría - Puede entender prácticamente todo',
    'C2+': 'Nivel Nativo - Dominio completo del idioma',
  };
  return descriptions[cefr] || 'Nivel no definido';
};

export default levels;
