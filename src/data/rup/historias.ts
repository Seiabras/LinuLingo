import type { StorySeed } from '../types';

/** Histórias interativas do aromeno — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_RUP: StorySeed[] = [
  {
    id: 'rup-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bunã dzua tu Crushuva',
    emoji: '👋',
    summary: 'Você conhece Ana numa feira de Kruševo, na Macedônia do Norte, e faz a sua primeira conversa em aromeno.',
    cultural_context: 'Kruševo é a cidade de maior altitude da Macedônia do Norte e tem forte tradição aromena: desde 2006 o aromeno é também língua oficial do município, ao lado do macedônio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bunã dzua! Mi cljamã Ana. Cum eshti?',
        translation: 'Bom dia! Eu me chamo Ana. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ghini escu, efharisto! Tini cum eshti?', translation: 'Estou bem, obrigado! E você?', next: 'ghini' },
          { text: 'Adio!', translation: 'Tchau!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      ghini: {
        text: 'Ghini! Di iu eshti?',
        translation: 'Bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Io escu dit São Paulo.', translation: 'Eu sou de São Paulo.', next: 'final_bun' },
          { text: 'Io mi duc acasã.', translation: 'Eu vou para casa.', wrong: 'Isso não responde de onde você é. Use “Io escu dit…”.' },
        ],
      },
      final_bun: {
        text: 'Bun! Ghini vinishi!',
        translation: 'Bom! Bem-vindo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ghini vinishi!', message: 'Ana sorri: você fez a sua primeira conversa em aromeno.' },
      },
    },
    glossary: [
      ['bunã dzua', 'bom dia'],
      ['cum eshti?', 'como você está?'],
      ['escu dit', 'eu sou de'],
      ['ghini vinishi', 'bem-vindo'],
    ],
  },
  {
    id: 'rup-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Pãni shi cash',
    emoji: '🧀',
    summary: 'Andrei pergunta pela sua família e o que você come de manhã: queijo e pão, como na tradição pastoril aromena.',
    cultural_context: 'O queijo (cash) e o pastoreio de ovelhas e cabras nas montanhas têm lugar de honra na cultura tradicional aromena.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bunã! Ai frats i surãri?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Ie, am un frati shi unã sorã.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frats' },
          { text: 'Io beau apã.', translation: 'Eu bebo água.', wrong: 'Isso não responde se você tem irmãos. Use “am…”.' },
        ],
      },
      frats: {
        text: 'Bun! Tsi mãts?',
        translation: 'Bom! O que você come?',
        emoji: '🍽️',
        choices: [
          { text: 'Mãc pãni cu cash.', translation: 'Como pão com queijo.', next: 'final_bun' },
          { text: 'Casa easti mari.', translation: 'A casa é grande.', wrong: 'Andrei perguntou o que você come: responda com “mãc…”.' },
        ],
      },
      final_bun: {
        text: 'Ghini! Cashlu easti bun.',
        translation: 'Ótimo! O queijo é bom.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Mãcari ghini!', message: 'Você e Andrei compartilharam o café da manhã, do jeito aromeno.' },
      },
    },
    glossary: [
      ['frati / sorã', 'irmão / irmã'],
      ['am', 'eu tenho'],
      ['tsi mãts?', 'o que você come?'],
      ['pãni cu cash', 'pão com queijo'],
    ],
  },
];
