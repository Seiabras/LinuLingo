import type { LanguagePack } from '../types';
import { VOCAB_LA } from './vocabulario';
import { UNITS_LA } from './curriculo';
import { GRAMMAR_LA } from './gramatica';
import { STORIES_LA } from './historias';
import { COMMUNITY_LA, ETYMOLOGY_LA, JOURNAL_PROMPTS_LA, SCENARIOS_LA, SHADOWING_LA } from './extras';
import { toIpaLa } from '@/services/ipa-la';

export const LATIM: LanguagePack = {
  code: 'la',
  name: 'Latim',
  nativeName: 'Latina',
  // sem estado vivo (não é país da ISO 3166-1): um emoji simbólico em vez de uma bandeira.
  flag: '🏛️',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Latino-faliscano'],
    region: 'Lácio (Itália central), Roma antiga',
    writing: 'Alfabeto latino clássico (sem j; u/v distinguidos só por convenção moderna)',
  },
  // BCP-47 na melhor tentativa: a maioria dos aparelhos não tem voz nativa para latim.
  speechLocale: 'la',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1.1 até A2.2 completo (4 unidades, ~124 palavras, 8 tópicos de gramática — pronúncia, pronomes, gênero e possessivo, sum para ser/estar, acusativo, perfeito, imperfeito e ablativo —, 4 histórias). Do B1 até o C2 chega nas próximas atualizações.',
  },
  ipa: toIpaLa,
  vocab: VOCAB_LA,
  units: UNITS_LA,
  etymology: ETYMOLOGY_LA,
  community: COMMUNITY_LA,
  scenarios: SCENARIOS_LA,
  stories: STORIES_LA,
  grammar: GRAMMAR_LA,
  journalPrompts: JOURNAL_PROMPTS_LA,
  shadowing: SHADOWING_LA,
  specialChars: [],
  greeting: 'Salve',
  sampleSentence: 'Salve! Nomen mihi est Linu. Latine discamus!',
  phrases: { hi: 'Salve!', thanks: 'Gratias tibi ago!', letsStart: ['Incipiamus!', 'Vamos começar!'] },
  formalMarkers: 'no latim clássico não existe uma forma formal separada de "tu" — o "vos" de cortesia só aparece no latim tardio.',
  cognateNote:
    'O latim é a mãe do português e de todas as línguas românicas: quase toda palavra portuguesa tem uma raiz latina por trás. Aqui a etimologia anda ao contrário dos outros idiomas do aplicativo — cada palavra latina já É a própria raiz, e é nela que mora a pegada do português que você já conhece.',
};
