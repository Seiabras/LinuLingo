import type { LanguageVariant } from '../types';
import { ACCENTS_TDT } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_TDT: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_TDT, 'tdt-praca', 'tdt-praca', 'Tétum-praça', '🇹🇱'), summary: 'O padrão do curso: o tétum-praça, de Díli, língua oficial de Timor-Leste ao lado do português.' },
  dialetoDe(ACCENTS_TDT, 'tdt-terik', 'tdt-terik', 'Tétum-terik', '🇹🇱'),
];
