import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do malgaxe (10/10/2026). Fontes: Wikipédia em português, inglês e francês («Malagasy language»,
 * «Malagasy dialects», «Kibushi», consultadas em 10/10/2026). O padrão segue o merina, de Antananarivo. O
 * kibushi, de Mayotte, entra como sotaque; se vira dialeto é dúvida para o dono (docs/duvidas-variedades.md).
 */
const BASE_MG: Accent[] = [
  {
    id: 'mg-merina',
    name: 'Merina (padrão)',
    kind: 'sotaque',
    region: 'Antananarivo e o planalto central',
    country: 'MDG',
    subdivisions: ['MG-T'],
    emoji: '🏛️',
    summary: 'O malgaxe merina, do planalto e da capital, a base do padrão escrito desde o reino merina do século XIX.',
    features: ['A base do padrão escrito.', 'As vogais átonas do fim da palavra quase não se ouvem.'],
    examples: [['Manao ahoana!', 'Olá!']],
  },
  {
    id: 'mg-betsimisaraka',
    name: 'Betsimisaraka (leste)',
    kind: 'sotaque',
    region: 'A costa leste (Toamasina)',
    country: 'MDG',
    subdivisions: ['MG-A'],
    emoji: '🌴',
    summary: 'O malgaxe da costa leste, de Toamasina, o porto principal do país, com palavras e formas próprias.',
    features: ['Palavras e formas próprias da costa.', 'O maior grupo da costa leste.'],
    examples: [['Toamasina', 'Toamasina']],
  },
  {
    id: 'mg-sakalava',
    name: 'Sakalava (oeste)',
    kind: 'sotaque',
    region: 'A costa oeste (Mahajanga, Morondava)',
    country: 'MDG',
    subdivisions: ['MG-M', 'MG-U'],
    emoji: '🌳',
    summary: 'O malgaxe dos sakalava, da costa oeste, a terra dos baobás, com palavras do suaíli e do árabe.',
    features: ['Palavras do suaíli e do árabe, de séculos de comércio.', 'A Avenida dos Baobás fica em Morondava.'],
    examples: [['Morondava', 'Morondava']],
  },
  {
    id: 'mg-antandroy',
    name: 'Antandroy (sul)',
    kind: 'sotaque',
    region: 'O extremo sul, seco (Ambovombe)',
    country: 'MDG',
    subdivisions: ['MG-U'],
    emoji: '🌵',
    summary: 'O malgaxe dos antandroy, o “povo dos espinhos”, no sul seco, um dos falares mais diferentes do padrão.',
    features: ['Um dos falares mais diferentes do padrão.', 'O nome quer dizer “povo dos espinhos”.'],
    examples: [['Antandroy', 'povo dos espinhos']],
  },
  {
    id: 'mg-kibushi',
    name: 'Kibushi (Mayotte)',
    kind: 'sotaque',
    region: 'A ilha de Mayotte, departamento francês',
    country: 'MYT',
    emoji: '🇾🇹',
    summary: 'O malgaxe de Mayotte, o kibushi, próximo do sakalava, com muitas palavras do shimaore (o comorense) e do francês.',
    features: ['Próximo do malgaxe sakalava.', 'Palavras do shimaore e do francês.'],
    examples: [['Maore', 'Mayotte']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_MG: Accent[] = noDialeto(BASE_MG, 'mg-MG', { iguais: {'mg-kibushi': 'mg-YT'} });
