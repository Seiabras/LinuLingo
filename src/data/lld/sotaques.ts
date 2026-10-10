import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * As variedades do ladino das Dolomitas, uma por vale (10/10/2026). Fontes: Wikipédia em ladino e em
 * italiano («Lingaz ladin», «Ladino gardenese», «Ladino badiotto», «Ladino fassano», «Ladino
 * fodom», «Ladino ampezzano», consultadas em 10/10/2026). Cada vale tem escrita própria; os cinco
 * são dialetos do ladino (decisão do dono, 10/10/2026), e o padrão do curso é o badiot.
 */
const BASE_LLD: Accent[] = [
  {
    id: 'lld-gherdeina',
    name: 'Gherdëina (Val Gardena)',
    kind: 'sotaque',
    region: 'A Val Gardena, no Tirol do Sul',
    country: 'ITA',
    subdivisions: ['IT-32', 'IT-BZ'],
    emoji: '🪵',
    summary: 'O ladino da Val Gardena, o vale dos entalhadores de madeira, com escrita própria e ensino trilíngue (ladino, alemão e italiano).',
    features: ['A vogal “ë”, um “ə” neutro.', 'Ensinado nas escolas, ao lado do alemão e do italiano.'],
    examples: [['Gherdëina', 'Val Gardena']],
  },
  {
    id: 'lld-badiot',
    name: 'Badiot (Val Badia)',
    kind: 'sotaque',
    region: 'A Val Badia e Marebbe, no Tirol do Sul',
    country: 'ITA',
    subdivisions: ['IT-32', 'IT-BZ'],
    emoji: '⛪',
    summary: 'O ladino da Val Badia, com o mareo de Marebbe, o vale com a maior proporção de falantes de ladino.',
    features: ['Uma das duas grandes variedades do Tirol do Sul, com a de Gardena.', 'O mareo, de Marebbe, tem traços próprios.'],
    examples: [['Val Badia', 'Val Badia']],
  },
  {
    id: 'lld-fascian',
    name: 'Fascian (Val di Fassa)',
    kind: 'sotaque',
    region: 'A Val di Fassa, no Trentino',
    country: 'ITA',
    subdivisions: ['IT-32', 'IT-TN'],
    emoji: '🏔️',
    summary: 'O ladino da Val di Fassa, a única comunidade ladina do Trentino, com três falares dentro do próprio vale.',
    features: ['Dentro do vale, três falares: cazet, brach e moenat.', 'Recebeu mais palavras do italiano e do trentino.'],
    examples: [['Fascia', 'Val di Fassa']],
  },
  {
    id: 'lld-fodom',
    name: 'Fodom (Livinallongo)',
    kind: 'sotaque',
    region: 'Livinallongo e Colle Santa Lucia, na província de Belluno',
    country: 'ITA',
    subdivisions: ['IT-34', 'IT-BL'],
    emoji: '🐐',
    summary: 'O ladino de Livinallongo, no Vêneto, um vale pequeno que já foi tirolês até 1918.',
    features: ['Pertenceu ao Tirol austríaco até a Primeira Guerra.', 'Traços de transição para o vêneto de Belluno.'],
    examples: [['Fodom', 'Livinallongo']],
  },
  {
    id: 'lld-anpezan',
    name: 'Anpezan (Cortina d’Ampezzo)',
    kind: 'sotaque',
    region: 'Cortina d’Ampezzo, na província de Belluno',
    country: 'ITA',
    subdivisions: ['IT-34', 'IT-BL'],
    emoji: '⛷️',
    summary: 'O ladino de Cortina d’Ampezzo, a mais próxima do vêneto entre as variedades ladinas.',
    features: ['A variedade mais próxima do vêneto.', 'Cortina também foi tirolesa até 1918.'],
    examples: [['Anpezo', 'Cortina d’Ampezzo']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_LLD: Accent[] = noDialeto(BASE_LLD, 'lld-badiot', { iguais: { 'lld-badiot': 'lld-badiot', 'lld-gherdeina': 'lld-gherdeina', 'lld-fascian': 'lld-fascian', 'lld-fodom': 'lld-fodom', 'lld-anpezan': 'lld-anpezan' } });
