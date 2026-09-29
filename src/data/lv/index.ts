import type { LanguagePack } from '../types';
import { PARES_LV } from './pares';
import { BICHOS_LV } from './bichos';
import { VOCAB_LV } from './vocabulario';
import { UNITS_LV } from './curriculo';
import { GRAMMAR_LV } from './gramatica';
import { STORIES_LV } from './historias';
import { COMMUNITY_LV, JOURNAL_PROMPTS_LV, SCENARIOS_LV, SHADOWING_LV } from './extras';
import { ETYMOLOGY_LV } from './etimologia';
import { FALSE_FRIENDS_LV } from './falsos-amigos';
import { VARIANTS_LV } from './variantes';
import { LINGUISTICS_LV } from './linguistica';
import { ACCENTS_LV } from './sotaques';
import { IPA_LV } from './pronuncia';
import { lexiconIpa } from '@/services/ipa-lexicon';

export const LETAO: LanguagePack = {
  code: 'lv',
  name: 'Letão',
  nativeName: 'Latviešu',
  flag: '🇱🇻',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Báltico', 'Báltico oriental'],
    region: 'Costa leste do mar Báltico (Letônia)',
    writing: 'Alfabeto latino (ā, č, ē, ģ, ī, ķ, ļ, ņ, š, ū, ž)',
  },
  speechLocale: 'lv-LV',
  available: true,
  vocab: VOCAB_LV,
  units: UNITS_LV,
  etymology: ETYMOLOGY_LV,
  community: COMMUNITY_LV,
  scenarios: SCENARIOS_LV,
  stories: [...STORIES_LV, ...VARIANTS_LV.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_LV,
  accents: ACCENTS_LV,
  grammar: GRAMMAR_LV,
  linguistics: LINGUISTICS_LV,
  journalPrompts: JOURNAL_PROMPTS_LV,
  shadowing: SHADOWING_LV,
  // a tônica fica na 1ª sílaba, mas a escrita não mostra o e aberto nem o o de «uo»: a IPA vem de um dicionário por forma
  ipa: (t) => lexiconIpa(t, IPA_LV),
  specialChars: ['ā', 'č', 'ē', 'ģ', 'ī', 'ķ', 'ļ', 'ņ', 'š', 'ū', 'ž'],
  minimalPairs: PARES_LV,
  animalSounds: BICHOS_LV,
  falseFriends: FALSE_FRIENDS_LV,
  genders: ['m', 'f'],
  greeting: 'Labdien',
  sampleSentence: 'Sveiki! Es esmu Linu. Tagad mēs mācāmies latviešu valodu!',
  phrases: { hi: 'Sveiki!', thanks: 'Paldies!', letsStart: ['Sāksim!', 'Vamos começar!'] },
  formalMarkers: 'Jūs, vai Jūs varētu…?, es vēlētos…, lūdzu, liels paldies, atvainojiet',
  cognateNote:
    'O letão é uma língua báltica, prima do lituano e parente distante do latim, do grego e do sânscrito: muitas raízes antigas se reconhecem com um pouco de treino (dēls = filho; nakts = noite, como o latim nox; zobs = dente). Séculos de contato deixaram muitas palavras do alemão (stunda = hora, skapis = armário, amats = ofício), do russo antigo (grāmata = livro, baznīca = igreja), do livônio, uma língua fínica (puika = garoto, laiva = barco) e, na gíria, do russo de hoje (davai = bora). As palavras internacionais ganham terminação letã (telefons, universitāte, kafija). Tem sete casos, dois gêneros e a tônica quase sempre na primeira sílaba.',
};
