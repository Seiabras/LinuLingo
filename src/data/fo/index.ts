import type { LanguagePack } from '../types';
import { PARES_FO } from './pares';
import { BICHOS_FO } from './bichos';
import { VOCAB_FO } from './vocabulario';
import { UNITS_FO } from './curriculo';
import { GRAMMAR_FO } from './gramatica';
import { STORIES_FO } from './historias';
import { COMMUNITY_FO, ETYMOLOGY_FO, JOURNAL_PROMPTS_FO, SCENARIOS_FO, SHADOWING_FO } from './extras';
import { FALSE_FRIENDS_FO } from './falsos-amigos';
import { VARIANTS_FO } from './variantes';
import { LINGUISTICS_FO } from './linguistica';
import { ACCENTS_FO } from './sotaques';
import { IPA_FO } from './pronuncia';
import { lexiconIpa } from '@/services/ipa-lexicon';

export const FEROES: LanguagePack = {
  code: 'fo',
  name: 'Feroês',
  nativeName: 'Føroyskt',
  flag: '🇫🇴',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico setentrional', 'Nórdico ocidental'],
    region: 'Ilhas Faroé',
    writing: 'Alfabeto latino (á í ó ú ý ð æ ø)',
  },
  speechLocale: 'fo-FO',
  available: true,
  vocab: VOCAB_FO,
  units: UNITS_FO,
  etymology: ETYMOLOGY_FO,
  community: COMMUNITY_FO,
  scenarios: SCENARIOS_FO,
  stories: [...STORIES_FO, ...VARIANTS_FO.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_FO,
  accents: ACCENTS_FO,
  grammar: GRAMMAR_FO,
  linguistics: LINGUISTICS_FO,
  journalPrompts: JOURNAL_PROMPTS_FO,
  shadowing: SHADOWING_FO,
  // a escrita é etimológica e engana muito (ð e g somem entre vogais): a IPA vem de um dicionário por forma
  ipa: (t) => lexiconIpa(t, IPA_FO),
  specialChars: ['á', 'í', 'ó', 'ú', 'ý', 'ð', 'æ', 'ø'],
  minimalPairs: PARES_FO,
  animalSounds: BICHOS_FO,
  falseFriends: FALSE_FRIENDS_FO,
  // os três gêneros: masculino, feminino e neutro (maður, kona, hús)
  genders: ['m', 'f', 'n'],
  genderNames: { m: 'masculino', f: 'feminino', n: 'neutro' },
  greeting: 'Góðan morgun',
  sampleSentence: 'Hey! Eg eiti Linu. Nú læra vit føroyskt!',
  phrases: { hi: 'Hey!', thanks: 'Takk!', letsStart: ['Nú byrja vit!', 'Vamos lá!'] },
  formalMarkers: 'kundi eg fingið…?, túsund takk, orsaka',
  cognateNote:
    'O feroês é a língua de umas 70 mil pessoas nas Ilhas Faroé, irmã próxima do islandês e do norueguês ocidental. A escrita, criada em 1846, é etimológica: mostra de onde a palavra vem, não como se fala (o ð de “maður” não soa). Muitas palavras lembram o inglês (hús = house). Atenção aos falsos amigos: “um” quer dizer “se”, e “sum” quer dizer “que”.',
};
