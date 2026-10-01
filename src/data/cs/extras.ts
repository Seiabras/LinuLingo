import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no tcheco). */
export const COMMUNITY_CS: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Tvoje jméno, tvoje město a tvoje rodina.',
    content: 'Ahoj! Já jsem Bruno a já jsem z Curitiba. Já mám bratr.',
    reference: 'Ahoj! Jmenuji se Bruno a jsem z Curitiby. Mám bratra.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Co jíš k snídani?',
    content: 'Já jím chléb a sýr a piju káva.',
    reference: 'Jím chléb a sýr a piju kávu.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Jaký je tvůj dům?',
    content: 'Moje dům je malá.',
    reference: 'Můj dům je malý.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_CS: ScenarioSeed[] = [
  {
    id: 'cs-s1',
    title: 'V kavárně v Praze',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Tereza, spolužačka z kurzu češtiny',
    description: 'Tereza convida você para um café no centro de Praga. É uma conversa entre colegas: use “ty”.',
    turns: [
      {
        bot: 'Ahoj! Co si dáš?',
        botTranslation: 'Oi! O que você vai querer?',
        keywords: ['kávu', 'vodu', 'čaj'],
        suggestions: ['Kávu, prosím.', 'Vodu, prosím.'],
      },
      {
        bot: 'Odkud jsi?',
        botTranslation: 'De onde você é?',
        keywords: ['jsem z', 'jsem ze'],
        suggestions: ['Jsem ze São Paula.', 'Jsem z Curitiby.'],
      },
    ],
  },
];

/** Palavras do tcheco com a raiz e os parentes em outras línguas. */
export const ETYMOLOGY_CS: EtymologySeed[] = [
  {
    word: 'bratr',
    root_word: '*bratrъ',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'frater'], ['en', 'brother'], ['ru', 'брат'], ['pt', 'frade, fraterno']),
    evolution_note: 'A mesma palavra indo-europeia deu “frater” em latim (daí “fraterno” e “frade”) e “brother” em inglês. O tcheco guardou o grupo “tr” do fim, que o russo e o polonês perderam.',
    transparent: false,
  },
  {
    word: 'sestra',
    root_word: '*sestra',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'soror'], ['en', 'sister'], ['de', 'Schwester'], ['pt', 'sororidade']),
    evolution_note: 'Vem da palavra indo-europeia para “irmã”, a mesma do latim “soror” e do inglês “sister”. O português a guardou em palavras cultas, como “sororidade”.',
    transparent: false,
  },
  {
    word: 'voda',
    root_word: '*voda',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'вода'], ['en', 'water'], ['de', 'Wasser'], ['pt', 'hidro- (do grego hýdōr)']),
    evolution_note: 'Vem da mesma raiz indo-europeia do inglês “water” e do grego “hýdōr”, que o português conhece em “hidráulica” e “hidratar”.',
    transparent: false,
  },
  {
    word: 'dům',
    root_word: '*domъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'дом'], ['la', 'domus'], ['pt', 'doméstico']),
    evolution_note: 'Irmã do latim “domus” (casa), que o português guardou em “doméstico” e “domicílio”. O “ů” do tcheco vem de um “ó” longo antigo: *dóm → dům.',
    transparent: false,
  },
  {
    word: 'tři',
    root_word: '*tri',
    origin_language: 'Protoeslavo',
    cognates: c(['pt', 'três'], ['la', 'tres'], ['ru', 'три'], ['en', 'three']),
    evolution_note: 'Os números baixos são dos parentescos mais fáceis de ver: “tři”, “três” e “three” vêm todos do indo-europeu. No tcheco, o r diante de i virou o famoso “ř”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_CS: [string, string][] = [
  ['Jak se dnes máš?', 'Como você está hoje?'],
  ['Povídej o své rodině.', 'Conte da sua família.'],
  ['Co rád jíš a piješ?', 'O que você gosta de comer e de beber?'],
  ['Jaký je tvůj dům?', 'Como é a sua casa?'],
];

export const SHADOWING_CS: [string, string][] = [
  ['Ahoj! Jmenuji se Ana.', 'Oi! Eu me chamo Ana.'],
  ['Dobře, děkuji! A ty?', 'Bem, obrigado! E você?'],
  ['Mám bratra a sestru.', 'Tenho um irmão e uma irmã.'],
  ['Nevím.', 'Eu não sei.'],
];
