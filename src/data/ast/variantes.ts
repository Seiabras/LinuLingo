import type { LanguageVariant } from '../types';
import { ACCENTS_AST } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * O ramo asturo-leonês como dialetos do curso de asturiano (opção A do dono, 10/10/2026): Astúrias
 * (padrão), Leão e Zamora (leonês) e Miranda do Douro (mirandês), que tem curso próprio no app e
 * aparece com o botão para abri-lo. Fontes em sotaques.ts. Sem histórias por falta de fonte.
 */
export const VARIANTS_AST: LanguageVariant[] = [
  dialetoPadrao('ast-AS', 'ESP', 'Asturiano das Astúrias', '🇪🇸', 'O padrão do curso: o asturiano das Astúrias, na norma da Academia de la Llingua Asturiana, protegido pela lei de uso e promoção do asturiano (1998).'),
  dialetoDe(ACCENTS_AST, 'ast-leones', 'ast-leones', 'Leonês (Leão e Zamora)', '🇪🇸'),
  dialetoDe(ACCENTS_AST, 'ast-mirandes', 'ast-mirandes', 'Mirandês (Miranda do Douro)', '🇵🇹', { curso: 'mwl' }),
];
