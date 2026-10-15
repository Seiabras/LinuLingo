/**
 * Motor das damas chinesas (Stern-Halma). Regras da página “The Rules of Chinese Checkers”, da
 * Masters Traditional Games (mastersofgames.com, consultada em 14/10/2026), conferidas com o artigo
 * “Chinese checkers” da Wikipédia em inglês:
 *
 * - tabuleiro em estrela de 6 pontas, 121 casas: um hexágono de 61 casas (5 por lado) e 6 pontas
 *   triangulares de 10 casas; cada jogador começa com 10 peças numa ponta;
 * - a dois, as pontas são opostas; a três, as pontas ficam a igual distância (uma sim, uma não);
 * - na vez, a peça anda para uma casa vizinha vazia OU faz um ou mais saltos sobre peças vizinhas
 *   (de qualquer cor) até a casa vazia logo depois, em qualquer das 6 direções; depois de cada salto,
 *   o jogador pode parar ou seguir saltando; passo e salto não se misturam; nada é capturado;
 * - vence quem primeiro ocupa as 10 casas da ponta oposta;
 * - a peça que chegou na ponta de destino não sai mais dela, só anda lá dentro (regra da Masters);
 * - pode passar saltando pela ponta de outro jogador, mas não parar nela (a regra da casa que a
 *   Masters sugere); as pontas que não são de ninguém ficam livres;
 * - contra o bloqueio (o adversário que deixa uma peça parada na sua ponta de destino), a regra
 *   “anti-spoiling” de James Masters (2002): quem está impedido de vencer por uma peça adversária na
 *   ponta de destino pode trocar de lugar com ela. Aqui, para simplificar, a troca vale quando a ponta
 *   de destino está toda ocupada e só no fim do lance (no passo ou no último salto): a peça
 *   adversária vai para a casa de onde a sua veio.
 */

export interface Celula {
  q: number;
  r: number;
}

/** As 6 direções da grade de triângulos (coordenadas axiais q, r; a terceira é s = −q − r). */
export const DIRECOES: readonly Celula[] = [
  { q: 1, r: 0 },
  { q: -1, r: 0 },
  { q: 0, r: 1 },
  { q: 0, r: -1 },
  { q: 1, r: -1 },
  { q: -1, r: 1 },
];

/**
 * As 121 casas, linha por linha, de cima para baixo. A estrela é a união de dois triângulos grandes
 * de 13 casas de lado (91 + 91 − 61 do hexágono do meio).
 */
export const CELULAS: readonly Celula[] = (() => {
  const out: Celula[] = [];
  for (let r = -8; r <= 8; r++)
    for (let q = -8; q <= 8; q++) {
      const s = -q - r;
      const a = q >= -4 && r >= -4 && s >= -4;
      const b = q <= 4 && r <= 4 && s <= 4;
      if (a || b) out.push({ q, r });
    }
  return out;
})();

export const N_CELULAS = CELULAS.length;
const INDICE = new Map(CELULAS.map((c, i) => [`${c.q},${c.r}`, i]));
export const indice = (q: number, r: number): number => INDICE.get(`${q},${r}`) ?? -1;

/**
 * A ponta de cada casa (−1 no hexágono do meio). As pontas vão em volta, no sentido do relógio na
 * tela: 0 embaixo, 1 embaixo à esquerda, 2 em cima à esquerda, 3 em cima, 4 em cima à direita,
 * 5 embaixo à direita. A ponta oposta à `p` é `(p + 3) % 6`.
 */
export const PONTA: readonly number[] = CELULAS.map(({ q, r }) => {
  const s = -q - r;
  if (r > 4) return 0;
  if (q < -4) return 1;
  if (s > 4) return 2;
  if (r < -4) return 3;
  if (q > 4) return 4;
  if (s < -4) return 5;
  return -1;
});

export const oposta = (p: number) => (p + 3) % 6;

/** As casas de cada ponta. */
export const CASAS_DA_PONTA: readonly number[][] = [0, 1, 2, 3, 4, 5].map((p) => PONTA.flatMap((x, i) => (x === p ? [i] : [])));

/** A casa do bico de cada ponta (a mais longe do centro). */
const BICO: readonly number[] = [indice(-4, 8), indice(-8, 4), indice(-4, -4), indice(4, -8), indice(8, -4), indice(4, 4)];

