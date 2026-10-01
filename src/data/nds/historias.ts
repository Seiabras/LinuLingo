import type { StorySeed } from '../types';

/** Histórias interativas do baixo-alemão — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_NDS: StorySeed[] = [
  {
    id: 'nds-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Moin in Hamborg',
    emoji: '👋',
    summary: 'Você conhece Anna no porto de Hamburgo e faz a sua primeira conversa em baixo-alemão.',
    cultural_context: 'Hamburgo é a maior cidade do norte da Alemanha e um dos lugares onde o Plattdüütsch ainda é mais ouvido, sobretudo entre pessoas mais velhas e no porto.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Moin! Ik heet Anna. Wo geiht’t?',
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Mi geiht dat good, dankeschöön! Un di?', translation: 'Vou bem, obrigado! E você?', next: 'good' },
          { text: 'Adjüüs!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      good: {
        text: 'Mi geiht dat ook good! Woneem kümmst du vun af?',
        translation: 'Eu também vou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ik bün ut São Paulo.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Ik drink Water.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ik bün ut…”.' },
        ],
      },
      final_bom: {
        text: 'Bannig good! Willkamen in Hamborg!',
        translation: 'Que ótimo! Bem-vindo a Hamburgo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Een good Anfang!', message: 'Anna sorri: você fez a sua primeira conversa em baixo-alemão.' },
      },
    },
    glossary: [
      ['Moin', 'oi, olá'],
      ['wo geiht’t?', 'como vai?'],
      ['ik bün ut', 'eu sou de'],
      ['willkamen', 'bem-vindo'],
    ],
  },
  {
    id: 'nds-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Een Eten mit de Familie',
    emoji: '👪',
    summary: 'Jan, um amigo de Bremen, pergunta pela sua família e convida você para comer na casa dele.',
    cultural_context: 'Bremen é outra cidade histórica da Liga Hanseática, onde o baixo-alemão ainda aparece em placas, canções e no dia a dia de algumas famílias.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Moin! Hest du Bröder oder Swestern?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Ja, ik heff een Broder un een Swester.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'broder' },
          { text: 'Mien Huus is groot.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “ik heff…”.' },
        ],
      },
      broder: {
        text: 'Bannig good! Wullt du bi uns eten, Saterdag?',
        translation: 'Que ótimo! Quer comer com a gente no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Ja, dankeschöön bannig!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Ik bün ut São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Jan fez um convite: responda com “ja” ou “nee, dankeschöön”.' },
        ],
      },
      final_bom: {
        text: 'Fein! Mien Moder maakt Brood mit Kees.',
        translation: 'Ótimo! A minha mãe faz pão com queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Een Inladen!', message: 'Você foi convidado para comer com a família de Jan.' },
      },
    },
    glossary: [
      ['broder / swester', 'irmão / irmã'],
      ['ik heff', 'eu tenho'],
      ['ja', 'sim'],
      ['bi uns', 'na nossa casa'],
    ],
  },
];
