import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no okinawano). */
export const COMMUNITY_RYU: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Haisai! Unju tā yan?',
    content: 'Haitai! Wan Bruno yan.',
    reference: 'Haisai! Wan Bruno yan.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Kuri nū yan?',
    content: 'Kuri yan gōyā.',
    reference: 'Kuri gōyā yan.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Unju tā yan?',
    content: 'Unju Diego yan.',
    reference: 'Wan Diego yan.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_RYU: ScenarioSeed[] = [
  {
    id: 'ryu-s1',
    title: 'Haisai nu machi',
    emoji: '🏮',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma vendedora gentil numa banca em Naha',
    description: 'Você passa por uma banca de rua em Naha e puxa conversa com a vendedora. É uma conversa informal.',
    turns: [
      {
        bot: 'Haisai! Unju tā yan?',
        botTranslation: 'Oi! Quem é você?',
        keywords: ['wan', 'yan'],
        suggestions: ['Haitai! Wan Ana yan.', 'Hai! Wan Ana yan.'],
      },
      {
        bot: 'Mensōre! Kuri nū yan?',
        botTranslation: 'Bem-vindo! O que é isto?',
        keywords: ['gōyā', 'yan'],
        suggestions: ['Kuri gōyā yan.'],
      },
    ],
  },
];

/**
 * Palavras do okinawano com o ancestral japônico comum e o parente no japonês padrão (pacote `ja`,
 * já neste app) — nunca com o português, já que o okinawano não é parente do português. Fontes: a
 * tabela “Correspondences between Japanese and Okinawan” de en.wikipedia.org/wiki/Okinawan_language,
 * mais as páginas individuais do Wiktionary citadas em vocabulario.ts (肝/chimu).
 */
export const ETYMOLOGY_RYU: EtymologySeed[] = [
  {
    word: 'あみ',
    root_word: '*ame',
    origin_language: 'Protojapônico',
    cognates: c(['ja', 'ame (雨)']),
    evolution_note: 'O e final do japonês “ame” (chuva) sobe para i no okinawano: ame → ami. É a mesma mudança regular (e → i) documentada na tabela de correspondências entre japonês e okinawano.',
    transparent: false,
  },
  {
    word: 'てぃー',
    root_word: '*te',
    origin_language: 'Protojapônico',
    cognates: c(['ja', 'te (手)']),
    evolution_note: 'Mesma mudança e → i do exemplo de “ami” (chuva): o japonês “te” (mão) vira “tī” no okinawano, com a vogal alongada.',
    transparent: false,
  },
  {
    word: 'うみ',
    root_word: '*umi',
    origin_language: 'Protojapônico',
    cognates: c(['ja', 'umi (海)']),
    evolution_note: 'Aqui não houve mudança nenhuma: “umi” (mar) é a mesma palavra no japonês e no okinawano, herdada sem alteração do ancestral japônico comum — nem toda palavra okinawana diverge do japonês.',
    transparent: false,
  },
  {
    word: 'ちむ',
    root_word: '*kimo',
    origin_language: 'Protojapônico',
    cognates: c(['ja', 'kimo (肝)']),
    evolution_note: 'Duas mudanças de uma vez: o k vira ch antes de i (palatalização) e o o final sobe para u: kimo → chimu. A palavra guardou o sentido antigo de “fígado” e ganhou também o sentido figurado de “coração, sentimento” (como no composto “chimugukuru”, coração bondoso) — sentido que o “kimo” japonês não tem.',
    transparent: false,
  },
  {
    word: 'とぅー',
    root_word: '*töo',
    origin_language: 'Protojapônico',
    cognates: c(['ja', 'tō (十)']),
    evolution_note: 'O o do japonês “tō” (dez) sobe para u no okinawano: tō → tū (escrito とぅー). É o único numeral nativo do okinawano que vai até aqui: acima de dez, a língua usa diretamente os números do japonês (veja a aba Gramática e o cartão da unidade 2).',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_RYU: [string, string][] = [
  ['Unju tā yan?', 'Quem é você?'],
  ['Kuri nū yan?', 'O que é isto?'],
  ['Unju chā yan?', 'Como você é?'],
  ['Wan uchinaanchu yan.', 'Eu sou okinawano(a).'],
];

export const SHADOWING_RYU: [string, string][] = [
  ['Haisai!', 'Oi! (saudação informal dita por um homem)'],
  ['Mensōre!', 'Bem-vindo(a)!'],
  ['Nifēdēbiru!', 'Muito obrigado(a)!'],
  ['Wan uchinaanchu yan.', 'Eu sou okinawano(a).'],
];
