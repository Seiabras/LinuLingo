import type { UnitSeed } from '../types';
import { UNITS_LV_1 } from './curriculo-1';
import { UNITS_LV_2 } from './curriculo-2';

/** Trilha do letão: 15 unidades, do A1.1 ao C2. */
export const UNITS_LV: UnitSeed[] = [...UNITS_LV_1, ...UNITS_LV_2];
