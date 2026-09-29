import type { Accent } from '../types';

// O suaíli padrão (Kiswahili sanifu) foi fixado no século XX a partir do kiunguja, o falar de Zanzibar.
// Na costa ficam os dialetos antigos, com séculos de poesia (o kimvita de Mombasa, o kiamu de Lamu);
// no interior, o suaíli se espalhou como língua de contato, com o jeito de cada país; em Nairobi nasceu
// o sheng; e no leste do Congo o suaíli virou uma variedade própria, que a norma ISO 639-3 trata como
// língua à parte (swc).
export const ACCENTS_SW: Accent[] = [
  {
    id: 'sw-unguja',
    name: 'Kiunguja (Zanzibar)',
    kind: 'dialeto',
    region: 'A ilha de Unguja, no arquipélago de Zanzibar, na Tanzânia',
    country: 'TZA',
    subdivisions: ['TZ-07', 'TZ-11', 'TZ-15'],
    emoji: '🏝️',
    summary: 'O falar da cidade de Zanzibar, base do suaíli padrão. É considerado o suaíli «de referência», com pronúncia clara e muitas palavras de origem árabe.',
    features: [
      'Foi escolhido como base da norma escrita entre o fim dos anos 1920 e os anos 1930, e por isso as gramáticas e os dicionários seguem o seu vocabulário.',
      'Mantém bem os sons das palavras árabes, como o «dh» e o «th» (dhahabu, thelathini).',
      'Na cidade velha, a língua convive com o árabe da religião e com o inglês do turismo.',
    ],
    examples: [
      ['Habari za asubuhi?', 'Como vai, esta manhã?'],
      ['Karibu Unguja!', 'Bem-vindo a Unguja!'],
      ['Twende Darajani.', 'Vamos a Darajani (o mercado).'],
    ],
    words: [
      ['Unguja', 'a ilha principal de Zanzibar'],
      ['Kiunguja', 'o falar de Unguja'],
    ],
  },
  {
    id: 'sw-bara',
    name: 'Suaíli da Tanzânia continental (bara)',
    kind: 'sotaque',
    region: 'Dar es Salaam e o interior da Tanzânia',
    country: 'TZA',
    subdivisions: ['TZ-02', 'TZ-19', 'TZ-25'],
    emoji: '🏙️',
    summary: 'O suaíli do dia a dia de Dar es Salaam e das outras cidades do continente, a língua de quase toda a Tanzânia. Próximo do padrão, mas cheio de gírias urbanas.',
    features: [
      'Na Tanzânia, o suaíli é a língua da escola primária, do governo, do comércio e da música, e une mais de cem povos com línguas próprias.',
      'Nas cidades, os jovens criam gírias que depois viram moda na música bongo flava.',
      'Muitos falantes têm outra língua banta em casa, e o sotaque muda um pouco de região para região.',
    ],
    examples: [
      ['Mambo vipi?', 'E aí, como vai? (coloquial)'],
      ['Poa, kaka!', 'Beleza, irmão!'],
      ['Twende mjini kwa daladala.', 'Vamos para o centro de daladala (micro-ônibus).'],
    ],
    words: [
      ['daladala', 'micro-ônibus urbano'],
      ['bongo', 'Dar es Salaam, na gíria («cérebro», a cidade onde é preciso ser esperto)'],
    ],
  },
  {
    id: 'sw-mvita',
    name: 'Kimvita (Mombasa)',
    kind: 'dialeto',
    region: 'Mombasa, na costa sul do Quênia',
    country: 'KEN',
    subdivisions: ['KE-28', 'KE-19', 'KE-14'],
    emoji: '🏰',
    summary: 'O dialeto tradicional de Mombasa, com uma longa tradição poética. Antes do padrão de Zanzibar, foi uma das variedades mais prestigiadas da costa.',
    features: [
      'Muitos poemas clássicos do século XIX foram compostos em kimvita.',
      'Tem vocabulário próprio e diferenças de pronúncia em relação ao padrão de Zanzibar.',
      'Na Mombasa de hoje, o kimvita convive com o suaíli padrão e com o suaíli queniano do interior.',
    ],
    examples: [
      ['Karibu Mombasa!', 'Bem-vindo a Mombasa!'],
      ['Mji wa kale ni mzuri sana.', 'A cidade velha é muito bonita.'],
    ],
    words: [
      ['Mvita', 'o nome suaíli de Mombasa (a ilha da guerra)'],
      ['Kimvita', 'o falar de Mombasa'],
    ],
  },
  {
    id: 'sw-amu',
    name: 'Kiamu (Lamu)',
    kind: 'dialeto',
    region: 'O arquipélago de Lamu, no norte da costa do Quênia',
    country: 'KEN',
    subdivisions: ['KE-21'],
    emoji: '⛵',
    summary: 'O dialeto de Lamu, uma das cidades suaílis mais antigas, com uma literatura escrita durante séculos em letras árabes.',
    features: [
      'É o dialeto de muitos poemas antigos e de manuscritos em escrita árabe.',
      'Guarda diferenças de pronúncia e de vocabulário que o tornam difícil para quem só conhece o padrão.',
      'A cidade velha de Lamu, sem carros, é Patrimônio Mundial da UNESCO desde 2001.',
    ],
    examples: [
      ['Karibu Lamu!', 'Bem-vindo a Lamu!'],
      ['Punda ni gari la Lamu.', 'O burro é o carro de Lamu.'],
    ],
    words: [['Kiamu', 'o falar de Lamu']],
  },
  {
    id: 'sw-sheng',
    name: 'Sheng (Nairobi)',
    kind: 'sotaque',
    region: 'Nairobi e as cidades do Quênia',
    country: 'KEN',
    subdivisions: ['KE-30'],
    emoji: '🎧',
    summary: 'A gíria dos jovens de Nairobi, que mistura a gramática suaíli com palavras do inglês, das línguas quenianas e invenções que mudam a cada geração.',
    features: [
      'O nome vem de «Swahili» e «English» embaralhados.',
      'Nasceu nos bairros populares da capital e hoje está na música, no rádio e na publicidade.',
      'Não entra em cartas formais, provas nem noticiários, onde se usa o suaíli padrão.',
    ],
    examples: [
      ['Niaje, msee?', 'E aí, cara?'],
      ['Poa sana!', 'Tudo muito bem!'],
      ['Tuko pamoja.', 'Estamos juntos (tamo junto).'],
    ],
    words: [
      ['msee', 'cara, parceiro'],
      ['niaje', 'e aí?'],
      ['matatu', 'micro-ônibus coletivo, muitas vezes grafitado'],
    ],
  },
  {
    id: 'sw-kongo',
    name: 'Suaíli do Congo (kingwana)',
    kind: 'língua',
    region: 'O leste da República Democrática do Congo: os Kivus, Maniema, Tanganyika e Haut-Katanga',
    country: 'COD',
    subdivisions: ['CD-NK', 'CD-SK', 'CD-MA', 'CD-TA', 'CD-HK'],
    emoji: '🌋',
    summary: 'O suaíli chegou ao interior do Congo com as rotas de comércio do século XIX e virou a língua de contato de todo o leste do país. A norma ISO 639-3 o trata como língua própria (swc).',
    features: [
      'Tem muitas palavras do francês, a língua oficial do Congo, e das línguas locais.',
      'A gramática é próxima da do suaíli padrão, mas com simplificações e usos próprios.',
      'É uma das quatro línguas nacionais do Congo, ao lado do lingala, do kikongo e do tshiluba.',
    ],
    examples: [
      ['Jambo!', 'Olá!'],
      ['Tuko na mikutano leo.', 'Temos reuniões hoje.'],
    ],
    words: [['Kingwana', 'nome antigo do suaíli do Congo']],
  },
];
