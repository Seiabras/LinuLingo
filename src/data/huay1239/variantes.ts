import type { LanguageVariant } from '../types';
import { dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos do quéchua de Áncash (10/10/2026): Huaylas (padrão do curso) e Conchucos. Sem histórias
 * nos dialetos, por falta de fonte. Fonte: Wikipédia em espanhol, «Quechua ancashino» e «Clasificación
 * del quechua ancashino» (consultadas em 10/10/2026): os dois grupos e as diferenças entre eles.
 */
export const VARIANTS_HUAY1239: LanguageVariant[] = [
  dialetoPadrao(
    'huay1239-HUAYLAS',
    'PER',
    'Quéchua de Huaylas',
    '🇵🇪',
    'O padrão do curso: o quéchua do Callejón de Huaylas, a oeste da Cordilheira Branca, com Huaraz, Yungay e Huaylas, o da gramática de Gary Parker (1976).',
  ),
  {
    code: 'huay1239-CONCHUCOS',
    country: 'PER',
    kind: 'dialeto',
    name: 'Quéchua de Conchucos',
    flag: '🇵🇪',
    summary: 'O quéchua dos Conchucos, do outro lado da Cordilheira Branca, e de Huamalíes, em Huánuco.',
    pronunciation: [
      'Os ditongos ficam ditongos: “chawpi” (meio), “tsay” (isso), onde Huaylas diz “choopi”, “tsee”.',
      'O “aw” vira “uu”: “wayichuu” (na casa), “maychuu” (onde), onde Huaylas diz “wayichaw”, “maychaw”.',
      'O “q” é um som raspado, e não um “k” do fundo da garganta.',
    ],
    vocab: [
      ['tsee', 'tsay', 'isso'],
      ['choopi', 'chawpi', 'meio'],
      ['wayichaw', 'wayichuu', 'na casa'],
      ['maychaw', 'maychuu', 'onde'],
      ['mikushaq', 'mikushaa', 'comerei (sul de Conchucos)'],
      ['—', 'mikuskin', 'acaba de comer (o -ski de Conchucos)'],
    ],
  },
];
