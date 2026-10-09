import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros no alto-alemão médio —
 * sobretudo confundir a conjugação de “sīn” pelas pessoas, ou trocar “du”/“ir” pelo número errado).
 */
export const COMMUNITY_GMH: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Bist du ritter?',
    content: 'Ja, ich bist ritter.',
    reference: 'Ja, ich bin ritter.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ist daȥ dīn hunt?',
    content: 'Ja, daȥ ist du hunt.',
    reference: 'Ja, daȥ ist mīn hunt.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Birt ir ritter?',
    content: 'Ja, wir birt ritter.',
    reference: 'Ja, wir birn ritter.',
  },
];

/**
 * Cenário de conversa. Sem evidência confiável de “ir” funcionando como cortesia dirigida a uma só
 * pessoa no alto-alemão médio (ver a lição de gramática “du e ir”) — por isso este cenário usa “du”
 * (singular) sem marcar registro formal, diferente dos cenários do francês antigo e do castelhano
 * medieval, que têm um “vos” de cortesia bem documentado.
 */
export const SCENARIOS_GMH: ScenarioSeed[] = [
  {
    id: 'gmh-s1',
    title: 'No portão do castelo',
    emoji: '🏰',
    cefr: 'A1',
    register: 'informal',
    persona: 'Parzival, um cavaleiro',
    description: 'Parzival te recebe no portão do castelo da Suábia.',
    turns: [
      {
        bot: 'Willekomen! Mīn nāme ist Parzival. Unde du?',
        botTranslation: 'Bem-vindo! O meu nome é Parzival. E tu?',
        keywords: ['nāme', 'ist'],
        suggestions: ['Mīn nāme ist Linu.', 'Mīn nāme ist Auðr.'],
      },
      {
        bot: 'Bist du ritter?',
        botTranslation: 'Tu és cavaleiro?',
        keywords: ['bin', 'ritter', 'vriunt'],
        suggestions: ['Ja, ich bin ritter.', 'Nein, ich bin vriunt.'],
      },
    ],
  },
];

/**
 * Palavras do alto-alemão médio e a forma que elas têm hoje no alemão moderno (`de`, já completo
 * neste aplicativo) — o alto-alemão médio é ancestral direto dele, então a etimologia aqui aponta
 * para a FRENTE, ao contrário dos idiomas vivos do aplicativo. Fontes: Wiktionary (seção "Middle
 * High German" de cada palavra, com etimologia do alto-alemão antigo).
 */
export const ETYMOLOGY_GMH: EtymologySeed[] = [
  {
    word: 'vater',
    root_word: 'vater',
    origin_language: 'Alto-alemão médio',
    cognates: c(['de', 'Vater']),
    evolution_note: 'A grafia moderna “Vater” ganha maiúscula (regra geral do alemão para substantivos) e o “v” passou a “f”-sonoro, mas a palavra é quase a mesma desde o alto-alemão médio.',
    transparent: true,
  },
  {
    word: 'muoter',
    root_word: 'muoter',
    origin_language: 'Alto-alemão médio',
    cognates: c(['de', 'Mutter']),
    evolution_note: 'O ditongo “uo” simplificou para “u” no alemão moderno (“Mutter”), mas a palavra é reconhecível desde o alto-alemão médio.',
    transparent: true,
  },
  {
    word: 'hūs',
    root_word: 'hūs',
    origin_language: 'Alto-alemão médio',
    cognates: c(['de', 'Haus']),
    evolution_note: 'A vogal longa “ū” ditongou para “au” no alemão moderno (“Haus”) — a mesma mudança de som que também deu “Maus” (de “mūs”) e “Zaun” (de “zūn”).',
    transparent: true,
  },
  {
    word: 'wīn',
    root_word: 'wīn',
    origin_language: 'Alto-alemão médio',
    cognates: c(['de', 'Wein']),
    evolution_note: 'A mesma ditongação de “ī” para “ei” que deu “Haus/Maus” também deu “Wein” (vinho) — do latim “vinum”, a mesma raiz do português “vinho”.',
    transparent: true,
  },
  {
    word: 'ich',
    root_word: 'ich',
    origin_language: 'Alto-alemão médio',
    cognates: c(['de', 'ich']),
    evolution_note: 'O pronome de primeira pessoa quase não mudou em 800 anos: “ich” já era exatamente assim no alto-alemão médio.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_GMH: [string, string][] = [
  ['Bist du ritter?', 'Tu és cavaleiro?'],
  ['Ist daȥ dīn hunt?', 'Esse é o teu cachorro?'],
  ['Wir birn vriunt.', 'Nós somos amigos.'],
  ['Ist dër wīn rōt?', 'O vinho é vermelho?'],
];

export const SHADOWING_GMH: [string, string][] = [
  ['Danc, vriunt!', 'Obrigado, amigo!'],
  ['Ich bin ritter, unde ich bin vriunt.', 'Eu sou cavaleiro, e eu sou amigo.'],
  ['Daȥ ist mīn hūs.', 'Essa é a minha casa.'],
  ['Wir birn vriunt.', 'Nós somos amigos.'],
];
