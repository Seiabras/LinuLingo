import type { Accent } from '../types';

/**
 * O mbyá-guarani nos três países (10/10/2026). Fontes: Wikipédia em português e em espanhol («Língua
 * mbyá-guarani», «Idioma mbyá guaraní», consultadas em 10/10/2026). Um sotaque por país.
 */
export const ACCENTS_GUN: Accent[] = [
  {
    id: 'gun-brasil',
    name: 'Brasil',
    kind: 'sotaque',
    region: 'Aldeias do Rio Grande do Sul ao Espírito Santo, sobretudo no litoral',
    country: 'BRA',
    subdivisions: ['BR-RS', 'BR-SC', 'BR-PR', 'BR-SP', 'BR-RJ'],
    emoji: '🇧🇷',
    summary: 'O mbyá do Brasil, das aldeias do sul e do sudeste, muitas no litoral e perto das cidades, com palavras do português.',
    features: ['Palavras do português.', 'Aldeias também perto de São Paulo e de Porto Alegre.'],
    examples: [['Haʼevete!', 'Obrigado!']],
  },
  {
    id: 'gun-paraguai',
    name: 'Paraguai',
    kind: 'sotaque',
    region: 'O leste do Paraguai (Caaguazú, Itapúa)',
    country: 'PRY',
    subdivisions: ['PY-5', 'PY-7'],
    emoji: '🇵🇾',
    summary: 'O mbyá do Paraguai, onde vive boa parte do povo, ao lado do guarani paraguaio.',
    features: ['Convive com o guarani paraguaio.', 'Palavras do espanhol.'],
    examples: [['Haʼevete!', 'Obrigado!']],
  },
  {
    id: 'gun-argentina',
    name: 'Argentina (Misiones)',
    kind: 'sotaque',
    region: 'A província de Misiones',
    country: 'ARG',
    subdivisions: ['AR-N'],
    emoji: '🇦🇷',
    summary: 'O mbyá da Argentina, das aldeias da mata de Misiones, com palavras do espanhol.',
    features: ['Palavras do espanhol.', 'Aldeias na mata de Misiones.'],
    examples: [['Haʼevete!', 'Obrigado!']],
  },
];
