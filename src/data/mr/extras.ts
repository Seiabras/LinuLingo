import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no marata). */
export const COMMUNITY_MR: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'तुझं नाव काय आहे, आणि तू कुठे आहेस?',
    content: 'नमस्कार, मी आहे ब्रूनो. मी आहे मुंबैत.',
    reference: 'नमस्कार, माझं नाव ब्रूनो आहे, आणि मी मुंबैत आहे.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'तुला चहा आवडतो का?',
    content: 'मला चहा आवडते.',
    reference: 'मला चहा आवडतो.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'तुझं घर कसं आहे?',
    content: 'माझे घर चांगला आहे.',
    reference: 'माझे घर चांगले आहे.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_MR: ScenarioSeed[] = [
  {
    id: 'mr-s1',
    title: 'एक कप चहा',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'माया',
    description: 'Maya convida você para tomar um chá. É uma conversa entre colegas: use “तू”.',
    turns: [
      {
        bot: 'नमस्कार! तुला चहा आवडतो का?',
        botTranslation: 'Oi! Você gosta de chá?',
        keywords: ['चहा', 'पाणी', 'होय', 'नाही'],
        suggestions: ['होय, मला चहा आवडतो.', 'नाही, मला पाणी आवडते.'],
      },
      {
        bot: 'तू कुठे आहेस?',
        botTranslation: 'Onde você está?',
        keywords: ['मी … आहे'],
        suggestions: ['मी मुंबैत आहे.'],
      },
    ],
  },
];

/**
 * Palavras do marata com a raiz indo-europeia (ou, quando não há uma, a origem real registrada no
 * Wiktionary) e os parentes nas línguas irmãs.
 */
export const ETYMOLOGY_MR: EtymologySeed[] = [
  {
    word: 'नाव',
    root_word: '*h₁nómn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'nome'], ['en', 'name'], ['la', 'nomen']),
    evolution_note: '“नाव” (nāv) vem do sânscrito “नामन्” (nā́man), herdeiro direto da mesma raiz indo-europeia do latim “nomen” e do português “nome” — o próprio Wiktionary rastreia essa cadeia até o proto-indo-europeu “*h₁nómn̥”.',
    transparent: true,
  },
  {
    word: 'दोन',
    root_word: '*dwóh₁',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'dois, duplo'], ['en', 'two'], ['ru', 'два']),
    evolution_note: '“दोन” (don) desceu do sânscrito “द्व” (dva), da mesma raiz indo-europeia de “dois” em português e “two” em inglês — um numeral tão básico que sobreviveu quase sem mudar em quase toda a família indo-europeia.',
    transparent: false,
  },
  {
    word: 'भाऊ',
    root_word: '*bʰréh₂tēr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['en', 'brother'], ['ru', 'брат'], ['pt', 'sem cognato popular; sobrevive em “frei”, do latim “frater”']),
    evolution_note: '“भाऊ” (bhāū) vem do sânscrito “भ्रातृ” (bhrā́tṛ), da mesma raiz indo-europeia do inglês “brother” e do russo “брат” — e é parente direto do hindi “भाई” e do gujarati “ભાઈ”. Em português, a palavra do dia a dia é “irmão” (de outra origem latina), mas a mesma raiz sobrevive em “frei” e “frade”, tomados do latim “frater” bem mais tarde.',
    transparent: false,
  },
  {
    word: 'वडील',
    root_word: 'वड्र (vaḍra)',
    origin_language: 'Sânscrito (não é a raiz indo-europeia de “pai”)',
    cognates: [],
    evolution_note: 'Ao contrário do hindi “पिता” (que vem direto da raiz indo-europeia “*ph₂tḗr”, a mesma de “pai” em português e “father” em inglês), o marata “वडील” (vaḍīl) tem uma origem diferente: vem do sânscrito “वड्र” (vaḍra), que quer dizer “grande” — como se dissesse “o grande”, numa referência de respeito, e não à palavra antiga de “pai”.',
    transparent: false,
  },
  {
    word: 'आई',
    root_word: 'incerta',
    origin_language: 'Origem incerta (possivelmente dravídica ou uma palavra de berçário)',
    cognates: c(['as', 'আই (āi), assamês'], ['kn', 'ಆಯಿ (āyi), canarês']),
    evolution_note: 'Ao contrário do hindi “माँ” (que vem da raiz indo-europeia de “mãe”), a origem de “आई” (āī, “mãe”) é incerta: o Wiktionary lista hipóteses do sânscrito “आर्यिका” ou “अम्बा”, de uma raiz indo-ariana antiga, de uma origem dravídica, ou simplesmente de uma palavra de berçário (como o “ma” balbuciado por bebês em muitas línguas). A palavra tem parentes parecidos em outras línguas da Índia, como o assamês “आई” e o canarês “ಆಯಿ”, mas não está claro se são parentes de verdade ou coincidências do balbucio infantil.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_MR: [string, string][] = [
  ['आज तू कसा आहेस?', 'Como você está hoje?'],
  ['तुझं कुटुंब कसं आहे?', 'Como é a sua família?'],
  ['तुला काय आवडते?', 'O que você gosta?'],
  ['तुझं घर कसं आहे?', 'Como é a sua casa?'],
];

export const SHADOWING_MR: [string, string][] = [
  ['नमस्कार, माझं नाव … आहे.', 'Oi, meu nome é ...'],
  ['मी ठीक आहे, आभारी आहे.', 'Eu estou bem, obrigado(a).'],
  ['मला एक भाऊ आहे.', 'Eu tenho um irmão.'],
  ['मला चहा आवडतो.', 'Eu gosto de chá.'],
];
