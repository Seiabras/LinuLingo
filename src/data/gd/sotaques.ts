import type { Accent } from '../types';

/**
 * Os falares do gaélico escocês (10/10/2026). Fontes: Wikipédia em gaélico e em inglês («Gàidhlig»,
 * «Scottish Gaelic dialects», «Canadian Gaelic», consultadas em 10/10/2026), e o Survey of the Gaelic
 * Dialects of Scotland (Ó Dochartaigh, 1994–97). O gaélico da Nova Escócia entra como sotaque; se vira
 * dialeto é dúvida para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_GD: Accent[] = [
  {
    id: 'gd-leodhas',
    name: 'Lewis e Harris',
    kind: 'sotaque',
    region: 'Lewis e Harris (Leòdhas agus na Hearadh), nas Hébridas Exteriores',
    country: 'GBR',
    subdivisions: ['GB-SCT', 'GB-ELS'],
    emoji: '🪨',
    summary: 'O gaélico do norte das Hébridas Exteriores, a região onde a língua ainda é mais falada, com a pré-aspiração forte (um “h” antes de “p”, “t” e “k”).',
    features: ['Pré-aspiração forte: “mac” soa perto de “mahk”.', 'A região com mais falantes de gaélico em proporção da população.'],
    examples: [['Leòdhas', 'Lewis']],
  },
  {
    id: 'gd-uibhist',
    name: 'Uist e Barra',
    kind: 'sotaque',
    region: 'As ilhas de Uist e Barra, no sul das Hébridas Exteriores',
    country: 'GBR',
    subdivisions: ['GB-SCT', 'GB-ELS'],
    emoji: '🌊',
    summary: 'O gaélico do sul das Hébridas, de ilhas católicas que guardaram muitas canções e histórias tradicionais.',
    features: ['Rica tradição oral de canções e contos, recolhida no século XX.', 'Vogais próprias, diferentes das de Lewis.'],
    examples: [['Uibhist', 'Uist']],
  },
  {
    id: 'gd-sgitheanach',
    name: 'Skye e as Terras Altas do oeste',
    kind: 'sotaque',
    region: 'A ilha de Skye e a costa oeste das Highlands',
    country: 'GBR',
    subdivisions: ['GB-SCT', 'GB-HLD'],
    emoji: '🏔️',
    summary: 'O gaélico de Skye, onde fica o Sabhal Mòr Ostaig, a faculdade de ensino superior em gaélico.',
    features: ['Sede do Sabhal Mòr Ostaig, a faculdade que ensina em gaélico.', 'Um dos falares mais ouvidos no rádio e na TV em gaélico.'],
    examples: [['An t-Eilean Sgitheanach', 'a ilha de Skye']],
  },
  {
    id: 'gd-ile',
    name: 'Islay e Argyll',
    kind: 'sotaque',
    region: 'A ilha de Islay e Argyll, no sul das Terras Altas',
    country: 'GBR',
    subdivisions: ['GB-SCT', 'GB-AGB'],
    emoji: '🥃',
    summary: 'O gaélico do sul, de Islay e de Argyll, o mais próximo do irlandês do Ulster, do outro lado do mar.',
    features: ['Mais perto do irlandês do Ulster que os falares do norte.', 'Hoje com poucos falantes nativos.'],
    examples: [['Ìle', 'Islay']],
  },
  {
    id: 'gd-albanuadh',
    name: 'Nova Escócia (Canadá)',
    kind: 'sotaque',
    region: 'A ilha de Cape Breton e o leste da Nova Escócia, no Canadá',
    country: 'CAN',
    subdivisions: ['CA-NS'],
    emoji: '🍁',
    summary: 'O gaélico levado para o Canadá pelos escoceses expulsos das Terras Altas nos séculos XVIII e XIX, a única comunidade gaélica fora da Escócia.',
    features: ['Guarda falares da Escócia que lá já desapareceram.', 'Tem música e dança próprias, como o violino de Cape Breton.'],
    examples: [['Alba Nuadh', 'Nova Escócia']],
  },
];
