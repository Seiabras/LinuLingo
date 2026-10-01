import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no guarani). */
export const COMMUNITY_GN: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Mba\'éichapa nde réra ha moõpa reiko?',
    content: 'Che réra Bruno. Mba (coisa) ha che aiko Curitibape.',
    reference: 'Che réra Bruno. Mba\'e (coisa) ha che aiko Curitibápe.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Mba\'éicha nde óga?',
    content: 'Che óga michĩ.',
    reference: 'Che róga michĩ.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ore ha ñande: mávapa oiko nde róga?',
    content: 'Ñande roiko oréndive: che sy ha che ru.',
    reference: 'Ore roiko oréndive: che sy ha che ru.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_GN: ScenarioSeed[] = [
  {
    id: 'gn-s1',
    title: 'Peteĩ chipa ha tereré',
    emoji: '🥖',
    cefr: 'A1',
    register: 'informal',
    persona: 'Marta, vende chipa e tereré numa barraca de rua em Assunção',
    description:
      'Marta vende chipa e tereré numa barraquinha de rua, em Assunção. O guarani não tem um pronome formal como o espanhol “usted”: a conversa é sempre direta, de “nde” para “nde”.',
    turns: [
      {
        bot: 'Mba\'éichapa! Chipa ha tereré.',
        botTranslation: 'Oi! Chipa e tereré.',
        keywords: ['heẽ', 'chipa', 'nahániri'],
        suggestions: ['Heẽ, peteĩ chipa, aguyje.', 'Heẽ ha peteĩ tereré avei.'],
      },
      {
        bot: 'Ikatúpa ja\'u tereré avei?',
        botTranslation: 'Podemos tomar tereré também?',
        keywords: ['heẽ', 'tereré'],
        suggestions: ['Heẽ, aguyje!', 'Heẽ, iporã!'],
      },
    ],
  },
];

/**
 * Palavras do guarani com a raiz tupi-guarani ou a formação interna (aglutinação). Diferente do
 * tupi antigo — cujo vocabulário entrou maciçamente no português colonial (mandioca, jacaré, ipê,
 * caju, tucano, jaguar vêm todos do tupi antigo, não do guarani, segundo os dicionários etimológicos
 * consultados) — o contato direto do guarani com o português se deu, sobretudo, pela fronteira com o
 * Paraguai: por isso os poucos empréstimos diretos são palavras como “tereré”, e não o vocabulário
 * de bichos e plantas da floresta que veio do tupi.
 */
export const ETYMOLOGY_GN: EtymologySeed[] = [
  {
    word: 'tereré',
    root_word: 'tereré',
    origin_language: 'Guarani paraguaio',
    cognates: c(['pt', 'tereré'], ['es', 'tereré']),
    evolution_note:
      'Ao contrário da maioria das palavras indígenas do português do Brasil (vindas do tupi antigo), “tereré” é um empréstimo direto e recente do guarani paraguaio: o dicionário etimológico registra a palavra portuguesa como vinda exatamente do guarani “tereré”, sem passar pelo tupi.',
    transparent: true,
  },
  {
    word: 'óga',
    root_word: '*ok',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'oca']),
    evolution_note:
      '“Óga” (casa) vem da raiz tupi-guarani “*ok”, a mesma que deu o tupi antigo “oka” — e foi o tupi antigo, não o guarani, que emprestou essa palavra ao português como “oca” (cabana indígena). As duas palavras, óga e oca, são primas pela raiz comum, não mãe e filha.',
    transparent: true,
  },
  {
    word: 'jagua',
    root_word: '*jawar',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'jaguar (via tupi antigo îagûara)']),
    evolution_note:
      'Em guarani, “jagua” quer dizer cachorro (um sentido antigo da palavra era “onça”). A raiz tupi-guarani “*jawar” também deu o tupi antigo “îagûara”, de onde veio o português “jaguar” — outro caso de primas, não de empréstimo direto do guarani.',
    transparent: false,
  },
  {
    word: 'ita',
    root_word: 'ita',
    origin_language: 'Guarani paraguaio',
    cognates: c(['gn', 'itaju (ouro, lit. “pedra amarela”)']),
    evolution_note:
      'O guarani é uma língua aglutinante: gruda palavras para formar novas. “Ita” (pedra) aparece em várias palavras compostas, como “itaju” (ouro, de “ita” + “ju”, amarelo/dourado) — o mesmo jeito de formar palavras que dá “avañe\'ẽ” a partir de “ava” e “ñe\'ẽ”.',
    transparent: false,
  },
  {
    word: 'avañe\'ẽ',
    root_word: 'ava + ñe\'ẽ',
    origin_language: 'Guarani paraguaio',
    cognates: c(['gn', 'ava (gente, povo, pessoa)'], ['gn', 'ñe\'ẽ (língua, palavra; falar)']),
    evolution_note:
      '“Avañe\'ẽ”, o nome que os próprios falantes dão à língua, é a soma de “ava” (gente, povo) com “ñe\'ẽ” (língua): “a língua do povo”. É um exemplo direto da aglutinação do guarani, o mesmo mecanismo gramatical visto nos verbos e na posse.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_GN: [string, string][] = [
  ['Mba\'éichapa oiko nde ára?', 'Como foi o seu dia?'],
  ['Mba\'éicha nde família?', 'Como é a sua família?'],
  ['Mba\'épa rekaru?', 'O que você come?'],
  ['Mba\'éicha nde róga?', 'Como é a sua casa?'],
];

export const SHADOWING_GN: [string, string][] = [
  ['Mba\'éichapa! Che réra Ana.', 'Oi! Meu nome é Ana.'],
  ['Iporã, aguyje! Ha nde?', 'Bem, obrigado(a)! E você?'],
  ['Che sy ha che ru oiko oréndive.', 'Minha mãe e meu pai moram com a gente.'],
  ['Ikatúpa ja\'u tereré?', 'Podemos tomar tereré?'],
];
