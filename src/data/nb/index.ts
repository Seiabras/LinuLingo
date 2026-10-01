import type { LanguagePack } from '../types';
import { PARES_NB } from './pares';
import { BICHOS_NB } from './bichos';
import { VOCAB_NB } from './vocabulario';
import { UNITS_NB } from './curriculo';
import { GRAMMAR_NB } from './gramatica';
import { STORIES_NB } from './historias';
import { COMMUNITY_NB, ETYMOLOGY_NB, JOURNAL_PROMPTS_NB, SCENARIOS_NB, SHADOWING_NB } from './extras';
import { FALSE_FRIENDS_NB } from './falsos-amigos';
import { VARIANTS_NB } from './variantes';
import { LINGUISTICS_NB } from './linguistica';
import { ACCENTS_NB } from './sotaques';
import { IPA_NB } from './pronuncia';
import { lexiconIpa } from '@/services/ipa-lexicon';

export const NORUEGUES: LanguagePack = {
  code: 'nb',
  name: 'Norueguês',
  nativeName: 'Norsk (bokmål)',
  flag: '🇳🇴',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico setentrional', 'Nórdico ocidental'],
    region: 'Escandinávia (Noruega)',
    writing: 'Alfabeto latino (æ, ø, å)',
  },
  speechLocale: 'nb-NO',
  available: true,
  vocab: VOCAB_NB,
  units: UNITS_NB,
  etymology: ETYMOLOGY_NB,
  community: COMMUNITY_NB,
  scenarios: SCENARIOS_NB,
  stories: [...STORIES_NB, ...VARIANTS_NB.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_NB,
  accents: ACCENTS_NB,
  grammar: GRAMMAR_NB,
  linguistics: LINGUISTICS_NB,
  journalPrompts: JOURNAL_PROMPTS_NB,
  shadowing: SHADOWING_NB,
  // a escrita não mostra a quantidade das vogais nem os tons: a IPA vem de um dicionário por forma (fala de Oslo)
  ipa: (t) => lexiconIpa(t, IPA_NB),
  specialChars: ['æ', 'ø', 'å', 'é'],
  minimalPairs: PARES_NB,
  animalSounds: BICHOS_NB,
  falseFriends: FALSE_FRIENDS_NB,
  // os três gêneros: no bokmål, as femininas (ei bok → boka) também aceitam o masculino (en bok → boken)
  genders: ['m', 'f', 'n'],
  genderNames: { m: 'masculino (en)', f: 'feminino (ei)', n: 'neutro (et)' },
  greeting: 'God morgen',
  sampleSentence: 'Hei! Jeg heter Linu. Nå lærer vi norsk!',
  phrases: { hi: 'Hei!', thanks: 'Takk!', letsStart: ['Nå kjører vi!', 'Vamos lá!'] },
  formalMarkers: 'kunne jeg få…?, tusen takk, unnskyld',
  cognateNote:
    'O norueguês é uma língua germânica, prima do inglês e do alemão e irmã do sueco e do dinamarquês: muitas palavras básicas lembram o inglês (hus = house, vann = water). Do português, os parentes vêm do latim e do francês (stasjon, restaurant, fortau). Atenção aos falsos amigos: “rar” é estranho, “prate” é conversar e “sort” é preto.',
};
