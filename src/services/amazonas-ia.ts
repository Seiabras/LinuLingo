/**
 * O Linu no Jogo das Amazonas. Os lances são muitos (2176 só no primeiro), então a busca em árvore
 * comum não serve. O Linu usa a heurística de território mais conhecida do jogo: para cada casa vazia,
 * quantos lances de dama cada lado precisa para chegar nela; a casa “é” de quem chega antes. A nota é
 * a diferença de casas, mais um pouco de mobilidade (as casas que as amazonas alcançam já).
 *   - fácil: essa nota com bastante ruído;
 *   - médio: a melhor nota depois do próprio lance;
 *   - difícil: os melhores lances pela nota passam por mais um teste, a melhor resposta do adversário
 *     (numa amostra das respostas, enquanto houver tempo, para caber em menos de 1 s).
 */
import type { NivelLinu } from './jogos-prefs';
import { alcance, jogarLance, lancesLegais, N_A, outraA, pecaDe, podeJogar, type AmazonasState, type CasaA, type CorA, type LanceA } from './amazonas-engine';

const INF = 99;
const DIRS: [number, number][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

/** Distância em lances de dama, das amazonas da cor até cada casa (pelas casas vazias). */
function distancias(board: CasaA[], cor: CorA): Uint8Array {
  const d = new Uint8Array(N_A * N_A).fill(INF);
  const fila: number[] = [];
  const p = pecaDe(cor);
  for (let i = 0; i < board.length; i++)
    if (board[i] === p) {
      d[i] = 0;
      fila.push(i);
    }
  for (let k = 0; k < fila.length; k++) {
    const i = fila[k]!;
    const r0 = Math.floor(i / N_A);
    const c0 = i % N_A;
    const nd = d[i]! + 1;
    for (const [dr, dc] of DIRS) {
      let r = r0 + dr;
      let c = c0 + dc;
      while (r >= 0 && r < N_A && c >= 0 && c < N_A) {
        const j = r * N_A + c;
        if (board[j] !== 0) break;
        if (d[j] === INF) {
          d[j] = nd;
          fila.push(j);
        }
        r += dr;
        c += dc;
      }
    }
  }
  return d;
}

/** Nota da posição para a cor `eu` (positiva = boa para ela). */
export function avaliarAmazonas(board: CasaA[], eu: CorA): number {
  const meu = distancias(board, eu);
  const dele = distancias(board, outraA(eu));
  let nota = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== 0) continue;
    const a = meu[i]!;
    const b = dele[i]!;
    if (a === INF && b === INF) continue;
    if (a < b) nota += 1;
    else if (b < a) nota -= 1;
    // a casa que só um lado alcança vale um pouco mais (é território garantido)
    if (b === INF && a !== INF) nota += 0.5;
    if (a === INF && b !== INF) nota -= 0.5;
  }
  // mobilidade: as casas que cada lado alcança num lance
  let mob = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === pecaDe(eu)) mob += Math.min(alcance(board, i).length, 12);
    else if (board[i] === pecaDe(outraA(eu))) mob -= Math.min(alcance(board, i).length, 12);
  }
  return nota * 10 + mob;
}

/** Aplica o lance numa cópia de trabalho (sem conferir: os lances vêm de `lancesLegais`). */
function aplicarEm(b: CasaA[], l: LanceA, p: CasaA) {
  b[l.de] = 0;
  b[l.para] = p;
  b[l.flecha] = 3;
}
function desfazerEm(b: CasaA[], l: LanceA, p: CasaA) {
  b[l.flecha] = 0;
  b[l.para] = 0;
  b[l.de] = p;
}

/** Os lances com a nota de cada um (para quem joga), do melhor para o pior. */
function notas(s: AmazonasState, ruido: number, sorteio: () => number): { l: LanceA; nota: number }[] {
  const eu = s.turn;
  const p = pecaDe(eu);
  const b = s.board.slice();
  return lancesLegais(s)
    .map((l) => {
      aplicarEm(b, l, p);
      const nota = !podeJogar(b, outraA(eu)) ? 1e6 : avaliarAmazonas(b, eu) + (ruido > 0 ? sorteio() * ruido : 0);
      desfazerEm(b, l, p);
      return { l, nota };
    })
    .sort((a, b2) => b2.nota - a.nota);
}

export function lanceAmazonas(s: AmazonasState, nivel: NivelLinu, sorteio = Math.random): LanceA | null {
  if (s.winner !== null || s.atirando !== null) return null;
  if (nivel === 'facil') return notas(s, 60, sorteio)[0]?.l ?? null;
  const t0 = Date.now();
  const ns = notas(s, 0, sorteio);
  if (ns.length === 0) return null;
  if (nivel === 'medio' || ns[0]!.nota >= 1e6) return ns[0]!.l;
  // difícil: para os melhores pela nota, a melhor resposta do adversário (numa amostra das respostas),
  // enquanto houver tempo (o lance inteiro fica abaixo de 1 s)
  let melhor = ns[0]!.l;
  let melhorNota = -Infinity;
  const eu = s.turn;
  const outro = outraA(eu);
  for (const { l } of ns.slice(0, 8)) {
    if (Date.now() - t0 > 500) break;
    const depois = jogarLance(s, l);
    const resp = lancesLegais(depois);
    if (resp.length === 0) return l;
    const b = depois.board.slice();
    const po = pecaDe(outro);
    let pior = Infinity;
    const passo = Math.max(1, Math.floor(resp.length / 200));
    for (let k = 0; k < resp.length; k += passo) {
      const r = resp[k]!;
      aplicarEm(b, r, po);
      const v = !podeJogar(b, eu) ? -1e6 : avaliarAmazonas(b, eu);
      desfazerEm(b, r, po);
      if (v < pior) pior = v;
    }
    if (pior > melhorNota) {
      melhorNota = pior;
      melhor = l;
    }
  }
  return melhor;
}
