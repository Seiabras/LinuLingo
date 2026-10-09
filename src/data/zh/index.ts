import type { LanguagePack } from '../types';
import { ROWS, VOCAB_ZH } from './vocabulario';
import { PINYIN_EXTRA } from './pinyin-extra';
import { leituraPinyin } from '@/services/zh-pinyin';
import { UNITS_ZH } from './curriculo';
import { GRAMMAR_ZH } from './gramatica';
import { STORIES_ZH } from './historias';
import { COMMUNITY_ZH, ETYMOLOGY_ZH, JOURNAL_PROMPTS_ZH, SCENARIOS_ZH, SHADOWING_ZH } from './extras';
import { VARIANTS_ZH } from './variantes';

export const CHINES: LanguagePack = {
  code: 'zh',
  name: 'Chinês mandarim',
  nativeName: '中文（普通话）',
  flag: '🇨🇳',
  lineage: {
    family: 'Sino-tibetano',
    branches: ['Sinítico', 'Mandarim'],
    region: 'Planície do Norte da China (pronúncia padrão de Pequim)',
    writing: 'Caracteres simplificados + pinyin (romanização oficial, com os tons marcados)',
  },
  speechLocale: 'zh-CN',
  // pinyin embaixo de cada frase, palavra por palavra, tirado do próprio vocabulário
  reading: leituraPinyin([...ROWS, ...PINYIN_EXTRA]),
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos (unidades 1 a 4, ~140 palavras, 7 tópicos de gramática, 4 histórias), no mandarim padrão (pǔtōnghuà) com caracteres simplificados; o pinyin aparece embaixo de cada frase, mas ainda não há treino dos tons. De B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_ZH,
  variants: VARIANTS_ZH,
  units: UNITS_ZH,
  etymology: ETYMOLOGY_ZH,
  community: COMMUNITY_ZH,
  scenarios: SCENARIOS_ZH,
  stories: STORIES_ZH,
  grammar: GRAMMAR_ZH,
  journalPrompts: JOURNAL_PROMPTS_ZH,
  shadowing: SHADOWING_ZH,
  specialChars: ['。', '，', '？', '！', '、'],
  // o mandarim não tem gênero gramatical
  genders: [],
  greeting: '你好',
  sampleSentence: '你好！我是里努。我们一起学中文吧！',
  phrases: { hi: '你好！', thanks: '谢谢！', letsStart: ['我们开始吧！', 'Vamos começar!'] },
  formalMarkers: '您 (nín, em vez de 你) e 您好 com professores, pessoas mais velhas e desconhecidos',
  cognateNote:
    'O chinês não é parente do português: é uma língua sino-tibetana, sem relação histórica com as línguas indo-europeias. Mas o japonês e o coreano, ensinados aqui também, usaram (e o japonês ainda usa) os caracteres chineses: 水 (água), 大 (grande), 小 (pequeno) e 学校 (escola) são escritos do mesmo jeito nos dois idiomas, mesmo com pronúncias bem diferentes.',
};
