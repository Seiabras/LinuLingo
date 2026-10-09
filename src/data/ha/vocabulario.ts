import { buildVocab, type VocabRow } from '../types';
import { ROWS as TRILHA } from './vocab-trilha';
import { ROWS as EXTRAS } from './vocab-extras';
import { ROWS as TEMAS_A } from './vocab-a';
import { ROWS as TEMAS_B } from './vocab-b';
import { ROWS as A2 } from './vocab-a2';

/**
 * Vocabulário: primeiro as palavras da trilha (as mais úteis), depois as das etimologias e dos
 * falsos amigos, depois os temas intercalados (uma palavra de cada lista por vez, para a ordem de
 * frequência não ficar presa a um tema), e por fim as palavras novas do nível A2 (mercado, números
 * grandes, tempo e trabalho/escola — fontes documentadas junto dessa lista, no arquivo vocab-a2).
 * Palavra repetida vale a primeira.
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

const interleave = (a: VocabRow[], b: VocabRow[]) => Array.from({ length: Math.max(a.length, b.length) }, (_, i) => [a[i], b[i]]).flat().filter(Boolean) as VocabRow[];

export const ROWS: VocabRow[] = merge(TRILHA, EXTRAS, interleave(TEMAS_A, TEMAS_B), A2);
export const VOCAB_HA = buildVocab('ha', ROWS);
