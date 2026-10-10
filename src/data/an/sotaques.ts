import type { Accent } from '../types';

/**
 * Os falares do aragonês (10/10/2026): os grandes blocos dos vales do Alto Aragão. Fontes: Wikipédia em
 * aragonês e em espanhol («Dialectos de l'aragonés», «Cheso», «Belsetán», «Ribagorzano», consultadas em
 * 10/10/2026).
 */
export const ACCENTS_AN: Accent[] = [
  {
    id: 'an-ocidental',
    name: 'Aragonês ocidental (cheso, ansotano)',
    kind: 'sotaque',
    region: 'Os vales de Ansó e Echo, no oeste do Alto Aragão',
    country: 'ESP',
    subdivisions: ['ES-HU'],
    emoji: '🏔️',
    summary: 'O aragonês dos vales do oeste, como o cheso do vale de Echo, uma das variedades mais vivas, com literatura própria.',
    features: [
      'O cheso tem uma tradição literária própria, com poetas como Domingo Miral.',
      'Os vales mantêm o aragonês como língua de casa mais do que o resto da região.',
    ],
    examples: [['Bienplegaus!', 'Bem-vindos!']],
  },
  {
    id: 'an-central',
    name: 'Aragonês central (belsetán, tensino)',
    kind: 'sotaque',
    region: 'Os vales do centro do Alto Aragão: Tena, Bielsa, Sobrarbe',
    country: 'ESP',
    subdivisions: ['ES-HU'],
    emoji: '🌲',
    summary: 'O aragonês dos vales centrais, que guarda as consoantes surdas do latim entre vogais: “saputo” onde o espanhol diz “sabido”.',
    features: [
      'As consoantes surdas entre vogais não se sonorizam: “saputo” (sabido), “forato” (furo).',
      'O belsetán, do vale de Bielsa, é uma das variedades mais conservadoras.',
    ],
    examples: [['Bienplegaus!', 'Bem-vindos!']],
  },
  {
    id: 'an-oriental',
    name: 'Aragonês oriental (ribagorçano)',
    kind: 'sotaque',
    region: 'A Ribagorça, no leste do Alto Aragão, na fronteira com o catalão',
    country: 'ESP',
    subdivisions: ['ES-HU'],
    emoji: '🌉',
    summary: 'O aragonês do leste, de transição para o catalão, com traços das duas línguas.',
    features: [
      'Mistura traços do aragonês e do catalão, como na palatalização do “l” inicial.',
      'Faz fronteira com o catalão ribagorçano.',
    ],
    examples: [['Bienplegaus!', 'Bem-vindos!']],
  },
];
