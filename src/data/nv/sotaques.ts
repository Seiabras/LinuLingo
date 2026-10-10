import type { Accent } from '../types';

/**
 * O navajo, nos três estados da Nação Navajo (10/10/2026). Fontes: Wikipédia em português e em inglês
 * («Navajo language», «Code talker», consultadas em 10/10/2026). O navajo varia pouco de uma região para
 * outra; as diferenças são de palavras.
 */
export const ACCENTS_NV: Accent[] = [
  {
    id: 'nv-arizona',
    name: 'Arizona (Window Rock, Chinle)',
    kind: 'sotaque',
    region: 'O lado do Arizona da Nação Navajo',
    country: 'USA',
    subdivisions: ['US-AZ'],
    emoji: '🏜️',
    summary: 'O navajo do Arizona, de Window Rock, a capital da Nação Navajo, e de Chinle, perto do Canyon de Chelly.',
    features: ['Window Rock é a sede do governo navajo.', 'Tons altos e baixos e consoantes glotalizadas.'],
    examples: [['Yáʼátʼééh!', 'Olá!']],
  },
  {
    id: 'nv-novo-mexico',
    name: 'Novo México (Shiprock)',
    kind: 'sotaque',
    region: 'O lado do Novo México (Shiprock, Crownpoint)',
    country: 'USA',
    subdivisions: ['US-NM'],
    emoji: '🪨',
    summary: 'O navajo do Novo México, de Shiprock, com palavras próprias, onde muita gente ainda aprende a língua em casa.',
    features: ['Palavras próprias do leste da Nação Navajo.', 'Os “code talkers” navajos usaram a língua como código na Segunda Guerra.'],
    examples: [['Yáʼátʼééh!', 'Olá!']],
  },
  {
    id: 'nv-utah',
    name: 'Utah (Monument Valley)',
    kind: 'sotaque',
    region: 'O lado de Utah, perto de Monument Valley',
    country: 'USA',
    subdivisions: ['US-UT'],
    emoji: '🏞️',
    summary: 'O navajo do sul de Utah, da região de Monument Valley.',
    features: ['Comunidades pequenas e isoladas.', 'Próximo do navajo do Arizona.'],
    examples: [['Yáʼátʼééh!', 'Olá!']],
  },
];
