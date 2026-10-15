/**
 * Motor de regras de Damas — regras brasileiras (= damas internacionais em tabuleiro 8×8, as
 * usadas pela CBD, Confederação Brasileira de Damas, e pela FMJD, Federação Mundial de Jogo de
 * Damas; fonte: regulamento da FENAE 2025 e material da Secretaria de Educação de Taubaté, ambos
 * citando essas regras). Tabuleiro 8×8, 12 peças por jogador. Peça comum captura pra frente E pra
 * trás (mas só ANDA pra frente, sem capturar). A dama "voa": anda e captura à distância na
 * diagonal, escolhendo em qual casa vazia cair depois da peça capturada. Captura é OBRIGATÓRIA, e
 * tem que ser sempre a sequência que captura o MAIOR número de peças possível ("Lei da Maioria") —
 * se há mais de uma sequência com esse mesmo número máximo, a escolha de qual fazer é de quem joga.
 * Peça que só passa pela última fileira durante uma tomada em cadeia (sem terminar o lance ali) não
 * promove — continua peça comum até o fim da sequência de capturas.
 *
 * SIMPLIFICAÇÃO DOCUMENTADA: não implementamos as regras de empate por poucos lances sem progresso
 * (ex.: o limite de lances da CBD/FMJD pra finais só com damas, pra evitar jogo infinito). O motor
 * só termina a partida quando um jogador fica sem lance legal nenhum na vez dele (perde, regra
 * padrão de damas) — não há detecção de empate por repetição ou por contagem de lances.
 */

export type PlayerId = 0 | 1;

export interface Pos {
  row: number;
  col: number;
}

export interface DamasPiece {
  player: PlayerId;
  dama: boolean;
}

export type DamasBoardGrid = (DamasPiece | null)[][];

/** Um lance completo: casa de destino final e as casas capturadas no caminho (vazio = lance simples). */
export interface DamasMoveOption {
  from: Pos;
  to: Pos;
  captured: Pos[];
}

/**
 * As regras jogáveis (variantes, pedido do dono, 15/10/2026):
 * - 'brasileira' (a de sempre): 8×8, a descrita acima;
 * - 'inglesa' (English draughts/checkers, Wikipédia em inglês “English draughts”, consultada em
 *   15/10/2026): 8×8, a peça comum anda E captura só para a frente; a dama anda e captura uma casa
 *   por vez, em qualquer diagonal; a captura é obrigatória, mas quem joga escolhe qual sequência
 *   fazer (sem lei da maioria), e a sequência escolhida vai até o fim; a peça que chega à última
 *   fileira capturando vira dama e o lance acaba ali;
 * - 'internacional' (Wikipédia em inglês “International draughts”): as mesmas regras da brasileira,
 *   num tabuleiro 10×10 com 20 peças para cada um.
 */
export type RegraDamas = 'brasileira' | 'inglesa' | 'internacional';

export interface DamasState {
  board: DamasBoardGrid;
  turn: PlayerId;
  /** a regra da partida (sem nada: a brasileira) */
  regra?: RegraDamas;
  /** Quem venceu (o outro ficou sem lance legal), ou null enquanto o jogo continua. */
  winner: PlayerId | null;
}

/** o tamanho do tabuleiro, lido da própria grade (8 ou 10) */
let SIZE = 8;
const inBounds = (p: Pos) => p.row >= 0 && p.row < SIZE && p.col >= 0 && p.col < SIZE;
const samePos = (a: Pos, b: Pos) => a.row === b.row && a.col === b.col;
const opponent = (p: PlayerId): PlayerId => (p === 0 ? 1 : 0);

/** Jogador 0 começa no topo (fileiras 0-2) e avança pra fileira 7; jogador 1 começa na base (5-7) e avança pra 0. */
const FORWARD_DIR: Record<PlayerId, number> = { 0: 1, 1: -1 };
const promotionRow = (p: PlayerId) => (p === 0 ? SIZE - 1 : 0);
const DIAGONALS: Pos[] = [{ row: -1, col: -1 }, { row: -1, col: 1 }, { row: 1, col: -1 }, { row: 1, col: 1 }];

