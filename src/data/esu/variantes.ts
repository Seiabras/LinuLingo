import type { LanguageVariant } from '../types';
import { dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos do iúpique do Alasca central (10/10/2026): o iúpique central geral (Yugtun, padrão do
 * curso), Norton Sound, Hooper Bay e Chevak (cup'ik) e Nunivak (cup'ig). O quinto dialeto, o de Egegik,
 * está extinto. Sem histórias nos dialetos, por falta de fonte.
 *
 * Fontes: Wikipédia em inglês (consultadas em 10/10/2026): «Central Alaskan Yupʼik» (os cinco dialetos,
 * todos inteligíveis entre si; Dialect variations: o “z” de Norton Sound em “angsaq”, a falta do “z” e
 * do “w” em Hooper Bay e Chevak, o “aa” no lugar de “ai” em Nunivak); «Chevak Cupʼik dialect» (a tabela
 * Yukon-Kuskokwim × Chevak); «Nunivak Cupʼig language» (a tabela dos números nos três dialetos e as
 * frases de Nunivak, com a tradução delas). E o [WIKT] s.v. “angsaq” (= angyaq, barco).
 */
export const VARIANTS_ESU: LanguageVariant[] = [
  dialetoPadrao(
    'esu-GCY',
    'USA',
    'Iúpique central geral (Yugtun)',
    '🇺🇸',
    'O padrão do curso: o iúpique central geral, o “Yugtun”, falado na ilha Nelson, no delta do Yukon e do Kuskokwim e na baía de Bristol. É o dialeto principal da língua.',
  ),
  {
    code: 'esu-NS',
    country: 'USA',
    kind: 'dialeto',
    name: 'Iúpique de Norton Sound (unaliq-pastuliq)',
    flag: '🇺🇸',
    summary: 'O iúpique em volta de Norton Sound, o mais ao norte da língua: o unaliq, de Elim, Golovin e St. Michael, e o pastuliq, de Kotlik.',
    pronunciation: ['O “y” depois de consoante soa “z”, e o “yy”, “zz”: “angsaq” (barco), onde o iúpique central geral diz “angyaq”.'],
    vocab: [['angyaq', 'angsaq', 'barco']],
  },
  {
    code: 'esu-HBC',
    country: 'USA',
    kind: 'dialeto',
    name: 'Cup’ik de Hooper Bay e Chevak',
    flag: '🇺🇸',
    summary: 'O dialeto de Hooper Bay e de Chevak, na costa do mar de Bering. Em Chevak, a gente se chama Cup’ik (e não Yup’ik) e tem um distrito escolar só seu, com ensino em inglês e em cup’ik.',
    pronunciation: [
      'Não tem o som “z”: no lugar dele, “y”, como em “qaygiq” (a casa dos homens), onde o padrão diz “qasgiq”.',
      'O “v” é sempre “v”, nunca “w”.',
      'Em Chevak, o “y” do começo de muitas palavras vira “c” (tch): “Cup’ik”, “cuilquq”, “cuinaq”.',
    ],
    vocab: [
      ['yugnikek’ngaq', 'aiparnatugaq', 'amigo'],
      ['yuilquq', 'cuilquq', 'a tundra, o mato'],
      ['nuussiq', 'caviggaq', 'faca'],
      ['uluaq', 'kegginalek', 'ulu (a faca em meia-lua)'],
      ['canek', 'evek', 'folha de capim'],
      ['ellalluk', 'ivyuk', 'chuva'],
      ['elitnaurista', 'elicarta, skuularta', 'professor(a)'],
      ['cetaman', 'citaman', 'quatro'],
      ['yuinaq', 'cuinaq', 'vinte'],
    ],
  },
  {
    code: 'esu-NUN',
    country: 'USA',
    kind: 'dialeto',
    name: 'Cup’ig de Nunivak',
    flag: '🇺🇸',
    summary: 'O cup’ig da ilha Nunivak, o mais diferente dos dialetos — há quem o conte como língua própria. Hoje é falado pelos mais velhos de Mekoryuk, na ilha, onde a escola ensina em inglês e em cup’ig.',
    pronunciation: [
      '“aa” no lugar do “ai” do continente: “cukaatut” (eles são lentos), onde o padrão diz “cukaitut”.',
      'No fim da palavra ficam o “r” e o “g”, que no continente endurecem para “q” e “k”: “ataucir” × “atauciq” (um).',
    ],
    vocab: [
      ['atauciq', 'ataucir', 'um'],
      ['malruk', 'malzrug', 'dois'],
      ['akimiaq', 'akimiar', 'quinze'],
      ['yuinaq', 'cuinar', 'vinte'],
      ['Assirtua', 'Canritua', 'estou bem'],
      ['caayuq', 'caayu', 'chá'],
      ['cass’aq', 'cass’ar', 'relógio'],
    ],
  },
];
