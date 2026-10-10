import type { Accent } from '../types';

/**
 * Os falares do khmer (10/10/2026). Fontes: Wikipédia em português, inglês e khmer («Khmer dialects»,
 * «Khmer Krom», «Northern Khmer language», consultadas em 10/10/2026).
 */
export const ACCENTS_KM: Accent[] = [
  {
    id: 'km-phnom-penh',
    name: 'Phnom Penh',
    kind: 'sotaque',
    region: 'Phnom Penh, a capital',
    country: 'KHM',
    subdivisions: ['KH-12'],
    emoji: '🏙️',
    summary: 'O khmer de Phnom Penh, a referência da TV, onde o “r” dos grupos de consoantes cai na fala e deixa um tom no lugar.',
    features: ['O “r” cai nos grupos de consoantes e deixa uma entonação no lugar.', 'Vogais encurtadas na fala rápida.'],
    examples: [['សួស្តី', 'Olá!']],
  },
  {
    id: 'km-battambang',
    name: 'Battambang (oeste)',
    kind: 'sotaque',
    region: 'Battambang e o noroeste',
    country: 'KHM',
    subdivisions: ['KH-2'],
    emoji: '🍚',
    summary: 'O khmer de Battambang, o celeiro de arroz do país, com uma melodia própria e palavras do tailandês vizinho.',
    features: ['Melodia própria, reconhecível no resto do país.', 'Palavras do tailandês, da vizinhança e do tempo em que a região foi siamesa.'],
    examples: [['បាត់ដំបង', 'Battambang']],
  },
  {
    id: 'km-krom',
    name: 'Khmer krom (Vietnã)',
    kind: 'sotaque',
    region: 'O delta do Mekong, no sul do Vietnã (Sóc Trăng, Trà Vinh)',
    country: 'VNM',
    subdivisions: ['VN-52', 'VN-51', 'VN-44'],
    emoji: '🛶',
    summary: 'O khmer dos khmers krom, que vivem no delta do Mekong, no Vietnã, com palavras do vietnamita.',
    features: ['Palavras do vietnamita.', 'Guarda formas que o khmer do Camboja perdeu.'],
    examples: [['ខ្មែរក្រោម', 'khmer krom, o khmer “de baixo”']],
  },
  {
    id: 'km-norte',
    name: 'Khmer do norte (Tailândia)',
    kind: 'língua',
    region: 'Surin, Buriram e Sisaket, no nordeste da Tailândia',
    country: 'THA',
    subdivisions: ['TH-32'],
    emoji: '🐘',
    summary: 'O khmer falado há séculos no nordeste da Tailândia, separado do khmer do Camboja, com muitas palavras do tailandês e do laosiano e escrito, quando é escrito, em alfabeto tailandês.',
    features: ['Guarda o “r” que Phnom Penh perdeu.', 'Escrito em alfabeto tailandês, quando é escrito.'],
    examples: [['ខ្មែរ', 'khmer']],
  },
];
