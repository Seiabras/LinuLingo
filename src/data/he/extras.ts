import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no hebraico). */
export const COMMUNITY_HE: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Mi ata?',
    content: 'At Bruno.',
    reference: 'Ani Bruno.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Eifo ha-bayit?',
    content: 'Bayit gadol.',
    reference: 'Ha-bayit gadol.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ata ohev kafe?',
    content: 'Ken, ani kafe.',
    reference: 'Ken, ani ohev kafe.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_HE: ScenarioSeed[] = [
  {
    id: 'he-s1',
    title: 'Kafe be-Tel Aviv',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Noa, colega do curso de hebraico',
    description: 'A Noa convida você para um café em Tel Aviv. É uma conversa entre colegas, no registro informal.',
    turns: [
      {
        bot: 'Shalom! Ma ata rotze?',
        botTranslation: 'Oi! O que você quer?',
        keywords: ['קפה', 'מים'],
        suggestions: ['Kafe, bevakasha.', 'Mayim, bevakasha.'],
      },
      {
        bot: 'Toda. Ata gar be-Tel Aviv?',
        botTranslation: 'Obrigada. Você mora em Tel Aviv?',
        keywords: ['גר'],
        suggestions: ['Ken, ani gar be-Tel Aviv.', 'Lo, ani gar be-São Paulo.'],
      },
    ],
  },
];

/**
 * Palavras hebraicas que viraram empréstimos no português (e em outras línguas), via grego e latim.
 * Fontes (en.wiktionary.org, checadas em 02/10/2026): amém, aleluia, sábado, jubilee (jubileu),
 * querubim.
 */
export const ETYMOLOGY_HE: EtymologySeed[] = [
  {
    word: 'אמן',
    root_word: 'אָמֵן (āmên, “que assim seja”)',
    origin_language: 'Hebraico bíblico',
    cognates: c(['pt', 'amém'], ['en', 'amen'], ['es', 'amén']),
    evolution_note: 'Do hebraico bíblico אָמֵן (“que assim seja”, “com certeza”) para o grego koiné ἀμήν, daí para o latim āmēn e para o galego-português antigo “amen”, até o português “amém”. A pronúncia mudou pouco em quase três mil anos.',
    transparent: true,
  },
  {
    word: 'הללויה',
    root_word: 'הַלְלוּיָהּ (hallelu, “louvem” + Yah, “Deus”)',
    origin_language: 'Hebraico bíblico',
    cognates: c(['pt', 'aleluia'], ['en', 'hallelujah'], ['es', 'aleluya']),
    evolution_note: 'Literalmente “louvem a Deus”: o imperativo “hallelu” (louvem) mais “Yah”, forma curta do nome divino. Passou pelo latim eclesiástico “allelūia” até chegar ao galego-português antigo e ao “aleluia” de hoje.',
    transparent: true,
  },
  {
    word: 'שבת',
    root_word: 'שַׁבָּת (shabát, raiz ש-ב-ת, “cessar, descansar”)',
    origin_language: 'Hebraico bíblico',
    cognates: c(['pt', 'sábado'], ['en', 'sabbath'], ['es', 'sábado']),
    evolution_note: 'Do hebraico שַׁבָּת (“descanso”, o dia de descanso judaico) para o grego antigo σάββατον, daí para o latim (eclesiástico) sabbatum e para o galego-português antigo “sabado”. O som mudou bastante, mas a ideia de “dia de descanso” se manteve.',
    transparent: false,
  },
  {
    word: 'יובל',
    root_word: 'יוֹבֵל (yovel, “chifre de carneiro usado como trombeta; ano jubilar”)',
    origin_language: 'Hebraico bíblico',
    cognates: c(['pt', 'jubileu'], ['en', 'jubilee']),
    evolution_note: 'יוֹבֵל era o chifre de carneiro soprado para anunciar o ano jubilar bíblico. Virou grego ἰωβηλαῖος, latim tardio iūbilaeus e, por aí, o francês antigo e o português “jubileu” — de “toque de trombeta” para “aniversário importante”.',
    transparent: false,
  },
  {
    word: 'כרוב',
    root_word: 'כְּרוּב (kerúv, plural כְּרוּבִים, keruvím)',
    origin_language: 'Hebraico bíblico',
    cognates: c(['pt', 'querubim'], ['en', 'cherub']),
    evolution_note: 'Do hebraico כְּרוּב (um dos seres alados da tradição bíblica) para o grego antigo χερουβίν, o latim cherūbīm, o galego-português antigo “querubin” e o português “querubim”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_HE: [string, string][] = [
  ['Mi ata?', 'Quem é você?'],
  ['Ata ohev lekhem? Ata ohev khalav?', 'Você gosta de pão? Você gosta de leite?'],
  ['Eifo ata gar?', 'Onde você mora?'],
  ['Ata gar be-bayit gadol?', 'Você mora numa casa grande?'],
];

export const SHADOWING_HE: [string, string][] = [
  ['Shalom! Ani Dan.', 'Oi! Eu sou o Dan.'],
  ['Boker tov, ima! Erev tov, aba!', 'Bom dia, mãe! Boa noite, pai!'],
  ['Ani ohev lekhem ve-gvina.', 'Eu gosto de pão e queijo.'],
  ['Ata rotze kafe?', 'Você quer café?'],
  ['Toda, ve-shalom!', 'Obrigado, e tchau!'],
];
