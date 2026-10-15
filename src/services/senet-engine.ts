/**
 * Motor do senet, na reconstrução moderna de Timothy Kendall (“Passing Through the Netherworld”, 1978),
 * como a Wikipédia em inglês (“Senet”, consultada em 15/10/2026) a resume. A Wikipédia lembra que as
 * regras de Kendall e as de R. C. Bell são reconstruções a partir de trechos de textos de mais de mil
 * anos, e que não devem ser iguais às do jogo antigo.
 *
 *   - 30 casas em 3 fileiras de 10; o caminho é em zigue-zague (1–10 para a direita, 11–20 para a
 *     esquerda, 21–30 para a direita); cada jogador tem 5 peões, fora do tabuleiro no começo;
 *   - 4 varetas de dois lados: anda-se o número de lados claros para cima (1 a 4); 4 escuros valem 5;
 *   - entrar: o peão é posto na casa 1 e anda o número tirado;
 *   - cair num peão seu: o que chegou volta para a primeira casa vazia;
 *   - cair num peão do adversário: captura (não obrigatória); o do adversário volta para a primeira
 *     casa vazia;
 *   - 3 ou mais peões seguidos de um jogador formam uma barreira que o outro não pode passar;
 *   - casa 15 (o ankh): casa comum, ligada à 27;
 *   - casa 26 (a casa da felicidade): não se pode pular; todo peão tem de parar nela antes de sair;
 *   - casa 27 (a casa da água): o peão que cai nela vai para a 15 (ou para a primeira vazia antes dela);
 *   - casas 28 e 29: o peão fica preso, não pode ser capturado e sai com exatamente 3 (na 28) ou 2 (na 29);
 *   - casa 30: pode ser capturado; sai com exatamente 1, ou com qualquer número se as casas 1 a 10
 *     estiverem vazias.
 *
 * Onde o resumo é omisso, o app escolheu (e a ficha diz): “primeira casa vazia” é a de número mais
 * baixo; da casa 26, o 5 tira o peão do tabuleiro; um peão não pode cair em cima de um da barreira.
 */
import { contaMarcados, lancarLotes, type Sorteio } from './lotes';

export type LadoS = 0 | 1;
export const PEOES = 5;
export const FORA = 0;
export const SAIU = 31;
export const VARETAS = 4;

export interface SenetState {
  /** a casa de cada peão: 0 = fora, por entrar; 1…30 no tabuleiro; 31 = saiu */
  pos: [number[], number[]];
  turn: LadoS;
  fase: 'lancar' | 'mover';
  varetas: boolean[] | null;
  tirou: number | null;
  winner: LadoS | null;
  ultimo: { lado: LadoS; de: number; para: number; capturado: number | null; voltou: number | null } | null;
  passou: boolean;
  lancamentos: number;
}

export const outro = (l: LadoS): LadoS => (l === 0 ? 1 : 0);
/** O valor das varetas: os lados claros para cima; nenhum claro vale 5. */
export const valorVaretas = (v: boolean[]) => contaMarcados(v) || 5;

export function createInitialState(): SenetState {
  return { pos: [Array(PEOES).fill(FORA), Array(PEOES).fill(FORA)], turn: 0, fase: 'lancar', varetas: null, tirou: null, winner: null, ultimo: null, passou: false, lancamentos: 0 };
}

/** de quem é a casa `c` (ou null) */
const dono = (s: SenetState, c: number): LadoS | null => (s.pos[0].includes(c) ? 0 : s.pos[1].includes(c) ? 1 : null);

/** As casas que fazem parte de uma barreira (3 ou mais peões seguidos do mesmo lado). */
export function barreiras(s: SenetState, lado: LadoS): Set<number> {
  const r = new Set<number>();
  let seq: number[] = [];
  for (let c = 1; c <= 30; c++) {
    if (dono(s, c) === lado) seq.push(c);
    else {
      if (seq.length >= 3) seq.forEach((x) => r.add(x));
      seq = [];
    }
  }
  if (seq.length >= 3) seq.forEach((x) => r.add(x));
  return r;
}

/** A primeira casa vazia (a de número mais baixo), ignorando a casa `exceto`. */
function primeiraVazia(s: SenetState, exceto: number[] = []): number {
  for (let c = 1; c <= 30; c++) if (dono(s, c) === null && !exceto.includes(c)) return c;
  return 1;
}

