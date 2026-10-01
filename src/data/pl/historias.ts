import type { StorySeed } from '../types';

/** Histórias interativas do polonês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_PL: StorySeed[] = [
  {
    id: 'pl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Cześć w Krakowie',
    emoji: '👋',
    summary: 'Você conhece Ania na praça do Mercado de Cracóvia e faz a sua primeira conversa em polonês.',
    cultural_context: 'A praça do Mercado (Rynek Główny) fica no centro histórico de Cracóvia, antiga capital da Polônia e patrimônio mundial da UNESCO.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Cześć! Mam na imię Ania. Jak się masz?',
        translation: 'Oi! Meu nome é Ania. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobrze, dziękuję! A ty?', translation: 'Bem, obrigado! E você?', next: 'dobrze' },
          { text: 'Do widzenia!', translation: 'Até logo!', wrong: 'Ania acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobrze: {
        text: 'Też dobrze! Skąd jesteś?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Jestem z São Paulo.', translation: 'Sou de São Paulo.', next: 'final_dobry' },
          { text: 'Piję wodę.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Jestem z…”.' },
        ],
      },
      final_dobry: {
        text: 'Super! Witaj w Krakowie!',
        translation: 'Que legal! Bem-vindo a Cracóvia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dobry początek!', message: 'Ania sorri: você fez a sua primeira conversa em polonês.' },
      },
    },
    glossary: [
      ['cześć', 'oi'],
      ['jak się masz?', 'como vai?'],
      ['jestem z', 'eu sou de'],
      ['witaj', 'bem-vindo'],
    ],
  },
  {
    id: 'pl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Obiad z rodziną',
    emoji: '👪',
    summary: 'Tomek, um amigo de Gdańsk, pergunta pela sua família e convida você para almoçar com a família dele.',
    cultural_context: 'Na Polônia, o “obiad” é a refeição principal do dia e costuma ser feito no começo da tarde; aos domingos, reúne a família.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Cześć! Masz brata albo siostrę?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Tak, mam brata i siostrę.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'rodzina' },
          { text: 'Mój dom jest duży.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “mam…”.' },
        ],
      },
      rodzina: {
        text: 'Super! Chcesz zjeść obiad z nami w niedzielę?',
        translation: 'Que legal! Quer almoçar com a gente no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Tak, dziękuję bardzo!', translation: 'Sim, muito obrigado!', next: 'final_dobry' },
          { text: 'Jestem z São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Tomek fez um convite: responda com “tak” ou “nie, dziękuję”.' },
        ],
      },
      final_dobry: {
        text: 'Bardzo dobrze! Moja mama robi pierogi.',
        translation: 'Muito bem! A minha mãe faz pierogi.',
        emoji: '🥟',
        ending: { tone: 'bom', title: 'Zaproszenie!', message: 'Você foi convidado para o almoço de domingo com a família de Tomek.' },
      },
    },
    glossary: [
      ['brat / siostra', 'irmão / irmã'],
      ['mam', 'eu tenho'],
      ['tak', 'sim'],
      ['obiad', 'almoço, a refeição principal'],
    ],
  },
];
