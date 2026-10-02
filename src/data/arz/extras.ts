import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção — erros típicos de brasileiros aprendendo árabe
 * egípcio, incluindo o erro mais comum de todos: achar que o árabe padrão (MSA) e o árabe egípcio
 * são intercambiáveis.
 */
export const COMMUNITY_ARZ: CommunitySeed[] = [
  {
    // erro de gramática: confundir a negação مش (sem verbo) com ما...ش (com verbo)
    author_name: 'Bruno 🇧🇷',
    prompt: 'إزيك؟',
    content: 'أنا ما كويسش.',
    reference: 'أنا مش كويس.',
  },
  {
    // erro de "achar que é a mesma língua": usar a palavra وحش pensando no sentido do árabe padrão
    // ("fera, monstro") e não no sentido egípcio ("ruim, feio")
    author_name: 'Camila 🇧🇷',
    prompt: 'القمر إزاي؟',
    content: 'القمر وحش!',
    reference: 'القمر كويس!',
  },
  {
    // erro de registro: usar a forma clássica/do árabe padrão (اثنين) em vez da forma egípcia falada (اتنين)
    author_name: 'Diego 🇧🇷',
    prompt: 'عايز إيه؟',
    content: 'عايز اثنين.',
    reference: 'عايز اتنين.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_ARZ: ScenarioSeed[] = [
  {
    id: 'arz-s1',
    title: 'في القهوة',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'O dono de uma ahwa (cafeteria tradicional) no Cairo',
    description: 'Você entra numa ahwa do bairro e pede algo para beber. É uma conversa informal, do dia a dia.',
    turns: [
      {
        bot: 'إزيك؟ عايز إيه؟',
        botTranslation: 'Como você está? O que você quer?',
        keywords: ['عايز'],
        suggestions: ['عايز قهوة.', 'عايز شاي.', 'عايز مية.'],
      },
      {
        bot: 'قهوة كويسة!',
        botTranslation: 'Um café ótimo!',
        keywords: ['شكرا', 'أيوه'],
        suggestions: ['شكرا!', 'أيوه، شكرا كتير!'],
      },
    ],
  },
];

/**
 * Palavras do árabe egípcio com a etimologia verificada — substrato copta e desenvolvimentos
 * internos do árabe. Nenhuma entrada foi assumida igual ao árabe padrão.
 *
 * Fontes (consultadas em 02/10/2026): Wikcionário (inglês), entradas «طوبة», «عيش», «مش», «إزاي» e
 * «ايوه»; Wikipédia (inglês), «Egyptian Arabic» (estimativa de 250–300 empréstimos coptas, de Peter
 * Behnstedt).
 */
export const ETYMOLOGY_ARZ: EtymologySeed[] = [
  {
    word: 'طوبة',
    root_word: 'ⲧⲱⲃⲉ (tōbe, “tijolo”)',
    origin_language: 'Copta',
    cognates: c(['ar', 'طوبة (tūba — do árabe padrão, também “tijolo”)']),
    evolution_note:
      'Do copta ⲧⲱⲃⲉ (tōbe, “tijolo”) — o copta é a fase final do egípcio antigo, usada hoje só na liturgia da Igreja egípcia. É uma das cerca de 250 a 300 palavras de origem copta que, segundo a estimativa do linguista Peter Behnstedt, sobrevivem no árabe egípcio.',
    transparent: false,
  },
  {
    word: 'عيش',
    root_word: 'عَيْش (ʕayš, “vida”, do verbo عاش, “viver”)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'عيش (ʕayš, “vida”, no árabe padrão)']),
    evolution_note:
      'No árabe padrão, عيش é só “vida”. No Egito, a mesma palavra passou a significar especificamente “pão” — o Wikcionário propõe que a mudança de sentido vem da ideia de que o pão é o que mantém alguém vivo. O árabe do Hejaz fez o mesmo deslocamento de sentido; o árabe do Golfo, em vez disso, usa a mesma raiz para “arroz”.',
    transparent: false,
  },
  {
    word: 'مش',
    root_word: 'ما هو شيء (mā huwa šayʔ, algo como “[isso] não é nada”)',
    origin_language: 'Árabe egípcio',
    cognates: c(['ar', 'لا / ليس (as negações do árabe padrão, de raiz diferente)']),
    evolution_note:
      'O Wikcionário descreve مش como uma univerbação — vários termos que colam até virar uma palavra só — de “ما هو شيء”. Com o uso, a frase toda encolheu numa partícula curta de negação. O levantino do sul tem a mesma partícula (مش/muš); a palavra não existe assim no árabe padrão, que nega adjetivos e nomes de outro jeito.',
    transparent: false,
  },
  {
    word: 'إزاي',
    root_word: 'ايه (“o quê”) + زي (“como, igual a”)',
    origin_language: 'Árabe egípcio',
    cognates: c(['ar', 'كيف (kayfa, “como”, no árabe padrão)']),
    evolution_note:
      'O Wikcionário propõe que إزاي vem da junção de ايه (“o quê”) com زي (“como, igual a”), mas marca essa etimologia como incompleta — não é uma origem fechada. No sul do Egito (Alto Egito) existe um sinônimo regional, كيف (kīf), mais parecido com a forma do árabe padrão.',
    transparent: false,
  },
  {
    word: 'أيوه',
    root_word: 'incerta — possivelmente do copta, ou de uma afirmação seguida de “والله” (“por Deus”)',
    origin_language: 'Incerta (copta ou árabe)',
    cognates: c(['ar', 'نعم (naʕam, “sim”, no árabe padrão)']),
    evolution_note:
      'O próprio Wikcionário admite que não tem certeza da origem de أيوه: aponta tanto uma possível raiz copta quanto uma explicação árabe interna (uma afirmação seguida do juramento “والله”, “por Deus”), e pede mais fontes. Por honestidade, este pacote repete essa incerteza em vez de escolher uma explicação só.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_ARZ: [string, string][] = [
  ['إزيك النهارده؟', 'Como você está hoje?'],
  ['عايز إيه دلوقتي؟', 'O que você quer agora?'],
  ['ده إيه؟', 'O que é isso?'],
  ['البيت فين؟', 'Onde fica a casa?'],
];

export const SHADOWING_ARZ: [string, string][] = [
  ['إزيك؟ كويس، شكرا.', 'Como vai? Bem, obrigado.'],
  ['أنا مش مصري.', 'Eu não sou egípcio.'],
  ['عايز قهوة.', 'Quero um café.'],
  ['ده إيه؟ ده بيت كبير!', 'O que é isso? Isso é uma casa grande!'],
];
