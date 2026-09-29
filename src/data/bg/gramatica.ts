import type { GrammarTopic } from '../types';

/** Tópicos de gramática do búlgaro — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_BG: GrammarTopic[] = [
  {
    id: 'bg-g1',
    level: 'A1.1',
    title: 'O alfabeto: Ъ, Щ e as letras que enganam',
    emoji: '🔤',
    summary: 'O alfabeto búlgaro tem 30 letras. Algumas parecem latinas mas soam diferente, e duas são bem búlgaras: Ъ e Щ.',
    sections: [
      {
        text: 'O búlgaro se lê quase letra por letra. As vogais átonas ficam um pouco mais fracas (o «о» átono puxa para «u», o «а» átono para «ъ»), por isso a tônica marcada ajuda.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['В', '«v»', 'вода́ (água)'],
            ['Н', '«n»', 'не (não)'],
            ['Р', '«r» vibrado', 'брат (irmão)'],
            ['С', '«s»', 'сестра́ (irmã)'],
            ['Ъ', '«a» fechado, como em «cama»', 'съм (sou)'],
            ['Щ', '«cht»', 'нощ (noite)'],
            ['Я / Ю', '«iá» / «iú»', 'хляб (pão)'],
          ],
        },
        examples: [
          ['Благодаря́!', 'Obrigado!'],
          ['Мля́кото е бя́ло.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o «Щ» como no russo («ch» longo): no búlgaro é «cht», como em «нощ» (nocht).',
      'Ler o «Ъ» como «b» ou deixá-lo mudo: é uma vogal, e «съм» soa perto de «sâm».',
      'Ler o «Р» como «p» e o «С» como «c»: são o nosso «r» e o nosso «s».',
    ],
    quiz: [
      { question: 'Como soa o «Щ» de «нощ» (noite)?', options: ['«cht»', '«ch» de «chá»', '«sk»'], answer: '«cht»', explanation: 'No búlgaro, o «щ» é a soma de «ш» (ch) e «т» (t).' },
      { question: 'Qual palavra quer dizer «água»?', options: ['вода́', 'ви́но', 'вче́ра'], answer: 'вода́', explanation: '«Вода́» é água; «ви́но» é vinho e «вче́ра» é ontem.' },
    ],
  },
  {
    id: 'bg-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo «съм»',
    emoji: '🙋',
    summary: 'Sete pronomes, um verbo para ser e estar e o tratamento formal com «ви́е».',
    sections: [
      {
        text: '«Съм» cobre o nosso ser e o nosso estar. A terminação já mostra a pessoa, então o pronome pode cair — mas, diferente dos vizinhos, o búlgaro não deixa «съм» sozinho no começo da frase: «Аз съм от Со́фия» ou «От Со́фия съм».',
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
        text: 'Com desconhecidos e no trabalho, o búlgaro usa «ви́е», com o verbo no plural, mesmo para uma pessoa só.',
        examples: [
          ['Как сте?', 'Como vai o senhor / a senhora?'],
          ['Откъде́ сте?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Começar a frase com «съм»: diga «Аз съм…» ou ponha outra palavra antes («От Со́фия съм»).', 'Tratar um desconhecido por «ти»: soa íntimo demais. Use «ви́е».'],
    quiz: [
      { question: 'Complete: «Аз ___ от Курити́ба.» (Eu sou de Curitiba.)', options: ['съм', 'е', 'си'], answer: 'съм', explanation: '«Съм» é a forma para «аз».' },
      { question: '«Как сте?» é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: '«Сте» é a forma de «ви́е», usada para vocês e para tratar alguém com respeito.' },
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
        text: 'A última letra costuma mostrar o gênero, e o artigo definido se gruda no fim: -ът (ou -я) no masculino, -та no feminino, -то no neutro. Sem artigo, a palavra fica indefinida: «къ́ща» (uma casa), «къ́щата» (a casa).',
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
      'Pôr o artigo antes, como em português: não existe «та къ́ща»; o certo é «къ́щата».',
      '«Ку́че» (cachorro) é neutro: «ку́чето», não «ку́чета» (que é «cachorros»).',
    ],
    quiz: [
      { question: 'Como se diz «o leite»?', options: ['мля́кото', 'мля́кът', 'то мля́ко'], answer: 'мля́кото', explanation: '«Мля́ко» é neutro, e o artigo neutro é -то, grudado no fim.' },
      { question: 'Qual é o gênero de «къ́ща» (casa)?', options: ['feminino', 'masculino', 'neutro'], answer: 'feminino', explanation: 'Palavras terminadas em -а costumam ser femininas.' },
    ],
  },
  {
    id: 'bg-g4',
    level: 'A1.2',
    title: '«И́мам», «ня́мам» e a negação',
    emoji: '🚫',
    summary: '«Ter» no presente, a forma negativa especial «ня́мам» e o «не» antes do verbo.',
    sections: [
      {
        text: 'Para negar, «не» vem antes do verbo: «не зна́я» (não sei). O verbo «и́мам» (ter) é especial: a negação vira uma palavra só, «ня́мам» (não tenho).',
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
    pitfalls: ['Dizer «не и́мам»: o certo é «ня́мам».', 'Pôr o «не» depois do verbo: o certo é «не зна́я».'],
    quiz: [
      { question: 'Como se diz «eu não tenho irmão»?', options: ['Ня́мам брат.', 'Не и́мам брат.', 'И́мам не брат.'], answer: 'Ня́мам брат.', explanation: 'A negação de «и́мам» é uma palavra só: «ня́мам».' },
      { question: 'Complete: «Той ___ сестра́.» (Ele tem uma irmã.)', options: ['и́ма', 'и́мам', 'и́мат'], answer: 'и́ма', explanation: '«И́ма» é a forma para той / тя.' },
    ],
  },
];
