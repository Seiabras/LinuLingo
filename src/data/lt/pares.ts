import type { MinimalPairs } from '../types';

/** Pares mínimos do lituano para quem fala português (pronúncia de referência: o lituano padrão, a bendrinė kalba). */
export const PARES_LT: MinimalPairs = {
  contrasts: [
    {
      id: 'i-y',
      name: 'i curto × y longo',
      sounds: ['ɪ', 'iː'],
      tip: 'Em lituano, o comprimento da vogal muda a palavra. O «i» é curto e um pouco aberto, quase um «ê» rápido; o «y» (e também o «į») é um «i» esticado, com o sorriso bem aberto: linas (linho) × lynas (a tenca, um peixe de lago). O brasileiro faz todas as vogais com o mesmo tamanho: conte «um» no «i» e «dois» no «y».',
    },
    {
      id: 'u-uu',
      name: 'u curto × ū longo',
      sounds: ['ʊ', 'uː'],
      tip: 'O «u» é curto e frouxo, quase um «ô» fechado e rápido; o «ū» (e o «ų») é um «u» comprido, com os lábios bem em bico: lupa (descasca) × lūpa (lábio). A barra em cima do «ū» é o aviso: segure o som.',
    },
    {
      id: 'a-aa',
      name: 'a curto × ą longo',
      sounds: ['ɐ', 'aː'],
      tip: 'O «ą» já foi uma vogal nasal, mas hoje soa só como um «a» longo, sem nada de nasal: nada do «ã» de «mãe»! O rabinho (a ogonek) mostra a história da palavra e, na prática, pede um «a» esticado: kasti (cavar) × kąsti (morder).',
    },
    {
      id: 'e-ee',
      name: 'e aberto × ė fechado',
      sounds: ['ɛ', 'eː'],
      tip: 'O «e» lituano é aberto, como o nosso «é» (e às vezes quase um «á»); o «ė» é um «ê» fechado e longo, como em «você» esticado: vesti (conduzir) × vėsti (esfriar). É o mesmo par que separa o nominativo «mergaitė» do vocativo «mergaite!», que se usa para chamar alguém.',
    },
    {
      id: 'l-lj',
      name: 'l duro × l mole',
      sounds: ['ɫ', 'lʲ'],
      tip: 'Antes de «a», «o» e «u», o «l» é duro, grosso, com o fundo da língua levantado, como o «l» de Portugal em «sal». Antes de «i» e «e» (e quando se escreve «li» antes de outra vogal), ele amolece, como o nosso «lh» leve: valo (limpa) × valio (viva!, hurra!). O «i» de «valio» fica mudo: só mostra que o «l» é mole.',
    },
    {
      id: 'tonica',
      name: 'onde cai a tônica',
      sounds: ['ˈaː', 'ɐˈa'],
      tip: 'A tônica lituana é livre e móvel: pode cair em qualquer sílaba e mudar de lugar dentro da mesma palavra quando ela muda de caso. A escrita comum deixa a tônica sem marca, e por isso é o ouvido que separa as duas palavras kasa: a do cabelo, com a tônica no fim, e a do verbo cavar, com a tônica no início. Aprenda cada palavra junto com a tônica, como se aprende o gênero.',
    },
    {
      id: 'tons',
      name: 'tom agudo × tom circunflexo',
      sounds: ['â', 'ǎ'],
      tip: 'Nas sílabas longas tônicas, o lituano normativo tem dois tons: o agudo sai forte e cai (como um «Pá!» decidido), e o circunflexo sobe (como um «Hein?» de dúvida). Antis com tom agudo é o pato; com circunflexo, é o peito, o seio. Muitos lituanos, sobretudo nas cidades, quase nem fazem mais isso, e o contexto resolve; mas ela está nos dicionários e na fala cuidada.',
    },
  ],
  pairs: [
    { contrast: 'i-y', a: ['linas', 'linho'], b: ['lynas', 'tenca (um peixe)'] },
    { contrast: 'i-y', a: ['tris', 'três (acusativo)'], b: ['trys', 'três (nominativo)'] },
    { contrast: 'u-uu', a: ['lupa', 'descasca'], b: ['lūpa', 'lábio'] },
    { contrast: 'u-uu', a: ['sūnus', 'filho'], b: ['sūnūs', 'filhos'] },
    { contrast: 'a-aa', a: ['kasti', 'cavar'], b: ['kąsti', 'morder'] },
    { contrast: 'a-aa', a: ['ranka', 'a mão (nominativo)'], b: ['ranką', 'a mão (acusativo)'] },
    { contrast: 'e-ee', a: ['vesti', 'conduzir, levar'], b: ['vėsti', 'esfriar, refrescar'] },
    { contrast: 'e-ee', a: ['mergaite!', 'menina! (vocativo)'], b: ['mergaitė', 'menina (nominativo)'] },
    { contrast: 'l-lj', a: ['valo', 'limpa, arruma'], b: ['valio', 'viva!, hurra!'] },
    { contrast: 'l-lj', a: ['bala', 'poça, charco'], b: ['balia', 'bacia, tina'] },
    { contrast: 'tonica', a: ['kasa', 'trança (tônica no fim)'], b: ['kasa', 'cava (tônica no começo)'] },
    { contrast: 'tonica', a: ['galvos', 'da cabeça (tônica no fim)'], b: ['galvos', 'as cabeças (tônica no começo)'] },
    { contrast: 'tons', a: ['antis', 'pato (tom agudo)'], b: ['antis', 'peito, seio (tom circunflexo)'] },
  ],
  sameSound: [
    { words: [['lik', 'fique! (em «Lik sveikas!», adeus)'], ['lig', 'até (em «lig šiol», até agora)']], note: 'No fim da palavra, as consoantes sonoras perdem a voz: o «g» de «lig» soa como «k», e as duas soam [lʲɪk].' },
  ],
};
