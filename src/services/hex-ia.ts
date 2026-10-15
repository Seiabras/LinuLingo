/**
 * O Linu no Hex.
 *
 * - Fácil: para cada casa vazia, mede a menor distância (quantas casas faltam) de cada um até ligar os
 *   seus lados, e escolhe a que mais encurta a dele e alonga a sua, com bastante ruído.
 * - Médio e difícil: Monte Carlo. Enche o tabuleiro ao acaso muitas vezes, a partir da posição, e vê
 *   quem ganhou (no Hex o tabuleiro cheio sempre tem um vencedor). Cada casa que ficou com a cor do Linu
 *   numa partida que ele ganhou conta a favor dela (a técnica “todos os lances como primeiro”, AMAF).
 *   O médio faz 1500 partidas; o difícil enche quantas der em 650 ms.
 * - Sempre: se dá para ganhar num lance, ganha; se o adversário ganha num lance, tapa.
 * - Regra da troca: no segundo lance, o Linu troca quando a primeira pedra está longe das beiras; quando
 *   ele começa, joga numa beira, que não vale a pena trocar.
 */
import type { NivelLinu } from './jogos-prefs';
import { distancia, jogar, podeTrocar, type CasaH, type HexState, type JogadorH } from './hex-engine';

export type LanceHex = number | 'troca';

export const NIVEIS_HEX: Record<NivelLinu, { partidas: number; ms: number; ruido: number }> = {
  facil: { partidas: 0, ms: 0, ruido: 2.5 },
  medio: { partidas: 1500, ms: 0, ruido: 0 },
  dificil: { partidas: Infinity, ms: 650, ruido: 0 },
};

/** Quem venceu no tabuleiro cheio (0 liga cima-baixo; se não ligou, venceu o 1). */
function vencedorCheio(n: number, b: Int8Array, vis: Uint8Array, fila: Int32Array): JogadorH {
  vis.fill(0);
  let fim = 0;
  for (let c = 0; c < n; c++)
    if (b[c] === 0) {
      vis[c] = 1;
      fila[fim++] = c;
    }
  for (let k = 0; k < fim; k++) {
    const i = fila[k]!;
    const r = (i / n) | 0;
    const c = i - r * n;
    if (r === n - 1) return 0;
    const viz = [r > 0 ? i - n : -1, r > 0 && c < n - 1 ? i - n + 1 : -1, c > 0 ? i - 1 : -1, c < n - 1 ? i + 1 : -1, r < n - 1 && c > 0 ? i + n - 1 : -1, r < n - 1 ? i + n : -1];
    for (const v of viz)
      if (v >= 0 && !vis[v] && b[v] === 0) {
        vis[v] = 1;
        fila[fim++] = v;
      }
  }
  return 1;
}

function porDistancia(s: HexState, livres: number[], ruido: number, rng: () => number): number {
  const eu = s.turn;
  const ele: JogadorH = eu === 0 ? 1 : 0;
  let melhor = livres[0]!;
  let nota = -Infinity;
  for (const i of livres) {
    const b: CasaH[] = s.board.slice();
    b[i] = eu;
    const v = distancia(s.n, b, ele) - distancia(s.n, b, eu) + rng() * ruido;
    if (v > nota) {
      nota = v;
      melhor = i;
    }
  }
  return melhor;
}

function monteCarlo(s: HexState, livres: number[], partidas: number, ms: number, rng: () => number): number {
  const { n } = s;
  const eu = s.turn;
  const base = new Int8Array(n * n);
  s.board.forEach((v, i) => (base[i] = v === null ? -1 : v));
  const b = new Int8Array(n * n);
  const vis = new Uint8Array(n * n);
  const fila = new Int32Array(n * n);
  const ganhos = new Float64Array(n * n);
  const vezes = new Float64Array(n * n);
  const ordem = livres.slice();
  const ate = ms > 0 ? Date.now() + ms : 0;
  for (let p = 0; p < partidas; p++) {
    if (ate && (p & 63) === 0 && Date.now() > ate) break;
    b.set(base);
    // embaralha as casas livres e preenche alternando, a começar por quem tem a vez
    for (let k = ordem.length - 1; k > 0; k--) {
      const x = Math.floor(rng() * (k + 1));
      const t = ordem[k]!;
      ordem[k] = ordem[x]!;
      ordem[x] = t;
    }
    for (let k = 0; k < ordem.length; k++) b[ordem[k]!] = k % 2 === 0 ? eu : eu === 0 ? 1 : 0;
    const ganhou = vencedorCheio(n, b, vis, fila) === eu ? 1 : 0;
    for (const i of livres)
      if (b[i] === eu) {
        vezes[i]++;
        ganhos[i] += ganhou;
      }
  }
  let melhor = livres[0]!;
  let nota = -Infinity;
  for (const i of livres) {
    const v = vezes[i]! > 0 ? ganhos[i]! / vezes[i]! : 0;
    if (v > nota) {
      nota = v;
      melhor = i;
    }
  }
  return melhor;
}

/** O lance do Linu: uma casa, ou 'troca' (regra da troca). null se a partida acabou. */
export function lanceHex(s: HexState, nivel: NivelLinu, rng: () => number = Math.random): LanceHex | null {
  if (s.winner !== null) return null;
  const { n } = s;
  const livres: number[] = [];
  for (let i = 0; i < n * n; i++) if (s.board[i] === null) livres.push(i);
  if (livres.length === 0) return null;

  // regra da troca
  if (podeTrocar(s) && nivel !== 'facil' && s.ultimo !== null) {
    const r = Math.floor(s.ultimo / n);
    const c = s.ultimo % n;
    const longe = Math.min(r, c, n - 1 - r, n - 1 - c);
    if (longe >= 2) return 'troca';
  }
  if (s.troca && s.lances === 0) {
    // começando com a troca valendo: uma beira, para não valer a pena trocar
    const c = 1 + Math.floor(rng() * (n - 2));
    return s.turn === 0 ? c : c * n;
  }

  // ganha num lance, ou tapa o lance que ganharia para o adversário
  for (const i of livres) if (jogar(s, i).winner === s.turn) return i;
  const ele: JogadorH = s.turn === 0 ? 1 : 0;
  for (const i of livres) if (jogar({ ...s, turn: ele }, i).winner === ele) return i;

  const { partidas, ms, ruido } = NIVEIS_HEX[nivel];
  if (partidas === 0) return porDistancia(s, livres, ruido, rng);
  return monteCarlo(s, livres, partidas, ms, rng);
}
