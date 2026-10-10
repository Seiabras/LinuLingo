import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os sotaques do cantonês (10/10/2026) e o taishanês. Fontes: Wikipédia em português, inglês e chinês
 * («Cantonese», «Hong Kong Cantonese», «Taishanese», consultadas em 10/10/2026). A lista propôs
 * Hong Kong, Macau e Cantão como dialetos; por enquanto, sotaques (dúvida em
 * docs/duvidas-variedades.md).
 */
const BASE_YUE: Accent[] = [
  {
    id: 'yue-hongkong',
    name: 'Hong Kong',
    kind: 'sotaque',
    region: 'Hong Kong',
    country: 'HKG',
    emoji: '🏙️',
    summary: 'O cantonês de Hong Kong, o mais ouvido no mundo pelos filmes e pela música, com palavras do inglês e os “sons preguiçosos”: o “n” do começo vira “l”, “你” (nei) soa “lei”.',
    features: ['O “n” do começo vira “l”: “你” (nei) soa “lei”.', 'Muitas palavras do inglês: “的士” (dik si, táxi), “巴士” (baa si, ônibus).'],
    examples: [['你好', 'Olá!', 'pronunciado “lei hou” por muitos']],
  },
  {
    id: 'yue-cantao',
    name: 'Cantão (Guangzhou)',
    kind: 'sotaque',
    region: 'Guangzhou e o delta do rio das Pérolas',
    country: 'CHN',
    subdivisions: ['CN-GD'],
    emoji: '🏮',
    summary: 'O cantonês de Guangzhou, a referência histórica da língua, hoje falado ao lado do mandarim, com palavras do mandarim.',
    features: ['A referência histórica da pronúncia.', 'Palavras do mandarim, a língua da escola.'],
    examples: [['广州', 'Guangzhou']],
  },
  {
    id: 'yue-macau',
    name: 'Macau',
    kind: 'sotaque',
    region: 'Macau',
    country: 'MAC',
    emoji: '🎰',
    summary: 'O cantonês de Macau, muito próximo do de Hong Kong, com palavras do português.',
    features: ['Palavras do português, do tempo de Macau portuguesa.', 'Muito próximo do cantonês de Hong Kong.'],
    examples: [['澳門', 'Macau']],
  },
  {
    id: 'yue-taishan',
    name: 'Taishanês',
    kind: 'língua',
    region: 'Taishan, em Guangdong, e as antigas Chinatowns das Américas',
    country: 'CHN',
    subdivisions: ['CN-GD'],
    emoji: '🚢',
    summary: 'A língua de Taishan, de onde saíram os primeiros chineses das Américas no século XIX; por muito tempo foi a língua das Chinatowns de São Francisco e Nova York.',
    features: ['Foi a língua das antigas Chinatowns das Américas.', 'Difícil de entender para quem fala o cantonês de Hong Kong.'],
    examples: [['台山', 'Taishan']],
  },
  {
    id: 'yue-mandarim',
    name: 'Mandarim',
    kind: 'língua',
    region: 'A China, Taiwan e Singapura',
    country: 'CHN',
    emoji: '🇨🇳',
    summary: 'O mandarim padrão, a língua oficial da China, aprendido na escola por todos os falantes de cantonês, com um curso próprio no app.',
    features: ['Quatro tons, contra seis ou mais do cantonês.', 'A língua da escola e da TV em toda a China.'],
    examples: [['你好', 'Olá!', 'em mandarim, “nǐ hǎo”']],
    estudarMais: { curso: 'zh' },
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_YUE: Accent[] = noDialeto(BASE_YUE, 'yue-HK', { iguais: {'yue-macau': 'yue-MO', 'yue-cantao': 'yue-CN', 'yue-hongkong': 'yue-HK'} });
