import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os três grandes dialetos do croata, nomeados pela palavra que cada um usa para “o quê?”: kajkavski
 * (“kaj”), čakavski (“ča”) e štokavski (“što”), a base do padrão. Fontes: Wikipédia em croata e em
 * português («Narječja hrvatskoga jezika», «Gradišćanskohrvatski jezik», «Moliškohrvatski jezik»,
 * consultadas em 10/10/2026). O croata do Burgenland entra como sotaque; se vira dialeto é dúvida para o
 * dono (docs/duvidas-variedades.md).
 */
const BASE_HR: Accent[] = [
  {
    id: 'hr-kajkavski',
    name: 'Kajkavski (Zagreb, Zagorje)',
    kind: 'sotaque',
    region: 'Zagreb, o Zagorje, Varaždin e Međimurje, no norte',
    country: 'HRV',
    subdivisions: ['HR-21', 'HR-02', 'HR-05', 'HR-20'],
    emoji: '🏰',
    summary: 'O croata do norte, de Zagreb, onde “o quê?” se diz “kaj?”, próximo do esloveno e com palavras do alemão.',
    features: ['“Kaj?” para “o quê?”.', 'Próximo do esloveno; palavras do alemão, do tempo austro-húngaro.'],
    examples: [['Kaj?', 'O quê?', 'no padrão, “Što?”']],
  },
  {
    id: 'hr-cakavski',
    name: 'Čakavski (Ístria, ilhas, costa)',
    kind: 'sotaque',
    region: 'A Ístria, as ilhas do Adriático e parte da costa da Dalmácia',
    country: 'HRV',
    subdivisions: ['HR-18', 'HR-08', 'HR-13', 'HR-17'],
    emoji: '⛵',
    summary: 'O croata da costa e das ilhas, onde “o quê?” se diz “ča?”, com muitas palavras do vêneto e do italiano.',
    features: ['“Ča?” para “o quê?”.', 'Muitas palavras do vêneto, do tempo de Veneza: “pomidor” (tomate).'],
    examples: [['Ča?', 'O quê?']],
  },
  {
    id: 'hr-stokavski',
    name: 'Štokavski (Eslavônia, Dalmácia continental)',
    kind: 'sotaque',
    region: 'A Eslavônia, a Lika e a Dalmácia continental',
    country: 'HRV',
    subdivisions: ['HR-14', 'HR-12', 'HR-11', 'HR-16', 'HR-19'],
    emoji: '🌻',
    summary: 'O croata do leste e do sul, onde “o quê?” se diz “što?”, a base do padrão croata, como do sérvio e do bósnio.',
    features: ['“Što?” para “o quê?”.', 'Em Dubrovnik, a forma ijekavska: “lijepo” (bonito); em boa parte da Dalmácia, a ikavska: “lipo”.'],
    examples: [['Što?', 'O quê?']],
  },
  {
    id: 'hr-burgenland',
    name: 'Croata do Burgenland',
    kind: 'sotaque',
    region: 'O Burgenland, na Áustria, e vilas vizinhas da Hungria e da Eslováquia',
    country: 'AUT',
    subdivisions: ['AT-1'],
    emoji: '🇦🇹',
    summary: 'O croata dos que fugiram dos otomanos para o oeste da Hungria no século XVI, hoje no Burgenland austríaco, com norma escrita própria e muitas palavras do alemão.',
    features: ['Tem norma escrita própria, diferente do croata padrão.', 'Base čakavska, com muitas palavras do alemão e do húngaro.'],
    examples: [['gradišćanski Hrvati', 'os croatas do Burgenland']],
  },
  {
    id: 'hr-molise',
    name: 'Croata do Molise (na-našu)',
    kind: 'língua',
    region: 'Três vilas do Molise, na Itália: Acquaviva Collecroce, Montemitro, San Felice del Molise',
    country: 'ITA',
    subdivisions: ['IT-67'],
    emoji: '🇮🇹',
    summary: 'A fala dos croatas que chegaram ao Molise no século XVI, separada do croata há 500 anos, com muito italiano. Os falantes a chamam de “na-našu”, “do nosso jeito”.',
    features: ['Perdeu o gênero neutro e parte dos casos, sob a influência do italiano.', 'Protegida pela lei italiana de 1999 sobre as línguas minoritárias.'],
    examples: [['na-našu', '“do nosso jeito”, o nome que os falantes dão à língua']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_HR: Accent[] = noDialeto(BASE_HR, 'hr-HR', { iguais: {'hr-burgenland': 'hr-AT'} });
