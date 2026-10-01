import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no hindi). */
export const COMMUNITY_HI: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'अपना नाम, शहर और परिवार बताओ।',
    content: 'नमस्ते, मैं हूँ ब्रूनो और मैं हूँ कूरीटिबा से। मेरे पास एक भाई है।',
    reference: 'नमस्ते, मेरा नाम ब्रूनो है, और मैं कूरीटिबा से हूँ। मेरा एक भाई है।',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'तुम सुबह क्या खाते हो?',
    content: 'मैं खाता हूँ रोटी और पनीर।',
    reference: 'मैं रोटी और पनीर खाता हूँ।',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'तुम्हारा घर कैसा है?',
    content: 'मेरा घर छोटी है।',
    reference: 'मेरा घर छोटा है।',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_HI: ScenarioSeed[] = [
  {
    id: 'hi-s1',
    title: 'चाय की दुकान पर',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'माया, हिंदी क्लास की सहपाठी',
    description: 'Maya convida você para tomar um chá numa barraca de chá (चाय की दुकान) em Déli. É uma conversa entre colegas: use “तुम”.',
    turns: [
      {
        bot: 'नमस्ते! तुम क्या पीना चाहते हो?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['चाय', 'पानी', 'कॉफ़ी'],
        suggestions: ['एक चाय, कृपया।', 'एक गिलास पानी, कृपया।'],
      },
      {
        bot: 'तुम कहाँ से हो?',
        botTranslation: 'De onde você é?',
        keywords: ['मैं … से हूँ'],
        suggestions: ['मैं साओ पाउलो से हूँ।', 'मैं साल्वाडोर से हूँ।'],
      },
    ],
  },
];

/** Palavras do hindi com a raiz indo-europeia e os parentes nas línguas irmãs. */
export const ETYMOLOGY_HI: EtymologySeed[] = [
  {
    word: 'माँ',
    root_word: '*méh₂tēr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'mãe, matriz'], ['en', 'mother'], ['ru', 'мать']),
    evolution_note: '“माँ” (mā̃) é a forma popular, evoluída pelo sânscrito e pelo prácrito, da mesma raiz indo-europeia de “mãe” em português e “mother” em inglês — uma palavra tão antiga que provavelmente nasceu do balbucio infantil “ma”. A forma mais formal e sânscrita, “माता” (mātā), vem da mesma raiz.',
    transparent: false,
  },
  {
    word: 'पिता',
    root_word: '*ph₂tḗr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'pai, pátrio'], ['en', 'father'], ['la', 'pater']),
    evolution_note: '“पिता” (pitā) vem direto do sânscrito “पितृ” (pitṛ), herdeiro fiel da mesma raiz indo-europeia do latim “pater” e do português “pai”: o hindi preservou o “p” inicial que o armênio, por exemplo, trocou por “h”.',
    transparent: false,
  },
  {
    word: 'नाम',
    root_word: '*h₁nómn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'nome'], ['en', 'name'], ['la', 'nomen']),
    evolution_note: 'A raiz indo-europeia de “nome” é bem reconhecível no hindi “नाम” (nām), no latim “nomen” e no português “nome”: o próprio Wiktionary chama “नाम” de cognato direto do inglês “name”.',
    transparent: true,
  },
  {
    word: 'दो',
    root_word: '*dwóh₁',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'dois, duplo'], ['en', 'two'], ['ru', 'два']),
    evolution_note: '“दो” (do) desceu do sânscrito “द्व” (dvá), que vem da mesma raiz indo-europeia de “dois” em português e “two” em inglês — um numeral tão básico que sobreviveu quase sem mudar em quase toda a família indo-europeia.',
    transparent: false,
  },
  {
    word: 'भाई',
    root_word: '*bʰréh₂tēr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['en', 'brother'], ['ru', 'брат'], ['pt', 'sem cognato popular; sobrevive em “frei”, do latim “frater”']),
    evolution_note: '“भाई” (bhāī) vem do sânscrito “भ्रातृ” (bhrā́tṛ), da mesma raiz indo-europeia do inglês “brother” e do russo “брат”. Em português, a palavra do dia a dia é “irmão” (de outra origem latina), mas a mesma raiz de “भाई” sobrevive em “frei” e “frade”, tomados do latim “frater” bem mais tarde.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HI: [string, string][] = [
  ['आज तुम कैसे हो?', 'Como você está hoje?'],
  ['अपने परिवार के बारे में बताओ।', 'Conte sobre a sua família.'],
  ['तुम्हें क्या खाना और पीना पसंद है?', 'O que você gosta de comer e beber?'],
  ['तुम्हारा घर कैसा है?', 'Como é a sua casa?'],
];

export const SHADOWING_HI: [string, string][] = [
  ['नमस्ते, मैं विनोद हूँ।', 'Oi, eu sou o Vinod.'],
  ['मैं ठीक हूँ, धन्यवाद। और तुम?', 'Eu estou bem, obrigado(a). E você?'],
  ['मेरा एक भाई है।', 'Eu tenho um irmão.'],
  ['मुझे चाय पसंद है।', 'Eu gosto de chá.'],
];
