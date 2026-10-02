import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no maltês). */
export const COMMUNITY_MT: CommunitySeed[] = [
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'Bonġu! Kif inti?',
    content: 'Bongiorno! Me chamo Lucas.',
    reference: 'Bonġu! Jisimni Lucas.',
  },
  {
    author_name: 'Marina 🇧🇷',
    prompt: 'Kif inti?',
    content: 'Gracias! Como estas?',
    reference: 'Grazzi! Kif inti?',
  },
  {
    author_name: 'Felipe 🇧🇷',
    prompt: 'Trid ilma?',
    content: 'Si, por favor, quero ilma.',
    reference: 'Iva, jekk jogħġbok. Rrid ilma.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_MT: ScenarioSeed[] = [
  {
    id: 'mt-s1',
    title: 'Kafè, jekk jogħġbok',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Marija, colega do curso de maltês',
    description: 'Marija oferece água e pão. É uma conversa informal entre colegas: use “int”.',
    turns: [
      {
        bot: 'Bonġu! Trid ilma?',
        botTranslation: 'Bom dia! Você quer água?',
        keywords: ['iva', 'le', 'ilma'],
        suggestions: ['Iva, rrid ilma, grazzi.', 'Le, grazzi.'],
      },
      {
        bot: 'Trid ħobż?',
        botTranslation: 'Você quer pão?',
        keywords: ['iva', 'le', 'ħobż'],
        suggestions: ['Iva, rrid ħobż, grazzi.', 'Le, grazzi.'],
      },
    ],
  },
];

/**
 * Palavras do maltês com a origem e os parentes nas línguas irmãs — escolhidas para mostrar como o
 * maltês fica bem no meio do caminho entre o árabe e a Sicília, às vezes de um jeito surpreendente.
 * Fontes: Wiktionary (en.wiktionary.org/wiki/dar, /tajjeb, /missier, /bon%C4%A1u, /qattus).
 */
export const ETYMOLOGY_MT: EtymologySeed[] = [
  {
    word: 'dar',
    root_word: 'دار (dār)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'دار']),
    evolution_note: 'Herdada diretamente do árabe dār (“casa”), sem passar pelo italiano — uma das palavras mais básicas do núcleo semítico do maltês, exatamente como seria esperado de uma língua descendente do árabe.',
    transparent: false,
  },
  {
    word: 'tajjeb',
    root_word: 'طيب (ṭayyib)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'طيب']),
    evolution_note: 'Do árabe ṭayyib (“bom, agradável”). O feminino tajba e o comparativo aħjar mostram que a palavra ainda segue os padrões de flexão semíticos, apesar da escrita 100% em alfabeto latino.',
    transparent: false,
  },
  {
    word: 'missier',
    root_word: 'misseri',
    origin_language: 'Siciliano antigo (via o occitano antigo meser)',
    cognates: c(['fr', 'monsieur'], ['it', 'messere']),
    evolution_note: 'Uma surpresa: “pai” parece a palavra de parentesco mais básica e semítica possível, mas o maltês importou “missier” do siciliano antigo “misseri” (parente do francês “monsieur”) e com ele substituiu a palavra semítica nativa “bu”. Já “ħu” (irmão) e “oħt” (irmã) continuam semíticos, herdados do árabe — nem todo parentesco no maltês tem a mesma origem.',
    transparent: false,
  },
  {
    word: 'bonġu',
    root_word: 'bonjour',
    origin_language: 'Francês',
    cognates: c(['fr', 'bonjour']),
    evolution_note: 'Parece uma versão encurtada do italiano “buongiorno”, mas “bonġu” foi emprestado do francês “bonjour” — um lembrete de que nem toda palavra europeia do maltês vem do italiano ou do siciliano.',
    transparent: true,
  },
  {
    word: 'qattus',
    root_word: 'cattus',
    origin_language: 'Latim (via línguas berberes e o árabe magrebino)',
    cognates: c(['pt', 'gato'], ['it', 'gatto']),
    evolution_note: 'Parece uma palavra puramente árabe, mas descende do latim cattus: viajou do latim para línguas berberes do norte da África, entrou no árabe magrebino falado ali (como o tunisino qaṭṭūs) e chegou ao maltês nessa forma. “Qattus” e o português “gato” são primos distantes pelo latim, apesar de soarem bem diferentes.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_MT: [string, string][] = [
  ['Kif inti?', 'Como você está?'],
  ['Trid kafè?', 'Você quer café?'],
  ["X'inhu dan?", 'O que é isto?'],
  ['Int, kif inti?', 'E você, como está?'],
];

export const SHADOWING_MT: [string, string][] = [
  ['Bonġu! Kif inti?', 'Bom dia! Como você está?'],
  ['Tajjeb, grazzi!', 'Bem, obrigado!'],
  ['Jisimni Ana.', 'Eu me chamo Ana.'],
  ['Rrid ilma, jekk jogħġbok.', 'Eu quero água, por favor.'],
];
