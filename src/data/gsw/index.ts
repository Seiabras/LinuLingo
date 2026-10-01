import type { LanguagePack } from '../types';
import { VOCAB_GSW } from './vocabulario';
import { UNITS_GSW } from './curriculo';
import { GRAMMAR_GSW } from './gramatica';
import { STORIES_GSW } from './historias';
import { COMMUNITY_GSW, ETYMOLOGY_GSW, JOURNAL_PROMPTS_GSW, SCENARIOS_GSW, SHADOWING_GSW } from './extras';

export const SUICO_ALEMAO: LanguagePack = {
  code: 'gsw',
  name: 'Suíço-alemão',
  nativeName: 'Schwiizertüütsch',
  flag: '🇨🇭',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Alto-alemão', 'Alemânico'],
    region: 'Suíça de língua alemã (dialeto de referência: Zurique)',
    writing: 'Sem ortografia oficial — o alemão padrão é a língua escrita; aqui se usa uma grafia informal (Dieth) do dialeto de Zurique',
  },
  speechLocale: 'gsw-CH',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~85 palavras, 4 tópicos de gramática, 2 histórias), no dialeto de Zurique (Züritüütsch) — um entre muitos dialetos suíço-alemães, sem forma “oficial”: Berna, Basileia e outras regiões falam diferente. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_GSW,
  units: UNITS_GSW,
  etymology: ETYMOLOGY_GSW,
  community: COMMUNITY_GSW,
  scenarios: SCENARIOS_GSW,
  stories: STORIES_GSW,
  grammar: GRAMMAR_GSW,
  journalPrompts: JOURNAL_PROMPTS_GSW,
  shadowing: SHADOWING_GSW,
  specialChars: ['ä', 'ö', 'ü'],
  // masculino, feminino e neutro, como no alemão padrão
  genders: ['m', 'f', 'n'],
  greeting: 'Grüezi',
  sampleSentence: 'Grüezi! Ich heisse Linu. Mir lehred Schwiizertüütsch zäme!',
  phrases: { hi: 'Grüezi!', thanks: 'Merci!', letsStart: ['Mir fahred aa!', 'Vamos começar!'] },
  formalMarkers: 'Grüezi (em vez de Hoi), Sie em vez de du (menos usado no dia a dia que no alemão padrão)',
  cognateNote:
    'O suíço-alemão é um dialeto alemânico, da mesma família germânica ocidental do alemão padrão, do neerlandês e do inglês — mas guardou sons e palavras que o alemão escrito já perdeu. “Chind” (criança) e “Chatz” (gato) mostram o “k” virando “ch”; “guet” (bom) mostra o “u” longo virando o ditongo “üe”. Cada palavra do vocabulário compara com o alemão padrão para mostrar essas mudanças de som.',
};
