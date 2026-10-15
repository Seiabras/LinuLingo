/**
 * O Linu no alquerque: busca minimax com poda alfa-beta e limite de tempo. A sequência de saltos
 * mantém a vez com o mesmo jogador, então a nota é sempre do ponto de vista de quem joga a raiz. A
 * nota de uma posição é a diferença de peças (e um pouco de mobilidade). Três níveis, como no
 * `jogos-ia.ts`.
 */
import type { NivelLinu } from './jogos-prefs';
import { contar, jogar, lancesLegais, type AlquerqueState, type JogadorA, type LanceA } from './alquerque-engine';

const VITORIA = 100_000;

export const NIVEIS_ALQUERQUE: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 25, ms: 0 },
  medio: { prof: 3, ruido: 3, ms: 300 },
  dificil: { prof: 7, ruido: 0, ms: 800 },
};

class TempoEsgotado extends Error {}

function nota(s: AlquerqueState, eu: JogadorA): number {
  if (s.vencedor === 'empate') return 0;
  if (s.vencedor !== null) return s.vencedor === eu ? VITORIA : -VITORIA;
  const o: JogadorA = eu === 0 ? 1 : 0;
  return 10 * (contar(s, eu) - contar(s, o)) + (s.vez === eu ? 1 : -1) * Math.min(lancesLegais(s).length, 10) * 0.1;
}

function busca(s: AlquerqueState, prof: number, alfa: number, beta: number, eu: JogadorA, ate: number, cont: { n: number }): number {
  if (++cont.n % 256 === 0 && ate > 0 && Date.now() > ate) throw new TempoEsgotado();
  if (s.vencedor !== null) return nota(s, eu) + (s.vencedor === eu ? prof : -prof);
  if (prof <= 0) return nota(s, eu);
  const lances = lancesLegais(s).sort((a, b) => (b.capturada !== null ? 1 : 0) - (a.capturada !== null ? 1 : 0));
  // a sequência de saltos não gasta profundidade
  const maximiza = s.vez === eu;
  let melhor = maximiza ? -Infinity : Infinity;
  for (const l of lances) {
    const f = jogar(s, l);
    const v = busca(f, f.seq !== null ? prof : prof - 1, alfa, beta, eu, ate, cont);
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

/** O lance do Linu (quem tem a vez em `s`), ou null se não há lance. */
export function lanceAlquerque(s: AlquerqueState, nivel: NivelLinu, rng: () => number = Math.random): LanceA | null {
  const lances = lancesLegais(s);
  if (lances.length === 0) return null;
  if (lances.length === 1) return lances[0]!;
  const cfg = NIVEIS_ALQUERQUE[nivel];
  const eu = s.vez;
  const ate = cfg.ms > 0 ? Date.now() + cfg.ms : 0;
  let escolhido = lances[0]!;
  for (let prof = 1; prof <= cfg.prof; prof++) {
    try {
      let melhor = -Infinity;
      let doNivel = escolhido;
      const cont = { n: 0 };
      for (const l of lances) {
        const f = jogar(s, l);
        const v = busca(f, f.seq !== null ? prof : prof - 1, -Infinity, Infinity, eu, ate, cont) + (cfg.ruido ? rng() * cfg.ruido : 0);
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
