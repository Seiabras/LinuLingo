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
    prompt: 'Kálhe phániri?',
    content: 'Hániri édzaua.',
    reference: 'Nhúniri édzaua.',
  },
  {
    author_name: 'Helena 🇧🇷',
    prompt: 'Kenakúda palána?',
    content: 'Dzama palána.',
    reference: 'Dzamaápa palána.',
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
        bot: 'Kálhe phániri?',
        botTranslation: 'Onde está o seu pai?',
        keywords: ['nhúniri', 'hániri', 'édzaua'],
        suggestions: ['Nhúniri édzaua.', 'Nhúniri.'],
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
    word: 'Tsíinu',
    root_word: 'tsíinu',
    origin_language: 'Baniwa',
    cognates: c(['kpc', 'Péduru (nome próprio, outro nome independente)']),
    evolution_note:
      '“Tsíinu” (cão) é citado em pt.wikipedia.org/wiki/Língua_baniwa (citando Ramirez 2001a) como exemplo de nome INDEPENDENTE: funciona sozinho, sem prefixo pessoal — ao contrário dos termos de parentesco deste pacote (“hániri”, pai; “hádua”, mãe), que são nomes DEPENDENTES e quase sempre aparecem com um prefixo possessivo (“nhúniri”, meu pai).',
    transparent: false,
  },
  {
    word: 'Kéepe',
    root_word: 'ka- + íipe',
    origin_language: 'Baniwa',
    cognates: c(['kpc', 'méepe (magro, ma- + íipe)']),
    evolution_note:
      '“Kéepe” (gordo) nasce da junção do prefixo comitativo “ka-” (“com”) à raiz “íipe” (carne): literalmente, “com carne”. O oposto, “méepe” (magro), usa o prefixo privativo “ma-” (“sem”) na mesma raiz: “sem carne”. O par é citado em en.wikipedia.org/wiki/Baniwa_of_Içana_language como exemplo direto desses dois prefixos em ação.',
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
  ['Kálhe phániri?', 'Onde está o seu pai?'],
  ['Kenakúda wéri?', 'Quantos filhos temos?'],
  ['Théewa núawa.', 'Amanhã eu vou.'],
  // Ramirez (2001), p. 99 e p. 286
  ['Kúaka heekúapika pándza?', 'Que dia é hoje?'],
  ['Nuakawátsa nuitsaléta théewa.', 'Vou pescar amanhã.'],
];

export const SHADOWING_KPC: [string, string][] = [
  ['Nukápa.', 'Eu vejo.'],
  ['Pikápa nhua.', 'Tu me vês.'],
  ['Ápa íita, dzamaápa palána.', 'Uma canoa, duas bananas.'],
  ['Ñáme kéeruakanhua.', 'Não estou zangado.'],
  // Ramirez, “Dicionário da Língua Baniwa” (2001), p. 99, 137 e 254; “o” do dicionário escrito “u”
  ['Heekúapi whaa!', 'Bom dia!'],
  ['Nímheeni mátsia.', 'Dormi bem.'],
  ['Pándzanialihi, wáa wáiñha!', 'Agora, vamos comer!'],
];
