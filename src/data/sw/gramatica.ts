import type { GrammarTopic } from '../types';
import { GRAMMAR_SW_1 } from './gramatica-1';
import { GRAMMAR_SW_2 } from './gramatica-2';
import { GRAMMAR_SW_3 } from './gramatica-3';

/** Gramática do suaíli: 28 tópicos, do A1.1 ao C2. */
export const GRAMMAR_SW: GrammarTopic[] = [...GRAMMAR_SW_1, ...GRAMMAR_SW_2, ...GRAMMAR_SW_3];
