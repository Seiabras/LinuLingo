import type { Accent } from '../types';

/**
 * Os sotaques do bengali e as línguas vizinhas (decisão do dono, 10/10/2026). Os dialetos completos
 * são Bangladesh e a Índia (variantes.ts); aqui ficam os falares regionais, Calcutá no mapa
 * (sameAsVariant) e o sylheti e o chittagoniano, que os linguistas tratam como línguas à parte.
 *
 * Fontes: Wikipédia em inglês («Bengali dialects», «Dhakaiya Kutti», «Barisali dialect», «Sylheti
 * language», «Chittagonian language», consultadas em 10/10/2026).
 */
export const ACCENTS_BN: Accent[] = [
  {
    id: 'bn-daca',
    name: 'Daca (Dhakaiya)',
    kind: 'sotaque',
    variant: 'bn-BD',
    region: 'A cidade velha de Daca',
    country: 'BGD',
    subdivisions: ['BD-C'],
    emoji: '🛺',
    summary: 'O falar da velha Daca, o “Dhakaiya”, com humor afiado e muitas palavras do urdu e do persa, herança dos tempos mogóis.',
    features: [
      'Palavras do urdu e do persa, da época em que Daca foi capital mogol.',
      'O humor dos “kutti”, os antigos moradores da cidade velha, é famoso em todo o país.',
      'Os riquixás coloridos são o símbolo da cidade.',
    ],
    examples: [['আসসালামু আলাইকুম!', 'Olá!', 'o cumprimento de todo dia']],
  },
  {
    id: 'bn-barisal',
    name: 'Barisal',
    kind: 'sotaque',
    variant: 'bn-BD',
    region: 'Barisal, no sul de Bangladesh',
    country: 'BGD',
    subdivisions: ['BD-A'],
    emoji: '🛶',
    summary: 'O falar de Barisal, terra de rios e canais no sul do país, um dos sotaques mais reconhecíveis de Bangladesh e alvo de brincadeiras carinhosas na TV.',
    features: [
      'Os sons aspirados e o “চ” mudam bastante em relação ao padrão.',
      'O vocabulário próprio e a melodia são marca registrada da região.',
    ],
    examples: [['কেমন আছেন?', 'Como vai?', 'com a melodia de Barisal']],
  },
  {
    id: 'bn-calcuta',
    name: 'Calcutá',
    kind: 'sotaque',
    variant: 'bn-IN',
    sameAsVariant: 'bn-IN',
    region: 'Calcutá e Bengala Ocidental',
    country: 'IND',
    subdivisions: ['IN-WB'],
    emoji: '🪔',
    summary: 'O bengali de Calcutá, base da língua escrita, com জল, স্নান e নমস্কার.',
    features: ['É a base da língua escrita padrão.', 'Palavras de origem sânscrita no lugar das árabes e persas.'],
    examples: [['নমস্কার!', 'Olá!']],
  },
  {
    id: 'bn-sylheti',
    name: 'Sylheti (ছিলটি)',
    kind: 'língua',
    variant: 'bn-BD',
    region: 'Sylhet, no nordeste de Bangladesh, Assam (Índia) e a diáspora no Reino Unido',
    country: 'BGD',
    subdivisions: ['BD-G'],
    emoji: '🍵',
    summary: 'A língua de Sylhet, terra das plantações de chá, falada por cerca de 11 milhões de pessoas. Muitos bengalis do Reino Unido vêm de Sylhet, e o sylheti é a língua de casa de boa parte deles.',
    features: ['Tem escrita própria histórica, o Sylheti Nagri.', 'Para quem fala o bengali padrão, é difícil de entender.'],
    examples: [['ছিলটি', 'sylheti', 'o nome da língua']],
  },
  {
    id: 'bn-chittagoniano',
    name: 'Chittagoniano (চাটগাঁইয়া)',
    kind: 'língua',
    variant: 'bn-BD',
    region: 'Chittagong, no sudeste de Bangladesh',
    country: 'BGD',
    subdivisions: ['BD-B'],
    emoji: '⚓',
    summary: 'A língua de Chittagong, a grande cidade portuária de Bangladesh, falada por cerca de 13 milhões de pessoas e pouco compreensível para quem fala o bengali padrão.',
    features: ['É parente próxima do bengali, mas com gramática e pronúncia próprias.', 'Chittagong é o maior porto do país.'],
    examples: [['চাটগাঁইয়া', 'chittagoniano', 'o nome da língua']],
  },
];
