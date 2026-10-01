import type { MinimalPairs } from '../types';

/** Pares mínimos do dinamarquês para quem fala português (pronúncia de referência: o rigsdansk, a fala padrão de Copenhague). */
export const PARES_DA: MinimalPairs = {
  contrasts: [
    {
      id: 'stod',
      name: 'com stød × sem stød',
      sounds: ['nˀ', 'n'],
      tip: 'O stød é um “soluço” rápido, uma trava da garganta no meio da sílaba, como a trava entre as duas partes de um “ô-ô!” de susto. Ele sozinho separa palavras: hund (cachorro, com stød) × hun (ela, sem stød). O português nunca usa isso, e de início o ouvido do brasileiro nem repara: escute a voz que “range” e se corta, e nunca apenas a vogal.',
    },
    {
      id: 'd-t',
      name: 'd × t no começo da palavra',
      sounds: ['d̥', 'tˢ'],
      tip: 'O “d” dinamarquês no início da palavra é surdo, sem a garganta vibrar, e soa quase como o nosso “t”. O “t” dinamarquês vem com um sopro forte, quase um “ts”: dag (dia) × tag (telhado). Se você falar o “t” à brasileira, o dinamarquês pode ouvir “d”.',
    },
    {
      id: 'd-suave',
      name: 'd suave [ð̞] × l',
      sounds: ['ð̞', 'l'],
      tip: 'Depois de vogal, o “d” costuma virar o famoso “d suave” (blødt d): a ponta da língua fica relaxada atrás dos dentes de baixo, e o som sai frouxo, entre o “th” do inglês “the” e um “l” sem encostar a língua. O brasileiro tende a ouvir “l”: hed (quente) × hel (inteiro).',
    },
    {
      id: 'e-i',
      name: 'e [eː] × i [iː]',
      sounds: ['eː', 'iː'],
      tip: 'O “e” longo dinamarquês é bem fechado, quase um “i”; o “i” é ainda mais fechado e esticado: bede (pedir; rezar) × bide (morder). Sorria de leve e feche a boca um pouco mais para o “i”.',
    },
    {
      id: 'e-ae',
      name: 'e [eː] × æ [ɛː]',
      sounds: ['eː', 'ɛː'],
      tip: 'O “e” longo soa como um “ê” bem fechado; o “æ” soa como o nosso “é”: le (rir) × læ (abrigo do vento); hel (inteiro) × hæl (calcanhar).',
    },
    {
      id: 'y-i',
      name: 'y [y] × i',
      sounds: ['yː', 'iː'],
      tip: 'O “y” é um “i” com os lábios em bico, como o “u” do francês: ny (novo) × ni (nove); syv (sete) × siv (junco).',
    },
    {
      id: 'oe-o',
      name: 'ø × o',
      sounds: ['ø', 'o'],
      tip: 'O “ø” é um “ê” com os lábios em bico; o “o” é arredondado e bem fechado, quase um “u”: møde × mode; bønne × bonde (com o “d” mudo).',
    },
  ],
  pairs: [
    { contrast: 'stod', a: ['hund', 'cachorro (com stød)'], b: ['hun', 'ela (sem stød)'] },
    { contrast: 'stod', a: ['mand', 'homem (com stød)'], b: ['man', 'a gente, se (sem stød)'] },
    { contrast: 'stod', a: ['anden', 'a pata (com stød)'], b: ['anden', 'o outro; o segundo (sem stød)'] },
    { contrast: 'stod', a: ['læser', 'lê (com stød)'], b: ['læser', 'leitor (sem stød)'] },
    { contrast: 'd-t', a: ['dag', 'dia'], b: ['tag', 'telhado'] },
    { contrast: 'd-t', a: ['dal', 'vale'], b: ['tal', 'número'] },
    { contrast: 'd-suave', a: ['hed', 'quente'], b: ['hel', 'inteiro'] },
    { contrast: 'd-suave', a: ['bad', 'banho'], b: ['bal', 'baile'] },
    { contrast: 'e-i', a: ['bede', 'pedir; rezar'], b: ['bide', 'morder'] },
    { contrast: 'e-i', a: ['lede', 'procurar'], b: ['lide', 'sofrer'] },
    { contrast: 'e-ae', a: ['le', 'rir'], b: ['læ', 'abrigo do vento'] },
    { contrast: 'e-ae', a: ['hel', 'inteiro'], b: ['hæl', 'calcanhar'] },
    { contrast: 'y-i', a: ['ny', 'novo'], b: ['ni', 'nove'] },
    { contrast: 'y-i', a: ['syv', 'sete'], b: ['siv', 'junco'] },
    { contrast: 'oe-o', a: ['møde', 'reunião'], b: ['mode', 'moda'] },
    { contrast: 'oe-o', a: ['bønne', 'feijão'], b: ['bonde', 'camponês'] },
  ],
  sameSound: [
    { words: [['hvid', 'branco'], ['vid', 'largo, amplo']], note: 'O “h” antes de “v” é mudo, e o “d” final é suave: as duas palavras soam iguais, com stød.' },
    { words: [['hjul', 'roda'], ['jul', 'Natal']], note: 'O “h” antes de “j” também é mudo: as duas soam [juːˀl].' },
    { words: [['halv', 'meio, metade'], ['hal', 'sala grande, ginásio']], note: 'O “v” depois de “l” é mudo em “halv”: as duas soam [halˀ].' },
  ],
};
