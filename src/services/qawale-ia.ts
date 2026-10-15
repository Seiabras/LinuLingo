/**
 * O Linu no Qawale. Cada lance espalha uma pilha inteira, e o número de caminhos cresce rápido; por
 * isso a busca é curta. A nota de uma posição olha as 10 linhas pelo alto das pilhas: uma linha só
 * com pedras minhas por cima (e casas sem dono) vale mais quanto mais pedras minhas tiver; a do
 * adversário vale o mesmo, com sinal trocado. Fácil: o melhor lance pela nota, com bastante ruído.
 * Médio: o melhor lance que não deixa o adversário vencer em seguida (olhando uma amostra das
 * respostas). Difícil: o mesmo, olhando todas as respostas dos lances mais promissores, e preferindo
 * a posição que ele deixa pior para o adversário, até 700 ms.
 */
import type { NivelLinu } from './jogos-prefs';
import { LINHAS, jogar, lancesQawale, outroQ, topos, type JogadorQ, type LanceQ, type QawaleState } from './qawale-engine';

const VITORIA = 1_000_000;
const PESO = [0, 1, 4, 20, 0];

export const NIVEIS_QAWALE: Record<NivelLinu, { ruido: number; candidatos: number; respostas: number; ms: number }> = {
  facil: { ruido: 30, candidatos: 0, respostas: 0, ms: 0 },
  medio: { ruido: 2, candidatos: 12, respostas: 300, ms: 450 },
  dificil: { ruido: 0, candidatos: 30, respostas: 1500, ms: 700 },
};

/** Nota da posição do ponto de vista de `j`. */
export function avaliarQawale(s: QawaleState, j: JogadorQ): number {
  if (s.winner === j) return VITORIA;
  if (s.winner === outroQ(j)) return -VITORIA;
  if (s.winner === 'empate') return 0;
  const t = topos(s.pilhas);
  let nota = 0;
  for (const l of LINHAS) {
    let meus = 0;
    let deles = 0;
    for (const i of l) {
      if (t[i] === j) meus++;
      else if (t[i] === outroQ(j)) deles++;
    }
    if (deles === 0) nota += PESO[meus]!;
    if (meus === 0) nota -= PESO[deles]!;
  }
  return nota;
}

/** O lance do Linu, ou null se ele não tem lance. */
export function lanceQawale(s: QawaleState, nivel: NivelLinu, semente: () => number = Math.random): LanceQ | null {
  const j = s.turn;
  const { ruido, candidatos, respostas, ms } = NIVEIS_QAWALE[nivel];
  const lances = lancesQawale(s, 2500, semente);
  if (lances.length === 0) return null;
  const filhos = lances.map((l) => ({ l, f: jogar(s, l) }));
  const ganha = filhos.find((x) => x.f.winner === j);
  if (ganha) return ganha.l;
  const notas = filhos.map((x) => avaliarQawale(x.f, j) + (ruido > 0 ? semente() * ruido : 0));
  const ordem = filhos.map((_, k) => k).sort((a, b) => notas[b]! - notas[a]!);
  if (candidatos === 0) return filhos[ordem[0]!]!.l;

  // olha as respostas do adversário aos lances mais promissores
  const ate = Date.now() + ms;
  let melhor = ordem[0]!;
  let notaMelhor = -Infinity;
  for (const k of ordem.slice(0, candidatos)) {
    if (Date.now() > ate && notaMelhor > -Infinity) break;
    const f = filhos[k]!.f;
    if (f.winner === outroQ(j)) continue; // o próprio lance dá a vitória ao adversário
    if (f.winner === 'empate') {
      if (0 > notaMelhor) {
        notaMelhor = 0;
        melhor = k;
      }
      continue;
    }
    // a pior resposta para o Linu
    let pior = Infinity;
    for (const l2 of lancesQawale(f, Math.max(20, Math.floor(respostas / 16)), semente).slice(0, respostas)) {
      const g = jogar(f, l2);
      const n = avaliarQawale(g, j);
      if (n < pior) pior = n;
      if (pior <= -VITORIA) break;
    }
    const nota = pior + notas[k]! * 0.01;
    if (nota > notaMelhor) {
      notaMelhor = nota;
      melhor = k;
    }
  }
  return filhos[melhor]!.l;
}
