import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no indonésio). */
export const COMMUNITY_ID: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Perkenalkan diri: nama, asal, dan keluargamu.',
    content: 'Halo! Nama saya adalah Bruno dan saya adalah dari Brasil, dari São Paulo. Saya punya satu kakak.',
    reference: 'Halo! Nama saya Bruno dan saya dari Brasil, dari São Paulo. Saya punya satu kakak.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Jelaskan rumahmu.',
    content: 'Rumah saya adalah kecil, punya dua kamar dan satu kucing yang lucu.',
    reference: 'Rumah saya kecil, punya dua kamar dan satu kucing yang lucu.',
  },
];

/** Cenários de conversa (registro formal/informal). */
export const SCENARIOS_ID: ScenarioSeed[] = [
  {
    id: 'id-s1',
    title: 'Kopi dengan teman baru di Jakarta',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Rina, colega do curso de indonésio',
    description: 'Rina convida você para tomar um café perto do centro de Jacarta. É informal, entre amigos.',
    turns: [
      {
        bot: 'Halo! Kamu mau minum apa?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['kopi', 'air', 'susu', 'teh'],
        suggestions: ['Kopi susu, tolong.', 'Air saja, tolong.'],
      },
      {
        bot: 'Kamu dari mana?',
        botTranslation: 'De onde você é?',
        keywords: ['saya dari', 'brasil'],
        suggestions: ['Saya dari Brasil.', 'Saya dari São Paulo, di Brasil.'],
      },
    ],
  },
];

/** Palavras do indonésio que já são familiares por outros caminhos, com a raiz e os parentes. */
export const ETYMOLOGY_ID: EtymologySeed[] = [
  {
    word: 'kopi',
    root_word: 'qahwa (árabe) → koffie (holandês)',
    origin_language: 'Árabe, via holandês',
    cognates: c(['pt', 'café'], ['en', 'coffee'], ['nl', 'koffie']),
    evolution_note: 'Assim como o português «café», o indonésio «kopi» vem, por outro caminho, da mesma raiz árabe «qahwa» — nesse caso via o holandês «koffie», herança do período colonial neerlandês na Indonésia.',
    transparent: true,
  },
  {
    word: 'anggur',
    root_word: 'angur (persa)',
    origin_language: 'Persa',
    cognates: c(['pt', 'uva/vinho (sem cognato direto)']),
    evolution_note: 'Do persa «angur» (uva), «anggur» chegou ao malaio/indonésio pelas rotas de comércio do Oceano Índico e hoje significa tanto «uva» quanto «vinho».',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_ID: [string, string][] = [
  ['Apa kabar hari ini?', 'Como você está hoje?'],
  ['Ceritakan tentang keluargamu.', 'Me conte sobre a sua família.'],
  ['Apa yang kamu suka makan dan minum?', 'O que você gosta de comer e beber?'],
  ['Bagaimana rumahmu?', 'Como é a sua casa?'],
];

export const SHADOWING_ID: [string, string][] = [
  ['Halo! Nama saya Ana, dan saya dari Brasil.', 'Oi! Meu nome é Ana, e eu sou do Brasil.'],
  ['Baik, terima kasih! Kamu?', 'Bem, obrigado! E você?'],
  ['Saya punya satu kakak dan satu adik.', 'Tenho um irmão mais velho e um mais novo.'],
  ['Saya sangat suka kopi susu.', 'Eu gosto muito de café com leite.'],
];
