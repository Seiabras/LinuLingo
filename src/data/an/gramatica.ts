import type { GrammarTopic } from '../types';

/** Tópicos de gramática do aragonês — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_AN: GrammarTopic[] = [
  {
    id: 'an-g1',
    level: 'A1.1',
    title: 'Pronúncia: o F conservado, pl/cl/fl e o ch',
    emoji: '🔤',
    summary: 'O aragonês guarda sons do latim que o espanhol vizinho perdeu ou trocou — por isso soa parecido, mas nunca igual, ao castelhano.',
    sections: [
      {
        text: 'O traço mais famoso do aragonês é conservar o F do começo da palavra, onde o espanhol trocou por um H mudo. Outro é manter pl-, cl- e fl- no começo, onde o espanhol virou “ll”.',
        table: {
          head: ['Aragonês', 'Espanhol', 'Português'],
          rows: [
            ['farina', 'harina', 'farinha'],
            ['fierro', 'hierro', 'ferro'],
            ['plorar', 'llorar', 'chorar'],
            ['clau', 'llave', 'chave'],
          ],
        },
        examples: [
          ['O fillo plora.', 'O filho chora.'],
          ['Ziudá, zinco.', 'Cidade, cinco (o z soa como “s”).'],
        ],
      },
      {
        heading: 'O som “ch”',
        text: 'Onde o espanhol tem o som forte de “j” (como em “gente”), o aragonês costuma ter “ch”, como o nosso “tch”.',
        examples: [['chen, chirmán', 'gente, irmão']],
      },
    ],
    pitfalls: ['Ler “ch” como “k”: em aragonês soa como “tch”.', 'Achar que “f-” no começo da palavra é erro de grafia: é justamente a marca do aragonês.'],
    quiz: [
      { question: 'Como o aragonês diz “ferro”?', options: ['fierro', 'hierro', 'ferro'], answer: 'fierro', explanation: 'O aragonês conserva o F inicial do latim, que o espanhol trocou por H mudo.' },
      { question: 'O que quer dizer “chirmán”?', options: ['irmão', 'filho', 'amigo'], answer: 'irmão', explanation: 'Do latim germanus, com o g inicial virando “ch”, como em “chen” (gente).' },
    ],
  },
  {
    id: 'an-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo estar (ser/estar)',
    emoji: '🙋',
    summary: 'Seis pronomes e um só verbo para ser e estar: “estar”.',
    sections: [
      {
        text: 'Como o português, o aragonês costuma dizer o pronome antes do verbo. E “estar” serve tanto para o que a pessoa é quanto para como ela está.',
        table: {
          head: ['Pronome', 'Tradução', 'estar'],
          rows: [
            ['yo', 'eu', 'soi'],
            ['tu', 'tu, você', 'yes'],
            ['er / ella', 'ele / ela', 'ye'],
            ['nusatros', 'nós', 'semos'],
            ['vusatros', 'vocês', 'soz'],
            ['ers / ellas', 'eles / elas', 'son'],
          ],
        },
        examples: [
          ["Yo soi de Sant Paulo.", 'Sou de São Paulo.'],
          ['Nusatros semos amigos.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “ser” separado: em aragonês “estar” cobre os dois sentidos.'],
    quiz: [
      { question: 'Complete: “Yo ___ d’Uesca.”', options: ['soi', 'ye', 'somos'], answer: 'soi', explanation: '“Soi” é a forma de “estar” para “yo”.' },
      { question: '“Vusatros soz” se usa para falar com…', options: ['mais de uma pessoa', 'só uma criança', 'só animais'], answer: 'mais de uma pessoa', explanation: '“Vusatros” é o plural de “tu”.' },
    ],
  },
  {
    id: 'an-g3',
    level: 'A1.2',
    title: 'Os artigos o, a, os, as',
    emoji: '👪',
    summary: 'Artigos o/a/os/as, iguais aos do português — diferentes do “el/la/los/las” do espanhol.',
    sections: [
      {
        text: 'Os substantivos são masculinos ou femininos. O artigo definido é “o” e “a”, no plural “os” e “as”. O plural costuma acrescentar -s: chirmán → chirmans.',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'o can', 'os cans'],
            ['feminino', 'a casa', 'as casas'],
            ['meu / minha', 'o mío pai / a mía mai', 'os míos fillos / as mías fillas'],
          ],
        },
        examples: [
          ['A mía casa ye chicota.', 'A minha casa é pequena.'],
          ['O mío pai ye de Chaca.', 'O meu pai é de Jaca.'],
        ],
      },
    ],
    pitfalls: ['Usar o artigo espanhol “el/la” por hábito: em aragonês é “o/a”, como no português.'],
    quiz: [
      { question: 'Qual é o plural de “chirmana” (irmã)?', options: ['chirmanas', 'chirmani', 'chirmanes'], answer: 'chirmanas', explanation: 'O plural regular acrescenta -s.' },
      { question: 'Como se diz “a minha mãe”?', options: ['a mía mai', 'o mío mai', 'la mi mai'], answer: 'a mía mai', explanation: 'O possessivo concorda com “mai” (feminino) e o artigo é “a”, como no português.' },
    ],
  },
  {
    id: 'an-g4',
    level: 'A1.2',
    title: 'O verbo aber (ter) e a negação com no',
    emoji: '🚫',
    summary: '“Aber” é ter; para negar, basta pôr “no” antes do verbo.',
    sections: [
      {
        text: 'O verbo ter é irregular, mas fácil de reconhecer. Para negar, “no” vem antes do verbo, como o nosso “não”.',
        table: {
          head: ['Pronome', 'aber (ter)', 'minchar (comer)'],
          rows: [
            ['yo', 'he', 'mincho'],
            ['tu', 'has', 'minchas'],
            ['er / ella', 'ha', 'mincha'],
            ['nusatros', 'emos', 'minchamos'],
            ['vusatros', 'ez', 'minchaz'],
            ['ers / ellas', 'han', 'minchan'],
          ],
        },
        examples: [
          ['Yo he dos chirmans.', 'Tenho dois irmãos.'],
          ['No sé.', 'Não sei.'],
        ],
      },
    ],
    pitfalls: ['Usar “estar” para dizer o que se tem: posse é com “aber”.', 'Esquecer o “no” antes do verbo para negar.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['No sé.', 'Sé no.', 'Yo no sé sí.'], answer: 'No sé.', explanation: '“No” vem antes do verbo, como o “não” do português.' },
      { question: '“Qué minchas?” quer dizer…', options: ['O que você come?', 'O que ele come?', 'Onde você mora?'], answer: 'O que você come?', explanation: '“Minchas” é a forma de “tu” do verbo “minchar” (comer).' },
    ],
  },
];
