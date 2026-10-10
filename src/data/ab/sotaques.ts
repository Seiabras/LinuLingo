import type { Accent } from '../types';

/**
 * Os falares do abcázio e o abaza (10/10/2026). Fontes: Wikipédia em português, inglês e russo
 * («Abkhaz language», «Bzyp dialect», «Abaza language», consultadas em 10/10/2026). O padrão segue o
 * falar abzhui, do centro e do sul.
 */
export const ACCENTS_AB: Accent[] = [
  {
    id: 'ab-abzhui',
    name: 'Abzhui (padrão)',
    kind: 'sotaque',
    region: 'O centro e o sul da Abecásia (Sukhumi, Ochamchire)',
    country: 'GEO',
    subdivisions: ['GE-AB'],
    emoji: '🌊',
    summary: 'O abcázio abzhui, do centro e do sul, a base da língua escrita.',
    features: ['A base do padrão.', 'Muitas consoantes e só duas vogais.'],
    examples: [['Аԥсны', 'Abecásia, em abcázio']],
  },
  {
    id: 'ab-bzyp',
    name: 'Bzyp (norte)',
    kind: 'sotaque',
    region: 'O norte da Abecásia (Gudauta, Pitsunda)',
    country: 'GEO',
    subdivisions: ['GE-AB'],
    emoji: '🌲',
    summary: 'O abcázio do norte, do vale do rio Bzyp, com ainda mais consoantes que o padrão.',
    features: ['Mais consoantes que o padrão, com sons chiados que o abzhui perdeu.', 'Falado no norte, na região de Gudauta.'],
    examples: [['Аԥсны', 'Abecásia, em abcázio']],
  },
  {
    id: 'ab-abaza',
    name: 'Abaza',
    kind: 'língua',
    region: 'A Carachai-Circássia, na Rússia, e a Turquia',
    country: 'RUS',
    subdivisions: ['RU-KC'],
    emoji: '🏔️',
    summary: 'A língua dos abazas, parente próxima do abcázio, com escrita própria em cirílico e uma das línguas com mais consoantes do mundo.',
    features: ['Parente próxima do abcázio.', 'Escrita própria em cirílico.'],
    examples: [['Абаза', 'abaza']],
  },
];
