/**
 * Motor do shogi, o xadrez japonês. Regras dos artigos “Shogi” da Wikipédia em inglês e “将棋” da
 * Wikipédia em japonês (consultados em 14/10/2026):
 *   - tabuleiro de 9×9 casas; cada jogador tem 20 peças: rei (王/玉), torre (飛), bispo (角), dois
 *     generais de ouro (金), dois de prata (銀), dois cavalos (桂), duas lanças (香) e nove peões (歩).
 *     As peças são iguais para os dois lados: o dono é quem tem a ponta da peça virada para o outro;
 *   - a zona de promoção são as três últimas fileiras. A peça que entra, anda dentro ou sai da zona
 *     pode promover (vira de costas). A promoção é obrigatória quando a peça não teria mais lance: o
 *     peão e a lança na última fileira, o cavalo nas duas últimas. O rei e o ouro não promovem;
 *   - a peça capturada vai para a “mão” de quem capturou (desvirada) e pode voltar ao tabuleiro, em
 *     qualquer casa vazia, no lugar de um lance (o “drop”). Restrições: nenhum peão, lança ou cavalo
 *     onde não teria lance; dois peões não promovidos do mesmo dono na mesma coluna é proibido (nifu);
 *     o peão largado não pode dar xeque-mate na hora (uchifuzume) — as outras peças podem;
 *   - o sente (quem começa, “pretas”) fica embaixo e joga primeiro. Vence quem dá xeque-mate; quem
 *     fica sem lance também perde;
 *   - repetição (sennichite): a mesma posição (tabuleiro, peças na mão e a vez) pela quarta vez é
 *     empate, mas, se um lado deu xeque em todos os lances da repetição, quem dava os xeques perde.
 *   - O impasse (jishōgi, os dois reis na zona de promoção) não é tratado aqui: os jogadores podem
 *     combinar o empate.
 *
 * Coordenadas: linha 0 é a do fundo do gote (em cima) e linha 8 a do fundo do sente (embaixo);
 * colunas 0 a 8, da esquerda para a direita (na notação japonesa, as colunas 9 a 1).
 *
 * Peças como números: o sinal é o dono (positivo = sente, negativo = gote) e o valor absoluto, o
 * tipo (1 a 14, ver `T`).
 */

export type CorS = 's' | 'g';
export const T = { P: 1, L: 2, N: 3, S: 4, G: 5, B: 6, R: 7, K: 8, TP: 9, PL: 10, PN: 11, PS: 12, H: 13, D: 14 } as const;
/** Os tipos que podem ir para a mão (a peça capturada volta desvirada). */
export const TIPOS_MAO = [T.R, T.B, T.G, T.S, T.N, T.L, T.P] as const;

export interface LanceS {
  /** a casa de onde a peça sai; -1 no drop */
  de: number;
  para: number;
  /** o tipo da peça que anda (antes de promover) ou que é largada */
  tipo: number;
  /** drop: a peça veio da mão */
  drop: boolean;
  promove: boolean;
  /** o tipo da peça capturada, como estava no tabuleiro */
  capturada?: number;
}

export interface ShogiState {
  board: number[];
  /** peças na mão de cada lado, por tipo (índices 1 a 7) */
  maos: Record<CorS, number[]>;
  turn: CorS;
  winner: CorS | 'empate' | null;
  fim: 'mate' | 'sem-lance' | 'repeticao' | 'xeque-perpetuo' | 'combinado' | null;
  emXeque: boolean;
  ultimo: LanceS | null;
  /** as posições da partida (para a repetição) e, em cada uma, se quem tinha a vez estava em xeque */
  historico: string[];
  xeques: boolean[];
}

export const N9 = 9;
export const ix = (r: number, c: number) => r * N9 + c;
export const lx = (i: number) => Math.floor(i / N9);
export const cx = (i: number) => i % N9;
const dentro = (r: number, c: number) => r >= 0 && r < N9 && c >= 0 && c < N9;
export const outra = (c: CorS): CorS => (c === 's' ? 'g' : 's');
export const corDe = (p: number): CorS => (p > 0 ? 's' : 'g');
const sinal = (c: CorS) => (c === 's' ? 1 : -1);
/** a direção “para a frente” no tabuleiro: o sente sobe (linha diminui), o gote desce */
const frente = (c: CorS) => (c === 's' ? -1 : 1);

