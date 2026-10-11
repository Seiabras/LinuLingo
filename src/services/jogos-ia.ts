/**
 * O Linu como adversário nos jogos do conhecimento (pedido do dono, 11/10/2026). Uma busca
 * negamax com poda alfa-beta, igual para todos os jogos: cada jogo só diz quais são os lances, como
 * aplicar um lance e quanto vale a posição para quem tem a vez. No nível “fácil” o Linu olha pouco
 * à frente e às vezes escolhe um lance um pouco pior (um ruído pequeno na nota); no “médio” ele
 * olha mais fundo e sempre joga o melhor que achou.
 */
import * as Xadrez from './xadrez-engine';
import * as Damas from './damas-engine';
import * as Conecta4 from './conecta4-engine';
import * as Reversi from './reversi-engine';
import * as Oware from './oware-engine';
import * as Linha from './linha-engine';
import type { NivelLinu } from './jogos-prefs';

const VITORIA = 1_000_000;

export interface JogoBusca<S, M> {
  lances(s: S): M[];
  aplicar(s: S, m: M): S;
  /** nota da posição para quem tem a vez em `s` (positiva = bom para ele) */
  avaliar(s: S): number;
  /** se o jogo acabou: a nota final para quem teria a vez em `s`; senão null */
  fim(s: S): number | null;
}

function negamax<S, M>(s: S, prof: number, alfa: number, beta: number, j: JogoBusca<S, M>): number {
  const f = j.fim(s);
  // vitória mais cedo vale mais; derrota mais tarde dói menos
  if (f !== null) return f > 0 ? f + prof : f < 0 ? f - prof : 0;
  if (prof === 0) return j.avaliar(s);
  const lances = j.lances(s);
  if (lances.length === 0) return j.avaliar(s);
  let melhor = -Infinity;
  for (const m of lances) {
    const nota = -negamax(j.aplicar(s, m), prof - 1, -beta, -alfa, j);
    if (nota > melhor) melhor = nota;
    if (nota > alfa) alfa = nota;
    if (alfa >= beta) break;
  }
  return melhor;
}

/**
 * O lance que o Linu escolhe. `ruido` soma à nota de cada lance um valor sorteado entre 0 e `ruido`
 * (o sorteio usa `semente`, para o teste poder repetir a partida).
 */
export function escolherLance<S, M>(s: S, prof: number, j: JogoBusca<S, M>, ruido = 0, semente = Math.random): M | null {
  const lances = j.lances(s);
  if (lances.length === 0) return null;
  let melhor: M | null = null;
  let melhorNota = -Infinity;
  for (const m of lances) {
    const nota = -negamax(j.aplicar(s, m), prof - 1, -Infinity, Infinity, j) + (ruido > 0 ? semente() * ruido : 0);
    if (nota > melhorNota) {
      melhorNota = nota;
      melhor = m;
    }
  }
  return melhor;
}

// ── Xadrez ──────────────────────────────────────────────────────────────────────────────────────
const VALOR_XADREZ: Record<Xadrez.PieceType, number> = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 0 };
/** bônus por casa central (cavalos, bispos e peões gostam do centro) */
const CENTRO = [0, 1, 2, 3, 3, 2, 1, 0];

export const BUSCA_XADREZ: JogoBusca<Xadrez.ChessState, Xadrez.Move> = {
  lances: (s) => {
    // capturas primeiro: a poda corta muito mais
    const ls = Xadrez.legalMoves(s);
    return ls.sort((a, b) => (b.captured ? VALOR_XADREZ[b.captured] : 0) - (a.captured ? VALOR_XADREZ[a.captured] : 0));
  },
  aplicar: (s, m) => Xadrez.makeMove(s, m.from, m.to, m.promotion ?? 'q'),
  avaliar: (s) => {
    let nota = 0;
    for (let row = 0; row < 8; row++)
      for (let col = 0; col < 8; col++) {
        const p = s.board[row][col];
        if (!p) continue;
        let v = VALOR_XADREZ[p.type];
        if (p.type === 'n' || p.type === 'b') v += (CENTRO[row] + CENTRO[col]) * 4;
        if (p.type === 'p') v += (p.color === 'w' ? 6 - row : row - 1) * 6 + (CENTRO[col] >= 2 ? 6 : 0);
        nota += p.color === s.turn ? v : -v;
      }
    return nota;
  },
  fim: (s) => {
    if (s.result.status === 'checkmate') return s.result.winner === s.turn ? VITORIA : -VITORIA;
    if (s.result.status !== 'playing') return 0;
    return null;
  },
};

// ── Damas ───────────────────────────────────────────────────────────────────────────────────────
type LanceDamas = Damas.DamasMoveOption;
export const BUSCA_DAMAS: JogoBusca<Damas.DamasState, LanceDamas> = {
  lances: (s) => (s.winner !== null ? [] : Damas.playerLegalMoves(s, s.turn)),
  aplicar: (s, m) => Damas.makeMove(s, m.from, m.to),
  avaliar: (s) => {
    let nota = 0;
    s.board.forEach((linha, row) =>
      linha.forEach((p) => {
        if (!p) return;
        // a peça comum vale mais quanto mais perto de virar dama
        const avanco = p.player === 0 ? row : 7 - row;
        const v = p.dama ? 300 : 100 + avanco * 4;
        nota += p.player === s.turn ? v : -v;
      }),
    );
    return nota;
  },
  fim: (s) => (s.winner === null ? null : s.winner === s.turn ? VITORIA : -VITORIA),
};

