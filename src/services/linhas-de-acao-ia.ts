/**
 * O Linu nas Linhas de ação: minimax com poda alfa-beta e limite de tempo. A nota mede o quanto as
 * peças estão juntas: a soma das distâncias até o centro do grupo (menor é melhor), comparada com a
 * do outro, mais um prêmio pelas peças com vizinhas.
 */
import type { NivelLinu } from './jogos-prefs';
import { jogar, lancesLegais, rc, type JogadorL, type LanceL, type LOAState } from './linhas-de-acao-engine';

const VITORIA = 100_000;
export const NIVEIS_LOA: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 6, ms: 0 },
  medio: { prof: 2, ruido: 0.5, ms: 300 },
  dificil: { prof: 3, ruido: 0, ms: 900 },
};
class TempoEsgotado extends Error {}

function espalhamento(casas: (JogadorL | null)[], j: JogadorL): number {
  const ps = casas.flatMap((v, i) => (v === j ? [rc(i)] : []));
  if (ps.length <= 1) return 0;
  const mr = ps.reduce((a, p) => a + p[0], 0) / ps.length;
  const mc = ps.reduce((a, p) => a + p[1], 0) / ps.length;
  const soma = ps.reduce((a, [r, c]) => a + Math.max(Math.abs(r - mr), Math.abs(c - mc)), 0);
  // o mínimo possível cresce com o número de peças: compara com ele
  return soma - (ps.length - 1) * 0.9;
}

function nota(s: LOAState, eu: JogadorL): number {
  if (s.vencedor === 'empate') return 0;
  if (s.vencedor !== null) return s.vencedor === eu ? VITORIA : -VITORIA;
  const o: JogadorL = eu === 0 ? 1 : 0;
  return 3 * (espalhamento(s.casas, o) - espalhamento(s.casas, eu));
}

function busca(s: LOAState, prof: number, alfa: number, beta: number, eu: JogadorL, ate: number, cont: { n: number }): number {
  if (++cont.n % 128 === 0 && ate && Date.now() > ate) throw new TempoEsgotado();
  if (s.vencedor !== null || prof <= 0) return nota(s, eu) + (s.vencedor === eu ? prof : 0);
  const max = s.vez === eu;
  let melhor = max ? -Infinity : Infinity;
  for (const l of lancesLegais(s)) {
    const v = busca(jogar(s, l), prof - 1, alfa, beta, eu, ate, cont);
    if (max) {
      melhor = Math.max(melhor, v);
      alfa = Math.max(alfa, v);
    } else {
      melhor = Math.min(melhor, v);
      beta = Math.min(beta, v);
    }
    if (alfa >= beta) break;
  }
  return melhor;
}

export function lanceLOA(s: LOAState, nivel: NivelLinu, rng: () => number = Math.random): LanceL | null {
  const lances = lancesLegais(s);
  if (!lances.length) return null;
  const cfg = NIVEIS_LOA[nivel];
  const eu = s.vez;
  const ate = cfg.ms ? Date.now() + cfg.ms : 0;
  let escolhido = lances[0]!;
  for (let prof = 1; prof <= cfg.prof; prof++) {
    try {
      let melhor = -Infinity;
      let doNivel = escolhido;
      const cont = { n: 0 };
      for (const l of lances) {
        const v = busca(jogar(s, l), prof - 1, -Infinity, Infinity, eu, ate, cont) + (cfg.ruido ? rng() * cfg.ruido : 0);
        if (v > melhor) {
          melhor = v;
          doNivel = l;
        }
      }
      escolhido = doNivel;
    } catch (e) {
      if (e instanceof TempoEsgotado) break;
      throw e;
    }
  }
  return escolhido;
}
