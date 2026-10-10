import type { Accent } from '../types';

/**
 * Os falares do shoshone (10/10/2026). Fontes: Wikipédia em português e em inglês («Shoshoni language»,
 * consultada em 10/10/2026), que divide a língua em ocidental, setentrional e oriental, mais o gosiute.
 */
export const ACCENTS_SHH: Accent[] = [
  {
    id: 'shh-ocidental',
    name: 'Ocidental (Nevada)',
    kind: 'sotaque',
    region: 'O centro e o norte de Nevada',
    country: 'USA',
    subdivisions: ['US-NV'],
    emoji: '🏜️',
    summary: 'O shoshone ocidental, das comunidades de Nevada, com formas próprias.',
    features: ['Formas próprias do Grande Basin.', 'Comunidades pequenas, espalhadas pelo deserto.'],
    examples: [['Gai.', 'Não.']],
  },
  {
    id: 'shh-setentrional',
    name: 'Setentrional (Idaho)',
    kind: 'sotaque',
    region: 'A Reserva de Fort Hall, em Idaho',
    country: 'USA',
    subdivisions: ['US-ID'],
    emoji: '🌾',
    summary: 'O shoshone de Fort Hall, em Idaho, dos shoshone-bannock, a comunidade de Sacagawea.',
    features: ['Uma das comunidades com mais falantes.', 'Sacagawea, a guia da expedição de Lewis e Clark, era shoshone.'],
    examples: [['Gai.', 'Não.']],
  },
  {
    id: 'shh-oriental',
    name: 'Oriental (Wyoming)',
    kind: 'sotaque',
    region: 'A Reserva de Wind River, em Wyoming',
    country: 'USA',
    subdivisions: ['US-WY'],
    emoji: '🐎',
    summary: 'O shoshone oriental, de Wind River, em Wyoming, com escolas que ensinam a língua.',
    features: ['Formas próprias do leste.', 'Os shoshone orientais eram cavaleiros das planícies.'],
    examples: [['Gai.', 'Não.']],
  },
  {
    id: 'shh-gosiute',
    name: 'Gosiute (Utah)',
    kind: 'sotaque',
    region: 'O deserto do oeste de Utah',
    country: 'USA',
    subdivisions: ['US-UT'],
    emoji: '🌵',
    summary: 'O shoshone dos gosiute, do deserto de Utah, com poucos falantes.',
    features: ['Poucos falantes.', 'Próximo do shoshone ocidental.'],
    examples: [['Gai.', 'Não.']],
  },
];
