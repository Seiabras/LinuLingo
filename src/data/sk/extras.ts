import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no eslovaco). */
export const COMMUNITY_SK: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Tvoje meno, tvoje mesto a tvoja rodina.',
    content: 'Ahoj! Ja som Bruno a ja som z Curitiba. Ja mám brat.',
    reference: 'Ahoj! Volám sa Bruno a som z Curitiby. Mám brata.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Čo ješ na raňajky?',
    content: 'Ja jem chlieb a syr a pijem káva.',
    reference: 'Jem chlieb a syr a pijem kávu.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Aký je tvoj dom?',
    content: 'Moja dom je malá.',
    reference: 'Môj dom je malý.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_SK: ScenarioSeed[] = [
  {
    id: 'sk-s1',
    title: 'V kaviarni v Bratislave',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Zuzka, spolužiačka z kurzu slovenčiny',
    description: 'Zuzka convida você para um café no centro de Bratislava. É uma conversa entre colegas: use «ty».',
    turns: [
      {
        bot: 'Ahoj! Čo si dáš?',
        botTranslation: 'Oi! O que você vai querer?',
        keywords: ['kávu', 'vodu', 'čaj'],
        suggestions: ['Kávu, prosím.', 'Vodu, prosím.'],
      },
      {
        bot: 'Odkiaľ si?',
        botTranslation: 'De onde você é?',
        keywords: ['som z', 'som zo'],
        suggestions: ['Som zo São Paula.', 'Som z Curitiby.'],
      },
    ],
  },
];

/** Palavras do eslovaco com a raiz e os parentes em outras línguas. */
export const ETYMOLOGY_SK: EtymologySeed[] = [
  {
    word: 'brat',
    root_word: '*bratrъ',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'frater'], ['en', 'brother'], ['cs', 'bratr'], ['pt', 'frade, fraterno']),
    evolution_note: 'A mesma palavra indo-europeia deu «frater» em latim (daí «fraterno» e «frade») e «brother» em inglês. O eslovaco ficou com a forma curta «brat», enquanto o tcheco vizinho diz «bratr».',
    transparent: false,
  },
  {
    word: 'sestra',
    root_word: '*sestra',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'soror'], ['en', 'sister'], ['de', 'Schwester'], ['pt', 'sororidade']),
    evolution_note: 'Vem da palavra indo-europeia para «irmã», a mesma do latim «soror» e do inglês «sister». O português a guardou em palavras cultas, como «sororidade».',
    transparent: false,
  },
  {
    word: 'voda',
    root_word: '*voda',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'вода'], ['en', 'water'], ['de', 'Wasser'], ['pt', 'hidro- (do grego hýdōr)']),
    evolution_note: 'Vem da mesma raiz indo-europeia do inglês «water» e do grego «hýdōr», que o português conhece em «hidráulica» e «hidratar».',
    transparent: false,
  },
  {
    word: 'dom',
    root_word: '*domъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'дом'], ['la', 'domus'], ['pt', 'doméstico']),
    evolution_note: 'Irmã do latim «domus» (casa): o português guardou essa raiz em «doméstico», «domicílio» e «dono».',
    transparent: false,
  },
  {
    word: 'tri',
    root_word: '*tri',
    origin_language: 'Protoeslavo',
    cognates: c(['pt', 'três'], ['la', 'tres'], ['ru', 'три'], ['en', 'three']),
    evolution_note: 'Os números baixos são dos parentescos mais fáceis de ver: «tri», «três» e «three» vêm todos do indo-europeu.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_SK: [string, string][] = [
  ['Ako sa dnes máš?', 'Como você está hoje?'],
  ['Porozprávaj o svojej rodine.', 'Conte da sua família.'],
  ['Čo rád ješ a piješ?', 'O que você gosta de comer e de beber?'],
  ['Aký je tvoj dom?', 'Como é a sua casa?'],
];

export const SHADOWING_SK: [string, string][] = [
  ['Ahoj! Volám sa Ana.', 'Oi! Eu me chamo Ana.'],
  ['Dobre, ďakujem! A ty?', 'Bem, obrigado! E você?'],
  ['Mám brata a sestru.', 'Tenho um irmão e uma irmã.'],
  ['Neviem.', 'Eu não sei.'],
];
