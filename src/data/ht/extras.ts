import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros no crioulo haitiano). Um
 * falante de português reconhece muito vocabulário do crioulo haitiano, porque a maior parte vem do
 * francês — mas tropeça na gramática, que é outra: não conjuga o verbo, usa “se”/“ye” de um jeito
 * específico e nega só com “pa” antes do verbo.
 */
export const COMMUNITY_HT: CommunitySeed[] = [
  {
    author_name: 'Patrícia 🇧🇷',
    prompt: 'Kijan ou ye?',
    content: 'Mwen se byen.',
    reference: 'Mwen byen.',
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Kisa ou vle nan mache?',
    content: 'Mwen manje ap diri.',
    reference: 'Mwen ap manje diri.',
  },
  {
    author_name: 'Juliana 🇧🇷',
    prompt: 'Ou gen lajan?',
    content: 'Mwen gen pa lajan.',
    reference: 'Mwen pa gen lajan.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_HT: ScenarioSeed[] = [
  {
    id: 'ht-s1',
    title: 'Nan mache a',
    emoji: '🧺',
    cefr: 'A1',
    register: 'informal',
    persona: 'Manman Woz, nan mache',
    description: 'Manman Woz vende água, pão e café no mercado. A conversa é informal, entre vendedora e cliente — o crioulo haitiano não tem um pronome formal separado.',
    turns: [
      {
        bot: 'Bonjou! Kisa ou vle?',
        botTranslation: 'Olá! O que você quer?',
        keywords: ['dlo', 'pen', 'kafe', 'vle'],
        suggestions: ['Mwen vle dlo ak pen.', 'Mwen vle yon kafe.'],
      },
      {
        bot: 'Ou gen lajan?',
        botTranslation: 'Você tem dinheiro?',
        keywords: ['lajan', 'gen', 'pa'],
        suggestions: ['Wi, mwen gen lajan.', 'Non, mwen pa gen lajan.'],
      },
    ],
  },
];

/**
 * Palavras do crioulo haitiano com a origem real de cada uma. A maior parte vem do francês — às vezes
 * com o artigo grudado na palavra (“lajan”, de “l’argent”; “zanmi”, do plural “les amis”) — mas nem
 * tudo: “mayi” vem do taino, língua indígena do Haiti antes da colonização, e “zonbi” vem de línguas
 * bantas da África central. Fontes: Wikipédia (inglês), artigo “Haitian Creole” (tabela de empréstimos
 * do taino); Wiktionary (inglês), entradas em crioulo haitiano zanmi, lajan, mayi e zonbi, consultadas
 * pelo texto-fonte (action=raw).
 */
export const ETYMOLOGY_HT: EtymologySeed[] = [
  {
    word: 'zanmi',
    root_word: 'les amis / des amis',
    origin_language: 'Francês',
    cognates: c(['pt', 'amigo (mesma raiz latina, “amicus”)'], ['fr', 'ami']),
    evolution_note: 'No francês falado, o plural “les amis” ou “des amis” soa com um “z” de ligação antes da vogal (o “s” final do artigo, pronunciado /z/). Quem formou o crioulo reanalisou esse “z” como parte da própria palavra, e “amis” virou “zanmi” — hoje usado tanto no singular quanto no plural.',
    transparent: false,
  },
  {
    word: 'lajan',
    root_word: "l'argent",
    origin_language: 'Francês',
    cognates: c(['fr', 'argent'], ['pt', 'nenhum cognato direto: “dinheiro” vem de outra raiz latina']),
    evolution_note: 'O artigo francês “l’” (de “l’argent”, o dinheiro) ficou grudado na palavra para sempre. O mesmo aconteceu com “diri” (arroz), de “du riz”, e com “lanmè” (mar), de “la mer”: o crioulo haitiano tem várias palavras assim, com o artigo francês fundido ao substantivo.',
    transparent: false,
  },
  {
    word: 'mayi',
    root_word: 'mahis',
    origin_language: 'Taino',
    cognates: c(['en', 'maize'], ['es', 'maíz']),
    evolution_note: 'Segundo a Wikipédia, “mayi” vem do taino “mahis” — a mesma raiz indígena que deu “maize” em inglês e “maíz” em espanhol. O taino era falado no Haiti antes da chegada dos europeus, e também deu o próprio nome do país: “Ayiti”, terra de altas montanhas.',
    transparent: false,
  },
  {
    word: 'zonbi',
    root_word: 'nzumbe / nzumbi',
    origin_language: 'Línguas bantas (quicongo, quimbundo)',
    cognates: c(['pt', 'zumbi (o português do Brasil tomou a mesma palavra banta por outro caminho)'], ['en', 'zombie']),
    evolution_note: 'Segundo o Wiktionary, “zonbi” vem de termos bantas da África central: o quicongo “nzambi” (deus) e “zumbi” (fetiche), e o quimbundo “nzumbi” (fantasma) — trazidos pelo tráfico transatlântico de pessoas escravizadas. O português do Brasil tem a mesmíssima palavra, “zumbi”, vinda da mesma raiz banta por outro caminho histórico — por isso um brasileiro reconhece “zonbi” de cara.',
    transparent: true,
  },
  {
    word: 'ak',
    root_word: 'avec (ou substrato africano)',
    origin_language: 'Francês e/ou substrato africano',
    cognates: c(['fr', 'avec (com)'], ['pt', 'nenhum cognato direto']),
    evolution_note: 'O Wiktionary registra duas explicações possíveis para “ak” (e, com): a forma pode vir do francês “avec”, encurtado; mas o próprio uso da palavra — servindo tanto para “e” quanto para “com” — é descrito como modelado por línguas do substrato africano do crioulo, que costumam usar uma única palavra para as duas ideias. Pode ser um caso dos dois ao mesmo tempo: som do francês, uso do substrato.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HT: [string, string][] = [
  ['Kijan ou ye?', 'Como você está?'],
  ['Kisa ou vle manje?', 'O que você quer comer?'],
  ['Ou gen yon fanmi gwo?', 'Você tem uma família grande?'],
  ['Konbyen dlo ou bwè?', 'Quanto de água você bebe?'],
];

export const SHADOWING_HT: [string, string][] = [
  ['Mwen te manje.', 'Eu comi.'],
  ['Mwen pral manje.', 'Eu vou comer.'],
  ['Mwen pa gen lajan.', 'Eu não tenho dinheiro.'],
  ['Kijan ou ye?', 'Como você está?'],
];
