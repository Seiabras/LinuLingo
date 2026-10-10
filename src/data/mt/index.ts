import type { LanguagePack } from '../types';
import { VOCAB_MT } from './vocabulario';
import { UNITS_MT } from './curriculo';
import { GRAMMAR_MT } from './gramatica';
import { STORIES_MT } from './historias';
import { COMMUNITY_MT, ETYMOLOGY_MT, JOURNAL_PROMPTS_MT, SCENARIOS_MT, SHADOWING_MT } from './extras';
import { ACCENTS_MT } from './sotaques';

/**
 * Maltês (Malti). Fontes principais (inglês): Wikipédia “Maltese language”, “Maltese grammar”,
 * “Maltese alphabet”, “Siculo-Arabic”; Wiktionary (verbetes individuais); Wikivoyage “Maltese
 * phrasebook”. Ver os comentários de vocabulario.ts para a lista completa de URLs.
 *
 * Classificação: o maltês é afro-asiático, do ramo semítico, descendente do sículo-árabe (o árabe
 * falado na Sicília medieval, hoje extinto — o maltês é o seu único descendente vivo). Apesar disso,
 * é a única língua semítica padronizada do mundo escrita só em alfabeto latino (nunca em árabe),
 * com ortografia fixada em 1924 e letras próprias (ċ, ġ, ħ, ż, għ).
 */
export const MALTES: LanguagePack = {
  code: 'mt',
  name: 'Maltês',
  nativeName: 'Malti',
  flag: '🇲🇹',
  lineage: {
    family: 'Afro-asiático',
    branches: ['Semítico', 'Semítico central', 'Árabe', 'Sículo-árabe (hoje extinto; o maltês é o único descendente vivo)'],
    region: 'Malta (a língua nasceu do árabe falado na Sicília medieval)',
    writing: 'Alfabeto latino — a única língua semítica padronizada do mundo sem escrita própria do Oriente Médio, com letras extras (ċ, ġ, ħ, ż, għ)',
  },
  speechLocale: 'mt-MT',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 por enquanto (unidades 1 a 4, 104 palavras, 8 tópicos de gramática, 4 histórias). Vocabulário e frases foram conferidos na Wikipédia, no Wiktionary e no Wikivoyage em inglês. O A2 já traz o presente/imperfeito dos verbos (prefixos n-/t-/j-), os demonstrativos (dan/din/dawn, dak/dik/dawk) e o possessivo com “ta’” — mas o maltês continua sem um verbo “ser” conjugado no presente: as frases usam o pronome huwa/hija ligando sujeito e predicado (“ix-xogħol huwa tajjeb”), negado com “mhux”, por falta de fonte própria do maltês pra um verbo “ser” de verdade. Do B1 até o C1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_MT,
  units: UNITS_MT,
  etymology: ETYMOLOGY_MT,
  community: COMMUNITY_MT,
  scenarios: SCENARIOS_MT,
  stories: STORIES_MT,
  accents: ACCENTS_MT,
  grammar: GRAMMAR_MT,
  journalPrompts: JOURNAL_PROMPTS_MT,
  shadowing: SHADOWING_MT,
  specialChars: ['ċ', 'ġ', 'ħ', 'ż', 'għ'],
  // masculino e feminino, sem neutro (como no árabe e nos outros idiomas semíticos)
  genders: ['m', 'f'],
  greeting: 'Bonġu',
  sampleSentence: 'Bonġu! Jisimni Linu.',
  phrases: { hi: 'Bonġu!', thanks: 'Grazzi!', letsStart: ['Tajjeb!', 'Vamos começar!'] },
  formalMarkers: '“jekk jogħġbok” (por favor) e “skużi” antes de um pedido',
  cognateNote:
    'O maltês descende do sículo-árabe, o árabe falado na Sicília medieval, hoje extinto — por isso tem uma base de gramática e vocabulário semítica por baixo da escrita latina. Mas boa parte do seu vocabulário do dia a dia veio depois do italiano e do siciliano, e um pouco até do inglês. Cada palavra do vocabulário mostra a camada a que pertence.',
};
