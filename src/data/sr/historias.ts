import type { StorySeed } from '../types';

/** Histórias interativas do sérvio — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_SR: StorySeed[] = [
  {
    id: 'sr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Здраво у Београду',
    emoji: '👋',
    summary: 'Você conhece Jelena na fortaleza de Kalemegdan, em Belgrado, e faz a sua primeira conversa em sérvio.',
    cultural_context: 'A fortaleza de Kalemegdan fica no ponto em que o rio Sava deságua no Danúbio, no centro de Belgrado, a capital da Sérvia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Зовем се Јелена. Како си?',
        translation: 'Oi! Eu me chamo Jelena. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Добро, хвала! А ти?', translation: 'Bem, obrigado! E você?', next: 'dobro' },
          { text: 'Довиђења!', translation: 'Até logo!', wrong: 'Jelena acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobro: {
        text: 'И ја сам добро! Одакле си?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ја сам из Сао Паула.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Пијем воду.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use «Ја сам из…».' },
        ],
      },
      final_bom: {
        text: 'Супер! Добро дошао у Београд!',
        translation: 'Que legal! Bem-vindo a Belgrado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Добар почетак!', message: 'Jelena sorri: você fez a sua primeira conversa em sérvio.' },
      },
    },
    glossary: [
      ['здраво', 'oi'],
      ['како си?', 'como vai?'],
      ['ја сам из', 'eu sou de'],
      ['добро дошао', 'bem-vindo (a uma mulher: добро дошла)'],
    ],
  },
  {
    id: 'sr-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Недељни ручак',
    emoji: '👪',
    summary: 'Marko, um amigo de Novi Sad, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Novi Sad, às margens do Danúbio, é a segunda maior cidade da Sérvia e a capital da província da Voivodina.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Имаш ли брата или сестру?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Да, имам брата и сестру.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'porodica' },
          { text: 'Моја кућа је велика.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use «имам…».' },
        ],
      },
      porodica: {
        text: 'Супер! Хоћеш ли да дођеш на ручак у недељу?',
        translation: 'Que legal! Quer vir almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Да, много хвала!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Ја сам из Сао Паула.', translation: 'Sou de São Paulo.', wrong: 'Marko fez um convite: responda com «да» ou «не, хвала».' },
        ],
      },
      final_bom: {
        text: 'Одлично! Моја мајка прави сарму.',
        translation: 'Ótimo! A minha mãe faz sarma (charutinho de repolho).',
        emoji: '🥬',
        ending: { tone: 'bom', title: 'Позив!', message: 'Você foi convidado para o almoço de domingo com a família de Marko.' },
      },
    },
    glossary: [
      ['брат / сестра', 'irmão / irmã'],
      ['имам', 'eu tenho'],
      ['да', 'sim'],
      ['ручак', 'almoço'],
    ],
  },
];
