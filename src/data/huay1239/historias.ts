import type { StorySeed } from '../types';

/**
 * Histórias do quéchua de Áncash — uma por nível (A1.1 e A1.2), curso incompleto. Ambientadas em
 * Huaraz, no Callejón de Huaylas. Todas as falas são do [WIKI] («Quechua de Huaylas»: o breve
 * vocabulário e os exemplos do verbo “ser” implícito; «Quechua ancashino»: as interjeições), com a
 * tradução deles.
 */
export const STORIES_HUAY1239: StorySeed[] = [
  {
    id: 'huay1239-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Pitaq?',
    emoji: '🚪',
    summary: 'O Linu bate à porta de uma casa em Huaraz.',
    cultural_context:
      'Huaraz fica no Callejón de Huaylas, o vale aos pés da Cordilheira Branca, onde se fala o dialeto de Huaylas do quéchua de Áncash.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Pitaq?',
        translation: 'Quem é?',
        emoji: '🚪',
        choices: [
          { text: 'Nuqallaa.', translation: 'Sou eu, aqui estou.', next: 'como' },
          { text: 'Alalaw!', translation: 'Que frio!', wrong: 'Perguntaram quem é. Responda: “Nuqallaa” (sou eu).' },
        ],
      },
      como: {
        text: 'Yaw! Imanawllataq kaykanki?',
        translation: 'Olá! Como você está?',
        emoji: '👋',
        choices: [
          { text: 'Yamayllam kaykaa.', translation: 'Estou bem.', next: 'final' },
          { text: 'Imatan?', translation: 'O que é?', wrong: 'Perguntaram como você está. Diga “Yamayllam kaykaa”.' },
        ],
      },
      final: {
        text: 'Yamayllaku kaykanki?',
        translation: 'Você está bem mesmo?',
        emoji: '😊',
        ending: { tone: 'bom', title: 'Yamayllam!', message: 'Você respondeu ao “Pitaq?” e ao “Imanawllataq kaykanki?” no quéchua de Huaylas.' },
      },
    },
    glossary: [
      ['Pitaq?', 'quem é?'],
      ['Nuqallaa', 'sou eu'],
      ['Imanawllataq kaykanki?', 'como você está?'],
      ['Yamayllam kaykaa', 'estou bem'],
    ],
  },
  {
    id: 'huay1239-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Allqupaqku?',
    emoji: '🐕',
    summary: 'Numa tarde fria, o Linu leva comida e pergunta para quem é.',
    cultural_context:
      'Na serra de Áncash faz frio, e o quéchua tem uma palavra só para reclamar dele: “Alalaw!”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Alalaw!',
        translation: 'Que frio!',
        emoji: '🥶',
        choices: [
          { text: 'Awmi!', translation: 'Sim!', next: 'oque' },
          { text: 'Ananaw!', translation: 'Que cansaço!', wrong: 'Ela reclamou do frio. Concorde: “Awmi!”.' },
        ],
      },
      oque: {
        text: 'Imatan?',
        translation: 'O que é?',
        emoji: '❔',
        choices: [
          { text: 'Allqupaqku?', translation: 'É para o cachorro?', next: 'final' },
          { text: 'Nuqam.', translation: 'Sou eu.', wrong: 'Ela perguntou o que é, e não quem. Pergunte: “Allqupaqku?”.' },
        ],
      },
      final: {
        text: 'Allqupaqmi.',
        translation: 'É para o cachorro, sim.',
        emoji: '🐕',
        ending: { tone: 'bom', title: 'Allqupaqmi!', message: 'Você usou o -ku da pergunta e entendeu o -mi da resposta.' },
      },
    },
    glossary: [
      ['Alalaw!', 'que frio!'],
      ['Imatan?', 'o que é?'],
      ['Allqupaqku?', 'é para o cachorro?'],
      ['Allqupaqmi', 'é para o cachorro, sim'],
    ],
  },
];
