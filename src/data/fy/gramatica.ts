import type { GrammarTopic } from '../types';

/** Tópicos de gramática do frísio ocidental — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_FY: GrammarTopic[] = [
  {
    id: 'fy-g1',
    level: 'A1.1',
    title: 'Pronúncia: û, oe, sk e tsj',
    emoji: '🔤',
    summary: 'O frísio usa o alfabeto latino com alguns sons e grupos de letras próprios.',
    sections: [
      {
        text: 'Boa parte do frísio se lê parecido com o neerlandês ou o inglês. Os grupos que mais chamam atenção são estes.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['û', 'um “u” fechado', 'hûs (casa), hûn (cachorro)'],
            ['oe', 'como o “u” do português', 'goeie (olá), moarn (amanhã)'],
            ['sk', 'como o “sk” de “esqui”, nunca “sh”', 'Frysk (frísio)'],
            ['tsj', 'som “molhado”, parecido com “tch”', 'tsiis (queijo)'],
          ],
        },
        examples: [
          ['Goeie! Hoe giet it?', 'Oi! Como vai?'],
          ['Myn hûn is lyts.', 'Meu cachorro é pequeno.'],
        ],
      },
    ],
    pitfalls: ['Ler “sk” como “sh” do inglês: no frísio é sempre “sk”, como em “esqui”.', 'Ler “û” como o “u” aberto do português: no frísio ele é mais fechado, quase um “u” curto e tenso.'],
    quiz: [
      { question: 'Como soa o “sk” de “Frysk”?', options: ['Como “sk” de “esqui”', 'Como “sh” do inglês', 'Como “sc” do italiano'], answer: 'Como “sk” de “esqui”', explanation: 'O frísio nunca lê “sk” como “sh”, mesmo antes de i/e.' },
      { question: 'O que quer dizer “hûs”?', options: ['casa', 'cachorro', 'hoje'], answer: 'casa', explanation: '“Hûs” é cognato do inglês “house” e do alemão “Haus”.' },
    ],
  },
  {
    id: 'fy-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo wêze (ser/estar)',
    emoji: '🙋',
    summary: 'Sete pronomes e um só verbo para ser e estar: “wêze”.',
    sections: [
      {
        text: 'Como o português, o frísio costuma dizer o pronome antes do verbo. “Wêze” serve tanto para o que a pessoa é quanto para como ela está — como o inglês “to be”.',
        table: {
          head: ['Pronome', 'Tradução', 'wêze'],
          rows: [
            ['ik', 'eu', 'bin'],
            ['do', 'tu, você', 'bist'],
            ['hy / sy', 'ele / ela', 'is'],
            ['wy', 'nós', 'binne'],
            ['jimme', 'vocês', 'binne'],
            ['hja', 'eles, elas', 'binne'],
          ],
        },
        examples: [
          ['Ik bin út Brazilië.', 'Sou do Brasil.'],
          ['Wy binne freonen.', 'Nós somos amigos.'],
        ],
      },
      {
        heading: 'O pronome grudado no verbo',
        text: 'Com “do”, muitos verbos frisões grudam o pronome como um “-sto” no final, em vez de escrever “do” separado: “hjitsto” (você se chama) em vez de “do hjitst”.',
        examples: [['Hoe hjitsto?', 'Como você se chama?']],
      },
    ],
    pitfalls: ['Procurar um verbo “estar” separado: “ik bin goed” (estou bem) usa o mesmo “wêze”.'],
    quiz: [
      { question: 'Complete: “Ik ___ út Ljouwert.”', options: ['bin', 'is', 'binne'], answer: 'bin', explanation: '“Bin” é a forma de “wêze” para “ik”.' },
      { question: 'Como se diz “você se chama” grudando o pronome?', options: ['hjitsto', 'do hjit', 'hjitte do'], answer: 'hjitsto', explanation: 'O “do” vira “-sto” grudado no verbo “hjitte”.' },
    ],
  },
  {
    id: 'fy-g3',
    level: 'A1.2',
    title: 'Os artigos de/it e o possessivo',
    emoji: '👪',
    summary: 'Artigo “de” para a maioria das palavras e “it” para os neutros, mais o possessivo antes do nome.',
    sections: [
      {
        text: 'Os substantivos frísios são “de-wurden” (a maioria) ou “it-wurden” (neutros, como hûs, brea e wetter). O possessivo vem sempre antes do nome, sem artigo junto.',
        table: {
          head: ['', 'Artigo', 'Exemplo'],
          rows: [
            ['de-wurd', 'de', 'de kat (o gato)'],
            ['it-wurd', 'it', 'it hûs (a casa)'],
            ['possessivo', '—', 'myn heit (meu pai), myn mem (minha mãe)'],
          ],
        },
        examples: [
          ['It hûs is lyts.', 'A casa é pequena.'],
          ['Myn heit is út Fryslân.', 'O meu pai é da Frísia.'],
        ],
      },
    ],
    pitfalls: ['Pôr artigo antes do possessivo, como às vezes em português (“o meu pai”): em frísio é só “myn heit”.', 'Usar “de” com palavras neutras como “hûs”: o certo é “it hûs”.'],
    quiz: [
      { question: 'Como se diz “a casa”?', options: ['it hûs', 'de hûs', 'in hûs'], answer: 'it hûs', explanation: '“Hûs” é um it-wurd (substantivo neutro).' },
      { question: 'Como se diz “minha mãe”?', options: ['myn mem', 'de myn mem', 'mem myn'], answer: 'myn mem', explanation: 'O possessivo vem antes do nome, sem artigo.' },
    ],
  },
  {
    id: 'fy-g4',
    level: 'A1.2',
    title: 'O verbo hawwe (ter) e a negação com net',
    emoji: '🚫',
    summary: '“Hawwe” é ter; para negar, basta pôr “net” depois do verbo — bem mais simples que o francês.',
    sections: [
      {
        text: 'A negação frísia usa uma única palavra, “net”, colocada depois do verbo (ou do que está sendo negado). Não há duas partes como no francês “ne…pas”.',
        table: {
          head: ['Pronome', 'hawwe (ter)', 'afirmativa', 'negativa'],
          rows: [
            ['ik', 'ha', 'ik wit it', 'ik wit it net'],
            ['do', 'hast', 'do hast gelyk', 'do hast net gelyk'],
            ['hy / sy', 'hat', 'hy is der', 'hy is der net'],
          ],
        },
        examples: [
          ['Ik ha ien broer.', 'Tenho um irmão.'],
          ['Ik wit it net.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Procurar duas palavras de negação como no francês: em frísio “net” sozinho já nega a frase.', 'Esquecer o “net”: “ik wit it” sozinho é afirmativo.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Ik wit it net.', 'Ik net wit it.', 'Net ik wit it.'], answer: 'Ik wit it net.', explanation: '“Net” vem depois do verbo e do que está sendo negado.' },
      { question: '“Ik ha ien suster” quer dizer…', options: ['Tenho uma irmã.', 'Eu sou uma irmã.', 'Minha irmã tem um.'], answer: 'Tenho uma irmã.', explanation: '“Ha” é a forma de “hawwe” (ter) para “ik”.' },
    ],
  },
];
