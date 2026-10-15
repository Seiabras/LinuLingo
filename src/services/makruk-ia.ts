/**
 * O Linu no makruk. Usa a busca negamax com poda alfa-beta comum dos jogos (`escolherLance` em
 * `jogos-ia.ts`). A nota é o material (ruea 500, ma 300, khon 250, met e bia ngai 180, bia 100), com
 * um bônus para o bia que avança e para as peças perto do centro.
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { aplicar, cx, lancesLegais, lx, VALOR_M, type LanceM, type MakrukState } from './makruk-engine';

const VITORIA = 1_000_000;
const CENTRO = [0, 1, 2, 3, 3, 2, 1, 0];

export const NIVEIS_MAKRUK: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 120 },
  medio: { prof: 2, ruido: 0 },
  dificil: { prof: 3, ruido: 0 },
};

/** Nota da posição para quem tem a vez. */
export function avaliarMakruk(s: MakrukState): number {
  let nota = 0;
  s.board.forEach((p, i) => {
    if (!p) return;
    let v = VALOR_M[p.tipo];
    if (p.tipo === 'p') v += (p.cor === 'w' ? 5 - lx(i) : lx(i) - 2) * 12;
    if (p.tipo === 'n' || p.tipo === 's' || p.tipo === 'm' || p.tipo === 'f') v += (CENTRO[lx(i)]! + CENTRO[cx(i)]!) * 3;
    nota += p.cor === s.turn ? v : -v;
  });
  return nota;
}

export const BUSCA_MAKRUK: JogoBusca<MakrukState, LanceM> = {
  // capturas e promoções primeiro: a poda corta mais
  lances: (s) => lancesLegais(s).sort((a, b) => (b.capturada ? VALOR_M[b.capturada] : 0) + (b.promove ? 80 : 0) - ((a.capturada ? VALOR_M[a.capturada] : 0) + (a.promove ? 80 : 0))),
  aplicar: (s, l) => aplicar(s, l),
  avaliar: avaliarMakruk,
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
};

export function lanceMakruk(s: MakrukState, nivel: NivelLinu, semente = Math.random): LanceM | null {
  const { prof, ruido } = NIVEIS_MAKRUK[nivel];
  return escolherLance(s, prof, BUSCA_MAKRUK, ruido, semente);
}
