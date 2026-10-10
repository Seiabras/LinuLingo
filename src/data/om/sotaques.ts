import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do oromo (10/10/2026). Fontes: Wikipédia em português, inglês e oromo («Oromo language»,
 * «Borana dialect», consultadas em 10/10/2026). O borana do Quênia entra como sotaque; se vira dialeto
 * é dúvida para o dono (docs/duvidas-variedades.md).
 */
const BASE_OM: Accent[] = [
  {
    id: 'om-oeste',
    name: 'Oeste (Wellega)',
    kind: 'sotaque',
    region: 'Wellega e o oeste da Oromia (Nekemte)',
    country: 'ETH',
    subdivisions: ['ET-OR'],
    emoji: '☕',
    summary: 'O oromo do oeste, de Wellega, região do café, uma das variedades mais faladas.',
    features: ['Uma das variedades com mais falantes.', 'Escrito no alfabeto latino “qubee”, como todo o oromo desde 1991.'],
    examples: [['Akkam?', 'Como vai?']],
  },
  {
    id: 'om-shewa',
    name: 'Shewa (centro)',
    kind: 'sotaque',
    region: 'O centro da Oromia, em volta de Adis Abeba (Finfinne)',
    country: 'ETH',
    subdivisions: ['ET-OR'],
    emoji: '🏙️',
    summary: 'O oromo do centro, em volta de Adis Abeba, com muitas palavras do amárico.',
    features: ['Muitas palavras do amárico.', 'Para os oromos, Adis Abeba se chama Finfinne.'],
    examples: [['Finfinnee', 'Adis Abeba, em oromo']],
  },
  {
    id: 'om-harar',
    name: 'Leste (Harar)',
    kind: 'sotaque',
    region: 'Harar e o leste da Oromia',
    country: 'ETH',
    subdivisions: ['ET-OR', 'ET-HA', 'ET-DD'],
    emoji: '🕌',
    summary: 'O oromo do leste, de Harar, região de maioria muçulmana, com palavras do árabe e do somali.',
    features: ['Palavras do árabe e do somali.', 'Vogais e formas próprias do leste.'],
    examples: [['Harar', 'Harar']],
  },
  {
    id: 'om-borana',
    name: 'Borana (sul e Quênia)',
    kind: 'sotaque',
    region: 'O sul da Etiópia e o norte do Quênia (Marsabit, Isiolo)',
    country: 'KEN',
    subdivisions: ['KE-25', 'KE-09'],
    emoji: '🐄',
    summary: 'O oromo dos borana, pastores do sul da Etiópia e do norte do Quênia, com o sistema tradicional de gerações, o “gadaa”.',
    features: ['Guarda o sistema tradicional “gadaa”, patrimônio da UNESCO.', 'Palavras do suaíli, no lado queniano.'],
    examples: [['Booranaa', 'borana']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_OM: Accent[] = noDialeto(BASE_OM, 'om-ET', { iguais: {'om-borana': 'om-KE'} });
