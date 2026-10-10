import type { Accent } from '../types';

/**
 * Os sotaques do laosiano (10/10/2026). Fontes: Wikipédia em português, inglês e laosiano («Lao
 * language», «Lao dialects», consultadas em 10/10/2026).
 */
export const ACCENTS_LO: Accent[] = [
  {
    id: 'lo-vientiane',
    name: 'Vientiane (padrão)',
    kind: 'sotaque',
    region: 'Vientiane, a capital',
    country: 'LAO',
    subdivisions: ['LA-VT', 'LA-VI'],
    emoji: '🛕',
    summary: 'O laosiano de Vientiane, a base do padrão, com seis tons.',
    features: ['Seis tons.', 'A base do padrão da escola e do rádio.'],
    examples: [['ສະບາຍດີ', 'Olá!']],
  },
  {
    id: 'lo-luang-prabang',
    name: 'Luang Prabang (norte)',
    kind: 'sotaque',
    region: 'Luang Prabang, a antiga capital real, e o norte',
    country: 'LAO',
    subdivisions: ['LA-LP'],
    emoji: '👑',
    summary: 'O laosiano de Luang Prabang, a antiga capital real, patrimônio da UNESCO, com tons próprios e palavras da corte.',
    features: ['Tons diferentes dos de Vientiane.', 'Palavras e formas de cortesia da antiga corte.'],
    examples: [['ຫຼວງພະບາງ', 'Luang Prabang']],
  },
  {
    id: 'lo-champasak',
    name: 'Champasak (sul)',
    kind: 'sotaque',
    region: 'Champasak e o sul, junto ao Mekong',
    country: 'LAO',
    subdivisions: ['LA-CH'],
    emoji: '🌊',
    summary: 'O laosiano do sul, de Champasak e das Quatro Mil Ilhas do Mekong, com tons próprios e traços em comum com o isan da Tailândia.',
    features: ['Tons próprios do sul.', 'Próximo do isan falado do outro lado do Mekong.'],
    examples: [['ຈຳປາສັກ', 'Champasak']],
  },
];
