/**
 * Motor do sungka, a mancala das Filipinas. Regras do Mancala World, verbete “Sungka” (consultado em
 * 15/10/2026):
 *
 *   - duas fileiras de 7 casinhas (“bahay”, casa) e um depósito grande (“ulo”, cabeça, ou “inay”, mãe)
 *     em cada ponta; 7 conchas em cada casinha;
 *   - na vez, o jogador esvazia uma casinha sua e semeia uma concha por cova, passando pelo próprio
 *     depósito, mas não pelo do adversário;
 *   - se a última cai numa casinha que já tinha conchas (de qualquer lado), ele pega todas e continua;
 *   - se a última cai no próprio depósito, ele joga de novo;
 *   - se a última cai numa casinha vazia, a vez acaba (“patay”, morto); se a casinha é dele, ele
 *     captura as conchas da casinha da frente e a própria concha (“taktak”), se a da frente não estiver
 *     vazia;
 *   - quem não pode jogar passa a vez; o jogo acaba quando não há mais conchas nas casinhas, e vence
 *     quem capturou mais.
 *
 * O Mancala World diz que o jogo costuma ser no sentido horário, com o depósito à esquerda de cada um,
 * e que, segundo o Instituto Histórico Nacional das Filipinas, também se joga no anti-horário, com o
 * depósito à direita. Aqui é o anti-horário, como no Kalah e no oware do app.
 * Simplificação: no jogo de verdade, o primeiro lance é feito pelos dois AO MESMO TEMPO; aqui quem
 * começa é sorteado e as vezes se alternam desde o primeiro lance.
 */
import { LIMITE_SEMENTES, casasDe, deposito, donoDa, frente, seguinte, sementesDoLado, type EstadoMancala, type EventoM, type JogadorM } from './mancala-familia';

export const N_SUNGKA = 7;
export const CONCHAS = 7;

export function createInitialState(primeiro: JogadorM = 0): EstadoMancala {
  const n = N_SUNGKA;
  const covas = Array(2 * n + 2).fill(CONCHAS);
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
  const ele: JogadorM = eu === 0 ? 1 : 0;
  const meu = deposito(n, eu);
  const dele = deposito(n, ele);
  const covas = s.covas.slice();
  const eventos: EventoM[] = [{ t: 'pega', i }];
  const prox = (p: number) => seguinte(n, p, (x) => x === dele);
  let mao = covas[i]!;
  covas[i] = 0;
  let pos = i;
  let deixadas = 0;
  let jogaDeNovo = false;
  for (;;) {
    while (mao > 0) {
      pos = prox(pos);
      covas[pos]!++;
      mao--;
      deixadas++;
      eventos.push({ t: 'semeia', i: pos });
    }
    if (pos === meu) {
      jogaDeNovo = true;
      break;
    }
    if (covas[pos]! > 1 && deixadas < LIMITE_SEMENTES) {
      // a casinha já tinha conchas: pega todas e continua
      mao = covas[pos]!;
      covas[pos] = 0;
      eventos.push({ t: 'pega', i: pos });
      continue;
    }
    // caiu numa casinha vazia: acaba; se for minha e a da frente tiver conchas, captura as duas
    if (donoDa(n, pos) === eu && covas[pos] === 1 && covas[frente(n, pos)]! > 0) {
      const f = frente(n, pos);
      eventos.push({ t: 'captura', de: [f, pos], para: meu });
      covas[meu]! += covas[f]! + 1;
      covas[f] = 0;
      covas[pos] = 0;
    }
    break;
  }
  const vazio = (j: JogadorM) => casasDe(n, j).every((x) => covas[x] === 0);
  if (vazio(0) && vazio(1)) {
    const a = covas[deposito(n, 0)]!;
    const b = covas[deposito(n, 1)]!;
    return { ...s, covas, winner: a === b ? 'empate' : a > b ? 0 : 1, ultimo: { de: i, eventos, jogaDeNovo: false, passou: false } };
  }
  // joga de novo quem terminou no próprio depósito; quem não tem conchas passa a vez
  let turn: JogadorM = jogaDeNovo ? eu : ele;
  let passou = false;
  const proxima: EstadoMancala = { ...s, covas, turn };
  if (sementesDoLado(proxima, turn) === 0) {
    turn = turn === 0 ? 1 : 0;
    passou = true;
  }
  return { ...s, covas, turn, ultimo: { de: i, eventos, jogaDeNovo: jogaDeNovo && !passou, passou } };
}
