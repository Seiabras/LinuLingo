import type { LanguagePack } from '../types';
import { toReadingDevanagari } from '@/services/reading-devanagari';
import { VOCAB_HI } from './vocabulario';
import { UNITS_HI } from './curriculo';
import { GRAMMAR_HI } from './gramatica';
import { STORIES_HI } from './historias';
import { COMMUNITY_HI, ETYMOLOGY_HI, JOURNAL_PROMPTS_HI, SCENARIOS_HI, SHADOWING_HI } from './extras';

export const HINDI: LanguagePack = {
  code: 'hi',
  name: 'Híndi',
  nativeName: 'हिन्दी',
  flag: '🇮🇳',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano central'],
    region: 'Norte e centro da Índia (planície indo-gangética, com Déli como referência)',
    writing: 'Devanágari (escrita silábica/abugida, descendente da escrita brahmi)',
  },
  speechLocale: 'hi-IN',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~86 palavras, 4 tópicos de gramática, 2 histórias), no hindi padrão (o de Déli, língua oficial da Índia ao lado do inglês). Ainda sem treino do alfabeto devanágari. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_HI,
  // leitura em letras latinas para quem ainda não lê o devanágari (ver src/services/reading-devanagari.ts)
  reading: (t) => (/[ऀ-ॿ]/.test(t) ? toReadingDevanagari(t) : ''),
  units: UNITS_HI,
  etymology: ETYMOLOGY_HI,
  community: COMMUNITY_HI,
  scenarios: SCENARIOS_HI,
  stories: STORIES_HI,
  grammar: GRAMMAR_HI,
  journalPrompts: JOURNAL_PROMPTS_HI,
  shadowing: SHADOWING_HI,
  specialChars: [
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः',
    'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट',
    'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ',
    'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह',
    'क़', 'ख़', 'ग़', 'ज़', 'ड़', 'ढ़', 'फ़',
  ],
  // alfabeto devanágari básico (vogais e consoantes), em fileiras de teclado (ordem tradicional da वर्णमाला)
  keyboardRows: [
    ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः'],
    ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट'],
    ['ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ'],
    ['ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'],
    ['क़', 'ख़', 'ग़', 'ज़', 'ड़', 'ढ़', 'फ़'],
  ],
  // o hindi marca gênero gramatical masculino e feminino em substantivos e adjetivos (não tem neutro)
  genders: ['m', 'f'],
  greeting: 'नमस्ते',
  sampleSentence: 'नमस्ते! मेरा नाम लीनू है। चलिए हिंदी सीखते हैं!',
  phrases: { hi: 'नमस्ते।', thanks: 'धन्यवाद।', letsStart: ['चलिए शुरू करते हैं!', 'Vamos começar!'] },
  formalMarkers:
    'आप (com o verbo no plural: हैं) para respeito; तुम (हो) é o meio-termo informal; तू (है) é bem íntimo — para crianças, para Deus em orações, ou entre amigos muito próximos — e soa rude fora desses contextos. O sufixo जी (jī) depois do nome ou de “हाँ”/“नहीं” também acrescenta respeito (विनोद जी, हाँ जी).',
  cognateNote:
    'O hindi é um parente indo-europeu bem mais distante do português do que o espanhol ou o italiano, mas o parentesco aparece em palavras do dia a dia: “माँ” (mā̃) lembra “mãe”, “नाम” (nām) é tão parecido com “nome” que o próprio dicionário chama um de cognato do outro, e “दो” (do) vem da mesma raiz de “dois”. Cada palavra mostra a raiz e os parentes em outras línguas indo-europeias.',
};
