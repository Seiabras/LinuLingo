import type { LanguageVariant } from '../types';
import { ACCENTS_QU } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos do quéchua do sul (decisão do dono, 10/10/2026): Cusco-Collao (padrão), Ayacucho
 * (chanka) e Bolívia. Fontes em sotaques.ts. Sem histórias por falta de fonte.
 */
export const VARIANTS_QU: LanguageVariant[] = [
  dialetoPadrao('qu-cusco-collao', 'PER', 'Cusco-Collao', '🇵🇪', 'O padrão do curso: o quéchua de Cusco e Puno, com consoantes aspiradas e glotalizadas, na ortografia de três vogais.'),
  dialetoDe(ACCENTS_QU, 'qu-ayacucho', 'qu-ayacucho', 'Ayacucho (chanka)', '🇵🇪'),
  {
    code: 'qu-BO',
    country: 'BOL',
    kind: 'dialeto',
    name: 'Quéchua da Bolívia',
    flag: '🇧🇴',
    summary: 'O quéchua da Bolívia (sul-boliviano), uma das línguas oficiais do país, falado sobretudo em Cochabamba, Potosí e Sucre, com muitas palavras do espanhol.',
    pronunciation: ['Consoantes aspiradas e glotalizadas, como no quéchua de Cusco.', 'Muitas palavras do espanhol, sobretudo em Cochabamba.'],
  },
];
