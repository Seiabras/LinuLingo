import type { Accent } from '../types';
import { ipaSwDe, TRACOS_SW } from './tracos';

// O suaíli padrão (Kiswahili sanifu) foi fixado no século XX a partir do kiunguja, o falar de Zanzibar.
// Pela regra do app (decisão do dono, 10/10/2026), os dialetos são os países: Tanzânia (o padrão), Quênia
// e RD Congo (variantes.ts). Aqui ficam os sotaques de cada um: Zanzibar e o continente na Tanzânia;
// Mombasa, Lamu e o sheng de Nairóbi no Quênia; Lubumbashi e o kingwana (o suaíli do Congo como um todo,
// que a norma ISO 639-3 trata como língua à parte, swc, e aparece aqui como o próprio dialeto) no Congo.
export const ACCENTS_SW: Accent[] = [
  {
    id: 'sw-unguja',
    name: 'Kiunguja (Zanzibar)',
    kind: 'sotaque',
    variant: 'sw-TZ',
    region: 'A ilha de Unguja, no arquipélago de Zanzibar, na Tanzânia',
    country: 'TZA',
    subdivisions: ['TZ-07', 'TZ-11', 'TZ-15'],
    emoji: '🏝️',
    summary: 'O falar da cidade de Zanzibar, base do suaíli padrão. É considerado o suaíli “de referência”, com pronúncia clara e muitas palavras de origem árabe.',
    features: [
      'Foi escolhido como base da norma escrita entre o fim dos anos 1920 e os anos 1930, e por isso as gramáticas e os dicionários seguem o seu vocabulário.',
      'Mantém bem os sons das palavras árabes, como o “dh” e o “th” (dhahabu, thelathini).',
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
    variant: 'sw-TZ',
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
      ['bongo', 'Dar es Salaam, na gíria (“cérebro”, a cidade onde é preciso ser esperto)'],
    ],
  },
  {
    id: 'sw-mvita',
    name: 'Kimvita (Mombasa)',
    kind: 'sotaque',
    variant: 'sw-KE',
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
    kind: 'sotaque',
    variant: 'sw-KE',
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
    variant: 'sw-KE',
    region: 'Nairobi e as cidades do Quênia',
    country: 'KEN',
    subdivisions: ['KE-30'],
    emoji: '🎧',
    summary: 'A gíria dos jovens de Nairobi, que mistura a gramática suaíli com palavras do inglês, das línguas quenianas e invenções que mudam a cada geração.',
    features: [
      'O nome vem de “Swahili” e “English” embaralhados.',
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
    id: 'sw-lubumbashi',
    name: 'Lubumbashi (swahili facile)',
    kind: 'sotaque',
    variant: 'sw-CD',
    region: 'Lubumbashi e as cidades mineiras do Alto Katanga, no sul da RD Congo',
    country: 'COD',
    subdivisions: ['CD-HK', 'CD-LU'],
    emoji: '⛏️',
    summary: 'O suaíli que nasceu nos acampamentos das minas de cobre do Katanga, no começo do século XX, e virou a língua materna de boa parte de Lubumbashi. Os moradores o chamam de “swahili facile”, mas ele tem gramática própria, com três classes nominais a mais que o padrão.',
    features: [
      'O “h” não soa (apa, por hapa), o “r” costuma virar “l”, e às vezes entra um som entre duas vogais (beyi, por bei).',
      'O locativo “-ni” sumiu: “ku soko” (no mercado), por “sokoni”.',
      'Os numerais não concordam: “mikate tatu” (três pães), por “mikate mitatu”.',
      'Muito francês, até nos conectivos: “parce que” no lugar de “kwa sababu”.',
      'Está nos anúncios de cerveja e de celular: “Primus inawaka”, “inakata beyi” (preço quebrado).',
    ],
    examples: [
      ['Mukate iko apa.', 'O pão está aqui.', 'padrão: “Mkate uko hapa.”'],
      ['Beyi ni kiloko.', 'O preço é pequeno.', 'padrão: “Bei ni ndogo.”'],
      ['Niko ku soko.', 'Estou no mercado.', 'padrão: “Niko sokoni.”'],
    ],
    words: [
      ['swahili facile', 'o suaíli local, como os moradores o chamam'],
      ['swahili bora', 'o suaíli padrão (“o suaíli melhor”)'],
      ['Lushois', 'os moradores de Lubumbashi, em francês'],
    ],
  },
  {
    id: 'sw-kongo',
    name: 'Suaíli do Congo (kingwana)',
    kind: 'sotaque',
    variant: 'sw-CD',
    sameAsVariant: 'sw-CD',
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

// a IPA de cada sotaque com os traços de lá (tracos.ts); sem traços, vale a do padrão
for (const a of ACCENTS_SW) {
  const id = a.sameAsVariant ?? a.id;
  // Mombasa e Lamu ficam sem os traços do Quênia: a costa guarda os sons árabes, como Zanzibar
  if (TRACOS_SW[id]) a.ipa = ipaSwDe(id);
}
