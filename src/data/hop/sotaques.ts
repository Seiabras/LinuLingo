import type { Accent } from '../types';

/**
 * Os falares do hopi, por mesa (10/10/2026). Fontes: Wikipédia em português e em inglês («Hopi language»,
 * «Oraibi», consultadas em 10/10/2026), e o Hopi Dictionary (1998), que segue o falar da Terceira Mesa.
 */
export const ACCENTS_HOP: Accent[] = [
  {
    id: 'hop-primeira',
    name: 'Primeira Mesa (Walpi)',
    kind: 'sotaque',
    region: 'Walpi, Sichomovi e Polacca, na Primeira Mesa',
    country: 'USA',
    subdivisions: ['US-AZ'],
    emoji: '🏘️',
    summary: 'O hopi da Primeira Mesa, de Walpi, a vila sobre o rochedo, com formas próprias.',
    features: ['Formas e palavras próprias.', 'Walpi fica na ponta de uma mesa estreita, desde o século XVII.'],
    examples: [['Walpi', 'Walpi']],
  },
  {
    id: 'hop-segunda',
    name: 'Segunda Mesa (Shungopavi)',
    kind: 'sotaque',
    region: 'Shungopavi, Mishongnovi e Shipaulovi',
    country: 'USA',
    subdivisions: ['US-AZ'],
    emoji: '🌽',
    summary: 'O hopi da Segunda Mesa, de Shungopavi, com vogais e palavras próprias.',
    features: ['Vogais e palavras próprias.', 'Shungopavi é uma das vilas mais antigas dos hopis.'],
    examples: [['Taawa', 'sol']],
  },
  {
    id: 'hop-terceira',
    name: 'Terceira Mesa (Oraibi)',
    kind: 'sotaque',
    region: 'Oraibi, Hotevilla e Bacavi',
    country: 'USA',
    subdivisions: ['US-AZ'],
    emoji: '☀️',
    summary: 'O hopi da Terceira Mesa, de Oraibi, uma das povoações habitadas há mais tempo nos Estados Unidos (desde cerca de 1100), base do dicionário hopi.',
    features: ['A base do Hopi Dictionary (1998).', 'Oraibi é habitada desde cerca do ano 1100.'],
    examples: [['Orayvi', 'Oraibi']],
  },
];