/** Para onde vai o peão que está em `de` com o número `n` (null = não pode). `SAIU` = sai do tabuleiro. */
export function destino(s: SenetState, de: number, n: number): number | null {
  const lado = s.turn;
  const inicio = de === FORA ? 1 : de;
  if (de === 28) return n === 3 ? SAIU : null;
  if (de === 29) return n === 2 ? SAIU : null;
  if (de === 30) {
    const vazias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].every((c) => dono(s, c) === null);
    return n === 1 || vazias ? SAIU : null;
  }
  if (de === 26 && n === 5) return SAIU;
  const para = inicio + n;
  if (para > 30) return null;
  // a casa 26 não pode ser pulada
  if (inicio < 26 && para > 26) return null;
  // a barreira do adversário não se passa nem se ocupa
  const barra = barreiras(s, outro(lado));
  for (let c = inicio + 1; c <= para; c++) if (barra.has(c)) return null;
  // nas casas 28 e 29 o peão do adversário não pode ser capturado
  if ((para === 28 || para === 29) && dono(s, para) === outro(lado)) return null;
  return para;
}

/** As casas de origem que podem andar com o número tirado (0 = entrar com um peão de fora). */
export function origensLegais(s: SenetState, n: number = s.tirou ?? 0): number[] {
  if (s.winner !== null || n === 0) return [];
  const r = new Set<number>();
  for (const p of s.pos[s.turn]) if (p !== SAIU && !r.has(p) && destino(s, p, n) !== null) r.add(p);
  return [...r].sort((a, b) => a - b);
}

export function lancarCom(s: SenetState, varetas: boolean[]): SenetState {
  if (s.winner !== null || s.fase !== 'lancar') return s;
  const n = valorVaretas(varetas);
  const e: SenetState = { ...s, varetas, tirou: n, fase: 'mover', passou: false, lancamentos: s.lancamentos + 1 };
  if (origensLegais(e).length === 0) return { ...e, fase: 'lancar', turn: outro(s.turn), passou: true };
  return e;
}
export const lancar = (s: SenetState, sorteio: Sorteio = Math.random) => lancarCom(s, lancarLotes(VARETAS, sorteio));

export function mover(s: SenetState, de: number): SenetState {
  if (s.fase !== 'mover' || !origensLegais(s).includes(de)) return s;
  const lado = s.turn;
  const ele = outro(lado);
  let para = destino(s, de, s.tirou!)!;
  const pos: [number[], number[]] = [s.pos[0].slice(), s.pos[1].slice()];
  const i = pos[lado].indexOf(de);
  let capturado: number | null = null;
  let voltou: number | null = null;
  pos[lado][i] = -1; // tira o peão do lugar enquanto decide para onde ele vai
  const tmp = (): SenetState => ({ ...s, pos });
  if (para !== SAIU) {
    if (pos[lado].includes(para)) {
      // caiu num peão seu: o que chegou volta para a primeira casa vazia
      para = primeiraVazia(tmp());
    } else if (pos[ele].includes(para)) {
      // captura: o peão do adversário volta para a primeira casa vazia
      const k = pos[ele].indexOf(para);
      capturado = para;
      voltou = primeiraVazia(tmp(), [para]);
      pos[ele][k] = voltou;
    }
    // a casa da água manda para a 15 (ou para a primeira vazia antes dela)
    if (para === 27) {
      let c = 15;
      while (c > 1 && (pos[0].includes(c) || pos[1].includes(c))) c--;
      para = c;
    }
  }
  pos[lado][i] = para;
  const venceu = pos[lado].every((p) => p === SAIU);
  return { ...s, pos, fase: 'lancar', turn: venceu ? lado : ele, winner: venceu ? lado : null, ultimo: { lado, de, para, capturado, voltou }, passou: false };
}

/** A posição (linha, coluna) da casa na grade 3×10, em zigue-zague. */
export function lugarDa(c: number): { linha: number; coluna: number } {
  const linha = Math.floor((c - 1) / 10);
  const k = (c - 1) % 10;
  return { linha, coluna: linha === 1 ? 9 - k : k };
}
