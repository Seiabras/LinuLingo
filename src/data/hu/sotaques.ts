import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do húngaro (10/10/2026). Fontes: Wikipédia em português, inglês e húngaro («Magyar
 * nyelvjárások», «Ö-zés», «Palóc nyelvjárás», «Székely nyelvjárás», «Csángó magyarok», consultadas
 * em 10/10/2026). A Transilvânia entra como sotaque (o székely e o de Cluj); se vira dialeto é dúvida
 * para o dono (docs/duvidas-variedades.md).
 */
const BASE_HU: Accent[] = [
  {
    id: 'hu-budapeste',
    name: 'Budapeste (padrão)',
    kind: 'sotaque',
    region: 'Budapeste e o centro do país',
    country: 'HUN',
    subdivisions: ['HU-BU', 'HU-PE'],
    emoji: '🏛️',
    summary: 'O húngaro de Budapeste, a referência da TV e da escola.',
    features: ['O acento sempre na primeira sílaba.', 'Vogais longas e curtas que mudam o sentido: “kor” (idade) × “kór” (doença).'],
    examples: [['Jó napot!', 'Bom dia!']],
  },
  {
    id: 'hu-alfold',
    name: 'Grande Planície (Szeged)',
    kind: 'sotaque',
    region: 'A Grande Planície: Szeged, Kecskemét',
    country: 'HUN',
    subdivisions: ['HU-CS', 'HU-BK'],
    emoji: '🌶️',
    summary: 'O húngaro da Grande Planície, de Szeged, onde muitos “e” viram “ö” (o “ö-zés”): “embör” (pessoa), onde o padrão diz “ember”.',
    features: ['O “ö-zés”: “embör”, “köll”, onde o padrão diz “ember”, “kell”.', 'Szeged é a terra da páprica e da sopa de peixe “halászlé”.'],
    examples: [['embör', 'pessoa', 'no padrão, “ember”']],
  },
  {
    id: 'hu-transdanubio',
    name: 'Transdanúbio',
    kind: 'sotaque',
    region: 'O oeste, além do Danúbio: Győr, Pécs, Zala',
    country: 'HUN',
    subdivisions: ['HU-GS', 'HU-BA', 'HU-ZA', 'HU-VA'],
    emoji: '🍷',
    summary: 'O húngaro do oeste, do Transdanúbio, com ditongos onde o padrão tem vogais longas e palavras do alemão.',
    features: ['Ditongos no lugar das vogais longas do padrão.', 'Palavras do alemão, da vizinhança com a Áustria.'],
    examples: [['Dunántúl', 'o Transdanúbio']],
  },
  {
    id: 'hu-paloc',
    name: 'Palóc (norte)',
    kind: 'sotaque',
    region: 'O norte: Nógrád, Heves e o sul da Eslováquia',
    country: 'HUN',
    subdivisions: ['HU-NO', 'HU-HE'],
    emoji: '🏰',
    summary: 'O húngaro dos palóc, no norte, com o “a” e o “á” trocados: o “a” curto soa aberto e sem arredondar, como o “a” do português.',
    features: ['O “a” curto soa como o “a” do português, e não arredondado como no padrão.', 'O “á” longo soa arredondado.'],
    examples: [['Palócföld', 'a terra dos palóc']],
  },
  {
    id: 'hu-szekely',
    name: 'Székely (Transilvânia)',
    kind: 'sotaque',
    region: 'A Terra dos Székely, no centro da Romênia (Harghita, Covasna, Mureș)',
    country: 'ROU',
    subdivisions: ['RO-HR', 'RO-CV', 'RO-MS'],
    emoji: '🌲',
    summary: 'O húngaro dos székely, na Transilvânia, na Romênia, onde o húngaro é a língua da maioria, com formas antigas e palavras próprias.',
    features: ['Formas antigas que o húngaro da Hungria perdeu.', 'Na região, o húngaro é a língua da maioria da população.'],
    examples: [['Székelyföld', 'a Terra dos Székely']],
  },
  {
    id: 'hu-transilvania',
    name: 'Transilvânia (Cluj)',
    kind: 'sotaque',
    region: 'Cluj-Napoca (Kolozsvár) e o centro da Transilvânia',
    country: 'ROU',
    subdivisions: ['RO-CJ', 'RO-BH', 'RO-SM'],
    emoji: '⛪',
    summary: 'O húngaro da Transilvânia, de Cluj, falado por mais de um milhão de pessoas na Romênia, com palavras do romeno.',
    features: ['Palavras do romeno: “blokk” (prédio), “vinete” (berinjela).', 'Mais de um milhão de falantes na Romênia.'],
    examples: [['Kolozsvár', 'Cluj-Napoca']],
  },
  {
    id: 'hu-csango',
    name: 'Csángó',
    kind: 'língua',
    region: 'As vilas católicas da Moldávia romena, perto de Bacău',
    country: 'ROU',
    subdivisions: ['RO-BC'],
    emoji: '✝️',
    summary: 'A fala dos csángó, católicos que vivem há séculos na Moldávia romena, separada do resto do húngaro desde a Idade Média, com o “sz” e o “s” do húngaro trocados.',
    features: ['Separada do húngaro desde a Idade Média.', 'O “s” e o “sz” trocados (o “sziszegés”): “szok” (muito), onde o padrão diz “sok”.'],
    examples: [['csángó', 'csángó']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_HU: Accent[] = noDialeto(BASE_HU, 'hu-HU', { iguais: {'hu-transilvania': 'hu-RO'}, outros: {'hu-szekely': 'hu-RO', 'hu-csango': 'hu-RO'} });
