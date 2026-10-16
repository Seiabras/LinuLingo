/**
 * O Linu no terni lapilli: a busca comum dos jogos (`escolherLance`), com nota pelas linhas (duas
 * peças minhas e a terceira casa vazia é ameaça).
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { LINHAS_TERNI, jogar, lancesLegais, type LanceT, type TerniState } from './terni-engine';

const VITORIA = 1_000_000;

export const NIVEIS_TERNI: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 40 },
  medio: { prof: 3, ruido: 0 },
  dificil: { prof: 6, ruido: 0 },
};

export function avaliarTerni(s: TerniState): number {
  let nota = 0;
  for (const l of LINHAS_TERNI) {
    let m = 0;
    let o = 0;
    for (const i of l) {
      if (s.board[i] === s.turn) m++;
      else if (s.board[i] !== null) o++;
    }
    if (o === 0) nota += m === 2 ? 30 : m;
    if (m === 0) nota -= o === 2 ? 30 : o;
  }
  // o meio é a casa que mais linhas cruza
  if (s.board[4] === s.turn) nota += 4;
  else if (s.board[4] !== null) nota -= 4;
  return nota;
}

export const BUSCA_TERNI: JogoBusca<TerniState, LanceT> = {
  lances: lancesLegais,
  aplicar: jogar,
  avaliar: avaliarTerni,
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
};

export function lanceTerni(s: TerniState, nivel: NivelLinu, semente = Math.random): LanceT | null {
  const { prof, ruido } = NIVEIS_TERNI[nivel];
  return escolherLance(s, prof, BUSCA_TERNI, ruido, semente);
}
