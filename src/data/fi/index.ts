import type { LanguagePack } from '../types';
import { PARES_FI } from './pares';
import { BICHOS_FI } from './bichos';
import { VOCAB_FI } from './vocabulario';
import { UNITS_FI } from './curriculo';
import { GRAMMAR_FI } from './gramatica';
import { STORIES_FI } from './historias';
import { COMMUNITY_FI, ETYMOLOGY_FI, JOURNAL_PROMPTS_FI, SCENARIOS_FI, SHADOWING_FI } from './extras';
import { FALSE_FRIENDS_FI } from './falsos-amigos';
import { VARIANTS_FI } from './variantes';
import { LINGUISTICS_FI } from './linguistica';
import { ACCENTS_FI } from './sotaques';
import { IPA_FI } from './pronuncia';
import { lexiconIpa } from '@/services/ipa-lexicon';

export const FINLANDES: LanguagePack = {
  code: 'fi',
  name: 'Finlandês',
  nativeName: 'Suomi',
  flag: '🇫🇮',
  lineage: {
    family: 'Urálico',
    branches: ['Fínico', 'Fínico setentrional'],
    region: 'Fenoscândia (Finlândia)',
    writing: 'Alfabeto latino (ä, ö)',
  },
  speechLocale: 'fi-FI',
  available: true,
  vocab: VOCAB_FI,
  units: UNITS_FI,
  etymology: ETYMOLOGY_FI,
  community: COMMUNITY_FI,
  scenarios: SCENARIOS_FI,
  stories: [...STORIES_FI, ...VARIANTS_FI.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_FI,
  accents: ACCENTS_FI,
  grammar: GRAMMAR_FI,
  linguistics: LINGUISTICS_FI,
  journalPrompts: JOURNAL_PROMPTS_FI,
  shadowing: SHADOWING_FI,
  // a escrita é quase fonética, mas não marca a tônica nem a quantidade como o app mostra: a IPA vem de um dicionário por forma
  ipa: (t) => lexiconIpa(t, IPA_FI),
  specialChars: ['ä', 'ö', 'å'],
  minimalPairs: PARES_FI,
  animalSounds: BICHOS_FI,
  falseFriends: FALSE_FRIENDS_FI,
  // o finlandês não tem gênero gramatical: o palácio mostra só a explicação
  genders: [],
  greeting: 'Hyvää huomenta',
  sampleSentence: 'Hei! Minä olen Linu. Nyt opiskelemme suomea!',
  phrases: { hi: 'Hei!', thanks: 'Kiitos!', letsStart: ['Aloitetaan!', 'Vamos lá!'] },
  formalMarkers: 'voisinko saada…?, kiitos paljon, anteeksi',
  cognateNote:
    'O finlandês não é indo-europeu: é uma língua urálica, parente do estoniano e, de longe, do húngaro. Por isso quase nada lembra o português, mas a escrita é fonética (cada letra, um som) e a tônica cai sempre na primeira sílaba. Há empréstimos antigos do sueco e do germânico (kuningas = rei). Atenção aos falsos amigos: “kasa” é pilha, “mato” é minhoca e “pato” é represa.',
};
