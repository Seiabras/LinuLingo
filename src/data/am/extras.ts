import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no amárico). */
export const COMMUNITY_AM: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'ስምህ ማን ነው? ከየት ነህ?',
    content: 'ስሜ ብሩኖ ነው። ብራዚል ነኝ።',
    reference: 'ስሜ ብሩኖ ነው። ከብራዚል ነኝ።',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'አንቺ ተማሪ ነሽ?',
    content: 'አዎ፣ እኔ ተማሪ ነህ።',
    reference: 'አዎ፣ እኔ ተማሪ ነኝ።',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'ይህ እናት ናት?',
    content: 'አዎ፣ ይህ እናት ነው።',
    reference: 'አዎ፣ ይህ እናት ናት።',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_AM: ScenarioSeed[] = [
  {
    id: 'am-s1',
    title: 'ቡና ከጓደኛ ጋር',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'ጓደኛ (amigo da aula de amárico)',
    description: 'Um amigo te recebe para a cerimônia do café (buna) etíope. É uma conversa entre amigos: registro informal.',
    turns: [
      {
        bot: 'ሰላም! ቡና ወይም ሻይ?',
        botTranslation: 'Oi! Café ou chá?',
        keywords: ['ቡና', 'ሻይ'],
        suggestions: ['ቡና፣ እባክህ።', 'ሻይ፣ እባክህ።'],
      },
      {
        bot: 'ስምህ ማን ነው?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['ስሜ', 'ነው'],
        suggestions: ['ስሜ ... ነው።'],
      },
      {
        bot: 'ከየት ነህ?',
        botTranslation: 'De onde você é?',
        keywords: ['ከ', 'ነኝ'],
        suggestions: ['እኔ ከ ብራዚል ነኝ።'],
      },
    ],
  },
];

/**
 * Palavras do amárico que mostram o parentesco semítico (raiz de três consoantes) ou que chegaram
 * por empréstimo — sobretudo do italiano, herança da breve ocupação de 1936–1941.
 * Fontes: Wiktionary (verbete de cada palavra, com a seção “Etymology”: ቡና, derivado de ቡን/bunn,
 * “café” — uma raiz própria do etiópico, não um empréstimo do árabe “qahwa” como em português;
 * መኪና, do italiano “macchina”; ጋዜጣ, do italiano “gazzetta”; ፖሊስ, do francês “police”; ባንክ,
 * internacionalismo).
 */
export const ETYMOLOGY_AM: EtymologySeed[] = [
  {
    word: 'ቡና',
    root_word: 'ቡን (bunn, “café”)',
    origin_language: 'Ge’ez / etiópico semítico (raiz própria, não é empréstimo)',
    cognates: c(['pt', 'café (via árabe “qahwa” e turco “kahve” — um caminho bem diferente)'], ['am', 'ቡን (bunn, grão de café)']),
    evolution_note: 'Curiosamente, embora o café tenha nascido nas terras altas etíopes (a lenda fala do pastor Kaldi, na região de Kaffa), a palavra portuguesa “café” não veio do amárico: ela viajou pelo árabe “qahwa” e pelo turco “kahve” até chegar à Europa. O amárico guardou sua própria palavra, “ቡና”, de uma raiz semítica local, “ቡን”.',
    transparent: false,
  },
  {
    word: 'መኪና',
    root_word: 'macchina (italiano, “máquina, carro”)',
    origin_language: 'Italiano',
    cognates: c(['pt', 'máquina'], ['it', 'macchina']),
    evolution_note: '“መኪና” (mäkina) é um empréstimo direto do italiano “macchina”, herança da ocupação italiana da Etiópia (1936–1941). A palavra é quase irmã gêmea do português “máquina” — ambas vêm do mesmo “machina” latino — e por isso um brasileiro reconhece o som na hora.',
    transparent: true,
  },
  {
    word: 'ጋዜጣ',
    root_word: 'gazzetta (italiano, “jornal”)',
    origin_language: 'Italiano',
    cognates: c(['pt', 'gazeta'], ['it', 'gazzetta']),
    evolution_note: '“ጋዜጣ” (gazeṭa) veio do italiano “gazzetta”, o mesmo étimo veneziano (ligado a uma moedinha, a “gazzetta”, que era o preço de uma folha noticiosa no século XVI) que deu o português “gazeta”. Outro empréstimo transparente da época da ocupação italiana.',
    transparent: true,
  },
  {
    word: 'ፖሊስ',
    root_word: 'police (francês)',
    origin_language: 'Francês',
    cognates: c(['pt', 'polícia'], ['fr', 'police']),
    evolution_note: '“ፖሊስ” (polis) foi emprestado do francês “police” — a França teve papel importante na modernização administrativa da Etiópia no início do século XX. A palavra é transparente para quem fala português: “polícia” vem do mesmo latim tardio “politia”.',
    transparent: true,
  },
  {
    word: 'ባንክ',
    root_word: 'bank (internacionalismo)',
    origin_language: 'Internacionalismo (via inglês/italiano/francês)',
    cognates: c(['pt', 'banco'], ['en', 'bank'], ['it', 'banca']),
    evolution_note: '“ባንክ” (bank) é um “internacionalismo”: a mesma palavra, vinda em última instância do italiano “banca” (o banco, o balcão do cambista), circula por dezenas de línguas sem relação de parentesco entre si — inclusive o amárico.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_AM: [string, string][] = [
  ['ስምህ ማን ነው?', 'Qual é o seu nome?'],
  ['ከየት ነህ?', 'De onde você é?'],
  ['እንደምን አለህ ዛሬ?', 'Como você está hoje?'],
  ['ቡና ወይም ሻይ?', 'Café ou chá?'],
];

export const SHADOWING_AM: [string, string][] = [
  ['ሰላም! እንደምን አለህ?', 'Olá! Como você está?'],
  ['ደህና ነኝ፣ አመሰግናለሁ።', 'Estou bem, obrigado.'],
  ['ስሜ ሊኑ ነው። ከብራዚል ነኝ።', 'Meu nome é Linu. Sou do Brasil.'],
  ['ቡና ወይም ሻይ?', 'Café ou chá?'],
];
