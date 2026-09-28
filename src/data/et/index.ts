import type { LanguagePack } from '../types';
import { PARES_ET } from './pares';
import { BICHOS_ET } from './bichos';
import { VOCAB_ET } from './vocabulario';
import { UNITS_ET } from './curriculo';
import { GRAMMAR_ET } from './gramatica';
import { STORIES_ET } from './historias';
import { COMMUNITY_ET, ETYMOLOGY_ET, JOURNAL_PROMPTS_ET, SCENARIOS_ET, SHADOWING_ET } from './extras';
import { FALSE_FRIENDS_ET } from './falsos-amigos';
import { VARIANTS_ET } from './variantes';
import { LINGUISTICS_ET } from './linguistica';
import { ACCENTS_ET } from './sotaques';
import { IPA_ET } from './pronuncia';
import { lexiconIpa } from '@/services/ipa-lexicon';

export const ESTONIANO: LanguagePack = {
  code: 'et',
  name: 'Estoniano',
  nativeName: 'Eesti',
  flag: '🇪🇪',
  lineage: {
    family: 'Urálico',
    branches: ['Fínico', 'Fínico meridional'],
    region: 'Costa sul do Golfo da Finlândia (Estônia)',
    writing: 'Alfabeto latino (õ, ä, ö, ü, š, ž)',
  },
  speechLocale: 'et-EE',
  available: true,
  vocab: VOCAB_ET,
  units: UNITS_ET,
  etymology: ETYMOLOGY_ET,
  community: COMMUNITY_ET,
  scenarios: SCENARIOS_ET,
  stories: [...STORIES_ET, ...VARIANTS_ET.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_ET,
  accents: ACCENTS_ET,
  grammar: GRAMMAR_ET,
  linguistics: LINGUISTICS_ET,
  journalPrompts: JOURNAL_PROMPTS_ET,
  shadowing: SHADOWING_ET,
  // a escrita não mostra a terceira duração (sobrelonga): a IPA vem de um dicionário por forma
  ipa: (t) => lexiconIpa(t, IPA_ET),
  specialChars: ['õ', 'ä', 'ö', 'ü', 'š', 'ž'],
  minimalPairs: PARES_ET,
  animalSounds: BICHOS_ET,
  falseFriends: FALSE_FRIENDS_ET,
  // o estoniano não tem gênero gramatical: o palácio mostra só a explicação
  genders: [],
  greeting: 'Tere hommikust',
  sampleSentence: 'Tere! Mina olen Linu. Nüüd õpime eesti keelt!',
  phrases: { hi: 'Tere!', thanks: 'Aitäh!', letsStart: ['Hakkame pihta!', 'Vamos lá!'] },
  formalMarkers: 'kas ma saaksin…?, suur aitäh, vabandage',
  cognateNote:
    'O estoniano é uma língua urálica, irmã do finlandês: muitas palavras se parecem com as finlandesas, às vezes com outro sentido. Séculos de convívio com o alemão deixaram muitos empréstimos (kool = escola, tool = cadeira). Não tem gênero nem artigos, e «tema» é ele e ela. Atenção às três durações dos sons, que mudam o sentido (sada = cem, saada = receber, e saada!, mais longo, = mande!).',
};
