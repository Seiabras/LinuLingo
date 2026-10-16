import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção. Siglas como em vocabulario (CES17 = Cesarino, Marubo e
 * Marubo 2017, com a linha; CES18 = Cesarino 2018; ANH10 = Anonby e Holbrook 2010; ISA).
 * Frases: “Ẽ yora.” (CES17 75); “Nokẽ chinã.” (CES17 25); “Rave nokoma.” (CES17 103); “Noke chinã” é o
 * erro proposto do aluno (forma simples no lugar da possessiva, ver aba Gramática).
 */
export const COMMUNITY_MZR: CommunitySeed[] = [
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Escreva “nosso pensamento” em marúbo.',
    content: 'Noke chinã.',
    reference: 'Nokẽ chinã. Para “nosso”, o pronome usa a forma com til, “nokẽ”, antes da coisa.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'O que quer dizer “Vei Vai”?',
    content: 'Caminho da névoa: “vei” é névoa.',
    reference:
      'Caminho-Morte. Cesarino (2017) glosa “vei” como morte e “vai” como caminho; o Instituto Socioambiental chama esse caminho de “Caminho da Névoa”, mas a palavra para névoa é “koĩ”.',
  },
  {
    author_name: 'Larissa 🇧🇷',
    prompt: 'Diga “uns não chegavam” em marúbo.',
    content: 'Ma rave noko.',
    reference: 'Rave nokoma. A negação “-ma” vai presa no fim do verbo, e o verbo fica no fim da frase.',
  },
];

/**
 * Cenários. As fontes não descrevem um registro formal separado do informal; por isso o cenário é
 * informal. Falas: “Txai!” (CES18 p. 48); “Nokẽ shovo.” MONTADA (possessivo + substantivo, regra de
 * “ẽ yora”, CES17 75); “Shovo roaka.” MONTADA (substantivo + adjetivo, como “vai roaka-ma”, CES17 50);
 * “Kayã nachima.” (CES17 17); “Waka roaka.” MONTADA (mesma regra).
 */
export const SCENARIOS_MZR: ScenarioSeed[] = [
  {
    id: 'mzr-s1',
    title: 'Chegada na maloca, no alto rio Ituí',
    emoji: '🛖',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um parente marúbo que recebe você na maloca, numa aldeia do alto rio Ituí (Amazonas)',
    description: 'Você chega a uma maloca marúbo. Responda ao tratamento “txai” e elogie a maloca e o rio.',
    turns: [
      {
        bot: 'Txai! Nokẽ shovo.',
        botTranslation: 'Cunhado! Nossa maloca.',
        keywords: ['txai', 'shovo', 'roaka'],
        suggestions: ['Txai! Shovo roaka.'],
      },
      {
        bot: 'Kayã nachima.',
        botTranslation: 'Banhar no rio.',
        keywords: ['waka', 'roaka'],
        suggestions: ['Waka roaka.'],
      },
    ],
  },
];

/**
 * Etimologia: formação de palavras dentro do próprio marúbo (não é parente do português).
 */
export const ETYMOLOGY_MZR: EtymologySeed[] = [
  {
    word: 'vai',
    root_word: 'vai',
    origin_language: 'Marúbo',
    cognates: c(['mzr', 'Vei Vai (Caminho-Morte)'], ['mzr', 'Yové Vai (caminho dos espíritos)']),
    evolution_note:
      '“Vai” é caminho: Cesarino, Armando Marubo e Robson Marubo (2017) glosam assim a palavra na narrativa do Caminho-Morte, e a lista de Anonby e Holbrook (2010) traz a mesma palavra para “trilha, caminho”. Ela forma compostos com a palavra que descreve antes: “Vei Vai” (morte + caminho) e “Yové Vai” (espíritos + caminho), este citado pelo Instituto Socioambiental.',
    transparent: true,
  },
  {
    word: 'sheni',
    root_word: 'sheni',
    origin_language: 'Marúbo',
    cognates: c(['mzr', 'rono-rasĩ (as cobras)'], ['mzr', 'vimi-rasĩ (as frutas todas)']),
    evolution_note:
      '“Nokẽ shenirasĩ” (nossos antepassados) junta três peças, segundo a segmentação de Cesarino (2017): “nokẽ” (nosso), “sheni” (antepassado) e o coletivo “-rasĩ” (o grupo todo). O mesmo “-rasĩ” aparece em “ronorasĩ” (as cobras) e “vimirasĩ” (as frutas).',
    transparent: true,
  },
  {
    word: 'txona',
    root_word: 'txona',
    origin_language: 'Marúbo',
    cognates: c(['mzr', 'Txonavo (Povo Macaco-Barrigudo)'], ['mzr', 'Kamã Nawavo (Povo Jaguar)']),
    evolution_note:
      'Segundo Cesarino (2018), os povos antigos que formaram os Marúbo têm nome de bicho ou de astro mais “nawavo” (povo + plural “-vo”). Em “Txonavo”, “nawavo” encurtou e sobrou só o “-vo”: “txona-vo”. O próprio nome “Marúbo” não é como o povo se chamava, segundo o Instituto Socioambiental, e a língua veio de um desses povos, o Chai Nawavo, o “Povo Pássaro” (Cesarino, Marubo e Marubo, 2017).',
    transparent: false,
  },
  {
    word: 'kakáya',
    root_word: 'kakáya',
    origin_language: 'Marúbo',
    cognates: c(['mzr', 'koka (tio materno)'], ['mzr', 'take (parente da própria seção)']),
    evolution_note:
      'O Instituto Socioambiental descreve “kakáya” como um título conquistado, não herdado: cabe aos donos de maloca respeitados, pacíficos, que promovem festas e a paz e são procurados como conselheiros. Na lista de Anonby e Holbrook (2010), a mesma palavra aparece para “cacique”.',
    transparent: false,
  },
];

/**
 * Temas do diário: frases citadas (CES17 75, 25, 50; CES18 p. 55) como ponto de partida.
 */
export const JOURNAL_PROMPTS_MZR: [string, string][] = [
  ['Ẽ yora.', 'Quem são os seus parentes mais próximos? Use “ẽ” (meu) antes de duas palavras que você já sabe.'],
  ['Nokẽ chinã.', 'Em que você e sua família pensam juntos? Escreva com “nokẽ” (nosso).'],
  ['Vai roakama.', 'Conte um caminho difícil que você já fez e diga se foi “roaka” (bom) ou “ichná” (ruim).'],
  ['Vana roaka.', 'Quem fala bonito na sua família? Por quê?'],
];

/** Frases para repetir em voz alta: CES17 26, 75, 25, 15, 19, 103–104, 105; CES18 p. 48. */
export const SHADOWING_MZR: [string, string][] = [
  ['Noke neská akavo.', 'Nós vamos fazer assim.'],
  ['Ẽ yora.', 'Meus parentes.'],
  ['Nokẽ chinã.', 'Nosso pensamento.'],
  ['Vari Nawavo.', 'Povo Sol.'],
  ['Ronorasĩ kenaiti.', 'Chamava pelas cobras, há muito tempo.'],
  ['Tenãseiti.', 'Morreu, há muito tempo.'],
  ['Rave nokoma, ravero nokoai.', 'Uns não chegavam, outros chegavam.'],
  ['Akarivi.', 'Assim mesmo é.'],
];
