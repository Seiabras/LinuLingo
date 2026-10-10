import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * As variedades do quéchua (10/10/2026). Fontes: Wikipédia em português, inglês e espanhol («Quechuan
 * languages», «Southern Quechua», «Ayacucho Quechua», «Kichwa», «Ancash Quechua», «Quichua
 * santiagueño», «South Bolivian Quechua», consultadas em 10/10/2026). O quéchua é uma família (decisão
 * do dono, 10/10/2026): o curso é a língua quéchua do sul, com os dialetos Cusco-Collao (padrão),
 * Ayacucho e Bolívia, e os sotaques dentro de cada um; o kichwa, o quéchua central e o de Santiago
 * del Estero são as outras línguas da família, com os dialetos delas descritos em cada uma.
 */
const BASE_QU: Accent[] = [
  {
    id: 'qu-cusco',
    name: 'Cusco',
    kind: 'sotaque',
    region: 'Cusco e o vale Sagrado dos Incas',
    country: 'PER',
    subdivisions: ['PE-CUS', 'PE-APU'],
    emoji: '🏔️',
    summary: 'O quéchua de Cusco, a antiga capital inca, a base do padrão do curso, com consoantes aspiradas e glotalizadas que o quéchua de Ayacucho não tem.',
    features: ['Consoantes aspiradas (“ph”, “th”, “kh”) e glotalizadas (“p’”, “t’”, “k’”).', 'Cusco foi a capital do Império Inca.'],
    examples: [['Napaykullayki!', 'Olá! (eu te saúdo)']],
  },
  {
    id: 'qu-ayacucho',
    name: 'Ayacucho (chanka)',
    kind: 'sotaque',
    region: 'Ayacucho, Huancavelica e o oeste de Apurímac, no Peru',
    country: 'PER',
    subdivisions: ['PE-AYA', 'PE-HUV'],
    emoji: '⛪',
    summary: 'O quéchua de Ayacucho, do grupo do sul, sem as consoantes aspiradas e glotalizadas de Cusco, e por isso mais fácil para quem está começando.',
    features: ['Sem consoantes aspiradas nem glotalizadas.', 'Muito próximo do de Cusco na gramática.'],
    examples: [['Allinllachu?', 'Tudo bem?']],
  },
  {
    id: 'qu-kichwa',
    name: 'Kichwa (Equador)',
    kind: 'língua',
    region: 'Os Andes do Equador (Otavalo, Chimborazo) e a Amazônia equatoriana',
    country: 'ECU',
    subdivisions: ['EC-I', 'EC-H', 'EC-X'],
    emoji: '🌋',
    summary: 'O kichwa do Equador, com padrão escrito próprio (kichwa unificado) e formas mais simples que as do quéchua do sul.',
    features: ['Padrão escrito próprio, o kichwa unificado.', 'Muitas formas simplificadas em relação ao quéchua do sul.', 'Dialetos: o kichwa da serra (Imbabura, Chimborazo, Cañar) e o da Amazônia (Napo, Pastaza).'],
    examples: [['Alli puncha!', 'Bom dia!']],
  },
  {
    id: 'qu-ancash',
    name: 'Áncash (central)',
    kind: 'língua',
    region: 'Áncash e Huaraz, nos Andes do centro do Peru',
    country: 'PER',
    subdivisions: ['PE-ANC'],
    emoji: '🏞️',
    summary: 'O quéchua de Áncash, do grupo central, com vogais longas e tão diferente do quéchua do sul que os falantes dos dois mal se entendem.',
    features: ['Vogais longas, que o quéchua do sul não tem.', 'Do grupo central, muito diferente do de Cusco.', 'Dialetos: Huaylas e Conchucos (Áncash), Huánuco, Yaru e wanka (Junín).'],
    examples: [['Waraz', 'Huaraz']],
  },
  {
    id: 'qu-santiago',
    name: 'Santiago del Estero (Argentina)',
    kind: 'língua',
    region: 'A província de Santiago del Estero, na Argentina',
    country: 'ARG',
    subdivisions: ['AR-G'],
    emoji: '🇦🇷',
    summary: 'O quíchua santiaguenho, falado longe dos Andes, nas planícies do norte da Argentina, com muitas palavras do espanhol.',
    features: ['Falado longe dos Andes, numa planície.', 'Muitas palavras do espanhol e gramática simplificada.'],
    examples: [['Santiago del Estero', 'Santiago del Estero']],
  },
  {
    id: 'qu-puno',
    name: 'Puno',
    kind: 'sotaque',
    region: 'Puno, às margens do lago Titicaca',
    country: 'PER',
    subdivisions: ['PE-PUN'],
    emoji: '🛶',
    summary: 'O quéchua de Puno, na beira do Titicaca, vizinho do aimará, do mesmo dialeto Cusco-Collao.',
    features: ['Palavras do aimará, a língua vizinha.', 'Consoantes aspiradas e glotalizadas, como em Cusco.'],
    examples: [['Napaykullayki!', 'Olá! (eu te saúdo)']],
  },
  {
    id: 'qu-cochabamba',
    name: 'Cochabamba',
    kind: 'sotaque',
    region: 'Cochabamba, no centro da Bolívia',
    country: 'BOL',
    subdivisions: ['BO-C'],
    emoji: '🌽',
    summary: 'O quéchua de Cochabamba, o mais falado da Bolívia, com muitas palavras do espanhol.',
    features: ['Muitas palavras do espanhol na fala do dia a dia.', 'Consoantes aspiradas e glotalizadas, como em Cusco.'],
    examples: [['Imaynalla?', 'Como vai?']],
  },
  {
    id: 'qu-potosi',
    name: 'Potosí e Sucre',
    kind: 'sotaque',
    region: 'Potosí e Chuquisaca (Sucre), no sul da Bolívia',
    country: 'BOL',
    subdivisions: ['BO-P', 'BO-H'],
    emoji: '⛏️',
    summary: 'O quéchua de Potosí, a antiga cidade da prata, e de Sucre, a capital constitucional da Bolívia.',
    features: ['Falado nas antigas regiões mineiras de Potosí.', 'Consoantes aspiradas e glotalizadas, como em Cusco.'],
    examples: [['Imaynalla?', 'Como vai?']],
  },
];

// o quéchua do sul e os seus dialetos (decisão do dono, 10/10/2026)
export const ACCENTS_QU: Accent[] = noDialeto(BASE_QU, 'qu-cusco-collao', { iguais: { 'qu-ayacucho': 'qu-ayacucho' }, outros: { 'qu-cochabamba': 'qu-BO', 'qu-potosi': 'qu-BO' } }).map((a) =>
  // o kichwa e o quéchua de Áncash ganharam cursos próprios (10/10/2026), com os glottocodes colo1257 e huay1239
  a.id === 'qu-kichwa' ? { ...a, estudarMais: { curso: 'colo1257' } } : a.id === 'qu-ancash' ? { ...a, estudarMais: { curso: 'huay1239' } } : a,
);
