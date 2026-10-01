import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo baniwa). */
export const COMMUNITY_KPC: CommunitySeed[] = [
  {
    author_name: 'Fernanda 🇧🇷',
    prompt: 'Káphaa phía Walimanai?',
    content: 'Walimanai.',
    reference: 'Nhúa Walimanai.',
  },
  {
    author_name: 'Gabriel 🇧🇷',
    prompt: 'Kalhe pihániri?',
    content: 'Hániri édzaua.',
    reference: 'Nu-hániri édzaua.',
  },
  {
    author_name: 'Helena 🇧🇷',
    prompt: 'Kenakuda palana?',
    content: 'Dzama palana.',
    reference: 'Dzamaápa palana.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas não registram uma forma “formal” de tratamento separada
 * da informal no baniwa (como o “você”/“o senhor” do português) — por isso o cenário é informal, como
 * já acontece com o tukano, o kaingang e o xavante neste app.
 */
export const SCENARIOS_KPC: ScenarioSeed[] = [
  {
    id: 'kpc-s1',
    title: 'Chegando numa comunidade do Içana',
    emoji: '🛶',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador de uma comunidade do médio rio Içana',
    description:
      'As fontes consultadas não documentam uma forma “formal” separada da informal no baniwa: o mesmo jeito de falar (os mesmos pronomes e prefixos) serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Káphaa phía Walimanai?',
        botTranslation: 'Você é walimanai?',
        keywords: ['nhúa', 'walimanai'],
        suggestions: ['Nhúa Walimanai.'],
      },
      {
        bot: 'Kalhe pihániri?',
        botTranslation: 'Onde está o seu pai?',
        keywords: ['nu-hániri', 'hániri', 'édzaua'],
        suggestions: ['Nu-hániri édzaua.', 'Nu-hániri.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras baniwa. O baniwa NÃO é parente do português nem do tupi-guarani ou do
 * tukano: por isso, como nos outros pacotes de língua indígena deste app, as notas explicam a
 * formação interna das palavras dentro do próprio baniwa (prefixos, composição, nomes dependentes x
 * independentes), não cognatos de origem com o português.
 */
export const ETYMOLOGY_KPC: EtymologySeed[] = [
  {
    word: 'Walimanai',
    root_word: 'walimanai',
    origin_language: 'Baniwa',
    cognates: c(['kpc', 'waferinaipe (os antepassados ancestrais)']),
    evolution_note:
      '“Walimanai”, a autodesignação do povo e da língua, é interpretada como “os outros novos que vão nascer” — em contraste direto com “waferinaipe”, os heróis culturais e divindades ancestrais que, segundo a cosmologia baniwa, construíram o mundo para os vivos de hoje. A própria etnia não tem, segundo a Wikipédia em português (citando Ramirez 2001a), um nome específico só para a língua: usa-se o mesmo endônimo do povo. (fonte: pt.wikipedia.org/wiki/Língua_baniwa; povosindigenas.org.br/pt/Povo:Baniwa)',
    transparent: false,
  },
  {
    word: 'Nhiãperikuli',
    root_word: 'nhiãperikuli',
    origin_language: 'Baniwa',
    cognates: c(['kpc', 'Kuwai (filho de Nhiãperikuli)']),
    evolution_note:
      '“Nhiãperikuli”, o nome do Criador e Transformador na cosmologia baniwa, é traduzido literalmente como “ele dentro do osso” (fonte: povosindigenas.org.br/pt/Povo:Baniwa, ISA). Seu filho Kuwai é a figura central dos ritos de iniciação dos jovens.',
    transparent: false,
  },
  {
    word: 'Tsíino',
    root_word: 'tsíino',
    origin_language: 'Baniwa',
    cognates: c(['kpc', 'Péduru (nome próprio, outro nome independente)']),
    evolution_note:
      '“Tsíino” (cão) é citado em pt.wikipedia.org/wiki/Língua_baniwa (citando Ramirez 2001a) como exemplo de nome INDEPENDENTE: funciona sozinho, sem prefixo pessoal — ao contrário dos termos de parentesco deste pacote (“hániri”, pai; “hadua”, mãe), que são nomes DEPENDENTES e quase sempre aparecem com um prefixo possessivo (“nu-hániri”, meu pai).',
    transparent: false,
  },
  {
    word: 'Keepe',
    root_word: 'ka- + iipe',
    origin_language: 'Baniwa',
    cognates: c(['kpc', 'meepe (magro, ma- + iipe)']),
    evolution_note:
      '“Keepe” (gordo) nasce da junção do prefixo comitativo “ka-” (“com”) à raiz “iipe” (carne): literalmente, “com carne”. O oposto, “meepe” (magro), usa o prefixo privativo “ma-” (“sem”) na mesma raiz: “sem carne”. O par é citado em en.wikipedia.org/wiki/Baniwa_of_Içana_language como exemplo direto desses dois prefixos em ação.',
    transparent: false,
  },
  {
    word: 'Pudali',
    root_word: 'pudali',
    origin_language: 'Baniwa',
    cognates: c(['kpc', 'dabukuri (outro nome para a mesma festa, mais usado no Alto Rio Negro)']),
    evolution_note:
      '“Pudali” nomeia uma festa cerimonial de troca: segundo a dissertação de Ovídio da Silva Camico (UFAM, 2023, p. 11), é a “doação de qualquer tipo de objeto ao seu colega no momento de se encontrar”, uma prática de reciprocidade entre parentes também chamada “dabukuri” nos estudos sobre o Alto Rio Negro. Variações da mesma festa têm nomes próprios, como “kuliriápan” (dança dos surubi), segundo pib.socioambiental.org/pt/Povo:Baniwa.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_KPC: [string, string][] = [
  ['Káphaa phía Walimanai?', 'Você é walimanai?'],
  ['Kalhe pihániri?', 'Onde está o seu pai?'],
  ['Kenakuda wairi?', 'Quantos filhos temos?'],
  ['Théewa núawa.', 'Amanhã eu vou.'],
];

export const SHADOWING_KPC: [string, string][] = [
  ['Nukapa.', 'Eu vejo.'],
  ['Pikapanhua.', 'Tu me vês.'],
  ['Apá íita, dzamaápa palana.', 'Uma canoa, duas bananas.'],
  ['Ñame kéeruakanhua.', 'Não estou zangado.'],
];
