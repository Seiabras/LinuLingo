import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do cantonês — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 * “Cantonese” e “Cantonese grammar” (Wikipédia em inglês) e Wikcionário em inglês (palavra por
 * palavra, citado em vocabulario.ts).
 */
export const GRAMMAR_YUE: GrammarTopic[] = [
  {
    id: 'yue-g1',
    level: 'A1.1',
    title: 'Os seis tons do jyutping',
    emoji: '🔤',
    summary: 'O jyutping marca 6 tons com um número de 1 a 6 depois de cada sílaba — dois tons mais que o mandarim.',
    sections: [
      {
        text: 'O jyutping é a romanização mais usada hoje para o cantonês (criada pela Linguistic Society of Hong Kong). Cada sílaba termina com um número: é o tom. O cantonês tem 6 tons, contra só 4 do mandarim — por isso costuma ser visto como mais difícil para quem já estudou mandarim.',
        table: {
          head: ['Palavra', 'Jyutping', 'Tradução'],
          rows: [
            ['你好', 'nei⁵ hou²', 'oi, olá'],
            ['五', 'ng⁵', 'cinco'],
            ['十', 'sap⁶', 'dez'],
          ],
        },
        examples: [
          ['我係Linu。', 'Eu sou o Linu.'],
          ['五、十。', 'Cinco, dez.'],
        ],
      },
    ],
    pitfalls: [
      'Ignorar o número do tom: “gau²” (九, nove) e outras sílabas mudam de sentido só pelo tom, mesmo escritas com as mesmas letras.',
      'Ler “z”, “c”, “j” como em português: no jyutping, z/c/j marcam um grupo de consoantes sem equivalente direto (um “ts”/“dz” leve), não o “z” ou o “j” do português.',
    ],
    quiz: [
      { question: 'Quantos tons tem o cantonês?', options: ['6', '4', '8'], answer: '6', explanation: 'O cantonês tem 6 tons fonéticos, dois mais que os 4 do mandarim.' },
      { question: 'No jyutping, o número depois da sílaba marca:', options: ['o tom', 'o gênero', 'o plural'], answer: 'o tom', explanation: 'Cada sílaba do jyutping termina com um número de 1 a 6, que marca o tom.' },
    ],
  },
  {
    id: 'yue-g2',
    level: 'A1.1',
    title: 'Pronomes sem gênero, e o sufixo 哋',
    emoji: '🙋',
    summary: '我, 你 e 佢: três pronomes que viram plural com o sufixo 哋, e 佢 que serve para “ele” e “ela”.',
    sections: [
      {
        text: 'O cantonês tem só três pronomes pessoais no singular, e todos viram plural com o mesmo sufixo, 哋 (dei⁶). E, diferente do português e até do mandarim escrito (他/她), o cantonês falado não distingue “ele” de “ela”: os dois são 佢 (keoi⁵).',
        table: {
          head: ['Pronome', 'Tradução', 'Plural'],
          rows: [
            ['我', 'eu', '我哋 (nós)'],
            ['你', 'tu, você', '你哋 (vocês)'],
            ['佢', 'ele, ela', '佢哋 (eles, elas)'],
          ],
        },
        examples: [
          ['佢係我朋友。', 'Ele/ela é meu amigo/amiga.'],
          ['我哋一齊學。', 'Nós aprendemos juntos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um pronome diferente para “ela”: 佢 cobre “ele”, “ela” e até “isso” (coisas e animais).'],
    quiz: [
      { question: 'Como se diz “nós” em cantonês?', options: ['我哋', '你哋', '佢哋'], answer: '我哋', explanation: '我 (eu) + 哋 (sufixo de plural) = 我哋 (nós).' },
      { question: '“佢” pode significar…', options: ['ele ou ela', 'só ele', 'só ela'], answer: 'ele ou ela', explanation: 'O cantonês falado não marca gênero no pronome: 佢 serve para os dois.' },
    ],
  },
  {
    id: 'yue-g3',
    level: 'A1.2',
    title: 'A posse com 嘅, e o classificador antes do nome',
    emoji: '👪',
    summary: '嘅 marca “de” depois da palavra que possui, e quase todo substantivo contável pede um classificador antes, como 個.',
    sections: [
      {
        text: 'A partícula 嘅 (ge³) marca posse: vem depois de quem possui, como um “de” às vezes invertido — “我嘅貓” é “eu DE gato”, isto é, “o meu gato”. E para contar ou apontar um substantivo, o cantonês usa um classificador antes dele: 個 (go³) é o mais comum, para pessoas e coisas em geral.',
        table: {
          head: ['Cantonês', 'Peça a peça', 'Tradução'],
          rows: [
            ['我嘅貓', 'eu + de + gato', 'o meu gato'],
            ['一個人', 'um + classificador + pessoa', 'uma pessoa'],
            ['呢個城市', 'este + classificador + cidade', 'esta cidade'],
          ],
        },
        examples: [
          ['我嘅貓係黑色。', 'O meu gato é preto.'],
          ['呢個城市好大。', 'Esta cidade é bem grande.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o classificador antes do substantivo: “呢城市” soa incompleto — o certo é “呢個城市”.'],
    quiz: [
      { question: 'Como se diz “o meu gato”?', options: ['我嘅貓', '我貓嘅', '嘅我貓'], answer: '我嘅貓', explanation: '嘅 vem depois de quem possui: “我嘅貓” é “eu de gato”.' },
      { question: 'Antes de “城市” (cidade), para dizer “esta cidade”, falta…', options: ['um classificador (個)', 'nada, já está certo', 'um pronome'], answer: 'um classificador (個)', explanation: 'O cantonês pede um classificador entre o demonstrativo e o substantivo: “呢個城市”.' },
    ],
  },
  {
    id: 'yue-g4',
    level: 'A1.2',
    title: 'Negação: 唔, 冇 e as perguntas X-não-X',
    emoji: '🚫',
    summary: '唔 nega a maioria dos verbos, mas “ter” (有) se nega com 冇, um verbo diferente — e perguntas de sim/não repetem o verbo com a negação no meio.',
    sections: [
      {
        text: 'A negação mais comum é 唔 (m⁴), antes do verbo: “我唔係” (eu não sou). Mas 有 (jau⁵, ter/haver) não aceita “唔” — a negativa dele é outro verbo, 冇 (mou⁵). E uma forma comum de perguntar “sim ou não” é repetir o verbo com a negação no meio: “有冇” (tem ou não tem?), “好唔好” (está bom ou não?).',
        table: {
          head: ['Afirmativa', 'Negativa', 'Pergunta sim/não'],
          rows: [
            ['我係。 (eu sou)', '我唔係。 (eu não sou)', '你係唔係？'],
            ['我有狗。 (eu tenho cachorro)', '我冇貓。 (eu não tenho gato)', '你有冇狗？'],
          ],
        },
        examples: [
          ['我有狗。我冇貓。', 'Eu tenho cachorro. Eu não tenho gato.'],
          ['你屋企好唔好呀？', 'A sua casa é boa?'],
        ],
      },
    ],
    pitfalls: ['Negar “ter” com “唔有”: não existe — o certo é trocar o verbo inteiro por “冇”.'],
    quiz: [
      { question: 'Como se nega “我有貓” (eu tenho gato)?', options: ['我冇貓。', '我唔有貓。', '我唔貓。'], answer: '我冇貓。', explanation: '“有” (ter) não aceita “唔”: a negativa dele é o verbo “冇”.' },
      { question: '“你有冇狗？” é uma pergunta sobre…', options: ['se você tem cachorro', 'onde está o cachorro', 'de quem é o cachorro'], answer: 'se você tem cachorro', explanation: 'Repetir o verbo com a negação no meio (有冇) forma uma pergunta de sim ou não.' },
    ],
  },
];
