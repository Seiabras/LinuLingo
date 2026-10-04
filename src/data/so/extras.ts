import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo somali). */
export const COMMUNITY_SO: CommunitySeed[] = [
  {
    author_name: 'Marina 🇧🇷',
    prompt: 'Subax wanaagsan! Sidee tahay?',
    content: 'Wanaagsan.',
    reference: 'Waan wanaagsanahay, mahadsanid.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'Magacaa?',
    content: 'Magacay Pedro.',
    reference: 'Magacay waa Pedro.',
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Shaah iyo caano?',
    content: 'Haa, shaah caano.',
    reference: 'Haa, shaah iyo caano, fadlan.',
  },
];

/**
 * Cenários de conversa. As fontes consultadas não registram um tratamento de respeito gramatical (tipo
 * «o senhor»); o cenário formal aposta nas fórmulas de cortesia atestadas (fadlan, mahadsanid,
 * subax wanaagsan) e não tem «registerBreakers», para não inventar uma regra de registro.
 * Isso tem apoio na literatura: Saeed (1999, «Somali», John Benjamins, p. 270) fala da falta de
 * pronomes de cortesia e de honoríficos entre os somalis, e Orwin (1995, «Colloquial Somali», p. 13)
 * diz que o somali não tem palavra nativa para «por favor» — o pedido costuma ser um imperativo
 * simples, que não soa grosseiro; «fadlan» é empréstimo do árabe, de uso corrente hoje (o Omniglot o
 * registra). As duas citações estão no MinneTESOL Journal, «Somali and English: Some Differences and
 * the Implications for Writing Tutors and Instructors». O «idinka» como «você» respeitoso, que aparece
 * em blog de curso, não foi achado em fonte confiável e não entra.
 */
export const SCENARIOS_SO: ScenarioSeed[] = [
  {
    id: 'so-s1',
    title: 'Sidee tahay? Encontro na rua',
    emoji: '👋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma colega da sua idade',
    description: 'Uma conversa curta e informal: cumprimento, como você está e o seu nome.',
    turns: [
      {
        bot: 'Subax wanaagsan! Sidee tahay?',
        botTranslation: 'Bom dia! Como vai?',
        keywords: ['wanaagsanahay'],
        suggestions: ['Waan wanaagsanahay, mahadsanid. Adiguna?'],
      },
      {
        bot: 'Magacaa?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['magacay'],
        suggestions: ['Magacay waa Linu.'],
      },
    ],
  },
  {
    id: 'so-s2',
    title: 'Shaah, fadlan: na casa de chá',
    emoji: '🍵',
    cefr: 'A1',
    register: 'formal',
    persona: 'O dono da casa de chá, um senhor mais velho',
    description: 'Peça bebida e comida com educação: “fadlan” (por favor) e “mahadsanid” (obrigado).',
    turns: [
      {
        bot: 'Subax wanaagsan! Shaah iyo caano?',
        botTranslation: 'Bom dia! Chá e leite?',
        keywords: ['fadlan'],
        suggestions: ['Haa, shaah iyo caano, fadlan.', 'Maya, mahadsanid. Biyo, fadlan.'],
      },
      {
        bot: 'Rooti iyo ukun?',
        botTranslation: 'Pão e ovo?',
        keywords: ['fadlan', 'mahadsanid'],
        suggestions: ['Haa, rooti, fadlan.', 'Maya, mahadsanid.'],
      },
    ],
  },
];

/**
 * Etimologias, todas dos verbetes do Wiktionary em inglês (seção «Somali → Etymology»):
 * - af: do protocuchítico *ʔaf- «boca»; cognato do oromo «afaan».
 * - aabbe: do proto-afro-asiático *ʔab- «pai»; compara-se ao protossemítico *ʔabw-; cognato do oromo
 *   «abbaa».
 * - biyo: do proto-somali *bice, do proto-cuchítico oriental das terras baixas *bikee- «água»;
 *   cognato do oromo «bishaan».
 * - bisad: do árabe بسة (bissa), com o sufixo feminino somali «-ad».
 * - buug: do inglês «book»; sinônimo «kitaab», do árabe كِتَاب (verbete «kitaab»).
 * - árabe أَب e hebraico אָב (av) como descendentes de *ʔabw-: Reconstruction:Proto-Semitic/ʔabw-.
 * - oromo «afaan» = boca; língua: verbete «afaan», seção Oromo.
 */
