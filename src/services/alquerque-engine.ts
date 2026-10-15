/**
 * Motor do alquerque (alquerque de doze, “quirkat”). Fontes em `data/jogos-conhecimento.ts`.
 *
 * O que vem do “Libro de los juegos” de Alfonso X (1283, f. 91, na tradução de Sonja Musser
 * Golladay): 25 pontos e 24 peças, 12 de cada cor “em formação”, o ponto do meio vazio; captura
 * saltando por cima de uma peça do outro ao longo das linhas, e quantas der em seguida; perde quem
 * perde as peças; dá para empatar.
 *
 * O que o livro não diz e o app completa (reconstrução, dita na regra): a posição das 12 peças (a
 * de sempre: as duas fileiras de perto e os dois pontos da direita da fileira do meio); o lance
 * simples, um ponto ao longo de uma linha, para qualquer lado; que a captura é opcional, mas a
 * sequência de saltos continua enquanto der; que perde quem não tem lance; e o empate depois de 40
 * lances seguidos sem captura.
 *
 * Variante “Bell” (R. C. Bell, 1979, que achou as regras de Alfonso X insuficientes): a captura é
 * obrigatória; a peça não anda para trás; não volta a um ponto onde já esteve; na última fileira do
 * outro lado, só anda para capturar; perde quem não tem lance.
 */
export type JogadorA = 0 | 1;
export type RegraA = 'livro' | 'bell';

export const LADO = 5;
export const idx = (r: number, c: number) => r * LADO + c;
export const rc = (i: number): [number, number] => [Math.floor(i / LADO), i % LADO];

export const DIRECOES: [number, number][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];
/** nos pontos com linha + coluna par passam as diagonais */
export const temDiagonal = (i: number) => (rc(i)[0] + rc(i)[1]) % 2 === 0;

/** o ponto vizinho na direção `d`, ao longo de uma linha (ou null) */
export function vizinho(i: number, d: number): number | null {
  const [dr, dc] = DIRECOES[d]!;
  if (dr !== 0 && dc !== 0 && !temDiagonal(i)) return null;
  const [r, c] = rc(i);
  const r2 = r + dr;
  const c2 = c + dc;
  if (r2 < 0 || r2 >= LADO || c2 < 0 || c2 >= LADO) return null;
  return idx(r2, c2);
}

/** as linhas do tabuleiro, para desenhar */
export const ARESTAS: [number, number][] = (() => {
  const out: [number, number][] = [];
  for (let i = 0; i < LADO * LADO; i++)
    for (let d = 0; d < 8; d++) {
      const j = vizinho(i, d);
      if (j !== null && i < j) out.push([i, j]);
    }
  return out;
})();

export interface LanceA {
  de: number;
  para: number;
  /** a peça saltada (captura) */
  capturada: number | null;
}

export interface AlquerqueState {
  regra: RegraA;
  casas: (JogadorA | null)[];
  /** um número para cada peça (para a regra de Bell de não voltar a um ponto) */
  ids: (number | null)[];
  /** os pontos onde cada peça já esteve (regra de Bell) */
  visitados: Record<number, number[]>;
  vez: JogadorA;
  /** a peça no meio de uma sequência de saltos (a vez continua com ela) */
  seq: number | null;
  vencedor: JogadorA | 'empate' | null;
  /** lances seguidos sem captura */
  semCaptura: number;
  ultimo: LanceA | null;
}

export const LIMITE_SEM_CAPTURA = 40;

/**
 * Posição inicial: o jogador 0 (claras) embaixo, o 1 (escuras) em cima. Cada um ocupa as duas
 * fileiras de perto e, na fileira do meio, os dois pontos à sua direita.
 */
export function createInitialState(regra: RegraA = 'livro'): AlquerqueState {
  const casas: (JogadorA | null)[] = Array(LADO * LADO).fill(null);
  for (let c = 0; c < LADO; c++) {
    casas[idx(0, c)] = 1;
    casas[idx(1, c)] = 1;
    casas[idx(3, c)] = 0;
    casas[idx(4, c)] = 0;
  }
  casas[idx(2, 3)] = 0;
  casas[idx(2, 4)] = 0;
  casas[idx(2, 0)] = 1;
  casas[idx(2, 1)] = 1;
  let n = 0;
  const ids = casas.map((v) => (v === null ? null : n++));
  const visitados: Record<number, number[]> = {};
  ids.forEach((id, i) => {
    if (id !== null) visitados[id] = [i];
  });
  return { regra, casas, ids, visitados, vez: 0, seq: null, vencedor: null, semCaptura: 0, ultimo: null };
}

