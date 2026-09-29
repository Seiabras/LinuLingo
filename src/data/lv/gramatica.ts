import type { GrammarTopic } from '../types';
import { GRAMMAR as G1 } from './gramatica-1';
import { GRAMMAR as G2 } from './gramatica-2';
import { GRAMMAR as G3 } from './gramatica-3';

/** Gramática do letão: 40 tópicos, do A1.1 ao C2. */
export const GRAMMAR_LV: GrammarTopic[] = [...G1, ...G2, ...G3];
