/**
 * O Linu no hnefatafl. Usa a busca negamax com poda alfa-beta comum dos jogos (`escolherLance` em
 * `jogos-ia.ts`). O motor deixa a vez com quem venceu; aqui, depois de um lance que acaba a partida,
 * a vez passa para o outro, como a busca espera. A nota olha o lado dos defensores: peças (cada
 * defensor vale mais, porque são a metade do número), as fugas do rei (lances que já o levam a um
 * canto, ou à borda), a distância dele até o canto mais perto e os atacantes colados nele.
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { BOARD_SIZE, CORNERS, legalMovesFrom, makeMove, type HnefataflState, type Pos, type Side } from './hnefatafl-engine';

const VITORIA = 1_000_000;

export type LanceTafl = { de: Pos; para: Pos };

export const NIVEIS_HNEFATAFL: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 80 },
  medio: { prof: 2, ruido: 0 },
  dificil: { prof: 3, ruido: 0 },
};

const outro = (s: Side): Side => (s === 'a' ? 'd' : 'a');
const ehCanto = (p: Pos) => CORNERS.some((c) => c.row === p.row && c.col === p.col);
const naBorda = (p: Pos) => p.row === 0 || p.col === 0 || p.row === BOARD_SIZE - 1 || p.col === BOARD_SIZE - 1;

export function lancesTafl(s: HnefataflState): LanceTafl[] {
  if (s.result.status !== 'playing') return [];
  const out: LanceTafl[] = [];
  for (let row = 0; row < BOARD_SIZE; row++)
    for (let col = 0; col < BOARD_SIZE; col++) {
      const p = s.board[row]![col];
      if (!p || p.side !== s.turn) continue;
      const de = { row, col };
      // os lances do rei primeiro: a poda corta mais cedo quando a fuga é o melhor
      const lances = legalMovesFrom(s, de).map((para) => ({ de, para }));
      if (p.king) out.unshift(...lances);
      else out.push(...lances);
    }
  return out;
}

export function jogarTafl(s: HnefataflState, l: LanceTafl): HnefataflState {
  const n = makeMove(s, l.de, l.para);
  // o motor deixa a vez com quem venceu; para a busca, a vez é do outro (que perdeu)
  return n !== s && n.result.status !== 'playing' ? { ...n, turn: outro(s.turn) } : n;
}

/** Nota da posição para os defensores. */
function notaDefensores(s: HnefataflState): number {
  let atacantes = 0;
  let defensores = 0;
  let rei: Pos | null = null;
  for (let row = 0; row < BOARD_SIZE; row++)
    for (let col = 0; col < BOARD_SIZE; col++) {
      const p = s.board[row]![col];
      if (!p) continue;
      if (p.king) rei = { row, col };
      else if (p.side === 'a') atacantes++;
      else defensores++;
    }
  if (!rei) return -VITORIA / 2;
  let nota = defensores * 150 - atacantes * 100;
  const doRei = legalMovesFrom({ ...s, turn: 'd', result: { status: 'playing' } }, rei);
  const fugas = doRei.filter(ehCanto).length;
  const bordas = doRei.filter(naBorda).length;
  nota += fugas * 400 + bordas * 30 + doRei.length * 3;
  const dist = Math.min(...CORNERS.map((c) => Math.abs(c.row - rei!.row) + Math.abs(c.col - rei!.col)));
  nota -= dist * 10;
  for (const [dr, dc] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] as const) {
    const r = rei.row + dr;
    const c = rei.col + dc;
    if (r >= 0 && c >= 0 && r < BOARD_SIZE && c < BOARD_SIZE && s.board[r]![c]?.side === 'a') nota -= 60;
  }
  return nota;
}

export const BUSCA_HNEFATAFL: JogoBusca<HnefataflState, LanceTafl> = {
  lances: lancesTafl,
  aplicar: jogarTafl,
  avaliar: (s) => (s.turn === 'd' ? notaDefensores(s) : -notaDefensores(s)),
  fim: (s) => (s.result.status === 'playing' ? null : s.result.lado === s.turn ? VITORIA : -VITORIA),
};

export function lanceHnefatafl(s: HnefataflState, nivel: NivelLinu, semente = Math.random): LanceTafl | null {
  const { prof, ruido } = NIVEIS_HNEFATAFL[nivel];
  return escolherLance(s, prof, BUSCA_HNEFATAFL, ruido, semente);
}
