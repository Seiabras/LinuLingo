import type { GrammarTopic } from '../types';

/** Tópicos de gramática do corso — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_CO: GrammarTopic[] = [
  {
    id: 'co-g1',
    level: 'A1.1',
    title: 'Pronúncia: ghj, chj e sg',
    emoji: '🔤',
    summary: 'O corso usa o alfabeto latino com alguns grupos de letras próprios para sons que o português escreve de outro jeito.',
    sections: [
      {
        text: 'Quase tudo se lê como em italiano. Os grupos que mais confundem são os que levam «j» ou «g» antes de vogal.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ghj', 'parecido com «dj»', 'ghjattu (gato), ghjovi (quinta-feira)'],
            ['chj', 'parecido com «tch»', 'chjucu (pequeno), chjamassi (chamar-se)'],
            ['sg (antes de e, i)', 'parecido com «j»', 'casgiu (queijo)'],
            ['c (antes de e, i)', 'como «tch»', 'cinque (cinco)'],
          ],
        },
        examples: [
          ['U ghjattu hè chjucu.', 'O gato é pequeno.'],
          ['U casgiu hè bonu.', 'O queijo é bom.'],
        ],
      },
    ],
    pitfalls: ['Ler «ghj» como «g» + «j» separados: é um som só.', 'Ler «chj» como «k» + «j»: soa mais perto do nosso «tch».'],
    quiz: [
      { question: 'Como soa o começo de «ghjattu» (gato)?', options: ['Parecido com «dj»', 'Como «g» de «gato»', 'Como «j» de «já»'], answer: 'Parecido com «dj»', explanation: 'O grupo «ghj» no corso soa como um «dj» molhado.' },
      { question: 'O que quer dizer «chjucu»?', options: ['pequeno', 'grande', 'bonito'], answer: 'pequeno', explanation: 'É o adjetivo para tamanho pequeno; o feminino é «chjuca».' },
    ],
  },
  {
    id: 'co-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo esse',
    emoji: '🙋',
    summary: 'Seis pronomes e um só verbo para ser e estar: «esse».',
    sections: [
      {
        text: 'Como o italiano, o corso costuma dizer o pronome mesmo quando o verbo já indica a pessoa. E «esse» serve tanto para o que a pessoa é quanto para como ela está.',
        table: {
          head: ['Pronome', 'Tradução', 'esse'],
          rows: [
            ['eiu', 'eu', 'sò'],
            ['tù', 'tu, você', 'sì'],
            ['ellu / ella', 'ele / ela', 'hè'],
            ['noi', 'nós', 'simu'],
            ['voi', 'vocês; o senhor (formal)', 'site'],
            ['elli', 'eles, elas', 'sò (ou sonu)'],
          ],
        },
        examples: [
          ['Eiu sò di San Paulu.', 'Sou de São Paulo.'],
          ['Noi simu amichi.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo «estar»: em corso, «sò bè» (estou bem) usa o mesmo «esse».'],
    quiz: [
      { question: 'Complete: «Eiu ___ di Bastia.»', options: ['sò', 'hè', 'simu'], answer: 'sò', explanation: '«Sò» é a forma de «esse» para «eiu».' },
      { question: '«Voi site» serve para…', options: ['vocês e o tratamento formal', 'só para nós', 'só para eles'], answer: 'vocês e o tratamento formal', explanation: 'Como o «voi» italiano e o «vous» francês, serve de plural e de forma educada de falar com uma pessoa.' },
    ],
  },
  {
    id: 'co-g3',
    level: 'A1.2',
    title: 'U, a e o possessivo',
    emoji: '👪',
    summary: 'Artigos u/a/i/e e possessivos que vêm com artigo antes do nome.',
    sections: [
      {
        text: 'Os substantivos são masculinos ou femininos. O artigo definido é «u» e «a», no plural «i» e «e». O plural costuma trocar a vogal final: fratellu → fratelli, surella → surelle.',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'u cane', 'i cani'],
            ['feminino', 'a casa', 'e case'],
            ['meu / minha', 'u mio babbu / a mio mamma', 'i mio fratelli / e mio surelle'],
          ],
        },
        examples: [
          ['A mio casa hè chjuca.', 'A minha casa é pequena.'],
          ['U mio babbu hè di Corti.', 'O meu pai é de Corti.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o artigo antes do possessivo: diferente do português, o corso diz «u mio babbu», com o artigo «u» antes de «mio».'],
    quiz: [
      { question: 'Qual é o plural de «surella» (irmã)?', options: ['surelle', 'surelli', 'surellae'], answer: 'surelle', explanation: 'O plural feminino regular troca o -a final por -e.' },
      { question: 'Como se diz «a minha mãe»?', options: ['a mio mamma', 'mio mamma', 'mamma mio'], answer: 'a mio mamma', explanation: 'O possessivo vem com o artigo «a» antes, diferente do português.' },
    ],
  },
  {
    id: 'co-g4',
    level: 'A1.2',
    title: 'A negação «ùn… (micca)» e o verbo avè',
    emoji: '🚫',
    summary: 'O corso nega com «ùn» antes do verbo, às vezes reforçado por «micca» depois, e usa «avè» (ter) até para a idade.',
    sections: [
      {
        text: 'A negação básica é só «ùn» antes do verbo; «micca» depois reforça, como um «mesmo» opcional. Antes de vogal, «ùn» vira «ùn’»: «ùn socu micca» (eu não sei).',
        table: {
          head: ['Pronome', 'avè', 'negativo'],
          rows: [
            ['eiu', 'aghju', 'ùn aghju micca'],
            ['tù', 'hai', 'ùn hai micca'],
            ['ellu / ella', 'hà', 'ùn hà micca'],
            ['noi', 'avemu', 'ùn avemu micca'],
            ['voi', 'avete', 'ùn avete micca'],
            ['elli', 'anu', 'ùn anu micca'],
          ],
        },
        examples: [
          ['Aghju un fratellu.', 'Tenho um irmão.'],
          ['Ùn parlu micca francese bè.', 'Eu não falo francês bem.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o «ùn» antes do verbo: só o «micca» sozinho soa incompleto.'],
    quiz: [
      { question: 'Como se diz «eu não sei»?', options: ['Ùn socu micca.', 'Socu micca.', 'Micca ùn socu.'], answer: 'Ùn socu micca.', explanation: 'A negação tem «ùn» antes do verbo; «micca» depois é um reforço comum.' },
      { question: '«Aghju dece anni» quer dizer…', options: ['Tenho dez anos.', 'Sou o décimo.', 'Tenho dez irmãos.'], answer: 'Tenho dez anos.', explanation: 'Como em italiano e em muitas línguas românicas, a idade se diz com o verbo «ter», não «ser».' },
    ],
  },
];
