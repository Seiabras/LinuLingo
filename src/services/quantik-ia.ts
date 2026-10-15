/**
 * O Linu no Quantik. O jogo é pequeno (16 casas, 8 peças de cada lado), então a busca negamax com
 * poda alfa-beta e uma tabela de posições já vistas chega ao fim da partida a partir do meio do
 * jogo; no começo, o difícil aprofunda o quanto der em 700 ms. Lances que vencem na hora vêm
 * primeiro. A nota de uma posição sem fim à vista é a diferença de lances possíveis (quem fica sem
 * lance perde). Arquivo à parte do `jogos-ia.ts`, com os mesmos três níveis.
 */
import type { NivelLinu } from './jogos-prefs';
import { jogar, lancesLegais, type LanceK, type QuantikState } from './quantik-engine';

const VITORIA = 1_000_000;

export const NIVEIS_QUANTIK: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 6, ms: 0 },
  medio: { prof: 3, ruido: 0, ms: 350 },
  dificil: { prof: 16, ruido: 0, ms: 700 },
};

class TempoEsgotado extends Error {}

interface Busca {
  ate: number;
  nos: number;
  /** posição + profundidade → nota exata (só guardamos notas exatas, para não errar com a poda) */
  tabela: Map<string, number>;
}

const chave = (s: QuantikState) => s.board.map((v) => (v === null ? '.' : v)).join('') + s.turn;

/** Nota para quem tem a vez em `s` (que ainda não acabou). */
function avaliar(s: QuantikState): number {
  const meus = lancesLegais(s).length;
  const dele = lancesLegais({ ...s, turn: s.turn === 0 ? 1 : 0 }).length;
  return meus - dele;
}

/** Os lances em ordem: primeiro os que vencem, depois os outros. */
function ordenados(s: QuantikState): { l: LanceK; f: QuantikState }[] {
  const r = lancesLegais(s).map((l) => ({ l, f: jogar(s, l.casa, l.forma) }));
  return r.sort((a, b) => (b.f.winner !== null ? 1 : 0) - (a.f.winner !== null ? 1 : 0));
}

function negamax(s: QuantikState, prof: number, alfa: number, beta: number, b: Busca): number {
  if (++b.nos % 1024 === 0 && b.ate > 0 && Date.now() > b.ate) throw new TempoEsgotado();
  if (prof === 0) return avaliar(s);
  const k = chave(s) + prof;
  const visto = b.tabela.get(k);
  if (visto !== undefined) return visto;
  const alfa0 = alfa;
  let melhor = -Infinity;
  for (const { f } of ordenados(s)) {
    // quem joga e acaba a partida (4 formas ou adversário sem lance) venceu: vitória mais cedo vale mais
    const nota = f.winner !== null ? VITORIA + prof : -negamax(f, prof - 1, -beta, -alfa, b);
    if (nota > melhor) melhor = nota;
    if (nota > alfa) alfa = nota;
    if (alfa >= beta) break;
  }
  // só guarda a nota quando ela é exata (nem cortada por cima nem por baixo)
  if (melhor > alfa0 && melhor < beta) b.tabela.set(k, melhor);
  return melhor;
}

/** O lance do Linu, ou null se ele não tem lance (aí ele já perdeu). */
export function lanceQuantik(s: QuantikState, nivel: NivelLinu, semente = Math.random): LanceK | null {
  if (s.winner !== null) return null;
  const lances = ordenados(s);
  if (lances.length === 0) return null;
  const ganha = lances.find((x) => x.f.winner === s.turn);
  if (ganha) return ganha.l;
  const { prof, ruido, ms } = NIVEIS_QUANTIK[nivel];
  const b: Busca = { ate: 0, nos: 0, tabela: new Map() };
  const vazias = s.board.filter((v) => v === null).length;
  const notas = (d: number) => lances.map(({ f }) => (f.winner !== null ? VITORIA : -negamax(f, d - 1, -Infinity, Infinity, b)));
  let melhores: number[];
  if (ms > 0) {
    melhores = notas(1);
    b.ate = Date.now() + ms;
    for (let d = 2; d <= Math.min(prof, vazias); d++) {
      try {
        melhores = notas(d);
      } catch (e) {
        if (e instanceof TempoEsgotado) break;
        throw e;
      }
      if (melhores.every((n) => Math.abs(n) >= VITORIA)) break;
    }
  } else melhores = notas(Math.min(prof, vazias));
  let iMelhor = 0;
  let notaMelhor = -Infinity;
  melhores.forEach((n, k) => {
    const v = ruido > 0 && Math.abs(n) < VITORIA ? n + semente() * ruido : n;
    if (v > notaMelhor) {
      notaMelhor = v;
      iMelhor = k;
    }
  });
  return lances[iMelhor]!.l;
}
