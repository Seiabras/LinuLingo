import type { LanguagePack } from '../types';
import { VOCAB_GD } from './vocabulario';
import { UNITS_GD } from './curriculo';
import { GRAMMAR_GD } from './gramatica';
import { STORIES_GD } from './historias';
import { COMMUNITY_GD, ETYMOLOGY_GD, JOURNAL_PROMPTS_GD, SCENARIOS_GD, SHADOWING_GD } from './extras';

export const GAELICO_ESCOCES: LanguagePack = {
  code: 'gd',
  name: 'Gaélico escocês',
  nativeName: 'Gàidhlig',
  // sem bandeira própria (é uma língua regional do Reino Unido, não de um país à parte): mesma
  // escolha já usada no scots (src/data/sco/index.ts) para outra língua regional da Escócia.
  flag: '🇬🇧',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Celta', 'Goidélico'],
    region: 'Terras Altas (Highlands) e Hébridas Exteriores (Na h-Eileanan Siar), na Escócia',
    writing: 'Alfabeto latino, só com acento grave (à, è, ì, ò, ù) — diferente do irlandês, que também usa agudo',
  },
  // 'gd-GB' é a tag IETF correta para o gaélico escocês, mas não há garantia de voz sintetizada
  // instalada em todo aparelho — como no scots (que usa 'en-GB' por não haver voz própria), aqui
  // o aparelho pode cair numa voz em inglês. Mantido como a tag mais correta possível.
  speechLocale: 'gd-GB',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'Por enquanto, A1 e A2 completos (unidades 1 a 4, 89 palavras, 8 tópicos de gramática, 4 histórias): saudações, família, rotina diária, o passado, sentimentos e o futuro. Do B1 até o C1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_GD,
  units: UNITS_GD,
  etymology: ETYMOLOGY_GD,
  community: COMMUNITY_GD,
  scenarios: SCENARIOS_GD,
  stories: STORIES_GD,
  grammar: GRAMMAR_GD,
  journalPrompts: JOURNAL_PROMPTS_GD,
  shadowing: SHADOWING_GD,
  specialChars: ['à', 'è', 'ì', 'ò', 'ù'],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Halò',
  sampleSentence: 'Halò! Is mise Linu. Tha sinn ag ionnsachadh Gàidhlig!',
  phrases: { hi: 'Halò!', thanks: 'Tapadh leat!', letsStart: ['Bruidhnidh sinn Gàidhlig!', 'Vamos começar!'] },
  formalMarkers: '“sibh” (em vez de “thu”) e “tapadh leibh” (em vez de “tapadh leat”), para desconhecidos, pessoas mais velhas ou mais de uma pessoa',
  cognateNote:
    'O gaélico escocês é uma língua celta goidélica, prima próxima do irlandês e do manx — não é parente do português como o romanche ou o scots são. Mas no vocabulário de família e de números dá para notar um parentesco bem mais distante: “màthair” (mãe) e “trì” (três) vêm da mesma raiz indo-europeia que chegou ao português pelo latim. Cada palavra da etimologia mostra a raiz protoindo-europeia e, quando existe, o parente distante no português.',
};
