import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo toki pona). */
export const COMMUNITY_TOK: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'sina moku e seme?',
    content: 'mi moku kili.',
    reference: 'mi moku e kili.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'o toki e jan ante.',
    content: 'jan pona.',
    reference: 'jan li pona.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'sina pona anu seme?',
    content: 'mi li pona.',
    reference: 'mi pona.',
  },
];

/**
 * Cenário de conversa. Como o toki pona não distingue registro formal/informal (só existe "sina",
 * pra qualquer pessoa e número — ver `formalMarkers` em index.ts), o registro aqui é só nominal.
 */
export const SCENARIOS_TOK: ScenarioSeed[] = [
  {
    id: 'tok-s1',
    title: 'lon kulupu toki pona',
    emoji: '💬',
    cefr: 'A1',
    register: 'informal',
    persona: 'jan Petro, jan pi kulupu toki pona (pessoa da comunidade de toki pona)',
    description: 'Petro conversa com você num grupo on-line da comunidade de toki pona. A língua não distingue formal/informal: usa-se "sina" com todo mundo, sem um equivalente ao "você" formal do português.',
    turns: [
      {
        bot: 'toki! sina wile moku anu wile telo?',
        botTranslation: 'Oi! Você quer comer ou quer água?',
        keywords: ['moku', 'telo', 'wile'],
        suggestions: ['mi wile moku.', 'mi wile e telo.'],
      },
      {
        bot: 'sina tan seme?',
        botTranslation: 'De onde você é?',
        keywords: ['mi', 'tan', 'ma'],
        suggestions: ['mi tan ma mi.', 'mi tan ma ante.'],
      },
    ],
  },
];

/**
 * Palavras do toki pona e a raiz real de onde vieram — bem diferente do esperanto (quase só
 * raízes românicas): Sonja Lang buscou palavras em inglês, tok pisin, japonês, finlandês,
 * holandês, cantonês, croata, georgiano e francês acadiano, entre outras. Fontes: verbetes
 * "Appendix:Toki Pona/…" do Wiktionary (en.wiktionary.org), que citam a língua e a palavra de
 * origem de cada raiz; Wikipédia ("Toki Pona", seção "Vocabulary", sobre as línguas-fonte em
 * geral.
 */
export const ETYMOLOGY_TOK: EtymologySeed[] = [
  {
    word: 'mi',
    root_word: 'mi',
    origin_language: 'Esperanto',
    cognates: c(['eo', 'mi']),
    evolution_note: 'Veio quase intacta do esperanto "mi" (eu), que por sua vez vem das línguas românicas. Como o esperanto é o primeiro idioma construído deste app, é uma raiz que "repete" literalmente.',
    transparent: false,
  },
  {
    word: 'pona',
    root_word: 'bona',
    origin_language: 'Esperanto',
    cognates: c(['eo', 'bona']),
    evolution_note: 'Vem do esperanto "bona" (bom), que por sua vez vem do latim "bonus" — mas o "b" virou "p" porque o toki pona não tem a letra "b" no seu alfabeto de 14 letras.',
    transparent: false,
  },
  {
    word: 'tomo',
    root_word: 'domo',
    origin_language: 'Esperanto',
    cognates: c(['eo', 'domo']),
    evolution_note: 'Vem do esperanto "domo" (casa) — de novo, o "d" virou "t" porque o toki pona não tem "d" no alfabeto.',
    transparent: false,
  },
  {
    word: 'toki',
    root_word: 'tok',
    origin_language: 'Tok Pisin',
    cognates: c(['en', 'talk']),
    evolution_note: 'Vem do tok pisin (crioulo de base inglesa falado em Papua-Nova Guiné) "tok" (mensagem, palavra, falar), que por sua vez vem do inglês "talk".',
    transparent: false,
  },
  {
    word: 'moku',
    root_word: 'mogu mogu',
    origin_language: 'Japonês',
    cognates: c(['ja', 'もぐもぐ']),
    evolution_note: 'Vem da onomatopeia japonesa もぐもぐ ("mogu mogu"), o som de mastigar — bem diferente de "comer" nas línguas europeias.',
    transparent: false,
  },
  {
    word: 'telo',
    root_word: "de l'eau",
    origin_language: 'Francês acadiano',
    cognates: c(['fr', "de l'eau"]),
    evolution_note: 'Vem da expressão do francês acadiano "de l\'eau" ("um pouco de água") — uma raiz bem mais longa que ganhou uma forma bem mais curta no toki pona.',
    transparent: false,
  },
  {
    word: 'jan',
    root_word: '人 (jan4)',
    origin_language: 'Cantonês',
    cognates: c(['zh', '人']),
    evolution_note: 'Vem do cantonês 人 ("jan4", pessoa) — uma das poucas raízes do toki pona vindas de uma língua sino-tibetana, não indo-europeia.',
    transparent: false,
  },
  {
    word: 'sina',
    root_word: 'sinä',
    origin_language: 'Finlandês',
    cognates: c(['fi', 'sinä']),
    evolution_note: 'Vem do finlandês "sinä" (você) — praticamente sem mudar de forma.',
    transparent: false,
  },
  {
    word: 'wile',
    root_word: 'willen',
    origin_language: 'Holandês',
    cognates: c(['nl', 'willen']),
    evolution_note: 'Vem do holandês "willen" (querer) — da mesma raiz germânica que o inglês "will" e o alemão "wollen".',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TOK: [string, string][] = [
  ['nimi sina li seme?', 'Qual é o seu nome?'],
  ['sina wile e seme?', 'O que você quer?'],
  ['tomo sina li seme?', 'Como é a sua casa?'],
  ['sina pilin seme?', 'Como você se sente?'],
];

export const SHADOWING_TOK: [string, string][] = [
  ['toki! nimi mi li Ana, mi lon ma mi.', 'Oi! Meu nome é Ana, eu estou no meu país.'],
  ['mi olin e mama mi.', 'Eu amo meus pais.'],
  ['telo li lete, taso pan li seli.', 'A água está fria, mas o pão está quente.'],
  ['jan mute li pona tawa mi.', 'Muitas pessoas são boas para mim.'],
];
