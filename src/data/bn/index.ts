import type { LanguagePack } from '../types';
import { toReadingBn } from '@/services/reading-bengali';
import { VOCAB_BN } from './vocabulario';
import { UNITS_BN } from './curriculo';
import { GRAMMAR_BN } from './gramatica';
import { STORIES_BN } from './historias';
import { COMMUNITY_BN, ETYMOLOGY_BN, JOURNAL_PROMPTS_BN, SCENARIOS_BN, SHADOWING_BN } from './extras';

export const BENGALI: LanguagePack = {
  code: 'bn',
  name: 'Bengali',
  nativeName: 'বাংলা',
  flag: '🇧🇩',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano oriental'],
    region: 'Bengala — Bangladesh e o leste da Índia (o estado de Bengala Ocidental), no delta dos rios Ganges e Brahmaputra',
    writing: 'Escrita bengali-assamesa (silábica/abugida, descendente da escrita brahmi, irmã do devanágari)',
  },
  speechLocale: 'bn-IN',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, vocabulário essencial, 4 tópicos de gramática, 2 histórias), no bengali padrão usado tanto em Bangladesh quanto em Bengala Ocidental. Ainda sem treino do alfabeto bengali. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_BN,
  // leitura em letras latinas para quem ainda não lê a escrita bengali (ver src/services/reading-bengali.ts)
  reading: (t) => (/[ঀ-৿]/.test(t) ? toReadingBn(t) : ''),
  units: UNITS_BN,
  etymology: ETYMOLOGY_BN,
  community: COMMUNITY_BN,
  scenarios: SCENARIOS_BN,
  stories: STORIES_BN,
  grammar: GRAMMAR_BN,
  journalPrompts: JOURNAL_PROMPTS_BN,
  shadowing: SHADOWING_BN,
  specialChars: [
    'অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ',
    'ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 'ট',
    'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ',
    'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ',
    'ড়', 'ঢ়', 'য়', 'ৎ', 'ং', 'ঃ', 'ঁ',
  ],
  // alfabeto bengali básico (vogais e consoantes), em fileiras de teclado
  keyboardRows: [
    ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ'],
    ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 'ট'],
    ['ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ'],
    ['ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ'],
    ['ড়', 'ঢ়', 'য়', 'ৎ', 'ং', 'ঃ', 'ঁ'],
  ],
  // o bengali não marca gênero gramatical: nem substantivos, nem adjetivos ou pronomes mudam por gênero
  genders: [],
  greeting: 'নমস্কার',
  sampleSentence: 'নমস্কার! আমার নাম লীনু। চলো বাংলা শিখি!',
  phrases: { hi: 'নমস্কার।', thanks: 'ধন্যবাদ।', letsStart: ['চলো, শুরু করি!', 'Vamos começar!'] },
  formalMarkers:
    'আপনি (com verbos em -এন: আছেন, বলেন) para respeito, com desconhecidos, pessoas mais velhas ou qualquer autoridade; তুমি (verbos em -ও: আছ, বলো) é o meio-termo informal, para amigos e colegas; তুই (verbos em -িস: আছিস, বলিস) é bem íntimo — para crianças, animais de estimação ou amigos muitíssimo próximos — e fora desses contextos soa rude, podendo até ofender, pois também é a forma usada para repreender alguém ou se dirigir a um subordinado.',
  cognateNote:
    'O bengali é um parente indo-europeu bem mais distante do português do que o espanhol ou o italiano, mas o parentesco aparece em palavras do dia a dia: “মা” (ma) lembra “mãe”, “নাম” (naam) é tão parecido com “nome” que o próprio Wiktionary traça as duas até a mesma raiz do latim “nomen”, e “দুই” (dui) vem da mesma raiz de “dois”. Cada palavra do vocabulário mostra a raiz e os parentes em outras línguas indo-europeias.',
};
