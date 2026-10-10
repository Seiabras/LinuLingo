import type { Accent } from '../types';

/**
 * Os falares do sámi do norte (10/10/2026). Fontes: Wikipédia em português, inglês e sámi («Northern
 * Sami», «Davvisámegiella», consultadas em 10/10/2026). O padrão escrito comum aos três países é de 1979.
 */
export const ACCENTS_SE: Accent[] = [
  {
    id: 'se-kautokeino',
    name: 'Kautokeino (Guovdageaidnu)',
    kind: 'sotaque',
    region: 'Kautokeino, no interior da Finnmark',
    country: 'NOR',
    subdivisions: ['NO-54'],
    emoji: '🦌',
    summary: 'O sámi de Kautokeino, a terra dos criadores de renas, onde a maioria fala sámi e fica a Universidade Sámi.',
    features: ['A língua da maioria da população.', 'A Universidade Sámi (Sámi allaskuvla) fica aqui.'],
    examples: [['Bures!', 'Olá!']],
  },
  {
    id: 'se-karasjok',
    name: 'Karasjok (Kárášjohka)',
    kind: 'sotaque',
    region: 'Karasjok, no interior da Finnmark',
    country: 'NOR',
    subdivisions: ['NO-54'],
    emoji: '🏛️',
    summary: 'O sámi de Karasjok, a sede do Parlamento Sámi da Noruega, com pequenas diferenças em relação a Kautokeino.',
    features: ['Sede do Parlamento Sámi (Sámediggi) da Noruega.', 'Pequenas diferenças de vogais em relação a Kautokeino.'],
    examples: [['Bures!', 'Olá!']],
  },
  {
    id: 'se-torne',
    name: 'Torne (Suécia e Finlândia)',
    kind: 'sotaque',
    region: 'O vale do Torne: Kiruna (Suécia) e Enontekiö (Finlândia)',
    country: 'SWE',
    emoji: '❄️',
    summary: 'O sámi do vale do Torne, na Suécia e na Finlândia, com palavras do sueco e do finlandês.',
    features: ['Palavras do sueco e do finlandês.', 'Falado dos dois lados da fronteira.'],
    examples: [['Bures!', 'Olá!']],
  },
  {
    id: 'se-mar',
    name: 'Sámi do mar',
    kind: 'sotaque',
    region: 'A costa e os fiordes da Finnmark e de Troms',
    country: 'NOR',
    subdivisions: ['NO-54'],
    emoji: '🌊',
    summary: 'O sámi das comunidades de pescadores da costa, que perdeu muitos falantes e hoje é revitalizado.',
    features: ['Palavras próprias da pesca e do mar.', 'Perdeu muitos falantes no século XX e hoje é revitalizado.'],
    examples: [['Bures!', 'Olá!']],
  },
];
