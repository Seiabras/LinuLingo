import { buildVocab, type VocabRow } from '../types';
import { ROWS as TRILHA } from './vocab-trilha';
import { ROWS as EXTRAS } from './vocab-extras';
import { ROWS as TEMAS_A } from './vocab-a';
import { ROWS as TEMAS_B } from './vocab-b';
import { ROWS as L06 } from './vocab-06';
import { ROWS as L09 } from './vocab-09';
import { ROWS as L10 } from './vocab-10';
import { ROWS as L11 } from './vocab-11';
import { ROWS as L12 } from './vocab-12';
import { ROWS as L13 } from './vocab-13';
import { ROWS as L14 } from './vocab-14';

/**
 * Vocabulário: primeiro as palavras da trilha (as mais úteis), depois as das etimologias e dos
 * falsos amigos, depois os temas intercalados (uma palavra de cada lista por vez, para a ordem de
 * frequência não ficar presa a um tema). Os lotes do Gemini revisados estão em vocab-a/b; os lotes 06
 * e 09 a 14, em vocab-NN. Palavra repetida vale a primeira.
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

export const ROWS: VocabRow[] = merge(TRILHA, EXTRAS, interleave(TEMAS_A, TEMAS_B, L06, L09, L10, L11, L12, L13, L14));
export const VOCAB_SW = buildVocab('sw', ROWS);
