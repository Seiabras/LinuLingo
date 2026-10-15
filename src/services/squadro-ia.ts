/**
 * O Linu no Squadro. Busca negamax com poda alfa-beta; a nota de uma posição é a corrida: quantos
 * lances, no mínimo, cada um ainda precisa para trazer as 4 peças mais adiantadas de volta (o
 * adversário menos eu). Saltar uma peça adversária aparece na nota, porque ela volta e passa a
 * precisar de mais lances. Fácil: olha só o próprio lance, com ruído. Médio: 4 meios-lances.
 * Difícil: aprofunda o quanto der em 700 ms.
 */
import type { NivelLinu } from './jogos-prefs';
import { PARA_VENCER, lancesLegais, lancesQueFaltam, mover, outro, type JogadorS, type SquadroState } from './squadro-engine';

const VITORIA = 1_000_000;

export const NIVEIS_SQUADRO: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 4, ms: 0 },
  medio: { prof: 4, ruido: 0.5, ms: 0 },
  dificil: { prof: 12, ruido: 0, ms: 700 },
};

class TempoEsgotado extends Error {}

/** Lances que faltam para as 4 peças mais adiantadas de `j` voltarem. */
function falta(s: SquadroState, j: JogadorS): number {
  const v = s.pecas[j].map((p, t) => lancesQueFaltam(j, t, p)).sort((a, b) => a - b);
  return v.slice(0, PARA_VENCER).reduce((a, b) => a + b, 0);
}

/** Nota para quem tem a vez em `s`. Ter a vez vale meio lance. */
export function avaliarSquadro(s: SquadroState): number {
  const j = s.turn;
  return falta(s, outro(j)) - falta(s, j) + 0.5;
}

function negamax(s: SquadroState, prof: number, alfa: number, beta: number, b: { ate: number; nos: number }): number {
  if (++b.nos % 1024 === 0 && b.ate > 0 && Date.now() > b.ate) throw new TempoEsgotado();
  if (prof === 0) return avaliarSquadro(s);
  let melhor = -Infinity;
  for (const t of lancesLegais(s)) {
    const f = mover(s, t);
    const nota = f.winner !== null ? VITORIA + prof : -negamax(f, prof - 1, -beta, -alfa, b);
    if (nota > melhor) melhor = nota;
    if (nota > alfa) alfa = nota;
    if (alfa >= beta) break;
  }
  return melhor;
}

/** O trilho da peça que o Linu move, ou null se a partida acabou. */
export function lanceSquadro(s: SquadroState, nivel: NivelLinu, semente = Math.random): number | null {
  const lances = lancesLegais(s);
  if (lances.length === 0) return null;
  const filhos = lances.map((t) => mover(s, t));
  const ganha = filhos.findIndex((f) => f.winner === s.turn);
  if (ganha >= 0) return lances[ganha]!;
  const { prof, ruido, ms } = NIVEIS_SQUADRO[nivel];
  const b = { ate: 0, nos: 0 };
  const notas = (d: number) => filhos.map((f) => -negamax(f, d - 1, -Infinity, Infinity, b));
  let melhores = notas(1);
  if (ms > 0) {
    b.ate = Date.now() + ms;
    for (let d = 2; d <= prof; d++) {
      try {
        melhores = notas(d);
      } catch (e) {
        if (e instanceof TempoEsgotado) break;
        throw e;
      }
      if (melhores.every((n) => Math.abs(n) >= VITORIA)) break;
    }
  } else if (prof > 1) melhores = notas(prof);
  let iMelhor = 0;
  let notaMelhor = -Infinity;
  melhores.forEach((n, k) => {
    const v = ruido > 0 && Math.abs(n) < VITORIA ? n + semente() * ruido : n;
    if (v > notaMelhor) {
      notaMelhor = v;
      iMelhor = k;
    }
  });
  return lances[iMelhor]!;
}
