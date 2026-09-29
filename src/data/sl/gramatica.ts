import type { GrammarTopic } from '../types';

/** Tópicos de gramática do esloveno — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_SL: GrammarTopic[] = [
  {
    id: 'sl-g1',
    level: 'A1.1',
    title: 'Pronúncia: č, š, ž e o «l» que vira «u»',
    emoji: '🔤',
    summary: 'O alfabeto esloveno tem 25 letras: o latino sem q, w, x e y, mais č, š e ž.',
    sections: [
      {
        text: 'O esloveno se lê quase como se escreve. As letras com «strešica» (o chapeuzinho ˇ) têm sons de «tch», «ch» e «j», e o «j» é sempre um «i» curto.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['č', '«tch»', 'črn (preto)'],
            ['š', '«ch» de «chá»', 'šest (seis)'],
            ['ž', '«j» de «já»', 'živjo (oi)'],
            ['j', '«i» de «pai»', 'jaz (eu)'],
            ['c', '«ts»', 'konec (fim)'],
            ['l no fim da sílaba', '«u»', 'bel (branco)'],
          ],
        },
        examples: [
          ['Hvala lepa!', 'Muito obrigado!'],
          ['Lahko noč!', 'Boa noite!'],
        ],
      },
    ],
    pitfalls: ['Ler o «j» como o nosso «j»: «jaz» soa «iaz».', 'Ler o «c» como «k»: «konec» soa «kónets».'],
    quiz: [
      { question: 'Como soa o «ž» de «živjo»?', options: ['como o «j» de «já»', 'como o «z» de «zebra»', 'como o «s» de «sol»'], answer: 'como o «j» de «já»', explanation: 'O chapeuzinho transforma o «z» no som do nosso «j».' },
      { question: 'Quantas letras tem o alfabeto esloveno?', options: ['25', '30', '33'], answer: '25', explanation: 'É o alfabeto latino sem q, w, x e y, mais č, š e ž.' },
    ],
  },
  {
    id: 'sl-g2',
    level: 'A1.1',
    title: 'Os pronomes, o verbo biti e o dual',
    emoji: '🙋',
    summary: 'O verbo «biti» (ser, estar) tem formas para um, para dois e para vários.',
    sections: [
      {
        text: 'O pronome costuma cair, porque o verbo já mostra a pessoa. Além do singular e do plural, o esloveno tem o dual, para exatamente duas pessoas.',
        table: {
          head: ['Pessoa', 'singular', 'dual', 'plural'],
          rows: [
            ['1ª', 'jaz sem', 'midva sva', 'mi smo'],
            ['2ª', 'ti si', 'vidva sta', 'vi ste'],
            ['3ª', 'on / ona je', 'onadva sta', 'oni so'],
          ],
        },
        examples: [
          ['Sem iz São Paula.', 'Sou de São Paulo.'],
          ['Midva sva prijatelja.', 'Nós dois somos amigos.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos e no trabalho, o esloveno usa «vi», com o verbo no plural, mesmo para uma pessoa só.',
        examples: [
          ['Kako ste?', 'Como vai o senhor / a senhora?'],
          ['Od kod ste?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Usar o plural para duas pessoas: para «nós dois», o certo é «midva sva», não «mi smo».', 'Tratar um desconhecido por «ti»: soa íntimo demais. Use «vi».'],
    quiz: [
      { question: 'Complete: «___ iz Curitibe.» (Eu sou de Curitiba.)', options: ['Sem', 'Je', 'Si'], answer: 'Sem', explanation: '«Sem» é a forma de «biti» para «jaz».' },
      { question: 'Como se diz «nós dois somos amigos»?', options: ['Midva sva prijatelja.', 'Mi smo prijatelj.', 'Jaz sem prijatelja.'], answer: 'Midva sva prijatelja.', explanation: 'Para duas pessoas, o esloveno usa o dual: «midva sva».' },
    ],
  },
  {
    id: 'sl-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e «moj / moja / moje».',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -a → feminino, -o ou -e → neutro. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com «meu»'],
          rows: [
            ['masculino', 'consoante', 'moj brat, moj kruh'],
            ['feminino', '-a', 'moja hiša, moja sestra'],
            ['neutro', '-o, -e', 'moje mesto, moje ime'],
          ],
        },
        examples: [
          ['Moja hiša je majhna.', 'A minha casa é pequena.'],
          ['Moj oče je iz Ljubljane.', 'O meu pai é de Liubliana.'],
        ],
      },
    ],
    pitfalls: ['«Oče» (pai) termina em -e mas é masculino: «moj oče».', '«Mačka» (gato) é feminino: «mačka je črna».'],
    quiz: [
      { question: 'Qual é o gênero de «mleko» (leite)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -o costumam ser neutras.' },
      { question: 'Como se diz «o meu pai»?', options: ['moj oče', 'moja oče', 'moje oče'], answer: 'moj oče', explanation: '«Oče» é masculino, apesar do -e no fim.' },
    ],
  },
  {
    id: 'sl-g4',
    level: 'A1.2',
    title: 'O verbo imeti e a negação',
    emoji: '🚫',
    summary: '«Imeti» (ter) no presente e a negação: «ne» antes do verbo, com «nimam» e «nisem» como formas próprias.',
    sections: [
      {
        text: 'Para negar, «ne» vem antes do verbo: «ne vem» (não sei). «Imeti» e «biti» têm negação própria, numa palavra só: «nimam», «nisem». Depois de um verbo negado, o objeto vai para o genitivo: «imam sestro» → «nimam sestre».',
        table: {
          head: ['Pronome', 'imeti', 'negativo'],
          rows: [
            ['jaz', 'imam', 'nimam'],
            ['ti', 'imaš', 'nimaš'],
            ['on / ona', 'ima', 'nima'],
            ['mi', 'imamo', 'nimamo'],
            ['vi', 'imate', 'nimate'],
            ['oni', 'imajo', 'nimajo'],
          ],
        },
        examples: [
          ['Imam sestro.', 'Tenho uma irmã.'],
          ['Nimam brata.', 'Não tenho irmão.'],
          ['Nisem iz Maribora.', 'Não sou de Maribor.'],
        ],
      },
    ],
    pitfalls: ['Dizer «ne imam»: o certo é «nimam».', 'Dizer «ne sem»: o certo é «nisem».'],
    quiz: [
      { question: 'Como se diz «eu não tenho irmão»?', options: ['Nimam brata.', 'Ne imam brata.', 'Imam ne brata.'], answer: 'Nimam brata.', explanation: 'A negação de «imam» é uma palavra só: «nimam».' },
      { question: 'Complete: «On ___ sestro.» (Ele tem uma irmã.)', options: ['ima', 'imam', 'imajo'], answer: 'ima', explanation: '«Ima» é a forma de «imeti» para on / ona.' },
    ],
  },
];
