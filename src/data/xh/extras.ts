import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo isiXhosa). */
export const COMMUNITY_XH: CommunitySeed[] = [
  {
    author_name: 'Marina 🇧🇷',
    prompt: 'Molo! Unjani?',
    content: 'Molo.',
    reference: 'Ndiyaphila, enkosi.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'Ngubani igama lakho?',
    content: 'Ndiyaphila.',
    reference: 'Igama lam nguPedro.',
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Nye, mbini, ntathu…',
    content: 'Nye, ntathu.',
    reference: 'Nye, mbini, ntathu, ne…',
  },
];

/**
 * Cenários de conversa. “Molo” (uma pessoa) × “Molweni” (várias pessoas, ou respeito a alguém mais
 * velho) é a própria marca de registro do isiXhosa citada no roteiro de conversação da Wikivoyage — por
 * isso o segundo cenário é formal e aponta “Molo” como quebra de registro diante de alguém mais velho.
 */
export const SCENARIOS_XH: ScenarioSeed[] = [
  {
    id: 'xh-s1',
    title: 'Molo! Encontro informal',
    emoji: '👋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um colega da sua idade',
    description: 'Uma conversa curta e informal: cumprimento, como você está e o seu nome.',
    turns: [
      {
        bot: 'Molo! Unjani?',
        botTranslation: 'Oi! Como você está?',
        keywords: ['ndiyaphila'],
        suggestions: ['Ndiyaphila, enkosi.'],
      },
      {
        bot: 'Ngubani igama lakho?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['igama', 'ngu'],
        suggestions: ['Igama lam nguLinu.'],
      },
    ],
  },
  {
    id: 'xh-s2',
    title: 'Molweni! Cumprimentando alguém mais velho',
    emoji: '🙏',
    cefr: 'A1',
    register: 'formal',
    persona: 'Uma pessoa mais velha da comunidade, tratada com respeito',
    description:
      'No isiXhosa, “Molweni” (em vez de “Molo”) também marca respeito por alguém mais velho, não só o plural — uma distinção de registro citada no roteiro de conversação da Wikivoyage.',
    turns: [
      {
        bot: 'Molweni! Ninjani?',
        botTranslation: 'Bom dia/boa tarde! Como está (o senhor/a senhora)?',
        keywords: ['ndiyaphila'],
        suggestions: ['Ndiyaphila, enkosi.'],
        registerBreakers: ['Molo'],
      },
    ],
  },
];

/**
 * Etimologia de palavras do isiXhosa. A língua não é parente do português (é banta, da família
 * Níger-Congo): por isso as notas explicam ou a formação interna da palavra dentro do próprio isiXhosa,
 * ou os empréstimos do africâner — o único parentesco lexical direto encontrado nas fontes consultadas,
 * fruto do contato colonial, não de ancestralidade comum.
 */
export const ETYMOLOGY_XH: EtymologySeed[] = [
  {
    word: 'ikati',
    root_word: 'kat (africâner)',
    origin_language: 'Africâner',
    cognates: c(['af', 'kat (gato)']),
    evolution_note:
      '“Ikati” (gato) é um empréstimo do africâner “kat”, segundo o Wiktionary em inglês — os gatos domésticos não são nativos do sul da África, e a palavra entrou no isiXhosa junto com o animal, durante o contato colonial.',
    transparent: false,
  },
  {
    word: 'isikolo',
    root_word: 'skool (africâner)',
    origin_language: 'Africâner',
    cognates: c(['af', 'skool (escola)']),
    evolution_note:
      '“Isikolo” (escola) vem do africâner “skool” (que por sua vez vem do neerlandês “school”), segundo o Wiktionary em inglês — um empréstimo ligado à chegada da escolarização formal, no modelo europeu, durante o período colonial.',
    transparent: false,
  },
  {
    word: 'ukutya',
    root_word: 'uku- + tya',
    origin_language: 'isiXhosa (formação interna)',
    cognates: c(['xh', 'tya (comer)']),
    evolution_note:
      '“Ukutya” (comida) nasce do prefixo infinitivo “uku-” (equivalente ao “-r” do infinitivo em português) grudado no verbo “tya” (comer) — literalmente algo como “o comer”, usado como substantivo para “comida”, segundo o Wiktionary em inglês.',
    transparent: false,
  },
  {
    word: 'ngubani',
    root_word: 'ngu- + bani',
    origin_language: 'isiXhosa (formação interna)',
    cognates: c(['xh', 'ngu- (cópula “é”)'], ['xh', 'bani (quem)']),
    evolution_note:
      '“Ngubani” (quem é?) é a cópula “ngu-” (é) grudada em “bani” (quem) — a mesma cópula que forma “ngumama” (é mãe) e “ngutata” (é pai), citada no roteiro de conversação da Wikivoyage e no artigo Xhosa_language da Wikipédia em inglês.',
    transparent: false,
  },
  {
    word: 'ndiyaphila',
    root_word: 'ndi- + -ya- + phila',
    origin_language: 'isiXhosa (formação interna)',
    cognates: c(['xh', 'ndi- (eu)'], ['xh', 'phila (estar bem, saudável)']),
    evolution_note:
      '“Ndiyaphila” (eu estou bem) junta o prefixo de sujeito “ndi-” (eu), o marcador de presente “-ya-” (obrigatório aqui porque não há objeto depois do verbo) e a raiz “phila” (estar bem, saudável) — a resposta padrão para “Unjani?” no roteiro de conversação da Wikivoyage.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_XH: [string, string][] = [
  ['Ngubani igama lakho?', 'Qual é o seu nome?'],
  ['Ufuna ntoni?', 'O que você quer?'],
  ['Ubona ntoni?', 'O que você vê?'],
  ['Nye, mbini, ntathu, ne, ntlanu…', 'Um, dois, três, quatro, cinco…'],
];

export const SHADOWING_XH: [string, string][] = [
  ['Molo! Unjani?', 'Oi! Como você está?'],
  ['Ndiyaphila, enkosi.', 'Estou bem, obrigado.'],
  ['Ngubani igama lakho?', 'Qual é o seu nome?'],
  ['Igama lam nguLinu.', 'Meu nome é Linu.'],
  ['Ndibona ilanga.', 'Eu vejo o sol.'],
  ['Andiyazi.', 'Eu não sei.'],
];
