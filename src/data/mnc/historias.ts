import type { StorySeed } from '../types';

/**
 * Histórias do manchu (mnc), uma por subnível do A1. As falas são frases do guia do Wikivoyage e dos
 * exemplos da Wikipédia (ver vocabulario.ts); “ere mini boo” (esta é minha casa) e “si cai omimbio?”
 * (você bebe chá?) juntam palavras dessas fontes. Os nomes que o jogador pode escolher, ᠯᡳᠨᠠ (Lina) e
 * ᠮᡝᡵᡤᡝᠨ (Mergen, “sábio”, nome usado por manchus e mongóis), são escritos letra por letra.
 */
export const STORIES_MNC: StorySeed[] = [
  {
    id: 'mnc-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ᠰᡳ ᠰᠠᡳᠶᡡᠨ?',
    emoji: '👋',
    summary: 'Um encontro num grupo de estudos de manchu: cumprimentar, dizer seu nome e conhecer alguém.',
    cultural_context: 'Com tão poucos falantes nativos, hoje o manchu vive sobretudo em aulas, grupos de estudo e associações culturais na China, onde aprendizes treinam as frases do dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ᠰᡳ ᠰᠠᡳᠶᡡᠨ?',
        translation: 'Como vai você?',
        emoji: '👋',
        choices: [
          { text: 'ᠰᠠᡳᠨ᠈ ᠪᠠᠨᡳᡥᠠ᠉', translation: 'Bem, obrigado(a).', next: 'nome' },
          { text: 'ᠵᠠᡳ ᠠᠴᠠᡴᡳ᠉', translation: 'Até logo.', wrong: 'Você acabou de chegar! Responda ao cumprimento com “sain, baniha” (bem, obrigado).' },
        ],
      },
      nome: {
        text: 'ᠰᡳᠨᡳ ᡤᡝᠪᡠ ᠠᡳ ᠰᡝᠮᠪᡳ?',
        translation: 'Como você se chama?',
        emoji: '❓',
        choices: [
          { text: 'ᠮᡳᠨᡳ ᡤᡝᠪᡠ Lᡳᠨᠠ᠉', translation: 'Meu nome é Lina.', next: 'prazer' },
          { text: 'ᠮᡳᠨᡳ ᡤᡝᠪᡠ Mᡝᡵᡤᡝᠨ᠉', translation: 'Meu nome é Mergen.', next: 'prazer' },
          { text: 'ᠸᠠᡴᠠ᠉', translation: 'Não.', wrong: 'A pergunta é sobre o seu nome. Responda com “mini gebu…” (meu nome é…).' },
        ],
      },
      prazer: {
        text: 'ᠰᡳᠨᡩᡝ ᡠᠴᠠᡵᠠᡥᠠ ᡩᡝ ᡠᡵᡤᡠᠨᠵᡝᠮᠪᡳ᠉',
        translation: 'Prazer em conhecer você.',
        emoji: '🤝',
        choices: [
          { text: 'ᠪᠠᠨᡳᡥᠠ!', translation: 'Obrigado(a)!', next: 'final' },
          { text: 'ᠰᠠᡳᠨ᠉', translation: 'Que bom.', next: 'final2' },
          { text: 'ᡠᠯᡥᡳᡵᠠᡴᡡ᠉', translation: 'Não entendo.', wrong: 'É só um “prazer em conhecer”. Agradeça com “baniha” ou responda “sain” (que bom).' },
        ],
      },
      final: {
        text: 'ᠵᠠᡳ ᠠᠴᠠᡴᡳ᠉',
        translation: 'Até logo.',
        emoji: '👋',
        ending: { tone: 'bom', title: 'ᡤᡠᠴᡠ', message: 'Você cumprimentou, disse seu nome e fez um novo amigo — numa das línguas mais ameaçadas da Ásia.' },
      },
      final2: {
        text: 'ᠵᠠᡳ ᠠᠴᠠᡴᡳ᠉',
        translation: 'Até logo.',
        emoji: '🚶',
        ending: { tone: 'bom', title: 'ᠰᠠᡳᠨ', message: 'Você cumprimentou, disse seu nome e recebeu bem um novo amigo — numa das línguas mais ameaçadas da Ásia.' },
      },
    },
    glossary: [
      ['ᠰᠠᡳᠶᡡᠨ', 'olá (lit. “está bem?”)'],
      ['ᠰᠠᡳᠨ', 'bom; bem'],
      ['ᠪᠠᠨᡳᡥᠠ', 'obrigado, obrigada'],
      ['ᠰᡳᠨᡳ', 'seu, sua'],
      ['ᠮᡳᠨᡳ', 'meu, minha'],
      ['ᡤᡝᠪᡠ', 'nome'],
      ['ᠵᠠᡳ ᠠᠴᠠᡴᡳ', 'até logo'],
    ],
  },
  {
    id: 'mnc-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ᡝᡵᡝ ᠮᡳᠨᡳ ᠪᠣᠣ᠉',
    emoji: '🏠',
    summary: 'Uma visita: aceitar um chá e falar dos animais da casa.',
    cultural_context: 'Os manchus eram cavaleiros e caçadores das florestas da Manchúria antes de governarem a China, e o cavalo continua sendo um símbolo da sua cultura.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ᡝᡵᡝ ᠮᡳᠨᡳ ᠪᠣᠣ᠉',
        translation: 'Esta é a minha casa.',
        emoji: '🏠',
        choices: [
          { text: 'ᠪᠠᠨᡳᡥᠠ!', translation: 'Obrigado(a)!', next: 'cha' },
          { text: 'ᠵᠠᡳ ᠠᠴᠠᡴᡳ᠉', translation: 'Até logo.', wrong: 'Você acabou de chegar! Agradeça com “baniha”.' },
        ],
      },
      cha: {
        text: 'ᠰᡳ ᠴᠠᡳ ᠣᠮᡳᠮᠪᡳᠣ?',
        translation: 'Você bebe chá?',
        emoji: '🍵',
        choices: [
          { text: 'ᡳᠨᡠ᠈ ᠪᠠᠨᡳᡥᠠ᠉', translation: 'Sim, obrigado(a).', next: 'animais' },
          { text: 'ᠮᡳᠨᡳ ᡤᡝᠪᡠ Lᡳᠨᠠ᠉', translation: 'Meu nome é Lina.', wrong: 'A pergunta é se você quer chá. Responda “inu, baniha” (sim, obrigado).' },
        ],
      },
      animais: {
        text: 'ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ ᠴᡳ ᠠᠮᠪᠠ᠉',
        translation: 'O cavalo é maior que o cão.',
        emoji: '🐴',
        choices: [
          { text: 'ᡳᠨᡠ᠉', translation: 'É isso.', next: 'final' },
          { text: 'ᠪᠠᠨᡳᡥᠠ!', translation: 'Obrigado(a)!', next: 'final2' },
          { text: 'ᠰᡳ ᠰᠠᡳᠶᡡᠨ?', translation: 'Como vai?', wrong: 'Vocês já se cumprimentaram. Concorde com “inu” (é isso) ou agradeça.' },
        ],
      },
      final: {
        text: 'ᡳᠨᡩᠠᡥᡡᠨ ᡩᠣᠪᠣᡵᡳ ᡨᡠᠸᠠᡥᡳᠶᠠᠮᠪᡳ᠉',
        translation: 'O cão vigia à noite.',
        emoji: '🐕',
        ending: { tone: 'bom', title: 'ᠪᠣᠣ', message: 'Você aceitou o chá e conheceu os animais da casa: o cavalo e o cão que vigia à noite.' },
      },
      final2: {
        text: 'ᠵᠠᡳ ᠠᠴᠠᡴᡳ᠉',
        translation: 'Até logo.',
        emoji: '🚶',
        ending: { tone: 'bom', title: 'ᠪᠠᠨᡳᡥᠠ', message: 'Você aceitou o chá, agradeceu pela visita e conheceu o cavalo e o cão da casa.' },
      },
    },
    glossary: [
      ['ᡝᡵᡝ', 'este, esta'],
      ['ᠮᡳᠨᡳ', 'meu, minha'],
      ['ᠪᠣᠣ', 'casa'],
      ['ᠴᠠᡳ', 'chá'],
      ['ᠣᠮᡳᠮᠪᡳ', 'beber'],
      ['ᡳᠨᡠ', 'sim; é isso'],
      ['ᠮᠣᡵᡳᠨ', 'cavalo'],
      ['ᡳᠨᡩᠠᡥᡡᠨ', 'cão'],
      ['ᡩᠣᠪᠣᡵᡳ', 'noite'],
    ],
  },
];
