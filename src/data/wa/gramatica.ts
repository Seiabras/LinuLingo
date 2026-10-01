import type { GrammarTopic } from '../types';

/** Tópicos de gramática do valão — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_WA: GrammarTopic[] = [
  {
    id: 'wa-g1',
    level: 'A1.1',
    title: 'Pronúncia: å, dj, tch e o xh',
    emoji: '🔤',
    summary: 'A grafia Rfondou walon usa algumas letras e grupos próprios para sons que o português escreve de outro jeito.',
    sections: [
      {
        text: 'Boa parte do valão se lê parecido com o francês ou o português. Os sinais que mais chamam atenção são o “å” e os grupos “dj”, “tch” e “xh”.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['å', 'um “a” fechado, quase “o” curto', 'måjhon (casa)'],
            ['dj', 'como o “dj” de “adjetivo”', 'dji (eu), djåser (falar)'],
            ['tch', 'como o “tch” de “tchau”', 'tchén (cachorro), tchet (gato)'],
            ['xh', 'som só do valão, entre “h” soprado e “sh”', 'mwaxhî (lavar roupa)'],
          ],
        },
        examples: [
          ['Dji d’meure a Lidje.', 'Eu moro em Liège.'],
          ['Li tchet est noer.', 'O gato é preto.'],
        ],
      },
    ],
    pitfalls: ['Ler “dj” como duas letras separadas: é um som só, parecido com o “dj” de “adjetivo”.', 'Ler “å” como o “a” aberto do português: no valão ele soa mais fechado.'],
    quiz: [
      { question: 'Como soa o “tch” de “tchén”?', options: ['Parecido com “tch” de “tchau”', 'Como “t” + “ch” separados', 'Como “k”'], answer: 'Parecido com “tch” de “tchau”', explanation: 'O grupo “tch” no valão soa como o nosso “tch”.' },
      { question: 'O que quer dizer “måjhon”?', options: ['casa', 'mão', 'manhã'], answer: 'casa', explanation: 'É a palavra valona para “casa”, com o “å” fechado típico da grafia Rfondou walon.' },
    ],
  },
  {
    id: 'wa-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo esse',
    emoji: '🙋',
    summary: 'Seis pronomes e um só verbo para ser e estar: “esse”.',
    sections: [
      {
        text: 'O valão costuma dizer o pronome, como o português: “dji so”, “t’ es”. E “esse” serve tanto para o que a pessoa é quanto para como ela está.',
        table: {
          head: ['Pronome', 'Tradução', 'esse'],
          rows: [
            ['dji', 'eu', 'so'],
            ['ti', 'tu, você', 'es'],
            ['i / ele', 'ele / ela', 'est'],
            ['nos', 'nós', 'estans'],
            ['vos', 'vocês; o senhor (formal)', 'estoz'],
            ['is', 'eles', 'sont'],
          ],
        },
        examples: [
          ['Dji so di Sao Polo.', 'Sou de São Paulo.'],
          ['Is sont soçons.', 'Eles são amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “estar” diferente: em valão, “dji so bén” (estou bem) usa o mesmo “esse”.'],
    quiz: [
      { question: 'Complete: “Dji ___ di Lidje.”', options: ['so', 'est', 'estans'], answer: 'so', explanation: '“So” é a forma de “esse” para “dji”.' },
      { question: '“Vos estoz” serve para…', options: ['vocês e o tratamento formal', 'só para nós', 'só para eles'], answer: 'vocês e o tratamento formal', explanation: 'Como em francês, “vos” é o plural e também a forma educada de falar com uma pessoa.' },
    ],
  },
  {
    id: 'wa-g3',
    level: 'A1.2',
    title: 'O artigo li/l’ e o possessivo',
    emoji: '👪',
    summary: 'O artigo “li” (ou “l’” antes de vogal) e os possessivos antes do nome.',
    sections: [
      {
        text: 'O artigo definido é “li”, e vira “l’” antes de vogal. O possessivo vai antes do nome, sem artigo junto: “mi popa” (meu pai), “mi moman” (minha mãe).',
        table: {
          head: ['', 'Exemplo'],
          rows: [
            ['masculino', 'li tchén (o cachorro)'],
            ['antes de vogal', 'l’ erbe (a grama)'],
            ['meu / minha', 'mi popa / mi moman'],
          ],
        },
        examples: [
          ['Mi famile est grande.', 'A minha família é grande.'],
          ['Mi popa est di Nameur.', 'O meu pai é de Namur.'],
        ],
      },
    ],
    pitfalls: ['Pôr artigo antes do possessivo, como em português (“o meu pai”): em valão é só “mi popa”.'],
    quiz: [
      { question: 'Como se diz “a grama”?', options: ['l’ erbe', 'li erbe', 'la erbe'], answer: 'l’ erbe', explanation: 'O artigo “li” perde a vogal antes de palavra que começa com vogal.' },
      { question: 'Como se diz “minha mãe”?', options: ['mi moman', 'li mi moman', 'moman mi'], answer: 'mi moman', explanation: 'O possessivo vem antes do nome, sem artigo junto.' },
    ],
  },
  {
    id: 'wa-g4',
    level: 'A1.2',
    title: 'A negação com nén e o verbo awè',
    emoji: '🚫',
    summary: 'O valão nega com duas partes, “n’” antes do verbo e “nén” depois, e usa “awè” (ter) até para dizer o nome.',
    sections: [
      {
        text: 'Como o francês “ne… pas”, a negação valona envolve o verbo: “dji n’ sai nén” (eu não sei). O verbo “awè” (ter) muda bastante conforme a pessoa.',
        table: {
          head: ['Pronome', 'awè', 'negativo'],
          rows: [
            ['dji', 'dj’ a', 'dji n’ a nén'],
            ['ti', 't’ as', 'ti n’ as nén'],
            ['i / ele', 'il a', 'i n’ a nén'],
            ['nos', 'avans', 'n’ avans nén'],
            ['vos', 'avoz', 'n’ avoz nén'],
            ['is', 'ont', 'n’ ont nén'],
          ],
        },
        examples: [
          ['Dj’ a on frére.', 'Eu tenho um irmão.'],
          ['Dji n’ djåse nén francès, mi.', 'Eu não falo francês.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “nén”: “dji n’ sai” sozinho soa incompleto.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Dji n’ sai nén.', 'Dji nén sai.', 'Nén dji sai.'], answer: 'Dji n’ sai nén.', explanation: 'A negação tem duas partes: “n’” antes do verbo e “nén” depois.' },
      { question: '“Dji m’ lome Luc” quer dizer…', options: ['Eu me chamo Luc.', 'Eu tenho um Luc.', 'Eu sou o Luc de alguém.'], answer: 'Eu me chamo Luc.', explanation: 'Em valão o nome se diz com “si lomer”, “se chamar”.' },
    ],
  },
];
