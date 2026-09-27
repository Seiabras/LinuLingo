import type { LanguagePack } from '../types';
import { PARES_PT } from './pares';
import { BICHOS_PT_PT } from './bichos';
import { VOCAB_PT } from './vocabulario';
import { UNITS_PT } from './curriculo';
import { GRAMMAR_PT } from './gramatica';
import { STORIES_PT } from './historias';
import { COMMUNITY_PT, ETYMOLOGY_PT, JOURNAL_PROMPTS_PT, SCENARIOS_PT, SHADOWING_PT } from './extras';
import { FALSE_FRIENDS_PT } from './falsos-amigos';
import { VARIANTS_PT } from './variantes';
import { LINGUISTICS_PT } from './linguistica';
import { ACCENTS_PT } from './sotaques';
import { PRON_PT } from './pronuncia';
import { setPronunciationLexiconPt, toIpaPt } from '@/services/ipa-pt';

// a tônica e o timbre de «e» e «o» nem sempre aparecem na escrita: o IPA consulta o dicionário de pronúncia
setPronunciationLexiconPt(PRON_PT);

/**
 * Português de Portugal para brasileiros: o «idioma» é o português europeu e a «tradução» é o
 * português do Brasil. Junto vem a norma culta, que vale dos dois lados do Atlântico.
 */
export const PORTUGUES: LanguagePack = {
  code: 'pt',
  name: 'Português de Portugal',
  nativeName: 'Português europeu',
  flag: '🇵🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ibero-românico', 'Galego-português'],
    region: 'Noroeste da Península Ibérica (Galiza e norte de Portugal)',
    writing: 'Alfabeto latino (á à â ã ç é ê í ó ô õ ú)',
  },
  speechLocale: 'pt-PT',
  available: true,
  vocab: VOCAB_PT,
  units: UNITS_PT,
  etymology: ETYMOLOGY_PT,
  community: COMMUNITY_PT,
  scenarios: SCENARIOS_PT,
  stories: [...STORIES_PT, ...VARIANTS_PT.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_PT,
  accents: ACCENTS_PT,
  grammar: GRAMMAR_PT,
  linguistics: LINGUISTICS_PT,
  journalPrompts: JOURNAL_PROMPTS_PT,
  shadowing: SHADOWING_PT,
  ipa: (t) => toIpaPt(t, 'PT'),
  specialChars: ['á', 'à', 'â', 'ã', 'ç', 'é', 'ê', 'í', 'ó', 'ô', 'õ', 'ú', '-'],
  minimalPairs: PARES_PT,
  animalSounds: BICHOS_PT_PT,
  falseFriends: FALSE_FRIENDS_PT,
  // o português não tem substantivos neutros: a sala do Jardim fica fechada no palácio
  genders: ['m', 'f'],
  greeting: 'Bom dia',
  sampleSentence: 'Olá! Chamo-me Linu. Vamos aprender o português de Portugal!',
  phrases: { hi: 'Olá!', thanks: 'Obrigado!', letsStart: ['Vamos a isso!', 'Vamos lá!'] },
  formalMarkers: 'o senhor / a senhora, se faz favor, podia…?, com licença',
  cognateNote:
    'Você já fala esta língua! O português de Portugal e o do Brasil são a mesma língua, com a mesma gramática, mas com pronúncia, vocabulário do dia a dia e colocação dos pronomes diferentes. As armadilhas estão nas palavras iguais com outro sentido (rapariga, bicha, propina, fato) e nas coisas que têm outro nome (autocarro, comboio, pequeno-almoço, telemóvel).',
};
