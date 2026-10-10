import type { Accent } from '../types';

/**
 * Os falares do sardo (10/10/2026): o logudorês (centro-norte) e o campidanês (sul), cada um com a
 * sua norma escrita, e o nuorês, o mais conservador. Fontes: Wikipédia em sardo e em italiano («Limba
 * sarda», «Sardu logudoresu», «Sardu campidanesu», «Dialetto sassarese», «Dialetto gallurese»,
 * consultadas em 10/10/2026). A lista aprovou logudorês e campidanês como dialetos; por falta de fonte
 * para as histórias, entraram como sotaques (dúvida em docs/duvidas-variedades.md).
 */
export const ACCENTS_SC: Accent[] = [
  {
    id: 'sc-logudores',
    name: 'Logudorês',
    kind: 'sotaque',
    region: 'O centro-norte da Sardenha: Logudoro, Sassari (interior), Oristano (norte)',
    country: 'ITA',
    subdivisions: ['IT-88', 'IT-SS', 'IT-OR'],
    emoji: '🐎',
    summary: 'O sardo do centro-norte, com a sua norma escrita, que guarda o “k” do latim antes de “e” e “i”: “kentu” (cem), onde o sul diz “centu”.',
    features: [
      'O “k” do latim antes de “e” e “i” não muda: “kentu” (cem), “kera” (cera).',
      '“Ite?” para “o quê?”.',
    ],
    examples: [['Bona die!', 'Bom dia!'], ['Ite?', 'O quê?']],
  },
  {
    id: 'sc-nuores',
    name: 'Nuorês',
    kind: 'sotaque',
    region: 'Nuoro e a Barbagia, no centro da ilha',
    country: 'ITA',
    subdivisions: ['IT-88', 'IT-NU'],
    emoji: '⛰️',
    summary: 'O sardo de Nuoro e das montanhas da Barbagia, o mais próximo do latim entre as línguas românicas vivas, a terra de Grazia Deledda, Prêmio Nobel de 1926.',
    features: ['Guarda o “k” e o “g” do latim, e consoantes que o resto da ilha perdeu.', 'É muitas vezes agrupado com o logudorês.'],
    examples: [['Bona die!', 'Bom dia!']],
  },
  {
    id: 'sc-campidanes',
    name: 'Campidanês',
    kind: 'sotaque',
    region: 'O sul da Sardenha: Cagliari e a planície do Campidano',
    country: 'ITA',
    subdivisions: ['IT-88', 'IT-CA', 'IT-SU'],
    emoji: '🦩',
    summary: 'O sardo do sul, de Cagliari, com a sua própria norma escrita, onde o “k” antes de “e” e “i” virou “tch”: “centu” (cem).',
    features: [
      'O “k” antes de “e” e “i” vira “tch”: “centu”, onde o norte diz “kentu”.',
      '“Ita?” para “o quê?”.',
      'Os plurais e as vogais finais mudam: o “-e” e o “-o” átonos viram “-i” e “-u”.',
    ],
    examples: [['Bona dì!', 'Bom dia!'], ['Ita?', 'O quê?']],
  },
  {
    id: 'sc-sassares',
    name: 'Sassarês',
    kind: 'língua',
    region: 'Sassari, Porto Torres e Sorso, no noroeste da Sardenha',
    country: 'ITA',
    subdivisions: ['IT-88', 'IT-SS'],
    emoji: '🏰',
    summary: 'A fala de Sassari, nascida do contato do sardo com o toscano, o genovês e o corso na Idade Média. Não é sardo: é uma língua do grupo ítalo-românico, com código próprio na ISO (sdc).',
    features: ['Mistura base toscana e corsa com palavras e sons do sardo.', 'Protegida pela lei regional sarda de 1997, ao lado do sardo.'],
    examples: [['Sàssari', 'Sassari']],
  },
  {
    id: 'sc-gallures',
    name: 'Galurês',
    kind: 'língua',
    region: 'A Gallura, no nordeste da Sardenha (Tempio Pausania, Olbia)',
    country: 'ITA',
    subdivisions: ['IT-88', 'IT-SS'],
    emoji: '🌳',
    summary: 'A fala da Gallura, muito próxima do corso do sul, levada por pastores vindos da Córsega. Tem código próprio na ISO (sdn).',
    features: ['Muito próximo do corso oltramontano, do outro lado do estreito de Bonifacio.', 'O “dd” cacuminal, como no corso do sul e no sardo.'],
    examples: [['Tempiu', 'Tempio Pausania']],
  },
];
