import type { Accent } from '../types';

/**
 * As comunidades do apache ocidental (10/10/2026). Fontes: Wikipédia em português e em inglês («Western
 * Apache language», consultada em 10/10/2026), que segue a divisão de Goodwin (1942) em grupos.
 */
export const ACCENTS_APW: Accent[] = [
  {
    id: 'apw-san-carlos',
    name: 'San Carlos',
    kind: 'sotaque',
    region: 'A Reserva Apache de San Carlos, no Arizona',
    country: 'USA',
    subdivisions: ['US-AZ'],
    emoji: '🏜️',
    summary: 'O apache ocidental de San Carlos, a maior comunidade de falantes, com escolas que ensinam a língua.',
    features: ['Uma das comunidades com mais falantes.', 'Tons altos e baixos, como no navajo.'],
    examples: [['Dagotʼee!', 'Olá!']],
  },
  {
    id: 'apw-white-mountain',
    name: 'White Mountain',
    kind: 'sotaque',
    region: 'A Reserva de Fort Apache (Whiteriver), no Arizona',
    country: 'USA',
    subdivisions: ['US-AZ'],
    emoji: '🌲',
    summary: 'O apache ocidental de White Mountain, nas montanhas do leste do Arizona.',
    features: ['Formas e palavras próprias de White Mountain.', 'Muito próximo do falar de Cibecue.'],
    examples: [['Dagotʼee!', 'Olá!']],
  },
  {
    id: 'apw-cibecue',
    name: 'Cibecue',
    kind: 'sotaque',
    region: 'Cibecue, no oeste da Reserva de Fort Apache',
    country: 'USA',
    subdivisions: ['US-AZ'],
    emoji: '🏞️',
    summary: 'O apache ocidental de Cibecue, uma comunidade pequena e conservadora, estudada pelo antropólogo Keith Basso.',
    features: ['Uma comunidade conservadora, onde a língua continua forte.', 'As histórias ligadas aos nomes de lugares, estudadas por Keith Basso.'],
    examples: [['Dagotʼee!', 'Olá!']],
  },
  {
    id: 'apw-tonto',
    name: 'Tonto',
    kind: 'sotaque',
    region: 'As comunidades tonto de Camp Verde e Payson',
    country: 'USA',
    subdivisions: ['US-AZ'],
    emoji: '⛰️',
    summary: 'O apache ocidental tonto, do norte e do oeste, hoje com poucos falantes.',
    features: ['Poucos falantes, a maioria idosa.', 'Formas próprias dos grupos do norte.'],
    examples: [['Dagotʼee!', 'Olá!']],
  },
];
