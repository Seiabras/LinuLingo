import type { Accent } from '../types';

/**
 * Os falares do aromeno (10/10/2026), nos países dos Bálcãs. Fontes: Wikipédia em português, inglês e
 * romeno («Aromanian language», «Farsherot», «Megleno-Romanian language», consultadas em 10/10/2026).
 */
export const ACCENTS_RUP: Accent[] = [
  {
    id: 'rup-grecia',
    name: 'Grécia (Pindo)',
    kind: 'sotaque',
    region: 'As montanhas do Pindo (Metsovo, Samarina) e a Tessália',
    country: 'GRC',
    subdivisions: ['GR-D', 'GR-E', 'GR-C'],
    emoji: '🐑',
    summary: 'O aromeno do Pindo, na Grécia, a terra das vilas de pastores de Metsovo e Samarina, com muitas palavras do grego.',
    features: ['Muitas palavras do grego.', 'Vilas de montanha onde os pastores passavam o verão.'],
    examples: [['Bunã dzua!', 'Bom dia!']],
  },
  {
    id: 'rup-farserot',
    name: 'Fârșerot (Albânia)',
    kind: 'sotaque',
    region: 'A Albânia (Korçë, Fier) e o noroeste da Grécia',
    country: 'ALB',
    emoji: '⛺',
    summary: 'O aromeno dos fârșeroți, antigos pastores nômades da Albânia, com vogais próprias e palavras do albanês.',
    features: ['Palavras do albanês.', 'Vogais próprias, diferentes das do Pindo.'],
    examples: [['fârșerot', 'fârșerot']],
  },
  {
    id: 'rup-krusevo',
    name: 'Macedônia do Norte (Kruševo)',
    kind: 'sotaque',
    region: 'Kruševo, Bitola e Štip, na Macedônia do Norte',
    country: 'MKD',
    subdivisions: ['MK-505', 'MK-501'],
    emoji: '🏔️',
    summary: 'O aromeno da Macedônia do Norte, onde é língua oficial em Kruševo, a cidade aromena das montanhas.',
    features: ['Língua oficial no município de Kruševo.', 'Palavras do macedônio.'],
    examples: [['Crushuva', 'Kruševo']],
  },
  {
    id: 'rup-romenia',
    name: 'Romênia (Dobruja)',
    kind: 'sotaque',
    region: 'A Dobruja, no leste da Romênia (Constança)',
    country: 'ROU',
    subdivisions: ['RO-CT', 'RO-TL'],
    emoji: '🇷🇴',
    summary: 'O aromeno das famílias que foram para a Dobruja romena nos anos 1920 e 1930, com palavras do romeno.',
    features: ['Palavras do romeno.', 'Muitos falam também o romeno.'],
    examples: [['Bunã dzua!', 'Bom dia!']],
  },
  {
    id: 'rup-meglenorromeno',
    name: 'Meglenorromeno',
    kind: 'língua',
    region: 'A região de Meglen, na fronteira entre a Grécia e a Macedônia do Norte',
    country: 'GRC',
    subdivisions: ['GR-B'],
    emoji: '🌾',
    summary: 'A menor das línguas romenas dos Bálcãs, com alguns milhares de falantes em vilas da região de Meglen, com muitas palavras do macedônio e do búlgaro.',
    features: ['Muitas palavras eslavas.', 'Alguns milhares de falantes, a maioria idosa.'],
    examples: [['Meglen', 'Meglen']],
  },
];
