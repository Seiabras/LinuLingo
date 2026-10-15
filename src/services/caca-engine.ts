/**
 * Motor comum dos jogos de “caçador e presas” num tabuleiro de linhas (a família do alquerque): o
 * jogo da onça (adugo) e o bagh-chal. As peças ficam nos pontos e andam um ponto por vez pelas linhas;
 * o caçador captura saltando por cima de uma presa vizinha, em linha reta, até o ponto vazio logo
 * depois; as presas não capturam e vencem quando nenhum caçador consegue se mexer; o caçador vence
 * com 5 capturas. O que muda de um jogo para o outro fica no `ConfigCaca` (ver `ONCA` e `BAGH_CHAL`).
 */

export type Lado = 'h' | 'p'; // h = caçador (onça, tigres); p = presa (cachorros, cabras)

export interface Ponto {
  x: number;
  y: number;
}

export interface ConfigCaca {
  id: 'onca' | 'bagh-chal';
  pontos: Ponto[];
  /** as ligações (as linhas desenhadas), entre índices de `pontos` */
  ligacoes: [number, number][];
  /** onde começam os caçadores e as presas já postas */
  caçadores: number[];
  presas: number[];
  /** presas que entram uma por vez, antes de poderem andar (bagh-chal: 20) */
  presasNaMao: number;
  /** quem começa */
  comeca: Lado;
  /** quantas capturas dão a vitória ao caçador */
  capturasParaVencer: number;
  /** se o caçador pode encadear saltos com a mesma peça na mesma vez */
  saltosEmSequencia: boolean;
  /** depois de postas todas as presas, nenhum lance pode repetir uma posição já vista (bagh-chal) */
  semRepetir: boolean;
  /** limite de lances do app (sem regra oficial de empate); 0 = sem limite */
  limiteLances: number;
}

export interface CacaState {
  cfg: ConfigCaca['id'];
  board: (Lado | null)[];
  turn: Lado;
  presasNaMao: number;
  capturas: number;
  /** o caçador no meio de uma sequência de saltos (só ele pode continuar) */
  cadeia: number | null;
  winner: Lado | 'empate' | null;
  /** 'repeticao': o caçador ainda podia andar, mas só para posições já vistas (bagh-chal) */
  motivo: 'capturas' | 'preso' | 'repeticao' | 'limite' | null;
  /** o último passo: de onde, para onde e a presa capturada */
  ultimo: { de: number | null; para: number; capturada: number | null } | null;
  lances: number;
  /** as posições já vistas desde que a última presa entrou (regra de não repetir) */
  vistas: string[];
}

// ── As geometrias ─────────────────────────────────────────────────────────────────────────────────

/** O tabuleiro do alquerque 5×5 (com as diagonais nos pontos de soma par), a partir da linha `y0`. */
function alquerque(y0: number): { pontos: Ponto[]; ligacoes: [number, number][] } {
  const pontos: Ponto[] = [];
  for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) pontos.push({ x, y: y + y0 });
  const ligacoes: [number, number][] = [];
  const id = (x: number, y: number) => y * 5 + x;
  for (let y = 0; y < 5; y++)
    for (let x = 0; x < 5; x++) {
      if (x < 4) ligacoes.push([id(x, y), id(x + 1, y)]);
      if (y < 4) ligacoes.push([id(x, y), id(x, y + 1)]);
      if ((x + y) % 2 === 0) {
        if (x < 4 && y < 4) ligacoes.push([id(x, y), id(x + 1, y + 1)]);
        if (x > 0 && y < 4) ligacoes.push([id(x, y), id(x - 1, y + 1)]);
      }
    }
  return { pontos, ligacoes };
}

/**
 * Jogo da onça: o alquerque 5×5 com a “toca” triangular presa no meio de um lado. O triângulo tem o
 * vértice no ponto do meio da borda e mais 6 pontos: 3 na linha do meio e 3 na base, com a linha
 * do centro e os dois lados (que continuam as diagonais do quadrado). Aqui a toca fica em cima.
 */
