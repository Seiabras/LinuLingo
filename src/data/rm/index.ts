import type { LanguagePack } from '../types';
import { VOCAB_RM } from './vocabulario';
import { UNITS_RM } from './curriculo';
import { GRAMMAR_RM } from './gramatica';
import { STORIES_RM } from './historias';
import { COMMUNITY_RM, ETYMOLOGY_RM, JOURNAL_PROMPTS_RM, SCENARIOS_RM, SHADOWING_RM } from './extras';
import { ACCENTS_RM } from './sotaques';
import { VARIANTS_RM } from './variantes';

export const ROMANCHE: LanguagePack = {
  code: 'rm',
  name: 'Romanche',
  nativeName: 'Rumantsch',
  flag: '🇨🇭',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Reto-românico'],
    region: 'Cantão dos Grisões (Suíça)',
    writing: 'Alfabeto latino (norma Rumantsch Grischun)',
  },
  speechLocale: 'rm-CH',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'O A1 e o A2 completos (unidades 1 a 4, ~125 palavras, 6 tópicos de gramática, 4 histórias), na norma comum Rumantsch Grischun. O teto deste idioma é B2 (ver TETO-DOS-IDIOMAS.md): falta o B1 inteiro e o B2 inteiro pra fechar o curso — os tempos do passado (perfeito, imperfeito), mais vocabulário e mais histórias/cenários chegam nas próximas atualizações.',
  },
  vocab: VOCAB_RM,
  units: UNITS_RM,
  etymology: ETYMOLOGY_RM,
  community: COMMUNITY_RM,
  scenarios: SCENARIOS_RM,
  stories: [...STORIES_RM, ...VARIANTS_RM.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_RM,
  accents: ACCENTS_RM,
  grammar: GRAMMAR_RM,
  journalPrompts: JOURNAL_PROMPTS_RM,
  shadowing: SHADOWING_RM,
  specialChars: ['à', 'è', 'é', 'ì', 'ò', 'ù'],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Allegra',
  sampleSentence: 'Allegra! Jau hai num Linu. Emprendain rumantsch!',
  phrases: { hi: 'Allegra!', thanks: 'Grazia!', letsStart: ['Nus cumenzain!', 'Vamos começar!'] },
  formalMarkers: 'vus (com o verbo no plural), per plaschair, perstgisai',
  cognateNote:
    'O romanche nasceu do latim falado nos Alpes e ficou parente próximo do ladino e do friulano. Cada palavra mostra a raiz latina e os parentes nas línguas irmãs.',
};
