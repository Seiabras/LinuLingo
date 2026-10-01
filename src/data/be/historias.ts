import type { StorySeed } from '../types';

/** Histórias interativas do bielorrusso — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_BE: StorySeed[] = [
  {
    id: 'be-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Прывіта́нне ў Мі́нску',
    emoji: '👋',
    summary: 'Você conhece Volia na estação de trem de Minsk e faz a sua primeira conversa em bielorrusso.',
    cultural_context: 'Minsk é a capital de Belarus, reconstruída quase por inteiro depois da Segunda Guerra Mundial, com largas avenidas e arquitetura soviética.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Прывіта́нне! Мяне́ зва́ць Во́ля. Як спра́вы?',
        translation: 'Oi! Eu me chamo Volia. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'До́бра, дзя́куй! А ты?', translation: 'Bem, obrigado! E você?', next: 'dobra' },
          { text: 'Да пабачэ́ння!', translation: 'Tchau!', wrong: 'Volia acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobra: {
        text: 'Тако́сама до́бра! Адку́ль ты?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Я з Сан-Паўлу.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Я п’ю ваду́.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Я з…”.' },
        ],
      },
      final_bom: {
        text: 'Цу́дава! Сардэ́чна запра́шаем у Мінск!',
        translation: 'Que legal! Bem-vindo a Minsk!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Добры пача́так!', message: 'Volia sorri: você fez a sua primeira conversa em bielorrusso.' },
      },
    },
    glossary: [
      ['прывіта́нне', 'oi, olá'],
      ['як спра́вы?', 'como vai?'],
      ['я з', 'eu sou de'],
      ['сардэ́чна запра́шаем', 'bem-vindo'],
    ],
  },
  {
    id: 'be-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Вячэ́ра ў сям’і́',
    emoji: '👪',
    summary: 'Andrei, um amigo de Gomel, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Gomel é a segunda maior cidade de Belarus, às margens do rio Sož, no sudeste do país.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Прывіта́нне! У цябе́ ёсць бра́ты ці сёстры?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Так, у мяне́ ёсць брат і сястра́.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'irmaos' },
          { text: 'Мой дом вялі́кі.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “у мяне́ ёсць…”.' },
        ],
      },
      irmaos: {
        text: 'Цу́дава! Хо́чаш пайсці́ да нас у субо́ту?',
        translation: 'Que legal! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Так, вя́лікі дзя́куй!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Я з Сан-Паўлу.', translation: 'Sou de São Paulo.', wrong: 'Andrei fez um convite: responda com “так” ou “не, дзя́куй”.' },
        ],
      },
      final_bom: {
        text: 'Цу́дава! Мая́ ма́ма гату́е хлеб і сыр.',
        translation: 'Ótimo! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Запрашэ́нне!', message: 'Você foi convidado para jantar com a família de Andrei.' },
      },
    },
    glossary: [
      ['брат / сястра́', 'irmão / irmã'],
      ['у мяне́ ёсць', 'eu tenho'],
      ['так', 'sim'],
      ['да нас', 'na nossa casa'],
    ],
  },
];
