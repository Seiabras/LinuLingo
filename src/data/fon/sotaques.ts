import type { Accent } from '../types';

/**
 * Os falares do fon e as outras línguas gbe do Benim (10/10/2026). Fontes: Wikipédia em português,
 * inglês e francês («Fon language», «Gbe languages», «Gun language», consultadas em 10/10/2026).
 */
export const ACCENTS_FON: Accent[] = [
  {
    id: 'fon-abome',
    name: 'Abomé',
    kind: 'sotaque',
    region: 'Abomé, a antiga capital do reino do Daomé, e o planalto',
    country: 'BEN',
    subdivisions: ['BJ-ZO'],
    emoji: '👑',
    summary: 'O fon de Abomé, a antiga capital dos reis do Daomé, considerado o fon de referência.',
    features: ['O fon de referência, da antiga corte.', 'Os palácios reais de Abomé são patrimônio da UNESCO.'],
    examples: [['Kwabɔ!', 'Bem-vindo!']],
  },
  {
    id: 'fon-cotonou',
    name: 'Cotonou',
    kind: 'sotaque',
    region: 'Cotonou e a costa',
    country: 'BEN',
    subdivisions: ['BJ-LI', 'BJ-AQ'],
    emoji: '🏙️',
    summary: 'O fon de Cotonou, a maior cidade do Benim, a língua comum da cidade, com muitas palavras do francês.',
    features: ['Muitas palavras do francês.', 'A língua comum dos mercados da cidade, como o Dantokpa.'],
    examples: [['Kwabɔ!', 'Bem-vindo!']],
  },
  {
    id: 'fon-gun',
    name: 'Gun (Porto-Novo)',
    kind: 'língua',
    region: 'Porto-Novo, a capital oficial do Benim, e Badagry, na Nigéria',
    country: 'BEN',
    subdivisions: ['BJ-OU'],
    emoji: '🌿',
    summary: 'A língua de Porto-Novo, irmã do fon na família gbe, com palavras do iorubá e do português.',
    features: ['Irmã do fon e do eʋe, na família gbe.', 'Palavras do iorubá e do português.'],
    examples: [['Gun', 'gun']],
  },
];
