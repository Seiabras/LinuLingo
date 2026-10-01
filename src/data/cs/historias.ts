import type { StorySeed } from '../types';

/** Histórias interativas do tcheco — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_CS: StorySeed[] = [
  {
    id: 'cs-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ahoj v Praze',
    emoji: '👋',
    summary: 'Você conhece Eva na praça da Cidade Velha de Praga, perto do relógio astronômico, e faz a sua primeira conversa em tcheco.',
    cultural_context: 'O relógio astronômico de Praga, na praça da Cidade Velha (Staroměstské náměstí), funciona desde o século XV e atrai uma multidão a cada hora cheia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Jmenuji se Eva. Jak se máš?',
        translation: 'Oi! Eu me chamo Eva. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobře, děkuji! A ty?', translation: 'Bem, obrigado! E você?', next: 'dobre' },
          { text: 'Na shledanou!', translation: 'Até logo!', wrong: 'Eva acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobre: {
        text: 'Taky dobře! Odkud jsi?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Jsem ze São Paula.', translation: 'Sou de São Paulo.', next: 'final_dobry' },
          { text: 'Piju vodu.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Jsem z…”.' },
        ],
      },
      final_dobry: {
        text: 'Super! Vítej v Praze!',
        translation: 'Que legal! Bem-vindo a Praga!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dobrý začátek!', message: 'Eva sorri: você fez a sua primeira conversa em tcheco.' },
      },
    },
    glossary: [
      ['ahoj', 'oi'],
      ['jak se máš?', 'como vai?'],
      ['taky', 'também (forma do dia a dia de “také”)'],
      ['vítej', 'bem-vindo'],
    ],
  },
  {
    id: 'cs-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nedělní oběd',
    emoji: '👪',
    summary: 'Petr, um amigo de Brno, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Brno é a maior cidade da Morávia e a segunda da República Tcheca. O almoço de domingo em família é uma tradição forte no país.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Máš bratra nebo sestru?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Ano, mám bratra a sestru.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'rodina' },
          { text: 'Můj dům je velký.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “mám…”.' },
        ],
      },
      rodina: {
        text: 'Super! Chceš přijít v neděli na oběd?',
        translation: 'Que legal! Quer vir almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Ano, děkuji moc!', translation: 'Sim, muito obrigado!', next: 'final_dobry' },
          { text: 'Jsem ze São Paula.', translation: 'Sou de São Paulo.', wrong: 'Petr fez um convite: responda com “ano” ou “ne, děkuji”.' },
        ],
      },
      final_dobry: {
        text: 'Výborně! Moje máma vaří knedlíky.',
        translation: 'Ótimo! A minha mãe faz knedlíky (bolinhos de massa).',
        emoji: '🥟',
        ending: { tone: 'bom', title: 'Pozvání!', message: 'Você foi convidado para o almoço de domingo com a família de Petr.' },
      },
    },
    glossary: [
      ['bratr / sestra', 'irmão / irmã'],
      ['mám', 'eu tenho'],
      ['ano', 'sim'],
      ['oběd', 'almoço'],
    ],
  },
];
