/**
 * O Linu no mū tōrere. O jogo é pequeno (pouco mais de mil posições), então o Linu calcula o jogo
 * inteiro de trás para a frente (análise retrógrada): cada posição fica marcada como vitória, derrota
 * ou empate de quem tem a vez, com quantos lances faltam. No difícil ele joga perfeito (vence o mais
 * rápido que puder e, perdido, adia ao máximo); no médio, não entrega a partida mas não procura a
 * vitória mais curta; no fácil, erra metade das vezes.
 */
import type { NivelLinu } from './jogos-prefs';
import { lancesDe, type JogadorMT, type LanceMT, type MuTorereState, type RegraMT } from './mutorere-engine';

type Valor = { r: 'vence' | 'perde' | 'empata'; d: number };

/** Estado da análise: o tabuleiro, a vez e a fase (lances feitos, até 4; depois disso a regra não muda mais). */
const chave = (board: (JogadorMT | null)[], turn: JogadorMT, fase: number) => board.map((v) => (v === null ? '.' : v)).join('') + turn + fase;

interface No {
  board: (JogadorMT | null)[];
  turn: JogadorMT;
  fase: number;
  filhos: string[];
}

const tabelas = new Map<RegraMT, Map<string, Valor>>();

function aplicar(board: (JogadorMT | null)[], l: LanceMT) {
  const b = [...board];
  b[l.para] = b[l.de]!;
  b[l.de] = null;
  return b;
}

/** Monta (uma vez por regra) o valor de todas as posições alcançáveis a partir do começo. */
export function tabelaMT(regra: RegraMT): Map<string, Valor> {
  const pronta = tabelas.get(regra);
  if (pronta) return pronta;
  const nos = new Map<string, No>();
  // começa dos dois jogadores, para valer quem quer que comece
  const fila: { board: (JogadorMT | null)[]; turn: JogadorMT; fase: number }[] = [
    { board: [0, 0, 0, 0, 1, 1, 1, 1, null], turn: 0, fase: 0 },
    { board: [0, 0, 0, 0, 1, 1, 1, 1, null], turn: 1, fase: 0 },
  ];
  while (fila.length) {
    const p = fila.pop()!;
    const k = chave(p.board, p.turn, p.fase);
    if (nos.has(k)) continue;
    const filhos: string[] = [];
    for (const l of lancesDe(p.board, p.turn, regra, p.fase)) {
      const b = aplicar(p.board, l);
      const t: JogadorMT = p.turn === 0 ? 1 : 0;
      const f = Math.min(4, p.fase + 1);
      filhos.push(chave(b, t, f));
      fila.push({ board: b, turn: t, fase: f });
    }
    nos.set(k, { ...p, filhos });
  }
  const val = new Map<string, Valor>();
  for (const [k, n] of nos) if (n.filhos.length === 0) val.set(k, { r: 'perde', d: 0 });
  let mudou = true;
  while (mudou) {
    mudou = false;
    for (const [k, n] of nos) {
      if (val.has(k)) continue;
      const vs = n.filhos.map((f) => val.get(f));
      const perdedores = vs.filter((v): v is Valor => !!v && v.r === 'perde');
      if (perdedores.length) {
        val.set(k, { r: 'vence', d: Math.min(...perdedores.map((v) => v.d)) + 1 });
        mudou = true;
      } else if (vs.every((v) => v && v.r === 'vence')) {
        val.set(k, { r: 'perde', d: Math.max(...vs.map((v) => v!.d)) + 1 });
        mudou = true;
      }
    }
  }
  for (const k of nos.keys()) if (!val.has(k)) val.set(k, { r: 'empata', d: 0 });
  tabelas.set(regra, val);
  return val;
}

/** O valor de uma posição para quem tem a vez nela. */
export function valorMT(s: Pick<MuTorereState, 'board' | 'turn' | 'regra' | 'lances'>): Valor {
  return tabelaMT(s.regra).get(chave(s.board, s.turn, Math.min(4, s.lances))) ?? { r: 'empata', d: 0 };
}

/** Nota de um lance para quem joga (maior é melhor). */
function nota(s: MuTorereState, l: LanceMT): number {
  const t: JogadorMT = s.turn === 0 ? 1 : 0;
  const v = valorMT({ board: aplicar(s.board, l), turn: t, regra: s.regra, lances: s.lances + 1 });
  // o valor é do adversário: se ele perde, eu venço
  if (v.r === 'perde') return 1000 - v.d;
  if (v.r === 'vence') return -1000 + v.d;
  return 0;
}

export function lanceMuTorere(s: MuTorereState, nivel: NivelLinu, rng: () => number = Math.random): LanceMT | null {
  const ls = lancesDe(s.board, s.turn, s.regra, s.lances);
  if (!ls.length) return null;
  const sorteia = (xs: LanceMT[]) => xs[Math.floor(rng() * xs.length)]!;
  if (nivel === 'facil' && rng() < 0.5) return sorteia(ls);
  const notas = ls.map((l) => ({ l, n: nota(s, l) }));
  if (nivel === 'medio') {
    // não entrega a partida, vence quando a vitória é imediata, e no resto joga ao acaso
    const ganha = notas.filter((x) => x.n === 999);
    if (ganha.length) return ganha[0]!.l;
    const seguros = notas.filter((x) => x.n >= 0);
    return sorteia((seguros.length ? seguros : notas).map((x) => x.l));
  }
  const melhor = Math.max(...notas.map((x) => x.n));
  return sorteia(notas.filter((x) => x.n === melhor).map((x) => x.l));
}
