/**
 * Motor do makruk, o xadrez tailandês. Regras do artigo “Makruk” da Wikipédia em inglês e da página
 * de regras do makruk no PyChess (pychess.org/variants/makruk), consultados em 15/10/2026, e a
 * definição do makruk no Fairy-Stockfish (src/variant.cpp: posição inicial e perft):
 *   - tabuleiro 8×8, sem casas de duas cores; as brancas começam;
 *   - khun (rei): uma casa em qualquer direção. O khun fica sempre à esquerda de quem joga (brancas em
 *     d1, pretas em e8), com o met do lado;
 *   - met (“semente”, a dama): uma casa na diagonal;
 *   - khon (“nobre”): uma casa na diagonal ou uma para a frente;
 *   - ma (cavalo): como o cavalo do xadrez, pulando;
 *   - ruea (“barco”, a torre): quantas casas quiser, reto;
 *   - bia (“búzio”, o peão): começa na 3ª fileira; anda uma casa para a frente (nunca duas) e captura
 *     na diagonal para a frente; ao chegar na 6ª fileira, vira bia ngai (“búzio virado”), que anda
 *     como o met;
 *   - xeque-mate vence; afogamento é empate;
 *   - contagem (as regras de honra): sem nenhum bia por promover no tabuleiro, quem está em desvantagem
 *     conta os próprios lances até 64 (“contagem do tabuleiro”); se um lado fica só com o khun, a
 *     contagem recomeça do número de peças no tabuleiro (com os dois khuns) mais um, e o limite depende
 *     do que o outro lado tem (2 ruea: 8; 1 ruea: 16; 2 khon: 22; 1 khon: 44; 2 ma: 32; 1 ma: 64; só
 *     met: 64; vale o menor). Passou do limite sem mate, empate.
 *   - Simplificações (ditas na ficha): a contagem começa sozinha (nas regras, quem está em desvantagem
 *     escolhe começar e pode parar), conta quem tem menos material (com material igual, quem tem a vez
 *     quando ela começa) e a mesma posição pela terceira vez é empate.
 *
 * Coordenadas: linha 0 é a 8ª fileira (as pretas, em cima) e linha 7 a 1ª (as brancas, embaixo);
 * colunas 0 a 7 = a até h.
 */

export type CorM = 'w' | 'b';
/** k khun, m met, s khon, n ma, r ruea, p bia, f bia ngai (o bia promovido) */
export type TipoM = 'k' | 'm' | 's' | 'n' | 'r' | 'p' | 'f';
export interface PecaM {
  cor: CorM;
  tipo: TipoM;
}
export interface LanceM {
  de: number;
  para: number;
  capturada?: TipoM;
  promove?: boolean;
}
export interface ContagemM {
  tipo: 'tabuleiro' | 'pecas';
  /** quem conta (o lado em desvantagem, que foge) */
  quem: CorM;
  /** o número que ele disse no último lance (antes do primeiro, o de partida menos um) */
  numero: number;
  limite: number;
}
export type FimM = 'mate' | 'afogado' | 'contagem' | 'repeticao' | 'material';
export interface MakrukState {
  board: (PecaM | null)[];
  turn: CorM;
  winner: CorM | 'empate' | null;
  fim: FimM | null;
  emXeque: boolean;
  ultimo: LanceM | null;
  contagem: ContagemM | null;
  repeticoes: Record<string, number>;
}

export const ix = (r: number, c: number) => r * 8 + c;
export const lx = (i: number) => Math.floor(i / 8);
export const cx = (i: number) => i % 8;
const dentro = (r: number, c: number) => r >= 0 && r < 8 && c >= 0 && c < 8;
export const outraM = (c: CorM): CorM => (c === 'w' ? 'b' : 'w');
const frente = (c: CorM) => (c === 'w' ? -1 : 1);
/** a linha em que o bia vira bia ngai: a 6ª fileira de quem joga */
const linhaPromocao = (c: CorM) => (c === 'w' ? 2 : 5);

export const NOMES_M: Record<TipoM, string> = { k: 'khun (rei)', m: 'met', s: 'khon', n: 'ma (cavalo)', r: 'ruea (barco)', p: 'bia', f: 'bia ngai (bia promovido)' };
/** valores aproximados, para o Linu e para saber quem está em desvantagem */
export const VALOR_M: Record<TipoM, number> = { k: 0, m: 180, f: 180, s: 250, n: 300, r: 500, p: 100 };

