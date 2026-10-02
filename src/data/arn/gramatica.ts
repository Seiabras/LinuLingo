import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do mapudungún — só A1.1 e A1.2 por enquanto (pacote incompleto, ver `incomplete`
 * em index.ts). Fontes: en.wikipedia.org/wiki/Mapuche_language (seções “Syntax” e “Morphology”),
 * pt.wikipedia.org/wiki/Língua_mapuche (seção “Escrita”, os três alfabetos), es.wikipedia.org/wiki/
 * Idioma_mapuche (marcador de plural “pu”), e en.wikibooks.org/wiki/Mapudungun/Raguileo/Lessons/Moods
 * (o par “nien”/“nielan”, ter/não ter, e a conjugação de “amun”: amun/amuymi/amuy).
 */
export const GRAMMAR_ARN: GrammarTopic[] = [
  {
    id: 'arn-g1',
    level: 'A1.1',
    title: 'Os pronomes e as terminações -n, -mi, -y',
    emoji: '🙋',
    summary: 'O mapudungún marca a pessoa no fim do próprio verbo: -n (eu), -mi (tu/você), -y (ele/ela).',
    sections: [
      {
        text: 'Os pronomes livres (iñche, eymi, fey…) existem e aparecem no início da frase, mas quem realmente marca “quem fez” é o sufixo colado no fim do verbo. O verbo “amun” (ir) mostra o padrão com clareza: amu- é a raiz, e -n/-mi/-y marcam a pessoa.',
        table: {
          head: ['Pronome', 'Tradução', 'amun (ir)'],
          rows: [
            ['iñche', 'eu', 'amun'],
            ['eymi', 'tu, você', 'amuymi'],
            ['fey', 'ele, ela', 'amuy'],
            ['iñchiñ', 'nós', '—'],
          ],
        },
        examples: [
          ['Iñche amun.', 'Eu vou.'],
          ['Iñche nien kiñe ruka.', 'Eu tenho uma casa.'],
          ['¿Chumleymi?', 'Como você está? (chum- + -le- “estar” + -ymi “tu”)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o pronome livre (iñche, eymi…) é obrigatório: como a pessoa já vem marcada no verbo, muita frase real aparece sem o pronome solto.',
      'Esquecer a terminação do verbo e usar sempre a forma de “eu” (a citada no dicionário): “amun” é “eu vou”, não um infinitivo solto como em português.',
    ],
    quiz: [
      { question: 'Qual terminação marca “eu” no verbo?', options: ['-n', '-mi', '-y'], answer: '-n', explanation: '“Amun” (eu vou) termina em -n, a marca da 1ª pessoa.' },
      { question: 'Como se diz “eu tenho uma casa”?', options: ['Iñche nien kiñe ruka.', 'Eymi nien kiñe ruka.', 'Fey nien kiñe ruka.'], answer: 'Iñche nien kiñe ruka.', explanation: '“Iñche” (eu) + “nien” (tenho, já com a marca -n de 1ª pessoa).' },
    ],
  },
  {
    id: 'arn-g2',
    level: 'A1.1',
    title: 'Três alfabetos para uma língua só',
    emoji: '🔤',
    summary: 'O mapudungún não tem uma única ortografia oficial: o Alfabeto Unificado, o Grafemário Raguileo e o Azümchefe competem até hoje.',
    sections: [
      {
        text: 'A Wikipédia em português registra uma “disputa política em andamento” sobre qual alfabeto usar. Este curso segue o Alfabeto Unificado (o mais difundido no ensino), mas muitos dicionários on-line (como o Wiktionary em inglês) usam o Grafemário Raguileo — por isso a mesma palavra pode aparecer escrita de dois jeitos diferentes em fontes diferentes.',
        table: {
          head: ['Unificado', 'Raguileo', 'Som aproximado'],
          rows: [
            ['ü', 'v', 'vogal central fechada, entre o “u” e o “i”'],
            ['ch', 'c', 'som de “tch”'],
            ['ll', 'j', 'como o “lh” do português'],
            ['ñ', 'ñ', 'como o “nh” do português'],
          ],
        },
        examples: [
          ['küme (Unificado) = kvme (Raguileo)', '“bom”'],
          ['aylla (Unificado) = ayja (Raguileo)', '“nove”'],
        ],
      },
    ],
    pitfalls: [
      'Estranhar a letra “v” em palavras mapudungún copiadas de algum dicionário: ali ela não tem o som de “v” — é a vogal “ü” escrita no Grafemário Raguileo.',
      'Misturar as duas grafias dentro da mesma palavra (ex.: escrever “külle” em vez de “küme” ou “kvme”, cada um dentro do seu próprio sistema).',
    ],
    quiz: [
      { question: 'A letra “v” do Grafemário Raguileo corresponde a que letra no Alfabeto Unificado?', options: ['ü', 'v', 'u'], answer: 'ü', explanation: 'O Raguileo reaproveita a letra “v” (que não tem som de “v” em mapudungún) para a vogal “ü”.' },
      { question: 'Qual destas é uma ortografia do mapudungún citada pela Wikipédia?', options: ['Azümchefe', 'Pinyin', 'Hangul'], answer: 'Azümchefe', explanation: 'Azümchefe é o terceiro sistema, ao lado do Unificado e do Raguileo.' },
    ],
  },
  {
    id: 'arn-g3',
    level: 'A1.2',
    title: 'O plural: pu (seres animados) e yuka (inanimados)',
    emoji: '👥',
    summary: 'O mapudungún não tem um “-s” de plural: usa uma palavra separada antes do nome, e ela muda conforme o nome é animado ou não.',
    sections: [
      {
        text: 'Para marcar mais de um ser animado (pessoas, animais), coloca-se “pu” antes do nome. Para seres inanimados, a palavra usada é “yuka”. Depois de um numeral (kiñe, epu, küla…), o nome costuma ficar como está, já que o próprio numeral informa a quantidade.',
        table: {
          head: ['Singular', 'Plural (animado)', 'Tradução'],
          rows: [
            ['che', 'pu che', 'pessoa → pessoas'],
            ['wentru', 'pu wentru', 'homem → homens'],
            ['domo', 'pu domo', 'mulher → mulheres'],
          ],
        },
        examples: [
          ['Kiñe wentru.', 'Um homem.'],
          ['Epu ruka.', 'Duas casas. (o numeral já marca a quantidade)'],
        ],
      },
    ],
    pitfalls: ['Tentar grudar um “-s” no fim da palavra, como em português: em mapudungún o plural vem antes, com “pu” ou “yuka”, não depois.'],
    quiz: [
      { question: 'Como se marca o plural de um ser animado como “wentru” (homem)?', options: ['pu wentru', 'wentrus', 'yuka wentru'], answer: 'pu wentru', explanation: '“Pu” antes do nome marca o plural de seres animados.' },
      { question: 'Qual palavra marca o plural de nomes inanimados?', options: ['yuka', 'pu', 'mari'], answer: 'yuka', explanation: '“Yuka” é o marcador de plural para nomes inanimados.' },
    ],
  },
  {
    id: 'arn-g4',
    level: 'A1.2',
    title: 'A negação verbal com -la-',
    emoji: '🚫',
    summary: 'Para negar um verbo, encaixa-se o sufixo -la- entre a raiz e a terminação de pessoa — não existe uma palavra separada para “não”.',
    sections: [
      {
        text: 'O par “nien” (eu tenho) / “nielan” (eu não tenho) mostra o padrão: nie- (raiz “ter”) + -la- (negação) + -n (eu). A negação mora dentro da própria palavra do verbo, entre a raiz e o sufixo de pessoa.',
        table: {
          head: ['Afirmativo', 'Negativo', 'Tradução'],
          rows: [
            ['nien', 'nielan', 'eu tenho / eu não tenho'],
          ],
        },
        examples: [
          ['Iñche nien kiñe ruka.', 'Eu tenho uma casa.'],
          ['Iñche nielan kiñe ruka.', 'Eu não tenho uma casa.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma palavra solta para “não”, como o “no” do português ou do espanhol: em mapudungún a negação é um pedaço grudado dentro do próprio verbo (-la-).'],
    quiz: [
      { question: 'Como se diz “eu não tenho uma casa”?', options: ['Iñche nielan kiñe ruka.', 'Iñche no nien kiñe ruka.', 'Iñche nienla kiñe ruka.'], answer: 'Iñche nielan kiñe ruka.', explanation: '“Nie” (ter) + “-la-” (negação) + “-n” (eu) = “nielan”.' },
      { question: 'Onde fica o sufixo de negação -la- dentro do verbo?', options: ['Entre a raiz e o sufixo de pessoa', 'Antes do pronome', 'No fim, depois de tudo'], answer: 'Entre a raiz e o sufixo de pessoa', explanation: 'Em “nielan”, -la- vem depois de “nie” e antes de “-n”.' },
    ],
  },
];
