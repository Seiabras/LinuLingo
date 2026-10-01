import type { GrammarTopic } from '../types';

/** Tópicos de gramática do vêneto — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_VEC: GrammarTopic[] = [
  {
    id: 'vec-g1',
    level: 'A1.1',
    title: 'Pronúncia: x, ƚ e as consoantes simples',
    emoji: '🔤',
    summary: 'O vêneto não dobra consoantes como o italiano, e tem duas letras próprias para sons que o português não tem.',
    sections: [
      {
        text: 'A Grafia Veneta Unitaria usa o alfabeto latino comum, mais duas letras especiais. Diferente do italiano, o vêneto quase nunca escreve consoante dobrada.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['x', '“z” de “zero”', 'xe (é/são), caxa (casa)'],
            ['ƚ', '“l” bem fraco, quase mudo em muitas falas', 'beƚo (bonito)'],
            ['s entre vogais', 'sempre surdo, como “ç”', 'cossa (o que)'],
            ['sem consoante dobrada', 'onde o italiano dobra, o vêneto não dobra', 'formajo (it. formaggio), caro (it. caro, mas belo → beƚo vs it. bello)'],
          ],
        },
        examples: [
          ['La caxa xe granda.', 'A casa é grande.'],
          ['El formajo xe bon.', 'O queijo é bom.'],
        ],
      },
    ],
    pitfalls: ['Ler “x” como o “x” do português: é sempre o som de “zero”.', 'Pronunciar as consoantes como no italiano, dobradas: no vêneto elas ficam simples.'],
    quiz: [
      { question: 'Como soa o “x” de “caxa”?', options: ['Como “z” de “zero”', 'Como “x” de “xícara”', 'Como “ks”'], answer: 'Como “z” de “zero”', explanation: 'A letra “x” do vêneto marca sempre o som “z”, que não existe sozinho em português.' },
      { question: 'O que quer dizer “caxa”?', options: ['casa', 'caixa', 'cara'], answer: 'casa', explanation: 'Do latim “casa”, com o “s” intervocálico virando o som “z”, escrito “x”.' },
    ],
  },
  {
    id: 'vec-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo essar',
    emoji: '🙋',
    summary: 'Seis pronomes e um só verbo para ser e estar: “essar”.',
    sections: [
      {
        text: 'Como o romeno e o italiano, o vêneto costuma dizer o pronome antes do verbo. “Essar” serve tanto para o que a pessoa é quanto para como ela está.',
        table: {
          head: ['Pronome', 'Tradução', 'essar'],
          rows: [
            ['mi', 'eu', 'son'],
            ['ti', 'tu, você', 'te si'],
            ['elo / ela', 'ele / ela', 'xe'],
            ['noialtri', 'nós', 'semo'],
            ['voialtri', 'vocês', 'sì'],
            ['lori', 'eles, elas', 'i xe'],
          ],
        },
        examples: [
          ['Mi son de San Paulo.', 'Sou de São Paulo.'],
          ['Noialtri semo amici.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “estar” separado: em vêneto, “mi son ben” (estou bem) usa o mesmo “essar”.'],
    quiz: [
      { question: 'Complete: “Mi ___ de Venesia.”', options: ['son', 'xe', 'semo'], answer: 'son', explanation: '“Son” é a forma de “essar” para “mi”.' },
      { question: '“Elo/ela” usa qual forma de essar?', options: ['xe', 'son', 'sì'], answer: 'xe', explanation: '“Xe” serve tanto para “ele é” quanto para “ela é” (e também para o plural “eles são”, com “i xe”).' },
    ],
  },
  {
    id: 'vec-g3',
    level: 'A1.2',
    title: 'El, la e o possessivo',
    emoji: '👪',
    summary: 'Artigos el/la/i/łe e possessivos que vêm com artigo, diferente do português informal.',
    sections: [
      {
        text: 'Os substantivos são masculinos ou femininos. O artigo definido é “el” e “la”, no plural “i” e “łe”. O possessivo vem antes do nome e, diferente do italiano, geralmente sem artigo antes do nome de parentesco próximo: “me papà” (meu pai), mas “el me can” (o meu cachorro).',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'el can', 'i cani'],
            ['feminino', 'la caxa', 'łe caxe'],
            ['meu / minha (família)', 'me papà / me mama', 'i me fradei / łe me sorele'],
          ],
        },
        examples: [
          ['La me caxa xe picola.', 'A minha casa é pequena.'],
          ['Me papà xe de Verona.', 'O meu pai é de Verona.'],
        ],
      },
    ],
    pitfalls: ['Usar artigo antes do possessivo de parentesco, como o italiano “il mio papà”: em vêneto é só “me papà”.'],
    quiz: [
      { question: 'Qual é o plural de “caxa” (casa)?', options: ['caxe', 'caxi', 'caxas'], answer: 'caxe', explanation: 'O plural feminino regular troca o -a final por -e.' },
      { question: 'Como se diz “a minha mãe”?', options: ['me mama', 'la me mama', 'me la mama'], answer: 'me mama', explanation: 'Com parentesco próximo, o possessivo vem sem artigo.' },
    ],
  },
  {
    id: 'vec-g4',
    level: 'A1.2',
    title: 'O verbo gaver e a negação com no',
    emoji: '🚫',
    summary: 'O vêneto nega só com “no” antes do verbo, sem segunda palavra, e usa “gaver” (ter) até para idade.',
    sections: [
      {
        text: 'Diferente do francês e do romanche, a negação vêneta é simples: só “no” antes do verbo. “Gaver” (ter) serve também para dizer a idade, como no italiano “avere anni”.',
        table: {
          head: ['Pronome', 'gaver', 'negativo'],
          rows: [
            ['mi', 'go', 'no go'],
            ['ti', 'ghè', 'no ghè'],
            ['elo / ela', 'ga', 'no ga'],
            ['noialtri', 'gavemo', 'no gavemo'],
            ['voialtri', 'gavì', 'no gavì'],
            ['lori', 'i ga', 'no i ga'],
          ],
        },
        examples: [
          ['Mi go un fradeo.', 'Eu tenho um irmão.'],
          ['No so.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma segunda palavra de negação, como o francês “ne... pas”: em vêneto só “no” já basta.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['No so.', 'So no.', 'Mi no so sì.'], answer: 'No so.', explanation: '“No” sozinho, antes do verbo, já nega a frase inteira.' },
      { question: '“El ga diexe ani” quer dizer…', options: ['Ele tem dez anos.', 'Ele é o décimo.', 'Ele tem dez amigos.'], answer: 'Ele tem dez anos.', explanation: 'Como no italiano, a idade se diz com o verbo “ter” (gaver), não “ser”.' },
    ],
  },
];
