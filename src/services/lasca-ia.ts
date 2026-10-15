/**
 * O Linu no Lasca. Usa a busca negamax com poda alfa-beta comum dos jogos (`escolherLance` em
 * `jogos-ia.ts`); cada pulo de uma sequência de capturas é um lance do mesmo jogador (`vez`). A nota
 * conta as colunas que cada lado domina (as do oficial valem mais) e as peças presas: uma peça própria
 * presa debaixo de uma coluna do adversário pode ser libertada, então vale um pouco.
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { jogar, lancesLegais, lx, topo, type LanceL, type LascaState } from './lasca-engine';

const VITORIA = 1_000_000;

export const NIVEIS_LASCA: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 2, ruido: 80 },
  medio: { prof: 4, ruido: 0 },
  dificil: { prof: 6, ruido: 0 },
};

export function avaliarLasca(s: LascaState): number {
  const eu = s.turn;
  let nota = 0;
  s.board.forEach((col, i) => {
    const t = topo(col);
    if (!t || !col) return;
    // a coluna dominada vale mais com oficial em cima e com mais peças próprias dentro
    let v = t.oficial ? 260 : 100 + (t.cor === 'w' ? 6 - lx(i) : lx(i)) * 6;
    for (const p of col.slice(0, -1)) v += p.cor === t.cor ? 40 : 25;
    nota += t.cor === eu ? v : -v;
  });
  return nota;
}

export const BUSCA_LASCA: JogoBusca<LascaState, LanceL> = {
  // capturas primeiro (já vêm sozinhas quando existem)
  lances: (s) => lancesLegais(s),
  aplicar: (s, l) => jogar(s, l),
  avaliar: avaliarLasca,
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
  vez: (s) => s.turn,
};

export function lanceLasca(s: LascaState, nivel: NivelLinu, semente = Math.random): LanceL | null {
  const { prof, ruido } = NIVEIS_LASCA[nivel];
  return escolherLance(s, prof, BUSCA_LASCA, ruido, semente);
}
