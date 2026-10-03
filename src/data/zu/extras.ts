import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo isiZulu). */
export const COMMUNITY_ZU: CommunitySeed[] = [
  {
    author_name: 'Marina 🇧🇷',
    prompt: 'Sawubona! Unjani?',
    content: 'Sawubona.',
    reference: 'Ngiyaphila, ngiyabonga.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'Ungubani igama lakho?',
    content: 'Ngiyaphila.',
    reference: 'Igama lami nginguPedro.',
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Kunye, kubili, kuthathu…',
    content: 'Kunye, kuthathu.',
    reference: 'Kunye, kubili, kuthathu, kune…',
  },
];

/**
 * Cenários de conversa. “Sawubona” (uma pessoa) × “Sanibonani” (várias pessoas, ou respeito a alguém
 * mais velho ou a um estranho) é a própria marca de registro do isiZulu confirmada no Wiktionary em
 * inglês — por isso o segundo cenário é formal e aponta “Sawubona” como quebra de registro diante de
 * alguém mais velho.
 */
export const SCENARIOS_ZU: ScenarioSeed[] = [
  {
    id: 'zu-s1',
    title: 'Sawubona! Encontro informal',
    emoji: '👋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um colega da sua idade',
    description: 'Uma conversa curta e informal: cumprimento, como você está e o seu nome.',
    turns: [
      {
        bot: 'Sawubona! Unjani?',
        botTranslation: 'Oi! Como você está?',
        keywords: ['ngiyaphila'],
        suggestions: ['Ngiyaphila, ngiyabonga.'],
      },
      {
        bot: 'Ungubani igama lakho?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['igama', 'ngu'],
        suggestions: ['Igama lami nginguLinu.'],
      },
    ],
  },
  {
    id: 'zu-s2',
    title: 'Sanibonani! Cumprimentando alguém mais velho',
    emoji: '🙏',
    cefr: 'A1',
    register: 'formal',
    persona: 'Uma pessoa mais velha da comunidade, tratada com respeito',
    description:
      'No isiZulu, “Sanibonani” (em vez de “Sawubona”) também marca respeito por alguém mais velho ou por um estranho, não só o plural — uma distinção de registro confirmada no Wiktionary em inglês.',
    turns: [
      {
        bot: 'Sanibonani! Ninjani?',
        botTranslation: 'Bom dia/boa tarde! Como está (o senhor/a senhora)?',
        keywords: ['ngiyaphila'],
        suggestions: ['Ngiyaphila, ngiyabonga.'],
        registerBreakers: ['Sawubona'],
      },
    ],
  },
];

/**
 * Etimologia de palavras do isiZulu. A língua não é parente do português (é banta, da família
 * Níger-Congo): por isso as notas explicam ou a formação interna da palavra dentro do próprio isiZulu,
 * ou os empréstimos do africâner — o único parentesco lexical direto encontrado nas fontes consultadas,
 * fruto do contato colonial, não de ancestralidade comum.
 */
export const ETYMOLOGY_ZU: EtymologySeed[] = [
  {
    word: 'sawubona',
    root_word: 'si- + -ya- + -ku- + bona',
    origin_language: 'isiZulu (formação interna)',
    cognates: c(['zu', 'bona (ver, enxergar)']),
    evolution_note:
      '“Sawubona” é uma contração de “siyakubona” (nós te vemos): “si-” (nós) + “-ya-” (presente) + “-ku-” (concordância de objeto, você) + “-bona” (ver) — segundo o Wiktionary em inglês. Cumprimentar é, literalmente, reconhecer a presença de alguém.',
    transparent: false,
  },
  {
    word: 'ikati',
    root_word: 'kat (africâner)',
    origin_language: 'Africâner',
    cognates: c(['af', 'kat (gato)']),
    evolution_note:
      '“Ikati” (gato) é um empréstimo do africâner “kat”, segundo o Wiktionary em inglês — os gatos domésticos não são nativos do sul da África, e a palavra entrou no isiZulu junto com o animal, durante o contato colonial.',
    transparent: false,
  },
  {
    word: 'isikole',
    root_word: 'skool (africâner)',
    origin_language: 'Africâner',
    cognates: c(['af', 'skool (escola)']),
    evolution_note:
      '“Isikole” (escola) vem do africâner “skool” (que por sua vez vem do neerlandês “school”), por rebracketing, segundo o Wiktionary em inglês — um empréstimo ligado à chegada da escolarização formal, no modelo europeu, durante o período colonial.',
    transparent: false,
  },
  {
    word: 'ukudla',
    root_word: 'uku- + dla',
    origin_language: 'isiZulu (formação interna)',
    cognates: c(['zu', 'dla (comer)']),
    evolution_note:
      '“Ukudla” (comida) nasce do prefixo infinitivo “uku-” (equivalente ao “-r” do infinitivo em português) grudado no verbo “-dla” (comer) — literalmente algo como “o comer”, usado como substantivo para “comida”, segundo o Wiktionary em inglês.',
    transparent: false,
  },
  {
    word: 'ngiyaphila',
    root_word: 'ngi- + -ya- + phila',
    origin_language: 'isiZulu (formação interna)',
    cognates: c(['zu', 'ngi- (eu)'], ['zu', 'phila (estar bem, estar vivo)']),
    evolution_note:
      '“Ngiyaphila” (eu estou bem) junta o prefixo de sujeito “ngi-” (eu), o infixo de presente “-ya-” (usado aqui porque não há objeto depois do verbo) e a raiz “-phila” (estar bem, estar vivo) — a resposta padrão para “Unjani?”, segundo o Wiktionary em inglês.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_ZU: [string, string][] = [
  ['Ungubani igama lakho?', 'Qual é o seu nome?'],
  ['Yini lokhu?', 'O que é isso?'],
  ['Ubani lo muntu?', 'Quem é essa pessoa?'],
  ['Kunye, kubili, kuthathu, kune, isihlanu…', 'Um, dois, três, quatro, cinco…'],
];

export const SHADOWING_ZU: [string, string][] = [
  ['Sawubona! Unjani?', 'Oi! Como você está?'],
  ['Ngiyaphila, ngiyabonga.', 'Estou bem, obrigado.'],
  ['Ungubani igama lakho?', 'Qual é o seu nome?'],
  ['Igama lami nginguLinu.', 'Meu nome é Linu.'],
  ['Ngibona ilanga.', 'Eu vejo o sol.'],
  ['Angazi.', 'Eu não sei.'],
];