// ── Conecta 4 ───────────────────────────────────────────────────────────────────────────────────
function notaJanela(cel: (Conecta4.Color | null)[], eu: Conecta4.Color): number {
  const minhas = cel.filter((c) => c === eu).length;
  const deles = cel.filter((c) => c !== null && c !== eu).length;
  if (minhas > 0 && deles > 0) return 0;
  if (minhas === 3) return 50;
  if (minhas === 2) return 10;
  if (deles === 3) return -60;
  if (deles === 2) return -10;
  return 0;
}

export const BUSCA_CONECTA4: JogoBusca<Conecta4.Conecta4State, number> = {
  // colunas do meio primeiro
  lances: (s) => (s.winner !== null ? [] : Conecta4.legalCols(s).sort((a, b) => Math.abs(a - 3) - Math.abs(b - 3))),
  aplicar: (s, col) => Conecta4.dropPiece(s, col),
  avaliar: (s) => {
    const b = s.board;
    const eu = s.turn;
    let nota = 0;
    for (let r = 0; r < Conecta4.ROWS; r++) if (b[r][3] === eu) nota += 6;
    for (let r = 0; r < Conecta4.ROWS; r++)
      for (let c = 0; c < Conecta4.COLS; c++) {
        if (c + 3 < Conecta4.COLS) nota += notaJanela([b[r][c], b[r][c + 1], b[r][c + 2], b[r][c + 3]], eu);
        if (r + 3 < Conecta4.ROWS) nota += notaJanela([b[r][c], b[r + 1][c], b[r + 2][c], b[r + 3][c]], eu);
        if (r + 3 < Conecta4.ROWS && c + 3 < Conecta4.COLS) nota += notaJanela([b[r][c], b[r + 1][c + 1], b[r + 2][c + 2], b[r + 3][c + 3]], eu);
        if (r - 3 >= 0 && c + 3 < Conecta4.COLS) nota += notaJanela([b[r][c], b[r - 1][c + 1], b[r - 2][c + 2], b[r - 3][c + 3]], eu);
      }
    return nota;
  },
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
};

// ── Reversi ─────────────────────────────────────────────────────────────────────────────────────
/** pesos clássicos de posição: cantos valem muito, as casas vizinhas aos cantos são perigosas */
const PESO_REVERSI = [
  [100, -20, 10, 5, 5, 10, -20, 100],
  [-20, -50, -2, -2, -2, -2, -50, -20],
  [10, -2, 1, 1, 1, 1, -2, 10],
  [5, -2, 1, 0, 0, 1, -2, 5],
  [5, -2, 1, 0, 0, 1, -2, 5],
  [10, -2, 1, 1, 1, 1, -2, 10],
  [-20, -50, -2, -2, -2, -2, -50, -20],
  [100, -20, 10, 5, 5, 10, -20, 100],
];

export const BUSCA_REVERSI: JogoBusca<Reversi.ReversiState, [number, number]> = {
  lances: (s) => (s.winner !== null ? [] : Reversi.legalMoves(s.board, s.turn)),
  aplicar: (s, [r, c]) => Reversi.makeMove(s, r, c),
  avaliar: (s) => {
    let nota = 0;
    s.board.forEach((linha, r) => linha.forEach((p, c) => p && (nota += p === s.turn ? PESO_REVERSI[r][c] : -PESO_REVERSI[r][c])));
    const outro = s.turn === 'b' ? 'w' : 'b';
    nota += (Reversi.legalMoves(s.board, s.turn).length - Reversi.legalMoves(s.board, outro).length) * 5;
    return nota;
  },
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
};

// ── Oware ───────────────────────────────────────────────────────────────────────────────────────
export const BUSCA_OWARE: JogoBusca<Oware.OwareState, number> = {
  lances: (s) => (s.winner !== null ? [] : Oware.legalMoves(s)),
  aplicar: (s, casa) => Oware.sow(s, casa),
  avaliar: (s) => (s.scores[s.turn] - s.scores[s.turn === 0 ? 1 : 0]) * 10,
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
};

// ── Jogo da velha ───────────────────────────────────────────────────────────────────────────────
/** Na velha a árvore é pequena: com a busca até o fim o Linu joga perfeito (e a partida dá empate). */
export const BUSCA_VELHA: JogoBusca<Linha.LinhaState, number> = {
  // o centro e os cantos primeiro
  lances: (s) => Linha.lancesLegais(s).sort((a, b) => (b === 4 ? 2 : b % 2 === 0 ? 1 : 0) - (a === 4 ? 2 : a % 2 === 0 ? 1 : 0)),
  aplicar: (s, i) => Linha.jogar(s, i),
  avaliar: () => 0,
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
};

