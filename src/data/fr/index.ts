import type { LanguagePack } from '../types';
import { VOCAB_FR } from './vocabulario';
import { UNITS_FR } from './curriculo';
import { GRAMMAR_FR } from './gramatica';
import { STORIES_FR } from './historias';
import { COMMUNITY_FR, ETYMOLOGY_FR, JOURNAL_PROMPTS_FR, SCENARIOS_FR, SHADOWING_FR } from './extras';
import { FALSE_FRIENDS_FR } from './falsos-amigos';
import { VARIANTS_FR } from './variantes';
import { LINGUISTICS_FR } from './linguistica';
import { ACCENTS_FR } from './sotaques';
import { IPA_FR } from './pronuncia';
import { PARES_FR } from './pares';
import { BICHOS_FR } from './bichos';
import { setPronunciationLexiconFr, toIpaFr } from '@/services/ipa-fr';

// as regras do IPA erram umas centenas de formas (letras finais, palavras estrangeiras): o dicionário corrige
setPronunciationLexiconFr(IPA_FR);
// os infinitivos: o -ent de «ils parlent» é mudo, o de «souvent» não
const VERBS = new Set(VOCAB_FR.filter((v) => v.part_of_speech === 'verbo').map((v) => v.word_target.replace(/^se |^s'/, '')));

export const FRANCES: LanguagePack = {
  code: 'fr',
  name: 'Francês',
  nativeName: 'Français',
  flag: '🇫🇷',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Galo-românico'],
    region: 'Norte da Gália (atual França)',
    writing: 'Alfabeto latino (é è ê à ç œ…)',
  },
  speechLocale: 'fr-FR',
  available: true,
  vocab: VOCAB_FR,
  units: UNITS_FR,
  etymology: ETYMOLOGY_FR,
  community: COMMUNITY_FR,
  scenarios: SCENARIOS_FR,
  stories: [...STORIES_FR, ...VARIANTS_FR.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_FR,
  accents: ACCENTS_FR,
  minimalPairs: PARES_FR,
  animalSounds: BICHOS_FR,
  grammar: GRAMMAR_FR,
  linguistics: LINGUISTICS_FR,
  journalPrompts: JOURNAL_PROMPTS_FR,
  shadowing: SHADOWING_FR,
  ipa: (t) => toIpaFr(t, VERBS),
  specialChars: ['é', 'è', 'ê', 'à', 'â', 'ç', 'ô', 'î', 'û', 'ù', 'ë', 'ï', 'œ'],
  falseFriends: FALSE_FRIENDS_FR,
  // o francês não tem neutro: a sala do Jardim fica fechada no palácio
  genders: ['m', 'f'],
  greeting: 'Bonjour',
  sampleSentence: "Bonjour ! Je m'appelle Linu. On apprend le français ensemble ?",
  phrases: { hi: 'Bonjour !', thanks: 'Merci !', letsStart: ["C'est parti !", 'Vamos lá!'] },
  formalMarkers: "vous, s'il vous plaît, excusez-moi, pourriez-vous… ?",
  cognateNote:
    'O francês é irmão do português: os dois vêm do latim, e muitas palavras se reconhecem na escrita (université, hôpital, fête). Na fala, porém, o francês engoliu letras e mudou sons: o “ca” latino virou “cha” (cantar → chanter), o “s” antes de consoante virou acento circunflexo (festa → fête) e as letras finais quase nunca se pronunciam. Cuidado com os falsos amigos: attendre é esperar, rester é ficar e le collège é a escola do 6º ao 9º ano.',
};
