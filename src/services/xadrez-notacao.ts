import { legalMoves, type ChessState, type Move, type PieceType } from './xadrez-engine';

/**
 * Notação algébrica dos lances, com as letras das peças em português (R rei, D dama, T torre,
 * B bispo, C cavalo; o peão não tem letra): “Cf3”, “exd5”, “O-O”, “e8=D+”. Quando duas peças iguais
 * podem ir para a mesma casa, entra a coluna (ou a linha) de onde a peça saiu: “Cbd2”.
 */
export const LETRA_PECA: Record<PieceType, string> = { k: 'R', q: 'D', r: 'T', b: 'B', n: 'C', p: '' };

export const colunaLetra = (col: number) => 'abcdefgh'[col]!;
export const linhaNumero = (row: number) => String(8 - row);
const casa = (row: number, col: number) => `${colunaLetra(col)}${linhaNumero(row)}`;

/** O lance `m`, jogado na posição `antes`, levando à posição `depois`. */
export function notacao(antes: ChessState, m: Move, depois: ChessState): string {
  let s: string;
  if (m.isCastle) s = m.isCastle === 'K' ? 'O-O' : 'O-O-O';
  else if (m.piece === 'p') {
    s = m.captured ? `${colunaLetra(m.from.col)}x${casa(m.to.row, m.to.col)}` : casa(m.to.row, m.to.col);
    if (m.promotion) s += `=${LETRA_PECA[m.promotion]}`;
  } else {
    const rivais = legalMoves(antes).filter(
      (o) => o.piece === m.piece && o.to.row === m.to.row && o.to.col === m.to.col && (o.from.row !== m.from.row || o.from.col !== m.from.col),
    );
    let desamb = '';
    if (rivais.length > 0) {
      if (!rivais.some((o) => o.from.col === m.from.col)) desamb = colunaLetra(m.from.col);
      else if (!rivais.some((o) => o.from.row === m.from.row)) desamb = linhaNumero(m.from.row);
      else desamb = casa(m.from.row, m.from.col);
    }
    s = `${LETRA_PECA[m.piece]}${desamb}${m.captured ? 'x' : ''}${casa(m.to.row, m.to.col)}`;
  }
  if (depois.result.status === 'checkmate') s += '#';
  else if (depois.inCheck) s += '+';
  return s;
}
