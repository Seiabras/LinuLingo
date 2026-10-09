import type { StorySeed } from '../types';

/**
 * Histórias interativas do persa — uma por subnível (A1.1 a A2.2), pacote incompleto até A2.2 (ver
 * `incomplete` em index.ts). Contexto cultural de «Grand Bazaar, Tehran»
 * ‹https://en.wikipedia.org/wiki/Grand_Bazaar,_Tehran› e de «Taarof»
 * ‹https://en.wikipedia.org/wiki/Taarof› (a cortesia de insistir/recusar).
 */
export const STORIES_FA: StorySeed[] = [
  {
    id: 'fa-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سلام در بازار',
    emoji: '👋',
    summary: 'Você conhece Maryam no Grande Bazar de Teerã e faz a sua primeira conversa em persa.',
    cultural_context:
      'O Grande Bazar de Teerã tem corredores com mais de 10 km de extensão ao todo e já era ponto de comércio desde a conquista muçulmana da Pérsia, no século 7.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! نامِ من مریم است. حالِ شما چطور است؟',
        translation: 'Oi! Meu nome é Maryam. Como você está (formal)?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'من خوب هستم، خیلی ممنون.', translation: 'Eu estou bem, muito obrigado.', next: 'bem' },
          { text: 'خداحافظ!', translation: 'Tchau!', wrong: 'Maryam acabou de te cumprimentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bem: {
        text: 'خوب! شما از کجا هستید؟',
        translation: 'Bom! De onde você é (formal)?',
        emoji: '😊',
        choices: [
          { text: 'من از برزیل هستم.', translation: 'Eu sou do Brasil.', next: 'final' },
          { text: 'من یک چای می‌خواهم.', translation: 'Eu quero um chá.', wrong: 'Isso não responde de onde você é. Use “من از … هستم”.' },
        ],
      },
      final: {
        text: 'چه خوب! این بازار بزرگ است.',
        translation: 'Que bom! Este bazar é grande.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'یک شروعِ خوب!', message: 'Maryam sorri: você fez a sua primeira conversa em persa no bazar.' },
      },
    },
    glossary: [
      ['سلام', 'oi, olá'],
      ['حالِ شما چطور است؟', 'como você está (formal)'],
      ['من از … هستم', 'eu sou de …'],
      ['بازار', 'bazar'],
    ],
  },
  {
    id: 'fa-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'چای با خانواده',
    emoji: '👪',
    summary: 'Arash, um conhecido, pergunta pela sua família e te convida pra um chá.',
    cultural_context:
      'No Irã existe o “taarof”: um ritual de cortesia em que um convite costuma ser recusado uma vez (ou mais) por educação antes de aceito. Mesmo dizendo “بله” de primeira, não se surpreenda se o convite for repetido.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! من آرش هستم. شما خواهر یا برادر دارید؟',
        translation: 'Oi! Eu sou o Arash. Você tem irmã ou irmão (formal)?',
        emoji: '📱',
        choices: [
          { text: 'بله، من یک برادر دارم.', translation: 'Sim, eu tenho um irmão.', next: 'brother' },
          { text: 'این بازار بزرگ است.', translation: 'Este bazar é grande.', wrong: 'Isso não responde se você tem irmãos. Use “من یک برادر/خواهر دارم”.' },
        ],
      },
      brother: {
        text: 'چه خوب! شما یک چای می‌خواهید؟',
        translation: 'Que legal! Você quer um chá (formal)?',
        emoji: '☕',
        choices: [
          { text: 'بله، خیلی ممنون.', translation: 'Sim, muito obrigado.', next: 'final' },
          { text: 'من از برزیل هستم.', translation: 'Eu sou do Brasil.', wrong: 'Arash fez um convite pra um chá: responda com “بله” ou “نه، خیلی ممنون”.' },
        ],
      },
      final: {
        text: 'خوب است! این چای خوب است.',
        translation: 'Que bom! Este chá é bom.',
        emoji: '🍵',
        ending: {
          tone: 'bom',
          title: 'یک دعوتِ گرم!',
          message: 'Um lembrete de taarof: não se surpreenda se Arash oferecer o chá de novo, mesmo depois do seu “بله” — insistir com educação faz parte do convite.',
        },
      },
    },
    glossary: [
      ['برادر / خواهر', 'irmão / irmã'],
      ['من … دارم', 'eu tenho …'],
      ['چای', 'chá'],
      ['بله / نه', 'sim / não'],
    ],
  },
  {
    id: 'fa-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'آب و هوا در تهران',
    emoji: '🌦️',
    summary: 'Você encontra Sara na rua de Teerã e conversa sobre o tempo e a roupa que vai vestir.',
    cultural_context: 'Comentar o tempo é um dos assuntos mais comuns de conversa informal em qualquer cidade do Irã, assim como no Brasil.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! آب و هوای امروز چطور است؟',
        translation: 'Oi! Como está o tempo hoje?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'امروز سرد است.', translation: 'Hoje está frio.', next: 'frio' },
          { text: 'من پزشک هستم.', translation: 'Eu sou médico(a).', wrong: 'Sara perguntou sobre o tempo, não sobre a sua profissão. Use “امروز … است”.' },
        ],
      },
      frio: {
        text: 'شاید برف بیاید! چه لباسی می‌پوشید؟',
        translation: 'Talvez vá nevar! Que roupa você vai vestir?',
        emoji: '❄️',
        choices: [
          { text: 'من کلاه و کفش می‌پوشم.', translation: 'Eu vou vestir chapéu e sapatos.', next: 'final_bom' },
          { text: 'من خوشحال هستم.', translation: 'Eu estou feliz.', wrong: 'Isso não responde que roupa você vai vestir. Use “من … می‌پوشم”.' },
        ],
      },
      final_bom: {
        text: 'خوب است! خیابان امروز سرد است.',
        translation: 'Que bom! A rua está fria hoje.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'آماده برای برف!', message: 'Você e Sara estão prontos para o frio na cidade.' },
      },
    },
    glossary: [
      ['آب و هوا', 'o tempo, o clima'],
      ['سرد / گرم', 'frio / quente'],
      ['برف می‌آید', 'vai nevar'],
      ['من … می‌پوشم', 'eu vou vestir …'],
    ],
  },
  {
    id: 'fa-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'شغلِ شما چیست؟',
    emoji: '🩺',
    summary: 'Você conhece Kaveh no hospital e conversa sobre profissões e sentimentos.',
    cultural_context: 'Perguntar pela profissão de alguém (“شغلِ شما چیست؟”) é comum logo nas primeiras trocas de uma conversa nova no Irã.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! من پزشک هستم. شغلِ شما چیست؟',
        translation: 'Oi! Eu sou médico. Qual é a sua profissão (formal)?',
        emoji: '🙋',
        choices: [
          { text: 'من مهندس هستم.', translation: 'Eu sou engenheiro(a).', next: 'mohandes' },
          { text: 'امروز سرد است.', translation: 'Hoje está frio.', wrong: 'Kaveh perguntou sobre a sua profissão. Use “من … هستم”.' },
        ],
      },
      mohandes: {
        text: 'خوب! امروز چطور هستید؟',
        translation: 'Bom! Como você está hoje?',
        emoji: '😊',
        choices: [
          { text: 'من خسته هستم چون زیاد کار می‌کنم.', translation: 'Estou cansado(a) porque trabalho muito.', next: 'final_bom' },
          { text: 'او معلم است.', translation: 'Ele/ela é professor(a).', wrong: 'Kaveh perguntou como você está, não sobre outra pessoa. Use “من … هستم”.' },
        ],
      },
      final_bom: {
        text: 'ناراحت نباشید! شما مهندسِ خوبی هستید.',
        translation: 'Não fique triste! Você é um(a) bom(boa) engenheiro(a).',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'مهندسِ خوشحال!', message: 'Kaveh te anima: você é um(a) مهندس (engenheiro(a)) cansado(a), mas no caminho certo.' },
      },
    },
    glossary: [
      ['شغلِ شما چیست؟', 'qual é a sua profissão?'],
      ['پزشک / مهندس / معلم', 'médico / engenheiro / professor'],
      ['خوشحال / ناراحت / خسته', 'feliz / triste / cansado'],
      ['چون زیاد کار می‌کنم', 'porque eu trabalho muito'],
    ],
  },
];
