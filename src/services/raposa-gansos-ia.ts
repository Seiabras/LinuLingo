/**
 * O Linu na raposa e os gansos, de qualquer lado: minimax com poda alfa-beta e limite de tempo. A
 * nota (do ponto de vista dos gansos) soma os gansos vivos, tira a liberdade da raposa e premia os
 * gansos que ficam juntos, sem buracos na frente da raposa. A sequência de saltos da raposa não
 * gasta profundidade.
 */
import type { NivelLinu } from './jogos-prefs';
import { jogar, lancesLegais, liberdadeDaRaposa, rc, type LanceRG, type Lado, type RGState } from './raposa-gansos-engine';

const VITORIA = 100_000;
export const NIVEIS_RG: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 20, ms: 0 },
  medio: { prof: 3, ruido: 2, ms: 300 },
  dificil: { prof: 6, ruido: 0, ms: 900 },
};
class TempoEsgotado extends Error {}

function notaGansos(s: RGState): number {
  if (s.vencedor === 'gansos') return VITORIA;
  if (s.vencedor === 'raposa') return -VITORIA;
  // gansos protegidos: com outro ganso (ou a borda) logo atrás na mesma linha
  let juntos = 0;
  for (const g of s.gansos) {
    const [r, c] = rc(g);
    if (s.gansos.includes((r - 1) * 7 + c) || r === 0) juntos++;
  }
  return 30 * s.gansos.length - 6 * liberdadeDaRaposa(s) + 2 * juntos;
}

function busca(s: RGState, prof: number, alfa: number, beta: number, eu: Lado, ate: number, cont: { n: number }): number {
  if (++cont.n % 256 === 0 && ate && Date.now() > ate) throw new TempoEsgotado();
  const sinal = eu === 'gansos' ? 1 : -1;
  if (s.vencedor !== null || prof <= 0) return sinal * notaGansos(s) + (s.vencedor === eu ? prof : 0);
  const maximiza = s.vez === eu;
  let melhor = maximiza ? -Infinity : Infinity;
  for (const l of lancesLegais(s)) {
    const f = jogar(s, l);
    const v = busca(f, f.seq ? prof : prof - 1, alfa, beta, eu, ate, cont);
    if (maximiza) {
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

export function lanceRG(s: RGState, nivel: NivelLinu, rng: () => number = Math.random): LanceRG | null {
  const lances = lancesLegais(s);
  if (lances.length === 0) return null;
  if (lances.length === 1) return lances[0]!;
  const cfg = NIVEIS_RG[nivel];
  const eu = s.vez;
  const ate = cfg.ms ? Date.now() + cfg.ms : 0;
  let escolhido = lances[0]!;
  for (let prof = 1; prof <= cfg.prof; prof++) {
    try {
      let melhor = -Infinity;
      let doNivel = escolhido;
      const cont = { n: 0 };
      for (const l of lances) {
        const f = jogar(s, l);
        const v = busca(f, f.seq ? prof : prof - 1, -Infinity, Infinity, eu, ate, cont) + (cfg.ruido ? rng() * cfg.ruido : 0);
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
