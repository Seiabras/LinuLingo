/**
 * Motor do janggi, o xadrez coreano. Regras do artigo “Janggi” da Wikipédia em inglês e “장기” da
 * Wikipédia em coreano (consultados em 15/10/2026), e a definição do janggi no Fairy-Stockfish
 * (src/variant.cpp), que serviu para o teste de perft:
 *   - tabuleiro de 9 linhas verticais por 10 horizontais, sem rio; as peças ficam nos cruzamentos. Em
 *     cada ponta, o palácio de 3×3 pontos, com as duas diagonais;
 *   - general (漢/楚): começa no centro do palácio; anda um ponto pelas linhas do palácio (também nas
 *     diagonais), sem sair dele. Os guardas (士) andam igual;
 *   - cavalo (馬): um ponto reto e um na diagonal, para fora, sem pular (a perna presa, como no xiangqi);
 *   - elefante (象): um ponto reto e dois na diagonal, para fora, sem pular; não há rio para ele;
 *   - carro (車): quantos pontos quiser, reto, e também pelas diagonais dos palácios;
 *   - canhão (包): só anda pulando exatamente uma peça (de qualquer cor), e captura do mesmo jeito; não
 *     pula outro canhão nem captura canhão. Nas diagonais do palácio, pula a peça do centro;
 *   - soldado (兵/卒): um ponto para a frente ou para o lado; no palácio do adversário, também na
 *     diagonal para a frente, pelas linhas. Não é promovido;
 *   - o azul (楚, Cho) começa. Passar a vez é permitido (fora do xeque); quem não tem lance passa;
 *   - bikjang (빅장): os dois generais na mesma coluna, sem nada no meio. Quem tem a vez ou desfaz o
 *     bikjang (lance que o mantém não vale) ou passa, e aí a partida acaba (como no Fairy-Stockfish). Aqui,
 *     como nos torneios por pontos, ela é decidida pelos pontos das peças:
 *     carro 13, canhão 7, cavalo 5, elefante 3, guarda 3, soldado 2, e o vermelho (Han), que joga
 *     depois, ganha 1,5 de “덤” (deom).
 *   - Simplificações (ditas nas regras da ficha): os dois passarem seguidos, a mesma posição pela
 *     terceira vez ou 200 lances sem mate também acabam a partida pelos pontos.
 *
 * Coordenadas: linha 0 é a do fundo do vermelho (Han, em cima) e linha 9 a do fundo do azul (Cho,
 * embaixo); colunas 0 a 8, da esquerda para a direita.
 */

export type CorJ = 'cho' | 'han';
export type TipoJ = 'k' | 'a' | 'e' | 'h' | 'r' | 'c' | 's';
export interface PecaJ {
  cor: CorJ;
  tipo: TipoJ;
}
/** Um lance; `de === -1` é passar a vez. */
export interface LanceJ {
  de: number;
  para: number;
  capturada?: TipoJ;
}
/**
 * A arrumação dos cavalos (마) e elefantes (상) dos dois lados, lida da esquerda para a direita de
 * quem joga: 마상상마 (elefantes por dentro), 상마마상 (por fora), 마상마상 e 상마상마. A quinta,
 * 'central' (차가 가운데, a do carro no meio), é a que sobrou nos jogos informais e na Coreia do Norte
 * (Wikipédia em inglês, “Janggi”, e em coreano, “장기”, que a chama de 기동차장기: “os elefantes nas
 * duas pontas e os carros começando ao lado dos guardas”): 상 마 차 사 · 사 차 마 상.
 */
export type ArrumacaoJ = 'mssm' | 'smms' | 'msms' | 'smsm' | 'central';
export type FimJ = 'mate' | 'bikjang' | 'passes' | 'repeticao' | 'limite';

