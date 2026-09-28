import type { LanguagePack } from '../types';
import { VOCAB_YO } from './vocabulario';
import { UNITS_YO } from './curriculo';
import { GRAMMAR_YO } from './gramatica';
import { STORIES_YO } from './historias';
import { COMMUNITY_YO, ETYMOLOGY_YO, JOURNAL_PROMPTS_YO, SCENARIOS_YO, SHADOWING_YO } from './extras';
import { FALSE_FRIENDS_YO } from './falsos-amigos';
import { VARIANTS_YO } from './variantes';
import { LINGUISTICS_YO } from './linguistica';
import { ACCENTS_YO } from './sotaques';
import { PARES_YO } from './pares';
import { BICHOS_YO } from './bichos';
import { toIpaYo } from '@/services/ipa-africa';

export const IORUBA: LanguagePack = {
  code: 'yo',
  name: 'Iorubá',
  nativeName: 'Èdè Yorùbá',
  flag: '🇳🇬',
  lineage: {
    family: 'Níger-Congo',
    branches: ['Atlântico-congolês', 'Volta-Níger', 'Iorubóide'],
    region: 'Sudoeste da Nigéria, Benin e Togo',
    writing: 'Alfabeto latino (ẹ, ọ, ṣ e os tons marcados)',
  },
  speechLocale: 'yo-NG',
  available: true,
  vocab: VOCAB_YO,
  units: UNITS_YO,
  etymology: ETYMOLOGY_YO,
  community: COMMUNITY_YO,
  scenarios: SCENARIOS_YO,
  stories: [...STORIES_YO, ...VARIANTS_YO.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_YO.length ? VARIANTS_YO : undefined,
  accents: ACCENTS_YO,
  grammar: GRAMMAR_YO,
  linguistics: LINGUISTICS_YO,
  journalPrompts: JOURNAL_PROMPTS_YO,
  shadowing: SHADOWING_YO,
  ipa: toIpaYo,
  specialChars: ['ẹ', 'ọ', 'ṣ', 'á', 'à', 'é', 'è', 'í', 'ì', 'ó', 'ò', 'ú', 'ù', 'ń'],
  minimalPairs: PARES_YO,
  animalSounds: BICHOS_YO,
  falseFriends: FALSE_FRIENDS_YO.length ? FALSE_FRIENDS_YO : undefined,
  // sem gênero gramatical: o palácio mostra só a explicação
  genders: [],
  greeting: 'Ẹ kú àárọ̀',
  sampleSentence: 'Ẹ kú àárọ̀! Orúkọ mi ni Linu. Ẹ jẹ́ ká kọ́ èdè Yorùbá!',
  phrases: { hi: 'Ẹ n lẹ́!', thanks: 'Ẹ ṣé o!', letsStart: ['Ẹ jẹ́ ká bẹ̀rẹ̀!', 'Vamos começar!'] },
  formalMarkers: 'ẹ (em vez de o), ẹ jọ̀ọ́, ẹ ṣé o',
  cognateNote:
    'O iorubá é uma língua do tronco Níger-Congo, tonal: a mesma sílaba muda de sentido conforme o tom (ọkọ́, enxada; ọkọ̀, barco; ọkọ, marido). Não é parente do português, mas o Brasil já fala um pouco de iorubá sem saber: orixá, axé, Iemanjá, Xangô, Oxum, acarajé e abará vêm dele, levados pelos escravizados nagôs e mantidos vivos no candomblé da Bahia.',
};
