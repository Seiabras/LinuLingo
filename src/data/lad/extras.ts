import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no ladino). */
export const COMMUNITY_LAD: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Tu nombre, tu sivdad i tu famiya.',
    content: 'Hola! Me llamo Bruno y soy de Curitiba. Tengo un hermano.',
    reference: 'Ke haber! Me yamo Bruno i so de Curitiba. Tengo un ermano.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ke komes a la manyana?',
    content: 'Como pan y queso.',
    reference: 'Komo pan i kezo.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Komo es tu kaza?',
    content: 'La mi casa es chica.',
    reference: 'Mi kaza es chika.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_LAD: ScenarioSeed[] = [
  {
    id: 'lad-s1',
    title: 'Un kafe en Estambol',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Rashel, una amiga del kurso de ladino',
    description: 'Rashel convida você para um café perto da Torre de Gálata. É uma conversa entre amigas: use «tu».',
    turns: [
      {
        bot: 'Ke haber? Ke keres bever?',
        botTranslation: 'E aí? O que você quer beber?',
        keywords: ['kafe', 'agua', 'te'],
        suggestions: ['Un kafe, por favor.', 'Un vaso de agua, por favor.'],
      },
      {
        bot: 'De ande sos?',
        botTranslation: 'De onde você é?',
        keywords: ['so de'],
        suggestions: ['So de São Paulo.', 'So de Salvador.'],
      },
    ],
  },
];

/** Palavras do ladino com a origem e os parentes nas línguas irmãs. */
export const ETYMOLOGY_LAD: EtymologySeed[] = [
  {
    word: 'avlar',
    root_word: 'fabulare',
    origin_language: 'Latim (pelo castelhano antigo «fablar»)',
    cognates: c(['pt', 'falar'], ['es', 'hablar']),
    evolution_note: 'O castelhano antigo dizia «fablar»; o f- virou h- e depois sumiu. O ladino, levado da Espanha em 1492, escreve «avlar», e em algumas comunidades ainda se diz «favlar», com o f antigo.',
    transparent: true,
  },
  {
    word: 'preto',
    root_word: 'preto',
    origin_language: 'Português',
    cognates: c(['pt', 'preto']),
    evolution_note: 'Uma das palavras que o ladino recebeu dos judeus expulsos de Portugal: o espanhol diz «negro», o ladino diz «preto», como o português.',
    transparent: true,
  },
  {
    word: 'alhad',
    root_word: 'al-aḥad',
    origin_language: 'Árabe',
    cognates: c(['pt', 'domingo'], ['es', 'domingo']),
    evolution_note: 'Do árabe «al-aḥad», «o primeiro» (dia da semana). Segundo a explicação mais citada, as comunidades sefarditas evitavam «domingo», palavra ligada a «Dominus» (o Senhor, no cristianismo).',
    transparent: false,
  },
  {
    word: 'mersi',
    root_word: 'merci',
    origin_language: 'Francês',
    cognates: c(['fr', 'merci'], ['pt', 'mercê']),
    evolution_note: 'Veio com as escolas da Alliance Israélite Universelle, que ensinavam em francês nas comunidades judaicas do Império Otomano a partir do século XIX.',
    transparent: false,
  },
  {
    word: 'kaza',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['es', 'casa'], ['it', 'casa']),
    evolution_note: 'A mesma palavra do português e do espanhol, escrita como se fala: com k e com z, porque o s entre vogais soa como z.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_LAD: [string, string][] = [
  ['Komo estas oy?', 'Como você está hoje?'],
  ['Kontame de tu famiya.', 'Me conte da sua família.'],
  ['Ke te plaze komer i bever?', 'O que você gosta de comer e de beber?'],
  ['Komo es tu kaza?', 'Como é a sua casa?'],
];

export const SHADOWING_LAD: [string, string][] = [
  ['Ke haber? Me yamo Ana.', 'E aí? Eu me chamo Ana.'],
  ['Bien, grasias! I tu?', 'Bem, obrigado! E você?'],
  ['Tengo un ermano i una ermana.', 'Tenho um irmão e uma irmã.'],
  ['Avlo un poko de ladino.', 'Eu falo um pouco de ladino.'],
];
