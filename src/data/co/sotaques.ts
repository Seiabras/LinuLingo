import type { Accent } from '../types';

/**
 * Os falares do corso (10/10/2026): o cismontano, do norte, e o oltramontano, do sul, separados pela
 * cadeia de montanhas central da Córsega. Fontes: Wikipédia em corso e em francês («Lingua corsa»,
 * «Cismuntincu», «Pumuntincu», consultadas em 10/10/2026).
 */
export const ACCENTS_CO: Accent[] = [
  {
    id: 'co-cismontano',
    name: 'Cismontano (norte)',
    kind: 'sotaque',
    region: 'O norte da Córsega: Bastia, Corte e o Cap Corse',
    country: 'FRA',
    subdivisions: ['FR-2B'],
    emoji: '⛰️',
    summary: 'O corso do norte, de Bastia e de Corte, o mais próximo do toscano, a língua de que o corso é parente.',
    features: [
      'Próximo do toscano antigo no vocabulário e nas vogais.',
      'Corte, no centro da ilha, foi a capital da Córsega independente de Pasquale Paoli (1755–1769).',
    ],
    examples: [['Bonghjornu! Cumu stai?', 'Bom dia! Como vai?']],
  },
  {
    id: 'co-oltramontano',
    name: 'Oltramontano (sul)',
    kind: 'sotaque',
    region: 'O sul da Córsega: Ajaccio, Sartène e Bonifacio',
    country: 'FRA',
    subdivisions: ['FR-2A'],
    emoji: '🏖️',
    summary: 'O corso do sul, de Ajaccio e Sartène, com o “dd” cacuminal (a língua dobrada para trás) que lembra o sardo e o siciliano: “beddu” (bonito).',
    features: [
      'O “ll” do latim vira um “dd” cacuminal: “beddu” (bonito), onde o norte diz “bellu”.',
      'Vogais mais fechadas e mais próximas do sardo.',
    ],
    examples: [['Hè beddu!', 'É bonito!', 'no norte: “Hè bellu!”']],
  },
];
