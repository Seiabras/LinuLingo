/**
 * O Linu nos jogos de caçador e presas (jogo da onça e bagh-chal), de qualquer um dos lados. Negamax
 * com poda alfa-beta e tabela de posições; no médio e no difícil, aprofundamento iterativo com limite
 * de tempo. A nota, do ponto de vista do caçador: as capturas feitas (o que mais conta), os saltos
 * que ele já tem à mão e quantos passos livres os caçadores têm (um caçador sem saída está perto de
 * ser preso). Para as presas, a mesma nota com o sinal trocado.
 */
import type { NivelLinu } from './jogos-prefs';
import { CONFIGS, aplicarLance, grafo, lancesLegais, type CacaState, type LanceCaca } from './caca-engine';

const VITORIA = 1_000_000;

export const NIVEIS_CACA: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 80, ms: 0 },
  medio: { prof: 3, ruido: 0, ms: 300 },
  dificil: { prof: 12, ruido: 0, ms: 700 },
};

class TempoEsgotado extends Error {}

/** Nota do ponto de vista do caçador. */
export function notaDoCacador(s: CacaState): number {
  const g = grafo(CONFIGS[s.cfg]);
  let livres = 0;
  let saltos = 0;
  let presos = 0;
  s.board.forEach((v, i) => {
    if (v !== 'h') return;
    let meus = 0;
    for (const n of g.vizinhos[i]!) if (s.board[n] === null) meus++;
    for (const { meio, fim } of g.saltos[i]!)
      if (s.board[meio] === 'p' && s.board[fim] === null) {
        saltos++;
        meus++;
      }
    livres += meus;
    if (meus === 0) presos++;
  });
  return s.capturas * 120 + saltos * 25 + livres * 4 - presos * 30;
}

const nota = (s: CacaState) => (s.turn === 'h' ? notaDoCacador(s) : -notaDoCacador(s));

interface Busca {
  ate: number;
  nos: number;
  tabela: Map<string, number>;
}

const chave = (s: CacaState) => s.board.map((v) => v ?? '.').join('') + s.turn + s.presasNaMao + ',' + s.capturas;

function negamax(s: CacaState, prof: number, alfa: number, beta: number, b: Busca): number {
  if (++b.nos % 512 === 0 && b.ate > 0 && Date.now() > b.ate) throw new TempoEsgotado();
  if (s.winner !== null) return s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA + prof : -(VITORIA + prof);
  if (prof === 0) return nota(s);
  const k = chave(s) + '|' + prof;
  const visto = b.tabela.get(k);
  if (visto !== undefined) return visto;
  const alfa0 = alfa;
  let melhor = -Infinity;
  const lances = lancesLegais(s);
  // capturas primeiro: a poda corta mais
  lances.sort((x, y) => y.filter((p) => p.captura !== undefined).length - x.filter((p) => p.captura !== undefined).length);
  for (const l of lances) {
    const f = aplicarLance(s, l);
    const v = f.turn === s.turn && f.winner === null ? negamax(f, prof - 1, alfa, beta, b) : -negamax(f, prof - 1, -beta, -alfa, b);
    if (v > melhor) melhor = v;
    if (v > alfa) alfa = v;
    if (alfa >= beta) break;
  }
  if (melhor === -Infinity) melhor = nota(s);
  if (melhor > alfa0 && melhor < beta) b.tabela.set(k, melhor);
  return melhor;
}

/** O lance do Linu (os passos, em ordem), ou null se ele não tem lance. */
export function lanceCaca(s: CacaState, nivel: NivelLinu, semente = Math.random): LanceCaca | null {
  const lances = lancesLegais(s);
  if (lances.length === 0) return null;
  const { prof, ruido, ms } = NIVEIS_CACA[nivel];
  const b: Busca = { ate: 0, nos: 0, tabela: new Map() };
  const notas = (d: number) =>
    lances.map((l) => {
      const f = aplicarLance(s, l);
      if (f.winner !== null) return f.winner === s.turn ? VITORIA + d : f.winner === 'empate' ? 0 : -(VITORIA + d);
      return f.turn === s.turn ? negamax(f, d - 1, -Infinity, Infinity, b) : -negamax(f, d - 1, -Infinity, Infinity, b);
    });
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
