import type { MinimalPairs } from '../types';

/**
 * Pares mínimos do espanhol para quem fala português do Brasil. As palavras entram também na
 * busca de gravações (scripts/baixar-audios.mjs), para os pares tocarem na voz de nativos.
 */
export const PARES_ES: MinimalPairs = {
  contrasts: [
    {
      id: 'r-rr',
      name: 'r × rr',
      sounds: ['ɾ', 'r'],
      tip: 'O «r» entre vogais é uma batida rápida da ponta da língua, como o «r» de «caro» em português. O «rr» (e o «r» no começo da palavra) é vibrado: a língua bate várias vezes atrás dos dentes. Não é o «rr» do Brasil, que sai na garganta.',
    },
    {
      id: 'rr-j',
      name: 'rr × j',
      sounds: ['r', 'x'],
      tip: 'A armadilha clássica do brasileiro: o nosso «rr» (de «carro») sai na garganta e soa como o «j» espanhol [x]. Em espanhol são dois sons: o «j» é na garganta, o «rr» é a língua vibrando. Com o «r» brasileiro, «barra» vira «baja».',
    },
    {
      id: 'n-nh',
      name: 'n × ñ',
      sounds: ['n', 'ɲ'],
      tip: 'O «ñ» é o nosso «nh». Na palavra conhecida é fácil; na nova, o ouvido se engana: preste atenção no meio da palavra, onde a língua encosta no céu da boca.',
    },
    {
      id: 'l-ll',
      name: 'l × ll',
      sounds: ['l', 'ʝ'],
      tip: 'Na maior parte do mundo hispânico, o «ll» soa como o «y» (yeísmo): um «i» apertado, quase um «j» suave. No Rio da Prata vira um «ch» [ʃ]. Nunca é o «lh» do português.',
    },
    {
      id: 's-z',
      name: 's × z',
      sounds: ['s', 'θ'],
      tip: 'Na Espanha (menos no sul e nas Canárias), o «z» e o «c» antes de «e» e «i» soam como o «th» do inglês [θ], e isso separa palavras: casa × caza. Na América Latina os dois são [s] (seseo), e essas palavras soam igual: o sentido vem do contexto.',
      // muitos dos falantes gravados fazem seseo: aqui vale a voz do aparelho na variante escolhida
      deviceVoice: true,
    },
  ],
  pairs: [
    { contrast: 'r-rr', a: ['pero', 'mas'], b: ['perro', 'cachorro'] },
    { contrast: 'r-rr', a: ['caro', 'caro'], b: ['carro', 'carro'] },
    { contrast: 'r-rr', a: ['para', 'para'], b: ['parra', 'parreira'] },
    { contrast: 'r-rr', a: ['coro', 'coro'], b: ['corro', 'eu corro'] },
    { contrast: 'r-rr', a: ['cero', 'zero'], b: ['cerro', 'morro'] },
    { contrast: 'r-rr', a: ['pera', 'pera'], b: ['perra', 'cadela'] },
    { contrast: 'r-rr', a: ['vara', 'vara'], b: ['barra', 'barra'] },
    { contrast: 'rr-j', a: ['barra', 'barra'], b: ['baja', 'baixa'] },
    { contrast: 'rr-j', a: ['corro', 'eu corro'], b: ['cojo', 'eu pego (na Espanha)'] },
    { contrast: 'rr-j', a: ['parra', 'parreira'], b: ['paja', 'palha'] },
    { contrast: 'rr-j', a: ['rota', 'quebrada'], b: ['jota', 'jota (a letra j)'] },
    { contrast: 'n-nh', a: ['pena', 'pena, dó'], b: ['peña', 'rochedo'] },
    { contrast: 'n-nh', a: ['cana', 'cabelo branco'], b: ['caña', 'cana'] },
    { contrast: 'n-nh', a: ['sonar', 'soar'], b: ['soñar', 'sonhar'] },
    { contrast: 'n-nh', a: ['una', 'uma'], b: ['uña', 'unha'] },
    { contrast: 'n-nh', a: ['cuna', 'berço'], b: ['cuña', 'cunha'] },
    { contrast: 'l-ll', a: ['loro', 'papagaio'], b: ['lloro', 'eu choro'] },
    { contrast: 'l-ll', a: ['lama', 'lodo'], b: ['llama', 'chama; lhama'] },
    { contrast: 's-z', a: ['casa', 'casa'], b: ['caza', 'caça'] },
    { contrast: 's-z', a: ['coser', 'costurar'], b: ['cocer', 'cozinhar'] },
    { contrast: 's-z', a: ['masa', 'massa'], b: ['maza', 'clava, maça'] },
    { contrast: 's-z', a: ['sien', 'têmpora'], b: ['cien', 'cem'] },
    { contrast: 's-z', a: ['siervo', 'servo'], b: ['ciervo', 'cervo'] },
    { contrast: 's-z', a: ['abrasar', 'queimar'], b: ['abrazar', 'abraçar'] },
  ],
  sameSound: [
    {
      words: [
        ['tubo', 'tubo'],
        ['tuvo', 'teve'],
      ],
      note: 'Em espanhol, «b» e «v» são o mesmo som: tubo e tuvo se pronunciam igual. Não faça o «v» do português, com os dentes no lábio.',
    },
  ],
};
