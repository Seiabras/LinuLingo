import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no persa). */
export const COMMUNITY_FA: CommunitySeed[] = [
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'نامِ شما چیست؟',
    content: 'من هستم خوب.',
    reference: 'من خوب هستم.',
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'برادرِ شما چطور است؟',
    content: 'برادرِ من بزرگ.',
    reference: 'برادرِ من بزرگ است.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'شما از کجا هستید؟',
    content: 'تو از کجا هستید؟',
    reference: 'شما از کجا هستید؟',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_FA: ScenarioSeed[] = [
  {
    id: 'fa-s1',
    title: 'یک چای‌خانه در تهران',
    emoji: '☕',
    cefr: 'A1',
    register: 'formal',
    persona: 'مریم، کارمندِ یک چای‌خانه در تهران',
    description: 'Maryam atende numa chaykhâne (casa de chá) em Teerã. Use “شما” (formal).',
    turns: [
      {
        bot: 'سلام! چه می‌خواهید؟',
        botTranslation: 'Oi! O que você quer?',
        keywords: ['چای', 'آب'],
        suggestions: ['یک چای، لطفاً.', 'یک آب، لطفاً.'],
      },
      {
        bot: 'شما از کجا هستید؟',
        botTranslation: 'De onde você é?',
        keywords: ['من از'],
        suggestions: ['من از برزیل هستم.'],
      },
    ],
  },
];

/**
 * Palavras do persa com a raiz indo-europeia e os parentes nas línguas irmãs, mais palavras que o
 * persa emprestou a outras línguas (inclusive ao português). Fontes (Wiktionary, entradas em persa):
 * نام ‹https://en.wiktionary.org/wiki/نام›, مادر ‹https://en.wiktionary.org/wiki/مادر›,
 * پدر ‹https://en.wiktionary.org/wiki/پدر›, بازار ‹https://en.wiktionary.org/wiki/بازار›,
 * شاه ‹https://en.wiktionary.org/wiki/شاه› e xeque-mate ‹https://en.wiktionary.org/wiki/xeque-mate›.
 */
export const ETYMOLOGY_FA: EtymologySeed[] = [
  {
    word: 'نام',
    root_word: '*h₁nómn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'nome'], ['en', 'name'], ['el', 'όνομα'], ['hi', 'नाम (nām)'], ['sa', 'नामन् (nā́man)']),
    evolution_note:
      'A mesma raiz indo-europeia de “nome” chegou ao persa como “نام” (nâm) e ao híndi como “नाम” (nām) — primos diretos, porque persa e híndi são parentes dentro do ramo indo-iraniano. O parentesco com o português é mais distante, mas o som é quase igual.',
    transparent: true,
  },
  {
    word: 'مادر',
    root_word: '*méh₂tēr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'mãe (via latim mater)'], ['en', 'mother'], ['el', 'μητέρα'], ['ru', 'мать'], ['hi', 'माता (mātā)']),
    evolution_note:
      'Do proto-indo-europeu “*méh₂tēr” (mãe) via proto-iraniano “*máHtā”: a mesma raiz que deu “mater” em latim (e “mãe” em português), “mother” em inglês e “माता” em híndi.',
    transparent: true,
  },
  {
    word: 'پدر',
    root_word: '*ph₂tḗr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'pai, padre (via latim pater)'], ['en', 'father'], ['sa', 'पितृ (pitṛ)'], ['hi', 'पिता (pitā)']),
    evolution_note:
      'Do proto-indo-europeu “*ph₂tḗr” (pai), a mesma raiz do latim “pater” (de onde vêm “pai” e “padre” em português) e do inglês “father”.',
    transparent: true,
  },
  {
    word: 'بازار',
    root_word: 'wāzār (persa médio)',
    origin_language: 'Persa médio',
    cognates: c(['pt', 'bazar'], ['en', 'bazaar'], ['fr', 'bazar'], ['tr', 'pazar'], ['hi', 'बाज़ार (bāzār)']),
    evolution_note:
      'O persa médio “wāzār” (mercado) viajou pela Eurásia inteira: virou “bazar” em português, francês e espanhol, “bazaar” em inglês, “pazar” em turco e “बाज़ार” em híndi e urdu — um raro caso de palavra persa que o próprio português reconhece de cara.',
    transparent: true,
  },
  {
    word: 'شاه',
    root_word: 'xšāyaθiya (persa antigo, “rei”)',
    origin_language: 'Persa antigo',
    cognates: c(['pt', 'xeque, xeque-mate (no jogo de xadrez)'], ['en', 'check, checkmate'], ['de', 'Schach']),
    evolution_note:
      'O persa antigo “xšāyaθiya” (rei) deu “شاه” (šâh). A expressão “شاه مات” (šâh mât, “o rei está encurralado/morto”) passou pro árabe e, de lá, virou “xeque-mate” em português e “checkmate” em inglês — uma conexão indireta que liga o tabuleiro de xadrez à palavra persa pra “rei”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_FA: [string, string][] = [
  ['حالِ شما چطور است؟', 'Como você está?'],
  ['خانواده‌ی شما چطور است؟', 'Como é a sua família?'],
  ['خانه‌ی شما چطور است؟', 'Como é a sua casa?'],
  ['شما چه می‌خورید؟', 'O que você come?'],
];

export const SHADOWING_FA: [string, string][] = [
  ['سلام! حالِ شما چطور است؟', 'Oi! Como você está?'],
  ['نامِ من مریم است.', 'Meu nome é Maryam.'],
  ['خیلی ممنون! خداحافظ.', 'Muito obrigado! Tchau.'],
  ['من فارسی یاد می‌گیرم.', 'Eu aprendo persa.'],
];
