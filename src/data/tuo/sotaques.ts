import type { Accent } from '../types';

/**
 * O tukano nos dois países (10/10/2026). Fontes: Wikipédia em português e em espanhol («Língua tucana»,
 * «Idioma tucano», consultadas em 10/10/2026). Um sotaque por país.
 */
export const ACCENTS_TUO: Accent[] = [
  {
    id: 'tuo-brasil',
    name: 'Brasil (rio Uaupés)',
    kind: 'sotaque',
    region: 'O rio Uaupés e São Gabriel da Cachoeira',
    country: 'BRA',
    subdivisions: ['BR-AM'],
    emoji: '🇧🇷',
    summary: 'O tukano do Brasil, língua comum de vários povos do rio Uaupés e cooficial em São Gabriel da Cachoeira desde 2002.',
    features: ['A língua comum entre os povos do Uaupés.', 'Cooficial de São Gabriel da Cachoeira.'],
    examples: [['Anuáto!', 'Olá!']],
  },
  {
    id: 'tuo-colombia',
    name: 'Colômbia (Vaupés)',
    kind: 'sotaque',
    region: 'O departamento de Vaupés, na Colômbia (Mitú)',
    country: 'COL',
    subdivisions: ['CO-VAU'],
    emoji: '🇨🇴',
    summary: 'O tukano da Colômbia, do Vaupés, com palavras do espanhol.',
    features: ['Palavras do espanhol.', 'Falado em Mitú e nas comunidades do Vaupés.'],
    examples: [['Anuáto!', 'Olá!']],
  },
];
