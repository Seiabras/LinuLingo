import type { GrammarTopic } from '../types';

/** Tópicos de gramática do piemontês — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_PMS: GrammarTopic[] = [
  {
    id: 'pms-g1',
    level: 'A1.1',
    title: 'Pronúncia: ë, eu, j e ò',
    emoji: '🔤',
    summary: 'O piemontês usa o alfabeto latino, mas tem vogais e sons próprios que o italiano e o português não têm.',
    sections: [
      {
        text: 'A grafia piemontese moderna usa alguns sinais diacríticos pra marcar sons que não existem no italiano vizinho.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ë', 'vogal bem curta e fraca, quase muda', 'ëdcò (também), vënner (sexta)'],
            ['eu', 'ditongo fechado, sem igual em português', 'neuit (noite), eut (oito)'],
            ['j', '“i” consoante, como em “mais” dito rápido', 'fija (filha), ij (os)'],
            ['ò', '“o” bem aberto', 'nò (não), còsa (o que)'],
          ],
        },
        examples: [
          ['Bon-a neuit!', 'Boa noite!'],
          ['Còsa a l’é sòn?', 'O que é isto?'],
        ],
      },
    ],
    pitfalls: ['Ler “ë” como o “e” forte do português: no piemontês ele é bem fraco, quase some.', 'Ler “eu” como duas vogais separadas: é um ditongo fechado, um som só.'],
    quiz: [
      { question: 'Como soa a letra “ë”?', options: ['Bem curta e fraca', 'Forte, como “é”', 'Como “u”'], answer: 'Bem curta e fraca', explanation: 'O “ë” piemontês é uma vogal reduzida, quase engolida na fala.' },
      { question: 'O que quer dizer “nò”?', options: ['não', 'nó (de corda)', 'nove'], answer: 'não', explanation: 'O acento grave marca o “o” aberto da negação.' },
    ],
  },
  {
    id: 'pms-g2',
    level: 'A1.1',
    title: 'O pronome verbal e o verbo esse',
    emoji: '🙋',
    summary: 'Todo verbo conjugado leva um segundo pronome colado (i/it/a), além do pronome pessoal.',
    sections: [
      {
        text: 'O piemontês tem um traço único: um pronome verbal obrigatório antes do verbo, mesmo quando o pronome pessoal (mi, ti, chiel…) já está na frase. “Esse” (ser/estar) serve tanto pro que a pessoa é quanto pra como ela está.',
        table: {
          head: ['Pronome', 'Tradução', 'esse'],
          rows: [
            ['mi', 'eu', 'i son'],
            ['ti', 'tu, você', 'it ses'],
            ['chiel / chila', 'ele / ela', 'a l’é'],
            ['noiàutri', 'nós', 'i soma'],
            ['voiàutri', 'vocês', 'i seve'],
            ['lor', 'eles / elas', 'a son'],
          ],
        },
        examples: [
          ['Mi i son ëd San Pàul.', 'Sou de São Paulo.'],
          ['Noiàutri i soma amis.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o pronome verbal: “mi son” soa incompleto, o certo é “mi i son”.', 'Procurar um verbo separado para “estar”: “mi i son bin” (estou bem) usa o mesmo “esse”.'],
    quiz: [
      { question: 'Complete: “Mi ___ ëd Turin.”', options: ['i son', 'a l’é', 'i soma'], answer: 'i son', explanation: '“I son” é a forma de “esse” para “mi”, com o pronome verbal “i”.' },
      { question: 'Qual pronome verbal vai com “chiel” e “chila”?', options: ['a', 'i', 'it'], answer: 'a', explanation: '“Chiel/chila a l’é” usa o pronome verbal “a”, que também serve pro plural “lor”.' },
    ],
  },
  {
    id: 'pms-g3',
    level: 'A1.2',
    title: 'O verbo avèj (ter)',
    emoji: '👪',
    summary: '“Avèj” é ter, usado também pra dizer o nome: “avèj nòm”.',
    sections: [
      {
        text: 'O verbo ter segue o mesmo padrão do pronome verbal. Pra dizer o nome, o piemontês usa “avèj nòm” (ter nome), em vez de um verbo como “chamar-se”.',
        table: {
          head: ['Pronome', 'avèj', 'Tradução'],
          rows: [
            ['mi', 'i l’hai', 'eu tenho'],
            ['ti', 'it l’has', 'tu tens'],
            ['chiel / chila', 'a l’ha', 'ele/ela tem'],
            ['noiàutri', 'i l’oma', 'nós temos'],
            ['voiàutri', 'i l’eve', 'vocês têm'],
            ['lor', 'a l’han', 'eles/elas têm'],
          ],
        },
        examples: [
          ['I l’hai un frel.', 'Tenho um irmão.'],
          ['I l’hai nòm Ana.', 'Eu me chamo Ana.'],
        ],
      },
    ],
    pitfalls: ['Usar “esse” para dizer o nome: o piemontês usa “avèj nòm” (ter nome), não um verbo próprio de “chamar-se”.', 'Esquecer o “l’” antes do verbo: é “i l’hai”, não “i hai”.'],
    quiz: [
      { question: 'Como se diz “eu tenho uma irmã”?', options: ['I l’hai na seur.', 'I son na seur.', 'A l’ha na seur.'], answer: 'I l’hai na seur.', explanation: '“I l’hai” é a forma de “avèj” para “mi”.' },
      { question: '“I l’hai nòm Luca” quer dizer…', options: ['Eu me chamo Luca.', 'Eu tenho um Luca.', 'Eu sou de Luca.'], answer: 'Eu me chamo Luca.', explanation: 'O piemontês diz o nome com “avèj nòm”, literalmente “ter nome”.' },
    ],
  },
  {
    id: 'pms-g4',
    level: 'A1.2',
    title: 'A negação com nen',
    emoji: '🚫',
    summary: 'A negação “nen” vem DEPOIS do verbo, ao contrário do português.',
    sections: [
      {
        text: 'Pra negar um verbo, o piemontês só acrescenta “nen” depois dele — sem precisar de outra palavra antes, diferente do francês “ne…pas”.',
        table: {
          head: ['Afirmativa', 'Negativa', 'Tradução da negativa'],
          rows: [
            ['I son bin.', 'I son nen bin.', 'Não estou bem.'],
            ['I sai.', 'I sai nen.', 'Não sei.'],
            ['I l’hai na seur.', 'I l’hai nen seur.', 'Não tenho irmã.'],
          ],
        },
        examples: [
          ['I sai nen.', 'Eu não sei.'],
          ['Chiel a l’é nen ëd Turin.', 'Ele não é de Turim.'],
        ],
      },
    ],
    pitfalls: ['Pôr “nen” antes do verbo, como o “não” do português: em piemontês ele vem sempre depois.', 'Esquecer o pronome verbal na negativa: continua “i sai nen”, não só “sai nen”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['I sai nen.', 'Nen i sai.', 'I nen sai.'], answer: 'I sai nen.', explanation: '“Nen” vem depois do verbo conjugado.' },
      { question: 'Onde fica a negação “nen” na frase?', options: ['Depois do verbo', 'Antes do verbo', 'No fim da frase'], answer: 'Depois do verbo', explanation: 'Diferente do português, o piemontês nega colocando “nen” logo após o verbo conjugado.' },
    ],
  },
];