export function createInitialState(regra: RegraDamas = 'brasileira'): DamasState {
  const n = regra === 'internacional' ? 10 : 8;
  const fileiras = regra === 'internacional' ? 4 : 3;
  const board: DamasBoardGrid = Array.from({ length: n }, () => Array<DamasPiece | null>(n).fill(null));
  for (let row = 0; row < n; row++) {
    const player: PlayerId | null = row < fileiras ? 0 : row >= n - fileiras ? 1 : null;
    if (player === null) continue;
    for (let col = 0; col < n; col++) if ((row + col) % 2 === 1) board[row][col] = { player, dama: false };
  }
  return regra === 'brasileira' ? { board, turn: 0, winner: null } : { board, turn: 0, winner: null, regra };
}

/** Prepara as funções internas para a grade e a regra deste estado. */
function usar(state: DamasState): RegraDamas {
  SIZE = state.board.length;
  return state.regra ?? 'brasileira';
}

function cloneBoard(board: DamasBoardGrid): DamasBoardGrid {
  return board.map((row) => row.slice());
}

interface SingleJump {
  landing: Pos;
  capturedSquare: Pos;
}

/** As casas em que `pos` pode CAPTURAR em 1 salto (peça comum: salto fixo de 2; dama: voa e escolhe onde cair). */
function singleJumpOptions(board: DamasBoardGrid, pos: Pos, player: PlayerId, dama: boolean, regra: RegraDamas): SingleJump[] {
  const out: SingleJump[] = [];
  const curta = regra === 'inglesa';
  for (const d of DIAGONALS) {
    // nas inglesas, a peça comum só captura para a frente
    if (curta && !dama && d.row !== FORWARD_DIR[player]) continue;
    if (!dama || curta) {
      const mid: Pos = { row: pos.row + d.row, col: pos.col + d.col };
      const landing: Pos = { row: pos.row + 2 * d.row, col: pos.col + 2 * d.col };
      if (!inBounds(landing)) continue;
      const midPiece = board[mid.row][mid.col];
      if (midPiece && midPiece.player !== player && !board[landing.row][landing.col]) {
        out.push({ landing, capturedSquare: mid });
      }
      continue;
    }
    // dama: anda vazio até achar a primeira peça na diagonal
    let cur: Pos = { row: pos.row + d.row, col: pos.col + d.col };
    while (inBounds(cur) && !board[cur.row][cur.col]) cur = { row: cur.row + d.row, col: cur.col + d.col };
    if (!inBounds(cur)) continue;
    const enemy = board[cur.row][cur.col];
    if (!enemy || enemy.player === player) continue; // peça própria bloqueia, não captura
    let land: Pos = { row: cur.row + d.row, col: cur.col + d.col };
    while (inBounds(land) && !board[land.row][land.col]) {
      out.push({ landing: { ...land }, capturedSquare: { ...cur } });
      land = { row: land.row + d.row, col: land.col + d.col };
    }
  }
  return out;
}

/** Todas as sequências MAXIMAIS de captura a partir de `pos` (recursivo: captura obrigatória continua enquanto houver salto). */
function captureSequences(board: DamasBoardGrid, pos: Pos, player: PlayerId, dama: boolean, regra: RegraDamas): { landing: Pos; captured: Pos[] }[] {
  const jumps = singleJumpOptions(board, pos, player, dama, regra);
  if (jumps.length === 0) return [];
  const results: { landing: Pos; captured: Pos[] }[] = [];
  for (const j of jumps) {
    const next = cloneBoard(board);
    next[pos.row][pos.col] = null;
    next[j.capturedSquare.row][j.capturedSquare.col] = null;
    next[j.landing.row][j.landing.col] = { player, dama };
    // nas inglesas, a peça comum que chega à última fileira capturando vira dama e o lance acaba
    const coroou = regra === 'inglesa' && !dama && j.landing.row === promotionRow(player);
    const deeper = coroou ? [] : captureSequences(next, j.landing, player, dama, regra);
    if (deeper.length === 0) {
      results.push({ landing: j.landing, captured: [j.capturedSquare] });
    } else {
      for (const d of deeper) results.push({ landing: d.landing, captured: [j.capturedSquare, ...d.captured] });
    }
  }
  return results;
}

