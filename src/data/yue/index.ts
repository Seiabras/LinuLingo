import type { LanguagePack } from '../types';
import { VOCAB_YUE } from './vocabulario';
import { UNITS_YUE } from './curriculo';
import { GRAMMAR_YUE } from './gramatica';
import { STORIES_YUE } from './historias';
import { COMMUNITY_YUE, ETYMOLOGY_YUE, JOURNAL_PROMPTS_YUE, SCENARIOS_YUE, SHADOWING_YUE } from './extras';
import { ACCENTS_YUE } from './sotaques';

/**
 * Cantonês padrão (廣州–香港, Guangzhou–Hong Kong) — língua sinítica do ramo yue, diferente do
 * mandarim (`zh`, já no app): as duas têm pouquíssima inteligibilidade mútua, mesmo escritas com
 * caracteres parecidos. Fala-se em Hong Kong, Macau e na província de Guangdong (sul da China).
 * Fontes gerais: artigos "Cantonese", "Cantonese grammar" e "Hong Kong Cantonese" da Wikipédia em
 * inglês; Wikcionário em inglês (citado palavra a palavra em vocabulario.ts e extras.ts); Omniglot
 * ("Cantonese phrases", "Cantonese numbers", "Cantonese kinship"), consultados em 08/10/2026.
 */
export const CANTONES: LanguagePack = {
  code: 'yue',
  name: 'Cantonês',
  nativeName: '廣東話',
  flag: '🇭🇰',
  lineage: {
    family: 'Sino-tibetano',
    branches: ['Sinítico', 'Yue'],
    region: 'Guangzhou (Cantão) e o delta do Rio das Pérolas — hoje Hong Kong, Macau e Guangdong',
    writing: 'Caracteres chineses tradicionais (繁體字), com alguns caracteres próprios do cantonês',
  },
  speechLocale: 'zh-HK',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, ~91 palavras, 4 tópicos de gramática, 2 histórias), no cantonês padrão de Hong Kong, em caracteres tradicionais. O jyutping (romanização) aparece entre parênteses na tradução de cada palavra, mas ainda não há uma leitura automática embaixo de frases inteiras, como já existe no mandarim. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_YUE,
  units: UNITS_YUE,
  etymology: ETYMOLOGY_YUE,
  community: COMMUNITY_YUE,
  scenarios: SCENARIOS_YUE,
  stories: STORIES_YUE,
  accents: ACCENTS_YUE,
  grammar: GRAMMAR_YUE,
  journalPrompts: JOURNAL_PROMPTS_YUE,
  shadowing: SHADOWING_YUE,
  specialChars: ['。', '，', '？', '！', '、'],
  // o cantonês não tem gênero gramatical
  genders: [],
  greeting: '你好',
  sampleSentence: '你好！我係Linu。我哋一齊學啦！',
  phrases: { hi: '你好！', thanks: '唔該！', letsStart: ['我哋一齊學啦！', 'Vamos aprender juntos!'] },
  formalMarkers:
    'o cantonês não distingue pronome formal/informal (não tem um “您” de uso corrente, como o mandarim); a polidez mora sobretudo na escolha entre 唔該 (favor/serviço) e 多謝 (presente/elogio), e em tratar alguém pelo título ou profissão em vez do nome',
  cognateNote:
    'O cantonês não é parente do português — é uma língua sino-tibetana, sem relação histórica com as línguas indo-europeias. Mas compartilha os caracteres chineses com o mandarim, outro idioma deste app: 水 e 大, por exemplo, se escrevem igual nos dois, embora a pronúncia seja bem diferente (seoi² no cantonês, shuǐ no mandarim). E foi do cantonês, não do mandarim, que o português tirou a palavra “chá” (do cantonês 茶, caa⁴) — o comércio português de chá passava por Macau e por Guangdong, região de fala cantonesa.',
};
