import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (três erros típicos de brasileiros no eʋe, cada um
 * ligado a um tópico de gramatica.ts: artigo pospósto, pronome sem gênero, numeral pospósto).
 */
export const COMMUNITY_EE: CommunitySeed[] = [
  {
    author_name: 'Beto 🇧🇷',
    prompt: 'Xɔ la.',
    content: 'La xɔ.',
    reference: 'Xɔ la.',
  },
  {
    author_name: 'Carla 🇧🇷',
    prompt: 'Nyɔnu la.',
    content: 'Eyanyɔnu kpɔ nyɔnu la.',
    reference: 'Eya kpɔ nyɔnu la.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Koklo eve.',
    content: 'Eve koklo.',
    reference: 'Koklo eve.',
  },
];

/** Cenário de conversa em casa, com a mãe oferecendo comida e bebida. */
export const SCENARIOS_EE: ScenarioSeed[] = [
  {
    id: 'ee-s1',
    title: 'Ƒome la',
    emoji: '👨‍👩‍👧',
    cefr: 'A1',
    register: 'informal',
    persona: 'Nɔ, a mãe, em casa',
    description: 'Nɔ oferece pão e água em casa. É uma conversa informal em família.',
    turns: [
      {
        bot: 'Nye wɔ abolo.',
        botTranslation: 'Eu faço pão.',
        keywords: ['ɖu', 'akpe'],
        suggestions: ['Nye ɖu abolo.', 'Akpe, nɔ!'],
      },
      {
        bot: 'No tsi.',
        botTranslation: 'Beba água.',
        keywords: ['no'],
        suggestions: ['Nye no tsi.', 'Akpe!'],
      },
    ],
  },
];

/**
 * Palavras do eʋe com a origem explicada — etimologia tirada do Wiktionary (verbetes «abolo», «eve»,
 * «ati», «nyɔnu», «alẽ»). Nenhuma é totalmente transparente para quem fala português, exceto «abolo»,
 * que soa como o nosso “bolo”, de onde talvez tenha vindo.
 */
export const ETYMOLOGY_EE: EtymologySeed[] = [
  {
    word: 'abolo',
    root_word: 'bolo (português)',
    origin_language: 'Possivelmente português',
    cognates: c(['ak', 'abodoo'], ['gaa', 'aboloo']),
    evolution_note: 'O Wiktionary diz que “abolo” (pão de fubá fermentado e cozido no vapor, ou pão ao estilo ocidental) talvez venha do português “bolo”, com formas parecidas no acã (“abodoo”) e no gã (“aboloo”) — um rastro possível do contato português na Costa do Ouro.',
    transparent: true,
  },
  {
    word: 'eve',
    root_word: '*-ve / *-we (Proto-Gbe)',
    origin_language: 'Proto-Gbe',
    cognates: c(['fon', 'àwè'], ['gun', 'awe']),
    evolution_note: 'O Wiktionary mostra “eve” (dois) como herdeiro do Proto-Gbe “*-ve” ou “*-we”, com parentes no fon (“àwè”), no saxwe gbe (“owè”), no aja (“eve”) e no gun (“awe”) — a mesma raiz numérica espalhada pelas línguas gbe.',
    transparent: false,
  },
  {
    word: 'ati',
    root_word: '*-tĩ́ (Proto-Gbe)',
    origin_language: 'Proto-Gbe',
    cognates: c(['fon', 'atin'], ['gun', 'atin']),
    evolution_note: 'O Wiktionary liga “ati” (árvore, pau) ao Proto-Gbe “*-tĩ́”, com cognatos quase idênticos no fon (“atin”) e no gun (“atin”) — a mesma palavra para “árvore” nos dois lados da fronteira Gana-Togo-Benin.',
    transparent: false,
  },
  {
    word: 'nyɔnu',
    root_word: 'nyɔnu (Proto-Gbe)',
    origin_language: 'Proto-Gbe',
    cognates: c(['fon', 'nyɔ́nu']),
    evolution_note: 'O Wiktionary cita o cognato fon “nyɔ́nu” com sentido idêntico (“mulher”) para o eʋe “nyɔnu” — um dos pares mais parecidos entre as duas línguas gbe.',
    transparent: false,
  },
  {
    word: 'alẽ',
    root_word: 'a- + lẽ',
    origin_language: 'Eʋe (composição interna)',
    cognates: c(['fon', 'lɛ̀ngbɔ́'], ['gun', 'lɛ̀ngbɔ́']),
    evolution_note: 'O Wiktionary decompõe “alẽ” (ovelha) no prefixo “a-” mais “lẽ” (teimoso, “burro”) — a ovelha batizada pelo próprio jeito teimoso; a raiz “lẽ” aparece também no fon “lɛ̀ngbɔ́” e no gun “lɛ̀ngbɔ́”, ambos “ovelha”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_EE: [string, string][] = [
  ['Nye ƒome la…', 'Minha família… (continue contando sobre fofo, nɔ, nɔvi e vi)'],
  ['Nye ɖu…', 'Eu como… (continue com o que você come, usando “ɖu”)'],
  ['Nye kpɔ…', 'Eu vejo… (continue com um animal ou pessoa do vocabulário, usando “kpɔ”)'],
  ['Xɔ la…', 'A casa… (continue descrevendo com “gã”, grande, ou “sue”, pequeno)'],
];

export const SHADOWING_EE: [string, string][] = [
  ['Akpe!', 'Obrigado!'],
  ['Nye ɖu abolo.', 'Eu como pão.'],
  ['Ƒome la nyo.', 'A família é boa.'],
  ['Dzata la dzo.', 'O leão vai embora.'],
];
