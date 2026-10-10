import type { Accent } from '../types';

/**
 * Os falares do quimbundo (10/10/2026). Fontes: Wikipédia em português e em inglês («Língua quimbunda»,
 * «Ambaquistas», consultadas em 10/10/2026).
 */
export const ACCENTS_KMB: Accent[] = [
  {
    id: 'kmb-luanda',
    name: 'Luanda',
    kind: 'sotaque',
    region: 'Luanda e o Bengo',
    country: 'AGO',
    subdivisions: ['AO-LUA', 'AO-BGO'],
    emoji: '🏙️',
    summary: 'O quimbundo de Luanda, que deu ao português de Angola palavras como “kamba” (amigo) e “kota” (mais velho), e hoje convive com o português na cidade.',
    features: ['Deu muitas palavras ao português de Angola: “kamba”, “kota”, “bwé”.', 'Na cidade, muitos jovens já falam mais português.'],
    examples: [['kamba', 'amigo']],
  },
  {
    id: 'kmb-ambaca',
    name: 'Ambaca',
    kind: 'sotaque',
    region: 'Ambaca e o Cuanza Norte',
    country: 'AGO',
    subdivisions: ['AO-CNO', 'AO-MAL'],
    emoji: '✍️',
    summary: 'O quimbundo de Ambaca, terra dos “ambaquistas”, angolanos que no século XIX eram famosos por saber ler e escrever e trabalhavam como escrivães.',
    features: ['Os “ambaquistas” escreviam cartas e documentos em português e quimbundo.', 'Formas próprias do interior.'],
    examples: [['Ambaca', 'Ambaca']],
  },
];
