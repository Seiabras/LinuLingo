import type { LanguageVariant } from '../types';
import { ACCENTS_SC } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_SC: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_SC, 'sc-logudores', 'sc-logudores', 'Sardo logudorês', '🇮🇹'), summary: 'O padrão do curso: a Limba Sarda Comuna (2006), a norma escrita comum, mais próxima do logudorês, do centro-norte da ilha.' },
  dialetoDe(ACCENTS_SC, 'sc-campidanes', 'sc-campidanes', 'Sardo campidanês', '🇮🇹'),
];
