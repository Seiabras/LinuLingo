import type { LanguageVariant } from '../types';
import { dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_LMO: LanguageVariant[] = [
  dialetoPadrao('lmo-ocidental', 'ITA', 'Lombardo ocidental', '🇮🇹', 'O padrão do curso: o lombardo ocidental, de Milão, do lago de Como e do Ticino, na convenção tradicional do milanês.'),
  { code: 'lmo-oriental', country: 'ITA', kind: 'dialeto', name: 'Lombardo oriental', flag: '🇮🇹', summary: 'O lombardo oriental, de Bérgamo e Bréscia, a leste do rio Adda, com o artigo “ol”, sem vogais longas e com o “s” que muitas vezes vira “h”.', pronunciation: ['O artigo masculino é “ol”, onde o milanês diz “el”.', 'Não distingue vogais longas e curtas, ao contrário do milanês.', 'O “s” vira “h” aspirado em muitas palavras, sobretudo em Bérgamo.'] },
];
