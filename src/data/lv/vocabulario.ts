import { buildVocab, type VocabRow } from '../types';
import { ROWS as L01 } from './vocab-01';
import { ROWS as L02 } from './vocab-02';
import { ROWS as L03 } from './vocab-03';
import { ROWS as L04 } from './vocab-04';
import { ROWS as L05 } from './vocab-05';
import { ROWS as L06 } from './vocab-06';
import { ROWS as L07 } from './vocab-07';
import { ROWS as L08 } from './vocab-08';
import { ROWS as L09 } from './vocab-09';
import { ROWS as L10 } from './vocab-10';
import { ROWS as L11 } from './vocab-11';
import { ROWS as L12 } from './vocab-12';
import { ROWS as L13 } from './vocab-13';

/**
 * Vocabulário do letão. Primeiro as expressões, palavras essenciais e números (lote 01), depois os
 * temas intercalados (uma palavra de cada lista por vez, para a ordem de frequência não ficar presa a
 * um tema). Palavra repetida vale a primeira. A IPA de cada forma fica em ./pronuncia.ts.
 */
function merge(...lists: VocabRow[][]): VocabRow[] {
  const seen = new Set<string>();
  const out: VocabRow[] = [];
  for (const r of lists.flat()) {
    if (seen.has(r[0])) continue;
    seen.add(r[0]);
    out.push(r);
  }
  return out;
}

const interleave = (...lists: VocabRow[][]) =>
  Array.from({ length: Math.max(...lists.map((l) => l.length)) }, (_, i) => lists.map((l) => l[i])).flat().filter(Boolean) as VocabRow[];

export const ROWS: VocabRow[] = merge(L01, interleave(L05, L06, L07, L08, L09, L10, L11, L12, L13, L02, L03, L04));
export const VOCAB_LV = buildVocab('lv', ROWS);
