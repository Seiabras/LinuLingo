import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção. O erro típico de brasileiros (que já sabem um pouco de
 * espanhol) é usar a conjugação verbal do espanhol em vez da partícula invariável do palenquero.
 */
export const COMMUNITY_PLN: CommunitySeed[] = [
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Bo a viní?',
    content: 'Yo vine andi Palenge.',
    reference: 'Í a viní andi Palenge.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Bo ten moná?',
    content: 'Í tengo moná.',
    reference: 'Í ten moná.',
  },
  {
    author_name: 'Vinícius 🇧🇷',
    prompt: 'Kuanto ngombe suto ten?',
    content: 'Suto tenemos ndo ngombe.',
    reference: 'Suto ten ndo ngombe.',
  },
];

/** Cenário de conversa: comprar amendoim e peixe na casa de Mai. */
export const SCENARIOS_PLN: ScenarioSeed[] = [
  {
    id: 'pln-s1',
    title: 'Andi posá',
    emoji: '🥜',
    cefr: 'A1',
    register: 'informal',
    persona: 'Mai, uma mulher de Palenque que vende ngubá e pekáo em casa',
    description: 'Mai vende amendoim e peixe na própria casa, um jeito comum de ganhar dinheiro em Palenque. A conversa é informal, entre vendedora e cliente.',
    turns: [
      {
        bot: 'Í ten ngubá.',
        botTranslation: 'Eu tenho amendoim.',
        keywords: ['ngubá', 'ten', 'burú'],
        suggestions: ['Í ten burú.', 'Í ten ndo burú.'],
      },
      {
        bot: 'Bo ten burú?',
        botTranslation: 'Você tem dinheiro?',
        keywords: ['burú', 'ten', 'nu'],
        suggestions: ['Í ten burú.', 'Í nu ten burú.'],
      },
    ],
  },
];

/**
 * Palavras do palenquero com a origem real de cada uma, mostrando a mistura entre o espanhol (a maior
 * parte do léxico) e as línguas bantas — sobretudo o kikongo — que marcaram a gramática e cerca de 300
 * palavras da língua, segundo a Wikipédia em inglês. Fontes: Wikipédia (inglês), artigo “Palenquero”
 * (vocabulário de origem africana, a partícula “ma”); Wikipédia (espanhol), artigo “Criollo palenquero”
 * (fonologia); Wikcionário (inglês), entradas “ngombe”, “ngubá” e “mujé” em palenquero.
 */
export const ETYMOLOGY_PLN: EtymologySeed[] = [
  {
    word: 'ngombe',
    root_word: 'ngombe',
    origin_language: 'Kikongo',
    cognates: c(['kg', 'ngombe (gado)'], ['sw', "ng'ombe (gado, suaíli — outra língua banta)"]),
    evolution_note: 'Uma das cerca de 300 palavras de origem africana identificadas no palenquero, segundo a Wikipédia — a maioria vinda do kikongo, língua banta falada por boa parte das pessoas escravizadas que fundaram Palenque. “Ngombe” chegou direto ao palenquero, sem passar pelo espanhol.',
    transparent: false,
  },
  {
    word: 'ngubá',
    root_word: 'nguba',
    origin_language: 'Kikongo',
    cognates: c(['kg', 'nguba (amendoim)']),
    evolution_note: 'Também vem do kikongo, igual a “ngombe”. O Wikcionário registra as variantes “gubá” e “angubá” para a mesma palavra.',
    transparent: false,
  },
  {
    word: 'ma',
    root_word: 'ma-',
    origin_language: 'Kikongo',
    cognates: c(['kg', 'ma- (prefixo de plural)']),
    evolution_note: 'Segundo a Wikipédia em inglês, esta é “a única flexão de origem kikongo presente no palenquero”: o prefixo de plural do kikongo virou uma partícula solta, posta antes do substantivo — “ma posá” (as casas), “ma ngaína” (as galinhas) — em vez de um “-s” no fim da palavra, como no espanhol ou no português.',
    transparent: false,
  },
  {
    word: 'mujé',
    root_word: 'mujer',
    origin_language: 'Espanhol',
    cognates: c(['es', 'mujer'], ['pt', 'mulher (mesma raiz latina, “mulier”)']),
    evolution_note: 'Vem direto do espanhol “mujer”, com o /r/ final caindo — uma mudança regular de som do espanhol para o palenquero, a mesma língua de origem da maior parte do vocabulário.',
    transparent: false,
  },
  {
    word: 'pekáo',
    root_word: 'pescado',
    origin_language: 'Espanhol',
    cognates: c(['es', 'pescado'], ['pt', 'peixe (mesma raiz latina, “piscis”)']),
    evolution_note: 'Mostra uma mudança de som regular e bem documentada do palenquero: o /s/ no fim da sílaba do espanhol “pescado” desaparece, virando “pekáo”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_PLN: [string, string][] = [
  ['Bo ten moná?', 'Você tem filhos?'],
  ['Onde bo ta?', 'Onde você está?'],
  ['Kuanto ngombe bo ten?', 'Quantos bois/vacas você tem?'],
  ['Bo e foratero?', 'Você é forasteiro?'],
];

export const SHADOWING_PLN: [string, string][] = [
  ['Suto ta chitiá palenquero.', 'Nós falamos palenquero.'],
  ['Bo a viní?', 'Você veio?'],
  ['Ese mujé ta ngolo.', 'Aquela mulher é/está gorda.'],
  ['Bo é mamá mí nu.', 'Você não é minha mãe.'],
];
