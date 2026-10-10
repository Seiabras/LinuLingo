import type { Accent } from '../types';

/**
 * Os falares do igbo (10/10/2026). Fontes: Wikipédia em português, inglês e igbo («Igbo language»,
 * «Igbo dialects», «Standard Igbo», consultadas em 10/10/2026). O igbo padrão (Igbo Izugbe) parte dos
 * falares de Owerri e Umuahia.
 */
export const ACCENTS_IG: Accent[] = [
  {
    id: 'ig-owerri',
    name: 'Owerri (centro)',
    kind: 'sotaque',
    region: 'Owerri e o estado de Imo',
    country: 'NGA',
    subdivisions: ['NG-IM', 'NG-AB'],
    emoji: '🏛️',
    summary: 'O igbo de Owerri e do centro, a base do igbo padrão (Igbo Izugbe).',
    features: ['A base do padrão.', 'Oito vogais, em dois grupos de harmonia vocálica.'],
    examples: [['Ndewo!', 'Olá!'], ['Kedụ?', 'Como vai?']],
  },
  {
    id: 'ig-onitsha',
    name: 'Onitsha',
    kind: 'sotaque',
    region: 'Onitsha e o estado de Anambra, à beira do rio Níger',
    country: 'NGA',
    subdivisions: ['NG-AN'],
    emoji: '🛶',
    summary: 'O igbo de Onitsha, a cidade do grande mercado do Níger, usado nos primeiros livros e na literatura do século XX.',
    features: ['Usado nos primeiros livros impressos em igbo.', 'Onitsha tem um dos maiores mercados da África Ocidental.'],
    examples: [['Ndewo!', 'Olá!']],
  },
  {
    id: 'ig-nsukka',
    name: 'Nsukka (norte)',
    kind: 'sotaque',
    region: 'Nsukka, no norte do estado de Enugu',
    country: 'NGA',
    subdivisions: ['NG-EN'],
    emoji: '🎓',
    summary: 'O igbo de Nsukka, no norte, cidade da Universidade da Nigéria, um dos falares mais diferentes do padrão.',
    features: ['Um dos falares mais diferentes do padrão.', 'Sede da Universidade da Nigéria, fundada em 1960.'],
    examples: [['Nsukka', 'Nsukka']],
  },
  {
    id: 'ig-enugu',
    name: 'Enugu',
    kind: 'sotaque',
    region: 'Enugu, a antiga cidade do carvão',
    country: 'NGA',
    subdivisions: ['NG-EN'],
    emoji: '⛏️',
    summary: 'O igbo de Enugu, a capital do estado, cidade das minas de carvão, com um falar urbano que mistura igbo e inglês.',
    features: ['Mistura de igbo e inglês na fala da cidade.', 'Formas próprias do igbo do norte.'],
    examples: [['Ndewo!', 'Olá!']],
  },
];
