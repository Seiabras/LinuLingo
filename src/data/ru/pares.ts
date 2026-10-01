import type { MinimalPairs } from '../types';

/**
 * Pares mínimos do russo para quem fala português. As palavras entram também na busca de
 * gravações (scripts/baixar-audios.mjs). Tônica marcada só nas palavras de mais de uma sílaba.
 */
export const PARES_RU: MinimalPairs = {
  contrasts: [
    {
      id: 'dura-mole',
      name: 'consoante dura × mole',
      sounds: ['t', 'tʲ'],
      tip: 'Quase toda consoante russa tem duas versões: dura e mole (palatalizada: a língua sobe para o céu da boca, como se fosse dizer “i”). O “ь” (sinal mole) e as vogais е, ё, и, ю, я amolecem a consoante antes delas. É isso que separa брат (irmão) de брать (pegar).',
    },
    {
      id: 'y-i',
      name: 'ы × и',
      sounds: ['ɨ', 'i'],
      tip: 'O “ы” não existe em português: é um “i” com a língua puxada para trás, quase um “u” sem arredondar os lábios. Depois de consoante dura vem ы; depois de mole, и. Por isso быть (ser) e бить (bater) são palavras diferentes.',
    },
  ],
  pairs: [
    { contrast: 'dura-mole', a: ['брат', 'irmão'], b: ['брать', 'pegar'] },
    { contrast: 'dura-mole', a: ['кон', 'rodada (de um jogo)'], b: ['конь', 'cavalo'] },
    { contrast: 'dura-mole', a: ['вес', 'peso'], b: ['весь', 'todo, inteiro'] },
    { contrast: 'dura-mole', a: ['пыл', 'ardor'], b: ['пыль', 'poeira'] },
    { contrast: 'dura-mole', a: ['у́гол', 'canto, ângulo'], b: ['у́голь', 'carvão'] },
    { contrast: 'dura-mole', a: ['мат', 'xeque-mate'], b: ['мать', 'mãe'] },
    { contrast: 'dura-mole', a: ['стал', 'passou a, ficou'], b: ['сталь', 'aço'] },
    { contrast: 'dura-mole', a: ['дал', 'deu'], b: ['даль', 'lonjura'] },
    { contrast: 'dura-mole', a: ['мел', 'giz'], b: ['мель', 'baixio'] },
    { contrast: 'dura-mole', a: ['лук', 'cebola'], b: ['люк', 'escotilha'] },
    { contrast: 'dura-mole', a: ['мол', 'molhe, cais'], b: ['моль', 'traça'] },
    { contrast: 'dura-mole', a: ['рад', 'contente'], b: ['ряд', 'fileira'] },
    { contrast: 'dura-mole', a: ['нос', 'nariz'], b: ['нёс', 'carregava'] },
    { contrast: 'y-i', a: ['быть', 'ser, estar'], b: ['бить', 'bater'] },
    { contrast: 'y-i', a: ['был', 'foi, esteve'], b: ['бил', 'batia'] },
    { contrast: 'y-i', a: ['мыл', 'lavava'], b: ['мил', 'é gentil'] },
    { contrast: 'y-i', a: ['выть', 'uivar'], b: ['вить', 'trançar'] },
    { contrast: 'y-i', a: ['пыл', 'ardor'], b: ['пил', 'bebia'] },
    { contrast: 'y-i', a: ['мы́ло', 'sabão'], b: ['ми́ло', 'é fofo'] },
  ],
  sameSound: [
    {
      words: [
        ['луг', 'prado'],
        ['лук', 'cebola'],
      ],
      note: 'No fim da palavra, a consoante sonora vira surda: луг (prado) soa [luk], igual a лук (cebola). O mesmo com код × кот e пруд × прут: quem separa é o contexto.',
    },
  ],
};
