import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * As variedades do guarani (10/10/2026) e as línguas guarani com curso próprio. Fontes: Wikipédia em
 * português, inglês e espanhol («Paraguayan Guarani», «Jopara», «Eastern Bolivian Guarani», «Idioma
 * guaraní en Corrientes», consultadas em 10/10/2026). A lista propôs Bolívia e Argentina como dialetos;
 * por enquanto são sotaques (dúvida em docs/duvidas-variedades.md).
 */
const BASE_GN: Accent[] = [
  {
    id: 'gn-paraguai',
    name: 'Paraguai (jopará)',
    kind: 'sotaque',
    region: 'O Paraguai',
    country: 'PRY',
    subdivisions: ['PY-ASU', 'PY-11'],
    emoji: '🇵🇾',
    summary: 'O guarani do Paraguai, língua oficial ao lado do espanhol e falada pela maioria do país. Na fala de todo dia, mistura-se com o espanhol, no “jopará”.',
    features: ['O jopará: guarani e espanhol misturados na mesma frase.', 'Língua oficial do Paraguai desde 1992.'],
    examples: [['Mba’éichapa?', 'Como vai?']],
  },
  {
    id: 'gn-bolivia',
    name: 'Bolívia (ava)',
    kind: 'sotaque',
    region: 'O Chaco boliviano (Chuquisaca, Tarija, Santa Cruz)',
    country: 'BOL',
    subdivisions: ['BO-H', 'BO-T', 'BO-S'],
    emoji: '🇧🇴',
    summary: 'O guarani da Bolívia, dos ava-guaranis do Chaco, uma das línguas oficiais do país, diferente do guarani paraguaio em sons e palavras.',
    features: ['Diferente do guarani paraguaio em sons e palavras.', 'Uma das línguas oficiais da Bolívia (Constituição de 2009).'],
    examples: [['Ava', 'ava, o nome do povo']],
  },
  {
    id: 'gn-corrientes',
    name: 'Corrientes (Argentina)',
    kind: 'sotaque',
    region: 'Corrientes e Misiones, na Argentina',
    country: 'ARG',
    subdivisions: ['AR-W', 'AR-N'],
    emoji: '🇦🇷',
    summary: 'O guarani de Corrientes, na Argentina, língua oficial da província desde 2004, próximo do paraguaio.',
    features: ['Língua oficial da província de Corrientes desde 2004.', 'Muito próximo do guarani do Paraguai.'],
    examples: [['Taragüí', 'Corrientes, em guarani']],
  },
  {
    id: 'gn-mbya',
    name: 'Mbyá',
    kind: 'língua',
    region: 'Os mbyá do Paraguai, da Argentina e do Brasil',
    country: 'BRA',
    subdivisions: ['BR-RS', 'BR-SP', 'BR-PR'],
    emoji: '🌿',
    summary: 'A língua dos mbyá-guarani, irmã do guarani paraguaio, com curso próprio no app.',
    features: ['Irmã do guarani paraguaio, na família tupi-guarani.', 'Quase sem palavras do espanhol.'],
    examples: [['Mbyá', 'mbyá']],
    estudarMais: { curso: 'gun' },
  },
  {
    id: 'gn-kaiowa',
    name: 'Kaiowá',
    kind: 'língua',
    region: 'Mato Grosso do Sul e o leste do Paraguai',
    country: 'BRA',
    subdivisions: ['BR-MS'],
    emoji: '🌾',
    summary: 'A língua dos kaiowá (pãi-tavyterã), irmã do guarani paraguaio, com curso próprio no app.',
    features: ['Irmã do guarani paraguaio.', 'Um dos maiores povos indígenas do Brasil.'],
    examples: [['Kaiowá', 'kaiowá']],
    estudarMais: { curso: 'kgk' },
  },
  {
    id: 'gn-nhandeva',
    name: 'Ñandeva',
    kind: 'língua',
    region: 'Mato Grosso do Sul, Paraná e o leste do Paraguai',
    country: 'BRA',
    subdivisions: ['BR-MS', 'BR-PR'],
    emoji: '🌳',
    summary: 'A língua dos ñandeva (ava-guarani), irmã do guarani paraguaio, com curso próprio no app.',
    features: ['Irmã do guarani paraguaio.', 'Falada no Brasil e no Paraguai.'],
    examples: [['Ñandeva', 'ñandeva']],
    estudarMais: { curso: 'nhd' },
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_GN: Accent[] = noDialeto(BASE_GN, 'gn-PY', { iguais: {'gn-bolivia': 'gn-BO', 'gn-corrientes': 'gn-AR', 'gn-paraguai': 'gn-PY'} });
