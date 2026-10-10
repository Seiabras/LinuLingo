import type { Accent } from '../types';

/**
 * Os falares do cassubiano (10/10/2026). Fontes: Wikipédia em português, inglês e polonês («Kashubian
 * language», «Dialekty kaszubskie», consultadas em 10/10/2026).
 */
export const ACCENTS_CSB: Accent[] = [
  {
    id: 'csb-norte',
    name: 'Norte (Puck)',
    kind: 'sotaque',
    region: 'O norte da Cassúbia: Puck e a península de Hel',
    country: 'POL',
    subdivisions: ['PL-22'],
    emoji: '🎣',
    summary: 'O cassubiano do norte, das vilas de pescadores do Báltico e da península de Hel.',
    features: ['O acento muda de lugar de palavra para palavra (acento livre).', 'Palavras próprias da pesca no Báltico.'],
    examples: [['Witôj!', 'Olá!']],
  },
  {
    id: 'csb-centro',
    name: 'Centro (Kartuzy)',
    kind: 'sotaque',
    region: 'Kartuzy e o centro da Cassúbia',
    country: 'POL',
    subdivisions: ['PL-22'],
    emoji: '🌲',
    summary: 'O cassubiano do centro, de Kartuzy, a base da língua escrita.',
    features: ['A base do padrão escrito.', 'Vogais e formas entre as do norte e as do sul.'],
    examples: [['Witôj!', 'Olá!']],
  },
  {
    id: 'csb-sul',
    name: 'Sul (Kościerzyna)',
    kind: 'sotaque',
    region: 'Kościerzyna, Bytów e o sul da Cassúbia',
    country: 'POL',
    subdivisions: ['PL-22'],
    emoji: '🏞️',
    summary: 'O cassubiano do sul, de Kościerzyna, mais próximo do polonês, com o acento na primeira sílaba.',
    features: ['O acento na primeira sílaba.', 'Mais próximo do polonês.'],
    examples: [['Witôj!', 'Olá!']],
  },
];
