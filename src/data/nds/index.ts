import type { LanguagePack } from '../types';
import { VOCAB_NDS } from './vocabulario';
import { UNITS_NDS } from './curriculo';
import { GRAMMAR_NDS } from './gramatica';
import { STORIES_NDS } from './historias';
import { COMMUNITY_NDS, ETYMOLOGY_NDS, JOURNAL_PROMPTS_NDS, SCENARIOS_NDS, SHADOWING_NDS } from './extras';
import { ACCENTS_NDS } from './sotaques';
import { VARIANTS_NDS } from './variantes';

export const BAIXO_ALEMAO: LanguagePack = {
  code: 'nds',
  name: 'Baixo-alemão',
  nativeName: 'Plattdüütsch',
  flag: '🇩🇪',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Baixo-saxão'],
    region: 'Norte da Alemanha e nordeste dos Países Baixos',
    writing: 'Alfabeto latino, norma Sass’sche Schrievwies (de Johannes Sass, 1935)',
  },
  speechLocale: 'nds-DE',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~84 palavras, 4 tópicos de gramática, 2 histórias), na grafia Sass’sche Schrievwies, ainda sem transcrição fonética. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_NDS,
  units: UNITS_NDS,
  etymology: ETYMOLOGY_NDS,
  community: COMMUNITY_NDS,
  scenarios: SCENARIOS_NDS,
  stories: [...STORIES_NDS, ...VARIANTS_NDS.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_NDS,
  accents: ACCENTS_NDS,
  grammar: GRAMMAR_NDS,
  journalPrompts: JOURNAL_PROMPTS_NDS,
  shadowing: SHADOWING_NDS,
  specialChars: ['ü', 'ö', 'ä', 'ß'],
  // masculino, feminino e neutro, mas o artigo definido só distingue "de" (masc./fem.) de "dat" (neutro)
  genders: ['m', 'f', 'n'],
  greeting: 'Moin',
  sampleSentence: 'Moin! Ik heet Linu. Wi lehrt tosamen Plattdüütsch!',
  phrases: { hi: 'Moin!', thanks: 'Dankeschöön!', letsStart: ['Lat uns anfangen!', 'Vamos começar!'] },
  formalMarkers: 'ji / Se (com o verbo no plural, para tratar com respeito), bidd, dat deit mi leed',
  cognateNote:
    'O baixo-alemão não passou pela "segunda mutação consonantal" que mudou o alto-alemão (o alemão padrão): por isso muitas palavras ficam mais perto do inglês e do neerlandês do que do alemão que você talvez já conheça — “Water” (water, em vez de Wasser), “Book” (book, em vez de Buch), “maken” (make, em vez de machen). Cada palavra mostra a raiz germânica e os parentes nas línguas irmãs.',
};