export const podePromover = (t: number) => t === T.P || t === T.L || t === T.N || t === T.S || t === T.B || t === T.R;
export const promovido = (t: number) => (t <= 4 ? t + 8 : t === T.B ? T.H : t === T.R ? T.D : t);
export const desvirado = (t: number) => (t >= 9 && t <= 12 ? t - 8 : t === T.H ? T.B : t === T.D ? T.R : t);
export const ePromovida = (t: number) => t >= 9;
/** a zona de promoção da cor: as três últimas fileiras dela */
export const naZona = (c: CorS, r: number) => (c === 's' ? r <= 2 : r >= 6);
/** se a peça, nessa linha, não teria mais nenhum lance (peão e lança na última, cavalo nas duas últimas) */
export const semLanceFuturo = (c: CorS, t: number, r: number) => {
  const falta = c === 's' ? r : 8 - r; // fileiras que faltam até o fim
  return ((t === T.P || t === T.L) && falta === 0) || (t === T.N && falta <= 1);
};

/** Os kanji de uma letra só, como nos diagramas de shogi. O rei do sente é 玉 e o do gote, 王. */
export const KANJI: Record<number, string> = { 1: '歩', 2: '香', 3: '桂', 4: '銀', 5: '金', 6: '角', 7: '飛', 8: '玉', 9: 'と', 10: '杏', 11: '圭', 12: '全', 13: '馬', 14: '龍' };
/** O nome inteiro de cada peça, em kanji (como escrito nas peças de verdade). */
export const KANJI_INTEIRO: Record<number, string> = { 1: '歩兵', 2: '香車', 3: '桂馬', 4: '銀将', 5: '金将', 6: '角行', 7: '飛車', 8: '玉将', 9: 'と金', 10: '成香', 11: '成桂', 12: '成銀', 13: '龍馬', 14: '龍王' };
export const NOMES_S: Record<number, string> = {
  1: 'peão',
  2: 'lança',
  3: 'cavalo',
  4: 'general de prata',
  5: 'general de ouro',
  6: 'bispo',
  7: 'torre',
  8: 'rei',
  9: 'tokin (peão promovido)',
  10: 'lança promovida',
  11: 'cavalo promovido',
  12: 'prata promovida',
  13: 'cavalo-dragão (bispo promovido)',
  14: 'rei-dragão (torre promovida)',
};

// os passos de cada tipo, “para a frente” positivo: máscara de 3×3 (bit (fr+1)*3+(dc+1))
const bit = (fr: number, dc: number) => 1 << ((fr + 1) * 3 + (dc + 1));
const OURO = bit(1, -1) | bit(1, 0) | bit(1, 1) | bit(0, -1) | bit(0, 1) | bit(-1, 0);
const DIAGS = bit(1, -1) | bit(1, 1) | bit(-1, -1) | bit(-1, 1);
const ORTS = bit(1, 0) | bit(-1, 0) | bit(0, -1) | bit(0, 1);
const PASSOS: number[] = [];
PASSOS[T.P] = bit(1, 0);
PASSOS[T.L] = 0;
PASSOS[T.N] = 0;
PASSOS[T.S] = DIAGS | bit(1, 0);
PASSOS[T.G] = OURO;
PASSOS[T.B] = 0;
PASSOS[T.R] = 0;
PASSOS[T.K] = DIAGS | ORTS;
PASSOS[T.TP] = PASSOS[T.PL] = PASSOS[T.PN] = PASSOS[T.PS] = OURO;
PASSOS[T.H] = ORTS;
PASSOS[T.D] = DIAGS;
const DESLIZES: number[] = [];
for (let t = 1; t <= 14; t++) DESLIZES[t] = 0;
DESLIZES[T.L] = bit(1, 0);
DESLIZES[T.B] = DESLIZES[T.H] = DIAGS;
DESLIZES[T.R] = DESLIZES[T.D] = ORTS;

