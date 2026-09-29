import type { GrammarTopic } from '../types';

/** Tópicos de gramática do polonês — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_PL: GrammarTopic[] = [
  {
    id: 'pl-g1',
    level: 'A1.1',
    title: 'Pronúncia: sz, cz, rz, ł e as nasais',
    emoji: '🔤',
    summary: 'O polonês se escreve com letras latinas, mas combina letras de um jeito próprio. Uma vez aprendidas as regras, a leitura é bem regular.',
    sections: [
      {
        text: 'Cada letra ou grupo de letras tem quase sempre o mesmo som. A tônica cai na penúltima sílaba em quase todas as palavras.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['sz', '«ch» de «chá»', 'proszę (por favor)'],
            ['cz', '«tch» de «tchau»', 'czarny (preto)'],
            ['rz, ż', '«j» de «já»', 'trzy (três), też (também)'],
            ['ł', '«u» de «mau»', 'mały (pequeno)'],
            ['w', '«v»', 'woda (água)'],
            ['ą, ę', 'vogais nasais («om», «em»)', 'są (são), dziękuję'],
            ['ó', '«u»', 'córka (filha)'],
          ],
        },
        examples: [
          ['Dziękuję bardzo!', 'Muito obrigado!'],
          ['Mleko jest białe.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o «w» como «u»: «woda» soa «vóda».',
      'Ler o «ł» como «l»: em «mały» ele soa como o «u» de «mau».',
      'Pôr a tônica no fim, como em «obrigado» → «dziękuJÊ»: o certo é «dzięKUję», na penúltima.',
    ],
    quiz: [
      { question: 'Como soa o «rz» de «trzy» (três)?', options: ['Como o «j» de «já»', 'Como «r» + «z»', 'Como «rr» de «carro»'], answer: 'Como o «j» de «já»', explanation: '«rz» e «ż» têm o mesmo som; depois de t, p e k ele fica surdo, como um «ch».' },
      { question: 'Em que sílaba cai a tônica de «przyjaciel» (amigo)?', options: ['na penúltima: przy-JA-ciel', 'na última: przy-ja-CIEL', 'na primeira: PRZY-ja-ciel'], answer: 'na penúltima: przy-JA-ciel', explanation: 'No polonês, a tônica cai quase sempre na penúltima sílaba.' },
    ],
  },
  {
    id: 'pl-g2',
    level: 'A1.1',
    title: 'Os pronomes, o verbo być e o «pan / pani»',
    emoji: '🙋',
    summary: 'Seis pronomes, um verbo para ser e estar e a forma educada com «pan» e «pani».',
    sections: [
      {
        text: '«Być» cobre o nosso ser e o nosso estar. Como a terminação já mostra a pessoa, o pronome costuma ficar de fora: «jestem z São Paulo» (sou de São Paulo).',
        table: {
          head: ['Pronome', 'Tradução', 'być'],
          rows: [
            ['ja', 'eu', 'jestem'],
            ['ty', 'tu, você', 'jesteś'],
            ['on / ona / ono', 'ele / ela / (neutro)', 'jest'],
            ['my', 'nós', 'jesteśmy'],
            ['wy', 'vocês', 'jesteście'],
            ['oni / one', 'eles / elas', 'są'],
          ],
        },
        examples: [
          ['Jestem z São Paulo.', 'Sou de São Paulo.'],
          ['My jesteśmy przyjaciółmi.', 'Nós somos amigos.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos, em lojas e no trabalho, não se usa «ty»: diz-se «pan» (o senhor) ou «pani» (a senhora), com o verbo na 3ª pessoa, como no «o senhor é» do português.',
        examples: [
          ['Jak się pan nazywa?', 'Como o senhor se chama?'],
          ['Czy pani jest z Warszawy?', 'A senhora é de Varsóvia?'],
        ],
      },
    ],
    pitfalls: ['Tratar um desconhecido por «ty»: em polonês isso soa íntimo demais. Use «pan» ou «pani».', '«Oni» é para grupos com pelo menos um homem; para grupos só de mulheres, crianças ou coisas, «one».'],
    quiz: [
      { question: 'Complete: «___ z Curitiby.» (Eu sou de Curitiba.)', options: ['Jestem', 'Jest', 'Jesteś'], answer: 'Jestem', explanation: '«Jestem» é a forma de «być» para «ja»; o pronome pode ficar de fora.' },
      { question: 'Como perguntar educadamente a um senhor «como o senhor se chama?»', options: ['Jak się pan nazywa?', 'Jak się nazywasz?', 'Jak masz na imię?'], answer: 'Jak się pan nazywa?', explanation: 'No tratamento formal entra «pan» e o verbo vai para a 3ª pessoa.' },
    ],
  },
  {
    id: 'pl-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e «mój / moja / moje».',
    sections: [
      {
        text: 'Olhe a última letra da palavra: consoante costuma ser masculino, -a costuma ser feminino, -o, -e e -ę são neutros. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com «meu»'],
          rows: [
            ['masculino', 'consoante', 'mój dom, mój brat'],
            ['feminino', '-a', 'moja mama, moja siostra'],
            ['neutro', '-o, -e, -ę', 'moje mleko, moje imię'],
          ],
        },
        examples: [
          ['Mój dom jest mały.', 'A minha casa é pequena.'],
          ['Moja rodzina jest duża.', 'A minha família é grande.'],
        ],
      },
    ],
    pitfalls: [
      '«Dom» (casa) é masculino, ao contrário de «casa»: «mój dom», não «moja dom».',
      'Há exceções: «tata» (pai) termina em -a mas é masculino — «mój tata».',
    ],
    quiz: [
      { question: 'Qual é o gênero de «mleko» (leite)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -o costumam ser neutras.' },
      { question: 'Como se diz «a minha irmã»?', options: ['moja siostra', 'mój siostra', 'moje siostra'], answer: 'moja siostra', explanation: '«Siostra» é feminino, então o possessivo é «moja».' },
    ],
  },
  {
    id: 'pl-g4',
    level: 'A1.2',
    title: 'O verbo mieć e a negação com «nie»',
    emoji: '🚫',
    summary: '«Mieć» (ter) no presente e a negação com «nie» antes do verbo.',
    sections: [
      {
        text: 'Para negar, põe-se «nie» antes do verbo. Depois de um verbo negado, o objeto direto passa para o genitivo: «mam siostrę» (tenho uma irmã) → «nie mam siostry» (não tenho irmã).',
        table: {
          head: ['Pronome', 'mieć', 'negativo'],
          rows: [
            ['ja', 'mam', 'nie mam'],
            ['ty', 'masz', 'nie masz'],
            ['on / ona', 'ma', 'nie ma'],
            ['my', 'mamy', 'nie mamy'],
            ['wy', 'macie', 'nie macie'],
            ['oni / one', 'mają', 'nie mają'],
          ],
        },
        examples: [
          ['Mam na imię Anna.', 'Meu nome é Anna.'],
          ['Nie mówię po niemiecku.', 'Eu não falo alemão.'],
        ],
      },
    ],
    pitfalls: ['Pôr o «nie» depois do verbo: o certo é «nie wiem», nunca «wiem nie».', 'Manter o acusativo depois da negação: «nie mam siostrę» está errado; o certo é «nie mam siostry».'],
    quiz: [
      { question: 'Como se diz «eu não sei»?', options: ['Nie wiem.', 'Wiem nie.', 'Nie jestem wiem.'], answer: 'Nie wiem.', explanation: 'O «nie» vem logo antes do verbo.' },
      { question: 'Complete: «On ___ brata.» (Ele tem um irmão.)', options: ['ma', 'mam', 'mają'], answer: 'ma', explanation: '«Ma» é a forma de «mieć» para on / ona.' },
    ],
  },
];
