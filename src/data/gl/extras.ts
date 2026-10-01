import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no galego). */
export const COMMUNITY_GL: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Preséntate: nome, orixe e a túa familia.',
    content: 'Ola! Eu chámome Bruno e eu son de Brasil, de São Paulo. Eu teño un irmán e unha irmá.',
    reference: 'Ola! Chámome Bruno e son de Brasil, de São Paulo. Teño un irmán e unha irmá.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Describe a túa casa.',
    content: 'A minha casa é pequena, tem dous cuartos e un gato moi bonito.',
    reference: 'A miña casa é pequena, ten dous cuartos e un gato moi bonito.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Que che gusta beber pola mañá?',
    content: 'Eu gusto de café con leite pola mañá.',
    reference: 'Gústame o café con leite pola mañá.',
  },
];

/** Cenários de conversa (registro formal/informal). */
export const SCENARIOS_GL: ScenarioSeed[] = [
  {
    id: 'gl-s1',
    title: 'Café cunha nova amiga en Compostela',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Sabela, unha colega do curso de galego',
    description: 'Sabela convídate para un café perto da Praza do Obradoiro. É informal, entre amigas: use “ti”, nunca “vostede”.',
    turns: [
      {
        bot: 'Ola! Que che apetece tomar?',
        botTranslation: 'Oi! O que você quer tomar?',
        keywords: ['café', 'quero', 'auga', 'leite'],
        suggestions: ['Un café con leite, por favor.', 'Para min, auga.'],
        registerBreakers: ['vostede', 'señora'],
      },
      {
        bot: 'E cóntame, de onde es?',
        botTranslation: 'E me conte, de onde você é?',
        keywords: ['son de', 'brasil'],
        suggestions: ['Son de Brasil.', 'Son de São Paulo, en Brasil.'],
      },
    ],
  },
];

/** Palavras cognatas do galego com o português, mostrando a raiz e os parentes. */
export const ETYMOLOGY_GL: EtymologySeed[] = [
  {
    word: 'auga',
    root_word: 'aqua',
    origin_language: 'Latín',
    cognates: c(['pt', 'água'], ['es', 'agua'], ['it', 'acqua'], ['fr', 'eau']),
    evolution_note: 'Do latín “aqua”, o galego perdeu o q e manteve o grupo -gu-, igual ao português antigo; a escrita moderna simplificou para “auga”, sem o acento do português “água”.',
    transparent: true,
  },
  {
    word: 'nai',
    root_word: 'matre(m)',
    origin_language: 'Latín',
    cognates: c(['pt', 'mãe'], ['es', 'madre'], ['it', 'madre']),
    evolution_note: 'De “matre(m)”, o galego perdeu o -t- entre vogais (como o português) e simplificou até “nai”, enquanto o português foi por outro caminho fonético até “mãe”.',
    transparent: false,
  },
  {
    word: 'leite',
    root_word: 'lacte(m)',
    origin_language: 'Latín',
    cognates: c(['pt', 'leite'], ['es', 'leche'], ['it', 'latte'], ['fr', 'lait']),
    evolution_note: 'Do latín “lacte(m)”, idêntico ao português “leite”: um dos muitos cognatos exatos entre as duas línguas irmãs.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_GL: [string, string][] = [
  ['Como estás hoxe?', 'Como você está hoje?'],
  ['Cóntame algo da túa familia.', 'Me conte algo da sua família.'],
  ['Que che gusta comer e beber?', 'O que você gosta de comer e beber?'],
  ['Como é a túa casa?', 'Como é a sua casa?'],
];

export const SHADOWING_GL: [string, string][] = [
  ['Ola! Chámome Ana, e son de Brasil.', 'Oi! Eu me chamo Ana, e sou do Brasil.'],
  ['Moi ben, grazas! E ti?', 'Muito bem, obrigado! E você?'],
  ['Teño un irmán e unha irmá.', 'Tenho um irmão e uma irmã.'],
  ['Gústame moito o café con leite.', 'Eu gosto muito do café com leite.'],
];
