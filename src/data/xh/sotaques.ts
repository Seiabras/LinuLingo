import type { Accent } from '../types';

/**
 * Os falares do xhosa (10/10/2026). Fontes: Wikipédia em português e em inglês («Xhosa language»,
 * «Xhosa dialects», consultadas em 10/10/2026). O padrão segue o falar gcaleka e ngqika.
 */
export const ACCENTS_XH: Accent[] = [
  {
    id: 'xh-gcaleka',
    name: 'Gcaleka',
    kind: 'sotaque',
    region: 'O sul do Cabo Oriental (Butterworth, Willowvale)',
    country: 'ZAF',
    subdivisions: ['ZA-EC'],
    emoji: '👑',
    summary: 'O xhosa gcaleka, da casa real xhosa, uma das bases do padrão.',
    features: ['Uma das bases do padrão.', 'Os cliques “c”, “q” e “x”.'],
    examples: [['Molo!', 'Olá!']],
  },
  {
    id: 'xh-ngqika',
    name: 'Ngqika',
    kind: 'sotaque',
    region: 'O oeste do Cabo Oriental (King William’s Town, Alice)',
    country: 'ZAF',
    subdivisions: ['ZA-EC'],
    emoji: '📚',
    summary: 'O xhosa ngqika, da região dos primeiros missionários e da Universidade de Fort Hare, a outra base do padrão escrito.',
    features: ['A outra base do padrão escrito.', 'A região de Fort Hare, onde estudou Nelson Mandela.'],
    examples: [['Molo!', 'Olá!']],
  },
  {
    id: 'xh-thembu',
    name: 'Thembu',
    kind: 'sotaque',
    region: 'Mthatha e o nordeste do Cabo Oriental',
    country: 'ZAF',
    subdivisions: ['ZA-EC'],
    emoji: '🌄',
    summary: 'O xhosa thembu, de Mthatha, o povo de Nelson Mandela, com palavras próprias.',
    features: ['Palavras próprias dos thembu.', 'Nelson Mandela nasceu em Mvezo, terra thembu.'],
    examples: [['Molo!', 'Olá!']],
  },
  {
    id: 'xh-mpondo',
    name: 'Mpondo',
    kind: 'sotaque',
    region: 'O Pondoland, na costa nordeste do Cabo Oriental',
    country: 'ZAF',
    subdivisions: ['ZA-EC'],
    emoji: '🌊',
    summary: 'O falar dos mpondo, na Costa Selvagem, com traços de transição para o zulu.',
    features: ['Traços de transição para o zulu.', 'Palavras e formas próprias, que o padrão não usa.'],
    examples: [['Molo!', 'Olá!']],
  },
];
