import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção — três erros típicos de quem fala português ao
 * aprender árabe: esquecer o sufixo possessivo “-ي” (meu), não concordar o adjetivo em gênero com
 * um substantivo feminino, e usar o plural comum em vez do dual para “exatamente dois”.
 */
export const COMMUNITY_AR: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'من أين أنتَ؟ وما اسمك؟',
    content: 'أنا اسم برونو. أنا من كوريتيبا.',
    reference: 'اسمي برونو. أنا من كوريتيبا.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'عندك قطة؟ كيف هي؟',
    content: 'نعم، عندي قطة. قطتي أسود.',
    reference: 'نعم، عندي قطة. قطتي سوداء.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'هل عندك أخوان؟',
    content: 'نعم، عندي إخوة.',
    reference: 'نعم، عندي أخوان.',
  },
];

/** Cenário de conversa: pedir café ou água. */
export const SCENARIOS_AR: ScenarioSeed[] = [
  {
    id: 'ar-s1',
    title: 'في المقهى',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'أحمد',
    description: 'Ahmad oferece café ou água e pergunta se você quer açúcar. Converse em árabe usando “نعم”، “لا”، “أريد” e o vocabulário que você já aprendeu.',
    turns: [
      {
        bot: 'قهوة أم ماء؟',
        botTranslation: 'Café ou água?',
        keywords: ['قهوة', 'ماء'],
        suggestions: ['أريد قهوة، من فضلك.', 'أريد ماء، من فضلك.'],
      },
      {
        bot: 'والسكر؟',
        botTranslation: 'E o açúcar?',
        keywords: ['نعم', 'لا', 'سكر'],
        suggestions: ['نعم، من فضلك.', 'لا، شكرا.'],
      },
    ],
  },
];

/**
 * Palavras árabes que viraram palavras do português — um ângulo bonito, já que o árabe emprestou
 * muito vocabulário ao português (e a outras línguas da Península Ibérica) durante séculos de
 * contato. Cada etimologia foi conferida no Wikcionário em português (pt.wiktionary.org) para a
 * palavra portuguesa, e no Wikcionário em inglês para a palavra árabe de origem.
 */
export const ETYMOLOGY_AR: EtymologySeed[] = [
  {
    word: 'سكر',
    root_word: 'do persa médio “šakar”, que vem do sânscrito “śárkarā”',
    origin_language: 'Árabe (em última instância do sânscrito, via persa médio)',
    cognates: c(['pt', 'açúcar'], ['en', 'sugar']),
    evolution_note:
      'O árabe “سكر” (sukkar) tomou emprestado do persa médio “šakar”, que vem do sânscrito “śárkarā” (fonte: Wikcionário em inglês, verbete “سكر”). Do árabe, a palavra passou para o português como “açúcar” (fonte: Wikcionário em português, verbete “açúcar”) e para o inglês, por outro caminho, como “sugar”.',
    transparent: false,
  },
  {
    word: 'أرز',
    root_word: 'do grego antigo “ὄρυζα” (óryza), de origem iraniana, via árabe andaluz “arráwz”',
    origin_language: 'Árabe andaluz (em última instância do grego antigo, de origem iraniana)',
    cognates: c(['pt', 'arroz'], ['es', 'arroz']),
    evolution_note:
      'O árabe “أرز” (aruzz) vem do grego antigo “ὄρυζα” (óryza), de origem iraniana. A forma do dialeto árabe andaluz, falado na Península Ibérica, “arráwz”, deu o português e o espanhol “arroz” (fonte: Wikcionário em português, verbete “arroz”).',
    transparent: false,
  },
  {
    word: 'قهوة',
    root_word: 'قهوة (qahwa) → turco “kahve” → holandês “koffie”',
    origin_language: 'Árabe, via turco e holandês',
    cognates: c(['pt', 'café'], ['en', 'coffee']),
    evolution_note:
      'A palavra viajou do árabe “qahwa” pelo turco “kahve” até o holandês “koffie”, que deu o inglês “coffee” e, por outro caminho semelhante, o português “café” — quase todas as línguas europeias têm a mesma raiz para essa bebida.',
    transparent: false,
  },
  {
    word: 'خد',
    root_word: '“المخدة” (al-mukhadda, “o travesseiro”), de “خد” (khadd, “bochecha”)',
    origin_language: 'Árabe',
    cognates: c(['pt', 'almofada']),
    evolution_note:
      'O árabe “خد” (khadd) quer dizer “bochecha”. Dele vem “المخدة” (al-mukhadda ou al-mokhadda), literalmente “o lugar da bochecha” — o travesseiro, onde se recosta o rosto para dormir —, que deu o português “almofada” (fonte: Wikcionário em português, verbete “almofada”).',
    transparent: false,
  },
  {
    word: 'إن شاء الله',
    root_word: '“لو شاء الله” (law šāʾa llāh, “se Deus quisesse”) ou “وشاء الله” (wa šāʾa llāh, “e Deus quis”)',
    origin_language: 'Árabe',
    cognates: c(['pt', 'oxalá'], ['es', 'ojalá']),
    evolution_note:
      'O português “oxalá” vem de uma frase árabe com o verbo “شاء” (šāʾa, “querer, desejar”) — o Wikcionário em inglês registra duas formas possíveis de origem, “لو شاء الله” e “وشاء الله” —, chegando ao português pelo espanhol antigo “ojalá” (fonte: Wikcionário em inglês, verbete “oxalá”). A expressão do dia a dia de hoje usa o mesmo verbo com outra conjunção: “إن شاء الله” (in šāʾa llāh), “se Deus quiser”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_AR: [string, string][] = [
  ['كيف حالك اليوم؟', 'Como você está hoje?'],
  ['هل عندك أخ أو أخت؟', 'Você tem irmão ou irmã?'],
  ['بيتك كبير أم صغير؟', 'Sua casa é grande ou pequena?'],
  ['ماء أم قهوة؟', 'Água ou café?'],
];

export const SHADOWING_AR: [string, string][] = [
  ['سلام! اسمي سارة.', 'Oi! Meu nome é Sara.'],
  ['أنا من البرازيل.', 'Eu sou do Brasil.'],
  ['عندي أخ وأخت.', 'Tenho um irmão e uma irmã.'],
  ['أريد قهوة، من فضلك.', 'Quero café, por favor.'],
];
