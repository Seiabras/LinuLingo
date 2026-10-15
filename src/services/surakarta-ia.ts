/**
 * O Linu no Surakarta: minimax com poda alfa-beta e limite de tempo. A nota é a diferença de peças,
 * com um pouco de peso para as capturas que cada lado tem à mão (peças “sob mira”).
 */
import type { NivelLinu } from './jogos-prefs';
import { capturasDe, contar, jogar, lancesLegais, type JogadorS, type LanceS, type SurakartaState } from './surakarta-engine';

const VITORIA = 100_000;
export const NIVEIS_SURAKARTA: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 18, ms: 0 },
  medio: { prof: 2, ruido: 2, ms: 300 },
  dificil: { prof: 4, ruido: 0, ms: 900 },
};
class TempoEsgotado extends Error {}

function ameacas(s: SurakartaState, j: JogadorS): number {
  let n = 0;
  for (let i = 0; i < s.casas.length; i++) if (s.casas[i] === j) n += capturasDe(s.casas, i).length;
  return n;
}

function nota(s: SurakartaState, eu: JogadorS): number {
  const o: JogadorS = eu === 0 ? 1 : 0;
  if (s.vencedor === 'empate') return 0;
  if (s.vencedor !== null) return s.vencedor === eu ? VITORIA : -VITORIA;
  return 20 * (contar(s.casas, eu) - contar(s.casas, o)) + 2 * (ameacas(s, eu) - ameacas(s, o)) * (s.vez === eu ? 1.5 : 1);
}

function busca(s: SurakartaState, prof: number, alfa: number, beta: number, eu: JogadorS, ate: number, cont: { n: number }): number {
  if (++cont.n % 128 === 0 && ate && Date.now() > ate) throw new TempoEsgotado();
  if (s.vencedor !== null || prof <= 0) return nota(s, eu);
  const lances = lancesLegais(s).sort((a, b) => (b.corrida ? 1 : 0) - (a.corrida ? 1 : 0));
  const max = s.vez === eu;
  let melhor = max ? -Infinity : Infinity;
  for (const l of lances) {
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

export function lanceSurakarta(s: SurakartaState, nivel: NivelLinu, rng: () => number = Math.random): LanceS | null {
  const lances = lancesLegais(s);
  if (!lances.length) return null;
  const cfg = NIVEIS_SURAKARTA[nivel];
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
