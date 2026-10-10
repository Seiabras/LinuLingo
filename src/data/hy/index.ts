import type { LanguagePack } from '../types';
import { VOCAB_HY } from './vocabulario';
import { UNITS_HY } from './curriculo';
import { GRAMMAR_HY } from './gramatica';
import { STORIES_HY } from './historias';
import { COMMUNITY_HY, ETYMOLOGY_HY, JOURNAL_PROMPTS_HY, SCENARIOS_HY, SHADOWING_HY } from './extras';
import { toReadingHy } from '@/services/reading-armenian';
import { ACCENTS_HY } from './sotaques';

export const ARMENIO: LanguagePack = {
  code: 'hy',
  name: 'Armênio',
  nativeName: 'Հայերեն',
  flag: '🇦🇲',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Armênio'],
    region: 'Armênia e diáspora armênia (Planalto Armênio, no Cáucaso Sul)',
    writing: 'Alfabeto armênio (39 letras, criado por Mesrop Mashtots no século V)',
  },
  speechLocale: 'hy-AM',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 por enquanto (unidades 1 a 4, ~146 palavras, 8 tópicos de gramática, 4 histórias), no armênio oriental (o da Armênia atual, com Erevan como referência) — não o ocidental, falado na diáspora. Ainda sem treino do alfabeto. O A2 trouxe o clima e a roupa, o corpo, as profissões e os sentimentos, o plural (-եր/-ներ), o futuro (infinitivo no dativo + “ser”), o ablativo (-ից) e “պետք է” + subjuntivo. Da B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_HY,
  units: UNITS_HY,
  etymology: ETYMOLOGY_HY,
  community: COMMUNITY_HY,
  scenarios: SCENARIOS_HY,
  stories: STORIES_HY,
  accents: ACCENTS_HY,
  grammar: GRAMMAR_HY,
  journalPrompts: JOURNAL_PROMPTS_HY,
  shadowing: SHADOWING_HY,
  // o alfabeto armênio não é latino: embaixo de cada frase vem a transliteração (Բարև · Barev)
  reading: (t) => (/[԰-֏]/.test(t) ? toReadingHy(t) : ''),
  specialChars: ['ա', 'բ', 'գ', 'դ', 'ե', 'զ', 'է', 'ը', 'թ', 'ժ', 'ի', 'լ', 'խ', 'ծ', 'կ', 'հ', 'ձ', 'ղ', 'ճ', 'մ', 'յ', 'ն', 'շ', 'ո', 'չ', 'պ', 'ջ', 'ռ', 'ս', 'վ', 'տ', 'ր', 'ց', 'ու', 'փ', 'ք', 'և', 'օ', 'ֆ'],
  // alfabeto armênio inteiro, em fileiras de teclado (ordem tradicional)
  keyboardRows: [
    ['ա', 'բ', 'գ', 'դ', 'ե', 'զ', 'է', 'ը', 'թ', 'ժ', 'ի', 'լ', 'խ'],
    ['ծ', 'կ', 'հ', 'ձ', 'ղ', 'ճ', 'մ', 'յ', 'ն', 'շ', 'ո', 'չ', 'պ'],
    ['ջ', 'ռ', 'ս', 'վ', 'տ', 'ր', 'ց', 'ու', 'փ', 'ք', 'և', 'օ', 'ֆ'],
  ],
  // o armênio não marca gênero gramatical
  genders: [],
  greeting: 'Բարև',
  sampleSentence: 'Բարև: Իմ անունը Լինուն է: Արի՛ սովորենք հայերեն:',
  phrases: { hi: 'Բարև:', thanks: 'Շնորհակալություն:', letsStart: ['Սկսենք:', 'Vamos começar!'] },
  formalMarkers: 'դուք (com o verbo no plural, para uma pessoa só), խնդրեմ, ներեցեք',
  cognateNote:
    'O armênio forma seu próprio ramo dentro da família indo-europeia — não é eslavo, nem românico, nem germânico, mas um parente distante de todos eles. Por isso “մայր” (mayr) lembra “mãe” e “երկու” (yerku) lembra “dois”, mesmo vindo de um caminho sonoro bem diferente. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
