/**
 * O Linu no Halma: busca de 1 ou 2 lances com limite de tempo. A nota é quanto falta ao outro menos
 * quanto falta a ele (a soma de linha + coluna de cada peça até o canto de destino), com um prêmio
 * por peça já no destino e uma multa pela peça que ficou para trás no acampamento. O fácil escolhe
 * com ruído; o médio olha só o próprio lance; o difícil olha também a resposta do outro.
 */
import type { NivelLinu } from './jogos-prefs';
import { ACAMPAMENTO, falta, jogar, lancesLegais, noDestino, type HalmaState, type JogadorH, type LanceH } from './halma-engine';

export const NIVEIS_HALMA: Record<NivelLinu, { prof: 1 | 2; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 12, ms: 0 },
  medio: { prof: 1, ruido: 0.5, ms: 0 },
  dificil: { prof: 2, ruido: 0, ms: 900 },
};

export function notaHalma(casas: (number | null)[], eu: JogadorH): number {
  const o: JogadorH = eu === 0 ? 1 : 0;
  const c = casas as (JogadorH | null)[];
  const atrasadas = ACAMPAMENTO[eu].filter((i) => c[i] === eu).length;
  return falta(c, o) - falta(c, eu) + 3 * (noDestino(c, eu) - noDestino(c, o)) - 2 * atrasadas;
}

export function lanceHalma(s: HalmaState, nivel: NivelLinu, rng: () => number = Math.random): LanceH | null {
  const lances = lancesLegais(s);
  if (lances.length === 0) return null;
  const cfg = NIVEIS_HALMA[nivel];
  const eu = s.vez;
  const ate = cfg.ms ? Date.now() + cfg.ms : Infinity;
  const nota1 = (l: LanceH) => {
    const f = jogar(s, l);
    if (f.vencedor === eu) return 1e9;
    return notaHalma(f.casas, eu);
  };
  // ordena pelo ganho imediato; no difícil, olha a melhor resposta do outro nos melhores lances
  const avaliados = lances.map((l) => ({ l, n: nota1(l) + (cfg.ruido ? rng() * cfg.ruido : 0) })).sort((a, b) => b.n - a.n);
  if (cfg.prof === 1) return avaliados[0]!.l;
  let melhor = avaliados[0]!;
  let melhorNota = -Infinity;
  for (const a of avaliados.slice(0, 12)) {
    if (Date.now() > ate) break;
    const f = jogar(s, a.l);
    if (f.vencedor === eu) return a.l;
    let pior = Infinity;
    for (const r of lancesLegais(f)) {
      const g = jogar(f, r);
      const n = g.vencedor !== null ? -1e9 : notaHalma(g.casas, eu);
      if (n < pior) pior = n;
    }
    if (pior > melhorNota) {
      melhorNota = pior;
      melhor = a;
    }
  }
  return melhor.l;
}
