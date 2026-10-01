import type { LanguagePack } from '../types';
import { PARES_IS } from './pares';
import { BICHOS_IS } from './bichos';
import { VOCAB_IS } from './vocabulario';
import { UNITS_IS } from './curriculo';
import { GRAMMAR_IS } from './gramatica';
import { STORIES_IS } from './historias';
import { COMMUNITY_IS, ETYMOLOGY_IS, JOURNAL_PROMPTS_IS, SCENARIOS_IS, SHADOWING_IS } from './extras';
import { FALSE_FRIENDS_IS } from './falsos-amigos';
import { VARIANTS_IS } from './variantes';
import { LINGUISTICS_IS } from './linguistica';
import { ACCENTS_IS } from './sotaques';
import { IPA_IS } from './pronuncia';
import { lexiconIpa } from '@/services/ipa-lexicon';

export const ISLANDES: LanguagePack = {
  code: 'is',
  name: 'Islandês',
  nativeName: 'Íslenska',
  flag: '🇮🇸',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico setentrional', 'Nórdico ocidental'],
    region: 'Islândia',
    writing: 'Alfabeto latino (á é í ó ú ý þ ð æ ö)',
  },
  speechLocale: 'is-IS',
  available: true,
  vocab: VOCAB_IS,
  units: UNITS_IS,
  etymology: ETYMOLOGY_IS,
  community: COMMUNITY_IS,
  scenarios: SCENARIOS_IS,
  stories: [...STORIES_IS, ...VARIANTS_IS.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_IS,
  accents: ACCENTS_IS,
  grammar: GRAMMAR_IS,
  linguistics: LINGUISTICS_IS,
  journalPrompts: JOURNAL_PROMPTS_IS,
  shadowing: SHADOWING_IS,
  // a escrita guarda o nórdico antigo e esconde a pré-aspiração e os ditongos: a IPA vem de um dicionário por forma
  ipa: (t) => lexiconIpa(t, IPA_IS),
  specialChars: ['á', 'é', 'í', 'ó', 'ú', 'ý', 'þ', 'ð', 'æ', 'ö'],
  minimalPairs: PARES_IS,
  animalSounds: BICHOS_IS,
  falseFriends: FALSE_FRIENDS_IS,
  // os três gêneros de verdade: masculino, feminino e neutro (hestur, kona, hús)
  genders: ['m', 'f', 'n'],
  genderNames: { m: 'masculino', f: 'feminino', n: 'neutro' },
  greeting: 'Góðan daginn',
  sampleSentence: 'Halló! Ég heiti Linu. Nú lærum við íslensku!',
  phrases: { hi: 'Halló!', thanks: 'Takk!', letsStart: ['Byrjum!', 'Vamos lá!'] },
  formalMarkers: 'gæti ég fengið…?, kærar þakkir, afsakið',
  cognateNote:
    'O islandês é a língua nórdica que menos mudou desde a Idade Média: um islandês de hoje lê as sagas do século XIII. Muitas palavras básicas lembram o inglês (hús = house, vatn = water), mas, em vez de pegar palavras estrangeiras, o islandês cria as suas (sími = telefone, tölva = computador). Atenção aos falsos amigos: “fín” é fino, bonito, e “gift” é casado.',
};
