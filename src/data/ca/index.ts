import type { LanguagePack } from '../types';
import { VOCAB_CA } from './vocabulario';
import { UNITS_CA } from './curriculo';
import { GRAMMAR_CA } from './gramatica';
import { STORIES_CA } from './historias';
import { ETYMOLOGY_CA } from './etimologia';
import { COMMUNITY_CA, SCENARIOS_CA } from './conversas';
import { JOURNAL_PROMPTS_CA, SHADOWING_CA } from './praticas';
import { LINGUISTICS_CA } from './linguistica';
import { ACCENTS_CA } from './sotaques';
import { VARIANTS_CA } from './variantes';
import { PARES_CA } from './pares';
import { BICHOS_CA } from './bichos';
import { FALSE_FRIENDS_CA } from './falsos-amigos';
import { IPA_CA } from './pronuncia';
import { setPronunciationLexiconCa, toIpaCa } from '@/services/ipa-ca';

setPronunciationLexiconCa(IPA_CA);

export const CATALAO: LanguagePack = {
  code: 'ca',
  name: 'Catalão',
  nativeName: 'Català',
  // não há bandeira própria no Unicode para a Catalunha (não é um país da ISO 3166-1); a maioria dos
  // falantes está na Espanha, de onde vem a bandeira usada aqui.
  flag: '🇪🇸',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Occitano-românico'],
    region: 'Leste da Espanha (Catalunha, Comunidade Valenciana, Baleares), Andorra, sul da França e l\'Alguer (Sardenha, Itália)',
    writing: 'Alfabeto latino (à è é í ï ò ó ú ü ç, l·l)',
  },
  speechLocale: 'ca-ES',
  available: true,
  ipa: toIpaCa,
  vocab: VOCAB_CA,
  units: UNITS_CA,
  etymology: ETYMOLOGY_CA,
  community: COMMUNITY_CA,
  scenarios: SCENARIOS_CA,
  stories: [...STORIES_CA, ...VARIANTS_CA.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_CA,
  grammar: GRAMMAR_CA,
  linguistics: LINGUISTICS_CA,
  accents: ACCENTS_CA,
  minimalPairs: PARES_CA,
  animalSounds: BICHOS_CA,
  falseFriends: FALSE_FRIENDS_CA,
  journalPrompts: JOURNAL_PROMPTS_CA,
  shadowing: SHADOWING_CA,
  specialChars: ['à', 'è', 'é', 'í', 'ï', 'ò', 'ó', 'ú', 'ü', 'ç', 'l·l'],
  // o catalão não tem substantivos neutros: a sala do Jardim fica fechada no palácio
  genders: ['m', 'f'],
  greeting: 'Bon dia',
  sampleSentence: 'Bon dia! Em dic Linu. Anem a aprendre català!',
  phrases: { hi: 'Hola!', thanks: 'Gràcies!', letsStart: ['Comencem!', 'Vamos começar!'] },
  formalMarkers: 'vostè, si us plau, podria…?',
  cognateNote:
    'O catalão é uma língua românica, prima próxima do espanhol, do francês e do português. É a língua-ponte entre o mundo ibérico e o occitano-francês: muitas palavras se reconhecem na hora, e outras (per/per a, ésser/estar, os pronomes febles) exigem atenção nova.',
};
