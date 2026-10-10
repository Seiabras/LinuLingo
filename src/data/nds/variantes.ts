import type { LanguageVariant } from '../types';
import { dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_NDS: LanguageVariant[] = [
  dialetoPadrao('nds-DE', 'DEU', 'Baixo-alemão da Alemanha', '🇩🇪', 'O padrão do curso: o baixo-alemão (Plattdüütsch) do norte da Alemanha, escrito na norma de Johannes Sass.'),
  { code: 'nds-NL', country: 'NLD', kind: 'dialeto', name: 'Baixo-saxão dos Países Baixos', flag: '🇳🇱', summary: 'O baixo-saxão dos Países Baixos (Nedersaksisch), reconhecido como língua regional pela Carta Europeia das Línguas Regionais (1996), falado em Groningen, Drenthe, Overijssel e Gelderland e escrito com a ortografia do neerlandês.', pronunciation: ['Escrito com a ortografia do neerlandês, e não com a do alemão.', 'Palavras do neerlandês, onde a Alemanha usa as do alemão.', '“Moi!” é o cumprimento em Groningen.'] },
];
