import type { Accent } from '../types';

/**
 * Os falares do tsacônio (10/10/2026). Fontes: Wikipédia em português, inglês e grego («Tsakonian
 * language», «Τσακωνική διάλεκτος», consultadas em 10/10/2026). O tsacônio descende do dórico antigo,
 * e não da koiné de que veio o grego moderno.
 */
export const ACCENTS_TSD: Accent[] = [
  {
    id: 'tsd-sul',
    name: 'Tsacônio do sul (Leonidio)',
    kind: 'sotaque',
    region: 'Leonidio, Tyros e as vilas da costa leste do Peloponeso',
    country: 'GRC',
    subdivisions: ['GR-J'],
    emoji: '🏘️',
    summary: 'O tsacônio do sul, de Leonidio e Tyros, o mais falado hoje, com algumas centenas de falantes, quase todos idosos.',
    features: ['O falar mais vivo hoje.', 'Guarda o “a” longo do dórico antigo onde o grego tem “i”.'],
    examples: [['Λεωνίδιο', 'Leonidio']],
  },
  {
    id: 'tsd-norte',
    name: 'Tsacônio do norte (Kastanitsa)',
    kind: 'sotaque',
    region: 'Kastanitsa e Sitaina, nas montanhas do Parnon',
    country: 'GRC',
    subdivisions: ['GR-J'],
    emoji: '⛰️',
    summary: 'O tsacônio do norte, das vilas de montanha de Kastanitsa e Sitaina, mais influenciado pelo grego moderno, hoje quase sem falantes.',
    features: ['Mais influenciado pelo grego moderno.', 'Quase sem falantes hoje.'],
    examples: [['Καστάνιτσα', 'Kastanitsa']],
  },
  {
    id: 'tsd-propontida',
    name: 'Propôntida (extinto)',
    kind: 'sotaque',
    region: 'Vilas na costa do mar de Mármara, hoje na Turquia',
    country: 'TUR',
    emoji: '⛵',
    summary: 'O tsacônio das colônias do mar de Mármara, levado por tsacônios no século XVIII; os falantes foram para a Grécia na troca de populações de 1923, e a fala se perdeu.',
    features: ['Levado para o mar de Mármara no século XVIII.', 'Desapareceu depois da troca de populações de 1923.'],
    examples: [['Προποντίδα', 'Propôntida']],
  },
];
