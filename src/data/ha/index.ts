import type { LanguagePack } from '../types';
import { VOCAB_HA } from './vocabulario';
import { UNITS_HA } from './curriculo';
import { GRAMMAR_HA } from './gramatica';
import { STORIES_HA } from './historias';
import { COMMUNITY_HA, ETYMOLOGY_HA, JOURNAL_PROMPTS_HA, SCENARIOS_HA, SHADOWING_HA } from './extras';
import { FALSE_FRIENDS_HA } from './falsos-amigos';
import { VARIANTS_HA } from './variantes';
import { LINGUISTICS_HA } from './linguistica';
import { ACCENTS_HA } from './sotaques';
import { PARES_HA } from './pares';
import { BICHOS_HA } from './bichos';
import { toIpaHa } from '@/services/ipa-africa';

export const HAUCA: LanguagePack = {
  code: 'ha',
  name: 'Hauçá',
  nativeName: 'Harshen Hausa',
  flag: '🇳🇬',
  lineage: {
    family: 'Afro-asiático',
    branches: ['Chádico', 'Chádico ocidental'],
    region: 'Norte da Nigéria e sul do Níger (Sahel)',
    writing: 'Alfabeto latino (boko: ɓ, ɗ, ƙ, ƴ); também em escrita árabe (ajami)',
  },
  speechLocale: 'ha-NG',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 70 palavras, 4 tópicos de gramática, 2 histórias), no hauçá padrão (boko, sem marcação de tom). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_HA,
  units: UNITS_HA,
  etymology: ETYMOLOGY_HA,
  community: COMMUNITY_HA,
  scenarios: SCENARIOS_HA,
  stories: [...STORIES_HA, ...VARIANTS_HA.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_HA.length ? VARIANTS_HA : undefined,
  accents: ACCENTS_HA,
  grammar: GRAMMAR_HA,
  // ainda vazio: os 4 tópicos de gramática desta unidade não foram agrupados em áreas da linguística
  linguistics: LINGUISTICS_HA.length ? LINGUISTICS_HA : undefined,
  journalPrompts: JOURNAL_PROMPTS_HA,
  shadowing: SHADOWING_HA,
  ipa: toIpaHa,
  specialChars: ['ɓ', 'ɗ', 'ƙ', 'ƴ', "'"],
  minimalPairs: PARES_HA,
  animalSounds: BICHOS_HA,
  falseFriends: FALSE_FRIENDS_HA.length ? FALSE_FRIENDS_HA : undefined,
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Sannu',
  sampleSentence: 'Sannu! Sunana Linu. Mu koyi Hausa tare!',
  phrases: { hi: 'Sannu!', thanks: 'Na gode!', letsStart: ['Mu fara!', 'Vamos começar!'] },
  formalMarkers: 'ranka ya daɗe, don Allah, na gode ƙwarai',
  cognateNote:
    'O hauçá é uma língua afro-asiática, do ramo chádico: prima distante do árabe e do hebraico, não do português. É a língua franca do norte da Nigéria e do Sahel, falada por dezenas de milhões como segunda língua. Tem muitas palavras do árabe, que chegaram com o islã (littafi, livro; makaranta, escola), e do inglês (mota, carro). No Brasil, os hauçás escravizados, muitos deles muçulmanos e alfabetizados em árabe, estiveram entre os líderes da Revolta dos Malês, em Salvador, em 1835.',
};
