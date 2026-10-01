import type { StorySeed } from '../types';

/** Histórias interativas do albanês, ambientadas em Tirana — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_SQ: StorySeed[] = [
  {
    id: 'sq-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Përshëndetje në Tiranë',
    emoji: '👋',
    summary: 'Você conhece Ana numa praça de Tirana e faz a sua primeira conversa em albanês.',
    cultural_context: 'Tirana é a capital e a maior cidade da Albânia, conhecida pelos prédios coloridos do centro e pela movimentada Sheshi Skënderbej (Praça Skanderbeg).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Përshëndetje! Unë quhem Ana. Si jeni?',
        translation: 'Oi! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Mirë, faleminderit! Po ju?', translation: 'Bem, obrigado! E você?', next: 'mire' },
          { text: 'Mirupafshim!', translation: 'Tchau!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      mire: {
        text: 'Edhe unë jam mirë! Nga jeni ju?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Unë jam nga Sao Paulo.', translation: 'Sou de São Paulo.', next: 'final_mire' },
          { text: 'Unë pi ujë.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Unë jam nga…”.' },
        ],
      },
      final_mire: {
        text: 'Bukur! Mirë se vini në Tiranë!',
        translation: 'Que legal! Bem-vindo a Tirana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Fillim i mirë!', message: 'Ana sorri: você fez a sua primeira conversa em albanês.' },
      },
    },
    glossary: [
      ['përshëndetje', 'oi, olá'],
      ['si jeni?', 'como vai?'],
      ['unë jam nga', 'eu sou de'],
      ['mirë se vini', 'bem-vindo'],
    ],
  },
  {
    id: 'sq-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Darkë me familjen',
    emoji: '👪',
    summary: 'Genti, um amigo de Tirana, pergunta pela sua família e convida você para jantar.',
    cultural_context: 'Receber uma visita com comida farta faz parte da hospitalidade albanesa tradicional: dizer não a um convite para jantar costuma pegar mal.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Përshëndetje! A ke vëllezër apo motra?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Po, kam një vëlla dhe një motër.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'vellezer' },
          { text: 'Shtëpia ime është e madhe.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “kam…”.' },
        ],
      },
      vellezer: {
        text: 'Bukur! Do të vish te ne të shtunën?',
        translation: 'Que legal! Você quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Po, faleminderit shumë!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Unë jam nga Sao Paulo.', translation: 'Sou de São Paulo.', wrong: 'Genti fez um convite: responda com “po” ou “jo, faleminderit”.' },
        ],
      },
      final_bom: {
        text: 'Shumë mirë! Nëna ime bën bukë me djathë.',
        translation: 'Ótimo! Minha mãe faz pão com queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Ftesë!', message: 'Você foi convidado para jantar com a família de Genti.' },
      },
    },
    glossary: [
      ['vëlla / motër', 'irmão / irmã'],
      ['kam', 'eu tenho'],
      ['po', 'sim'],
      ['te ne', 'na nossa casa'],
    ],
  },
];
