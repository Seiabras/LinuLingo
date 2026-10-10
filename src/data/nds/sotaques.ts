import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do baixo-alemão (baixo-saxão), nos dois países (10/10/2026). Fontes: Wikipédia em
 * baixo-alemão, alemão e neerlandês («Plattdüütsch», «Westfälisch», «Mecklenburgisch»,
 * «Ostfriesisches Platt», «Gronings», «Twents», consultadas em 10/10/2026). A lista aprovou Alemanha
 * e Países Baixos como dialetos; por falta de fonte para as histórias, entraram como sotaques (dúvida
 * em docs/duvidas-variedades.md).
 */
const BASE_NDS: Accent[] = [
  {
    id: 'nds-holstein',
    name: 'Holsteinisch e Hamburgo',
    kind: 'sotaque',
    region: 'O Schleswig-Holstein e Hamburgo',
    country: 'DEU',
    subdivisions: ['DE-SH', 'DE-HH'],
    emoji: '⚓',
    summary: 'O baixo-alemão do norte, de Hamburgo e do Holstein, o mais ouvido no rádio e no teatro Ohnsorg, de Hamburgo.',
    features: ['“Moin!” vale o dia inteiro.', 'O teatro Ohnsorg, de Hamburgo, encena peças em baixo-alemão desde 1902.'],
    examples: [['Moin! Wo geiht’t?', 'Oi! Como vai?']],
  },
  {
    id: 'nds-mecklenburg',
    name: 'Mecklenburgisch',
    kind: 'sotaque',
    region: 'Mecklemburgo-Pomerânia Ocidental',
    country: 'DEU',
    subdivisions: ['DE-MV'],
    emoji: '🦢',
    summary: 'O baixo-alemão de Mecklemburgo, a língua de Fritz Reuter, o escritor que deu ao baixo-alemão um lugar na literatura no século XIX.',
    features: ['Fritz Reuter escreveu os seus romances em mecklemburguês.', 'Vogais com ditongos próprios.'],
    examples: [['Moin!', 'Oi!']],
  },
  {
    id: 'nds-ostfriesland',
    name: 'Ostfreesk (Frísia Oriental)',
    kind: 'sotaque',
    region: 'A Frísia Oriental, na Baixa Saxônia',
    country: 'DEU',
    subdivisions: ['DE-NI'],
    emoji: '🫖',
    summary: 'O baixo-alemão da Frísia Oriental, onde antes se falava frísio, e por isso com muitas palavras frísias. É a região do chá.',
    features: ['Muitas palavras do frísio antigo da região.', 'Ainda é falado por muita gente no dia a dia.'],
    examples: [['Moin!', 'Oi!']],
  },
  {
    id: 'nds-westfalen',
    name: 'Westfälisch (Vestfália)',
    kind: 'sotaque',
    region: 'A Vestfália: Münster, Osnabrück',
    country: 'DEU',
    subdivisions: ['DE-NW', 'DE-NI'],
    emoji: '🐖',
    summary: 'O baixo-alemão da Vestfália, onde o “sch” se separa em “s” e “ch”: “S-chinken” (presunto).',
    features: ['O “sch” soa “s” + “ch”: “Schinken” soa “S-chinken”.', 'Ditongos onde o norte tem vogais simples.'],
    examples: [['Schinken', 'presunto', 'pronunciado “S-chinken”']],
  },
  {
    id: 'nds-groningen',
    name: 'Gronings (Groningen)',
    kind: 'sotaque',
    region: 'A província de Groningen, nos Países Baixos',
    country: 'NLD',
    subdivisions: ['NL-GR'],
    emoji: '🇳🇱',
    summary: 'O baixo-saxão de Groningen, nos Países Baixos, irmão do da Frísia Oriental, do outro lado da fronteira, com o cumprimento “Moi!”.',
    features: ['“Moi!” é o cumprimento, a qualquer hora.', 'Muito próximo do baixo-alemão da Frísia Oriental.'],
    examples: [['Moi!', 'Oi!']],
  },
  {
    id: 'nds-twente',
    name: 'Twents (Twente)',
    kind: 'sotaque',
    region: 'Twente, no leste de Overijssel, nos Países Baixos',
    country: 'NLD',
    subdivisions: ['NL-OV'],
    emoji: '🧵',
    summary: 'O baixo-saxão de Twente, a antiga região têxtil dos Países Baixos, cujos moradores são chamados de “tukkers”.',
    features: ['Perto do vestfaliano, do outro lado da fronteira.', 'É um dos baixo-saxões neerlandeses com mais falantes.'],
    examples: [['Tukker', 'morador de Twente']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_NDS: Accent[] = noDialeto(BASE_NDS, 'nds-DE', { outros: {'nds-groningen': 'nds-NL', 'nds-twente': 'nds-NL'} });
