import type { LanguageVariant } from '../types';
import { dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_CKB: LanguageVariant[] = [
  dialetoPadrao('ckb-IQ', 'IRQ', 'Curdo central do Iraque', '🇮🇶', 'O padrão do curso: o sorani do Curdistão iraquiano, com a fala de Sulaimaniya como base da língua escrita.'),
  { code: 'ckb-IR', country: 'IRN', kind: 'dialeto', name: 'Curdo central do Irã', flag: '🇮🇷', summary: 'O curdo central do Irã, das províncias do Curdistão e do Azerbaijão Ocidental (Mahabad, Sanandaj), escrito em alfabeto árabe como no Iraque, com muitas palavras do persa.', pronunciation: ['Muitas palavras do persa.', 'Traços de transição para o curdo do sul, em Sanandaj.'] },
];
