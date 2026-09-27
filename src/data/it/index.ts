import type { LanguagePack } from '../types';
import { VOCAB_IT } from './vocabulario';
import { UNITS_IT } from './curriculo';
import { GRAMMAR_IT } from './gramatica';
import { STORIES_IT } from './historias';
import { COMMUNITY_IT, ETYMOLOGY_IT, JOURNAL_PROMPTS_IT, SCENARIOS_IT, SHADOWING_IT } from './extras';
import { FALSE_FRIENDS_IT } from './falsos-amigos';
import { VARIANTS_IT } from './variantes';
import { LINGUISTICS_IT } from './linguistica';
import { ACCENTS_IT } from './sotaques';
import { PRON_IT } from './pronuncia';
import { setPronunciationLexicon, toIpaIt } from '@/services/ipa-it';
import { PARES_IT } from './pares';
import { BICHOS_IT } from './bichos';

// a tônica e o timbre (è × é) não aparecem na escrita: o IPA consulta o dicionário de pronúncia
setPronunciationLexicon(PRON_IT);

export const ITALIANO: LanguagePack = {
  code: 'it',
  name: 'Italiano',
  nativeName: 'Italiano',
  flag: '🇮🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ítalo-dálmata'],
    region: 'Península Itálica (Toscana, no centro da Itália)',
    writing: 'Alfabeto latino (à è é ì ò ù)',
  },
  speechLocale: 'it-IT',
  available: true,
  vocab: VOCAB_IT,
  units: UNITS_IT,
  etymology: ETYMOLOGY_IT,
  community: COMMUNITY_IT,
  scenarios: SCENARIOS_IT,
  stories: [...STORIES_IT, ...VARIANTS_IT.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_IT,
  accents: ACCENTS_IT,
  minimalPairs: PARES_IT,
  animalSounds: BICHOS_IT,
  grammar: GRAMMAR_IT,
  linguistics: LINGUISTICS_IT,
  journalPrompts: JOURNAL_PROMPTS_IT,
  shadowing: SHADOWING_IT,
  ipa: (t) => toIpaIt(t),
  specialChars: ['à', 'è', 'é', 'ì', 'ò', 'ù', '’'],
  falseFriends: FALSE_FRIENDS_IT,
  // o italiano não tem substantivos neutros: a sala do Jardim fica fechada no palácio
  genders: ['m', 'f'],
  greeting: 'Buongiorno',
  sampleSentence: 'Ciao! Mi chiamo Linu. Impariamo l’italiano insieme!',
  phrases: { hi: 'Ciao!', thanks: 'Grazie!', letsStart: ['Cominciamo!', 'Vamos começar!'] },
  formalMarkers: 'Lei, per favore, mi scusi, potrebbe…?',
  cognateNote:
    'O italiano é um parente muito próximo do português: os dois vêm do latim, e boa parte das palavras se reconhece à primeira vista. As armadilhas estão no que parece igual: falsos amigos (burro é manteiga, salire é subir), as consoantes duplas que mudam o sentido (caro × carro, nono × nonno) e os plurais que trocam de gênero (l’uovo → le uova).',
};
