import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo mongol). */
export const COMMUNITY_MN: CommunitySeed[] = [
  {
    author_name: 'Marina 🇧🇷',
    prompt: 'Chi mongol khel medekh üü? (Você fala mongol? informal)',
    content: 'Чи монгол хэл мэдэх уу.',
    reference: 'Чи монгол хэл мэдэх үү?',
  },
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Таны нэр хэн бэ?',
    content: 'Миний нэр хэн бэ.',
    reference: 'Миний нэр …',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'O que é isto? (pergunte em mongol)',
    content: 'Юу энэ вэ?',
    reference: 'Энэ юу вэ?',
  },
];

/**
 * Cenário formal: o mongol distingue “чи” (tu/você, informal) de “та” (você/vocês, formal) — ambas as
 * formas atestadas em omniglot.com/language/phrases/mongolian.php (“Чи/Та монгол хэл мэдэх үү?”) — por
 * isso usar “чи” com um ancião, como no cenário abaixo, quebra o registro esperado.
 */
export const SCENARIOS_MN: ScenarioSeed[] = [
  {
    id: 'mn-s1',
    title: 'Ancião da estepe',
    emoji: '🧓',
    cefr: 'A1',
    register: 'formal',
    persona: 'Um ancião nômade que você encontra perto da guer dele, na estepe',
    description: 'Com uma pessoa mais velha, use “та” (formal), não “чи” (informal).',
    turns: [
      {
        bot: 'Сайн байна уу? Та хаанаас ирсэн бэ?',
        botTranslation: 'Olá! De onde você é? (formal)',
        keywords: ['би', 'ирсэн'],
        suggestions: ['Би Бразилээс ирсэн.', 'Би Монголоос ирсэн.'],
        registerBreakers: ['чи'],
      },
      {
        bot: 'Танд их баярлалаа. Цай уух уу?',
        botTranslation: 'Muito obrigado a você. Quer beber chá?',
        keywords: ['цай', 'баярлалаа'],
        suggestions: ['Цай, баярлалаа.', 'Айраг, баярлалаа.'],
        registerBreakers: ['чи'],
      },
    ],
  },
];

/**
 * Etimologia de palavras mongóis. O mongol NÃO é parente do português (é mongólico, de uma família sem
 * relação confirmada com o indo-europeu nem com o turcaico — ver a nota em index.ts sobre a hipótese
 * “altaica”); por isso nenhuma das notas abaixo busca parentesco com o português. Duas delas mostram,
 * em vez disso, o parentesco real do mongol dentro da família mongólica (com o buriato e o calmuco) e um
 * caso de contato histórico com uma língua turcaica (sem que isso implique parentesco genealógico).
 */
export const ETYMOLOGY_MN: EtymologySeed[] = [
  {
    word: 'гэр',
    root_word: 'гэр (proto-mongólico)',
    origin_language: 'Proto-mongólico',
    cognates: c(
      ['bua', 'forma idêntica ou quase idêntica, segundo o Wiktionary (grafia exata não registrada pela fonte consultada)'],
      ['xal', 'forma idêntica ou quase idêntica, segundo o Wiktionary (grafia exata não registrada pela fonte consultada)'],
    ),
    evolution_note:
      'O Wiktionary registra “гэр” (casa, guer) como uma palavra de raiz proto-mongólica, com formas idênticas ou quase idênticas no buriato, no calmuco e no mongol khamnigan — línguas da mesma família mongólica que o mongol khalkha. É um parentesco real dentro da própria família, bem diferente do português, que não tem relação genealógica nenhuma com o mongol.',
    transparent: false,
  },
  {
    word: 'зургаа',
    root_word: '*ǰirguxan (proto-mongólico)',
    origin_language: 'Proto-mongólico',
    cognates: c(
      ['bua', 'forma aparentada, derivada do mesmo numeral proto-mongólico (grafia exata não registrada pela fonte consultada)'],
      ['xal', 'forma aparentada, derivada do mesmo numeral proto-mongólico (grafia exata não registrada pela fonte consultada)'],
    ),
    evolution_note:
      'O numeral “зургаа” (seis) vem do proto-mongólico “*ǰirguxan”, segundo o Wiktionary, com formas aparentadas no buriato e no calmuco — os numerais básicos estão entre as palavras mais estáveis de qualquer família de línguas, e o mongol não é exceção.',
    transparent: false,
  },
  {
    word: 'арав',
    root_word: '*harban (proto-mongólico)',
    origin_language: 'Proto-mongólico',
    cognates: c(
      ['bua', 'forma aparentada, derivada do mesmo numeral proto-mongólico (grafia exata não registrada pela fonte consultada)'],
      ['xal', 'forma aparentada, derivada do mesmo numeral proto-mongólico (grafia exata não registrada pela fonte consultada)'],
    ),
    evolution_note:
      'Assim como “зургаа” (seis), o numeral “арав” (dez) vem de uma raiz proto-mongólica antiga, “*harban”, com formas aparentadas no buriato e no calmuco, segundo o Wiktionary.',
    transparent: false,
  },
  {
    word: 'айраг',
    root_word: 'raiz turcaica (empréstimo)',
    origin_language: 'Proto-turcaico',
    cognates: c(),
    evolution_note:
      'O Wiktionary registra “айраг” (koumiss, leite de égua fermentado) como uma palavra de origem proto-turcaica, encontrada em bebidas de leite fermentado semelhantes por toda a Ásia Central. É um empréstimo por CONTATO entre povos vizinhos, não um sinal de parentesco genealógico: o mongol (família mongólica) e as línguas turcaicas são consideradas, pela linguística comparada atual, famílias SEM relação de parentesco confirmada — a antiga hipótese “altaica”, que as uniria junto com o tungúsico, é hoje vista como obsoleta pela maioria dos linguistas comparativistas.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_MN: [string, string][] = [
  ['Таны нэр хэн бэ?', 'Qual é o seu nome?'],
  ['Та хаанаас ирсэн бэ?', 'De onde você é?'],
  ['Энэ юу вэ?', 'O que é isso?'],
  ['Цай уух уу?', 'Você quer beber chá?'],
];

export const SHADOWING_MN: [string, string][] = [
  ['Сайн байна уу?', 'Olá! (lit. “você está bem?”)'],
  ['Би найзаа аварсан.', 'Eu salvei meu amigo/minha amiga.'],
  ['Энэ хүн миний найз.', 'Esta pessoa é meu amigo/minha amiga.'],
  ['Танд их баярлалаа.', 'Muito obrigado(a) a você.'],
];
