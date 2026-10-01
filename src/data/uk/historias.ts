import type { StorySeed } from '../types';

/** Histórias interativas do ucraniano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_UK: StorySeed[] = [
  {
    id: 'uk-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Приві́т у Льво́ві',
    emoji: '👋',
    summary: 'Você conhece Olia na praça do Mercado de Lviv e faz a sua primeira conversa em ucraniano.',
    cultural_context: 'A praça do Mercado (Пло́ща Ри́нок) fica no centro histórico de Lviv, no oeste da Ucrânia, que é patrimônio mundial da UNESCO.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Приві́т! Мене́ зву́ть О́ля. Як спра́ви?',
        translation: 'Oi! Eu me chamo Olia. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'До́бре, дя́кую! А в те́бе?', translation: 'Bem, obrigado! E você?', next: 'dobre' },
          { text: 'До поба́чення!', translation: 'Até logo!', wrong: 'Olia acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobre: {
        text: 'Теж до́бре! Зві́дки ти?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Я з Курити́би.', translation: 'Sou de Curitiba.', next: 'final_bom' },
          { text: 'Я п’ю во́ду.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Я з…”.' },
        ],
      },
      final_bom: {
        text: 'Чудо́во! Ла́скаво про́симо до Льво́ва!',
        translation: 'Que ótimo! Bem-vindo a Lviv!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'До́брий поча́ток!', message: 'Olia sorri: você fez a sua primeira conversa em ucraniano.' },
      },
    },
    glossary: [
      ['приві́т', 'oi'],
      ['як спра́ви?', 'como vai?'],
      ['я з…', 'eu sou de…'],
      ['ла́скаво про́симо', 'bem-vindo'],
    ],
  },
  {
    id: 'uk-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Неді́льний обі́д',
    emoji: '👪',
    summary: 'Andrii, um amigo de Kiev (Kyiv), pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Kiev (Ки́їв) é a capital da Ucrânia e uma das cidades mais antigas da Europa Oriental; o almoço de domingo costuma reunir a família.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Приві́т! У те́бе є брат або́ сестра́?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Так, у ме́не є брат і сестра́.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'simia' },
          { text: 'Мій дім вели́кий.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “у ме́не є…”.' },
        ],
      },
      simia: {
        text: 'Чудо́во! Хо́чеш прийти́ до нас на обі́д у неді́лю?',
        translation: 'Que ótimo! Quer vir almoçar com a gente no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Так, ду́же дя́кую!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Я з Курити́би.', translation: 'Sou de Curitiba.', wrong: 'Andrii fez um convite: responda com “так” ou “ні, дя́кую”.' },
        ],
      },
      final_bom: {
        text: 'Чудо́во! Моя́ ма́ма ро́бить варе́ники.',
        translation: 'Ótimo! A minha mãe faz varênyky (pasteizinhos cozidos).',
        emoji: '🥟',
        ending: { tone: 'bom', title: 'Запро́шення!', message: 'Você foi convidado para o almoço de domingo com a família de Andrii.' },
      },
    },
    glossary: [
      ['брат / сестра́', 'irmão / irmã'],
      ['у ме́не є', 'eu tenho'],
      ['так', 'sim'],
      ['обі́д', 'almoço'],
    ],
  },
];
