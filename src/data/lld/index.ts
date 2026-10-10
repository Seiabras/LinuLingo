import type { LanguagePack } from '../types';
import { VOCAB_LLD } from './vocabulario';
import { UNITS_LLD } from './curriculo';
import { GRAMMAR_LLD } from './gramatica';
import { STORIES_LLD } from './historias';
import { COMMUNITY_LLD, ETYMOLOGY_LLD, JOURNAL_PROMPTS_LLD, SCENARIOS_LLD, SHADOWING_LLD } from './extras';
import { ACCENTS_LLD } from './sotaques';

export const LADINO_DOLOMITAS: LanguagePack = {
  code: 'lld',
  name: 'Ladino das Dolomitas',
  nativeName: 'Ladin',
  // falado só em vales do norte da Itália (Tirol do Sul, Trentino e Belluno): bandeira da Itália.
  flag: '🇮🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Reto-românico'],
    region: 'Vales ladinos das Dolomitas (Tirol do Sul, Trentino e Belluno, Itália)',
    writing: 'Alfabeto latino (idioma do vale de Badia, o badiot, na grafia do Istitut Ladin Micurá de Rü)',
  },
  speechLocale: 'lld-IT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~100 palavras, 4 tópicos de gramática, 2 histórias), no idioma do vale de Badia (badiot) e não na norma comum Ladin Dolomitan. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_LLD,
  units: UNITS_LLD,
  etymology: ETYMOLOGY_LLD,
  community: COMMUNITY_LLD,
  scenarios: SCENARIOS_LLD,
  stories: STORIES_LLD,
  accents: ACCENTS_LLD,
  grammar: GRAMMAR_LLD,
  journalPrompts: JOURNAL_PROMPTS_LLD,
  shadowing: SHADOWING_LLD,
  specialChars: ['á', 'é', 'í', 'ó', 'ë', 'ö', 'ü'],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Bun de',
  sampleSentence: 'Bun de! Iö á inom Linu. Nos imparun le ladin!',
  phrases: { hi: 'Bun de!', thanks: 'Dilan!', letsStart: ['Nos scomenciun!', 'Vamos começar!'] },
  formalMarkers: 'os (com o verbo no plural, para uma pessoa só), prëibel, pordenede',
  cognateNote:
    'O ladino nasceu do latim falado nos Alpes e é parente próximo do romanche e do friulano. Cada palavra mostra a raiz latina e os parentes nas línguas irmãs.',
};
