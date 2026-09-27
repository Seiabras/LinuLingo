import type { LanguagePack } from '../types';
import { VOCAB_ES } from './vocabulario';
import { UNITS_ES } from './curriculo';
import { GRAMMAR_ES } from './gramatica';
import { STORIES_ES } from './historias';
import { COMMUNITY_ES, ETYMOLOGY_ES, JOURNAL_PROMPTS_ES, SCENARIOS_ES, SHADOWING_ES } from './extras';
import { FALSE_FRIENDS_ES } from './falsos-amigos';
import { VARIANTS_ES } from './variantes';
import { LINGUISTICS_ES } from './linguistica';
import { ACCENTS_ES } from './sotaques';
import { toIpaEs } from '@/services/ipa-es';
import { PARES_ES } from './pares';

export const ESPANHOL: LanguagePack = {
  code: 'es',
  name: 'Espanhol',
  nativeName: 'Español',
  flag: '🇪🇸',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ibero-românico'],
    region: 'Península Ibérica (Castela, no centro-norte da Espanha)',
    writing: 'Alfabeto latino (ñ, á é í ó ú, ü, ¿ ¡)',
  },
  // padrão do app: espanhol latino-americano; a variante escolhida troca a voz e a IPA
  speechLocale: 'es-MX',
  available: true,
  vocab: VOCAB_ES,
  units: UNITS_ES,
  etymology: ETYMOLOGY_ES,
  community: COMMUNITY_ES,
  scenarios: SCENARIOS_ES,
  stories: [...STORIES_ES, ...VARIANTS_ES.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_ES,
  grammar: GRAMMAR_ES,
  linguistics: LINGUISTICS_ES,
  accents: ACCENTS_ES,
  minimalPairs: PARES_ES,
  journalPrompts: JOURNAL_PROMPTS_ES,
  shadowing: SHADOWING_ES,
  ipa: (t) => toIpaEs(t, '419'),
  specialChars: ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'],
  falseFriends: FALSE_FRIENDS_ES,
  // o espanhol não tem substantivos neutros: a sala do Jardim fica fechada no palácio
  genders: ['m', 'f'],
  greeting: 'Buenos días',
  sampleSentence: '¡Hola! Me llamo Linu. ¡Vamos a aprender español!',
  phrases: { hi: '¡Hola!', thanks: '¡Gracias!', letsStart: ['¡Empecemos!', 'Vamos começar!'] },
  formalMarkers: 'usted, por favor, ¿me podría…?',
  cognateNote:
    'O espanhol é o parente mais próximo do português: os dois nasceram do latim falado na Península Ibérica. Quase tudo se parece, e é aí que moram as armadilhas: palavras iguais com outro gênero (el viaje, la leche) ou outro sentido (exquisito, embarazada).',
};
