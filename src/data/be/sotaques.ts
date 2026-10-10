import type { Accent } from '../types';

/**
 * Os falares do bielorrusso (10/10/2026). Fontes: Wikipédia em português, inglês e bielorrusso
 * («Belarusian language», «Дыялекты беларускай мовы», «Trasianka», consultadas em 10/10/2026). O padrão
 * segue os falares do centro (Minsk), entre os dois grandes grupos.
 */
export const ACCENTS_BE: Accent[] = [
  {
    id: 'be-nordeste',
    name: 'Nordeste (Vitebsk)',
    kind: 'sotaque',
    region: 'Vitebsk, Mogilev e o nordeste',
    country: 'BLR',
    subdivisions: ['BY-VI', 'BY-MA'],
    emoji: '🌲',
    summary: 'O bielorrusso do nordeste, com o “akanne” forte: o “o” e o “e” átonos soam “a”, como na escrita do padrão.',
    features: ['O “akanne” e o “jakanne”: o “e” átono soa “ia”.', 'Próximo do russo do outro lado da fronteira.'],
    examples: [['Віцебск', 'Vitebsk']],
  },
  {
    id: 'be-sudoeste',
    name: 'Sudoeste (Grodno)',
    kind: 'sotaque',
    region: 'Grodno, Brest e o oeste',
    country: 'BLR',
    subdivisions: ['BY-HR', 'BY-BR'],
    emoji: '🏰',
    summary: 'O bielorrusso do sudoeste, de Grodno, com palavras do polonês e do lituano, onde muita gente é católica.',
    features: ['Palavras do polonês e do lituano.', 'O “jakanne” mais fraco que no nordeste.'],
    examples: [['Гродна', 'Grodno']],
  },
  {
    id: 'be-polesia',
    name: 'Polésia',
    kind: 'sotaque',
    region: 'A Polésia, no sul (Pinsk, Brest)',
    country: 'BLR',
    subdivisions: ['BY-BR', 'BY-HO'],
    emoji: '🌿',
    summary: 'As falas da Polésia, os pântanos do sul, de transição para o ucraniano, que alguns chamam de língua própria.',
    features: ['De transição para o ucraniano.', 'Vogais e palavras próprias dos pântanos.'],
    examples: [['Палессе', 'Polésia']],
  },
  {
    id: 'be-trasianka',
    name: 'Trasianka',
    kind: 'sotaque',
    region: 'As cidades e o campo de todo o país',
    country: 'BLR',
    emoji: '🔀',
    summary: 'A fala que mistura bielorrusso e russo, muito comum no país, sobretudo no campo e nas cidades pequenas. O nome quer dizer “feno misturado com palha”.',
    features: ['Gramática e sons do bielorrusso com muitas palavras do russo.', 'Muito falada, mas malvista pela escola.'],
    examples: [['трасянка', 'trasianka']],
  },
];
