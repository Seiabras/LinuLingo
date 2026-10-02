import type { StorySeed } from '../types';

/**
 * Histórias interativas do okinawano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As falas usam só vocabulário e construções confirmados em vocabulario.ts/gramatica.ts.
 */
export const STORIES_RYU: StorySeed[] = [
  {
    id: 'ryu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Haisai in Shuri',
    emoji: '🏯',
    summary: 'Você chega perto do castelo de Shuri, em Naha, e faz a sua primeira conversa em okinawano.',
    cultural_context: 'O castelo de Shuri foi a sede do Reino de Ryukyu, unificado em 1429, até a anexação do reino pelo Japão em 1879.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Haisai! Unju tā yan?',
        translation: 'Oi! Quem é você?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Haitai! Wan Linu yan.', translation: 'Oi! Eu sou o Linu.', next: 'meio' },
          { text: 'Nifēdēbiru!', translation: 'Muito obrigado!', wrong: 'Isso não responde “quem é você?”. Diga o seu nome com “Wan … yan.”.' },
        ],
      },
      meio: {
        text: 'Mensōre, Linu! Kuri gōyā yan.',
        translation: 'Bem-vindo, Linu! Isto é um gōyā (melão-amargo).',
        emoji: '🥒',
        choices: [
          { text: 'Nifēdēbiru!', translation: 'Muito obrigado!', next: 'final' },
          { text: 'Haisai!', translation: 'Oi!', wrong: 'Você já foi recebido: agora é hora de agradecer, não de cumprimentar de novo.' },
        ],
      },
      final: {
        text: 'Ī!',
        translation: 'Que bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Haisai bem dito!', message: 'Você se apresentou e agradeceu em okinawano na sua primeira conversa.' },
      },
    },
    glossary: [
      ['haisai / haitai', 'oi (dito por homem / por mulher)'],
      ['wan … yan', 'eu sou …'],
      ['mensōre', 'bem-vindo(a)'],
      ['nifēdēbiru', 'muito obrigado(a)'],
    ],
  },
  {
    id: 'ryu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mīchi gōyā',
    emoji: '🥒',
    summary: 'Numa banca em Naha, você aprende a contar gōyā (melão-amargo) em okinawano.',
    cultural_context: 'O gōyā (melão-amargo) é um ingrediente típico da culinária de Okinawa; a palavra okinawana “gōyā” foi até emprestada pelo japonês padrão.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Haisai! Kuri nū yan?',
        translation: 'Oi! O que é isso?',
        emoji: '🧑‍🌾',
        choices: [
          { text: 'Kuri gōyā yan.', translation: 'Isto é um gōyā.', next: 'contagem' },
          { text: 'Kuri tī yan.', translation: 'Isto é a mão.', wrong: 'Isso é a mão, não o que está na banca: olhe de novo, é um gōyā.' },
        ],
      },
      contagem: {
        text: 'Chā! Tīchi, tāchi…?',
        translation: 'Como! Um, dois…?',
        emoji: '🔢',
        choices: [
          { text: 'Mīchi!', translation: 'Três!', next: 'final' },
          { text: 'Tuu!', translation: 'Dez!', wrong: 'Muito rápido: depois de “tīchi, tāchi” vem “mīchi” (três), não “tuu” (dez).' },
        ],
      },
      final: {
        text: 'Nifēdēbiru!',
        translation: 'Muito obrigado!',
        emoji: '🙏',
        ending: { tone: 'bom', title: 'Mīchi gōyā!', message: 'Você contou três gōyā em okinawano.' },
      },
    },
    glossary: [
      ['gōyā', 'melão-amargo'],
      ['tīchi, tāchi, mīchi', 'um, dois, três'],
      ['nifēdēbiru', 'muito obrigado(a)'],
    ],
  },
];
