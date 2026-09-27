import type { MinimalPairs } from '../types';

/**
 * Pares mínimos do romeno para quem fala português. As palavras entram também na busca de
 * gravações (scripts/baixar-audios.mjs).
 */
export const PARES_RO: MinimalPairs = {
  contrasts: [
    {
      id: 'a-ă',
      name: 'a × ă',
      sounds: ['a', 'ə'],
      tip: 'O «ă» é a vogal neutra [ə], parecida com o «a» átono do português de Portugal («cama» dito rápido) ou o «e» do inglês «the». Em romeno ela muda o sentido, e o artigo definido «-a» troca o «ă» final: casă (uma casa) × casa (a casa).',
    },
    {
      id: 't-ț',
      name: 't × ț',
      sounds: ['t', 't͡s'],
      tip: 'O «ț» é um «ts» dito de uma vez, como em «tsunami». Não é o «t» do Brasil antes de «i» (que soa «tch»): em romeno, «ti» é [ti] e «ți», [t͡si].',
    },
    {
      id: 's-ș',
      name: 's × ș',
      sounds: ['s', 'ʃ'],
      tip: 'O «ș» é o «x» de «xícara». O «s» é sempre [s]: não vira [ʃ] no fim da sílaba, como no Rio, nem [z] entre vogais, como no português («casa»).',
    },
    {
      id: 'i-curto',
      name: 'sem -i × com -i curto',
      sounds: ['p', 'pʲ'],
      tip: 'O «-i» do plural masculino quase não se ouve: não é uma vogal, só deixa a consoante de antes «molhada» [ʲ]. lup (lobo) × lupi (lobos). Às vezes a consoante muda junto: brad → brazi, rac → raci [ratʃʲ].',
    },
  ],
  pairs: [
    { contrast: 'a-ă', a: ['var', 'cal (de parede)'], b: ['văr', 'primo'] },
    { contrast: 'a-ă', a: ['par', 'estaca'], b: ['păr', 'cabelo; pereira'] },
    { contrast: 'a-ă', a: ['casa', 'a casa'], b: ['casă', 'casa'] },
    { contrast: 'a-ă', a: ['fata', 'a menina'], b: ['fată', 'menina'] },
    { contrast: 'a-ă', a: ['masa', 'a mesa'], b: ['masă', 'mesa'] },
    { contrast: 't-ț', a: ['tine', 'você (em «cu tine»)'], b: ['ține', 'segura, mantém'] },
    { contrast: 't-ț', a: ['fata', 'a menina'], b: ['fața', 'o rosto'] },
    { contrast: 't-ț', a: ['rata', 'a taxa'], b: ['rața', 'a pata (ave)'] },
    { contrast: 't-ț', a: ['tară', 'tara, defeito'], b: ['țară', 'país'] },
    { contrast: 's-ș', a: ['sort', 'tipo, variedade'], b: ['șort', 'short'] },
    { contrast: 's-ș', a: ['sa', 'dela, dele (com palavra feminina)'], b: ['șa', 'sela'] },
    { contrast: 'i-curto', a: ['lup', 'lobo'], b: ['lupi', 'lobos'] },
    { contrast: 'i-curto', a: ['pom', 'árvore frutífera'], b: ['pomi', 'árvores frutíferas'] },
    { contrast: 'i-curto', a: ['pas', 'passo'], b: ['pași', 'passos'] },
    { contrast: 'i-curto', a: ['brad', 'abeto'], b: ['brazi', 'abetos'] },
    { contrast: 'i-curto', a: ['rac', 'lagostim'], b: ['raci', 'lagostins'] },
    { contrast: 'i-curto', a: ['cot', 'cotovelo'], b: ['coți', 'cotovelos'] },
  ],
};
