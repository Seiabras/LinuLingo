import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do búlgaro: A1 completo (bg-g1 a bg-g4) mais A2 (bg-g5 a bg-g7, acrescentado
 * depois). Fontes dos tópicos novos: artigo "Bulgarian verbs" da Wikipédia em inglês (formação do
 * futuro com "ще" e da negação com "няма да") e Wikcionari em inglês, verbete "уча" (tabela do
 * aorist) e verbete "инженер"/outros para a comparação com по-/най- (confirmada também pela
 * documentação do Universal Dependencies para o búlgaro, projeto acadêmico de anotação
 * morfológica).
 */
export const GRAMMAR_BG: GrammarTopic[] = [
  {
    id: 'bg-g1',
    level: 'A1.1',
    title: 'O alfabeto: Ъ, Щ e as letras que enganam',
    emoji: '🔤',
    summary: 'O alfabeto búlgaro tem 30 letras. Algumas parecem latinas mas soam diferente, e duas são bem búlgaras: Ъ e Щ.',
    sections: [
      {
        text: 'O búlgaro se lê quase letra por letra. As vogais átonas ficam um pouco mais fracas (o “о” átono puxa para “u”, o “а” átono para “ъ”), por isso a tônica marcada ajuda.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['В', '“v”', 'вода́ (água)'],
            ['Н', '“n”', 'не (não)'],
            ['Р', '“r” vibrado', 'брат (irmão)'],
            ['С', '“s”', 'сестра́ (irmã)'],
            ['Ъ', '“a” fechado, como em “cama”', 'съм (sou)'],
            ['Щ', '“cht”', 'нощ (noite)'],
            ['Я / Ю', '“iá” / “iú”', 'хляб (pão)'],
          ],
        },
        examples: [
          ['Благодаря́!', 'Obrigado!'],
          ['Мля́кото е бя́ло.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “Щ” como no russo (“ch” longo): no búlgaro é “cht”, como em “нощ” (nocht).',
      'Ler o “Ъ” como “b” ou deixá-lo mudo: é uma vogal, e “съм” soa perto de “sâm”.',
      'Ler o “Р” como “p” e o “С” como “c”: são o nosso “r” e o nosso “s”.',
    ],
    quiz: [
      { question: 'Como soa o “Щ” de “нощ” (noite)?', options: ['“cht”', '“ch” de “chá”', '“sk”'], answer: '“cht”', explanation: 'No búlgaro, o “щ” é a soma de “ш” (ch) e “т” (t).' },
      { question: 'Qual palavra quer dizer “água”?', options: ['вода́', 'ви́но', 'вче́ра'], answer: 'вода́', explanation: '“Вода́” é água; “ви́но” é vinho e “вче́ра” é ontem.' },
    ],
  },
  {
    id: 'bg-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo “съм”',
    emoji: '🙋',
    summary: 'Sete pronomes, um verbo para ser e estar e o tratamento formal com “ви́е”.',
    sections: [
      {
        text: '“Съм” cobre o nosso ser e o nosso estar. A terminação já mostra a pessoa, então o pronome pode cair — mas, diferente dos vizinhos, o búlgaro não deixa “съм” sozinho no começo da frase: “Аз съм от Со́фия” ou “От Со́фия съм”.',
        table: {
          head: ['Pronome', 'Tradução', 'съм'],
          rows: [
            ['аз', 'eu', 'съм'],
            ['ти', 'tu, você', 'си'],
            ['той / тя / то', 'ele / ela / (neutro)', 'е'],
            ['ни́е', 'nós', 'сме'],
            ['ви́е', 'vocês; o senhor, a senhora', 'сте'],
            ['те', 'eles, elas', 'са'],
          ],
        },
        examples: [
          ['Аз съм от Са́о Па́уло.', 'Sou de São Paulo.'],
          ['Ни́е сме прия́тели.', 'Nós somos amigos.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos e no trabalho, o búlgaro usa “ви́е”, com o verbo no plural, mesmo para uma pessoa só.',
        examples: [
          ['Как сте?', 'Como vai o senhor / a senhora?'],
          ['Откъде́ сте?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Começar a frase com “съм”: diga “Аз съм…” ou ponha outra palavra antes (“От Со́фия съм”).', 'Tratar um desconhecido por “ти”: soa íntimo demais. Use “ви́е”.'],
    quiz: [
      { question: 'Complete: “Аз ___ от Курити́ба.” (Eu sou de Curitiba.)', options: ['съм', 'е', 'си'], answer: 'съм', explanation: '“Съм” é a forma para “аз”.' },
      { question: '“Как сте?” é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: '“Сте” é a forma de “ви́е”, usada para vocês e para tratar alguém com respeito.' },
    ],
  },
  {
    id: 'bg-g3',
    level: 'A1.2',
    title: 'O gênero e o artigo grudado no fim',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, e o artigo definido que vem no fim da palavra.',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero, e o artigo definido se gruda no fim: -ът (ou -я) no masculino, -та no feminino, -то no neutro. Sem artigo, a palavra fica indefinida: “къ́ща” (uma casa), “къ́щата” (a casa).',
        table: {
          head: ['Gênero', 'Sem artigo', 'Com artigo'],
          rows: [
            ['masculino', 'хляб (pão)', 'хля́бът (o pão)'],
            ['feminino', 'къ́ща (casa)', 'къ́щата (a casa)'],
            ['neutro', 'мля́ко (leite)', 'мля́кото (o leite)'],
          ],
        },
        examples: [
          ['Хля́бът е пре́сен.', 'O pão é fresco.'],
          ['Ко́тката е че́рна.', 'O gato é preto.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o artigo antes, como em português: não existe “та къ́ща”; o certo é “къ́щата”.',
      '“Ку́че” (cachorro) é neutro: “ку́чето”, não “ку́чета” (que é “cachorros”).',
    ],
    quiz: [
      { question: 'Como se diz “o leite”?', options: ['мля́кото', 'мля́кът', 'то мля́ко'], answer: 'мля́кото', explanation: '“Мля́ко” é neutro, e o artigo neutro é -то, grudado no fim.' },
      { question: 'Qual é o gênero de “къ́ща” (casa)?', options: ['feminino', 'masculino', 'neutro'], answer: 'feminino', explanation: 'Palavras terminadas em -а costumam ser femininas.' },
    ],
  },
  {
    id: 'bg-g4',
    level: 'A1.2',
    title: '“И́мам”, “ня́мам” e a negação',
    emoji: '🚫',
    summary: '“Ter” no presente, a forma negativa especial “ня́мам” e o “не” antes do verbo.',
    sections: [
      {
        text: 'Para negar, “не” vem antes do verbo: “не зна́я” (não sei). O verbo “и́мам” (ter) é especial: a negação vira uma palavra só, “ня́мам” (não tenho).',
        table: {
          head: ['Pronome', 'и́мам', 'ня́мам'],
          rows: [
            ['аз', 'и́мам', 'ня́мам'],
            ['ти', 'и́маш', 'ня́маш'],
            ['той / тя', 'и́ма', 'ня́ма'],
            ['ни́е', 'и́маме', 'ня́маме'],
            ['ви́е', 'и́мате', 'ня́мате'],
            ['те', 'и́мат', 'ня́мат'],
          ],
        },
        examples: [
          ['И́мам сестра́.', 'Tenho uma irmã.'],
          ['Ня́мам брат.', 'Não tenho irmão.'],
          ['Не гово́ря не́мски.', 'Eu não falo alemão.'],
        ],
      },
    ],
    pitfalls: ['Dizer “не и́мам”: o certo é “ня́мам”.', 'Pôr o “не” depois do verbo: o certo é “не зна́я”.'],
    quiz: [
      { question: 'Como se diz “eu não tenho irmão”?', options: ['Ня́мам брат.', 'Не и́мам брат.', 'И́мам не брат.'], answer: 'Ня́мам брат.', explanation: 'A negação de “и́мам” é uma palavra só: “ня́мам”.' },
      { question: 'Complete: “Той ___ сестра́.” (Ele tem uma irmã.)', options: ['и́ма', 'и́мам', 'и́мат'], answer: 'и́ма', explanation: '“И́ма” é a forma para той / тя.' },
    ],
  },
  {
    id: 'bg-g5',
    level: 'A2.1',
    title: 'Бъдеще време: “ще” и a negação “ня́ма да”',
    emoji: '🔮',
    summary: 'O futuro se forma com a partícula “ще” antes do presente. Para negar, não se usa “не”: usa-se “ня́ма да”.',
    sections: [
      {
        text: '“Ще” vem do antigo verbo “ща” (querer) e hoje é só uma partícula invariável: fica sempre igual, antes do verbo no presente. “Ще у́ча” é “eu vou estudar”, “ще у́чиш” é “tu vais estudar”. Para negar o futuro, o búlgaro não usa “не ще”: usa a expressão “ня́ма да” antes do presente.',
        table: {
          head: ['Afirmativo', 'Negativo', 'Tradução'],
          rows: [
            ['ще у́ча', 'ня́ма да у́ча', '(não) vou estudar'],
            ['ще купу́вам', 'ня́ма да купу́вам', '(não) vou comprar'],
            ['ще оти́да', 'ня́ма да оти́да', '(não) vou ir'],
          ],
        },
        examples: [
          ['У́тре ще оти́да на паза́ра.', 'Amanhã eu vou ao mercado.'],
          ['Ня́ма да ра́ботя в неде́ля.', 'Eu não vou trabalhar no domingo.'],
        ],
      },
    ],
    pitfalls: [
      'Negar o futuro com “не ще”: essa forma só aparece em poesia. No dia a dia, use “ня́ма да”.',
      'Esquecer que “ще” não muda: é sempre “ще”, para qualquer pessoa — só o verbo depois dele muda.',
    ],
    quiz: [
      { question: 'Como se diz “eu não vou estudar”?', options: ['Ня́ма да у́ча.', 'Не ще у́ча.', 'Ще не у́ча.'], answer: 'Ня́ма да у́ча.', explanation: 'A negação do futuro usa “ня́ма да”, não “не”.' },
      { question: 'Complete: “У́тре ___ купу́вам хляб.” (Amanhã vou comprar pão.)', options: ['ще', 'ня́ма', 'съм'], answer: 'ще', explanation: '“Ще” antes do presente forma o futuro afirmativo.' },
    ],
  },
  {
    id: 'bg-g6',
    level: 'A2.1',
    title: 'Мина́лото просто (аорист): “у́чих вче́ра”',
    emoji: '⏳',
    summary: 'O búlgaro guardou o aorist eslavo antigo: um tempo passado simples, numa palavra só, para uma ação terminada.',
    sections: [
      {
        text: 'O aorist conta o que aconteceu, sem olhar para o presente — é o tempo típico de uma história ou de uma ação pontual no passado. Verbos como “у́ча” (estudar) seguem este padrão regular.',
        table: {
          head: ['Pessoa', 'у́ча → aorist'],
          rows: [
            ['аз', 'у́чих'],
            ['ти', 'у́чи'],
            ['той / тя', 'у́чи'],
            ['ни́е', 'у́чихме'],
            ['ви́е', 'у́чихте'],
            ['те', 'у́чиха'],
          ],
        },
        examples: [
          ['Вче́ра у́чих бъ́лгарски.', 'Ontem eu estudei búlgaro.'],
          ['Той рабо́ти в бо́лницата миналата годи́на.', 'Ele trabalhou no hospital no ano passado.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “ти/той/тя” no aorist: as três pessoas usam a mesma forma (“у́чи”), diferente do presente.',
      'Usar o aorist para algo ainda em curso: para isso o búlgaro tem outro tempo, não coberto ainda neste pacote.',
    ],
    quiz: [
      { question: 'Como se diz “ontem eu estudei”?', options: ['Вче́ра у́чих.', 'Вче́ра у́ча.', 'Вче́ра ще у́ча.'], answer: 'Вче́ра у́чих.', explanation: '“У́чих” é a forma de aorist para “аз”.' },
      { question: 'Qual forma serve tanto para “ти” quanto para “той/тя” no aorist de “у́ча”?', options: ['у́чи', 'у́чих', 'у́чихме'], answer: 'у́чи', explanation: 'No aorist, a 2ª e a 3ª pessoa do singular coincidem: “у́чи”.' },
    ],
  },
  {
    id: 'bg-g7',
    level: 'A2.2',
    title: 'Comparação: по- e най-',
    emoji: '📏',
    summary: 'O comparativo se forma com “по-” antes do adjetivo, e o superlativo com “най-”, sempre com hífen.',
    sections: [
      {
        text: '“По-” (mais) e “най-” (o mais) se grudam com hífen antes do adjetivo, sem mudar a forma dele. No superlativo, o adjetivo ainda leva o artigo definido. Para comparar, usa-se “от” (que, do que).',
        table: {
          head: ['Grau', 'Exemplo', 'Tradução'],
          rows: [
            ['comparativo', 'по-добъ́р от', 'melhor (do) que'],
            ['superlativo', 'най-добрият', 'o melhor'],
            ['comparativo', 'по-голя́м от', 'maior que'],
          ],
        },
        examples: [
          ['Мо́ят стол е по-удо́бен от тво́я.', 'A minha cadeira é mais confortável que a tua.'],
          ['Той е най-младият учи́тел в учи́лището.', 'Ele é o professor mais jovem da escola.'],
        ],
      },
    ],
    pitfalls: [
      'Separar “по-” do adjetivo com espaço: o certo é sempre com hífen, grudado: “по-добъ́р”.',
      'Esquecer o artigo no superlativo: “най-добрият” leva o artigo definido (-ият), não só “най-добър”.',
    ],
    quiz: [
      { question: 'Como se diz “mais confortável”?', options: ['по-удо́бен', 'най-удо́бен', 'удо́бен по'], answer: 'по-удо́бен', explanation: 'O comparativo usa “по-” com hífen antes do adjetivo.' },
      { question: 'Como se diz “o mais jovem”?', options: ['най-младият', 'по-млад', 'млад най'], answer: 'най-младият', explanation: 'O superlativo usa “най-” e o artigo definido no fim do adjetivo.' },
    ],
  },
];
