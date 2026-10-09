import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no malgaxe). */
export const COMMUNITY_MG: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Manao ahoana, anarana, fianakaviana.',
    content: 'Aho tsara. Manao ahoana! Aho manana reny sy dada.',
    reference: 'Manao ahoana! Tsara aho. Manana reny sy dada aho.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Trano sy saka.',
    content: 'Ny trano lehibe. Aho manana saka iray.',
    reference: 'Lehibe ny trano. Manana saka iray aho.',
  },
];

/** Cenários de conversa (registro formal/informal). */
export const SCENARIOS_MG: ScenarioSeed[] = [
  {
    id: 'mg-s1',
    title: 'Any Antananarivo',
    emoji: '👋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Rasoa',
    description: 'Rasoa conversa com você numa praça de Antananarivo. É informal, entre amigos.',
    turns: [
      {
        bot: 'Manao ahoana! Mila rano ve ianao?',
        botTranslation: 'Oi! Você quer água?',
        keywords: ['rano'],
        suggestions: ['Eny, mila rano aho, misaotra.'],
      },
      {
        bot: 'Tia vary ve ianao?',
        botTranslation: 'Você gosta de arroz?',
        keywords: ['tia vary'],
        suggestions: ['Eny, tia vary aho.'],
      },
    ],
  },
];

/** Palavras do malgaxe que já são familiares por outros caminhos, com a raiz e os parentes. */
export const ETYMOLOGY_MG: EtymologySeed[] = [
  {
    word: 'Kafe',
    root_word: 'francês "café", do árabe "qahwa"',
    origin_language: 'Francês (via colonização, séc. XIX)',
    cognates: c(['fr', 'café'], ['en', 'coffee']),
    evolution_note: 'O malgaxe "kafe" é um empréstimo do francês "café" (a mesma raiz árabe "qahwa" que deu o português "café") — chegou com a colonização francesa no século XIX, junto de outras palavras da mesma família, como "kafitera" (bule de café, do francês "cafetière").',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_MG: [string, string][] = [
  ['Ahoana ny androany?', 'Como está hoje?'],
  ['Ny fianakaviana.', 'A família.'],
  ['Mihinana sy misotro.', 'Comer e beber.'],
  ['Ny trano.', 'A casa.'],
];

export const SHADOWING_MG: [string, string][] = [
  ['Manao ahoana! Rasoa aho.', 'Oi! Eu sou a Rasoa.'],
  ['Tsara aho, misaotra! Ianao?', 'Eu estou bem, obrigado! E você?'],
  ['Manana reny sy dada aho.', 'Eu tenho mãe e pai.'],
  ['Tia vary be aho.', 'Eu gosto muito de arroz.'],
];
