import type { Accent } from '../types';

/**
 * Os sotaques do urdu (10/10/2026), no Paquistão e na Índia. Fontes: Wikipédia em português, inglês e
 * urdu («Urdu», «Lucknow», «Dakhini», «Hyderabadi Urdu», consultadas em 10/10/2026). A lista aprovou
 * Paquistão e Índia como dialetos e marcou o dakhini como dúvida; por enquanto, todos sotaques
 * (dúvidas em docs/duvidas-variedades.md).
 */
export const ACCENTS_UR: Accent[] = [
  {
    id: 'ur-karachi',
    name: 'Karachi',
    kind: 'sotaque',
    region: 'Karachi, no Sindh',
    country: 'PAK',
    subdivisions: ['PK-SD'],
    emoji: '🌊',
    summary: 'O urdu de Karachi, a maior cidade do Paquistão, onde os descendentes dos que vieram da Índia em 1947 (os muhajir) falam o urdu como língua materna.',
    features: ['Para muitos, o urdu é a língua de casa, e não a segunda língua.', 'Palavras do inglês e do guzerate, de uma cidade portuária e comercial.'],
    examples: [['کراچی', 'Karachi']],
  },
  {
    id: 'ur-lahore',
    name: 'Lahore',
    kind: 'sotaque',
    region: 'Lahore e o Punjab paquistanês',
    country: 'PAK',
    subdivisions: ['PK-PB'],
    emoji: '🕌',
    summary: 'O urdu do Punjab, de Lahore, falado com o sotaque e as palavras do panjabi, a língua de casa da maioria da província.',
    features: ['Sotaque e palavras do panjabi.', 'Muitos alternam entre o urdu e o panjabi na mesma conversa.'],
    examples: [['لاہور', 'Lahore']],
  },
  {
    id: 'ur-lucknow',
    name: 'Lucknow',
    kind: 'sotaque',
    region: 'Lucknow, em Uttar Pradesh, na Índia',
    country: 'IND',
    subdivisions: ['IN-UP'],
    emoji: '🎩',
    summary: 'O urdu de Lucknow, a antiga capital dos nababos de Awadh, famoso pela cortesia (a “tehzeeb”): os dois que dizem “pehle aap”, “primeiro você”, e ninguém passa pela porta.',
    features: ['Um urdu refinado e cheio de cortesia, a “tehzeeb” de Lucknow.', 'O cumprimento “ādāb”, com a mão na testa.'],
    examples: [['آداب', 'ādāb, o cumprimento cortês']],
  },
  {
    id: 'ur-delhi',
    name: 'Délhi (dehlavi)',
    kind: 'sotaque',
    region: 'A Velha Délhi, na Índia',
    country: 'IND',
    subdivisions: ['IN-DL'],
    emoji: '🏰',
    summary: 'O urdu da Velha Délhi, a língua da corte mogol e dos poetas Mir e Ghalib, berço do urdu literário.',
    features: ['A língua dos poetas Mir Taqi Mir e Mirza Ghalib.', 'Hoje convive com o híndi na mesma cidade.'],
    examples: [['دہلی', 'Délhi']],
  },
  {
    id: 'ur-dakhini',
    name: 'Dakhini (Hyderabad)',
    kind: 'sotaque',
    region: 'O Decão: Hyderabad e o sul da Índia',
    country: 'IND',
    subdivisions: ['IN-TS', 'IN-KA', 'IN-AP'],
    emoji: '🍛',
    summary: 'O urdu do Decão, de Hyderabad, levado ao sul pelos exércitos do sultanato de Délhi no século XIV, com palavras do télugo e do marati e uma literatura mais antiga que a de Délhi.',
    features: ['“Nakko” para “não”, “hau” para “sim”.', 'Palavras do télugo, do canarês e do marati.'],
    examples: [['نکو', 'não', 'no padrão, “نہیں”']],
  },
];
