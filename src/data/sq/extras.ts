import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no albanês). */
export const COMMUNITY_SQ: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Emri yt, qyteti yt dhe familja jote.',
    content: 'Përshëndetje! Unë quhem Bruno dhe jam nga Curitiba. Kam vëlla një.',
    reference: 'Përshëndetje! Unë quhem Bruno dhe jam nga Curitiba. Kam një vëlla.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Çfarë ha ti në mëngjes?',
    content: 'Ha bukë dhe djathin.',
    reference: 'Ha bukë dhe djathë.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Si është shtëpia jote?',
    content: 'Shtëpia ime është i vogël.',
    reference: 'Shtëpia ime është e vogël.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_SQ: ScenarioSeed[] = [
  {
    id: 'sq-s1',
    title: 'Kafe në Tiranë',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ana, shoqe nga kursi i shqipes',
    description: 'Ana ju fton për kafe në qendër të Tiranës. Është bisedë mes shokësh: përdorni “ti”.',
    turns: [
      {
        bot: 'Përshëndetje! Çfarë do të pish?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['kafe', 'ujë', 'qumësht'],
        suggestions: ['Një kafe, ju lutem.', 'Një ujë, ju lutem.'],
      },
      {
        bot: 'Nga je ti?',
        botTranslation: 'De onde você é?',
        keywords: ['jam nga'],
        suggestions: ['Unë jam nga Sao Paulo.', 'Unë jam nga Salvador.'],
      },
    ],
  },
];

/** Palavras do albanês com a raiz indo-europeia e os parentes em outras línguas. */
export const ETYMOLOGY_SQ: EtymologySeed[] = [
  {
    word: 'motër',
    root_word: 'méh₂tēr',
    origin_language: 'Protoindo-europeu',
    cognates: c(['la', 'mater'], ['pt', 'mãe, matriarca'], ['en', 'mother']),
    evolution_note: 'Um dos casos mais citados da etimologia albanesa: “motër” (irmã) vem da mesma raiz indo-europeia que deu “mater” em latim e “mãe” em português — no albanês, o sentido migrou de “mãe” para “irmã” ao longo dos séculos.',
    transparent: false,
  },
  {
    word: 'natën e mirë',
    root_word: 'nókʷts',
    origin_language: 'Protoindo-europeu',
    cognates: c(['la', 'nox, noctis'], ['pt', 'noite'], ['en', 'night']),
    evolution_note: '“Natën” vem da mesma raiz indo-europeia do latim “nox” e do português “noite” — o “n” e o “t” do começo ainda aparecem nos três.',
    transparent: true,
  },
  {
    word: 'dhjetë',
    root_word: 'déḱm̥t',
    origin_language: 'Protoindo-europeu',
    cognates: c(['la', 'decem'], ['pt', 'dez'], ['en', 'ten']),
    evolution_note: '“Dhjetë” e “dez” vêm da mesma raiz indo-europeia do latim “decem” — o som “d” do começo se manteve nos dois.',
    transparent: true,
  },
  {
    word: 'pesë',
    root_word: 'pénkʷe',
    origin_language: 'Protoindo-europeu',
    cognates: c(['la', 'quinque'], ['pt', 'cinco'], ['el', 'πέντε (pénte)']),
    evolution_note: '“Pesë” vem da mesma raiz indo-europeia que deu o grego “pénte” e, por um caminho mais longo, o latim “quinque” (de onde vem o português “cinco”) — mudanças de som antigas deixaram as formas bem diferentes hoje.',
    transparent: false,
  },
  {
    word: 'unë',
    root_word: 'eǵoH',
    origin_language: 'Protoindo-europeu',
    cognates: c(['la', 'ego'], ['pt', 'eu'], ['en', 'I']),
    evolution_note: '“Unë” vem da mesma raiz indo-europeia do latim “ego” e do português “eu” — a mesma origem do pronome “eu” em muitas línguas europeias, embora o som tenha mudado bastante no albanês.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_SQ: [string, string][] = [
  ['Si je sot?', 'Como você está hoje?'],
  ['Më trego për familjen tënde.', 'Conte-me sobre a sua família.'],
  ['Çfarë të pëlqen të hash dhe të pish?', 'O que você gosta de comer e beber?'],
  ['Si është shtëpia jote?', 'Como é a sua casa?'],
];

export const SHADOWING_SQ: [string, string][] = [
  ['Përshëndetje! Unë quhem Ana.', 'Oi! Eu me chamo Ana.'],
  ['Mirë, faleminderit! Po ju?', 'Bem, obrigado! E você?'],
  ['Kam një vëlla dhe një motër.', 'Tenho um irmão e uma irmã.'],
  ['Nuk e di.', 'Não sei.'],
];
