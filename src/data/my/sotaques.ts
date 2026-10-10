import type { Accent } from '../types';

/**
 * O birmanês padrão e as línguas birmanesas regionais (10/10/2026). Fontes: Wikipédia em português,
 * inglês e birmanês («Burmese language», «Arakanese language», «Tavoyan dialects», «Intha language»,
 * consultadas em 10/10/2026).
 */
export const ACCENTS_MY: Accent[] = [
  {
    id: 'my-padrao',
    name: 'Yangon e Mandalay (padrão)',
    kind: 'sotaque',
    region: 'O vale do Irrawaddy: Yangon e Mandalay',
    country: 'MMR',
    subdivisions: ['MM-06', 'MM-04'],
    emoji: '🛕',
    summary: 'O birmanês do vale do Irrawaddy, a base do padrão, de Yangon e da antiga capital real, Mandalay.',
    features: ['O “ရ” (r) soa “y”: “Rangoon” vira “Yangon”.', 'Três tons e uma voz “rangida”.'],
    examples: [['မင်္ဂလာပါ', 'Olá!']],
  },
  {
    id: 'my-rakhine',
    name: 'Rakhine (arakanês)',
    kind: 'língua',
    region: 'O estado de Rakhine, na costa oeste',
    country: 'MMR',
    subdivisions: ['MM-16'],
    emoji: '🌊',
    summary: 'A fala de Rakhine, na costa oeste, que guarda o “r” que o padrão trocou por “y”: o nome “Rakhine” soa com “r”, e não “Yakhaing”.',
    features: ['Guarda o “r” antigo, onde o padrão diz “y”.', 'Vogais e palavras antigas do birmanês.'],
    examples: [['ရခိုင်', 'Rakhine', 'no padrão, “Yakhaing”']],
  },
  {
    id: 'my-tavoyano',
    name: 'Tavoyano (Dawei)',
    kind: 'língua',
    region: 'Dawei (Tavoy), no sul, em Tanintharyi',
    country: 'MMR',
    subdivisions: ['MM-05'],
    emoji: '🦐',
    summary: 'A fala de Dawei, no sul, que também guarda sons antigos do birmanês e tem palavras do mon e do tailandês.',
    features: ['Sons antigos que o padrão perdeu.', 'Palavras do mon e do tailandês.'],
    examples: [['ထားဝယ်', 'Dawei']],
  },
  {
    id: 'my-intha',
    name: 'Intha',
    kind: 'língua',
    region: 'O lago Inle, no estado Shan',
    country: 'MMR',
    subdivisions: ['MM-17'],
    emoji: '🚣',
    summary: 'A fala dos intha, o povo do lago Inle, famoso pelos pescadores que remam com uma perna, parente próxima do tavoyano.',
    features: ['Parente do tavoyano, do sul, segundo a tradição dos próprios intha.', 'Os pescadores remam em pé, com uma perna enrolada no remo.'],
    examples: [['အင်းလေး', 'lago Inle']],
  },
];
