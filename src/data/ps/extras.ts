import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no pachto). */
export const COMMUNITY_PS: CommunitySeed[] = [
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'ستاسو نوم څه دی؟',
    content: 'نوم زما لوکاس دی.',
    reference: 'زما نوم لوکاس دی.',
  },
  {
    author_name: 'Ana 🇧🇷',
    prompt: 'ته څنګه یې؟',
    content: 'زه یم ښه.',
    reference: 'زه ښه یم، مننه.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'دا ستا مور ده؟',
    content: 'هو، دا زما مور دی.',
    reference: 'هو، دا زما مور ده.',
  },
];

/** Cenário de conversa. */
export const SCENARIOS_PS: ScenarioSeed[] = [
  {
    id: 'ps-s1',
    title: 'یو چای په کابل کې',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'جان، یو ملګری',
    description: 'Jan pergunta o que você quer numa casa de chá em Cabul. É uma conversa informal entre amigos.',
    turns: [
      {
        bot: 'سلام! څه غواړې؟',
        botTranslation: 'Olá! O que você quer?',
        keywords: ['چای', 'اوبه', 'شیدې'],
        suggestions: ['یو چای، مهرباني وکړئ.', 'اوبه غواړم.'],
      },
      {
        bot: 'ته ډوډۍ غواړې؟',
        botTranslation: 'Você quer comida?',
        keywords: ['هو', 'نه', 'ډوډۍ'],
        suggestions: ['هو، مننه!', 'نه، مننه.'],
      },
    ],
  },
];

/** Palavras do pachto com a raiz e os parentes em outras línguas indo-europeias. */
export const ETYMOLOGY_PS: EtymologySeed[] = [
  {
    word: 'چای',
    root_word: '茶 (chá)',
    origin_language: 'Chinês',
    cognates: c(['pt', 'chá'], ['fa', 'چای (chây)'], ['ru', 'чай (chay)']),
    evolution_note: 'A palavra do chá viajou do chinês “chá” por rotas de comércio terrestres até a Ásia Central, Irã e Afeganistão — o mesmo caminho que deu “chá” ao português (via o cantonês/mandarim, pelas rotas marítimas e pela influência persa/árabe). “چای” e “chá” são primos de uma mesma viagem.',
    transparent: true,
  },
  {
    word: 'سپی',
    root_word: '*ḱwṓ',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'cão, canino'], ['la', 'canis'], ['sa', 'श्वन् (śvā́)'], ['fa', 'سگ (sag)']),
    evolution_note: '“سپی” (cachorro) vem do proto-iraniano *cwā́, da mesma raiz indo-europeia *ḱwṓ que deu o latim “canis” — origem do português “cão” e “canino”. Pachto e português guardam primos distantes da mesma palavra pré-histórica para “cachorro”.',
    transparent: false,
  },
  {
    word: 'نوم',
    root_word: '*h₁nómn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'nome'], ['en', 'name'], ['el', 'όνομα (ónoma)'], ['sa', 'नामन् (nā́man)']),
    evolution_note: '“نوم” (nome) e o português “nome” descem da mesma raiz indo-europeia *h₁nómn̥ — tão parecidas que dá pra ouvir o parentesco direto, mesmo depois de milhares de anos de separação entre as duas línguas.',
    transparent: true,
  },
  {
    word: 'لس',
    root_word: '*déḱm̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'dez'], ['la', 'decem'], ['en', 'ten'], ['ur', 'دس (das)']),
    evolution_note: '“لس” (dez) vem do proto-iraniano *dáca, da mesma raiz indo-europeia *déḱm̥ que deu o latim “decem” — e daí o português “dez”. Os numerais estão entre as palavras mais estáveis de uma língua, por isso o parentesco ainda aparece claro.',
    transparent: false,
  },
  {
    word: 'ستوری',
    root_word: '*h₂stḗr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'estrela'], ['la', 'stella'], ['en', 'star'], ['el', 'αστήρ (astḗr)']),
    evolution_note: '“ستوری” (estrela) é um diminutivo de uma palavra iraniana antiga para “estrela”, que remonta à mesma raiz indo-europeia *h₂stḗr do latim “stella” — de onde vem o português “estrela”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_PS: [string, string][] = [
  ['ستاسو نوم څه دی؟', 'Qual é o seu nome?'],
  ['ستا کور څنګه دی؟', 'Como é a sua casa?'],
  ['ته څه خورې؟', 'O que você come?'],
  ['ستا مور او پلار څنګه دي؟', 'Como estão a sua mãe e o seu pai?'],
];

export const SHADOWING_PS: [string, string][] = [
  ['سلام! زما نوم لینو دی.', 'Olá! Meu nome é Linu.'],
  ['ته ښه یې؟ زه ښه یم، مننه.', 'Você está bem? Eu estou bem, obrigado.'],
  ['زه پښتو زده کوم.', 'Eu aprendo pachto.'],
  ['زما مور چای لري.', 'Minha mãe tem chá.'],
];
