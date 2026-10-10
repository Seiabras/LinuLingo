import type { Accent } from '../types';

/**
 * Os três grupos de falares do eslovaco (10/10/2026). Fontes: Wikipédia em eslovaco e em português
 * («Nárečia slovenského jazyka», «Východoslovenské nárečia», consultadas em 10/10/2026). O padrão de
 * Ľudovít Štúr (1843) partiu dos falares do centro.
 */
export const ACCENTS_SK: Accent[] = [
  {
    id: 'sk-central',
    name: 'Eslovaco central',
    kind: 'sotaque',
    region: 'O centro: Banská Bystrica, Žilina, Liptov',
    country: 'SVK',
    subdivisions: ['SK-BC', 'SK-ZI'],
    emoji: '⛰️',
    summary: 'O eslovaco do centro, a base do padrão de Ľudovít Štúr, com o “ä” e o ditongo “ô”: “mäso” (carne), “kôň” (cavalo).',
    features: ['O “ä” de “mäso” e o “ô” de “kôň”.', 'A “lei do ritmo”: duas sílabas longas seguidas não se juntam.'],
    examples: [['mäso', 'carne']],
  },
  {
    id: 'sk-ocidental',
    name: 'Eslovaco ocidental',
    kind: 'sotaque',
    region: 'O oeste: Bratislava, Trnava, Nitra, Trenčín',
    country: 'SVK',
    subdivisions: ['SK-BL', 'SK-TA', 'SK-NI', 'SK-TC'],
    emoji: '🏙️',
    summary: 'O eslovaco do oeste, de Bratislava, próximo do tcheco da Morávia, sem o “ä”: “maso”.',
    features: ['Sem o “ä”: “maso”, onde o padrão diz “mäso”.', 'Não segue a lei do ritmo do centro.'],
    examples: [['maso', 'carne', 'no padrão, “mäso”']],
  },
  {
    id: 'sk-oriental',
    name: 'Eslovaco oriental',
    kind: 'sotaque',
    region: 'O leste: Košice, Prešov, Spiš, Šariš',
    country: 'SVK',
    subdivisions: ['SK-KI', 'SK-PV'],
    emoji: '🏰',
    summary: 'O eslovaco do leste, o mais diferente, com o acento na penúltima sílaba, como no polonês, e sem vogais longas.',
    features: ['O acento na penúltima sílaba, e não na primeira.', 'Sem vogais longas.', 'O “ď” e o “ť” viram “dz” e “c”: “dzeci” (crianças), onde o padrão diz “deti”.'],
    examples: [['dzeci', 'crianças', 'no padrão, “deti”']],
  },
];
