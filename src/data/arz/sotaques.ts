import type { Accent } from '../types';

/**
 * Os falares do árabe egípcio (10/10/2026). Fontes: Wikipédia em português, inglês e árabe («Egyptian
 * Arabic», «Sa'idi Arabic», «Alexandrian dialect», consultadas em 10/10/2026). O saidi, do Alto Egito,
 * tem código ISO próprio (aec) e entra como sotaque; se vira língua própria é dúvida para o dono
 * (docs/duvidas-variedades.md).
 */
export const ACCENTS_ARZ: Accent[] = [
  {
    id: 'arz-cairo',
    name: 'Cairo (padrão)',
    kind: 'sotaque',
    region: 'O Cairo e Gizé',
    country: 'EGY',
    subdivisions: ['EG-C', 'EG-GZ'],
    emoji: '🎬',
    summary: 'O árabe do Cairo, o mais entendido do mundo árabe, graças ao cinema, às novelas e às canções egípcias.',
    features: ['O “ق” soa como uma parada na garganta: “ʾalb” (coração), no lugar de “qalb”.', 'O “ج” soa “g”: “gamīl” (bonito).'],
    examples: [['إزيك؟', 'Como vai?']],
  },
  {
    id: 'arz-alexandria',
    name: 'Alexandria',
    kind: 'sotaque',
    region: 'Alexandria e a costa',
    country: 'EGY',
    subdivisions: ['EG-ALX'],
    emoji: '🌊',
    summary: 'O árabe de Alexandria, que usa o “-u” do plural também na primeira pessoa: “niktibu” (nós escrevemos), onde o Cairo diz “niktib”.',
    features: ['O “nós” leva o “-u” no verbo: “niktibu”, onde o Cairo diz “niktib”.', 'Palavras do grego e do italiano, de uma cidade de porto.'],
    examples: [['إحنا بنكتبوا', 'nós escrevemos', 'no Cairo, “إحنا بنكتب”']],
  },
  {
    id: 'arz-delta',
    name: 'Delta do Nilo',
    kind: 'sotaque',
    region: 'O Delta: Mansura, Tanta, Zagazig',
    country: 'EGY',
    subdivisions: ['EG-DK', 'EG-GH', 'EG-SHR', 'EG-MNF'],
    emoji: '🌾',
    summary: 'O árabe do Delta do Nilo, o mais próximo do do Cairo, com palavras e melodia do campo.',
    features: ['Muito próximo do falar do Cairo.', 'Palavras próprias do campo e da agricultura.'],
    examples: [['إزيك؟', 'Como vai?']],
  },
  {
    id: 'arz-saidi',
    name: 'Saidi (Alto Egito)',
    kind: 'sotaque',
    region: 'O Alto Egito: Assiut, Sohag, Luxor, Assuã',
    country: 'EGY',
    subdivisions: ['EG-AST', 'EG-SHG', 'EG-LX', 'EG-ASN', 'EG-KN', 'EG-MN'],
    emoji: '🏺',
    summary: 'O árabe do Alto Egito, o saidi, com o “ق” que soa “g” e o “ج” que soa “dj”, ao contrário do Cairo, e código próprio na norma ISO.',
    features: ['O “ق” soa “g”: “galb” (coração), onde o Cairo diz “ʾalb”.', 'O “ج” soa “dj”, como no árabe padrão.'],
    examples: [['قلب', 'coração', 'no saidi, “galb”; no Cairo, “ʾalb”']],
  },
];
