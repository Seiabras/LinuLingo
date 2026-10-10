import type { Accent } from '../types';

/**
 * As variedades do quéchua (10/10/2026). Fontes: Wikipédia em português, inglês e espanhol («Quechuan
 * languages», «Southern Quechua», «Ayacucho Quechua», «Kichwa», «Ancash Quechua», «Quichua
 * santiagueño», consultadas em 10/10/2026). A lista propôs os grandes grupos como dialetos; a
 * estrutura é dúvida para o dono (docs/duvidas-variedades.md), e por enquanto cada um é sotaque.
 */
export const ACCENTS_QU: Accent[] = [
  {
    id: 'qu-cusco',
    name: 'Cusco-Collao',
    kind: 'sotaque',
    region: 'Cusco e Puno, no Peru, e o altiplano e Cochabamba, na Bolívia',
    country: 'PER',
    subdivisions: ['PE-CUS', 'PE-PUN', 'PE-APU'],
    emoji: '🏔️',
    summary: 'O quéchua de Cusco, a antiga capital inca, e do altiplano, com consoantes aspiradas e glotalizadas que o quéchua de Ayacucho não tem.',
    features: ['Consoantes aspiradas (“ph”, “th”, “kh”) e glotalizadas (“p’”, “t’”, “k’”).', 'Falado também na Bolívia, de Cochabamba a Potosí.'],
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
    kind: 'sotaque',
    region: 'Os Andes do Equador (Otavalo, Chimborazo) e a Amazônia equatoriana',
    country: 'ECU',
    subdivisions: ['EC-I', 'EC-H', 'EC-X'],
    emoji: '🌋',
    summary: 'O kichwa do Equador, com padrão escrito próprio (kichwa unificado) e formas mais simples que as do quéchua do sul.',
    features: ['Padrão escrito próprio, o kichwa unificado.', 'Muitas formas simplificadas em relação ao quéchua do sul.'],
    examples: [['Alli puncha!', 'Bom dia!']],
  },
  {
    id: 'qu-ancash',
    name: 'Áncash (central)',
    kind: 'sotaque',
    region: 'Áncash e Huaraz, nos Andes do centro do Peru',
    country: 'PER',
    subdivisions: ['PE-ANC'],
    emoji: '🏞️',
    summary: 'O quéchua de Áncash, do grupo central, com vogais longas e tão diferente do quéchua do sul que os falantes dos dois mal se entendem.',
    features: ['Vogais longas, que o quéchua do sul não tem.', 'Do grupo central, muito diferente do de Cusco.'],
    examples: [['Waraz', 'Huaraz']],
  },
  {
    id: 'qu-santiago',
    name: 'Santiago del Estero (Argentina)',
    kind: 'sotaque',
    region: 'A província de Santiago del Estero, na Argentina',
    country: 'ARG',
    subdivisions: ['AR-G'],
    emoji: '🇦🇷',
    summary: 'O quíchua santiaguenho, falado longe dos Andes, nas planícies do norte da Argentina, com muitas palavras do espanhol.',
    features: ['Falado longe dos Andes, numa planície.', 'Muitas palavras do espanhol e gramática simplificada.'],
    examples: [['Santiago del Estero', 'Santiago del Estero']],
  },
];
