import type { Accent } from '../types';

/**
 * O kaiowá (pãi-tavyterã) nos dois países (10/10/2026). Fontes: Wikipédia em português e em espanhol
 * («Língua kaiowá», «Pãi Tavyterã», consultadas em 10/10/2026). Um sotaque por país.
 */
export const ACCENTS_KGK: Accent[] = [
  {
    id: 'kgk-brasil',
    name: 'Brasil (Mato Grosso do Sul)',
    kind: 'sotaque',
    region: 'O sul de Mato Grosso do Sul (Dourados, Amambai)',
    country: 'BRA',
    subdivisions: ['BR-MS'],
    emoji: '🇧🇷',
    summary: 'O kaiowá do Brasil, de Dourados e Amambai, com palavras do português.',
    features: ['Palavras do português.', 'Um dos maiores povos indígenas do Brasil.'],
    examples: [['Aguyjevete!', 'Muito obrigado!']],
  },
  {
    id: 'kgk-paraguai',
    name: 'Paraguai (pãi-tavyterã)',
    kind: 'sotaque',
    region: 'Amambay e Concepción, no Paraguai',
    country: 'PRY',
    subdivisions: ['PY-13', 'PY-1'],
    emoji: '🇵🇾',
    summary: 'O pãi-tavyterã, como o povo é chamado no Paraguai, com palavras do espanhol e do guarani paraguaio.',
    features: ['Chamado de pãi-tavyterã no Paraguai.', 'Palavras do espanhol.'],
    examples: [['Aguyjevete!', 'Muito obrigado!']],
  },
];
