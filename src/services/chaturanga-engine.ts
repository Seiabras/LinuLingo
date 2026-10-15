/**
 * Motor do chaturanga, o antepassado indiano do xadrez. As regras NÃO chegaram inteiras até nós: são
 * uma reconstrução moderna, a partir das regras do xatranje persa (seu sucessor), de autores árabes
 * como al-Adli (c. 840) e al-Biruni (c. 1030), e da “A History of Chess” de H. J. R. Murray (1913).
 * Aqui, como no artigo “Chaturanga” da Wikipédia em inglês (consultado em 15/10/2026):
 *   - tabuleiro 8×8 (o ashtapada, sem casas de duas cores); as brancas começam;
 *   - raja (rei): uma casa em qualquer direção, sem roque. Os rajas não ficam frente a frente: o branco
 *     começa em e1, o preto em d8;
 *   - mantri (conselheiro): uma casa na diagonal, como o fers do xatranje;
 *   - ratha (carro): quantas casas quiser, reto, como a torre;
 *   - ashva (cavalo): como o cavalo do xadrez, pulando;
 *   - padati (soldado): uma casa para a frente (nunca duas), captura na diagonal para a frente, e vira
 *     mantri ao chegar na última fileira (o artigo diz que isso é um pouco discutido);
 *   - gaja (elefante): o movimento mais incerto. Há três reconstruções, e o app deixa escolher:
 *       'alfil'  — duas casas na diagonal, pulando a do meio (o alfil do xatranje);
 *       'biruni' — uma casa para a frente ou uma em qualquer diagonal (como o descreve al-Biruni);
 *       'adli'   — duas casas reto, pulando a do meio (a que se atribui a al-Adli);
 *   - vence quem der xeque-mate. Segundo al-Adli: quem fica afogado (sem lance, sem estar em xeque)
 *     VENCE; e quem deixa o rei do outro sozinho (“rei nu”) vence, a não ser que o outro possa deixar o
 *     dele sozinho no lance seguinte, e aí é empate.
 *   - Simplificações (ditas na ficha): a mesma posição pela terceira vez é empate, e 200 lances sem
 *     final também.
 *
 * Coordenadas: linha 0 é a 8ª fileira (as pretas, em cima) e linha 7 a 1ª (as brancas, embaixo).
 */

export type CorC = 'w' | 'b';
/** k raja, m mantri, g gaja, n ashva, r ratha, p padati */
export type TipoC = 'k' | 'm' | 'g' | 'n' | 'r' | 'p';
export type Elefante = 'alfil' | 'biruni' | 'adli';
export interface PecaC {
  cor: CorC;
  tipo: TipoC;
}
export interface LanceC {
  de: number;
  para: number;
  capturada?: TipoC;
  promove?: boolean;
}
export type FimC = 'mate' | 'afogado' | 'nu' | 'empate-nu' | 'repeticao' | 'limite';
export interface ChaturangaState {
  board: (PecaC | null)[];
  turn: CorC;
  winner: CorC | 'empate' | null;
  fim: FimC | null;
  emXeque: boolean;
  ultimo: LanceC | null;
  elefante: Elefante;
  lances: number;
  repeticoes: Record<string, number>;
}

export const LIMITE_LANCES_C = 200;
export const ix = (r: number, c: number) => r * 8 + c;
export const lx = (i: number) => Math.floor(i / 8);
export const cx = (i: number) => i % 8;
const dentro = (r: number, c: number) => r >= 0 && r < 8 && c >= 0 && c < 8;
export const outraC = (c: CorC): CorC => (c === 'w' ? 'b' : 'w');
const frente = (c: CorC) => (c === 'w' ? -1 : 1);
const ultimaFileira = (c: CorC) => (c === 'w' ? 0 : 7);

export const NOMES_C: Record<TipoC, string> = { k: 'raja (rei)', m: 'mantri (conselheiro)', g: 'gaja (elefante)', n: 'ashva (cavalo)', r: 'ratha (carro)', p: 'padati (soldado)' };
export const VALOR_C: Record<TipoC, number> = { k: 0, m: 150, g: 140, n: 300, r: 500, p: 100 };
export const NOMES_ELEFANTE: Record<Elefante, string> = {
  alfil: 'duas casas na diagonal, pulando (o alfil)',
  biruni: 'uma para a frente ou uma na diagonal (al-Biruni)',
  adli: 'duas casas reto, pulando (al-Adli)',
};

const chave = (board: (PecaC | null)[], turn: CorC) => board.map((p) => (p ? (p.cor === 'w' ? p.tipo.toUpperCase() : p.tipo) : '.')).join('') + turn;

