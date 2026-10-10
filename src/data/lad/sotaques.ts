import type { Accent } from '../types';

/**
 * Os falares do judeu-espanhol (ladino), 10/10/2026. Fontes: Wikipédia em ladino, espanhol e inglês
 * («Lingua djudeo-espanyola», «Haketía», «Judeo-Spanish», consultadas em 10/10/2026), e a Autoridad
 * Nasionala del Ladino (Israel, criada em 1997). Se o oriental e a haketia viram dialetos é dúvida para
 * o dono (docs/duvidas-variedades.md); por enquanto, sotaques.
 */
export const ACCENTS_LAD: Accent[] = [
  {
    id: 'lad-istambul',
    name: 'Istambul (oriental)',
    kind: 'sotaque',
    region: 'Istambul e a Turquia',
    country: 'TUR',
    subdivisions: ['TR-34', 'TR-35'],
    emoji: '🕌',
    summary: 'O judeu-espanhol de Istambul e de Esmirna, da antiga capital do Império Otomano, que acolheu os judeus expulsos da Espanha em 1492.',
    features: ['Muitas palavras do turco: “kolay” (fácil).', 'O jornal “Şalom”, de Istambul, publica o suplemento “El Amaneser”, todo em ladino.'],
    examples: [['Komo estash?', 'Como vocês estão?']],
  },
  {
    id: 'lad-salonica',
    name: 'Salônica (oriental)',
    kind: 'sotaque',
    region: 'Tessalônica e a Macedônia grega',
    country: 'GRC',
    subdivisions: ['GR-B'],
    emoji: '⛵',
    summary: 'O judeu-espanhol de Salônica, a “Jerusalém dos Bálcãs”, cidade de maioria judia até a deportação nazista de 1943.',
    features: ['Palavras do grego e do francês, das escolas da Aliança Israelita.', 'Foi a língua do porto e do comércio da cidade por quatro séculos.'],
    examples: [['Komo estash?', 'Como vocês estão?']],
  },
  {
    id: 'lad-balcas',
    name: 'Bálcãs (Sarajevo, Sófia)',
    kind: 'sotaque',
    region: 'Bósnia, Bulgária e a antiga Iugoslávia',
    country: 'BIH',
    emoji: '🌉',
    summary: 'O judeu-espanhol de Sarajevo, de Sófia e de Belgrado, onde a Hagadá de Sarajevo, levada da Espanha, sobreviveu às guerras.',
    features: ['Palavras das línguas eslavas da região.', 'A Hagadá de Sarajevo, manuscrito de cerca de 1350, veio com os judeus expulsos da Espanha.'],
    examples: [['Komo estash?', 'Como vocês estão?']],
  },
  {
    id: 'lad-haketia',
    name: 'Haketia (Marrocos)',
    kind: 'sotaque',
    region: 'Tetuão, Tânger e o norte do Marrocos',
    country: 'MAR',
    subdivisions: ['MA-01'],
    emoji: '🌙',
    summary: 'O judeu-espanhol do norte do Marrocos, com muito árabe, que se reaproximou do espanhol no tempo do protetorado espanhol (1912–1956).',
    features: ['Muitas palavras e expressões do árabe marroquino.', 'Ficou mais próximo do espanhol moderno no século XX.'],
    examples: [['haketía', 'o nome da variedade']],
  },
  {
    id: 'lad-israel',
    name: 'Israel',
    kind: 'sotaque',
    region: 'Israel, onde hoje vive a maior parte dos falantes',
    country: 'ISR',
    emoji: '📻',
    summary: 'O judeu-espanhol de Israel, para onde foi a maioria das famílias sefarditas dos Bálcãs e da Turquia, com a Autoridad Nasionala del Ladino e a revista “Aki Yerushalayim”.',
    features: ['A grafia latina da revista “Aki Yerushalayim” virou a mais usada.', 'Palavras do hebraico moderno entram na fala de hoje.'],
    examples: [['Aki Yerushalayim', '“Aqui Jerusalém”, a revista em ladino']],
  },
];
