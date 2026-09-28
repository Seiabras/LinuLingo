import type { LanguagePack } from '../types';
import { VOCAB_KO } from './vocabulario';
import { UNITS_KO } from './curriculo';
import { GRAMMAR_KO } from './gramatica';
import { STORIES_KO } from './historias';
import { COMMUNITY_KO, ETYMOLOGY_KO, JOURNAL_PROMPTS_KO, SCENARIOS_KO, SHADOWING_KO } from './extras';
import { FALSE_FRIENDS_KO } from './falsos-amigos';
import { VARIANTS_KO } from './variantes';
import { LINGUISTICS_KO } from './linguistica';
import { ACCENTS_KO } from './sotaques';
import { PARES_KO } from './pares';
import { BICHOS_KO } from './bichos';
import { ALPHABET_KO } from './alfabeto';
import { toIpaKo, toRomanKo } from '@/services/ipa-ko';

export const COREANO: LanguagePack = {
  code: 'ko',
  name: 'Coreano',
  nativeName: '한국어',
  flag: '🇰🇷',
  lineage: {
    family: 'Coreânico',
    branches: ['Coreano'],
    region: 'Península coreana (Leste Asiático)',
    writing: 'Hangul',
  },
  speechLocale: 'ko-KR',
  available: true,
  vocab: VOCAB_KO,
  units: UNITS_KO,
  etymology: ETYMOLOGY_KO,
  community: COMMUNITY_KO,
  scenarios: SCENARIOS_KO,
  stories: [...STORIES_KO, ...VARIANTS_KO.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_KO.length ? VARIANTS_KO : undefined,
  accents: ACCENTS_KO,
  grammar: GRAMMAR_KO,
  linguistics: LINGUISTICS_KO,
  journalPrompts: JOURNAL_PROMPTS_KO,
  shadowing: SHADOWING_KO,
  // o hangul quase diz a pronúncia; as sílabas mudam ao encontrar a vizinha (연음, 비음화…): regras em ipa-ko.ts
  ipa: toIpaKo,
  reading: (t) => (/[가-힣]/.test(t) ? toRomanKo(t) : ''),
  specialChars: [],
  alphabet: ALPHABET_KO,
  minimalPairs: PARES_KO,
  animalSounds: BICHOS_KO,
  falseFriends: FALSE_FRIENDS_KO,
  // o coreano não tem gênero gramatical: o palácio mostra só a explicação
  genders: [],
  greeting: '안녕하세요',
  sampleSentence: '안녕하세요! 저는 리누예요. 같이 한국어를 공부해요!',
  phrases: { hi: '안녕하세요!', thanks: '감사합니다!', letsStart: ['시작해요!', 'Vamos começar!'] },
  formalMarkers: '-습니다/-ㅂ니다, -요, 주세요, 괜찮으세요?',
  cognateNote:
    'O coreano não é parente do português nem do japonês ou do chinês: é uma língua coreânica, quase isolada (a família inclui só o coreano e o jejuense). Mais da metade do vocabulário é sino-coreano, vindo do chinês clássico (학교, escola; 전화, telefone), e cada vez mais palavras vêm do inglês (컴퓨터, 커피). O hangul, criado em 1443 pelo rei Sejong, é um alfabeto: cada bloco é uma sílaba montada com letras.',
};