export const ETYMOLOGY_SO: EtymologySeed[] = [
  {
    word: 'af',
    root_word: '*ʔaf- (protocuchítico, “boca”)',
    origin_language: 'Protocuchítico',
    cognates: c(['om', 'afaan (boca; língua)']),
    evolution_note:
      '“Af” quer dizer “boca” e também “língua, idioma” — daí “Af Soomaali”, a língua somali. A palavra vem do protocuchítico *ʔaf- (boca), e o oromo, primo cuchítico do somali, tem a mesma raiz em “afaan”: o nome da língua oromo, “Afaan Oromoo”, usa essa mesma palavra, como “Af Soomaali”.',
    transparent: false,
  },
  {
    word: 'aabbe',
    root_word: '*ʔab- (proto-afro-asiático, “pai”)',
    origin_language: 'Proto-afro-asiático',
    cognates: c(['om', 'abbaa (pai)'], ['ar', 'أب (ʔab, pai)'], ['he', 'אָב (av, pai)']),
    evolution_note:
      '“Aabbe” (pai) vem de uma raiz muito antiga, o proto-afro-asiático *ʔab- (pai). Por isso ele se parece com o “abbaa” do oromo e também com o árabe “ʔab” e o hebraico “av”: o somali, o árabe e o hebraico são primos distantes dentro do grande tronco afro-asiático.',
    transparent: false,
  },
  {
    word: 'biyo',
    root_word: '*bikee- (cuchítico oriental das terras baixas, “água”)',
    origin_language: 'Proto-cuchítico oriental das terras baixas',
    cognates: c(['om', 'bishaan (água)']),
    evolution_note:
      '“Biyo” (água) vem do proto-cuchítico oriental das terras baixas *bikee- (água), e tem o mesmo parentesco que o oromo “bishaan”. Repare no detalhe gramatical: “biyo” é um substantivo plural, como se o somali dissesse “as águas”.',
    transparent: false,
  },
  {
    word: 'bisad',
    root_word: 'bissa (árabe) + -ad (sufixo feminino)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'بسة (bissa)']),
    evolution_note:
      '“Bisad” (gato) é um empréstimo do árabe “bissa”, ao qual o somali juntou o seu próprio sufixo feminino “-ad” — por isso “bisad” é uma palavra feminina. Cerca de um quinto do vocabulário somali vem do árabe.',
    transparent: false,
  },
  {
    word: 'buug',
    root_word: 'book (inglês)',
    origin_language: 'Inglês',
    cognates: c(['en', 'book (livro)']),
    evolution_note:
      '“Buug” (livro) é um empréstimo do inglês “book”, adaptado à grafia somali, em que a vogal dobrada “uu” marca o “u” longo. Do inglês e do italiano vieram palavras para coisas mais modernas; o somali também tem a palavra “kitaab”, do árabe.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_SO: [string, string][] = [
  ['Sidee tahay?', 'Como vai?'],
  ['Magacaa?', 'Qual é o seu nome?'],
  ['Shaah iyo caano?', 'Chá e leite?'],
  ['Kow, laba, saddex, afar, shan…', 'Um, dois, três, quatro, cinco…'],
];

export const SHADOWING_SO: [string, string][] = [
  ['Subax wanaagsan! Sidee tahay?', 'Bom dia! Como vai?'],
  ['Waan wanaagsanahay, mahadsanid.', 'Estou bem, obrigado.'],
  ['Magacay waa Linu.', 'Meu nome é Linu.'],
  ['Biyo waan cabbaa.', 'Eu bebo água.'],
  ['Habeen wanaagsan!', 'Boa noite!'],
];
