import type { StorySeed } from '../types';

/** Histórias interativas do eslovaco — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_SK: StorySeed[] = [
  {
    id: 'sk-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ahoj v Bratislave',
    emoji: '👋',
    summary: 'Você conhece Zuzka na Praça Principal de Bratislava e faz a sua primeira conversa em eslovaco.',
    cultural_context: 'A Praça Principal (Hlavné námestie) fica no centro histórico de Bratislava, a capital da Eslováquia, às margens do Danúbio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Volám sa Zuzka. Ako sa máš?',
        translation: 'Oi! Eu me chamo Zuzka. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobre, ďakujem! A ty?', translation: 'Bem, obrigado! E você?', next: 'dobre' },
          { text: 'Dovidenia!', translation: 'Até logo!', wrong: 'Zuzka acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobre: {
        text: 'Tiež dobre! Odkiaľ si?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Som zo São Paula.', translation: 'Sou de São Paulo.', next: 'final_dobry' },
          { text: 'Pijem vodu.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use «Som z…».' },
        ],
      },
      final_dobry: {
        text: 'Super! Vitaj v Bratislave!',
        translation: 'Que legal! Bem-vindo a Bratislava!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dobrý začiatok!', message: 'Zuzka sorri: você fez a sua primeira conversa em eslovaco.' },
      },
    },
    glossary: [
      ['ahoj', 'oi'],
      ['ako sa máš?', 'como vai?'],
      ['som z', 'eu sou de'],
      ['vitaj', 'bem-vindo'],
    ],
  },
  {
    id: 'sk-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nedeľný obed',
    emoji: '👪',
    summary: 'Peter, um amigo de Košice, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Košice é a maior cidade do leste da Eslováquia. Os «bryndzové halušky», nhoque de batata com queijo de ovelha, são considerados o prato nacional.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Máš brata alebo sestru?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Áno, mám brata a sestru.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'rodina' },
          { text: 'Môj dom je veľký.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use «mám…».' },
        ],
      },
      rodina: {
        text: 'Super! Chceš prísť v nedeľu na obed?',
        translation: 'Que legal! Quer vir almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Áno, ďakujem veľmi pekne!', translation: 'Sim, muito obrigado!', next: 'final_dobry' },
          { text: 'Som zo São Paula.', translation: 'Sou de São Paulo.', wrong: 'Peter fez um convite: responda com «áno» ou «nie, ďakujem».' },
        ],
      },
      final_dobry: {
        text: 'Výborne! Moja mama varí bryndzové halušky.',
        translation: 'Ótimo! A minha mãe faz bryndzové halušky.',
        emoji: '🥔',
        ending: { tone: 'bom', title: 'Pozvanie!', message: 'Você foi convidado para o almoço de domingo com a família de Peter.' },
      },
    },
    glossary: [
      ['brat / sestra', 'irmão / irmã'],
      ['mám', 'eu tenho'],
      ['áno', 'sim'],
      ['obed', 'almoço'],
    ],
  },
];
