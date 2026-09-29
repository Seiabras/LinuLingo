import type { GrammarTopic } from '../types';

/** Tópicos de gramática do eslovaco — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_SK: GrammarTopic[] = [
  {
    id: 'sk-g1',
    level: 'A1.1',
    title: 'Pronúncia: mäkčeň, dĺžeň e ditongos',
    emoji: '🔤',
    summary: 'O eslovaco se lê como se escreve. O «mäkčeň» (ˇ) amacia a consoante e o «dĺžeň» (´) deixa a vogal longa.',
    sections: [
      {
        text: 'A tônica cai sempre na primeira sílaba. O acento agudo não marca a tônica: só alonga a vogal.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['č', '«tch» de «tchau»', 'čierny (preto)'],
            ['š', '«ch» de «chá»', 'šesť (seis)'],
            ['ž', '«j» de «já»', 'žena (mulher)'],
            ['ľ', '«lh»', 'veľmi (muito)'],
            ['ň', '«nh»', 'deň (dia)'],
            ['ô', '«uo»', 'môj (meu)'],
            ['c', '«ts»', 'otec (pai)'],
          ],
        },
        examples: [
          ['Ďakujem veľmi pekne!', 'Muito obrigado!'],
          ['Mlieko je biele.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o acento agudo como tônica: em «kamarát» a tônica é o KA, e o «á» só é mais longo.',
      'Ler o «c» como «k»: «otec» soa «ótets».',
      'Ler «ie» e «ia» em duas sílabas: «chlieb» tem uma sílaba só.',
    ],
    quiz: [
      { question: 'Em que sílaba cai a tônica de «kamarátka» (amiga)?', options: ['na primeira: KA-ma-rát-ka', 'na terceira: ka-ma-RÁT-ka', 'na última: ka-ma-rát-KA'], answer: 'na primeira: KA-ma-rát-ka', explanation: 'No eslovaco a tônica cai sempre na primeira sílaba.' },
      { question: 'Como soa o «ľ» de «veľmi» (muito)?', options: ['como «lh»', 'como «l» + «i»', 'como «u»'], answer: 'como «lh»', explanation: 'O «mäkčeň» amacia o l, e o som fica parecido com o nosso «lh».' },
    ],
  },
  {
    id: 'sk-g2',
    level: 'A1.1',
    title: 'Os pronomes, o verbo byť e o «vy» formal',
    emoji: '🙋',
    summary: 'Seis pronomes, um verbo para ser e estar e o tratamento formal com «vy».',
    sections: [
      {
        text: '«Byť» cobre o nosso ser e o nosso estar. Como a terminação já mostra a pessoa, o pronome costuma ficar de fora: «som zo São Paula» (sou de São Paulo).',
        table: {
          head: ['Pronome', 'Tradução', 'byť'],
          rows: [
            ['ja', 'eu', 'som'],
            ['ty', 'tu, você', 'si'],
            ['on / ona / ono', 'ele / ela / (neutro)', 'je'],
            ['my', 'nós', 'sme'],
            ['vy', 'vocês; o senhor, a senhora', 'ste'],
            ['oni / ony', 'eles / elas', 'sú'],
          ],
        },
        examples: [
          ['Som zo São Paula.', 'Sou de São Paulo.'],
          ['My sme kamaráti.', 'Nós somos amigos.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos e no trabalho, o eslovaco usa «vy», com o verbo no plural, mesmo para uma pessoa só.',
        examples: [
          ['Ako sa máte?', 'Como vai o senhor / a senhora?'],
          ['Odkiaľ ste?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Tratar um desconhecido por «ty»: soa íntimo demais. Use «vy».', 'Confundir «si» (você é) com o «si» do português: em eslovaco é o verbo «byť».'],
    quiz: [
      { question: 'Complete: «___ z Curitiby.» (Eu sou de Curitiba.)', options: ['Som', 'Je', 'Si'], answer: 'Som', explanation: '«Som» é a forma de «byť» para «ja»; o pronome pode ficar de fora.' },
      { question: '«Ako sa máte?» é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: 'O verbo no plural, com «vy», serve para vocês e para tratar uma pessoa com respeito.' },
    ],
  },
  {
    id: 'sk-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e «môj / moja / moje».',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -a → feminino, -o → neutro. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com «meu»'],
          rows: [
            ['masculino', 'consoante', 'môj dom, môj brat'],
            ['feminino', '-a', 'moja mama, moja sestra'],
            ['neutro', '-o', 'moje mlieko, moje meno'],
          ],
        },
        examples: [
          ['Môj dom je malý.', 'A minha casa é pequena.'],
          ['Moja rodina je veľká.', 'A minha família é grande.'],
        ],
      },
    ],
    pitfalls: [
      '«Dom» (casa) é masculino: «môj dom», não «moja dom».',
      '«Mačka» (gato) é feminino em eslovaco: «mačka je čierna».',
    ],
    quiz: [
      { question: 'Qual é o gênero de «víno» (vinho)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -o costumam ser neutras.' },
      { question: 'Como se diz «a minha irmã»?', options: ['moja sestra', 'môj sestra', 'moje sestra'], answer: 'moja sestra', explanation: '«Sestra» é feminino, então o possessivo é «moja».' },
    ],
  },
  {
    id: 'sk-g4',
    level: 'A1.2',
    title: 'O verbo mať e a negação',
    emoji: '🚫',
    summary: '«Mať» (ter) no presente e a negação: «ne-» grudado no verbo, «nie» separado com «byť».',
    sections: [
      {
        text: 'Para negar, o eslovaco gruda «ne-» no começo do verbo: «mám» → «nemám», «viem» → «neviem». Com «byť» a negação é separada: «nie som», «nie si», «nie je».',
        table: {
          head: ['Pronome', 'mať', 'negativo'],
          rows: [
            ['ja', 'mám', 'nemám'],
            ['ty', 'máš', 'nemáš'],
            ['on / ona', 'má', 'nemá'],
            ['my', 'máme', 'nemáme'],
            ['vy', 'máte', 'nemáte'],
            ['oni / ony', 'majú', 'nemajú'],
          ],
        },
        examples: [
          ['Mám brata.', 'Tenho um irmão.'],
          ['Nehovorím po nemecky.', 'Eu não falo alemão.'],
          ['Nie som z Bratislavy.', 'Não sou de Bratislava.'],
        ],
      },
    ],
    pitfalls: ['Escrever «ne» separado dos verbos comuns: o certo é «neviem», tudo junto.', 'Grudar a negação em «byť»: o certo é «nie som», separado.'],
    quiz: [
      { question: 'Como se diz «eu não sei»?', options: ['Neviem.', 'Ne viem.', 'Viem nie.'], answer: 'Neviem.', explanation: 'O «ne-» vem grudado no verbo.' },
      { question: 'Como se diz «eu não sou de Košice»?', options: ['Nie som z Košíc.', 'Nesom z Košíc.', 'Som nie z Košíc.'], answer: 'Nie som z Košíc.', explanation: 'Com o verbo «byť», a negação «nie» vem separada.' },
    ],
  },
];
