import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo tapiete). */
export const COMMUNITY_TPJ: CommunitySeed[] = [
  {
    author_name: 'Marina 🇦🇷',
    prompt: 'Nde tapiete?',
    content: 'Nde tapiete.',
    reference: "Ha'e tapiete.",
  },
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ampo ɨ?',
    content: 'Heta ɨ.',
    reference: 'Ampo ɨ.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'A-pota awati?',
    content: 'A-karu awati.',
    reference: 'A-pota awati.',
  },
];

/**
 * Cenário de conversa. O artigo-fonte (González 2010) não registra nenhum pronome ou marcador
 * “formal” separado do informal no tapiete: por isso o cenário é informal.
 */
export const SCENARIOS_TPJ: ScenarioSeed[] = [
  {
    id: 'tpj-s1',
    title: 'Chegada na aldeia',
    emoji: '🏘️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Alguém da comunidade tapiete de Tartagal (Salta, Argentina)',
    description:
      'As fontes consultadas não documentam uma forma “formal” separada da informal no tapiete: o mesmo jeito de falar serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Wähe! Nde tapiete?',
        botTranslation: 'Chegou! Você é tapiete?',
        keywords: ["ha'e", 'tapiete'],
        suggestions: ["Ha'e tapiete.", "Ha'e tapiete. Nde?"],
      },
      {
        bot: "Pörä! A-pota so'o. Nde?",
        botTranslation: 'Que bonito! Eu quero carne. E você?',
        keywords: ['pota', 'awati', 'kãwĩ'],
        suggestions: ['A-pota awati.', 'A-pota kãwĩ.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras tapietes. O tapiete NÃO é parente do português (é tupi-guarani, de uma
 * família totalmente diferente da indo-europeia), mas É parente próximo de outras línguas já neste
 * app (o guarani paraguaio “gn”, o mbyá “gun” e o kaiowá/guarani ñandeva “kgk”) — por isso as notas
 * abaixo comparam o tapiete com essas línguas aparentadas, não com o português.
 */
export const ETYMOLOGY_TPJ: EtymologySeed[] = [
  {
    word: 'tapiete',
    root_word: "tapii eté",
    origin_language: 'Guarani',
    cognates: c(['gn', "tapii (cativo) + eté (verdadeiro)"]),
    evolution_note:
      '“Tapiete”, hoje o autoglotônimo usado pelo próprio povo na Argentina e na Bolívia, nasceu como um exônimo em guarani: “tapii eté”, literalmente “verdadeiros escravos/cativos” — um nome dado de fora, numa época de conflitos entre povos do Chaco, que o povo tapiete acabou adotando como nome próprio (es.wikipedia.org/wiki/Tapietes). Os grupos do Paraguai preferem outros nomes para si mesmos, como “ñandereta” ou “ava”.',
    transparent: false,
  },
  {
    word: 'nde',
    root_word: 'nde',
    origin_language: 'Proto-tupi-guarani',
    cognates: c(['gn', 'nde (tu, teu)']),
    evolution_note:
      '“Nde” (tu/você) é um dos pronomes mais estáveis de toda a família tupi-guarani: a mesma forma, com o mesmo sentido, aparece no guarani paraguaio (“nde”), já neste app — uma prova de parentesco direto entre o tapiete e as outras línguas guarani, mesmo sendo línguas diferentes hoje.',
    transparent: false,
  },
  {
    word: "ha'e",
    root_word: "ha'e",
    origin_language: 'Proto-tupi-guarani',
    cognates: c(['gn', "ha'e (ele, ela)"]),
    evolution_note:
      '“Ha\'e” (ele/ela) é outro pronome de raiz muito antiga na família tupi-guarani, com a mesma forma no guarani paraguaio. González (2010) registra “ha\'e” como sujeito independente em frases como “ha\'e ñi-mbo\'e” (ele/ela estuda).',
    transparent: false,
  },
  {
    word: "so'o",
    root_word: "so'o",
    origin_language: 'Proto-tupi-guarani',
    cognates: c(['gn', "so'o (carne, animal)"]),
    evolution_note:
      '“So\'o” (carne) tem a mesma forma no guarani paraguaio, outro sinal de quanto o vocabulário básico do tapiete ainda se parece com o das línguas guarani vizinhas, apesar do longo tempo de separação e de décadas de contato bem diferentes com o espanhol, o português e as línguas do Chaco (como o wichí, o toba e o chorote, faladas na mesma região).',
    transparent: false,
  },
  {
    word: 'kãwĩ',
    root_word: 'kaguĩ',
    origin_language: 'Proto-tupi-guarani',
    cognates: c(['gn', 'kaguy, kagui (chicha, bebida fermentada)']),
    evolution_note:
      'A chicha de milho tem nomes parecidos em várias línguas guarani (no guarani paraguaio, “kaguy”/“kagui”); no tapiete, González (2010) registra “kãwĩ”, com a vogal nasalizada — a mesma raiz, moldada pela fonologia própria do tapiete (harmonia nasal, ver gramatica.ts).',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TPJ: [string, string][] = [
  ['Nde tapiete?', 'Você é tapiete?'],
  ['Ampo tenta?', 'Esta é a aldeia?'],
  ['Heta o-ĩ?', 'Há muito?'],
  ["A-pota so'o?", 'Você quer carne?'],
];

export const SHADOWING_TPJ: [string, string][] = [
  ["Ha'e ñi-mbo'e.", 'Ele/ela estuda.'],
  ['Heta o-ĩ.', 'Há muito.'],
  ["A-karu so'o.", 'Eu como carne.'],
  ["Nde tapiete. Ha'e tapiete.", 'Você é tapiete. Ele/ela é tapiete.'],
];
