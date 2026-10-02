import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros no iídiche): esquecer a
 * conjunção “און”, usar o artigo errado num substantivo neutro, e esquecer o artigo indefinido “אַ”.
 */
export const COMMUNITY_YI: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'וואָס מאַכסטו?',
    content: 'גוט, אַ דאַנק! דו?',
    reference: 'גוט, אַ דאַנק! און דו?',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'ווער איז דאָס?',
    content: 'דער הויז איז מײַן.',
    reference: 'דאָס איז מײַן הויז.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'דו האָסט אַ שוועסטער?',
    content: 'יאָ, איך האָב שוועסטער.',
    reference: 'יאָ, איך האָב אַ שוועסטער.',
  },
];

/** Cenário de conversa. */
export const SCENARIOS_YI: ScenarioSeed[] = [
  {
    id: 'yi-s1',
    title: 'קאַווע און ברויט',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Moyshe, um amigo do curso de iídiche',
    description: 'Moyshe convida você para um café. É uma conversa entre amigos: use “דו”.',
    turns: [
      {
        bot: 'איך וויל קאַווע. און דו?',
        botTranslation: 'Eu quero café. E você?',
        keywords: ['קאַווע', 'וואַסער', 'מילך'],
        suggestions: ['איך וויל קאַווע.', 'איך וויל וואַסער.'],
      },
      {
        bot: 'דו האָסט אַ ברודער?',
        botTranslation: 'Você tem um irmão?',
        keywords: ['איך האָב', 'יאָ', 'ניין'],
        suggestions: ['יאָ, איך האָב אַ ברודער.', 'ניין, איך האָב אַ שוועסטער.'],
      },
    ],
  },
];

/**
 * Palavras do iídiche com a origem e os parentes nas línguas irmãs: duas germânicas, duas
 * hebraico-aramaicas e uma eslava (ver o tópico de gramática “As três camadas do vocabulário”).
 * Fontes: Wikcionário em inglês, uma entrada por palavra (ver vocabulario.ts para os links).
 */
export const ETYMOLOGY_YI: EtymologySeed[] = [
  {
    word: 'הויז',
    root_word: 'hūs',
    origin_language: 'Alto-alemão médio',
    cognates: c(['de', 'Haus'], ['en', 'house'], ['nl', 'huis']),
    evolution_note: 'A mesma raiz germânica do alemão “Haus”, do inglês “house” e do neerlandês “huis” — e, como no alemão “das Haus”, é uma palavra de gênero neutro (“דאָס הויז”).',
    transparent: false,
  },
  {
    word: 'גרויס',
    root_word: 'grōz',
    origin_language: 'Alto-alemão médio',
    cognates: c(['de', 'groß'], ['en', 'great'], ['nl', 'groot']),
    evolution_note: 'Da mesma família do alemão “groß” e do inglês “great” (que hoje quer dizer mais “ótimo” do que “grande”, mas começou com o mesmo sentido de tamanho).',
    transparent: false,
  },
  {
    word: 'משפּחה',
    root_word: 'מִשְׁפָּחָה (mishpakhá)',
    origin_language: 'Hebraico',
    cognates: c(['he', 'משפחה']),
    evolution_note: 'Palavra hebraica incorporada quase sem mudanças ao iídiche, parte da camada de vocabulário “loshn-koydesh” (a língua sagrada) usada para família, religião e cultura, por cima da base gramatical germânica.',
    transparent: false,
  },
  {
    word: 'לבֿנה',
    root_word: 'לְבָנָה (levaná)',
    origin_language: 'Hebraico',
    cognates: c(['he', 'לבנה']),
    evolution_note: 'Do hebraico “levaná”, literalmente “a branca” (da raiz l-b-n, “branco”). Curiosamente, no iídiche “lua” é uma palavra hebraica (“לבֿנה”), enquanto “sol” (“זון”) é germânica — as duas camadas do vocabulário lado a lado no mesmo campo de significado.',
    transparent: false,
  },
  {
    word: 'קאַווע',
    root_word: 'kawa',
    origin_language: 'Polonês (do turco otomano “kahve”, do árabe قهوة)',
    cognates: c(['pl', 'kawa'], ['tr', 'kahve']),
    evolution_note: 'A palavra viajou do árabe para o turco otomano, depois para o polonês e só então para o iídiche — um exemplo claro da camada eslava do vocabulário, incorporada quando as comunidades se mudaram para o Leste Europeu.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_YI: [string, string][] = [
  ['וואָס מאַכסטו?', 'Como você está?'],
  ['דו האָסט אַ ברודער אָדער אַ שוועסטער?', 'Você tem um irmão ou uma irmã?'],
  ['דו ווילסט טרינקען וואַסער אָדער קאַווע?', 'Você quer beber água ou café?'],
  ['דו האָסט אַ הונט?', 'Você tem um cachorro?'],
];

export const SHADOWING_YI: [string, string][] = [
  ['שלום עליכם! איך הייס דוד.', 'Olá! Eu me chamo David.'],
  ['גוט, אַ דאַנק! און דו?', 'Bem, obrigado! E você?'],
  ['איך האָב אַ ברודער און אַ שוועסטער.', 'Eu tenho um irmão e uma irmã.'],
  ['איך פֿאַרשטיי ניט.', 'Eu não entendo.'],
];
