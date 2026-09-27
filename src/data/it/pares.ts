import type { MinimalPairs } from '../types';

/**
 * Pares mínimos do italiano para quem fala português. As palavras entram também na busca de
 * gravações (scripts/baixar-audios.mjs).
 */
export const PARES_IT: MinimalPairs = {
  contrasts: [
    {
      id: 'dupla',
      name: 'consoante simples × dupla',
      sounds: ['n', 'nː'],
      tip: 'A consoante dupla é mais longa: a boca fica um instante parada nela antes da vogal seguinte, e a vogal de antes fica curta. É isso que separa caro (caro, querido) de carro (carroça). O ouvido do brasileiro não costuma prestar atenção nisso: ouça a pausa.',
    },
    {
      id: 'n-gn',
      name: 'n × gn',
      sounds: ['n', 'ɲː'],
      tip: 'O «gn» é o nosso «nh» (e em italiano sempre um pouco longo): campana (sino) × campagna (campo).',
    },
    {
      id: 'l-gli',
      name: 'l × gli',
      sounds: ['l', 'ʎː'],
      tip: 'O «gli» é o nosso «lh»: fili (fios) × figli (filhos). O «i» depois de «gl» não se pronuncia quando vem outra vogal (moglie = «molhe»).',
    },
  ],
  pairs: [
    { contrast: 'dupla', a: ['caro', 'caro, querido'], b: ['carro', 'carroça'] },
    { contrast: 'dupla', a: ['nono', 'nono'], b: ['nonno', 'avô'] },
    { contrast: 'dupla', a: ['pala', 'pá'], b: ['palla', 'bola'] },
    { contrast: 'dupla', a: ['sete', 'sede'], b: ['sette', 'sete'] },
    { contrast: 'dupla', a: ['capello', 'fio de cabelo'], b: ['cappello', 'chapéu'] },
    { contrast: 'dupla', a: ['eco', 'eco'], b: ['ecco', 'eis, aqui está'] },
    { contrast: 'dupla', a: ['casa', 'casa'], b: ['cassa', 'caixa'] },
    { contrast: 'dupla', a: ['sono', 'sou; são'], b: ['sonno', 'sono'] },
    { contrast: 'dupla', a: ['camino', 'lareira'], b: ['cammino', 'caminho'] },
    { contrast: 'dupla', a: ['speso', 'gasto'], b: ['spesso', 'muitas vezes; grosso'] },
    { contrast: 'dupla', a: ['pena', 'pena, dó'], b: ['penna', 'pena de ave; caneta'] },
    { contrast: 'dupla', a: ['ala', 'asa'], b: ['alla', 'à, ao'] },
    { contrast: 'dupla', a: ['fato', 'destino'], b: ['fatto', 'feito'] },
    { contrast: 'dupla', a: ['rosa', 'rosa'], b: ['rossa', 'vermelha'] },
    { contrast: 'dupla', a: ['note', 'notas'], b: ['notte', 'noite'] },
    { contrast: 'n-gn', a: ['campana', 'sino'], b: ['campagna', 'campo, zona rural'] },
    { contrast: 'n-gn', a: ['sono', 'sou; são'], b: ['sogno', 'sonho'] },
    { contrast: 'n-gn', a: ['anello', 'anel'], b: ['agnello', 'cordeiro'] },
    { contrast: 'l-gli', a: ['fili', 'fios'], b: ['figli', 'filhos'] },
    { contrast: 'l-gli', a: ['mole', 'massa, volume'], b: ['moglie', 'esposa'] },
  ],
};