export interface JanggiState {
  board: (PecaJ | null)[];
  turn: CorJ;
  winner: CorJ | null;
  fim: FimJ | null;
  emXeque: boolean;
  /** os generais estão frente a frente (bikjang) depois do último lance */
  bikjang: boolean;
  ultimo: LanceJ | null;
  /** quantos lances (cada passe conta) já foram feitos */
  lances: number;
  /** se o último lance foi passar a vez */
  passou: boolean;
  repeticoes: Record<string, number>;
  arrumacao: Record<CorJ, ArrumacaoJ>;
}

export const LINHAS_J = 10;
export const COLUNAS_J = 9;
export const LIMITE_LANCES = 200;
export const ix = (r: number, c: number) => r * COLUNAS_J + c;
export const lx = (i: number) => Math.floor(i / COLUNAS_J);
export const cx = (i: number) => i % COLUNAS_J;
const dentro = (r: number, c: number) => r >= 0 && r < LINHAS_J && c >= 0 && c < COLUNAS_J;
export const outraJ = (c: CorJ): CorJ => (c === 'cho' ? 'han' : 'cho');

/** Os caracteres das peças: vermelho (Han) e azul (Cho) só diferem no general e no soldado. */
export const CARACTERES_J: Record<CorJ, Record<TipoJ, string>> = {
  han: { k: '漢', a: '士', e: '象', h: '馬', r: '車', c: '包', s: '兵' },
  cho: { k: '楚', a: '士', e: '象', h: '馬', r: '車', c: '包', s: '卒' },
};
export const NOMES_J: Record<TipoJ, string> = { k: 'general', a: 'guarda', e: 'elefante', h: 'cavalo', r: 'carro', c: 'canhão', s: 'soldado' };
/** Os pontos de cada peça, para decidir a partida que acaba sem mate (Wikipédia, “Janggi”). */
export const PONTOS_J: Record<TipoJ, number> = { k: 0, a: 3, e: 3, h: 5, r: 13, c: 7, s: 2 };
/** O 덤 (deom): o vermelho, que joga depois, ganha 1,5 ponto (o meio ponto evita empate). */
export const DEOM = 1.5;
export const NOMES_ARRUMACAO: Record<ArrumacaoJ, string> = { mssm: '마상상마', smms: '상마마상', msms: '마상마상', smsm: '상마상마', central: '상마차 (carro no meio)' };

/** Se o ponto está num palácio (qualquer um). */
const noPalacio = (r: number, c: number) => c >= 3 && c <= 5 && (r <= 2 || r >= 7);
/** Se o ponto está no palácio da cor. */
const noPalacioDe = (cor: CorJ, r: number, c: number) => c >= 3 && c <= 5 && (cor === 'han' ? r <= 2 : r >= 7);
const centro = (r: number, c: number) => c === 4 && (r === 1 || r === 8);
/** Se dois pontos vizinhos na diagonal estão ligados por uma linha do palácio (um deles é o centro). */
const diagLigada = (r1: number, c1: number, r2: number, c2: number) =>
  noPalacio(r1, c1) && noPalacio(r2, c2) && (r1 <= 2) === (r2 <= 2) && (centro(r1, c1) || centro(r2, c2));

const chave = (board: (PecaJ | null)[], turn: CorJ) => board.map((p) => (p ? (p.cor === 'cho' ? p.tipo.toUpperCase() : p.tipo) : '.')).join('') + turn;

/** As colunas 1, 2, 6 e 7 da última linha de cada lado, conforme a arrumação. */
function pecasDaArrumacao(a: ArrumacaoJ, cor: CorJ): TipoJ[] {
  const t = [...a].map((x) => (x === 'm' ? 'h' : 'e')) as TipoJ[];
  // o vermelho olha o tabuleiro do outro lado: a esquerda dele é a direita da tela
  return cor === 'cho' ? t : t.reverse();
}

