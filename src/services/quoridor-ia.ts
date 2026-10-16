/**
 * O Linu no Quoridor. Usa a busca negamax com poda alfa-beta comum dos jogos (`escolherLance` em
 * `jogos-ia.ts`). A nota é a corrida: o caminho mais curto do adversário até a chegada dele menos o
 * meu (paredes no caminho contam; as peças não), mais um pouco pelas paredes que sobram. As paredes
 * possíveis são até 128 por vez: a busca só olha as que cortam os primeiros passos do caminho mais
 * curto do adversário, e dessas fica com as que mais o atrasam — é o que um jogador faz.
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { canPlaceWall, legalPawnMoves, movePawn, placeWall, type PlayerId, type Pos, type QuoridorState, type Wall } from './quoridor-engine';

const VITORIA = 1_000_000;

export type LanceQuoridor = { tipo: 'andar'; para: Pos } | { tipo: 'parede'; parede: Wall };

export const NIVEIS_QUORIDOR: Record<NivelLinu, { prof: number; ruido: number; paredes: number }> = {
  facil: { prof: 1, ruido: 12, paredes: 3 },
  medio: { prof: 2, ruido: 0, paredes: 6 },
  dificil: { prof: 3, ruido: 0, paredes: 8 },
};

const DIRS: [number, number][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/** As bordas fechadas por paredes (mesma convenção do motor: 'v' entre linhas, 'h' entre colunas). */
function fechadas(walls: Wall[]): Set<string> {
  const s = new Set<string>();
  for (const w of walls)
    if (w.orientation === 'h') {
      s.add(`v:${w.row}:${w.col}`);
      s.add(`v:${w.row}:${w.col + 1}`);
    } else {
      s.add(`h:${w.row}:${w.col}`);
      s.add(`h:${w.row + 1}:${w.col}`);
    }
  return s;
}

const aberta = (r: number, c: number, r2: number, c2: number, b: Set<string>) => (r === r2 ? !b.has(`h:${r}:${Math.min(c, c2)}`) : !b.has(`v:${Math.min(r, r2)}:${c}`));
const chegada = (s: QuoridorState, p: PlayerId) => (p === 0 ? s.n - 1 : 0);

/** O caminho mais curto (lista de casas, do começo à chegada) do jogador `p`, ignorando as peças. */
function caminho(s: QuoridorState, p: PlayerId, b: Set<string>): Pos[] | null {
  const n = s.n;
  const ini = s.pawns[p];
  const alvo = chegada(s, p);
  const pai = new Map<number, number>();
  const k0 = ini.row * n + ini.col;
  pai.set(k0, -1);
  const fila = [k0];
  for (let i = 0; i < fila.length; i++) {
    const k = fila[i]!;
    const r = Math.floor(k / n);
    const c = k % n;
    if (r === alvo) {
      const out: Pos[] = [];
      for (let x = k; x !== -1; x = pai.get(x)!) out.push({ row: Math.floor(x / n), col: x % n });
      return out.reverse();
    }
    for (const [dr, dc] of DIRS) {
      const r2 = r + dr;
      const c2 = c + dc;
      if (r2 < 0 || c2 < 0 || r2 >= n || c2 >= n || !aberta(r, c, r2, c2, b)) continue;
      const k2 = r2 * n + c2;
      if (pai.has(k2)) continue;
      pai.set(k2, k);
      fila.push(k2);
    }
  }
  return null;
}

const distancia = (s: QuoridorState, p: PlayerId, b = fechadas(s.walls)) => (caminho(s, p, b)?.length ?? 99) - 1;

export function avaliarQuoridor(s: QuoridorState): number {
  const eu = s.turn;
  const ele = (1 - eu) as PlayerId;
  const b = fechadas(s.walls);
  return (distancia(s, ele, b) - distancia(s, eu, b)) * 10 + (s.wallsLeft[eu] - s.wallsLeft[ele]) * 2;
}

/** As paredes que cortam os primeiros passos do caminho mais curto do adversário, as melhores primeiro. */
function paredesBoas(s: QuoridorState, quantas: number): Wall[] {
  if (s.wallsLeft[s.turn] <= 0 || quantas <= 0) return [];
  const eu = s.turn;
  const ele = (1 - eu) as PlayerId;
  const b = fechadas(s.walls);
  const rota = caminho(s, ele, b);
  if (!rota) return [];
  const cand = new Map<string, Wall>();
  for (let i = 0; i + 1 < rota.length && i < 5; i++) {
    const a = rota[i]!;
    const z = rota[i + 1]!;
    // a parede que fecha a borda entre a e z pode estar em dois slots
    if (a.col === z.col) {
      const row = Math.min(a.row, z.row);
      for (const col of [a.col - 1, a.col]) cand.set(`h${row},${col}`, { row, col, orientation: 'h' });
    } else {
      const col = Math.min(a.col, z.col);
      for (const row of [a.row - 1, a.row]) cand.set(`v${row},${col}`, { row, col, orientation: 'v' });
    }
  }
  const meuAntes = distancia(s, eu, b);
  const deleAntes = rota.length - 1;
  const notas: { w: Wall; nota: number }[] = [];
  for (const w of cand.values()) {
    if (!canPlaceWall(s, w)) continue;
    const b2 = fechadas([...s.walls, w]);
    const nota = distancia(s, ele, b2) - deleAntes - (distancia(s, eu, b2) - meuAntes);
    if (nota > 0) notas.push({ w, nota });
  }
  return notas
    .sort((x, y) => y.nota - x.nota)
    .slice(0, quantas)
    .map((x) => x.w);
}

export function lancesQuoridor(s: QuoridorState, paredes = 6): LanceQuoridor[] {
  if (s.winner !== null) return [];
  const andar: LanceQuoridor[] = legalPawnMoves(s).map((para) => ({ tipo: 'andar', para }));
  return [...andar, ...paredesBoas(s, paredes).map((parede): LanceQuoridor => ({ tipo: 'parede', parede }))];
}

export function jogarQuoridor(s: QuoridorState, l: LanceQuoridor): QuoridorState {
  return l.tipo === 'andar' ? movePawn(s, l.para) : placeWall(s, l.parede);
}

const busca = (paredes: number): JogoBusca<QuoridorState, LanceQuoridor> => ({
  lances: (s) => lancesQuoridor(s, paredes),
  aplicar: jogarQuoridor,
  avaliar: avaliarQuoridor,
  // o motor passa a vez também no lance que vence: quem tem a vez é quem perdeu
  fim: (s) => (s.winner === null ? null : s.winner === s.turn ? VITORIA : -VITORIA),
});

export function lanceQuoridor(s: QuoridorState, nivel: NivelLinu, semente = Math.random): LanceQuoridor | null {
  const { prof, ruido, paredes } = NIVEIS_QUORIDOR[nivel];
  return escolherLance(s, prof, busca(paredes), ruido, semente);
}
