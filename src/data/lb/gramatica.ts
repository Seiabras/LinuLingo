import type { GrammarTopic } from '../types';

/** Tópicos de gramática do luxemburguês — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_LB: GrammarTopic[] = [
  {
    id: 'lb-g1',
    level: 'A1.1',
    title: 'Pronúncia: ë, é, ä e os ditongos',
    emoji: '🔤',
    summary: 'A ortografia oficial usa acentos para diferenciar vogais que o alemão escreve de um jeito só.',
    sections: [
      {
        text: 'O luxemburguês se lê de modo bem regular. Os acentos não marcam a sílaba tônica: indicam o timbre da vogal.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ë', '«e» fraco e rápido', 'Mëllech (leite)'],
            ['é', '«ê» fechado', 'Kéis (queijo), véier (quatro)'],
            ['ä', '«é» aberto', 'Äddi (tchau)'],
            ['ue', 'parecido com «ua»', 'Nuecht (noite), Duechter (filha)'],
            ['ie', 'parecido com «ia»', 'iessen (comer)'],
            ['w', '«v»', 'Waasser (água), wou (onde)'],
          ],
        },
        examples: [
          ['Gudde Moien!', 'Bom dia!'],
          ['Gutt Nuecht!', 'Boa noite!'],
        ],
      },
    ],
    pitfalls: ['Ler o «ë» como um «e» cheio: em «gëschter» ele é bem fraco.', 'Ler «ue» como duas sílabas «u-e»: em «Nuecht» é um ditongo só.'],
    quiz: [
      { question: 'Como soa o «é» de «Kéis»?', options: ['«ê» fechado', '«é» aberto', '«i»'], answer: '«ê» fechado', explanation: 'Na ortografia luxemburguesa, «é» é um «ê» fechado e «ä» é um «é» aberto.' },
      { question: 'O que quer dizer «Nuecht»?', options: ['noite', 'nada', 'nome'], answer: 'noite', explanation: '«Gutt Nuecht» é «boa noite». «Nome» é «Numm».' },
    ],
  },
  {
    id: 'lb-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo sinn',
    emoji: '🙋',
    summary: 'Os pronomes pessoais, o «Dir» de cortesia e o verbo «sinn» (ser e estar).',
    sections: [
      {
        text: 'O pronome é obrigatório, como no alemão. «Dir» com maiúscula é o tratamento formal (o senhor, a senhora) e usa a mesma forma do plural «dir».',
        table: {
          head: ['Pronome', 'Tradução', 'sinn'],
          rows: [
            ['ech', 'eu', 'sinn'],
            ['du', 'tu, você', 'bass'],
            ['hien / si / et', 'ele / ela / (neutro)', 'ass'],
            ['mir', 'nós', 'sinn'],
            ['dir / Dir', 'vocês / o senhor, a senhora', 'sidd'],
            ['si', 'eles, elas', 'sinn'],
          ],
        },
        examples: [
          ['Hien ass mäi Frënd.', 'Ele é meu amigo.'],
          ['Mir si Frënn.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Usar «du» com um desconhecido mais velho: o normal é «Dir».', 'Esquecer que «si» pode ser «ela» ou «eles»: o verbo mostra qual é («si ass» = ela é; «si sinn» = eles são).'],
    quiz: [
      { question: 'Complete: «Du ___ mäi Frënd.»', options: ['bass', 'ass', 'sidd'], answer: 'bass', explanation: '«bass» é a forma de «sinn» para «du».' },
      { question: '«Dir sidd» com maiúscula serve para…', options: ['o tratamento formal (o senhor, a senhora)', 'só para «eu»', 'só para «ela»'], answer: 'o tratamento formal (o senhor, a senhora)', explanation: '«Dir» com maiúscula é a forma de cortesia, com o verbo do plural.' },
    ],
  },
  {
    id: 'lb-g3',
    level: 'A1.2',
    title: "Den, d', en, eng e o possessivo",
    emoji: '👪',
    summary: 'Três gêneros, artigos curtos e possessivos que concordam com a coisa possuída.',
    sections: [
      {
        text: "O artigo definido é «den» no masculino e «d'» no feminino, no neutro e no plural. O indefinido é «en» no masculino e no neutro e «eng» no feminino. O possessivo «mäin/meng» (meu/minha) segue o mesmo padrão.",
        table: {
          head: ['', 'definido', 'indefinido', 'meu / minha'],
          rows: [
            ['masculino', 'den Hond', 'en Hond', 'mäin Numm'],
            ['feminino', "d'Kaz", 'eng Kaz', 'meng Mamm'],
            ['neutro', "d'Haus", 'en Haus', 'mäin Haus'],
          ],
        },
        examples: [
          ['Meng Famill ass grouss.', 'A minha família é grande.'],
          ['Mäin Haus ass kleng.', 'A minha casa é pequena.'],
        ],
      },
    ],
    pitfalls: ['Copiar o gênero do português: «d\'Haus» (a casa) é neutro e «d\'Kaz» (o gato) é feminino.', 'Esquecer a regra do n também nos artigos e possessivos: «de Papp», «mäi Papp».'],
    quiz: [
      { question: 'Como se diz «minha mãe»?', options: ['meng Mamm', 'mäin Mamm', "d'meng Mamm"], answer: 'meng Mamm', explanation: '«Mamm» é feminino, então o possessivo é «meng», sem artigo.' },
      { question: 'Qual é o artigo definido de «Kaz» (gato)?', options: ["d'", 'den', 'eng'], answer: "d'", explanation: "«Kaz» é feminino: d'Kaz." },
    ],
  },
  {
    id: 'lb-g4',
    level: 'A1.2',
    title: 'O verbo hunn, a negação e a regra do n',
    emoji: '🚫',
    summary: '«hunn» (ter), a negação com «net» e «keen/keng», e a regra que apaga o -n final.',
    sections: [
      {
        text: '«net» nega o verbo e costuma vir no fim: «Ech weess et net» (não sei). «keen» (masculino e neutro) e «keng» (feminino e plural) negam um substantivo: «Ech hu keng Kaz» (não tenho gato).',
        table: {
          head: ['Pronome', 'hunn', 'negativo com keng'],
          rows: [
            ['ech', 'hunn', 'hu keng Kaz'],
            ['du', 'hues', 'hues keng Kaz'],
            ['hien / si / et', 'huet', 'huet keng Kaz'],
            ['mir', 'hunn', 'hu keng Kaz'],
            ['dir / Dir', 'hutt', 'hutt keng Kaz'],
            ['si', 'hunn', 'hu keng Kaz'],
          ],
        },
      },
      {
        heading: 'A regra do n (Eifeler Regel)',
        text: 'O -n no fim de uma palavra cai quando a palavra seguinte começa com consoante, a não ser que seja n, d, t, z ou h. Antes de vogal, o -n fica. A regra aparece na escrita.',
        examples: [
          ['Ech hunn en Hond. / Ech hunn e Brudder.', 'Tenho um cachorro. / Tenho um irmão.'],
          ['Ech drénke Waasser.', 'Eu bebo água.'],
          ['Ech wunnen zu Porto Alegre.', 'Eu moro em Porto Alegre.'],
          ['Brout a Kéis.', 'Pão e queijo.'],
        ],
      },
    ],
    pitfalls: ['Escrever sempre o -n: «Ech drénken Waasser» está errado; o certo é «Ech drénke Waasser».', 'Pôr «net» antes do verbo como o «não» português: «Ech net weess» está errado.'],
    quiz: [
      { question: 'Complete: «Ech ___ Waasser.»', options: ['drénke', 'drénken', 'drénk'], answer: 'drénke', explanation: 'O -n cai antes do «W» de «Waasser»: é a regra do n.' },
      { question: 'Como se diz «eu não tenho gato»?', options: ['Ech hu keng Kaz.', 'Ech hunn net eng Kaz.', 'Ech net hunn Kaz.'], answer: 'Ech hu keng Kaz.', explanation: 'Para negar um substantivo usa-se «keng» (feminino); e «hunn» vira «hu» antes do «k».' },
    ],
  },
];
