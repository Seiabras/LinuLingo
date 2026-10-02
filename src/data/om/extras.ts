import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no oromo). */
export const COMMUNITY_OM: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Maqaan kee eenyu? Ati barataa dha?',
    content: 'Maqaan koo Bruno. Ani barataa.',
    reference: 'Maqaan koo Bruno. Ani barataa dha.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Isheen eenyu dha?',
    content: 'Isheen diimaa dha.',
    reference: 'Isheen diimtuu dha.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Maqaan kee eenyu?',
    content: 'Maqaa koo Diego.',
    reference: 'Maqaan koo Diego.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_OM: ScenarioSeed[] = [
  {
    id: 'om-s1',
    title: 'Buna waliin',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Caaltuu, hiriyaa kutaa Afaan Oromoo',
    description: 'Caaltuu te convida para tomar café (buna). É uma conversa entre amigos: registro informal.',
    turns: [
      {
        bot: 'Akkam! Buna gaarii dha!',
        botTranslation: 'Oi! O café está bom!',
        keywords: ['buna', 'eeyyee', 'galatoomi'],
        suggestions: ['Eeyyee, galatoomi!', 'Eeyyee, buna gaarii dha.'],
      },
      {
        bot: 'Maqaan kee eenyu?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['maqaan koo'],
        suggestions: ['Maqaan koo Lúcia.', 'Maqaan koo Bruno.'],
      },
    ],
  },
];

/**
 * Palavras do oromo que vieram do árabe, parte do mesmo fluxo que deu "littafi" no hauçá e "kitabu"
 * no suaíli — todas do árabe "al-kitāb" (o livro), espalhado pela África com o islã e, no caso do
 * oromo, também pelas traduções cristãs da Bíblia.
 * Fonte: Glosbe (dicionário om-en, "kitaaba" = book/bible); o étimo árabe e o paralelo com o hauçá
 * e o suaíli seguem o mesmo empréstimo documentado nas etimologias de ha/littafi e sw/kitabu deste
 * app (Wiktionary).
 */
export const ETYMOLOGY_OM: EtymologySeed[] = [
  {
    word: 'kitaaba',
    root_word: 'اَلْكِتَاب (al-kitāb)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'كِتَاب (kitāb, livro)'], ['sw', 'kitabu (livro, mesmo empréstimo árabe)'], ['ha', 'littafi (livro, mesmo empréstimo árabe, mais transformado)']),
    evolution_note:
      '“Kitaaba” é o mesmo empréstimo árabe “al-kitāb” (o livro) que deu “kitabu” em suaíli — línguas bem distantes entre si, do outro lado do continente, mas que receberam a mesma palavra do comércio e da fé através dos séculos. No hauçá, o parente “littafi” mudou tanto de forma que fica irreconhecível; no oromo, “kitaaba” continua bem mais parecido com o árabe original.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_OM: [string, string][] = [
  ['Maqaan kee eenyu?', 'Qual é o seu nome?'],
  ['Buna gaarii dha?', 'O café está bom?'],
  ['Maatiin kee gaarii dha?', 'A sua família está bem?'],
  ['Guyyaan kee gaarii dha?', 'O seu dia foi bom?'],
];

export const SHADOWING_OM: [string, string][] = [
  ['Akkam! Baga nagaan dhufte!', 'Oi! Bem-vindo(a)!'],
  ['Maqaan koo Linu.', 'Meu nome é Linu.'],
  ['Galatoomi, nagaatti!', 'Obrigado, até logo!'],
  ['Kun abbaa koo fi haadha koo dha.', 'Este é o meu pai e esta é a minha mãe.'],
];
