import type { StorySeed } from '../types';

/** Histórias interativas do neerlandês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_NL: StorySeed[] = [
  {
    id: 'nl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hallo in Amsterdam',
    emoji: '👋',
    summary: 'Você conhece Anna na estação central de Amsterdã e faz a sua primeira conversa em neerlandês.',
    cultural_context: 'Amsterdã é a capital dos Países Baixos, famosa pelos canais e pelas bicicletas, o meio de transporte do dia a dia de muita gente.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hallo! Ik heet Anna. Hoe gaat het?',
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Goed, dank je! En met jou?', translation: 'Bem, obrigado! E você?', next: 'goed' },
          { text: 'Doei!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      goed: {
        text: 'Ook goed! Waar kom je vandaan?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ik kom uit São Paulo.', translation: 'Sou de São Paulo.', next: 'final_goed' },
          { text: 'Ik drink water.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ik kom uit…”.' },
        ],
      },
      final_goed: {
        text: 'Leuk! Welkom in Amsterdam!',
        translation: 'Que legal! Bem-vindo a Amsterdã!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Een goed begin!', message: 'Anna sorri: você fez a sua primeira conversa em neerlandês.' },
      },
    },
    glossary: [
      ['hallo', 'oi, olá'],
      ['hoe gaat het?', 'como vai?'],
      ['ik kom uit', 'eu sou de'],
      ['welkom', 'bem-vindo'],
    ],
  },
  {
    id: 'nl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Eten bij de familie',
    emoji: '👪',
    summary: 'Daan, um amigo de Utrecht, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Nos Países Baixos se janta cedo, muitas vezes por volta das seis da tarde, e o convite para jantar em casa é sinal de amizade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hoi! Heb jij broers of zussen?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Ja, ik heb een broer en een zus.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'broers' },
          { text: 'Mijn huis is groot.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “Ik heb…”.' },
        ],
      },
      broers: {
        text: 'Leuk! Kom je zaterdag bij ons eten?',
        translation: 'Que legal! Quer vir jantar na nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Ja, graag! Dank je!', translation: 'Sim, com prazer! Obrigado!', next: 'final_goed' },
          { text: 'Ik kom uit São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Daan fez um convite: responda com “Ja, graag!” ou “Nee, dank je”.' },
        ],
      },
      final_goed: {
        text: 'Super! Mijn moeder maakt stamppot.',
        translation: 'Ótimo! A minha mãe vai fazer stamppot (purê de batata com legumes).',
        emoji: '🥔',
        ending: { tone: 'bom', title: 'Een uitnodiging!', message: 'Você foi convidado para jantar com a família de Daan.' },
      },
    },
    glossary: [
      ['broer / zus', 'irmão / irmã'],
      ['ik heb', 'eu tenho'],
      ['ja, graag', 'sim, com prazer'],
      ['bij ons', 'na nossa casa'],
    ],
  },
];