function simpleMoves(board: DamasBoardGrid, pos: Pos, player: PlayerId, dama: boolean, regra: RegraDamas): Pos[] {
  const out: Pos[] = [];
  if (!dama) {
    const dir = FORWARD_DIR[player];
    for (const dc of [-1, 1]) {
      const to: Pos = { row: pos.row + dir, col: pos.col + dc };
      if (inBounds(to) && !board[to.row][to.col]) out.push(to);
    }
    return out;
  }
  for (const d of DIAGONALS) {
    let cur: Pos = { row: pos.row + d.row, col: pos.col + d.col };
    while (inBounds(cur) && !board[cur.row][cur.col]) {
      out.push({ ...cur });
      // a dama inglesa anda uma casa só
      if (regra === 'inglesa') break;
      cur = { row: cur.row + d.row, col: cur.col + d.col };
    }
  }
  return out;
}

/** Todos os lances legais de `player` nesta posição — já filtrados pela captura obrigatória + lei da maioria. */
export function playerLegalMoves(state: DamasState, player: PlayerId): DamasMoveOption[] {
  const regra = usar(state);
  const { board } = state;
  const captureOptions: DamasMoveOption[] = [];
  for (let row = 0; row < SIZE; row++)
    for (let col = 0; col < SIZE; col++) {
      const piece = board[row][col];
      if (!piece || piece.player !== player) continue;
      const seqs = captureSequences(board, { row, col }, player, piece.dama, regra);
      for (const s of seqs) captureOptions.push({ from: { row, col }, to: s.landing, captured: s.captured });
    }
  if (captureOptions.length > 0) {
    // nas inglesas a captura é obrigatória, mas sem a lei da maioria
    if (regra === 'inglesa') return captureOptions;
    const max = Math.max(...captureOptions.map((o) => o.captured.length));
    return captureOptions.filter((o) => o.captured.length === max); // lei da maioria
  }
  const simple: DamasMoveOption[] = [];
  for (let row = 0; row < SIZE; row++)
    for (let col = 0; col < SIZE; col++) {
      const piece = board[row][col];
      if (!piece || piece.player !== player) continue;
      for (const to of simpleMoves(board, { row, col }, player, piece.dama, regra)) simple.push({ from: { row, col }, to, captured: [] });
    }
  return simple;
}

/** Lances legais pra peça em `from` (pra destacar casas na tela). Se a captura é obrigatória e essa peça não tem a sequência de maior captura, devolve []. */
export function legalMovesFrom(state: DamasState, from: Pos): DamasMoveOption[] {
  if (state.winner !== null) return [];
  return playerLegalMoves(state, state.turn).filter((m) => samePos(m.from, from));
}

/** Move a peça de `from` pra `to` (precisa casar com um dos `legalMovesFrom`). Sem mudança se o lance não for legal. */
export function makeMove(state: DamasState, from: Pos, to: Pos): DamasState {
  if (state.winner !== null) return state;
  const options = legalMovesFrom(state, from);
  const chosen = options.find((o) => samePos(o.to, to));
  if (!chosen) return state;

  const piece = state.board[from.row][from.col]!;
  const board = cloneBoard(state.board);
  board[from.row][from.col] = null;
  for (const c of chosen.captured) board[c.row][c.col] = null;
  usar(state);
  const promotes = !piece.dama && to.row === promotionRow(piece.player);
  board[to.row][to.col] = { player: piece.player, dama: piece.dama || promotes };

  const turn = opponent(state.turn);
  const nextState: DamasState = state.regra ? { board, turn, winner: null, regra: state.regra } : { board, turn, winner: null };
  const opponentHasMoves = playerLegalMoves(nextState, turn).length > 0;
  return opponentHasMoves ? nextState : { ...nextState, winner: state.turn };
}
