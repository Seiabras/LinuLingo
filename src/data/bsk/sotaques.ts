import type { Accent } from '../types';

/**
 * Os falares do burushaski (10/10/2026). Fontes: Wikipédia em português e em inglês («Burushaski»,
 * «Yasin Burushaski», consultadas em 10/10/2026). O burushaski é uma língua isolada, sem parentes
 * conhecidos.
 */
export const ACCENTS_BSK: Accent[] = [
  {
    id: 'bsk-hunza',
    name: 'Hunza',
    kind: 'sotaque',
    region: 'O vale de Hunza, em Gilgit-Baltistão',
    country: 'PAK',
    subdivisions: ['PK-GB'],
    emoji: '🏔️',
    summary: 'O burushaski do vale de Hunza, o mais documentado, aos pés dos picos do Karakoram.',
    features: ['O falar mais documentado.', 'Quatro classes de substantivos, como gêneros.'],
    examples: [['Bebila?', 'Tudo bem?']],
  },
  {
    id: 'bsk-nagar',
    name: 'Nagar',
    kind: 'sotaque',
    region: 'O vale de Nagar, do outro lado do rio de Hunza',
    country: 'PAK',
    subdivisions: ['PK-GB'],
    emoji: '🌄',
    summary: 'O burushaski de Nagar, vizinho do de Hunza e muito parecido com ele, com diferenças de vocabulário.',
    features: ['Muito próximo do falar de Hunza.', 'Diferenças de vocabulário e de formas verbais.'],
    examples: [['Nagar', 'Nagar']],
  },
  {
    id: 'bsk-yasin',
    name: 'Yasin (werchikwar)',
    kind: 'sotaque',
    region: 'O vale de Yasin, mais a oeste',
    country: 'PAK',
    subdivisions: ['PK-GB'],
    emoji: '🏞️',
    summary: 'O burushaski do vale de Yasin, o werchikwar, o mais diferente, com palavras do khowar vizinho.',
    features: ['O falar mais diferente do burushaski.', 'Palavras do khowar, a língua vizinha.'],
    examples: [['Yasin', 'Yasin']],
  },
];
