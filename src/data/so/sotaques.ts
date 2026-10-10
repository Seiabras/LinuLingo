import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do somali (10/10/2026). Fontes: Wikipédia em português, inglês e somali («Somali language»,
 * «Somali dialects», «Maay language», consultadas em 10/10/2026). O padrão escrito (1972) segue o
 * somali do norte. Se os países viram dialetos é dúvida para o dono (docs/duvidas-variedades.md).
 */
const BASE_SO: Accent[] = [
  {
    id: 'so-norte',
    name: 'Norte (Hargeisa)',
    kind: 'sotaque',
    region: 'O norte da Somália e a Somalilândia (Hargeisa, Burao)',
    country: 'SOM',
    subdivisions: ['SO-WO', 'SO-TO'],
    emoji: '🐪',
    summary: 'O somali do norte, a base do padrão escrito em alfabeto latino desde 1972 e da grande tradição de poesia oral.',
    features: ['A base do padrão.', 'A poesia oral somali, como o “gabay”, é feita sobretudo nesta variedade.'],
    examples: [['Subax wanaagsan!', 'Bom dia!']],
  },
  {
    id: 'so-benadir',
    name: 'Benadir (Mogadíscio)',
    kind: 'sotaque',
    region: 'Mogadíscio e a costa do Benadir',
    country: 'SOM',
    subdivisions: ['SO-BN', 'SO-SH'],
    emoji: '🌊',
    summary: 'O somali da costa do Benadir e de Mogadíscio, com palavras do árabe, do suaíli e do italiano.',
    features: ['Palavras do italiano, do tempo colonial, e do árabe.', 'Vogais e formas próprias da costa.'],
    examples: [['Muqdisho', 'Mogadíscio']],
  },
  {
    id: 'so-djibuti',
    name: 'Djibuti',
    kind: 'sotaque',
    region: 'Djibuti',
    country: 'DJI',
    subdivisions: ['DJ-DJ'],
    emoji: '🇩🇯',
    summary: 'O somali de Djibuti, com palavras do francês, onde a Somália usa palavras do italiano e do inglês.',
    features: ['Palavras do francês.', 'Língua nacional ao lado do afar.'],
    examples: [['Jabuuti', 'Djibuti']],
  },
  {
    id: 'so-etiopia',
    name: 'Etiópia (Região Somali)',
    kind: 'sotaque',
    region: 'A Região Somali da Etiópia (Jijiga)',
    country: 'ETH',
    subdivisions: ['ET-SO'],
    emoji: '🇪🇹',
    summary: 'O somali da Etiópia, da região de Jijiga e do Ogaden, com palavras do amárico.',
    features: ['Palavras do amárico.', 'Língua oficial da Região Somali da Etiópia.'],
    examples: [['Jigjiga', 'Jijiga']],
  },
  {
    id: 'so-quenia',
    name: 'Quênia',
    kind: 'sotaque',
    region: 'O nordeste do Quênia (Garissa, Wajir, Mandera) e Nairóbi (Eastleigh)',
    country: 'KEN',
    subdivisions: ['KE-07', 'KE-24'],
    emoji: '🇰🇪',
    summary: 'O somali do nordeste do Quênia e do bairro de Eastleigh, em Nairóbi, com palavras do suaíli e do inglês.',
    features: ['Palavras do suaíli e do inglês.', 'Eastleigh, em Nairóbi, é chamado de “Pequena Mogadíscio”.'],
    examples: [['Subax wanaagsan!', 'Bom dia!']],
  },
  {
    id: 'so-maay',
    name: 'Maay',
    kind: 'língua',
    region: 'O sul da Somália, entre os rios Juba e Shabelle (Baidoa)',
    country: 'SOM',
    subdivisions: ['SO-BY', 'SO-BK'],
    emoji: '🌾',
    summary: 'A língua dos agricultores do sul da Somália, de Baidoa, tão diferente do somali padrão que os falantes dos dois mal se entendem.',
    features: ['Muito diferente do somali padrão.', 'Sons, palavras e gramática próprias.'],
    examples: [['Maay Maay', 'maay, o nome da língua']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_SO: Accent[] = noDialeto(BASE_SO, 'so-SO', { iguais: {'so-djibuti': 'so-DJ', 'so-etiopia': 'so-ET', 'so-quenia': 'so-KE'} });
