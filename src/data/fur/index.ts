import type { LanguagePack } from '../types';
import { VOCAB_FUR } from './vocabulario';
import { UNITS_FUR } from './curriculo';
import { GRAMMAR_FUR } from './gramatica';
import { STORIES_FUR } from './historias';
import { COMMUNITY_FUR, ETYMOLOGY_FUR, JOURNAL_PROMPTS_FUR, SCENARIOS_FUR, SHADOWING_FUR } from './extras';

export const FRIULANO: LanguagePack = {
  code: 'fur',
  name: 'Friulano',
  nativeName: 'Furlan',
  // sem bandeira própria no Unicode (o Friul não é país da ISO 3166-1): vale a da Itália.
  flag: '🇮🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Reto-românico'],
    region: 'Friul (nordeste da Itália)',
    writing: 'Alfabeto latino (grafia oficial da ARLeF)',
  },
  speechLocale: 'fur-IT',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'O A1 e o A2 completos (unidades 1 a 4, ~120 palavras, 6 tópicos de gramática, 4 histórias), na grafia oficial da ARLeF. O teto deste idioma é B2 (ver TETO-DOS-IDIOMAS.md): falta o B1 inteiro e o B2 inteiro pra fechar o curso — os tempos do passado (perfeito, imperfeito), mais vocabulário e mais histórias/cenários chegam nas próximas atualizações.',
  },
  vocab: VOCAB_FUR,
  units: UNITS_FUR,
  etymology: ETYMOLOGY_FUR,
  community: COMMUNITY_FUR,
  scenarios: SCENARIOS_FUR,
  stories: STORIES_FUR,
  grammar: GRAMMAR_FUR,
  journalPrompts: JOURNAL_PROMPTS_FUR,
  shadowing: SHADOWING_FUR,
  specialChars: ['à', 'è', 'ì', 'ò', 'ù', 'â', 'ê', 'î', 'ô', 'û', 'ç'],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Mandi',
  sampleSentence: 'Mandi! O mi clami Linu. Imparìn il furlan!',
  phrases: { hi: 'Mandi!', thanks: 'Graciis!', letsStart: ['Tachìn!', 'Vamos começar!'] },
  formalMarkers: 'vô (com o verbo no plural), par plasê, scusimi',
  cognateNote:
    'O friulano nasceu do latim de Aquileia e é parente próximo do romanche e do ladino. Cada palavra mostra a raiz latina e os parentes nas línguas irmãs.',
};
