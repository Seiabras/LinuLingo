/**
 * Motor do xiangqi, o xadrez chinês. Regras do artigo “Xiangqi” da Wikipédia em inglês (consultado em
 * 11/10/2026):
 *   - tabuleiro de 9 linhas verticais por 10 horizontais; as peças ficam nos cruzamentos. No meio, o
 *     “rio” (楚河 漢界); em cada ponta, o “palácio” de 3×3 pontos, com as duas diagonais;
 *   - general (帥/將): um ponto na horizontal ou na vertical, sem sair do palácio;
 *   - conselheiro (仕/士): um ponto na diagonal, sem sair do palácio;
 *   - elefante (相/象): exatamente dois pontos na diagonal, sem pular (uma peça no meio “tapa o olho do
 *     elefante”), e não atravessa o rio;
 *   - cavalo (傌/馬): um ponto na horizontal ou na vertical e depois um na diagonal, para fora; não pula:
 *     uma peça colada a ele naquela direção “prende a perna do cavalo”;
 *   - carro (俥/車): quantos pontos quiser na horizontal ou na vertical, sem pular;
 *   - canhão (炮/砲): anda como o carro, mas só captura pulando exatamente uma peça (de qualquer cor),
 *     a “plataforma”;
 *   - soldado (兵/卒): um ponto para a frente; depois de atravessar o rio, também um para o lado;
 *   - os dois generais não podem ficar frente a frente na mesma coluna sem nenhuma peça no meio (o
 *     “general voador”): na prática, é como se estivessem em xeque;
 *   - as vermelhas começam. Vence quem dá xeque-mate ou deixa o adversário sem nenhum lance: no xiangqi,
 *     ficar sem lance (o “afogado” do xadrez) é derrota.
 *   - Repetição: as regras oficiais proíbem o xeque perpétuo e a perseguição perpétua; aqui, para
 *     simplificar, a mesma posição pela terceira vez é empate (o artigo diz que, quando ninguém viola
 *     as regras e os dois insistem em repetir, a partida pode ser declarada empatada).
 *
 * Xadrez manchu (一統棋), a variante jogável 'manchu': Wikipédia em inglês, “Manchu chess”, e a
 * página do PyChess (pychess.org/variants/manchu), consultadas em 16/10/2026. As vermelhas jogam sem
 * os cavalos, sem os canhões e sem um dos carros; o carro que sobra (a “bandeira”, “Banner” no
 * PyChess) anda como carro, como cavalo e como canhão. As pretas são as do xiangqi. As fontes não
 * dizem se a perna do cavalo da bandeira pode ser presa; aqui ela anda exatamente como as três peças,
 * com a perna presa do cavalo e a plataforma do canhão. A bandeira começa no lugar do carro de a1 (a
 * Wikipédia diz que ela também pode começar em i1).
 *
 * Coordenadas: linha 0 é a do fundo das pretas (em cima) e linha 9 a do fundo das vermelhas (embaixo);
 * colunas 0 a 8, da esquerda para a direita.
 */

export type CorX = 'r' | 'b';
/** g general, a conselheiro, e elefante, h cavalo, r carro, c canhão, s soldado; b a bandeira do xadrez manchu */
export type TipoX = 'g' | 'a' | 'e' | 'h' | 'r' | 'c' | 's' | 'b';
export interface PecaX {
  cor: CorX;
  tipo: TipoX;
}
export interface LanceX {
  de: number;
  para: number;
  capturada?: TipoX;
}
export interface XiangqiState {
  board: (PecaX | null)[];
  turn: CorX;
  winner: CorX | 'empate' | null;
  /** como terminou: xeque-mate, sem lance ou repetição */
  fim: 'mate' | 'sem-lance' | 'repeticao' | 'combinado' | null;
  emXeque: boolean;
  ultimo: LanceX | null;
  repeticoes: Record<string, number>;
}

export const LINHAS_X = 10;
export const COLUNAS_X = 9;
export const ix = (r: number, c: number) => r * COLUNAS_X + c;
export const lx = (i: number) => Math.floor(i / COLUNAS_X);
export const cx = (i: number) => i % COLUNAS_X;
const dentro = (r: number, c: number) => r >= 0 && r < LINHAS_X && c >= 0 && c < COLUNAS_X;
const outra = (c: CorX): CorX => (c === 'r' ? 'b' : 'r');
/** Se o ponto está no palácio da cor. */
const noPalacio = (cor: CorX, r: number, c: number) => c >= 3 && c <= 5 && (cor === 'b' ? r <= 2 : r >= 7);
/** Se o ponto está do lado da cor (antes do rio). */
const doMeuLado = (cor: CorX, r: number) => (cor === 'b' ? r <= 4 : r >= 5);