const DIRECOES: [number, number][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

/** Se a casa `sq` está atacada por alguma peça da cor `por`. Olha a partir da casa, para fora. */
export function atacada(board: number[], sq: number, por: CorS): boolean {
  const r = lx(sq);
  const c = cx(sq);
  const sg = sinal(por);
  const fw = frente(por);
  for (const [dr, dc] of DIRECOES) {
    let rr = r + dr;
    let cc = c + dc;
    let k = 1;
    while (dentro(rr, cc)) {
      const p = board[rr * N9 + cc]!;
      if (p !== 0) {
        if (p * sg > 0) {
          const t = p * sg;
          // a direção da peça até a casa, no “para a frente” dela
          const m = bit(-dr * fw, -dc);
          if ((k === 1 && PASSOS[t]! & m) || DESLIZES[t]! & m) return true;
        }
        break;
      }
      rr += dr;
      cc += dc;
      k++;
    }
  }
  // o cavalo: duas fileiras para a frente (dele) e uma para o lado
  const rn = r - 2 * fw;
  if (rn >= 0 && rn < N9) {
    if (c > 0 && board[rn * N9 + c - 1] === sg * T.N) return true;
    if (c < 8 && board[rn * N9 + c + 1] === sg * T.N) return true;
  }
  return false;
}

export function emXeque(board: number[], cor: CorS): boolean {
  const k = board.indexOf(sinal(cor) * T.K);
  return k < 0 ? true : atacada(board, k, outra(cor));
}

export function chave(s: Pick<ShogiState, 'board' | 'maos' | 'turn'>): string {
  return s.board.join(',') + '|' + s.maos.s.join('') + '|' + s.maos.g.join('') + s.turn;
}

export function createInitialState(): ShogiState {
  const board: number[] = Array(81).fill(0);
  const fundo = [T.L, T.N, T.S, T.G, T.K, T.G, T.S, T.N, T.L];
  fundo.forEach((t, c) => {
    board[ix(8, c)] = t;
    board[ix(0, c)] = -t;
  });
  board[ix(7, 1)] = T.B;
  board[ix(7, 7)] = T.R;
  board[ix(1, 1)] = -T.R;
  board[ix(1, 7)] = -T.B;
  for (let c = 0; c < 9; c++) {
    board[ix(6, c)] = T.P;
    board[ix(2, c)] = -T.P;
  }
  const s: ShogiState = { board, maos: { s: Array(8).fill(0), g: Array(8).fill(0) }, turn: 's', winner: null, fim: null, emXeque: false, ultimo: null, historico: [], xeques: [] };
  return { ...s, historico: [chave(s)], xeques: [false] };
}

/** Aplica o lance no tabuleiro e nas mãos, sem conferir nada (o lance tem de vir do gerador). */
function aplicarCru(s: ShogiState, l: LanceS): { board: number[]; maos: Record<CorS, number[]> } {
  const board = s.board.slice();
  const sg = sinal(s.turn);
  let maos = s.maos;
  if (l.drop) {
    board[l.para] = sg * l.tipo;
    const m = maos[s.turn].slice();
    m[l.tipo]!--;
    maos = { ...maos, [s.turn]: m };
  } else {
    if (l.capturada) {
      const m = maos[s.turn].slice();
      m[desvirado(l.capturada)]!++;
      maos = { ...maos, [s.turn]: m };
    }
    board[l.para] = sg * (l.promove ? promovido(l.tipo) : l.tipo);
    board[l.de] = 0;
  }
  return { board, maos };
}

/**
 * Gera os lances legais de quem tem a vez, chamando `cb` para cada um; se `cb` devolve true, para
 * ali (para saber se existe algum lance sem gerar todos). `soDe` limita às peças de uma casa (ou, com
 * `soDrop`, aos drops de um tipo).
 */
function gerar(s: ShogiState, cb: (l: LanceS) => boolean | void, soDe = -2, soDrop = 0): void {
  const cor = s.turn;
  const sg = sinal(cor);
  const fw = frente(cor);
  const b = s.board.slice(); // rascunho: faz e desfaz cada lance para ver se o rei fica em xeque
  const rei = b.indexOf(sg * T.K);
  const xeque = rei >= 0 && atacada(b, rei, outra(cor));
  const inimiga = outra(cor);

  const tentar = (de: number, para: number, t: number): boolean => {
    const cap = b[para]!;
    const r1 = lx(de);
    const r2 = lx(para);
    // o lance vale? (o próprio rei não pode ficar atacado)
    b[para] = b[de]!;
    b[de] = 0;
    const kq = t === T.K ? para : rei;
    const ruim = atacada(b, kq, inimiga);
    b[de] = b[para]!;
    b[para] = cap;
    if (ruim) return false;
    const capturada = cap !== 0 ? -sg * cap : undefined;
    const pode = podePromover(t) && (naZona(cor, r1) || naZona(cor, r2));
    if (pode && cb({ de, para, tipo: t, drop: false, promove: true, capturada })) return true;
    if (!semLanceFuturo(cor, t, r2) && cb({ de, para, tipo: t, drop: false, promove: false, capturada })) return true;
    return false;
  };

  if (soDrop === 0) {
    for (let i = 0; i < 81; i++) {
      if (soDe >= -1 && i !== soDe) continue;
      const p = b[i]! * sg;
      if (p <= 0) continue;
      const r = lx(i);
      const c = cx(i);
      const passos = PASSOS[p]!;
      if (passos) {
        for (const [dr, dc] of DIRECOES) {
          if (!(passos & bit(dr * fw, dc))) continue;
          const rr = r + dr;
          const cc = c + dc;
          if (!dentro(rr, cc)) continue;
          const q = b[rr * N9 + cc]!;
          if (q * sg > 0) continue;
          if (tentar(i, rr * N9 + cc, p)) return;
        }
      }
      const desl = DESLIZES[p]!;
      if (desl) {
        for (const [dr, dc] of DIRECOES) {
          if (!(desl & bit(dr * fw, dc))) continue;
          let rr = r + dr;
          let cc = c + dc;
          while (dentro(rr, cc)) {
            const q = b[rr * N9 + cc]!;
            if (q * sg > 0) break;
            if (tentar(i, rr * N9 + cc, p)) return;
            if (q !== 0) break;
            rr += dr;
            cc += dc;
          }
        }
      }
      if (p === T.N) {
        const rr = r + 2 * fw;
        for (const cc of [c - 1, c + 1]) {
          if (!dentro(rr, cc)) continue;
          const q = b[rr * N9 + cc]!;
          if (q * sg > 0) continue;
          if (tentar(i, rr * N9 + cc, p)) return;
        }
      }
    }
  }

  if (soDe >= -1 && soDe !== -1) return;
  const mao = s.maos[cor];
  for (const t of TIPOS_MAO) {
    if (!mao[t] || (soDrop && t !== soDrop)) continue;
    // colunas que já têm peão não promovido do mesmo dono (nifu)
    let colunasComPeao = 0;
    if (t === T.P) for (let i = 0; i < 81; i++) if (b[i] === sg * T.P) colunasComPeao |= 1 << cx(i);
    for (let i = 0; i < 81; i++) {
      if (b[i] !== 0) continue;
      if (semLanceFuturo(cor, t, lx(i))) continue;
      if (t === T.P && colunasComPeao & (1 << cx(i))) continue;
      b[i] = sg * t;
      // largar uma peça não descobre o rei; só importa quando já está em xeque
      const ruim = xeque && atacada(b, rei, inimiga);
      let mateDePeao = false;
      if (!ruim && t === T.P) {
        // uchifuzume: o peão que dá xeque não pode dar mate
        const alvo = i + fw * N9;
        if (alvo >= 0 && alvo < 81 && b[alvo] === -sg * T.K) {
          const l: LanceS = { de: -1, para: i, tipo: t, drop: true, promove: false };
          const depois = { ...s, ...aplicarCru(s, l), turn: inimiga };
          mateDePeao = !temAlgumLance(depois);
        }
      }
      b[i] = 0;
      if (ruim || mateDePeao) continue;
      if (cb({ de: -1, para: i, tipo: t, drop: true, promove: false })) return;
    }
  }
}

export function lancesLegais(s: ShogiState): LanceS[] {
  if (s.winner !== null) return [];
  const out: LanceS[] = [];
  gerar(s, (l) => {
    out.push(l);
  });
  return out;
}

/** Se quem tem a vez tem pelo menos um lance (para no primeiro que achar). */
export function temAlgumLance(s: ShogiState): boolean {
  let tem = false;
  gerar(s, () => (tem = true));
  return tem;
}

/** Os lances da peça na casa `i` (com e sem promoção, quando dá para escolher). */
export function lancesDaPeca(s: ShogiState, i: number): LanceS[] {
  const p = s.board[i]!;
  if (!p || corDe(p) !== s.turn || s.winner !== null) return [];
  const out: LanceS[] = [];
  gerar(
    s,
    (l) => {
      out.push(l);
    },
    i,
  );
  return out;
}

/** Os drops de um tipo da mão de quem tem a vez. */
export function lancesDeDrop(s: ShogiState, tipo: number): LanceS[] {
  if (s.winner !== null || !s.maos[s.turn][tipo]) return [];
  const out: LanceS[] = [];
  gerar(
    s,
    (l) => {
      out.push(l);
    },
    -1,
    tipo,
  );
  return out;
}

/**
 * Faz um lance já gerado (para a busca do Linu): sem conferir a legalidade e sem guardar a repetição,
 * mas vê o fim de jogo (sem lance = derrota). Para pensar rápido, a busca só procura o “sem lance”
 * quando há xeque (o mate); fora do xeque, ficar sem nenhum lance quase nunca acontece no shogi.
 * Com `completo`, procura sempre (é o que vale na partida de verdade).
 */
export function aplicarRapido(s: ShogiState, l: LanceS, completo = false): ShogiState {
  const { board, maos } = aplicarCru(s, l);
  const turn = outra(s.turn);
  const next: ShogiState = { board, maos, turn, winner: null, fim: null, emXeque: emXeque(board, turn), ultimo: l, historico: s.historico, xeques: s.xeques };
  if ((completo || next.emXeque) && !temAlgumLance(next)) return { ...next, winner: s.turn, fim: next.emXeque ? 'mate' : 'sem-lance' };
  return next;
}

/** Faz o lance, se ele vale (senão devolve o mesmo `s`), e vê o fim: mate, sem lance ou repetição. */
export function jogar(s: ShogiState, de: number, para: number, promove = false, dropTipo = 0): ShogiState {
  const cand = dropTipo ? lancesDeDrop(s, dropTipo) : lancesDaPeca(s, de);
  const l = cand.find((x) => x.para === para && x.promove === promove) ?? cand.find((x) => x.para === para);
  if (!l) return s;
  const next = aplicarRapido(s, l, true);
  const k = chave(next);
  const historico = [...s.historico, k];
  const xeques = [...s.xeques, next.emXeque];
  const com = { ...next, historico, xeques };
  if (com.winner !== null) return com;
  const vezes = historico.filter((h) => h === k);
  if (vezes.length >= 4) {
    // o ciclo: da primeira vez em que a posição apareceu até agora
    const a = historico.indexOf(k);
    for (const cor of ['s', 'g'] as CorS[]) {
      // as posições do ciclo em que `cor` tinha a vez: se em todas ele estava em xeque, o outro deu xeque perpétuo
      const minhas: boolean[] = [];
      let vez = next.turn;
      for (let j = historico.length - 1; j > a; j--) {
        if (vez === cor) minhas.push(xeques[j]!);
        vez = outra(vez);
      }
      if (minhas.length > 0 && minhas.every(Boolean)) return { ...com, winner: cor, fim: 'xeque-perpetuo' };
    }
    return { ...com, winner: 'empate', fim: 'repeticao' };
  }
  return com;
}

/** Os dois jogadores combinam o empate (o impasse, por exemplo). */
export function combinarEmpateS(s: ShogiState): ShogiState {
  return s.winner === null ? { ...s, winner: 'empate', fim: 'combinado' } : s;
}

/** Conta as posições a `prof` lances (para conferir o gerador com os números conhecidos). */
export function perft(s: ShogiState, prof: number): number {
  if (prof === 0) return 1;
  const ls = lancesLegais(s);
  if (prof === 1) return ls.length;
  let n = 0;
  for (const l of ls) {
    const { board, maos } = aplicarCru(s, l);
    n += perft({ ...s, board, maos, turn: outra(s.turn) }, prof - 1);
  }
  return n;
}

/**
 * Como a peça anda, para desenhar (as peças de aprendiz): os passos de uma casa e as direções em que
 * ela desliza, com “para a frente” = fr positivo; e se ela salta como o cavalo.
 */
export function movimento(t: number): { passos: [number, number][]; deslizes: [number, number][]; salta: boolean } {
  const lista = (mask: number) => {
    const out: [number, number][] = [];
    for (let fr = 1; fr >= -1; fr--) for (let dc = -1; dc <= 1; dc++) if ((fr || dc) && mask & bit(fr, dc)) out.push([fr, dc]);
    return out;
  };
  return { passos: lista(PASSOS[t]!), deslizes: lista(DESLIZES[t]!), salta: t === T.N };
}
