import type { LanguagePack } from '../types';
import { VOCAB_OM } from './vocabulario';
import { UNITS_OM } from './curriculo';
import { GRAMMAR_OM } from './gramatica';
import { STORIES_OM } from './historias';
import { COMMUNITY_OM, ETYMOLOGY_OM, JOURNAL_PROMPTS_OM, SCENARIOS_OM, SHADOWING_OM } from './extras';
import { FALSE_FRIENDS_OM } from './falsos-amigos';
import { VARIANTS_OM } from './variantes';
import { LINGUISTICS_OM } from './linguistica';
import { ACCENTS_OM } from './sotaques';
import { PARES_OM } from './pares';
import { BICHOS_OM } from './bichos';
import { toIpaOm } from '@/services/ipa-africa';

export const OROMO: LanguagePack = {
  code: 'om',
  name: 'Oromo',
  nativeName: 'Afaan Oromoo',
  flag: '🇪🇹',
  lineage: {
    family: 'Afro-asiático',
    branches: ['Cuchítico', 'Cuchítico oriental'],
    region: 'Centro e sul da Etiópia e norte do Quênia',
    writing: 'Alfabeto latino (qubee)',
  },
  speechLocale: 'om-ET',
  available: true,
  vocab: VOCAB_OM,
  units: UNITS_OM,
  etymology: ETYMOLOGY_OM,
  community: COMMUNITY_OM,
  scenarios: SCENARIOS_OM,
  stories: [...STORIES_OM, ...VARIANTS_OM.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_OM.length ? VARIANTS_OM : undefined,
  accents: ACCENTS_OM,
  grammar: GRAMMAR_OM,
  linguistics: LINGUISTICS_OM,
  journalPrompts: JOURNAL_PROMPTS_OM,
  shadowing: SHADOWING_OM,
  ipa: toIpaOm,
  specialChars: ["'"],
  minimalPairs: PARES_OM,
  animalSounds: BICHOS_OM,
  falseFriends: FALSE_FRIENDS_OM.length ? FALSE_FRIENDS_OM : undefined,
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Akkam',
  sampleSentence: 'Akkam! Maqaan koo Linu. Afaan Oromoo waliin haa barannu!',
  phrases: { hi: 'Akkam!', thanks: 'Galatoomi!', letsStart: ['Haa jalqabnu!', 'Vamos começar!'] },
  formalMarkers: 'isin (plural de respeito), maaloo, galatoomaa',
  cognateNote:
    'O oromo é uma língua afro-asiática do ramo cuchítico, parente do somali e do afar; é a língua com mais falantes nativos da Etiópia. Desde 1991 se escreve no qubee, um alfabeto latino em que a vogal dobrada é longa (Oromoo) e a consoante dobrada é geminada (akkam), e em que c, q, x e ph são sons ejetivos, que não existem em português.',
};
