import type { MinimalPairs } from '../types';

/**
 * Pares mínimos do francês para quem fala português. As palavras entram também na busca de
 * gravações (scripts/baixar-audios.mjs).
 */
export const PARES_FR: MinimalPairs = {
  contrasts: [
    {
      id: 'y-u',
      name: 'u × ou',
      sounds: ['y', 'u'],
      tip: 'O “u” francês [y] não existe em português: faça um “i” e, sem mexer a língua, arredonde os lábios como para assobiar. O “ou” [u] é o nosso “u”. É isso que separa tu (você) de tout (tudo), e rue (rua) de roue (roda). Se o seu “u” sair igual ao nosso, você diz outra palavra.',
    },
    {
      id: 'an-on',
      name: 'an × on (nasais)',
      sounds: ['ɑ̃', 'ɔ̃'],
      tip: 'O francês tem quatro vogais nasais, e não se fecha a boca com “m” ou “n” no fim: o ar sai pelo nariz e acabou. O “an/en” [ɑ̃] é um “ã” bem aberto, com a boca como para “a”; o “on” [ɔ̃] é feito com os lábios redondos, como para “ô”. Vent (vento) × vont (vão).',
    },
    {
      id: 'in-an',
      name: 'in × an (nasais)',
      sounds: ['ɛ̃', 'ɑ̃'],
      tip: 'O “in/ain/ein” [ɛ̃] é um “é” aberto nasalizado — mais aberto que o “im” de “sim” e sem o “i” no fim. O “an/en” [ɑ̃] é um “ã” de boca bem aberta. Vin (vinho) × vent (vento): a diferença está só na abertura da boca.',
    },
    {
      id: 'e-ɛ',
      name: 'é × è',
      sounds: ['e', 'ɛ'],
      tip: 'Como o nosso “ê” fechado (de “você”) e o “é” aberto (de “café”). Em português, trocar um pelo outro raramente muda a palavra; em francês, muda: et (e) × est (é), les (os, as) × lait (leite). Regra de bolso: “é”, “-er”, “-ez” e “et” são fechados; “è”, “ê”, “ai” e “-et” costumam ser abertos.',
    },
    {
      id: 'ø-œ',
      name: 'eu fechado × eu aberto',
      sounds: ['ø', 'œ'],
      tip: 'Os dois não existem em português. Para o [ø] fechado de “peu”, diga “ê” e arredonde os lábios; para o [œ] aberto de “peur”, diga “é” e arredonde os lábios. Em geral, o fechado vem no fim da sílaba (deux, peu, des œufs) e o aberto vem antes de uma consoante pronunciada (jeune, peur, un œuf).',
    },
    {
      id: 'ə-e',
      name: 'e mudo × é',
      sounds: ['ə', 'e'],
      tip: "O “e” sem acento no fim de sílaba é o “e mudo” [ə]: um som neutro, curtinho, com os lábios um pouco arredondados, que muitas vezes nem se pronuncia (samedi soa “sam'di”). Não o troque por “é”: le (o) é singular e les (os) é plural, je (eu) × j'ai (eu tenho). Para o brasileiro, é a diferença mais importante entre singular e plural na fala!",
    },
    {
      id: 's-z',
      name: 's × z',
      sounds: ['s', 'z'],
      tip: 'Igual ao português: “s” entre vogais soa [z] (poison, veneno) e “ss” soa [s] (poisson, peixe). O perigo é o ouvido: na liaison, o “s” final vira [z] e muda o sentido: ils sont [il sɔ̃] (eles são) × ils ont [il‿zɔ̃] (eles têm).',
    },
  ],
  pairs: [
    { contrast: 'y-u', a: ['tu', 'você'], b: ['tout', 'tudo'] },
    { contrast: 'y-u', a: ['rue', 'rua'], b: ['roue', 'roda'] },
    { contrast: 'y-u', a: ['dessus', 'em cima'], b: ['dessous', 'embaixo'] },
    { contrast: 'y-u', a: ['vu', 'visto'], b: ['vous', 'vocês; o senhor'] },
    { contrast: 'y-u', a: ['nu', 'nu'], b: ['nous', 'nós'] },
    { contrast: 'y-u', a: ['russe', 'russo'], b: ['rousse', 'ruiva'] },
    { contrast: 'y-u', a: ['pur', 'puro'], b: ['pour', 'para'] },
    { contrast: 'y-u', a: ['lu', 'lido'], b: ['loup', 'lobo'] },
    { contrast: 'y-u', a: ['bu', 'bebido'], b: ['bout', 'ponta, pedaço'] },
    { contrast: 'an-on', a: ['vent', 'vento'], b: ['vont', 'vão'] },
    { contrast: 'an-on', a: ['lent', 'lento'], b: ['long', 'comprido'] },
    { contrast: 'an-on', a: ['sans', 'sem'], b: ['son', 'som; seu'] },
    { contrast: 'an-on', a: ['blanc', 'branco'], b: ['blond', 'loiro'] },
    { contrast: 'an-on', a: ['temps', 'tempo'], b: ['thon', 'atum'] },
    { contrast: 'an-on', a: ['banc', 'banco (de sentar)'], b: ['bon', 'bom'] },
    { contrast: 'in-an', a: ['vin', 'vinho'], b: ['vent', 'vento'] },
    { contrast: 'in-an', a: ['pain', 'pão'], b: ['paon', 'pavão'] },
    { contrast: 'in-an', a: ['lin', 'linho'], b: ['lent', 'lento'] },
    { contrast: 'in-an', a: ['main', 'mão'], b: ['ment', 'mente (verbo)'] },
    { contrast: 'in-an', a: ['sain', 'saudável'], b: ['sang', 'sangue'] },
    { contrast: 'e-ɛ', a: ['et', 'e'], b: ['est', 'é'] },
    { contrast: 'e-ɛ', a: ['les', 'os, as'], b: ['lait', 'leite'] },
    { contrast: 'e-ɛ', a: ['pré', 'prado'], b: ['prêt', 'pronto'] },
    { contrast: 'e-ɛ', a: ['fée', 'fada'], b: ['fait', 'feito'] },
    { contrast: 'e-ɛ', a: ['des', 'uns, umas'], b: ['dès', 'desde'] },
    { contrast: 'ø-œ', a: ['jeûne', 'jejum'], b: ['jeune', 'jovem'] },
    { contrast: 'ø-œ', a: ['des œufs', 'ovos'], b: ['un œuf', 'um ovo'] },
    { contrast: 'ø-œ', a: ['des bœufs', 'bois'], b: ['un bœuf', 'um boi'] },
    { contrast: 'ø-œ', a: ['peu', 'pouco'], b: ['peur', 'medo'] },
    { contrast: 'ə-e', a: ['le', 'o'], b: ['les', 'os, as'] },
    { contrast: 'ə-e', a: ['de', 'de'], b: ['des', 'uns, umas'] },
    { contrast: 'ə-e', a: ['ce', 'este, esse'], b: ['ces', 'estes, esses'] },
    { contrast: 'ə-e', a: ['je', 'eu'], b: ["j'ai", 'eu tenho'] },
    { contrast: 'ə-e', a: ['me', 'me'], b: ['mes', 'meus, minhas'] },
    { contrast: 's-z', a: ['poisson', 'peixe'], b: ['poison', 'veneno'] },
    { contrast: 's-z', a: ['dessert', 'sobremesa'], b: ['désert', 'deserto'] },
    { contrast: 's-z', a: ['coussin', 'almofada'], b: ['cousin', 'primo'] },
    { contrast: 's-z', a: ['basse', 'baixa'], b: ['base', 'base'] },
    { contrast: 's-z', a: ['russe', 'russo'], b: ['ruse', 'astúcia'] },
    { contrast: 's-z', a: ['ils sont', 'eles são'], b: ['ils ont', 'eles têm'] },
  ],
  sameSound: [
    {
      words: [
        ['vin', 'vinho'],
        ['vingt', 'vinte'],
      ],
      note: 'Soam igual, [vɛ̃], e ainda há “vain” (vão, inútil) e “vint” (veio). As letras do fim não se pronunciam: quem separa é o contexto e a escrita.',
    },
    {
      words: [
        ['vert', 'verde'],
        ['verre', 'copo'],
      ],
      note: 'Os dois soam [vɛʁ], e também “ver” (minhoca) e “vers” (em direção a; verso). Um clássico dos ditados escolares franceses.',
    },
    {
      words: [
        ['mer', 'mar'],
        ['mère', 'mãe'],
      ],
      note: 'Soam igual, [mɛʁ], e também “maire” (prefeito). Repare que “mer” é feminino: la mer.',
    },
    {
      words: [
        ['sang', 'sangue'],
        ['cent', 'cem'],
      ],
      note: 'Os dois soam [sɑ̃], e também “sans” (sem). Nenhuma dessas consoantes finais se pronuncia.',
    },
  ],
};
