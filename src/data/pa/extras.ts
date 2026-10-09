import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no panjabi). */
export const COMMUNITY_PA: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'سَلام، ناں، گَھر.',
    content: 'میں چنگا۔ سَلام! گَھر وڈا۔',
    reference: 'سَلام! میں چنگا ہاں۔ گَھر وڈا اے۔',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'چاہ، ٹَبَّر.',
    content: 'چاہ چنگا۔ ٹَبَّر وڈا۔',
    reference: 'چاہ چنگا اے۔ ٹَبَّر وڈا اے۔',
  },
];

/** Cenários de conversa (registro formal/informal). */
export const SCENARIOS_PA: ScenarioSeed[] = [
  {
    id: 'pa-s1',
    title: 'لاہور',
    emoji: '👋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ali',
    description: 'Ali conversa com você numa praça de Lahore. É informal, entre amigos.',
    turns: [
      {
        bot: 'سَلام! تہاڈا ناں کی اے؟',
        botTranslation: 'Oi! Qual é o seu nome?',
        keywords: ['ناں'],
        suggestions: ['سَلام! لینو ناں اے۔'],
      },
      {
        bot: 'چاہ پسند اے؟',
        botTranslation: 'Você gosta de chá?',
        keywords: ['چاہ'],
        suggestions: ['ہاں، چاہ پسند اے۔'],
      },
    ],
  },
];

/** Palavras do panjabi que já são familiares por outros caminhos, com a raiz e os parentes. */
export const ETYMOLOGY_PA: EtymologySeed[] = [
  {
    word: 'چاہ',
    root_word: 'persa clássico "چای" (chāy), do chinês 茶 (chá)',
    origin_language: 'Persa (via rotas de comércio)',
    cognates: c(['fa', 'چای'], ['hi', 'चाय']),
    evolution_note: 'O panjabi "چاہ" (chāh) é um empréstimo do persa clássico "چای" (chāy), que veio do chinês 茶 (chá) pelas rotas de comércio — a mesma raiz do português "chá" (que chegou via o malaio/cantonês) e do hindi/urdu "चाय"/"چائے", já parecidos neste app.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_PA: [string, string][] = [
  ['اج چنگا اے؟', 'Hoje está bom?'],
  ['ٹَبَّر.', 'A família.'],
  ['کھاݨا.', 'A comida.'],
  ['گَھر.', 'A casa.'],
];

export const SHADOWING_PA: [string, string][] = [
  ['سَلام! لینو ناں اے۔', 'Oi! Meu nome é Linu.'],
  ['تہاڈا ناں کی اے؟', 'Qual é o seu nome?'],
  ['چاہ پسند اے!', 'Eu gosto de chá!'],
  ['گَھر وڈا اے۔', 'A casa é grande.'],
];
