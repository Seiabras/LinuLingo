import type { Accent } from '../types';

/**
 * O baniwa (curripaco) nos três países (10/10/2026). Fontes: Wikipédia em português e em espanhol («Língua
 * baniwa», «Idioma curripaco», consultadas em 10/10/2026). Um sotaque por país.
 */
export const ACCENTS_KPC: Accent[] = [
  {
    id: 'kpc-brasil',
    name: 'Brasil (rio Içana)',
    kind: 'sotaque',
    region: 'O rio Içana, no alto rio Negro',
    country: 'BRA',
    subdivisions: ['BR-AM'],
    emoji: '🇧🇷',
    summary: 'O baniwa do rio Içana, no Brasil, cooficial em São Gabriel da Cachoeira desde 2002.',
    features: ['Língua cooficial de São Gabriel da Cachoeira.', 'Da família aruak.'],
    examples: [['Baniwa', 'baniwa']],
  },
  {
    id: 'kpc-colombia',
    name: 'Colômbia (Guainía)',
    kind: 'sotaque',
    region: 'Os rios Guainía e Isana, na Colômbia',
    country: 'COL',
    subdivisions: ['CO-GUA'],
    emoji: '🇨🇴',
    summary: 'O curripaco da Colômbia, como o povo é chamado lá, com palavras do espanhol.',
    features: ['Chamado de “curripaco” na Colômbia.', 'Palavras do espanhol.'],
    examples: [['Kurripako', 'curripaco']],
  },
  {
    id: 'kpc-venezuela',
    name: 'Venezuela',
    kind: 'sotaque',
    region: 'O estado do Amazonas venezuelano',
    country: 'VEN',
    subdivisions: ['VE-Z'],
    emoji: '🇻🇪',
    summary: 'O curripaco da Venezuela, nas comunidades do Amazonas venezuelano.',
    features: ['Palavras do espanhol.', 'Comunidades pequenas, perto da fronteira.'],
    examples: [['Kurripako', 'curripaco']],
  },
];
