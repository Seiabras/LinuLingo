import type { StorySeed } from '../types';

/** Histórias interativas do piemontês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_PMS: StorySeed[] = [
  {
    id: 'pms-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Cerea a Turin',
    emoji: '👋',
    summary: 'Você conhece Ana numa piassa de Turim e faz a sua primeira conversa em piemontês.',
    cultural_context: 'Turim foi a primeira capital da Itália unificada (1861) e ainda guarda arcadas, cafés históricos e praças elegantes do tempo em que era a capital do Reino da Sardenha-Piemonte.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Cerea! Mi i son Ana. Coma stas-to?',
        translation: 'Oi! Eu sou a Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bin, mersi! E ti?', translation: 'Bem, obrigado! E você?', next: 'bin' },
          { text: 'Arvëdse!', translation: 'Tchau!', wrong: 'Ana acabou de te cumprimentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bin: {
        text: 'Bin ëdcò! Da andova ses-to?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'I son ëd San Pàul.', translation: 'Sou de São Paulo.', next: 'final_bin' },
          { text: 'I bèivo eva.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “I son ëd…”.' },
        ],
      },
      final_bin: {
        text: 'Bel! Bin-vnù a Turin!',
        translation: 'Que legal! Bem-vindo a Turim!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un bon ancamin!', message: 'Ana sorri: você fez a sua primeira conversa em piemontês.' },
      },
    },
    glossary: [
      ['cerea', 'oi, olá'],
      ['coma stas-to?', 'como vai?'],
      ['i son ëd', 'eu sou de'],
      ['bin-vnù', 'bem-vindo'],
    ],
  },
  {
    id: 'pms-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Un disné an famija',
    emoji: '👪',
    summary: 'Gion, um amigo de Turim, pergunta pela sua família e convida você para almoçar.',
    cultural_context: 'O almoço de domingo em família é uma tradição importante no Piemonte, geralmente com massas caseiras e um bom vin da região.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Cerea! L’has-to frej o seure?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Sì, i l’hai un frel e na seur.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frej' },
          { text: 'Mia ca a l’é gròssa.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “i l’hai…”.' },
        ],
      },
      frej: {
        text: 'Bel! Veule-to vnì con noiàutri saba?',
        translation: 'Que legal! Quer vir com a gente no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Sì, mersi tant!', translation: 'Sim, muito obrigado!', next: 'final_bin' },
          { text: 'I son ëd San Pàul.', translation: 'Sou de São Paulo.', wrong: 'Gion fez um convite: responda com “sì” ou “nò, mersi”.' },
        ],
      },
      final_bin: {
        text: 'Bon-ëssima! Mia mare a fà pan e formagg.',
        translation: 'Ótimo! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Un invit!', message: 'Você foi convidado para almoçar com a família de Gion.' },
      },
    },
    glossary: [
      ['frel / seur', 'irmão / irmã'],
      ['i l’hai', 'eu tenho'],
      ['sì', 'sim'],
      ['con noiàutri', 'com a gente'],
    ],
  },
];
