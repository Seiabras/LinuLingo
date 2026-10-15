/**
 * O Linu no Quixo (só a dois). Usa a busca negamax com poda alfa-beta comum dos jogos
 * (`escolherLance` em `jogos-ia.ts`). A nota de uma posição olha as 12 linhas: uma linha só com
 * cubos seus (e lisos) vale mais quanto mais cubos seus ela tem; uma só com os do adversário, o
 * contrário. Quem forma a linha do adversário perde, e a busca já vê isso pelo `fim`.
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { LINHAS, jogar, lancesLegais, simboloDaVez, simboloDe, type LanceQuixo, type QuixoState } from './quixo-engine';

const VITORIA = 1_000_000;
const PESO = [0, 1, 6, 30, 160, 0];

export const NIVEIS_QUIXO: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 40 },
  medio: { prof: 2, ruido: 0 },
  dificil: { prof: 3, ruido: 0 },
};

/** Nota da posição para o símbolo `meu`. */
export function avaliarQuixo(board: number[], meu: 1 | 2): number {
  let nota = 0;
  for (const l of LINHAS) {
    let m = 0;
    let o = 0;
    for (const i of l) {
      const s = simboloDe(board[i]!);
      if (s === meu) m++;
      else if (s !== 0) o++;
    }
    if (o === 0) nota += PESO[m]!;
    if (m === 0) nota -= PESO[o]!;
  }
  return nota;
}

export const BUSCA_QUIXO: JogoBusca<QuixoState, LanceQuixo> = {
  lances: (s) => lancesLegais(s),
  aplicar: (s, l) => jogar(s, l),
  avaliar: (s) => avaliarQuixo(s.board, simboloDaVez(s.turn)),
  // depois de um lance que acaba a partida a vez não passa: quem “teria a vez” é o outro
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === simboloDaVez(s.turn) ? -VITORIA : VITORIA),
};

export function lanceQuixo(s: QuixoState, nivel: NivelLinu, semente = Math.random): LanceQuixo | null {
  const { prof, ruido } = NIVEIS_QUIXO[nivel];
  return escolherLance(s, prof, BUSCA_QUIXO, ruido, semente);
}