const chave = (board: (PecaM | null)[], turn: CorM) => board.map((p) => (p ? (p.cor === 'w' ? p.tipo.toUpperCase() : p.tipo) : '.')).join('') + turn;

export function createInitialState(): MakrukState {
  const board: (PecaM | null)[] = Array(64).fill(null);
  // brancas: R N S K M S N R (khun em d1); pretas: r n s m k s n r (khun em e8)
  const brancas: TipoM[] = ['r', 'n', 's', 'k', 'm', 's', 'n', 'r'];
  const pretas: TipoM[] = ['r', 'n', 's', 'm', 'k', 's', 'n', 'r'];
  brancas.forEach((tipo, c) => (board[ix(7, c)] = { cor: 'w', tipo }));
  pretas.forEach((tipo, c) => (board[ix(0, c)] = { cor: 'b', tipo }));
  for (let c = 0; c < 8; c++) {
    board[ix(5, c)] = { cor: 'w', tipo: 'p' };
    board[ix(2, c)] = { cor: 'b', tipo: 'p' };
  }
  return { board, turn: 'w', winner: null, fim: null, emXeque: false, ultimo: null, contagem: null, repeticoes: { [chave(board, 'w')]: 1 } };
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

/** Os destinos da peça em `i`, sem olhar se o próprio khun fica em xeque. */
export function destinos(board: (PecaM | null)[], i: number): number[] {
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
    case 'f':
      for (const [dr, dc] of DIAG) if (pode(r + dr, c + dc)) out.push(ix(r + dr, c + dc));
      break;
    case 's':
      for (const [dr, dc] of DIAG) if (pode(r + dr, c + dc)) out.push(ix(r + dr, c + dc));
      if (pode(r + f, c)) out.push(ix(r + f, c));
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

/** Se o khun da cor está atacado (olhando a partir dele, para fora). */
export function emXeque(board: (PecaM | null)[], cor: CorM): boolean {
  const k = board.findIndex((p) => p?.cor === cor && p.tipo === 'k');
  if (k < 0) return true;
  const kr = lx(k);
  const kc = cx(k);
  const inimiga = (r: number, c: number, tipos: TipoM[]) => {
    if (!dentro(r, c)) return false;
    const p = board[ix(r, c)];
    return !!p && p.cor !== cor && tipos.includes(p.tipo);
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
  for (const [dr, dc] of SALTOS) if (inimiga(kr + dr, kc + dc, ['n'])) return true;
  // vizinhas na diagonal: khun, met, bia ngai e khon (de qualquer lado); o bia só de quem vem de frente
  const fi = frente(outraM(cor)); // o sentido em que as peças do adversário andam
  for (const [dr, dc] of DIAG) {
    if (inimiga(kr + dr, kc + dc, ['k', 'm', 'f', 's'])) return true;
    // o bia inimigo em (kr+dr, kc+dc) captura em (kr, kc) se kr = kr+dr + fi
    if (dr === -fi && inimiga(kr + dr, kc + dc, ['p'])) return true;
  }
  for (const [dr, dc] of ORT) if (inimiga(kr + dr, kc + dc, ['k'])) return true;
  // o khon também anda uma casa para a frente
  if (inimiga(kr - fi, kc, ['s'])) return true;
  return false;
}

function mover(board: (PecaM | null)[], de: number, para: number): (PecaM | null)[] {
  const b = board.slice();
  const p = b[de]!;
  b[para] = p.tipo === 'p' && lx(para) === linhaPromocao(p.cor) ? { cor: p.cor, tipo: 'f' } : p;
  b[de] = null;
  return b;
}

/** Os lances que valem para a cor. */
export function lancesDe(board: (PecaM | null)[], cor: CorM): LanceM[] {
  const out: LanceM[] = [];
  for (let i = 0; i < 64; i++) {
    const p = board[i];
    if (p?.cor !== cor) continue;
    for (const para of destinos(board, i))
      if (!emXeque(mover(board, i, para), cor)) out.push({ de: i, para, capturada: board[para]?.tipo, promove: p.tipo === 'p' && lx(para) === linhaPromocao(cor) });
  }
  return out;
}

export function lancesDaPeca(s: MakrukState, i: number): LanceM[] {
  const p = s.board[i];
  if (!p || p.cor !== s.turn || s.winner !== null) return [];
  return destinos(s.board, i)
    .filter((para) => !emXeque(mover(s.board, i, para), p.cor))
    .map((para) => ({ de: i, para, capturada: s.board[para]?.tipo, promove: p.tipo === 'p' && lx(para) === linhaPromocao(p.cor) }));
}

export function lancesLegais(s: MakrukState): LanceM[] {
  return s.winner !== null ? [] : lancesDe(s.board, s.turn);
}

const material = (board: (PecaM | null)[], cor: CorM) => board.reduce((t, p) => t + (p?.cor === cor ? VALOR_M[p.tipo] : 0), 0);

/** O limite da contagem das peças, pelo que o lado mais forte ainda tem (vale o menor). */
export function limitePecas(board: (PecaM | null)[], forte: CorM): number {
  const n = (t: TipoM) => board.filter((p) => p?.cor === forte && p.tipo === t).length;
  const limites = [64];
  if (n('r') >= 2) limites.push(8);
  else if (n('r') === 1) limites.push(16);
  if (n('s') >= 2) limites.push(22);
  else if (n('s') === 1) limites.push(44);
  if (n('n') >= 2) limites.push(32);
  return Math.min(...limites);
}

/** Atualiza a contagem depois de um lance de `quemJogou`. Devolve a contagem nova (ou null). */
function contar(board: (PecaM | null)[], antes: ContagemM | null, quemJogou: CorM, proximo: CorM): ContagemM | null {
  if (board.some((p) => p?.tipo === 'p')) return null; // ainda há bia por promover: sem contagem
  const so = (c: CorM) => board.every((p) => !p || p.cor !== c || p.tipo === 'k');
  // a contagem das peças: um lado só com o khun (passa por cima da do tabuleiro, e o limite não muda mais)
  for (const fraco of ['w', 'b'] as const) {
    if (!so(fraco) || so(outraM(fraco))) continue;
    if (antes?.tipo === 'pecas' && antes.quem === fraco) return quemJogou === fraco ? { ...antes, numero: antes.numero + 1 } : antes;
    const pecas = board.filter((p) => p).length;
    return { tipo: 'pecas', quem: fraco, numero: pecas, limite: limitePecas(board, outraM(fraco)) };
  }
  // a contagem do tabuleiro: conta quem tem menos material (com material igual, quem joga em seguida)
  if (antes?.tipo === 'tabuleiro') return quemJogou === antes.quem ? { ...antes, numero: antes.numero + 1 } : antes;
  const mw = material(board, 'w');
  const mb = material(board, 'b');
  const quem: CorM = mw < mb ? 'w' : mb < mw ? 'b' : proximo;
  return { tipo: 'tabuleiro', quem, numero: 0, limite: 64 };
}

/** Faz o lance. Lance que não vale devolve o mesmo `s`. */
export function jogar(s: MakrukState, de: number, para: number): MakrukState {
  const l = lancesDaPeca(s, de).find((x) => x.para === para);
  if (!l) return s;
  return aplicar(s, l);
}

/** Aplica um lance que já se sabe que vale (o Linu usa direto). */
export function aplicar(s: MakrukState, l: LanceM): MakrukState {
  const board = mover(s.board, l.de, l.para);
  const turn = outraM(s.turn);
  const k = chave(board, turn);
  const repeticoes = { ...s.repeticoes, [k]: (s.repeticoes[k] ?? 0) + 1 };
  const contagem = contar(board, s.contagem, s.turn, turn);
  const next: MakrukState = { board, turn, winner: null, fim: null, emXeque: emXeque(board, turn), ultimo: l, contagem, repeticoes };
  if (lancesDe(board, turn).length === 0) return { ...next, winner: next.emXeque ? s.turn : 'empate', fim: next.emXeque ? 'mate' : 'afogado' };
  if (board.every((p) => !p || p.tipo === 'k')) return { ...next, winner: 'empate', fim: 'material' };
  if (contagem && contagem.numero > contagem.limite) return { ...next, winner: 'empate', fim: 'contagem' };
  if (repeticoes[k]! >= 3) return { ...next, winner: 'empate', fim: 'repeticao' };
  return next;
}

/** Conta as posições a `prof` lances, para comparar com o perft publicado do Fairy-Stockfish. */
export function perft(board: (PecaM | null)[], cor: CorM, prof: number): number {
  const ls = lancesDe(board, cor);
  if (prof === 1) return ls.length;
  let t = 0;
  for (const l of ls) t += perft(mover(board, l.de, l.para), outraM(cor), prof - 1);
  return t;
}
