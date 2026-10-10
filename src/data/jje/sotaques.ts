import type { Accent } from '../types';

/**
 * Os falares do jejuense (10/10/2026). Fontes: Wikipédia em português, inglês e coreano («Jeju
 * language», «제주어», consultadas em 10/10/2026). A ilha se divide entre o norte (Jeju-si) e o sul
 * (Seogwipo), separados pelo monte Hallasan.
 */
export const ACCENTS_JJE: Accent[] = [
  {
    id: 'jje-norte',
    name: 'Norte (Jeju-si)',
    kind: 'sotaque',
    region: 'A cidade de Jeju e o norte da ilha',
    country: 'KOR',
    subdivisions: ['KR-49'],
    emoji: '🍊',
    summary: 'O jejuense do norte, da cidade de Jeju, ao norte do monte Hallasan.',
    features: ['Guarda a vogal antiga “ㆍ” (arae-a), que o coreano perdeu.', 'Terminações verbais próprias: “-수다”, “-우꽈”.'],
    examples: [['혼저옵서예', 'Bem-vindo!']],
  },
  {
    id: 'jje-sul',
    name: 'Sul (Seogwipo)',
    kind: 'sotaque',
    region: 'Seogwipo e o sul da ilha',
    country: 'KOR',
    subdivisions: ['KR-49'],
    emoji: '🌋',
    summary: 'O jejuense do sul, de Seogwipo, do outro lado do monte Hallasan, com palavras e entonação próprias.',
    features: ['Palavras próprias, diferentes das do norte.', 'A terra das haenyeo, as mergulhadoras de Jeju.'],
    examples: [['서귀포', 'Seogwipo']],
  },
];
