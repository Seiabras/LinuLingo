import type { StorySeed } from '../types';

/**
 * Histórias interativas do persa — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Contexto cultural de «Grand Bazaar, Tehran» ‹https://en.wikipedia.org/wiki/Grand_Bazaar,_Tehran›
 * e de «Taarof» ‹https://en.wikipedia.org/wiki/Taarof› (a cortesia de insistir/recusar).
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
];
