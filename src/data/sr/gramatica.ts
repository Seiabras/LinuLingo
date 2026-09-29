import type { GrammarTopic } from '../types';

/** Tópicos de gramática do sérvio — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_SR: GrammarTopic[] = [
  {
    id: 'sr-g1',
    level: 'A1.1',
    title: 'Dois alfabetos, um som por letra',
    emoji: '🔤',
    summary: 'O sérvio tem 30 letras, em cirílico e em latim. Cada letra tem um som só, e a conversão entre os dois alfabetos é automática.',
    sections: [
      {
        text: 'Graças à reforma de Vuk Karadžić, lê-se exatamente o que está escrito. As letras próprias do sérvio são Ђ, Ј, Љ, Њ, Ћ e Џ.',
        table: {
          head: ['Cirílico', 'Latino', 'Som'],
          rows: [
            ['Ј ј', 'J j', '«i» curto de «pai»'],
            ['Љ љ', 'Lj lj', '«lh»'],
            ['Њ њ', 'Nj nj', '«nh»'],
            ['Ч ч', 'Č č', '«tch» duro'],
            ['Ћ ћ', 'Ć ć', '«tch» macio'],
            ['Џ џ', 'Dž dž', '«dj» duro'],
            ['Ђ ђ', 'Đ đ', '«dj» macio'],
            ['Ш ш / Ж ж', 'Š š / Ž ž', '«ch» / «j»'],
          ],
        },
        examples: [
          ['Хвала лепо!', 'Muito obrigado! (latino: Hvala lepo!)'],
          ['Лаку ноћ!', 'Boa noite! (latino: Laku noć!)'],
        ],
      },
    ],
    pitfalls: [
      'Ler o «Ј» cirílico como o nosso «j»: soa como o «i» de «pai» — «ја» é «iá».',
      'Ler o «Р», «С» e «Н» cirílicos como p, c e h: são r, s e n.',
      'Esperar uma vogal em «црн» ou «четвртак»: o «р» faz o papel de vogal.',
    ],
    quiz: [
      { question: 'Como se escreve «хвала» no alfabeto latino?', options: ['hvala', 'xbala', 'hbala'], answer: 'hvala', explanation: 'Х = h, В = v, А = a, Л = l.' },
      { question: 'Como soa o «Ј» de «ја» (eu)?', options: ['como o «i» de «pai»', 'como o «j» de «já»', 'como o «g» de «gato»'], answer: 'como o «i» de «pai»', explanation: '«Ја» soa «iá».' },
    ],
  },
  {
    id: 'sr-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo бити',
    emoji: '🙋',
    summary: 'Sete pronomes, as formas curtas de «бити» (ser, estar) e o tratamento formal com «ви».',
    sections: [
      {
        text: 'No presente, «бити» tem formas curtas e átonas: «сам», «си», «је»… Elas não podem abrir a frase: vem antes o pronome ou outra palavra.',
        table: {
          head: ['Pronome', 'Tradução', 'бити'],
          rows: [
            ['ја', 'eu', 'сам'],
            ['ти', 'tu, você', 'си'],
            ['он / она / оно', 'ele / ela / (neutro)', 'је'],
            ['ми', 'nós', 'смо'],
            ['ви', 'vocês; o senhor, a senhora', 'сте'],
            ['они / оне', 'eles / elas', 'су'],
          ],
        },
        examples: [
          ['Ја сам из Сао Паула.', 'Sou de São Paulo.'],
          ['Из Београда сам.', 'Sou de Belgrado.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos, mais velhos e no trabalho, use «ви» com o verbo no plural, mesmo falando com uma pessoa só.',
        examples: [
          ['Како сте?', 'Como vai o senhor / a senhora?'],
          ['Одакле сте?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Começar a frase com «сам»: diga «Ја сам…» ou «Из Београда сам».', 'Tratar um desconhecido por «ти»: soa íntimo demais. Use «ви».'],
    quiz: [
      { question: 'Complete: «Ја ___ из Куритибе.» (Eu sou de Curitiba.)', options: ['сам', 'је', 'си'], answer: 'сам', explanation: '«Сам» é a forma curta de «бити» para «ја».' },
      { question: '«Како сте?» é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: '«Сте» é a forma de «ви», usada para vocês e para tratar alguém com respeito.' },
    ],
  },
  {
    id: 'sr-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e «мој / моја / моје».',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -а → feminino, -о ou -е → neutro. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com «meu»'],
          rows: [
            ['masculino', 'consoante', 'мој град, мој брат'],
            ['feminino', '-а', 'моја кућа, моја сестра'],
            ['neutro', '-о, -е', 'моје млеко, моје име'],
          ],
        },
        examples: [
          ['Моја кућа је мала.', 'A minha casa é pequena.'],
          ['Мој отац је из Новог Сада.', 'O meu pai é de Novi Sad.'],
        ],
      },
    ],
    pitfalls: [
      '«Мачка» (gato) é feminino: «мачка је црна».',
      '«Град» (cidade) é masculino: «велики град», não «велика град».',
    ],
    quiz: [
      { question: 'Qual é o gênero de «млеко» (leite)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -о costumam ser neutras.' },
      { question: 'Como se diz «a minha irmã»?', options: ['моја сестра', 'мој сестра', 'моје сестра'], answer: 'моја сестра', explanation: '«Сестра» é feminino, então o possessivo é «моја».' },
    ],
  },
  {
    id: 'sr-g4',
    level: 'A1.2',
    title: 'O verbo имати e a negação',
    emoji: '🚫',
    summary: '«Имати» (ter) no presente e a negação: «не» antes do verbo, com algumas formas grudadas.',
    sections: [
      {
        text: 'Para negar, «не» vem antes do verbo e se escreve separado: «не знам». Três verbos muito usados grudam a negação: «имати» → «немам», «бити» → «нисам», «хтети» → «нећу».',
        table: {
          head: ['Pronome', 'имати', 'negativo'],
          rows: [
            ['ја', 'имам', 'немам'],
            ['ти', 'имаш', 'немаш'],
            ['он / она', 'има', 'нема'],
            ['ми', 'имамо', 'немамо'],
            ['ви', 'имате', 'немате'],
            ['они', 'имају', 'немају'],
          ],
        },
        examples: [
          ['Имам сестру.', 'Tenho uma irmã.'],
          ['Немам брата.', 'Não tenho irmão.'],
          ['Нисам из Београда.', 'Não sou de Belgrado.'],
        ],
      },
    ],
    pitfalls: ['Dizer «не имам»: o certo é «немам».', 'Dizer «не сам»: o certo é «нисам».'],
    quiz: [
      { question: 'Como se diz «eu não tenho irmão»?', options: ['Немам брата.', 'Не имам брата.', 'Имам не брата.'], answer: 'Немам брата.', explanation: 'A negação de «имам» é uma palavra só: «немам».' },
      { question: 'Complete: «Он ___ сестру.» (Ele tem uma irmã.)', options: ['има', 'имам', 'имају'], answer: 'има', explanation: '«Има» é a forma de «имати» para он / она.' },
    ],
  },
];
