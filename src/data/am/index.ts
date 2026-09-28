import type { LanguagePack } from '../types';
import { VOCAB_AM } from './vocabulario';
import { UNITS_AM } from './curriculo';
import { GRAMMAR_AM } from './gramatica';
import { STORIES_AM } from './historias';
import { COMMUNITY_AM, ETYMOLOGY_AM, JOURNAL_PROMPTS_AM, SCENARIOS_AM, SHADOWING_AM } from './extras';
import { FALSE_FRIENDS_AM } from './falsos-amigos';
import { VARIANTS_AM } from './variantes';
import { LINGUISTICS_AM } from './linguistica';
import { ACCENTS_AM } from './sotaques';
import { PARES_AM } from './pares';
import { BICHOS_AM } from './bichos';
import { ALPHABET_AM } from './alfabeto';
import { toIpaAm, transliterateAm } from '@/services/ipa-africa';

export const AMARICO: LanguagePack = {
  code: 'am',
  name: 'Amárico',
  nativeName: 'አማርኛ',
  flag: '🇪🇹',
  lineage: {
    family: 'Afro-asiático',
    branches: ['Semítico', 'Semítico etiópico'],
    region: 'Planalto etíope (Chifre da África)',
    writing: 'Silabário ge’ez (fidel)',
  },
  speechLocale: 'am-ET',
  available: true,
  vocab: VOCAB_AM,
  units: UNITS_AM,
  etymology: ETYMOLOGY_AM,
  community: COMMUNITY_AM,
  scenarios: SCENARIOS_AM,
  stories: [...STORIES_AM, ...VARIANTS_AM.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_AM.length ? VARIANTS_AM : undefined,
  accents: ACCENTS_AM,
  grammar: GRAMMAR_AM,
  linguistics: LINGUISTICS_AM,
  journalPrompts: JOURNAL_PROMPTS_AM,
  shadowing: SHADOWING_AM,
  ipa: toIpaAm,
  // o fidel não é latino: embaixo de cada frase vem a transliteração (ሰላም · sälam)
  reading: (t) => (/[\u1200-\u137f]/.test(t) ? transliterateAm(t) : ''),
  alphabet: ALPHABET_AM,
  specialChars: [],
  minimalPairs: PARES_AM,
  animalSounds: BICHOS_AM,
  falseFriends: FALSE_FRIENDS_AM.length ? FALSE_FRIENDS_AM : undefined,
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'ሰላም',
  sampleSentence: 'ሰላም! ስሜ ሊኑ ነው። አማርኛ አብረን እንማር!',
  phrases: { hi: 'ሰላም!', thanks: 'አመሰግናለሁ!', letsStart: ['እንጀምር!', 'Vamos começar!'] },
  formalMarkers: 'እርስዎ, እባክዎ, እግዚአብሔር ይስጥልኝ',
  cognateNote:
    'O amárico é uma língua semítica, prima do árabe, do hebraico e do tigrínia: o verbo se monta com raízes de três consoantes, como no árabe. É a língua de trabalho do governo federal da Etiópia e se escreve no fidel, o silabário ge’ez, em que cada sinal é uma consoante com uma vogal (ለ lä, ሉ lu, ሊ li). Do amárico e das línguas vizinhas veio a palavra «café»: o cafeeiro é nativo das terras altas etíopes.',
};
