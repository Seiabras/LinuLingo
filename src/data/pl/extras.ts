import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no polonês). */
export const COMMUNITY_PL: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Twoje imię, twoje miasto i twoja rodzina.',
    content: 'Cześć! Ja jestem Bruno i ja jestem z Curitiba. Ja mam brat.',
    reference: 'Cześć! Mam na imię Bruno i jestem z Kurytyby. Mam brata.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Co jesz na śniadanie?',
    content: 'Ja jem chleb i ser i piję kawa.',
    reference: 'Jem chleb i ser i piję kawę.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Jaki jest twój dom?',
    content: 'Moja dom jest mała.',
    reference: 'Mój dom jest mały.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_PL: ScenarioSeed[] = [
  {
    id: 'pl-s1',
    title: 'W kawiarni w Warszawie',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Kasia, koleżanka z kursu polskiego',
    description: 'Kasia convida você para um café no centro de Varsóvia. É uma conversa entre colegas: use “ty”.',
    turns: [
      {
        bot: 'Cześć! Co chcesz pić?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['kawę', 'wodę', 'mleko', 'kawa', 'woda'],
        suggestions: ['Kawę, proszę.', 'Wodę, proszę.'],
      },
      {
        bot: 'Skąd jesteś?',
        botTranslation: 'De onde você é?',
        keywords: ['jestem z'],
        suggestions: ['Jestem z São Paulo.', 'Jestem z Rio de Janeiro.'],
      },
    ],
  },
];

/** Palavras do polonês com a raiz e os parentes em outras línguas. */
export const ETYMOLOGY_PL: EtymologySeed[] = [
  {
    word: 'brat',
    root_word: '*bratrъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'брат'], ['en', 'brother'], ['la', 'frater'], ['pt', 'frade, fraterno']),
    evolution_note: 'A mesma palavra indo-europeia deu “frater” em latim (daí “fraterno” e “frade”) e “brother” em inglês. Já no protoeslavo conviviam as formas *bratrъ e *bratъ; o polonês ficou com a mais curta.',
    transparent: false,
  },
  {
    word: 'woda',
    root_word: '*voda',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'вода'], ['en', 'water'], ['de', 'Wasser'], ['pt', 'hidro- (do grego hýdōr)']),
    evolution_note: 'Vem da mesma raiz indo-europeia do inglês “water” e do grego “hýdōr”, que o português conhece em “hidráulica” e “hidratar”.',
    transparent: false,
  },
  {
    word: 'dom',
    root_word: '*domъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'дом'], ['la', 'domus'], ['pt', 'doméstico']),
    evolution_note: 'Irmã do latim “domus” (casa): o português guardou essa raiz em “doméstico”, “domicílio” e “dono”.',
    transparent: false,
  },
  {
    word: 'trzy',
    root_word: '*tri',
    origin_language: 'Protoeslavo',
    cognates: c(['pt', 'três'], ['la', 'tres'], ['ru', 'три'], ['en', 'three']),
    evolution_note: 'Os números baixos são dos parentescos mais fáceis de ver: “trzy”, “três” e “three” vêm todos do indo-europeu. No polonês, o r diante de i virou o som “rz”.',
    transparent: true,
  },
  {
    word: 'kawa',
    root_word: 'kahve',
    origin_language: 'Turco',
    cognates: c(['pt', 'café'], ['tr', 'kahve'], ['ar', 'qahwa']),
    evolution_note: 'O café chegou à Polônia pelo contato com o Império Otomano, e a palavra veio do turco “kahve”, que por sua vez vem do árabe “qahwa”. O português recebeu a mesma palavra por outro caminho, via italiano ou francês.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_PL: [string, string][] = [
  ['Jak się dzisiaj masz?', 'Como você está hoje?'],
  ['Opowiedz o swojej rodzinie.', 'Conte da sua família.'],
  ['Co lubisz jeść i pić?', 'O que você gosta de comer e de beber?'],
  ['Jaki jest twój dom?', 'Como é a sua casa?'],
];

export const SHADOWING_PL: [string, string][] = [
  ['Cześć! Mam na imię Ana.', 'Oi! Meu nome é Ana.'],
  ['Dobrze, dziękuję! A ty?', 'Bem, obrigado! E você?'],
  ['Mam brata i siostrę.', 'Tenho um irmão e uma irmã.'],
  ['Nie wiem.', 'Eu não sei.'],
];
