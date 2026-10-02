import type { StorySeed } from '../types';

/**
 * Histórias interativas do quimbundo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Como em curriculo.ts, cada fala combina só palavras e formas verbais atestadas nas fontes citadas
 * em vocabulario.ts e gramatica.ts (os pronomes, “kuala”/“kuala ni”, “ni” como “e”, e “mu” como “em”,
 * este último atestado na tradução em quimbundo do artigo 1º da Declaração Universal dos Direitos
 * Humanos, via Omniglot: https://www.omniglot.com/writing/kimbundu.htm). Nenhuma fala usa posse
 * (“meu”, “nosso”) nem concordância de adjetivo ou verbo com um substantivo: essas formas ainda não
 * apareceram em nenhuma fonte consultada — ver a nota em gramatica.ts (kmb-g4).
 */
export const STORIES_KMB: StorySeed[] = [
  {
    id: 'kmb-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mu njila: eme ni mwene',
    emoji: '🛣️',
    summary: 'Numa estrada perto de Luanda, você cruza com alguém e troca as primeiras frases em quimbundo: o que cada um tem.',
    cultural_context: 'Luanda, a capital de Angola, fica bem no meio da região onde o quimbundo é mais falado — ali, muita gente cresce ouvindo quimbundo e português juntos desde pequena.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Eme ngala ni muleke.',
        translation: 'Eu tenho um menino (um filho).',
        emoji: '🧒',
        choices: [
          { text: 'Eme ngala ni dikamba.', translation: 'Eu tenho um amigo.', next: 'amigo' },
          { text: 'Tubia!', translation: 'Fogo!', wrong: 'Isso não tem nada a ver com o que a pessoa disse. Responda contando o que você tem, com “Eme ngala ni…”.' },
        ],
      },
      amigo: {
        text: 'Eye uala ni imbwa?',
        translation: 'Você tem um cachorro?',
        emoji: '🐕',
        choices: [
          { text: 'Eme ngala ni imbwa.', translation: 'Eu tenho um cachorro.', next: 'final' },
          { text: 'Kalunga.', translation: 'O mar.', wrong: 'Isso não responde se você tem um cachorro. Use “Eme ngala ni…” para dizer o que você tem.' },
        ],
      },
      final: {
        text: 'Eme ni eye tuala ni jiimbwa!',
        translation: 'Eu e você temos cachorros!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Tuala ni jiimbwa!',
          message: 'Vocês dois descobriram que têm cachorros — um jeito simples de começar uma conversa em quimbundo.',
        },
      },
    },
    glossary: [
      ['dikamba', 'amigo'],
      ['imbwa', 'cachorro'],
      ['ngala ni', 'tenho'],
      ['uala ni', 'tens, tem'],
    ],
  },
  {
    id: 'kmb-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mu kitanda ia kilombo',
    emoji: '🏪',
    summary: 'Você visita uma quitanda (kitanda) numa aldeia e combina, com o dono, o que cada um tem para o quilombo: comida, água e fogo.',
    cultural_context: 'Duas palavras desta história viajaram até o português do Brasil: “kitanda” virou “quitanda” (um mercadinho de bairro) e “kilombo” virou “quilombo”, nome das comunidades livres formadas por pessoas que escapavam da escravidão, como o Quilombo dos Palmares.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Eme ngala ni kitanda. Eye uala ni kudya?',
        translation: 'Eu tenho uma quitanda (um mercadinho). Você tem comida?',
        emoji: '🏪',
        choices: [
          { text: 'Eme ngala ni kudya ni menya.', translation: 'Eu tenho comida e água.', next: 'comida' },
          { text: 'Mbunda!', translation: 'Bunda!', wrong: 'Isso não responde sobre comida. Use “Eme ngala ni…” para dizer o que você tem.' },
        ],
      },
      comida: {
        text: 'Eme ngala ni tubia mu kilombo.',
        translation: 'Eu tenho fogo no quilombo (no povoado).',
        emoji: '🔥',
        choices: [
          { text: 'Etu tuala ni tubia ni menya.', translation: 'Nós temos fogo e água.', next: 'final' },
          { text: 'Hoji!', translation: 'Leão!', wrong: 'Isso não combina com o que foi dito sobre fogo. Responda com “Etu tuala ni…”.' },
        ],
      },
      final: {
        text: 'Etu tuala ni kudya, menya ni tubia mu kilombo!',
        translation: 'Nós temos comida, água e fogo no quilombo!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Tuala ni kudya!',
          message: 'A quitanda (kitanda) e o quilombo (kilombo) têm o que precisam: comida, água e fogo.',
        },
      },
    },
    glossary: [
      ['kitanda', 'mercado, quitanda'],
      ['kilombo', 'quilombo, acampamento, povoado'],
      ['mu', 'em, no, na'],
      ['kudya', 'comida'],
    ],
  },
];
