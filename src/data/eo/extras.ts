import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo esperanto). */
export const COMMUNITY_EO: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Priskribu vian hundon.',
    content: 'Mi havas hundo. Ĝi estas granda.',
    reference: 'Mi havas hundon. Ĝi estas granda.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Priskribu viajn hundojn.',
    content: 'La hundoj estas granda.',
    reference: 'La hundoj estas grandaj.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Kiu vi estas?',
    content: 'Estas Ana.',
    reference: 'Mi estas Ana.',
  },
];

/**
 * Cenário de conversa. Como o esperanto não distingue registro formal/informal (só existe "vi",
 * pra qualquer pessoa e número — ver gramática, tópico "vi"), o registro aqui é só nominal.
 */
export const SCENARIOS_EO: ScenarioSeed[] = [
  {
    id: 'eo-s1',
    title: 'Je la Kongreso',
    emoji: '⭐',
    cefr: 'A1',
    register: 'informal',
    persona: 'Petro, kongresano (congressista)',
    description: 'Petro te encontra no Congresso Mundial de Esperanto e começa a conversar. O esperanto não distingue formal/informal: usa-se "vi" com todo mundo, sem um equivalente ao "você" formal do português.',
    turns: [
      {
        bot: 'Saluton! Kion vi volas trinki?',
        botTranslation: 'Olá! O que você quer beber?',
        keywords: ['akvo', 'vino', 'voli'],
        suggestions: ['Mi volas akvon.', 'Mi volas vinon.'],
      },
      {
        bot: 'Kaj de kie vi estas?',
        botTranslation: 'E de onde você é?',
        keywords: ['mi', 'esti', 'de'],
        suggestions: ['Mi estas de Brazilo.', 'Mi estas de Portugalio.'],
      },
    ],
  },
];

/**
 * Palavras do esperanto e a raiz real de onde vieram (majoritariamente latina — Zamenhof escolheu
 * raízes já conhecidas por quem fala línguas europeias, pra facilitar o aprendizado), com os
 * cognatos reais de línguas já no app. Fontes: Wikipedia "Esperanto vocabulary" (as raízes vêm de
 * "fontes" europeias, sobretudo românicas, germânicas e eslavas); dicionários etimológicos das
 * próprias línguas-fonte pros cognatos.
 */
export const ETYMOLOGY_EO: EtymologySeed[] = [
  {
    word: 'patro',
    root_word: 'pater',
    origin_language: 'Latim',
    cognates: c(['es', 'padre'], ['it', 'padre'], ['fr', 'père'], ['en', 'father'], ['de', 'Vater']),
    evolution_note: 'Zamenhof pegou "pater" quase sem mudar. Nas línguas românicas, a mesma raiz virou "padre"/"père"; nas germânicas, "father"/"Vater" — todas vêm do mesmo ancestral indo-europeu, só por caminhos diferentes.',
    transparent: true,
  },
  {
    word: 'akvo',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['es', 'agua'], ['it', 'acqua'], ['fr', 'eau'], ['ro', 'apă']),
    evolution_note: '"Aqua" chegou ao esperanto quase intacta. O espanhol e o italiano mudaram pouco a grafia; o francês ("eau") e o romeno ("apă") se afastaram mais do original latino.',
    transparent: true,
  },
  {
    word: 'domo',
    root_word: 'domus',
    origin_language: 'Latim',
    cognates: c(['pt', 'domicílio'], ['en', 'dome/domicile'], ['it', 'duomo'], ['fr', 'domicile']),
    evolution_note: 'As línguas românicas trocaram a palavra do dia a dia para "casa" (do latim "casa", cabana), mas guardaram "domus" em palavras mais formais: "domicílio" em português, "duomo" (catedral, literalmente "a casa do Senhor") em italiano.',
    transparent: false,
  },
  {
    word: 'granda',
    root_word: 'grandis',
    origin_language: 'Latim',
    cognates: c(['es', 'grande'], ['it', 'grande'], ['fr', 'grand'], ['pt', 'grande']),
    evolution_note: 'Uma das raízes mais transparentes para quem fala português: "grandis" chegou quase sem mudar a todas as línguas românicas, inclusive o próprio português.',
    transparent: true,
  },
  {
    word: 'familio',
    root_word: 'familia',
    origin_language: 'Latim',
    cognates: c(['es', 'familia'], ['it', 'famiglia'], ['fr', 'famille'], ['en', 'family'], ['pt', 'família']),
    evolution_note: 'Praticamente idêntica em todas as línguas europeias citadas — uma das raízes latinas mais estáveis que existem.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_EO: [string, string][] = [
  ['Kio estas via nomo?', 'Qual é o seu nome?'],
  ['Kion vi volas manĝi hodiaŭ?', 'O que você quer comer hoje?'],
  ['Kie estas via domo?', 'Onde é a sua casa?'],
  ['Kia estas via familio?', 'Como é a sua família?'],
];

export const SHADOWING_EO: [string, string][] = [
  ['Saluton! Mi nomiĝas Ana, kaj mi loĝas en granda urbo.', 'Olá! Eu me chamo Ana, e eu moro numa cidade grande.'],
  ['Dankon, kaj bonan tagon!', 'Obrigado, e bom dia!'],
  ['Mi havas unu fraton kaj unu fratinon.', 'Eu tenho um irmão e uma irmã.'],
  ['La akvo estas malvarma, sed la vino estas bona.', 'A água está fria, mas o vinho é bom.'],
];
