import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros no soranî): esquecer a
 * cópula “-ـە/یە” no fim da frase, ou usar o pronome cheio em vez do clítico “-م” grudado na
 * palavra. Fontes: ver o cabeçalho de vocabulario.ts e gramatica.ts.
 */
export const COMMUNITY_CKB: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'ناوت چییە؟',
    content: 'ناو من برونۆیە.',
    reference: 'ناوم برونۆیە.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'باوکت چۆنە؟',
    content: 'باوکم باش.',
    reference: 'باوکم باشە.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'پشیلەی تۆ چۆنە؟',
    content: 'پشیلەم سپی.',
    reference: 'پشیلەم سپییە.',
  },
];

/** Cenário de conversa numa qawexane (casa de café) — “قاوەخانە” vem de “قاوە” (café) + “خانە” (casa). */
export const SCENARIOS_CKB: ScenarioSeed[] = [
  {
    id: 'ckb-s1',
    title: 'لە قاوەخانە',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'دۆستێک لە سلێمانی',
    description: 'Você está numa qawexane (casa de café) em Silêmanî com um amigo. É uma conversa informal: use “تۆ”.',
    turns: [
      {
        bot: 'سڵاو! من قاوە دەخۆم. تۆ؟',
        botTranslation: 'Oi! Eu bebo café. E você?',
        keywords: ['قاوە', 'چا', 'شیر'],
        suggestions: ['من قاوە دەخۆم.', 'من چا دەخۆم.'],
      },
      {
        bot: 'باشە! قاوەکە چۆنە؟',
        botTranslation: 'Legal! Como está o café?',
        keywords: ['باش', 'خۆش'],
        suggestions: ['باشە.', 'خۆشە.'],
      },
    ],
  },
];

/** Numerais e “ناو” (nome) do soranî com a raiz indo-europeia e os parentes nas línguas irmãs. */
export const ETYMOLOGY_CKB: EtymologySeed[] = [
  {
    word: 'ناو',
    root_word: '*h₁nómn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'nome'], ['en', 'name'], ['la', 'nomen']),
    evolution_note: 'A raiz indo-europeia *h₁nómn̥ chegou ao soranî como “ناو” (naw) e ao português, pelo latim “nomen”, como “nome” — primos distantes que ainda se parecem.',
    transparent: true,
  },
  {
    word: 'دوو',
    root_word: '*dwóh₁',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'dois'], ['en', 'two'], ['fa', 'دو (do)']),
    evolution_note: 'A mesma raiz indo-europeia *dwóh₁ deu “dois” em português (do latim “duo”) e “دوو” (dû) no soranî — o persa “دو” (do), da mesma família iraniana, é primo ainda mais próximo.',
    transparent: true,
  },
  {
    word: 'سێ',
    root_word: '*tréyes',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'três'], ['en', 'three'], ['fa', 'سه (se)']),
    evolution_note: 'De *tréyes vêm o português “três” (latim “tres”) e o soranî “سێ” (sê); o persa “سه” (se), da mesma família iraniana, é ainda mais parecido.',
    transparent: true,
  },
  {
    word: 'نۆ',
    root_word: '*h₁néwn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'nove'], ['en', 'nine'], ['fa', 'نه (noh)']),
    evolution_note: 'A raiz *h₁néwn̥ deu “nove” em português (latim “novem”) e “نۆ” (no) no soranî, cognato do curmanji “neh” e do persa “نه” (noh).',
    transparent: true,
  },
  {
    word: 'دەست',
    root_word: '*ǵʰóstos',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['fa', 'دست (dast)'], ['sa', 'हस्त (hasta)']),
    evolution_note:
      'A raiz indo-europeia *ǵʰóstos deu “mão” no soranî (“دەست”, dest), no persa (“دست”, dast) e no sânscrito (“हस्त”, hasta) — mas não sobreviveu no latim: o português “mão” vem de outra raiz (“manus”). Parentes de ramos diferentes, sem semelhança para o ouvido brasileiro.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_CKB: [string, string][] = [
  ['چۆنی؟', 'Como você está?'],
  ['ناوی باوکت چییە؟', 'Qual é o nome do seu pai?'],
  ['پشیلەی تۆ چۆنە؟', 'Como é o seu gato?'],
  ['خانووی تۆ چۆنە؟', 'Como é a sua casa?'],
];

export const SHADOWING_CKB: [string, string][] = [
  ['سڵاو! چۆنی؟', 'Oi! Como vai?'],
  ['باش، سوپاس! تۆ؟', 'Bem, obrigado! E você?'],
  ['من نان دەخۆم.', 'Eu como o pão.'],
  ['قاوە ڕەشە.', 'O café é preto.'],
];
