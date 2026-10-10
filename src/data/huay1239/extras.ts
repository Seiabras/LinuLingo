import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção. Gabaritos pelas frases e pela gramática do [WIKI]. */
export const COMMUNITY_HUAY1239: CommunitySeed[] = [
  { author_name: 'Juliana 🇧🇷', prompt: 'Dizer “três”.', content: 'Kimsa.', reference: 'Kima.' },
  { author_name: 'Rafael 🇧🇷', prompt: 'Responder a “Pitaq?”.', content: 'Allqum.', reference: 'Nuqam.' },
  { author_name: 'Beatriz 🇧🇷', prompt: 'Dizer “nós” (sem incluir quem escuta).', content: 'Nuqantsik.', reference: 'Nuqakuna.' },
];

/** Cenário de conversa, com as falas do [WIKI]. */
export const SCENARIOS_HUAY1239: ScenarioSeed[] = [
  {
    id: 'huay1239-s1',
    title: 'Na porta, em Huaraz',
    emoji: '🚪',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma moradora de Huaraz que abre a porta para o Linu',
    description: 'Para responder com mais respeito, diz-se “Nuqallaa” no lugar de “Nuqam”.',
    turns: [
      { bot: 'Pitaq?', botTranslation: 'Quem é?', keywords: ['Nuqam', 'Nuqallaa', 'nuqam'], suggestions: ['Nuqallaa.'] },
      { bot: 'Imanawllataq kaykanki?', botTranslation: 'Como você está?', keywords: ['Yamayllam', 'yamayllam'], suggestions: ['Yamayllam kaykaa.'] },
      { bot: 'Alalaw!', botTranslation: 'Que frio!', keywords: ['Aw', 'Awmi', 'aw'], suggestions: ['Awmi!'] },
    ],
  },
];

/**
 * Etimologias. Fontes: [WIKI] «Quechua ancashino» (o “s” do começo das sílabas, aspirado em Huaylas:
 * wasi → wahi → wai) e «Clasificación del quechua ancashino» (suqta → huqta → uqta, seis; ñawi → nawi).
 * Cognatos do quéchua do sul (qu) e do kichwa (colo1257).
 */
export const ETYMOLOGY_HUAY1239: EtymologySeed[] = [
  {
    word: 'huqta',
    root_word: 'suqta (seis, no quechua antigo)',
    origin_language: 'Quéchua',
    cognates: c(['qu', 'suqta'], ['colo1257', 'sukta']),
    evolution_note: 'O antigo “s” do começo da palavra virou “h” na maior parte de Áncash: “suqta” virou “huqta”. No norte do Callejón de Huaylas, o “h” também sumiu, e o seis virou “uqta”.',
    transparent: true,
  },
  {
    word: 'ñawi',
    root_word: 'ñawi (olho)',
    origin_language: 'Quéchua',
    cognates: c(['qu', 'ñawi'], ['colo1257', 'ñawi']),
    evolution_note: 'A mesma palavra em todo o quéchua. Mas em Huaylas e no sul de Conchucos o “ñ” perdeu o som de “nh”, e o olho virou “nawi”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_HUAY1239: [string, string][] = [
  ['Imanawllataq kaykanki?', 'Como você está?'],
  ['Pitaq?', 'Quem é?'],
  ['Imatan?', 'O que é?'],
];

export const SHADOWING_HUAY1239: [string, string][] = [
  ['Yamayllam kaykaa.', 'Estou bem.'],
  ['Nuqallaa.', 'Sou eu.'],
  ['Hirkachawmi kaykaa.', 'Estou no morro.'],
  ['Allqupaqmi.', 'É para o cachorro.'],
];