/** Os vizinhos de cada casa em cada direção (−1 fora do tabuleiro). */
export const VIZINHO: readonly number[][] = CELULAS.map((c) => DIRECOES.map((d) => indice(c.q + d.q, c.r + d.r)));

export const distancia = (a: number, b: number): number => {
  const x = CELULAS[a]!;
  const y = CELULAS[b]!;
  const dq = x.q - y.q;
  const dr = x.r - y.r;
  return (Math.abs(dq) + Math.abs(dr) + Math.abs(dq + dr)) / 2;
};

/** A distância de cada casa até o bico de cada ponta (pré-calculada para o Linu). */
export const DIST_BICO: readonly number[][] = BICO.map((b) => CELULAS.map((_, i) => distancia(i, b)));

/** Um lance: o caminho inteiro da peça (a casa de saída, e depois cada casa onde ela pousou). */
export interface LanceEstrela {
  de: number;
  para: number;
  caminho: number[];
  /** a regra contra o bloqueio: a peça adversária que estava em `para` vai para a casa anterior */
  troca: boolean;
}

export interface EstrelaState {
  /** o dono de cada casa: a ponta de onde a peça saiu (0 a 5), ou −1 vazia */
  board: number[];
  /** as pontas de quem joga, na ordem das vezes */
  jogadores: number[];
  /** índice em `jogadores` de quem tem a vez */
  vez: number;
  /** a ponta de quem venceu */
  winner: number | null;
  ultimo: LanceEstrela | null;
  lances: number;
}

export const PECAS_POR_JOGADOR = 10;
/** As pontas de cada partida: a dois, opostas; a três, uma sim, uma não (Masters Games). */
export const PONTAS_DA_PARTIDA: Record<2 | 3, number[]> = { 2: [0, 3], 3: [0, 2, 4] };

export function createInitialState(n: 2 | 3 = 2): EstrelaState {
  const jogadores = PONTAS_DA_PARTIDA[n];
  const board = Array<number>(N_CELULAS).fill(-1);
  for (const p of jogadores) for (const i of CASAS_DA_PONTA[p]!) board[i] = p;
  return { board, jogadores, vez: 0, winner: null, ultimo: null, lances: 0 };
}

export const quemJoga = (s: EstrelaState) => s.jogadores[s.vez]!;

/** Se a peça da ponta `dono`, saindo de `de`, pode terminar o lance na casa `cel`. */
export function podeParar(s: EstrelaState, dono: number, de: number, cel: number): boolean {
  if (cel === de) return false;
  const alvo = oposta(dono);
  // quem já chegou na ponta de destino não sai mais dela
  if (PONTA[de] === alvo && PONTA[cel] !== alvo) return false;
  const p = PONTA[cel]!;
  if (p === -1 || p === dono || p === alvo) return true;
  // a ponta de saída ou de chegada de outro jogador: só de passagem
  return !s.jogadores.some((j) => j === p || oposta(j) === p);
}

/** Se a ponta de destino de `dono` está toda ocupada (com alguma peça de outro): a troca vale. */
export function destinoBloqueado(s: EstrelaState, dono: number): boolean {
  const casas = CASAS_DA_PONTA[oposta(dono)]!;
  return casas.every((i) => s.board[i] !== -1) && casas.some((i) => s.board[i] !== dono);
}

const podeTrocar = (s: EstrelaState, dono: number, de: number, cel: number, bloqueado: boolean) =>
  bloqueado && PONTA[cel] === oposta(dono) && PONTA[de] !== oposta(dono) && s.board[cel] !== -1 && s.board[cel] !== dono;

/**
 * Os saltos que a peça em `de`, pousada agora em `cel` no meio da cadeia, pode dar: sobre uma peça
 * vizinha até a casa vazia logo depois. `visitadas` são as casas onde ela já pousou (não volta a elas).
 * A casa de saída conta como vazia. Inclui o salto final que troca com a peça que bloqueia.
 */
