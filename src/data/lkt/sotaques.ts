import type { Accent } from '../types';

/**
 * O lakota e as línguas irmãs, dakota e nakota (10/10/2026). Fontes: Wikipédia em português e em inglês
 * («Lakota language», «Dakota language», «Assiniboine language», consultadas em 10/10/2026). As três
 * são chamadas de “sioux”, nome que os próprios povos evitam.
 */
export const ACCENTS_LKT: Accent[] = [
  {
    id: 'lkt-lakota',
    name: 'Lakota (Dakota do Sul)',
    kind: 'sotaque',
    region: 'As reservas de Pine Ridge, Rosebud, Cheyenne River e Standing Rock',
    country: 'USA',
    subdivisions: ['US-SD', 'US-ND'],
    emoji: '🦬',
    summary: 'O lakota, dos povos teton, nas grandes planícies, a língua de Touro Sentado e Cavalo Louco.',
    features: ['Usa o “l” onde o dakota usa o “d”: “Lakȟóta”.', 'Escolas de imersão nas reservas.'],
    examples: [['Hau!', 'Olá!']],
  },
  {
    id: 'lkt-dakota',
    name: 'Dakota',
    kind: 'língua',
    region: 'Minnesota, Dakota do Norte e do Sul, e Manitoba, no Canadá',
    country: 'USA',
    subdivisions: ['US-MN', 'US-ND'],
    emoji: '🌾',
    summary: 'O dakota, dos povos santee e yankton, irmão do lakota, com o “d” onde o lakota tem “l”.',
    features: ['O “d” onde o lakota tem “l”: “Dakhóta”.', 'Falado também no Canadá.'],
    examples: [['Dakhóta', 'dakota']],
  },
  {
    id: 'lkt-nakota',
    name: 'Nakota (assiniboine)',
    kind: 'língua',
    region: 'Montana (Fort Peck, Fort Belknap) e as pradarias do Canadá',
    country: 'USA',
    subdivisions: ['US-MT'],
    emoji: '🐎',
    summary: 'O nakota, dos assiniboine e dos stoney, com o “n” onde o lakota tem “l”, hoje com poucos falantes.',
    features: ['O “n” onde o lakota tem “l”: “Nakhóta”.', 'Poucos falantes, a maioria idosa.'],
    examples: [['Nakhóta', 'nakota']],
  },
];
