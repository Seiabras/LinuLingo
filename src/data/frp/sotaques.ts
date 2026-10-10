import type { Accent } from '../types';

/**
 * Os falares do francoprovençal (arpitano), nos três países (10/10/2026). Fontes: Wikipédia em
 * arpitano, francês e italiano («Francoprovençal», «Valdôtain», «Patois fribourgeois», «Ranz des
 * vaches», consultadas em 10/10/2026). Se os países viram dialetos é dúvida para o dono
 * (docs/duvidas-variedades.md); por enquanto, sotaques por região.
 */
export const ACCENTS_FRP: Accent[] = [
  {
    id: 'frp-savoia',
    name: 'Savoiano',
    kind: 'sotaque',
    region: 'A Savoia e a Alta Savoia',
    country: 'FRA',
    subdivisions: ['FR-73', 'FR-74'],
    emoji: '🧀',
    summary: 'O francoprovençal da Savoia, nas montanhas da França, a antiga terra dos duques que também governaram o Piemonte.',
    features: ['Cada vale tem o seu “patois”.', 'Guarda o “-a” final depois de consoante não palatal, como as línguas do sul.'],
    examples: [['Savouè', 'Savoia']],
  },
  {
    id: 'frp-lyon',
    name: 'Lionês, Bresse e Bugey',
    kind: 'sotaque',
    region: 'A região de Lyon, a Bresse e o Bugey',
    country: 'FRA',
    subdivisions: ['FR-69', 'FR-01', 'FR-42'],
    emoji: '🦁',
    summary: 'O francoprovençal da região de Lyon, a cidade que deu à língua o centro de onde ela se espalhou. Hoje é falado sobretudo no campo, pelos mais velhos.',
    features: ['Muito ameaçado: o francês tomou o lugar nas cidades.', 'Lyon foi o centro de onde a língua se espalhou na Idade Média.'],
    examples: [['Liyon', 'Lyon']],
  },
  {
    id: 'frp-valdostano',
    name: 'Valdostano',
    kind: 'sotaque',
    region: 'O Vale de Aosta, na Itália',
    country: 'ITA',
    subdivisions: ['IT-23'],
    emoji: '🏔️',
    summary: 'O francoprovençal do Vale de Aosta, na Itália, onde a língua é mais viva, ao lado do francês e do italiano oficiais.',
    features: ['A região onde mais gente ainda fala a língua no dia a dia.', 'Concurso escolar anual, o “Concours Cerlogne”, desde 1963.'],
    examples: [['la Veulla', 'Aosta, “a cidade”']],
  },
  {
    id: 'frp-valais',
    name: 'Valais',
    kind: 'sotaque',
    region: 'O Valais romando, na Suíça (Évolène)',
    country: 'CHE',
    subdivisions: ['CH-VS'],
    emoji: '🐄',
    summary: 'O francoprovençal do Valais, na Suíça, onde a vila de Évolène ainda passa a língua para as crianças.',
    features: ['Évolène é um dos poucos lugares onde as crianças ainda aprendem o patois em casa.', 'Muito diferente de vale para vale.'],
    examples: [['Valês', 'Valais']],
  },
  {
    id: 'frp-friburgo',
    name: 'Friburgo (gruérien)',
    kind: 'sotaque',
    region: 'A Gruyère, no cantão de Friburgo, na Suíça',
    country: 'CHE',
    subdivisions: ['CH-FR'],
    emoji: '🎶',
    summary: 'O francoprovençal da Gruyère, a terra do queijo, cantado no “Ranz des vaches”, o canto dos pastores que é quase um hino da Suíça romanda.',
    features: ['O “Ranz des vaches”, cantado em patois, é o canto mais conhecido da língua.', 'Há associações de patoisants ativas no cantão.'],
    examples: [['Lyôba!', 'o chamado das vacas no “Ranz des vaches”']],
  },
];
