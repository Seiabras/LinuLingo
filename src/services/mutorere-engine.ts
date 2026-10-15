/**
 * Motor do mū tōrere, o jogo maori da estrela de 8 pontas. Puro e sem tela.
 *
 * O tabuleiro tem 9 pontos: as 8 pontas da estrela (kewai, índices 0 a 7, em volta) e o centro
 * (pūtahi, índice 8). Cada jogador tem 4 peças, juntas em 4 pontas vizinhas; o centro começa vazio.
 * Como há 9 pontos e 8 peças, sempre sobra um ponto vazio, e toda jogada leva uma peça para ele:
 * de uma ponta para a ponta vizinha, de uma ponta para o centro ou do centro para uma ponta.
 * Perde quem, na sua vez, não pode mover.
 *
 * As fontes divergem numa restrição (Cameron Browne, “Which Rules for Mu Torere?”, Digital Ludeme
 * Project, Universidade de Maastricht, compara as cinco versões publicadas):
 * - regra 'primeiras' (a “Ruleset D” de Browne, a mais comum na literatura: Armstrong 1964, Ascher
 *   1987 e 1991, Bell 1979, Straffin 1995): nos dois primeiros lances de cada jogador, só pode ir
 *   para o centro a peça que está ao lado de uma peça adversária. Equivale a “ninguém vence nas duas
 *   primeiras rodadas”;
 * - regra 'sempre' (a “Ruleset E”, de R. C. Bell e da Wikipédia em inglês): em qualquer lance, só vai
 *   para o centro a peça que está ao lado de uma peça adversária.
 * Sem nenhuma restrição, quem começa vence no primeiro lance; por isso as duas versões a têm.
 * Jogo perfeito termina empatado, em ciclo; aqui, para simplificar, a mesma posição pela terceira
 * vez dá empate.
 */

export type JogadorMT = 0 | 1;
export type RegraMT = 'primeiras' | 'sempre';
export const CENTRO = 8;

export interface MuTorereState {
  /** 9 pontos: 0–7 as pontas (kewai), 8 o centro (pūtahi) */
  board: (JogadorMT | null)[];
  turn: JogadorMT;
  regra: RegraMT;
  /** quantos lances já foram feitos (os dois jogadores somados) */
  lances: number;
  winner: JogadorMT | null;
  empate: boolean;
  /** quantas vezes cada posição (tabuleiro + vez) já apareceu */
  vistas: Record<string, number>;
  ultimo: { de: number; para: number } | null;
}

export interface LanceMT {
  de: number;
  para: number;
}

export const chaveMT = (board: (JogadorMT | null)[], turn: JogadorMT) => board.map((v) => (v === null ? '.' : v)).join('') + turn;

export function createInitialState(regra: RegraMT = 'primeiras', primeiro: JogadorMT = 0): MuTorereState {
  const board: (JogadorMT | null)[] = [0, 0, 0, 0, 1, 1, 1, 1, null];
  return { board, turn: primeiro, regra, lances: 0, winner: null, empate: false, vistas: { [chaveMT(board, primeiro)]: 1 }, ultimo: null };
}

const vizinhas = (i: number) => [(i + 7) % 8, (i + 1) % 8];

/** A peça da ponta `i` está ao lado de uma peça do adversário? */
export const aoLadoDoAdversario = (board: (JogadorMT | null)[], i: number, quem: JogadorMT) => vizinhas(i).some((v) => board[v] !== null && board[v] !== quem);

/** A restrição do centro vale neste lance? */
const restringe = (regra: RegraMT, lances: number) => regra === 'sempre' || lances < 4;

/** Os lances de quem tem a vez (sem olhar se a partida acabou). */
export function lancesDe(board: (JogadorMT | null)[], quem: JogadorMT, regra: RegraMT, lances: number): LanceMT[] {
  const vazio = board.indexOf(null);
  const r: LanceMT[] = [];
  if (vazio === CENTRO) {
    for (let i = 0; i < 8; i++) {
      if (board[i] !== quem) continue;
      if (restringe(regra, lances) && !aoLadoDoAdversario(board, i, quem)) continue;
      r.push({ de: i, para: CENTRO });
    }
  } else {
    for (const v of vizinhas(vazio)) if (board[v] === quem) r.push({ de: v, para: vazio });
    if (board[CENTRO] === quem) r.push({ de: CENTRO, para: vazio });
  }
  return r;
}

export const lancesLegais = (s: MuTorereState): LanceMT[] => (s.winner !== null || s.empate ? [] : lancesDe(s.board, s.turn, s.regra, s.lances));

/** Faz o lance; se não for legal, devolve o mesmo estado. */
export function jogar(s: MuTorereState, de: number, para: number): MuTorereState {
  if (!lancesLegais(s).some((l) => l.de === de && l.para === para)) return s;
  const board = [...s.board];
  board[para] = board[de]!;
  board[de] = null;
  const turn: JogadorMT = s.turn === 0 ? 1 : 0;
  const lances = s.lances + 1;
  const k = chaveMT(board, turn);
  const vistas = { ...s.vistas, [k]: (s.vistas[k] ?? 0) + 1 };
  const semLance = lancesDe(board, turn, s.regra, lances).length === 0;
  return {
    board,
    turn,
    regra: s.regra,
    lances,
    winner: semLance ? s.turn : null,
    empate: !semLance && vistas[k]! >= 3,
    vistas,
    ultimo: { de, para },
  };
}
