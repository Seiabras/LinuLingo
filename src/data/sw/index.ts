import type { LanguagePack } from '../types';
import { VOCAB_SW } from './vocabulario';
import { UNITS_SW } from './curriculo';
import { GRAMMAR_SW } from './gramatica';
import { STORIES_SW } from './historias';
import { COMMUNITY_SW, JOURNAL_PROMPTS_SW, SCENARIOS_SW, SHADOWING_SW } from './extras';
import { ETYMOLOGY_SW } from './etimologia';
import { FALSE_FRIENDS_SW } from './falsos-amigos';
import { LINGUISTICS_SW } from './linguistica';
import { ACCENTS_SW } from './sotaques';
import { PARES_SW } from './pares';
import { BICHOS_SW } from './bichos';
import { toIpaSw } from '@/services/ipa-africa';

export const SUAILI: LanguagePack = {
  code: 'sw',
  name: 'Suaíli',
  nativeName: 'Kiswahili',
  flag: '🇹🇿',
  lineage: {
    family: 'Níger-Congo',
    branches: ['Atlântico-congolês', 'Benue-congolês', 'Banto'],
    region: 'Costa da África Oriental (Tanzânia e Quênia), hoje também os Grandes Lagos',
    writing: 'Alfabeto latino (sem q nem x; ng’ com apóstrofo)',
  },
  speechLocale: 'sw-TZ',
  available: true,
  vocab: VOCAB_SW,
  units: UNITS_SW,
  etymology: ETYMOLOGY_SW,
  community: COMMUNITY_SW,
  scenarios: SCENARIOS_SW,
  stories: STORIES_SW,
  accents: ACCENTS_SW,
  grammar: GRAMMAR_SW,
  linguistics: LINGUISTICS_SW,
  journalPrompts: JOURNAL_PROMPTS_SW,
  shadowing: SHADOWING_SW,
  ipa: toIpaSw,
  specialChars: ["'"],
  minimalPairs: PARES_SW,
  animalSounds: BICHOS_SW,
  falseFriends: FALSE_FRIENDS_SW,
  // sem gênero gramatical: o suaíli tem classes de substantivos (m-/wa-, ki-/vi-…), não masculino e feminino
  genders: [],
  greeting: 'Hujambo',
  sampleSentence: 'Hujambo! Jina langu ni Linu. Tujifunze Kiswahili!',
  phrases: { hi: 'Jambo!', thanks: 'Asante!', letsStart: ['Tuanze!', 'Vamos começar!'] },
  formalMarkers: 'shikamoo, tafadhali, naomba, samahani, ndugu, mzee, bwana, bibi',
  cognateNote:
    'O suaíli é uma língua banta, da grande família Níger-Congo, parente do quimbundo e do umbundo de Angola, do zulu e do lingala. Séculos de comércio pelo oceano Índico lhe deram muitas palavras do árabe (kitabu, livro; saa, hora; habari, notícia), algumas do persa e do hindi (chai, chá) e várias do português, dos tempos em que Portugal dominou a costa: meza (mesa), gereza (prisão, da “igreja” fortificada), bendera (bandeira), karata (carta de baralho), leso (lenço). Não tem gênero gramatical: no lugar dele, os substantivos se dividem em classes marcadas por prefixos (m-/wa-, ki-/vi-), e o verbo concorda com elas.',
};