function montar(arrumacao: Record<CorJ, ArrumacaoJ>): (PecaJ | null)[] {
  const board: (PecaJ | null)[] = Array(LINHAS_J * COLUNAS_J).fill(null);
  for (const [cor, fundo, gen, can, sold] of [
    ['han', 0, 1, 2, 3],
    ['cho', 9, 8, 7, 6],
  ] as const) {
    const [m1, m2, m3, m4] = arrumacao[cor] === 'central' ? [] : pecasDaArrumacao(arrumacao[cor], cor);
    // a quinta arrumação: os elefantes nas pontas e os carros ao lado dos guardas
    const linha: (TipoJ | null)[] = arrumacao[cor] === 'central' ? ['e', 'h', 'r', 'a', null, 'a', 'r', 'h', 'e'] : ['r', m1!, m2!, 'a', null, 'a', m3!, m4!, 'r'];
    linha.forEach((tipo, col) => {
      if (tipo) board[ix(fundo, col)] = { cor, tipo };
    });
    board[ix(gen, 4)] = { cor, tipo: 'k' };
    board[ix(can, 1)] = { cor, tipo: 'c' };
    board[ix(can, 7)] = { cor, tipo: 'c' };
    for (const col of [0, 2, 4, 6, 8]) board[ix(sold, col)] = { cor, tipo: 's' };
  }
  return board;
}

export function createInitialState(arrumacao: Record<CorJ, ArrumacaoJ> = { cho: 'mssm', han: 'mssm' }): JanggiState {
  const board = montar(arrumacao);
  return { board, turn: 'cho', winner: null, fim: null, emXeque: false, bikjang: false, ultimo: null, lances: 0, passou: false, repeticoes: { [chave(board, 'cho')]: 1 }, arrumacao };
}

