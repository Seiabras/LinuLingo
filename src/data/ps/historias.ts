import type { StorySeed } from '../types';

/**
 * Histórias interativas do pachto — uma por nível (A1.1, A1.2, e agora A2.1/A2.2, acrescentadas
 * em 09/10/2026). Em cada escolha, quem decide o que dizer é sempre o próprio jogador (nunca um
 * NPC decidindo por ele). Vocabulário conferido em en.wiktionary.org e
 * en.wikivoyage.org/wiki/Pashto_phrasebook; as histórias A2 usam só palavras e frases já
 * verificadas em vocabulario.ts e gramatica.ts.
 */
export const STORIES_PS: StorySeed[] = [
  {
    id: 'ps-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سلام په کابل کې',
    emoji: '👋',
    summary: 'Você conhece Jan numa rua de Cabul e faz a sua primeira conversa em pachto.',
    cultural_context: 'Cabul é a capital do Afeganistão, onde o pachto e o dari são as duas línguas oficiais do país.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! زما نوم جان دی. ته څنګه یې؟',
        translation: 'Olá! Meu nome é Jan. Como você está?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'ښه یم، مننه! او ته؟', translation: 'Estou bem, obrigado! E você?', next: 'bem' },
          { text: 'دا زما کور دی.', translation: 'Esta é minha casa.', wrong: 'Jan perguntou como você está — isso não responde à pergunta. Use “ښه یم” (estou bem).' },
        ],
      },
      bem: {
        text: 'ما هم ښه یم. ستاسو نوم څه دی؟',
        translation: 'Eu também estou bem. Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'زما نوم سارا دی.', translation: 'Meu nome é Sara.', next: 'final_bun' },
          { text: 'زه چای غواړم.', translation: 'Eu quero chá.', wrong: 'Jan perguntou o seu nome — responda com “زما نوم ... دی”.' },
        ],
      },
      final_bun: {
        text: 'ښه! زه ستا ملګری یم، سارا.',
        translation: 'Que bom! Eu sou seu amigo, Sara.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'لومړۍ خبرې اترې', message: 'Você fez a sua primeira conversa em pachto com Jan.' },
      },
    },
    glossary: [
      ['سلام', 'oi, olá'],
      ['ته څنګه یې؟', 'como você está?'],
      ['زما نوم ... دی', 'meu nome é ...'],
      ['ملګری', 'amigo'],
    ],
  },
  {
    id: 'ps-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'چای د جان په کور کې',
    emoji: '☕',
    summary: 'Jan convida você para a casa dele, e você conhece o pai dele, Karim, tomando chá.',
    cultural_context: 'Oferecer chá a uma visita é um gesto central de hospitalidade no Afeganistão: é raro visitar uma casa sem receber pelo menos uma xícara.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! زما مور چای لري. ته چای غواړې؟',
        translation: 'Olá! Minha mãe tem chá. Você quer chá?',
        emoji: '🫖',
        choices: [
          { text: 'هو، مننه!', translation: 'Sim, obrigado!', next: 'sim' },
          { text: 'دا زما سپی دی.', translation: 'Este é meu cachorro.', wrong: 'Isso não responde se você quer chá. Diga “هو” (sim) ou “نه” (não).' },
        ],
      },
      sim: {
        text: 'ښه! دا زما پلار دی.',
        translation: 'Que bom! Este é meu pai.',
        emoji: '👨',
        choices: [
          { text: 'سلام! ستاسو نوم څه دی؟', translation: 'Olá! Qual é o seu nome?', next: 'final_bun' },
          { text: 'زه اوبه غواړم.', translation: 'Eu quero água.', wrong: 'Isso não cumprimenta o pai de Jan. Diga “سلام” e pergunte o nome dele com “ستاسو نوم څه دی؟”.' },
        ],
      },
      final_bun: {
        text: 'زما نوم کریم دی. ته زموږ ملګری يې!',
        translation: 'Meu nome é Karim. Você é nosso amigo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'د چای ملاقات', message: 'Você conheceu o pai de Jan, Karim, tomando chá em pachto.' },
      },
    },
    glossary: [
      ['چای لري', 'tem chá'],
      ['هو / نه', 'sim / não'],
      ['ستاسو نوم څه دی؟', 'qual é o seu nome? (formal)'],
      ['زموږ', 'nosso'],
    ],
  },
  {
    id: 'ps-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'زما کورنۍ',
    emoji: '👪',
    summary: 'Sara pergunta sobre a sua família, e você descreve seu irmão e sua irmã.',
    cultural_context: 'A hospitalidade (melmastia) e a importância da família extensa são centrais no Pachtunwali, o código de honra tradicional dos pachtuns.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! ته ورور یا خور لرې؟',
        translation: 'Olá! Você tem irmão ou irmã?',
        emoji: '👋',
        choices: [
          { text: 'زه یو ورور او یوه خور لرم.', translation: 'Eu tenho um irmão e uma irmã.', next: 'familia' },
          { text: 'دا ارزان دی.', translation: 'Isso é barato.', wrong: 'Sara perguntou sobre a sua família — isso não responde à pergunta. Fale sobre “ورور” ou “خور”.' },
        ],
      },
      familia: {
        text: 'ښه! ستا ورور لوی دی که وړوکی؟',
        translation: 'Que bom! Seu irmão é grande/mais velho ou pequeno/mais novo?',
        emoji: '🧑',
        choices: [
          { text: 'زما ورور لوی دی.', translation: 'Meu irmão é mais velho.', next: 'final' },
          { text: 'زه سبا راځم.', translation: 'Eu virei amanhã.', wrong: 'Isso não descreve seu irmão. Responda com “زما ورور لوی دی.” ou “زما ورور وړوکی دی.”.' },
        ],
      },
      final: {
        text: 'ښه! زه هم یو ورور لرم.',
        translation: 'Que bom! Eu também tenho um irmão.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'زما کورنۍ', message: 'Você descreveu sua família em pachto para Sara.' },
      },
    },
    glossary: [
      ['ورور', 'irmão'],
      ['خور', 'irmã'],
      ['لوی / وړوکی', 'grande, mais velho / pequeno, mais novo'],
      ['لرم', 'eu tenho (de “لرل”, ter)'],
    ],
  },
  {
    id: 'ps-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'په بازار کې',
    emoji: '🛍️',
    summary: 'Você vai ao bazar e negocia o preço de um tapete com o vendedor Karim.',
    cultural_context: 'Negociar o preço (دا ګران دی؟) é parte comum da compra num bazar afegão, diferente do preço fixo mais comum no comércio brasileiro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! دا ګران دی، خو ښه دی.',
        translation: 'Olá! Isso é caro, mas é bom.',
        emoji: '🧵',
        choices: [
          { text: 'دا په څو دی؟', translation: 'Quanto custa isso?', next: 'preco' },
          { text: 'زه له ورور سره یم.', translation: 'Eu estou com meu irmão.', wrong: 'Isso não pergunta o preço. Pergunte com “دا په څو دی؟”.' },
        ],
      },
      preco: {
        text: 'دا سل دی. ارزان دی!',
        translation: 'Isso é cem. É barato!',
        emoji: '💵',
        choices: [
          { text: 'ښه، زه دا غواړم.', translation: 'Está bem, eu quero isso.', next: 'final' },
          { text: 'زه پوه نه شوم.', translation: 'Eu não entendo.', wrong: 'Karim já disse o preço — se quiser aceitar, diga “زه دا غواړم.”.' },
        ],
      },
      final: {
        text: 'ښه! دا ستا دود ده اوس!',
        translation: 'Ótimo! Agora isso é seu costume (sua tradição)!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'په بازار کې', message: 'Você negociou o preço de um tapete no bazar, em pachto.' },
      },
    },
    glossary: [
      ['دا په څو دی؟', 'quanto custa isso?'],
      ['ګران / ارزان', 'caro / barato'],
      ['زه دا غواړم', 'eu quero isso'],
      ['دود', 'tradição, costume'],
    ],
  },
];
