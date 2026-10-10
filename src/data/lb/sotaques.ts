import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do luxemburguês (10/10/2026). Fontes: Wikipédia em luxemburguês, alemão e francês
 * («Lëtzebuergesch», «Lëtzebuergesch Dialekter», «Arelerland», consultadas em 10/10/2026). O padrão
 * nasceu do falar do centro. A área de Arlon (Bélgica) entra como sotaque; se vira dialeto é dúvida
 * para o dono (docs/duvidas-variedades.md).
 */
const BASE_LB: Accent[] = [
  {
    id: 'lb-centro',
    name: 'Centro (Luxemburgo)',
    kind: 'sotaque',
    region: 'A cidade de Luxemburgo e o centro do país',
    country: 'LUX',
    subdivisions: ['LU-LU', 'LU-ME', 'LU-CA'],
    emoji: '🏰',
    summary: 'O luxemburguês do centro e da capital, a base da língua padrão, da escola e do rádio.',
    features: ['É a base da norma escrita e da fala da mídia.', 'Mistura com naturalidade palavras do francês: “Merci!”.'],
    examples: [['Moien!', 'Olá!'], ['Äddi!', 'Tchau!']],
  },
  {
    id: 'lb-eislek',
    name: 'Ösling (Éislek)',
    kind: 'sotaque',
    region: 'O norte montanhoso: Clervaux, Wiltz, Vianden',
    country: 'LUX',
    subdivisions: ['LU-CL', 'LU-WI', 'LU-VD', 'LU-DI'],
    emoji: '🌲',
    summary: 'O luxemburguês do Éislek, as colinas das Ardenas no norte, com vogais próprias que soam rurais para quem é da capital.',
    features: ['Vogais e ditongos diferentes dos do centro.', 'Perto da fronteira belga e alemã, se aproxima dos falares do Eifel.'],
    examples: [['Moien!', 'Olá!']],
  },
  {
    id: 'lb-minett',
    name: 'Minett (sul)',
    kind: 'sotaque',
    region: 'O sul industrial: Esch-sur-Alzette, Differdange, Dudelange',
    country: 'LUX',
    subdivisions: ['LU-ES'],
    emoji: '⚒️',
    summary: 'O luxemburguês do Minett, a terra das minas de ferro e das siderúrgicas, que recebeu imigrantes italianos e portugueses.',
    features: ['Palavras vindas do italiano e do português, das famílias de imigrantes.', 'Um sotaque próprio, reconhecível no resto do país.'],
    examples: [['Moien!', 'Olá!']],
  },
  {
    id: 'lb-mosela',
    name: 'Mosela',
    kind: 'sotaque',
    region: 'O vale do Mosela: Remich, Grevenmacher',
    country: 'LUX',
    subdivisions: ['LU-RM', 'LU-GR'],
    emoji: '🍇',
    summary: 'O luxemburguês do vale do Mosela, a região do vinho, na fronteira com a Alemanha.',
    features: ['Perto dos falares do Mosela alemão, do outro lado do rio.', 'Vocabulário próprio do trabalho nos vinhedos.'],
    examples: [['Moien!', 'Olá!']],
  },
  {
    id: 'lb-arlon',
    name: 'Arlon (Bélgica)',
    kind: 'sotaque',
    region: 'O Arelerland, em volta de Arlon, na província belga de Luxemburgo',
    country: 'BEL',
    subdivisions: ['BE-WLX'],
    emoji: '🇧🇪',
    summary: 'O luxemburguês do lado belga da fronteira, em volta de Arlon, hoje falado sobretudo pelos mais velhos, porque a escola é em francês.',
    features: ['A escola e a administração são em francês, e a língua perdeu falantes.', 'Muito próximo do falar do oeste do Grão-Ducado.'],
    examples: [['Moien!', 'Olá!']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_LB: Accent[] = noDialeto(BASE_LB, 'lb-LU', { iguais: {'lb-arlon': 'lb-BE'} });