export function saltosDe(s: EstrelaState, de: number, cel: number, visitadas: readonly number[]): { para: number; troca: boolean }[] {
  const dono = s.board[de]!;
  const bloqueado = destinoBloqueado(s, dono);
  const ocupada = (i: number) => i !== de && s.board[i] !== -1;
  const out: { para: number; troca: boolean }[] = [];
  for (let d = 0; d < 6; d++) {
    const meio = VIZINHO[cel]![d]!;
    if (meio < 0 || !ocupada(meio)) continue;
    const alem = VIZINHO[meio]![d]!;
    if (alem < 0 || visitadas.includes(alem)) continue;
    if (!ocupada(alem)) out.push({ para: alem, troca: false });
    else if (podeTrocar(s, dono, de, alem, bloqueado)) out.push({ para: alem, troca: true });
  }
  return out;
}

/** Os passos simples (uma casa) da peça em `de`. */
export function passosDe(s: EstrelaState, de: number): LanceEstrela[] {
  const dono = s.board[de]!;
  const bloqueado = destinoBloqueado(s, dono);
  const out: LanceEstrela[] = [];
  for (const v of VIZINHO[de]!) {
    if (v < 0) continue;
    if (s.board[v] === -1 && podeParar(s, dono, de, v)) out.push({ de, para: v, caminho: [de, v], troca: false });
    else if (podeTrocar(s, dono, de, v, bloqueado)) out.push({ de, para: v, caminho: [de, v], troca: true });
  }
  return out;
}

/** Todos os lances da peça em `de`: os passos e cada casa onde uma cadeia de saltos pode terminar. */
export function lancesDaPeca(s: EstrelaState, de: number): LanceEstrela[] {
  const dono = s.board[de]!;
  const out = passosDe(s, de);
  // busca em largura pelas cadeias de saltos (o caminho mais curto até cada casa)
  const pai = new Map<number, number>([[de, -1]]);
  const fila = [de];
  const caminhoAte = (i: number) => {
    const c: number[] = [];
    for (let k = i; k !== -1; k = pai.get(k)!) c.unshift(k);
    return c;
  };
  while (fila.length) {
    const cel = fila.shift()!;
    for (const { para, troca } of saltosDe(s, de, cel, [])) {
      if (pai.has(para)) continue;
      if (troca) {
        if (!out.some((l) => l.para === para)) out.push({ de, para, caminho: [...caminhoAte(cel), para], troca: true });
        continue;
      }
      pai.set(para, cel);
      fila.push(para);
      if (podeParar(s, dono, de, para) && !out.some((l) => l.para === para)) out.push({ de, para, caminho: caminhoAte(para), troca: false });
    }
  }
  return out;
}

export function lancesLegais(s: EstrelaState): LanceEstrela[] {
  if (s.winner !== null) return [];
  const eu = quemJoga(s);
  const out: LanceEstrela[] = [];
  for (let i = 0; i < N_CELULAS; i++) if (s.board[i] === eu) out.push(...lancesDaPeca(s, i));
  return out;
}

const temLance = (s: EstrelaState) => {
  const eu = quemJoga(s);
  for (let i = 0; i < N_CELULAS; i++) if (s.board[i] === eu && lancesDaPeca(s, i).length > 0) return true;
  return false;
};

export const chegou = (s: EstrelaState, dono: number) => CASAS_DA_PONTA[oposta(dono)]!.every((i) => s.board[i] === dono);

/** Faz o lance (sem conferir se vale: quem chama tira o lance de `lancesLegais` ou de `saltosDe`). */
export function jogar(s: EstrelaState, l: LanceEstrela): EstrelaState {
  const board = s.board.slice();
  const eu = board[l.de]!;
  board[l.de] = -1;
  if (l.troca) board[l.caminho[l.caminho.length - 2]!] = board[l.para]!;
  board[l.para] = eu;
  const next: EstrelaState = { board, jogadores: s.jogadores, vez: s.vez, winner: null, ultimo: l, lances: s.lances + 1 };
  if (chegou(next, eu)) return { ...next, winner: eu };
  // a vez passa para o próximo; quem não tem lance nenhum passa a vez
  for (let k = 1; k <= s.jogadores.length; k++) {
    next.vez = (s.vez + k) % s.jogadores.length;
    if (temLance(next)) break;
  }
  return next;
}

/** Quantas peças de `dono` já estão na ponta de destino. */
export const naChegada = (s: EstrelaState, dono: number) => CASAS_DA_PONTA[oposta(dono)]!.filter((i) => s.board[i] === dono).length;
