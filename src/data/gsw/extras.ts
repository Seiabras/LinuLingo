import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no suíço-alemão). */
export const COMMUNITY_GSW: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Dis Name, dini Stadt und dini Familie.',
    content: 'Grüezi! Ich bin Bruno und ich bin vo Curitiba. Ich ha ein Brüeder.',
    reference: 'Grüezi! Ich heisse Bruno und ich bi vo Curitiba. Ich ha en Brüeder.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Was ässisch’ du am Morge?',
    content: 'Ich ässe Brot und Käse.',
    reference: 'Ich ässe Brot und Chäs.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Wie isch dis Huus?',
    content: 'Mis Huus isch nöd gross.',
    reference: 'Mis Huus isch chli.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_GSW: ScenarioSeed[] = [
  {
    id: 'gsw-s1',
    title: 'En Kafi z’Züri',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, e Fründin vom Schwiizertüütsch-Kurs',
    description: 'Anna convida você para um café na cidade velha de Zurique. É uma conversa entre amigos: use “du”.',
    turns: [
      {
        bot: 'Hoi! Was wotsch’ du trinke?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['kafi', 'wasser', 'milch'],
        suggestions: ['En Kafi, bitte.', 'En Wasser, bitte.'],
      },
      {
        bot: 'Vo wo bisch du?',
        botTranslation: 'De onde você é?',
        keywords: ['ich bi vo'],
        suggestions: ['Ich bi vo São Paulo.', 'Ich bi vo Salvador.'],
      },
    ],
  },
];

/** Palavras do suíço-alemão comparadas com o alemão padrão. */
export const ETYMOLOGY_GSW: EtymologySeed[] = [
  {
    word: 'chind',
    root_word: 'Kind',
    origin_language: 'Alemão padrão',
    cognates: c(['en', 'kin (parentesco, mesma raiz germânica)'], ['nl', 'kind']),
    evolution_note: 'O “k” do alemão padrão vira o som gutural “ch” em muitas palavras do suíço-alemão: “Kind” (criança) virou “Chind”, “Katze” virou “Chatz”. É uma das mudanças de som mais marcantes do dialeto.',
    transparent: false,
  },
  {
    word: 'chatz',
    root_word: 'Katze',
    origin_language: 'Alemão padrão',
    cognates: c(['en', 'cat'], ['nl', 'kat']),
    evolution_note: 'Mesmo padrão de “Chind”: o “k” inicial vira “ch” gutural, e o “-e” final do alemão padrão quase desaparece na fala.',
    transparent: false,
  },
  {
    word: 'guet',
    root_word: 'gut',
    origin_language: 'Alemão padrão',
    cognates: c(['en', 'good'], ['nl', 'goed']),
    evolution_note: 'O “u” longo do alemão padrão costuma virar o ditongo “üe” no suíço-alemão: “gut” (bom) virou “guet”, e “Blut” (sangue) vira “Bluet”. É uma mudança de som antiga, de quando o alto-alemão ainda era uma língua só.',
    transparent: true,
  },
  {
    word: 'wasser',
    root_word: 'Wasser',
    origin_language: 'Alemão padrão',
    cognates: c(['en', 'water'], ['nl', 'water'], ['pt', 'água (raiz latina diferente)']),
    evolution_note: 'Uma das poucas palavras do bloco básico que fica quase idêntica ao alemão padrão: “Wasser” vem do germânico antigo e é prima do inglês “water” — mas não do português “água”, que vem do latim “aqua”, uma raiz totalmente diferente.',
    transparent: true,
  },
  {
    word: 'chäs',
    root_word: 'Käse',
    origin_language: 'Alemão padrão (do latim caseus)',
    cognates: c(['en', 'cheese'], ['pt', 'queijo (também do latim caseus)']),
    evolution_note: '“Käse” é um empréstimo antigo do latim “caseus” para o germânico, o mesmo latim que deu “queijo” em português e “cheese” em inglês — por isso essas três palavras, de línguas tão diferentes, soam parecidas. No suíço-alemão, o “k” vira “ch”: Chäs.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_GSW: [string, string][] = [
  ['Wie gaht’s dir hüt?', 'Como você está hoje?'],
  ['Verzell vo dinere Familie.', 'Conte da sua família.'],
  ['Was ässisch’ und trinksch’ du gärn?', 'O que você gosta de comer e de beber?'],
  ['Wie isch dis Huus?', 'Como é a sua casa?'],
];

export const SHADOWING_GSW: [string, string][] = [
  ['Grüezi! Ich heisse Ana.', 'Olá! Eu me chamo Ana.'],
  ['Guet, merci! Und du?', 'Bem, obrigado! E você?'],
  ['Ich ha en Brüeder und e Schwöschter.', 'Tenho um irmão e uma irmã.'],
  ['Ich weiss es nöd.', 'Eu não sei.'],
];
