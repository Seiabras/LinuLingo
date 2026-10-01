import type { LanguagePack } from '../types';
import { PARES_DA } from './pares';
import { BICHOS_DA } from './bichos';
import { VOCAB_DA } from './vocabulario';
import { UNITS_DA } from './curriculo';
import { GRAMMAR_DA } from './gramatica';
import { STORIES_DA } from './historias';
import { COMMUNITY_DA, ETYMOLOGY_DA, JOURNAL_PROMPTS_DA, SCENARIOS_DA, SHADOWING_DA } from './extras';
import { FALSE_FRIENDS_DA } from './falsos-amigos';
import { VARIANTS_DA } from './variantes';
import { LINGUISTICS_DA } from './linguistica';
import { ACCENTS_DA } from './sotaques';
import { IPA_DA } from './pronuncia';
import { lexiconIpa } from '@/services/ipa-lexicon';

export const DINAMARQUES: LanguagePack = {
  code: 'da',
  name: 'Dinamarquês',
  nativeName: 'Dansk',
  flag: '🇩🇰',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico setentrional', 'Nórdico oriental'],
    region: 'Escandinávia (Dinamarca, Ilhas Faroé e Groenlândia)',
    writing: 'Alfabeto latino (æ, ø, å)',
  },
  speechLocale: 'da-DK',
  available: true,
  vocab: VOCAB_DA,
  units: UNITS_DA,
  etymology: ETYMOLOGY_DA,
  community: COMMUNITY_DA,
  scenarios: SCENARIOS_DA,
  stories: [...STORIES_DA, ...VARIANTS_DA.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_DA,
  accents: ACCENTS_DA,
  grammar: GRAMMAR_DA,
  linguistics: LINGUISTICS_DA,
  journalPrompts: JOURNAL_PROMPTS_DA,
  shadowing: SHADOWING_DA,
  // a escrita dinamarquesa esconde o stød, o d suave e as letras mudas: a IPA vem de um dicionário por forma
  ipa: (t) => lexiconIpa(t, IPA_DA),
  specialChars: ['æ', 'ø', 'å', 'é'],
  minimalPairs: PARES_DA,
  animalSounds: BICHOS_DA,
  falseFriends: FALSE_FRIENDS_DA,
  // gênero comum (en) e neutro (et): no palácio, a Forja guarda as en-ord e o Jardim, as et-ord
  genders: ['m', 'n'],
  genderNames: { m: 'comum (en)', n: 'neutro (et)' },
  greeting: 'God morgen',
  sampleSentence: 'Hej! Jeg hedder Linu. Nu lærer vi dansk!',
  phrases: { hi: 'Hej!', thanks: 'Tak!', letsStart: ['Så går vi i gang!', 'Vamos lá!'] },
  formalMarkers: 'kunne jeg få…?, mange tak, undskyld',
  cognateNote:
    'O dinamarquês é uma língua germânica, irmã do norueguês e do sueco e prima do inglês e do alemão: muitas palavras básicas lembram o inglês (hus = house, vand = water). Do português, os parentes vêm do latim e do francês (station, restaurant, fortov). Atenção aos falsos amigos: “rar” é simpático, “frokost” é almoço e “fart” é velocidade.',
};
