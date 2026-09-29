import type { StorySeed } from '../types';

/** Histórias interativas do búlgaro — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_BG: StorySeed[] = [
  {
    id: 'bg-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Здраве́й в Со́фия',
    emoji: '👋',
    summary: 'Você conhece Maria no centro de Sófia e faz a sua primeira conversa em búlgaro.',
    cultural_context: 'Sófia é a capital da Bulgária, ao pé da montanha Vitocha. No centro, ruínas da antiga cidade romana de Sérdica aparecem até dentro das estações de metrô.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраве́й! Ка́звам се Мари́я. Как си?',
        translation: 'Oi! Eu me chamo Maria. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Добре́, благодаря́! А ти?', translation: 'Bem, obrigado! E você?', next: 'dobre' },
          { text: 'Дови́ждане!', translation: 'Até logo!', wrong: 'Maria acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobre: {
        text: 'И аз съм добре́! Откъде́ си?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Аз съм от Са́о Па́уло.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Пи́я вода́.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use «Аз съм от…».' },
        ],
      },
      final_bom: {
        text: 'Чуде́сно! Добре́ дошъ́л в Со́фия!',
        translation: 'Que maravilha! Bem-vindo a Sófia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'До́бро нача́ло!', message: 'Maria sorri: você fez a sua primeira conversa em búlgaro.' },
      },
    },
    glossary: [
      ['здраве́й', 'oi'],
      ['как си?', 'como vai?'],
      ['аз съм от', 'eu sou de'],
      ['добре́ дошъ́л', 'bem-vindo (a uma mulher: добре́ дошла́)'],
    ],
  },
  {
    id: 'bg-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Неде́лен обя́д',
    emoji: '👪',
    summary: 'Gueórgui, um amigo de Plovdiv, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Plovdiv, no sul da Bulgária, é uma das cidades habitadas há mais tempo na Europa; o seu teatro romano ainda recebe espetáculos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраве́й! И́маш ли брат и́ли сестра́?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Да, и́мам брат и сестра́.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'semeistvo' },
          { text: 'Къ́щата ми е голя́ма.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use «и́мам…».' },
        ],
      },
      semeistvo: {
        text: 'Чуде́сно! И́скаш ли да до́йдеш на обя́д в неде́ля?',
        translation: 'Que maravilha! Quer vir almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Да, мно́го благодаря́!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Аз съм от Са́о Па́уло.', translation: 'Sou de São Paulo.', wrong: 'Gueórgui fez um convite: responda com «да» ou «не, благодаря́».' },
        ],
      },
      final_bom: {
        text: 'Добре́! Ма́йка ми пра́ви ба́ница.',
        translation: 'Ótimo! A minha mãe faz banitsa (torta de massa folhada com queijo).',
        emoji: '🥧',
        ending: { tone: 'bom', title: 'Пока́на!', message: 'Você foi convidado para o almoço de domingo com a família de Gueórgui.' },
      },
    },
    glossary: [
      ['брат / сестра́', 'irmão / irmã'],
      ['и́мам', 'eu tenho'],
      ['да', 'sim'],
      ['обя́д', 'almoço'],
    ],
  },
];
