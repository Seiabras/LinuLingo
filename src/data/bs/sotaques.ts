import type { Accent } from '../types';

/**
 * Os falares do bósnio (10/10/2026). Fontes: Wikipédia em bósnio e em português («Bosanski jezik»,
 * «Istočnohercegovački dijalekt», «Ikavski», consultadas em 10/10/2026). O bósnio padrão é
 * ijekavski e guarda o “h” onde o sérvio e o croata o perdem: “kahva” (café).
 */
export const ACCENTS_BS: Accent[] = [
  {
    id: 'bs-sarajevo',
    name: 'Sarajevo',
    kind: 'sotaque',
    region: 'Sarajevo e o centro da Bósnia',
    country: 'BIH',
    subdivisions: ['BA-BIH'],
    emoji: '☕',
    summary: 'O bósnio de Sarajevo, com muitas palavras do turco, do tempo otomano, e a partícula “ba”, marca da fala da cidade.',
    features: ['Muitas palavras do turco: “sevdah” (saudade, amor), “merak” (prazer).', 'A partícula “ba” no fim das frases: “Ma hajde, ba!”.'],
    examples: [['kahva', 'café', 'em sérvio, “kafa”; em croata, “kava”']],
  },
  {
    id: 'bs-hercegovina',
    name: 'Herzegovina (Mostar)',
    kind: 'sotaque',
    region: 'A Herzegovina: Mostar, Trebinje',
    country: 'BIH',
    subdivisions: ['BA-BIH', 'BA-SRP'],
    emoji: '🌉',
    summary: 'A fala da Herzegovina oriental, cujo sistema de acentos (com tons) é a base do padrão do bósnio, do croata, do sérvio e do montenegrino.',
    features: ['Quatro acentos com tom e duração, a base do padrão.', 'A forma ijekavska: “lijepo” (bonito), “mlijeko” (leite).'],
    examples: [['mlijeko', 'leite']],
  },
  {
    id: 'bs-krajina',
    name: 'Krajina (noroeste)',
    kind: 'sotaque',
    region: 'A Bosanska Krajina: Bihać, Banja Luka, Cazin',
    country: 'BIH',
    subdivisions: ['BA-BIH', 'BA-SRP'],
    emoji: '🏞️',
    summary: 'O bósnio do noroeste, da Krajina, com uma melodia própria e, em parte da região, a forma ikavska: “lipo” em vez de “lijepo”.',
    features: ['Em parte da região, a forma ikavska: “lipo”, “mliko”.', 'Uma melodia de fala reconhecível no resto do país.'],
    examples: [['lipo', 'bonito', 'no padrão, “lijepo”']],
  },
];
