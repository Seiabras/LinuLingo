import type { LanguagePack } from '../types';
import { PARES_LT } from './pares';
import { BICHOS_LT } from './bichos';
import { VOCAB_LT } from './vocabulario';
import { UNITS_LT } from './curriculo';
import { GRAMMAR_LT } from './gramatica';
import { STORIES_LT } from './historias';
import { COMMUNITY_LT, ETYMOLOGY_LT, JOURNAL_PROMPTS_LT, SCENARIOS_LT, SHADOWING_LT } from './extras';
import { FALSE_FRIENDS_LT } from './falsos-amigos';
import { VARIANTS_LT } from './variantes';
import { LINGUISTICS_LT } from './linguistica';
import { ACCENTS_LT } from './sotaques';
import { IPA_LT } from './pronuncia';
import { lexiconIpa } from '@/services/ipa-lexicon';

export const LITUANO: LanguagePack = {
  code: 'lt',
  name: 'Lituano',
  nativeName: 'Lietuvių',
  flag: '🇱🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Báltico', 'Báltico oriental'],
    region: 'Costa sudeste do mar Báltico (Lituânia)',
    writing: 'Alfabeto latino (ą, č, ę, ė, į, š, ų, ū, ž)',
  },
  speechLocale: 'lt-LT',
  available: true,
  vocab: VOCAB_LT,
  units: UNITS_LT,
  etymology: ETYMOLOGY_LT,
  community: COMMUNITY_LT,
  scenarios: SCENARIOS_LT,
  stories: [...STORIES_LT, ...VARIANTS_LT.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_LT,
  accents: ACCENTS_LT,
  grammar: GRAMMAR_LT,
  linguistics: LINGUISTICS_LT,
  journalPrompts: JOURNAL_PROMPTS_LT,
  shadowing: SHADOWING_LT,
  // a tônica é livre e móvel e a escrita não a mostra: a IPA vem de um dicionário por forma
  ipa: (t) => lexiconIpa(t, IPA_LT),
  specialChars: ['ą', 'č', 'ę', 'ė', 'į', 'š', 'ų', 'ū', 'ž'],
  minimalPairs: PARES_LT,
  animalSounds: BICHOS_LT,
  falseFriends: FALSE_FRIENDS_LT,
  genders: ['m', 'f'],
  greeting: 'Laba diena',
  sampleSentence: 'Labas! Aš esu Linu. Dabar mokomės lietuvių kalbos!',
  phrases: { hi: 'Labas!', thanks: 'Ačiū!', letsStart: ['Pradėkime!', 'Vamos começar!'] },
  formalMarkers: 'Jūs, ar galėtumėte…?, norėčiau…, labai ačiū, atsiprašau',
  cognateNote:
    'O lituano é uma língua báltica, prima do letão e parente distante do latim, do grego e do sânscrito: muitas raízes antigas se reconhecem com um pouco de treino (sūnus = filho, como o inglês son; naktis = noite; dantis = dente). Os empréstimos vieram sobretudo do polonês, do russo e do alemão (knyga = livro, arbata = chá, kunigas = padre), e as palavras internacionais ganham terminação lituana (telefonas, universitetas). Tem sete casos, dois gêneros e uma tônica livre que muda de lugar, por isso vale sempre ouvir a palavra.',
};
