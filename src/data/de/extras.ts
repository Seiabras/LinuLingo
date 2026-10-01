import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no alemão). */
export const COMMUNITY_DE: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Wie heißt du, woher kommst du und hast du Geschwister?',
    content: 'Hallo! Ich heiße Bruno und ich komme von Curitiba. Ich habe ein Bruder.',
    reference: 'Hallo! Ich heiße Bruno und ich komme aus Curitiba. Ich habe einen Bruder.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Was isst du zum Frühstück?',
    content: 'Ich esse brot mit käse und trinke kaffee.',
    reference: 'Ich esse Brot mit Käse und trinke Kaffee.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Wie ist dein Haus?',
    content: 'Mein Haus ist klein. Ich nicht habe eine Katze.',
    reference: 'Mein Haus ist klein. Ich habe keine Katze.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_DE: ScenarioSeed[] = [
  {
    id: 'de-s1',
    title: 'Ein Kaffee in Wien',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, eine Kollegin aus dem Deutschkurs',
    description: 'Anna, colega do curso de alemão, convida você para um café num café tradicional de Viena. É uma conversa entre colegas: use “du”.',
    turns: [
      {
        bot: 'Hallo! Was möchtest du trinken?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['Kaffee', 'Wasser', 'Milch'],
        suggestions: ['Einen Kaffee, bitte.', 'Ein Wasser, bitte.'],
      },
      {
        bot: 'Woher kommst du?',
        botTranslation: 'De onde você é?',
        keywords: ['ich komme aus'],
        suggestions: ['Ich komme aus São Paulo.', 'Ich komme aus Salvador.'],
      },
    ],
  },
];

/** Palavras do alemão com a origem e os parentes nas línguas irmãs. */
export const ETYMOLOGY_DE: EtymologySeed[] = [
  {
    word: 'Wasser',
    root_word: '*watōr',
    origin_language: 'Protogermânico',
    cognates: c(['en', 'water'], ['nl', 'water'], ['sv', 'vatten']),
    evolution_note: 'No alemão, o t germânico depois de vogal virou “ss” (a segunda mutação consonantal, que separou o alto-alemão das outras línguas germânicas): o inglês e o neerlandês ficaram com “water”, o alemão foi para “Wasser”.',
    transparent: false,
  },
  {
    word: 'Haus',
    root_word: '*hūsą',
    origin_language: 'Protogermânico',
    cognates: c(['en', 'house'], ['nl', 'huis'], ['sv', 'hus']),
    evolution_note: 'O u longo antigo virou o ditongo “au” no alemão (hūs → Haus), assim como virou “ou” no inglês (house).',
    transparent: false,
  },
  {
    word: 'Vater',
    root_word: '*fadēr',
    origin_language: 'Protogermânico',
    cognates: c(['en', 'father'], ['la', 'pater'], ['pt', 'pai, paterno']),
    evolution_note: 'O p indo-europeu virou f nas línguas germânicas (lei de Grimm): o latim “pater”, que deu “pai” e “paterno”, corresponde ao germânico “fadēr”, de onde vêm “Vater” (lido com f) e “father”.',
    transparent: false,
  },
  {
    word: 'Käse',
    root_word: 'caseus',
    origin_language: 'Latim',
    cognates: c(['pt', 'queijo'], ['es', 'queso'], ['en', 'cheese'], ['nl', 'kaas']),
    evolution_note: 'Os povos germânicos tomaram emprestada a palavra latina “caseus” (queijo) ainda na Antiguidade, junto com a técnica romana de fazer queijo. O mesmo “caseus” deu “queijo” em português.',
    transparent: false,
  },
  {
    word: 'Wein',
    root_word: 'vinum',
    origin_language: 'Latim',
    cognates: c(['pt', 'vinho'], ['it', 'vino'], ['en', 'wine'], ['nl', 'wijn']),
    evolution_note: 'O vinho chegou às terras germânicas com os romanos, e a palavra veio junto: o latim “vinum” deu “Wein” no alemão (o w alemão soa como o nosso v).',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_DE: [string, string][] = [
  ["Wie geht's dir heute?", 'Como você está hoje?'],
  ['Erzähl von deiner Familie.', 'Conte da sua família.'],
  ['Was isst und trinkst du gern?', 'O que você gosta de comer e de beber?'],
  ['Wie ist dein Haus?', 'Como é a sua casa?'],
];

export const SHADOWING_DE: [string, string][] = [
  ['Hallo! Ich heiße Ana.', 'Oi! Eu me chamo Ana.'],
  ['Gut, danke! Und dir?', 'Bem, obrigado! E você?'],
  ['Ich habe einen Bruder und eine Schwester.', 'Tenho um irmão e uma irmã.'],
  ['Ich weiß es nicht.', 'Eu não sei.'],
];
