import type { Accent } from '../types';

/**
 * Os dialetos do francês antigo (10/10/2026). Fontes: Wikipédia em português, inglês e francês («Old French»,
 * «Ancien français», «Anglo-Norman language», consultadas em 10/10/2026). O francês de hoje vem do franciano,
 * o falar de Paris.
 */
export const ACCENTS_FRO: Accent[] = [
  {
    id: 'fro-franciano',
    name: 'Franciano (Île-de-France)',
    kind: 'sotaque',
    region: 'Paris e a Île-de-France',
    country: 'FRA',
    emoji: '👑',
    summary: 'O francês antigo de Paris e da corte do rei, a base do francês de hoje, onde o “c” antes de “a” virou “ch”: “chastel” (castelo).',
    features: ['O “c” antes de “a” vira “ch”: “chastel”, “chat”.', 'O “w” germânico vira “g”: “garde” (guarda).'],
    examples: [['chastel', 'castelo']],
  },
  {
    id: 'fro-picardo',
    name: 'Picardo',
    kind: 'sotaque',
    region: 'A Picardia e o norte (Amiens, Arras)',
    country: 'FRA',
    emoji: '🏰',
    summary: 'O francês antigo do norte, da Picardia, rica em literatura no século XIII, que guardou o “c” duro antes de “a”: “castel”.',
    features: ['O “c” antes de “a” fica duro: “castel”, “cat”.', 'O “w” germânico continua: “warder” (guardar).'],
    examples: [['castel', 'castelo', 'em franciano, “chastel”']],
  },
  {
    id: 'fro-normando',
    name: 'Normando',
    kind: 'sotaque',
    region: 'A Normandia (Rouen, Caen)',
    country: 'FRA',
    emoji: '⚔️',
    summary: 'O francês antigo da Normandia, a terra dos descendentes dos vikings, que levou a língua para a Inglaterra em 1066.',
    features: ['O “c” antes de “a” fica duro, como no picardo: “castel”.', 'Palavras de origem nórdica, da colonização viking.'],
    examples: [['warde', 'guarda', 'em franciano, “garde”']],
  },
  {
    id: 'fro-anglonormando',
    name: 'Anglo-normando (Inglaterra)',
    kind: 'sotaque',
    region: 'A Inglaterra, depois da conquista normanda de 1066',
    country: 'GBR',
    emoji: '🦁',
    summary: 'O francês da corte, da lei e da Igreja na Inglaterra por três séculos depois de 1066, que deu ao inglês milhares de palavras: “castle”, “warden”, “court”.',
    features: ['A língua da corte e da lei inglesa por cerca de três séculos.', 'Deu ao inglês palavras como “castle”, “warden” e “court”.'],
    examples: [['castel', 'castelo', 'deu o inglês “castle”']],
  },
];
