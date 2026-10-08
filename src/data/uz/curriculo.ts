import type { UnitSeed } from '../types';

/**
 * Trilha do uzbeque: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_UZ: UnitSeed[] = [
  {
    id: 'uz-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Salom! Birinchi qadamlar',
    emoji: '👋',
    card: {
      id: 'uz-c1',
      title: 'A 2ª maior língua túrquica',
      emoji: '🏛️',
      history:
        'O uzbeque é uma língua túrquica do ramo carlúquico (junto do uigur, seu parente mais próximo), com cerca de 36 milhões de falantes — a segunda língua túrquica mais falada, depois do turco. É a língua oficial do Uzbequistão e sucedeu o chagatai, outra língua carlúquica, como língua literária da região na década de 1920. Até a independência, em 1991, era escrito em cirílico; em 1993 o país aprovou por lei um alfabeto latino, revisado em 1995 para a norma usada até hoje (com os dígrafos “sh”, “ch”, “oʻ” e “gʻ”). Em setembro de 2026 o Senado uzbeque aprovou uma nova reforma, ainda em transição gradual, que troca esses dígrafos por letras únicas (sh→ş, ch→ç, oʻ→ö, gʻ→ğ) num alfabeto de 28 letras.',
      culture_tip:
        'O uzbeque não tem uma palavra só para “irmão” ou “irmã”: existe “aka” (irmão mais velho), “uka” (irmão mais novo), “opa” (irmã mais velha) e “singil” (irmã mais nova) — cada uma marca também o respeito pela ordem de idade. “Aka” e “opa” também servem para tratar com respeito quem não é da família.',
      grammar_why:
        'O uzbeque não tem um verbo separado para “ser”: a pessoa entra como um sufixo preso no fim da própria palavra. “Men oʻqituvchiman” é “eu professor-sou”. Os sufixos são -man (eu), -san (você/tu), nenhum (ele/ela), -miz (nós), -siz (vocês/você formal) e -lar (eles/elas).',
      grammar_examples: [
        ['Men oʻqituvchiman.', 'Eu sou professor(a).'],
        ['Siz oʻqituvchisiz.', 'Você é professor(a) (formal).'],
        ['Ular doʻstlar.', 'Eles são amigos.'],
        ['Men yaxshiman, rahmat.', 'Eu estou bem, obrigado.'],
      ],
      character_guide: [
        ['sh', 'como o “ch” do português em “chá”', 'Toshkent (Tashkent)'],
        ['ch', 'como o “tch” de “tchau”', 'choy (chá)'],
        ['oʻ', 'vogal própria, sem equivalente exato em português (entre o “o” e o “a”)', 'oʻn (dez), doʻst (amigo)'],
        ['gʻ', 'um som gutural, da garganta, vindo de palavras árabes/persas', 'goʻsht (carne)'],
        ['q', 'um “k” dito mais atrás na garganta, diferente de “k”', 'qora (preto)'],
        ['x', 'um som gutural, como o “r” carioca ou o “ch” do alemão “Bach”', 'xayr (tchau)'],
      ],
    },
    lessons: [
      {
        id: 'uz-u1-l1',
        title: 'Salom, rahmat, xayr!',
        kind: 'licao',
        words: ['salom', 'assalomu alaykum', 'rahmat', 'marhamat', 'xayr', 'kechirasiz'],
        cloze: [
          { sentence: '___! Yaxshimisiz?', answer: 'Salom', options: ['Salom', 'Xayr', 'Rahmat'], translation: 'Oi! Como vai?' },
          { sentence: 'Bir choy, ___.', answer: 'marhamat', options: ['marhamat', 'rahmat', 'xayr'], translation: 'Um chá, por favor.' },
          { sentence: '___, doʻstim!', answer: 'Rahmat', options: ['Rahmat', 'Salom', 'Kechirasiz'], translation: 'Obrigado, meu amigo!' },
        ],
        voice: {
          bot: 'Salom! Yaxshimisiz?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Men yaxshiman, rahmat!', 'yaxshiman', 'rahmat'],
          hint: 'Responda que está bem com “Men yaxshiman, rahmat!”.',
        },
        communityPrompt: 'Escreva três expressões em uzbeque: uma saudação (“Salom” ou “Assalomu alaykum”), um agradecimento (“Rahmat”) e uma despedida (“Xayr”).',
      },
      {
        id: 'uz-u1-l2',
        title: 'Men, sen, u, biz',
        kind: 'licao',
        words: ['men', 'sen', 'u', 'biz', 'siz', 'ular'],
        cloze: [
          { sentence: '___ oʻqituvchiman.', answer: 'Men', options: ['Men', 'Sen', 'U'], translation: 'Eu sou professor(a).' },
          { sentence: '___ doʻstlar.', answer: 'Ular', options: ['Ular', 'Biz', 'Siz'], translation: 'Eles são amigos.' },
          { sentence: '___ doʻstmiz.', answer: 'Biz', options: ['Biz', 'Ular', 'Sen'], translation: 'Nós somos amigos.' },
        ],
        voice: {
          bot: 'Siz kimsiz?',
          botTranslation: 'Quem é você? (formal)',
          expected: ['Men Linuman.', 'men', 'man'],
          hint: 'Diga quem você é com “Men … -man”.',
        },
        communityPrompt: 'Apresente-se em uzbeque: diga “Men …-man” com seu nome ou profissão.',
      },
      {
        id: 'uz-u1-l3',
        title: 'Test: birinchi qadamlar',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Assalomu alaykum! Siz kimsiz?',
          botTranslation: 'Olá! Quem é você?',
          expected: ['Vaalaykum assalom! Men Linuman.', 'vaalaykum assalom', 'men', 'man'],
          hint: 'Responda a saudação (“Vaalaykum assalom!”) e diga quem você é com “Men …-man”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação, quem você é (“Men …-man”) e uma despedida (“Xayr”).',
      },
    ],
  },
  {
    id: 'uz-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Oilam va raqamlar',
    emoji: '👪',
    card: {
      id: 'uz-c2',
      title: 'Mening ismim: a posse com sufixo',
      emoji: '🏷️',
      history:
        'Taşkent, Samarcanda e Bucara — todas no Uzbequistão — foram paradas centrais da Rota da Seda, onde o persa, o árabe e as línguas túrquicas convivem há mais de mil anos. É por isso que boa parte do vocabulário do dia a dia uzbeque, como “oila” (família) e “kitob” (livro), vem do árabe, enquanto a gramática continua totalmente túrquica.',
      culture_tip:
        'Em uzbeque não se diz “o meu nome”: o possessivo entra como sufixo preso na própria palavra. “Ism” é “nome”; “mening ismim” é, letra por letra, “de-mim nome-meu”. A palavra “mening” pode até ser deixada de lado, porque o sufixo já basta.',
      grammar_why:
        'O possessivo tem duas partes: o pronome no genitivo (mening, sening, uning, bizning, sizning, ularning) e um sufixo preso no substantivo. Em palavras terminadas em consoante, os sufixos são -im, -ing, -i, -imiz, -ingiz, -lari (ex.: ism → ismim, isming, ismi…). Em palavras terminadas em vogal, perdem o “i”: -m, -ng, -si, -miz, -ngiz, -lari (ex.: oila → oilam, oilang, oilasi…).',
      grammar_examples: [
        ['Mening ismim Linu.', 'Meu nome é Linu.'],
        ['Bu mening oilam.', 'Esta é a minha família.'],
        ['Bu mening singlim.', 'Esta é a minha irmã mais nova.'],
        ['U mening akam.', 'Ele é o meu irmão mais velho.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'uz-u2-l1',
        title: 'Mening oilam',
        kind: 'licao',
        words: ['oila', 'ona', 'ota', 'aka', 'opa', 'bola'],
        cloze: [
          { sentence: 'Bu mening ___.', answer: 'oilam', options: ['oilam', 'onam', 'akam'], translation: 'Esta é a minha família.' },
          { sentence: 'Mening ___ yaxshi.', answer: 'onam', options: ['onam', 'otam', 'oilam'], translation: 'Minha mãe está bem.' },
          { sentence: 'U mening ___.', answer: 'akam', options: ['akam', 'opam', 'bolam'], translation: 'Ele é meu irmão mais velho.' },
        ],
        voice: {
          bot: 'Sizning oilangiz katta mi?',
          botTranslation: 'Sua família é grande?',
          expected: ['Ha, mening oilam katta.', 'mening oilam', 'katta'],
          hint: 'Responda com “Ha, mening oilam katta” ou “Yoʻq, mening oilam kichik”.',
        },
        communityPrompt: 'Descreva sua família em uzbeque: “Mening oilam …” e cite a mãe (ona), o pai (ota) ou um irmão/irmã.',
      },
      {
        id: 'uz-u2-l2',
        title: 'Raqamlar',
        kind: 'licao',
        words: ['bir', 'ikki', 'uch', 'toʻrt', 'besh', 'olti'],
        cloze: [
          { sentence: '___, ikki, uch.', answer: 'Bir', options: ['Bir', 'Besh', 'Olti'], translation: 'Um, dois, três.' },
          { sentence: 'Toʻrt, ___, olti.', answer: 'besh', options: ['besh', 'bir', 'ikki'], translation: 'Quatro, cinco, seis.' },
          { sentence: 'Men ___ doʻstim bor.', answer: 'ikki', options: ['ikki', 'bir', 'uch'], translation: 'Eu tenho dois amigos.' },
        ],
        voice: {
          bot: 'Nechta doʻstingiz bor?',
          botTranslation: 'Quantos amigos você tem?',
          expected: ['Ikki doʻstim bor.', 'doʻstim bor'],
          hint: 'Diga quantos amigos tem com um número e “doʻstim bor” (tenho amigo(s)).',
        },
        communityPrompt: 'Conte de um a seis em uzbeque e escreva quantas pessoas tem na sua família.',
      },
      {
        id: 'uz-u2-l3',
        title: 'Test: oila va raqamlar',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Oilangiz haqida gapiring: sizning oilangiz katta mi?',
          botTranslation: 'Conte sobre sua família: sua família é grande?',
          expected: ['Mening oilam katta. Men ikki akam bor.', 'mening oilam', 'bor'],
          hint: 'Diga se sua família é grande/pequena (“mening oilam katta/kichik”) e quantos irmãos tem.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e os números que aprendeu, usando “mening … -m/-im” e “bor”.',
      },
    ],
  },
];
