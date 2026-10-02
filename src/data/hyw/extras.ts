import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção — erros típicos de quem já estudou o armênio oriental. */
export const COMMUNITY_HYW: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ասա անունդ, քաղաքդ եւ ընտանիքդ:',
    content: 'Բարև, ես եմ Բրունօ եւ ես Կուրիտիպայէն եմ: Ես ունիմ մէկ եղբայր:',
    reference: 'Բարև, անունս Պրունօ է, եւ ես Կուրիտիպայէն եմ: Ես մէկ եղբայր ունիմ:',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ի՞նչ կ՚ուտես առտուն:',
    content: 'Ես գնամ ուտեմ հաց եւ պանիր:',
    reference: 'Ես հաց եւ պանիր կ՚ուտեմ:',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ինչպիսի՞ն է տունդ:',
    content: 'Ես արդէն սորվեցայ հայերէն. “Նա Երևանից է” — ատիկա ճիշդ է, չէ՞:',
    reference: 'Ոչ հարկաւ. ատիկա արևելահայերէն է (“նա Երևանից է”). արևմտահայերէն “ան Երևանէն է” կ՚ըլլայ — նշմարէ “ան”-ը “նա”-ին տեղ, եւ “-էն” վերջաւորութիւնը “-ից”-ին տեղ:',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_HYW: ScenarioSeed[] = [
  {
    id: 'hyw-s1',
    title: 'Սրճարանը Պէյրութի մէջ',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Անի, դասընկերուհի հայերէնի դասընթացէն',
    description: 'Ani convida você para tomar um café no centro de Beirute. É uma conversa entre colegas: use “դուն”.',
    turns: [
      {
        bot: 'Բարև: Ի՞նչ կ՚ուզես խմել:',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['սուրճ', 'ջուր', 'թէյ'],
        suggestions: ['Մէկ սուրճ, շնորհակալութիւն:', 'Մէկ բաժակ ջուր, շնորհակալութիւն:'],
      },
      {
        bot: 'Ուրկէ՞ ես դուն:',
        botTranslation: 'De onde você é?',
        keywords: ['ես … եմ'],
        suggestions: ['Ես Սան Պաուլուէն եմ:', 'Ես Սալվատորէն եմ:'],
      },
    ],
  },
];

/**
 * Palavras do armênio ocidental com a raiz indo-europeia e os parentes nas línguas irmãs. Só
 * palavras que estão em vocabulario.ts — raízes confirmadas no Wikcionário em inglês, uma
 * entrada por palavra.
 */
export const ETYMOLOGY_HYW: EtymologySeed[] = [
  {
    word: 'մայր',
    root_word: '*méh₂tēr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'mãe, matriz'], ['en', 'mother'], ['ru', 'мать']),
    evolution_note: 'A mesma raiz indo-europeia de “mãe” aparece no armênio “մայր” (mayr — pronúncia igual no ocidental e no oriental, já que nenhuma das letras participa da troca de sonoridade), no português “mãe” (e em “matriz”) e no russo “мать”: todas vêm de uma palavra muito antiga, ligada ao balbucio infantil “ma”.',
    transparent: false,
  },
  {
    word: 'հայր',
    root_word: '*ph₂tḗr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'pai, pátrio'], ['en', 'father'], ['la', 'pater']),
    evolution_note: 'O armênio trocou o “p” indo-europeu original por “h” no início da palavra — compare o latim “pater” com o armênio “հայր” (hayr, igual nos dois padrões). O português “pai” vem da mesma raiz, sem essa troca.',
    transparent: false,
  },
  {
    word: 'անուն',
    root_word: '*h₁nómn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'nome'], ['en', 'name'], ['la', 'nomen']),
    evolution_note: 'A raiz indo-europeia de “nome” é reconhecível no armênio “անուն” (anoun, igual nos dois padrões), no latim “nomen” e no português “nome”: o som inicial mudou, mas o miolo da palavra se manteve.',
    transparent: true,
  },
  {
    word: 'տուն',
    root_word: '*dṓm',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'doméstico, domicílio'], ['la', 'domus']),
    evolution_note: 'O armênio “տուն” (no ocidental soa “doun”, com a surda simples virando sonora — ver hyw-g2) vem da mesma raiz indo-europeia do latim “domus” (casa), que deu “doméstico” e “domicílio” em português. É um cognato escondido: a forma mudou bastante, mas a raiz é a mesma.',
    transparent: false,
  },
  {
    word: 'ջուր',
    root_word: '*yuHr-',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['lt', 'jūra (mar)'], ['pt', 'sem cognato direto confirmado']),
    evolution_note: '“Ջուր” (água; no ocidental soa “tchour”, com a sonora virando aspirada — ver hyw-g2) não vem da mesma raiz de “água” em português nem de “water” em inglês: a raiz indo-europeia reconstruída, “*yuHr-”, aparece também no lituano “jūra” (mar). Comparações mais antigas com o sânscrito e o persa para “água”/“chuva” foram descartadas por linguistas mais recentes — um lembrete de que nem toda semelhança de sentido vem da mesma raiz.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HYW: [string, string][] = [
  ['Ի՞նչպէս ես այսօր:', 'Como você está hoje?'],
  ['Պատմէ քու ընտանիքիդ մասին:', 'Conte sobre a sua família.'],
  ['Ի՞նչ կը սիրես ուտել եւ խմել:', 'O que você gosta de comer e beber?'],
  ['Ինչպիսի՞ն է տունդ:', 'Como é a sua casa?'],
];

export const SHADOWING_HYW: [string, string][] = [
  ['Բարև, անունս Անի է:', 'Oi, meu nome é Ani.'],
  ['Լաւ եմ, շնորհակալութիւն: Իսկ դուն՞:', 'Vou bem, obrigado(a)! E você?'],
  ['Ես մէկ եղբայր ունիմ:', 'Eu tenho um irmão.'],
  ['Ես չեմ գիտեր:', 'Eu não sei.'],
];