const ONCA_GEO = (() => {
  const q = alquerque(2); // o quadrado nas linhas y = 2…6
  const pontos = [...q.pontos];
  const ligacoes = [...q.ligacoes];
  const apice = 2; // (x 2, y 2): o meio da borda de cima
  const add = (x: number, y: number) => pontos.push({ x, y }) - 1;
  const mEsq = add(1, 1);
  const mMeio = add(2, 1);
  const mDir = add(3, 1);
  const bEsq = add(0, 0);
  const bMeio = add(2, 0);
  const bDir = add(4, 0);
  ligacoes.push([apice, mEsq], [apice, mMeio], [apice, mDir], [mEsq, mMeio], [mMeio, mDir], [mEsq, bEsq], [mMeio, bMeio], [mDir, bDir], [bEsq, bMeio], [bMeio, bDir]);
  return { pontos, ligacoes };
})();

export const ONCA: ConfigCaca = {
  id: 'onca',
  ...ONCA_GEO,
  // a onça no centro do quadrado; os 14 cachorros na metade do quadrado longe da toca
  caçadores: [12],
  presas: [10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  presasNaMao: 0,
  comeca: 'h',
  capturasParaVencer: 5,
  saltosEmSequencia: true,
  semRepetir: false,
  limiteLances: 200,
};

const BAGH_GEO = alquerque(0);
export const BAGH_CHAL: ConfigCaca = {
  id: 'bagh-chal',
  ...BAGH_GEO,
  caçadores: [0, 4, 20, 24],
  presas: [],
  presasNaMao: 20,
  comeca: 'p',
  capturasParaVencer: 5,
  saltosEmSequencia: false,
  semRepetir: true,
  limiteLances: 0,
};

export const CONFIGS: Record<ConfigCaca['id'], ConfigCaca> = { onca: ONCA, 'bagh-chal': BAGH_CHAL };

// ── Vizinhos e saltos (calculados uma vez por configuração) ──────────────────────────────────────

interface Grafo {
  vizinhos: number[][];
  /** para cada ponto, os saltos possíveis: por cima de `meio`, até `fim` */
  saltos: { meio: number; fim: number }[][];
}
const GRAFOS = new Map<string, Grafo>();
export function grafo(cfg: ConfigCaca): Grafo {
  const g = GRAFOS.get(cfg.id);
  if (g) return g;
  const n = cfg.pontos.length;
  const vizinhos: number[][] = Array.from({ length: n }, () => []);
  for (const [a, b] of cfg.ligacoes) {
    vizinhos[a]!.push(b);
    vizinhos[b]!.push(a);
  }
  const acha = (x: number, y: number) => cfg.pontos.findIndex((p) => p.x === x && p.y === y);
  const saltos: { meio: number; fim: number }[][] = Array.from({ length: n }, () => []);
  for (let a = 0; a < n; a++)
    for (const b of vizinhos[a]!) {
      // o ponto seguinte na mesma reta, se também está ligado ao do meio
      const pa = cfg.pontos[a]!;
      const pb = cfg.pontos[b]!;
      const c = acha(pb.x + (pb.x - pa.x), pb.y + (pb.y - pa.y));
      if (c >= 0 && vizinhos[b]!.includes(c)) saltos[a]!.push({ meio: b, fim: c });
    }
  const novo = { vizinhos, saltos };
  GRAFOS.set(cfg.id, novo);
  return novo;
}

export function createInitialState(cfg: ConfigCaca): CacaState {
  const board: (Lado | null)[] = Array(cfg.pontos.length).fill(null);
  for (const i of cfg.caçadores) board[i] = 'h';
  for (const i of cfg.presas) board[i] = 'p';
  return { cfg: cfg.id, board, turn: cfg.comeca, presasNaMao: cfg.presasNaMao, capturas: 0, cadeia: null, winner: null, motivo: null, ultimo: null, lances: 0, vistas: [] };
}

const chave = (board: (Lado | null)[]) => board.map((v) => v ?? '.').join('');
export const outro = (l: Lado): Lado => (l === 'h' ? 'p' : 'h');

export interface PassoCaca {
  /** null = pôr uma presa da mão */
  de: number | null;
  para: number;
  /** a presa saltada (só nos saltos do caçador) */
  captura?: number;
}

/** Os passos possíveis de quem tem a vez (sem a regra de não repetir). */
function passosBrutos(s: CacaState, cfg: ConfigCaca): PassoCaca[] {
  if (s.winner !== null) return [];
  const g = grafo(cfg);
  const r: PassoCaca[] = [];
  if (s.turn === 'p' && s.presasNaMao > 0) {
    s.board.forEach((v, i) => v === null && r.push({ de: null, para: i }));
    return r;
  }
  const origens = s.cadeia !== null ? [s.cadeia] : s.board.flatMap((v, i) => (v === s.turn ? [i] : []));
  for (const de of origens) {
    if (s.cadeia === null) for (const v of g.vizinhos[de]!) if (s.board[v] === null) r.push({ de, para: v });
    if (s.turn === 'h') for (const { meio, fim } of g.saltos[de]!) if (s.board[meio] === 'p' && s.board[fim] === null) r.push({ de, para: fim, captura: meio });
  }
  return r;
}

function aplicarBruto(s: CacaState, p: PassoCaca): (Lado | null)[] {
  const board = s.board.slice();
  if (p.de !== null) board[p.de] = null;
  board[p.para] = s.turn;
  if (p.captura !== undefined) board[p.captura] = null;
  return board;
}

/** Os passos válidos de quem tem a vez. */
export function passosLegais(s: CacaState): PassoCaca[] {
  const cfg = CONFIGS[s.cfg];
  const r = passosBrutos(s, cfg);
  if (!cfg.semRepetir || s.presasNaMao > 0) return r;
  return r.filter((p) => !s.vistas.includes(chave(aplicarBruto(s, p))));
}

/** Passa a vez; vê se o caçador ficou preso ou se chegou ao limite. */
function fimDaVez(s: CacaState, cfg: ConfigCaca): CacaState {
  const prox: CacaState = { ...s, turn: outro(s.turn), cadeia: null };
  if (cfg.limiteLances > 0 && prox.lances >= cfg.limiteLances) return { ...prox, winner: 'empate', motivo: 'limite' };
  if (passosLegais(prox).length > 0) return prox;
  // sem lance: o caçador preso perde; a presa sem lance passa a vez (a regra não fala desse caso)
  if (prox.turn === 'h') return { ...prox, winner: 'p', motivo: passosBrutos(prox, cfg).length > 0 ? 'repeticao' : 'preso' };
  const volta: CacaState = { ...prox, turn: 'h' };
  return passosLegais(volta).length > 0 ? volta : { ...prox, winner: 'p', motivo: 'preso' };
}

/** Faz um passo. Devolve o mesmo estado se ele não vale. */
export function jogar(s: CacaState, p: PassoCaca): CacaState {
  const ok = passosLegais(s).some((q) => q.de === p.de && q.para === p.para && q.captura === p.captura);
  if (!ok) return s;
  const cfg = CONFIGS[s.cfg];
  const board = aplicarBruto(s, p);
  const capturas = s.capturas + (p.captura !== undefined ? 1 : 0);
  const presasNaMao = p.de === null ? s.presasNaMao - 1 : s.presasNaMao;
  let e: CacaState = { ...s, board, capturas, presasNaMao, ultimo: { de: p.de, para: p.para, capturada: p.captura ?? null }, lances: s.lances + 1 };
  if (cfg.semRepetir && presasNaMao === 0) e = { ...e, vistas: [...(s.presasNaMao > 0 ? [] : s.vistas), chave(board)] };
  if (capturas >= cfg.capturasParaVencer) return { ...e, winner: 'h', motivo: 'capturas', cadeia: null };
  // a onça pode seguir saltando com a mesma peça
  if (p.captura !== undefined && cfg.saltosEmSequencia) {
    const seguir: CacaState = { ...e, cadeia: p.para };
    if (passosLegais(seguir).length > 0) return seguir;
  }
  return fimDaVez(e, cfg);
}

/** No meio de uma sequência de saltos, parar e passar a vez. */
export function parar(s: CacaState): CacaState {
  if (s.cadeia === null || s.winner !== null) return s;
  return fimDaVez(s, CONFIGS[s.cfg]);
}

/** Um lance inteiro: os passos (uma sequência de saltos da onça conta como um lance). */
export type LanceCaca = PassoCaca[];

export function aplicarLance(s: CacaState, l: LanceCaca): CacaState {
  let e = s;
  for (const p of l) e = jogar(e, p);
  if (e.cadeia !== null && e.winner === null) e = parar(e);
  return e;
}

/** Todos os lances inteiros (com as sequências de saltos, parando em qualquer ponto). */
export function lancesLegais(s: CacaState): LanceCaca[] {
  const r: LanceCaca[] = [];
  const andar = (e: CacaState, feitos: PassoCaca[]) => {
    for (const p of passosLegais(e)) {
      const l = [...feitos, p];
      r.push(l);
      const f = jogar(e, p);
      if (f.cadeia !== null && f.winner === null) andar(f, l);
    }
  };
  andar(s, []);
  return r;
}
