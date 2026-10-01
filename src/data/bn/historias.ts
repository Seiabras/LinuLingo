import type { StorySeed } from '../types';

/** Histórias interativas do bengali — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_BN: StorySeed[] = [
  {
    id: 'bn-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ঢাকার নিউ মার্কেটে নমস্কার',
    emoji: '👋',
    summary: 'Você conhece a মায়া (Maya) no New Market, um mercado histórico de Dhaka, e faz a sua primeira conversa em bengali.',
    cultural_context: 'O New Market (নিউ মার্কেট), aberto em 1954, é um dos mercados mais antigos e movimentados de Dhaka, cheio de lojas de roupa, livros e coisas do dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'নমস্কার! আমার নাম মায়া। তুমি কেমন আছ?',
        translation: 'Oi! Meu nome é Maya. Como você vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'নমস্কার! আমি ভালো, ধন্যবাদ। আর তুমি?', translation: 'Oi! Eu estou bem, obrigado(a). E você?', next: 'bhalo' },
          { text: 'বিদায়!', translation: 'Tchau!', wrong: 'A Maya acabou de se apresentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bhalo: {
        text: 'আমিও ভালো! তুমি কোথা থেকে?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'আমি সাও পাওলো থেকে।', translation: 'Eu sou de São Paulo.', next: 'final_bom' },
          { text: 'আমি চা খাই।', translation: 'Eu bebo chá.', wrong: 'Isso não responde de onde você é. Use “আমি … থেকে”.' },
        ],
      },
      final_bom: {
        text: 'ভালো! ঢাকায় স্বাগতম।',
        translation: 'Que bom! Bem-vindo(a) a Dhaka.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'নতুন বন্ধু', message: 'Maya sorri: você fez a sua primeira conversa em bengali.' },
      },
    },
    glossary: [
      ['নমস্কার', 'oi, olá; tchau'],
      ['তুমি কেমন আছ', 'como vai? (informal)'],
      ['আমি … থেকে', 'eu sou de …'],
      ['স্বাগতম', 'seja bem-vindo(a)'],
    ],
  },
  {
    id: 'bn-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'গৌরবের পরিবার',
    emoji: '👪',
    summary: 'গৌরব (Gaurav), um amigo de Dhaka, pergunta pela sua família e conta sobre a dele.',
    cultural_context: 'Na culinária bengali, de Bangladesh e de Bengala Ocidental, o arroz e o peixe são a base das refeições em família — um hábito tão marcante que é quase um símbolo da identidade bengali.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'নমস্কার! তোমার কোনো ভাই অথবা বোন আছে?',
        translation: 'Oi! Você tem algum irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'হ্যাঁ, আমার একটা ভাই আছে।', translation: 'Sim, eu tenho um irmão.', next: 'bhai' },
          { text: 'আমার বাড়ি বড়।', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “আমার … আছে”.' },
        ],
      },
      bhai: {
        text: 'ভালো! তুমি চা পছন্দ করো?',
        translation: 'Ótimo! Você gosta de chá?',
        emoji: '🍽️',
        choices: [
          { text: 'হ্যাঁ, আমি চা পছন্দ করি।', translation: 'Sim, eu gosto de chá.', next: 'final_bom' },
          { text: 'আমার একটা বই আছে।', translation: 'Eu tenho um livro.', wrong: 'Isso não responde se você gosta de chá. Use “আমি … পছন্দ করি”.' },
        ],
      },
      final_bom: {
        text: 'ভালো! আমার পরিবার বড়, আর আমরা চা পছন্দ করি।',
        translation: 'Que bom! A minha família é grande, e nós gostamos de chá.',
        emoji: '🍵',
        ending: { tone: 'bom', title: 'নতুন বন্ধু', message: 'Você conheceu a família de Gaurav e descobriu que, como você, todos gostam de chá.' },
      },
    },
    glossary: [
      ['ভাই / বোন', 'irmão / irmã'],
      ['আমার … আছে', 'eu tenho …'],
      ['হ্যাঁ', 'sim'],
      ['পছন্দ করা', 'gostar (de)'],
    ],
  },
];
