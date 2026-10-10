import type { LanguageVariant } from '../types';
import { dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_UR: LanguageVariant[] = [
  dialetoPadrao('ur-PK', 'PAK', 'Urdu do Paquistão', '🇵🇰', 'O padrão do curso: o urdu do Paquistão, a língua nacional do país, da escola, da TV e dos jornais.'),
  { code: 'ur-IN', country: 'IND', kind: 'dialeto', name: 'Urdu da Índia', flag: '🇮🇳', summary: 'O urdu da Índia, uma das 22 línguas da Constituição indiana, a língua de Lucknow, da Velha Délhi e do Decão, que convive com o híndi: as duas são a mesma língua falada, com escritas e vocabulário culto diferentes.', pronunciation: ['Mais palavras do híndi e do sânscrito no dia a dia que no Paquistão.', 'Os sons do persa e do árabe (“q”, “x”, “ġ”, “z”, “f”) se mantêm na fala culta, mas muitos falantes os trocam pelos do híndi (“k”, “kh”, “g”, “j”, “ph”).'] },
];
