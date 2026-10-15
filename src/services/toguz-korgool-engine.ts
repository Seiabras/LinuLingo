/**
 * Motor do toguz korgool (togyz kumalak), a mancala do Quirguistão e do Cazaquistão. Regras do Mancala
 * World, verbete “Toguz Kumalak” (consultado em 15/10/2026), que batem com a Wikipédia em inglês,
 * “Toguz korgool”:
 *
 *   - duas fileiras de 9 covas e um depósito (“kazan”) para cada jogador; 9 bolinhas em cada cova
 *     (162 ao todo);
 *   - na vez, o jogador pega todas as bolinhas de uma cova sua que não seja “tuz” e semeia uma por
 *     cova, no sentido anti-horário; a primeira cai na própria cova que acabou de esvaziar (se a
 *     cova tinha só uma bolinha, ela vai para a cova seguinte);
 *   - se a última bolinha cai numa cova do adversário e ela fica com um número par, essas bolinhas
 *     vão para o kazan de quem jogou;
 *   - se a última cai numa cova do adversário e ela fica com 3, a cova vira a “tuz” de quem jogou;
 *     cada jogador só faz uma tuz na partida; a nona cova do adversário não pode virar tuz; nem a cova
 *     do mesmo número da tuz que o adversário já tem (o lance vale, só não cria a tuz);
 *   - as bolinhas que caem numa tuz são do dono dela (aqui elas vão para o kazan dele no fim do lance);
 *   - o jogo acaba quando quem tem a vez não tem bolinha em nenhuma cova sua (fora a tuz); as que
 *     sobraram ficam com o dono do lado; vence quem tiver mais no kazan e na tuz; 81 a 81 é empate.
 */
import { casasDe, deposito, donoDa, encerrar, numeroDaCasa, seguinte, sementesDoLado, type EstadoMancala, type EventoM, type JogadorM } from './mancala-familia';

export const N_TOGUZ = 9;
export const BOLINHAS = 9;

export function createInitialState(primeiro: JogadorM = 0): EstadoMancala {
  const n = N_TOGUZ;
  const covas = Array(2 * n + 2).fill(BOLINHAS);
  covas[deposito(n, 0)] = 0;
  covas[deposito(n, 1)] = 0;
  return { n, covas, turn: primeiro, winner: null, ultimo: null, tuz: [null, null] };
}

const tuzes = (s: EstadoMancala): [number | null, number | null] => s.tuz ?? [null, null];

export function lancesLegais(s: EstadoMancala): number[] {
  if (s.winner !== null) return [];
  const [t0, t1] = tuzes(s);
  return casasDe(s.n, s.turn).filter((i) => s.covas[i]! > 0 && i !== t0 && i !== t1);
}

export function jogar(s: EstadoMancala, i: number): EstadoMancala {
  if (!lancesLegais(s).includes(i)) return s;
  const { n } = s;
  const eu = s.turn;
  const ele: JogadorM = eu === 0 ? 1 : 0;
  const covas = s.covas.slice();
  const tuz = tuzes(s).slice() as [number | null, number | null];
  const eventos: EventoM[] = [{ t: 'pega', i }];
  const prox = (p: number) => seguinte(n, p, (x) => x === n || x === 2 * n + 1);
  let mao = covas[i]!;
  covas[i] = 0;
  // a primeira bolinha cai na própria cova (a não ser que fosse uma só)
  let pos = mao === 1 ? prox(i) : i;
  covas[pos]!++;
  eventos.push({ t: 'semeia', i: pos });
  mao--;
  while (mao > 0) {
    pos = prox(pos);
    covas[pos]!++;
    eventos.push({ t: 'semeia', i: pos });
    mao--;
  }
  const meuKazan = deposito(n, eu);
  if (donoDa(n, pos) === ele && pos !== tuz[0] && pos !== tuz[1]) {
    if (covas[pos]! % 2 === 0) {
      eventos.push({ t: 'captura', de: [pos], para: meuKazan });
      covas[meuKazan]! += covas[pos]!;
      covas[pos] = 0;
    } else if (covas[pos] === 3 && tuz[eu] === null && numeroDaCasa(n, pos) !== n && !(tuz[ele] !== null && numeroDaCasa(n, tuz[ele]!) === numeroDaCasa(n, pos))) {
      tuz[eu] = pos;
    }
  }
  // o que está em cada tuz é do dono dela
  for (const j of [0, 1] as const) {
    const t = tuz[j];
    if (t !== null && covas[t]! > 0) {
      eventos.push({ t: 'captura', de: [t], para: deposito(n, j) });
      covas[deposito(n, j)]! += covas[t]!;
      covas[t] = 0;
    }
  }
  let next: EstadoMancala = { ...s, covas, tuz, turn: ele, ultimo: { de: i, eventos, jogaDeNovo: false, passou: false } };
  if (sementesDoLado(next, ele) === 0) next = encerrar(next, eventos);
  return next;
}