/** para onde é “para frente” de cada jogador */
const frente = (j: JogadorA) => (j === 0 ? -1 : 1);
const ultimaFileira = (j: JogadorA) => (j === 0 ? 0 : LADO - 1);

function capturasDe(s: AlquerqueState, i: number): LanceA[] {
  const j = s.casas[i];
  if (j === null || j === undefined) return [];
  const out: LanceA[] = [];
  for (let d = 0; d < 8; d++) {
    const meio = vizinho(i, d);
    if (meio === null || s.casas[meio] === null || s.casas[meio] === j) continue;
    const para = vizinho(meio, d);
    if (para === null || s.casas[para] !== null) continue;
    if (s.regra === 'bell' && s.visitados[s.ids[i]!]?.includes(para)) continue;
    out.push({ de: i, para, capturada: meio });
  }
  return out;
}

function simplesDe(s: AlquerqueState, i: number): LanceA[] {
  const j = s.casas[i] as JogadorA;
  if (s.regra === 'bell' && rc(i)[0] === ultimaFileira(j)) return [];
  const out: LanceA[] = [];
  for (let d = 0; d < 8; d++) {
    const para = vizinho(i, d);
    if (para === null || s.casas[para] !== null) continue;
    if (s.regra === 'bell') {
      if (DIRECOES[d]![0] === -frente(j)) continue; // para trás
      if (s.visitados[s.ids[i]!]?.includes(para)) continue;
    }
    out.push({ de: i, para, capturada: null });
  }
  return out;
}

/** Os lances legais de quem tem a vez. */
export function lancesLegais(s: AlquerqueState): LanceA[] {
  if (s.vencedor !== null) return [];
  if (s.seq !== null) return capturasDe(s, s.seq);
  const caps: LanceA[] = [];
  const simples: LanceA[] = [];
  for (let i = 0; i < s.casas.length; i++) {
    if (s.casas[i] !== s.vez) continue;
    caps.push(...capturasDe(s, i));
    simples.push(...simplesDe(s, i));
  }
  if (s.regra === 'bell' && caps.length > 0) return caps;
  return [...caps, ...simples];
}

const outro = (j: JogadorA): JogadorA => (j === 0 ? 1 : 0);

/** Passa a vez ao outro e confere o fim (sem peças ou sem lance: perde). */
function trocarVez(s: AlquerqueState): AlquerqueState {
  const o = outro(s.vez);
  const t = { ...s, vez: o, seq: null };
  if (!t.casas.includes(o)) return { ...t, vencedor: s.vez };
  if (t.semCaptura >= LIMITE_SEM_CAPTURA) return { ...t, vencedor: 'empate' };
  if (lancesLegais(t).length === 0) return { ...t, vencedor: s.vez };
  return t;
}

/** Joga o lance; devolve o mesmo estado se não pode. */
export function jogar(s: AlquerqueState, l: LanceA): AlquerqueState {
  const legal = lancesLegais(s).find((x) => x.de === l.de && x.para === l.para);
  if (!legal) return s;
  const casas = [...s.casas];
  const ids = [...s.ids];
  const id = ids[legal.de]!;
  casas[legal.para] = casas[legal.de]!;
  ids[legal.para] = id;
  casas[legal.de] = null;
  ids[legal.de] = null;
  if (legal.capturada !== null) {
    casas[legal.capturada] = null;
    ids[legal.capturada] = null;
  }
  const visitados = { ...s.visitados, [id]: [...(s.visitados[id] ?? []), legal.para] };
  const t: AlquerqueState = { ...s, casas, ids, visitados, ultimo: legal, semCaptura: legal.capturada !== null ? 0 : s.semCaptura + 1, seq: null };
  // depois de capturar, a mesma peça continua saltando enquanto der
  if (legal.capturada !== null) {
    const mais = capturasDe(t, legal.para);
    if (mais.length > 0 && t.casas.includes(outro(s.vez))) return { ...t, seq: legal.para };
  }
  return trocarVez(t);
}

export const contar = (s: AlquerqueState, j: JogadorA) => s.casas.filter((c) => c === j).length;