// ── Gomoku ──────────────────────────────────────────────────────────────────────────────────────
/**
 * No gomoku (15×15) a busca em árvore fica pesada demais; o Linu avalia cada casa vazia perto das
 * pedras pelo que ela faria nas 4 direções: quantas pedras seguidas ela junta e se as pontas ficam
 * abertas, para ele (ataque) e para você (defesa).
 */
function forcaLinha(seguidas: number, abertas: number): number {
  if (seguidas >= 5) return 100_000;
  if (abertas === 0) return 0;
  if (seguidas === 4) return abertas === 2 ? 10_000 : 1_000;
  if (seguidas === 3) return abertas === 2 ? 1_000 : 100;
  if (seguidas === 2) return abertas === 2 ? 100 : 10;
  return abertas;
}

function notaCasa(s: Linha.LinhaState, i: number, m: Linha.Marca): number {
  const { n, board } = s;
  const r = Math.floor(i / n);
  const c = i % n;
  let total = 0;
  for (const [dr, dc] of Linha.DIRECOES) {
    let seguidas = 1;
    let abertas = 0;
    for (const sentido of [1, -1]) {
      let rr = r + dr * sentido;
      let cc = c + dc * sentido;
      while (rr >= 0 && rr < n && cc >= 0 && cc < n && board[rr * n + cc] === m) {
        seguidas++;
        rr += dr * sentido;
        cc += dc * sentido;
      }
      if (rr >= 0 && rr < n && cc >= 0 && cc < n && board[rr * n + cc] === null) abertas++;
    }
    total += forcaLinha(seguidas, abertas);
  }
  return total;
}

/** Casas vazias a até 2 de alguma pedra (ou o centro, no tabuleiro vazio). */
function candidatasGomoku(s: Linha.LinhaState): number[] {
  const { n, board } = s;
  const perto = new Set<number>();
  board.forEach((m, i) => {
    if (!m) return;
    const r = Math.floor(i / n);
    const c = i % n;
    for (let dr = -2; dr <= 2; dr++)
      for (let dc = -2; dc <= 2; dc++) {
        const rr = r + dr;
        const cc = c + dc;
        if (rr >= 0 && rr < n && cc >= 0 && cc < n && board[rr * n + cc] === null) perto.add(rr * n + cc);
      }
  });
  return perto.size > 0 ? [...perto] : [Math.floor((n * n) / 2)];
}

export function lanceGomoku(s: Linha.LinhaState, nivel: NivelLinu, semente = Math.random): number | null {
  if (s.winner !== null) return null;
  const eu = s.turn;
  const voce: Linha.Marca = eu === 'x' ? 'o' : 'x';
  const notas = candidatasGomoku(s).map((i) => {
    const ataque = notaCasa(s, i, eu);
    const defesa = notaCasa(s, i, voce);
    // no fácil o Linu defende pior e erra mais
    const nota = nivel === 'facil' ? ataque + defesa * 0.5 + semente() * 400 : ataque * 1.1 + defesa;
    return { i, nota };
  });
  notas.sort((a, b) => b.nota - a.nota);
  if (nivel !== 'dificil') return notas[0]!.i;
  // no difícil, entre as 8 melhores, evita a que deixa você com a melhor resposta
  let melhor = notas[0]!.i;
  let melhorNota = -Infinity;
  for (const { i, nota } of notas.slice(0, 8)) {
    const depois = Linha.jogar(s, i);
    if (depois.winner === eu) return i;
    const resposta = Math.max(...candidatasGomoku(depois).map((j) => notaCasa(depois, j, voce)));
    const total = nota - resposta * 0.9;
    if (total > melhorNota) {
      melhorNota = total;
      melhor = i;
    }
  }
  return melhor;
}

/** Profundidade e ruído de cada jogo em cada nível (medidos para o lance sair em menos de 1 s no celular). */
export const NIVEIS: Record<'xadrez' | 'damas' | 'conecta4' | 'reversi' | 'oware' | 'velha', Record<NivelLinu, { prof: number; ruido: number }>> = {
  xadrez: { facil: { prof: 1, ruido: 120 }, medio: { prof: 2, ruido: 0 }, dificil: { prof: 3, ruido: 0 } },
  damas: { facil: { prof: 2, ruido: 60 }, medio: { prof: 4, ruido: 0 }, dificil: { prof: 6, ruido: 0 } },
  conecta4: { facil: { prof: 2, ruido: 30 }, medio: { prof: 5, ruido: 0 }, dificil: { prof: 7, ruido: 0 } },
  reversi: { facil: { prof: 1, ruido: 40 }, medio: { prof: 3, ruido: 0 }, dificil: { prof: 5, ruido: 0 } },
  oware: { facil: { prof: 2, ruido: 15 }, medio: { prof: 5, ruido: 0 }, dificil: { prof: 8, ruido: 0 } },
  velha: { facil: { prof: 1, ruido: 1 }, medio: { prof: 3, ruido: 0 }, dificil: { prof: 9, ruido: 0 } },
};
