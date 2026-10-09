import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do sérvio: A1 completo (sr-g1 a sr-g4) mais A2 (sr-g5 a sr-g7, acrescentado
 * depois). Fontes dos tópicos novos: Wikcionário em inglês (en.wiktionary.org), verbete "бити"
 * (tabelas do futuro e do perfeito sérvio-croata) e verbete "pomoći"/"pomagati"; e, para o
 * instrumental com "с/са", guias de gramática do croata e do sérvio citados em learncroatian.eu e
 * belgradelanguageschool.com (exemplos "Pijem kavu s mlijekom" / "Putujem autobusom"), confirmados
 * contra o padrão de declinação já usado sem explicar em "Једем хлеб са сиром" (A1, unidade 2).
 */
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
            ['Ј ј', 'J j', '“i” curto de “pai”'],
            ['Љ љ', 'Lj lj', '“lh”'],
            ['Њ њ', 'Nj nj', '“nh”'],
            ['Ч ч', 'Č č', '“tch” duro'],
            ['Ћ ћ', 'Ć ć', '“tch” macio'],
            ['Џ џ', 'Dž dž', '“dj” duro'],
            ['Ђ ђ', 'Đ đ', '“dj” macio'],
            ['Ш ш / Ж ж', 'Š š / Ž ž', '“ch” / “j”'],
          ],
        },
        examples: [
          ['Хвала лепо!', 'Muito obrigado! (latino: Hvala lepo!)'],
          ['Лаку ноћ!', 'Boa noite! (latino: Laku noć!)'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “Ј” cirílico como o nosso “j”: soa como o “i” de “pai” — “ја” é “iá”.',
      'Ler o “Р”, “С” e “Н” cirílicos como p, c e h: são r, s e n.',
      'Esperar uma vogal em “црн” ou “четвртак”: o “р” faz o papel de vogal.',
    ],
    quiz: [
      { question: 'Como se escreve “хвала” no alfabeto latino?', options: ['hvala', 'xbala', 'hbala'], answer: 'hvala', explanation: 'Х = h, В = v, А = a, Л = l.' },
      { question: 'Como soa o “Ј” de “ја” (eu)?', options: ['como o “i” de “pai”', 'como o “j” de “já”', 'como o “g” de “gato”'], answer: 'como o “i” de “pai”', explanation: '“Ја” soa “iá”.' },
    ],
  },
  {
    id: 'sr-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo бити',
    emoji: '🙋',
    summary: 'Sete pronomes, as formas curtas de “бити” (ser, estar) e o tratamento formal com “ви”.',
    sections: [
      {
        text: 'No presente, “бити” tem formas curtas e átonas: “сам”, “си”, “је”… Elas não podem abrir a frase: vem antes o pronome ou outra palavra.',
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
        text: 'Com desconhecidos, mais velhos e no trabalho, use “ви” com o verbo no plural, mesmo falando com uma pessoa só.',
        examples: [
          ['Како сте?', 'Como vai o senhor / a senhora?'],
          ['Одакле сте?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Começar a frase com “сам”: diga “Ја сам…” ou “Из Београда сам”.', 'Tratar um desconhecido por “ти”: soa íntimo demais. Use “ви”.'],
    quiz: [
      { question: 'Complete: “Ја ___ из Куритибе.” (Eu sou de Curitiba.)', options: ['сам', 'је', 'си'], answer: 'сам', explanation: '“Сам” é a forma curta de “бити” para “ја”.' },
      { question: '“Како сте?” é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: '“Сте” é a forma de “ви”, usada para vocês e para tratar alguém com respeito.' },
    ],
  },
  {
    id: 'sr-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e “мој / моја / моје”.',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -а → feminino, -о ou -е → neutro. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com “meu”'],
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
      '“Мачка” (gato) é feminino: “мачка је црна”.',
      '“Град” (cidade) é masculino: “велики град”, não “велика град”.',
    ],
    quiz: [
      { question: 'Qual é o gênero de “млеко” (leite)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -о costumam ser neutras.' },
      { question: 'Como se diz “a minha irmã”?', options: ['моја сестра', 'мој сестра', 'моје сестра'], answer: 'моја сестра', explanation: '“Сестра” é feminino, então o possessivo é “моја”.' },
    ],
  },
  {
    id: 'sr-g4',
    level: 'A1.2',
    title: 'O verbo имати e a negação',
    emoji: '🚫',
    summary: '“Имати” (ter) no presente e a negação: “не” antes do verbo, com algumas formas grudadas.',
    sections: [
      {
        text: 'Para negar, “не” vem antes do verbo e se escreve separado: “не знам”. Três verbos muito usados grudam a negação: “имати” → “немам”, “бити” → “нисам”, “хтети” → “нећу”.',
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
    pitfalls: ['Dizer “не имам”: o certo é “немам”.', 'Dizer “не сам”: o certo é “нисам”.'],
    quiz: [
      { question: 'Como se diz “eu não tenho irmão”?', options: ['Немам брата.', 'Не имам брата.', 'Имам не брата.'], answer: 'Немам брата.', explanation: 'A negação de “имам” é uma palavra só: “немам”.' },
      { question: 'Complete: “Он ___ сестру.” (Ele tem uma irmã.)', options: ['има', 'имам', 'имају'], answer: 'има', explanation: '“Има” é a forma de “имати” para он / она.' },
    ],
  },
  {
    id: 'sr-g5',
    level: 'A2.1',
    title: 'Futur I: “ћу”, “ћеш”, “ће” + infinitivo',
    emoji: '🔮',
    summary: 'O futuro simples se forma com as formas curtas de “хтети” (ћу, ћеш, ће...) junto do infinitivo do verbo.',
    sections: [
      {
        text: 'Como “сам” no presente de “бити”, as formas “ћу/ћеш/ће...” não podem abrir a frase: precisam de uma palavra antes. Quando o infinitivo vem logo antes de “ћу” (sem nada no meio), o sérvio escreve as duas palavras juntas, perdendo o “-и” final do infinitivo: “учити” + “ћу” → “учи́ћу”.',
        table: {
          head: ['Pronome', 'хтети (futuro)', 'Exemplo com “учити”'],
          rows: [
            ['ја', 'ћу', 'учи́ћу'],
            ['ти', 'ћеш', 'учи́ћеш'],
            ['он / она', 'ће', 'учи́ће'],
            ['ми', 'ћемо', 'учи́ћемо'],
            ['ви', 'ћете', 'учи́ћете'],
            ['они', 'ће', 'учи́ће'],
          ],
        },
        examples: [
          ['Сутра ћу учити српски.', 'Amanhã vou estudar sérvio.'],
          ['Учићу цео дан.', 'Vou estudar o dia todo.'],
          ['Он ће купити хлеб.', 'Ele vai comprar pão.'],
        ],
      },
    ],
    pitfalls: [
      'Juntar “ћу” com a palavra anterior quando ela não é o infinitivo do mesmo verbo: “Сутра ћу учити” fica em duas palavras, porque “сутра” veio antes.',
      'Escrever como no croata (“учити ћу”, separado, com o infinitivo completo): no sérvio padrão, quando o infinitivo vem logo antes, as duas palavras se juntam numa só: “учићу”.',
    ],
    quiz: [
      { question: 'Como se diz “ele vai comprar pão”?', options: ['Он ће купити хлеб.', 'Он ћу купити хлеб.', 'Купитиће он хлеб.'], answer: 'Он ће купити хлеб.', explanation: '“Ће” é a forma de “хтети” para он / она.' },
      { question: 'Como se escreve “vou estudar” quando nada vem antes?', options: ['Учићу.', 'Учи ћу.', 'Ћу учити.'], answer: 'Учићу.', explanation: 'Sem nada antes, o infinitivo perde o “-и” e se junta com “ћу” numa palavra só.' },
    ],
  },
  {
    id: 'sr-g6',
    level: 'A2.1',
    title: 'Перфекат: “сам учио”, “си учила”',
    emoji: '⏳',
    summary: 'O passado mais comum do sérvio se forma com o presente de “бити” mais um participle que concorda em gênero com quem fala.',
    sections: [
      {
        text: 'O perfeito (перфекат) é o tempo passado do dia a dia. Usa o presente de “бити” (сам, си, је...) mais o participle do verbo principal, terminado em “-о” no masculino, “-ла” no feminino e “-ло” no neutro. Assim como “сам”, o auxiliar não abre a frase: o participle vem primeiro.',
        table: {
          head: ['Pronome', 'бити', 'учити → participle'],
          rows: [
            ['ја (m / f)', 'сам', 'учио / учила'],
            ['ти (m / f)', 'си', 'учио / учила'],
            ['он / она', 'је', 'учио / учила'],
            ['ми (pl.)', 'смо', 'учили'],
            ['ви (pl.)', 'сте', 'учили'],
            ['они (pl.)', 'су', 'учили'],
          ],
        },
        examples: [
          ['Учио сам српски три месеца.', 'Estudei sérvio durante três meses. (fala um homem)'],
          ['Учила сам српски три месеца.', 'Estudei sérvio durante três meses. (fala uma mulher)'],
          ['Купили смо хлеб.', 'Compramos pão.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a concordância de gênero do participle: um homem diz “учио сам”, uma mulher diz “учила сам”.',
      'Começar a frase com “сам / си / је”: o participle vem primeiro, como em “Учио сам”, não “Сам учио”.',
    ],
    quiz: [
      { question: 'Como uma mulher diz “eu estudei”?', options: ['Учила сам.', 'Учио сам.', 'Учим сам.'], answer: 'Учила сам.', explanation: 'O participle concorda em gênero com quem fala: feminino é “учила”.' },
      { question: 'Qual auxiliar forma o perfeito para “они” (eles)?', options: ['су', 'је', 'сте'], answer: 'су', explanation: '“Су” é a forma de “бити” para a 3ª pessoa do plural.' },
    ],
  },
  {
    id: 'sr-g7',
    level: 'A2.2',
    title: 'Инструментал: “са сиром”, “аутобусом”',
    emoji: '🧀',
    summary: 'O instrumental marca “com” (companhia ou combinação), com a preposição “с/са”, e também o meio ou a ferramenta, sem preposição.',
    sections: [
      {
        text: 'Depois de “с” ou “са” (“com”), o substantivo vai para o instrumental: os femininos em “-а” e os masculinos/neutros trocam a terminação por “-ом” ou “-ем”. Usa-se “са” (não “с”) antes de palavra que comece com с, ш, з ou ж. Sem preposição, o instrumental também marca o meio de transporte ou a ferramenta.',
        table: {
          head: ['Nominativo', 'Instrumental', 'Com “са”'],
          rows: [
            ['кафа', 'кафом', 'са кафом'],
            ['сир', 'сиром', 'са сиром'],
            ['млеко', 'млеком', 'са млеком'],
          ],
        },
        examples: [
          ['Једем хлеб са сиром.', 'Eu como pão com queijo.'],
          ['Пијем кафу са млеком.', 'Eu bebo café com leite.'],
          ['Идем аутобусом.', 'Eu vou de ônibus. (sem preposição: o meio de transporte)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “с” antes de palavra que comece com с, ш, з ou ж: o certo é “са”, como em “са сиром”, não “с сиром”.',
      'Deixar o substantivo igual ao nominativo depois de “са”: “кафа” precisa virar “кафом”.',
    ],
    quiz: [
      { question: 'Como se diz “café com leite”?', options: ['кафа са млеком', 'кафа и млеко', 'кафа млеко'], answer: 'кафа са млеком', explanation: '“Са” + instrumental (млеком) marca “com”.' },
      { question: 'Qual é o instrumental de “сир” (queijo)?', options: ['сиром', 'сир', 'сира'], answer: 'сиром', explanation: 'Substantivos masculinos terminados em consoante recebem “-ом” no instrumental.' },
    ],
  },
];