/** Troca a arrumação de um lado (só antes do primeiro lance). */
export function trocarArrumacao(s: JanggiState, cor: CorJ, a: ArrumacaoJ): JanggiState {
  if (s.lances > 0) return s;
  return createInitialState({ ...s.arrumacao, [cor]: a });
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
export function destinos(board: (PecaJ | null)[], i: number): number[] {
  const p = board[i];
  if (!p) return [];
  const r = lx(i);
  const c = cx(i);
  const out: number[] = [];
  const pode = (rr: number, cc: number) => dentro(rr, cc) && board[ix(rr, cc)]?.cor !== p.cor;
  switch (p.tipo) {
    case 'k':
    case 'a':
      for (const [dr, dc] of ORT) if (noPalacioDe(p.cor, r + dr, c + dc) && pode(r + dr, c + dc)) out.push(ix(r + dr, c + dc));
      for (const [dr, dc] of DIAG) if (noPalacioDe(p.cor, r + dr, c + dc) && diagLigada(r, c, r + dr, c + dc) && pode(r + dr, c + dc)) out.push(ix(r + dr, c + dc));
      break;
    case 'h':
      for (const [dr, dc] of ORT) {
        if (!dentro(r + dr, c + dc) || board[ix(r + dr, c + dc)] !== null) continue; // perna presa
        const alvos: [number, number][] = dr !== 0 ? [[2 * dr, -1], [2 * dr, 1]] : [[-1, 2 * dc], [1, 2 * dc]];
        for (const [ar, ac] of alvos) if (pode(r + ar, c + ac)) out.push(ix(r + ar, c + ac));
      }
      break;
    case 'e':
      for (const [dr, dc] of ORT) {
        const r1 = r + dr;
        const c1 = c + dc;
        if (!dentro(r1, c1) || board[ix(r1, c1)] !== null) continue;
        const diags: [number, number][] = dr !== 0 ? [[dr, -1], [dr, 1]] : [[-1, dc], [1, dc]];
        for (const [er, ec] of diags) {
          const r2 = r1 + er;
          const c2 = c1 + ec;
          if (!dentro(r2, c2) || board[ix(r2, c2)] !== null) continue;
          if (pode(r2 + er, c2 + ec)) out.push(ix(r2 + er, c2 + ec));
        }
      }
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
      // pelas diagonais do palácio
      for (const [dr, dc] of DIAG) {
        let r0 = r;
        let c0 = c;
        while (diagLigada(r0, c0, r0 + dr, c0 + dc)) {
          const q = board[ix(r0 + dr, c0 + dc)];
          if (q === null) out.push(ix(r0 + dr, c0 + dc));
          else {
            if (q.cor !== p.cor) out.push(ix(r0 + dr, c0 + dc));
            break;
          }
          r0 += dr;
          c0 += dc;
        }
      }
      break;
    case 'c':
      for (const [dr, dc] of ORT) {
        let rr = r + dr;
        let cc = c + dc;
        // a plataforma: a primeira peça no caminho, que não pode ser canhão
        while (dentro(rr, cc) && board[ix(rr, cc)] === null) {
          rr += dr;
          cc += dc;
        }
        if (!dentro(rr, cc) || board[ix(rr, cc)]!.tipo === 'c') continue;
        rr += dr;
        cc += dc;
        while (dentro(rr, cc)) {
          const q = board[ix(rr, cc)];
          if (q === null) out.push(ix(rr, cc));
          else {
            if (q.cor !== p.cor && q.tipo !== 'c') out.push(ix(rr, cc));
            break;
          }
          rr += dr;
          cc += dc;
        }
      }
      // pela diagonal do palácio: de um canto ao outro, pulando a peça do centro
      for (const [dr, dc] of DIAG) {
        if (!diagLigada(r, c, r + dr, c + dc) || !diagLigada(r + dr, c + dc, r + 2 * dr, c + 2 * dc)) continue;
        const meio = board[ix(r + dr, c + dc)];
        if (!meio || meio.tipo === 'c') continue;
        const q = board[ix(r + 2 * dr, c + 2 * dc)];
        if (q === null || (q.cor !== p.cor && q.tipo !== 'c')) out.push(ix(r + 2 * dr, c + 2 * dc));
      }
      break;
    case 's': {
      const frente = p.cor === 'cho' ? -1 : 1;
      if (pode(r + frente, c)) out.push(ix(r + frente, c));
      for (const dc of [-1, 1]) if (pode(r, c + dc)) out.push(ix(r, c + dc));
      for (const dc of [-1, 1]) if (diagLigada(r, c, r + frente, c + dc) && pode(r + frente, c + dc)) out.push(ix(r + frente, c + dc));
      break;
    }
  }
  return out;
}

/**
 * Se o general da cor está atacado. Olha a partir do general, para fora (carro e canhão em linha e nas
 * diagonais do palácio, cavalo, elefante e soldado): bem mais rápido do que gerar os lances de todas as
 * peças do adversário, e o Linu pensa muitas vezes por lance.
 */
export function emXeque(board: (PecaJ | null)[], cor: CorJ): boolean {
  const g = board.findIndex((p) => p?.cor === cor && p.tipo === 'k');
  if (g < 0) return true;
  const gr = lx(g);
  const gc = cx(g);
  const inimiga = (r: number, c: number, tipo: TipoJ) => {
    if (!dentro(r, c)) return false;
    const p = board[ix(r, c)];
    return !!p && p.cor !== cor && p.tipo === tipo;
  };
  const vazio = (r: number, c: number) => dentro(r, c) && board[ix(r, c)] === null;
  // em linha reta: o carro (a primeira peça) e o canhão (a segunda, se a primeira não é canhão)
  for (const [dr, dc] of ORT) {
    let r = gr + dr;
    let c = gc + dc;
    let plataforma: PecaJ | null = null;
    while (dentro(r, c)) {
      const p = board[ix(r, c)];
      if (p) {
        if (!plataforma) {
          if (p.cor !== cor && p.tipo === 'r') return true;
          if (p.tipo === 'c') break;
          plataforma = p;
        } else {
          if (p.cor !== cor && p.tipo === 'c') return true;
          break;
        }
      }
      r += dr;
      c += dc;
    }
  }
  // nas diagonais do palácio: o carro, o canhão (de canto a canto, pulando o centro) e o soldado
  for (const [dr, dc] of DIAG) {
    if (!diagLigada(gr, gc, gr + dr, gc + dc)) continue;
    const p1 = board[ix(gr + dr, gc + dc)];
    if (p1) {
      if (p1.cor !== cor && p1.tipo === 'r') return true;
      // o soldado entra na diagonal andando para a frente (para o general)
      if (p1.cor !== cor && p1.tipo === 's' && (p1.cor === 'cho' ? -dr : dr) === -1) return true;
      if (p1.tipo !== 'c' && diagLigada(gr + dr, gc + dc, gr + 2 * dr, gc + 2 * dc) && inimiga(gr + 2 * dr, gc + 2 * dc, 'c')) return true;
    } else if (diagLigada(gr + dr, gc + dc, gr + 2 * dr, gc + 2 * dc) && inimiga(gr + 2 * dr, gc + 2 * dc, 'r')) return true;
  }
  // o cavalo: a perna (colada ao cavalo) livre
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
    if (!inimiga(gr + dr, gc + dc, 'h')) continue;
    const perna = Math.abs(dr) === 2 ? [gr + dr / 2, gc + dc] : [gr + dr, gc + dc / 2];
    if (vazio(perna[0]!, perna[1]!)) return true;
  }
  // o elefante: anda 1 reto (o) e 2 na diagonal (d); os dois pontos do meio livres
  for (const [or, oc] of ORT) {
    const diags: [number, number][] = or !== 0 ? [[or, -1], [or, 1]] : [[-1, oc], [1, oc]];
    for (const [er, ec] of diags) {
      const r0 = gr - or - 2 * er;
      const c0 = gc - oc - 2 * ec;
      if (inimiga(r0, c0, 'e') && vazio(r0 + or, c0 + oc) && vazio(r0 + or + er, c0 + oc + ec)) return true;
    }
  }
  // o soldado: de trás (andando para a frente) ou do lado
  const frenteInimiga = cor === 'cho' ? 1 : -1; // o soldado do adversário anda nessa direção
  if (inimiga(gr - frenteInimiga, gc, 's')) return true;
  if (inimiga(gr, gc - 1, 's') || inimiga(gr, gc + 1, 's')) return true;
  return false;
}

