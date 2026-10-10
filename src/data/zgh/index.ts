import type { LanguagePack } from '../types';
import { VOCAB_ZGH } from './vocabulario';
import { UNITS_ZGH } from './curriculo';
import { GRAMMAR_ZGH } from './gramatica';
import { STORIES_ZGH } from './historias';
import { COMMUNITY_ZGH, ETYMOLOGY_ZGH, JOURNAL_PROMPTS_ZGH, SCENARIOS_ZGH, SHADOWING_ZGH } from './extras';
import { ACCENTS_ZGH } from './sotaques';

/**
 * Tamazight padrão marroquina (ⵜⴰⵎⴰⵣⵉⵖⵜ) — forma escrita padronizada pelo IRCAM (Instituto Real da
 * Cultura Amazigh, 2001) a partir do tashelhit, do tamazight do Atlas Central e do tarifit, oficial
 * no Marrocos desde a emenda constitucional de 2011. Língua berbere, da família afro-asiática — NÃO é
 * um dialeto do árabe, embora tenha vivido treze séculos de contato com ele. Escrito aqui na
 * ortografia latina berberista, a mais usada na prática (a própria Wikipédia em inglês nota que a
 * maioria dos falantes marroquinos não usa o tifinagh no dia a dia, mesmo sendo a escrita oficial
 * desde 2003); o tifinagh aparece no guia de caracteres de cada unidade (curriculo.ts), só pras
 * palavras com grafia tifinagh confirmada numa fonte. Fontes gerais: Wikipédia em inglês ("Standard
 * Moroccan Tamazight", "Tifinagh", "Berber languages", "Tashelhit", "Central Atlas Tamazight
 * grammar", "Ibn Tunart"), Wikcionário em inglês e francês (citado palavra a palavra em
 * vocabulario.ts e extras.ts), Wikivoyage em inglês ("Berber phrasebook"), todas reconferidas em
 * 08/10/2026 (pesquisa anterior já existia, mas cada fonte foi checada de novo antes de usar).
 */
export const TAMAZIGHT: LanguagePack = {
  code: 'zgh',
  name: 'Tamazight',
  nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
  flag: '🇲🇦',
  lineage: {
    family: 'Afro-asiático',
    branches: ['Berbere'],
    region: 'Norte da África — forma padrão criada para o Marrocos a partir do tashelhit, do tamazight do Atlas Central e do tarifit',
    writing: 'Tifinagh (neo-tifinagh, oficial desde 2003) e a ortografia latina berberista, mais usada no dia a dia',
  },
  speechLocale: 'zgh',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, com um vocabulário bem menor que o de outros idiomas do app): o tamazight padrão marroquina tem muito menos dicionário e gramática documentados livremente em inglês ou português do que línguas maiores, então cada palavra aqui foi conferida numa fonte de verdade, em vez de completar categorias inteiras com palavras sem fonte. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem conferidas.',
  },
  vocab: VOCAB_ZGH,
  units: UNITS_ZGH,
  etymology: ETYMOLOGY_ZGH,
  community: COMMUNITY_ZGH,
  scenarios: SCENARIOS_ZGH,
  stories: STORIES_ZGH,
  accents: ACCENTS_ZGH,
  grammar: GRAMMAR_ZGH,
  journalPrompts: JOURNAL_PROMPTS_ZGH,
  shadowing: SHADOWING_ZGH,
  specialChars: ['ɣ', 'ḥ', 'ḍ', 'ṭ', 'ẓ', 'č', 'ʷ'],
  genders: ['m', 'f'],
  greeting: 'Azul',
  sampleSentence: 'Azul! Nekk, d Linu. Tanemmirt!',
  phrases: { hi: 'Azul!', thanks: 'Tanemmirt!', letsStart: ['Ih!', 'Sim! (usado aqui como um “vamos!” de entusiasmo)'] },
  formalMarkers: 'ainda não confirmado nas fontes consultadas',
  cognateNote:
    'O tamazight não é parente do português — é uma língua afro-asiática, do ramo berbere, sem relação histórica com as línguas indo-europeias. Mas, depois de treze séculos de contato com o árabe no norte da África, tem muitos empréstimos árabes no vocabulário cotidiano, como “axxam” (casa, possivelmente do árabe argelino “ḵyām”) e “ḥemmel” (gostar de, amar, do árabe marroquino “ḥammal”) — veja a aba de etimologia. E uma palavra nativa do tamazight, “aman” (água), é parente de verdade, bem distante, da palavra árabe para água (“māʼ”): as duas vêm da mesma raiz afro-asiática antiga, “*maʔ-”.',
};
