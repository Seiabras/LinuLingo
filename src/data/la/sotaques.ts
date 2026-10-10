import type { Accent } from '../types';

/**
 * As pronúncias do latim (10/10/2026). Fontes: Wikipédia em português e em inglês («Pronúncia do latim»,
 * «Latin spelling and pronunciation», «Ecclesiastical Latin», consultadas em 10/10/2026), e W. Sidney Allen,
 * «Vox Latina» (1965), para a pronúncia restaurada.
 */
export const ACCENTS_LA: Accent[] = [
  {
    id: 'la-classica',
    name: 'Pronúncia clássica (restaurada)',
    kind: 'sotaque',
    region: 'A Roma do século I a.C., reconstruída pelos linguistas',
    country: 'ITA',
    subdivisions: ['IT-62'],
    emoji: '🏛️',
    summary: 'A pronúncia do tempo de Cícero e César, reconstruída pelos linguistas: o “c” é sempre “k” e o “v” soa “u”: “Veni, vidi, vici” soa “uêni, uídi, uíki”.',
    features: ['O “c” e o “g” são sempre duros: “Cicero” soa “Kíkero”.', 'O “v” soa como o “u” de “quase”: “uêni”.', 'O “ae” soa “ai”: “Caesar” soa “Kaissar”.'],
    examples: [['Veni, vidi, vici.', 'Vim, vi, venci.', 'pronunciado “uêni, uídi, uíki”']],
  },
  {
    id: 'la-eclesiastica',
    name: 'Pronúncia eclesiástica (italiana)',
    kind: 'sotaque',
    region: 'A Igreja Católica, o Vaticano e o canto gregoriano',
    country: 'VAT',
    emoji: '⛪',
    summary: 'A pronúncia da Igreja, a do italiano: o “c” antes de “e” e “i” soa “tch”, e o “ae” soa “é”: “Veni, vidi, vici” soa “vêni, vídi, vítchi”.',
    features: ['O “c” antes de “e” e “i” soa “tch”: “vitchi”.', 'O “ae” e o “oe” soam “é”: “Caesar” soa “Tchésar”.', 'O “gn” soa “nh”: “agnus” soa “ánhus”.'],
    examples: [['Veni, vidi, vici.', 'Vim, vi, venci.', 'pronunciado “vêni, vídi, vítchi”']],
  },
];