/** Se os dois generais estão na mesma coluna, sem nada no meio (bikjang). */
export function generaisFrente(board: (PecaJ | null)[]): boolean {
  const a = board.findIndex((p) => p?.tipo === 'k' && p.cor === 'han');
  const b = board.findIndex((p) => p?.tipo === 'k' && p.cor === 'cho');
  if (a < 0 || b < 0 || cx(a) !== cx(b)) return false;
  for (let i = a + COLUNAS_J; i < b; i += COLUNAS_J) if (board[i]) return false;
  return true;
}

function mover(board: (PecaJ | null)[], de: number, para: number): (PecaJ | null)[] {
  const b = board.slice();
  b[para] = b[de]!;
  b[de] = null;
  return b;
}

/**
 * Se o lance da peça em `de` para `para` vale: não deixa o próprio general em xeque e, com os generais
 * frente a frente (bikjang), tem de desfazer o bikjang.
 */
function vale(board: (PecaJ | null)[], de: number, para: number, cor: CorJ, bikjang: boolean): boolean {
  const b = mover(board, de, para);
  return !emXeque(b, cor) && !(bikjang && generaisFrente(b));
}

/** Os lances de tabuleiro que valem para a cor (sem o passe). */
export function lancesDeTabuleiro(board: (PecaJ | null)[], cor: CorJ): LanceJ[] {
  const out: LanceJ[] = [];
  const bik = generaisFrente(board);
  for (let i = 0; i < board.length; i++) {
    if (board[i]?.cor !== cor) continue;
    for (const para of destinos(board, i)) if (vale(board, i, para, cor, bik)) out.push({ de: i, para, capturada: board[para]?.tipo });
  }
  return out;
}

/** Os lances que valem para a peça em `i`. */
export function lancesDaPeca(s: JanggiState, i: number): LanceJ[] {
  const p = s.board[i];
  if (!p || p.cor !== s.turn || s.winner !== null) return [];
  return destinos(s.board, i)
    .filter((para) => vale(s.board, i, para, p.cor, s.bikjang))
    .map((para) => ({ de: i, para, capturada: s.board[para]?.tipo }));
}

