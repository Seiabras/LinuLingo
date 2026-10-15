/**
 * O Linu no janggi. Usa a busca negamax com poda alfa-beta comum dos jogos (`escolherLance` em
 * `jogos-ia.ts`). A nota é o material, com os próprios pontos do janggi (carro 13, canhão 7, cavalo 5,
 * elefante 3, guarda 3, soldado 2, ×100), um bônus pequeno para o soldado que avança e para o canhão
 * enquanto há muitas peças para ele pular. O passe entra na busca como um lance a mais.
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { jogar, lancesLegais, lx, PONTOS_J, type JanggiState, type LanceJ } from './janggi-engine';

const VITORIA = 1_000_000;

export const NIVEIS_JANGGI: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 150 },
  medio: { prof: 2, ruido: 0 },
  dificil: { prof: 3, ruido: 0 },
};

/** Nota da posição para quem tem a vez. */
export function avaliarJanggi(s: JanggiState): number {
  let nota = 0;
  let pecas = 0;
  for (const p of s.board) if (p) pecas++;
  s.board.forEach((p, i) => {
    if (!p) return;
    let v = PONTOS_J[p.tipo] * 100;
    // o soldado vale um pouco mais perto do palácio do adversário
    if (p.tipo === 's') v += (p.cor === 'cho' ? 6 - lx(i) : lx(i) - 3) * 8;
    // o canhão precisa de plataformas: perde valor quando o tabuleiro esvazia
    if (p.tipo === 'c') v += (pecas - 20) * 6;
    nota += p.cor === s.turn ? v : -v;
  });
  return nota;
}

export const BUSCA_JANGGI: JogoBusca<JanggiState, LanceJ> = {
  // capturas primeiro (a poda corta mais); o passe fica no fim
  lances: (s) => lancesLegais(s).sort((a, b) => (b.capturada ? PONTOS_J[b.capturada] : 0) - (a.capturada ? PONTOS_J[a.capturada] : 0)),
  aplicar: (s, l) => jogar(s, l.de, l.para),
  avaliar: avaliarJanggi,
  fim: (s) => (s.winner === null ? null : s.winner === s.turn ? VITORIA : -VITORIA),
};

export function lanceJanggi(s: JanggiState, nivel: NivelLinu, semente = Math.random): LanceJ | null {
  const { prof, ruido } = NIVEIS_JANGGI[nivel];
  return escolherLance(s, prof, BUSCA_JANGGI, ruido, semente);
}