/** Os caracteres de cada peça, como nos tabuleiros chineses (vermelhas e pretas usam caracteres diferentes). */
export const CARACTERES: Record<CorX, Record<TipoX, string>> = {
  // a bandeira (旗) é escolha do app: as fontes chamam a peça de carro ou de “Banner”
  r: { g: '帥', a: '仕', e: '相', h: '傌', r: '俥', c: '炮', s: '兵', b: '旗' },
  b: { g: '將', a: '士', e: '象', h: '馬', r: '車', c: '砲', s: '卒', b: '旗' },
};
export const NOMES_X: Record<TipoX, string> = { g: 'general', a: 'conselheiro', e: 'elefante', h: 'cavalo', r: 'carro', c: 'canhão', s: 'soldado', b: 'bandeira' };

const chave = (board: (PecaX | null)[], turn: CorX) => board.map((p) => (p ? (p.cor === 'r' ? p.tipo.toUpperCase() : p.tipo) : '.')).join('') + turn;

/** Com `manchu`, a arrumação do xadrez manchu: as vermelhas só com a bandeira no lugar do carro de a1. */
export function createInitialState(manchu = false): XiangqiState {
  const board: (PecaX | null)[] = Array(LINHAS_X * COLUNAS_X).fill(null);
  const fundo: TipoX[] = ['r', 'h', 'e', 'a', 'g', 'a', 'e', 'h', 'r'];
  for (const [cor, f, c, s] of [
    ['b', 0, 2, 3],
    ['r', 9, 7, 6],
  ] as const) {
    fundo.forEach((tipo, col) => (board[ix(f, col)] = { cor, tipo }));
    board[ix(c, 1)] = { cor, tipo: 'c' };
    board[ix(c, 7)] = { cor, tipo: 'c' };
    for (const col of [0, 2, 4, 6, 8]) board[ix(s, col)] = { cor, tipo: 's' };
  }
  if (manchu) {
    for (const i of [ix(9, 1), ix(9, 7), ix(9, 8), ix(7, 1), ix(7, 7)]) board[i] = null;
    board[ix(9, 0)] = { cor: 'r', tipo: 'b' };
  }
  return { board, turn: 'r', winner: null, fim: null, emXeque: false, ultimo: null, repeticoes: { [chave(board, 'r')]: 1 } };
}

