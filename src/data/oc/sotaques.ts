import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os grandes dialetos do occitano (10/10/2026), na classificação de Pierre Bec (1963), seguida pelo
 * Congrès permanent de la lenga occitana. Fontes: Wikipédia em occitano e em francês («Occitan»,
 * «Gascon», «Provençal», «Limousin», «Auvergnat», «Vivaro-alpin», «Languedocien», consultadas em
 * 10/10/2026). Cada um tem norma escrita própria; se viram dialetos completos é dúvida para o dono
 * (docs/duvidas-variedades.md). Por enquanto, sotaques.
 */
const BASE_OC: Accent[] = [
  {
    id: 'oc-lengadocian',
    name: 'Languedociano',
    kind: 'sotaque',
    region: 'O Languedoc: Toulouse, Montpellier, Carcassonne, Rodez',
    country: 'FRA',
    subdivisions: ['FR-31', 'FR-34', 'FR-11', 'FR-12', 'FR-81'],
    emoji: '🏰',
    summary: 'O occitano do Languedoc, o mais próximo da língua clássica dos trovadores e a base da norma do curso.',
    features: [
      'Guarda as consoantes finais do occitano clássico mais que os outros dialetos.',
      'O “v” soa como “b”: “vin” (vinho) soa “bin”.',
    ],
    examples: [['Bonjorn! Cossí anatz?', 'Bom dia! Como vai?']],
  },
  {
    id: 'oc-provencau',
    name: 'Provençal',
    kind: 'sotaque',
    region: 'A Provença: Marselha, Avignon, Aix, Nice (o niçardo)',
    country: 'FRA',
    subdivisions: ['FR-13', 'FR-84', 'FR-83', 'FR-04', 'FR-06'],
    emoji: '🌻',
    summary: 'O occitano da Provença, a língua de Frédéric Mistral, Prêmio Nobel de 1904, com uma grafia própria (a mistraliana) ao lado da clássica.',
    features: [
      'As consoantes do fim da palavra caem: o plural não se ouve.',
      'Duas grafias: a clássica, comum a todo o occitano, e a mistraliana, mais perto do francês.',
    ],
    examples: [['Bonjorn!', 'Bom dia!', 'na grafia mistraliana, “Bon jour!”']],
  },
  {
    id: 'oc-gascon',
    name: 'Gascão',
    kind: 'sotaque',
    region: 'A Gasconha e o Béarn: Pau, Bordeaux (o interior), Auch, Tarbes; e o Val d’Aran, na Espanha',
    country: 'FRA',
    subdivisions: ['FR-64', 'FR-65', 'FR-32', 'FR-40', 'FR-33'],
    emoji: '🦆',
    summary: 'O occitano da Gasconha, o mais diferente de todos: o “f” do latim virou “h” e o “ll” do fim virou “th”. O aranês, oficial na Catalunha, é gascão.',
    features: [
      'O “f-” do latim vira um “h” aspirado: “hilh” (filho), onde os outros dizem “filh”.',
      'O “-ll” do fim vira “-th”: “bèth” (belo).',
      'O “n” entre vogais cai: “lua” (lua), onde o languedociano diz “luna”.',
    ],
    examples: [['Adishatz!', 'Olá! / Tchau!'], ['hilh', 'filho']],
  },
  {
    id: 'oc-lemosin',
    name: 'Limosino',
    kind: 'sotaque',
    region: 'O Limousin e o Périgord: Limoges, Périgueux',
    country: 'FRA',
    subdivisions: ['FR-87', 'FR-19', 'FR-23', 'FR-24'],
    emoji: '🐄',
    summary: 'O occitano do norte, do Limousin, a terra dos primeiros trovadores, onde “ca” e “ga” viraram “cha” e “ja”.',
    features: [
      '“Ca” e “ga” do latim viram “cha” e “ja”: “chantar” (cantar), onde o sul diz “cantar”.',
      'As consoantes finais caem, como no provençal.',
    ],
    examples: [['chantar', 'cantar', 'no languedociano, “cantar”']],
  },
  {
    id: 'oc-auvernhat',
    name: 'Auvernhês',
    kind: 'sotaque',
    region: 'A Auvérnia: Clermont-Ferrand, Aurillac, Le Puy',
    country: 'FRA',
    subdivisions: ['FR-63', 'FR-15', 'FR-43'],
    emoji: '🌋',
    summary: 'O occitano das montanhas da Auvérnia, também do norte, com o “cha” do limosino e muitos sons chiados.',
    features: ['“Ca” vira “cha”, como no limosino: “chantar”.', 'Sons chiados próprios, que o separam do limosino.'],
    examples: [['chantar', 'cantar']],
  },
  {
    id: 'oc-vivaroaupenc',
    name: 'Vivaro-alpino',
    kind: 'sotaque',
    region: 'Os Alpes do sul da França e os Vales Occitanos do Piemonte, na Itália',
    country: 'FRA',
    subdivisions: ['FR-05', 'FR-26', 'FR-07'],
    emoji: '🏔️',
    summary: 'O occitano dos Alpes e do Vivarais, falado também nos Vales Occitanos da Itália, onde o “t” entre vogais caiu: “cantaa” (cantada).',
    features: [
      'O “t” entre vogais cai: “cantaa” (cantada), onde o languedociano diz “cantada”.',
      '“Ca” vira “cha”, como no norte.',
    ],
    examples: [['cantaa', 'cantada']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_OC: Accent[] = noDialeto(BASE_OC, 'oc-lengadocian', { iguais: { 'oc-lengadocian': 'oc-lengadocian', 'oc-provencau': 'oc-provencau', 'oc-gascon': 'oc-gascon', 'oc-lemosin': 'oc-lemosin', 'oc-auvernhat': 'oc-auvernhat', 'oc-vivaroaupenc': 'oc-vivaroaupenc' } });
