import type { StorySeed } from '../types';

/**
 * Histórias interativas do pachto — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Em cada escolha, quem decide o que dizer é sempre o próprio jogador (nunca um NPC decidindo por
 * ele). Vocabulário conferido em en.wiktionary.org e en.wikivoyage.org/wiki/Pashto_phrasebook.
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
];
