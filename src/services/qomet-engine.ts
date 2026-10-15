/**
 * Motor do Qomet (Fabrice Puleo, Gigamic, 2025), só a mecânica. Regras da folha oficial da Gigamic
 * (“® & © Gigamic 2025”, 07-2025), nas versões francesa e inglesa; fontes em `data/jogos-conhecimento.ts`.
 *
 * O tabuleiro é o da trilha de 12 peças (três quadrados um dentro do outro, ligados pelas linhas do
 * meio e pelas diagonais dos cantos) com um ponto a mais no centro: 25 casas. As casas ficam em
 * coordenadas (x, y) de −3 a 3: o quadrado de fora tem raio 3, o do meio 2, o de dentro 1.
 *
 * Na vez: pôr uma estrela da mão numa casa vazia, OU deslizar uma estrela sua até a próxima casa ao
 * longo de uma linha (na horizontal, na vertical ou na diagonal). Se a casa está ocupada (por
 * qualquer cor), empurra aquela estrela para a casa seguinte na mesma direção, se ela estiver vazia;
 * só uma de cada vez. Do quadrado de fora, dá para empurrar uma estrela para fora do tabuleiro (ela
 * volta para a mão do dono) ou tirar a sua. Não vale desfazer o lance anterior do adversário.
 * Ganha quem forma um quadrado de 4 estrelas da sua cor ligadas pelas linhas; se o seu lance forma
 * um quadrado do adversário (sozinho ou junto com o seu), ganha o adversário.
 */
export type JogadorQ = 0 | 1;

export const ESTRELAS = 7;

/** as 25 casas, em (x, y) */
export const CASAS: [number, number][] = (() => {
  const out: [number, number][] = [];
  for (const r of [3, 2, 1]) for (const y of [-r, 0, r]) for (const x of [-r, 0, r]) if (x !== 0 || y !== 0) out.push([x, y]);
  out.push([0, 0]);
  return out;
})();
export const CENTRO = CASAS.length - 1;
const indice = new Map(CASAS.map(([x, y], i) => [`${x},${y}`, i]));
export const casaEm = (x: number, y: number): number | undefined => indice.get(`${x},${y}`);
/** a casa está no quadrado de fora? */
export const naBorda = (i: number) => Math.max(Math.abs(CASAS[i]![0]), Math.abs(CASAS[i]![1])) === 3;

/** As linhas do tabuleiro, cada uma como a lista ordenada das casas por onde passa. */
export const LINHAS: number[][] = (() => {
  const L: [number, number][][] = [];
  for (const r of [1, 2, 3]) {
    L.push([[-r, -r], [0, -r], [r, -r]], [[-r, r], [0, r], [r, r]], [[-r, -r], [-r, 0], [-r, r]], [[r, -r], [r, 0], [r, r]]);
  }
  const meio = [-3, -2, -1, 0, 1, 2, 3];
  L.push(meio.map((x) => [x, 0]), meio.map((y) => [0, y]), meio.map((k) => [k, k]), meio.map((k) => [-k, k]));
  return L.map((l) => l.map(([x, y]) => casaEm(x, y)!));
})();

