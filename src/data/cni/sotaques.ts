import type { Accent } from '../types';

/**
 * O asháninka nos dois países (10/10/2026). Fontes: Wikipédia em português e em espanhol («Língua
 * asháninka», «Idioma asháninka», consultadas em 10/10/2026). Um sotaque por país.
 */
export const ACCENTS_CNI: Accent[] = [
  {
    id: 'cni-peru',
    name: 'Peru (selva central)',
    kind: 'sotaque',
    region: 'A selva central do Peru: Junín, Pasco, Ucayali',
    country: 'PER',
    subdivisions: ['PE-JUN', 'PE-PAS', 'PE-UCA'],
    emoji: '🇵🇪',
    summary: 'O asháninka do Peru, onde vive quase todo o povo, um dos maiores povos indígenas da Amazônia peruana.',
    features: ['A maior parte dos falantes.', 'Palavras do espanhol.'],
    examples: [['Kitaiteri', 'bom dia']],
  },
  {
    id: 'cni-brasil',
    name: 'Brasil (rio Amônia)',
    kind: 'sotaque',
    region: 'O rio Amônia, em Marechal Thaumaturgo, no Acre',
    country: 'BRA',
    subdivisions: ['BR-AC'],
    emoji: '🇧🇷',
    summary: 'O asháninka do Brasil, da aldeia Apiwtxa, no rio Amônia, conhecida pelo reflorestamento e pela defesa do território.',
    features: ['Comunidade pequena e organizada, a da aldeia Apiwtxa.', 'Palavras do português.'],
    examples: [['Kitaiteri', 'bom dia']],
  },
];
