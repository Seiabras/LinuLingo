import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no valão). */
export const COMMUNITY_WA: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Vosse no, vosse vèye eyet vosse famile.',
    content: 'Bondjoû! Dji me chame Bruno e dji so di Curitiba. Dj’ a un frére.',
    reference: 'Bondjoû! Dji m’ lome Bruno eyet dji so di Curitiba. Dj’ a on frére.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Qwè magnî-ve al matinêye?',
    content: 'Dji magne pan et formaggio.',
    reference: 'Dji magne pan eyet fromadje.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Cmint est vosse måjhon?',
    content: 'Mi måjhon est p’tit.',
    reference: 'Mi måjhon est p’tite.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_WA: ScenarioSeed[] = [
  {
    id: 'wa-s1',
    title: 'On cafè a Lidje',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, ene soçone do coûrs d’ walon',
    description: 'Anna convida você para um café no centro de Liège. É uma conversa entre amigos: use “ti”.',
    turns: [
      {
        bot: 'Bondjoû! Qwè vloz-ve bware?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['cafè', 'êwe', 'lacê'],
        suggestions: ['On cafè, s’i vs plait.', 'On voere d’ êwe, s’i vs plait.'],
      },
      {
        bot: 'Di wice esti-ve?',
        botTranslation: 'De onde você é?',
        keywords: ['dji so di'],
        suggestions: ['Dji so di Sao Polo.', 'Dji so di Salvador.'],
      },
    ],
  },
];

/** Palavras do valão com a raiz latina (ou francesa) e os parentes nas línguas irmãs. */
export const ETYMOLOGY_WA: EtymologySeed[] = [
  {
    word: 'måjhon',
    root_word: 'mansio(nem)',
    origin_language: 'Latim',
    cognates: c(['pt', 'mansão'], ['fr', 'maison'], ['it', 'magione']),
    evolution_note: 'Do latim “mansio” (lugar onde se para), a mesma raiz que deu “maison” em francês e “mansão” em português — mas o valão levou o som por um caminho próprio, com o “å” fechado e o “jh” típico da grafia Rfondou walon.',
    transparent: true,
  },
  {
    word: 'lacê',
    root_word: 'lacte(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'leite'], ['fr', 'lait'], ['it', 'latte'], ['es', 'leche']),
    evolution_note: 'Do latim “lactem”, como “lait” em francês e “leite” em português: o grupo “-ct-” amoleceu de um jeito parecido em várias línguas românicas.',
    transparent: true,
  },
  {
    word: 'pan',
    root_word: 'panis',
    origin_language: 'Latim',
    cognates: c(['pt', 'pão'], ['fr', 'pain'], ['it', 'pane'], ['es', 'pan']),
    evolution_note: 'Do latim “panis”, praticamente igual em todas as línguas românicas mais próximas, inclusive o espanhol.',
    transparent: true,
  },
  {
    word: 'êwe',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['fr', 'eau'], ['it', 'acqua'], ['es', 'agua']),
    evolution_note: 'Do latim “aqua”, com o “-qu-” quase sumindo, como no francês “eau” — o valão guardou um pouco mais do som original que o francês.',
    transparent: true,
  },
  {
    word: 'frére',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['fr', 'frère'], ['it', 'fratello'], ['ro', 'frate']),
    evolution_note: 'O valão guardou o latim “frater” para “irmão”, como o francês e o romeno; o português e o espanhol preferiram “germanus” (irmão, hermano) e deixaram “frater” só em “frade” e “fraterno”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_WA: [string, string][] = [
  ['Cmint va-t’ audjourdu?', 'Como vai hoje?'],
  ['Djåsez di vosse famile.', 'Conte da sua família.'],
  ['Qwè vs plait magnî eyet bware?', 'O que você gosta de comer e de beber?'],
  ['Cmint est vosse måjhon?', 'Como é a sua casa?'],
];

export const SHADOWING_WA: [string, string][] = [
  ['Bondjoû! Dji m’ lome Ana.', 'Oi! Eu me chamo Ana.'],
  ['Bén, merci! Et vos?', 'Bem, obrigado! E você?'],
  ['Dj’ a on frére eyet ene soûr.', 'Tenho um irmão e uma irmã.'],
  ['Dji n’ sai nén.', 'Eu não sei.'],
];
