import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os sotaques do tâmil (10/10/2026), na Índia, no Sri Lanka e no Sudeste Asiático. Fontes: Wikipédia em
 * português, inglês e tâmil («Tamil dialects», «Madras Bashai», «Kongu Tamil», «Jaffna Tamil
 * dialect», «Batticaloa Tamil dialect», «Singapore Tamil», consultadas em 10/10/2026). A lista aprovou
 * Índia e Sri Lanka como dialetos e marcou Singapura/Malásia como dúvida; por enquanto, todos sotaques
 * (docs/duvidas-variedades.md).
 */
const BASE_TA: Accent[] = [
  {
    id: 'ta-chennai',
    name: 'Chennai (Madras Bashai)',
    kind: 'sotaque',
    region: 'Chennai, a capital de Tamil Nadu',
    country: 'IND',
    subdivisions: ['IN-TN'],
    emoji: '🎤',
    summary: 'O tâmil de rua de Chennai, o “Madras Bashai”, com palavras do inglês, do télugo e do urdu, a fala das canções “gaana”.',
    features: ['Muitas palavras do inglês, do télugo e do urdu.', '“Machan” para “amigo, parceiro”.'],
    examples: [['மச்சான்', 'amigo, parceiro']],
  },
  {
    id: 'ta-madurai',
    name: 'Madurai',
    kind: 'sotaque',
    region: 'Madurai e o sul de Tamil Nadu',
    country: 'IND',
    subdivisions: ['IN-TN'],
    emoji: '🛕',
    summary: 'O tâmil de Madurai, a cidade do templo de Meenakshi e das antigas academias de poesia (os sangam), com uma melodia própria muito ouvida no cinema.',
    features: ['Melodia própria, marca de personagens do sul no cinema tâmil.', 'Madurai foi a sede das academias de poesia tâmil (sangam).'],
    examples: [['மதுரை', 'Madurai']],
  },
  {
    id: 'ta-kongu',
    name: 'Kongu (Coimbatore)',
    kind: 'sotaque',
    region: 'O Kongu Nadu: Coimbatore, Erode, Tiruppur',
    country: 'IND',
    subdivisions: ['IN-TN'],
    emoji: '🧵',
    summary: 'O tâmil do oeste, de Coimbatore, famoso pela cortesia: o sufixo “-nga” deixa tudo respeitoso, “vaanga” (venha, por favor).',
    features: ['O sufixo respeitoso “-nga”: “vaanga”, “saappidunga”.', 'Uma das falas mais reconhecíveis do tâmil.'],
    examples: [['வாங்க', 'venha (respeitoso)']],
  },
  {
    id: 'ta-jaffna',
    name: 'Jaffna (Sri Lanka)',
    kind: 'sotaque',
    region: 'A península de Jaffna, no norte do Sri Lanka',
    country: 'LKA',
    subdivisions: ['LK-4', 'LK-41'],
    emoji: '🇱🇰',
    summary: 'O tâmil de Jaffna, no norte do Sri Lanka, conservador e considerado próximo do tâmil literário, com palavras do português e do neerlandês do tempo colonial.',
    features: ['Guarda formas antigas que o tâmil da Índia perdeu.', 'Palavras do português e do neerlandês, dos colonizadores.'],
    examples: [['யாழ்ப்பாணம்', 'Jaffna']],
  },
  {
    id: 'ta-batticaloa',
    name: 'Batticaloa (Sri Lanka)',
    kind: 'sotaque',
    region: 'Batticaloa e a costa leste do Sri Lanka',
    country: 'LKA',
    subdivisions: ['LK-5', 'LK-51'],
    emoji: '🐟',
    summary: 'O tâmil da costa leste do Sri Lanka, de Batticaloa, com formas muito antigas e palavras próprias.',
    features: ['Considerado um dos falares mais conservadores do tâmil.', 'Falado por tâmeis e por muçulmanos da costa leste.'],
    examples: [['மட்டக்களப்பு', 'Batticaloa']],
  },
  {
    id: 'ta-singapura',
    name: 'Singapura e Malásia',
    kind: 'sotaque',
    region: 'Singapura e a Malásia',
    country: 'SGP',
    emoji: '🇸🇬',
    summary: 'O tâmil de Singapura, onde é uma das quatro línguas oficiais, e da Malásia, com palavras do malaio, do inglês e do chinês.',
    features: ['Uma das quatro línguas oficiais de Singapura.', 'Palavras do malaio e do inglês.'],
    examples: [['சிங்கப்பூர்', 'Singapura']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_TA: Accent[] = noDialeto(BASE_TA, 'ta-IN', { outros: {'ta-jaffna': 'ta-LK', 'ta-batticaloa': 'ta-LK'}, livres: ['ta-singapura'] });
