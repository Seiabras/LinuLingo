import type { Accent } from '../types';

/**
 * O ñandeva (ava-guarani) nos dois países (10/10/2026). Fontes: Wikipédia em português e em espanhol
 * («Língua nhandeva», «Ava guaraní», consultadas em 10/10/2026). Um sotaque por país.
 */
export const ACCENTS_NHD: Accent[] = [
  {
    id: 'nhd-brasil',
    name: 'Brasil',
    kind: 'sotaque',
    region: 'Mato Grosso do Sul, Paraná e São Paulo',
    country: 'BRA',
    subdivisions: ['BR-MS', 'BR-PR', 'BR-SP'],
    emoji: '🇧🇷',
    summary: 'O ñandeva do Brasil, com palavras do português.',
    features: ['Palavras do português.', 'Aldeias em três estados.'],
    examples: [['Ñandeva', 'nós, o nosso povo']],
  },
  {
    id: 'nhd-paraguai',
    name: 'Paraguai (ava guaraní)',
    kind: 'sotaque',
    region: 'Canindeyú e Alto Paraná, no Paraguai',
    country: 'PRY',
    subdivisions: ['PY-14', 'PY-10'],
    emoji: '🇵🇾',
    summary: 'O ava guaraní do Paraguai, como o povo é chamado lá, com palavras do espanhol.',
    features: ['Chamado de ava guaraní no Paraguai.', 'Palavras do espanhol.'],
    examples: [['Ñandeva', 'nós, o nosso povo']],
  },
];
