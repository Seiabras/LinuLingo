import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (os três erros típicos de brasileiros no fon, cada um
 * ligado a um tópico de gramatica.ts: artigo posposto, verbo sem terminação, adjetivo depois do
 * nome).
 */
export const COMMUNITY_FON: CommunitySeed[] = [
  {
    author_name: 'Beto 🇧🇷',
    prompt: 'Aximɛ ɔ́.',
    content: 'Ɔ́ aximɛ, un xɔ hwevi.',
    reference: 'Aximɛ ɔ́, un xɔ̀ hweví.',
  },
  {
    author_name: 'Carla 🇧🇷',
    prompt: 'Wémà ɔ́.',
    content: 'Un ɖóo wémà.',
    reference: 'Un ɖó wémà.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Nǔ ɔ́.',
    content: 'Kpàtàkì nǔ ɔ́.',
    reference: 'Nǔ ɔ́ kpàtàkì.',
  },
];

/** Cenário de conversa no mercado de Cotonou. */
export const SCENARIOS_FON: ScenarioSeed[] = [
  {
    id: 'fon-s1',
    title: 'Aximɛ ɔ́',
    emoji: '🏪',
    cefr: 'A1',
    register: 'informal',
    persona: 'Honton, um amigo vendedor no mercado de Cotonou',
    description: 'Honton te recebe no mercado e oferece peixe e lagosta. É uma conversa informal entre amigos.',
    turns: [
      {
        bot: 'Kwabɔ ɖò aximɛ ɔ́! Un ɖó hweví kpo acɔci kpo.',
        botTranslation: 'Bem-vindo ao mercado! Eu tenho peixe e lagosta.',
        keywords: ['xɔ̀', 'akwɛ́'],
        suggestions: ['Un xɔ̀ hweví.', 'Un ɖó akwɛ́.'],
      },
      {
        bot: 'Hweví ɔ́ ɖò aximɛ.',
        botTranslation: 'O peixe está no mercado.',
        keywords: ['xɔ̀', 'ɖó'],
        suggestions: ['Un xɔ̀ hweví.', 'Un ɖó akwɛ́ ɖokpó.'],
      },
    ],
  },
];

/**
 * Palavras do fon com a origem explicada — todas com etimologia tirada do Wiktionary (verbetes
 * «itàn», «kpàtàkì», «lanmɛ», «lan», «hanjitɔ», «danhwevi»). Nenhuma delas é transparente para quem
 * fala português: o fon não é parente do português.
 */
export const ETYMOLOGY_FON: EtymologySeed[] = [
  {
    word: 'itàn',
    root_word: 'ìtàn',
    origin_language: 'Iorubá',
    cognates: c(['yo', 'ìtàn']),
    evolution_note: 'O Wiktionary registra “itàn” (história) como empréstimo direto do iorubá “ìtàn”, com parentes também no gun, no nupe, no igala e no bini — línguas vizinhas do fon no sul do Benin e na Nigéria.',
    transparent: false,
  },
  {
    word: 'kpàtàkì',
    root_word: 'pàtàkì',
    origin_language: 'Iorubá',
    cognates: c(['yo', 'pàtàkì']),
    evolution_note: 'O Wiktionary compara “kpàtàkì” (importante; também o verbo “ser importante”) ao iorubá “pàtàkì”, com a mesma raiz presente no nupe, no gun e no bini.',
    transparent: false,
  },
  {
    word: 'lànmɛ̀',
    root_word: 'làn + mɛ̀',
    origin_language: 'Fon (composição interna)',
    cognates: [],
    evolution_note: 'O Wiktionary mostra “lànmɛ̀” (corpo) como a junção de “làn” (carne) com “mɛ̀” (pessoa): o corpo é, literalmente, “o que tem carne de gente”. A mesma composição aparece no gun (“lànmɛ̀”) e no saxwe.',
    transparent: false,
  },
  {
    word: 'hanjitɔ́',
    root_word: 'hàn + jì + -tɔ́',
    origin_language: 'Fon (composição interna)',
    cognates: [],
    evolution_note: 'O Wiktionary decompõe “hanjitɔ́” (cantor) em “hàn” (canção) + “jì” (cantar) + o sufixo “-tɔ́”, que forma quem faz a ação — o mesmo sufixo agentivo aparece em outras palavras fon.',
    transparent: false,
  },
  {
    word: 'dànhweví',
    root_word: 'dàn + hweví',
    origin_language: 'Fon (composição interna)',
    cognates: [],
    evolution_note: 'O Wiktionary mostra que “dànhweví” (enguia) é a soma de “dàn” (cobra) com “hweví” (peixe): a enguia é vista como um “peixe-cobra”, pelo corpo comprido e liso.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_FON: [string, string][] = [
  ['Égbé, un yì aximɛ…', 'Hoje, eu vou ao mercado… (continue a frase em fon, contando o que você compra)'],
  ['Un ɖó…', 'Eu tenho… (continue contando o que você tem, com “Un ɖó…”)'],
  ['Wémà ɔ́ kpàtàkì…', 'O livro é importante… (continue dizendo por quê, com “…kpàtàkì”)'],
  ['Houé yòyò…', 'Ano novo… (continue com um desejo ou plano, usando as palavras do vocabulário)'],
];

export const SHADOWING_FON: [string, string][] = [
  ['Sìn ɔ́.', 'A água.'],
  ['Kwabɔ!', 'Bem-vindo!'],
  ['Un xɔ̀ hweví ɖò aximɛ.', 'Eu comprei peixe no mercado.'],
  ['Houé yòyò.', 'Ano novo.'],
];
