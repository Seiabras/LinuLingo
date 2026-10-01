import type { StorySeed } from '../types';

/** Histórias interativas do frísio ocidental — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_FY: StorySeed[] = [
  {
    id: 'fy-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Goeie yn Ljouwert',
    emoji: '👋',
    summary: 'Você conhece Sietse na estação de Ljouwert (Leeuwarden, em neerlandês) e faz a sua primeira conversa em frísio.',
    cultural_context: 'Ljouwert é a capital da Frísia e berço da Elfstedentocht, a lendária patinação de 200 km por onze cidades, só possível quando os canais congelam de verdade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Goeie! Ik hjit Sietse. Hoe giet it?',
        translation: 'Oi! Eu me chamo Sietse. Como vai?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Goed, tank! En do?', translation: 'Bem, obrigado! E você?', next: 'goed' },
          { text: 'Oant sjen!', translation: 'Tchau!', wrong: 'Sietse acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      goed: {
        text: 'Ek goed! Wêr komsto wei?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ik kom út São Paulo.', translation: 'Sou de São Paulo.', next: 'final_goed' },
          { text: 'Ik drink wetter.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ik kom út…”.' },
        ],
      },
      final_goed: {
        text: 'Moai! Wolkom yn Ljouwert!',
        translation: 'Que legal! Bem-vindo a Leeuwarden!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'In goed begjin!', message: 'Sietse sorri: você fez a sua primeira conversa em frísio.' },
      },
    },
    glossary: [
      ['goeie', 'oi, olá'],
      ['hoe giet it?', 'como vai?'],
      ['ik kom út', 'eu sou de'],
      ['wolkom', 'bem-vindo'],
    ],
  },
  {
    id: 'fy-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'By Marijke thús',
    emoji: '👪',
    summary: 'Marijke, uma amiga de Snits (Sneek), pergunta pela sua família e convida você para comer tsiis (queijo) na casa dela.',
    cultural_context: 'Snits é famosa pelos canais e por ser o berço da indústria naval tradicional da Frísia, além de sediar a Sneekweek, uma das maiores semanas de vela da Europa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Goeie! Hasto bruorren of susters?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Ja, ik ha ien broer en ien suster.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'bruorren' },
          { text: 'Myn hûs is grut.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “ik ha…”.' },
        ],
      },
      bruorren: {
        text: 'Moai! Wolsto by my thúskomme foar tsiis?',
        translation: 'Que legal! Quer vir à minha casa comer queijo?',
        emoji: '🧀',
        choices: [
          { text: 'Ja, tige tank!', translation: 'Sim, muito obrigado!', next: 'final_goed' },
          { text: 'Ik kom út São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Marijke fez um convite: responda com “ja” ou “nee, tank”.' },
        ],
      },
      final_goed: {
        text: 'Hearlik! Myn mem makket de bêste tsiis fan Fryslân.',
        translation: 'Ótimo! Minha mãe faz o melhor queijo da Frísia.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'In útnoeging!', message: 'Você foi convidado para comer queijo na casa de Marijke.' },
      },
    },
    glossary: [
      ['broer / suster', 'irmão / irmã'],
      ['ik ha', 'eu tenho'],
      ['ja', 'sim'],
      ['tige tank', 'muito obrigado'],
    ],
  },
];
