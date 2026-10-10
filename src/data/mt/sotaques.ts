import type { Accent } from '../types';

/**
 * Os falares do maltês (10/10/2026). Fontes: Wikipédia em português, inglês e maltês («Maltese
 * language», «Djaletti Maltin», consultadas em 10/10/2026). O padrão segue a fala educada da região de
 * Valeta e do centro da ilha.
 */
export const ACCENTS_MT: Accent[] = [
  {
    id: 'mt-valeta',
    name: 'Valeta (padrão)',
    kind: 'sotaque',
    region: 'Valeta e a área do porto',
    country: 'MLT',
    subdivisions: ['MT-60', 'MT-56', 'MT-26'],
    emoji: '🏰',
    summary: 'O maltês da região de Valeta, a base do padrão, com muitas palavras do italiano, do siciliano e do inglês.',
    features: ['Base árabe, com muitas palavras do italiano e do inglês.', 'O “għ” não soa: só alonga a vogal.'],
    examples: [['Bonġu!', 'Bom dia!']],
  },
  {
    id: 'mt-gozo',
    name: 'Gozo (Għawdex)',
    kind: 'sotaque',
    region: 'A ilha de Gozo',
    country: 'MLT',
    subdivisions: ['MT-45', 'MT-37', 'MT-42'],
    emoji: '⛵',
    summary: 'O maltês de Gozo, a ilha menor, com vogais próprias que variam até de vila em vila.',
    features: ['Vogais próprias, diferentes das de Malta.', 'As vilas de Gozo têm falares diferentes entre si.'],
    examples: [['Għawdex', 'Gozo']],
  },
  {
    id: 'mt-zejtun',
    name: 'Żejtun (sul)',
    kind: 'sotaque',
    region: 'Żejtun e o sudeste de Malta',
    country: 'MLT',
    subdivisions: ['MT-67', 'MT-28'],
    emoji: '🫒',
    summary: 'O maltês de Żejtun, no sudeste, um dos falares mais conhecidos da ilha, com vogais próprias.',
    features: ['Vogais diferentes das do padrão.', 'O nome vem de “żejt”, azeite: a vila das oliveiras.'],
    examples: [['iż-Żejtun', 'Żejtun']],
  },
];
