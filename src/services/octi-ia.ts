/**
 * O Linu no Octi. Usa a busca negamax com poda alfa-beta comum dos jogos (`escolherLance` em
 * `jogos-ia.ts`). Um turno de saltos é uma sequência de lances do mesmo jogador (`vez`): cada salto,
 * a captura (ou não) da peça saltada e o fim do turno. A nota é a corrida até a base do outro: quanto
 * falta para a peça mais adiantada chegar, as peças que já chegam lá no lance seguinte, as peças
 * vivas e os pinos instalados e na reserva.
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import {
  addProng,
  basesOf,
  canCaptureJumped,
  captureJumped,
  endTurn,
  freeDirections,
  jump,
  legalJumpHops,
  legalSteps,
  movePod,
  type OctiState,
  type PlayerId,
  type Pos,
} from './octi-engine';

const VITORIA = 1_000_000;

export type LanceOcti =
  | { tipo: 'pino'; pod: number; dir: number }
  | { tipo: 'andar'; pod: number; para: Pos }
  | { tipo: 'saltar'; pod: number; para: Pos }
  | { tipo: 'capturar' }
  | { tipo: 'encerrar' };

export const NIVEIS_OCTI: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 40 },
  // um turno de saltos gasta vários níveis da busca (cada salto, a captura e o fim do turno): por isso
  // olha mais fundo que nos outros jogos, para ainda enxergar a resposta do outro
  medio: { prof: 3, ruido: 0 },
  dificil: { prof: 4, ruido: 0 },
};

export function lancesOcti(s: OctiState): LanceOcti[] {
  if (s.winner !== null) return [];
  if (s.phase.kind === 'salto') {
    const out: LanceOcti[] = legalJumpHops(s, s.phase.podId).map((h) => ({ tipo: 'saltar', pod: (s.phase as { podId: number }).podId, para: h.to }));
    if (canCaptureJumped(s)) out.unshift({ tipo: 'capturar' });
    out.push({ tipo: 'encerrar' });
    return out;
  }
  const out: LanceOcti[] = [];
  for (const p of s.pods) {
    if (p.player !== s.turn) continue;
    for (const h of legalJumpHops(s, p.id)) out.push({ tipo: 'saltar', pod: p.id, para: h.to });
    for (const para of legalSteps(s, p.id)) out.push({ tipo: 'andar', pod: p.id, para });
    if (s.reserve[s.turn] > 0) for (const dir of freeDirections(p)) out.push({ tipo: 'pino', pod: p.id, dir });
  }
  return out;
}

export function jogarOcti(s: OctiState, l: LanceOcti): OctiState {
  switch (l.tipo) {
    case 'pino':
      return addProng(s, l.pod, l.dir);
    case 'andar':
      return movePod(s, l.pod, l.para);
    case 'saltar':
      return jump(s, l.pod, l.para);
    case 'capturar':
      return captureJumped(s);
    case 'encerrar':
      return endTurn(s);
  }
}

/** A nota de um lado: pensa como se fosse a vez dele (para ver o que ele já alcança). */
function notaDe(s: OctiState, p: PlayerId): number {
  const alvo = basesOf((1 - p) as PlayerId);
  const minhas = s.pods.filter((x) => x.player === p);
  const comoSeFosse: OctiState = { ...s, turn: p, phase: { kind: 'normal' } };
  let nota = minhas.length * 80 + s.reserve[p] * 3;
  let maisPerto = 99;
  let chegam = 0;
  for (const pod of minhas) {
    nota += pod.prongs.size * 6;
    const dist = Math.min(...alvo.map((b) => Math.max(Math.abs(b.row - pod.row), Math.abs(b.col - pod.col))));
    maisPerto = Math.min(maisPerto, dist);
    nota -= dist * 3;
    const destinos = [...legalSteps(comoSeFosse, pod.id), ...legalJumpHops(comoSeFosse, pod.id).map((h) => h.to)];
    if (destinos.some((d) => alvo.some((b) => b.row === d.row && b.col === d.col))) chegam++;
  }
  return nota - maisPerto * 25 + chegam * 400;
}

export function avaliarOcti(s: OctiState): number {
  return notaDe(s, s.turn) - notaDe(s, (1 - s.turn) as PlayerId);
}

export const BUSCA_OCTI: JogoBusca<OctiState, LanceOcti> = {
  lances: lancesOcti,
  aplicar: jogarOcti,
  avaliar: avaliarOcti,
  // na vitória por chegar à base, o motor deixa a vez com quem venceu; no bloqueio, passa para o outro
  fim: (s) => (s.winner === null ? null : s.winner === s.turn ? VITORIA : -VITORIA),
  vez: (s) => s.turn,
};

export function lanceOcti(s: OctiState, nivel: NivelLinu, semente = Math.random): LanceOcti | null {
  const { prof, ruido } = NIVEIS_OCTI[nivel];
  return escolherLance(s, prof, BUSCA_OCTI, ruido, semente);
}
