import type { Accent } from '../types';

/**
 * Os sotaques do marati (10/10/2026) e o concani. Fontes: Wikipédia em português, inglês e marati
 * («Marathi language», «Varhadi dialect», «Malvani dialect», «Konkani language», consultadas em
 * 10/10/2026). O padrão segue a fala de Pune.
 */
export const ACCENTS_MR: Accent[] = [
  {
    id: 'mr-pune',
    name: 'Pune (padrão)',
    kind: 'sotaque',
    region: 'Pune e o oeste de Maharashtra',
    country: 'IND',
    subdivisions: ['IN-MH'],
    emoji: '🏛️',
    summary: 'O marati de Pune, a antiga capital dos peshwas, a base do marati padrão da escola e dos livros.',
    features: ['A base do padrão.', 'Pune é chamada de capital cultural de Maharashtra.'],
    examples: [['नमस्कार!', 'Olá!']],
  },
  {
    id: 'mr-varhadi',
    name: 'Varhadi (Vidarbha)',
    kind: 'sotaque',
    region: 'O Vidarbha, no leste de Maharashtra (Nagpur, Amravati)',
    country: 'IND',
    subdivisions: ['IN-MH'],
    emoji: '🍊',
    summary: 'O marati do Vidarbha, de Nagpur e Amravati, com palavras do híndi vizinho e uma fala própria.',
    features: ['Palavras do híndi, falado na região vizinha.', 'Nagpur, a cidade das laranjas, é o centro da região.'],
    examples: [['वऱ्हाडी', 'varhadi']],
  },
  {
    id: 'mr-malvani',
    name: 'Malvani (Konkan)',
    kind: 'sotaque',
    region: 'A costa do Konkan, no sul de Maharashtra (Sindhudurg)',
    country: 'IND',
    subdivisions: ['IN-MH'],
    emoji: '🐟',
    summary: 'O marati da costa sul, de Malvan, com muito do concani, a língua vizinha de Goa.',
    features: ['Muitos traços do concani.', 'O teatro popular “dashavatar” é tradição da região.'],
    examples: [['मालवणी', 'malvani']],
  },
  {
    id: 'mr-concani',
    name: 'Concani',
    kind: 'língua',
    region: 'Goa e a costa do Konkan',
    country: 'IND',
    subdivisions: ['IN-GA'],
    emoji: '⛪',
    summary: 'A língua oficial de Goa, parente do marati, escrita em devanágari, em alfabeto latino e em canarês, com muitas palavras do português.',
    features: ['Muitas palavras do português, do tempo de Goa portuguesa.', 'Escrita em três alfabetos: devanágari (oficial), latino e canarês.'],
    examples: [['कोंकणी', 'concani']],
  },
];
