import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no luxemburguês). */
export const COMMUNITY_LB: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Wéi heeschs du a vu wou kënns du?',
    content: 'Moien! Ech heeschen Bruno an ech kommen vun Curitiba. Ech hunn en Brudder.',
    reference: 'Moien! Ech heesche Bruno an ech komme vu Curitiba. Ech hunn e Brudder.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Wat drénks du moies?',
    content: 'Ech iessen Brout mat Kéis an ech drénken Kaffi.',
    reference: 'Ech iesse Brout mat Kéis an ech drénke Kaffi.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Wéi ass däin Haus?',
    content: 'Mäin Haus ass kleng. Ech hunn net eng Kaz.',
    reference: 'Mäin Haus ass kleng. Ech hu keng Kaz.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_LB: ScenarioSeed[] = [
  {
    id: 'lb-s1',
    title: 'E Kaffi an der Stad',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, eng Frëndin',
    description: 'Anna, colega do curso de luxemburguês, convida você para um café no centro da cidade de Luxemburgo. É uma conversa entre colegas: use «du».',
    turns: [
      {
        bot: 'Moien! Wat drénks du?',
        botTranslation: 'Oi! O que você vai beber?',
        keywords: ['Kaffi', 'Waasser', 'Téi'],
        suggestions: ['E Kaffi, wannechgelift.', 'E Glas Waasser, wannechgelift.'],
      },
      {
        bot: 'Vu wou kënns du?',
        botTranslation: 'De onde você é?',
        keywords: ['ech komme vu', 'ech kommen aus'],
        suggestions: ['Ech komme vu São Paulo.', 'Ech komme vu Salvador.'],
      },
    ],
  },
];

/** Palavras do luxemburguês com a origem e os parentes nas línguas irmãs. */
export const ETYMOLOGY_LB: EtymologySeed[] = [
  {
    word: 'Moien',
    root_word: 'Moien (manhã)',
    origin_language: 'Luxemburguês',
    cognates: c(['de', 'Morgen'], ['nl', 'morgen'], ['en', 'morning']),
    evolution_note: '«Moien» quer dizer «manhã» e é a forma encurtada de «Gudde Moien» (bom dia). Com o tempo, virou um cumprimento que vale a qualquer hora, como um «oi».',
    transparent: false,
  },
  {
    word: 'Merci',
    root_word: 'merci',
    origin_language: 'Francês',
    cognates: c(['fr', 'merci'], ['pt', 'mercê'], ['la', 'merces']),
    evolution_note: 'O luxemburguês agradece em francês, a língua que convive com ele há séculos no país. O francês «merci» vem do latim «merces» (recompensa, favor), o mesmo que deu «mercê» em português.',
    transparent: false,
  },
  {
    word: 'Waasser',
    root_word: '*watōr',
    origin_language: 'Protogermânico',
    cognates: c(['de', 'Wasser'], ['nl', 'water'], ['en', 'water']),
    evolution_note: 'Como no alemão, o t germânico virou «ss» (Waasser); a vogal dobrada marca o «a» longo.',
    transparent: false,
  },
  {
    word: 'Kéis',
    root_word: 'caseus',
    origin_language: 'Latim',
    cognates: c(['pt', 'queijo'], ['de', 'Käse'], ['nl', 'kaas']),
    evolution_note: 'Os povos germânicos tomaram emprestada a palavra latina «caseus» (queijo) ainda na Antiguidade. O mesmo «caseus» deu «queijo» em português.',
    transparent: false,
  },
  {
    word: 'Wäin',
    root_word: 'vinum',
    origin_language: 'Latim',
    cognates: c(['pt', 'vinho'], ['de', 'Wein'], ['fr', 'vin']),
    evolution_note: 'O vale do Mosela, na fronteira do Luxemburgo, produz vinho desde os tempos romanos, e a palavra latina «vinum» ficou: virou «Wäin» no luxemburguês.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_LB: [string, string][] = [
  ['Wéi geet et dir haut?', 'Como você está hoje?'],
  ['Wéi ass deng Famill?', 'Como é a sua família?'],
  ['Wat drénks du gär?', 'O que você gosta de beber?'],
  ['Wéi ass däin Haus?', 'Como é a sua casa?'],
];

export const SHADOWING_LB: [string, string][] = [
  ['Moien! Ech heeschen Ana.', 'Oi! Eu me chamo Ana.'],
  ['Gutt, merci! An dir?', 'Bem, obrigado! E você?'],
  ['Ech hunn e Brudder an eng Schwëster.', 'Tenho um irmão e uma irmã.'],
  ['Ech weess et net.', 'Eu não sei.'],
];
