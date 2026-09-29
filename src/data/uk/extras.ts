import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no ucraniano). */
export const COMMUNITY_UK: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Твоє́ ім’я́, твоє́ мі́сто і твоя́ сім’я́.',
    content: 'Привіт! Я є Бруно і я є з Куритиба. Я маю брат.',
    reference: 'Приві́т! Мене́ зву́ть Бру́но, я з Курити́би. Я ма́ю бра́та.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Що ти їси́ на сніда́нок?',
    content: 'Я їм хліб і сир і п’ю кава.',
    reference: 'Я їм хліб і сир і п’ю ка́ву.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Яки́й твій дім?',
    content: 'Моя дім мала.',
    reference: 'Мій дім мали́й.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_UK: ScenarioSeed[] = [
  {
    id: 'uk-s1',
    title: 'У кав’я́рні в Ки́єві',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Окса́на, по́друга з ку́рсу украї́нської мо́ви',
    description: 'Oksana convida você para um café no centro de Kiev (Kyiv). É uma conversa entre amigas e amigos: use «ти».',
    turns: [
      {
        bot: 'Приві́т! Що ти бу́деш пи́ти?',
        botTranslation: 'Oi! O que você vai beber?',
        keywords: ['ка́ву', 'во́ду', 'чай'],
        suggestions: ['Ка́ву, будь ла́ска.', 'Чай, будь ла́ска.'],
      },
      {
        bot: 'Зві́дки ти?',
        botTranslation: 'De onde você é?',
        keywords: ['я з'],
        suggestions: ['Я з Курити́би.', 'Я з Рі́о-де-Жане́йро.'],
      },
    ],
  },
];

/** Palavras do ucraniano com a raiz e os parentes em outras línguas. */
export const ETYMOLOGY_UK: EtymologySeed[] = [
  {
    word: 'брат',
    root_word: '*bratrъ',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'frater'], ['en', 'brother'], ['pl', 'brat'], ['pt', 'frade, fraterno']),
    evolution_note: 'A mesma palavra indo-europeia deu «frater» em latim (daí «fraterno» e «frade») e «brother» em inglês.',
    transparent: false,
  },
  {
    word: 'сестра́',
    root_word: '*sestra',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'soror'], ['en', 'sister'], ['de', 'Schwester'], ['pt', 'sororidade']),
    evolution_note: 'Vem da palavra indo-europeia para «irmã», a mesma do latim «soror» e do inglês «sister». O português a guardou em palavras cultas, como «sororidade».',
    transparent: false,
  },
  {
    word: 'вода́',
    root_word: '*voda',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'вода'], ['en', 'water'], ['de', 'Wasser'], ['pt', 'hidro- (do grego hýdōr)']),
    evolution_note: 'Vem da mesma raiz indo-europeia do inglês «water» e do grego «hýdōr», que o português conhece em «hidráulica» e «hidratar».',
    transparent: false,
  },
  {
    word: 'дім',
    root_word: '*domъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'дом'], ['la', 'domus'], ['pt', 'doméstico']),
    evolution_note: 'Irmã do latim «domus» (casa), que o português guardou em «doméstico» e «domicílio». Um traço típico do ucraniano: o «o» antigo virou «і» em sílaba fechada, mas volta quando a sílaba se abre — дім, до́му (de casa); кіт, коти́ (gatos).',
    transparent: false,
  },
  {
    word: 'три',
    root_word: '*tri',
    origin_language: 'Protoeslavo',
    cognates: c(['pt', 'três'], ['la', 'tres'], ['ru', 'три'], ['en', 'three']),
    evolution_note: 'Os números baixos são dos parentescos mais fáceis de ver: «три», «três» e «three» vêm todos do indo-europeu.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_UK: [string, string][] = [
  ['Як ти сього́дні?', 'Como você está hoje?'],
  ['Розкажи́ про свою́ сім’ю́.', 'Conte da sua família.'],
  ['Що ти лю́биш ї́сти і пи́ти?', 'O que você gosta de comer e de beber?'],
  ['Яки́й твій дім?', 'Como é a sua casa?'],
];

export const SHADOWING_UK: [string, string][] = [
  ['Приві́т! Мене́ зву́ть А́на.', 'Oi! Eu me chamo Ana.'],
  ['До́бре, дя́кую! А в те́бе?', 'Bem, obrigado! E você?'],
  ['У ме́не є брат і сестра́.', 'Tenho um irmão e uma irmã.'],
  ['Я не зна́ю.', 'Eu não sei.'],
];
