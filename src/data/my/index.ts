import type { LanguagePack } from '../types';
import { VOCAB_MY } from './vocabulario';
import { UNITS_MY } from './curriculo';
import { GRAMMAR_MY } from './gramatica';
import { STORIES_MY } from './historias';
import { COMMUNITY_MY, ETYMOLOGY_MY, JOURNAL_PROMPTS_MY, SCENARIOS_MY, SHADOWING_MY } from './extras';
import { toReadingMy } from '@/services/reading-burmese';
import { ACCENTS_MY } from './sotaques';

export const BIRMANES: LanguagePack = {
  code: 'my',
  name: 'Birmanês',
  nativeName: 'မြန်မာဘာသာ',
  flag: '🇲🇲',
  lineage: {
    family: 'Sino-tibetano',
    branches: ['Tibeto-birmanês', 'Lolo-birmanês'],
    region: 'Vale do rio Irauádi, no centro de Myanmar (Mianmar)',
    writing: 'Escrita birmanesa (abugida que desce do brâmico indiano, via as escritas mon e pyu; romanização oficial MLCTS)',
  },
  speechLocale: 'my-MM',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, com o treino do alfabeto incluído), no birmanês padrão. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_MY,
  units: UNITS_MY,
  etymology: ETYMOLOGY_MY,
  community: COMMUNITY_MY,
  scenarios: SCENARIOS_MY,
  stories: STORIES_MY,
  accents: ACCENTS_MY,
  grammar: GRAMMAR_MY,
  journalPrompts: JOURNAL_PROMPTS_MY,
  shadowing: SHADOWING_MY,
  // a escrita birmanesa não é latina: embaixo de cada frase vem a romanização oficial MLCTS
  // (Myanmar Language Commission Transcription System) — toReadingMy já deixa texto não birmanês
  // intacto, então não precisa de um filtro de regex por fora, diferente do cirílico/grego do app
  reading: toReadingMy,
  specialChars: [],
  // os 33 consoantes básicos da escrita birmanesa, na ordem tradicional do alfabeto
  keyboardRows: [
    ['က', 'ခ', 'ဂ', 'ဃ', 'င'],
    ['စ', 'ဆ', 'ဇ', 'ဈ', 'ည'],
    ['ဋ', 'ဌ', 'ဍ', 'ဎ', 'ဏ'],
    ['တ', 'ထ', 'ဒ', 'ဓ', 'န'],
    ['ပ', 'ဖ', 'ဗ', 'ဘ', 'မ'],
    ['ယ', 'ရ', 'လ', 'ဝ', 'သ', 'ဟ', 'ဠ', 'အ'],
  ],
  // o birmanês não tem gênero gramatical
  genders: [],
  greeting: 'မင်္ဂလာပါ',
  sampleSentence: 'မင်္ဂလာပါ! ကျွန်တော့် နာမည် လီနူ ပါ။',
  phrases: { hi: 'မင်္ဂလာပါ!', thanks: 'ကျေးဇူးတင်ပါတယ်!', letsStart: ['မြန်မာစကား ပြောကြစို့!', 'Vamos começar!'] },
  formalMarkers: 'ခင်ဗျား/ရှင် (você, educado) em vez de နင် (informal); ကျွန်တော်/ကျွန်မ (eu, educado) em vez de ငါ (informal); a partícula ပါ no final da frase',
  cognateNote:
    'O birmanês é uma língua sino-tibetana, parente distante (não "filha") do chinês mandarim e do tibetano — os três vêm de um ancestral comum muito mais antigo que o latim é do português, então não há parecença de superfície com o português. Mas há cognatos de verdade com o chinês antigo e o tibetano, registrados pelo STEDT (Sino-Tibetan Etymological Dictionary and Thesaurus) — ver a aba Vocabulário, "de onde vêm as palavras", para "ခွေး" (cachorro), "ကြီး" (grande) e "သေး" (pequeno).',
};
