/**
 * O Linu no Jogo Real de Ur. Há sorte nos dados, então ele não faz uma busca comum: compara os lances
 * por uma nota (o quanto as peças andaram, as que saíram, a roseta do meio, o perigo das peças nas
 * casas de combate com uma peça do adversário logo atrás) e, no difícil, olha também a resposta do
 * adversário em cada um dos 5 resultados possíveis dos dados, pesada pela chance (expectimax raso).
 */
import type { NivelLinu } from './jogos-prefs';
import { chanceDeMarcados } from './lotes';
import { DADOS, ROSETA_DO_MEIO, ROSETAS, SAIDA, combate, mover, origensLegais, outro, type LadoUr, type UrState } from './ur-engine';

const VITORIA = 1_000_000;
/** a chance de tirar cada número com os 4 dados (0 a 4) */
const CHANCE = Array.from({ length: DADOS + 1 }, (_, k) => chanceDeMarcados(DADOS, k));

export const NIVEIS_UR: Record<NivelLinu, { ruido: number; prof: 1 | 2 }> = {
  facil: { ruido: 8, prof: 1 },
  medio: { ruido: 0, prof: 1 },
  dificil: { ruido: 0, prof: 2 },
};

/** Nota da posição para o lado `l`. */
export function avaliarUr(s: UrState, l: LadoUr): number {
  if (s.winner !== null) return s.winner === l ? VITORIA : -VITORIA;
  const lado = (eu: LadoUr) => {
    const minhas = s.pos[eu];
    const dele = s.pos[outro(eu)];
    let nota = 0;
    for (const p of minhas) {
      nota += p === SAIDA ? 20 : p;
      if (p === ROSETA_DO_MEIO) nota += 4;
      // perigo: peça na casa de combate com peças do adversário 1 a 4 casas atrás
      if (combate(p) && p !== ROSETA_DO_MEIO) {
        let risco = 0;
        for (const q of dele) {
          const d = p - q;
          if (d >= 1 && d <= 4 && (q >= 1 || p <= 8)) risco += CHANCE[d]!;
        }
        nota -= Math.min(1, risco) * p * 0.9;
      }
    }
    return nota;
  };
  return lado(l) - lado(outro(l));
}

/** O valor esperado, para `l`, de uma posição em que o adversário vai lançar. */
function esperado(s: UrState, l: LadoUr): number {
  if (s.winner !== null || s.turn === l) return avaliarUr(s, l);
  let total = 0;
  for (let n = 0; n <= DADOS; n++) {
    const e: UrState = { ...s, fase: 'mover', tirou: n };
    const origens = origensLegais(e, n);
    let pior = avaliarUr(s, l);
    if (origens.length > 0) pior = Math.min(...origens.map((o) => avaliarUr(mover(e, o), l)));
    total += CHANCE[n]! * pior;
  }
  return total;
}

/** A origem que o Linu move (0 = pôr uma peça nova), ou null sem lance. */
export function lanceUr(s: UrState, nivel: NivelLinu, semente = Math.random): number | null {
  const origens = origensLegais(s);
  if (origens.length === 0) return null;
  const eu = s.turn;
  const { ruido, prof } = NIVEIS_UR[nivel];
  let melhor = origens[0]!;
  let notaMelhor = -Infinity;
  for (const o of origens) {
    const f = mover(s, o);
    // a roseta dá mais uma jogada: aí vale a nota da posição (a jogada extra é boa por si)
    let nota = prof === 2 ? esperado(f, eu) : avaliarUr(f, eu);
    if (f.ultimo && ROSETAS.includes(f.ultimo.para)) nota += 3;
    nota += ruido > 0 ? semente() * ruido : 0;
    if (nota > notaMelhor) {
      notaMelhor = nota;
      melhor = o;
    }
  }
  return melhor;
}
