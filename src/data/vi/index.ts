import type { LanguagePack } from '../types';
import { VOCAB_VI } from './vocabulario';
import { UNITS_VI } from './curriculo';
import { GRAMMAR_VI } from './gramatica';
import { STORIES_VI } from './historias';
import { COMMUNITY_VI, ETYMOLOGY_VI, JOURNAL_PROMPTS_VI, SCENARIOS_VI, SHADOWING_VI } from './extras';
import { ACCENTS_VI } from './sotaques';
import { VARIANTS_VI } from './variantes';

export const VIETNAMITA: LanguagePack = {
  code: 'vi',
  name: 'Vietnamita',
  nativeName: 'Tiếng Việt',
  flag: '🇻🇳',
  lineage: {
    family: 'Austro-asiático',
    branches: ['Vietico', 'Viet-muong'],
    region: 'Delta do rio Vermelho (Sudeste Asiático)',
    writing: 'Alfabeto latino (chữ Quốc ngữ, com os tons marcados)',
  },
  speechLocale: 'vi-VN',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos por enquanto (4 unidades, mais de 130 palavras, 7 tópicos de gramática, 4 histórias). Do B1 até o C2 chega nas próximas atualizações. Sem IPA por enquanto: os seis tons do vietnamita do Norte pedem uma transcrição cuidadosa, palavra por palavra, que ainda não foi feita.',
  },
  vocab: VOCAB_VI,
  units: UNITS_VI,
  etymology: ETYMOLOGY_VI,
  community: COMMUNITY_VI,
  scenarios: SCENARIOS_VI,
  stories: [...STORIES_VI, ...VARIANTS_VI.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_VI,
  accents: ACCENTS_VI,
  grammar: GRAMMAR_VI,
  journalPrompts: JOURNAL_PROMPTS_VI,
  shadowing: SHADOWING_VI,
  specialChars: ['â', 'ă', 'đ', 'ê', 'ô', 'ơ', 'ư', 'á', 'à', 'ả', 'ã', 'ạ'],
  // o vietnamita não marca gênero gramatical: os substantivos não se dividem por gênero
  genders: [],
  greeting: 'Xin chào',
  sampleSentence: 'Xin chào! Tôi tên là Linu. Chúng ta cùng học tiếng Việt nhé!',
  phrases: { hi: 'Xin chào!', thanks: 'Cảm ơn!', letsStart: ['Bắt đầu thôi!', 'Vamos começar!'] },
  formalMarkers: 'dạ, thưa, xin phép',
  cognateNote:
    'O vietnamita é uma língua austro-asiática, tonal e isolante (sem conjugação, como o indonésio), sem parentesco com o português. Mas séculos de colonização francesa deixaram palavras emprestadas, como “cà phê” (café), que remonta à mesma raiz árabe do português.',
};
