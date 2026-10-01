import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do ladino das Dolomitas (idioma do vale de Badia) — por enquanto só A1.1 e
 * A1.2 (pacote incompleto). Conjugações conferidas nas tabelas verbais do dicionário
 * «Dizionar Ladin Val Badia–Talian» do Istitut Ladin Micurá de Rü.
 */
export const GRAMMAR_LLD: GrammarTopic[] = [
  {
    id: 'lld-g1',
    level: 'A1.1',
    title: 'Pronúncia: ë, ö, ü e as letras c e ch',
    emoji: '🔤',
    summary: 'O badiot usa o alfabeto latino com três vogais com trema e regras para c, ch, g e gh parecidas com as do italiano.',
    sections: [
      {
        text: 'Quase tudo se lê como em português ou italiano. As novidades são três vogais que o português não tem e a troca entre “c” e “ch” antes de e e i.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ë', 'vogal central, entre “a” e “e”', 'sëra (noite), bëgn (bem)'],
            ['ö', '“e” com os lábios arredondados', 'nöt (noite), incö (hoje)'],
            ['ü', '“i” com os lábios arredondados', 'düc (todos), nü (nove)'],
            ['c (antes de e, i) / ci', '“tch”', 'cité (cidade), ciasa (casa)'],
            ['ch (antes de e, i)', '“k”', 'chiló (aqui), chësc (este)'],
            ['j', 'como o “j” do português', 'jí (ir), jöbia (quinta-feira)'],
          ],
        },
        examples: [
          ['Bona nöt!', 'Boa noite!'],
          ['Iö vá te cité.', 'Eu vou à cidade.'],
        ],
      },
    ],
    pitfalls: [
      'Ler “ciasa” com “s” de “sapo”: é “tch” no começo e o “s” entre vogais soa como “z”.',
      'Ignorar o trema: “ö” e “ü” mudam o som e muitas vezes o sentido da palavra.',
    ],
    quiz: [
      { question: 'Como começa o som de “cité” (cidade)?', options: ['Com “tch”', 'Com “s”', 'Com “k”'], answer: 'Com “tch”', explanation: 'Antes de e e i, o “c” ladino soa “tch”, como no italiano “città”.' },
      { question: 'O que quer dizer “nöt”?', options: ['noite', 'não', 'nove'], answer: 'noite', explanation: 'Do latim “nocte”; “bona nöt” é “boa noite”. Nove é “nü”.' },
    ],
  },
  {
    id: 'lld-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo ester',
    emoji: '🙋',
    summary: 'Os pronomes pessoais do badiot e o presente de “ester” (ser, estar).',
    sections: [
      {
        text: 'Os pronomes são iö, tö, ël (ele), ëra (ela), nos, os e ëi (eles) ou ëres (elas). O verbo “ester” serve para dizer o que ou de onde a pessoa é. Repare que “iö sun” e “nos sun” têm a mesma forma, e a terceira pessoa é “é” no singular e no plural.',
        table: {
          head: ['Pronome', 'Tradução', 'ester'],
          rows: [
            ['iö', 'eu', 'sun'],
            ['tö', 'tu, você', 'es'],
            ['ël / ëra', 'ele / ela', 'é'],
            ['nos', 'nós', 'sun'],
            ['os', 'vocês; o senhor (formal)', 'sëis'],
            ['ëi / ëres', 'eles / elas', 'é'],
          ],
        },
        examples: [
          ['Iö sun da São Paulo.', 'Sou de São Paulo.'],
          ['Os sëis mi compagns.', 'Vocês são meus amigos.'],
        ],
      },
      {
        text: 'Na fala, além do pronome forte, aparecem formas curtas grudadas no verbo: “i” para eu, “al” para ele, “ara” para ela e “ai” para eles: “al é n bun pere” (ele é um bom pai), “ara é na bona compagna” (ela é uma boa amiga).',
        examples: [
          ['Al é n bun pere.', 'Ele é um bom pai.'],
          ['Ara é na bona compagna.', 'Ela é uma boa amiga.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “os” (vocês, ou o senhor/a senhora) com o artigo português “os”.',
      'Estranhar “iö sun” e “nos sun”: são mesmo iguais, e quem mostra a pessoa é o pronome.',
    ],
    quiz: [
      { question: 'Complete: “Iö ___ da Curitiba.”', options: ['sun', 'é', 'sëis'], answer: 'sun', explanation: '“Sun” é a forma de “ester” para “iö” (e também para “nos”).' },
      { question: '“Os sëis” serve para…', options: ['vocês e o tratamento formal', 'só para nós', 'só para eles'], answer: 'vocês e o tratamento formal', explanation: 'Como o “vous” francês, “os” é o plural e também a forma educada de falar com uma pessoa.' },
    ],
  },
  {
    id: 'lld-g3',
    level: 'A1.2',
    title: 'Le, la e o possessivo',
    emoji: '👪',
    summary: 'Artigos le/la/i/les, os indefinidos n/na e possessivos que concordam com a coisa possuída.',
    sections: [
      {
        text: 'Os substantivos são masculinos ou femininos. O artigo definido é “le” e “la”, no plural “i” e “les”, e vira “l\'” antes de vogal. O indefinido é “n” (masculino) e “na” (feminino). O plural nem sempre é só um -s: iat → iac, fre → fredesc, so → sorus.',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'le iat', 'i iac'],
            ['feminino', 'la ciasa', 'les ciases'],
            ['meu / minha', 'mi fre / mia ciasa', 'mi fredesc / mies sorus'],
          ],
        },
        examples: [
          ['Mia ciasa é picera.', 'A minha casa é pequena.'],
          ['To cian é propi pros.', 'O seu cachorro é mesmo bonzinho.'],
        ],
      },
    ],
    pitfalls: [
      'Usar artigo antes do possessivo como em português (“o meu irmão”): em badiot é só “mi fre”.',
      'Confundir “so” (irmã) com o possessivo “so” (seu, dele): “so pere” é “o pai dele”.',
    ],
    quiz: [
      { question: 'Qual é o plural de “fre” (irmão)?', options: ['fredesc', 'fres', 'frei'], answer: 'fredesc', explanation: 'É um plural irregular: n fre, dui fredesc.' },
      { question: 'Como se diz “minha casa”?', options: ['mia ciasa', 'mi ciasa', 'la mia ciasa'], answer: 'mia ciasa', explanation: 'O possessivo concorda com “ciasa” (feminino) e vem sem artigo.' },
    ],
  },
  {
    id: 'lld-g4',
    level: 'A1.2',
    title: 'Perguntas com “pa” e a negação “ne… nia”',
    emoji: '❓',
    summary: 'Nas perguntas o verbo ganha uma terminação própria e a partícula “pa”; para negar, “ne” antes do verbo e “nia” depois.',
    sections: [
      {
        text: 'O badiot tem uma forma do verbo só para perguntar: “tö as” (você tem) vira “aste?”, “tö es” (você é) vira “este?”. Quase sempre vem junto a partícula “pa”: “Co aste pa inom?”, “Da olá este pa?”.',
        table: {
          head: ['Pronome', 'avëi', 'na pergunta'],
          rows: [
            ['iö', 'á', 'ái?'],
            ['tö', 'as', 'aste?'],
            ['ël / ëra', 'á', 'ál? / ára?'],
            ['nos', 'un', 'unse?'],
            ['os', 'ëis', 'ëise?'],
            ['ëi / ëres', 'á', 'ái? / áres?'],
          ],
        },
        examples: [
          ['Aste pa fredesc y sorus?', 'Você tem irmãos e irmãs?'],
          ['Can vaste pa a ciasa?', 'Quando você vai para casa?'],
        ],
      },
      {
        text: 'Para negar, “ne” vem antes do verbo e “nia” depois, como o francês “ne… pas”: “iö ne sá nia” (eu não sei). Antes de vogal, “ne” vira “n\'”.',
        examples: [
          ['Iö ne sá nia.', 'Eu não sei.'],
          ['Ne te plejel nia?', 'Você não gosta?'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “nia”: “iö ne sá” sozinho soa incompleto.', 'Usar “tö as?” para perguntar: a forma de pergunta é “aste?”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Iö ne sá nia.', 'Iö nia sá.', 'Ne iö sá.'], answer: 'Iö ne sá nia.', explanation: 'A negação tem duas partes: “ne” antes do verbo e “nia” depois.' },
      { question: '“Co aste pa inom?” quer dizer…', options: ['Como você se chama?', 'Onde você mora?', 'O que você quer?'], answer: 'Como você se chama?', explanation: 'Em badiot o nome se diz com “avëi inom”, “ter nome”; “aste” é a forma de pergunta de “tö as”.' },
    ],
  },
];
