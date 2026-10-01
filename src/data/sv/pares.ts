import type { MinimalPairs } from '../types';

/** Pares mínimos do sueco para quem fala português. */
export const PARES_SV: MinimalPairs = {
  contrasts: [
    {
      id: 'quantidade',
      name: 'vogal longa × vogal curta',
      sounds: ['ɑː', 'a'],
      tip: 'Em sueco a duração muda o sentido: vogal longa com uma consoante (tak, telhado) × vogal curta com consoante dupla (tack, obrigado). Estique a vogal de “tak” e corte a de “tack”, segurando o “k”.',
    },
    {
      id: 'u-o',
      name: 'u sueco [ʉ] × o [u]',
      sounds: ['ʉː', 'uː'],
      tip: 'O “u” sueco longo não existe em português: fale “i” arredondando bem os lábios, com a língua no meio da boca (hus, casa). O “o” longo sueco soa como o nosso “u” (hos, na casa de).',
    },
    {
      id: 'y-i',
      name: 'y [y] × i',
      sounds: ['yː', 'iː'],
      tip: 'O “y” é um “i” com os lábios em bico, como o “u” do francês: by (aldeia) × bi (abelha); fyra (quatro) × fira (comemorar).',
    },
    {
      id: 'aa-o',
      name: 'å [oː] × o [uː]',
      sounds: ['oː', 'uː'],
      tip: 'A escrita engana: “å” soa como o nosso “ô” e o “o” longo soa como “u”: kål (couve) × kol (carvão).',
    },
  ],
  pairs: [
    { contrast: 'quantidade', a: ['tak', 'telhado'], b: ['tack', 'obrigado'] },
    { contrast: 'quantidade', a: ['glas', 'vidro, copo'], b: ['glass', 'sorvete'] },
    { contrast: 'quantidade', a: ['vit', 'branco'], b: ['vitt', 'branco (neutro)'] },
    { contrast: 'u-o', a: ['hus', 'casa'], b: ['hos', 'na casa de'] },
    { contrast: 'y-i', a: ['by', 'aldeia'], b: ['bi', 'abelha'] },
    { contrast: 'y-i', a: ['fyra', 'quatro'], b: ['fira', 'comemorar'] },
    { contrast: 'aa-o', a: ['kål', 'couve'], b: ['kol', 'carvão'] },
  ],
  sameSound: [{ words: [['hjul', 'roda'], ['jul', 'Natal']], note: 'O “h” antes de “j” não se pronuncia: as duas palavras soam [jʉːl].' }],
};
