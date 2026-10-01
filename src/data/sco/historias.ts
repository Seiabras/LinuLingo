import type { StorySeed } from '../types';

/** Histórias interativas do scots — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_SCO: StorySeed[] = [
  {
    id: 'sco-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hullo in Edinburgh',
    emoji: '👋',
    summary: 'Você conhece Anna numa feira em Edinburgh e faz a sua primeira conversa em scots.',
    cultural_context: 'Edinburgh é a capital da Escócia; o castelo no alto da cidade e o festival Fringe, no verão, atraem gente do mundo inteiro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Hullo! Ah'm cried Anna. Hou's it gaun?",
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Fine, thank ye! An you?', translation: 'Bem, obrigado! E você?', next: 'fine' },
          { text: 'Cheerio!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      fine: {
        text: 'Fine an aw! Whaur frae are ye?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: "Ah'm frae São Paulo.", translation: 'Sou de São Paulo.', next: 'final_guid' },
          { text: 'Ah drink watter.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use "Ah\'m frae…".' },
        ],
      },
      final_guid: {
        text: "Braw! Walcome tae Edinburgh!",
        translation: 'Que bom! Bem-vindo a Edimburgo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'A guid stairt!', message: 'Anna sorri: você fez a sua primeira conversa em scots.' },
      },
    },
    glossary: [
      ['hullo', 'oi, olá'],
      ["hou's it gaun?", 'como vai?'],
      ["ah'm frae", 'eu sou de'],
      ['walcome', 'bem-vindo'],
    ],
  },
  {
    id: 'sco-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A denner in Glesga',
    emoji: '👪',
    summary: 'Jock, um amigo de Glasgow, pergunta pela sua família e te convida para jantar.',
    cultural_context: 'Glesga (Glasgow, em scots) é a maior cidade da Escócia, famosa pela arquitetura vitoriana e pelo humor direto dos moradores.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hullo! Dae ye hae a brither or a sister?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Aye, ah hae a brither an a sister.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'brithers' },
          { text: 'Ma hoose is muckle.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use "ah hae…".' },
        ],
      },
      brithers: {
        text: 'Braw! Dae ye want tae come tae ma hoose on Seturday?',
        translation: 'Que legal! Quer vir à minha casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Aye, thank ye awfu muckle!', translation: 'Sim, muito obrigado!', next: 'final_guid' },
          { text: "Ah'm frae São Paulo.", translation: 'Sou de São Paulo.', wrong: 'Jock fez um convite: responda com "aye" ou "na, thank ye".' },
        ],
      },
      final_guid: {
        text: 'Braw! Ma mither maks breid an cheese.',
        translation: 'Muito bem! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'An invite!', message: 'Você foi convidado para jantar com a família de Jock.' },
      },
    },
    glossary: [
      ['brither / sister', 'irmão / irmã'],
      ['ah hae', 'eu tenho'],
      ['aye', 'sim'],
      ['tae ma hoose', 'na minha casa'],
    ],
  },
];
