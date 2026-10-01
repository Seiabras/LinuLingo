import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no baixo-alemão). */
export const COMMUNITY_NDS: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Dien Naam, dien Stadt un dien Familie.',
    content: 'Moin! Ik heten Bruno un ik bün ut Curitiba. Ik heff een broder.',
    reference: 'Moin! Ik heet Bruno un ik bün ut Curitiba. Ik heff een Broder.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Wat eetst du an’n Morgen?',
    content: 'Ik eet brood un käse.',
    reference: 'Ik eet Brood un Kees.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Woans is dien Huus?',
    content: 'Mien Huus is lütten.',
    reference: 'Mien Huus is lütt.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_NDS: ScenarioSeed[] = [
  {
    id: 'nds-s1',
    title: 'Een Koffee in Hamborg',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, een Fründin vun’t Plattdüütsch-Kurs',
    description: 'Anna convida você para um café perto do porto de Hamburgo. É uma conversa entre amigos: use “du”.',
    turns: [
      {
        bot: 'Moin! Wat wullt du drinken?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['Koffee', 'Water', 'Melk'],
        suggestions: ['Een Koffee, bidd.', 'Een Glas Water, bidd.'],
      },
      {
        bot: 'Woneem kümmst du vun af?',
        botTranslation: 'De onde você é?',
        keywords: ['ik bün ut'],
        suggestions: ['Ik bün ut São Paulo.', 'Ik bün ut Salvador.'],
      },
    ],
  },
];

/** Palavras do baixo-alemão com a raiz germânica e os parentes nas línguas irmãs. */
export const ETYMOLOGY_NDS: EtymologySeed[] = [
  {
    word: 'Water',
    root_word: '*watar',
    origin_language: 'Proto-germânico',
    cognates: c(['en', 'water'], ['nl', 'water'], ['de', 'Wasser']),
    evolution_note: 'O baixo-alemão não passou pela "segunda mutação consonantal" que mudou o alto-alemão: por isso “Water” fica igual ao inglês e ao neerlandês, enquanto o alto-alemão trocou o “t” por “ss” em “Wasser”.',
    transparent: true,
  },
  {
    word: 'Brood',
    root_word: '*braudą',
    origin_language: 'Proto-germânico',
    cognates: c(['en', 'bread'], ['nl', 'brood'], ['de', 'Brot']),
    evolution_note: 'A mesma raiz germânica para “pão” aparece em todas as línguas germânicas; o baixo-alemão ficou mais perto do neerlandês “brood” do que do alemão “Brot”.',
    transparent: true,
  },
  {
    word: 'Hund',
    root_word: '*hundas',
    origin_language: 'Proto-germânico',
    cognates: c(['en', 'hound'], ['nl', 'hond'], ['de', 'Hund']),
    evolution_note: 'O inglês moderno usa “dog” no dia a dia, mas guardou “hound” (cão de caça) da mesma raiz germânica que deu “Hund” no baixo e no alto-alemão.',
    transparent: false,
  },
  {
    word: 'Huus',
    root_word: '*hūsą',
    origin_language: 'Proto-germânico',
    cognates: c(['en', 'house'], ['nl', 'huis'], ['de', 'Haus']),
    evolution_note: 'A vogal longa “uu” do baixo-alemão corresponde ao “ou”/“ui” do inglês e do neerlandês, e ao “au” do alto-alemão: todas vêm do mesmo “ū” germânico longo.',
    transparent: true,
  },
  {
    word: 'Broder',
    root_word: '*brōþēr',
    origin_language: 'Proto-germânico',
    cognates: c(['en', 'brother'], ['nl', 'broer'], ['pt', 'frade, fraterno']),
    evolution_note: 'O germânico guardou a palavra indo-europeia para “irmão” quase intacta; o português preferiu “irmão” (de “germanus”) e deixou essa raiz só em palavras cultas como “frade” e “fraterno”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_NDS: [string, string][] = [
  ['Wo geiht’t di vundaag?', 'Como você está hoje?'],
  ['Vertell vun dien Familie.', 'Conte da sua família.'],
  ['Wat eetst un drinkst du geern?', 'O que você gosta de comer e beber?'],
  ['Woans is dien Huus?', 'Como é a sua casa?'],
];

export const SHADOWING_NDS: [string, string][] = [
  ['Moin! Ik heet Anna.', 'Oi! Eu me chamo Anna.'],
  ['Mi geiht dat good, dankeschöön!', 'Vou bem, obrigado!'],
  ['Ik heff een Broder un een Swester.', 'Tenho um irmão e uma irmã.'],
  ['Ik weet dat nich.', 'Eu não sei.'],
];
