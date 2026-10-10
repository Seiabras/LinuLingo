import type { GrammarTopic } from '../types';

/**
 * Gramática do inuktitut — por enquanto só A1.1 e A1.2 (curso incompleto). Fontes: [WIKI] Wikipédia
 * em inglês, «Inuit grammar» e «Inuktitut» (consultadas em 10/10/2026): terminações de pessoa, número
 * (singular, dual, plural) e os casos -mi, -mut, -mit; [WIKT] Wikcionário (verbetes do inuktitut);
 * [OMNI] Omniglot (frases). As formas “ᓂᕆᔪᖓ”, “ᓂᕆᔪᑎᑦ”, “ᐃᒥᖅᑐᖓ” e “ᐃᒡᓗᒃ/ᐃᒡᓗᑦ/ᐃᒡᓗᒥ/ᐃᒡᓗᒧᑦ/ᐃᒡᓗᒥᑦ”
 * seguem as regras do [WIKI] sobre os verbos e o nome do [WIKT].
 */
export const GRAMMAR_IU: GrammarTopic[] = [
  {
    id: 'iu-g1',
    level: 'A1.1',
    title: 'Quem faz a ação: o fim do verbo',
    emoji: '🙋',
    summary: 'Depois de vogal: -junga (eu), -jutit (você), -juq (ele, ela). Depois de consoante: -tunga, -tutit, -tuq.',
    sections: [
      {
        text: 'O inuktitut não precisa de pronome antes do verbo: o fim do verbo já diz quem faz a ação. Depois de vogal, o fim começa com “j”; depois de consoante, com “t”. Veja “comer” (raiz niri-, que termina em vogal) e “beber” (raiz imiq-, que termina em consoante):',
        table: {
          head: ['Pessoa', 'Comer', 'Beber'],
          rows: [
            ['eu', 'ᓂᕆᔪᖓ (nirijunga)', 'ᐃᒥᖅᑐᖓ (imiqtunga)'],
            ['você', 'ᓂᕆᔪᑎᑦ (nirijutit)', 'ᐃᒥᖅᑐᑎᑦ (imiqtutit)'],
            ['ele, ela', 'ᓂᕆᔪᖅ (nirijuq)', 'ᐃᒥᖅᑐᖅ (imiqtuq)'],
          ],
        },
        examples: [
          ['ᓂᕆᔪᖓ.', 'Eu como.'],
          ['ᐃᒥᖅᑐᖅ.', 'Ele, ela bebe.'],
          ['ᖃᓄᐃᙱᑦᑐᖓ.', 'Estou bem.'],
        ],
      },
      {
        text: 'Os pronomes existem e servem para dar ênfase: “ᐅᕙᖓ” (uvanga, eu), “ᐃᕝᕕᑦ” (ivvit, você), “ᐅᕙᒍᑦ” (uvagut, nós) e “ᐃᓕᔅᓯ” (ilissi, vocês).',
        examples: [
          ['ᐅᕙᖓ ᓕᓅᔪᖓ.', 'Eu sou o Linu.'],
        ],
      },
    ],
    pitfalls: [
      'Usar -juq para “eu”: “ᓂᕆᔪᖅ” é “ele come”; “eu como” é “ᓂᕆᔪᖓ”.',
      'Esquecer de trocar “j” por “t” depois de consoante: “ᐃᒥᖅᑐᖓ” (imiqtunga), e não “imiqjunga”.',
    ],
    quiz: [
      { question: 'Como se diz “eu como”?', options: ['ᓂᕆᔪᖓ', 'ᓂᕆᔪᖅ', 'ᓂᕆᔪᑎᑦ'], answer: 'ᓂᕆᔪᖓ', explanation: '-junga é o fim de “eu” depois de vogal.' },
      { question: 'O que quer dizer “ᐃᒥᖅᑐᖅ”?', options: ['Ele, ela bebe.', 'Eu bebo.', 'Você bebe.'], answer: 'Ele, ela bebe.', explanation: '-tuq é “ele, ela” depois de consoante.' },
    ],
  },
  {
    id: 'iu-g2',
    level: 'A1.1',
    title: 'Perguntas: ᑭᓇ, ᓇᓂ, ᖃᓄᖅ, ᖃᖓ, ᖃᔅᓯᑦ',
    emoji: '❓',
    summary: 'As palavras de pergunta e o fim -vit/-pit, que transforma o verbo em pergunta a “você”.',
    sections: [
      {
        text: 'As palavras de pergunta são “ᑭᓇ” (kina, quem), “ᓇᓂ” (nani, onde), “ᖃᓄᖅ” (qanuq, como), “ᖃᖓ” (qanga, quando) e “ᖃᔅᓯᑦ” (qassit, quantos). Quando a pergunta é para “você”, o verbo termina em -vit (depois de vogal) ou -pit (depois de consoante): “ᖃᓄᐃᑉᐱᑦ?” (como vai você?), “ᑭᓇᐅᕕᑦ?” (quem é você?).',
        examples: [
          ['ᖃᓄᐃᑉᐱᑦ?', 'Como vai?'],
          ['ᑭᓇᐅᕕᑦ?', 'Qual é o seu nome? (quem é você?)'],
          ['ᐅᓇ ᖃᔅᓯᑦ?', 'Quanto custa isto?'],
        ],
      },
    ],
    pitfalls: ['Perguntar o nome com “ᓇᓂ” (onde): o jeito comum é “ᑭᓇᐅᕕᑦ?”, quem é você.'],
    quiz: [
      { question: 'Qual é a palavra para “onde”?', options: ['ᓇᓂ', 'ᑭᓇ', 'ᖃᖓ'], answer: 'ᓇᓂ', explanation: '“ᓇᓂ” (nani) é onde; “ᑭᓇ” é quem; “ᖃᖓ” é quando.' },
    ],
  },
  {
    id: 'iu-g3',
    level: 'A1.2',
    title: 'Um, dois e muitos: o dual',
    emoji: '✌️',
    summary: 'O inuktitut tem singular, dual (dois) e plural (três ou mais): ᐃᒡᓗ, ᐃᒡᓗᒃ, ᐃᒡᓗᑦ.',
    sections: [
      {
        text: 'Além do singular e do plural, o inuktitut tem o dual, para exatamente duas coisas. O dual termina em -k e o plural, em -t. É assim que “ᐃᓄᒃ” (inuk), uma pessoa, vira “ᐃᓄᐃᑦ” (inuit), o povo.',
        table: {
          head: ['Um', 'Dois', 'Três ou mais'],
          rows: [
            ['ᐃᒡᓗ (iglu)', 'ᐃᒡᓗᒃ (igluk)', 'ᐃᒡᓗᑦ (iglut)'],
            ['ᐃᓄᒃ (inuk)', 'ᐃᓅᒃ (inuuk)', 'ᐃᓄᐃᑦ (inuit)'],
          ],
        },
        examples: [
          ['ᐃᒡᓗᒃ', 'duas casas'],
          ['ᐃᓄᐃᑦ', 'as pessoas, o povo inuíte'],
        ],
      },
    ],
    pitfalls: ['Usar o plural para duas coisas: duas casas são “ᐃᒡᓗᒃ”, e não “ᐃᒡᓗᑦ”.'],
    quiz: [
      { question: 'Como se diz “duas casas”?', options: ['ᐃᒡᓗᒃ', 'ᐃᒡᓗᑦ', 'ᐃᒡᓗ'], answer: 'ᐃᒡᓗᒃ', explanation: 'O dual termina em -k: ᐃᒡᓗᒃ.' },
    ],
  },
  {
    id: 'iu-g4',
    level: 'A1.2',
    title: 'Onde, para onde, de onde: -mi, -mut, -mit',
    emoji: '📍',
    summary: 'Os casos de lugar vêm colados no fim do nome: -mi (em), -mut (para), -mit (de).',
    sections: [
      {
        text: 'Em vez de preposições, o inuktitut cola um final no nome: -mi para “em”, -mut para “para” e -mit para “de”. O mesmo vale para os advérbios de lugar, como “ᓯᓚᒥ” (silami), “lá fora”, de “sila”, o ar livre.',
        table: {
          head: ['Final', 'Sentido', 'Exemplo'],
          rows: [
            ['-mi', 'em, no, na', 'ᐃᒡᓗᒥ (iglumi, na casa)'],
            ['-mut', 'para', 'ᐃᒡᓗᒧᑦ (iglumut, para casa)'],
            ['-mit', 'de, vindo de', 'ᐃᒡᓗᒥᑦ (iglumit, da casa)'],
          ],
        },
        examples: [
          ['ᐃᒡᓗᒥ', 'na casa'],
          ['ᓯᓚᒥ', 'lá fora'],
        ],
      },
    ],
    pitfalls: ['Trocar -mut por -mit: “para casa” é “ᐃᒡᓗᒧᑦ”; “ᐃᒡᓗᒥᑦ” é “da casa”.'],
    quiz: [
      { question: 'Como se diz “na casa”?', options: ['ᐃᒡᓗᒥ', 'ᐃᒡᓗᒧᑦ', 'ᐃᒡᓗᒥᑦ'], answer: 'ᐃᒡᓗᒥ', explanation: '-mi é “em”.' },
    ],
  },
];
