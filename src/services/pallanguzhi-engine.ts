/**
 * Motor do pallanguzhi (pallankuzhi), a mancala dos tâmeis do sul da Índia e do Sri Lanka. Regras
 * do Mancala World, verbete “Pallankuzhi” (consultado em 15/10/2026; as regras de lá vêm de uma versão
 * da Wikipédia em inglês e citam Parker 1909, Murray 1951, Bell 1960 e outros):
 *
 *   - 14 covas, 7 de cada jogador; 6 sementes em cada uma (em algumas regiões, 4 ou 5);
 *   - na vez, o jogador pega as sementes de uma cova sua e semeia uma por cova, no sentido
 *     anti-horário, passando para o lado do adversário;
 *   - depois da última semente, pega as sementes da cova seguinte e continua semeando;
 *   - se a cova seguinte está vazia, captura as sementes da cova logo depois dela, e continua se a
 *     cova seguinte a essa tiver sementes; se as duas covas seguintes estão vazias, a vez acaba;
 *   - “pasu”: a cova que fica com 4 sementes ao receber uma semente é capturada por quem a deixou;
 *   - quem não tem sementes para jogar termina a rodada, e o adversário fica com o que sobrou;
 *   - o jogo segue em rodadas, com as covas que não dá para encher fechadas (“covas de lixo”).
 *
 * As fontes divergem: a Wikipédia em inglês de hoje (verbete “Pallanguzhi”) diz 12 sementes por cova
 * (2 na do meio) e “pasu” com 6. Aqui ficam as do Mancala World (6 sementes, “pasu” com 4).
 * Simplificação: o app joga uma rodada só, e vence quem capturou mais nela.
 */
import { LIMITE_SEMENTES, casasDe, deposito, donoDa, encerrar, seguinte, sementesDoLado, type EstadoMancala, type EventoM, type JogadorM } from './mancala-familia';

export const N_PALLANGUZHI = 7;
export const SEMENTES_PALLANGUZHI = 6;
export const PASU = 4;

export function createInitialState(primeiro: JogadorM = 0): EstadoMancala {
  const n = N_PALLANGUZHI;
  const covas = Array(2 * n + 2).fill(SEMENTES_PALLANGUZHI);
  covas[deposito(n, 0)] = 0;
  covas[deposito(n, 1)] = 0;
  return { n, covas, turn: primeiro, winner: null, ultimo: null };
}

export function lancesLegais(s: EstadoMancala): number[] {
  if (s.winner !== null) return [];
  return casasDe(s.n, s.turn).filter((i) => s.covas[i]! > 0);
}

export function jogar(s: EstadoMancala, i: number): EstadoMancala {
  if (!lancesLegais(s).includes(i)) return s;
  const { n } = s;
  const eu = s.turn;
  const meu = deposito(n, eu);
  const covas = s.covas.slice();
  const eventos: EventoM[] = [];
  const prox = (p: number) => seguinte(n, p, (x) => x === n || x === 2 * n + 1);
  const capturar = (c: number) => {
    if (covas[c]! === 0) return;
    eventos.push({ t: 'captura', de: [c], para: meu });
    covas[meu]! += covas[c]!;
    covas[c] = 0;
  };
  let mao = covas[i]!;
  covas[i] = 0;
  eventos.push({ t: 'pega', i });
  let pos = i;
  let deixadas = 0;
  for (;;) {
    while (mao > 0 && deixadas < LIMITE_SEMENTES) {
      pos = prox(pos);
      covas[pos]!++;
      mao--;
      deixadas++;
      eventos.push({ t: 'semeia', i: pos });
      if (covas[pos] === PASU) capturar(pos);
    }
    if (deixadas >= LIMITE_SEMENTES) break;
    const q = prox(pos);
    if (covas[q]! > 0) {
      // revezamento: pega a cova seguinte e continua
      mao = covas[q]!;
      covas[q] = 0;
      eventos.push({ t: 'pega', i: q });
      pos = q;
      continue;
    }
    const r = prox(q);
    if (covas[r]! === 0) break; // duas covas vazias: a vez acaba
    capturar(r);
    const t = prox(r);
    if (covas[t]! === 0) break;
    mao = covas[t]!;
    covas[t] = 0;
    eventos.push({ t: 'pega', i: t });
    pos = t;
  }
  let next: EstadoMancala = { ...s, covas, turn: eu === 0 ? 1 : 0, ultimo: { de: i, eventos, jogaDeNovo: false, passou: false } };
  // quem não tem sementes para jogar termina a rodada: o adversário fica com o que sobrou
  if (sementesDoLado(next, next.turn) === 0) next = encerrar(next, eventos, () => eu);
  return next;
}

/** De quem é cada cova (para o tabuleiro). */
export const dono = (i: number) => donoDa(N_PALLANGUZHI, i);
