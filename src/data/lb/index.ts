import type { LanguagePack } from '../types';
import { VOCAB_LB } from './vocabulario';
import { UNITS_LB } from './curriculo';
import { GRAMMAR_LB } from './gramatica';
import { STORIES_LB } from './historias';
import { COMMUNITY_LB, ETYMOLOGY_LB, JOURNAL_PROMPTS_LB, SCENARIOS_LB, SHADOWING_LB } from './extras';

export const LUXEMBURGUES: LanguagePack = {
  code: 'lb',
  name: 'Luxemburguês',
  nativeName: 'Lëtzebuergesch',
  flag: '🇱🇺',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Alto-alemão', 'Médio-alemão ocidental', 'Franco-moselano'],
    region: 'Luxemburgo e áreas vizinhas da Bélgica, da França e da Alemanha',
    writing: 'Alfabeto latino (ä, é, ë), na ortografia oficial revista em 2019 (ZLS), com a regra do n',
  },
  speechLocale: 'lb-LU',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~90 palavras, 4 tópicos de gramática, 2 histórias), na ortografia oficial e ainda sem transcrição fonética. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_LB,
  units: UNITS_LB,
  etymology: ETYMOLOGY_LB,
  community: COMMUNITY_LB,
  scenarios: SCENARIOS_LB,
  stories: STORIES_LB,
  grammar: GRAMMAR_LB,
  journalPrompts: JOURNAL_PROMPTS_LB,
  shadowing: SHADOWING_LB,
  specialChars: ['ä', 'é', 'ë', 'Ä', 'É'],
  // masculino (den), feminino (d') e neutro (d'/dat)
  genders: ['m', 'f', 'n'],
  greeting: 'Moien',
  sampleSentence: 'Moien! Ech heeschen Linu. Mir léiere Lëtzebuergesch!',
  phrases: { hi: 'Moien!', thanks: 'Merci!', letsStart: ['Mir fänken un!', 'Vamos começar!'] },
  formalMarkers: 'Dir (com maiúscula e o verbo no plural), wannechgelift, Entschëllegt',
  cognateNote:
    'O luxemburguês é parente próximo do alemão (Haus, Waasser, Brout lembram Haus, Wasser, Brot), mas convive há séculos com o francês e pegou dele muitas palavras do dia a dia, como «Merci» e «Gare» (estação), que ficam fáceis para quem fala português.',
};
