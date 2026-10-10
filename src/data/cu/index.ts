import type { LanguagePack } from '../types';
import { VOCAB_CU } from './vocabulario';
import { UNITS_CU } from './curriculo';
import { GRAMMAR_CU } from './gramatica';
import { STORIES_CU } from './historias';
import { COMMUNITY_CU, ETYMOLOGY_CU, JOURNAL_PROMPTS_CU, SCENARIOS_CU, SHADOWING_CU } from './extras';
import { ALPHABET_CU } from './alfabeto';
import { ACCENTS_CU } from './sotaques';

export const ESLAVO_ECLESIASTICO: LanguagePack = {
  code: 'cu',
  name: 'Eslavo Eclesiástico Antigo',
  nativeName: 'словѣньскъ ѩзыкъ',
  // sem estado vivo (não é país da ISO 3166-1) e sem falantes nativos no dia a dia: um emoji
  // simbólico (o pergaminho/manuscrito, pela tradição escrita que preserva a língua) em vez de bandeira.
  flag: '📜',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo'],
    region: 'Baseado num dialeto eslavo perto de Tessalônica; usado na missão à Grande Morávia (863) e depois no Primeiro Império Búlgaro (corte de Preslav), séc. IX-XI',
    writing: 'Alfabeto glagolítico (criado primeiro, por Cirilo, em 863) e cirílico antigo (criado depois, na Bulgária, por volta de 893)',
  },
  // BCP-47 na melhor tentativa: quase nenhum aparelho tem voz nativa para eslavo eclesiástico antigo.
  speechLocale: 'cu',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'Da A1.1 até a A2.2 por enquanto (4 unidades, ~60 palavras, 8 tópicos de gramática, 4 histórias). Além do número dual e dos dois alfabetos (A1), agora entram o acusativo de verdade (que copia o genitivo quando o objeto é uma pessoa), o aoristo e o imperfeito — dois passados que o português não distingue mais — e o genitivo de posse e de negação. O teto real deste idioma é C1.2 (ver TETO-DOS-IDIOMAS.md): faltam a B1.1-B1.4 (o particípio e as orações participiais, o dativo e o instrumental), a B2.1-B2.4 (a sintaxe das traduções bíblicas mais complexas, o registro legal/conciliar) e a C1.1-C1.2 (os textos litúrgicos e hinográficos mais longos, a prosa hagiográfica).',
  },
  vocab: VOCAB_CU,
  units: UNITS_CU,
  etymology: ETYMOLOGY_CU,
  community: COMMUNITY_CU,
  scenarios: SCENARIOS_CU,
  stories: STORIES_CU,
  accents: ACCENTS_CU,
  grammar: GRAMMAR_CU,
  journalPrompts: JOURNAL_PROMPTS_CU,
  shadowing: SHADOWING_CU,
  specialChars: ['ъ', 'ь', 'ѣ', 'ѧ', 'ꙑ', 'ѥ', 'ꙗ', 'ц', 'щ', 'ю', 'ѫ', 'ѭ'],
  alphabet: ALPHABET_CU,
  keyboardRows: [
    ['а', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'к'],
    ['л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'х'],
    ['ч', 'ш', 'ъ', 'ь', 'ѣ', 'ѧ', 'ꙑ', 'ѥ', 'ꙗ'],
    ['ц', 'щ', 'ю', 'ѫ', 'ѭ'],
  ],
  greeting: 'Радуйся',
  sampleSentence: 'Радуйся! Имѧ моѥ ѥстъ Лину.',
  phrases: { hi: 'Радуйся!', thanks: 'Хвала!', letsStart: ['Радуимъ!', 'Vamos começar!'] },
  formalMarkers:
    'não há indício, em nenhuma fonte conferida, de um "вꙑ" de cortesia dirigido a uma só pessoa — "тꙑ" (singular) e "вꙑ" (plural) seguem só o número gramatical, sem equivaler ao "você"/"vocês" cortês que apareceria bem depois em línguas eslavas modernas.',
  cognateNote:
    'O eslavo eclesiástico antigo é o ancestral literário comum de quase todas as línguas eslavas — inclusive o russo, já completo neste aplicativo. Aqui a etimologia aponta para a FRENTE: cada palavra desta língua é a raiz de onde vieram as formas eslavas modernas (ex. "домъ" quase não mudou pro russo "дом"), do mesmo jeito que o latim é a raiz do português.',
};
