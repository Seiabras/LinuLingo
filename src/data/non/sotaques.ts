import type { Accent } from '../types';

/**
 * Os dialetos do nórdico antigo (10/10/2026). Fontes: Wikipédia em português e em inglês («Old Norse», «Old
 * East Norse», «Old Gutnish», consultadas em 10/10/2026). O curso segue o nórdico ocidental, o das sagas.
 */
export const ACCENTS_NON: Accent[] = [
  {
    id: 'non-ocidental',
    name: 'Nórdico ocidental (Noruega e Islândia)',
    kind: 'sotaque',
    region: 'A Noruega, a Islândia e as ilhas do Atlântico',
    country: 'ISL',
    emoji: '📜',
    summary: 'O nórdico antigo da Noruega e da Islândia, a língua das sagas e das Eddas, que guarda os ditongos antigos: “steinn” (pedra).',
    features: ['Guarda os ditongos “ei”, “au” e “ey”: “steinn” (pedra), “hlaupa” (correr).', 'A base do islandês e do feroês de hoje.'],
    examples: [['steinn', 'pedra']],
  },
  {
    id: 'non-oriental',
    name: 'Nórdico oriental (Dinamarca e Suécia)',
    kind: 'sotaque',
    region: 'A Dinamarca e a Suécia',
    country: 'SWE',
    emoji: '🪨',
    summary: 'O nórdico antigo da Dinamarca e da Suécia, das pedras rúnicas, que transformou os ditongos em vogais simples: “sten”, onde o ocidental diz “steinn”.',
    features: ['Os ditongos viram vogais simples: “sten” (pedra), “løpa” (correr).', 'A base do dinamarquês e do sueco de hoje.'],
    examples: [['sten', 'pedra', 'no nórdico ocidental, “steinn”']],
  },
  {
    id: 'non-gutnico',
    name: 'Gútnico antigo (Gotland)',
    kind: 'sotaque',
    region: 'A ilha de Gotland, no mar Báltico',
    country: 'SWE',
    subdivisions: ['SE-I'],
    emoji: '🏝️',
    summary: 'O nórdico antigo da ilha de Gotland, o da “Gutasaga”, que guardou ditongos que o resto da Escandinávia perdeu: “stain” (pedra).',
    features: ['Guarda o ditongo “ai”: “stain” (pedra).', 'A língua da “Gutasaga” e da lei de Gotland (Guta lag).'],
    examples: [['stain', 'pedra']],
  },
];
