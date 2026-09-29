import type { StorySeed } from '../types';
import { STORIES_SW_1 } from './historias-1';
import { STORIES_SW_2 } from './historias-2';

/** Histórias interativas do suaíli: uma por subnível, do A1.1 ao C2. */
export const STORIES_SW: StorySeed[] = [...STORIES_SW_1, ...STORIES_SW_2];
