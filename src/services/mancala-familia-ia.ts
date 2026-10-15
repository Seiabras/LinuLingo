/**
 * O Linu nas mancalas de revezamento (pallanguzhi, toguz korgool, sungka): a mesma busca negamax com
 * poda alfa-beta dos outros jogos (`jogos-ia.ts`), com a nota de sempre das mancalas — o que já está
 * no depósito vale muito, as sementes do próprio lado valem um pouco. No sungka, a vez extra (última
 * semente no próprio depósito) não troca o sinal da nota. Fácil olha 2 lances com ruído; médio, 4;
 * difícil, 6 (o toguz korgool tem a sua tabela, mais rasa).
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { casasDe, deposito, type EstadoMancala } from './mancala-familia';

const VITORIA = 1_000_000;

export interface MotorMancala {
  lancesLegais(s: EstadoMancala): number[];
  jogar(s: EstadoMancala, i: number): EstadoMancala;
}

export const NIVEIS_MANCALAS: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 2, ruido: 25 },
  medio: { prof: 4, ruido: 0 },
  dificil: { prof: 6, ruido: 0 },
};

export function buscaMancala(m: MotorMancala): JogoBusca<EstadoMancala, number> {
  return {
    lances: (s) => m.lancesLegais(s),
    aplicar: (s, i) => m.jogar(s, i),
    avaliar: (s) => {
      const eu = s.turn;
      const ele = eu === 0 ? 1 : 0;
      const lado = (j: 0 | 1) => casasDe(s.n, j).reduce((t, i) => t + s.covas[i]!, 0);
      return (s.covas[deposito(s.n, eu)]! - s.covas[deposito(s.n, ele)]!) * 10 + (lado(eu) - lado(ele));
    },
    fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
    vez: (s) => s.turn,
  };
}

/**
 * O toguz korgool tem 9 covas de cada lado e muitas bolinhas: a busca funda demora demais (medido: 3
 * meios-lances levam até ~0,2 s; 4, minutos). Por isso ele tem a sua tabela, mais rasa.
 */
export const NIVEIS_TOGUZ: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 25 },
  medio: { prof: 2, ruido: 0 },
  dificil: { prof: 3, ruido: 0 },
};

/** A casa que o Linu joga, ou null se não tem lance. */
export function lanceMancala(
  s: EstadoMancala,
  m: MotorMancala,
  nivel: NivelLinu,
  niveis: Record<NivelLinu, { prof: number; ruido: number }> = NIVEIS_MANCALAS,
  semente = Math.random,
): number | null {
  const { prof, ruido } = niveis[nivel];
  return escolherLance(s, prof, buscaMancala(m), ruido, semente);
}
