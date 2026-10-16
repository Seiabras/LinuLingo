/**
 * O Linu no go. A busca negamax dos outros jogos não serve aqui: no 19×19 são até 361 jogadas por
 * vez, e a posição só se entende de verdade no fim. Por isso o Linu joga por heurística, como os
 * primeiros programas de go: cada jogada ganha uma nota pelo território que ela ajuda a cercar
 * (estimado pela influência das pedras, que cai com a distância) e pelas táticas básicas —
 * capturar, tirar um grupo seu do atari, pôr um grupo do outro em atari, não se pôr em atari e nunca
 * tapar um olho seu. No difícil, ele ainda olha a melhor resposta do outro para as melhores jogadas.
 * Passa quando nenhuma jogada vale mais nada (ou o outro passou e não há o que ganhar).
 */
import type { NivelLinu } from './jogos-prefs';
import { grupo, jogadaLegal, jogar, vizinhos, type Cor, type GoState, type Ponto } from './go-engine';

export type LanceGo = number | 'passe';

const outra = (c: Cor): Cor => (c === 'b' ? 'w' : 'b');

/** Território estimado de `cor` menos o do outro: pedras mais os pontos vazios onde a influência dela é maior. */
export function estimativa(board: Ponto[], n: number, cor: Cor): number {
  const inf = new Float32Array(n * n);
  for (let i = 0; i < board.length; i++) {
    const p = board[i];
    if (!p) continue;
    const sinal = p === cor ? 1 : -1;
    const r = Math.floor(i / n);
    const c = i % n;
    for (let dr = -3; dr <= 3; dr++)
      for (let dc = -3; dc <= 3; dc++) {
        const d = Math.abs(dr) + Math.abs(dc);
        if (d > 3) continue;
        const rr = r + dr;
        const cc = c + dc;
        if (rr < 0 || cc < 0 || rr >= n || cc >= n) continue;
        inf[rr * n + cc]! += sinal * (4 - d);
      }
  }
  let nota = 0;
  for (let i = 0; i < board.length; i++) {
    const p = board[i];
    if (p) nota += p === cor ? 1 : -1;
    else if (inf[i]! > 0.5) nota += 1;
    else if (inf[i]! < -0.5) nota -= 1;
  }
  return nota;
}

/** Ponto vazio cercado só por pedras de `cor` (um olho dela): tapar é jogar fora uma liberdade. */
function olhoDe(board: Ponto[], i: number, n: number, cor: Cor): boolean {
  return vizinhos(i, n).every((v) => board[v] === cor);
}

/** Os pontos que valem a pena olhar: no tabuleiro grande, só perto das pedras (e os pontos de abertura). */
function candidatas(s: GoState): number[] {
  const n = s.tamanho;
  const pedras = s.board.filter(Boolean).length;
  const perto = new Set<number>();
  if (n > 9 && pedras > 0) {
    for (let i = 0; i < s.board.length; i++) {
      if (!s.board[i]) continue;
      const r = Math.floor(i / n);
      const c = i % n;
      for (let dr = -2; dr <= 2; dr++)
        for (let dc = -2; dc <= 2; dc++) {
          const rr = r + dr;
          const cc = c + dc;
          if (rr >= 0 && cc >= 0 && rr < n && cc < n) perto.add(rr * n + cc);
        }
    }
  }
  const out: number[] = [];
  for (let i = 0; i < s.board.length; i++) {
    if (s.board[i] !== null || olhoDe(s.board, i, n, s.turn)) continue;
    const r = Math.floor(i / n);
    const c = i % n;
    const linha = Math.min(r, c, n - 1 - r, n - 1 - c);
    // no começo do tabuleiro grande, também as 3ª e 4ª linhas (onde se abre a partida)
    if (n > 9 && pedras > 0 && !perto.has(i) && !(pedras < 12 && (linha === 2 || linha === 3))) continue;
    if (jogadaLegal(s, i)) out.push(i);
  }
  return out;
}

/** Quantas pedras de `cor` estão em grupos com uma liberdade só. */
function emAtari(board: Ponto[], n: number, cor: Cor): number {
  const visto = new Set<number>();
  let total = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== cor || visto.has(i)) continue;
    const g = grupo(board, i, n);
    for (const p of g.pedras) visto.add(p);
    if (g.liberdades === 1) total += g.pedras.length;
  }
  return total;
}

/** A nota de pôr a pedra em `i`, para quem tem a vez. */
function notaDaJogada(s: GoState, i: number): number {
  const n = s.tamanho;
  const eu = s.turn;
  const ele = outra(eu);
  const t = jogar(s, i);
  if (t === s) return -Infinity;
  let nota = estimativa(t.board, n, eu) - estimativa(s.board, n, eu);
  const capturou = t.capturas[eu] - s.capturas[eu];
  nota += capturou * 6;
  // as minhas pedras que ficam em atari (o outro captura na próxima): isso cobre tanto tirar um
  // grupo do atari quanto não se pôr em atari; e os grupos do outro que eu ponho em atari
  nota -= 10 * emAtari(t.board, n, eu);
  for (const v of vizinhos(i, n)) {
    if (t.board[v] !== ele) continue;
    const g = grupo(t.board, v, n);
    if (g.liberdades === 1) nota += 2 * g.pedras.length;
  }
  // abertura: no começo, a 3ª e a 4ª linhas valem mais que a borda
  const pedras = s.board.filter(Boolean).length;
  if (pedras < n) {
    const r = Math.floor(i / n);
    const c = i % n;
    const linha = Math.min(r, c, n - 1 - r, n - 1 - c);
    nota += linha === 2 || linha === 3 ? 1.5 : linha <= 1 ? -1.5 : 0;
  }
  return nota;
}

function melhores(s: GoState, quantas: number): { i: number; nota: number }[] {
  return candidatas(s)
    .map((i) => ({ i, nota: notaDaJogada(s, i) }))
    .filter((x) => x.nota > -Infinity)
    .sort((a, b) => b.nota - a.nota)
    .slice(0, quantas);
}

export function lanceGo(s: GoState, nivel: NivelLinu, semente = Math.random): LanceGo {
  if (s.fase !== 'jogando') return 'passe';
  let lista = melhores(s, nivel === 'facil' ? 6 : 8);
  if (lista.length === 0) return 'passe';
  if (nivel === 'dificil') {
    // a melhor resposta do outro para cada uma das melhores: fica a que deixa ele com menos
    lista = lista
      .map((x) => {
        const t = jogar(s, x.i);
        const resposta = melhores(t, 4)[0]?.nota ?? 0;
        return { i: x.i, nota: x.nota - 0.7 * Math.max(0, resposta) };
      })
      .sort((a, b) => b.nota - a.nota);
  }
  const melhor = lista[0]!;
  // não há mais o que ganhar: passa (se o outro passou, isso leva à contagem)
  if (melhor.nota < 0.5 && (s.passes > 0 || s.board.filter(Boolean).length > s.tamanho * s.tamanho * 0.4)) return 'passe';
  if (nivel === 'facil') {
    // às vezes escolhe uma das outras boas, não sempre a melhor
    const boas = lista.filter((x) => x.nota >= melhor.nota - 6);
    return boas[Math.floor(semente() * boas.length)]!.i;
  }
  return melhor.i;
}
