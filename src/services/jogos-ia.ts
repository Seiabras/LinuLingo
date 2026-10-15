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
import * as Kalah from './kalah-engine';
import * as Fanorona from './fanorona-engine';
import * as Xiangqi from './xiangqi-engine';
import * as Estrela from './damas-chinesas-engine';
import type { NivelLinu } from './jogos-prefs';

const VITORIA = 1_000_000;

export interface JogoBusca<S, M> {
  lances(s: S): M[];
  aplicar(s: S, m: M): S;
  /** nota da posição para quem tem a vez em `s` (positiva = bom para ele) */
  avaliar(s: S): number;
  /** se o jogo acabou: a nota final para quem teria a vez em `s`; senão null */
  fim(s: S): number | null;
  /**
   * De quem é a vez em `s`, nos jogos em que alguém joga duas vezes seguidas (a vez extra do Kalah,
   * a sequência de capturas do fanorona): aí a busca não troca o sinal da nota entre os dois lances.
   */
  vez?(s: S): string | number;
}

/** Se depois do lance a vez continua com o mesmo jogador. */
const mesmaVez = <S, M>(j: JogoBusca<S, M>, antes: S, depois: S) => !!j.vez && j.vez(antes) === j.vez(depois);

function negamax<S, M>(s: S, prof: number, alfa: number, beta: number, j: JogoBusca<S, M>): number {
  const f = j.fim(s);
  // vitória mais cedo vale mais; derrota mais tarde dói menos
  if (f !== null) return f > 0 ? f + prof : f < 0 ? f - prof : 0;
  if (prof === 0) return j.avaliar(s);
  const lances = j.lances(s);
  if (lances.length === 0) return j.avaliar(s);
  let melhor = -Infinity;
  for (const m of lances) {
    const f = j.aplicar(s, m);
    const nota = mesmaVez(j, s, f) ? negamax(f, prof - 1, alfa, beta, j) : -negamax(f, prof - 1, -beta, -alfa, j);
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
    const f = j.aplicar(s, m);
    const nota = (mesmaVez(j, s, f) ? negamax(f, prof - 1, -Infinity, Infinity, j) : -negamax(f, prof - 1, -Infinity, Infinity, j)) + (ruido > 0 ? semente() * ruido : 0);
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

// ── Ligue 4 (Connect Four) ───────────────────────────────────────────────────────────────────────────────────
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

// ── Kalah (mancala) ─────────────────────────────────────────────────────────────────────────────
/** A vez extra (a última semente no próprio depósito) não troca de lado na busca (`vez`). */
export const BUSCA_KALAH: JogoBusca<Kalah.KalahState, number> = {
  lances: (s) => Kalah.lancesLegais(s),
  aplicar: (s, i) => Kalah.jogar(s, i),
  avaliar: (s) => {
    const eu = s.turn;
    const outro = eu === 0 ? 1 : 0;
    // o depósito vale muito; as sementes ainda do meu lado, um pouco
    const lado = (p: 0 | 1) => Kalah.casasDe(p).reduce((t, i) => t + s.covas[i]!, 0);
    return (s.covas[Kalah.DEPOSITO[eu]]! - s.covas[Kalah.DEPOSITO[outro]]!) * 10 + (lado(eu) - lado(outro));
  },
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
  vez: (s) => s.turn,
};

// ── Fanorona ────────────────────────────────────────────────────────────────────────────────────
/** No meio de uma sequência de capturas, parar também é um lance. */
export type LanceFanoronaIA = Fanorona.LanceFanorona | 'parar';
export const BUSCA_FANORONA: JogoBusca<Fanorona.FanoronaState, LanceFanoronaIA> = {
  lances: (s) => {
    const ls: LanceFanoronaIA[] = Fanorona.lancesLegais(s).sort((a, b) => b.capturadas.length - a.capturadas.length);
    return s.seq ? [...ls, 'parar'] : ls;
  },
  aplicar: (s, m) => (m === 'parar' ? Fanorona.encerrarVez(s) : Fanorona.jogar(s, m)),
  avaliar: (s) => {
    const outro = s.turn === 'w' ? 'b' : 'w';
    return (Fanorona.contar(s, s.turn) - Fanorona.contar(s, outro)) * 100;
  },
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
  vez: (s) => s.turn,
};

// ── Xiangqi ─────────────────────────────────────────────────────────────────────────────────────
/** Os valores aproximados das peças, da tabela do artigo “Xiangqi” da Wikipédia (×100). */
const VALOR_XIANGQI: Record<Xiangqi.TipoX, number> = { s: 100, a: 200, e: 200, h: 400, c: 450, r: 900, g: 0 };
export const BUSCA_XIANGQI: JogoBusca<Xiangqi.XiangqiState, Xiangqi.LanceX> = {
  // capturas primeiro: a poda corta muito mais
  lances: (s) => Xiangqi.lancesLegais(s).sort((a, b) => (b.capturada ? VALOR_XIANGQI[b.capturada] : 0) - (a.capturada ? VALOR_XIANGQI[a.capturada] : 0)),
  aplicar: (s, l) => Xiangqi.jogar(s, l.de, l.para),
  avaliar: (s) => {
    let nota = 0;
    s.board.forEach((p, i) => {
      if (!p) return;
      // o soldado vale o dobro depois de atravessar o rio
      const atravessou = p.tipo === 's' && (p.cor === 'r' ? Xiangqi.lx(i) <= 4 : Xiangqi.lx(i) >= 5);
      const v = VALOR_XIANGQI[p.tipo] * (atravessou ? 2 : 1);
      nota += p.cor === s.turn ? v : -v;
    });
    return nota;
  },
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
};

// ── Damas chinesas ──────────────────────────────────────────────────────────────────────────────
/**
 * Nas damas chinesas a dois, a nota é a corrida: a soma das distâncias das peças até o bico da ponta
 * de destino (a de quem tem a vez contra a do outro), com um peso a mais para a peça mais atrasada,
 * para nenhuma ficar para trás. Uma peça tem dezenas de destinos; para a busca caber em menos de 1 s,
 * o Linu só olha os `LARGURA_ESTRELA` lances que mais avançam (e sempre as trocas contra o bloqueio).
 */
function restoDaCorrida(s: Estrela.EstrelaState, dono: number): number {
  const dist = Estrela.DIST_BICO[Estrela.oposta(dono)]!;
  let soma = 0;
  let pior = 0;
  for (let i = 0; i < Estrela.N_CELULAS; i++)
    if (s.board[i] === dono) {
      soma += dist[i]!;
      if (dist[i]! > pior) pior = dist[i]!;
    }
  return soma * 10 + pior * 4;
}
export const LARGURA_ESTRELA = 12;
export const BUSCA_DAMAS_CHINESAS: JogoBusca<Estrela.EstrelaState, Estrela.LanceEstrela> = {
  lances: (s) => {
    const dist = Estrela.DIST_BICO[Estrela.oposta(Estrela.quemJoga(s))]!;
    const avanco = (l: Estrela.LanceEstrela) => dist[l.de]! - dist[l.para]! + (l.troca ? 100 : 0);
    return Estrela.lancesLegais(s)
      .map((l) => ({ l, a: avanco(l) }))
      .sort((x, y) => y.a - x.a)
      .slice(0, LARGURA_ESTRELA)
      .map((x) => x.l);
  },
  aplicar: (s, l) => Estrela.jogar(s, l),
  avaliar: (s) => {
    const eu = Estrela.quemJoga(s);
    let nota = 0;
    for (const j of s.jogadores) nota += j === eu ? -restoDaCorrida(s, j) : restoDaCorrida(s, j);
    return nota;
  },
  fim: (s) => (s.winner === null ? null : s.winner === Estrela.quemJoga(s) ? VITORIA : -VITORIA),
  vez: (s) => Estrela.quemJoga(s),
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
export const NIVEIS: Record<'xadrez' | 'damas' | 'conecta4' | 'reversi' | 'oware' | 'velha' | 'kalah' | 'fanorona' | 'xiangqi' | 'damas-chinesas', Record<NivelLinu, { prof: number; ruido: number }>> = {
  xadrez: { facil: { prof: 1, ruido: 120 }, medio: { prof: 2, ruido: 0 }, dificil: { prof: 3, ruido: 0 } },
  damas: { facil: { prof: 2, ruido: 60 }, medio: { prof: 4, ruido: 0 }, dificil: { prof: 6, ruido: 0 } },
  conecta4: { facil: { prof: 2, ruido: 30 }, medio: { prof: 5, ruido: 0 }, dificil: { prof: 7, ruido: 0 } },
  reversi: { facil: { prof: 1, ruido: 40 }, medio: { prof: 3, ruido: 0 }, dificil: { prof: 5, ruido: 0 } },
  oware: { facil: { prof: 2, ruido: 15 }, medio: { prof: 5, ruido: 0 }, dificil: { prof: 8, ruido: 0 } },
  velha: { facil: { prof: 1, ruido: 1 }, medio: { prof: 3, ruido: 0 }, dificil: { prof: 9, ruido: 0 } },
  kalah: { facil: { prof: 2, ruido: 30 }, medio: { prof: 4, ruido: 0 }, dificil: { prof: 6, ruido: 0 } },
  fanorona: { facil: { prof: 1, ruido: 150 }, medio: { prof: 2, ruido: 0 }, dificil: { prof: 3, ruido: 0 } },
  xiangqi: { facil: { prof: 1, ruido: 120 }, medio: { prof: 2, ruido: 0 }, dificil: { prof: 3, ruido: 0 } },
  'damas-chinesas': { facil: { prof: 1, ruido: 25 }, medio: { prof: 2, ruido: 0 }, dificil: { prof: 4, ruido: 0 } },
};
