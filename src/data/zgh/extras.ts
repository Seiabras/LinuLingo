import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no tamazight). */
export const COMMUNITY_ZGH: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Isem-nnk?',
    content: 'Nekk, d Bruno. Kemm, d Bruno?',
    reference: 'Nekk, d Bruno. Kečč, d Bruno?',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Dari axxam amecṭuḥ. Kemm?',
    content: 'Dari axxam amecṭuḥ, amecṭuḥ.',
    reference: 'Dari axxam amecṭuḥ.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Dari aydi aberkan. Kečč?',
    content: 'Dari aydi tameqqrant.',
    reference: 'Dari aydi ameqqran.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_ZGH: ScenarioSeed[] = [
  {
    id: 'zgh-s1',
    title: 'Azul, no mercado',
    emoji: '🛒',
    cefr: 'A1',
    register: 'informal',
    persona: 'Yamna, uma vendedora de pão num mercado no Marrocos',
    description: 'Yamna te vende pão e água no mercado. É uma conversa curta e informal, entre conhecidos de bairro.',
    turns: [
      {
        bot: 'Azul! Amek?',
        botTranslation: 'Oi! Como [vai]?',
        keywords: ['Azul', 'Nekk'],
        suggestions: ['Azul! Nekk, d Linu.'],
      },
      {
        bot: 'Isem-nnk?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['Nekk', 'd'],
        suggestions: ['Nekk, d Linu.'],
      },
      {
        bot: 'Dari aɣrum d aman. Kečč?',
        botTranslation: 'Eu tenho pão e água. E você?',
        keywords: ['Tanemmirt', 'Dari'],
        suggestions: ['Tanemmirt!', 'Dari aydi.'],
      },
    ],
  },
];

/** Palavras do tamazight com a origem real e, quando existe, o parentesco com o português ou o árabe. */
export const ETYMOLOGY_ZGH: EtymologySeed[] = [
  {
    word: 'azul',
    root_word: 'uhal / tǝhult (tuaregue)',
    origin_language: 'Tuaregue (outra variedade berbere), via neologismo cabila',
    cognates: c(['pt', 'sem cognato — é uma criação do século XX, não uma palavra antiga']),
    evolution_note:
      'A saudação “azul” não é antiga: foi cunhada pelo linguista cabila Mouloud Mammeri a partir do tuaregue “uhal” (saudar) ou “tǝhult” (saudação). O Wikcionário em inglês nota algo curioso: o “z” de “azul” é, na verdade, uma adaptação equivocada — o berbere ancestral tinha um som “h” nessa posição, não um “z”, então a grafia com z pegou por engano e se popularizou assim mesmo, espalhando-se como saudação pan-berbere, inclusive no padrão marroquino.',
    transparent: false,
  },
  {
    word: 'lmed',
    root_word: 'ălməd (proto-berbere)',
    origin_language: 'Possivelmente empréstimo do púnico ou do hebraico bíblico',
    cognates: c(['pt', 'sem cognato direto, mas a raiz semítica l-m-d aparece também em “talmude” (do hebraico “lāmad”, aprender/ensinar)']),
    evolution_note:
      'Segundo o linguista Maarten Kossmann (2013), citado no Wikcionário em inglês, “lmed” (aprender, em cabila) pode vir de um empréstimo muito antigo do púnico ou do hebraico bíblico “lāmáḏ” — um contato entre o berbere e as línguas semíticas que antecede até a chegada do árabe ao norte da África. A raiz l-m-d é a mesma do hebraico “talmid” (aluno) e do português “talmude” (um livro de ensino judaico) — mas chegou ao berbere e ao português por rotas completamente diferentes, sem uma ligação direta entre as duas palavras.',
    transparent: false,
  },
  {
    word: 'axxam',
    root_word: 'ḵyām (árabe argelino, plural de ḵīma)',
    origin_language: 'Provavelmente árabe argelino, ou de uma raiz berbere nativa (debate em aberto)',
    cognates: c(['pt', 'sem cognato direto']),
    evolution_note:
      'O Wikcionário em inglês mostra um debate real entre linguistas: “axxam” (casa, em cabila) pode vir do árabe argelino “ḵyām” (plural de “ḵīma”, tenda/casa/cômodo, que por sua vez vem do árabe “ḵayma”, tenda) — mas também pode vir de uma raiz berbere nativa, “ɣ-y-m”, relacionada a “qqim” (sentar-se, ficar). A entrada nota que a hipótese do empréstimo árabe fica mais fraca porque o som “x” é raro em palavras de origem berbere bem documentada — um bom exemplo de como a etimologia nem sempre tem resposta fechada.',
    transparent: false,
  },
  {
    word: 'ḥemmel',
    root_word: 'ḥammala (árabe)',
    origin_language: 'Árabe, via árabe marroquino',
    cognates: c(['pt', 'sem cognato direto']),
    evolution_note:
      'O verbo “ḥemmel” (gostar de, amar) é um empréstimo do árabe marroquino “ḥammal”, que vem do árabe clássico “ḥammala”. É um dos muitos empréstimos árabes que entraram no vocabulário cotidiano berbere depois de treze séculos de contato entre as duas línguas no norte da África — mesmo com o tamazight sendo uma língua afro-asiática irmã do árabe (as duas vêm do mesmo tronco distante), não uma descendente dele.',
    transparent: false,
  },
  {
    word: 'aman',
    root_word: '*ama-n (proto-berbere), de *maʔ- (proto-afro-asiático)',
    origin_language: 'Herança direta do proto-berbere e do proto-afro-asiático',
    cognates: c(['ar', 'مَاء (māʼ, “água”) — mesma raiz afro-asiática distante *maʔ-']),
    evolution_note:
      '“Aman” (água) não é empréstimo de ninguém: é herança direta do proto-berbere “*ama-n”, que por sua vez vem do proto-afro-asiático “*maʔ-” — a mesma raiz muito antiga que deu a palavra árabe para água, “māʼ” (مَاء). O berbere e o árabe são ramos irmãos, bem distantes, da família afro-asiática: não têm relação com o português (língua indo-europeia), mas essa palavra específica mostra um parentesco real e profundo entre as duas línguas do norte da África.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_ZGH: [string, string][] = [
  ['Isem-nnk?', 'Qual é o seu nome? (a um homem) — apresente-se em tamazight.'],
  ['Isem-nnm?', 'Qual é o seu nome? (a uma mulher) — apresente-se em tamazight.'],
  ['Amek?', 'Como foi o seu dia? Conte em poucas frases.'],
  ['Dari axxam…', 'Descreva a sua casa: grande (ameqqran) ou pequena (amecṭuḥ)?'],
];

export const SHADOWING_ZGH: [string, string][] = [
  ['Azul! Nekk, d Linu.', 'Oi! Eu sou o Linu.'],
  ['Tanemmirt! Ar tufat.', 'Obrigado! Até logo.'],
  ['Ur ssnx.', 'Eu não sei.'],
  ['Aman d uɣrum.', 'Água e pão.'],
];
