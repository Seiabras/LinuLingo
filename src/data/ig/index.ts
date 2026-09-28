import type { LanguagePack } from '../types';
import { VOCAB_IG } from './vocabulario';
import { UNITS_IG } from './curriculo';
import { GRAMMAR_IG } from './gramatica';
import { STORIES_IG } from './historias';
import { COMMUNITY_IG, ETYMOLOGY_IG, JOURNAL_PROMPTS_IG, SCENARIOS_IG, SHADOWING_IG } from './extras';
import { FALSE_FRIENDS_IG } from './falsos-amigos';
import { VARIANTS_IG } from './variantes';
import { LINGUISTICS_IG } from './linguistica';
import { ACCENTS_IG } from './sotaques';
import { PARES_IG } from './pares';
import { BICHOS_IG } from './bichos';
import { toIpaIg } from '@/services/ipa-africa';

export const IGBO: LanguagePack = {
  code: 'ig',
  name: 'Igbo',
  nativeName: 'Asụsụ Igbo',
  flag: '🇳🇬',
  lineage: {
    family: 'Níger-Congo',
    branches: ['Atlântico-congolês', 'Volta-Níger', 'Igbóide'],
    region: 'Sudeste da Nigéria',
    writing: 'Alfabeto latino (ị, ọ, ụ, ṅ e os tons)',
  },
  speechLocale: 'ig-NG',
  available: true,
  vocab: VOCAB_IG,
  units: UNITS_IG,
  etymology: ETYMOLOGY_IG,
  community: COMMUNITY_IG,
  scenarios: SCENARIOS_IG,
  stories: [...STORIES_IG, ...VARIANTS_IG.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_IG.length ? VARIANTS_IG : undefined,
  accents: ACCENTS_IG,
  grammar: GRAMMAR_IG,
  linguistics: LINGUISTICS_IG,
  journalPrompts: JOURNAL_PROMPTS_IG,
  shadowing: SHADOWING_IG,
  ipa: toIpaIg,
  specialChars: ['ị', 'ọ', 'ụ', 'ṅ'],
  minimalPairs: PARES_IG,
  animalSounds: BICHOS_IG,
  falseFriends: FALSE_FRIENDS_IG.length ? FALSE_FRIENDS_IG : undefined,
  // sem gênero gramatical: o palácio mostra só a explicação
  genders: [],
  greeting: 'Ndewo',
  sampleSentence: 'Ndewo! Aha m bụ Linu. Ka anyị mụta asụsụ Igbo ọnụ!',
  phrases: { hi: 'Ndewo!', thanks: 'Daalụ!', letsStart: ['Ka anyị bido!', 'Vamos começar!'] },
  formalMarkers: 'ndewo, biko, daalụ nke ukwuu',
  cognateNote:
    'O igbo é uma língua do tronco Níger-Congo, tonal, com harmonia vocálica (as vogais de uma palavra combinam entre si: ị, ụ, ọ, a de um lado; i, u, o, e do outro). Não é parente do português. É a língua dos igbos do sudeste da Nigéria e de Chinua Achebe, que escreveu em inglês, mas encheu seus romances de provérbios igbos: «ilu bụ mmanụ e ji eri okwu» (os provérbios são o azeite com que se comem as palavras).',
};
