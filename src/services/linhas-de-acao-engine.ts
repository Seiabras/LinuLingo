/**
 * Motor das Linhas de ação (Lines of Action, Claude Soucie; regras em “A Gamut of Games”, de Sid
 * Sackson, 1969). Fontes em `data/jogos-conhecimento.ts`.
 *
 * 8×8. As pretas (jogador 0) começam em b1–g1 e b8–g8; as brancas (1), em a2–a7 e h2–h7. As pretas
 * começam. A peça anda em linha reta (horizontal, vertical ou diagonal) EXATAMENTE tantas casas
 * quantas são as peças (das duas cores) na linha inteira em que ela se move. Pode pular as suas,
 * nunca as do outro; cai numa casa vazia ou numa peça do outro, que é capturada. Vence quem junta
 * todas as suas peças num grupo só, ligadas também na diagonal; quem fica com uma peça só já está
 * “junto”. Se um lance junta os dois lados ao mesmo tempo, é empate (a regra de 1969 e a dos
 * torneios de hoje). Sem lance, passa a vez; e, para a partida não durar para sempre, aqui ela
 * empata depois de 200 lances.
 */
export type JogadorL = 0 | 1;
export const LADO = 8;
export const LIMITE_LANCES = 200;
export const idx = (r: number, c: number) => r * LADO + c;
export const rc = (i: number): [number, number] => [Math.floor(i / LADO), i % LADO];
const DIRS: [number, number][] = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

export interface LanceL {
  de: number;
  para: number;
  captura: boolean;
}

export interface LOAState {
  casas: (JogadorL | null)[];
  vez: JogadorL;
  vencedor: JogadorL | 'empate' | null;
  ultimo: LanceL | null;
  lances: number;
}

export function createInitialState(): LOAState {
  const casas: (JogadorL | null)[] = Array(LADO * LADO).fill(null);
  for (let k = 1; k <= 6; k++) {
    casas[idx(0, k)] = 0;
    casas[idx(7, k)] = 0;
    casas[idx(k, 0)] = 1;
    casas[idx(k, 7)] = 1;
  }
  return { casas, vez: 0, vencedor: null, ultimo: null, lances: 0 };
}

/** quantas peças há na linha inteira que passa por (r, c) na direção (dr, dc) */
function pecasNaLinha(casas: (JogadorL | null)[], r: number, c: number, dr: number, dc: number): number {
  let n = 0;
  let rr = r;
  let cc = c;
  while (rr - dr >= 0 && rr - dr < LADO && cc - dc >= 0 && cc - dc < LADO) {
    rr -= dr;
    cc -= dc;
  }
  while (rr >= 0 && rr < LADO && cc >= 0 && cc < LADO) {
    if (casas[idx(rr, cc)] !== null) n++;
    rr += dr;
    cc += dc;
  }
  return n;
}

export function lancesDaPeca(casas: (JogadorL | null)[], de: number): LanceL[] {
  const dono = casas[de];
  if (dono === null || dono === undefined) return [];
  const [r, c] = rc(de);
  const out: LanceL[] = [];
  for (const [dr, dc] of DIRS) {
    const n = pecasNaLinha(casas, r, c, dr, dc);
    const r2 = r + dr * n;
    const c2 = c + dc * n;
    if (r2 < 0 || r2 >= LADO || c2 < 0 || c2 >= LADO) continue;
    let livre = true;
    for (let k = 1; k < n; k++) {
      const v = casas[idx(r + dr * k, c + dc * k)];
      if (v !== null && v !== dono) livre = false;
    }
    const alvo = casas[idx(r2, c2)];
    if (!livre || alvo === dono) continue;
    out.push({ de, para: idx(r2, c2), captura: alvo !== null });
  }
  return out;
}

export function lancesLegais(s: LOAState): LanceL[] {
  if (s.vencedor !== null) return [];
  const out: LanceL[] = [];
  for (let i = 0; i < s.casas.length; i++) if (s.casas[i] === s.vez) out.push(...lancesDaPeca(s.casas, i));
  return out;
}

/** as peças de `j` estão todas num grupo só (vizinhança de 8)? */
export function juntas(casas: (JogadorL | null)[], j: JogadorL): boolean {
  const minhas = casas.flatMap((v, i) => (v === j ? [i] : []));
  if (minhas.length <= 1) return true;
  const visto = new Set([minhas[0]!]);
  const fila = [minhas[0]!];
  while (fila.length) {
    const [r, c] = rc(fila.pop()!);
    for (const [dr, dc] of DIRS) {
      const r2 = r + dr;
      const c2 = c + dc;
      if (r2 < 0 || r2 >= LADO || c2 < 0 || c2 >= LADO) continue;
      const k = idx(r2, c2);
      if (casas[k] === j && !visto.has(k)) {
        visto.add(k);
        fila.push(k);
      }
    }
  }
  return visto.size === minhas.length;
}

export function jogar(s: LOAState, l: LanceL): LOAState {
  if (s.vencedor !== null || s.casas[l.de] !== s.vez) return s;
  const legal = lancesDaPeca(s.casas, l.de).find((x) => x.para === l.para);
  if (!legal) return s;
  const casas = [...s.casas];
  casas[legal.para] = s.vez;
  casas[legal.de] = null;
  const o: JogadorL = s.vez === 0 ? 1 : 0;
  const eu = juntas(casas, s.vez);
  const ele = juntas(casas, o);
  let vencedor: LOAState['vencedor'] = eu && ele ? 'empate' : eu ? s.vez : ele ? o : null;
  const lances = s.lances + 1;
  if (vencedor === null && lances >= LIMITE_LANCES) vencedor = 'empate';
  let t: LOAState = { casas, vez: o, vencedor, ultimo: legal, lances };
  // sem lance: passa a vez
  if (t.vencedor === null && lancesLegais(t).length === 0) t = { ...t, vez: s.vez };
  return t;
}

export const contar = (casas: (JogadorL | null)[], j: JogadorL) => casas.filter((v) => v === j).length;
