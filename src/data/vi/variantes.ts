import type { LanguageVariant } from '../types';
import { ACCENTS_VI } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_VI: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_VI, 'vi-norte', 'vi-N', 'Vietnamita do Norte (Hanói)', '🇻🇳'), summary: 'O padrão do curso: o vietnamita do Norte, de Hanói, a referência da escrita e da TV, com os seis tons.' },
  dialetoDe(ACCENTS_VI, 'vi-sul', 'vi-S', 'Vietnamita do Sul (Saigon)', '🇻🇳'),
];
