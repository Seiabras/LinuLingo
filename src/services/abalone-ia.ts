/**
 * O Linu no Abalone. Usa a busca negamax com poda alfa-beta comum dos jogos (`escolherLance` em
 * `jogos-ia.ts`). Os lances são todas as filas de 1 a 3 bolinhas suas, em cada direção que vale (os
 * empurrões primeiro, para a poda cortar mais cedo). A nota segue a heurística mais comum do jogo:
 * bolinhas empurradas para fora (o que decide a partida), ficar perto do centro (quem está na borda
 * corre o risco de ser empurrado) e manter as bolinhas juntas (fila junta empurra e não é empurrada).
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { applyMove, DIRECTIONS, key, legalDirections, type AbaloneState, type Axial, type PlayerId } from './abalone-engine';

const VITORIA = 1_000_000;

export type LanceAbalone = { fila: Axial[]; dir: Axial };

export const NIVEIS_ABALONE: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 30 },
  medio: { prof: 2, ruido: 0 },
  dificil: { prof: 3, ruido: 0 },
};

const casa = (k: string): Axial => {
  const [q, r] = k.split(',').map(Number);
  return { q: q!, r: r! };
};
/** Distância até o centro do hexágono (0 no meio, 4 na borda). */
const doCentro = (a: Axial) => Math.max(Math.abs(a.q), Math.abs(a.r), Math.abs(a.q + a.r));
// três direções, uma de cada eixo: as filas de 2 e 3 saem sem repetir
const EIXOS = DIRECTIONS.slice(0, 3);

export function lancesAbalone(s: AbaloneState): LanceAbalone[] {
  if (s.winner !== null) return [];
  const empurroes: LanceAbalone[] = [];
  const outros: LanceAbalone[] = [];
  const filas: Axial[][] = [];
  for (const [k, dono] of Object.entries(s.board)) {
    if (dono !== s.turn) continue;
    const a = casa(k);
    filas.push([a]);
    for (const e of EIXOS) {
      const b = { q: a.q + e.q, r: a.r + e.r };
      if (s.board[key(b)] !== s.turn) continue;
      filas.push([a, b]);
      const c = { q: b.q + e.q, r: b.r + e.r };
      if (s.board[key(c)] === s.turn) filas.push([a, b, c]);
    }
  }
  for (const fila of filas)
    for (const { dir, kind } of legalDirections(s, fila)) (kind === 'sumito' ? empurroes : outros).push({ fila, dir });
  return [...empurroes, ...outros];
}

export const jogarAbalone = (s: AbaloneState, l: LanceAbalone) => applyMove(s, l.fila, l.dir);

function posicao(s: AbaloneState, p: PlayerId): number {
  let centro = 0;
  let juntas = 0;
  for (const [k, dono] of Object.entries(s.board)) {
    if (dono !== p) continue;
    const a = casa(k);
    centro += 4 - doCentro(a);
    for (const d of DIRECTIONS) if (s.board[key({ q: a.q + d.q, r: a.r + d.r })] === p) juntas++;
  }
  return centro * 4 + juntas;
}

export function avaliarAbalone(s: AbaloneState): number {
  const eu = s.turn;
  const ele = (1 - eu) as PlayerId;
  return (s.lost[ele] - s.lost[eu]) * 1000 + posicao(s, eu) - posicao(s, ele);
}

export const BUSCA_ABALONE: JogoBusca<AbaloneState, LanceAbalone> = {
  lances: lancesAbalone,
  aplicar: jogarAbalone,
  avaliar: avaliarAbalone,
  // o motor passa a vez também no lance que vence: quem tem a vez é quem perdeu
  fim: (s) => (s.winner === null ? null : s.winner === s.turn ? VITORIA : -VITORIA),
};

export function lanceAbalone(s: AbaloneState, nivel: NivelLinu, semente = Math.random): LanceAbalone | null {
  const { prof, ruido } = NIVEIS_ABALONE[nivel];
  return escolherLance(s, prof, BUSCA_ABALONE, ruido, semente);
}
