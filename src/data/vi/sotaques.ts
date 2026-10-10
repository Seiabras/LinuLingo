import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os três grandes falares do vietnamita (10/10/2026). Fontes: Wikipédia em português, inglês e
 * vietnamita («Vietnamese dialects», «Phương ngữ tiếng Việt», consultadas em 10/10/2026). A lista
 * propôs Norte e Sul como dialetos; por enquanto são sotaques (dúvida em docs/duvidas-variedades.md).
 */
const BASE_VI: Accent[] = [
  {
    id: 'vi-norte',
    name: 'Norte (Hanói)',
    kind: 'sotaque',
    region: 'Hanói e o norte',
    country: 'VNM',
    subdivisions: ['VN-HN'],
    emoji: '🏮',
    summary: 'O vietnamita de Hanói, a referência da escrita e da TV, com os seis tons separados e o “d”, o “gi” e o “r” que soam “z”.',
    features: ['Os seis tons separados.', 'O “d”, o “gi” e o “r” soam “z”: “rồi” (já) soa “zồi”.'],
    examples: [['lợn', 'porco']],
  },
  {
    id: 'vi-centro',
    name: 'Centro (Huế)',
    kind: 'sotaque',
    region: 'Huế, a antiga capital imperial, e o centro',
    country: 'VNM',
    subdivisions: ['VN-26'],
    emoji: '🏯',
    summary: 'O vietnamita de Huế, a antiga capital dos imperadores Nguyễn, com tons que se juntam e palavras próprias: “mô” (onde), “răng” (por quê), “rứa” (assim).',
    features: ['Palavras próprias: “mô” (onde), “tê” (lá), “răng” (por quê), “rứa” (assim).', 'Vários tons se juntam num só.'],
    examples: [['Đi mô?', 'Vai aonde?', 'no padrão, “Đi đâu?”']],
  },
  {
    id: 'vi-nghe',
    name: 'Nghệ An e Hà Tĩnh',
    kind: 'sotaque',
    region: 'As províncias de Nghệ An e Hà Tĩnh, no norte do centro',
    country: 'VNM',
    subdivisions: ['VN-22'],
    emoji: '🌾',
    summary: 'O vietnamita de Nghệ An, terra de Hồ Chí Minh, um dos falares mais difíceis para o resto do país, com tons graves e palavras antigas.',
    features: ['Tons mais graves e juntos, difíceis para quem é de fora.', 'Também usa “mô”, “răng”, “rứa”, como em Huế.'],
    examples: [['Răng rứa?', 'Por que assim?']],
  },
  {
    id: 'vi-sul',
    name: 'Sul (Saigon)',
    kind: 'sotaque',
    region: 'A cidade de Hồ Chí Minh (Saigon) e o delta do Mekong',
    country: 'VNM',
    subdivisions: ['VN-SG', 'VN-CT'],
    emoji: '🛵',
    summary: 'O vietnamita do Sul, de Saigon, com cinco tons em vez de seis, o “v” que soa “i” e palavras próprias: “heo” (porco), onde o Norte diz “lợn”.',
    features: ['Cinco tons: o “hỏi” e o “ngã” soam iguais.', 'O “v”, o “d” e o “gi” soam como “i”: “về” soa “iề”.', 'Palavras próprias: “heo” (porco), “muỗng” (colher), “ly” (copo).'],
    examples: [['heo', 'porco', 'no Norte, “lợn”']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_VI: Accent[] = noDialeto(BASE_VI, 'vi-N', { iguais: {'vi-sul': 'vi-S', 'vi-norte': 'vi-N'}, livres: ['vi-centro', 'vi-nghe'] });
