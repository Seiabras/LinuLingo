import type { StorySeed } from '../types';

/** Histórias interativas do bengali — uma por subnível, de A1.1 até A2.2 (pacote incompleto). */
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
  {
    id: 'bn-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'কলেজ স্ট্রিটে বই কেনা',
    emoji: '📚',
    summary: 'Na College Street de Kolkata, o “Boi Para” (bairro dos livros), মায়া (Maya) ajuda você a escolher um livro num dia chuvoso.',
    cultural_context: 'A College Street é famosa por suas bancas e livrarias que vendem livros novos e usados há mais de um século, perto da Universidade de Calcutá — um dos maiores mercados de livros do mundo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'নমস্কার! আজ বৃষ্টি হচ্ছে। তুমি কী করছ?',
        translation: 'Oi! Hoje está chovendo. O que você está fazendo?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'নমস্কার! আমি একটা বই দেখছি।', translation: 'Oi! Eu estou olhando um livro.', next: 'boi' },
          { text: 'আমার বয়স বিশ বছর।', translation: 'Eu tenho vinte anos.', wrong: 'Maya perguntou o que você está fazendo, não a sua idade. Use “আমি … করছি”.' },
        ],
      },
      boi: {
        text: 'ভালো! এই দোকানে ভালো বই আছে। তুমি কিনবে?',
        translation: 'Que bom! Esta loja tem bons livros. Você vai comprar?',
        emoji: '📖',
        choices: [
          { text: 'হ্যাঁ, এটা কত টাকা?', translation: 'Sim, quanto custa isto?', next: 'final_bom' },
          { text: 'আজ খুব গরম।', translation: 'Hoje está muito calor.', wrong: 'Isso não responde se você vai comprar. Diga “হ্যাঁ” ou “না”.' },
        ],
      },
      final_bom: {
        text: 'এটা পঞ্চাশ টাকা। তোমার জন্য চল্লিশে দিয়ে দিব!',
        translation: 'Isto custa cinquenta taka. Para você, deixo por quarenta!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'বই পাড়ায় একদিন', message: 'Você comprou o seu primeiro livro na College Street, debaixo de chuva.' },
      },
    },
    glossary: [
      ['করছি', 'estou fazendo'],
      ['বৃষ্টি হচ্ছে', 'está chovendo'],
      ['কত টাকা', 'quanto custa'],
      ['দোকান', 'loja'],
    ],
  },
  {
    id: 'bn-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'সুন্দরবনে একটা নতুন শুরু',
    emoji: '🐅',
    summary: 'No Sundarban, a maior floresta de mangue do mundo, গৌরব (Gaurav) pergunta sobre a sua profissão e os seus planos para o futuro.',
    cultural_context: 'O Sundarban, dividido entre Bangladesh e Bengala Ocidental, é o único habitat de mangue do mundo com uma população do tigre-de-bengala — reconhecido Patrimônio Mundial da UNESCO (parte indiana em 1987, parte de Bangladesh em 1997).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'নমস্কার! তুমি কী কাজ কর?',
        translation: 'Oi! Qual é o seu trabalho?',
        emoji: '📱',
        choices: [
          { text: 'আমি একজন ইঞ্জিনিয়ার।', translation: 'Eu sou engenheiro(a).', next: 'kaj' },
          { text: 'আজ বৃষ্টি হচ্ছে।', translation: 'Hoje está chovendo.', wrong: 'Isso não responde sobre o seu trabalho. Diga a sua profissão.' },
        ],
      },
      kaj: {
        text: 'ভালো! তুমি কাল কী করবে?',
        translation: 'Que ótimo! O que você vai fazer amanhã?',
        emoji: '😊',
        choices: [
          { text: 'আমি কাল বাংলা পড়ব।', translation: 'Eu vou estudar bengali amanhã.', next: 'final_bom' },
          { text: 'আমি দুঃখিত।', translation: 'Eu estou triste.', wrong: 'Gaurav perguntou sobre os seus planos de amanhã, não sobre como você se sente. Use o futuro: “আমি কাল … -ব/-বে”.' },
        ],
      },
      final_bom: {
        text: 'বেশ ভালো! আমিও খুব খুশি যে তুমি বাংলা শিখছ।',
        translation: 'Muito bom! Eu também estou muito feliz que você esteja aprendendo bengali.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'নতুন শুরু', message: 'Você falou sobre o seu trabalho e os seus planos de futuro em bengali, no Sundarban.' },
      },
    },
    glossary: [
      ['কাজ করা', 'trabalhar'],
      ['কাল করবে', 'você vai fazer amanhã'],
      ['পড়ব', 'eu vou estudar (futuro)'],
      ['খুশি', 'feliz'],
    ],
  },
];
