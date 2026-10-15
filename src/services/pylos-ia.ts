/**
 * O Linu no Pylos. O Pylos é uma guerra de reservas: quem guarda mais bolas põe a última. A nota de
 * uma posição é a diferença de bolas na reserva, mais um pouco pelos quadrados quase prontos (3 bolas
 * de uma cor e a quarta casa livre). Negamax com poda alfa-beta e tabela de posições; no médio e no
 * difícil, aprofundamento iterativo com limite de tempo (no fim da partida ele vê até o final).
 * Arquivo à parte do `jogos-ia.ts`, com os mesmos três níveis.
 */
import type { NivelLinu } from './jogos-prefs';
import { QUADRADOS, aplicarLance, lancesLegais, livre, type LancePylos, type PylosState } from './pylos-engine';

const VITORIA = 1_000_000;

export const NIVEIS_PYLOS: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 60, ms: 0 },
  medio: { prof: 3, ruido: 0, ms: 300 },
  dificil: { prof: 30, ruido: 0, ms: 700 },
};

class TempoEsgotado extends Error {}

/** Nota para quem tem a vez em `s`. */
export function avaliarPylos(s: PylosState): number {
  const eu = s.turn;
  let nota = (s.reserva[eu] - s.reserva[eu === 0 ? 1 : 0]) * 100;
  if (s.regra === 'criancas') return nota;
  for (const q of QUADRADOS) {
    let meus = 0;
    let dele = 0;
    let vazia = -1;
    for (const p of q) {
      const v = s.board[p];
      if (v === null) vazia = p;
      else if (v === eu) meus++;
      else dele++;
    }
    if (vazia >= 0 && meus + dele === 3 && livre(s.board, vazia)) {
      // quem tem a vez fecha o seu quadrado primeiro; o do outro, ele ainda pode tapar
      if (meus === 3) nota += 40;
      if (dele === 3) nota -= 15;
    }
  }
  return nota;
}

interface Busca {
  ate: number;
  nos: number;
  tabela: Map<string, number>;
}

const chave = (s: PylosState) => s.board.map((v) => (v === null ? '.' : v)).join('') + s.turn + s.reserva.join(',');

function negamax(s: PylosState, prof: number, alfa: number, beta: number, b: Busca): number {
  if (++b.nos % 512 === 0 && b.ate > 0 && Date.now() > b.ate) throw new TempoEsgotado();
  if (s.winner !== null) return s.winner === s.turn ? VITORIA + prof : -(VITORIA + prof);
  if (prof === 0) return avaliarPylos(s);
  const k = chave(s) + '|' + prof;
  const visto = b.tabela.get(k);
  if (visto !== undefined) return visto;
  const alfa0 = alfa;
  let melhor = -Infinity;
  for (const l of lancesLegais(s)) {
    const f = aplicarLance(s, l);
    const nota = -negamax(f, prof - 1, -beta, -alfa, b);
    if (nota > melhor) melhor = nota;
    if (nota > alfa) alfa = nota;
    if (alfa >= beta) break;
  }
  if (melhor === -Infinity) melhor = avaliarPylos(s);
  if (melhor > alfa0 && melhor < beta) b.tabela.set(k, melhor);
  return melhor;
}

export function lancePylos(s: PylosState, nivel: NivelLinu, semente = Math.random): LancePylos | null {
  const lances = lancesLegais(s);
  if (lances.length === 0) return null;
  const { prof, ruido, ms } = NIVEIS_PYLOS[nivel];
  const b: Busca = { ate: 0, nos: 0, tabela: new Map() };
  const notas = (d: number) => lances.map((l) => -negamax(aplicarLance(s, l), d - 1, -Infinity, Infinity, b));
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
  }
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
