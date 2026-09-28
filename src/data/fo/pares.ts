import type { MinimalPairs } from '../types';

/** Pares mínimos do feroês para quem fala português (pronúncia de referência: a fala padrão, sem as marcas de uma ilha só). */
export const PARES_FO: MinimalPairs = {
  contrasts: [
    {
      id: 'aspiracao',
      name: 'p, t, k com sopro × b, d, g sem sopro',
      sounds: ['tʰ', 't'],
      tip: 'No feroês, o «b», o «d» e o «g» saem sem vibrar a garganta: soam quase como o nosso «p», «t», «k». Quem separa as palavras é o sopro: o «p», o «t» e o «k» do início saem com um jato de ar forte, como se você apagasse uma vela. par (par) × bar (carregou); tal (número) × dal (vale). Um «t» dito à brasileira, sem sopro, soa «d» para o feroês.',
    },
    {
      id: 'longa-curta',
      name: 'vogal longa × vogal curta com sopro antes da consoante',
      sounds: ['ɛaː', 'aʰ'],
      tip: 'Uma consoante só depois da vogal deixa a vogal longa, e o «a» longo vira um ditongo [ɛa]. Consoante dobrada deixa a vogal curta, e o «kk», o «tt» e o «pp» ganham um sopro ANTES, como um «h» escondido: tak (pegada) soa [tʰɛaːk], e takk (obrigado) soa [tʰaʰk]. Estique o primeiro; no segundo, corte a vogal e solte um ar antes do «k».',
    },
    {
      id: 'aa-a',
      name: 'á [ɔa] × a [ɛa]',
      sounds: ['ɔaː', 'ɛaː'],
      tip: 'O acento do «á» nada tem a ver com a sílaba forte: é outra vogal. O «á» longo sai de um «ó» aberto e escorrega para «a» [ɔa]; o «a» longo sai de um «é» e escorrega para «a» [ɛa]: vár (primavera) × var (era, estava); hár (cabelo) × har (ali, lá). O brasileiro tende a ler os dois como o nosso «a».',
    },
    {
      id: 'oo-o',
      name: 'ó [ɔu] × o [oː]',
      sounds: ['ɔu', 'oː'],
      tip: 'O «ó» feroês é um ditongo, quase o nosso «ou» de «vou», bem pronunciado; o «o» longo é um «ô» fechado e parado, sem escorregar: góð (boa) × goð (divindade antiga); tól (ferramenta) × tol (paciência). Nas ilhas do norte, o «ó» soa [œu], com os lábios já arredondados desde o início.',
    },
    {
      id: 'ei-ey',
      name: 'ei [ai] × ey [ɛi]',
      sounds: ['ai', 'ɛi'],
      tip: 'Duas grafias quase gêmeas que soam diferente: «ei» é o nosso «ai» de «pai»; «ey» é um «éi» como em «papéis»: reiður (bravo) × reyður (vermelho); eiga (ter, possuir) × eyga (olho). Leia «ei» sempre como «ai», nunca como o «ei» do português.',
    },
  ],
  pairs: [
    { contrast: 'aspiracao', a: ['par', 'par, dupla (com sopro)'], b: ['bar', 'carregou (sem sopro)'] },
    { contrast: 'aspiracao', a: ['tal', 'número (com sopro)'], b: ['dal', 'vale (acusativo de «dalur»; sem sopro)'] },
    { contrast: 'longa-curta', a: ['tak', 'pegada, apoio (vogal longa)'], b: ['takk', 'obrigado (vogal curta, sopro antes do «k»)'] },
    { contrast: 'longa-curta', a: ['sat', 'sentou-se, ficou sentado (vogal longa)'], b: ['satt', 'verdadeiro (neutro; vogal curta, sopro antes do «t»)'] },
    { contrast: 'aa-a', a: ['vár', 'primavera'], b: ['var', 'era, estava'] },
    { contrast: 'aa-a', a: ['hár', 'cabelo'], b: ['har', 'ali, lá'] },
    { contrast: 'oo-o', a: ['góð', 'boa'], b: ['goð', 'divindade antiga, deus pagão'] },
    { contrast: 'oo-o', a: ['tól', 'ferramenta'], b: ['tol', 'paciência'] },
    { contrast: 'ei-ey', a: ['reiður', 'bravo, zangado'], b: ['reyður', 'vermelho'] },
    { contrast: 'ei-ey', a: ['eiga', 'ter, possuir'], b: ['eyga', 'olho'] },
  ],
  sameSound: [
    { words: [['sá', 'viu (de «síggja»)'], ['sáð', 'semente']], note: 'O «ð» no fim da palavra fica mudo: as duas se dizem [sɔa].' },
    { words: [['bú', 'propriedade, casa com a lida'], ['búð', 'loja']], note: 'De novo o «ð» mudo: as duas soam [pʉu].' },
    { words: [['frí', 'folga, férias'], ['fríð', 'bonita (feminino)']], note: 'O «í» soa [ʊi], e o «ð» final some: as duas soam [fɹʊi].' },
  ],
};
