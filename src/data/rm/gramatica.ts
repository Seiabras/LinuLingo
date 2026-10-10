import type { GrammarTopic } from '../types';

/** Tópicos de gramática do romanche — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_RM: GrammarTopic[] = [
  {
    id: 'rm-g1',
    level: 'A1.1',
    title: 'Pronúncia: tg, tsch, gl e ch',
    emoji: '🔤',
    summary: 'O romanche usa o alfabeto latino com alguns grupos de letras próprios para sons que o português escreve de outro jeito.',
    sections: [
      {
        text: 'Quase tudo se lê como em português ou italiano. Os grupos que mais confundem são os de sons “molhados”, feitos com a língua no céu da boca.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['tg', 'entre “tch” e “ti”', 'notg (noite), latg (leite)'],
            ['tsch', '“tch” de “tchau”', 'tschintg (cinco)'],
            ['gl (antes de i)', '“lh”', 'famiglia (família)'],
            ['ch (antes de a, o, u)', '“tch” mole', 'chasa (casa)'],
          ],
        },
        examples: [
          ['Buna notg!', 'Boa noite!'],
          ['Il latg è alv.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: ['Ler “ch” como o “x” do português: em “chasa” o som é parecido com “tch”.', 'Ler o “tg” final como “t” + “g”: é um som só.'],
    quiz: [
      { question: 'Como começa o som de “chasa”?', options: ['Parecido com “tch”', 'Como “x” de “xícara”', 'Como “k”'], answer: 'Parecido com “tch”', explanation: 'Antes de a, o, u, o “ch” romanche soa como um “tch” mole.' },
      { question: 'O que quer dizer “latg”?', options: ['leite', 'lago', 'lado'], answer: 'leite', explanation: 'Do latim “lacte”, como o italiano “latte”.' },
    ],
  },
  {
    id: 'rm-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo esser',
    emoji: '🙋',
    summary: 'Seis pronomes e um só verbo para ser e estar: “esser”.',
    sections: [
      {
        text: 'Diferente do português e do sardo, o romanche costuma dizer o pronome: “jau sun”, “ti es”. E “esser” serve para o que a pessoa é e para como ela está.',
        table: {
          head: ['Pronome', 'Tradução', 'esser'],
          rows: [
            ['jau', 'eu', 'sun'],
            ['ti', 'tu, você', 'es'],
            ['el / ella', 'ele / ela', 'è'],
            ['nus', 'nós', 'essan'],
            ['vus', 'vocês; o senhor (formal)', 'essas'],
            ['els / ellas', 'eles / elas', 'èn'],
          ],
        },
        examples: [
          ['Jau sun da São Paulo.', 'Sou de São Paulo.'],
          ['Nus essan amis.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “estar”: em romanche, “jau sun bain” (estou bem) usa o mesmo “esser”.'],
    quiz: [
      { question: 'Complete: “Jau ___ da Cuira.”', options: ['sun', 'è', 'essan'], answer: 'sun', explanation: '“Sun” é a forma de “esser” para “jau”.' },
      { question: '“Vus essas” serve para…', options: ['vocês e o tratamento formal', 'só para nós', 'só para eles'], answer: 'vocês e o tratamento formal', explanation: 'Como o “vous” francês, “vus” é o plural e também a forma educada de falar com uma pessoa.' },
    ],
  },
  {
    id: 'rm-g3',
    level: 'A1.2',
    title: 'Il, la e o possessivo',
    emoji: '👪',
    summary: 'Artigos il/la/ils/las e possessivos que concordam com a coisa possuída.',
    sections: [
      {
        text: 'Os substantivos são masculinos ou femininos. O artigo definido é “il” e “la”, no plural “ils” e “las”, e vira “l\'” antes de vogal. O plural costuma acrescentar -s: frar → frars, sora → soras.',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'il chaun', 'ils chauns'],
            ['feminino', 'la chasa', 'las chasas'],
            ['meu / minha', 'mes bab / mia mamma', 'mes frars / mias soras'],
          ],
        },
        examples: [
          ['Mia chasa è pitschna.', 'A minha casa é pequena.'],
          ['Mes bab è da Mustér.', 'O meu pai é de Disentis.'],
        ],
      },
    ],
    pitfalls: ['Usar artigo antes do possessivo como em português (“o meu pai”): em romanche é só “mes bab”.'],
    quiz: [
      { question: 'Qual é o plural de “sora” (irmã)?', options: ['soras', 'sori', 'sorae'], answer: 'soras', explanation: 'O plural regular acrescenta -s.' },
      { question: 'Como se diz “minha mãe”?', options: ['mia mamma', 'mes mamma', 'la mia mamma'], answer: 'mia mamma', explanation: 'O possessivo concorda com “mamma” (feminino) e vem sem artigo.' },
    ],
  },
  {
    id: 'rm-g4',
    level: 'A1.2',
    title: 'A negação “na… betg” e o verbo avair',
    emoji: '🚫',
    summary: 'O romanche nega com duas partes, “na” antes do verbo e “betg” depois, e usa “avair” (ter) até para dizer o nome.',
    sections: [
      {
        text: 'Como o francês “ne… pas”, a negação romanche envolve o verbo: “jau na sai betg” (eu não sei). Antes de vogal, “na” vira “n\'”: “jau n\'hai betg temp” (não tenho tempo).',
        table: {
          head: ['Pronome', 'avair', 'negativo'],
          rows: [
            ['jau', 'hai', 'n\'hai betg'],
            ['ti', 'has', 'n\'has betg'],
            ['el / ella', 'ha', 'n\'ha betg'],
            ['nus', 'avain', 'n\'avain betg'],
            ['vus', 'avais', 'n\'avais betg'],
            ['els / ellas', 'han', 'n\'han betg'],
          ],
        },
        examples: [
          ['Jau hai num Anna.', 'Eu me chamo Anna.'],
          ['Jau na discur betg tudestg.', 'Eu não falo alemão.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “betg”: “jau na sai” sozinho soa incompleto.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Jau na sai betg.', 'Jau betg sai.', 'Na jau sai.'], answer: 'Jau na sai betg.', explanation: 'A negação tem duas partes: “na” antes do verbo e “betg” depois.' },
      { question: '“Jau hai num Luca” quer dizer…', options: ['Eu me chamo Luca.', 'Eu tenho um Luca.', 'Eu sou o Luca de alguém.'], answer: 'Eu me chamo Luca.', explanation: 'Em romanche o nome se diz com “avair num”, “ter nome”.' },
    ],
  },
  {
    id: 'rm-g5',
    level: 'A2.1',
    title: 'O futuro com vegnir + a + infinitivo',
    emoji: '🔮',
    summary: 'O romanche forma o futuro com o verbo “vegnir” (vir) conjugado, seguido de “a” (ou “ad” antes de vogal) e o infinitivo do verbo principal.',
    sections: [
      {
        table: {
          head: ['Pronome', 'vegnir', 'futuro'],
          rows: [
            ['jau', 'vegn', 'vegn a cumprar'],
            ['ti', 'vegns', 'vegns a cumprar'],
            ['el/ella', 'vegn', 'vegn a cumprar'],
            ['nus', 'vegnin', 'vegnin a cumprar'],
            ['vus', 'vegnis', 'vegnis a cumprar'],
            ['els/ellas', 'vegnan', 'vegnan a cumprar'],
          ],
        },
        text: 'É uma construção parecida com o “vou comprar” do português, só que com o verbo “vir” no lugar de “ir”: “jau vegn a cumprar” é, literalmente, “eu venho a comprar”.',
        examples: [
          ['Damaun jau vegn a lavurar.', 'Amanhã eu vou trabalhar.'],
          ['Els vegnan a discurrer rumantsch.', 'Eles vão falar romanche.'],
        ],
      },
    ],
    pitfalls: ['Confundir “vegnir” (vir, auxiliar do futuro) com “ir”: o romanche usa o verbo “vir” pra formar o futuro, ao contrário do português.'],
    quiz: [{ question: 'Como se diz "eu vou comprar" em romanche?', options: ['jau vegn a cumprar', 'jau vom a cumprar', 'jau cumpra vegn'], answer: 'jau vegn a cumprar', explanation: 'O futuro romanche usa “vegnir” (vir) + “a” + infinitivo.' }],
  },
  {
    id: 'rm-g6',
    level: 'A2.2',
    title: 'Comparativo e superlativo com “pli”',
    emoji: '📊',
    summary: 'O romanche forma o comparativo com “pli” (mais) antes do adjetivo, como o italiano “più”; o superlativo junta o artigo: “il/la pli”.',
    sections: [
      {
        text: '“Pli” funciona como o “mais” do português. O superlativo acrescenta o artigo definido (il/la/ils/las) antes de “pli” e o adjetivo.',
        examples: [
          ['Mia chasa è pli gronda che la tia.', 'Minha casa é maior que a sua.'],
          ['Las culturas las pli veglias.', 'As culturas mais antigas. (exemplo real da gramática RG)'],
        ],
      },
      {
        heading: 'O intensificador “memia”',
        text: '“Memia” (muito, demais) intensifica o adjetivo sem ser comparativo: “memia autas” é “muito altas”, não “mais altas”.',
        examples: [['Chasas memias autas.', 'Casas muito altas.']],
      },
    ],
    pitfalls: ['Confundir “pli” (mais, comparativo) com “memia” (muito, intensificador): “pli gronda” é “maior”, “memia gronda” é “grande demais”.'],
    quiz: [{ question: 'Como se diz "a cultura mais antiga" em romanche?', options: ['la pli veglia cultura', 'la cultura pli', 'pli la veglia cultura'], answer: 'la pli veglia cultura', explanation: 'O superlativo junta o artigo (la) antes de “pli” e o adjetivo.' }],
  },
];
