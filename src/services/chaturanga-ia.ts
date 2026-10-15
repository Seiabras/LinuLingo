/**
 * O Linu no chaturanga. Usa a busca negamax com poda alfa-beta comum dos jogos (`escolherLance` em
 * `jogos-ia.ts`). A nota é o material (ratha 500, ashva 300, mantri 150, gaja 140, padati 100), com um
 * bônus para o padati que avança e para as peças perto do centro.
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { aplicar, cx, lancesLegais, lx, VALOR_C, type ChaturangaState, type LanceC } from './chaturanga-engine';

const VITORIA = 1_000_000;
const CENTRO = [0, 1, 2, 3, 3, 2, 1, 0];

export const NIVEIS_CHATURANGA: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 120 },
  medio: { prof: 2, ruido: 0 },
  dificil: { prof: 3, ruido: 0 },
};

export function avaliarChaturanga(s: ChaturangaState): number {
  let nota = 0;
  s.board.forEach((p, i) => {
    if (!p) return;
    let v = VALOR_C[p.tipo];
    if (p.tipo === 'p') v += (p.cor === 'w' ? 6 - lx(i) : lx(i) - 1) * 10;
    if (p.tipo === 'n' || p.tipo === 'g' || p.tipo === 'm') v += (CENTRO[lx(i)]! + CENTRO[cx(i)]!) * 3;
    nota += p.cor === s.turn ? v : -v;
  });
  return nota;
}

export const BUSCA_CHATURANGA: JogoBusca<ChaturangaState, LanceC> = {
  lances: (s) => lancesLegais(s).sort((a, b) => (b.capturada ? VALOR_C[b.capturada] : 0) + (b.promove ? 60 : 0) - ((a.capturada ? VALOR_C[a.capturada] : 0) + (a.promove ? 60 : 0))),
  aplicar: (s, l) => aplicar(s, l),
  avaliar: avaliarChaturanga,
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
};

export function lanceChaturanga(s: ChaturangaState, nivel: NivelLinu, semente = Math.random): LanceC | null {
  const { prof, ruido } = NIVEIS_CHATURANGA[nivel];
  return escolherLance(s, prof, BUSCA_CHATURANGA, ruido, semente);
}
