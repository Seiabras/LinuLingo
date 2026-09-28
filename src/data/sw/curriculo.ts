import type { UnitSeed } from '../types';
import { UNITS_SW_1 } from './curriculo-1';
import { UNITS_SW_2 } from './curriculo-2';
import { UNITS_SW_3 } from './curriculo-3';

/** Trilha do suaíli: 15 unidades, do A1.1 ao C2. */
export const UNITS_SW: UnitSeed[] = [...UNITS_SW_1, ...UNITS_SW_2, ...UNITS_SW_3];
