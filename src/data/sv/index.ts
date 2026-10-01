import type { LanguagePack } from '../types';
import { PARES_SV } from './pares';
import { BICHOS_SV } from './bichos';
import { VOCAB_SV } from './vocabulario';
import { UNITS_SV } from './curriculo';
import { GRAMMAR_SV } from './gramatica';
import { STORIES_SV } from './historias';
import { COMMUNITY_SV, ETYMOLOGY_SV, JOURNAL_PROMPTS_SV, SCENARIOS_SV, SHADOWING_SV } from './extras';
import { FALSE_FRIENDS_SV } from './falsos-amigos';
import { VARIANTS_SV } from './variantes';
import { LINGUISTICS_SV } from './linguistica';
import { ACCENTS_SV } from './sotaques';
import { IPA_SV } from './pronuncia';
import { lexiconIpa } from '@/services/ipa-lexicon';

export const SUECO: LanguagePack = {
  code: 'sv',
  name: 'Sueco',
  nativeName: 'Svenska',
  flag: '🇸🇪',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico setentrional', 'Nórdico oriental'],
    region: 'Escandinávia (Suécia e a costa da Finlândia)',
    writing: 'Alfabeto latino (å, ä, ö)',
  },
  speechLocale: 'sv-SE',
  available: true,
  vocab: VOCAB_SV,
  units: UNITS_SV,
  etymology: ETYMOLOGY_SV,
  community: COMMUNITY_SV,
  scenarios: SCENARIOS_SV,
  stories: [...STORIES_SV, ...VARIANTS_SV.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_SV,
  accents: ACCENTS_SV,
  grammar: GRAMMAR_SV,
  linguistics: LINGUISTICS_SV,
  journalPrompts: JOURNAL_PROMPTS_SV,
  shadowing: SHADOWING_SV,
  // a escrita do sueco não mostra a quantidade das vogais nem os tons: a IPA vem de um dicionário por forma
  ipa: (t) => lexiconIpa(t, IPA_SV),
  specialChars: ['å', 'ä', 'ö', 'é'],
  minimalPairs: PARES_SV,
  animalSounds: BICHOS_SV,
  falseFriends: FALSE_FRIENDS_SV,
  // gênero comum (en) e neutro (ett): no palácio, a sala do masculino guarda as en-ord e o Jardim, as ett-ord
  genders: ['m', 'n'],
  genderNames: { m: 'comum (en)', n: 'neutro (ett)' },
  greeting: 'God morgon',
  sampleSentence: 'Hej! Jag heter Linu. Nu lär vi oss svenska!',
  phrases: { hi: 'Hej!', thanks: 'Tack!', letsStart: ['Nu kör vi!', 'Vamos lá!'] },
  formalMarkers: 'skulle jag kunna…?, tack så mycket, ursäkta',
  cognateNote:
    'O sueco é uma língua germânica, prima do inglês e do alemão: muitas palavras básicas lembram o inglês (hus = house, vatten = water). Do português, os parentes vêm do latim e do francês (station, restaurang, trottoar). Atenção aos falsos amigos: “god” é gostoso, “rolig” é divertido e “semester” é férias.',
};
