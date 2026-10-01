import type { GrammarTopic } from '../types';

/** Tópicos de gramática do bielorrusso — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_BE: GrammarTopic[] = [
  {
    id: 'be-g1',
    level: 'A1.1',
    title: 'Pronúncia: ў, дз/дзь, ц/ць',
    emoji: '🔤',
    summary: 'O bielorrusso usa o alfabeto cirílico com três sinais próprios: o “ў” curto e as consoantes amolecidas “дз”/“ц”.',
    sections: [
      {
        text: 'Boa parte das letras se lê como no russo. Os sinais que mais chamam atenção são os que marcam sons “molhados” antes de i/e.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ў', 'um “u” curto, quase não silábico', 'сёння (hoje), ёсць'],
            ['дз / дзь', 'como “dj”, ou um “d” molhado', 'дзякуй (obrigado), дзе (onde)'],
            ['ц / ць', 'como “ts”, ou um “t” molhado', 'цябе (a você), быць (ser)'],
            ['г', 'som de “h” aspirado', 'горад (cidade)'],
          ],
        },
        examples: [
          ['Дзякуй за ўсё!', 'Obrigado por tudo!'],
          ['Дзе ты жывеш?', 'Onde você mora?'],
        ],
      },
    ],
    pitfalls: ['Ler “дз”/“ц” como no russo, sem o som molhado: no bielorrusso eles soam diferentes de “д”/“т”.', 'Esquecer o “ў”: ele é uma letra própria, não um “у” comum.'],
    quiz: [
      { question: 'Como soa o “дз” de “дзякуй”?', options: ['Como “dj”, molhado', 'Como “d” + “z” separados', 'Como “g”'], answer: 'Como “dj”, molhado', explanation: 'É uma consoante amolecida própria do bielorrusso.' },
      { question: 'O que quer dizer “дзе”?', options: ['onde', 'dia', 'dez'], answer: 'onde', explanation: 'É a palavra bielorrussa para “onde”, com o “дз” molhado.' },
    ],
  },
  {
    id: 'be-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo быць (ser/estar)',
    emoji: '🙋',
    summary: 'Seis pronomes e um verbo “ser/estar” que quase desaparece no presente.',
    sections: [
      {
        text: 'Como no russo, “быць” quase não aparece no presente: “я з Мінска” já quer dizer “eu sou de Minsk”, sem verbo. O pronome, porém, costuma vir dito.',
        table: {
          head: ['Pronome', 'Tradução', 'Exemplo com быць'],
          rows: [
            ['я', 'eu', 'я з Мінска'],
            ['ты', 'tu, você', 'ты з Гомеля?'],
            ['ён / яна́', 'ele / ela', 'ён з Віцебска'],
            ['мы', 'nós', 'мы сябры'],
            ['вы', 'vocês; o senhor (formal)', 'адкуль вы?'],
            ['яны́', 'eles / elas', 'яны студэнты'],
          ],
        },
        examples: [
          ['Я з Рыя-дэ-Жанэйра.', 'Sou do Rio de Janeiro.'],
          ['Мы сябры.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo para “eu sou”: no presente, o bielorrusso dispensa “быць”.', 'Confundir “вы” (vocês/formal) com o plural comum: é também a forma educada de falar com uma pessoa.'],
    quiz: [
      { question: 'Como se diz “eu sou do Rio de Janeiro”?', options: ['Я з Рыя-дэ-Жанэйра.', 'Я быць з Рыя-дэ-Жанэйра.', 'Быць я з Рыя-дэ-Жанэйра.'], answer: 'Я з Рыя-дэ-Жанэйра.', explanation: 'No presente, “быць” fica calado.' },
      { question: '“Адкуль вы?” serve para…', options: ['vocês e o tratamento formal', 'só para uma criança', 'só para si mesmo'], answer: 'vocês e o tratamento formal', explanation: '“Вы” é o plural e também a forma educada de tratar uma pessoa.' },
    ],
  },
  {
    id: 'be-g3',
    level: 'A1.2',
    title: 'Sem artigos: o que o contexto resolve',
    emoji: '👪',
    summary: 'O bielorrusso, como o russo e o ucraniano, não tem “o/a” nem “um/uma”.',
    sections: [
      {
        text: '“Дом” pode ser “casa”, “a casa” ou “uma casa”: o contexto é que diz. O possessivo concorda em gênero com a coisa possuída: “мой дом” (meu, masculino), “мая́ сям’я́” (minha, feminino).',
        table: {
          head: ['Gênero', 'Exemplo', 'Possessivo'],
          rows: [
            ['masculino', 'дом (casa)', 'мой дом'],
            ['feminino', 'сям’я́ (família)', 'мая́ сям’я́'],
            ['neutro', 'і́мя (nome)', 'маё і́мя'],
          ],
        },
        examples: [
          ['Мая́ сям’я́ вялі́кая.', 'A minha família é grande.'],
          ['Мой дом малы́.', 'A minha casa é pequena.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma palavra para “o/a”: o bielorrusso simplesmente não tem.', 'Usar o possessivo errado para o gênero: “мой” é só para masculino.'],
    quiz: [
      { question: 'Como se diz “a minha família”?', options: ['мая́ сям’я́', 'мой сям’я́', 'маё сям’я́'], answer: 'мая́ сям’я́', explanation: '“Сям’я́” é feminino, então o possessivo é “мая́”.' },
      { question: 'O bielorrusso tem artigo definido (“o/a”)?', options: ['Não', 'Sim, sempre', 'Só no plural'], answer: 'Não', explanation: 'Como o russo, o bielorrusso não usa artigos.' },
    ],
  },
  {
    id: 'be-g4',
    level: 'A1.2',
    title: 'O verbo мець (ter), ёсць (há) e a negação com не',
    emoji: '🤲',
    summary: '“Мець” é ter; “ёсць” marca que algo existe; “не” nega o verbo.',
    sections: [
      {
        text: 'Para dizer que alguém tem algo, o bielorrusso costuma usar “у мяне́ ёсць…” (literalmente “em mim há…”), não “мець” sozinho. Para negar, “не” vem antes do verbo.',
        table: {
          head: ['Afirmativa', 'Negativa', 'Tradução'],
          rows: [
            ['я ве́даю', 'я не ве́даю', 'eu (não) sei'],
            ['у мяне́ ёсць брат', 'у мяне́ няма́ бра́та', 'eu (não) tenho irmão'],
          ],
        },
        examples: [
          ['У мяне́ ёсць сястра́.', 'Eu tenho uma irmã.'],
          ['Я не ве́даю.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Usar “мець” onde o natural é “у мяне́ ёсць”: as duas existem, mas “у мяне́ ёсць” é muito mais comum no dia a dia.', 'Esquecer que a negação de “ёсць” é “няма́”, não “не ёсць”.'],
    quiz: [
      { question: 'Como se diz “eu tenho uma irmã”?', options: ['У мяне́ ёсць сястра́.', 'Я мець сястра́.', 'Сястра́ у мяне́.'], answer: 'У мяне́ ёсць сястра́.', explanation: '“У мяне́ ёсць…” é o jeito comum de dizer que se tem algo.' },
      { question: 'Como se diz “eu não sei”?', options: ['Я не ве́даю.', 'Не я ве́даю.', 'Я ве́даю не.'], answer: 'Я не ве́даю.', explanation: '“Не” vem logo antes do verbo.' },
    ],
  },
];
