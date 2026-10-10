import type { Accent } from '../types';

/**
 * As formas do havaiano (10/10/2026). Fontes: Wikipédia em português, inglês e havaiano («Hawaiian
 * language», «Niʻihau», consultadas em 10/10/2026).
 */
export const ACCENTS_HAW: Accent[] = [
  {
    id: 'haw-padrao',
    name: 'Padrão (escolas de imersão)',
    kind: 'sotaque',
    region: 'As ilhas do Havaí',
    country: 'USA',
    subdivisions: ['US-HI'],
    emoji: '🌺',
    summary: 'O havaiano das escolas de imersão (Pūnana Leo, desde 1984) e da universidade, que trouxeram a língua de volta.',
    features: ['O “ʻokina” (ʻ) é uma parada na garganta e muda o sentido.', 'O “w” soa “v” ou “w”, conforme a palavra e o falante.'],
    examples: [['Aloha!', 'Olá!']],
  },
  {
    id: 'haw-niihau',
    name: 'Niʻihau',
    kind: 'sotaque',
    region: 'A ilha de Niʻihau, a única onde o havaiano nunca deixou de ser a língua de casa',
    country: 'USA',
    subdivisions: ['US-HI'],
    emoji: '🐚',
    summary: 'O havaiano de Niʻihau, ilha particular onde a língua passou de pais para filhos sem interrupção, com o “t” onde o padrão tem “k”.',
    features: ['O “t” onde o padrão tem “k”: “tātou” (nós), onde o padrão diz “kākou”.', 'A única comunidade em que o havaiano nunca deixou de ser a língua de casa.'],
    examples: [['tātou', 'nós (todos)', 'no padrão, “kākou”']],
  },
];
