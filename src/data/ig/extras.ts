import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no igbo). */
export const COMMUNITY_IG: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Aha gị bụ gịnị?',
    content: 'Ndewo! M aha bụ Bruno.',
    reference: 'Ndewo! Aha m bụ Bruno.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Kedụ ka ezinụlọ gị dị?',
    content: 'Enwere m nwanne ato.',
    reference: 'Enwere m nwanne atọ.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Kedụ ka ụlọ gị dị?',
    content: 'Ulo m di mma.',
    reference: 'Ụlọ m dị mma.',
  },
];

/** Cenário de conversa. */
export const SCENARIOS_IG: ScenarioSeed[] = [
  {
    id: 'ig-s1',
    title: 'Ndewo na Enugu',
    emoji: '👋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ngozi, otu enyi',
    description: 'Você encontra Ngozi pela primeira vez em Enugu. Converse em igbo, de forma informal, usando “gị”.',
    turns: [
      {
        bot: 'Ndewo! Kedụ?',
        botTranslation: 'Olá! Como vai?',
        keywords: ['mma', 'daalụ'],
        suggestions: ['Ọ dị mma, daalụ!', 'Ọ dị mma.'],
      },
      {
        bot: 'Aha gị bụ gịnị?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['aha m bụ'],
        suggestions: ['Aha m bụ Ana.', 'Aha m bụ Pedro.'],
      },
      {
        bot: 'Ị nwere nwanne?',
        botTranslation: 'Você tem irmãos?',
        keywords: ['enwere m', 'ee'],
        suggestions: ['Ee, enwere m otu nwanne.', 'Ee, enwere m nwanne abụọ.'],
      },
    ],
  },
];

/**
 * Etimologias do igbo: como não é parente do português, cada palavra mostra a sua formação dentro
 * do próprio igbo (quando é uma palavra composta) ou a sua raiz reconstruída no proto-igboide, a
 * língua-mãe hipotética do grupo igboide (igbo, ekpeye, izi, ika e outras línguas do sudeste da
 * Nigéria) — nunca um cognato inventado com o português. Fontes: Wikcionário (inglês), verbetes
 * “nwoke” e “ukwu” (com a reconstrução do proto-igboide e as línguas igboides citadas).
 */
export const ETYMOLOGY_IG: EtymologySeed[] = [
  {
    word: 'nwoke',
    root_word: 'nwa + oke',
    origin_language: 'Igbo (palavra composta)',
    cognates: c(['ig', 'nwa (criança, filho/filha)'], ['ig', 'oke (macho)']),
    evolution_note: '“Nwoke” (homem) nasce da junção de “nwa” (criança, filho/filha) com “oke” (macho): ao pé da letra, “a cria macho”. O par feminino, “nwanyị”, segue o mesmo molde.',
    transparent: false,
  },
  {
    word: 'nwanyị',
    root_word: 'nwa + nyị',
    origin_language: 'Igbo (palavra composta)',
    cognates: c(['ig', 'nwa (criança, filho/filha)']),
    evolution_note: 'Como “nwoke” (nwa + oke, “cria macho”), “nwanyị” (mulher) junta “nwa” (criança) a um elemento feminino antigo: a mesma lógica explica por que tantas palavras de parentesco em igbo começam com “nwa-” (nwanne, nwunye…).',
    transparent: false,
  },
  {
    word: 'ji',
    root_word: '*í-ŋ̀-gíyí',
    origin_language: 'Proto-igboide',
    cognates: [],
    evolution_note: '“Ji” (inhame) vem de uma forma reconstruída do proto-igboide, a língua-mãe hipotética de todo o grupo igboide. O inhame é um dos pilares da alimentação e da cultura igbo: há até uma festa da colheita do inhame, o “Iri ji”.',
    transparent: false,
  },
  {
    word: 'ukwu',
    root_word: '*ʊ́-`-kʊ́wí',
    origin_language: 'Proto-igboide',
    cognates: [],
    evolution_note: 'O mesmo radical proto-igboide deu, em igbo, dois sentidos que parecem distantes — “ukwu” (grande) e “ukwu” (perna, pé) — e aparece, em formas parecidas, em línguas igboides vizinhas como o ekpeye, o ogbah, o izi e o ika.',
    transparent: false,
  },
  {
    word: 'ezinụlọ',
    root_word: 'ezi na ụlọ',
    origin_language: 'Igbo (palavra composta)',
    cognates: c(['ig', 'ezi (o lado de fora, o pátio da casa)'], ['ig', 'ụlọ (casa)']),
    evolution_note: '“Ezinụlọ” (família) vem da expressão “ezi na ụlọ”: “o pátio e a casa” — tudo o que forma o terreno (o “compound”) onde mora uma família igbo, dentro e fora da casa.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_IG: [string, string][] = [
  ['Kedụ ka ị mere taa?', 'Como você está hoje?'],
  ['Gịnị ka ị chọrọ iri taa?', 'O que você quer comer hoje?'],
  ['Kedụ ka ezinụlọ gị dị?', 'Como está a sua família?'],
  ['Gịnị ka ị hụrụ n’anya?', 'O que você ama?'],
];

export const SHADOWING_IG: [string, string][] = [
  ['Ndewo! Aha m bụ Ana.', 'Olá! Meu nome é Ana.'],
  ['Daalụ! Ka ọ dị!', 'Obrigado! Até mais!'],
  ['Ezinụlọ m dị mma.', 'Minha família vai bem.'],
  ['Nri a dị ụtọ.', 'Esta comida está deliciosa.'],
];
