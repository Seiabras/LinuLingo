/**
 * O Linu no Nim. No difícil, joga perfeito pela soma nim (o XOR dos tamanhos das pilhas, a teoria
 * de Bouton, 1901): sempre que dá, deixa a soma em zero (e, na misère, o número certo de pilhas de
 * 1). Quando a posição está perdida, tira 1 palito da maior pilha, para durar mais e dar chance de
 * você errar. O médio acerta o lance perfeito às vezes; o fácil joga quase ao acaso.
 */
import type { NivelLinu } from './jogos-prefs';
import { lanceVencedor, lancesLegais, type LanceN, type NimState } from './nim-engine';

const ACERTO: Record<NivelLinu, number> = { facil: 0.2, medio: 0.6, dificil: 1 };

export function lanceNim(s: NimState, nivel: NivelLinu, rng: () => number = Math.random): LanceN | null {
  const lances = lancesLegais(s);
  if (lances.length === 0) return null;
  const perfeito = lanceVencedor(s.pilhas, s.misere);
  if (perfeito && rng() < ACERTO[nivel]) return perfeito;
  if (nivel === 'dificil') {
    const maior = s.pilhas.indexOf(Math.max(...s.pilhas));
    return { pilha: maior, quantos: 1 };
  }
  return lances[Math.floor(rng() * lances.length)]!;
}
