import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo wolof). */
export const COMMUNITY_WO: CommunitySeed[] = [
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'Na nga def?',
    content: 'Jàmm.',
    reference: 'Jàmm rekk, jërejëf.',
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Baay ak ___.',
    content: 'Baay ak baay.',
    reference: 'Baay ak yaay.',
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Dama ___ ceeb.',
    content: 'Dama naan ceeb.',
    reference: 'Dama lekk ceeb.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas não registram, para o wolof, um pronome ou marca
 * gramatical “formal” separada da informal como o “você”/“o senhor” do português: por isso o cenário é
 * informal (ver `formalMarkers` em index.ts).
 */
export const SCENARIOS_WO: ScenarioSeed[] = [
  {
    id: 'wo-s1',
    title: 'Na nga def? Visitando uma família em Dakar',
    emoji: '🏠',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma vizinha gentil, em Dakar',
    description: 'As fontes consultadas não documentam, para o wolof, uma forma de tratamento separada da informal: o mesmo cumprimento serve tanto para conhecidos quanto para visitantes.',
    turns: [
      {
        bot: 'Na nga def?',
        botTranslation: 'Como vai?',
        keywords: ['jàmm', 'rekk'],
        suggestions: ['Jàmm rekk, jërejëf.'],
      },
      {
        bot: 'Jàmm nga am?',
        botTranslation: 'Você tem paz?',
        keywords: ['jàmm', 'rekk'],
        suggestions: ['Jàmm rekk.'],
      },
      {
        bot: 'Baay ak doom?',
        botTranslation: 'O pai e o filho (ou filha)? (perguntando pela sua família)',
        keywords: ['baay', 'doom'],
        suggestions: ['Baay ak doom.'],
      },
    ],
  },
];

/**
 * Etimologia: palavras wolof que viraram empréstimos no francês (e, por ele, no inglês) — o caminho
 * raro deste pacote, de uma língua africana para línguas europeias, e não o contrário. As cinco
 * entradas foram conferidas uma a uma no Wikcionário em inglês (verbetes “bissap”, “toubab”, “fonio”,
 * “mbalax”, “boubou”) e na categoria “French terms derived from Wolof” do mesmo dicionário:
 * https://en.wiktionary.org/wiki/Category:French_terms_derived_from_Wolof
 */
export const ETYMOLOGY_WO: EtymologySeed[] = [
  {
    word: 'bisaab',
    root_word: 'bisaab',
    origin_language: 'Wolof',
    cognates: c(['fr', 'bissap'], ['en', 'bissap']),
    evolution_note:
      'O francês e o inglês tomaram emprestado o nome do suco vermelho de hibisco direto do wolof: o Wikcionário registra “bissap” (nas duas línguas) como vindo de “bisaab” (“roselle”, o nome botânico da flor usada na bebida) — o caminho oposto do que costuma aparecer nos pacotes de língua indígena deste app: aqui é uma língua africana emprestando para línguas europeias, não o contrário.',
    transparent: false,
  },
  {
    word: 'tubaab',
    root_word: 'tubaab',
    origin_language: 'Wolof',
    cognates: c(['fr', 'toubab'], ['en', 'toubab']),
    evolution_note:
      'O francês e o inglês têm a palavra “toubab” (estrangeiro branco, europeu), e os dois Wikcionários consultados propõem origens diferentes a partir do wolof “tubaab” — sem que nenhuma das duas fontes se diga certa: o Wikcionário em inglês sugere que venha do nome wolof para a Europa, “Tougal” (“toubab” seria então “gente de Tougal”, do mesmo jeito que “wolof” é “gente de Jolof”); já o Wikcionário em francês levanta a hipótese de “tubaab” ser uma deformação de “toubib” (médico, em francês/árabe). As fontes concordam só que a palavra vem do wolof “tubaab” — a etimologia mais funda fica em aberto.',
    transparent: false,
  },
  {
    word: 'foño',
    root_word: 'foño',
    origin_language: 'Wolof',
    cognates: c(['fr', 'fonio'], ['en', 'fonio']),
    evolution_note:
      'O fônio, cereal tradicional da África Ocidental, levou para o francês e para o inglês o próprio nome wolof: os dois Wikcionários registram “fonio” como vindo direto de “foño”, sem mudança de sentido.',
    transparent: false,
  },
  {
    word: 'mbalax',
    root_word: 'mbalax',
    origin_language: 'Wolof',
    cognates: c(['fr', 'mbalax'], ['en', 'mbalax']),
    evolution_note:
      'O ritmo e estilo musical mais conhecido do Senegal deu nome a si mesmo também em francês e em inglês: o Wikcionário em inglês registra “mbalax” como emprestado do wolof, onde a palavra quer dizer “ritmo” — sem alteração na grafia, já que o termo nomeia o próprio gênero musical fora do Senegal.',
    transparent: false,
  },
  {
    word: 'mbubb',
    root_word: 'mbubb',
    origin_language: 'Wolof',
    cognates: c(['fr', 'boubou'], ['en', 'boubou']),
    evolution_note:
      'O bubu, a veste tradicional larga e comprida, chegou ao francês como “boubou” — tomado emprestado do wolof “mbubb” — e de lá passou também ao inglês, segundo o Wikcionário: “from French boubou, from Wolof mbubb”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_WO: [string, string][] = [
  ['Na nga def?', 'Como você está?'],
  ['Jàmm rekk, jërejëf.', 'Vou bem (só paz), obrigado(a).'],
  ['Dama bëgg ceeb ak jën.', 'Eu quero arroz com peixe.'],
  ['Dama gis ak bët.', 'Eu vejo com os olhos.'],
];

export const SHADOWING_WO: [string, string][] = [
  ['Xaj bi.', 'O cachorro.'],
  ['Ñaar, ñett, ñeent.', 'Dois, três, quatro.'],
  ['Jàmm rekk, jërejëf.', 'Vou bem (só paz), obrigado(a).'],
  ['Dama bëgg ceeb ak jën.', 'Eu quero arroz com peixe.'],
  ['Maa ngi tudd Omar.', 'Eu me chamo Omar.'],
];
