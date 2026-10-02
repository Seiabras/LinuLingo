import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no tétum). */
export const COMMUNITY_TDT: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ita nia naran saida?',
    content: 'Meu nome é Bruno.',
    reference: "Ha'u nia naran Bruno.",
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ita diak ka lae?',
    content: 'Sim, estou bem.',
    reference: "Loos, ha'u diak.",
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Agradeça em tétum por um café.',
    content: 'Obrigado!',
    reference: 'Obrigadu! (ou “Obrigada!”, se for mulher — o tétum marca o gênero de quem agradece, como o português.)',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_TDT: ScenarioSeed[] = [
  {
    id: 'tdt-s1',
    title: 'Kafé iha merkadu',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Alita, vendedora de café numa banca do mercado de Díli',
    description: 'Alita vende café e pão numa banca perto do mercado. É uma conversa informal: use “ó” ou simplesmente não use pronome.',
    turns: [
      {
        bot: 'Bondia! Ita hemu kafé ka bee?',
        botTranslation: 'Bom dia! Você bebe café ou água?',
        keywords: ['kafé', 'bee'],
        suggestions: ['Kafé ida, favor ida.', 'Bee ida, favor ida.'],
      },
      {
        bot: 'Ita nia naran saida?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ["ha'u nia naran"],
        suggestions: ["Ha'u nia naran Ana."],
      },
    ],
  },
];

/**
 * Palavras do tétum com a origem e os parentes nas línguas irmãs. Fontes conferidas palavra a
 * palavra no Wikcionário (inglês): https://en.wiktionary.org/wiki/lafaek#Tetum,
 * https://en.wiktionary.org/wiki/metan#Tetum, https://en.wiktionary.org/wiki/mutin#Tetum,
 * https://en.wiktionary.org/wiki/liman#Tetum, e a categoria «Tetum terms borrowed from Portuguese»
 * (https://en.wiktionary.org/wiki/Category:Tetum_terms_borrowed_from_Portuguese) para “keiju”;
 * a lenda do crocodilo citada em “lafaek” vem da Wikipédia (inglês), «Lafaek Diak»:
 * https://en.wikipedia.org/wiki/Lafaek_Diak
 */
export const ETYMOLOGY_TDT: EtymologySeed[] = [
  {
    word: 'lafaek',
    root_word: 'lavei (fataluku)',
    origin_language: 'Papuásica (via fataluku, língua não-austronésia de Timor-Leste)',
    cognates: c(['ddg', 'lavei']),
    evolution_note:
      'Diferente da maioria do vocabulário tétum, que é austronésio ou veio do português, “lafaek” (crocodilo) é uma palavra papuásica, aparentada da palavra “lavei” do fataluku (outra língua de Timor-Leste, não-austronésia). O crocodilo é o protagonista da lenda “Lafaek Diak”, o mito de origem da ilha de Timor.',
    transparent: false,
  },
  {
    word: 'metan',
    root_word: '*(ma-)qitəm',
    origin_language: 'Proto-malaio-polinésio',
    cognates: c(['ms', 'hitam']),
    evolution_note: '“Metan” (preto) vem do proto-malaio-polinésio *(ma-)qitəm, a mesma raiz do malaio “hitam” (preto) — um parentesco bem mais antigo e distante do que os empréstimos portugueses do tétum.',
    transparent: false,
  },
  {
    word: 'mutin',
    root_word: '*(ma-)putiq',
    origin_language: 'Proto-malaio-polinésio',
    cognates: c(['ms', 'putih']),
    evolution_note: '“Mutin” (branco) vem do proto-malaio-polinésio *(ma-)putiq, aparentado do malaio “putih” (branco) — a mesma família austronésia que o malaio e o indonésio, bem mais antiga do que os empréstimos do português.',
    transparent: false,
  },
  {
    word: 'liman',
    root_word: '*lima',
    origin_language: 'Proto-malaio-polinésio / proto-austronésio',
    cognates: c(['tdt', 'lima (cinco)']),
    evolution_note: '“Liman” (mão, braço) vem da mesma raiz austronésia *lima que deu o numeral tétum “lima” (cinco) — a mão com cinco dedos deu nome ao número, um parentesco interno que o português não tem (“mão” e “cinco” não têm a mesma raiz em português).',
    transparent: false,
  },
  {
    word: 'keiju',
    root_word: 'queijo',
    origin_language: 'Português',
    cognates: c(['pt', 'queijo']),
    evolution_note: '“Keiju” é um dos muitos empréstimos diretos do português trazidos pela colonização: a grafia muda (k em vez de qu, j mantido) mas a palavra e o som são quase idênticos ao português “queijo”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_TDT: [string, string][] = [
  ['Ita diak ka lae?', 'Você está bem?'],
  ["Ita nia uma oinsá?", 'Como é a sua casa?'],
  ["Ita nia inan no aman iha ne'ebé?", 'Onde estão a sua mãe e o seu pai?'],
  ['Ita gosta hemu kafé ka lae?', 'Você gosta de beber café?'],
];

export const SHADOWING_TDT: [string, string][] = [
  ["Bondia! Ha'u nia naran Ana.", 'Bom dia! Meu nome é Ana.'],
  ["Ha'u diak, obrigada.", 'Eu estou bem, obrigada.'],
  ["Ita bele ko'alia Tetun?", 'Você consegue falar tétum?'],
  ["Ha'u iha asu ida iha uma.", 'Eu tenho um cachorro em casa.'],
];