const ORT: [number, number][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const DIAG: [number, number][] = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

/** Os destinos da peça em `i`, sem olhar se o próprio general fica em xeque. */
function destinos(board: (PecaX | null)[], i: number): number[] {
  const p = board[i];
  if (!p) return [];
  const r = lx(i);
  const c = cx(i);
  const out: number[] = [];
  const pode = (rr: number, cc: number) => dentro(rr, cc) && board[ix(rr, cc)]?.cor !== p.cor;
  switch (p.tipo) {
    case 'b': {
      // a bandeira: carro, cavalo e canhão juntos
      const como = (tipo: TipoX) => {
        const b = board.slice();
        b[i] = { cor: p.cor, tipo };
        return destinos(b, i);
      };
      return [...new Set([...como('r'), ...como('h'), ...como('c')])];
    }
    case 'g':
      for (const [dr, dc] of ORT) if (noPalacio(p.cor, r + dr, c + dc) && pode(r + dr, c + dc)) out.push(ix(r + dr, c + dc));
      break;
    case 'a':
      for (const [dr, dc] of DIAG) if (noPalacio(p.cor, r + dr, c + dc) && pode(r + dr, c + dc)) out.push(ix(r + dr, c + dc));
      break;
    case 'e':
      for (const [dr, dc] of DIAG) {
        const rr = r + 2 * dr;
        const cc = c + 2 * dc;
        if (dentro(rr, cc) && doMeuLado(p.cor, rr) && board[ix(r + dr, c + dc)] === null && pode(rr, cc)) out.push(ix(rr, cc));
      }
      break;
    case 'h':
      for (const [dr, dc] of ORT) {
        if (!dentro(r + dr, c + dc) || board[ix(r + dr, c + dc)] !== null) continue; // perna presa
        const alvos: [number, number][] = dr !== 0 ? [[2 * dr, -1], [2 * dr, 1]] : [[-1, 2 * dc], [1, 2 * dc]];
        for (const [ar, ac] of alvos) if (pode(r + ar, c + ac)) out.push(ix(r + ar, c + ac));
      }
      break;
    case 'r':
    case 'c':
      for (const [dr, dc] of ORT) {
        let rr = r + dr;
        let cc = c + dc;
        let pulou = false;
        while (dentro(rr, cc)) {
          const q = board[ix(rr, cc)];
          if (!pulou) {
            if (q === null) out.push(ix(rr, cc));
            else {
              if (p.tipo === 'r') {
                if (q.cor !== p.cor) out.push(ix(rr, cc));
                break;
              }
              pulou = true; // o canhão achou a plataforma
            }
          } else if (q !== null) {
            if (q.cor !== p.cor) out.push(ix(rr, cc));
            break;
          }
          rr += dr;
          cc += dc;
        }
      }
      break;
    case 's': {
      const frente = p.cor === 'r' ? -1 : 1;
      if (pode(r + frente, c)) out.push(ix(r + frente, c));
      if (!doMeuLado(p.cor, r)) for (const dc of [-1, 1]) if (pode(r, c + dc)) out.push(ix(r, c + dc));
      break;
    }
  }
  return out;
}

/**
 * Se o general da cor está em xeque (ou frente a frente com o outro, o “general voador”). Olha a
 * partir do general, para fora: é bem mais rápido do que gerar os lances de todas as peças
 * adversárias (e o Linu pensa muitas vezes por lance).
 */
export function emXeque(board: (PecaX | null)[], cor: CorX): boolean {
  const g = board.findIndex((p) => p?.cor === cor && p.tipo === 'g');
  if (g < 0) return true;
  const gr = lx(g);
  const gc = cx(g);
  const inimiga = (r: number, c: number, tipo: TipoX) => {
    if (!dentro(r, c)) return false;
    const p = board[ix(r, c)];
    return !!p && p.cor !== cor && p.tipo === tipo;
  };
  // em linha: o carro (primeira peça), o canhão (segunda peça) e o general voador (primeira, na vertical)
  for (const [dr, dc] of ORT) {
    let r = gr + dr;
    let c = gc + dc;
    let vistas = 0;
    while (dentro(r, c)) {
      const p = board[ix(r, c)];
      if (p) {
        vistas++;
        if (p.cor !== cor) {
          if (vistas === 1 && (p.tipo === 'r' || p.tipo === 'b' || (p.tipo === 'g' && dc === 0))) return true;
          if (vistas === 2 && (p.tipo === 'c' || p.tipo === 'b')) return true;
        }
        if (vistas === 2) break;
      }
      r += dr;
      c += dc;
    }
  }
  // o cavalo: dois pontos numa direção e um na outra, com a perna (colada ao cavalo) livre
  for (const [dr, dc] of [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [-1, -2],
    [1, -2],
    [-1, 2],
    [1, 2],
  ] as [number, number][]) {
    if (!inimiga(gr + dr, gc + dc, 'h') && !inimiga(gr + dr, gc + dc, 'b')) continue;
    const perna = Math.abs(dr) === 2 ? ix(gr + dr / 2, gc + dc) : ix(gr + dr, gc + dc / 2);
    if (board[perna] === null) return true;
  }
  // o soldado: de frente (vindo na direção dele) ou do lado (o general fica do outro lado do rio para ele)
  const frenteInimiga = cor === 'r' ? 1 : -1;
  if (inimiga(gr - frenteInimiga, gc, 's')) return true;
  if (inimiga(gr, gc - 1, 's') || inimiga(gr, gc + 1, 's')) return true;
  return false;
}

function mover(board: (PecaX | null)[], de: number, para: number): (PecaX | null)[] {
  const b = board.slice();
  b[para] = b[de]!;
  b[de] = null;
  return b;
}

/** Os lances que valem para a peça em `i` (os que não deixam o próprio general em xeque). */
export function lancesDaPeca(s: XiangqiState, i: number): LanceX[] {
  const p = s.board[i];
  if (!p || p.cor !== s.turn || s.winner !== null) return [];
  return destinos(s.board, i)
    .filter((para) => !emXeque(mover(s.board, i, para), p.cor))
    .map((para) => ({ de: i, para, capturada: s.board[para]?.tipo }));
}

export function lancesLegais(s: XiangqiState): LanceX[] {
  const out: LanceX[] = [];
  for (let i = 0; i < s.board.length; i++) if (s.board[i]?.cor === s.turn) out.push(...lancesDaPeca(s, i));
  return out;
}

/** Faz o lance. Lance que não vale devolve o mesmo `s`. */
export function jogar(s: XiangqiState, de: number, para: number): XiangqiState {
  const l = lancesDaPeca(s, de).find((x) => x.para === para);
  if (!l) return s;
  const board = mover(s.board, de, para);
  const turn = outra(s.turn);
  const k = chave(board, turn);
  const repeticoes = { ...s.repeticoes, [k]: (s.repeticoes[k] ?? 0) + 1 };
  const next: XiangqiState = { board, turn, winner: null, fim: null, emXeque: emXeque(board, turn), ultimo: l, repeticoes };
  if (lancesLegais(next).length === 0) return { ...next, winner: s.turn, fim: next.emXeque ? 'mate' : 'sem-lance' };
  if (repeticoes[k]! >= 3) return { ...next, winner: 'empate', fim: 'repeticao' };
  return next;
}

/** Os dois jogadores combinam o empate. */
export function combinarEmpateX(s: XiangqiState): XiangqiState {
  return s.winner === null ? { ...s, winner: 'empate', fim: 'combinado' } : s;
}
