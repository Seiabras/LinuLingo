import type { MinimalPairs } from '../types';

/** Pares mínimos do suaíli para quem fala português (pronúncia de referência: o suaíli padrão). */
export const PARES_SW: MinimalPairs = {
  contrasts: [
    {
      id: 'm-silabico',
      name: 'm sozinho × m com vogal',
      sounds: ['m̩', 'mo'],
      tip: 'Antes de consoante, o «m» do suaíli pode ser uma sílaba inteira, sem vogal nenhuma: «mto» (rio) é m-to, e a força cai no «m». O brasileiro tende a pôr uma vogal ali («muto», «moto»), e aí a palavra vira outra: moto é fogo.',
    },
    {
      id: 'e-i',
      name: 'e final × i final',
      sounds: ['e', 'i'],
      tip: 'No português do Brasil, o «e» no fim da palavra vira «i» («leite» soa «leiti»). Em suaíli, não: toda vogal final soa inteira, e «kale» (antigo) é diferente de «kali» (bravo, forte).',
    },
    {
      id: 'o-u',
      name: 'o final × u final',
      sounds: ['o', 'u'],
      tip: 'Do mesmo jeito, o «o» final do português vira «u» («carro» soa «carru»). Em suaíli, o «o» final é um «ô» de verdade: «kuku» é galinha, «kuko» é «está lá».',
    },
    {
      id: 'dh-z',
      name: 'dh × z',
      sounds: ['ð', 'z'],
      tip: 'O «dh», das palavras de origem árabe, é o «th» do inglês «this»: a ponta da língua entre os dentes, vibrando. O «z» é o nosso. Troque um pelo outro e «dhana» (ideia) vira «zana» (ferramentas).',
    },
  ],
  pairs: [
    { contrast: 'm-silabico', a: ['mto', 'rio'], b: ['moto', 'fogo'] },
    { contrast: 'm-silabico', a: ['mji', 'cidade'], b: ['maji', 'água'] },
    { contrast: 'e-i', a: ['kale', 'antigo'], b: ['kali', 'bravo, forte'] },
    { contrast: 'e-i', a: ['lake', 'dele, dela'], b: ['laki', 'cem mil'] },
    { contrast: 'o-u', a: ['kuko', 'está lá'], b: ['kuku', 'galinha'] },
    { contrast: 'o-u', a: ['mbio', 'corrida'], b: ['mbiu', 'trompa de chifre'] },
    { contrast: 'dh-z', a: ['dhana', 'ideia, suposição'], b: ['zana', 'ferramentas'] },
    { contrast: 'dh-z', a: ['dhuru', 'prejudicar'], b: ['zuru', 'visitar'] },
  ],
};