/** as 8 direções: [dx, dy] */
export const DIRECOES: [number, number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

const sinal = (n: number) => (n > 0 ? 1 : n < 0 ? -1 : 0);

/**
 * A próxima casa a partir de `i` na direção `d`, ao longo de uma linha: o número da casa, `'fora'`
 * (do quadrado de fora, a linha acaba e a estrela sai do tabuleiro) ou `null` (não há linha nessa
 * direção, ou a linha acaba dentro do tabuleiro).
 */
export const PROXIMA: (number | 'fora' | null)[][] = CASAS.map((_, i) =>
  DIRECOES.map(([dx, dy]) => {
    for (const l of LINHAS) {
      const k = l.indexOf(i);
      if (k < 0 || l.length < 2) continue;
      const [ax, ay] = CASAS[l[0]!]!;
      const [bx, by] = CASAS[l[1]!]!;
      const ux = sinal(bx - ax);
      const uy = sinal(by - ay);
      if (ux === dx && uy === dy) return k + 1 < l.length ? l[k + 1]! : naBorda(i) ? 'fora' : null;
      if (ux === -dx && uy === -dy) return k > 0 ? l[k - 1]! : naBorda(i) ? 'fora' : null;
    }
    return null;
  }),
);

/** Os quadrados que valem: 4 casas nos cantos de um quadrado, com os 4 lados sobre linhas. */
export const QUADRADOS: number[][] = (() => {
  const mesmaLinha = (a: number, b: number) => LINHAS.some((l) => l.includes(a) && l.includes(b));
  const vistos = new Set<string>();
  const out: number[][] = [];
  for (let a = 0; a < CASAS.length; a++)
    for (let b = 0; b < CASAS.length; b++) {
      if (a === b || !mesmaLinha(a, b)) continue;
      const [ax, ay] = CASAS[a]!;
      const [bx, by] = CASAS[b]!;
      const [vx, vy] = [bx - ax, by - ay];
      const c = casaEm(bx - vy, by + vx);
      const d = casaEm(ax - vy, ay + vx);
      if (c === undefined || d === undefined) continue;
      if (!mesmaLinha(b, c) || !mesmaLinha(c, d) || !mesmaLinha(d, a)) continue;
      const q = [a, b, c, d].sort((x, y) => x - y);
      const k = q.join(',');
      if (!vistos.has(k)) {
        vistos.add(k);
        out.push(q);
      }
    }
  return out;
})();

export type LanceQ = { tipo: 'colocar'; casa: number } | { tipo: 'mover'; de: number; dir: number };

export interface UltimoQ {
  quem: JogadorQ;
  tipo: 'colocar' | 'mover';
  /** de onde a estrela saiu (só no mover) */
  de?: number;
  /** para onde foi (null = saiu do tabuleiro) */
  para: number | null;
  /** a estrela empurrada: de onde, para onde (null = para fora) e de quem é */
  empurrada?: { de: number; para: number | null; dono: JogadorQ };
}

export interface QometState {
  casas: (JogadorQ | null)[];
  vez: JogadorQ;
  vencedor: JogadorQ | null;
  /** o quadrado que decidiu a partida */
  quadrado: number[] | null;
  /** venceu porque o outro formou o quadrado dele */
  porEngano: boolean;
  /** o tabuleiro antes do último lance (para não deixar desfazê-lo) */
  anterior: string | null;
  ultimo: UltimoQ | null;
  /** quantas vezes alguém passou a vez por não ter lance (o manual não prevê; ver `jogar`) */
  passou: number;
}

export const createInitialState = (comeca: JogadorQ = 0): QometState => ({
  casas: Array(CASAS.length).fill(null),
  vez: comeca,
  vencedor: null,
  quadrado: null,
  porEngano: false,
  anterior: null,
  ultimo: null,
  passou: 0,
});

const chaveDe = (casas: (JogadorQ | null)[]) => casas.map((c) => (c === null ? '.' : c)).join('');
export const naMao = (s: QometState, j: JogadorQ) => ESTRELAS - s.casas.filter((c) => c === j).length;
export const quadradoDe = (casas: (JogadorQ | null)[], j: JogadorQ): number[] | null => QUADRADOS.find((q) => q.every((i) => casas[i] === j)) ?? null;

/** Aplica o lance sem conferir o “não desfazer”; `null` se o lance não pode. */
function mexer(s: QometState, l: LanceQ): { casas: (JogadorQ | null)[]; ultimo: UltimoQ } | null {
  const j = s.vez;
  const casas = [...s.casas];
  if (l.tipo === 'colocar') {
    if (casas[l.casa] !== null || casas[l.casa] === undefined || naMao(s, j) <= 0) return null;
    casas[l.casa] = j;
    return { casas, ultimo: { quem: j, tipo: 'colocar', para: l.casa } };
  }
  if (casas[l.de] !== j) return null;
  const alvo = PROXIMA[l.de]![l.dir];
  if (alvo === null || alvo === undefined) return null;
  if (alvo === 'fora') {
    casas[l.de] = null;
    return { casas, ultimo: { quem: j, tipo: 'mover', de: l.de, para: null } };
  }
  const ocupante = casas[alvo];
  let empurrada: UltimoQ['empurrada'];
  if (ocupante !== null) {
    const depois = PROXIMA[alvo]![l.dir];
    if (depois === null || depois === undefined) return null;
    if (depois !== 'fora' && casas[depois] !== null) return null; // só uma estrela de cada vez
    if (depois !== 'fora') casas[depois] = ocupante;
    empurrada = { de: alvo, para: depois === 'fora' ? null : depois, dono: ocupante! };
  }
  casas[alvo] = j;
  casas[l.de] = null;
  return { casas, ultimo: { quem: j, tipo: 'mover', de: l.de, para: alvo, empurrada } };
}

/** Todos os lances legais de quem tem a vez. */
export function lancesLegais(s: QometState): LanceQ[] {
  if (s.vencedor !== null) return [];
  const out: LanceQ[] = [];
  const pode = (l: LanceQ) => {
    const r = mexer(s, l);
    return r !== null && chaveDe(r.casas) !== s.anterior;
  };
  if (naMao(s, s.vez) > 0) for (let i = 0; i < CASAS.length; i++) if (s.casas[i] === null && pode({ tipo: 'colocar', casa: i })) out.push({ tipo: 'colocar', casa: i });
  for (let i = 0; i < CASAS.length; i++) {
    if (s.casas[i] !== s.vez) continue;
    for (let d = 0; d < DIRECOES.length; d++) if (pode({ tipo: 'mover', de: i, dir: d })) out.push({ tipo: 'mover', de: i, dir: d });
  }
  return out;
}

/** Para a tela: para onde a estrela em `de` pode ir (null = para fora). */
export function destinosDe(s: QometState, de: number): { dir: number; para: number | 'fora' }[] {
  return lancesLegais(s)
    .filter((l): l is Extract<LanceQ, { tipo: 'mover' }> => l.tipo === 'mover' && l.de === de)
    .map((l) => ({ dir: l.dir, para: PROXIMA[de]![l.dir]! as number | 'fora' }));
}

/**
 * Joga o lance; devolve o mesmo estado se o lance não pode. Se quem tem a vez não tem lance nenhum,
 * o manual não diz o que fazer: aqui, ele passa a vez (`passar`).
 */
export function jogar(s: QometState, l: LanceQ): QometState {
  if (s.vencedor !== null) return s;
  const r = mexer(s, l);
  if (!r || chaveDe(r.casas) === s.anterior) return s;
  const j = s.vez;
  const o: JogadorQ = j === 0 ? 1 : 0;
  const meu = quadradoDe(r.casas, j);
  const dele = quadradoDe(r.casas, o);
  const vencedor: JogadorQ | null = dele ? o : meu ? j : null;
  return {
    casas: r.casas,
    vez: o,
    vencedor,
    quadrado: dele ?? meu,
    porEngano: !!dele,
    anterior: chaveDe(s.casas),
    ultimo: r.ultimo,
    passou: s.passou,
  };
}

/** Passa a vez quando não há lance (o manual não prevê; aqui, para a partida não travar). */
export function passar(s: QometState): QometState {
  if (s.vencedor !== null || lancesLegais(s).length > 0) return s;
  return { ...s, vez: s.vez === 0 ? 1 : 0, anterior: null, ultimo: null, passou: s.passou + 1 };
}
