import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * O nheengatu, a língua geral amazônica, nos três países (10/10/2026). Fontes: Wikipédia em português e em
 * espanhol («Língua nheengatu», «Idioma ñe'engatú», consultadas em 10/10/2026). O nheengatu da Venezuela e
 * da Colômbia entra como sotaque; se vira dialeto é dúvida para o dono (docs/duvidas-variedades.md).
 */
const BASE_YRL: Accent[] = [
  {
    id: 'yrl-rio-negro',
    name: 'Rio Negro (Brasil)',
    kind: 'sotaque',
    region: 'O alto rio Negro: São Gabriel da Cachoeira e Santa Isabel',
    country: 'BRA',
    subdivisions: ['BR-AM'],
    emoji: '🌊',
    summary: 'O nheengatu do alto rio Negro, cooficial em São Gabriel da Cachoeira desde 2002, falado por povos baré, baniwa e warekena.',
    features: ['Língua cooficial de São Gabriel da Cachoeira desde 2002.', 'Falado por vários povos que perderam a língua própria.'],
    examples: [['Puranga ara!', 'Bom dia!']],
  },
  {
    id: 'yrl-venezuela',
    name: 'Venezuela',
    kind: 'sotaque',
    region: 'O estado do Amazonas venezuelano, no rio Negro',
    country: 'VEN',
    subdivisions: ['VE-Z'],
    emoji: '🇻🇪',
    summary: 'O nheengatu da Venezuela, chamado lá de “yeral”, com palavras do espanhol.',
    features: ['Chamado de “yeral” na Venezuela.', 'Palavras do espanhol.'],
    examples: [['Puranga ara!', 'Bom dia!']],
  },
  {
    id: 'yrl-colombia',
    name: 'Colômbia',
    kind: 'sotaque',
    region: 'O departamento de Guainía, no rio Negro',
    country: 'COL',
    subdivisions: ['CO-GUA'],
    emoji: '🇨🇴',
    summary: 'O nheengatu da Colômbia, falado em poucas comunidades do rio Negro, com palavras do espanhol.',
    features: ['Poucas comunidades.', 'Palavras do espanhol.'],
    examples: [['Puranga ara!', 'Bom dia!']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_YRL: Accent[] = noDialeto(BASE_YRL, 'yrl-BR', { iguais: {'yrl-venezuela': 'yrl-VE', 'yrl-colombia': 'yrl-CO', 'yrl-rio-negro': 'yrl-BR'} });
