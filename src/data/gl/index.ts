import type { LanguagePack } from '../types';
import { VOCAB_GL } from './vocabulario';
import { UNITS_GL } from './curriculo';
import { GRAMMAR_GL } from './gramatica';
import { STORIES_GL } from './historias';
import { COMMUNITY_GL, ETYMOLOGY_GL, JOURNAL_PROMPTS_GL, SCENARIOS_GL, SHADOWING_GL } from './extras';
import { toIpaGl } from '@/services/ipa-gl';
import { ACCENTS_GL } from './sotaques';

export const GALEGO: LanguagePack = {
  code: 'gl',
  name: 'Galego',
  nativeName: 'Galego',
  // sem bandeira própria no Unicode (não é país da ISO 3166-1); a maioria dos falantes está na
  // Espanha, de onde vem a bandeira usada aqui (mesmo critério do catalão).
  flag: '🇪🇸',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ibero-românico', 'Galego-português'],
    region: 'Galiza (noroeste da Península Ibérica)',
    writing: 'Alfabeto latino (norma da Real Academia Galega)',
  },
  speechLocale: 'gl-ES',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1.1 até A2.2 completo (4 unidades, ~129 palavras, 7 tópicos de gramática — pronúncia, pronomes, artigo e gênero, ser×estar×gustar, pretérito, futuro e imperfecto —, 4 histórias). Do B1 até o C2 chega nas próximas atualizações.',
  },
  ipa: toIpaGl,
  vocab: VOCAB_GL,
  units: UNITS_GL,
  etymology: ETYMOLOGY_GL,
  community: COMMUNITY_GL,
  scenarios: SCENARIOS_GL,
  stories: STORIES_GL,
  accents: ACCENTS_GL,
  grammar: GRAMMAR_GL,
  journalPrompts: JOURNAL_PROMPTS_GL,
  shadowing: SHADOWING_GL,
  specialChars: ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü'],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Ola',
  sampleSentence: 'Ola! Chámome Linu. Imos aprender galego!',
  phrases: { hi: 'Ola!', thanks: 'Grazas!', letsStart: ['Imos comezar!', 'Vamos começar!'] },
  formalMarkers: 'vostede, por favor, sería tan amable de…',
  cognateNote:
    'O galego naceu do mesmo latín que o português, na Gallaecia romana, e as duas línguas ainda soam muito parecidas. Cada palavra mostra a raiz e os parentes nas línguas irmãs.',
};
