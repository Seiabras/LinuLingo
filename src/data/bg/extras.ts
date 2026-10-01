import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no búlgaro). */
export const COMMUNITY_BG: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'И́мето ти, гра́дът ти и семе́йството ти.',
    content: 'Здравей! Аз се казвам Бруно и съм от Куритиба. Аз имам едно брат.',
    reference: 'Здраве́й! Ка́звам се Бру́но и съм от Курити́ба. И́мам брат.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Какво́ яде́ш за заку́ска?',
    content: 'Аз ядя хляб и сирене и пия кафето.',
    reference: 'Ям хляб и си́рене и пи́я кафе́.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Каква́ е къ́щата ти?',
    content: 'Моята къща е малък.',
    reference: 'Къ́щата ми е ма́лка.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_BG: ScenarioSeed[] = [
  {
    id: 'bg-s1',
    title: 'В кафе́не в Со́фия',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Мари́я, прия́телка от ку́рса по бъ́лгарски',
    description: 'Maria convida você para um café no centro de Sófia. É uma conversa entre amigos: use “ти”.',
    turns: [
      {
        bot: 'Здраве́й! Какво́ ще пи́еш?',
        botTranslation: 'Oi! O que você vai beber?',
        keywords: ['кафе́', 'вода́', 'чай'],
        suggestions: ['Едно́ кафе́, мо́ля.', 'Вода́, мо́ля.'],
      },
      {
        bot: 'Откъде́ си?',
        botTranslation: 'De onde você é?',
        keywords: ['от'],
        suggestions: ['Аз съм от Са́о Па́уло.', 'Аз съм от Курити́ба.'],
      },
    ],
  },
];

/** Palavras do búlgaro com a raiz e os parentes em outras línguas. */
export const ETYMOLOGY_BG: EtymologySeed[] = [
  {
    word: 'брат',
    root_word: '*bratrъ',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'frater'], ['en', 'brother'], ['ru', 'брат'], ['pt', 'frade, fraterno']),
    evolution_note: 'A mesma palavra indo-europeia deu “frater” em latim (daí “fraterno” e “frade”) e “brother” em inglês.',
    transparent: false,
  },
  {
    word: 'сестра́',
    root_word: '*sestra',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'soror'], ['en', 'sister'], ['de', 'Schwester'], ['pt', 'sororidade']),
    evolution_note: 'Vem da palavra indo-europeia para “irmã”, a mesma do latim “soror” e do inglês “sister”. O português a guardou em palavras cultas, como “sororidade”.',
    transparent: false,
  },
  {
    word: 'вода́',
    root_word: '*voda',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'вода'], ['en', 'water'], ['de', 'Wasser'], ['pt', 'hidro- (do grego hýdōr)']),
    evolution_note: 'Vem da mesma raiz indo-europeia do inglês “water” e do grego “hýdōr”, que o português conhece em “hidráulica” e “hidratar”.',
    transparent: false,
  },
  {
    word: 'три',
    root_word: '*tri',
    origin_language: 'Protoeslavo',
    cognates: c(['pt', 'três'], ['la', 'tres'], ['ru', 'три'], ['en', 'three']),
    evolution_note: 'Os números baixos são dos parentescos mais fáceis de ver: “три”, “três” e “three” vêm todos do indo-europeu.',
    transparent: true,
  },
  {
    word: 'кафе́',
    root_word: 'kahve',
    origin_language: 'Turco',
    cognates: c(['pt', 'café'], ['tr', 'kahve'], ['ar', 'qahwa']),
    evolution_note: 'O búlgaro recebeu muitas palavras do turco durante os séculos de domínio otomano nos Bálcãs, e “кафе́” é uma delas. A origem mais antiga é o árabe “qahwa”, a mesma do português “café”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_BG: [string, string][] = [
  ['Как си днес?', 'Como você está hoje?'],
  ['Разка́жи за семе́йството си.', 'Conte da sua família.'],
  ['Какво́ харе́сваш да яде́ш и да пи́еш?', 'O que você gosta de comer e de beber?'],
  ['Каква́ е къ́щата ти?', 'Como é a sua casa?'],
];

export const SHADOWING_BG: [string, string][] = [
  ['Здраве́й! Ка́звам се А́на.', 'Oi! Eu me chamo Ana.'],
  ['Добре́, благодаря́! А ти?', 'Bem, obrigado! E você?'],
  ['И́мам брат и сестра́.', 'Tenho um irmão e uma irmã.'],
  ['Не зна́я.', 'Eu não sei.'],
];