/** Pode passar a vez: fora do xeque, ou no bikjang (aí passar aceita o fim da partida). */
export function podePassar(s: JanggiState): boolean {
  return s.winner === null && (s.bikjang || !s.emXeque);
}

/** Os lances que valem, com o passe no fim (quando dá para passar). */
export function lancesLegais(s: JanggiState): LanceJ[] {
  if (s.winner !== null) return [];
  const out = lancesDeTabuleiro(s.board, s.turn);
  if (podePassar(s)) out.push({ de: -1, para: -1 });
  return out;
}

/** Os pontos de um lado: as peças no tabuleiro, mais o 덤 do vermelho. */
export function pontosJ(board: (PecaJ | null)[], cor: CorJ): number {
  let t = cor === 'han' ? DEOM : 0;
  for (const p of board) if (p?.cor === cor) t += PONTOS_J[p.tipo];
  return t;
}

/** A partida acaba sem mate: vence quem tem mais pontos (com o 덤, nunca empata). */
function acabaPorPontos(next: JanggiState, fim: FimJ): JanggiState {
  return { ...next, winner: pontosJ(next.board, 'han') > pontosJ(next.board, 'cho') ? 'han' : 'cho', fim };
}

/** Faz o lance (ou passa, com `de === -1`). Lance que não vale devolve o mesmo `s`. */
export function jogar(s: JanggiState, de: number, para: number): JanggiState {
  if (s.winner !== null) return s;
  let l: LanceJ | undefined;
  let board = s.board;
  if (de === -1) {
    if (!podePassar(s)) return s;
    l = { de: -1, para: -1 };
  } else {
    l = lancesDaPeca(s, de).find((x) => x.para === para);
    if (!l) return s;
    board = mover(s.board, de, para);
  }
  const turn = outraJ(s.turn);
  const k = chave(board, turn);
  const repeticoes = { ...s.repeticoes, [k]: (s.repeticoes[k] ?? 0) + 1 };
  const bikjang = generaisFrente(board);
  const next: JanggiState = {
    ...s,
    board,
    turn,
    winner: null,
    fim: null,
    emXeque: emXeque(board, turn),
    bikjang,
    ultimo: l,
    lances: s.lances + 1,
    passou: de === -1,
    repeticoes,
  };
  // xeque-mate: em xeque e sem nenhum lance (sem xeque, quem não tem lance só passa; no bikjang, também)
  if (next.emXeque && !bikjang && lancesDeTabuleiro(board, turn).length === 0) return { ...next, winner: s.turn, fim: 'mate' };
  // passar no bikjang aceita o fim; os dois passarem seguidos também acaba a partida
  if (de === -1 && s.bikjang) return acabaPorPontos(next, 'bikjang');
  if (de === -1 && s.passou) return acabaPorPontos(next, 'passes');
  if (repeticoes[k]! >= 3) return acabaPorPontos(next, 'repeticao');
  if (next.lances >= LIMITE_LANCES) return acabaPorPontos(next, 'limite');
  return next;
}

/**
 * Conta as posições a `prof` lances (com os passes), para comparar com o perft do Fairy-Stockfish: os
 * dois passarem seguidos, ou passar no bikjang, acaba a partida (a posição seguinte não tem lances).
 */
export function perft(board: (PecaJ | null)[], cor: CorJ, prof: number, acabou = false, passou = false): number {
  if (prof === 0) return 1;
  if (acabou) return 0;
  const bik = generaisFrente(board);
  const ls = lancesDeTabuleiro(board, cor);
  const passe = bik || !emXeque(board, cor);
  let t = 0;
  for (const l of ls) t += perft(mover(board, l.de, l.para), outraJ(cor), prof - 1);
  if (passe) t += perft(board, outraJ(cor), prof - 1, passou || bik, true);
  return t;
}
