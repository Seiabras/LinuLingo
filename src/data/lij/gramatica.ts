import type { GrammarTopic } from '../types';

/** Tópicos de gramática do lígure — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_LIJ: GrammarTopic[] = [
  {
    id: 'lij-g1',
    level: 'A1.1',
    title: 'Pronúncia: æ, ç, x e o "l’é"',
    emoji: '🔤',
    summary: 'O lígure usa o alfabeto latino com alguns sons próprios, parecidos com o francês e o occitano.',
    sections: [
      {
        text: 'Boa parte se lê como em italiano ou português, mas alguns sons chamam atenção de quem nunca ouviu lígure.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['æ', 'vogal aberta, entre “a” e “é”', 'cà, mæ (meu)'],
            ['ç', '“s” surdo', 'çinque (cinco)'],
            ['x', '“j” do francês “jour”', 'amixi (amigos)'],
            ['o l’é / a l’é', '“ele é” / “ela é”, com o pronome repetido', 'lê o l’é bon'],
          ],
        },
        examples: [
          ['Çinque amixi.', 'Cinco amigos.'],
          ['Lê o l’é bon.', 'Ele é bom.'],
        ],
      },
    ],
    pitfalls: ['Ler “x” como o “x” do português: em lígure soa como o “j” francês.', 'Esquecer o pronome repetido antes de “l’é”: “lê l’é” soa incompleto, o certo é “lê o l’é”.'],
    quiz: [
      { question: 'Como soa o “x” de “amixi”?', options: ['Como o “j” de “jour” em francês', 'Como o “x” de “xícara”', 'Como “ks”'], answer: 'Como o “j” de “jour” em francês', explanation: 'O “x” lígure é um som sonoro, parecido com o “j” francês.' },
      { question: 'Como se diz “ele é bom”?', options: ['Lê o l’é bon.', 'Lê l’é bon.', 'Lê bon.'], answer: 'Lê o l’é bon.', explanation: 'O pronome “o” se repete antes do verbo “ëse” na 3ª pessoa masculina.' },
    ],
  },
  {
    id: 'lij-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo ëse',
    emoji: '🙋',
    summary: 'Seis pronomes e um só verbo para ser e estar: "ëse".',
    sections: [
      {
        text: 'O lígure costuma dizer o pronome antes do verbo, como o português. Note que "estar bem" usa a expressão com "stâ" ("mi staggo ben"), não o verbo "ëse".',
        table: {
          head: ['Pronome', 'Tradução', 'ëse'],
          rows: [
            ['mi', 'eu', 'son'],
            ['ti', 'tu, você', 't’ê'],
            ['lê', 'ele, ela', 'o/a l’é'],
            ['niatri', 'nós', 'semmo'],
            ['viatri', 'vocês', 'sei'],
            ['liatri', 'eles, elas', 'son'],
          ],
        },
        examples: [
          ['Mi son de San Paolo.', 'Sou de São Paulo.'],
          ['Niatri semmo amixi.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Usar “ëse” para dizer que está bem: “estou bem” é “mi staggo ben”, com o verbo “stâ”.'],
    quiz: [
      { question: 'Complete: “Mi ___ de Zena.”', options: ['son', 'o l’é', 'semmo'], answer: 'son', explanation: '“Son” é a forma de “ëse” para “mi”.' },
      { question: 'Como se diz “estou bem”?', options: ['Mi staggo ben.', 'Mi son ben.', 'Mi ben.'], answer: 'Mi staggo ben.', explanation: 'Para “estar bem”, o lígure usa a expressão com o verbo “stâ”, não “ëse”.' },
    ],
  },
  {
    id: 'lij-g3',
    level: 'A1.2',
    title: 'O artigo "o" e "a"',
    emoji: '👪',
    summary: 'O artigo definido concorda em gênero: "o" (masculino) e "a" (feminino).',
    sections: [
      {
        text: 'Os substantivos são masculinos ou femininos. O artigo definido é "o" ou "a", e repete antes do verbo "ëse" na 3ª pessoa. O indefinido é "un" (masc.) ou "üña" (fem.).',
        table: {
          head: ['', 'definido', 'indefinido'],
          rows: [
            ['masculino', 'o can', 'un can'],
            ['feminino', 'a cà', 'üña cà'],
          ],
        },
        examples: [
          ['A cà a l’é grande.', 'A casa é grande.'],
          ['Mi ò un fræ e üña seu.', 'Tenho um irmão e uma irmã.'],
        ],
      },
    ],
    pitfalls: ['Confundir “un” (um) com “üña” (uma): o gênero da palavra decide qual usar.'],
    quiz: [
      { question: 'Como se diz “a casa”?', options: ['a cà', 'o cà', 'üña cà'], answer: 'a cà', explanation: '“Cà” (casa) é feminina, então leva o artigo “a”.' },
      { question: 'Como se diz “um irmão”?', options: ['un fræ', 'üña fræ', 'o fræ'], answer: 'un fræ', explanation: '“Fræ” (irmão) é masculino, então leva o indefinido “un”.' },
    ],
  },
  {
    id: 'lij-g4',
    level: 'A1.2',
    title: 'O verbo avei e a negação com "no"',
    emoji: '🤲',
    summary: '"Avei" é ter; para negar, basta pôr "no" antes do verbo.',
    sections: [
      {
        text: 'O verbo ter é irregular, mas segue um padrão parecido com o italiano "avere". Para negar, "no" vem antes do verbo, como o nosso "não".',
        table: {
          head: ['Pronome', 'avei (ter)'],
          rows: [
            ['mi', 'ò'],
            ['ti', 't’æ'],
            ['lê', 'o/a l’à'],
            ['niatri', 'emmo'],
            ['viatri', 'ei'],
            ['liatri', 'an'],
          ],
        },
        examples: [
          ['Mi ò doî fræ.', 'Tenho dois irmãos.'],
          ['No sò ninte.', 'Não sei nada.'],
        ],
      },
    ],
    pitfalls: ['Esquecer que “lê o l’à” (ele tem) repete o pronome “o” antes do verbo, igual ao “ëse”.'],
    quiz: [
      { question: 'Como se diz “eu não sei nada”?', options: ['Mi no sò ninte.', 'Mi sò no ninte.', 'No mi sò ninte.'], answer: 'Mi no sò ninte.', explanation: '“No” vem logo antes do verbo, como o “não” do português.' },
      { question: 'Como se diz “ela tem um gato”?', options: ['Lê a l’à un gatto.', 'Lê a ò un gatto.', 'Lê emmo un gatto.'], answer: 'Lê a l’à un gatto.', explanation: '“A l’à” é a forma de “avei” para “lê” no feminino, com o pronome repetido.' },
    ],
  },
];
