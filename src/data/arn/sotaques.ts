import type { Accent } from '../types';

/**
 * As variedades do mapudungun (10/10/2026). Fontes: Wikipédia em português, inglês e espanhol
 * («Mapuche language», «Pehuenche», «Lafkenche», «Huilliche language», consultadas em 10/10/2026). A
 * lista aprovou Chile e Argentina como dialetos; por falta de fonte para as histórias, entraram como
 * sotaques (dúvida em docs/duvidas-variedades.md).
 */
export const ACCENTS_ARN: Accent[] = [
  {
    id: 'arn-araucania',
    name: 'Araucanía (centro)',
    kind: 'sotaque',
    region: 'A Araucanía, no sul do Chile (Temuco)',
    country: 'CHL',
    subdivisions: ['CL-AR'],
    emoji: '🌿',
    summary: 'O mapudungun da Araucanía, o coração do território mapuche, com mais falantes.',
    features: ['A região com mais falantes.', 'Várias grafias em uso (unificada, Ragileo, Azümchefe).'],
    examples: [['Mari mari!', 'Olá!']],
  },
  {
    id: 'arn-pehuenche',
    name: 'Pehuenche',
    kind: 'sotaque',
    region: 'O Alto Biobío, na cordilheira',
    country: 'CHL',
    subdivisions: ['CL-BI'],
    emoji: '🌲',
    summary: 'O mapudungun dos pehuenche, o “povo do pewen”, as araucárias da cordilheira, de cujos pinhões eles se alimentam.',
    features: ['Palavras próprias da vida na cordilheira.', 'O pinhão da araucária (pewen) é a base da alimentação tradicional.'],
    examples: [['pewen', 'araucária']],
  },
  {
    id: 'arn-lafkenche',
    name: 'Lafkenche',
    kind: 'sotaque',
    region: 'A costa da Araucanía e do Biobío (Tirúa, Puerto Saavedra)',
    country: 'CHL',
    subdivisions: ['CL-AR', 'CL-BI'],
    emoji: '🌊',
    summary: 'O mapudungun dos lafkenche, o “povo do mar”, na costa do Pacífico.',
    features: ['Palavras próprias do mar e da pesca.', 'O nome vem de “lafken”, mar.'],
    examples: [['lafken', 'mar']],
  },
  {
    id: 'arn-argentina',
    name: 'Argentina (Neuquén)',
    kind: 'sotaque',
    region: 'Neuquén, Río Negro e Chubut, na Patagônia argentina',
    country: 'ARG',
    subdivisions: ['AR-Q', 'AR-R'],
    emoji: '🇦🇷',
    summary: 'O mapudungun da Patagônia argentina, de comunidades de Neuquén e Río Negro, com poucos falantes e escolas que tentam trazê-lo de volta.',
    features: ['Poucos falantes, a maioria idosa.', 'Palavras do espanhol rioplatense.'],
    examples: [['Mari mari!', 'Olá!']],
  },
  {
    id: 'arn-huilliche',
    name: 'Huilliche (tse süngun)',
    kind: 'língua',
    region: 'Osorno e Chiloé, em Los Lagos',
    country: 'CHL',
    subdivisions: ['CL-LL'],
    emoji: '🏝️',
    summary: 'A fala dos huilliche, o “povo do sul”, parente do mapudungun mas diferente dele, hoje com muito poucos falantes.',
    features: ['Parente do mapudungun, mas com sons e palavras próprios.', 'Muito ameaçado, com poucos falantes.'],
    examples: [['Tse süngun', 'tse süngun, o nome da língua']],
  },
];
