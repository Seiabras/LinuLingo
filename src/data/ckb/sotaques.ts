import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do curdo central (sorani), no Iraque e no Irã (10/10/2026). Fontes: Wikipédia em
 * português, inglês e curdo («Sorani», «Mukriyani», «Ardalani», «Gorani language», consultadas em
 * 10/10/2026). Se Iraque e Irã viram dialetos é dúvida para o dono (docs/duvidas-variedades.md).
 */
const BASE_CKB: Accent[] = [
  {
    id: 'ckb-sulaimaniya',
    name: 'Sulaimaniya',
    kind: 'sotaque',
    region: 'Sulaimaniya, no Curdistão iraquiano',
    country: 'IRQ',
    subdivisions: ['IQ-SU'],
    emoji: '📚',
    summary: 'O curdo de Sulaimaniya, a capital cultural do Curdistão iraquiano, a base do sorani escrito.',
    features: ['A base da língua escrita.', 'Cidade de poetas e jornais desde o século XIX.'],
    examples: [['سڵاو!', 'Olá!']],
  },
  {
    id: 'ckb-erbil',
    name: 'Erbil (Hewlêr)',
    kind: 'sotaque',
    region: 'Erbil, a capital do Curdistão iraquiano',
    country: 'IRQ',
    emoji: '🏰',
    summary: 'O curdo de Erbil, a capital da região autônoma do Curdistão, com a cidadela, uma das cidades habitadas há mais tempo no mundo.',
    features: ['Vogais e palavras próprias, diferentes das de Sulaimaniya.', 'A cidadela de Erbil é patrimônio da UNESCO.'],
    examples: [['هەولێر', 'Erbil']],
  },
  {
    id: 'ckb-mukriyani',
    name: 'Mukriyani (Mahabad)',
    kind: 'sotaque',
    region: 'Mahabad e o noroeste do Irã',
    country: 'IRN',
    subdivisions: ['IR-04'],
    emoji: '🇮🇷',
    summary: 'O curdo de Mahabad, no Irã, a cidade da breve República de Mahabad (1946), com muitas palavras do persa.',
    features: ['Palavras do persa.', 'Uma literatura própria, com poetas como Hejar e Hêmin.'],
    examples: [['مەهاباد', 'Mahabad']],
  },
  {
    id: 'ckb-ardalani',
    name: 'Ardalani (Sanandaj)',
    kind: 'sotaque',
    region: 'Sanandaj e a província do Curdistão, no Irã',
    country: 'IRN',
    subdivisions: ['IR-12'],
    emoji: '🌄',
    summary: 'O curdo de Sanandaj, no Irã, a antiga capital dos príncipes de Ardalan.',
    features: ['Traços de transição para o curdo do sul.', 'Palavras do persa.'],
    examples: [['سنە', 'Sanandaj']],
  },
  {
    id: 'ckb-gorani',
    name: 'Gorani (hawrami)',
    kind: 'língua',
    region: 'As montanhas de Hawraman, na fronteira entre o Irã e o Iraque',
    country: 'IRN',
    subdivisions: ['IR-12', 'IR-05'],
    emoji: '⛰️',
    summary: 'A língua de Hawraman, iraniana mas de outro ramo que o curdo, que foi a língua da poesia na corte de Ardalan.',
    features: ['Foi a língua literária da corte de Ardalan.', 'Distingue gênero masculino e feminino, que o sorani perdeu.'],
    examples: [['هەورامی', 'hawrami']],
  },
  {
    id: 'ckb-curmanji',
    name: 'Curmanji',
    kind: 'língua',
    region: 'A Turquia, a Síria, o norte do Iraque e o Cáucaso',
    country: 'TUR',
    emoji: '🌞',
    summary: 'O curdo do norte, o mais falado, escrito em alfabeto latino na Turquia e na Síria, com um curso próprio no app.',
    features: ['Escrito em alfabeto latino.', 'Guarda o gênero e os casos que o sorani perdeu.'],
    examples: [['Rojbaş!', 'Bom dia!']],
    estudarMais: { curso: 'kmr' },
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_CKB: Accent[] = noDialeto(BASE_CKB, 'ckb-IQ', { outros: {'ckb-mukriyani': 'ckb-IR', 'ckb-ardalani': 'ckb-IR'} });
