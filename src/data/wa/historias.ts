import type { StorySeed } from '../types';

/** Histórias interativas do valão — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_WA: StorySeed[] = [
  {
    id: 'wa-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bondjoû a Lidje',
    emoji: '👋',
    summary: 'Você conhece Anna na estação de trem de Liège e faz a sua primeira conversa em valão.',
    cultural_context: 'Liège é a maior cidade onde o valão ainda se ouve no dia a dia, com rádios e um teatro de marionetes que apresenta peças na língua.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bondjoû! Dji m’ lome Anna. Cmint va?',
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bén, merci! Et vos?', translation: 'Bem, obrigado! E você?', next: 'bén' },
          { text: 'Å r’vey!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bén: {
        text: 'Ossu bén! Di wice esti-ve?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Dji so di Sao Polo.', translation: 'Sou de São Paulo.', next: 'final_bon' },
          { text: 'Dji bwa di l’ êwe.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Dji so di…”.' },
        ],
      },
      final_bon: {
        text: 'Bén binamé! Bénvnowe a Lidje!',
        translation: 'Que legal! Bem-vindo a Liège!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'On bon c’mincemint!', message: 'Anna sorri: você fez a sua primeira conversa em valão.' },
      },
    },
    glossary: [
      ['bondjoû', 'oi, olá'],
      ['cmint va?', 'como vai?'],
      ['dji so di', 'eu sou de'],
      ['bénvnowe', 'bem-vindo'],
    ],
  },
  {
    id: 'wa-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'On gosti e famile',
    emoji: '👪',
    summary: 'Jean, um amigo de Namur, pergunta pela sua família e convida você para comer com a família dele.',
    cultural_context: 'Namur, a capital da Valônia, fica no encontro de dois rios (o Mosa e o Sambre) e tem uma forte tradição de festas de rua.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bondjoû! Avoz des frères ou des soûrs?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Oyi, dj’ a on frére eyet ene soûr.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frères' },
          { text: 'Mi måjhon est grande.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “dj’ a…”.' },
        ],
      },
      frères: {
        text: 'Bén binamé! Vloz vni vey nos-ôtes semedi?',
        translation: 'Que legal! Quer vir nos ver no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Oyi, merci fwärt!', translation: 'Sim, muito obrigado!', next: 'final_bon' },
          { text: 'Dji so di Sao Polo.', translation: 'Sou de São Paulo.', wrong: 'Jean fez um convite: responda com “oyi” ou “neni, merci”.' },
        ],
      },
      final_bon: {
        text: 'Fwärt bén! Mi moman fwait pan eyet fromadje.',
        translation: 'Muito bem! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'On raploû!', message: 'Você foi convidado para comer com a família de Jean.' },
      },
    },
    glossary: [
      ['frére / soûr', 'irmão / irmã'],
      ['dj’ a', 'eu tenho'],
      ['oyi', 'sim'],
      ['vey nos-ôtes', 'nos ver (na nossa casa)'],
    ],
  },
];
