/**
 * O Linu no senet: compara os lances por uma nota (o quanto os peões andaram, os que saíram, as
 * barreiras de 3, os peões presos nas casas 28 e 29, o perigo de um peão sozinho com um do adversário
 * logo atrás) e, no difícil, pesa também a melhor resposta do adversário para cada resultado das
 * varetas (expectimax raso).
 */
import type { NivelLinu } from './jogos-prefs';
import { chanceDeMarcados } from './lotes';
import { SAIU, VARETAS, barreiras, mover, origensLegais, outro, type LadoS, type SenetState } from './senet-engine';

const VITORIA = 1_000_000;
/** a chance de cada número: 1 a 4 lados claros, e 5 = nenhum claro */
const CHANCE: Record<number, number> = { 1: chanceDeMarcados(VARETAS, 1), 2: chanceDeMarcados(VARETAS, 2), 3: chanceDeMarcados(VARETAS, 3), 4: chanceDeMarcados(VARETAS, 4), 5: chanceDeMarcados(VARETAS, 0) };

export const NIVEIS_SENET: Record<NivelLinu, { ruido: number; prof: 1 | 2 }> = {
  facil: { ruido: 10, prof: 1 },
  medio: { ruido: 0, prof: 1 },
  dificil: { ruido: 0, prof: 2 },
};

export function avaliarSenet(s: SenetState, l: LadoS): number {
  if (s.winner !== null) return s.winner === l ? VITORIA : -VITORIA;
  const lado = (eu: LadoS) => {
    const ele = outro(eu);
    const barra = barreiras(s, eu);
    let nota = 0;
    for (const p of s.pos[eu]) {
      nota += p === SAIU ? 40 : p;
      if (p === 28 || p === 29) nota += 4;
      if (barra.has(p)) nota += 2;
      // perigo: um peão do adversário 1 a 5 casas atrás (fora das casas protegidas)
      if (p >= 1 && p <= 30 && p !== 28 && p !== 29 && !barra.has(p)) {
        let risco = 0;
        for (const q of s.pos[ele]) {
          const d = p - q;
          if (q >= 1 && d >= 1 && d <= 5) risco += CHANCE[d]!;
        }
        nota -= Math.min(1, risco) * p * 0.5;
      }
    }
    return nota;
  };
  return lado(l) - lado(outro(l));
}

function esperado(s: SenetState, l: LadoS): number {
  if (s.winner !== null || s.turn === l) return avaliarSenet(s, l);
  let total = 0;
  for (let n = 1; n <= 5; n++) {
    const e: SenetState = { ...s, fase: 'mover', tirou: n };
    const origens = origensLegais(e, n);
    const pior = origens.length > 0 ? Math.min(...origens.map((o) => avaliarSenet(mover(e, o), l))) : avaliarSenet(s, l);
    total += CHANCE[n]! * pior;
  }
  return total;
}

export function lanceSenet(s: SenetState, nivel: NivelLinu, semente = Math.random): number | null {
  const origens = origensLegais(s);
  if (origens.length === 0) return null;
  const eu = s.turn;
  const { ruido, prof } = NIVEIS_SENET[nivel];
  let melhor = origens[0]!;
  let notaMelhor = -Infinity;
  for (const o of origens) {
    const f = mover(s, o);
    const nota = (prof === 2 ? esperado(f, eu) : avaliarSenet(f, eu)) + (ruido > 0 ? semente() * ruido : 0);
    if (nota > notaMelhor) {
      notaMelhor = nota;
      melhor = o;
    }
  }
  return melhor;
}
