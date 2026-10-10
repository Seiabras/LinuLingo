import type { Accent } from '../types';

/**
 * Os falares do maori, por iwi (10/10/2026). Fontes: Wikipédia em português, inglês e maori («Māori
 * language», «Southern Māori», «Cook Islands Māori», consultadas em 10/10/2026) e Te Taura Whiri i te
 * Reo Māori.
 */
export const ACCENTS_MI: Accent[] = [
  {
    id: 'mi-ngapuhi',
    name: 'Ngāpuhi (norte)',
    kind: 'sotaque',
    region: 'Northland, no norte da Ilha Norte',
    country: 'NZL',
    subdivisions: ['NZ-NTL'],
    emoji: '🌿',
    summary: 'O maori do norte, do iwi Ngāpuhi, o mais numeroso, com palavras e formas próprias.',
    features: ['Palavras e formas próprias do norte.', 'O iwi com mais membros do país.'],
    examples: [['Kia ora!', 'Olá!']],
  },
  {
    id: 'mi-taranaki',
    name: 'Taranaki',
    kind: 'sotaque',
    region: 'Taranaki, na costa oeste da Ilha Norte',
    country: 'NZL',
    subdivisions: ['NZ-TKI'],
    emoji: '🏔️',
    summary: 'O maori de Taranaki, onde o “h” e o “wh” viram uma parada na garganta.',
    features: ['O “h” e o “wh” viram uma parada na garganta.', 'A região do monte Taranaki.'],
    examples: [['Taranaki', 'Taranaki']],
  },
  {
    id: 'mi-tuhoe',
    name: 'Tūhoe (leste)',
    kind: 'sotaque',
    region: 'Te Urewera e a Bay of Plenty',
    country: 'NZL',
    subdivisions: ['NZ-BOP'],
    emoji: '🌲',
    summary: 'O maori de Tūhoe, nas florestas de Te Urewera, onde o “ng” vira “n”.',
    features: ['O “ng” vira “n”.', 'Uma das regiões onde o maori sempre foi mais falado.'],
    examples: [['Te Urewera', 'Te Urewera']],
  },
  {
    id: 'mi-ngai-tahu',
    name: 'Ngāi Tahu (sul)',
    kind: 'sotaque',
    region: 'A Ilha Sul',
    country: 'NZL',
    subdivisions: ['NZ-CAN'],
    emoji: '🗻',
    summary: 'O maori da Ilha Sul, do iwi Ngāi Tahu, onde o “ng” virou “k”: o monte Cook é “Aoraki”, e não “Aorangi”.',
    features: ['O “ng” vira “k”: “Aoraki”, onde o norte diz “Aorangi”.', 'Perdeu falantes cedo e hoje é revitalizado.'],
    examples: [['Aoraki', 'o monte Cook', 'no norte, “Aorangi”']],
  },
  {
    id: 'mi-ilhas-cook',
    name: 'Maori das Ilhas Cook',
    kind: 'língua',
    region: 'As Ilhas Cook (Rarotonga)',
    country: 'COK',
    emoji: '🏝️',
    summary: 'A língua das Ilhas Cook, parente próxima do maori da Nova Zelândia, com o cumprimento “Kia orana!”.',
    features: ['Parente próxima do maori da Nova Zelândia.', 'Língua oficial das Ilhas Cook, ao lado do inglês.'],
    examples: [['Kia orana!', 'Olá!']],
  },
];