export function createInitialState(elefante: Elefante = 'alfil'): ChaturangaState {
  const board: (PecaC | null)[] = Array(64).fill(null);
  // brancas: R N G M K G N R (raja em e1); pretas: r n g k m g n r (raja em d8)
  const brancas: TipoC[] = ['r', 'n', 'g', 'm', 'k', 'g', 'n', 'r'];
  const pretas: TipoC[] = ['r', 'n', 'g', 'k', 'm', 'g', 'n', 'r'];
  brancas.forEach((tipo, c) => (board[ix(7, c)] = { cor: 'w', tipo }));
  pretas.forEach((tipo, c) => (board[ix(0, c)] = { cor: 'b', tipo }));
  for (let c = 0; c < 8; c++) {
    board[ix(6, c)] = { cor: 'w', tipo: 'p' };
    board[ix(1, c)] = { cor: 'b', tipo: 'p' };
  }
  return { board, turn: 'w', winner: null, fim: null, emXeque: false, ultimo: null, elefante, lances: 0, repeticoes: { [chave(board, 'w')]: 1 } };
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
const SALTOS: [number, number][] = [
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
  [-1, -2],
  [1, -2],
  [-1, 2],
  [1, 2],
];

/** Para onde o gaja da cor `cor` em (r, c) vai, conforme a reconstrução (as casas, sem olhar quem está lá). */
function passosGaja(r: number, c: number, cor: CorC, e: Elefante): [number, number][] {
  if (e === 'alfil') return DIAG.map(([dr, dc]) => [r + 2 * dr, c + 2 * dc]);
  if (e === 'adli') return ORT.map(([dr, dc]) => [r + 2 * dr, c + 2 * dc]);
  return [...DIAG.map(([dr, dc]) => [r + dr, c + dc] as [number, number]), [r + frente(cor), c]];
}

/** Os destinos da peça em `i`, sem olhar se o próprio raja fica em xeque. */
export function destinos(board: (PecaC | null)[], i: number, e: Elefante): number[] {
  const p = board[i];
  if (!p) return [];
  const r = lx(i);
  const c = cx(i);
  const out: number[] = [];
  const pode = (rr: number, cc: number) => dentro(rr, cc) && board[ix(rr, cc)]?.cor !== p.cor;
  const f = frente(p.cor);
  switch (p.tipo) {
    case 'k':
      for (const [dr, dc] of [...ORT, ...DIAG]) if (pode(r + dr, c + dc)) out.push(ix(r + dr, c + dc));
      break;
    case 'm':
      for (const [dr, dc] of DIAG) if (pode(r + dr, c + dc)) out.push(ix(r + dr, c + dc));
      break;
    case 'g':
      for (const [rr, cc] of passosGaja(r, c, p.cor, e)) if (pode(rr, cc)) out.push(ix(rr, cc));
      break;
    case 'n':
      for (const [dr, dc] of SALTOS) if (pode(r + dr, c + dc)) out.push(ix(r + dr, c + dc));
      break;
    case 'r':
      for (const [dr, dc] of ORT) {
        let rr = r + dr;
        let cc = c + dc;
        while (dentro(rr, cc)) {
          const q = board[ix(rr, cc)];
          if (q === null) out.push(ix(rr, cc));
          else {
            if (q.cor !== p.cor) out.push(ix(rr, cc));
            break;
          }
          rr += dr;
          cc += dc;
        }
      }
      break;
    case 'p':
      if (dentro(r + f, c) && board[ix(r + f, c)] === null) out.push(ix(r + f, c));
      for (const dc of [-1, 1]) {
        const q = dentro(r + f, c + dc) ? board[ix(r + f, c + dc)] : null;
        if (q && q.cor !== p.cor) out.push(ix(r + f, c + dc));
      }
      break;
  }
  return out;
}

/** Se o raja da cor está atacado (olhando a partir dele, para fora). */
export function emXeque(board: (PecaC | null)[], cor: CorC, e: Elefante): boolean {
  const k = board.findIndex((p) => p?.cor === cor && p.tipo === 'k');
  if (k < 0) return true;
  const kr = lx(k);
  const kc = cx(k);
  const inimiga = (r: number, c: number, tipo: TipoC) => {
    if (!dentro(r, c)) return false;
    const p = board[ix(r, c)];
    return !!p && p.cor !== cor && p.tipo === tipo;
  };
  for (const [dr, dc] of ORT) {
    let r = kr + dr;
    let c = kc + dc;
    while (dentro(r, c)) {
      const p = board[ix(r, c)];
      if (p) {
        if (p.cor !== cor && p.tipo === 'r') return true;
        break;
      }
      r += dr;
      c += dc;
    }
  }
  for (const [dr, dc] of SALTOS) if (inimiga(kr + dr, kc + dc, 'n')) return true;
  for (const [dr, dc] of [...ORT, ...DIAG]) if (inimiga(kr + dr, kc + dc, 'k')) return true;
  for (const [dr, dc] of DIAG) if (inimiga(kr + dr, kc + dc, 'm')) return true;
  const fi = frente(outraC(cor)); // o sentido em que as peças do adversário andam
  // o padati inimigo captura na diagonal para a frente dele
  for (const dc of [-1, 1]) if (inimiga(kr - fi, kc + dc, 'p')) return true;
  // o gaja: as casas de onde um gaja inimigo chegaria ao raja
  if (e === 'alfil') {
    for (const [dr, dc] of DIAG) if (inimiga(kr + 2 * dr, kc + 2 * dc, 'g')) return true;
  } else if (e === 'adli') {
    for (const [dr, dc] of ORT) if (inimiga(kr + 2 * dr, kc + 2 * dc, 'g')) return true;
  } else {
    for (const [dr, dc] of DIAG) if (inimiga(kr + dr, kc + dc, 'g')) return true;
    if (inimiga(kr - fi, kc, 'g')) return true;
  }
  return false;
}

function mover(board: (PecaC | null)[], de: number, para: number): (PecaC | null)[] {
  const b = board.slice();
  const p = b[de]!;
  b[para] = p.tipo === 'p' && lx(para) === ultimaFileira(p.cor) ? { cor: p.cor, tipo: 'm' } : p;
  b[de] = null;
  return b;
}

/** Os lances que valem para a cor. */
export function lancesDe(board: (PecaC | null)[], cor: CorC, e: Elefante): LanceC[] {
  const out: LanceC[] = [];
  for (let i = 0; i < 64; i++) {
    const p = board[i];
    if (p?.cor !== cor) continue;
    for (const para of destinos(board, i, e))
      if (!emXeque(mover(board, i, para), cor, e)) out.push({ de: i, para, capturada: board[para]?.tipo, promove: p.tipo === 'p' && lx(para) === ultimaFileira(cor) });
  }
  return out;
}

export function lancesDaPeca(s: ChaturangaState, i: number): LanceC[] {
  if (s.winner !== null || s.board[i]?.cor !== s.turn) return [];
  return lancesDe(s.board, s.turn, s.elefante).filter((l) => l.de === i);
}

export function lancesLegais(s: ChaturangaState): LanceC[] {
  return s.winner !== null ? [] : lancesDe(s.board, s.turn, s.elefante);
}

/** Só o raja sobrou para a cor (o “rei nu”). */
export const nu = (board: (PecaC | null)[], cor: CorC) => board.every((p) => !p || p.cor !== cor || p.tipo === 'k');

/** Faz o lance. Lance que não vale devolve o mesmo `s`. */
export function jogar(s: ChaturangaState, de: number, para: number): ChaturangaState {
  const l = lancesDaPeca(s, de).find((x) => x.para === para);
  return l ? aplicar(s, l) : s;
}

/** Aplica um lance que já se sabe que vale (o Linu usa direto). */
export function aplicar(s: ChaturangaState, l: LanceC): ChaturangaState {
  const e = s.elefante;
  const board = mover(s.board, l.de, l.para);
  const turn = outraC(s.turn);
  const k = chave(board, turn);
  const repeticoes = { ...s.repeticoes, [k]: (s.repeticoes[k] ?? 0) + 1 };
  const next: ChaturangaState = { ...s, board, turn, winner: null, fim: null, emXeque: emXeque(board, turn, e), ultimo: l, lances: s.lances + 1, repeticoes };
  const respostas = lancesDe(board, turn, e);
  if (respostas.length === 0) return next.emXeque ? { ...next, winner: s.turn, fim: 'mate' } : { ...next, winner: turn, fim: 'afogado' };
  // os dois rajas sozinhos: empate
  if (nu(board, turn) && nu(board, s.turn)) return { ...next, winner: 'empate', fim: 'empate-nu' };
  // o rei nu: quem deixou o raja do outro sozinho vence, a não ser que o outro possa fazer o mesmo já
  if (nu(board, turn)) {
    const devolve = respostas.some((r) => r.capturada && nu(mover(board, r.de, r.para), s.turn));
    return devolve ? { ...next, winner: 'empate', fim: 'empate-nu' } : { ...next, winner: s.turn, fim: 'nu' };
  }
  if (repeticoes[k]! >= 3) return { ...next, winner: 'empate', fim: 'repeticao' };
  if (next.lances >= LIMITE_LANCES_C) return { ...next, winner: 'empate', fim: 'limite' };
  return next;
}

/** Conta as posições a `prof` lances (para comparar com o Fairy-Stockfish, no elefante 'alfil'). */
export function perft(board: (PecaC | null)[], cor: CorC, prof: number, e: Elefante = 'alfil'): number {
  const ls = lancesDe(board, cor, e);
  if (prof === 1) return ls.length;
  let t = 0;
  for (const l of ls) t += perft(mover(board, l.de, l.para), outraC(cor), prof - 1, e);
  return t;
}
