/**
 * O Linu no Qomet: negamax com poda alfa-beta, lances que vencem primeiro e limite de tempo. A nota
 * de uma posição olha os quadrados possíveis: um quadrado em que um jogador já tem 3 estrelas e a
 * quarta casa está vazia vale muito; com 2, vale menos. Estrelas do outro num canto estragam o
 * quadrado. Arquivo à parte do `jogos-ia.ts`, com os mesmos três níveis.
 */
import type { NivelLinu } from './jogos-prefs';
import { QUADRADOS, jogar, lancesLegais, naMao, type JogadorQ, type LanceQ, type QometState } from './qomet-engine';

const VITORIA = 1_000_000;

export const NIVEIS_QOMET: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 40, ms: 0 },
  medio: { prof: 2, ruido: 4, ms: 300 },
  dificil: { prof: 4, ruido: 0, ms: 800 },
};

class TempoEsgotado extends Error {}

/** Nota da posição para `j`. */
export function avaliarQomet(s: QometState, j: JogadorQ): number {
  const o: JogadorQ = j === 0 ? 1 : 0;
  let nota = 0;
  for (const q of QUADRADOS) {
    let meus = 0;
    let deles = 0;
    for (const i of q) {
      if (s.casas[i] === j) meus++;
      else if (s.casas[i] === o) deles++;
    }
    if (deles === 0) nota += meus === 3 ? 60 : meus === 2 ? 8 : meus;
    if (meus === 0) nota -= deles === 3 ? 70 : deles === 2 ? 8 : deles;
  }
  // estrelas na mão dão flexibilidade
  return nota + 2 * (naMao(s, j) - naMao(s, o));
}

function negamax(s: QometState, prof: number, alfa: number, beta: number, ate: number, cont: { n: number }): number {
  if (++cont.n % 512 === 0 && ate > 0 && Date.now() > ate) throw new TempoEsgotado();
  if (prof === 0) return avaliarQomet(s, s.vez);
  const lances = lancesLegais(s);
  if (lances.length === 0) return avaliarQomet(s, s.vez);
  let melhor = -Infinity;
  for (const l of lances) {
    const f = jogar(s, l);
    // o lance acaba a partida: se quem jogou venceu, ótimo; se deu o quadrado ao outro, péssimo
    const nota = f.vencedor !== null ? (f.vencedor === s.vez ? VITORIA + prof : -VITORIA - prof) : -negamax(f, prof - 1, -beta, -alfa, ate, cont);
    if (nota > melhor) melhor = nota;
    if (nota > alfa) alfa = nota;
    if (alfa >= beta) break;
  }
  return melhor;
}

/** O lance do Linu (quem tem a vez em `s`), ou null se não há lance. */
export function lanceQomet(s: QometState, nivel: NivelLinu, rng: () => number = Math.random): LanceQ | null {
  const lances = lancesLegais(s);
  if (lances.length === 0) return null;
  const cfg = NIVEIS_QOMET[nivel];
  // vence na hora, se der
  for (const l of lances) if (jogar(s, l).vencedor === s.vez) return l;
  const ate = cfg.ms > 0 ? Date.now() + cfg.ms : 0;
  let escolhido = lances[0]!;
  // aprofunda aos poucos; se o tempo acaba, fica com a melhor da profundidade anterior
  for (let prof = 1; prof <= cfg.prof; prof++) {
    try {
      let melhor = -Infinity;
      let doNivel = escolhido;
      const cont = { n: 0 };
      for (const l of lances) {
        const f = jogar(s, l);
        const base = f.vencedor !== null ? (f.vencedor === s.vez ? VITORIA : -VITORIA) : -negamax(f, prof - 1, -Infinity, Infinity, ate, cont);
        const nota = base + (cfg.ruido ? rng() * cfg.ruido : 0);
        if (nota > melhor) {
          melhor = nota;
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
