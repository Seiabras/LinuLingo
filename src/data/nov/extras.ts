import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo novial). */
export const COMMUNITY_NOV: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Describe vun fratro.',
    content: 'Me have un fratros. Lo es grandi.',
    reference: 'Me have un fratro. Lo es grandi.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Describe vun hause.',
    content: 'Men hause es grandis.',
    reference: 'Men hause es grandi.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Kel es vu?',
    content: 'Es Ana.',
    reference: 'Me es Ana.',
  },
];

/** Cenário de conversa, usando o vocabulário e a gramática já confirmados (sem palavra nova). */
export const SCENARIOS_NOV: ScenarioSeed[] = [
  {
    id: 'nov-s1',
    title: 'A li Konferentie',
    emoji: '🧭',
    cefr: 'A1',
    register: 'informal',
    persona: 'Petro, un studente de Novial',
    description: 'Petro te encontra num encontro de falantes de novial e começa a conversar.',
    turns: [
      {
        bot: 'Bon jorne! Qui vu voli drinka?',
        botTranslation: 'Olá! O que você quer beber?',
        keywords: ['aque', 'milke', 'voli'],
        suggestions: ['Me voli aque.', 'Me voli milke.'],
        registerBreakers: [],
      },
      {
        bot: 'E qui es vun nome?',
        botTranslation: 'E qual é o seu nome?',
        keywords: ['me', 'es', 'nome'],
        suggestions: ['Men nome es Ana.', 'Me es Ana.'],
        registerBreakers: [],
      },
    ],
  },
];

/**
 * Palavras do novial e a raiz real de onde vêm. Fontes: "Novial Lexike" (Jespersen, 1930), que
 * indica a língua-fonte de cada entrada (E=inglês, F=francês, D=alemão); Wikipédia/Wiktionary pros
 * cognatos reais de línguas já no app. O vocabulário do novial é deliberadamente parecido com o
 * inglês, o francês e o alemão — Jespersen escolheu as raízes já mais internacionais, mas também
 * criou algumas simplificações próprias (como "yes"/"non", praticamente iguais ao inglês).
 */
export const ETYMOLOGY_NOV: EtymologySeed[] = [
  {
    word: 'yes',
    root_word: 'yes',
    origin_language: 'Inglês',
    cognates: c(['en', 'yes']),
    evolution_note: 'Jespersen pegou a palavra inglesa quase sem mudar — ele considerava o inglês a língua mais "internacional" já na década de 1920, por causa do Império Britânico e dos Estados Unidos.',
    transparent: true,
  },
  {
    word: 'aque',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['es', 'agua'], ['it', 'acqua'], ['fr', 'eau'], ['pt', 'água']),
    evolution_note: 'Como em quase toda língua construída europeia (esperanto, interlíngua, ido), "água" vem direto do latim "aqua" — é uma das raízes mais reconhecíveis entre as línguas românicas.',
    transparent: true,
  },
  {
    word: 'hause',
    root_word: 'Haus/house',
    origin_language: 'Germânico (alemão/inglês)',
    cognates: c(['de', 'Haus'], ['en', 'house'], ['nl', 'huis']),
    evolution_note: 'Diferente da interlíngua (que usa "domo", do latim), o novial pegou a raiz germânica — Jespersen misturava deliberadamente raízes latinas e germânicas, ao contrário do esperanto (quase só latino/eslavo) e da interlíngua (só românico/inglês).',
    transparent: false,
  },
  {
    word: 'familie',
    root_word: 'familia',
    origin_language: 'Latim',
    cognates: c(['es', 'familia'], ['it', 'famiglia'], ['fr', 'famille'], ['en', 'family'], ['pt', 'família']),
    evolution_note: 'Praticamente idêntica ao português — uma das palavras mais "internacionais" que existem, por isso Jespersen a manteve quase sem mudança.',
    transparent: true,
  },
  {
    word: 'grandi',
    root_word: 'grand/grande',
    origin_language: 'Francês/latim',
    cognates: c(['fr', 'grand'], ['es', 'grande'], ['it', 'grande'], ['pt', 'grande']),
    evolution_note: 'A raiz é idêntica à do português; o -i final é só a terminação regular de adjetivo do novial (ver gramática), não uma mudança na raiz.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_NOV: [string, string][] = [
  ['Qui es vun nome?', 'Qual é o seu nome?'],
  ['Qui vu voli manja disdi?', 'O que você quer comer hoje?'],
  ['Vor es vun hause?', 'Onde é a sua casa?'],
  ['Have vu fratros?', 'Você tem irmãos?'],
];

export const SHADOWING_NOV: [string, string][] = [
  ['Bon jorne! Men nome es Ana, e me vive in un grandi urbe.', 'Olá! Meu nome é Ana, e eu moro numa cidade grande.'],
  ['Danka, e bon jorne!', 'Obrigado, e bom dia!'],
  ['Me have un fratro e un fratra.', 'Eu tenho um irmão e uma irmã.'],
  ['Li aque es boni, ma li pane es plu boni.', 'A água é boa, mas o pão é melhor.'],
];
