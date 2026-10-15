/**
 * O Linu no bao. Negamax com poda alfa-beta; no médio e no difícil, aprofundamento iterativo com
 * limite de tempo (os lances do bao são longos de calcular, então ele olha poucos lances à frente). A
 * nota de uma posição é a diferença de sementes (no tabuleiro e na mão), com peso extra para as da
 * fileira da frente, que é onde se captura e onde se perde a partida.
 */
import type { NivelLinu } from './jogos-prefs';
import { jogar, lancesLegais, sementesDe, type BaoState, type LanceBao } from './bao-engine';

const VITORIA = 1_000_000;

export const NIVEIS_BAO: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 6, ms: 0 },
  medio: { prof: 2, ruido: 0, ms: 350 },
  dificil: { prof: 6, ruido: 0, ms: 800 },
};

class TempoEsgotado extends Error {}

export function avaliarBao(s: BaoState): number {
  const eu = s.turn;
  const ele = eu === 0 ? 1 : 0;
  const frente = (j: 0 | 1) => s.covas[j].slice(0, 8).reduce((a, b) => a + b, 0);
  return sementesDe(s, eu) - sementesDe(s, ele) + 0.4 * (frente(eu) - frente(ele));
}

interface Busca {
  ate: number;
  nos: number;
}

function negamax(s: BaoState, prof: number, alfa: number, beta: number, b: Busca): number {
  if (++b.nos % 64 === 0 && b.ate > 0 && Date.now() > b.ate) throw new TempoEsgotado();
  if (s.winner !== null) return s.winner === s.turn ? VITORIA + prof : -(VITORIA + prof);
  if (prof === 0) return avaliarBao(s);
  let melhor = -Infinity;
  for (const l of lancesLegais(s)) {
    const v = -negamax(jogar(s, l), prof - 1, -beta, -alfa, b);
    if (v > melhor) melhor = v;
    if (v > alfa) alfa = v;
    if (alfa >= beta) break;
  }
  return melhor === -Infinity ? avaliarBao(s) : melhor;
}

export function lanceBao(s: BaoState, nivel: NivelLinu, semente = Math.random): LanceBao | null {
  const lances = lancesLegais(s);
  if (lances.length === 0) return null;
  const { prof, ruido, ms } = NIVEIS_BAO[nivel];
  const b: Busca = { ate: 0, nos: 0 };
  const filhos = lances.map((l) => jogar(s, l));
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
