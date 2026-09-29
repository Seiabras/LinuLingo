import type { StorySeed } from '../types';
import { STORIES as H1 } from './historias-1';
import { STORIES as H2 } from './historias-2';
import { STORIES as H3 } from './historias-3';
import { STORIES as H4 } from './historias-4';
import { STORIES as H5 } from './historias-5';
import { STORIES as H6 } from './historias-6';

const num = (id: string) => Number(id.replace(/\D/g, ''));

/** Histórias interativas do letão, em ordem (lv-h1 … lv-h45). */
export const STORIES_LV: StorySeed[] = [...H1, ...H2, ...H3, ...H4, ...H5, ...H6].sort((a, b) => num(a.id) - num(b.id));
