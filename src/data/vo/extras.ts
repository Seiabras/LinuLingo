import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo volapük). */
export const COMMUNITY_VO: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Lio binon-li dog ola?',
    content: 'Dog oba binob gretik.',
    reference: 'Dog oba binon gretik.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Labol-li kati?',
    content: 'Si, ob labob kat.',
    reference: 'Si, ob labob kati.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Lio panemol-li?',
    content: 'Nem oba binö Carlos.',
    reference: 'Nem oba binon Carlos.',
  },
];

/**
 * Cenário de conversa. Como no esperanto, o volapük não distingue registro formal/informal: "ol"
 * (você) serve pra qualquer pessoa, sem um pronome de tratamento formal — ver a lista de pronomes na
 * Wikipédia, artigo "Volapük" (secção de gramática).
 */
export const SCENARIOS_VO: ScenarioSeed[] = [
  {
    id: 'vo-s1',
    title: 'In Kongred Volapüka',
    emoji: '🌐',
    cefr: 'A1',
    register: 'informal',
    persona: 'Fredrik, falante de volapük',
    description: 'Fredrik te encontra num congresso de volapük e começa a conversar. O volapük não distingue formal/informal: usa-se "ol" com todo mundo, sem um equivalente ao "você" formal do português.',
    turns: [
      {
        bot: 'Glidö! Vipol-li dlinön vati u vini?',
        botTranslation: 'Olá! Você quer beber água ou vinho?',
        keywords: ['vat', 'vin', 'vipön'],
        suggestions: ['Ob vipob vati.', 'Ob vipob vini.'],
      },
      {
        bot: 'Lio panemol-li?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['nem', 'binön'],
        suggestions: ['Nem oba binon Ana.', 'Nem oba binon Carlos.'],
      },
    ],
  },
];

/**
 * Raízes do volapük e a língua real de onde vieram. Schleyer tirava uma palavra de uma língua já
 * existente (sobretudo o inglês) e a disfarçava de propósito — cortando pra uma sílaba só e tirando
 * letras — pra nenhuma nacionalidade "ter vantagem" por já conhecer a raiz. Fonte: Public Domain
 * Review, "Trüth, Beaüty, and Volapük" (https://publicdomainreview.org/essay/truth-beauty-and-volapuk/
 * — cita exatamente "löf" de "love", "pöp" de "paper", "bil" de "beer"); Wikipédia em inglês,
 * "Volapük" (a própria etimologia do nome: "vol", de "world", + "pük", de "speak" — "'Language of
 * the World', or lit. 'World Speak'"). "dog" é a excepção: ficou IGUAL ao inglês, sem disfarce.
 */
export const ETYMOLOGY_VO: EtymologySeed[] = [
  {
    word: 'vol',
    root_word: 'world',
    origin_language: 'Inglês',
    cognates: c(['en', 'world'], ['de', 'Welt'], ['nl', 'wereld']),
    evolution_note: 'Schleyer cortou "world" pra uma sílaba só e tirou o "r" (ele evitava esse som na língua inteira) — sobrou "vol". É a primeira metade do nome da própria língua: "Volapük" = "vol" (mundo) + "pük" (fala).',
    transparent: false,
  },
  {
    word: 'pük',
    root_word: 'speak',
    origin_language: 'Inglês',
    cognates: c(['en', 'speak'], ['de', 'sprechen'], ['nl', 'spreken']),
    evolution_note: 'A segunda metade do nome "Volapük": Schleyer disfarçou "speak" até sobrar "pük" — o verbo "pükön" (falar) vem da mesma raiz.',
    transparent: false,
  },
  {
    word: 'löfön',
    root_word: 'love',
    origin_language: 'Inglês',
    cognates: c(['en', 'love'], ['de', 'Liebe'], ['nl', 'liefde'], ['sv', 'kärlek']),
    evolution_note: 'Um dos disfarces mais citados do volapük: "love" perdeu o "v" final e ganhou o "ö" (som novo, do alemão) — sobrou "löf". É um exemplo clássico de como Schleyer tornava as raízes quase irreconhecíveis.',
    transparent: false,
  },
  {
    word: 'dog',
    root_word: 'dog',
    origin_language: 'Inglês',
    cognates: c(['en', 'dog']),
    evolution_note: 'A excepção que confirma a regra: "dog" ficou EXATAMENTE igual ao inglês, sem nenhum disfarce — bem raro no vocabulário do volapük, que normalmente corta e irreconhece as raízes de propósito.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_VO: [string, string][] = [
  ['Lio panemol-li?', 'Qual é o seu nome?'],
  ['Lio stadol-li?', 'Como você está?'],
  ['Famül ola binon-li gretik u smalik?', 'Sua família é grande ou pequena?'],
  ['Labol-li dogi u kati?', 'Você tem cachorro ou gato?'],
];

export const SHADOWING_VO: [string, string][] = [
  ['Glidö! Nem oba binon Ana, e ob pükob Volapüki.', 'Olá! Meu nome é Ana, e eu falo volapuque.'],
  ['Danö, ed ol-li?', 'Obrigado, e você?'],
  ['Fat oba binom gudik, e mot oba binof gudik.', 'Meu pai é bom, e minha mãe é boa.'],
  ['Vol binon gretik, e vat binon gudik.', 'O mundo é grande, e a água é boa.'],
];
