import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no eslavo eclesiástico antigo). */
export const COMMUNITY_CU: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Како имѧ твоѥ, и имаши ли братъ или сестра?',
    content: 'Имѧ моѥ ѥстъ Бруно. Азъ ѥсмь братъ.',
    reference: 'Имѧ моѥ ѥстъ Бруно. Азъ имамь братъ.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Домъ твои ли ѥстъ малъ?',
    content: 'Домъ мои ѥстъ добръ.',
    reference: 'Домъ мои ѥстъ малъ.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Имаши ли хлѣбъ и вино?',
    content: 'Имамь хлѣбъ, не имамь вода.',
    reference: 'Имамь хлѣбъ, не имамь вино.',
  },
];

/** Cenários de conversa. O eslavo eclesiástico antigo tratava quase todo mundo com "тꙑ". */
export const SCENARIOS_CU: ScenarioSeed[] = [
  {
    id: 'cu-s1',
    title: 'Na Escola de Preslav',
    emoji: '📜',
    cefr: 'A1',
    register: 'informal',
    persona: 'Clemente, um monge de Preslav',
    description: 'Clemente te encontra na Escola Literária de Preslav e começa a conversar. É informal: a língua tratava quase todo mundo com "тꙑ", sem uma forma equivalente ao "você" formal do português.',
    turns: [
      {
        bot: 'Имаши ли хлѣбъ или вино?',
        botTranslation: 'Você tem pão ou vinho?',
        keywords: ['хлѣбъ', 'вино', 'имѣти'],
        suggestions: ['Имамь хлѣбъ.', 'Имамь вино.'],
      },
      {
        bot: 'И имѧ твоѥ, како ѥстъ?',
        botTranslation: 'E o seu nome, qual é?',
        keywords: ['имѧ', 'ѥстъ'],
        suggestions: ['Имѧ моѥ ѥстъ Лину.'],
      },
    ],
  },
];

/**
 * Palavras do eslavo eclesiástico antigo e a sua forma no russo moderno, já completo no app — o
 * eslavo eclesiástico antigo é o ancestral literário comum de quase todas as línguas eslavas, então
 * a etimologia aqui aponta para a FRENTE, ao contrário da maioria dos outros idiomas do app. Fontes:
 * Wiktionary (en.wiktionary.org, verbetes individuais, seção "Old Church Slavonic" + etimologia/
 * descendentes russos).
 */
export const ETYMOLOGY_CU: EtymologySeed[] = [
  {
    word: 'домъ',
    root_word: 'домъ',
    origin_language: 'Eslavo eclesiástico antigo',
    cognates: c(['ru', 'дом']),
    evolution_note: 'O russo moderno só perdeu o "ъ" final (que, naquela época, ainda era uma vogal curta pronunciada) — a palavra em si não mudou quase nada em mais de mil anos.',
    transparent: true,
  },
  {
    word: 'вода',
    root_word: 'вода',
    origin_language: 'Eslavo eclesiástico antigo',
    cognates: c(['ru', 'вода']),
    evolution_note: 'Uma das palavras mais estáveis de toda a família eslava: a grafia e o sentido não mudaram nada entre o eslavo eclesiástico antigo e o russo de hoje.',
    transparent: true,
  },
  {
    word: 'мати',
    root_word: 'мати',
    origin_language: 'Eslavo eclesiástico antigo',
    cognates: c(['ru', 'мать']),
    evolution_note: 'O russo moderno encurtou a terminação "-и" e manteve o "ь" só como marca de palavra feminina — mas a raiz "мат-" é a mesma de mais de mil anos atrás.',
    transparent: true,
  },
  {
    word: 'братъ',
    root_word: 'братъ',
    origin_language: 'Eslavo eclesiástico antigo',
    cognates: c(['ru', 'брат']),
    evolution_note: 'Só o "ъ" final (uma vogal curta na época) deixou de ser escrito — a palavra chegou praticamente idêntica ao russo moderno.',
    transparent: true,
  },
  {
    word: 'чловѣкъ',
    root_word: 'чловѣкъ',
    origin_language: 'Eslavo eclesiástico antigo',
    cognates: c(['ru', 'человек']),
    evolution_note: 'A vogal "ѣ" (jatь) virou "е" no russo moderno, e o "ъ" final some — mas a palavra continua clara e reconhecível depois de mais de mil anos.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_CU: [string, string][] = [
  ['Како имѧ твоѥ?', 'Qual é o seu nome?'],
  ['Имаши ли братъ или сестра?', 'Você tem irmão ou irmã?'],
  ['Домъ твои ли ѥстъ малъ?', 'Sua casa é pequena?'],
  ['Хлѣбъ твои ли ѥстъ бѣлъ?', 'O seu pão é branco?'],
];

export const SHADOWING_CU: [string, string][] = [
  ['Азъ ѥсмь Лину, и ѥсмь чловѣкъ добръ.', 'Eu sou Linu, e eu sou uma pessoa boa.'],
  ['Не ѥсмь отъ Моравꙑ, ѥсмь отъ Бразилии.', 'Eu não sou da Morávia, eu sou do Brasil.'],
  ['Азъ имамь братъ и сестра.', 'Eu tenho um irmão e uma irmã.'],
  ['Хлѣбъ ѥстъ бѣлъ, и вино ѥстъ добро.', 'O pão é branco, e o vinho é bom.'],
];
