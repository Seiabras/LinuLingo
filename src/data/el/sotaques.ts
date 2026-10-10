import type { Accent } from '../types';

/**
 * Os sotaques do grego e as línguas aparentadas (decisão do dono, 10/10/2026). Os dialetos completos
 * são a Grécia e Chipre (variantes.ts); aqui ficam os sotaques da Grécia, o cipriota no mapa
 * (sameAsVariant) e as variedades gregas que os linguistas tratam como línguas à parte: o pôntico, o
 * grico e o tsacônio (este com curso próprio no app).
 *
 * Fontes: Wikipédia em grego e em inglês («Κρητική διάλεκτος», «Βόρεια ιδιώματα», «Επτανησιακή
 * διάλεκτος», «Pontic Greek», «Griko language», «Tsakonian language», consultadas em 10/10/2026).
 */
export const ACCENTS_EL: Accent[] = [
  {
    id: 'el-atenas',
    name: 'Atenas e o sul',
    kind: 'sotaque',
    variant: 'el-GR',
    region: 'Atenas, a Ática e o Peloponeso',
    country: 'GRC',
    emoji: '🏛️',
    summary: 'A fala de Atenas e do Peloponeso, base do grego padrão da escola e da TV.',
    features: [
      'As vogais átonas soam inteiras, sem cair: “σπίτι” (casa) soa “spíti”.',
      'O “και” (e) soa [ce], com o “k” amolecido antes de “e”.',
    ],
    examples: [['Τι κάνεις;', 'Como vai?', 'ti kánis?']],
  },
  {
    id: 'el-creta',
    name: 'Creta',
    kind: 'sotaque',
    variant: 'el-GR',
    region: 'A ilha de Creta',
    country: 'GRC',
    subdivisions: ['GR-M'],
    emoji: '🫒',
    summary: 'O falar de Creta, com o “κ” que vira “tch” antes de “e” e “i”, como em Chipre, e as mantinadas, versos de quinze sílabas improvisados nas festas.',
    features: [
      'O “κ” antes de “e” e “i” soa “tch”: “και” soa “tche”.',
      '“Ίντα” no lugar de “τι” (o quê), como em Chipre.',
      'As mantinadas (μαντινάδες), dísticos rimados de quinze sílabas, cantados ao som da lira cretense.',
    ],
    examples: [['Ίντα κάνεις;', 'Como vai?', 'padrão: “Τι κάνεις;”']],
    words: [['μαντινάδα', 'dístico rimado e improvisado de Creta']],
  },
  {
    id: 'el-norte',
    name: 'Norte (Tessalônica)',
    kind: 'sotaque',
    variant: 'el-GR',
    region: 'A Macedônia grega, a Trácia e o Épiro: Tessalônica, Kavala, Ioannina',
    country: 'GRC',
    subdivisions: ['GR-B', 'GR-A', 'GR-D'],
    emoji: '🌉',
    summary: 'O grego do norte, em que as vogais átonas “i” e “u” somem e o objeto indireto vai no acusativo: “με είπε” (ele me disse), onde o padrão diz “μου είπε”.',
    features: [
      'As vogais átonas “i” e “u” caem: “σπίτι” soa quase “spit”.',
      'O objeto indireto no acusativo: “σε λέω” (te digo), onde o sul diz “σου λέω”.',
      'O “l” antes de “e” e “i” é mais escuro, quase o “l” do português de Portugal.',
    ],
    examples: [['Σε λέω την αλήθεια.', 'Estou te dizendo a verdade.', 'padrão: “Σου λέω την αλήθεια.”']],
  },
  {
    id: 'el-jonio',
    name: 'Ilhas Jônicas',
    kind: 'sotaque',
    variant: 'el-GR',
    region: 'Corfu, Zakynthos, Cefalônia e as outras ilhas do mar Jônico',
    country: 'GRC',
    subdivisions: ['GR-F'],
    emoji: '⛵',
    summary: 'O falar das ilhas do oeste, que ficaram séculos sob Veneza e nunca foram otomanas: cantado, com muitas palavras do italiano e a música das καντάδες.',
    features: [
      'Muitas palavras do italiano e do veneziano.',
      'A melodia cantada, que os outros gregos reconhecem de longe.',
      'As καντάδες, serenatas com violão e bandolim, nasceram aqui.',
    ],
    examples: [['Καλησπέρα σας!', 'Boa noite!', 'com a melodia das ilhas']],
  },
  {
    id: 'el-cipriota',
    name: 'Cipriota',
    kind: 'sotaque',
    variant: 'el-CY',
    sameAsVariant: 'el-CY',
    region: 'Chipre',
    country: 'CYP',
    emoji: '🇨🇾',
    summary: 'O grego de Chipre, com ήντα, έν, ποδά e ποτζιεί, as consoantes duplas e o “-ν” do fim.',
    features: ['As consoantes duplas e o “κ” que vira “tch”.', 'Palavras próprias: ήντα, έν, ποδά, ποτζιεί.'],
    examples: [['Ήντα κάμνεις;', 'Como vai?']],
  },

  // ───────────── LÍNGUAS ─────────────
  {
    id: 'el-pontico',
    name: 'Pôntico (ποντιακά)',
    kind: 'língua',
    variant: 'el-GR',
    region: 'As comunidades dos gregos do Ponto, vindos da costa turca do mar Negro, hoje no norte da Grécia',
    country: 'GRC',
    subdivisions: ['GR-B'],
    emoji: '🌊',
    summary: 'A fala dos gregos do Ponto, na costa sul do mar Negro, que vieram para a Grécia na troca de populações de 1923. Separada do grego há muitos séculos, é difícil de entender para quem fala o padrão.',
    features: ['Guarda formas do grego antigo e medieval que o padrão perdeu.', 'A dança e a lira pôntica são marcas da cultura das famílias pônticas.'],
    examples: [['Πόντος', 'o Ponto, a terra de origem', 'a costa sul do mar Negro, hoje na Turquia']],
  },
  {
    id: 'el-grico',
    name: 'Grico (Griko)',
    kind: 'língua',
    region: 'A Grécia Salentina, na Apúlia, e a Calábria, no sul da Itália',
    country: 'ITA',
    emoji: '🇮🇹',
    summary: 'O grego falado há séculos em vilas do sul da Itália, protegido pela lei italiana de 1999 sobre as línguas minoritárias. Hoje é ameaçado.',
    features: ['Mistura traços gregos antigos com palavras e sons do italiano e dos dialetos do sul.', 'Sobrevive sobretudo nas canções e entre os mais velhos.'],
    examples: [['Kalimera!', 'Bom dia!']],
  },
  {
    id: 'el-tsaconio',
    name: 'Tsacônio (τσακώνικα)',
    kind: 'língua',
    variant: 'el-GR',
    region: 'Algumas vilas da costa leste do Peloponeso',
    country: 'GRC',
    subdivisions: ['GR-J'],
    emoji: '🏔️',
    summary: 'A única variedade viva que descende do dórico, o grego antigo de Esparta, e não do grego comum: quase incompreensível para quem fala o padrão. Está ameaçada.',
    features: ['Vem do dórico de Esparta, e não da koiné.', 'Falado por poucas centenas de pessoas, sobretudo idosos.'],
    examples: [['Τσακωνιά', 'a Tsacônia', 'a região das vilas tsacônias, no Peloponeso']],
    estudarMais: { curso: 'tsd' },
  },
];
