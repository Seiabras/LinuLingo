import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no húngaro). */
export const COMMUNITY_HU: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Mi a neved?',
    content: 'Az nevem Bruno.',
    reference: 'A nevem Bruno.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Van testvéred?',
    content: 'Van két testvérek.',
    reference: 'Két testvérem van.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Szereted a kenyeret?',
    content: 'Igen, szeretek a kenyeret.',
    reference: 'Igen, szeretem a kenyeret.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_HU: ScenarioSeed[] = [
  {
    id: 'hu-s1',
    title: 'A piacon',
    emoji: '🧺',
    cefr: 'A1',
    register: 'informal',
    persona: 'Zsófia, uma vendedora na Nagyvásárcsarnok',
    description: 'A Zsófia atende você num banquinho do mercado. É uma conversa informal: use “te”.',
    turns: [
      {
        bot: 'Szia! Mit szeretnél: kenyeret vagy gyümölcsöt?',
        botTranslation: 'Oi! O que você gostaria: pão ou fruta?',
        keywords: ['kenyeret', 'gyümölcsöt', 'kérek'],
        suggestions: ['Kenyeret kérek.', 'Gyümölcsöt kérek.'],
      },
      {
        bot: 'Tessék! Mi a neved?',
        botTranslation: 'Aqui está! Qual é o seu nome?',
        keywords: ['nevem'],
        suggestions: ['A nevem Ana.', 'A nevem Pedro.'],
      },
    ],
  },
];

/**
 * Palavras do húngaro e de onde vieram: a camada urálica herdada (víz, szív), os empréstimos
 * túrquicos de antes da conquista da bacia dos Cárpatos (alma, gyümölcs) e os empréstimos eslavos de
 * depois dela (macska, asztal) — três momentos bem diferentes da história do húngaro. Fontes:
 * Wiktionary (en.wiktionary.org), verbete de cada palavra.
 */
export const ETYMOLOGY_HU: EtymologySeed[] = [
  {
    word: 'víz',
    root_word: '*wete',
    origin_language: 'Proto-urálico (herdada, não é empréstimo)',
    cognates: c(['fi', 'vesi'], ['et', 'vesi']),
    evolution_note:
      '“Víz” vem direto do proto-urálico “*wete” (água), a mesma raiz do finlandês e do estoniano “vesi” — uma prova de que o húngaro é mesmo parente dessas línguas, apesar de soar tão diferente: o parentesco é de família, não de ramo (o húngaro é úgrico; finlandês e estoniano são fínicos).',
    transparent: false,
  },
  {
    word: 'szív',
    root_word: '*śüdäme',
    origin_language: 'Proto-urálico (herdada, não é empréstimo)',
    cognates: c(['fi', 'sydän'], ['et', 'süda']),
    evolution_note:
      '“Szív” (coração) também vem do proto-urálico, de “*śüdäme”. Compare com o finlandês “sydän” e o estoniano “süda”: milhares de anos separam essas línguas, mas a raiz ainda se reconhece.',
    transparent: false,
  },
  {
    word: 'testvér',
    root_word: 'egy test és vér',
    origin_language: 'Formação interna do húngaro (não é empréstimo)',
    cognates: c(['hu', 'test (corpo)'], ['hu', 'vér (sangue)']),
    evolution_note:
      '“Testvér” (irmão, irmã) nasceu por recorte da expressão “egy test és vér” — “um corpo e sangue só” — que descrevia quem nasceu dos mesmos pais. A palavra já aparece escrita em 1650.',
    transparent: false,
  },
  {
    word: 'alma',
    root_word: '*alma',
    origin_language: 'Prototurquico comum',
    cognates: c(['tr', 'alma/elma']),
    evolution_note:
      '“Alma” (maçã) é um empréstimo túrquico antigo, da mesma raiz do turco “elma”. Mostra que os húngaros tiveram contato com povos turcos muito antes de chegar à bacia dos Cárpatos, no século IX.',
    transparent: false,
  },
  {
    word: 'gyümölcs',
    root_word: '*yẹ̄miĺč',
    origin_language: 'Oghur (túrquico, empréstimo pré-conquista)',
    cognates: c(['tr', 'yemiş (fruta seca)']),
    evolution_note:
      '“Gyümölcs” (fruta) vem do húngaro antigo “gyimilcs”, emprestado de uma língua oghur (ramo túrquico) antes da conquista da bacia dos Cárpatos, por volta dos séculos IX–X. A raiz turquica “*yẹ̄miĺč” também deu palavras parecidas em báxquir, chuvache e turco.',
    transparent: false,
  },
  {
    word: 'macska',
    root_word: '*mačьka',
    origin_language: 'Protoeslavo comum',
    cognates: c(['sk', 'mačka'], ['sl', 'mačka']),
    evolution_note:
      '“Macska” (gato) é um empréstimo eslavo, da mesma raiz do eslovaco e do esloveno “mačka”. Depois que os húngaros chegaram à Europa Central, no século IX, conviveram com povos eslavos — e herdaram palavras do dia a dia como esta.',
    transparent: false,
  },
  {
    word: 'asztal',
    root_word: '*stolъ',
    origin_language: 'Protoeslavo comum',
    cognates: c(['ru', 'стол (stol)']),
    evolution_note:
      '“Asztal” (mesa) também veio do contato com línguas eslavas, da mesma raiz do russo “стол”. É outro exemplo da camada eslava de empréstimos que entrou no húngaro já na Europa.',
    transparent: false,
  },
  {
    word: 'friss',
    root_word: 'frisch',
    origin_language: 'Alemão',
    cognates: c(['de', 'frisch']),
    evolution_note: '“Friss” (fresco) é um empréstimo do alemão “frisch”, de uma época de forte contato entre húngaros e comunidades de língua alemã na Hungria.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HU: [string, string][] = [
  ['Hogy vagy ma?', 'Como você está hoje?'],
  ['Van kutyád vagy macskád?', 'Você tem cachorro ou gato?'],
  ['Mit szeretsz enni?', 'O que você gosta de comer?'],
  ['Nagy a házad?', 'A sua casa é grande?'],
];

export const SHADOWING_HU: [string, string][] = [
  ['Szia! A nevem Ana.', 'Oi! Meu nome é Ana.'],
  ['Köszönöm, és viszlát!', 'Obrigado, e até logo!'],
  ['Van egy kutyám.', 'Eu tenho um cachorro.'],
  ['Szeretem a gyümölcsöt.', 'Eu gosto de fruta.'],
];
