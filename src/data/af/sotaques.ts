import type { Accent } from '../types';

/**
 * Os sotaques do africâner (decisão do dono, 10/10/2026). A Namíbia ficou como sotaque, e não como
 * dialeto completo, por falta de diferenças documentadas (dúvida guardada em
 * docs/duvidas-variedades.md). Os três grandes grupos históricos (Cabo, rio Orange e fronteira oriental)
 * e o africâner da Patagônia, na Argentina, são sotaques.
 *
 * Fontes: Wikipédia em inglês e em africâner («Afrikaans dialects», «Kaapse Afrikaans», «Oranjerivier-
 * Afrikaans», «Patagonian Afrikaans», «Arabic Afrikaans», consultadas em 10/10/2026); o «Woordeboek van
 * Kaaps» (2021).
 */
export const ACCENTS_AF: Accent[] = [
  {
    id: 'af-oosgrens',
    name: 'Fronteira oriental (Oosgrens)',
    kind: 'sotaque',
    region: 'O Cabo Oriental e o interior da África do Sul',
    country: 'ZAF',
    subdivisions: ['ZA-EC', 'ZA-FS', 'ZA-GP'],
    emoji: '🌾',
    summary: 'O africâner do leste, nascido do contato dos colonos com o xhosa na fronteira oriental do Cabo. É a base do africâner-padrão, o da escola e dos jornais.',
    features: [
      'É a base da norma escrita do africâner.',
      'Recebeu palavras do xhosa e do inglês, pela vizinhança.',
    ],
    examples: [['Goeie môre! Hoe gaan dit?', 'Bom dia! Como vai?']],
  },
  {
    id: 'af-kaaps',
    name: 'Kaaps (Cidade do Cabo)',
    kind: 'sotaque',
    region: 'A Cidade do Cabo e o Cabo Ocidental, sobretudo nas comunidades “coloured”',
    country: 'ZAF',
    subdivisions: ['ZA-WC'],
    emoji: '🏔️',
    summary: 'O africâner da Cidade do Cabo, falado sobretudo pelas comunidades “coloured”, com muito inglês e palavras do malaio e do português trazidas pelos escravizados do século XVII. Ganhou dicionário próprio em 2021.',
    features: [
      'Os primeiros textos escritos em africâner, no século XIX, foram feitos em letras árabes pelos muçulmanos do Cabo (o “africâner árabe”).',
      'Troca constante com o inglês no meio da frase.',
      'Palavras próprias: “aweh” (e aí), “laaitie” (garoto), “jol” (festa).',
      'O “Woordeboek van Kaaps”, de 2021, registrou o Kaaps como variedade com vocabulário próprio.',
    ],
    examples: [['Aweh, my bru! Kom ons gaan jol!', 'E aí, irmão! Vamos para a festa!']],
    words: [
      ['aweh', 'e aí, oi'],
      ['laaitie', 'garoto'],
    ],
  },
  {
    id: 'af-oranjerivier',
    name: 'Rio Orange (Oranjerivier)',
    kind: 'sotaque',
    region: 'O Cabo Setentrional, a Namaqualândia e as margens do rio Orange',
    country: 'ZAF',
    subdivisions: ['ZA-NC'],
    emoji: '🏜️',
    summary: 'O africâner do noroeste, do rio Orange e da Namaqualândia, falado também pelos griquas e pelos nama, com influência das línguas khoekhoe.',
    features: [
      'Inclui o falar da Namaqualândia e o dos griquas.',
      'Recebeu palavras das línguas khoekhoe, as línguas dos cliques.',
    ],
    examples: [['Hoe gaan dit met jou?', 'Como vai você?']],
  },
  {
    id: 'af-namibia',
    name: 'Africâner da Namíbia',
    kind: 'sotaque',
    region: 'A Namíbia',
    country: 'NAM',
    emoji: '🇳🇦',
    summary: 'O africâner da Namíbia, que o governo sul-africano favoreceu até a independência, em 1990. Hoje o inglês é a única língua oficial, mas o africâner continua sendo a língua de contato de boa parte do país.',
    features: [
      'Foi língua oficial da Namíbia até a independência, em 1990.',
      'Continua sendo a língua franca entre muitos povos do país, ao lado do inglês.',
    ],
    examples: [['Baie dankie!', 'Muito obrigado!']],
  },
  {
    id: 'af-patagonia',
    name: 'Africâner da Patagônia',
    kind: 'sotaque',
    region: 'Sarmiento e a província de Chubut, na Patagônia argentina',
    country: 'ARG',
    emoji: '🐑',
    summary: 'O africâner dos descendentes dos bôeres que se mudaram para a Patagônia argentina no começo do século XX: cerca de 650 pessoas da comunidade, com uma variedade própria, cheia de espanhol.',
    features: [
      'Os bôeres chegaram a Chubut depois da Guerra Anglo-Bôer (1899–1902).',
      'A variedade guarda formas antigas e tomou muitas palavras do espanhol.',
    ],
    examples: [['Goeie dag!', 'Bom dia!']],
  },
];
