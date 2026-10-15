/**
 * O Linu no kōnane. Busca negamax com poda alfa-beta; a nota de uma posição é a mobilidade (quantas
 * capturas eu tenho menos quantas o adversário tem), porque perde quem fica sem captura. No fácil
 * olha um lance só e erra às vezes; no médio, 3 lances; no difícil, aprofunda o quanto der em 700 ms.
 */
import type { NivelLinu } from './jogos-prefs';
import { jogar, lancesLegais, type KonaneState, type LanceKonane } from './konane-engine';

const VITORIA = 1_000_000;

export const NIVEIS_KONANE: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 4, ms: 0 },
  medio: { prof: 3, ruido: 0, ms: 400 },
  dificil: { prof: 12, ruido: 0, ms: 700 },
};

class TempoEsgotado extends Error {}

function avaliar(s: KonaneState): number {
  const meus = lancesLegais(s).length;
  const dele = lancesLegais({ ...s, turn: s.turn === 0 ? 1 : 0 }).length;
  return meus - dele;
}

function negamax(s: KonaneState, prof: number, alfa: number, beta: number, ate: number, cont: { n: number }): number {
  if (++cont.n % 512 === 0 && ate > 0 && Date.now() > ate) throw new TempoEsgotado();
  if (prof === 0) return avaliar(s);
  let melhor = -Infinity;
  for (const l of lancesLegais(s)) {
    const f = jogar(s, l);
    const nota = f.winner !== null ? VITORIA + prof : -negamax(f, prof - 1, -beta, -alfa, ate, cont);
    if (nota > melhor) melhor = nota;
    if (nota > alfa) alfa = nota;
    if (alfa >= beta) break;
  }
  return melhor;
}

export function lanceKonane(s: KonaneState, nivel: NivelLinu, rng: () => number = Math.random): LanceKonane | null {
  const ls = lancesLegais(s);
  if (!ls.length) return null;
  if (ls.length === 1) return ls[0]!;
  const cfg = NIVEIS_KONANE[nivel];
  const ate = cfg.ms > 0 ? Date.now() + cfg.ms : 0;
  let escolhido: LanceKonane = ls[Math.floor(rng() * ls.length)]!;
  for (let prof = 1; prof <= cfg.prof; prof++) {
    try {
      let melhor = -Infinity;
      let melhores: LanceKonane[] = [];
      for (const l of ls) {
        const f = jogar(s, l);
        const nota = (f.winner !== null ? VITORIA + prof : -negamax(f, prof - 1, -Infinity, Infinity, ate, { n: 0 })) + (cfg.ruido ? rng() * cfg.ruido : 0);
        if (nota > melhor + 1e-9) {
          melhor = nota;
          melhores = [l];
        } else if (Math.abs(nota - melhor) <= 1e-9) melhores.push(l);
      }
      escolhido = melhores[Math.floor(rng() * melhores.length)]!;
      if (melhor >= VITORIA) break;
    } catch (e) {
      if (e instanceof TempoEsgotado) break;
      throw e;
    }
  }
  return escolhido;
}
