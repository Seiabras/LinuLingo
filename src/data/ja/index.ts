import type { LanguagePack } from '../types';
import { VOCAB_JA } from './vocabulario';
import { UNITS_JA } from './curriculo';
import { GRAMMAR_JA } from './gramatica';
import { STORIES_JA } from './historias';
import { COMMUNITY_JA, ETYMOLOGY_JA, JOURNAL_PROMPTS_JA, SCENARIOS_JA, SHADOWING_JA } from './extras';
import { FALSE_FRIENDS_JA } from './falsos-amigos';
import { VARIANTS_JA } from './variantes';
import { LINGUISTICS_JA } from './linguistica';
import { ACCENTS_JA } from './sotaques';
import { PARES_JA } from './pares';
import { BICHOS_JA } from './bichos';
import { ALPHABET_JA } from './alfabeto';
import { PALAVRAS_JA, TEXTOS_JA } from './leituras';
import { ipaJa, readingLine, typedReading } from '@/services/ja-leitura';

export const JAPONES: LanguagePack = {
  code: 'ja',
  name: 'Japonês',
  nativeName: '日本語',
  flag: '🇯🇵',
  lineage: {
    family: 'Japônico',
    branches: ['Japonês'],
    region: 'Arquipélago japonês (Leste Asiático)',
    writing: 'Hiragana, katakana e kanji',
  },
  speechLocale: 'ja-JP',
  available: true,
  vocab: VOCAB_JA,
  units: UNITS_JA,
  etymology: ETYMOLOGY_JA,
  community: COMMUNITY_JA,
  scenarios: SCENARIOS_JA,
  stories: [...STORIES_JA, ...VARIANTS_JA.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_JA.length ? VARIANTS_JA : undefined,
  accents: ACCENTS_JA,
  grammar: GRAMMAR_JA,
  linguistics: LINGUISTICS_JA,
  journalPrompts: JOURNAL_PROMPTS_JA,
  shadowing: SHADOWING_JA,
  // o kanji não diz como se lê: a leitura de cada palavra vem do kuromoji (./leituras.ts)
  ipa: (t) => ipaJa(t, PALAVRAS_JA, TEXTOS_JA),
  reading: (t) => readingLine(t, PALAVRAS_JA, TEXTOS_JA),
  typedReading: (t) => typedReading(t, PALAVRAS_JA, TEXTOS_JA),
  specialChars: ['ー', 'っ', 'ゃ', 'ゅ', 'ょ', '。', '、'],
  // hiragana na ordem do silabário (gojūon), para quem não tem o teclado japonês instalado
  keyboardRows: [
    ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ'],
    ['た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ'],
    ['ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'],
    ['が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど'],
    ['ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'ゃ', 'ゅ', 'ょ', 'っ', 'ー'],
  ],
  alphabet: ALPHABET_JA,
  minimalPairs: PARES_JA,
  animalSounds: BICHOS_JA,
  falseFriends: FALSE_FRIENDS_JA,
  // o japonês não tem gênero gramatical: o palácio mostra só a explicação
  genders: [],
  greeting: 'こんにちは',
  sampleSentence: 'こんにちは！私はリヌです。一緒に日本語を勉強しましょう！',
  phrases: { hi: 'こんにちは！', thanks: 'ありがとう！', letsStart: ['始めましょう！', 'Vamos começar!'] },
  formalMarkers: 'です・ます, お願いします, いただけますか',
  cognateNote:
    'O japonês não é parente do português: é uma língua japônica, da mesma família das línguas de Okinawa. Mas tem palavras que os portugueses levaram no século XVI: パン (pan, pão), ボタン (botan, botão), カッパ (kappa, capa de chuva), タバコ (tabako), テンプラ (tenpura, das têmporas da Quaresma). Metade do vocabulário veio do chinês (os kanji e as leituras on), e hoje chega muito do inglês em katakana: コンピューター, テレビ, コーヒー.',
};
