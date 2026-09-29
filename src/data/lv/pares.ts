import type { MinimalPairs } from '../types';

/** Pares mínimos do letão para quem fala português (pronúncia de referência: o letão padrão). */
export const PARES_LV: MinimalPairs = {
  contrasts: [
    {
      id: 'a-aa',
      name: 'a curto × ā longo',
      sounds: ['a', 'aː'],
      tip: 'O traço em cima da vogal (o macron) quer dizer: segure a vogal quase o dobro do tempo. Não é acento de tônica: a tônica do letão fica quase sempre na 1ª sílaba, e a vogal longa pode aparecer em qualquer lugar, até no fim (Latvijā). O brasileiro alonga a sílaba tônica e encurta as outras; no letão, quem manda é o macron: kazas (cabras) × kāzas (casamento).',
    },
    {
      id: 'i-ii',
      name: 'i curto × ī longo',
      sounds: ['i', 'iː'],
      tip: 'O «ī» é um «i» esticado, sem virar ditongo. Conte mentalmente «um» no «i» e «um, dois» no «ī»: pile (gota) × pīle (pato).',
    },
    {
      id: 'u-uu',
      name: 'u curto × ū longo',
      sounds: ['u', 'uː'],
      tip: 'O mesmo vale para o «u»: o «ū» dura mais, com os lábios firmes em bico até o fim. lupa (lupa, lente) × lūpa (lábio).',
    },
    {
      id: 'e-ee',
      name: 'e curto × ē longo',
      sounds: ['e', 'eː'],
      tip: 'Um só traço separa verbos inteiros: mest (atirar) × mēst (varrer). E o «nē» longo é o «não!» de resposta, enquanto o «ne» curto é o «não» que vai grudado no verbo ou antes de uma palavra: Nē, es neesmu mājās (Não, eu não estou em casa).',
    },
    {
      id: 'e-aberto',
      name: 'ē fechado [eː] × ē aberto [æː]',
      sounds: ['eː', 'æː'],
      tip: 'A escrita não mostra, mas o letão tem um «e» fechado, como o nosso «ê», e um «e» aberto, ainda mais aberto que o nosso «é», quase um «a». A mesma grafia pode esconder duas palavras: vēl com «é» bem aberto quer dizer «ainda; mais»; vēl com «ê» fechado quer dizer «deseja». Na dúvida, o dicionário e o ouvido ensinam, palavra por palavra.',
    },
    {
      id: 'ie-ee',
      name: 'ditongo ie [iə] × ē [eː]',
      sounds: ['iə', 'eː'],
      tip: 'O «ie» não é «i» + «é»: é um ditongo que desliza do «i» para um «e» fraco e abafado, numa sílaba só. Já o «ē» é um «ê» comprido e firme. O brasileiro tende a ler «ie» como duas sílabas (li-é-ta): lieta (coisa) × lēta (barata, fem.); dziest (apagar-se, extinguir-se) × dzēst (apagar).',
    },
    {
      id: 'n-nj',
      name: 'n × ņ [ɲ]',
      sounds: ['n', 'ɲ'],
      tip: 'O «ņ» é o nosso «nh» de «banho». A vírgula embaixo da letra não é enfeite: zina (sabe) × ziņa (notícia, mensagem); mana (minha) × maņa (sentido, como os cinco sentidos).',
    },
    {
      id: 'l-lj',
      name: 'l × ļ [ʎ]',
      sounds: ['l', 'ʎ'],
      tip: 'O «ļ» é o nosso «lh» de «filho». Não troque um pelo outro: gala (do fim, genitivo de gals) × gaļa (carne).',
    },
  ],
  pairs: [
    { contrast: 'a-aa', a: ['kazas', 'cabras'], b: ['kāzas', 'casamento (a festa)'] },
    { contrast: 'a-aa', a: ['lapa', 'folha; página'], b: ['lāpa', 'tocha'] },
    { contrast: 'a-aa', a: ['sals', 'frio forte, geada'], b: ['sāls', 'sal'] },
    { contrast: 'i-ii', a: ['pile', 'gota'], b: ['pīle', 'pato'] },
    { contrast: 'i-ii', a: ['tik', 'tão, tanto'], b: ['tīk', 'agrada (em «man tīk», eu gosto)'] },
    { contrast: 'u-uu', a: ['lupa', 'lupa, lente de aumento'], b: ['lūpa', 'lábio'] },
    { contrast: 'e-ee', a: ['mest', 'atirar, jogar'], b: ['mēst', 'varrer'] },
    { contrast: 'e-ee', a: ['ne', 'não (antes do verbo ou da palavra)'], b: ['nē', 'não! (resposta)'] },
    { contrast: 'e-aberto', a: ['vēl', 'deseja (com «ê» fechado)'], b: ['vēl', 'ainda; mais (com «é» bem aberto)'] },
    { contrast: 'ie-ee', a: ['lieta', 'coisa'], b: ['lēta', 'barata (fem.)'] },
    { contrast: 'ie-ee', a: ['dziest', 'apagar-se, extinguir-se'], b: ['dzēst', 'apagar'] },
    { contrast: 'n-nj', a: ['zina', 'sabe'], b: ['ziņa', 'notícia, mensagem'] },
    { contrast: 'n-nj', a: ['mana', 'minha'], b: ['maņa', 'sentido (visão, olfato…)'] },
    { contrast: 'l-lj', a: ['gala', 'do fim (genitivo de gals)'], b: ['gaļa', 'carne'] },
  ],
  sameSound: [
    { words: [['kāds', 'algum; que tipo de'], ['kāts', 'cabo (de ferramenta), talo']], note: 'Antes do «s» final, o «d» perde a voz e soa «t»: as duas palavras soam [kaːts].' },
  ],
};
