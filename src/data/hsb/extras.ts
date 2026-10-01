import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no alto-sorábio). */
export const COMMUNITY_HSB: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Maš bratra abo sotru?',
    content: 'Mam dwě bratraj.',
    reference: 'Mam dwaj bratraj.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Što jěš rano?',
    content: 'Ja jěm chlěb a piju kofej.',
    reference: 'Ja jěm chlěb a piju kofej.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Kak je twój dom?',
    content: 'Mój dom je mała.',
    reference: 'Mój dom je mały.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_HSB: ScenarioSeed[] = [
  {
    id: 'hsb-s1',
    title: 'Kofej w Budyšinje',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Hanka, kolegowka z kursa',
    description: 'Hanka convida você para um café no centro de Bautzen. É uma conversa entre colegas: use “ty”.',
    turns: [
      {
        bot: 'Witaj! Što chceš pić?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['kofej', 'woda', 'mloko'],
        suggestions: ['Kofej, prošu.', 'Wodu, prošu.'],
      },
      {
        bot: 'Z hdźe sy?',
        botTranslation: 'De onde você é?',
        keywords: ['ja sym z'],
        suggestions: ['Ja sym z Brazilskeje.', 'Ja sym z São Paula.'],
      },
    ],
  },
];

/** Palavras do alto-sorábio com a raiz eslava comum e os parentes nas línguas irmãs. */
export const ETYMOLOGY_HSB: EtymologySeed[] = [
  {
    word: 'dom',
    root_word: 'domъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'дом'], ['pl', 'dom'], ['cs', 'dům']),
    evolution_note: 'A mesma raiz eslava de “dom” aparece quase sem mudança em russo, polonês e tcheco — uma das palavras mais estáveis entre as línguas eslavas.',
    transparent: false,
  },
  {
    word: 'woda',
    root_word: 'voda',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'вода'], ['pl', 'woda'], ['cs', 'voda'], ['uk', 'вода']),
    evolution_note: 'A mesma raiz protoeslava de “água” em quase todas as línguas eslavas; o alto-sorábio só trocou o “v” inicial por “w”, como fez o polonês.',
    transparent: false,
  },
  {
    word: 'chlěb',
    root_word: 'xlěbъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'хлеб'], ['pl', 'chleb'], ['cs', 'chléb'], ['uk', 'хліб']),
    evolution_note: 'Uma palavra eslava antiga para “pão”, talvez emprestada de uma língua germânica muito antiga (comparável ao gótico “hlaifs”) antes mesmo do protoeslavo se dividir.',
    transparent: false,
  },
  {
    word: 'mać',
    root_word: 'mati',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'мать'], ['pl', 'mać (arcaico; hoje matka)'], ['pt', 'mãe'], ['la', 'mater']),
    evolution_note: 'A mesma raiz indo-europeia de “mãe” em português e “mater” em latim — uma das palavras mais antigas e estáveis de toda a família indo-europeia.',
    transparent: true,
  },
  {
    word: 'sotra',
    root_word: 'sestra',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'сестра'], ['pl', 'siostra'], ['cs', 'sestra'], ['pt', 'irmã (de outra raiz, germanus)']),
    evolution_note: 'A mesma raiz indo-europeia do latim “soror” e do inglês “sister” — o português trocou essa raiz antiga por “irmã”, de “germanus” (de sangue).',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HSB: [string, string][] = [
  ['Kak so tebi dźe dźensa?', 'Como você vai hoje?'],
  ['Powědaj wo swojej swójbje.', 'Conte sobre a sua família.'],
  ['Što rady jěš a piješ?', 'O que você gosta de comer e beber?'],
  ['Kak wupada twój dom?', 'Como é a sua casa?'],
];

export const SHADOWING_HSB: [string, string][] = [
  ['Witaj! Moje mjeno je Ana.', 'Oi! Meu nome é Ana.'],
  ['Mi dźe dobre, dźakuju! A tebi?', 'Vou bem, obrigado! E você?'],
  ['Mam dwaj bratraj a jednu sotru.', 'Tenho dois irmãos e uma irmã.'],
  ['Ja njewěm.', 'Eu não sei.'],
];
