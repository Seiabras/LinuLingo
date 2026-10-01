import type { GrammarTopic } from '../types';

/** Tópicos de gramática do ucraniano — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_UK: GrammarTopic[] = [
  {
    id: 'uk-g1',
    level: 'A1.1',
    title: 'O alfabeto: as letras que enganam',
    emoji: '🔤',
    summary: 'O alfabeto ucraniano tem 33 letras. Algumas parecem latinas mas soam diferente, e outras não existem no russo.',
    sections: [
      {
        text: 'Quase tudo se lê letra por letra. Cuidado com as letras que parecem conhecidas.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['В', '“v” (no fim da sílaba, quase “u”)', 'вода́ (água), Льві́в'],
            ['Н', '“n”', 'ні (não)'],
            ['Р', '“r” vibrado', 'брат (irmão)'],
            ['С', '“s”', 'сир (queijo)'],
            ['Г', '“h” com voz', 'годи́на (hora)'],
            ['И', '“i” curto e aberto', 'ти (você)'],
            ['І', '“i” de “ilha”', 'кіт (gato)'],
            ['Ї / Є', '“ii” / “ié”', 'украї́нська, моє́'],
          ],
        },
        examples: [
          ['Приві́т!', 'Oi!'],
          ['Молоко́ бі́ле.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “Г” como “g”: “годи́на” soa com um “h” sonoro.',
      'Confundir “и” e “і”: “ти” (você) tem o “i” aberto, “ні” (não) tem o “i” de “ilha”.',
      'Ler o “Р” como “p” e o “С” como “c”: são o nosso “r” e o nosso “s”.',
    ],
    quiz: [
      { question: 'Como soa o “Г” de “годи́на” (hora)?', options: ['como um “h” sonoro', 'como o “g” de “gato”', 'como o “r” de “caro”'], answer: 'como um “h” sonoro', explanation: 'No ucraniano o “г” é um “h” com voz; o “g” de “gato” se escreve “ґ”.' },
      { question: 'Qual palavra quer dizer “água”?', options: ['вода́', 'ві́сім', 'вона́'], answer: 'вода́', explanation: '“Вода́” é água; “ві́сім” é oito e “вона́” é ela.' },
    ],
  },
  {
    id: 'uk-g2',
    level: 'A1.1',
    title: 'Os pronomes e o “ser” que fica calado',
    emoji: '🙋',
    summary: 'Sete pronomes pessoais e um verbo “бу́ти” que quase não aparece no presente.',
    sections: [
      {
        text: 'No presente, o ucraniano não diz “sou”, “é”, “somos”: basta juntar as palavras. Por escrito, quando os dois lados são substantivos, um travessão pode marcar o lugar do verbo: “Ки́їв — вели́ке мі́сто”.',
        table: {
          head: ['Pronome', 'Tradução', 'Exemplo'],
          rows: [
            ['я', 'eu', 'Я студе́нтка.'],
            ['ти', 'tu, você', 'Ти з Оде́си?'],
            ['він / вона́ / воно́', 'ele / ela / (neutro)', 'Він зі Льво́ва.'],
            ['ми', 'nós', 'Ми дру́зі.'],
            ['ви', 'vocês; o senhor, a senhora', 'Ви з Ки́єва?'],
            ['вони́', 'eles, elas', 'Вони́ вдо́ма.'],
          ],
        },
        examples: [
          ['Я з Рі́о-де-Жане́йро.', 'Sou do Rio de Janeiro.'],
          ['Ки́їв — вели́ке мі́сто.', 'Kiev é uma cidade grande.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos, mais velhos e no trabalho, use “ви” com o verbo no plural, mesmo falando com uma pessoa só.',
        examples: [
          ['Зві́дки ви?', 'De onde o senhor é?'],
          ['Як вас зва́ти?', 'Como o senhor se chama?'],
        ],
      },
    ],
    pitfalls: ['Procurar o verbo “ser” no presente: “я студе́нтка” já é “eu sou estudante”.', 'Tratar um desconhecido por “ти”: soa íntimo demais. Use “ви”.'],
    quiz: [
      { question: 'Como se diz “Ele é de Lviv”?', options: ['Він зі Льво́ва.', 'Вона́ зі Льво́ва.', 'Він з Оде́си.'], answer: 'Він зі Льво́ва.', explanation: '“Він” é ele, e “зі Льво́ва” é “de Lviv”; no presente o verbo “ser” fica calado.' },
      { question: '“Як вас зва́ти?” é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: '“Вас” é a forma de “ви”, usada para vocês e para tratar alguém com respeito.' },
    ],
  },
  {
    id: 'uk-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e “мій / моя́ / моє́”.',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -а ou -я → feminino, -о ou -е → neutro. Palavras em -ь podem ser masculinas ou femininas e precisam ser decoradas. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com “meu”'],
          rows: [
            ['masculino', 'consoante', 'мій дім, мій брат'],
            ['feminino', '-а, -я', 'моя́ ма́ма, моя́ сім’я́'],
            ['neutro', '-о, -е', 'моє́ мі́сто, моє́ молоко́'],
          ],
        },
        examples: [
          ['Мій дім мали́й.', 'A minha casa é pequena.'],
          ['Моя́ сім’я́ вели́ка.', 'A minha família é grande.'],
        ],
      },
    ],
    pitfalls: [
      '“Дім” (casa) é masculino: “мій дім”, não “моя́ дім”.',
      '“Та́то” (pai) termina em -о mas é masculino: “мій та́то”.',
      '“Соба́ка” (cachorro) termina em -а mas, no ucraniano padrão, é masculino.',
    ],
    quiz: [
      { question: 'Qual é o gênero de “молоко́” (leite)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -о costumam ser neutras (menos nomes de homens, como “та́то”).' },
      { question: 'Como se diz “a minha irmã”?', options: ['моя́ сестра́', 'мій сестра́', 'моє́ сестра́'], answer: 'моя́ сестра́', explanation: '“Сестра́” é feminino, então o possessivo é “моя́”.' },
    ],
  },
  {
    id: 'uk-g4',
    level: 'A1.2',
    title: '“Ма́ти”, “у ме́не є” e a negação',
    emoji: '🚫',
    summary: 'Dois jeitos de dizer “ter” e a negação com “не” e “нема́є”.',
    sections: [
      {
        text: 'O ucraniano diz “ter” com o verbo “ма́ти” (я ма́ю бра́та) ou com “у ме́не є” (junto de mim há um irmão). Para negar um verbo, basta “не” antes dele. Para dizer que não tem algo, usa-se “у ме́не нема́є”, e a coisa vai para o genitivo.',
        table: {
          head: ['Pronome', 'ма́ти', 'у… є'],
          rows: [
            ['я', 'ма́ю', 'у ме́не є'],
            ['ти', 'ма́єш', 'у те́бе є'],
            ['він / вона́', 'ма́є', 'у ньо́го є / у не́ї є'],
            ['ми', 'ма́ємо', 'у нас є'],
            ['ви', 'ма́єте', 'у вас є'],
            ['вони́', 'ма́ють', 'у них є'],
          ],
        },
        examples: [
          ['У ме́не є сестра́.', 'Tenho uma irmã.'],
          ['У ме́не нема́є бра́та.', 'Não tenho irmão.'],
          ['Я не розмовля́ю німе́цькою.', 'Eu não falo alemão.'],
        ],
      },
    ],
    pitfalls: ['Pôr o “не” depois do verbo: o certo é “я не зна́ю”.', 'Dizer “у ме́не не є”: a forma negativa de “є” é “нема́є”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Я не зна́ю.', 'Я зна́ю не.', 'Не я зна́ю.'], answer: 'Я не зна́ю.', explanation: 'O “не” vem logo antes do verbo.' },
      { question: 'Complete: “У ме́не ___ брат.” (Eu tenho um irmão.)', options: ['є', 'ма́ю', 'нема́є'], answer: 'є', explanation: '“У ме́не є” quer dizer “eu tenho”.' },
    ],
  },
];
