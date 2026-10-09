import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no javanês). */
export const COMMUNITY_JV: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Jeneng, asal, lan kulawarga.',
    content: 'Halo! Jenengku iku Bruno lan aku saka Brasil. Aku duwé siji Mas.',
    reference: 'Halo! Jenengku Bruno lan aku saka Brasil. Aku duwé siji Mas.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Omah.',
    content: 'Omahku iku cilik, lan aku duwé siji kucing.',
    reference: 'Omahku cilik, lan aku duwé siji kucing.',
  },
];

/** Cenários de conversa (registro formal/informal). */
export const SCENARIOS_JV: ScenarioSeed[] = [
  {
    id: 'jv-s1',
    title: 'Ing Yogyakarta',
    emoji: '👋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Siti',
    description: 'Siti conversa com você numa praça de Yogyakarta. É informal, entre amigos.',
    turns: [
      {
        bot: 'Halo! Kowé arep ngombé apa?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['banyu'],
        suggestions: ['Banyu, matur nuwun.'],
      },
      {
        bot: 'Kowé saka ngendi?',
        botTranslation: 'De onde você é?',
        keywords: ['aku saka', 'brasil'],
        suggestions: ['Aku saka Brasil.'],
      },
    ],
  },
];

/** Palavras do javanês que já são familiares por outros caminhos, com a raiz e os parentes. */
export const ETYMOLOGY_JV: EtymologySeed[] = [
  {
    word: 'kucing',
    root_word: 'raiz austronésia comum ao malaio/indonésio "kucing"',
    origin_language: 'Austronésio (malaio-polinésio)',
    cognates: c(['id', 'kucing'], ['ms', 'kucing']),
    evolution_note: 'O javanês “kucing” é praticamente idêntico ao indonésio e ao malaio “kucing” — as três línguas vêm do mesmo ramo malaio-polinésio e compartilham boa parte do vocabulário cotidiano.',
    transparent: false,
  },
  {
    word: 'asu',
    root_word: '*asu (proto-malaio-polinésio) < *asu (proto-austronésio)',
    origin_language: 'Proto-austronésio',
    cognates: c(['tl', 'aso']),
    evolution_note: 'O javanês “asu” (cachorro) tem a mesma raiz austronésia do tagalo “aso” — um exemplo de como línguas da Indonésia e das Filipinas compartilham vocabulário muito antigo, de antes da separação dos dois arquipélagos.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_JV: [string, string][] = [
  ['Piyé kabaré dina iki?', 'Como você está hoje?'],
  ['Kulawarga.', 'Família.'],
  ['Mangan lan ngombé.', 'Comer e beber.'],
  ['Omah.', 'Casa.'],
];

export const SHADOWING_JV: [string, string][] = [
  ['Halo! Jenengku Ana, lan aku saka Brasil.', 'Oi! Meu nome é Ana, e eu sou do Brasil.'],
  ['Apik-apik baé, matur nuwun! Kowé?', 'Bem, obrigado! E você?'],
  ['Aku duwé siji Mas lan siji Adhi.', 'Tenho um irmão mais velho e um mais novo.'],
  ['Aku seneng banget gedhang.', 'Eu gosto muito de banana.'],
];
