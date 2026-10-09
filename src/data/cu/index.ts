import type { LanguagePack } from '../types';
import { VOCAB_CU } from './vocabulario';
import { UNITS_CU } from './curriculo';
import { GRAMMAR_CU } from './gramatica';
import { STORIES_CU } from './historias';
import { COMMUNITY_CU, ETYMOLOGY_CU, JOURNAL_PROMPTS_CU, SCENARIOS_CU, SHADOWING_CU } from './extras';
import { ALPHABET_CU } from './alfabeto';

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
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~36 palavras, 4 tópicos de gramática incluindo o número dual e os dois alfabetos, 2 histórias). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_CU,
  units: UNITS_CU,
  etymology: ETYMOLOGY_CU,
  community: COMMUNITY_CU,
  scenarios: SCENARIOS_CU,
  stories: STORIES_CU,
  grammar: GRAMMAR_CU,
  journalPrompts: JOURNAL_PROMPTS_CU,
  shadowing: SHADOWING_CU,
  specialChars: ['ъ', 'ь', 'ѣ', 'ѧ', 'ꙑ', 'ѥ', 'ꙗ'],
  alphabet: ALPHABET_CU,
  keyboardRows: [
    ['а', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'к'],
    ['л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'х'],
    ['ч', 'ш', 'ъ', 'ь', 'ѣ', 'ѧ', 'ꙑ', 'ѥ', 'ꙗ'],
  ],
  greeting: 'Радуйся',
  sampleSentence: 'Радуйся! Имѧ моѥ ѥстъ Лину.',
  phrases: { hi: 'Радуйся!', thanks: 'Хвала!', letsStart: ['Радуимъ!', 'Vamos começar!'] },
  formalMarkers:
    'não há indício, em nenhuma fonte conferida, de um "вꙑ" de cortesia dirigido a uma só pessoa — "тꙑ" (singular) e "вꙑ" (plural) seguem só o número gramatical, sem equivaler ao "você"/"vocês" cortês que apareceria bem depois em línguas eslavas modernas.',
  cognateNote:
    'O eslavo eclesiástico antigo é o ancestral literário comum de quase todas as línguas eslavas — inclusive o russo, já completo neste aplicativo. Aqui a etimologia aponta para a FRENTE: cada palavra desta língua é a raiz de onde vieram as formas eslavas modernas (ex. "домъ" quase não mudou pro russo "дом"), do mesmo jeito que o latim é a raiz do português.',
};
