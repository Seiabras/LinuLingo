import type { MinimalPairs } from '../types';

/**
 * Pares mínimos do oromo. Fonte: Wikipedia ("Oromo language", seção de fonologia), que dá os dois
 * pares de exemplo usados aqui — "hara/haaraa" (vogal longa) e "badaa/baddaa" (consoante geminada) —
 * e descreve as ejetivas (c, q, x, ph) como "voiceless stops or affricates accompanied by
 * glottalization", sem dar um par mínimo de palavras para elas.
 */
export const PARES_OM: MinimalPairs = {
  contrasts: [
    {
      id: 'om-vogal-longa',
      name: 'Vogal curta × vogal longa (a × aa)',
      sounds: ['a', 'aː'],
      tip: 'O qubee marca a vogal longa dobrando a letra. Segure o som bem mais tempo na vogal dobrada — a diferença muda o sentido da palavra, não é só estilo de fala.',
    },
    {
      id: 'om-geminada',
      name: 'Consoante simples × consoante geminada (d × dd)',
      sounds: ['d', 'dː'],
      tip: 'Na consoante dobrada, a língua fica mais tempo no céu da boca antes de soltar o som — quase como segurar a respiração por um instante no meio da palavra.',
    },
    {
      id: 'om-ejetiva',
      name: 'Consoante comum × consoante ejetiva (k × q, t × x, tch × c, p × ph)',
      sounds: ['k', 'kʼ'],
      tip: 'Nas ejetivas, a garganta fecha por um instante (a glote trava o ar) e solta um som seco, quase estalado — bem diferente do k, t, p e tch comuns do português, que saem com ar escapando pela boca.',
      deviceVoice: true,
    },
  ],
  pairs: [
    { contrast: 'om-vogal-longa', a: ['hara', 'lago'], b: ['haaraa', 'novo'] },
    { contrast: 'om-geminada', a: ['badaa', 'ruim'], b: ['baddaa', 'planalto'] },
  ],
};
